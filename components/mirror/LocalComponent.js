import React from 'react';
import IAReactComponent from '../IAReactComponent';
const debug = require('debug')('dweb-archive:LocalComponent');
import waterfall from 'async/waterfall';

import {TileGrid} from "@internetarchive/ia-components/index.js";
import {gatewayServer, ObjectDeeperAssign}  from '@internetarchive/dweb-archivecontroller/Util';
import ArchiveMember from '@internetarchive/dweb-archivecontroller/ArchiveMember';
import {NavWrap} from "@internetarchive/ia-components/index";
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
    this.state.members = this.props.members; // Maybe undefined
    // Called by React when the Loading... div is displayed
    if (!this.members) {
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
            const members = tasks.map(task =>
              memberDict[task.identifier] || new ArchiveMember({identifier: task.identifier, crawl: task}, {unexpanded: true}));
            this.setState({members})
          }
        }
      );
      // TODO-UXLOCAL handle default things like configmerged.apps.crawl.opts.defaultDetailsSearch
    }
  }

  render() {
    // Build a grid of tiles like in Collection but doesnt have the "More" scrolling feature
    return (!this.state.members)
        ? <span>Loading ...</span>
        :
          <div className="row">
            <div className="columns-items" style={{"marginLeft": "0px"}}>
              <div style={{position: "relative"}}>
                <div id="ikind-search" className="ikind in">
                  <TileGrid members={this.state.members}/>
                </div>
              </div>
            </div>
          </div>
  }
}

class LocalItem extends IAReactComponent {
  constructor(props) {
    super(props); // item
  }

  render() {
    return (
      <>
        <NavWrap item={this.props.item}/>
        {/*--Begin page content --*/}
        <div class="container container-ia">
          <a name="maincontent" id="maincontent"></a>
        </div>
        {/*Replaces banner() in Collection and Search) */}
        <CommonWelcomeComponent
          title="Resources"
          byline={"crawled by " + gatewayServer()}
          description=""
        />
        <div class="container container-ia nopad">
          <div id="tabby-collection" class="tabby-data in">
            {/*Replaces rowColumnsItems in Search (used by Account & Collection)*/}
            <LocalGridRowComponent members={this.props.item.members}/>
          </div>
        </div>
      </>
    )
  }
}
export {LocalGridRowComponent, LocalItem};

