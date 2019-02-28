

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      // We must check against these specific cases.
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

// function to manage the raven-js sentry agent
function setupRaven(identifier) {
  jQuery.getScript('/includes/raven.min.js', function() {
    var options = { logger: 'BookReader' };
    var url = 'https://4a322a3bd5d44db5b941b28837d0b475@books-sentry.us.archive.org/7';
    Raven.config(url, options).install();
    var width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    var height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    Raven.setExtraContext({ book_identifier: identifier,
                           viewportWidth: width,
                           viewportHeight: height, });
  });
}

// Error reporting - this helps us fix errors quickly
function logError(description,page,line) {
  if (typeof(window.archive_analytics) != 'undefined') {
    var values = {
      'bookreader': 'error',
      'description': description,
      'page': page,
      'line': line,
    };

    // if no referrer set '-' as referrer
    if (document.referrer == '') {
      values['referrer'] = '-';
    } else {
      values['referrer'] = document.referrer;
    }

    if (typeof(br) != 'undefined') {
      values['itemid'] = br.bookId;
      values['subPrefix'] = br.subPrefix;
      values['server'] = br.server;
      values['bookPath'] = br.bookPath;
    }
    archive_analytics.send_ping(values);
  }
  return false; // allow browser error handling so user sees there was a problem
}

function deleteLoanCookies(identifier) {
  var date = new Date();
  date.setTime(date.getTime()-(24*60*60*1000));  //one day ago
  var expiry = date.toGMTString();
  var cookie = 'loan-'+ identifier +'=""';
  cookie    += '; expires='+expiry;
  cookie    += '; path=/; domain=.archive.org;';
  document.cookie = cookie;

  cookie = 'br-loan-'+ identifier +'=""';
  cookie    += '; expires='+expiry;
  cookie    += '; path=/; domain=.archive.org;';
  document.cookie = cookie;
}


/**
 * Function to get the parameters from the URL
 * it returns param's value if param is defined
 */
function get_query_param(param) {
  var pageUrl   = window.location.search.substring(1);
  var paramsUrl = pageUrl.split('&');
  for (var i = 0; i < paramsUrl.length; i++) {
    var pName = paramsUrl[i].split('=');
    if (pName[0] == param) {
      return pName[1];
    }
  }
};

function add_query_param(url, name, value) {
  // Use & if the url already has some query parameters.
  // Use ? otherwise.
  var prefix = (url.indexOf("?") >= 0) ? "&" : "?";
  return url + prefix + name + "=" + value;
}


/**
 * urlencode everything in $path except any embedded slashes
 */
function urlencodePath(path) {
  var parts = path.split('/');
  for (var i = 0; i < parts.length; i++) {
    parts[i] = encodeURIComponent(parts[i]);
  }
  return parts.join('/');
}



/**
 * Builds dialog html based on params
 * @param {string} title
 * @param {string} body
 * @param {array} actions [ {text: '', callback: function}, ... }
 * @param {boolean} allowClose
 * @param {string} cssClassPrefix
 * @return {jQueryElement} html
 */
var buildDialogHtml = function(title, body, foot, allowClose, cssClassPrefix) {
  var els = [];
  if (allowClose) {
    els.push('<button class="floatShut" onclick="$.fn.colorbox.close();"><span class="shift">Close</span></button>');
  }
  if (title) {
    els.push($("<div>").addClass(cssClassPrefix + "Head").append(title));
  }
  if (body) {
    els.push($("<div>").addClass(cssClassPrefix + "Body").html(body));
  }
  if (foot) {
    els.push($("<div>").addClass(cssClassPrefix + "Foot").append(foot));
  }
  var $html = $("<div>")
    .addClass(cssClassPrefix)
    .append(els);
  return $html;
};


var buildActionButton = function(action) {
  if (!action) {
    return;
  }
  var $el = $("<button>")
  .html(action.text)
  .addClass("BRaction btn")
  .click(function() {
    action.callback.call();
  });
  if (action.className) {
    $el.addClass(action.className);
  }
  if (action.disabled) {
    $el.attr('disabled', 'true');
  }
  if (action.title) {
    $el.attr('title', action.title);
  }
  return $el;
};

/**
 * Shows a modal dialog
 */
var showDialog = function(opts) {
  // Allow building foot from actions or passing in directly
  if (opts.actions && opts.actions.length > 0 && !opts.foot) {
    opts.foot = $.map(opts.actions, buildActionButton);
    // Add invisible action button
    opts.foot.push($("<div>").addClass('IABookReaderLoader').hide());
  }
  opts = Object.assign({
    title: '',
    body: '',
    foot: '',
    allowClose: false,
    top: false,
    cssClassPrefix: 'BRtc BRfloat'
  }, opts);

  var $html = buildDialogHtml(opts.title, opts.body, opts.foot,
                                   opts.allowClose, opts.cssClassPrefix);

  // Hack to get width influenced by media queries
  var w = $html.css({visibility: 'hidden'}).appendTo('body').width();
  $html.css({visibility: ""}).detach();

  var colorboxOpts = {
    html: $html,
    overlayClose: opts.allowClose,
    escKey: opts.allowClose,
    closeButton: opts.allowClose,
    opacity: 0,
    width: w,
    initialWidth: '300', // lower than mobile
    top: opts.top,
  };
  var cb = $.colorbox(colorboxOpts);
  cb.colorbox.resize();
  return cb;
};

/**
 * Basic helper to initialize the epub lending flow on details page
 * options should contain:
 * - lendingInfo
 * - identifier
 * - downloadUrl
 * NOTE requires <div id="IABookReaderMessageWrapper"></div> on page
 */
function intializeEpubLendingFlow(options) {
  var tokenPoller = new NullTokenPoller();

  // This is a duck typed class
  var br = {
    bookId: options.identifier,
    init: function() {},
  };
  options.lendingInfo.epubOnly = true; // TODO add this to JSIA lendingInfo

  var lendingFlow = new LendingFlow(br, options.lendingInfo, tokenPoller);
  // We don't use the BookReader preview for epub-only
  lendingFlow.swapInPreview = function() {};
  lendingFlow.handleReadItNow = function(extra) {
    if (!extra) extra = '';
    if (extra == '?admin=1') {
      this.goToUrl('/download/' + options.identifier, true);
    } else {
      this.goToUrl(options.downloadUrl, true);
    }
  }.bind(lendingFlow);

  lendingFlow.init();
}
