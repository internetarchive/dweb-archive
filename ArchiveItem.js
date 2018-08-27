const ArchiveFile = require("./ArchiveFile");
const Util = require("./Util");

//require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
const debug = require('debug')('dweb-archive');
//const Transports = require('@internetarchive/dweb-transports');
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import
//TODO-NAMING url could be a name

class ArchiveItem {
    /*
    Base class representing an Item and/or a Search query (A Collection is both).
    This is just storage, the UI is in ArchiveBase and subclasses, theoretically this class could be used for a server or gateway app with no UI.

    Fields:
    itemid: Archive.org reference for object
    item:   Metadata decoded from JSON from metadata search.
    items:  Array of data from a search.
    _list:  Will hold a list of files when its a single item, TODO-REFACTOR maybe this holds a array of ArchiveItem when its a search BUT only have partial metadata info

    Once subclass SmartDict
    _urls:  Will be list of places to retrieve this data (not quite a metadata call)
     */


    constructor({itemid = undefined, item = undefined}={}) {
        this.itemid = itemid;
        this.item = item; // Haven't fetched yet, subclass constructors may override
    }

    _listLoad() {
        /*
         After set this.item, load the _list with an array for ArchiveFile
         Note that this metadata will be un-cached i.e. without in particular the IPFS link and possibly without contenthash link
        */
        this._list = (this.item && this.item.files )
            ? this.item.files.map((f) => new ArchiveFile({itemid: this.itemid, metadata: f})) // Allow methods on files of item
            : [];   // Default to empty, so usage simpler.
    }

    async fetch() {
        /* Fetch what we can about this item, it might be an item or something we have to search for.
            Fetch item metadata as JSON by talking to Metadata API
            Fetch collection info by an advanced search.
            Goes through gateway.dweb.me so that we can work around a CORS issue (general approach & security questions confirmed with Sam!)

            this.itemid Archive Item identifier
            throws: TypeError or Error if fails esp Unable to resolve name
            resolves to: this
         */
        await this.fetch_metadata();
        await this.fetch_query();
        return this;
    }

    processMetadataFjords(m) {
        // The Archive is nothing but edge cases, handle some of them here so the code doesnt have to !
        Object.keys(Util.metadata.singletons).forEach(f => {
            if (typeof m.metadata[f] === "undefined") m.metadata[f] = "";
            if (Array.isArray(m.metadata[f])) m.metadata[f] = m.metadata[f].join(Util.metadata.singletons[f]); //e.g. biographyofbanan0000eage
        });
        return m;
    }
    async fetch_metadata() {
        if (this.itemid && !this.item) {
            debug('getting metadata for %s', this.itemid);
            // Fetch via Domain record - the dweb:/arc/archive.org/metadata resolves into a table that is dynamic on gateway.dweb.me
            const name = `dweb:/arc/archive.org/metadata/${this.itemid}`;
            // Fetch using Transports as its multiurl and might not be HTTP urls
            let m;
            try {
                m = await DwebTransports.p_rawfetch([name], {timeoutMS: 5000});    //TransportError if all urls fail (e.g. bad itemid)
                // noinspection ES6ModulesDependencies
                m = DwebObjects.utils.objectfrom(m); // Handle Buffer or Uint8Array
                console.assert(m.metadata.identifier === this.itemid);

                this.item = this.processMetadataFjords(m);
                this._listLoad();   // Load _list with ArchiveFile
                debug("metadata for %s fetched successfully");
            } catch(err) {
                console.warn("Unable to get metadata for", this.itemid, err);
            }
        }
    }

    async fetch_query({append=false}={}) {
        /*  Action a query, return the array of docs found.
            Subclassed in Account.js since dont know the query till the metadata is fetched
            */
        // noinspection JSUnresolvedVariable
        if (this.query) {   // This is for Search, Collection and Home.
            const sort = (this.item && this.item.collection_sort_order) || this.sort;
            // noinspection JSUnresolvedVariable
            const url =
                //`https://archive.org/advancedsearch?output=json&q=${this.query}&rows=${this.limit}&sort[]=${sort}`; // Archive (CORS fail)
                `${Util.gateway.url_advancedsearch}?output=json&q=${encodeURIComponent(this.query)}&rows=${this.limit}&page=${this.page}&sort[]=${sort}&and[]=${this.and}&save=yes`;
                //`http://localhost:4244/metadata/advancedsearch?output=json&q=${this.query}&rows=${this.limit}&sort[]=${sort}`; //Testing
            debug("Searching with %s", url);
            const j = await Util.fetch_json(url);
            this.items = append ? this.items.concat(j.response.docs) : j.response.docs;
            this.start = j.response.start;
            this.numFound = j.response.numFound;
            return j.response.docs
        } else {
            return undefined;
        }
    }
    async thumbnaillinks() {
        await this.fetch_metadata();
        return this.item.metadata.thumbnaillinks; // Short cut since metadata changes may move this
    }
    async itemid() {
        await this.fetch_metadata();
        return this.item.metadata.identifier; // Short cut since metadata changes may move this
    }

    setPlaylist(type) { //TODO could order the playability and pick by preference
        /*
        type:   "audio"
        returns: [ { title
            original: filename of original file
            sources: [ {name, file, urls, type}]  # urls is singular ArchiveFile, type is last file extension (e.g. "jpg"
            } ]
        Note should be after an explicit await this._listLoad

        This gets a bit painful as there are so many different cases over a decade or more of "best practice"
        Some cases to test for ...
        gd73-02-15.sbd.hall.1580.sbeok.shnf  has no lengths on derived tracks, and original has length = "0"
         */

        // Note Video.js is currently using the .avs, while Audio is using this .playlist

        // This is modelled on the structure passed to jw in the Audio on archive.org
        // Differences: sources.urls=ArchiveFile, image=af instead of single URL, title is just title, prettyduration has duration
        console.assert(this._list, "Should be running playlist after _listLoad (or fetch_metadata)")
        type = {"video": "video", "audio": "audio", "movies": "video"}[type || this.item.metadata.mediatype];
        let pl = this._list.reduce( (res, af) => {
                let metadata = af.metadata;
                if (["original","derivative"].includes(metadata.source)) {
                    let original = ((metadata.source === "derivative") ? metadata.original : metadata.name );  // Filename of original
                    if (!res[original]) {
                        res[original] = { title: "UNKNOWN", original: original, sources: [] }; // Create place to push this file whether its original or derivative
                    }
                    let orig = res[original];
                    if ((metadata.source === "original") || (orig.title==="UNKNOWN")) orig.title = metadata.title;
                    let totalsecs;
                    let pretty;
                    if (metadata.length && (metadata.length !== "0")) {
                        if (metadata.length.includes(':')) {
                            let tt = metadata.length.split(':').map(t => parseInt(t));
                            if (tt.length === 3) {
                                totalsecs = ((tt[0] * 60) + tt[1]) * 60 + tt[2];
                            } else if (tt.length === 2) {
                                totalsecs = (tt[0] * 60 + tt[1]);
                            } else if (tt.length == 1) {
                                totalsecs = (tt[0]);
                            }
                            pretty = metadata.length;
                        } else { // Probably of 123.45 form in seconds
                            let secs = parseInt(metadata.length % 60);
                            if (secs === NaN) { // Check we could parse it
                                pretty = "";
                                totalsecs = 0;
                            } else {
                                pretty = `${parseInt(metadata.length / 60)}:${secs < 10 ? "0" + secs : secs}`;
                                totalsecs = metadata.length;  // In seconds
                            }
                        }
                        if (totalsecs) { // dont store if we think its 0
                            if (metadata.source === "original" || !orig.prettyduration) orig.prettyduration = pretty;
                            if (metadata.source === "original" || !orig.duration) orig.duration = totalsecs;  // In seconds
                        }
                    }
                    if (af.playable(type)) {
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
exports = module.exports = ArchiveItem;
