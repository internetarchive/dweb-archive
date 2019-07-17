import React from 'react';
import IAReactComponent from '../IAReactComponent';
const debug = require('debug')('dweb-archive:LocalComponent');
import waterfall from 'async/waterfall';

import {TileGrid} from "@internetarchive/ia-components/dweb-index.js";
import {gatewayServer, ObjectDeeperAssign}  from '@internetarchive/dweb-archivecontroller/Util';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember";
import {NavWrapWrapper} from '../NavWrapWrapper';
import {CommonWelcomeComponent} from "./CommonComponent";

const _levels = ["tile", "metadata", "details", "all"]; //  *** NOTE THIS LINE IS IN dweb-mirror.CrawlManager && dweb-components/.../ConfigCrawl.js
//SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller

function canonicalizeTasks(tasks) {
  /* Turn an array of tasks where identifiers may be arrays or singles into canonicalized form - one task per identifier */
  // This turns each task into an array of tasks with one identifier per task, then flattens that array of arrays into a 1D array
  return [].concat(...tasks.map(task =>
    Array.isArray(task.identifier)
      ? task.identifier.map(identifier => Object.assign({}, task, {identifier}))
      : task ));
}

//util_apply(f, cb) => return function(err, interim) { let donecb=false; if (err) { cb(err); } else { try { var res = f(interim); donecb=true; cb(null, interim) } catch(err) { cb(err) }}}
class LocalGridRowComponent extends IAReactComponent {
  /*  static propTypes = {
          members: PropTypes.array,
      };
  */
  constructor(props) {
    super(props);
  }

  render() {
    // Build a grid of tiles like in Collection/Search but doesnt have the "More" scrolling feature
    return (!this.props.members.length)
        ? <span>Loading ...</span>
        :
          <div className="row">
            <div className="columns-items" style={{"marginLeft": "0px"}}>
              <div style={{position: "relative"}}>
                <div id="ikind-search" className="ikind in">
                  <TileGrid members={this.props.members}/>
                </div>
              </div>
            </div>
          </div>
  }
}

class LocalItem extends IAReactComponent {
  constructor(props) {
    super(props); // item
    this.state.members = this.props.item.membersFav || []; // Lets assume they are in membersFav not membersSearch
    // Called by React when the Loading... div is displayed
    if (!this.state.members.length) {
      const urlConfig = [gatewayServer(), "info"].join('/');
      let tasks; // hydrated after info fetched
      waterfall([
          cb => DwebTransports.httptools.p_GET(urlConfig, {}, cb),
          (info, cb) => {
            const configmerged = ObjectDeeperAssign({}, ...info.config);
            tasks = canonicalizeTasks(configmerged.apps.crawl.tasks);
            const tasksidentifiers = tasks.map(task => task.identifier);
            ArchiveMember.expand(tasksidentifiers, cb);
          }, // { ArchiveMember } [IDENTIFIER*]
        ],(err, memberDict) => { // [ArchiveMember*] includes specials like local &/or home
          if (err) {
            debug("ERROR: loadcallable failed %O", err);
          } else {
            const item = this.props.item;
            item.membersFav = tasks.map(task =>
              memberDict[task.identifier] || new ArchiveMember({identifier: task.identifier, crawl: task}, {unexpanded: true}));

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
      // TODO-UXLOCAL handle default things like configmerged.apps.crawl.opts.defaultDetailsSearch
    }
  }

  render() {
    return (
      <>
        <NavWrapWrapper item={this.props.item} canSave={true}/>
        {/*--Begin page content --*/}
        <div className="container container-ia">
          <a name="maincontent" id="maincontent"></a>
        </div>
        {/*Replaces banner() in Search) */}
        <CommonWelcomeComponent
          title="Resources"
          byline={"crawled by " + gatewayServer()}
          description=""
        />
        <div className="container container-ia nopad">
          <div id="tabby-collection" className="tabby-data in">
            {/*Replaces SearchRowColumnsItems in Search (used by Account)*/}
            <LocalGridRowComponent members={this.state.members}/>
          </div>
        </div>
      </>
    )
  }
}
export {LocalGridRowComponent, LocalItem};

