require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';

import AV from './AV'


export default class Audio extends AV {
    constructor(itemid, item) {
        super(itemid, item);
        this.itemtype = "http://schema.org/AudioObject";
    }

    setupPlaylist() {
        super.setupPlaylist(['VBR MP4',"Ogg Vorbis"]);   //TODO-AUDIO this is only going to play first track
    }

    theatreIaWrap() {
        let item = this.item;
        let itemid = this.itemid;
        let detailsurl = `https://archive.org/details/${itemid}`;  //OK as absolute URL as only used as itemprop
        let title = item.title
        let imgurl = `https://archive.org/services/img/${itemid}`; //OK as absolute URL as only used as itemprop
        this.setupPlaylist();
        return (
            <div id="theatre-ia-wrap" class="container container-ia width-max ">
                <link itemprop="url" href={detailsurl}/>{/*Link to archive.org directly*/}
                <link itemprop="image" href={imgurl}/>{/*Its unclear how/if this is used*/}

                {/* TODO-AUDIO Loop over tracks - has ogg and mp3 tracks here */}
                {/*Example
                <div itemprop="hasPart" itemscope itemtype="http://schema.org/AudioObject">
                    <meta itemprop="name" content="105 www.quranaudio.info - Abdulrahman Alsudaes">
                    <meta itemprop="duration" content="PT0M20S">

                    <link itemprop="associatedMedia"
                          href="https://archive.org/download/AbdulAzizSurahFateha/105Www.quranaudio.info.ogg">
                    <link itemprop="associatedMedia"
                          href="https://archive.org/download/AbdulAzizSurahFateha/105Www.quranaudio.info.mp3">
                </div>
                */}

                <h1 class="sr-only">{title}</h1>
                <h2 class="sr-only">Audio Preview</h2>

                <div id="theatre-ia" class="container">
                    <div class="row">
                        <div class="xs-col-12">

                            <div id="theatre-controls">
                                <a href="#" onclick="return AJS.flash_click(0)">
                                    <div data-toggle="tooltip" data-container="body" data-placement="left" class="iconochive-flash"
                                         title="Click to have player try flash first, then HTML5 second"></div>
                                </a>
                                <a href="#" onclick="return AJS.mute_click()">
                                    <div data-toggle="tooltip" data-container="body" data-placement="left" class="iconochive-unmute"
                                         title="sound is on.  click to mute sound."></div>
                                </a>
                                <a href="#" onclick="return AJS.mute_click()">
                                    <div data-toggle="tooltip" data-container="body" data-placement="left" class="iconochive-mute"
                                         style="display:none" title="sound is off.  click for sound."></div>
                                </a>
                            </div>{/*--/#theatre-controls--*/}


                            <noscript>
                                <div class="alert alert-danger alert-dismissable" data-dismiss="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span
                                            class="iconochive-remove-circle" aria-hidden="true"></span><span class="sr-only">remove-circle</span>
                                    </button>
                                    Internet Archive&apos;s in-browser
                                    audio player requires JavaScript to be enabled.
                                    It appears your browser does not have it turned on.
                                    Please see your browser settings for this feature.
                                </div>
                            </noscript>

                            <div id="audioContainerX" style="text-align: center;">
                                <audio id="streamContainer" src={this.avs[0]} controls></audio>
                            </div>
                            <div id="webtorrentStats" style="color: white; text-align: center;"></div>
                            {this.cherModal("audio")}

                        </div>{/*--/.xs-col-12--*/}
                    </div>{/*--/.row--*/}

                </div>{/*--//#theatre-ia--*/}
                <div id="flag-overlay" class="center-area ">
                </div>
            {/*--//.container-ia--*/}</div>
        );
    }
}
