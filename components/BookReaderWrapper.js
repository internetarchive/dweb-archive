//This has NOT been tested on IAUX but should be moveable to IAUX just by switching the commented headers below -
//IAUX version
//import React from 'react'
//import IAReactComponent from 'iacomponents/experimental/IAReactComponent';
//import PropTypes from 'prop-types'
//!IAUX version
import React from "../ReactFake";
import IAReactComponent from './IAReactComponent';

//These files are already in archive.html:
// /includes/bootstrap.min.js
// /includes/build/js/archive.min.js?v=891b5f7" type="text/javascript"></script>
/* These files are in a.o/details when processing "texts" but not in archive.html and probably not needed:
    /includes/node_modules/react/umd/react.production.min.js // Note we have react/dist/react
    /includes/node_modules/react-dom/umd/react-dom.production.min.js
    /includes/build/js/playset.min.js?v=891b5f7" type="text/javascript"></script>
    /includes/build/js/polyfill.min.js?v=891b5f7" type="text/javascript"></script>
*/
/* TODO-BOOK Not sure which of this CSS is is needed
    <link href="/bookreader/BookReader/mmenu/dist/css/jquery.mmenu.css" rel="stylesheet" type="text/css"/>
    <link href="/bookreader/BookReader/mmenu/dist/addons/navbars/jquery.mmenu.navbars.css" rel="stylesheet" type="text/css"/>
    <link href="/bookreader/BookReader/BookReader.css" rel="stylesheet" type="text/css"/>
    <link href="/bookreader/BookReader-ia.css" rel="stylesheet" type="text/css"/>
 */
/* It not clear which of these are needed, possibly all of them for different cases. Note they mostly seem to set global variables as a
way to refer to each other since on archive.org they are usually included with <script> tags in details page -*/

const jquery = require('jquery'); // Needed by jquery.ui
require('@internetarchive/bookreader/BookReader/jquery-ui-1.12.0.min.js');
require('@internetarchive/bookreader/BookReader/jquery.ui.touch-punch.min.js');
require('@internetarchive/bookreader/BookReader/jquery.browser.min.js');
require('@internetarchive/bookreader/BookReader/dragscrollable-br.js');
require('@internetarchive/bookreader/BookReader/jquery.colorbox-min.js');
require('@internetarchive/bookreader/BookReader/jquery.bt.min.js');
require('@internetarchive/bookreader/BookReader/soundmanager/script/soundmanager2-jsmin.js');
require('@internetarchive/bookreader/BookReader/mmenu/dist/js/jquery.mmenu.min.js?');
require('@internetarchive/bookreader/BookReader/mmenu/dist/addons/navbars/jquery.mmenu.navbars.min.js');
require('@internetarchive/bookreader/BookReader/BookReader.js');
require('@internetarchive/bookreader/BookReader/plugins/plugin.mobile_nav.js');
require('@internetarchive/bookreader/BookReader/plugins/plugin.search.js');
require('@internetarchive/bookreader/BookReader/plugins/plugin.chapters.js');
require('@internetarchive/bookreader/BookReader/plugins/plugin.tts.js');
require('@internetarchive/bookreader/BookReader/plugins/plugin.url.js');
require('@internetarchive/bookreader/BookReader/plugins/plugin.resume.js');
require('@internetarchive/bookreader/BookReader/plugins/plugin.archive_analytics.js');
Object.entries(require('../bookreader/BookReaderHelpers.js').default).forEach(kv => global[kv[0]] = kv[1]);
//const LendingFlow = require('../bookreader/LendingFlow.js');
import LendingFlow from '../bookreader/LendingFlow.js'; // Modified to "export default LendingFlow"
global.LendingFlow = LendingFlow; // Used deep in other bookreader modues
require('../bookreader/BookReaderJSIA.js'); // Sets up global BookReaderJSIAinit

export default class BookReaderWrapper extends IAReactComponent {
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
            onePage: {autofit: "auto"}
        };
        const item = this.props.item;
        const identifier = this.props.identifier;
        //TODO-BOOK this line will evolve as work thru steps to use local server and cached metadata etc
        const url=`https://${item.server}/BookReader/BookReaderJSIA.php?id=${identifier}&itemPath=${item.dir}&server=${item.server}&format=jsonp&subPrefix=${identifier}&requestUri=/details/${identifier}`;
        DwebTransports.httptools.p_GET(url, {}, (err, res) => {
            // Load Bookreader data async
            BookReaderJSIAinit(res.data, options);
            // Usage stats
            window.archive_analytics.values['bookreader'] = 'open';
        });
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
    * --- next step ---
      * Trivial component
          * Call regular server
            * [DONE] Edit url to use server,dir
          * [DONE] Pass to BookReaderJSIAinit
          * [DONE] Probably needs BookReaderJSIAinit and Bookreader in globals as thats what (unmodified) code does
      * [DONE] Call from Texts.js
      * [ ] Test
*/
/*
    * --- following step ---
    * In Text.js
       * if usesBookReader
            load component - fetches bookdata
    * In component
        * fetch_metadata
        * Then fetch bookdata (url ?)
        * Pass to BookReaderJSIAinit
    * Fetch bookdata (assumes done fetch_metadata)
        * THEN fetch_bookdata(metadata) from dweb.me or localhost
    * localhost/xxxx
        * if have locally
            * add metadata back into datastructure and return
        * else
            * forward to dweb.me
            * cache result minus the metadata field
            * edit result to turn https://dweb.me into http://localhost:4244/
            * OR find code fetching dweb.me and intercept there (better as allows IPFS intercept as well)
    * dweb.me/xxxxx
        * construct url from metadata d1,d2,dir
          * set server=dweb.me
          * edit result to turn https://dweb.me into http://localhost:4244/
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
*/
