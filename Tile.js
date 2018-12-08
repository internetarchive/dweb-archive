require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!

//import React from 'react';
import React from './ReactFake';
import Util from './Util';
import ParentTileImg from './ParentTileImg';


export default class Tile {
  render(member){
    // member is an ArchiveMember a pre-munged collection of metadata returned by a Search, AdvancedSearch or in members.json
    //const thumbnailfile = member.mediatype === "search" ? "/images/search-saved.png" : member.thumbnailFile();
    //xxx shorten/safify certain title usages (compared to Lists.inc)
    const collection0 = member.collection0(); // maybe undefined
    const is_collection = (member.mediatype === 'collection');
    const classes = 'item-ia' + (is_collection ? ' collection-ia' : '');
    // If dont have collection0 data then probably came from minimal metadata in fav-xxx and then ArchiveItem metadata
      // Should really do this async, but that would mean rewriting a lot of code, sofor now, chea
    // noinspection JSUnresolvedVariable
      const collection0thumbnaillinks = member.collection0thumbnaillinks || `dweb:/arc/archive.org/services/img/${collection0}`; //ReactFake will handle async //TODO move into ArchiveMember
    // noinspection JSUnresolvedVariable
      const collection0title = member.collection0title || collection0; // Wrong but acceptable for now
    const imgname = member.identifier + ".PNG"; // Required since rendermedia doesnt know the filetype otherwise
    const creatorTitle = member.creator ? member.creator.join(',') : undefined;
    //ARCHIVE-BROWSER on browser, want to load links locally (via APIs) rather than rebuilding HTML page
      // ARCHIVE-BROWSER added key= to keep react happy (I hope)
      return (
      <div className={classes} data-id={member.identifier}  key={member.identifier}>
      { (collection0) ?
        <a className="stealth" tabIndex="-1" onClick={`Nav.nav_details("${collection0}");`}>
          <div className="item-parent">
              {/*collection0thumbnaillinks wont be there for the metadata req on items in fav-xyz so use the URL and let ReactFake expand it*/}
            <div className="item-parent-img">
              <ParentTileImg member={member}/>
            </div>
            <div className="item-parent-ttl">{collection0title}</div>
          </div>{/*.item-parent*/}
        </a>
       : undefined }
        <div className="hidden-tiles views C C1">
          <nobr className="hidden-xs">{Util.number_format(member.downloads)}</nobr>
          <nobr className="hidden-sm hidden-md hidden-lg">{Util.number_format(member.downloads)}</nobr>
        </div>


        <div className="C234">
          <div className="item-ttl C C2">
            <a onClick={`Nav.nav_details("${member.identifier}");`} title={member.title}>
              <div className="tile-img">
                <img className="item-img clipW clipH" imgname={imgname} src={member}/>
              </div>{/*.tile-img*/}
              <div className="ttl">
                {member.title}
              </div>
            </a>
          </div>

          <div className="hidden-tiles pubdate C C3">
            <nobr className="hidden-xs">Dec 3, 2012</nobr>
            <nobr className="hidden-sm hidden-md hidden-lg">12/12</nobr>
          </div>

            {member.creator && member.creator.length ?
          <div className="by C C4">
            <span className="hidden-lists">by </span>
            <span title={creatorTitle}>{creatorTitle}</span>
          </div>
                : undefined }
        </div>{/*.C234*/}
        {(member.mediatype === "collection") ? Tile.div_collectionstats(member) : Tile.div_statbar(member) }
      </div>
    );
  }

  static div_collectionstats(member){
      //TODO fix 000 in num_items
    return (
        <div className="collection-stats">
            <div className="iconochive-collection topinblock hidden-lists" aria-hidden="true"></div>
            <span className="sr-only">collection</span>
            <div className="num-items topinblock">
                000 <div className="micro-label">ITEMS</div>
            </div>
            <div className="num-items hidden-tiles">
                {Util.number_format(member.downloads)}
                <div className="micro-label">VIEWS</div>
            </div>
        </div>
    );
  }

  static div_statbar(member) { // <div class=statbar>
      const nFavorites = member.collection ? member.collection.filter(e => e.startsWith('fav-')).length : undefined;
      const iconnameClass = "iconochive-"+Util.mediatype_canonical(member.mediatype);
      return (
      <div className="statbar ">
          <div className="mt-icon C C5">
              <span className={iconnameClass} aria-hidden="true"></span><span className="sr-only">{name}</span></div>
          <h6 className="stat ">
              <span className="iconochive-eye" aria-hidden="true"></span><span className="sr-only">eye</span>
              <nobr>{Util.number_format(member.downloads)}</nobr>
          </h6>

          { typeof nFavorites === "undefined" ? undefined :
              <h6 className="stat">
              <span className="iconochive-favorite" aria-hidden="true"></span><span
              className="sr-only">favorite</span> {nFavorites} </h6>
          }
          <h6 className="stat">
              <span className="iconochive-comment" aria-hidden="true"></span><span className="sr-only">comment</span> {member.num_reviews || "0"}
          </h6>
      </div>
    )
  }

}
