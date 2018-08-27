require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
//import React from './ReactFake';
import Util from "./Util";

import Details from './Details';

export default class AV extends Details {
    constructor(itemid, item) {
        super(itemid, item);
    }

    setupPlaylist(type) { //TODO could order the playability and pick by preference
        /*
        Set two forms of playlist,
        type:   "audio"
        this.avs := avs (obsolete playlist still used by video TODO-VIDEO)
        this.playlist := [ { title
            original: filename of original file
            sources: [ {name, file, urls, type}]  # urls is singular ArchiveFile, type is last file extension (e.g. "jpg"
            } ]

        This gets a bit painful as there are so many different cases over a decade or more of "best practice"
        Some cases to test for ...
        gd73-02-15.sbd.hall.1580.sbeok.shnf  has no lengths on derived tracks, and original has length = "0"

         */

        // Note Video.js is currently using the .avs, while Audio is using the .playlist

        this.avs = this._list.filter(af => af.playable(type));  //TODO-VIDEO - TODO-XXX refactor to use playlist instead of avs
        if (this.avs.length) {
            this.avs.sort((a, b) => Util.natcompare(a.metadata.name, b.metadata.name));   //Unsure why sorting names, presumably tracks are named alphabetically ?
            /* This was old playlist mapping name to URL but its not clear it ever gets used.
            this.playlist.push({ name: this.avs[0].name,
                urls: [this.item.metadata.magnetlink + '/' + this.avs[0].name] }); // TODO-STREAM support IPFS link here once can stream it
            */
        }
        // This is modelled on the structure passed to jw in the Audio on archive.org
        // Differences: sources.urls=ArchiveFile, image=af instead of single URL, title is just title, prettyduration has duration
        this.setPlaylist(type);
    }

}
