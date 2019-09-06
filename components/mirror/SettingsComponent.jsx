import React from 'react';
const debug = require('debug')('dweb-archive:SettingsComponent');
import prettierBytes from 'prettier-bytes';

import waterfall from 'async/waterfall';
import {gatewayServer}  from '@internetarchive/dweb-archivecontroller/Util';
import {CommonWelcomeComponent} from "./CommonComponent";
import {IAReactComponent, NavWrap} from "@internetarchive/ia-components/dweb-index.js";

//SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller

/*
Crawl is: {
  name: STRING
  queue: {
    paused:  BOOL,
    length, running, completed: INT
    workerslist: [  parent: [STRING], debugname, reqUrl || file: {metadata.size} ]
    opts: {}
    initialItemTaskList: []
    errors: []
  }}
*/
class I8span extends IAReactComponent {
  /**
   * <I8span en="Yes" fr="Out" de="Da" es="Yo" />
   */
  render() {
    return <span className={Object.keys(this.props).join(" ")}>
      { Object.entries(this.props).map(kv => <span key={kv[0]} lang={kv[0]}>{kv[1]}</span>) }
    </span>
  }
}

class SettingsCrawlLI extends IAReactComponent {
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
        <li>
          <I8span en="Queue:" fr="Queue:" de="Warteschlange:" es="Cola:"/>"
          <I8span en="Waiting:" fr="Attendre:" de="Warten:" es="Esperando"/><span>{crawl.queue.length}; </span>
          <span en="Running:" fr="Fonctionnement:" de="Laufen:" es="Corriendo"/><span>{crawl.queue.running}; </span>
          <span  en="Completed:" fr="Terminé:" de="Abgeschlossen:" es="Terminado"/><span>{crawl.queue.completed}; </span>
          {/*Expand workersList*/}
        </li>
        {(!crawl.queue.workersList.length) ? null :
          <li><I8span en="Working on" fr="Travaille sur" de="Arbeiten an" es="Trabajando en"/>
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

        <li><I8span en="Options: " de="Optionen: " es="Opciones: " fr="Options: "/>
          {/*TODO-MULTILINGUAL need to think this through probably best in english as relate to file*/}
          { ["concurrency", "limitTotalTasks"].map( // Integers
            k => <span key={k}>{`${k}: ${crawl.opts[k]}; `}</span>) }
          { ["maxFileSize"].map( // Bytes
            k => <span key={k}>{`${k}: ${prettierBytes(crawl.opts[k])}; `}</span>) }
          {["skipFetchFile", "skipCache"].map( //Booleans
            k => crawl.opts[k] ? <span key={k}>{k} </span> : null ) }
        </li>

        <li><I8span en="Seed: " de="Samen: " es="Semilla: " fr="Graine: "/>
          {crawl.initialItemTaskList.map(task =>
            <span key={task.identifier}>{task.identifier + (task.level === "details" ? "" : (": "+task.level))+"; "}</span>)}
        </li>
        { (!crawl.errors.length) ? null :
          <li><I8span en="Errors: " de="Fehler: " es="Errores: " fr="Erreurs"/>
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
  /**
   * Render information about all crawls
   *
   * <SettingsCrawlsComponent
   *    crawls = [ CRAWL ]
   * />
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
        ? <span><I8span en="Loading" de="Wird geladen" es="Cargando" fr="Chargement"/> ...</span>
        :
          <div className="row">
            <div className="columns-items" style={{"marginLeft": "0px"}}>
              <div style={{position: "relative"}}>
                <div>
                  <h4><I8span en="Crawls" de="Crawlt" es="Se arrastra" fr="Rampes"/></h4>
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
      ? <span><I8span en="Loading" de="Wird geladen" es="Cargando" fr="Chargement"/> ...</span>
      :
      <div className="row">
        <div className="columns-items" style={{"marginLeft": "0px"}}>
          <div style={{position: "relative"}}>
            <div>
              <h4><I8span en="Info" de="Information" es="Información" fr="Information"/></h4>
              <ul>
                <li><I8span en="Directories" de="verzeichnisse" es="directorios" fr="directories"/>: <span>{this.state.info.directories.join('; ')}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  }
}

class SettingsLanguages extends IAReactComponent {

  setLanguage(lang) {
    document.body.classList.remove("en","fr","de", "es");
    document.body.classList.add(lang)
  }

  render() {
    return (
      <div className="row">
        <div className="columns-items" style={{"marginLeft": "0px"}}>
          <div style={{position: "relative"}}>
            <div>
              <h4><I8span en="Languages" de="Sprachen" es="Idiomas" fr="Les langues"/></h4>
              <p><I8span
                en="This is an experiment, and only works on this page"
                de="Dies ist ein Experiment und funktioniert nur auf dieser Seite"
                es="Este es un experimento y solo funciona en esta página"
                fr="Ceci est une expérience et ne fonctionne que sur cette page"
              /></p>
              <div className="en fr de es">
                <span>
                  <span onClick={()=>this.setLanguage('fr')}>French</span>&nbsp;<span lang="fr">{'\u2713'}</span>&nbsp;
                  <span onClick={()=>this.setLanguage('en')}>English</span>&nbsp;<span lang="en">{'\u2713'}</span>&nbsp;
                  <span onClick={()=>this.setLanguage('de')}>Deutches</span>&nbsp;<span lang="de">{'\u2713'}</span>&nbsp;
                  <span onClick={()=>this.setLanguage('es')}>Castilian</span>&nbsp;<span lang="es">{'\u2713'}</span>&nbsp;
                </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class SettingsItem extends IAReactComponent {
  /**
   * A page for displaying settings
   *
   * <SettingsItem
   *  item=ARCHIVEITEM  The Settins item,
   *  transportStatuses=[{name: STRING, status: INT} Status of connected transports
   *  mirror2gateway=BOOL  True if connected to a mirror that can see its upstream gateway
   *  disconnected=BOOL    True if disconnected from upstream (so disable UI dependent on upstream)
   * />
   *
   * Behavior:
   *   on render: displays information about settings, has effect in SettingsInfo of fetching that information
   */
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
          title=<I8span en="Settings" de="die Einstellungen" es="Configuraciones" fr="Réglages"/>
          byline=<span><I8span en="on" de="auf" es="en" fr="sur"/> {gatewayServer()}</span>
          description=""
        />
        <div className="container container-ia nopad">
          <div className="in settings-item">
            <SettingsInfo/>
            <SettingsCrawlsComponent/>
            <SettingsLanguages/>
          </div>
        </div>
      </div>
    )
  }
}
export {SettingsCrawlsComponent, SettingsItem};

