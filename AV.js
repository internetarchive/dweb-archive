require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
import Util from "./Util";

import Details from './Details';

export default class AV extends Details {
    constructor(itemid, item) {
        super(itemid, item);
    }

    setupPlaylist(preferredTypes) { //TODO could order the preferredTypes and pick by preference
        this.avs = this._list.filter(fi => (preferredTypes.includes(fi.metadata.format)));
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
                    let original = metadata.name;
                    if (metadata.source === "original") {
                        let secs = parseInt(metadata.length % 60)
                        res[original] = {   //TODO-AUDIO - set image;
                            title: metadata.title, //TODO-AUDIO pretty duration
                            prettyduration: `${parseInt(metadata.length/60)}:${secs < 10 ? "0"+secs : secs}`,
                            original: original,
                            duration: metadata.length,
                            sources: []
                        };
                    } else if (metadata.source === "derivative") { // souce="derivative"
                        original = metadata.original;
                    }
                    if (Util.preferredAudioFormats.includes(metadata.format)) {
                        res[original].sources.push({
                            file: `http://dweb.archive.org/downloads/${this.itemid}/${metadata.name}`,
                            urls: af,
                            type: metadata.name.split('.').pop(),
                        });
                    } else if (Util.imageFormats.includes(metadata.format)) {
                        if (!res[original].image) res[original].image = af;
                    }
                }
                return res;
            }, {}
        );
        this.playlist = Object.values(pl);
    }

}
