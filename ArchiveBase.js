import React from './ReactFake';
//Not needed on client - kept so script can run in both cases
//import ReactDOMServer from 'react-dom/server';
//Next line is for client, not needed on server but doesnt hurt
//import ReactDOM from 'react-dom';
import {AJS_on_dom_loaded} from './Util';
import ArchiveItem from '@internetarchive/dweb-archivecontroller/ArchiveItem';
import { ReactConfig } from './ReactSupport';

export default class ArchiveBase extends ArchiveItem {
    /*
    Base class for Archive UI application - base of Details = which includes single element items and Search which includes both searches and collections (which are actually items).
    ArchiveBase
    - Details
    - - AV
    - - Image
    - - Text
    - - Software (not implemented)
    - Search
    - - Home
    - - Collection
    Nav - knows about all the classes (includes factory() but doesnt subclass them
    Util - just some utility functions
    Tile - elements on a Search - each is a ArchiveMember
    ReactFake - spoofs methods of React as otherwise hard to do onclick etc if use real React (note archive.min still uses react a little)

    Fields:
    item    Metadata for item, undefined for a search.
    items   Metadata for items found if the item is a Collection,
    itemtype    Schema.org for this eg. "http://schema.org/TextDigitalDocument"
    query   query part of search to run (Search|Collection|Home only)
     */
    constructor({itemid = undefined, metaapi = undefined, sort=undefined}={}) {
        super({itemid, metaapi, sort});
    }
    theatreIaWrap() {
    }
    preprocessDescription(description) {
        // Now catch some things that often appear in descriptions because it assumes running on archive page e.g. /server/commute/commute.jpg on "commute"
        // And handle multivalue (array) descriptions by concatenating with <br/>

        return  !description ? description
                : (Array.isArray(description) ? description.join('<br/>') : description)
                .replace('\n','<br/>')
                .replace(/src=(['"])http:\/\/www.archive.org\//gi, 'src=$1'+ ReactConfig().root + '/') // src="/  absolute urls
                .replace(/src=(['"])\//gi, 'src=$1'+ ReactConfig().root + '/'); // src="/  absolute urls

    }
}

