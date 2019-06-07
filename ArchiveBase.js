import React from './ReactFake';
//Not needed on client - kept so script can run in both cases
//import ReactDOMServer from 'react-dom/server';
//Next line is for client, not needed on server but doesnt hurt
//import ReactDOM from 'react-dom';
import {AJS_on_dom_loaded} from './Util';
import ArchiveItem from '@internetarchive/dweb-archivecontroller/ArchiveItem';

export default class ArchiveBase extends ArchiveItem {
    /*
    Base class for Archive UI application - base of Details = which includes single element items and Search which includes both searches and collections (which are actually items).
    ArchiveBase
    - Details
    - - AV
    - - Image
    - - Text
    - - Software (not implemented)
    - Search
    - - Home
    - - Collection
    Nav - knows about all the classes (includes factory() but doesnt subclass them
    Util - just some utility functions
    Tile - elements on a Search - each is a ArchiveMember
    ReactFake - spoofs methods of React as otherwise hard to do onclick etc if use real React (note archive.min still uses react a little)

    Fields:
    item    Metadata for item, undefined for a search.
    items   Metadata for items found if the item is a Collection,
    itemtype    Schema.org for this eg. "http://schema.org/TextDigitalDocument"
    query   query part of search to run (Search|Collection|Home only)
     */
    constructor({itemid = undefined, metaapi = undefined}={}) {
        super({itemid, metaapi});
    }
    theatreIaWrap() {
    }
    preprocessDescription(description) {
        // Now catch some things that often appear in descriptions because it assumes running on archive page e.g. /server/commute/commute.jpg on "commute"
        // And handle multivalue (array) descriptions by concatenating with <br/>

        return  !description ? description
                : (Array.isArray(description) ? description.join('<br/>') : description)
                .replace('\n','<br/>')
                .replace(/src=(['"])http:\/\/www.archive.org\//gi, 'src=$1'+ React._config().root + '/') // src="/  absolute urls
                .replace(/src=(['"])\//gi, 'src=$1'+ React._config().root + '/'); // src="/  absolute urls

    }

    cherModal(type) {
        return(
            <div id="cher-modal" className="modal fade" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content" style="padding:10px;">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span
                                    class="iconochive-remove-circle" aria-hidden="true"></span><span class="sr-only">remove-circle</span>
                            </button>
                            <h3 class="modal-title">Share or Embed This {(type === "collection") ? "Collection" : "Item"}</h3>
                        </div>{/*--/.modal-header--*/}
                        <div id="cher-body">
                            {this.sharing()}
                            {(type in ["image","audio","video"]) ? this.embed() : undefined }
                            {(type in ["image","audio","video"]) ? this.embedWordpress() : undefined }
                            {(type in ["image","audio","video"]) ? this.embedAdvanced(type) : undefined }
                        </div>{/*--/#cher-body--*/}
                    </div>{/*--/.modal-content--*/}
                </div>{/*--/.modal-dialog--*/}
            </div>
        );
    }



    sharing() {
        //Common text across Image and Text and possibly other subclasses
        let metadata = this.metadata; // Shortcut as used a lot
        let itemid = metadata.identifier; // Shortcut as used a lot
        let detailsURL = `https://archive.org/details/${itemid}`; // Note this should remain as pointing at details/itemid since its only used in sharing - FB, Twitter etc
        let sharingText =   `${metadata.title} : ${(metadata.creator || []).join(', ')}`; //String used
        let sharingTextUriEncoded = encodeURIComponent(sharingText);

        return (
            <div style={{textAlign: "center", margin: "50px auto"}}>
                <div className="topinblock">
                    <div id="sharer">
                        <a href={`https://twitter.com/intent/tweet?url=${detailsURL}&amp;via=internetarchive&amp;text=${sharingTextUriEncoded}+%3A+Free+Download+%26+Streaming+%3A+Internet+Archive`}
                           target="_blank">
                            <div className="sharee iconochive-twitter" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Twitter"></div>
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${detailsURL}`}
                           target="_blank">
                            <div className="sharee iconochive-facebook" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Facebook"></div>
                        </a>
                        <a href={`https://plus.google.com/share?url=${detailsURL}`}
                           target="_blank">
                            <div className="sharee iconochive-googleplus" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Google+"></div>
                        </a>
                        <a href={`http://www.reddit.com/submit?url=${detailsURL}&amp;title=${sharingTextUriEncoded}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                           target="_blank">
                            <div className="sharee iconochive-reddit" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Reddit"></div>
                        </a>
                        <a href={`https://www.tumblr.com/share/video?embed=%3Ciframe+width%3D%22640%22+height%3D%22480%22+frameborder%3D%220%22+allowfullscreen+src%3D%22https%3A%2F%2Farchive.org%2Fembed%2F%22+webkitallowfullscreen%3D%22true%22+mozallowfullscreen%3D%22true%22%26gt%3B%26lt%3B%2Fiframe%3E&;name=${itemid}+%3A+${(metadata.creator || []).join(', ')}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                           target="_blank">
                            <div className="sharee iconochive-tumblr" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Tumblr"></div>
                        </a>
                        <a href={`http://www.pinterest.com/pin/create/button/?url=${detailsURL}&amp;description=${sharingTextUriEncoded}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                           target="_blank">
                            <div className="sharee iconochive-pinterest" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share to Pinterest"></div>
                        </a>
                        <a href={`https://archive.org/pop/editor.html?initialMedia=${detailsURL}`}
                           target="_blank">
                            <div class="sharee iconochive-popcorn" data-toggle="tooltip"
                                 data-placement="bottom" title="Share to Popcorn Maker"></div>
                        </a>
                        <a href={`mailto:?body=${detailsURL}&amp;subject=${sharingText} : Free Download &amp; Streaming : Internet Archive`}>
                            <div className="sharee iconochive-email" data-toggle="tooltip"
                                 data-placement="bottom" title=""
                                 data-original-title="Share via email"></div>
                        </a>
                    </div>
                    <br clear="all" className="clearfix"/>
                </div>
            </div>

        );
    }

}

