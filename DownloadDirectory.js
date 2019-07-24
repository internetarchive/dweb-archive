import React from './ReactFake';
import Details from './Details';
import AnchorDetails from './components/AnchorDetailsFake';
import {NavWrapWrapper} from './components/NavWrapWrapper';
import RelatedItemsWrapper from "./components/RelatedItemsWrapper"; // Have to use the Fake one as long as this is FakeReact

/*
Support directories of files,
See https://github.com/internetarchive/dweb-archive/issues/10 for discussion - this is NOT complete yet, but works enough to use.

TODO needs date in form probably like new Date().toLocaleDateString('en-GB',{day:'numeric', month:'short', year:'numeric',hour:'2-digit',minute:'2-digit'})
 */

export default class DownloadDirectory extends Details {
  //TODO-IAUX good candidate for next component
  //TODO-GREY this needs to set disconnected once its a React Component
    wrap() {
        /* Wrap the content up
        context: body wrap(
        content: (on image)  wrap( TODO-DONATEBANNER | nav-wrap | maincontent | theatre-ia-wrap | item-details-about | TODO-ACTIONBUTTONS | RelatedItems  | TODO-ANALYTICS )
        returns: elements tree suitable for adding into another render
         */
        //TODO-GREY need to hook into disconnected
      const identifier = this.itemid;
      return (
        <div id="wrap" itemscope itemtype={this.itemtype}>
            {/* Missing donate-banner and scripts & css before it */}
            <NavWrapWrapper item={this} canSave={false}/>
            {/*--Begin page content --*/}
            <div class="container container-ia">
                <a name="maincontent" id="maincontent"></a>
            </div>{/*--//.container-ia--*/}
            {/*This is the main-content*/}
            <DownloadDirectoryDiv identifier={this.itemid}
                                  disconnected={false}
                               files={this.files.map(f => { return {name: f.metadata.name, size: f.sizePretty()}})} />
            {(!identifier) ? null :
              <RelatedItemsWrapper identifier={identifier} item={this} noCache={this.noCache} disconnected={false}/> }
            {/* should have: analytics here (look at end of commute.html) - but not on Directory (and maybe some other types ?collection?)*/}
            }
            {/*--wrap--*/}</div>
        );
    }

}
