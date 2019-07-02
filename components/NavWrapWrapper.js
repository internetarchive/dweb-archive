import React from 'react';
import waterfall from 'async/waterfall';
import IAReactComponent from './IAReactComponent';
import {NavWrap} from '@internetarchive/ia-components/dweb-index.js';
import {gatewayServer} from "@internetarchive/dweb-archivecontroller/Util";

/**
 * Wrapper around NavWrap to pass it status so that IAUX component knows less about Dweb
 * This split is needed because Isa prefers not to have functionality like queries inside smaller components,
 * but the Details.js.wrap doesnt rerender so need something inside that does.
 *
 * <NavWrapWrapper item=ARCHIVEITEM />
 *
 * Behavior - retrieves and sets statuses
 *
 * Rendering - See NavWrap, this is the top section of all the pages.
 */

export default class NavWrapWrapper extends IAReactComponent {
  constructor(props) {
    super(props); //  item
    // TODO-DWEBNAV need to tell Transports to set this status when changes
    // TODO-IAUX as this component gets bundled into others, move the Wrapper up and note DetailsAboutWrapper needs these as well
    transportStatusAndProps((err, res)=> { // { transportStatuses, mirror2gateway, browser2archive }
      if (!err) {
        this.setState(res);
      }
    })
  }

  render() {
    return (
      <NavWrap item={this.props.item}
               transportStatuses={this.state.transportStatuses}
               mirror2gateway={this.state.mirror2gateway}
               browser2archive={this.state.browser2archive}
      />
    );
  }
}

export { NavWrapWrapper };
