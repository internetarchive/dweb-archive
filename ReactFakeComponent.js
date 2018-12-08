export default class ReactFakeComponent {
    // This - for now - is copied from iaux.IAReactComponent
    constructor(props) {
        this.props = props;
        this._isMounted = false;
        this.state = {};
    }
    setState(res) {
        console.log("XX --- ReactFakeComponent unexpectedly getting called");
        if (this._isMounted) {
            super.setState(res);
        } else {
            Object.keys(res).forEach(k => this.state[k] = res[k]);
            // renderFakeElement is set in ReactFake to the element created, so it can be removed from React and then updated
            // it causes the item to be rerendered when setState is called e.g. after data is retrieved
            //if (typeof DwebArchive !== "undefined" && typeof this.renderFakeElement !== "undefined") { DwebArchive.ReactFake.renderRealReact(this, this.renderFakeElement.parentNode);  }
        }
    }
    componentDidMount() { this._isMounted = true; } // Unclear if used
}
