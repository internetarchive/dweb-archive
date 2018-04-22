require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';

import Details from './Details'

export default class Texts extends Details {
    constructor(itemid, item) {
        super(itemid, item);
        this.itemtype="http://schema.org/TextDigitalDocument"
    }
    archive_setup_push() {
        super.archive_setup_push(); // On eample images the theatre & carosel came before the parts common to AV, Image and Text
        archive_setup.push(function(){ AJS.booksize(); });
    }
    theatreIaWrap() {
        let item = this.item;
        let metadata = item.metadata;
        let detailsURL = `https://archive.org/details/${this.itemid}`;  // Probably correct as archive.org/details since used as itemProp
        let imageURL = `https://archive.org/services/img/${this.itemid}`;  // itemprop so ok to leave
        //TODO-DETAILS-DWEB use alternative URLS via IPFS
        //TODO-STREAM pass as stream
        let streamURL = `https://archive.org/stream/${this.itemid}`; //{1992.Zandvoorts.Nieuwsblad}`; //TODO-TEXTS Cant find 2nd part of URL (passed to iframe and used for fullscreen link)
        //let streamURL = `https://archive.org/stream/${this.itemid}/1992.Zandvoorts.Nieuwsblad`;   // In archive.org but needs looking for this string in file names
        //let iframeURL = `${streamURL}?ui=embed#mode/2up`;   //This comes from Traceys code and works
        let iframeURL = `${streamURL}?ui=embed`;   //This works and matches archive.org  //TODO-TEXT figure out what served, maybe go one level into it
        let shortEmbedURL = `https://archive.org/stream/${this.itemid}?ui=embed`;    //Note on archive.org/details this is different from iframeURL and not clear if that is intentional  //TODO-TEXT check how used
        return (
            <div id="theatre-ia-wrap" class="container container-ia width-max">
                <link itemprop="url" href={detailsURL} />

                <link itemprop="image" href={imageURL} />


                <h1 class="sr-only">{metadata.title}</h1>
                <h2 class="sr-only">Item Preview</h2>

                <div id="theatre-ia" class="container">
                    <div class="row">
                        <div class="xs-col-12">

                            <div id="theatre-controls">
                                <a href={streamURL}>
                                    <div title="fullscreen view" data-toggle="tooltip" data-container="body" data-placement="left"
                                         class="iconochive-fullscreen"></div>
                                </a>
                                <a href={streamURL}>
                                    <div title="search inside" data-toggle="tooltip" data-container="body" data-placement="left"
                                         class="iconochive-search"></div>
                                </a>
                            </div>{/*--#theatre-controls--*/}


                            <div id="texty" style="font-size:0px" class="">
                                <iframe src={iframeURL}
                                        width="100%" height="480" frameborder="0" webkitallowfullscreen="true"
                                        mozallowfullscreen="true" allowfullscreen></iframe>
                            </div>
                            {this.cherModal("audio")}
                            <center style="color:white;margin-bottom:10px">
                            </center>
                        </div>{/*/.xs-col-12*/}
                    </div>{/*/.row*/}

                </div>{/*--//#theatre-ia--*/}
                <div id="flag-overlay" class="center-area ">
            </div>
            </div>
            );

    }
}
