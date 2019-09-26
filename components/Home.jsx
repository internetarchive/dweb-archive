import React from "react";
import { AnchorDetails, IAReactComponent, AnchorSearch } from '@internetarchive/ia-components/dweb-index.js';
import {I18nSpan, I18n, I18nStr, I18nIcon } from "./Languages";

/**
 * <HomeWelcomeLinkIcon
 *   iconochive=STRING    e.g. iconochive-movies
 *   sronly=STRING        e.g. "web"
 *   size=STRING          e.g. "373B" purely an estimate as there is no API to get it TODO copy periodically from archive.org
 * />
 */
class HomeWelcomeLinkIcon extends IAReactComponent {
  render() {
    return (
      <div className="mt-big">
        <div>
          <I18nIcon className={this.props.iconochive} en={this.props.sronly}/>
        </div>
        <div className="micro-label">
          {this.props.size} <I18nSpan className="sr-only" en="items"/>
        </div>
      </div>
    )
  }
}

/**
 * A link to something from the home page
 *
 * <HomeWelcomeLink
 *    ONE OF
 *      identifier=IDENTIFIER
 *      query=STRING      e.g. "collection: foo"
 *      href=URL
 *    title=EN-STRING|NODE      for anchor e.g. Web or <I18nSpan en="Web"/>
 *    iconochive=STRING e.g. iconochive-web
 *    size=STRING       e.g. "300B" just an estimate as there is no API
 *    sronly=STRING
 * />
 */
class HomeWelcomeLink extends IAReactComponent {
  // Props: href, title, sronly, size

  render() {
    const {s, l} = I18n(this.props.title || this.props.identifier);
    return (
      this.props.identifier
      ? <AnchorDetails identifier={this.props.identifier} title={s} lang={l}>
        <HomeWelcomeLinkIcon iconochive={this.props.iconochive} sronly={this.props.sronly} size={this.props.size}/></AnchorDetails>
      : this.props.query
      ? <AnchorSearch query={this.props.query} title={s} lang={l}>
        <HomeWelcomeLinkIcon iconochive={this.props.iconochive} sronly={this.props.sronly} size={this.props.size}/></AnchorSearch>
      : <a href={this.props.href} title={s} lang={l}>
        <HomeWelcomeLinkIcon iconochive={this.props.iconochive} sronly={this.props.sronly} size={this.props.size}/></a>

    )
  }
}

/**
 * <HomeBanner disconnected=BOOL />
 */
class HomeBanner extends IAReactComponent {
 render() {
   return (
     <>
       { this.props.disconnected ? null :
         <div id="ToS">
           <a className="stealth" href="https://archive.org/about/terms.php"><I18nSpan en="Terms of Service"/> (<I18nSpan en="last updated"/>
             12/31/2014)</a>
         </div>
       }
       <div className="row preamble" style={{marginBottom: "60px"}}>
         <div className="col-sm-3 hero-left">
          <I18nIcon className="iconochive-logo topinblock" en="logo"/>
         </div>
         <div className="col-sm-6 hero-center">
          <div className="preamble-whoweare">
            <b><I18nSpan en="Internet Archive"/>&nbsp;</b>

            <I18nSpan en="is a non-profit library of millions of free books, movies, software, music, websites, and more."/>
            <center className="mt-big" style={{marginTop: "10px"}}>
              <HomeWelcomeLink href="/web" iconochive="iconochive-web" title="Web" sronly="web" size="373B"/>
              <HomeWelcomeLink identifier="texts" iconochive="iconochive-texts" title="Texts" sronly="texts" size="21M"/>
              <HomeWelcomeLink identifier="movies" iconochive="iconochive-movies" title="Video" sronly="movies" size="4.9M"/>
              <HomeWelcomeLink identifier="audio" iconochive="iconochive-audio" title="Audio" sronly="audio" size="6.7M"/>
              <HomeWelcomeLink identifier="tv" iconochive="iconochive-tv" title="TV" sronly="tv" size="1.9M"/>
              <HomeWelcomeLink identifier="software" iconochive="iconochive-software" title="Software" sronly="software" size="437K"/>
              <HomeWelcomeLink identifier="image" iconochive="iconochive-image" itle="Image" sronly="image" size="3.3M"/>
              <HomeWelcomeLink identifier="etree" iconochive="iconochive-etree" title="Concerts" sronly="etree" size="206K"/>
              <HomeWelcomeLink query="mediatype:collection" iconochive="iconochive-collection" title="Collections" sronly="collection" size="522K"/>
       </center>
     </div>
     {/* TODO check and fix this searchbar
     <div>
       <div className="searchbar searchbar-home">
         <form className="form search-form js-search-form"
               id="searchform"
               method="get"
               role="search"
               action="https://archive.org/searchresults.php"
               data-event-form-tracking="Home|SearchForm"
               data-wayback-machine-search-url="https://web.archive.org/web/* /">
           <div className="form-group" style={{position:"relative"}}>
             <div style={{position:"relative"}}>
            <span style={{position:"absolute", left: "4px", top: "7px", color: "#999", fontSize: "125%"}}>
              <I18nSpan className="sr-only" en="search"/></span>
               <input className="form-control input-sm roundbox20 js-search-bar" size="25" name="search"
                      placeholder="Search" type="text" value="" style={{fontSize:"125%" paddingLeft:"30px"}}
                      onClick="$(this).css('padding-left','').parent().find('.iconochive-search').hide()"
                      aria-controls="search_options"
                      aria-label={I18nStr("Search the Archive. Filters and Advanced Search available below.")}"
               />
             </div>

             <div
               id="search_options"
               className="search-options js-search-options"
               aria-expanded="false"
               aria-label={I18nStr("Search Options")}
               data-keep-open-when-changed="true"
             >
               <fieldset>
                 <label>
                   <input
                     type="radio"
                     name="sin"
                     value=""
                     checked
                   >
                     <span>Search metadata</span>
                 </label>
                 <label>
                   <input
                     type="radio"
                     name="sin"
                     value="TXT"
                   >
                     <span>Search text contents</span>
                 </label>
                 <label>
                   <input
                     type="radio"
                     name="sin"
                     value="TV"
                   >
                     <span>Search TV news captions</span>
                 </label>
                 <label>
                   <input
                     type="radio"
                     name="sin"
                     value="WEB"
                   >
                     <span>Search archived web sites</span>
                 </label>
               </fieldset>

               <a
                 href="https://archive.org/advancedsearch.php"
                 className="search-options__advanced-search-link"
                 onClick="return AJS.advanced_search(this)"
               >Advanced Search</a>
             </div>

             <button className="btn btn-gray label-primary input-sm" type="submit">GO</button>
             <input type="hidden" name="limit" value="100"/>
             <input type="hidden" name="start" value="0"/>
             <input type="hidden" name="searchAll" value="yes"/>
             <input type="hidden" name="submit" value="this was submitted"/>
           </div>
           <!--/.form-group -->
         </form>
       </div>
       <!--/.searchbar-->
     </div>
    */}
   <br clear="all" className="clearfix"/>
   </div>
   {/* TODO Add announcements if/when can find an API for them
    <div className="col-sm-3 hero-right">
     <div className="hidden-sm hidden-md hidden-lg" style={{height:"50px}}></div>
     <h4 style={{marginTop:"0"}}>Announcements</h4>
     <div>
       <div className="wplinks"><a
         href="https://blog.archive.org/2019/07/17/thank-you-for-the-donation-of-78rpm-records-from-a-craigslist-poster/">Thank
         you for the donation of 78rpm records from a Craigslist poster</a></div>
       <div className="wplinks"><a
         href="https://blog.archive.org/2019/07/14/lessons-learned-the-dweb-summit-ux-ui-workshop/">Lessons Learned: The
         DWeb Summit UX/UI Workshop</a></div>
       <div className="wplinks"><a
         href="https://blog.archive.org/2019/07/09/getting-ready-for-dweb-camp-a-conversation-with-kelsey-breseman/">Getting
         Ready for DWeb Camp: A Conversation with Kelsey Breseman</a></div>
     </div>
     <div className="pull-right">
       <a className="stealth" style={{color:"#979797"}} href="https://blog.archive.org/category/announcements/">
         SEE MORE
       </a>
     </div>
   </div>
   */}
 </div>
   <center id="top-collections" style={{marginBottom:"50px"}}>
     <h1 style={{fontWeight:100}}><I18nSpan en="Top Collections at the Archive"/></h1>
   </center>
  </>
 )
 }
}

export { HomeBanner }
// File regular review 2019-sept-15
