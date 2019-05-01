/* This is a transition file, bridging between the model of everything subclassing Details, while moving to componentization */
import AnchorDetails from "./components/AnchorDetailsFake";



import LocalWelcomeComponent from "./LocalComponent";
const ACUtil = require("@internetarchive/dweb-archivecontroller/Util.js");
import React from "./ReactFake";
import TileGrid from "./components/tiles/TileGrid";

export default class Local extends Collection {

    banner() {
        /* TODO-UXLOCAL add control buttons */
        return <LocalWelcomeComponent
                    title={"Resources"}
                    byline={"downloaded to "+ ACUtil.gatewayServer()}
                    description={""}
                />
    }
    wrap() {
        /* Wrap the content up: wrap ( TODO-aside; navwrap; #maincontent; welcome; cher-modal; container-tabby-collection-row (TODO-columns-facets; columns-items) (tabby-about; tabby-form)
        returns:      elements tree suitable for adding into another render called a subclass of Details
         */

        return (
            <div id="wrap">
                { new Nav().navwrap() }
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

    rowColumnsItems() {
        return ( !(this.members && this.members.length) ? undefined :  /* If no members, probably a query failed so dont display */
            <div class="row">
                <div class="columns-items" style="margin-left: 0px;">
                    <div style="position:relative">
                        <div id="ikind-search" class="ikind in">
                            <TileGrid members={this.members}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
