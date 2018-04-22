/* Uncomment one of the next lines to select which transport to use */

// Either these lines for direct access
const Transports = require('dweb-transports');
var Domain = require('dweb-objects/Domain'); // Required in non service worker case to ensure name resolution

//Or uncomment this for access via Service Worker
//const Transports = require('./TransportsProxy');

exports = module.exports = Transports;
