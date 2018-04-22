require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
import Util from "./Util";

import Details from './Details';

export default class AV extends Details {
    constructor(itemid, item) {
        super(itemid, item);
    }

    setupPlaylist(preferredTypes) {
        this.playlist=[];
        this.avs = this._list.filter(fi => (preferredTypes.includes(fi.metadata.format)));
        if (this.avs.length) {
            this.avs.sort((a, b) => Util.natcompare(a.metadata.name, b.metadata.name));   //Unsure why sorting names, presumably tracks are named alphabetically ?

            this.playlist.push({ name: this.avs[0].name,
                urls: [item.metadata.magnetlink + '/' + this.avs[0].name] })
        }
    }
}
