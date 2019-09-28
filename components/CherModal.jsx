import React from 'react';
import {IAReactComponent, I18nSpan, I18nIcon} from '@internetarchive/ia-components/dweb-index';

/**
 * Button to enable sharing to one url
 *
 * <CherModalButton
 *    url=URL to open when clicked - typically complex sharing URL on service
 *    className=STRING e.g. iconochive-twitter - tells it what to use for icon
 *    title=STRING e.g. "Share to Reddit"
 * />
 *
 * Behavior - when clicks access sharing on other service
 */

class CherModalButton extends IAReactComponent {

  //TODO tooltips aren't loading, not sure why there is a tooltip function in archive.html but calling that on this
  //TODO doesnt seem to work. Investigation required and then TODO-I8N
  render() {
    return (
      <a
        href={this.props.url}
        target="_blank">
        {/* The className is where the icon comes from */}
        <div className={"sharee "+ this.props.className} data-toggle="tooltip" data-placement="bottom" title="" data-original-title={this.props.title}></div>
      </a>
    );
  }
}

/**
 * Button for sharing on multiple services,
 * Consumer should omit if disconnected
 *
 * <CherModal
 *   identifier=IDENTIFIER
 *   title=STRING
 *   creator=[STRING]
 *   mediatype="texts|image..."
 * />
 *
 * Behavior - when clicks, displays modal interaction for sharing
 */
class CherModal extends IAReactComponent {
  constructor(props) {
    super(props); // identifier, creator, mediatype, title (not translatable)
  }


  render() {
    //Common text across Image and Text and possibly other subclasses
    const detailsURL = `https://archive.org/details/${this.props.identifier}`; // Note this should remain as pointing at details/identifier since its only used in sharing - FB, Twitter etc
    const sharingText =   `${this.props.title} : ${(this.props.creator || []).join(', ')}`; //String used
    const sharingTextUriEncoded = encodeURIComponent(sharingText);
    // Note this shortEmbedURL is just displayed in a form used to explain how to embed, its not actually called from dweb code.
    const shortEmbedURL = `https://archive.org/stream/${this.props.identifier}?ui=embed`;    //Note on archive.org/details this is different from iframeURL and not clear if that is intentional
    const helpURL = `https://archive.org/help/${this.props.mediatype}.php?identifier=${this.props.identifier}`;
    return (
      <div id="cher-modal" className="modal fade" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{padding:"10px"}}>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <I18nIcon className="iconochive-remove-circle" en="remove-circle"/>
              </button>
              <h3 className="modal-title"><I18nSpan en="Share or Embed This"/> <I18nSpan en={(this.props.mediatype === "collection") ? "Collection" : "Item"}/></h3>
            </div>{/*--/.modal-header--*/}
            <div id="cher-body">
              <div style={{textAlign: "center", margin: "50px auto"}}>
                <div className="topinblock">
                  <div id="sharer">
                    <CherModalButton  title="Share to Twitter" className="iconochive-twitter"
                      url={`https://twitter.com/intent/tweet?url=${detailsURL}&amp;via=internetarchive&amp;text=${sharingTextUriEncoded}+%3A+Free+Download+%26+Streaming+%3A+Internet+Archive`}/>
                    <CherModalButton title="Share to Facebook" className="iconochive-facebook"
                      url={`https://www.facebook.com/sharer/sharer.php?u=${detailsURL}`} />
                    <CherModalButton title="Share to Google+" className="iconochive-googleplus"
                      url={`https://plus.google.com/share?url=${detailsURL}`}/>
                    <CherModalButton title="Share to Reddit" className="iconochive-reddit"
                      url={`http://www.reddit.com/submit?url=${detailsURL}&amp;title=${sharingTextUriEncoded}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}/>
                    <CherModalButton title="Share to Tumblr" className="iconochive-tumbl"
                      url={`https://www.tumblr.com/share/video?embed=%3Ciframe+width%3D%22640%22+height%3D%22480%22+frameborder%3D%220%22+allowfullscreen+src%3D%22https%3A%2F%2Farchive.org%2Fembed%2F%22+webkitallowfullscreen%3D%22true%22+mozallowfullscreen%3D%22true%22%26gt%3B%26lt%3B%2Fiframe%3E&;name=${this.props.identifier}+%3A+${(this.props.creator || []).join(', ')}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}/>
                    <CherModalButton title="Share to Pinterest" className="iconochive-pinterest"
                      url={`http://www.pinterest.com/pin/create/button/?url=${detailsURL}&amp;description=${sharingTextUriEncoded}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`} />
                    <CherModalButton title="Share to Popcorn Maker" className="iconochive-popcorn"
                      url={`https://archive.org/pop/editor.html?initialMedia=${detailsURL}`} />
                    <CherModalButton title="Share via email " className="iconochive-email"
                      url={`mailto:?body=${detailsURL}&amp;subject=${sharingText} : Free Download &amp; Streaming : Internet Archive`}/>
                  </div>
                  <br clear="all" className="clearfix"/>
                </div>
              </div>
              { (!["image", "audio", "movies"].includes(this.props.mediatype)) ? null :
                <>
                  <div>
                    <form className="form" role="form">
                      <div className="form-group">
                        <label><I18nSpan en="EMBED"/></label>
                        <textarea id="embedcodehere" className="form-control textarea-invert-readonly"
                                      readOnly="readonly" value={`<iframe 
                                      src=${shortEmbedURL}
                                      width="480" height="430" frameborder="0"
                                      webkitallowfullscreen="true" mozallowfullscreen="true"
                                      allowfullscreen></iframe>`}/>
                      </div>
                    </form>
                  </div>
                  {/* Wordpress embed */}
                  <div>
                    <form className="form" role="form">
                      <div className="form-group">
                        <label><I18nSpan en="EMBED (for wordpress.com hosted blogs and archive.org item &lt;description&gt; tags)"/></label>
                        <textarea id="embedcodehereWP" className="form-control textarea-invert-readonly"
                                  readOnly="readonly" value={`[archiveorg ${this.props.identifier} width=480 height=640 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`}/>
                      </div>
                    </form>
                  </div>
                  <div>
                    <I18nSpan en="Want more?"/>
                    <a href={helpURL}><I18nSpan en="Advanced embedding details, examples, and help"/></a>!
                  </div>
                </>
              }
            </div>{/*--/#cher-body--*/}
          </div>{/*--/.modal-content--*/}
        </div>{/*--/.modal-dialog--*/}
      </div>
  ); }
}

export { CherModal };
// File regular review 2019-sept-12


