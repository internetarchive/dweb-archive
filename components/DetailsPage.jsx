import React from 'react';
import {gateway, gatewayServer, ObjectMap} from "@internetarchive/dweb-archivecontroller/Util";
import {AudioTheatre, BookReaderTheatre, CarouselTheatre, ImageTheatre, MessageTheatre, VideoTheatre} from "./Theatres";
import {IAReactComponent, NavWrap, DetailsAbout, DownloadDirectoryDiv } from "@internetarchive/ia-components/dweb-index.js";
import RelatedItemsWrapper from './RelatedItemsWrapper';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember";
import {I8nSpan, I8nStr} from "./Languages";
/**
 * A set of components that make up the Details Page
 */

class DetailsIAWrap extends IAReactComponent {
  /**
   * <DetailsIAWrap
   *  identifier, mediatype, name, title, creator     Fields form Metadata API
   *  item=ARCHIVEITEM  // Currently Needed if its a bookreader, or a carousel
   *  poster=URL        // Poster for videos, mostly for search engines
   *  playlist={...}    // As stored in item from playlist API
   *  files=
   *  page=
   *  download=         // if true display the download directory
   * />
   */
  render() {
      // This is a combo wrap that handles multiple mediatypes
     //TODO video at moment only plays first in playlist which is usually, but not always correct - need an example of multi-video item

      return (

        /*React doesnt like this - says resized isnt boolean// resized={["image"].includes(this.props.mediatype)} */
        <div id="theatre-ia-wrap" className="container container-ia width-max"
             style={["image"].includes(this.props.mediatype) ? {height: "600px"} : undefined} >
          <link itemProp="url" href={`https://archive.org/details/${this.props.identifier}`}/> {/*Probably correct as archive.org/details since itemProp*/}
          {/* - TODO unclear why image & text|audio mediatypes use different itemProp below check current archive.org pages*/}
          <link itemProp={["image","movies"].includes(this.props.mediatype) ? "thumbnailUrl" : "image"}
                href="https://archive.org/services/img/{this.props.identifier}"/>{/*OK for direct link since itemProp*/}

          { (this.props.playlist && ["audio","etree"].includes(this.props.mediatype)) // isDark wont have a playlist
            ?
            this.props.playlist.map((track,i) => ( // OK to be absolute or dweb link
              <div key={i} itemProp="hasPart" itemscope itemtype="http://schema.org/AudioObject">
                <meta itemProp="name" content={track.title}/>
                <meta itemProp="duration" content={`PT0M${parseInt(track.duration)}S`}/>
                {   // Loop over the sources which can be multiple files for the same track.  Note this is limited to playable sources, could add unplayable to playlist if want as separate field e.g. unplayablesources
                  track.sources.map((f,i) => (
                    <link key={i} itemProp="associatedMedia" href={`https://archive.org/download/${this.props.identifier}/${f.name}`}/>
                  ))
                }
              </div>
            ))
            :
            this.props.files.filter((af)=> af.metadata.source !== "metadata")
              .map((af) => ( //OK for direct link since itemProp
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
              slides={this.props.item.files4carousel().map(f => ({filename: f.metadata.name, source: f}))}
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
              disconnected={this.props.disconnected}
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
            <MessageTheatre title={<I8nspan en="There Is No Preview Available For This Item"/>}>
              <p>
                <I8nSpan en="This item does not appear to have any files that can be experienced on Archive.org"/>
                <br/><I8nSpan className="hidden-xs hidden-sm" en="Please download files in this item to interact with them on your computer"/>.<br/>
                {/* Should be link to DownloadDirectory */}
                <AnchorDownload className="show-all" identifier={this.props.identifier}><I8nSpan en="Show all files"/></AnchorDownload>
              </p>
            </MessageTheatre>
          }
          <div id="flag-overlay" className="center-area"> </div>
        </div>
  ); }
}

class DetailsError extends IAReactComponent {
  /**
   * <DetailsError
   *    message=STRING
   * />
   */
  render() {
    return ( // TODO Copy styles from the error in is_dark
      <div style={{margin: "0 20px", textAlign: "center", fontWeight: "bold"}}><p>
        {this.props.message}
        </p>
      </div>
    )
  }
}

class DetailsWork extends IAReactComponent {
  /**
   *  This is the buld of a Details page
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
   *    download=BOOL true if want the Download Directory for thsi item
   *    message=STRING Dont display content, display a message
   *    statuses={...} disconnected, directories etc returned from call to /info
   *    
   */

   constructor(props) {
    super(props); //  item
    // TODO-DWEBNAV need to tell Transports to set this status when changes
    this.state.expansionTried = false;
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

  render() {
    const semiTitle = I8nStr(DwebArchive.mirror ? "Universal Library" : "Decentralized Internet Archive");
    document.title = `${this.props.identifier} : ${semiTitle}`;
    return (
    <>
      {/* Missing donate-banner and scripts & css before it */}
      <NavWrap item={this.props.item} canSave={this.props.canSave} {...this.props.statuses} />
      {/*--Begin page content --*/}
      <main id="maincontent">
        <div className="container container-ia"></div>
        { this.props.download
          ?
            <DownloadDirectoryDiv identifier={this.props.identifier}
                                  disconnected={this.props.statuses.disconnected}
                                  files={this.props.item.files.map(f => { return {name: f.metadata.name, size: f.sizePretty()}})} />
          :
            <>
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
                disconnected={this.props.statuses.disconnected}
              />
              {(!this.props.identifier) ? null :
                <DetailsAbout metadata={this.props.metadata} files={this.props.files} files_count={this.props.files_count}
                                     collection_titles={this.state.collection_titles}
                                     reviews={this.props.reviews}
                                     description={this.props.description}
                                     disconnected={this.props.statuses.disconnected} /> }
             </>
        }
        {(!this.props.identifier) ? null :
            <RelatedItemsWrapper identifier={this.props.identifier} item={this.props.item} noCache={this.props.noCache} disconnected={this.props.statuses.disconnected}/> }
        {this.props.statuses.disconnected ? null :
          <div className="terms-of-service"><a className="stealth" href="https://archive.org/about/terms.php"><I8nSpan en="Terms of Service"/> (<I8nSpan en="last updated"/>
            12/31/2014)</a></div> }
      </main>
      {/* should have: analytics here (look at end of commute.html) - but not on Directory (and maybe some other types ?collection?)*/}
    </>
  )}
}


class DetailsMessage extends IAReactComponent {
  /**
   * <DetailsMessage
   *    identifier=IDENTIFIER optional
   *    item=ARCHIVEFILE optional
   *    message=STRING Dont display content, display a message
   *    statuses={...} disconnected, directories etc returned from call to /info
   *    noCache=BOOL
   * />
   *
   * Display a message to the user, usually on failure, if possible a header is presented, but that depends on having an item to work with.
   */

  render() { return (
    //TODO make the props.item check more granular - move down into NavWrap and display/hide parts of that.
    <>
      {(!this.props.item) ? null :
        <>
          <NavWrap item={this.props.item} canSave={this.props.canSave} {...this.props.statuses} />
          <div className="container container-ia">
            <a name="maincontent" id="maincontent"></a>
          </div>
        </>
      }
      <DetailsError message={this.props.message}/>
      {(!(this.props.item || this.props.identifier)) ? null :
        <RelatedItemsWrapper identifier={this.props.identifier} item={this.props.item} noCache={this.props.noCache} disconnected={this.props.statuses.disconnected}/> }
      {/* should have: analytics here (look at end of commute.html) - but not on Directory (and maybe some other types ?collection?)*/}
    </>
  )}
}

export { DetailsIAWrap, DetailsWork, DetailsMessage }
