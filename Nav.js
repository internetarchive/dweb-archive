//import ReactDOM from "react-dom";

// noinspection JSUnresolvedFunction
const canonicaljson = require('@stratumn/canonicaljson');

// https://ponyfoo.com/articles/universal-react-babel
// noinspection JSUnresolvedFunction
import React from './ReactFake';
import AnchorDetails from './components/AnchorDetailsFake'; // Have to use the Fake one as long as this is FakeReact
import Search from './Search';
import Details from './Details';
import Home from './Home';
import Collection from './Collection';
import Local from './Local';
import Texts from './Texts';
import Image from './Image';
import Audio from './Audio';
import Video from './Video';
import Account from './Account';
import DetailsError from './DetailsError';
import DownloadDirectory from './DownloadDirectory';
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import
const debug = require('debug')('dweb-archive:Nav');

const TRANSPORT_STATUS_PAUSED = 4;  // Cheat to avoid having to import Transport here, which would make service worker much more complex

export default class Nav {
  constructor() {
    //super();
  }

    static clear(destn) {
        // Clear the screen to give confidence that action under way
        // Leaves Nav, clears rest
        React.domrender(new DetailsError({message: < span >Loading - note this can take a while if no-one else has accessed this item yet</span>}).wrap(), destn)
    }
    static async nav_home({wanthistory=true}={}) {
        debug("Going home");
        return await Nav.nav_details("home", {wanthistory});
    }

    static async nav_details(id, {wanthistory=true, page=undefined, noCache=undefined}={}) {
        debug("Navigating to Details %s", id);
        const destn = document.getElementById('main'); // Blank window (except Nav) as loading
        Nav.clear(destn);
        await Nav.factory(id, destn, {wanthistory, page, noCache}); // Not sure what returning ....
        return false; // Dont follow anchor link - unfortunately React ignores this
    }

    static async pausedParm() {
        return (await DwebTransports.p_statuses())
        .filter(t => (t.status === TRANSPORT_STATUS_PAUSED))
        .map(t => "paused="+t.name)
        .join('&')
    }

    static async nav_search(q, {wanthistory=true}={}) {
        /*
        Navigate to a search
        q = query (string to search for) or object e.g. {query; foo, sort: -date} as passed to new Search()
         */
        debug("Navigating to Search for %s", q);
        const destn = document.getElementById('main'); // Blank window (except Nav) as loading
        Nav.clear(destn);
        const s = await new Search((typeof(q) === "object") ? q : (typeof(q) === "string") ? {query: q} : undefined).fetch();
        q = s.query;    // Flattened from object to string
        if (wanthistory) {
            const supportsArc = ! (window.location.origin === "file://" || window.location.pathname.startsWith("/ipfs/")  || window.location.pathname.startsWith("/ipns/") );
            const historystate = {query: q}; //TODO-HISTORY may want  to store transports, paused etc here
            let cnp = [];
            cnp.push(await this.pausedParm()); //WAS DwebTransports.p_connectedNamesParm(); but we want to exclude paused, not record current state of success/failed transport
            // Add any other searchparams back in, especially "tab"
            for (let sp of searchparams) {
                if (!["transport", "paused", "query", "item"].includes(sp[0]))
                    cnp.push(`${sp[0]}=${sp[1]}`);
            }
            // See notes on async_factory about history.pushState
            let historyloc;
            cnp.push(`query=${q}`);
            cnp = cnp.filter(p => !!p).join('&');
            if (supportsArc) {
                historyloc = `${window.location.origin}/arc/archive.org/details?${cnp}`;
            } else { //Might not work on http, this is intended for SW
                historyloc = `${window.location.origin}${window.location.pathname}?${cnp}`;
            }
            //debug("Writing history:", historyloc);
            history.pushState(historystate, `Internet Archive search ${q}`, historyloc);
        }
        document.title = `${q} : Decentralized Internet Archive`;
        s.render(destn);
    }
    static onclick_search(q) {
        // Build the onclick part of a search, q can be a string or an object e.g. {creator: "Foo bar", sort: "-date"}
        return `Nav.nav_search(${canonicaljson.stringify(q)}); return false;`;
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

    static async nav_downloaddirectory(itemid) {
        debug("Navigating to Download directory for %s", itemid);
        const destn = document.getElementById('main'); // Blank window (except Nav) as loading
        Nav.clear(destn);
        await Nav.factory(itemid, destn, {wanthistory: true, downloaddirectory: true}); // Not sure what returning ....
        return false; // Dont follow anchor link - unfortunately React ignores this
    }

    static async factory(itemid, res, {wanthistory=true, downloaddirectory=false, page=undefined, noCache=undefined}={}) {
      /* Fetch and render an ArchiveItem
        wanthistory:    if set build a new entry in history
        downloaddirectory:  Want the download directory version of the details page
        page:           Relevant if its the book reader  (note this might not get all the way through)
        reload:         True if should use Cache-Control:no-cache to fetch (relevant in dweb-mirror when reloading)
      */
        //console.group("Nav.factory",itemid);
        window.loopguard = itemid;  // Tested in dweb-transport/httptools, will cancel any old loops - this is a kludge to get around a Chrome bug/feature
        if (wanthistory) {
            const historystate = {itemid}; //TODO-HISTORY may want  to store transports, paused etc here
            let cnp = [];
            cnp.push(await this.pausedParm()); //WAS DwebTransports.p_connectedNamesParm(); but we want to exclude paused, not record current state of success/failed transport
            // Add any other searchparams back in, especially "tab"
            for (let sp of searchparams) {
                if (!["paused", "item"].includes(sp[0])) // Now including transport parameter if explicitly specified in searchparams (rather than in archive.html)
                    cnp.push(`${sp[0]}=${sp[1]}`);
            }
            // See notes on async_factory about history.pushState
            let historyloc;
            // Ideally we'd like to be on a service that supports /arc but if it doesnt we've got an alternative.
            let supportsArc = ! (window.location.origin === "file://" || window.location.pathname.startsWith("/ipfs/")  || window.location.pathname.startsWith("/ipns/"));
            if (!supportsArc) {
                if (itemid) cnp.push(`item=${itemid}`);   // Need item id parameter on local files
                if (page) cnp.push(`page=${page}`); // Unlikely to be used, but probably ignored downstream.
                if (downloaddirectory) cnp.push('download=1');   // Need item id parameter on local files
            }
            cnp = cnp.filter(p => !!p).join('&');
            // History is tricky .... take care of: SW (with Base set) \ !SW; file | http; cases
            // when loaded from file, non SW window.location.origin = document.location.origin = "file://" and document.baseURI is unset
            if (supportsArc) {
                historyloc = `${window.location.origin}/arc/archive.org/${downloaddirectory ? "download" : "details"}${itemid ? "/"+itemid :""}${page ? "/page/"+page : ""}?${cnp}`;
            } else {
                historyloc = `${window.location.origin}${window.location.pathname}?${cnp}`;
            }
            history.pushState(historystate, `Internet Archive item ${itemid ? itemid : ""}`, historyloc);
        }
        try {
            if (!itemid || (itemid === "home")) {
                (await new Home({itemid: "home"}).fetch({noCache})).render(res);
                /* TODO-DWEBNAV this.setCrawlStatus({identifier: id, crawl: item.crawl}); */
            } else if (itemid === "local") {
                (await new Local({itemid, metaapi:{}})).render(res);  //TODO-UXLOCAL figure out how to get yaml to it
            } else {
                //TODO edit this to make function like fetch_metadata but as a static function that can be used without creating temporary details item "d"
                let d = await new Details({itemid}).fetch_metadata({noCache}); // Note, dont do fetch_query as will expand to ArchiveMemberSearch which will confuse the export
                let metaapi = d.exportMetadataAPI({wantPlaylist: true}); // Cant pass Details to the constructors below
                if (!d.metadata) {
                    new DetailsError({itemid, message: `item ${itemid} cannot be found or does not have metadata`}).render(res);
                } else {
                    if (d.metadata.title) {
                        document.title = `${d.metadata.title} : Decentralized Internet Archive`;
                    } else {
                        debug(`XXX Writing title but dont have one, look at %O`, d);
                    }
                    if (downloaddirectory) {
                        const item = new DownloadDirectory({itemid, metaapi});
                        item.render(res);
                        /* TODO-DWEBNAV this.setCrawlStatus({identifier: id, crawl: item.crawl}); */
                    } else {
                        const item = await this.renderableItem({itemid, metaapi, page, noCache, prioritem: d});
                        item.render(res);
                        /* TODO-DWEBNAV this.setCrawlStatus({identifier: itemid, crawl: item.crawl}); */
                        return item;
                    }
                }
            }
        } catch(err) {
            console.error("Nav.factory detected error",err);
            new DetailsError({itemid, message: err.message}).render(res);
            //TODO-UXLOCAL think about return
        }
    }
    /*TODO-DWEBNAV
    static setCrawlStatus({identifier, crawl}) {
        if (DwebArchive.mirror) {
            ConfigCrawl.insertInside('dweb-mirrorconfig', crawl); //TODO-UXLOCAL May need to ... {identifier: id || "home"})
            //ConfigCrawl.findAndSetState(crawl);
        }
    }
    */
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
}


window.onpopstate = function(event) {
    debug("Going back to: %s %o", document.location, event.state);
    if (event.state && event.state.query) {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_search(event.state.query, {wanthistory: false});
    } else if (event.state && event.state.itemid) {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_details(event.state.itemid, {wanthistory: false});
    } else {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_home({wanthistory: false});
    }

};