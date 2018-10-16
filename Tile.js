require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!

//import React from 'react';
import React from './ReactFake';
import Util from './Util';
import ArchiveItem from './ArchiveItem';


export default class Tile {
  render(searchresult){
    // Searchresult will be a collection of metadata similar to that of an item,
    // its close enough to fake it, BUT if that causes issues, try "new ArchiveItem({itemid: searchresult.identifier} but that will usually force a fetch_metadata somewhere)
    const archiveitem = new ArchiveItem({itemid: searchresult.identifier, item:searchresult})
    //xxx shorten/safify certain title usages (compared to Lists.inc)
    const collections = (Array.isArray(searchresult.collection) ? searchresult.collection : (typeof(searchresult.collection) === 'string' ? [searchresult.collection] : []));
    const collection0 = collections[0];
    const nFavorites = collections.filter(e => e.startsWith('fav-')).length;
    const is_collection = (searchresult.mediatype === 'collection');
    const classes = 'item-ia' + (is_collection ? ' collection-ia' : '');
    // If dont have collection0 data then probably came from minimal metadata in fav-xxx and then ArchiveItem metadata
      // Should really do this async, but that would mean rewriting a lot of code, sofor now, chea
    const collection0thumbnaillinks = searchresult.collection0thumbnaillinks || `dweb:/arc/archive.org/services/img/${collection0}`; //ReactFake will handle async
    const collection0title = searchresult.collection0title || collection0; // Wrong but acceptable for now
    const imgname = searchresult.identifier + ".PNG"; // Required since rendermedia doesnt know the filetype otherwise
    //ARCHIVE-BROWSER on browser, want to load links locally (via APIs) rather than rebuilding HTML page
      // ARCHIVE-BROWSER added key= to keep react happy (I hope)
      return (
      <div className={classes} data-id={searchresult.identifier}  key={searchresult.identifier}>
      { (collection0) ?
        <a className="stealth" tabIndex="-1" onClick={`Nav.nav_details("${collection0}");`}>
          <div className="item-parent">
              {/*collection0thumbnaillinks wont be there for the metadata req on items in fav-xyz so use the URL and let ReactFake expand it*/}
            <div className="item-parent-img"><img src={collection0thumbnaillinks}/></div>
            <div className="item-parent-ttl">{collection0title}</div>
          </div>{/*.item-parent*/}
        </a>
       : undefined }
        <div className="hidden-tiles views C C1">
          <nobr className="hidden-xs">{Util.number_format(searchresult.downloads)}</nobr>
          <nobr className="hidden-sm hidden-md hidden-lg">{Util.number_format(searchresult.downloads)}</nobr>
        </div>


        <div className="C234">
          <div className="item-ttl C C2">
            <a onClick={`Nav.nav_details("${searchresult.identifier}");`} title={searchresult.title}>
              <div className="tile-img">
                <img className="item-img clipW clipH" imgname={imgname} src={archiveitem.thumbnailFile()}/>
              </div>{/*.tile-img*/}
              <div className="ttl">
                {searchresult.title}
              </div>
            </a>
          </div>

          <div className="hidden-tiles pubdate C C3">
            <nobr className="hidden-xs">Dec 3, 2012</nobr>
            <nobr className="hidden-sm hidden-md hidden-lg">12/12</nobr>
          </div>

          <div className="by C C4">
            <span className="hidden-lists">{searchresult.creator && 'by '}</span>
            <span title={Array.isArray(searchresult.creator) ? searchresult.creator.join(',') : searchresult.creator}>{searchresult.creator}</span>
          </div>{/*.C4*/}
        </div>{/*.C234*/}


        <div className="mt-icon C C5">
          {Tile.glyph(Util.mediatype_canonical(searchresult.mediatype))}
        </div>
        <h6 className="stat ">
          <span className="iconochive-eye" aria-hidden="true"></span><span className="sr-only">eye</span>
          <nobr>{Util.number_format(searchresult.downloads)}</nobr>
        </h6>
        <h6 className="stat">
          <span className="iconochive-favorite" aria-hidden="true"></span><span className="sr-only">favorite</span>
          {nFavorites}
        </h6>
        <h6 className="stat">
          <span className="iconochive-comment" aria-hidden="true"></span><span className="sr-only">comment</span>
          {searchresult.num_reviews || "0"}
        </h6>
      </div>
    );
  }

  collection_stats(item){
    return (
      <div className="collection-stats">
        {Tile.glyph({name:'collection', classes:'topinblock hidden-lists'})}
        <div className="num-items topinblock">
          0
          <div className="micro-label">ITEMS</div>
        </div>
        <div className="num-items hidden-tiles">
          {Util.number_format(item.downloads)}
          <div className="micro-label">VIEWS</div>
        </div>
      </div>
    );
  }

  static glyph({name = 'question', classes = ''} = {}) {
      return (
          <span className={classes}>
              <span className={'iconochive-'+name} aria-hidden="true"></span>
              <span className="sr-only">{name}</span>
          </span>
      );
  }


}
