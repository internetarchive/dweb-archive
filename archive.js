// React is not used, we just use ReactFake
//var React = require('react');
//var ReactDOM = require('react-dom');
var Nav = require('./Nav').default;
var ReactFake = require('./ReactFake').default;
var gatewayServer = require('@internetarchive/dweb-archivecontroller/Util')["gatewayServer"]; // Needed by archive.html
const {loadImg} = require('./ReactSupport')
window.DwebArchive = { Nav, ReactFake, gatewayServer, loadImg }; // gatewayServer is for archive.html
window.Nav = Nav; // So HTML can find it
