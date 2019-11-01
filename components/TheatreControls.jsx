import React from "react";
import {I18nStr } from '@internetarchive/ia-components/dweb-index';

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
class TheatreControlButton extends React.Component {
    render() { return (
        <a href={this.props.href} id={this.props.id} onClick={this.props.onClick}>
          <div
            title={I18nStr(this.props.title)}
            data-toggle="tooltip" data-container="body" data-placement="left"
            className={this.props.className} style={this.props.style} />
      </a>

    )}
}

/**
 * <TheatreControls
 *    identifier IDENTIFIER
 *    mediatype: STRING (audio, video etc)
 * />
 *
 * Render a set of control buttons for a theatre
 */
export default class TheatreControls extends React.Component {
    render() {
      const streamUrl = `https://archive.org/stream/${this.props.identifier}/${this.props.identifier}`;
      return (
        // Code as cut and paste from https://archive.org/details/unitednov65unit/page/n5 on 2019-02-24
        <div id="theatre-controls">
          { ["texts"].includes(this.props.mediatype) ? null :
            <TheatreControlButton href={streamUrl} title="fullscreen view" className="iconochive-fullscreen"/>
          }
          { !["texts"].includes(this.props.mediatype) ? null :
            // TODO this href looks wrong
            <TheatreControlButton href={streamUrl} title="search inside" className="iconochive-search"/>
          }
          { !["movies"].includes(this.props.mediatype) ? null :
            <TheatreControlButton href="#" id="gofullscreen" title="fullscreen view" className="iconochive-fullscreen"/>
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
// Code Review 2019-11-01 by Mitra - still needs HTML check, esp TODO above, and migrate to IAUX
