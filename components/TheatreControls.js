//This has NOT been tested on IAUX but should be moveable to IAUX just by switching the commented headers below -
//IAUX version
//import React from 'react'
//import IAReactComponent from 'iacomponents/experimental/IAReactComponent';
//import PropTypes from 'prop-types'
//!IAUX version
import React from "../ReactFake";
import IAReactComponent from './IAReactComponent';

//TODO - check this is same for things other than Texts.BookReader and if so use in those files, if not then parameterize or subclass

export default class TheatreControls extends IAReactComponent {
    /* Used in IAUX, but not in ReactFake
    static propTypes = {
        identifier: PropTypes.string.isRequired,
    };
    */
    constructor(props) { //TODO-BOOK maybe pass in ArchiveItem
        super(props);
        this.state.streamUrl = `https://archive.org/stream/${this.itemid}/${this.itemid}`;  //TODO-@IA figure out why stream urls have second component same as first, not a filename - asked Tracey in slack 2019-02-26 check multi-book items
    }

    render() { return (
        // Code as cut and paste from https://archive.org/details/unitednov65unit/page/n5 on 2019-02-24
        <div id="theatre-controls">
            <a href={this.state.streamUrl}>
                <div
                    title="fullscreen view"
                    data-toggle="tooltip" data-container="body" data-placement="left"
                    className="iconochive-fullscreen"></div>
            </a>
            <a href={this.state.streamUrl}>
                <div
                    title="search inside"
                    data-toggle="tooltip" data-container="body" data-placement="left"
                    className="iconochive-search"></div>
            </a>
        </div>
    )}
}
