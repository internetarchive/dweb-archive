import React from 'react';
import { AudioPlayerWithYoutubeSpotify } from '@internetarchive/ia-components';
import { RawBookReaderResponse } from "@internetarchive/dweb-archivecontroller";

/**
 * <AlbumTheatre
 *  item=ARCHIVEITEM
 *  playFullIAAudio=BOOLEAN
 *  jwplayerPlaylist=PLAYLIST
 * />
 */
class AlbumTheatre extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {jsia: undefined}
  }

  // SEE-IDENTICAL-CODE-IN: BookReaderWrapper, AlbumTheatre
  fetchAndUpdateState() {
    // Cant be in constructor as new page or item wont call it, cant be in render as run too often, and cant be getDerivedStateFromProps as async
    this.props.item.fetch_bookreader({}, (err, ai) => { // Load Bookreader data async
      this.setState({jsia: RawBookReaderResponse.fromArchiveItem(this.props.item).cooked()});
    });
  }
  componentDidMount() {
    this.fetchAndUpdateState(); // Asynchronous
  }
  componentDidUpdate(prevProps, unusedPrevState, unusedSnapshot) {
    if (prevProps.item !== this.props.item) {
      fetchAndUpdateState(); // Asynchronous
    }
  }

  render() {
    if (DwebArchive.mirror) {
      this.props.item.server = DwebArchive.mirror;
      this.props.item.dir = "/download/" + this.props.item.metadata.identifier;
    }
    return (
      // This has a class theatre-ia at its top level
      <AudioPlayerWithYoutubeSpotify
        albumMetadata={this.props.item.exportMetadataAPI()}
        playFullIAAudio={this.props.playFullIAAudio}
        jwplayerPlaylist={this.props.item.playlist}
        linerNotes={this.state.jsia}
       />
    )
  }
}
export { AlbumTheatre }