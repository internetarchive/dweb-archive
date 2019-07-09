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

}
