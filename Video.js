import React from './ReactFake';

import AV from './AV'
import {gateway, gatewayServer} from '@internetarchive/dweb-archivecontroller/Util';
import TheatreControls from './components/TheatreControls';

export default class Video extends AV {
    constructor({itemid=undefined, metaapi=undefined, noCache=false}={}) {
        super({ itemid, metaapi, noCache});
        this.itemtype = "http://schema.org/VideoObject";
    }
    setupPlaylist() {
        super.setupPlaylist("video");  // Setup this.playlist
    }

    theatreIaWrap() {
        const itemid = this.itemid;
        const detailsurl = `https://archive.org/details/${itemid}`; // OK to be direct url since its an itemprop
        const title = this.metadata.title;
        // The videothumbnailurl is intentionally a direct Http link as its intended only for search engines etc
        // Preference is 2nd thumbnail (first is usually black-sreen) in .thumbs/ directory (e.g. for "commute"); if only one (e.g. stairs) use that.
        const videothumbnailurl = this.videoThumbnailFile().httpUrl();
            //let cfg  = {"aspectratio": 4/3 }; // Old version in Traceys code which was missing other parts of cfg below
        const cfg =    {"start":0,"embed":null,"so":false,"autoplay":false,"width":0,"height":0,"list_height":0,"audio":false,
            "responsive":true,"flash":false, "hide_list":true,
            "identifier": this.itemid,
            "collection": this.metadata.collection[0],
        };
        /*
        [{"title":"commute","orig":"commute.avi","image":"/download/commute/commute.thumbs%2Fcommute_000005.jpg",
            "duration":"115.61",
            "sources":[
                {"file":"/download/commute/commute.mp4","type":"mp4","height":"480", "width":"640","label":"480p"},
                {"file":"/download/commute/commute.ogv","type":"ogg","height":"304","width":"400","label":"304p"}],
            "tracks":[{"file":"https://archive.org/stream/commute/commute.thumbs/commute_000005.jpg&vtt=vtt.vtt","kind":"thumbnails"}]}],
        */
        this.setupPlaylist();   // Creates this.playlist
        const playing = this.playlist[0];
        const source = playing.sources[0];
        const af = source.urls;     // An ArchiveFile
        const contenturl = `${gatewayServer()}${gateway.urlDownload}/${itemid}/${source.name}`;
        const embedurl = `${gatewayServer()}${gateway.urlDownload}/${itemid}/${playing.orig}`;
        const schemacontentlength = `PT0M${parseInt(playing.duration)}S`;
        return (
            <div id="theatre-ia-wrap" class="container container-ia width-max ">
                <link itemprop="url" href={detailsurl}/>
                <link itemprop="thumbnailUrl" href={videothumbnailurl} />
                <link itemprop="contentUrl" href={contenturl} />
                <link itemprop="embedUrl" href={embedurl} />
                <meta itemprop="duration" content={schemacontentlength} />
                <h1 class="sr-only">{title}</h1>
                <h2 class="sr-only">Movies Preview</h2>

                <div id="theatre-ia" class="container">
                    <div class="row">
                        <div class="xs-col-12">
                            <TheatreControls identifier={itemid} mediatype={this.metadata.mediatype}/>
                            <div id="videoContainerX" style="text-align: center;">
                                {/* This videothumbnailurl is http since if getting decentralized there is little value compared to loading video itself */}
                                <video id="streamContainer" src={af} poster={videothumbnailurl} controls></video>
                            </div>
                            <div id="webtorrentStats" style="color: white; text-align: center;"></div>
                            {this.cherModal("video")}
                        </div> {/*--/.xs-col-12--*/}
                    </div>{/*--/.row--*/}
                </div>
                <div id="flag-overlay" class="center-area ">
                </div>
            {/*--//.container-ia--*/}</div>
        );
    }
}
