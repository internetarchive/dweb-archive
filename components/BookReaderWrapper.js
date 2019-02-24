// Code as cut and paste from https://archive.org/details/unitednov65unit/page/n5 on 2019-02-24
<div id="IABookReaderWrapper">
    <div id="IABookReaderMessageWrapper" style="display:none;"></div>
    <div id="BookReader" className="BookReader"></div>
</div>

// Load Bookreader data async
$(function () {
    $.ajax({
        url: '//ia801600.us.archive.org/BookReader/BookReaderJSIA.php?id=unitednov65unit&itemPath=/27/items/unitednov65unit&server=ia801600.us.archive.org&format=jsonp&subPrefix=unitednov65unit&requestUri=/details/unitednov65unit',
        type: 'GET',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    }).then(function (response) {
        var options = {
            el: '#BookReader',
            mobileNavFullscreenOnly: true,
            urlHistoryBasePath: "\/details\/unitednov65unit\/",
            resumeCookiePath: "\/details\/unitednov65unit",
            urlMode: 'history',
            // Only reflect page onto the URL
            urlTrackedParams: ['page'],
            enableBookTitleLink: false,
            bookUrlText: null,
            initialSearchTerm: null,
            onePage: {autofit: "auto"}
        };
        BookReaderJSIAinit(response.data, options);
        // Usage stats
        window.archive_analytics.values['bookreader'] = 'open';
    });
});

/*

* Strategy
    * --- next step ---
      * Trivial component
          * Call regular server
            * Edit url to use d1,d2,dir
          * Pass to BookReaderJSIAinit
          * Probably needs BookReaderJSIAinit and Bookreader in globals as thats what (unmodified) code does
      * Call from Texts.js
    * --- following step ---
    * In Text.js
       * if usesBookReader
            fetch_bookdata
            load component
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
