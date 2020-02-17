/* global AJS */
import React from 'react';
import { ComboSearchWrap } from './SearchPage';
import { DetailsWork, DetailsMessage } from './DetailsPage';
import { SaveModal } from './SaveModal';
import { I18nStr } from '../ia-components/dweb-index';
import { transportNowAndWhenChanges, transportListenerClear, preprocessDescription } from '../ReactSupport';

const mediatype2Schema = {
  audio: 'AudioObject',
  etree: 'AudioObject',
  image: 'VisualArtwork',
  movies: 'VideoObject',
  texts: 'TextDigitalDocument'
};


class Page extends React.Component {
  /**
   * Top level component, displays a page, and expects to see .setState({item=IDENTIFIER || message=STRING}) calls
   *
   * <Page
   *    item=ARCHIVEITEM
   *    message=I18NSTRING
   * />
   */

  constructor(props) {
    super(props); //  item, message
    // TODO-DWEBNAV need to tell Transports to set this status when changes
    // Retrieve information from the gateway about its state, for passing and parameterizing the UI.
    // Note this state is set externally on a single persistent <Page> component
    this.state = { item: this.props.item, message: this.props.message, statuses: {} };
    this.load = this.load.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  load(unusedEl) {
    DwebArchive.page = this;
  }

  componentDidMount() {
    // DwebArchive.page = this;
    this.componentDidMountOrUpdate();
    this.listeningWith = transportNowAndWhenChanges((err, statuses) => { // { transportStatuses, mirror2gateway, disconnected, directories, transportsClickable }
      if (!err) {
        this.setState({ statuses }); // disconnected etc
      }
    });
  }

  componentWillUnmount() {
    transportListenerClear(this.listeningWith);
  }

  componentDidUpdate(oldProps, oldState, snapshot) {
    this.componentDidMountOrUpdate();
  }

  componentDidMountOrUpdate() {
    // TODO merge much of this into specific components at deeper level.
    const item = this.state.item;
    const identifier = item && item.itemid;
    const metadata = item && item.metadata;
    const query = item && item.query;
    let mediatype = metadata && metadata.mediatype;
    // isSearch: includes Search, Collection, Account, Settings, Local
    //! isSearch: is Details (includes DetailsError, DownloadDirectory, DetailsError,
    const isSearch = // See DUPLICATEDCODEISSEARCH
      !this.state.message
      && (query
      || ['collection', 'account'].includes(mediatype)
      || ['home', 'local', 'settings'].includes(identifier)); // SEE-OTHER-ADD-SPECIAL-PAGE
    if (isSearch && !mediatype) mediatype = 'search';

    /*
      This function is copied from archive.min.js on_dom_loaded() because
      a) its run there on DOMLoaded, which is before we've got anything on the page
      b) Its anonymous in archive.min.js so can't call it
     */
    // Use this global hack, by adding class 'accessible-link' to any mouse-only element div/img
    // Note AJS is defined in archive_min.js
    AJS.makeMouseElementAccessible('.accessible-link');


    AJS.setUpActionTracking(); // Must be before other form submit handlers are assigned
    AJS.setupPopupLink();
    // AJS.nav_tophat_setup(); // Not doing nav_tophat_setup because we have no access to tophat via the API
    // AJS.nav_tophat_wb_setup(); // Not doing nav_tophat_setup because we have no access to tophat via the API
    AJS.setUpCreativeCommonsLicenseLink();
    AJS.setUpSearchForms();

    if (isSearch) {
      const query = item && item.query;
      // TODO figure out what this is doing, and replace with AnchorSearch etc
      AJS.date_switcher( // TODO See internetarchive/dweb-archive#176, unclear how/if this works or if so whether to use archive.org or mirror urls
        (mediatype === 'collection')
          ? `&nbsp;<a href="/search.php?query=${query}&amp;sort=-publicdate"><div class="date_switcher in">${I18nStr('Date Archived')}</div></a> <a href="/search.php?query=${query}&amp;sort=-date"><div class="date_switcher">${I18nStr('Date Published')}</div></a> <a href="/search.php?query=${query}&amp;sort=-reviewdate"><div class="date_switcher">${I18nStr('Date Reviewed')}</div></a> `
          : `&nbsp;<a href="https://dweb.archive.org/search/${encodeURIComponent(query) + '?sort=-publicdate'}" onclick='${Nav.onclick_search({
            query,
            sort: '-publicdate'
          })}'><div class="date_switcher in">${I18nStr('Date Archived')}</div></a> <a href="https://dweb.archive.org/search/${encodeURIComponent(query) + '?sort=-date'}" onclick='${Nav.onclick_search({
            query,
            sort: '-date'
          })}'><div class="date_switcher">${I18nStr('Date Published')}</div></a> <a href="https://dweb.archive.org/search/${encodeURIComponent(query) + '?sort=-reviewdate'}" onclick='${Nav.onclick_search({
            query,
            sort: '-reviewdate'
          })}'><div class="date_switcher">${I18nStr('Date Reviewed')}</div></a> `
      );
      AJS.lists_v_tiles_setup(mediatype); // Needs to be collection | search and probably |account
      AJS.popState(mediatype === 'collection' ? '' : 'search'); // on archive.org: collection=>'' search=>'search'
      $('div.ikind').css({ visibility: 'visible' });
      // AJS.tiler();
      // If we change the window, wait 250ms then redo the tiler
      $(window).on('resize  orientationchange', (unusedEvt) => {
        clearTimeout(AJS.tiles_wrap_throttler);
        AJS.tiles_wrap_throttler = setTimeout(AJS.tiler, 250);
      });
    }
    /*
    Moved to ImageDweb component as Firefox bug causes it to fire prematurely here as img.complete returns true
    if (["image"].includes(mediatype)) {
      AJS.theatresize();
      AJS.carouselsize('#ia-carousel', true);
    }
   */
    if (!isSearch) { // This is common to Text, AV and image - though some have stuff before this and some a
      AJS.tilebars(); // page load
      $(window).on('resize  orientationchange', (unusedEvt) => { // TODO-JQUERY remove dependency window.on probably works fine
        clearTimeout(AJS.also_found_throttler);
        AJS.also_found_throttler = setTimeout(AJS.tilebars, 250);
      });
    }
    if (['texts'].includes(mediatype)) {
      AJS.booksize();
    }
    /* might never be used as dont see toggle-flag-overlay appearing anywhere but might be used in archive.js
        if (!isSearch) {
          // initialize_flag - overlay related
          $(".toggle-flag-overlay").click(function (e) {
            e.preventDefault();
            $("#theatre-ia-wrap").removeClass("flagged");
          });
        }
     */
    /* Doesnt seem to be used anywhere this may never get used as I cant find any flag-checkboxes or my-checkbox in any sample HTML files or on archive.org
      // overlay - checkboxes
      if (isSearch) {
        $("#flag-checkboxes a").on("click", function (e) {
          e.preventDefault();
          $(this).children(".my-checkbox").toggleClass("checked");
          $.get($(this).attr("href"))
        });
      }
     */
    AJS.footer();
  }

  render() {
    const item = this.state.item;
    const identifier = item && item.itemid;
    const metadata = item && item.metadata;
    let mediatype = metadata && metadata.mediatype;
    const query = item && item.query;
    // isSearch: includes Search, Collection, Account, Settings, Local
    //! isSearch: is Details (includes DetailsError, DownloadDirectory, DetailsError,
    const isSearch = // See DUPLICATEDCODEISSEARCH
      !this.state.message
      && (query
        || ['collection', 'account'].includes(mediatype)
        || ['home', 'local', 'settings'].includes(identifier)); // SEE-OTHER-ADD-SPECIAL-PAGE

    mediatype = mediatype || ((isSearch && !identifier) ? 'search' : undefined); // Set mediatype to search if not set already and it appears to be.

    const itemType = metadata ? mediatype2Schema[mediatype] : undefined;
    if (isSearch) {
      document.body.classList.add('bgEEE');
    }
    if (identifier === 'home') {
      document.body.classList.add('top');
    }
    return (
      // There is one more div outside this - in archive.html, that <Page> gets rendered into
      <div id="wrap"
        itemScope={typeof itemType !== 'undefined'}
        itemType={itemType ? ('http://schema.org/' + itemType) : undefined}
        ref={this.load}
      >
        {this.state.message
          ? (
            <DetailsMessage item={item}
              identifier={identifier}
              message={this.state.message}
              statuses={this.state.statuses}
            />
          )
          : isSearch
            ? <ComboSearchWrap item={item} statuses={this.state.statuses} />
            : (
              <DetailsWork
                item={item}
                metadata={metadata}
                files={item && item.files}
                identifier={identifier}
                subtype={metadata && (['texts', 'audio', 'movies'].includes(mediatype)) ? item.subtype() : undefined}
                poster={(metadata && ['movies'].includes(mediatype))
                  ? item.videoThumbnailFile()
                  : (['audio', 'etree'].includes(mediatype))
                    ? item.thumbnailFile()
                    : undefined}
                source={metadata && ['image'].includes(mediatype) ? item.playableFile('image') : undefined}
                files_count={item && item.files_count}
                reviews={item && item.reviews}
                collection_titles={item && item.collection_titles}
                description={metadata ? preprocessDescription(metadata.description) : undefined}
                page={item && item.page}
                noCache={item && item.noCache}
                playlist={item && item.playlist}
                canSave
                download={item && item.download}
                statuses={this.state.statuses}
              />
            )
        }
        <SaveModal identifier={identifier} query={query} directories={this.state.statuses.directories} mediatype={mediatype} />
      </div>
    );
  }
}
export { Page };
// Code review 2019-10-12
