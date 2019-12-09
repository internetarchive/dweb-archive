var Nav = require('./Nav').default;
const { getImageURI } = require('./ReactSupport')
var DwebTransports = require('@internetarchive/dweb-transports'); //Also sets window.DwebTransports
window.DwebArchive = { Nav, getImageURI };
window.Nav = Nav; // So HTML can find it
