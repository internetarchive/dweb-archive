/******************************* LENDING ***********************************/



/**
 * Token polling class for Archive.org
 * Init's the token polling mechanism for Archive.org lending
 * Note, we ignore the cookie endpoint url value.
 * Note, the logic is a little confusing. It attempts to auto-fix itself
 *   if token attempt works after failed attempt.
 * It would be nice if the OL code shared this functionality. Not there yet.
 */
var ArchiveOrgTokenPoller = function () {
  this.lendingFlow = null;
};
ArchiveOrgTokenPoller.prototype.init = function(lendingFlow, callback) {
  var tokenInterval, tokenDialog;
  var self = this;
  self.lendingFlow = lendingFlow;
  var pollingDelay = 120000; // 120000 ms == 2 min

  var somethingWentWrong = function(jqXHR, textStatus, errorThrown) {
    var title = 'Connection error';
    var body = 'Please check internet connection.';
    var actions = [
      {text: 'Okay', callback: function() {
        // close, and try again
        weAreBack();
        updateToken();
      }},
    ];
    try {
      // Specific error
      var data = JSON.parse(jqXHR.responseText);
      if (data['error']) {
        title = 'Loan error';
        body = data['error'];
        // Only go back to item button on error
        actions = [{text: 'Back to item details', callback: function() {
          self.lendingFlow.goToUrl(self.lendingFlow.lendingInfo.bookUrl);
        }, className: 'btn-primary'}];
      }
    } catch (e) {}
    tokenDialog = showDialog({
      title: title,
      body: body,
      allowClose: false,
      actions: actions,
    });
  }

  // close a token dialog if open. eg. offline, now back online
  var weAreBack = function() {
    lendingFlow.br.reloadImages();
  }

  var closeTokenDialog = function() {
    if (tokenDialog) {
      try { tokenDialog.colorbox.close(); } catch (e) {}
      tokenDialog = null;
    }
  }

  // do ajax request to token endpoint
  var updateToken = function(callback) {
    lendingFlow.callService({
      action: "create_token",
      success: function(data) {
        closeTokenDialog();
        if (callback !== undefined) {
          callback(data);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        somethingWentWrong(jqXHR, textStatus, errorThrown);
      },
      useLoader: false,
    });
  }

  // Do an initial token, then set an interval
  updateToken(function() {
    callback();
    tokenInterval = setInterval(updateToken, pollingDelay);
  });
}

/**
 * Implements necessary inteface for LendingFlow arg.
 */
var NullTokenPoller = function () {
  this.lendingFlow = null;
};
NullTokenPoller.prototype.init = function(lendingFlow, callback) {
  callback();
};


/**
 * LendingFlow handles the UI for lending
 */
export default function LendingFlow(br, lendingInfo, tokenPoller, downloadUrls, isRestricted) {
  this.br = br;
  this.lendingInfo = lendingInfo;
  this.tokenPoller = tokenPoller;
  this.userid = lendingInfo.userid;
  this.downloadUrls = downloadUrls || [];
  this.isRestricted = isRestricted;

  // Additionally configure book reader
  this.br.iaHideOtherFormats = true;

  // Bind callbacks to this
  this.handleLoginOk = this.handleLoginOk.bind(this);
  this.handleReadItNow = this.handleReadItNow.bind(this);
  this.handleReturnIt = this.handleReturnIt.bind(this);
  this.handleBorrowFromHold = this.handleBorrowFromHold.bind(this);
  this.handleBorrowIt = this.handleBorrowIt.bind(this);
  this.handleRemoveFromWaitingList = this.handleRemoveFromWaitingList.bind(this);
  this.handleReserveIt = this.handleReserveIt.bind(this);
  this.handleDownloadUrl = this.handleDownloadUrl.bind(this);
};

LendingFlow.prototype.init = function() {
  var self = this;
  var dialogOpts = null;
  var showPreview = true;
  var lendingUiOpts = {};

  function getExtraAction() {
    if (!self.lendingInfo.userHasBorrowed && self.lendingInfo.isAdmin) {
      return {
        text: 'Admin Access',
        callback: function() {
          self.handleReadItNow('admin=1');
        },
        className: 'btn-danger skinny',
        title: 'You have administrative privileges to read this book'
      };
    } else {
      return null;
    }
  }

  /**
   * Add print disability info link
   */
  function printDisabilityLink() {
    var text = "Print disability? Get access now.";
    var url = "/details/printdisabled&tab=about";
    var $el = $("<a>")
        .attr('href', url)
        .addClass('print-disability-link')
        .html(text)
        .click(function(e) {
          e.preventDefault();
          if (window.archive_analytics) {
            window.archive_analytics.send_event(
              'BookReader',
              'PrintDisabilityInfoLink',
              window.location.pathname,
              { service: 'ao_no_sampling' }
            );
          }
          window.setTimeout(function trackingDelayHandler() {
            self.goToUrl(url, true);
          }, 500);
        });
    return $el;
  }

  /**
   * Add print disability link on its own line
   */
  function printDisabilityLine() {
    var $el = $("<div>").append(
      printDisabilityLink()
    );
    return $el;
  }

  /**
   * Return the title of when book is on loan and user not on the waitlist
   * @param {Object} lendingInfo - lending information
   * @return {string} - title
   */
  function titleForBookOnLoan(lendingInfo) {
    var title = 'This book is currently on loan';
    if (lendingInfo.totalWaitlistCount > 0) {
      title += ' with ' + lendingInfo.totalWaitlistCount;
      title += lendingInfo.totalWaitlistCount === 1 ? ' patron' : ' patrons';
      title += ' on the waitlist';
    }
    title += '.';
    return title;
  }

  if ((get_query_param('admin') == '1' && this.lendingInfo.isAdmin)
      || (get_query_param('access') == '1' && this.lendingInfo.userIsPrintDisabled)) {
    showPreview = false;
    lendingUiOpts.showReturnControls = false;
    var backHref = window.location.href.replace(/[?&]{1}(?:admin|access)=1/, '');
    var message = get_query_param('admin') == '1' ? '← Exit admin access mode' : '← Exit print-disabled access mode';

    $('#IABookReaderMessageWrapper').append(
      $('<div>').append(
        $('<a>').text(message).attr('href', backHref)
      ).addClass('BookReaderMessage')
    ).css('display', '');

    $('#IABookReaderWrapper').addClass('BRaccess');

    if (this.isOnStreamPage()) {
      this.br.options.bookUrl = backHref;
      this.br.options.enableBookTitleLink = true;
    }
  } else if (this.lendingInfo.userIsPrintDisabled) {
    dialogOpts = {
      title: 'You are eligible for print-disabled access.',
      actions: [
        { text: 'Read book',
          callback: function() {
            self.handleReadItNow('access=1');
          },
          className: 'btn-primary skinny',
          title: 'You are eligible for print-disabled access.' }
      ]
    };
  } else if (this.lendingInfo.isPrintDisabledOnly) {
    dialogOpts = {
      title: 'Book available to patrons with print disabilities.',
      foot: printDisabilityLine(),
      actions: []
    };
  } else if (this.isRestricted && !this.lendingInfo.isBrowserBorrowable) {
    dialogOpts = {
      title: 'This book is not available at this time.',
      actions: []
    };
  } else if (!this.userid && !this.lendingInfo.isAvailable) {
    dialogOpts = {
      title: titleForBookOnLoan(this.lendingInfo),
      foot: printDisabilityLine(),
      actions: [
        { text: 'Log In and Join waitlist', callback: this.handleLoginOk,
          className: 'btn-warning' }
      ]
    };
  } else if (!this.userid) {
    dialogOpts = {
      title: "This book can be borrowed for 14 days.",
      foot: printDisabilityLine(),
      actions: [
        { text: 'Log In and Borrow', callback: this.handleLoginOk,
          className: 'btn-primary' }
      ]
    };
  } else if (this.lendingInfo.userHasBorrowed) {
    if (!this.isOnStreamPage()) {
      var daysLeftStr;
      if (this.lendingInfo.daysLeftOnLoan <= 1) {
        daysLeftStr = "This is the last day of this loan.";
      } else {
        daysLeftStr = "Your loan of this book has "
                      + this.lendingInfo.daysLeftOnLoan
                      + " days left."
      }
      dialogOpts = {
        title: daysLeftStr,
        actions: [
          /*{ text: 'Read it now', callback: this.handleReadItNow,
            className: 'btn-primary' },*/
          { text: 'Return it', callback: this.handleReturnIt,
            className: 'btn-danger' }
        ]
      };
    }
    showPreview = false;
  } else if (this.lendingInfo.userHoldIsReady) {
    var actions = [];
    if (this.lendingInfo.loanCount < this.lendingInfo.maxLoans) {
      actions.push({text: 'Borrow now', callback: this.handleBorrowFromHold, className: 'btn-primary'});
    }
    dialogOpts = {
      title: "This book is on hold for you to borrow.",
      foot: $("<div>").append(
        $("<a>")
          .addClass('muted')
          .attr('href', self.lendingInfo.loansUrl)
          .html("You have " + this.lendingInfo.loanCount + " of "
                + this.lendingInfo.maxLoans + " books on loan.")
          .click(function(e) {
            self.goToUrl(self.lendingInfo.loansUrl, true);
            e.preventDefault();
          })
      ).append(printDisabilityLink()),
      actions: actions
    };
  } else if (this.lendingInfo.isAvailable) {
    var disableBorrow = this.lendingInfo.loanCount >= this.lendingInfo.maxLoans;
    var actions;
    if (!disableBorrow) {
      actions = [{ text: 'Borrow This Book', callback: this.handleBorrowIt,
        className: 'btn-primary', disabled: disableBorrow }];
    } else {
      actions = []
    }
    dialogOpts = {
      title: "This book can be borrowed for 14 days.",
      foot: $("<div>").append(
        $("<a>")
          .addClass('muted')
          .attr('href', self.lendingInfo.loansUrl)
          .html("You have " + this.lendingInfo.loanCount + " of "
                + this.lendingInfo.maxLoans + " books on loan.")
          .click(function(e) {
            self.goToUrl(self.lendingInfo.loansUrl, true);
            e.preventDefault();
          })
      )
      .append(printDisabilityLink()),
      actions: actions
    };
  } else if (this.lendingInfo.userOnWaitingList) {
    var title;
    if (this.lendingInfo.userWaitlistPosition === 0) {
      title = 'You are first on the waitlist for this book.';
    } else if (this.lendingInfo.userWaitlistPosition === 1) {
      title = 'You are on the waitlist for this book. There is 1 patron ahead of you.';
    } else {
      title = 'You are on the waitlist for this book. There are ' + this.lendingInfo.userWaitlistPosition + ' patrons ahead of you.';
    }
    dialogOpts = {
      title: title,
      foot: $('<div>')
        .addClass('muted')
        .text('You will be notified via email when your loan is ready.')
        .append(printDisabilityLink()),
      actions: [
        { text: 'Leave waitlist',
          callback: this.handleRemoveFromWaitingList,
          className: 'btn-primary' }
      ]
    };
  } else {
    dialogOpts = {
      title: titleForBookOnLoan(this.lendingInfo),
      foot: printDisabilityLine(),
      actions: [
        { text: 'Join waitlist', callback: this.handleReserveIt,
          className: 'btn-warning' }
      ]
    };
  }

  if (showPreview === true) {
    // change the book reader to show the preview files instead
    this.swapInPreview(function() {
      this.br.init();
    }.bind(this));
  } else {
    this.initTokenPolling(function() {
      this.addLendingUI(lendingUiOpts);
      this.br.init();
    }.bind(this));
  }

  if (dialogOpts) {
    var extraAction = getExtraAction();
    dialogOpts.actions.push(extraAction);
    // 800 is the mobile width media query in css
    if ($(window).width() > 800) {
      dialogOpts.top = 0;
    }
    this.showBookReaderMessage(dialogOpts);
  }
}

/**
 * @return {boolean} is this running in an iframe?
 */
LendingFlow.prototype.isInIframe = function() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

LendingFlow.prototype.isOnStreamPage = function() {
  return window.location.href.indexOf('/stream/') > -1;
};

/**
 * Helper to get current url with respect to parent frame
 * @global top, eg top.window.location
 * @return {string}
 */
LendingFlow.prototype.getRedirectUrl = function() {
  var url;
  if (this.isInIframe()) {
    // are we in a frame?
    url = top.window.location.href;
  } else {
    url = window.location.href;
  }
  return url;
};

/**
 * Helper function. Loads URL with consideration to parent frame.
 * @param {string} url
 * @param {boolean} tryParent (defaults to undefined)
 */
LendingFlow.prototype.goToUrl = function(url, tryParent) {
  var ref;
  if (this.isInIframe() && tryParent) {
    ref = top.window.location;
  } else {
    ref = window.location;
  }
  if (ref.href === url) {
    ref.reload();
  } else {
    ref.href = url;
  }
};

/**
 * Helper to call loan service
 * @param {Object} options
 */
LendingFlow.prototype.callService = function(options) {
  options = Object.assign({
    action: null,
    data: {},
    success: function() {},
    error: null,
    useLoader: true,
    type: 'POST',
  }, options);

  if (options.useLoader) {
    this.showBookReaderMessageLoader();
  }

  if (options.error === null) {
    options.error = function(response) {
      var msg;
      if (response && response.responseJSON && response.responseJSON.error) {
        msg = response.responseJSON.error;
      } else {
        msg = "There was an error";
      }
      alert(msg);
    };
  }

  var callbackSuccess = function(data, textStatus, jqXHR) {
    if (options.useLoader) {
      this.showBookReaderMessageLoader();
    }
    options.success.call(this, data, textStatus, jqXHR);
  }.bind(this);

  var callbackError = function(jqXHR, textStatus, errorThrown) {
    if (options.useLoader) {
      this.hideBookReaderMessageLoader();
    }
    options.error.call(this, jqXHR, textStatus, errorThrown);
  }.bind(this);

  $.ajax({
    url: "/services/loans/beta/loan/",
    type: options.type,
    dataType: "json",
    data: Object.assign({
      action: options.action,
      identifier: this.br.bookId
    }, options.data),
    timeout: 60000 // up to 60 seconds, because item creation takes time
  }).then(
    callbackSuccess,
    callbackError
  );
};

LendingFlow.prototype.handleLoginOk = function() {
  var target = "/account/login.php?referer=" + encodeURIComponent(this.getRedirectUrl());
  this.goToUrl(target, true);
};

LendingFlow.prototype.handleReadItNow = function(extraParam) {
  var extra = '';
  if (window.location.search) {
    extra += window.location.search;
  }
  if (extraParam) {
    if (extra.length) {
      extra += '&' + extraParam;
    } else {
      extra += '?' + extraParam;
    }
  }
  this.goToUrl(window.location.href + extra, true);
};

LendingFlow.prototype.handleReturnIt = function() {
  this.callService({
    action: "return_loan",
    success: function(response) {
      deleteLoanCookies(this.br.bookId);
      this.goToUrl(this.lendingInfo.bookUrl, true);
    }
  });
};

LendingFlow.prototype.handleReserveIt = function() {
  this.callService({
    action: "join_waitlist",
    success: function(response) {
      this.goToUrl(this.getRedirectUrl(), true);
    }
  });
};

LendingFlow.prototype.handleBorrowFromHold = function() {
  return this.handleBorrowIt();
};

LendingFlow.prototype.handleBorrowIt = function() {
  this.callService({
    action: "borrow_book",
    success: function(response) {
      this.handleReadItNow();
    }
  });
};

LendingFlow.prototype.handleRemoveFromWaitingList = function() {
  this.callService({
    action: "leave_waitlist",
    success: function(response) {
      this.goToUrl(this.getRedirectUrl(), true);
    }
  });
};

/**
 * Handler for download "pdf" or "epub"
 */
LendingFlow.prototype.handleDownloadUrl = function(format) {
  var url;
  $.each(this.downloadUrls, function(index, row) {
    if (row[0] === format) {
      url = row[1];
    }
  });
  if (url) {
    window.open(url, '_blank');
  } else {
    alert("There was an error accessing the requested format: " + format);
  }
}

/**
 * Shows a message above the book reader
 */
LendingFlow.prototype.showBookReaderMessage = function(opts) {
  // Allow building body from actions or passing in directly
  if (opts.actions && opts.actions.length > 0 && !opts.body) {
    opts.body = $.map(opts.actions, buildActionButton);
    // Add an invisible loading gif
    opts.body.push($("<div>").addClass('IABookReaderLoader').hide());
  }
  opts = Object.assign({
    title: '',
    body: '',
    foot: '',
    allowClose: false,
    top: false,
    cssClassPrefix: 'BookReaderMessage'
  }, opts);

  var $html = buildDialogHtml(opts.title, opts.body, opts.foot,
                                   opts.allowClose, opts.cssClassPrefix);
  $html.prependTo('#IABookReaderMessageWrapper');
  $('#IABookReaderMessageWrapper').css('display', '');
  $(document).trigger('IABookReader:ResizeBookReader');
};

/**
 * Shows the loader and disables action buttons
 */
LendingFlow.prototype.showBookReaderMessageLoader = function() {
  $('.IABookReaderLoader').show();
  $('#IABookReaderMessageWrapper button, button.action').prop('disabled', true);
};

LendingFlow.prototype.hideBookReaderMessageLoader = function() {
  $('.IABookReaderLoader').hide();
  $('#IABookReaderMessageWrapper button, button.action').prop('disabled', null);
};

LendingFlow.prototype.isLoggedInUserStaff = function() {
  var email = String(BookReader.docCookies.getItem('logged-in-user'));
  var suffix = '@archive.org';
  return email.indexOf(suffix, this.length - suffix.length) !== -1;
};

/**
 * Replaces the content with a preview.
 * Note: this.br has not had .init called yet
 */
LendingFlow.prototype.swapInPreview = function(callback) {
  $('#IABookReaderWrapper').addClass('BRpreview');
  if (this.lendingInfo.isLendingRequired) {
    // Only show multi-page preview with books in inlibrary
    return this.swapInPreviewMultipage(callback);
  } else {
    return this.swapInPreviewSinglePage(callback);
  }
};

LendingFlow.prototype.swapInPreviewSinglePage = function(callback) {
  var basePreviewOptions = {
    // Messaging customization
    bookTitle: 'Preview: ' + this.br.options.bookTitle,

    // Plugin customization
    enablePageResume: false,
    enableUrlPlugin: false,
    enableSearch: false,
    enableMobileNav: false,
    enableTtsPlugin: false,

    // UI customization
    showLogo: false,
    onePage: { autofit: 'auto' },
    ui: 'full',
    showToolbar: false,
    showNavbar: false,
  };

  var options = jQuery.extend({}, this.br.options, basePreviewOptions);
  this.br.setup(options);

  callback();
};

/**
 * Replaces the content with a preview.
 * Note: this.br has not had .init called yet
 */
LendingFlow.prototype.swapInPreviewMultipage = function(callback) {
  // Add a message
  var $messageEl = $('<div>')
  .addClass('IABookReaderPreviewOverlayWrapper')
  .append(
    $('<div>')
    .addClass('IABookReaderPreviewOverlay')
    .text('Limited Book Preview')
  );

  $('#IABookReaderMessageWrapper').append($messageEl);

  var basePreviewOptions = {
    // Messaging customization
    bookTitle: 'Preview: ' + this.br.options.bookTitle,

    // Plugin customization
    enablePageResume: false,
    enableUrlPlugin: true,
    enableSearch: false,
    enableMobileNav: true,
    enableTtsPlugin: false,

    // UI customization
    showLogo: false,
    onePage: { autofit: 'auto' },
    ui: 'full',
    showToolbar: true,
    showNavbar: true,
    navbarTitle: 'Preview',
  };

  if (this.br.options.previewCitationError) {
    // This is shown when the page cannot be accessed
    showDialog({
      title: 'Page preview temporarily unavailable',
      allowClose: true,
      body: 'This book has reached its limit of accessible pages. Please try again in a few hours.',
    });
  }

  // Monkey patch for offset URLS and page display

  /**
   * Maps an original index to the relative preview index
   * @param {BookReader} br
   * @param {number} origIndex
   */
  function originalIndexToPreviewIndex(br, origIndex) {
    var dataf = br._getDataFlattened();
    for (var currIndex = 0; currIndex < dataf.length; currIndex++) {
      if (dataf[currIndex].origIndex === origIndex) {
        return currIndex;
      }
    }
  }

  /**
   * Override function used in setting the URL
   * Map preview index to full-book index
   */
  this.br.paramsFromCurrent = function() {
    var previewIndex = this.currentIndex();
    var params = {};
    var page = br._getDataFlattened()[previewIndex];
    if (page) {
      params.index = page.origIndex;
      params.page = page.pageNum || 'n' + page.origIndex;
    }
    return params;
  };

  /**
   * Override function that reads the URL
   * Map full-book index to preview index
   */
  this.br.paramsFromFragment = function(fragment) {
    var params = BookReader.prototype.paramsFromFragment.call(this, fragment);
    if (params.page && params.page[0] === 'n') {
      // map the n-based string
      var pageIntStr = params.page.slice(1, params.page.length);
      var origIndex = parseInt(pageIntStr);
      var previewIndex = originalIndexToPreviewIndex(this, origIndex);
      params.page = 'n' + (previewIndex || 0);
    }

    if (params.index) {
      params.index = originalIndexToPreviewIndex(this, params.index);
    }
    return params;
  };

  /**
   * Override display of pages to take mapping into account
   */
  this.br.getNavPageNumString = function(previewIndex) {
    var page = this._getDataFlattened()[previewIndex];
    var pageNum = page.pageNum || 'n' + page.origIndex;
    var numLeafs = this.options.previewOrigNumLeafs;
    var maxPageNum = this.options.previewOrigMaxPageNum;
    return this.getNavPageNumHtml(page.origIndex, numLeafs, pageNum, page.pageType, maxPageNum);
  };

  var options = jQuery.extend({}, this.br.options, basePreviewOptions);
  this.br.setup(options);

  callback();
};

/**
 * Adds the navbar and mobile UI for lending (eg return book, download pdf, etc
 * Needs to be called before this.br.init()
 */
LendingFlow.prototype.addLendingUI = function(opts) {
  if (!opts) opts = {};
  opts = Object.assign({
    showReturnControls: true,
    showDownloadControls: true
  }, opts);

  var self = this;
  $('body').addClass('BRlending');

  var buildDownloadBody = function() {
    var $downloadBody = $('<div/>');
    if (self.downloadUrls.length === 0) {
      $downloadBody.append(
        '<div>We do not have a downloadable copy of this item available.</div>'
      );
      return $downloadBody;
    }

    $downloadBody.append('<div class="ph50-lg">'
                        + 'Your loan will last two weeks from the initial borrow date.'
                        + '<br/><br/>'
                        + '</div>');

    var downloadActions = $.map(self.downloadUrls, function(row) {
      if (row[0] === 'PDF') {
        return {text: '<b>Encrypted Adobe PDF</b><br><span class="smaller">High Quality Page Images</span>',
         className: 'btn-primary lighter', callback: function() {
           self.handleDownloadUrl('PDF');
        }};
      } else if (row[0] == 'ePub') {
        return {text: '<b>Encrypted Adobe ePub</b><br><span class="smaller">Smaller File, May Contain Errors</span>',
          className: 'btn-primary lighter', callback: function() {
            self.handleDownloadUrl('ePub');
        }}
      }
    });
    $downloadBody.append($.map(downloadActions, buildActionButton));
    return $downloadBody;
  }

  var buildDownloadFoot = function() {
    var $downloadFoot = $('<div/>');
    if (self.downloadUrls.length === 0) {
      return $downloadFoot;
    }
    $downloadFoot.append(buildActionButton({
      text: 'Install Adobe Digital Editions',
      callback: function() {
        window.open('http://www.adobe.com/solutions/ebook/digital-editions/download.html', '_blank');
      }
    }).addClass('orangeButton btn-warning'));
    $downloadFoot.append('<div class="smaller-lg grey">'
                    + '<br/>'
                    + 'In order to access your downloaded book you will need '
                    + 'Adobe-compliant software on your device. '
                    + 'The Internet Archive will administer this loan, but '
                    + 'Adobe may also collect some information.'
                    + '<br><br>'
                    + '</div>');
    return $downloadFoot;
  }

  var daysLeftStr;
  if (this.lendingInfo.daysLeftOnLoan <= 1) {
    daysLeftStr = "Last day";
  } else {
    daysLeftStr = this.lendingInfo.daysLeftOnLoan + " days left"
  }

  /**
   * Decorate the desktop toolbar method
   */
  this.br.buildToolbarElement = (function(prevBuildToolbarElement) {
    return function() {
      var $el = prevBuildToolbarElement.call(self.br);
      var $BRtoolbarSectionEl = $('<span class="BRtoolbarSection BRtoolbarSectionLending">');

      if (opts.showReturnControls) {
        var $ReturnEl = $(
          "<button class='BRpill return js-tooltip' title='Return Book (" + daysLeftStr + ")'>"
          + "  <span class='BRpillInner'>Return Book</span>"
          + "</button>"
        );
        $ReturnEl.click(function(e) {
          e.preventDefault();
          showDialog({
            title: 'Book Return',
            body: $("<div>")
              .addClass('message')
              .append("<div>You can return a book early here.</div>")
              .append("<div class='mb20'>This will end your current loan of this title.</div>")
              .append(
                $("<a>")
                  .attr('href', "#")
                  .html("<b>You have "+self.lendingInfo.loanCount+" of "
                        +self.lendingInfo.maxLoans+" books on loan.</b>")
                  .click(function(e) {
                    self.goToUrl(self.lendingInfo.loansUrl, true);
                    e.preventDefault();
                  })
              )
            ,
            allowClose: true,
            actions: [
              {text: 'Cancel', className: 'default', callback: function() {
                $.fn.colorbox.close();
              }},
              {text: 'Return Book', className: 'btn-danger', callback: function() {
                self.showBookReaderMessageLoader();
                self.handleReturnIt();
              }},
            ]
          });
        });
        $BRtoolbarSectionEl.append($ReturnEl);
      }

      if (opts.showDownloadControls) {
        var $DownloadEl = $(
          "<button class='BRpill download js-tooltip' title='Download Encrypted PDF/ePub'>"
          + "  <span class='BRpillInner'>PDF/ePub</span>"
          + "</button>"
        );
        $DownloadEl.click(function() {
          showDialog({
            title: 'Select Download Format',
            allowClose: true,
            body: buildDownloadBody(),
            foot: buildDownloadFoot(),
          });
        });
        $BRtoolbarSectionEl.append($DownloadEl);
      }

      $el.find('.BRtoolbarRight').prepend($BRtoolbarSectionEl);

      return $el;
    };
  })(this.br.buildToolbarElement);

  // Decorate the mobile drawer method
  this.br.buildMobileDrawerElement = (function(prevBuildMobileDrawerElement) {
    return function() {
      var $el = prevBuildMobileDrawerElement.call(self.br);
      var $ul = $el.children('ul');
      var $loanDrawerEl = $(
        "<li>"
        +"  <span>"
        +"    <span class=\"DrawerIconWrapper \">"
        +"      <img class=\"DrawerIcon\" src=\""+this.imagesBaseURL+"icon_book.svg\" alt=\"info-book\"/>"
        +     "</span>"
        +"    Loan Information"
        +"  </span>"
        +"  <div id=\"mobileLoanInfo\">"
        +"      <h1>Loan Information</h1>"
        +"  </div>"
        +"</li>"
      );

      if (opts.showReturnControls) {
        $loanDrawerEl.find('#mobileLoanInfo')
        .append(
          "<div>Time Left In Loan Period<br/>"
          + "  <a class='f14' href='"+self.lendingInfo.loansUrl+"'>" + self.lendingInfo.daysLeftOnLoan + " Days</a>"
          + "  <br/><br/>"
          + "</div>"
          + "<div><br/>"
          + "  <h1>Book Return <div class='IABookReaderLoader' style='display:none;'></div></h1>"
          + "  <button class='BRaction btn btn-danger return-loan' title='Return Book'>Return Book</button>"
          + "</div>"
        );
        // Bind actions
        $loanDrawerEl.find('.return-loan').click(function() {
          if (confirm("Are you sure you want to return this book? "
                      + "This will end your current loan of this title.")) {
            self.showBookReaderMessageLoader();
            self.handleReturnIt();
          }
        });
      }

      if (opts.showDownloadControls) {
        $loanDrawerEl.find('#mobileLoanInfo')
          .append("<br/><br/><h1>Download Additional Formats</h1>")
          .append(buildDownloadBody())
          .append("<br/>")
          .append(buildDownloadFoot())
        ;
      }

      // Insert into specific position in drawer
      $loanDrawerEl.insertAfter($ul.children().eq(2));
      return $el;
    };
  })(this.br.buildMobileDrawerElement);
};

/**
 * @param {Function} callback
 */
LendingFlow.prototype.initTokenPolling = function(callback) {
  this.tokenPoller.init(this, callback);
};

