import React from 'react';
import IAReactComponent from './IAReactComponent';
import {DetailsAbout} from '@internetarchive/ia-components/dweb-index.js';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember.js";
import {ObjectMap} from "@internetarchive/dweb-archivecontroller/Util.js";

/*
Wrapper around DetailsAbout so that it can go back into IAUX and this can be called by Details.js
This split is needed because Isa prefers not to have functionality like queries inside smaller components,
but the Details.js.wrap doesnt rerender so need something inside that does.
 */
export default class DetailsAboutWrapper extends IAReactComponent {
  constructor(props) { //browser2archive
    super(props); //  metadata description files files_count collection_titles
    this.state.collection_titles = (typeof this.props.collection_titles === 'undefined') ? {} : this.props.collection_titles;
    this.state.expansionTried = false;
  }

  loadcallable(unused_enclosingElement) {
    // expand a list of collections into a list of titles either through collection_titles if supplied (e.g. from dweb gateway) or via a new Search query
    const {collection} = this.props.metadata;
    if (!this.state.expansionTried) {
      this.state.expansionTried = true;
      ArchiveMember.expand(collection.filter(k => !this.state.collection_titles[k]), (err, res) => { // res = { id: AS(id) }
        const collection_titles = Object.assign({}, this.state.collection_titles, ObjectMap(res, (k, v) => [k, v.title]));
        this.setState({ collection_titles }); // Cause a rerender
      });
    }
  }

  render() {
    return (
      <DetailsAbout metadata={this.props.metadata} description={this.props.description} files={this.props.files}
                    files_count={this.props.files_count} collection_titles={this.state.collection_titles}
                    ref="this.load" browser2archive={this.props.browser2archive}/>
    );
  }
}