/* This is a transition file, bridging between the model of everything subclassing Details, while moving to componentization */
//const debug = require('debug')('Local');
// Other internetarchive repos
// This repo
import React from "./ReactFake";
import Collection from "./Collection";
import {LocalItem} from "./components/mirror/LocalComponent";
import {AJS_on_dom_loaded} from "./Util";
//SEE-OTHER-ADD-SPECIAL-PAGE in dweb-mirror dweb-archive dweb-archivecontroller

export default class Local extends Collection {

  render(destn) { // See other almost DUPLICATEDCODE#002
    var els = ( // Wrap ReactComponent in FakeReact
      <div id="wrap">
        <LocalItem item={this}/>
      </div>
    );
    $('body').addClass('bgEEE'); //TODO remove jquery dependency
    React.domrender(els, destn);  //Put the els into the page
    this.archive_setup_push(); // Subclassed function to setup stuff for after loading.
    AJS_on_dom_loaded(); // Runs code pushed archive_setup - needed for image if "super" this, put it after superclasses
  }
}
