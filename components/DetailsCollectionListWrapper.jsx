import React from 'react';
import IAReactComponent from './IAReactComponent';
import {DetailsCollectionList} from '@internetarchive/ia-components/index.js';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember.js";
import {Objectmap} from "@internetarchive/dweb-archivecontroller/Util.js";

/*
Wrapper around DetailsCollectionList so that it can go back into IAUX and this can be called by Details.js
This split is needed because Isa prefers not to have functionality like queries inside smaller components,
but the Details.js.wrrap doesnt rerender so need something inside that does.
 */
export default class DetailsCollectionListWrapper extends IAReactComponent {
  constructor(props) {
    super(props); // collections
    this.state.collectionTitles = (typeof this.props.collectionTitles === 'undefined') ? {} : this.props.collectionTitles;
    this.state.expansionTried = false;
  }

  loadcallable(unused_enclosingElement) {
    // expand a list of collections into a list of titles either through collectionTitles if supplied (e.g. from dweb gateway) or via a new Search query
    const {collections } = this.props;
    if (!this.state.expansionTried) {
      this.state.expansionTried = true;
      ArchiveMember.expand(collections.filter(k => !this.state.collectionTitles[k]), (err, res) => { // res = { id: AS(id) }
        const collectionTitles = Object.assign({}, this.state.collectionTitles, Objectmap(res, (k, v) => [k, v.title]));
        this.setState({ collectionTitles }); // Cause a rerender
      });
    }
  }

  render() {
    return (
        <DetailsCollectionList collections={this.props.collections} ref="this.load" collectionTitles={this.state.collectionTitles} />
    );
  }
}
