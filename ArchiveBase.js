import { stringify } from '@stratumn/canonicaljson';
// Other Archive Repos
import ArchiveItem from '@internetarchive/dweb-archivecontroller/ArchiveItem';
// This repo
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactConfig } from './ReactSupport';
import {AJS_on_dom_loaded} from './Util';
import {Page} from "./components/Page";



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
};

const mediatype2Schema = { // See DUPLiCATEDCODEMEDIATYPE2SCHEMA
  audio: "AudioObject",
  etree: "AudioObject",
  image: "VisualArtwork",
  movies: "VideoObject",
  texts: "TextDigitalDocument"
};



export default class ArchiveBase extends ArchiveItem {
  /*
  Fields:
  item    Metadata for item, undefined for a search.
  itemtype    Schema.org for this eg. "http://schema.org/TextDigitalDocument"
  query   query part of search either as object {creator: foo} or string "foo"
  TODO-DOCS rest of fields now merged in Details nad Search
   */
  constructor({ and='', download=false, itemid = undefined, message=undefined, metaapi = undefined, noCache=false, page=1,
                query=undefined, rows=searchConfig.rows, sort=''}={}) {
    super({itemid, metaapi, sort});
    this.and = and;
    this.download = download; // True if want download directory
    this.noCache= noCache;
    this.page = page;
    if (metaapi && metaapi.metadata && (metaapi.metadata.mediatype === "account")) {
      query = `uploader:"${metaapi.uploader}"`;
      sort = '-publicdate';
    }
    this.query = (typeof(query) === "object")
      ? queryFrom(query)  // form { creator: "Foo bar" ... }
      : query ; // Note this should be an UNUUENCODED query  or an object
    this.rows= rows;
    this.state = {}; // This will be automatic when moves to React
    this.message = message;
  }
  preprocessDescription(description) {
    // Now catch some things that often appear in descriptions because it assumes running on archive page e.g. /server/commute/commute.jpg on "commute"
    // And handle multivalue (array) descriptions by concatenating with <br/>

    return !description ? description
      : (Array.isArray(description) ? description.join('<br/>') : description)
        .replace('\n', '<br/>')
        .replace(/src=(['"])http:\/\/www.archive.org\//gi, 'src=$1' + ReactConfig().root + '/') // src="/  absolute urls
        .replace(/src=(['"])\//gi, 'src=$1' + ReactConfig().root + '/'); // src="/  absolute urls

  }

  renderFake(res) {
    //isSearch: includes Search, Collection, Account, Settings, Local
    //!isSearch: is Details (includes DetailsError, DownloadDirectory, DetailsError,
    const mediatype = this.metadata && this.metadata.mediatype;
    const isSearch = // See DUPLICATEDCODEISSEARCH
      (!this.metadata && !this.message)
      || this.query
      || ["collection", "account"].includes(mediatype)
      || ["home", "local", "settings"].includes(this.itemid); //SEE-OTHER-ADD-SPECIAL-PAGE

    const itemType = this.metadata ? mediatype2Schema[mediatype] : undefined;
    //TODO-FAKEREACT make the element reusable, so replace  through ReactDOM.render by changing item etc on prebuilt
    const els = (
      <div id="wrap"
        itemScope={typeof itemType !== "undefined"}
        itemType={itemType ? ("http://schema.org/" + itemType) : undefined}>
        <Page item={this} message={this.message} itemType={itemType}/>
      </div>
    );
    if (isSearch) {
      document.body.classList.add('bgEEE');
    }
    ReactDOM.render(els, res);
    if (!isSearch) {
      // initialize_flag
      // overlay related but might never be used as dont see toggle-flag-overlay appearing anywhere but might be used in archive.js
      $(".toggle-flag-overlay").click(function (e) {
        e.preventDefault();
        $("#theatre-ia-wrap").removeClass("flagged");
      });
      // overlay - checkboxes - this may never get used as I cant find any flag-checkboxes or my-checkbox in any sample HTML files
      $("#flag-checkboxes a").on("click", function (e) {
        e.preventDefault();
        $(this).children(".my-checkbox").toggleClass("checked");
        $.get($(this).attr("href"))
      });
    }
    this.archive_setup_push(isSearch);
    AJS_on_dom_loaded(); // Runs code pushed archive_setup - needed for image if "super" this, put it after superclasses
  }

  archive_setup_push(isSearch)
  { // run in render
    const mediatype = this.metadata ? this.metadata.mediatype : isSearch ? "search" : undefined ;
    if (isSearch) {
      const query = this.query;
      //TODO figure out what this is doing, and replace with AnchorSearch etc
      archive_setup.push(function () { // archive_setup is in archive.js
        AJS.date_switcher(
          (mediatype === "collection")
            ? `&nbsp;<a href="/search.php?query=${query}&amp;sort=-publicdate"><div class="date_switcher in">Date Archived</div></a> <a href="/search.php?query=${query}&amp;sort=-date"><div class="date_switcher">Date Published</div></a> <a href="/search.php?query=${query}&amp;sort=-reviewdate"><div class="date_switcher">Date Reviewed</div></a> `
            : `&nbsp;<a href="https://dweb.archive.org/search/${encodeURIComponent(query) + "?sort=-publicdate"}" onclick='${Nav.onclick_search({
              query: query,
              sort: "-publicdate"
            })}'><div class="date_switcher in">Date Archived</div></a> <a href="https://dweb.archive.org/search/${encodeURIComponent(query) + "?sort=-date"}" onclick='${Nav.onclick_search({
              query: query,
              sort: "-date"
            })}'><div class="date_switcher">Date Published</div></a> <a href="https://dweb.archive.org/search/${encodeURIComponent(query) + "?sort=-reviewdate"}" onclick='${Nav.onclick_search({
              query: query,
              sort: "-reviewdate"
            })}'><div class="date_switcher">Date Reviewed</div></a> `
        );
        AJS.lists_v_tiles_setup(mediatype); // Needs to be collection | search and probably |account
        AJS.popState(mediatype === 'collection' ? '' : 'search'); //on archive.org: collection=>'' search=>'search'
        $('div.ikind').css({visibility: 'visible'});
        //AJS.tiler();
        $(window).on('resize  orientationchange', function (unusedEvt) {
          clearTimeout(AJS.tiles_wrap_throttler);
          AJS.tiles_wrap_throttler = setTimeout(AJS.tiler, 250);
        });
      });
    } else {
      if (["image"].includes(mediatype)) archive_setup.push(function () {
        AJS.theatresize();
        AJS.carouselsize('#ia-carousel', true);
      });
      archive_setup.push(function () {  // This is common to Text, AV and image - though some have stuff before this and some a
        AJS.tilebars(); // page load
        $(window).on('resize  orientationchange', function (unusedEvt) { //TODO-JQUERY remove dependency window.on probably works fine
          clearTimeout(AJS.also_found_throttler);
          AJS.also_found_throttler = setTimeout(AJS.tilebars, 250)
        });
      });
      if (this.metadata && ["texts"].includes(this.metadata.mediatype)) archive_setup.push(function () {
        AJS.booksize();
      })
    }
  }
}

