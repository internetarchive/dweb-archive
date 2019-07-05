import Search from "./Search";

import React from './ReactFake';

import Details from './Details';
import TheatreControls from './components/TheatreControls';
import { ImageMainTheatre } from '@internetarchive/ia-components/dweb-index.js';
import { CherModal } from './components/CherModal';


export default class Image extends Details {
    constructor({itemid=undefined, metaapi=undefined, noCache=false}={}) {
        /*
        Construct an Image object before rendering it to a HTML page
        item = metadata from a metadata fetch
         */
        super({ itemid, metaapi, noCache});
        this.itemtype = "http://schema.org/VisualArtwork";
    }
    archive_setup_push() {
        archive_setup.push(function() {  // This is common to Text, AV and image - though some have stuff before this and some a
            AJS.theatresize();
            AJS.carouselsize('#ia-carousel', true);
        });
        super.archive_setup_push(); // On example images the theatre & carosel came before the parts common to AV, Image and Text
    }

    theatreIaWrap() {
        const metadata = this.metadata;
        const itemid = metadata.identifier; // Shortcut as used a lot
        const mainArchiveFile = this.playableFile("image"); // Can be undefined if none included
        const detailsURL = `https://archive.org/details/${itemid}`; //This is probably correct to remain pointed at archive.org since used as an itemprop
        const embedurl = `https://archive.org/embed/${itemid}`; //This is probably correct to remain pointed at archive.org since passed to social media
        return (
            <div id="theatre-ia-wrap" className="container container-ia width-max  resized" style={{height: "600px"}}>
                <link itemProp="url" href={detailsURL}/>

                <link itemProp="thumbnailUrl" href="https://archive.org/services/img/{itemid}"/>{/*OK for direct link since itemprop*/}

                { this.files.filter((af)=> af.metadata.source !== "metadata").map((af) => ( //OK for direct link since itemprop
                    <link itemProp="associatedMedia" href={`https://archive.org/download/${itemid}/${af.metadata.name}`} key={`${itemid}/${af.metadata.name}`}/>
                )) }

                <h1 className="sr-only">{metadata.title}</h1>
                <h2 className="sr-only">Item Preview</h2>

                <div id="theatre-ia" className="container">
                    <div className="row">
                        <div className="xs-col-12">
                            <TheatreControls identifier={itemid} mediatype={this.metadata.mediatype}/>

                { mainArchiveFile ? (
                  // TODO only partially done
                  <ImageMainTheatre alt="item image #1" source={mainArchiveFile} caption={mainArchiveFile.metadata.name }/>
                ) : (
                            <div className="row" style={{color:"white"}}>
                                <div className="col-md-10 col-md-offset-1 no-preview">
                                    <p className="theatre-title">There Is No Preview Available For This Item</p>
                                    <p>
                                        This item does not appear to have any files that can be experienced on Archive.org
                                        <br/><span className="hidden-xs hidden-sm">Please download files in this item to interact with them on your computer.</span><br/>
                                        <a className="show-all" href={`https://archive.org/download/${itemid}`} target="_blank">Show all files</a>{/*TODO-DETAILS-FILE should handle download of collection*/}
                                    </p>
                                </div>
                            </div>
                ) }
                            {/* Script tags moved into the JS*/}
                            <div id="webtorrentStats" style="color: white; text-align: center;"></div>
                            <CherModal identifier={this.itemid} creator={this.metadata.creator} mediatype={this.metadata.mediatype} title={this.metadata.title}/>
                        </div>{/*--/.xs-col-12*/}
                    </div>{/*--/.row*/}

                </div>{/*--#theatre-ia*/}
                <div id="flag-overlay" className="center-area ">
                </div>
            </div>
            )
    };

}
