import {loadImg} from "./ReactSupport";

const canonicaljson = require('@stratumn/canonicaljson');
// Other IA repositories
import { homeQuery, ObjectFilter } from "@internetarchive/dweb-archivecontroller/Util";
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import
// This repository
import ArchiveBase from './ArchiveBase';
import {Page} from "./components/Page";
import ReactDOM from "react-dom";
import React from "react";
const debug = require('debug')('dweb-archive:Nav');

function pushHistory(...optss) {
    //Note opts should NOT be urlencoded, it can be URLSearchParams in which case handled specially
    //Note - searchparams is a URLSearchParams, you can't do Object.keys or Object.entries on it but can do "for x of"
    // History is tricky .... take care of: SW (with Base set) \ !SW; file | http; cases
    // when loaded from file, non SW window.location.origin = document.location.origin = "file://" and document.baseURI is unset

    // Combine possibly multiple objects (simplifies calling)
  const optsFunctional = ["wanthistory", "noCache"]; // opts used by nav_search and factory, dont save or restore
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
    const supportsArc = ! (url.origin === "file://" || url.pathname.startsWith("/ipfs/")  || url.pathname.startsWith("/ipns/") );
    url.pathname =  (!supportsArc) ? window.location.pathname
      : query ? '/arc/archive.org/details'
      : `/arc/archive.org/${opts.download ? "download" : "details"}${identifier ? "/" + identifier : ""}${opts.page ? "/page/" + opts.page : ""}`;
    const combinedparams = Object.assign({}, (!supportsArc || query) ? opts : optsDetails); // For now, not putting persistent state in URL (was Nav.state) as first parm
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

export default class Nav {
  constructor() {
    //super();
  }

  static clear(destn) {
    // Clear the screen to give confidence that action under way
    // Leaves Nav, clears rest
    //TODO-THEATRES use message theatre for this
    //TODO-IAUX move this behaviour up into React component see https://github.com/internetarchive/dweb-archive/issues/126
    //React.domrender(new DetailsError({message: < span>Loading - note this can take a while if no-one else has accessed this item yet</span>}).wrap(), destn)
  }

  // noinspection JSUnusedGlobalSymbols
  static async nav_detailsOnClick(identifier) {
    // Short cut for onClick's added by FakeReact
    return this.nav_details(identifier, {wanthistory: true});
  }

  static async nav_details(identifier, ...optss) {
    debug("Navigating to Details %s", identifier);
    await Nav.factory(identifier, ...optss); // Not sure what returning ....
    return false; // Dont follow anchor link - unfortunately React ignores this
  }

  // noinspection JSUnusedGlobalSymbols
  static async nav_searchOnClick(q) {
    // Shortcut while onclick_search is passing a string
    return this.nav_search(q, {wanthistory: true});
  }

  static async nav_search(q, opts = {}) {
    /*
    Navigate to a search
    q = query (string to search for) or object e.g. {query: foo, sort: -date} as passed to new Search()
     */
    debug("Navigating to Search for %s", q);
    const semiTitle = DwebArchive.mirror ? "Universal Library" : "Decentralized Internet Archive";
    const {noCache=false} = opts;
    const destn = document.getElementById('main'); // Blank window (except Nav) as loading
    Nav.clear(destn);
    const qq = (typeof (q) === "object") ? q : (typeof (q) === "string") ? {query: q} : undefined;
    opts.query = qq;
    const s = await new ArchiveBase(opts).fetch({noCache});
    pushHistory(opts, qq); // Note this takes account of wantHistory
    document.title = `${qq.query} ${qq.sort || ""} : ${semiTitle}`;
    s.renderFake(destn);
  }

  static onclick_search(q) {
    // Build the onclick part of a search, q can be a string or an object e.g. {creator: "Foo bar", sort: "-date"}
    // Its passed an object in various places
    return `Nav.nav_searchOnClick(${canonicaljson.stringify(q)}); return false`;
  }

  // noinspection JSUnusedGlobalSymbols
  static async nav_download(el) {
    const source = el.source; // Should be an ArchiveFile
    if (Array.isArray(source)) {
      for (let s in source) { // noinspection JSUnfilteredForInLoop
        await source[s].p_download(el);
      }
    } else {
      await source.p_download(el);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  static async nav_downloaddirectoryOnClick(identifier) {
    return this.nav_downloaddirectory(identifier, {wanthistory: true});
  }

  static async nav_downloaddirectory(identifier, ...optss) {
    debug("Navigating to Download directory for %s", identifier);
    await Nav.factory(identifier, ...optss, {wanthistory: true, download: 1}); // Not sure what returning ....
    return false; // Dont follow anchor link - unfortunately React ignores this
  }

  static async factory(identifier, ...optss) { //TODO-REACTFAKE I think this is what becomes the resettable page with the logic in its render
    /* Fetch and render an ArchiveItem
      wanthistory:    if set build a new entry in history
      download:       Want the download directory version of the details page
      page:           Relevant if its the book reader  (note this might not get all the way through)
      reload:         True if should use Cache-Control:no-cache to fetch (relevant in dweb-mirror when reloading)
    */
    const opts = pushHistory(...optss, {identifier});
    const {download = undefined, page = undefined, noCache = undefined} = opts;
    const destn = document.getElementById('main'); // Blank window (except Nav) as loading
    Nav.clear(destn);
    window.loopguard = identifier;  // Tested in dweb-transport/httptools, will cancel any old loops - this is a kludge to get around a Chrome bug/feature
    try {
      const semiTitle = DwebArchive.mirror ? "Universal Library" : "Decentralized Internet Archive";
      if (!identifier || (identifier === "home")) {
        document.title = `Home : ${semiTitle}`; //TODO-IAUX when consolidated, this could be done in NavWeb component or even higher
        (await new ArchiveBase({itemid: "home", query: homeQuery, sort: '-downloads'}).fetch({noCache})).renderFake(destn);
        /* TODO-DWEBNAV this.setCrawlStatus({identifier: id, crawl: item.crawl}); */
      } else if (identifier === "local") { //SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller
        document.title = `Local : ${semiTitle}`;
        (await new ArchiveBase({itemid: identifier, metaapi: {}})).renderFake(destn);
      } else if (identifier === "settings") { //SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller
        document.title = `Settings : ${semiTitle}`;
        (await new ArchiveBase({itemid: identifier, metaapi: {}})).renderFake(destn);
      } else {
        //TODO-FAKEREACT this is probably not the best way now that using react, better to create DOM object, then hydrate it (i.e. ArchiveBase goes away)
        //TODO edit this to make function like fetch_metadata but as a static function that can be used without creating temporary details item "d"
        let d = await new ArchiveBase({itemid: identifier}).fetch_metadata({noCache}); // Note, dont do fetch_query as will expand to ArchiveMemberSearch which will confuse the export
        let metaapi = d.exportMetadataAPI({wantPlaylist: true}); // Cant pass ArchiveBase to the constructors below
        let message;
        if (!d.metadata) {
          message = `item ${identifier} cannot be found or does not have metadata`;
        }
        if (d.metadata.title) {
          document.title = message || `${d.metadata.title} : ${semiTitle}`;
        } else {
          debug(`ERROR Writing title but dont have one, look at %O`, d);
        }
        if (!message && metaapi && metaapi.metadata && !['texts', 'image', 'audio', 'etree', 'movies', 'collection', 'account'].includes(metaapi.metadata.mediatype)) {
          message = `Unsupported mediatype: ${metaapi.metadata.mediatype}`
        }
        const item = new ArchiveBase({itemid: identifier, metaapi, message, noCache, page, download});
        if (!message) {
          await item.fetch({noCache});
        }
        item.renderFake(destn);
        /* TODO-DWEBNAV this.setCrawlStatus({identifier, crawl: item.crawl}); */
        return item;
      }
    } catch (err) {
      debug("ERROR: Nav.factory detected error %o", err);
      const item = new ArchiveBase({itemid: identifier, message: err.message});
      // Note not doing the .fetch
      item.renderFake(destn);
    }
  }

  static setState(...optss) {
    // Set global state that persists between what would normally be pages and is remembered
    if (!this.state) this.state = {};
    const persistentState = ["transport", "mirror", "paused"]; // Note that transport and paused are arrays
    const combinedOpts = Object.assign({},
      this.state,
      ...optss.map(opts => opts instanceof URLSearchParams
        ? URLSearchParamsEntries(opts)
        : opts));
    this.state = ObjectFilter(combinedOpts, (k, v) => (persistentState.includes(k) && (typeof v !== "undefined") && (v !== null) && ((!Array.isArray(v)) || v.length ))); // Dont keep undefined state, will end up in URLs
    return ObjectFilter(combinedOpts, (k, unusedV) => !persistentState.includes(k)); // return any opts not persistent
  }

  static metafactory(opts) {
    const destn = document.getElementById('main'); // Blank window (except Nav) as loading
    const els = (
      <Page message={"LOADING STARTING"}/>
    );
    ReactDOM.render(els, destn);
    // Assumes rendering is sync
    console.assert(typeof DwebArchive.page !== "undefined", "Assuming ReactDOM.render is sync");
    let {query, sort, item, identifier, download} = opts;
    identifier = identifier || item;
    opts = ObjectFilter(opts, (k, unusedV) => !["query", "sort", "item", "identifier", "download"].includes(k));
    opts.wanthistory = true;
    if (query) {
      // noinspection JSIgnoredPromiseFromCall
      this.nav_search({query, sort}, opts); // Intentionally passing transport, paused, etc that are used above
    } else if (download) { // Note only works for downloading items, not files - can add later if reqd
        // noinspection JSIgnoredPromiseFromCall
      this.nav_downloaddirectory(identifier, opts);
    } else {
        // noinspection JSIgnoredPromiseFromCall
      this.nav_details(identifier || "home", opts);
    }
  }
}


window.onpopstate = function(event) {
    debug("Going back to: %s %o", document.location, event.state);
    const identifier = event.state && (event.state.itemid || event.state.item || event.state.identifier); // item in URL, itemid legacy, identifier future
    const stateOpts = Object.assign({}, event.state, {wanthistory: false});
    if (event.state && event.state.query) {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_search(event.state.query, stateOpts);
    } else {
        // noinspection JSIgnoredPromiseFromCall
      Nav.nav_details(identifier || "home", stateOpts);
    }

};