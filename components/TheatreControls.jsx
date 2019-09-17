import React from "react";
import {IAReactComponent } from "@internetarchive/ia-components/dweb-index.js";
import { I8nStr } from "./Languages";

/* Theatre Control are little widgets used in each of the "theatre" displays,

 */
/**
 * <TheatreControlButton
 *  href=STRING || "#"
 *  title=EN-STRING
 *  id=STRING optional              Passed to A
 *  className="iconochive-xxx"      Passed to DIV
 *  onClick=function                Passed to A
 *  style=STYLEOBJECT               Passed to DIV
 * />
 */
class TheatreControlButton extends IAReactComponent {
    render() { return (
        <a href={this.props.href} id={this.props.id} onClick={this.props.onClick}>
          <div
            title={I8nStr(this.props.title)}
            data-toggle="tooltip" data-container="body" data-placement="left"
            className="this.props.className" style={this.props.style}></div>
      </a>

    )}
}

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
            { ["texts"].includes(this.props.mediatype) ? null :
              <TheatreControlButton href={this.state.streamUrl} title="fullscreen view" className="iconochive-fullscreen"/>
            }
            { !["texts"].includes(this.props.mediatype) ? null :
              //Href looks wrong
              <TheatreControlButton href={this.state.streamUrl} title="search inside" className="iconochive-search"/>
            }
            { !["movies"].includes(this.props.mediatype) ? null :
              <TheatreControlButton href="#" id="gofullscreen" title="fullscreen view" className="iconochive-fullscreen"/>
            }
            { !["audio","etree","movies"].includes(this.props.mediatype) ? null :
              <TheatreControlButton href="#" onClick={()=>AJS.flash_click(0)}
                                    title="Click to have player try flash first, then HTML5 second"
                                    className="iconochive-flash"/>
            }
            { !["audio","etree","movies"].includes(this.props.mediatype) ? null :
              <TheatreControlButton href="#" onClick={AJS.mute_click}
                                    title="sound is on.  click to mute sound."
                                    className="iconochive-unmute"/>
            }
            { !["audio","etree","movies"].includes(this.props.mediatype) ? null :
              <TheatreControlButton href="#" onClick={AJS.mute_click}
                                    title="sound is off.  click for sound."
                                    style={{display:"none"}}
                                    className="iconochive-mute"/>
            }
        </div>
    )}
}
