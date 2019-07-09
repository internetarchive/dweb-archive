
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

export default class Details extends ArchiveBase {
    constructor({itemid = undefined, metaapi = undefined, noCache=false}={}) {
        super({itemid, metaapi});
        this.noCache = noCache;
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
        return (
            <div id="wrap" itemscope itemtype={this.itemtype}>
                {/* Missing donate-banner and scripts & css before it */}
                <NavWrapWrapper item={this}/>
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {this.theatreIaWrap()} {/*This is the main-content*/}
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
        archive_setup.push(function(){  // This is common to Text, AV and image - though some have stuff before this and some a
            AJS.tilebars(); // page load
            $(window).on('resize  orientationchange', function(unusedEvt){ //TODO-JQUERY remove dependency window.on probably works fine
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

    theatreIaWrap() {
        // This is a combo wrap that handles multiple mediatypes

      // Some shortcuts - apply in texts and image cases at least
      const identifier = this.itemid;
      const metadata = this.metadata;
      //TODO-DETAILS-DWEB use alternative URLS via Dweb for some of the URLs in here
      const detailsURL = `https://archive.org/details/${identifier}`;  // Probably correct as archive.org/details since used as itemProp
      const viewStrategy = (["texts"].includes(metadata.mediatype)) ? this.subtype() : undefined;
      if (viewStrategy === "carousel") {
        archive_setup.push(function () {
          AJS.theatresize();
          AJS.carouselsize('#ia-carousel', true);
        });
      }
      //TODO video at momemtn only plays first in playlist which is usually, but not always correct - need an example of multi-video item
      if ((!this.isDark) && ['audio', 'etree', 'movies'].includes(this.metadata.mediatype))
        this.setPlaylist();
      const playing = (["movies"].includes(metadata.mediatype)) ? this.playlist[0] : undefined;
      const source = (["movies"].includes(metadata.mediatype)) ? playing.sources[0] : undefined;
      const mainArchiveFile = ["image"].includes(metadata.mediatype)
        ? this.playableFile("image") // Can be undefined if none included
        : undefined;
      const cfg =   (!["movies"].includes(metadata.mediatype)) ? undefined : // Cant find this used anywhere, maybe it was part of jwPlayer
        {"start":0,"embed":null,"so":false,"autoplay":false,"width":0,"height":0,"list_height":0,"audio":false,
        "responsive":true,"flash":false, "hide_list":true,
        "identifier": this.itemid,
        "collection": this.metadata.collection[0],
      };

      return (

          <div id="theatre-ia-wrap" className="container container-ia width-max"
             style={["image"].includes(metadata.mediatype) ? {height: "600px"} : undefined}
             resized={["image"].includes(metadata.mediatype)}
             >
          <link itemProp="url" href={detailsURL}/>
          {/* - TODO unclear why image & text|audio mediatypes use different itemprop below check current archive.org pages*/}
          <link itemProp={["image","movies"].includes(metadata.mediatype) ? "thumbnailUrl" : "image"}
            href="https://archive.org/services/img/{identifier}"/>{/*OK for direct link since itemprop*/}

          { (this.playlist && ["audio","etree"].includes(this.metadata.mediatype)) // this.isDark wont have a playlist
            ?
              this.playlist.map((track,i) => ( // OK to be absolute or dweb link
                <div key={i} itemprop="hasPart" itemscope itemtype="http://schema.org/AudioObject">
                  <meta itemprop="name" content={track.title}/>
                  <meta itemprop="duration" content={`PT0M${parseInt(track.duration)}S`}/>
                  {   // Loop over the sources which can be multiple files for the same track.  Note this is limited to playable sources, could add unplayable to playlist if want as separate field e.g. unplayablesources
                    track.sources.map((f,i) => (
                      <link key={i} itemprop="associatedMedia" href={`https://archive.org/download/${identifier}/${f.name}`}/>
                    ))
                  }
                </div>
              ))
            :
              this.files.filter((af)=> af.metadata.source !== "metadata")
                .map((af) => ( //OK for direct link since itemprop
                  <link itemProp="associatedMedia" href={`https://archive.org/download/${identifier}/${af.metadata.name}`} key={`${identifier}/${af.metadata.name}`}/>
              ))
          }
          { !["movies"].includes(metadata.mediatype) ? null :
            <>
            <link itemProp="contentUrl" href={`${gatewayServer()}${gateway.urlDownload}/${identifier}/${source.name}`}/>
            <link itemProp="embedUrl" href={`${gatewayServer()}${gateway.urlDownload}/${identifier}/${playing.orig}`}/>
            <meta itemProp="duration" content={`PT0M${parseInt(playing.duration)}S`}/>
            </>
          }


          <h1 class="sr-only">{metadata.title}</h1>
          <h2 className="sr-only">{metadata.mediatype} preview</h2>
          { (["texts"].includes(metadata.mediatype) && (viewStrategy === "carousel") )
            ?
              <CarouselTheatre
                identifier={identifier}
                slides={this.files4carousel().map(f => ({filename: f.metadata.name, source: f}))}
                creator={metadata.creator}
                mediatype={metadata.mediatype}
                title={metadata.title}
              />
            : (["texts"].includes(metadata.mediatype) && (viewStrategy === "bookreader"))
            ? <BookReaderTheatre
                identifier={identifier}
                item={this}
                creator={metadata.creator}
                mediatype={metadata.mediatype}
                title={metadata.title}
                page={this.page}
              />
            : (["image"].includes(metadata.mediatype) && mainArchiveFile)
            ?
              <ImageMainTheatre
                alt="item image #1"
                source={mainArchiveFile}
                caption={mainArchiveFile.metadata.name}
                identifier={identifier}
                mediatype={metadata.mediatype}
                creator={metadata.creator}
                title={metadata.title}/>
            : (["audio","etree"].includes(metadata.mediatype))
            ?
                <AudioTheatre
                  identifier={identifier}
                  mediatype={this.metadata.mediatype} creator={this.metadata.creator} title={this.metadata.title}
                  imgsrc={this.thumbnailFile()}
                  playlist={this.playlist}
                  initialPlay={1}
                />
            : (["movies"].includes(metadata.mediatype))
            ? /* The 'poster' is intentionally a direct Http link as its intended only for search engines etc
                 Preference is 2nd thumbnail (first is usually black-sreen) in .thumbs/ directory (e.g. for "commute");
                 if only one (e.g. item 'stairs') use that. */
                  <VideoTheatre identifier={identifier} mediatype={metadata.mediatype} poster={this.videoThumbnailFile().httpUrl()}
                    title={metadata.title} creator={metadata.creator} source={source.urls} />
            :
              <MessageTheatre title="There Is No Preview Available For This Item">
                <p>
                  This item does not appear to have any files that can be experienced on Archive.org
                  <br/><span className="hidden-xs hidden-sm">Please download files in this item to interact with them on your computer.</span><br/>
                  {/* Should be link to DownloadDirectory */}
                  <a className="show-all" href={`https://archive.org/download/${identifier}`} target="_blank">Show all files</a>
                </p>
              </MessageTheatre>
           }
          <div id="flag-overlay" class="center-area "> </div>
        </div>
      )
    }
}
