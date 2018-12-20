require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
import Search from "./Search";

export default class Home extends Search {
    constructor({itemid=undefined, metaapi=undefined}={}) {

        //https://archive.org/advancedsearch.php?q=mediatype:collection AND NOT noindex:true AND NOT collection:web AND NOT identifier:(fav-* OR what_cd OR cd OR vinyl OR librarygenesis OR bibalex OR movies OR audio OR texts OR software OR image OR data OR web OR additional_collections OR animationandcartoons OR artsandmusicvideos OR audio_bookspoetry OR audio_foreign OR audio_music OR audio_news OR audio_podcast OR audio_religion OR audio_tech OR computersandtechvideos OR coverartarchive OR culturalandacademicfilms OR ephemera OR gamevideos OR inlibrary OR moviesandfilms OR newsandpublicaffairs OR ourmedia OR radioprograms OR samples_only OR spiritualityandreligion OR stream_only OR television OR test_collection OR usgovfilms OR vlogs OR youth_media)&sort[]=-downloads&rows=10&output=json&save=yes&page=

        const skipidentifiers = ['what_cd','cd','vinyl','librarygenesis','bibalex',  // per alexis
            'movies','audio','texts','software','image','data','web', // per alexis/tracey
            'additional_collections','animationandcartoons','artsandmusicvideos','audio_bookspoetry',
            'audio_foreign','audio_music','audio_news','audio_podcast','audio_religion','audio_tech',
            'computersandtechvideos','coverartarchive','culturalandacademicfilms','ephemera',
            'gamevideos','inlibrary','moviesandfilms','newsandpublicaffairs','ourmedia',
            'radioprograms','samples_only','spiritualityandreligion','stream_only',
            'television','test_collection','usgovfilms','vlogs','youth_media'];

        const query = `mediatype:collection AND NOT noindex:true AND NOT collection:web AND NOT identifier:fav-* AND NOT identifier:( ${skipidentifiers.join(' OR ')})`;
        super({ itemid, metaapi, query, sort:   '-downloads' });
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