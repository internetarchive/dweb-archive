//import ReactDOM from "react-dom";

require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!

// https://ponyfoo.com/articles/universal-react-babel

import React from './ReactFake';
import Util from './Util';
import Search from './Search';
import Details from './Details'
import Home from './Home'
import Collection from './Collection'
import Texts from './Texts'
import Image from './Image'
import Audio from './Audio'
import Video from './Video'
import DetailsError from './DetailsError'
import DownloadDirectory from './DownloadDirectory'
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import

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
                            Search the history of over 308 billion
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

            <div className="navbar navbar-inverse navbar-static-top" role="navigation">
              <div id="nav-tophat-helper" className="hidden-xs"></div>
              <ul className="nav navbar-nav navbar-main">

                {this.mts.map((mt, n) => (
                     <li key={'mikey'+n} className="dropdown dropdown-ia pull-left">
                       <a title={mt} className={'navia-link '+mt}
                          onClick={`Nav.nav_details("${mt}")`}
                          data-top-kind={mt} data-toggle="tooltip" target="_top" data-placement="bottom">
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
                  <div>
                    <form role="search" onSubmit="Nav.nav_search(this.elements[0].value); return 0;">
                      <label htmlFor="search-bar-2" className="sr-only">Search the Archive</label>
                      <input id="search-bar-2" placeholder="Search" type="text" name="query" value=""/>
                      <input type="submit" value="Search"/>
                    </form>
                  </div>
                </li>

                <li className="dropdown dropdown-ia pull-right">
                  <a href="https://archive.org/create" _target="top" data-toggle="tooltip" data-placement="bottom" title="Upload">
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
        React.domrender(new DetailsError(undefined, undefined, < span >Loading - note this can take a while if no-one else has accessed this item yet< /span>).wrap(), destn)
    }
    static async nav_home(wanthistory=true) {
        console.log("Navigating to Home");
        return await Nav.nav_details(undefined, wanthistory);
    }

    static async nav_details(id, wanthistory=true) {
        console.log("Navigating to Details", id);
        let destn = document.getElementById('main'); // Blank window (except Nav) as loading
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
        console.log("Navigating to Search");
        let destn = document.getElementById('main'); // Blank window (except Nav) as loading
        Nav.clear(destn);
        let s = await new Search((typeof(q) === "object") ? q : (typeof(q) === "string") ? {query: q} : undefined).fetch();
        q = s.query;    // Flattened from object to string
        if (wanthistory) {
            let historystate = {query: q}; //TODO-HISTORY may want  to store verbose, transports etc here
            let cnp = []
            cnp.push(await this.pausedParm()); //WAS DwebTransports.p_connectedNamesParm(); but we want to exclude paused, not record current state of success/failed transport
            // Add any other searchparams back in, especially "tab"
            for (let sp of searchparams) {
                if (!["transport", "verbose", "query", "item"].includes(sp[0]))
                    cnp.push(`${sp[0]}=${sp[1]}`);
            }
            // See notes on async_factory about history.pushState
            let historyloc;
            cnp.push(verbose ? "verbose=true": "");
            cnp.push(`query=${q}`);
            cnp = cnp.filter(p => !!p).join('&')
            if (window.location.origin === "file://") {
                historyloc = `${window.location.origin}${window.location.pathname}?${cnp}`
            } else { //Might not work on http, this is intended for SW
                historyloc = `${window.location.origin}/arc/archive.org/details?${cnp}`
            }
            console.log("Writing history:", historyloc);
            history.pushState(historystate, `Internet Archive search ${q}`, historyloc);
        }
        s.render(destn);
    }
    static onclick_search(q) {
        // Build the onclick part of a search, q can be a string or an object e.g. {creator: "Foo bar"}
        return `Nav.nav_search(${JSON.stringify(q)}); return false;`;
    }

    static async nav_download(el) {
        let source = el.source; // Should be an ArchiveFile. - see example in Details.js
        if (Array.isArray(source)) {
            for (let s in source) await source[s].p_download(el);
        } else {
            await source.p_download(el);
        }
    }

    static async nav_downloaddirectory(itemid) {
        console.log("Navigating to Download directory for", itemid);
        let destn = document.getElementById('main'); // Blank window (except Nav) as loading
        Nav.clear(destn);
        await Nav.factory(itemid, destn, {wanthistory: true, downloaddirectory: true}); // Not sure what returning ....
        return false; // Dont follow anchor link - unfortunately React ignores this
    }

    static async factory(itemid, res, {wanthistory=true, downloaddirectory=false}={}) {
        console.group("Nav.factory",itemid);
        if (wanthistory) {
            let historystate = {itemid}; //TODO-HISTORY may want  to store verbose, transports etc here
            let cnp = []
            cnp.push(await this.pausedParm()); //WAS DwebTransports.p_connectedNamesParm(); but we want to exclude paused, not record current state of success/failed transport
            // Add any other searchparams back in, especially "tab"
            for (let sp of searchparams) {
                if (!["transport", "verbose", "item"].includes(sp[0]))
                    cnp.push(`${sp[0]}=${sp[1]}`);
            }
            // See notes on async_factory about history.pushState
            let historyloc;
            cnp.push(verbose ? "verbose=true": "");
            if ((window.location.origin === "file://") && itemid) cnp.push(`item=${itemid}`);   // Need item id parameter on local files
            cnp = cnp.filter(p => !!p).join('&')
            // History is tricky .... take care of: SW (with Base set) \ !SW; file | http; cases
            // when loaded from file, non SW window.location.origin = document.location.origin = "file://" and document.baseURI is unset
            if (window.location.origin === "file://") {
                historyloc = `${window.location.origin}${window.location.pathname}?${cnp}`
            } else {
                historyloc = `${window.location.origin}/arc/archive.org/details${itemid ? "/"+itemid :""}?${cnp}`
            }
            console.log("Writing history:", historyloc);
            history.pushState(historystate, `Internet Archive item ${itemid ? itemid : ""}`, historyloc);
        }
        if (!itemid) {
            (await new Home(itemid, undefined).fetch()).render(res);
        } else {
            let obj = await new Details(itemid).fetch();
            let item = obj.item;
            if (!item.metadata) {
                new DetailsError(itemid, item, `item ${itemid} cannot be found or does not have metadata`).render(res);
            } else {
                if (downloaddirectory) {
                    new DownloadDirectory(itemid, item).render(res);
                } else {
                    if (verbose) console.log("Found mediatype", item.metadata.mediatype);
                    let switchmediatype = item.metadata.mediatype;
                    if (item.metadata.mediatype === "education") {
                        // Typically miscategorized, have a guess !
                        if (item.files.find(f => Util.preferredVideoFormats.includes(f.format)))
                            switchmediatype = "movies";
                        else if (item.files.find(f => Util.textFormats.includes(f.format)))
                            switchmediatype = "texts";
                        else if (item.files.find(f => Util.imageFormats.includes(f.format)))
                            switchmediatype = "image";
                    }

                    switch (switchmediatype) {
                        case "collection":
                            return (await new Collection(itemid, item).fetch()).render(res);   //fetch will do search
                            break;
                        case "texts":
                            new Texts(itemid, item).render(res);
                            break;
                        case "image":
                            new Image(itemid, item).render(res);
                            break;
                        case "audio": // Intentionally drop thru to movies
                        case "etree": // Concerts uploaded
                            new Audio(itemid, item).render(res);
                            break;
                        case "movies":
                            new Video(itemid, item).render(res);
                            break;
                        default:
                            //TODO Not yet supporting software, zotero (0 items); data; web
                            new DetailsError(itemid, item, `Unsupported mediatype: ${item.metadata.mediatype}`).render(res);
                        //    return new Nav(")
                    }
                }
            }
        }
        console.groupEnd("Nav.factory",itemid);
    }

    static audioPlay(elAnchor) {
        // Used by Audio to play a track - since "Nav" is a global it can access
        let track = elAnchor.source;
        let af = track.sources[0].urls;
        let elAudio = document.getElementById("streamContainer");
        React.loadStream(elAudio, af.metadata.name, af, undefined, undefined);
        return false;
    }
}


window.onpopstate = function(event) {
    if (verbose) console.log("Popping state",document.location,"state=",event.state);
    if (event.state && event.state.query) {
        Nav.nav_search(event.state.query, false)
    } else if (event.state && event.state.itemid) {
        Nav.nav_details(event.state.itemid, false);
    } else {
        Nav.nav_home(false);
    }

}