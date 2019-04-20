import React from "../ReactFake";
import IAFakeReactComponent from './IAFakeReactComponent';

/* Theatre Control are little widgets used in each of the "theatre" displays,

 */

//TODO - check this is same for things other than Texts.BookReader and if so use in those files, if not then parameterize or subclass

export default class TheatreControls extends IAFakeReactComponent {
    /* Used in IAUX, but not in ReactFake
    static propTypes = {
        identifier: PropTypes.string.isRequired,
        mediatype: PropTypes.string.isRequired,
     */
    constructor(props) { //TODO-BOOK maybe pass in ArchiveItem
        super(props);
        this.state.streamUrl = `https://archive.org/stream/${this.props.identifier}/${this.props.identifier}`;  //TODO-@IA figure out why stream urls have second component same as first, not a filename - asked Tracey in slack 2019-02-26 check multi-book items
    }

    render() { return (
        // Code as cut and paste from https://archive.org/details/unitednov65unit/page/n5 on 2019-02-24
        <div id="theatre-controls">
            { ["texts"].includes(this.props.mediatype) ?
                <a href={this.state.streamUrl}>
                    <div
                        title="fullscreen view"
                        data-toggle="tooltip" data-container="body" data-placement="left"
                        className="iconochive-fullscreen"></div>
                </a>
            : undefined }
            { ["texts"].includes(this.props.mediatype) ?
                <a href={this.state.streamUrl}>
                    <div
                        title="search inside"
                        data-toggle="tooltip" data-container="body" data-placement="left"
                        className="iconochive-search"></div>
                </a>
            : undefined }
            { ["movies"].includes(this.props.mediatype) ?
            <a href="#" id="gofullscreen" onClick="">
                <div data-toggle="tooltip" data-container="body" data-placement="left" className="iconochive-fullscreen"
                     title="fullscreen view"></div>
            </a>
            : undefined }
            { ["audio","etree","movies"].includes(this.props.mediatype) ?
                <a href="#" onClick="return AJS.flash_click(0)">
                    <div data-toggle="tooltip" data-container="body" data-placement="left" className="iconochive-flash"
                         title="Click to have player try flash first, then HTML5 second"></div>
                </a>
            : undefined }
            { ["audio","etree","movies"].includes(this.props.mediatype) ?
                <a href="#" onClick="return AJS.mute_click()">
                    <div data-toggle="tooltip" data-container="body" data-placement="left" className="iconochive-unmute"
                         title="sound is on.  click to mute sound."></div>
                </a>
            : undefined }
            { ["audio","etree","movies"].includes(this.props.mediatype) ?
                <a href="#" onClick="return AJS.mute_click()">
                    <div data-toggle="tooltip" data-container="body" data-placement="left" className="iconochive-mute"
                         style="display:none" title="sound is off.  click for sound."></div>
                </a>
            : undefined }
        </div>
    )}
}
