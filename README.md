# dweb-archive
User Interface to access the archive from the browser.
Builds on dweb-transports and typically (currently) loaded from dweb-transport

## Background
This library is part of a general project at the Internet Archive (archive.org)
to support the decentralized web.

## Goals
* to allow unmodified browsers to access the Internet Archive's millions of items
* to support as many of the IA's features as possible, adding them iteratively
* to use decentralized platforms for as many features as possible, without sacrificing functionality
* to avoid single points of failure where possible

## Installation
THESE INSTRUCTIONS PROBABLY WONT WORK - MORE RECENT ARE IN THE dweb-mirror repo
### All cases
```
git clone https://git@github.com/internetarchive/dweb-archive.git
cd dweb-archive

# install the dependencies including IPFS & WebTorrent and dweb-transports
npm install  
```
### Installation for testing in a browser

Do the "All Case install above"

Install a simple http-server, this may require sudo depending on permissions
```
npm run setuphttp
npm install -g http-server` 
cd dist
http-server
```
Now open a browser page.

Note: Firefox works better than Chrome for local usage as Chrome limits cross-origin 
http to 6 streams and we need to implement a limited http pool to fix this. 

`open "http://localhost:8080/archive.html"`

To test with limited transports, for example HTTP only, add the transport parameter.

`open "http://localhost:8080/archive.html?transport=HTTP"`


### Node Installation to work on this repo
Note that the only reason to do this would be to work on the code,

Do the "All Case install above"

Build (webpack) the bundles and copy needed files to dist/
`npm run build`

## See related:

* [Archive.org](https://dweb.archive.org) bootstrap into the Archive's page
* [Examples](https://dweb.me/examples) examples

### Repos:
* *dweb-transports:* Common API to underlying transports (http, webtorrent, ipfs, yjs)
* *dweb-objects:* Object model for Dweb inc Lists, Authentication, Key/Value and example html for these
* *dweb-serviceworker:* Run Transports in ServiceWorker (experimental)
* *dweb-archive:* Decentralized Archive webpage and bootstrapping
* *dweb-transport:* Original Repo, still has some half-complete projects
* *dweb-archivecontroller:* Object model for archive, includes routing table

## Directory structure here
* dist - where files needed by dweb-transport are located
* fonts, images, includes/* include files that are located so that existing Archive HTML and JS can find them where expected
* images - holds images used by dweb html files
* originals - saved copies of some example Archive pages and metadata to allow comparisom with HTML generated
* archive.html - main file for displaying archive (detail or search) pages
* archive.js - top level for creating archive-bundle.js
* dweb-archive-styles.css - CSS styles for dweb, note that it uses standard archive styles for most
* LICENSE - standard GNU Affero licence
* webpack.config.js - defines bundling, and in particular which files are needed for the distribution

## Class hierarchy 
* ArchiveFile - represents a single file
* ArchiveItem - represents data structures for an item (a directory of files)
    * ArchiveBase - Subclass ArchiveItem to add functionality specific to this UI
* ArchiveMember - represents a listing for an item (e.g. in a search)
* IAReactComponent - Extends ReactComponent to have common functionality across components
  * Lots of stand-alone components
  * AVDWeb - Adds functionality common to adding content to media tags
    * AudioDweb, VideoDweb 
* Nav - common class for navigation structures (mostly at the top of the page) also maps item types to classes

## See also
See [Dweb document index](https://github.com/internetarchive/dweb-transports/blob/master/DOCUMENTINDEX.md) for a list of the repos that make up the Internet Archive's Dweb project, and an index of other documents. 
