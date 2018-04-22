require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
//Not needed on client - kept so script can run in both cases
//import ReactDOMServer from 'react-dom/server';
//Next line is for client, not needed on server but doesnt hurt
//import ReactDOM from 'react-dom';
import Util from './Util';
import ArchiveItem from './ArchiveItem';

export default class ArchiveBase extends ArchiveItem {
    /*
    Base class for Archive application - base of Details = which includes single element items and Search which includes both searches and collections (which are actually items).
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
    Tile - elements on a Search - each is a ArchiveItem
    ReactFake - spoofs methods of React as otherwise hard to do onclick etc if use real React (note archive.min still uses react a little)

    Fields:
    item    Metadata for item, undefined for a search.
    items   Metadata for items found if the item is a Collection,
    itemtype    Schema.org for this eg. "http://schema.org/TextDigitalDocument"
    query   query part of search to run (Search|Collection|Home only)
     */
    constructor(itemid,  {item = undefined}={}) {
        super({itemid: itemid, item: item});
    }
    theatreIaWrap() {
    }

    browserBefore() {
        //Anything that is needed to be executed in the browser before the main HTML tree is replaced.
        // Nothing to do by default
    }
    browserAfter() {
        this.archive_setup_push(); // Subclassed function to setup stuff for after loading.
        Util.AJS_on_dom_loaded(); // Runs code pushed archive_setup - needed for image if "super" this, put it after superclasses
    }
    render(res) {
        var els = this.navwrapped();    // Build the els
        this.browserBefore();
        React.domrender(els, res);  //Put the els into the page
        this.browserAfter();
    }
    preprocessDescription(description) {
        //console.log(description)
        // Now catch some things that often appear in descriptions because it assumes running on archive page
        // And handle multivalue (array) descriptions by concatenating with <br/>

        return  !description ? description
                : (Array.isArray(description) ? description.join('<br/>') : description)
                    .replace(/src=(['"])\//gi, 'src=$1'+React._config.root+'/');
    }
}

