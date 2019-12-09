/* global DwebTransports */
import React from 'react';
import {IAReactComponent } from "@internetarchive/ia-components/dweb-index.js";
const debug = require('debug')('dweb-archive:LocalComponent');
import waterfall from 'async/waterfall';

import {TileGrid} from "@internetarchive/ia-components/dweb-index.js";
import { ObjectDeeperAssign }  from '@internetarchive/dweb-archivecontroller/Util';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember";
import {CommonWelcomeComponent} from "./CommonComponent";
import {NavWrap, I18nStr, I18nSpan } from '@internetarchive/ia-components/dweb-index';

const _levels = ["tile", "metadata", "details", "all"]; //  *** NOTE THIS LINE IS IN dweb-mirror.CrawlManager && dweb-components/.../ConfigCrawl.js
//SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller

//SEE-IDENTICAL-CODE-CANONICALIZETASKS in dweb-mirror.mirrorHttp and dweb-archive.LocalComponent
function canonicalizeTasks(tasks) {
  /* Turn an array of tasks where identifiers may be arrays or singles into canonicalized form - one task per identifier */
  // This turns each task into an array of tasks with one identifier per task, then flattens that array of arrays into a 1D array
  return [].concat(...tasks.map(task =>
    Array.isArray(task.identifier)
      ? task.identifier.map(identifier => Object.assign({}, task, {identifier}))
      : task ));
}

class LocalGridRowComponent extends IAReactComponent {
  /**
   * <LocalGridRowComponent
   *   members=[ArchiveMember]  Array of members in the crawl
   * />
   *
   * Renders a grid of members that are in the crawl
   */

  constructor(props) {
    super(props);
  }

  render() {
    // Build a grid of tiles like in Collection/Search but doesnt have the "More" scrolling feature
    return (!this.props.members.length)
        ? <I18nSpan en="Loading"> ...</I18nSpan>
        :
          <div className="row">
            <div className="columns-items" style={{"marginLeft": "0px"}}>
              <div style={{position: "relative"}}>
                <div id="ikind-search" className="ikind in">
                  {/*Always display as have no downloaded info till https://github.com/internetarchive/dweb-mirror/issues/211} fixes to use DM for local.members*/}
                  {/* <TileGrid members={this.props.members} disconnected={this.props.disconnected}/>*/}
                  <TileGrid members={this.props.members} disconnected={false}/>
                </div>
              </div>
            </div>
          </div>
  }
}

class LocalItem extends IAReactComponent {
  /**
   * Display an item representing local content
   *
   * <LocalItem
   *   item=ARCHIVEITEM   Display the membersFav of this item
   *   transportStatuses=[{name: STRING, status: INT} Status of connected transports
   *   mirror2gateway=BOOL  True if connected to a mirror that can see its upstream gateway
   *   disconnected=BOOL    True if disconnected from upstream (so disable UI dependent on upstream)
   *   transportsClickable=BOOL True if can click on transports to pause them
   * />
   */
  constructor(props) {
    super(props); // item
    this.state.members = this.props.item.membersFav || []; // Lets assume they are in membersFav not membersSearch
    // Called by React when the Loading... div is displayed
    if (!this.state.members.length) {
      const urlConfig = [DwebArchive.mirror, "info"].join('/');
      let tasks; // hydrated after info fetched
      waterfall([
        // TODO move the hydration to fetch_metadata - see https://github.com/internetarchive/dweb-mirror/issues/211
          cb => DwebTransports.httptools.p_GET(urlConfig, {}, cb),
          (info, cb) => {
            const configmerged = ObjectDeeperAssign({}, ...info.config);
            tasks = canonicalizeTasks(configmerged.apps.crawl.tasks);
            const tasksidentifiers = tasks.map(task => task.identifier).filter(i => !!i);
            ArchiveMember.expand(tasksidentifiers, cb);
          }, // { ArchiveMember } [IDENTIFIER*]
        ],(err, memberDict) => { // [ArchiveMember*] includes specials like local &/or home
          if (err) {
            debug("ERROR: loadcallable failed %O", err);
          } else {
            const item = this.props.item;
            item.membersFav = tasks.map(task =>
              memberDict[task.identifier] || new ArchiveMember({identifier: task.identifier, query: task.query, crawl: task}, {unexpanded: true}));

            if ((typeof item.downloaded !== "object") && (item.downloaded !== null)) item.downloaded = {};
            // See ALMOST-IDENTICAL-CODE-SUMMARIZEFILES
            const filesDownloaded = item.files.filter(af => af.downloaded);
            item.downloaded.files_all_size = item.files.reduce((sum, af) => sum + (parseInt(af.metadata.size) || 0), 0);
            item.downloaded.files_all_count = item.files.length;
            item.downloaded.files_size = filesDownloaded.reduce((sum, af) => sum + (parseInt(af.metadata.size) || 0), 0);
            item.downloaded.files_count = filesDownloaded.length;
            item.downloaded.files_details = true; // By definition !
            // See ALMOST-IDENTICAL-CODE-MEMBERSUMMARY
            const membersDownloaded = item.membersFav.concat(item.membersSearch || []).filter(am => (typeof am.downloaded !== "undefined"));
            item.downloaded.members_size = membersDownloaded.reduce((sum, am) => sum + am.downloaded.files_size + (am.downloaded.pages_size || 0), 0);
            item.downloaded.members_details_count = membersDownloaded.filter(am => am.downloaded.details).length;
            item.downloaded.members_all_count = (item.membersFav || []).length + (item.membersSearch || []).length;
            item.downloaded.details = true;
            this.setState({
              members: this.props.item.membersFav,
              item: this.props.item });
          }
        }
      );
      // TODO-UXLOCAL handle default things like configmerged.apps.crawl.opts.defaultDetailsSearch see dweb-mirror issue#140
    }
  }

  render() {
    return (
      <>
        <NavWrap item={this.props.item}
                 transportStatuses={this.props.transportStatuses}
                 mirror2gateway={this.props.mirror2gateway}
                 disconnected={this.props.disconnected}
                 transportsClickable={this.props.transportsClickable}
                 canSave={true}
        />
        {/*--Begin page content --*/}
        <div className="container container-ia">
          <a name="maincontent" id="maincontent"></a>
        </div>
        {/*Replaces banner() in Search) */}
        <CommonWelcomeComponent
          title={I18nStr("Resources")}
          byline={I18nStr("crawled by")+" " + DwebArchive.mirror}
          description=""
        />
        <div className="container container-ia nopad">
          <div id="tabby-collection" className="tabby-data in">
            {/*Replaces SearchRowColumnsItems in Search (used by Account)*/}
            <LocalGridRowComponent members={this.state.members} disconnected={this.props.disconnected}/>
          </div>
        </div>
      </>
    )
  }
}
export {LocalGridRowComponent, LocalItem};

