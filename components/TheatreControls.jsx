import React from "react";
import {IAReactComponent } from "@internetarchive/ia-components/dweb-index.js";

/* Theatre Control are little widgets used in each of the "theatre" displays,

 */

export default class TheatreControls extends IAReactComponent {
    /* Used in IAUX, but not in ReactFake
    static propTypes = {
        identifier: PropTypes.string.isRequired,
        mediatype: PropTypes.string.isRequired,
     */
    constructor(props) {
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
            <a href="#" id="gofullscreen">
                <div data-toggle="tooltip" data-container="body" data-placement="left" className="iconochive-fullscreen"
                     title="fullscreen view"></div>
            </a>
            : undefined }
            { ["audio","etree","movies"].includes(this.props.mediatype) ?
                <a href="#" onClick={()=>AJS.flash_click(0)}>
                    <div data-toggle="tooltip" data-container="body" data-placement="left" className="iconochive-flash"
                         title="Click to have player try flash first, then HTML5 second"></div>
                </a>
            : undefined }
            { ["audio","etree","movies"].includes(this.props.mediatype) ?
                <a href="#" onClick={AJS.mute_click}>
                    <div data-toggle="tooltip" data-container="body" data-placement="left" className="iconochive-unmute"
                         title="sound is on.  click to mute sound."></div>
                </a>
            : undefined }
            { ["audio","etree","movies"].includes(this.props.mediatype) ?
                <a href="#" onClick={AJS.mute_click}>
                    <div data-toggle="tooltip" data-container="body" data-placement="left" className="iconochive-mute"
                         style={{display:"none"}} title="sound is off.  click for sound."></div>
                </a>
            : undefined }
        </div>
    )}
}
