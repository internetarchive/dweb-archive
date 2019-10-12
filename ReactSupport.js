/**
 * This is a set of support functions of use to React components
 *
 * It knows about Dweb architecture
 */
import map from 'async/map';
import path from 'path';
import Url from 'url';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember";
import ArchiveFile from "@internetarchive/dweb-archivecontroller/ArchiveFile";
import ArchiveItem from "@internetarchive/dweb-archivecontroller/ArchiveItem";
import {formats} from "@internetarchive/dweb-archivecontroller/Util";
import from2 from "from2";
import RenderMedia from "render-media";
import waterfall from "async/waterfall";
import {gatewayServer} from "@internetarchive/dweb-archivecontroller/Util";
import throttle from "throttleit";
const debug = require('debug')('dweb-archive:ReactSupport');
var streamToBlobURL = require('stream-to-blob-url'); //TODO-BOOKREADER try as import

/*

This file contains a lot of processing of names, here is a summary, taking note of how they flow into each other

 relativeUrl(PPP://RRR/SSS/TTT  /AAA/BBB/CCC   synchronous used by resolveUrl
    Where r = PPP://RRR/SSS/TTT
    /AAA/BBB          -> PPP://RRR/SSS/AAA/BBB
    [.]/ipfs/BBB/CCC  -> PPP://RRR/SSS/ipfs/AAAA/BBB
    [.]/arc/BBB/CCC   -> PPP://RRR/SSS/arc/AAAA/BBB

 resolveUrls - synchronous used by p_resolveUrls & by setAttributes for img.src etc on DwebMirror and a.href  synchronous
    ArchiveFile       -> error
    //AAA             -> https://AAA
    [.]/AAA       (warning if not /search* /services* /detail*)
                  MIRR-> MIRROR/arc/archive.org/AAA
                  DWEB-> dweb://arc/archive.org/AAA
                         TODO could be gateway/URL TODO probably gets /arc/aaa wrong
    PPP://AAA/BBB     -> PPP://AAA/BBB

  p_resolveUrls - asynchronous used by resolveImageUrls & p_loadStream
    [url*]  -> [ p_resolveUrls(url)*]
    ArchiveMember -> AM.urls() -> AM.thumbnaillinks || GATEWAY/arc/archive.org/thumbnail/IDENTIFIER
    ArchiveFile -> (magnet, ipfs, contenthash, GATEWAY/arc/archive.org/download/IDENTIFIER/FILENAME ] (possible extra roundtrip if not populated
    //AAA             -> https://AAA
    [.]/AAA       (warning if not /search* /services* /detail*)
                  MIRR-> MIRROR/arc/archive.org/AAA
                  DWEB-> dweb://arc/archive.org/AAA
                         TODO could be gateway/URL TODO probably gets /arc/aaa wrong
    PPP://AAA/BBB     -> PPP://AAA/BBB

  resolveImageUrls - asynchronous used by _imgUrlOrStream
    ArchiveFile -> (magnet, ipfs, contenthash, GATEWAY/arc/archive.org/download/IDENTIFIER/FILENAME ] (possible extra roundtrip if not populated, exclude magnet if __ia_thumb.jpg)
    [url*]  -> [ p_resolveUrls(url)*]
    ArchiveMember -> AM.urls() -> AM.thumbnaillinks || GATEWAY/arc/archive.org/thumbnail/IDENTIFIER
    ArchiveFile       -> error
    //AAA             -> https://AAA
    [.]/AAA       (warning if not /search* /services* /detail*)
                  MIRR-> MIRROR/arc/archive.org/AAA
                  DWEB-> dweb://arc/archive.org/AAA
    [.]/services/img/IDENTIFIER
                  MIRR-> MIRROR/arc/archive.org/services/img/IDENTIFIER
                  DWEB-> ARCHIVEITEM.metadata.thumbnaillinks via next line
    dweb://arc/archiveorg/services/img/IDENTIFIER -> ARCHIVEITEM.metadata.thumbnaillinks
    PPP://AAA/BBB     -> PPP://AAA/BBB

 */

function ReactConfig() {
  return DwebArchive.mirror ? {
    root:       DwebArchive.mirror + "/arc/archive.org",    // Used for absolute URLs in descriptions e.g. /details/foo
    relname:    DwebArchive.mirror + "/arc/archive.org/",   // Used for img.src=./
    rootname:   DwebArchive.mirror + "/arc/archive.org/",   // Used for img.rc=/serve etc (see example in commute.description
    tabbyrootinsert: "/arc/archive.org", // Insert before tabby links to gets to https://dweb.me/arc/archive.org/details/foo?bar in origin dweb.me with url /details/foo?bar
  } : {
    root:       "https://dweb.archive.org",   // Used for absolute URLs in descriptions e.g. /details/foo
    relname:    "dweb:/arc/archive.org/",   // Used for img.src=./
    rootname:   "dweb:/arc/archive.org/", // Used for img.rc=/serve etc (see example in commute.description
    tabbyrootinsert: "/arc/archive.org", // Insert before tabby links to gets to https://dweb.me/arc/archive.org/details/foo?bar in origin dweb.me with url /details/foo?bar
  };
}

function relativeurl(r, url) {
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
/*

 */
function resolveUrls(url, options={}) {
  /* Synchronous part of p_resolveUrls, handle subset of cases that don't require network access (asyncronicity)
  url:   Array or Single url, each could be relative("./foo.jpg", or root relative ("/images.foo.jpg") and could also be a ArchiveFile
  returns:   Array of URLs suitable for passing to Transports - may be "dweb: or ipfs: etc, i.e. not canonical or gateway yet
   */
  if (Array.isArray(url)) {
    let urls = url.map(u => resolveUrls(u, options));    // Recurse urls is now array of arrays (most of which will probably be single value
    return [].concat(...urls);  // Flatten, for now accept there might be dupes
  }
  // Its now a singular URL
  if (url instanceof ArchiveFile) { //NOTE dont think this is ever the case as p_resolveUrls will catch ArchiveFile
    console.error("resolveUrls called with ArchiveFile - use p_resolveUrls for this case");
    return [url];  // Will be very lucky if this works - its going to try and embed a url in an href for example
  } else if (url.startsWith("//")) {
    return "https:"+url;    // Ick - a reference to href="//foo.bar" rather than href="https://foo.bar"
  } else if (url.startsWith("/")) {
    if (!(url.startsWith("/search.php") || url.startsWith("/services") || url.startsWith("/details"))) {
      console.warn("Probably not a good idea to use root-relative URL", url); //could genericise to use options.rel instead of config but might not catch cases e.g. of /images
    }
    return [relativeurl(ReactConfig().rootname, url)].filter(u => !!u);  // e.g. /foo => [https://bar.com/foo]
  } else if (url.startsWith("./")) {
    if (!url.startsWith("./images")) {
      console.warn("Relative URLs are not a great idea as what to be relative to is often unclear", url, options); //could genericise to use rel instead of config but might not catch cases e.g. of /images
    }
    return [relativeurl(ReactConfig().relname, url)].filter(u => !!u);
  } else {
    return [url]; // Not relative, just pass it back
  }
}


function p_resolveUrls(url, cb) { //TODO check callers can now use cb
  /*
  url:   Array or Single url, each could be relative("./foo.jpg", or root relative ("/images.foo.jpg") and could also be a ArchiveFile
  cb or resolves: Array of URLs suitable for passing to Transports
   */
  if (cb) { try { f(url, cb) } catch(err) { cb(err)}} else { return new Promise((resolve, reject) => { try { f(url, (err, res) => { if (err) {reject(err)} else {resolve(res)} })} catch(err) {reject(err)}})} // Promisify pattern v2
  function f(url, cb) {
    if (Array.isArray(url)) {  // Recurse urls is now array of arrays (most of which will probably be single value
        map(url, (url, cb) => f(url, cb), (err, res) => {
        if (err) { cb(err) } else { cb(null, [].concat(...res)) } // Flatten, for now accept there might be dupes
      });
    } else if (url instanceof ArchiveMember) {  // Its a member, we want the urls of the images
      // ArchiveMember -> AM.urls() -> AM.thumbnaillinks || GATEWAY/arc/archive.org/thumbnail/IDENTIFIER
      url.urls(cb);                           // This will be fast - just thumbnaillinks or services, wont try and ask gateway for metadata and IPFS ima
    } else if (url instanceof ArchiveFile) {
      // ArchiveFile -> (magnet, ipfs, contenthash, GATEWAY/arc/archive.org/download/IDENTIFIER/FILENAME ]
      url.urls(cb);                           // This could be slow, may have to get the gateway to cache the file in IPFS
    } else {
      cb(null, resolveUrls(url));        // Synchronous code will work
    }
  }
}

async function thumbnailUrlsFrom(identifier) {
  // Return thumbnail links
  //itemid
  return await new ArchiveItem({identifier}).thumbnaillinks()
}

async function bufferedFile(name, urls) {
  /**
   * fetch the file to a buffer and return the function to slice from it
   * returns: { name, createReadStream: f(opts => buffer)}
   */
  //TODO-MULTI-GATEWAY need to set relay: true once IPFS different CIDs (hashes) from browser/server adding
  const buff = await DwebTransports.p_rawfetch(urls, {timeoutMS: 5000, relay: false});  //Maybe should not time out since streams will almost always get used, and in this case could be a large file and last resort to use a download url.
  // Logged by Transports
  return {
    name: name,
    createReadStream: function (opts={}) {
      return from2([buff.slice(opts.start || 0, opts.end || (buff.length - 1))])
    }
  };
}



async function resolveImageUrls(urls) {
  /* Generate a canoncial array of urls for fetching an image,
    There could be use for something similar for non images

    urls can be many things:
    ArchiveFile for a thumbnail:    Subselect urls that are not magnet links as that would start webtorrent on all item
    ArchiveFile (other)             ask p_resolveUrls
    dweb:/arc/archive.org/services/img/IDENTIFIER ask thmbnailUrlsFrom(IDENTIFIER) to convert to Item and look up (possibly slow)
   */
  if (urls instanceof ArchiveFile && urls.name() === "__ia_thumb.jpg") {
    urls = await p_resolveUrls(urls); // Handles a range of urls include ArchiveFile - can be empty if fail to find any, it already
    // Dont use magnet urls on __ia_thumb.jpg as opens many webtorrents and fails when tiling TODO this could be a parameter to p_loadImg
    urls = urls.filter(u => !u.includes("magnet:"));
  } else { // This includes ArchiveMember
    urls = await p_resolveUrls(urls); // Handles a range of urls include ArchiveFile - can be empty if fail to find any
  }  //Examples: [dweb:/arc/archive.org/services/foo]
  for (let i in urls) { // This can get used if /services/xx passed in here, then converted to dweb:/arc/archive.org/services
    if (urls[i].includes("dweb:/arc/archive.org/services/img/")) {
      urls[i] = await thumbnailUrlsFrom(urls[i].slice(35));
    }
  }
  urls = [].concat(...urls); // Flatten any urls expanded above

}
async function _imgUrlOrStream(name, urls, cb) {
  /**
   *
   * This is asynchronous converts urls in various formats to either a "file" data structure or a url
   * Note that it uses this multi-type response because consumer can then optimise display for a URL if appropriate
   *
   * Step 1: canonicalize URLs
   * Step 2: Split into file / magnet / stream / other
   * Step 3: Setup to fetch (or in some cases fetch, buffer and pass pointer to buffer)
   * returns: { name, createReadStream: f(opts=>buff) } OR URL (which may be a blob URL)
   * After: URL stuffed into img.src, or file passed to Render.render

  //TODO rewrite this to use callbacks internally instead of await
  Some cases of interest
  /services/img/foo with rel=["dweb:/arc/archive.org/"] > "dweb:/arc/archive.org/services/img/  special case > metadata>thumbnailimg
   */
  try {
    // Step 1: canonicalize URLs
    debug("Loading Image %s from %o", name, urls);
    if (urls instanceof ArchiveFile && urls.name() === "__ia_thumb.jpg") {
      urls = await p_resolveUrls(urls); // Handles a range of urls include ArchiveFile - can be empty if fail to find any
      // Dont use magnet urls on __ia_thumb.jpg as opens many webtorrents and fails when tiling TODO this could be a parameter to p_loadImg
      urls = urls.filter(u => !u.includes("magnet:"));
    } else { // This includes ArchiveMember
      urls = await p_resolveUrls(urls); // Handles a range of urls include ArchiveFile - can be empty if fail to find any
    }  //Examples: [dweb:/arc/archive.org/services/foo]
    for (let i in urls) { // This can get used if /services/xx passed in here, then converted to dweb:/arc/archive.org/services
      if (urls[i].includes("dweb:/arc/archive.org/services/img/")) {
        urls[i] = await thumbnailUrlsFrom(urls[i].slice(35));
      }
    }
    urls = [].concat(...urls); // Flatten any urls expanded above
    // Step 2: Split into file / magnet / stream / other
    urls = await DwebTransports.p_resolveNames(urls); // Resolves names as validFor doesnt currently handle names
    // Three options - depending on whether can do a stream well (WEBSOCKET) or not (HTTP, IPFS); or local (File:)
    let fileurl = urls.find(u => u.startsWith("file"));
    let magneturl = urls.find(u => u.includes('magnet:'));
    let streamUrls = await DwebTransports.p_urlsValidFor(urls, "createReadStream");
    streamUrls = streamUrls.filter(u => !u.href.startsWith("ipfs:")); // IPFS too unreliable (losing data, no errors) to use for streams esp for thumbnails
    // Step 3: Return as url or { name: createReadStream(f(range opts)=>stream)
    cb(null,
      fileurl
        ? fileurl
        : ((DwebTransports.type === "ServiceWorker") && magneturl) //TODO-MIRROR could possible pick up here as well
        ? magneturl.replace('magnet:', `${window.origin}/magnet/`)
        : streamUrls.length
          //TODO merge getImageURI and _imgUrlOrStream but careful as mixing cb's and awaits. its not as obvious as it looks.
          ? {
            name: name,
            // Initiate a stream, & return a f({start, end}) => readstream
            createReadStream: await DwebTransports.p_f_createReadStream(streamUrls)
            // This function works just like fs.createReadStream(opts) from the node.js "fs" module.
          }
          : // Otherwise fetch the file to buffer and return file for rendermedia
          //TODO this is inefficient, its going to fetch in one go, store in buffer return stream to buffer then to blob ... short cut it but do incrementally as problems with this code before
          await bufferedFile(name, urls)  // { name, createReadStream: f(opts=>buff) }
    );
  } catch(err) {
    debug("ERROR: Unable to _imgUrlOrStream %s %s %s %o", name, urls, err.message, err);
    cb(null, "/images/Broken_document.png");
  }
}

function getImageURI(name, urls, cb) { // Fork of p_loadImg to use Render instead of append
  /*
  TODO maybe merge _imgUrlOrStream into here if only place used
  */
  _imgUrlOrStream(name, urls,  // Errors handled inside, and error image url returned
    (unusedErr, res) => {
      if (typeof res === "string") {
        cb(null, res);
      } else { //res is {name, createReadStream: f(opts=>buff)
        const mimetype = formats("ext", path.extname(name).toLowerCase(), {first: true}).mimetype;
        streamToBlobURL(res.createReadStream(), // entire file as buffer
          mimetype, cb)
      }
    });
}


function loadImg(el, name, urls, cb) { // Fork of p_loadImg to use Render instead of append
  /*
  This is the asynchronous part of loadImg, runs in the background to update the image.
  Previous version got a static (non stream) content and puts in an existing IMG tag but this fails in Firefox
  */
  getImageURI(name, urls, (err, url) => {
    if (err) {
      cb(err);
    } else {
      el.src = url;
      if (!el.alt) el.alt = name; // Only set if consumer hasn't already set
    }
  });
}

function transportStatusAndProps(cb) {
  /**
   * This function checks on the status of the transport layer,
   * and returns an object with various status indicators that the UI can use.
   *
   */
  // TODO-DWEBNAV need to tell Transports to set this status when changes
  waterfall([
    cb1 => DwebTransports.p_statuses(cb1),      // e.g. [ { name: HTTP: status: 0 }* ]
    (transportStatuses, cb2) => {
      const httpStatus = transportStatuses.find(s=> s.name==='HTTP');
      // If we are a mirror then display MIRROR rather than HTTP at this point
      // TODO - this gets overwritten if we have status from a mirror relating to its connection to Gateway
      if (DwebArchive.mirror) {
        if (httpStatus) {
          httpStatus.name = "MIRROR";
        }
      }
      if (!(DwebArchive.mirror && httpStatus.status === 0)) {
        cb2(null, {transportStatuses}); // Note this could be effectively "MIRROR" failed
      } else if (httpStatus.info) { // If DwebTransports is getting info then no need to request again
        // Pass on status of Mirror talking to gateway instead of ours.
        cb2(null, httpStatus.info)
      } else {
        const infoUrl = [Object(_internetarchive_dweb_archivecontroller_Util__WEBPACK_IMPORTED_MODULE_6__["gatewayServer"])(), "info"].join('/');
        DwebTransports.httptools.p_GET(infoUrl, {}, cb2);
      } // Note an error in contacting Mirror will skip to end and not update
    }], (err, info) => {
      // Info is either status of our connection to mirror if applicable, or our or mirrors connection upstream
      if (err) {
        // The only likely errors are going to be a failure to reach the mirror, so return as such
        debug('transportStatusAndProps interpreting error as failure: %s', err.message );
        cb(null, {mirror2gateway: false, disconnected: true, transportStatuses: [{name: "MIRROR", status: 1}]})
      } else {
        if (DwebArchive.mirror) {
          (info.transportStatuses.find(s => s.name === "HTTP") || {}).name = "GATEWAY";
        }
        const httpstatus = info.transportStatuses.find(s=> s.name==='HTTP' || s.name==="GATEWAY");
        // Can mirror see gateway (used for Reload button on dweb-mirror)
        const mirror2gateway = DwebArchive.mirror && httpstatus && (httpstatus.status === 0)
        cb(null, {
          mirror2gateway,
          // If using mirror, and mirror offline dont display stuff mirror doesnt have
          // if !mirror (e.g. dweb.archive.org) never disconnected as can try IPFS/WebTorrent etc
          disconnected: DwebArchive.mirror && !mirror2gateway,
          transportStatuses: info.transportStatuses,  // Now set to those of Mirror
          directories: info.directories, // For save modal
          transportsClickable: !DwebArchive.mirror // Cant click transports if connected to Mirror
        });
      }
  })
}

async function _p_loadStreamRenderMedia(el, urls, { name=undefined, cb=undefined, preferredTransports=[]} = {}) {
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
  //TODO make this into a react component and update it via setState
  /*
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
          while (webtorrentStats.lastChild) {webtorrentStats.removeChild(webtorrentStats.lastChild)};
          webtorrentStats.appendChild(els);
        }
      }
    };
    torrent.on('download', throttle(updateSpeed, 250));
    torrent.on('upload', throttle(updateSpeed, 250));
    setInterval(updateSpeed, 1000);
    updateSpeed(); //Do it once
  }
  */
}
async function _p_loadStreamFetchAndBuffer(el, urls, { name=undefined, cb=undefined, preferredTransports=[]} = {}) {
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

async function p_loadStream(el, urls, { name=undefined, cb=undefined, preferredTransports=[]} = {}) { //CB version below
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
          await _p_loadStreamRenderMedia(el, streamUrls, {name, cb, preferredTransports})
        } else {
          // Next choice is to pass a HTTP url direct to <VIDEO> as it knows how to stream it.
          // TODO clean this nasty kludge up,
          // Find a HTTP transport if connected, then ask it for the URL (as will probably be contenthash) note it leaves non contenthash urls untouched
          // TODO if start seeing failures with wrong urls e.g. http://ipfs.io etc then may want to do a HEAD in p_httpfetchurl to check
          const httpurl = await DwebTransports.p_httpfetchurl(urlsresolved);
          if (httpurl) {
            el.src = httpurl;
          } else {
            await _p_loadStreamFetchAndBuffer(el, urlsresolved, {name, cb, preferredTransports});
          }
        }
      }
      el.play();
    } else { // No urls
      debug('ERROR: ReactSupport.p_loadStream didnt find any resolvable urls - cant load stream')
    }
  } catch(err) {
    console.error("Uncaught error in p_loadStream",err);
    throw err;
  }
}
/* Obsoleted as moved into AudioVideo.jsx
function loadStream(el, urls, opts = {}, cb) {
  p_loadStream(el, urls, opts)
  .then((res)=>{ try { cb(null,res)} catch(err) { debug("Uncaught error %O",err)}})
    .catch((err) => cb(err)); // Unpromisify pattern v5-cbOnly
}
*/

function preprocessDescription(description) {
  // Now catch some things that often appear in descriptions because it assumes running on archive page e.g. /server/commute/commute.jpg on "commute"
  // And handle multivalue (array) descriptions by concatenating with <br/>

  return !description ? description
    : (Array.isArray(description) ? description.join('<br/>') : description)
      .replace('\n', '<br/>')
      .replace(/src=(['"])http:\/\/www.archive.org\//gi, 'src=$1' + ReactConfig().root + '/') // src="/  absolute urls
      .replace(/src=(['"])\//gi, 'src=$1' + ReactConfig().root + '/'); // src="/  absolute urls

}

//Not exporting relativeurl as not used
export { ReactConfig, resolveUrls, p_resolveUrls, thumbnailUrlsFrom, getImageURI, loadImg, p_loadStream, transportStatusAndProps, preprocessDescription }