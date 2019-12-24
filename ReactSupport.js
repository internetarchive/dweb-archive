/**
 * This is a set of support functions of use to React components,
 * especially creating a bridge to the DwebTransports API
 *
 * It knows about Dweb architecture, and DwebTransports
 */
/* global DwebTransports */
import map from 'async/map';
import path from 'path';
import Url from 'url';
import from2 from "from2";
import RenderMedia from "render-media";
import waterfall from "async/waterfall";
import throttle from "throttleit";
import { ArchiveMember, ArchiveFile, ArchiveItem, formats, routed } from "@internetarchive/dweb-archivecontroller";
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
                  MIRR-> MIRROR/AAA
                  DWEB-> dweb://arc/archive.org/AAA
                         TODO could be gateway/URL TODO probably gets /arc/aaa wrong
    PPP://AAA/BBB     -> PPP://AAA/BBB

  p_resolveUrls - asynchronous used by _imgUrlOrStream & p_loadStream
    [url*]  -> [ p_resolveUrls(url)*]
    ArchiveMember -> AM.urls() -> GATEWAY/services/img/IDENTIFIER
    ArchiveFile -> (magnet, ipfs, contenthash, GATEWAY/download/IDENTIFIER/FILENAME ] (possible extra roundtrip if not populated
    //AAA             -> https://AAA
    [.]/AAA       (warning if not /search* /services* /detail*)
                  MIRR-> MIRROR/AAA
                  DWEB-> dweb://arc/archive.org/AAA
                         TODO could be gateway/URL TODO probably gets /arc/aaa wrong
    PPP://AAA/BBB     -> PPP://AAA/BBB

 */

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
    // Carefull DwebArchive.mirror could be null so don't test against typeof === undefined
    return [relativeurl((DwebArchive.mirror || 'https://archive.org')+"/", url)].filter(u => !!u);  // e.g. /foo => [https://bar.com/foo]
  } else if (url.startsWith("./")) {
    if (!url.startsWith("./images")) {
      console.warn("Relative URLs are not a great idea as what to be relative to is often unclear", url, options); //could genericise to use rel instead of config but might not catch cases e.g. of /images
    }
    return [relativeurl((DwebArchive.mirror|| 'https://archive.org')+"/", url)].filter(u => !!u);
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
      // ArchiveMember -> AM.urls() -> GATEWAY/services/img/IDENTIFIER
      url.urls(cb);   // This will be fast - just services, wont try and ask gateway for metadata and IPFS ima
    } else if (url instanceof ArchiveFile) {
      // ArchiveFile -> (magnet, ipfs, contenthash, GATEWAY/download/IDENTIFIER/FILENAME ]
      url.urls(cb);                           // This could be slow, may have to get the gateway to cache the file in IPFS
    } else {
      cb(null, resolveUrls(url));        // Synchronous code will work
    }
  }
}

/* Not currently used, but useful to keep around as cold do ...
function bufferedFile(name, routedUrls, cb) {
  /-**
   * fetch the file to a buffer and return the function to slice from it
   * returns: { name, createReadStream: f(opts => buffer)}
   *-/
  //TODO-MULTI-GATEWAY need to set relay: true once IPFS different CIDs (hashes) from browser/server adding
  DwebTransports.fetch(routedUrls, {timeoutMS: 5000, relay: false}, (err, buff)=> {
    cb(err,  err ? undefined : {
    name: name,
    createReadStream: function (opts={}) {
      return from2([buff.slice(opts.start || 0, opts.end || (buff.length - 1))])
    }});
  });
  //Maybe should not time out since streams will almost always get used, and in this case could be a large file and last resort to use a download url.
*/

function _bufferedFileAsURL(name, routedUrls, cb) {
  /**
   * fetch the file to a buffer and return the function to slice from it
   * returns: { name, createReadStream: f(opts => buffer)}
   */
    //TODO-MULTI-GATEWAY need to set relay: true once IPFS different CIDs (hashes) from browser/server adding
  const mimetype = formats("ext", path.extname(name).toLowerCase(), {first: true}).mimetype;
  DwebTransports.fetch(routedUrls, {timeoutMS: 5000, relay: false}, (err, buff) => {
    if (err) {
      cb(err);
    } else {
      try {
        const blob = new Blob([buff], {type: mimetype});
        const url = URL.createObjectURL(blog);
      } catch (err) { // Blob making can be problematic, so catch and throw up
        debug("Failed to make blob for %o: %s", routedUrls, err.message);
        cb(err);
      }
      cb(null, url.href);
    }
  });  //Maybe should not time out since streams will almost always get used, and in this case could be a large file and last resort to use a download url.
}

function getImageURI(name, urls, cb) {
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
    p_resolveUrls(urls, (err, resolvedUrls) => { // Handles a range of urls include ArchiveFile - always an array, can be empty if fail to find any
      if (err) {
        cb(err);
      } else {
        if (urls instanceof ArchiveFile && urls.name() === "__ia_thumb.jpg") {
          //TODO this looks bogus, cant understand how works since cant filter an ArchiveFile ? Maybe its never called
          // Dont use magnet urls on __ia_thumb.jpg as opens many webtorrents and fails when tiling TODO this could be a parameter
          resolvedUrls = resolvedUrls.filter(u => !u.includes("magnet:"));
        }  //Examples: [https:archive.org/services/foo]
        // Step 2: Split into file / magnet / stream / other
        const routedUrls = routed(resolvedUrls); // Route urls including to mirror
        // Three options - depending on whether can do a stream well (WEBSOCKET) or not (HTTP, IPFS); or local (File:)
        let fileurl = routedUrls.find(u => u.startsWith("file"));
        let magneturl = routedUrls.find(u => u.includes('magnet:'));
        let streamUrls = DwebTransports.urlsValidFor(routedUrls, "createReadStream");
        streamUrls = streamUrls.filter(u => !u.href.startsWith("ipfs:")); // IPFS too unreliable (losing data, no errors) to use for streams esp for thumbnails
        // Step 3: Return as url or { name: createReadStream(f(range opts)=>stream)
        if (fileurl) {
          cb(null, fileurl);
        } else if (streamUrls.length) {
          const mimetype = formats("ext", path.extname(name).toLowerCase(), {first: true}).mimetype;
          DwebTransports.createReadStream(streamUrls, {}, (err, s) => {
            if (err) {
              cb(err);
            } else {
              streamToBlobURL(s, mimetype, cb);
            }
          });
          // Special case just one http or https url - e.g. when going to mirror. Note we've canonicalized it above so nothing gained by passing to DwebTransports
        } else if ((routedUrls.length === 1) && routedUrls[0].startsWith('http')) {
          cb(null, routedUrls[0]);
          // Otherwise fetch the file to buffer and return file for rendermedia
        } else {
          //TODO this is inefficient, its going to fetch in one go, store in buffer return stream to buffer then to blob ... short cut it but do incrementally as problems with this code before
          _bufferedFileAsURL(name, routedUrls, cb); // { name, createReadStream: f(opts=>buff) }
        }
      }
    });
  } catch(err) {
    debug("ERROR: Unable to _imgUrlOrStream %s %o %s %o", name, urls, err.message, err);
    cb(null, "/images/Broken_document.png");
  }
}

function transportNowAndWhenChanges(cb) {
  // call Callback now
  transportStatusAndProps(cb);
  // and each time status changes
  const f = (event) => transportStatusAndProps(cb);
  DwebTransports.addEventListener("statuschanged", f);
  return f; // So transportListenerClear can unwind it
}
function transportListenerClear(f) {
  DwebTransports.removeEventListener("statuschanged", f);
}

function transportStatusAndProps(cb) {
  /**
   * This function checks on the status of the transport layer,
   * and returns an object with various status indicators that the UI can use.
   *
   * It only does any http activity IFF we are connected to a mirror, AND http status isn't returning info (i.e. its not polling)
   *
   */
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
      } else { // Connected to mirror, want upstream
        const infoUrl = DwebArchive.mirror + "/info"; //TODO-DM242 where is /info in future
        DwebTransports.httptools.p_GET(infoUrl, {}, cb2);
      } // Note an error in contacting Mirror will skip to end and not update
    }], (err, info) => {
      // Info is either status of our connection to mirror if applicable, or our or mirrors connection upstream
      if (err) {
        // The only likely errors are going to be a failure to reach the mirror, so return as such
        debug('transportStatusAndProps interpreting error as failure: %s', err.message );
        cb(null, {mirror2gateway: false, disconnected: true, transportStatuses: [{name: "MIRROR", status: 1}]})
      } else {
        // Copy info.transportStatues as edit iit impacts the check for it changing in TransportHTTP
        const transportStatuses = info.transportStatuses.map(s => Object.assign({},s));
        if (DwebArchive.mirror) {
          (transportStatuses.find(s => s.name === "HTTP") || {}).name = "GATEWAY";
        }
        const httpstatus = transportStatuses.find(s=> s.name==='HTTP' || s.name==="GATEWAY");
        // Can mirror see gateway (used for Reload button on dweb-mirror)
        const mirror2gateway = DwebArchive.mirror && httpstatus && (httpstatus.status === 0)
        cb(null, {
          mirror2gateway,
          // If using mirror, and mirror offline dont display stuff mirror doesnt have
          // if !mirror (e.g. dweb.archive.org) never disconnected as can try IPFS/WebTorrent etc
          disconnected: DwebArchive.mirror && !mirror2gateway,
          transportStatuses: transportStatuses,  // Now set to those of Mirror
          directories: info.directories, // For save modal
          transportsClickable: !DwebArchive.mirror // Cant click transports if connected to Mirror
        });
      }
  })
}

async function _p_loadStreamRenderMedia(el, routedUrls, { name=undefined, preferredTransports=[]} = {}, cb) {
  /*
      Render item by passing a data structure with a stream creating function to the RenderMedia
      See p_loadStream for arguments
   */
  const file = {
    name: name,
    createReadStream: await DwebTransports.p_f_createReadStream(routedUrls, {preferredTransports})
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
function _p_loadStreamFetchAndBuffer(el, routedUrls, { name=undefined, cb=undefined, preferredTransports=[]} = {}) {
  /*
      Render item by fetching a buffer and passing to the RenderMedia
      This is the worst choice, if can't handle as a stream
      See p_loadStream for arguments
   */
  DwebTransports.fetch(routedUrls, (err, buff) => {
    // currently not timing out which is probably OK since it should always be last choice.
    if (err) {
      if (cb) { cb(err); }
    } else {
      const file = {
        name: name,
        createReadStream: function (opts) {
          if (!opts) opts = {};
          return from2([buff.slice(opts.start || 0, opts.end || (buff.length - 1))])
        }
      }
      RenderMedia.render(file, el, cb);  // Render into supplied element
    }
  });  //Typically will be a Uint8Array, note that this is a fallback to http, only used if streams not available,
}

async function p_loadStream(el, urls, { name=undefined, preferredTransports=[]} = {}, cb) { //CB version below
  /*
      More complex strategy. ....
      If the Transports supports urls/createReadStream (webtorrent only at this point) then load it.
      If its a HTTP URL use that
      Dont try and use IPFS till get a fix for createReadStream

      el: HTML element to load into (the video, img or audio tag)
      urls:   relative or absolute url, array of url, or ArchiveFile i.e. flexible!
      name:   Name of the stream - this is important to something, but I can't remember what
      cb(err,el): Passed to RenderMedia.render and called back on failure or when can play/view the element
  */
  p_resolveUrls(urls, (err, urlsabs) => { // [ url* ] where url is absolute (not root or directory relative)
    if (err) {
      cb(err);
    } else {
      const urlsresolved = routed(urlsabs); // Allow names among urls
      // Strategy here ...
      // If serviceworker && webtorrent => video src=
      // If can createReadStream (IPFS when fixed; webtorrent) => rendermedia
      // If http => video src
      // Default fetch as bytes and
      if (!urlsresolved.length) {
          // No urls
          const errString = 'ERROR: ReactSupport.p_loadStream didnt find any resolvable urls - cant load stream';
          debug(errString);
          cb(new Error(errString));
      } else { // At least one url to try
        const streamUrls = DwebTransports.urlsValidFor(urlsresolved, "createReadStream");
        if (streamUrls.length) {
          _p_loadStreamRenderMedia(el, streamUrls, {name, preferredTransports}, cb);
        } else {
          // Next choice is to pass a HTTP url direct to <VIDEO> as it knows how to stream it.
          // TODO clean this nasty kludge up,
          // Find a HTTP transport if connected, then ask it for the URL (as will probably be contenthash) note it leaves non contenthash urls untouched
          const httpurl = routed(urlsabs, {wantOneHttp: true});
          if (httpurl) {
            el.src = httpurl;
            cb(null, el);
          } else { // Worst case, buffer whole file
            _p_loadStreamFetchAndBuffer(el, urlsresolved, {name, preferredTransports}, cb);
          }
        }
      }
    }
  });
}

function preprocessDescription(description) {
  // Now catch some things that often appear in descriptions because it assumes running on archive page e.g. /server/commute/commute.jpg on "commute"
  // And handle multivalue (array) descriptions by concatenating with <br/>

  return !description ? description
    : (Array.isArray(description) ? description.join('<br/>') : description)
      .replace('\n', '<br/>')
      .replace(/src=(['"])http:\/\/www.archive.org\//gi, 'src=$1/') // src="/  absolute urls become root-relative (works on mirror or dweb.archive.org)
      // .replace(/src=(['"])\//gi, 'src=$1' + upstreamPrefix() + '/'); // src="/  root relative urls
}

//Not exporting relativeurl as not used
export { resolveUrls, getImageURI, p_loadStream, transportNowAndWhenChanges, transportStatusAndProps, transportListenerClear, preprocessDescription }