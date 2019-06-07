import React from './ReactFake';
import Search from './Search';
import {Tabby} from "@internetarchive/ia-components/index.js";
import {NavWrap} from '@internetarchive/ia-components/index.js';
import {AJS_on_dom_loaded} from "./Util";

export default class Account extends Search {
    /*

    General layout of functions.

     */

    constructor({itemid=undefined, metaapi=undefined}={}) {
        super({ itemid, metaapi,
            query:  'uploader:'+itemid,
            sort:   '-publicdate',   // This will be overridden based on collection_sort_order
        });
    }

    name() {
        return this.itemid.replace(/_/g,' ').replace('@',''); // Canonical name from id, may have better ways to get this - see @tracey_pooh for case needing this one.
    }
    async fetch_query(opts) {
        // Subclass ArchiveItem.fetch_query
        this.query = `uploader:"${this.metadata.uploader}"`;
        this.sort = '-publicdate';
        return await super.fetch_query(opts); // Unclear if return or opts used, but should send it.
    }
    render(res) { // See other DUPLICATEDCODE#001
        var els = this.wrap();    // Build the els
        $('body').addClass('bgEEE'); //TODO remove jquery dependency
        React.domrender(els, res);  //Put the els into the page
        this.archive_setup_push(); // Subclassed function to setup stuff for after loading.
        AJS_on_dom_loaded(); // Runs code pushed archive_setup - needed for image if "super" this, put it after superclasses
    }
    wrap() {
        /*
        Wraps all page content
        Context: body wrap script
        Content: wrap ( navwrap, main ( script, account-uniform ( description&picture, tabbys-dynamic), tabby-uploads ( facets, columns-items ) ) )

        Built out from a download of Tracey's account page on 10June2018
         */
        //if (typeof AJS != 'undefined') AJS.lists_v_tiles_setup('account');
        return (
            <div id="wrap">
                {/* Missing donate-banner and scripts & css before it */}
                <NavWrap item={this}/>
                {/*--Begin page content --*/}
                <main id="maincontent">
                    <div class="container container-ia">
                        {/*-- <script> if (typeof AJS != 'undefined') AJS.lists_v_tiles_setup('account'); </script> --*/}
                    </div>{/*--.container-ia --*/}
                    {this.welcome()}
                    {this.uploads()}
                    {this.tabbyPosts()}
                </main>
            {/*--/#wrap--*/}</div>
        );
    }

    tabbyPosts() {
        let name = this.name();
        return (
            <div class="container container-ia nopad">
                <div id="tabby-posts" class="tabby-data hidden row">
                    <div class="box">
                        <h1>Posts by {name}</h1>
                        {/*-- NOTE: extra div required by IE bec. table width=100% is set --*/}
                        <div>
                            <table class="forumTable  table table-striped table-condensed table-hover">
                                <tr class="backColor1 forumRowHead">
                                    <td>Subject</td>
                                    <td>Poster</td>
                                    <td>Forum</td>
                                    <td>Replies</td>
                                    <td>Date</td>
                                </tr>
                                {/*-- TODO-ACCOUNT this is a loop  need query for forum posts https://github.com/internetarchive/dweb-archive/issues/86--*/}
                                <tr><td>Still being implemented</td></tr>
        {/*
                                <tr valign="top" class="eve forumRow">
                                    <td>
                                        <a href="/post/1089612">Re: Why can't we adjust the volume anymore?</a>
                                    </td>

                                    <td>
                                        <a href="/iathreads/forum-display.php?poster=tracey%20pooh">tracey pooh</a>
                                    </td>

                                    <td>
                                        <a href="/about/faqs.php#forum">faqs</a>
                                    </td>

                                    <td>
                                        0
                                    </td>


                                    <td>
                                        <nobr class="hidden-sm hidden-xs">Apr 16, 2018 11:21am</nobr>
                                        <span class="hidden-md hidden-lg smalldate">Apr 16, 2018 11:21am</span>
                                    </td>
                                </tr>
                                <tr valign="top" class="odd forumRow">
                                    <td>
                                        <a href="/post/1089570">Re: Why can't we adjust the volume anymore?</a>
                                    </td>

                                    <td>
                                        <a href="/iathreads/forum-display.php?poster=tracey%20pooh">tracey pooh</a>
                                    </td>

                                    <td>
                                        <a href="/about/faqs.php#forum">faqs</a>
                                    </td>

                                    <td>
                                        1
                                    </td>


                                    <td>
                                        <nobr class="hidden-sm hidden-xs">Apr 14, 2018 12:29pm</nobr>
                                        <span class="hidden-md hidden-lg smalldate">Apr 14, 2018 12:29pm</span>
                                    </td>
                                </tr>
                                */}
                                {/* -- End of forum loop */}
                            </table>
                            {/* TODO-ACCOUNT rethink when have query above
                            <br/><b><a href="/iathreads/forum-display.php?poster=tracey%20pooh&limit=100">View more forum posts</a></b>
                            */}
                        </div>
                    </div>
                </div>{/*--/#.tabby-posts--*/}
            </div>
        )
    }

    welcome() {
        let itemid = this.itemid;
        let title = this.metadata.title; // Example from @tracey_pooh
        let imagesrc = this.thumbnailFile();  // TODO-ACCOUNT Tracey is adding a service to get a better image (larger scale
        let name = this.name();
        return (
            <div class="welcome container container-ia width-max account-uniform">
                <div class="container">
                    <div class="row">
                                <div class="col-xs-11 col-sm-2 welcome-left" style="text-align:center;">
                                    <div id="file-dropper-wrap">
                                        <div id="file-dropper"></div>
                                        <img id="file-dropper-img" src={imagesrc} style="max-width:300px"/>
                                    </div>
                                </div>{/*--/.col-xs-11--*/}
                                <div class="col-xs-1 col-sm-2 col-sm-push-8 welcome-right">
                                    {/* probably ok as absolute link since requires ID anyway */}
                                    {/* Removed onclick="return AJS.modal_go(this,{favorite:1})"  - not compatible with /bookmarks rewrite */}
                                    <a class="stealth"
                                       href={`/bookmarks.php?add_bookmark=1&amp;title=people&amp;mediatype=account&amp;identifier=${itemid}`}
                                       data-target="#confirm-modal"><span class="iconochive-favorite"
                                                                          aria-hidden="true"></span><span
                                            class="sr-only">favorite</span><span class="hidden-xs-span"> Favorite</span></a><br/>
                                </div>{/*--/.col-xs-1--*/}
                                <div class="clearfix visible-xs-block hidden-sm hidden-md hidden-lg"></div>
                                <div class="col-xs-12 col-sm-8 col-sm-pull-2">
                                    <h1>{name}</h1>
                                    <h5 class="account-description">{title}</h5>
                                </div>{/*--/.col-xs-12--*/}
                    </div>{/*--/.row--*/}
                    <div className="tabbys tabbys-dynamic">
                        <Tabby identifier={itemid} id="uploads" text="UPLOADS" default/>
                        <Tabby identifier={itemid} id="posts" text="POSTS"/>
                        <Tabby identifier={itemid} id="reviews" text="REVIEWS"/>
                        <Tabby identifier={itemid} id="collections" text="COLLECTIONS"/>
                        <Tabby identifier={itemid} id="loans" text="LOANS"/>
                        <Tabby identifier={itemid} id="web-archives" text="WEB ARCHIVES" abbreviatedText="WEB"
                               href={`/details/${itemid}/web-archive`}/>
                        <div className="clearfix"></div>
                    </div>
                </div>{/*--/.container--*/}
            {/*--/.welcome--*/}</div>
        );
    }
    uploads() {
        return (
            <div class="container container-ia nopad">
                <div id="tabby-uploads" class="tabby-data in">
                        {this.rowColumnsItems()}
                </div>
            </div>
        );
    }

}
