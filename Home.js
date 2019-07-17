import React from './ReactFake';
import Search from "./Search";
import {homeQuery} from '@internetarchive/dweb-archivecontroller/Util';

//TODO-IAUX merge down into Search
export default class Home extends Search {
    constructor({itemid=undefined, metaapi=undefined}={}) {

        super({ itemid, metaapi, query: homeQuery, sort:   '-downloads' });
    }
}