// React is not used, we just use ReactFake
//var React = require('react');
//var ReactDOM = require('react-dom');
var Nav = require('./Nav').default;
var ReactFake = require('./ReactFake').default;
var gatewayServer = require('@internetarchive/dweb-archivecontroller/Util')["gatewayServer"]; // Needed by archive.html
window.DwebArchive = { Nav, ReactFake, gatewayServer }; // gatewayServer is for archive.html
window.Nav = Nav; // So HTML can find it
