const debug = require('debug')('dweb-archive:TileGrid');
//Note this component is only tested on Real React it may or may not work in ReactFake
import React from 'react';
import IAReactComponent from '../IAReactComponent'; // Encapsulates differences between dweb-archive/ReactFake and iaux/React
import TileComponent from '../tiles/TileComponent';
//import PropTypes from 'prop-types' // Not currently used by IAUX

/* This is the inner part of a tile grid, see dweb-archive/Search.js for an example of its use

   It is past a list of members that the Item has already retrieved from a search or collection etc
 */

class TileGrid extends IAReactComponent {
    constructor(props) {
        super(props) //members
        console.assert(props.members)
    }

    render() {
        return (
            <div className="results" id="appendTiles">
                <div className="item-ia mobile-header hidden-tiles" data-id="__mobile_header__">
                    <div className="views C C1"><span className="iconochive-eye" aria-hidden="true"></span><span
                        className="sr-only">eye</span></div>
                    <div className="C234">
                        <div className="C C2">Title</div>
                        <div className="pubdate C C3">
                            <div>
                                <div>Date Archived</div>
                            </div>
                        </div>
                        <div className="by C C4">Creator</div>
                    </div>
                    <div className="C C5"></div>
                </div>
                {this.props.members.map(member => // Note rendering tiles is quick, its the fetch of the img (async) which is slow.
                    <TileComponent key={member.identifier} member={member}/>
                )}
            </div>
        );
    }
}
export {TileGrid}
