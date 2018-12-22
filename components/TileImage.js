//This has been tested on IAUX & should be moveable to IAUX just by switching the commented headers below -
//IAUX version
//import React from 'react'
//import IAReactComponent from 'iacomponents/experimental/IAReactComponent';
//import PropTypes from 'prop-types'
//!IAUX version
import React from "../ReactFake";
import IAReactComponent from './IAReactComponent';

export default class TileImage extends IAReactComponent {
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
        this.state = { };
        // loadImg is only called in the ReactFake case, not in the "real" React.
        this.loadImg = (enclosingspan) => // Defined as a closure so that can access identifier
            DwebArchive.ReactFake.p_loadImg(enclosingspan, "__ia_thumb.jpg", `/services/img/${props.identifier}`, (err, el) => {
                React.setAttributes(el, "img", { className: this.props.className, imgname: this.props.imgname});
                AJS.tiler(); // Make it redraw after img size known
            }) ////Intentionally no host so ReactFake will process
    }


    render() {
        if (typeof DwebArchive !== "undefined") {
            //TODO-DWEB build img processing from ReactFake into tile-tile-image and ParentTileImg but wait till have non-tile images as well
            return <span ref={this.loadImg}></span>
        } else {
            return <img src={`https://archive.org/services/img/${this.identifier}`} alt={this.identifier}/>;
        }
    }
}
