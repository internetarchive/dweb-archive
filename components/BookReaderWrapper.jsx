const debug = require('debug')("BookReaderDwebWrapper");
import React from "react";
import { BookReaderJSIAWrapper, BookReaderWrapper, I18nSpan } from '../ia-components/dweb-index';
import { RawBookReaderResponse, routed } from '@internetarchive/dweb-archivecontroller';

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
class BookReaderDwebWrapper extends React.Component {
    /* Notes:
     assumption is that item has  .bookreader { data, brOptions, lendingInfo }

     The URL can include string like /page/4, this is pulled out of the window/document's URL deep in the code in BookReader.prototype.initParams
     so we just have to ensure the url is not munged by anything else happening.

    See https://github.com/internetarchive/iaux/issues/260 re merging wrappers
    */

    constructor(props) {
        super(props);
        this.state = {};
    }
  // SEE-IDENTICAL-CODE-IN: BookReaderWrapper, AlbumTheatre
  fetchAndUpdateState() {
      // Cant be in constructor as new page or item wont call it, cant be in render as run too often, and cant be getDerivedStateFromProps as async
      this.props.item.fetch_bookreader({page: this.props.page}, (err, ai) => {// Load Bookreader data async
        this.setState({jsia: RawBookReaderResponse.fromArchiveItem(this.props.item).cooked()});
      });
    }
    componentDidMount() {
      this.fetchAndUpdateState(); // Asynchronous
    }
    componentDidUpdate(prevProps, unusedPrevState, unusedSnapshot) {
      if (prevProps.item !== this.props.item) {
        fetchAndUpdateState(); // Asynchronous
      }
    }

    render() {
      const options={
        // Override defaults in BookReaderJSIAWrapper
        //onePage: {autofit: "auto"}, // iBRW uses "height"
        enableSearch: !this.props.disconnected,
        enableUrlPlugin: true,
        //TODO-URLS support base used by BRW i.e. /bookreader/BookReader/images
        imagesBaseURL: routed('https://archive.org/bookreader/BookReader/images/',
            { wantOneHttp: true }),
        // Options not in BookReaderJSIAWrapper
        urlHistoryBasePath: `\/details\/${this.props.item.itemid}\/`,  // This is use when URL is rewritten to include page
        resumeCookiePath: `\/details\/${this.props.item.itemid}`,
        // lookign at IDENTIFIER/page/xxx -> history; IDENTIFIER#page -> !history otherwise ???
        // urlMode: window.location.pathname.length > urlHistoryBasePath.length ? 'history' : 'hash',
        urlMode: window.location.hash.length > 1 ? undefined : 'history',
        // Only reflect page onto the URL
        urlTrackedParams: ['page'],
        enableBookTitleLink: false,
        bookUrlText: null,
        initialSearchTerm: null,
        //getPageURI: {}, //TODO-BOOKREADER make this use dweb to fetch see getImageURI, problem is that render has to by sync, and getImageURI has to be async
        thumbnail:  routed(`https://archive.org/download/${this.props.item.itemid}/page/cover_t.jpg`, { wantOneHttp: true }),
        // Unfortunately bookread.js appends protocol so we cant control it here
        // Note archive.org/download/xx/page/cover_t.jpg redirects to e.g.  https://ia601600.us.archive.org/BookReader/BookReaderPreview.php?id=xx&itemPath=%2F27%2Fitems%2Fxx&server=ia601600.us.archive.org&page=cover_t.jpg
      }
      return  !this.state.jsia
        ? <I18nSpan en="Loading Book metadata for"> {this.props.item.itemid}</I18nSpan>
        : <BookReaderWrapper jsia={this.state.jsia} options={options} />
    }
}


/*
  * Future:
    * dweb.me add ipfs etc to urls in brOptions/data as push into IPFS.
    * bookreader code to see that url when sees the dweb.archive.org one (maybe not that hard)
    * Add URLs like /details/unitednov65unit/page/2?transport=HTTP&mirror=localhost:4244
    * Fetch /BookReader/ etc via Transports rather than direct to service node or dweb.archive.org so will use IPFS
    * In JSIA json are download links that go to //archive.org, rewrite those.
    * Does an OL query: https://openlibrary.org/query.json?type=/type/edition&*=&ocaid=unitednov65unit&callback=jQuery1102030322806165558847_1552068906756&_=1552068906757
*/
export {BookReaderDwebWrapper}
// File regular review 2019-sept-09
