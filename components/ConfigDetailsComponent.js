//This has (not yet) been tested on IAUX & should be moveable to IAUX just by switching the commented headers below -
//IAUX version
//import React from 'react'
//import IAReactComponent from 'iacomponents/experimental/IAReactComponent';
//import PropTypes from 'prop-types'
//!IAUX version
const debug = require('debug')('dweb-archive:ConfigDetailsComponent');
const canonicaljson = require('@stratumn/canonicaljson');
import React from "../ReactFake";
import IAReactComponent from './IAReactComponent';
const ACUtil = require('@internetarchive/dweb-archivecontroller/Util'); // For Object.deeperAssign
//DwebTransports is not needed, its a global
//TODO-CONFIG make it be empty if not on mirror

export default class ConfigDetailsComponent extends IAReactComponent {
    /* -- Not used with ReactFake yet
    static propTypes = {
        identifier: PropTypes.string,
        user: PropTypes.object,
        default: PropTypes.object,
        merged: PropTypes.object,
        oldhash: PropTypes.string,
        level: PropTypes.string,
        search: PropTypes.object,
        rows: PropType.integer,
        searchLevel: PropTypes.string,
    };
    */
    constructor(props)
    {
        super(props);
        this.clicked = () => this.clickedCallable();    // Maybe move this to IAReactComponent if it gets used a lot
    }

    static insertInside(elementId, props) {
        // Called from nav_details to display the config info
        const parentElement = document.getElementById(elementId); // Note this isnt a Component, cos its in the archive.html
        const el = new this(props).render(); // Will be loading asynchronously
        while (parentElement.lastChild) {
            parentElement.removeChild(parentElement.lastChild);
        }
        React.addKids(parentElement, el); // Using addKids to force the "ref" to be used //TODO-IAUX probably doesnt have addKids ?
    }

    render() { //TODO move into IAReactComponent.js
        if (typeof DwebArchive !== "undefined") {
            return <span ref={this.load}>Loading ...</span>
        } else { // Pure IAUX
            //TODO-IAUX need pure IAUX version
        }
    }

    loadcallable(enclosingEl) {
        // Called by React when the Loading... div is displayed
        const urlConfig = [ACUtil.gatewayServer(), "info"].join('/');
        this.enclosingElement = enclosingEl;
        DwebTransports.httptools.p_GET(urlConfig, {}, (err, info) => {
            if (err) {
                debug("Config Failed to get info");
            } else {
                this.displayInfo(info);
            }
        });
    }

    displayInfo(info) {
        // Called when new info is available to display
        this.setState(this.stateFromInfo(info))
        const innerElement = this.renderInnerElement();
        while (this.enclosingElement.lastChild) { // Remove "Loading..." or previous version
            this.enclosingElement.removeChild(this.enclosingElement.lastChild);
        }
        this.enclosingElement.appendChild(innerElement);
    }

    stateFromInfo(info, cb) {
        const identifier = this.props.identifier;
        const config = info.config; // Mixed in with other info
        const configdefault = config[0];
        const configuser = config[1];
        const configmerged = Object.deeperAssign({}, configdefault, configuser); // Cheating, but assumes no arrays needing merging
        // noinspection JSUnresolvedVariable
        const task = configmerged.apps.crawl.tasks.find(t => t.identifier.includes(identifier));
        const isDetailsOrMore = task && ConfigDetailsComponent._levels.indexOf(task.level) >= ConfigDetailsComponent._levels.indexOf("details");
        // noinspection JSUnresolvedVariable
        const search = task && ( task.search  || (isDetailsOrMore && configmerged.apps.crawl.opts.defaultDetailsSearch));
        // noinspection JSUnusedGlobalSymbols
        return {
            task, configdefault, configuser, configmerged,
            oldhash: info.hash,
            level: task && task.level,
            rows: search && search.rows,
            searchLevel: search && search.level
        };
    }
    renderInnerElement() {
        //TODO-CONFIG make it hideable with red/yellow/green spider button or similar
        //TODO-CONFIG make it editable
        //TODO-CONFIG dont show search if its not a collection - but note we dont (currently) know that here.
        return (
            <div className="configdetails" data-id={this.props.identifier}  key={this.props.identifier}>
                <span onclick={this.clicked}>{this.state.level ? `Crawling ${this.state.level}` : "Not Crawling"}</span>
                { this.state.search ?
                    <span>{`Search ${this.state.rows} rows at ${this.state.searchLevel}`}</span>
                    : undefined }
            </div>
        );
    }

    clickedCallable() {
        debug("%s: Crawl clicked", this.props.identifier);
        //this.state.configuser = Object.assign(this.state.configuser, {xx})
        if (!this.state.configuser) this.state.configuser = {};
        Object.deeperAssign(this.state.configuser, {apps: { crawl: {} }} ); // Make sure has path
        if (!this.state.configuser.apps.crawl.tasks) this.state.configuser.apps.crawl.tasks = []; // Make sure has a list can push into
        // Make sure we have a task to work with: existing, new, or split out of array
        if (!this.state.task) { // Nothing for this identifier
            this.state.task = {identifier: this.props.identifier};
            this.state.configuser.apps.crawl.tasks.push(this.state.task);
        } else if (Array.isArray(this.state.task.identifier)) {
            this.state.task.identifier.splice(this.state.task.identifier.indexOf(this.props.identifier), 1);
            this.state.task = Object.assign({}, this.state.task, {identifier: this.props.identifier}); // Will copy level and search etc from old task
            this.state.configuser.apps.crawl.tasks.push(this.state.task);
        }
        // Bump the level to next one
        if (this.state.task.level === "details") {
            this.state.task.level = "all";
        } else if (this.state.task.level === "all") {
            this.state.task.level = undefined;
        } else {
            this.state.task.level = "details";
        }
        //TODO handle case of clicking back ot empty - remove task
        const urlSetConfig = [ACUtil.gatewayServer(), "setconfig"].join('/');
        DwebTransports.httptools.p_POST(urlSetConfig,
            {data: canonicaljson.stringify(this.state.configuser), contenttype: "application/json"},
            (err, info) => {
                debug("Configuration %s", err ? "Failed "+err.message : "set");
                if (!err) this.displayInfo(info);
            }
        );
    }
}
ConfigDetailsComponent._levels = ["tile", "metadata", "details", "all"]; //  *** NOTE THIS LINE IS IN dweb-mirror.CrawlManager && dweb-archive/components/ConfigDetailsComponent.js
