import React from './ReactFake';

require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!

import Util from './Util';
import ArchiveBase from './ArchiveBase';
import Tile from './Tile';


/* Section to ensure node and browser able to use Headers, Request and Fetch */
/*
var fetch,Headers,Request;
if (typeof(Window) === "undefined") {
    //var fetch = require('whatwg-fetch').fetch; //Not as good as node-fetch-npm, but might be the polyfill needed for browser.safari
    //XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;  // Note this doesnt work if set to a var or const, needed by whatwg-fetch
    console.log("Node loaded");
    fetch = nodefetch;
    Headers = fetch.Headers;      // A class
    Request = fetch.Request;      // A class
} else {
    // If on a browser, need to find fetch,Headers,Request in window
    console.log("Loading browser version of fetch,Headers,Request");
    fetch = window.fetch;
    Headers = window.Headers;
    Request = window.Request;
}
*/

export default class Search extends ArchiveBase {
    /*
    Superclass for Searches - including Collections & Home

    Fields:
    Inherited from ArchiveBase: item
    items   List of items found
     */
    constructor({query='*:*', sort='', and='', limit=75, banner='', page=1, item=undefined, itemid=undefined}={}) { //TODO-IPFSIMAGE Remove
        super(itemid, {item: item});
        this.query = query;
        this.limit= limit;
        this.sort = sort;
        this.and = and;
        this.page = page;
    }

    navwrapped() {
        /* Wrap the content up: wrap ( TODO-DONATE | navwrap |
        TODO-DETAILS need stuff before nav-wrap1 and after detailsabout and need to check this against Search and Collection examples
        returns:      JSX elements tree suitable for passing to ReactDOM.render or ReactDOMServer.renderToStaticMarkup
         */
        //TODO-DETAILS is putting the description (in 'htm' in as raw html which would be a nasty security hole since that comes from user !
        return (
            <div id="wrap">
                { new Nav().navwrapJSX() }
                {/*TODO - follow structure used by Details and check matches archive.html/details examples */}
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {/*--TODO-DETAILS check below here matches originals/search.html this is coming from temp_all.html--*/}
                {this.banner()}
                <div class="container container-ia nopad">

                    <div class="row">{/*--DONT NEED TILL HAVE FACETS --*/}
                        {/*TODO-DETAILS Facets not available over advancedsearch*/}
                        {/*--<div class="columns-facets"></div> TODO-DETAILS-FACETS column goes here--*/}
                        <div class="columns-items" style="margin-left: 0px;">{/*--TODO-DETAILS-FACETS delete the margin-left when add the facet column --*/}


                                <div class="sortbar">
                                    <a href="#" class="focus-on-child-only pull-right" onclick="return AJS.tiles_toggle(this,'search')">
                                        <div class="lists-button topinblock iconochive-list" data-toggle="tooltip"
                                             title="Show&nbsp;as&nbsp;list"></div>
                                    </a>
                                    <a href="#" class="focus-on-child-only pull-right" onclick="return AJS.tiles_toggle(this,'search')">
                                        <div class="tiles-button topinblock iconochive-tiles" data-toggle="tooltip"
                                             title="Show&nbsp;thumbnails"></div>
                                    </a>
                                    <div class="hidden-xs hidden-sm pull-right" style="height:50px;width:30px;"></div>
                                    <div class="micro-label pull-right hidden-tiles">
                                        <input type="checkbox" name="showdetails" onchange="AJS.showdetails_toggle(this,'search')"/>
                                        <span class="hidden-xs-span">SHOW </span><span>DETAILS</span>
                                    </div>

                                    <div class="up-down">
                                        <div class="iconochive-up-solid disabled" aria-hidden="true"></div>
                                        <span class="sr-only">up-solid</span>
                                        <div class="iconochive-down-solid disabled" aria-hidden="true"></div>
                                        <span class="sr-only">down-solid</span></div>
                                    <div class="topinblock">
                                        <div class="hidden-md hidden-lg">
                                            <select class="ikind-mobile form-control" onchange="AJS.ikind_mobile_change(this)">
                                                <option data-id="relevance" selected="selected">RELEVANCE</option>
                                                <option data-id="views">VIEWS</option>
                                                <option data-id="title">TITLE</option>
                                                <option data-id="date-archived">DATE ARCHIVED</option>
                                                <option data-id="date-published">DATE PUBLISHED</option>
                                                <option data-id="date-reviewed">DATE REVIEWED</option>
                                                <option data-id="creator">CREATOR</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="topinblock">
                                        <div class="hidden-xs hidden-sm">
                                            <div class="sort-by">
                                                SORT BY
                                            </div>
                                            {/*--TODO-DETAILS this dropdown doesnt reorder, test other UI elements in vicinity as well--*/}
                                            <span class="big-label blue-pop">
                                                <a class="ikind stealth in" data-id="relevance" onClick={`Nav.nav_search({query:query)`}>RELEVANCE</a>
                                                <div class="iconochive-dot ikind-sep"></div>
                                                <a class="ikind stealth" data-id="views" onClick={`Nav.nav_search({query:query, "sort": "-downloads"})`}>VIEWS</a>
                                                <div class="iconochive-dot ikind-sep"></div>
                                                <a class="ikind stealth" data-id="title" onClick={`Nav.nav_earch({query:query. "sort": "titleSorter"})`}>TITLE</a>
                                                <div class="iconochive-dot ikind-sep"></div>
                                                <a class="ikind stealth" id="date_switcher" data-id="date-archived"
                                                   onClick={`Nav.nav_search({query:query, sort="-publicdate" })`}>DATE ARCHIVED</a>
                                                <div class="iconochive-dot ikind-sep hidden"></div>
                                                <a class="ikind stealth hidden" data-id="date-published"
                                                   onClick={`Nav.nav_search{query:query, "sort": "-date"})`}>DATE PUBLISHED</a>
                                                <div class="iconochive-dot ikind-sep hidden"></div>
                                                <a class="ikind stealth hidden" data-id="date-reviewed"
                                                   onClick={`Nav.nav_search({query:query, "sort": "-reviewdate"})`}>DATE REVIEWED</a>
                                                <div class="iconochive-dot ikind-sep"></div>
                                                <a class="ikind stealth" data-id="creator"
                                                   onClick={`Nav.nav_search(${query+"&amp;sort=creatorSorter"})`}>CREATOR</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>{/*--/.sortbar--*/}
                                <div class="sortbar-rule"></div>
                            {/*--/.co-top-row--*/}


                            <div style="position:relative">
                                <div id="ikind-search" class="ikind in">

                                    <div class="results">
                                        <div class="item-ia mobile-header hidden-tiles" data-id="__mobile_header__">
                                            <div class="views C C1"> <span class="iconochive-eye" aria-hidden="true"></span><span class="sr-only">eye</span> </div>
                                            <div class="C234">
                                                <div class="C C2">Title</div>
                                                <div class="pubdate C C3"> <div> <div>Date Archived</div> </div> </div>
                                                <div class="by C C4">Creator</div>
                                            </div>
                                            <div class="C C5"></div>
                                        </div>
                                        {this.items.map(function(item, n){ // Note rendering tiles is quick, its the fetch of the img (async) which is slow.
                                            return new Tile().render(item);
                                        })}
                                    </div>{/*--/.results--*/}
                                    <center class="more_search">
                                    {/*--TODO-DETAILS check what is happening in AJS.more_search with this URL and can use page: this.page+1--*/}
                                    <a class="btn btn-info btn-sm" style="visibility:hidden"
                                       onclick="return AJS.more_search(this,{`/search.php?query=${query}&page=`},1)" href="#">MORE
                                        RESULTS</a><br/>
                                    <span class="more-search-fetching">Fetching more results <img src="./images/loading.gif"/></span>
                                    </center>
                                </div>
                            </div>

                        </div>{/*--.columns-items--*/}



                    </div>{/*--/.row--*/}
                </div>

                {/*--TODO-ANALYTiCS is missing --*/}
            {/*--wrap--*/}</div>
        );
    }

    archive_setup_push() {
        archive_setup.push(function() {
            AJS.date_switcher(`&nbsp;<a href="/search.php?query=${query}&amp;sort=-publicdate"><div class="date_switcher in">Date Archived</div></a> <a href="/search.php?query=${query}&amp;sort=-date"><div class="date_switcher">Date Published</div></a> <a href="/search.php?query=${query}&amp;sort=-reviewdate"><div class="date_switcher">Date Reviewed</div></a> `);
            AJS.lists_v_tiles_setup('search');
            AJS.popState('search');
            $('div.ikind').css({visibility:'visible'});
            AJS.tiler();      // Note Traceys code had AJS.tiler('#ikind-search') but Search and Collections examples have it with no args
            $(window).on('resize  orientationchange', function(evt){
                clearTimeout(AJS.node_search_throttler);
                AJS.node_search_throttler = setTimeout(AJS.tiler, 250);
            });
            // register for scroll updates (for infinite search results)
            $(window).scroll(AJS.scrolled);
        });
    }
    browserBefore() {
        $('body').addClass('bgEEE');
    }

    banner() { // On Search "banner" is a search form
        let query=this.query;
        let searchURL=`https://archive.org/advancedsearch.php?q={query}`; //TODO-LINK TODO-DETAILS-ONLINE check how used
        let addBookmarkURL=`https://archive.org/bookmarks.php?add_bookmark=1&amp;mediatype=search&amp;identifier={query}&amp;title={query}`;  //TODO figure out decentralized bookmark submission
        return (
        <div class="container container-ia width-max"
             style="background-color:#d8d8d8; padding-top:60px; border:1px solid #979797; padding-bottom:25px;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-2 col-md-2 col-lg-1 hidden-xs">
                        <h3 style="margin:3px 0 0 0; text-align:right;">Search</h3>
                    </div>
                    <div class="col-sm-8 col-md-8 col-lg-9">
                        <div class="searchbar" style="margin-bottom:10px; margin-right:60px;">
                            {/*--TODO-DETAILS change this form into a advancedsearch query--*/}
                            <form class="form search-form js-search-form"
                                  id="searchform"
                                  method="get"
                                  role="search"
                                  action="https://archive.org/searchresults.php"
                                  data-event-form-tracking="Search|SearchForm"
                                  data-wayback-machine-search-url="https://web.archive.org/web/*/"> {/* TODO-WAYBACK*/}
                                <div class="form-group" style="position:relative">
                                    <div style="position:relative">
                                        <span aria-hidden="true">
                                          <span class="iconochive-search" style="position:absolute;left:4px;top:7px;color:#999;font-size:125%"
                                                aria-hidden="true"></span><span class="sr-only">search</span>            </span>
                                        <input class="form-control input-sm roundbox20 js-search-bar" size="25" name="search"
                                               placeholder="Search" type="text" value={query}
                                               style="font-size:125%;padding-left:30px;"
                                               onclick="$(this).css('padding-left','').parent().find('.iconochive-search').hide()"
                                               aria-controls="search_options"
                                               aria-label="Search the Archive. Filters and Advanced Search available below."
                                        />
                                    </div>

                                    <div
                                            id="search_options"
                                            class="search-options js-search-options is-open"
                                            aria-expanded="true"
                                            aria-label="Search Options"
                                            data-keep-open-when-changed="true"
                                    >
                                        <fieldset>
                                            <label><input type="radio" name="sin" value="" checked/>Search metadata</label>
                                            <label><input type="radio" name="sin" value="TXT"/>Search full text of books</label>
                                            <label><input type="radio" name="sin" value="TV"/>Search TV captions</label>
                                            <label><input type="radio" name="sin" value="WEB"/>Search archived web sites</label>
                                        </fieldset>
                                        <a href={searchURL} class="search-options__advanced-search-link">Advanced Search</a>
                                    </div>

                                    <button class="btn btn-gray label-primary input-sm"
                                            style="position:absolute;right:-60px;top:0;"
                                            type="submit">GO
                                    </button>
                                    <input type="hidden" name="limit" value="100"/>
                                    <input type="hidden" name="start" value="0"/>
                                    <input type="hidden" name="searchAll" value="yes"/>
                                    <input type="hidden" name="submit" value="this was submitted"/>
                                </div>{/*--/.form-group --*/}
                            </form>
                        </div>{/*--/.searchbar--*/}
                    </div>
                    <div id="search-actions" class="col-sm-2 col-md-2 col-lg-2">
                        <span class="iconochive-share" aria-hidden="true"></span><span class="sr-only">share</span> Share<br/>
                        <a class="stealth"
                           href={addBookmarkURL}
                           onclick="return AJS.modal_go(this,{favorite:1})"
                           data-target="#confirm-modal"><span class="iconochive-favorite" aria-hidden="true"></span><span
                                class="sr-only">favorite</span> Favorite</a><br/>
                    </div>
                </div>{/*--/.row--*/}
            </div>{/*--/.container--*/}
        </div>
        );
    }

}
