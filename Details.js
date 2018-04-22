require('babel-core/register')({presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
//Not needed on client - kept so script can run in both cases
//import ReactDOMServer from 'react-dom/server';
//Next line is for client, not needed on server but doesnt hurt
//import ReactDOM from 'react-dom';


// Notes on use of JSX (embedded HTML) for when converting HTML to JSX
// Anything that is to be parameterised gets {} and code between is javascript executed in context (this has the expected meaning)
// By implication an embedded object is {{foo: bar}}
// All comments have to be quoted <!--foo--> becomes {/*--foo--*}
// The "ReactFake code is a little more tolerant than React, specifically
// React requires style={{display: none}} ReactFake can also handle quoted style="display: none"
// React requires className= rather than class=, ReactFake supports both

import Util from './Util';
import ArchiveBase from './ArchiveBase'
import ArchiveFile from "./ArchiveFile";


export default class Details extends ArchiveBase {
    constructor(id, item = undefined) {
        super(id);
        this.item = item;
        this._listLoad();
    }

    navwrapped() {
        /* Wrap the content up checked on mbid (Red Shift) image:  wrap( TODO-TODO-DONATEBANNER | nav-wrap1 | maincontent | theatre-ia-wrap | item-details-about | TODO-ACTIONBUTTONS | TODO-ALSOFOUND  | TODO-ANALYTICS )
        returns:      JSX elements tree suitable for passing to ReactDOM.render or ReactDOMServer.renderToStaticMarkup
         */
        return (
            <div id="wrap" itemscope itemtype={this.itemtype}>
                {/* Missing donate-banner and scripts & css before it */}
                { new Nav().navwrapJSX() }
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {this.theatreIaWrap()} {/*This is the main-content*/}
                {this.itemDetailsAboutJSX()}
                {/* should have: alsoFound here (look at end of commute.html) */}
                {/* should have: analytics here (look at end of commute.html) */}
            {/*--wrap--*/}</div>
        );
    }


    archive_setup_push() {
        archive_setup.push(function(){  // This is common to Text, AV and image - though some have stuff before this and some a
            AJS.tilebars(); // page load
            $(window).on('resize  orientationchange', function(evt){
                clearTimeout(AJS.also_found_throttler)
                AJS.also_found_throttler = setTimeout(AJS.tilebars, 250)
            });
        });
    }
    browserAfter() {
        // initialize_flag
        // overlay related
        $(".toggle-flag-overlay").click(function (e) {
            e.preventDefault();
            $("#theatre-ia-wrap").removeClass("flagged");
        });
        // overlay - checkboxes
        $("#flag-checkboxes a").on("click", function (e) {
            e.preventDefault();
            $(this).children(".my-checkbox").toggleClass("checked");
            $.get($(this).attr("href"))
        });
        super.browserAfter(); // runs archive_setup_push and Util.AJS_on_dom_loaded(); Do this after the scripts above - which means put this browserAfter AFTER superclasses
    }

    cherModal(type) {
        return(
            <div id="cher-modal" className="modal fade" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content" style="padding:10px;">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span
                                    class="iconochive-remove-circle" aria-hidden="true"></span><span class="sr-only">remove-circle</span>
                            </button>
                            <h3 class="modal-title">Share or Embed This Item</h3>
                        </div>{/*--/.modal-header--*/}
                        <div id="cher-body">
                            {this.sharing()}
                            {this.embed()}
                            {this.embedWordpress()}
                            {this.embedAdvanced(type)}
                        </div>{/*--/#cher-body--*/}
                    </div>{/*--/.modal-content--*/}
                </div>{/*--/.modal-dialog--*/}
            </div>
        );
    }



    sharing() {
        //Common text across Image and Text and possibly other subclasses
        let item = this.item;
        let itemid = item.metadata.identifier; // Shortcut as used a lot
        let metadata = item.metadata; // Shortcut as used a lot
        let detailsURL = `https://archive.org/details/${itemid}`; // Note this should remain as pointing at details/itemid since its only used in sharing - FB, Twitter etc
        let sharingText =   `${metadata.title} : ${metadata.creator}`; //String used
        let sharingTextUriEncoded = encodeURIComponent(sharingText);

        return (
            <div style={{textAlign: "center", margin: "50px auto"}}>
                <div className="topinblock">
                    <div id="sharer">
                        <a href={`https://twitter.com/intent/tweet?url=${detailsURL}&amp;via=internetarchive&amp;text=${sharingTextUriEncoded}+%3A+${metadata.creator}+%3A+Free+Download+%26+Streaming+%3A+Internet+Archive`}
                           target="_blank">
                            <div className="sharee iconochive-twitter" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Twitter"></div>
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${detailsURL}`}
                           target="_blank">
                            <div className="sharee iconochive-facebook" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Facebook"></div>
                        </a>
                        <a href={`https://plus.google.com/share?url=${detailsURL}`}
                           target="_blank">
                            <div className="sharee iconochive-googleplus" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Google+"></div>
                        </a>
                        <a href={`http://www.reddit.com/submit?url=${detailsURL}&amp;title=${sharingTextUriEncoded}+%3A+${metadata.creator}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                           target="_blank">
                            <div className="sharee iconochive-reddit" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Reddit"></div>
                        </a>
                        <a href={`https://www.tumblr.com/share/video?embed=%3Ciframe+width%3D%22640%22+height%3D%22480%22+frameborder%3D%220%22+allowfullscreen+src%3D%22https%3A%2F%2Farchive.org%2Fembed%2F%22+webkitallowfullscreen%3D%22true%22+mozallowfullscreen%3D%22true%22%26gt%3B%26lt%3B%2Fiframe%3E&;name=${itemid}+%3A+${item.metadata.creator}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                           target="_blank">
                            <div className="sharee iconochive-tumblr" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Tumblr"></div>
                        </a>
                        <a href={`http://www.pinterest.com/pin/create/button/?url=${detailsURL}&amp;description=${sharingTextUriEncoded}+%3A+${metadata.creator}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                           target="_blank">
                            <div className="sharee iconochive-pinterest" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Pinterest"></div>
                        </a>
                        <a href={`https://archive.org/pop/editor.html?initialMedia=${detailsURL}`}
                           target="_blank">
                            <div class="sharee iconochive-popcorn" data-toggle="tooltip"
                                 data-placement="bottom" title="Share to Popcorn Maker"></div>
                        </a>
                        <a href={`mailto:?body=${detailsURL}&amp;subject=${sharingText} : ${metadata.creator} : Free Download &amp; Streaming : Internet Archive`}>
                            <div className="sharee iconochive-email" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share via email"></div>
                        </a>
                    </div>
                    <br clear="all" className="clearfix"/>
                </div>
            </div>

        );
    }
    embedWordpress() {
        // THis appeared on image and movie examples
        let item = this.item;
        let itemid = item.metadata.identifier; // Shortcut as used a lot
        return (
            <div>
                <form className="form" role="form">
                    <div className="form-group">
                        <label>EMBED (for wordpress.com hosted blogs)</label>
                        <textarea id="embedcodehereWP" className="form-control textarea-invert-readonly"
                                  rows="3" readOnly="readonly">{`[archiveorg ${itemid} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`}</textarea>
                    </div>
                </form>
            </div>
        );
    }
    embedAdvanced(type) {
        // From text, video, image
        let item = this.item;
        let itemid = item.metadata.identifier; // Shortcut as used a lot
        return(
            <div>
                Want more?
                <a href={`https://archive.org/help/${type}.php?identifier=${itemid}`}>Advanced embedding details, examples, and
                    help</a>!
            </div>
        );
    }
    embed() {
        // Same on text, video, image
        // Note this shortEmbedURL is just displayed in a form used to explain how to embed, its not actually called from dweb code.
        let shortEmbedURL = `https://archive.org/stream/${this.itemid}?ui=embed`;    //Note on archive.org/details this is different from iframeURL and not clear if that is intentional
        return(
            <div>
                <form class="form" role="form">
                    <div class="form-group">
                        <label>EMBED</label>
                        <textarea id="embedcodehere" class="form-control textarea-invert-readonly"
                                  rows="3" readonly="readonly">{`<iframe 
                                src=${shortEmbedURL}
                                width="480" height="430" frameborder="0"
                                webkitallowfullscreen="true" mozallowfullscreen="true"
                                allowfullscreen></iframe>`}</textarea>
                    </div>
                </form>
            </div>
        );
    }

    itemDetailsAboutJSX() {
        /* This builds a JSX tht sits underneth theatre-ia-wrap DIV that is built by theatreIaWrap */
        let itemid = this.itemid;
        let item = this.item;
        let metadata = item.metadata;
        let title = metadata.title;
        let creator = metadata.creator;
        let datePublished = metadata.date;
        let publisher=metadata.publisher;
        let keywords = metadata.subject ? Array.isArray(metadata.subject) ? metadata.subject : metadata.subject.split(';') : undefined ;
        let licence = metadata.licenseurl; //TODO - handle other licenses - hardwired for CC currently
        let languageAbbrev = metadata.language;
        let languageLong = {eng: "English", dut: "Dutch"}[languageAbbrev]; //TODO-other languages
        let description = this.preprocessDescription(metadata.description); // Contains HTML (supposedly safe) inserted via innerHTML thing
        let metadataListPossible = { color: "Color", coverage: "Location", director: "Director", identifier: "Identifier",
            "identifier-ark": "Identifier-ark", ocr: "Ocr", runtime: "Run time", ppi: "Ppi", sound: "Sound", year: "Year" }; /*TODO expand to longer list*/
        let metadataListFound = Object.keys(metadataListPossible).filter((k) => metadata[k]);    // List of keys in the metadata
        let downloadableFiles = this._list.filter(f => f.downloadable()); // Note on image it EXCLUDED JPEG Thumb, but included JPEG*Thumb
            //TODO  Replace "a" with onclicks to download function on f
        let filesCount = item.files_count;
        let originalFilesCount = item.files.filter((f)=>f.source === "original").length+1; // Adds in Archive Bittorrent
        let downloadURL = `https://archive.org/download/${itemid}`; //TODO-LINKS TODO-ONLINE check direct link
        let compressURL = `https://archive.org/compress/${itemid}`; // leave as direct link, else need to zip and store each item in IPFS
        let compressAllURL = `https://archive.org/compress/${itemid}/formats=JSON,METADATA,JPEG,ARCHIVE BITTORRENT,MUSICBRAINZ METADATA`;  //TODO-LINKS check direct link
        let collections = Array.isArray(metadata.collection) ? metadata.collection : [ metadata.collection ];
        let collectionTitles = item.collection_titles;   // Dictionary mapping collection itemid to title
        let mediatype = metadata.mediatype;
        let iconochiveIcon="iconochive-"+mediatype;
        let contributor = metadata.contributor;
        let reviews = item.reviews;
        let writeReviewsURL = `https://archive.org/write-review.php?identifier=${itemid}`;  //TODO need an indirect way to submit a review
        let loginURL = "https://archive.org/account/login.php"; //TODO - its a Direct link as dont support authentication in Dweb version
        let bookmarksAddURL = `https://archive.org/bookmarks.php?add_bookmark=1&amp;mediatype=image&amp;identifier=${itemid}&amp;title=${title}`; //TODO find way to submit distributed
        let credits = metadata.credits;
        //TODO-DETAILS much of below doesn't work (yet)
        return (
            <div class="container container-ia item-details-about">
                <div class="relative-row row">
                    <div class="action-buttons">
                        <div class="topinblock">
                            <a class="button " href={bookmarksAddURL} id="favorite-button" aria-haspopup="true"
                               onclick="return AJS.modal_go(this,{{favorite:1}})" data-target="#confirm-modal" data-toggle="tooltip"
                               data-container="body" data-placement="bottom" title="Favorite this item">
                                <span class="iconochive-favorite" aria-hidden="true"></span><span class="sr-only">favorite</span>
                            </a>
                        </div>
                        <div class="topinblock">
                            <button id="share-button" class="button" type="button" aria-haspopup="true"
                                    onclick="return AJS.modal_go(this,{{ignore_lnk:1,shown:AJS.embed_codes_adjust}})"
                                    data-target="#cher-modal" data-toggle="tooltip" data-container="body" data-placement="bottom"
                                    title="Share this item">
                                <span class="iconochive-share" aria-hidden="true"></span><span class="sr-only">share</span></button>
                        </div>
                        <div
                                id="flag-button-container" class="topinblock" data-toggle="tooltip" data-placement="bottom"
                                data-container="body" title="Flag this item">
                            <div class="dropup">
                                <button id="flag-button" class=" button" type="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false"><span class="iconochive-Flag" aria-hidden="true"></span><span
                                        class="sr-only">flag</span></button>
                                <div id="flag-popover" class="dropdown-menu" aria-labelledby="flag-button">
                                    <h3 class="dropdown-title">Flag this item for</h3>
                                    <ul role="menu">
                                        <li class="">
                                            <a href={loginURL} role="menuitem">
                                                Graphic Violence </a>
                                        </li>
                                        <li class="">
                                            <a href={loginURL} role="menuitem">
                                                Graphic Sexual Content </a>
                                        </li>
                                        <li class="">
                                            <a href={loginURL} role="menuitem">
                                                Spam, Scam or Fraud </a>
                                        </li>
                                        <li class="">
                                            <a href={loginURL} role="menuitem" >
                                            Broken or Empty Data                </a>
                                        </li>
                                    </ul>
                                </div> {/*-- /#flag-popover --*/}
                            </div> {/*--/.dropdown --*/}
                        </div>
                    </div>{/*--/.action-buttons--*/}
                    {/*-- flag initialization moved to browserAfter() --*/}
                    <div class="col-sm-8 thats-left item-details-metadata">
                        <h1 style={{fontSize:"30px", "marginBottom":0}}>
                            <div class="left-icon"><span className={`${iconochiveIcon} ${mediatype}`} aria-hidden="true"></span><span
                                    class="sr-only">{mediatype}</span></div>
                            <span itemprop="name">{title}</span>
                        </h1>

                        <div class="actions-ia">

                        </div>


                        <div class="key-val-big">
                            <div>
                                <span class="key">by</span>{' '}
                                <span class="value"><span><a onClick={`Nav.nav_search('creator=\"${creator}\"')`}>{creator}</a></span></span>
                            </div>
                        </div>

                        <br/>
                        <div class="key-val-big">
                            Publication date <a onClick="Nav.nav_search('date:{datePublished}')">{' '}
                            <span itemprop="datePublished">{datePublished}</span></a>
                        </div>

                        {licence ? (
                        <div class="key-val-big">
                            Usage <a rel="license" title="http://creativecommons.org/licenses/by-nc-nd/2.0/"
                                     href="http://creativecommons.org/licenses/by-nc-nd/2.0/" target="_blank">http://creativecommons.org/licenses/by-nc-nd/2.0/<img
                                class="cclic" src="./images/cc/cc.png"/><img class="cclic" src="./images/cc/by.png"/><img
                                class="cclic" src="./images/cc/nc.png"/><img class="cclic" src="./images/cc/nd.png"/></a></div>
                        ) : ( undefined ) }
                        {/*TODO-Only show if keywords non-blank*/}
                        {keywords ? (
                        <div class="key-val-big">
                            Topics <span itemprop="keywords">
                          {keywords.map((keyword)=> (
                                <a onClick={`Nav.nav_search('subject=\"${keyword}\"')`}>{keyword}</a> ))}
                      </span> {/*TODO should really have , between each but join() not easy in JSX*/}
                        </div>
                        ) : ( undefined ) }
                        { publisher ? (
                        <div><span class="key">Publisher</span>{' '}

                            <span
                                    class="value"
                            ><a onClick={`Nav.nav_search('publisher=\"${publisher}\"')`}><span
                                    itemprop="publisher">{publisher}</span></a></span>
                        </div>
                        ) : ( undefined ) }
                        {/*-- sponsor (also does usage rights, if specified for the sponsor) --*/}

                        {/*-- contributor (also does usage rights, if specified for the contributor) --*/}
                        { contributor ? ( <div><span class="key">Contributor</span>{' '}<span class="value">{contributor}</span></div> ) : ( undefined ) }
                        { languageAbbrev ? (
                            <div class="key-val-big">
                                <div>
                                    <span class="key">Language</span>{' '}

                                    <span class="value"><span><a onClick={`Nav.nav_search('language=(\"${languageAbbrev}\"+OR+language=\"${languageLong}\")')`}>{languageLong}</a></span></span>
                                </div>
                            </div>
                        ) : ( undefined ) }

                        <div class="clearfix"></div>
                        { description ? ( <div id="descript" itemprop="description" dangerouslySetInnerHTML={{__html: description}}></div> ) : ( undefined ) }

                        { credits ? ( <h2 style="font-size:18px">Credits</h2> ) : ( undefined ) }
                        { credits ? ( <p class="content">{credits}</p>        ) : ( undefined ) }

                        <div class="metadata-expandable-list" role="list">
                            { metadataListFound.map((k) =>
                                <div role="listitem">
                                    <span class="key">{metadataListPossible[k]}</span>{' '}
                                    <span class="value">{metadata[k]}</span>
                                </div>
                            ) }
                        </div>

                        {/*TODO "See also" section drawing from some of metadata.externalidentifier note two adjacent divs present
                        on mbid-b105f712-d75e-4d0a-a9c5-bf1948461e2b not in commute will need to retrieve those to do so.*/}
                        <div id="reviews">
                            <h2 style="font-size:36px;font-weight:200;border-bottom:1px solid #979797; padding-bottom:5px; margin-top:50px;">
                                <div class="pull-right" style="font-size:14px;font-weight:500;padding-top:14px;">
                                    <a class="stealth" href={writeReviewsURL}><span class="iconochive-plus-circle"
                                                                                    aria-hidden="true"></span><span class="sr-only">plus-circle</span>
                                        Add Review</a><br/>
                                </div>
                                <div class="left-icon" style="margin-top:3px"><span class="iconochive-comment"
                                                                                    aria-hidden="true"></span><span class="sr-only">comment</span>
                                </div>
                                Reviews
                            </h2>
                            { reviews && reviews.length ? reviews.map((review) => (
                                <div class="aReview">
                                    <b>Reviewer:</b>{' '}
                                    <a onClick={`Nav.nav_details('@${review.reviewer}')`}
                                       data-event-click-tracking="ItemReviews|ReviewerLink">{review.reviewer}</a>
                                    -
                                    <span alt={`${review.stars} out of 5 stars`} title={`${review.stars} out of 5 stars`}>
                                        { ['*','*','*','*','*'].slice(0,review.stars).map(x =>
                                            <span class="iconochive-favorite size-75-percent" aria-hidden="true"></span> , <span class="sr-only">favorite</span>
                                        ) }
                                    </span>
                                    - {review.reviewdate}{/*TODO reviewdate needs pretty printing*/}<br/>
                                    <b>Subject:</b>{' '}{review.reviewtitle}
                                    <div class="breaker-breaker">{review.reviewbody}</div>
                                </div>
                            )) : (
                                <div class="small-label">
                                    There are no reviews yet. Be the first one to <a href={writeReviewsURL}>write a review</a>.
                                </div>
                            )}
                        </div>

                    </div>{/*--/.col-md-10--*/}
                    <div class="col-sm-4 thats-right item-details-archive-info">
                        {/*TODO need section class=boxy item-stats-summary- not obvious where data from, its not in metadata */}
                        <div class="boxy quick-down">
                            <div class="download-button">DOWNLOAD OPTIONS</div>
                            {downloadableFiles.map((f) => (
                                <div class="format-group">
                                    <div class="summary-rite">
                                        <a class="stealth" source={f} onclick="Nav.nav_download(this)"
                                           title={f.sizePretty()}>
                                            <span class="hover-badge-stealth"><span class="iconochive-download" aria-hidden="true"></span><span class="sr-only">download</span>1 file</span>
                                        </a>
                                    </div>
                                    <a class="format-summary download-pill"
                                        source={f}
                                        onclick="Nav.nav_download(this)"
                                        title={f.sizePretty()}
                                        data-toggle="tooltip" data-placement="auto left" data-container="body" target="_blank">{/*--new window to persist dweb--*/}
                                        {Util.downloadableFormats[f.metadata.format]} <span class="iconochive-download" aria-hidden="true"></span><span class="sr-only">download</span>
                                    </a>
                                </div>
                            ))}
            
            
                            <div class="show-all">
                                <div class="pull-right">
                                    <a class="boxy-ttl hover-badge" href={compressURL}><span class="iconochive-download"
                                                                                             aria-hidden="true"></span><span
                                            class="sr-only">download</span> {filesCount} Files</a><br/>
                                    <a class="boxy-ttl hover-badge" href={compressAllURL}><span class="iconochive-download"
                                                                                                aria-hidden="true"></span><span
                                            class="sr-only">download</span> {originalFilesCount} Original</a><br/>
                                </div>
                                <a class="boxy-ttl" href={downloadURL}>SHOW ALL</a>
                                <br clear="all" class="clearfix"/>
                            </div>
                        </div>
            
                        <div class="boxy collection-list">
                            <section class="quick-down collection-list">
                                <h5 class="collection-title">IN COLLECTIONS</h5>
                                { collections.map((collection) => (
                                    <div class="collection-item">
                                        <a
                                                onClick={`Nav.nav_details("${collection}")`}
                                                data-event-click-tracking={`CollectionList|${collection}`}
                                        >{collectionTitles[collection]}</a>
                                    </div>
                                ) ) }
                            </section>
                        </div>
                        {/*TODO need boxy item-upload-info - its not obvious, on commute its the adder field, on mbid its derivation
                        of uploader which is email, on text its ___ */}
                    </div>{/*--/.col-md-2--*/}
                </div>{/*--/.row--*/}
            {/*--//.container-ia--*/} </div>
        );
    }

    alsoFoundJSX() {
        //TODO-DETAILS this needs implementing, but its another API call - it goes beneath itemDetailsAboutJSX
    }
}
