import React from 'react';
import { specialidentifiers, ObjectMap, routed, ArchiveMember, ObjectDeeperAssign } from '@internetarchive/dweb-archivecontroller';
import { AnchorDownload, NavWrap, DetailsAbout, DownloadDirectoryDiv, I18nSpan, I18nStr } from '../ia-components/dweb-index';
import { AudioTheatre, BookReaderTheatre, CarouselTheatre, ImageTheatre, MessageTheatre, VideoTheatre } from './Theatres';
import RelatedItemsWrapper from './RelatedItemsWrapper';
import RadioPlayerControllerReact from './RadioPlayerController';
import { AlbumTheatre } from './AlbumTheatre';
/* global DwebArchive, DwebTransports */
/**
 * A set of components that make up the Details Page
 */

class DetailsIAWrap extends React.Component {
  /**
   * <DetailsIAWrap
   *  identifier, mediatype, name, title, creator     Fields form Metadata API
   *  item=ARCHIVEITEM  // Currently Needed if its a bookreader, or a carousel or enhanced media player.
   *  poster=URL        // Poster for videos, mostly for search engines
   *  playlist={...}    // As stored in item from playlist API
   *  files=
   *  page=
   *  download=         // if true display the download directory
   *  disconnected=BOOL // If cannot see upstream, pass the theaters who decide what to hide
   * />
   */
  render() {
    // This is a combo wrap that handles multiple mediatypes
    // TODO video at moment only plays first in playlist which is usually, but not always correct - need an example of multi-video item

    return (
      /* React doesnt like this - says resized is not boolean// resized={['image'].includes(this.props.mediatype)} */
      <div id="theatre-ia-wrap" className="container container-ia width-max"
        style={['image'].includes(this.props.mediatype) ? { height: '600px' } : undefined}>
        <link itemProp="url" href={`https://archive.org/details/${this.props.identifier}`} /> {/* Probably correct as archive.org/details since itemProp */}
        <link itemProp={['image', 'movies'].includes(this.props.mediatype) ? 'thumbnailUrl' : 'image'}
          href={`https://archive.org/services/img/${this.props.identifier}`} /> {/* OK for direct link since itemProp */}
        { (this.props.playlist && ['audio', 'etree'].includes(this.props.mediatype)) // is_dark wont have a playlist
          ? this.props.playlist.map((track, i) => ( // OK to be absolute or dweb link
            // eslint-disable-next-line react/no-array-index-key
            <div key={this.props.identifier + i} itemProp="hasPart" itemScope itemType="http://schema.org/AudioObject">
              <meta itemProp="name" content={track.title} />
              <meta itemProp="duration" content={`PT0M${parseInt(track.duration, 10)}S`} />
              { // Loop over the sources which can be multiple files for the same track.  Note this is limited to playable sources, could add unplayable to playlist if want as separate field e.g. unplayablesources
                track.sources.map((f, sourceindex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <link key={this.props.identifier + sourceindex} itemProp="associatedMedia" href={`https://archive.org/download/${this.props.identifier}/${f.name}`} />
                ))
              }
            </div>
          ))
          : // TODO check on rules for this, we are showing files on carousel e.g. thetaleofpeterra14838gut when archive.org is not
            this.props.files.filter((af) => af.metadata.source !== 'metadata')
            .map((af) => ( // OK for direct link since itemProp
              <link itemProp="associatedMedia" href={`https://archive.org/download/${this.props.identifier}/${af.metadata.name}`} key={`${this.props.identifier}/${af.metadata.name}`} />
            ))
        }
        { !['movies'].includes(this.props.mediatype) ? null :
          <>
            <link itemProp="contentUrl" href={routed(`https://archive.org/download/${this.props.identifier}/${this.props.playlist[0].sources[0].name}`,
              { wantOneHttp: true })} />
            <meta itemProp="duration" content={`PT0M${parseInt(this.props.playlist[0].duration, 10)}S`} />
          </>
        }
        <h1 className="sr-only">{this.props.title}</h1>
        <h2 className="sr-only">{I18nStr(this.props.mediatype)} {I18nStr('preview')}</h2>
        { (['texts'].includes(this.props.mediatype) && (this.props.subtype === 'carousel'))
          ?
          <CarouselTheatre
            identifier={this.props.identifier}
            slides={this.props.item.files4carousel().map(f => ({ filename: f.metadata.name, source: f }))}
            creator={this.props.creator}
            mediatype={this.props.mediatype}
            title={this.props.title}
            disconnected={this.props.disconnected}
          />
          : (['texts'].includes(this.props.mediatype) && (this.props.subtype === 'bookreader'))
          ? <BookReaderTheatre
            identifier={this.props.identifier}
            item={this.props.item}
            creator={this.props.creator}
            mediatype={this.props.mediatype}
            title={this.props.title}
            page={this.props.page}
            disconnected={this.props.disconnected}
          />
          : (['image'].includes(this.props.mediatype) && this.props.source)
          ? <ImageTheatre
            alt="item image #1"
            source={this.props.source}
            caption={this.props.source.metadata.name}
            identifier={this.props.identifier}
            mediatype={this.props.mediatype}
            creator={this.props.creator}
            title={this.props.title}
            disconnected={this.props.disconnected} />
          : (['audio'].includes(this.props.mediatype) && (this.props.subtype === 'radio'))
          ? <RadioPlayerControllerReact
            itemId={this.props.identifier}
            item={this.props.item} />
          : (['audio'].includes(this.props.mediatype) && (this.props.subtype === 'album'))
          ? // TODO-EMP check playFullIAAudio what calculated on;
          <AlbumTheatre item={this.props.item} />
          : (['audio', 'etree'].includes(this.props.mediatype))
          ? <AudioTheatre
            identifier={this.props.identifier}
            mediatype={this.props.mediatype} creator={this.props.creator} title={this.props.title}
            imgsrc={this.props.poster}
            playlist={this.props.playlist}
            initialPlay={1}
          />
          : (['movies'].includes(this.props.mediatype))
          ? /* The 'poster' is intentionally a direct Http link as its intended only for search engines etc
              Preference is 2nd thumbnail (first is usually black-screen) in .thumbs/ directory (e.g. for 'commute');
              if only one (e.g. item 'stairs') use that. */
          <VideoTheatre
            identifier={this.props.identifier}
            mediatype={this.props.mediatype}
            poster={this.props.poster}
            title={this.props.title}
            creator={this.props.creator}
            source={this.props.playlist[0].sources[0].urls} />
          : <MessageTheatre title={<I18nSpan en="There Is No Preview Available For This Item" />}>
              <p>
                <I18nSpan en="This item does not appear to have any files that can be experienced on Archive.org" />
                <br />
                <I18nSpan className="hidden-xs hidden-sm" en="Please download files in this item to interact with them on your computer" />.
                <br />
                {/* Should be link to DownloadDirectory */}
                <AnchorDownload className="show-all" identifier={this.props.identifier}>
                  <I18nSpan en="Show all files" />
                </AnchorDownload>
              </p>
            </MessageTheatre>
        }
        <div id="flag-overlay" className="center-area"> </div>
      </div>
    );
  }
}

class DetailsError extends React.Component {
  /**
   * <DetailsError
   *    message=I18NSTRING
   * />
   */
  render() {
    return (
      <div style={{ margin: '0 20px', textAlign: 'center', fontWeight: 'bold' }}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

class DetailsWork extends React.Component {
  /**
   *  This is the build of a Details page
   *  <DetailsWork
   *    identifier=IDENTIFIER
   *    item=ARCHIVEITEM optional if not on Dweb
   *    metadata= METADATA API '.metadata', munged to enforce contracts (i.e. .
   *    files=[ArchiveFile] or [ METADATA API .files ]
   *    subtype = STRING - result of ArchiveItem.subtype(), 'carousel','bookreader' supported (mediatype:texts only)
   *    poster=URL of image  (mediatype:movies,audio,etree only)
   *    source=ArchiveFile (mediatype:image only)
   *    files_count=INT (from metadata API)
   *    reviews={} reviews section of metadata API
   *    collection_titles=DICT mapping collection to title.
   *    description=SANITIZED HTML from metadata.description
   *    page=INT (mediatype:texts only)
   *    playlist={}  Result of playlist call (/embed/IDENTIFIER?output=json)
   *    noCache=BOOL if shouldnt use disk cache when reading (only used for Related Items TODO check if used from here down)
   *    download=BOOL true if want the Download Directory for this item
   *    message=STRING Dont display content, display a message
   *    statuses={  as returned from call to /info
   *      disconnected=BOOL true if browser cant see archive.org (or dweb.archive.org)
   *      transportsClickable=BOOL
   *      ... directories etc
   *      }
   */

  constructor(props) {
    super(props);
    this.state = { collection_titles: {} };
  }

  static getDerivedStateFromProps(props, state) {
    // Learn any newly provided collection_titles
    return (typeof props.collection_titles === 'undefined')
      ? null
      : { collection_titles: Object.assign(state.collection_titles, props.collection_titles) };
  }

  componentDidMount() {
    this.expand();
  }

  componentDidUpdate(prevProps, unusedPrevState, unusedSnapshot) {
    if (prevProps.identifier !== this.props.identifier) { // Only try and expand once per identifier
      this.expand();
    }
  }

  expand() {
    const { collection } = this.props.metadata;
    // expand a list of collections into a list of titles either through collection_titles if supplied (e.g. from dweb gateway) or via a new Search query
    ArchiveMember.expand(collection.filter(k => !this.state.collection_titles[k]), (err, res) => { // res = { id: AS(id) }
      const collection_titles = Object.assign({}, this.state.collection_titles, ObjectMap(res, (k, v) => [k, v.title]));
      this.setState({ collection_titles }); // Cause a rerender with newly learned titles //(note maybe a race condition with mounting)
    });
  }

  palmLeafWikiPageLink(externalIdentifier) {
    // Combine multiple configs into last place defined
    let pageLinkPrefix = ObjectDeeperAssign(
      !DwebArchive.mirror
        ? undefined
        // Note a config without a top-level 'apps' is going to be an error, missing apps.palmleaf is not.
        : DwebTransports.statuses()
          .find(s => s.name === 'HTTP')
          .info.config
          .map(s => s.apps.palmleaf)
    ).pagelink;
    if (pageLinkPrefix && DwebArchive.mirror) {
      const mirrorHost = DwebArchive.mirror.split('://')[1].split(':')[0];
      pageLinkPrefix = pageLinkPrefix.replace('MIRRORHOST', mirrorHost);
    }
    return pageLinkPrefix
      ? externalIdentifier.replace(/http[s]?:\/\/palmleaf.org\/wiki/, pageLinkPrefix)
      : externalIdentifier;
  }

  /**
   * Return array of obj suitable for DetailsActionButtons
   */
  externallinks() {
    return (!this.props.item.metadata['external-identifier']
    ? undefined
    : (this.props.item.metadata['external-identifier']
      .map(ei => (ei.includes('//palmleaf.org')
        ? { href: this.palmLeafWikiPageLink(ei), title: 'Open in Palmleaf Wiki', src: '/images/palm-leaf-wiki-logo.png' }
        : undefined)))
      .filter(f => !!f));
  }

  render() {
    const semiTitle = I18nStr(DwebArchive.mirror ? 'Offline Internet Archive' : 'Decentralized Internet Archive');
    document.title = `${this.props.identifier} : ${semiTitle}`;
    return (
      <>
        {/* Missing donate-banner and scripts & css before it */}
        <NavWrap item={this.props.item} canSave={this.props.canSave} {...this.props.statuses} />
        {/* --Begin page content -- */}
        <main id="maincontent">
          <div className="container container-ia" />
          { this.props.download
            ?
              <DownloadDirectoryDiv identifier={this.props.identifier}
                                    disconnected={this.props.statuses.disconnected}
                                    files={this.props.item.files.map(f => ({ name: f.metadata.name, size: f.sizePretty() }))} />
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
                  <DetailsAbout
                    metadata={this.props.metadata}
                    files={this.props.files}
                    files_count={this.props.files_count}
                    collection_titles={this.state.collection_titles}
                    reviews={this.props.reviews}
                    description={this.props.description}
                    externallinks={this.externallinks()}
                    disconnected={this.props.statuses.disconnected}
                   />
                }
               </>
          }
          {(!this.props.identifier) ? null :
              <RelatedItemsWrapper identifier={this.props.identifier} item={this.props.item} noCache={this.props.noCache} disconnected={this.props.statuses.disconnected} /> }
          {this.props.statuses.disconnected ? null :
            <div className="terms-of-service">
              <a className="stealth" href="https://archive.org/about/terms.php">
                <I18nSpan en="Terms of Service" /> (<I18nSpan en="last updated" /> 12/31/2014)
              </a>
            </div> }
        </main>
        {/* should have: analytics here (look at end of commute.html) - but not on Directory (and maybe some other types ?collection?) */}
      </>
    );
  }
}


class DetailsMessage extends React.Component {
  /**
   * <DetailsMessage
   *    identifier=IDENTIFIER optional
   *    item=ARCHIVEFILE optional
   *    message=I18NSTRING Dont display content, display a message
   *    statuses={...} disconnected, transportsClickable, directories etc returned from call to /info
   *    noCache=BOOL
   * />
   *
   * Display a message to the user, usually on failure, if possible a header is presented, but that depends on having an item to work with.
   */

  render() {
    // TODO make the props.item check more granular - move down into NavWrap and display/hide parts of that.
    const identifier = this.props.identifier || (this.props.item && this.props.item.itemid);
    return (
      <>
        {(!this.props.item) ? null :
            <NavWrap item={this.props.item} canSave={this.props.canSave} {...this.props.statuses} />
        }
        <main id="maincontent">
          <div className="container container-ia">
            <DetailsError message={this.props.message} />
          </div>
        </main>
        { (!identifier
          || (this.props.item && this.props.item.is_dark) // is_dark dont have Related
          || Object.keys(specialidentifiers).includes(identifier) // No related on specialidentifiers
          ) ? null :
            <RelatedItemsWrapper identifier={this.props.identifier} item={this.props.item} noCache={this.props.noCache} disconnected={this.props.statuses.disconnected} /> }
        {/* should have: analytics here (look at end of commute.html) - but not on Directory (and maybe some other types ?collection?) */}
      </>
    );
  }
}

export { DetailsIAWrap, DetailsWork, DetailsMessage };
// Regular code review 2019-11-01 by Mitra
