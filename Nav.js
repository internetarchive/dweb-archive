//import ReactDOM from "react-dom";

// noinspection JSUnresolvedFunction
require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
const canonicaljson = require('@stratumn/canonicaljson');

// https://ponyfoo.com/articles/universal-react-babel
// noinspection JSUnresolvedFunction
import React from './ReactFake';
import Search from './Search';
import Details from './Details'
import Home from './Home'
import Collection from './Collection'
import Texts from './Texts'
import Image from './Image'
import Audio from './Audio'
import Video from './Video'
import Account from './Account'
import DetailsError from './DetailsError'
import DownloadDirectory from './DownloadDirectory'
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import
const debug = require('debug')('dweb-archive');

const TRANSPORT_STATUS_PAUSED = 4;  // Cheat to avoid having to import Transport here, which would make service worker much more complex

export default class Nav {
  constructor() {
    //super();
    this.mts = ['web', 'texts', 'movies', 'audio', 'software', 'image'];
  }

  navwrap() {  // Embedded in wrap()
      /* The navigation stuff.   Order is navwrap : maincontent : itemDetailsAbout */
      /* navwrap1( navwrap2 (navhat; navbar( nav-tophat-helper; navbar-main; nav-about))) */
      {/*--TODO-DETAILS update navwrap to match actual code in both search.html and commute.html--*/}
      return (
        <div id="navwrap1">
          <div id="navwrap2">

            <div id="nav-tophat" class="collapse">

                <div class="row toprow web" style="max-width:1000px;margin:auto;">
                    <div class="col-xs-12">
                        <div class="wayback-txt">
                            Search the history of over 338 billion
                            <a style="display:inline" href="https://blog.archive.org/2016/10/23/defining-web-pages-web-sites-and-web-captures/">web pages</a> on the Internet.
                        </div>
                        <div class="roundbox7 wayback-main">
                            <div class="row">
                                <div class="col-sm-6" style="padding-left:0; padding-right:0;">
                                    <a style="padding-bottom:0" href="https://archive.org/web/"><img src="./images/WaybackLogoSmall.png" alt="Wayback Machine"/></a>
                                </div>
                                <div class="col-sm-6" style="padding-top:13px;">
                                    <form style="position:relative;">
                                        <span class="iconochive-search" aria-hidden="true"></span><span
                                            class="sr-only">search</span> <label for="nav-wb-url" class="sr-only">Search the Wayback
                                        Machine</label>
                                        <input id="nav-wb-url" class="form-control input-sm roundbox20" type="text"
                                               placeholder="enter URL or keywords" name="url" autocomplete="off"
                                               onclick="$(this).css('padding-left','').parent().find('.iconochive-search').hide()"/>
                                    </form>
                                </div>
                            </div>{/*--/.row--*/}
                        </div>{/*--/.wayback-main--*/}
                    </div>
                </div>{/*--./row--*/}

                {/* TODO-DETAILS-INFOREQD Need to figure out how to auto-generator the other rows of nav-tophat for each media type */}
            </div>{/*--/#nav-tophat--*/}

            <div id="nav-dweb-parent" className="navbar navbar-inverse navbar-static-top" role="navigation">
              <div id="nav-tophat-helper" className="hidden-xs"></div>
              <ul className="nav navbar-nav navbar-main">

                {this.mts.map((mt, n) => (
                     <li key={'mikey'+n} className="dropdown dropdown-ia pull-left">
                       <a title={mt} className={'navia-link '+mt}
                          onClick={`Nav.nav_details("${mt}")`}
                          >{/*--disabled till top hat worked on dweb-archive issue#70 -- data-top-kind={mt} data-toggle="tooltip" target="_top" data-placement="bottom"--*/}
                         <span className={'iconochive-'+mt} aria-hidden="true"></span>
                         <span className="sr-only">{mt}</span>
                       </a>
                     </li>
                ) ) }
                <li className="navbar-brand-li">
                  <a className="navbar-brand" onClick="Nav.nav_home();" target="_top">
                    <span className="iconochive-logo"  aria-hidden="true"></span>
                    <span className="sr-only">logo</span>
                  </a>
                </li>

                <li id="nav-search" className="dropdown dropdown-ia pull-right">
                  <a onClick="$(this).parents('#nav-search').find('form').submit(); return false;">
                    <span className="iconochive-search" aria-hidden="true"></span>
                    <span className="sr-only">search</span>
                  </a>
                  <div class="searchbar">
                    <form  class="search-form js-search-form" role="search" onSubmit="Nav.nav_search(this.elements[0].value); return 0;"
                        data-event-form-tracking="TopNav|SearchForm" data-wayback-machine-search-url="https://web.archive.org/web/*/">
                      <label htmlFor="search-bar-2" className="sr-only">Search the Archive</label>
                      <input id="search-bar-2" class="js-search-bar" placeholder="Search" type="text" name="search" value=""
                        aria-controls="navbar_search_options" aria-label="Search the Archive. Filters and Advanced Search available below."/>
                      <input type="submit" value="Search"/>
                    </form>
                  </div>
                </li>

                <li className="dropdown dropdown-ia pull-right">
                  <a href="https://archive.org/create" target="top" data-toggle="tooltip" data-placement="bottom" title="Upload">
                    <span className="iconochive-upload"  aria-hidden="true"></span>
                    <span className="sr-only">upload</span>
                  </a>
                </li>
              </ul> {/*--navbar-main--*/}
              <ul id="nav-abouts" class="">
                {/*--TODO-BOOTSTRAP ongoing, was trying to make these eg. /about and use name lookup, but fails because not CORS and havent built gateway, and there is no "headless" version of these pages--*/}
                <li><a target="_top" data-event-click-tracking="TopNav|AboutLink" href="https://archive.org/about/">ABOUT</a>
                </li>
                <li><a target="_top" data-event-click-tracking="TopNav|ContactLink"
                       href="https://archive.org/about/contact.php">CONTACT</a></li>
                <li><a target="_top" data-event-click-tracking="TopNav|BlogLink" href="https://blog.archive.org">BLOG</a>{/*--TODO-BOOTSTRAP this was //blog, no good reason why not forcing https --*/}
                </li>
                <li><a target="_top" data-event-click-tracking="TopNav|ProjectsLink"
                       href="https://archive.org/projects">PROJECTS</a></li>
                <li><a target="_top" data-event-click-tracking="TopNav|HelpLink"
                       href="https://archive.org/about/faqs.php">HELP</a></li>
                <li><a target="_top" data-event-click-tracking="TopNav|DonateLink"
                       href="https://archive.org/donate">DONATE</a></li>
                <li><a target="_top" data-event-click-tracking="TopNav|JobsLink"
                       href="https://archive.org/about/jobs.php">JOBS</a></li>
                <li><a target="_top" data-event-click-tracking="TopNav|VolunteerLink"
                       href="https://archive.org/about/volunteerpositions.php">VOLUNTEER</a></li>
                <li><a target="_top" data-event-click-tracking="TopNav|PeopleLink"
                       href="https://archive.org/about/bios.php">PEOPLE</a></li>
              </ul>
                {/*--navbar--*/} </div>
          {/*--nav-wrap2--*/} </div>
        {/*--nav-wrap1--*/} </div>
      );
  }

    static clear(destn) {
        // Clear the screen to give confidence that action under way
        // Leaves Nav, clears rest
        React.domrender(new DetailsError({message: < span >Loading - note this can take a while if no-one else has accessed this item yet</span>}).wrap(), destn)
    }
    static async nav_home(wanthistory=true) {
        debug("Going home");
        return await Nav.nav_details(undefined, wanthistory);
    }

    static async nav_details(id, wanthistory=true) {
        debug("Navigating to Details %s", id);
        const destn = document.getElementById('main'); // Blank window (except Nav) as loading
        Nav.clear(destn);
        await Nav.factory(id, destn, {wanthistory}); // Not sure what returning ....
        return false; // Dont follow anchor link - unfortunately React ignores this
    }

    static async pausedParm() {
        return (await DwebTransports.p_statuses())
        .filter(t => (t.status === TRANSPORT_STATUS_PAUSED))
        .map(t => "paused="+t.name)
        .join('&')
    }

    static async nav_search(q, wanthistory=true) {
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
            const supportsArc = ! (window.location.origin === "file://" || window.location.pathname.startsWith("/ipfs/")  || window.location.pathname.startsWith("/ipns/") )
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

    static async factory(itemid, res, {wanthistory=true, downloaddirectory=false}={}) {
      /* Fetch and render an ArchiveItem
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
            let supportsArc = ! (window.location.origin === "file://" || window.location.pathname.startsWith("/ipfs/")  || window.location.pathname.startsWith("/ipns/"))
            if (!supportsArc) {
                if (itemid) cnp.push(`item=${itemid}`);   // Need item id parameter on local files
                if (downloaddirectory) cnp.push('download=1');   // Need item id parameter on local files
            }
            cnp = cnp.filter(p => !!p).join('&');
            // History is tricky .... take care of: SW (with Base set) \ !SW; file | http; cases
            // when loaded from file, non SW window.location.origin = document.location.origin = "file://" and document.baseURI is unset
            if (supportsArc) {
                historyloc = `${window.location.origin}/arc/archive.org/${downloaddirectory ? "download" : "details"}${itemid ? "/"+itemid :""}?${cnp}`;
            } else {
                historyloc = `${window.location.origin}${window.location.pathname}?${cnp}`;
            }
            history.pushState(historystate, `Internet Archive item ${itemid ? itemid : ""}`, historyloc);
        }
        try {
            if (!itemid) {
                (await new Home().fetch()).render(res);
            } else {
                let d = await new Details({itemid}).fetch();
                let metaapi = d.exportMetadataAPI(); // Cant pass Details to the constructors below
                if (!d.metadata) {
                    new DetailsError({itemid, message: `item ${itemid} cannot be found or does not have metadata`}).render(res);
                } else {
                    if (downloaddirectory) {
                        new DownloadDirectory({itemid, metaapi}).render(res);
                    } else {
                        switch (d.metadata.mediatype) {
                            case "collection":
                                (await new Collection({itemid, metaapi}).fetch()).render(res);   //fetch will do search
                                break;
                            case "texts":
                                new Texts({itemid, metaapi}).render(res);
                                break;
                            case "image":
                                new Image({itemid, metaapi}).render(res);
                                break;
                            case "audio": // Intentionally drop thru to movies
                            case "etree": // Concerts uploaded
                                new Audio({itemid, metaapi}).render(res);
                                break;
                            case "movies":
                                new Video({itemid, metaapi}).render(res);
                                break;
                            case "account":
                                return (await new Account({itemid, metaapi}).fetch()).render(res);
                            default:
                                //TODO Not yet supporting software, zotero (0 items); data; web
                                new DetailsError({itemid, message: `Unsupported mediatype: ${obj.metadata.mediatype}`}).render(res);
                            //    return new Nav(")
                        }
                    }
                }
            }
        } catch(err) {
            console.error(err);
            new DetailsError({itemid, message: err.message}).render(res);
        }
    }

    // noinspection JSUnusedGlobalSymbols
    static audioPlay(elAnchor) {
        // Used by Audio to play a track - since "Nav" is a global it can access
        Audio.play(elAnchor);
        return false;
    }
    // noinspection JSUnusedGlobalSymbols
    static searchMore(elAnchor) {
        Search.searchMore(elAnchor); // Ignore promise returned
        return false;
    }
}


window.onpopstate = function(event) {
    debug("Going back to: %s %o", document.location, event.state);
    if (event.state && event.state.query) {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_search(event.state.query, false);
    } else if (event.state && event.state.itemid) {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_details(event.state.itemid, false);
    } else {
        // noinspection JSIgnoredPromiseFromCall
        Nav.nav_home(false);
    }

};