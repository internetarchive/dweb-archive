/* This is a transition file, bridging between the model of everything subclassing Details, while moving to componentization */
//const debug = require('debug')('Local');
// Other internetarchive repos
const ACUtil = require("@internetarchive/dweb-archivecontroller/Util.js");
// This repo
import React from "./ReactFake";
import Collection from "./Collection";
import {LocalWelcomeComponent, LocalGridRowComponent} from "./components/mirror/LocalComponent";
import {NavWrap} from '@internetarchive/ia-components/sandbox/details/NavWrap';

export default class Local extends Collection {

    banner() {
        /* TODO-UXLOCAL add control buttons */
        return <LocalWelcomeComponent
                    title="Resources"
                    byline={"downloaded to "+ ACUtil.gatewayServer()}
                    description=""
                />
    }
    wrap() {
        /* Wrap the content up: wrap ( TODO-aside; navwrap; #maincontent; welcome; cher-modal; container-tabby-collection-row (TODO-columns-facets; columns-items) (tabby-about; tabby-form)
        returns:      elements tree suitable for adding into another render called a subclass of Details
         */

        return (
            <div id="wrap">
                <NavWrap item={this}/>
                {/*--Begin page content --*/}
                <div class="container container-ia">
                    <a name="maincontent" id="maincontent"></a>
                </div>
                {this.banner()}
                <div class="container container-ia nopad">
                    <div id="tabby-collection" class="tabby-data in">
                        {this.rowColumnsItems()}
                    </div>
                </div>
            </div>
        );
    }

    rowColumnsItems() { // Subclass version in Collection
        return <LocalGridRowComponent members={this.members} />;
    }
}
