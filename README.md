# dweb-archive
User Interface to access the archive from the browser.
Builds on dweb-transports and dweb-objects, and typically (currently) loaded from dweb-transport

## Background
This library is part of a general project at the Internet Archive (archive.org)
to support the decentralized web.

## Goals
* to allow unmodified browsers to access the Internet Archive's millions of items
* to support as many of the IA's features as possible, adding them iteratively
* to use decentralized platforms for as many features as possible, without sacrificing functionality
* to avoid single points of failure where possible

## Installation
### All cases
```
git clone https://git@github.com/internetarchive/dweb-archive.git
cd dweb-archive

# install the dependencies including IPFS & WebTorrent and dweb-transports and dweb-objects
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

OR load via the bootloader, 
passing the url parameter will simulate what happens at https://dweb.archive.org/

`open "http://localhost:8080/bootloader.html?url=http://dweb.archive.org`

To test with limited transports, for example HTTP only, add the transport parameter.

`open "http://localhost:8080/archive.html?transport=HTTP"`


### Node Installation to work on this repo
Note that the only reason to do this would be to work on the code,

Do the "All Case install above"

Build (webpack) the bundles and copy needed files to dist/
`npm run build`

## See related:

* [Archive.org](https://dweb.archive.org/details) bootstrap into the Archive's page
* [Examples](https://dweb.me/examples) examples

### Repos:
* *dweb-transports:* Common API to underlying transports (http, webtorrent, ipfs, yjs)
* *dweb-objects:* Object model for Dweb inc Lists, Authentication, Key/Value, Naming and example html for these
* *dweb-serviceworker:* Run Transports in ServiceWorker (experimental)
* *dweb-archive:* Decentralized Archive webpage and bootstrapping
* *dweb-transport:* Original Repo, still has some half-complete projects

## Directory structure here
* dist - where files needed by dweb-transport are located
* fonts, images, includes/* include files that are located so that existing Archive HTML and JS can find them where expected
* images - holds images used by dweb html files
* originals - saved copies of some example Archive pages and metadata to allow comparisom with HTML generated
* archive.html - main file for displaying archive (detail or search) pages
* archive.js - top level for creating archive-bundle.js
* bootloader.html - entry point to the dweb, loads decentralized transport, and resolves a URL as a name
* dweb-archive-styles.css - CSS styles for dweb, note that it uses standard archive styles for most
* LICENSE - standard GNU Affero licence
* webpack.config.js - defines bundling, and in particular which files are needed for the distribution

## Class hierarchy
* ArchiveFile - represents a single file
* ArchiveItem - represents data structures for an item (a directory of files)
    * ArchiveBase - superclass for each item type, has the structure of displaying pages
        * Details - display a details page like archive.org/details/foo
            * AV - base page for Audio/Video items
                * Audio - display an Audio item
                * Video - display a Video item
            * DownloadsDirectory - for displaying the list of files in an item
            * Image - display an image item
            * Texts - display a Text item (TODO works - but not decentralized)
        * Search - display a search page like archive.org/search.php?query=foo
            * Collection - display a Collection item
            * Home - archive home page, acts like a search
        * DetailsError - display a line of text as an error
* Nav - common class for navigation structures (mostly at the top of the page) also maps item types to classes
* ReactFake - an expansion of dweb-objects/utils/createElement to fake react-like "createElement" allowing JSX to be used in JS
* Tile - used to represent each tile displayed in a search
* Util - a collection of tools, short functions, and dictionaries of use in multiple places

## API of key subclassed function

The general route to load a single Details item (TODO - writeup for Search) is ...


* Nav.nav_details(itemid)   - load and display a details page
    * Nav.factory
        * new Details({itemid}) - to get metadata
        * determine class of item e.g. Texts, video
        * new Video({itemid}).render => ArchiveBase.render
            * Details.wrap - build the elements
                * Nav.navwrap - the global navigation elements, menus etc
                * theatreIaWrap - wrap the main content in controls (e.g. play etc)
                    * Displays main content - highly variable between types (Texts, Image, Video etc)
                    * cherModal - display sharing info
                * itemDetailsAboutJSX - content about the main object
            * browserbefore - anything to do before putting the elements onto the page
                * archive_setup_push - put functions into a data structure (used by Archive's AJS) this is subclassed by each type
                * AJS_on_dom_loaded - run the functions saved with archive_setup_push (TODO or some other funciton - define)
            * domrender - display on the page
            * browserafter - anything after displaying on the page

For a *Search/Colletion/Home* the structure is slightly different
* Search.wrap
    * Nav.navwrap - navigation as for Details
    * banner - appear above tiles
    * rowColumnsItems - loops over results displaying Tiles
    * About & Forum tabs (for Collection only)


## See also
See [Dweb document index](https://github.com/internetarchive/dweb-transports/blob/master/DOCUMENTINDEX.md) for a list of the repos that make up the Internet Archive's Dweb project, and an index of other documents. 
