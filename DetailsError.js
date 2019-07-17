import React from './ReactFake';
import Details from './Details'
import {NavWrapWrapper} from './components/NavWrapWrapper';
import RelatedItemsWrapper from "./components/RelatedItemsWrapper";

export default class DetailsError extends Details { //TODO-THEATRES use message theatre for this
    constructor({itemid=undefined, metaapi=undefined, message="Undefined error message"}={}) {
        super({ itemid, metaapi});
        this.message = message;
    }
    render(res) {
        super.render(res)
    }
    // See almost identical DUPLICATEDCODE#004
    wrap() {
        /* Wrap the content up
        context: body wrap(
        content: (on image)  wrap( TODO-DONATEBANNER | nav-wrap | maincontent | theatre-ia-wrap | item-details-about | TODO-ACTIONBUTTONS | RelatedItems  | TODO-ANALYTICS )
        returns: elements tree suitable for adding into another render
         */
        return (
          <div id="wrap" itemscope itemtype={this.itemtype}>
              {/* Missing donate-banner and scripts & css before it */}
              <NavWrapWrapper item={this} canSave={false}/>
              {/*--Begin page content --*/}
              <div class="container container-ia">
                  <a name="maincontent" id="maincontent"></a>
              </div>{/*--//.container-ia--*/}
              {/*This is the main-content*/}
              <div className="dweb-message">
                  {this.message}
              </div>
          </div>
        );
    }
}
