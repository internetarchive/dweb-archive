import React from 'react';
import {IAReactComponent, ImageDweb, Tabby, NavWrap} from "@internetarchive/ia-components/dweb-index.js";
import {SearchRowColumnsItems} from "./components/SearchPage";
import {I8span} from "./components/Languages";

class AccountTabbyPosts extends IAReactComponent {
    /**
     * <AccountTabbyPosts item=ARCHIVEITEM />
     * TODO pass in detailed props rather than item
     */
    render() {
        let name = this.props.item.itemid.replace(/_/g, ' ').replace('@', ''); // Canonical name from id, may have better ways to get this - see @tracey_pooh for case needing this one.
        return (
          <div className="container container-ia nopad">
              <div id="tabby-posts" className="tabby-data hidden row">
                  <div className="box">
                      <h1>Posts by {name}</h1>
                      {/*-- NOTE: extra div required by IE bec. table width=100% is set --*/}
                      <div>
                          <table className="forumTable  table table-striped table-condensed table-hover">
                            <tbody>
                              <tr className="backColor1 forumRowHead">
                                  <td><I8span en="Subject"/></td>
                                  <td><I8span en="Poster"/></td>
                                  <td><I8span en="Forum"/></td>
                                  <td><I8span en="Replies"/></td>
                                  <td><I8span en="Date"/></td>
                              </tr>
                              {/*-- TODO-ACCOUNT this is a loop  need query for forum posts https://github.com/internetarchive/dweb-archive/issues/86--*/}
                              <tr>
                                  <td><Ispan en="Still being implemented"/></td>
                              </tr>
                              {/*
                                <tr valign="top" className="eve forumRow">
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
                                        <nobr className="hidden-sm hidden-xs">Apr 16, 2018 11:21am</nobr>
                                        <span className="hidden-md hidden-lg smalldate">Apr 16, 2018 11:21am</span>
                                    </td>
                                </tr>
                                <tr valign="top" className="odd forumRow">
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
                                        <nobr className="hidden-sm hidden-xs">Apr 14, 2018 12:29pm</nobr>
                                        <span className="hidden-md hidden-lg smalldate">Apr 14, 2018 12:29pm</span>
                                    </td>
                                </tr>
                                */}
                              {/* -- End of forum loop */}
                            </tbody>
                          </table>
                          {/* TODO-ACCOUNT rethink when have query above
                            <br/><b><a href="/iathreads/forum-display.php?poster=tracey%20pooh&limit=100">View more forum posts</a></b>
                            */}
                      </div>
                  </div>
              </div>
              {/*--/#.tabby-posts--*/}
          </div>
        )
    }
}
class AccountWelcome extends IAReactComponent {
    /**
     * <AccountWelcome item=ARCHIVEITEM />
     * TODO pass in detailed props rather than item
     * - see similar style/HTML in CommonWelcome CollectionBanner and AccountBanner
     */
    render() {
        
        let identifier = this.props.item.itemid;
        let title = this.props.item.metadata.title; // Example from @tracey_pooh
        let imagesrc = this.props.item.thumbnailFile() || "/images/notfound.png" ;  // TODO-ACCOUNT Tracey is adding a service to get a better image (larger scale
        let name = this.props.item.itemid.replace(/_/g, ' ').replace('@', ''); // Canonical name from id, may have better ways to get this - see @tracey_pooh for case needing this one.
        return (
            <div className="welcome container container-ia width-max account-uniform">
                <div className="container">
                    <div className="row">
                                <div className="col-xs-11 col-sm-2 welcome-left" style={{textAlign: "center"}}>
                                    <div id="file-dropper-wrap">
                                        <div id="file-dropper"></div>
                                        <ImageDweb id="file-dropper-img" source={imagesrc} style={{maxWidth:"300px"}}/>
                                    </div>
                                </div>{/*--/.col-xs-11--*/}
                                <div className="col-xs-1 col-sm-2 col-sm-push-8 welcome-right">
                                    {/* probably ok as absolute link since requires ID anyway */}
                                    {/* Removed onclick="return AJS.modal_go(this.props.item,{favorite:1})"  - not compatible with /bookmarks rewrite */}
                                    <a className="stealth"
                                       href={`/bookmarks.php?add_bookmark=1&amp;title=people&amp;mediatype=account&amp;identifier=${identifier}`}
                                       data-target="#confirm-modal"><span className="iconochive-favorite"
                                                                          aria-hidden="true"></span><I8span
                                            className="sr-only" en="favorite"/> <I8span className="hidden-xs-span" en="Favorite"/></a><br/>
                                </div>
                                <div className="clearfix visible-xs-block hidden-sm hidden-md hidden-lg"></div>
                                <div className="col-xs-12 col-sm-8 col-sm-pull-2">
                                    <h1>{name}</h1>
                                    <h5 className="account-description">{title}</h5>
                                </div>
                    </div>{/*--/.row--*/}
                    <div className="tabbys tabbys-dynamic">
                        <Tabby identifier={identifier} id="uploads" text="UPLOADS" default/>
                        {/*<Tabby identifier={identifier} id="posts" text="POSTS"/>*/}
                        {/*<Tabby identifier={identifier} id="reviews" text="REVIEWS"/>*/}
                        {/*<Tabby identifier={identifier} id="collections" text="COLLECTIONS"/>*/}
                        {/*<Tabby identifier={identifier} id="loans" text="LOANS"/>
                        {/*<Tabby identifier={identifier} id="web-archives" text="WEB ARCHIVES" abbreviatedText="WEB"
                               href={`/details/${identifier}/web-archive`}/>*/}
                        <div className="clearfix"></div>
                    </div>
                </div>{/*--/.container--*/}
            {/*--/.welcome--*/}</div>
        );
    }
    
}

class AccountUploads extends IAReactComponent {
    /**
     * <AccountUploads item=ARCHIVEITEM disconnected=BOOL />
     */
    render() {
        return (
          <div className="container container-ia nopad">
              <div id="tabby-uploads" className="tabby-data in">
                  <SearchRowColumnsItems item={this.props.item} disconnected={this.props.disconnected} />
              </div>
          </div>
        );
    }
}

class AccountWrap extends IAReactComponent {
    /**
     * <AccountWrap item=ARCHIVEITEM/>
     * @returns {*}
     */
    render() {
        /*
        Wraps all page content
        Context: body wrap script
        Content: wrap ( navwrap, main ( script, account-uniform ( description&picture, tabbys-dynamic), tabby-uploads ( facets, columns-items ) ) )

        Built out from a download of Tracey's account page on 10June2018
         */
        //if (typeof AJS != 'undefined') AJS.lists_v_tiles_setup('account');
        {/* Missing donate-banner and scripts & css before it */}
        return (
          <>
            <NavWrap item={this.props.item} canSave={true}/>
            {/*--Begin page content --*/}
            <main id="maincontent">
                <div className="container container-ia">
                    {/*-- <script> if (typeof AJS != 'undefined') AJS.lists_v_tiles_setup('account'); </script> --*/}
                </div>
                {/*--.container-ia --*/}
                <AccountWelcome item={this.props.item}/>
                <AccountUploads item={this.props.item} disconnected={this.props.disconnected}/>
              {/*<AccountTabbyPosts item={this.props.item}/>*/}
            </main>
          </>
        );
    }
}
export {AccountWrap};