import React from './ReactFake';
import Search from "./Search";
import {homeQuery} from '@internetarchive/dweb-archivecontroller/Util';

export default class Home extends Search {
    constructor({itemid=undefined, metaapi=undefined}={}) {

        super({ itemid, metaapi, query: homeQuery, sort:   '-downloads' });
    }
    banner() {
        return (
            <center style={{margin: "35px"}}><span style={{fontSize: "125px"}} className="iconochive-logo"></span></center>
        );
    }
    _fetch_metadata(opts, cb) { cb(null, this); } // No metadata for home

}