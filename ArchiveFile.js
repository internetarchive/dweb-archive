//require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
const Util = require( './Util');
const prettierBytes = require( "prettier-bytes");
//const Transports = require('@internetarchive/dweb-transports');
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import

class ArchiveFile {
    /*
    Represents a single file, currently one that is in the item, but might create sub/super classes to handle other types
    of file e.g. images used in the UI

    Fields:
    metadata: metadata of item - (note will be a pointer into a Detail or Search's metadata so treat as read-only)
    sd: pointer to SmartDict created with Urls (see how did it with Academic)
     */

    constructor({itemid = undefined, metadata = undefined}={}) {
        this.itemid = itemid;
        this.metadata = metadata;
    }

    name() {
        /* Name suitable for downloading etc */
        return this.metadata.name;
    }
    async p_urls() {
        /*
        Return an array of URLs that might be a good place to get this item
        Throws: Error if fetch_json doesn't succeed, or retrieves something other than JSON
         */
        try {
            if (!this.metadata.ipfs && (await DwebTransports.p_connectedNames()).includes("IPFS")) {   // Connected to IPFS but dont have IPFS URL yet (not included by default because IPFS caching is slow)
                // Fjords: 17BananasIGotThis/17 Bananas? I Got This!.mp3  has a '?' in it
                let name = this.metadata.name.replace('?','%3F');
                this.metadata = await Util.fetch_json(`${Util.gateway.url_metadata}${this.itemid}/${name}`);
            }
        } catch(err) {
            console.warn("Error from Util.fetch_json meant ArchiveFile failed to retrieve metadata for", this.itemid, this.metadata.name);
            return []; // Empty array as nowhere to fetch
        }
        // Includes both ipfs and ipfs via gateway link as the latter can prime the IPFS DHT so the former works for the next user
        // noinspection JSUnresolvedFunction
        // noinspection JSUnresolvedVariable
        // noinspection JSUnresolvedVariable
        return [this.metadata.ipfs, this.metadata.ipfs ? this.metadata.ipfs.replace('ipfs:/ipfs/','https://ipfs.io/ipfs/') : undefined, this.metadata.magnetlink, this.metadata.contenthash].filter(f => !!f);   // Multiple potential sources eliminate any empty
    }
    httpUrl() {
        return `${Util.gateway.url_download}${this.itemid}/${this.metadata.name}`;
    }
    async mimetype() {
       return Util.formats("format", this.metadata.format).mimetype;
    }
    async data() {
        return await DwebTransports.p_rawfetch(await this.p_urls()); //TODO-TIMEOUT add timeoutMS depending on size of file
    }
    async blob() {
        return new Blob([await this.data()], {type: this.mimetype()} );
    }
    async blobUrl() {
        return URL.createObjectURL(await this.blob());
    }
    async p_download(a, options) {
        // noinspection JSUnusedLocalSymbols
        let urls = await this.p_urls();   // Multiple potential sources elimating any empty - may fetch file metadata in process
        // noinspection UnnecessaryLocalVariableJS
        let objectURL = await this.blobUrl();
        //browser.downloads.download({filename: this.metadata.name, url: objectURL});   //Doesnt work
        //Downloads.fetch(objectURL, this.metadata.name);   // Doesnt work
        a.href = objectURL;
        a.target= (options && options.target) || "_blank";                      // Open in new window by default
        a.onclick = undefined;
        a.download = this.metadata.name;
        a.click();
        //URL.revokeObjectURL(objectURL)    //TODO figure out when can do this - maybe last one, or maybe dont care?


    }
    sizePretty() {
        try {
            return prettierBytes(parseInt(this.metadata.size));
        } catch(err) {
            console.error("Couldnt get prettierBytes for",this);
            return "???";
        }
    }
    istype(type) {
        // True if specify a type and it matches, or don't specify a type BUT fails if type unrecognized
        let format = Util.formats("format", this.metadata.format);
        if (!format) console.warn("Format", this.metadata.format, "unrecognized");
        return format && (!type || (format.type === type));
    }
    // noinspection JSUnusedGlobalSymbols
    playable(type) {
        return this.istype(type) && Util.formats("format", this.metadata.format).playable;
    }
    // noinspection JSUnusedGlobalSymbols
    downloadable(type) {
        return this.istype(type) && !!Util.formats("format", this.metadata.format).downloadable;
    }
}
exports = module.exports = ArchiveFile;
