import React from './ReactFake';
import { stringify } from '@stratumn/canonicaljson';
// Other Archive Repos
import {homeQuery} from '@internetarchive/dweb-archivecontroller/Util';
// This repo
import ArchiveBase from './ArchiveBase';
import { AJS_on_dom_loaded } from "./Util";
import { ComboSearchWrap } from "./components/SearchPage";


/* Section to ensure node and browser able to use Headers, Request and Fetch */

// See other almost DUPLICATEDCODE#003 (iaux and dweb-archive)
function _onefield(key, value) {
    return Array.isArray(value)
      ? value.map(v => _onefield(key, v)).join(' OR ')
      // This next line uses stringify instead of toString() because we want  '"abc"' and '1' i.e. quotes if its a string
      : (`${key}:${stringify(value)}`);
}

function queryFrom(query) {
    return Object.entries(query).map(kv => _onefield(kv[0], kv[1])).join(' AND '); // k1:v1 AND k2:v2
}
// End of DUPLICATEDCODE#0003

const searchConfig = {
    rows: 30,  // How many to retrieve per page, smaller numbers load quicker, but then scroll down will have to get next page
}

export default class Search extends ArchiveBase {
    /*
     * Combines what used to be Search and Collection TODO add Account and Home

    Fields:
    Inherited from ArchiveBase: item
    items   List of items found
     */
    constructor({ query=undefined, sort='', and='', rows=searchConfig.rows, page=1, metaapi=undefined,
                    itemid=undefined, noCache=false }={}) {
        super({itemid, metaapi, sort});
        if (typeof(query) === "object") { // form { creator: "Foo bar" ... }
            query = queryFrom(query);
        }
        this.query = query; // Note this should be an UNENCODED query  or an object
        this.rows= rows;
        this.and = and;
        this.page = page;
        this.noCache= noCache;
    }

    render(res) { // See other DUPLICATEDCODE#001
        var els = this.wrap();    // Build the els
        document.body.classList.add('bgEEE');
        React.domrender(els, res);  //Put the els into the page
        this.archive_setup_push(); // Subclassed function to setup stuff for after loading.
        AJS_on_dom_loaded(); // Runs code pushed archive_setup - needed for image if "super" this, put it after superclasses
    }

    wrap() {
        /* Wrap the content up: wrap ( TODO-DONATE | navwrap |
        TODO-DETAILS need stuff before nav-wrap1 and after detailsabout and need to check this against Search and mediatype=collection examples
        returns:      JSX elements tree suitable for adding into another render
        NOTE subclassed in collection
         */
        // Note also used by Home, but not by Account
        const mediatype = this.metadata ? this.metadata.mediatype : "search";
        const identifier = this.itemid;
        return (
          <div id='wrap'>
              <ComboSearchWrap item={this}/>
          </div>
        ); //TODO-FAKEREACT div is here to keep ReactFake happy
    }

    archive_setup_push() { // run in render
        const mediatype = this.metadata ? this.metadata.mediatype : "search";
        const self = this;
        const query = this.query;
        //TODO figure out what this is doing, and replace with AnchorSearch etc
        archive_setup.push(function() { // archive_setup is in archive.js
            AJS.date_switcher(
              (mediatype === "collection")
                ? `&nbsp;<a href="/search.php?query=${query}&amp;sort=-publicdate"><div class="date_switcher in">Date Archived</div></a> <a href="/search.php?query=${query}&amp;sort=-date"><div class="date_switcher">Date Published</div></a> <a href="/search.php?query=${query}&amp;sort=-reviewdate"><div class="date_switcher">Date Reviewed</div></a> `
                : `&nbsp;<a href="https://dweb.archive.org/search/${encodeURIComponent(query)+"?sort=-publicdate"}" onclick='${Nav.onclick_search({query:query, sort: "-publicdate"})}'><div class="date_switcher in">Date Archived</div></a> <a href="https://dweb.archive.org/search/${encodeURIComponent(query)+"?sort=-date"}" onclick='${Nav.onclick_search({query:query, sort: "-date"})}'><div class="date_switcher">Date Published</div></a> <a href="https://dweb.archive.org/search/${encodeURIComponent(query)+"?sort=-reviewdate"}" onclick='${Nav.onclick_search({query:query, sort: "-reviewdate"})}'><div class="date_switcher">Date Reviewed</div></a> `
            );
            AJS.lists_v_tiles_setup(mediatype); // Needs to be collection | search and probably |account
            AJS.popState(mediatype === 'collection' ? '' : 'search'); //on archive.org: collection=>'' search=>'search'
            $('div.ikind').css({visibility:'visible'});
            //AJS.tiler();
            $(window).on('resize  orientationchange', function(evt){
                clearTimeout(AJS.tiles_wrap_throttler);
                AJS.tiles_wrap_throttler = setTimeout(AJS.tiler, 250);
            });
        });
    }
}
