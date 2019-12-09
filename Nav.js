const canonicaljson = require('@stratumn/canonicaljson');
import ReactDOM from "react-dom";
import React from "react";
// Other IA repositories
import { homeQuery, ObjectFilter, specialidentifiers } from "@internetarchive/dweb-archivecontroller/Util";
import {I18nSpan, currentISO, getLanguage} from '@internetarchive/ia-components/dweb-index';
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import
// This repository
import ArchiveBase from './ArchiveBase';
import {Page} from "./components/Page";
const debug = require('debug')('dweb-archive:Nav');

function pushHistory(...optss) {
    //Note opts should NOT be urlencoded, it can be URLSearchParams in which case handled specially
    //Note - searchparams is a URLSearchParams, you can't do Object.keys or Object.entries on it but can do "for x of"
    // History is tricky .... take care of: SW (with Base set) \ !SW; file | http; cases
    // when loaded from file, non SW window.location.origin = document.location.origin = "file://" and document.baseURI is unset

    // Combine possibly multiple objects (simplifies calling)
  const optsFunctional = ["wanthistory", "noCache"]; // opts used by navSearch and factory, dont save or restore
  const optsCombined = Object.assign({}, ...optss.map(opts => opts instanceof URLSearchParams ? URLSearchParamsEntries(opts) : opts));
  const opts = ObjectFilter(optsCombined,  // Set of opts want in history etc
    (k,v) => ((typeof v !== "undefined") && (v !== null) && !optsFunctional.includes(k)));

  // Filter opts to various kinds needed
  // Known opts in url.search to pass through include: tab, query
  // paused - used to be ignored here, and retrieved from transport, but we only use it on startup
  //        - in archive.html or bootstrap.html, so can still pass it around here, just ignoring it.
  //TODO simplify const's only used once after testing
  if (optsCombined.wanthistory) { // Cant use opts.wanthistory as its been filtered out)
    // Pull out identifier and query
    const identifier = opts.identifier || opts.item; // Currently uses item=foo in URLs, will migrate to identifier=foo
    const query = opts.query;
    const optsInDetailsUrl = ["item","identifier","download","page"]; // Opts that are specially placed in Details URL
    const optsDetails = ObjectFilter(opts, (k,unusedV) => !optsInDetailsUrl.includes(k));
    // Setup url and title and state for pushing
    const historyTitle = `Internet Archive ${query ? ("? "+ query) : identifier ? ("- "+ identifier) : ""}`;
    const url = new URL(window.location);
    // Ideally we'd like to be on a service that supports /arc but if it doesnt we've got an alternative.
    const supportsDetails = ! (url.origin === "file://" || url.pathname.startsWith("/ipfs/")  || url.pathname.startsWith("/ipns/") );
    url.pathname =  (!supportsDetails) ? window.location.pathname
      : query ? '/details'
      : `/${opts.download ? "download" : "details"}${identifier ? "/" + identifier : ""}${opts.page ? "/page/" + opts.page : ""}`;
    const combinedparams = Object.assign({}, (!supportsDetails || query) ? opts : optsDetails); // For now, not putting persistent state in URL (was Nav.state) as first parm
    const usp = new URLSearchParams();
    Object.entries(combinedparams).forEach(
      kv => Array.isArray(kv[1])
        ? kv[1].forEach(v=>usp.append(kv[0],v))
        : usp.append(kv[0],kv[1]));
    // noinspection JSValidateTypes
    url.search = usp;
    history.pushState(opts, historyTitle, url.href);
  }
  return opts; // Useful to caller
}

function URLSearchParamsEntries(sp) {
  const res = {};
  // Handle parameters known to be arrays
  ["transport","paused"].forEach(k => res[k]=[]);
  sp.forEach((v,k) => {
    if (Array.isArray(res[k])) {
      res[k].push(v);
    } else {
      res[k] = v
    }
  });
  return res;
}

function renderPage({item=undefined, message=undefined}) {
  // Shortcut ...
  // opts = { item (optional), message (optional) }
  DwebArchive.page.setState({item, message});
}
export default class Nav {
  constructor() {
    //super();
  }

  /**
   * Navigate to a search
   *
   * @param q string to search for e.g. 'foo'
   *          or object e.g. {collection: foo, title: bar}
   *          or string representing search in form URL wants e.g. 'collection:"foo" AND title:"bar"'
   * @param opts {
   *    sort STRING || [STRING] e.g. "-downloads"
   *    rows INT number of rows wanted in result
   *    noCache BOOL true to skip cache and reload if possible
   * }
   */
  static navSearch(q, opts = {}) {
    debug("Navigating to Search for %s", q);
    const {noCache=false} = opts;
    opts.query = q;
    renderPage({message: <I18nSpan en="Loading search"/>});
    const s = new ArchiveBase(opts);          // Wants {query, sort, rows, noCache}
    s.fetch_query({noCache}, (err, unusedMembers) => {
      // Ignoring error and rendering anyway, maybe want to display instead, but not sure ?
      pushHistory(opts); // Note this takes account of wantHistory //TODO-SEARCH test this works see window.onpopstate
      renderPage({item: s});
    }); // Should throw error if fails to fetch //TODO-RELOAD fetch_query ignores noCache currently
  }

  static onclick_search(q) {
    // Build the onclick part of a search, q can be a string or an object e.g. {creator: "Foo bar", sort: "-date"}
    // Its passed an object in various places
    return `Nav.nav_searchOnClick(${canonicaljson.stringify(q)}); return false`;
  }

  // noinspection JSUnusedGlobalSymbols
  static nav_searchOnClick(encodedQ) {
    // Shortcut while onclick_search is passing a string
    const {query, sort} = canonicaljson.parse(encodedQ); // Undo encoding { query, sort }
    return this.navSearch(query, {sort, wanthistory: true}); //TODO-SEARCH test on Date switcher bar
  }

  /**
   *  Fetch and render an ArchiveItem - includes Collections, but not Search (see navSearch)
   *
   * @param identifier
   * @param opts {
   *    wanthistory:    if set build a new entry in history
   *    download:       Want the download directory version of the details page
   *    page:           Relevant if its the book reader  (note this might not get all the way through)
   *    reload:         True if should use Cache-Control:no-cache to fetch (relevant in dweb-mirror when reloading)
   * }
   * @returns {Promise<ARCHIVEITEM>}
   */
  static async factory(identifier, ...optss) {
    const opts = pushHistory(...optss, {identifier});
    const {download = undefined, page = undefined, noCache = undefined} = opts;
    renderPage({message: <I18nSpan en="Loading">&nbsp; {identifier}</I18nSpan>});
    window.loopguard = identifier;  // Tested in dweb-transport/httptools, will cancel any old loops - this is a kludge to get around a Chrome bug/feature
    let item; // Set below, but keep it here for error handling
    try {
      if (!identifier || (identifier === "home")) {
        item = new ArchiveBase({itemid: "home", query: homeQuery, sort: '-downloads'});
        await item.fetch_metadata({noCache})
        await item.fetch_query({noCache})
        renderPage({item});
      } else if (["local","settings"].includes(identifier)) { //SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller
        item = new ArchiveBase({itemid: identifier, metaapi: {metadata: specialidentifiers[identifier]}})
        renderPage({item});
      } else {
        item = new ArchiveBase({itemid: identifier, page, download, noCache});
        await item.fetch_metadata({noCache}); // Note, dont do fetch_query as will expand to ArchiveMemberSearch which will confuse the export
        if (!item.metadata) {
          item.message = <><I18nSpan en="item"/> {identifier}<I18nSpan en="cannot be found or does not have metadata"/></>;
        }
        if (!item.message && item.metadata && !['texts', 'image', 'audio', 'etree', 'movies', 'collection', 'account'].includes(item.metadata.mediatype)) {
          item.message = <I18nSpan en='Unsupported mediatype'>: {item.metadata.mediatype}</I18nSpan>
        }
        if (!item.message) {
          await item.fetch_query({noCache}); // Should throw error if fails to fetch //TODO-RELOAD fetch_query ignores noCache currently
        }
        renderPage({item, message: item.message});
        return item;
      }
    } catch (err) {
      debug("ERROR: Nav.factory detected error %o", err);
      renderPage({item, message:err.message}); // Item may or may not be set TODO-I18n future could handle error messages here or where generated
    }
  }

  /**
   * Set global state that persists between what would normally be pages and is remembered across pages and history
   * @param optss [{}]
   */
  static setState(...optss) {
    if (!this.state) this.state = {};
    const persistentState = ["transport", "mirror", "paused", "lang"]; // Note that transport and paused are arrays
    const combinedOpts = Object.assign({},
      this.state,
      ...optss.map(opts => opts instanceof URLSearchParams
        ? URLSearchParamsEntries(opts)
        : opts));
    this.state = ObjectFilter(combinedOpts, (k, v) => (persistentState.includes(k) && (typeof v !== "undefined") && (v !== null) && ((!Array.isArray(v)) || v.length ))); // Dont keep undefined state, will end up in URLs
    return ObjectFilter(combinedOpts, (k, unusedV) => !persistentState.includes(k)); // return any opts not persistent
  }

  static metaFactory(opts) {
    getLanguage(currentISO(this.state.lang || "en"), (err) => {
    // If lang set, then make sure in currentISO and fetch from server (reqd by archive.html before page loaded in metafactory)
      if (err) {
        debug("ERROR cannot set language to %s falling back to english: %o", this.state.lang, err);
        getLanguage(currentISO('en'), (err) => {
          this._metafactory(opts);
        });
      } else {
        this._metafactory(opts);
      };
    })
  }
  static _metafactory(opts) {
    /**
     * Create object based on options passed in URL - this is only called from archive.html
     *
     * opts {
     *  query:  query as string "foo", object {collection:foo, title:bar} or string 'collection:"foo" AND title:"bar"'
     *  sort: STRING
     *  identifier||item: STRING (item is deprecated)
     *  download:  True or 1 if want download directory instead
     *  Anything else is passed to factory
     */
      //TODO maybe dont need this metafactory, and can do at the body level and/or write Page in archive.html
    const destn = document.getElementById('main'); // Blank window (except Nav) as loading
    const message=<I18nSpan en="LOADING STARTING"/>;
    const els = <Page message={message}/>;
    ReactDOM.render(els, destn);
    // Assumes rendering is sync
    console.assert(typeof DwebArchive.page !== "undefined", "Assuming ReactDOM.render is sync");
    let {query, item, identifier, download} = opts;
    identifier = identifier || item;
    opts = ObjectFilter(opts, (k, unusedV) => !["query", "item", "identifier", "download"].includes(k));
    opts.wanthistory = true;
    if (query) {
      // noinspection JSIgnoredPromiseFromCall
      this.navSearch(query, opts); // Intentionally passing transport, paused, etc that are used above
    } else if (download) { // Note only works for downloading items, not files - can add later if reqd
      // noinspection JSIgnoredPromiseFromCall
      this.factory(identifier, opts, {download: 1});
    } else {
      // noinspection JSIgnoredPromiseFromCall
      this.factory(identifier || "home", opts);
    }
  }
}


window.onpopstate = function(event) {
    debug("Going back to: %s %o", document.location, event.state);
    const identifier = event.state && (event.state.itemid || event.state.item || event.state.identifier); // item in URL, itemid legacy, identifier future
    const stateOpts = Object.assign({}, event.state, {wanthistory: false});
    if (event.state && event.state.query) {
      // noinspection JSIgnoredPromiseFromCall
      Nav.navSearch(event.state.query, stateOpts);
    } else {
      // noinspection JSIgnoredPromiseFromCall
      Nav.factory(identifier || "home", stateOpts);
    }

};