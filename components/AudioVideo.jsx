import React from 'react';
import prettierBytes from "prettier-bytes";
import { ObjectFilter } from '@internetarchive/dweb-archivecontroller/Util.js';
import { IAReactComponent } from '@internetarchive/ia-components/dweb-index.js';
import {config} from "../Util";
import {p_loadStream} from "../ReactSupport";
import {I18nSpan} from "./Languages";

const debug = require('debug')('dweb-archive:Video Components');

// File regular review 2019-sept-09
/**
 * This file provides wrapped Audio and Video components that can be driven from Dweb content -
 * Its similar to ImageDweb (in ia-components).
 * the source or src parameter is used to specify where to load content from, with other parameters passed alog
 */

/**
 *
 *  Do not use use this class directly, its a Local Superclass of AudioDweb and VideoDweb as similar structure
 *  Behavior (common to both)
 *  On Mount or on Update that changes source it retrieves a stream and loads it into the element
 */
class _AVDweb extends IAReactComponent {
  loadAV() {
    p_loadStream(this.avElement, this.props.source, {
      name: this.props.source.metadata.name,
      preferredTransports: config.preferredAVtransports
    });

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /* Iff this update changed source then reload AV element with new source - this is a track change*/
    if (prevProps.source !== this.props.source) {
      this.loadAV();
    };  // Cues up asynchronously to load the video/audio tag (dont need cb as this does the work of cb)
  }

  componentDidMount() {
    /* When mount this component, load AV element with source */
      this.loadAV();
  }

  loadcallable(avElement) {
    // On load, set the avElenent so it can be rendered into, its done this way since loadcallable is only called once, and not on re-renders
    this.avElement = avElement;
  }

}
class AudioDweb extends _AVDweb {
   /** Audio that can, but doesnt have to be loaded via Dweb
   *
   * <AudioDweb
   *    EITHER
   *      source  Flexible dweb parameter include ArchiveFile, ArchiveMember, relative urls, dweb: names, and arrays of alternatives (see dweb-archive/ReactSupport)
   *    OR
   *      src
   *    other properties passed to <Audio> tag
   * />
   *  Render an audio but fetching from Dweb if available
   */
   constructor(props) {
     super(props); //
     this.setState({
       specificProps: ObjectFilter(this.props, (k, unusedV) => AudioDweb.specificParms.includes(k)),
       tagProps: ObjectFilter(this.props, (k, unusedV) => (!AudioDweb.specificParms.includes(k) && !['children'].includes(k)))
     });
   }

  render() {
    // noinspection HtmlRequiredAltAttribute
    return (
      typeof DwebArchive !== 'undefined'
        ? <audio ref={this.load} data-trackname={this.props.source.metadata.name} {...this.state.tagProps} />
        : <audio {...this.state.audioProps} src={this.props.src} />
    );
  }
}
// Parameters not to pass down to audio tag automatically
AudioDweb.specificParms = ['src', 'source']; // Known in use includes:


class VideoDweb extends _AVDweb {
  /** Video that can, but doesnt have to be loaded via Dweb
   *
   * <VideoDweb
   *    *    EITHER
   *      source  Flexible dweb parameter include ArchiveFile, ArchiveMember, relative urls, dweb: names, and arrays of alternatives (see dweb-archive/ReactSupport)
   *    OR
   *      src
   *    poster: ArchiveFile or URL
   *    other properties passed to Video tag esp controls=BOOL
   * />
   */
  constructor(props) {
    super(props); //
    this.setState({
      specificProps: ObjectFilter(this.props, (k, unusedV) => VideoDweb.specificParms.includes(k)),
      tagProps: ObjectFilter(this.props, (k, unusedV) => (!VideoDweb.specificParms.includes(k) && !['children'].includes(k)))
    });
  }

  render() {
    // noinspection HtmlRequiredAltAttribute
    const p = ["undefined","string"].includes(typeof this.props.poster) ? this.props.poster : this.props.poster.httpUrl();
    return (
      typeof DwebArchive !== 'undefined'
      ? <video id="streamContainer" data-poster={p} poster={p} controls ref={this.load} {...this.state.tagProps}></video>
      : <video id="streamContainer" data-poster={p} poster={p} controls src={this.props.src} {...this.state.tagProps}></video>
    );
  }
}
// Parameters not to pass down to video tag automatically
VideoDweb.specificParms = ['src', 'source', 'poster']; // Known in use includes:

class WebTorrentStats extends IAReactComponent {
  /**
   * <WebTorrentStats
   *  torrent=TORRENT
   *  torrentfile=TORRENTFILE
   * />
   */
  constructor(props) {
    super(props);
    this.updateSpeed = this.updateSpeed.bind(this);
    this.setup();
    // This might be wrong if torrent is updated and constructor not called again, if so move to ComponentDidUpdate
  }

  updateSpeed() {
    // Check if still displaying this file before updating stats (torrent might still download in background)
    if (window.WEBTORRENT_FILE === this.props.torrentfile) {
      this.setState({
        numPeers: this.props.torrent.numPeers,
        downloadSpeed: this.props.torrent.downloadSpeed,
        uploadSpeed: this.props.torrent.uploadSpeed,
        progress: this.props.torrentfile.progress
      });
    }
  }
  setup() {
    if (this.props.torrent) {
      this.props.torrent.on('download', throttle(this.updateSpeed, 250));
      this.props.torrent.on('upload', throttle(this.updateSpeed, 250));
      setInterval(this.updateSpeed, 1000);
      this.updateSpeed(); //Do it once
    }
  }


render() {
    return (
      <span>
        <b><I18nSpan en="Peers">:</I18nSpan></b> {this.numPeers}{' '}
        <b><I18nSpan en="Progress">:</I18nSpan></b> {Math.min(100 * this.progress || 0, 100).toFixed(1)}%{' '}
        <b><I18nSpan en="Download speed">:</I18nSpan></b> {prettierBytes(this.downloadSpeed || 0)}/s{' '}
        <b><I18nSpan en="Upload speed">:</I18nSpan></b> {prettierBytes(this.uploadSpeed || 0)}/s
      </span>
      )
  }
}
export { AudioDweb, VideoDweb, WebTorrentStats};

