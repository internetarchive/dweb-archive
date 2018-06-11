/*
Based on https://stackoverflow.com/questions/30430982/can-i-use-jsx-without-react-to-inline-html-in-script
I wanted this because React was doing nasty things at run-time (like catching events) and stopping Search box working

This expanded in use to make it easier to use HTML in as unchanged form from existing react in particular.
- URLs in image tags are re-rooted, i.e. <img src="/foo"> => <img src="https://bar.com/foo">
- look at onClick's especially if set window.location
 */
import RenderMedia from 'render-media';
import throttle from "throttleit";
import from2 from "from2";
import prettierBytes from "prettier-bytes";
const Url = require('url');
import ArchiveFile from "./ArchiveFile";
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import

function deletechildren(el, keeptemplate) { //Note same function in htmlutils
    /*
    Remove all children from a node
    :param el:  An HTML element, or a string with id of an HTML element
    */
    if (typeof keeptemplate === "undefined") keeptemplate=true;
    el = (typeof(el) === "string") ? document.getElementById(el) : el;
    // Carefull - this deletes from the end, because template if it exists will be firstChild
    while (el.lastChild) { // This clause needed if use deletechildren with templates && !(keeptemplate && el.lastChild.classList && el.lastChild.classList.contains("template"))) {
        // Note that deletechildren is also used on Span's to remove the children before replacing with text.
        el.removeChild(el.lastChild);
    }
    return el; // For chaining
}

export default class React  {

    static relativeurl(r, url) {
        /* Convert a relative url into a real one based on a possible base URL
            r       Url to try and go relative to
            url     Relative URL of form ./xyz or "/xyz"
            returns a url relative to r, or undefined if dont have one
        */
        let l = Url.parse(r); // Parse url into a Url structure
        if (url.startsWith('.')) { url = url.substr(1); }
        if (["https:","http:","file:"].includes(l.protocol)
            || (l.path.startsWith('/ipfs/')  && (l.path.lastIndexOf('/') > l.path.indexOf("/ipfs/")+5))
            || (l.path.startsWith('/arc/')  && (l.path.lastIndexOf('/') > l.path.indexOf("/ipfs/")+4))
            ) {
            return  r.substr(0, r.lastIndexOf('/'))+url;
        }
        return undefined
    }
    static resolveUrls(url, rel) {
        /* Synchronous part of p_resolveUrls, handle subset of cases that don't require network access (asyncronicity)
        url:   Array or Single url, each could be relative("./foo.jpg", or root relative ("/images.foo.jpg") and could also be a ArchiveFile
        resolves:   Array of URLs suitable for passing to Transports
         */
        if (Array.isArray(url)) {
            let urls = url.map(u => this.resolveUrls(u, rel));    // Recurse urls is now array of arrays (most of which will probably be single value
            return [].concat(...urls);  // Flatten, for now accept there might be dupes
        }
        // Its now a singular URL
        if (url instanceof ArchiveFile) {
            console.error("resolveUrls called with ArchiveFile - use p_resolveUrls for this case");
            return [url];  // Will be very lucky if this works - its going to try and embed a url in an href for example
        } else if (url.startsWith("//")) {
            return "https:"+url;    // Ick - a reference to href="//foo.bar" rather than href="https://foo.bar"
        } else if (url.startsWith("/")) {
            console.warn("Probably not a good idea to use root-relative URL",url); //could genericise to use rel instead of config but might not catch cases e.g. of /images
            if (!React._config.root) console.error("Need to React.config({root: 'https://xyz.abc'");
            return [this.relativeurl(React._config.rootname, url)].filter(u => !!u);;  // e.g. /foo => [https://bar.com/foo]
        } else if (url.startsWith("./")) {
            console.warn("Relative URLs arent a great idea as what to be relative to is often unclear",url,rel); //could genericise to use rel instead of config but might not catch cases e.g. of /images
            return [this.relativeurl(React._config.relname, url)].filter(u => !!u);
        } else {
            return [url]; // Not relative, just pass it back
        }
    }
    static async p_resolveUrls(url, rel) {
        /*
        url:   Array or Single url, each could be relative("./foo.jpg", or root relative ("/images.foo.jpg") and could also be a ArchiveFile
        resolves:   Array of URLs suitable for passing to Transports
         */
        if (Array.isArray(url)) {
            let urls = await Promise.all(url.map(u => this.p_resolveUrls(u, rel)));    // Recurse urls is now array of arrays (most of which will probably be single value
            return [].concat(...urls);  // Flatten, for now accept there might be dupes
        }
        // Its now a singular URL
        if (url instanceof ArchiveFile) {
            return await url.p_urls();  // This could be slow, may have to get the gateway to cache the file in IPFS
        } else {
            return this.resolveUrls(url, rel);  // Synchronous code will work
        }
    }

    static _loadImgSrc(el, url, cb) {
        // This should only happen if the original script was loaded from local disk
        let elImg = document.createElement("img");
        elImg.setAttribute("src", url);
        cb(undefined, elImg);  // Set attributes (shouldnt have kids)
        el.appendChild(elImg);
    }

    static async p_loadImg(el, name, urls, cb, rel) {
        /*
        This is the asyncronous part of loadImg, runs in the background to update the image.
        Previous version got a static (non stream) content and puts in an existing IMG tag but this fails in Firefox
        This version appends to a tag using RenderMedia.append which means using a stream
        Note it can't be inside load_img which has to be synchronous and return a jsx tree.

         */
        /*
        //This method makes use of the full Dweb library, can get any kind of link, BUT doesnt work in Firefox, the image doesn't get rendered.
        let data = await  Transports.p_rawfetch(urls, {verbose});  //Typically will be a Uint8Array
        let blob = new Blob([data], {type: Util.formats[this.metadata.format].mimetype}) // Works for data={Uint8Array|Blob}
        // This next code is bizarre combination needed to open a blob from within an HTML window.
        let objectURL = URL.createObjectURL(blob);
        if (verbose) console.log("Blob URL=",objectURL);
        //el.src = `http://archive.org/download/${this.itemid}/${this.metadata.name}`
        el.src = objectURL;
        */
        if (verbose) console.log(`Loading Image ${urls}`);
        urls = await this.p_resolveUrls(urls, rel); // Handles a range of urls include ArchiveFile
        urls = await DwebTransports.p_resolveNames(urls); // Resolves names as validFor doesnt currently handle names
        // Three options - depending on whether can do a stream well (WEBSOCKET) or not (HTTP, IPFS); or local (File:)
        let fileurl = urls.find(u => u.startsWith("file"))
        let magneturl = urls.find(u => u.includes('magnet:'));
        const streamUrls = await DwebTransports.p_urlsValidFor(urls, "createReadStream");
        if (fileurl) {
            this._loadImgSrc(el, fileurl, cb);
        } else if ((DwebTransports.type === "ServiceWorker") && magneturl) {
            this._loadImgSrc(el, magneturl.replace('magnet:',`${window.origin}/magnet/`), cb);
        } else if (streamUrls.length) {
            const file = {
                name: name,
                createReadStream: await DwebTransports.p_f_createReadStream(streamUrls, {verbose})
                // Initiate a stream, & return a f({start, end}) => readstream
                // This function works just like fs.createReadStream(opts) from the node.js "fs" module.
            };
            RenderMedia.append(file, el, cb);  // Render into supplied element - have to use append, as render doesnt work, the cb will set attributes and/or add children.
        } else {
            // Otherwise fetch the file, and pass via rendermedia and from2
            //TODO-MULTI-GATEwAY need to set relay: true once IPFS different CIDs (hashes) from browser/server adding
            try {
                const buff = await  DwebTransports.p_rawfetch(urls, {verbose, timeoutMS: 5000, relay: false});  //Typically will be a Uint8Array TODO-TIMEOUT make timeoutMS depend on size of file
                if (verbose) console.log("Retrieved image size", buff.length);
                const file = {
                    name: name,
                    createReadStream: function (opts) {
                        if (!opts) opts = {};
                        return from2([buff.slice(opts.start || 0, opts.end || (buff.length - 1))])
                    }
                };
                RenderMedia.append(file, el, cb);  // Render into supplied element - have to use append, as render doesnt work, the cb will set attributes and/or add children.
            } catch (err) {
                console.error("Unable to p_loadImg",name,urls,err.message);
            }
        }
    }

    static loadImg(name, urls, cb, rel) {
        //asynchronously loads file from one of metadata, turns into blob, and stuffs into element
        // urls can be a array of URLs of an ArchiveFile (which is passed as an ArchiveFile because ArchiveFile.p_urls() is async as may require expanding metadata
        // Usage like  {this.loadImg(<img width=10>))
        const element = document.createElement("span");
        // noinspection JSIgnoredPromiseFromCall
        this.p_loadImg(element, name, urls, cb, rel); /* Asynchronously load image under element - note NOT awaiting return*/
        return element;
    }

    static async _p_loadStreamRenderMedia(el, name, urls, cb, rel) {
        const file = {
            name: name,
            createReadStream: await DwebTransports.p_f_createReadStream(urls, {verbose})
            // Return a function that returns a readable stream that provides the bytes between offsets "start" and "end" inclusive.
            // This function works just like fs.createReadStream(opts) from the node.js "fs" module.
            // f_createReadStream can initiate the stream before returning the function.
        };

        RenderMedia.render(file, el, cb);  // Render into supplied element, will set window.WEBTORRENT_TORRENT if uses WebTorrent

        if (window.WEBTORRENT_FILE) {    //TODO-SW need to get status back from WebTorrent
            const torrent = window.WEBTORRENT_TORRENT;
            const torrentFile = window.WEBTORRENT_FILE;

            const updateSpeed = () => {
                if (window.WEBTORRENT_FILE === torrentFile) {    // Check still displaying ours
                    const webtorrentStats = document.querySelector('#webtorrentStats'); // Not moved into updateSpeed as not in document when this is run first time
                    if (webtorrentStats) {
                        const els = (
                            <span>
                                <b>Peers:</b> {torrent.numPeers}{' '}
                                <b>Progress:</b> {Math.min(100 * torrentFile.progress, 100).toFixed(1)}%{' '}
                                <b>Download speed:</b> {prettierBytes(torrent.downloadSpeed)}/s{' '}
                                <b>Upload speed:</b> {prettierBytes(torrent.uploadSpeed)}/s
                            </span>
                        )
                        deletechildren(webtorrentStats);
                        webtorrentStats.appendChild(els);
                    }
                }
            };

            torrent.on('download', throttle(updateSpeed, 250));
            torrent.on('upload', throttle(updateSpeed, 250));
            setInterval(updateSpeed, 1000);
            updateSpeed(); //Do it once
        }
    }
    static async _p_loadStreamFetchAndBuffer(el, name, urls, cb, rel) {

        // Worst choice - fetch the file, and pass via rendermedia and from2
        const buff = await DwebTransports.p_rawfetch(urls, {verbose});  //Typically will be a Uint8Array, TODO-TIMEOUT make timeoutMS dependent on file size
        const file = {
            name: name,
            createReadStream: function (opts) {
                if (!opts) opts = {};
                return from2([buff.slice(opts.start || 0, opts.end || (buff.length - 1))])
            }
        };
        RenderMedia.render(file, el, cb);  // Render into supplied element
    }

    static async p_loadStream(el, name, urls, cb, rel) {
        //More complex strategy. ....
        //If the Transports supports urls/createReadStream (webtorrent only at this point) then load it.
        //If its a HTTP URL use that
        //Dont try and use IPFS till get a fix for createReadStream
        try {
            //urls = [ 'ipfs:/ipfs/QmRfcgjWEWdzKBnnSYwmV7Kt5wVVuWZvLm96o4dj7myWuy']  - TODO delete this line once Kyle fixes files.cat for urlstored files - this replaces all with a test video
            urls = await this.p_resolveUrls(urls, rel); // Allow relative urls
            urls = await DwebTransports.p_resolveNames(urls); // Allow names among urls
            // Strategy here ...
            // If serviceworker && webtorrent => video src=
            // If can createReadStream (IPFS when fixed; webtorrent) => rendermedia
            // If http => video src
            // Default fetch as bytes and
            let magneturl = urls.find(u => u.includes('magnet:'));
            if ((DwebTransports.type === "ServiceWorker")  && magneturl) {
                el.src = magneturl.replace('magnet:',`${window.origin}/magnet/`);
            } else {
                const streamUrls = (await DwebTransports.p_urlsValidFor(urls, "createReadStream"));
                if (streamUrls.length) {
                    await this._p_loadStreamRenderMedia(el, name, streamUrls, cb, rel)
                } else {
                    // Next choice is to pass a HTTP url direct to <VIDEO> as it knows how to stream it.
                    // TODO clean this nasty kludge up,
                    // Find a HTTP transport if connected, then ask it for the URL (as will probably be contenthash) note it leaves non contenthash urls untouched
                    const url = await DwebTransports.p_httpfetchurl(urls);
                    if (url) {
                        el.src = url;
                    } else {
                        await this._p_loadStreamFetchAndBuffer(el, name, urls, cb, rel);
                    }
                }
            }
        } catch(err) {
            console.error("Uncaught error in p_loadStream",err);
            throw err;
        }

    }
    static loadStream(el, name, urls, cb, rel) {
        //asynchronously loads file from one of metadata, turns into blob, and stuffs into element
        // usage like <VIDEO src=<ArchiveFile instance>  >
        // noinspection JSIgnoredPromiseFromCall
        this.p_loadStream(el, name, urls, cb, rel); /* Asynchronously load image, intentionally not waiting for it to complete*/
        return el;
    }


    static config(options) {
        /*
            Configure ReactFake

            root: protocol and host to insert before URLs (currently in img tags only) e.g. "https://archive.org"
         */
        for (x of options) React._config[x] = options[x];
    }
    static createElement(tag, attrs, children) {        // Note arguments is set to tag, attrs, child1, child2 etc
        /* Replaces React's createElement - has a number of application specific special cases
            <img src=ArchiveFile(...)> replaced by <div><img x-=u>

         */

        /* First we handle cases where we dont actually build the tag requested */

        const kids = Array.prototype.slice.call(arguments).slice(2);
        //const rel = [ document.baseURI ]; // use baseURI as will be location.href if not explicitly set; [ window.location.href ];
        const rel = [ React._config.rootname ];
        function cb(err, element) {
            if (err) {
                console.log("Caught error in createElement callback in loadImg or loadStream",err.message);
                throw err;
            }
            React.setAttributes(element, tag, attrs, rel);
            React.addKids(element, kids);
            return element;
        }
        if (tag === "img") {
            if (Object.keys(attrs).includes("src")) {
                const src = attrs.src;
                const name = attrs["imgname"]
                    ? attrs["imgname"]
                    : ( (src instanceof ArchiveFile) ? src.name() : "DummyName.PNG");
                delete attrs.src;   // Make sure dont get passed to cb for building into img (which wont like an array)
                return this.loadImg(name, src, cb, rel);   //Creates a <span></span>, asynchronously creates an <img> under it and calls cb on that IMG. The <div> is returned immediately.
            }
        } else {
            let element = document.createElement(tag);
            React.setAttributes(element, tag, attrs, rel);
            React.addKids(element, kids);
            return element;
        }
    }
    static setAttributes(element, tag, attrs, rel) {
        /* Build out a created element adding Attributes and Children
        tag:    Lower case string of element e.g. "img"
        attrs:  Object {attr: value}

        Note: This is called back by loadImg after creating the tag.
        Special cases coded here:
            <a href='./aaa' | href='/aaa' id='tabby-bbb'> => <a href="/arc/archive.org/aaa" id='tabby-bbb'>
            <audio|video src=ArchiveFile> => loadStream(ArchiveFile)
            <a source=ArchiveFile  => source=ArchiveFile (stored correctly)
            Dont try and catch img.src here, its too late - catch it in loadImg (called from createElement)
        */
        for (let name in attrs) {
            const attrname = (name.toLowerCase() === "classname" ? "class" : name);
            if (name === "dangerouslySetInnerHTML") {
                element.innerHTML = attrs[name]["__html"];
                delete attrs.dangerouslySetInnerHTML;
            }
            // Turn root-relative URLS in IMG and A into absolute urls - ideally these are also caught by special cases (note don't appear to be any of these in most code)
            if (["a.href"].includes(tag + "." + name) &&
                (typeof attrs[name] === "string") && (attrs[name].startsWith('./') || attrs[name].startsWith('/'))
            ) {
                if (attrs.id && attrs.id.startsWith('tabby-')) {  // There is some weird javascript in AJS.tabby which assumes this is root-relative, so dont change it
                    attrs[name] = React._config.tabbyrootinsert + attrs[name]; // Rewrite value to store
                } else {
                    let hrefs = this.resolveUrls(attrs[name], rel); // Array of urls, but should be just one since href name will be singular as will rel
                    if (hrefs.length > 1) {
                        console.error("Decide what mean by multiple hrefs in an anchor handle onclick for it below hrefs=",hrefs)
                    }
                    let href = hrefs[0]
                    attrs[name] = href;
                    let possibleOnclick;
                    if (href.includes("archive.org/search.php?query=")) { //Note this doesnt handle other parameters in the URL (esp verbose) but unlikely to find in legacy urls like search.php
                        if (! "onclick" in attrs) {
                            console.error("archive.org/search.php should always be accompanied with an onclick handler");
                        }
                        // Don't set possibleOnClock, we want it explicitly
                    }
                    else if (href.startsWith("dweb:") && (name === "href")) {
                        possibleOnclick = 'DwebObjects.Domain.p_resolveAndBoot(this.href, {verbose}); return false;';
                    }
                    if (possibleOnclick) {
                        if (attrs["onclick"] || ("onclick" in attrs)) {
                            console.error("Setting href to dweb wont work if onclick already set");
                        } else {
                            element.setAttribute("onclick", possibleOnclick); // Note this will handle search like href=xx?aa=bb
                        }
                    } // no need for else, setting href is sufficient
                }
            }
            // Load ArchiveFile inside a div if specify in src
            if (["video.src", "audio.src"].includes(tag + "." + name) && attrs[name] instanceof ArchiveFile) {
                const af = attrs[name];
                const videoname = af.metadata.name;
                //Dont need mimetype currently
                //const mimetype = Util.formats[af.metadata.format].mimetype; // Might be undefined for many formats still
                //if (!mimetype) console.warning("Unknown mimetype for ",af.metadata.format, "on",af.metadata.name);
                this.loadStream(element, videoname, af, undefined, rel);  // Cues up asynchronously to load the video/audio tag (dont need cb as this does the work of cb)
            } else if (["a.source"].includes(tag + "." + name) && attrs[name] instanceof Object) {
                element[name] = attrs[name];      // Store the ArchiveFile or Track in the DOM, function e.g. onClick will access it.
            } else if (name && attrs.hasOwnProperty(name)) {
                let value = attrs[name];
                if (value === true) {
                    element.setAttribute(attrname, name);
                } else if (typeof value === "object" && !Array.isArray(value)) { // e.g. style: {{fontSize: "124px"}}
                    for (let k in value) {
                        element[attrname][k] = value[k];
                    }
                } else if (value !== false && value != null) {
                    element.setAttribute(attrname, value.toString());
                }
            }
        }
        return element;
    }
    static addKids(element, kids) {
        /* add kids to a created element
        kids:   Array of children
        /* This is called back by loadImg after creating the tag. */
        for (let i = 0; i < kids.length; i++) {
            const child = kids[i];
            if (typeof child === "undefined") { // This was !child, but that skips the integer 0.
            } else if (Array.isArray(child)) {
                child.map((c) => element.appendChild(c.nodeType == null ?
                    document.createTextNode(c.toString()) : c))
            }
            else {
                element.appendChild(
                    child.nodeType == null ?
                        document.createTextNode(child.toString()) : child);
            }
        }
        return element;
    }
    static domrender(els, node) {
        deletechildren(node, false);
        node.appendChild(els);
    }
};

//Default configuration
React._config = {
//    root: "https://archive.org",
    root: "https://dweb.archive.org",
    relname: "dweb:/arc/archive.org/",   // Used for img.src=./
    rootname: "dweb:/arc/archive.org/", // Used for img.rc=/serve etc (see example in commute.description
    tabbyrootinsert: "/arc/archive.org", // Insert before tabby links to gets to https://dweb.me/arc/archive.org/details/foo?bar in origin dweb.me with url /details/foo?bar
};