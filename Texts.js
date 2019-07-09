import React from './ReactFake';

import Details from './Details'
import TheatreControls from './components/TheatreControls';
import BookReaderWrap from './components/BookReaderWrapper';
import { Carousel } from '@internetarchive/ia-components/dweb-index.js';
import { CarouselTheatre, BookReaderTheatre } from './components/Theatres';

export default class Texts extends Details {
    constructor({itemid=undefined, metaapi=undefined, page=undefined, noCache=false}={}) {
        super({ itemid, metaapi, noCache});
        this.itemtype="http://schema.org/TextDigitalDocument";
        this.page = page;
    }
    archive_setup_push() {
        super.archive_setup_push(); // On eample images the theatre & carosel came before the parts common to AV, Image and Text
        archive_setup.push(function(){ AJS.booksize(); });
    }

}
