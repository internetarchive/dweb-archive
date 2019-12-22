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

## Release notes

* v0.2.10: Refactor to use routing from dweb-archivecontroller instead of Naming in dweb-transports; epub support; support bookreader urls; bugs in languages and related items
* v0.2.9: Incorporate Bug fixes in naming refactor in dweb-transports
* v0.2.8: Major naming refactor; getImageURI refactor; 
* v0.2.7: Add .map files; yuck hand edit of play8.min,js; debugging naming refactor
* v0.2.6: oops - need "production" bundles
* v0.2.5: major naming refactor and some missing files
* v0.2.4: Enhanced Media player integration (try cd_abba_abba)
* v0.2.3: Radio player; reenable Gun by default
* v0.2.2: License images; webpack includes hack fix for url bug
* v0.2.1: Nav bar: clickability of statuses; "GATEWAY", flag; Save on Search/Collection/Local; flags as grid; BUGS with specialidentifiers, save; crawl indicators;
* v0.2.0: move i18n to iaux; remove "originals"; include dweb-transports; separate dweb-archive-dist package
* v0.1.98: Review CherModal, Home; TOS bug; Search Crawl indicator; I18n lots; Audio bug; 
* v0.1.97: I18n CherModal; refactor archive.html
* v0.1.96: Refactor bookreader component; improvements on Account page; Auto-pay Audio; item*P*rop
* v0.1.96: Include transports explicitly based on transports parameter to URL;
* v0.1.96: Multilingual - partial, includes the framework and some screens in multiple languages
* v0.1.95: webtorrent partial and (via dweb-archivecontroller) fix bug with /local 
* v0.1.94: document.title refactor and remove dependency on dweb-objects.deletechildren
* v0.1.93: download links issue; accounts updloads display; naming refactor
* v0.1.92: Remove incorrect Loading on no items; missing thumbnails; mirror="", align metadata display; image bug 
* v0.1.91: Refactor search; fix bugs in ... video from 0.1.90; carousel;  
* v0.1.90: yarn upgrade; undo regression to CSS from archive less
* v0.1.89: Transportstatus; CSS; Image loading refactor
* v0.1.88: Bugs - presuming disconnected, and Home page; Recompile less
* v0.1.87: Yarn upgrade
* v0.1.86: Componentize finalle eliminate ReactFake; single, setState-able, React Component <Page>; is_dark error message;
* v0.1.85: Support canSave, disconnected; Componentize Search
* v0.1.84: Grey - AnchorDownload / DownloadOptions
* v0.1.83: Componentisation in Details and Collections
* v0.1.82: Yarn upgrade; browser2archive flag; multivalue transport=; url history fix; carousel; sort on search; componentize chermodal and theatres; save button;
* v0.1.81: Disable reload when unavailable; Local and Home download count; Titles on pages
* v0.1.80: Prettier bytes output; bugs in settings and local  
* v0.1.79: componentize: ItemDetailsAboutJSX, DownloadDirectory, SearchSwitcher, ImageDweb; NavNavWrapper; refactor members->membersFav,membersSearch; reload/no-cache on searches; obsolete nav_home; 
* v0.1.78: Fix search links on details page (includes refactor DetailsAbout into iaux)
* v0.1.77: Include bug fixes from dweb-archivecontroller v0.1.65
* v0.1.76: Include fixes from iaux-PR<=202 and dweb-archivecontroller v0.1.64
* v0.1.74: Fix some issues with downloads
* v0.1.73: Fix issue with mirror in offline (introduced in 0.1.72)
* v0.1.72: Fix some issues when mirror not specified e.g. on dweb.archive.org
* v0.1.71: Characters on crawl list to SVG; Complex refactor of history
* v0.1.70: Add icons to new buttons
* v0.1.69: Add settings and reload buttons to DwebNav
* v0.1.68: Add settings component and some refactoring
* v0.1.67: Support Reload
* v0.1.66: Bugfix local pages and default user config
* v0.1.65: Fix local page if no tasks
* v0.1.64: Fix bootloader for "home"; White dot in crawl button; nav-wrap CSS; Simple-list queries;
* v0.1.63: webpack fixes from ia-components (unpushed) and dweb-archivecontroller 0.1.59
* v0.1.62: DetailsCollectionList supporting icons, dweb-archivecontroller/Util.js refactor, support home and local better
* v0.1.61: Updated ia-components and dweb-archivecontroller in webpack
* v0.1.60: move navwrap into IAUX and rebuild transport and crawl indicators
* v0.1.59: Bug fix with undefined description
* v0.1.58: Added crawl UI CSS (rest is in ia-components) 
* v0.1.58: ScrollableTileGrid component 
* v0.1.58: Move components into @internetarchive/ia-components repo
* v0.1.57: Simplify handling of urls, especially removes unneeded metadata fetch from a lot of thumbnails on mirror
* v0.1.56: Component support reorganized and expanded for IAUX
* v0.1.55: Move setconfig url; AnchorDetails & Tabby components; work with playlist API (in dweb-archivecontroller 0.1.52)
* v0.1.53: Refactor components for IAUX; Incorporate dweb-archivecontroller fix to relateditems; 
* v0.1.52: Bug fix
* v0.1.51: Support bookreader (more work to do on this)
* v0.1.50: Set title on window from item title, or query.
* v0.1.49: config button; IAReactComponent; 
* v0.1.48: Repeatable metadata; 
