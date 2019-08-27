import React from 'react';
import { ObjectFilter } from '@internetarchive/dweb-archivecontroller/Util.js';
import { AnchorDownload, IAReactComponent } from '@internetarchive/ia-components/dweb-index.js';
import {config} from "../Util";
import {loadStream} from "../ReactSupport";

const debug = require('debug')('Video Components');

/**
 * This file provides wrapped Audio and Video components that can be driven from Dweb content -
 * Its similar to ImageDweb (in ia-components).
 * the source or src parameter is used to specify where to load content from, with other parameters passed alog
 */

class AVDweb extends IAReactComponent {
  /**
   *  Local Superclass of AudioDweb and VideoDweb as similar structure
   *
   *  Behavior (common to both)
   *  On Mount or on Update that changes source it retrieves a stream and loads it into the element
   */
  loadAV() {
    /* Load element from source */
    loadStream(this.avElement, this.props.source, {
      name: this.props.source.metadata.name,
      preferredTransports: config.preferredAVtransports
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /* Iff this update changed source then reload AV element with new source */
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
class AudioDweb extends AVDweb {
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


class VideoDweb extends AVDweb {
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

export { AudioDweb, VideoDweb};

