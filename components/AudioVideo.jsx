/* eslint-disable camelcase, jsx-a11y/media-has-caption */
// jsx-a11y/media-has-caption TODO should have captions but dont have on archive.org
// camelcase TODO refactor some names
import React from 'react';
import prettierBytes from 'prettier-bytes';
import { ObjectFilter } from '@internetarchive/dweb-archivecontroller';
import { I18nSpan } from '../ia-components/dweb-index';
import throttle from 'throttleit';
import { config } from '../Util';
import { p_loadStream } from '../ReactSupport';
// const debug = require('debug')('dweb-archive:Video Components');

// File regular review 2019-sept-09
/**
 * This file provides wrapped Audio and Video components that can be driven from Dweb content -
 * Its similar to ImageDweb (in ia-components).
 * the source or src parameter is used to specify where to load content from, with other parameters passed along
 */

/**
 *
 *  Do not use use this class directly, its a Local Superclass of AudioDweb and VideoDweb as similar structure
 *  Behavior (common to both)
 *  On Mount or on Update that changes source it retrieves a stream and loads it into the element
 */
class _AVDweb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    /* When mount this component, load AV element with source */
    this.loadAV();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /* Iff this update changed source then reload AV element with new source - this is a track change */
    if (prevProps.source !== this.props.source) {
      this.loadAV();
    } // Cues up asynchronously to load the video/audio tag (dont need cb as this does the work of cb)
  }

  loadAV() {
    p_loadStream(this.avElement, this.props.source, {
      name: this.props.source.metadata.name,
      preferredTransports: config.preferredAVtransports
    },
    (err, el) => { if (el) el.play(); });
  }

  load(avElement) {
    // On load, set the avElement so it can be rendered into, its done this way since load is only called once, and not on re-renders
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

  render() {
    // noinspection HtmlRequiredAltAttribute
    const tagProps = ObjectFilter(this.props, (k, unusedV) => (!AudioDweb.specificParms.includes(k) && !['children'].includes(k)));
    return (
      typeof DwebArchive !== 'undefined'
        ? <audio ref={this.load} data-trackname={this.props.source.metadata.name} {...tagProps} />
        : <audio {...tagProps} src={this.props.src} />
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
  render() {
    // noinspection HtmlRequiredAltAttribute
    const p = ['undefined', 'string'].includes(typeof this.props.poster) ? this.props.poster : this.props.poster.httpUrl();
    const tagProps = ObjectFilter(this.props, (k, unusedV) => (!VideoDweb.specificParms.includes(k) && !['children'].includes(k)));
    return (
      typeof DwebArchive !== 'undefined'
        ? <video id="streamContainer" data-poster={p} poster={p} controls ref={this.load} {...tagProps} />
        : <video id="streamContainer" data-poster={p} poster={p} controls src={this.props.src} {...tagProps} />
    );
  }
}
// Parameters not to pass down to video tag automatically
VideoDweb.specificParms = ['src', 'source', 'poster']; // Known in use includes:

class WebTorrentStats extends React.Component {
  /**
   * <WebTorrentStats
   *  torrent=TORRENT
   *  torrentfile=TORRENTFILE
   * />
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.updateSpeed = this.updateSpeed.bind(this);
    this.updaterInterval = setInterval(this.updateSpeed, 1000); // Start watching as window.WEBTORRENT_* will be set asynchronously
  }

  componentWillUnmount() {
    clearInterval(this.updaterInterval);
  }

  updateSpeed() {
    // Check if still displaying this file before updating stats (torrent might still download in background)
    const torrent = window.WEBTORRENT_TORRENT;
    const torrentfile = window.WEBTORRENT_FILE;
    if (torrentfile && torrent) { // && (window.WEBTORRENT_FILE === this.props.torrentfile)
      if (typeof this.state.numPeers === 'undefined') {
        // If we change torrents, the old will still send updates, but we'll ignore them
        torrent.on('download', throttle(this.updateSpeed, 250));
        torrent.on('upload', throttle(this.updateSpeed, 250));
      }
      this.setState({
        numPeers: torrent.numPeers,
        downloadSpeed: torrent.downloadSpeed,
        uploadSpeed: torrent.uploadSpeed,
        progress: torrentfile.progress
      });
    }
  }

  render() {
    return typeof window.WEBTORRENT_TORRENT === 'undefined' ? null :
      <span>
        <b><I18nSpan en="Peers">:</I18nSpan></b> {this.state.numPeers}{' '}
        <b><I18nSpan en="Progress">:</I18nSpan></b> {Math.min(100 * this.state.progress || 0, 100).toFixed(1)}%{' '}
        <b><I18nSpan en="Download speed">:</I18nSpan></b> {prettierBytes(this.state.downloadSpeed || 0)}/s{' '}
        <b><I18nSpan en="Upload speed">:</I18nSpan></b> {prettierBytes(this.state.uploadSpeed || 0)}/s
      </span>;
  }
}
export { AudioDweb, VideoDweb, WebTorrentStats };
