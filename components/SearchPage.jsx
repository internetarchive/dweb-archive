import react from 'react';
import IAReactComponent from './IAReactComponent.js';
import {AnchorModalGo, AnchorDetails, ImageDweb, Tabby} from '@internetarchive/ia-components/dweb-index.js';

/**
 * A collection of components used on the related Search, Collection and Account pages
 */
class CollectionBanner extends IAReactComponent {
  /**
   * Typical usage (assuming "this" is an ARCHIVEFILE
   * <CollectionBanner
   *  identifier=this.itemid
   *  imgsrc = this.thumbnailFile()
   *  description =STRING   Note this should have been preprocessed to concatenate any arrays, sanitize the HTML and replace any relative URI's which wont work.
   *    !this.metadata.description ? undefined : this.preprocessDescription(this.metadata.description).replace(/(..\/)+..\//g, "../"); // Contains HTML (supposedly safe) inserted via innerHTML thing
   *  creator=this.metadata.creator title=this.metadata.title   From the metadata API
   *  />
   */
    //TODO-DETAILS on prelinger, banner description is getting truncated.
  render () {
        //TODO-DETAILS probably merge this with Banner on Search page and trigger based on presence of "metadata.identifier" (which is missing for Searches.)
        //console.assert(!this.isDark && this.metadata) // Will be metadata.mediatype=collection
        const metadata = this.metadata;
        // Preprocess creator because JSX doesnt have a good equivalent of join()
        // I'm not sure of an example case where the creator matches the title like this, but suspect there is one :-)
        const creator = (this.props.creator  &&  (this.props.creator.join(', ') != this.props.title) ? this.props.creator.join(', ') : '');
        return (
            <div className="welcome container container-ia width-max" style={{'backgroundColor':'white'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-11 col-sm-10 welcome-left">
                            <div id="file-dropper-wrap">
                                <div id="file-dropper"></div>
                                <ImageDweb id="file-dropper-img" className="img-responsive" style={{'maxWidth':"350px", margin:'0 10px 5px 0'}} source={this.props.imgsrc}/>
                            </div>
                            <h1>{this.props.title}</h1>
                            <h4>{creator}</h4>
                            <div id="descript" style={{maxHeight:"43px", cursor:'pointer'}} dangerouslySetInnerHTML={{__html: this.props.description}}>
                            </div>
                        </div>
                        <div className="col-xs-1 col-sm-2 welcome-right">
                            <AnchorModalGo className="stealth" opts={{ignore_lnk:1,shown:AJS.embed_codes_adjust}}
                               data-target="#cher-modal"><span className="iconochive-share"  aria-hidden="true"></span><span className="sr-only">share</span><span className="hidden-xs-span"> Share</span></AnchorModalGo><br/>
                            {/*TODO-LOGIN /bookmarks isnt going to work, also not logged in
                            <a className="stealth" href="/bookmarks.php?add_bookmark=1&amp;mediatype=collection&amp;identifier=prelinger&amp;title=Prelinger+Archives" onclick="return AJS.modal_go(this,{favorite:1})"
                               data-target="#confirm-modal"><span className="iconochive-favorite"  aria-hidden="true"></span><span className="sr-only">favorite</span><span className="hidden-xs-span"> Favorite</span></a><br/>
                            */}
                            {/*TODO-LOGIN /editxml isn't going to wrk - we aren't logged in. and its an absolute URL
                            <div id="editlink" style={{display:"none"}}>
                              <a id="edlink" className="stealth" href="/editxml/prelinger"><span className="iconochive-edit"  aria-hidden="true"></span><span className="sr-only">edit</span><span
                                className="hidden-xs-span"> Edit</span></a><br/>
                                        <a className="stealth" href="//catalogd.archive.org/history/prelinger"><span className="iconochive-time"  aria-hidden="true"></span><span className="sr-only">time</span><span
                                className="hidden-xs-span"> History</span></a><br/>
                            </div> */}
                        </div>
                    </div>
                    <div className="tabbys">
                        <Tabby id="about" identifier={this.props.identifier} text="ABOUT"/>
                        <Tabby id="collection" identifier={this.props.identifier} text="COLLECTION" default/>
                        <Tabby id="forum" identifier={this.props.identifier} text="FORUM"/>
                        <div className="clearfix"> </div>
                    </div>
                {/*container*/}</div>
            {/*welcome*/}</div>
        )};
}
class CollectionTabby extends IAReactComponent {
  /**
   * Set of Tabs associated with Collection
   *
   * <CollectionTabby
   *  identifier = IDENTIFIER
   *  description = SANITIZED HTML
   *  righs = SANITIZED HTML
   *
   */


  render(){
    return (
      <div className="container container-ia nopad">
        <div id="tabby-about" className="tabby-data hidden row">
            <div className="row">
                <div className="col-sm-7" style={{marginBottom: "50px"}}>
                    <div className="about-box">
                        <div className="micro-label">DESCRIPTION</div>
                        <div  dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                        <br className="clearfix" clear="all"/>
                    </div>

                    <div className="about-box">
                        <div className="micro-label">RIGHTS</div>
                        <div  dangerouslySetInnerHTML={{__html: this.props.rights}}></div>
                    </div>

                    <div className="about-box">
                        <div className="micro-label">ACTIVITY</div>
                        <div className="activity-box">
                            <h2 style={{fontWeight: 100}}>
                                <AnchorDetails className="stealth" identifier={this.props.identifier} sort="-reviewdate"><span
                                className="iconochive-comment" aria-hidden="true"></span><span
                                className="sr-only">comment</span> <span
                                id="activity-reviewsN"></span></AnchorDetails>
                            </h2>
                        </div>
                        <div className="activity-box">
                            <h2 style={{fontWeight:100}}>
                                <a className="stealth" href="#forum" onClick={$('#tabby-forum-finder').click}><span className="iconochive-comments"  aria-hidden="true"></span><span className="sr-only">comments</span> <span
                                        id="activity-forumN"></span></a>
                            </h2>
                        </div>
                        <br className="clearfix" clear="all"/>
                    </div>
                </div>{/* /.col-sm-7 */}
                <div className="col-sm-5" style={{marginBottom:"50px"}}>
                    {/* TODO-UPLOADER not supported - need way to turn email into userid - see Missing-API doc I think its there
                    // See https://webarchive.jira.com/browse/PBOX-3047?focusedCommentId=109572#comment-109572 for indefinately postponed changes to uploader field TODO-@IA
                    <div className="about-box" style="background-color:rgb(251,242,221); margin-bottom:0;">
                        <div className="topinblock"
                             style="text-align:center; border-right:1px solid #ccc; padding:0 25px;margin-right:25px;">
                            <div className="micro-label" style="margin-bottom:2px">Created on</div>
                            <div style="font-size:18px;line-height:1.0;">
                                June 4<br> 2005            </div>
                        </div><div className="topinblock">
                        {_listperson(metaFromUpdater({email: metadata.uploader}))}
                        </div>
                    </div>
                    */}
                    {/* TODO-UPLOADER not supported - need way to turn email into userid - see Missing-API doc I think its there
                        if (metadata.updater.length) {
                            <div className="about-box" style="margin-top:0">
                                <div className="micro-label">ADDITIONAL CONTRIBUTORS</div>
                                {metadata.updater.map((uu) => [ ( <div className="hr"></div> ), _listperson({uploader: metaFromUpdater(u)}) ])}
                            </div>
                        }
                    */}
                    {/*TODO-GRAFS: not supported yet
                    <div className="grafs about-box"><div className="micro-label">VIEWS</div><h1>172,141,775</h1><div id="grafs1" className="grafs-content" data-id="prelinger"></div></div>
                    {/*TODO-GRAFS:  <div className="grafs about-box"><div className="micro-label">ITEMS</div><h1>6,911</h1><div id="grafs2" className="grafs-content" data-id="prelinger"></div></div>
                    <section
                            className="grafs about-box js-top-regions-table"
                            data-caption="Top Regions (Last 30 Days) – Beta"
                            data-caption-className="micro-label"
                            data-identifier=prelinger
                            data-days="30"
                            data-limit="10"
                    >
                        <h3 className="micro-label">TOP REGIONS (LAST 30 DAYS) – BETA</h3>
                        <p className="grafs-content js-top-regions-message">(data not available)</p>
                    </section> */}

                    {/*TODO-RELATED-COLLECTIONS not supported yet and not supported on e.g. archive.org/details/prelinger anyway
                    <div className="about-box">
                        <div className="micro-label">RELATED COLLECTIONS</div>
                        <div style="margin-top:10px;">
                            <div className="topinblock">
                                <span className="iconochive-collection"  aria-hidden="true"></span><span className="sr-only">collection</span>            </div><div className="topinblock">
                            <b><a className="stealth" href="/details/ephemera">Ephemeral Films</a></b><br/>
                            9,435 items
                        </div>
                        </div> This div repeats
                    </div> */}
                </div>
            </div>
        </div>
        <div id="tabby-forum" className="tabby-data hidden row">{/*TODO-TABBY forum*/}Forum not yet supported on DWeb - heading to the legacy web...</div>
    </div>
  )}
}
export { CollectionBanner, CollectionTabby }