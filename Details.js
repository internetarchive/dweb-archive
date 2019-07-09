
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
import {AJS_on_dom_loaded} from "./Util";
import {NavWrapWrapper} from './components/NavWrapWrapper';
import { BookReaderTheatre, CarouselTheatre, MessageTheatre, AudioTheatre, VideoTheatre } from "./components/Theatres";
import {ImageMainTheatre} from "@internetarchive/ia-components/dweb-index";
import {gateway, gatewayServer} from "@internetarchive/dweb-archivecontroller/Util";
import {DetailsIAWrap} from './components/DetailsPage';

export default class Details extends ArchiveBase {
    constructor({itemid = undefined, metaapi = undefined, page=undefined, noCache=false}={}) {
        super({itemid, metaapi});
        this.noCache = noCache;
        this.page = page; // Only defined for mediatype=texts
        this.state = {}; // This will be automatic when moves to React
    }

    render(res) { // See other (almost) DUPLICATEDCODE#001
        const els = this.wrap();    // Build the els
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
      const mediatype2Schema = {
        audio: "AudioObject",
        etree: "AudioObject",
        image: "VisualArtwork",
        movies: "VideoObject",
        texts: "TextDigitalDocument"
      }

      return (
            <div id="wrap" itemscope itemtype={"http://schema.org/"+mediatype2Schema[this.metadata.mediatype]}>
                {/* Missing donate-banner and scripts & css before it */}
                <NavWrapWrapper item={this}/>
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {/*This is the main-content*/}
                <DetailsIAWrap
                  identifier={this.itemid} creator={this.metadata.creator} name={this.metadata.name}
                  item={this}
                  title={this.metadata.title} mediatype={this.metadata.mediatype}
                  poster={(["movies"].includes(this.metadata.mediatype))
                    ? this.videoThumbnailFile().httpUrl()
                    : (["audio", "etree"].includes(this.metadata.mediatype))
                    ? this.thumbnailFile()
                    : undefined }
                  subtype={(["texts"].includes(this.metadata.mediatype)) ? this.subtype() : undefined}
                  playlist={this.playlist}
                  source={["image"].includes(this.metadata.mediatype) ?  this.playableFile("image") : undefined}
                  files={this.files}
                  page={this.page}
                />
                {(!this.itemid) ? null : // TODO-GREY DetailsAboutWrapper wants browser2archive which is calculated in NavWrapWrapper, when both in same react can do better
                  <DetailsAboutWrapper metadata={this.metadata} files={this.files} files_count={this.files_count}
                                       collection_titles={this.collection_titles}
                                       reviews={this.reviews}
                                       description={this.preprocessDescription(this.metadata.description)}
                                       browser2archive={true} /> }
                {(!this.itemid) ? null :
                    <RelatedItemsWrapper identifier={this.itemid} item={this} noCache={this.noCache} /> }
                {/* should have: analytics here (look at end of commute.html) - but not on Directory (and maybe some other types ?collection?)*/}
                }
            {/*--wrap--*/}</div>
        );
    }


    archive_setup_push() {
      if (["image"].includes(this.metadata.mediatype)) archive_setup.push(function() {
        AJS.theatresize();
        AJS.carouselsize('#ia-carousel', true);
      })
      archive_setup.push(function(){  // This is common to Text, AV and image - though some have stuff before this and some a
            AJS.tilebars(); // page load
            $(window).on('resize  orientationchange', function(unusedEvt){ //TODO-JQUERY remove dependency window.on probably works fine
                clearTimeout(AJS.also_found_throttler);
                AJS.also_found_throttler = setTimeout(AJS.tilebars, 250)
            });
        });
      if (["texts"].includes(this.metadata.mediatype)) archive_setup.push(function() {
        AJS.booksize();
      })
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
        this.archive_setup_push();
        AJS_on_dom_loaded(); // Runs code pushed archive_setup - needed for image if "super" this, put it after superclasses
    }
}
