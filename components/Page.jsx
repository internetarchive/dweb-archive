import React from "react";
import {ComboSearchWrap} from "./SearchPage";
import {DetailsWork, DetailsMessage} from "./DetailsPage";
import {SaveModal} from "./SaveModal";
import {IAReactComponent} from "@internetarchive/ia-components/dweb-index.js";
import {transportStatusAndProps} from "../ReactSupport";

const mediatype2Schema = { // See DUPLICATEDCODEMEDIATYPE2SCHEMA
  audio: "AudioObject",
  etree: "AudioObject",
  image: "VisualArtwork",
  movies: "VideoObject",
  texts: "TextDigitalDocument"
};


class Page extends IAReactComponent {
  /**
   * <Page
   *    item=ARCHIVEITEM
   *    message=STRING      // If present display a message instead of an item
   * />
   */

  constructor(props) {
    super(props); //  item, message
    // TODO-DWEBNAV need to tell Transports to set this status when changes
    // Retrieve information from the gateway about its state, for passing and parameterizing the UI.
    this.state.statuses = {};
    transportStatusAndProps((err, statuses) => { // { transportStatuses, mirror2gateway, disconnected, directories }
      if (!err) {
        this.setState({statuses}); // disconnected etc
      }
    })
  }


  render() {
    const item = this.props.item;
    const identifier = item && item.itemid;
    const metadata = item && item.metadata;
    const mediatype = metadata && metadata.mediatype;
    const isSearch = // See DUPLICATEDCODEISSEARCH
      (!metadata && !this.props.message)
      || item.query
      || ["collection", "account"].includes(mediatype)
      || ["home", "local", "settings"].includes(identifier); //SEE-OTHER-ADD-SPECIAL-PAGE

    const itemType = metadata ? mediatype2Schema[mediatype] : undefined;
    return (
      // TODO-FAKEREACT The outer Div is one level up to keep ReactFake happy
      /*<div id="wrap"
           itemScope={typeof itemType !== "undefined"}
           itemType={itemType ? ("http://schema.org/" + itemType) : undefined}>
        */
      <>
        { this.props.message
          ?
            <DetailsMessage item={item}
                            identifier={identifier}
                            message={this.props.message}
                            statuses={this.state.statuses} />
          : isSearch
          ?
            <ComboSearchWrap item={item} statuses={this.state.statuses}/>
          :
            <DetailsWork
              item={item}
              metadata={metadata}
              files={item && item.files}
              identifier={identifier}
              subtype={metadata && (["texts"].includes(mediatype)) ? item.subtype() : undefined}
              poster={(metadata && ["movies"].includes(mediatype))
                ? item.videoThumbnailFile().httpUrl()
                : (["audio", "etree"].includes(mediatype))
                  ? item.thumbnailFile()
                  : undefined}
              source={metadata && ["image"].includes(mediatype) ? item.playableFile("image") : undefined}
              files_count={item && item.files_count}
              reviews={item && item.reviews}
              collection_titles={item && item.collection_titles}
              description={metadata ? item.preprocessDescription(metadata.description) : undefined}
              page={item && item.page}
              noCache={item && item.noCache}
              playlist={item && item.playlist}
              canSave={true}
              download={item && item.download}
              statuses={this.state.statuses}
            />
        }
        <SaveModal identifier={identifier} directories={this.state.statuses.directories}/>
      </>
      /*</div>*/
    );
  }
}
export { Page };
