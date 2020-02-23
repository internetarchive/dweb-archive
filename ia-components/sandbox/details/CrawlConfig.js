/* global DwebArchive, DwebTransports */
import React from 'react';
import prettierBytes from 'prettier-bytes';
import { I18nStr } from '../languages/Languages';
import OptionSelect from '../../../components/optionSelect/optionSelect';

const debug = require('debug')('dweb-archive:CrawlConfig');
// DwebTransports is not needed, its a global

// TODO-CRAWLSELECT - this has to be dependent on object eg. collection v Movie v ...
// Could change "Download details" to either "Will Download details" v "Downloaded details" depending state of downloaded
const crawlOptions = [
  { text: 'Not downloading', value: undefined },
  { text: 'Download details', value: 'details' },
  { text: 'Download all', value: 'all' }
];

const undisplayable = ['settings'];
const unclickable = ['local'];
const _levels = ['tile', 'metadata', 'details', 'all']; //  *** NOTE THIS LINE IS IN dweb-mirror.CrawlManager && dweb-archive/components/CrawlConfig.js

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
 *  EITHER identifier       of item
 *  OR     query            if its a search
 *  level       ENstring      Current crawling level of object
 *  search      {}          Current search parameters for crawl
 *  downloaded {
 *    details:  boolean - true if downloaded at least all files for minimum UI
 *    files_all_count: int  How many files in total (inc downloaded and otherwise, but not JSON)
 *    files_all_size: int   Total size if all downloaded (this won't be perfectly accurate as does not include metadata etc)
 *    files_count: int      How many files downloaded
 *    files_size:           Size in bytes downloaded for this item
 *    members_all_count:    Number of files in a collection or search
 *    members_details_count:  How many members downloaded to minimum UI level
 *    members_size          Size in bytes downloaded (adding members together)
 *   }
 *  />
 *
 * Updating is worth commenting ....
 *  the constructor probably wont be called again if the props are changed and passed down from higher levels
 *  state.level can change due to clicking
 */

// TODO CRAWLCONFIG evaluate these lines
function crawlText({ level, identifier, query, downloaded, search } = {}) {
  const isDownloaded = downloaded && downloaded.details;
  const p0 = I18nStr(level ? `Crawling ${level}` : isDownloaded ? 'Downloaded' : 'Not Downloaded');
  const p1 = !downloaded
    ? ''
    : downloaded.members_all_count
      ? ` ${prettierBytes(downloaded.members_size || 0)} ${I18nStr('in')} ${downloaded.members_details_count} ${I18nStr('of')} ${downloaded.members_all_count} ${I18nStr('items')}`
      : downloaded.pages_size
        ? ` ${prettierBytes(downloaded.files_size + (downloaded.pages_size || 0))}`
        : ` ${prettierBytes(downloaded.files_size)}  / ${prettierBytes(downloaded.files_all_size)}`;
  const p2 = (search && _levels.indexOf(this.props.level) >= _levels.indexOf('details'))
    ? ` ${I18nStr('Searching')} ${this.props.search.rows} ${I18nStr('rows at')} ${I18nStr(this.props.search.level)}`
    : '';
  return p0 + p1 + p2;
}

function crawlStateSet({ identifier, query, level} ) {
  // Tell server the desired new state.
  debug('Selected crawl %o', level);
  let urlSetConfig = [DwebArchive.mirror, 'admin/setconfig', identifier || '_', level || 'none'].join('/');
  if (query) {
    urlSetConfig += '?q=' + encodeURIComponent(query);
  }
  DwebTransports.httptools.p_GET(urlSetConfig, {}, (err, unusedInfo) => {
    // Gets back info, but not currently using
    if (err) {
      debug('Failed to set config level for %s to %s', urlSetConfig, level);
    }
  });
}

/**
 * Renders a crawl select drop down
 * TODO-CRAWLSELECT document props
 */
class CrawlConfig extends React.Component {
  /*
  constructor(props) {
    super(props);
    // Next line doesnt work - it seems to get rebound to OptionSelect instance ? Instead creating function in onSelect
    // this.crawlStateSet.bind(this);
  }
 */

  render() {
    const selectedText = crawlText({
      level: this.props.level,
      identifier: this.props.identifier,
      query: this.props.query,
      downloaded: this.props.downloaded,
      search: this.props.search
    });
    return ((typeof DwebArchive === 'undefined') || (DwebArchive.mirror === null) || (undisplayable.includes(this.props.identifier)))
      ? null
      : (
        <li>
          <OptionSelect
            clickable={!unclickable.includes(this.props.identifier)}
            options={crawlOptions}
            selectedText={selectedText}
            selectedValue={this.props.level}
            onSelect={(level) => crawlStateSet({ level, identifier: this.props.identifier, query: this.props.query })}
          />
        </li>
      );
  }
}

export { CrawlConfig };
