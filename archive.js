var Nav = require('./Nav').default;
var gatewayServer = require('@internetarchive/dweb-archivecontroller/Util')["gatewayServer"]; // Needed by archive.html
const { getImageURI } = require('./ReactSupport')
window.DwebArchive = { Nav, gatewayServer, getImageURI }; // gatewayServer is for archive.html
window.Nav = Nav; // So HTML can find it
