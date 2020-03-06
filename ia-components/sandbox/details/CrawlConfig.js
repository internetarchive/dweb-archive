/* global DwebArchive, DwebTransports */
import React from 'react';
import prettierBytes from 'prettier-bytes';
import { safePrettierBytes } from '../../util';
import { I18nStr } from '../languages/Languages';
import OptionSelect from '../../../components/optionSelect/optionSelect';
import { parmsFrom } from '@internetarchive/dweb-archivecontroller';

const debug = require('debug')('dweb-archive:CrawlConfig');
// DwebTransports is not needed, its a global

//TODO-CRAWLSELECT need to add download sizes to search
//TODO-CRAWLSELECT check works for books


const undisplayable = ['settings'];
const unclickable = ['local'];
const _levels = ['tile', 'metadata', 'details', 'all']; //  *** NOTE THIS LINE IS IN dweb-mirror.CrawlManager && dweb-archive/components/CrawlConfig.js

function crawlText({ level, identifier, query, downloaded, search } = {}) {
  debug("XXX crawlText")
  const isDownloaded = downloaded && downloaded.details;
  const p0 = I18nStr(level ? `Crawling ${level}` : isDownloaded ? 'Downloaded' : 'Not Downloaded');
  const p1 = !downloaded
    ? ''
    : (downloaded.members_all_count || downloaded.members_size)
      ? ` ${safePrettierBytes(downloaded.members_size)} ${I18nStr('in')} ${downloaded.members_details_count} ${I18nStr('of')} ${downloaded.members_all_count || '?'} ${I18nStr('items')}`
      : downloaded.pages_size
        ? ` ${safePrettierBytes(downloaded.files_size + downloaded.pages_size)}`
        : ` ${safePrettierBytes(downloaded.files_size)}  / ${safePrettierBytes(downloaded.files_all_size)}`;
  const p2 = (search && _levels.indexOf(level) >= _levels.indexOf('details'))
    ? ` ${I18nStr('Searching')} ${search.rows} ${I18nStr('rows at')} ${I18nStr(search.level)}`
    : '';
  return p0 + p1 + p2;
}


/**
 * Component used in a tile bar on dweb-mirror to display and control Crawl functionality.
 * It renders a button which indicates whether the viewed item is being crawled, and info about that crawl,
 * and allows changing the crawl status.
 *
 * Note this component is under development (May 2019) and will likely change to be more functional, which is why there
 * may be commented out code here.
 *
 * Behavior:
 * On construction: it sets an instance variable on the class so other parts of the UI can send info to it.
 *
 * On Clicking:
 *   It cycles the "level" through none / "details" / "all"
 *   It re-renders, showing new level
 *   It sends the new level to the server.
 *
 * <CrawlConfig
 *  item ArchiveItem {
 *    EITHER identifier of item
 *    OR     query  if its a search
 *    crawl: { level }
 *    numFound
 *    metadata: { mediatype}
 *    files: [ ArchiveFile ]
 *    downloaded: {
 *     details:  boolean - true if downloaded at least all files for minimum UI
 *      files_all_count: int  How many files in total (inc downloaded and otherwise, but not JSON)
 *      files_all_size: int   Total size if all downloaded (this won't be perfectly accurate as does not include metadata etc)
 *      files_count: int      How many files downloaded
 *      files_size:           Size in bytes downloaded for this item
 *      members_all_count:    Number of files in a collection or search
 *      members_details_count:  How many members downloaded to minimum UI level
 *      members_size          Size in bytes downloaded (adding members together)
 *    }
 *  }
 *  level       ENstring      Current crawling level of object
 *  search      {}          Current search parameters for crawl
 *  />
 *
 * Updating is worth commenting ....
 *  the constructor probably wont be called again if the props are changed and passed down from higher levels
 *  state.level can change due to clicking
 */


class CrawlConfig extends React.Component {
  constructor(props) {
    super(props);
    // Next line doesnt work - it seems to get rebound to OptionSelect instance ? Instead creating function in onSelect
    this.crawlStateSet = this.crawlStateSet.bind(this);
  }

  crawlStateSet(opts={}) {
    // Tell server the desired new state.
    debug('Selected crawl %o', opts);
    /*
    admin/crawl/add?identifier=foo,level=bar,rows=n
     */
    const { action, level, rows } = opts; // New values
    const { identifier, query } = this.props.item;
    let urlSetConfig;
    if (action === 'download') {
      urlSetConfig = [DwebArchive.mirror, '/admin/crawl/add?', parmsFrom({ identifier, query, level, rows })].join('');
    } else if (action === 'crawl') {
      urlSetConfig = [DwebArchive.mirror, 'admin/setconfig', identifier || '_', level || 'none'].join('/');
      if (query) {
        urlSetConfig += '?' + parmsFrom({ q: query });
      }
    }
    DwebTransports.httptools.p_GET(urlSetConfig, {}, (err, unusedInfo) => {
      // Gets back info, but not currently using
      if (err) {
        debug('Failed to set config level for %s to %s', urlSetConfig, level);
      }
    });
  }

  crawlOptions() {
    const item = this.props.item || {};
    const {metadata = {}, identifier, downloaded, numFound } = item;
    const { mediatype } = metadata;
    const isSearch = // See almost DUPLICATEDCODEISSEARCH
      ((item && item.query)
        || ['collection', 'account'].includes(mediatype)
        || ['home', 'local', 'settings'].includes(identifier)); // SEE-OTHER-ADD-SPECIAL-PAGE
    const co = [];
    if (isSearch) {
      if (['details', 'all'].includes(item.crawl.level)) {
        co.push({ text: 'Turn off crawling',  value: { action: 'crawl', level: 'none' } });
      }
      ((numFound > 1000) ? [10,100,1000,10000, 100000] : [ 3, 10, 30, 100, 300, 1000]).forEach(i => {
        if (i < numFound) {
          co.push({ text: `Crawl top ${i} items`, value: { action: 'crawl', level: 'details', rows: i } });
        }
      });
      co.push({ text: 'Crawl all items', value: { action: 'crawl', level: 'details', rows: 999999 } });
    } else {
      //TODO-CRAWLCONFIG sizes wont work for books or search - TODO move to AIP functions
      if (['details', 'all'].includes(item.crawl.level)) {
        co.push({ text: 'Turn off crawling',  value: { action: 'crawl', level: 'none' } });
      }
      if (!downloaded.details) {
        const detailsFiles = item.minimumForUI(); // [ ArchiveFile ]
        const pagesNeededSize = downloaded.pages_all_count ? (downloaded.pages_all_count * (downloaded.pages_size || 0) / downloaded.pages_count) : 0;
        const detailsNeededSize = detailsFiles.filter(af => !af.downloaded).reduce((sum, af) => sum + (parseInt(af.metadata.size, 10) || 0), 0) + pagesNeededSize;
        co.push({ text: `Download details: ${safePrettierBytes(detailsNeededSize)}`,  value: { action: 'download', level: 'details' } });
      }
      if (!downloaded.details || (item.crawl.level !== "details")) {
        co.push({ text: 'Download details and Track',  value: { action: 'crawl', level: 'details' } });
      }
      const allNeededSize = item.files.filter(af => !af.downloaded).reduce((sum, af) => sum + (parseInt(af.metadata.size, 10) || 0), 0);
      if (allNeededSize) {
        co.push({ text: `Download all: ${safePrettierBytes(allNeededSize)}`, value: { action: 'download', level: 'all' } });
      }
      if (allNeededSize || (item.crawl.level !== "all")) {
        co.push({ text: 'Download all and Track',  value: { action: 'crawl', level: 'all' } });
      }
    }
    return co;
  }

  render() {
    const { identifier, query, crawl, downloaded } = this.props.item;
    const { level, search } = crawl;
    const selectedText = crawlText({ level, identifier, query, downloaded, search });
    return ((typeof DwebArchive === 'undefined') || (DwebArchive.mirror === null) || (undisplayable.includes(identifier)))
      ? null
      : (
        <li>
          <OptionSelect
            clickable={!unclickable.includes(identifier)}
            options={this.crawlOptions()}
            selectedText={selectedText}
            onSelect={this.crawlStateSet}
          />
        </li>
      );
  }
}

export { CrawlConfig };
