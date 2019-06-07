
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

import {languageMapping} from '@internetarchive/dweb-archivecontroller/Util';
import {DetailsActionButtons, DetailsDownloadOptions} from "@internetarchive/ia-components/index.js";
import RelatedItemsWrapper from './components/RelatedItemsWrapper';
import DetailsCollectionListWrapper from './components/DetailsCollectionListWrapper';
import ArchiveBase from './ArchiveBase';
import AnchorDetails from './components/AnchorDetailsFake'; // Have to use the Fake one as long as this is FakeReact
import {NavWrap} from '@internetarchive/ia-components/index.js';
import {AJS_on_dom_loaded} from "./Util";

export default class Details extends ArchiveBase {
    constructor({itemid = undefined, metaapi = undefined, noCache=false}={}) {
        super({itemid, metaapi});
        this.noCache = noCache;
    }

    render(res) { // See other (almost) DUPLICATEDCODE#001
        var els = this.wrap();    // Build the els
        // Other DUPLOCATEDCODE#001 do `$('body').addClass('bgEEE')` here
        React.domrender(els, res);  //Put the els into the page
        this.browserAfter();
    }
    wrap() {
        /* Wrap the content up
        context: body wrap(
        content: (on image)  wrap( TODO-DONATEBANNER | nav-wrap | maincontent | theatre-ia-wrap | item-details-about | TODO-ACTIONBUTTONS | RelatedItems  | TODO-ANALYTICS )
        returns: elements tree suitable for adding into another render
         */
        return (
            <div id="wrap" itemscope itemtype={this.itemtype}>
                {/* Missing donate-banner and scripts & css before it */}
                <NavWrap item={this}/>
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {this.theatreIaWrap()} {/*This is the main-content*/}
                {(!this.itemid) ? null :
                  this.itemDetailsAboutJSX() }
                {(!this.itemid) ? null :
                    <RelatedItemsWrapper identifier={this.itemid} item={this} noCache={this.noCache} /> }
                {/* should have: analytics here (look at end of commute.html) - but not on Directory (and maybe some other types ?collection?)*/}
                }
            {/*--wrap--*/}</div>
        );
    }


    archive_setup_push() {
        archive_setup.push(function(){  // This is common to Text, AV and image - though some have stuff before this and some a
            AJS.tilebars(); // page load
            $(window).on('resize  orientationchange', function(evt){
                clearTimeout(AJS.also_found_throttler);
                AJS.also_found_throttler = setTimeout(AJS.tilebars, 250)
            });
        });
    }
    browserAfter() {
        // initialize_flag
        // overlay related but might never be used as dont see toggle-flag-overlay appearing anywhere but might be used in archive.js
        $(".toggle-flag-overlay").click(function (e) {
            e.preventDefault();
            $("#theatre-ia-wrap").removeClass("flagged");
        });
        // overlay - checkboxes - this may never get used as I cant find any flag-checkboxes or my-checkbox in any sample HTML files
        $("#flag-checkboxes a").on("click", function (e) {
            e.preventDefault();
            $(this).children(".my-checkbox").toggleClass("checked");
            $.get($(this).attr("href"))
        });
        this.archive_setup_push(); // Subclassed function to setup stuff for after loading.
        AJS_on_dom_loaded(); // Runs code pushed archive_setup - needed for image if "super" this, put it after superclasses
    }

    embedWordpress() {
        // THis appeared on image and movie examples
        const metadata = this.metadata;
        const itemid = metadata.identifier; // Shortcut as used a lot
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
        const metadata = this.metadata;
        const itemid = metadata.identifier; // Shortcut as used a lot
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
        const shortEmbedURL = `https://archive.org/stream/${this.itemid}?ui=embed`;    //Note on archive.org/details this is different from iframeURL and not clear if that is intentional
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
        const itemid = this.itemid;
        const metadata = this.metadata;
        const title = metadata.title;
        const creator = (metadata.creator || []).join(',');
        const queryCreator=(metadata.creator || []).map(c => `creator:"${c}"`).join(' OR ');
        const queryCreatorEnc= encodeURIComponent(queryCreator);
        const datePublished = metadata.date;
        const publishers=metadata.publisher || [];
        const keywords = metadata.subject;
        // noinspection JSUnresolvedVariable
        const licence = metadata.licenseurl; //TODO - handle other licenses - hardwired for CC currently
        const languages = metadata.language || [];
        const queryLanguage=languages.map(l => `language:${l} OR language:"{languageMapping[l]"`).join(' OR ');
        const queryLanguageEnc= encodeURIComponent(queryLanguage);
        const languageLong = languages.map(l => languageMapping[l]).join(',');
        const description = this.preprocessDescription(metadata.description); // Contains HTML (supposedly safe) inserted via innerHTML thing
        const metadataListKeyStrings = {ocr: "OCR", runtime: "Run time", ppi: "PPI"}; /*Metadata with something other than capitalize first letter*/
        const metadataListExclude = [
            // This list has metadata that should not be listed in a table because it is handled in some other way
            //"added-date", "adder",          // TODO see note below about "adder" and uncomment here when box added
            "backup_location", "collection", "creator", "credits", "curation", "date", "description", "licenseurl", "magnetlink", "mediatype",
            "public", "publicdate", "publisher", "subject", "thumbnaillinks", "title", "updatedate", "updater", "uploader",
        ];

        const metadataListFound = Object.keys(metadata)
            .filter( (k) => (!metadataListExclude.includes(k)) && metadata[k] && metadata[k].length);   // List of keys in the metadata that are not empty strings or empty arrays



            //TODO  Replace "a" with onclicks to download function on f
        // noinspection JSUnresolvedVariable
        const collections = metadata.collection; // [str*]
        // noinspection JSUnresolvedVariable
        const collectionTitles = this.collection_titles;   // Dictionary mapping collection itemid to title
        const mediatype = metadata.mediatype;
        const iconochiveIcon="iconochive-"+mediatype; //obscure mediatypes are supported
        // noinspection JSUnresolvedVariable
        const contributors = metadata.contributor || [].join(', ');
        // noinspection JSUnresolvedVariable
        const reviews = this.reviews;
        const writeReviewsURL = `https://archive.org/write-review.php?identifier=${itemid}`;  //TODO need an indirect way to submit a review
        // noinspection JSUnresolvedVariable
        const credits = (metadata.credits || []).join(', ');
        //TODO-DETAILS much of below doesn't work (yet)
        //TODO-DETAILS note the structure of this has changed - see the difference in originals between multitrackaudio and mbid for example
        return (
            <div class="container container-ia item-details-about">
                <div class="relative-row row">
                    <div class="thats-right" style="text-align:right;">
                        <DetailsActionButtons identifier={itemid} title={metadata.title}/>
                    </div>
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
                                <span class="value"><span><a href={`/search.php?query=%28${queryCreatorEnc}%29`} onclick={Nav.onclick_search({query: {creator: queryCreator}})}>{creator}</a></span></span>
                            </div>
                        </div>

                        <br/>
                        <div class="key-val-big">
                            Publication date <a href={`/search.php?query=date%3A{datePublished}`} onclick={Nav.onclick_search({query: {date: datePublished}})}>{' '}
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
                                <a href={`/search.php?query=subject%3A%22${keyword}%22`} onclick={Nav.onclick_search({query: {subject: keyword}})}>{keyword}</a> ))}
                      </span> {/*TODO should really have , between each but join() not easy in JSX*/}
                        </div>
                        ) : ( undefined ) }
                        { publishers.length ? (
                        <div><span class="key">Publisher</span>{' '}

                            <span
                                    class="value"
                            ><a href={`/search.php?query=publisher%3A%22${publishers.join("%22%20OR%20%22")}%22`} onclick={Nav.onclick_search({query: {publisher: publishers.join("%22%20OR%20%22")}})}><span
                                    itemprop="publisher">{publishers.join(', ')}</span></a></span>
                        </div>
                        ) : ( undefined ) }
                        {/*-- sponsor (also does usage rights, if specified for the sponsor) --*/}

                        {/*-- contributors (also does usage rights, if specified for the contributors) --*/}
                        { contributors ? ( <div><span class="key">Contributor</span>{' '}<span class="value">{contributors}</span></div> ) : ( undefined ) }
                        { queryLanguage ? (
                            <div class="key-val-big">
                                <div>
                                    <span class="key">Language</span>{' '}

                                    <span class="value"><span><a href={`/search.php?query=%28${queryLanguageEnc}%29`}
                                        onclick={Nav.onclick_search({query: `(${queryLanguage})`})}>{languageLong}</a></span></span>
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
                                    <span class="key">{metadataListKeyStrings[k] || (k.charAt(0).toUpperCase() + k.substr(1))}</span>{' '}
                                    <span class="value">{metadata[k]}</span>
                                </div>
                            ) }
                        </div>

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
                                    <AnchorDetails identifier={`@${review.reviewer}`} data-event-click-tracking="ItemReviews|ReviewerLink">{review.reviewer}</AnchorDetails>
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
                        <DetailsDownloadOptions identifier={itemid} files={this.files} files_count={this.files_count}/>
                        <DetailsCollectionListWrapper collections={collections} collectionTitles={collectionTitles}/>
                        {/* <DetailsUploaderBox identifier={} name={} date={}> see https://github.com/internetarchive/dweb-archive/issues/24 */}
                    </div>{/*--/.col-md-2--*/}
                </div>{/*--/.row--*/}
            {/*--//.container-ia--*/} </div>
        );
    }

    useBookReader() {
        // True if should use the BookReader, otherwise its images
        return true; //TODO-BOOK2 check for pdf and abby
    }
}
