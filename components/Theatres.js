import React from 'react';
import ReactFake from '../ReactFake'; //TODO-GREY just temporary till have p_loadStream in ReactSupport
import IAReactComponent from './IAReactComponent';
import { CherModal } from './CherModal';
import { BookReaderWrapper } from './BookReaderWrapper';
import { Carousel, ImageDweb }  from '@internetarchive/ia-components/dweb-index.js';
import TheatreControls from "./TheatreControls";
import { AudioDweb, VideoDweb } from "./AudioVideo";
import {config} from "../Util";

/**
 * A collection of theatres for embedding in Details page
 *
 * Each theatre has a similar structure, especially the outer "theatre-ia" DIV
 * TODO refactor out that outer structure
 */

class BookReaderTheatre extends IAReactComponent {
  // Props: mediatype, identifier, creator, title, item
  render() {
    return (
        <div id="theatre-ia" className="container">
          <div className="row">
            <div className="xs-col-12">
              <TheatreControls identifier={this.props.identifier} mediatype={this.props.mediatype} />
              <BookReaderWrap item={this.props.item} page={this.props.page} />
              <CherModal identifier={this.props.identifier} creator={this.props.creator} mediatype={this.props.mediatype} title={this.props.title}/>
              <center style={{color:"white", marginBottom:"10px"}}>
              </center>
            </div>
          </div>
        </div>
    );
  }
}
class CarouselTheatre extends IAReactComponent {
  // Props: identifier, slides, creator, mediatype, title
  render() {
    return (
        <div id="theatre-ia" className="container">
          <div className="row">
            <div className="xs-col-12">
              <div id="theatre-controls"></div>
              <Carousel identifier={this.props.identifier} slides={this.props.slides}/>
              <CherModal identifier={this.props.identifier} creator={this.props.creator} mediatype={this.props.mediatype} title={this.props.title}/>
              <center style={{color:"white", marginBottom: "10px"}}>
              </center>
            </div>
          </div>
        </div>
    );
  }
}

class AudioTrack extends IAReactComponent {
  /**
   * <AudioTrack
   *  EITHER source=ARCHIVEFILE
   *  OR src=URL
   *  trackNumber=INT
   *  prettyDuration=STRING
   *  playing=BOOL
   * />
   *
   */

  clickCallable(el) { //TODO can probably obsolete Nav.audioPlay (or similar name) and play in Audio.js
    // Note - this is redirected from Nav which is a global
    this.props.theatre.setState({trackPlaying: this.props.trackNumber});
    /*
    const af = this.props.source
    // Remove old playing indicators - TODO React might not like this
    document.getElementById("tracklist")
      .querySelectorAll(".jwrowV2")
      .forEach(el => el.classList.remove("playing"));
    this.setState({playing: true})
    //el.querySelectorAll(".jwrowV2").forEach(el => el.classList.add("playing"));
    const elAudio = document.getElementById("streamContainer");
    ReactFake.p_loadStream(elAudio, af, {name: af.metadata.name, preferredTransports: config.preferredAVtransports});//TODO-GREY move this to ReactSupport
     */
    return false; // Dont follow link
  }

  render() { return (
    <a href="#" key={this.props.trackNumber} source={this.props.source} onClick={this.onClick}>
      <div className={this.props.playing ? "jwrowV2 playing" : "jwrowV2" }>
        <b>{this.props.trackNumber}</b>
        <span className="ttl">{this.props.title}</span> - <span className="tm">{this.props.prettyDuration}</span>
      </div>
    </a>

  )}
}

class AudioTheatre extends IAReactComponent {
  /**
   * <AudioTheatre
   *    identifier=string mediatype='audio'|'etree' creator=string title=string    All from metadata
   *    imgsrc=ARCHIVEFILE
   *    playlist={PLAYLIST}
   *    initialPlay=INT
   */
  constructor(props) {
    super(props);
    this.setState({trackPlaying: this.props.initialPlay});
  }
  render() {
    let trackCount = 0; // First count is called 1, so initialCount=1 plays first track
    return (
    <div id="theatre-ia" className="container">
      <div className="row">
        <div className="xs-col-12">
          <TheatreControls identifier={this.props.identifier} mediatype={this.props.mediatype}/>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4 audio-image-carousel-wrapper">
              <center>{/*--TODO-AUDIO replace image - see https://github.com/internetarchive/dweb-archive/issues/23--*/}
                <ImageDweb source={this.props.imgsrc} className="img-responsive"/>{/*TODO-IAUX img.src interpreted in ReactFake - move to ImageDweb*/}
              </center>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-7 col-lg-8">
              <div id="audioContainer" style={{textAlign: "center"}}>
                <AudioDweb id="streamContainer" controls
                           source={this.props.playlist[this.state.trackPlaying-1].sources[0].urls}/>
              </div>
              <div id="webtorrentStats" style={{color: "white", textAlign: "center"}}></div>
              <div id="jw6__list" className="jwlistV2"
                   style={{width: "100%", margin: "auto", maxHeight: "240px", overflowX: "hidden", overflowY: "auto"}}>
                <div className="row" id="tracklist">
                  <div className="col-sm-6">
                    { this.props.playlist.slice(0, (this.props.playlist.length+1)/2)
                      .map(track => (
                        <AudioTrack key={++trackCount}
                          trackNumber={trackCount}
                          title={track.title}
                          playing={trackCount === this.state.trackPlaying}
                          prettyDuration={track.prettyduration}
                          source={track.sources[0].urls}
                          theatre={this}
                        /> ))
                    }
                  </div>
                  <div className="col-sm-6">
                    { this.props.playlist.slice((this.props.playlist.length+1)/2)
                      .map(track => (
                        <AudioTrack key={++trackCount}
                          trackNumber={trackCount}
                          title={track.title}
                          playing={trackCount === this.state.trackPlaying}
                          prettyDuration={track.prettyduration}
                          theatre={this}
                        /> ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CherModal identifier={this.props.identifier} creator={this.props.creator} mediatype={this.props.mediatype} title={this.props.title}/>
        </div>
      </div>
    </div>
  )};
}

class VideoTheatre extends IAReactComponent {
  // Props: identifier mediatype poster creator mediatype title source=ARCHIVEFILE
  render() { return (
    <div id="theatre-ia" className="container">
      <div className="row">
        <div className="xs-col-12">
          <TheatreControls identifier={this.props.identifier} mediatype={this.props.mediatype}/>
          <div id="videoContainerX" style={{textAlign: "center"}}>
            {/* This videothumbnailurl is http since if getting decentralized there is little value compared to loading video itself */}
            <VideoDweb id="streamContainer" source={this.props.source} poster={this.props.poster} controls></VideoDweb>
          </div>
          <div id="webtorrentStats" style={{color: "white", textAlign: "center"}}></div>
          <CherModal identifier={this.props.identifier} creator={this.props.creator} mediatype={this.props.mediatype}
                     title={this.props.title}/>
        </div>
      </div>
    </div>
  ); }
}

class MessageTheatre extends IAReactComponent {
  // Props: title children

  render() {
    return (
      <div id="theatre-ia" className="container">
        <div className="row">
          <div className="xs-col-12">
            <TheatreControls identifier={identifier} mediatype={metadata.mediatype}/>
            <div className="row" style={{color: "white"}}>
              <div className="col-md-10 col-md-offset-1 no-preview">
                <p className="theatre-title">{this.props.title}</p>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
  ); }
}

export { BookReaderTheatre, CarouselTheatre, MessageTheatre, AudioTheatre, VideoTheatre }