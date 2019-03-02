const debug = require('debug')('dweb-archive:ConfigDetailsComponent');

export default class IAReactComponent {
    // This - for now - is copied from iaux.IAReactComponent
    // Both this version, used with ReactFake and iaux.IAReactComponent used with React should work the same. (e.g. ParentTileImg works with both)
    constructor(props) {
        // Let the super class store the props, you can manipulate them in subclasses
        this.props = props;
        // In both React & ReactFake, _isMounted is set to true on loading
        this._isMounted = false;
        // Initialize the state, again the subclasses can add to it
        this.state = {};
        // In both React & ReactFake If you give a HTML tag ref={this.load} then it will call loadcallable with 'this' set to the component and pass the element as the only parameter
        this.load = (el) => this.loadcallable.call(this, el);
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
