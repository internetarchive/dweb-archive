# dweb.archive.org - Overview

This document covers the overall architecture of the the Internet Archive Dweb project at a high level.

Last edited to match reality 14 August 2018

## Contents below

* Major Components: Bootloader; ArchiveUI
* Dweb Integtration: IPFS, GUN, WEBTORRENT, YJS
* TODO's 
* See Also: repos, issues, ipfs-architecture


## Major Components
### Bootloader

* It lives in dweb-archive/bootloader.html or an extension currently in dweb-ext but moving into the Wayback extension
* Process:
    * Canonicalizes the URL it was called from, 
    * uses dweb-objects/Domain to resolve the name into some addresses, 
    * retrieves some HTML
    * and loads it into the browser.
* TODO: incoporate some other URL patterns and to match IPFS's Companion extension and/or Mozilla's library
    
### Archive UI 
* Core: lives in dweb-archive/archive.html which loads the rest of the UI from dweb-archive and functionality from dweb-transports and dweb-objects
* Process: lives mostly in Nav.js - its not identical for each type but at a high level
    * Creates an object depending on whether its a Search/Collection or Details
    * Fetches metadata or performs the search in the .fetch() method of the object 
    * Displays it via its .render() method (see below)
    * One wrinkle is that after retrieving the metadata for a Details object, it can create a subclass of Details (Text, Audio etc) and do the render on that.
* fetch(): 
    * If its an item 
        * it fetches metadata by: 
            * Resolving a name /arc/archive.org/metadata/foo to Gun & the gateway's HTTP Url 
            * Uses the dweb-transports layer to fetch those URLs
            * If it goes through Gun then Gun checks its cache, and if not loaded calls the Gateway's HTTP URL
        * The Gateway
            * calls the IA standard metadata API
            * Adds files as appropriate to Super-peers (IPFS)
            * Adds missing metadata fields (magnet link)
        * One wrinkle is that because of scaling issues we only load the file into IPFS if there is a specific metadata call for the file, rather than the item.
    * If its a Search
        * It turns the query into an AdvancedSearch URL and fetches from the Gateway
        * The Gateway:
            * calls the IA standard advancedsearch API
            * Adds missing files where appropriate - mostly these are thumbnail images for the result loaded to IPFS
            * Adds missing metadata fields esp thumbnail links in IPFS
* render():
    * Uses a nested hierarchy of classes (See class hierarchy in README.md <<TODO move class hierarchy>>) to allow for common code where appropriate.
    * A typical render call - e.g for `new Video(itemid).render`
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
    * All these calls 
        * use JSX (a mix of HTML/Javascript) 
        * which webpack compiles to calls to React.createELement
        * And in ReactFake.js is a React clone that just implments createElement
        * React.createElement has a lot of special case code to handle in particular URLs
            * Over time I expect to put more special case code here, and remove from the individual JSX elements.

## Dweb integration

Each component of the Dweb is integrated somewhat differently. 

### GUN 

* is integrated in the Name record for /arc/archive.org/metadata, its currently only used as a KeyValueTable.
* That name record points to a gun url like gun://arc/archive.org/metadata/foo
* The dweb-transports class recognizes these URLs in Transports.js & TransportGun.js
* TransportGun connects to a Gun peer at the gateway
* That Gun peer (dweb-transport/Gun) is modified so that it hijacks a call to /arc/archive.org/metadata
    * TODO - this is in process to make this a signed record as in <pubkey>/arc/archive.org/metadata
* The hijacker calls the gateway metadata
    
### IPFS
* See [archive_architecture.md](./archive_architecture_ipfs.md)

### WEBTORRENT
* The magnet links are included in metadata
* ReactFake opens a stream via a call to Transports
* dweb-transports/Transports.js > TransportWEBTORRENT.js recognize these magnet links
* The magnet link also includes a HTTPS fallback which the webtorrent library handles transparantly to us
    
### YJS
* Used as a KeyValueTable, but not currently used
            
##TODO's
    
See [github/../dweb-archive/issues](https://github.com/internetarchive/dweb-transports/issues) for most of what needs doing

TODO create a meta-task in issues for a summary of what needs doing

## See also

* List of repos in [README.md](../README.md)
* Issues for each repo on github
* [IPFS Architecture](./archive_architecture_ipfs.md) which also has some general topics <<TODO move the general topics here>>
