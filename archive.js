var Nav = require('./Nav').default;
var gatewayServer = require('@internetarchive/dweb-archivecontroller/Util')["gatewayServer"]; // Needed by archive.html
const { getImageURI } = require('./ReactSupport')
var DwebTransports = require('@internetarchive/dweb-transports'); //Also sets window.DwebTransports
window.DwebArchive = { Nav, gatewayServer, getImageURI }; // gatewayServer is for archive.html
window.Nav = Nav; // So HTML can find it
