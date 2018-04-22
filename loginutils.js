/*
    A set of common scripts for use in Dweb code to add key management and login functionality
    See example_versions.html for some usage and example_keys.html for instructions.

    Requires Dweb to point to top level (e.g. by loading src="dweb_bundled.js"

    keychains_ul should be something like:
    <ul id="keychains_ul"><li class='template vertical_li' onclick='keychain_click(this);'><span name='name'>PLACEHOLDER</span></li></ul>

    Needs a login and registration HTML

    Naming conventions:


 */

// Array of images can use
const icon_images = {   //!SEE-OTHER-KC-CLASSES
    acl: "noun_1093404_cc.png",
    kp: "noun_1146472_cc.png",
    "tok": "noun_708669_cc.png",
    "vl": "log.gif",    // TODO replace by better icon
    "locked": "noun_1093404_cc.png",
    "unlocked": "noun_1093404_cc_unlocked.png",
}; /* If change here - see also Keys on KeyChain code below*/

function logout_click() {
    /* Logout button clicked  - logged out*/
    DwebObjects.KeyChain.logout();         // Empty keychains
    deletechildren("keychains_ul");    // Delete any visible children
    hide('logout');                 // Nothing remains to logout so hide button
}

async function p_login(dict) {
    /* common routine to login someone by name and passphrase, and display in KeyChains list - note
    :param dict: {name: passprase: } or name of form containing it.
    :resolves to: undefined
     */
    // concatenate them so that a common passphrase isn't sufficient to guess an id.
    if (typeof(dict) === "string") dict = form2dict(dict);
    try {
        let passphrase = dict.name + "/" + dict.passphrase;
        let kc = await DwebObjects.KeyChain.p_new({name: dict.name}, {passphrase: passphrase}, verbose);
        addtemplatedchild("keychains_ul", {}, kc);      // returns el, but unused
        show('logout');                             // And show the logout button
    } catch(err) {
        console.log("Unable to _login",err);
        alert(err);
    }
}

async function registrationsubmit() {
    /* User has filled in and submitted the registration button */
    if (verbose) console.group("p_registrationsubmit ---");
    hide('registrationform');                                // Hide after submission
    await p_login("registrationform");         // { name, passphrase }
    if (verbose) console.groupEnd("p_registrationsubmit ---");
}

async function loginformsubmit() {
    /* Login button clicked - User has logged in */
    // At the moment this is identical behavior to p_registrationsubmit, but that could change
    //TODO - check if user already exists, require "registration if not
    if (verbose) console.group("loginformsubmit ---");
    hide('loginform');                           // Hide after submission
    await p_login("loginform");    // { name, passphrase }
    if (verbose) console.groupEnd("loginformsubmit -GROUP--");
}

function _showkeyorlock(el, obj) {
    // Utility function to add new or existing element to Key List
    addtemplatedchild(el, {}, obj, {objsym: icon_images[obj.table === "sd" && obj.token ? "tok" : obj.table ] });
}

function keychain_click(el) {
    /* Click on a KeyChain i.e. on a login - display list of Keys and Locks for that login */
    let kc = el.source;                                         // Find KeyChain clicked on
    show('keychain');                                               // Show the div 'keys' for showing keylist
    let el_keychain_header = replacetexts("keychain_header", kc);  // Set name fields etc in keylistdiv, sets source - dont set in keychain as will get list wrong
    deletechildren("keychain_ul");                               // Delete any locks or eys currently displayed
    kc.addEventListener("insert", (event) => {                  // Setup a listener that will trigger when anything added to the list and update HTML
        if (verbose) console.log("keychain.eventlistener",event);
        let sig = event.detail;
        if (DwebObjects.utils.intersects(kc._publicurls, el_keychain_header.source._publicurls))   // Check its still this KeyChain being displayed in keylist
            sig.p_fetchdata({verbose})                            // Get the data from a sig, its not done automatically as in other cases could be large
                .then((obj) => _showkeyorlock("keychain_ul", obj))             // Show on the list
    });
    kc.p_list_then_elements({verbose, ignoreerrors: true})                            // Retrieve the keys for the keylist - ignore any cant decrypt
        .then(() => kc._keys.map((key)=> _showkeyorlock("keychain_ul", key)));  // And add to the HTML
}
async function kcitem_click(el) { //!SEE-OTHER-KC-CLASSES
    // Clicked on a key or a lock, determine which and forward
    el = elementFrom(el);
    let obj = el.source;
    if (obj instanceof DwebObjects.AccessControlList)
        await p_lock_click(el);
    else if (obj instanceof DwebObjects.KeyPair)
        key_click(el);
    else if (obj instanceof DwebObjects.VersionList)
        await p_versionlist_click(el);
    else if ((obj instanceof DwebObjects.SmartDict) && obj.token)  // Its a token - like a key
        token_click(el);
     else
        throw new errors.ToBeImplementedError(`kcitem_click doesnt support ${obj.constructor.name}`)
}

//!SEE-OTHER-KC-CLASSES

// Clicked on a key, display a prompt to copy it for sharing
function locklink_click(el) {
    window.prompt("Copy to clipboard for locking (Ctrl-C + OK)", elementFrom(el).source._urls);
}
function key_click(el) {
    window.prompt("Copy to clipboard for sharing (Ctrl-C + OK)", elementFrom(el).source._publicurls);
}
function token_click(el) {
    window.prompt("Copy to clipboard for sharing (Ctrl-C + OK)", elementFrom(el).source.viewer);
}
async function p_versionlist_click(el) {
    // If there is a vl_target element then use it - e.g. for editing a VersionList, otherwise offer dialog to copy the URL
    let target = elementFrom("vl_target");
    if (target) {
        await p_vl_target_display(target, elementFrom(el).source);    // Application dependent
    } else {
        window.prompt("Copy to clipboard for sharing (Ctrl-C + OK)", elementFrom(el).source._urls);  // In some cases should load form
    }
}

async function keynew_click() {
    if (verbose) console.group("keynew_click ---");
    hide('keynew_form');
    let dict = form2dict("keynew_form"); //name
    let keychain = document.getElementById('keychain_header').source;   // Keychain of parent of this dialog
    let key = new DwebObjects.KeyPair({name: dict.name, key: {keygen: true}, _acl: keychain}, verbose ); // Doesnt store
    _showkeyorlock("keychain_ul", key);   // Put in UI, as listmonitor response will be deduplicated.
    await keychain.p_push(key, verbose);    // Will store on the way
    if (verbose) console.groupEnd("keynew_click ---");
}

async function locknew_click() {
    if (verbose) console.group("locknew_click ---");
    hide('locknew_form');
    let dict = form2dict("locknew_form"); //name
    let keychain = document.getElementById('keychain_header').source;  // The KeyChain being added to.
    let res = await DwebObjects.AccessControlList.p_new({name: dict.name, _acl: keychain}, true, {keygen: true}, verbose, null, keychain )    //(data, master, key, verbose, options, kc)
        .then((acl) => _showkeyorlock("keychain_ul", acl)); // Put in UI, as listmonitor return rejected as duplicate
    if (verbose) console.groupEnd("locknew_click ---");
    return res;
}

async function p_lock_click(el) {
    if (verbose) console.group("p_lock_click ---");
    let acl = el.source;                                    // The ACL clicked on
    show('lock_div');                                     // Show the HTML with a list of tokens in ACL
    let el_lockheader = replacetexts("lock_header", acl);     // Set name fields etc in keylistdiv, sets source //TODO-HTMLUTILS replacetexts -> createElement
    deletechildren("lock_ul");                               // Remove any existing HTML children
    try {
        let toks = await acl.p_tokens();                                       // Retrieve the keys for the keylist
        toks.map((tok) => _showkeyorlock("lock_ul", tok));   // And add to the HTML
        acl.addEventListener("insert", (event) => {                  // Setup a listener that will trigger when anything added to the list and update HTML
            if (verbose) console.log("lock.eventlistener",event);
            let sig = event.detail;
            if (DwebObjects.utils.intersects(acl._publicurls, el_lockheader.source._publicurls))  // Check its still this ACL being displayed in keylist
                sig.p_fetchdata({verbose})                    // Get the data from a sig, its not done automatically as in other cases could be large
                    .then((tok) => _showkeyorlock("lock_ul", tok))           // Show on the list
        });
    } catch(err) {
        console.log("p_lock_click: failed",err.message);
        throw err;
    }
    if (verbose) console.groupEnd("p_lock_click ---");
}

async function tokennew_click() { //Called by "Add" button on new token dialog
    //TODO this allows duplicates, shouldnt add if viewer matches
    if (verbose) console.group("tokennew_click ---");
    hide('tokennew_form');
    let dict = form2dict("tokennew_form"); //url
    let acl = document.getElementById('lock_header').source;
    let tok = await acl.p_add_acle(await DwebTransports.p_urlsFrom(dict.urls), {name: dict["name"]}, verbose);
    _showkeyorlock("lock_ul", tok) // Push to visual list, as listmonitor will be a duplicate
    if (verbose) console.groupEnd("tokennew_click ---");
}


