/* global DwebTransports, DwebArchive */
/* eslint-disable react/jsx-one-expression-per-line, no-nested-ternary */
import React from 'react';
import safePrettierBytes from '../../ia-components/util';

import { CommonWelcomeComponent } from './CommonComponent';
import { NavWrap, I18nSpan, I18nStr, setLanguage, currentISO, languageConfig } from '../../ia-components/dweb-index';

const debug = require('debug')('dweb-archive:SettingsComponent');

// SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller

/*
Crawl is: {
  name: STRING
  queue: {
    paused:  BOOL,
    length, running, completed: INT
    workerslist: [  parent: [STRING], debugname || file: {metadata.size} ]
    opts: {}
    initialItemTaskList: []
    errors: []
  }}
*/

class SettingsCrawlLI extends React.Component {
  /**
   * Renders information about one crawl
   *
   * <SettingsCrawlLI
   *  id = STRING
   *  crawl = CRAWL
   * />
   */

  constructor(props) {
    super(props);
    // Sets initial state, this can be overridden by buttons
    this.state = { crawl: this.props.crawl };
    this.restart = this.restart.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.empty = this.empty.bind(this);
  }

  componentDidUpdate(prevProps) { // also unused prevState, snapshot
    // Updated because of crawl update from parent (else would be update using setState from button)
    if (this.props.tick !== prevProps.tick) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ crawl: this.props.crawl });
    }
  }

  _crawlbutton(buttonname) {
    DwebTransports.httptools.p_GET(`${DwebArchive.mirror}/admin/crawl/${buttonname}/${this.props.id}`, (err, crawl) => {
      this.setState({ crawl });
    });
  }

  pause() { this._crawlbutton('pause'); }

  resume() { this._crawlbutton('resume'); }

  restart() { this._crawlbutton('restart'); }

  empty() { this._crawlbutton('empty'); }

  render() {
    const crawl = this.state.crawl;
    return (
      <li key={crawl.name}>
        <span className="crawlname">{crawl.name}</span>
:
        <img className="playbutton" onClick={this.restart} src="/images/baseline-fast_rewind-24px.svg" alt="restart" />
        {crawl.queue.paused
          ? <img className="playbutton" onClick={this.resume} src="/images/baseline-play_arrow-24px.svg" alt="resume" />
          : <img className="playbutton" onClick={this.pause} src="/images/baseline-pause-24px.svg" alt="pause" />
        }
        {/* <span className="playbutton" onClick={this.empty}>{'X'}</span> -- Not currently showing X */}
        {/* TODO Make next ul collapsible */}
        <ul>
          <li>
            <I18nSpan en="Queue">: </I18nSpan>
            <I18nSpan en="Waiting">: </I18nSpan><span>{crawl.queue.length}; </span>
            <I18nSpan en="Running">: </I18nSpan><span>{crawl.queue.running}; </span>
            <I18nSpan en="Completed">: </I18nSpan><span>{crawl.queue.completed}; </span>
            {/* Expand workersList */}
          </li>
          {(!crawl.queue.workersList.length) ? null
            : (
              <li>
                <I18nSpan en="Working on" />
                <ul>
                  {crawl.queue.workersList.map(worker => (
                    <li key={worker.parent.join('-') + '-' + worker.debugname}>
                      {worker.parent.join(' > ')}{' > '}{worker.debugname}
                      { (worker.pageParms || !worker.file || !worker.file.metadata.size) // is there a file size
                        ? null
                        : safePrettierBytes(worker.file.metadata.size)
                      }
                    </li>
                  ))}
                </ul>
              </li>
            )
          }
          <li>
            <I18nSpan en="Options">: </I18nSpan>
            {/* TODO-MULTILINGUAL need to think this through probably best in english as relate to file */}
            { ['concurrency', 'limitTotalTasks'].map( // Integers
              k => <span key={k}>{`${k}: ${crawl.opts[k]}; `}</span>
            ) }
            { ['maxFileSize'].map( // Bytes
              k => <span key={k}>{`${k}: ${safePrettierBytes(crawl.opts[k])}; `}</span>
            ) }
            {['skipFetchFile', 'skipCache'].map( // Booleans
              k => (crawl.opts[k] ? (
                <span key={k}>
                  {k}
                  {' '}
                </span>
              ) : null)
            ) }
          </li>
          <li>
            <I18nSpan en="Seeds">: </I18nSpan>
            { crawl.initialItemTaskList.map(task => (
              <span key={task.identifier || task.query}>
                {`${task.identifier || task.query} ${(task.level === 'details' ? '' : (': ' + task.level))}; `}
              </span>
            ))}
          </li>
          { (!crawl.errors.length) ? null
            : (
              <li>
                <I18nSpan en="Errors">: </I18nSpan>
                <ul>
                  {crawl.errors.map(err => (
                    <li key={err.date + err.task.debugname}>{`${err.date} ${err.task.debugname}: ${err.error.message}; `}</li>
                  ))}
                </ul>
              </li>
            )
          }
        </ul>
      </li>
    );
  }
}
// util_apply(f, cb) => return function(err, interim) { let donecb=false; if (err) { cb(err); } else { try { var res = f(interim); donecb=true; cb(null, interim) } catch(err) { cb(err) }}}
class SettingsCrawlsComponent extends React.Component {
  /**
   * Render information about all crawls, periodically fetching from server
   *
   * <SettingsCrawlsComponent />
   */

  constructor(props) {
    super(props);
    // Initial state, will currently only be overwritten if refresh
    this.state = { crawls: this.props.crawls, tick: 1 }; // Maybe undefined
    // Called by React when the Loading... div is displayed
    this.updateTimeout = 5000; // ms
    this.updateCrawls = this.updateCrawls.bind(this);
  }

  componentDidMount() {
    this.updaterInterval = setInterval(this.updateCrawls, this.updateTimeout);
  }

  componentWillUnmount() {
    clearInterval(this.updaterInterval);
  }

  updateCrawls() {
    const urlCrawls = [DwebArchive.mirror, 'admin/crawl/status'].join('/');
    DwebTransports.httptools.p_GET(urlCrawls, { retries: 0, silentFinalError: true }, (err, crawls) => {
      // [ArchiveMember*] includes specials like local &/or home
      if (err) {
        debug('ERROR: failed to get crawl status %O', err);
      } else {
        // Increment tick for each update
        this.setState((state) => ({ tick: state.tick + 1, crawls }));
      }
    });
  }

  render() {
    // Build a list of crawls
    let crawlid = 0;
    return (!this.state.crawls)
      ? <I18nSpan en="Loading"> ...</I18nSpan>
      : (
        <div className="row">
          <div className="columns-items" style={{ marginLeft: '0px' }}>
            <div style={{ position: 'relative' }}>
              <div>
                <h4><I18nSpan en="Crawls" /></h4>
                <ul>
                  {this.state.crawls.map(crawl => <SettingsCrawlLI key={crawl.name} id={crawlid++} tick={this.state.tick} crawl={crawl} />) }
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

class SettingsInfo extends React.Component {
  /**
   * Fetch and render information about the connection to the mirror
   *
   * <SettingsInfo />
   *
   * Behavior
   *   Fetches info from server adn displays (currently) just the directories
   */

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setInfo();
  }

  setInfo() {
    const urlInfo = [DwebArchive.mirror, 'info'].join('/');
    // [ArchiveMember*] includes specials like local &/or home
    DwebTransports.httptools.p_GET(urlInfo, {}, (err, info) => {
      if (err) {
        debug('ERROR: fetch of info failed %O', err);
      } else {
        this.setState({ info });
      }
    });
  }

  render() {
    return (!this.state.info)
      ? <I18nSpan en="Loading">...</I18nSpan>
      : (
        <div className="row">
          <div className="columns-items" style={{ marginLeft: '0px' }}>
            <div style={{ position: 'relative' }}>
              <div>
                <h4><I18nSpan en="Information" /></h4>
                <ul>
                  <li>
                    <I18nSpan en="directories" />
:
                    {' '}
                    <span>{this.state.info.directories.join('; ')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

const SettingsLanguages = () => (
  <div className="row">
    <div className="columns-items" style={{ marginLeft: '0px' }}>
      <div style={{ position: 'relative' }}>
        <div>
          <h4><I18nSpan en="Languages" /></h4>
          <ul style={{
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))'
          }}
          >
            {Object.entries(languageConfig).map(kv => (
              <li key={kv[0]} onClick={() => setLanguage(kv[0])}>
                <span>{ currentISO() === kv[0] ? '\u2713' : '\u2610' }</span>
                &nbsp;
                <span>{kv[1].flag || ' '}</span>
                &nbsp;
                <span>
                  {kv[1].inEnglish}&nbsp;{kv[1].inLocal}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/**
   * A page for displaying settings
   *
   * <SettingsItem
   *  item=ARCHIVEITEM  The Settings item,
   *  transportStatuses=[{name: STRING, status: INT} Status of connected transports
   *  mirror2gateway=BOOL  True if connected to a mirror that can see its upstream gateway
   *  disconnected=BOOL    True if disconnected from upstream (so disable UI dependent on upstream)
   *  transportsClickable=BOOL True if can click on transports to pause them
   * />
   *
   * Behavior:
   *   on render: displays information about settings, has effect in SettingsInfo of fetching that information
   */
const SettingsItem = (props) => (
  <div>
    <NavWrap item={props.item}
      transportStatuses={props.transportStatuses}
      mirror2gateway={props.mirror2gateway}
      disconnected={props.disconnected}
      transportsClickable={props.transportsClickable}
      canSave={false}
    />
    {/* --Begin page content --*/}
    <div className="container container-ia">
      <a name="maincontent" id="maincontent" />
    </div>
    {/* Replaces banner() in Search) */}
    <CommonWelcomeComponent
      title={I18nStr('Settings')}
      byline={I18nStr('on') + ' ' + DwebArchive.mirror}
      description=""
    />
    <div className="container container-ia nopad">
      <div className="in settings-item">
        <SettingsInfo />
        <SettingsCrawlsComponent />
        <SettingsLanguages />
      </div>
    </div>
  </div>
);

export { SettingsCrawlsComponent, SettingsItem };
// File regular review 2020-feb-18
