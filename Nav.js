//import ReactDOM from "react-dom";

// noinspection JSUnresolvedFunction
const canonicaljson = require('@stratumn/canonicaljson');

// https://ponyfoo.com/articles/universal-react-babel
// noinspection JSUnresolvedFunction
import React from './ReactFake';
import Search from './Search';
import Details from './Details';
import Home from './Home';
import Collection from './Collection';
import Local from './Local'; //SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller
import Settings from './Settings'; //SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller
import Texts from './Texts';
import Image from './Image';
import Audio from './Audio';
import Video from './Video';
import Account from './Account';
import DetailsError from './DetailsError';
import DownloadDirectory from './DownloadDirectory';
import {ObjectFilter} from '@internetarchive/dweb-archivecontroller/Util.js';
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import
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
    url.path =  (!supportsArc) ? window.location.pathname
      : query ? '/arc/archive.org/details'
      : `/arc/archive.org/${opts.download ? "download" : "details"}${identifier ? "/" + identifier : ""}${opts.page ? "/page/" + opts.page : ""}`;
    // noinspection JSValidateTypes
    url.search = new URLSearchParams(Object.assign({}, Nav.state, (supportsArc || query) ? opts : optsDetails));
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
    React.domrender(new DetailsError({message: < span>Loading - note this can take a while if no-one else has accessed this item yet</span>}).wrap(), destn)
  }

  static async nav_home(...optss) {
    debug("Going home");
    return await Nav.nav_details("home", ...optss);
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
    q = query (string to search for) or object e.g. {query; foo, sort: -date} as passed to new Search()
     */
    debug("Navigating to Search for %s", q);
    const destn = document.getElementById('main'); // Blank window (except Nav) as loading
    Nav.clear(destn);
    const s = await new Search((typeof (q) === "object") ? q : (typeof (q) === "string") ? {query: q} : undefined).fetch();
    pushHistory(opts, {query: s.query}); // Pass
    document.title = `${q} : Decentralized Internet Archive`;
    s.render(destn);
  }

  static onclick_search(q) {
    // Build the onclick part of a search, q can be a string or an object e.g. {creator: "Foo bar", sort: "-date"}
    // Its passed an object in various places
    return `Nav.nav_searchOnClick(${canonicaljson.stringify(q)}); return false`;
  }

  // noinspection JSUnusedGlobalSymbols
  static async nav_download(el) {
    const source = el.source; // Should be an ArchiveFile. - see example in Details.js
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

  static async factory(identifier, ...optss) {
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
      if (!identifier || (identifier === "home")) {
        (await new Home({itemid: "home"}).fetch({noCache})).render(destn);
        /* TODO-DWEBNAV this.setCrawlStatus({identifier: id, crawl: item.crawl}); */
      } else if (identifier === "local") { //SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller
        (await new Local({itemid: identifier, metaapi: {}})).render(destn);
      } else if (identifier === "settings") { //SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller
        (await new Settings({itemid: identifier, metaapi: {}})).render(destn);
      } else {
        //TODO edit this to make function like fetch_metadata but as a static function that can be used without creating temporary details item "d"
        let d = await new Details({itemid: identifier}).fetch_metadata({noCache}); // Note, dont do fetch_query as will expand to ArchiveMemberSearch which will confuse the export
        let metaapi = d.exportMetadataAPI({wantPlaylist: true}); // Cant pass Details to the constructors below
        if (!d.metadata) {
          new DetailsError({
            itemid: identifier,
            message: `item ${identifier} cannot be found or does not have metadata`
          }).render(destn);
        } else {
          if (d.metadata.title) {
            document.title = `${d.metadata.title} : Decentralized Internet Archive`;
          } else {
            debug(`XXX Writing title but dont have one, look at %O`, d);
          }
          if (download) {
            const item = new DownloadDirectory({itemid: identifier, metaapi});
            item.render(destn);
            /* TODO-DWEBNAV this.setCrawlStatus({identifier: id, crawl: item.crawl}); */
          } else {
            const item = await this.renderableItem({itemid: identifier, metaapi, page, noCache, prioritem: d});
            item.render(destn);
            /* TODO-DWEBNAV this.setCrawlStatus({identifier, crawl: item.crawl}); */
            return item;
          }
        }
      }
    } catch (err) {
      console.error("Nav.factory detected error", err);
      new DetailsError({itemid: identifier, message: err.message}).render(destn);
      //TODO-UXLOCAL think about return
    }
  }

  static async renderableItem({prioritem, itemid, metaapi, page, noCache}) {
    /* Returns an ArchiveItem subclass or a DetailsError */
    switch (metaapi.metadata.mediatype) {
      case "collection":
        return await new Collection({itemid, metaapi, noCache}).fetch({noCache});   //fetch will do search
      case "texts":
        if (prioritem.useBookReader()) {
          return new Texts({itemid, metaapi, page, noCache});
        } else {
          //TODO-BOOKS find an example that cant use bookreader, there were some in a dweb-archive or dweb-mirror issue about bookreader
          return new DetailsError({itemid, message: 'Cant be displayed in bookreader, code needs to use a carousel'}); //TODO-BOOK see thetaleofpeterra14304gut (I think) and alicesadventures19033gut (I think)
        }
      case "image":
        return new Image({itemid, metaapi, noCache});
      case "audio": // Intentionally drop thru to movies
      case "etree": // Concerts uploaded
        return new Audio({itemid, metaapi, noCache});
      case "movies":
        return new Video({itemid, metaapi, noCache});
      case "account":
        return (await new Account({itemid, metaapi}).fetch({noCache}));
      default:
        //TODO Not yet supporting software, zotero (0 items); data; web
        return new DetailsError({itemid, message: `Unsupported mediatype: ${metaapi.metadata.mediatype}`});
      //    return new Nav(")
    }
  }

  // noinspection JSUnusedGlobalSymbols
  static audioPlay(elAnchor) {
    // Used by Audio to play a track - since "Nav" is a global it can access
    Audio.play(elAnchor);
    return false;
  }

  static setState(...optss) {
    // Set global state that persists between what would normally be pages and is remembered
    if (!this.state) this.state = {};
    const persistentState = ["transport", "mirror", "paused"]; // Note that transport and paused are arrays
    const combinedOpts = Object.assign({}, this.state, ...optss.map(opts => opts instanceof URLSearchParams ? URLSearchParamsEntries(opts) : opts));
    this.state = ObjectFilter(combinedOpts, (k, v) => (persistentState.includes(k) && (typeof v !== "undefined") && (v !== null) && ((!Array.isArray(v)) || v.length ))); // Dont keep undefined state, will end up in URLs
    return ObjectFilter(combinedOpts, (k, unusedV) => !persistentState.includes(k)); // return any opts not persistent
  }

  static metafactory(opts) {
    let {query, sort, item, identifier, download} = opts;
    identifier = identifier || item;
    opts = ObjectFilter(opts, (k, v) => !["query", "sort", "item", "download"].includes(k));
    opts.wanthistory = true;
    if (query) {
      this.nav_search({query, sort}, opts); // Intentionally passing transport, paused, etc that are used above
    } else if (identifier) {
      if (download) { // Note only works for downloading items, not files - can add later if reqd
        this.nav_downloaddirectory(identifier, opts);
      } else {
        this.nav_details(identifier, opts);
      }
    } else {
      this.nav_home(opts);
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
    } else if (identifier) {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_details(identifier, stateOpts);
    } else {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_home(stateOpts);
    }

};