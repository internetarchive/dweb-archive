/* eslint-disable react/no-danger */
/* global AJS */
import React from 'react';
import { AnchorModalGo, AnchorDetails, ImageDweb, Tabby, NavWrap, ScrollableTileGrid, SearchSwitcher, I18nSpan, I18n, I18nStr, I18nIcon } from '../ia-components/dweb-index';
import { preprocessDescription } from '../ReactSupport';
import { CherModal } from './CherModal';
import { SettingsItem } from './mirror/SettingsComponent';
import { AccountWrap } from '../Account';
import { HomeBanner } from './Home';

const debug = require('debug')('dweb-archive:SearchPage');


/**
 * A collection of components used on the related Search and Account pages
 */


class BookmarkButton extends React.Component {
  /**
   * <BookmarkButton url=URL disconnected=BOOL/>
   *
   * Note - this is not going to work on Dweb as not logged in.
   */
  render() {
    return (
      this.props.disconnected ? null
        : (
          <>
            <AnchorModalGo className="stealth"
              href={this.props.URL}
              opts={{ favorite: 1 }}
              data-target="#confirm-modal"
            >
              <I18nIcon
                className="iconochive-favorite" en="favorite"
              />
              {' '}
              <I18nSpan en="Favorite" />
            </AnchorModalGo>
            <br />
          </>
        )
    );
  }
}
class CollectionBanner extends React.Component {
  /**
   * Typical usage (assuming "this" is an ARCHIVEFILE
   * <CollectionBanner
   *  identifier=this.itemid
   *  imgsrc = this.thumbnailFile() or undefined
   *  title=STRING
   *  description =STRING   Note this should have been preprocessed to concatenate any arrays, sanitize the HTML and replace any relative URI's which wont work.
   *    !this.metadata.description ? undefined : preprocessDescription(this.metadata.description).replace(/(..\/)+..\//g, "../"); // Contains HTML (supposedly safe) inserted via innerHTML thing
   *  creator=this.metadata.creator title=this.metadata.title   From the metadata API
   *  disconnected=BOOL     True if browser cant see archive.org
   *  />
   *
   *  Welcome Banners on Collections
   *  - see similar style/HTML in CommonWelcome CollectionBanner and AccountBanner
   */
  // TODO-DETAILS on prelinger, banner description is getting truncated.
  render() {
    // Preprocess creator because JSX doesnt have a good equivalent of join()
    // I'm not sure of an example case where the creator matches the title like this, but suspect there is one :-)
    const creator = (this.props.creator && (this.props.creator.join(', ') !== this.props.title) ? this.props.creator.join(', ') : '');
    return (
      <div className="welcome container container-ia width-max" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-11 col-sm-10 welcome-left">
              <div id="file-dropper-wrap">
                <div id="file-dropper" />
                <ImageDweb id="file-dropper-img" className="img-responsive" style={{ maxWidth: '350px', margin: '0 10px 5px 0' }} source={this.props.imgsrc || '/images/notfound.png'} />
              </div>
              <h1>{this.props.title}</h1>
              <h4>{creator}</h4>
              <div id="descript" style={{ maxHeight: '43px', cursor: 'pointer' }} dangerouslySetInnerHTML={{ __html: this.props.description }} />
            </div>
            {['local'].includes(this.props.identifier) ? null :
              <div className="col-xs-1 col-sm-2 welcome-right">
                <AnchorModalGo className="stealth" opts={{
                  ignore_lnk: 1,
                  shown: AJS.embed_codes_adjust
                }}
                               data-target="#cher-modal"
                >
                  <I18nIcon className="iconochive-share" en="share" xs="Share"/>
                </AnchorModalGo>
                <br/>
                <BookmarkButton
                  url={`https://archive.org/bookmarks.php?add_bookmark=1&amp;mediatype=collection&amp;identifier=${this.itemid}&amp;title=${this.props.title}`}
                  disconnected={this.props.disconnected}
                />
                {/* TODO-LOGIN /editxml isn't going to wrk - we aren't logged in. and its an absolute URL
                            <div id="editlink" style={{display:"none"}}>
                              <a id="edlink" className="stealth" href="/editxml/prelinger"><I18nIcon className="iconochive-edit" en="edit" xs="Edit"/></a><br/>
                                        <a className="stealth" href="//catalogd.archive.org/history/prelinger"></span><I18nIcon className="iconochive-time" en="time" xs="History"/></a><br/>
                            </div> */}
              </div>
            }
          </div>
          {['local'].includes(this.props.identifier) ? null :
            <div className="tabbys">
              <Tabby id="about" identifier={this.props.identifier} text="ABOUT" />
              <Tabby id="collection" identifier={this.props.identifier} text="COLLECTION" default />
              <Tabby id="forum" identifier={this.props.identifier} text="FORUM" />
              <div className="clearfix"/>
            </div>
          }
          {/* container */}
        </div>
        {/* welcome */}
      </div>
    );
  }
}
class CollectionTabby extends React.Component {
  /**
   * Set of Tabs associated with Collections
   *
   * <CollectionTabby
   *  identifier = IDENTIFIER
   *  description = SANITIZED HTML
   *  rights = SANITIZED HTML
   *
   */


  render() {
    // noinspection HtmlUnknownAnchorTarget
    return (
      <div className="container container-ia nopad">
        <div id="tabby-about" className="tabby-data hidden row">
          <div className="row">
            <div className="col-sm-7" style={{ marginBottom: '50px' }}>
              <div className="about-box">
                <div className="micro-label"><I18nSpan en="DESCRIPTION" /></div>
                <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
                <br className="clearfix" clear="all" />
              </div>

              <div className="about-box">
                <div className="micro-label"><I18nSpan en="RIGHTS" /></div>
                <div dangerouslySetInnerHTML={{ __html: this.props.rights }} />
              </div>

              <div className="about-box">
                <div className="micro-label"><I18nSpan en="ACTIVITY" /></div>
                <div className="activity-box">
                  <h2 style={{ fontWeight: 100 }}>
                    <AnchorDetails className="stealth" identifier={this.props.identifier} sort="-reviewdate">
                      <I18nIcon
                        className="iconochive-comment" en="comment"
                      />
                      {' '}
                      <span
                        id="activity-reviewsN"
                      />
                    </AnchorDetails>
                  </h2>
                </div>
                <div className="activity-box">
                  <h2 style={{ fontWeight: 100 }}>
                    <a className="stealth" href="#forum" onClick={$('#tabby-forum-finder').click}>
                      <I18nIcon className="iconochive-comments" en="comments" />
                      {' '}
                      <span
                        id="activity-forumN"
                      />
                    </a>
                  </h2>
                </div>
                <br className="clearfix" clear="all" />
              </div>
            </div>
            {/* /.col-sm-7 */}
            <div className="col-sm-5" style={{ marginBottom: '50px' }}>
              {/* TODO-UPLOADER not supported - need way to turn email into userid - see Missing-API doc I think its there
                    // See https://webarchive.jira.com/browse/PBOX-3047?focusedCommentId=109572#comment-109572 for indefinitely postponed changes to uploader field TODO-@IA
                    <div className="about-box" style="background-color:rgb(251,242,221); margin-bottom:0;">
                        <div className="topinblock"
                             style="text-align:center; border-right:1px solid #ccc; padding:0 25px;margin-right:25px;">
                            <div className="micro-label" style="margin-bottom:2px">Created on</div>
                            <div style="font-size:18px;line-height:1.0;">
                                June 4<br> 2005            </div>
                        </div><div className="topinblock">
                        {_listperson(metaFromUpdater({email: metadata.uploader}))}
                        </div>
                    </div>
                    */}
              {/* TODO-UPLOADER not supported - need way to turn email into userid - see Missing-API doc I think its there
                        if (metadata.updater.length) {
                            <div className="about-box" style="margin-top:0">
                                <div className="micro-label">ADDITIONAL CONTRIBUTORS</div>
                                {metadata.updater.map((uu) => [ ( <div className="hr"></div> ), _listperson({uploader: metaFromUpdater(u)}) ])}
                            </div>
                        }
                    */}
              {/* TODO-GRAFS: not supported yet
                    <div className="grafs about-box"><div className="micro-label">VIEWS</div><h1>172,141,775</h1><div id="grafs1" className="grafs-content" data-id="prelinger"></div></div>
                    {/*TODO-GRAFS:  <div className="grafs about-box"><div className="micro-label">ITEMS</div><h1>6,911</h1><div id="grafs2" className="grafs-content" data-id="prelinger"></div></div>
                    <section
                            className="grafs about-box js-top-regions-table"
                            data-caption="Top Regions (Last 30 Days) – Beta"
                            data-caption-className="micro-label"
                            data-identifier=prelinger
                            data-days="30"
                            data-limit="10"
                    >
                        <h3 className="micro-label">TOP REGIONS (LAST 30 DAYS) – BETA</h3>
                        <p className="grafs-content js-top-regions-message">(data not available)</p>
                    </section> */}

              {/* TODO-RELATED-COLLECTIONS not supported yet and not supported on e.g. archive.org/details/prelinger anyway
                    <div className="about-box">
                        <div className="micro-label">RELATED COLLECTIONS</div>
                        <div style="margin-top:10px;">
                            <div className="topinblock">
                                <I18nIcon className="iconochive-collection" en="collection"/>            </div><div className="topinblock">
                            <b><a className="stealth" href="/details/ephemera">Ephemeral Films</a></b><br/>
                            9,435 items
                        </div>
                        </div> This div repeats
                    </div> */}
            </div>
          </div>
        </div>
        <div id="tabby-forum" className="tabby-data hidden row">
          {/* TODO-TABBY forum */}
          <I18nSpan en="Forum not yet supported on DWeb - heading to the legacy web" />
...
        </div>
      </div>
    );
  }
}

/**
 * <SearchSortBar className="xxx-button iconochive-xxx" title=ENSTRING />
 */
class SearchSortBarElement extends React.Component {
  render() {
    const { s, l } = I18n(this.props.title);
    return (
      <a href="#" className="focus-on-child-only pull-right" onClick={() => AJS.tiles_toggle(this, 'search')}>
        <div className={'topinblock ' + this.props.className} data-toggle="tooltip" title={s} lang={l} />
      </a>
    );
  }
}
class SearchSortBar extends React.Component {
  /**
   * <SearchSortBar
   *    identifier=IDENTIFIER
   *    query=STRING
   * />
   */
  render() {
    return (
      <div className="sortbar">
        <SearchSortBarElement className="lists-button iconochive-list" title="Show as list" />
        <SearchSortBarElement className="tiles-button iconochive-tiles" title="Show thumbnails" />
        <div className="hidden-xs hidden-sm pull-right" style={{ height: '50px', width: '30px' }} />
        <div className="micro-label pull-right hidden-tiles">
          <input type="checkbox" name="showdetails" onChange={() => AJS.showdetails_toggle(this, 'search')} />
          <I18nSpan className="hidden-xs-span" en="SHOW" />
          {' '}
          <I18nSpan en="DETAILS" />
        </div>

        <div className="up-down">
          <div className="iconochive-up-solid disabled" aria-hidden="true" />
          <I18nSpan className="sr-only" en="up" />
          <div className="iconochive-down-solid disabled" aria-hidden="true" />
          <I18nSpan className="sr-only" en="down" />
        </div>
        <div className="topinblock">
          <div className="hidden-md hidden-lg">
            <select className="ikind-mobile form-control" onChange={() => AJS.ikind_mobile_change(this)}>
              {this.props.identifier ? null // Dont show on collections
                : <option data-id="relevance" selected="selected">{I18nStr('RELEVANCE')}</option>
              }
              <option data-id="views">{I18nStr('VIEWS')}</option>
              <option data-id="title">{I18nStr('TITLE')}</option>
              <option data-id="date-archived">{I18nStr('DATE ARCHIVED')}</option>
              <option data-id="date-published">{I18nStr('DATE PUBLISHED')}</option>
              <option data-id="date-reviewed">{I18nStr('DATE REVIEWED')}</option>
              <option data-id="creator">{I18nStr('CREATOR')}</option>
            </select>
          </div>
        </div>
        <SearchSwitcher identifier={this.props.identifier} query={this.props.query} />
      </div>
    );
  }
}
class SearchBanner extends React.Component {
  /**
   * <SearchBanner
   *    query=STRING     query string
   *    disconnected=BOOL True if browser cannot see archive.org
   * />
   * //TODO lookout direct URL in middle of this, rather than navSearch
   */

  constructor(props) {
    super(props); // None
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(event) {
    // TODO-IAUX this is dweb-archive only, needs a version that works in raw IAUX
    debug('Search submitted %s', this.state.value);
    // noinspection JSUnresolvedFunction,JSUnresolvedVariable
    Nav.navSearch(this.state.value, { wanthistory: true });
    event.preventDefault();
  }

  render() {
    const query = this.props.query;
    return (
      <div className="container container-ia width-max"
        style={{ backgroundColor: '#d8d8d8', paddingTop: '60px', border: '1px', solid: '#979797', paddingBottom: '25px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-1 hidden-xs">
              <h3 style={{ margin: '3px 0 0 0', textAlign: 'right' }}><I18nSpan en="Search" /></h3>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-9">
              <div className="searchbar" style={{ marginBottom: '10px', marginRight: '60px' }}>
                {/* --TODO-DETAILS make the advanced stuff work with onSubmit */}
                <form className="form search-form js-search-form"
                  id="searchform"
                  method="get"
                  role="search"
                  action="https://archive.org/searchresults.php"
                  onSubmit={DwebArchive ? this.onSubmit : undefined}
                  data-event-form-tracking="Search|SearchForm"
                  data-wayback-machine-search-url="https://web.archive.org/web/*/"
                >
                  {' '}
                  {/* TODO-WAYBACK */}
                  <div className="form-group" style={{ position: 'relative' }}>
                    <div style={{ position: 'relative' }}>
                      <I18nIcon style={{ position: 'absolute', left: '4px', top: '7px', color: '#999', fontSize: '125%' }} className="iconochive-search" en="search">            </I18nIcon>
                      <input className="form-control input-sm roundbox20 js-search-bar" size="25"
                          name="search"
                          placeholder="Search" type="text" defaultValue={this.props.query}
                          style={{ fontSize: '125%', paddingLeft: '30px' }}
                          onClick={() => $(this).css('padding-left', '').parent().find('.iconochive-search')
                            .hide()}
                          aria-controls="search_options"
                          aria-label={I18nStr('Search the Archive. Filters and Advanced Search available below.')}
                          onChange={this.onChange}
                        />
                    </div>
                    {true ? null // TODO figure out whether options relevant on dweb | offline
                      : (
                          <div
                            id="search_options"
                            className="search-options js-search-options is-open"
                            aria-expanded="true"
                            aria-label={I18nStr('Search Options')}
                            data-keep-open-when-changed="true"
                          >
                            <fieldset>
                                <label>
                                    <input type="radio" name="sin" value="" defaultChecked />
                                    <I18nSpan en="Search metadata" />
                                  </label>
                                <label>
                                    <input type="radio" name="sin" value="TXT" />
                                    <I18nSpan en="Search full text of books" />
                                  </label>
                                <label>
                                    <input type="radio" name="sin" value="TV" />
                                    <I18nSpan en="Search TV captions" />
                                  </label>
                                <label>
                                    <input type="radio" name="sin" value="WEB" />
                                    <I18nSpan en="Search archived web sites" />
                                  </label>
                              </fieldset>
                            {/* We are using advanced search, so no point in this link
                                        <a href={searchURL} className="search-options__advanced-search-link">Advanced Search</a> */}
                          </div>
                      )
                                  }

                    <button className="btn btn-gray label-primary input-sm"
                      style={{ position: 'absolute', right: '-60px', top: 0 }}
                      type="submit"
                    >
                      <I18nSpan en="GO" />
                    </button>
                    <input type="hidden" name="limit" value="100" />
                    <input type="hidden" name="start" value="0" />
                    <input type="hidden" name="searchAll" value="yes" />
                    <input type="hidden" name="submit" value="this was submitted" />
                  </div>
                </form>
              </div>
            </div>
            {/* //TODO figure out decentralized bookmark submission */}
            <BookmarkButton
              url={`https://archive.org/bookmarks.php?add_bookmark=1&amp;mediatype=search&amp;identifier=${encodeURIComponent(query)}&amp;title=${encodeURIComponent(query)}`}
              disconnected={this.props.disconnected}
            />
          </div>
        </div>
      </div>
    );
  }
}

class SearchRowColumnsItems extends React.Component {
  /**
   * Output the columns-items, wrapped in a row - this will then be wrapped differently for Collections (tabbed) and Search (not)
   *
   * <SearchRowColumnsItems
   *    item=this
   *    disconnected=BOOL   True if browser cant see archive.org
   * />
   *
   *  Technical:
   *      Its Passed an Archive Item, because of the complexity in ScrollableTileGrid
   *      TODO-IAUX could reorganize SearchRowColumnsItems to take function properties to do more() etc then pass through this
   */

  render() {
    const membersToTile = (this.props.item.membersFav || []).concat(this.props.item.membersSearch || []);
    return (!(membersToTile.length) ? null /* If no members, probably a query failed so dont display */
      : (
        <div className="row">
          {/* --DONT NEED TILL HAVE FACETS --*/}
          {/* TODO-DETAILS Facets not available over advancedsearch */}
          {/* --<div className="columns-facets"></div> TODO-DETAILS-FACETS column goes here--*/}
          <div className="columns-items"
            style={{ marginLeft: '0px' }}
          >
            {/* --TODO-DETAILS-FACETS delete the margin-left when add the facet column --*/}
            {['home'].includes(this.props.item.itemid) ? null
              : (
                <>
                  <SearchSortBar identifier={this.props.item.itemid} query={this.props.item.query} />
                  <div className="sortbar-rule" />
                </>
              )
            }
            <ScrollableTileGrid item={this.props.item} disconnected={this.props.disconnected} />
          </div>
        </div>
      )
    );
  }
}
class SearchWrap extends React.Component {
  /**
   * <SearchWrap
   *   item=this
   *   transportStatuses=[{name: STRING, status: INT} Status of connected transports
   *   mirror2gateway=BOOL  True if connected to a mirror that can see its upstream gateway
   *   disconnected=BOOL    True if disconnected from upstream (so disable UI dependent on upstream)
   *   transportsClickable=BOOL True if can click on transports to pause them
   * />
   */
  render() {
    const identifier = this.props.item.itemid; // May be undefined
    return (
      <>
        <NavWrap item={this.props.item}
          transportStatuses={this.props.transportStatuses}
          mirror2gateway={this.props.mirror2gateway}
          disconnected={this.props.disconnected}
          transportsClickable={this.props.transportsClickable}
          canSave
        />
        <main id="maincontent">
          <div className="container container-ia">
            {identifier === 'home'
              ? <HomeBanner disconnected={this.props.disconnected} />
            /* ? <center style={{margin: "35px"}}><span style={{fontSize: "125px"}} className="iconochive-logo"></span></center> */
              : <SearchBanner query={this.props.item.query} disconnected={this.props.disconnected} />
          }
            <div className="container container-ia nopad">
              {!((this.props.item.membersFav || []).length + (this.props.item.membersSearch || []).length)
                ? (
                  <>
                    <I18nSpan en="Your search did not match any items in the Archive. Suggestions" />
:
                    <ul>
                      <li><I18nSpan en="Try different keywords" /></li>
                      <li><I18nSpan en="Try a more general search" /></li>
                    </ul>
                  </>
                )
                : <SearchRowColumnsItems item={this.props.item} disconnected={this.props.disconnected} />
              }
            </div>
          </div>
        </main>
        {/* --TODO-ANALYTICS is missing --*/}
      </>
    );
  }
}
class CollectionWrap extends React.Component {
  /**
   * <CollectionWrap
   *    item=this
   *   transportStatuses=[{name: STRING, status: INT} Status of connected transports
   *   mirror2gateway=BOOL  True if connected to a mirror that can see its upstream gateway
   *   disconnected=BOOL    True if disconnected from upstream (so disable UI dependent on upstream)
   *   transportsClickable=BOOL True if can click on transports to pause them
   * />
   */
  render() {
    /* Wrap the content up: wrap ( TODO-aside; navwrap; #maincontent; welcome; cher-modal; container-tabby-collection-row (TODO-columns-facets; columns-items) (tabby-about; tabby-form)
    returns:      elements tree suitable for adding into another render
     */
    // Note both description & rights need dangerousHTML and \n -> <br/>
    const item = this.props.item;
    console.assert(!item.is_dark); // Will be mediatype=collection so not is_dark
    return (
      <>
        {/* TODO needs "aside" */}
        <NavWrap item={item}
          transportStatuses={this.props.transportStatuses}
          mirror2gateway={this.props.mirror2gateway}
          disconnected={this.props.disconnected}
          transportsClickable={this.props.transportsClickable}
          canSave
        />
        <main id="maincontent">
          <div className="container container-ia">
            {['home'].includes(item.itemid)
              ? <HomeBanner disconnected={this.props.disconnected} />
              : (
                <CollectionBanner
                  identifier={item.itemid}
                  imgsrc={item.thumbnailFile()}
                  description={!item.metadata.description ? undefined : preprocessDescription(item.metadata.description).replace(/(..\/)+..\//g, '../')}
                  creator={item.metadata.creator}
                  title={item.metadata.title}
                  disconnected={this.props.disconnected}
                />
              )
        }
            {(['home', 'local'].includes(item.itemid) || this.props.disconnected) ? null
              : (
                <CherModal identifier={item.itemid} creator={item.metadata.creator} mediatype={item.metadata.mediatype}
                  title={item.metadata.title}
                />
              )
        }
            <div className="container container-ia nopad">
              <div id="tabby-collection" className="tabby-data in">
                <SearchRowColumnsItems item={item} disconnected={this.props.disconnected} />
              </div>
            </div>
            {/* TODO take a closer look at scripts on originals/prelinger lines 7360-7399 */}
            {/* --TODO-ANALYTICS is missing --*/}
            {['home', 'local'].includes(item.itemid) ? null
              : (
                <CollectionTabby
                  identifier={item.itemid}
                  description={preprocessDescription(item.metadata.description)}
                  rights={preprocessDescription(item.metadata.rights)}
                />
              )
        }
          </div>
        </main>
      </>
    );
  }
}

class ComboSearchWrap extends React.Component {
  /**
   * <ComboSearchWrap item=ARCHIVEITEM statuses={...}/>
   *
   */

  render() {
    /* Wrap the content up: wrap ( TODO-DONATE | navwrap |
    TODO-DETAILS need stuff before nav-wrap1 and after detailsabout and need to check this against Search and mediatype=collection examples
     */
    // Note also used by Home, but not by Account
    const item = this.props.item;
    document.title = `${item.query} ${item.sort.join(' ')} : ${I18nStr(DwebArchive.mirror ? 'Offline Internet Archive' : 'Decentralized Internet Archive')}`;
    const mediatype = item.metadata ? item.metadata.mediatype : 'search';
    const identifier = item.itemid;
    return (
      (identifier === 'settings')
        ? <SettingsItem item={item} {...this.props.statuses} />
      : (mediatype === 'collection')
        ? <CollectionWrap item={item} {...this.props.statuses} />
        : (mediatype === 'account')
          ? <AccountWrap item={item} {...this.props.statuses} />
          : <SearchWrap item={item} {...this.props.statuses} />
    );
  }
}

export { CollectionBanner, CollectionTabby, CollectionWrap, SearchBanner, SearchSortBar, SearchRowColumnsItems, SearchWrap, ComboSearchWrap };
// Code review 2019-oct-19
