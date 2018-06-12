require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
import Util from "./Util";

import Details from './Details';

export default class AV extends Details {
    constructor(itemid, item) {
        super(itemid, item);
    }

    setupPlaylist(type) { //TODO could order the playability and pick by preference
        this.avs = this._list.filter(af => af.playable(type));  //TODO-VIDEO - refactor to use playlist instead of avs
        if (this.avs.length) {
            this.avs.sort((a, b) => Util.natcompare(a.metadata.name, b.metadata.name));   //Unsure why sorting names, presumably tracks are named alphabetically ?
            /* This was old playlist mapping name to URL but its not clear it ever gets used.
            this.playlist.push({ name: this.avs[0].name,
                urls: [this.item.metadata.magnetlink + '/' + this.avs[0].name] }); // TODO-STREAM support IPFS link here once can stream it
            */
        }
        // This is modelled on the structure passed to jw in the Audio on archive.org
        // Differences: sources.urls=ArchiveFile, image=af instead of single URL, title is just title, prettyduration has duration
        let trackNumber = 1;
        let pl = this._list.reduce( (res, af) => {
                let metadata = af.metadata;
                if (["original","derivative"].includes(metadata.source)) {
                    let original = ((metadata.source === "derivative") ? metadata.original : metadata.name );
                    if (!res[original]) {
                        res[original] = { title: "UNKNOWN", original: original, sources: [] }; // Create place to push this file whether its original or derivative
                    }
                    let orig = res[original];
                    if (metadata.source === "original") {
                        orig.title = metadata.title;
                        let secs = parseInt(metadata.length % 60);
                        orig.prettyduration = `${parseInt(metadata.length / 60)}:${secs < 10 ? "0" + secs : secs}`;
                        orig.duration = metadata.length;  // In seconds
                    }
                    if (af.playable("audio")) {
                        res[original].sources.push({
                            name: metadata.name,
                            file: `http://dweb.archive.org/downloads/${this.itemid}/${metadata.name}`,
                            urls: af,
                            type: metadata.name.split('.').pop(),
                        });
                    } else if (af.playable("image")) {
                        if (!res[original].image) res[original].image = af; // Currently loads with first playable one, Tracey is prepping an exposed service to get a prefered one in metadata
                    }
                }
                return res;
            }, {}
        );
        this.playlist = Object.values(pl).filter(p => p.sources.length);
    }

}
