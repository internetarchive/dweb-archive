const debug = require('debug')("BookReaderDwebWrapper");
import React from "react";
import { IAReactComponent, BookReaderJSIAWrapper, BookReaderWrapper } from "@internetarchive/ia-components/dweb-index.js";
import RawBookReaderResponse from '@internetarchive/dweb-archivecontroller/RawBookReaderResponse';
import { gatewayServer } from '@internetarchive/dweb-archivecontroller/Util'; // For gatewayServr
import { I8span } from './Languages';

//TODO-BOOK note all the <script> tags added to archive.html for this, some may be able to be moved here
/*
Bookreader is complex, we are abstracting just some portion of it and intercepting without trying to really understand it all.

Resources:
Presentation by Richard - especially about lending and options:
https://docs.google.com/presentation/d/1dhDAUjob6oSVWJsuShviW7qkiEou2RlJOsO5QIaEDlY/edit#slide=id.g4cf82c97a5_0_7
 */

/**
 * <BookReaderDwebWrapper
 *   item=IDENTIFIER
 *   page=INTEGER - or maybe its a string?
 *   disconnected=BOOL true if cant see upstream server (so disable search)
 * />
 */
class BookReaderDwebWrapper extends IAReactComponent {
    /* Notes:
     assumption is that item has  .bookreader { data, brOptions, lendingInfo }

     The URL can include string like /page/4, this is pulled out of the window/document's URL deep in the code in BookReader.prototype.initParams
     so we just have to ensure the url is not munged by anything else happening.

     To merge this (Dbrw) into iaux/.../bookreader-wrapper-main.jsx (Ibrw)
    TODO Extra options below should be passed as props to Ibrw - which prop means using Dbrw to wrap Ibrw
    OR pushing that functionality up to BookReaderTheatre Dbrt

    See https://github.com/internetarchive/iaux/issues/260 re merging wrappers
    */

    constructor(props) {
        super(props);
    }
    fetchAndUpdateState() {
      // Cant be in constructor as new page or item wont call it, cant be in render as run too often
      this.props.item.fetch_bookreader({page: this.props.page}, (err, ai) => {// Load Bookreader data async
        const rawAPI = RawBookReaderResponse.fromArchiveItem(this.props.item);
        this.setState({jsia: RawBookReaderResponse.fromArchiveItem(this.props.item).cooked()});
      });
    }
    componentDidMount() {
      super.componentDidMount();
      this.fetchAndUpdateState(); // Asynchronous
    }
    componentDidUpdate(prevProps, unusedPrevState, unusedSnapshot) {
      super.componentDidUpdate(prevProps, unusedPrevState, unusedSnapshot);
      if (prevProps.item !== this.props.item) {
        fetchAndUpdateState(); // Asynchronous
      }
    }

    render() {
      const [ protocol, unused, serverPort ] = gatewayServer().split('/');
      const options={
        // Override defaults in BookReaderJSIAWrapper
        //onePage: {autofit: "auto"}, // iBRW uses "height"
        enableSearch: !this.props.disconnected,
        //TODO-URLS support base used by BRW i.e. /bookreader/BookReader/images
        imagesBaseURL: (DwebArchive.mirror ? gatewayServer()+"/archive/" : "https://archive.org/") + "bookreader/BookReader/images/", //TODO-BOOK support /archive/bookreader/BookReader/images on dweb.me
        // Options not in BookReaderJSIAWrapper
        urlHistoryBasePath: `\/arc\/archive.org\/details\/${this.props.item.itemid}\/`,  // This is use when URL is rewritten to include page
        resumeCookiePath: `\/arc\/archive.org\/details\/${this.props.item.itemid}`,
        urlMode: 'history',
        // Only reflect page onto the URL
        urlTrackedParams: ['page'],
        enableBookTitleLink: false,
        bookUrlText: null,
        initialSearchTerm: null,
        //getPageURI: {}, //TODO-BOOKREADER make this use dweb to fetch see getImageURI
        thumbnail:  (DwebArchive.mirror ? `//${serverPort}/arc/archive.org/` : "https://archive.org") + `download/${this.props.item.itemid}/page/cover_t.jpg`   // Unfortunately bookread.js appends protocol so we cant control it here
        // Note archive.org/download/xx/page/cover_t.jpg redirects to e.g.  https://ia601600.us.archive.org/BookReader/BookReaderPreview.php?id=xx&itemPath=%2F27%2Fitems%2Fxx&server=ia601600.us.archive.org&page=cover_t.jpg
      }
      return  !this.state.jsia
        ? <I8span en="Loading Book metadata for"> {this.props.item.itemid}</I8span>
        : <BookReaderJSIAWrapper jsia={this.state.jsia} options={options} />
    }
}


/*
  * Future:
    * dweb.me add ipfs etc to urls in brOptions/data as push into IPFS.
    * bookreader code to see that url when sees the dweb.me one (maybe not that hard)
    * Add URLs like /details/unitednov65unit/page/2?transport=HTTP&mirror=localhost:4244 (see where come from and should be /arc/archive.org/details...
    * Fetch /BookReader/ etc via Transports rather than direct to service node or dweb.me so will use IPFS
    * In JSIA json are download links that go to //archive.org, rewrite those.
    * Does an OL query: https://openlibrary.org/query.json?type=/type/edition&*=&ocaid=unitednov65unit&callback=jQuery1102030322806165558847_1552068906756&_=1552068906757
*/
export {BookReaderDwebWrapper}