/**
 * This is a set of support functions of use to both ReactFake and real React
 *
 * It knows about Dweb architecture, but not about ReactFake.
 */
import map from 'async/map';
import Url from 'url';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember";
import ArchiveFile from "@internetarchive/dweb-archivecontroller/ArchiveFile";
import ArchiveItem from "@internetarchive/dweb-archivecontroller/ArchiveItem";
import from2 from "from2";
import RenderMedia from "render-media";
const debug = require('debug')('dweb-archive:ReactSupport');

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

  resolveImageUrls - asynchronous used by imgUrlOrStream
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

function _loadImgSrc(el, url, cb) {
  // Note different from one still in ReactFake
  el.src = url;
  if (cb) cb(undefined, el);  // Set attributes (shouldnt have kids)
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
  // fetch the file to a buffer and return the function to slice from it
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
async function imgUrlOrStream(el, name, urls, cb) {
  /*
  This is asynchronous converts urls in various formats to either a "file" data structure or a url (which may be a blob URL)
  * Step 1: canonicalize URLs
  * Step 2: Split into file / magnet / stream / other
  * Step 3: Setup to fetch (or in some cases fetch, buffer and pass pointer to buffer)
  * After: URL stuffed into img.src, or file passed to Render.render

  //TODO rewrite this to use callbacks internally
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
          ? {
            name: name,
            // Initiate a stream, & return a f({start, end}) => readstream
            createReadStream: await DwebTransports.p_f_createReadStream(streamUrls)
            // This function works just like fs.createReadStream(opts) from the node.js "fs" module.
          }
          : // Otherwise fetch the file to buffer and return file for rendermedia
          await bufferedFile(name, urls)
    );
  } catch(err) {
    debug("ERROR: Unable to imgUrlOrStream %s %s %s", name, urls, err.message);
    cb(null, "/images/Broken_document.png");
  }
}

function loadImg(el, name, urls, cb) { // Fork of p_loadImg to use Render instead of append
  /*
  This is the asynchronous part of loadImg, runs in the background to update the image.
  Previous version got a static (non stream) content and puts in an existing IMG tag but this fails in Firefox
  This version appends to a tag using RenderMedia.append which means using a stream
  Note it can't be inside load_img which has to be synchronous and return a jsx tree.
  */
  imgUrlOrStream(el, name, urls, (err, res) => { // Errors handled inside, and error image url returned
    if (typeof res === "string") {
      _loadImgSrc(el, res, cb);
    } else {
      RenderMedia.render(res, el, cb);
    }
  });
}


//Not exporting relativeurl as not used
export { ReactConfig, resolveUrls, p_resolveUrls, thumbnailUrlsFrom, imgUrlOrStream, loadImg }