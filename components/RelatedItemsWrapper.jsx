import React from 'react';
import {RelatedItems} from '@internetarchive/ia-components/dweb-index.js';

//Note this component is a bridge from ArchiveBase.js to a IAUX React Component (that wants not to be dependent on archivecontroller,

export default class RelatedItemsWrapper extends React.Component {
  /**
   * <RelatedItemsWrapper
   *    identifier: IDENTIFIER
   *    members:    [ ARCHIVEMEMBER ]   (or similar objects)
   *    item:       ARCHIVEITEM         (essentially something that has a relatedItems({...}) method that can return [member*]
   *    noCache:    BOOL                True if should skip cache when loading (used by dweb-mirror)
   *    disconnected BOOL               True if browser cannot see archive.org
   * />
   * State:
   *    members:  [ARCHIVEMEMBER]       Set from props
   *    loading:  BOOL                  True when loading
   */
  constructor(props) {
    console.assert(props.item || props.members,"Must pass either item or members")
    super(props); //identifier, members, item
    this.state = {member: this.props.members}; // Maybe undefined, but has to be in .state so can change
    // called via ref=this.load when the component is loaded, triggers async load via API if .members undefined
    if (this.props.identifier && this.props.item && !this.state.members) {
      this.state = {loading: true};
      this.props.item.relatedItems({wantStream:false, wantMembers:true, noCache: this.props.noCache}, (err, members) => {
        if (!err) { // If there is an error then relatedItems() will have reported it, and can just ignore it here and not display
          this.setState({members: members, loading: false});
        }
      });
    }
  }
  fetchRelated(item) {
    this.setState({loading: true});
    item.relatedItems({wantStream:false, wantMembers:true, noCache: this.props.noCache}, (err, members) => {
      if (!err && (item === this.props.item)) {
        // If there is an error then relatedItems() will have reported it, and can just ignore it here and not display
        // Dont update if item has changed while relatedItems running
        this.setState({members: members, loading: false});
      }
    });
  }
  componentDidMount() {
    if (this.props.identifier && this.props.item && !this.state.members) {
      this.fetchRelated(this.props.item);
    }
  }
  componentDidUpdate(prevProps, unusedPrevState, unusedSnapshot) {
    if (this.props.item && (this.props.item !== prevProps.item) ) { // Item changed refetch
      this.fetchRelated(this.props.item);
    }
  }
  render() {
    return ((this.state.loading) ? null :
      // Static or asynchronously loaded members handled here
      <RelatedItems identifier={this.props.identifier} members={this.state.members} disconnected={this.props.disconnected} />
    );
  }
}
// Code review Mitra 2019-10-17
