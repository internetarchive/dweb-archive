import React from './ReactFake';

import Details from './Details'
import TheatreControls from './components/TheatreControls';
import BookReaderWrap from './components/BookReaderWrapper';
import { Carousel } from './components/Carousel';

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
    theatreIaWrap() {
        const metadata = this.metadata;
        const detailsURL = `https://archive.org/details/${this.itemid}`;  // Probably correct as archive.org/details since used as itemProp
        const imageURL = `https://archive.org/services/img/${this.itemid}`;  // itemprop so ok to leave
        //TODO-DETAILS-DWEB use alternative URLS via IPFS
        const isCarousel = this.itemid === "thetaleofpeterra14838gut"; //TODO-CAROUSEL just dummied for testing
        if (isCarousel) {
            archive_setup.push(function () {
                AJS.theatresize()
                AJS.carouselsize('#ia-carousel', true)
            });
        }
        return (
            <div id="theatre-ia-wrap" class="container container-ia width-max">
                <link itemprop="url" href={detailsURL} />

                <link itemprop="image" href={imageURL} />


                <h1 class="sr-only">{metadata.title}</h1>
                <h2 class="sr-only">Item Preview</h2>

                    <div id="theatre-ia" class="container">
                            <div class="row">
                                <div class="xs-col-12">
                                  { isCarousel
                                  ?
                                    <>
                                    <div id="theatre-controls"></div>
                                    <Carousel />
                                    </>
                                  :
                                    <>
                                    <TheatreControls identifier={this.itemid} mediatype={this.metadata.mediatype} />
                                    <BookReaderWrap item={this} page={this.page} />
                                    </>
                                  }
                                    {this.cherModal("audio")}
                                    <center style="color:white;margin-bottom:10px">
                                    </center>
                                </div>
                            </div>
                    </div>
                <div id="flag-overlay" class="center-area ">
            </div>
            </div>
            );

    }
}
