# Internet Archive / IPFS architecture
This document covers the data architecture of the the Internet Archive Dweb project, as it relates to IPFS.

Last updated to match reality 10 May 2018 (everything here has been reviewed, still need to add WebTorrent & Contenthash)

# Use cases we are interested in
* Exploring the Archive on an unmodified browser in a manner as close as possible to the existing archive.org/details/prelinger
* Ability to upload files to the archive and dweb at same time, in particular the Kino application where they will upload to IPFS first and then inform us.
* Ability to mirror collections onto a browser or server, providing extra security (more copies) and potentially better access in places archive.org is blocked.
* Serving Archive video streaming from WebTorrent and IPFS
* These are not the only use cases but are indicative of various examples, we are trying to build an architecture that will support the above use cases AND others.

## Overview: Archive IPFS current server and code architecture

The current setup consists of ...

* Clients running:
    * archive.html - static simple html framework, UI is built at run time by the JS
    * A few webpacked javascript libraries that include our code and IPFS etc
    * bootstrap.html - resolves archive names to find metadata from IPFS etc and loads archive.html
    * Service Worker and/or Wayback browser extension alternatives to bootstrap.html
* Research machine that we can iterate rapidly on, without impacting production, hosting:
    * Nginx providing HTTPS and routing as required
    * A gateway server (gateway.dweb.me) running in Python with a consistent URL syntax.
    * A IPFS instance running urlstore on same machine as above
    * A Torrent tracker and client
    * Other local servers will also be added to the same machine
    * Local storage by “contenthash”.
* IA production servers, currently unmodified, serving files and metadata

### Notes about the above:
* archive.html is static, unlike the rest of archive.org there is no server side PHP build and both this file and the JS bundles could be served from dweb (e.g. IPFS).

## Data architecture.

Clients navigate to resources by three methods (Browse, Search or by external URLS including ItemIDs)

All queries are JSON based and all access to the IA production servers goes through gateway.dweb.me so we can add content to the output, perform extra services, and mitigate CORS issues.

These queries will gradually be migrated to decentralized services where possible, and remaining functionality on gateway.dweb.me will be gradually integrated into production servers.

### Data architecture consists of:

#### First terminology ….
* An Archive `item` is our unit of management, logically it is a directory of related “files" e.g. a video, its thumbnails etc.
* `Metadata` is a package of JSON information, it is held at both the Item and File level.
* A `collection` is a user or automatically generated group of Items, an Item can be in multiple collections.

### Metadata
* Metadata originates from IA servers for an Item
    * e.g. [https://archive.org/metadata/commute]
    * includes name, description,
    * Is stored on those servers in a .xml  e.g. [commute/commute_meta.xml](https://archive.org/metadata/commute]) file but is served as JSON at the above URL.
    * Includes list of files, including, for each file except the metadata.xml file, a sha1
* Metadata for each item,
    * Retrievable by  https://gateway.dweb.me/arc/archive.org/metadata/commute to rebuild
    * https://ipfs.io/ipfs/QmQr2AUBVMTJNj9AVfuKqS5oCxmTQjWiSxZLWA96WqETub to fetch
    * consists of above with additional fields added by gateway for item: magnetlink, thumbnaillinks
    * And for each file: contenthash (sha1 as multihash), magnetlink:
* On first access to https://gateway.dweb.me/arc/archive.org/metadata/*) by a user.
    * The metadata is retrieved from the IA metadata call (archive.org/metadata/commute)
    * it is and stored in local contenthash accessible store
    * its stored on IPFS (http API add)
    * A Leaf record is created. (see below allows decentralized retrieval of metadata)
    * Thumbnails are generated and links added (See content thumbnail links (below) for an anomaly in handling thumbnails.)
    * See below .. the IPFS link is not added to every file in the item at each step because of current IPFS scaling issues.
* Metadata for each file.
    * e.g. https://gateway.dweb.me/arc/archive.org/metadata/commute/commute.avi
    * This is the same as the File component of above, except that when the metadata is requested by a user,
    the file is urlstored to IPFS and an ipfs link is added to the metadata.

### Search
* AdvancedSearch API on IA servers
    * [https://archive.org/advancedsearch?output=json&q=prelinger&rows=75&sort\[\]=&and\[\]=]
    * Allows arbitrary searches, return a subset of the metadata for each item found.
    * Collections are a specific, much used case: e.g. [https://archive.org/metadata/advancedsearch?output=json&q=collection:prelinger&rows=75&sort\[\]=-downloads]
* Advanced search on Gateway
    * e.g. [https://gateway.dweb.me/arc/archive.org/advancedsearch?output=json&q=prelinger&rows=75&sort\[\]=item_size&and\[\]=mediatype=movie]
    * Follows the same syntax as the above direct IA search, which it calls
    * Returns the same data with additional fields for each result
        * thumbnaillinks - thumbnails for the item (see metadata notes)
        * collection0title - name of primary collection
        * collection0thumbnaillinks - thumbnails for that collection (on IPFS, contenthash, direct etc)
    * Will also create a Leaf record for each item <TO BE IMPLEMENTED> so client doesn’t need to return to Archive for metadata

### Content
* Downloadable content on archive
    * e.g. https://archive.org/download/commute/commute.avi
    * Also available with slightly different semantics as
    [stream/commute/commute.avi](https://archive.org/stream/commute/commute.avi)
* Downloadable content in Dweb
    * Same content as above is available via gateway on https://gateway.dweb.me/arc/archive.org/download/commute/commute.avi
    * On first request by a user for the metadata for that file.
        * It is pushed to IPFS
        * however that push is not available due to the IPFS issues with URLstore (files not available to WSS clients; WSS clients not able to connect to peer; and CIDv1 not supported)
    * When/if IPFS issues are solved and scaling capabilities are confirmed we could start pushing all files to IPFS,
    at progressively earlier and earlier stages, and adding IPFS links to metadata on all archive.org queries.

### Thumbnails
Thumbnail links are slightly odd due to an IA anomaly.

* From archive.org
    * They are generated and stored in a database, *not* as files.
    * They are retrieved from e.g.  [archive.org/services/img/commute](https://archive.org/services/img/commute)
* From Gateway
    * During item-level metadata queries they are retrieved from the archive.org/services/img link
    and added to IPFS & Contenthash and links to these locations are added to the item level metadata.
* From Dweb
    * They are accessible via the IPFS links added in the metadata (since we use files.add instead of urlstore)

### Names
* Leaf records (one per archive item)
    * e.g. https://gateway.dweb.me/arc/archive.org/leaf/commute
    * Map a name (relative to enclosing domains - especially archive.org)
        * a set of locations to fetch the metadata for the item including some or all of: ipfs, contenthash and direct URL
    * Signed by Archive <TO BE IMPLEMENTED
    * stored as items in Key Value tables in multiple places (e.g. http lists, YJS) on first retrieval or <TO BE IMPLEMENTED> when pushed by a retrieval of the metadata.
* Domain records  ( very small number)
    * e.g. “metadata" line of [https://gateway.dweb.me/getall/table/NACL%20VERIFY%3AdZ.../domain]([https://gateway.dweb.me/getall/table/NACL%20VERIFY%3AdZHrTMea0OgOF2zI6GsAN-rlcTa4ejcyGj_TSg_cwEY%3D/domain)
    * Map name of domain to tables (YJS, IPFS etc) to look up leafs or subdomains


# Future IPFS integration
We'd like to integrate at a much more comprehensive level with IPFS,
but that is dependent on if/when the first few small-scale trials start working properly.

## IPFS access to content
At the moment IPFS to content is not working well due to three issues.
* Files added to urlstore have a CIDv1 which cant be read on the JS-IPFS
* Files added via urlstore aren’t advertised to the DHT so a separate ping to http://ipfs.io is needed before clients (connected via WSS to ipfs.io can see them)
* Protocol have been unable to get WSS working to the IPFS instance at archive.org

## IPFS items
In the future an Archive item (except for its metadata.xml) could be added as a IPFS item (i.e. an IPLD with a link for each file). However currently none of the options work:
* we cant add the item recursively through http api to urlstore
* We cant add recursively via the http api to ipfs files.add because it would create a duplicate local copy of content
* We could possibly add each file individually through urlstore but we’d have to then code a IPLD writer in Python
which is considerable development since none of the underlying tools we’d need (e.g. to write CBOR instead of json) are available in python yet.

Since this is a major coding task, for limited value, its on hold till at least after the Dweb Summit

## IPFS scale
We aren’t looking at adding content at scale until the issues with individual items are solved, but items that may cause issues include.
* URLstore has to be working well, since files.add is not possible due to disk requirements of excessive duplication.
* There has been concern expressed by Kyle @ Protocol about the numbers of files flooding the DHT
* Currently it appears that we have to re-notify to the DHT every 12 hours, currently this takes 16 seconds per item,
so requires multiple threads running continuously even with current low volumes. There are obvious scaling issues here.

## IPFS single point issues
Single point is important to us for the use cases of:
* accessing archive resources in situations where direct access to archive.org is not available (blocked or down)
* Avoiding tracking in situations where that is important to the viewer

Currently there are single point issues.
* Until we can push larger volumes to IPFS a lot of queries still have to run through archive.org
* WSS is single-point especially since clients can only see files added to the node they are connected to.

## USE Case - Mirroring collections

* We will under user request through various ways copy a collection to a directory on the Mirror.
* Each item will be mapped as a directory, with the name being the Archive “item-id” (a human readable string).

* A local IPFS instance will be able to serve it.
    * If an unmodified version is possible we could use Go running urlstore
    * otherwise If there is a node-JS version of IPFS running as a server we’ll run this.
    * There are concerns that this will double the disk usage for a user UNLESS we can use the go version with urlstore

Control will be via local browser accessing a Node-JS server editing a configuration file.

In the future we could look at mirroring using IPFS to fetch from archive.org indirectly (e.g. making use of other copies),
but there are issues that will need to be solved first.
* The URLStore issues detailed above
* The scaling issues above.
* Unless content is already actively mirrored then all content is still going to traverse the mirror<>archive.org link directly,
there is little point using IPFS for it as the bandwidth will be the same or larger.
* We'd still need to duplicate it into a local directory on the user's machine


## See also
See [Dweb document index](https://github.com/internetarchive/dweb-transports/blob/master/DOCUMENTINDEX.md) for a list of the repos that make up the Internet Archive's Dweb project, and an index of other documents. 
