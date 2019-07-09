import React from './ReactFake';

import AV from './AV'
import {gateway, gatewayServer} from '@internetarchive/dweb-archivecontroller/Util';
import TheatreControls from './components/TheatreControls';
import { CherModal } from './components/CherModal';

export default class Video extends AV {
    constructor({itemid=undefined, metaapi=undefined, noCache=false}={}) {
        super({ itemid, metaapi, noCache});
        this.itemtype = "http://schema.org/VideoObject";
    }
    setPlaylist() {
        super.setPlaylist("video");  // Setup this.playlist
    }

}
