import React from 'react';
import IAReactComponent from '../IAReactComponent';
const debug = require('debug')('dweb-archive:LocalComponent');

import {TileGrid} from "@internetarchive/ia-components/index.js";
import {gatewayServer, Object_deeperAssign}  from '@internetarchive/dweb-archivecontroller/Util';
import ArchiveMember from '@internetarchive/dweb-archivecontroller/ArchiveMember';

const _levels = ["tile", "metadata", "details", "all"]; //  *** NOTE THIS LINE IS IN dweb-mirror.CrawlManager && dweb-archive/components/ConfigDetailsComponent.js

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
        return this.state.members && this.state.members.length
    }

    stateFromInfo(info, cb) {
        //TODO-UXLOCAL Note this might want to go in higher level so can display defaults at banner for example
        const config = info.config; // Mixed in with other info
        const configdefault = config[0];
        const configuser = config[1] || {};
        const configmerged = Object_deeperAssign({}, configdefault, configuser); // Cheating, but assumes no arrays needing merging
        ArchiveMember.expand(
            configmerged.apps.crawl.tasks.map(task => task.identifier),     // [IDENTIFIER*]
            (err, memberDict) => {                                      // { IDENTIFIER: ArchiveMember }
                const members = configmerged.apps.crawl.tasks.map(task => {
                    const isDetailsOrMore = task && (_levels.indexOf(task.level) >= _levels.indexOf("details"));
                    return (memberDict[task.identifier] || new ArchiveMember({identifier: task.identifier, crawl: task}, {unexpanded: true}));
                });
                cb(null, members);
            });
        // TODO-UXLOCAL handle default things like configmerged.apps.crawl.opts.defaultDetailsSearch
    }

    loadcallable(enclosingEl) {
        // Called by React (Fake or Real) when the Loading... div is displayed
        this.enclosingElement = enclosingEl; // Tell it where to render inside when info found
        if (!this.loaded()) { // Break loop render->loadcallable->setState->render ...
            const urlConfig = [gatewayServer(), "info"].join('/');
            DwebTransports.httptools.p_GET(urlConfig, {}, (err, info) => {
                if (err) {
                    debug("Config Failed to get info");
                } else {
                    this.stateFromInfo(info, (err, res) => this.setState({members: res}));
                }
            });
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

    // Everything below here is same on LocalComponent and ConfigDetailsComponent - could be a subclass

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

