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

Please see the installation instructions in the 
[dweb-mirror repo](https://github.com/internetarchive/dweb-mirror)
They are much more recent than the ones below. 

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
`webpack --mode development`

## See related:

* [Archive.org](https://dweb.archive.org) bootstrap into the Archive's page

### Repos:
* *dweb-transports:* Common API to underlying transports (http, webtorrent, ipfs, yjs)
* *dweb-archive:* Decentralized Archive webpage and bootstrapping
* *dweb-transport:* Original Repo, still has some half-complete projects
* *dweb-archivecontroller:* Object model for archive, includes routing table

## Directory structure here
##### Directories
* components - React components used by the UI (see also ia-components)
* dist - all that is needed to run the UI - this is also in its own npm package.
* docs - should be some documentation, but its a bit out of date
* ia-components - More React components, these are dual purpose, they don't depend on Dweb
* images - extra images used (there are also ones in dist/images copied from archive.org)
* includes - files copied over from internet archive, where we build the CSS and JS 
* node_modules - installed from the dependencies in package.json by `yarn install`
* util - just has throttler.js and to be honest I can't remember why its off on its own
* web_modules - compiled by pix for web components (radio-player is the only one, but that has dependencies)
##### Files
* archive.html - main file for displaying archive (detail or search) pages
* archive.js - top level for creating archive-bundle.js
* dweb-archive-styles.css - CSS styles for dweb, note that it uses standard archive styles in includes/archive.css for most
* LICENSE - standard GNU Affero licence
* webpack.config.js - defines bundling, and in particular which files are needed for the distribution
* ... some more TODO documentation

## Class hierarchy 
* ArchiveFile - represents a single file
* ArchiveItem - represents data structures for an item (a directory of files)
    * ArchiveBase - Subclass ArchiveItem to add functionality specific to this UI
* ArchiveMember - represents a listing for an item (e.g. in a search)
* React.Component - Standard React class used for building components
  * Lots of stand-alone components
  * AVDWeb - Adds functionality common to adding content to media tags
    * AudioDweb, VideoDweb 
* Nav - common class for navigation structures (mostly at the top of the page) also maps item types to classes
