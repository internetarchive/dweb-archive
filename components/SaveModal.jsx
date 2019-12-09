/* global DwebTransports */
import React from 'react';
import {I18nSpan, I18nStr, I18nIcon} from '@internetarchive/ia-components/dweb-index';
const debug = require('debug')('SaveModal');

/**
 * <SaveDirectory
 *    identifier=IDENTIFIER  to save
 *    OR
 *    query=string to save e.g. "bananas" or "uploader:foo"
 *    name=PATH             to save in
 *    closeOnClick="#save-modal"
 * />
 * An element in a SaveModal, representing one possible target directory
 * Behavior: onClicked will submit a URL that causes the gateway to save the item to the directory specified.
 *
 * state {
 *   url: the full URL to be submitted   MIRROR/admin/crawl/add/IDENTIFIER?copyDirectory=PATH
 * }
 */
class SaveDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    //state change safe since the SaveDirectory is rebuilt each time its key changes (which includes identifier), so catches new identifiers
    const url = new URL('/admin/crawl/add', DwebArchive.mirror)
    url.searchParams.append("copyDirectory", this.props.name);
    ["query", "identifier"].forEach( k => { if (this.props[k]) url.searchParams.set(k, this.props[k]); }); // maybe add search and related here in future
    this.state = {url: url.href};
  }

  onClick(ev) {
    // noinspection JSIgnoredPromiseFromCall
    DwebTransports.httptools.p_GET(this.state.url, {}, (err, unusedInfo) => {
      // Gets back info, but not currently using
      if (err) {
        debug('Failed to start a crawl for %s to %s', this.props.identifier, this.props.name);
      }
    });
    /* Pulled from archive.js modal_go as seems no combination of flags can trigger this on an action */
    const selector = this.props.closeOnClick;
    $(selector).on('hidden.bs.modal', () => {
      //$(selector).remove();
      $('body').removeClass('blurry'); //TODO- body is not being set as blurry when modal shown
    });
    $(selector).modal('hide');
    ev.preventDefault(); // Prevent it going to the anchor (equivalent to "return false" in non-React
  }
  render() {
    return (
       <a href={this.state.url}
         target="_blank" rel="noopener noreferrer"
         onClick={this.onClick}>
        <span>{this.props.name}</span>
        {/* unclear if next is used, copied from cherModal buttons*/}
        <div className="savee" data-toggle="tooltip" data-placement="bottom" title={`${I18nStr("Save to")} ${this.props.name}`}
             data-original-title={this.props.name}></div>
      </a>
  ); }

}
/**
 * <SaveModal
 *    EITHER identifier=IDENTIFIER   Item to save
 *    OR query=string eg. banana or uploader:foo
 *    directories=[string*]   Array of possible directories to save in
 *    mediatype=string        From metadata.mediatype || "search"
 * />
 * Behavior: When the Save button is clicked, this is displayed and allows user to choose between different directories to save in.
 */

class SaveModal extends React.Component {
  render() {
    return ( !(this.props.directories && (this.props.identifier || this.props.query)) ? null : // disable until directories loaded in props and have an identifier
      <div id="save-modal" className="modal fade" role="dialog" aria-hidden="true">{/*TODO-SAVEUSB check styles was cher-modal*/}
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{padding:"10px"}}>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><I18nIcon className="iconochive-remove-circle" en="remove-circle"/>
              </button>
              <h3 className="modal-title"><I18nSpan en="Save this"/> <I18nSpan en={(this.props.mediatype === "collection") ? "Collection" : (this.props.mediatype === "search") ? "Search" : "Item"}/></h3>
            </div>
            <div id="save-body">
              <div style={{textAlign: "center", margin: "50px auto"}}>
                <div className="topinblock">
                  <div id="saver">{/*TODO-SAVEUSB check styles was sharer*/}
                    { this.props.directories.map((s) =>
                      <SaveDirectory key={`${this.props.identifier || this.props.query} ${s}`} identifier={this.props.identifier} query={this.props.query} name={s} closeOnClick="#save-modal"/>
                    )}
                  </div>
                  <br clear="all" className="clearfix"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { SaveModal };
// Code review 2019-10-07

