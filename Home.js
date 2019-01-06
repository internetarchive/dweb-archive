require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
import Search from "./Search";
import AICUtil from '@internetarchive/dweb-archivecontroller/Util';

export default class Home extends Search {
    constructor({itemid=undefined, metaapi=undefined}={}) {

        super({ itemid, metaapi, query: AICUtil.homeQuery, sort:   '-downloads' });
    }
    banner() {
        return (
            <center style={{margin: "35px"}}><span style={{fontSize: "125px"}} className="iconochive-logo"></span></center>
    );
    }

    /*
    async more() {
        console.log("MORE Disabled on Home page because of bug in advancedsearch page=2");
    }
    */

}