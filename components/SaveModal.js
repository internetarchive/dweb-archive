import React from 'react';
import IAReactComponent from './IAReactComponent';
import {gatewayServer} from '@internetarchive/dweb-archivecontroller/Util';
const debug = require('debug')('SaveModal');

/**
 */

class SaveDirectory extends IAReactComponent {
  constructor(props) {
    super(props);
    this.state.url = [gatewayServer(), 'admin/crawl/add', this.props.identifier].join('/')+"?copyDirectory="+this.props.name;
  }

  clickCallable(ev) {
    DwebTransports.httptools.p_GET(this.state.url, {}, (err, unusedInfo) => {
      // Gets back info, but not currently using
      if (err) {
        debug('Failed to start a crawl for %s to %s', this.props.identifier, this.props.name);
      }
    });
    /* Pulled from archive.js modal_go as seems no combination of flags can trigger this on an action */
    const selector = this.props.closeOnClick;
    $(selector).on('hidden.bs.modal', () => {
      $(selector).remove()
      $('body').removeClass('blurry')
    })
    $(selector).modal('hide');
  }
  render() { return (
    <a href={this.state.url}
       target="_blank" rel="noopener noreferrer"
       onClick={this.onClick}>
      <span>{this.props.name}</span>
      {/* unclear if next is used, copied from cherModal buttons*/}
      <div className="savee" data-toggle="tooltip" data-placement="bottom" title={`Save to ${this.props.name}`}
           data-original-title={this.props.name}></div>
    </a>
  ); }

}
class SaveModal extends IAReactComponent {
  /** Save to a disk
   *
   * <SaveModal identifier=string directories=[string*] />
   *
   */

  render() {
    return ( (! this.props.directories) ? null : // disable until directories loaded in props
      <div id="save-modal" className="modal fade" role="dialog" aria-hidden="true">{/*TODO-SAVEUSB check styles was cher-modal*/}
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{padding:"10px"}}>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span
                className="iconochive-remove-circle" aria-hidden="true"></span><span className="sr-only">remove-circle</span>
              </button>
              <h3 className="modal-title">Save this {(this.props.mediatype === "collection") ? "Collection" : "Item"}</h3>
            </div>
            <div id="save-body">
              <div style={{textAlign: "center", margin: "50px auto"}}>
                <div className="topinblock">
                  <div id="saver">{/*TODO-SAVEUSB check styles was sharer*/}
                    { this.props.directories.map((s,i) =>
                      <SaveDirectory key={i} identifier={this.props.identifier} name={s} closeOnClick="#save-modal"/>
                    )}
                  </div>
                  <br clear="all" className="clearfix"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); }
}

export { SaveModal };

