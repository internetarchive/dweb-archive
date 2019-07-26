var Nav = require('./Nav').default;
var gatewayServer = require('@internetarchive/dweb-archivecontroller/Util')["gatewayServer"]; // Needed by archive.html
const {loadImg} = require('./ReactSupport')
window.DwebArchive = { Nav, gatewayServer, loadImg }; // gatewayServer is for archive.html
window.Nav = Nav; // So HTML can find it
