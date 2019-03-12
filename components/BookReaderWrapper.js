//This has NOT been tested on IAUX but should be moveable to IAUX just by switching the commented headers below -
//IAUX version
//import React from 'react'
//import IAReactComponent from 'iacomponents/experimental/IAReactComponent';
//import PropTypes from 'prop-types'
//!IAUX version
const debug = require('debug')("BookReaderWrapper");
import React from "../ReactFake";
import IAReactComponent from './IAReactComponent';
import RawBookReaderResponse from '@internetarchive/dweb-archivecontroller/RawBookReaderResponse';
const ACUtil = require('@internetarchive/dweb-archivecontroller/Util'); // For gatewayServr

//TODO-BOOK note all the <script> tags added to archive.html for this, some may be able to be moved here
/*
Bookreader is complex, we are abstracting just some portion of it and intercepting without trying to really understand it all.

Resources:
Presentation by Richard - especially about lending and options:
https://docs.google.com/presentation/d/1dhDAUjob6oSVWJsuShviW7qkiEou2RlJOsO5QIaEDlY/edit#slide=id.g4cf82c97a5_0_7
 */



function getPage(index, reduce, rotate) {
    debug("gettingPage=%d scale=%d rotate=%O", index, reduce, rotate);
}
export default class BookReaderWrapper extends IAReactComponent {
    /* Notes:
     assumption is that item has  .bookreader { data, brOptions, lendingInfo }

     The URL can include string like /page/4, this is pulled out of the window/document's URL deep in the code in BookReader.prototype.initParams
     so we just have to ensure the url is not munged by anything else happening.
     */


    /* Used in IAUX, but not in ReactFake
    static propTypes = {
        item: PropTypes.object.isRequired, //ArchiveItem
        page: PropType.string, // e.g. 1 or n5
    };
    */
    constructor(props) {
        super(props);
        if (this.props.item) this.props.identifier = this.props.item.itemid;
    }
    loadcallable(enclosingElement) {
        const protocolServer = ACUtil.gatewayServer();
        const [ protocol, unused, serverPort] = protocolServer.split('/');
        const item = this.props.item;
        const identifier = this.props.identifier;
        var options = {
            el: '#BookReader',
            mobileNavFullscreenOnly: true,
            urlHistoryBasePath: `\/arc\/archive.org\/details\/${this.props.identifier}\/`,  // This is use when URL is rewritten to include page
            resumeCookiePath: `\/arc\/archive.org\/details\/${this.props.identifier}`,
            urlMode: 'history',
            // Only reflect page onto the URL
            urlTrackedParams: ['page'],    //TODO-BOOK "x" added for debugging
            enableBookTitleLink: false,
            bookUrlText: null,
            initialSearchTerm: null,
            imagesBaseURL: (DwebArchive.mirror ? protocolServer+"/archive/" : "https://archive.org/") + "bookreader/BookReader/images/", //TODO-BOOK support /archive/bookreader/BookReader/images on dweb.me
            onePage: {autofit: "auto"},
            thumbnail:  (DwebArchive.mirror ? `//${serverPort}/arc/archive.org/` : "https://archive.org") + `download/${identifier}/page/cover_t.jpg`   // Unfortunately bookread.js appends protocol so we cant control it here
            // Note archive.org/download/xx/page/cover_t.jpg redirects to e.g.  https://ia601600.us.archive.org/BookReader/BookReaderPreview.php?id=xx&itemPath=%2F27%2Fitems%2Fxx&server=ia601600.us.archive.org&page=cover_t.jpg
            //getPageURI: xyzzy
        };
        //TODO-BOOK this line will evolve as work thru steps to use local server and cached metadata etc
        item.fetch_bookreader({page: this.props.page}, (err, ai) => {      // Load Bookreader data async
            const rawAPI = RawBookReaderResponse.fromArchiveItem(item);
            BookReaderJSIAinit(rawAPI.cooked(), options); // Note don't need to change during cooking as will be delivered by server (or cooked in mirror) as appropriate
        });
        // Usage stats
        //TODO-BOOK figure out why not being loaded
        if (window.archive_analytics) window.archive_analytics.values['bookreader'] = 'open';
    }

    render() { return (
        // Code as cut and paste from https://archive.org/details/unitednov65unit/page/n5 on 2019-02-24
        <div id="IABookReaderWrapper" ref={this.load}>
            <div id="IABookReaderMessageWrapper" style="display:none;"></div>
            <div id="BookReader" className="BookReader"></div>
        </div> )
    }
}


/*

* Strategy
    * [TESTED] Trivial component: calls IA backgroung server via server field. and BookReaderJSIAinit using BookReaderJSIAinit and Bookreader in globals (as unmodifed code does) Called from Texts.js
    * [TESTED] Component to fetch BookReaderJSIA via fetch_bookreader so caches it and/or gets from localhost:4244/BookReader/BookReaderJSIA
    * [TESTED localhost] get pages thru localhost
    * TESTING each step:
        * http://localhost:4244/arc/archive.org/details/unitednov65unit
        * http://localhost:4244/arc/archive.org/details/unitednov65unit?mirror=localhost:4244&transport=HTTP
        * http://localhost:4244/arc/archive.org/details/unitednov65unit?mirror=localhost:4244&transport=HTTP WHEN DISCONNECTED (IIAB)
        * http://192.168.88.1:4244/arc/archive.org/details/AboutBan1935?transport=HTTP&mirror=192.168.88.1:4244 WHEN DISCONNECTED (Rachel)
* ==== Next  step ====
    * Failing tests
        * When disconnected, fails to read names - need backstop and need in GUN
        * https://dweb.me/arc/archive.org/details/ialerequestsummary?
        * when IPFS not running keeps trying addIPFS - go thru transports and fail nicely if transport not connected
* ==== AFTER next step ===
    * BUT ui needs to check for nearby sizes if doesnt have correct one and offline
    * Fetch bookdata (assumes done fetch_metadata)
        * Work with isa on URL schemes
        * [ ] THEN fetch dweb.me
        * [ ] THEN fetch via transports (including dweb.me)
    * dweb.me/xxxxx
        * Currently goes direct to datanode, will go to dweb.me once archive.org/BookReader/ works
        * construct url from metadata d1,d2,dir
          * set server=dweb.me
          * edit result to turn https://dweb.me into http://localhost:4244/
        * THEN Make localhost/BookReader/BookReaderJSIA.php forward to dweb.me
      * Dweb.me: /Bookreader/BookReaderImages.php
        * Call actual server for page (use metadata to find server), push url into ipfs to get from dweb.me
    * Crawl:
        * metadata gets the json (fetch_metadata)
        * Details gets each of the pages at a reasonable scale - e.g. 4 or 5
        * All gets all files (as now)
    * function usesBookreader(metadata)
      * = true if mediatype=texts && has abby and pdf files
      * test on some image only files - like the peterrabbit one
  * Future:
    * dweb.me add ipfs etc to urls in brOptions/data as push into IPFS.
    * bookreader code to see that url when sees the dweb.me one (maybe not that hard)
    * Add URLs like /details/unitednov65unit/page/2?transport=HTTP&mirror=localhost:4244 (see where come from and should be /arc/archive.org/details...
    * Fetch /BookReader/ etc via Transports rather than direct to service node or dweb.me so will use IPFS
    * In JSIA json are download links that go to //archive.org, rewrite those.
    * Does an OL query: https://openlibrary.org/query.json?type=/type/edition&*=&ocaid=unitednov65unit&callback=jQuery1102030322806165558847_1552068906756&_=1552068906757
*/
