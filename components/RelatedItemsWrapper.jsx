//const debug = require('debug')('ia-components:RelatedItemsWrapper');
import React from 'react';
import IAReactComponent from './IAReactComponent'; // Encapsulates differences between dweb-archive/ReactFake and iaux/React
import {RelatedItems} from '@internetarchive/ia-components/index.js';

//Note this component is a bridge from Details.js to a IAUX React Component (that wants not to be dependent on archivecontroller,
//It won't work in FakeReact because it relies on setState to cause a rerender.

export default class RelatedItemsWrapper extends IAReactComponent {
  /* -- Not used with ReactFake or current IAUX yet
  static propTypes = {
      identifier: PropTypes.string,
      members:    PropTypes.array, // of ArchiveMembers or similar
      item:       ArchiveItem (essentially something that has a relatedItems({...}) method that can return [member*]
      noCache:    PropTypes.boolean // True if should skip cache when loading (used by dweb-mirror)
   */
  constructor(props) {
    console.assert(props.item || props.members,"Must pass either item or members")
    super(props); //identifier, members, item
    this.state.members = this.props.members; // Maybe undefined, but has to be in .state so can change
    // called via ref=this.load when the component is loaded, triggers async load via API if .members undefined
    if (this.props.identifier && this.props.item && !this.state.members) {
      this.props.item.relatedItems({wantStream:false, wantMembers:true, noCache: this.props.noCache}, (err, members) => {
        if (!err) { // If there is an error then fetch_json will have reported it, and can just ignore it here and not display
          this.setState({members: members});
        }
      });
    }
  }

  render() {
    return (
      // Static or asynchronously loaded members handled here
      <RelatedItems identifier={this.props.identifier} members={this.state.members} />
    );
  }
}

