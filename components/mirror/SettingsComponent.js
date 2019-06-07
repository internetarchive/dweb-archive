import React from 'react';
import IAReactComponent from '../IAReactComponent';
const debug = require('debug')('dweb-archive:SettingsComponent');

//TODO-UXSETTINGS - check these
import waterfall from 'async/waterfall';
import {gatewayServer}  from '@internetarchive/dweb-archivecontroller/Util';
import {NavWrap} from "@internetarchive/ia-components/index";

//SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller

//TODO-UXSETTINGS move this and equialent in LocalComponent.js to CommonComponent.js
class SettingsWelcomeComponent extends IAReactComponent {
  /*  static propTypes = {
          title: PropTypes.string,
          byline: PropTypes.object,
          description: PropTypes.object,
      };
  */
  constructor(props) {
    super(props);
  }

  render() { return (
    <div className="welcome container container-ia width-max" style={{'backgroundColor':'white'}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-11 col-sm-10 welcome-left">
            <h1>{this.props.title}</h1>
            <h4>{this.props.byline}</h4>{/*TODO get name of server from info*/}
            <div id="descript" style={{maxHeight:"43px", cursor:'pointer'}} dangerouslySetInnerHTML={{__html: this.props.description}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
}

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
      <span className="playbutton" onClick={this.restart}>{'<<'}</span>
        {crawl.queue.paused
          ? <span className="playbutton" onClick={this.resume}>{'>'}</span>
          : <span className="playbutton" onClick={this.pause}>{'||'}</span>
        }
        {/*<span className="playbutton" onClick={this.empty}>{'X'}</span> -- Not currently showing X*/}
      <ul> {/*Make collapsable*/}
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
                <li key={worker.debugname}>{worker.parent.join(' > ')} {'>'} {worker.debugname} {worker.file.metadata.size}</li>)}
            </ul>
          </li>
        }
        <li><span>Options: </span>
          { ["concurrency", "maxFileSize", "limitTotalTasks"].map( // Integers
            k => <span key={k}>{`${k}: ${crawl.opts[k]}; `}</span>) }
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
    // Build a grid of tiles like in Collection but doesnt have the "More" scrolling feature
    let crawlid = 0;
    return (!this.state.crawls)
        ? <span>Loading ...</span>
        :
          <div className="row">
            <div className="columns-items" style={{"marginLeft": "0px"}}>
              <div style={{position: "relative"}}>
                <div>
                  <ul>
                    {this.state.crawls.map(crawl => <SettingsCrawlLI key={crawl.name} id={crawlid++} crawl={crawl}/>) }
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
        <NavWrap item={this.props.item}/>
        {/*--Begin page content --*/}
        <div className="container container-ia">
          <a name="maincontent" id="maincontent"></a>
        </div>
        {/*Replaces banner() in Collection and Search) */}
        <SettingsWelcomeComponent
          title="Settings"
          byline={"on " + gatewayServer()}
          description=""
        />
        <div className="container container-ia nopad">
          <div className="in settings-item">
            <SettingsCrawlsComponent/>
          </div>
        </div>
      </div>
    )
  }
}
export {SettingsWelcomeComponent, SettingsCrawlsComponent, SettingsItem};

