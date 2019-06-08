import React from './ReactFake';
import Search from "./Search";
import AnchorDetails from './components/AnchorDetailsFake'; // Have to use the Fake one as long as this is FakeReact
import {Tabby} from "@internetarchive/ia-components/index.js";
import {NavWrap} from '@internetarchive/ia-components/index.js';
import {AnchorModalGo} from './components/ModalGoFake';
import {AJS_on_dom_loaded} from "./Util";

export default class Collection extends Search {
    constructor({itemid=undefined, metaapi=undefined}={}) {
        super({ itemid, metaapi,
            // query:  'collection:'+itemid, // Replaced by more complex default query in dweb-archivecontroller:ArchiveItem._fetch_query
            sort:   '-downloads',   // This will be overridden based on collection_sort_order
        });
    }
    render(res) { // See other DUPLICATEDCODE#001
        var els = this.wrap();    // Build the els
        $('body').addClass('bgEEE'); //TODO remove jquery dependency
        React.domrender(els, res);  //Put the els into the page
        this.archive_setup_push(); // Subclassed function to setup stuff for after loading.
        AJS_on_dom_loaded(); // Runs code pushed by archive_setup - needed for image if "super" this, put it after superclasses
    }
    wrap() {
        /* Wrap the content up: wrap ( TODO-aside; navwrap; #maincontent; welcome; cher-modal; container-tabby-collection-row (TODO-columns-facets; columns-items) (tabby-about; tabby-form)
        returns:      elements tree suitable for adding into another render
         */
        //Note both description & rights need dangerousHTML and \n -> <br/>
        const metadata = this.metadata;
        const description = this.preprocessDescription(metadata.description); // Contains HTML (supposedly safe) inserted via innerHTML thing
        const rights = this.preprocessDescription(metadata.rights); // Contains HTML (supposedly safe) inserted via innerHTML thing

        return (
            <div id="wrap">
                {/*TODO needs "aside" */}
                <NavWrap item={this}/>
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>{/*--//.container-ia--*/}
                {this.banner()}
                {this.cherModal("collection")}
                <div class="container container-ia nopad">
                    <div id="tabby-collection" class="tabby-data in">
                        {this.rowColumnsItems()}
                    </div>{/*tabby-collection*/}
                </div>{/*.container*/}
                {/*TODO take a closer look at scripts on originals/prelinger lines 7360-7399*/}
                <div class="container container-ia nopad">
                    <div id="tabby-about" class="tabby-data hidden row">
                        <div class="row">
                            <div class="col-sm-7" style="margin-bottom:50px;">
                                <div class="about-box">
                                    <div class="micro-label">DESCRIPTION</div>
                                    <div  dangerouslySetInnerHTML={{__html: description}}></div>
                                    <br class="clearfix" clear="all"/>
                                </div>

                                <div class="about-box">
                                    <div class="micro-label">RIGHTS</div>
                                    <div  dangerouslySetInnerHTML={{__html: rights}}></div>
                                </div>

                                <div class="about-box">
                                    <div class="micro-label">ACTIVITY</div>
                                    <div class="activity-box">
                                        <h2 style="font-weight:100">
                                            <AnchorDetails className="stealth" identifier={this.itemid} sort="-reviewdate"><span
                                            className="iconochive-comment" aria-hidden="true"></span><span
                                            className="sr-only">comment</span> <span
                                            id="activity-reviewsN"></span></AnchorDetails>
                                        </h2>
                                    </div>
                                    <div class="activity-box">
                                        <h2 style="font-weight:100">
                                            <a class="stealth" href="#forum" onclick="$('#tabby-forum-finder').click()"><span class="iconochive-comments"  aria-hidden="true"></span><span class="sr-only">comments</span> <span
                                                    id="activity-forumN"></span></a>
                                        </h2>
                                    </div>
                                    <br class="clearfix" clear="all"/>
                                </div>
                            </div>{/* /.col-sm-7 */}
                            <div class="col-sm-5" style="margin-bottom:50px;">
                                {/* TODO-UPLOADER not supported - need way to turn email into userid - see Missing-API doc I think its there
                                <div class="about-box" style="background-color:rgb(251,242,221); margin-bottom:0;">
                                    <div class="topinblock"
                                         style="text-align:center; border-right:1px solid #ccc; padding:0 25px;margin-right:25px;">
                                        <div class="micro-label" style="margin-bottom:2px">Created on</div>
                                        <div style="font-size:18px;line-height:1.0;">
                                            June 4<br> 2005            </div>
                                    </div><div class="topinblock">
                                    {_listperson(metaFromUpdater({email: metadata.uploader}))}
                                    </div>
                                </div>
                                */}
                                {/* TODO-UPLOADER not supported - need way to turn email into userid - see Missing-API doc I think its there
                                    if (metadata.updater.length) {
                                        <div class="about-box" style="margin-top:0">
                                            <div class="micro-label">ADDITIONAL CONTRIBUTORS</div>
                                            {metadata.updater.map((uu) => [ ( <div class="hr"></div> ), _listperson({uploader: metaFromUpdater(u)}) ])}
                                        </div>
                                    }
                                */}
                                {/*TODO-GRAFS: not supported yet
                                <div class="grafs about-box"><div class="micro-label">VIEWS</div><h1>172,141,775</h1><div id="grafs1" class="grafs-content" data-id="prelinger"></div></div>
                                {/*TODO-GRAFS:  <div class="grafs about-box"><div class="micro-label">ITEMS</div><h1>6,911</h1><div id="grafs2" class="grafs-content" data-id="prelinger"></div></div>
                                <section
                                        class="grafs about-box js-top-regions-table"
                                        data-caption="Top Regions (Last 30 Days) – Beta"
                                        data-caption-class="micro-label"
                                        data-identifier=prelinger
                                        data-days="30"
                                        data-limit="10"
                                >
                                    <h3 class="micro-label">TOP REGIONS (LAST 30 DAYS) – BETA</h3>
                                    <p class="grafs-content js-top-regions-message">(data not available)</p>
                                </section> */}

                                {/*TODO-RELATED-COLLECTIONS not supported yet and not supported on e.g. archive.org/details/prelinger anyway
                                <div class="about-box">
                                    <div class="micro-label">RELATED COLLECTIONS</div>
                                    <div style="margin-top:10px;">
                                        <div class="topinblock">
                                            <span class="iconochive-collection"  aria-hidden="true"></span><span class="sr-only">collection</span>            </div><div class="topinblock">
                                        <b><a class="stealth" href="/details/ephemera">Ephemeral Films</a></b><br/>
                                        9,435 items
                                    </div>
                                    </div> This div repeats
                                </div> */}
                            </div>{/*!--/.col-sm-5-->*/}
                        </div>{/*<!--/.row-->*/}
                    </div>{/*<!--/#.tabby-about-->*/}
                    <div id="tabby-forum" class="tabby-data hidden row">{/*TODO-TABBY forum*/}Forum not yet supported on DWeb - heading to the legacy web...</div>
                </div>{/*container*/}
                {/*--TODO-ANALYTiCS is missing --*/}

            {/*--wrap--*/}</div>
        );
    }

    banner() {
        //TODO-DETAILS probably move this to the Search class and trigger based on presence of "metadata.identifier" (which is missing for Searches.)
        const metadata = this.metadata;
        const creator = (this.metadata.creator  &&  (metadata.creator.join(', ') != this.metadata.title) ? metadata.creator.join(', ') : '');
        //ARCHIVE-BROWSER note the elements below were converted to HTML 3 times in original version
        //TODO-DETAILS on prelinger, banner description is getting truncated.
        const description = !this.metadata.description ? undefined : this.preprocessDescription(this.metadata.description).replace(/(..\/)+..\//g, "../"); // Contains HTML (supposedly safe) inserted via innerHTML thing
        const imgsrc = this.thumbnailFile();
        const imgname = this.itemid + ".PNG";   // Required or rendermedia has difficulty knowing what to render since it doesnt take a mimetype
        return (
            <div className="welcome container container-ia width-max" style={{'backgroundColor':'white'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-11 col-sm-10 welcome-left">
                            <div id="file-dropper-wrap">
                                <div id="file-dropper"></div>
                                <img id="file-dropper-img" className="img-responsive" style={{'maxWidth':"350px", margin:'0 10px 5px 0'}} imgname={imgname} src={imgsrc}/>
                            </div>
                            <h1>{metadata.title}</h1>
                            <h4>{creator}</h4>
                            <div id="descript" style={{maxHeight:"43px", cursor:'pointer'}} dangerouslySetInnerHTML={{__html: description}}>
                            </div>
                        </div>
                        <div className="col-xs-1 col-sm-2 welcome-right">
                            <AnchorModalGo className="stealth" opts={{ignore_lnk:1,shown:AJS.embed_codes_adjust}}
                               data-target="#cher-modal"><span class="iconochive-share"  aria-hidden="true"></span><span class="sr-only">share</span><span class="hidden-xs-span"> Share</span></AnchorModalGo><br/>
                            {/*TODO-LOGIN /bookmarks isnt going to work, also not logged in https://github.com/internetarchive/dweb-archive/issues/new
                            <a class="stealth" href="/bookmarks.php?add_bookmark=1&amp;mediatype=collection&amp;identifier=prelinger&amp;title=Prelinger+Archives" onclick="return AJS.modal_go(this,{favorite:1})"
                               data-target="#confirm-modal"><span class="iconochive-favorite"  aria-hidden="true"></span><span class="sr-only">favorite</span><span class="hidden-xs-span"> Favorite</span></a><br/>
                            */}
                            {/*TODO-LOGIN /editxml isn't going to wrk - we aren't logged in. and its an absolute URL
                            <div id="editlink" style="display:none">
                              <a id="edlink" class="stealth" href="/editxml/prelinger"><span class="iconochive-edit"  aria-hidden="true"></span><span class="sr-only">edit</span><span
                                class="hidden-xs-span"> Edit</span></a><br/>
                                        <a class="stealth" href="//catalogd.archive.org/history/prelinger"><span class="iconochive-time"  aria-hidden="true"></span><span class="sr-only">time</span><span
                                class="hidden-xs-span"> History</span></a><br/>
                            </div> */}
                        </div>
                    </div>
                    <div class="tabbys">
                        <Tabby id="about" identifier={this.itemid} text="ABOUT"/>
                        <Tabby id="collection" identifier={this.itemid} text="COLLECTION" default/>
                        <Tabby id="forum" identifier={this.itemid} text="FORUM"/>
                        <div class="clearfix"> </div>
                    </div>
                {/*container*/}</div>
            {/*welcome*/}</div>
        );
    }
    
    archive_setup_push() {
        // Note the archive_setup.push stuff is subtly different from that for 'search'
        const query = this.query;
        archive_setup.push(function() { // archive_setup is in archive.js
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
