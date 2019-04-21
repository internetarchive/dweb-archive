//const debug = require('debug')('dweb-archive:DetailsActionButtons');
import React from 'react';
import IAReactComponent from '../IAReactComponent'; // Encapsulates differences between dweb-archive/ReactFake and iaux/React
import DetailsFlags from './DetailsFlags';

/* DetailsActionButtons are a group of buttons, usually shown on the right, that include bookmarking, sharing and flagging.
    Its currently used in dweb-archive/Details.js
 */

class DetailsFlags extends IAReactComponent {

    constructor(props)
    {
        super(props) //identifier, title
    }
    render() {
        const bookmarksAddURL = `https://archive.org/bookmarks.php?add_bookmark=1&amp;mediatype=image&amp;identifier=${this.props.identifier}&amp;title=${this.props.title}`; //TODO find way to submit distributed
        return (
            <div class="action-buttons">
                <div class="topinblock">
                    <a class="button " href={bookmarksAddURL} id="favorite-button" aria-haspopup="true"
                       onclick="return AJS.modal_go(this,{{favorite:1}})" data-target="#confirm-modal" data-toggle="tooltip"
                       data-container="body" data-placement="bottom" title="Favorite this item">
                        <span class="iconochive-favorite" aria-hidden="true"></span><span class="sr-only">favorite</span>
                    </a>
                </div>
                <div class="topinblock">
                    <button id="share-button" class="button" type="button" aria-haspopup="true"
                            onclick="return AJS.modal_go(this,{{ignore_lnk:1,shown:AJS.embed_codes_adjust}})"
                            data-target="#cher-modal" data-toggle="tooltip" data-container="body" data-placement="bottom"
                            title="Share this item">
                        <span class="iconochive-share" aria-hidden="true"></span><span class="sr-only">share</span></button>
                </div>
                <DetailsFlags/>
            </div>{/*--/.action-buttons--*/}
        )
    }
}