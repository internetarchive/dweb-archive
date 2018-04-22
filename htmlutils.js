/*
    This file is a set of utility functions used in the manipulation of HTML pages
    There is nothing specific to Dweb at all here, feel free to copy and modify.
    TODO-REPO find what from here, if anything, used in archive and remove rest
 */


function elementFrom(el) {
    /* Make sure we have an element, if passed a string then find the element with that id.
      el:       Element or string being the id of an element.
      returns:  element.
     */
    return (typeof(el) === "string") ? document.getElementById(el) : el;
}
async function p_resolveobj(url) {
    /*
    Asynchronously find an object
    url:    An object, or a url representing an object, or an array of urls.
    returns: Object
    throws: Error if can't resolve object
    */
    try {
        if (typeof url === 'string')
            url = [ url ];
        if (Array.isArray(url))
            url = await DwebObjects.SmartDict.p_fetch(url, verbose);
        return url;
    } catch(err) {
        console.log("p_resolveobj: Cannot resolve",url);
        throw err;
    }
}

function form2dict(frm) {
    /* Convert a form into a dictionary
       its mindblowing that Javascript even at EC6 doesnt have this !
   */
    let res = {};
    /* Find the element if we are given a string */
    /* Note this is not the usual getElementById since forms have their own array */
    let el_form = (typeof frm === "string") ? document.forms.namedItem(frm) : frm;
    for (let el of el_form.elements) {
        if (el.type !== "submit") {
            res[el.name] = el.value;
        }
    }
    return res;
}

function togglevis(el, displayvis) {
    /*
        Toggle the visibility of an item
        el element, its id, or an array of elements
        displayvis is one of "inline" "block" "inlineblock"
     */
    if (Array.isArray(el)) {
        el.map((e) => togglevis(e, displayvis))
    } else {
        el = elementFrom(el);
        el.style.display = (el.style && el.style.display === "none" ? displayvis : "none");
    }
}

function setstatus(msg) {
    // Display the message in a Status DIV (usually top right corner, but could be anywhere example wants it)
    document.getElementById("status").innerHTML=msg;
}

function deletechildren(el, keeptemplate) {
    /*
    Remove all children from a node
    :param el:  An HTML element, or a string with id of an HTML element
    */
    if (typeof keeptemplate === "undefined") keeptemplate=true;
    el = (typeof(el) === "string") ? document.getElementById(el) : el;
    // Carefull - this deletes from the end, because template if it exists will be firstChild
    while (el.lastChild && !(keeptemplate && el.lastChild.classList && el.lastChild.classList.contains("template"))) {
        // Note that deletechildren is also used on Span's to remove the children before replacing with text.
        el.removeChild(el.lastChild);
    }
    return el; // For chaining
}

function replacetext(el, text) {
    /* Replace the text of el with text, removing all other children
    :param el:  An HTML element, or a string with id of an HTML element
    */
    el = elementFrom(el);
    //console.log("replacetext",text,el.constructor.name) // Uncomment to get class name of different things want to edit
    if (el instanceof HTMLImageElement) {
        el.src = text;
    } else {
        deletechildren(el);
        return el.appendChild(document.createTextNode(text))
    }
}

function replacetexts(el, ...dict) {
    /*
    Replace the text of all inner nodes of el from the dict
    Note this intentionally doesnt allow html as the values of the dict since probably from a network call and could be faked as "bad" html

    Rules apply to el or any children.
    <x name="yyy"></x>  Adds an inner text node with oo.yyy
    <x name="aaa_bbb"></x> Replaces with ooo.aaa.bbb
    <x name="aaa"><y name="bbb"></y></x> Replaces with ooo.aaa.bbb
    <x name="aaa"><y class="template"/></x> Has y replecated withe each of ooo.aaa[]
    <x value="ccc"></x>  Has value replaced with ooo.ccc (typically used for <option> etc inside <form>, arrays will be JSON stringified
    <a href="ddd"></x> Has href replaced with ooo.ddd
    <img name="eee"/> Has src replaced with ooo.eee (in replacetext)

    This is intended to be easy to use, not necessarily bomb-proof, odd structures of HTML or oo may cause unpredictable results.

    :param el:  An HTML element, or a string with id of an HTML element
    :param dict: Multiple arguments, each a dictionary or object,  or a single array argument
     */
    // First combine with a raw dict so that "prop" doesnt get functions and handles dict like things
    el = elementFrom(el);
    if (Array.isArray(dict[0])) {
        _replacetexts("", el, dict[0])
    } else if (typeof dict[0] === "string") {   // Its just text string, no field name, so look for "_"
        _replacetexts("", el, {"_": dict[0]});
    } else {
        el.source = dict[0];    // Usually used with one object, if append fields its usually just calculated for display
        _replacetexts("", el, Object.assign({}, ...dict))
    }
    return el;
}
function _replacetexts(prefix, el, oo) {
    /*
    Inner function for replacetexts to allow crawling depth of oo
     */
    if (Array.isArray(oo)) {    // Add a templated element for each member of array
        deletechildren(el);
        oo.map((f) => addtemplatedchild(el, {}, f))
    } else {
        for (let prop in oo) {
            try {
                let p = prefix + prop;
                let val = oo[prop];
                if (val instanceof Date) {  // Convert here because otherwise treated as an object
                    val = val.toString();
                }
                if (typeof val === "object" && !Array.isArray(val)) {
                    // Look for current level, longer names e.g. prefixprop_xyz
                    Array.prototype.slice.call(el.querySelectorAll(`[name=${p}]`)).map((i) => replacetexts(i, val) );
                    //Commented out prefix version since runs into problems with complex nested objects such as "ipfs" in transports
                    //_replacetexts(`${p}_`, el, val);
                    // And nowif found any prefixprop look at xyz under it
                    Array.prototype.slice.call(el.querySelectorAll(`[name=${p}]`)).map((i) => _replacetexts("", i, val));
                }
                else if (typeof val === "object" && Array.isArray(val)) {   // Exand an array into sub tags
                    if (el.getAttribute("value") === p) el.value = JSON.stringify(val); //Do the parent as well if its e.g. an option, convert to something that urlsFrom will understand
                    let dests = el.querySelectorAll(`[name=${p}]`);
                    Array.prototype.slice.call(dests).map((i) => replacetexts(i, val));
                } else {
                    if (el.getAttribute("name") === p) replacetext(el, val); //Do the parent as well
                    if (el.getAttribute("value") === p) el.value = val; //Do the parent as well
                    Array.prototype.slice.call(el.querySelectorAll(`[name=${p}]`)).map((i) => replacetext(i, val));  // <span name="text">...val...</span>
                    if (el.getAttribute("href") === p) el.href = val;
                    Array.prototype.slice.call(el.querySelectorAll(`[href=${p}]`)).map((i) => i.href = val);
                    Array.prototype.slice.call(el.querySelectorAll(`[value=${p}]`)).map((i) => i.value = val);
                }
            } catch(err) {
                if (verbose) console.log("Unable to _replacetexts on",prefix,prop,err.message); // Continue loop its probably just some property of some nested object
            }
        }
    }
}

function addtemplatedchild(el, {templatename="template"}={}, ...dict) {
    /*
    Standardised tool to add fields to html,  add that as the last child (or children) of el
    The slightly convulated way of doing this is because of the limited set of functions available
    Note this has to be done with care, as "dict" may be user supplied and contain HTML or other malicious content

    el: An HTML element, or a string with the id of one.
    html: html to add under outerelement
    dict: Dictionary with parameters to replace in html, it looks for nodes with name="xyz" and replaces text inside it with dict[xyz]
    */
    el = elementFrom(el);
    let el_li = el.getElementsByClassName(templatename)[0].cloneNode(true);   // Copy first child with class=Template
    el_li.classList.remove("template");                                 // Remove the "template" class so it displays
    replacetexts(el_li, ...dict);                          // Safe since only replace text - sets el_li.source to dict
    el.appendChild(el_li);
    return el_li;
}

function show(el, displayvalue) {
    displayvalue = displayvalue || "";
    if (Array.isArray(el)) el.map((e) => show(e, displayvalue));
    elementFrom(el).style.display = displayvalue;
}

function hide(el) {
    if (Array.isArray(el)) el.map((e) => hide(e));
    elementFrom(el).style.display = "none";
}

async function p_httpget(url, headers) {
    //https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    /* Simple Get of a URL, resolves to either json or text depending on mimetype */
    h = new Headers( headers ? headers : {} );
    try {
        let response = await fetch(new Request(url, {
            method: 'GET',
            headers: h,
            mode: 'cors',
            cache: 'default',
            redirect: 'follow',  // Chrome defaults to manual
        })); // A promise, throws (on Chrome, untested on Ffox or Node) TypeError: Failed to fetch)
        if (response.ok) {
            if (response.headers.get('Content-Type') === "application/json") {  // It should always be JSON
                return response.json(); // promise resolving to JSON
            } else {
                return response.text(); // promise resolving to text
            }
        }
        throw new Error(`Transport Error ${response.status}: ${response.statusText}`); // Should be TransportError but out of scope
    } catch(err) {
            // Error here is particularly unhelpful - if rejected during the COrs process it throws a TypeError
            console.log("Probably misleading error from fetch:", url, err);
            throw new Error(`Transport error thrown by ${url}`)
    }
}

//------- For dealing with MCE editor ----------

function seteditor(content) {
    tinyMCE.activeEditor.setContent(content);   // Set actual MCE editing text
    tinyMCE.activeEditor.setDirty(true);        // Allow saving this restored text
}

function starteditor() {
    //TODO maybe add some options that can override fields if needed (e.g. with a Object.assign
    tinymce.init({
        selector: '#mytextarea',
        menubar: "true",
        plugins: [ "save",
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code' ],
        toolbar: 'save | undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        save_onsavecallback: () => p_updatecontent(tinyMCE.get('mytextarea').getContent())  // This function must be provided
    });
}
