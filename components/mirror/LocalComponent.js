import React from 'react';
import IAReactComponent from '../IAReactComponent';
const debug = require('debug')('dweb-archive:LocalComponent');
import waterfall from 'async/waterfall';

import {TileGrid} from "@internetarchive/ia-components/index.js";
import {gatewayServer, Object_deeperAssign}  from '@internetarchive/dweb-archivecontroller/Util';
import ArchiveMember from '@internetarchive/dweb-archivecontroller/ArchiveMember';

const _levels = ["tile", "metadata", "details", "all"]; //  *** NOTE THIS LINE IS IN dweb-mirror.CrawlManager && dweb-components/.../ConfigCrawl.js

function canonicalizeTasks(tasks) {
  /* Turn an array of tasks where identifiers may be arrays or singles into canonicalized form - one task per identifier */
  // This turns each task into an array of tasks with one identifier per task, then flattens that array of arrays into a 1D array
  return [].concat(...tasks.map(task =>
    Array.isArray(task.identifier)
      ? task.identifier.map(identifier => Object.assign({}, task, {identifier}))
      : task ));
}
class LocalWelcomeComponent extends IAReactComponent {
/*  static propTypes = {
        title: PropTypes.string,
        byline: PropTypes.object,
        description: PropTypes.object,
    };
*/
    constructor(props)
    {
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

//util_apply(f, cb) => return function(err, interim) { let donecb=false; if (err) { cb(err); } else { try { var res = f(interim); donecb=true; cb(null, interim) } catch(err) { cb(err) }}}
class LocalGridRowComponent extends IAReactComponent {
    /*  static propTypes = {
            members: PropTypes.array,
        };
    */
    constructor(props)
    {
        super(props);
        this.state.members = this.props.members;
    }

    loaded() {
        return this.state.members; // Note it can be loaded but still have zero members
    }
    
    loadcallable(enclosingEl) {
        // Called by React (Fake or Real) when the Loading... div is displayed
        this.enclosingElement = enclosingEl; // Tell it where to render inside when info found
        if (!this.loaded()) { // Break loop render->loadcallable->setState->render ...
            const urlConfig = [gatewayServer(), "info"].join('/');
            let tasks; // hydrated after info fetched
            waterfall([
                cb => DwebTransports.httptools.p_GET(urlConfig, {}, cb),
                (info, cb) => {
                        const configmerged = Object_deeperAssign({}, ...info.config);
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

    renderInnerElement() {
        // Build a grid of tiles like in Collection but doesnt have the "More" scrolling feature
        return (
        //!(this.state.members && this.state.members.length) ? null :  /* If no members, probably a query failed so dont display */
            <div className="row">
                <div className="columns-items" style={{"marginLeft": "0px"}}>
                    <div style={{position:"relative"}}>
                        <div id="ikind-search" className="ikind in">
                            <TileGrid members={this.state.members}/>
                        </div>
                    </div>
                </div>
            </div>
    )}

    // Everything below here is same on LocalComponent and ConfigCrawl - could be a subclass

    setState(infoAsState) {
        // Called when new info is available to display
        super.setState(infoAsState);
        // On FakeReact need to manually rerender
        if (this.isFakeReact) {
            const innerElement = this.renderInnerElement();
            while (this.enclosingElement.lastChild) { // Remove "Loading..." or previous version
                this.enclosingElement.removeChild(this.enclosingElement.lastChild);
            }
            this.enclosingElement.appendChild(innerElement);
        }
    }

    render() {
        if (this.isFakeReact || !this.loaded()) {
            return <span ref={this.load}>Loading ...</span>
        } else { // Pure IAUX
            return this.renderInnerElement(); // Will rerender when state changes
        }
    }
}


export {LocalWelcomeComponent, LocalGridRowComponent};

