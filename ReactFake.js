/*
Based on https://stackoverflow.com/questions/30430982/can-i-use-jsx-without-react-to-inline-html-in-script
I wanted this because React was doing nasty things at run-time (like catching events) and stopping Search box working

This expanded in use to make it easier to use HTML in as unchanged form from existing react in particular.
- URLs in image tags are re-rooted, i.e. <img src="/foo"> => <img src="https://bar.com/foo">
- look at onClick's especially if set window.location
 */
// Modules from NPM
import RenderMedia from 'render-media';
import throttle from "throttleit";
import from2 from "from2";
import prettierBytes from "prettier-bytes";
const Url = require('url');
//These are needed to mingle real-react with Fake-react during transition.
import ReactDOM from 'react-dom';
import RealReact from 'react';
// other Internet Archive modules
const debug = require('debug')('dweb-archive:ReactFake');
import ArchiveItem from "@internetarchive/dweb-archivecontroller/ArchiveItem";
import ArchiveFile from "@internetarchive/dweb-archivecontroller/ArchiveFile";
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember";
// Other parts of dweb-archive
import {config} from './Util';
import { ReactConfig, resolveUrls, p_resolveUrls, thumnailUrlsFrom, loadImg } from './ReactSupport';
//const DwebTransports = require('./Transports'); Not "required" because available as window.DwebTransports by separate import


/*
Handling of FakeReact IAFakeReactComponents
* createElement(tag=IAFakeReactComponent) spots the tag is a function and calls new(attrs), lets call this NEWIAREACTOBJ
* createElement then adds the kids (which possibly doesnt work, and we dont have a current use case)
* when NEWIAREACTOBJ is added into its parent,
    * addKids(parent) calls NEWIAREACTOBJ.render()
      * NEWIAREACTOBJ.render typically builds more FakeReact from the elements that would be displayed,
        * the top element built may contain a ref=f(el). this will be stored as a function in setAttributes (its untested if a sub-element contains ref=f()
    * addKids(parent) adds the rendered elements to the parent
    * addKids(parent) calls "ref", passing the element created to the IAReactObject,
      * The ref call will typically fetch state and add more sub-elements e.g. via ReactFake.loadImgBackgroun
    * addKids(parent) calls NEWIAREACTOBJ.componentDidMount()
*/
//TODO write up handling of Real React components in here




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

    static loadImg3(el, name, urls, cb) {
        // This only exists temporarily so components can find it via ReactFake ... TODO move calls
        loadImg(el, name, urls, cb);
    }

    static async _p_loadStreamRenderMedia(el, urls, { name=undefined, cb=undefined, preferredTransports=[]} = {}) {
        /*
            Render item by passing a data structure with a stream creating function to the RenderMedia
            See p_loadStream for arguments
         */
        const file = {
            name: name,
            createReadStream: await DwebTransports.p_f_createReadStream(urls, {preferredTransports})
            // Return a function that returns a readable stream that provides the bytes between offsets "start" and "end" inclusive.
            // This function works just like fs.createReadStream(opts) from the node.js "fs" module.
            // f_createReadStream can initiate the stream before returning the function.
        };

        // Enabled autoplay even though its being ignored - see https://github.com/internetarchive/dweb-archive/issues/41
        RenderMedia.render(file, el, {autoplay: true}, cb);  // Render into supplied element, will set window.WEBTORRENT_TORRENT if uses WebTorrent

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
                        );
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
    static async _p_loadStreamFetchAndBuffer(el, urls, { name=undefined, cb=undefined, preferredTransports=[]} = {}) {
        /*
            Render item by fetching a buffer and passing to the RenderMedia
            This is the worst choice, if can't handle as a stream
            See p_loadStream for arguments
         */
        const buff = await DwebTransports.p_rawfetch(urls);  //Typically will be a Uint8Array, note that this is a fallback to http, only used if streams not available,
        // currently not timing out which is probably OK since it should always be last choice.
        const file = {
            name: name,
            createReadStream: function (opts) {
                if (!opts) opts = {};
                return from2([buff.slice(opts.start || 0, opts.end || (buff.length - 1))])
            }
        };
        RenderMedia.render(file, el, cb);  // Render into supplied element
    }

    static async p_loadStream(el, urls, { name=undefined, cb=undefined, preferredTransports=[]} = {}) {
        /*
            More complex strategy. ....
            If the Transports supports urls/createReadStream (webtorrent only at this point) then load it.
            If its a HTTP URL use that
            Dont try and use IPFS till get a fix for createReadStream

            el: HTML element to load into (the video, img or audio tag)
            urls:   relative or absolute url, array of url, or ArchiveFile i.e. flexible!
            name:   Name of the stream - this is important to something, but I can't remember what
            cb(err,el):     If present, will be passed to RenderMedia.render and called back on failure or when can play/view the element
        */
        try {
            //TODO-MIRROR-ISSUE47 have resolveUrls use Transports.canonicalUrls, and special patterns for rel and rootrel (maybe array of patterns)...
            //TODO-MIRROR-ISSUE47 ...and then p_resolveNames (or in here) should probably be where we decide these can go to the cache...
            //TODO-MIRRROR-ISSUE47 ... or merge p_resolveUrls with p_resolveNames into a urls->urls function esp if this pattern reused ...
            //TODO-MIRROR-ISSUE47 ... but needs to know whether to handle the cache URL as a stream URL or not ...
            const urlsabs = await p_resolveUrls(urls); // [ url* ] where url is absolute (not root or directory relative)
            const urlsresolved = await DwebTransports.p_resolveNames(urlsabs); // Allow names among urls
            // Strategy here ...
            // If serviceworker && webtorrent => video src=
            // If can createReadStream (IPFS when fixed; webtorrent) => rendermedia
            // If http => video src
            // Default fetch as bytes and
            if (urlsresolved.length) { // At least one url to try
                let magneturl = urlsresolved.find(u => u.includes('magnet:'));
                if ((DwebTransports.type === "ServiceWorker") && magneturl) {
                    el.src = magneturl.replace('magnet:', `${window.origin}/magnet/`);
                } else {
                    const streamUrls = (await DwebTransports.p_urlsValidFor(urlsresolved, "createReadStream"));
                    if (streamUrls.length) {
                        await this._p_loadStreamRenderMedia(el, streamUrls, {name, cb, preferredTransports})
                    } else {
                        // Next choice is to pass a HTTP url direct to <VIDEO> as it knows how to stream it.
                        // TODO clean this nasty kludge up,
                        // Find a HTTP transport if connected, then ask it for the URL (as will probably be contenthash) note it leaves non contenthash urls untouched
                        // TODO if start seeing failures with wrong urls e.g. http://ipfs.io etc then may want to do a HEAD in p_httpfetchurl to check
                        const httpurl = await DwebTransports.p_httpfetchurl(urlsresolved);
                        if (httpurl) {
                            el.src = httpurl;
                        } else {
                            await this._p_loadStreamFetchAndBuffer(el, urlsresolved, {name, cb, preferredTransports});
                        }
                    }
                }
            } else { // No urls
                console.warn('ReactFake.p_loadStream didnt find any resolvable urls - cant load stream')
            }
        } catch(err) {
            console.error("Uncaught error in p_loadStream",err);
            throw err;
        }

    }
    static loadStream(el, urls, { name=undefined, cb=undefined, preferredTransports=[]} = {}) {
        /*
            asynchronously loads file from one of metadata, turns into blob, and stuffs into element
            usage like <VIDEO src=<ArchiveFile instance>  >
            For arguments see p_loadStream
        */
        //noinspection JSIgnoredPromiseFromCall
        this.p_loadStream(el, urls, {name, cb, preferredTransports}); /* Asynchronously load image, intentionally not waiting for it to complete*/
        return el;
    }


    static createElement(tag, attrs, children) {        // Note arguments is set to tag, attrs, child1, child2 etc
        /* Replaces React's createElement - has a number of application specific special cases
            <img src=ArchiveFile(...)> replaced by <div><img x-=u>

         */

        /* First we handle cases where we dont actually build the tag requested */

        const kids = Array.prototype.slice.call(arguments).slice(2);
        if (typeof tag === "function") {  // Assume its a component (React or FakeReact)
            if (tag.prototype instanceof this.Component) { // Its Fake React
                if (kids && kids.length) { attrs.children = kids}; // Copy way Real React passes children to component
                const element = new tag(attrs);
                return element;
            } else { // Real React
                const element = RealReact.createElement(tag, attrs, ...kids); // Returns a React Element which will be rendered into DOM by addKids on el its being included into
                return element
            }
        }
        const element = document.createElement(tag);
        React.setAttributes(element, tag, attrs);   // Note many more special cases in setAttributes
        React.addKids(element, kids);
        return element;
    }
    static setAttributes(element, tag, attrs) {
        /* Build out a created element adding Attributes and Children
           Note this only applies to explicit HTML elements, not to components whose constructors are called directly.
        tag:    Lower case string of element e.g. "img"
        attrs:  Object {attr: value}

        Note: This is called back by loadImgBackground after creating the tag.
        Special cases coded here:
            <a href='./aaa' | href='/aaa' id='tabby-bbb'> => <a href="/arc/archive.org/aaa" id='tabby-bbb'>
            <audio|video src=ArchiveFile> => loadStream(ArchiveFile)
            <a source=ArchiveFile  => source=ArchiveFile (stored correctly)
            Dont try and catch img.src here, its too late - catch it in loadImgBackground (called from createElement)
        */
        function _setahref(href) {
            // Expects attrs & element set in outer setAttributes
            let possibleOnclick;
            /* Obsoleted by AnchorSearch
            if (href.includes("archive.org/search.php?query=")) { //Note this doesnt handle other parameters in the URL but unlikely to find in legacy urls like search.php
                if (!"onclick" in attrs) {
                    console.error("archive.org/search.php should always be accompanied with an onclick handler");
                }
                // Don't set possibleOnClock, we want it explicitly
            } else
            */
            if (href.startsWith("dweb:/arc/archive.org/details/")) { // E.g <a href="/details/foo">
                //console.assert(false,"IAUX FLAG - LOOK AT CALL STACK HERE");
                let itemid = href.slice(30);
                possibleOnclick = `Nav.nav_detailsOnClick("${itemid}"); return false;`; //TODO-IAUX move to AnchorDetails but if AnchorDetails is React then reqs wrapping ReactComponent
            } else if (href.startsWith("dweb:")) {
                possibleOnclick = 'DwebObjects.Domain.p_resolveAndBoot(this.href); return false;';
            } else if (href.indexOf("/download/") >= 0) {
                let dirname =  href.slice(href.indexOf("/download/")+10);
                possibleOnclick = `Nav.nav_downloaddirectoryOnClick("${dirname}"); return false;`
            }
            if (possibleOnclick) {
                if (attrs["onclick"] || ("onclick" in attrs)) {
                    console.error("Setting href to dweb wont work if onclick already set");
                } else {
                    element.setAttribute("onclick", possibleOnclick); // Note this will handle search like href=xx?aa=bb
                }
            } // no need for else, setting href is sufficient
        }
        for (let name in attrs) {
            // React uses classname, we just set the original class that the browser expects
            // React uses camelCase for events. thy are converted here to lowercase since we allow storage of a function as the value, and the browser allows that
            const attrname = (name.toLowerCase() === "classname" ? "class" : ["onClick"].includes(name) ? name.toLowerCase(name) : name );
            if (name === "dangerouslySetInnerHTML") {
                element.innerHTML = attrs[name]["__html"] || null;
                delete attrs.dangerouslySetInnerHTML;
            }
            // Turn root-relative URLS in IMG and A into absolute urls - ideally these are also caught by special cases (note don't appear to be any of these in most code)
            if (["a.href"].includes(tag + "." + name) && (typeof attrs[name] === "string") ) { // <a href=<string>
                if (attrs[name].startsWith('./') || attrs[name].startsWith('/')) {
                    if (attrs.id && attrs.id.startsWith('tabby-')) {  // There is some weird javascript in AJS.tabby which assumes this is root-relative, so dont change it
                        attrs[name] = ReactConfig().tabbyrootinsert + attrs[name]; // Rewrite value to store
                    } else {
                        let hrefs = resolveUrls(attrs[name]); // Array of urls, but should be just one since href name will be singular as will rel
                        if (hrefs.length > 1) {
                            console.error("Decide what mean by multiple hrefs in an anchor handle onclick for it below hrefs=",hrefs)
                        }
                        attrs[name] = hrefs[0];
                        _setahref(hrefs[0]); // Handles special cases
                    }
                } else {
                    _setahref(attrs[name]); // Handles special cases
                }
            }
            // Load ArchiveFile inside a div if specify in src
            if (DwebArchive.mirror && ["img.src", "video.src", "audio.src"].includes(tag + "." + name)) {
                if (attrs[name] instanceof ArchiveFile ) {
                    element[name] = attrs[name].httpUrl();
                } else if (attrs[name] instanceof ArchiveMember ) {
                    element[name] = attrs[name].httpUrl();
                } else {
                    element[name] = DwebTransports.gatewayUrl(resolveUrls(attrs[name])[0]); // Will always be singular url
                }
            } else if (["video.src", "audio.src"].includes(tag + "." + name) && attrs[name] instanceof ArchiveFile) {
                const af = attrs[name];
                const videoname = af.metadata.name;
                //Dont need mimetype currently
                //const mimetype = ACUtil.formats("format", af.metadata.format).mimetype; // Might be undefined for many formats still
                //if (!mimetype) console.warning("Unknown mimetype for ",af.metadata.format, "on",af.metadata.name);
                this.loadStream(element, af, {name: videoname, preferredTransports: config.preferredAVtransports});  // Cues up asynchronously to load the video/audio tag (dont need cb as this does the work of cb)
            } else if (["a.source"].includes(tag + "." + name) && attrs[name] instanceof Object) {
                element[name] = attrs[name];      // Store the ArchiveFile or Track in the DOM, function e.g. onClick will access it.
            } else if (["img.src"].includes(tag + "." + name) && !DwebArchive.mirror)  { // Load image via dweb - but not if DwebArchiveMirror
                const imgname = attrs["imgname"]
                  ? attrs["imgname"]
                  : (attrs["src"] instanceof ArchiveFile)
                    ? attrs["src"].name()
                    : attrs["src"].includes("/services/img")
                      ? attrs["src"] + ".jpg"
                      : Array.isArray(attrs["src"])
                        ? attrs["src"][0] + ".jpg"   // E.g. thumbnaillinks are typical [ipfs://, http:...]
                        : attrs["src"]
                          ? attrs["src"]
                          : "DUMMY.PNG";
                loadImg(element, imgname, attrs[name], (unusedErr, unusedEl) => {});
            } else if (name && attrs.hasOwnProperty(name)) {
                let value = attrs[name];
                if (value === true) {
                    element.setAttribute(attrname, name);
                } else if (typeof value === "object" && !Array.isArray(value)) { // Passing an object
                    if (typeof element[attrname] === "object") { // Could be a group of parameters e.g. style: {{fontSize: "124px"}}
                        for (let k in value) {
                            element[attrname][k] = value[k];
                        }
                    } else { // Otherwise it looks like intentionally setting attribute to an object so allow it
                        element[attrname] = value;
                    }
//                } else if (typeof value === "function" && attrname === "ref") { // Has to match code in addKids
                } else if (typeof value === "function" && ["ref","onclick"].includes(name.toLowerCase(attrname))) { // Has to match code in addKids
                    element[attrname] = value;
                } else if (value !== false && value != null) {
                    element.setAttribute(attrname, value.toString());
                }
            }
        }
        return element;
    }
    static addKids(element, child) {
        /* add kids to a created element, note this is NOT called when children are added from a component into the render of the component.
        kids:   Array of children
        /* This is called back by loadImgBackground after creating the tag. */
        if (Array.isArray(child)) {
            child.forEach(k => this.addKids(element, k));
        } else if ((typeof child === "undefined") || (child === null)) { // This was !child, but that skips the integer 0.
        } else { // Single child to add - this next bit is fairly heuristic, should be double checked if things change.
            // Essentially three kinds of things here.
            // * React Elements which are objects with no accessable class - and need rendering by React (Only when integrated with IAUX
            // * FakeReactComponent subclasses which need rendering
            // * Literal strings
            // * HTML Elements (created with createElement)
            // * There may be a fourth type - of things that can be converted to strings, but if so I need an example
            const addable =
                (typeof child === "string")      ? document.createTextNode(child.toString())
                    : (child instanceof this.Component)
                    ? child.render()  // Fake only, (will cause any ref= at top level to be a function)
                    : !(child instanceof HTMLElement)
                    ? document.createElement("span")  // React Elements
                    :                                  child; //XX

            try {
                element.appendChild(addable);
            } catch(err) {
                debug("ERROR addKids failed to add kid:%s %O", err.message, addable)
                return element; // Skip rest
            }
            if ((addable instanceof HTMLElement) && (typeof addable.ref === "function")) { // Call the ref attribute of IAReactComponent or IAFakeReactComponent
                try {
                    addable.ref.call(child, addable);
                } catch(err) {
                    debug("ERROR addKids caught error in call to ref: ", err.message);
                }
            }
            if (child instanceof this.Component) {
                child.componentDidMount(); // Tell IAFakeReactComponent it mounted
            }
            //TODO-IAUX Retest this, as triggers if child=0 for example, should find way to trigger positively on either child or addable
            if (! ((typeof child === "string") || (typeof child === "number") || (child instanceof HTMLElement) || (child instanceof this.Component))) {
                this.renderRealReact(child, addable);
            }
        }
        return element;
    }

    static renderRealReact(child, parent) {
        // This is also used in iaux.IAReactComponent to re-render when state changes
        if ((typeof child.renderFakeElement) !== "undefined") {
            ReactDOM.unmountComponentAtNode(parent)
            //child.renderFakeElement.parentElement.removeChild(child.renderFakeElement);
        }
        try {
            const el = ReactDOM.render(child, parent); // Have to render after already in the DOM, although it might not be above ?
        } catch(err) {
            debug(">>>> renderRealReact caught %O", err);
        }
    }
    static domrender(els, node) { // Four cases - have/dont old/new
            deletechildren(node, false);
            node.appendChild(els);
        }
};

React.Component = class {
    // Fake the methods of React.Component that IAFakeReactComponent calls.
    constructor(props) {
        // Let the super class store the props, you can manipulate them in subclasses
        this.props = props;
        // Initialize the state, again the subclasses can add to it
        // Now moved to IAFakeReactComponent
        //this.state = {};
    }
    setState(o) {
        Object.keys(res).forEach(k => this.state[k] = res[k]);
        // renderFakeElement is set in ReactFake to the element created (on mounting), so it can be removed from React and then updated
        // it causes the item to be rerendered when setState is called e.g. after data is retrieved
        // Strangely renderFakeElement doesnt seem to be defined anywhere ?
        if (typeof DwebArchive !== "undefined" && typeof this.renderFakeElement !== "undefined") {
            DwebArchive.ReactFake.renderRealReact(this, this.renderFakeElement.parentNode);
        }
    }
}
