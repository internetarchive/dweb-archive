require('babel-core/register')({ presets: ['env', 'react']}); // ES6 JS below!
import React from './ReactFake';
import Search from "./Search";

export default class Collection extends Search {
    constructor(itemid, item) {
        super({
            query:  'collection:'+itemid,
            sort:   '-downloads',   // This will be overridden based on collection_sort_order
            itemid: itemid,
            item:   item,
        });
    }

    banner() {
        const item = this.item;
        //TODO-DETAILS probably move this to the Search class and trigger based on presence of "item" (which is missing for Searches.)
        const creator = (item.metadata.creator  &&  (item.metadata.creator != item.metadata.title) ? item.metadata.creator : '');
        //ARCHIVE-BROWSER note the elements below were converted to HTML 3 times in original version
        //TODO-DETAILS on prelinger, banner description is getting truncated.
        const description = this.preprocessDescription(item.metadata.description); // Contains HTML (supposedly safe) inserted via innerHTML thing
        const thumbnaillinks = item.metadata.thumbnaillinks;
        const imgname = this.itemid + ".PNG";   // Required or rendermedia has difficulty knowing what to render since it doesnt take a mimetype

        return (
            <div className="welcome container container-ia width-max" style={{'backgroundColor':'white'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-11 col-sm-10 welcome-left">
                            <div id="file-dropper-wrap">
                                <div id="file-dropper"></div>
                                <img id="file-dropper-img" className="img-responsive" style={{'maxWidth':"350px", margin:'0 10px 5px 0'}} imgname={imgname} src={thumbnaillinks}/>
                            </div>
                            <h1>{item.metadata.title}</h1>
                            <h4>{creator}</h4>
                            <div id="descript" style={{maxHeight:"43px", cursor:'pointer'}} dangerouslySetInnerHTML={{__html: description}}>
                            </div>
                        </div>
                        <div className="col-xs-1 col-sm-2 welcome-right">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    browserBefore() {
        $('body').addClass('bgEEE');
        // Note the archive_setup.push stuff is subtly different from that for 'search'
        archive_setup.push(function(){
            AJS.lists_v_tiles_setup('collection');
            $('div.ikind').css({visibility:'visible'});
            AJS.popState('');
            AJS.tiler();
            $(window).on('resize  orientationchange', function(evt){
                clearTimeout(AJS.tiles_wrap_throttler)
                AJS.tiles_wrap_throttler = setTimeout(AJS.tiler, 250)
            });
            // register for scroll updates (for infinite search results)
            $(window).scroll(AJS.scrolled);
        });

    }

}
