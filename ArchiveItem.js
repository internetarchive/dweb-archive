const ArchiveFile = require("./ArchiveFile");
const ArchiveMember = require("./ArchiveMember");
const Util = require("./Util");
const canonicaljson = require('@stratumn/canonicaljson');

//require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
const debug = require('debug')('dweb-archive');
//const DwebTransports = require('@internetarchive/dweb-transports'); //Not "required" because available as window.DwebTransports by separate import
//const DwebObjects = require('@internetarchive/dweb-objects'); //Not "required" because available as window.DwebObjects by separate import
//TODO-NAMING url could be a name

class ArchiveItem {
    /*
    Base class representing an Item and/or a Search query (A Collection is both).
    This is just storage, the UI is in ArchiveBase and subclasses, theoretically this class could be used for a server or gateway app with no UI.

    Fields:
    itemid: Archive.org reference for object
    item:   Metadata decoded from JSON from metadata search.
    members:  Array of data from a search.
    _list:  Will hold a list of files when its a single item

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
        try {
            await this.fetch_metadata();
            await this.fetch_query(); // Should throw error if fails to fetch
            return this;
        } catch(err) {
            throw(err); // Typically a failure to fetch
        }
    }

    static processMetadataFjords(m) {
        const meta = m.metadata;
        Util.processMetadataFjords(meta);
        if (meta.mediatype === "education") {
            // Typically miscategorized, have a guess !
            if (m._list.find(af => af.playable("video")))
                meta.mediatype = "movies";
            else if (m._list.find(af => af.playable("text")))
                meta.mediatype = "texts";
            else if (m._list.find(af => af.playable("image")))
                meta.mediatype = "image";
            debug('Metadata Fjords - switched mediatype on %s from "education" to %s', meta.identifier, meta.mediatype);
        }
        return meta
    }

    fetch_metadata(opts={}, cb) {
        /*
        Fetch the metadata for this item if it hasn't already been.

        This function is intended to be monkey-patched in dweb-mirror to define caching.
        Its monkeypatched because of all the places inside dweb-archive that call fetch_query
        cb(err, this) or if undefined, returns a promise resolving to 'this'
         */
        if (typeof opts === "function") { cb = opts; opts = {}; } // Allow opts parameter to be skipped
        if (cb) { return f.call(this, cb) }
        else { return new Promise((resolve, reject) => f.call(this, (err, res) => { if (err) {reject(err)} else {resolve(res)} }))}        //NOTE this is PROMISIFY pattern used elsewhere
        function f(cb) {
            // noinspection JSPotentiallyInvalidUsageOfClassThis
            if (this.itemid && !this.item) {
                // noinspection JSPotentiallyInvalidUsageOfClassThis
                this._fetch_metadata(cb)
            } else {
                cb(null, this);
            }
        }
    }
    _fetch_metadata(cb) {
        /*
        Fetch the metadata for this item - dont use directly, use fetch_metadata.
         */
        debug('getting metadata for %s', this.itemid);
        // Fetch via Domain record - the dweb:/arc/archive.org/metadata resolves into a table that is dynamic on gateway.dweb.me
        const name = `dweb:/arc/archive.org/metadata/${this.itemid}`;
        // Fetch using Transports as its multiurl and might not be HTTP urls
        const prom = DwebTransports.p_rawfetch([name], {timeoutMS: 5000})    //TransportError if all urls fail (e.g. bad itemid)
            .then((m) => {
                // noinspection ES6ModulesDependencies
                m = DwebObjects.utils.objectfrom(m); // Handle Buffer or Uint8Array
                console.assert(m.metadata.identifier === this.itemid);
                ArchiveItem.processMetadataFjords(m); // Edits in place
                this.item = m;
                this._listLoad();   // Load _list with ArchiveFile
                debug("metadata for %s fetched successfully", this.itemid);
                cb(null, this);
            }).catch(err => cb(err));
    }

    fetch_query(opts={}, cb) { // opts = {wantFullResp=false}
        /*  Action a query, return the array of docs found and store the accumulated search on .members
            Subclassed in Account.js since dont know the query till the metadata is fetched

            This function is intended to be monkey-patched in dweb-mirror to define caching.
            Its monkeypatched because of all the places inside dweb-archive that call fetch_query
            Patch will call _fetch_query
            Returns a promise or calls cb(err, [ArchiveMember*]);
            Errs include if failed to fetch
            wantFullResp set to true if want to get the result of the search query (because proxying) rather than just the docs
        */
        if (cb) { return this._fetch_query(opts, cb) } else { return new Promise((resolve, reject) => this._fetch_query(opts, (err, res) => { if (err) {reject(err)} else {resolve(res)} }))}
    }

    _appendMembers(newmembers) {
        this.members = this.members ? this.members.concat(newmembers) : newmembers;
    }
    _wrapMembersInResponse(members) {
        return { response: { numFound: undefined, start: this.start, docs: members }}
    }
    _fetch_query({wantFullResp=false}={}, cb) { // No opts currently
        // noinspection JSUnresolvedVariable
        // rejects: TransportError or CodingError if no urls
        if (!this._list) this._listLoad();  // Will be empty if search and so no itemid so no files
        // First we look for the fav-xyz type collection, where there is an explicit JSON of the members
        let membersAF;
        if (this.itemid) {
            const memberFileName = `${this.itemid}_members.json`;
            membersAF = this._list.find(af => af.metadata.name === memberFileName);   // af || undefined
        }
        if (membersAF) {
            membersAF.data((err, jsonstring) => {
                if (err) {
                    debug("Unable to read member data from %s/%s",this.itemid,membersAF);
                    cb(err);
                } else {
                    // noinspection JSUnresolvedVariable
                    this.start = (this.page - 1) * this.limit;
                    // noinspection JSUnresolvedVariable
                    const newmembers = canonicaljson.parse(jsonstring).slice(this.start, this.page * this.limit).map(o => new ArchiveMember(o)); // See copy of some of this logic in dweb-mirror.MirrorCollection.fetch_query
                    this._appendMembers(newmembers); // Note these are ArchiveMembers, not ArchiveItems
                    // Note this does NOT support sort, there isnt enough info in members.json to do that
                    // Also that numFound isnt defined since we dont know the total number, only the number previously cached.
                    cb(null, wantFullResp ? this._wrapMembersInResponse(newmembers) : newmembers); // Skipping responseHeader, can add if anything requires it
                }
            });
        } else {
            // noinspection JSUnresolvedVariable
            if (this.item && this.item.metadata.search_collection) { // Search will have !this.item
                // noinspection JSUnresolvedVariable
                this.query = this.item.metadata.search_collection.replace('\"', '"')
            }
            if (this.query) {   // If this is a "Search" then will come here.
                // noinspection JSUnresolvedVariable
                const sort = (this.item && this.item.collection_sort_order) || this.sort;
                // noinspection JSUnresolvedVariable
                const url =
                    //`https://archive.org/advancedsearch?output=json&q=${this.query}&rows=${this.limit}&sort[]=${sort}`; // Archive (CORS fail)
                    `${Util.gatewayServer()}${Util.gateway.url_advancedsearch}?output=json&q=${encodeURIComponent(this.query)}&rows=${this.limit}&page=${this.page}&sort[]=${sort}&and[]=${this.and}&save=yes`;
                //`http://localhost:4244/metadata/advancedsearch?output=json&q=${this.query}&rows=${this.limit}&sort[]=${sort}`; //Testing
                debug("Searching with %s", url);
                Util.fetch_json(url, (err, j) => { // Will get error "failed to fetch" if fails
                    if (err) { cb(err) } // Failed to fetch
                    else {
                        const newmembers = j.response.docs.map(o=>new ArchiveMember(o));
                        this._appendMembers(newmembers);
                        this.start = j.response.start;
                        this.numFound = j.response.numFound;
                        cb(null, wantFullResp ? j : newmembers);  // wantFullResp is used when proxying unmodified result
                    }
                });
            } else { // Neither query, nor metadata.search_collection nor file/ITEMID_members.json so not really a collection
                cb(null, undefined); // No results return undefined (which is also what the patch in dweb-mirror does if no collection instead of empty array)
            }
        }
    }

    relatedItems(opts = {}, cb) { //TODO-REFACTOR-MEMBERS probably make these members
        if (typeof opts === "function") { cb = opts; opts = {}; } // Allow opts parameter to be skipped
        if (cb) { return this._relatedItems(opts, cb) } else { return new Promise((resolve, reject) => this._relatedItems(opts, (err, res) => { if (err) {reject(err)} else {resolve(res)} }))}


    }
    _relatedItems({wantStream=false} = {}, cb) {  //TODO-REFACTOR-MEMBERS probably make these members
        /*
        cb(err, obj)  Callback on completion with related items object
        TODO-REFACTOR-CACHE add hook in dweb-archive and use in dweb-archive.itemDetailsAlsoFound
        */
        const relatedUrl = ( DwebArchive.mirror ? (Util.gatewayServer()+Util.gateway.url_related_local) : Util.gateway.url_related)+this.itemid;
        if (wantStream) { // Stream doesnt really make sense unless caching to file
            DwebTransports.createReadStream(relatedUrl, {}, cb);
        } else {
            Util.fetch_json(relatedUrl, cb);
        }
    }

    async thumbnaillinks() {
        await this.fetch_metadata();
        return this.item.metadata.thumbnaillinks; // Short cut since metadata changes may move this
    }

    thumbnailFile() {
        /*
        Return the thumbnailfile for an item, this should handle the case of whether the item has had metadata fetched or not, and must be synchronous as stored in <img src=> (the resolution is asyncronous)
         */
        //console.assert(this._list, "Should have loaded metadata which loads _list before calling thumbnailFile"); // Could also do here
        // New items should have __ia_thumb.jpg but older ones dont
        let af = this._list && this._list.find(af => af.metadata.name === "__ia_thumb.jpg"
            || af.metadata.name.endsWith("_itemimage.jpg"));
        if (!af) {
            const metadata =  {
                format: "JPEG Thumb",
                name:   "__ia_thumb.jpg",
                // Could also set source:"original",rotation:"0",
            };
            // noinspection JSUnresolvedVariable
            const ipfs = this.metadata && this.metadata.thumbnaillinks.find(f=>f.startsWith("ipfs:")); // Will be empty if no thumbnaillinks
            if (ipfs) metadata.ipfs = ipfs;
            af = new ArchiveFile({itemid: this.itemid, metadata });
            if (this._list) this._list.push(af); // So found by next call for thumbnailFile - if haven't loaded metadata no point in doing this
        }
        return af;
    }

    videoThumbnailFile() {
        // Get a thumbnail for a video - may extend to other types, return the ArchiveFile
        // This is used to select the file for display and also in dweb-mirror to cache it
        // Heuristic is to select the 2nd thumbnail from the thumbs/ directory (first is often a blank screen)
        console.assert(this._list, "videoThumbnaillinks: assumes setup _list before");
        console.assert(this.item.metadata.mediatype === "movies", "videoThumbnaillinks only valid for movies");
        const videothumbnailurls = this._list.filter(fi => (fi.metadata.name.includes(`${this.itemid}.thumbs/`))); // Array of ArchiveFile
        return videothumbnailurls[Math.min(videothumbnailurls.length-1,1)];
    }

    async itemid() {
        console.assert(false, 'I dont this can ever get called, constructor will be overwriting it');
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

        TODO-FJORDS: This gets a bit painful as there are so many different cases over a decade or more of "best practice"
        Some cases to test for ...
        gd73-02-15.sbd.hall.1580.sbeok.shnf  has no lengths on derived tracks, and original has length = "0"
         */

        // Note Video.js is currently using the .avs, while Audio is using this .playlist

        // This is modelled on the structure passed to jw in the Audio on archive.org
        // Differences: sources.urls=ArchiveFile, image=af instead of single URL, title is just title, prettyduration has duration
        console.assert(this._list, "Should be running playlist after _listLoad (or fetch_metadata)");
        type = {"video": "video", "audio": "audio", "movies": "video"}[type || this.item.metadata.mediatype];
        const pl = this._list.reduce( (res, af) => {
                const metadata = af.metadata;
                if (["original","derivative"].includes(metadata.source)) {
                    const original = ((metadata.source === "derivative") ? metadata.original : metadata.name );  // Filename of original
                    if (!res[original]) {
                        res[original] = { title: "UNKNOWN", original: original, sources: [] }; // Create place to push this file whether its original or derivative
                    }
                    const orig = res[original];
                    if ((metadata.source === "original") || (orig.title==="UNKNOWN")) orig.title = metadata.title;
                    let totalsecs;
                    let pretty;
                    if (metadata.length && (metadata.length !== "0")) { //TODO-FJORDS move to processMetadataFjords
                        if (metadata.length.includes(':')) {
                            const tt = metadata.length.split(':').map(t => parseInt(t));
                            if (tt.length === 3) {
                                totalsecs = ((tt[0] * 60) + tt[1]) * 60 + tt[2];
                            } else if (tt.length === 2) {
                                totalsecs = (tt[0] * 60 + tt[1]);
                            } else if (tt.length === 1) {
                                totalsecs = (tt[0]);
                            }
                            pretty = metadata.length;
                        } else { // Probably of 123.45 form in seconds
                            const secs = parseInt(metadata.length % 60);
                            if (isNaN(secs)) { // Check we could parse it
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
