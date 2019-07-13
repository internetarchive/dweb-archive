import React from './ReactFake';
import Search from "./Search";
import AnchorDetails from './components/AnchorDetailsFake'; // Have to use the Fake one as long as this is FakeReact
import {ImageDweb, Tabby} from "@internetarchive/ia-components/dweb-index.js";
import {NavWrapWrapper} from './components/NavWrapWrapper';
import {AnchorModalGo} from './components/ModalGoFake';
import {AJS_on_dom_loaded} from "./Util";
import { CherModal } from './components/CherModal';
import { CollectionBanner, CollectionTabby } from './components/SearchPage';


export default class Collection extends Search {
    constructor({itemid=undefined, metaapi=undefined}={}) {
        super({ itemid, metaapi,
            // query:  'collection:'+itemid, // Replaced by more complex default query in dweb-archivecontroller:ArchiveItem._fetch_query
        });
    }
    render(res) { // See other DUPLICATEDCODE#001
        var els = this.wrap();    // Build the els
        document.body.classList.add('bgEEE');
        React.domrender(els, res);  //Put the els into the page
        this.archive_setup_push(); // Subclassed function to setup stuff for after loading.
        AJS_on_dom_loaded(); // Runs code pushed by archive_setup - needed for image if "super" this, put it after superclasses
    }
    wrap() {
        /* Wrap the content up: wrap ( TODO-aside; navwrap; #maincontent; welcome; cher-modal; container-tabby-collection-row (TODO-columns-facets; columns-items) (tabby-about; tabby-form)
        returns:      elements tree suitable for adding into another render
         */
        //Note both description & rights need dangerousHTML and \n -> <br/>
        console.assert(!this.isDark) // Will be mediatype=collection so not isDark
        return (
            <div id="wrap">
                {/*TODO needs "aside" */}
                <NavWrapWrapper item={this}/>
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                <CollectionBanner
                  identifier={this.itemid}
                  imgsrc={this.thumbnailFile()}
                  description={!this.metadata.description ? undefined : this.preprocessDescription(this.metadata.description).replace(/(..\/)+..\//g, "../")}
                  creator={this.metadata.creator}
                  title={this.metadata.title}
                />
                <CherModal identifier={this.itemid} creator={this.metadata.creator} mediatype={this.metadata.mediatype} title={this.metadata.title}/>
                <div class="container container-ia nopad">
                    <div id="tabby-collection" class="tabby-data in">
                        {this.rowColumnsItems()}
                    </div>{/*tabby-collection*/}
                </div>{/*.container*/}
                {/*TODO take a closer look at scripts on originals/prelinger lines 7360-7399*/}
                {/*--TODO-ANALYTiCS is missing --*/}
                <CollectionTabby
                  identifier={this.itemid}
                  description={this.preprocessDescription(this.metadata.description)}
                  rights={this.preprocessDescription(this.metadata.rights)}
                />
            </div>
        );
    }

    archive_setup_push() {
        // Note the archive_setup.push stuff is subtly different from that for 'search'
        const query = this.query;
        archive_setup.push(function() { // archive_setup is in archive.js
            //TODO - figure out what AJS.date_switcher does and build into SearchSwitcher component
            AJS.date_switcher(`&nbsp;<a href="/search.php?query=${query}&amp;sort=-publicdate"><div class="date_switcher in">Date Archived</div></a> <a href="/search.php?query=${query}&amp;sort=-date"><div class="date_switcher">Date Published</div></a> <a href="/search.php?query=${query}&amp;sort=-reviewdate"><div class="date_switcher">Date Reviewed</div></a> `);
            AJS.lists_v_tiles_setup('collection');
            $('div.ikind').css({visibility:'visible'});
            AJS.popState('');
            //AJS.tiler();      // Note Traceys code had AJS.tiler('#ikind-search') but Search and Collections examples have it with no args - dont want it here anyway, as breaks per-image Tiler in at least Local.jsx
            $(window).on('resize  orientationchange', function(evt){
                clearTimeout(AJS.tiles_wrap_throttler);
                AJS.tiles_wrap_throttler = setTimeout(AJS.tiler, 250);
            });
            // register for scroll updates (for infinite search results)
            //NOW in TILEGRID.js $(window).scroll(AJS.scrolled); TODO-UXLOCAL add to Search.js
        });
    }


}
