
import React from 'react';
import ReactFake from '../ReactFake'; //TODO temporary till move p_loadStream to ReactSupport
import { ObjectFilter } from '@internetarchive/dweb-archivecontroller/Util.js';
import IAReactComponent from './IAReactComponent';
import { AnchorDownload } from '@internetarchive/ia-components/dweb-index.js';
import {config} from "../Util";

const debug = require('debug')('Audio Components');

/**
 * <AudioDweb
 *    EITHER
 *      source  Flexible dweb parameter include ArchiveFile, ArchiveMember, relative urls, dweb: names, and arrays of alternatives (see dweb-archive/ReactSupport)
 *    OR
 *      parameters to <Audio> tag
 * />
 *  Render an audio but fetching from Dweb if available
 */

class AudioDweb extends IAReactComponent {
  /** Audio that can, but doesnt have to be loaded via Dweb
   *
   * <AudioDweb
   *    EITHER source=  ArchiveFile
   *    OR src=URL
   * />
   */

  constructor(props) {
    super(props); //
    this.setState({
      notImgProps: ObjectFilter(this.props, (k, unusedV) => AudioDweb.specificParms.includes(k)),
      audioProps: ObjectFilter(this.props, (k, unusedV) => (!AudioDweb.specificParms.includes(k) && !['children'].includes(k)))
    });
  }

  loadStream() {

    if (this.audioelement && (this.lastsource !== this.props.source)) {
      this.lastsource = this.props.source;
      //TODO move p_loadStream to ReactSupport
      ReactFake.p_loadStream(this.audioelement, this.props.source, {
        name: this.props.source.metadata.name,
        preferredTransports: config.preferredAVtransports
      });  // Cues up asynchronously to load the video/audio tag (dont need cb as this does the work of cb)
    }
  }

  // TODO-IAUX see https://github.com/internetarchive/dweb-archive/issues/113 refactoring this
  loadcallable(audioelement) { // Defined as a closure so that can access identifier
    // TODO this may move to a method on the source (e.g. on ArchiveFile)
    this.audioelement = audioelement;
    this.loadStream();
  }

  render() {
    // noinspection HtmlRequiredAltAttribute
    this.loadStream();
    return (
      typeof DwebArchive !== 'undefined'
        ? <audio ref={this.load} data-trackname={this.props.source.metadata.name} {...this.state.audioProps} />
        : <audio {...this.state.audioProps} src={this.props.src} />
    );
  }
}
// Parameters not to pass down to audio tag automatically
AudioDweb.specificParms = ['src', 'source']; // Known in use includes:

export { AudioDweb};

