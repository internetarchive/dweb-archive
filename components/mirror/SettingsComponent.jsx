import React from 'react';
const debug = require('debug')('dweb-archive:SettingsComponent');
import prettierBytes from 'prettier-bytes';

import waterfall from 'async/waterfall';
import {gatewayServer}  from '@internetarchive/dweb-archivecontroller/Util';
import {CommonWelcomeComponent} from "./CommonComponent";
import {IAReactComponent, NavWrap} from "@internetarchive/ia-components/dweb-index.js";

//SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller

class SettingsCrawlLI extends IAReactComponent {
  /*  static propTypes = {
        crawl: PropTypes.object
      };
  */
  constructor(props) {
    super(props);
    this.setState({crawl: this.props.crawl})
    this.restart = this.restart.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.empty = this.empty.bind(this);
  }
  _crawlbutton(buttonname) {
    DwebTransports.httptools.p_GET(`${gatewayServer()}/admin/crawl/${buttonname}/${this.props.id}`, (err, res) => {
      this.setState({crawl: res});
    });

  }
  restart() { this._crawlbutton("restart"); }
  pause() { this._crawlbutton("pause"); }
  resume() { this._crawlbutton("resume"); }
  restart() { this._crawlbutton("restart"); }
  empty() { this._crawlbutton("empty"); }

  render() {
    const crawl = this.state.crawl;
    return (
      <li key={crawl.name}><span className="crawlname">{crawl.name}</span>:
      <img className="playbutton" onClick={this.restart} src="/archive/images/baseline-fast_rewind-24px.svg" alt="restart"/>
        {crawl.queue.paused
          ? <img className="playbutton" onClick={this.resume} src="/archive/images/baseline-play_arrow-24px.svg" alt="rewind"/>
          : <img className="playbutton" onClick={this.pause} src="/archive/images/baseline-pause-24px.svg" alt="pause"/>
        }
        {/*<span className="playbutton" onClick={this.empty}>{'X'}</span> -- Not currently showing X*/}
      <ul> {/*TODO Make collapsable*/}
        <li><span>Queue: </span>
          <span>Waiting: {crawl.queue.length}; </span>
          <span>Running: {crawl.queue.running}; </span>
          <span>Completed: {crawl.queue.completed}; </span>
          {/*Expand workersList*/}
        </li>
        {(!crawl.queue.workersList.length) ? null :
          <li><span>Working on: </span>
            <ul>
              {crawl.queue.workersList.map(worker =>
                <li key={worker.debugname}>
                  {worker.parent.join(' > ')} {'>'} {worker.debugname}
                  { worker.reqUrl // Its a page
                      ? null
                      : worker.file  // Its a file
                        ? prettierBytes(parseInt(worker.file.metadata.size))
                        : null  // Its an item
                      }
                </li>)}
            </ul>
          </li>
        }
        <li><span>Options: </span>
          { ["concurrency", "limitTotalTasks"].map( // Integers
            k => <span key={k}>{`${k}: ${crawl.opts[k]}; `}</span>) }
          { ["maxFileSize"].map( // Bytes
            k => <span key={k}>{`${k}: ${prettierBytes(crawl.opts[k])}; `}</span>) }
          {["skipFetchFile", "skipCache"].map( //Booleans
            k => crawl.opts[k] ? <span key={k}>{k} </span> : null ) }
        </li>
        <li><span>Seed: </span>
          {crawl.initialItemTaskList.map(task =>
            <span key={task.identifier}>{task.identifier + (task.level === "details" ? "" : (": "+task.level))+"; "}</span>)}
        </li>
        { (!crawl.errors.length) ? null :
          <li><span>Errors: </span>
            <ul>
              {crawl.errors.map(err =>
                <li key={err.date}>{err.date} {err.task.debugname}: {err.error.message + "; "}</li>)}
            </ul>
          </li>
        }
      </ul>
    </li>
  ) }

}
//util_apply(f, cb) => return function(err, interim) { let donecb=false; if (err) { cb(err); } else { try { var res = f(interim); donecb=true; cb(null, interim) } catch(err) { cb(err) }}}
class SettingsCrawlsComponent extends IAReactComponent {
  /*  static propTypes = {
        crawls: PropTypes.array
      };
  */
  constructor(props) {
    super(props);
    this.state.crawls = this.props.crawls; // Maybe undefined
    // Called by React when the Loading... div is displayed
    if (!this.crawls) {
      const urlCrawls = [gatewayServer(), "admin/crawl/status"].join('/');
      waterfall([
          cb => DwebTransports.httptools.p_GET(urlCrawls, {}, cb),
          // There may be more here , if not then simplify waterfall
        ],(err, crawls) => { // [ArchiveMember*] includes specials like local &/or home
          if (err) {
            debug("ERROR: loadcallable failed %O", err);
          } else {
            this.setState({crawls});
          }
        }
      );
    }
  }

  render() {
    // Build a list of crawls
    let crawlid = 0;
    return (!this.state.crawls)
        ? <span>Loading ...</span>
        :
          <div className="row">
            <div className="columns-items" style={{"marginLeft": "0px"}}>
              <div style={{position: "relative"}}>
                <div>
                  <h4>Crawls</h4>
                  <div className="wantde">
                    <div className="en fr de">
                      <p lang="fr">Je Suis Francais</p>
                      <p lang="en">I'm English</p>
                      <p lang="de">Ich bin deutches</p>
                    </div>
                  </div>
                  <ul>
                    {this.state.crawls.map(crawl => <SettingsCrawlLI key={crawl.name} id={crawlid++} crawl={crawl}/>) }
                  </ul>
                </div>
              </div>
            </div>
          </div>
  }
}

class SettingsInfo extends IAReactComponent {
  constructor(props) {
    super(props);
    const urlInfo = [gatewayServer(), "info"].join('/');
    waterfall([
        cb => DwebTransports.httptools.p_GET(urlInfo, {}, cb),
        // There may be more here , if not then simplify waterfall
      ],(err, info) => { // [ArchiveMember*] includes specials like local &/or home
        if (err) {
          debug("ERROR: fetch of info failed %O", err);
        } else {
          this.setState({info});
        }
      }
      );
  }

  render() {
    return (!this.state.info)
      ? <span>Loading ...</span>
      :
      <div className="row">
        <div className="columns-items" style={{"marginLeft": "0px"}}>
          <div style={{position: "relative"}}>
            <div>
              <h4>Info</h4>
              <ul>
                <li><span>Directories: </span><span>{this.state.info.directories.join('; ')}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  }
}

class SettingsItem extends IAReactComponent {
  constructor(props) {
    super(props); // item
  }

  render() {
    return (
      <div>
        <NavWrap item={this.props.item}
                 transportStatuses={this.props.transportStatuses}
                 mirror2gateway={this.props.mirror2gateway}
                 disconnected={this.props.disconnected}
                 canSave={false}
        />
        {/*--Begin page content --*/}
        <div className="container container-ia">
          <a name="maincontent" id="maincontent"></a>
        </div>
        {/*Replaces banner() in Search) */}
        <CommonWelcomeComponent
          title="Settings"
          byline={"on " + gatewayServer()}
          description=""
        />
        <div className="container container-ia nopad">
          <div className="in settings-item">
            <SettingsInfo/>
            <SettingsCrawlsComponent/>
          </div>
        </div>
      </div>
    )
  }
}
export {SettingsCrawlsComponent, SettingsItem};

