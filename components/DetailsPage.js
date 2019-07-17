import React from 'react';
import IAReactComponent from './IAReactComponent';
import {gateway, gatewayServer, ObjectMap} from "@internetarchive/dweb-archivecontroller/Util";
import {AudioTheatre, BookReaderTheatre, CarouselTheatre, ImageTheatre, MessageTheatre, VideoTheatre} from "./Theatres";
import {transportStatusAndProps} from "../ReactSupport";
import {NavWrap, DetailsAbout} from "@internetarchive/ia-components/dweb-index.js";
import RelatedItemsWrapper from './RelatedItemsWrapper';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember";
/**
 * A set of components that make up the Details Page
 * TODO - migrating stuff here from Details.js
 *
 * <DetailsIAWrap
 *  identifier, mediatype, name, title, creator     Fields form Metadata API
 *  item=ARCHIVEITEM  // Currently Needed if its a bookreader,
 *  poster=URL    // Poster for videos, mostly for search engines
 *  playlist={...} // As stored in item from playlist API
 *  files=
 *  page=
 * />
 */

const mediatype2Schema = {
  audio: "AudioObject",
  etree: "AudioObject",
  image: "VisualArtwork",
  movies: "VideoObject",
  texts: "TextDigitalDocument"
}

class DetailsIAWrap extends IAReactComponent {
  render() {
      // This is a combo wrap that handles multiple mediatypes

      if (this.props.subtype === "carousel") { //TODO merge with other archive_setup_push
        archive_setup.push(function () {
          AJS.theatresize();
          AJS.carouselsize('#ia-carousel', true);
        });
      }
      //TODO video at moment only plays first in playlist which is usually, but not always correct - need an example of multi-video item
      return (

        /*React doesnt like this - says resized isnt boolean// resized={["image"].includes(this.props.mediatype)} */
        <div id="theatre-ia-wrap" className="container container-ia width-max"
             style={["image"].includes(this.props.mediatype) ? {height: "600px"} : undefined} >
          <link itemProp="url" href={`https://archive.org/details/${this.props.identifier}`}/> {/*Probably correct as archive.org/details since itemProp*/}
          {/* - TODO unclear why image & text|audio mediatypes use different itemprop below check current archive.org pages*/}
          <link itemProp={["image","movies"].includes(this.props.mediatype) ? "thumbnailUrl" : "image"}
                href="https://archive.org/services/img/{this.props.identifier}"/>{/*OK for direct link since itemprop*/}

          { (this.props.playlist && ["audio","etree"].includes(this.props.mediatype)) // isDark wont have a playlist
            ?
            this.props.playlist.map((track,i) => ( // OK to be absolute or dweb link
              <div key={i} itemprop="hasPart" itemscope itemtype="http://schema.org/AudioObject">
                <meta itemprop="name" content={track.title}/>
                <meta itemprop="duration" content={`PT0M${parseInt(track.duration)}S`}/>
                {   // Loop over the sources which can be multiple files for the same track.  Note this is limited to playable sources, could add unplayable to playlist if want as separate field e.g. unplayablesources
                  track.sources.map((f,i) => (
                    <link key={i} itemprop="associatedMedia" href={`https://archive.org/download/${this.props.identifier}/${f.name}`}/>
                  ))
                }
              </div>
            ))
            :
            this.props.files.filter((af)=> af.metadata.source !== "metadata")
              .map((af) => ( //OK for direct link since itemprop
                <link itemProp="associatedMedia" href={`https://archive.org/download/${this.props.identifier}/${af.metadata.name}`} key={`${this.props.identifier}/${af.metadata.name}`}/>
              ))
          }
          { !["movies"].includes(this.props.mediatype) ? null :
            <>
              <link itemProp="contentUrl" href={`${gatewayServer()}${gateway.urlDownload}/${this.props.identifier}/${this.props.playlist[0].sources[0].name}`}/>
              <link itemProp="embedUrl" href={`${gatewayServer()}${gateway.urlDownload}/${this.props.identifier}/${this.props.playlist[0].orig}`}/>
              <meta itemProp="duration" content={`PT0M${parseInt(this.props.playlist[0].duration)}S`}/>
            </>
          }


          <h1 className="sr-only">{this.props.title}</h1>
          <h2 className="sr-only">{this.props.mediatype} preview</h2>
          { (["texts"].includes(this.props.mediatype) && (this.props.subtype === "carousel") )
            ?
            <CarouselTheatre
              identifier={this.props.identifier}
              slides={this.props.files4carousel().map(f => ({filename: f.metadata.name, source: f}))}
              creator={this.props.creator}
              mediatype={this.props.mediatype}
              title={this.props.title}
              disconnected={this.props.disconnected}
            />
            : (["texts"].includes(this.props.mediatype) && (this.props.subtype === "bookreader"))
            ? <BookReaderTheatre
              identifier={this.props.identifier}
              item={this.props.item}
              creator={this.props.creator}
              mediatype={this.props.mediatype}
              title={this.props.title}
              page={this.props.page}
            />
            : (["image"].includes(this.props.mediatype) && this.props.source)
            ?
            <ImageTheatre
              alt="item image #1"
              source={this.props.source}
              caption={this.props.source.metadata.name}
              identifier={this.props.identifier}
              mediatype={this.props.mediatype}
              creator={this.props.creator}
              title={this.props.title}
              disconnected={this.props.disconnected}/>
            : (["audio","etree"].includes(this.props.mediatype))
            ?
            <AudioTheatre
              identifier={this.props.identifier}
              mediatype={this.props.mediatype} creator={this.props.creator} title={this.props.title}
              imgsrc={this.props.poster}
              playlist={this.props.playlist}
              initialPlay={1}
            />
            : (["movies"].includes(this.props.mediatype))
            ? /* The 'poster' is intentionally a direct Http link as its intended only for search engines etc
                Preference is 2nd thumbnail (first is usually black-sreen) in .thumbs/ directory (e.g. for "commute");
                if only one (e.g. item 'stairs') use that. */
            <VideoTheatre identifier={this.props.identifier} mediatype={this.props.mediatype} poster={this.props.poster}
                          title={this.props.title} creator={this.props.creator} source={this.props.playlist[0].sources[0].urls} />
            :
            <MessageTheatre title="There Is No Preview Available For This Item">
              <p>
                This item does not appear to have any files that can be experienced on Archive.org
                <br/><span className="hidden-xs hidden-sm">Please download files in this item to interact with them on your computer.</span><br/>
                {/* Should be link to DownloadDirectory */}
                <a className="show-all" href={`https://archive.org/download/${this.props.identifier}`} target="_blank">Show all files</a>
              </p>
            </MessageTheatre>
          }
          <div id="flag-overlay" className="center-area"> </div>
        </div>
  ); }
}

class DetailsWork extends IAReactComponent {
  /**
   *  This is a working class for Details as its moved slowly into react.
   *  TODO - obsolete this as it becomes <Details> 
   *  <DetailsWork
   *    identifier=IDENTIFIER
   *    item=ARCHIVEFILE optional if not on Dweb
   *    metadata= METADATA API ".metadata", munged to enforce contracts (i.e. .
   *    files=[ArchiveFile] or [ METADATA API .files ]
   *    subtype = STRING - result of this.subtype(), "carousel","bookreader" supported (mediatype:texts only)
   *    poster=URL of image  (mediatype:movies,audio,etree only)
   *    source=ArchiveFile (mediatype:image only)
   *    files_count=INT (from metadata API)
   *    reviews={} reviews section of metadata API
   *    collection_titles=DICT mapping collection to title.
   *    description=SANITIZED HTML from metadata.description
   *    page=INT (mediatype:texts only)
   *    playlist={}  Result of playlist call (/embed/IDENTIFIER?output=json)
   *    noCache=BOOL if shouldnt use disk cache when reading (only used for Related Items TODO check if used from here down)
   *    disconnected=BOOL true if browser cant see archive.org (or dweb.archive.org)
   *    
   */

   constructor(props) {
    super(props); //  item
    // TODO-DWEBNAV need to tell Transports to set this status when changes
    this.state.expansionTried = false;
    // Find out what the status is, it informs the UI in several places especially disabling functions when offline
    transportStatusAndProps((err, res)=> { // { transportStatuses, mirror2gateway, disconnected, directories }
      if (!err) {
        this.setState(res); // Cause a rerender of Navbar and possible grey in/out UI
      }
    })
    // Note this was in DetailsAboutWrapper.loadable, but cant see why it shouldnt be in constructor
    // expand a list of collections into a list of titles either through collection_titles if supplied (e.g. from dweb gateway) or via a new Search query
    const {collection} = this.props.metadata;
    this.state.collection_titles = (typeof this.props.collection_titles === 'undefined') ? {} : this.props.collection_titles;
    if (!this.state.expansionTried) {
      // Note Aaron said - 2019-07-12 that should fix it so collection0title provided with metadata which may eliminate need for this
      this.state.expansionTried = true;
      ArchiveMember.expand(collection.filter(k => !this.state.collection_titles[k]), (err, res) => { // res = { id: AS(id) }
        const collection_titles = Object.assign({}, this.state.collection_titles, ObjectMap(res, (k, v) => [k, v.title]));
        this.setState({ collection_titles }); // Cause a rerender
      });
    }
  }

  render() { return (
            <div id="wrap" itemscope itemtype={"http://schema.org/"+mediatype2Schema[this.props.metadata.mediatype]}>
                {/* Missing donate-banner and scripts & css before it */}
                <NavWrap item={this.props.item}
                         transportStatuses={this.state.transportStatuses}
                         mirror2gateway={this.state.mirror2gateway}
                         disconnected={this.state.disconnected}
                         directories={this.state.directories}
                         canSave={this.props.canSave}/>
                {/*--Begin page content --*/}
                <div className="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {/*This is the main-content*/}
                <DetailsIAWrap
                  identifier={this.props.identifier}
                  creator={this.props.metadata.creator}
                  name={this.props.metadata.name}
                  item={this.props.item}
                  title={this.props.metadata.title}
                  mediatype={this.props.metadata.mediatype}
                  poster={this.props.poster}
                  subtype={this.props.subtype}
                  playlist={this.props.playlist}
                  source={this.props.source}
                  files={this.props.files}
                  page={this.props.page}
                  disconnected={this.state.disconnected}
                />
                {(!this.props.identifier) ? null :
                  <DetailsAbout metadata={this.props.metadata} files={this.props.files} files_count={this.props.files_count}
                                       collection_titles={this.state.collection_titles}
                                       reviews={this.props.reviews}
                                       description={this.props.description}
                                       disconnected={this.state.disconnected} /> }
                {(!this.props.identifier) ? null :
                    <RelatedItemsWrapper identifier={this.props.identifier} item={this.props.item} noCache={this.props.noCache} /> }
                {/* should have: analytics here (look at end of commute.html) - but not on Directory (and maybe some other types ?collection?)*/}
                }
            </div>
  )}
}

export { DetailsIAWrap, DetailsWork }