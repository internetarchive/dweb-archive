import React from './ReactFake';
import Search from "./Search";
import {homeQuery} from '@internetarchive/dweb-archivecontroller/Util';

//TODO-IAUX merge down into Search
export default class Home extends Search {
    constructor({itemid=undefined, metaapi=undefined}={}) {

        super({ itemid, metaapi, query: homeQuery, sort:   '-downloads' });
    }
    banner() {
        return (
            <center style={{margin: "35px"}}><span style={{fontSize: "125px"}} className="iconochive-logo"></span></center>
        );
    }
}