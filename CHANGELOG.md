## Release notes

* v0.2.13: Bug in dweb-archivecontroller.routing webpacked
* v0.2.12:
  * Add missing bookreader/static files
  * CSS update less and move fonts around
  * Cleanup includes: remove unneeded dependencies, yarn upgrade/install; rebuild .css and .js from new releases (but not new code from petabox)
  * Add missing loading.gif and update get script
  * Update IA javascript play8 playset polyfill
* v0.2.11: Typo in bookreader; 
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
