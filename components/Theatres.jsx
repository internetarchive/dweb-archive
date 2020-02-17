import React from 'react';
import { CherModal } from './CherModal';
import { BookReaderDwebWrapper } from './BookReaderWrapper';
import { AnchorDownload, Carousel, ImageDweb, I18nStr } from '../ia-components/dweb-index';
import TheatreControls from './TheatreControls';
import { AudioDweb, VideoDweb, WebTorrentStats } from './AudioVideo';

/**
 * A collection of theatres for embedding in Details page*
 */

/**
 * <TheatreIAWrap
 *    chermodal=BOOL          true to display cherModal UI
 *    controls=BOOL           true to display mediatype dependent controls
 *    disconnected=BOOL       (disables some cherModal functionality
 *    identifier=IDENTIFIER
 *    mediatype=STRING        from metadata
 *    creator=STRING          from metadata
 *    title=STRING            from metadata
 * >
 *  ... children
 * </TheatreIAWrap>
 */
class TheatreIAWrap extends React.Component {
  render() {
    return (
      <div id="theatre-ia" className="container">
        <div className="row">
          <div className="xs-col-12">
            { !this.props.controls ? null
              : <TheatreControls identifier={this.props.identifier} mediatype={this.props.mediatype} />
            }
            {this.props.children}
            {this.props.disconnected ? null
              : (
                <CherModal identifier={this.props.identifier}
                  creator={this.props.creator}
                  mediatype={this.props.mediatype}
                  title={this.props.title}
                />
              )
            }
            { !this.props.marginBottom ? null
              : <center style={{ color: 'white', marginBottom: this.props.marginBottom }} />
            }
          </div>
        </div>
      </div>
    );
  }
}

/**
 * <BookReaderTheatre
 *   mediatype="texts"
 *   identifier=IDENTIFIER
 *   creator=Metadata.creator
 *   title=STRING
 *   item=ARCHIVEITEM
 *   disconnected=BOOL (disables some bookreader & cherModal functionality
 * />
 */
class BookReaderTheatre extends React.Component {
  // Dont need binding as not accessing this
  componentDidMount() {
    AJS.theatresize();
  }

  componentDidUpdate() {
    AJS.theatresize();
  }

  render() {
    return (
      <>
        {/* TODO this link is broken figure out what it should be as its not relative to here */}
        <link href="/archive/bookreader/BookReader-ia.css" rel="stylesheet" type="text/css" />
        <TheatreIAWrap controls chermodal marginBottom="10px"
          mediatype={this.props.mediatype} identifier={this.props.identifier} disconnected={this.props.disconnected} creator={this.props.creator} title={this.props.title}
        >
          <BookReaderDwebWrapper item={this.props.item} page={this.props.page} disconnected={this.props.disconnected} />
        </TheatreIAWrap>
      </>
    );
  }
}
/**
 * <CarouselTheatre
 *   mediatype="images"
 *   identifier=IDENTIFIER
 *   creator=Metadata.creator
 *   title=STRING
 *   item=ARCHIVEITEM
 *   slides=ARRAY       of slides - see <Carousel>
 *   disconnected=BOOL (disables some bookreader & cherModal functionality
 * />
 */
class CarouselTheatre extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidMount() {
    this.componentDidMountOrUpdate();
  }

  // noinspection JSUnusedLocalSymbols
  componentDidUpdate(oldProps, oldState, snapshot) {
    this.componentDidMountOrUpdate();
  }

  componentDidMountOrUpdate() {
    AJS.theatresize();
    AJS.carouselsize('#ia-carousel', true);
  }

  render() {
    return (
      <TheatreIAWrap controls={false} chermodal marginBottom="10px"
        mediatype={this.props.mediatype} identifier={this.props.identifier} disconnected={this.props.disconnected} creator={this.props.creator} title={this.props.title}
      >
        <div id="theatre-controls" />
        <Carousel identifier={this.props.identifier} slides={this.props.slides} disconnected={this.props.disconnected} />
      </TheatreIAWrap>
    );
  }
}

/**
 * <AudioTrack
 *  EITHER source=ARCHIVEFILE
 *  OR src=URL
 *  trackNumber=INT
 *  prettyDuration=STRING
 *  playing=BOOL
 *  disconnected=BOOL       (disables some cherModal functionality
 *  identifier=IDENTIFIER
 *  mediatype=STRING        from metadata
 *  creator=STRING          from metadata
 *  title=STRING            from metadata
 * />
 *
 */
class AudioTrack extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(ev) {
    // Note - this is redirected from Nav which is a global
    this.props.theatre.setState({ trackPlaying: this.props.trackNumber });
    ev.preventDefault(); // Prevent it going to the anchor (equivalent to "return false" in non-React
  }

  render() {
    return (
      <a href="#" key={this.props.trackNumber} onClick={this.onClick}>
        <div className={this.props.playing ? 'jwrowV2 playing' : 'jwrowV2'}>
          <b>{this.props.trackNumber}</b>
          <span className="ttl">{this.props.title}</span>
          {' '}
-
          <span className="tm">{this.props.prettyDuration}</span>
        </div>
      </a>

    );
  }
}

/**
 * <AudioTheatre
 *    identifier=string mediatype='audio'|'etree' creator=string title=string    All from metadata
 *    imgsrc=ARCHIVEFILE
 *    playlist={PLAYLIST}
 *    initialPlay=INT
 */
class AudioTheatre extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trackPlaying: this.props.initialPlay };
  }

  render() {
    let trackCount = 0; // First count is called 1, so initialPlay=1 plays first track
    return (
      <TheatreIAWrap controls chermodal
        mediatype={this.props.mediatype} identifier={this.props.identifier} disconnected={this.props.disconnected} creator={this.props.creator} title={this.props.title}
      >
        <div className="row">
          {!this.props.imgsrc ? null
            : (
              <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4 audio-image-carousel-wrapper">
                <center>
                  {/* --TODO-AUDIO replace image - see https://github.com/internetarchive/dweb-archive/issues/23--*/}
                  <ImageDweb source={this.props.imgsrc} className="img-responsive" />
                </center>
              </div>
            )
            }
          <div className="col-xs-12 col-sm-6 col-md-7 col-lg-8">
            <div id="audioContainer" style={{ textAlign: 'center' }}>
              <ImageDweb source={this.props.playlist[this.state.trackPlaying - 1].imageurls} className="img-responsive" style={{ backgroundColor: 'white' }} />
              <AudioDweb id="streamContainer" controls
                source={this.props.playlist[this.state.trackPlaying - 1].sources[0].urls}
              />
            </div>
            <WebTorrentStats style={{ color: 'white', textAlign: 'center' }} />
            <div id="jw6__list" className="jwlistV2"
              style={{ width: '100%', margin: 'auto', maxHeight: '240px', overflowX: 'hidden', overflowY: 'auto' }}
            >
              <div className="row" id="tracklist">
                <div className="col-sm-6">
                  { this.props.playlist.slice(0, (this.props.playlist.length + 1) / 2)
                    .map(track => (
                      <AudioTrack key={++trackCount}
                        trackNumber={trackCount}
                        title={track.title}
                        playing={trackCount === this.state.trackPlaying}
                        prettyDuration={track.prettyduration}
                        source={track.sources[0].urls}
                        theatre={this}
                      />
                    ))
                    }
                </div>
                <div className="col-sm-6">
                  { this.props.playlist.slice((this.props.playlist.length + 1) / 2)
                    .map(track => (
                      <AudioTrack key={++trackCount}
                        trackNumber={trackCount}
                        title={track.title}
                        playing={trackCount === this.state.trackPlaying}
                        prettyDuration={track.prettyduration}
                        theatre={this}
                      />
                    ))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </TheatreIAWrap>
    );
  }
}

/**
 * <VideoTheatre
 *   identifier=IDENTIFIER
 *   mediatype=movie
 *   poster=ARCHIVEFILE
 *   creator=Metadata.creator
 *   title=STRING
 *   source=ARCHIVEFILE
 * />
 */
class VideoTheatre extends React.Component {
  render() {
    return (
      <TheatreIAWrap controls chermodal
        mediatype={this.props.mediatype} identifier={this.props.identifier} disconnected={this.props.disconnected} creator={this.props.creator} title={this.props.title}
      >
        <div id="videoContainerX" style={{ textAlign: 'center' }}>
          {/* This videothumbnailurl is http since if getting decentralized there is little value compared to loading video itself */}
          <VideoDweb id="streamContainer" source={this.props.source} poster={this.props.poster} controls />
        </div>
        <WebTorrentStats style={{ color: 'white', textAlign: 'center' }} />
      </TheatreIAWrap>
    );
  }
}

/**
 * <ImageTheatre
 *   mediatype="image"
 *   identifier=IDENTIFIER
 *   Either: source=ARCHIVEFILE
 *   Or: src=URL
 *   alt=URL (of alternative image)
 *   caption=STRING
 *   creator=Metadata.creator
 *   disconnected=BOOL
 * />
 */
class ImageTheatre extends React.Component {
  render() {
    return ( // TODO compare this with Carousel.jsx
      <TheatreIAWrap controls chermodal
        mediatype={this.props.mediatype} identifier={this.props.identifier} disconnected={this.props.disconnected} creator={this.props.creator} title={this.props.title}
      >
        <div className="details-carousel-wrapper">
          <section
            id="ia-carousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
            aria-label={I18nStr('Item image slideshow')}
            style={{ maxHeight: '600px' }}
          >
            <ol className="carousel-indicators" style={{ display: 'none' }}>
              <li
                data-target="#ia-carousel"
                data-slide-to="0"
                className=" active"
                role="button"
                tabIndex="0"
                aria-label={I18nStr('Go to image') + ' 1'}
              />
            </ol>

            <div className="carousel-inner">
              <div className="item active">
                <AnchorDownload
                  className="carousel-image-wrapper"
                  source={this.props.source}
                  target="_blank"
                  disconnected={this.props.disconnected}
                  title={I18nStr('Open full sized image')}
                >
                  {/* There is a bizarre firefox only bug https://bugzilla.mozilla.org/show_bug.cgi?id=1576523
                      that means if we set carousel-image which ONLY sets maxWidth and maxHeight then this fails
                      but if we set it in the style - even prior to the src getting loaded with a blob - it works */}
                  <ImageDweb
                    className="rot0 carousel-image"
                    source={this.props.source}
                    src={this.props.src}
                    id="streamContainer"
                    alt={this.props.alt}
                  />

                </AnchorDownload>
                <div className="carousel-caption">
                  {this.props.caption}
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Script tags moved into the JS */}
        <WebTorrentStats style={{ color: 'white', textAlign: 'center' }} />
      </TheatreIAWrap>
    );
  }
}

/**
 * Render a message - typically an error, or while something is happening
 *
 * <MessageTheatre title=I18NSTRING || Node >
 *   ...
 * </MessageTheatre>
 */
class MessageTheatre extends React.Component {
  // Props: title children

  render() {
    return (
      <TheatreIAWrap controls chermodal={false}
        mediatype={this.props.mediatype} identifier={this.props.identifier} disconnected={this.props.disconnected} creator={this.props.creator} title={this.props.title}
      >
        <div className="row" style={{ color: 'white' }}>
          <div className="col-md-10 col-md-offset-1 no-preview">
            <p className="theatre-title">{this.props.title}</p>
            {this.props.children}
          </div>
        </div>
      </TheatreIAWrap>
    );
  }
}

export { BookReaderTheatre, CarouselTheatre, MessageTheatre, AudioTheatre, ImageTheatre, VideoTheatre };

// Code Review by Mitra 2019-11-29 excluding HTML and move to IAUX
