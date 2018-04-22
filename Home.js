require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
import Search from "./Search";

export default class Home extends Search {
    constructor(itemid, item) {
        const NOT = ['what_cd','cd','vinyl','librarygenesis','bibalex',  // per alexis
            'movies','audio','texts','software','image','data','web', // per alexis/tracey
            'additional_collections','animationandcartoons','artsandmusicvideos','audio_bookspoetry',
            'audio_foreign','audio_music','audio_news','audio_podcast','audio_religion','audio_tech',
            'computersandtechvideos','coverartarchive','culturalandacademicfilms','ephemera',
            'gamevideos','inlibrary','moviesandfilms','newsandpublicaffairs','ourmedia',
            'radioprograms','samples_only','spiritualityandreligion','stream_only',
            'television','test_collection','usgovfilms','vlogs','youth_media'];

        const query = 'mediatype:collection AND NOT noindex:true AND NOT collection:web AND NOT identifier:fav-* AND NOT identifier:' +
            NOT.join(' AND NOT identifier:');
        super({
            query:  query,
            sort:   '-downloads',
            itemid: itemid,
            item:   item
        });
    }
    banner() {
        return (
            <center style={{margin: "35px"}}><span style={{fontSize: "125px"}} className="iconochive-logo"></span></center>
    );
    }
}
