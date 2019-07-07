import React from './ReactFake';

import AV from './AV';
import {config} from './Util';
import TheatreControls from './components/TheatreControls';
import { CherModal } from './components/CherModal';

/* Notes on Audio
    - see also https://github.com/internetarchive/dweb-archive/issues/18

    TODO-AUDIO Audio html contains a lot of extra info in the "head" which we can't change on the fly, in particular the player is loaded there
    TODO-AUDIO Body tag on audio has different classes, in particular has <body navia ia-module tiles responsive jwaudio > and jwaudio might be important
    TODO-IA Ask Evan why item-details-about is now closed immediately
 */

export default class Audio extends AV {
    constructor({itemid=undefined, metaapi=undefined, noCache=false}={}) {
        super({ itemid, metaapi, noCache});
        this.itemtype = "http://schema.org/AudioObject";
    }

    setPlaylist() {
        super.setPlaylist("audio");
    }
    static play(elAnchor) {
        // Note - this is redirected from Nav which is a global
        const track = elAnchor.source;
        const af = track.sources[0].urls;
        document.getElementById("tracklist")
            .querySelectorAll(".jwrowV2")
            .forEach(el => el.classList.remove("playing"));
        elAnchor.querySelectorAll(".jwrowV2").forEach(el => el.classList.add("playing"));
        const elAudio = document.getElementById("streamContainer");
        React.loadStream(elAudio, af, {name: af.metadata.name, preferredTransports: config.preferredAVtransports});
        return false;
    }
}
