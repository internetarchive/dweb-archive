// This is an intermediary step because can't pass FakeReact children to React Components,
// It should track iaux/ModalGo.jsx
//const debug = require('debug')('dweb-archive:ModalGo');
import React from '../ReactFake';
import IAFakeReactComponent from './IAFakeReactComponent'; // Encapsulates differences between dweb-archive/ReactFake and iaux/React
import {ObjectFilter} from '@internetarchive/dweb-archivecontroller/Util.js';

/* AnchorModalGo and ButtonModalGo wrap the AJS.modal_go call in archive.js to allow it to work with react.
 */

class _ModalGo extends IAFakeReactComponent {
    constructor(props) {
        super(props); // opts, remaining props go to anchor, in particular href
        this.state.linkProps = ObjectFilter(this.props, (k, unused_v) => !["opts", "children"].includes(k)); // pass on any other props
    }

    clickCallable(ev) {
        // ev.currentTarget is the HTML Element on which the onClick sits
        return AJS.modal_go(ev.currentTarget, this.props.opts)
    }
}
class AnchorModalGo extends _ModalGo {
    constructor(props) { super(props) }; // opts, remaining props go to anchor, in particular href

    render() { return(
        <a {...this.state.linkProps} onClick={this.onClick}>{this.props.children}</a>
    ) }
}
class ButtonModalGo extends _ModalGo {
    constructor(props) { super(props) }; // opts, remaining props go to anchor, in particular href

    render() { return(
        <button {...this.state.linkProps} onClick={this.onClick}>{this.props.children}</button>
    )}
}
export {AnchorModalGo, ButtonModalGo}

