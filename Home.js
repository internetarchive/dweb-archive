import React from './ReactFake';
import Search from "./Search";
import ACUtil from '@internetarchive/dweb-archivecontroller/Util';

export default class Home extends Search {
    constructor({itemid=undefined, metaapi=undefined}={}) {

        super({ itemid, metaapi, query: ACUtil.homeQuery, sort:   '-downloads' });
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