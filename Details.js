
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

import RelatedItemsWrapper from './components/RelatedItemsWrapper';
import DetailsAboutWrapper from './components/DetailsAboutWrapper';
import ArchiveBase from './ArchiveBase';
import AnchorDetails from './components/AnchorDetailsFake'; // Have to use the Fake one as long as this is FakeReact
import {DetailsActionButtons, DetailsDownloadOptions, DetailsReviews, DetailsMetadata, DetailsAbout} from '@internetarchive/ia-components/dweb-index.js';
import {AJS_on_dom_loaded} from "./Util";
import {NavWrapWrapper} from './components/NavWrapWrapper';

export default class Details extends ArchiveBase {
    constructor({itemid = undefined, metaapi = undefined, noCache=false}={}) {
        super({itemid, metaapi});
        this.noCache = noCache;
    }

    render(res) { // See other (almost) DUPLICATEDCODE#001
        var els = this.wrap();    // Build the els
        // Other DUPLICATEDCODE#001 do `$('body').addClass('bgEEE')` here
        React.domrender(els, res);  //Put the els into the page
        this.browserAfter();
    }

    // See almost identical DUPLICATEDCODE#004
    wrap() {
        /* Wrap the content up
        context: body wrap(
        content: (on image)  wrap( TODO-DONATEBANNER | nav-wrap | maincontent | theatre-ia-wrap | item-details-about | TODO-ACTIONBUTTONS | RelatedItems  | TODO-ANALYTICS )
        returns: elements tree suitable for adding into another render
         */
        return (
            <div id="wrap" itemscope itemtype={this.itemtype}>
                {/* Missing donate-banner and scripts & css before it */}
                <NavWrapWrapper item={this}/>
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {this.theatreIaWrap()} {/*This is the main-content*/}
                {(!this.itemid) ? null :
                  <DetailsAboutWrapper metadata={this.metadata} files={this.files} files_count={this.files_count}
                                       collection_titles={this.collection_titles} description={this.preprocessDescription(this.metadata.description)}/> }
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
            $(window).on('resize  orientationchange', function(evt){ //TODO-JQUERY remove dependency window.on probably works fine
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

    useBookReader() {
        // True if should use the BookReader, otherwise its images
        return true; //TODO-BOOK2 check for pdf and abby
    }
}
