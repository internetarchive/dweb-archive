import { stringify } from '@stratumn/canonicaljson';
// Other Archive Repos
import ArchiveItem from '@internetarchive/dweb-archivecontroller/ArchiveItem';
// This repo
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactConfig } from './ReactSupport';
import {AJS_on_dom_loaded} from './Util';
import {Page} from "./components/Page";



// See other almost DUPLICATEDCODE#003 (iaux and dweb-archive)
function _onefield(key, value) {
  return Array.isArray(value)
    ? value.map(v => _onefield(key, v)).join(' OR ')
    // This next line uses stringify instead of toString() because we want  '"abc"' and '1' i.e. quotes if its a string
    : (`${key}:${stringify(value)}`);
}

function queryFrom(query) {
  // Turn query as object into a viable query string for a Url (but not yet urlencoded)
  return Object.entries(query).map(kv => _onefield(kv[0], kv[1])).join(' AND '); // k1:v1 AND k2:v2
}
// End of DUPLICATEDCODE#0003
const searchConfig = {
  rows: 30,  // How many to retrieve per page, smaller numbers load quicker, but then scroll down will have to get next page
};

export default class ArchiveBase extends ArchiveItem {
  /**
   * Subclass of ArchiveItem that can also handle a search and other parameterisation of display
   * Fields:
   *
   */
  constructor({ and='', download=false, itemid = undefined, message=undefined, metaapi = undefined, noCache=false, page=1,
                query=undefined, rows=searchConfig.rows, sort=[]}={}) {
    super({itemid, metaapi, sort});
    this.and = and;
    this.download = download; // True if want download directory
    this.noCache= noCache;
    this.page = page;
    this.query = (typeof(query) === "object")
      ? queryFrom(query)  // form { creator: "Foo bar" ... }
      : query ; // Note this should be an UNUUENCODED query  or an object
    this.rows= rows;
    this.state = {}; // This will be automatic when moves to React
    this.message = message;
  }

}

