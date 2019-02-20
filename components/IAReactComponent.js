const debug = require('debug')('dweb-archive:ConfigDetailsComponent');

export default class IAReactComponent {
    // This - for now - is copied from iaux.IAReactComponent
    // Both this version, used with ReactFake and iaux.IAReactComponent used with React should work the same. (e.g. ParentTileImg works with both)
    constructor(props) {
        this.props = props;
        this._isMounted = false;
        this.state = {};
        this.load = (el) => this.loadcallable.call(this, el);  // If use ref=this.load then will call loadcallable with this set to the component and parameter of the element
    }
    setState(res) {
        //Make sense in Real-React where its a subclass, but not here
        //if (this._isMounted) {
        //    super.setState(res);
        //} else {
            Object.keys(res).forEach(k => this.state[k] = res[k]);
            // renderFakeElement is set in ReactFake to the element created, so it can be removed from React and then updated
            // it causes the item to be rerendered when setState is called e.g. after data is retrieved
            //if (typeof DwebArchive !== "undefined" && typeof this.renderFakeElement !== "undefined") { DwebArchive.ReactFake.renderRealReact(this, this.renderFakeElement.parentNode);  }
        //}
    }
    loadcallable(el) {
        debug("loadcallable needs defining if using ref=this.load");
    }
    componentDidMount() { this._isMounted = true; } // Unclear if used
}
