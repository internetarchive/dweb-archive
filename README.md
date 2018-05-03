# dweb-transport

Welcome to the Internet Archive's Decentralized Wed (Dweb) libraries. 

## Running the examples
The examples can run either from the [dweb.me/examples](https://dweb.me/examples) server, 
or once the source is checked out, locally from your file system.

By default each of these examples runs both IPFS and HTTP transports, and is smart if it cannot connect to one or the other.
Links below allow selecting to use ONLY IPFS, or the Archive's contenthash server.

- Simple text creation and retrieval: example_block.html: [Default](https://dweb.me/examples/example_block.html) [IPFS](https://dweb.me/examples/example_block.html&transport=IPFS)
    or [HTTP](https://dweb.me/examples/example_block.html?transport=HTTP)
- Simple dict creation and retrieval: example_smartdict.html: [Default](https://dweb.me/examples/example_smartdict.html) [IPFS](https://dweb.me/examples/example_smartdict.html&transport=IPFS)
    or [HTTP](https://dweb.me/examples/example_smartdict.html?transport=HTTP); 
- List creation and retrieval: example_list.html: [Default](https://dweb.me/examples/example_list.html) [IPFS](https://dweb.me/examples/example_list.html&transport=IPFS)
    or [HTTP](https://dweb.me/examples/example_list.html?transport=HTTP)
- UI for Academic docs - centralised search; decentralized retrieval: example_academic.html: [Default](https://dweb.me/examples/example_academic.html) [IPFS](https://dweb.me/examples/example_academic.html&transport=IPFS)
    or [HTTP](https://dweb.me/examples/example_academic.html?transport=HTTP)
- Authentication: Managing locks and keys example_keys.html: [Default](https://dweb.me/examples/example_keys.html) [IPFS](https://dweb.me/examples/example_keys.html&transport=IPFS)
    or [HTTP](https://dweb.me/examples/example_keys.html?transport=HTTP); 
- Versions of a single document: example_versions.html: [Default](https://dweb.me/examples/example_versions.html) [IPFS](https://dweb.me/examples/example_versions.html&transport=IPFS)
    or [HTTP](https://dweb.me/examples/example_versions.html?transport=HTTP); 
- [objbrowser.html](https://dweb.me/examples/objbrowser.html);  ((Not currently working))

**Browser Support**: This should work on Chrome and Firefox (Safari doesn't support many newer features), 
see below for IPFS bugs, 

**Transport choice**: As you can see from the URLs above ylj ca  select between IPFS (default) and HTTP as the transport

**Verbosity**: You can get debugging output by appending verbose=true to the URLs, 
this shows up in your console and also (for HTTP) in our server logs.

### BLOCK example
- In your browser, open examples/example_block.html: 
[Default](https://dweb.me/examples/example_block.html) [IPFS](https://dweb.me/examples/example_block.html&transport=IPFS)
or [HTTP](https://dweb.me/examples/example_block.html?transport=HTTP)
- Type some text into the editor and hit Save  
- A hash should appear below.  
- If it doesn't then run with the verbose argument 
[IPFS](https://dweb.me/examples/example_block.html?verbose=true) 
or [HTTP](https://dweb.me/examples/example_block.html?transport=HTTP&verbose=true) 
and open the browser console (e.g. Firefox/tools/Web Developer/Web Console)  
- Click "FetchIt" and the data should be returned.

### SMART DICT example
- In your browser, open example_smartdict.html
[Default](https://dweb.me/examples/example_smartdict.html) [IPFS](https://dweb.me/examples/example_smartdict.html&transport=IPFS)
or [HTTP](https://dweb.me/examples/example_smartdict.html?transport=HTTP);
- Type some text into the name, and a HTML color nmae into the color (e.g. "red") and hit Save  
- A hash should appear below.  
- Click "FetchIt" and the data should be returned and displayed.  
- Hover over "Object Browser" to see the structure of the object.

### COMMON LIST example
- In your browser, open the file:  example_list.html:
[Default](https://dweb.me/examples/example_list.html) [IPFS](https://dweb.me/examples/example_list.html&transport=IPFS)
or [HTTP](https://dweb.me/examples/example_list.html?transport=HTTP)
- Click New and enter a name for your list  
- A blank list should appear along with the name and hashes (retrieved from Dweb)  
- Enter something in the text field and hit Send  
- The item should be announced to the list and appear in the text field above.
- The link icons next to the private hash can be opened on another machine and gives 
the user ability to also write to the list.
- The link icon next to the public hash will only give them the ability to display the list.
- Hover over "Object Browser" to see the structure of the object.

### ACADEMIC DOCS example

This is a work in progress, dependent on the incompleteness of both the Academic Document virtual collection at Archive.org and 
the bugs/issues in IPFS.

- In your browser, open the file:  example_academic.html:
[Default](https://dweb.me/examples/example_academic.html) [IPFS](https://dweb.me/examples/example_academic.html&transport=IPFS)
or [HTTP](https://dweb.me/examples/example_academic.html?transport=HTTP)
- Enter a search term 
- A list of papers should be returned, along with their DOI.
- Choose one that hs a check-mark next to it, we don't have the others at the Archive.
- Clicking on the DOI will find metadata on it. 
- As you search for these DOI's the paper is pushed into our contenthash server, and IPFS.
- You should see metadata on that paper, and a list of ways to receive it.
- The first three fetch from: the Archive's contenthash server; and from two IPFS http gateways.
- The last link fetches directly in the browser without coming to the Archive or any other single point of failure.

### AUTHENTICATION example
- In your browser, open the file:  examples/example_keys.html:
[Default](https://dweb.me/examples/example_keys.html) [IPFS](https://dweb.me/examples/example_keys.html&transport=IPFS)
or [HTTP](https://dweb.me/examples/example_keys.html?transport=HTTP)
- follow the instructions on the page.

### VERSIONS exampe
- In your browser, open the file examples/example_versions.html
[Default](https://dweb.me/examples/example_versions.html) [IPFS](https://dweb.me/examples/example_versions.html&transport=IPFS)
or [HTTP](https://dweb.me/examples/example_versions.html?transport=HTTP);
- follow the instructions on the page.

Further examples will demonstrate using the lock.

## Installing a compilable version
- Checkout the repository
- If you haven't already, then install [npm](https://nodejs.org/en/download) and upgrade node to Node 7 or later (for support of async/wait).
- And on a Mac you'll need Xcode from the App store. 
- No idea what you need on Windows (Please update this if you know)
- Then install the dependencies: ```> npm install --dev```
- Note that this gets a forked version of libsodium-wrappers from [Mitra's repository][https://github.com/mitra42/libsodium.js], 
as the current libsodium-wrappers release doesn't have urlsafebase54.
- Often the first run of ```> npm install --dev``` generates a lot of warnings and a second, 
virtually clean run gives more confidence that the install worked.
- Now compile the javascript library for the browser: ```> npm run bundle_transport_ipfs```
- If this worked without errors, try the node specific test. ```> npm run test```
- This should start a IPFS instance, and generate some messages ending in "delaying 10 secs" and "Completed test".
- It will leave the IPFS instance running and usually will need a Ctrl-C to exit.

## Major Browser Issues

Please not there is an issue with IPFS on some Firefox versions (seen on 54.0.1, not on 49.0.2 for example)
that is currently leaking Threads and slowing the machine down drastically. This is being explored!  
Use it on Chrome for now, and expect it to crash every 5 minutes.
The HTTP versions don't have this problem, but also don't support live notification of changes.
This is reported on IPFS at [JSIPFS issue#950](https://github.com/ipfs/js-ipfs/issues/950), dweb-transport issue@ and supposedly being fixed 

## See also:

The documentation for the Internet Archive's Dweb project is currently on Google (yes, we appreciate the irony). 

[API docs](https://docs.google.com/document/d/1_MttdWglsIOIajqtiSW5AWuf6YObZP8AA2LF9OV4xOM/edit#)  
[Top level doc on project and links](https://docs.google.com/document/d/1-lI352gV_ma5ObAO02XwwyQHhqbC8GnAaysuxgR2dQo/edit#)


