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
    // Note assumption is that item has  .bookreader { data, brOptions, lendingInfo }


    /* Used in IAUX, but not in ReactFake
    static propTypes = {
        item: PropTypes.object.isRequired, //ArchiveItem
    };
    */
    constructor(props) {
        super(props);
        if (this.props.item) this.props.identifier = this.props.item.itemid;
    }
    loadcallable(enclosingElement) {
        var options = {
            el: '#BookReader',
            mobileNavFullscreenOnly: true,
            urlHistoryBasePath: `\/details\/${this.props.identifier}\/`,
            resumeCookiePath: `\/details\/${this.props.identifier}`,
            urlMode: 'history',
            // Only reflect page onto the URL
            urlTrackedParams: ['page'],
            enableBookTitleLink: false,
            bookUrlText: null,
            initialSearchTerm: null,
            imagesBaseURL: ACUtil.gatewayServer()+"/archive/bookreader/BookReader/images/",
            onePage: {autofit: "auto"},
            //getPageURI: xyzzy
        };
        const item = this.props.item;
        const identifier = this.props.identifier;
        //TODO-BOOK this line will evolve as work thru steps to use local server and cached metadata etc
        item.fetch_bookreader({}, (err, ai) => {      // Load Bookreader data async
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
* ==== Next  step ====


* === PENDING BUGS ===
    * Does an OL query: https://openlibrary.org/query.json?type=/type/edition&*=&ocaid=unitednov65unit&callback=jQuery1102030322806165558847_1552068906756&_=1552068906757
    * Gets cover via https://archive.org/download/unitednov65unit/page/cover_t.jpg
    * Goes to preview via: https://ia601600.us.archive.org/BookReader/BookReaderPreview.php?id=unitednov65unit&itemPath=%2F27%2Fitems%2Funitednov65unit&server=ia601600.us.archive.org&page=cover_t.jpg
    * Rewrites URL to e.g. http://localhost:4244/details/unitednov65unit/page/n5?mirror=localhost:4244&transport=HTTP
* ==== AFTER next step ===
    * Fetch bookdata (assumes done fetch_metadata)
        * [Waiting on Tracey] to confirm if can forward from archive.org
        * [ ] THEN fetch dweb.me
        * [ ] THEN fetch via transports (including dweb.me)
    * localhost/BookReader/BookReaderJSIA.php
        * [ ] edit result to turn https://dweb.me into http://localhost:4244/ - maybe handlable at original call
    * dweb.me/xxxxx
        * Currently goes direct to datanode, will go to dweb.me once archive.org/BookReader/ works
        * construct url from metadata d1,d2,dir
          * set server=dweb.me
          * edit result to turn https://dweb.me into http://localhost:4244/
        * THEN Make localhost/BookReader/BookReaderJSIA.php forward to dweb.me
    * Intercept https://ia801600.us.archive.org/BookReader/BookReaderImages.php?zip=/27/items/unitednov65unit/unitednov65unit_jp2.zip&file=unitednov65unit_jp2/unitednov65unit_0001.jp2&scale=4&rotate=0
      * Mirror:/Bookreader/BookReaderImages.php
        * If have file then return
        * If have the .zip then extract file and return
        * else forward request for file to dweb.me and cache
      * Dweb.me: /Bookreader/BookReaderImages.php
        * Call actual server for page (use metadata to find server), push url into ipfs to get from dweb.me
    * Crawl:
        * metadata gets the json (fetch_metadata)
        * Details gets the zip
        * All gets all files (as now)
    * function usesBookreader(metadata)
      * = true if mediatype=texts && has abby and pdf files
    * put bookreader/BookReader/images/* into app ?
  * Future:
    * dweb.me add ipfs etc to urls in brOptions/data as push into IPFS.
    * bookreader code to see that url when sees the dweb.me one (maybe not that hard)
    * Add URLs like /details/unitednov65unit/page/2?transport=HTTP&mirror=localhost:4244 (see where come from and should be /arc/archive.org/details...
    * Fetch /BookReader/ etc via Transports rather than direct to service node or dweb.me so will use IPFS
    * In JSIA json are download links that go to //archive.org, rewrite those.
*/
