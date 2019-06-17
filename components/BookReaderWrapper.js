const debug = require('debug')("BookReaderWrapper");
import React from "../ReactFake";
import IAFakeReactComponent from './IAFakeReactComponent';
import RawBookReaderResponse from '@internetarchive/dweb-archivecontroller/RawBookReaderResponse';
import {gatewayServer} from '@internetarchive/dweb-archivecontroller/Util'; // For gatewayServr

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
export default class BookReaderWrapper extends IAFakeReactComponent {
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
        const protocolServer = gatewayServer();
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
            urlTrackedParams: ['page'],
            enableBookTitleLink: false,
            bookUrlText: null,
            initialSearchTerm: null,
            imagesBaseURL: (DwebArchive.mirror ? protocolServer+"/archive/" : "https://archive.org/") + "bookreader/BookReader/images/", //TODO-BOOK support /archive/bookreader/BookReader/images on dweb.me
            onePage: {autofit: "auto"},
            thumbnail:  (DwebArchive.mirror ? `//${serverPort}/arc/archive.org/` : "https://archive.org") + `download/${identifier}/page/cover_t.jpg`   // Unfortunately bookread.js appends protocol so we cant control it here
            // Note archive.org/download/xx/page/cover_t.jpg redirects to e.g.  https://ia601600.us.archive.org/BookReader/BookReaderPreview.php?id=xx&itemPath=%2F27%2Fitems%2Fxx&server=ia601600.us.archive.org&page=cover_t.jpg
            //getPageURI: xyzzy
        };
        item.fetch_bookreader({page: this.props.page}, (err, ai) => {      // Load Bookreader data async
            const rawAPI = RawBookReaderResponse.fromArchiveItem(item);
            BookReaderJSIAinit(rawAPI.cooked(), options); // Note don't need to change during cooking as will be delivered by server (or cooked in mirror) as appropriate
        });
        // Usage stats
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
