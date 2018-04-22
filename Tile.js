require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!

//import React from 'react';
import React from './ReactFake';
import Util from './Util';


export default class Tile {
  render(item){
    //xxx shorten/safify certain title usages (compared to Lists.inc)
    const collections = (Array.isArray(item.collection) ? item.collection : (typeof(item.collection) === 'string' ? [item.collection] : []));
    const collection0 = collections[0];
    const collection0title = item.collection0title;
    const nFavorites = collections.filter(e => e.startsWith('fav-')).length;
    const is_collection = (item.mediatype === 'collection');
    const classes = 'item-ia' + (is_collection ? ' collection-ia' : '');
    const collection0thumbnaillinks = item.collection0thumbnaillinks;
    const imgname = item.identifier + ".PNG"; // Required since rendermedia doesnt know the filetype otherwise
    //ARCHIVE-BROWSER on browser, want to load links locally (via APIs) rather than rebuilding HTML page
      // ARCHIVE-BROWSER added key= to keep react happy (I hope)
      return (
      <div className={classes} data-id={item.identifier}  key={item.identifier}>
      { (collection0) ?
        <a className="stealth" tabIndex="-1" onClick={`Nav.nav_details("${collection0}");`}>
          <div className="item-parent">
            <div className="item-parent-img"><img src={collection0thumbnaillinks}/></div>
            <div className="item-parent-ttl">{collection0title}</div>
          </div>{/*.item-parent*/}
        </a>
       : undefined }
        <div className="hidden-tiles views C C1">
          <nobr className="hidden-xs">{Util.number_format(item.downloads)}</nobr>
          <nobr className="hidden-sm hidden-md hidden-lg">{Util.number_format(item.downloads)}</nobr>
        </div>


        <div className="C234">
          <div className="item-ttl C C2">
            <a onClick={`Nav.nav_details("${item.identifier}");`} title={item.title}>
              <div className="tile-img">
                <img className="item-img" imgname={imgname} src={item.thumbnaillinks}/>  {/*TODO unclear where height comes from for these images*/}
              </div>{/*.tile-img*/}
              <div className="ttl">
                {item.title}
              </div>
            </a>
          </div>

          <div className="hidden-tiles pubdate C C3">
            <nobr className="hidden-xs">Dec 3, 2012</nobr>
            <nobr className="hidden-sm hidden-md hidden-lg">12/12</nobr>
          </div>

          <div className="by C C4">
            <span className="hidden-lists">{item.creator && 'by '}</span>
            <span title={Array.isArray(item.creator) ? item.creator.join(',') : item.creator}>{item.creator}</span>
          </div>{/*.C4*/}
        </div>{/*.C234*/}


        <div className="mt-icon C C5">
          {Util.mediatype_icon(item.mediatype)}
        </div>
        <h6 className="stat ">
          <span className="iconochive-eye" aria-hidden="true"></span><span className="sr-only">eye</span>
          <nobr>{Util.number_format(item.downloads)}</nobr>
        </h6>
        <h6 className="stat">
          <span className="iconochive-favorite" aria-hidden="true"></span><span className="sr-only">favorite</span>
          {nFavorites}
        </h6>
        <h6 className="stat">
          <span className="iconochive-comment" aria-hidden="true"></span><span className="sr-only">comment</span>
          {item.num_reviews || "0"}
        </h6>
      </div>
    );
  }

  collection_stats(item){
    return (
      <div className="collection-stats">
        {Util.glyph({name:'collection', classes:'topinblock hidden-lists'})}
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
}
