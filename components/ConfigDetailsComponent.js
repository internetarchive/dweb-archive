require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
//This has (not yet) been tested on IAUX & should be moveable to IAUX just by switching the commented headers below -
//IAUX version
//import React from 'react'
//import IAReactComponent from 'iacomponents/experimental/IAReactComponent';
//import PropTypes from 'prop-types'
//!IAUX version
const debug = require('debug')('dweb-archive:ConfigDetailsComponent');
import React from "../ReactFake";
import IAReactComponent from './IAReactComponent';
const httptools = require('@internetarchive/dweb-transports/httptools');
const ACUtil = require('@internetarchive/dweb-archivecontroller/Util'); // For Object.deeperAssign
const Util = require('../Util');

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
    }

    loadAndSync(enclosingdiv) { //TODO-CONFIG move into IAReactComponent.js
        //console.asserts about props
        this.getState((err, res) => { // Get state and turn into args for setState
            if (err) {
                //TODO render err.message instead of Loading...
            } else {
                this.setState(res);
                const innerElement = this.renderInnerElement();
                while (enclosingdiv.lastChild) { // Remove "Loading..." or previous version
                    enclosingdiv.removeChild(enclosingdiv.lastChild);
                }
                enclosingdiv.appendChild(innerElement)
            }
        });
    }

    render() { //TODO move into IAReactComponent.js
        if (typeof DwebArchive !== "undefined") {
            return <span ref={this.loadAndSync}>Loading ...</span>
        } else { // Pure IAUX
            //TODO-IAUX need pure IAUX version
        }
    }
    getState(cb) {
        const urlConfig = [Util.gatewayServer(), "info"].join('/');
        const identifier = //TODO-CONFIG figure out where will get identifier
        httptools.p_GET(urlConfig, {}, (err, res) => {
            if (err) { cb(err) } else {
                const config = res.config; // Mixed in with other info
                const configdefault = config[0];
                const configuser = config[1];
                const configmerged = Object.deeperAssign({}, res.default, res.user); // Cheating, but assumes no arrays needing merging
                // noinspection JSUnresolvedVariable
                const task = configmerged.apps.crawl.tasks.find(t => t.identifier.includes(identifier));
                const isDetailsOrMore = ConfigDetailsComponent._levels.indexOf(task.level) >= ConfigDetailsComponent._levels.indexOf("details");
                // noinspection JSUnresolvedVariable
                const search = task && ( task.search  || (isDetailsOrMore && configmerged.apps.crawl.opts.defaultDetailsSearch));
                if (typeof res !== "object") { cb(new Error("Config should be JSON but got "+res)); } else {
                    return {
                        task, configdefault, configuser, configmerged,
                        oldhash: res.hash,
                        level: task && task.level,
                        rows: search && search.rows,
                        searchLevel: search && search.level
                    }
                }
            }
        });
    }
    renderInnerElement() {
        //TODO-CONFIG make it hideable with red/yellow/green spider button or similar
        //TODO-CONFIG make it editable
        //TODO-CONFIG dont show search if its not a collection - but note we dont (currently) know that here.
        return (
            <div className="configdetails" data-id={this.props.identifier}  key={this.props.identifier}>
                <span>{`Crawl ${this.props.level}`}</span>
                { search ?
                    <span>{`Search ${this.props.rows} rows at ${this.props.searchLevel}`}</span>
                : undefined }
            </div>
        );
    }



}
ConfigDetailsComponent._levels = ["tile", "metadata", "details", "all"]; //  *** NOTE THIS LINE IS IN dweb-mirror.CrawlManager && dweb-archive/components/ConfigDetailsComponent.js
