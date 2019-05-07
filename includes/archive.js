/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clipboardAction = __webpack_require__(1);

var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

var _tinyEmitter = __webpack_require__(3);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _goodListener = __webpack_require__(4);

var _goodListener2 = _interopRequireDefault(_goodListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */
var Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        _classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    _createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(_tinyEmitter2.default);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

module.exports = Clipboard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(2);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */
var ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = (0, _select2.default)(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = (0, _select2.default)(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }

            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

module.exports = ClipboardAction;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(5);
var delegate = __webpack_require__(6);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(7);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/ia-design-system/public/scripts/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/ia-design-system/public/scripts/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var IaDesignSystem = {};

// Add components as keys in the IaDesignSystem object, for example:
//    import MyComponent from 'components/MyComponent';
//    IaDesignSystem.MyComponent = MyComponent;

exports.default = IaDesignSystem;

/***/ }),

/***/ "./src/styles/index.less":
/*!*******************************!*\
  !*** ./src/styles/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./src/scripts/index.js ./src/styles/index.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mitra/Library/Caches/Yarn/v4/.tmp/f85d5c6dbf48ced4703e8bc19ab1e947.5c04a7b880a402fa16e48933f5ca7327747203dc.prepare/src/scripts/index.js */"./src/scripts/index.js");
module.exports = __webpack_require__(/*! /Users/mitra/Library/Caches/Yarn/v4/.tmp/f85d5c6dbf48ced4703e8bc19ab1e947.5c04a7b880a402fa16e48933f5ca7327747203dc.prepare/src/styles/index.less */"./src/styles/index.less");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbIklhRGVzaWduU3lzdGVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsaUJBQWlCLEVBQXZCOztBQUVBO0FBQ0E7QUFDQTs7a0JBRWVBLGM7Ozs7Ozs7Ozs7O0FDTmYseUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBJYURlc2lnblN5c3RlbSA9IHt9O1xuXG4vLyBBZGQgY29tcG9uZW50cyBhcyBrZXlzIGluIHRoZSBJYURlc2lnblN5c3RlbSBvYmplY3QsIGZvciBleGFtcGxlOlxuLy8gICAgaW1wb3J0IE15Q29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvTXlDb21wb25lbnQnO1xuLy8gICAgSWFEZXNpZ25TeXN0ZW0uTXlDb21wb25lbnQgPSBNeUNvbXBvbmVudDtcblxuZXhwb3J0IGRlZmF1bHQgSWFEZXNpZ25TeXN0ZW07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/js/archive.js":
/*!***************************!*\
  !*** ./src/js/archive.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Not using anything from the design system right now, imported as a proof of concept.
// eslint-disable-next-line no-unused-vars


var _iaDesignSystem = __webpack_require__(/*! ia-design-system */ "./node_modules/ia-design-system/public/scripts/index.js");

var _iaDesignSystem2 = _interopRequireDefault(_iaDesignSystem);

var _setUpCopyableTexts = __webpack_require__(/*! ./setUpCopyableTexts */ "./src/js/setUpCopyableTexts.js");

var _setUpCopyableTexts2 = _interopRequireDefault(_setUpCopyableTexts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Local binding in case of conflicts in global scope
var $ = window.jQuery;

// convenient, no?  Stateless function, global to all Play objects
//   eslint-disable-next-line  no-console
var log = location.host.substr(0, 4) !== 'www-' ? function () {} : console.log.bind(console);

/**
 * Executes a function no more than once within the specified time threshhold
 *
 * Pass its return value into high-frequency event listeners
 * like scroll/resize to improve performance.
 *
 * @param {Function} fn
 * @param {Number}   threshhold - in milliseconds
 * @param {*}        context    - will be bound to fn as its "this" value
 * @return {Function} the throttled version of the original function
 */
function throttle(fn) {
  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  var last = void 0;
  var deferTimeout = void 0;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Convert to a Number
    var now = +new Date();

    /**
     * Calls the fn function and updates the last time
     */
    function callFn() {
      last = now;
      fn.apply(context, args);
    }

    if (last && now < last + threshhold) {
      clearTimeout(deferTimeout);
      deferTimeout = setTimeout(callFn, threshhold);
    } else {
      callFn();
    }
  };
}

/**
 * Replaces a BookReader fragment string in a URL path with a new fragment,
 * or adds the path string to the end of the URL if it's not set
 *
 * NOTE: BookReader "fragments" are not necessarily URL hash fragments,
 * though they may be stored in the hash.
 *
 * @param {String} pathString
 * @param {String} newFragment
 * @returns {String}
 */
function replaceBookReaderFragment(pathString, newFragment) {
  // See http://openlibrary.org/dev/docs/bookurls
  var fragmentRegex = /(\/((page|mode|search)\/[^/?$]+))+\/?(?=\?|$)/g;

  if (pathString.match(fragmentRegex)) return pathString.replace(fragmentRegex, '/' + newFragment);

  return (pathString + '/' + newFragment).replace(/\/+/g, '/');
}

// class memnonic: Archive JS

var AJS = function () {
  function AJS() {
    _classCallCheck(this, AJS);
  }

  _createClass(AJS, null, [{
    key: 'tvAD',
    // NOTE: needs to stay in sync w/ archive.less
    value: function tvAD(elm) {
      var in_show = $(elm).parents('.shows');
      var id = void 0;
      var chan = void 0;
      var show = void 0;
      if (in_show.length) {
        // see if we've already gotten and displayed the "Air date" section...
        var opened = $(elm).parent().find('.shows');
        if (opened.length) {
          // ... yes, simply close/open it
          opened.toggle();
          return false;
        }
        chan = in_show.attr('data-chan');
        show = $(elm).text();
      } else {
        chan = $(elm).text();
        id = 'menu-chan-'.concat(chan);
        var div = $('#' + id);
        if (div.length) {
          div.toggle();
          return false;
        }
      }

      var url = location.href + '?channel=' + chan;
      if (in_show.length) url += '&program='.concat(encodeURIComponent(show));
      log(url);

      $.get(url, function (htm) {
        if (in_show.length) {
          $(elm).parent().append('<div data-chan="' + chan + '" class="shows"><h5>Air date</h5><div>' + htm + '</div></div>');
        } else {
          $(elm).parent().append('<div id="' + id + '" data-chan="' + chan + '" class="shows"><h4>Show</h4><div>' + htm + '</div></div>');
        }
      });

      return false;
    } // NOTE: needs to stay in sync w/ archive.less

    /* global  archive_analytics  jwplayer */
    /* eslint no-underscore-dangle: ["error", { "allow": ["_modal_add"] }] */

  }, {
    key: 'nav_tophat_setup',
    value: function nav_tophat_setup() {
      if (!$('#nav-tophat').length) return;

      if (AJS.isTouchDevice()) $('body').addClass('touch');else AJS.logoText();

      $('#nav-tophat').on('show.bs.collapse', function () {
        return $('#navwrap1').addClass('hatted');
      }).on('hide.bs.collapse', function () {
        return $('#navwrap1').removeClass('hatted');
      });

      $('.navbar a.navia-link').on('click', function navhat_click(evt) {
        // are we in "mobile nav / xs width" mode?
        var xs = !$('#nav-tophat-helper:visible').length;
        var hat_open = $('#nav-tophat').hasClass('in');
        var navlink = this;

        // determine mediatype from either: (1) user hit text or (2) user hit icon
        var mt = $(evt.target).attr('data-top-kind') || $(evt.currentTarget).attr('data-top-kind');

        var isnow = $('.navbar .dropdown-ia.hatted a').attr('data-top-kind');

        if (!(xs && hat_open && isnow !== mt)) {
          // show the links for mediatype clicked
          $('.toprow').hide();
          $('.toprow.' + mt).show();
        }

        if (!hat_open) {
          $('#nav-tophat').collapse('show'); // .. top hat is *not* open.  clicked, so open tophat

          if (AJS.tophat_dont_count_first_open) {
            delete AJS.tophat_dont_count_first_open;
          } else if (typeof archive_analytics !== 'undefined') {
            // log that a user has opened the nav tophat, yayz
            archive_analytics.send_ping({
              kind: 'event',
              ec: 'page_action',
              ea: 'nav_tophat_galactica',
              el: location.pathname,
              cache_bust: Math.random()
            });
          }
        }

        if (typeof isnow !== 'undefined') log('isnow', isnow);
        log('shouldB', mt);

        if (isnow === mt) {
          // 2nd click on same mediatype dropdown -- close tophat!
          $('#nav-tophat').collapse('hide');
          return false;
        }

        if (xs && hat_open && isnow !== mt) {
          // Mobile/xs nav and user has clicked on *another* nav/MT icon.
          // So we want to (animate) close the tophat, and when closed,
          // reopen (animate) to the right open tophat -- this is because
          // mobile/xs makes the tophat heights much more arbitrary
          // and it looks weird hard jumping to other open area at another height!
          $('#nav-tophat').one('hidden.bs.collapse', function () {
            setTimeout(function () {
              return $(navlink).click();
            }, 100);
          });
          $('#nav-tophat').collapse('hide');
          return false;
        }

        $('.navbar .dropdown-ia').removeClass('hatted').has('.' + mt).addClass('hatted');
        $('#nav-tophat').on('hidden.bs.collapse', function () {
          return $('.navbar .dropdown-ia').removeClass('hatted');
        });

        // any click makes tophat hide...
        $(document).one('click.tophat.nixer', function (event) {
          var $e = $(event.target);
          // log($e)
          if ($e.attr('id') === 'nav-wb-url') return; // ... except clicking on wayback machine form input
          if ($e.is('a')) return; // ... except clicking on a link
          if ($e.hasClass('item-img') || $e.hasClass('item-ia')) return;

          // NOTE: if not open, we wont hide
          $('#nav-tophat.in').collapse('hide');
        });

        return false;
      });
    }
  }, {
    key: 'isTouchDevice',
    value: function isTouchDevice() {
      return 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
    }
  }, {
    key: 'footer',
    value: function footer() {
      if (!AJS.isTouchDevice() && typeof $.fn.tooltip !== 'undefined') {
        $('.navbar [data-toggle="tooltip"], .container-ia [data-toggle="tooltip"], #cols [data-toggle="tooltip"], #tvbanner [data-toggle="tooltip"]').tooltip({});
        // $('body').addClass('glyphs-as-text')
      }
    }
  }, {
    key: 'wrapdark_watcher',
    value: function wrapdark_watcher() {
      // no longer needed/used but has some handy techniques...
      if (!AJS.$sharedown) {
        AJS.$sharedown = $('#sharedown');
        AJS.$wrapdark = $('#wrapdark');
      }

      // every second, sigh, check/adjust for the wrapdark height
      if (!AJS.wrapdark_watcher_ptr) AJS.wrapdark_watcher_ptr = setInterval(AJS.wrapdark_watcher, 1000);

      if (!AJS.$sharedown.length || !AJS.$wrapdark.length) {
        clearInterval(AJS.wrapdark_watcher_ptr);
        return;
      }

      var wrapdarkHT = AJS.$sharedown.offset().top + AJS.$sharedown.find('.panel-heading').innerHeight();
      if (parseInt(AJS.$wrapdark.css('height'), 10) !== wrapdarkHT) {
        AJS.$wrapdark.css({ height: wrapdarkHT }).show();
        log('       WRAPDARK-ED to ', wrapdarkHT);
      }
    }
  }, {
    key: 'mute_click',
    value: function mute_click() {
      var mutedNOW = !$.cookie('unmute');

      if (this.emulator) {
        this.emulator.setMute(!mutedNOW);
      } else {
        var player = jwplayer('jw6');
        if (player) {
          var volnow = player.getVolume();
          if (volnow) {
            AJS.mute_click_prior_volume = volnow;
            player.setVolume(0);
          } else {
            player.setVolume(typeof AJS.mute_click_prior_volume === 'undefined' ? 100 : AJS.mute_click_prior_volume);
          }
        }
      }

      $('#theatre-ia .iconochive-mute, #theatre-ia .iconochive-unmute').toggle();

      if (mutedNOW) {
        // sounds is off.  make it loud
        $.cookie('unmute', 1, { path: '/details', expires: 30 });
      } else {
        // sounds is on.  mute it!
        $.cookie('unmute', null, { path: '/details' });
      }

      return false;
    }
  }, {
    key: 'emulate_setup',
    value: function emulate_setup(game) {
      // eslint-disable-next-line  no-param-reassign
      game.toString = function () {
        return game.identifier;
      };
      AJS.emulator = new IALoader($('#canvas').get(0), game, null, game.scale ? parseFloat(game.scale) : 1, game.module.indexOf('dosbox') === 0 ? '/images/dosbox.png' : '/images/mame.png');

      $('#theatre-ia .iconochive-unmute, #theatre-ia .iconochive-mute').hide();
      if ($.cookie('unmute')) {
        $('#theatre-ia .iconochive-unmute').show();
        AJS.emulator.unmute();
      } else {
        $('#theatre-ia .iconochive-mute').show();
        AJS.emulator.mute();
      }

      AJS.theatre_controls_position();
      $(window).on('resize  orientationchange', function () {
        clearTimeout(AJS.theatre_controls_position_throttler);
        AJS.theatre_controls_position_throttler = setTimeout(AJS.theatre_controls_position, 250);
      });
    }
  }, {
    key: 'emulate',
    value: function emulate() {
      /* global  canvas  IALoader  DOSBOX  JSMESS  Module */

      // move the virtual keyboard thing and give it a "go away!" button
      $('.ui-keyboard').prepend('\n      <button style="position:relative;top:-5px;right:-8px;" type="button" class="close"\n              onclick="$(\'.ui-keyboard\').removeClass(\'showing\').hide()" aria-hidden="true">\n        <span class="iconochive-remove-circle"></span></button>').appendTo($('#emulate .posrel')).addClass('showing');

      $('#jsmessSS').fadeOut('slow');
      $('#canvasholder').css('visibility', 'visible');
      AJS.emulator.start({ hasCustomCSS: true });

      // setup the theatre-ia fullscreen button
      var EM = JSMESS || DOSBOX || false;
      if (EM && (canvas.webkitRequestFullScreen || canvas.mozRequestFullScreen || canvas.requestFullScreen)) {
        $('#gofullscreen').on('click', function () {
          return Module.requestFullScreen(1, 0);
        });
        /**/if ('onfullscreenchange' in document) document.addEventListener('fullscreenchange', EM.fullScreenChangeHandler);else if ('onmozfullscreenchange' in document) document.addEventListener('mozfullscreenchange', EM.fullScreenChangeHandler);else if ('onwebkitfullscreenchange' in document) document.addEventListener('webkitfullscreenchange', EM.fullScreenChangeHandler);
      }

      setTimeout(AJS.theatre_controls_position, 100);
      setTimeout(AJS.theatre_controls_position, 500);
      setTimeout(AJS.theatre_controls_position, 3000);
      setTimeout(AJS.theatre_controls_position, 10000);

      return false;
    }
  }, {
    key: 'theatre_controls_position',
    value: function theatre_controls_position($selectorIn, pegTop, widthIn, heightIn) {
      // We have lots of callers!  video, software, texts.
      // So sort out our args and where we gonna "peg"/glue things to...
      var $selector = $selectorIn;
      var video = heightIn && !$selectorIn;
      if (!video) {
        if (!$selectorIn) $selector = $('#canvas'); // software emulation
        if (!$selector.length) return; // protect against emulated embeds and undef...
      }

      var height = video ? heightIn : $selector.height();
      var width = video ? widthIn : $selector.width();

      if (!video && typeof pegTop !== 'undefined') $('#theatre-controls').offset({ top: pegTop });

      // Subtract out the width of the controls to get total amount of black pixels
      // to the right of the theatre object.
      // We want to position the controls in the middle of the dark pixels / right gutter!
      var right_gutter_width = Math.round(($('#theatre-ia-wrap').width() - $('#theatre-controls').width() - width) / 2);

      log('width', width);
      log('right_gutter_width', right_gutter_width);

      $('#theatre-controls').css({
        height: height,
        visibility: 'visible',
        right: Math.max(20, right_gutter_width / 2)
      });
    }
  }, {
    key: 'booksize',
    value: function booksize() {
      if (!$('#texty').length) return;

      // Use the standard theatresize function
      AJS.theatresize();

      var pollingMillis = 200;

      // Change the bg in the iframe
      var $textyiframe = $('#texty iframe');
      var changeBgColor = function changeBgColor() {
        var $contentDom = $($textyiframe.get(0).contentDocument);
        var $match = $contentDom.find('#BookReader');
        if ($match.length > 0) {
          $contentDom.find('body, #BookReader').css('background-color', 'transparent');
          return true;
        }
        return false;
      };
      if (!changeBgColor()) {
        var bgColorInterval = setInterval(function () {
          if (changeBgColor()) clearInterval(bgColorInterval);
        }, pollingMillis);
      }

      // Setup the controls
      // NOTE The attribute data-lendable-book is added in Details.inc
      var isLendableBook = typeof $('#texty').data('lendable-book') !== 'undefined';
      if (!isLendableBook && !AJS.booksize_controls_hidden) {
        AJS.booksize_controls();
        var bookSizeInterval = setInterval(function () {
          if (!AJS.booksize_controls_hidden) AJS.booksize_controls();else clearInterval(bookSizeInterval);
        }, pollingMillis);
      }
    }

    // Hides the book controls, per david!
    // Also positions the "theatre controls"

  }, {
    key: 'booksize_controls',
    value: function booksize_controls() {
      var $iframe = $('iframe:first');
      if (!$iframe.length) return;
      var $iframeDOM = $($iframe.get(0).contentDocument);
      if (!$iframeDOM.length) return;

      if (!AJS.booksize_controls_hidden) {
        if (!$iframeDOM.find('#BRnav').length) {
          log('BOOK NOT READY YET');
          return;
        }
        if ($iframeDOM.find('#BRtwopageview').length > 0) {
          // Only hide nav in 2up. Show it in 1up
          $iframeDOM.find('#BRnav').hide();
        }
        AJS.booksize_controls_hidden = true;
        $('#texty iframe').css('visibility', 'visible');
        log('BOOK CONTROLS HIDDEN!');
      }

      $iframeDOM.find('body, #BookReader').css('background-color', 'transparent');

      // now position the theatre controls
      var $book = $iframeDOM.find('#BRtwopageview, #BRpageview');

      // compute where the logical top point should be for the book and for the controls
      // (which is comparable to A/V items)
      var $navbar = $('.navbar');
      // NOTE: we *do* check the nav top (almost always 0!) for rare cases we have a banner
      // *ABOVE* the navbar, eg: EOY donate banner campaign (which is above the nav)!
      var pegTop = $navbar.offset().top + $navbar.height() + parseInt($('#texty').css('padding-top'), 10);
      AJS.theatre_controls_position($book, pegTop);
      log('book top', $iframe.offset().top + $book.offset().top, ' -v- pegTop', pegTop);

      // and now dont overflow negative margin-bottom blackness into metadata section
      $('#theatre-ia').css({ overflow: 'hidden' });
    }
  }, {
    key: 'popcornsize',
    value: function popcornsize() {
      var resizer = function resizer() {
        var metadataHeight = 100; // metadata peekaboo min height!
        var maxH = $(window).height() - $('iframe:first').offset().top - metadataHeight;
        var maxW = $('#theatre-ia .row').outerWidth();
        // make max height at most 16x9 ratio (43px is the popcorn controls height)
        var WH = { width: maxW, height: Math.min(maxH, maxW * 9 / 16 + 43) };
        log('popcorn resize: ', WH);
        $('iframe:first').css(WH); // resize popcorn
      };
      resizer(); // page load event is now
      $(window).on('resize  orientationchange', function () {
        clearTimeout(AJS.popcorn_throttler);
        AJS.popcorn_throttler = setTimeout(resizer, 250);
      });
    }

    /**
     * A general purpose theatre sizing function.
     * It keeps the metadata below the theatre partially visible.
     * @param {function} onChange - called when size changes
     * @global AJS.theatresize_maxheight if this is set by another
     *   part of the code, it will contrain to this max height.
     */

  }, {
    key: 'theatresize',
    value: function theatresize(onChange) {
      if (!AJS.theatresize_maxheight) AJS.theatresize_maxheight = null;
      var resizer = function resizer() {
        var metadataHeight = 100; // metadata peekaboo min height!
        var maximumHeight = 1000; // don't get larger than this
        var minHeight = Math.min($(window).width(), 400);
        var targetHeight = $(window).height() - $('#navwrap1').height() - metadataHeight;

        if (AJS.theatresize_maxheight) targetHeight = Math.min(targetHeight, AJS.theatresize_maxheight);

        targetHeight = Math.max(targetHeight, minHeight);
        var height = Math.min(targetHeight, maximumHeight);
        $('#theatre-ia-wrap').addClass('resized').css('height', height);

        if (onChange) onChange($('#theatre-ia-wrap').height());
      };
      resizer(); // page load event is now
      $(window).on('resize  orientationchange', function () {
        clearTimeout(AJS.theatresize_throttler);
        AJS.theatresize_throttler = setTimeout(resizer, 250);
      });
    }

    /**
     * Will reduce the vertical size of the carousel once all the images have
     * downloaded and only if they are all smaller than the current size.
     * This is a progressive enhancement
     * @param string selector
     * @param bool enableThreatreChange
     */

  }, {
    key: 'carouselsize',
    value: function carouselsize(selector, enableThreatreChange) {
      var $carousel = $(selector);
      var imagePromises = $carousel.find('img.carousel-image').map(function (i, img) {
        var promise = $.Deferred();
        var result = void 0;
        if (img.complete) {
          result = promise.resolve(img.naturalHeight).promise();
        } else {
          img.addEventListener('load', function () {
            promise.resolve(img.naturalHeight);
          });
          result = promise;
        }
        return result;
      });
      $.when.apply($, _toConsumableArray(imagePromises)).then(function () {
        var currHeight = $carousel.height();
        var maxImageHeight = Math.max.apply(Math, arguments);
        if (currHeight > maxImageHeight) {
          $carousel.css('maxHeight', maxImageHeight);
          if (enableThreatreChange) {
            AJS.theatresize_maxheight = maxImageHeight;
            $(window).trigger('resize');
          }
        }
      });
    }
  }, {
    key: 'pause',
    value: function pause() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jw6';

      var jw = jwplayer(id);
      if (jw && jw.getState && jw.getState().toLowerCase() === 'playing') jw.pause();
    }
  }, {
    key: 'morf',
    value: function morf(lnk, switchToA2Z) {
      // MORe Facets
      var href = $(lnk).attr('href');

      if (switchToA2Z && switchToA2Z[0] === '-') $.cookie(switchToA2Z.substr(1).concat('A2Z'), 1, { path: '/', expires: 1 });else if (switchToA2Z) $.cookie(switchToA2Z.concat('A2Z'), null, { path: '/', expires: 1 });

      var props = { selectorID: 'morf-modal' };
      var selector = '#' + props.selectorID;

      var contents = React.createElement(
        'div',
        { className: 'modal-dialog' },
        React.createElement(
          'div',
          { className: 'modal-content' },
          React.createElement(
            'div',
            { className: 'modal-header modal-header-std' },
            React.createElement(
              'button',
              { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
              React.createElement('span', { className: 'iconochive-remove-circle' })
            ),
            React.createElement('h2', { className: 'modal-title' })
          ),
          React.createElement('div', { className: 'modal-body', id: props.selectorID.concat('-body') })
        )
      );
      if (!$(selector).length) $('body').prepend($('<div id="' + props.selectorID + '" class="modal fade" role="dialog" aria-hidden="true"/>'));

      ReactDOM.render(contents, $(selector).get(0));
      $(selector).modal('show');

      ReactDOM.render(React.createElement(AJS.MORFreact, { href: href }), $(selector + '-body').get(0));

      return false;
    }
  }, {
    key: 'add2list',
    value: function add2list(lnk) {
      var href = $(lnk).attr('href');

      $.get(href + '&headless=1&titlelist=' + $(lnk).text(), function (htm) {
        // dynamically add modal to page (if isnt there already)
        AJS.modal_go(lnk, {
          title: 'Add To List',
          headerClass: 'modal-header-new-list',
          ignore_lnk: true,
          auto_remove: true,
          body: htm
        });
      });

      return false;
    }
  }, {
    key: 'newlist',
    value: function newlist(lnk) {
      var href = $(lnk).attr('href');

      $.get(href.concat('&headless=1'), function (htm) {
        // dynamically add modal to page (if isnt there already)
        AJS.modal_go(lnk, {
          title: 'Create New List',
          headerClass: 'modal-header-new-list',
          ignore_lnk: true,
          body: htm
        });
      });

      return false;
    }
  }, {
    key: 'newlist_submit',
    value: function newlist_submit() {
      // Strings with SPACE characters will be changed to "camel case".
      // For example:
      //    "my LA roadtrip"
      // will become:
      //    "MyLaRoadtrip"
      // Letters, numbers, periods (.), dashes (-), or underscores (_) are ok, but
      // other characters will be removed.
      var title = $('#new-list-form input[name=title]').val();
      if (!title.length) {
        // eslint-disable-next-line  no-alert
        alert('Please enter a title for your List');
        return false;
      }

      // turn the title into an acceptable identifier
      // (1) remove any "bad" chars
      // (2) trim any *leading* chars like:  - _ .
      var cleaned = title.replace(/[^a-zA-Z0-9_\-.]/g, '').replace(/^[_\-.]+/, '');
      log(cleaned);

      if (!cleaned.length) {
        // eslint-disable-next-line  no-alert
        alert('Please try another title that contains more alphanumeric characters');
        return false;
      }

      return true;
    }
  }, {
    key: 'popover_menu',
    value: function popover_menu(selector, opts) {
      // setup options
      var options = {
        trigger: 'hover focus click', // make accessible
        container: selector,
        content: opts.content,
        html: true
        // do not overwrite values given by the 'data-' attribute
      };if (opts.title) options.title = opts.title;
      if (opts.placement) options.placement = opts.placement;
      if (opts.trigger) options.trigger = opts.trigger;

      // setup popover
      $(selector).popover(options);
    }

    // makes the tooltip show for picking dates

  }, {
    key: 'date_switcher',
    value: function date_switcher(htm) {
      var selector = '#date_switcher';

      // make a tooltip trigger manually, on hover, but then *hold it showing*
      // until they leave area *including* tooltip itself
      $(selector).tooltip({
        html: true,
        trigger: 'manual', // we gonna control hover behaviour
        placement: 'bottom',
        title: htm
      }).on('mouseenter focusin', function date_switcher_hover() {
        // check first if already showing, to avoid "flickering" with "show! .. show!"
        if (!$(selector).parent().find('.tooltip').length) $(this).tooltip('show');
      });

      // the date_switcher lives inside bigger "sortbar".  the date changing tooltip
      // lives inside it (and hangs off it).  So what we *really* want as the trigger
      // to hide the date change tooltip is the entire sortbar itself.  nice!
      $('.sortbar').on('mouseleave', function () {
        log('not hovering sortbar anymore');
        $(selector).tooltip('hide');
      });

      $(selector).on('shown.bs.tooltip', function () {
        // make any link hit change which one is "in"
        // (just before page starts to reload)  finesse!
        $(selector).parent().find('.date_switcher').on('click', function date_switcher_click() {
          $(this).parents('.tooltip').find('.date_switcher.in').removeClass('in');
          $(this).addClass('in');
        });
      });
    }

    // NOTE: UNUSED BUT KEPT IN CASE WE EVER GO BACK FROM NEWER/BETTER CSS-ONLY SOLUTION!
    //
    // [ Now we use CSS to (max-/)width C2 and C4 *instead* for a much better user experience
    //   AND for a more efficient / kinder to browser non-JS solution! ]

  }, {
    key: 'tiles_to_list',
    value: function tiles_to_list() {
      /*
        First, allow natural HTM/CSS widths of 3 of 5 "table-cell" display type columns
          C1         C234      C5
          VIEWS  ..  DATE  ..  MT-ICON
           Compute width of "C234" - width of C3/DATE.
          Split TITLE (C2) and CREATOR (C4) max-width into
          60% / 40% split of that #pixels.
      */

      // NOTE: there can be 2+ sets of results on a page -- eg: "My Library" page!
      var selector = AJS.selector();
      var $selector = $(selector).first();
      log('lister() SELECTOR', selector);

      var C3 = $selector.find('.results .item-ia:first   .C3').outerWidth();
      var C234 = $selector.find('.results .item-ia:first .C234').outerWidth();

      // the "-20" was empirically observed / made up -- get some science, girl!
      var availWidth = C234 - C3 - 20;
      var C2 = Math.max(80, Math.round(0.6 * availWidth));
      var C4 = Math.max(80, Math.round(0.4 * availWidth));
      log('C3  ', C3);
      log('C234', C234);
      log('C2  ', C2);
      log('C4  ', C4);
      log(' ==> availWidth: ', availWidth, '(', C2, '+', C4, ')');

      $selector.find('.results .item-ia .C2').css({ width: C2, 'max-width': C2 });
      $selector.find('.results .item-ia .C4').css({ width: C4, 'max-width': C4 });
    }

    // We moved to newer tactic Mar2015...
    // Pages are emitted by default with body classes "lists" and "showdetails".
    // We use JS to toggle/remove them and switch off details or switch to "tiles" mode.

  }, {
    key: 'lists_v_tiles_setup',
    value: function lists_v_tiles_setup(cookie_range) {
      // does user have any cookied preferences?
      var defaults = 'tiles'; // (cookie_range === 'search' ? 'lists' : 'tiles')
      var prefer = $.cookie('view-' + cookie_range);
      var showdetails = $.cookie('showdetails-' + cookie_range);

      var checked = showdetails === 'showdetails' || showdetails === null && defaults === 'lists';

      if (prefer === 'lists' || !prefer && defaults === 'lists') {
        if (checked) return; // perfect, we are already what they want
        $('body').removeClass('showdetails'); // they dont want full details right now
      } else {
        // switch to "tiles" mode
        $('body').removeClass('lists'.concat(checked ? '' : ' showdetails')).addClass('tiles');
      }
    }
  }, {
    key: 'showdetails_toggle',
    value: function showdetails_toggle(btn, cookie_range) {
      var $body = $('body');

      var to = $body.hasClass('showdetails') ? '' : 'showdetails';
      log('showdetails_toggle() going to: ', to);

      $.cookie('showdetails-' + cookie_range, to, { path: '/', expires: 30, domain: '.archive.org' });

      $body.toggleClass('showdetails');
    }
  }, {
    key: 'tiles_toggle',
    value: function tiles_toggle(btn, cookie_range) {
      var $body = $('body');

      var to = $body.hasClass('tiles') ? 'lists' : 'tiles';
      log('tiles_toggle() going to', to);

      $body.removeClass('lists tiles').addClass(to);
      AJS.tiler();

      $.cookie('view-' + cookie_range, to, { path: '/', expires: 30, domain: '.archive.org' });

      return false;
    }

    // Returns one of these, like "#ikind-[IKIND]"
    //
    // COLLECTION PAGES, ACCOUNT PAGES:
    //
    //   #ikind--downloads
    //   #ikind--titleSorter
    //   #ikind--publicdate
    //   #ikind--date
    //   #ikind--reviewdate
    //   #ikind--updatedate
    //   #ikind--creatorSorter
    //
    //   #ikind-downloads
    //   #ikind-titleSorter
    //   #ikind-publicdate
    //   #ikind-date
    //   #ikind-reviewdate
    //   #ikind-updatedate
    //   #ikind-creatorSorter
    //
    // ACCOUNT PAGES (additionally):
    //
    //   #ikind-loans-waiting-list
    //   #ikind-loans-on-loan
    //   #ikind-loans-history
    //
    // OTHER:
    //
    //   #ikind-search              (search)
    //

  }, {
    key: 'selector',
    value: function selector() {
      var inTab = $('.welcome .tabby.in .tabby-text').first().text().toLowerCase().trim();
      if (inTab === 'forum' || inTab === 'posts' || inTab === 'about') return false; // no tab of tiles are showing

      var selector = false;
      if (inTab) {
        // We want to end up with a selector like:
        //    #ikind-collections-title
        //    #ikind--publicdate
        log('inTab', inTab);
        var tmp = '#tabby-' + inTab.replace(' ', '-');
        if (inTab === 'collection' || inTab === 'collections' || inTab === 'uploads' || inTab === 'reviews' || inTab === 'web archives') {
          selector = '#'.concat($(tmp.concat(' div.ikind.in:first')).attr('id'));
        } else {
          var ikind = $(tmp.concat(' .ikind.stealth.in:first')).text().toLowerCase().replace(/ /, '-');
          selector = '#ikind-' + inTab + (ikind === '' ? '' : '-') + ikind;
        }
      } else {
        // we want to end up with a selector like:
        //    #ikind-date
        selector = '#ikind-'.concat($('.ikind.stealth.in:first').text().toLowerCase().replace(/ /, '-'));
        if (!$(selector).length) selector = '#ikind-search'; // xxx  SHORE THIS UP, GIRL!
      }

      log('SELECTOR', selector);

      return selector;
    }

    // function that finds alternate (non-AJS.tiler()) sets of item tiles,
    // that are laid out in strips/columns and will hide entire columns
    // if they fall off the right side, in terms of fitting to browser/page width

  }, {
    key: 'tilebars',
    value: function tilebars() {
      // iterate over all row classes that have at least 1 .tilebars .results div in them...
      $('.row .tilebars').find('.results').parents('.row').each(function (k, row) {
        var first = false;
        $(row).find('.results').each(function (key, val) {
          $(val).show().css({ visibility: 'hidden' });
          if (!first) first = $(val).offset();
          if ($(val).offset().top !== first.top) $(val).hide();else $(val).css({ visibility: 'visible' });
        });
        // if (first) $(row).find('.tilebars > h4').css({'padding-left':first.left+10})
      });
    }

    // adds collection parent hovering image and text to tiles

  }, {
    key: 'parent_hover',
    value: function parent_hover($selector) {
      $selector.find('.item-ia:not(.hov):not(.collection-ia):not(.account-ia)').addClass('hov').mouseover(function (e) {
        return $(e.currentTarget).find('.item-parent').addClass('hoverin');
      }).mouseout(function (e) {
        return $(e.currentTarget).find('.item-parent').removeClass('hoverin');
      });
    }
  }, {
    key: 'tiler',
    value: function tiler(selectorIn, noRecall) {
      var tileMarginH = 30;
      var tileMarginW = 17;

      // See lister() for why this is able to be commented out now!
      // $('.results .item-ia .C2, .results .item-ia .C4').css({'width':'','max-width':''});
      if (!$('body').hasClass('tiles')) {
        if ($('body').hasClass('showdetails')) $('.sortbar input[name=showdetails]').prop('checked', true);
        // AJS.lister()
      }

      var selector = selectorIn || AJS.selector();
      if (selector === false) return;

      var $selector = $(selector).first();
      var selectorID = $selector.attr('id');
      var $parentRow = $selector.parents('.row');

      // CSS Grid tiler experiment.  OFF/unused.
      // This could be a way to drop much of the JS to do our 'masonic' tiling by leveraging
      // CSS Grid row 'strips' and space the tile to the closest overall height of narrow rows
      // instead of JS-based calculations for absolute 'top' positioning.
      var cssGrid =  false && false;

      if (!$('body').hasClass('tiles')) {
        $parentRow.css({ 'padding-left': '', 'padding-right': '' });
        return;
      }

      if (!AJS.tilerPREV) {
        // first time tiling page!
        AJS.tilerPREV = {
          winW: 0,
          pad: 0,
          nPerRow: 1,
          gutter: tileMarginW,
          tileWidth: AJS.TILE_WIDTH,
          unsourced: {},
          firstLeft: 0
        };

        AJS.parent_hover($selector);
      }

      if ($(window).width() !== AJS.tilerPREV.winW) {
        // First time, or page resize/orientation change.
        // We will effectively "cache" all this adjusting computations, so multiple calls to tiler()
        // can reuse if window width hasnt changed
        // (for efficiency, eg: many images still slowly loading..)
        $parentRow.css({ 'padding-left': '', 'padding-right': '' }); // reset (see below)
        AJS.tilerPREV.firstLeft = 0; // reset (see below)

        var $facets = $parentRow.find('.columns-facets:visible');
        var facetsWidth = $facets.outerWidth() || 0;
        if (facetsWidth) facetsWidth += 1 + parseInt($facets.css('padding-right'), 10); // add columns-items gutter
        var availWidth = $parentRow.width() - facetsWidth;
        var gutter = availWidth < 400 ? 5 : tileMarginW;
        var tileWidth = $('.item-ia:first').outerWidth() >= AJS.TILE_WIDTH ? AJS.TILE_WIDTH : AJS.TILE_WIDTH_SMALL;
        var nPerRow = Math.max(1, Math.floor((availWidth + gutter) / (tileWidth + gutter)));
        var extra = Math.max(0, availWidth - nPerRow * (tileWidth + gutter) + gutter);

        log('tiling', selectorID, 'parentRowW', $parentRow.width(), 'facetsWidth', facetsWidth, 'availWidth: ', availWidth, 'number per row', nPerRow, '. ', 'With gutter margin', gutter, 'had ', extra, 'extra pixels');
        AJS.tilerPREV.pad = Math.round(extra / 2);

        AJS.tilerPREV.winW = $(window).width();
        AJS.tilerPREV.nPerRow = nPerRow;
        AJS.tilerPREV.gutter = gutter;
        AJS.tilerPREV.tileWidth = tileWidth;
      }

      if (!cssGrid) {
        if (AJS.tilerPREV.nPerRow > 1) $parentRow.css({ 'padding-left': AJS.tilerPREV.pad, 'padding-right': AJS.tilerPREV.pad });else AJS.tilerPREV.firstLeft = AJS.tilerPREV.pad;
      }

      var nImgZeroHeight = 0;
      var nImgZeroHeightAry = [];
      var maxtop = 0;
      var tops = { 0: 0 };
      var lefts = { 0: AJS.tilerPREV.firstLeft };
      if (!cssGrid) {
        for (var i = 1; i < AJS.tilerPREV.nPerRow; i++) {
          lefts[i] = lefts[i - 1] + AJS.tilerPREV.gutter + AJS.tilerPREV.tileWidth;
          tops[i] = 0;
        }
      }

      // Any item tiles w/ unloaded/set src tags get updated and loaded now!
      // Only have to do this pass on a swathe of new results (1st page or infin scroll set added)
      if (!AJS.tilerPREV.unsourced[selectorID]) {
        log('unsourcing', selectorID);
        // eslint-disable-next-line  prefer-arrow-callback
        $selector.find('.item-ia img[source]').each(function tiler_unsourcing(k, v) {
          $(v).attr({
            src: $(v).attr('source'),
            onError: '$(this).attr("src","/images/notfound.png")'
          }).removeAttr('source');
        });
        AJS.tilerPREV.unsourced[selectorID] = 1;
      }

      if (cssGrid) $selector.find('.results').removeClass('grid-tiles'); // we need to let tiles size naturally first
      else AJS.colPREV = -1; // we track where previous tile was placed

      $selector.find('.item-ia').not('.mobile-header').css('visibility', 'hidden').each(function (idx, val) {
        var $val = $(val);
        var $valHT = $val.innerHeight();
        // log('$valHT', $valHT)

        var css = {};
        if (cssGrid) {
          log($valHT + ' span: ' + Math.ceil(($valHT + 25) / 35));
          css['grid-row-end'] = 'span ' + Math.ceil(($valHT + 25) / 35);
        } else {
          var col = 0;
          if (AJS.tilerPREV.nPerRow > 1 && idx >= AJS.tilerPREV.nPerRow) {
            // First, cycle from last placed tile column location to "first cycled slot".
            // (That is, move "1 to right" from last placed tile column, but it's a cycle/ring
            // for final column -- go to 1st column in that case).
            // Test place new tile *there* (in "first cycled slot") UNLESS further ahead in
            // cycle/ring of other slots, the tile will fit where its BOTTOM will be above where
            // tile TOP would be in the "first cycled slot".
            // (and pick the "first" in such a case if 2+ slots like that)
            var colTEST = (AJS.colPREV + 1) % AJS.tilerPREV.nPerRow;
            col = colTEST; // fallback/default
            var cmpTEST = tops[colTEST] - $valHT; // [slightly more efficient way 2 compare]
            for (var _i = 0; _i < AJS.tilerPREV.nPerRow; _i++) {
              if (_i !== colTEST && cmpTEST > tops[_i]) {
                col = _i;
                break;
              }
            }
          } else {
            col = idx % AJS.tilerPREV.nPerRow;
          }
          AJS.colPREV = col;
          css.visibility = 'visible';
          css.top = tops[col];
          css.left = lefts[col];

          // setup for next tile...
          tops[col] += $valHT + tileMarginH;

          maxtop = Math.max(maxtop, tops[col]);
        }

        $val.css(css);

        // track how many tile images are without height
        // (either not loaded or no CSS height style set if img not loading from DB)
        var tmp = $val.find('.item-img');

        if (tmp.length && !$val.find('.item-img').height()) {
          nImgZeroHeight += 1;
          tmp = $val.attr('data-id');
          if (tmp) nImgZeroHeightAry.push(tmp);
        }
      });

      if (cssGrid) {
        $selector.find('.results').addClass('grid-tiles');
        $selector.find('.item-ia').css({ visibility: 'visible' });
      } else {
        // we have to manually set the height of the "selector"
        log('maxtop', maxtop);
        $selector.find('.results').css({ height: maxtop });
      }

      if ($('body').hasClass('manage')) {
        $('.item-ia:not(.removable)').addClass('removable').append('\n        <div class="xer" onclick="return AJS.unmanage(this)" title="remove item from being submitted to item management"></div>');
      }

      if (nImgZeroHeight && !noRecall) {
        log(nImgZeroHeight, ' img (still w/o height); recall tiler(', selector, ')...', nImgZeroHeightAry.join(','));
        // recall ourselves, but not more than once every 1.5 seconds!
        clearTimeout(AJS.tiler_throttler);
        AJS.tiler_throttler = setTimeout(function () {
          return AJS.tiler(selector, 0);
        }, 1500);
      }
    }
  }, {
    key: 'ikind',
    value: function ikind(lnk, id) {
      var idsel = '#' + id;
      log('ikind', id);
      $(idsel).parent().find('div.ikind.in').hide();
      $(idsel).removeClass('hidden').addClass('in').show();
      $(idsel).parents('.tabby-data').find('a.ikind').removeClass('in');

      $(lnk).addClass('in');

      AJS.tiler(idsel);

      // now select the corresponding element in the shadowing select for mobile
      var $sel = $(idsel).parents('.tabby-data').find('select.ikind-mobile');
      var $new = $sel.find('option:contains('.concat($(lnk).text(), ')'));
      var $now = $sel.find('option:selected');
      if ($new.text().trim() !== $now.text().trim()) {
        log('changing ikind mobile now to ', $new.text());
        AJS.ikind_mobile_change_ignore_next = true;
        $new.attr('selected', 'selected');
        // $now.removeAttr('selected')
      }

      return false;
    }
  }, {
    key: 'ikind_mobile_change',
    value: function ikind_mobile_change(elm) {
      if (AJS.ikind_mobile_change_ignore_next) {
        AJS.ikind_mobile_change_ignore_next = false;
        return;
      }

      var $selopt = $(elm).find('option:selected');
      log('ikind mobile changed to: ', $selopt.text());
      var $ikinds = $(elm).parents('.tabby-data').find('a.ikind');
      if (!$ikinds.length) {
        // NO tabby!  eg: top page or search page
        $ikinds = $('body').find('a.ikind');
      }

      if (!$ikinds.length) return; // uho!

      var $ikind = $ikinds.filter(function (k, v) {
        return $(v).text() === $selopt.text();
      });

      var href = $ikind.attr('href');
      log('goto', href);

      if (href) {
        if (href.substr(0, 1) === '#') {
          // ACCOUNT PAGE (FOR NOW)!  (STILL USES HASH FOR NOW)
          $('a.ikind[data-id=' + href.substr(1) + ']').click();
        } else {
          location.href = href;
        }
      }
    }
  }, {
    key: 'popState',
    value: function popState(pageType) {
      // are we watching history.pushState() and history.popState() calls?
      AJS.pushState = typeof history.pushState !== 'undefined';
      log('popState(', pageType, ') called, modern browser: ', AJS.pushState ? 'y' : 'n');

      if (pageType) // anything custom we need to do based on pageType?
        return;

      var tabPick = function tabPick(hash2arg) {
        var tab = AJS.arg('tab', true);
        if (tab) tab = '#tabby-' + tab + '-finder';else if (hash2arg) tab = '#tabby-' + hash2arg + '-finder';else tab = '.tabby-default-finder';

        if (AJS.pushState) log('goto tab: ', tab, ' ################################################### STATE');
        AJS.tabby_no_pushState_next_click = true;
        $(tab).click();
      };

      if (AJS.pushState) {
        // runs on page load or browser "back":
        $(window).on('popstate', function () {
          return tabPick();
        });
      }
      // else user has an older browser or Opera Mini and doesn't have pushState/popState!

      tabPick();
    }
  }, {
    key: 'tabby',
    value: function tabby(lnk, id) {
      log('AJS.tabby()', id);
      var inTab = id.replace(/tabby-/, '').trim();
      if (inTab === 'uploads' || inTab === 'reviews' || inTab === 'collections' || inTab === 'loans' || inTab === 'web archives') {
        // account pages -- we need to fully reload page w/ new/wanted item tiles!
        return true;
      }

      // Only collection pages have tabs / proceed
      // All three tabs have all the markup on the page already.
      // So, for modern browsers, we will simply switch the visibile
      // tab and update-in-place the url in the browser url typein
      // -- WITHOUT refreshing the page.

      $('.tabby-data.in').removeClass('in').hide();
      $('#' + id).removeClass('hidden').addClass('in').show();
      $('.tabby').removeClass('in');
      $(lnk).parents('.tabby').addClass('in');

      if (AJS.tabby_no_pushState_next_click) {
        delete AJS.tabby_no_pushState_next_click;
      } else if (AJS.pushState && typeof history.pushState !== 'undefined') {
        var href = $(lnk).attr('href');
        var locNOW = location.href;
        var locNEW = location.protocol.concat('//', location.host, href);
        if (locNOW !== locNEW) {
          log('pushState: ', href, ' ################################################### STATE');
          history.pushState({}, '', locNEW);
        }
      }

      if (inTab === 'collection' || inTab === 'about') {
        // collection pages
        if (inTab === 'about') AJS.grafs();
        AJS.tiler();
      }

      if (AJS.pushState) return false;
      return true;
    }
  }, {
    key: 'colclick',
    value: function colclick(e) {
      var $e = $(e);
      var id = $e.attr('data-id');

      // *NORMALLY* clicking on a collection tile goes to it.
      // BUT NOT:
      //   * in lists mode (only the identifier link does that -- not other data columns!)
      //   * if in process of removing items (eg: from favorites list)
      if (id && $('body').hasClass('tiles') && !$e.hasClass('removable')) location.href = '/details/' + id;
    }

    /**
     * Processing to get related item using new API, Get response and Render using React component
     */

  }, {
    key: 'setUpRelatedItems',
    value: function setUpRelatedItems() {
      var alsoFoundElement = $('#also-found-result');

      // GET top offset of #also-found(related item section) and executing ajax call accordingly
      if (alsoFoundElement.length !== 0) {
        var $window = $(window);

        var throttledListener = throttle(function () {
          var alsoFound = $('#also-found');
          var topOffset = alsoFound.offset().top;
          var windowHeight = $window.height();
          // One half screen above the top of the element
          var lazyLoadStart = topOffset - windowHeight / 2;

          if ($window.scrollTop() + windowHeight >= lazyLoadStart) {
            if (alsoFoundElement.text() === '') {
              // Show the tilebars, now that we've started loading
              alsoFound.find('.tilebars').show();

              ReactDOM.render(React.createElement(AJS.LoadingMessage, { message: 'Fetching items' }), alsoFoundElement[0]);

              AJS.doWhenScrolledToRelatedSection()
              // Remove listener after it loads
              .then(function () {
                return $window.off('scroll', throttledListener);
              });
            }
          }
        }, 100);

        $window.scroll(throttledListener);
      }
    }

    /**
     * Get API response from AJS.getRelatedItems() after #also-found-result scrolled and
     * render response using react component
     *
     * @return {Promise}
     */

  }, {
    key: 'doWhenScrolledToRelatedSection',
    value: function doWhenScrolledToRelatedSection() {
      var identifier = $('#also-found').data('identifier');
      var alsoFoundElement = $('#also-found-result');

      return AJS.getRelatedItems(identifier).then(function (response) {
        // Sending dataHash to React Componenet to render HTML of related items section
        ReactDOM.render(React.createElement(AJS.RelatedItemSection, { dataHash: response }), alsoFoundElement[0]);

        // Set visibility:hidden of tiles for 2nd+ row esp. for narrower pages
        AJS.tilebars();
      }).catch(function (error) {
        // Show messsage when similar items not found.
        // Show the related items section, so we can display error
        $('#also-found').show();
        ReactDOM.render(React.createElement(AJS.ErrorMessage, { errorMsg: error.message }), alsoFoundElement[0]);
      });
    }

    /**
     * API call to get related item and return response using Promise
     *
     * @param  {String} identifier item identifier
     * @param  {Number} size number of item results (6 is the default)
     * @return {Promise<Array|String>}
     */

  }, {
    key: 'getRelatedItems',
    value: function getRelatedItems(identifier, size) {
      return new Promise(function (resolve, reject) {
        var args = { size: size };
        var apiUrl = 'https://be-api.us.archive.org/mds/v1/get_related/all/' + encodeURIComponent(identifier) + (size ? '?' + $.param(args) : '');
        var hashData = [];
        var apiError = false;

        $.get(apiUrl, function (response) {
          var items = [];
          try {
            items = response.hits.hits;
            if (items.length === 0) apiError = true;
          } catch (error) {
            apiError = true;
          }

          if (apiError) {
            // Return error message to Promise when response is empty OR key not exists
            reject(new Error('Similar items not found'));
            return;
          }

          items.forEach(function (item) {
            /* eslint no-underscore-dangle:
            [error, { "allow": ["_id", "_source", "_modal_add"] }] */
            var itemSource = item._source;
            var singleHash = {
              identifier: item._id,
              numReviews: 0,
              lendingEnabled: false,
              lendingAvailable: false,
              loginRequired: false,
              lendClass: '',
              favorite: 0,
              creator: ''
            };

            $.each(itemSource, function (key, value) {
              if (key === 'downloads') singleHash.downloads = [value[0]];

              if (key === 'title') singleHash.title = [value[0]];

              if (key === 'mediatype') singleHash.mediatype = [value[0]];

              if (key === 'creatorSorter') {
                // Replacing first character lower to CAPTIAL of each creator name.
                // E.g goldsmith TO Goldsmith
                value[0].replace(/\w\S*/g, function (txt) {
                  singleHash.creator += txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase().concat(' ');
                });
              }

              if (key === 'collection') {
                // Counting number of favorite colllections
                value.forEach(function (val) {
                  singleHash.favorite += (val.match(/fav-/g) || []).length;
                });

                if (value.indexOf('loggedin') > 0) singleHash.loginRequired = true;
              }

              if (key === 'loans__status__status') {
                singleHash.lendingEnabled = true;
                if (value[0] === 'AVAILABLE') {
                  singleHash.lendingAvailable = true;
                  singleHash.lendClass = 'lending-available';
                } else {
                  singleHash.lendClass = 'lending-checked-out';
                }
              }

              if (key === 'num_reviews') singleHash.numReviews = [value[0]];
            });

            hashData.push(singleHash);
          });
          resolve(hashData); // Return related items hashData using Promise
        }).error(function () {
          reject(new Error('Similar items not found')); // Return error message to Promise when any error found
        });
      });
    }
  }, {
    key: 'list_remove_item',
    value: function list_remove_item(xer) {
      if ($('body').hasClass('lists')) $('.tiles-button:visible').click(); // sorry!  only works in tiles mode now...


      if (!xer) {
        if (!$('.item-ia .xer').length) {
          // make all items editable
          $('.item-ia').addClass('removable').append('<div onclick="AJS.list_remove_item(this)" class="xer" alt="remove this item from list" title="remove this item from list"></div>');
        } else {
          // cancel editability
          $('.item-ia').removeClass('removable');
          $('.item-ia .xer').remove();
        }
      } else {
        // single item is slated for utter destruction from the list...
        var $item = $(xer).parents('.item-ia');
        var idX = $item.attr('data-id');
        var url = location.href.replace(/#.*$/, '').concat('?remove_item=', encodeURIComponent(idX));
        // Use the most recent update date to help uniquely identify the item!
        if ($item.attr('data-date')) url += '&data-date=' + $item.attr('data-date');
        if (AJS.listkind) url += '&kind=' + AJS.listkind;
        log('GET', url);

        $.get(url, function (htm) {
          log('GOT', url);
          log(htm);
          $item.remove();
          AJS.tiler();
        });
      }
      return false;
    }

    // remove an element from a search results page

  }, {
    key: 'unmanage',
    value: function unmanage(xer) {
      $(xer).parent('.item-ia').next().remove(); // remove item list portion
      $(xer).parent('.item-ia').remove(); // remove item tile portion
      return false;
    }

    // submits search results items to item manager for invoking operations on the list

  }, {
    key: 'manage',
    value: function manage() {
      // get list of all (remaining) identifiers in a search results page
      var ids = $('.item-ia[data-id]').toArray().reduce(function (a, b) {
        var id = $(b).attr('data-id');
        if (id === '__mobile_header__') return a;
        return a.concat(id, ',');
      }, '');
      log('MANAGE', ids);

      if (ids !== '') {
        // now make a form that we can POST to, with all the identifiers,
        // and post to /manage/ page
        var $form = $('\n        <form id="manage-ids" method="POST" action="/manage/"\n              style="visibility:hidden;position:absolute;top:0;left:0;width:1px;height:1px;">\n          <input type="text" name="identifier" value="' + ids + '"/>\n        </form>');
        $('body').append($form); // NOTE: firefox needs it in DOM to submit
        $form.submit();
      }
      return false;
    }
  }, {
    key: 'head_img_dragdrop_setup',
    value: function head_img_dragdrop_setup(identifier) {
      if (AJS.head_img_dragdrop_setup_done) return;
      log('head_img_dragdrop_setup');
      AJS.head_img_dragdrop_setup_done = true;

      $('#file-dropper-wrap').bind('mouseenter', function () {
        log('enter');
        AJS.head_img_replaceable(identifier);
        $('#file-dropper').show();
      }).bind('mouseleave', function () {
        log('ouddie');
        if (!AJS.file_picked) $('#file-dropper').hide();
      });

      $('body').bind('dragover', function (evt) {
        // enable file dropping
        log('dragover');
        evt.stopPropagation();
        evt.preventDefault();

        AJS.head_img_replaceable(identifier);
        $('#file-dropper').addClass('drag_over').show();
        return false;
      });

      $('body').bind('dragleave', function (evt) {
        log('dragleave');

        // are we still over a file-dropper div/img?
        var over = $('#file-dropper-wrap').is(':hover') || $('#file-dropper     ').is(':hover') || $('#file-dropper-img ').is(':hover');
        var x = evt.pageX || evt.originalEvent.pageX;
        var y = evt.pageY || evt.originalEvent.pageY;
        if (!over) {
          var e = $('#file-dropper-wrap');

          var _e$offset = e.offset(),
              left = _e$offset.left,
              top = _e$offset.top;

          if (x >= left && x <= left + e.outerWidth() && y >= top && y <= top + e.outerHeight()) {
            // still over the file drop target image area!
            over = true;
          }
        }
        if (!over) {
          var _e = $('#file-dropper');

          var _e$offset2 = _e.offset(),
              _left = _e$offset2.left,
              _top = _e$offset2.top;

          if (x >= _left && x <= _left + _e.outerWidth() && y >= _top && y <= _top + _e.outerHeight()) {
            // still over the file drop target image area!
            over = true;
          }
        }

        if (!over) $('#file-dropper').removeClass('drag_over').hide();
      });
    }
  }, {
    key: 'head_img_replaceable',
    value: function head_img_replaceable(identifier) {
      // helpfuls:
      //  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
      //  http://www.sitepoint.com/html5-ajax-file-upload/
      if ($('#file-dropper').html().trim() !== '') return;

      $('#file-dropper').show().html('\n<div>\n<button id="file-cancel" type="button" class="close" data-dismiss="alert" aria-hidden="true"\n        title="cancel file upload" alt="cancel file upload">\n  &times;\n</button>\n<b>\n  <span style="font-size:40px; color:#aaa" class="iconochive-plus-circle" />\n</b><br/>\n<b>\n  Drag & Drop an image file here or\n</b>\n<button type="button" class="btn btn-info btn-xs" onclick="$(\'#file-selector\').click();">\n  Pick image to upload\n</button>\n<form method="POST" action="/services/post-file.php?submit=1&identifier=' + identifier + '"\n      enctype="multipart/form-data" id="poster">\n  <div class="hidden">\n    <input id="file-selector" name="file" type="file" accept="image/*"/>\n  </div>\n  <input type="hidden" name="identifier" value="' + identifier + '"/>\n  <input id="file-submit" type="submit" name="submit" value="SUBMIT" class="btn btn-success"/>\n  <div id="file-uploading">\n    Uploading your file..\n  </div>\n</form>\n</div>');

      $('#file-cancel').bind('click', function (evt) {
        AJS.cancelFile();

        evt.stopPropagation();
        evt.preventDefault();
        return false;
      });

      $.event.props.push('dataTransfer'); // if not set, dataTransfer is not sent


      var success = function success() {
        log('success!');
        // AJS.cancelFile()
      };

      // upload an image (typically a collection/list header or account/person profile)  via S3
      // returns '' on success; else string w/ error/fail reason
      var uploadFile = function uploadFile() {
        var fail = false;

        if (typeof XMLHttpRequest === 'undefined') fail = 'browser appears to not have HTML5 functionality';

        if (!fail) fail = AJS.badFile();

        var xhr = new XMLHttpRequest();
        if (!fail) {
          log(AJS.file2post);
          if (!xhr.upload) fail = 'browser submit setup failed';
        }

        if (fail) return fail;

        // start upload
        log('post');
        // if (navigator.userAgent.indexOf('Safari') > 0) xhr.timeout = 10 * 60 * 1000; // 10 min
        xhr.open('POST', location.protocol.concat('//', location.host, '/services/post-file.php?submit=1&identifier=', identifier, '&fname=', encodeURIComponent(AJS.file2post.name)), false); // block synchronously on the post!
        // if (!options.sendBoundary) xxx
        xhr.setRequestHeader('Content-Type', 'multipart/form-data; charset=UTF-8');
        xhr.send(AJS.file2post);

        var reply = xhr.responseText;
        var mat = reply.match(/SUCCESS \(task_id=(\d+)\)/);
        if (mat && mat.length) {
          var task_id = mat[1];
          log('STALKING TASK_ID: ', task_id);

          $('#file-dropper').html('waiting for updates..');
          var stalker_ptr = false;
          var stalker = function stalker() {
            log('STALKING...');
            $.ajax({
              type: 'GET',
              url: '/catalog_status.php?where=task_id='.concat(task_id, '&rand=', Math.random()),
              dataType: 'xml',
              success: function success(xml) {
                log(xml);
                var x = {
                  green: parseInt($(xml).find('wait_admin0').text(), 10) || 0,
                  blue: parseInt($(xml).find('wait_admin1').text(), 10) || 0,
                  red: parseInt($(xml).find('wait_admin2').text(), 10) || 0
                };
                log(x);
                var nWait = x.green + x.blue + x.red;
                $('#file-dropper').html('waiting for ' + nWait + ' tasks to run');
                if (!nWait) {
                  log('task(s) done!');
                  clearInterval(stalker_ptr);
                  $('#file-dropper').html('reloading page with your image');
                  location.href = location.href; // ready! reload the page!
                } else if (x.red) {
                  $('#file-dropper').html('<div class="alert alert-danger">status task failure -- an admin will need to resolve</div>');
                  clearInterval(stalker_ptr);
                }
              }
            });
          };

          // every 2 seconds, check for status
          stalker_ptr = setInterval(stalker, 2000);
        } else {
          log(reply);
        }

        log('post done');
        return '';
      };

      $('#file-selector').bind('click', function () {
        AJS.file_picked = 'selected';
      }).bind('change', function (evt) {
        log('file dropdown selected!');
        $('#file-submit, #file-cancel').show();
        log(evt);
        if (evt.target && evt.target.files && evt.target.files.length) {
          var _evt$target$files = _slicedToArray(evt.target.files, 1);

          AJS.file2post = _evt$target$files[0];

          AJS.previewFile();
        }
      });

      $('#file-dropper').bind('drop', function (evt) {
        // we've been dropped a file (from a drag-and-drop)!
        evt.stopPropagation();
        evt.preventDefault();

        log(evt.dataTransfer.files);
        $('#file-dropper').removeClass('drag_over');

        $('#file-submit, #file-cancel').show();

        if (evt.dataTransfer.files.length) {
          AJS.file_picked = 'dropped';

          var _evt$dataTransfer$fil = _slicedToArray(evt.dataTransfer.files, 1);

          AJS.file2post = _evt$dataTransfer$fil[0];

          AJS.previewFile();
        }
      });

      $('#poster').bind('focusin', function (evt) {
        log(evt.type);
        $('#file-uploading').show();
      }).bind('submit', function (evt) {
        log('submit!');
        $('#file-uploading').show();

        // First try the schmancy HTML5 submit via XMLHttpRequest and FileReader.
        // If we fail, we'll fallback to form submit normal action.
        var fail = uploadFile();
        if (fail === '') {
          // SUCCESS!  we are done!
          success();
          evt.stopPropagation();
          evt.preventDefault();
          return false;
        }

        if (AJS.file_picked === 'dropped') {
          // we had client drag-n-drop the file -- we can't post it!
          // epic fail...
          AJS.cancelFile();
          // eslint-disable-next-line  no-alert
          alert('Failure: ' + fail);
          evt.stopPropagation();
          evt.preventDefault();
          return false;
        }

        // OK fallback to normal (selected) file submit (and full page reload)!
        return true;
      });

      // now center file-dropper over current image
      var w1 = $('#file-dropper-img').outerWidth();
      var h1 = $('#file-dropper-img').outerHeight();
      var w2 = $('#file-dropper').outerWidth();
      var h2 = $('#file-dropper').outerHeight();
      $('#file-dropper').css({
        left: Math.round((w1 - w2) / 2),
        top: Math.round((h1 - h2) / 2)
      });

      if (AJS.ios) {
        $('#file-dropper > form > div.hidden').removeClass('hidden');
        $('#file-dropper > button').addClass('hidden');
      }
    }

    // client-side preview the image directly in the browser!  xxx catch exceptions, etc.

  }, {
    key: 'previewFile',
    value: function previewFile() {
      $('#file-dropper .uppreview').remove(); // remove any prior upload/preview

      if (AJS.badFile()) {
        AJS.cancelFile();
        return false;
      }

      if (typeof FileReader === 'undefined') return false;

      var reader = new FileReader();
      reader.onload = function (evt) {
        log(evt.target);
        var im = new Image();
        im.src = evt.target.result;
        $('#file-dropper').append(im);
        $(im).addClass('uppreview');
        // $('#file-dropper').css(
        //      {'background':'url(' + evt.target.result + ') no-repeat center center'})
      };

      log(AJS.file2post);
      reader.readAsDataURL(AJS.file2post);
      return true;
    }
  }, {
    key: 'cancelFile',
    value: function cancelFile() {
      $('#file-dropper .uppreview').remove(); // remove any prior upload/preview
      $('#file-dropper, file-submit, #file-cancel, #file-uploading').hide();
      if (AJS.file_picked) delete AJS.file_picked;
      if (AJS.file2post) delete AJS.file2post;
    }
  }, {
    key: 'badFile',
    value: function badFile() {
      var fail = false;

      if (!fail && !AJS.file2post) fail = 'file is missing';

      // php upload_max_filesize is 8M
      if (!fail && AJS.file2post.size > 8000000) fail = 'file is over 8MB in size';

      if (!fail) {
        var type = AJS.file2post.type.toLowerCase();
        if (type !== 'image/jpeg' && type !== 'image/png' && type !== 'image/gif') fail = 'file not required format of JPEG or PNG or GIF';
      }

      if (fail)
        // eslint-disable-next-line  no-alert
        alert(fail);

      return fail;
    }

    // for microfilm books with many months of newspapers in PDF
    //   eg: /details/la_caleagle_reel1
    //
    // paginfo is a logical hashmap JSON object of:
    //   YYYYMMDD => [comma separated list of pages]
    // eg:
    //   20080129 =>  "1,2,3,11,17"

  }, {
    key: 'drawPDF',
    value: function drawPDF(identifier, pageinfo) {
      var urlstart = '/download/'.concat(identifier, '/', identifier, '_pdf.zip/', identifier, '_pdf/', identifier, '_');
      var multi_year = false;
      var last_year = false;

      // eslint-disable-next-line  guard-for-in
      for (var key in pageinfo) {
        var year = key.substr(0, 4);
        if (last_year === false) last_year = year;
        if (last_year !== year) {
          multi_year = true;
          break;
        }
      }

      var sep = '';
      var str = sep;
      var lastyearmonth = 666;
      // eslint-disable-next-line  guard-for-in
      for (var _key2 in pageinfo) {
        // log(key); log(pageinfo[key]);
        var pages = pageinfo[_key2].split(',');
        var _year = _key2.substr(0, 4);
        var month = parseInt(_key2.substr(4, 2), 10);
        var day = parseInt(_key2.substr(6, 2), 10);
        var yearmonth = _year.concat('-', month);
        var skip_day = false;

        var monthName = '';
        if (yearmonth !== lastyearmonth) {
          /**/if (month === 1) monthName = 'January';else if (month === 2) monthName = 'February';else if (month === 3) monthName = 'March';else if (month === 4) monthName = 'April';else if (month === 5) monthName = 'May';else if (month === 6) monthName = 'June';else if (month === 7) monthName = 'July';else if (month === 8) monthName = 'August';else if (month === 9) monthName = 'September';else if (month === 10) monthName = 'October';else if (month === 11) monthName = 'November';else if (month === 12) monthName = 'December';else if (month === undefined) monthName = 'Single Page PDFs';else /*             */monthName = 'Unknown_'.concat(month);

          if (multi_year) monthName = _year.concat(' ', monthName);

          // make header/a that shows/hides a hidden div after it with the month's data
          str += str ? '</div><!--mo--><br/>' : '';
          str += '\n<a href="#' + monthName + ',' + _year + '" onclick="$(\'#m' + yearmonth + '\').toggle(); return false">\n<span class="iconochive-folder" /> ' + monthName + '\n</a>\n<div class="mo" id="m' + yearmonth + '">';
        }

        // make header/a that shows/hides a hidden div after it with the page data
        if (day === undefined || day === '') skip_day = true;
        if (skip_day) {
          str += '<div class="day">';
        } else {
          str += '\n<div class="day">\n<a href="#' + yearmonth + '-' + day + '"\n    onclick="$(\'#m' + yearmonth + 'd' + day + '\').toggle();return false;">\n  <span class="iconochive-folder" /> ' + day + '\n</a>\n<div class="pages" id="m' + yearmonth + 'd' + day + '">';
        }

        // drop in the individual page links
        var offset = 1;
        var page = void 0;
        var pnum = void 0;
        for (var j = 0; j < pages.length; j++) {
          page = pages[j];
          if (!page)
            // eslint-disable-next-line  no-continue
            continue;
          if (offset > 0) offset = 1 - page;
          pnum = parseInt(page, 10) + offset;

          // left 0-pad to 4 digits as needed
          page = '0000'.concat(page);
          page = page.substr(page.length - 4, 4);

          var url = urlstart.concat(page, '.pdf');
          str += '<a href="' + url + '">[' + pnum + ']</a> ';
        }

        if (skip_day) str += '</div>';else str += '</div><!--pages--></div><!--day-->';

        lastyearmonth = yearmonth;
      }

      str += '</div><!--mo-->';

      // replace the "pdfs" empty div with our hefty HTML
      $('#pdfs .replaced').html(str);
    }

    // for collection pages, [About] tab

  }, {
    key: 'grafs',
    value: function grafs() {
      var $grafs1 = $('#grafs1');
      var $grafs2 = $('#grafs2');
      if (!$grafs1.length) return;
      if (typeof $grafs1.attr('data-id') === 'undefined') return;

      var identifier = $grafs1.attr('data-id');
      $grafs1.attr('data-id', null);

      log('loading grafs');
      $grafs1.html('<i><small>loading graph <img src="/images/loading.gif"/></small></i>').show();
      $grafs2.html('<i><small>loading graph <img src="/images/loading.gif"/></small></i>').show();
      var tok = '<h2>';
      $.get('/details/'.concat(identifier, '&grafs=1&v=3'), function (htm) {
        var a = htm.split(tok);
        if (a.length >= 3) {
          $('#activity-reviewsN').html(a[1]).parents('.activity-box').show();
          $('#activity-forumN  ').html(a[2]).parents('.activity-box').show();
        }
        if (a.length === 5) {
          $grafs1.html(tok + a[3]);
          $grafs2.html(tok + a[4]);
        } else {
          $grafs1.html('(graph data not available)');
          $grafs2.html('(graph data not available)');
        }
      });

      AJS.setUpTopRegionsTable();
    }
  }, {
    key: 'quick_down',
    value: function quick_down(id, target) {
      var idsel = '#' + id;

      if (!$('.format-group.in').length) {
        // no set of files for a single format showing... yet!
        var format = $(target).text();
        var $formatGroup = $(idsel).parents('.format-group');

        $('.download-button').html(format.concat(' FILES'));
        $formatGroup.addClass('in');
        // hide the other summary formats (one-liner) clickables
        $('.format-group:not(.in)').slideUp();
        $(idsel).slideDown();
      } else {
        // re-open all the summary formats (one-liner) clickables
        $('.format-group').slideDown(400);
        // close the open set of single files
        setTimeout(function () {
          // ftw, thx for nothing jquery
          $('.format-group.in').removeClass('in');
          $('.download-button').html('DOWNLOAD OPTIONS');
        }, 400);
        $(idsel).slideUp();
      }

      return false;
    }

    // parse a CGI arg

  }, {
    key: 'arg',
    value: function arg(theArgName, try_full) {
      var sArgs = try_full && location.search === '' ? location.href.slice(1).split('&') : location.search.slice(1).split('&');
      for (var i = 0; i < sArgs.length; i++) {
        if (sArgs[i].slice(0, sArgs[i].indexOf('=')) === theArgName) {
          var r = sArgs[i].slice(sArgs[i].indexOf('=') + 1);
          return r.length > 0 ? unescape(r).split(',') : '';
        }
      }
      return '';
    }

    // setup trigger on 1/2 second of hovering over the nav IA logo

  }, {
    key: 'logoText',
    value: function logoText() {
      var hideLogoText = function hideLogoText() {
        $('#internet-archive').fadeOut('slow', function () {
          $('#internet-archive').remove();
          $('#exit-er').show();
        });
      };

      var mousetimer = false;

      // axxx make sure when it opens on TAB, the about li is in the DOM *next*
      $('.navbar-nav:first').on('mouseenter focusin', function (evt) {
        // Only proceed if user is interacting with the logo elements.
        if (!$(evt.target).is('ul, .navbar-brand, .iconochive-logo, .logo-text-hider')) return;

        mousetimer = setTimeout(function () {
          if ($('#internet-archive').length) {
            hideLogoText();
            return;
          }

          $('#exit-er').hide(); // (gets in the way of xs/mobile!)
          // flank the IA logo!
          $('.navbar-nav:first').prepend($('\n<div id="internet-archive" class="hidden-xs logo-text-hider"\n  style="position:absolute; top:10px; width:100%; text-align:center;">\n<div class="topinblock logo-text-hider" style="width:100px; padding-left:10px;">\n  <div class="logo-text-hider"\n      style="display:none; width:85px; height:30px; background:transparent -35px top no-repeat url(/images/footer.png)" />\n</div><div class="topinblock logo-text-hider" style="width:35px;height:1px;" /><div class="topinblock logo-text-hider" style="width:100px;">\n  <div class="logo-text-hider" style="display:none; width:85px; height:30px; background:transparent -116px top no-repeat url(/images/footer.png)" />\n</div>\n</div>'));

          // both of the above divs are hidden.  now fade them in
          $('#internet-archive > div > div').fadeIn('slow');
        }, 1000);
      }).mouseleave(function () {
        if (mousetimer) clearTimeout(mousetimer);
      });
    }
  }, {
    key: 'scrolled',
    value: function scrolled() {
      var newtop = $(window).scrollTop();
      // log('scrolled to ', newtop)

      var selector = '.more_search:visible';
      var $e = $(selector);
      if (!$e.length) return;

      // make the edge detect for "hit bottom" 40 pixels from the bottom
      var check = $e.offset().top + $e.outerHeight() - $(window).height() - 40;
      // log('-v- check', check)
      if (newtop > check) {
        log('hit rock bottom > ', check);
        if (!AJS.more_searching) $(selector.concat(' > a')).click();
      }
    }
  }, {
    key: 'more_search',
    value: function more_search(lnk, urlIn, page_now) {
      var selector = AJS.selector();
      if (selector === false) return false;

      var ikind = selector.replace(/#ikind-/, '');

      var $more_search = $(selector.concat(' .more_search'));

      // we stash a reference of what page the client has requested, so we can increment it on
      // each "more_search hit
      var pageKey = selector;
      if (typeof AJS.page_map[pageKey] === 'undefined') AJS.page_map[pageKey] = page_now || 1;

      if (AJS.page_map[pageKey] < 0) {
        // $more_search.find('.more-search-all').show()
        return false; // all results showing -- no more for the ikind avail so noop/ignore
      }

      AJS.page_map[pageKey] += 1;
      var page = AJS.page_map[pageKey];

      $more_search.find('.more-search-fetching').show();

      AJS.more_searching = true;

      var url = urlIn + page;
      var urlreplace = location.protocol.concat('//', location.host, url);
      url += '&scroll=1';

      log('url: ', url); // url to AJAX get next page
      log('urlreplace', urlreplace); // url to change browser location (visually) to


      log('more_search(selector=', selector, 'sort=', ikind, 'page=', page, 'url=', url, ')');
      // log(AJS.page_map)


      $.get(url, function (htm) {
        if (htm.length < 100 && $(htm).find('div.no-results')) {
          // no more results avail/found.  we have reached infinity!
          $more_search.find('.more-search-fetching, a.btn').hide();
          // $more_search.find('.more-search-all').show()
          AJS.page_map[pageKey] = -1; // flag to ignore future more_search attempts
          AJS.more_searching = false;
          return;
        }

        if (AJS.pushState && typeof history.replaceState !== 'undefined') history.replaceState({}, '', urlreplace);

        var selectorID = $(selector).attr('id');
        if (AJS.tilerPREV && AJS.tilerPREV.unsourced && AJS.tilerPREV.unsourced[selectorID]) delete AJS.tilerPREV.unsourced[selectorID];

        var $selector = $(selector.concat(' .results'));
        $selector.append(AJS.addNotes(AJS.addingNotesKind, htm));

        // re-tile and re-flow!  (the force should flow through you)
        AJS.tiler(selector);
        $more_search.find('.more-search-fetching').hide();
        AJS.more_searching = false;

        AJS.parent_hover($selector);

        // OK, this is quite a bit more subtle...  the HTM has been dropped in,
        // *and* we've done a basic re-tiling.  however, it's very likely many
        // of the images are still loading.  so listen for image "is loaded" events
        // if they trickle in, and at most re-tile every 1 second (even if they
        // likely trickling in at a faster rate than that) until they all loaded
        $(selector.concat(' img')).on('load', function () {
          clearTimeout(AJS.more_search_throttler);
          AJS.more_search_throttler = setTimeout(AJS.tiler, 1000);
        });

        if (typeof archive_analytics !== 'undefined') archive_analytics.send_scroll_fetch_event(page);
      });

      return false;
    }

    // when embed codes are being shown, adjust their heights so they show all the content/codes!

  }, {
    key: 'embed_codes_adjust',
    value: function embed_codes_adjust() {
      log('showing embeds!');

      // these are found (only) on /details/ pages
      var _arr = ['embedcodehere', 'embedcodehereWP'];
      for (var _i2 = 0; _i2 < _arr.length; _i2++) {
        var embid = _arr[_i2];
        var $embid = $('#' + embid);
        $embid.removeAttr('rows').css('height', '');

        var embtxt = $embid.text();

        // this is *puke* city -- since textareas are a PITA, make a shadow div w/ the
        // text we want in it, trying to be same width, same font-size, etc.
        // and *then* insert into DOM invisibily so we can calculate its overall height
        // .. and then peg the textarea height to that height
        $('body').prepend($('<div/>').attr({
          id: embid + 'Shadow',
          class: 'textarea-invert-readonly roundbox5'
        }).css({
          position: 'absolute',
          visibility: 'hidden',
          top: 60,
          left: 10,
          padding: '5px 15px 5px 15px',
          width: $embid.width(),
          'font-size': $embid.css('font-size')
        }).text(embtxt));

        var bestHT = $('#' + embid + 'Shadow').outerHeight() + 15;
        log(embid, 'bestie height', bestHT, 'for current width', $embid.width());
        $('#' + embid + 'Shadow').remove();

        $embid.height(bestHT);
      }
    }

    /**
     * A simpler 'one shot' way to dynamically insert a modal and show it on the page.
     * You can call it w/ a hashmap of optional paramters to make it very easy on caller end to grok
     * (similar to python's kwargs)
     *
     * @param  {String} [prepend='body']        a jQuery selector where to prepend the modal markup
     * @param  {String} [selector='#my-modal']  a unique id -- is _first_ remove(d), and then added
     * @param  {String} [title='confirmed']     what title/header should appear
     * @param  {String} [body='']               text/markup for the modal body
     * @return n/a
     */

  }, {
    key: 'modal',
    value: function modal() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$prepend = _ref.prepend,
          prepend = _ref$prepend === undefined ? 'body' : _ref$prepend,
          _ref$selector = _ref.selector,
          selector = _ref$selector === undefined ? '#my-modal' : _ref$selector,
          _ref$title = _ref.title,
          title = _ref$title === undefined ? 'confirmed' : _ref$title,
          _ref$body = _ref.body,
          body = _ref$body === undefined ? '' : _ref$body;

      var id = selector.replace(/#/, '');
      $(selector).remove();
      $(prepend).prepend('\n<div id="' + id + '" class="modal fade" role="dialog" aria-hidden="true">\n<div class="modal-dialog modal-lg">\n  <div class="modal-content" style="padding:10px;">\n    <div class="modal-header">\n      <button\n        type="button"\n        class="close"\n        data-dismiss="modal"\n        aria-hidden="true">\n        <span class="iconochive-remove-circle" aria-hidden="true"></span><span class="sr-only">remove-circle</span></button>\n      <h3 class="modal-title">' + title + '</h3>\n    </div>\n    <div id="' + id + '-body">' + body + '</div>\n  </div>\n</div>\n</div>');
      $(selector).modal('show');
    }

    // dynamically adds modal to page (if isnt there already)

  }, {
    key: '_modal_add',
    value: function _modal_add(selector, conf) {
      // logically private
      log(conf);

      if ($(selector).length) return;

      var selectorID = selector.replace(/#/, '');

      $('body').prepend('\n<div id="' + selectorID + '" class="modal fade" role="dialog" aria-hidden="true">\n<div class="modal-dialog modal-lg">\n  <div class="modal-content">\n    <div class="modal-header ' + (conf.headerClass ? conf.headerClass : 'modal-header-std') + '">\n      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n        <span class="iconochive-remove-circle"></span>\n      </button>\n      <h2 class="modal-title">\n        ' + (typeof conf.title === 'undefined' ? 'Confirmed' : conf.title) + '\n      </h2>\n    </div>\n    <div id="' + selectorID + '-body">\n      ' + (typeof conf.body === 'undefined' ? '' : conf.body) + '\n    </div>\n  </div>\n</div>\n</div>');

      // $('body').addClass('blurry') // exxxperiment!
    }
  }, {
    key: 'modal_beta',
    value: function modal_beta(lnk, confIn) {
      // NOTE: not in use now
      var conf = confIn;
      conf.title = '<center>Give Us Feedback!</center>';

      // Set a cookie *NOW* w/ JS -- so we can absolutely assure that if user hits
      // the exit form *WITHOUT* cookies, that they must be disabling cookies on archive.org
      // (but interestingly have JS enabled (since they are here! ;-))
      // So exit form can give them "you need to enable cookies" fail...
      $.cookie('beta-modal', 'open', { path: '/', expires: 1, domain: '.archive.org' });

      var selector = $(lnk).attr('data-target');
      conf.href = location.href;
      conf.href = conf.href.replace(/&ui3=1$/, '');
      conf.href = conf.href.replace(/\/v2$/, '');

      conf.body = '\n<style> #fback h4 { margin-top:30px; } </style>\n<div id="fback" style="padding:20px">\n  <a target="_blank" href="/details/v2tour20150420">\n    <div style="text-align:center; float:right">\n      <img src="/download/v2tour20150420/v2tour20150420.thumbs/April202015Tour_000375.jpg"/><br/>\n      TUTORIAL VIDEO\n    </div>\n  </a>\n  <div style="font-size:18px">\n    Please take a moment to give us feedback below.\n    We consider these comments as we make changes to the site.\n  </div>\n  <h5 style="display:none">\n    <br/><br/><br/>\n    THANK YOU for your valuable feedback!\n  </h5>\n  <form id="modal_beta_form" method="POST" action="/services/exit.php">\n    <input type="hidden" name="feedback_only" value="1"/><br/>\n\n    <h4>Feedback (details are helpful):</h4>\n    <textarea class="form-control input-sm" name="feedback" rows="4"></textarea>\n\n    <h4>May we contact you about your feedback?</h4>\n    <input type="radio" name="contact" value="yes"/> yes, here\'s my email address:<br/>\n    <input class="form-control input-sm" type="text" name="eml"/> <br/>\n    <input type="radio" name="contact" value="no"/> no<br/>\n    <hr style="border-color:black;background-color:black;color:black" />\n    You can use the classic version of archive.org for a limited period of time.<br/>\n    <a target="_blank" href="https://blog.archive.org/2014/11/05/redesign/">\n      Learn more\n    </a>\n    about why archive.org changed.<br/>';

      if (conf.feedback_only) {
        conf.body += '\n        <input class="btn btn-primary" type="submit" style="margin-top:20px" value="Submit"/>';
      } else {
        conf.body += '\n        <input class="btn btn-primary" type="submit" style="margin-top:20px" value="Submit Feedback"/>\n        <input id="modal_beta_form_exit" class="btn" type="button" style="margin-top:20px" value="Exit to Classic Site"/>';
      }
      conf.body += '\n    <br/><br/>\n    <i>What\'s New?</i>\n    [\n      <a target="top" href="https://blog.archive.org/2015/02/12/whats-new-with-v2/">recent changes</a> |\n      <a target="top" href="/CHANGELOG.txt">detailed CHANGELOG</a>\n    ]\n  </form>\n</div>';

      AJS._modal_add(selector, conf);

      // in case it's not obvious, there are FOUR CASES we (have to) handle:
      //   feedback only, hit [submit] button
      //   feedback only, cancel out (no feedback given)
      //   exit beta, hit [submit] button
      //   exit beta, no feedback given
      $('#modal_beta_form_exit').on('click', function () {
        $('#modal_beta_form input[name=feedback_only]').val(0);
        conf.feedback_only = false;
        conf.exiting = true;
        $('#modal_beta_form').submit();
      });

      $('#modal_beta_form').on('submit', function () {
        log('submit clicked!');

        conf.submitted = true;
        conf.postdata = $('#modal_beta_form').serialize(); // oh, fkya!

        // we're polite
        $(selector.concat(' h5')).fadeIn('slow');
        $(selector.concat(' form')).fadeOut('slow');

        setTimeout(function () {
          // AJAX form post, keeping page where it is
          $.post('/services/exit.php', conf.postdata, function () {
            log('POSTED ', conf.postdata);

            if ((!conf.feedback_only || conf.exiting) && document.cookie === '') {
              // user disables cookies, so go directly to exit form where we'll
              // give them more information about that and how we can't "stick"
              // their preference to exit beta...
              log('EXITING BUT HAS NO COOKIES!');
              location.href = '/services/exit.php';
              return;
            }

            $('body').removeClass('blurry');
            $(selector).modal('hide');
          });
        }, 2500);

        return false; // dont do *normal* submit of the form (and drive the page away)
      });

      $(selector).modal('show').on('hidden.bs.modal', function () {
        log('beta modal hidden');

        $('body').removeClass('blurry');
        if (conf.feedback_only || !conf.exiting) {
          $(selector).remove();
          return;
        }

        var exitFN = function exitFN() {
          if (!conf.submitted) {
            // user clicked out of modal or [x] close button -- no form submit
            // but they DO want to exit beta...
            location.href = '/services/exit.php';
          } else {
            $(selector).remove();
            log('going to ', conf.href);
            location.href = conf.href;
          }
        };

        if (typeof archive_analytics !== 'undefined') {
          archive_analytics.send_ping({
            kind: 'event',
            ec: 'in_beta',
            ea: 'exit',
            cache_bust: Math.random()
          }, exitFN); // once analytics GIF is loaded, invoke our callback!
        } else {
          log('uho analytics not defined!');
          // should never happen, but just to be safe!!
          exitFN();
        }
      });
      return false;
    }

    /**
     * Parse API data and check if the item is successfully marked to favorite or not
     *
     * @param {String} bookmarkRes response data from /bookmarks.php?add_bookmark=1&...
     * @return {Boolean}
     */

  }, {
    key: 'isFavoriteSuccessful',
    value: function isFavoriteSuccessful(bookmarkRes) {
      return bookmarkRes.indexOf('<meta name="ia-favorite-success" content="1">') !== -1;
    }

    // gives us ability to have JS intercept an href click and instead do a bootstrap modal.
    // eg: when someone Favorites a list or item - a kind of confirmation box.
    //     In that case, we want it to just say Favorited with a big black star in the middle.
    //     We don't take user to the href target.
    //     The modal disappears if the user clicks anywhere and returns to page they were on.
    //     Timeout of a few seconds to close modal if they do nothing.
    // config is a hashmap with optional keys:
    //   auto_close, auto_remove, body, center, favorite, ignore_lnk, titlen,
    //   headerClass, shown, follow_link_on_dismiss

  }, {
    key: 'modal_go',
    value: function modal_go(lnk, confIn) {
      var conf = confIn; // sigh

      if (conf.favorite) {
        // this flicks on a bunch of config options
        conf.center = true;
        conf.auto_close = true;
        conf.title = 'Favorited';
        conf.body = '<center><span style="font-size:100px;" class="iconochive-favorite"></span></center>';
        conf.login = true; // must be logged in!
      }

      var selector = $(lnk).attr('data-target');
      var href = $(lnk).attr('href');

      AJS._modal_add(selector, conf);

      if (conf.shown) {
        $(selector).on('shown.bs.modal', function () {
          conf.shown();
        });
      }

      if (conf.follow_link_on_dismiss) {
        $(selector).on('hidden.bs.modal', function () {
          log('modal hidden, going to ', href, '..');
          $('body').removeClass('blurry');
          location.href = href;
        });
      }

      $(selector).modal('show');

      if (conf.login && $.cookie('logged-in-user') === null) {
        if (location.protocol !== 'https:') {
          // make absolutely sure we never login with http!
          location.href = 'https://archive.org/account/login.php';
          return false;
        }
        var url = '/account/login.php';
        $.get(url, function (htmIn) {
          $(selector.concat(' .modal-title')).text('Nearly there!  Please login first');

          $(selector).modal('show');
          // this allows us to effectively rip off the header/nav and footer
          // if we are accessing a full page (eg: account login page)
          var htm = $(htmIn).find('.container-ia > div').length ? $(htmIn).find('.container-ia > div').get(0) : htmIn;

          $(selector.concat('-body')).html(htm);

          var $form = $(selector.concat('-body form:has(input[type=submit])'));

          if ($form.length) {
            $form.on('submit', function (evt) {
              evt.preventDefault();
              evt.stopPropagation();

              var keyvals = {};
              $form.find('input').each(function (k, v) {
                if ($(v).attr('name').length) keyvals[$(v).attr('name')] = $(v).val();
              });
              // log('POST', url)
              // log(keyvals)
              $.post(url, keyvals, function () {
                log('SUBMITTED');
                if ($.cookie('logged-in-user') !== null) {
                  // SUCCESS!
                  // We are going to hide the login modal now, and need
                  // to proceed only *after* the modal animation is done
                  // and modal is gone.  So setup listener now, *then* hide.
                  // Once login modal is gone, remove the modal, and
                  // invoke the originally intended modal in fresh environment!
                  $(selector).on('hidden.bs.modal', function () {
                    $(selector).remove();
                    log('SUCCESS');
                    AJS.modal_go(lnk, conf); // invoke original modal!
                  });
                  $('body').removeClass('blurry');
                  $(selector).modal('hide');
                } else {
                  // eslint-disable-next-line  no-alert
                  alert('Please try logging in again');
                }
              });

              return false;
            });
          }
        });
        return false;
      }

      if (conf.auto_remove) {
        conf.auto_close = true;
        $(selector).on('hidden.bs.modal', function () {
          $(selector).remove();
          $('body').removeClass('blurry');
        });
      }

      if (!conf.ignore_lnk) {
        var _url = lnk.href;
        // log('submit', url)
        $.get(_url, function (res) {
          if (conf.favorite) {
            if (typeof archive_analytics !== 'undefined') {
              archive_analytics.send_ping({
                kind: 'event',
                ec: 'page_action',
                ea: 'favorite',
                el: location.pathname,
                cache_bust: Math.random()
              });
            }

            if (AJS.isFavoriteSuccessful(res)) {
              $('#favorite-button').addClass('favorited');
            } else {
              var $favModal = $(selector);
              var failMessage = '\n              <center>\n                <p class="favorite-failure-message">\n                  There was an error adding the favorite. If the problem persists, please contact support.\n                </p>\n              </center>\n            ';

              $favModal.find('.modal-title').html('Failed');
              $favModal.find('#confirm-modal-body').html(failMessage);
            }
          }

          $(selector).modal('show');
          if (conf.auto_close) setTimeout(function () {
            return $(selector).modal('hide');
          }, 2000);
        });
      } else {
        $(selector).modal('show');
      }

      if (conf.center) $(selector.concat(' .modal-dialog')).center(); // vertically center

      if (conf.auto_close && conf.ignore_lnk) setTimeout(function () {
        return $(selector).modal('hide');
      }, 2000);

      return false;
    }

    // handy little method to ensure only 1 checkbox is checked

  }, {
    key: 'check1',
    value: function check1(obj, selector) {
      if (!obj.checked) return;

      // toggle others to unchecked
      var $selector = selector ? $(selector) : $(obj).parents('form');

      // uncheck all; the re-check the checked one
      $selector.find('input[type=checkbox]').attr('checked', false);

      // eslint-disable-next-line  no-param-reassign
      obj.checked = true;
    }
  }, {
    key: 'addCommas',
    value: function addCommas(nStr) {
      // http://www.mredkj.com/javascript/numberFormat.html
      var x = ('' + nStr).split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.'.concat(x[1]) : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1,$2');
      }return x1 + x2;
    }
  }, {
    key: 'suffixFmt',
    value: function suffixFmt(val, axis) {
      if (axis.min >= 0.0 && axis.max <= 5)
        // give a little bit more granularity of 1 decimal point...
        return Math.round(val * 10, 1) / 10;

      if (val >= 1000000) return (val / 1000000).toFixed(0).concat(' M');
      if (val >= 1000) return (val / 1000).toFixed(0).concat(' K');
      return val.toFixed(0);
    }
  }, {
    key: 'suffixFmtPercent',
    value: function suffixFmtPercent(val, axis) {
      return AJS.suffixFmt(val, axis).concat('%');
    }
  }, {
    key: 'descript',
    value: function descript() {
      var d = $('#descript').get(0);
      if (d && d.offsetHeight < d.scrollHeight) {
        // we overflowed the short descript at the top of the collection page.
        // so show the little MORE button..
        $('#descript-more').show();
        // $('#descript').css({'border-bottom':'1px solid #ccc'})
      }
    }

    // this allows easy setup for resize/orientation triggers for all graphs
    // on a page that use this!

  }, {
    key: 'plotter',
    value: function plotter(callback) {
      if (typeof AJS.plotters === 'undefined') AJS.plotters = [];

      if (callback) {
        // stash a copy of the callback for resize/orientationchange triggers
        AJS.plotters.push(callback);

        // now do the actual plotting (eg: page load)
        callback();
      } else {
        // step through each graph and rerun them
        log('plotter() resize/orient change', AJS.plotters.length, 'graphs to resize');
        for (var i = 0; i < AJS.plotters.length; i++) {
          AJS.plotters[i]();
        }
      }
    }

    // Graphing for archive.org/services/views.php and TV

  }, {
    key: 'plot',
    value: function plot(id, cfgIn, fmt_fn, pts, many) {
      var cfg = cfgIn;
      if (!cfg.xaxis) cfg.xaxis = { mode: 'time', color: cfg.dark ? '#ccc' : '#545454' };
      if (!cfg.yaxis) cfg.yaxis = { color: cfg.dark ? '#ccc' : '#545454' };

      var barWidth = void 0;
      if (many && cfg.barWidth) barWidth = cfg.barWidth * 1; // *1 to pass lint; keeps like below; avoid obj destructuring
      else if (cfg.barWidth) barWidth = cfg.barWidth * 86400 * 1000;else barWidth = (cfg.dayBarsNoPoints ? 1 : 7) * 86400 * 1000; // 1day|1week

      cfg.series = {
        bars: {
          show: true,
          barWidth: barWidth,
          fill: 0.6,
          color: '#385C74'
        },
        color: '#385C74',
        points: { show: !cfg.dayBarsNoPoints }
      };

      if (typeof cfg.grid === 'undefined') {
        cfg.grid = {
          borderColor: cfg.dark ? '#333' : '#aaa',
          hoverable: true
        };
      }
      // log(cfg.series.bars)


      if (cfg.dark) cfg.grid.backgroundColor = '#002b36';

      if (!cfg.tip) cfg.tip = {};
      if (!cfg.tip.id) cfg.tip.id = id;

      if (typeof window.GraphPriorIndex === 'undefined') window.GraphPriorIndex = {};

      // eslint-disable-next-line  no-nested-ternary
      var ary = many ? pts : typeof pts.data === 'undefined' ? [{ data: pts }] : [pts];
      if (cfg.dayBarsNoPoints && !cfg.noLabel) ary[0].label = id;

      var selid = '#' + id;
      $.plot($(selid), ary, cfg);

      if (!fmt_fn) return;

      $(selid).bind('plothover', function (event, pos, item) {
        if (!item) {
          window.GraphPriorIndex[id] = -666;
          $('#gtip').remove();
          return;
        }
        if (window.GraphPriorIndex[id] !== item.dataIndex) {
          window.GraphPriorIndex[id] = item.dataIndex;
          $('#gtip').remove();

          var str = fmt_fn(item.datapoint[0], item.datapoint[1]);
          var $graf = $(selid);
          var off = $graf.offset();

          // figure out which way from the "dot"/bar in the graph the
          // tooltip should go -- left or right!
          var pegTo = cfg.tip.pegTo;

          if (!pegTo) pegTo = pos.pageX - off.left > $graf.width() / 2 ? 'right' : 'left';

          var pegToVal = pegTo === 'right' ? $graf.width() - (pos.pageX - off.left - 20) : pos.pageX - off.left + 20;
          log(pegTo, pegToVal);

          $('#' + cfg.tip.id).append('\n<div id="gtip" class="roundbox2"\nstyle="top:' + (pos.pageY - off.top) + 'px; ' + pegTo + ':' + pegToVal + 'px">' + str + '</div>');
        }
      });
    }

    // Use a color sampling 3rd party piece of code, to find the 1st/primary image in the "welcome"
    // area, and find the "dominant color".  (internally, uses canvas to color sample).
    // Adjust text/foreground color as well as any "selected tab" background color.
    // NOT USED ANYMORE -- GONE SERVERSIDE!

  }, {
    key: 'welcome_recolor',
    value: function welcome_recolor(e) {
      if (typeof ColorThief === 'undefined' || !e.length) return;

      if (AJS.welcome_recolored) return;
      AJS.welcome_recolored = true;

      var img = $(e)[0];
      log('welcome_recolor', img.src);

      /* global ColorThief */
      var ct = new ColorThief();
      var palette = ct.getPalette(img, 5);
      log(palette);
      if (!palette) return;
      var dominantColorRGB = palette[0]; // 3 element array!

      if (!dominantColorRGB) return;
      log(dominantColorRGB);

      // if dominant color is uh, kinda in the lighter range -- txt should be black
      var avgVal = Math.round($(dominantColorRGB).map(function (k, v) {
        return v;
      }).toArray().reduce(function (a, b) {
        return a + b;
      }) / dominantColorRGB.length);
      var color = avgVal >= 128 ? 'black' : 'white';
      log('avgVal', avgVal);

      $('.welcome').css({
        color: color,
        'background-color': 'rgb(' + dominantColorRGB.join(',') + ')'
      });
      $('.welcome .stealth:not(.tabby .stealth)').css({ color: color });
    }

    /**
     * Use the following function to make an image, div, etc focusable, and 'click'-able.
     * Function adds a tabindex for 'focus' and listens for a keydown/keypress of enter or space,
     * then triggers a click.
     *
     * var element: String used for jquery capture of non-acessible & mouse-only element.
     *    ex: "#AmazonPayButton img"
     * Triggers 'click' on element.
     */

  }, {
    key: 'makeMouseElementAccessible',
    value: function makeMouseElementAccessible(element) {
      $(element).attr('tabindex', '0').on('keypress keydown', function makeMouseElementAccessibleGo(e) {
        if (e.type !== 'click') {
          var code = e.keyCode || e.which;
          var k_space = 32; // space bar pressed
          var k_enter = 13; // enter key pressed
          if ([k_space, k_enter].indexOf(code) !== -1) $(this).click();
        }
      });
    }

    // use something like ',' for the optional 3rd arg if you want to allow
    // for appending 2+ values into a field, etc...

  }, {
    key: 'autocomplete',
    value: function autocomplete(selector, options, multiValSplitChar) {
      $(selector).autocomplete({
        appendTo: '#autocompletee',
        minLength: 0,
        source: function source(request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(options, request.term.split(/,\s*/).pop()));
        },
        focus: function focus() {
          return false;
        }, // prevent value inserted on focus
        select: function autocomplete_select(event, ui) {
          if (multiValSplitChar) {
            var terms = this.value.split(/,\s*/);
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value);
            // add placeholder to get the comma-and-space at the end
            terms.push('');
            this.value = terms.join(', ');
          } else {
            this.value = ui.item.value;
          }
          return false;
        }
      });
    }
  }, {
    key: 'addNotes',
    value: function addNotes(kind, htm) {
      // flag lists have multiple users so the "rights" there
      // is a bit to thorny right now so for simplicity and
      // the main feature to go live, skipping them...
      if (kind !== 'favorite' && kind !== 'list') return htm;

      if (!htm && $('body').hasClass('editable')) AJS.addingNotesKind = kind;
      if (!AJS.addingNotesKind) return htm;

      AJS.addNoteHTM = $('\n<div class="note">\n  <span class="edit">\n    <a href="#" onclick="return AJS.editNote(this)">Add a Note</a>\n  </span>\n</div>');

      log('addNotes');

      // Next, we are going to do a global DOM search and insert (where needed)
      // for basically the first page load.  But we're also called in "infinite scroll"
      // page 2+ mode, and in that case, we want to modify (JUST) the HTM when that's
      // for page 2+ and about to be inserted into the DOM, *instead* of another global
      // DOM search.
      if (htm) {
        // (Basically we are now doing page 2+ in infinite scroll)
        // OK this is sorta wild/maybe not obvi...a
        // (Kinda like a jQuery replace_regexp()...)
        // Take the *string* of HTM we are passed, convert it to a "findable" jQuery object
        // then insertd "addNoteHTM" where needed.
        // Finally, convert back to string and return this modified version to caller.
        var $htm = $('<div>' + htm + '</div>');
        $htm.find('.details-ia .C234:not(:has(".note"))').append(AJS.addNoteHTM);
        return $htm.html();
      }

      // this is initial page load
      // NOTE: return value irrelevant here
      return $('.details-ia .C234:not(:has(".note"))').append(AJS.addNoteHTM);
    }
  }, {
    key: 'editNote',
    value: function editNote(e) {
      var $e = $(e);
      var identifier = $e.parents('.details-ia').prev().attr('data-id');
      if (!identifier) return false;

      var $note = $e.parents('.note');

      var val = '';
      if ($e.text() === 'edit') {
        val = $note.find('span:first').text();
        val = val.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
      $note.hide();
      $note.parent().append($('\n<form class="form form-horizontal note" role="form" onsubmit="AJS.editedNote(this);return false">\n  <div class="form-group">\n    <div class="col-xs-2 col-md-1 col-lg-1">\n      <b>Note:</b>\n    </div>\n    <div class="col-xs-10 col-md-6 col-lg-7">\n      <textarea class="form-control" name="comments">' + val + '</textarea>\n      <div class="clearfix visible-xs-block"></div>\n    </div>\n    <div class="clearfix visible-xs-block"></div>\n    <div class="col-xs-12 col-md-5 col-lg-4 btns">\n      <button type="button" onclick="AJS.editedNote(this)" class="btn btn-success btn-xs">Save</button>\n      <button type="button" onclick="AJS.editedNote(this)" class="btn btn-info btn-cancel btn-xs">Cancel</button>\n      <button type="button" onclick="AJS.editedNote(this)" class="btn btn-danger btn-xs ' + (val ? '' : 'hidden') + '">Remove</button>\n    </div>\n  </div>\n</form>'));

      return false;
    }
  }, {
    key: 'editedNote',
    value: function editedNote(e) {
      var $e = $(e);

      var identifier = $e.parents('.details-ia').prev().attr('data-id');
      if (!identifier) return;

      // if user hit [return] and submitted form, etc.
      // treat it like they hit the [Save] button
      if ($e.is('form')) $e = $e.find('button:contains("Save")');

      var action = $e.text();
      var $parent = $e.parents('.note');
      var $origNote = $parent.prev();

      if (action === 'Save' || action === 'Remove') {
        var val = action === 'Save' ? $parent.find('textarea').val() : '';
        var url = '/bookmarks.php?identifier='.concat(identifier, '&kind=', AJS.addingNotesKind, '&add_comment=', encodeURIComponent(val));
        log('get ', url);
        $.get(url, function () {
          var htm = val ? 'Note: "<span>' + val.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>"\n          <span class="edit">(<a href="#" onclick="return AJS.editNote(this)">edit</a>)</span>' : AJS.addNoteHTM.html();
          // show the "Note: ..." section again (with now appropriately updated innards)
          $origNote.html(htm).show();
          $parent.remove(); // lose the form
        });
        return;
      }
      // else Cancel does nothing but below...

      $origNote.show(); // show the "Note: ..." section again
      $parent.remove(); // lose the form
    }
  }, {
    key: 'thumbzilla',
    value: function thumbzilla(id) {
      /* global  TV2  TV3 */
      // cover entire screen with new div...
      var TV = $('body').hasClass('tv');
      if (TV) TV2.unplay('thumbzilla');

      // get list of thumbs
      var htm = '';
      $(AJS.thumbzillas).each(function (key, val) {
        var start = parseInt(val, 10);
        if (TV) {
          var startend = '/start/' + start + '/end/' + (start + TV3.CLIP_SEC_MAX2);
          htm += '<a onclick="$(\'#opscreen1M\').fadeOut(\'slow\'); TV2.seekURL(\'' + startend + '\')" href="' + startend + '">';
        } else {
          var locNEW = '/details/' + id + '&start=' + start;
          htm += '<a onclick="$(\'#opscreen1M\').fadeOut(\'slow\'); return Play.seek(this)" href="' + locNEW + '">';
        }
        htm += '<img src="/download/' + id + '/' + id + '.thumbs/' + id + '_' + val + '.jpg"/></a>';
      });

      if (htm === '') {
        // eslint-disable-next-line  no-alert
        alert('coming soon!');
        return false;
      }

      $('#opscreen1M').remove();
      $('body').prepend($('<div />').attr({ id: 'opscreen1M' }));

      var $imgs = $('<div/>').attr({ id: 'thumbzilla' }).html('<div>' + htm + '</div>');
      $imgs.appendTo('#opscreen1M');
      $('#opscreen1M').css('visibility', 'hidden').show();
      var winH = $(window).height() + (AJS.ios ? 60 : 0); // plus iOS bleah
      for (var w = 160; w >= 10; w -= 10) {
        var h = Math.round(w * (110 / 160.0));
        log('TRYING', w, 'x', h);
        $('#thumbzilla img').css({ width: w, height: h });
        if ($('#thumbzilla img:last').offset().top + h <= winH) break;
      }

      $('#thumbzilla div').center();
      $('#opscreen1M').hide().css('visibility', 'visible').fadeIn('slow').one('click.opscreen1M.nixer', function () {
        return $('#opscreen1M').fadeOut('slow');
      });
      return false;
    }

    /* Wayback Machine form type-ahead setup: it presents a list of sites
        matching the text as user types. */

  }, {
    key: 'nav_tophat_wb_setup',
    value: function nav_tophat_wb_setup() {
      // Configuration
      var WAYBACK = 'https://web.archive.org';
      var HOSTS_ENDPOINT = WAYBACK + '/__wb/search/host?q=';
      var ANCHORS_ENDPOINT = WAYBACK + '/__wb/search/anchor?q=';
      var REDIRECT_URL = WAYBACK + '/web/*/';
      var REDIRECT_SEARCH = WAYBACK + '/web/*/';

      function search_or_calendar(query) {
        if (query.indexOf('http://') === 0 || query.indexOf('https://') === 0 || query.match(/[\w.]{2,256}\.[a-z]{2,4}/gi)) document.location.href = REDIRECT_URL + query;else document.location.href = REDIRECT_SEARCH + encodeURIComponent(query);
      }

      var $input = $('#nav-wb-url');
      var $form = $input.parent('form');
      $form.submit(function (e) {
        AJS.fireAnalyticsTrackingEvent('HomePageWayback', 'SearchForm');
        var query = $input.val();
        search_or_calendar(query);
        e.preventDefault();
        return false;
      });
      $input.on('focus input paste', function () {
        if (typeof $input.typeahead === 'undefined') {
          $.ajax({
            url: '/includes/node_modules/bootstrap-3-typeahead/bootstrap3-typeahead.min.js',
            dataType: 'script',
            cache: true
          }).done(function () {
            $input.typeahead({
              source: function source(query, process) {
                $input.focus(); // bugfix https://github.com/bassjobsen/Bootstrap-3-Typeahead/issues/150#issuecomment-197949899
                return $.get(HOSTS_ENDPOINT + encodeURIComponent(query), function (data) {
                  if (typeof data.hosts !== 'undefined' && data.hosts.length > 0) {
                    return process(data.hosts);
                  } else if (typeof data.isUrl !== 'undefined' && data.isUrl === true && typeof data.excluded === 'undefined') {
                    return process([{
                      display_name: query
                    }]);
                  }

                  return $.get(ANCHORS_ENDPOINT + encodeURIComponent(query), function (data2) {
                    if (typeof data2 !== 'undefined' && data2.length > 0) return process(data2.slice(0, 5));
                    return undefined;
                  });
                });
              },
              matcher: function matcher() {
                return true;
              },
              displayText: function displayText(item) {
                return item.display_name;
              },
              autoSelect: false,
              delay: 400,
              fitToElement: false, /* not good with long URLs */
              minLenght: 3,
              items: 8
            }).change(function () {
              var current = $input.typeahead('getActive');
              if (current && current.display_name === $input.val()) $form.submit();
            }).on('keyup', function (e) {
              if (e.which === 10 || e.which === 13) {
                AJS.fireAnalyticsTrackingEvent('HomePageWayback', 'SearchForm');
                var query = $input.val();
                search_or_calendar(query);
                e.preventDefault();
                return false;
              }
              return undefined;
            });
          });
        }
      });
    }

    /* eslint-disable */

    /**
     * Helper to open a popup with JS
     * @param int width
     * @param int height
     * @param string href
     */

  }, {
    key: 'openPopup',
    value: function openPopup(width, height, href) {
      var params = {
        height: height,
        width: width,
        scrollbars: 'yes',
        resizable: 'yes',
        toolbar: 'no',
        directories: 'no',
        location: 'yes',
        menubar: 'no',
        status: 'yes'

        // Options must be expressed as comma-separated key-value pairs.
      };var options = Object.keys(params).filter(function (key) {
        return params[key];
      }).reduce(function (paramPairs, key) {
        return paramPairs.concat(key + '=' + params[key]);
      }, []).join(',');

      window.open(href, 'popup', options);
    }

    /**
     * React Component, a link that opens its href in a popup instead of the same window.
     * Height and width of the popup can be customized via props.
     */

  }, {
    key: 'PopupLink',
    value: function PopupLink() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          children = _ref2.children,
          href = _ref2.href,
          height = _ref2.height,
          width = _ref2.width,
          title = _ref2.title;

      function handleClick(event) {
        event.preventDefault();
        return AJS.openPopup(width, height, href);
      }

      // Include href for semantics.
      return React.createElement(
        'a',
        { href: href, title: title, onClick: handleClick },
        children
      );
    }

    /**
     * Render the CreativeCommonsLicenseLink React component to a DOM node with the
     * appropriate ID.
     */

  }, {
    key: 'setUpCreativeCommonsLicenseLink',
    value: function setUpCreativeCommonsLicenseLink() {
      var root = document.querySelector('#creative_commons_license_link_react');

      if (!root) {
        return;
      }

      ReactDOM.render(React.createElement(AJS.CreativeCommonsLicenseLink, {
        href: root.dataset.href,
        licenseName: root.dataset.licenseName,
        licenseSelected: root.dataset.licenseSelected === 'true'
      }), root);
    }
    /* eslint-enable */

    /**
     * Sets up listeners on search forms to handle opening/closing the search options.
     *
     * @see SearchOptions.inc
     */

  }, {
    key: 'setUpSearchForms',
    value: function setUpSearchForms() {
      var body = $(document.body);
      var searchForms = $('.js-search-form');

      /**
       * Sets up an individual form, isolating its event listeners from the other ones.
       *
       * @param {HTMLFormElement} formNode
       */
      function setUpSearchForm(formNode) {
        var form = $(formNode);
        var searchBar = form.find('.js-search-bar');
        var searchOptions = form.find('.js-search-options');
        var keepOpenWhenChanged = searchOptions.data('keepOpenWhenChanged');
        var formChanged = false;

        /**
         * Catches web searches and redirects them to Wayback Machine. The search form must have a
         * "data-wayback-machine-search-url" attribute set in order for this method to work (and the
         * method assumes the query can be tacked onto the end of this URL). For all other kinds of
         * searches, does nothing.
         *
         * @param {Event} event
         */
        function redirectWaybackSearches(event) {
          var waybackMachineSearchUrl = this.dataset.waybackMachineSearchUrl;

          var elements = $(this.elements);
          var checkedInput = elements.filter('[name="sin"]:checked');
          var searchInput = elements.filter('[name="search"]');
          var sinValue = checkedInput.length ? checkedInput[0].value : '';
          var searchValue = searchInput.length ? searchInput[0].value : '';

          if (waybackMachineSearchUrl && sinValue === 'WEB') {
            event.preventDefault();

            window.location = [
            // Remove trailing slash just in case.
            waybackMachineSearchUrl.replace(/\/$/, ''), searchValue].join('/');
          }
        }

        function openOptions() {
          searchOptions.addClass('is-open').attr('aria-expanded', true);
        }

        function closeOptions() {
          searchOptions.removeClass('is-open').attr('aria-expanded', false);
        }

        /**
         * Closes options if the newly focused element is outside of the form and the form
         * is configured to close when it is no longer active.
         *
         * @param {HTMLElement} targetElement element being clicked or receiving focus
         */
        function handleFocusChange(targetElement) {
          if (!targetElement || form[0].contains(targetElement) || keepOpenWhenChanged && formChanged) return;

          closeOptions();
        }

        if (form.length) {
          form.on('submit', redirectWaybackSearches);

          if (!searchOptions.hasClass('is-open')) {
            body.on('click', function (event) {
              handleFocusChange(event.target);
            });

            form.on('change', function () {
              formChanged = true;
            }).on('focusout', function (event) {
              handleFocusChange(event.relatedTarget);
            });

            searchBar.on('focusin', function () {
              openOptions();
            });
          }
        }
      }

      searchForms.each(function (index, node) {
        return setUpSearchForm(node);
      });
    }

    /**
     * Sets up two-way communication between the main page and a BookReader
     * embedded in an <iframe>
     *
     * Due to the <iframe> the page and the BookReader must communicate using
     * the BookReader's URL plugin, which sends and listens for "message"
     * events via window.postMessage().
     */

  }, {
    key: 'setUpBookReaderIframe',
    value: function setUpBookReaderIframe() {
      var messageType = 'bookReaderFragmentChange';
      var iframe = document.querySelector('#texty iframe');

      // No BookReader embed, abort
      if (!iframe) return;

      // URL syncing not enabled, abort
      if (!iframe.hasAttribute('data-book-reader-sync-urls')) return;

      /**
       * Updates the current page URL without reloading or adding to the
       * browser history using the History API
       *
       * On browsers that don't support window.history (mainly Opera Mini),
       * this is a no-op.
       *
       * @param {String} fragment the new fragment
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/History_API
       */
      function updateUrl(fragment) {
        // History API not supported, abort
        if (!('history' in window)) return;

        var path = replaceBookReaderFragment(window.location.pathname, fragment);

        // Reconstruct URL with new path
        var url = path + window.location.search + window.location.hash;

        window.history.replaceState({ fragment: fragment }, window.title, url);
      }

      window.addEventListener('message', function (event) {
        // Not a recognized message type, abort
        if (!event.data || event.data.type !== messageType) return;

        updateUrl(event.data.fragment);
      });
    }

    /**
     * Expandable/collapsible accordion component, implemented with <details>
     * elements
     *
     * The JavaScript guarantees only one <details> is open at a time and
     * scrolls the open <details>'s content into view.
     *
     * @see accordion.less
     */

  }, {
    key: 'setUpAccordions',
    value: function setUpAccordions() {
      /**
       * Closes all <details> elements in detailsEls, except selectedDetails
       *
       * @param {HTMLDetailsElement[]} detailsEls
       * @param {HTMLDetailsElement}   selectedDetails
       */
      function closeAllExcept(detailsEls, selectedDetails) {
        Array.from(detailsEls).forEach(function (details) {
          if (details !== selectedDetails) {
            // eslint-disable-next-line no-param-reassign
            details.open = false;
          }
        });
      }

      /**
       * Sets up a single accordion component
       *
       * @param {HTMLElement} accordion
       */
      function setUpAccordion(accordion) {
        /**
         * Responds to the "toggle" event on a <details>
         *
         * @param {Event} event
         */
        function handleToggle(event) {
          if (!event.target.open) return;

          closeAllExcept(accordion.querySelectorAll('details'), event.target);

          // See https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
          $('html, body').animate({
            scrollTop: $(event.target).offset().top
          }, 400);
        }

        Array.from(accordion.querySelectorAll('details')).forEach(function (details) {
          details.addEventListener('toggle', handleToggle);
        });

        accordion.setAttribute('data-accordion-ready', '');
      }

      Array.from(document.querySelectorAll('[data-accordion]')).forEach(setUpAccordion);
    }

    /**
     * Handles click on search 'Advanced Search' link.
     *
     * If 'Search TV news captions' is checked, we ignore the link click
     * and create and open TV advanced search popup right on the page.
     *
     * @return {boolean}  true for browser to go to normal advanced search page; else false
     */

  }, {
    key: 'advanced_search',
    value: function advanced_search(link) {
      if (!AJS.is_advanced_TV_search(link)) return true;

      // this means we want TV advanced search form behaviour instead!
      if (!AJS.adv) {
        AJS.adv = {
          mapping: false
        };
      }

      // only reload the resources below at most 1x/day
      var ymd = new Date().toISOString().substr(0, 10); // eg: 2017-06-28
      $.ajaxSetup({
        cache: true
      });

      // NOTE: using new JS Promise / jQuery Promise-ish Deferred..
      // NOTE: if we are invoking this more than once, we reuse prior results
      // NOTE: ymd forces reload at least once a day
      // NOTE: if any resources happen to _already_ be loaded in <head>, use them
      var i = 'https://archive.org/includes/';
      $.when(typeof TV !== 'undefined' || $.getScript(i.concat('tv.min.js?', ymd)), typeof TVSearch !== 'undefined' || $.getScript(i.concat('build/js/tvsearch.min.js?', ymd)), $.ui || $.getScript(i.concat('jquery-ui-1.10.3.min.js')), $.ui || $.get('/includes/redmond/jquery-ui-1.10.3.min.css', function (css) {
        $('<style />').html(css).appendTo('head'); // Add CSS to page
      }), AJS.adv.mapping || $.getJSON('/details/tv?mappings&output=json&'.concat(ymd), function (mapping) {
        AJS.adv.mapping = mapping;
      })).then(function () {
        if (AJS.adv.mapping.length !== 2) {
          // eslint-disable-next-line  no-alert
          alert('failed to get network and program mappings!');
          return;
        }

        /* global  TVSearch */
        TVSearch.proPick(AJS.adv.mapping, link);
      });

      return false;
    }

    /**
     * Returns whether or not 'Advanced Search' should be handled via JS
     * (which as of now is just TV FTS to make a popup show up).
     * Logically private.
     *
     * @param  {DOM element}  elm 'Advanced Search' link element that was just clicked
     * @return {Boolean}      should handle with JS and not directly go to /advanced_search.php?
     */

  }, {
    key: 'is_advanced_TV_search',
    value: function is_advanced_TV_search(elm) {
      if (location.hostname === 'web.archive.org') return false;

      // for now at least, tracey felt should avoid handling link on IA top/home page even when
      // TV FTS is picked.  for consistency, this is _definitely_ worth revisiting.
      if ($(document.body).hasClass('top')) return false;

      var $form = $(elm).parents('form');
      if ($form.find('.js-search-options input[value=TV]').is(':checked')) return $form;

      return false;
    }

    /**
     * Fires an Archive Analytics tracking event.
     * @param {string} category
     * @param {string} action
     * @param {string} label
     */

  }, {
    key: 'fireAnalyticsTrackingEvent',
    value: function fireAnalyticsTrackingEvent(category, action) {
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : location.pathname;

      if (typeof archive_analytics !== 'undefined') {
        archive_analytics.send_ping({
          kind: 'event',
          ec: category,
          ea: action,
          el: label,
          cache_bust: Math.random()
        });
      }
    }

    /**
     * Attaches handlers for action tracking.
     *
     * To enable click tracking for a link, add a `data-event-click-tracking`
     * attribute containing the Google Analytics Event Category and Action, separated
     * by a vertical pipe (|).
     * e.g. `<a href="foobar" data-event-click-tracking="TopNav|FooBar">`
     *
     * To enable form submit tracking, add a `data-event-form-tracking` attribute
     * to the `form` tag.
     * e.g. `<form data-event-form-tracking="TopNav|SearchForm" method="GET">`
     */

  }, {
    key: 'setUpActionTracking',
    value: function setUpActionTracking() {
      var clickTrackingAttributeName = 'event-click-tracking';
      var formTrackingAttributeName = 'event-form-tracking';

      function actionHandler(attributeName) {
        return function (event) {
          var currentTarget = $(event.currentTarget);
          if (!currentTarget) return;
          var categoryAction = currentTarget.data(attributeName);
          if (!categoryAction) return;
          var categoryActionParts = categoryAction.split('|');
          AJS.fireAnalyticsTrackingEvent(categoryActionParts[0], categoryActionParts[1]);
        };
      }

      $(document.body).on('click', '[data-' + clickTrackingAttributeName + ']', actionHandler(clickTrackingAttributeName));
      $('form[data-' + formTrackingAttributeName + ']').on('submit', actionHandler(formTrackingAttributeName));
    }

    /**
     * Sets up data-popup-links
     */

  }, {
    key: 'setupPopupLink',
    value: function setupPopupLink() {
      var attributeName = 'popup-link';
      var widthAttribute = 'popup-link-width';
      var heightAttribute = 'popup-link-height';

      $(document.body).on('click', '[data-' + attributeName + ']', function (event) {
        event.preventDefault();
        var currentTarget = $(event.currentTarget);
        var w = currentTarget.data(widthAttribute) || 500;
        var h = currentTarget.data(heightAttribute) || 500;
        AJS.openPopup(w, h, event.currentTarget.href);
      });
    }

    /**
     * React functional component. Renders related item tiles on details page.
     * This markup is *duplicated between the JS and PHP to render tiles.
     *
     * @see Tiles::construct()
     *
     * @param {Object} params
     * @param {Array}  params.dataHash
     * @return {JSX.ElementClass}
     */

  }, {
    key: 'RelatedItemSection',
    value: function RelatedItemSection(_ref3) {
      var _ref3$dataHash = _ref3.dataHash,
          dataHash = _ref3$dataHash === undefined ? [] : _ref3$dataHash;

      return React.createElement(
        'section',
        { 'aria-label': 'Related Items' },
        dataHash.map(function (item) {
          return React.createElement(
            'div',
            { className: 'results' },
            React.createElement(
              'div',
              { className: 'item-ia', 'data-id': item.identifier, 'data-mediatype': item.mediatype, 'data-year': '' },
              React.createElement(
                'a',
                { className: 'stealth', tabIndex: '-1', href: '/details/' + item.identifier },
                React.createElement(
                  'div',
                  { className: 'hidden-tiles views C C1' },
                  React.createElement(
                    'span',
                    { className: 'hidden-xs' },
                    item.downloads
                  ),
                  React.createElement(
                    'span',
                    { className: 'hidden-sm hidden-md hidden-lg' },
                    item.downloads
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'C234' },
                React.createElement(
                  'div',
                  { className: 'item-ttl ' + item.lendClass + ' C C2' },
                  React.createElement(
                    'a',
                    { href: '/details/' + item.identifier, title: item.title, 'data-event-click-tracking': 'GenericNonCollection|ItemTile' },
                    React.createElement(
                      'div',
                      { className: 'tile-img' },
                      React.createElement('img', { className: 'item-img', alt: '', src: '/services/img/' + item.identifier })
                    ),
                    item.lendingEnabled === true && item.lendingAvailable === true && React.createElement(
                      'div',
                      { className: 'tile-action hidden-lists' },
                      'Borrow'
                    ),
                    item.lendingEnabled === true && item.lendingAvailable === false && React.createElement(
                      'div',
                      { className: 'tile-action hidden-lists' },
                      'Join Waitlist'
                    ),
                    item.loginRequired === true && React.createElement(
                      'div',
                      { className: 'tile-action hidden-lists' },
                      'Log in to view this item'
                    ),
                    React.createElement(
                      'div',
                      { className: 'ttl' },
                      item.title
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'by C C4' },
                  item.creator !== '' && React.createElement(
                    'div',
                    null,
                    React.createElement(
                      'span',
                      { className: 'hidden-lists' },
                      'by '
                    ),
                    React.createElement(
                      'span',
                      { className: 'byv', title: item.creator },
                      item.creator
                    )
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'statbar ' },
                React.createElement(
                  'div',
                  { className: 'mt-icon C C5' },
                  React.createElement(
                    'span',
                    { className: 'iconochive-' + item.mediatype, 'aria-hidden': 'true' },
                    '\xA0'
                  ),
                  React.createElement(
                    'span',
                    { className: 'sr-only' },
                    item.mediatype
                  )
                ),
                React.createElement(
                  'h6',
                  { className: 'stat' },
                  React.createElement(
                    'span',
                    { className: 'iconochive-eye', 'aria-hidden': 'true' },
                    '\xA0'
                  ),
                  React.createElement(
                    'span',
                    { className: 'sr-only' },
                    'eye'
                  ),
                  React.createElement(
                    'span',
                    null,
                    item.downloads
                  )
                ),
                React.createElement(
                  'h6',
                  { className: 'stat' },
                  React.createElement(
                    'span',
                    { className: 'iconochive-favorite', 'aria-hidden': 'true' },
                    '\xA0'
                  ),
                  React.createElement(
                    'span',
                    { className: 'sr-only' },
                    'favorite'
                  ),
                  item.favorite
                ),
                React.createElement(
                  'h6',
                  { className: 'stat' },
                  React.createElement(
                    'span',
                    { className: 'iconochive-comment', 'aria-hidden': 'true' },
                    '\xA0'
                  ),
                  React.createElement(
                    'span',
                    { className: 'sr-only' },
                    'comment'
                  ),
                  item.numReviews
                )
              )
            )
          );
        })
      );
    }

    /**
     * React functional component. Renders a table showing view stats per geographic region for an
     * item or collection.
     *
     * @see stats-table.less
     *
     * @param {Object} props
     * @param {String} props.caption
     * @param {GeoCount[]} props.counts
     * @return {String}
     */

  }, {
    key: 'RegionsTable',
    value: function RegionsTable(_ref4) {
      var _ref4$caption = _ref4.caption,
          caption = _ref4$caption === undefined ? 'Regions' : _ref4$caption,
          _ref4$captionClass = _ref4.captionClass,
          captionClass = _ref4$captionClass === undefined ? '' : _ref4$captionClass,
          _ref4$counts = _ref4.counts,
          counts = _ref4$counts === undefined ? [] : _ref4$counts;

      return React.createElement(
        'table',
        { className: 'stats-table' },
        React.createElement(
          'caption',
          { className: captionClass },
          caption
        ),
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              { scope: 'col' },
              'Region'
            ),
            React.createElement(
              'th',
              { scope: 'col' },
              'Country'
            ),
            React.createElement(
              'th',
              { className: 'stats-table__numeric-column', scope: 'col' },
              'Views'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          counts.map(function (count) {
            return React.createElement(
              'tr',
              { key: count.state.code + '_' + count.country.code + '_' + count.count },
              React.createElement(
                'td',
                null,
                count.state.formattedName
              ),
              React.createElement(
                'td',
                null,
                count.country.formattedName
              ),
              React.createElement(
                'td',
                { className: 'stats-table__numeric-column' },
                count.formattedCount
              )
            );
          })
        )
      );
    }

    /**
     * React functional component. Renders a message to display while a resource is loading.
     *
     * @see loading-message.less
     *
     * @param {Object} props
     * @param {String} props.message
     * @return {String}
     */

  }, {
    key: 'LoadingMessage',
    value: function LoadingMessage(_ref5) {
      var _ref5$message = _ref5.message,
          message = _ref5$message === undefined ? 'Loading' : _ref5$message;

      return React.createElement(
        'small',
        { className: 'loading-message' },
        message
      );
    }

    /**
     * React functional component. Renders a error message.
     *
     * @param {Object} props
     * @param {String} props.errorMsg
     * @return {JSX.ElementClass}
     */

  }, {
    key: 'ErrorMessage',
    value: function ErrorMessage(_ref6) {
      var errorMsg = _ref6.errorMsg;

      return React.createElement(
        'small',
        null,
        errorMsg
      );
    }

    /**
     * Finds an element with class "js-top-regions-table" and renders a table showing the top 10
     * regions in terms of views for an item/collection.
     *
     * Data Attributes:
     *  - data-caption (string)
     *  - data-caption-class (string)
     *  - data-days (number)
     *  - data-identifier (string)
     *  - data-limit (number)
     */

  }, {
    key: 'setUpTopRegionsTable',
    value: function setUpTopRegionsTable() {
      var root = $('.js-top-regions-table');
      var message = root.find('.js-top-regions-message');
      var originalMessageText = message.text();

      if (!root || !message) return;

      ReactDOM.render(React.createElement(AJS.LoadingMessage, { message: 'loading data' }), message[0]);

      var apiOptions = {
        uaKinds: ['non_robot', 'unrecognized']
      };

      if (root.data('days')) apiOptions.days = parseInt(root.data('days'), 10);

      if (root.data('limit')) apiOptions.limit = parseInt(root.data('limit'), 10);

      AJS.StatsApiClient.getGeoCounts(root.data('identifier'), apiOptions).then(function (counts) {
        ReactDOM.render(React.createElement(AJS.RegionsTable, {
          caption: root.data('caption'),
          captionClass: root.data('captionClass'),
          counts: counts
        }), root[0]);
      }, function () {
        // If API call fails, fall back to original text.
        message.text(originalMessageText);
      });
    }
  }]);

  return AJS;
}(); // end class AJS


AJS.TILE_WIDTH = 180;
AJS.TILE_WIDTH_SMALL = 150;
AJS.ios = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0;
AJS.page_map = {};
AJS.cgi_args = {};

var Timegraf = function () {
  function Timegraf() {
    _classCallCheck(this, Timegraf);
  }

  _createClass(Timegraf, null, [{
    key: 'setup',
    // config that comes from PHP

    // class for facets section interactive time-related graph.
    // Graph shows search results histogramed over time.
    // It allows user to drag left and right 'handles' overlaying the graph to constrain to a
    // smaller time period.
    value: function setup(leftTS, riteTS, minDate, maxDate) {
      Timegraf.c.realGraphWidth = Timegraf.c.GRAPH_WIDTH - Timegraf.c.GRAPH_PADDING;
      Timegraf.c.maxSlide = Math.floor((maxDate.getTime() - minDate.getTime()) / 86400000);
      var csMinTS = minDate.getTime() / 1000;
      var left = leftTS > 0 ? Math.floor((leftTS - csMinTS) / 86400) : 0;
      var rite = riteTS > 0 ? Math.floor((riteTS - csMinTS) / 86400) : Timegraf.c.maxSlide;

      var $sliderdiv = $('<div />').attr({ id: 'slider' }).css({
        width: Timegraf.c.realGraphWidth,
        position: 'absolute',
        top: Timegraf.c.GRAPH_HEIGHT - 10,
        left: 0,
        zIndex: 1
      });
      $('#timegraf').append($sliderdiv);
      $sliderdiv.append('<br />'); // bleah!


      log(left, rite);

      $('#slider').slider({
        range: true,
        max: Timegraf.c.maxSlide,
        values: [left, rite],
        slide: function slide(event, ui) {
          var ts = minDate.getTime();
          var d1 = new Date(ts);
          var d2 = new Date(ts);

          d1.setDate(d1.getDate() + ui.values[0]);
          d2.setDate(d2.getDate() + ui.values[1]);

          $('#from ').html($.datepicker.formatDate('M d', d1)); // Jan 19
          $('#to   ').html($.datepicker.formatDate('M d', d2)); // Jan 19
          $('#fromB').html($.datepicker.formatDate('yymmdd', d1)); // yyyymmdd
          $('#toB  ').html($.datepicker.formatDate('yymmdd', d2)); // yyyymmdd
          $('#datepickL').val($.datepicker.formatDate('mm/dd/yy', d1)); // mm/dd/yyyy
          $('#datepickR').val($.datepicker.formatDate('mm/dd/yy', d2)); // mm/dd/yyyy


          clearTimeout(Timegraf.hideL);
          clearTimeout(Timegraf.hideR);

          var foff = { left: $('#slider .ptrL').offset().left - $('#from').width() + 10 };
          var toff = { left: $('#slider .ptrR').offset().left
            /* eslint-disable  brace-style */
          };$('#from').offset(foff).show(0, function () {
            Timegraf.hideL = setTimeout(function () {
              return $('#from').hide('slow');
            }, 2000);
          });
          $('#to  ').offset(toff).show(0, function () {
            Timegraf.hideR = setTimeout(function () {
              return $('#to  ').hide('slow');
            }, 2000);
          });
          /* eslint-enable  brace-style */

          Timegraf.pinkme(ui.values[0], ui.values[1]);
        },
        stop: function stop(event, ui) {
          Timegraf.adjust(ui.values[0], ui.values[1]);
          Timegraf.timechanged = true;
          var now = location.href.replace(/^http[s]*:/, '');
          var become = '//' + location.host + Timegraf.c.q + Timegraf.args();

          if (now !== become) {
            log(now);
            log(become);

            // make it more obvious that search is being issued
            $('#opscreen1M').remove();
            $('body').append($('<div id="opscreen1M"/>'));
            $('#opscreen1M').show('slow', function () {
              location.href = become;
            });
          }
        }
      });

      if (left > 0 || rite > 0) Timegraf.pinkme(left, rite);
    }
  }, {
    key: 'pinkme',
    value: function pinkme(left, rite) {
      var x = Math.round(Timegraf.c.GRAPH_PADDING / 2);
      var pinkL = Math.round(left / Timegraf.c.maxSlide * Timegraf.c.realGraphWidth) + 2;
      var pinkR = Math.round(rite / Timegraf.c.maxSlide * Timegraf.c.realGraphWidth) - 2 + x;

      var rect = 'rect(0px,' + pinkR + 'px,' + Timegraf.c.GRAPH_HEIGHT + 'px,' + pinkL + 'px)';
      log(rect);
      $('#timegraf-clip').css('clip', rect);

      var ttl = 'click and drag this to change time period';
      var attr = { 'data-title': ttl, 'data-toggle': 'tooltip', 'data-placement': 'bottom' };
      $($('#slider a').get(0)).attr(attr).removeClass('ui-state-default').addClass('ptrL');
      $($('#slider a').get(1)).attr(attr).removeClass('ui-state-default').addClass('ptrR');

      Timegraf.adjust(left, rite);
    }
  }, {
    key: 'adjust',
    value: function adjust(left, rite) {
      var onedayspan = rite - left < 2;

      log('left:', left, 'rite:', rite);

      if (onedayspan) {
        $('#to').hide();
        $('#slider .ui-widget-header').css('borderColor', '#d33682');
        $('#slider .ui-widget-header').css('border-left-width', 0);
      } else {
        $('#slider .ui-widget-header').css('borderColor', '#d33682');
        $('#slider .ui-widget-header').css('border-left-width', 2);
      }
    }
  }, {
    key: 'args',
    value: function args() {
      if (!Timegraf.timechanged) return '';
      var from2 = $('#fromB').text().trim();
      var to2 = $('#toB  ').text().trim();
      var end = from2 === to2 ? '' : '-' + to2;
      return '&time=' + from2 + end; // TVII
    }
  }]);

  return Timegraf;
}(); // end class Timegraf


Timegraf.timechanged = false;
Timegraf.c = {};
(function defineStatsApi() {
  /**
   * @param {String} source
   * @return {String}
   */
  function capitalizeFirstLetter(source) {
    return source.charAt(0).toUpperCase() + source.slice(1);
  }

  /**
   * A geographic region (either a country or a state/province within a country) for the
   * purposes of site usage statistics.
   */

  var StatsRegion = function () {
    /**
     * @param {Object} props
     * @param {String} props.code
     * @param {String} props.name
     */
    function StatsRegion(_ref7) {
      var code = _ref7.code,
          name = _ref7.name;

      _classCallCheck(this, StatsRegion);

      this.code = code;
      this.name = name;
    }

    /**
     * @return {String}
     */


    _createClass(StatsRegion, [{
      key: 'formattedName',
      get: function get() {
        return capitalizeFirstLetter(this.name);
      }
    }]);

    return StatsRegion;
  }();

  /**
   * A count of site usage from a particular state/province.
   */


  var GeoCount = function () {
    /**
     * @param {Object} props
     * @param {String} props.count
     * @param {String} props.country
     * @param {String} props.state
     */
    function GeoCount(_ref8) {
      var count = _ref8.count,
          country = _ref8.country,
          state = _ref8.state;

      _classCallCheck(this, GeoCount);

      this.count = parseInt(count, 10);
      this.country = country;
      this.state = state;
    }

    /**
     * @return {String}
     */


    _createClass(GeoCount, [{
      key: 'formattedCount',
      get: function get() {
        return AJS.addCommas(this.count);
      }
    }]);

    return GeoCount;
  }();

  /**
   * @param {Object} data
   * @return {GeoCount}
   */


  function createGeoCountFromApiData(data) {
    return new GeoCount({
      count: data.sum_count_value,

      country: new StatsRegion({
        code: data.geo_country,
        name: data.country
      }),

      state: new StatsRegion({
        code: data.geo_state,
        name: data.state
      })
    });
  }

  /**
   * Parse API data and produce a list of GeoCount objects, with counts made by combining sums
   * from various kinds of user agents.
   *
   * @param {Object}   data must have key counts_geo
   * @param {Object}   options
   * @param {String[]} options.uaKinds list of user-agent kinds to include
   * @return {GeoCount[]}
   */
  function createCombinedGeoCountsFromApiData(data) {
    var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref9$uaKinds = _ref9.uaKinds,
        uaKinds = _ref9$uaKinds === undefined ? ['robot', 'non_robot', 'unrecognized'] : _ref9$uaKinds;

    if (!data.counts_geo) throw new RangeError("API response doesn't contain property 'counts_geo'.");

    /**
     * @param {String} uaKind
     * @return {Boolean}
     */
    function uaKindIsAllowed(uaKind) {
      return uaKinds.indexOf(uaKind) !== -1;
    }

    var countsMap = {};

    for (var i = 0; i < data.counts_geo.length; i++) {
      var countData = data.counts_geo[i];

      // Whitelist user agents and skip unknown countries.
      if (uaKindIsAllowed(countData.ua_kind) && countData.country !== 'unknown') {
        var mapKey = countData.geo_country + '_' + countData.geo_state;

        // Add to an existing count or create a new one.
        if (countsMap[mapKey]) countsMap[mapKey].count += countData.sum_count_value;else countsMap[mapKey] = createGeoCountFromApiData(countData);
      }
    }

    return Object.keys(countsMap).map(function (key) {
      return countsMap[key];
    });
  }

  var apiBaseUrl = 'https://be-api.us.archive.org/views/v1';

  /**
   * Interface for fetching site usage stats from the stats API.
   */
  AJS.StatsApiClient = function () {
    function StatsApiClient() {
      _classCallCheck(this, StatsApiClient);
    }

    _createClass(StatsApiClient, null, [{
      key: 'getGeoCounts',

      /**
       * @param {String} identifier
       * @param {Object} options
       * @param {Number} options.days
       * @param {Number} options.limit
       * @return {jQuery.Promise<GeoData[]>}
       */
      value: function getGeoCounts(identifier) {
        var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref10$days = _ref10.days,
            days = _ref10$days === undefined ? 30 : _ref10$days,
            _ref10$limit = _ref10.limit,
            limit = _ref10$limit === undefined ? 100 : _ref10$limit,
            _ref10$uaKinds = _ref10.uaKinds,
            uaKinds = _ref10$uaKinds === undefined ? ['robot', 'non_robot', 'unrecognized'] : _ref10$uaKinds;

        var url = apiBaseUrl + '/detail/collection/' + identifier + '/' + days;

        return $.get(url).then(function (data) {
          try {
            return createCombinedGeoCountsFromApiData(data, { uaKinds: uaKinds }).sort(function (count1, count2) {
              return count1.count < count2.count ? 1 : -1;
            }).slice(0, limit);
          } catch (error) {
            return $.Deferred().reject(error);
          }
        });
      }
    }]);

    return StatsApiClient;
  }();
})();

/* eslint-disable */

/**
 * React component, Creative Commons license selector link.
 * Shows a "remove" link when a license is selected.
 */
AJS.CreativeCommonsLicenseLink = React.createClass({
  displayName: 'CreativeCommonsLicenseLink',

  DEFAULT_LINK_TEXT: 'Choose license',

  defaultProps: {
    licenseName: undefined,
    licenseSelected: false
  },

  getInitialState: function getInitialState() {
    return {
      licenseSelected: this.props.licenseSelected,
      linkText: this.props.licenseName || this.DEFAULT_LINK_TEXT,
      oldLicenseName: this.props.licenseName
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    this.setState({
      licenseSelected: newProps.licenseSelected,
      linkText: newProps.licenseName || this.DEFAULT_LINK_TEXT
    });
  },
  removeLicense: function removeLicense() {
    this.setState({
      licenseSelected: false,
      linkText: this.DEFAULT_LINK_TEXT
    });

    this.removeRetainLicenseInput();
  },


  /**
   * This is left over from the old, non-React version of this widget, so
   * we need to reach outside of the React component and change another DOM node.
   */
  removeRetainLicenseInput: function removeRetainLicenseInput() {
    var formItem = document.getElementById('retaincclicense');
    formItem.parentNode.removeChild(formItem);
  },
  wasLicensedChanged: function wasLicensedChanged() {
    return this.state.oldLicenseName !== this.state.linkText;
  },
  getLicenseChangeMessage: function getLicenseChangeMessage() {
    if (this.state.oldLicenseName && this.wasLicensedChanged()) {
      return 'Change license (currently ' + this.state.oldLicenseName + ')';
    }

    return '';
  },
  render: function render() {
    return React.createElement(
      'span',
      null,
      React.createElement(
        AJS.PopupLink,
        {
          href: this.props.href,
          height: '600',
          width: '600',
          title: this.getLicenseChangeMessage()
        },
        this.state.linkText
      ),
      ' ',
      this.state.licenseSelected && React.createElement(
        'span',
        null,
        '(',
        React.createElement(
          'button',
          {
            type: 'button',
            className: 'creativecommons-remove-license-button',
            onClick: this.removeLicense
          },
          'remove'
        ),
        ')'
      )
    );
  }
});
/* eslint-enable */

AJS.MORFreact = React.createClass({
  displayName: 'MORFreact',

  FACETS_PER_PAGE: 100,

  getInitialState: function getInitialState() {
    return {
      page: 1,
      href: '',
      mounted: false,
      hdr: '',
      options: []
    };
  },
  getFacets: function getFacets() {
    var self = this;
    // xxxx Math.rand anti-browser caching etc??
    $.getJSON(this.props.href + '&headless=1&output=json', function (ret) {
      // eslint-disable-next-line  no-param-reassign
      ret.href = self.props.href;
      // eslint-disable-next-line  no-param-reassign
      ret.mounted = true;
      log(ret);

      self.setState(ret);

      // now check all the boxes that user has previously/currently checked
      for (var j = 0; j < ret.checked.length; j++) {
        for (var i = 0; i < self.state.options.length; i++) {
          var val = self.state.options[i].val;
          // NOTE: == not === so "1970"==1970 (eg: year facet)
          // eslint-disable-next-line  eqeqeq

          if (ret.checked[j] == val) {
            self.refs[val].checked = true;
            break;
          }
        }
      }
    });
  },
  componentDidMount: function componentDidMount() {
    // Our component is visible in page now, effectively empty
    // Now ask server for facets to render in
    log('mounted');
    this.getFacets();
  },
  pageClick: function pageClick(e) {
    e.stopPropagation();
    e.preventDefault();

    // if user clicked on the |> "next page" icon, advance one page;
    // else they clicked on a specific page number to go to
    var page = $(e.target).text() === '' ? this.state.page + 1 : parseInt($(e.target).text(), 10);
    this.setState({ page: page });
  },
  submitClick: function submitClick() {
    log('submitted');
    var url = this.state.submit;
    for (var i = 0; i < this.state.options.length; i++) {
      var val = this.state.options[i].val;

      if (this.refs[val].checked) {
        var tmp = '&and[]=' + this.state.morf + '%3A"' + encodeURIComponent(val) + '"';
        log('checked', val, '=>', tmp);
        url += tmp;
      }
    }
    log(url);
    location.href = url;
  },
  render: function render() {
    var _this = this;

    log('rendering..');
    // log(this.props.href)
    // log(this.state.href)

    var loading = !this.state.mounted;
    if (this.state.href !== '' && this.props.href !== this.state.href) {
      loading = true;
      this.getFacets();
    }

    $('#morf-modal .modal-title').html(loading ? '' : this.state.hdr);

    var min = (this.state.page - 1) * this.FACETS_PER_PAGE;
    var max = min + this.FACETS_PER_PAGE - 1;
    var options = this.state.options.map(function (option, n) {
      return React.createElement(
        'div',
        { className: n >= min && n <= max && !loading ? 'farow' : 'farow hidden', key: option.val },
        React.createElement(
          'div',
          { className: 'facell' },
          React.createElement('input', {
            onClick: _this.handleClick,
            type: 'checkbox',
            name: option.val,
            value: option.val,
            ref: option.val
          })
        ),
        React.createElement(
          'div',
          { className: 'facell' },
          AJS.addCommas(option.n)
        ),
        React.createElement(
          'div',
          { className: 'facell' },
          option.txt ? option.txt : option.val
        )
      );
    });

    var paging = [];
    var npages = Math.ceil(this.state.options.length / this.FACETS_PER_PAGE);
    var loadnote = '';
    if (loading) {
      loadnote = React.createElement(
        'div',
        { style: { 'font-style': 'italic', margin: '25px', 'text-align': 'center' } },
        'loading filters...',
        React.createElement('img', { alt: '', style: { width: '25px' }, key: loading, src: '/images/loading.gif' })
      );
    } else {
      var page = 1;
      for (page = 1; page <= npages; page++) {
        if (this.state.page === page) paging.push(React.createElement(
          'div',
          { key: 'p'.concat(page), className: 'topinblock' },
          page
        ));else paging.push(React.createElement(
          'a',
          { href: '#'.concat(page), key: 'p'.concat(page), onClick: this.pageClick },
          page
        ));
        paging.push(' ');
      }
      if (this.state.page < npages) {
        var tmp = React.createElement(
          'a',
          { href: '#'.concat(page), key: 'pp'.concat(page), onClick: this.pageClick },
          React.createElement('span', { className: 'iconochive-right-solid' })
        );
        paging.push(tmp);
      }
    }
    return React.createElement(
      'div',
      { id: 'morf-page' },
      React.createElement(
        'form',
        null,
        React.createElement(
          'div',
          { className: 'fatable facet-subject' },
          options
        ),
        loadnote,
        React.createElement(
          'div',
          { id: 'morf-paging' },
          paging
        ),
        React.createElement(
          'center',
          null,
          React.createElement('input', { className: loading ? 'btn-primary hidden' : 'btn-primary', type: 'button', value: 'Apply your filters', onClick: this.submitClick })
        )
      )
    );
  }
}); // end MORFreact


/** ******************************************************************************************
 *
 *
 *    THIRD PARTY INCLUDES WE CANT LIVE WITHOUT! 8-)
 *
 *
 ******************************************************************************************** */

/* eslint-disable */
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
$.cookie = function (name, value, options) {
  if (typeof value != 'undefined') {
    // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }

    // CAUTION: Needed to parenthesize options.path and options.domain
    // in the following expressions, otherwise they evaluate to undefined
    // in the packed version for some reason...
    var path = options.path ? '; path=' + options.path : '';
    var domain = options.domain ? '; domain=' + options.domain : '';
    var secure = options.secure ? '; secure' : '';

    if (navigator.userAgent.indexOf('MSIE 9.') > 0) {
      // IE9 sucks and can kiss it (tracey may2012)
      domain = '';
      path = '';
    }

    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    return true;
  } else {
    // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = $.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};
/* eslint-enable */

// (adapted) from http://www.queness.com/code-snippet/6853/center-an-element-on-the-screen-using-jquery
// then you can use it like:
//      $("#gridmini").center()

// eslint-disable-next-line  no-param-reassign
$.fn.center = function jquery_extension_center() {
  var myheight = this.height() + parseInt(this.css('padding-top'), 10) + parseInt(this.css('padding-bottom'), 10);

  log('myheight', myheight);
  log('mywidth', this.width());
  log('w.height', $(window).height(), 'w.width', $(window).width(), 'w.scrollTop', $(window).scrollTop(), 'w.scrollLeft', $(window).scrollLeft());

  var top = void 0;
  var left = void 0;
  if (AJS.ios) {
    var vpW = window.innerWidth;
    var vpH = window.innerHeight;

    log('vpH', vpH);
    log('vpW', vpW);

    top = (vpH - myheight) / 2 + $(window).scrollTop();
    left = (vpW - this.width()) / 2 + $(window).scrollLeft();
  } else {
    top = ($(window).height() - myheight) / 2;
    left = ($(window).width() - this.width()) / 2;
  }

  // for small viewports like iphone, when centering popups, ensure minimally +20px
  top = Math.max(20, top);
  left = Math.max(20, left);

  this.css({
    position: AJS.ios ? 'absolute' : 'fixed',
    display: 'block',
    top: top,
    left: left
  });

  return this;
}; // end $.fn.center


$(function () {
  // Use this global hack, by adding class 'accessible-link' to any mouse-only element div/img
  AJS.makeMouseElementAccessible('.accessible-link');

  AJS.setUpActionTracking(); // Must be before other form submit handlers are assigned
  AJS.nav_tophat_setup();
  AJS.nav_tophat_wb_setup();

  // UI component initialization
  AJS.setupPopupLink();
  AJS.setUpCreativeCommonsLicenseLink();
  AJS.setUpSearchForms();
  AJS.setUpBookReaderIframe();
  AJS.setUpAccordions();
  AJS.setUpRelatedItems();
  (0, _setUpCopyableTexts2.default)();

  /* global  archive_setup */
  if (typeof archive_setup !== 'undefined') {
    // when DOM loaded/stable, do some setup
    $(function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = archive_setup[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fn = _step.value;

          fn();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  }

  AJS.footer();
});

// promote to globals:
window.AJS = AJS;
window.Timegraf = Timegraf;

/***/ }),

/***/ "./src/js/setUpCopyableTexts.js":
/*!**************************************!*\
  !*** ./src/js/setUpCopyableTexts.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clipboard = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");

var _clipboard2 = _interopRequireDefault(_clipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Shows a message indicating the status of the copy operation
 *
 * Sets proper ARIA properties to ensure the status is read out by
 * accessible technologies
 *
 * @param {HTMLElement} copyableText
 * @param {String}      message
 */
function showStatusMessage(copyableText, message) {
  var output = copyableText.querySelector('output');

  if (!output) {
    output = document.createElement('output');
    output.setAttribute('role', 'alert');
    copyableText.appendChild(output);
  }

  // Empty it first to trigger accessibility technologies to read out the
  // value even if it's the same as before
  output.textContent = '';
  output.textContent = message;
}

/**
 * Creates a copy button with an event listener that triggers the
 * copy operation
 *
 * @param {HTMLElement} copyableText
 */
function createButton(copyableText) {
  var button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Copy';
  button.title = 'Copy to clipboard';
  button.setAttribute('data-clipboard-target', '#' + copyableText.querySelector('input').id);

  return button;
}

/**
 * Sets up a specific copyable text component
 *
 * @param {HTMLElement} copyableText
 */
function setUpCopyableText(copyableText) {
  // No <input> to copy, abort
  if (!copyableText.querySelector('input')) return;

  copyableText.appendChild(createButton(copyableText));

  // Mark it as "ready" so we can avoid double-initializing
  copyableText.setAttribute('data-copyable-text-ready', '');
}

/**
 * Initialize ClipboardJS behavior for all buttons and attach event listeners to show statuses
 */
function setUpClipboardJS() {
  var clipboard = new _clipboard2.default('[data-copyable-text] [data-clipboard-target]');

  clipboard.on('success', function (event) {
    var copyableText = event.trigger.parentElement;

    var message = copyableText.getAttribute('data-copyable-text-success-message') || 'Text copied to clipboard.';

    showStatusMessage(copyableText, message);
  });

  clipboard.on('error', function (event) {
    var copyableText = event.trigger.parentElement;

    var message = copyableText.getAttribute('data-copyable-text-error-message') || 'Something went wrong.';

    showStatusMessage(copyableText, message);
  });
}

/**
 * Read-only text input component with a button to copy the text to the
 * user's clipboard
 *
 * Progressively enhances the input by generating the button and status
 * message entirely in the JavaScript.
 *
 * Currently only supports <input>s but it can be easily modified to support
 * <textarea>s in the future.
 *
 * @see copyable-text.less
 */
function setUpCopyableTexts() {
  var copyableTexts = document.querySelectorAll('[data-copyable-text]:not([data-copyable-text-ready])');

  // No components found, abort
  if (copyableTexts.length <= 0) return;

  // Browser cannot programmatically copy, abort
  if (!_clipboard2.default.isSupported()) return;

  // Turn into an array so we can use forEach()
  [].concat(_toConsumableArray(copyableTexts)).forEach(setUpCopyableText);
  setUpClipboardJS();
}

exports.default = setUpCopyableTexts;

/***/ }),

/***/ "./src/less/archive.less":
/*!*******************************!*\
  !*** ./src/less/archive.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "archive.css";

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./src/js/archive.js ./src/less/archive.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mitra/git/dweb-archive/includes/src/js/archive.js */"./src/js/archive.js");
module.exports = __webpack_require__(/*! /Users/mitra/git/dweb-archive/includes/src/less/archive.less */"./src/less/archive.less");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9kaXN0L2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaWEtZGVzaWduLXN5c3RlbS9wdWJsaWMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2V0VXBDb3B5YWJsZVRleHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXNzL2FyY2hpdmUubGVzcyJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwialF1ZXJ5IiwibG9nIiwibG9jYXRpb24iLCJob3N0Iiwic3Vic3RyIiwiY29uc29sZSIsImJpbmQiLCJ0aHJvdHRsZSIsImZuIiwidGhyZXNoaG9sZCIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJsYXN0IiwiZGVmZXJUaW1lb3V0IiwiYXJncyIsIm5vdyIsIkRhdGUiLCJjYWxsRm4iLCJhcHBseSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZXBsYWNlQm9va1JlYWRlckZyYWdtZW50IiwicGF0aFN0cmluZyIsIm5ld0ZyYWdtZW50IiwiZnJhZ21lbnRSZWdleCIsIm1hdGNoIiwicmVwbGFjZSIsIkFKUyIsImVsbSIsImluX3Nob3ciLCJwYXJlbnRzIiwiaWQiLCJjaGFuIiwic2hvdyIsImxlbmd0aCIsIm9wZW5lZCIsInBhcmVudCIsImZpbmQiLCJ0b2dnbGUiLCJhdHRyIiwidGV4dCIsImNvbmNhdCIsImRpdiIsInVybCIsImhyZWYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXQiLCJodG0iLCJhcHBlbmQiLCJpc1RvdWNoRGV2aWNlIiwiYWRkQ2xhc3MiLCJsb2dvVGV4dCIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJuYXZoYXRfY2xpY2siLCJldnQiLCJ4cyIsImhhdF9vcGVuIiwiaGFzQ2xhc3MiLCJuYXZsaW5rIiwibXQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaXNub3ciLCJoaWRlIiwiY29sbGFwc2UiLCJ0b3BoYXRfZG9udF9jb3VudF9maXJzdF9vcGVuIiwiYXJjaGl2ZV9hbmFseXRpY3MiLCJzZW5kX3BpbmciLCJraW5kIiwiZWMiLCJlYSIsImVsIiwicGF0aG5hbWUiLCJjYWNoZV9idXN0IiwiTWF0aCIsInJhbmRvbSIsIm9uZSIsImNsaWNrIiwiaGFzIiwiZG9jdW1lbnQiLCJldmVudCIsIiRlIiwiaXMiLCJEb2N1bWVudFRvdWNoIiwidG9vbHRpcCIsIiRzaGFyZWRvd24iLCIkd3JhcGRhcmsiLCJ3cmFwZGFya193YXRjaGVyX3B0ciIsInNldEludGVydmFsIiwid3JhcGRhcmtfd2F0Y2hlciIsImNsZWFySW50ZXJ2YWwiLCJ3cmFwZGFya0hUIiwib2Zmc2V0IiwidG9wIiwiaW5uZXJIZWlnaHQiLCJwYXJzZUludCIsImNzcyIsImhlaWdodCIsIm11dGVkTk9XIiwiY29va2llIiwiZW11bGF0b3IiLCJzZXRNdXRlIiwicGxheWVyIiwiandwbGF5ZXIiLCJ2b2xub3ciLCJnZXRWb2x1bWUiLCJtdXRlX2NsaWNrX3ByaW9yX3ZvbHVtZSIsInNldFZvbHVtZSIsInBhdGgiLCJleHBpcmVzIiwiZ2FtZSIsInRvU3RyaW5nIiwiaWRlbnRpZmllciIsIklBTG9hZGVyIiwic2NhbGUiLCJwYXJzZUZsb2F0IiwibW9kdWxlIiwiaW5kZXhPZiIsInVubXV0ZSIsIm11dGUiLCJ0aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uIiwidGhlYXRyZV9jb250cm9sc19wb3NpdGlvbl90aHJvdHRsZXIiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJmYWRlT3V0Iiwic3RhcnQiLCJoYXNDdXN0b21DU1MiLCJFTSIsIkpTTUVTUyIsIkRPU0JPWCIsImNhbnZhcyIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsIk1vZHVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciIsIiRzZWxlY3RvckluIiwicGVnVG9wIiwid2lkdGhJbiIsImhlaWdodEluIiwiJHNlbGVjdG9yIiwidmlkZW8iLCJ3aWR0aCIsInJpZ2h0X2d1dHRlcl93aWR0aCIsInJvdW5kIiwidmlzaWJpbGl0eSIsInJpZ2h0IiwibWF4IiwidGhlYXRyZXNpemUiLCJwb2xsaW5nTWlsbGlzIiwiJHRleHR5aWZyYW1lIiwiY2hhbmdlQmdDb2xvciIsIiRjb250ZW50RG9tIiwiY29udGVudERvY3VtZW50IiwiJG1hdGNoIiwiYmdDb2xvckludGVydmFsIiwiaXNMZW5kYWJsZUJvb2siLCJkYXRhIiwiYm9va3NpemVfY29udHJvbHNfaGlkZGVuIiwiYm9va3NpemVfY29udHJvbHMiLCJib29rU2l6ZUludGVydmFsIiwiJGlmcmFtZSIsIiRpZnJhbWVET00iLCIkYm9vayIsIiRuYXZiYXIiLCJvdmVyZmxvdyIsInJlc2l6ZXIiLCJtZXRhZGF0YUhlaWdodCIsIm1heEgiLCJtYXhXIiwib3V0ZXJXaWR0aCIsIldIIiwibWluIiwicG9wY29ybl90aHJvdHRsZXIiLCJvbkNoYW5nZSIsInRoZWF0cmVzaXplX21heGhlaWdodCIsIm1heGltdW1IZWlnaHQiLCJtaW5IZWlnaHQiLCJ0YXJnZXRIZWlnaHQiLCJ0aGVhdHJlc2l6ZV90aHJvdHRsZXIiLCJzZWxlY3RvciIsImVuYWJsZVRocmVhdHJlQ2hhbmdlIiwiJGNhcm91c2VsIiwiaW1hZ2VQcm9taXNlcyIsIm1hcCIsImkiLCJpbWciLCJwcm9taXNlIiwiRGVmZXJyZWQiLCJyZXN1bHQiLCJjb21wbGV0ZSIsInJlc29sdmUiLCJuYXR1cmFsSGVpZ2h0Iiwid2hlbiIsInRoZW4iLCJjdXJySGVpZ2h0IiwibWF4SW1hZ2VIZWlnaHQiLCJ0cmlnZ2VyIiwianciLCJnZXRTdGF0ZSIsInRvTG93ZXJDYXNlIiwicGF1c2UiLCJsbmsiLCJzd2l0Y2hUb0EyWiIsInByb3BzIiwic2VsZWN0b3JJRCIsImNvbnRlbnRzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJtb2RhbCIsIm1vZGFsX2dvIiwidGl0bGUiLCJoZWFkZXJDbGFzcyIsImlnbm9yZV9sbmsiLCJhdXRvX3JlbW92ZSIsImJvZHkiLCJ2YWwiLCJhbGVydCIsImNsZWFuZWQiLCJvcHRzIiwib3B0aW9ucyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJodG1sIiwicGxhY2VtZW50IiwicG9wb3ZlciIsImRhdGVfc3dpdGNoZXJfaG92ZXIiLCJkYXRlX3N3aXRjaGVyX2NsaWNrIiwiZmlyc3QiLCJDMyIsIkMyMzQiLCJhdmFpbFdpZHRoIiwiQzIiLCJDNCIsImNvb2tpZV9yYW5nZSIsImRlZmF1bHRzIiwicHJlZmVyIiwic2hvd2RldGFpbHMiLCJjaGVja2VkIiwiYnRuIiwiJGJvZHkiLCJ0byIsImRvbWFpbiIsInRvZ2dsZUNsYXNzIiwidGlsZXIiLCJpblRhYiIsInRyaW0iLCJ0bXAiLCJpa2luZCIsImVhY2giLCJrIiwicm93Iiwia2V5IiwibW91c2VvdmVyIiwiZSIsIm1vdXNlb3V0Iiwic2VsZWN0b3JJbiIsIm5vUmVjYWxsIiwidGlsZU1hcmdpbkgiLCJ0aWxlTWFyZ2luVyIsInByb3AiLCIkcGFyZW50Um93IiwiY3NzR3JpZCIsIkNTUyIsInRpbGVyUFJFViIsIndpblciLCJwYWQiLCJuUGVyUm93IiwiZ3V0dGVyIiwidGlsZVdpZHRoIiwiVElMRV9XSURUSCIsInVuc291cmNlZCIsImZpcnN0TGVmdCIsInBhcmVudF9ob3ZlciIsIiRmYWNldHMiLCJmYWNldHNXaWR0aCIsIlRJTEVfV0lEVEhfU01BTEwiLCJmbG9vciIsImV4dHJhIiwibkltZ1plcm9IZWlnaHQiLCJuSW1nWmVyb0hlaWdodEFyeSIsIm1heHRvcCIsInRvcHMiLCJsZWZ0cyIsInRpbGVyX3Vuc291cmNpbmciLCJ2Iiwic3JjIiwib25FcnJvciIsInJlbW92ZUF0dHIiLCJjb2xQUkVWIiwibm90IiwiaWR4IiwiJHZhbCIsIiR2YWxIVCIsImNlaWwiLCJjb2wiLCJjb2xURVNUIiwiY21wVEVTVCIsImxlZnQiLCJwdXNoIiwiam9pbiIsInRpbGVyX3Rocm90dGxlciIsImlkc2VsIiwiJHNlbCIsIiRuZXciLCIkbm93IiwiaWtpbmRfbW9iaWxlX2NoYW5nZV9pZ25vcmVfbmV4dCIsIiRzZWxvcHQiLCIkaWtpbmRzIiwiJGlraW5kIiwiZmlsdGVyIiwicGFnZVR5cGUiLCJwdXNoU3RhdGUiLCJoaXN0b3J5IiwidGFiUGljayIsImhhc2gyYXJnIiwidGFiIiwiYXJnIiwidGFiYnlfbm9fcHVzaFN0YXRlX25leHRfY2xpY2siLCJsb2NOT1ciLCJsb2NORVciLCJwcm90b2NvbCIsImdyYWZzIiwiYWxzb0ZvdW5kRWxlbWVudCIsIiR3aW5kb3ciLCJ0aHJvdHRsZWRMaXN0ZW5lciIsImFsc29Gb3VuZCIsInRvcE9mZnNldCIsIndpbmRvd0hlaWdodCIsImxhenlMb2FkU3RhcnQiLCJzY3JvbGxUb3AiLCJkb1doZW5TY3JvbGxlZFRvUmVsYXRlZFNlY3Rpb24iLCJvZmYiLCJzY3JvbGwiLCJnZXRSZWxhdGVkSXRlbXMiLCJyZXNwb25zZSIsInRpbGViYXJzIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJzaXplIiwiUHJvbWlzZSIsInJlamVjdCIsImFwaVVybCIsInBhcmFtIiwiaGFzaERhdGEiLCJhcGlFcnJvciIsIml0ZW1zIiwiaGl0cyIsIkVycm9yIiwiZm9yRWFjaCIsIml0ZW0iLCJpdGVtU291cmNlIiwiX3NvdXJjZSIsInNpbmdsZUhhc2giLCJfaWQiLCJudW1SZXZpZXdzIiwibGVuZGluZ0VuYWJsZWQiLCJsZW5kaW5nQXZhaWxhYmxlIiwibG9naW5SZXF1aXJlZCIsImxlbmRDbGFzcyIsImZhdm9yaXRlIiwiY3JlYXRvciIsInZhbHVlIiwiZG93bmxvYWRzIiwibWVkaWF0eXBlIiwidHh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJ4ZXIiLCJyZW1vdmUiLCIkaXRlbSIsImlkWCIsImxpc3RraW5kIiwibmV4dCIsImlkcyIsInRvQXJyYXkiLCJyZWR1Y2UiLCJhIiwiYiIsIiRmb3JtIiwic3VibWl0IiwiaGVhZF9pbWdfZHJhZ2Ryb3Bfc2V0dXBfZG9uZSIsImhlYWRfaW1nX3JlcGxhY2VhYmxlIiwiZmlsZV9waWNrZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm92ZXIiLCJ4IiwicGFnZVgiLCJvcmlnaW5hbEV2ZW50IiwieSIsInBhZ2VZIiwib3V0ZXJIZWlnaHQiLCJjYW5jZWxGaWxlIiwic3VjY2VzcyIsInVwbG9hZEZpbGUiLCJmYWlsIiwiWE1MSHR0cFJlcXVlc3QiLCJiYWRGaWxlIiwieGhyIiwiZmlsZTJwb3N0IiwidXBsb2FkIiwib3BlbiIsIm5hbWUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlcGx5IiwicmVzcG9uc2VUZXh0IiwibWF0IiwidGFza19pZCIsInN0YWxrZXJfcHRyIiwic3RhbGtlciIsImFqYXgiLCJ0eXBlIiwiZGF0YVR5cGUiLCJ4bWwiLCJncmVlbiIsImJsdWUiLCJyZWQiLCJuV2FpdCIsImZpbGVzIiwicHJldmlld0ZpbGUiLCJkYXRhVHJhbnNmZXIiLCJ3MSIsImgxIiwidzIiLCJoMiIsImlvcyIsIkZpbGVSZWFkZXIiLCJyZWFkZXIiLCJvbmxvYWQiLCJpbSIsIkltYWdlIiwicmVhZEFzRGF0YVVSTCIsInBhZ2VpbmZvIiwidXJsc3RhcnQiLCJtdWx0aV95ZWFyIiwibGFzdF95ZWFyIiwieWVhciIsInNlcCIsInN0ciIsImxhc3R5ZWFybW9udGgiLCJwYWdlcyIsInNwbGl0IiwibW9udGgiLCJkYXkiLCJ5ZWFybW9udGgiLCJza2lwX2RheSIsIm1vbnRoTmFtZSIsInBhZ2UiLCJwbnVtIiwiaiIsIiRncmFmczEiLCIkZ3JhZnMyIiwidG9rIiwic2V0VXBUb3BSZWdpb25zVGFibGUiLCJmb3JtYXQiLCIkZm9ybWF0R3JvdXAiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwidGhlQXJnTmFtZSIsInRyeV9mdWxsIiwic0FyZ3MiLCJzZWFyY2giLCJzbGljZSIsInIiLCJ1bmVzY2FwZSIsImhpZGVMb2dvVGV4dCIsIm1vdXNldGltZXIiLCJmYWRlSW4iLCJtb3VzZWxlYXZlIiwibmV3dG9wIiwiY2hlY2siLCJtb3JlX3NlYXJjaGluZyIsInVybEluIiwicGFnZV9ub3ciLCIkbW9yZV9zZWFyY2giLCJwYWdlS2V5IiwicGFnZV9tYXAiLCJ1cmxyZXBsYWNlIiwicmVwbGFjZVN0YXRlIiwiYWRkTm90ZXMiLCJhZGRpbmdOb3Rlc0tpbmQiLCJtb3JlX3NlYXJjaF90aHJvdHRsZXIiLCJzZW5kX3Njcm9sbF9mZXRjaF9ldmVudCIsImVtYmlkIiwiJGVtYmlkIiwiZW1idHh0IiwiY2xhc3MiLCJwb3NpdGlvbiIsInBhZGRpbmciLCJiZXN0SFQiLCJjb25mIiwiY29uZkluIiwiZmVlZGJhY2tfb25seSIsIl9tb2RhbF9hZGQiLCJleGl0aW5nIiwic3VibWl0dGVkIiwicG9zdGRhdGEiLCJzZXJpYWxpemUiLCJwb3N0IiwiZXhpdEZOIiwiYm9va21hcmtSZXMiLCJjZW50ZXIiLCJhdXRvX2Nsb3NlIiwibG9naW4iLCJzaG93biIsImZvbGxvd19saW5rX29uX2Rpc21pc3MiLCJodG1JbiIsImtleXZhbHMiLCJyZXMiLCJpc0Zhdm9yaXRlU3VjY2Vzc2Z1bCIsIiRmYXZNb2RhbCIsImZhaWxNZXNzYWdlIiwib2JqIiwiblN0ciIsIngxIiwieDIiLCJyZ3giLCJ0ZXN0IiwiYXhpcyIsInRvRml4ZWQiLCJzdWZmaXhGbXQiLCJkIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2FsbGJhY2siLCJwbG90dGVycyIsImNmZ0luIiwiZm10X2ZuIiwicHRzIiwibWFueSIsImNmZyIsInhheGlzIiwibW9kZSIsImNvbG9yIiwiZGFyayIsInlheGlzIiwiYmFyV2lkdGgiLCJkYXlCYXJzTm9Qb2ludHMiLCJzZXJpZXMiLCJiYXJzIiwiZmlsbCIsInBvaW50cyIsImdyaWQiLCJib3JkZXJDb2xvciIsImhvdmVyYWJsZSIsImJhY2tncm91bmRDb2xvciIsInRpcCIsIkdyYXBoUHJpb3JJbmRleCIsImFyeSIsIm5vTGFiZWwiLCJsYWJlbCIsInNlbGlkIiwicGxvdCIsInBvcyIsImRhdGFJbmRleCIsImRhdGFwb2ludCIsIiRncmFmIiwicGVnVG8iLCJwZWdUb1ZhbCIsIkNvbG9yVGhpZWYiLCJ3ZWxjb21lX3JlY29sb3JlZCIsImN0IiwicGFsZXR0ZSIsImdldFBhbGV0dGUiLCJkb21pbmFudENvbG9yUkdCIiwiYXZnVmFsIiwiZWxlbWVudCIsIm1ha2VNb3VzZUVsZW1lbnRBY2Nlc3NpYmxlR28iLCJjb2RlIiwia2V5Q29kZSIsIndoaWNoIiwia19zcGFjZSIsImtfZW50ZXIiLCJtdWx0aVZhbFNwbGl0Q2hhciIsImF1dG9jb21wbGV0ZSIsIm1pbkxlbmd0aCIsInNvdXJjZSIsInJlcXVlc3QiLCJ1aSIsInRlcm0iLCJwb3AiLCJmb2N1cyIsInNlbGVjdCIsImF1dG9jb21wbGV0ZV9zZWxlY3QiLCJ0ZXJtcyIsImFkZE5vdGVIVE0iLCIkaHRtIiwicHJldiIsIiRub3RlIiwiYWN0aW9uIiwiJHBhcmVudCIsIiRvcmlnTm90ZSIsIlRWIiwiVFYyIiwidW5wbGF5IiwidGh1bWJ6aWxsYXMiLCJzdGFydGVuZCIsIlRWMyIsIkNMSVBfU0VDX01BWDIiLCIkaW1ncyIsIndpbkgiLCJ3IiwiaCIsIldBWUJBQ0siLCJIT1NUU19FTkRQT0lOVCIsIkFOQ0hPUlNfRU5EUE9JTlQiLCJSRURJUkVDVF9VUkwiLCJSRURJUkVDVF9TRUFSQ0giLCJzZWFyY2hfb3JfY2FsZW5kYXIiLCJxdWVyeSIsIiRpbnB1dCIsImZpcmVBbmFseXRpY3NUcmFja2luZ0V2ZW50IiwidHlwZWFoZWFkIiwiY2FjaGUiLCJkb25lIiwicHJvY2VzcyIsImhvc3RzIiwiaXNVcmwiLCJleGNsdWRlZCIsImRpc3BsYXlfbmFtZSIsImRhdGEyIiwibWF0Y2hlciIsImRpc3BsYXlUZXh0IiwiYXV0b1NlbGVjdCIsImRlbGF5IiwiZml0VG9FbGVtZW50IiwibWluTGVuZ2h0IiwiY2hhbmdlIiwiY3VycmVudCIsInBhcmFtcyIsInNjcm9sbGJhcnMiLCJyZXNpemFibGUiLCJ0b29sYmFyIiwiZGlyZWN0b3JpZXMiLCJtZW51YmFyIiwic3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsInBhcmFtUGFpcnMiLCJjaGlsZHJlbiIsImhhbmRsZUNsaWNrIiwib3BlblBvcHVwIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwibGljZW5zZU5hbWUiLCJsaWNlbnNlU2VsZWN0ZWQiLCJzZWFyY2hGb3JtcyIsInNldFVwU2VhcmNoRm9ybSIsImZvcm1Ob2RlIiwiZm9ybSIsInNlYXJjaEJhciIsInNlYXJjaE9wdGlvbnMiLCJrZWVwT3BlbldoZW5DaGFuZ2VkIiwiZm9ybUNoYW5nZWQiLCJyZWRpcmVjdFdheWJhY2tTZWFyY2hlcyIsIndheWJhY2tNYWNoaW5lU2VhcmNoVXJsIiwiZWxlbWVudHMiLCJjaGVja2VkSW5wdXQiLCJzZWFyY2hJbnB1dCIsInNpblZhbHVlIiwic2VhcmNoVmFsdWUiLCJvcGVuT3B0aW9ucyIsImNsb3NlT3B0aW9ucyIsImhhbmRsZUZvY3VzQ2hhbmdlIiwidGFyZ2V0RWxlbWVudCIsImNvbnRhaW5zIiwicmVsYXRlZFRhcmdldCIsImluZGV4Iiwibm9kZSIsIm1lc3NhZ2VUeXBlIiwiaWZyYW1lIiwiaGFzQXR0cmlidXRlIiwidXBkYXRlVXJsIiwiZnJhZ21lbnQiLCJoYXNoIiwiY2xvc2VBbGxFeGNlcHQiLCJkZXRhaWxzRWxzIiwic2VsZWN0ZWREZXRhaWxzIiwiQXJyYXkiLCJmcm9tIiwiZGV0YWlscyIsInNldFVwQWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwiaGFuZGxlVG9nZ2xlIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGUiLCJzZXRBdHRyaWJ1dGUiLCJsaW5rIiwiaXNfYWR2YW5jZWRfVFZfc2VhcmNoIiwiYWR2IiwibWFwcGluZyIsInltZCIsInRvSVNPU3RyaW5nIiwiYWpheFNldHVwIiwiZ2V0U2NyaXB0IiwiVFZTZWFyY2giLCJnZXRKU09OIiwicHJvUGljayIsImhvc3RuYW1lIiwiY2F0ZWdvcnkiLCJjbGlja1RyYWNraW5nQXR0cmlidXRlTmFtZSIsImZvcm1UcmFja2luZ0F0dHJpYnV0ZU5hbWUiLCJhY3Rpb25IYW5kbGVyIiwiYXR0cmlidXRlTmFtZSIsImNhdGVnb3J5QWN0aW9uIiwiY2F0ZWdvcnlBY3Rpb25QYXJ0cyIsIndpZHRoQXR0cmlidXRlIiwiaGVpZ2h0QXR0cmlidXRlIiwiZGF0YUhhc2giLCJjYXB0aW9uIiwiY2FwdGlvbkNsYXNzIiwiY291bnRzIiwiY291bnQiLCJzdGF0ZSIsImNvdW50cnkiLCJmb3JtYXR0ZWROYW1lIiwiZm9ybWF0dGVkQ291bnQiLCJlcnJvck1zZyIsIm9yaWdpbmFsTWVzc2FnZVRleHQiLCJhcGlPcHRpb25zIiwidWFLaW5kcyIsImRheXMiLCJsaW1pdCIsIlN0YXRzQXBpQ2xpZW50IiwiZ2V0R2VvQ291bnRzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY2dpX2FyZ3MiLCJUaW1lZ3JhZiIsImxlZnRUUyIsInJpdGVUUyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiYyIsInJlYWxHcmFwaFdpZHRoIiwiR1JBUEhfV0lEVEgiLCJHUkFQSF9QQURESU5HIiwibWF4U2xpZGUiLCJnZXRUaW1lIiwiY3NNaW5UUyIsInJpdGUiLCIkc2xpZGVyZGl2IiwiR1JBUEhfSEVJR0hUIiwiekluZGV4Iiwic2xpZGVyIiwicmFuZ2UiLCJ2YWx1ZXMiLCJzbGlkZSIsInRzIiwiZDEiLCJkMiIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZXBpY2tlciIsImZvcm1hdERhdGUiLCJoaWRlTCIsImhpZGVSIiwiZm9mZiIsInRvZmYiLCJwaW5rbWUiLCJzdG9wIiwiYWRqdXN0IiwidGltZWNoYW5nZWQiLCJiZWNvbWUiLCJxIiwicGlua0wiLCJwaW5rUiIsInJlY3QiLCJ0dGwiLCJvbmVkYXlzcGFuIiwiZnJvbTIiLCJ0bzIiLCJlbmQiLCJkZWZpbmVTdGF0c0FwaSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsIlN0YXRzUmVnaW9uIiwiR2VvQ291bnQiLCJhZGRDb21tYXMiLCJjcmVhdGVHZW9Db3VudEZyb21BcGlEYXRhIiwic3VtX2NvdW50X3ZhbHVlIiwiZ2VvX2NvdW50cnkiLCJnZW9fc3RhdGUiLCJjcmVhdGVDb21iaW5lZEdlb0NvdW50c0Zyb21BcGlEYXRhIiwiY291bnRzX2dlbyIsIlJhbmdlRXJyb3IiLCJ1YUtpbmRJc0FsbG93ZWQiLCJ1YUtpbmQiLCJjb3VudHNNYXAiLCJjb3VudERhdGEiLCJ1YV9raW5kIiwibWFwS2V5IiwiYXBpQmFzZVVybCIsInNvcnQiLCJjb3VudDEiLCJjb3VudDIiLCJDcmVhdGl2ZUNvbW1vbnNMaWNlbnNlTGluayIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJERUZBVUxUX0xJTktfVEVYVCIsImRlZmF1bHRQcm9wcyIsImdldEluaXRpYWxTdGF0ZSIsImxpbmtUZXh0Iiwib2xkTGljZW5zZU5hbWUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsInJlbW92ZUxpY2Vuc2UiLCJyZW1vdmVSZXRhaW5MaWNlbnNlSW5wdXQiLCJmb3JtSXRlbSIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwid2FzTGljZW5zZWRDaGFuZ2VkIiwiZ2V0TGljZW5zZUNoYW5nZU1lc3NhZ2UiLCJNT1JGcmVhY3QiLCJGQUNFVFNfUEVSX1BBR0UiLCJtb3VudGVkIiwiaGRyIiwiZ2V0RmFjZXRzIiwic2VsZiIsInJldCIsInJlZnMiLCJjb21wb25lbnREaWRNb3VudCIsInBhZ2VDbGljayIsInN1Ym1pdENsaWNrIiwibW9yZiIsImxvYWRpbmciLCJvcHRpb24iLCJuIiwicGFnaW5nIiwibnBhZ2VzIiwibG9hZG5vdGUiLCJtYXJnaW4iLCJ0b1VUQ1N0cmluZyIsImRhdGUiLCJzZXRUaW1lIiwic2VjdXJlIiwiY29va2llVmFsdWUiLCJjb29raWVzIiwic3Vic3RyaW5nIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwianF1ZXJ5X2V4dGVuc2lvbl9jZW50ZXIiLCJteWhlaWdodCIsInNjcm9sbExlZnQiLCJ2cFciLCJpbm5lcldpZHRoIiwidnBIIiwiZGlzcGxheSIsIm1ha2VNb3VzZUVsZW1lbnRBY2Nlc3NpYmxlIiwic2V0VXBBY3Rpb25UcmFja2luZyIsIm5hdl90b3BoYXRfc2V0dXAiLCJuYXZfdG9waGF0X3diX3NldHVwIiwic2V0dXBQb3B1cExpbmsiLCJzZXRVcENyZWF0aXZlQ29tbW9uc0xpY2Vuc2VMaW5rIiwic2V0VXBTZWFyY2hGb3JtcyIsInNldFVwQm9va1JlYWRlcklmcmFtZSIsInNldFVwQWNjb3JkaW9ucyIsInNldFVwUmVsYXRlZEl0ZW1zIiwiYXJjaGl2ZV9zZXR1cCIsImZvb3RlciIsInNob3dTdGF0dXNNZXNzYWdlIiwiY29weWFibGVUZXh0Iiwib3V0cHV0IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidGV4dENvbnRlbnQiLCJjcmVhdGVCdXR0b24iLCJidXR0b24iLCJzZXRVcENvcHlhYmxlVGV4dCIsInNldFVwQ2xpcGJvYXJkSlMiLCJjbGlwYm9hcmQiLCJDbGlwYm9hcmRKUyIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRVcENvcHlhYmxlVGV4dHMiLCJjb3B5YWJsZVRleHRzIiwiaXNTdXBwb3J0ZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtB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QVV4ekIsRUFBVixDQUFhLFNBQWIsRUFBd0IsVUFBQzZCLEtBQUQsRUFBVztBQUNqQyxRQUFNa3hCLGVBQWVseEIsTUFBTXNILE9BQU4sQ0FBY3VxQixhQUFuQzs7QUFFQSxRQUFNemhCLFVBQ0o4Z0IsYUFBYVksWUFBYixDQUEwQixvQ0FBMUIsS0FDQSwyQkFGRjs7QUFLQWIsc0JBQWtCQyxZQUFsQixFQUFnQzlnQixPQUFoQztBQUNELEdBVEQ7O0FBV0F1aEIsWUFBVXh6QixFQUFWLENBQWEsT0FBYixFQUFzQixVQUFDNkIsS0FBRCxFQUFXO0FBQy9CLFFBQU1reEIsZUFBZWx4QixNQUFNc0gsT0FBTixDQUFjdXFCLGFBQW5DOztBQUVBLFFBQU16aEIsVUFDSjhnQixhQUFhWSxZQUFiLENBQTBCLGtDQUExQixLQUNBLHVCQUZGOztBQUtBYixzQkFBa0JDLFlBQWxCLEVBQWdDOWdCLE9BQWhDO0FBQ0QsR0FURDtBQVVEOztBQUVEOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTMmhCLGtCQUFULEdBQThCO0FBQzVCLE1BQU1DLGdCQUFnQmp5QixTQUFTa21CLGdCQUFULENBQTBCLHNEQUExQixDQUF0Qjs7QUFFQTtBQUNBLE1BQUkrTCxjQUFjLzBCLE1BQWQsSUFBd0IsQ0FBNUIsRUFBK0I7O0FBRS9CO0FBQ0EsTUFBSSxDQUFDMjBCLG9CQUFZSyxXQUFaLEVBQUwsRUFBZ0M7O0FBRWhDO0FBQ0EsK0JBQUlELGFBQUosR0FBbUJqaEIsT0FBbkIsQ0FBMkIwZ0IsaUJBQTNCO0FBQ0FDO0FBQ0Q7O2tCQUVjSyxrQjs7Ozs7Ozs7Ozs7QUNoSGYsaUJBQWlCLHFCQUF1QixpQiIsImZpbGUiOiJhcmNoaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohXG4gKiBjbGlwYm9hcmQuanMgdjIuMC40XG4gKiBodHRwczovL3plbm9yb2NoYS5naXRodWIuaW8vY2xpcGJvYXJkLmpzXG4gKiBcbiAqIExpY2Vuc2VkIE1JVCDCqSBaZW5vIFJvY2hhXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NsaXBib2FyZEFjdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfY2xpcGJvYXJkQWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsaXBib2FyZEFjdGlvbik7XG5cbnZhciBfdGlueUVtaXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX3RpbnlFbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbnlFbWl0dGVyKTtcblxudmFyIF9nb29kTGlzdGVuZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2dvb2RMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29kTGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogQmFzZSBjbGFzcyB3aGljaCB0YWtlcyBvbmUgb3IgbW9yZSBlbGVtZW50cywgYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlbSxcbiAqIGFuZCBpbnN0YW50aWF0ZXMgYSBuZXcgYENsaXBib2FyZEFjdGlvbmAgb24gZWFjaCBjbGljay5cbiAqL1xudmFyIENsaXBib2FyZCA9IGZ1bmN0aW9uIChfRW1pdHRlcikge1xuICAgIF9pbmhlcml0cyhDbGlwYm9hcmQsIF9FbWl0dGVyKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDbGlwYm9hcmQodHJpZ2dlciwgb3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2xpcGJvYXJkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xpcGJvYXJkKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIF90aGlzLmxpc3RlbkNsaWNrKHRyaWdnZXIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBpZiBhdHRyaWJ1dGVzIHdvdWxkIGJlIHJlc29sdmVkIHVzaW5nIGludGVybmFsIHNldHRlciBmdW5jdGlvbnNcbiAgICAgKiBvciBjdXN0b20gZnVuY3Rpb25zIHRoYXQgd2VyZSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmQsIFt7XG4gICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IHR5cGVvZiBvcHRpb25zLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuYWN0aW9uIDogdGhpcy5kZWZhdWx0QWN0aW9uO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0eXBlb2Ygb3B0aW9ucy50YXJnZXQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRhcmdldCA6IHRoaXMuZGVmYXVsdFRhcmdldDtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHR5cGVvZiBvcHRpb25zLnRleHQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRleHQgOiB0aGlzLmRlZmF1bHRUZXh0O1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBfdHlwZW9mKG9wdGlvbnMuY29udGFpbmVyKSA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwYXNzZWQgdHJpZ2dlci5cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbkNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbkNsaWNrKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gKDAsIF9nb29kTGlzdGVuZXIyLmRlZmF1bHQpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBhIG5ldyBgQ2xpcGJvYXJkQWN0aW9uYCBvbiBlYWNoIGNsaWNrIGV2ZW50LlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSBlLmRlbGVnYXRlVGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG5ldyBfY2xpcGJvYXJkQWN0aW9uMi5kZWZhdWx0KHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uKHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQodHJpZ2dlciksXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICAgICAgICAgICAgICBlbWl0dGVyOiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGBhY3Rpb25gIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZWZhdWx0QWN0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRBY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKCdhY3Rpb24nLCB0cmlnZ2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGB0YXJnZXRgIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZWZhdWx0VGFyZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUYXJnZXQodHJpZ2dlcikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gZ2V0QXR0cmlidXRlVmFsdWUoJ3RhcmdldCcsIHRyaWdnZXIpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgc3VwcG9ydCBvZiB0aGUgZ2l2ZW4gYWN0aW9uLCBvciBhbGwgYWN0aW9ucyBpZiBubyBhY3Rpb24gaXNcbiAgICAgICAgICogZ2l2ZW4uXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbYWN0aW9uXVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVmYXVsdFRleHQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgYHRleHRgIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRleHQodHJpZ2dlcikge1xuICAgICAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKCd0ZXh0JywgdHJpZ2dlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVzdHJveSBsaWZlY3ljbGUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdpc1N1cHBvcnRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnY29weScsICdjdXQnXTtcblxuICAgICAgICAgICAgdmFyIGFjdGlvbnMgPSB0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJyA/IFthY3Rpb25dIDogYWN0aW9uO1xuICAgICAgICAgICAgdmFyIHN1cHBvcnQgPSAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZDtcblxuICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0ID0gc3VwcG9ydCAmJiAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENsaXBib2FyZDtcbn0oX3RpbnlFbWl0dGVyMi5kZWZhdWx0KTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShzdWZmaXgsIGVsZW1lbnQpIHtcbiAgICB2YXIgYXR0cmlidXRlID0gJ2RhdGEtY2xpcGJvYXJkLScgKyBzdWZmaXg7XG5cbiAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsaXBib2FyZDtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zZWxlY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX3NlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZWxlY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIElubmVyIGNsYXNzIHdoaWNoIHBlcmZvcm1zIHNlbGVjdGlvbiBmcm9tIGVpdGhlciBgdGV4dGAgb3IgYHRhcmdldGBcbiAqIHByb3BlcnRpZXMgYW5kIHRoZW4gZXhlY3V0ZXMgY29weSBvciBjdXQgb3BlcmF0aW9ucy5cbiAqL1xudmFyIENsaXBib2FyZEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbihvcHRpb25zKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgICAgIHRoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYmFzZSBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmRBY3Rpb24sIFt7XG4gICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlciA9IG9wdGlvbnMuZW1pdHRlcjtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIgPSBvcHRpb25zLnRyaWdnZXI7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjaWRlcyB3aGljaCBzZWxlY3Rpb24gc3RyYXRlZ3kgaXMgZ29pbmcgdG8gYmUgYXBwbGllZCBiYXNlZFxuICAgICAgICAgKiBvbiB0aGUgZXhpc3RlbmNlIG9mIGB0ZXh0YCBhbmQgYHRhcmdldGAgcHJvcGVydGllcy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2luaXRTZWxlY3Rpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdFNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZha2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhcmdldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBmYWtlIHRleHRhcmVhIGVsZW1lbnQsIHNldHMgaXRzIHZhbHVlIGZyb20gYHRleHRgIHByb3BlcnR5LFxuICAgICAgICAgKiBhbmQgbWFrZXMgYSBzZWxlY3Rpb24gb24gaXQuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZWxlY3RGYWtlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdEZha2UoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaXNSVEwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXInKSA9PSAncnRsJztcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGYWtlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjaykgfHwgdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmZvbnRTaXplID0gJzEycHQnO1xuICAgICAgICAgICAgLy8gUmVzZXQgYm94IG1vZGVsXG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmJvcmRlciA9ICcwJztcbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50IG91dCBvZiBzY3JlZW4gaG9yaXpvbnRhbGx5XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGVbaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnXSA9ICctOTk5OXB4JztcbiAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICB2YXIgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnRvcCA9IHlQb3NpdGlvbiArICdweCc7XG5cbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0udmFsdWUgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmFrZUVsZW0pO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICgwLCBfc2VsZWN0Mi5kZWZhdWx0KSh0aGlzLmZha2VFbGVtKTtcbiAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IHJlbW92ZXMgdGhlIGZha2UgZWxlbWVudCBhZnRlciBhbm90aGVyIGNsaWNrIGV2ZW50LCB0aGF0IHdheVxuICAgICAgICAgKiBhIHVzZXIgY2FuIGhpdCBgQ3RybCtDYCB0byBjb3B5IGJlY2F1c2Ugc2VsZWN0aW9uIHN0aWxsIGV4aXN0cy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUZha2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRmFrZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZha2VIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZha2VFbGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2VsZWN0cyB0aGUgY29udGVudCBmcm9tIGVsZW1lbnQgcGFzc2VkIG9uIGB0YXJnZXRgIHByb3BlcnR5LlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2VsZWN0VGFyZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdFRhcmdldCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeGVjdXRlcyB0aGUgY29weSBvcGVyYXRpb24gYmFzZWQgb24gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29weVRleHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29weVRleHQoKSB7XG4gICAgICAgICAgICB2YXIgc3VjY2VlZGVkID0gdm9pZCAwO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN1Y2NlZWRlZCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKHRoaXMuYWN0aW9uKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdChzdWNjZWVkZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcmVzIGFuIGV2ZW50IGJhc2VkIG9uIHRoZSBjb3B5IG9wZXJhdGlvbiByZXN1bHQuXG4gICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VjY2VlZGVkXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVSZXN1bHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoc3VjY2VlZGVkID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5zZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyLFxuICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uOiB0aGlzLmNsZWFyU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vdmVzIGZvY3VzIGF3YXkgZnJvbSBgdGFyZ2V0YCBhbmQgYmFjayB0byB0aGUgdHJpZ2dlciwgcmVtb3ZlcyBjdXJyZW50IHNlbGVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsZWFyU2VsZWN0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlci5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYGFjdGlvbmAgdG8gYmUgcGVyZm9ybWVkIHdoaWNoIGNhbiBiZSBlaXRoZXIgJ2NvcHknIG9yICdjdXQnLlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95JyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXN0cm95IGxpZmVjeWNsZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FjdGlvbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2NvcHknO1xuXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9hY3Rpb24gIT09ICdjb3B5JyAmJiB0aGlzLl9hY3Rpb24gIT09ICdjdXQnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGBhY3Rpb25gIHByb3BlcnR5LlxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBgdGFyZ2V0YCBwcm9wZXJ0eSB1c2luZyBhbiBlbGVtZW50XG4gICAgICAgICAqIHRoYXQgd2lsbCBiZSBoYXZlIGl0cyBjb250ZW50IGNvcGllZC5cbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RhcmdldCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAmJiAodHlwZW9mIHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGFyZ2V0KSkgPT09ICdvYmplY3QnICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjb3B5JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY3V0JyAmJiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKSB8fCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgdmFsdWUsIHVzZSBhIHZhbGlkIEVsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgYHRhcmdldGAgcHJvcGVydHkuXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ3xIVE1MRWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENsaXBib2FyZEFjdGlvbjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmRBY3Rpb247XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBzZWxlY3QoZWxlbWVudCkge1xuICAgIHZhciBzZWxlY3RlZFRleHQ7XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICB2YXIgaXNSZWFkT25seSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZWxlY3QoKTtcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhlbGVtZW50KTtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VsZWN0O1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBkZWxlZ2F0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbi8qKlxuICogVmFsaWRhdGVzIGFsbCBwYXJhbXMgYW5kIGNhbGxzIHRoZSByaWdodFxuICogbGlzdGVuZXIgZnVuY3Rpb24gYmFzZWQgb24gaXRzIHRhcmdldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghdGFyZ2V0ICYmICF0eXBlICYmICFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5zdHJpbmcodHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLmZuKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoaXMubm9kZSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5ub2RlTGlzdCh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlTGlzdCh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMuc3RyaW5nKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblNlbGVjdG9yKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZywgSFRNTEVsZW1lbnQsIEhUTUxDb2xsZWN0aW9uLCBvciBOb2RlTGlzdCcpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgSFRNTCBlbGVtZW50XG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZShub2RlLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBub2RlTGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGVMaXN0KG5vZGVMaXN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBzZWxlY3RvclxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuU2VsZWN0b3Ioc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuO1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZUxpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmICh0eXBlID09PSAnW29iamVjdCBOb2RlTGlzdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXScpXG4gICAgICAgICYmICgnbGVuZ3RoJyBpbiB2YWx1ZSlcbiAgICAgICAgJiYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBleHBvcnRzLm5vZGUodmFsdWVbMF0pKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLnN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLmZuID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbG9zZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2NyaXB0cy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgSWFEZXNpZ25TeXN0ZW0gPSB7fTtcblxuLy8gQWRkIGNvbXBvbmVudHMgYXMga2V5cyBpbiB0aGUgSWFEZXNpZ25TeXN0ZW0gb2JqZWN0LCBmb3IgZXhhbXBsZTpcbi8vICAgIGltcG9ydCBNeUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL015Q29tcG9uZW50Jztcbi8vICAgIElhRGVzaWduU3lzdGVtLk15Q29tcG9uZW50ID0gTXlDb21wb25lbnQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElhRGVzaWduU3lzdGVtO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zdHlsZXMvaW5kZXgubGVzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zdHlsZXMvaW5kZXgubGVzcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBtdWx0aSAuL3NyYy9zY3JpcHRzL2luZGV4LmpzIC4vc3JjL3N0eWxlcy9pbmRleC5sZXNzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgL1VzZXJzL21pdHJhL0xpYnJhcnkvQ2FjaGVzL1lhcm4vdjQvLnRtcC9mODVkNWM2ZGJmNDhjZWQ0NzAzZThiYzE5YWIxZTk0Ny41YzA0YTdiODgwYTQwMmZhMTZlNDg5MzNmNWNhNzMyNzc0NzIwM2RjLnByZXBhcmUvc3JjL3NjcmlwdHMvaW5kZXguanMgKi9cIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC9Vc2Vycy9taXRyYS9MaWJyYXJ5L0NhY2hlcy9ZYXJuL3Y0Ly50bXAvZjg1ZDVjNmRiZjQ4Y2VkNDcwM2U4YmMxOWFiMWU5NDcuNWMwNGE3Yjg4MGE0MDJmYTE2ZTQ4OTMzZjVjYTczMjc3NDcyMDNkYy5wcmVwYXJlL3NyYy9zdHlsZXMvaW5kZXgubGVzcyAqL1wiLi9zcmMvc3R5bGVzL2luZGV4Lmxlc3NcIik7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOamNtbHdkSE12YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGVXeGxjeTlwYm1SbGVDNXNaWE56SWwwc0ltNWhiV1Z6SWpwYklrbGhSR1Z6YVdkdVUzbHpkR1Z0SWwwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQk1FTXNaME5CUVdkRE8wRkJRekZGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBWQlFYZEVMR3RDUVVGclFqdEJRVU14UlR0QlFVTkJMSGxFUVVGcFJDeGpRVUZqTzBGQlF5OUVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBSRUZCZVVNc2FVTkJRV2xETzBGQlF6RkZMSGRJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRCUVVOeVNUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN096czdRVU5zUmtFc1NVRkJUVUVzYVVKQlFXbENMRVZCUVhaQ096dEJRVVZCTzBGQlEwRTdRVUZEUVRzN2EwSkJSV1ZCTEdNN096czdPenM3T3pzN08wRkRUbVlzZVVNaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc0aUxDSmpiMjV6ZENCSllVUmxjMmxuYmxONWMzUmxiU0E5SUh0OU8xeHVYRzR2THlCQlpHUWdZMjl0Y0c5dVpXNTBjeUJoY3lCclpYbHpJR2x1SUhSb1pTQkpZVVJsYzJsbmJsTjVjM1JsYlNCdlltcGxZM1FzSUdadmNpQmxlR0Z0Y0d4bE9seHVMeThnSUNBZ2FXMXdiM0owSUUxNVEyOXRjRzl1Wlc1MElHWnliMjBnSjJOdmJYQnZibVZ1ZEhNdlRYbERiMjF3YjI1bGJuUW5PMXh1THk4Z0lDQWdTV0ZFWlhOcFoyNVRlWE4wWlcwdVRYbERiMjF3YjI1bGJuUWdQU0JOZVVOdmJYQnZibVZ1ZER0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1NXRkVaWE5wWjI1VGVYTjBaVzA3WEc0aUxDSXZMeUJ5WlcxdmRtVmtJR0o1SUdWNGRISmhZM1F0ZEdWNGRDMTNaV0p3WVdOckxYQnNkV2RwYmlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsIi8vIE5vdCB1c2luZyBhbnl0aGluZyBmcm9tIHRoZSBkZXNpZ24gc3lzdGVtIHJpZ2h0IG5vdywgaW1wb3J0ZWQgYXMgYSBwcm9vZiBvZiBjb25jZXB0LlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgSWFEZXNpZ25TeXN0ZW0gZnJvbSAnaWEtZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHNldFVwQ29weWFibGVUZXh0cyBmcm9tICcuL3NldFVwQ29weWFibGVUZXh0cydcblxuLy8gTG9jYWwgYmluZGluZyBpbiBjYXNlIG9mIGNvbmZsaWN0cyBpbiBnbG9iYWwgc2NvcGVcbmNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5XG5cbi8vIGNvbnZlbmllbnQsIG5vPyAgU3RhdGVsZXNzIGZ1bmN0aW9uLCBnbG9iYWwgdG8gYWxsIFBsYXkgb2JqZWN0c1xuLy8gICBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLWNvbnNvbGVcbmNvbnN0IGxvZyA9IChsb2NhdGlvbi5ob3N0LnN1YnN0cigwLCA0KSAhPT0gJ3d3dy0nID8gKCkgPT4ge30gOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpKVxuXG4vKipcbiAqIEV4ZWN1dGVzIGEgZnVuY3Rpb24gbm8gbW9yZSB0aGFuIG9uY2Ugd2l0aGluIHRoZSBzcGVjaWZpZWQgdGltZSB0aHJlc2hob2xkXG4gKlxuICogUGFzcyBpdHMgcmV0dXJuIHZhbHVlIGludG8gaGlnaC1mcmVxdWVuY3kgZXZlbnQgbGlzdGVuZXJzXG4gKiBsaWtlIHNjcm9sbC9yZXNpemUgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtOdW1iZXJ9ICAgdGhyZXNoaG9sZCAtIGluIG1pbGxpc2Vjb25kc1xuICogQHBhcmFtIHsqfSAgICAgICAgY29udGV4dCAgICAtIHdpbGwgYmUgYm91bmQgdG8gZm4gYXMgaXRzIFwidGhpc1wiIHZhbHVlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIHRocm90dGxlZCB2ZXJzaW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvblxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgdGhyZXNoaG9sZCA9IDI1MCwgY29udGV4dCA9IHVuZGVmaW5lZCkge1xuICBsZXQgbGFzdFxuICBsZXQgZGVmZXJUaW1lb3V0XG5cbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgLy8gQ29udmVydCB0byBhIE51bWJlclxuICAgIGNvbnN0IG5vdyA9ICtuZXcgRGF0ZSgpXG5cbiAgICAvKipcbiAgICAgKiBDYWxscyB0aGUgZm4gZnVuY3Rpb24gYW5kIHVwZGF0ZXMgdGhlIGxhc3QgdGltZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbGxGbigpIHtcbiAgICAgIGxhc3QgPSBub3dcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaGhvbGQpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVvdXQpXG4gICAgICBkZWZlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGNhbGxGbiwgdGhyZXNoaG9sZClcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbEZuKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlcyBhIEJvb2tSZWFkZXIgZnJhZ21lbnQgc3RyaW5nIGluIGEgVVJMIHBhdGggd2l0aCBhIG5ldyBmcmFnbWVudCxcbiAqIG9yIGFkZHMgdGhlIHBhdGggc3RyaW5nIHRvIHRoZSBlbmQgb2YgdGhlIFVSTCBpZiBpdCdzIG5vdCBzZXRcbiAqXG4gKiBOT1RFOiBCb29rUmVhZGVyIFwiZnJhZ21lbnRzXCIgYXJlIG5vdCBuZWNlc3NhcmlseSBVUkwgaGFzaCBmcmFnbWVudHMsXG4gKiB0aG91Z2ggdGhleSBtYXkgYmUgc3RvcmVkIGluIHRoZSBoYXNoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoU3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gbmV3RnJhZ21lbnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VCb29rUmVhZGVyRnJhZ21lbnQocGF0aFN0cmluZywgbmV3RnJhZ21lbnQpIHtcbiAgLy8gU2VlIGh0dHA6Ly9vcGVubGlicmFyeS5vcmcvZGV2L2RvY3MvYm9va3VybHNcbiAgY29uc3QgZnJhZ21lbnRSZWdleCA9IC8oXFwvKChwYWdlfG1vZGV8c2VhcmNoKVxcL1teLz8kXSspKStcXC8/KD89XFw/fCQpL2dcblxuICBpZiAocGF0aFN0cmluZy5tYXRjaChmcmFnbWVudFJlZ2V4KSlcbiAgICByZXR1cm4gcGF0aFN0cmluZy5yZXBsYWNlKGZyYWdtZW50UmVnZXgsIGAvJHtuZXdGcmFnbWVudH1gKVxuXG4gIHJldHVybiBgJHtwYXRoU3RyaW5nfS8ke25ld0ZyYWdtZW50fWAucmVwbGFjZSgvXFwvKy9nLCAnLycpXG59XG5cbi8vIGNsYXNzIG1lbW5vbmljOiBBcmNoaXZlIEpTXG5jbGFzcyBBSlMge1xuICAvKiBnbG9iYWwgIGFyY2hpdmVfYW5hbHl0aWNzICBqd3BsYXllciAqL1xuICAvKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IFtcImVycm9yXCIsIHsgXCJhbGxvd1wiOiBbXCJfbW9kYWxfYWRkXCJdIH1dICovXG5cblxuICBzdGF0aWMgVElMRV9XSURUSCAgICAgICA9IDE4MCAvLyBOT1RFOiBuZWVkcyB0byBzdGF5IGluIHN5bmMgdy8gYXJjaGl2ZS5sZXNzXG4gIHN0YXRpYyBUSUxFX1dJRFRIX1NNQUxMID0gMTUwIC8vIE5PVEU6IG5lZWRzIHRvIHN0YXkgaW4gc3luYyB3LyBhcmNoaXZlLmxlc3NcblxuICBzdGF0aWMgaW9zID0gKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwICB8fFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCAgfHxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDApXG4gIHN0YXRpYyBwYWdlX21hcCA9IHt9XG4gIHN0YXRpYyBjZ2lfYXJncyA9IHt9XG5cbiAgc3RhdGljIHR2QUQoZWxtKSB7XG4gICAgY29uc3QgaW5fc2hvdyA9ICQoZWxtKS5wYXJlbnRzKCcuc2hvd3MnKVxuICAgIGxldCBpZFxuICAgIGxldCBjaGFuXG4gICAgbGV0IHNob3dcbiAgICBpZiAoaW5fc2hvdy5sZW5ndGgpIHtcbiAgICAgIC8vIHNlZSBpZiB3ZSd2ZSBhbHJlYWR5IGdvdHRlbiBhbmQgZGlzcGxheWVkIHRoZSBcIkFpciBkYXRlXCIgc2VjdGlvbi4uLlxuICAgICAgY29uc3Qgb3BlbmVkID0gJChlbG0pLnBhcmVudCgpLmZpbmQoJy5zaG93cycpXG4gICAgICBpZiAob3BlbmVkLmxlbmd0aCkge1xuICAgICAgICAvLyAuLi4geWVzLCBzaW1wbHkgY2xvc2Uvb3BlbiBpdFxuICAgICAgICBvcGVuZWQudG9nZ2xlKClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBjaGFuID0gaW5fc2hvdy5hdHRyKCdkYXRhLWNoYW4nKVxuICAgICAgc2hvdyA9ICQoZWxtKS50ZXh0KClcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbiA9ICQoZWxtKS50ZXh0KClcbiAgICAgIGlkID0gJ21lbnUtY2hhbi0nLmNvbmNhdChjaGFuKVxuICAgICAgY29uc3QgZGl2ID0gJChgIyR7aWR9YClcbiAgICAgIGlmIChkaXYubGVuZ3RoKSB7XG4gICAgICAgIGRpdi50b2dnbGUoKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdXJsID0gYCR7bG9jYXRpb24uaHJlZn0/Y2hhbm5lbD0ke2NoYW59YFxuICAgIGlmIChpbl9zaG93Lmxlbmd0aClcbiAgICAgIHVybCArPSAnJnByb2dyYW09Jy5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHNob3cpKVxuICAgIGxvZyh1cmwpXG5cbiAgICAkLmdldCh1cmwsIChodG0pID0+IHtcbiAgICAgIGlmIChpbl9zaG93Lmxlbmd0aCkge1xuICAgICAgICAkKGVsbSkucGFyZW50KClcbiAgICAgICAgICAuYXBwZW5kKGA8ZGl2IGRhdGEtY2hhbj1cIiR7Y2hhbn1cIiBjbGFzcz1cInNob3dzXCI+PGg1PkFpciBkYXRlPC9oNT48ZGl2PiR7aHRtfTwvZGl2PjwvZGl2PmApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGVsbSkucGFyZW50KClcbiAgICAgICAgICAuYXBwZW5kKGA8ZGl2IGlkPVwiJHtpZH1cIiBkYXRhLWNoYW49XCIke2NoYW59XCIgY2xhc3M9XCJzaG93c1wiPjxoND5TaG93PC9oND48ZGl2PiR7aHRtfTwvZGl2PjwvZGl2PmApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICBzdGF0aWMgbmF2X3RvcGhhdF9zZXR1cCgpIHtcbiAgICBpZiAoISQoJyNuYXYtdG9waGF0JykubGVuZ3RoKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoQUpTLmlzVG91Y2hEZXZpY2UoKSlcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndG91Y2gnKVxuICAgIGVsc2VcbiAgICAgIEFKUy5sb2dvVGV4dCgpXG5cblxuICAgICQoJyNuYXYtdG9waGF0JylcbiAgICAgIC5vbignc2hvdy5icy5jb2xsYXBzZScsICgpID0+ICQoJyNuYXZ3cmFwMScpLmFkZENsYXNzKCdoYXR0ZWQnKSlcbiAgICAgIC5vbignaGlkZS5icy5jb2xsYXBzZScsICgpID0+ICQoJyNuYXZ3cmFwMScpLnJlbW92ZUNsYXNzKCdoYXR0ZWQnKSlcblxuXG4gICAgJCgnLm5hdmJhciBhLm5hdmlhLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiBuYXZoYXRfY2xpY2soZXZ0KSB7XG4gICAgICAvLyBhcmUgd2UgaW4gXCJtb2JpbGUgbmF2IC8geHMgd2lkdGhcIiBtb2RlP1xuICAgICAgY29uc3QgeHMgPSAhJCgnI25hdi10b3BoYXQtaGVscGVyOnZpc2libGUnKS5sZW5ndGhcbiAgICAgIGNvbnN0IGhhdF9vcGVuID0gJCgnI25hdi10b3BoYXQnKS5oYXNDbGFzcygnaW4nKVxuICAgICAgY29uc3QgbmF2bGluayA9IHRoaXNcblxuICAgICAgLy8gZGV0ZXJtaW5lIG1lZGlhdHlwZSBmcm9tIGVpdGhlcjogKDEpIHVzZXIgaGl0IHRleHQgb3IgKDIpIHVzZXIgaGl0IGljb25cbiAgICAgIGNvbnN0IG10ID0gKCQoZXZ0LnRhcmdldCkuYXR0cignZGF0YS10b3Ata2luZCcpICB8fFxuICAgICAgICAgICAgICAgICAgJChldnQuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS10b3Ata2luZCcpKVxuXG4gICAgICBjb25zdCBpc25vdyA9ICQoJy5uYXZiYXIgLmRyb3Bkb3duLWlhLmhhdHRlZCBhJykuYXR0cignZGF0YS10b3Ata2luZCcpXG5cbiAgICAgIGlmICghKHhzICAmJiAgaGF0X29wZW4gICYmICBpc25vdyAhPT0gbXQpKSB7XG4gICAgICAgIC8vIHNob3cgdGhlIGxpbmtzIGZvciBtZWRpYXR5cGUgY2xpY2tlZFxuICAgICAgICAkKCcudG9wcm93JykuaGlkZSgpXG4gICAgICAgICQoYC50b3Byb3cuJHttdH1gKS5zaG93KClcbiAgICAgIH1cblxuXG4gICAgICBpZiAoIWhhdF9vcGVuKSB7XG4gICAgICAgICQoJyNuYXYtdG9waGF0JykuY29sbGFwc2UoJ3Nob3cnKSAvLyAuLiB0b3AgaGF0IGlzICpub3QqIG9wZW4uICBjbGlja2VkLCBzbyBvcGVuIHRvcGhhdFxuXG4gICAgICAgIGlmIChBSlMudG9waGF0X2RvbnRfY291bnRfZmlyc3Rfb3Blbikge1xuICAgICAgICAgIGRlbGV0ZSBBSlMudG9waGF0X2RvbnRfY291bnRfZmlyc3Rfb3BlblxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmNoaXZlX2FuYWx5dGljcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBsb2cgdGhhdCBhIHVzZXIgaGFzIG9wZW5lZCB0aGUgbmF2IHRvcGhhdCwgeWF5elxuICAgICAgICAgIGFyY2hpdmVfYW5hbHl0aWNzLnNlbmRfcGluZyh7XG4gICAgICAgICAgICBraW5kOiAnZXZlbnQnLFxuICAgICAgICAgICAgZWM6ICdwYWdlX2FjdGlvbicsXG4gICAgICAgICAgICBlYTogJ25hdl90b3BoYXRfZ2FsYWN0aWNhJyxcbiAgICAgICAgICAgIGVsOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgIGNhY2hlX2J1c3Q6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmICh0eXBlb2YgaXNub3cgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICBsb2coJ2lzbm93JywgaXNub3cpXG4gICAgICBsb2coJ3Nob3VsZEInLCBtdClcblxuICAgICAgaWYgKGlzbm93ID09PSBtdCkge1xuICAgICAgICAvLyAybmQgY2xpY2sgb24gc2FtZSBtZWRpYXR5cGUgZHJvcGRvd24gLS0gY2xvc2UgdG9waGF0IVxuICAgICAgICAkKCcjbmF2LXRvcGhhdCcpLmNvbGxhcHNlKCdoaWRlJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICh4cyAgJiYgIGhhdF9vcGVuICAmJiAgaXNub3cgIT09IG10KSB7XG4gICAgICAgIC8vIE1vYmlsZS94cyBuYXYgYW5kIHVzZXIgaGFzIGNsaWNrZWQgb24gKmFub3RoZXIqIG5hdi9NVCBpY29uLlxuICAgICAgICAvLyBTbyB3ZSB3YW50IHRvIChhbmltYXRlKSBjbG9zZSB0aGUgdG9waGF0LCBhbmQgd2hlbiBjbG9zZWQsXG4gICAgICAgIC8vIHJlb3BlbiAoYW5pbWF0ZSkgdG8gdGhlIHJpZ2h0IG9wZW4gdG9waGF0IC0tIHRoaXMgaXMgYmVjYXVzZVxuICAgICAgICAvLyBtb2JpbGUveHMgbWFrZXMgdGhlIHRvcGhhdCBoZWlnaHRzIG11Y2ggbW9yZSBhcmJpdHJhcnlcbiAgICAgICAgLy8gYW5kIGl0IGxvb2tzIHdlaXJkIGhhcmQganVtcGluZyB0byBvdGhlciBvcGVuIGFyZWEgYXQgYW5vdGhlciBoZWlnaHQhXG4gICAgICAgICQoJyNuYXYtdG9waGF0Jykub25lKCdoaWRkZW4uYnMuY29sbGFwc2UnLCAoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKG5hdmxpbmspLmNsaWNrKCksIDEwMClcbiAgICAgICAgfSlcbiAgICAgICAgJCgnI25hdi10b3BoYXQnKS5jb2xsYXBzZSgnaGlkZScpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG5cbiAgICAgICQoJy5uYXZiYXIgLmRyb3Bkb3duLWlhJykucmVtb3ZlQ2xhc3MoJ2hhdHRlZCcpLmhhcyhgLiR7bXR9YCkuYWRkQ2xhc3MoJ2hhdHRlZCcpXG4gICAgICAkKCcjbmF2LXRvcGhhdCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCAoKSA9PiAkKCcubmF2YmFyIC5kcm9wZG93bi1pYScpLnJlbW92ZUNsYXNzKCdoYXR0ZWQnKSlcblxuXG4gICAgICAvLyBhbnkgY2xpY2sgbWFrZXMgdG9waGF0IGhpZGUuLi5cbiAgICAgICQoZG9jdW1lbnQpLm9uZSgnY2xpY2sudG9waGF0Lm5peGVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlID0gJChldmVudC50YXJnZXQpXG4gICAgICAgIC8vIGxvZygkZSlcbiAgICAgICAgaWYgKCRlLmF0dHIoJ2lkJykgPT09ICduYXYtd2ItdXJsJylcbiAgICAgICAgICByZXR1cm4gLy8gLi4uIGV4Y2VwdCBjbGlja2luZyBvbiB3YXliYWNrIG1hY2hpbmUgZm9ybSBpbnB1dFxuICAgICAgICBpZiAoJGUuaXMoJ2EnKSlcbiAgICAgICAgICByZXR1cm4gLy8gLi4uIGV4Y2VwdCBjbGlja2luZyBvbiBhIGxpbmtcbiAgICAgICAgaWYgKCRlLmhhc0NsYXNzKCdpdGVtLWltZycpICB8fCAgJGUuaGFzQ2xhc3MoJ2l0ZW0taWEnKSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICAvLyBOT1RFOiBpZiBub3Qgb3Blbiwgd2Ugd29udCBoaWRlXG4gICAgICAgICQoJyNuYXYtdG9waGF0LmluJykuY29sbGFwc2UoJ2hpZGUnKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgfVxuXG5cbiAgc3RhdGljIGlzVG91Y2hEZXZpY2UoKSB7XG4gICAgcmV0dXJuICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHxcbiAgICAgICAgICAgICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSlcbiAgfVxuXG5cbiAgc3RhdGljIGZvb3RlcigpIHtcbiAgICBpZiAoIUFKUy5pc1RvdWNoRGV2aWNlKCkgICYmICB0eXBlb2YgJC5mbi50b29sdGlwICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgJCgnLm5hdmJhciBbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdLCAuY29udGFpbmVyLWlhIFtkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0sICNjb2xzIFtkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0sICN0dmJhbm5lciBbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7XG4gICAgICB9KVxuICAgICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdnbHlwaHMtYXMtdGV4dCcpXG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgd3JhcGRhcmtfd2F0Y2hlcigpIHsgLy8gbm8gbG9uZ2VyIG5lZWRlZC91c2VkIGJ1dCBoYXMgc29tZSBoYW5keSB0ZWNobmlxdWVzLi4uXG4gICAgaWYgKCFBSlMuJHNoYXJlZG93bikge1xuICAgICAgQUpTLiRzaGFyZWRvd24gPSAkKCcjc2hhcmVkb3duJylcbiAgICAgIEFKUy4kd3JhcGRhcmsgID0gJCgnI3dyYXBkYXJrJylcbiAgICB9XG5cbiAgICAvLyBldmVyeSBzZWNvbmQsIHNpZ2gsIGNoZWNrL2FkanVzdCBmb3IgdGhlIHdyYXBkYXJrIGhlaWdodFxuICAgIGlmICghQUpTLndyYXBkYXJrX3dhdGNoZXJfcHRyKVxuICAgICAgQUpTLndyYXBkYXJrX3dhdGNoZXJfcHRyID0gc2V0SW50ZXJ2YWwoQUpTLndyYXBkYXJrX3dhdGNoZXIsIDEwMDApXG5cbiAgICBpZiAoIUFKUy4kc2hhcmVkb3duLmxlbmd0aCAgfHwgICFBSlMuJHdyYXBkYXJrLmxlbmd0aCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChBSlMud3JhcGRhcmtfd2F0Y2hlcl9wdHIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB3cmFwZGFya0hUID0gQUpTLiRzaGFyZWRvd24ub2Zmc2V0KCkudG9wICsgQUpTLiRzaGFyZWRvd24uZmluZCgnLnBhbmVsLWhlYWRpbmcnKS5pbm5lckhlaWdodCgpXG4gICAgaWYgKHBhcnNlSW50KEFKUy4kd3JhcGRhcmsuY3NzKCdoZWlnaHQnKSwgMTApICE9PSB3cmFwZGFya0hUKSB7XG4gICAgICBBSlMuJHdyYXBkYXJrLmNzcyh7IGhlaWdodDogd3JhcGRhcmtIVCB9KS5zaG93KClcbiAgICAgIGxvZygnICAgICAgIFdSQVBEQVJLLUVEIHRvICcsIHdyYXBkYXJrSFQpXG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgbXV0ZV9jbGljaygpIHtcbiAgICBjb25zdCBtdXRlZE5PVyA9ICEkLmNvb2tpZSgndW5tdXRlJylcblxuICAgIGlmICh0aGlzLmVtdWxhdG9yKSB7XG4gICAgICB0aGlzLmVtdWxhdG9yLnNldE11dGUoIW11dGVkTk9XKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSBqd3BsYXllcignanc2JylcbiAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgY29uc3Qgdm9sbm93ID0gcGxheWVyLmdldFZvbHVtZSgpXG4gICAgICAgIGlmICh2b2xub3cpIHtcbiAgICAgICAgICBBSlMubXV0ZV9jbGlja19wcmlvcl92b2x1bWUgPSB2b2xub3dcbiAgICAgICAgICBwbGF5ZXIuc2V0Vm9sdW1lKDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyLnNldFZvbHVtZSh0eXBlb2YgQUpTLm11dGVfY2xpY2tfcHJpb3Jfdm9sdW1lID09PSAndW5kZWZpbmVkJyA/IDEwMCA6XG4gICAgICAgICAgICBBSlMubXV0ZV9jbGlja19wcmlvcl92b2x1bWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgICQoJyN0aGVhdHJlLWlhIC5pY29ub2NoaXZlLW11dGUsICN0aGVhdHJlLWlhIC5pY29ub2NoaXZlLXVubXV0ZScpLnRvZ2dsZSgpXG5cblxuICAgIGlmIChtdXRlZE5PVykge1xuICAgICAgLy8gc291bmRzIGlzIG9mZi4gIG1ha2UgaXQgbG91ZFxuICAgICAgJC5jb29raWUoJ3VubXV0ZScsIDEsIHsgcGF0aDogJy9kZXRhaWxzJywgZXhwaXJlczogMzAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc291bmRzIGlzIG9uLiAgbXV0ZSBpdCFcbiAgICAgICQuY29va2llKCd1bm11dGUnLCBudWxsLCB7IHBhdGg6ICcvZGV0YWlscycgfSlcbiAgICB9XG5cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICBzdGF0aWMgZW11bGF0ZV9zZXR1cChnYW1lKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBuby1wYXJhbS1yZWFzc2lnblxuICAgIGdhbWUudG9TdHJpbmcgPSAoKCkgPT4gZ2FtZS5pZGVudGlmaWVyKVxuICAgIEFKUy5lbXVsYXRvciA9IG5ldyBJQUxvYWRlcihcbiAgICAgICQoJyNjYW52YXMnKS5nZXQoMCksIGdhbWUsIG51bGwsXG4gICAgICAoZ2FtZS5zY2FsZSA/IHBhcnNlRmxvYXQoZ2FtZS5zY2FsZSkgOiAxKSxcbiAgICAgIChnYW1lLm1vZHVsZS5pbmRleE9mKCdkb3Nib3gnKSA9PT0gMCA/ICcvaW1hZ2VzL2Rvc2JveC5wbmcnIDogJy9pbWFnZXMvbWFtZS5wbmcnKSxcbiAgICApXG5cblxuICAgICQoJyN0aGVhdHJlLWlhIC5pY29ub2NoaXZlLXVubXV0ZSwgI3RoZWF0cmUtaWEgLmljb25vY2hpdmUtbXV0ZScpLmhpZGUoKVxuICAgIGlmICgkLmNvb2tpZSgndW5tdXRlJykpIHtcbiAgICAgICQoJyN0aGVhdHJlLWlhIC5pY29ub2NoaXZlLXVubXV0ZScpLnNob3coKVxuICAgICAgQUpTLmVtdWxhdG9yLnVubXV0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyN0aGVhdHJlLWlhIC5pY29ub2NoaXZlLW11dGUnKS5zaG93KClcbiAgICAgIEFKUy5lbXVsYXRvci5tdXRlKClcbiAgICB9XG5cbiAgICBBSlMudGhlYXRyZV9jb250cm9sc19wb3NpdGlvbigpXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgIG9yaWVudGF0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KEFKUy50aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uX3Rocm90dGxlcilcbiAgICAgIEFKUy50aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uX3Rocm90dGxlciA9IHNldFRpbWVvdXQoQUpTLnRoZWF0cmVfY29udHJvbHNfcG9zaXRpb24sIDI1MClcbiAgICB9KVxuICB9XG5cblxuICBzdGF0aWMgZW11bGF0ZSgpIHtcbiAgICAvKiBnbG9iYWwgIGNhbnZhcyAgSUFMb2FkZXIgIERPU0JPWCAgSlNNRVNTICBNb2R1bGUgKi9cblxuICAgIC8vIG1vdmUgdGhlIHZpcnR1YWwga2V5Ym9hcmQgdGhpbmcgYW5kIGdpdmUgaXQgYSBcImdvIGF3YXkhXCIgYnV0dG9uXG4gICAgJCgnLnVpLWtleWJvYXJkJykucHJlcGVuZChgXG4gICAgICA8YnV0dG9uIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7dG9wOi01cHg7cmlnaHQ6LThweDtcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiXG4gICAgICAgICAgICAgIG9uY2xpY2s9XCIkKCcudWkta2V5Ym9hcmQnKS5yZW1vdmVDbGFzcygnc2hvd2luZycpLmhpZGUoKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25vY2hpdmUtcmVtb3ZlLWNpcmNsZVwiPjwvc3Bhbj48L2J1dHRvbj5gKVxuICAgICAgLmFwcGVuZFRvKCQoJyNlbXVsYXRlIC5wb3NyZWwnKSkuYWRkQ2xhc3MoJ3Nob3dpbmcnKVxuXG4gICAgJCgnI2pzbWVzc1NTJykuZmFkZU91dCgnc2xvdycpXG4gICAgJCgnI2NhbnZhc2hvbGRlcicpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICBBSlMuZW11bGF0b3Iuc3RhcnQoeyBoYXNDdXN0b21DU1M6IHRydWUgfSlcblxuICAgIC8vIHNldHVwIHRoZSB0aGVhdHJlLWlhIGZ1bGxzY3JlZW4gYnV0dG9uXG4gICAgY29uc3QgRU0gPSAoSlNNRVNTICB8fCAgRE9TQk9YICB8fCAgZmFsc2UpXG4gICAgaWYgKEVNICAmJiAgKGNhbnZhcy53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiB8fCBjYW52YXMubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHxcbiAgICAgICAgICAgICAgICAgIGNhbnZhcy5yZXF1ZXN0RnVsbFNjcmVlbikpIHtcbiAgICAgICQoJyNnb2Z1bGxzY3JlZW4nKS5vbignY2xpY2snLCAoKSA9PiBNb2R1bGUucmVxdWVzdEZ1bGxTY3JlZW4oMSwgMCkpXG4gICAgICAvKiovIGlmICgnb25mdWxsc2NyZWVuY2hhbmdlJyAgICAgICBpbiBkb2N1bWVudCkgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsICAgICAgIEVNLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKVxuICAgICAgZWxzZSBpZiAoJ29ubW96ZnVsbHNjcmVlbmNoYW5nZScgICAgaW4gZG9jdW1lbnQpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAgICBFTS5mdWxsU2NyZWVuQ2hhbmdlSGFuZGxlcilcbiAgICAgIGVsc2UgaWYgKCdvbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnIGluIGRvY3VtZW50KSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgRU0uZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIpXG4gICAgfVxuXG4gICAgc2V0VGltZW91dChBSlMudGhlYXRyZV9jb250cm9sc19wb3NpdGlvbiwgICAxMDApXG4gICAgc2V0VGltZW91dChBSlMudGhlYXRyZV9jb250cm9sc19wb3NpdGlvbiwgICA1MDApXG4gICAgc2V0VGltZW91dChBSlMudGhlYXRyZV9jb250cm9sc19wb3NpdGlvbiwgIDMwMDApXG4gICAgc2V0VGltZW91dChBSlMudGhlYXRyZV9jb250cm9sc19wb3NpdGlvbiwgMTAwMDApXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgc3RhdGljIHRoZWF0cmVfY29udHJvbHNfcG9zaXRpb24oJHNlbGVjdG9ySW4sIHBlZ1RvcCwgd2lkdGhJbiwgaGVpZ2h0SW4pIHtcbiAgICAvLyBXZSBoYXZlIGxvdHMgb2YgY2FsbGVycyEgIHZpZGVvLCBzb2Z0d2FyZSwgdGV4dHMuXG4gICAgLy8gU28gc29ydCBvdXQgb3VyIGFyZ3MgYW5kIHdoZXJlIHdlIGdvbm5hIFwicGVnXCIvZ2x1ZSB0aGluZ3MgdG8uLi5cbiAgICBsZXQgJHNlbGVjdG9yID0gJHNlbGVjdG9ySW5cbiAgICBjb25zdCB2aWRlbyA9IChoZWlnaHRJbiAgJiYgICEkc2VsZWN0b3JJbilcbiAgICBpZiAoIXZpZGVvKSB7XG4gICAgICBpZiAoISRzZWxlY3RvckluKSAkc2VsZWN0b3IgPSAkKCcjY2FudmFzJykgLy8gc29mdHdhcmUgZW11bGF0aW9uXG4gICAgICBpZiAoISRzZWxlY3Rvci5sZW5ndGgpIHJldHVybiAvLyBwcm90ZWN0IGFnYWluc3QgZW11bGF0ZWQgZW1iZWRzIGFuZCB1bmRlZi4uLlxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9ICh2aWRlbyA/IGhlaWdodEluIDogJHNlbGVjdG9yLmhlaWdodCgpKVxuICAgIGNvbnN0IHdpZHRoICA9ICh2aWRlbyA/IHdpZHRoSW4gIDogJHNlbGVjdG9yLndpZHRoKCkpXG5cbiAgICBpZiAoIXZpZGVvICAmJiAgdHlwZW9mIHBlZ1RvcCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAkKCcjdGhlYXRyZS1jb250cm9scycpLm9mZnNldCh7IHRvcDogcGVnVG9wIH0pXG5cblxuICAgIC8vIFN1YnRyYWN0IG91dCB0aGUgd2lkdGggb2YgdGhlIGNvbnRyb2xzIHRvIGdldCB0b3RhbCBhbW91bnQgb2YgYmxhY2sgcGl4ZWxzXG4gICAgLy8gdG8gdGhlIHJpZ2h0IG9mIHRoZSB0aGVhdHJlIG9iamVjdC5cbiAgICAvLyBXZSB3YW50IHRvIHBvc2l0aW9uIHRoZSBjb250cm9scyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBkYXJrIHBpeGVscyAvIHJpZ2h0IGd1dHRlciFcbiAgICBjb25zdCByaWdodF9ndXR0ZXJfd2lkdGggPVxuICAgICAgTWF0aC5yb3VuZCgoJCgnI3RoZWF0cmUtaWEtd3JhcCcpLndpZHRoKCkgLSAkKCcjdGhlYXRyZS1jb250cm9scycpLndpZHRoKCkgLSB3aWR0aCkgLyAyKVxuXG4gICAgbG9nKCd3aWR0aCcsIHdpZHRoKVxuICAgIGxvZygncmlnaHRfZ3V0dGVyX3dpZHRoJywgcmlnaHRfZ3V0dGVyX3dpZHRoKVxuXG5cbiAgICAkKCcjdGhlYXRyZS1jb250cm9scycpLmNzcyh7XG4gICAgICBoZWlnaHQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICByaWdodDogTWF0aC5tYXgoMjAsIHJpZ2h0X2d1dHRlcl93aWR0aCAvIDIpLFxuICAgIH0pXG4gIH1cblxuXG4gIHN0YXRpYyBib29rc2l6ZSgpIHtcbiAgICBpZiAoISQoJyN0ZXh0eScpLmxlbmd0aClcbiAgICAgIHJldHVyblxuXG4gICAgLy8gVXNlIHRoZSBzdGFuZGFyZCB0aGVhdHJlc2l6ZSBmdW5jdGlvblxuICAgIEFKUy50aGVhdHJlc2l6ZSgpXG5cbiAgICBjb25zdCBwb2xsaW5nTWlsbGlzID0gMjAwXG5cbiAgICAvLyBDaGFuZ2UgdGhlIGJnIGluIHRoZSBpZnJhbWVcbiAgICBjb25zdCAkdGV4dHlpZnJhbWUgPSAkKCcjdGV4dHkgaWZyYW1lJylcbiAgICBjb25zdCBjaGFuZ2VCZ0NvbG9yID0gKCkgPT4ge1xuICAgICAgY29uc3QgJGNvbnRlbnREb20gPSAkKCR0ZXh0eWlmcmFtZS5nZXQoMCkuY29udGVudERvY3VtZW50KVxuICAgICAgY29uc3QgJG1hdGNoID0gJGNvbnRlbnREb20uZmluZCgnI0Jvb2tSZWFkZXInKVxuICAgICAgaWYgKCRtYXRjaC5sZW5ndGggPiAwKSB7XG4gICAgICAgICRjb250ZW50RG9tLmZpbmQoJ2JvZHksICNCb29rUmVhZGVyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50JylcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoIWNoYW5nZUJnQ29sb3IoKSkge1xuICAgICAgY29uc3QgYmdDb2xvckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoY2hhbmdlQmdDb2xvcigpKVxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYmdDb2xvckludGVydmFsKVxuICAgICAgfSwgcG9sbGluZ01pbGxpcylcbiAgICB9XG5cbiAgICAvLyBTZXR1cCB0aGUgY29udHJvbHNcbiAgICAvLyBOT1RFIFRoZSBhdHRyaWJ1dGUgZGF0YS1sZW5kYWJsZS1ib29rIGlzIGFkZGVkIGluIERldGFpbHMuaW5jXG4gICAgY29uc3QgaXNMZW5kYWJsZUJvb2sgPSB0eXBlb2YgJCgnI3RleHR5JykuZGF0YSgnbGVuZGFibGUtYm9vaycpICE9PSAndW5kZWZpbmVkJ1xuICAgIGlmICghaXNMZW5kYWJsZUJvb2sgJiYgIUFKUy5ib29rc2l6ZV9jb250cm9sc19oaWRkZW4pIHtcbiAgICAgIEFKUy5ib29rc2l6ZV9jb250cm9scygpXG4gICAgICBjb25zdCBib29rU2l6ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoIUFKUy5ib29rc2l6ZV9jb250cm9sc19oaWRkZW4pXG4gICAgICAgICAgQUpTLmJvb2tzaXplX2NvbnRyb2xzKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYm9va1NpemVJbnRlcnZhbClcbiAgICAgIH0sIHBvbGxpbmdNaWxsaXMpXG4gICAgfVxuICB9XG5cbiAgLy8gSGlkZXMgdGhlIGJvb2sgY29udHJvbHMsIHBlciBkYXZpZCFcbiAgLy8gQWxzbyBwb3NpdGlvbnMgdGhlIFwidGhlYXRyZSBjb250cm9sc1wiXG4gIHN0YXRpYyBib29rc2l6ZV9jb250cm9scygpIHtcbiAgICBjb25zdCAkaWZyYW1lID0gJCgnaWZyYW1lOmZpcnN0JylcbiAgICBpZiAoISRpZnJhbWUubGVuZ3RoKVxuICAgICAgcmV0dXJuXG4gICAgY29uc3QgJGlmcmFtZURPTSA9ICQoJGlmcmFtZS5nZXQoMCkuY29udGVudERvY3VtZW50KVxuICAgIGlmICghJGlmcmFtZURPTS5sZW5ndGgpXG4gICAgICByZXR1cm5cblxuICAgIGlmICghQUpTLmJvb2tzaXplX2NvbnRyb2xzX2hpZGRlbikge1xuICAgICAgaWYgKCEkaWZyYW1lRE9NLmZpbmQoJyNCUm5hdicpLmxlbmd0aCkge1xuICAgICAgICBsb2coJ0JPT0sgTk9UIFJFQURZIFlFVCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCRpZnJhbWVET00uZmluZCgnI0JSdHdvcGFnZXZpZXcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIE9ubHkgaGlkZSBuYXYgaW4gMnVwLiBTaG93IGl0IGluIDF1cFxuICAgICAgICAkaWZyYW1lRE9NLmZpbmQoJyNCUm5hdicpLmhpZGUoKVxuICAgICAgfVxuICAgICAgQUpTLmJvb2tzaXplX2NvbnRyb2xzX2hpZGRlbiA9IHRydWVcbiAgICAgICQoJyN0ZXh0eSBpZnJhbWUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICBsb2coJ0JPT0sgQ09OVFJPTFMgSElEREVOIScpXG4gICAgfVxuXG4gICAgJGlmcmFtZURPTS5maW5kKCdib2R5LCAjQm9va1JlYWRlcicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpXG5cbiAgICAvLyBub3cgcG9zaXRpb24gdGhlIHRoZWF0cmUgY29udHJvbHNcbiAgICBjb25zdCAkYm9vayA9ICRpZnJhbWVET00uZmluZCgnI0JSdHdvcGFnZXZpZXcsICNCUnBhZ2V2aWV3JylcblxuICAgIC8vIGNvbXB1dGUgd2hlcmUgdGhlIGxvZ2ljYWwgdG9wIHBvaW50IHNob3VsZCBiZSBmb3IgdGhlIGJvb2sgYW5kIGZvciB0aGUgY29udHJvbHNcbiAgICAvLyAod2hpY2ggaXMgY29tcGFyYWJsZSB0byBBL1YgaXRlbXMpXG4gICAgY29uc3QgJG5hdmJhciA9ICQoJy5uYXZiYXInKVxuICAgIC8vIE5PVEU6IHdlICpkbyogY2hlY2sgdGhlIG5hdiB0b3AgKGFsbW9zdCBhbHdheXMgMCEpIGZvciByYXJlIGNhc2VzIHdlIGhhdmUgYSBiYW5uZXJcbiAgICAvLyAqQUJPVkUqIHRoZSBuYXZiYXIsIGVnOiBFT1kgZG9uYXRlIGJhbm5lciBjYW1wYWlnbiAod2hpY2ggaXMgYWJvdmUgdGhlIG5hdikhXG4gICAgY29uc3QgcGVnVG9wID0gKCRuYXZiYXIub2Zmc2V0KCkudG9wICsgJG5hdmJhci5oZWlnaHQoKSArXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KCQoJyN0ZXh0eScpLmNzcygncGFkZGluZy10b3AnKSwgMTApKVxuICAgIEFKUy50aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uKCRib29rLCBwZWdUb3ApXG4gICAgbG9nKCdib29rIHRvcCcsICRpZnJhbWUub2Zmc2V0KCkudG9wICsgJGJvb2sub2Zmc2V0KCkudG9wLCAnIC12LSBwZWdUb3AnLCBwZWdUb3ApXG5cbiAgICAvLyBhbmQgbm93IGRvbnQgb3ZlcmZsb3cgbmVnYXRpdmUgbWFyZ2luLWJvdHRvbSBibGFja25lc3MgaW50byBtZXRhZGF0YSBzZWN0aW9uXG4gICAgJCgnI3RoZWF0cmUtaWEnKS5jc3MoeyBvdmVyZmxvdzogJ2hpZGRlbicgfSlcbiAgfVxuXG5cbiAgc3RhdGljIHBvcGNvcm5zaXplKCkge1xuICAgIGNvbnN0IHJlc2l6ZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtZXRhZGF0YUhlaWdodCA9IDEwMCAvLyBtZXRhZGF0YSBwZWVrYWJvbyBtaW4gaGVpZ2h0IVxuICAgICAgY29uc3QgbWF4SCA9ICQod2luZG93KS5oZWlnaHQoKSAtICQoJ2lmcmFtZTpmaXJzdCcpLm9mZnNldCgpLnRvcCAtIG1ldGFkYXRhSGVpZ2h0XG4gICAgICBjb25zdCBtYXhXID0gJCgnI3RoZWF0cmUtaWEgLnJvdycpLm91dGVyV2lkdGgoKVxuICAgICAgLy8gbWFrZSBtYXggaGVpZ2h0IGF0IG1vc3QgMTZ4OSByYXRpbyAoNDNweCBpcyB0aGUgcG9wY29ybiBjb250cm9scyBoZWlnaHQpXG4gICAgICBjb25zdCBXSCA9IHsgd2lkdGg6IG1heFcsIGhlaWdodDogTWF0aC5taW4obWF4SCwgKChtYXhXICogOSkgLyAxNikgKyA0MykgfVxuICAgICAgbG9nKCdwb3Bjb3JuIHJlc2l6ZTogJywgV0gpXG4gICAgICAkKCdpZnJhbWU6Zmlyc3QnKS5jc3MoV0gpIC8vIHJlc2l6ZSBwb3Bjb3JuXG4gICAgfVxuICAgIHJlc2l6ZXIoKSAvLyBwYWdlIGxvYWQgZXZlbnQgaXMgbm93XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgIG9yaWVudGF0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KEFKUy5wb3Bjb3JuX3Rocm90dGxlcilcbiAgICAgIEFKUy5wb3Bjb3JuX3Rocm90dGxlciA9IHNldFRpbWVvdXQocmVzaXplciwgMjUwKVxuICAgIH0pXG4gIH1cblxuXG4gIC8qKlxuICAgKiBBIGdlbmVyYWwgcHVycG9zZSB0aGVhdHJlIHNpemluZyBmdW5jdGlvbi5cbiAgICogSXQga2VlcHMgdGhlIG1ldGFkYXRhIGJlbG93IHRoZSB0aGVhdHJlIHBhcnRpYWxseSB2aXNpYmxlLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNoYW5nZSAtIGNhbGxlZCB3aGVuIHNpemUgY2hhbmdlc1xuICAgKiBAZ2xvYmFsIEFKUy50aGVhdHJlc2l6ZV9tYXhoZWlnaHQgaWYgdGhpcyBpcyBzZXQgYnkgYW5vdGhlclxuICAgKiAgIHBhcnQgb2YgdGhlIGNvZGUsIGl0IHdpbGwgY29udHJhaW4gdG8gdGhpcyBtYXggaGVpZ2h0LlxuICAgKi9cbiAgc3RhdGljIHRoZWF0cmVzaXplKG9uQ2hhbmdlKSB7XG4gICAgaWYgKCFBSlMudGhlYXRyZXNpemVfbWF4aGVpZ2h0KVxuICAgICAgQUpTLnRoZWF0cmVzaXplX21heGhlaWdodCA9IG51bGxcbiAgICBjb25zdCByZXNpemVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbWV0YWRhdGFIZWlnaHQgPSAxMDAgLy8gbWV0YWRhdGEgcGVla2Fib28gbWluIGhlaWdodCFcbiAgICAgIGNvbnN0IG1heGltdW1IZWlnaHQgPSAxMDAwIC8vIGRvbid0IGdldCBsYXJnZXIgdGhhbiB0aGlzXG4gICAgICBjb25zdCBtaW5IZWlnaHQgPSBNYXRoLm1pbigkKHdpbmRvdykud2lkdGgoKSwgNDAwKVxuICAgICAgbGV0IHRhcmdldEhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtICQoJyNuYXZ3cmFwMScpLmhlaWdodCgpIC0gbWV0YWRhdGFIZWlnaHRcblxuICAgICAgaWYgKEFKUy50aGVhdHJlc2l6ZV9tYXhoZWlnaHQpXG4gICAgICAgIHRhcmdldEhlaWdodCA9IE1hdGgubWluKHRhcmdldEhlaWdodCwgQUpTLnRoZWF0cmVzaXplX21heGhlaWdodClcblxuICAgICAgdGFyZ2V0SGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0SGVpZ2h0LCBtaW5IZWlnaHQpXG4gICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1pbih0YXJnZXRIZWlnaHQsIG1heGltdW1IZWlnaHQpXG4gICAgICAkKCcjdGhlYXRyZS1pYS13cmFwJykuYWRkQ2xhc3MoJ3Jlc2l6ZWQnKS5jc3MoJ2hlaWdodCcsIGhlaWdodClcblxuICAgICAgaWYgKG9uQ2hhbmdlKVxuICAgICAgICBvbkNoYW5nZSgkKCcjdGhlYXRyZS1pYS13cmFwJykuaGVpZ2h0KCkpXG4gICAgfVxuICAgIHJlc2l6ZXIoKSAvLyBwYWdlIGxvYWQgZXZlbnQgaXMgbm93XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgIG9yaWVudGF0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KEFKUy50aGVhdHJlc2l6ZV90aHJvdHRsZXIpXG4gICAgICBBSlMudGhlYXRyZXNpemVfdGhyb3R0bGVyID0gc2V0VGltZW91dChyZXNpemVyLCAyNTApXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJlZHVjZSB0aGUgdmVydGljYWwgc2l6ZSBvZiB0aGUgY2Fyb3VzZWwgb25jZSBhbGwgdGhlIGltYWdlcyBoYXZlXG4gICAqIGRvd25sb2FkZWQgYW5kIG9ubHkgaWYgdGhleSBhcmUgYWxsIHNtYWxsZXIgdGhhbiB0aGUgY3VycmVudCBzaXplLlxuICAgKiBUaGlzIGlzIGEgcHJvZ3Jlc3NpdmUgZW5oYW5jZW1lbnRcbiAgICogQHBhcmFtIHN0cmluZyBzZWxlY3RvclxuICAgKiBAcGFyYW0gYm9vbCBlbmFibGVUaHJlYXRyZUNoYW5nZVxuICAgKi9cbiAgc3RhdGljIGNhcm91c2Vsc2l6ZShzZWxlY3RvciwgZW5hYmxlVGhyZWF0cmVDaGFuZ2UpIHtcbiAgICBjb25zdCAkY2Fyb3VzZWwgPSAkKHNlbGVjdG9yKVxuICAgIGNvbnN0IGltYWdlUHJvbWlzZXMgPSAkY2Fyb3VzZWwuZmluZCgnaW1nLmNhcm91c2VsLWltYWdlJykubWFwKChpLCBpbWcpID0+IHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKClcbiAgICAgIGxldCByZXN1bHRcbiAgICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgcmVzdWx0ID0gcHJvbWlzZS5yZXNvbHZlKGltZy5uYXR1cmFsSGVpZ2h0KS5wcm9taXNlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShpbWcubmF0dXJhbEhlaWdodClcbiAgICAgICAgfSlcbiAgICAgICAgcmVzdWx0ID0gcHJvbWlzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0pXG4gICAgJC53aGVuKC4uLmltYWdlUHJvbWlzZXMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJIZWlnaHQgPSAkY2Fyb3VzZWwuaGVpZ2h0KClcbiAgICAgIGNvbnN0IG1heEltYWdlSGVpZ2h0ID0gTWF0aC5tYXgoLi4uYXJncylcbiAgICAgIGlmIChjdXJySGVpZ2h0ID4gbWF4SW1hZ2VIZWlnaHQpIHtcbiAgICAgICAgJGNhcm91c2VsLmNzcygnbWF4SGVpZ2h0JywgbWF4SW1hZ2VIZWlnaHQpXG4gICAgICAgIGlmIChlbmFibGVUaHJlYXRyZUNoYW5nZSkge1xuICAgICAgICAgIEFKUy50aGVhdHJlc2l6ZV9tYXhoZWlnaHQgPSBtYXhJbWFnZUhlaWdodFxuICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBwYXVzZShpZCA9ICdqdzYnKSB7XG4gICAgY29uc3QgancgPSBqd3BsYXllcihpZClcbiAgICBpZiAoancgICYmICBqdy5nZXRTdGF0ZSAgJiYgIGp3LmdldFN0YXRlKCkudG9Mb3dlckNhc2UoKSA9PT0gJ3BsYXlpbmcnKVxuICAgICAgancucGF1c2UoKVxuICB9XG5cblxuICBzdGF0aWMgbW9yZihsbmssIHN3aXRjaFRvQTJaKSB7IC8vIE1PUmUgRmFjZXRzXG4gICAgY29uc3QgaHJlZiA9ICQobG5rKS5hdHRyKCdocmVmJylcblxuICAgIGlmIChzd2l0Y2hUb0EyWiAgJiYgIHN3aXRjaFRvQTJaWzBdID09PSAnLScpXG4gICAgICAkLmNvb2tpZShzd2l0Y2hUb0EyWi5zdWJzdHIoMSkuY29uY2F0KCdBMlonKSwgMSwgeyBwYXRoOiAnLycsIGV4cGlyZXM6IDEgfSlcbiAgICBlbHNlIGlmIChzd2l0Y2hUb0EyWilcbiAgICAgICQuY29va2llKHN3aXRjaFRvQTJaLmNvbmNhdCgnQTJaJyksIG51bGwsIHsgcGF0aDogJy8nLCBleHBpcmVzOiAxIH0pXG5cblxuICAgIGNvbnN0IHByb3BzID0geyBzZWxlY3RvcklEOiAnbW9yZi1tb2RhbCcgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0gYCMke3Byb3BzLnNlbGVjdG9ySUR9YFxuXG4gICAgY29uc3QgY29udGVudHMgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlciBtb2RhbC1oZWFkZXItc3RkXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25vY2hpdmUtcmVtb3ZlLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZSAganN4LWExMXkvaGVhZGluZy1oYXMtY29udGVudCAqL31cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIC8+XG4gICAgICAgICAgICB7LyogZXNsaW50LWVuYWJsZSAgIGpzeC1hMTF5L2hlYWRpbmctaGFzLWNvbnRlbnQgKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgaWQ9e3Byb3BzLnNlbGVjdG9ySUQuY29uY2F0KCctYm9keScpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PilcbiAgICBpZiAoISQoc2VsZWN0b3IpLmxlbmd0aClcbiAgICAgICQoJ2JvZHknKS5wcmVwZW5kKCQoYDxkaXYgaWQ9XCIke3Byb3BzLnNlbGVjdG9ySUR9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5gKSlcblxuICAgIFJlYWN0RE9NLnJlbmRlcihjb250ZW50cywgJChzZWxlY3RvcikuZ2V0KDApKVxuICAgICQoc2VsZWN0b3IpLm1vZGFsKCdzaG93JylcblxuICAgIFJlYWN0RE9NLnJlbmRlcig8QUpTLk1PUkZyZWFjdCBocmVmPXtocmVmfSAvPiwgJChgJHtzZWxlY3Rvcn0tYm9keWApLmdldCgwKSlcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgc3RhdGljIGFkZDJsaXN0KGxuaykge1xuICAgIGNvbnN0IGhyZWYgPSAkKGxuaykuYXR0cignaHJlZicpXG5cbiAgICAkLmdldChgJHtocmVmfSZoZWFkbGVzcz0xJnRpdGxlbGlzdD0keyQobG5rKS50ZXh0KCl9YCwgKGh0bSkgPT4ge1xuICAgICAgLy8gZHluYW1pY2FsbHkgYWRkIG1vZGFsIHRvIHBhZ2UgKGlmIGlzbnQgdGhlcmUgYWxyZWFkeSlcbiAgICAgIEFKUy5tb2RhbF9nbyhsbmssIHtcbiAgICAgICAgdGl0bGU6ICdBZGQgVG8gTGlzdCcsXG4gICAgICAgIGhlYWRlckNsYXNzOiAnbW9kYWwtaGVhZGVyLW5ldy1saXN0JyxcbiAgICAgICAgaWdub3JlX2xuazogdHJ1ZSxcbiAgICAgICAgYXV0b19yZW1vdmU6IHRydWUsXG4gICAgICAgIGJvZHk6IGh0bSxcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgc3RhdGljIG5ld2xpc3QobG5rKSB7XG4gICAgY29uc3QgaHJlZiA9ICQobG5rKS5hdHRyKCdocmVmJylcblxuICAgICQuZ2V0KGhyZWYuY29uY2F0KCcmaGVhZGxlc3M9MScpLCAoaHRtKSA9PiB7XG4gICAgICAvLyBkeW5hbWljYWxseSBhZGQgbW9kYWwgdG8gcGFnZSAoaWYgaXNudCB0aGVyZSBhbHJlYWR5KVxuICAgICAgQUpTLm1vZGFsX2dvKGxuaywge1xuICAgICAgICB0aXRsZTogJ0NyZWF0ZSBOZXcgTGlzdCcsXG4gICAgICAgIGhlYWRlckNsYXNzOiAnbW9kYWwtaGVhZGVyLW5ldy1saXN0JyxcbiAgICAgICAgaWdub3JlX2xuazogdHJ1ZSxcbiAgICAgICAgYm9keTogaHRtLFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBzdGF0aWMgbmV3bGlzdF9zdWJtaXQoKSB7XG4gICAgLy8gU3RyaW5ncyB3aXRoIFNQQUNFIGNoYXJhY3RlcnMgd2lsbCBiZSBjaGFuZ2VkIHRvIFwiY2FtZWwgY2FzZVwiLlxuICAgIC8vIEZvciBleGFtcGxlOlxuICAgIC8vICAgIFwibXkgTEEgcm9hZHRyaXBcIlxuICAgIC8vIHdpbGwgYmVjb21lOlxuICAgIC8vICAgIFwiTXlMYVJvYWR0cmlwXCJcbiAgICAvLyBMZXR0ZXJzLCBudW1iZXJzLCBwZXJpb2RzICguKSwgZGFzaGVzICgtKSwgb3IgdW5kZXJzY29yZXMgKF8pIGFyZSBvaywgYnV0XG4gICAgLy8gb3RoZXIgY2hhcmFjdGVycyB3aWxsIGJlIHJlbW92ZWQuXG4gICAgY29uc3QgdGl0bGUgPSAkKCcjbmV3LWxpc3QtZm9ybSBpbnB1dFtuYW1lPXRpdGxlXScpLnZhbCgpXG4gICAgaWYgKCF0aXRsZS5sZW5ndGgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tYWxlcnRcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgeW91ciBMaXN0JylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIHR1cm4gdGhlIHRpdGxlIGludG8gYW4gYWNjZXB0YWJsZSBpZGVudGlmaWVyXG4gICAgLy8gKDEpIHJlbW92ZSBhbnkgXCJiYWRcIiBjaGFyc1xuICAgIC8vICgyKSB0cmltIGFueSAqbGVhZGluZyogY2hhcnMgbGlrZTogIC0gXyAuXG4gICAgY29uc3QgY2xlYW5lZCA9IHRpdGxlLnJlcGxhY2UoL1teYS16QS1aMC05X1xcLS5dL2csICcnKS5yZXBsYWNlKC9eW19cXC0uXSsvLCAnJylcbiAgICBsb2coY2xlYW5lZClcblxuICAgIGlmICghY2xlYW5lZC5sZW5ndGgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tYWxlcnRcbiAgICAgIGFsZXJ0KCdQbGVhc2UgdHJ5IGFub3RoZXIgdGl0bGUgdGhhdCBjb250YWlucyBtb3JlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdGF0aWMgcG9wb3Zlcl9tZW51KHNlbGVjdG9yLCBvcHRzKSB7XG4gICAgLy8gc2V0dXAgb3B0aW9uc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMgY2xpY2snLCAvLyBtYWtlIGFjY2Vzc2libGVcbiAgICAgIGNvbnRhaW5lcjogc2VsZWN0b3IsXG4gICAgICBjb250ZW50OiBvcHRzLmNvbnRlbnQsXG4gICAgICBodG1sOiB0cnVlLFxuICAgIH1cbiAgICAvLyBkbyBub3Qgb3ZlcndyaXRlIHZhbHVlcyBnaXZlbiBieSB0aGUgJ2RhdGEtJyBhdHRyaWJ1dGVcbiAgICBpZiAob3B0cy50aXRsZSlcbiAgICAgIG9wdGlvbnMudGl0bGUgPSBvcHRzLnRpdGxlXG4gICAgaWYgKG9wdHMucGxhY2VtZW50KVxuICAgICAgb3B0aW9ucy5wbGFjZW1lbnQgPSBvcHRzLnBsYWNlbWVudFxuICAgIGlmIChvcHRzLnRyaWdnZXIpXG4gICAgICBvcHRpb25zLnRyaWdnZXIgPSBvcHRzLnRyaWdnZXJcblxuICAgIC8vIHNldHVwIHBvcG92ZXJcbiAgICAkKHNlbGVjdG9yKS5wb3BvdmVyKG9wdGlvbnMpXG4gIH1cblxuXG4gIC8vIG1ha2VzIHRoZSB0b29sdGlwIHNob3cgZm9yIHBpY2tpbmcgZGF0ZXNcbiAgc3RhdGljIGRhdGVfc3dpdGNoZXIoaHRtKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnI2RhdGVfc3dpdGNoZXInXG5cbiAgICAvLyBtYWtlIGEgdG9vbHRpcCB0cmlnZ2VyIG1hbnVhbGx5LCBvbiBob3ZlciwgYnV0IHRoZW4gKmhvbGQgaXQgc2hvd2luZypcbiAgICAvLyB1bnRpbCB0aGV5IGxlYXZlIGFyZWEgKmluY2x1ZGluZyogdG9vbHRpcCBpdHNlbGZcbiAgICAkKHNlbGVjdG9yKS50b29sdGlwKHtcbiAgICAgIGh0bWw6IHRydWUsXG4gICAgICB0cmlnZ2VyOiAnbWFudWFsJywgLy8gd2UgZ29ubmEgY29udHJvbCBob3ZlciBiZWhhdmlvdXJcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICB0aXRsZTogaHRtLFxuICAgIH0pLm9uKCdtb3VzZWVudGVyIGZvY3VzaW4nLCBmdW5jdGlvbiBkYXRlX3N3aXRjaGVyX2hvdmVyKCkge1xuICAgICAgLy8gY2hlY2sgZmlyc3QgaWYgYWxyZWFkeSBzaG93aW5nLCB0byBhdm9pZCBcImZsaWNrZXJpbmdcIiB3aXRoIFwic2hvdyEgLi4gc2hvdyFcIlxuICAgICAgaWYgKCEoJChzZWxlY3RvcikucGFyZW50KCkuZmluZCgnLnRvb2x0aXAnKS5sZW5ndGgpKVxuICAgICAgICAkKHRoaXMpLnRvb2x0aXAoJ3Nob3cnKVxuICAgIH0pXG5cblxuICAgIC8vIHRoZSBkYXRlX3N3aXRjaGVyIGxpdmVzIGluc2lkZSBiaWdnZXIgXCJzb3J0YmFyXCIuICB0aGUgZGF0ZSBjaGFuZ2luZyB0b29sdGlwXG4gICAgLy8gbGl2ZXMgaW5zaWRlIGl0IChhbmQgaGFuZ3Mgb2ZmIGl0KS4gIFNvIHdoYXQgd2UgKnJlYWxseSogd2FudCBhcyB0aGUgdHJpZ2dlclxuICAgIC8vIHRvIGhpZGUgdGhlIGRhdGUgY2hhbmdlIHRvb2x0aXAgaXMgdGhlIGVudGlyZSBzb3J0YmFyIGl0c2VsZi4gIG5pY2UhXG4gICAgJCgnLnNvcnRiYXInKS5vbignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIGxvZygnbm90IGhvdmVyaW5nIHNvcnRiYXIgYW55bW9yZScpXG4gICAgICAkKHNlbGVjdG9yKS50b29sdGlwKCdoaWRlJylcbiAgICB9KVxuXG5cbiAgICAkKHNlbGVjdG9yKS5vbignc2hvd24uYnMudG9vbHRpcCcsICgpID0+IHtcbiAgICAgIC8vIG1ha2UgYW55IGxpbmsgaGl0IGNoYW5nZSB3aGljaCBvbmUgaXMgXCJpblwiXG4gICAgICAvLyAoanVzdCBiZWZvcmUgcGFnZSBzdGFydHMgdG8gcmVsb2FkKSAgZmluZXNzZSFcbiAgICAgICQoc2VsZWN0b3IpLnBhcmVudCgpLmZpbmQoJy5kYXRlX3N3aXRjaGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gZGF0ZV9zd2l0Y2hlcl9jbGljaygpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcudG9vbHRpcCcpLmZpbmQoJy5kYXRlX3N3aXRjaGVyLmluJykucmVtb3ZlQ2xhc3MoJ2luJylcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW4nKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cblxuICAvLyBOT1RFOiBVTlVTRUQgQlVUIEtFUFQgSU4gQ0FTRSBXRSBFVkVSIEdPIEJBQ0sgRlJPTSBORVdFUi9CRVRURVIgQ1NTLU9OTFkgU09MVVRJT04hXG4gIC8vXG4gIC8vIFsgTm93IHdlIHVzZSBDU1MgdG8gKG1heC0vKXdpZHRoIEMyIGFuZCBDNCAqaW5zdGVhZCogZm9yIGEgbXVjaCBiZXR0ZXIgdXNlciBleHBlcmllbmNlXG4gIC8vICAgQU5EIGZvciBhIG1vcmUgZWZmaWNpZW50IC8ga2luZGVyIHRvIGJyb3dzZXIgbm9uLUpTIHNvbHV0aW9uISBdXG4gIHN0YXRpYyB0aWxlc190b19saXN0KCkge1xuICAgIC8qXG4gICAgICBGaXJzdCwgYWxsb3cgbmF0dXJhbCBIVE0vQ1NTIHdpZHRocyBvZiAzIG9mIDUgXCJ0YWJsZS1jZWxsXCIgZGlzcGxheSB0eXBlIGNvbHVtbnNcbiAgICAgICAgQzEgICAgICAgICBDMjM0ICAgICAgQzVcbiAgICAgICAgVklFV1MgIC4uICBEQVRFICAuLiAgTVQtSUNPTlxuXG4gICAgICAgIENvbXB1dGUgd2lkdGggb2YgXCJDMjM0XCIgLSB3aWR0aCBvZiBDMy9EQVRFLlxuICAgICAgICBTcGxpdCBUSVRMRSAoQzIpIGFuZCBDUkVBVE9SIChDNCkgbWF4LXdpZHRoIGludG9cbiAgICAgICAgNjAlIC8gNDAlIHNwbGl0IG9mIHRoYXQgI3BpeGVscy5cbiAgICAqL1xuXG4gICAgLy8gTk9URTogdGhlcmUgY2FuIGJlIDIrIHNldHMgb2YgcmVzdWx0cyBvbiBhIHBhZ2UgLS0gZWc6IFwiTXkgTGlicmFyeVwiIHBhZ2UhXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBBSlMuc2VsZWN0b3IoKVxuICAgIGNvbnN0ICRzZWxlY3RvciA9ICQoc2VsZWN0b3IpLmZpcnN0KClcbiAgICBsb2coJ2xpc3RlcigpIFNFTEVDVE9SJywgc2VsZWN0b3IpXG5cbiAgICBjb25zdCBDMyAgID0gJHNlbGVjdG9yLmZpbmQoJy5yZXN1bHRzIC5pdGVtLWlhOmZpcnN0ICAgLkMzJykub3V0ZXJXaWR0aCgpXG4gICAgY29uc3QgQzIzNCA9ICRzZWxlY3Rvci5maW5kKCcucmVzdWx0cyAuaXRlbS1pYTpmaXJzdCAuQzIzNCcpLm91dGVyV2lkdGgoKVxuXG4gICAgLy8gdGhlIFwiLTIwXCIgd2FzIGVtcGlyaWNhbGx5IG9ic2VydmVkIC8gbWFkZSB1cCAtLSBnZXQgc29tZSBzY2llbmNlLCBnaXJsIVxuICAgIGNvbnN0IGF2YWlsV2lkdGggPSAoQzIzNCAtIEMzKSAtIDIwXG4gICAgY29uc3QgQzIgPSBNYXRoLm1heCg4MCwgTWF0aC5yb3VuZCgwLjYgKiBhdmFpbFdpZHRoKSlcbiAgICBjb25zdCBDNCA9IE1hdGgubWF4KDgwLCBNYXRoLnJvdW5kKDAuNCAqIGF2YWlsV2lkdGgpKVxuICAgIGxvZygnQzMgICcsICAgQzMpXG4gICAgbG9nKCdDMjM0JywgQzIzNClcbiAgICBsb2coJ0MyICAnLCAgIEMyKVxuICAgIGxvZygnQzQgICcsICAgQzQpXG4gICAgbG9nKCcgPT0+IGF2YWlsV2lkdGg6ICcsIGF2YWlsV2lkdGgsICcoJywgQzIsICcrJywgQzQsICcpJylcblxuICAgICRzZWxlY3Rvci5maW5kKCcucmVzdWx0cyAuaXRlbS1pYSAuQzInKS5jc3MoeyB3aWR0aDogQzIsICdtYXgtd2lkdGgnOiBDMiB9KVxuICAgICRzZWxlY3Rvci5maW5kKCcucmVzdWx0cyAuaXRlbS1pYSAuQzQnKS5jc3MoeyB3aWR0aDogQzQsICdtYXgtd2lkdGgnOiBDNCB9KVxuICB9XG5cblxuICAvLyBXZSBtb3ZlZCB0byBuZXdlciB0YWN0aWMgTWFyMjAxNS4uLlxuICAvLyBQYWdlcyBhcmUgZW1pdHRlZCBieSBkZWZhdWx0IHdpdGggYm9keSBjbGFzc2VzIFwibGlzdHNcIiBhbmQgXCJzaG93ZGV0YWlsc1wiLlxuICAvLyBXZSB1c2UgSlMgdG8gdG9nZ2xlL3JlbW92ZSB0aGVtIGFuZCBzd2l0Y2ggb2ZmIGRldGFpbHMgb3Igc3dpdGNoIHRvIFwidGlsZXNcIiBtb2RlLlxuICBzdGF0aWMgbGlzdHNfdl90aWxlc19zZXR1cChjb29raWVfcmFuZ2UpIHtcbiAgICAvLyBkb2VzIHVzZXIgaGF2ZSBhbnkgY29va2llZCBwcmVmZXJlbmNlcz9cbiAgICBjb25zdCBkZWZhdWx0cyAgICA9ICd0aWxlcycgLy8gKGNvb2tpZV9yYW5nZSA9PT0gJ3NlYXJjaCcgPyAnbGlzdHMnIDogJ3RpbGVzJylcbiAgICBjb25zdCBwcmVmZXIgICAgICA9ICgkLmNvb2tpZShgdmlldy0ke2Nvb2tpZV9yYW5nZX1gKSlcbiAgICBjb25zdCBzaG93ZGV0YWlscyA9ICgkLmNvb2tpZShgc2hvd2RldGFpbHMtJHtjb29raWVfcmFuZ2V9YCkpXG5cbiAgICBjb25zdCBjaGVja2VkID0gKHNob3dkZXRhaWxzID09PSAnc2hvd2RldGFpbHMnICB8fFxuICAgICAgICAgICAgICAgICAgICAgIChzaG93ZGV0YWlscyA9PT0gbnVsbCAgJiYgIGRlZmF1bHRzID09PSAnbGlzdHMnKSlcblxuICAgIGlmIChwcmVmZXIgPT09ICdsaXN0cycgIHx8ICAoIXByZWZlciAgJiYgIGRlZmF1bHRzID09PSAnbGlzdHMnKSkge1xuICAgICAgaWYgKGNoZWNrZWQpXG4gICAgICAgIHJldHVybiAvLyBwZXJmZWN0LCB3ZSBhcmUgYWxyZWFkeSB3aGF0IHRoZXkgd2FudFxuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaG93ZGV0YWlscycpIC8vIHRoZXkgZG9udCB3YW50IGZ1bGwgZGV0YWlscyByaWdodCBub3dcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3dpdGNoIHRvIFwidGlsZXNcIiBtb2RlXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xpc3RzJy5jb25jYXQoY2hlY2tlZCA/ICcnIDogJyBzaG93ZGV0YWlscycpKS5hZGRDbGFzcygndGlsZXMnKVxuICAgIH1cbiAgfVxuXG5cbiAgc3RhdGljIHNob3dkZXRhaWxzX3RvZ2dsZShidG4sIGNvb2tpZV9yYW5nZSkge1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG5cbiAgICBjb25zdCB0byA9ICgkYm9keS5oYXNDbGFzcygnc2hvd2RldGFpbHMnKSA/ICcnIDogJ3Nob3dkZXRhaWxzJylcbiAgICBsb2coJ3Nob3dkZXRhaWxzX3RvZ2dsZSgpIGdvaW5nIHRvOiAnLCB0bylcblxuICAgICQuY29va2llKGBzaG93ZGV0YWlscy0ke2Nvb2tpZV9yYW5nZX1gLCB0bywgeyBwYXRoOiAnLycsIGV4cGlyZXM6IDMwLCBkb21haW46ICcuYXJjaGl2ZS5vcmcnIH0pXG5cbiAgICAkYm9keS50b2dnbGVDbGFzcygnc2hvd2RldGFpbHMnKVxuICB9XG5cblxuICBzdGF0aWMgdGlsZXNfdG9nZ2xlKGJ0biwgY29va2llX3JhbmdlKSB7XG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcblxuICAgIGNvbnN0IHRvID0gKCRib2R5Lmhhc0NsYXNzKCd0aWxlcycpID8gJ2xpc3RzJyA6ICd0aWxlcycpXG4gICAgbG9nKCd0aWxlc190b2dnbGUoKSBnb2luZyB0bycsIHRvKVxuXG4gICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ2xpc3RzIHRpbGVzJykuYWRkQ2xhc3ModG8pXG4gICAgQUpTLnRpbGVyKClcblxuICAgICQuY29va2llKGB2aWV3LSR7Y29va2llX3JhbmdlfWAsIHRvLCB7IHBhdGg6ICcvJywgZXhwaXJlczogMzAsIGRvbWFpbjogJy5hcmNoaXZlLm9yZycgfSlcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICAvLyBSZXR1cm5zIG9uZSBvZiB0aGVzZSwgbGlrZSBcIiNpa2luZC1bSUtJTkRdXCJcbiAgLy9cbiAgLy8gQ09MTEVDVElPTiBQQUdFUywgQUNDT1VOVCBQQUdFUzpcbiAgLy9cbiAgLy8gICAjaWtpbmQtLWRvd25sb2Fkc1xuICAvLyAgICNpa2luZC0tdGl0bGVTb3J0ZXJcbiAgLy8gICAjaWtpbmQtLXB1YmxpY2RhdGVcbiAgLy8gICAjaWtpbmQtLWRhdGVcbiAgLy8gICAjaWtpbmQtLXJldmlld2RhdGVcbiAgLy8gICAjaWtpbmQtLXVwZGF0ZWRhdGVcbiAgLy8gICAjaWtpbmQtLWNyZWF0b3JTb3J0ZXJcbiAgLy9cbiAgLy8gICAjaWtpbmQtZG93bmxvYWRzXG4gIC8vICAgI2lraW5kLXRpdGxlU29ydGVyXG4gIC8vICAgI2lraW5kLXB1YmxpY2RhdGVcbiAgLy8gICAjaWtpbmQtZGF0ZVxuICAvLyAgICNpa2luZC1yZXZpZXdkYXRlXG4gIC8vICAgI2lraW5kLXVwZGF0ZWRhdGVcbiAgLy8gICAjaWtpbmQtY3JlYXRvclNvcnRlclxuICAvL1xuICAvLyBBQ0NPVU5UIFBBR0VTIChhZGRpdGlvbmFsbHkpOlxuICAvL1xuICAvLyAgICNpa2luZC1sb2Fucy13YWl0aW5nLWxpc3RcbiAgLy8gICAjaWtpbmQtbG9hbnMtb24tbG9hblxuICAvLyAgICNpa2luZC1sb2Fucy1oaXN0b3J5XG4gIC8vXG4gIC8vIE9USEVSOlxuICAvL1xuICAvLyAgICNpa2luZC1zZWFyY2ggICAgICAgICAgICAgIChzZWFyY2gpXG4gIC8vXG4gIHN0YXRpYyBzZWxlY3RvcigpIHtcbiAgICBjb25zdCBpblRhYiA9ICQoJy53ZWxjb21lIC50YWJieS5pbiAudGFiYnktdGV4dCcpXG4gICAgICAuZmlyc3QoKVxuICAgICAgLnRleHQoKVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC50cmltKClcbiAgICBpZiAoaW5UYWIgPT09ICdmb3J1bScgIHx8ICBpblRhYiA9PT0gJ3Bvc3RzJyAgfHwgIGluVGFiID09PSAnYWJvdXQnKVxuICAgICAgcmV0dXJuIGZhbHNlIC8vIG5vIHRhYiBvZiB0aWxlcyBhcmUgc2hvd2luZ1xuXG4gICAgbGV0IHNlbGVjdG9yID0gZmFsc2VcbiAgICBpZiAoaW5UYWIpIHtcbiAgICAgIC8vIFdlIHdhbnQgdG8gZW5kIHVwIHdpdGggYSBzZWxlY3RvciBsaWtlOlxuICAgICAgLy8gICAgI2lraW5kLWNvbGxlY3Rpb25zLXRpdGxlXG4gICAgICAvLyAgICAjaWtpbmQtLXB1YmxpY2RhdGVcbiAgICAgIGxvZygnaW5UYWInLCBpblRhYilcbiAgICAgIGNvbnN0IHRtcCA9IGAjdGFiYnktJHtpblRhYi5yZXBsYWNlKCcgJywgJy0nKX1gXG4gICAgICBpZiAoaW5UYWIgPT09ICdjb2xsZWN0aW9uJyAgfHwgIGluVGFiID09PSAnY29sbGVjdGlvbnMnICB8fCAgaW5UYWIgPT09ICd1cGxvYWRzJyB8fCBpblRhYiA9PT0gJ3Jldmlld3MnIHx8IGluVGFiID09PSAnd2ViIGFyY2hpdmVzJykge1xuICAgICAgICBzZWxlY3RvciA9ICcjJy5jb25jYXQoJCh0bXAuY29uY2F0KCcgZGl2LmlraW5kLmluOmZpcnN0JykpLmF0dHIoJ2lkJykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpa2luZCA9ICQodG1wLmNvbmNhdCgnIC5pa2luZC5zdGVhbHRoLmluOmZpcnN0JykpLnRleHQoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvLCAnLScpXG4gICAgICAgIHNlbGVjdG9yID0gYCNpa2luZC0ke2luVGFifSR7aWtpbmQgPT09ICcnID8gJycgOiAnLSd9JHtpa2luZH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIHdhbnQgdG8gZW5kIHVwIHdpdGggYSBzZWxlY3RvciBsaWtlOlxuICAgICAgLy8gICAgI2lraW5kLWRhdGVcbiAgICAgIHNlbGVjdG9yID0gJyNpa2luZC0nLmNvbmNhdCgkKCcuaWtpbmQuc3RlYWx0aC5pbjpmaXJzdCcpLnRleHQoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvLCAnLScpKVxuICAgICAgaWYgKCEkKHNlbGVjdG9yKS5sZW5ndGgpIHNlbGVjdG9yID0gJyNpa2luZC1zZWFyY2gnIC8vIHh4eCAgU0hPUkUgVEhJUyBVUCwgR0lSTCFcbiAgICB9XG5cbiAgICBsb2coJ1NFTEVDVE9SJywgc2VsZWN0b3IpXG5cbiAgICByZXR1cm4gc2VsZWN0b3JcbiAgfVxuXG5cbiAgLy8gZnVuY3Rpb24gdGhhdCBmaW5kcyBhbHRlcm5hdGUgKG5vbi1BSlMudGlsZXIoKSkgc2V0cyBvZiBpdGVtIHRpbGVzLFxuICAvLyB0aGF0IGFyZSBsYWlkIG91dCBpbiBzdHJpcHMvY29sdW1ucyBhbmQgd2lsbCBoaWRlIGVudGlyZSBjb2x1bW5zXG4gIC8vIGlmIHRoZXkgZmFsbCBvZmYgdGhlIHJpZ2h0IHNpZGUsIGluIHRlcm1zIG9mIGZpdHRpbmcgdG8gYnJvd3Nlci9wYWdlIHdpZHRoXG4gIHN0YXRpYyB0aWxlYmFycygpIHtcbiAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIHJvdyBjbGFzc2VzIHRoYXQgaGF2ZSBhdCBsZWFzdCAxIC50aWxlYmFycyAucmVzdWx0cyBkaXYgaW4gdGhlbS4uLlxuICAgICQoJy5yb3cgLnRpbGViYXJzJykuZmluZCgnLnJlc3VsdHMnKS5wYXJlbnRzKCcucm93JykuZWFjaCgoaywgcm93KSA9PiB7XG4gICAgICBsZXQgZmlyc3QgPSBmYWxzZVxuICAgICAgJChyb3cpLmZpbmQoJy5yZXN1bHRzJykuZWFjaCgoa2V5LCB2YWwpID0+IHtcbiAgICAgICAgJCh2YWwpLnNob3coKS5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KVxuICAgICAgICBpZiAoIWZpcnN0KVxuICAgICAgICAgIGZpcnN0ID0gJCh2YWwpLm9mZnNldCgpXG4gICAgICAgIGlmICgkKHZhbCkub2Zmc2V0KCkudG9wICE9PSBmaXJzdC50b3ApXG4gICAgICAgICAgJCh2YWwpLmhpZGUoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgJCh2YWwpLmNzcyh7IHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KVxuICAgICAgfSlcbiAgICAgIC8vIGlmIChmaXJzdCkgJChyb3cpLmZpbmQoJy50aWxlYmFycyA+IGg0JykuY3NzKHsncGFkZGluZy1sZWZ0JzpmaXJzdC5sZWZ0KzEwfSlcbiAgICB9KVxuICB9XG5cblxuICAvLyBhZGRzIGNvbGxlY3Rpb24gcGFyZW50IGhvdmVyaW5nIGltYWdlIGFuZCB0ZXh0IHRvIHRpbGVzXG4gIHN0YXRpYyBwYXJlbnRfaG92ZXIoJHNlbGVjdG9yKSB7XG4gICAgJHNlbGVjdG9yLmZpbmQoJy5pdGVtLWlhOm5vdCguaG92KTpub3QoLmNvbGxlY3Rpb24taWEpOm5vdCguYWNjb3VudC1pYSknKS5hZGRDbGFzcygnaG92JylcbiAgICAgIC5tb3VzZW92ZXIoKGUgPT4gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoJy5pdGVtLXBhcmVudCcpLmFkZENsYXNzKCdob3ZlcmluJykpKVxuICAgICAgLm1vdXNlb3V0KChlICA9PiAkKGUuY3VycmVudFRhcmdldCkuZmluZCgnLml0ZW0tcGFyZW50JykucmVtb3ZlQ2xhc3MoJ2hvdmVyaW4nKSkpXG4gIH1cblxuXG4gIHN0YXRpYyB0aWxlcihzZWxlY3RvckluLCBub1JlY2FsbCkge1xuICAgIGNvbnN0IHRpbGVNYXJnaW5IID0gMzBcbiAgICBjb25zdCB0aWxlTWFyZ2luVyA9IDE3XG5cblxuICAgIC8vIFNlZSBsaXN0ZXIoKSBmb3Igd2h5IHRoaXMgaXMgYWJsZSB0byBiZSBjb21tZW50ZWQgb3V0IG5vdyFcbiAgICAvLyAkKCcucmVzdWx0cyAuaXRlbS1pYSAuQzIsIC5yZXN1bHRzIC5pdGVtLWlhIC5DNCcpLmNzcyh7J3dpZHRoJzonJywnbWF4LXdpZHRoJzonJ30pO1xuICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCd0aWxlcycpKSB7XG4gICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdzaG93ZGV0YWlscycpKVxuICAgICAgICAkKCcuc29ydGJhciBpbnB1dFtuYW1lPXNob3dkZXRhaWxzXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgLy8gQUpTLmxpc3RlcigpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAoc2VsZWN0b3JJbiAgfHwgIEFKUy5zZWxlY3RvcigpKVxuICAgIGlmIChzZWxlY3RvciA9PT0gZmFsc2UpXG4gICAgICByZXR1cm5cblxuXG4gICAgY29uc3QgJHNlbGVjdG9yID0gJChzZWxlY3RvcikuZmlyc3QoKVxuICAgIGNvbnN0IHNlbGVjdG9ySUQgPSAkc2VsZWN0b3IuYXR0cignaWQnKVxuICAgIGNvbnN0ICRwYXJlbnRSb3cgPSAkc2VsZWN0b3IucGFyZW50cygnLnJvdycpXG5cbiAgICAvLyBDU1MgR3JpZCB0aWxlciBleHBlcmltZW50LiAgT0ZGL3VudXNlZC5cbiAgICAvLyBUaGlzIGNvdWxkIGJlIGEgd2F5IHRvIGRyb3AgbXVjaCBvZiB0aGUgSlMgdG8gZG8gb3VyICdtYXNvbmljJyB0aWxpbmcgYnkgbGV2ZXJhZ2luZ1xuICAgIC8vIENTUyBHcmlkIHJvdyAnc3RyaXBzJyBhbmQgc3BhY2UgdGhlIHRpbGUgdG8gdGhlIGNsb3Nlc3Qgb3ZlcmFsbCBoZWlnaHQgb2YgbmFycm93IHJvd3NcbiAgICAvLyBpbnN0ZWFkIG9mIEpTLWJhc2VkIGNhbGN1bGF0aW9ucyBmb3IgYWJzb2x1dGUgJ3RvcCcgcG9zaXRpb25pbmcuXG4gICAgY29uc3QgY3NzR3JpZCA9IChmYWxzZSAgJiYgICQoJ2JvZHknKS5oYXNDbGFzcygnZGV2Ym94JykgICYmICBDU1Muc3VwcG9ydHMoJ2Rpc3BsYXknLCAnZ3JpZCcpKVxuXG5cbiAgICBpZiAoISQoJ2JvZHknKS5oYXNDbGFzcygndGlsZXMnKSkge1xuICAgICAgJHBhcmVudFJvdy5jc3MoeyAncGFkZGluZy1sZWZ0JzogJycsICdwYWRkaW5nLXJpZ2h0JzogJycgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuXG4gICAgaWYgKCFBSlMudGlsZXJQUkVWKSB7XG4gICAgICAvLyBmaXJzdCB0aW1lIHRpbGluZyBwYWdlIVxuICAgICAgQUpTLnRpbGVyUFJFViA9IHtcbiAgICAgICAgd2luVzogMCxcbiAgICAgICAgcGFkOiAwLFxuICAgICAgICBuUGVyUm93OiAxLFxuICAgICAgICBndXR0ZXI6IHRpbGVNYXJnaW5XLFxuICAgICAgICB0aWxlV2lkdGg6IEFKUy5USUxFX1dJRFRILFxuICAgICAgICB1bnNvdXJjZWQ6IHt9LFxuICAgICAgICBmaXJzdExlZnQ6IDAsXG4gICAgICB9XG5cbiAgICAgIEFKUy5wYXJlbnRfaG92ZXIoJHNlbGVjdG9yKVxuICAgIH1cblxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gQUpTLnRpbGVyUFJFVi53aW5XKSB7XG4gICAgICAvLyBGaXJzdCB0aW1lLCBvciBwYWdlIHJlc2l6ZS9vcmllbnRhdGlvbiBjaGFuZ2UuXG4gICAgICAvLyBXZSB3aWxsIGVmZmVjdGl2ZWx5IFwiY2FjaGVcIiBhbGwgdGhpcyBhZGp1c3RpbmcgY29tcHV0YXRpb25zLCBzbyBtdWx0aXBsZSBjYWxscyB0byB0aWxlcigpXG4gICAgICAvLyBjYW4gcmV1c2UgaWYgd2luZG93IHdpZHRoIGhhc250IGNoYW5nZWRcbiAgICAgIC8vIChmb3IgZWZmaWNpZW5jeSwgZWc6IG1hbnkgaW1hZ2VzIHN0aWxsIHNsb3dseSBsb2FkaW5nLi4pXG4gICAgICAkcGFyZW50Um93LmNzcyh7ICdwYWRkaW5nLWxlZnQnOiAnJywgJ3BhZGRpbmctcmlnaHQnOiAnJyB9KSAvLyByZXNldCAoc2VlIGJlbG93KVxuICAgICAgQUpTLnRpbGVyUFJFVi5maXJzdExlZnQgPSAwICAvLyByZXNldCAoc2VlIGJlbG93KVxuXG4gICAgICBjb25zdCAkZmFjZXRzID0gJHBhcmVudFJvdy5maW5kKCcuY29sdW1ucy1mYWNldHM6dmlzaWJsZScpXG4gICAgICBsZXQgZmFjZXRzV2lkdGggPSAkZmFjZXRzLm91dGVyV2lkdGgoKSAgfHwgIDBcbiAgICAgIGlmIChmYWNldHNXaWR0aClcbiAgICAgICAgZmFjZXRzV2lkdGggKz0gMSArIHBhcnNlSW50KCRmYWNldHMuY3NzKCdwYWRkaW5nLXJpZ2h0JyksIDEwKSAvLyBhZGQgY29sdW1ucy1pdGVtcyBndXR0ZXJcbiAgICAgIGNvbnN0IGF2YWlsV2lkdGggPSAkcGFyZW50Um93LndpZHRoKCkgLSBmYWNldHNXaWR0aFxuICAgICAgY29uc3QgZ3V0dGVyID0gKGF2YWlsV2lkdGggPCA0MDAgPyA1IDogdGlsZU1hcmdpblcpXG4gICAgICBjb25zdCB0aWxlV2lkdGggPSAoJCgnLml0ZW0taWE6Zmlyc3QnKS5vdXRlcldpZHRoKCkgPj0gQUpTLlRJTEVfV0lEVEggPyBBSlMuVElMRV9XSURUSCA6IEFKUy5USUxFX1dJRFRIX1NNQUxMKVxuICAgICAgY29uc3QgblBlclJvdyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IoKGF2YWlsV2lkdGggKyBndXR0ZXIpIC8gKHRpbGVXaWR0aCArIGd1dHRlcikpKVxuICAgICAgY29uc3QgZXh0cmEgICA9IE1hdGgubWF4KDAsIChhdmFpbFdpZHRoIC0gKG5QZXJSb3cgKiAodGlsZVdpZHRoICsgZ3V0dGVyKSkpICsgZ3V0dGVyKVxuXG4gICAgICBsb2coXG4gICAgICAgICd0aWxpbmcnLCBzZWxlY3RvcklELFxuICAgICAgICAncGFyZW50Um93VycsICRwYXJlbnRSb3cud2lkdGgoKSxcbiAgICAgICAgJ2ZhY2V0c1dpZHRoJywgZmFjZXRzV2lkdGgsXG4gICAgICAgICdhdmFpbFdpZHRoOiAnLCBhdmFpbFdpZHRoLFxuICAgICAgICAnbnVtYmVyIHBlciByb3cnLCBuUGVyUm93LCAnLiAnLFxuICAgICAgICAnV2l0aCBndXR0ZXIgbWFyZ2luJywgZ3V0dGVyLFxuICAgICAgICAnaGFkICcsIGV4dHJhLCAnZXh0cmEgcGl4ZWxzJyxcbiAgICAgIClcbiAgICAgIEFKUy50aWxlclBSRVYucGFkID0gTWF0aC5yb3VuZChleHRyYSAvIDIpXG5cbiAgICAgIEFKUy50aWxlclBSRVYud2luVyA9ICQod2luZG93KS53aWR0aCgpXG4gICAgICBBSlMudGlsZXJQUkVWLm5QZXJSb3cgPSBuUGVyUm93XG4gICAgICBBSlMudGlsZXJQUkVWLmd1dHRlciA9IGd1dHRlclxuICAgICAgQUpTLnRpbGVyUFJFVi50aWxlV2lkdGggPSB0aWxlV2lkdGhcbiAgICB9XG5cbiAgICBpZiAoIWNzc0dyaWQpIHtcbiAgICAgIGlmIChBSlMudGlsZXJQUkVWLm5QZXJSb3cgPiAxKVxuICAgICAgICAkcGFyZW50Um93LmNzcyh7ICdwYWRkaW5nLWxlZnQnOiBBSlMudGlsZXJQUkVWLnBhZCwgJ3BhZGRpbmctcmlnaHQnOiBBSlMudGlsZXJQUkVWLnBhZCB9KVxuICAgICAgZWxzZVxuICAgICAgICBBSlMudGlsZXJQUkVWLmZpcnN0TGVmdCA9IEFKUy50aWxlclBSRVYucGFkXG4gICAgfVxuXG4gICAgbGV0IG5JbWdaZXJvSGVpZ2h0ID0gMFxuICAgIGNvbnN0IG5JbWdaZXJvSGVpZ2h0QXJ5ID0gW11cbiAgICBsZXQgbWF4dG9wID0gMFxuICAgIGNvbnN0IHRvcHMgPSB7IDA6IDAgfVxuICAgIGNvbnN0IGxlZnRzID0geyAwOiBBSlMudGlsZXJQUkVWLmZpcnN0TGVmdCB9XG4gICAgaWYgKCFjc3NHcmlkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IEFKUy50aWxlclBSRVYublBlclJvdzsgaSsrKSB7XG4gICAgICAgIGxlZnRzW2ldID0gbGVmdHNbaSAtIDFdICsgQUpTLnRpbGVyUFJFVi5ndXR0ZXIgKyBBSlMudGlsZXJQUkVWLnRpbGVXaWR0aFxuICAgICAgICB0b3BzW2ldID0gMFxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gQW55IGl0ZW0gdGlsZXMgdy8gdW5sb2FkZWQvc2V0IHNyYyB0YWdzIGdldCB1cGRhdGVkIGFuZCBsb2FkZWQgbm93IVxuICAgIC8vIE9ubHkgaGF2ZSB0byBkbyB0aGlzIHBhc3Mgb24gYSBzd2F0aGUgb2YgbmV3IHJlc3VsdHMgKDFzdCBwYWdlIG9yIGluZmluIHNjcm9sbCBzZXQgYWRkZWQpXG4gICAgaWYgKCFBSlMudGlsZXJQUkVWLnVuc291cmNlZFtzZWxlY3RvcklEXSkge1xuICAgICAgbG9nKCd1bnNvdXJjaW5nJywgc2VsZWN0b3JJRClcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgcHJlZmVyLWFycm93LWNhbGxiYWNrXG4gICAgICAkc2VsZWN0b3IuZmluZCgnLml0ZW0taWEgaW1nW3NvdXJjZV0nKS5lYWNoKGZ1bmN0aW9uIHRpbGVyX3Vuc291cmNpbmcoaywgdikge1xuICAgICAgICAkKHYpLmF0dHIoe1xuICAgICAgICAgIHNyYzogJCh2KS5hdHRyKCdzb3VyY2UnKSxcbiAgICAgICAgICBvbkVycm9yOiAnJCh0aGlzKS5hdHRyKFwic3JjXCIsXCIvaW1hZ2VzL25vdGZvdW5kLnBuZ1wiKScsXG4gICAgICAgIH0pLnJlbW92ZUF0dHIoJ3NvdXJjZScpXG4gICAgICB9KVxuICAgICAgQUpTLnRpbGVyUFJFVi51bnNvdXJjZWRbc2VsZWN0b3JJRF0gPSAxXG4gICAgfVxuXG5cbiAgICBpZiAoY3NzR3JpZClcbiAgICAgICRzZWxlY3Rvci5maW5kKCcucmVzdWx0cycpLnJlbW92ZUNsYXNzKCdncmlkLXRpbGVzJykgLy8gd2UgbmVlZCB0byBsZXQgdGlsZXMgc2l6ZSBuYXR1cmFsbHkgZmlyc3RcbiAgICBlbHNlXG4gICAgICBBSlMuY29sUFJFViA9IC0xIC8vIHdlIHRyYWNrIHdoZXJlIHByZXZpb3VzIHRpbGUgd2FzIHBsYWNlZFxuXG4gICAgJHNlbGVjdG9yLmZpbmQoJy5pdGVtLWlhJykubm90KCcubW9iaWxlLWhlYWRlcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKS5lYWNoKChpZHgsIHZhbCkgPT4ge1xuICAgICAgY29uc3QgJHZhbCA9ICQodmFsKVxuICAgICAgY29uc3QgJHZhbEhUID0gJHZhbC5pbm5lckhlaWdodCgpXG4gICAgICAvLyBsb2coJyR2YWxIVCcsICR2YWxIVClcblxuICAgICAgY29uc3QgY3NzID0ge31cbiAgICAgIGlmIChjc3NHcmlkKSB7XG4gICAgICAgIGxvZyhgJHskdmFsSFR9IHNwYW46ICR7TWF0aC5jZWlsKCgkdmFsSFQgKyAyNSkgLyAzNSl9YClcbiAgICAgICAgY3NzWydncmlkLXJvdy1lbmQnXSA9IGBzcGFuICR7TWF0aC5jZWlsKCgkdmFsSFQgKyAyNSkgLyAzNSl9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvbCA9IDBcbiAgICAgICAgaWYgKEFKUy50aWxlclBSRVYublBlclJvdyA+IDEgICYmICBpZHggPj0gQUpTLnRpbGVyUFJFVi5uUGVyUm93KSB7XG4gICAgICAgICAgLy8gRmlyc3QsIGN5Y2xlIGZyb20gbGFzdCBwbGFjZWQgdGlsZSBjb2x1bW4gbG9jYXRpb24gdG8gXCJmaXJzdCBjeWNsZWQgc2xvdFwiLlxuICAgICAgICAgIC8vIChUaGF0IGlzLCBtb3ZlIFwiMSB0byByaWdodFwiIGZyb20gbGFzdCBwbGFjZWQgdGlsZSBjb2x1bW4sIGJ1dCBpdCdzIGEgY3ljbGUvcmluZ1xuICAgICAgICAgIC8vIGZvciBmaW5hbCBjb2x1bW4gLS0gZ28gdG8gMXN0IGNvbHVtbiBpbiB0aGF0IGNhc2UpLlxuICAgICAgICAgIC8vIFRlc3QgcGxhY2UgbmV3IHRpbGUgKnRoZXJlKiAoaW4gXCJmaXJzdCBjeWNsZWQgc2xvdFwiKSBVTkxFU1MgZnVydGhlciBhaGVhZCBpblxuICAgICAgICAgIC8vIGN5Y2xlL3Jpbmcgb2Ygb3RoZXIgc2xvdHMsIHRoZSB0aWxlIHdpbGwgZml0IHdoZXJlIGl0cyBCT1RUT00gd2lsbCBiZSBhYm92ZSB3aGVyZVxuICAgICAgICAgIC8vIHRpbGUgVE9QIHdvdWxkIGJlIGluIHRoZSBcImZpcnN0IGN5Y2xlZCBzbG90XCIuXG4gICAgICAgICAgLy8gKGFuZCBwaWNrIHRoZSBcImZpcnN0XCIgaW4gc3VjaCBhIGNhc2UgaWYgMisgc2xvdHMgbGlrZSB0aGF0KVxuICAgICAgICAgIGNvbnN0IGNvbFRFU1QgPSAoKEFKUy5jb2xQUkVWICsgMSkgICUgIEFKUy50aWxlclBSRVYublBlclJvdylcbiAgICAgICAgICBjb2wgPSBjb2xURVNUIC8vIGZhbGxiYWNrL2RlZmF1bHRcbiAgICAgICAgICBjb25zdCBjbXBURVNUID0gdG9wc1tjb2xURVNUXSAtICR2YWxIVCAvLyBbc2xpZ2h0bHkgbW9yZSBlZmZpY2llbnQgd2F5IDIgY29tcGFyZV1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFKUy50aWxlclBSRVYublBlclJvdzsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sVEVTVCAgJiYgIGNtcFRFU1QgPiB0b3BzW2ldKSB7XG4gICAgICAgICAgICAgIGNvbCA9IGlcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sID0gKGlkeCAlIEFKUy50aWxlclBSRVYublBlclJvdylcbiAgICAgICAgfVxuICAgICAgICBBSlMuY29sUFJFViA9IGNvbFxuICAgICAgICBjc3MudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgICBjc3MudG9wICA9ICB0b3BzW2NvbF1cbiAgICAgICAgY3NzLmxlZnQgPSBsZWZ0c1tjb2xdXG5cbiAgICAgICAgLy8gc2V0dXAgZm9yIG5leHQgdGlsZS4uLlxuICAgICAgICB0b3BzW2NvbF0gKz0gKCR2YWxIVCArIHRpbGVNYXJnaW5IKVxuXG4gICAgICAgIG1heHRvcCA9IE1hdGgubWF4KG1heHRvcCwgdG9wc1tjb2xdKVxuICAgICAgfVxuXG4gICAgICAkdmFsLmNzcyhjc3MpXG5cblxuICAgICAgLy8gdHJhY2sgaG93IG1hbnkgdGlsZSBpbWFnZXMgYXJlIHdpdGhvdXQgaGVpZ2h0XG4gICAgICAvLyAoZWl0aGVyIG5vdCBsb2FkZWQgb3Igbm8gQ1NTIGhlaWdodCBzdHlsZSBzZXQgaWYgaW1nIG5vdCBsb2FkaW5nIGZyb20gREIpXG4gICAgICBsZXQgdG1wID0gJHZhbC5maW5kKCcuaXRlbS1pbWcnKVxuXG4gICAgICBpZiAodG1wLmxlbmd0aCAgJiYgICEoJHZhbC5maW5kKCcuaXRlbS1pbWcnKS5oZWlnaHQoKSkpIHtcbiAgICAgICAgbkltZ1plcm9IZWlnaHQgKz0gMVxuICAgICAgICB0bXAgPSAkdmFsLmF0dHIoJ2RhdGEtaWQnKVxuICAgICAgICBpZiAodG1wKVxuICAgICAgICAgIG5JbWdaZXJvSGVpZ2h0QXJ5LnB1c2godG1wKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY3NzR3JpZCkge1xuICAgICAgJHNlbGVjdG9yLmZpbmQoJy5yZXN1bHRzJykuYWRkQ2xhc3MoJ2dyaWQtdGlsZXMnKVxuICAgICAgJHNlbGVjdG9yLmZpbmQoJy5pdGVtLWlhJykuY3NzKHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIGhhdmUgdG8gbWFudWFsbHkgc2V0IHRoZSBoZWlnaHQgb2YgdGhlIFwic2VsZWN0b3JcIlxuICAgICAgbG9nKCdtYXh0b3AnLCBtYXh0b3ApXG4gICAgICAkc2VsZWN0b3IuZmluZCgnLnJlc3VsdHMnKS5jc3MoeyBoZWlnaHQ6IG1heHRvcCB9KVxuICAgIH1cblxuXG4gICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbWFuYWdlJykpIHtcbiAgICAgICQoJy5pdGVtLWlhOm5vdCgucmVtb3ZhYmxlKScpLmFkZENsYXNzKCdyZW1vdmFibGUnKS5hcHBlbmQoYFxuICAgICAgICA8ZGl2IGNsYXNzPVwieGVyXCIgb25jbGljaz1cInJldHVybiBBSlMudW5tYW5hZ2UodGhpcylcIiB0aXRsZT1cInJlbW92ZSBpdGVtIGZyb20gYmVpbmcgc3VibWl0dGVkIHRvIGl0ZW0gbWFuYWdlbWVudFwiPjwvZGl2PmApXG4gICAgfVxuXG5cbiAgICBpZiAoKG5JbWdaZXJvSGVpZ2h0KSAgJiYgICFub1JlY2FsbCkge1xuICAgICAgbG9nKFxuICAgICAgICBuSW1nWmVyb0hlaWdodCwgJyBpbWcgKHN0aWxsIHcvbyBoZWlnaHQpOyByZWNhbGwgdGlsZXIoJywgc2VsZWN0b3IsICcpLi4uJyxcbiAgICAgICAgbkltZ1plcm9IZWlnaHRBcnkuam9pbignLCcpLFxuICAgICAgKVxuICAgICAgLy8gcmVjYWxsIG91cnNlbHZlcywgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSAxLjUgc2Vjb25kcyFcbiAgICAgIGNsZWFyVGltZW91dChBSlMudGlsZXJfdGhyb3R0bGVyKVxuICAgICAgQUpTLnRpbGVyX3Rocm90dGxlciA9IHNldFRpbWVvdXQoKCkgPT4gQUpTLnRpbGVyKHNlbGVjdG9yLCAwKSwgMTUwMClcbiAgICB9XG4gIH1cblxuXG4gIHN0YXRpYyBpa2luZChsbmssIGlkKSB7XG4gICAgY29uc3QgaWRzZWwgPSBgIyR7aWR9YFxuICAgIGxvZygnaWtpbmQnLCBpZClcbiAgICAkKGlkc2VsKS5wYXJlbnQoKS5maW5kKCdkaXYuaWtpbmQuaW4nKS5oaWRlKClcbiAgICAkKGlkc2VsKS5yZW1vdmVDbGFzcygnaGlkZGVuJykuYWRkQ2xhc3MoJ2luJykuc2hvdygpXG4gICAgJChpZHNlbCkucGFyZW50cygnLnRhYmJ5LWRhdGEnKS5maW5kKCdhLmlraW5kJykucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgICQobG5rKS5hZGRDbGFzcygnaW4nKVxuXG4gICAgQUpTLnRpbGVyKGlkc2VsKVxuXG4gICAgLy8gbm93IHNlbGVjdCB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50IGluIHRoZSBzaGFkb3dpbmcgc2VsZWN0IGZvciBtb2JpbGVcbiAgICBjb25zdCAkc2VsID0gJChpZHNlbCkucGFyZW50cygnLnRhYmJ5LWRhdGEnKS5maW5kKCdzZWxlY3QuaWtpbmQtbW9iaWxlJylcbiAgICBjb25zdCAkbmV3ID0gJHNlbC5maW5kKCdvcHRpb246Y29udGFpbnMoJy5jb25jYXQoJChsbmspLnRleHQoKSwgJyknKSlcbiAgICBjb25zdCAkbm93ID0gJHNlbC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKVxuICAgIGlmICgkbmV3LnRleHQoKS50cmltKCkgIT09ICRub3cudGV4dCgpLnRyaW0oKSkge1xuICAgICAgbG9nKCdjaGFuZ2luZyBpa2luZCBtb2JpbGUgbm93IHRvICcsICRuZXcudGV4dCgpKVxuICAgICAgQUpTLmlraW5kX21vYmlsZV9jaGFuZ2VfaWdub3JlX25leHQgPSB0cnVlXG4gICAgICAkbmV3LmF0dHIoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJylcbiAgICAgIC8vICRub3cucmVtb3ZlQXR0cignc2VsZWN0ZWQnKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgc3RhdGljIGlraW5kX21vYmlsZV9jaGFuZ2UoZWxtKSB7XG4gICAgaWYgKEFKUy5pa2luZF9tb2JpbGVfY2hhbmdlX2lnbm9yZV9uZXh0KSB7XG4gICAgICBBSlMuaWtpbmRfbW9iaWxlX2NoYW5nZV9pZ25vcmVfbmV4dCA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCAkc2Vsb3B0ID0gJChlbG0pLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpXG4gICAgbG9nKCdpa2luZCBtb2JpbGUgY2hhbmdlZCB0bzogJywgJHNlbG9wdC50ZXh0KCkpXG4gICAgbGV0ICRpa2luZHMgPSAkKGVsbSkucGFyZW50cygnLnRhYmJ5LWRhdGEnKS5maW5kKCdhLmlraW5kJylcbiAgICBpZiAoISRpa2luZHMubGVuZ3RoKSB7XG4gICAgICAvLyBOTyB0YWJieSEgIGVnOiB0b3AgcGFnZSBvciBzZWFyY2ggcGFnZVxuICAgICAgJGlraW5kcyA9ICQoJ2JvZHknKS5maW5kKCdhLmlraW5kJylcbiAgICB9XG5cbiAgICBpZiAoISRpa2luZHMubGVuZ3RoKVxuICAgICAgcmV0dXJuIC8vIHVobyFcblxuICAgIGNvbnN0ICRpa2luZCA9ICRpa2luZHMuZmlsdGVyKChrLCB2KSA9PiAkKHYpLnRleHQoKSA9PT0gJHNlbG9wdC50ZXh0KCkpXG5cbiAgICBjb25zdCBocmVmID0gJGlraW5kLmF0dHIoJ2hyZWYnKVxuICAgIGxvZygnZ290bycsIGhyZWYpXG5cbiAgICBpZiAoaHJlZikge1xuICAgICAgaWYgKGhyZWYuc3Vic3RyKDAsIDEpID09PSAnIycpIHtcbiAgICAgICAgLy8gQUNDT1VOVCBQQUdFIChGT1IgTk9XKSEgIChTVElMTCBVU0VTIEhBU0ggRk9SIE5PVylcbiAgICAgICAgJChgYS5pa2luZFtkYXRhLWlkPSR7aHJlZi5zdWJzdHIoMSl9XWApLmNsaWNrKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBocmVmXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgcG9wU3RhdGUocGFnZVR5cGUpIHtcbiAgICAvLyBhcmUgd2Ugd2F0Y2hpbmcgaGlzdG9yeS5wdXNoU3RhdGUoKSBhbmQgaGlzdG9yeS5wb3BTdGF0ZSgpIGNhbGxzP1xuICAgIEFKUy5wdXNoU3RhdGUgPSAodHlwZW9mIGhpc3RvcnkucHVzaFN0YXRlICE9PSAndW5kZWZpbmVkJylcbiAgICBsb2coJ3BvcFN0YXRlKCcsIHBhZ2VUeXBlLCAnKSBjYWxsZWQsIG1vZGVybiBicm93c2VyOiAnLCAoQUpTLnB1c2hTdGF0ZSA/ICd5JyA6ICduJykpXG5cbiAgICBpZiAocGFnZVR5cGUpIC8vIGFueXRoaW5nIGN1c3RvbSB3ZSBuZWVkIHRvIGRvIGJhc2VkIG9uIHBhZ2VUeXBlP1xuICAgICAgcmV0dXJuXG5cblxuICAgIGNvbnN0IHRhYlBpY2sgPSAoaGFzaDJhcmcpID0+IHtcbiAgICAgIGxldCB0YWIgPSBBSlMuYXJnKCd0YWInLCB0cnVlKVxuICAgICAgaWYgKHRhYilcbiAgICAgICAgdGFiID0gYCN0YWJieS0ke3RhYn0tZmluZGVyYFxuICAgICAgZWxzZSBpZiAoaGFzaDJhcmcpXG4gICAgICAgIHRhYiA9IGAjdGFiYnktJHtoYXNoMmFyZ30tZmluZGVyYFxuICAgICAgZWxzZVxuICAgICAgICB0YWIgPSAnLnRhYmJ5LWRlZmF1bHQtZmluZGVyJ1xuXG4gICAgICBpZiAoQUpTLnB1c2hTdGF0ZSlcbiAgICAgICAgbG9nKCdnb3RvIHRhYjogJywgdGFiLCAnICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBTVEFURScpXG4gICAgICBBSlMudGFiYnlfbm9fcHVzaFN0YXRlX25leHRfY2xpY2sgPSB0cnVlXG4gICAgICAkKHRhYikuY2xpY2soKVxuICAgIH1cblxuICAgIGlmIChBSlMucHVzaFN0YXRlKSB7XG4gICAgICAvLyBydW5zIG9uIHBhZ2UgbG9hZCBvciBicm93c2VyIFwiYmFja1wiOlxuICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsICgpID0+IHRhYlBpY2soKSlcbiAgICB9XG4gICAgLy8gZWxzZSB1c2VyIGhhcyBhbiBvbGRlciBicm93c2VyIG9yIE9wZXJhIE1pbmkgYW5kIGRvZXNuJ3QgaGF2ZSBwdXNoU3RhdGUvcG9wU3RhdGUhXG5cbiAgICB0YWJQaWNrKClcbiAgfVxuXG5cbiAgc3RhdGljIHRhYmJ5KGxuaywgaWQpIHtcbiAgICBsb2coJ0FKUy50YWJieSgpJywgaWQpXG4gICAgY29uc3QgaW5UYWIgPSBpZC5yZXBsYWNlKC90YWJieS0vLCAnJykudHJpbSgpXG4gICAgaWYgKGluVGFiID09PSAndXBsb2FkcycgfHwgaW5UYWIgPT09ICdyZXZpZXdzJyB8fCBpblRhYiA9PT0gJ2NvbGxlY3Rpb25zJyB8fCBpblRhYiA9PT0gJ2xvYW5zJyB8fCBpblRhYiA9PT0gJ3dlYiBhcmNoaXZlcycpIHtcbiAgICAgIC8vIGFjY291bnQgcGFnZXMgLS0gd2UgbmVlZCB0byBmdWxseSByZWxvYWQgcGFnZSB3LyBuZXcvd2FudGVkIGl0ZW0gdGlsZXMhXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIE9ubHkgY29sbGVjdGlvbiBwYWdlcyBoYXZlIHRhYnMgLyBwcm9jZWVkXG4gICAgLy8gQWxsIHRocmVlIHRhYnMgaGF2ZSBhbGwgdGhlIG1hcmt1cCBvbiB0aGUgcGFnZSBhbHJlYWR5LlxuICAgIC8vIFNvLCBmb3IgbW9kZXJuIGJyb3dzZXJzLCB3ZSB3aWxsIHNpbXBseSBzd2l0Y2ggdGhlIHZpc2liaWxlXG4gICAgLy8gdGFiIGFuZCB1cGRhdGUtaW4tcGxhY2UgdGhlIHVybCBpbiB0aGUgYnJvd3NlciB1cmwgdHlwZWluXG4gICAgLy8gLS0gV0lUSE9VVCByZWZyZXNoaW5nIHRoZSBwYWdlLlxuXG4gICAgJCgnLnRhYmJ5LWRhdGEuaW4nKS5yZW1vdmVDbGFzcygnaW4nKS5oaWRlKClcbiAgICAkKGAjJHtpZH1gKS5yZW1vdmVDbGFzcygnaGlkZGVuJykuYWRkQ2xhc3MoJ2luJykuc2hvdygpXG4gICAgJCgnLnRhYmJ5JykucmVtb3ZlQ2xhc3MoJ2luJylcbiAgICAkKGxuaykucGFyZW50cygnLnRhYmJ5JykuYWRkQ2xhc3MoJ2luJylcblxuICAgIGlmIChBSlMudGFiYnlfbm9fcHVzaFN0YXRlX25leHRfY2xpY2spIHtcbiAgICAgIGRlbGV0ZSBBSlMudGFiYnlfbm9fcHVzaFN0YXRlX25leHRfY2xpY2tcbiAgICB9IGVsc2UgaWYgKEFKUy5wdXNoU3RhdGUgICYmICB0eXBlb2YgaGlzdG9yeS5wdXNoU3RhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBocmVmID0gJChsbmspLmF0dHIoJ2hyZWYnKVxuICAgICAgY29uc3QgbG9jTk9XID0gbG9jYXRpb24uaHJlZlxuICAgICAgY29uc3QgbG9jTkVXID0gbG9jYXRpb24ucHJvdG9jb2wuY29uY2F0KCcvLycsIGxvY2F0aW9uLmhvc3QsIGhyZWYpXG4gICAgICBpZiAobG9jTk9XICE9PSBsb2NORVcpIHtcbiAgICAgICAgbG9nKCdwdXNoU3RhdGU6ICcsIGhyZWYsICcgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFNUQVRFJylcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBsb2NORVcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluVGFiID09PSAnY29sbGVjdGlvbicgIHx8ICBpblRhYiA9PT0gJ2Fib3V0JykgeyAgLy8gY29sbGVjdGlvbiBwYWdlc1xuICAgICAgaWYgKGluVGFiID09PSAnYWJvdXQnKVxuICAgICAgICBBSlMuZ3JhZnMoKVxuICAgICAgQUpTLnRpbGVyKClcbiAgICB9XG5cbiAgICBpZiAoQUpTLnB1c2hTdGF0ZSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuXG4gIHN0YXRpYyBjb2xjbGljayhlKSB7XG4gICAgY29uc3QgJGUgPSAkKGUpXG4gICAgY29uc3QgaWQgPSAkZS5hdHRyKCdkYXRhLWlkJylcblxuICAgIC8vICpOT1JNQUxMWSogY2xpY2tpbmcgb24gYSBjb2xsZWN0aW9uIHRpbGUgZ29lcyB0byBpdC5cbiAgICAvLyBCVVQgTk9UOlxuICAgIC8vICAgKiBpbiBsaXN0cyBtb2RlIChvbmx5IHRoZSBpZGVudGlmaWVyIGxpbmsgZG9lcyB0aGF0IC0tIG5vdCBvdGhlciBkYXRhIGNvbHVtbnMhKVxuICAgIC8vICAgKiBpZiBpbiBwcm9jZXNzIG9mIHJlbW92aW5nIGl0ZW1zIChlZzogZnJvbSBmYXZvcml0ZXMgbGlzdClcbiAgICBpZiAoaWQgICYmICAkKCdib2R5JykuaGFzQ2xhc3MoJ3RpbGVzJykgICYmICAhJGUuaGFzQ2xhc3MoJ3JlbW92YWJsZScpKVxuICAgICAgbG9jYXRpb24uaHJlZiA9IGAvZGV0YWlscy8ke2lkfWBcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzaW5nIHRvIGdldCByZWxhdGVkIGl0ZW0gdXNpbmcgbmV3IEFQSSwgR2V0IHJlc3BvbnNlIGFuZCBSZW5kZXIgdXNpbmcgUmVhY3QgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgc2V0VXBSZWxhdGVkSXRlbXMoKSB7XG4gICAgY29uc3QgYWxzb0ZvdW5kRWxlbWVudCAgPSAkKCcjYWxzby1mb3VuZC1yZXN1bHQnKVxuXG4gICAgLy8gR0VUIHRvcCBvZmZzZXQgb2YgI2Fsc28tZm91bmQocmVsYXRlZCBpdGVtIHNlY3Rpb24pIGFuZCBleGVjdXRpbmcgYWpheCBjYWxsIGFjY29yZGluZ2x5XG4gICAgaWYgKGFsc29Gb3VuZEVsZW1lbnQubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpXG5cbiAgICAgIGNvbnN0IHRocm90dGxlZExpc3RlbmVyID0gdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHNvRm91bmQgICAgPSAkKCcjYWxzby1mb3VuZCcpXG4gICAgICAgIGNvbnN0IHRvcE9mZnNldCAgICA9IGFsc29Gb3VuZC5vZmZzZXQoKS50b3BcbiAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKVxuICAgICAgICAvLyBPbmUgaGFsZiBzY3JlZW4gYWJvdmUgdGhlIHRvcCBvZiB0aGUgZWxlbWVudFxuICAgICAgICBjb25zdCBsYXp5TG9hZFN0YXJ0ID0gdG9wT2Zmc2V0IC0gKHdpbmRvd0hlaWdodCAvIDIpXG5cbiAgICAgICAgaWYgKCR3aW5kb3cuc2Nyb2xsVG9wKCkgKyB3aW5kb3dIZWlnaHQgPj0gbGF6eUxvYWRTdGFydCkge1xuICAgICAgICAgIGlmIChhbHNvRm91bmRFbGVtZW50LnRleHQoKSA9PT0gJycpIHtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHRpbGViYXJzLCBub3cgdGhhdCB3ZSd2ZSBzdGFydGVkIGxvYWRpbmdcbiAgICAgICAgICAgIGFsc29Gb3VuZC5maW5kKCcudGlsZWJhcnMnKS5zaG93KClcblxuICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKDxBSlMuTG9hZGluZ01lc3NhZ2UgbWVzc2FnZT1cIkZldGNoaW5nIGl0ZW1zXCIgLz4sIGFsc29Gb3VuZEVsZW1lbnRbMF0pXG5cbiAgICAgICAgICAgIEFKUy5kb1doZW5TY3JvbGxlZFRvUmVsYXRlZFNlY3Rpb24oKVxuICAgICAgICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXIgYWZ0ZXIgaXQgbG9hZHNcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gJHdpbmRvdy5vZmYoJ3Njcm9sbCcsIHRocm90dGxlZExpc3RlbmVyKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMClcblxuICAgICAgJHdpbmRvdy5zY3JvbGwodGhyb3R0bGVkTGlzdGVuZXIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBBUEkgcmVzcG9uc2UgZnJvbSBBSlMuZ2V0UmVsYXRlZEl0ZW1zKCkgYWZ0ZXIgI2Fsc28tZm91bmQtcmVzdWx0IHNjcm9sbGVkIGFuZFxuICAgKiByZW5kZXIgcmVzcG9uc2UgdXNpbmcgcmVhY3QgY29tcG9uZW50XG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICBzdGF0aWMgZG9XaGVuU2Nyb2xsZWRUb1JlbGF0ZWRTZWN0aW9uKCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSAkKCcjYWxzby1mb3VuZCcpLmRhdGEoJ2lkZW50aWZpZXInKVxuICAgIGNvbnN0IGFsc29Gb3VuZEVsZW1lbnQgPSAkKCcjYWxzby1mb3VuZC1yZXN1bHQnKVxuXG4gICAgcmV0dXJuIEFKUy5nZXRSZWxhdGVkSXRlbXMoaWRlbnRpZmllcilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBTZW5kaW5nIGRhdGFIYXNoIHRvIFJlYWN0IENvbXBvbmVuZXQgdG8gcmVuZGVyIEhUTUwgb2YgcmVsYXRlZCBpdGVtcyBzZWN0aW9uXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcig8QUpTLlJlbGF0ZWRJdGVtU2VjdGlvbiBkYXRhSGFzaD17cmVzcG9uc2V9IC8+LCBhbHNvRm91bmRFbGVtZW50WzBdKVxuXG4gICAgICAgIC8vIFNldCB2aXNpYmlsaXR5OmhpZGRlbiBvZiB0aWxlcyBmb3IgMm5kKyByb3cgZXNwLiBmb3IgbmFycm93ZXIgcGFnZXNcbiAgICAgICAgQUpTLnRpbGViYXJzKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIFNob3cgbWVzc3NhZ2Ugd2hlbiBzaW1pbGFyIGl0ZW1zIG5vdCBmb3VuZC5cbiAgICAgICAgLy8gU2hvdyB0aGUgcmVsYXRlZCBpdGVtcyBzZWN0aW9uLCBzbyB3ZSBjYW4gZGlzcGxheSBlcnJvclxuICAgICAgICAkKCcjYWxzby1mb3VuZCcpLnNob3coKVxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoPEFKUy5FcnJvck1lc3NhZ2UgZXJyb3JNc2c9e2Vycm9yLm1lc3NhZ2V9IC8+LCBhbHNvRm91bmRFbGVtZW50WzBdKVxuICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBUEkgY2FsbCB0byBnZXQgcmVsYXRlZCBpdGVtIGFuZCByZXR1cm4gcmVzcG9uc2UgdXNpbmcgUHJvbWlzZVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkZW50aWZpZXIgaXRlbSBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSAge051bWJlcn0gc2l6ZSBudW1iZXIgb2YgaXRlbSByZXN1bHRzICg2IGlzIHRoZSBkZWZhdWx0KVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5fFN0cmluZz59XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVsYXRlZEl0ZW1zKGlkZW50aWZpZXIsIHNpemUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgYXJncyA9IHsgc2l6ZSB9XG4gICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9iZS1hcGkudXMuYXJjaGl2ZS5vcmcvbWRzL3YxL2dldF9yZWxhdGVkL2FsbC8ke2VuY29kZVVSSUNvbXBvbmVudChpZGVudGlmaWVyKX0keyhzaXplID8gYD8keyQucGFyYW0oYXJncyl9YCA6ICcnKX1gXG4gICAgICBjb25zdCBoYXNoRGF0YSA9IFtdXG4gICAgICBsZXQgYXBpRXJyb3IgPSBmYWxzZVxuXG4gICAgICAkLmdldChhcGlVcmwsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgaXRlbXMgPSBbXVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGl0ZW1zID0gcmVzcG9uc2UuaGl0cy5oaXRzXG4gICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIGFwaUVycm9yID0gdHJ1ZVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGFwaUVycm9yID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFwaUVycm9yKSB7XG4gICAgICAgICAgLy8gUmV0dXJuIGVycm9yIG1lc3NhZ2UgdG8gUHJvbWlzZSB3aGVuIHJlc3BvbnNlIGlzIGVtcHR5IE9SIGtleSBub3QgZXhpc3RzXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2ltaWxhciBpdGVtcyBub3QgZm91bmQnKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAvKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6XG4gICAgICAgICAgW2Vycm9yLCB7IFwiYWxsb3dcIjogW1wiX2lkXCIsIFwiX3NvdXJjZVwiLCBcIl9tb2RhbF9hZGRcIl0gfV0gKi9cbiAgICAgICAgICBjb25zdCBpdGVtU291cmNlICA9IGl0ZW0uX3NvdXJjZVxuICAgICAgICAgIGNvbnN0IHNpbmdsZUhhc2ggID0ge1xuICAgICAgICAgICAgaWRlbnRpZmllcjogaXRlbS5faWQsXG4gICAgICAgICAgICBudW1SZXZpZXdzOiAwLFxuICAgICAgICAgICAgbGVuZGluZ0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGVuZGluZ0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBsb2dpblJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGxlbmRDbGFzczogJycsXG4gICAgICAgICAgICBmYXZvcml0ZTogMCxcbiAgICAgICAgICAgIGNyZWF0b3I6ICcnLFxuICAgICAgICAgIH1cblxuICAgICAgICAgICQuZWFjaChpdGVtU291cmNlLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2Rvd25sb2FkcycpXG4gICAgICAgICAgICAgIHNpbmdsZUhhc2guZG93bmxvYWRzID0gW3ZhbHVlWzBdXVxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAndGl0bGUnKVxuICAgICAgICAgICAgICBzaW5nbGVIYXNoLnRpdGxlID0gW3ZhbHVlWzBdXVxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnbWVkaWF0eXBlJylcbiAgICAgICAgICAgICAgc2luZ2xlSGFzaC5tZWRpYXR5cGUgPSBbdmFsdWVbMF1dXG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjcmVhdG9yU29ydGVyJykge1xuICAgICAgICAgICAgICAvLyBSZXBsYWNpbmcgZmlyc3QgY2hhcmFjdGVyIGxvd2VyIHRvIENBUFRJQUwgb2YgZWFjaCBjcmVhdG9yIG5hbWUuXG4gICAgICAgICAgICAgIC8vIEUuZyBnb2xkc21pdGggVE8gR29sZHNtaXRoXG4gICAgICAgICAgICAgIHZhbHVlWzBdLnJlcGxhY2UoL1xcd1xcUyovZywgKHR4dCkgPT4ge1xuICAgICAgICAgICAgICAgIHNpbmdsZUhhc2guY3JlYXRvciArPSB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkuY29uY2F0KCcgJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NvbGxlY3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIENvdW50aW5nIG51bWJlciBvZiBmYXZvcml0ZSBjb2xsbGVjdGlvbnNcbiAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgc2luZ2xlSGFzaC5mYXZvcml0ZSArPSAodmFsLm1hdGNoKC9mYXYtL2cpIHx8IFtdKS5sZW5ndGhcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignbG9nZ2VkaW4nKSA+IDApXG4gICAgICAgICAgICAgICAgc2luZ2xlSGFzaC5sb2dpblJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnbG9hbnNfX3N0YXR1c19fc3RhdHVzJykge1xuICAgICAgICAgICAgICBzaW5nbGVIYXNoLmxlbmRpbmdFbmFibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICBpZiAodmFsdWVbMF0gPT09ICdBVkFJTEFCTEUnKSB7XG4gICAgICAgICAgICAgICAgc2luZ2xlSGFzaC5sZW5kaW5nQXZhaWxhYmxlICA9IHRydWVcbiAgICAgICAgICAgICAgICBzaW5nbGVIYXNoLmxlbmRDbGFzcyA9ICdsZW5kaW5nLWF2YWlsYWJsZSdcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVIYXNoLmxlbmRDbGFzcyA9ICdsZW5kaW5nLWNoZWNrZWQtb3V0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdudW1fcmV2aWV3cycpXG4gICAgICAgICAgICAgIHNpbmdsZUhhc2gubnVtUmV2aWV3cyA9IFt2YWx1ZVswXV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgaGFzaERhdGEucHVzaChzaW5nbGVIYXNoKVxuICAgICAgICB9KVxuICAgICAgICByZXNvbHZlKGhhc2hEYXRhKSAvLyBSZXR1cm4gcmVsYXRlZCBpdGVtcyBoYXNoRGF0YSB1c2luZyBQcm9taXNlXG4gICAgICB9KS5lcnJvcigoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NpbWlsYXIgaXRlbXMgbm90IGZvdW5kJykpIC8vIFJldHVybiBlcnJvciBtZXNzYWdlIHRvIFByb21pc2Ugd2hlbiBhbnkgZXJyb3IgZm91bmRcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG5cbiAgc3RhdGljIGxpc3RfcmVtb3ZlX2l0ZW0oeGVyKSB7XG4gICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbGlzdHMnKSlcbiAgICAgICQoJy50aWxlcy1idXR0b246dmlzaWJsZScpLmNsaWNrKCkgLy8gc29ycnkhICBvbmx5IHdvcmtzIGluIHRpbGVzIG1vZGUgbm93Li4uXG5cblxuICAgIGlmICgheGVyKSB7XG4gICAgICBpZiAoISQoJy5pdGVtLWlhIC54ZXInKS5sZW5ndGgpIHtcbiAgICAgICAgLy8gbWFrZSBhbGwgaXRlbXMgZWRpdGFibGVcbiAgICAgICAgJCgnLml0ZW0taWEnKS5hZGRDbGFzcygncmVtb3ZhYmxlJykuYXBwZW5kKCc8ZGl2IG9uY2xpY2s9XCJBSlMubGlzdF9yZW1vdmVfaXRlbSh0aGlzKVwiIGNsYXNzPVwieGVyXCIgYWx0PVwicmVtb3ZlIHRoaXMgaXRlbSBmcm9tIGxpc3RcIiB0aXRsZT1cInJlbW92ZSB0aGlzIGl0ZW0gZnJvbSBsaXN0XCI+PC9kaXY+JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNhbmNlbCBlZGl0YWJpbGl0eVxuICAgICAgICAkKCcuaXRlbS1pYScpLnJlbW92ZUNsYXNzKCdyZW1vdmFibGUnKVxuICAgICAgICAkKCcuaXRlbS1pYSAueGVyJykucmVtb3ZlKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2luZ2xlIGl0ZW0gaXMgc2xhdGVkIGZvciB1dHRlciBkZXN0cnVjdGlvbiBmcm9tIHRoZSBsaXN0Li4uXG4gICAgICBjb25zdCAkaXRlbSA9ICQoeGVyKS5wYXJlbnRzKCcuaXRlbS1pYScpXG4gICAgICBjb25zdCBpZFggPSAkaXRlbS5hdHRyKCdkYXRhLWlkJylcbiAgICAgIGxldCB1cmwgPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyMuKiQvLCAnJykuY29uY2F0KCc/cmVtb3ZlX2l0ZW09JywgZW5jb2RlVVJJQ29tcG9uZW50KGlkWCkpXG4gICAgICAvLyBVc2UgdGhlIG1vc3QgcmVjZW50IHVwZGF0ZSBkYXRlIHRvIGhlbHAgdW5pcXVlbHkgaWRlbnRpZnkgdGhlIGl0ZW0hXG4gICAgICBpZiAoJGl0ZW0uYXR0cignZGF0YS1kYXRlJykpXG4gICAgICAgIHVybCArPSBgJmRhdGEtZGF0ZT0keyRpdGVtLmF0dHIoJ2RhdGEtZGF0ZScpfWBcbiAgICAgIGlmIChBSlMubGlzdGtpbmQpXG4gICAgICAgIHVybCArPSBgJmtpbmQ9JHtBSlMubGlzdGtpbmR9YFxuICAgICAgbG9nKCdHRVQnLCB1cmwpXG5cbiAgICAgICQuZ2V0KHVybCwgKGh0bSkgPT4ge1xuICAgICAgICBsb2coJ0dPVCcsIHVybClcbiAgICAgICAgbG9nKGh0bSlcbiAgICAgICAgJGl0ZW0ucmVtb3ZlKClcbiAgICAgICAgQUpTLnRpbGVyKClcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICAvLyByZW1vdmUgYW4gZWxlbWVudCBmcm9tIGEgc2VhcmNoIHJlc3VsdHMgcGFnZVxuICBzdGF0aWMgdW5tYW5hZ2UoeGVyKSB7XG4gICAgJCh4ZXIpLnBhcmVudCgnLml0ZW0taWEnKS5uZXh0KCkucmVtb3ZlKCkgLy8gcmVtb3ZlIGl0ZW0gbGlzdCBwb3J0aW9uXG4gICAgJCh4ZXIpLnBhcmVudCgnLml0ZW0taWEnKS5yZW1vdmUoKSAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gdGlsZSBwb3J0aW9uXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuXG4gIC8vIHN1Ym1pdHMgc2VhcmNoIHJlc3VsdHMgaXRlbXMgdG8gaXRlbSBtYW5hZ2VyIGZvciBpbnZva2luZyBvcGVyYXRpb25zIG9uIHRoZSBsaXN0XG4gIHN0YXRpYyBtYW5hZ2UoKSB7XG4gICAgLy8gZ2V0IGxpc3Qgb2YgYWxsIChyZW1haW5pbmcpIGlkZW50aWZpZXJzIGluIGEgc2VhcmNoIHJlc3VsdHMgcGFnZVxuICAgIGNvbnN0IGlkcyA9ICQoJy5pdGVtLWlhW2RhdGEtaWRdJykudG9BcnJheSgpLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgaWQgPSAkKGIpLmF0dHIoJ2RhdGEtaWQnKVxuICAgICAgaWYgKGlkID09PSAnX19tb2JpbGVfaGVhZGVyX18nKVxuICAgICAgICByZXR1cm4gYVxuICAgICAgcmV0dXJuIGEuY29uY2F0KGlkLCAnLCcpXG4gICAgfSwgJycpXG4gICAgbG9nKCdNQU5BR0UnLCBpZHMpXG5cbiAgICBpZiAoaWRzICE9PSAnJykge1xuICAgICAgLy8gbm93IG1ha2UgYSBmb3JtIHRoYXQgd2UgY2FuIFBPU1QgdG8sIHdpdGggYWxsIHRoZSBpZGVudGlmaWVycyxcbiAgICAgIC8vIGFuZCBwb3N0IHRvIC9tYW5hZ2UvIHBhZ2VcbiAgICAgIGNvbnN0ICRmb3JtID0gJChgXG4gICAgICAgIDxmb3JtIGlkPVwibWFuYWdlLWlkc1wiIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvbWFuYWdlL1wiXG4gICAgICAgICAgICAgIHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjFweDtoZWlnaHQ6MXB4O1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpZGVudGlmaWVyXCIgdmFsdWU9XCIke2lkc31cIi8+XG4gICAgICAgIDwvZm9ybT5gKVxuICAgICAgJCgnYm9keScpLmFwcGVuZCgkZm9ybSkgLy8gTk9URTogZmlyZWZveCBuZWVkcyBpdCBpbiBET00gdG8gc3VibWl0XG4gICAgICAkZm9ybS5zdWJtaXQoKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgc3RhdGljIGhlYWRfaW1nX2RyYWdkcm9wX3NldHVwKGlkZW50aWZpZXIpIHtcbiAgICBpZiAoQUpTLmhlYWRfaW1nX2RyYWdkcm9wX3NldHVwX2RvbmUpXG4gICAgICByZXR1cm5cbiAgICBsb2coJ2hlYWRfaW1nX2RyYWdkcm9wX3NldHVwJylcbiAgICBBSlMuaGVhZF9pbWdfZHJhZ2Ryb3Bfc2V0dXBfZG9uZSA9IHRydWVcblxuXG4gICAgJCgnI2ZpbGUtZHJvcHBlci13cmFwJykuYmluZCgnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgIGxvZygnZW50ZXInKVxuICAgICAgQUpTLmhlYWRfaW1nX3JlcGxhY2VhYmxlKGlkZW50aWZpZXIpXG4gICAgICAkKCcjZmlsZS1kcm9wcGVyJykuc2hvdygpXG4gICAgfSkuYmluZCgnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIGxvZygnb3VkZGllJylcbiAgICAgIGlmICghQUpTLmZpbGVfcGlja2VkKVxuICAgICAgICAkKCcjZmlsZS1kcm9wcGVyJykuaGlkZSgpXG4gICAgfSlcblxuICAgICQoJ2JvZHknKS5iaW5kKCdkcmFnb3ZlcicsIChldnQpID0+IHtcbiAgICAgIC8vIGVuYWJsZSBmaWxlIGRyb3BwaW5nXG4gICAgICBsb2coJ2RyYWdvdmVyJylcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgQUpTLmhlYWRfaW1nX3JlcGxhY2VhYmxlKGlkZW50aWZpZXIpXG4gICAgICAkKCcjZmlsZS1kcm9wcGVyJykuYWRkQ2xhc3MoJ2RyYWdfb3ZlcicpLnNob3coKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgICQoJ2JvZHknKS5iaW5kKCdkcmFnbGVhdmUnLCAoZXZ0KSA9PiB7XG4gICAgICBsb2coJ2RyYWdsZWF2ZScpXG5cbiAgICAgIC8vIGFyZSB3ZSBzdGlsbCBvdmVyIGEgZmlsZS1kcm9wcGVyIGRpdi9pbWc/XG4gICAgICBsZXQgb3ZlciA9ICgkKCcjZmlsZS1kcm9wcGVyLXdyYXAnKS5pcygnOmhvdmVyJykgfHxcbiAgICAgICAgICAgICAgICAgICQoJyNmaWxlLWRyb3BwZXIgICAgICcpLmlzKCc6aG92ZXInKSB8fFxuICAgICAgICAgICAgICAgICAgJCgnI2ZpbGUtZHJvcHBlci1pbWcgJykuaXMoJzpob3ZlcicpKVxuICAgICAgY29uc3QgeCA9IGV2dC5wYWdlWCB8fCBldnQub3JpZ2luYWxFdmVudC5wYWdlWFxuICAgICAgY29uc3QgeSA9IGV2dC5wYWdlWSB8fCBldnQub3JpZ2luYWxFdmVudC5wYWdlWVxuICAgICAgaWYgKCFvdmVyKSB7XG4gICAgICAgIGNvbnN0IGUgPSAkKCcjZmlsZS1kcm9wcGVyLXdyYXAnKVxuICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gZS5vZmZzZXQoKVxuICAgICAgICBpZiAoeCA+PSBsZWZ0ICAmJiAgeCA8PSBsZWZ0ICsgZS5vdXRlcldpZHRoKCkgICYmXG4gICAgICAgICAgICB5ID49IHRvcCAgICYmICB5IDw9IHRvcCAgKyBlLm91dGVySGVpZ2h0KCkpIHtcbiAgICAgICAgICAvLyBzdGlsbCBvdmVyIHRoZSBmaWxlIGRyb3AgdGFyZ2V0IGltYWdlIGFyZWEhXG4gICAgICAgICAgb3ZlciA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFvdmVyKSB7XG4gICAgICAgIGNvbnN0IGUgPSAkKCcjZmlsZS1kcm9wcGVyJylcbiAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AgfSA9IGUub2Zmc2V0KClcbiAgICAgICAgaWYgKHggPj0gbGVmdCAgJiYgIHggPD0gbGVmdCArIGUub3V0ZXJXaWR0aCgpICAmJlxuICAgICAgICAgICAgeSA+PSB0b3AgICAmJiAgeSA8PSB0b3AgICsgZS5vdXRlckhlaWdodCgpKSB7XG4gICAgICAgICAgLy8gc3RpbGwgb3ZlciB0aGUgZmlsZSBkcm9wIHRhcmdldCBpbWFnZSBhcmVhIVxuICAgICAgICAgIG92ZXIgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFvdmVyKVxuICAgICAgICAkKCcjZmlsZS1kcm9wcGVyJykucmVtb3ZlQ2xhc3MoJ2RyYWdfb3ZlcicpLmhpZGUoKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgaGVhZF9pbWdfcmVwbGFjZWFibGUoaWRlbnRpZmllcikge1xuICAgIC8vIGhlbHBmdWxzOlxuICAgIC8vICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3RcbiAgICAvLyAgaHR0cDovL3d3dy5zaXRlcG9pbnQuY29tL2h0bWw1LWFqYXgtZmlsZS11cGxvYWQvXG4gICAgaWYgKCQoJyNmaWxlLWRyb3BwZXInKS5odG1sKCkudHJpbSgpICE9PSAnJylcbiAgICAgIHJldHVyblxuXG4gICAgJCgnI2ZpbGUtZHJvcHBlcicpLnNob3coKS5odG1sKGBcbjxkaXY+XG48YnV0dG9uIGlkPVwiZmlsZS1jYW5jZWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgdGl0bGU9XCJjYW5jZWwgZmlsZSB1cGxvYWRcIiBhbHQ9XCJjYW5jZWwgZmlsZSB1cGxvYWRcIj5cbiAgJnRpbWVzO1xuPC9idXR0b24+XG48Yj5cbiAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6NDBweDsgY29sb3I6I2FhYVwiIGNsYXNzPVwiaWNvbm9jaGl2ZS1wbHVzLWNpcmNsZVwiIC8+XG48L2I+PGJyLz5cbjxiPlxuICBEcmFnICYgRHJvcCBhbiBpbWFnZSBmaWxlIGhlcmUgb3JcbjwvYj5cbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi14c1wiIG9uY2xpY2s9XCIkKCcjZmlsZS1zZWxlY3RvcicpLmNsaWNrKCk7XCI+XG4gIFBpY2sgaW1hZ2UgdG8gdXBsb2FkXG48L2J1dHRvbj5cbjxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvc2VydmljZXMvcG9zdC1maWxlLnBocD9zdWJtaXQ9MSZpZGVudGlmaWVyPSR7aWRlbnRpZmllcn1cIlxuICAgICAgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBpZD1cInBvc3RlclwiPlxuICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+XG4gICAgPGlucHV0IGlkPVwiZmlsZS1zZWxlY3RvclwiIG5hbWU9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIvPlxuICA8L2Rpdj5cbiAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRlbnRpZmllclwiIHZhbHVlPVwiJHtpZGVudGlmaWVyfVwiLz5cbiAgPGlucHV0IGlkPVwiZmlsZS1zdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiU1VCTUlUXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIi8+XG4gIDxkaXYgaWQ9XCJmaWxlLXVwbG9hZGluZ1wiPlxuICAgIFVwbG9hZGluZyB5b3VyIGZpbGUuLlxuICA8L2Rpdj5cbjwvZm9ybT5cbjwvZGl2PmApXG5cblxuICAgICQoJyNmaWxlLWNhbmNlbCcpLmJpbmQoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgQUpTLmNhbmNlbEZpbGUoKVxuXG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG5cbiAgICAkLmV2ZW50LnByb3BzLnB1c2goJ2RhdGFUcmFuc2ZlcicpIC8vIGlmIG5vdCBzZXQsIGRhdGFUcmFuc2ZlciBpcyBub3Qgc2VudFxuXG5cbiAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4ge1xuICAgICAgbG9nKCdzdWNjZXNzIScpXG4gICAgICAvLyBBSlMuY2FuY2VsRmlsZSgpXG4gICAgfVxuXG5cbiAgICAvLyB1cGxvYWQgYW4gaW1hZ2UgKHR5cGljYWxseSBhIGNvbGxlY3Rpb24vbGlzdCBoZWFkZXIgb3IgYWNjb3VudC9wZXJzb24gcHJvZmlsZSkgIHZpYSBTM1xuICAgIC8vIHJldHVybnMgJycgb24gc3VjY2VzczsgZWxzZSBzdHJpbmcgdy8gZXJyb3IvZmFpbCByZWFzb25cbiAgICBjb25zdCB1cGxvYWRGaWxlID0gKCkgPT4ge1xuICAgICAgbGV0IGZhaWwgPSBmYWxzZVxuXG4gICAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgZmFpbCA9ICdicm93c2VyIGFwcGVhcnMgdG8gbm90IGhhdmUgSFRNTDUgZnVuY3Rpb25hbGl0eSdcblxuICAgICAgaWYgKCFmYWlsKVxuICAgICAgICBmYWlsID0gQUpTLmJhZEZpbGUoKVxuXG5cbiAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgICBpZiAoIWZhaWwpIHtcbiAgICAgICAgbG9nKEFKUy5maWxlMnBvc3QpXG4gICAgICAgIGlmICgheGhyLnVwbG9hZClcbiAgICAgICAgICBmYWlsID0gJ2Jyb3dzZXIgc3VibWl0IHNldHVwIGZhaWxlZCdcbiAgICAgIH1cblxuICAgICAgaWYgKGZhaWwpXG4gICAgICAgIHJldHVybiBmYWlsXG5cblxuICAgICAgLy8gc3RhcnQgdXBsb2FkXG4gICAgICBsb2coJ3Bvc3QnKVxuICAgICAgLy8gaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgPiAwKSB4aHIudGltZW91dCA9IDEwICogNjAgKiAxMDAwOyAvLyAxMCBtaW5cbiAgICAgIHhoci5vcGVuKFxuICAgICAgICAnUE9TVCcsXG4gICAgICAgIGxvY2F0aW9uLnByb3RvY29sLmNvbmNhdChcbiAgICAgICAgICAnLy8nLCBsb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICcvc2VydmljZXMvcG9zdC1maWxlLnBocD9zdWJtaXQ9MSZpZGVudGlmaWVyPScsIGlkZW50aWZpZXIsXG4gICAgICAgICAgJyZmbmFtZT0nLCBlbmNvZGVVUklDb21wb25lbnQoQUpTLmZpbGUycG9zdC5uYW1lKSxcbiAgICAgICAgKSxcbiAgICAgICAgZmFsc2UsXG4gICAgICApIC8vIGJsb2NrIHN5bmNocm9ub3VzbHkgb24gdGhlIHBvc3QhXG4gICAgICAvLyBpZiAoIW9wdGlvbnMuc2VuZEJvdW5kYXJ5KSB4eHhcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgY2hhcnNldD1VVEYtOCcpXG4gICAgICB4aHIuc2VuZChBSlMuZmlsZTJwb3N0KVxuXG4gICAgICBjb25zdCByZXBseSA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgIGNvbnN0IG1hdCA9IHJlcGx5Lm1hdGNoKC9TVUNDRVNTIFxcKHRhc2tfaWQ9KFxcZCspXFwpLylcbiAgICAgIGlmIChtYXQgICYmICBtYXQubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tfaWQgPSBtYXRbMV1cbiAgICAgICAgbG9nKCdTVEFMS0lORyBUQVNLX0lEOiAnLCB0YXNrX2lkKVxuXG4gICAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5odG1sKCd3YWl0aW5nIGZvciB1cGRhdGVzLi4nKVxuICAgICAgICBsZXQgc3RhbGtlcl9wdHIgPSBmYWxzZVxuICAgICAgICBjb25zdCBzdGFsa2VyID0gKCkgPT4ge1xuICAgICAgICAgIGxvZygnU1RBTEtJTkcuLi4nKVxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogJy9jYXRhbG9nX3N0YXR1cy5waHA/d2hlcmU9dGFza19pZD0nLmNvbmNhdCh0YXNrX2lkLCAnJnJhbmQ9JywgTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgICBkYXRhVHlwZTogJ3htbCcsXG4gICAgICAgICAgICBzdWNjZXNzOiAoeG1sKSA9PiB7XG4gICAgICAgICAgICAgIGxvZyh4bWwpXG4gICAgICAgICAgICAgIGNvbnN0IHggPSB7XG4gICAgICAgICAgICAgICAgZ3JlZW46IHBhcnNlSW50KCQoeG1sKS5maW5kKCd3YWl0X2FkbWluMCcpLnRleHQoKSwgMTApIHx8IDAsXG4gICAgICAgICAgICAgICAgYmx1ZTogIHBhcnNlSW50KCQoeG1sKS5maW5kKCd3YWl0X2FkbWluMScpLnRleHQoKSwgMTApIHx8IDAsXG4gICAgICAgICAgICAgICAgcmVkOiAgIHBhcnNlSW50KCQoeG1sKS5maW5kKCd3YWl0X2FkbWluMicpLnRleHQoKSwgMTApIHx8IDAsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbG9nKHgpXG4gICAgICAgICAgICAgIGNvbnN0IG5XYWl0ID0geC5ncmVlbiArIHguYmx1ZSArIHgucmVkXG4gICAgICAgICAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5odG1sKGB3YWl0aW5nIGZvciAke25XYWl0fSB0YXNrcyB0byBydW5gKVxuICAgICAgICAgICAgICBpZiAoIW5XYWl0KSB7XG4gICAgICAgICAgICAgICAgbG9nKCd0YXNrKHMpIGRvbmUhJylcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHN0YWxrZXJfcHRyKVxuICAgICAgICAgICAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5odG1sKCdyZWxvYWRpbmcgcGFnZSB3aXRoIHlvdXIgaW1hZ2UnKVxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmIC8vIHJlYWR5ISByZWxvYWQgdGhlIHBhZ2UhXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoeC5yZWQpIHtcbiAgICAgICAgICAgICAgICAkKCcjZmlsZS1kcm9wcGVyJykuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPnN0YXR1cyB0YXNrIGZhaWx1cmUgLS0gYW4gYWRtaW4gd2lsbCBuZWVkIHRvIHJlc29sdmU8L2Rpdj4nKVxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhbGtlcl9wdHIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGV2ZXJ5IDIgc2Vjb25kcywgY2hlY2sgZm9yIHN0YXR1c1xuICAgICAgICBzdGFsa2VyX3B0ciA9IHNldEludGVydmFsKHN0YWxrZXIsIDIwMDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2cocmVwbHkpXG4gICAgICB9XG5cbiAgICAgIGxvZygncG9zdCBkb25lJylcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuXG4gICAgJCgnI2ZpbGUtc2VsZWN0b3InKS5iaW5kKCdjbGljaycsICgpID0+IHtcbiAgICAgIEFKUy5maWxlX3BpY2tlZCA9ICdzZWxlY3RlZCdcbiAgICB9KS5iaW5kKCdjaGFuZ2UnLCAoZXZ0KSA9PiB7XG4gICAgICBsb2coJ2ZpbGUgZHJvcGRvd24gc2VsZWN0ZWQhJylcbiAgICAgICQoJyNmaWxlLXN1Ym1pdCwgI2ZpbGUtY2FuY2VsJykuc2hvdygpXG4gICAgICBsb2coZXZ0KVxuICAgICAgaWYgKGV2dC50YXJnZXQgICYmICBldnQudGFyZ2V0LmZpbGVzICAmJiAgZXZ0LnRhcmdldC5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgW0FKUy5maWxlMnBvc3RdID0gZXZ0LnRhcmdldC5maWxlc1xuICAgICAgICBBSlMucHJldmlld0ZpbGUoKVxuICAgICAgfVxuICAgIH0pXG5cblxuICAgICQoJyNmaWxlLWRyb3BwZXInKS5iaW5kKCdkcm9wJywgKGV2dCkgPT4ge1xuICAgICAgLy8gd2UndmUgYmVlbiBkcm9wcGVkIGEgZmlsZSAoZnJvbSBhIGRyYWctYW5kLWRyb3ApIVxuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBsb2coZXZ0LmRhdGFUcmFuc2Zlci5maWxlcylcbiAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5yZW1vdmVDbGFzcygnZHJhZ19vdmVyJylcblxuICAgICAgJCgnI2ZpbGUtc3VibWl0LCAjZmlsZS1jYW5jZWwnKS5zaG93KClcblxuXG4gICAgICBpZiAoZXZ0LmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgQUpTLmZpbGVfcGlja2VkID0gJ2Ryb3BwZWQnO1xuICAgICAgICBbQUpTLmZpbGUycG9zdF0gPSBldnQuZGF0YVRyYW5zZmVyLmZpbGVzXG4gICAgICAgIEFKUy5wcmV2aWV3RmlsZSgpXG4gICAgICB9XG4gICAgfSlcblxuXG4gICAgJCgnI3Bvc3RlcicpLmJpbmQoJ2ZvY3VzaW4nLCAoZXZ0KSA9PiB7XG4gICAgICBsb2coZXZ0LnR5cGUpXG4gICAgICAkKCcjZmlsZS11cGxvYWRpbmcnKS5zaG93KClcbiAgICB9KS5iaW5kKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgICBsb2coJ3N1Ym1pdCEnKVxuICAgICAgJCgnI2ZpbGUtdXBsb2FkaW5nJykuc2hvdygpXG5cbiAgICAgIC8vIEZpcnN0IHRyeSB0aGUgc2NobWFuY3kgSFRNTDUgc3VibWl0IHZpYSBYTUxIdHRwUmVxdWVzdCBhbmQgRmlsZVJlYWRlci5cbiAgICAgIC8vIElmIHdlIGZhaWwsIHdlJ2xsIGZhbGxiYWNrIHRvIGZvcm0gc3VibWl0IG5vcm1hbCBhY3Rpb24uXG4gICAgICBjb25zdCBmYWlsID0gdXBsb2FkRmlsZSgpXG4gICAgICBpZiAoZmFpbCA9PT0gJycpIHtcbiAgICAgICAgLy8gU1VDQ0VTUyEgIHdlIGFyZSBkb25lIVxuICAgICAgICBzdWNjZXNzKClcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoQUpTLmZpbGVfcGlja2VkID09PSAnZHJvcHBlZCcpIHtcbiAgICAgICAgLy8gd2UgaGFkIGNsaWVudCBkcmFnLW4tZHJvcCB0aGUgZmlsZSAtLSB3ZSBjYW4ndCBwb3N0IGl0IVxuICAgICAgICAvLyBlcGljIGZhaWwuLi5cbiAgICAgICAgQUpTLmNhbmNlbEZpbGUoKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLWFsZXJ0XG4gICAgICAgIGFsZXJ0KGBGYWlsdXJlOiAke2ZhaWx9YClcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBPSyBmYWxsYmFjayB0byBub3JtYWwgKHNlbGVjdGVkKSBmaWxlIHN1Ym1pdCAoYW5kIGZ1bGwgcGFnZSByZWxvYWQpIVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuXG5cbiAgICAvLyBub3cgY2VudGVyIGZpbGUtZHJvcHBlciBvdmVyIGN1cnJlbnQgaW1hZ2VcbiAgICBjb25zdCB3MSA9ICQoJyNmaWxlLWRyb3BwZXItaW1nJykub3V0ZXJXaWR0aCgpXG4gICAgY29uc3QgaDEgPSAkKCcjZmlsZS1kcm9wcGVyLWltZycpLm91dGVySGVpZ2h0KClcbiAgICBjb25zdCB3MiA9ICQoJyNmaWxlLWRyb3BwZXInKS5vdXRlcldpZHRoKClcbiAgICBjb25zdCBoMiA9ICQoJyNmaWxlLWRyb3BwZXInKS5vdXRlckhlaWdodCgpXG4gICAgJCgnI2ZpbGUtZHJvcHBlcicpLmNzcyh7XG4gICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh3MSAtIHcyKSAvIDIpLFxuICAgICAgdG9wOiAgTWF0aC5yb3VuZCgoaDEgLSBoMikgLyAyKSxcbiAgICB9KVxuXG4gICAgaWYgKEFKUy5pb3MpIHtcbiAgICAgICQoJyNmaWxlLWRyb3BwZXIgPiBmb3JtID4gZGl2LmhpZGRlbicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgICAgJCgnI2ZpbGUtZHJvcHBlciA+IGJ1dHRvbicpLmFkZENsYXNzKCdoaWRkZW4nKVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gY2xpZW50LXNpZGUgcHJldmlldyB0aGUgaW1hZ2UgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIhICB4eHggY2F0Y2ggZXhjZXB0aW9ucywgZXRjLlxuICBzdGF0aWMgcHJldmlld0ZpbGUoKSB7XG4gICAgJCgnI2ZpbGUtZHJvcHBlciAudXBwcmV2aWV3JykucmVtb3ZlKCkgLy8gcmVtb3ZlIGFueSBwcmlvciB1cGxvYWQvcHJldmlld1xuXG4gICAgaWYgKEFKUy5iYWRGaWxlKCkpIHtcbiAgICAgIEFKUy5jYW5jZWxGaWxlKClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRmlsZVJlYWRlciA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIub25sb2FkID0gKGV2dCkgPT4ge1xuICAgICAgbG9nKGV2dC50YXJnZXQpXG4gICAgICBjb25zdCBpbSA9IG5ldyBJbWFnZSgpXG4gICAgICBpbS5zcmMgPSBldnQudGFyZ2V0LnJlc3VsdFxuICAgICAgJCgnI2ZpbGUtZHJvcHBlcicpLmFwcGVuZChpbSlcbiAgICAgICQoaW0pLmFkZENsYXNzKCd1cHByZXZpZXcnKVxuICAgICAgLy8gJCgnI2ZpbGUtZHJvcHBlcicpLmNzcyhcbiAgICAgIC8vICAgICAgeydiYWNrZ3JvdW5kJzondXJsKCcgKyBldnQudGFyZ2V0LnJlc3VsdCArICcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJ30pXG4gICAgfVxuXG4gICAgbG9nKEFKUy5maWxlMnBvc3QpXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoQUpTLmZpbGUycG9zdClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cblxuICBzdGF0aWMgY2FuY2VsRmlsZSgpIHtcbiAgICAkKCcjZmlsZS1kcm9wcGVyIC51cHByZXZpZXcnKS5yZW1vdmUoKSAvLyByZW1vdmUgYW55IHByaW9yIHVwbG9hZC9wcmV2aWV3XG4gICAgJCgnI2ZpbGUtZHJvcHBlciwgZmlsZS1zdWJtaXQsICNmaWxlLWNhbmNlbCwgI2ZpbGUtdXBsb2FkaW5nJykuaGlkZSgpXG4gICAgaWYgKEFKUy5maWxlX3BpY2tlZClcbiAgICAgIGRlbGV0ZSBBSlMuZmlsZV9waWNrZWRcbiAgICBpZiAoQUpTLmZpbGUycG9zdClcbiAgICAgIGRlbGV0ZSBBSlMuZmlsZTJwb3N0XG4gIH1cblxuXG4gIHN0YXRpYyBiYWRGaWxlKCkge1xuICAgIGxldCBmYWlsID0gZmFsc2VcblxuICAgIGlmICghZmFpbCAgJiYgICFBSlMuZmlsZTJwb3N0KVxuICAgICAgZmFpbCA9ICdmaWxlIGlzIG1pc3NpbmcnXG5cbiAgICAvLyBwaHAgdXBsb2FkX21heF9maWxlc2l6ZSBpcyA4TVxuICAgIGlmICghZmFpbCAgJiYgIEFKUy5maWxlMnBvc3Quc2l6ZSA+IDgwMDAwMDApXG4gICAgICBmYWlsID0gJ2ZpbGUgaXMgb3ZlciA4TUIgaW4gc2l6ZSdcblxuICAgIGlmICghZmFpbCkge1xuICAgICAgY29uc3QgdHlwZSA9IEFKUy5maWxlMnBvc3QudHlwZS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAodHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmIHR5cGUgIT09ICdpbWFnZS9wbmcnICYmIHR5cGUgIT09ICdpbWFnZS9naWYnKVxuICAgICAgICBmYWlsID0gJ2ZpbGUgbm90IHJlcXVpcmVkIGZvcm1hdCBvZiBKUEVHIG9yIFBORyBvciBHSUYnXG4gICAgfVxuXG4gICAgaWYgKGZhaWwpXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLWFsZXJ0XG4gICAgICBhbGVydChmYWlsKVxuXG4gICAgcmV0dXJuIGZhaWxcbiAgfVxuXG5cbiAgLy8gZm9yIG1pY3JvZmlsbSBib29rcyB3aXRoIG1hbnkgbW9udGhzIG9mIG5ld3NwYXBlcnMgaW4gUERGXG4gIC8vICAgZWc6IC9kZXRhaWxzL2xhX2NhbGVhZ2xlX3JlZWwxXG4gIC8vXG4gIC8vIHBhZ2luZm8gaXMgYSBsb2dpY2FsIGhhc2htYXAgSlNPTiBvYmplY3Qgb2Y6XG4gIC8vICAgWVlZWU1NREQgPT4gW2NvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHBhZ2VzXVxuICAvLyBlZzpcbiAgLy8gICAyMDA4MDEyOSA9PiAgXCIxLDIsMywxMSwxN1wiXG4gIHN0YXRpYyBkcmF3UERGKGlkZW50aWZpZXIsIHBhZ2VpbmZvKSB7XG4gICAgY29uc3QgdXJsc3RhcnQgPSAnL2Rvd25sb2FkLycuY29uY2F0KFxuICAgICAgaWRlbnRpZmllciwgJy8nLFxuICAgICAgaWRlbnRpZmllciwgJ19wZGYuemlwLycsXG4gICAgICBpZGVudGlmaWVyLCAnX3BkZi8nLCBpZGVudGlmaWVyLCAnXycsXG4gICAgKVxuICAgIGxldCBtdWx0aV95ZWFyID0gZmFsc2VcbiAgICBsZXQgbGFzdF95ZWFyICA9IGZhbHNlXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIGd1YXJkLWZvci1pblxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhZ2VpbmZvKSB7XG4gICAgICBjb25zdCB5ZWFyID0ga2V5LnN1YnN0cigwLCA0KVxuICAgICAgaWYgKGxhc3RfeWVhciA9PT0gZmFsc2UpIGxhc3RfeWVhciA9IHllYXJcbiAgICAgIGlmIChsYXN0X3llYXIgIT09IHllYXIpIHtcbiAgICAgICAgbXVsdGlfeWVhciA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXAgPSAnJ1xuICAgIGxldCBzdHIgPSBzZXBcbiAgICBsZXQgbGFzdHllYXJtb250aCA9IDY2NlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgZ3VhcmQtZm9yLWluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFnZWluZm8pIHtcbiAgICAgIC8vIGxvZyhrZXkpOyBsb2cocGFnZWluZm9ba2V5XSk7XG4gICAgICBjb25zdCBwYWdlcyAgICAgPSBwYWdlaW5mb1trZXldLnNwbGl0KCcsJylcbiAgICAgIGNvbnN0IHllYXIgICAgICA9IGtleS5zdWJzdHIoMCwgNClcbiAgICAgIGNvbnN0IG1vbnRoICAgICA9IHBhcnNlSW50KGtleS5zdWJzdHIoNCwgMiksIDEwKVxuICAgICAgY29uc3QgZGF5ICAgICAgID0gcGFyc2VJbnQoa2V5LnN1YnN0cig2LCAyKSwgMTApXG4gICAgICBjb25zdCB5ZWFybW9udGggPSB5ZWFyLmNvbmNhdCgnLScsIG1vbnRoKVxuICAgICAgbGV0IHNraXBfZGF5ID0gZmFsc2VcblxuICAgICAgbGV0IG1vbnRoTmFtZSA9ICcnXG4gICAgICBpZiAoeWVhcm1vbnRoICE9PSBsYXN0eWVhcm1vbnRoKSB7XG4gICAgICAgIC8qKi8gaWYgKG1vbnRoID09PSAgMSkgICAgICAgIG1vbnRoTmFtZSA9ICdKYW51YXJ5J1xuICAgICAgICBlbHNlIGlmIChtb250aCA9PT0gIDIpICAgICAgICBtb250aE5hbWUgPSAnRmVicnVhcnknXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAgMykgICAgICAgIG1vbnRoTmFtZSA9ICdNYXJjaCdcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT09ICA0KSAgICAgICAgbW9udGhOYW1lID0gJ0FwcmlsJ1xuICAgICAgICBlbHNlIGlmIChtb250aCA9PT0gIDUpICAgICAgICBtb250aE5hbWUgPSAnTWF5J1xuICAgICAgICBlbHNlIGlmIChtb250aCA9PT0gIDYpICAgICAgICBtb250aE5hbWUgPSAnSnVuZSdcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT09ICA3KSAgICAgICAgbW9udGhOYW1lID0gJ0p1bHknXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAgOCkgICAgICAgIG1vbnRoTmFtZSA9ICdBdWd1c3QnXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAgOSkgICAgICAgIG1vbnRoTmFtZSA9ICdTZXB0ZW1iZXInXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAxMCkgICAgICAgIG1vbnRoTmFtZSA9ICdPY3RvYmVyJ1xuICAgICAgICBlbHNlIGlmIChtb250aCA9PT0gMTEpICAgICAgICBtb250aE5hbWUgPSAnTm92ZW1iZXInXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAxMikgICAgICAgIG1vbnRoTmFtZSA9ICdEZWNlbWJlcidcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT09IHVuZGVmaW5lZCkgbW9udGhOYW1lID0gJ1NpbmdsZSBQYWdlIFBERnMnXG4gICAgICAgIGVsc2UgLyogICAgICAgICAgICAgKi8gICAgICAgIG1vbnRoTmFtZSA9ICdVbmtub3duXycuY29uY2F0KG1vbnRoKVxuXG4gICAgICAgIGlmIChtdWx0aV95ZWFyKSBtb250aE5hbWUgPSB5ZWFyLmNvbmNhdCgnICcsIG1vbnRoTmFtZSlcblxuICAgICAgICAvLyBtYWtlIGhlYWRlci9hIHRoYXQgc2hvd3MvaGlkZXMgYSBoaWRkZW4gZGl2IGFmdGVyIGl0IHdpdGggdGhlIG1vbnRoJ3MgZGF0YVxuICAgICAgICBzdHIgKz0gKHN0ciA/ICc8L2Rpdj48IS0tbW8tLT48YnIvPicgOiAnJylcbiAgICAgICAgc3RyICs9IGBcbjxhIGhyZWY9XCIjJHttb250aE5hbWV9LCR7eWVhcn1cIiBvbmNsaWNrPVwiJCgnI20ke3llYXJtb250aH0nKS50b2dnbGUoKTsgcmV0dXJuIGZhbHNlXCI+XG48c3BhbiBjbGFzcz1cImljb25vY2hpdmUtZm9sZGVyXCIgLz4gJHttb250aE5hbWV9XG48L2E+XG48ZGl2IGNsYXNzPVwibW9cIiBpZD1cIm0ke3llYXJtb250aH1cIj5gXG4gICAgICB9XG5cbiAgICAgIC8vIG1ha2UgaGVhZGVyL2EgdGhhdCBzaG93cy9oaWRlcyBhIGhpZGRlbiBkaXYgYWZ0ZXIgaXQgd2l0aCB0aGUgcGFnZSBkYXRhXG4gICAgICBpZiAoKGRheSA9PT0gdW5kZWZpbmVkKSB8fCAoZGF5ID09PSAnJykpIHNraXBfZGF5ID0gdHJ1ZVxuICAgICAgaWYgKHNraXBfZGF5KSB7XG4gICAgICAgIHN0ciArPSAnPGRpdiBjbGFzcz1cImRheVwiPidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciArPSBgXG48ZGl2IGNsYXNzPVwiZGF5XCI+XG48YSBocmVmPVwiIyR7eWVhcm1vbnRofS0ke2RheX1cIlxuICAgIG9uY2xpY2s9XCIkKCcjbSR7eWVhcm1vbnRofWQke2RheX0nKS50b2dnbGUoKTtyZXR1cm4gZmFsc2U7XCI+XG4gIDxzcGFuIGNsYXNzPVwiaWNvbm9jaGl2ZS1mb2xkZXJcIiAvPiAke2RheX1cbjwvYT5cbjxkaXYgY2xhc3M9XCJwYWdlc1wiIGlkPVwibSR7eWVhcm1vbnRofWQke2RheX1cIj5gXG4gICAgICB9XG5cbiAgICAgIC8vIGRyb3AgaW4gdGhlIGluZGl2aWR1YWwgcGFnZSBsaW5rc1xuICAgICAgbGV0IG9mZnNldCA9IDFcbiAgICAgIGxldCBwYWdlXG4gICAgICBsZXQgcG51bVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwYWdlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYWdlID0gcGFnZXNbal1cbiAgICAgICAgaWYgKCFwYWdlKVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tY29udGludWVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICBpZiAob2Zmc2V0ID4gMCkgb2Zmc2V0ID0gMSAtIHBhZ2VcbiAgICAgICAgcG51bSA9IHBhcnNlSW50KHBhZ2UsIDEwKSArIG9mZnNldFxuXG4gICAgICAgIC8vIGxlZnQgMC1wYWQgdG8gNCBkaWdpdHMgYXMgbmVlZGVkXG4gICAgICAgIHBhZ2UgPSAnMDAwMCcuY29uY2F0KHBhZ2UpXG4gICAgICAgIHBhZ2UgPSBwYWdlLnN1YnN0cihwYWdlLmxlbmd0aCAtIDQsIDQpXG5cbiAgICAgICAgY29uc3QgdXJsID0gdXJsc3RhcnQuY29uY2F0KHBhZ2UsICcucGRmJylcbiAgICAgICAgc3RyICs9IGA8YSBocmVmPVwiJHt1cmx9XCI+WyR7cG51bX1dPC9hPiBgXG4gICAgICB9XG5cbiAgICAgIGlmIChza2lwX2RheSlcbiAgICAgICAgc3RyICs9ICc8L2Rpdj4nXG4gICAgICBlbHNlXG4gICAgICAgIHN0ciArPSAnPC9kaXY+PCEtLXBhZ2VzLS0+PC9kaXY+PCEtLWRheS0tPidcblxuICAgICAgbGFzdHllYXJtb250aCA9IHllYXJtb250aFxuICAgIH1cblxuICAgIHN0ciArPSAnPC9kaXY+PCEtLW1vLS0+J1xuXG4gICAgLy8gcmVwbGFjZSB0aGUgXCJwZGZzXCIgZW1wdHkgZGl2IHdpdGggb3VyIGhlZnR5IEhUTUxcbiAgICAkKCcjcGRmcyAucmVwbGFjZWQnKS5odG1sKHN0cilcbiAgfVxuXG5cbiAgLy8gZm9yIGNvbGxlY3Rpb24gcGFnZXMsIFtBYm91dF0gdGFiXG4gIHN0YXRpYyBncmFmcygpIHtcbiAgICBjb25zdCAkZ3JhZnMxID0gJCgnI2dyYWZzMScpXG4gICAgY29uc3QgJGdyYWZzMiA9ICQoJyNncmFmczInKVxuICAgIGlmICghJGdyYWZzMS5sZW5ndGgpXG4gICAgICByZXR1cm5cbiAgICBpZiAodHlwZW9mICRncmFmczEuYXR0cignZGF0YS1pZCcpID09PSAndW5kZWZpbmVkJylcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgaWRlbnRpZmllciA9ICRncmFmczEuYXR0cignZGF0YS1pZCcpXG4gICAgJGdyYWZzMS5hdHRyKCdkYXRhLWlkJywgbnVsbClcblxuICAgIGxvZygnbG9hZGluZyBncmFmcycpXG4gICAgJGdyYWZzMS5odG1sKCc8aT48c21hbGw+bG9hZGluZyBncmFwaCA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZy5naWZcIi8+PC9zbWFsbD48L2k+Jykuc2hvdygpXG4gICAgJGdyYWZzMi5odG1sKCc8aT48c21hbGw+bG9hZGluZyBncmFwaCA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZy5naWZcIi8+PC9zbWFsbD48L2k+Jykuc2hvdygpXG4gICAgY29uc3QgdG9rID0gJzxoMj4nXG4gICAgJC5nZXQoJy9kZXRhaWxzLycuY29uY2F0KGlkZW50aWZpZXIsICcmZ3JhZnM9MSZ2PTMnKSwgKGh0bSkgPT4ge1xuICAgICAgY29uc3QgYSA9IGh0bS5zcGxpdCh0b2spXG4gICAgICBpZiAoYS5sZW5ndGggPj0gMykge1xuICAgICAgICAkKCcjYWN0aXZpdHktcmV2aWV3c04nKS5odG1sKGFbMV0pLnBhcmVudHMoJy5hY3Rpdml0eS1ib3gnKS5zaG93KClcbiAgICAgICAgJCgnI2FjdGl2aXR5LWZvcnVtTiAgJykuaHRtbChhWzJdKS5wYXJlbnRzKCcuYWN0aXZpdHktYm94Jykuc2hvdygpXG4gICAgICB9XG4gICAgICBpZiAoYS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgJGdyYWZzMS5odG1sKHRvayArIGFbM10pXG4gICAgICAgICRncmFmczIuaHRtbCh0b2sgKyBhWzRdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGdyYWZzMS5odG1sKCcoZ3JhcGggZGF0YSBub3QgYXZhaWxhYmxlKScpXG4gICAgICAgICRncmFmczIuaHRtbCgnKGdyYXBoIGRhdGEgbm90IGF2YWlsYWJsZSknKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBBSlMuc2V0VXBUb3BSZWdpb25zVGFibGUoKVxuICB9XG5cblxuICBzdGF0aWMgcXVpY2tfZG93bihpZCwgdGFyZ2V0KSB7XG4gICAgY29uc3QgaWRzZWwgPSBgIyR7aWR9YFxuXG4gICAgaWYgKCEkKCcuZm9ybWF0LWdyb3VwLmluJykubGVuZ3RoKSB7XG4gICAgICAvLyBubyBzZXQgb2YgZmlsZXMgZm9yIGEgc2luZ2xlIGZvcm1hdCBzaG93aW5nLi4uIHlldCFcbiAgICAgIGNvbnN0IGZvcm1hdCA9ICQodGFyZ2V0KS50ZXh0KClcbiAgICAgIGNvbnN0ICRmb3JtYXRHcm91cCA9ICQoaWRzZWwpLnBhcmVudHMoJy5mb3JtYXQtZ3JvdXAnKVxuXG4gICAgICAkKCcuZG93bmxvYWQtYnV0dG9uJykuaHRtbChmb3JtYXQuY29uY2F0KCcgRklMRVMnKSlcbiAgICAgICRmb3JtYXRHcm91cC5hZGRDbGFzcygnaW4nKVxuICAgICAgLy8gaGlkZSB0aGUgb3RoZXIgc3VtbWFyeSBmb3JtYXRzIChvbmUtbGluZXIpIGNsaWNrYWJsZXNcbiAgICAgICQoJy5mb3JtYXQtZ3JvdXA6bm90KC5pbiknKS5zbGlkZVVwKClcbiAgICAgICQoaWRzZWwpLnNsaWRlRG93bigpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJlLW9wZW4gYWxsIHRoZSBzdW1tYXJ5IGZvcm1hdHMgKG9uZS1saW5lcikgY2xpY2thYmxlc1xuICAgICAgJCgnLmZvcm1hdC1ncm91cCcpLnNsaWRlRG93big0MDApXG4gICAgICAvLyBjbG9zZSB0aGUgb3BlbiBzZXQgb2Ygc2luZ2xlIGZpbGVzXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gZnR3LCB0aHggZm9yIG5vdGhpbmcganF1ZXJ5XG4gICAgICAgICQoJy5mb3JtYXQtZ3JvdXAuaW4nKS5yZW1vdmVDbGFzcygnaW4nKVxuICAgICAgICAkKCcuZG93bmxvYWQtYnV0dG9uJykuaHRtbCgnRE9XTkxPQUQgT1BUSU9OUycpXG4gICAgICB9LCA0MDApXG4gICAgICAkKGlkc2VsKS5zbGlkZVVwKClcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgLy8gcGFyc2UgYSBDR0kgYXJnXG4gIHN0YXRpYyBhcmcodGhlQXJnTmFtZSwgdHJ5X2Z1bGwpIHtcbiAgICBjb25zdCBzQXJncyA9ICh0cnlfZnVsbCAgJiYgIGxvY2F0aW9uLnNlYXJjaCA9PT0gJycgP1xuICAgICAgbG9jYXRpb24uaHJlZi5zbGljZSgxKS5zcGxpdCgnJicpIDpcbiAgICAgIGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc0FyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzQXJnc1tpXS5zbGljZSgwLCBzQXJnc1tpXS5pbmRleE9mKCc9JykpID09PSB0aGVBcmdOYW1lKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzQXJnc1tpXS5zbGljZShzQXJnc1tpXS5pbmRleE9mKCc9JykgKyAxKVxuICAgICAgICByZXR1cm4gKHIubGVuZ3RoID4gMCA/IHVuZXNjYXBlKHIpLnNwbGl0KCcsJykgOiAnJylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBzZXR1cCB0cmlnZ2VyIG9uIDEvMiBzZWNvbmQgb2YgaG92ZXJpbmcgb3ZlciB0aGUgbmF2IElBIGxvZ29cbiAgc3RhdGljIGxvZ29UZXh0KCkge1xuICAgIGNvbnN0IGhpZGVMb2dvVGV4dCA9ICgpID0+IHtcbiAgICAgICQoJyNpbnRlcm5ldC1hcmNoaXZlJykuZmFkZU91dCgnc2xvdycsICgpID0+IHtcbiAgICAgICAgJCgnI2ludGVybmV0LWFyY2hpdmUnKS5yZW1vdmUoKVxuICAgICAgICAkKCcjZXhpdC1lcicpLnNob3coKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgbW91c2V0aW1lciA9IGZhbHNlXG5cbiAgICAvLyBheHh4IG1ha2Ugc3VyZSB3aGVuIGl0IG9wZW5zIG9uIFRBQiwgdGhlIGFib3V0IGxpIGlzIGluIHRoZSBET00gKm5leHQqXG4gICAgJCgnLm5hdmJhci1uYXY6Zmlyc3QnKS5vbignbW91c2VlbnRlciBmb2N1c2luJywgKGV2dCkgPT4ge1xuICAgICAgLy8gT25seSBwcm9jZWVkIGlmIHVzZXIgaXMgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbG9nbyBlbGVtZW50cy5cbiAgICAgIGlmICghJChldnQudGFyZ2V0KS5pcygndWwsIC5uYXZiYXItYnJhbmQsIC5pY29ub2NoaXZlLWxvZ28sIC5sb2dvLXRleHQtaGlkZXInKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIG1vdXNldGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCQoJyNpbnRlcm5ldC1hcmNoaXZlJykubGVuZ3RoKSB7XG4gICAgICAgICAgaGlkZUxvZ29UZXh0KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICQoJyNleGl0LWVyJykuaGlkZSgpIC8vIChnZXRzIGluIHRoZSB3YXkgb2YgeHMvbW9iaWxlISlcbiAgICAgICAgLy8gZmxhbmsgdGhlIElBIGxvZ28hXG4gICAgICAgICQoJy5uYXZiYXItbmF2OmZpcnN0JykucHJlcGVuZCgkKGBcbjxkaXYgaWQ9XCJpbnRlcm5ldC1hcmNoaXZlXCIgY2xhc3M9XCJoaWRkZW4teHMgbG9nby10ZXh0LWhpZGVyXCJcbiAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjEwcHg7IHdpZHRoOjEwMCU7IHRleHQtYWxpZ246Y2VudGVyO1wiPlxuPGRpdiBjbGFzcz1cInRvcGluYmxvY2sgbG9nby10ZXh0LWhpZGVyXCIgc3R5bGU9XCJ3aWR0aDoxMDBweDsgcGFkZGluZy1sZWZ0OjEwcHg7XCI+XG4gIDxkaXYgY2xhc3M9XCJsb2dvLXRleHQtaGlkZXJcIlxuICAgICAgc3R5bGU9XCJkaXNwbGF5Om5vbmU7IHdpZHRoOjg1cHg7IGhlaWdodDozMHB4OyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IC0zNXB4IHRvcCBuby1yZXBlYXQgdXJsKC9pbWFnZXMvZm9vdGVyLnBuZylcIiAvPlxuPC9kaXY+PGRpdiBjbGFzcz1cInRvcGluYmxvY2sgbG9nby10ZXh0LWhpZGVyXCIgc3R5bGU9XCJ3aWR0aDozNXB4O2hlaWdodDoxcHg7XCIgLz48ZGl2IGNsYXNzPVwidG9waW5ibG9jayBsb2dvLXRleHQtaGlkZXJcIiBzdHlsZT1cIndpZHRoOjEwMHB4O1wiPlxuICA8ZGl2IGNsYXNzPVwibG9nby10ZXh0LWhpZGVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7IHdpZHRoOjg1cHg7IGhlaWdodDozMHB4OyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IC0xMTZweCB0b3Agbm8tcmVwZWF0IHVybCgvaW1hZ2VzL2Zvb3Rlci5wbmcpXCIgLz5cbjwvZGl2PlxuPC9kaXY+YCkpXG5cbiAgICAgICAgLy8gYm90aCBvZiB0aGUgYWJvdmUgZGl2cyBhcmUgaGlkZGVuLiAgbm93IGZhZGUgdGhlbSBpblxuICAgICAgICAkKCcjaW50ZXJuZXQtYXJjaGl2ZSA+IGRpdiA+IGRpdicpLmZhZGVJbignc2xvdycpXG4gICAgICB9LCAxMDAwKVxuICAgIH0pLm1vdXNlbGVhdmUoKCkgPT4ge1xuICAgICAgaWYgKG1vdXNldGltZXIpIGNsZWFyVGltZW91dChtb3VzZXRpbWVyKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2Nyb2xsZWQoKSB7XG4gICAgY29uc3QgbmV3dG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG4gICAgLy8gbG9nKCdzY3JvbGxlZCB0byAnLCBuZXd0b3ApXG5cbiAgICBjb25zdCBzZWxlY3RvciA9ICcubW9yZV9zZWFyY2g6dmlzaWJsZSdcbiAgICBjb25zdCAkZSA9ICQoc2VsZWN0b3IpXG4gICAgaWYgKCEkZS5sZW5ndGgpXG4gICAgICByZXR1cm5cblxuICAgIC8vIG1ha2UgdGhlIGVkZ2UgZGV0ZWN0IGZvciBcImhpdCBib3R0b21cIiA0MCBwaXhlbHMgZnJvbSB0aGUgYm90dG9tXG4gICAgY29uc3QgY2hlY2sgPSAoKCRlLm9mZnNldCgpLnRvcCArICRlLm91dGVySGVpZ2h0KCkpIC0gJCh3aW5kb3cpLmhlaWdodCgpKSAtIDQwXG4gICAgLy8gbG9nKCctdi0gY2hlY2snLCBjaGVjaylcbiAgICBpZiAobmV3dG9wID4gY2hlY2spIHtcbiAgICAgIGxvZygnaGl0IHJvY2sgYm90dG9tID4gJywgY2hlY2spXG4gICAgICBpZiAoIUFKUy5tb3JlX3NlYXJjaGluZylcbiAgICAgICAgJChzZWxlY3Rvci5jb25jYXQoJyA+IGEnKSkuY2xpY2soKVxuICAgIH1cbiAgfVxuXG5cbiAgc3RhdGljIG1vcmVfc2VhcmNoKGxuaywgdXJsSW4sIHBhZ2Vfbm93KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBBSlMuc2VsZWN0b3IoKVxuICAgIGlmIChzZWxlY3RvciA9PT0gZmFsc2UpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IGlraW5kID0gc2VsZWN0b3IucmVwbGFjZSgvI2lraW5kLS8sICcnKVxuXG4gICAgY29uc3QgJG1vcmVfc2VhcmNoID0gJChzZWxlY3Rvci5jb25jYXQoJyAubW9yZV9zZWFyY2gnKSlcblxuICAgIC8vIHdlIHN0YXNoIGEgcmVmZXJlbmNlIG9mIHdoYXQgcGFnZSB0aGUgY2xpZW50IGhhcyByZXF1ZXN0ZWQsIHNvIHdlIGNhbiBpbmNyZW1lbnQgaXQgb25cbiAgICAvLyBlYWNoIFwibW9yZV9zZWFyY2ggaGl0XG4gICAgY29uc3QgcGFnZUtleSA9IHNlbGVjdG9yXG4gICAgaWYgKHR5cGVvZiBBSlMucGFnZV9tYXBbcGFnZUtleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgQUpTLnBhZ2VfbWFwW3BhZ2VLZXldID0gKHBhZ2Vfbm93IHx8IDEpXG5cbiAgICBpZiAoQUpTLnBhZ2VfbWFwW3BhZ2VLZXldIDwgMCkge1xuICAgICAgLy8gJG1vcmVfc2VhcmNoLmZpbmQoJy5tb3JlLXNlYXJjaC1hbGwnKS5zaG93KClcbiAgICAgIHJldHVybiBmYWxzZSAvLyBhbGwgcmVzdWx0cyBzaG93aW5nIC0tIG5vIG1vcmUgZm9yIHRoZSBpa2luZCBhdmFpbCBzbyBub29wL2lnbm9yZVxuICAgIH1cblxuICAgIEFKUy5wYWdlX21hcFtwYWdlS2V5XSArPSAxXG4gICAgY29uc3QgcGFnZSA9IEFKUy5wYWdlX21hcFtwYWdlS2V5XVxuXG4gICAgJG1vcmVfc2VhcmNoLmZpbmQoJy5tb3JlLXNlYXJjaC1mZXRjaGluZycpLnNob3coKVxuXG4gICAgQUpTLm1vcmVfc2VhcmNoaW5nID0gdHJ1ZVxuXG4gICAgbGV0IHVybCA9IHVybEluICsgcGFnZVxuICAgIGNvbnN0IHVybHJlcGxhY2UgPSBsb2NhdGlvbi5wcm90b2NvbC5jb25jYXQoJy8vJywgbG9jYXRpb24uaG9zdCwgdXJsKVxuICAgIHVybCArPSAnJnNjcm9sbD0xJ1xuXG4gICAgbG9nKCd1cmw6ICcsIHVybCkgICAgICAgICAgICAgIC8vIHVybCB0byBBSkFYIGdldCBuZXh0IHBhZ2VcbiAgICBsb2coJ3VybHJlcGxhY2UnLCB1cmxyZXBsYWNlKSAgLy8gdXJsIHRvIGNoYW5nZSBicm93c2VyIGxvY2F0aW9uICh2aXN1YWxseSkgdG9cblxuXG4gICAgbG9nKCdtb3JlX3NlYXJjaChzZWxlY3Rvcj0nLCBzZWxlY3RvciwgJ3NvcnQ9JywgaWtpbmQsICdwYWdlPScsIHBhZ2UsICd1cmw9JywgdXJsLCAnKScpXG4gICAgLy8gbG9nKEFKUy5wYWdlX21hcClcblxuXG4gICAgJC5nZXQodXJsLCAoaHRtKSA9PiB7XG4gICAgICBpZiAoaHRtLmxlbmd0aCA8IDEwMCAgJiYgICQoaHRtKS5maW5kKCdkaXYubm8tcmVzdWx0cycpKSB7XG4gICAgICAgIC8vIG5vIG1vcmUgcmVzdWx0cyBhdmFpbC9mb3VuZC4gIHdlIGhhdmUgcmVhY2hlZCBpbmZpbml0eSFcbiAgICAgICAgJG1vcmVfc2VhcmNoLmZpbmQoJy5tb3JlLXNlYXJjaC1mZXRjaGluZywgYS5idG4nKS5oaWRlKClcbiAgICAgICAgLy8gJG1vcmVfc2VhcmNoLmZpbmQoJy5tb3JlLXNlYXJjaC1hbGwnKS5zaG93KClcbiAgICAgICAgQUpTLnBhZ2VfbWFwW3BhZ2VLZXldID0gLTEgLy8gZmxhZyB0byBpZ25vcmUgZnV0dXJlIG1vcmVfc2VhcmNoIGF0dGVtcHRzXG4gICAgICAgIEFKUy5tb3JlX3NlYXJjaGluZyA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoQUpTLnB1c2hTdGF0ZSAgJiYgIHR5cGVvZiBoaXN0b3J5LnJlcGxhY2VTdGF0ZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgdXJscmVwbGFjZSlcblxuXG4gICAgICBjb25zdCBzZWxlY3RvcklEID0gJChzZWxlY3RvcikuYXR0cignaWQnKVxuICAgICAgaWYgKEFKUy50aWxlclBSRVYgICYmICBBSlMudGlsZXJQUkVWLnVuc291cmNlZCAgJiYgIEFKUy50aWxlclBSRVYudW5zb3VyY2VkW3NlbGVjdG9ySURdKVxuICAgICAgICBkZWxldGUgQUpTLnRpbGVyUFJFVi51bnNvdXJjZWRbc2VsZWN0b3JJRF1cblxuXG4gICAgICBjb25zdCAkc2VsZWN0b3IgPSAkKHNlbGVjdG9yLmNvbmNhdCgnIC5yZXN1bHRzJykpXG4gICAgICAkc2VsZWN0b3IuYXBwZW5kKEFKUy5hZGROb3RlcyhBSlMuYWRkaW5nTm90ZXNLaW5kLCBodG0pKVxuXG4gICAgICAvLyByZS10aWxlIGFuZCByZS1mbG93ISAgKHRoZSBmb3JjZSBzaG91bGQgZmxvdyB0aHJvdWdoIHlvdSlcbiAgICAgIEFKUy50aWxlcihzZWxlY3RvcilcbiAgICAgICRtb3JlX3NlYXJjaC5maW5kKCcubW9yZS1zZWFyY2gtZmV0Y2hpbmcnKS5oaWRlKClcbiAgICAgIEFKUy5tb3JlX3NlYXJjaGluZyA9IGZhbHNlXG5cbiAgICAgIEFKUy5wYXJlbnRfaG92ZXIoJHNlbGVjdG9yKVxuXG5cbiAgICAgIC8vIE9LLCB0aGlzIGlzIHF1aXRlIGEgYml0IG1vcmUgc3VidGxlLi4uICB0aGUgSFRNIGhhcyBiZWVuIGRyb3BwZWQgaW4sXG4gICAgICAvLyAqYW5kKiB3ZSd2ZSBkb25lIGEgYmFzaWMgcmUtdGlsaW5nLiAgaG93ZXZlciwgaXQncyB2ZXJ5IGxpa2VseSBtYW55XG4gICAgICAvLyBvZiB0aGUgaW1hZ2VzIGFyZSBzdGlsbCBsb2FkaW5nLiAgc28gbGlzdGVuIGZvciBpbWFnZSBcImlzIGxvYWRlZFwiIGV2ZW50c1xuICAgICAgLy8gaWYgdGhleSB0cmlja2xlIGluLCBhbmQgYXQgbW9zdCByZS10aWxlIGV2ZXJ5IDEgc2Vjb25kIChldmVuIGlmIHRoZXlcbiAgICAgIC8vIGxpa2VseSB0cmlja2xpbmcgaW4gYXQgYSBmYXN0ZXIgcmF0ZSB0aGFuIHRoYXQpIHVudGlsIHRoZXkgYWxsIGxvYWRlZFxuICAgICAgJChzZWxlY3Rvci5jb25jYXQoJyBpbWcnKSkub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChBSlMubW9yZV9zZWFyY2hfdGhyb3R0bGVyKVxuICAgICAgICBBSlMubW9yZV9zZWFyY2hfdGhyb3R0bGVyID0gc2V0VGltZW91dChBSlMudGlsZXIsIDEwMDApXG4gICAgICB9KVxuXG5cbiAgICAgIGlmICh0eXBlb2YgYXJjaGl2ZV9hbmFseXRpY3MgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICBhcmNoaXZlX2FuYWx5dGljcy5zZW5kX3Njcm9sbF9mZXRjaF9ldmVudChwYWdlKVxuICAgIH0pXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgLy8gd2hlbiBlbWJlZCBjb2RlcyBhcmUgYmVpbmcgc2hvd24sIGFkanVzdCB0aGVpciBoZWlnaHRzIHNvIHRoZXkgc2hvdyBhbGwgdGhlIGNvbnRlbnQvY29kZXMhXG4gIHN0YXRpYyBlbWJlZF9jb2Rlc19hZGp1c3QoKSB7XG4gICAgbG9nKCdzaG93aW5nIGVtYmVkcyEnKVxuXG4gICAgLy8gdGhlc2UgYXJlIGZvdW5kIChvbmx5KSBvbiAvZGV0YWlscy8gcGFnZXNcbiAgICBmb3IgKGNvbnN0IGVtYmlkIG9mIFsnZW1iZWRjb2RlaGVyZScsICdlbWJlZGNvZGVoZXJlV1AnXSkge1xuICAgICAgY29uc3QgJGVtYmlkID0gJChgIyR7ZW1iaWR9YClcbiAgICAgICRlbWJpZC5yZW1vdmVBdHRyKCdyb3dzJykuY3NzKCdoZWlnaHQnLCAnJylcblxuICAgICAgY29uc3QgZW1idHh0ID0gJGVtYmlkLnRleHQoKVxuXG4gICAgICAvLyB0aGlzIGlzICpwdWtlKiBjaXR5IC0tIHNpbmNlIHRleHRhcmVhcyBhcmUgYSBQSVRBLCBtYWtlIGEgc2hhZG93IGRpdiB3LyB0aGVcbiAgICAgIC8vIHRleHQgd2Ugd2FudCBpbiBpdCwgdHJ5aW5nIHRvIGJlIHNhbWUgd2lkdGgsIHNhbWUgZm9udC1zaXplLCBldGMuXG4gICAgICAvLyBhbmQgKnRoZW4qIGluc2VydCBpbnRvIERPTSBpbnZpc2liaWx5IHNvIHdlIGNhbiBjYWxjdWxhdGUgaXRzIG92ZXJhbGwgaGVpZ2h0XG4gICAgICAvLyAuLiBhbmQgdGhlbiBwZWcgdGhlIHRleHRhcmVhIGhlaWdodCB0byB0aGF0IGhlaWdodFxuICAgICAgJCgnYm9keScpLnByZXBlbmQoJCgnPGRpdi8+JykuYXR0cih7XG4gICAgICAgIGlkOiBgJHtlbWJpZH1TaGFkb3dgLFxuICAgICAgICBjbGFzczogJ3RleHRhcmVhLWludmVydC1yZWFkb25seSByb3VuZGJveDUnLFxuICAgICAgfSkuY3NzKHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB0b3A6IDYwLFxuICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgcGFkZGluZzogJzVweCAxNXB4IDVweCAxNXB4JyxcbiAgICAgICAgd2lkdGg6ICRlbWJpZC53aWR0aCgpLFxuICAgICAgICAnZm9udC1zaXplJzogJGVtYmlkLmNzcygnZm9udC1zaXplJyksXG4gICAgICB9KVxuICAgICAgICAudGV4dChlbWJ0eHQpKVxuXG4gICAgICBjb25zdCBiZXN0SFQgPSAkKGAjJHtlbWJpZH1TaGFkb3dgKS5vdXRlckhlaWdodCgpICsgMTVcbiAgICAgIGxvZyhlbWJpZCwgJ2Jlc3RpZSBoZWlnaHQnLCBiZXN0SFQsICdmb3IgY3VycmVudCB3aWR0aCcsICRlbWJpZC53aWR0aCgpKVxuICAgICAgJChgIyR7ZW1iaWR9U2hhZG93YCkucmVtb3ZlKClcblxuICAgICAgJGVtYmlkLmhlaWdodChiZXN0SFQpXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQSBzaW1wbGVyICdvbmUgc2hvdCcgd2F5IHRvIGR5bmFtaWNhbGx5IGluc2VydCBhIG1vZGFsIGFuZCBzaG93IGl0IG9uIHRoZSBwYWdlLlxuICAgKiBZb3UgY2FuIGNhbGwgaXQgdy8gYSBoYXNobWFwIG9mIG9wdGlvbmFsIHBhcmFtdGVycyB0byBtYWtlIGl0IHZlcnkgZWFzeSBvbiBjYWxsZXIgZW5kIHRvIGdyb2tcbiAgICogKHNpbWlsYXIgdG8gcHl0aG9uJ3Mga3dhcmdzKVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtwcmVwZW5kPSdib2R5J10gICAgICAgIGEgalF1ZXJ5IHNlbGVjdG9yIHdoZXJlIHRvIHByZXBlbmQgdGhlIG1vZGFsIG1hcmt1cFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtzZWxlY3Rvcj0nI215LW1vZGFsJ10gIGEgdW5pcXVlIGlkIC0tIGlzIF9maXJzdF8gcmVtb3ZlKGQpLCBhbmQgdGhlbiBhZGRlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFt0aXRsZT0nY29uZmlybWVkJ10gICAgIHdoYXQgdGl0bGUvaGVhZGVyIHNob3VsZCBhcHBlYXJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbYm9keT0nJ10gICAgICAgICAgICAgICB0ZXh0L21hcmt1cCBmb3IgdGhlIG1vZGFsIGJvZHlcbiAgICogQHJldHVybiBuL2FcbiAgICovXG4gIHN0YXRpYyBtb2RhbCh7XG4gICAgcHJlcGVuZCA9ICdib2R5JyxcbiAgICBzZWxlY3RvciA9ICcjbXktbW9kYWwnLFxuICAgIHRpdGxlID0gJ2NvbmZpcm1lZCcsXG4gICAgYm9keSA9ICcnLFxuICB9ID0ge30pIHtcbiAgICBjb25zdCBpZCA9IHNlbGVjdG9yLnJlcGxhY2UoLyMvLCAnJylcbiAgICAkKHNlbGVjdG9yKS5yZW1vdmUoKVxuICAgICQocHJlcGVuZCkucHJlcGVuZChgXG48ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG48ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCI+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCIgc3R5bGU9XCJwYWRkaW5nOjEwcHg7XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJjbG9zZVwiXG4gICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbm9jaGl2ZS1yZW1vdmUtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPnJlbW92ZS1jaXJjbGU8L3NwYW4+PC9idXR0b24+XG4gICAgICA8aDMgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiR7dGl0bGV9PC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiJHtpZH0tYm9keVwiPiR7Ym9keX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjwvZGl2PmApXG4gICAgJChzZWxlY3RvcikubW9kYWwoJ3Nob3cnKVxuICB9XG5cblxuICAvLyBkeW5hbWljYWxseSBhZGRzIG1vZGFsIHRvIHBhZ2UgKGlmIGlzbnQgdGhlcmUgYWxyZWFkeSlcbiAgc3RhdGljIF9tb2RhbF9hZGQoc2VsZWN0b3IsIGNvbmYpIHsgLy8gbG9naWNhbGx5IHByaXZhdGVcbiAgICBsb2coY29uZilcblxuICAgIGlmICgkKHNlbGVjdG9yKS5sZW5ndGgpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdG9ySUQgPSBzZWxlY3Rvci5yZXBsYWNlKC8jLywgJycpXG5cbiAgICAkKCdib2R5JykucHJlcGVuZChgXG48ZGl2IGlkPVwiJHtzZWxlY3RvcklEfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyICR7Y29uZi5oZWFkZXJDbGFzcyA/IGNvbmYuaGVhZGVyQ2xhc3MgOiAnbW9kYWwtaGVhZGVyLXN0ZCd9XCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29ub2NoaXZlLXJlbW92ZS1jaXJjbGVcIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICR7dHlwZW9mIGNvbmYudGl0bGUgPT09ICd1bmRlZmluZWQnID8gJ0NvbmZpcm1lZCcgOiBjb25mLnRpdGxlfVxuICAgICAgPC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiJHtzZWxlY3RvcklEfS1ib2R5XCI+XG4gICAgICAke3R5cGVvZiBjb25mLmJvZHkgPT09ICd1bmRlZmluZWQnID8gJycgOiBjb25mLmJvZHl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48L2Rpdj5gKVxuXG4gICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdibHVycnknKSAvLyBleHh4cGVyaW1lbnQhXG4gIH1cblxuXG4gIHN0YXRpYyBtb2RhbF9iZXRhKGxuaywgY29uZkluKSB7IC8vIE5PVEU6IG5vdCBpbiB1c2Ugbm93XG4gICAgY29uc3QgY29uZiA9IGNvbmZJblxuICAgIGNvbmYudGl0bGUgPSAnPGNlbnRlcj5HaXZlIFVzIEZlZWRiYWNrITwvY2VudGVyPidcblxuICAgIC8vIFNldCBhIGNvb2tpZSAqTk9XKiB3LyBKUyAtLSBzbyB3ZSBjYW4gYWJzb2x1dGVseSBhc3N1cmUgdGhhdCBpZiB1c2VyIGhpdHNcbiAgICAvLyB0aGUgZXhpdCBmb3JtICpXSVRIT1VUKiBjb29raWVzLCB0aGF0IHRoZXkgbXVzdCBiZSBkaXNhYmxpbmcgY29va2llcyBvbiBhcmNoaXZlLm9yZ1xuICAgIC8vIChidXQgaW50ZXJlc3RpbmdseSBoYXZlIEpTIGVuYWJsZWQgKHNpbmNlIHRoZXkgYXJlIGhlcmUhIDstKSlcbiAgICAvLyBTbyBleGl0IGZvcm0gY2FuIGdpdmUgdGhlbSBcInlvdSBuZWVkIHRvIGVuYWJsZSBjb29raWVzXCIgZmFpbC4uLlxuICAgICQuY29va2llKCdiZXRhLW1vZGFsJywgJ29wZW4nLCB7IHBhdGg6ICcvJywgZXhwaXJlczogMSwgZG9tYWluOiAnLmFyY2hpdmUub3JnJyB9KVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAkKGxuaykuYXR0cignZGF0YS10YXJnZXQnKVxuICAgIGNvbmYuaHJlZiA9IGxvY2F0aW9uLmhyZWZcbiAgICBjb25mLmhyZWYgPSBjb25mLmhyZWYucmVwbGFjZSgvJnVpMz0xJC8sICcnKVxuICAgIGNvbmYuaHJlZiA9IGNvbmYuaHJlZi5yZXBsYWNlKC9cXC92MiQvLCAgJycpXG5cbiAgICBjb25mLmJvZHkgPSBgXG48c3R5bGU+ICNmYmFjayBoNCB7IG1hcmdpbi10b3A6MzBweDsgfSA8L3N0eWxlPlxuPGRpdiBpZD1cImZiYWNrXCIgc3R5bGU9XCJwYWRkaW5nOjIwcHhcIj5cbiAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi9kZXRhaWxzL3YydG91cjIwMTUwNDIwXCI+XG4gICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyOyBmbG9hdDpyaWdodFwiPlxuICAgICAgPGltZyBzcmM9XCIvZG93bmxvYWQvdjJ0b3VyMjAxNTA0MjAvdjJ0b3VyMjAxNTA0MjAudGh1bWJzL0FwcmlsMjAyMDE1VG91cl8wMDAzNzUuanBnXCIvPjxici8+XG4gICAgICBUVVRPUklBTCBWSURFT1xuICAgIDwvZGl2PlxuICA8L2E+XG4gIDxkaXYgc3R5bGU9XCJmb250LXNpemU6MThweFwiPlxuICAgIFBsZWFzZSB0YWtlIGEgbW9tZW50IHRvIGdpdmUgdXMgZmVlZGJhY2sgYmVsb3cuXG4gICAgV2UgY29uc2lkZXIgdGhlc2UgY29tbWVudHMgYXMgd2UgbWFrZSBjaGFuZ2VzIHRvIHRoZSBzaXRlLlxuICA8L2Rpdj5cbiAgPGg1IHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgPGJyLz48YnIvPjxici8+XG4gICAgVEhBTksgWU9VIGZvciB5b3VyIHZhbHVhYmxlIGZlZWRiYWNrIVxuICA8L2g1PlxuICA8Zm9ybSBpZD1cIm1vZGFsX2JldGFfZm9ybVwiIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvc2VydmljZXMvZXhpdC5waHBcIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmZWVkYmFja19vbmx5XCIgdmFsdWU9XCIxXCIvPjxici8+XG5cbiAgICA8aDQ+RmVlZGJhY2sgKGRldGFpbHMgYXJlIGhlbHBmdWwpOjwvaDQ+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgbmFtZT1cImZlZWRiYWNrXCIgcm93cz1cIjRcIj48L3RleHRhcmVhPlxuXG4gICAgPGg0Pk1heSB3ZSBjb250YWN0IHlvdSBhYm91dCB5b3VyIGZlZWRiYWNrPzwvaDQ+XG4gICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb250YWN0XCIgdmFsdWU9XCJ5ZXNcIi8+IHllcywgaGVyZSdzIG15IGVtYWlsIGFkZHJlc3M6PGJyLz5cbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWxcIi8+IDxici8+XG4gICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb250YWN0XCIgdmFsdWU9XCJub1wiLz4gbm88YnIvPlxuICAgIDxociBzdHlsZT1cImJvcmRlci1jb2xvcjpibGFjaztiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO2NvbG9yOmJsYWNrXCIgLz5cbiAgICBZb3UgY2FuIHVzZSB0aGUgY2xhc3NpYyB2ZXJzaW9uIG9mIGFyY2hpdmUub3JnIGZvciBhIGxpbWl0ZWQgcGVyaW9kIG9mIHRpbWUuPGJyLz5cbiAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9ibG9nLmFyY2hpdmUub3JnLzIwMTQvMTEvMDUvcmVkZXNpZ24vXCI+XG4gICAgICBMZWFybiBtb3JlXG4gICAgPC9hPlxuICAgIGFib3V0IHdoeSBhcmNoaXZlLm9yZyBjaGFuZ2VkLjxici8+YFxuXG4gICAgaWYgKGNvbmYuZmVlZGJhY2tfb25seSkge1xuICAgICAgY29uZi5ib2R5ICs9IGBcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwibWFyZ2luLXRvcDoyMHB4XCIgdmFsdWU9XCJTdWJtaXRcIi8+YFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25mLmJvZHkgKz0gYFxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOjIwcHhcIiB2YWx1ZT1cIlN1Ym1pdCBGZWVkYmFja1wiLz5cbiAgICAgICAgPGlucHV0IGlkPVwibW9kYWxfYmV0YV9mb3JtX2V4aXRcIiBjbGFzcz1cImJ0blwiIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1hcmdpbi10b3A6MjBweFwiIHZhbHVlPVwiRXhpdCB0byBDbGFzc2ljIFNpdGVcIi8+YFxuICAgIH1cbiAgICBjb25mLmJvZHkgKz0gYFxuICAgIDxici8+PGJyLz5cbiAgICA8aT5XaGF0J3MgTmV3PzwvaT5cbiAgICBbXG4gICAgICA8YSB0YXJnZXQ9XCJ0b3BcIiBocmVmPVwiaHR0cHM6Ly9ibG9nLmFyY2hpdmUub3JnLzIwMTUvMDIvMTIvd2hhdHMtbmV3LXdpdGgtdjIvXCI+cmVjZW50IGNoYW5nZXM8L2E+IHxcbiAgICAgIDxhIHRhcmdldD1cInRvcFwiIGhyZWY9XCIvQ0hBTkdFTE9HLnR4dFwiPmRldGFpbGVkIENIQU5HRUxPRzwvYT5cbiAgICBdXG4gIDwvZm9ybT5cbjwvZGl2PmBcblxuXG4gICAgQUpTLl9tb2RhbF9hZGQoc2VsZWN0b3IsIGNvbmYpXG5cbiAgICAvLyBpbiBjYXNlIGl0J3Mgbm90IG9idmlvdXMsIHRoZXJlIGFyZSBGT1VSIENBU0VTIHdlIChoYXZlIHRvKSBoYW5kbGU6XG4gICAgLy8gICBmZWVkYmFjayBvbmx5LCBoaXQgW3N1Ym1pdF0gYnV0dG9uXG4gICAgLy8gICBmZWVkYmFjayBvbmx5LCBjYW5jZWwgb3V0IChubyBmZWVkYmFjayBnaXZlbilcbiAgICAvLyAgIGV4aXQgYmV0YSwgaGl0IFtzdWJtaXRdIGJ1dHRvblxuICAgIC8vICAgZXhpdCBiZXRhLCBubyBmZWVkYmFjayBnaXZlblxuICAgICQoJyNtb2RhbF9iZXRhX2Zvcm1fZXhpdCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICQoJyNtb2RhbF9iZXRhX2Zvcm0gaW5wdXRbbmFtZT1mZWVkYmFja19vbmx5XScpLnZhbCgwKVxuICAgICAgY29uZi5mZWVkYmFja19vbmx5ID0gZmFsc2VcbiAgICAgIGNvbmYuZXhpdGluZyA9IHRydWVcbiAgICAgICQoJyNtb2RhbF9iZXRhX2Zvcm0nKS5zdWJtaXQoKVxuICAgIH0pXG5cblxuICAgICQoJyNtb2RhbF9iZXRhX2Zvcm0nKS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgbG9nKCdzdWJtaXQgY2xpY2tlZCEnKVxuXG4gICAgICBjb25mLnN1Ym1pdHRlZCA9IHRydWVcbiAgICAgIGNvbmYucG9zdGRhdGEgPSAkKCcjbW9kYWxfYmV0YV9mb3JtJykuc2VyaWFsaXplKCkgLy8gb2gsIGZreWEhXG5cbiAgICAgIC8vIHdlJ3JlIHBvbGl0ZVxuICAgICAgJChzZWxlY3Rvci5jb25jYXQoJyBoNScpKS5mYWRlSW4oJ3Nsb3cnKVxuICAgICAgJChzZWxlY3Rvci5jb25jYXQoJyBmb3JtJykpLmZhZGVPdXQoJ3Nsb3cnKVxuXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBBSkFYIGZvcm0gcG9zdCwga2VlcGluZyBwYWdlIHdoZXJlIGl0IGlzXG4gICAgICAgICQucG9zdCgnL3NlcnZpY2VzL2V4aXQucGhwJywgY29uZi5wb3N0ZGF0YSwgKCkgPT4ge1xuICAgICAgICAgIGxvZygnUE9TVEVEICcsIGNvbmYucG9zdGRhdGEpXG5cbiAgICAgICAgICBpZiAoKCFjb25mLmZlZWRiYWNrX29ubHkgIHx8ICBjb25mLmV4aXRpbmcpICAmJiAgZG9jdW1lbnQuY29va2llID09PSAnJykge1xuICAgICAgICAgICAgLy8gdXNlciBkaXNhYmxlcyBjb29raWVzLCBzbyBnbyBkaXJlY3RseSB0byBleGl0IGZvcm0gd2hlcmUgd2UnbGxcbiAgICAgICAgICAgIC8vIGdpdmUgdGhlbSBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoYXQgYW5kIGhvdyB3ZSBjYW4ndCBcInN0aWNrXCJcbiAgICAgICAgICAgIC8vIHRoZWlyIHByZWZlcmVuY2UgdG8gZXhpdCBiZXRhLi4uXG4gICAgICAgICAgICBsb2coJ0VYSVRJTkcgQlVUIEhBUyBOTyBDT09LSUVTIScpXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJy9zZXJ2aWNlcy9leGl0LnBocCdcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYmx1cnJ5JylcbiAgICAgICAgICAkKHNlbGVjdG9yKS5tb2RhbCgnaGlkZScpXG4gICAgICAgIH0pXG4gICAgICB9LCAyNTAwKVxuXG4gICAgICByZXR1cm4gZmFsc2UgLy8gZG9udCBkbyAqbm9ybWFsKiBzdWJtaXQgb2YgdGhlIGZvcm0gKGFuZCBkcml2ZSB0aGUgcGFnZSBhd2F5KVxuICAgIH0pXG5cblxuICAgICQoc2VsZWN0b3IpLm1vZGFsKCdzaG93Jykub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgIGxvZygnYmV0YSBtb2RhbCBoaWRkZW4nKVxuXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JsdXJyeScpXG4gICAgICBpZiAoY29uZi5mZWVkYmFja19vbmx5ICB8fCAgIWNvbmYuZXhpdGluZykge1xuICAgICAgICAkKHNlbGVjdG9yKS5yZW1vdmUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhpdEZOID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWNvbmYuc3VibWl0dGVkKSB7XG4gICAgICAgICAgLy8gdXNlciBjbGlja2VkIG91dCBvZiBtb2RhbCBvciBbeF0gY2xvc2UgYnV0dG9uIC0tIG5vIGZvcm0gc3VibWl0XG4gICAgICAgICAgLy8gYnV0IHRoZXkgRE8gd2FudCB0byBleGl0IGJldGEuLi5cbiAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJy9zZXJ2aWNlcy9leGl0LnBocCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHNlbGVjdG9yKS5yZW1vdmUoKVxuICAgICAgICAgIGxvZygnZ29pbmcgdG8gJywgY29uZi5ocmVmKVxuICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBjb25mLmhyZWZcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmICh0eXBlb2YgYXJjaGl2ZV9hbmFseXRpY3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFyY2hpdmVfYW5hbHl0aWNzLnNlbmRfcGluZyh7XG4gICAgICAgICAga2luZDogJ2V2ZW50JyxcbiAgICAgICAgICBlYzogJ2luX2JldGEnLFxuICAgICAgICAgIGVhOiAnZXhpdCcsXG4gICAgICAgICAgY2FjaGVfYnVzdDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgfSwgZXhpdEZOKSAvLyBvbmNlIGFuYWx5dGljcyBHSUYgaXMgbG9hZGVkLCBpbnZva2Ugb3VyIGNhbGxiYWNrIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nKCd1aG8gYW5hbHl0aWNzIG5vdCBkZWZpbmVkIScpXG4gICAgICAgIC8vIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBqdXN0IHRvIGJlIHNhZmUhIVxuICAgICAgICBleGl0Rk4oKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuXG4gIC8qKlxuICAgKiBQYXJzZSBBUEkgZGF0YSBhbmQgY2hlY2sgaWYgdGhlIGl0ZW0gaXMgc3VjY2Vzc2Z1bGx5IG1hcmtlZCB0byBmYXZvcml0ZSBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJvb2ttYXJrUmVzIHJlc3BvbnNlIGRhdGEgZnJvbSAvYm9va21hcmtzLnBocD9hZGRfYm9va21hcms9MSYuLi5cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0Zhdm9yaXRlU3VjY2Vzc2Z1bChib29rbWFya1Jlcykge1xuICAgIHJldHVybiAoYm9va21hcmtSZXMuaW5kZXhPZignPG1ldGEgbmFtZT1cImlhLWZhdm9yaXRlLXN1Y2Nlc3NcIiBjb250ZW50PVwiMVwiPicpICE9PSAtMSlcbiAgfVxuXG4gIC8vIGdpdmVzIHVzIGFiaWxpdHkgdG8gaGF2ZSBKUyBpbnRlcmNlcHQgYW4gaHJlZiBjbGljayBhbmQgaW5zdGVhZCBkbyBhIGJvb3RzdHJhcCBtb2RhbC5cbiAgLy8gZWc6IHdoZW4gc29tZW9uZSBGYXZvcml0ZXMgYSBsaXN0IG9yIGl0ZW0gLSBhIGtpbmQgb2YgY29uZmlybWF0aW9uIGJveC5cbiAgLy8gICAgIEluIHRoYXQgY2FzZSwgd2Ugd2FudCBpdCB0byBqdXN0IHNheSBGYXZvcml0ZWQgd2l0aCBhIGJpZyBibGFjayBzdGFyIGluIHRoZSBtaWRkbGUuXG4gIC8vICAgICBXZSBkb24ndCB0YWtlIHVzZXIgdG8gdGhlIGhyZWYgdGFyZ2V0LlxuICAvLyAgICAgVGhlIG1vZGFsIGRpc2FwcGVhcnMgaWYgdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIGFuZCByZXR1cm5zIHRvIHBhZ2UgdGhleSB3ZXJlIG9uLlxuICAvLyAgICAgVGltZW91dCBvZiBhIGZldyBzZWNvbmRzIHRvIGNsb3NlIG1vZGFsIGlmIHRoZXkgZG8gbm90aGluZy5cbiAgLy8gY29uZmlnIGlzIGEgaGFzaG1hcCB3aXRoIG9wdGlvbmFsIGtleXM6XG4gIC8vICAgYXV0b19jbG9zZSwgYXV0b19yZW1vdmUsIGJvZHksIGNlbnRlciwgZmF2b3JpdGUsIGlnbm9yZV9sbmssIHRpdGxlbixcbiAgLy8gICBoZWFkZXJDbGFzcywgc2hvd24sIGZvbGxvd19saW5rX29uX2Rpc21pc3NcbiAgc3RhdGljIG1vZGFsX2dvKGxuaywgY29uZkluKSB7XG4gICAgY29uc3QgY29uZiA9IGNvbmZJbiAvLyBzaWdoXG5cbiAgICBpZiAoY29uZi5mYXZvcml0ZSkge1xuICAgICAgLy8gdGhpcyBmbGlja3Mgb24gYSBidW5jaCBvZiBjb25maWcgb3B0aW9uc1xuICAgICAgY29uZi5jZW50ZXIgPSB0cnVlXG4gICAgICBjb25mLmF1dG9fY2xvc2UgPSB0cnVlXG4gICAgICBjb25mLnRpdGxlID0gJ0Zhdm9yaXRlZCdcbiAgICAgIGNvbmYuYm9keSA9ICc8Y2VudGVyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjEwMHB4O1wiIGNsYXNzPVwiaWNvbm9jaGl2ZS1mYXZvcml0ZVwiPjwvc3Bhbj48L2NlbnRlcj4nXG4gICAgICBjb25mLmxvZ2luID0gdHJ1ZSAvLyBtdXN0IGJlIGxvZ2dlZCBpbiFcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RvciA9ICQobG5rKS5hdHRyKCdkYXRhLXRhcmdldCcpXG4gICAgY29uc3QgaHJlZiAgICAgPSAkKGxuaykuYXR0cignaHJlZicpXG5cbiAgICBBSlMuX21vZGFsX2FkZChzZWxlY3RvciwgY29uZilcblxuXG4gICAgaWYgKGNvbmYuc2hvd24pIHtcbiAgICAgICQoc2VsZWN0b3IpLm9uKCdzaG93bi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgY29uZi5zaG93bigpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChjb25mLmZvbGxvd19saW5rX29uX2Rpc21pc3MpIHtcbiAgICAgICQoc2VsZWN0b3IpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgIGxvZygnbW9kYWwgaGlkZGVuLCBnb2luZyB0byAnLCBocmVmLCAnLi4nKVxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JsdXJyeScpXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBocmVmXG4gICAgICB9KVxuICAgIH1cblxuXG4gICAgJChzZWxlY3RvcikubW9kYWwoJ3Nob3cnKVxuXG5cbiAgICBpZiAoY29uZi5sb2dpbiAgJiYgICQuY29va2llKCdsb2dnZWQtaW4tdXNlcicpID09PSBudWxsKSB7XG4gICAgICBpZiAobG9jYXRpb24ucHJvdG9jb2wgIT09ICdodHRwczonKSB7XG4gICAgICAgIC8vIG1ha2UgYWJzb2x1dGVseSBzdXJlIHdlIG5ldmVyIGxvZ2luIHdpdGggaHR0cCFcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9ICdodHRwczovL2FyY2hpdmUub3JnL2FjY291bnQvbG9naW4ucGhwJ1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVybCA9ICcvYWNjb3VudC9sb2dpbi5waHAnXG4gICAgICAkLmdldCh1cmwsIChodG1JbikgPT4ge1xuICAgICAgICAkKHNlbGVjdG9yLmNvbmNhdCgnIC5tb2RhbC10aXRsZScpKS50ZXh0KCdOZWFybHkgdGhlcmUhICBQbGVhc2UgbG9naW4gZmlyc3QnKVxuXG4gICAgICAgICQoc2VsZWN0b3IpLm1vZGFsKCdzaG93JylcbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdXMgdG8gZWZmZWN0aXZlbHkgcmlwIG9mZiB0aGUgaGVhZGVyL25hdiBhbmQgZm9vdGVyXG4gICAgICAgIC8vIGlmIHdlIGFyZSBhY2Nlc3NpbmcgYSBmdWxsIHBhZ2UgKGVnOiBhY2NvdW50IGxvZ2luIHBhZ2UpXG4gICAgICAgIGNvbnN0IGh0bSA9ICgkKGh0bUluKS5maW5kKCcuY29udGFpbmVyLWlhID4gZGl2JykubGVuZ3RoID9cbiAgICAgICAgICAkKGh0bUluKS5maW5kKCcuY29udGFpbmVyLWlhID4gZGl2JykuZ2V0KDApIDpcbiAgICAgICAgICBodG1JblxuICAgICAgICApXG5cbiAgICAgICAgJChzZWxlY3Rvci5jb25jYXQoJy1ib2R5JykpLmh0bWwoaHRtKVxuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJChzZWxlY3Rvci5jb25jYXQoJy1ib2R5IGZvcm06aGFzKGlucHV0W3R5cGU9c3VibWl0XSknKSlcblxuICAgICAgICBpZiAoJGZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgY29uc3Qga2V5dmFscyA9IHt9XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dCcpLmVhY2goKGssIHYpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCQodikuYXR0cignbmFtZScpLmxlbmd0aClcbiAgICAgICAgICAgICAgICBrZXl2YWxzWyQodikuYXR0cignbmFtZScpXSA9ICQodikudmFsKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBsb2coJ1BPU1QnLCB1cmwpXG4gICAgICAgICAgICAvLyBsb2coa2V5dmFscylcbiAgICAgICAgICAgICQucG9zdCh1cmwsIGtleXZhbHMsICgpID0+IHtcbiAgICAgICAgICAgICAgbG9nKCdTVUJNSVRURUQnKVxuICAgICAgICAgICAgICBpZiAoJC5jb29raWUoJ2xvZ2dlZC1pbi11c2VyJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTIVxuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBnb2luZyB0byBoaWRlIHRoZSBsb2dpbiBtb2RhbCBub3csIGFuZCBuZWVkXG4gICAgICAgICAgICAgICAgLy8gdG8gcHJvY2VlZCBvbmx5ICphZnRlciogdGhlIG1vZGFsIGFuaW1hdGlvbiBpcyBkb25lXG4gICAgICAgICAgICAgICAgLy8gYW5kIG1vZGFsIGlzIGdvbmUuICBTbyBzZXR1cCBsaXN0ZW5lciBub3csICp0aGVuKiBoaWRlLlxuICAgICAgICAgICAgICAgIC8vIE9uY2UgbG9naW4gbW9kYWwgaXMgZ29uZSwgcmVtb3ZlIHRoZSBtb2RhbCwgYW5kXG4gICAgICAgICAgICAgICAgLy8gaW52b2tlIHRoZSBvcmlnaW5hbGx5IGludGVuZGVkIG1vZGFsIGluIGZyZXNoIGVudmlyb25tZW50IVxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3IpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAkKHNlbGVjdG9yKS5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgbG9nKCdTVUNDRVNTJylcbiAgICAgICAgICAgICAgICAgIEFKUy5tb2RhbF9nbyhsbmssIGNvbmYpIC8vIGludm9rZSBvcmlnaW5hbCBtb2RhbCFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYmx1cnJ5JylcbiAgICAgICAgICAgICAgICAkKHNlbGVjdG9yKS5tb2RhbCgnaGlkZScpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBuby1hbGVydFxuICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgdHJ5IGxvZ2dpbmcgaW4gYWdhaW4nKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG5cbiAgICBpZiAoY29uZi5hdXRvX3JlbW92ZSkge1xuICAgICAgY29uZi5hdXRvX2Nsb3NlID0gdHJ1ZVxuICAgICAgJChzZWxlY3Rvcikub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgJChzZWxlY3RvcikucmVtb3ZlKClcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdibHVycnknKVxuICAgICAgfSlcbiAgICB9XG5cblxuICAgIGlmICghY29uZi5pZ25vcmVfbG5rKSB7XG4gICAgICBjb25zdCB1cmwgPSBsbmsuaHJlZlxuICAgICAgLy8gbG9nKCdzdWJtaXQnLCB1cmwpXG4gICAgICAkLmdldCh1cmwsIChyZXMpID0+IHtcbiAgICAgICAgaWYgKGNvbmYuZmF2b3JpdGUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyY2hpdmVfYW5hbHl0aWNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXJjaGl2ZV9hbmFseXRpY3Muc2VuZF9waW5nKHtcbiAgICAgICAgICAgICAga2luZDogJ2V2ZW50JyxcbiAgICAgICAgICAgICAgZWM6ICdwYWdlX2FjdGlvbicsXG4gICAgICAgICAgICAgIGVhOiAnZmF2b3JpdGUnLFxuICAgICAgICAgICAgICBlbDogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICAgIGNhY2hlX2J1c3Q6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChBSlMuaXNGYXZvcml0ZVN1Y2Nlc3NmdWwocmVzKSkge1xuICAgICAgICAgICAgJCgnI2Zhdm9yaXRlLWJ1dHRvbicpLmFkZENsYXNzKCdmYXZvcml0ZWQnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCAkZmF2TW9kYWwgPSAkKHNlbGVjdG9yKVxuICAgICAgICAgICAgY29uc3QgZmFpbE1lc3NhZ2UgPSBgXG4gICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmYXZvcml0ZS1mYWlsdXJlLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIFRoZXJlIHdhcyBhbiBlcnJvciBhZGRpbmcgdGhlIGZhdm9yaXRlLiBJZiB0aGUgcHJvYmxlbSBwZXJzaXN0cywgcGxlYXNlIGNvbnRhY3Qgc3VwcG9ydC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICAkZmF2TW9kYWwuZmluZCgnLm1vZGFsLXRpdGxlJykuaHRtbCgnRmFpbGVkJylcbiAgICAgICAgICAgICRmYXZNb2RhbC5maW5kKCcjY29uZmlybS1tb2RhbC1ib2R5JykuaHRtbChmYWlsTWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKHNlbGVjdG9yKS5tb2RhbCgnc2hvdycpXG4gICAgICAgIGlmIChjb25mLmF1dG9fY2xvc2UpXG4gICAgICAgICAgc2V0VGltZW91dCgoKCkgPT4gJChzZWxlY3RvcikubW9kYWwoJ2hpZGUnKSksIDIwMDApXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHNlbGVjdG9yKS5tb2RhbCgnc2hvdycpXG4gICAgfVxuXG4gICAgaWYgKGNvbmYuY2VudGVyKVxuICAgICAgJChzZWxlY3Rvci5jb25jYXQoJyAubW9kYWwtZGlhbG9nJykpLmNlbnRlcigpIC8vIHZlcnRpY2FsbHkgY2VudGVyXG5cbiAgICBpZiAoY29uZi5hdXRvX2Nsb3NlICAmJiAgY29uZi5pZ25vcmVfbG5rKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHNlbGVjdG9yKS5tb2RhbCgnaGlkZScpLCAyMDAwKVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuXG4gIC8vIGhhbmR5IGxpdHRsZSBtZXRob2QgdG8gZW5zdXJlIG9ubHkgMSBjaGVja2JveCBpcyBjaGVja2VkXG4gIHN0YXRpYyBjaGVjazEob2JqLCBzZWxlY3Rvcikge1xuICAgIGlmICghb2JqLmNoZWNrZWQpXG4gICAgICByZXR1cm5cblxuICAgIC8vIHRvZ2dsZSBvdGhlcnMgdG8gdW5jaGVja2VkXG4gICAgY29uc3QgJHNlbGVjdG9yID0gKHNlbGVjdG9yID8gJChzZWxlY3RvcikgOiAkKG9iaikucGFyZW50cygnZm9ybScpKVxuXG4gICAgLy8gdW5jaGVjayBhbGw7IHRoZSByZS1jaGVjayB0aGUgY2hlY2tlZCBvbmVcbiAgICAkc2VsZWN0b3IuZmluZCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKS5hdHRyKCdjaGVja2VkJywgZmFsc2UpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb2JqLmNoZWNrZWQgPSB0cnVlXG4gIH1cblxuXG4gIHN0YXRpYyBhZGRDb21tYXMoblN0cikge1xuICAgIC8vIGh0dHA6Ly93d3cubXJlZGtqLmNvbS9qYXZhc2NyaXB0L251bWJlckZvcm1hdC5odG1sXG4gICAgY29uc3QgeCA9IChgJHtuU3RyfWApLnNwbGl0KCcuJylcbiAgICBsZXQgeDEgPSB4WzBdXG4gICAgY29uc3QgeDIgPSB4Lmxlbmd0aCA+IDEgPyAnLicuY29uY2F0KHhbMV0pIDogJydcbiAgICBjb25zdCByZ3ggPSAvKFxcZCspKFxcZHszfSkvXG4gICAgd2hpbGUgKHJneC50ZXN0KHgxKSlcbiAgICAgIHgxID0geDEucmVwbGFjZShyZ3gsICckMSwkMicpXG4gICAgcmV0dXJuIHgxICsgeDJcbiAgfVxuXG5cbiAgc3RhdGljIHN1ZmZpeEZtdCh2YWwsIGF4aXMpIHtcbiAgICBpZiAoYXhpcy5taW4gPj0gMC4wICAmJiAgYXhpcy5tYXggPD0gNSlcbiAgICAgIC8vIGdpdmUgYSBsaXR0bGUgYml0IG1vcmUgZ3JhbnVsYXJpdHkgb2YgMSBkZWNpbWFsIHBvaW50Li4uXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiAxMCwgMSkgLyAxMFxuXG4gICAgaWYgKHZhbCA+PSAxMDAwMDAwKSByZXR1cm4gKHZhbCAvIDEwMDAwMDApLnRvRml4ZWQoMCkuY29uY2F0KCcgTScpXG4gICAgaWYgKHZhbCA+PSAgICAxMDAwKSByZXR1cm4gKHZhbCAvICAgIDEwMDApLnRvRml4ZWQoMCkuY29uY2F0KCcgSycpXG4gICAgcmV0dXJuIHZhbC50b0ZpeGVkKDApXG4gIH1cblxuXG4gIHN0YXRpYyBzdWZmaXhGbXRQZXJjZW50KHZhbCwgYXhpcykge1xuICAgIHJldHVybiBBSlMuc3VmZml4Rm10KHZhbCwgYXhpcykuY29uY2F0KCclJylcbiAgfVxuXG5cbiAgc3RhdGljIGRlc2NyaXB0KCkge1xuICAgIGNvbnN0IGQgPSAkKCcjZGVzY3JpcHQnKS5nZXQoMClcbiAgICBpZiAoZCAgJiYgIGQub2Zmc2V0SGVpZ2h0IDwgZC5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIC8vIHdlIG92ZXJmbG93ZWQgdGhlIHNob3J0IGRlc2NyaXB0IGF0IHRoZSB0b3Agb2YgdGhlIGNvbGxlY3Rpb24gcGFnZS5cbiAgICAgIC8vIHNvIHNob3cgdGhlIGxpdHRsZSBNT1JFIGJ1dHRvbi4uXG4gICAgICAkKCcjZGVzY3JpcHQtbW9yZScpLnNob3coKVxuICAgICAgLy8gJCgnI2Rlc2NyaXB0JykuY3NzKHsnYm9yZGVyLWJvdHRvbSc6JzFweCBzb2xpZCAjY2NjJ30pXG4gICAgfVxuICB9XG5cblxuICAvLyB0aGlzIGFsbG93cyBlYXN5IHNldHVwIGZvciByZXNpemUvb3JpZW50YXRpb24gdHJpZ2dlcnMgZm9yIGFsbCBncmFwaHNcbiAgLy8gb24gYSBwYWdlIHRoYXQgdXNlIHRoaXMhXG4gIHN0YXRpYyBwbG90dGVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBBSlMucGxvdHRlcnMgPT09ICd1bmRlZmluZWQnKVxuICAgICAgQUpTLnBsb3R0ZXJzID0gW11cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgLy8gc3Rhc2ggYSBjb3B5IG9mIHRoZSBjYWxsYmFjayBmb3IgcmVzaXplL29yaWVudGF0aW9uY2hhbmdlIHRyaWdnZXJzXG4gICAgICBBSlMucGxvdHRlcnMucHVzaChjYWxsYmFjaylcblxuICAgICAgLy8gbm93IGRvIHRoZSBhY3R1YWwgcGxvdHRpbmcgKGVnOiBwYWdlIGxvYWQpXG4gICAgICBjYWxsYmFjaygpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN0ZXAgdGhyb3VnaCBlYWNoIGdyYXBoIGFuZCByZXJ1biB0aGVtXG4gICAgICBsb2coJ3Bsb3R0ZXIoKSByZXNpemUvb3JpZW50IGNoYW5nZScsIEFKUy5wbG90dGVycy5sZW5ndGgsICdncmFwaHMgdG8gcmVzaXplJylcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQUpTLnBsb3R0ZXJzLmxlbmd0aDsgaSsrKVxuICAgICAgICBBSlMucGxvdHRlcnNbaV0oKVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gR3JhcGhpbmcgZm9yIGFyY2hpdmUub3JnL3NlcnZpY2VzL3ZpZXdzLnBocCBhbmQgVFZcbiAgc3RhdGljIHBsb3QoaWQsIGNmZ0luLCBmbXRfZm4sIHB0cywgbWFueSkge1xuICAgIGNvbnN0IGNmZyA9IGNmZ0luXG4gICAgaWYgKCFjZmcueGF4aXMpXG4gICAgICBjZmcueGF4aXMgPSB7IG1vZGU6ICd0aW1lJywgY29sb3I6IChjZmcuZGFyayA/ICcjY2NjJyA6ICcjNTQ1NDU0JykgfVxuICAgIGlmICghY2ZnLnlheGlzKVxuICAgICAgY2ZnLnlheGlzID0geyBjb2xvcjogKGNmZy5kYXJrID8gJyNjY2MnIDogJyM1NDU0NTQnKSB9XG5cbiAgICBsZXQgYmFyV2lkdGhcbiAgICBpZiAobWFueSAmJiBjZmcuYmFyV2lkdGgpXG4gICAgICBiYXJXaWR0aCA9IGNmZy5iYXJXaWR0aCAqIDEgLy8gKjEgdG8gcGFzcyBsaW50OyBrZWVwcyBsaWtlIGJlbG93OyBhdm9pZCBvYmogZGVzdHJ1Y3R1cmluZ1xuICAgIGVsc2UgaWYgKGNmZy5iYXJXaWR0aClcbiAgICAgIGJhcldpZHRoID0gY2ZnLmJhcldpZHRoICogODY0MDAgKiAxMDAwXG4gICAgZWxzZVxuICAgICAgYmFyV2lkdGggPSAoY2ZnLmRheUJhcnNOb1BvaW50cyA/IDEgOiA3KSAqIDg2NDAwICogMTAwMCAvLyAxZGF5fDF3ZWVrXG5cbiAgICBjZmcuc2VyaWVzID0ge1xuICAgICAgYmFyczoge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICBiYXJXaWR0aCxcbiAgICAgICAgZmlsbDogMC42LFxuICAgICAgICBjb2xvcjogJyMzODVDNzQnLFxuICAgICAgfSxcbiAgICAgIGNvbG9yOiAnIzM4NUM3NCcsXG4gICAgICBwb2ludHM6IHsgc2hvdzogIWNmZy5kYXlCYXJzTm9Qb2ludHMgfSxcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5ncmlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY2ZnLmdyaWQgPSB7XG4gICAgICAgIGJvcmRlckNvbG9yOiAoY2ZnLmRhcmsgPyAnIzMzMycgOiAnI2FhYScpLFxuICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGxvZyhjZmcuc2VyaWVzLmJhcnMpXG5cblxuICAgIGlmIChjZmcuZGFyaylcbiAgICAgIGNmZy5ncmlkLmJhY2tncm91bmRDb2xvciA9ICcjMDAyYjM2J1xuXG4gICAgaWYgKCFjZmcudGlwKVxuICAgICAgY2ZnLnRpcCA9IHt9XG4gICAgaWYgKCFjZmcudGlwLmlkKVxuICAgICAgY2ZnLnRpcC5pZCA9IGlkXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5HcmFwaFByaW9ySW5kZXggPT09ICd1bmRlZmluZWQnKVxuICAgICAgd2luZG93LkdyYXBoUHJpb3JJbmRleCA9IHt9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgY29uc3QgYXJ5ID0gKG1hbnkgPyBwdHMgOiAodHlwZW9mIHB0cy5kYXRhID09PSAndW5kZWZpbmVkJyA/IFt7IGRhdGE6IHB0cyB9XSA6IFtwdHNdKSlcbiAgICBpZiAoY2ZnLmRheUJhcnNOb1BvaW50cyAgJiYgICFjZmcubm9MYWJlbClcbiAgICAgIGFyeVswXS5sYWJlbCA9IGlkXG5cbiAgICBjb25zdCBzZWxpZCA9IGAjJHtpZH1gXG4gICAgJC5wbG90KCQoc2VsaWQpLCBhcnksIGNmZylcblxuICAgIGlmICghZm10X2ZuKVxuICAgICAgcmV0dXJuXG5cbiAgICAkKHNlbGlkKS5iaW5kKCdwbG90aG92ZXInLCAoZXZlbnQsIHBvcywgaXRlbSkgPT4ge1xuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHdpbmRvdy5HcmFwaFByaW9ySW5kZXhbaWRdID0gLTY2NlxuICAgICAgICAkKCcjZ3RpcCcpLnJlbW92ZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5HcmFwaFByaW9ySW5kZXhbaWRdICE9PSBpdGVtLmRhdGFJbmRleCkge1xuICAgICAgICB3aW5kb3cuR3JhcGhQcmlvckluZGV4W2lkXSA9IGl0ZW0uZGF0YUluZGV4XG4gICAgICAgICQoJyNndGlwJykucmVtb3ZlKClcblxuICAgICAgICBjb25zdCBzdHIgPSBmbXRfZm4oaXRlbS5kYXRhcG9pbnRbMF0sIGl0ZW0uZGF0YXBvaW50WzFdKVxuICAgICAgICBjb25zdCAkZ3JhZiA9ICQoc2VsaWQpXG4gICAgICAgIGNvbnN0IG9mZiA9ICRncmFmLm9mZnNldCgpXG5cbiAgICAgICAgLy8gZmlndXJlIG91dCB3aGljaCB3YXkgZnJvbSB0aGUgXCJkb3RcIi9iYXIgaW4gdGhlIGdyYXBoIHRoZVxuICAgICAgICAvLyB0b29sdGlwIHNob3VsZCBnbyAtLSBsZWZ0IG9yIHJpZ2h0IVxuICAgICAgICBsZXQgeyBwZWdUbyB9ID0gY2ZnLnRpcFxuICAgICAgICBpZiAoIXBlZ1RvKVxuICAgICAgICAgIHBlZ1RvID0gKChwb3MucGFnZVggLSBvZmYubGVmdCkgPiAoJGdyYWYud2lkdGgoKSAvIDIpID8gJ3JpZ2h0JyA6ICdsZWZ0JylcblxuICAgICAgICBjb25zdCBwZWdUb1ZhbCA9IChwZWdUbyA9PT0gJ3JpZ2h0JyA/XG4gICAgICAgICAgKCRncmFmLndpZHRoKCkgLSAocG9zLnBhZ2VYIC0gb2ZmLmxlZnQgLSAyMCkpIDpcbiAgICAgICAgICAocG9zLnBhZ2VYIC0gb2ZmLmxlZnQpICsgMjApXG4gICAgICAgIGxvZyhwZWdUbywgcGVnVG9WYWwpXG5cbiAgICAgICAgJChgIyR7Y2ZnLnRpcC5pZH1gKS5hcHBlbmQoYFxuPGRpdiBpZD1cImd0aXBcIiBjbGFzcz1cInJvdW5kYm94MlwiXG5zdHlsZT1cInRvcDoke3Bvcy5wYWdlWSAtIG9mZi50b3B9cHg7ICR7cGVnVG99OiR7cGVnVG9WYWx9cHhcIj4ke3N0cn08L2Rpdj5gKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIC8vIFVzZSBhIGNvbG9yIHNhbXBsaW5nIDNyZCBwYXJ0eSBwaWVjZSBvZiBjb2RlLCB0byBmaW5kIHRoZSAxc3QvcHJpbWFyeSBpbWFnZSBpbiB0aGUgXCJ3ZWxjb21lXCJcbiAgLy8gYXJlYSwgYW5kIGZpbmQgdGhlIFwiZG9taW5hbnQgY29sb3JcIi4gIChpbnRlcm5hbGx5LCB1c2VzIGNhbnZhcyB0byBjb2xvciBzYW1wbGUpLlxuICAvLyBBZGp1c3QgdGV4dC9mb3JlZ3JvdW5kIGNvbG9yIGFzIHdlbGwgYXMgYW55IFwic2VsZWN0ZWQgdGFiXCIgYmFja2dyb3VuZCBjb2xvci5cbiAgLy8gTk9UIFVTRUQgQU5ZTU9SRSAtLSBHT05FIFNFUlZFUlNJREUhXG4gIHN0YXRpYyB3ZWxjb21lX3JlY29sb3IoZSkge1xuICAgIGlmICh0eXBlb2YgQ29sb3JUaGllZiA9PT0gJ3VuZGVmaW5lZCcgIHx8ICAhZS5sZW5ndGgpXG4gICAgICByZXR1cm5cblxuICAgIGlmIChBSlMud2VsY29tZV9yZWNvbG9yZWQpXG4gICAgICByZXR1cm5cbiAgICBBSlMud2VsY29tZV9yZWNvbG9yZWQgPSB0cnVlXG5cbiAgICBjb25zdCBpbWcgPSAkKGUpWzBdXG4gICAgbG9nKCd3ZWxjb21lX3JlY29sb3InLCBpbWcuc3JjKVxuXG4gICAgLyogZ2xvYmFsIENvbG9yVGhpZWYgKi9cbiAgICBjb25zdCBjdCA9IG5ldyBDb2xvclRoaWVmKClcbiAgICBjb25zdCBwYWxldHRlID0gY3QuZ2V0UGFsZXR0ZShpbWcsIDUpXG4gICAgbG9nKHBhbGV0dGUpXG4gICAgaWYgKCFwYWxldHRlKVxuICAgICAgcmV0dXJuXG4gICAgY29uc3QgZG9taW5hbnRDb2xvclJHQiA9IHBhbGV0dGVbMF0gLy8gMyBlbGVtZW50IGFycmF5IVxuXG4gICAgaWYgKCFkb21pbmFudENvbG9yUkdCKVxuICAgICAgcmV0dXJuXG4gICAgbG9nKGRvbWluYW50Q29sb3JSR0IpXG5cbiAgICAvLyBpZiBkb21pbmFudCBjb2xvciBpcyB1aCwga2luZGEgaW4gdGhlIGxpZ2h0ZXIgcmFuZ2UgLS0gdHh0IHNob3VsZCBiZSBibGFja1xuICAgIGNvbnN0IGF2Z1ZhbCA9XG4gICAgICBNYXRoLnJvdW5kKCQoZG9taW5hbnRDb2xvclJHQikubWFwKChrLCB2KSA9PiB2KS50b0FycmF5KCkucmVkdWNlKChhLCBiKSA9PiBhICsgYikgL1xuICAgICAgICBkb21pbmFudENvbG9yUkdCLmxlbmd0aClcbiAgICBjb25zdCBjb2xvciA9IChhdmdWYWwgPj0gMTI4ID8gJ2JsYWNrJyA6ICd3aGl0ZScpXG4gICAgbG9nKCdhdmdWYWwnLCBhdmdWYWwpXG5cbiAgICAkKCcud2VsY29tZScpLmNzcyh7XG4gICAgICBjb2xvcixcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogYHJnYigke2RvbWluYW50Q29sb3JSR0Iuam9pbignLCcpfSlgLFxuICAgIH0pXG4gICAgJCgnLndlbGNvbWUgLnN0ZWFsdGg6bm90KC50YWJieSAuc3RlYWx0aCknKS5jc3MoeyBjb2xvciB9KVxuICB9XG5cblxuICAvKipcbiAgICogVXNlIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gdG8gbWFrZSBhbiBpbWFnZSwgZGl2LCBldGMgZm9jdXNhYmxlLCBhbmQgJ2NsaWNrJy1hYmxlLlxuICAgKiBGdW5jdGlvbiBhZGRzIGEgdGFiaW5kZXggZm9yICdmb2N1cycgYW5kIGxpc3RlbnMgZm9yIGEga2V5ZG93bi9rZXlwcmVzcyBvZiBlbnRlciBvciBzcGFjZSxcbiAgICogdGhlbiB0cmlnZ2VycyBhIGNsaWNrLlxuICAgKlxuICAgKiB2YXIgZWxlbWVudDogU3RyaW5nIHVzZWQgZm9yIGpxdWVyeSBjYXB0dXJlIG9mIG5vbi1hY2Vzc2libGUgJiBtb3VzZS1vbmx5IGVsZW1lbnQuXG4gICAqICAgIGV4OiBcIiNBbWF6b25QYXlCdXR0b24gaW1nXCJcbiAgICogVHJpZ2dlcnMgJ2NsaWNrJyBvbiBlbGVtZW50LlxuICAgKi9cbiAgc3RhdGljIG1ha2VNb3VzZUVsZW1lbnRBY2Nlc3NpYmxlKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLmF0dHIoJ3RhYmluZGV4JywgJzAnKS5vbigna2V5cHJlc3Mga2V5ZG93bicsIGZ1bmN0aW9uIG1ha2VNb3VzZUVsZW1lbnRBY2Nlc3NpYmxlR28oZSkge1xuICAgICAgaWYgKGUudHlwZSAhPT0gJ2NsaWNrJykge1xuICAgICAgICBjb25zdCBjb2RlID0gKGUua2V5Q29kZSB8fCBlLndoaWNoKVxuICAgICAgICBjb25zdCBrX3NwYWNlID0gMzIgLy8gc3BhY2UgYmFyIHByZXNzZWRcbiAgICAgICAgY29uc3Qga19lbnRlciA9IDEzIC8vIGVudGVyIGtleSBwcmVzc2VkXG4gICAgICAgIGlmIChba19zcGFjZSwga19lbnRlcl0uaW5kZXhPZihjb2RlKSAhPT0gLTEpXG4gICAgICAgICAgJCh0aGlzKS5jbGljaygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgLy8gdXNlIHNvbWV0aGluZyBsaWtlICcsJyBmb3IgdGhlIG9wdGlvbmFsIDNyZCBhcmcgaWYgeW91IHdhbnQgdG8gYWxsb3dcbiAgLy8gZm9yIGFwcGVuZGluZyAyKyB2YWx1ZXMgaW50byBhIGZpZWxkLCBldGMuLi5cbiAgc3RhdGljIGF1dG9jb21wbGV0ZShzZWxlY3Rvciwgb3B0aW9ucywgbXVsdGlWYWxTcGxpdENoYXIpIHtcbiAgICAkKHNlbGVjdG9yKS5hdXRvY29tcGxldGUoe1xuICAgICAgYXBwZW5kVG86ICcjYXV0b2NvbXBsZXRlZScsXG4gICAgICBtaW5MZW5ndGg6IDAsXG4gICAgICBzb3VyY2U6IChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBkZWxlZ2F0ZSBiYWNrIHRvIGF1dG9jb21wbGV0ZSwgYnV0IGV4dHJhY3QgdGhlIGxhc3QgdGVybVxuICAgICAgICByZXNwb25zZSgkLnVpLmF1dG9jb21wbGV0ZS5maWx0ZXIob3B0aW9ucywgcmVxdWVzdC50ZXJtLnNwbGl0KC8sXFxzKi8pLnBvcCgpKSlcbiAgICAgIH0sXG4gICAgICBmb2N1czogKCkgPT4gZmFsc2UsIC8vIHByZXZlbnQgdmFsdWUgaW5zZXJ0ZWQgb24gZm9jdXNcbiAgICAgIHNlbGVjdDogZnVuY3Rpb24gYXV0b2NvbXBsZXRlX3NlbGVjdChldmVudCwgdWkpIHtcbiAgICAgICAgaWYgKG11bHRpVmFsU3BsaXRDaGFyKSB7XG4gICAgICAgICAgY29uc3QgdGVybXMgPSB0aGlzLnZhbHVlLnNwbGl0KC8sXFxzKi8pXG4gICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGlucHV0XG4gICAgICAgICAgdGVybXMucG9wKClcbiAgICAgICAgICAvLyBhZGQgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgICAgICB0ZXJtcy5wdXNoKHVpLml0ZW0udmFsdWUpXG4gICAgICAgICAgLy8gYWRkIHBsYWNlaG9sZGVyIHRvIGdldCB0aGUgY29tbWEtYW5kLXNwYWNlIGF0IHRoZSBlbmRcbiAgICAgICAgICB0ZXJtcy5wdXNoKCcnKVxuICAgICAgICAgIHRoaXMudmFsdWUgPSB0ZXJtcy5qb2luKCcsICcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHVpLml0ZW0udmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG5cbiAgc3RhdGljIGFkZE5vdGVzKGtpbmQsIGh0bSkge1xuICAgIC8vIGZsYWcgbGlzdHMgaGF2ZSBtdWx0aXBsZSB1c2VycyBzbyB0aGUgXCJyaWdodHNcIiB0aGVyZVxuICAgIC8vIGlzIGEgYml0IHRvIHRob3JueSByaWdodCBub3cgc28gZm9yIHNpbXBsaWNpdHkgYW5kXG4gICAgLy8gdGhlIG1haW4gZmVhdHVyZSB0byBnbyBsaXZlLCBza2lwcGluZyB0aGVtLi4uXG4gICAgaWYgKGtpbmQgIT09ICdmYXZvcml0ZScgICYmICBraW5kICE9PSAnbGlzdCcpXG4gICAgICByZXR1cm4gaHRtXG5cbiAgICBpZiAoIWh0bSAgJiYgICQoJ2JvZHknKS5oYXNDbGFzcygnZWRpdGFibGUnKSlcbiAgICAgIEFKUy5hZGRpbmdOb3Rlc0tpbmQgPSBraW5kXG4gICAgaWYgKCFBSlMuYWRkaW5nTm90ZXNLaW5kKVxuICAgICAgcmV0dXJuIGh0bVxuXG4gICAgQUpTLmFkZE5vdGVIVE0gPSAkKGBcbjxkaXYgY2xhc3M9XCJub3RlXCI+XG4gIDxzcGFuIGNsYXNzPVwiZWRpdFwiPlxuICAgIDxhIGhyZWY9XCIjXCIgb25jbGljaz1cInJldHVybiBBSlMuZWRpdE5vdGUodGhpcylcIj5BZGQgYSBOb3RlPC9hPlxuICA8L3NwYW4+XG48L2Rpdj5gKVxuXG4gICAgbG9nKCdhZGROb3RlcycpXG5cbiAgICAvLyBOZXh0LCB3ZSBhcmUgZ29pbmcgdG8gZG8gYSBnbG9iYWwgRE9NIHNlYXJjaCBhbmQgaW5zZXJ0ICh3aGVyZSBuZWVkZWQpXG4gICAgLy8gZm9yIGJhc2ljYWxseSB0aGUgZmlyc3QgcGFnZSBsb2FkLiAgQnV0IHdlJ3JlIGFsc28gY2FsbGVkIGluIFwiaW5maW5pdGUgc2Nyb2xsXCJcbiAgICAvLyBwYWdlIDIrIG1vZGUsIGFuZCBpbiB0aGF0IGNhc2UsIHdlIHdhbnQgdG8gbW9kaWZ5IChKVVNUKSB0aGUgSFRNIHdoZW4gdGhhdCdzXG4gICAgLy8gZm9yIHBhZ2UgMisgYW5kIGFib3V0IHRvIGJlIGluc2VydGVkIGludG8gdGhlIERPTSwgKmluc3RlYWQqIG9mIGFub3RoZXIgZ2xvYmFsXG4gICAgLy8gRE9NIHNlYXJjaC5cbiAgICBpZiAoaHRtKSB7XG4gICAgICAvLyAoQmFzaWNhbGx5IHdlIGFyZSBub3cgZG9pbmcgcGFnZSAyKyBpbiBpbmZpbml0ZSBzY3JvbGwpXG4gICAgICAvLyBPSyB0aGlzIGlzIHNvcnRhIHdpbGQvbWF5YmUgbm90IG9idmkuLi5hXG4gICAgICAvLyAoS2luZGEgbGlrZSBhIGpRdWVyeSByZXBsYWNlX3JlZ2V4cCgpLi4uKVxuICAgICAgLy8gVGFrZSB0aGUgKnN0cmluZyogb2YgSFRNIHdlIGFyZSBwYXNzZWQsIGNvbnZlcnQgaXQgdG8gYSBcImZpbmRhYmxlXCIgalF1ZXJ5IG9iamVjdFxuICAgICAgLy8gdGhlbiBpbnNlcnRkIFwiYWRkTm90ZUhUTVwiIHdoZXJlIG5lZWRlZC5cbiAgICAgIC8vIEZpbmFsbHksIGNvbnZlcnQgYmFjayB0byBzdHJpbmcgYW5kIHJldHVybiB0aGlzIG1vZGlmaWVkIHZlcnNpb24gdG8gY2FsbGVyLlxuICAgICAgY29uc3QgJGh0bSA9ICQoYDxkaXY+JHtodG19PC9kaXY+YClcbiAgICAgICRodG0uZmluZCgnLmRldGFpbHMtaWEgLkMyMzQ6bm90KDpoYXMoXCIubm90ZVwiKSknKS5hcHBlbmQoQUpTLmFkZE5vdGVIVE0pXG4gICAgICByZXR1cm4gJGh0bS5odG1sKClcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIGluaXRpYWwgcGFnZSBsb2FkXG4gICAgLy8gTk9URTogcmV0dXJuIHZhbHVlIGlycmVsZXZhbnQgaGVyZVxuICAgIHJldHVybiAkKCcuZGV0YWlscy1pYSAuQzIzNDpub3QoOmhhcyhcIi5ub3RlXCIpKScpLmFwcGVuZChBSlMuYWRkTm90ZUhUTSlcbiAgfVxuXG5cbiAgc3RhdGljIGVkaXROb3RlKGUpIHtcbiAgICBjb25zdCAkZSA9ICQoZSlcbiAgICBjb25zdCBpZGVudGlmaWVyID0gJGUucGFyZW50cygnLmRldGFpbHMtaWEnKS5wcmV2KCkuYXR0cignZGF0YS1pZCcpXG4gICAgaWYgKCFpZGVudGlmaWVyKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCAkbm90ZSA9ICRlLnBhcmVudHMoJy5ub3RlJylcblxuICAgIGxldCB2YWwgPSAnJ1xuICAgIGlmICgkZS50ZXh0KCkgPT09ICdlZGl0Jykge1xuICAgICAgdmFsID0gJG5vdGUuZmluZCgnc3BhbjpmaXJzdCcpLnRleHQoKVxuICAgICAgdmFsID0gdmFsLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICB9XG4gICAgJG5vdGUuaGlkZSgpXG4gICAgJG5vdGUucGFyZW50KCkuYXBwZW5kKCQoYFxuPGZvcm0gY2xhc3M9XCJmb3JtIGZvcm0taG9yaXpvbnRhbCBub3RlXCIgcm9sZT1cImZvcm1cIiBvbnN1Ym1pdD1cIkFKUy5lZGl0ZWROb3RlKHRoaXMpO3JldHVybiBmYWxzZVwiPlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMiBjb2wtbWQtMSBjb2wtbGctMVwiPlxuICAgICAgPGI+Tm90ZTo8L2I+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMCBjb2wtbWQtNiBjb2wtbGctN1wiPlxuICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNvbW1lbnRzXCI+JHt2YWx9PC90ZXh0YXJlYT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeCB2aXNpYmxlLXhzLWJsb2NrXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4IHZpc2libGUteHMtYmxvY2tcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC01IGNvbC1sZy00IGJ0bnNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJBSlMuZWRpdGVkTm90ZSh0aGlzKVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi14c1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJBSlMuZWRpdGVkTm90ZSh0aGlzKVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1jYW5jZWwgYnRuLXhzXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiQUpTLmVkaXRlZE5vdGUodGhpcylcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi14cyAke3ZhbCA/ICcnIDogJ2hpZGRlbid9XCI+UmVtb3ZlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPmApKVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgc3RhdGljIGVkaXRlZE5vdGUoZSkge1xuICAgIGxldCAkZSA9ICQoZSlcblxuICAgIGNvbnN0IGlkZW50aWZpZXIgPSAkZS5wYXJlbnRzKCcuZGV0YWlscy1pYScpLnByZXYoKS5hdHRyKCdkYXRhLWlkJylcbiAgICBpZiAoIWlkZW50aWZpZXIpXG4gICAgICByZXR1cm5cblxuICAgIC8vIGlmIHVzZXIgaGl0IFtyZXR1cm5dIGFuZCBzdWJtaXR0ZWQgZm9ybSwgZXRjLlxuICAgIC8vIHRyZWF0IGl0IGxpa2UgdGhleSBoaXQgdGhlIFtTYXZlXSBidXR0b25cbiAgICBpZiAoJGUuaXMoJ2Zvcm0nKSlcbiAgICAgICRlID0gJGUuZmluZCgnYnV0dG9uOmNvbnRhaW5zKFwiU2F2ZVwiKScpXG5cbiAgICBjb25zdCBhY3Rpb24gPSAkZS50ZXh0KClcbiAgICBjb25zdCAkcGFyZW50ID0gJGUucGFyZW50cygnLm5vdGUnKVxuICAgIGNvbnN0ICRvcmlnTm90ZSA9ICRwYXJlbnQucHJldigpXG5cbiAgICBpZiAoYWN0aW9uID09PSAnU2F2ZScgIHx8ICBhY3Rpb24gPT09ICdSZW1vdmUnKSB7XG4gICAgICBjb25zdCB2YWwgID0gKGFjdGlvbiA9PT0gJ1NhdmUnID8gJHBhcmVudC5maW5kKCd0ZXh0YXJlYScpLnZhbCgpIDogJycpXG4gICAgICBjb25zdCAgdXJsID0gJy9ib29rbWFya3MucGhwP2lkZW50aWZpZXI9Jy5jb25jYXQoXG4gICAgICAgIGlkZW50aWZpZXIsICcma2luZD0nLCBBSlMuYWRkaW5nTm90ZXNLaW5kLFxuICAgICAgICAnJmFkZF9jb21tZW50PScsIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLFxuICAgICAgKVxuICAgICAgbG9nKCdnZXQgJywgdXJsKVxuICAgICAgJC5nZXQodXJsLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bSA9ICh2YWwgP1xuICAgICAgICAgIGBOb3RlOiBcIjxzcGFuPiR7dmFsLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyl9PC9zcGFuPlwiXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJlZGl0XCI+KDxhIGhyZWY9XCIjXCIgb25jbGljaz1cInJldHVybiBBSlMuZWRpdE5vdGUodGhpcylcIj5lZGl0PC9hPik8L3NwYW4+YCA6XG4gICAgICAgICAgQUpTLmFkZE5vdGVIVE0uaHRtbCgpKVxuICAgICAgICAvLyBzaG93IHRoZSBcIk5vdGU6IC4uLlwiIHNlY3Rpb24gYWdhaW4gKHdpdGggbm93IGFwcHJvcHJpYXRlbHkgdXBkYXRlZCBpbm5hcmRzKVxuICAgICAgICAkb3JpZ05vdGUuaHRtbChodG0pLnNob3coKVxuICAgICAgICAkcGFyZW50LnJlbW92ZSgpIC8vIGxvc2UgdGhlIGZvcm1cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gZWxzZSBDYW5jZWwgZG9lcyBub3RoaW5nIGJ1dCBiZWxvdy4uLlxuXG4gICAgJG9yaWdOb3RlLnNob3coKSAvLyBzaG93IHRoZSBcIk5vdGU6IC4uLlwiIHNlY3Rpb24gYWdhaW5cbiAgICAkcGFyZW50LnJlbW92ZSgpIC8vIGxvc2UgdGhlIGZvcm1cbiAgfVxuXG5cbiAgc3RhdGljIHRodW1iemlsbGEoaWQpIHtcbiAgICAvKiBnbG9iYWwgIFRWMiAgVFYzICovXG4gICAgLy8gY292ZXIgZW50aXJlIHNjcmVlbiB3aXRoIG5ldyBkaXYuLi5cbiAgICBjb25zdCBUViA9ICQoJ2JvZHknKS5oYXNDbGFzcygndHYnKVxuICAgIGlmIChUVilcbiAgICAgIFRWMi51bnBsYXkoJ3RodW1iemlsbGEnKVxuXG4gICAgLy8gZ2V0IGxpc3Qgb2YgdGh1bWJzXG4gICAgbGV0IGh0bSA9ICcnXG4gICAgJChBSlMudGh1bWJ6aWxsYXMpLmVhY2goKGtleSwgdmFsKSA9PiB7XG4gICAgICBjb25zdCBzdGFydCA9IHBhcnNlSW50KHZhbCwgMTApXG4gICAgICBpZiAoVFYpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRlbmQgPSBgL3N0YXJ0LyR7c3RhcnR9L2VuZC8ke3N0YXJ0ICsgVFYzLkNMSVBfU0VDX01BWDJ9YFxuICAgICAgICBodG0gKz0gYDxhIG9uY2xpY2s9XCIkKCcjb3BzY3JlZW4xTScpLmZhZGVPdXQoJ3Nsb3cnKTsgVFYyLnNlZWtVUkwoJyR7c3RhcnRlbmR9JylcIiBocmVmPVwiJHtzdGFydGVuZH1cIj5gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsb2NORVcgPSBgL2RldGFpbHMvJHtpZH0mc3RhcnQ9JHtzdGFydH1gXG4gICAgICAgIGh0bSArPSBgPGEgb25jbGljaz1cIiQoJyNvcHNjcmVlbjFNJykuZmFkZU91dCgnc2xvdycpOyByZXR1cm4gUGxheS5zZWVrKHRoaXMpXCIgaHJlZj1cIiR7bG9jTkVXfVwiPmBcbiAgICAgIH1cbiAgICAgIGh0bSArPSBgPGltZyBzcmM9XCIvZG93bmxvYWQvJHtpZH0vJHtpZH0udGh1bWJzLyR7aWR9XyR7dmFsfS5qcGdcIi8+PC9hPmBcbiAgICB9KVxuXG4gICAgaWYgKGh0bSA9PT0gJycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tYWxlcnRcbiAgICAgIGFsZXJ0KCdjb21pbmcgc29vbiEnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgJCgnI29wc2NyZWVuMU0nKS5yZW1vdmUoKVxuICAgICQoJ2JvZHknKS5wcmVwZW5kKCQoJzxkaXYgLz4nKS5hdHRyKHsgaWQ6ICdvcHNjcmVlbjFNJyB9KSlcblxuICAgIGNvbnN0ICRpbWdzID0gJCgnPGRpdi8+JykuYXR0cih7IGlkOiAndGh1bWJ6aWxsYScgfSkuaHRtbChgPGRpdj4ke2h0bX08L2Rpdj5gKVxuICAgICRpbWdzLmFwcGVuZFRvKCcjb3BzY3JlZW4xTScpXG4gICAgJCgnI29wc2NyZWVuMU0nKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJykuc2hvdygpXG4gICAgY29uc3Qgd2luSCA9ICQod2luZG93KS5oZWlnaHQoKSArIChBSlMuaW9zID8gNjAgOiAwKSAvLyBwbHVzIGlPUyBibGVhaFxuICAgIGZvciAobGV0IHcgPSAxNjA7IHcgPj0gMTA7IHcgLT0gMTApIHtcbiAgICAgIGNvbnN0IGggPSBNYXRoLnJvdW5kKHcgKiAoMTEwIC8gMTYwLjApKVxuICAgICAgbG9nKCdUUllJTkcnLCB3LCAneCcsIGgpXG4gICAgICAkKCcjdGh1bWJ6aWxsYSBpbWcnKS5jc3MoeyB3aWR0aDogdywgaGVpZ2h0OiBoIH0pXG4gICAgICBpZiAoJCgnI3RodW1iemlsbGEgaW1nOmxhc3QnKS5vZmZzZXQoKS50b3AgKyBoIDw9IHdpbkgpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgJCgnI3RodW1iemlsbGEgZGl2JykuY2VudGVyKClcbiAgICAkKCcjb3BzY3JlZW4xTScpLmhpZGUoKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpLmZhZGVJbignc2xvdycpXG4gICAgICAub25lKCdjbGljay5vcHNjcmVlbjFNLm5peGVyJywgKCkgPT4gJCgnI29wc2NyZWVuMU0nKS5mYWRlT3V0KCdzbG93JykpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKiBXYXliYWNrIE1hY2hpbmUgZm9ybSB0eXBlLWFoZWFkIHNldHVwOiBpdCBwcmVzZW50cyBhIGxpc3Qgb2Ygc2l0ZXNcbiAgICAgIG1hdGNoaW5nIHRoZSB0ZXh0IGFzIHVzZXIgdHlwZXMuICovXG4gIHN0YXRpYyBuYXZfdG9waGF0X3diX3NldHVwKCkge1xuICAgIC8vIENvbmZpZ3VyYXRpb25cbiAgICBjb25zdCBXQVlCQUNLID0gJ2h0dHBzOi8vd2ViLmFyY2hpdmUub3JnJ1xuICAgIGNvbnN0IEhPU1RTX0VORFBPSU5UID0gICBgJHtXQVlCQUNLfS9fX3diL3NlYXJjaC9ob3N0P3E9YFxuICAgIGNvbnN0IEFOQ0hPUlNfRU5EUE9JTlQgPSBgJHtXQVlCQUNLfS9fX3diL3NlYXJjaC9hbmNob3I/cT1gXG4gICAgY29uc3QgUkVESVJFQ1RfVVJMID0gICAgIGAke1dBWUJBQ0t9L3dlYi8qL2BcbiAgICBjb25zdCBSRURJUkVDVF9TRUFSQ0ggPSAgYCR7V0FZQkFDS30vd2ViLyovYFxuXG4gICAgZnVuY3Rpb24gc2VhcmNoX29yX2NhbGVuZGFyKHF1ZXJ5KSB7XG4gICAgICBpZiAocXVlcnkuaW5kZXhPZignaHR0cDovLycpID09PSAwIHx8XG4gICAgICAgICAgcXVlcnkuaW5kZXhPZignaHR0cHM6Ly8nKSA9PT0gMCB8fFxuICAgICAgICAgIHF1ZXJ5Lm1hdGNoKC9bXFx3Ll17MiwyNTZ9XFwuW2Etel17Miw0fS9naSkpXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBSRURJUkVDVF9VUkwgKyBxdWVyeVxuICAgICAgZWxzZVxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gUkVESVJFQ1RfU0VBUkNIICsgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KVxuICAgIH1cblxuICAgIGNvbnN0ICRpbnB1dCA9ICQoJyNuYXYtd2ItdXJsJylcbiAgICBjb25zdCAkZm9ybSA9ICRpbnB1dC5wYXJlbnQoJ2Zvcm0nKVxuICAgICRmb3JtLnN1Ym1pdCgoZSkgPT4ge1xuICAgICAgQUpTLmZpcmVBbmFseXRpY3NUcmFja2luZ0V2ZW50KCdIb21lUGFnZVdheWJhY2snLCAnU2VhcmNoRm9ybScpXG4gICAgICBjb25zdCBxdWVyeSA9ICRpbnB1dC52YWwoKVxuICAgICAgc2VhcmNoX29yX2NhbGVuZGFyKHF1ZXJ5KVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICAgICRpbnB1dC5vbignZm9jdXMgaW5wdXQgcGFzdGUnLCAoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mICRpbnB1dC50eXBlYWhlYWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAnL2luY2x1ZGVzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtMy10eXBlYWhlYWQvYm9vdHN0cmFwMy10eXBlYWhlYWQubWluLmpzJyxcbiAgICAgICAgICBkYXRhVHlwZTogJ3NjcmlwdCcsXG4gICAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgIH0pLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICRpbnB1dC50eXBlYWhlYWQoe1xuICAgICAgICAgICAgc291cmNlOiAocXVlcnksIHByb2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgJGlucHV0LmZvY3VzKCkgLy8gYnVnZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9iYXNzam9ic2VuL0Jvb3RzdHJhcC0zLVR5cGVhaGVhZC9pc3N1ZXMvMTUwI2lzc3VlY29tbWVudC0xOTc5NDk4OTlcbiAgICAgICAgICAgICAgcmV0dXJuICQuZ2V0KEhPU1RTX0VORFBPSU5UICsgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEuaG9zdHMgIT09ICd1bmRlZmluZWQnICYmIGRhdGEuaG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MoZGF0YS5ob3N0cylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhLmlzVXJsICE9PSAndW5kZWZpbmVkJyAmJiAgZGF0YS5pc1VybCA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5leGNsdWRlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzKFt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogcXVlcnksXG4gICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJC5nZXQoQU5DSE9SU19FTkRQT0lOVCArIGVuY29kZVVSSUNvbXBvbmVudChxdWVyeSksIChkYXRhMikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMiAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YTIubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MoZGF0YTIuc2xpY2UoMCwgNSkpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXRjaGVyOiAoKSA9PiB0cnVlLFxuICAgICAgICAgICAgZGlzcGxheVRleHQ6IGl0ZW0gPT4gaXRlbS5kaXNwbGF5X25hbWUsXG4gICAgICAgICAgICBhdXRvU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGF5OiA0MDAsXG4gICAgICAgICAgICBmaXRUb0VsZW1lbnQ6IGZhbHNlLCAvKiBub3QgZ29vZCB3aXRoIGxvbmcgVVJMcyAqL1xuICAgICAgICAgICAgbWluTGVuZ2h0OiAzLFxuICAgICAgICAgICAgaXRlbXM6IDgsXG4gICAgICAgICAgfSkuY2hhbmdlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSAkaW5wdXQudHlwZWFoZWFkKCdnZXRBY3RpdmUnKVxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudC5kaXNwbGF5X25hbWUgPT09ICRpbnB1dC52YWwoKSlcbiAgICAgICAgICAgICAgJGZvcm0uc3VibWl0KClcbiAgICAgICAgICB9KS5vbigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEwIHx8IGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICAgIEFKUy5maXJlQW5hbHl0aWNzVHJhY2tpbmdFdmVudCgnSG9tZVBhZ2VXYXliYWNrJywgJ1NlYXJjaEZvcm0nKVxuICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9ICRpbnB1dC52YWwoKVxuICAgICAgICAgICAgICBzZWFyY2hfb3JfY2FsZW5kYXIocXVlcnkpXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgdG8gb3BlbiBhIHBvcHVwIHdpdGggSlNcbiAgICogQHBhcmFtIGludCB3aWR0aFxuICAgKiBAcGFyYW0gaW50IGhlaWdodFxuICAgKiBAcGFyYW0gc3RyaW5nIGhyZWZcbiAgICovXG4gIHN0YXRpYyBvcGVuUG9wdXAod2lkdGgsIGhlaWdodCwgaHJlZikge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgc2Nyb2xsYmFyczogJ3llcycsXG4gICAgICByZXNpemFibGU6ICd5ZXMnLFxuICAgICAgdG9vbGJhcjogJ25vJyxcbiAgICAgIGRpcmVjdG9yaWVzOiAnbm8nLFxuICAgICAgbG9jYXRpb246ICd5ZXMnLFxuICAgICAgbWVudWJhcjogJ25vJyxcbiAgICAgIHN0YXR1czogJ3llcycsXG4gICAgfVxuXG4gICAgLy8gT3B0aW9ucyBtdXN0IGJlIGV4cHJlc3NlZCBhcyBjb21tYS1zZXBhcmF0ZWQga2V5LXZhbHVlIHBhaXJzLlxuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAuZmlsdGVyKGtleSA9PiBwYXJhbXNba2V5XSlcbiAgICAgIC5yZWR1Y2UoKHBhcmFtUGFpcnMsIGtleSkgPT4gcGFyYW1QYWlycy5jb25jYXQoYCR7a2V5fT0ke3BhcmFtc1trZXldfWApLCBbXSlcbiAgICAgIC5qb2luKCcsJylcblxuICAgIHdpbmRvdy5vcGVuKGhyZWYsICdwb3B1cCcsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUmVhY3QgQ29tcG9uZW50LCBhIGxpbmsgdGhhdCBvcGVucyBpdHMgaHJlZiBpbiBhIHBvcHVwIGluc3RlYWQgb2YgdGhlIHNhbWUgd2luZG93LlxuICAgKiBIZWlnaHQgYW5kIHdpZHRoIG9mIHRoZSBwb3B1cCBjYW4gYmUgY3VzdG9taXplZCB2aWEgcHJvcHMuXG4gICAqL1xuICBzdGF0aWMgUG9wdXBMaW5rKHtjaGlsZHJlbiwgaHJlZiwgaGVpZ2h0LCB3aWR0aCwgdGl0bGV9ID0ge30pIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBBSlMub3BlblBvcHVwKHdpZHRoLCBoZWlnaHQsIGhyZWYpO1xuICAgIH1cblxuICAgIC8vIEluY2x1ZGUgaHJlZiBmb3Igc2VtYW50aWNzLlxuICAgIHJldHVybiA8YSBocmVmPXtocmVmfSB0aXRsZT17dGl0bGV9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57Y2hpbGRyZW59PC9hPjtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgQ3JlYXRpdmVDb21tb25zTGljZW5zZUxpbmsgUmVhY3QgY29tcG9uZW50IHRvIGEgRE9NIG5vZGUgd2l0aCB0aGVcbiAgICogYXBwcm9wcmlhdGUgSUQuXG4gICAqL1xuICBzdGF0aWMgc2V0VXBDcmVhdGl2ZUNvbW1vbnNMaWNlbnNlTGluaygpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0aXZlX2NvbW1vbnNfbGljZW5zZV9saW5rX3JlYWN0Jyk7XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoPEFKUy5DcmVhdGl2ZUNvbW1vbnNMaWNlbnNlTGlua1xuICAgICAgaHJlZj17cm9vdC5kYXRhc2V0LmhyZWZ9XG4gICAgICBsaWNlbnNlTmFtZT17cm9vdC5kYXRhc2V0LmxpY2Vuc2VOYW1lfVxuICAgICAgbGljZW5zZVNlbGVjdGVkPXtyb290LmRhdGFzZXQubGljZW5zZVNlbGVjdGVkID09PSAndHJ1ZSd9XG4gICAgLz4sIHJvb3QpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAvKipcbiAgICogU2V0cyB1cCBsaXN0ZW5lcnMgb24gc2VhcmNoIGZvcm1zIHRvIGhhbmRsZSBvcGVuaW5nL2Nsb3NpbmcgdGhlIHNlYXJjaCBvcHRpb25zLlxuICAgKlxuICAgKiBAc2VlIFNlYXJjaE9wdGlvbnMuaW5jXG4gICAqL1xuICBzdGF0aWMgc2V0VXBTZWFyY2hGb3JtcygpIHtcbiAgICBjb25zdCBib2R5ID0gJChkb2N1bWVudC5ib2R5KVxuICAgIGNvbnN0IHNlYXJjaEZvcm1zID0gJCgnLmpzLXNlYXJjaC1mb3JtJylcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYW4gaW5kaXZpZHVhbCBmb3JtLCBpc29sYXRpbmcgaXRzIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBvdGhlciBvbmVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1Ob2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VXBTZWFyY2hGb3JtKGZvcm1Ob2RlKSB7XG4gICAgICBjb25zdCBmb3JtID0gJChmb3JtTm9kZSlcbiAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGZvcm0uZmluZCgnLmpzLXNlYXJjaC1iYXInKVxuICAgICAgY29uc3Qgc2VhcmNoT3B0aW9ucyA9IGZvcm0uZmluZCgnLmpzLXNlYXJjaC1vcHRpb25zJylcbiAgICAgIGNvbnN0IGtlZXBPcGVuV2hlbkNoYW5nZWQgPSBzZWFyY2hPcHRpb25zLmRhdGEoJ2tlZXBPcGVuV2hlbkNoYW5nZWQnKVxuICAgICAgbGV0IGZvcm1DaGFuZ2VkID0gZmFsc2VcblxuICAgICAgLyoqXG4gICAgICAgKiBDYXRjaGVzIHdlYiBzZWFyY2hlcyBhbmQgcmVkaXJlY3RzIHRoZW0gdG8gV2F5YmFjayBNYWNoaW5lLiBUaGUgc2VhcmNoIGZvcm0gbXVzdCBoYXZlIGFcbiAgICAgICAqIFwiZGF0YS13YXliYWNrLW1hY2hpbmUtc2VhcmNoLXVybFwiIGF0dHJpYnV0ZSBzZXQgaW4gb3JkZXIgZm9yIHRoaXMgbWV0aG9kIHRvIHdvcmsgKGFuZCB0aGVcbiAgICAgICAqIG1ldGhvZCBhc3N1bWVzIHRoZSBxdWVyeSBjYW4gYmUgdGFja2VkIG9udG8gdGhlIGVuZCBvZiB0aGlzIFVSTCkuIEZvciBhbGwgb3RoZXIga2luZHMgb2ZcbiAgICAgICAqIHNlYXJjaGVzLCBkb2VzIG5vdGhpbmcuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVkaXJlY3RXYXliYWNrU2VhcmNoZXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB3YXliYWNrTWFjaGluZVNlYXJjaFVybCB9ID0gdGhpcy5kYXRhc2V0XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gJCh0aGlzLmVsZW1lbnRzKVxuICAgICAgICBjb25zdCBjaGVja2VkSW5wdXQgPSBlbGVtZW50cy5maWx0ZXIoJ1tuYW1lPVwic2luXCJdOmNoZWNrZWQnKVxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGVsZW1lbnRzLmZpbHRlcignW25hbWU9XCJzZWFyY2hcIl0nKVxuICAgICAgICBjb25zdCBzaW5WYWx1ZSA9IGNoZWNrZWRJbnB1dC5sZW5ndGggPyBjaGVja2VkSW5wdXRbMF0udmFsdWUgOiAnJ1xuICAgICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHNlYXJjaElucHV0Lmxlbmd0aCA/IHNlYXJjaElucHV0WzBdLnZhbHVlIDogJydcblxuICAgICAgICBpZiAod2F5YmFja01hY2hpbmVTZWFyY2hVcmwgJiYgc2luVmFsdWUgPT09ICdXRUInKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gW1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgICAgIHdheWJhY2tNYWNoaW5lU2VhcmNoVXJsLnJlcGxhY2UoL1xcLyQvLCAnJyksXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZSxcbiAgICAgICAgICBdLmpvaW4oJy8nKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9wZW5PcHRpb25zKCkge1xuICAgICAgICBzZWFyY2hPcHRpb25zXG4gICAgICAgICAgLmFkZENsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsb3NlT3B0aW9ucygpIHtcbiAgICAgICAgc2VhcmNoT3B0aW9uc1xuICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpXG4gICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9zZXMgb3B0aW9ucyBpZiB0aGUgbmV3bHkgZm9jdXNlZCBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlIGZvcm0gYW5kIHRoZSBmb3JtXG4gICAgICAgKiBpcyBjb25maWd1cmVkIHRvIGNsb3NlIHdoZW4gaXQgaXMgbm8gbG9uZ2VyIGFjdGl2ZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRFbGVtZW50IGVsZW1lbnQgYmVpbmcgY2xpY2tlZCBvciByZWNlaXZpbmcgZm9jdXNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gaGFuZGxlRm9jdXNDaGFuZ2UodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRhcmdldEVsZW1lbnQgfHxcbiAgICAgICAgICBmb3JtWzBdLmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpIHx8XG4gICAgICAgICAgKGtlZXBPcGVuV2hlbkNoYW5nZWQgJiYgZm9ybUNoYW5nZWQpXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICBjbG9zZU9wdGlvbnMoKVxuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybS5sZW5ndGgpIHtcbiAgICAgICAgZm9ybS5vbignc3VibWl0JywgcmVkaXJlY3RXYXliYWNrU2VhcmNoZXMpXG5cbiAgICAgICAgaWYgKCFzZWFyY2hPcHRpb25zLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICBib2R5Lm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlRm9jdXNDaGFuZ2UoZXZlbnQudGFyZ2V0KVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBmb3JtXG4gICAgICAgICAgICAub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgZm9ybUNoYW5nZWQgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdmb2N1c291dCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVGb2N1c0NoYW5nZShldmVudC5yZWxhdGVkVGFyZ2V0KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgIHNlYXJjaEJhci5vbignZm9jdXNpbicsICgpID0+IHtcbiAgICAgICAgICAgIG9wZW5PcHRpb25zKClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoRm9ybXMuZWFjaCgoaW5kZXgsIG5vZGUpID0+IHNldFVwU2VhcmNoRm9ybShub2RlKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIHR3by13YXkgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSBtYWluIHBhZ2UgYW5kIGEgQm9va1JlYWRlclxuICAgKiBlbWJlZGRlZCBpbiBhbiA8aWZyYW1lPlxuICAgKlxuICAgKiBEdWUgdG8gdGhlIDxpZnJhbWU+IHRoZSBwYWdlIGFuZCB0aGUgQm9va1JlYWRlciBtdXN0IGNvbW11bmljYXRlIHVzaW5nXG4gICAqIHRoZSBCb29rUmVhZGVyJ3MgVVJMIHBsdWdpbiwgd2hpY2ggc2VuZHMgYW5kIGxpc3RlbnMgZm9yIFwibWVzc2FnZVwiXG4gICAqIGV2ZW50cyB2aWEgd2luZG93LnBvc3RNZXNzYWdlKCkuXG4gICAqL1xuICBzdGF0aWMgc2V0VXBCb29rUmVhZGVySWZyYW1lKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VUeXBlID0gJ2Jvb2tSZWFkZXJGcmFnbWVudENoYW5nZSdcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dHkgaWZyYW1lJylcblxuICAgIC8vIE5vIEJvb2tSZWFkZXIgZW1iZWQsIGFib3J0XG4gICAgaWYgKCFpZnJhbWUpIHJldHVyblxuXG4gICAgLy8gVVJMIHN5bmNpbmcgbm90IGVuYWJsZWQsIGFib3J0XG4gICAgaWYgKCFpZnJhbWUuaGFzQXR0cmlidXRlKCdkYXRhLWJvb2stcmVhZGVyLXN5bmMtdXJscycpKSByZXR1cm5cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgcGFnZSBVUkwgd2l0aG91dCByZWxvYWRpbmcgb3IgYWRkaW5nIHRvIHRoZVxuICAgICAqIGJyb3dzZXIgaGlzdG9yeSB1c2luZyB0aGUgSGlzdG9yeSBBUElcbiAgICAgKlxuICAgICAqIE9uIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB3aW5kb3cuaGlzdG9yeSAobWFpbmx5IE9wZXJhIE1pbmkpLFxuICAgICAqIHRoaXMgaXMgYSBuby1vcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmcmFnbWVudCB0aGUgbmV3IGZyYWdtZW50XG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5X0FQSVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVVybChmcmFnbWVudCkge1xuICAgICAgLy8gSGlzdG9yeSBBUEkgbm90IHN1cHBvcnRlZCwgYWJvcnRcbiAgICAgIGlmICghKCdoaXN0b3J5JyBpbiB3aW5kb3cpKSByZXR1cm5cblxuICAgICAgY29uc3QgcGF0aCA9IHJlcGxhY2VCb29rUmVhZGVyRnJhZ21lbnQoXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgZnJhZ21lbnQsXG4gICAgICApXG5cbiAgICAgIC8vIFJlY29uc3RydWN0IFVSTCB3aXRoIG5ldyBwYXRoXG4gICAgICBjb25zdCB1cmwgPSBwYXRoICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoXG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGZyYWdtZW50IH0sIHdpbmRvdy50aXRsZSwgdXJsKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBOb3QgYSByZWNvZ25pemVkIG1lc3NhZ2UgdHlwZSwgYWJvcnRcbiAgICAgIGlmICghZXZlbnQuZGF0YSB8fCBldmVudC5kYXRhLnR5cGUgIT09IG1lc3NhZ2VUeXBlKSByZXR1cm5cblxuICAgICAgdXBkYXRlVXJsKGV2ZW50LmRhdGEuZnJhZ21lbnQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmRhYmxlL2NvbGxhcHNpYmxlIGFjY29yZGlvbiBjb21wb25lbnQsIGltcGxlbWVudGVkIHdpdGggPGRldGFpbHM+XG4gICAqIGVsZW1lbnRzXG4gICAqXG4gICAqIFRoZSBKYXZhU2NyaXB0IGd1YXJhbnRlZXMgb25seSBvbmUgPGRldGFpbHM+IGlzIG9wZW4gYXQgYSB0aW1lIGFuZFxuICAgKiBzY3JvbGxzIHRoZSBvcGVuIDxkZXRhaWxzPidzIGNvbnRlbnQgaW50byB2aWV3LlxuICAgKlxuICAgKiBAc2VlIGFjY29yZGlvbi5sZXNzXG4gICAqL1xuICBzdGF0aWMgc2V0VXBBY2NvcmRpb25zKCkge1xuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbGwgPGRldGFpbHM+IGVsZW1lbnRzIGluIGRldGFpbHNFbHMsIGV4Y2VwdCBzZWxlY3RlZERldGFpbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTERldGFpbHNFbGVtZW50W119IGRldGFpbHNFbHNcbiAgICAgKiBAcGFyYW0ge0hUTUxEZXRhaWxzRWxlbWVudH0gICBzZWxlY3RlZERldGFpbHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjbG9zZUFsbEV4Y2VwdChkZXRhaWxzRWxzLCBzZWxlY3RlZERldGFpbHMpIHtcbiAgICAgIEFycmF5LmZyb20oZGV0YWlsc0VscylcbiAgICAgICAgLmZvckVhY2goKGRldGFpbHMpID0+IHtcbiAgICAgICAgICBpZiAoZGV0YWlscyAhPT0gc2VsZWN0ZWREZXRhaWxzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIGRldGFpbHMub3BlbiA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBzaW5nbGUgYWNjb3JkaW9uIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYWNjb3JkaW9uXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VXBBY2NvcmRpb24oYWNjb3JkaW9uKSB7XG4gICAgICAvKipcbiAgICAgICAqIFJlc3BvbmRzIHRvIHRoZSBcInRvZ2dsZVwiIGV2ZW50IG9uIGEgPGRldGFpbHM+XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm9wZW4pIHJldHVyblxuXG4gICAgICAgIGNsb3NlQWxsRXhjZXB0KFxuICAgICAgICAgIGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdkZXRhaWxzJyksXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICApXG5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vd3d3LmFiZWF1dGlmdWxzaXRlLm5ldC9zbW9vdGhseS1zY3JvbGwtdG8tYW4tZWxlbWVudC13aXRob3V0LWEtanF1ZXJ5LXBsdWdpbi0yXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoZXZlbnQudGFyZ2V0KS5vZmZzZXQoKS50b3AsXG4gICAgICAgIH0sIDQwMClcbiAgICAgIH1cblxuICAgICAgQXJyYXkuZnJvbShhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnZGV0YWlscycpKVxuICAgICAgICAuZm9yRWFjaCgoZGV0YWlscykgPT4ge1xuICAgICAgICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgaGFuZGxlVG9nZ2xlKVxuICAgICAgICB9KVxuXG4gICAgICBhY2NvcmRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWFjY29yZGlvbi1yZWFkeScsICcnKVxuICAgIH1cblxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWNjb3JkaW9uXScpKVxuICAgICAgLmZvckVhY2goc2V0VXBBY2NvcmRpb24pXG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjbGljayBvbiBzZWFyY2ggJ0FkdmFuY2VkIFNlYXJjaCcgbGluay5cbiAgICpcbiAgICogSWYgJ1NlYXJjaCBUViBuZXdzIGNhcHRpb25zJyBpcyBjaGVja2VkLCB3ZSBpZ25vcmUgdGhlIGxpbmsgY2xpY2tcbiAgICogYW5kIGNyZWF0ZSBhbmQgb3BlbiBUViBhZHZhbmNlZCBzZWFyY2ggcG9wdXAgcmlnaHQgb24gdGhlIHBhZ2UuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59ICB0cnVlIGZvciBicm93c2VyIHRvIGdvIHRvIG5vcm1hbCBhZHZhbmNlZCBzZWFyY2ggcGFnZTsgZWxzZSBmYWxzZVxuICAgKi9cbiAgc3RhdGljIGFkdmFuY2VkX3NlYXJjaChsaW5rKSB7XG4gICAgaWYgKCFBSlMuaXNfYWR2YW5jZWRfVFZfc2VhcmNoKGxpbmspKVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgIC8vIHRoaXMgbWVhbnMgd2Ugd2FudCBUViBhZHZhbmNlZCBzZWFyY2ggZm9ybSBiZWhhdmlvdXIgaW5zdGVhZCFcbiAgICBpZiAoIUFKUy5hZHYpIHtcbiAgICAgIEFKUy5hZHYgPSB7XG4gICAgICAgIG1hcHBpbmc6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9ubHkgcmVsb2FkIHRoZSByZXNvdXJjZXMgYmVsb3cgYXQgbW9zdCAxeC9kYXlcbiAgICBjb25zdCB5bWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSAvLyBlZzogMjAxNy0wNi0yOFxuICAgICQuYWpheFNldHVwKHtcbiAgICAgIGNhY2hlOiB0cnVlLFxuICAgIH0pXG5cbiAgICAvLyBOT1RFOiB1c2luZyBuZXcgSlMgUHJvbWlzZSAvIGpRdWVyeSBQcm9taXNlLWlzaCBEZWZlcnJlZC4uXG4gICAgLy8gTk9URTogaWYgd2UgYXJlIGludm9raW5nIHRoaXMgbW9yZSB0aGFuIG9uY2UsIHdlIHJldXNlIHByaW9yIHJlc3VsdHNcbiAgICAvLyBOT1RFOiB5bWQgZm9yY2VzIHJlbG9hZCBhdCBsZWFzdCBvbmNlIGEgZGF5XG4gICAgLy8gTk9URTogaWYgYW55IHJlc291cmNlcyBoYXBwZW4gdG8gX2FscmVhZHlfIGJlIGxvYWRlZCBpbiA8aGVhZD4sIHVzZSB0aGVtXG4gICAgY29uc3QgaSA9ICdodHRwczovL2FyY2hpdmUub3JnL2luY2x1ZGVzLydcbiAgICAkLndoZW4oXG4gICAgICAodHlwZW9mIFRWICAgICAgICE9PSAndW5kZWZpbmVkJyB8fCAkLmdldFNjcmlwdChpLmNvbmNhdCgndHYubWluLmpzPycsIHltZCkpKSxcbiAgICAgICh0eXBlb2YgVFZTZWFyY2ggIT09ICd1bmRlZmluZWQnIHx8ICQuZ2V0U2NyaXB0KGkuY29uY2F0KCdidWlsZC9qcy90dnNlYXJjaC5taW4uanM/JywgeW1kKSkpLFxuICAgICAgKCQudWkgfHwgJC5nZXRTY3JpcHQoaS5jb25jYXQoJ2pxdWVyeS11aS0xLjEwLjMubWluLmpzJykpKSxcbiAgICAgICgkLnVpIHx8ICQuZ2V0KCcvaW5jbHVkZXMvcmVkbW9uZC9qcXVlcnktdWktMS4xMC4zLm1pbi5jc3MnLCAoY3NzKSA9PiB7XG4gICAgICAgICQoJzxzdHlsZSAvPicpLmh0bWwoY3NzKS5hcHBlbmRUbygnaGVhZCcpIC8vIEFkZCBDU1MgdG8gcGFnZVxuICAgICAgfSkpLFxuICAgICAgKEFKUy5hZHYubWFwcGluZyB8fCAkLmdldEpTT04oJy9kZXRhaWxzL3R2P21hcHBpbmdzJm91dHB1dD1qc29uJicuY29uY2F0KHltZCksIChtYXBwaW5nKSA9PiB7XG4gICAgICAgIEFKUy5hZHYubWFwcGluZyA9IG1hcHBpbmdcbiAgICAgIH0pKSxcbiAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKEFKUy5hZHYubWFwcGluZy5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBuby1hbGVydFxuICAgICAgICBhbGVydCgnZmFpbGVkIHRvIGdldCBuZXR3b3JrIGFuZCBwcm9ncmFtIG1hcHBpbmdzIScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvKiBnbG9iYWwgIFRWU2VhcmNoICovXG4gICAgICBUVlNlYXJjaC5wcm9QaWNrKEFKUy5hZHYubWFwcGluZywgbGluaylcbiAgICB9KVxuXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgJ0FkdmFuY2VkIFNlYXJjaCcgc2hvdWxkIGJlIGhhbmRsZWQgdmlhIEpTXG4gICAqICh3aGljaCBhcyBvZiBub3cgaXMganVzdCBUViBGVFMgdG8gbWFrZSBhIHBvcHVwIHNob3cgdXApLlxuICAgKiBMb2dpY2FsbHkgcHJpdmF0ZS5cbiAgICpcbiAgICogQHBhcmFtICB7RE9NIGVsZW1lbnR9ICBlbG0gJ0FkdmFuY2VkIFNlYXJjaCcgbGluayBlbGVtZW50IHRoYXQgd2FzIGp1c3QgY2xpY2tlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIHNob3VsZCBoYW5kbGUgd2l0aCBKUyBhbmQgbm90IGRpcmVjdGx5IGdvIHRvIC9hZHZhbmNlZF9zZWFyY2gucGhwP1xuICAgKi9cbiAgc3RhdGljIGlzX2FkdmFuY2VkX1RWX3NlYXJjaChlbG0pIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdG5hbWUgPT09ICd3ZWIuYXJjaGl2ZS5vcmcnKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAvLyBmb3Igbm93IGF0IGxlYXN0LCB0cmFjZXkgZmVsdCBzaG91bGQgYXZvaWQgaGFuZGxpbmcgbGluayBvbiBJQSB0b3AvaG9tZSBwYWdlIGV2ZW4gd2hlblxuICAgIC8vIFRWIEZUUyBpcyBwaWNrZWQuICBmb3IgY29uc2lzdGVuY3ksIHRoaXMgaXMgX2RlZmluaXRlbHlfIHdvcnRoIHJldmlzaXRpbmcuXG4gICAgaWYgKCQoZG9jdW1lbnQuYm9keSkuaGFzQ2xhc3MoJ3RvcCcpKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCAkZm9ybSA9ICQoZWxtKS5wYXJlbnRzKCdmb3JtJylcbiAgICBpZiAoJGZvcm0uZmluZCgnLmpzLXNlYXJjaC1vcHRpb25zIGlucHV0W3ZhbHVlPVRWXScpLmlzKCc6Y2hlY2tlZCcpKVxuICAgICAgcmV0dXJuICRmb3JtXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEZpcmVzIGFuIEFyY2hpdmUgQW5hbHl0aWNzIHRyYWNraW5nIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAgICovXG4gIHN0YXRpYyBmaXJlQW5hbHl0aWNzVHJhY2tpbmdFdmVudChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IGxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBhcmNoaXZlX2FuYWx5dGljcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFyY2hpdmVfYW5hbHl0aWNzLnNlbmRfcGluZyh7XG4gICAgICAgIGtpbmQ6ICdldmVudCcsXG4gICAgICAgIGVjOiBjYXRlZ29yeSxcbiAgICAgICAgZWE6IGFjdGlvbixcbiAgICAgICAgZWw6IGxhYmVsLFxuICAgICAgICBjYWNoZV9idXN0OiBNYXRoLnJhbmRvbSgpLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgaGFuZGxlcnMgZm9yIGFjdGlvbiB0cmFja2luZy5cbiAgICpcbiAgICogVG8gZW5hYmxlIGNsaWNrIHRyYWNraW5nIGZvciBhIGxpbmssIGFkZCBhIGBkYXRhLWV2ZW50LWNsaWNrLXRyYWNraW5nYFxuICAgKiBhdHRyaWJ1dGUgY29udGFpbmluZyB0aGUgR29vZ2xlIEFuYWx5dGljcyBFdmVudCBDYXRlZ29yeSBhbmQgQWN0aW9uLCBzZXBhcmF0ZWRcbiAgICogYnkgYSB2ZXJ0aWNhbCBwaXBlICh8KS5cbiAgICogZS5nLiBgPGEgaHJlZj1cImZvb2JhclwiIGRhdGEtZXZlbnQtY2xpY2stdHJhY2tpbmc9XCJUb3BOYXZ8Rm9vQmFyXCI+YFxuICAgKlxuICAgKiBUbyBlbmFibGUgZm9ybSBzdWJtaXQgdHJhY2tpbmcsIGFkZCBhIGBkYXRhLWV2ZW50LWZvcm0tdHJhY2tpbmdgIGF0dHJpYnV0ZVxuICAgKiB0byB0aGUgYGZvcm1gIHRhZy5cbiAgICogZS5nLiBgPGZvcm0gZGF0YS1ldmVudC1mb3JtLXRyYWNraW5nPVwiVG9wTmF2fFNlYXJjaEZvcm1cIiBtZXRob2Q9XCJHRVRcIj5gXG4gICAqL1xuICBzdGF0aWMgc2V0VXBBY3Rpb25UcmFja2luZygpIHtcbiAgICBjb25zdCBjbGlja1RyYWNraW5nQXR0cmlidXRlTmFtZSA9ICdldmVudC1jbGljay10cmFja2luZydcbiAgICBjb25zdCBmb3JtVHJhY2tpbmdBdHRyaWJ1dGVOYW1lID0gJ2V2ZW50LWZvcm0tdHJhY2tpbmcnXG5cbiAgICBmdW5jdGlvbiBhY3Rpb25IYW5kbGVyKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAgICAgaWYgKCFjdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBjb25zdCBjYXRlZ29yeUFjdGlvbiA9IGN1cnJlbnRUYXJnZXQuZGF0YShhdHRyaWJ1dGVOYW1lKVxuICAgICAgICBpZiAoIWNhdGVnb3J5QWN0aW9uKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBjb25zdCBjYXRlZ29yeUFjdGlvblBhcnRzID0gY2F0ZWdvcnlBY3Rpb24uc3BsaXQoJ3wnKVxuICAgICAgICBBSlMuZmlyZUFuYWx5dGljc1RyYWNraW5nRXZlbnQoY2F0ZWdvcnlBY3Rpb25QYXJ0c1swXSwgY2F0ZWdvcnlBY3Rpb25QYXJ0c1sxXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsIGBbZGF0YS0ke2NsaWNrVHJhY2tpbmdBdHRyaWJ1dGVOYW1lfV1gLCBhY3Rpb25IYW5kbGVyKGNsaWNrVHJhY2tpbmdBdHRyaWJ1dGVOYW1lKSlcbiAgICAkKGBmb3JtW2RhdGEtJHtmb3JtVHJhY2tpbmdBdHRyaWJ1dGVOYW1lfV1gKS5vbignc3VibWl0JywgYWN0aW9uSGFuZGxlcihmb3JtVHJhY2tpbmdBdHRyaWJ1dGVOYW1lKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIGRhdGEtcG9wdXAtbGlua3NcbiAgICovXG4gIHN0YXRpYyBzZXR1cFBvcHVwTGluaygpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gJ3BvcHVwLWxpbmsnXG4gICAgY29uc3Qgd2lkdGhBdHRyaWJ1dGUgPSAncG9wdXAtbGluay13aWR0aCdcbiAgICBjb25zdCBoZWlnaHRBdHRyaWJ1dGUgPSAncG9wdXAtbGluay1oZWlnaHQnXG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsIGBbZGF0YS0ke2F0dHJpYnV0ZU5hbWV9XWAsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAgIGNvbnN0IHcgPSBjdXJyZW50VGFyZ2V0LmRhdGEod2lkdGhBdHRyaWJ1dGUpIHx8IDUwMFxuICAgICAgY29uc3QgaCA9IGN1cnJlbnRUYXJnZXQuZGF0YShoZWlnaHRBdHRyaWJ1dGUpIHx8IDUwMFxuICAgICAgQUpTLm9wZW5Qb3B1cCh3LCBoLCBldmVudC5jdXJyZW50VGFyZ2V0LmhyZWYpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFjdCBmdW5jdGlvbmFsIGNvbXBvbmVudC4gUmVuZGVycyByZWxhdGVkIGl0ZW0gdGlsZXMgb24gZGV0YWlscyBwYWdlLlxuICAgKiBUaGlzIG1hcmt1cCBpcyAqZHVwbGljYXRlZCBiZXR3ZWVuIHRoZSBKUyBhbmQgUEhQIHRvIHJlbmRlciB0aWxlcy5cbiAgICpcbiAgICogQHNlZSBUaWxlczo6Y29uc3RydWN0KClcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0FycmF5fSAgcGFyYW1zLmRhdGFIYXNoXG4gICAqIEByZXR1cm4ge0pTWC5FbGVtZW50Q2xhc3N9XG4gICAqL1xuICBzdGF0aWMgUmVsYXRlZEl0ZW1TZWN0aW9uKHsgZGF0YUhhc2ggPSBbXSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGFyaWEtbGFiZWw9XCJSZWxhdGVkIEl0ZW1zXCI+XG4gICAgICAgIHtkYXRhSGFzaC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taWFcIiBkYXRhLWlkPXtpdGVtLmlkZW50aWZpZXJ9IGRhdGEtbWVkaWF0eXBlPXtpdGVtLm1lZGlhdHlwZX0gZGF0YS15ZWFyPVwiXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInN0ZWFsdGhcIiB0YWJJbmRleD1cIi0xXCIgaHJlZj17YC9kZXRhaWxzLyR7aXRlbS5pZGVudGlmaWVyfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuLXRpbGVzIHZpZXdzIEMgQzFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbi14c1wiPntpdGVtLmRvd25sb2Fkc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4tc20gaGlkZGVuLW1kIGhpZGRlbi1sZ1wiPntpdGVtLmRvd25sb2Fkc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkMyMzRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGl0ZW0tdHRsICR7aXRlbS5sZW5kQ2xhc3N9IEMgQzJgfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvZGV0YWlscy8ke2l0ZW0uaWRlbnRpZmllcn1gfSB0aXRsZT17aXRlbS50aXRsZX0gZGF0YS1ldmVudC1jbGljay10cmFja2luZz1cIkdlbmVyaWNOb25Db2xsZWN0aW9ufEl0ZW1UaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIml0ZW0taW1nXCIgYWx0PVwiXCIgc3JjPXtgL3NlcnZpY2VzL2ltZy8ke2l0ZW0uaWRlbnRpZmllcn1gfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7KGl0ZW0ubGVuZGluZ0VuYWJsZWQgPT09IHRydWUgJiYgaXRlbS5sZW5kaW5nQXZhaWxhYmxlID09PSB0cnVlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZS1hY3Rpb24gaGlkZGVuLWxpc3RzXCI+Qm9ycm93PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7KGl0ZW0ubGVuZGluZ0VuYWJsZWQgPT09IHRydWUgJiYgaXRlbS5sZW5kaW5nQXZhaWxhYmxlID09PSBmYWxzZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUtYWN0aW9uIGhpZGRlbi1saXN0c1wiPkpvaW4gV2FpdGxpc3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsoaXRlbS5sb2dpblJlcXVpcmVkID09PSB0cnVlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZS1hY3Rpb24gaGlkZGVuLWxpc3RzXCI+TG9nIGluIHRvIHZpZXcgdGhpcyBpdGVtPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR0bFwiPntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJieSBDIEM0XCI+XG4gICAgICAgICAgICAgICAgICB7KGl0ZW0uY3JlYXRvciAhPT0gJycpICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLWxpc3RzXCI+YnkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ5dlwiIHRpdGxlPXtpdGVtLmNyZWF0b3J9PntpdGVtLmNyZWF0b3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0YmFyIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtaWNvbiBDIEM1XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BpY29ub2NoaXZlLSR7aXRlbS5tZWRpYXR5cGV9YH0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntpdGVtLm1lZGlhdHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3RhdFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbm9jaGl2ZS1leWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+ZXllPC9zcGFuPjxzcGFuPntpdGVtLmRvd25sb2Fkc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oNj5cblxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdGF0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29ub2NoaXZlLWZhdm9yaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPmZhdm9yaXRlPC9zcGFuPntpdGVtLmZhdm9yaXRlfVxuICAgICAgICAgICAgICAgIDwvaDY+XG5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3RhdFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbm9jaGl2ZS1jb21tZW50XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPmNvbW1lbnQ8L3NwYW4+e2l0ZW0ubnVtUmV2aWV3c31cbiAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmVhY3QgZnVuY3Rpb25hbCBjb21wb25lbnQuIFJlbmRlcnMgYSB0YWJsZSBzaG93aW5nIHZpZXcgc3RhdHMgcGVyIGdlb2dyYXBoaWMgcmVnaW9uIGZvciBhblxuICAgKiBpdGVtIG9yIGNvbGxlY3Rpb24uXG4gICAqXG4gICAqIEBzZWUgc3RhdHMtdGFibGUubGVzc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmNhcHRpb25cbiAgICogQHBhcmFtIHtHZW9Db3VudFtdfSBwcm9wcy5jb3VudHNcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIFJlZ2lvbnNUYWJsZSh7IGNhcHRpb24gPSAnUmVnaW9ucycsIGNhcHRpb25DbGFzcyA9ICcnLCBjb3VudHMgPSBbXSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdGF0cy10YWJsZVwiPlxuICAgICAgICA8Y2FwdGlvbiBjbGFzc05hbWU9e2NhcHRpb25DbGFzc30+e2NhcHRpb259PC9jYXB0aW9uPlxuXG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZWdpb248L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q291bnRyeTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic3RhdHMtdGFibGVfX251bWVyaWMtY29sdW1uXCIgc2NvcGU9XCJjb2xcIj5WaWV3czwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2NvdW50cy5tYXAoY291bnQgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17YCR7Y291bnQuc3RhdGUuY29kZX1fJHtjb3VudC5jb3VudHJ5LmNvZGV9XyR7Y291bnQuY291bnR9YH0+XG4gICAgICAgICAgICAgIDx0ZD57Y291bnQuc3RhdGUuZm9ybWF0dGVkTmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2NvdW50LmNvdW50cnkuZm9ybWF0dGVkTmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic3RhdHMtdGFibGVfX251bWVyaWMtY29sdW1uXCI+e2NvdW50LmZvcm1hdHRlZENvdW50fTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT4pXG4gIH1cblxuICAvKipcbiAgICogUmVhY3QgZnVuY3Rpb25hbCBjb21wb25lbnQuIFJlbmRlcnMgYSBtZXNzYWdlIHRvIGRpc3BsYXkgd2hpbGUgYSByZXNvdXJjZSBpcyBsb2FkaW5nLlxuICAgKlxuICAgKiBAc2VlIGxvYWRpbmctbWVzc2FnZS5sZXNzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubWVzc2FnZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgTG9hZGluZ01lc3NhZ2UoeyBtZXNzYWdlID0gJ0xvYWRpbmcnIH0pIHtcbiAgICByZXR1cm4gPHNtYWxsIGNsYXNzTmFtZT1cImxvYWRpbmctbWVzc2FnZVwiPnttZXNzYWdlfTwvc21hbGw+XG4gIH1cblxuICAvKipcbiAgICogUmVhY3QgZnVuY3Rpb25hbCBjb21wb25lbnQuIFJlbmRlcnMgYSBlcnJvciBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmVycm9yTXNnXG4gICAqIEByZXR1cm4ge0pTWC5FbGVtZW50Q2xhc3N9XG4gICAqL1xuICBzdGF0aWMgRXJyb3JNZXNzYWdlKHsgZXJyb3JNc2cgfSkge1xuICAgIHJldHVybiA8c21hbGw+e2Vycm9yTXNnfTwvc21hbGw+XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYW4gZWxlbWVudCB3aXRoIGNsYXNzIFwianMtdG9wLXJlZ2lvbnMtdGFibGVcIiBhbmQgcmVuZGVycyBhIHRhYmxlIHNob3dpbmcgdGhlIHRvcCAxMFxuICAgKiByZWdpb25zIGluIHRlcm1zIG9mIHZpZXdzIGZvciBhbiBpdGVtL2NvbGxlY3Rpb24uXG4gICAqXG4gICAqIERhdGEgQXR0cmlidXRlczpcbiAgICogIC0gZGF0YS1jYXB0aW9uIChzdHJpbmcpXG4gICAqICAtIGRhdGEtY2FwdGlvbi1jbGFzcyAoc3RyaW5nKVxuICAgKiAgLSBkYXRhLWRheXMgKG51bWJlcilcbiAgICogIC0gZGF0YS1pZGVudGlmaWVyIChzdHJpbmcpXG4gICAqICAtIGRhdGEtbGltaXQgKG51bWJlcilcbiAgICovXG4gIHN0YXRpYyBzZXRVcFRvcFJlZ2lvbnNUYWJsZSgpIHtcbiAgICBjb25zdCByb290ID0gJCgnLmpzLXRvcC1yZWdpb25zLXRhYmxlJylcbiAgICBjb25zdCBtZXNzYWdlID0gcm9vdC5maW5kKCcuanMtdG9wLXJlZ2lvbnMtbWVzc2FnZScpXG4gICAgY29uc3Qgb3JpZ2luYWxNZXNzYWdlVGV4dCA9IG1lc3NhZ2UudGV4dCgpXG5cbiAgICBpZiAoIXJvb3QgfHwgIW1lc3NhZ2UpXG4gICAgICByZXR1cm5cblxuICAgIFJlYWN0RE9NLnJlbmRlcig8QUpTLkxvYWRpbmdNZXNzYWdlIG1lc3NhZ2U9XCJsb2FkaW5nIGRhdGFcIiAvPiwgbWVzc2FnZVswXSlcblxuICAgIGNvbnN0IGFwaU9wdGlvbnMgPSB7XG4gICAgICB1YUtpbmRzOiBbJ25vbl9yb2JvdCcsICd1bnJlY29nbml6ZWQnXSxcbiAgICB9XG5cbiAgICBpZiAocm9vdC5kYXRhKCdkYXlzJykpXG4gICAgICBhcGlPcHRpb25zLmRheXMgPSBwYXJzZUludChyb290LmRhdGEoJ2RheXMnKSwgMTApXG5cbiAgICBpZiAocm9vdC5kYXRhKCdsaW1pdCcpKVxuICAgICAgYXBpT3B0aW9ucy5saW1pdCA9IHBhcnNlSW50KHJvb3QuZGF0YSgnbGltaXQnKSwgMTApXG5cbiAgICBBSlMuU3RhdHNBcGlDbGllbnQuZ2V0R2VvQ291bnRzKHJvb3QuZGF0YSgnaWRlbnRpZmllcicpLCBhcGlPcHRpb25zKS50aGVuKFxuICAgICAgKGNvdW50cykgPT4ge1xuICAgICAgICBSZWFjdERPTS5yZW5kZXIoPEFKUy5SZWdpb25zVGFibGVcbiAgICAgICAgICBjYXB0aW9uPXtyb290LmRhdGEoJ2NhcHRpb24nKX1cbiAgICAgICAgICBjYXB0aW9uQ2xhc3M9e3Jvb3QuZGF0YSgnY2FwdGlvbkNsYXNzJyl9XG4gICAgICAgICAgY291bnRzPXtjb3VudHN9XG4gICAgICAgIC8+LCByb290WzBdKVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gSWYgQVBJIGNhbGwgZmFpbHMsIGZhbGwgYmFjayB0byBvcmlnaW5hbCB0ZXh0LlxuICAgICAgICBtZXNzYWdlLnRleHQob3JpZ2luYWxNZXNzYWdlVGV4dClcbiAgICAgIH0sXG4gICAgKVxuICB9XG59IC8vIGVuZCBjbGFzcyBBSlNcblxuXG5jbGFzcyBUaW1lZ3JhZiB7XG4gIC8vIGNsYXNzIGZvciBmYWNldHMgc2VjdGlvbiBpbnRlcmFjdGl2ZSB0aW1lLXJlbGF0ZWQgZ3JhcGguXG4gIC8vIEdyYXBoIHNob3dzIHNlYXJjaCByZXN1bHRzIGhpc3RvZ3JhbWVkIG92ZXIgdGltZS5cbiAgLy8gSXQgYWxsb3dzIHVzZXIgdG8gZHJhZyBsZWZ0IGFuZCByaWdodCAnaGFuZGxlcycgb3ZlcmxheWluZyB0aGUgZ3JhcGggdG8gY29uc3RyYWluIHRvIGFcbiAgLy8gc21hbGxlciB0aW1lIHBlcmlvZC5cbiAgc3RhdGljIHRpbWVjaGFuZ2VkID0gZmFsc2VcbiAgc3RhdGljIGMgPSB7fSAvLyBjb25maWcgdGhhdCBjb21lcyBmcm9tIFBIUFxuXG4gIHN0YXRpYyBzZXR1cChsZWZ0VFMsIHJpdGVUUywgbWluRGF0ZSwgbWF4RGF0ZSkge1xuICAgIFRpbWVncmFmLmMucmVhbEdyYXBoV2lkdGggPSBUaW1lZ3JhZi5jLkdSQVBIX1dJRFRIIC0gVGltZWdyYWYuYy5HUkFQSF9QQURESU5HXG4gICAgVGltZWdyYWYuYy5tYXhTbGlkZSA9IE1hdGguZmxvb3IoKG1heERhdGUuZ2V0VGltZSgpIC0gbWluRGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApXG4gICAgY29uc3QgY3NNaW5UUyA9IG1pbkRhdGUuZ2V0VGltZSgpIC8gMTAwMFxuICAgIGNvbnN0IGxlZnQgPSBsZWZ0VFMgPiAwID8gTWF0aC5mbG9vcigobGVmdFRTIC0gY3NNaW5UUykgLyA4NjQwMCkgOiAwXG4gICAgY29uc3Qgcml0ZSA9IHJpdGVUUyA+IDAgPyBNYXRoLmZsb29yKChyaXRlVFMgLSBjc01pblRTKSAvIDg2NDAwKSA6IFRpbWVncmFmLmMubWF4U2xpZGVcblxuXG4gICAgY29uc3QgJHNsaWRlcmRpdiA9ICQoJzxkaXYgLz4nKS5hdHRyKHsgaWQ6ICdzbGlkZXInIH0pLmNzcyh7XG4gICAgICB3aWR0aDogVGltZWdyYWYuYy5yZWFsR3JhcGhXaWR0aCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAoVGltZWdyYWYuYy5HUkFQSF9IRUlHSFQgLSAxMCksXG4gICAgICBsZWZ0OiAwLFxuICAgICAgekluZGV4OiAxLFxuICAgIH0pXG4gICAgJCgnI3RpbWVncmFmJykuYXBwZW5kKCRzbGlkZXJkaXYpXG4gICAgJHNsaWRlcmRpdi5hcHBlbmQoJzxiciAvPicpIC8vIGJsZWFoIVxuXG5cbiAgICBsb2cobGVmdCwgcml0ZSlcblxuICAgICQoJyNzbGlkZXInKS5zbGlkZXIoe1xuICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICBtYXg6IFRpbWVncmFmLmMubWF4U2xpZGUsXG4gICAgICB2YWx1ZXM6IFtsZWZ0LCByaXRlXSxcbiAgICAgIHNsaWRlOiAoZXZlbnQsIHVpKSA9PiB7XG4gICAgICAgIGNvbnN0IHRzID0gbWluRGF0ZS5nZXRUaW1lKClcbiAgICAgICAgY29uc3QgZDEgPSBuZXcgRGF0ZSh0cylcbiAgICAgICAgY29uc3QgZDIgPSBuZXcgRGF0ZSh0cylcblxuICAgICAgICBkMS5zZXREYXRlKGQxLmdldERhdGUoKSArIHVpLnZhbHVlc1swXSlcbiAgICAgICAgZDIuc2V0RGF0ZShkMi5nZXREYXRlKCkgKyB1aS52YWx1ZXNbMV0pXG5cbiAgICAgICAgJCgnI2Zyb20gJykuaHRtbCgkLmRhdGVwaWNrZXIuZm9ybWF0RGF0ZSgnTSBkJywgZDEpKSAvLyBKYW4gMTlcbiAgICAgICAgJCgnI3RvICAgJykuaHRtbCgkLmRhdGVwaWNrZXIuZm9ybWF0RGF0ZSgnTSBkJywgZDIpKSAvLyBKYW4gMTlcbiAgICAgICAgJCgnI2Zyb21CJykuaHRtbCgkLmRhdGVwaWNrZXIuZm9ybWF0RGF0ZSgneXltbWRkJywgZDEpKSAvLyB5eXl5bW1kZFxuICAgICAgICAkKCcjdG9CICAnKS5odG1sKCQuZGF0ZXBpY2tlci5mb3JtYXREYXRlKCd5eW1tZGQnLCBkMikpIC8vIHl5eXltbWRkXG4gICAgICAgICQoJyNkYXRlcGlja0wnKS52YWwoJC5kYXRlcGlja2VyLmZvcm1hdERhdGUoJ21tL2RkL3l5JywgZDEpKSAvLyBtbS9kZC95eXl5XG4gICAgICAgICQoJyNkYXRlcGlja1InKS52YWwoJC5kYXRlcGlja2VyLmZvcm1hdERhdGUoJ21tL2RkL3l5JywgZDIpKSAvLyBtbS9kZC95eXl5XG5cblxuICAgICAgICBjbGVhclRpbWVvdXQoVGltZWdyYWYuaGlkZUwpXG4gICAgICAgIGNsZWFyVGltZW91dChUaW1lZ3JhZi5oaWRlUilcblxuICAgICAgICBjb25zdCBmb2ZmID0geyBsZWZ0OiAoJCgnI3NsaWRlciAucHRyTCcpLm9mZnNldCgpLmxlZnQgLSAkKCcjZnJvbScpLndpZHRoKCkpICsgMTAgfVxuICAgICAgICBjb25zdCB0b2ZmID0geyBsZWZ0OiAgJCgnI3NsaWRlciAucHRyUicpLm9mZnNldCgpLmxlZnQgfVxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAgYnJhY2Utc3R5bGUgKi9cbiAgICAgICAgJCgnI2Zyb20nKS5vZmZzZXQoZm9mZikuc2hvdygwLCAoKSA9PiB7IFRpbWVncmFmLmhpZGVMID0gc2V0VGltZW91dCgoKSA9PiAkKCcjZnJvbScpLmhpZGUoJ3Nsb3cnKSwgMjAwMCkgfSlcbiAgICAgICAgJCgnI3RvICAnKS5vZmZzZXQodG9mZikuc2hvdygwLCAoKSA9PiB7IFRpbWVncmFmLmhpZGVSID0gc2V0VGltZW91dCgoKSA9PiAkKCcjdG8gICcpLmhpZGUoJ3Nsb3cnKSwgMjAwMCkgfSlcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAgYnJhY2Utc3R5bGUgKi9cblxuICAgICAgICBUaW1lZ3JhZi5waW5rbWUodWkudmFsdWVzWzBdLCB1aS52YWx1ZXNbMV0pXG4gICAgICB9LFxuICAgICAgc3RvcDogKGV2ZW50LCB1aSkgPT4ge1xuICAgICAgICBUaW1lZ3JhZi5hZGp1c3QodWkudmFsdWVzWzBdLCB1aS52YWx1ZXNbMV0pXG4gICAgICAgIFRpbWVncmFmLnRpbWVjaGFuZ2VkID0gdHJ1ZVxuICAgICAgICBjb25zdCBub3cgPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoL15odHRwW3NdKjovLCAnJylcbiAgICAgICAgY29uc3QgYmVjb21lID0gYC8vJHtsb2NhdGlvbi5ob3N0fSR7VGltZWdyYWYuYy5xfSR7VGltZWdyYWYuYXJncygpfWBcblxuICAgICAgICBpZiAobm93ICE9PSBiZWNvbWUpIHtcbiAgICAgICAgICBsb2cobm93KVxuICAgICAgICAgIGxvZyhiZWNvbWUpXG5cbiAgICAgICAgICAvLyBtYWtlIGl0IG1vcmUgb2J2aW91cyB0aGF0IHNlYXJjaCBpcyBiZWluZyBpc3N1ZWRcbiAgICAgICAgICAkKCcjb3BzY3JlZW4xTScpLnJlbW92ZSgpXG4gICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkKCc8ZGl2IGlkPVwib3BzY3JlZW4xTVwiLz4nKSlcbiAgICAgICAgICAkKCcjb3BzY3JlZW4xTScpLnNob3coJ3Nsb3cnLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYmVjb21lXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgaWYgKGxlZnQgPiAwICB8fCAgcml0ZSA+IDApXG4gICAgICBUaW1lZ3JhZi5waW5rbWUobGVmdCwgcml0ZSlcbiAgfVxuXG4gIHN0YXRpYyBwaW5rbWUobGVmdCwgcml0ZSkge1xuICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKFRpbWVncmFmLmMuR1JBUEhfUEFERElORyAvIDIpXG4gICAgY29uc3QgcGlua0wgPSAoTWF0aC5yb3VuZCgobGVmdCAvIFRpbWVncmFmLmMubWF4U2xpZGUpICogVGltZWdyYWYuYy5yZWFsR3JhcGhXaWR0aCkgKyAyKVxuICAgIGNvbnN0IHBpbmtSID0gKE1hdGgucm91bmQoKHJpdGUgLyBUaW1lZ3JhZi5jLm1heFNsaWRlKSAqIFRpbWVncmFmLmMucmVhbEdyYXBoV2lkdGgpIC0gMikgKyB4XG5cbiAgICBjb25zdCByZWN0ID0gYHJlY3QoMHB4LCR7cGlua1J9cHgsJHtUaW1lZ3JhZi5jLkdSQVBIX0hFSUdIVH1weCwke3BpbmtMfXB4KWBcbiAgICBsb2cocmVjdClcbiAgICAkKCcjdGltZWdyYWYtY2xpcCcpLmNzcygnY2xpcCcsIHJlY3QpXG5cbiAgICBjb25zdCB0dGwgPSAnY2xpY2sgYW5kIGRyYWcgdGhpcyB0byBjaGFuZ2UgdGltZSBwZXJpb2QnXG4gICAgY29uc3QgYXR0ciA9IHsgJ2RhdGEtdGl0bGUnOiB0dGwsICdkYXRhLXRvZ2dsZSc6ICd0b29sdGlwJywgJ2RhdGEtcGxhY2VtZW50JzogJ2JvdHRvbScgfVxuICAgICQoJCgnI3NsaWRlciBhJykuZ2V0KDApKS5hdHRyKGF0dHIpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kZWZhdWx0JykuYWRkQ2xhc3MoJ3B0ckwnKVxuICAgICQoJCgnI3NsaWRlciBhJykuZ2V0KDEpKS5hdHRyKGF0dHIpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kZWZhdWx0JykuYWRkQ2xhc3MoJ3B0clInKVxuXG4gICAgVGltZWdyYWYuYWRqdXN0KGxlZnQsIHJpdGUpXG4gIH1cblxuICBzdGF0aWMgYWRqdXN0KGxlZnQsIHJpdGUpIHtcbiAgICBjb25zdCBvbmVkYXlzcGFuID0gKHJpdGUgLSBsZWZ0IDwgMilcblxuICAgIGxvZygnbGVmdDonLCBsZWZ0LCAncml0ZTonLCByaXRlKVxuXG4gICAgaWYgKG9uZWRheXNwYW4pIHtcbiAgICAgICQoJyN0bycpLmhpZGUoKVxuICAgICAgJCgnI3NsaWRlciAudWktd2lkZ2V0LWhlYWRlcicpLmNzcygnYm9yZGVyQ29sb3InLCAnI2QzMzY4MicpXG4gICAgICAkKCcjc2xpZGVyIC51aS13aWRnZXQtaGVhZGVyJykuY3NzKCdib3JkZXItbGVmdC13aWR0aCcsIDApXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNzbGlkZXIgLnVpLXdpZGdldC1oZWFkZXInKS5jc3MoJ2JvcmRlckNvbG9yJywgJyNkMzM2ODInKVxuICAgICAgJCgnI3NsaWRlciAudWktd2lkZ2V0LWhlYWRlcicpLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnLCAyKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhcmdzKCkge1xuICAgIGlmICghVGltZWdyYWYudGltZWNoYW5nZWQpXG4gICAgICByZXR1cm4gJydcbiAgICBjb25zdCBmcm9tMiA9ICQoJyNmcm9tQicpLnRleHQoKS50cmltKClcbiAgICBjb25zdCAgIHRvMiA9ICQoJyN0b0IgICcpLnRleHQoKS50cmltKClcbiAgICBjb25zdCBlbmQgPSAoZnJvbTIgPT09IHRvMiA/ICcnIDogYC0ke3RvMn1gKVxuICAgIHJldHVybiBgJnRpbWU9JHtmcm9tMn0ke2VuZH1gIC8vIFRWSUlcbiAgfVxufSAvLyBlbmQgY2xhc3MgVGltZWdyYWZcblxuXG4oZnVuY3Rpb24gZGVmaW5lU3RhdHNBcGkoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc291cmNlXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc291cmNlLnNsaWNlKDEpXG4gIH1cblxuICAvKipcbiAgICogQSBnZW9ncmFwaGljIHJlZ2lvbiAoZWl0aGVyIGEgY291bnRyeSBvciBhIHN0YXRlL3Byb3ZpbmNlIHdpdGhpbiBhIGNvdW50cnkpIGZvciB0aGVcbiAgICogcHVycG9zZXMgb2Ygc2l0ZSB1c2FnZSBzdGF0aXN0aWNzLlxuICAgKi9cbiAgY2xhc3MgU3RhdHNSZWdpb24ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5jb2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLm5hbWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7IGNvZGUsIG5hbWUgfSkge1xuICAgICAgdGhpcy5jb2RlID0gY29kZVxuICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZm9ybWF0dGVkTmFtZSgpIHtcbiAgICAgIHJldHVybiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5uYW1lKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvdW50IG9mIHNpdGUgdXNhZ2UgZnJvbSBhIHBhcnRpY3VsYXIgc3RhdGUvcHJvdmluY2UuXG4gICAqL1xuICBjbGFzcyBHZW9Db3VudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmNvdW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmNvdW50cnlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuc3RhdGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7IGNvdW50LCBjb3VudHJ5LCBzdGF0ZSB9KSB7XG4gICAgICB0aGlzLmNvdW50ID0gcGFyc2VJbnQoY291bnQsIDEwKVxuICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeVxuICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBmb3JtYXR0ZWRDb3VudCgpIHtcbiAgICAgIHJldHVybiBBSlMuYWRkQ29tbWFzKHRoaXMuY291bnQpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm4ge0dlb0NvdW50fVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlR2VvQ291bnRGcm9tQXBpRGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBHZW9Db3VudCh7XG4gICAgICBjb3VudDogZGF0YS5zdW1fY291bnRfdmFsdWUsXG5cbiAgICAgIGNvdW50cnk6IG5ldyBTdGF0c1JlZ2lvbih7XG4gICAgICAgIGNvZGU6IGRhdGEuZ2VvX2NvdW50cnksXG4gICAgICAgIG5hbWU6IGRhdGEuY291bnRyeSxcbiAgICAgIH0pLFxuXG4gICAgICBzdGF0ZTogbmV3IFN0YXRzUmVnaW9uKHtcbiAgICAgICAgY29kZTogZGF0YS5nZW9fc3RhdGUsXG4gICAgICAgIG5hbWU6IGRhdGEuc3RhdGUsXG4gICAgICB9KSxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIEFQSSBkYXRhIGFuZCBwcm9kdWNlIGEgbGlzdCBvZiBHZW9Db3VudCBvYmplY3RzLCB3aXRoIGNvdW50cyBtYWRlIGJ5IGNvbWJpbmluZyBzdW1zXG4gICAqIGZyb20gdmFyaW91cyBraW5kcyBvZiB1c2VyIGFnZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgZGF0YSBtdXN0IGhhdmUga2V5IGNvdW50c19nZW9cbiAgICogQHBhcmFtIHtPYmplY3R9ICAgb3B0aW9uc1xuICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBvcHRpb25zLnVhS2luZHMgbGlzdCBvZiB1c2VyLWFnZW50IGtpbmRzIHRvIGluY2x1ZGVcbiAgICogQHJldHVybiB7R2VvQ291bnRbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbWJpbmVkR2VvQ291bnRzRnJvbUFwaURhdGEoZGF0YSwge1xuICAgIHVhS2luZHMgPSBbJ3JvYm90JywgJ25vbl9yb2JvdCcsICd1bnJlY29nbml6ZWQnXSxcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCFkYXRhLmNvdW50c19nZW8pXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkFQSSByZXNwb25zZSBkb2Vzbid0IGNvbnRhaW4gcHJvcGVydHkgJ2NvdW50c19nZW8nLlwiKVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVhS2luZFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gdWFLaW5kSXNBbGxvd2VkKHVhS2luZCkge1xuICAgICAgcmV0dXJuIHVhS2luZHMuaW5kZXhPZih1YUtpbmQpICE9PSAtMVxuICAgIH1cblxuICAgIGNvbnN0IGNvdW50c01hcCA9IHt9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY291bnRzX2dlby5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY291bnREYXRhID0gZGF0YS5jb3VudHNfZ2VvW2ldXG5cbiAgICAgIC8vIFdoaXRlbGlzdCB1c2VyIGFnZW50cyBhbmQgc2tpcCB1bmtub3duIGNvdW50cmllcy5cbiAgICAgIGlmICh1YUtpbmRJc0FsbG93ZWQoY291bnREYXRhLnVhX2tpbmQpICYmIGNvdW50RGF0YS5jb3VudHJ5ICE9PSAndW5rbm93bicpIHtcbiAgICAgICAgY29uc3QgbWFwS2V5ID0gYCR7Y291bnREYXRhLmdlb19jb3VudHJ5fV8ke2NvdW50RGF0YS5nZW9fc3RhdGV9YFxuXG4gICAgICAgIC8vIEFkZCB0byBhbiBleGlzdGluZyBjb3VudCBvciBjcmVhdGUgYSBuZXcgb25lLlxuICAgICAgICBpZiAoY291bnRzTWFwW21hcEtleV0pXG4gICAgICAgICAgY291bnRzTWFwW21hcEtleV0uY291bnQgKz0gY291bnREYXRhLnN1bV9jb3VudF92YWx1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgY291bnRzTWFwW21hcEtleV0gPSBjcmVhdGVHZW9Db3VudEZyb21BcGlEYXRhKGNvdW50RGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY291bnRzTWFwKS5tYXAoa2V5ID0+IGNvdW50c01hcFtrZXldKVxuICB9XG5cbiAgY29uc3QgYXBpQmFzZVVybCA9ICdodHRwczovL2JlLWFwaS51cy5hcmNoaXZlLm9yZy92aWV3cy92MSdcblxuICAvKipcbiAgICogSW50ZXJmYWNlIGZvciBmZXRjaGluZyBzaXRlIHVzYWdlIHN0YXRzIGZyb20gdGhlIHN0YXRzIEFQSS5cbiAgICovXG4gIEFKUy5TdGF0c0FwaUNsaWVudCA9IGNsYXNzIFN0YXRzQXBpQ2xpZW50IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRlbnRpZmllclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuZGF5c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLmxpbWl0XG4gICAgICogQHJldHVybiB7alF1ZXJ5LlByb21pc2U8R2VvRGF0YVtdPn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0R2VvQ291bnRzKGlkZW50aWZpZXIsIHtcbiAgICAgIGRheXMgPSAzMCxcbiAgICAgIGxpbWl0ID0gMTAwLFxuICAgICAgdWFLaW5kcyA9IFsncm9ib3QnLCAnbm9uX3JvYm90JywgJ3VucmVjb2duaXplZCddLFxuICAgIH0gPSB7fSkge1xuICAgICAgY29uc3QgdXJsID0gYCR7YXBpQmFzZVVybH0vZGV0YWlsL2NvbGxlY3Rpb24vJHtpZGVudGlmaWVyfS8ke2RheXN9YFxuXG4gICAgICByZXR1cm4gJC5nZXQodXJsKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ29tYmluZWRHZW9Db3VudHNGcm9tQXBpRGF0YShkYXRhLCB7IHVhS2luZHMgfSlcbiAgICAgICAgICAgICAgLnNvcnQoKGNvdW50MSwgY291bnQyKSA9PiAoY291bnQxLmNvdW50IDwgY291bnQyLmNvdW50ID8gMSA6IC0xKSlcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIGxpbWl0KVxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdChlcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG59KCkpXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogUmVhY3QgY29tcG9uZW50LCBDcmVhdGl2ZSBDb21tb25zIGxpY2Vuc2Ugc2VsZWN0b3IgbGluay5cbiAqIFNob3dzIGEgXCJyZW1vdmVcIiBsaW5rIHdoZW4gYSBsaWNlbnNlIGlzIHNlbGVjdGVkLlxuICovXG5BSlMuQ3JlYXRpdmVDb21tb25zTGljZW5zZUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIERFRkFVTFRfTElOS19URVhUOiAnQ2hvb3NlIGxpY2Vuc2UnLFxuXG4gIGRlZmF1bHRQcm9wczoge1xuICAgIGxpY2Vuc2VOYW1lOiB1bmRlZmluZWQsXG4gICAgbGljZW5zZVNlbGVjdGVkOiBmYWxzZSxcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpY2Vuc2VTZWxlY3RlZDogdGhpcy5wcm9wcy5saWNlbnNlU2VsZWN0ZWQsXG4gICAgICBsaW5rVGV4dDogdGhpcy5wcm9wcy5saWNlbnNlTmFtZSB8fCB0aGlzLkRFRkFVTFRfTElOS19URVhULFxuICAgICAgb2xkTGljZW5zZU5hbWU6IHRoaXMucHJvcHMubGljZW5zZU5hbWUsXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsaWNlbnNlU2VsZWN0ZWQ6IG5ld1Byb3BzLmxpY2Vuc2VTZWxlY3RlZCxcbiAgICAgIGxpbmtUZXh0OiBuZXdQcm9wcy5saWNlbnNlTmFtZSB8fCB0aGlzLkRFRkFVTFRfTElOS19URVhULFxuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZUxpY2Vuc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsaWNlbnNlU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgbGlua1RleHQ6IHRoaXMuREVGQVVMVF9MSU5LX1RFWFQsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbW92ZVJldGFpbkxpY2Vuc2VJbnB1dCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGxlZnQgb3ZlciBmcm9tIHRoZSBvbGQsIG5vbi1SZWFjdCB2ZXJzaW9uIG9mIHRoaXMgd2lkZ2V0LCBzb1xuICAgKiB3ZSBuZWVkIHRvIHJlYWNoIG91dHNpZGUgb2YgdGhlIFJlYWN0IGNvbXBvbmVudCBhbmQgY2hhbmdlIGFub3RoZXIgRE9NIG5vZGUuXG4gICAqL1xuICByZW1vdmVSZXRhaW5MaWNlbnNlSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV0YWluY2NsaWNlbnNlJyk7XG4gICAgZm9ybUl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmb3JtSXRlbSk7XG4gIH0sXG5cbiAgd2FzTGljZW5zZWRDaGFuZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm9sZExpY2Vuc2VOYW1lICE9PSB0aGlzLnN0YXRlLmxpbmtUZXh0O1xuICB9LFxuXG4gIGdldExpY2Vuc2VDaGFuZ2VNZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9sZExpY2Vuc2VOYW1lICYmIHRoaXMud2FzTGljZW5zZWRDaGFuZ2VkKCkpIHtcbiAgICAgIHJldHVybiBgQ2hhbmdlIGxpY2Vuc2UgKGN1cnJlbnRseSAke3RoaXMuc3RhdGUub2xkTGljZW5zZU5hbWV9KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNwYW4+XG4gICAgICA8QUpTLlBvcHVwTGlua1xuICAgICAgICBocmVmPXt0aGlzLnByb3BzLmhyZWZ9XG4gICAgICAgIGhlaWdodD1cIjYwMFwiXG4gICAgICAgIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgdGl0bGU9e3RoaXMuZ2V0TGljZW5zZUNoYW5nZU1lc3NhZ2UoKX1cbiAgICAgID57dGhpcy5zdGF0ZS5saW5rVGV4dH08L0FKUy5Qb3B1cExpbms+XG5cbiAgICAgIHsnICd9XG5cbiAgICAgIHt0aGlzLnN0YXRlLmxpY2Vuc2VTZWxlY3RlZCAmJlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAoPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGl2ZWNvbW1vbnMtcmVtb3ZlLWxpY2Vuc2UtYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVtb3ZlTGljZW5zZX1cbiAgICAgICAgICA+cmVtb3ZlPC9idXR0b24+KVxuICAgICAgICA8L3NwYW4+XG4gICAgICB9XG4gICAgPC9zcGFuPjtcbiAgfSxcbn0pXG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbkFKUy5NT1JGcmVhY3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIEZBQ0VUU19QRVJfUEFHRTogMTAwLFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIGhyZWY6ICcnLFxuICAgICAgbW91bnRlZDogZmFsc2UsXG4gICAgICBoZHI6ICcnLFxuICAgICAgb3B0aW9uczogW10sXG4gICAgfVxuICB9LFxuXG4gIGdldEZhY2V0cygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIC8vIHh4eHggTWF0aC5yYW5kIGFudGktYnJvd3NlciBjYWNoaW5nIGV0Yz8/XG4gICAgJC5nZXRKU09OKGAke3RoaXMucHJvcHMuaHJlZn0maGVhZGxlc3M9MSZvdXRwdXQ9anNvbmAsIChyZXQpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHJldC5ocmVmID0gc2VsZi5wcm9wcy5ocmVmXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICByZXQubW91bnRlZCA9IHRydWVcbiAgICAgIGxvZyhyZXQpXG5cbiAgICAgIHNlbGYuc2V0U3RhdGUocmV0KVxuXG4gICAgICAvLyBub3cgY2hlY2sgYWxsIHRoZSBib3hlcyB0aGF0IHVzZXIgaGFzIHByZXZpb3VzbHkvY3VycmVudGx5IGNoZWNrZWRcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmV0LmNoZWNrZWQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnN0YXRlLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB7IHZhbCB9ID0gc2VsZi5zdGF0ZS5vcHRpb25zW2ldXG4gICAgICAgICAgLy8gTk9URTogPT0gbm90ID09PSBzbyBcIjE5NzBcIj09MTk3MCAoZWc6IHllYXIgZmFjZXQpXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBlcWVxZXFcbiAgICAgICAgICBpZiAocmV0LmNoZWNrZWRbal0gPT0gdmFsKSB7XG4gICAgICAgICAgICBzZWxmLnJlZnNbdmFsXS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIE91ciBjb21wb25lbnQgaXMgdmlzaWJsZSBpbiBwYWdlIG5vdywgZWZmZWN0aXZlbHkgZW1wdHlcbiAgICAvLyBOb3cgYXNrIHNlcnZlciBmb3IgZmFjZXRzIHRvIHJlbmRlciBpblxuICAgIGxvZygnbW91bnRlZCcpXG4gICAgdGhpcy5nZXRGYWNldHMoKVxuICB9LFxuXG4gIHBhZ2VDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gaWYgdXNlciBjbGlja2VkIG9uIHRoZSB8PiBcIm5leHQgcGFnZVwiIGljb24sIGFkdmFuY2Ugb25lIHBhZ2U7XG4gICAgLy8gZWxzZSB0aGV5IGNsaWNrZWQgb24gYSBzcGVjaWZpYyBwYWdlIG51bWJlciB0byBnbyB0b1xuICAgIGNvbnN0IHBhZ2UgPSAoJChlLnRhcmdldCkudGV4dCgpID09PSAnJyA/IHRoaXMuc3RhdGUucGFnZSArIDEgOiBwYXJzZUludCgkKGUudGFyZ2V0KS50ZXh0KCksIDEwKSlcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFnZSB9KVxuICB9LFxuXG4gIHN1Ym1pdENsaWNrKCkge1xuICAgIGxvZygnc3VibWl0dGVkJylcbiAgICBsZXQgdXJsID0gdGhpcy5zdGF0ZS5zdWJtaXRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyB2YWwgfSA9IHRoaXMuc3RhdGUub3B0aW9uc1tpXVxuICAgICAgaWYgKHRoaXMucmVmc1t2YWxdLmNoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgdG1wID0gYCZhbmRbXT0ke3RoaXMuc3RhdGUubW9yZn0lM0FcIiR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbCl9XCJgXG4gICAgICAgIGxvZygnY2hlY2tlZCcsIHZhbCwgJz0+JywgdG1wKVxuICAgICAgICB1cmwgKz0gdG1wXG4gICAgICB9XG4gICAgfVxuICAgIGxvZyh1cmwpXG4gICAgbG9jYXRpb24uaHJlZiA9IHVybFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBsb2coJ3JlbmRlcmluZy4uJylcbiAgICAvLyBsb2codGhpcy5wcm9wcy5ocmVmKVxuICAgIC8vIGxvZyh0aGlzLnN0YXRlLmhyZWYpXG5cbiAgICBsZXQgbG9hZGluZyA9ICF0aGlzLnN0YXRlLm1vdW50ZWRcbiAgICBpZiAodGhpcy5zdGF0ZS5ocmVmICE9PSAnJyAgJiYgIHRoaXMucHJvcHMuaHJlZiAhPT0gdGhpcy5zdGF0ZS5ocmVmKSB7XG4gICAgICBsb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5nZXRGYWNldHMoKVxuICAgIH1cblxuICAgICQoJyNtb3JmLW1vZGFsIC5tb2RhbC10aXRsZScpLmh0bWwobG9hZGluZyA/ICcnIDogdGhpcy5zdGF0ZS5oZHIpXG5cbiAgICBjb25zdCBtaW4gPSAodGhpcy5zdGF0ZS5wYWdlIC0gMSkgKiB0aGlzLkZBQ0VUU19QRVJfUEFHRVxuICAgIGNvbnN0IG1heCA9IChtaW4gKyB0aGlzLkZBQ0VUU19QRVJfUEFHRSkgLSAxXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RhdGUub3B0aW9ucy5tYXAoKG9wdGlvbiwgbikgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyhuID49IG1pbiAmJiBuIDw9IG1heCAmJiAhbG9hZGluZyA/ICdmYXJvdycgOiAnZmFyb3cgaGlkZGVuJyl9IGtleT17b3B0aW9uLnZhbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjZWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIG5hbWU9e29wdGlvbi52YWx9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbH1cbiAgICAgICAgICAgIHJlZj17b3B0aW9uLnZhbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNlbGxcIj5cbiAgICAgICAgICB7QUpTLmFkZENvbW1hcyhvcHRpb24ubil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2VsbFwiPlxuICAgICAgICAgIHtvcHRpb24udHh0ID8gb3B0aW9uLnR4dCA6IG9wdGlvbi52YWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KSlcblxuICAgIGNvbnN0IHBhZ2luZyA9IFtdXG4gICAgY29uc3QgbnBhZ2VzID0gKE1hdGguY2VpbCh0aGlzLnN0YXRlLm9wdGlvbnMubGVuZ3RoIC8gdGhpcy5GQUNFVFNfUEVSX1BBR0UpKVxuICAgIGxldCBsb2Fkbm90ZSA9ICcnXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIGxvYWRub3RlID0gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7ICdmb250LXN0eWxlJzogJ2l0YWxpYycsIG1hcmdpbjogJzI1cHgnLCAndGV4dC1hbGlnbic6ICdjZW50ZXInIH19PlxuICAgICAgICAgIGxvYWRpbmcgZmlsdGVycy4uLlxuICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3R5bGU9e3sgd2lkdGg6ICcyNXB4JyB9fSBrZXk9e2xvYWRpbmd9IHNyYz1cIi9pbWFnZXMvbG9hZGluZy5naWZcIiAvPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYWdlID0gMVxuICAgICAgZm9yIChwYWdlID0gMTsgcGFnZSA8PSBucGFnZXM7IHBhZ2UrKykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wYWdlID09PSBwYWdlKVxuICAgICAgICAgIHBhZ2luZy5wdXNoKDxkaXYga2V5PXsncCcuY29uY2F0KHBhZ2UpfSBjbGFzc05hbWU9XCJ0b3BpbmJsb2NrXCI+e3BhZ2V9PC9kaXY+KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcGFnaW5nLnB1c2goPGEgaHJlZj17JyMnLmNvbmNhdChwYWdlKX0ga2V5PXsncCcuY29uY2F0KHBhZ2UpfSBvbkNsaWNrPXt0aGlzLnBhZ2VDbGlja30+e3BhZ2V9PC9hPilcbiAgICAgICAgcGFnaW5nLnB1c2goJyAnKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUucGFnZSA8IG5wYWdlcykge1xuICAgICAgICBjb25zdCB0bXAgPSAoXG4gICAgICAgICAgPGEgaHJlZj17JyMnLmNvbmNhdChwYWdlKX0ga2V5PXsncHAnLmNvbmNhdChwYWdlKX0gb25DbGljaz17dGhpcy5wYWdlQ2xpY2t9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbm9jaGl2ZS1yaWdodC1zb2xpZFwiIC8+XG4gICAgICAgICAgPC9hPilcbiAgICAgICAgcGFnaW5nLnB1c2godG1wKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm1vcmYtcGFnZVwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdGFibGUgZmFjZXQtc3ViamVjdFwiPlxuICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xvYWRub3RlfVxuICAgICAgICAgIDxkaXYgaWQ9XCJtb3JmLXBhZ2luZ1wiPlxuICAgICAgICAgICAge3BhZ2luZ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17bG9hZGluZyA/ICdidG4tcHJpbWFyeSBoaWRkZW4nIDogJ2J0bi1wcmltYXJ5J30gdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQXBwbHkgeW91ciBmaWx0ZXJzXCIgb25DbGljaz17dGhpcy5zdWJtaXRDbGlja30gLz5cbiAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxufSkvLyBlbmQgTU9SRnJlYWN0XG5cblxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICpcbiAqXG4gKiAgICBUSElSRCBQQVJUWSBJTkNMVURFUyBXRSBDQU5UIExJVkUgV0lUSE9VVCEgOC0pXG4gKlxuICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBDb29raWUgcGx1Z2luXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDA2IEtsYXVzIEhhcnRsIChzdGlsYnVlcm8uZGUpXG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlczpcbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLmh0bWxcbiAqXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBjb29raWUgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgdmFsdWUgYW5kIG90aGVyIG9wdGlvbmFsIHBhcmFtZXRlcnMuXG4gKlxuICogQGV4YW1wbGUgJC5jb29raWUoJ3RoZV9jb29raWUnLCAndGhlX3ZhbHVlJyk7XG4gKiBAZGVzYyBTZXQgdGhlIHZhbHVlIG9mIGEgY29va2llLlxuICogQGV4YW1wbGUgJC5jb29raWUoJ3RoZV9jb29raWUnLCAndGhlX3ZhbHVlJywgeyBleHBpcmVzOiA3LCBwYXRoOiAnLycsIGRvbWFpbjogJ2pxdWVyeS5jb20nLCBzZWN1cmU6IHRydWUgfSk7XG4gKiBAZGVzYyBDcmVhdGUgYSBjb29raWUgd2l0aCBhbGwgYXZhaWxhYmxlIG9wdGlvbnMuXG4gKiBAZXhhbXBsZSAkLmNvb2tpZSgndGhlX2Nvb2tpZScsICd0aGVfdmFsdWUnKTtcbiAqIEBkZXNjIENyZWF0ZSBhIHNlc3Npb24gY29va2llLlxuICogQGV4YW1wbGUgJC5jb29raWUoJ3RoZV9jb29raWUnLCBudWxsKTtcbiAqIEBkZXNjIERlbGV0ZSBhIGNvb2tpZSBieSBwYXNzaW5nIG51bGwgYXMgdmFsdWUuIEtlZXAgaW4gbWluZCB0aGF0IHlvdSBoYXZlIHRvIHVzZSB0aGUgc2FtZSBwYXRoIGFuZCBkb21haW5cbiAqICAgICAgIHVzZWQgd2hlbiB0aGUgY29va2llIHdhcyBzZXQuXG4gKlxuICogQHBhcmFtIFN0cmluZyBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb29raWUuXG4gKiBAcGFyYW0gU3RyaW5nIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgY29va2llLlxuICogQHBhcmFtIE9iamVjdCBvcHRpb25zIEFuIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcga2V5L3ZhbHVlIHBhaXJzIHRvIHByb3ZpZGUgb3B0aW9uYWwgY29va2llIGF0dHJpYnV0ZXMuXG4gKiBAb3B0aW9uIE51bWJlcnxEYXRlIGV4cGlyZXMgRWl0aGVyIGFuIGludGVnZXIgc3BlY2lmeWluZyB0aGUgZXhwaXJhdGlvbiBkYXRlIGZyb20gbm93IG9uIGluIGRheXMgb3IgYSBEYXRlIG9iamVjdC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBhIG5lZ2F0aXZlIHZhbHVlIGlzIHNwZWNpZmllZCAoZS5nLiBhIGRhdGUgaW4gdGhlIHBhc3QpLCB0aGUgY29va2llIHdpbGwgYmUgZGVsZXRlZC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBzZXQgdG8gbnVsbCBvciBvbWl0dGVkLCB0aGUgY29va2llIHdpbGwgYmUgYSBzZXNzaW9uIGNvb2tpZSBhbmQgd2lsbCBub3QgYmUgcmV0YWluZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSB0aGUgYnJvd3NlciBleGl0cy5cbiAqIEBvcHRpb24gU3RyaW5nIHBhdGggVGhlIHZhbHVlIG9mIHRoZSBwYXRoIGF0cmlidXRlIG9mIHRoZSBjb29raWUgKGRlZmF1bHQ6IHBhdGggb2YgcGFnZSB0aGF0IGNyZWF0ZWQgdGhlIGNvb2tpZSkuXG4gKiBAb3B0aW9uIFN0cmluZyBkb21haW4gVGhlIHZhbHVlIG9mIHRoZSBkb21haW4gYXR0cmlidXRlIG9mIHRoZSBjb29raWUgKGRlZmF1bHQ6IGRvbWFpbiBvZiBwYWdlIHRoYXQgY3JlYXRlZCB0aGUgY29va2llKS5cbiAqIEBvcHRpb24gQm9vbGVhbiBzZWN1cmUgSWYgdHJ1ZSwgdGhlIHNlY3VyZSBhdHRyaWJ1dGUgb2YgdGhlIGNvb2tpZSB3aWxsIGJlIHNldCBhbmQgdGhlIGNvb2tpZSB0cmFuc21pc3Npb24gd2lsbFxuICogICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlIGEgc2VjdXJlIHByb3RvY29sIChsaWtlIEhUVFBTKS5cbiAqIEB0eXBlIHVuZGVmaW5lZFxuICpcbiAqIEBuYW1lICQuY29va2llXG4gKiBAY2F0IFBsdWdpbnMvQ29va2llXG4gKiBAYXV0aG9yIEtsYXVzIEhhcnRsL2tsYXVzLmhhcnRsQHN0aWxidWVyby5kZVxuICovXG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICpcbiAqIEBleGFtcGxlICQuY29va2llKCd0aGVfY29va2llJyk7XG4gKiBAZGVzYyBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llLlxuICpcbiAqIEBwYXJhbSBTdHJpbmcgbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29va2llLlxuICogQHJldHVybiBUaGUgdmFsdWUgb2YgdGhlIGNvb2tpZS5cbiAqIEB0eXBlIFN0cmluZ1xuICpcbiAqIEBuYW1lICQuY29va2llXG4gKiBAY2F0IFBsdWdpbnMvQ29va2llXG4gKiBAYXV0aG9yIEtsYXVzIEhhcnRsL2tsYXVzLmhhcnRsQHN0aWxidWVyby5kZVxuICovXG4kLmNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHsgLy8gbmFtZSBhbmQgdmFsdWUgZ2l2ZW4sIHNldCBjb29raWVcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSAtMTtcbiAgICAgIH1cbiAgICAgIHZhciBleHBpcmVzID0gJyc7XG4gICAgICBpZiAob3B0aW9ucy5leHBpcmVzICYmICh0eXBlb2Ygb3B0aW9ucy5leHBpcmVzID09ICdudW1iZXInIHx8IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZykpIHtcbiAgICAgICAgICB2YXIgZGF0ZTtcbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuZXhwaXJlcyA9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKG9wdGlvbnMuZXhwaXJlcyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkYXRlID0gb3B0aW9ucy5leHBpcmVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBleHBpcmVzID0gJzsgZXhwaXJlcz0nICsgZGF0ZS50b1VUQ1N0cmluZygpOyAvLyB1c2UgZXhwaXJlcyBhdHRyaWJ1dGUsIG1heC1hZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuICAgICAgfVxuXG4gICAgICAvLyBDQVVUSU9OOiBOZWVkZWQgdG8gcGFyZW50aGVzaXplIG9wdGlvbnMucGF0aCBhbmQgb3B0aW9ucy5kb21haW5cbiAgICAgIC8vIGluIHRoZSBmb2xsb3dpbmcgZXhwcmVzc2lvbnMsIG90aGVyd2lzZSB0aGV5IGV2YWx1YXRlIHRvIHVuZGVmaW5lZFxuICAgICAgLy8gaW4gdGhlIHBhY2tlZCB2ZXJzaW9uIGZvciBzb21lIHJlYXNvbi4uLlxuICAgICAgdmFyIHBhdGggPSBvcHRpb25zLnBhdGggPyAnOyBwYXRoPScgKyAob3B0aW9ucy5wYXRoKSA6ICcnO1xuICAgICAgdmFyIGRvbWFpbiA9IG9wdGlvbnMuZG9tYWluID8gJzsgZG9tYWluPScgKyAob3B0aW9ucy5kb21haW4pIDogJyc7XG4gICAgICB2YXIgc2VjdXJlID0gb3B0aW9ucy5zZWN1cmUgPyAnOyBzZWN1cmUnIDogJyc7XG5cbiAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUgOS4nKT4wKSB7IC8vIElFOSBzdWNrcyBhbmQgY2FuIGtpc3MgaXQgKHRyYWNleSBtYXkyMDEyKVxuICAgICAgICBkb21haW49Jyc7XG4gICAgICAgIHBhdGg9Jyc7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFtuYW1lLCAnPScsIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlXS5qb2luKCcnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgeyAvLyBvbmx5IG5hbWUgZ2l2ZW4sIGdldCBjb29raWVcbiAgICAgIHZhciBjb29raWVWYWx1ZSA9IG51bGw7XG4gICAgICBpZiAoZG9jdW1lbnQuY29va2llICYmIGRvY3VtZW50LmNvb2tpZSAhPSAnJykge1xuICAgICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBjb29raWUgPSAkLnRyaW0oY29va2llc1tpXSk7XG4gICAgICAgICAgICAgIC8vIERvZXMgdGhpcyBjb29raWUgc3RyaW5nIGJlZ2luIHdpdGggdGhlIG5hbWUgd2Ugd2FudD9cbiAgICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PSAobmFtZSArICc9JykpIHtcbiAgICAgICAgICAgICAgICAgIGNvb2tpZVZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb29raWVWYWx1ZTtcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5cbi8vIChhZGFwdGVkKSBmcm9tIGh0dHA6Ly93d3cucXVlbmVzcy5jb20vY29kZS1zbmlwcGV0LzY4NTMvY2VudGVyLWFuLWVsZW1lbnQtb24tdGhlLXNjcmVlbi11c2luZy1qcXVlcnlcbi8vIHRoZW4geW91IGNhbiB1c2UgaXQgbGlrZTpcbi8vICAgICAgJChcIiNncmlkbWluaVwiKS5jZW50ZXIoKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLXBhcmFtLXJlYXNzaWduXG4kLmZuLmNlbnRlciA9IGZ1bmN0aW9uIGpxdWVyeV9leHRlbnNpb25fY2VudGVyKCkge1xuICBjb25zdCBteWhlaWdodCA9ICh0aGlzLmhlaWdodCgpICtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQodGhpcy5jc3MoJ3BhZGRpbmctdG9wJyksIDEwKSArXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuY3NzKCdwYWRkaW5nLWJvdHRvbScpLCAxMCkpXG5cbiAgbG9nKCdteWhlaWdodCcsIG15aGVpZ2h0KVxuICBsb2coJ215d2lkdGgnLCB0aGlzLndpZHRoKCkpXG4gIGxvZyhcbiAgICAndy5oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgJ3cud2lkdGgnLCAkKHdpbmRvdykud2lkdGgoKSxcbiAgICAndy5zY3JvbGxUb3AnLCAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgJ3cuc2Nyb2xsTGVmdCcsICQod2luZG93KS5zY3JvbGxMZWZ0KCksXG4gIClcblxuXG4gIGxldCB0b3BcbiAgbGV0IGxlZnRcbiAgaWYgKEFKUy5pb3MpIHtcbiAgICBjb25zdCB2cFcgPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGNvbnN0IHZwSCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgbG9nKCd2cEgnLCB2cEgpXG4gICAgbG9nKCd2cFcnLCB2cFcpXG5cbiAgICB0b3AgID0gKCh2cEggLSAgICAgbXloZWlnaHQpIC8gMikgICsgICQod2luZG93KS5zY3JvbGxUb3AoKVxuICAgIGxlZnQgPSAoKHZwVyAtIHRoaXMud2lkdGgoKSkgLyAyKSAgKyAgJCh3aW5kb3cpLnNjcm9sbExlZnQoKVxuICB9IGVsc2Uge1xuICAgIHRvcCAgPSAoJCh3aW5kb3cpLmhlaWdodCgpIC0gbXloZWlnaHQpIC8gMlxuICAgIGxlZnQgPSAoJCh3aW5kb3cpLndpZHRoKCkgIC0gdGhpcy53aWR0aCgpKSAvIDJcbiAgfVxuXG4gIC8vIGZvciBzbWFsbCB2aWV3cG9ydHMgbGlrZSBpcGhvbmUsIHdoZW4gY2VudGVyaW5nIHBvcHVwcywgZW5zdXJlIG1pbmltYWxseSArMjBweFxuICB0b3AgID0gTWF0aC5tYXgoMjAsIHRvcClcbiAgbGVmdCA9IE1hdGgubWF4KDIwLCBsZWZ0KVxuXG4gIHRoaXMuY3NzKHtcbiAgICBwb3NpdGlvbjogKEFKUy5pb3MgPyAnYWJzb2x1dGUnIDogJ2ZpeGVkJyksXG4gICAgZGlzcGxheTogICdibG9jaycsXG4gICAgdG9wLFxuICAgIGxlZnQsXG4gIH0pXG5cbiAgcmV0dXJuIHRoaXNcbn0gLy8gZW5kICQuZm4uY2VudGVyXG5cblxuJCgoKSA9PiB7XG4gIC8vIFVzZSB0aGlzIGdsb2JhbCBoYWNrLCBieSBhZGRpbmcgY2xhc3MgJ2FjY2Vzc2libGUtbGluaycgdG8gYW55IG1vdXNlLW9ubHkgZWxlbWVudCBkaXYvaW1nXG4gIEFKUy5tYWtlTW91c2VFbGVtZW50QWNjZXNzaWJsZSgnLmFjY2Vzc2libGUtbGluaycpXG5cblxuICBBSlMuc2V0VXBBY3Rpb25UcmFja2luZygpIC8vIE11c3QgYmUgYmVmb3JlIG90aGVyIGZvcm0gc3VibWl0IGhhbmRsZXJzIGFyZSBhc3NpZ25lZFxuICBBSlMubmF2X3RvcGhhdF9zZXR1cCgpXG4gIEFKUy5uYXZfdG9waGF0X3diX3NldHVwKClcblxuICAvLyBVSSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb25cbiAgQUpTLnNldHVwUG9wdXBMaW5rKClcbiAgQUpTLnNldFVwQ3JlYXRpdmVDb21tb25zTGljZW5zZUxpbmsoKVxuICBBSlMuc2V0VXBTZWFyY2hGb3JtcygpXG4gIEFKUy5zZXRVcEJvb2tSZWFkZXJJZnJhbWUoKVxuICBBSlMuc2V0VXBBY2NvcmRpb25zKClcbiAgQUpTLnNldFVwUmVsYXRlZEl0ZW1zKClcbiAgc2V0VXBDb3B5YWJsZVRleHRzKClcblxuICAvKiBnbG9iYWwgIGFyY2hpdmVfc2V0dXAgKi9cbiAgaWYgKHR5cGVvZiBhcmNoaXZlX3NldHVwICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIHdoZW4gRE9NIGxvYWRlZC9zdGFibGUsIGRvIHNvbWUgc2V0dXBcbiAgICAkKCgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZm4gb2YgYXJjaGl2ZV9zZXR1cClcbiAgICAgICAgZm4oKVxuICAgIH0pXG4gIH1cblxuICBBSlMuZm9vdGVyKClcbn0pXG5cblxuLy8gcHJvbW90ZSB0byBnbG9iYWxzOlxud2luZG93LkFKUyA9IEFKU1xud2luZG93LlRpbWVncmFmID0gVGltZWdyYWZcbiIsImltcG9ydCBDbGlwYm9hcmRKUyBmcm9tICdjbGlwYm9hcmQnXG5cbi8qKlxuICogU2hvd3MgYSBtZXNzYWdlIGluZGljYXRpbmcgdGhlIHN0YXR1cyBvZiB0aGUgY29weSBvcGVyYXRpb25cbiAqXG4gKiBTZXRzIHByb3BlciBBUklBIHByb3BlcnRpZXMgdG8gZW5zdXJlIHRoZSBzdGF0dXMgaXMgcmVhZCBvdXQgYnlcbiAqIGFjY2Vzc2libGUgdGVjaG5vbG9naWVzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29weWFibGVUZXh0XG4gKiBAcGFyYW0ge1N0cmluZ30gICAgICBtZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIHNob3dTdGF0dXNNZXNzYWdlKGNvcHlhYmxlVGV4dCwgbWVzc2FnZSkge1xuICBsZXQgb3V0cHV0ID0gY29weWFibGVUZXh0LnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpXG5cbiAgaWYgKCFvdXRwdXQpIHtcbiAgICBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKVxuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYWxlcnQnKVxuICAgIGNvcHlhYmxlVGV4dC5hcHBlbmRDaGlsZChvdXRwdXQpXG4gIH1cblxuICAvLyBFbXB0eSBpdCBmaXJzdCB0byB0cmlnZ2VyIGFjY2Vzc2liaWxpdHkgdGVjaG5vbG9naWVzIHRvIHJlYWQgb3V0IHRoZVxuICAvLyB2YWx1ZSBldmVuIGlmIGl0J3MgdGhlIHNhbWUgYXMgYmVmb3JlXG4gIG91dHB1dC50ZXh0Q29udGVudCA9ICcnXG4gIG91dHB1dC50ZXh0Q29udGVudCA9IG1lc3NhZ2Vcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY29weSBidXR0b24gd2l0aCBhbiBldmVudCBsaXN0ZW5lciB0aGF0IHRyaWdnZXJzIHRoZVxuICogY29weSBvcGVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb3B5YWJsZVRleHRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGNvcHlhYmxlVGV4dCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBidXR0b24udHlwZSA9ICdidXR0b24nXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb3B5J1xuICBidXR0b24udGl0bGUgPSAnQ29weSB0byBjbGlwYm9hcmQnXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpcGJvYXJkLXRhcmdldCcsIGAjJHtjb3B5YWJsZVRleHQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5pZH1gKVxuXG4gIHJldHVybiBidXR0b25cbn1cblxuLyoqXG4gKiBTZXRzIHVwIGEgc3BlY2lmaWMgY29weWFibGUgdGV4dCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb3B5YWJsZVRleHRcbiAqL1xuZnVuY3Rpb24gc2V0VXBDb3B5YWJsZVRleHQoY29weWFibGVUZXh0KSB7XG4gIC8vIE5vIDxpbnB1dD4gdG8gY29weSwgYWJvcnRcbiAgaWYgKCFjb3B5YWJsZVRleHQucXVlcnlTZWxlY3RvcignaW5wdXQnKSkgcmV0dXJuXG5cbiAgY29weWFibGVUZXh0LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbihjb3B5YWJsZVRleHQpKVxuXG4gIC8vIE1hcmsgaXQgYXMgXCJyZWFkeVwiIHNvIHdlIGNhbiBhdm9pZCBkb3VibGUtaW5pdGlhbGl6aW5nXG4gIGNvcHlhYmxlVGV4dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29weWFibGUtdGV4dC1yZWFkeScsICcnKVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgQ2xpcGJvYXJkSlMgYmVoYXZpb3IgZm9yIGFsbCBidXR0b25zIGFuZCBhdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIHNob3cgc3RhdHVzZXNcbiAqL1xuZnVuY3Rpb24gc2V0VXBDbGlwYm9hcmRKUygpIHtcbiAgY29uc3QgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKCdbZGF0YS1jb3B5YWJsZS10ZXh0XSBbZGF0YS1jbGlwYm9hcmQtdGFyZ2V0XScpXG5cbiAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY29weWFibGVUZXh0ID0gZXZlbnQudHJpZ2dlci5wYXJlbnRFbGVtZW50XG5cbiAgICBjb25zdCBtZXNzYWdlID0gKFxuICAgICAgY29weWFibGVUZXh0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb3B5YWJsZS10ZXh0LXN1Y2Nlc3MtbWVzc2FnZScpIHx8XG4gICAgICAnVGV4dCBjb3BpZWQgdG8gY2xpcGJvYXJkLidcbiAgICApXG5cbiAgICBzaG93U3RhdHVzTWVzc2FnZShjb3B5YWJsZVRleHQsIG1lc3NhZ2UpXG4gIH0pXG5cbiAgY2xpcGJvYXJkLm9uKCdlcnJvcicsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvcHlhYmxlVGV4dCA9IGV2ZW50LnRyaWdnZXIucGFyZW50RWxlbWVudFxuXG4gICAgY29uc3QgbWVzc2FnZSA9IChcbiAgICAgIGNvcHlhYmxlVGV4dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29weWFibGUtdGV4dC1lcnJvci1tZXNzYWdlJykgfHxcbiAgICAgICdTb21ldGhpbmcgd2VudCB3cm9uZy4nXG4gICAgKVxuXG4gICAgc2hvd1N0YXR1c01lc3NhZ2UoY29weWFibGVUZXh0LCBtZXNzYWdlKVxuICB9KVxufVxuXG4vKipcbiAqIFJlYWQtb25seSB0ZXh0IGlucHV0IGNvbXBvbmVudCB3aXRoIGEgYnV0dG9uIHRvIGNvcHkgdGhlIHRleHQgdG8gdGhlXG4gKiB1c2VyJ3MgY2xpcGJvYXJkXG4gKlxuICogUHJvZ3Jlc3NpdmVseSBlbmhhbmNlcyB0aGUgaW5wdXQgYnkgZ2VuZXJhdGluZyB0aGUgYnV0dG9uIGFuZCBzdGF0dXNcbiAqIG1lc3NhZ2UgZW50aXJlbHkgaW4gdGhlIEphdmFTY3JpcHQuXG4gKlxuICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgPGlucHV0PnMgYnV0IGl0IGNhbiBiZSBlYXNpbHkgbW9kaWZpZWQgdG8gc3VwcG9ydFxuICogPHRleHRhcmVhPnMgaW4gdGhlIGZ1dHVyZS5cbiAqXG4gKiBAc2VlIGNvcHlhYmxlLXRleHQubGVzc1xuICovXG5mdW5jdGlvbiBzZXRVcENvcHlhYmxlVGV4dHMoKSB7XG4gIGNvbnN0IGNvcHlhYmxlVGV4dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb3B5YWJsZS10ZXh0XTpub3QoW2RhdGEtY29weWFibGUtdGV4dC1yZWFkeV0pJylcblxuICAvLyBObyBjb21wb25lbnRzIGZvdW5kLCBhYm9ydFxuICBpZiAoY29weWFibGVUZXh0cy5sZW5ndGggPD0gMCkgcmV0dXJuXG5cbiAgLy8gQnJvd3NlciBjYW5ub3QgcHJvZ3JhbW1hdGljYWxseSBjb3B5LCBhYm9ydFxuICBpZiAoIUNsaXBib2FyZEpTLmlzU3VwcG9ydGVkKCkpIHJldHVyblxuXG4gIC8vIFR1cm4gaW50byBhbiBhcnJheSBzbyB3ZSBjYW4gdXNlIGZvckVhY2goKVxuICBbLi4uY29weWFibGVUZXh0c10uZm9yRWFjaChzZXRVcENvcHlhYmxlVGV4dClcbiAgc2V0VXBDbGlwYm9hcmRKUygpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFVwQ29weWFibGVUZXh0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXJjaGl2ZS5jc3NcIjsiXSwic291cmNlUm9vdCI6IiJ9