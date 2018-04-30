require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
import Search from "./Search";

export default class Collection extends Search {
    constructor(itemid, item) {
        super({
            query:  'collection:'+itemid,
            sort:   '-downloads',   // This will be overridden based on collection_sort_order
            itemid: itemid,
            item:   item,
        });
    }

    wrap() {
        /* Wrap the content up: wrap ( TODO-aside; navwrap; #maincontent; welcome; TODO-cher-modal; container-tabby-collection-row (TODO-columns-facets; columns-items) (tabby-about; tabby-form)
        returns:      JSX elements tree suitable for passing to ReactDOM.render or ReactDOMServer.renderToStaticMarkup
         */
        return (
            <div id="wrap">
                {/*TODO needs "aside" */}
                { new Nav().navwrap() }
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {this.banner()}
                {/*TODO-cher-modal*/}
                <div class="container container-ia nopad">
                    {/*TODO needs to spot tab=xxx parameter and open FOrum or About tab */}
                    <div id="tabby-collection" class="tabby-data in">
                        {this.rowColumnsItems()}
                    </div>{/*tabby-collection*/}
                </div>{/*.container*/}
                {/*TODO take a closer look at scripts on originals/prelinger lines 7360-7399*/}
                <div class="container container-ia nopad">
                    <div id="tabby-about" class="tabby-data hidden row">{/*TODO-TABBY about*/}About not yet supported on Dweb</div>
                    <div id="tabby-forum" class="tabby-data hidden row">{/*TODO-TABBY forum*/}Forum not yet supported on Dweb</div>
                </div>{/*container*/}
                {/*--TODO-ANALYTiCS is missing --*/}

            {/*--wrap--*/}</div>
        );
    }



    banner() {
        const item = this.item;
        //TODO-DETAILS probably move this to the Search class and trigger based on presence of "item" (which is missing for Searches.)
        const creator = (item.metadata.creator  &&  (item.metadata.creator != item.metadata.title) ? item.metadata.creator : '');
        //ARCHIVE-BROWSER note the elements below were converted to HTML 3 times in original version
        //TODO-DETAILS on prelinger, banner description is getting truncated.
        const description = this.preprocessDescription(item.metadata.description); // Contains HTML (supposedly safe) inserted via innerHTML thing
        const thumbnaillinks = item.metadata.thumbnaillinks;
        const imgname = this.itemid + ".PNG";   // Required or rendermedia has difficulty knowing what to render since it doesnt take a mimetype

        return (
            <div className="welcome container container-ia width-max" style={{'backgroundColor':'white'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-11 col-sm-10 welcome-left">
                            <div id="file-dropper-wrap">
                                <div id="file-dropper"></div>
                                <img id="file-dropper-img" className="img-responsive" style={{'maxWidth':"350px", margin:'0 10px 5px 0'}} imgname={imgname} src={thumbnaillinks}/>
                            </div>
                            <h1>{item.metadata.title}</h1>
                            <h4>{creator}</h4>
                            <div id="descript" style={{maxHeight:"43px", cursor:'pointer'}} dangerouslySetInnerHTML={{__html: description}}>
                            </div>
                        </div>
                        <div className="col-xs-1 col-sm-2 welcome-right">
                        </div>
                    </div>
                    {/* Tabbys are under construction - href links wont work and onclick probably doesnt*/}
                    {/*TODO pushstate inside AJS.tabby will eb wrong - prob full URL - but need to recognize &tab=about in URL before can fix */}
                    <div class="tabbys">
                        <div class="tabby">
                            <div>
                                <a id="tabby-about-finder"
                                   class="stealth"
                                   href="/details/prelinger&tab=about"
                                   onclick="return AJS.tabby(this,'tabby-about')">
                                    <span class="tabby-text">ABOUT</span>
                                </a>
                            </div>
                        </div>
                        <div class="tabby in">
                            <div>
                                <a id="tabby-collection-finder"
                                   class="stealth tabby-default-finder"
                                   href="/details/prelinger&tab=collection"
                                   onclick="return AJS.tabby(this,'tabby-collection')">
                                    <span class="tabby-text">COLLECTION</span>
                                </a>
                            </div>
                        </div>
                        <div class="tabby">
                            <div>
                                <a id="tabby-forum-finder"
                                   class="stealth"
                                   href="/details/prelinger&tab=forum"
                                   onclick="return AJS.tabby(this,'tabby-forum')">
                                    <span class="tabby-text">FORUM</span>
                                </a>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                {/*container*/}</div>
            {/*welcome*/}</div>
        );
    }
    archive_setup_push() {
        // Note the archive_setup.push stuff is subtly different from that for 'search'
        archive_setup.push(function() {
            AJS.date_switcher(`&nbsp;<a href="/search.php?query=${query}&amp;sort=-publicdate"><div class="date_switcher in">Date Archived</div></a> <a href="/search.php?query=${query}&amp;sort=-date"><div class="date_switcher">Date Published</div></a> <a href="/search.php?query=${query}&amp;sort=-reviewdate"><div class="date_switcher">Date Reviewed</div></a> `);
            AJS.lists_v_tiles_setup('collection');
            $('div.ikind').css({visibility:'visible'});
            AJS.popState('');
            AJS.tiler();      // Note Traceys code had AJS.tiler('#ikind-search') but Search and Collections examples have it with no args
            $(window).on('resize  orientationchange', function(evt){
                clearTimeout(AJS.tiles_wrap_throttler);
                AJS.tiles_wrap_throttler = setTimeout(AJS.tiler, 250);
            });
            // register for scroll updates (for infinite search results)
            $(window).scroll(AJS.scrolled);
        });
    }

    browserBefore() {
        $('body').addClass('bgEEE');
    }

}
