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
    waterfall([
      cb => DwebTransports.p_statuses(cb),      // e.g. [ { name: HTTP: status: 0 }* ]
      (transportStatuses,cb) => {
        const httpStatus = transportStatuses.find(s=> s.name==='HTTP');
        if (DwebArchive.mirror) {
          if (httpStatus) { httpStatus.name = "MIRROR"; }
        }
        if (!(DwebArchive.mirror && (httpStatus.status === 0))) {
          cb(null, {transportStatuses});
        } else {
          const infoUrl = [gatewayServer(), "info"].join('/');
          DwebTransports.httptools.p_GET(infoUrl, {}, cb)
        } // Note an error in contacting Mirror will skip to end and not update
      },
      (info, cb) => {
        this.setState({transportStatuses: info.transportStatuses}); // Now set to those of Mirror
      }], (err) => {});
  }

  render() {
    return (
      <NavWrap item={this.props.item} transportStatuses={this.state.transportStatuses} />
    );
  }
}

export { NavWrapWrapper };
