//This has been tested on IAUX & should be moveable to IAUX just by switching the commented headers below -
//IAUX version
//import React from 'react'
//import IAReactComponent from 'iacomponents/experimental/IAReactComponent';
//import PropTypes from 'prop-types'
//!IAUX version
import React from "../ReactFake";
import IAReactComponent from './IAReactComponent';

export default class TileImage extends IAReactComponent { //TODO-DWEB this should probably be extens IAReactComponent
    /* Used in IAUX, but not in ReactFake
    static propTypes = {
        identifier: PropTypes.string.isRequired,
        member: PropTypes.object, // Unused currently
        className: PropTypes.string, // Not sure what type this is
        imgname: PropTypes.string,
    };
    */
    constructor(props)
    {
        super(props);
        this.state = { }
        this.loadImg = (enclosingspan) => // Defined as a closure so that can access identifier
            DwebArchive.ReactFake.p_loadImg(enclosingspan, "__ia_thumb.jpg", `/services/img/${props.identifier}`) ////Intentionally no host so ReactFake will process
    }


    render() {
        if (typeof DwebArchive !== "undefined") {
            //TODO-DWEB build img processing from ReactFake into tile-tile-image and ParentTileImg but wait till have non-tile images as well
            const self = this;
            return <span className={this.props.className} imgname={this.props.imgname} ref={this.loadImg}></span>
        } else {
            return <img src={`https://archive.org/services/img/${this.identifier}`}/>;
        }
    }
}
