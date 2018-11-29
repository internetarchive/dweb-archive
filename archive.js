// React is not used, we just use ReactFake
//var React = require('react');
//var ReactDOM = require('react-dom');
var Nav = require('./Nav').default;
var ReactFake = require('./ReactFake').default;
var AICUtil = require('@internetarchive/dweb-archivecontroller/Util'); // Needed by archive.html
window.DwebArchive = { Nav, AICUtil, ReactFake };
window.Nav = Nav; // So HTML can find it
//var Dweb = require('../js/Dweb').default;   //It doesnt look like this is used even in non-service workers
//var DwebTransports = require('./Transports');
//window.DwebTransports = DwebTransports; // So HTML can find it
//Above works
//window.Nav = Nav;
//TODO-REPO look for require Errors, require Domains requre Transports
//TODO-REPO look for DWeb.

function elementFrom(el) { //TODO-ARCHTML redo check if use
    /* Make sure we have an element, if passed a string then find the element with that id.
      el:       Element or string being the id of an element.
      returns:  element.
     */
    return (typeof(el) === "string") ? document.getElementById(el) : el;
}
