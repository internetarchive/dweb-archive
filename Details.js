
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

import ArchiveBase from './ArchiveBase';
import {AJS_on_dom_loaded} from "./Util";
import {DetailsWork} from './components/DetailsPage';
import IAFakeReactComponent from './components/IAFakeReactComponent';


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
    wrap() { //TODO note cannot merge this into render until DetailsError has its own .render()
        /* Wrap the content up
        context: body wrap(
        content: (on image)  wrap( TODO-DONATEBANNER | nav-wrap | maincontent | theatre-ia-wrap | item-details-about | TODO-ACTIONBUTTONS | RelatedItems  | TODO-ANALYTICS )
        returns: elements tree suitable for adding into another render
         */

      return (
        <span>
        <DetailsWork
          item={this}
          metadata={this.metadata}
          files={this.files}
          identifier={this.itemid}
          subtype={this.metadata && (["texts"].includes(this.metadata.mediatype)) ? this.subtype() : undefined}
          poster={(this.metadata && ["movies"].includes(this.metadata.mediatype))
                   ? this.videoThumbnailFile().httpUrl()
                   : (["audio", "etree"].includes(this.metadata.mediatype))
                   ? this.thumbnailFile()
                   : undefined }
          source={this.metadata && ["image"].includes(this.metadata.mediatype) ?  this.playableFile("image") : undefined}
          files_count={this.files_count}
          reviews={this.reviews}
          collection_titles={this.collection_titles}
          description={this.metadata ? this.preprocessDescription(this.metadata.description) : undefined}
          page={this.page}
          noCache={this.noCache}
          playlist={this.playlist}
        />
        </span>
        );
    }


    archive_setup_push() { //TODO merge this into the archive_setup_push inside <DetailsWork> or something it loads
      if (this.metadata && ["image"].includes(this.metadata.mediatype)) archive_setup.push(function() {
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
      if (this.metadata && ["texts"].includes(this.metadata.mediatype)) archive_setup.push(function() {
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
