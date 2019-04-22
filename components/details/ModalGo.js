//const debug = require('debug')('dweb-archive:DetailsActionButtons');
import React from 'react';
import IAReactComponent from '../IAReactComponent'; // Encapsulates differences between dweb-archive/ReactFake and iaux/React
import DetailsFlags from './DetailsFlags';

/* DetailsActionButtons are a group of buttons, usually shown on the right, that include bookmarking, sharing and flagging.
    Its currently used in dweb-archive/Details.js
 */

// Utility functions, I (Mitra) like to put these on Object, but maybe better here.
function ObjectFromEntries(arr) { arr.reduce((res,kv)=>(res[kv[0]]=kv[1],res),{});} // [[ k0, v0],[k1,v1] => {k0:v0, k1:v1}
function ObjectFilter(obj, f) { ObjectFromEntries( Object.entries(obj).filter(kv=>f(kv[0], kv[1]))); }

class _ModalGo extends IAReactComponent {
    constructor(props) {
        super(props) // opts, remaining props go to anchor, in particular href
        this.state.linkProps = ObjectFilter(this.props, (k, v) => !["opts", "children"].includes(k)); // pass on any other props
    }

    clickCallable(ev) {
        // ev.currentTarget is the HTML Element on which the onClick sits
        return AJS.model_go(ev.currentTarget, this.props.opts)
    }
}
class AnchorModalGo extends _ModalGo {
    constructor(props) { super(props) }; // opts, remaining props go to anchor, in particular href

    render() { return(
        const anchorProps = ObjectFilter(this.props, (k,v)=>!["opts","children"].includes(k)); // pass on any other props
        <a {...this.state.linkProps} onClick={this.onClick}>{this.props.children}</a>
    )}
}
class ButtonModalGo extends _ModalGo {
    constructor(props) { super(props) }; // opts, remaining props go to anchor, in particular href

    render() { return(
        <button {...this.state.linkProps} onClick={this.onClick}>{this.props.children}</button>
    )}
}

export default class DetailsActionButtons extends IAReactComponent {

    constructor(props)
    {
        super(props) //identifier, title
    }
    render() {
        const bookmarksAddURL = `https://archive.org/bookmarks.php?add_bookmark=1&amp;mediatype=image&amp;identifier=${this.props.identifier}&amp;title=${this.props.title}`; //TODO find way to submit distributed
        return (
            <div className="action-buttons">
                <div className="topinblock">
                    <AnchorModalGo className="button " opts={{favorite:1}}  href={bookmarksAddURL} id="favorite-button" aria-haspopup="true"
                       data-target="#confirm-modal" data-toggle="tooltip"
                       data-container="body" data-placement="bottom" title="Favorite this item">
                        <span class="iconochive-favorite" aria-hidden="true"></span><span class="sr-only">favorite</span>
                    </AnchorModalGo>
                </div>
                <div className="topinblock">
                    <ButtonModalGo id="share-button" className="button" opts={{ignore_lnk:1,shown:AJS.embed_codes_adjust}}
                            type="button" aria-haspopup="true"
                            data-target="#cher-modal" data-toggle="tooltip" data-container="body" data-placement="bottom"
                            title="Share this item">
                        <span className="iconochive-share" aria-hidden="true"></span><span class="sr-only">share</span></ButtonModalGo>
                </div>
                <DetailsFlags/>
            </div>
        )
    }
}

