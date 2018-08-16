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
 * clipboard.js v2.0.1
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

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
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
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
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
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
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
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
            },
            get: function get() {
                return this._action;
            }
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
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(6);
var delegate = __webpack_require__(5);

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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

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
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
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
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
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
});

/***/ }),
/* 4 */
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(4);

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
/* 6 */
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
/* 7 */
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

__webpack_require__(/*! /Users/mitra/.npm/_cacache/tmp/git-clone-55659320/src/scripts/index.js */"./src/scripts/index.js");
module.exports = __webpack_require__(/*! /Users/mitra/.npm/_cacache/tmp/git-clone-55659320/src/styles/index.less */"./src/styles/index.less");


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
      var cssGrid = false && $('body').hasClass('devbox') && CSS.supports('display', 'grid');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9kaXN0L2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaWEtZGVzaWduLXN5c3RlbS9wdWJsaWMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2V0VXBDb3B5YWJsZVRleHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXNzL2FyY2hpdmUubGVzcyJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwialF1ZXJ5IiwibG9nIiwibG9jYXRpb24iLCJob3N0Iiwic3Vic3RyIiwiY29uc29sZSIsImJpbmQiLCJ0aHJvdHRsZSIsImZuIiwidGhyZXNoaG9sZCIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJsYXN0IiwiZGVmZXJUaW1lb3V0IiwiYXJncyIsIm5vdyIsIkRhdGUiLCJjYWxsRm4iLCJhcHBseSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZXBsYWNlQm9va1JlYWRlckZyYWdtZW50IiwicGF0aFN0cmluZyIsIm5ld0ZyYWdtZW50IiwiZnJhZ21lbnRSZWdleCIsIm1hdGNoIiwicmVwbGFjZSIsIkFKUyIsImVsbSIsImluX3Nob3ciLCJwYXJlbnRzIiwiaWQiLCJjaGFuIiwic2hvdyIsImxlbmd0aCIsIm9wZW5lZCIsInBhcmVudCIsImZpbmQiLCJ0b2dnbGUiLCJhdHRyIiwidGV4dCIsImNvbmNhdCIsImRpdiIsInVybCIsImhyZWYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXQiLCJodG0iLCJhcHBlbmQiLCJpc1RvdWNoRGV2aWNlIiwiYWRkQ2xhc3MiLCJsb2dvVGV4dCIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJuYXZoYXRfY2xpY2siLCJldnQiLCJ4cyIsImhhdF9vcGVuIiwiaGFzQ2xhc3MiLCJuYXZsaW5rIiwibXQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaXNub3ciLCJoaWRlIiwiY29sbGFwc2UiLCJ0b3BoYXRfZG9udF9jb3VudF9maXJzdF9vcGVuIiwiYXJjaGl2ZV9hbmFseXRpY3MiLCJzZW5kX3BpbmciLCJraW5kIiwiZWMiLCJlYSIsImVsIiwicGF0aG5hbWUiLCJjYWNoZV9idXN0IiwiTWF0aCIsInJhbmRvbSIsIm9uZSIsImNsaWNrIiwiaGFzIiwiZG9jdW1lbnQiLCJldmVudCIsIiRlIiwiaXMiLCJEb2N1bWVudFRvdWNoIiwidG9vbHRpcCIsIiRzaGFyZWRvd24iLCIkd3JhcGRhcmsiLCJ3cmFwZGFya193YXRjaGVyX3B0ciIsInNldEludGVydmFsIiwid3JhcGRhcmtfd2F0Y2hlciIsImNsZWFySW50ZXJ2YWwiLCJ3cmFwZGFya0hUIiwib2Zmc2V0IiwidG9wIiwiaW5uZXJIZWlnaHQiLCJwYXJzZUludCIsImNzcyIsImhlaWdodCIsIm11dGVkTk9XIiwiY29va2llIiwiZW11bGF0b3IiLCJzZXRNdXRlIiwicGxheWVyIiwiandwbGF5ZXIiLCJ2b2xub3ciLCJnZXRWb2x1bWUiLCJtdXRlX2NsaWNrX3ByaW9yX3ZvbHVtZSIsInNldFZvbHVtZSIsInBhdGgiLCJleHBpcmVzIiwiZ2FtZSIsInRvU3RyaW5nIiwiaWRlbnRpZmllciIsIklBTG9hZGVyIiwic2NhbGUiLCJwYXJzZUZsb2F0IiwibW9kdWxlIiwiaW5kZXhPZiIsInVubXV0ZSIsIm11dGUiLCJ0aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uIiwidGhlYXRyZV9jb250cm9sc19wb3NpdGlvbl90aHJvdHRsZXIiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJmYWRlT3V0Iiwic3RhcnQiLCJoYXNDdXN0b21DU1MiLCJFTSIsIkpTTUVTUyIsIkRPU0JPWCIsImNhbnZhcyIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsIk1vZHVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciIsIiRzZWxlY3RvckluIiwicGVnVG9wIiwid2lkdGhJbiIsImhlaWdodEluIiwiJHNlbGVjdG9yIiwidmlkZW8iLCJ3aWR0aCIsInJpZ2h0X2d1dHRlcl93aWR0aCIsInJvdW5kIiwidmlzaWJpbGl0eSIsInJpZ2h0IiwibWF4IiwidGhlYXRyZXNpemUiLCJwb2xsaW5nTWlsbGlzIiwiJHRleHR5aWZyYW1lIiwiY2hhbmdlQmdDb2xvciIsIiRjb250ZW50RG9tIiwiY29udGVudERvY3VtZW50IiwiJG1hdGNoIiwiYmdDb2xvckludGVydmFsIiwiaXNMZW5kYWJsZUJvb2siLCJkYXRhIiwiYm9va3NpemVfY29udHJvbHNfaGlkZGVuIiwiYm9va3NpemVfY29udHJvbHMiLCJib29rU2l6ZUludGVydmFsIiwiJGlmcmFtZSIsIiRpZnJhbWVET00iLCIkYm9vayIsIiRuYXZiYXIiLCJvdmVyZmxvdyIsInJlc2l6ZXIiLCJtZXRhZGF0YUhlaWdodCIsIm1heEgiLCJtYXhXIiwib3V0ZXJXaWR0aCIsIldIIiwibWluIiwicG9wY29ybl90aHJvdHRsZXIiLCJvbkNoYW5nZSIsInRoZWF0cmVzaXplX21heGhlaWdodCIsIm1heGltdW1IZWlnaHQiLCJtaW5IZWlnaHQiLCJ0YXJnZXRIZWlnaHQiLCJ0aGVhdHJlc2l6ZV90aHJvdHRsZXIiLCJzZWxlY3RvciIsImVuYWJsZVRocmVhdHJlQ2hhbmdlIiwiJGNhcm91c2VsIiwiaW1hZ2VQcm9taXNlcyIsIm1hcCIsImkiLCJpbWciLCJwcm9taXNlIiwiRGVmZXJyZWQiLCJyZXN1bHQiLCJjb21wbGV0ZSIsInJlc29sdmUiLCJuYXR1cmFsSGVpZ2h0Iiwid2hlbiIsInRoZW4iLCJjdXJySGVpZ2h0IiwibWF4SW1hZ2VIZWlnaHQiLCJ0cmlnZ2VyIiwianciLCJnZXRTdGF0ZSIsInRvTG93ZXJDYXNlIiwicGF1c2UiLCJsbmsiLCJzd2l0Y2hUb0EyWiIsInByb3BzIiwic2VsZWN0b3JJRCIsImNvbnRlbnRzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJtb2RhbCIsIm1vZGFsX2dvIiwidGl0bGUiLCJoZWFkZXJDbGFzcyIsImlnbm9yZV9sbmsiLCJhdXRvX3JlbW92ZSIsImJvZHkiLCJ2YWwiLCJhbGVydCIsImNsZWFuZWQiLCJvcHRzIiwib3B0aW9ucyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJodG1sIiwicGxhY2VtZW50IiwicG9wb3ZlciIsImRhdGVfc3dpdGNoZXJfaG92ZXIiLCJkYXRlX3N3aXRjaGVyX2NsaWNrIiwiZmlyc3QiLCJDMyIsIkMyMzQiLCJhdmFpbFdpZHRoIiwiQzIiLCJDNCIsImNvb2tpZV9yYW5nZSIsImRlZmF1bHRzIiwicHJlZmVyIiwic2hvd2RldGFpbHMiLCJjaGVja2VkIiwiYnRuIiwiJGJvZHkiLCJ0byIsImRvbWFpbiIsInRvZ2dsZUNsYXNzIiwidGlsZXIiLCJpblRhYiIsInRyaW0iLCJ0bXAiLCJpa2luZCIsImVhY2giLCJrIiwicm93Iiwia2V5IiwibW91c2VvdmVyIiwiZSIsIm1vdXNlb3V0Iiwic2VsZWN0b3JJbiIsIm5vUmVjYWxsIiwidGlsZU1hcmdpbkgiLCJ0aWxlTWFyZ2luVyIsInByb3AiLCIkcGFyZW50Um93IiwiY3NzR3JpZCIsIkNTUyIsInN1cHBvcnRzIiwidGlsZXJQUkVWIiwid2luVyIsInBhZCIsIm5QZXJSb3ciLCJndXR0ZXIiLCJ0aWxlV2lkdGgiLCJUSUxFX1dJRFRIIiwidW5zb3VyY2VkIiwiZmlyc3RMZWZ0IiwicGFyZW50X2hvdmVyIiwiJGZhY2V0cyIsImZhY2V0c1dpZHRoIiwiVElMRV9XSURUSF9TTUFMTCIsImZsb29yIiwiZXh0cmEiLCJuSW1nWmVyb0hlaWdodCIsIm5JbWdaZXJvSGVpZ2h0QXJ5IiwibWF4dG9wIiwidG9wcyIsImxlZnRzIiwidGlsZXJfdW5zb3VyY2luZyIsInYiLCJzcmMiLCJvbkVycm9yIiwicmVtb3ZlQXR0ciIsImNvbFBSRVYiLCJub3QiLCJpZHgiLCIkdmFsIiwiJHZhbEhUIiwiY2VpbCIsImNvbCIsImNvbFRFU1QiLCJjbXBURVNUIiwibGVmdCIsInB1c2giLCJqb2luIiwidGlsZXJfdGhyb3R0bGVyIiwiaWRzZWwiLCIkc2VsIiwiJG5ldyIsIiRub3ciLCJpa2luZF9tb2JpbGVfY2hhbmdlX2lnbm9yZV9uZXh0IiwiJHNlbG9wdCIsIiRpa2luZHMiLCIkaWtpbmQiLCJmaWx0ZXIiLCJwYWdlVHlwZSIsInB1c2hTdGF0ZSIsImhpc3RvcnkiLCJ0YWJQaWNrIiwiaGFzaDJhcmciLCJ0YWIiLCJhcmciLCJ0YWJieV9ub19wdXNoU3RhdGVfbmV4dF9jbGljayIsImxvY05PVyIsImxvY05FVyIsInByb3RvY29sIiwiZ3JhZnMiLCJhbHNvRm91bmRFbGVtZW50IiwiJHdpbmRvdyIsInRocm90dGxlZExpc3RlbmVyIiwiYWxzb0ZvdW5kIiwidG9wT2Zmc2V0Iiwid2luZG93SGVpZ2h0IiwibGF6eUxvYWRTdGFydCIsInNjcm9sbFRvcCIsImRvV2hlblNjcm9sbGVkVG9SZWxhdGVkU2VjdGlvbiIsIm9mZiIsInNjcm9sbCIsImdldFJlbGF0ZWRJdGVtcyIsInJlc3BvbnNlIiwidGlsZWJhcnMiLCJjYXRjaCIsImVycm9yIiwibWVzc2FnZSIsInNpemUiLCJQcm9taXNlIiwicmVqZWN0IiwiYXBpVXJsIiwicGFyYW0iLCJoYXNoRGF0YSIsImFwaUVycm9yIiwiaXRlbXMiLCJoaXRzIiwiRXJyb3IiLCJmb3JFYWNoIiwiaXRlbSIsIml0ZW1Tb3VyY2UiLCJfc291cmNlIiwic2luZ2xlSGFzaCIsIl9pZCIsIm51bVJldmlld3MiLCJsZW5kaW5nRW5hYmxlZCIsImxlbmRpbmdBdmFpbGFibGUiLCJsb2dpblJlcXVpcmVkIiwibGVuZENsYXNzIiwiZmF2b3JpdGUiLCJjcmVhdG9yIiwidmFsdWUiLCJkb3dubG9hZHMiLCJtZWRpYXR5cGUiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInhlciIsInJlbW92ZSIsIiRpdGVtIiwiaWRYIiwibGlzdGtpbmQiLCJuZXh0IiwiaWRzIiwidG9BcnJheSIsInJlZHVjZSIsImEiLCJiIiwiJGZvcm0iLCJzdWJtaXQiLCJoZWFkX2ltZ19kcmFnZHJvcF9zZXR1cF9kb25lIiwiaGVhZF9pbWdfcmVwbGFjZWFibGUiLCJmaWxlX3BpY2tlZCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwib3ZlciIsIngiLCJwYWdlWCIsIm9yaWdpbmFsRXZlbnQiLCJ5IiwicGFnZVkiLCJvdXRlckhlaWdodCIsImNhbmNlbEZpbGUiLCJzdWNjZXNzIiwidXBsb2FkRmlsZSIsImZhaWwiLCJYTUxIdHRwUmVxdWVzdCIsImJhZEZpbGUiLCJ4aHIiLCJmaWxlMnBvc3QiLCJ1cGxvYWQiLCJvcGVuIiwibmFtZSIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwicmVwbHkiLCJyZXNwb25zZVRleHQiLCJtYXQiLCJ0YXNrX2lkIiwic3RhbGtlcl9wdHIiLCJzdGFsa2VyIiwiYWpheCIsInR5cGUiLCJkYXRhVHlwZSIsInhtbCIsImdyZWVuIiwiYmx1ZSIsInJlZCIsIm5XYWl0IiwiZmlsZXMiLCJwcmV2aWV3RmlsZSIsImRhdGFUcmFuc2ZlciIsIncxIiwiaDEiLCJ3MiIsImgyIiwiaW9zIiwiRmlsZVJlYWRlciIsInJlYWRlciIsIm9ubG9hZCIsImltIiwiSW1hZ2UiLCJyZWFkQXNEYXRhVVJMIiwicGFnZWluZm8iLCJ1cmxzdGFydCIsIm11bHRpX3llYXIiLCJsYXN0X3llYXIiLCJ5ZWFyIiwic2VwIiwic3RyIiwibGFzdHllYXJtb250aCIsInBhZ2VzIiwic3BsaXQiLCJtb250aCIsImRheSIsInllYXJtb250aCIsInNraXBfZGF5IiwibW9udGhOYW1lIiwicGFnZSIsInBudW0iLCJqIiwiJGdyYWZzMSIsIiRncmFmczIiLCJ0b2siLCJzZXRVcFRvcFJlZ2lvbnNUYWJsZSIsImZvcm1hdCIsIiRmb3JtYXRHcm91cCIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJ0aGVBcmdOYW1lIiwidHJ5X2Z1bGwiLCJzQXJncyIsInNlYXJjaCIsInNsaWNlIiwiciIsInVuZXNjYXBlIiwiaGlkZUxvZ29UZXh0IiwibW91c2V0aW1lciIsImZhZGVJbiIsIm1vdXNlbGVhdmUiLCJuZXd0b3AiLCJjaGVjayIsIm1vcmVfc2VhcmNoaW5nIiwidXJsSW4iLCJwYWdlX25vdyIsIiRtb3JlX3NlYXJjaCIsInBhZ2VLZXkiLCJwYWdlX21hcCIsInVybHJlcGxhY2UiLCJyZXBsYWNlU3RhdGUiLCJhZGROb3RlcyIsImFkZGluZ05vdGVzS2luZCIsIm1vcmVfc2VhcmNoX3Rocm90dGxlciIsInNlbmRfc2Nyb2xsX2ZldGNoX2V2ZW50IiwiZW1iaWQiLCIkZW1iaWQiLCJlbWJ0eHQiLCJjbGFzcyIsInBvc2l0aW9uIiwicGFkZGluZyIsImJlc3RIVCIsImNvbmYiLCJjb25mSW4iLCJmZWVkYmFja19vbmx5IiwiX21vZGFsX2FkZCIsImV4aXRpbmciLCJzdWJtaXR0ZWQiLCJwb3N0ZGF0YSIsInNlcmlhbGl6ZSIsInBvc3QiLCJleGl0Rk4iLCJib29rbWFya1JlcyIsImNlbnRlciIsImF1dG9fY2xvc2UiLCJsb2dpbiIsInNob3duIiwiZm9sbG93X2xpbmtfb25fZGlzbWlzcyIsImh0bUluIiwia2V5dmFscyIsInJlcyIsImlzRmF2b3JpdGVTdWNjZXNzZnVsIiwiJGZhdk1vZGFsIiwiZmFpbE1lc3NhZ2UiLCJvYmoiLCJuU3RyIiwieDEiLCJ4MiIsInJneCIsInRlc3QiLCJheGlzIiwidG9GaXhlZCIsInN1ZmZpeEZtdCIsImQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjYWxsYmFjayIsInBsb3R0ZXJzIiwiY2ZnSW4iLCJmbXRfZm4iLCJwdHMiLCJtYW55IiwiY2ZnIiwieGF4aXMiLCJtb2RlIiwiY29sb3IiLCJkYXJrIiwieWF4aXMiLCJiYXJXaWR0aCIsImRheUJhcnNOb1BvaW50cyIsInNlcmllcyIsImJhcnMiLCJmaWxsIiwicG9pbnRzIiwiZ3JpZCIsImJvcmRlckNvbG9yIiwiaG92ZXJhYmxlIiwiYmFja2dyb3VuZENvbG9yIiwidGlwIiwiR3JhcGhQcmlvckluZGV4IiwiYXJ5Iiwibm9MYWJlbCIsImxhYmVsIiwic2VsaWQiLCJwbG90IiwicG9zIiwiZGF0YUluZGV4IiwiZGF0YXBvaW50IiwiJGdyYWYiLCJwZWdUbyIsInBlZ1RvVmFsIiwiQ29sb3JUaGllZiIsIndlbGNvbWVfcmVjb2xvcmVkIiwiY3QiLCJwYWxldHRlIiwiZ2V0UGFsZXR0ZSIsImRvbWluYW50Q29sb3JSR0IiLCJhdmdWYWwiLCJlbGVtZW50IiwibWFrZU1vdXNlRWxlbWVudEFjY2Vzc2libGVHbyIsImNvZGUiLCJrZXlDb2RlIiwid2hpY2giLCJrX3NwYWNlIiwia19lbnRlciIsIm11bHRpVmFsU3BsaXRDaGFyIiwiYXV0b2NvbXBsZXRlIiwibWluTGVuZ3RoIiwic291cmNlIiwicmVxdWVzdCIsInVpIiwidGVybSIsInBvcCIsImZvY3VzIiwic2VsZWN0IiwiYXV0b2NvbXBsZXRlX3NlbGVjdCIsInRlcm1zIiwiYWRkTm90ZUhUTSIsIiRodG0iLCJwcmV2IiwiJG5vdGUiLCJhY3Rpb24iLCIkcGFyZW50IiwiJG9yaWdOb3RlIiwiVFYiLCJUVjIiLCJ1bnBsYXkiLCJ0aHVtYnppbGxhcyIsInN0YXJ0ZW5kIiwiVFYzIiwiQ0xJUF9TRUNfTUFYMiIsIiRpbWdzIiwid2luSCIsInciLCJoIiwiV0FZQkFDSyIsIkhPU1RTX0VORFBPSU5UIiwiQU5DSE9SU19FTkRQT0lOVCIsIlJFRElSRUNUX1VSTCIsIlJFRElSRUNUX1NFQVJDSCIsInNlYXJjaF9vcl9jYWxlbmRhciIsInF1ZXJ5IiwiJGlucHV0IiwiZmlyZUFuYWx5dGljc1RyYWNraW5nRXZlbnQiLCJ0eXBlYWhlYWQiLCJjYWNoZSIsImRvbmUiLCJwcm9jZXNzIiwiaG9zdHMiLCJpc1VybCIsImV4Y2x1ZGVkIiwiZGlzcGxheV9uYW1lIiwiZGF0YTIiLCJtYXRjaGVyIiwiZGlzcGxheVRleHQiLCJhdXRvU2VsZWN0IiwiZGVsYXkiLCJmaXRUb0VsZW1lbnQiLCJtaW5MZW5naHQiLCJjaGFuZ2UiLCJjdXJyZW50IiwicGFyYW1zIiwic2Nyb2xsYmFycyIsInJlc2l6YWJsZSIsInRvb2xiYXIiLCJkaXJlY3RvcmllcyIsIm1lbnViYXIiLCJzdGF0dXMiLCJPYmplY3QiLCJrZXlzIiwicGFyYW1QYWlycyIsImNoaWxkcmVuIiwiaGFuZGxlQ2xpY2siLCJvcGVuUG9wdXAiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJsaWNlbnNlTmFtZSIsImxpY2Vuc2VTZWxlY3RlZCIsInNlYXJjaEZvcm1zIiwic2V0VXBTZWFyY2hGb3JtIiwiZm9ybU5vZGUiLCJmb3JtIiwic2VhcmNoQmFyIiwic2VhcmNoT3B0aW9ucyIsImtlZXBPcGVuV2hlbkNoYW5nZWQiLCJmb3JtQ2hhbmdlZCIsInJlZGlyZWN0V2F5YmFja1NlYXJjaGVzIiwid2F5YmFja01hY2hpbmVTZWFyY2hVcmwiLCJlbGVtZW50cyIsImNoZWNrZWRJbnB1dCIsInNlYXJjaElucHV0Iiwic2luVmFsdWUiLCJzZWFyY2hWYWx1ZSIsIm9wZW5PcHRpb25zIiwiY2xvc2VPcHRpb25zIiwiaGFuZGxlRm9jdXNDaGFuZ2UiLCJ0YXJnZXRFbGVtZW50IiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0IiwiaW5kZXgiLCJub2RlIiwibWVzc2FnZVR5cGUiLCJpZnJhbWUiLCJoYXNBdHRyaWJ1dGUiLCJ1cGRhdGVVcmwiLCJmcmFnbWVudCIsImhhc2giLCJjbG9zZUFsbEV4Y2VwdCIsImRldGFpbHNFbHMiLCJzZWxlY3RlZERldGFpbHMiLCJBcnJheSIsImZyb20iLCJkZXRhaWxzIiwic2V0VXBBY2NvcmRpb24iLCJhY2NvcmRpb24iLCJoYW5kbGVUb2dnbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5pbWF0ZSIsInNldEF0dHJpYnV0ZSIsImxpbmsiLCJpc19hZHZhbmNlZF9UVl9zZWFyY2giLCJhZHYiLCJtYXBwaW5nIiwieW1kIiwidG9JU09TdHJpbmciLCJhamF4U2V0dXAiLCJnZXRTY3JpcHQiLCJUVlNlYXJjaCIsImdldEpTT04iLCJwcm9QaWNrIiwiaG9zdG5hbWUiLCJjYXRlZ29yeSIsImNsaWNrVHJhY2tpbmdBdHRyaWJ1dGVOYW1lIiwiZm9ybVRyYWNraW5nQXR0cmlidXRlTmFtZSIsImFjdGlvbkhhbmRsZXIiLCJhdHRyaWJ1dGVOYW1lIiwiY2F0ZWdvcnlBY3Rpb24iLCJjYXRlZ29yeUFjdGlvblBhcnRzIiwid2lkdGhBdHRyaWJ1dGUiLCJoZWlnaHRBdHRyaWJ1dGUiLCJkYXRhSGFzaCIsImNhcHRpb24iLCJjYXB0aW9uQ2xhc3MiLCJjb3VudHMiLCJjb3VudCIsInN0YXRlIiwiY291bnRyeSIsImZvcm1hdHRlZE5hbWUiLCJmb3JtYXR0ZWRDb3VudCIsImVycm9yTXNnIiwib3JpZ2luYWxNZXNzYWdlVGV4dCIsImFwaU9wdGlvbnMiLCJ1YUtpbmRzIiwiZGF5cyIsImxpbWl0IiwiU3RhdHNBcGlDbGllbnQiLCJnZXRHZW9Db3VudHMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjZ2lfYXJncyIsIlRpbWVncmFmIiwibGVmdFRTIiwicml0ZVRTIiwibWluRGF0ZSIsIm1heERhdGUiLCJjIiwicmVhbEdyYXBoV2lkdGgiLCJHUkFQSF9XSURUSCIsIkdSQVBIX1BBRERJTkciLCJtYXhTbGlkZSIsImdldFRpbWUiLCJjc01pblRTIiwicml0ZSIsIiRzbGlkZXJkaXYiLCJHUkFQSF9IRUlHSFQiLCJ6SW5kZXgiLCJzbGlkZXIiLCJyYW5nZSIsInZhbHVlcyIsInNsaWRlIiwidHMiLCJkMSIsImQyIiwic2V0RGF0ZSIsImdldERhdGUiLCJkYXRlcGlja2VyIiwiZm9ybWF0RGF0ZSIsImhpZGVMIiwiaGlkZVIiLCJmb2ZmIiwidG9mZiIsInBpbmttZSIsInN0b3AiLCJhZGp1c3QiLCJ0aW1lY2hhbmdlZCIsImJlY29tZSIsInEiLCJwaW5rTCIsInBpbmtSIiwicmVjdCIsInR0bCIsIm9uZWRheXNwYW4iLCJmcm9tMiIsInRvMiIsImVuZCIsImRlZmluZVN0YXRzQXBpIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiU3RhdHNSZWdpb24iLCJHZW9Db3VudCIsImFkZENvbW1hcyIsImNyZWF0ZUdlb0NvdW50RnJvbUFwaURhdGEiLCJzdW1fY291bnRfdmFsdWUiLCJnZW9fY291bnRyeSIsImdlb19zdGF0ZSIsImNyZWF0ZUNvbWJpbmVkR2VvQ291bnRzRnJvbUFwaURhdGEiLCJjb3VudHNfZ2VvIiwiUmFuZ2VFcnJvciIsInVhS2luZElzQWxsb3dlZCIsInVhS2luZCIsImNvdW50c01hcCIsImNvdW50RGF0YSIsInVhX2tpbmQiLCJtYXBLZXkiLCJhcGlCYXNlVXJsIiwic29ydCIsImNvdW50MSIsImNvdW50MiIsIkNyZWF0aXZlQ29tbW9uc0xpY2Vuc2VMaW5rIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsIkRFRkFVTFRfTElOS19URVhUIiwiZGVmYXVsdFByb3BzIiwiZ2V0SW5pdGlhbFN0YXRlIiwibGlua1RleHQiLCJvbGRMaWNlbnNlTmFtZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwicmVtb3ZlTGljZW5zZSIsInJlbW92ZVJldGFpbkxpY2Vuc2VJbnB1dCIsImZvcm1JdGVtIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ3YXNMaWNlbnNlZENoYW5nZWQiLCJnZXRMaWNlbnNlQ2hhbmdlTWVzc2FnZSIsIk1PUkZyZWFjdCIsIkZBQ0VUU19QRVJfUEFHRSIsIm1vdW50ZWQiLCJoZHIiLCJnZXRGYWNldHMiLCJzZWxmIiwicmV0IiwicmVmcyIsImNvbXBvbmVudERpZE1vdW50IiwicGFnZUNsaWNrIiwic3VibWl0Q2xpY2siLCJtb3JmIiwibG9hZGluZyIsIm9wdGlvbiIsIm4iLCJwYWdpbmciLCJucGFnZXMiLCJsb2Fkbm90ZSIsIm1hcmdpbiIsInRvVVRDU3RyaW5nIiwiZGF0ZSIsInNldFRpbWUiLCJzZWN1cmUiLCJjb29raWVWYWx1ZSIsImNvb2tpZXMiLCJzdWJzdHJpbmciLCJkZWNvZGVVUklDb21wb25lbnQiLCJqcXVlcnlfZXh0ZW5zaW9uX2NlbnRlciIsIm15aGVpZ2h0Iiwic2Nyb2xsTGVmdCIsInZwVyIsImlubmVyV2lkdGgiLCJ2cEgiLCJkaXNwbGF5IiwibWFrZU1vdXNlRWxlbWVudEFjY2Vzc2libGUiLCJzZXRVcEFjdGlvblRyYWNraW5nIiwibmF2X3RvcGhhdF9zZXR1cCIsIm5hdl90b3BoYXRfd2Jfc2V0dXAiLCJzZXR1cFBvcHVwTGluayIsInNldFVwQ3JlYXRpdmVDb21tb25zTGljZW5zZUxpbmsiLCJzZXRVcFNlYXJjaEZvcm1zIiwic2V0VXBCb29rUmVhZGVySWZyYW1lIiwic2V0VXBBY2NvcmRpb25zIiwic2V0VXBSZWxhdGVkSXRlbXMiLCJhcmNoaXZlX3NldHVwIiwiZm9vdGVyIiwic2hvd1N0YXR1c01lc3NhZ2UiLCJjb3B5YWJsZVRleHQiLCJvdXRwdXQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUJ1dHRvbiIsImJ1dHRvbiIsInNldFVwQ29weWFibGVUZXh0Iiwic2V0VXBDbGlwYm9hcmRKUyIsImNsaXBib2FyZCIsIkNsaXBib2FyZEpTIiwicGFyZW50RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInNldFVwQ29weWFibGVUZXh0cyIsImNvcHlhYmxlVGV4dHMiLCJpc1N1cHBvcnRlZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBS0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsY0FBYztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtCQVFMO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQztBQUN0RCxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUEsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtCQVFMO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsMkNBQTJDO0FBQzlELG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDMTZCRCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsMkNBQTJDLGNBQWMsbXlLOzs7Ozs7Ozs7Ozs7Ozs7O3FqQkN4SXpEO0FBQ0E7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLElBQUlDLE9BQU9DLE1BQWpCOztBQUVBO0FBQ0E7QUFDQSxJQUFNQyxNQUFPQyxTQUFTQyxJQUFULENBQWNDLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsTUFBK0IsTUFBL0IsR0FBd0MsWUFBTSxDQUFFLENBQWhELEdBQW1EQyxRQUFRSixHQUFSLENBQVlLLElBQVosQ0FBaUJELE9BQWpCLENBQWhFOztBQUVBOzs7Ozs7Ozs7OztBQVdBLFNBQVNFLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQTZEO0FBQUEsTUFBdkNDLFVBQXVDLHVFQUExQixHQUEwQjtBQUFBLE1BQXJCQyxPQUFxQix1RUFBWEMsU0FBVzs7QUFDM0QsTUFBSUMsYUFBSjtBQUNBLE1BQUlDLHFCQUFKOztBQUVBLFNBQU8sWUFBYTtBQUFBLHNDQUFUQyxJQUFTO0FBQVRBLFVBQVM7QUFBQTs7QUFDbEI7QUFDQSxRQUFNQyxNQUFNLENBQUMsSUFBSUMsSUFBSixFQUFiOztBQUVBOzs7QUFHQSxhQUFTQyxNQUFULEdBQWtCO0FBQ2hCTCxhQUFPRyxHQUFQO0FBQ0FQLFNBQUdVLEtBQUgsQ0FBU1IsT0FBVCxFQUFrQkksSUFBbEI7QUFDRDs7QUFFRCxRQUFJRixRQUFRRyxNQUFNSCxPQUFPSCxVQUF6QixFQUFxQztBQUNuQ1UsbUJBQWFOLFlBQWI7QUFDQUEscUJBQWVPLFdBQVdILE1BQVgsRUFBbUJSLFVBQW5CLENBQWY7QUFDRCxLQUhELE1BR087QUFDTFE7QUFDRDtBQUNGLEdBbEJEO0FBbUJEOztBQUVEOzs7Ozs7Ozs7OztBQVdBLFNBQVNJLHlCQUFULENBQW1DQyxVQUFuQyxFQUErQ0MsV0FBL0MsRUFBNEQ7QUFDMUQ7QUFDQSxNQUFNQyxnQkFBZ0IsZ0RBQXRCOztBQUVBLE1BQUlGLFdBQVdHLEtBQVgsQ0FBaUJELGFBQWpCLENBQUosRUFDRSxPQUFPRixXQUFXSSxPQUFYLENBQW1CRixhQUFuQixRQUFzQ0QsV0FBdEMsQ0FBUDs7QUFFRixTQUFPLENBQUdELFVBQUgsU0FBaUJDLFdBQWpCLEVBQStCRyxPQUEvQixDQUF1QyxNQUF2QyxFQUErQyxHQUEvQyxDQUFQO0FBQ0Q7O0FBRUQ7O0lBQ01DLEc7Ozs7Ozs7QUFLMEI7eUJBU2xCQyxHLEVBQUs7QUFDZixVQUFNQyxVQUFVL0IsRUFBRThCLEdBQUYsRUFBT0UsT0FBUCxDQUFlLFFBQWYsQ0FBaEI7QUFDQSxVQUFJQyxXQUFKO0FBQ0EsVUFBSUMsYUFBSjtBQUNBLFVBQUlDLGFBQUo7QUFDQSxVQUFJSixRQUFRSyxNQUFaLEVBQW9CO0FBQ2xCO0FBQ0EsWUFBTUMsU0FBU3JDLEVBQUU4QixHQUFGLEVBQU9RLE1BQVAsR0FBZ0JDLElBQWhCLENBQXFCLFFBQXJCLENBQWY7QUFDQSxZQUFJRixPQUFPRCxNQUFYLEVBQW1CO0FBQ2pCO0FBQ0FDLGlCQUFPRyxNQUFQO0FBQ0EsaUJBQU8sS0FBUDtBQUNEO0FBQ0ROLGVBQU9ILFFBQVFVLElBQVIsQ0FBYSxXQUFiLENBQVA7QUFDQU4sZUFBT25DLEVBQUU4QixHQUFGLEVBQU9ZLElBQVAsRUFBUDtBQUNELE9BVkQsTUFVTztBQUNMUixlQUFPbEMsRUFBRThCLEdBQUYsRUFBT1ksSUFBUCxFQUFQO0FBQ0FULGFBQUssYUFBYVUsTUFBYixDQUFvQlQsSUFBcEIsQ0FBTDtBQUNBLFlBQU1VLE1BQU01QyxRQUFNaUMsRUFBTixDQUFaO0FBQ0EsWUFBSVcsSUFBSVIsTUFBUixFQUFnQjtBQUNkUSxjQUFJSixNQUFKO0FBQ0EsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUssTUFBU3pDLFNBQVMwQyxJQUFsQixpQkFBa0NaLElBQXRDO0FBQ0EsVUFBSUgsUUFBUUssTUFBWixFQUNFUyxPQUFPLFlBQVlGLE1BQVosQ0FBbUJJLG1CQUFtQlosSUFBbkIsQ0FBbkIsQ0FBUDtBQUNGaEMsVUFBSTBDLEdBQUo7O0FBRUE3QyxRQUFFZ0QsR0FBRixDQUFNSCxHQUFOLEVBQVcsVUFBQ0ksR0FBRCxFQUFTO0FBQ2xCLFlBQUlsQixRQUFRSyxNQUFaLEVBQW9CO0FBQ2xCcEMsWUFBRThCLEdBQUYsRUFBT1EsTUFBUCxHQUNHWSxNQURILHNCQUM2QmhCLElBRDdCLDhDQUMwRWUsR0FEMUU7QUFFRCxTQUhELE1BR087QUFDTGpELFlBQUU4QixHQUFGLEVBQU9RLE1BQVAsR0FDR1ksTUFESCxlQUNzQmpCLEVBRHRCLHFCQUN3Q0MsSUFEeEMsMENBQ2lGZSxHQURqRjtBQUVEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPLEtBQVA7QUFDRCxLLENBakQ2Qjs7QUFMOUI7QUFDQTs7Ozt1Q0F3RDBCO0FBQ3hCLFVBQUksQ0FBQ2pELEVBQUUsYUFBRixFQUFpQm9DLE1BQXRCLEVBQ0U7O0FBRUYsVUFBSVAsSUFBSXNCLGFBQUosRUFBSixFQUNFbkQsRUFBRSxNQUFGLEVBQVVvRCxRQUFWLENBQW1CLE9BQW5CLEVBREYsS0FHRXZCLElBQUl3QixRQUFKOztBQUdGckQsUUFBRSxhQUFGLEVBQ0dzRCxFQURILENBQ00sa0JBRE4sRUFDMEI7QUFBQSxlQUFNdEQsRUFBRSxXQUFGLEVBQWVvRCxRQUFmLENBQXdCLFFBQXhCLENBQU47QUFBQSxPQUQxQixFQUVHRSxFQUZILENBRU0sa0JBRk4sRUFFMEI7QUFBQSxlQUFNdEQsRUFBRSxXQUFGLEVBQWV1RCxXQUFmLENBQTJCLFFBQTNCLENBQU47QUFBQSxPQUYxQjs7QUFLQXZELFFBQUUsc0JBQUYsRUFBMEJzRCxFQUExQixDQUE2QixPQUE3QixFQUFzQyxTQUFTRSxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUMvRDtBQUNBLFlBQU1DLEtBQUssQ0FBQzFELEVBQUUsNEJBQUYsRUFBZ0NvQyxNQUE1QztBQUNBLFlBQU11QixXQUFXM0QsRUFBRSxhQUFGLEVBQWlCNEQsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBakI7QUFDQSxZQUFNQyxVQUFVLElBQWhCOztBQUVBO0FBQ0EsWUFBTUMsS0FBTTlELEVBQUV5RCxJQUFJTSxNQUFOLEVBQWN0QixJQUFkLENBQW1CLGVBQW5CLEtBQ0F6QyxFQUFFeUQsSUFBSU8sYUFBTixFQUFxQnZCLElBQXJCLENBQTBCLGVBQTFCLENBRFo7O0FBR0EsWUFBTXdCLFFBQVFqRSxFQUFFLCtCQUFGLEVBQW1DeUMsSUFBbkMsQ0FBd0MsZUFBeEMsQ0FBZDs7QUFFQSxZQUFJLEVBQUVpQixNQUFRQyxRQUFSLElBQXNCTSxVQUFVSCxFQUFsQyxDQUFKLEVBQTJDO0FBQ3pDO0FBQ0E5RCxZQUFFLFNBQUYsRUFBYWtFLElBQWI7QUFDQWxFLHlCQUFhOEQsRUFBYixFQUFtQjNCLElBQW5CO0FBQ0Q7O0FBR0QsWUFBSSxDQUFDd0IsUUFBTCxFQUFlO0FBQ2IzRCxZQUFFLGFBQUYsRUFBaUJtRSxRQUFqQixDQUEwQixNQUExQixFQURhLENBQ3FCOztBQUVsQyxjQUFJdEMsSUFBSXVDLDRCQUFSLEVBQXNDO0FBQ3BDLG1CQUFPdkMsSUFBSXVDLDRCQUFYO0FBQ0QsV0FGRCxNQUVPLElBQUksT0FBT0MsaUJBQVAsS0FBNkIsV0FBakMsRUFBOEM7QUFDbkQ7QUFDQUEsOEJBQWtCQyxTQUFsQixDQUE0QjtBQUMxQkMsb0JBQU0sT0FEb0I7QUFFMUJDLGtCQUFJLGFBRnNCO0FBRzFCQyxrQkFBSSxzQkFIc0I7QUFJMUJDLGtCQUFJdEUsU0FBU3VFLFFBSmE7QUFLMUJDLDBCQUFZQyxLQUFLQyxNQUFMO0FBTGMsYUFBNUI7QUFPRDtBQUNGOztBQUdELFlBQUksT0FBT2IsS0FBUCxLQUFpQixXQUFyQixFQUNFOUQsSUFBSSxPQUFKLEVBQWE4RCxLQUFiO0FBQ0Y5RCxZQUFJLFNBQUosRUFBZTJELEVBQWY7O0FBRUEsWUFBSUcsVUFBVUgsRUFBZCxFQUFrQjtBQUNoQjtBQUNBOUQsWUFBRSxhQUFGLEVBQWlCbUUsUUFBakIsQ0FBMEIsTUFBMUI7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7O0FBRUQsWUFBSVQsTUFBUUMsUUFBUixJQUFzQk0sVUFBVUgsRUFBcEMsRUFBd0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOUQsWUFBRSxhQUFGLEVBQWlCK0UsR0FBakIsQ0FBcUIsb0JBQXJCLEVBQTJDLFlBQU07QUFDL0N6RCx1QkFBVztBQUFBLHFCQUFNdEIsRUFBRTZELE9BQUYsRUFBV21CLEtBQVgsRUFBTjtBQUFBLGFBQVgsRUFBcUMsR0FBckM7QUFDRCxXQUZEO0FBR0FoRixZQUFFLGFBQUYsRUFBaUJtRSxRQUFqQixDQUEwQixNQUExQjtBQUNBLGlCQUFPLEtBQVA7QUFDRDs7QUFHRG5FLFVBQUUsc0JBQUYsRUFBMEJ1RCxXQUExQixDQUFzQyxRQUF0QyxFQUFnRDBCLEdBQWhELE9BQXdEbkIsRUFBeEQsRUFBOERWLFFBQTlELENBQXVFLFFBQXZFO0FBQ0FwRCxVQUFFLGFBQUYsRUFBaUJzRCxFQUFqQixDQUFvQixvQkFBcEIsRUFBMEM7QUFBQSxpQkFBTXRELEVBQUUsc0JBQUYsRUFBMEJ1RCxXQUExQixDQUFzQyxRQUF0QyxDQUFOO0FBQUEsU0FBMUM7O0FBR0E7QUFDQXZELFVBQUVrRixRQUFGLEVBQVlILEdBQVosQ0FBZ0Isb0JBQWhCLEVBQXNDLFVBQUNJLEtBQUQsRUFBVztBQUMvQyxjQUFNQyxLQUFLcEYsRUFBRW1GLE1BQU1wQixNQUFSLENBQVg7QUFDQTtBQUNBLGNBQUlxQixHQUFHM0MsSUFBSCxDQUFRLElBQVIsTUFBa0IsWUFBdEIsRUFDRSxPQUo2QyxDQUl0QztBQUNULGNBQUkyQyxHQUFHQyxFQUFILENBQU0sR0FBTixDQUFKLEVBQ0UsT0FONkMsQ0FNdEM7QUFDVCxjQUFJRCxHQUFHeEIsUUFBSCxDQUFZLFVBQVosS0FBNkJ3QixHQUFHeEIsUUFBSCxDQUFZLFNBQVosQ0FBakMsRUFDRTs7QUFFRjtBQUNBNUQsWUFBRSxnQkFBRixFQUFvQm1FLFFBQXBCLENBQTZCLE1BQTdCO0FBQ0QsU0FaRDs7QUFjQSxlQUFPLEtBQVA7QUFDRCxPQWpGRDtBQWtGRDs7O29DQUdzQjtBQUNyQixhQUFRLGtCQUFrQmxFLE1BQWxCLElBQ0NBLE9BQU9xRixhQUFQLElBQXdCSixvQkFBb0JqRixPQUFPcUYsYUFENUQ7QUFFRDs7OzZCQUdlO0FBQ2QsVUFBSSxDQUFDekQsSUFBSXNCLGFBQUosRUFBRCxJQUEwQixPQUFPbkQsRUFBRVUsRUFBRixDQUFLNkUsT0FBWixLQUF3QixXQUF0RCxFQUFtRTtBQUNqRXZGLFVBQUUsMElBQUYsRUFBOEl1RixPQUE5SSxDQUFzSixFQUF0SjtBQUVBO0FBQ0Q7QUFDRjs7O3VDQUd5QjtBQUFFO0FBQzFCLFVBQUksQ0FBQzFELElBQUkyRCxVQUFULEVBQXFCO0FBQ25CM0QsWUFBSTJELFVBQUosR0FBaUJ4RixFQUFFLFlBQUYsQ0FBakI7QUFDQTZCLFlBQUk0RCxTQUFKLEdBQWlCekYsRUFBRSxXQUFGLENBQWpCO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJLENBQUM2QixJQUFJNkQsb0JBQVQsRUFDRTdELElBQUk2RCxvQkFBSixHQUEyQkMsWUFBWTlELElBQUkrRCxnQkFBaEIsRUFBa0MsSUFBbEMsQ0FBM0I7O0FBRUYsVUFBSSxDQUFDL0QsSUFBSTJELFVBQUosQ0FBZXBELE1BQWhCLElBQTRCLENBQUNQLElBQUk0RCxTQUFKLENBQWNyRCxNQUEvQyxFQUF1RDtBQUNyRHlELHNCQUFjaEUsSUFBSTZELG9CQUFsQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTUksYUFBYWpFLElBQUkyRCxVQUFKLENBQWVPLE1BQWYsR0FBd0JDLEdBQXhCLEdBQThCbkUsSUFBSTJELFVBQUosQ0FBZWpELElBQWYsQ0FBb0IsZ0JBQXBCLEVBQXNDMEQsV0FBdEMsRUFBakQ7QUFDQSxVQUFJQyxTQUFTckUsSUFBSTRELFNBQUosQ0FBY1UsR0FBZCxDQUFrQixRQUFsQixDQUFULEVBQXNDLEVBQXRDLE1BQThDTCxVQUFsRCxFQUE4RDtBQUM1RGpFLFlBQUk0RCxTQUFKLENBQWNVLEdBQWQsQ0FBa0IsRUFBRUMsUUFBUU4sVUFBVixFQUFsQixFQUEwQzNELElBQTFDO0FBQ0FoQyxZQUFJLHdCQUFKLEVBQThCMkYsVUFBOUI7QUFDRDtBQUNGOzs7aUNBR21CO0FBQ2xCLFVBQU1PLFdBQVcsQ0FBQ3JHLEVBQUVzRyxNQUFGLENBQVMsUUFBVCxDQUFsQjs7QUFFQSxVQUFJLEtBQUtDLFFBQVQsRUFBbUI7QUFDakIsYUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCLENBQUNILFFBQXZCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTUksU0FBU0MsU0FBUyxLQUFULENBQWY7QUFDQSxZQUFJRCxNQUFKLEVBQVk7QUFDVixjQUFNRSxTQUFTRixPQUFPRyxTQUFQLEVBQWY7QUFDQSxjQUFJRCxNQUFKLEVBQVk7QUFDVjlFLGdCQUFJZ0YsdUJBQUosR0FBOEJGLE1BQTlCO0FBQ0FGLG1CQUFPSyxTQUFQLENBQWlCLENBQWpCO0FBQ0QsV0FIRCxNQUdPO0FBQ0xMLG1CQUFPSyxTQUFQLENBQWlCLE9BQU9qRixJQUFJZ0YsdUJBQVgsS0FBdUMsV0FBdkMsR0FBcUQsR0FBckQsR0FDZmhGLElBQUlnRix1QkFETjtBQUVEO0FBQ0Y7QUFDRjs7QUFHRDdHLFFBQUUsOERBQUYsRUFBa0V3QyxNQUFsRTs7QUFHQSxVQUFJNkQsUUFBSixFQUFjO0FBQ1o7QUFDQXJHLFVBQUVzRyxNQUFGLENBQVMsUUFBVCxFQUFtQixDQUFuQixFQUFzQixFQUFFUyxNQUFNLFVBQVIsRUFBb0JDLFNBQVMsRUFBN0IsRUFBdEI7QUFDRCxPQUhELE1BR087QUFDTDtBQUNBaEgsVUFBRXNHLE1BQUYsQ0FBUyxRQUFULEVBQW1CLElBQW5CLEVBQXlCLEVBQUVTLE1BQU0sVUFBUixFQUF6QjtBQUNEOztBQUdELGFBQU8sS0FBUDtBQUNEOzs7a0NBR29CRSxJLEVBQU07QUFDekI7QUFDQUEsV0FBS0MsUUFBTCxHQUFpQjtBQUFBLGVBQU1ELEtBQUtFLFVBQVg7QUFBQSxPQUFqQjtBQUNBdEYsVUFBSTBFLFFBQUosR0FBZSxJQUFJYSxRQUFKLENBQ2JwSCxFQUFFLFNBQUYsRUFBYWdELEdBQWIsQ0FBaUIsQ0FBakIsQ0FEYSxFQUNRaUUsSUFEUixFQUNjLElBRGQsRUFFWkEsS0FBS0ksS0FBTCxHQUFhQyxXQUFXTCxLQUFLSSxLQUFoQixDQUFiLEdBQXNDLENBRjFCLEVBR1pKLEtBQUtNLE1BQUwsQ0FBWUMsT0FBWixDQUFvQixRQUFwQixNQUFrQyxDQUFsQyxHQUFzQyxvQkFBdEMsR0FBNkQsa0JBSGpELENBQWY7O0FBT0F4SCxRQUFFLDhEQUFGLEVBQWtFa0UsSUFBbEU7QUFDQSxVQUFJbEUsRUFBRXNHLE1BQUYsQ0FBUyxRQUFULENBQUosRUFBd0I7QUFDdEJ0RyxVQUFFLGdDQUFGLEVBQW9DbUMsSUFBcEM7QUFDQU4sWUFBSTBFLFFBQUosQ0FBYWtCLE1BQWI7QUFDRCxPQUhELE1BR087QUFDTHpILFVBQUUsOEJBQUYsRUFBa0NtQyxJQUFsQztBQUNBTixZQUFJMEUsUUFBSixDQUFhbUIsSUFBYjtBQUNEOztBQUVEN0YsVUFBSThGLHlCQUFKO0FBQ0EzSCxRQUFFQyxNQUFGLEVBQVVxRCxFQUFWLENBQWEsMkJBQWIsRUFBMEMsWUFBTTtBQUM5Q2pDLHFCQUFhUSxJQUFJK0YsbUNBQWpCO0FBQ0EvRixZQUFJK0YsbUNBQUosR0FBMEN0RyxXQUFXTyxJQUFJOEYseUJBQWYsRUFBMEMsR0FBMUMsQ0FBMUM7QUFDRCxPQUhEO0FBSUQ7Ozs4QkFHZ0I7QUFDZjs7QUFFQTtBQUNBM0gsUUFBRSxjQUFGLEVBQWtCNkgsT0FBbEIsaVFBSUdDLFFBSkgsQ0FJWTlILEVBQUUsa0JBQUYsQ0FKWixFQUltQ29ELFFBSm5DLENBSTRDLFNBSjVDOztBQU1BcEQsUUFBRSxXQUFGLEVBQWUrSCxPQUFmLENBQXVCLE1BQXZCO0FBQ0EvSCxRQUFFLGVBQUYsRUFBbUJtRyxHQUFuQixDQUF1QixZQUF2QixFQUFxQyxTQUFyQztBQUNBdEUsVUFBSTBFLFFBQUosQ0FBYXlCLEtBQWIsQ0FBbUIsRUFBRUMsY0FBYyxJQUFoQixFQUFuQjs7QUFFQTtBQUNBLFVBQU1DLEtBQU1DLFVBQVlDLE1BQVosSUFBd0IsS0FBcEM7QUFDQSxVQUFJRixPQUFTRyxPQUFPQyx1QkFBUCxJQUFrQ0QsT0FBT0Usb0JBQXpDLElBQ0NGLE9BQU9HLGlCQURqQixDQUFKLEVBQ3lDO0FBQ3ZDeEksVUFBRSxlQUFGLEVBQW1Cc0QsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxpQkFBTW1GLE9BQU9ELGlCQUFQLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQU47QUFBQSxTQUEvQjtBQUNBLFlBQUssSUFBSSx3QkFBOEJ0RCxRQUFsQyxFQUE0Q0EsU0FBU3dELGdCQUFULENBQTBCLGtCQUExQixFQUFvRFIsR0FBR1MsdUJBQXZELEVBQTVDLEtBQ0EsSUFBSSwyQkFBOEJ6RCxRQUFsQyxFQUE0Q0EsU0FBU3dELGdCQUFULENBQTBCLHFCQUExQixFQUFvRFIsR0FBR1MsdUJBQXZELEVBQTVDLEtBQ0EsSUFBSSw4QkFBOEJ6RCxRQUFsQyxFQUE0Q0EsU0FBU3dELGdCQUFULENBQTBCLHdCQUExQixFQUFvRFIsR0FBR1MsdUJBQXZEO0FBQ2xEOztBQUVEckgsaUJBQVdPLElBQUk4Rix5QkFBZixFQUE0QyxHQUE1QztBQUNBckcsaUJBQVdPLElBQUk4Rix5QkFBZixFQUE0QyxHQUE1QztBQUNBckcsaUJBQVdPLElBQUk4Rix5QkFBZixFQUEyQyxJQUEzQztBQUNBckcsaUJBQVdPLElBQUk4Rix5QkFBZixFQUEwQyxLQUExQzs7QUFFQSxhQUFPLEtBQVA7QUFDRDs7OzhDQUdnQ2lCLFcsRUFBYUMsTSxFQUFRQyxPLEVBQVNDLFEsRUFBVTtBQUN2RTtBQUNBO0FBQ0EsVUFBSUMsWUFBWUosV0FBaEI7QUFDQSxVQUFNSyxRQUFTRixZQUFjLENBQUNILFdBQTlCO0FBQ0EsVUFBSSxDQUFDSyxLQUFMLEVBQVk7QUFDVixZQUFJLENBQUNMLFdBQUwsRUFBa0JJLFlBQVloSixFQUFFLFNBQUYsQ0FBWixDQURSLENBQ2lDO0FBQzNDLFlBQUksQ0FBQ2dKLFVBQVU1RyxNQUFmLEVBQXVCLE9BRmIsQ0FFb0I7QUFDL0I7O0FBRUQsVUFBTWdFLFNBQVU2QyxRQUFRRixRQUFSLEdBQW1CQyxVQUFVNUMsTUFBVixFQUFuQztBQUNBLFVBQU04QyxRQUFVRCxRQUFRSCxPQUFSLEdBQW1CRSxVQUFVRSxLQUFWLEVBQW5DOztBQUVBLFVBQUksQ0FBQ0QsS0FBRCxJQUFZLE9BQU9KLE1BQVAsS0FBa0IsV0FBbEMsRUFDRTdJLEVBQUUsbUJBQUYsRUFBdUIrRixNQUF2QixDQUE4QixFQUFFQyxLQUFLNkMsTUFBUCxFQUE5Qjs7QUFHRjtBQUNBO0FBQ0E7QUFDQSxVQUFNTSxxQkFDSnRFLEtBQUt1RSxLQUFMLENBQVcsQ0FBQ3BKLEVBQUUsa0JBQUYsRUFBc0JrSixLQUF0QixLQUFnQ2xKLEVBQUUsbUJBQUYsRUFBdUJrSixLQUF2QixFQUFoQyxHQUFpRUEsS0FBbEUsSUFBMkUsQ0FBdEYsQ0FERjs7QUFHQS9JLFVBQUksT0FBSixFQUFhK0ksS0FBYjtBQUNBL0ksVUFBSSxvQkFBSixFQUEwQmdKLGtCQUExQjs7QUFHQW5KLFFBQUUsbUJBQUYsRUFBdUJtRyxHQUF2QixDQUEyQjtBQUN6QkMsc0JBRHlCO0FBRXpCaUQsb0JBQVksU0FGYTtBQUd6QkMsZUFBT3pFLEtBQUswRSxHQUFMLENBQVMsRUFBVCxFQUFhSixxQkFBcUIsQ0FBbEM7QUFIa0IsT0FBM0I7QUFLRDs7OytCQUdpQjtBQUNoQixVQUFJLENBQUNuSixFQUFFLFFBQUYsRUFBWW9DLE1BQWpCLEVBQ0U7O0FBRUY7QUFDQVAsVUFBSTJILFdBQUo7O0FBRUEsVUFBTUMsZ0JBQWdCLEdBQXRCOztBQUVBO0FBQ0EsVUFBTUMsZUFBZTFKLEVBQUUsZUFBRixDQUFyQjtBQUNBLFVBQU0ySixnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsWUFBTUMsY0FBYzVKLEVBQUUwSixhQUFhMUcsR0FBYixDQUFpQixDQUFqQixFQUFvQjZHLGVBQXRCLENBQXBCO0FBQ0EsWUFBTUMsU0FBU0YsWUFBWXJILElBQVosQ0FBaUIsYUFBakIsQ0FBZjtBQUNBLFlBQUl1SCxPQUFPMUgsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQndILHNCQUFZckgsSUFBWixDQUFpQixtQkFBakIsRUFBc0M0RCxHQUF0QyxDQUEwQyxrQkFBMUMsRUFBOEQsYUFBOUQ7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxlQUFPLEtBQVA7QUFDRCxPQVJEO0FBU0EsVUFBSSxDQUFDd0QsZUFBTCxFQUFzQjtBQUNwQixZQUFNSSxrQkFBa0JwRSxZQUFZLFlBQU07QUFDeEMsY0FBSWdFLGVBQUosRUFDRTlELGNBQWNrRSxlQUFkO0FBQ0gsU0FIdUIsRUFHckJOLGFBSHFCLENBQXhCO0FBSUQ7O0FBRUQ7QUFDQTtBQUNBLFVBQU1PLGlCQUFpQixPQUFPaEssRUFBRSxRQUFGLEVBQVlpSyxJQUFaLENBQWlCLGVBQWpCLENBQVAsS0FBNkMsV0FBcEU7QUFDQSxVQUFJLENBQUNELGNBQUQsSUFBbUIsQ0FBQ25JLElBQUlxSSx3QkFBNUIsRUFBc0Q7QUFDcERySSxZQUFJc0ksaUJBQUo7QUFDQSxZQUFNQyxtQkFBbUJ6RSxZQUFZLFlBQU07QUFDekMsY0FBSSxDQUFDOUQsSUFBSXFJLHdCQUFULEVBQ0VySSxJQUFJc0ksaUJBQUosR0FERixLQUdFdEUsY0FBY3VFLGdCQUFkO0FBQ0gsU0FMd0IsRUFLdEJYLGFBTHNCLENBQXpCO0FBTUQ7QUFDRjs7QUFFRDtBQUNBOzs7O3dDQUMyQjtBQUN6QixVQUFNWSxVQUFVckssRUFBRSxjQUFGLENBQWhCO0FBQ0EsVUFBSSxDQUFDcUssUUFBUWpJLE1BQWIsRUFDRTtBQUNGLFVBQU1rSSxhQUFhdEssRUFBRXFLLFFBQVFySCxHQUFSLENBQVksQ0FBWixFQUFlNkcsZUFBakIsQ0FBbkI7QUFDQSxVQUFJLENBQUNTLFdBQVdsSSxNQUFoQixFQUNFOztBQUVGLFVBQUksQ0FBQ1AsSUFBSXFJLHdCQUFULEVBQW1DO0FBQ2pDLFlBQUksQ0FBQ0ksV0FBVy9ILElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEJILE1BQS9CLEVBQXVDO0FBQ3JDakMsY0FBSSxvQkFBSjtBQUNBO0FBQ0Q7QUFDRCxZQUFJbUssV0FBVy9ILElBQVgsQ0FBZ0IsZ0JBQWhCLEVBQWtDSCxNQUFsQyxHQUEyQyxDQUEvQyxFQUFrRDtBQUNoRDtBQUNBa0kscUJBQVcvSCxJQUFYLENBQWdCLFFBQWhCLEVBQTBCMkIsSUFBMUI7QUFDRDtBQUNEckMsWUFBSXFJLHdCQUFKLEdBQStCLElBQS9CO0FBQ0FsSyxVQUFFLGVBQUYsRUFBbUJtRyxHQUFuQixDQUF1QixZQUF2QixFQUFxQyxTQUFyQztBQUNBaEcsWUFBSSx1QkFBSjtBQUNEOztBQUVEbUssaUJBQVcvSCxJQUFYLENBQWdCLG1CQUFoQixFQUFxQzRELEdBQXJDLENBQXlDLGtCQUF6QyxFQUE2RCxhQUE3RDs7QUFFQTtBQUNBLFVBQU1vRSxRQUFRRCxXQUFXL0gsSUFBWCxDQUFnQiw2QkFBaEIsQ0FBZDs7QUFFQTtBQUNBO0FBQ0EsVUFBTWlJLFVBQVV4SyxFQUFFLFNBQUYsQ0FBaEI7QUFDQTtBQUNBO0FBQ0EsVUFBTTZJLFNBQVUyQixRQUFRekUsTUFBUixHQUFpQkMsR0FBakIsR0FBdUJ3RSxRQUFRcEUsTUFBUixFQUF2QixHQUNBRixTQUFTbEcsRUFBRSxRQUFGLEVBQVltRyxHQUFaLENBQWdCLGFBQWhCLENBQVQsRUFBeUMsRUFBekMsQ0FEaEI7QUFFQXRFLFVBQUk4Rix5QkFBSixDQUE4QjRDLEtBQTlCLEVBQXFDMUIsTUFBckM7QUFDQTFJLFVBQUksVUFBSixFQUFnQmtLLFFBQVF0RSxNQUFSLEdBQWlCQyxHQUFqQixHQUF1QnVFLE1BQU14RSxNQUFOLEdBQWVDLEdBQXRELEVBQTJELGFBQTNELEVBQTBFNkMsTUFBMUU7O0FBRUE7QUFDQTdJLFFBQUUsYUFBRixFQUFpQm1HLEdBQWpCLENBQXFCLEVBQUVzRSxVQUFVLFFBQVosRUFBckI7QUFDRDs7O2tDQUdvQjtBQUNuQixVQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixZQUFNQyxpQkFBaUIsR0FBdkIsQ0FEb0IsQ0FDTztBQUMzQixZQUFNQyxPQUFPNUssRUFBRUMsTUFBRixFQUFVbUcsTUFBVixLQUFxQnBHLEVBQUUsY0FBRixFQUFrQitGLE1BQWxCLEdBQTJCQyxHQUFoRCxHQUFzRDJFLGNBQW5FO0FBQ0EsWUFBTUUsT0FBTzdLLEVBQUUsa0JBQUYsRUFBc0I4SyxVQUF0QixFQUFiO0FBQ0E7QUFDQSxZQUFNQyxLQUFLLEVBQUU3QixPQUFPMkIsSUFBVCxFQUFlekUsUUFBUXZCLEtBQUttRyxHQUFMLENBQVNKLElBQVQsRUFBaUJDLE9BQU8sQ0FBUixHQUFhLEVBQWQsR0FBb0IsRUFBbkMsQ0FBdkIsRUFBWDtBQUNBMUssWUFBSSxrQkFBSixFQUF3QjRLLEVBQXhCO0FBQ0EvSyxVQUFFLGNBQUYsRUFBa0JtRyxHQUFsQixDQUFzQjRFLEVBQXRCLEVBUG9CLENBT007QUFDM0IsT0FSRDtBQVNBTCxnQkFWbUIsQ0FVVDtBQUNWMUssUUFBRUMsTUFBRixFQUFVcUQsRUFBVixDQUFhLDJCQUFiLEVBQTBDLFlBQU07QUFDOUNqQyxxQkFBYVEsSUFBSW9KLGlCQUFqQjtBQUNBcEosWUFBSW9KLGlCQUFKLEdBQXdCM0osV0FBV29KLE9BQVgsRUFBb0IsR0FBcEIsQ0FBeEI7QUFDRCxPQUhEO0FBSUQ7O0FBR0Q7Ozs7Ozs7Ozs7Z0NBT21CUSxRLEVBQVU7QUFDM0IsVUFBSSxDQUFDckosSUFBSXNKLHFCQUFULEVBQ0V0SixJQUFJc0oscUJBQUosR0FBNEIsSUFBNUI7QUFDRixVQUFNVCxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixZQUFNQyxpQkFBaUIsR0FBdkIsQ0FEb0IsQ0FDTztBQUMzQixZQUFNUyxnQkFBZ0IsSUFBdEIsQ0FGb0IsQ0FFTztBQUMzQixZQUFNQyxZQUFZeEcsS0FBS21HLEdBQUwsQ0FBU2hMLEVBQUVDLE1BQUYsRUFBVWlKLEtBQVYsRUFBVCxFQUE0QixHQUE1QixDQUFsQjtBQUNBLFlBQUlvQyxlQUFldEwsRUFBRUMsTUFBRixFQUFVbUcsTUFBVixLQUFxQnBHLEVBQUUsV0FBRixFQUFlb0csTUFBZixFQUFyQixHQUErQ3VFLGNBQWxFOztBQUVBLFlBQUk5SSxJQUFJc0oscUJBQVIsRUFDRUcsZUFBZXpHLEtBQUttRyxHQUFMLENBQVNNLFlBQVQsRUFBdUJ6SixJQUFJc0oscUJBQTNCLENBQWY7O0FBRUZHLHVCQUFlekcsS0FBSzBFLEdBQUwsQ0FBUytCLFlBQVQsRUFBdUJELFNBQXZCLENBQWY7QUFDQSxZQUFNakYsU0FBU3ZCLEtBQUttRyxHQUFMLENBQVNNLFlBQVQsRUFBdUJGLGFBQXZCLENBQWY7QUFDQXBMLFVBQUUsa0JBQUYsRUFBc0JvRCxRQUF0QixDQUErQixTQUEvQixFQUEwQytDLEdBQTFDLENBQThDLFFBQTlDLEVBQXdEQyxNQUF4RDs7QUFFQSxZQUFJOEUsUUFBSixFQUNFQSxTQUFTbEwsRUFBRSxrQkFBRixFQUFzQm9HLE1BQXRCLEVBQVQ7QUFDSCxPQWZEO0FBZ0JBc0UsZ0JBbkIyQixDQW1CakI7QUFDVjFLLFFBQUVDLE1BQUYsRUFBVXFELEVBQVYsQ0FBYSwyQkFBYixFQUEwQyxZQUFNO0FBQzlDakMscUJBQWFRLElBQUkwSixxQkFBakI7QUFDQTFKLFlBQUkwSixxQkFBSixHQUE0QmpLLFdBQVdvSixPQUFYLEVBQW9CLEdBQXBCLENBQTVCO0FBQ0QsT0FIRDtBQUlEOztBQUVEOzs7Ozs7Ozs7O2lDQU9vQmMsUSxFQUFVQyxvQixFQUFzQjtBQUNsRCxVQUFNQyxZQUFZMUwsRUFBRXdMLFFBQUYsQ0FBbEI7QUFDQSxVQUFNRyxnQkFBZ0JELFVBQVVuSixJQUFWLENBQWUsb0JBQWYsRUFBcUNxSixHQUFyQyxDQUF5QyxVQUFDQyxDQUFELEVBQUlDLEdBQUosRUFBWTtBQUN6RSxZQUFNQyxVQUFVL0wsRUFBRWdNLFFBQUYsRUFBaEI7QUFDQSxZQUFJQyxlQUFKO0FBQ0EsWUFBSUgsSUFBSUksUUFBUixFQUFrQjtBQUNoQkQsbUJBQVNGLFFBQVFJLE9BQVIsQ0FBZ0JMLElBQUlNLGFBQXBCLEVBQW1DTCxPQUFuQyxFQUFUO0FBQ0QsU0FGRCxNQUVPO0FBQ0xELGNBQUlwRCxnQkFBSixDQUFxQixNQUFyQixFQUE2QixZQUFNO0FBQ2pDcUQsb0JBQVFJLE9BQVIsQ0FBZ0JMLElBQUlNLGFBQXBCO0FBQ0QsV0FGRDtBQUdBSCxtQkFBU0YsT0FBVDtBQUNEO0FBQ0QsZUFBT0UsTUFBUDtBQUNELE9BWnFCLENBQXRCO0FBYUFqTSxRQUFFcU0sSUFBRiw2QkFBVVYsYUFBVixHQUF5QlcsSUFBekIsQ0FBOEIsWUFBYTtBQUN6QyxZQUFNQyxhQUFhYixVQUFVdEYsTUFBVixFQUFuQjtBQUNBLFlBQU1vRyxpQkFBaUIzSCxLQUFLMEUsR0FBTCx1QkFBdkI7QUFDQSxZQUFJZ0QsYUFBYUMsY0FBakIsRUFBaUM7QUFDL0JkLG9CQUFVdkYsR0FBVixDQUFjLFdBQWQsRUFBMkJxRyxjQUEzQjtBQUNBLGNBQUlmLG9CQUFKLEVBQTBCO0FBQ3hCNUosZ0JBQUlzSixxQkFBSixHQUE0QnFCLGNBQTVCO0FBQ0F4TSxjQUFFQyxNQUFGLEVBQVV3TSxPQUFWLENBQWtCLFFBQWxCO0FBQ0Q7QUFDRjtBQUNGLE9BVkQ7QUFXRDs7OzRCQUV3QjtBQUFBLFVBQVp4SyxFQUFZLHVFQUFQLEtBQU87O0FBQ3ZCLFVBQU15SyxLQUFLaEcsU0FBU3pFLEVBQVQsQ0FBWDtBQUNBLFVBQUl5SyxNQUFRQSxHQUFHQyxRQUFYLElBQXlCRCxHQUFHQyxRQUFILEdBQWNDLFdBQWQsT0FBZ0MsU0FBN0QsRUFDRUYsR0FBR0csS0FBSDtBQUNIOzs7eUJBR1dDLEcsRUFBS0MsVyxFQUFhO0FBQUU7QUFDOUIsVUFBTWpLLE9BQU85QyxFQUFFOE0sR0FBRixFQUFPckssSUFBUCxDQUFZLE1BQVosQ0FBYjs7QUFFQSxVQUFJc0ssZUFBaUJBLFlBQVksQ0FBWixNQUFtQixHQUF4QyxFQUNFL00sRUFBRXNHLE1BQUYsQ0FBU3lHLFlBQVl6TSxNQUFaLENBQW1CLENBQW5CLEVBQXNCcUMsTUFBdEIsQ0FBNkIsS0FBN0IsQ0FBVCxFQUE4QyxDQUE5QyxFQUFpRCxFQUFFb0UsTUFBTSxHQUFSLEVBQWFDLFNBQVMsQ0FBdEIsRUFBakQsRUFERixLQUVLLElBQUkrRixXQUFKLEVBQ0gvTSxFQUFFc0csTUFBRixDQUFTeUcsWUFBWXBLLE1BQVosQ0FBbUIsS0FBbkIsQ0FBVCxFQUFvQyxJQUFwQyxFQUEwQyxFQUFFb0UsTUFBTSxHQUFSLEVBQWFDLFNBQVMsQ0FBdEIsRUFBMUM7O0FBR0YsVUFBTWdHLFFBQVEsRUFBRUMsWUFBWSxZQUFkLEVBQWQ7QUFDQSxVQUFNekIsaUJBQWV3QixNQUFNQyxVQUEzQjs7QUFFQSxVQUFNQyxXQUNKO0FBQUE7QUFBQSxVQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsK0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsT0FBaEMsRUFBd0MsZ0JBQWEsT0FBckQsRUFBNkQsZUFBWSxNQUF6RTtBQUNFLDRDQUFNLFdBQVUsMEJBQWhCO0FBREYsYUFERjtBQUtFLHdDQUFJLFdBQVUsYUFBZDtBQUxGLFdBREY7QUFTRSx1Q0FBSyxXQUFVLFlBQWYsRUFBNEIsSUFBSUYsTUFBTUMsVUFBTixDQUFpQnRLLE1BQWpCLENBQXdCLE9BQXhCLENBQWhDO0FBVEY7QUFERixPQURGO0FBY0EsVUFBSSxDQUFDM0MsRUFBRXdMLFFBQUYsRUFBWXBKLE1BQWpCLEVBQ0VwQyxFQUFFLE1BQUYsRUFBVTZILE9BQVYsQ0FBa0I3SCxnQkFBY2dOLE1BQU1DLFVBQXBCLDZEQUFsQjs7QUFFRkUsZUFBU0MsTUFBVCxDQUFnQkYsUUFBaEIsRUFBMEJsTixFQUFFd0wsUUFBRixFQUFZeEksR0FBWixDQUFnQixDQUFoQixDQUExQjtBQUNBaEQsUUFBRXdMLFFBQUYsRUFBWTZCLEtBQVosQ0FBa0IsTUFBbEI7O0FBRUFGLGVBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxDQUFLLFNBQUwsSUFBZSxNQUFNdEssSUFBckIsR0FBaEIsRUFBK0M5QyxFQUFLd0wsUUFBTCxZQUFzQnhJLEdBQXRCLENBQTBCLENBQTFCLENBQS9DOztBQUVBLGFBQU8sS0FBUDtBQUNEOzs7NkJBRWU4SixHLEVBQUs7QUFDbkIsVUFBTWhLLE9BQU85QyxFQUFFOE0sR0FBRixFQUFPckssSUFBUCxDQUFZLE1BQVosQ0FBYjs7QUFFQXpDLFFBQUVnRCxHQUFGLENBQVNGLElBQVQsOEJBQXNDOUMsRUFBRThNLEdBQUYsRUFBT3BLLElBQVAsRUFBdEMsRUFBdUQsVUFBQ08sR0FBRCxFQUFTO0FBQzlEO0FBQ0FwQixZQUFJeUwsUUFBSixDQUFhUixHQUFiLEVBQWtCO0FBQ2hCUyxpQkFBTyxhQURTO0FBRWhCQyx1QkFBYSx1QkFGRztBQUdoQkMsc0JBQVksSUFISTtBQUloQkMsdUJBQWEsSUFKRztBQUtoQkMsZ0JBQU0xSztBQUxVLFNBQWxCO0FBT0QsT0FURDs7QUFXQSxhQUFPLEtBQVA7QUFDRDs7OzRCQUVjNkosRyxFQUFLO0FBQ2xCLFVBQU1oSyxPQUFPOUMsRUFBRThNLEdBQUYsRUFBT3JLLElBQVAsQ0FBWSxNQUFaLENBQWI7O0FBRUF6QyxRQUFFZ0QsR0FBRixDQUFNRixLQUFLSCxNQUFMLENBQVksYUFBWixDQUFOLEVBQWtDLFVBQUNNLEdBQUQsRUFBUztBQUN6QztBQUNBcEIsWUFBSXlMLFFBQUosQ0FBYVIsR0FBYixFQUFrQjtBQUNoQlMsaUJBQU8saUJBRFM7QUFFaEJDLHVCQUFhLHVCQUZHO0FBR2hCQyxzQkFBWSxJQUhJO0FBSWhCRSxnQkFBTTFLO0FBSlUsU0FBbEI7QUFNRCxPQVJEOztBQVVBLGFBQU8sS0FBUDtBQUNEOzs7cUNBRXVCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBTXNLLFFBQVF2TixFQUFFLGtDQUFGLEVBQXNDNE4sR0FBdEMsRUFBZDtBQUNBLFVBQUksQ0FBQ0wsTUFBTW5MLE1BQVgsRUFBbUI7QUFDakI7QUFDQXlMLGNBQU0sb0NBQU47QUFDQSxlQUFPLEtBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxVQUFNQyxVQUFVUCxNQUFNM0wsT0FBTixDQUFjLG1CQUFkLEVBQW1DLEVBQW5DLEVBQXVDQSxPQUF2QyxDQUErQyxVQUEvQyxFQUEyRCxFQUEzRCxDQUFoQjtBQUNBekIsVUFBSTJOLE9BQUo7O0FBRUEsVUFBSSxDQUFDQSxRQUFRMUwsTUFBYixFQUFxQjtBQUNuQjtBQUNBeUwsY0FBTSxxRUFBTjtBQUNBLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7aUNBRW1CckMsUSxFQUFVdUMsSSxFQUFNO0FBQ2xDO0FBQ0EsVUFBTUMsVUFBVTtBQUNkdkIsaUJBQVMsbUJBREssRUFDZ0I7QUFDOUJ3QixtQkFBV3pDLFFBRkc7QUFHZDBDLGlCQUFTSCxLQUFLRyxPQUhBO0FBSWRDLGNBQU07QUFFUjtBQU5nQixPQUFoQixDQU9BLElBQUlKLEtBQUtSLEtBQVQsRUFDRVMsUUFBUVQsS0FBUixHQUFnQlEsS0FBS1IsS0FBckI7QUFDRixVQUFJUSxLQUFLSyxTQUFULEVBQ0VKLFFBQVFJLFNBQVIsR0FBb0JMLEtBQUtLLFNBQXpCO0FBQ0YsVUFBSUwsS0FBS3RCLE9BQVQsRUFDRXVCLFFBQVF2QixPQUFSLEdBQWtCc0IsS0FBS3RCLE9BQXZCOztBQUVGO0FBQ0F6TSxRQUFFd0wsUUFBRixFQUFZNkMsT0FBWixDQUFvQkwsT0FBcEI7QUFDRDs7QUFHRDs7OztrQ0FDcUIvSyxHLEVBQUs7QUFDeEIsVUFBTXVJLFdBQVcsZ0JBQWpCOztBQUVBO0FBQ0E7QUFDQXhMLFFBQUV3TCxRQUFGLEVBQVlqRyxPQUFaLENBQW9CO0FBQ2xCNEksY0FBTSxJQURZO0FBRWxCMUIsaUJBQVMsUUFGUyxFQUVDO0FBQ25CMkIsbUJBQVcsUUFITztBQUlsQmIsZUFBT3RLO0FBSlcsT0FBcEIsRUFLR0ssRUFMSCxDQUtNLG9CQUxOLEVBSzRCLFNBQVNnTCxtQkFBVCxHQUErQjtBQUN6RDtBQUNBLFlBQUksQ0FBRXRPLEVBQUV3TCxRQUFGLEVBQVlsSixNQUFaLEdBQXFCQyxJQUFyQixDQUEwQixVQUExQixFQUFzQ0gsTUFBNUMsRUFDRXBDLEVBQUUsSUFBRixFQUFRdUYsT0FBUixDQUFnQixNQUFoQjtBQUNILE9BVEQ7O0FBWUE7QUFDQTtBQUNBO0FBQ0F2RixRQUFFLFVBQUYsRUFBY3NELEVBQWQsQ0FBaUIsWUFBakIsRUFBK0IsWUFBTTtBQUNuQ25ELFlBQUksOEJBQUo7QUFDQUgsVUFBRXdMLFFBQUYsRUFBWWpHLE9BQVosQ0FBb0IsTUFBcEI7QUFDRCxPQUhEOztBQU1BdkYsUUFBRXdMLFFBQUYsRUFBWWxJLEVBQVosQ0FBZSxrQkFBZixFQUFtQyxZQUFNO0FBQ3ZDO0FBQ0E7QUFDQXRELFVBQUV3TCxRQUFGLEVBQVlsSixNQUFaLEdBQXFCQyxJQUFyQixDQUEwQixnQkFBMUIsRUFBNENlLEVBQTVDLENBQStDLE9BQS9DLEVBQXdELFNBQVNpTCxtQkFBVCxHQUErQjtBQUNyRnZPLFlBQUUsSUFBRixFQUFRZ0MsT0FBUixDQUFnQixVQUFoQixFQUE0Qk8sSUFBNUIsQ0FBaUMsbUJBQWpDLEVBQXNEZ0IsV0FBdEQsQ0FBa0UsSUFBbEU7QUFDQXZELFlBQUUsSUFBRixFQUFRb0QsUUFBUixDQUFpQixJQUFqQjtBQUNELFNBSEQ7QUFJRCxPQVBEO0FBUUQ7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7b0NBQ3VCO0FBQ3JCOzs7Ozs7Ozs7QUFVQTtBQUNBLFVBQU1vSSxXQUFXM0osSUFBSTJKLFFBQUosRUFBakI7QUFDQSxVQUFNeEMsWUFBWWhKLEVBQUV3TCxRQUFGLEVBQVlnRCxLQUFaLEVBQWxCO0FBQ0FyTyxVQUFJLG1CQUFKLEVBQXlCcUwsUUFBekI7O0FBRUEsVUFBTWlELEtBQU96RixVQUFVekcsSUFBVixDQUFlLCtCQUFmLEVBQWdEdUksVUFBaEQsRUFBYjtBQUNBLFVBQU00RCxPQUFPMUYsVUFBVXpHLElBQVYsQ0FBZSwrQkFBZixFQUFnRHVJLFVBQWhELEVBQWI7O0FBRUE7QUFDQSxVQUFNNkQsYUFBY0QsT0FBT0QsRUFBUixHQUFjLEVBQWpDO0FBQ0EsVUFBTUcsS0FBSy9KLEtBQUswRSxHQUFMLENBQVMsRUFBVCxFQUFhMUUsS0FBS3VFLEtBQUwsQ0FBVyxNQUFNdUYsVUFBakIsQ0FBYixDQUFYO0FBQ0EsVUFBTUUsS0FBS2hLLEtBQUswRSxHQUFMLENBQVMsRUFBVCxFQUFhMUUsS0FBS3VFLEtBQUwsQ0FBVyxNQUFNdUYsVUFBakIsQ0FBYixDQUFYO0FBQ0F4TyxVQUFJLE1BQUosRUFBY3NPLEVBQWQ7QUFDQXRPLFVBQUksTUFBSixFQUFZdU8sSUFBWjtBQUNBdk8sVUFBSSxNQUFKLEVBQWN5TyxFQUFkO0FBQ0F6TyxVQUFJLE1BQUosRUFBYzBPLEVBQWQ7QUFDQTFPLFVBQUksbUJBQUosRUFBeUJ3TyxVQUF6QixFQUFxQyxHQUFyQyxFQUEwQ0MsRUFBMUMsRUFBOEMsR0FBOUMsRUFBbURDLEVBQW5ELEVBQXVELEdBQXZEOztBQUVBN0YsZ0JBQVV6RyxJQUFWLENBQWUsdUJBQWYsRUFBd0M0RCxHQUF4QyxDQUE0QyxFQUFFK0MsT0FBTzBGLEVBQVQsRUFBYSxhQUFhQSxFQUExQixFQUE1QztBQUNBNUYsZ0JBQVV6RyxJQUFWLENBQWUsdUJBQWYsRUFBd0M0RCxHQUF4QyxDQUE0QyxFQUFFK0MsT0FBTzJGLEVBQVQsRUFBYSxhQUFhQSxFQUExQixFQUE1QztBQUNEOztBQUdEO0FBQ0E7QUFDQTs7Ozt3Q0FDMkJDLFksRUFBYztBQUN2QztBQUNBLFVBQU1DLFdBQWMsT0FBcEIsQ0FGdUMsQ0FFWDtBQUM1QixVQUFNQyxTQUFlaFAsRUFBRXNHLE1BQUYsV0FBaUJ3SSxZQUFqQixDQUFyQjtBQUNBLFVBQU1HLGNBQWVqUCxFQUFFc0csTUFBRixrQkFBd0J3SSxZQUF4QixDQUFyQjs7QUFFQSxVQUFNSSxVQUFXRCxnQkFBZ0IsYUFBaEIsSUFDRUEsZ0JBQWdCLElBQWhCLElBQTBCRixhQUFhLE9BRDFEOztBQUdBLFVBQUlDLFdBQVcsT0FBWCxJQUF5QixDQUFDQSxNQUFELElBQWFELGFBQWEsT0FBdkQsRUFBaUU7QUFDL0QsWUFBSUcsT0FBSixFQUNFLE9BRjZELENBRXREO0FBQ1RsUCxVQUFFLE1BQUYsRUFBVXVELFdBQVYsQ0FBc0IsYUFBdEIsRUFIK0QsQ0FHMUI7QUFDdEMsT0FKRCxNQUlPO0FBQ0w7QUFDQXZELFVBQUUsTUFBRixFQUFVdUQsV0FBVixDQUFzQixRQUFRWixNQUFSLENBQWV1TSxVQUFVLEVBQVYsR0FBZSxjQUE5QixDQUF0QixFQUFxRTlMLFFBQXJFLENBQThFLE9BQTlFO0FBQ0Q7QUFDRjs7O3VDQUd5QitMLEcsRUFBS0wsWSxFQUFjO0FBQzNDLFVBQU1NLFFBQVFwUCxFQUFFLE1BQUYsQ0FBZDs7QUFFQSxVQUFNcVAsS0FBTUQsTUFBTXhMLFFBQU4sQ0FBZSxhQUFmLElBQWdDLEVBQWhDLEdBQXFDLGFBQWpEO0FBQ0F6RCxVQUFJLGlDQUFKLEVBQXVDa1AsRUFBdkM7O0FBRUFyUCxRQUFFc0csTUFBRixrQkFBd0J3SSxZQUF4QixFQUF3Q08sRUFBeEMsRUFBNEMsRUFBRXRJLE1BQU0sR0FBUixFQUFhQyxTQUFTLEVBQXRCLEVBQTBCc0ksUUFBUSxjQUFsQyxFQUE1Qzs7QUFFQUYsWUFBTUcsV0FBTixDQUFrQixhQUFsQjtBQUNEOzs7aUNBR21CSixHLEVBQUtMLFksRUFBYztBQUNyQyxVQUFNTSxRQUFRcFAsRUFBRSxNQUFGLENBQWQ7O0FBRUEsVUFBTXFQLEtBQU1ELE1BQU14TCxRQUFOLENBQWUsT0FBZixJQUEwQixPQUExQixHQUFvQyxPQUFoRDtBQUNBekQsVUFBSSx5QkFBSixFQUErQmtQLEVBQS9COztBQUVBRCxZQUFNN0wsV0FBTixDQUFrQixhQUFsQixFQUFpQ0gsUUFBakMsQ0FBMENpTSxFQUExQztBQUNBeE4sVUFBSTJOLEtBQUo7O0FBRUF4UCxRQUFFc0csTUFBRixXQUFpQndJLFlBQWpCLEVBQWlDTyxFQUFqQyxFQUFxQyxFQUFFdEksTUFBTSxHQUFSLEVBQWFDLFNBQVMsRUFBdEIsRUFBMEJzSSxRQUFRLGNBQWxDLEVBQXJDOztBQUVBLGFBQU8sS0FBUDtBQUNEOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsrQkFDa0I7QUFDaEIsVUFBTUcsUUFBUXpQLEVBQUUsZ0NBQUYsRUFDWHdPLEtBRFcsR0FFWDlMLElBRlcsR0FHWGtLLFdBSFcsR0FJWDhDLElBSlcsRUFBZDtBQUtBLFVBQUlELFVBQVUsT0FBVixJQUF1QkEsVUFBVSxPQUFqQyxJQUE4Q0EsVUFBVSxPQUE1RCxFQUNFLE9BQU8sS0FBUCxDQVBjLENBT0Q7O0FBRWYsVUFBSWpFLFdBQVcsS0FBZjtBQUNBLFVBQUlpRSxLQUFKLEVBQVc7QUFDVDtBQUNBO0FBQ0E7QUFDQXRQLFlBQUksT0FBSixFQUFhc1AsS0FBYjtBQUNBLFlBQU1FLGtCQUFnQkYsTUFBTTdOLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CLENBQXRCO0FBQ0EsWUFBSTZOLFVBQVUsWUFBVixJQUE0QkEsVUFBVSxhQUF0QyxJQUF5REEsVUFBVSxTQUFuRSxJQUFnRkEsVUFBVSxTQUExRixJQUF1R0EsVUFBVSxjQUFySCxFQUFxSTtBQUNuSWpFLHFCQUFXLElBQUk3SSxNQUFKLENBQVczQyxFQUFFMlAsSUFBSWhOLE1BQUosQ0FBVyxxQkFBWCxDQUFGLEVBQXFDRixJQUFyQyxDQUEwQyxJQUExQyxDQUFYLENBQVg7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNbU4sUUFBUTVQLEVBQUUyUCxJQUFJaE4sTUFBSixDQUFXLDBCQUFYLENBQUYsRUFBMENELElBQTFDLEdBQWlEa0ssV0FBakQsR0FBK0RoTCxPQUEvRCxDQUF1RSxHQUF2RSxFQUE0RSxHQUE1RSxDQUFkO0FBQ0E0SixpQ0FBcUJpRSxLQUFyQixJQUE2QkcsVUFBVSxFQUFWLEdBQWUsRUFBZixHQUFvQixHQUFqRCxJQUF1REEsS0FBdkQ7QUFDRDtBQUNGLE9BWkQsTUFZTztBQUNMO0FBQ0E7QUFDQXBFLG1CQUFXLFVBQVU3SSxNQUFWLENBQWlCM0MsRUFBRSx5QkFBRixFQUE2QjBDLElBQTdCLEdBQW9Da0ssV0FBcEMsR0FBa0RoTCxPQUFsRCxDQUEwRCxHQUExRCxFQUErRCxHQUEvRCxDQUFqQixDQUFYO0FBQ0EsWUFBSSxDQUFDNUIsRUFBRXdMLFFBQUYsRUFBWXBKLE1BQWpCLEVBQXlCb0osV0FBVyxlQUFYLENBSnBCLENBSStDO0FBQ3JEOztBQUVEckwsVUFBSSxVQUFKLEVBQWdCcUwsUUFBaEI7O0FBRUEsYUFBT0EsUUFBUDtBQUNEOztBQUdEO0FBQ0E7QUFDQTs7OzsrQkFDa0I7QUFDaEI7QUFDQXhMLFFBQUUsZ0JBQUYsRUFBb0J1QyxJQUFwQixDQUF5QixVQUF6QixFQUFxQ1AsT0FBckMsQ0FBNkMsTUFBN0MsRUFBcUQ2TixJQUFyRCxDQUEwRCxVQUFDQyxDQUFELEVBQUlDLEdBQUosRUFBWTtBQUNwRSxZQUFJdkIsUUFBUSxLQUFaO0FBQ0F4TyxVQUFFK1AsR0FBRixFQUFPeE4sSUFBUCxDQUFZLFVBQVosRUFBd0JzTixJQUF4QixDQUE2QixVQUFDRyxHQUFELEVBQU1wQyxHQUFOLEVBQWM7QUFDekM1TixZQUFFNE4sR0FBRixFQUFPekwsSUFBUCxHQUFjZ0UsR0FBZCxDQUFrQixFQUFFa0QsWUFBWSxRQUFkLEVBQWxCO0FBQ0EsY0FBSSxDQUFDbUYsS0FBTCxFQUNFQSxRQUFReE8sRUFBRTROLEdBQUYsRUFBTzdILE1BQVAsRUFBUjtBQUNGLGNBQUkvRixFQUFFNE4sR0FBRixFQUFPN0gsTUFBUCxHQUFnQkMsR0FBaEIsS0FBd0J3SSxNQUFNeEksR0FBbEMsRUFDRWhHLEVBQUU0TixHQUFGLEVBQU8xSixJQUFQLEdBREYsS0FHRWxFLEVBQUU0TixHQUFGLEVBQU96SCxHQUFQLENBQVcsRUFBRWtELFlBQVksU0FBZCxFQUFYO0FBQ0gsU0FSRDtBQVNBO0FBQ0QsT0FaRDtBQWFEOztBQUdEOzs7O2lDQUNvQkwsUyxFQUFXO0FBQzdCQSxnQkFBVXpHLElBQVYsQ0FBZSx5REFBZixFQUEwRWEsUUFBMUUsQ0FBbUYsS0FBbkYsRUFDRzZNLFNBREgsQ0FDYztBQUFBLGVBQUtqUSxFQUFFa1EsRUFBRWxNLGFBQUosRUFBbUJ6QixJQUFuQixDQUF3QixjQUF4QixFQUF3Q2EsUUFBeEMsQ0FBaUQsU0FBakQsQ0FBTDtBQUFBLE9BRGQsRUFFRytNLFFBRkgsQ0FFYTtBQUFBLGVBQU1uUSxFQUFFa1EsRUFBRWxNLGFBQUosRUFBbUJ6QixJQUFuQixDQUF3QixjQUF4QixFQUF3Q2dCLFdBQXhDLENBQW9ELFNBQXBELENBQU47QUFBQSxPQUZiO0FBR0Q7OzswQkFHWTZNLFUsRUFBWUMsUSxFQUFVO0FBQ2pDLFVBQU1DLGNBQWMsRUFBcEI7QUFDQSxVQUFNQyxjQUFjLEVBQXBCOztBQUdBO0FBQ0E7QUFDQSxVQUFJLENBQUN2USxFQUFFLE1BQUYsRUFBVTRELFFBQVYsQ0FBbUIsT0FBbkIsQ0FBTCxFQUFrQztBQUNoQyxZQUFJNUQsRUFBRSxNQUFGLEVBQVU0RCxRQUFWLENBQW1CLGFBQW5CLENBQUosRUFDRTVELEVBQUUsa0NBQUYsRUFBc0N3USxJQUF0QyxDQUEyQyxTQUEzQyxFQUFzRCxJQUF0RDtBQUNGO0FBQ0Q7O0FBRUQsVUFBTWhGLFdBQVk0RSxjQUFnQnZPLElBQUkySixRQUFKLEVBQWxDO0FBQ0EsVUFBSUEsYUFBYSxLQUFqQixFQUNFOztBQUdGLFVBQU14QyxZQUFZaEosRUFBRXdMLFFBQUYsRUFBWWdELEtBQVosRUFBbEI7QUFDQSxVQUFNdkIsYUFBYWpFLFVBQVV2RyxJQUFWLENBQWUsSUFBZixDQUFuQjtBQUNBLFVBQU1nTyxhQUFhekgsVUFBVWhILE9BQVYsQ0FBa0IsTUFBbEIsQ0FBbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFNME8sVUFBVyxTQUFXMVEsRUFBRSxNQUFGLEVBQVU0RCxRQUFWLENBQW1CLFFBQW5CLENBQVgsSUFBNkMrTSxJQUFJQyxRQUFKLENBQWEsU0FBYixFQUF3QixNQUF4QixDQUE5RDs7QUFHQSxVQUFJLENBQUM1USxFQUFFLE1BQUYsRUFBVTRELFFBQVYsQ0FBbUIsT0FBbkIsQ0FBTCxFQUFrQztBQUNoQzZNLG1CQUFXdEssR0FBWCxDQUFlLEVBQUUsZ0JBQWdCLEVBQWxCLEVBQXNCLGlCQUFpQixFQUF2QyxFQUFmO0FBQ0E7QUFDRDs7QUFHRCxVQUFJLENBQUN0RSxJQUFJZ1AsU0FBVCxFQUFvQjtBQUNsQjtBQUNBaFAsWUFBSWdQLFNBQUosR0FBZ0I7QUFDZEMsZ0JBQU0sQ0FEUTtBQUVkQyxlQUFLLENBRlM7QUFHZEMsbUJBQVMsQ0FISztBQUlkQyxrQkFBUVYsV0FKTTtBQUtkVyxxQkFBV3JQLElBQUlzUCxVQUxEO0FBTWRDLHFCQUFXLEVBTkc7QUFPZEMscUJBQVc7QUFQRyxTQUFoQjs7QUFVQXhQLFlBQUl5UCxZQUFKLENBQWlCdEksU0FBakI7QUFDRDs7QUFFRCxVQUFJaEosRUFBRUMsTUFBRixFQUFVaUosS0FBVixPQUFzQnJILElBQUlnUCxTQUFKLENBQWNDLElBQXhDLEVBQThDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0FMLG1CQUFXdEssR0FBWCxDQUFlLEVBQUUsZ0JBQWdCLEVBQWxCLEVBQXNCLGlCQUFpQixFQUF2QyxFQUFmLEVBTDRDLENBS2dCO0FBQzVEdEUsWUFBSWdQLFNBQUosQ0FBY1EsU0FBZCxHQUEwQixDQUExQixDQU40QyxDQU1mOztBQUU3QixZQUFNRSxVQUFVZCxXQUFXbE8sSUFBWCxDQUFnQix5QkFBaEIsQ0FBaEI7QUFDQSxZQUFJaVAsY0FBY0QsUUFBUXpHLFVBQVIsTUFBMEIsQ0FBNUM7QUFDQSxZQUFJMEcsV0FBSixFQUNFQSxlQUFlLElBQUl0TCxTQUFTcUwsUUFBUXBMLEdBQVIsQ0FBWSxlQUFaLENBQVQsRUFBdUMsRUFBdkMsQ0FBbkIsQ0FYMEMsQ0FXb0I7QUFDaEUsWUFBTXdJLGFBQWE4QixXQUFXdkgsS0FBWCxLQUFxQnNJLFdBQXhDO0FBQ0EsWUFBTVAsU0FBVXRDLGFBQWEsR0FBYixHQUFtQixDQUFuQixHQUF1QjRCLFdBQXZDO0FBQ0EsWUFBTVcsWUFBYWxSLEVBQUUsZ0JBQUYsRUFBb0I4SyxVQUFwQixNQUFvQ2pKLElBQUlzUCxVQUF4QyxHQUFxRHRQLElBQUlzUCxVQUF6RCxHQUFzRXRQLElBQUk0UCxnQkFBN0Y7QUFDQSxZQUFNVCxVQUFVbk0sS0FBSzBFLEdBQUwsQ0FBUyxDQUFULEVBQVkxRSxLQUFLNk0sS0FBTCxDQUFXLENBQUMvQyxhQUFhc0MsTUFBZCxLQUF5QkMsWUFBWUQsTUFBckMsQ0FBWCxDQUFaLENBQWhCO0FBQ0EsWUFBTVUsUUFBVTlNLEtBQUswRSxHQUFMLENBQVMsQ0FBVCxFQUFhb0YsYUFBY3FDLFdBQVdFLFlBQVlELE1BQXZCLENBQWYsR0FBa0RBLE1BQTlELENBQWhCOztBQUVBOVEsWUFDRSxRQURGLEVBQ1k4TSxVQURaLEVBRUUsWUFGRixFQUVnQndELFdBQVd2SCxLQUFYLEVBRmhCLEVBR0UsYUFIRixFQUdpQnNJLFdBSGpCLEVBSUUsY0FKRixFQUlrQjdDLFVBSmxCLEVBS0UsZ0JBTEYsRUFLb0JxQyxPQUxwQixFQUs2QixJQUw3QixFQU1FLG9CQU5GLEVBTXdCQyxNQU54QixFQU9FLE1BUEYsRUFPVVUsS0FQVixFQU9pQixjQVBqQjtBQVNBOVAsWUFBSWdQLFNBQUosQ0FBY0UsR0FBZCxHQUFvQmxNLEtBQUt1RSxLQUFMLENBQVd1SSxRQUFRLENBQW5CLENBQXBCOztBQUVBOVAsWUFBSWdQLFNBQUosQ0FBY0MsSUFBZCxHQUFxQjlRLEVBQUVDLE1BQUYsRUFBVWlKLEtBQVYsRUFBckI7QUFDQXJILFlBQUlnUCxTQUFKLENBQWNHLE9BQWQsR0FBd0JBLE9BQXhCO0FBQ0FuUCxZQUFJZ1AsU0FBSixDQUFjSSxNQUFkLEdBQXVCQSxNQUF2QjtBQUNBcFAsWUFBSWdQLFNBQUosQ0FBY0ssU0FBZCxHQUEwQkEsU0FBMUI7QUFDRDs7QUFFRCxVQUFJLENBQUNSLE9BQUwsRUFBYztBQUNaLFlBQUk3TyxJQUFJZ1AsU0FBSixDQUFjRyxPQUFkLEdBQXdCLENBQTVCLEVBQ0VQLFdBQVd0SyxHQUFYLENBQWUsRUFBRSxnQkFBZ0J0RSxJQUFJZ1AsU0FBSixDQUFjRSxHQUFoQyxFQUFxQyxpQkFBaUJsUCxJQUFJZ1AsU0FBSixDQUFjRSxHQUFwRSxFQUFmLEVBREYsS0FHRWxQLElBQUlnUCxTQUFKLENBQWNRLFNBQWQsR0FBMEJ4UCxJQUFJZ1AsU0FBSixDQUFjRSxHQUF4QztBQUNIOztBQUVELFVBQUlhLGlCQUFpQixDQUFyQjtBQUNBLFVBQU1DLG9CQUFvQixFQUExQjtBQUNBLFVBQUlDLFNBQVMsQ0FBYjtBQUNBLFVBQU1DLE9BQU8sRUFBRSxHQUFHLENBQUwsRUFBYjtBQUNBLFVBQU1DLFFBQVEsRUFBRSxHQUFHblEsSUFBSWdQLFNBQUosQ0FBY1EsU0FBbkIsRUFBZDtBQUNBLFVBQUksQ0FBQ1gsT0FBTCxFQUFjO0FBQ1osYUFBSyxJQUFJN0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJaEssSUFBSWdQLFNBQUosQ0FBY0csT0FBbEMsRUFBMkNuRixHQUEzQyxFQUFnRDtBQUM5Q21HLGdCQUFNbkcsQ0FBTixJQUFXbUcsTUFBTW5HLElBQUksQ0FBVixJQUFlaEssSUFBSWdQLFNBQUosQ0FBY0ksTUFBN0IsR0FBc0NwUCxJQUFJZ1AsU0FBSixDQUFjSyxTQUEvRDtBQUNBYSxlQUFLbEcsQ0FBTCxJQUFVLENBQVY7QUFDRDtBQUNGOztBQUdEO0FBQ0E7QUFDQSxVQUFJLENBQUNoSyxJQUFJZ1AsU0FBSixDQUFjTyxTQUFkLENBQXdCbkUsVUFBeEIsQ0FBTCxFQUEwQztBQUN4QzlNLFlBQUksWUFBSixFQUFrQjhNLFVBQWxCO0FBQ0E7QUFDQWpFLGtCQUFVekcsSUFBVixDQUFlLHNCQUFmLEVBQXVDc04sSUFBdkMsQ0FBNEMsU0FBU29DLGdCQUFULENBQTBCbkMsQ0FBMUIsRUFBNkJvQyxDQUE3QixFQUFnQztBQUMxRWxTLFlBQUVrUyxDQUFGLEVBQUt6UCxJQUFMLENBQVU7QUFDUjBQLGlCQUFLblMsRUFBRWtTLENBQUYsRUFBS3pQLElBQUwsQ0FBVSxRQUFWLENBREc7QUFFUjJQLHFCQUFTO0FBRkQsV0FBVixFQUdHQyxVQUhILENBR2MsUUFIZDtBQUlELFNBTEQ7QUFNQXhRLFlBQUlnUCxTQUFKLENBQWNPLFNBQWQsQ0FBd0JuRSxVQUF4QixJQUFzQyxDQUF0QztBQUNEOztBQUdELFVBQUl5RCxPQUFKLEVBQ0UxSCxVQUFVekcsSUFBVixDQUFlLFVBQWYsRUFBMkJnQixXQUEzQixDQUF1QyxZQUF2QyxFQURGLENBQ3VEO0FBRHZELFdBR0UxQixJQUFJeVEsT0FBSixHQUFjLENBQUMsQ0FBZixDQTNIK0IsQ0EySGQ7O0FBRW5CdEosZ0JBQVV6RyxJQUFWLENBQWUsVUFBZixFQUEyQmdRLEdBQTNCLENBQStCLGdCQUEvQixFQUFpRHBNLEdBQWpELENBQXFELFlBQXJELEVBQW1FLFFBQW5FLEVBQTZFMEosSUFBN0UsQ0FBa0YsVUFBQzJDLEdBQUQsRUFBTTVFLEdBQU4sRUFBYztBQUM5RixZQUFNNkUsT0FBT3pTLEVBQUU0TixHQUFGLENBQWI7QUFDQSxZQUFNOEUsU0FBU0QsS0FBS3hNLFdBQUwsRUFBZjtBQUNBOztBQUVBLFlBQU1FLE1BQU0sRUFBWjtBQUNBLFlBQUl1SyxPQUFKLEVBQWE7QUFDWHZRLGNBQU91UyxNQUFQLGVBQXVCN04sS0FBSzhOLElBQUwsQ0FBVSxDQUFDRCxTQUFTLEVBQVYsSUFBZ0IsRUFBMUIsQ0FBdkI7QUFDQXZNLGNBQUksY0FBSixjQUE4QnRCLEtBQUs4TixJQUFMLENBQVUsQ0FBQ0QsU0FBUyxFQUFWLElBQWdCLEVBQTFCLENBQTlCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsY0FBSUUsTUFBTSxDQUFWO0FBQ0EsY0FBSS9RLElBQUlnUCxTQUFKLENBQWNHLE9BQWQsR0FBd0IsQ0FBeEIsSUFBK0J3QixPQUFPM1EsSUFBSWdQLFNBQUosQ0FBY0csT0FBeEQsRUFBaUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBTTZCLFVBQVcsQ0FBQ2hSLElBQUl5USxPQUFKLEdBQWMsQ0FBZixJQUFzQnpRLElBQUlnUCxTQUFKLENBQWNHLE9BQXJEO0FBQ0E0QixrQkFBTUMsT0FBTixDQVQrRCxDQVNqRDtBQUNkLGdCQUFNQyxVQUFVZixLQUFLYyxPQUFMLElBQWdCSCxNQUFoQyxDQVYrRCxDQVV4QjtBQUN2QyxpQkFBSyxJQUFJN0csS0FBSSxDQUFiLEVBQWdCQSxLQUFJaEssSUFBSWdQLFNBQUosQ0FBY0csT0FBbEMsRUFBMkNuRixJQUEzQyxFQUFnRDtBQUM5QyxrQkFBSUEsT0FBTWdILE9BQU4sSUFBbUJDLFVBQVVmLEtBQUtsRyxFQUFMLENBQWpDLEVBQTBDO0FBQ3hDK0csc0JBQU0vRyxFQUFOO0FBQ0E7QUFDRDtBQUNGO0FBQ0YsV0FqQkQsTUFpQk87QUFDTCtHLGtCQUFPSixNQUFNM1EsSUFBSWdQLFNBQUosQ0FBY0csT0FBM0I7QUFDRDtBQUNEblAsY0FBSXlRLE9BQUosR0FBY00sR0FBZDtBQUNBek0sY0FBSWtELFVBQUosR0FBaUIsU0FBakI7QUFDQWxELGNBQUlILEdBQUosR0FBWStMLEtBQUthLEdBQUwsQ0FBWjtBQUNBek0sY0FBSTRNLElBQUosR0FBV2YsTUFBTVksR0FBTixDQUFYOztBQUVBO0FBQ0FiLGVBQUthLEdBQUwsS0FBY0YsU0FBU3BDLFdBQXZCOztBQUVBd0IsbUJBQVNqTixLQUFLMEUsR0FBTCxDQUFTdUksTUFBVCxFQUFpQkMsS0FBS2EsR0FBTCxDQUFqQixDQUFUO0FBQ0Q7O0FBRURILGFBQUt0TSxHQUFMLENBQVNBLEdBQVQ7O0FBR0E7QUFDQTtBQUNBLFlBQUl3SixNQUFNOEMsS0FBS2xRLElBQUwsQ0FBVSxXQUFWLENBQVY7O0FBRUEsWUFBSW9OLElBQUl2TixNQUFKLElBQWdCLENBQUVxUSxLQUFLbFEsSUFBTCxDQUFVLFdBQVYsRUFBdUI2RCxNQUF2QixFQUF0QixFQUF3RDtBQUN0RHdMLDRCQUFrQixDQUFsQjtBQUNBakMsZ0JBQU04QyxLQUFLaFEsSUFBTCxDQUFVLFNBQVYsQ0FBTjtBQUNBLGNBQUlrTixHQUFKLEVBQ0VrQyxrQkFBa0JtQixJQUFsQixDQUF1QnJELEdBQXZCO0FBQ0g7QUFDRixPQXZERDs7QUF5REEsVUFBSWUsT0FBSixFQUFhO0FBQ1gxSCxrQkFBVXpHLElBQVYsQ0FBZSxVQUFmLEVBQTJCYSxRQUEzQixDQUFvQyxZQUFwQztBQUNBNEYsa0JBQVV6RyxJQUFWLENBQWUsVUFBZixFQUEyQjRELEdBQTNCLENBQStCLEVBQUVrRCxZQUFZLFNBQWQsRUFBL0I7QUFDRCxPQUhELE1BR087QUFDTDtBQUNBbEosWUFBSSxRQUFKLEVBQWMyUixNQUFkO0FBQ0E5SSxrQkFBVXpHLElBQVYsQ0FBZSxVQUFmLEVBQTJCNEQsR0FBM0IsQ0FBK0IsRUFBRUMsUUFBUTBMLE1BQVYsRUFBL0I7QUFDRDs7QUFHRCxVQUFJOVIsRUFBRSxNQUFGLEVBQVU0RCxRQUFWLENBQW1CLFFBQW5CLENBQUosRUFBa0M7QUFDaEM1RCxVQUFFLDBCQUFGLEVBQThCb0QsUUFBOUIsQ0FBdUMsV0FBdkMsRUFBb0RGLE1BQXBEO0FBRUQ7O0FBR0QsVUFBSzBPLGNBQUQsSUFBc0IsQ0FBQ3ZCLFFBQTNCLEVBQXFDO0FBQ25DbFEsWUFDRXlSLGNBREYsRUFDa0Isd0NBRGxCLEVBQzREcEcsUUFENUQsRUFDc0UsTUFEdEUsRUFFRXFHLGtCQUFrQm9CLElBQWxCLENBQXVCLEdBQXZCLENBRkY7QUFJQTtBQUNBNVIscUJBQWFRLElBQUlxUixlQUFqQjtBQUNBclIsWUFBSXFSLGVBQUosR0FBc0I1UixXQUFXO0FBQUEsaUJBQU1PLElBQUkyTixLQUFKLENBQVVoRSxRQUFWLEVBQW9CLENBQXBCLENBQU47QUFBQSxTQUFYLEVBQXlDLElBQXpDLENBQXRCO0FBQ0Q7QUFDRjs7OzBCQUdZc0IsRyxFQUFLN0ssRSxFQUFJO0FBQ3BCLFVBQU1rUixjQUFZbFIsRUFBbEI7QUFDQTlCLFVBQUksT0FBSixFQUFhOEIsRUFBYjtBQUNBakMsUUFBRW1ULEtBQUYsRUFBUzdRLE1BQVQsR0FBa0JDLElBQWxCLENBQXVCLGNBQXZCLEVBQXVDMkIsSUFBdkM7QUFDQWxFLFFBQUVtVCxLQUFGLEVBQVM1UCxXQUFULENBQXFCLFFBQXJCLEVBQStCSCxRQUEvQixDQUF3QyxJQUF4QyxFQUE4Q2pCLElBQTlDO0FBQ0FuQyxRQUFFbVQsS0FBRixFQUFTblIsT0FBVCxDQUFpQixhQUFqQixFQUFnQ08sSUFBaEMsQ0FBcUMsU0FBckMsRUFBZ0RnQixXQUFoRCxDQUE0RCxJQUE1RDs7QUFFQXZELFFBQUU4TSxHQUFGLEVBQU8xSixRQUFQLENBQWdCLElBQWhCOztBQUVBdkIsVUFBSTJOLEtBQUosQ0FBVTJELEtBQVY7O0FBRUE7QUFDQSxVQUFNQyxPQUFPcFQsRUFBRW1ULEtBQUYsRUFBU25SLE9BQVQsQ0FBaUIsYUFBakIsRUFBZ0NPLElBQWhDLENBQXFDLHFCQUFyQyxDQUFiO0FBQ0EsVUFBTThRLE9BQU9ELEtBQUs3USxJQUFMLENBQVUsbUJBQW1CSSxNQUFuQixDQUEwQjNDLEVBQUU4TSxHQUFGLEVBQU9wSyxJQUFQLEVBQTFCLEVBQXlDLEdBQXpDLENBQVYsQ0FBYjtBQUNBLFVBQU00USxPQUFPRixLQUFLN1EsSUFBTCxDQUFVLGlCQUFWLENBQWI7QUFDQSxVQUFJOFEsS0FBSzNRLElBQUwsR0FBWWdOLElBQVosT0FBdUI0RCxLQUFLNVEsSUFBTCxHQUFZZ04sSUFBWixFQUEzQixFQUErQztBQUM3Q3ZQLFlBQUksK0JBQUosRUFBcUNrVCxLQUFLM1EsSUFBTCxFQUFyQztBQUNBYixZQUFJMFIsK0JBQUosR0FBc0MsSUFBdEM7QUFDQUYsYUFBSzVRLElBQUwsQ0FBVSxVQUFWLEVBQXNCLFVBQXRCO0FBQ0E7QUFDRDs7QUFFRCxhQUFPLEtBQVA7QUFDRDs7O3dDQUUwQlgsRyxFQUFLO0FBQzlCLFVBQUlELElBQUkwUiwrQkFBUixFQUF5QztBQUN2QzFSLFlBQUkwUiwrQkFBSixHQUFzQyxLQUF0QztBQUNBO0FBQ0Q7O0FBRUQsVUFBTUMsVUFBVXhULEVBQUU4QixHQUFGLEVBQU9TLElBQVAsQ0FBWSxpQkFBWixDQUFoQjtBQUNBcEMsVUFBSSwyQkFBSixFQUFpQ3FULFFBQVE5USxJQUFSLEVBQWpDO0FBQ0EsVUFBSStRLFVBQVV6VCxFQUFFOEIsR0FBRixFQUFPRSxPQUFQLENBQWUsYUFBZixFQUE4Qk8sSUFBOUIsQ0FBbUMsU0FBbkMsQ0FBZDtBQUNBLFVBQUksQ0FBQ2tSLFFBQVFyUixNQUFiLEVBQXFCO0FBQ25CO0FBQ0FxUixrQkFBVXpULEVBQUUsTUFBRixFQUFVdUMsSUFBVixDQUFlLFNBQWYsQ0FBVjtBQUNEOztBQUVELFVBQUksQ0FBQ2tSLFFBQVFyUixNQUFiLEVBQ0UsT0FmNEIsQ0FlckI7O0FBRVQsVUFBTXNSLFNBQVNELFFBQVFFLE1BQVIsQ0FBZSxVQUFDN0QsQ0FBRCxFQUFJb0MsQ0FBSjtBQUFBLGVBQVVsUyxFQUFFa1MsQ0FBRixFQUFLeFAsSUFBTCxPQUFnQjhRLFFBQVE5USxJQUFSLEVBQTFCO0FBQUEsT0FBZixDQUFmOztBQUVBLFVBQU1JLE9BQU80USxPQUFPalIsSUFBUCxDQUFZLE1BQVosQ0FBYjtBQUNBdEMsVUFBSSxNQUFKLEVBQVkyQyxJQUFaOztBQUVBLFVBQUlBLElBQUosRUFBVTtBQUNSLFlBQUlBLEtBQUt4QyxNQUFMLENBQVksQ0FBWixFQUFlLENBQWYsTUFBc0IsR0FBMUIsRUFBK0I7QUFDN0I7QUFDQU4saUNBQXFCOEMsS0FBS3hDLE1BQUwsQ0FBWSxDQUFaLENBQXJCLFFBQXdDMEUsS0FBeEM7QUFDRCxTQUhELE1BR087QUFDTDVFLG1CQUFTMEMsSUFBVCxHQUFnQkEsSUFBaEI7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFHZThRLFEsRUFBVTtBQUN4QjtBQUNBL1IsVUFBSWdTLFNBQUosR0FBaUIsT0FBT0MsUUFBUUQsU0FBZixLQUE2QixXQUE5QztBQUNBMVQsVUFBSSxXQUFKLEVBQWlCeVQsUUFBakIsRUFBMkIsNEJBQTNCLEVBQTBEL1IsSUFBSWdTLFNBQUosR0FBZ0IsR0FBaEIsR0FBc0IsR0FBaEY7O0FBRUEsVUFBSUQsUUFBSixFQUFjO0FBQ1o7O0FBR0YsVUFBTUcsVUFBVSxTQUFWQSxPQUFVLENBQUNDLFFBQUQsRUFBYztBQUM1QixZQUFJQyxNQUFNcFMsSUFBSXFTLEdBQUosQ0FBUSxLQUFSLEVBQWUsSUFBZixDQUFWO0FBQ0EsWUFBSUQsR0FBSixFQUNFQSxrQkFBZ0JBLEdBQWhCLGFBREYsS0FFSyxJQUFJRCxRQUFKLEVBQ0hDLGtCQUFnQkQsUUFBaEIsYUFERyxLQUdIQyxNQUFNLHVCQUFOOztBQUVGLFlBQUlwUyxJQUFJZ1MsU0FBUixFQUNFMVQsSUFBSSxZQUFKLEVBQWtCOFQsR0FBbEIsRUFBdUIsNERBQXZCO0FBQ0ZwUyxZQUFJc1MsNkJBQUosR0FBb0MsSUFBcEM7QUFDQW5VLFVBQUVpVSxHQUFGLEVBQU9qUCxLQUFQO0FBQ0QsT0FiRDs7QUFlQSxVQUFJbkQsSUFBSWdTLFNBQVIsRUFBbUI7QUFDakI7QUFDQTdULFVBQUVDLE1BQUYsRUFBVXFELEVBQVYsQ0FBYSxVQUFiLEVBQXlCO0FBQUEsaUJBQU15USxTQUFOO0FBQUEsU0FBekI7QUFDRDtBQUNEOztBQUVBQTtBQUNEOzs7MEJBR1lqSCxHLEVBQUs3SyxFLEVBQUk7QUFDcEI5QixVQUFJLGFBQUosRUFBbUI4QixFQUFuQjtBQUNBLFVBQU13TixRQUFReE4sR0FBR0wsT0FBSCxDQUFXLFFBQVgsRUFBcUIsRUFBckIsRUFBeUI4TixJQUF6QixFQUFkO0FBQ0EsVUFBSUQsVUFBVSxTQUFWLElBQXVCQSxVQUFVLFNBQWpDLElBQThDQSxVQUFVLGFBQXhELElBQXlFQSxVQUFVLE9BQW5GLElBQThGQSxVQUFVLGNBQTVHLEVBQTRIO0FBQzFIO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXpQLFFBQUUsZ0JBQUYsRUFBb0J1RCxXQUFwQixDQUFnQyxJQUFoQyxFQUFzQ1csSUFBdEM7QUFDQWxFLGNBQU1pQyxFQUFOLEVBQVlzQixXQUFaLENBQXdCLFFBQXhCLEVBQWtDSCxRQUFsQyxDQUEyQyxJQUEzQyxFQUFpRGpCLElBQWpEO0FBQ0FuQyxRQUFFLFFBQUYsRUFBWXVELFdBQVosQ0FBd0IsSUFBeEI7QUFDQXZELFFBQUU4TSxHQUFGLEVBQU85SyxPQUFQLENBQWUsUUFBZixFQUF5Qm9CLFFBQXpCLENBQWtDLElBQWxDOztBQUVBLFVBQUl2QixJQUFJc1MsNkJBQVIsRUFBdUM7QUFDckMsZUFBT3RTLElBQUlzUyw2QkFBWDtBQUNELE9BRkQsTUFFTyxJQUFJdFMsSUFBSWdTLFNBQUosSUFBbUIsT0FBT0MsUUFBUUQsU0FBZixLQUE2QixXQUFwRCxFQUFpRTtBQUN0RSxZQUFNL1EsT0FBTzlDLEVBQUU4TSxHQUFGLEVBQU9ySyxJQUFQLENBQVksTUFBWixDQUFiO0FBQ0EsWUFBTTJSLFNBQVNoVSxTQUFTMEMsSUFBeEI7QUFDQSxZQUFNdVIsU0FBU2pVLFNBQVNrVSxRQUFULENBQWtCM1IsTUFBbEIsQ0FBeUIsSUFBekIsRUFBK0J2QyxTQUFTQyxJQUF4QyxFQUE4Q3lDLElBQTlDLENBQWY7QUFDQSxZQUFJc1IsV0FBV0MsTUFBZixFQUF1QjtBQUNyQmxVLGNBQUksYUFBSixFQUFtQjJDLElBQW5CLEVBQXlCLDREQUF6QjtBQUNBZ1Isa0JBQVFELFNBQVIsQ0FBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEJRLE1BQTFCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJNUUsVUFBVSxZQUFWLElBQTRCQSxVQUFVLE9BQTFDLEVBQW1EO0FBQUc7QUFDcEQsWUFBSUEsVUFBVSxPQUFkLEVBQ0U1TixJQUFJMFMsS0FBSjtBQUNGMVMsWUFBSTJOLEtBQUo7QUFDRDs7QUFFRCxVQUFJM04sSUFBSWdTLFNBQVIsRUFDRSxPQUFPLEtBQVA7QUFDRixhQUFPLElBQVA7QUFDRDs7OzZCQUdlM0QsQyxFQUFHO0FBQ2pCLFVBQU05SyxLQUFLcEYsRUFBRWtRLENBQUYsQ0FBWDtBQUNBLFVBQU1qTyxLQUFLbUQsR0FBRzNDLElBQUgsQ0FBUSxTQUFSLENBQVg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJUixNQUFRakMsRUFBRSxNQUFGLEVBQVU0RCxRQUFWLENBQW1CLE9BQW5CLENBQVIsSUFBeUMsQ0FBQ3dCLEdBQUd4QixRQUFILENBQVksV0FBWixDQUE5QyxFQUNFeEQsU0FBUzBDLElBQVQsaUJBQTRCYixFQUE1QjtBQUNIOztBQUVEOzs7Ozs7d0NBRzJCO0FBQ3pCLFVBQU11UyxtQkFBb0J4VSxFQUFFLG9CQUFGLENBQTFCOztBQUVBO0FBQ0EsVUFBSXdVLGlCQUFpQnBTLE1BQWpCLEtBQTRCLENBQWhDLEVBQW1DO0FBQ2pDLFlBQU1xUyxVQUFVelUsRUFBRUMsTUFBRixDQUFoQjs7QUFFQSxZQUFNeVUsb0JBQW9CalUsU0FBUyxZQUFNO0FBQ3ZDLGNBQU1rVSxZQUFlM1UsRUFBRSxhQUFGLENBQXJCO0FBQ0EsY0FBTTRVLFlBQWVELFVBQVU1TyxNQUFWLEdBQW1CQyxHQUF4QztBQUNBLGNBQU02TyxlQUFlSixRQUFRck8sTUFBUixFQUFyQjtBQUNBO0FBQ0EsY0FBTTBPLGdCQUFnQkYsWUFBYUMsZUFBZSxDQUFsRDs7QUFFQSxjQUFJSixRQUFRTSxTQUFSLEtBQXNCRixZQUF0QixJQUFzQ0MsYUFBMUMsRUFBeUQ7QUFDdkQsZ0JBQUlOLGlCQUFpQjlSLElBQWpCLE9BQTRCLEVBQWhDLEVBQW9DO0FBQ2xDO0FBQ0FpUyx3QkFBVXBTLElBQVYsQ0FBZSxXQUFmLEVBQTRCSixJQUE1Qjs7QUFFQWdMLHVCQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsQ0FBSyxjQUFMLElBQW9CLFNBQVEsZ0JBQTVCLEdBQWhCLEVBQWlFb0gsaUJBQWlCLENBQWpCLENBQWpFOztBQUVBM1Msa0JBQUltVCw4QkFBSjtBQUNFO0FBREYsZUFFRzFJLElBRkgsQ0FFUTtBQUFBLHVCQUFNbUksUUFBUVEsR0FBUixDQUFZLFFBQVosRUFBc0JQLGlCQUF0QixDQUFOO0FBQUEsZUFGUjtBQUdEO0FBQ0Y7QUFDRixTQW5CeUIsRUFtQnZCLEdBbkJ1QixDQUExQjs7QUFxQkFELGdCQUFRUyxNQUFSLENBQWVSLGlCQUFmO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7O3FEQU13QztBQUN0QyxVQUFNdk4sYUFBYW5ILEVBQUUsYUFBRixFQUFpQmlLLElBQWpCLENBQXNCLFlBQXRCLENBQW5CO0FBQ0EsVUFBTXVLLG1CQUFtQnhVLEVBQUUsb0JBQUYsQ0FBekI7O0FBRUEsYUFBTzZCLElBQUlzVCxlQUFKLENBQW9CaE8sVUFBcEIsRUFDSm1GLElBREksQ0FDQyxVQUFDOEksUUFBRCxFQUFjO0FBQ2xCO0FBQ0FqSSxpQkFBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELENBQUssa0JBQUwsSUFBd0IsVUFBVWdJLFFBQWxDLEdBQWhCLEVBQWdFWixpQkFBaUIsQ0FBakIsQ0FBaEU7O0FBRUE7QUFDQTNTLFlBQUl3VCxRQUFKO0FBQ0QsT0FQSSxFQVFKQyxLQVJJLENBUUUsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCO0FBQ0E7QUFDQXZWLFVBQUUsYUFBRixFQUFpQm1DLElBQWpCO0FBQ0FnTCxpQkFBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELENBQUssWUFBTCxJQUFrQixVQUFVbUksTUFBTUMsT0FBbEMsR0FBaEIsRUFBK0RoQixpQkFBaUIsQ0FBakIsQ0FBL0Q7QUFDRCxPQWJJLENBQVA7QUFjRDs7QUFFRDs7Ozs7Ozs7OztvQ0FPdUJyTixVLEVBQVlzTyxJLEVBQU07QUFDdkMsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ3ZKLE9BQUQsRUFBVXdKLE1BQVYsRUFBcUI7QUFDdEMsWUFBTTNVLE9BQU8sRUFBRXlVLFVBQUYsRUFBYjtBQUNBLFlBQU1HLG1FQUFpRTdTLG1CQUFtQm9FLFVBQW5CLENBQWpFLElBQW1Hc08sYUFBV3pWLEVBQUU2VixLQUFGLENBQVE3VSxJQUFSLENBQVgsR0FBNkIsRUFBaEksQ0FBTjtBQUNBLFlBQU04VSxXQUFXLEVBQWpCO0FBQ0EsWUFBSUMsV0FBVyxLQUFmOztBQUVBL1YsVUFBRWdELEdBQUYsQ0FBTTRTLE1BQU4sRUFBYyxVQUFDUixRQUFELEVBQWM7QUFDMUIsY0FBSVksUUFBUSxFQUFaO0FBQ0EsY0FBSTtBQUNGQSxvQkFBUVosU0FBU2EsSUFBVCxDQUFjQSxJQUF0QjtBQUNBLGdCQUFJRCxNQUFNNVQsTUFBTixLQUFpQixDQUFyQixFQUNFMlQsV0FBVyxJQUFYO0FBQ0gsV0FKRCxDQUlFLE9BQU9SLEtBQVAsRUFBYztBQUNkUSx1QkFBVyxJQUFYO0FBQ0Q7O0FBRUQsY0FBSUEsUUFBSixFQUFjO0FBQ1o7QUFDQUosbUJBQU8sSUFBSU8sS0FBSixDQUFVLHlCQUFWLENBQVA7QUFDQTtBQUNEOztBQUVERixnQkFBTUcsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN0Qjs7QUFFQSxnQkFBTUMsYUFBY0QsS0FBS0UsT0FBekI7QUFDQSxnQkFBTUMsYUFBYztBQUNsQnBQLDBCQUFZaVAsS0FBS0ksR0FEQztBQUVsQkMsMEJBQVksQ0FGTTtBQUdsQkMsOEJBQWdCLEtBSEU7QUFJbEJDLGdDQUFrQixLQUpBO0FBS2xCQyw2QkFBZSxLQUxHO0FBTWxCQyx5QkFBVyxFQU5PO0FBT2xCQyx3QkFBVSxDQVBRO0FBUWxCQyx1QkFBUztBQVJTLGFBQXBCOztBQVdBL1csY0FBRTZQLElBQUYsQ0FBT3dHLFVBQVAsRUFBbUIsVUFBQ3JHLEdBQUQsRUFBTWdILEtBQU4sRUFBZ0I7QUFDakMsa0JBQUloSCxRQUFRLFdBQVosRUFDRXVHLFdBQVdVLFNBQVgsR0FBdUIsQ0FBQ0QsTUFBTSxDQUFOLENBQUQsQ0FBdkI7O0FBRUYsa0JBQUloSCxRQUFRLE9BQVosRUFDRXVHLFdBQVdoSixLQUFYLEdBQW1CLENBQUN5SixNQUFNLENBQU4sQ0FBRCxDQUFuQjs7QUFFRixrQkFBSWhILFFBQVEsV0FBWixFQUNFdUcsV0FBV1csU0FBWCxHQUF1QixDQUFDRixNQUFNLENBQU4sQ0FBRCxDQUF2Qjs7QUFFRixrQkFBSWhILFFBQVEsZUFBWixFQUE2QjtBQUMzQjtBQUNBO0FBQ0FnSCxzQkFBTSxDQUFOLEVBQVNwVixPQUFULENBQWlCLFFBQWpCLEVBQTJCLFVBQUN1VixHQUFELEVBQVM7QUFDbENaLDZCQUFXUSxPQUFYLElBQXNCSSxJQUFJQyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCRixJQUFJN1csTUFBSixDQUFXLENBQVgsRUFBY3NNLFdBQWQsR0FBNEJqSyxNQUE1QixDQUFtQyxHQUFuQyxDQUFwRDtBQUNELGlCQUZEO0FBR0Q7O0FBRUQsa0JBQUlxTixRQUFRLFlBQVosRUFBMEI7QUFDeEI7QUFDQWdILHNCQUFNYixPQUFOLENBQWMsVUFBQ3ZJLEdBQUQsRUFBUztBQUNyQjJJLDZCQUFXTyxRQUFYLElBQXVCLENBQUNsSixJQUFJak0sS0FBSixDQUFVLE9BQVYsS0FBc0IsRUFBdkIsRUFBMkJTLE1BQWxEO0FBQ0QsaUJBRkQ7O0FBSUEsb0JBQUk0VSxNQUFNeFAsT0FBTixDQUFjLFVBQWQsSUFBNEIsQ0FBaEMsRUFDRStPLFdBQVdLLGFBQVgsR0FBMkIsSUFBM0I7QUFDSDs7QUFFRCxrQkFBSTVHLFFBQVEsdUJBQVosRUFBcUM7QUFDbkN1RywyQkFBV0csY0FBWCxHQUE0QixJQUE1QjtBQUNBLG9CQUFJTSxNQUFNLENBQU4sTUFBYSxXQUFqQixFQUE4QjtBQUM1QlQsNkJBQVdJLGdCQUFYLEdBQStCLElBQS9CO0FBQ0FKLDZCQUFXTSxTQUFYLEdBQXVCLG1CQUF2QjtBQUNELGlCQUhELE1BR087QUFDTE4sNkJBQVdNLFNBQVgsR0FBdUIscUJBQXZCO0FBQ0Q7QUFDRjs7QUFFRCxrQkFBSTdHLFFBQVEsYUFBWixFQUNFdUcsV0FBV0UsVUFBWCxHQUF3QixDQUFDTyxNQUFNLENBQU4sQ0FBRCxDQUF4QjtBQUNILGFBeENEOztBQTBDQWxCLHFCQUFTOUMsSUFBVCxDQUFjdUQsVUFBZDtBQUNELFdBMUREO0FBMkRBcEssa0JBQVEySixRQUFSLEVBM0UwQixDQTJFUjtBQUNuQixTQTVFRCxFQTRFR1AsS0E1RUgsQ0E0RVMsWUFBTTtBQUNiSSxpQkFBTyxJQUFJTyxLQUFKLENBQVUseUJBQVYsQ0FBUCxFQURhLENBQ2dDO0FBQzlDLFNBOUVEO0FBK0VELE9BckZNLENBQVA7QUFzRkQ7OztxQ0FHdUJvQixHLEVBQUs7QUFDM0IsVUFBSXRYLEVBQUUsTUFBRixFQUFVNEQsUUFBVixDQUFtQixPQUFuQixDQUFKLEVBQ0U1RCxFQUFFLHVCQUFGLEVBQTJCZ0YsS0FBM0IsR0FGeUIsQ0FFVTs7O0FBR3JDLFVBQUksQ0FBQ3NTLEdBQUwsRUFBVTtBQUNSLFlBQUksQ0FBQ3RYLEVBQUUsZUFBRixFQUFtQm9DLE1BQXhCLEVBQWdDO0FBQzlCO0FBQ0FwQyxZQUFFLFVBQUYsRUFBY29ELFFBQWQsQ0FBdUIsV0FBdkIsRUFBb0NGLE1BQXBDLENBQTJDLGtJQUEzQztBQUNELFNBSEQsTUFHTztBQUNMO0FBQ0FsRCxZQUFFLFVBQUYsRUFBY3VELFdBQWQsQ0FBMEIsV0FBMUI7QUFDQXZELFlBQUUsZUFBRixFQUFtQnVYLE1BQW5CO0FBQ0Q7QUFDRixPQVRELE1BU087QUFDTDtBQUNBLFlBQU1DLFFBQVF4WCxFQUFFc1gsR0FBRixFQUFPdFYsT0FBUCxDQUFlLFVBQWYsQ0FBZDtBQUNBLFlBQU15VixNQUFNRCxNQUFNL1UsSUFBTixDQUFXLFNBQVgsQ0FBWjtBQUNBLFlBQUlJLE1BQU16QyxTQUFTMEMsSUFBVCxDQUFjbEIsT0FBZCxDQUFzQixNQUF0QixFQUE4QixFQUE5QixFQUFrQ2UsTUFBbEMsQ0FBeUMsZUFBekMsRUFBMERJLG1CQUFtQjBVLEdBQW5CLENBQTFELENBQVY7QUFDQTtBQUNBLFlBQUlELE1BQU0vVSxJQUFOLENBQVcsV0FBWCxDQUFKLEVBQ0VJLHVCQUFxQjJVLE1BQU0vVSxJQUFOLENBQVcsV0FBWCxDQUFyQjtBQUNGLFlBQUlaLElBQUk2VixRQUFSLEVBQ0U3VSxrQkFBZ0JoQixJQUFJNlYsUUFBcEI7QUFDRnZYLFlBQUksS0FBSixFQUFXMEMsR0FBWDs7QUFFQTdDLFVBQUVnRCxHQUFGLENBQU1ILEdBQU4sRUFBVyxVQUFDSSxHQUFELEVBQVM7QUFDbEI5QyxjQUFJLEtBQUosRUFBVzBDLEdBQVg7QUFDQTFDLGNBQUk4QyxHQUFKO0FBQ0F1VSxnQkFBTUQsTUFBTjtBQUNBMVYsY0FBSTJOLEtBQUo7QUFDRCxTQUxEO0FBTUQ7QUFDRCxhQUFPLEtBQVA7QUFDRDs7QUFHRDs7Ozs2QkFDZ0I4SCxHLEVBQUs7QUFDbkJ0WCxRQUFFc1gsR0FBRixFQUFPaFYsTUFBUCxDQUFjLFVBQWQsRUFBMEJxVixJQUExQixHQUFpQ0osTUFBakMsR0FEbUIsQ0FDdUI7QUFDMUN2WCxRQUFFc1gsR0FBRixFQUFPaFYsTUFBUCxDQUFjLFVBQWQsRUFBMEJpVixNQUExQixHQUZtQixDQUV1QjtBQUMxQyxhQUFPLEtBQVA7QUFDRDs7QUFHRDs7Ozs2QkFDZ0I7QUFDZDtBQUNBLFVBQU1LLE1BQU01WCxFQUFFLG1CQUFGLEVBQXVCNlgsT0FBdkIsR0FBaUNDLE1BQWpDLENBQXdDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQzVELFlBQU0vVixLQUFLakMsRUFBRWdZLENBQUYsRUFBS3ZWLElBQUwsQ0FBVSxTQUFWLENBQVg7QUFDQSxZQUFJUixPQUFPLG1CQUFYLEVBQ0UsT0FBTzhWLENBQVA7QUFDRixlQUFPQSxFQUFFcFYsTUFBRixDQUFTVixFQUFULEVBQWEsR0FBYixDQUFQO0FBQ0QsT0FMVyxFQUtULEVBTFMsQ0FBWjtBQU1BOUIsVUFBSSxRQUFKLEVBQWN5WCxHQUFkOztBQUVBLFVBQUlBLFFBQVEsRUFBWixFQUFnQjtBQUNkO0FBQ0E7QUFDQSxZQUFNSyxRQUFRalksNk5BR29DNFgsR0FIcEMsMEJBQWQ7QUFLQTVYLFVBQUUsTUFBRixFQUFVa0QsTUFBVixDQUFpQitVLEtBQWpCLEVBUmMsQ0FRVTtBQUN4QkEsY0FBTUMsTUFBTjtBQUNEO0FBQ0QsYUFBTyxLQUFQO0FBQ0Q7Ozs0Q0FHOEIvUSxVLEVBQVk7QUFDekMsVUFBSXRGLElBQUlzVyw0QkFBUixFQUNFO0FBQ0ZoWSxVQUFJLHlCQUFKO0FBQ0EwQixVQUFJc1csNEJBQUosR0FBbUMsSUFBbkM7O0FBR0FuWSxRQUFFLG9CQUFGLEVBQXdCUSxJQUF4QixDQUE2QixZQUE3QixFQUEyQyxZQUFNO0FBQy9DTCxZQUFJLE9BQUo7QUFDQTBCLFlBQUl1VyxvQkFBSixDQUF5QmpSLFVBQXpCO0FBQ0FuSCxVQUFFLGVBQUYsRUFBbUJtQyxJQUFuQjtBQUNELE9BSkQsRUFJRzNCLElBSkgsQ0FJUSxZQUpSLEVBSXNCLFlBQU07QUFDMUJMLFlBQUksUUFBSjtBQUNBLFlBQUksQ0FBQzBCLElBQUl3VyxXQUFULEVBQ0VyWSxFQUFFLGVBQUYsRUFBbUJrRSxJQUFuQjtBQUNILE9BUkQ7O0FBVUFsRSxRQUFFLE1BQUYsRUFBVVEsSUFBVixDQUFlLFVBQWYsRUFBMkIsVUFBQ2lELEdBQUQsRUFBUztBQUNsQztBQUNBdEQsWUFBSSxVQUFKO0FBQ0FzRCxZQUFJNlUsZUFBSjtBQUNBN1UsWUFBSThVLGNBQUo7O0FBRUExVyxZQUFJdVcsb0JBQUosQ0FBeUJqUixVQUF6QjtBQUNBbkgsVUFBRSxlQUFGLEVBQW1Cb0QsUUFBbkIsQ0FBNEIsV0FBNUIsRUFBeUNqQixJQUF6QztBQUNBLGVBQU8sS0FBUDtBQUNELE9BVEQ7O0FBV0FuQyxRQUFFLE1BQUYsRUFBVVEsSUFBVixDQUFlLFdBQWYsRUFBNEIsVUFBQ2lELEdBQUQsRUFBUztBQUNuQ3RELFlBQUksV0FBSjs7QUFFQTtBQUNBLFlBQUlxWSxPQUFReFksRUFBRSxvQkFBRixFQUF3QnFGLEVBQXhCLENBQTJCLFFBQTNCLEtBQ0FyRixFQUFFLG9CQUFGLEVBQXdCcUYsRUFBeEIsQ0FBMkIsUUFBM0IsQ0FEQSxJQUVBckYsRUFBRSxvQkFBRixFQUF3QnFGLEVBQXhCLENBQTJCLFFBQTNCLENBRlo7QUFHQSxZQUFNb1QsSUFBSWhWLElBQUlpVixLQUFKLElBQWFqVixJQUFJa1YsYUFBSixDQUFrQkQsS0FBekM7QUFDQSxZQUFNRSxJQUFJblYsSUFBSW9WLEtBQUosSUFBYXBWLElBQUlrVixhQUFKLENBQWtCRSxLQUF6QztBQUNBLFlBQUksQ0FBQ0wsSUFBTCxFQUFXO0FBQ1QsY0FBTXRJLElBQUlsUSxFQUFFLG9CQUFGLENBQVY7O0FBRFMsMEJBRWFrUSxFQUFFbkssTUFBRixFQUZiO0FBQUEsY0FFRGdOLElBRkMsYUFFREEsSUFGQztBQUFBLGNBRUsvTSxHQUZMLGFBRUtBLEdBRkw7O0FBR1QsY0FBSXlTLEtBQUsxRixJQUFMLElBQWUwRixLQUFLMUYsT0FBTzdDLEVBQUVwRixVQUFGLEVBQTNCLElBQ0E4TixLQUFLNVMsR0FETCxJQUNlNFMsS0FBSzVTLE1BQU9rSyxFQUFFNEksV0FBRixFQUQvQixFQUNnRDtBQUM5QztBQUNBTixtQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNELFlBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsY0FBTXRJLEtBQUlsUSxFQUFFLGVBQUYsQ0FBVjs7QUFEUywyQkFFYWtRLEdBQUVuSyxNQUFGLEVBRmI7QUFBQSxjQUVEZ04sS0FGQyxjQUVEQSxJQUZDO0FBQUEsY0FFSy9NLElBRkwsY0FFS0EsR0FGTDs7QUFHVCxjQUFJeVMsS0FBSzFGLEtBQUwsSUFBZTBGLEtBQUsxRixRQUFPN0MsR0FBRXBGLFVBQUYsRUFBM0IsSUFDQThOLEtBQUs1UyxJQURMLElBQ2U0UyxLQUFLNVMsT0FBT2tLLEdBQUU0SSxXQUFGLEVBRC9CLEVBQ2dEO0FBQzlDO0FBQ0FOLG1CQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFlBQUksQ0FBQ0EsSUFBTCxFQUNFeFksRUFBRSxlQUFGLEVBQW1CdUQsV0FBbkIsQ0FBK0IsV0FBL0IsRUFBNENXLElBQTVDO0FBQ0gsT0E5QkQ7QUErQkQ7Ozt5Q0FFMkJpRCxVLEVBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsVUFBSW5ILEVBQUUsZUFBRixFQUFtQm1PLElBQW5CLEdBQTBCdUIsSUFBMUIsT0FBcUMsRUFBekMsRUFDRTs7QUFFRjFQLFFBQUUsZUFBRixFQUFtQm1DLElBQW5CLEdBQTBCZ00sSUFBMUIsdWhCQWVzRWhILFVBZnRFLHlOQW9COENBLFVBcEI5Qzs7QUE2QkFuSCxRQUFFLGNBQUYsRUFBa0JRLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNpRCxHQUFELEVBQVM7QUFDdkM1QixZQUFJa1gsVUFBSjs7QUFFQXRWLFlBQUk2VSxlQUFKO0FBQ0E3VSxZQUFJOFUsY0FBSjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BTkQ7O0FBU0F2WSxRQUFFbUYsS0FBRixDQUFRNkgsS0FBUixDQUFjZ0csSUFBZCxDQUFtQixjQUFuQixFQTdDc0MsQ0E2Q0g7OztBQUduQyxVQUFNZ0csVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDcEI3WSxZQUFJLFVBQUo7QUFDQTtBQUNELE9BSEQ7O0FBTUE7QUFDQTtBQUNBLFVBQU04WSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixZQUFJQyxPQUFPLEtBQVg7O0FBRUEsWUFBSSxPQUFPQyxjQUFQLEtBQTBCLFdBQTlCLEVBQ0VELE9BQU8saURBQVA7O0FBRUYsWUFBSSxDQUFDQSxJQUFMLEVBQ0VBLE9BQU9yWCxJQUFJdVgsT0FBSixFQUFQOztBQUdGLFlBQU1DLE1BQU0sSUFBSUYsY0FBSixFQUFaO0FBQ0EsWUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDVC9ZLGNBQUkwQixJQUFJeVgsU0FBUjtBQUNBLGNBQUksQ0FBQ0QsSUFBSUUsTUFBVCxFQUNFTCxPQUFPLDZCQUFQO0FBQ0g7O0FBRUQsWUFBSUEsSUFBSixFQUNFLE9BQU9BLElBQVA7O0FBR0Y7QUFDQS9ZLFlBQUksTUFBSjtBQUNBO0FBQ0FrWixZQUFJRyxJQUFKLENBQ0UsTUFERixFQUVFcFosU0FBU2tVLFFBQVQsQ0FBa0IzUixNQUFsQixDQUNFLElBREYsRUFDUXZDLFNBQVNDLElBRGpCLEVBRUUsOENBRkYsRUFFa0Q4RyxVQUZsRCxFQUdFLFNBSEYsRUFHYXBFLG1CQUFtQmxCLElBQUl5WCxTQUFKLENBQWNHLElBQWpDLENBSGIsQ0FGRixFQU9FLEtBUEYsRUF4QnVCLENBZ0NyQjtBQUNGO0FBQ0FKLFlBQUlLLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLG9DQUFyQztBQUNBTCxZQUFJTSxJQUFKLENBQVM5WCxJQUFJeVgsU0FBYjs7QUFFQSxZQUFNTSxRQUFRUCxJQUFJUSxZQUFsQjtBQUNBLFlBQU1DLE1BQU1GLE1BQU1qWSxLQUFOLENBQVksMkJBQVosQ0FBWjtBQUNBLFlBQUltWSxPQUFTQSxJQUFJMVgsTUFBakIsRUFBeUI7QUFDdkIsY0FBTTJYLFVBQVVELElBQUksQ0FBSixDQUFoQjtBQUNBM1osY0FBSSxvQkFBSixFQUEwQjRaLE9BQTFCOztBQUVBL1osWUFBRSxlQUFGLEVBQW1CbU8sSUFBbkIsQ0FBd0IsdUJBQXhCO0FBQ0EsY0FBSTZMLGNBQWMsS0FBbEI7QUFDQSxjQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQjlaLGdCQUFJLGFBQUo7QUFDQUgsY0FBRWthLElBQUYsQ0FBTztBQUNMQyxvQkFBTSxLQUREO0FBRUx0WCxtQkFBSyxxQ0FBcUNGLE1BQXJDLENBQTRDb1gsT0FBNUMsRUFBcUQsUUFBckQsRUFBK0RsVixLQUFLQyxNQUFMLEVBQS9ELENBRkE7QUFHTHNWLHdCQUFVLEtBSEw7QUFJTHBCLHVCQUFTLGlCQUFDcUIsR0FBRCxFQUFTO0FBQ2hCbGEsb0JBQUlrYSxHQUFKO0FBQ0Esb0JBQU01QixJQUFJO0FBQ1I2Qix5QkFBT3BVLFNBQVNsRyxFQUFFcWEsR0FBRixFQUFPOVgsSUFBUCxDQUFZLGFBQVosRUFBMkJHLElBQTNCLEVBQVQsRUFBNEMsRUFBNUMsS0FBbUQsQ0FEbEQ7QUFFUjZYLHdCQUFPclUsU0FBU2xHLEVBQUVxYSxHQUFGLEVBQU85WCxJQUFQLENBQVksYUFBWixFQUEyQkcsSUFBM0IsRUFBVCxFQUE0QyxFQUE1QyxLQUFtRCxDQUZsRDtBQUdSOFgsdUJBQU90VSxTQUFTbEcsRUFBRXFhLEdBQUYsRUFBTzlYLElBQVAsQ0FBWSxhQUFaLEVBQTJCRyxJQUEzQixFQUFULEVBQTRDLEVBQTVDLEtBQW1EO0FBSGxELGlCQUFWO0FBS0F2QyxvQkFBSXNZLENBQUo7QUFDQSxvQkFBTWdDLFFBQVFoQyxFQUFFNkIsS0FBRixHQUFVN0IsRUFBRThCLElBQVosR0FBbUI5QixFQUFFK0IsR0FBbkM7QUFDQXhhLGtCQUFFLGVBQUYsRUFBbUJtTyxJQUFuQixrQkFBdUNzTSxLQUF2QztBQUNBLG9CQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWdGEsc0JBQUksZUFBSjtBQUNBMEYsZ0NBQWNtVSxXQUFkO0FBQ0FoYSxvQkFBRSxlQUFGLEVBQW1CbU8sSUFBbkIsQ0FBd0IsZ0NBQXhCO0FBQ0EvTiwyQkFBUzBDLElBQVQsR0FBZ0IxQyxTQUFTMEMsSUFBekIsQ0FKVSxDQUlvQjtBQUMvQixpQkFMRCxNQUtPLElBQUkyVixFQUFFK0IsR0FBTixFQUFXO0FBQ2hCeGEsb0JBQUUsZUFBRixFQUFtQm1PLElBQW5CLENBQXdCLDRGQUF4QjtBQUNBdEksZ0NBQWNtVSxXQUFkO0FBQ0Q7QUFDRjtBQXZCSSxhQUFQO0FBeUJELFdBM0JEOztBQTZCQTtBQUNBQSx3QkFBY3JVLFlBQVlzVSxPQUFaLEVBQXFCLElBQXJCLENBQWQ7QUFDRCxTQXJDRCxNQXFDTztBQUNMOVosY0FBSXlaLEtBQUo7QUFDRDs7QUFFRHpaLFlBQUksV0FBSjtBQUNBLGVBQU8sRUFBUDtBQUNELE9BbEZEOztBQXFGQUgsUUFBRSxnQkFBRixFQUFvQlEsSUFBcEIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUN0Q3FCLFlBQUl3VyxXQUFKLEdBQWtCLFVBQWxCO0FBQ0QsT0FGRCxFQUVHN1gsSUFGSCxDQUVRLFFBRlIsRUFFa0IsVUFBQ2lELEdBQUQsRUFBUztBQUN6QnRELFlBQUkseUJBQUo7QUFDQUgsVUFBRSw0QkFBRixFQUFnQ21DLElBQWhDO0FBQ0FoQyxZQUFJc0QsR0FBSjtBQUNBLFlBQUlBLElBQUlNLE1BQUosSUFBZ0JOLElBQUlNLE1BQUosQ0FBVzJXLEtBQTNCLElBQXNDalgsSUFBSU0sTUFBSixDQUFXMlcsS0FBWCxDQUFpQnRZLE1BQTNELEVBQW1FO0FBQUEsaURBQy9DcUIsSUFBSU0sTUFBSixDQUFXMlcsS0FEb0M7O0FBQ2hFN1ksY0FBSXlYLFNBRDREOztBQUVqRXpYLGNBQUk4WSxXQUFKO0FBQ0Q7QUFDRixPQVZEOztBQWFBM2EsUUFBRSxlQUFGLEVBQW1CUSxJQUFuQixDQUF3QixNQUF4QixFQUFnQyxVQUFDaUQsR0FBRCxFQUFTO0FBQ3ZDO0FBQ0FBLFlBQUk2VSxlQUFKO0FBQ0E3VSxZQUFJOFUsY0FBSjs7QUFFQXBZLFlBQUlzRCxJQUFJbVgsWUFBSixDQUFpQkYsS0FBckI7QUFDQTFhLFVBQUUsZUFBRixFQUFtQnVELFdBQW5CLENBQStCLFdBQS9COztBQUVBdkQsVUFBRSw0QkFBRixFQUFnQ21DLElBQWhDOztBQUdBLFlBQUlzQixJQUFJbVgsWUFBSixDQUFpQkYsS0FBakIsQ0FBdUJ0WSxNQUEzQixFQUFtQztBQUNqQ1AsY0FBSXdXLFdBQUosR0FBa0IsU0FBbEI7O0FBRGlDLHFEQUVmNVUsSUFBSW1YLFlBQUosQ0FBaUJGLEtBRkY7O0FBRWhDN1ksY0FBSXlYLFNBRjRCOztBQUdqQ3pYLGNBQUk4WSxXQUFKO0FBQ0Q7QUFDRixPQWhCRDs7QUFtQkEzYSxRQUFFLFNBQUYsRUFBYVEsSUFBYixDQUFrQixTQUFsQixFQUE2QixVQUFDaUQsR0FBRCxFQUFTO0FBQ3BDdEQsWUFBSXNELElBQUkwVyxJQUFSO0FBQ0FuYSxVQUFFLGlCQUFGLEVBQXFCbUMsSUFBckI7QUFDRCxPQUhELEVBR0czQixJQUhILENBR1EsUUFIUixFQUdrQixVQUFDaUQsR0FBRCxFQUFTO0FBQ3pCdEQsWUFBSSxTQUFKO0FBQ0FILFVBQUUsaUJBQUYsRUFBcUJtQyxJQUFyQjs7QUFFQTtBQUNBO0FBQ0EsWUFBTStXLE9BQU9ELFlBQWI7QUFDQSxZQUFJQyxTQUFTLEVBQWIsRUFBaUI7QUFDZjtBQUNBRjtBQUNBdlYsY0FBSTZVLGVBQUo7QUFDQTdVLGNBQUk4VSxjQUFKO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUVELFlBQUkxVyxJQUFJd1csV0FBSixLQUFvQixTQUF4QixFQUFtQztBQUNqQztBQUNBO0FBQ0F4VyxjQUFJa1gsVUFBSjtBQUNBO0FBQ0FsTCw4QkFBa0JxTCxJQUFsQjtBQUNBelYsY0FBSTZVLGVBQUo7QUFDQTdVLGNBQUk4VSxjQUFKO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUVEO0FBQ0EsZUFBTyxJQUFQO0FBQ0QsT0EvQkQ7O0FBa0NBO0FBQ0EsVUFBTXNDLEtBQUs3YSxFQUFFLG1CQUFGLEVBQXVCOEssVUFBdkIsRUFBWDtBQUNBLFVBQU1nUSxLQUFLOWEsRUFBRSxtQkFBRixFQUF1QjhZLFdBQXZCLEVBQVg7QUFDQSxVQUFNaUMsS0FBSy9hLEVBQUUsZUFBRixFQUFtQjhLLFVBQW5CLEVBQVg7QUFDQSxVQUFNa1EsS0FBS2hiLEVBQUUsZUFBRixFQUFtQjhZLFdBQW5CLEVBQVg7QUFDQTlZLFFBQUUsZUFBRixFQUFtQm1HLEdBQW5CLENBQXVCO0FBQ3JCNE0sY0FBTWxPLEtBQUt1RSxLQUFMLENBQVcsQ0FBQ3lSLEtBQUtFLEVBQU4sSUFBWSxDQUF2QixDQURlO0FBRXJCL1UsYUFBTW5CLEtBQUt1RSxLQUFMLENBQVcsQ0FBQzBSLEtBQUtFLEVBQU4sSUFBWSxDQUF2QjtBQUZlLE9BQXZCOztBQUtBLFVBQUluWixJQUFJb1osR0FBUixFQUFhO0FBQ1hqYixVQUFFLG1DQUFGLEVBQXVDdUQsV0FBdkMsQ0FBbUQsUUFBbkQ7QUFDQXZELFVBQUUsd0JBQUYsRUFBNEJvRCxRQUE1QixDQUFxQyxRQUFyQztBQUNEO0FBQ0Y7O0FBR0Q7Ozs7a0NBQ3FCO0FBQ25CcEQsUUFBRSwwQkFBRixFQUE4QnVYLE1BQTlCLEdBRG1CLENBQ29COztBQUV2QyxVQUFJMVYsSUFBSXVYLE9BQUosRUFBSixFQUFtQjtBQUNqQnZYLFlBQUlrWCxVQUFKO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxPQUFPbUMsVUFBUCxLQUFzQixXQUExQixFQUNFLE9BQU8sS0FBUDs7QUFFRixVQUFNQyxTQUFTLElBQUlELFVBQUosRUFBZjtBQUNBQyxhQUFPQyxNQUFQLEdBQWdCLFVBQUMzWCxHQUFELEVBQVM7QUFDdkJ0RCxZQUFJc0QsSUFBSU0sTUFBUjtBQUNBLFlBQU1zWCxLQUFLLElBQUlDLEtBQUosRUFBWDtBQUNBRCxXQUFHbEosR0FBSCxHQUFTMU8sSUFBSU0sTUFBSixDQUFXa0ksTUFBcEI7QUFDQWpNLFVBQUUsZUFBRixFQUFtQmtELE1BQW5CLENBQTBCbVksRUFBMUI7QUFDQXJiLFVBQUVxYixFQUFGLEVBQU1qWSxRQUFOLENBQWUsV0FBZjtBQUNBO0FBQ0E7QUFDRCxPQVJEOztBQVVBakQsVUFBSTBCLElBQUl5WCxTQUFSO0FBQ0E2QixhQUFPSSxhQUFQLENBQXFCMVosSUFBSXlYLFNBQXpCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztpQ0FHbUI7QUFDbEJ0WixRQUFFLDBCQUFGLEVBQThCdVgsTUFBOUIsR0FEa0IsQ0FDcUI7QUFDdkN2WCxRQUFFLDJEQUFGLEVBQStEa0UsSUFBL0Q7QUFDQSxVQUFJckMsSUFBSXdXLFdBQVIsRUFDRSxPQUFPeFcsSUFBSXdXLFdBQVg7QUFDRixVQUFJeFcsSUFBSXlYLFNBQVIsRUFDRSxPQUFPelgsSUFBSXlYLFNBQVg7QUFDSDs7OzhCQUdnQjtBQUNmLFVBQUlKLE9BQU8sS0FBWDs7QUFFQSxVQUFJLENBQUNBLElBQUQsSUFBVyxDQUFDclgsSUFBSXlYLFNBQXBCLEVBQ0VKLE9BQU8saUJBQVA7O0FBRUY7QUFDQSxVQUFJLENBQUNBLElBQUQsSUFBV3JYLElBQUl5WCxTQUFKLENBQWM3RCxJQUFkLEdBQXFCLE9BQXBDLEVBQ0V5RCxPQUFPLDBCQUFQOztBQUVGLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsWUFBTWlCLE9BQU90WSxJQUFJeVgsU0FBSixDQUFjYSxJQUFkLENBQW1Cdk4sV0FBbkIsRUFBYjtBQUNBLFlBQUl1TixTQUFTLFlBQVQsSUFBeUJBLFNBQVMsV0FBbEMsSUFBaURBLFNBQVMsV0FBOUQsRUFDRWpCLE9BQU8sZ0RBQVA7QUFDSDs7QUFFRCxVQUFJQSxJQUFKO0FBQ0U7QUFDQXJMLGNBQU1xTCxJQUFOOztBQUVGLGFBQU9BLElBQVA7QUFDRDs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs0QkFDZS9SLFUsRUFBWXFVLFEsRUFBVTtBQUNuQyxVQUFNQyxXQUFXLGFBQWE5WSxNQUFiLENBQ2Z3RSxVQURlLEVBQ0gsR0FERyxFQUVmQSxVQUZlLEVBRUgsV0FGRyxFQUdmQSxVQUhlLEVBR0gsT0FIRyxFQUdNQSxVQUhOLEVBR2tCLEdBSGxCLENBQWpCO0FBS0EsVUFBSXVVLGFBQWEsS0FBakI7QUFDQSxVQUFJQyxZQUFhLEtBQWpCOztBQUVBO0FBQ0EsV0FBSyxJQUFNM0wsR0FBWCxJQUFrQndMLFFBQWxCLEVBQTRCO0FBQzFCLFlBQU1JLE9BQU81TCxJQUFJMVAsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQWI7QUFDQSxZQUFJcWIsY0FBYyxLQUFsQixFQUF5QkEsWUFBWUMsSUFBWjtBQUN6QixZQUFJRCxjQUFjQyxJQUFsQixFQUF3QjtBQUN0QkYsdUJBQWEsSUFBYjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNRyxNQUFNLEVBQVo7QUFDQSxVQUFJQyxNQUFNRCxHQUFWO0FBQ0EsVUFBSUUsZ0JBQWdCLEdBQXBCO0FBQ0E7QUFDQSxXQUFLLElBQU0vTCxLQUFYLElBQWtCd0wsUUFBbEIsRUFBNEI7QUFDMUI7QUFDQSxZQUFNUSxRQUFZUixTQUFTeEwsS0FBVCxFQUFjaU0sS0FBZCxDQUFvQixHQUFwQixDQUFsQjtBQUNBLFlBQU1MLFFBQVk1TCxNQUFJMVAsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQWxCO0FBQ0EsWUFBTTRiLFFBQVloVyxTQUFTOEosTUFBSTFQLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFULEVBQTJCLEVBQTNCLENBQWxCO0FBQ0EsWUFBTTZiLE1BQVlqVyxTQUFTOEosTUFBSTFQLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFULEVBQTJCLEVBQTNCLENBQWxCO0FBQ0EsWUFBTThiLFlBQVlSLE1BQUtqWixNQUFMLENBQVksR0FBWixFQUFpQnVaLEtBQWpCLENBQWxCO0FBQ0EsWUFBSUcsV0FBVyxLQUFmOztBQUVBLFlBQUlDLFlBQVksRUFBaEI7QUFDQSxZQUFJRixjQUFjTCxhQUFsQixFQUFpQztBQUMvQixjQUFLLElBQUlHLFVBQVcsQ0FBZixFQUF5QkksWUFBWSxTQUFaLENBQXpCLEtBQ0EsSUFBSUosVUFBVyxDQUFmLEVBQXlCSSxZQUFZLFVBQVosQ0FBekIsS0FDQSxJQUFJSixVQUFXLENBQWYsRUFBeUJJLFlBQVksT0FBWixDQUF6QixLQUNBLElBQUlKLFVBQVcsQ0FBZixFQUF5QkksWUFBWSxPQUFaLENBQXpCLEtBQ0EsSUFBSUosVUFBVyxDQUFmLEVBQXlCSSxZQUFZLEtBQVosQ0FBekIsS0FDQSxJQUFJSixVQUFXLENBQWYsRUFBeUJJLFlBQVksTUFBWixDQUF6QixLQUNBLElBQUlKLFVBQVcsQ0FBZixFQUF5QkksWUFBWSxNQUFaLENBQXpCLEtBQ0EsSUFBSUosVUFBVyxDQUFmLEVBQXlCSSxZQUFZLFFBQVosQ0FBekIsS0FDQSxJQUFJSixVQUFXLENBQWYsRUFBeUJJLFlBQVksV0FBWixDQUF6QixLQUNBLElBQUlKLFVBQVUsRUFBZCxFQUF5QkksWUFBWSxTQUFaLENBQXpCLEtBQ0EsSUFBSUosVUFBVSxFQUFkLEVBQXlCSSxZQUFZLFVBQVosQ0FBekIsS0FDQSxJQUFJSixVQUFVLEVBQWQsRUFBeUJJLFlBQVksVUFBWixDQUF6QixLQUNBLElBQUlKLFVBQVVyYixTQUFkLEVBQXlCeWIsWUFBWSxrQkFBWixDQUF6QixLQUNBLGlCQUF5QkEsWUFBWSxXQUFXM1osTUFBWCxDQUFrQnVaLEtBQWxCLENBQVo7O0FBRTlCLGNBQUlSLFVBQUosRUFBZ0JZLFlBQVlWLE1BQUtqWixNQUFMLENBQVksR0FBWixFQUFpQjJaLFNBQWpCLENBQVo7O0FBRWhCO0FBQ0FSLGlCQUFRQSxNQUFNLHNCQUFOLEdBQStCLEVBQXZDO0FBQ0FBLGtDQUNJUSxTQURKLFNBQ2lCVixLQURqQix5QkFDd0NRLFNBRHhDLHlFQUU2QkUsU0FGN0IscUNBSWVGLFNBSmY7QUFLRDs7QUFFRDtBQUNBLFlBQUtELFFBQVF0YixTQUFULElBQXdCc2IsUUFBUSxFQUFwQyxFQUF5Q0UsV0FBVyxJQUFYO0FBQ3pDLFlBQUlBLFFBQUosRUFBYztBQUNaUCxpQkFBTyxtQkFBUDtBQUNELFNBRkQsTUFFTztBQUNMQSxxREFFSU0sU0FGSixTQUVpQkQsR0FGakIsOEJBR1lDLFNBSFosU0FHeUJELEdBSHpCLDJFQUkrQkEsR0FKL0Isd0NBTWtCQyxTQU5sQixTQU0rQkQsR0FOL0I7QUFPRDs7QUFFRDtBQUNBLFlBQUlwVyxTQUFTLENBQWI7QUFDQSxZQUFJd1csYUFBSjtBQUNBLFlBQUlDLGFBQUo7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVQsTUFBTTVaLE1BQTFCLEVBQWtDcWEsR0FBbEMsRUFBdUM7QUFDckNGLGlCQUFPUCxNQUFNUyxDQUFOLENBQVA7QUFDQSxjQUFJLENBQUNGLElBQUw7QUFDRTtBQUNBO0FBQ0YsY0FBSXhXLFNBQVMsQ0FBYixFQUFnQkEsU0FBUyxJQUFJd1csSUFBYjtBQUNoQkMsaUJBQU90VyxTQUFTcVcsSUFBVCxFQUFlLEVBQWYsSUFBcUJ4VyxNQUE1Qjs7QUFFQTtBQUNBd1csaUJBQU8sT0FBTzVaLE1BQVAsQ0FBYzRaLElBQWQsQ0FBUDtBQUNBQSxpQkFBT0EsS0FBS2pjLE1BQUwsQ0FBWWljLEtBQUtuYSxNQUFMLEdBQWMsQ0FBMUIsRUFBNkIsQ0FBN0IsQ0FBUDs7QUFFQSxjQUFNUyxNQUFNNFksU0FBUzlZLE1BQVQsQ0FBZ0I0WixJQUFoQixFQUFzQixNQUF0QixDQUFaO0FBQ0FULCtCQUFtQmpaLEdBQW5CLFdBQTRCMlosSUFBNUI7QUFDRDs7QUFFRCxZQUFJSCxRQUFKLEVBQ0VQLE9BQU8sUUFBUCxDQURGLEtBR0VBLE9BQU8sb0NBQVA7O0FBRUZDLHdCQUFnQkssU0FBaEI7QUFDRDs7QUFFRE4sYUFBTyxpQkFBUDs7QUFFQTtBQUNBOWIsUUFBRSxpQkFBRixFQUFxQm1PLElBQXJCLENBQTBCMk4sR0FBMUI7QUFDRDs7QUFHRDs7Ozs0QkFDZTtBQUNiLFVBQU1ZLFVBQVUxYyxFQUFFLFNBQUYsQ0FBaEI7QUFDQSxVQUFNMmMsVUFBVTNjLEVBQUUsU0FBRixDQUFoQjtBQUNBLFVBQUksQ0FBQzBjLFFBQVF0YSxNQUFiLEVBQ0U7QUFDRixVQUFJLE9BQU9zYSxRQUFRamEsSUFBUixDQUFhLFNBQWIsQ0FBUCxLQUFtQyxXQUF2QyxFQUNFOztBQUVGLFVBQU0wRSxhQUFhdVYsUUFBUWphLElBQVIsQ0FBYSxTQUFiLENBQW5CO0FBQ0FpYSxjQUFRamEsSUFBUixDQUFhLFNBQWIsRUFBd0IsSUFBeEI7O0FBRUF0QyxVQUFJLGVBQUo7QUFDQXVjLGNBQVF2TyxJQUFSLENBQWEsc0VBQWIsRUFBcUZoTSxJQUFyRjtBQUNBd2EsY0FBUXhPLElBQVIsQ0FBYSxzRUFBYixFQUFxRmhNLElBQXJGO0FBQ0EsVUFBTXlhLE1BQU0sTUFBWjtBQUNBNWMsUUFBRWdELEdBQUYsQ0FBTSxZQUFZTCxNQUFaLENBQW1Cd0UsVUFBbkIsRUFBK0IsY0FBL0IsQ0FBTixFQUFzRCxVQUFDbEUsR0FBRCxFQUFTO0FBQzdELFlBQU04VSxJQUFJOVUsSUFBSWdaLEtBQUosQ0FBVVcsR0FBVixDQUFWO0FBQ0EsWUFBSTdFLEVBQUUzVixNQUFGLElBQVksQ0FBaEIsRUFBbUI7QUFDakJwQyxZQUFFLG9CQUFGLEVBQXdCbU8sSUFBeEIsQ0FBNkI0SixFQUFFLENBQUYsQ0FBN0IsRUFBbUMvVixPQUFuQyxDQUEyQyxlQUEzQyxFQUE0REcsSUFBNUQ7QUFDQW5DLFlBQUUsb0JBQUYsRUFBd0JtTyxJQUF4QixDQUE2QjRKLEVBQUUsQ0FBRixDQUE3QixFQUFtQy9WLE9BQW5DLENBQTJDLGVBQTNDLEVBQTRERyxJQUE1RDtBQUNEO0FBQ0QsWUFBSTRWLEVBQUUzVixNQUFGLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEJzYSxrQkFBUXZPLElBQVIsQ0FBYXlPLE1BQU03RSxFQUFFLENBQUYsQ0FBbkI7QUFDQTRFLGtCQUFReE8sSUFBUixDQUFheU8sTUFBTTdFLEVBQUUsQ0FBRixDQUFuQjtBQUNELFNBSEQsTUFHTztBQUNMMkUsa0JBQVF2TyxJQUFSLENBQWEsNEJBQWI7QUFDQXdPLGtCQUFReE8sSUFBUixDQUFhLDRCQUFiO0FBQ0Q7QUFDRixPQWJEOztBQWVBdE0sVUFBSWdiLG9CQUFKO0FBQ0Q7OzsrQkFHaUI1YSxFLEVBQUk4QixNLEVBQVE7QUFDNUIsVUFBTW9QLGNBQVlsUixFQUFsQjs7QUFFQSxVQUFJLENBQUNqQyxFQUFFLGtCQUFGLEVBQXNCb0MsTUFBM0IsRUFBbUM7QUFDakM7QUFDQSxZQUFNMGEsU0FBUzljLEVBQUUrRCxNQUFGLEVBQVVyQixJQUFWLEVBQWY7QUFDQSxZQUFNcWEsZUFBZS9jLEVBQUVtVCxLQUFGLEVBQVNuUixPQUFULENBQWlCLGVBQWpCLENBQXJCOztBQUVBaEMsVUFBRSxrQkFBRixFQUFzQm1PLElBQXRCLENBQTJCMk8sT0FBT25hLE1BQVAsQ0FBYyxRQUFkLENBQTNCO0FBQ0FvYSxxQkFBYTNaLFFBQWIsQ0FBc0IsSUFBdEI7QUFDQTtBQUNBcEQsVUFBRSx3QkFBRixFQUE0QmdkLE9BQTVCO0FBQ0FoZCxVQUFFbVQsS0FBRixFQUFTOEosU0FBVDtBQUNELE9BVkQsTUFVTztBQUNMO0FBQ0FqZCxVQUFFLGVBQUYsRUFBbUJpZCxTQUFuQixDQUE2QixHQUE3QjtBQUNBO0FBQ0EzYixtQkFBVyxZQUFNO0FBQUU7QUFDakJ0QixZQUFFLGtCQUFGLEVBQXNCdUQsV0FBdEIsQ0FBa0MsSUFBbEM7QUFDQXZELFlBQUUsa0JBQUYsRUFBc0JtTyxJQUF0QixDQUEyQixrQkFBM0I7QUFDRCxTQUhELEVBR0csR0FISDtBQUlBbk8sVUFBRW1ULEtBQUYsRUFBUzZKLE9BQVQ7QUFDRDs7QUFFRCxhQUFPLEtBQVA7QUFDRDs7QUFHRDs7Ozt3QkFDV0UsVSxFQUFZQyxRLEVBQVU7QUFDL0IsVUFBTUMsUUFBU0QsWUFBYy9jLFNBQVNpZCxNQUFULEtBQW9CLEVBQWxDLEdBQ2JqZCxTQUFTMEMsSUFBVCxDQUFjd2EsS0FBZCxDQUFvQixDQUFwQixFQUF1QnJCLEtBQXZCLENBQTZCLEdBQTdCLENBRGEsR0FFYjdiLFNBQVNpZCxNQUFULENBQWdCQyxLQUFoQixDQUFzQixDQUF0QixFQUF5QnJCLEtBQXpCLENBQStCLEdBQS9CLENBRkY7QUFHQSxXQUFLLElBQUlwUSxJQUFJLENBQWIsRUFBZ0JBLElBQUl1UixNQUFNaGIsTUFBMUIsRUFBa0N5SixHQUFsQyxFQUF1QztBQUNyQyxZQUFJdVIsTUFBTXZSLENBQU4sRUFBU3lSLEtBQVQsQ0FBZSxDQUFmLEVBQWtCRixNQUFNdlIsQ0FBTixFQUFTckUsT0FBVCxDQUFpQixHQUFqQixDQUFsQixNQUE2QzBWLFVBQWpELEVBQTZEO0FBQzNELGNBQU1LLElBQUlILE1BQU12UixDQUFOLEVBQVN5UixLQUFULENBQWVGLE1BQU12UixDQUFOLEVBQVNyRSxPQUFULENBQWlCLEdBQWpCLElBQXdCLENBQXZDLENBQVY7QUFDQSxpQkFBUStWLEVBQUVuYixNQUFGLEdBQVcsQ0FBWCxHQUFlb2IsU0FBU0QsQ0FBVCxFQUFZdEIsS0FBWixDQUFrQixHQUFsQixDQUFmLEdBQXdDLEVBQWhEO0FBQ0Q7QUFDRjtBQUNELGFBQU8sRUFBUDtBQUNEOztBQUVEOzs7OytCQUNrQjtBQUNoQixVQUFNd0IsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDekJ6ZCxVQUFFLG1CQUFGLEVBQXVCK0gsT0FBdkIsQ0FBK0IsTUFBL0IsRUFBdUMsWUFBTTtBQUMzQy9ILFlBQUUsbUJBQUYsRUFBdUJ1WCxNQUF2QjtBQUNBdlgsWUFBRSxVQUFGLEVBQWNtQyxJQUFkO0FBQ0QsU0FIRDtBQUlELE9BTEQ7O0FBT0EsVUFBSXViLGFBQWEsS0FBakI7O0FBRUE7QUFDQTFkLFFBQUUsbUJBQUYsRUFBdUJzRCxFQUF2QixDQUEwQixvQkFBMUIsRUFBZ0QsVUFBQ0csR0FBRCxFQUFTO0FBQ3ZEO0FBQ0EsWUFBSSxDQUFDekQsRUFBRXlELElBQUlNLE1BQU4sRUFBY3NCLEVBQWQsQ0FBaUIsdURBQWpCLENBQUwsRUFDRTs7QUFFRnFZLHFCQUFhcGMsV0FBVyxZQUFNO0FBQzVCLGNBQUl0QixFQUFFLG1CQUFGLEVBQXVCb0MsTUFBM0IsRUFBbUM7QUFDakNxYjtBQUNBO0FBQ0Q7O0FBRUR6ZCxZQUFFLFVBQUYsRUFBY2tFLElBQWQsR0FONEIsQ0FNUDtBQUNyQjtBQUNBbEUsWUFBRSxtQkFBRixFQUF1QjZILE9BQXZCLENBQStCN0gsNnFCQUEvQjs7QUFXQTtBQUNBQSxZQUFFLCtCQUFGLEVBQW1DMmQsTUFBbkMsQ0FBMEMsTUFBMUM7QUFDRCxTQXJCWSxFQXFCVixJQXJCVSxDQUFiO0FBc0JELE9BM0JELEVBMkJHQyxVQTNCSCxDQTJCYyxZQUFNO0FBQ2xCLFlBQUlGLFVBQUosRUFBZ0JyYyxhQUFhcWMsVUFBYjtBQUNqQixPQTdCRDtBQThCRDs7OytCQUVpQjtBQUNoQixVQUFNRyxTQUFTN2QsRUFBRUMsTUFBRixFQUFVOFUsU0FBVixFQUFmO0FBQ0E7O0FBRUEsVUFBTXZKLFdBQVcsc0JBQWpCO0FBQ0EsVUFBTXBHLEtBQUtwRixFQUFFd0wsUUFBRixDQUFYO0FBQ0EsVUFBSSxDQUFDcEcsR0FBR2hELE1BQVIsRUFDRTs7QUFFRjtBQUNBLFVBQU0wYixRQUFVMVksR0FBR1csTUFBSCxHQUFZQyxHQUFaLEdBQWtCWixHQUFHMFQsV0FBSCxFQUFuQixHQUF1QzlZLEVBQUVDLE1BQUYsRUFBVW1HLE1BQVYsRUFBeEMsR0FBOEQsRUFBNUU7QUFDQTtBQUNBLFVBQUl5WCxTQUFTQyxLQUFiLEVBQW9CO0FBQ2xCM2QsWUFBSSxvQkFBSixFQUEwQjJkLEtBQTFCO0FBQ0EsWUFBSSxDQUFDamMsSUFBSWtjLGNBQVQsRUFDRS9kLEVBQUV3TCxTQUFTN0ksTUFBVCxDQUFnQixNQUFoQixDQUFGLEVBQTJCcUMsS0FBM0I7QUFDSDtBQUNGOzs7Z0NBR2tCOEgsRyxFQUFLa1IsSyxFQUFPQyxRLEVBQVU7QUFDdkMsVUFBTXpTLFdBQVczSixJQUFJMkosUUFBSixFQUFqQjtBQUNBLFVBQUlBLGFBQWEsS0FBakIsRUFDRSxPQUFPLEtBQVA7O0FBRUYsVUFBTW9FLFFBQVFwRSxTQUFTNUosT0FBVCxDQUFpQixTQUFqQixFQUE0QixFQUE1QixDQUFkOztBQUVBLFVBQU1zYyxlQUFlbGUsRUFBRXdMLFNBQVM3SSxNQUFULENBQWdCLGVBQWhCLENBQUYsQ0FBckI7O0FBRUE7QUFDQTtBQUNBLFVBQU13YixVQUFVM1MsUUFBaEI7QUFDQSxVQUFJLE9BQU8zSixJQUFJdWMsUUFBSixDQUFhRCxPQUFiLENBQVAsS0FBaUMsV0FBckMsRUFDRXRjLElBQUl1YyxRQUFKLENBQWFELE9BQWIsSUFBeUJGLFlBQVksQ0FBckM7O0FBRUYsVUFBSXBjLElBQUl1YyxRQUFKLENBQWFELE9BQWIsSUFBd0IsQ0FBNUIsRUFBK0I7QUFDN0I7QUFDQSxlQUFPLEtBQVAsQ0FGNkIsQ0FFaEI7QUFDZDs7QUFFRHRjLFVBQUl1YyxRQUFKLENBQWFELE9BQWIsS0FBeUIsQ0FBekI7QUFDQSxVQUFNNUIsT0FBTzFhLElBQUl1YyxRQUFKLENBQWFELE9BQWIsQ0FBYjs7QUFFQUQsbUJBQWEzYixJQUFiLENBQWtCLHVCQUFsQixFQUEyQ0osSUFBM0M7O0FBRUFOLFVBQUlrYyxjQUFKLEdBQXFCLElBQXJCOztBQUVBLFVBQUlsYixNQUFNbWIsUUFBUXpCLElBQWxCO0FBQ0EsVUFBTThCLGFBQWFqZSxTQUFTa1UsUUFBVCxDQUFrQjNSLE1BQWxCLENBQXlCLElBQXpCLEVBQStCdkMsU0FBU0MsSUFBeEMsRUFBOEN3QyxHQUE5QyxDQUFuQjtBQUNBQSxhQUFPLFdBQVA7O0FBRUExQyxVQUFJLE9BQUosRUFBYTBDLEdBQWIsRUEvQnVDLENBK0JSO0FBQy9CMUMsVUFBSSxZQUFKLEVBQWtCa2UsVUFBbEIsRUFoQ3VDLENBZ0NSOzs7QUFHL0JsZSxVQUFJLHVCQUFKLEVBQTZCcUwsUUFBN0IsRUFBdUMsT0FBdkMsRUFBZ0RvRSxLQUFoRCxFQUF1RCxPQUF2RCxFQUFnRTJNLElBQWhFLEVBQXNFLE1BQXRFLEVBQThFMVosR0FBOUUsRUFBbUYsR0FBbkY7QUFDQTs7O0FBR0E3QyxRQUFFZ0QsR0FBRixDQUFNSCxHQUFOLEVBQVcsVUFBQ0ksR0FBRCxFQUFTO0FBQ2xCLFlBQUlBLElBQUliLE1BQUosR0FBYSxHQUFiLElBQXNCcEMsRUFBRWlELEdBQUYsRUFBT1YsSUFBUCxDQUFZLGdCQUFaLENBQTFCLEVBQXlEO0FBQ3ZEO0FBQ0EyYix1QkFBYTNiLElBQWIsQ0FBa0IsOEJBQWxCLEVBQWtEMkIsSUFBbEQ7QUFDQTtBQUNBckMsY0FBSXVjLFFBQUosQ0FBYUQsT0FBYixJQUF3QixDQUFDLENBQXpCLENBSnVELENBSTVCO0FBQzNCdGMsY0FBSWtjLGNBQUosR0FBcUIsS0FBckI7QUFDQTtBQUNEOztBQUVELFlBQUlsYyxJQUFJZ1MsU0FBSixJQUFtQixPQUFPQyxRQUFRd0ssWUFBZixLQUFnQyxXQUF2RCxFQUNFeEssUUFBUXdLLFlBQVIsQ0FBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkJELFVBQTdCOztBQUdGLFlBQU1wUixhQUFhak4sRUFBRXdMLFFBQUYsRUFBWS9JLElBQVosQ0FBaUIsSUFBakIsQ0FBbkI7QUFDQSxZQUFJWixJQUFJZ1AsU0FBSixJQUFtQmhQLElBQUlnUCxTQUFKLENBQWNPLFNBQWpDLElBQWdEdlAsSUFBSWdQLFNBQUosQ0FBY08sU0FBZCxDQUF3Qm5FLFVBQXhCLENBQXBELEVBQ0UsT0FBT3BMLElBQUlnUCxTQUFKLENBQWNPLFNBQWQsQ0FBd0JuRSxVQUF4QixDQUFQOztBQUdGLFlBQU1qRSxZQUFZaEosRUFBRXdMLFNBQVM3SSxNQUFULENBQWdCLFdBQWhCLENBQUYsQ0FBbEI7QUFDQXFHLGtCQUFVOUYsTUFBVixDQUFpQnJCLElBQUkwYyxRQUFKLENBQWExYyxJQUFJMmMsZUFBakIsRUFBa0N2YixHQUFsQyxDQUFqQjs7QUFFQTtBQUNBcEIsWUFBSTJOLEtBQUosQ0FBVWhFLFFBQVY7QUFDQTBTLHFCQUFhM2IsSUFBYixDQUFrQix1QkFBbEIsRUFBMkMyQixJQUEzQztBQUNBckMsWUFBSWtjLGNBQUosR0FBcUIsS0FBckI7O0FBRUFsYyxZQUFJeVAsWUFBSixDQUFpQnRJLFNBQWpCOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWhKLFVBQUV3TCxTQUFTN0ksTUFBVCxDQUFnQixNQUFoQixDQUFGLEVBQTJCVyxFQUEzQixDQUE4QixNQUE5QixFQUFzQyxZQUFNO0FBQzFDakMsdUJBQWFRLElBQUk0YyxxQkFBakI7QUFDQTVjLGNBQUk0YyxxQkFBSixHQUE0Qm5kLFdBQVdPLElBQUkyTixLQUFmLEVBQXNCLElBQXRCLENBQTVCO0FBQ0QsU0FIRDs7QUFNQSxZQUFJLE9BQU9uTCxpQkFBUCxLQUE2QixXQUFqQyxFQUNFQSxrQkFBa0JxYSx1QkFBbEIsQ0FBMENuQyxJQUExQztBQUNILE9BM0NEOztBQTZDQSxhQUFPLEtBQVA7QUFDRDs7QUFHRDs7Ozt5Q0FDNEI7QUFDMUJwYyxVQUFJLGlCQUFKOztBQUVBO0FBSDBCLGlCQUlOLENBQUMsZUFBRCxFQUFrQixpQkFBbEIsQ0FKTTtBQUkxQixrREFBMEQ7QUFBckQsWUFBTXdlLGlCQUFOO0FBQ0gsWUFBTUMsU0FBUzVlLFFBQU0yZSxLQUFOLENBQWY7QUFDQUMsZUFBT3ZNLFVBQVAsQ0FBa0IsTUFBbEIsRUFBMEJsTSxHQUExQixDQUE4QixRQUE5QixFQUF3QyxFQUF4Qzs7QUFFQSxZQUFNMFksU0FBU0QsT0FBT2xjLElBQVAsRUFBZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBMUMsVUFBRSxNQUFGLEVBQVU2SCxPQUFWLENBQWtCN0gsRUFBRSxRQUFGLEVBQVl5QyxJQUFaLENBQWlCO0FBQ2pDUixjQUFPMGMsS0FBUCxXQURpQztBQUVqQ0csaUJBQU87QUFGMEIsU0FBakIsRUFHZjNZLEdBSGUsQ0FHWDtBQUNMNFksb0JBQVUsVUFETDtBQUVMMVYsc0JBQVksUUFGUDtBQUdMckQsZUFBSyxFQUhBO0FBSUwrTSxnQkFBTSxFQUpEO0FBS0xpTSxtQkFBUyxtQkFMSjtBQU1MOVYsaUJBQU8wVixPQUFPMVYsS0FBUCxFQU5GO0FBT0wsdUJBQWEwVixPQUFPelksR0FBUCxDQUFXLFdBQVg7QUFQUixTQUhXLEVBWWZ6RCxJQVplLENBWVZtYyxNQVpVLENBQWxCOztBQWNBLFlBQU1JLFNBQVNqZixRQUFNMmUsS0FBTixhQUFxQjdGLFdBQXJCLEtBQXFDLEVBQXBEO0FBQ0EzWSxZQUFJd2UsS0FBSixFQUFXLGVBQVgsRUFBNEJNLE1BQTVCLEVBQW9DLG1CQUFwQyxFQUF5REwsT0FBTzFWLEtBQVAsRUFBekQ7QUFDQWxKLGdCQUFNMmUsS0FBTixhQUFxQnBILE1BQXJCOztBQUVBcUgsZUFBT3hZLE1BQVAsQ0FBYzZZLE1BQWQ7QUFDRDtBQUNGOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs0QkFnQlE7QUFBQSxxRkFBSixFQUFJO0FBQUEsOEJBSk5wWCxPQUlNO0FBQUEsVUFKTkEsT0FJTSxnQ0FKSSxNQUlKO0FBQUEsK0JBSE4yRCxRQUdNO0FBQUEsVUFITkEsUUFHTSxpQ0FISyxXQUdMO0FBQUEsNEJBRk4rQixLQUVNO0FBQUEsVUFGTkEsS0FFTSw4QkFGRSxXQUVGO0FBQUEsMkJBRE5JLElBQ007QUFBQSxVQUROQSxJQUNNLDZCQURDLEVBQ0Q7O0FBQ04sVUFBTTFMLEtBQUt1SixTQUFTNUosT0FBVCxDQUFpQixHQUFqQixFQUFzQixFQUF0QixDQUFYO0FBQ0E1QixRQUFFd0wsUUFBRixFQUFZK0wsTUFBWjtBQUNBdlgsUUFBRTZILE9BQUYsRUFBV0EsT0FBWCxpQkFDTzVGLEVBRFAsOGNBVzRCc0wsS0FYNUIsd0NBYVd0TCxFQWJYLGVBYXVCMEwsSUFidkI7QUFpQkEzTixRQUFFd0wsUUFBRixFQUFZNkIsS0FBWixDQUFrQixNQUFsQjtBQUNEOztBQUdEOzs7OytCQUNrQjdCLFEsRUFBVTBULEksRUFBTTtBQUFFO0FBQ2xDL2UsVUFBSStlLElBQUo7O0FBRUEsVUFBSWxmLEVBQUV3TCxRQUFGLEVBQVlwSixNQUFoQixFQUNFOztBQUVGLFVBQU02SyxhQUFhekIsU0FBUzVKLE9BQVQsQ0FBaUIsR0FBakIsRUFBc0IsRUFBdEIsQ0FBbkI7O0FBRUE1QixRQUFFLE1BQUYsRUFBVTZILE9BQVYsaUJBQ09vRixVQURQLGtLQUkyQmlTLEtBQUsxUixXQUFMLEdBQW1CMFIsS0FBSzFSLFdBQXhCLEdBQXNDLGtCQUpqRSxtTkFTTSxPQUFPMFIsS0FBSzNSLEtBQVosS0FBc0IsV0FBdEIsR0FBb0MsV0FBcEMsR0FBa0QyUixLQUFLM1IsS0FUN0QsaURBWVdOLFVBWlgsd0JBYUksT0FBT2lTLEtBQUt2UixJQUFaLEtBQXFCLFdBQXJCLEdBQW1DLEVBQW5DLEdBQXdDdVIsS0FBS3ZSLElBYmpEOztBQW1CQTtBQUNEOzs7K0JBR2lCYixHLEVBQUtxUyxNLEVBQVE7QUFBRTtBQUMvQixVQUFNRCxPQUFPQyxNQUFiO0FBQ0FELFdBQUszUixLQUFMLEdBQWEsb0NBQWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQXZOLFFBQUVzRyxNQUFGLENBQVMsWUFBVCxFQUF1QixNQUF2QixFQUErQixFQUFFUyxNQUFNLEdBQVIsRUFBYUMsU0FBUyxDQUF0QixFQUF5QnNJLFFBQVEsY0FBakMsRUFBL0I7O0FBRUEsVUFBTTlELFdBQVd4TCxFQUFFOE0sR0FBRixFQUFPckssSUFBUCxDQUFZLGFBQVosQ0FBakI7QUFDQXljLFdBQUtwYyxJQUFMLEdBQVkxQyxTQUFTMEMsSUFBckI7QUFDQW9jLFdBQUtwYyxJQUFMLEdBQVlvYyxLQUFLcGMsSUFBTCxDQUFVbEIsT0FBVixDQUFrQixTQUFsQixFQUE2QixFQUE3QixDQUFaO0FBQ0FzZCxXQUFLcGMsSUFBTCxHQUFZb2MsS0FBS3BjLElBQUwsQ0FBVWxCLE9BQVYsQ0FBa0IsT0FBbEIsRUFBNEIsRUFBNUIsQ0FBWjs7QUFFQXNkLFdBQUt2UixJQUFMOztBQWtDQSxVQUFJdVIsS0FBS0UsYUFBVCxFQUF3QjtBQUN0QkYsYUFBS3ZSLElBQUw7QUFFRCxPQUhELE1BR087QUFDTHVSLGFBQUt2UixJQUFMO0FBR0Q7QUFDRHVSLFdBQUt2UixJQUFMOztBQVdBOUwsVUFBSXdkLFVBQUosQ0FBZTdULFFBQWYsRUFBeUIwVCxJQUF6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FsZixRQUFFLHVCQUFGLEVBQTJCc0QsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQ3RELFVBQUUsNENBQUYsRUFBZ0Q0TixHQUFoRCxDQUFvRCxDQUFwRDtBQUNBc1IsYUFBS0UsYUFBTCxHQUFxQixLQUFyQjtBQUNBRixhQUFLSSxPQUFMLEdBQWUsSUFBZjtBQUNBdGYsVUFBRSxrQkFBRixFQUFzQmtZLE1BQXRCO0FBQ0QsT0FMRDs7QUFRQWxZLFFBQUUsa0JBQUYsRUFBc0JzRCxFQUF0QixDQUF5QixRQUF6QixFQUFtQyxZQUFNO0FBQ3ZDbkQsWUFBSSxpQkFBSjs7QUFFQStlLGFBQUtLLFNBQUwsR0FBaUIsSUFBakI7QUFDQUwsYUFBS00sUUFBTCxHQUFnQnhmLEVBQUUsa0JBQUYsRUFBc0J5ZixTQUF0QixFQUFoQixDQUp1QyxDQUlXOztBQUVsRDtBQUNBemYsVUFBRXdMLFNBQVM3SSxNQUFULENBQWdCLEtBQWhCLENBQUYsRUFBMEJnYixNQUExQixDQUFpQyxNQUFqQztBQUNBM2QsVUFBRXdMLFNBQVM3SSxNQUFULENBQWdCLE9BQWhCLENBQUYsRUFBNEJvRixPQUE1QixDQUFvQyxNQUFwQzs7QUFHQXpHLG1CQUFXLFlBQU07QUFDZjtBQUNBdEIsWUFBRTBmLElBQUYsQ0FBTyxvQkFBUCxFQUE2QlIsS0FBS00sUUFBbEMsRUFBNEMsWUFBTTtBQUNoRHJmLGdCQUFJLFNBQUosRUFBZStlLEtBQUtNLFFBQXBCOztBQUVBLGdCQUFJLENBQUMsQ0FBQ04sS0FBS0UsYUFBTixJQUF5QkYsS0FBS0ksT0FBL0IsS0FBNkNwYSxTQUFTb0IsTUFBVCxLQUFvQixFQUFyRSxFQUF5RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQW5HLGtCQUFJLDZCQUFKO0FBQ0FDLHVCQUFTMEMsSUFBVCxHQUFnQixvQkFBaEI7QUFDQTtBQUNEOztBQUVEOUMsY0FBRSxNQUFGLEVBQVV1RCxXQUFWLENBQXNCLFFBQXRCO0FBQ0F2RCxjQUFFd0wsUUFBRixFQUFZNkIsS0FBWixDQUFrQixNQUFsQjtBQUNELFdBZEQ7QUFlRCxTQWpCRCxFQWlCRyxJQWpCSDs7QUFtQkEsZUFBTyxLQUFQLENBOUJ1QyxDQThCMUI7QUFDZCxPQS9CRDs7QUFrQ0FyTixRQUFFd0wsUUFBRixFQUFZNkIsS0FBWixDQUFrQixNQUFsQixFQUEwQi9KLEVBQTFCLENBQTZCLGlCQUE3QixFQUFnRCxZQUFNO0FBQ3BEbkQsWUFBSSxtQkFBSjs7QUFFQUgsVUFBRSxNQUFGLEVBQVV1RCxXQUFWLENBQXNCLFFBQXRCO0FBQ0EsWUFBSTJiLEtBQUtFLGFBQUwsSUFBd0IsQ0FBQ0YsS0FBS0ksT0FBbEMsRUFBMkM7QUFDekN0ZixZQUFFd0wsUUFBRixFQUFZK0wsTUFBWjtBQUNBO0FBQ0Q7O0FBRUQsWUFBTW9JLFNBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLGNBQUksQ0FBQ1QsS0FBS0ssU0FBVixFQUFxQjtBQUNuQjtBQUNBO0FBQ0FuZixxQkFBUzBDLElBQVQsR0FBZ0Isb0JBQWhCO0FBQ0QsV0FKRCxNQUlPO0FBQ0w5QyxjQUFFd0wsUUFBRixFQUFZK0wsTUFBWjtBQUNBcFgsZ0JBQUksV0FBSixFQUFpQitlLEtBQUtwYyxJQUF0QjtBQUNBMUMscUJBQVMwQyxJQUFULEdBQWdCb2MsS0FBS3BjLElBQXJCO0FBQ0Q7QUFDRixTQVZEOztBQWFBLFlBQUksT0FBT3VCLGlCQUFQLEtBQTZCLFdBQWpDLEVBQThDO0FBQzVDQSw0QkFBa0JDLFNBQWxCLENBQTRCO0FBQzFCQyxrQkFBTSxPQURvQjtBQUUxQkMsZ0JBQUksU0FGc0I7QUFHMUJDLGdCQUFJLE1BSHNCO0FBSTFCRyx3QkFBWUMsS0FBS0MsTUFBTDtBQUpjLFdBQTVCLEVBS0c2YSxNQUxILEVBRDRDLENBTWpDO0FBQ1osU0FQRCxNQU9PO0FBQ0x4ZixjQUFJLDRCQUFKO0FBQ0E7QUFDQXdmO0FBQ0Q7QUFDRixPQWxDRDtBQW1DQSxhQUFPLEtBQVA7QUFDRDs7QUFHRDs7Ozs7Ozs7O3lDQU00QkMsVyxFQUFhO0FBQ3ZDLGFBQVFBLFlBQVlwWSxPQUFaLENBQW9CLCtDQUFwQixNQUF5RSxDQUFDLENBQWxGO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQUNnQnNGLEcsRUFBS3FTLE0sRUFBUTtBQUMzQixVQUFNRCxPQUFPQyxNQUFiLENBRDJCLENBQ1A7O0FBRXBCLFVBQUlELEtBQUtwSSxRQUFULEVBQW1CO0FBQ2pCO0FBQ0FvSSxhQUFLVyxNQUFMLEdBQWMsSUFBZDtBQUNBWCxhQUFLWSxVQUFMLEdBQWtCLElBQWxCO0FBQ0FaLGFBQUszUixLQUFMLEdBQWEsV0FBYjtBQUNBMlIsYUFBS3ZSLElBQUwsR0FBWSxxRkFBWjtBQUNBdVIsYUFBS2EsS0FBTCxHQUFhLElBQWIsQ0FOaUIsQ0FNQztBQUNuQjs7QUFFRCxVQUFNdlUsV0FBV3hMLEVBQUU4TSxHQUFGLEVBQU9ySyxJQUFQLENBQVksYUFBWixDQUFqQjtBQUNBLFVBQU1LLE9BQVc5QyxFQUFFOE0sR0FBRixFQUFPckssSUFBUCxDQUFZLE1BQVosQ0FBakI7O0FBRUFaLFVBQUl3ZCxVQUFKLENBQWU3VCxRQUFmLEVBQXlCMFQsSUFBekI7O0FBR0EsVUFBSUEsS0FBS2MsS0FBVCxFQUFnQjtBQUNkaGdCLFVBQUV3TCxRQUFGLEVBQVlsSSxFQUFaLENBQWUsZ0JBQWYsRUFBaUMsWUFBTTtBQUNyQzRiLGVBQUtjLEtBQUw7QUFDRCxTQUZEO0FBR0Q7O0FBRUQsVUFBSWQsS0FBS2Usc0JBQVQsRUFBaUM7QUFDL0JqZ0IsVUFBRXdMLFFBQUYsRUFBWWxJLEVBQVosQ0FBZSxpQkFBZixFQUFrQyxZQUFNO0FBQ3RDbkQsY0FBSSx5QkFBSixFQUErQjJDLElBQS9CLEVBQXFDLElBQXJDO0FBQ0E5QyxZQUFFLE1BQUYsRUFBVXVELFdBQVYsQ0FBc0IsUUFBdEI7QUFDQW5ELG1CQUFTMEMsSUFBVCxHQUFnQkEsSUFBaEI7QUFDRCxTQUpEO0FBS0Q7O0FBR0Q5QyxRQUFFd0wsUUFBRixFQUFZNkIsS0FBWixDQUFrQixNQUFsQjs7QUFHQSxVQUFJNlIsS0FBS2EsS0FBTCxJQUFnQi9mLEVBQUVzRyxNQUFGLENBQVMsZ0JBQVQsTUFBK0IsSUFBbkQsRUFBeUQ7QUFDdkQsWUFBSWxHLFNBQVNrVSxRQUFULEtBQXNCLFFBQTFCLEVBQW9DO0FBQ2xDO0FBQ0FsVSxtQkFBUzBDLElBQVQsR0FBZ0IsdUNBQWhCO0FBQ0EsaUJBQU8sS0FBUDtBQUNEO0FBQ0QsWUFBTUQsTUFBTSxvQkFBWjtBQUNBN0MsVUFBRWdELEdBQUYsQ0FBTUgsR0FBTixFQUFXLFVBQUNxZCxLQUFELEVBQVc7QUFDcEJsZ0IsWUFBRXdMLFNBQVM3SSxNQUFULENBQWdCLGVBQWhCLENBQUYsRUFBb0NELElBQXBDLENBQXlDLG1DQUF6Qzs7QUFFQTFDLFlBQUV3TCxRQUFGLEVBQVk2QixLQUFaLENBQWtCLE1BQWxCO0FBQ0E7QUFDQTtBQUNBLGNBQU1wSyxNQUFPakQsRUFBRWtnQixLQUFGLEVBQVMzZCxJQUFULENBQWMscUJBQWQsRUFBcUNILE1BQXJDLEdBQ1hwQyxFQUFFa2dCLEtBQUYsRUFBUzNkLElBQVQsQ0FBYyxxQkFBZCxFQUFxQ1MsR0FBckMsQ0FBeUMsQ0FBekMsQ0FEVyxHQUVYa2QsS0FGRjs7QUFLQWxnQixZQUFFd0wsU0FBUzdJLE1BQVQsQ0FBZ0IsT0FBaEIsQ0FBRixFQUE0QndMLElBQTVCLENBQWlDbEwsR0FBakM7O0FBRUEsY0FBTWdWLFFBQVFqWSxFQUFFd0wsU0FBUzdJLE1BQVQsQ0FBZ0Isb0NBQWhCLENBQUYsQ0FBZDs7QUFFQSxjQUFJc1YsTUFBTTdWLE1BQVYsRUFBa0I7QUFDaEI2VixrQkFBTTNVLEVBQU4sQ0FBUyxRQUFULEVBQW1CLFVBQUNHLEdBQUQsRUFBUztBQUMxQkEsa0JBQUk4VSxjQUFKO0FBQ0E5VSxrQkFBSTZVLGVBQUo7O0FBRUEsa0JBQU02SCxVQUFVLEVBQWhCO0FBQ0FsSSxvQkFBTTFWLElBQU4sQ0FBVyxPQUFYLEVBQW9Cc04sSUFBcEIsQ0FBeUIsVUFBQ0MsQ0FBRCxFQUFJb0MsQ0FBSixFQUFVO0FBQ2pDLG9CQUFJbFMsRUFBRWtTLENBQUYsRUFBS3pQLElBQUwsQ0FBVSxNQUFWLEVBQWtCTCxNQUF0QixFQUNFK2QsUUFBUW5nQixFQUFFa1MsQ0FBRixFQUFLelAsSUFBTCxDQUFVLE1BQVYsQ0FBUixJQUE2QnpDLEVBQUVrUyxDQUFGLEVBQUt0RSxHQUFMLEVBQTdCO0FBQ0gsZUFIRDtBQUlBO0FBQ0E7QUFDQTVOLGdCQUFFMGYsSUFBRixDQUFPN2MsR0FBUCxFQUFZc2QsT0FBWixFQUFxQixZQUFNO0FBQ3pCaGdCLG9CQUFJLFdBQUo7QUFDQSxvQkFBSUgsRUFBRXNHLE1BQUYsQ0FBUyxnQkFBVCxNQUErQixJQUFuQyxFQUF5QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXRHLG9CQUFFd0wsUUFBRixFQUFZbEksRUFBWixDQUFlLGlCQUFmLEVBQWtDLFlBQU07QUFDdEN0RCxzQkFBRXdMLFFBQUYsRUFBWStMLE1BQVo7QUFDQXBYLHdCQUFJLFNBQUo7QUFDQTBCLHdCQUFJeUwsUUFBSixDQUFhUixHQUFiLEVBQWtCb1MsSUFBbEIsRUFIc0MsQ0FHZDtBQUN6QixtQkFKRDtBQUtBbGYsb0JBQUUsTUFBRixFQUFVdUQsV0FBVixDQUFzQixRQUF0QjtBQUNBdkQsb0JBQUV3TCxRQUFGLEVBQVk2QixLQUFaLENBQWtCLE1BQWxCO0FBQ0QsaUJBZEQsTUFjTztBQUNMO0FBQ0FRLHdCQUFNLDZCQUFOO0FBQ0Q7QUFDRixlQXBCRDs7QUFzQkEscUJBQU8sS0FBUDtBQUNELGFBbENEO0FBbUNEO0FBQ0YsU0FwREQ7QUFxREEsZUFBTyxLQUFQO0FBQ0Q7O0FBR0QsVUFBSXFSLEtBQUt4UixXQUFULEVBQXNCO0FBQ3BCd1IsYUFBS1ksVUFBTCxHQUFrQixJQUFsQjtBQUNBOWYsVUFBRXdMLFFBQUYsRUFBWWxJLEVBQVosQ0FBZSxpQkFBZixFQUFrQyxZQUFNO0FBQ3RDdEQsWUFBRXdMLFFBQUYsRUFBWStMLE1BQVo7QUFDQXZYLFlBQUUsTUFBRixFQUFVdUQsV0FBVixDQUFzQixRQUF0QjtBQUNELFNBSEQ7QUFJRDs7QUFHRCxVQUFJLENBQUMyYixLQUFLelIsVUFBVixFQUFzQjtBQUNwQixZQUFNNUssT0FBTWlLLElBQUloSyxJQUFoQjtBQUNBO0FBQ0E5QyxVQUFFZ0QsR0FBRixDQUFNSCxJQUFOLEVBQVcsVUFBQ3VkLEdBQUQsRUFBUztBQUNsQixjQUFJbEIsS0FBS3BJLFFBQVQsRUFBbUI7QUFDakIsZ0JBQUksT0FBT3pTLGlCQUFQLEtBQTZCLFdBQWpDLEVBQThDO0FBQzVDQSxnQ0FBa0JDLFNBQWxCLENBQTRCO0FBQzFCQyxzQkFBTSxPQURvQjtBQUUxQkMsb0JBQUksYUFGc0I7QUFHMUJDLG9CQUFJLFVBSHNCO0FBSTFCQyxvQkFBSXRFLFNBQVN1RSxRQUphO0FBSzFCQyw0QkFBWUMsS0FBS0MsTUFBTDtBQUxjLGVBQTVCO0FBT0Q7O0FBRUQsZ0JBQUlqRCxJQUFJd2Usb0JBQUosQ0FBeUJELEdBQXpCLENBQUosRUFBbUM7QUFDakNwZ0IsZ0JBQUUsa0JBQUYsRUFBc0JvRCxRQUF0QixDQUErQixXQUEvQjtBQUNELGFBRkQsTUFFTztBQUNMLGtCQUFNa2QsWUFBWXRnQixFQUFFd0wsUUFBRixDQUFsQjtBQUNBLGtCQUFNK1UsdVFBQU47O0FBUUFELHdCQUFVL2QsSUFBVixDQUFlLGNBQWYsRUFBK0I0TCxJQUEvQixDQUFvQyxRQUFwQztBQUNBbVMsd0JBQVUvZCxJQUFWLENBQWUscUJBQWYsRUFBc0M0TCxJQUF0QyxDQUEyQ29TLFdBQTNDO0FBQ0Q7QUFDRjs7QUFFRHZnQixZQUFFd0wsUUFBRixFQUFZNkIsS0FBWixDQUFrQixNQUFsQjtBQUNBLGNBQUk2UixLQUFLWSxVQUFULEVBQ0V4ZSxXQUFZO0FBQUEsbUJBQU10QixFQUFFd0wsUUFBRixFQUFZNkIsS0FBWixDQUFrQixNQUFsQixDQUFOO0FBQUEsV0FBWixFQUE4QyxJQUE5QztBQUNILFNBaENEO0FBaUNELE9BcENELE1Bb0NPO0FBQ0xyTixVQUFFd0wsUUFBRixFQUFZNkIsS0FBWixDQUFrQixNQUFsQjtBQUNEOztBQUVELFVBQUk2UixLQUFLVyxNQUFULEVBQ0U3ZixFQUFFd0wsU0FBUzdJLE1BQVQsQ0FBZ0IsZ0JBQWhCLENBQUYsRUFBcUNrZCxNQUFyQyxHQXRKeUIsQ0FzSnFCOztBQUVoRCxVQUFJWCxLQUFLWSxVQUFMLElBQXFCWixLQUFLelIsVUFBOUIsRUFDRW5NLFdBQVc7QUFBQSxlQUFNdEIsRUFBRXdMLFFBQUYsRUFBWTZCLEtBQVosQ0FBa0IsTUFBbEIsQ0FBTjtBQUFBLE9BQVgsRUFBNEMsSUFBNUM7O0FBRUYsYUFBTyxLQUFQO0FBQ0Q7O0FBR0Q7Ozs7MkJBQ2NtVCxHLEVBQUtoVixRLEVBQVU7QUFDM0IsVUFBSSxDQUFDZ1YsSUFBSXRSLE9BQVQsRUFDRTs7QUFFRjtBQUNBLFVBQU1sRyxZQUFhd0MsV0FBV3hMLEVBQUV3TCxRQUFGLENBQVgsR0FBeUJ4TCxFQUFFd2dCLEdBQUYsRUFBT3hlLE9BQVAsQ0FBZSxNQUFmLENBQTVDOztBQUVBO0FBQ0FnSCxnQkFBVXpHLElBQVYsQ0FBZSxzQkFBZixFQUF1Q0UsSUFBdkMsQ0FBNEMsU0FBNUMsRUFBdUQsS0FBdkQ7O0FBRUE7QUFDQStkLFVBQUl0UixPQUFKLEdBQWMsSUFBZDtBQUNEOzs7OEJBR2dCdVIsSSxFQUFNO0FBQ3JCO0FBQ0EsVUFBTWhJLElBQUksTUFBSWdJLElBQUosRUFBWXhFLEtBQVosQ0FBa0IsR0FBbEIsQ0FBVjtBQUNBLFVBQUl5RSxLQUFLakksRUFBRSxDQUFGLENBQVQ7QUFDQSxVQUFNa0ksS0FBS2xJLEVBQUVyVyxNQUFGLEdBQVcsQ0FBWCxHQUFlLElBQUlPLE1BQUosQ0FBVzhWLEVBQUUsQ0FBRixDQUFYLENBQWYsR0FBa0MsRUFBN0M7QUFDQSxVQUFNbUksTUFBTSxjQUFaO0FBQ0EsYUFBT0EsSUFBSUMsSUFBSixDQUFTSCxFQUFULENBQVA7QUFDRUEsYUFBS0EsR0FBRzllLE9BQUgsQ0FBV2dmLEdBQVgsRUFBZ0IsT0FBaEIsQ0FBTDtBQURGLE9BRUEsT0FBT0YsS0FBS0MsRUFBWjtBQUNEOzs7OEJBR2dCL1MsRyxFQUFLa1QsSSxFQUFNO0FBQzFCLFVBQUlBLEtBQUs5VixHQUFMLElBQVksR0FBWixJQUFxQjhWLEtBQUt2WCxHQUFMLElBQVksQ0FBckM7QUFDRTtBQUNBLGVBQU8xRSxLQUFLdUUsS0FBTCxDQUFXd0UsTUFBTSxFQUFqQixFQUFxQixDQUFyQixJQUEwQixFQUFqQzs7QUFFRixVQUFJQSxPQUFPLE9BQVgsRUFBb0IsT0FBTyxDQUFDQSxNQUFNLE9BQVAsRUFBZ0JtVCxPQUFoQixDQUF3QixDQUF4QixFQUEyQnBlLE1BQTNCLENBQWtDLElBQWxDLENBQVA7QUFDcEIsVUFBSWlMLE9BQVUsSUFBZCxFQUFvQixPQUFPLENBQUNBLE1BQVMsSUFBVixFQUFnQm1ULE9BQWhCLENBQXdCLENBQXhCLEVBQTJCcGUsTUFBM0IsQ0FBa0MsSUFBbEMsQ0FBUDtBQUNwQixhQUFPaUwsSUFBSW1ULE9BQUosQ0FBWSxDQUFaLENBQVA7QUFDRDs7O3FDQUd1Qm5ULEcsRUFBS2tULEksRUFBTTtBQUNqQyxhQUFPamYsSUFBSW1mLFNBQUosQ0FBY3BULEdBQWQsRUFBbUJrVCxJQUFuQixFQUF5Qm5lLE1BQXpCLENBQWdDLEdBQWhDLENBQVA7QUFDRDs7OytCQUdpQjtBQUNoQixVQUFNc2UsSUFBSWpoQixFQUFFLFdBQUYsRUFBZWdELEdBQWYsQ0FBbUIsQ0FBbkIsQ0FBVjtBQUNBLFVBQUlpZSxLQUFPQSxFQUFFQyxZQUFGLEdBQWlCRCxFQUFFRSxZQUE5QixFQUE0QztBQUMxQztBQUNBO0FBQ0FuaEIsVUFBRSxnQkFBRixFQUFvQm1DLElBQXBCO0FBQ0E7QUFDRDtBQUNGOztBQUdEO0FBQ0E7Ozs7NEJBQ2VpZixRLEVBQVU7QUFDdkIsVUFBSSxPQUFPdmYsSUFBSXdmLFFBQVgsS0FBd0IsV0FBNUIsRUFDRXhmLElBQUl3ZixRQUFKLEdBQWUsRUFBZjs7QUFFRixVQUFJRCxRQUFKLEVBQWM7QUFDWjtBQUNBdmYsWUFBSXdmLFFBQUosQ0FBYXJPLElBQWIsQ0FBa0JvTyxRQUFsQjs7QUFFQTtBQUNBQTtBQUNELE9BTkQsTUFNTztBQUNMO0FBQ0FqaEIsWUFBSSxnQ0FBSixFQUFzQzBCLElBQUl3ZixRQUFKLENBQWFqZixNQUFuRCxFQUEyRCxrQkFBM0Q7QUFDQSxhQUFLLElBQUl5SixJQUFJLENBQWIsRUFBZ0JBLElBQUloSyxJQUFJd2YsUUFBSixDQUFhamYsTUFBakMsRUFBeUN5SixHQUF6QztBQUNFaEssY0FBSXdmLFFBQUosQ0FBYXhWLENBQWI7QUFERjtBQUVEO0FBQ0Y7O0FBR0Q7Ozs7eUJBQ1k1SixFLEVBQUlxZixLLEVBQU9DLE0sRUFBUUMsRyxFQUFLQyxJLEVBQU07QUFDeEMsVUFBTUMsTUFBTUosS0FBWjtBQUNBLFVBQUksQ0FBQ0ksSUFBSUMsS0FBVCxFQUNFRCxJQUFJQyxLQUFKLEdBQVksRUFBRUMsTUFBTSxNQUFSLEVBQWdCQyxPQUFRSCxJQUFJSSxJQUFKLEdBQVcsTUFBWCxHQUFvQixTQUE1QyxFQUFaO0FBQ0YsVUFBSSxDQUFDSixJQUFJSyxLQUFULEVBQ0VMLElBQUlLLEtBQUosR0FBWSxFQUFFRixPQUFRSCxJQUFJSSxJQUFKLEdBQVcsTUFBWCxHQUFvQixTQUE5QixFQUFaOztBQUVGLFVBQUlFLGlCQUFKO0FBQ0EsVUFBSVAsUUFBUUMsSUFBSU0sUUFBaEIsRUFDRUEsV0FBV04sSUFBSU0sUUFBSixHQUFlLENBQTFCLENBREYsQ0FDOEI7QUFEOUIsV0FFSyxJQUFJTixJQUFJTSxRQUFSLEVBQ0hBLFdBQVdOLElBQUlNLFFBQUosR0FBZSxLQUFmLEdBQXVCLElBQWxDLENBREcsS0FHSEEsV0FBVyxDQUFDTixJQUFJTyxlQUFKLEdBQXNCLENBQXRCLEdBQTBCLENBQTNCLElBQWdDLEtBQWhDLEdBQXdDLElBQW5ELENBYnNDLENBYWtCOztBQUUxRFAsVUFBSVEsTUFBSixHQUFhO0FBQ1hDLGNBQU07QUFDSmhnQixnQkFBTSxJQURGO0FBRUo2Ziw0QkFGSTtBQUdKSSxnQkFBTSxHQUhGO0FBSUpQLGlCQUFPO0FBSkgsU0FESztBQU9YQSxlQUFPLFNBUEk7QUFRWFEsZ0JBQVEsRUFBRWxnQixNQUFNLENBQUN1ZixJQUFJTyxlQUFiO0FBUkcsT0FBYjs7QUFXQSxVQUFJLE9BQU9QLElBQUlZLElBQVgsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkNaLFlBQUlZLElBQUosR0FBVztBQUNUQyx1QkFBY2IsSUFBSUksSUFBSixHQUFXLE1BQVgsR0FBb0IsTUFEekI7QUFFVFUscUJBQVc7QUFGRixTQUFYO0FBSUQ7QUFDRDs7O0FBR0EsVUFBSWQsSUFBSUksSUFBUixFQUNFSixJQUFJWSxJQUFKLENBQVNHLGVBQVQsR0FBMkIsU0FBM0I7O0FBRUYsVUFBSSxDQUFDZixJQUFJZ0IsR0FBVCxFQUNFaEIsSUFBSWdCLEdBQUosR0FBVSxFQUFWO0FBQ0YsVUFBSSxDQUFDaEIsSUFBSWdCLEdBQUosQ0FBUXpnQixFQUFiLEVBQ0V5ZixJQUFJZ0IsR0FBSixDQUFRemdCLEVBQVIsR0FBYUEsRUFBYjs7QUFFRixVQUFJLE9BQU9oQyxPQUFPMGlCLGVBQWQsS0FBa0MsV0FBdEMsRUFDRTFpQixPQUFPMGlCLGVBQVAsR0FBeUIsRUFBekI7O0FBRUY7QUFDQSxVQUFNQyxNQUFPbkIsT0FBT0QsR0FBUCxHQUFjLE9BQU9BLElBQUl2WCxJQUFYLEtBQW9CLFdBQXBCLEdBQWtDLENBQUMsRUFBRUEsTUFBTXVYLEdBQVIsRUFBRCxDQUFsQyxHQUFvRCxDQUFDQSxHQUFELENBQS9FO0FBQ0EsVUFBSUUsSUFBSU8sZUFBSixJQUF5QixDQUFDUCxJQUFJbUIsT0FBbEMsRUFDRUQsSUFBSSxDQUFKLEVBQU9FLEtBQVAsR0FBZTdnQixFQUFmOztBQUVGLFVBQU04Z0IsY0FBWTlnQixFQUFsQjtBQUNBakMsUUFBRWdqQixJQUFGLENBQU9oakIsRUFBRStpQixLQUFGLENBQVAsRUFBaUJILEdBQWpCLEVBQXNCbEIsR0FBdEI7O0FBRUEsVUFBSSxDQUFDSCxNQUFMLEVBQ0U7O0FBRUZ2aEIsUUFBRStpQixLQUFGLEVBQVN2aUIsSUFBVCxDQUFjLFdBQWQsRUFBMkIsVUFBQzJFLEtBQUQsRUFBUThkLEdBQVIsRUFBYTdNLElBQWIsRUFBc0I7QUFDL0MsWUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVG5XLGlCQUFPMGlCLGVBQVAsQ0FBdUIxZ0IsRUFBdkIsSUFBNkIsQ0FBQyxHQUE5QjtBQUNBakMsWUFBRSxPQUFGLEVBQVd1WCxNQUFYO0FBQ0E7QUFDRDtBQUNELFlBQUl0WCxPQUFPMGlCLGVBQVAsQ0FBdUIxZ0IsRUFBdkIsTUFBK0JtVSxLQUFLOE0sU0FBeEMsRUFBbUQ7QUFDakRqakIsaUJBQU8waUIsZUFBUCxDQUF1QjFnQixFQUF2QixJQUE2Qm1VLEtBQUs4TSxTQUFsQztBQUNBbGpCLFlBQUUsT0FBRixFQUFXdVgsTUFBWDs7QUFFQSxjQUFNdUUsTUFBTXlGLE9BQU9uTCxLQUFLK00sU0FBTCxDQUFlLENBQWYsQ0FBUCxFQUEwQi9NLEtBQUsrTSxTQUFMLENBQWUsQ0FBZixDQUExQixDQUFaO0FBQ0EsY0FBTUMsUUFBUXBqQixFQUFFK2lCLEtBQUYsQ0FBZDtBQUNBLGNBQU05TixNQUFNbU8sTUFBTXJkLE1BQU4sRUFBWjs7QUFFQTtBQUNBO0FBVGlELGNBVTNDc2QsS0FWMkMsR0FVakMzQixJQUFJZ0IsR0FWNkIsQ0FVM0NXLEtBVjJDOztBQVdqRCxjQUFJLENBQUNBLEtBQUwsRUFDRUEsUUFBVUosSUFBSXZLLEtBQUosR0FBWXpELElBQUlsQyxJQUFqQixHQUEwQnFRLE1BQU1sYSxLQUFOLEtBQWdCLENBQTFDLEdBQStDLE9BQS9DLEdBQXlELE1BQWxFOztBQUVGLGNBQU1vYSxXQUFZRCxVQUFVLE9BQVYsR0FDZkQsTUFBTWxhLEtBQU4sTUFBaUIrWixJQUFJdkssS0FBSixHQUFZekQsSUFBSWxDLElBQWhCLEdBQXVCLEVBQXhDLENBRGUsR0FFZmtRLElBQUl2SyxLQUFKLEdBQVl6RCxJQUFJbEMsSUFBakIsR0FBeUIsRUFGM0I7QUFHQTVTLGNBQUlrakIsS0FBSixFQUFXQyxRQUFYOztBQUVBdGpCLGtCQUFNMGhCLElBQUlnQixHQUFKLENBQVF6Z0IsRUFBZCxFQUFvQmlCLE1BQXBCLHNEQUVLK2YsSUFBSXBLLEtBQUosR0FBWTVELElBQUlqUCxHQUZyQixhQUUrQnFkLEtBRi9CLFNBRXdDQyxRQUZ4QyxZQUV1RHhILEdBRnZEO0FBR0Q7QUFDRixPQTdCRDtBQThCRDs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7OztvQ0FDdUI1TCxDLEVBQUc7QUFDeEIsVUFBSSxPQUFPcVQsVUFBUCxLQUFzQixXQUF0QixJQUF1QyxDQUFDclQsRUFBRTlOLE1BQTlDLEVBQ0U7O0FBRUYsVUFBSVAsSUFBSTJoQixpQkFBUixFQUNFO0FBQ0YzaEIsVUFBSTJoQixpQkFBSixHQUF3QixJQUF4Qjs7QUFFQSxVQUFNMVgsTUFBTTlMLEVBQUVrUSxDQUFGLEVBQUssQ0FBTCxDQUFaO0FBQ0EvUCxVQUFJLGlCQUFKLEVBQXVCMkwsSUFBSXFHLEdBQTNCOztBQUVBO0FBQ0EsVUFBTXNSLEtBQUssSUFBSUYsVUFBSixFQUFYO0FBQ0EsVUFBTUcsVUFBVUQsR0FBR0UsVUFBSCxDQUFjN1gsR0FBZCxFQUFtQixDQUFuQixDQUFoQjtBQUNBM0wsVUFBSXVqQixPQUFKO0FBQ0EsVUFBSSxDQUFDQSxPQUFMLEVBQ0U7QUFDRixVQUFNRSxtQkFBbUJGLFFBQVEsQ0FBUixDQUF6QixDQWpCd0IsQ0FpQlk7O0FBRXBDLFVBQUksQ0FBQ0UsZ0JBQUwsRUFDRTtBQUNGempCLFVBQUl5akIsZ0JBQUo7O0FBRUE7QUFDQSxVQUFNQyxTQUNKaGYsS0FBS3VFLEtBQUwsQ0FBV3BKLEVBQUU0akIsZ0JBQUYsRUFBb0JoWSxHQUFwQixDQUF3QixVQUFDa0UsQ0FBRCxFQUFJb0MsQ0FBSjtBQUFBLGVBQVVBLENBQVY7QUFBQSxPQUF4QixFQUFxQzJGLE9BQXJDLEdBQStDQyxNQUEvQyxDQUFzRCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxJQUFJQyxDQUFkO0FBQUEsT0FBdEQsSUFDVDRMLGlCQUFpQnhoQixNQURuQixDQURGO0FBR0EsVUFBTXlmLFFBQVNnQyxVQUFVLEdBQVYsR0FBZ0IsT0FBaEIsR0FBMEIsT0FBekM7QUFDQTFqQixVQUFJLFFBQUosRUFBYzBqQixNQUFkOztBQUVBN2pCLFFBQUUsVUFBRixFQUFjbUcsR0FBZCxDQUFrQjtBQUNoQjBiLG9CQURnQjtBQUVoQixxQ0FBMkIrQixpQkFBaUIzUSxJQUFqQixDQUFzQixHQUF0QixDQUEzQjtBQUZnQixPQUFsQjtBQUlBalQsUUFBRSx3Q0FBRixFQUE0Q21HLEdBQTVDLENBQWdELEVBQUUwYixZQUFGLEVBQWhEO0FBQ0Q7O0FBR0Q7Ozs7Ozs7Ozs7OzsrQ0FTa0NpQyxPLEVBQVM7QUFDekM5akIsUUFBRThqQixPQUFGLEVBQVdyaEIsSUFBWCxDQUFnQixVQUFoQixFQUE0QixHQUE1QixFQUFpQ2EsRUFBakMsQ0FBb0Msa0JBQXBDLEVBQXdELFNBQVN5Z0IsNEJBQVQsQ0FBc0M3VCxDQUF0QyxFQUF5QztBQUMvRixZQUFJQSxFQUFFaUssSUFBRixLQUFXLE9BQWYsRUFBd0I7QUFDdEIsY0FBTTZKLE9BQVE5VCxFQUFFK1QsT0FBRixJQUFhL1QsRUFBRWdVLEtBQTdCO0FBQ0EsY0FBTUMsVUFBVSxFQUFoQixDQUZzQixDQUVIO0FBQ25CLGNBQU1DLFVBQVUsRUFBaEIsQ0FIc0IsQ0FHSDtBQUNuQixjQUFJLENBQUNELE9BQUQsRUFBVUMsT0FBVixFQUFtQjVjLE9BQW5CLENBQTJCd2MsSUFBM0IsTUFBcUMsQ0FBQyxDQUExQyxFQUNFaGtCLEVBQUUsSUFBRixFQUFRZ0YsS0FBUjtBQUNIO0FBQ0YsT0FSRDtBQVNEOztBQUdEO0FBQ0E7Ozs7aUNBQ29Cd0csUSxFQUFVd0MsTyxFQUFTcVcsaUIsRUFBbUI7QUFDeERya0IsUUFBRXdMLFFBQUYsRUFBWThZLFlBQVosQ0FBeUI7QUFDdkJ4YyxrQkFBVSxnQkFEYTtBQUV2QnljLG1CQUFXLENBRlk7QUFHdkJDLGdCQUFRLGdCQUFDQyxPQUFELEVBQVVyUCxRQUFWLEVBQXVCO0FBQzdCO0FBQ0FBLG1CQUFTcFYsRUFBRTBrQixFQUFGLENBQUtKLFlBQUwsQ0FBa0IzUSxNQUFsQixDQUF5QjNGLE9BQXpCLEVBQWtDeVcsUUFBUUUsSUFBUixDQUFhMUksS0FBYixDQUFtQixNQUFuQixFQUEyQjJJLEdBQTNCLEVBQWxDLENBQVQ7QUFDRCxTQU5zQjtBQU92QkMsZUFBTztBQUFBLGlCQUFNLEtBQU47QUFBQSxTQVBnQixFQU9IO0FBQ3BCQyxnQkFBUSxTQUFTQyxtQkFBVCxDQUE2QjVmLEtBQTdCLEVBQW9DdWYsRUFBcEMsRUFBd0M7QUFDOUMsY0FBSUwsaUJBQUosRUFBdUI7QUFDckIsZ0JBQU1XLFFBQVEsS0FBS2hPLEtBQUwsQ0FBV2lGLEtBQVgsQ0FBaUIsTUFBakIsQ0FBZDtBQUNBO0FBQ0ErSSxrQkFBTUosR0FBTjtBQUNBO0FBQ0FJLGtCQUFNaFMsSUFBTixDQUFXMFIsR0FBR3RPLElBQUgsQ0FBUVksS0FBbkI7QUFDQTtBQUNBZ08sa0JBQU1oUyxJQUFOLENBQVcsRUFBWDtBQUNBLGlCQUFLZ0UsS0FBTCxHQUFhZ08sTUFBTS9SLElBQU4sQ0FBVyxJQUFYLENBQWI7QUFDRCxXQVRELE1BU087QUFDTCxpQkFBSytELEtBQUwsR0FBYTBOLEdBQUd0TyxJQUFILENBQVFZLEtBQXJCO0FBQ0Q7QUFDRCxpQkFBTyxLQUFQO0FBQ0Q7QUF0QnNCLE9BQXpCO0FBd0JEOzs7NkJBR2V6UyxJLEVBQU10QixHLEVBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0EsVUFBSXNCLFNBQVMsVUFBVCxJQUF5QkEsU0FBUyxNQUF0QyxFQUNFLE9BQU90QixHQUFQOztBQUVGLFVBQUksQ0FBQ0EsR0FBRCxJQUFVakQsRUFBRSxNQUFGLEVBQVU0RCxRQUFWLENBQW1CLFVBQW5CLENBQWQsRUFDRS9CLElBQUkyYyxlQUFKLEdBQXNCamEsSUFBdEI7QUFDRixVQUFJLENBQUMxQyxJQUFJMmMsZUFBVCxFQUNFLE9BQU92YixHQUFQOztBQUVGcEIsVUFBSW9qQixVQUFKLEdBQWlCamxCLHVJQUFqQjs7QUFPQUcsVUFBSSxVQUFKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJOEMsR0FBSixFQUFTO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBTWlpQixPQUFPbGxCLFlBQVVpRCxHQUFWLFlBQWI7QUFDQWlpQixhQUFLM2lCLElBQUwsQ0FBVSxzQ0FBVixFQUFrRFcsTUFBbEQsQ0FBeURyQixJQUFJb2pCLFVBQTdEO0FBQ0EsZUFBT0MsS0FBSy9XLElBQUwsRUFBUDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxhQUFPbk8sRUFBRSxzQ0FBRixFQUEwQ2tELE1BQTFDLENBQWlEckIsSUFBSW9qQixVQUFyRCxDQUFQO0FBQ0Q7Ozs2QkFHZS9VLEMsRUFBRztBQUNqQixVQUFNOUssS0FBS3BGLEVBQUVrUSxDQUFGLENBQVg7QUFDQSxVQUFNL0ksYUFBYS9CLEdBQUdwRCxPQUFILENBQVcsYUFBWCxFQUEwQm1qQixJQUExQixHQUFpQzFpQixJQUFqQyxDQUFzQyxTQUF0QyxDQUFuQjtBQUNBLFVBQUksQ0FBQzBFLFVBQUwsRUFDRSxPQUFPLEtBQVA7O0FBRUYsVUFBTWllLFFBQVFoZ0IsR0FBR3BELE9BQUgsQ0FBVyxPQUFYLENBQWQ7O0FBRUEsVUFBSTRMLE1BQU0sRUFBVjtBQUNBLFVBQUl4SSxHQUFHMUMsSUFBSCxPQUFjLE1BQWxCLEVBQTBCO0FBQ3hCa0wsY0FBTXdYLE1BQU03aUIsSUFBTixDQUFXLFlBQVgsRUFBeUJHLElBQXpCLEVBQU47QUFDQWtMLGNBQU1BLElBQUloTSxPQUFKLENBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQkEsT0FBMUIsQ0FBa0MsSUFBbEMsRUFBd0MsTUFBeEMsQ0FBTjtBQUNEO0FBQ0R3akIsWUFBTWxoQixJQUFOO0FBQ0FraEIsWUFBTTlpQixNQUFOLEdBQWVZLE1BQWYsQ0FBc0JsRCwwVEFPNkI0TixHQVA3QixrZkFjZ0VBLE1BQU0sRUFBTixHQUFXLFFBZDNFLHVEQUF0Qjs7QUFtQkEsYUFBTyxLQUFQO0FBQ0Q7OzsrQkFDaUJzQyxDLEVBQUc7QUFDbkIsVUFBSTlLLEtBQUtwRixFQUFFa1EsQ0FBRixDQUFUOztBQUVBLFVBQU0vSSxhQUFhL0IsR0FBR3BELE9BQUgsQ0FBVyxhQUFYLEVBQTBCbWpCLElBQTFCLEdBQWlDMWlCLElBQWpDLENBQXNDLFNBQXRDLENBQW5CO0FBQ0EsVUFBSSxDQUFDMEUsVUFBTCxFQUNFOztBQUVGO0FBQ0E7QUFDQSxVQUFJL0IsR0FBR0MsRUFBSCxDQUFNLE1BQU4sQ0FBSixFQUNFRCxLQUFLQSxHQUFHN0MsSUFBSCxDQUFRLHlCQUFSLENBQUw7O0FBRUYsVUFBTThpQixTQUFTamdCLEdBQUcxQyxJQUFILEVBQWY7QUFDQSxVQUFNNGlCLFVBQVVsZ0IsR0FBR3BELE9BQUgsQ0FBVyxPQUFYLENBQWhCO0FBQ0EsVUFBTXVqQixZQUFZRCxRQUFRSCxJQUFSLEVBQWxCOztBQUVBLFVBQUlFLFdBQVcsTUFBWCxJQUF1QkEsV0FBVyxRQUF0QyxFQUFnRDtBQUM5QyxZQUFNelgsTUFBUXlYLFdBQVcsTUFBWCxHQUFvQkMsUUFBUS9pQixJQUFSLENBQWEsVUFBYixFQUF5QnFMLEdBQXpCLEVBQXBCLEdBQXFELEVBQW5FO0FBQ0EsWUFBTy9LLE1BQU0sNkJBQTZCRixNQUE3QixDQUNYd0UsVUFEVyxFQUNDLFFBREQsRUFDV3RGLElBQUkyYyxlQURmLEVBRVgsZUFGVyxFQUVNemIsbUJBQW1CNkssR0FBbkIsQ0FGTixDQUFiO0FBSUF6TixZQUFJLE1BQUosRUFBWTBDLEdBQVo7QUFDQTdDLFVBQUVnRCxHQUFGLENBQU1ILEdBQU4sRUFBVyxZQUFNO0FBQ2YsY0FBTUksTUFBTzJLLHdCQUNLQSxJQUFJaE0sT0FBSixDQUFZLElBQVosRUFBa0IsTUFBbEIsRUFBMEJBLE9BQTFCLENBQWtDLElBQWxDLEVBQXdDLE1BQXhDLENBREwsZ0hBR1hDLElBQUlvakIsVUFBSixDQUFlOVcsSUFBZixFQUhGO0FBSUE7QUFDQW9YLG9CQUFVcFgsSUFBVixDQUFlbEwsR0FBZixFQUFvQmQsSUFBcEI7QUFDQW1qQixrQkFBUS9OLE1BQVIsR0FQZSxDQU9FO0FBQ2xCLFNBUkQ7QUFTQTtBQUNEO0FBQ0Q7O0FBRUFnTyxnQkFBVXBqQixJQUFWLEdBcENtQixDQW9DRjtBQUNqQm1qQixjQUFRL04sTUFBUixHQXJDbUIsQ0FxQ0Y7QUFDbEI7OzsrQkFHaUJ0VixFLEVBQUk7QUFDcEI7QUFDQTtBQUNBLFVBQU11akIsS0FBS3hsQixFQUFFLE1BQUYsRUFBVTRELFFBQVYsQ0FBbUIsSUFBbkIsQ0FBWDtBQUNBLFVBQUk0aEIsRUFBSixFQUNFQyxJQUFJQyxNQUFKLENBQVcsWUFBWDs7QUFFRjtBQUNBLFVBQUl6aUIsTUFBTSxFQUFWO0FBQ0FqRCxRQUFFNkIsSUFBSThqQixXQUFOLEVBQW1COVYsSUFBbkIsQ0FBd0IsVUFBQ0csR0FBRCxFQUFNcEMsR0FBTixFQUFjO0FBQ3BDLFlBQU01RixRQUFROUIsU0FBUzBILEdBQVQsRUFBYyxFQUFkLENBQWQ7QUFDQSxZQUFJNFgsRUFBSixFQUFRO0FBQ04sY0FBTUksdUJBQXFCNWQsS0FBckIsY0FBa0NBLFFBQVE2ZCxJQUFJQyxhQUE5QyxDQUFOO0FBQ0E3aUIsc0ZBQXFFMmlCLFFBQXJFLG1CQUEwRkEsUUFBMUY7QUFDRCxTQUhELE1BR087QUFDTCxjQUFNdlIsdUJBQXFCcFMsRUFBckIsZUFBaUMrRixLQUF2QztBQUNBL0Usc0dBQXNGb1IsTUFBdEY7QUFDRDtBQUNEcFIsd0NBQThCaEIsRUFBOUIsU0FBb0NBLEVBQXBDLGdCQUFpREEsRUFBakQsU0FBdUQyTCxHQUF2RDtBQUNELE9BVkQ7O0FBWUEsVUFBSTNLLFFBQVEsRUFBWixFQUFnQjtBQUNkO0FBQ0E0SyxjQUFNLGNBQU47QUFDQSxlQUFPLEtBQVA7QUFDRDs7QUFFRDdOLFFBQUUsYUFBRixFQUFpQnVYLE1BQWpCO0FBQ0F2WCxRQUFFLE1BQUYsRUFBVTZILE9BQVYsQ0FBa0I3SCxFQUFFLFNBQUYsRUFBYXlDLElBQWIsQ0FBa0IsRUFBRVIsSUFBSSxZQUFOLEVBQWxCLENBQWxCOztBQUVBLFVBQU04akIsUUFBUS9sQixFQUFFLFFBQUYsRUFBWXlDLElBQVosQ0FBaUIsRUFBRVIsSUFBSSxZQUFOLEVBQWpCLEVBQXVDa00sSUFBdkMsV0FBb0RsTCxHQUFwRCxZQUFkO0FBQ0E4aUIsWUFBTWplLFFBQU4sQ0FBZSxhQUFmO0FBQ0E5SCxRQUFFLGFBQUYsRUFBaUJtRyxHQUFqQixDQUFxQixZQUFyQixFQUFtQyxRQUFuQyxFQUE2Q2hFLElBQTdDO0FBQ0EsVUFBTTZqQixPQUFPaG1CLEVBQUVDLE1BQUYsRUFBVW1HLE1BQVYsTUFBc0J2RSxJQUFJb1osR0FBSixHQUFVLEVBQVYsR0FBZSxDQUFyQyxDQUFiLENBakNvQixDQWlDaUM7QUFDckQsV0FBSyxJQUFJZ0wsSUFBSSxHQUFiLEVBQWtCQSxLQUFLLEVBQXZCLEVBQTJCQSxLQUFLLEVBQWhDLEVBQW9DO0FBQ2xDLFlBQU1DLElBQUlyaEIsS0FBS3VFLEtBQUwsQ0FBVzZjLEtBQUssTUFBTSxLQUFYLENBQVgsQ0FBVjtBQUNBOWxCLFlBQUksUUFBSixFQUFjOGxCLENBQWQsRUFBaUIsR0FBakIsRUFBc0JDLENBQXRCO0FBQ0FsbUIsVUFBRSxpQkFBRixFQUFxQm1HLEdBQXJCLENBQXlCLEVBQUUrQyxPQUFPK2MsQ0FBVCxFQUFZN2YsUUFBUThmLENBQXBCLEVBQXpCO0FBQ0EsWUFBSWxtQixFQUFFLHNCQUFGLEVBQTBCK0YsTUFBMUIsR0FBbUNDLEdBQW5DLEdBQXlDa2dCLENBQXpDLElBQThDRixJQUFsRCxFQUNFO0FBQ0g7O0FBRURobUIsUUFBRSxpQkFBRixFQUFxQjZmLE1BQXJCO0FBQ0E3ZixRQUFFLGFBQUYsRUFBaUJrRSxJQUFqQixHQUF3QmlDLEdBQXhCLENBQTRCLFlBQTVCLEVBQTBDLFNBQTFDLEVBQXFEd1gsTUFBckQsQ0FBNEQsTUFBNUQsRUFDRzVZLEdBREgsQ0FDTyx3QkFEUCxFQUNpQztBQUFBLGVBQU0vRSxFQUFFLGFBQUYsRUFBaUIrSCxPQUFqQixDQUF5QixNQUF6QixDQUFOO0FBQUEsT0FEakM7QUFFQSxhQUFPLEtBQVA7QUFDRDs7QUFFRDs7Ozs7MENBRTZCO0FBQzNCO0FBQ0EsVUFBTW9lLFVBQVUseUJBQWhCO0FBQ0EsVUFBTUMsaUJBQXNCRCxPQUF0Qix5QkFBTjtBQUNBLFVBQU1FLG1CQUFzQkYsT0FBdEIsMkJBQU47QUFDQSxVQUFNRyxlQUFzQkgsT0FBdEIsWUFBTjtBQUNBLFVBQU1JLGtCQUFzQkosT0FBdEIsWUFBTjs7QUFFQSxlQUFTSyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDakMsWUFBSUEsTUFBTWpmLE9BQU4sQ0FBYyxTQUFkLE1BQTZCLENBQTdCLElBQ0FpZixNQUFNamYsT0FBTixDQUFjLFVBQWQsTUFBOEIsQ0FEOUIsSUFFQWlmLE1BQU05a0IsS0FBTixDQUFZLDRCQUFaLENBRkosRUFHRXVELFNBQVM5RSxRQUFULENBQWtCMEMsSUFBbEIsR0FBeUJ3akIsZUFBZUcsS0FBeEMsQ0FIRixLQUtFdmhCLFNBQVM5RSxRQUFULENBQWtCMEMsSUFBbEIsR0FBeUJ5akIsa0JBQWtCeGpCLG1CQUFtQjBqQixLQUFuQixDQUEzQztBQUNIOztBQUVELFVBQU1DLFNBQVMxbUIsRUFBRSxhQUFGLENBQWY7QUFDQSxVQUFNaVksUUFBUXlPLE9BQU9wa0IsTUFBUCxDQUFjLE1BQWQsQ0FBZDtBQUNBMlYsWUFBTUMsTUFBTixDQUFhLFVBQUNoSSxDQUFELEVBQU87QUFDbEJyTyxZQUFJOGtCLDBCQUFKLENBQStCLGlCQUEvQixFQUFrRCxZQUFsRDtBQUNBLFlBQU1GLFFBQVFDLE9BQU85WSxHQUFQLEVBQWQ7QUFDQTRZLDJCQUFtQkMsS0FBbkI7QUFDQXZXLFVBQUVxSSxjQUFGO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0FORDtBQU9BbU8sYUFBT3BqQixFQUFQLENBQVUsbUJBQVYsRUFBK0IsWUFBTTtBQUNuQyxZQUFJLE9BQU9vakIsT0FBT0UsU0FBZCxLQUE0QixXQUFoQyxFQUE2QztBQUMzQzVtQixZQUFFa2EsSUFBRixDQUFPO0FBQ0xyWCxpQkFBSywwRUFEQTtBQUVMdVgsc0JBQVUsUUFGTDtBQUdMeU0sbUJBQU87QUFIRixXQUFQLEVBSUdDLElBSkgsQ0FJUSxZQUFNO0FBQ1pKLG1CQUFPRSxTQUFQLENBQWlCO0FBQ2ZwQyxzQkFBUSxnQkFBQ2lDLEtBQUQsRUFBUU0sT0FBUixFQUFvQjtBQUMxQkwsdUJBQU83QixLQUFQLEdBRDBCLENBQ1g7QUFDZix1QkFBTzdrQixFQUFFZ0QsR0FBRixDQUFNb2pCLGlCQUFpQnJqQixtQkFBbUIwakIsS0FBbkIsQ0FBdkIsRUFBa0QsVUFBQ3hjLElBQUQsRUFBVTtBQUNqRSxzQkFBSSxPQUFPQSxLQUFLK2MsS0FBWixLQUFzQixXQUF0QixJQUFxQy9jLEtBQUsrYyxLQUFMLENBQVc1a0IsTUFBWCxHQUFvQixDQUE3RCxFQUFnRTtBQUM5RCwyQkFBTzJrQixRQUFROWMsS0FBSytjLEtBQWIsQ0FBUDtBQUNELG1CQUZELE1BRU8sSUFBSSxPQUFPL2MsS0FBS2dkLEtBQVosS0FBc0IsV0FBdEIsSUFBc0NoZCxLQUFLZ2QsS0FBTCxLQUFlLElBQXJELElBQ0QsT0FBT2hkLEtBQUtpZCxRQUFaLEtBQXlCLFdBRDVCLEVBQ3lDO0FBQzlDLDJCQUFPSCxRQUFRLENBQUM7QUFDZEksb0NBQWNWO0FBREEscUJBQUQsQ0FBUixDQUFQO0FBR0Q7O0FBRUQseUJBQU96bUIsRUFBRWdELEdBQUYsQ0FBTXFqQixtQkFBbUJ0akIsbUJBQW1CMGpCLEtBQW5CLENBQXpCLEVBQW9ELFVBQUNXLEtBQUQsRUFBVztBQUNwRSx3QkFBSSxPQUFPQSxLQUFQLEtBQWlCLFdBQWpCLElBQWdDQSxNQUFNaGxCLE1BQU4sR0FBZSxDQUFuRCxFQUNFLE9BQU8ya0IsUUFBUUssTUFBTTlKLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBZixDQUFSLENBQVA7QUFDRiwyQkFBT3pjLFNBQVA7QUFDRCxtQkFKTSxDQUFQO0FBS0QsaUJBZk0sQ0FBUDtBQWdCRCxlQW5CYztBQW9CZndtQix1QkFBUztBQUFBLHVCQUFNLElBQU47QUFBQSxlQXBCTTtBQXFCZkMsMkJBQWE7QUFBQSx1QkFBUWxSLEtBQUsrUSxZQUFiO0FBQUEsZUFyQkU7QUFzQmZJLDBCQUFZLEtBdEJHO0FBdUJmQyxxQkFBTyxHQXZCUTtBQXdCZkMsNEJBQWMsS0F4QkMsRUF3Qk07QUFDckJDLHlCQUFXLENBekJJO0FBMEJmMVIscUJBQU87QUExQlEsYUFBakIsRUEyQkcyUixNQTNCSCxDQTJCVSxZQUFNO0FBQ2Qsa0JBQU1DLFVBQVVsQixPQUFPRSxTQUFQLENBQWlCLFdBQWpCLENBQWhCO0FBQ0Esa0JBQUlnQixXQUFXQSxRQUFRVCxZQUFSLEtBQXlCVCxPQUFPOVksR0FBUCxFQUF4QyxFQUNFcUssTUFBTUMsTUFBTjtBQUNILGFBL0JELEVBK0JHNVUsRUEvQkgsQ0ErQk0sT0EvQk4sRUErQmUsVUFBQzRNLENBQUQsRUFBTztBQUNwQixrQkFBSUEsRUFBRWdVLEtBQUYsS0FBWSxFQUFaLElBQWtCaFUsRUFBRWdVLEtBQUYsS0FBWSxFQUFsQyxFQUFzQztBQUNwQ3JpQixvQkFBSThrQiwwQkFBSixDQUErQixpQkFBL0IsRUFBa0QsWUFBbEQ7QUFDQSxvQkFBTUYsUUFBUUMsT0FBTzlZLEdBQVAsRUFBZDtBQUNBNFksbUNBQW1CQyxLQUFuQjtBQUNBdlcsa0JBQUVxSSxjQUFGO0FBQ0EsdUJBQU8sS0FBUDtBQUNEO0FBQ0QscUJBQU8xWCxTQUFQO0FBQ0QsYUF4Q0Q7QUF5Q0QsV0E5Q0Q7QUErQ0Q7QUFDRixPQWxERDtBQW1ERDs7QUFFRDs7QUFFQTs7Ozs7Ozs7OzhCQU1pQnFJLEssRUFBTzlDLE0sRUFBUXRELEksRUFBTTtBQUNwQyxVQUFNK2tCLFNBQVM7QUFDYnpoQixnQkFBUUEsTUFESztBQUViOEMsZUFBT0EsS0FGTTtBQUdiNGUsb0JBQVksS0FIQztBQUliQyxtQkFBVyxLQUpFO0FBS2JDLGlCQUFTLElBTEk7QUFNYkMscUJBQWEsSUFOQTtBQU9iN25CLGtCQUFVLEtBUEc7QUFRYjhuQixpQkFBUyxJQVJJO0FBU2JDLGdCQUFROztBQUdWO0FBWmUsT0FBZixDQWFBLElBQU1uYSxVQUFVb2EsT0FBT0MsSUFBUCxDQUFZUixNQUFaLEVBQ2JsVSxNQURhLENBQ047QUFBQSxlQUFPa1UsT0FBTzdYLEdBQVAsQ0FBUDtBQUFBLE9BRE0sRUFFYjhILE1BRmEsQ0FFTixVQUFDd1EsVUFBRCxFQUFhdFksR0FBYjtBQUFBLGVBQXFCc1ksV0FBVzNsQixNQUFYLENBQXFCcU4sR0FBckIsU0FBNEI2WCxPQUFPN1gsR0FBUCxDQUE1QixDQUFyQjtBQUFBLE9BRk0sRUFFMkQsRUFGM0QsRUFHYmlELElBSGEsQ0FHUixHQUhRLENBQWhCOztBQUtBaFQsYUFBT3VaLElBQVAsQ0FBWTFXLElBQVosRUFBa0IsT0FBbEIsRUFBMkJrTCxPQUEzQjtBQUNEOztBQUVEOzs7Ozs7O2dDQUk4RDtBQUFBLHNGQUFKLEVBQUk7QUFBQSxVQUE1Q3VhLFFBQTRDLFNBQTVDQSxRQUE0QztBQUFBLFVBQWxDemxCLElBQWtDLFNBQWxDQSxJQUFrQztBQUFBLFVBQTVCc0QsTUFBNEIsU0FBNUJBLE1BQTRCO0FBQUEsVUFBcEI4QyxLQUFvQixTQUFwQkEsS0FBb0I7QUFBQSxVQUFicUUsS0FBYSxTQUFiQSxLQUFhOztBQUM1RCxlQUFTaWIsV0FBVCxDQUFxQnJqQixLQUFyQixFQUE0QjtBQUMxQkEsY0FBTW9ULGNBQU47QUFDQSxlQUFPMVcsSUFBSTRtQixTQUFKLENBQWN2ZixLQUFkLEVBQXFCOUMsTUFBckIsRUFBNkJ0RCxJQUE3QixDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxhQUFPO0FBQUE7QUFBQSxVQUFHLE1BQU1BLElBQVQsRUFBZSxPQUFPeUssS0FBdEIsRUFBNkIsU0FBU2liLFdBQXRDO0FBQW9ERDtBQUFwRCxPQUFQO0FBQ0Q7O0FBR0Q7Ozs7Ozs7c0RBSXlDO0FBQ3ZDLFVBQU1HLE9BQU94akIsU0FBU3lqQixhQUFULENBQXVCLHNDQUF2QixDQUFiOztBQUVBLFVBQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1Q7QUFDRDs7QUFFRHZiLGVBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxDQUFLLDBCQUFMO0FBQ2QsY0FBTXNiLEtBQUtFLE9BQUwsQ0FBYTlsQixJQURMO0FBRWQscUJBQWE0bEIsS0FBS0UsT0FBTCxDQUFhQyxXQUZaO0FBR2QseUJBQWlCSCxLQUFLRSxPQUFMLENBQWFFLGVBQWIsS0FBaUM7QUFIcEMsUUFBaEIsRUFJSUosSUFKSjtBQUtEO0FBQ0Q7O0FBRUE7Ozs7Ozs7O3VDQUswQjtBQUN4QixVQUFNL2EsT0FBTzNOLEVBQUVrRixTQUFTeUksSUFBWCxDQUFiO0FBQ0EsVUFBTW9iLGNBQWMvb0IsRUFBRSxpQkFBRixDQUFwQjs7QUFFQTs7Ozs7QUFLQSxlQUFTZ3BCLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ2pDLFlBQU1DLE9BQU9scEIsRUFBRWlwQixRQUFGLENBQWI7QUFDQSxZQUFNRSxZQUFZRCxLQUFLM21CLElBQUwsQ0FBVSxnQkFBVixDQUFsQjtBQUNBLFlBQU02bUIsZ0JBQWdCRixLQUFLM21CLElBQUwsQ0FBVSxvQkFBVixDQUF0QjtBQUNBLFlBQU04bUIsc0JBQXNCRCxjQUFjbmYsSUFBZCxDQUFtQixxQkFBbkIsQ0FBNUI7QUFDQSxZQUFJcWYsY0FBYyxLQUFsQjs7QUFFQTs7Ozs7Ozs7QUFRQSxpQkFBU0MsdUJBQVQsQ0FBaUNwa0IsS0FBakMsRUFBd0M7QUFBQSxjQUM5QnFrQix1QkFEOEIsR0FDRixLQUFLWixPQURILENBQzlCWSx1QkFEOEI7O0FBRXRDLGNBQU1DLFdBQVd6cEIsRUFBRSxLQUFLeXBCLFFBQVAsQ0FBakI7QUFDQSxjQUFNQyxlQUFlRCxTQUFTOVYsTUFBVCxDQUFnQixzQkFBaEIsQ0FBckI7QUFDQSxjQUFNZ1csY0FBY0YsU0FBUzlWLE1BQVQsQ0FBZ0IsaUJBQWhCLENBQXBCO0FBQ0EsY0FBTWlXLFdBQVdGLGFBQWF0bkIsTUFBYixHQUFzQnNuQixhQUFhLENBQWIsRUFBZ0IxUyxLQUF0QyxHQUE4QyxFQUEvRDtBQUNBLGNBQU02UyxjQUFjRixZQUFZdm5CLE1BQVosR0FBcUJ1bkIsWUFBWSxDQUFaLEVBQWUzUyxLQUFwQyxHQUE0QyxFQUFoRTs7QUFFQSxjQUFJd1MsMkJBQTJCSSxhQUFhLEtBQTVDLEVBQW1EO0FBQ2pEemtCLGtCQUFNb1QsY0FBTjs7QUFFQXRZLG1CQUFPRyxRQUFQLEdBQWtCO0FBQ2hCO0FBQ0FvcEIsb0NBQXdCNW5CLE9BQXhCLENBQWdDLEtBQWhDLEVBQXVDLEVBQXZDLENBRmdCLEVBR2hCaW9CLFdBSGdCLEVBSWhCNVcsSUFKZ0IsQ0FJWCxHQUpXLENBQWxCO0FBS0Q7QUFDRjs7QUFFRCxpQkFBUzZXLFdBQVQsR0FBdUI7QUFDckJWLHdCQUNHaG1CLFFBREgsQ0FDWSxTQURaLEVBRUdYLElBRkgsQ0FFUSxlQUZSLEVBRXlCLElBRnpCO0FBR0Q7O0FBRUQsaUJBQVNzbkIsWUFBVCxHQUF3QjtBQUN0Qlgsd0JBQ0c3bEIsV0FESCxDQUNlLFNBRGYsRUFFR2QsSUFGSCxDQUVRLGVBRlIsRUFFeUIsS0FGekI7QUFHRDs7QUFFRDs7Ozs7O0FBTUEsaUJBQVN1bkIsaUJBQVQsQ0FBMkJDLGFBQTNCLEVBQTBDO0FBQ3hDLGNBQ0UsQ0FBQ0EsYUFBRCxJQUNBZixLQUFLLENBQUwsRUFBUWdCLFFBQVIsQ0FBaUJELGFBQWpCLENBREEsSUFFQ1osdUJBQXVCQyxXQUgxQixFQUtFOztBQUVGUztBQUNEOztBQUVELFlBQUliLEtBQUs5bUIsTUFBVCxFQUFpQjtBQUNmOG1CLGVBQUs1bEIsRUFBTCxDQUFRLFFBQVIsRUFBa0JpbUIsdUJBQWxCOztBQUVBLGNBQUksQ0FBQ0gsY0FBY3hsQixRQUFkLENBQXVCLFNBQXZCLENBQUwsRUFBd0M7QUFDdEMrSixpQkFBS3JLLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQUM2QixLQUFELEVBQVc7QUFDMUI2a0IsZ0NBQWtCN2tCLE1BQU1wQixNQUF4QjtBQUNELGFBRkQ7O0FBSUFtbEIsaUJBQ0c1bEIsRUFESCxDQUNNLFFBRE4sRUFDZ0IsWUFBTTtBQUNsQmdtQiw0QkFBYyxJQUFkO0FBQ0QsYUFISCxFQUlHaG1CLEVBSkgsQ0FJTSxVQUpOLEVBSWtCLFVBQUM2QixLQUFELEVBQVc7QUFDekI2a0IsZ0NBQWtCN2tCLE1BQU1nbEIsYUFBeEI7QUFDRCxhQU5IOztBQVFBaEIsc0JBQVU3bEIsRUFBVixDQUFhLFNBQWIsRUFBd0IsWUFBTTtBQUM1QndtQjtBQUNELGFBRkQ7QUFHRDtBQUNGO0FBQ0Y7O0FBRURmLGtCQUFZbFosSUFBWixDQUFpQixVQUFDdWEsS0FBRCxFQUFRQyxJQUFSO0FBQUEsZUFBaUJyQixnQkFBZ0JxQixJQUFoQixDQUFqQjtBQUFBLE9BQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OzRDQVErQjtBQUM3QixVQUFNQyxjQUFjLDBCQUFwQjtBQUNBLFVBQU1DLFNBQVNybEIsU0FBU3lqQixhQUFULENBQXVCLGVBQXZCLENBQWY7O0FBRUE7QUFDQSxVQUFJLENBQUM0QixNQUFMLEVBQWE7O0FBRWI7QUFDQSxVQUFJLENBQUNBLE9BQU9DLFlBQVAsQ0FBb0IsNEJBQXBCLENBQUwsRUFBd0Q7O0FBRXhEOzs7Ozs7Ozs7OztBQVdBLGVBQVNDLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCO0FBQzNCO0FBQ0EsWUFBSSxFQUFFLGFBQWF6cUIsTUFBZixDQUFKLEVBQTRCOztBQUU1QixZQUFNOEcsT0FBT3hGLDBCQUNYdEIsT0FBT0csUUFBUCxDQUFnQnVFLFFBREwsRUFFWCtsQixRQUZXLENBQWI7O0FBS0E7QUFDQSxZQUFNN25CLE1BQU1rRSxPQUFPOUcsT0FBT0csUUFBUCxDQUFnQmlkLE1BQXZCLEdBQWdDcGQsT0FBT0csUUFBUCxDQUFnQnVxQixJQUE1RDs7QUFFQTFxQixlQUFPNlQsT0FBUCxDQUFld0ssWUFBZixDQUE0QixFQUFFb00sa0JBQUYsRUFBNUIsRUFBMEN6cUIsT0FBT3NOLEtBQWpELEVBQXdEMUssR0FBeEQ7QUFDRDs7QUFFRDVDLGFBQU95SSxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDdkQsS0FBRCxFQUFXO0FBQzVDO0FBQ0EsWUFBSSxDQUFDQSxNQUFNOEUsSUFBUCxJQUFlOUUsTUFBTThFLElBQU4sQ0FBV2tRLElBQVgsS0FBb0JtUSxXQUF2QyxFQUFvRDs7QUFFcERHLGtCQUFVdGxCLE1BQU04RSxJQUFOLENBQVd5Z0IsUUFBckI7QUFDRCxPQUxEO0FBTUQ7O0FBRUQ7Ozs7Ozs7Ozs7OztzQ0FTeUI7QUFDdkI7Ozs7OztBQU1BLGVBQVNFLGNBQVQsQ0FBd0JDLFVBQXhCLEVBQW9DQyxlQUFwQyxFQUFxRDtBQUNuREMsY0FBTUMsSUFBTixDQUFXSCxVQUFYLEVBQ0cxVSxPQURILENBQ1csVUFBQzhVLE9BQUQsRUFBYTtBQUNwQixjQUFJQSxZQUFZSCxlQUFoQixFQUFpQztBQUMvQjtBQUNBRyxvQkFBUXpSLElBQVIsR0FBZSxLQUFmO0FBQ0Q7QUFDRixTQU5IO0FBT0Q7O0FBRUQ7Ozs7O0FBS0EsZUFBUzBSLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DO0FBQ2pDOzs7OztBQUtBLGlCQUFTQyxZQUFULENBQXNCam1CLEtBQXRCLEVBQTZCO0FBQzNCLGNBQUksQ0FBQ0EsTUFBTXBCLE1BQU4sQ0FBYXlWLElBQWxCLEVBQXdCOztBQUV4Qm9SLHlCQUNFTyxVQUFVRSxnQkFBVixDQUEyQixTQUEzQixDQURGLEVBRUVsbUIsTUFBTXBCLE1BRlI7O0FBS0E7QUFDQS9ELFlBQUUsWUFBRixFQUFnQnNyQixPQUFoQixDQUF3QjtBQUN0QnZXLHVCQUFXL1UsRUFBRW1GLE1BQU1wQixNQUFSLEVBQWdCZ0MsTUFBaEIsR0FBeUJDO0FBRGQsV0FBeEIsRUFFRyxHQUZIO0FBR0Q7O0FBRUQra0IsY0FBTUMsSUFBTixDQUFXRyxVQUFVRSxnQkFBVixDQUEyQixTQUEzQixDQUFYLEVBQ0dsVixPQURILENBQ1csVUFBQzhVLE9BQUQsRUFBYTtBQUNwQkEsa0JBQVF2aUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUMwaUIsWUFBbkM7QUFDRCxTQUhIOztBQUtBRCxrQkFBVUksWUFBVixDQUF1QixzQkFBdkIsRUFBK0MsRUFBL0M7QUFDRDs7QUFFRFIsWUFBTUMsSUFBTixDQUFXOWxCLFNBQVNtbUIsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQVgsRUFDR2xWLE9BREgsQ0FDVytVLGNBRFg7QUFFRDs7QUFFRDs7Ozs7Ozs7Ozs7b0NBUXVCTSxJLEVBQU07QUFDM0IsVUFBSSxDQUFDM3BCLElBQUk0cEIscUJBQUosQ0FBMEJELElBQTFCLENBQUwsRUFDRSxPQUFPLElBQVA7O0FBRUY7QUFDQSxVQUFJLENBQUMzcEIsSUFBSTZwQixHQUFULEVBQWM7QUFDWjdwQixZQUFJNnBCLEdBQUosR0FBVTtBQUNSQyxtQkFBUztBQURELFNBQVY7QUFHRDs7QUFFRDtBQUNBLFVBQU1DLE1BQU0sSUFBSTFxQixJQUFKLEdBQVcycUIsV0FBWCxHQUF5QnZyQixNQUF6QixDQUFnQyxDQUFoQyxFQUFtQyxFQUFuQyxDQUFaLENBWjJCLENBWXdCO0FBQ25ETixRQUFFOHJCLFNBQUYsQ0FBWTtBQUNWakYsZUFBTztBQURHLE9BQVo7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFNaGIsSUFBSSwrQkFBVjtBQUNBN0wsUUFBRXFNLElBQUYsQ0FDRyxPQUFPbVosRUFBUCxLQUFvQixXQUFwQixJQUFtQ3hsQixFQUFFK3JCLFNBQUYsQ0FBWWxnQixFQUFFbEosTUFBRixDQUFTLFlBQVQsRUFBdUJpcEIsR0FBdkIsQ0FBWixDQUR0QyxFQUVHLE9BQU9JLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNoc0IsRUFBRStyQixTQUFGLENBQVlsZ0IsRUFBRWxKLE1BQUYsQ0FBUywyQkFBVCxFQUFzQ2lwQixHQUF0QyxDQUFaLENBRnRDLEVBR0c1ckIsRUFBRTBrQixFQUFGLElBQVExa0IsRUFBRStyQixTQUFGLENBQVlsZ0IsRUFBRWxKLE1BQUYsQ0FBUyx5QkFBVCxDQUFaLENBSFgsRUFJRzNDLEVBQUUwa0IsRUFBRixJQUFRMWtCLEVBQUVnRCxHQUFGLENBQU0sNENBQU4sRUFBb0QsVUFBQ21ELEdBQUQsRUFBUztBQUNwRW5HLFVBQUUsV0FBRixFQUFlbU8sSUFBZixDQUFvQmhJLEdBQXBCLEVBQXlCMkIsUUFBekIsQ0FBa0MsTUFBbEMsRUFEb0UsQ0FDMUI7QUFDM0MsT0FGUSxDQUpYLEVBT0dqRyxJQUFJNnBCLEdBQUosQ0FBUUMsT0FBUixJQUFtQjNyQixFQUFFaXNCLE9BQUYsQ0FBVSxvQ0FBb0N0cEIsTUFBcEMsQ0FBMkNpcEIsR0FBM0MsQ0FBVixFQUEyRCxVQUFDRCxPQUFELEVBQWE7QUFDMUY5cEIsWUFBSTZwQixHQUFKLENBQVFDLE9BQVIsR0FBa0JBLE9BQWxCO0FBQ0QsT0FGbUIsQ0FQdEIsRUFVRXJmLElBVkYsQ0FVTyxZQUFNO0FBQ1gsWUFBSXpLLElBQUk2cEIsR0FBSixDQUFRQyxPQUFSLENBQWdCdnBCLE1BQWhCLEtBQTJCLENBQS9CLEVBQWtDO0FBQ2hDO0FBQ0F5TCxnQkFBTSw2Q0FBTjtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQW1lLGlCQUFTRSxPQUFULENBQWlCcnFCLElBQUk2cEIsR0FBSixDQUFRQyxPQUF6QixFQUFrQ0gsSUFBbEM7QUFDRCxPQW5CRDs7QUFzQkEsYUFBTyxLQUFQO0FBQ0Q7O0FBR0Q7Ozs7Ozs7Ozs7OzBDQVE2QjFwQixHLEVBQUs7QUFDaEMsVUFBSTFCLFNBQVMrckIsUUFBVCxLQUFzQixpQkFBMUIsRUFDRSxPQUFPLEtBQVA7O0FBRUY7QUFDQTtBQUNBLFVBQUluc0IsRUFBRWtGLFNBQVN5SSxJQUFYLEVBQWlCL0osUUFBakIsQ0FBMEIsS0FBMUIsQ0FBSixFQUNFLE9BQU8sS0FBUDs7QUFFRixVQUFNcVUsUUFBUWpZLEVBQUU4QixHQUFGLEVBQU9FLE9BQVAsQ0FBZSxNQUFmLENBQWQ7QUFDQSxVQUFJaVcsTUFBTTFWLElBQU4sQ0FBVyxvQ0FBWCxFQUFpRDhDLEVBQWpELENBQW9ELFVBQXBELENBQUosRUFDRSxPQUFPNFMsS0FBUDs7QUFFRixhQUFPLEtBQVA7QUFDRDs7QUFHRDs7Ozs7Ozs7OytDQU1rQ21VLFEsRUFBVS9HLE0sRUFBbUM7QUFBQSxVQUEzQnZDLEtBQTJCLHVFQUFuQjFpQixTQUFTdUUsUUFBVTs7QUFDN0UsVUFBSSxPQUFPTixpQkFBUCxLQUE2QixXQUFqQyxFQUE4QztBQUM1Q0EsMEJBQWtCQyxTQUFsQixDQUE0QjtBQUMxQkMsZ0JBQU0sT0FEb0I7QUFFMUJDLGNBQUk0bkIsUUFGc0I7QUFHMUIzbkIsY0FBSTRnQixNQUhzQjtBQUkxQjNnQixjQUFJb2UsS0FKc0I7QUFLMUJsZSxzQkFBWUMsS0FBS0MsTUFBTDtBQUxjLFNBQTVCO0FBT0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OzBDQVk2QjtBQUMzQixVQUFNdW5CLDZCQUE2QixzQkFBbkM7QUFDQSxVQUFNQyw0QkFBNEIscUJBQWxDOztBQUVBLGVBQVNDLGFBQVQsQ0FBdUJDLGFBQXZCLEVBQXNDO0FBQ3BDLGVBQU8sVUFBQ3JuQixLQUFELEVBQVc7QUFDaEIsY0FBTW5CLGdCQUFnQmhFLEVBQUVtRixNQUFNbkIsYUFBUixDQUF0QjtBQUNBLGNBQUksQ0FBQ0EsYUFBTCxFQUNFO0FBQ0YsY0FBTXlvQixpQkFBaUJ6b0IsY0FBY2lHLElBQWQsQ0FBbUJ1aUIsYUFBbkIsQ0FBdkI7QUFDQSxjQUFJLENBQUNDLGNBQUwsRUFDRTtBQUNGLGNBQU1DLHNCQUFzQkQsZUFBZXhRLEtBQWYsQ0FBcUIsR0FBckIsQ0FBNUI7QUFDQXBhLGNBQUk4a0IsMEJBQUosQ0FBK0IrRixvQkFBb0IsQ0FBcEIsQ0FBL0IsRUFBdURBLG9CQUFvQixDQUFwQixDQUF2RDtBQUNELFNBVEQ7QUFVRDs7QUFFRDFzQixRQUFFa0YsU0FBU3lJLElBQVgsRUFBaUJySyxFQUFqQixDQUFvQixPQUFwQixhQUFzQytvQiwwQkFBdEMsUUFBcUVFLGNBQWNGLDBCQUFkLENBQXJFO0FBQ0Fyc0IsdUJBQWVzc0IseUJBQWYsUUFBNkNocEIsRUFBN0MsQ0FBZ0QsUUFBaEQsRUFBMERpcEIsY0FBY0QseUJBQWQsQ0FBMUQ7QUFDRDs7QUFFRDs7Ozs7O3FDQUd3QjtBQUN0QixVQUFNRSxnQkFBZ0IsWUFBdEI7QUFDQSxVQUFNRyxpQkFBaUIsa0JBQXZCO0FBQ0EsVUFBTUMsa0JBQWtCLG1CQUF4Qjs7QUFFQTVzQixRQUFFa0YsU0FBU3lJLElBQVgsRUFBaUJySyxFQUFqQixDQUFvQixPQUFwQixhQUFzQ2twQixhQUF0QyxRQUF3RCxVQUFDcm5CLEtBQUQsRUFBVztBQUNqRUEsY0FBTW9ULGNBQU47QUFDQSxZQUFNdlUsZ0JBQWdCaEUsRUFBRW1GLE1BQU1uQixhQUFSLENBQXRCO0FBQ0EsWUFBTWlpQixJQUFJamlCLGNBQWNpRyxJQUFkLENBQW1CMGlCLGNBQW5CLEtBQXNDLEdBQWhEO0FBQ0EsWUFBTXpHLElBQUlsaUIsY0FBY2lHLElBQWQsQ0FBbUIyaUIsZUFBbkIsS0FBdUMsR0FBakQ7QUFDQS9xQixZQUFJNG1CLFNBQUosQ0FBY3hDLENBQWQsRUFBaUJDLENBQWpCLEVBQW9CL2dCLE1BQU1uQixhQUFOLENBQW9CbEIsSUFBeEM7QUFDRCxPQU5EO0FBT0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OENBVTZDO0FBQUEsaUNBQWpCK3BCLFFBQWlCO0FBQUEsVUFBakJBLFFBQWlCLGtDQUFOLEVBQU07O0FBQzNDLGFBQ0U7QUFBQTtBQUFBLFVBQVMsY0FBVyxlQUFwQjtBQUNHQSxpQkFBU2poQixHQUFULENBQWE7QUFBQSxpQkFDWjtBQUFBO0FBQUEsY0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxTQUFmLEVBQXlCLFdBQVN3SyxLQUFLalAsVUFBdkMsRUFBbUQsa0JBQWdCaVAsS0FBS2MsU0FBeEUsRUFBbUYsYUFBVSxFQUE3RjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxXQUFVLFNBQWIsRUFBdUIsVUFBUyxJQUFoQyxFQUFxQyxvQkFBa0JkLEtBQUtqUCxVQUE1RDtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHlCQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLFdBQVUsV0FBaEI7QUFBNkJpUCx5QkFBS2E7QUFBbEMsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQU0sV0FBVSwrQkFBaEI7QUFBaURiLHlCQUFLYTtBQUF0RDtBQUZGO0FBREYsZUFERjtBQVFFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUsseUJBQXVCYixLQUFLUyxTQUE1QixVQUFMO0FBQ0U7QUFBQTtBQUFBLHNCQUFHLG9CQUFrQlQsS0FBS2pQLFVBQTFCLEVBQXdDLE9BQU9pUCxLQUFLN0ksS0FBcEQsRUFBMkQsNkJBQTBCLCtCQUFyRjtBQUNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLFVBQWY7QUFDRSxtREFBSyxXQUFVLFVBQWYsRUFBMEIsS0FBSSxFQUE5QixFQUFpQyx3QkFBc0I2SSxLQUFLalAsVUFBNUQ7QUFERixxQkFERjtBQUtJaVAseUJBQUtNLGNBQUwsS0FBd0IsSUFBeEIsSUFBZ0NOLEtBQUtPLGdCQUFMLEtBQTBCLElBQTNELElBQ0M7QUFBQTtBQUFBLHdCQUFLLFdBQVUsMEJBQWY7QUFBQTtBQUFBLHFCQU5KO0FBU0lQLHlCQUFLTSxjQUFMLEtBQXdCLElBQXhCLElBQWdDTixLQUFLTyxnQkFBTCxLQUEwQixLQUEzRCxJQUNDO0FBQUE7QUFBQSx3QkFBSyxXQUFVLDBCQUFmO0FBQUE7QUFBQSxxQkFWSjtBQWFJUCx5QkFBS1EsYUFBTCxLQUF1QixJQUF4QixJQUNDO0FBQUE7QUFBQSx3QkFBSyxXQUFVLDBCQUFmO0FBQUE7QUFBQSxxQkFkSjtBQWlCRTtBQUFBO0FBQUEsd0JBQUssV0FBVSxLQUFmO0FBQXNCUiwyQkFBSzdJO0FBQTNCO0FBakJGO0FBREYsaUJBREY7QUF1QkU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsU0FBZjtBQUNJNkksdUJBQUtXLE9BQUwsS0FBaUIsRUFBbEIsSUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsd0JBQU0sV0FBVSxjQUFoQjtBQUFBO0FBQUEscUJBREY7QUFFRTtBQUFBO0FBQUEsd0JBQU0sV0FBVSxLQUFoQixFQUFzQixPQUFPWCxLQUFLVyxPQUFsQztBQUE0Q1gsMkJBQUtXO0FBQWpEO0FBRkY7QUFGSjtBQXZCRixlQVJGO0FBeUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLDJCQUF5QlgsS0FBS2MsU0FBcEMsRUFBaUQsZUFBWSxNQUE3RDtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxTQUFoQjtBQUEyQmQseUJBQUtjO0FBQWhDO0FBRkYsaUJBREY7QUFNRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxNQUFkO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLFdBQVUsZ0JBQWhCLEVBQWlDLGVBQVksTUFBN0M7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFBQTtBQUFBLHNCQUFNLFdBQVUsU0FBaEI7QUFBQTtBQUFBLG1CQUZGO0FBRXNDO0FBQUE7QUFBQTtBQUFPZCx5QkFBS2E7QUFBWjtBQUZ0QyxpQkFORjtBQVdFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLE1BQWQ7QUFDRTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxxQkFBaEIsRUFBc0MsZUFBWSxNQUFsRDtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxTQUFoQjtBQUFBO0FBQUEsbUJBRkY7QUFFNENiLHVCQUFLVTtBQUZqRCxpQkFYRjtBQWdCRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxNQUFkO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLFdBQVUsb0JBQWhCLEVBQXFDLGVBQVksTUFBakQ7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFBQTtBQUFBLHNCQUFNLFdBQVUsU0FBaEI7QUFBQTtBQUFBLG1CQUZGO0FBRTJDVix1QkFBS0s7QUFGaEQ7QUFoQkY7QUF6Q0Y7QUFERixXQURZO0FBQUEsU0FBYjtBQURILE9BREY7QUF1RUQ7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7O3dDQVc2RTtBQUFBLGdDQUF2RHFXLE9BQXVEO0FBQUEsVUFBdkRBLE9BQXVELGlDQUE3QyxTQUE2QztBQUFBLHFDQUFsQ0MsWUFBa0M7QUFBQSxVQUFsQ0EsWUFBa0Msc0NBQW5CLEVBQW1CO0FBQUEsK0JBQWZDLE1BQWU7QUFBQSxVQUFmQSxNQUFlLGdDQUFOLEVBQU07O0FBQzNFLGFBQ0U7QUFBQTtBQUFBLFVBQU8sV0FBVSxhQUFqQjtBQUNFO0FBQUE7QUFBQSxZQUFTLFdBQVdELFlBQXBCO0FBQW1DRDtBQUFuQyxTQURGO0FBR0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLE9BQU0sS0FBVjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSSxPQUFNLEtBQVY7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSw2QkFBZCxFQUE0QyxPQUFNLEtBQWxEO0FBQUE7QUFBQTtBQUhGO0FBREYsU0FIRjtBQVdFO0FBQUE7QUFBQTtBQUNHRSxpQkFBT3BoQixHQUFQLENBQVc7QUFBQSxtQkFDVjtBQUFBO0FBQUEsZ0JBQUksS0FBUXFoQixNQUFNQyxLQUFOLENBQVlsSixJQUFwQixTQUE0QmlKLE1BQU1FLE9BQU4sQ0FBY25KLElBQTFDLFNBQWtEaUosTUFBTUEsS0FBNUQ7QUFDRTtBQUFBO0FBQUE7QUFBS0Esc0JBQU1DLEtBQU4sQ0FBWUU7QUFBakIsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFLSCxzQkFBTUUsT0FBTixDQUFjQztBQUFuQixlQUZGO0FBR0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsNkJBQWQ7QUFBNkNILHNCQUFNSTtBQUFuRDtBQUhGLGFBRFU7QUFBQSxXQUFYO0FBREg7QUFYRixPQURGO0FBc0JEOztBQUVEOzs7Ozs7Ozs7Ozs7MENBUytDO0FBQUEsZ0NBQXZCN1gsT0FBdUI7QUFBQSxVQUF2QkEsT0FBdUIsaUNBQWIsU0FBYTs7QUFDN0MsYUFBTztBQUFBO0FBQUEsVUFBTyxXQUFVLGlCQUFqQjtBQUFvQ0E7QUFBcEMsT0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3dDQU9rQztBQUFBLFVBQVo4WCxRQUFZLFNBQVpBLFFBQVk7O0FBQ2hDLGFBQU87QUFBQTtBQUFBO0FBQVFBO0FBQVIsT0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7OzsyQ0FXOEI7QUFDNUIsVUFBTTVFLE9BQU8xb0IsRUFBRSx1QkFBRixDQUFiO0FBQ0EsVUFBTXdWLFVBQVVrVCxLQUFLbm1CLElBQUwsQ0FBVSx5QkFBVixDQUFoQjtBQUNBLFVBQU1nckIsc0JBQXNCL1gsUUFBUTlTLElBQVIsRUFBNUI7O0FBRUEsVUFBSSxDQUFDZ21CLElBQUQsSUFBUyxDQUFDbFQsT0FBZCxFQUNFOztBQUVGckksZUFBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELENBQUssY0FBTCxJQUFvQixTQUFRLGNBQTVCLEdBQWhCLEVBQStEb0ksUUFBUSxDQUFSLENBQS9EOztBQUVBLFVBQU1nWSxhQUFhO0FBQ2pCQyxpQkFBUyxDQUFDLFdBQUQsRUFBYyxjQUFkO0FBRFEsT0FBbkI7O0FBSUEsVUFBSS9FLEtBQUt6ZSxJQUFMLENBQVUsTUFBVixDQUFKLEVBQ0V1akIsV0FBV0UsSUFBWCxHQUFrQnhuQixTQUFTd2lCLEtBQUt6ZSxJQUFMLENBQVUsTUFBVixDQUFULEVBQTRCLEVBQTVCLENBQWxCOztBQUVGLFVBQUl5ZSxLQUFLemUsSUFBTCxDQUFVLE9BQVYsQ0FBSixFQUNFdWpCLFdBQVdHLEtBQVgsR0FBbUJ6bkIsU0FBU3dpQixLQUFLemUsSUFBTCxDQUFVLE9BQVYsQ0FBVCxFQUE2QixFQUE3QixDQUFuQjs7QUFFRnBJLFVBQUkrckIsY0FBSixDQUFtQkMsWUFBbkIsQ0FBZ0NuRixLQUFLemUsSUFBTCxDQUFVLFlBQVYsQ0FBaEMsRUFBeUR1akIsVUFBekQsRUFBcUVsaEIsSUFBckUsQ0FDRSxVQUFDMGdCLE1BQUQsRUFBWTtBQUNWN2YsaUJBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxDQUFLLFlBQUw7QUFDZCxtQkFBU3NiLEtBQUt6ZSxJQUFMLENBQVUsU0FBVixDQURLO0FBRWQsd0JBQWN5ZSxLQUFLemUsSUFBTCxDQUFVLGNBQVYsQ0FGQTtBQUdkLGtCQUFRK2lCO0FBSE0sVUFBaEIsRUFJSXRFLEtBQUssQ0FBTCxDQUpKO0FBS0QsT0FQSCxFQVFFLFlBQU07QUFDSjtBQUNBbFQsZ0JBQVE5UyxJQUFSLENBQWE2cUIsbUJBQWI7QUFDRCxPQVhIO0FBYUQ7Ozs7S0FDRDs7O0FBbm5ISTFyQixHLENBS0dzUCxVLEdBQW1CLEc7QUFMdEJ0UCxHLENBTUc0UCxnQixHQUFtQixHO0FBTnRCNVAsRyxDQVFHb1osRyxHQUFPNlMsVUFBVUMsU0FBVixDQUFvQnZtQixPQUFwQixDQUE0QixRQUE1QixJQUF3QyxDQUF4QyxJQUNBc21CLFVBQVVDLFNBQVYsQ0FBb0J2bUIsT0FBcEIsQ0FBNEIsTUFBNUIsSUFBc0MsQ0FEdEMsSUFFQXNtQixVQUFVQyxTQUFWLENBQW9Cdm1CLE9BQXBCLENBQTRCLE1BQTVCLElBQXNDLEM7QUFWaEQzRixHLENBV0d1YyxRLEdBQVcsRTtBQVhkdmMsRyxDQVlHbXNCLFEsR0FBVyxFOztJQTBtSGRDLFE7Ozs7Ozs7QUFNVTs7QUFMZDtBQUNBO0FBQ0E7QUFDQTswQkFJYUMsTSxFQUFRQyxNLEVBQVFDLE8sRUFBU0MsTyxFQUFTO0FBQzdDSixlQUFTSyxDQUFULENBQVdDLGNBQVgsR0FBNEJOLFNBQVNLLENBQVQsQ0FBV0UsV0FBWCxHQUF5QlAsU0FBU0ssQ0FBVCxDQUFXRyxhQUFoRTtBQUNBUixlQUFTSyxDQUFULENBQVdJLFFBQVgsR0FBc0I3cEIsS0FBSzZNLEtBQUwsQ0FBVyxDQUFDMmMsUUFBUU0sT0FBUixLQUFvQlAsUUFBUU8sT0FBUixFQUFyQixJQUEwQyxRQUFyRCxDQUF0QjtBQUNBLFVBQU1DLFVBQVVSLFFBQVFPLE9BQVIsS0FBb0IsSUFBcEM7QUFDQSxVQUFNNWIsT0FBT21iLFNBQVMsQ0FBVCxHQUFhcnBCLEtBQUs2TSxLQUFMLENBQVcsQ0FBQ3djLFNBQVNVLE9BQVYsSUFBcUIsS0FBaEMsQ0FBYixHQUFzRCxDQUFuRTtBQUNBLFVBQU1DLE9BQU9WLFNBQVMsQ0FBVCxHQUFhdHBCLEtBQUs2TSxLQUFMLENBQVcsQ0FBQ3ljLFNBQVNTLE9BQVYsSUFBcUIsS0FBaEMsQ0FBYixHQUFzRFgsU0FBU0ssQ0FBVCxDQUFXSSxRQUE5RTs7QUFHQSxVQUFNSSxhQUFhOXVCLEVBQUUsU0FBRixFQUFheUMsSUFBYixDQUFrQixFQUFFUixJQUFJLFFBQU4sRUFBbEIsRUFBb0NrRSxHQUFwQyxDQUF3QztBQUN6RCtDLGVBQU8ra0IsU0FBU0ssQ0FBVCxDQUFXQyxjQUR1QztBQUV6RHhQLGtCQUFVLFVBRitDO0FBR3pEL1ksYUFBTWlvQixTQUFTSyxDQUFULENBQVdTLFlBQVgsR0FBMEIsRUFIeUI7QUFJekRoYyxjQUFNLENBSm1EO0FBS3pEaWMsZ0JBQVE7QUFMaUQsT0FBeEMsQ0FBbkI7QUFPQWh2QixRQUFFLFdBQUYsRUFBZWtELE1BQWYsQ0FBc0I0ckIsVUFBdEI7QUFDQUEsaUJBQVc1ckIsTUFBWCxDQUFrQixRQUFsQixFQWhCNkMsQ0FnQmpCOzs7QUFHNUIvQyxVQUFJNFMsSUFBSixFQUFVOGIsSUFBVjs7QUFFQTd1QixRQUFFLFNBQUYsRUFBYWl2QixNQUFiLENBQW9CO0FBQ2xCQyxlQUFPLElBRFc7QUFFbEIzbEIsYUFBSzBrQixTQUFTSyxDQUFULENBQVdJLFFBRkU7QUFHbEJTLGdCQUFRLENBQUNwYyxJQUFELEVBQU84YixJQUFQLENBSFU7QUFJbEJPLGVBQU8sZUFBQ2pxQixLQUFELEVBQVF1ZixFQUFSLEVBQWU7QUFDcEIsY0FBTTJLLEtBQUtqQixRQUFRTyxPQUFSLEVBQVg7QUFDQSxjQUFNVyxLQUFLLElBQUlwdUIsSUFBSixDQUFTbXVCLEVBQVQsQ0FBWDtBQUNBLGNBQU1FLEtBQUssSUFBSXJ1QixJQUFKLENBQVNtdUIsRUFBVCxDQUFYOztBQUVBQyxhQUFHRSxPQUFILENBQVdGLEdBQUdHLE9BQUgsS0FBZS9LLEdBQUd5SyxNQUFILENBQVUsQ0FBVixDQUExQjtBQUNBSSxhQUFHQyxPQUFILENBQVdELEdBQUdFLE9BQUgsS0FBZS9LLEdBQUd5SyxNQUFILENBQVUsQ0FBVixDQUExQjs7QUFFQW52QixZQUFFLFFBQUYsRUFBWW1PLElBQVosQ0FBaUJuTyxFQUFFMHZCLFVBQUYsQ0FBYUMsVUFBYixDQUF3QixLQUF4QixFQUErQkwsRUFBL0IsQ0FBakIsRUFSb0IsQ0FRaUM7QUFDckR0dkIsWUFBRSxRQUFGLEVBQVltTyxJQUFaLENBQWlCbk8sRUFBRTB2QixVQUFGLENBQWFDLFVBQWIsQ0FBd0IsS0FBeEIsRUFBK0JKLEVBQS9CLENBQWpCLEVBVG9CLENBU2lDO0FBQ3JEdnZCLFlBQUUsUUFBRixFQUFZbU8sSUFBWixDQUFpQm5PLEVBQUUwdkIsVUFBRixDQUFhQyxVQUFiLENBQXdCLFFBQXhCLEVBQWtDTCxFQUFsQyxDQUFqQixFQVZvQixDQVVvQztBQUN4RHR2QixZQUFFLFFBQUYsRUFBWW1PLElBQVosQ0FBaUJuTyxFQUFFMHZCLFVBQUYsQ0FBYUMsVUFBYixDQUF3QixRQUF4QixFQUFrQ0osRUFBbEMsQ0FBakIsRUFYb0IsQ0FXb0M7QUFDeER2dkIsWUFBRSxZQUFGLEVBQWdCNE4sR0FBaEIsQ0FBb0I1TixFQUFFMHZCLFVBQUYsQ0FBYUMsVUFBYixDQUF3QixVQUF4QixFQUFvQ0wsRUFBcEMsQ0FBcEIsRUFab0IsQ0FZeUM7QUFDN0R0dkIsWUFBRSxZQUFGLEVBQWdCNE4sR0FBaEIsQ0FBb0I1TixFQUFFMHZCLFVBQUYsQ0FBYUMsVUFBYixDQUF3QixVQUF4QixFQUFvQ0osRUFBcEMsQ0FBcEIsRUFib0IsQ0FheUM7OztBQUc3RGx1Qix1QkFBYTRzQixTQUFTMkIsS0FBdEI7QUFDQXZ1Qix1QkFBYTRzQixTQUFTNEIsS0FBdEI7O0FBRUEsY0FBTUMsT0FBTyxFQUFFL2MsTUFBTy9TLEVBQUUsZUFBRixFQUFtQitGLE1BQW5CLEdBQTRCZ04sSUFBNUIsR0FBbUMvUyxFQUFFLE9BQUYsRUFBV2tKLEtBQVgsRUFBcEMsR0FBMEQsRUFBbEUsRUFBYjtBQUNBLGNBQU02bUIsT0FBTyxFQUFFaGQsTUFBTy9TLEVBQUUsZUFBRixFQUFtQitGLE1BQW5CLEdBQTRCZ047QUFDbEQ7QUFEYSxXQUFiLENBRUEvUyxFQUFFLE9BQUYsRUFBVytGLE1BQVgsQ0FBa0IrcEIsSUFBbEIsRUFBd0IzdEIsSUFBeEIsQ0FBNkIsQ0FBN0IsRUFBZ0MsWUFBTTtBQUFFOHJCLHFCQUFTMkIsS0FBVCxHQUFpQnR1QixXQUFXO0FBQUEscUJBQU10QixFQUFFLE9BQUYsRUFBV2tFLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBTjtBQUFBLGFBQVgsRUFBMEMsSUFBMUMsQ0FBakI7QUFBa0UsV0FBMUc7QUFDQWxFLFlBQUUsT0FBRixFQUFXK0YsTUFBWCxDQUFrQmdxQixJQUFsQixFQUF3QjV0QixJQUF4QixDQUE2QixDQUE3QixFQUFnQyxZQUFNO0FBQUU4ckIscUJBQVM0QixLQUFULEdBQWlCdnVCLFdBQVc7QUFBQSxxQkFBTXRCLEVBQUUsT0FBRixFQUFXa0UsSUFBWCxDQUFnQixNQUFoQixDQUFOO0FBQUEsYUFBWCxFQUEwQyxJQUExQyxDQUFqQjtBQUFrRSxXQUExRztBQUNBOztBQUVBK3BCLG1CQUFTK0IsTUFBVCxDQUFnQnRMLEdBQUd5SyxNQUFILENBQVUsQ0FBVixDQUFoQixFQUE4QnpLLEdBQUd5SyxNQUFILENBQVUsQ0FBVixDQUE5QjtBQUNELFNBL0JpQjtBQWdDbEJjLGNBQU0sY0FBQzlxQixLQUFELEVBQVF1ZixFQUFSLEVBQWU7QUFDbkJ1SixtQkFBU2lDLE1BQVQsQ0FBZ0J4TCxHQUFHeUssTUFBSCxDQUFVLENBQVYsQ0FBaEIsRUFBOEJ6SyxHQUFHeUssTUFBSCxDQUFVLENBQVYsQ0FBOUI7QUFDQWxCLG1CQUFTa0MsV0FBVCxHQUF1QixJQUF2QjtBQUNBLGNBQU1sdkIsTUFBTWIsU0FBUzBDLElBQVQsQ0FBY2xCLE9BQWQsQ0FBc0IsWUFBdEIsRUFBb0MsRUFBcEMsQ0FBWjtBQUNBLGNBQU13dUIsZ0JBQWNod0IsU0FBU0MsSUFBdkIsR0FBOEI0dEIsU0FBU0ssQ0FBVCxDQUFXK0IsQ0FBekMsR0FBNkNwQyxTQUFTanRCLElBQVQsRUFBbkQ7O0FBRUEsY0FBSUMsUUFBUW12QixNQUFaLEVBQW9CO0FBQ2xCandCLGdCQUFJYyxHQUFKO0FBQ0FkLGdCQUFJaXdCLE1BQUo7O0FBRUE7QUFDQXB3QixjQUFFLGFBQUYsRUFBaUJ1WCxNQUFqQjtBQUNBdlgsY0FBRSxNQUFGLEVBQVVrRCxNQUFWLENBQWlCbEQsRUFBRSx3QkFBRixDQUFqQjtBQUNBQSxjQUFFLGFBQUYsRUFBaUJtQyxJQUFqQixDQUFzQixNQUF0QixFQUE4QixZQUFNO0FBQ2xDL0IsdUJBQVMwQyxJQUFULEdBQWdCc3RCLE1BQWhCO0FBQ0QsYUFGRDtBQUdEO0FBQ0Y7QUFqRGlCLE9BQXBCOztBQW9EQSxVQUFJcmQsT0FBTyxDQUFQLElBQWM4YixPQUFPLENBQXpCLEVBQ0VaLFNBQVMrQixNQUFULENBQWdCamQsSUFBaEIsRUFBc0I4YixJQUF0QjtBQUNIOzs7MkJBRWE5YixJLEVBQU04YixJLEVBQU07QUFDeEIsVUFBTXBXLElBQUk1VCxLQUFLdUUsS0FBTCxDQUFXNmtCLFNBQVNLLENBQVQsQ0FBV0csYUFBWCxHQUEyQixDQUF0QyxDQUFWO0FBQ0EsVUFBTTZCLFFBQVN6ckIsS0FBS3VFLEtBQUwsQ0FBWTJKLE9BQU9rYixTQUFTSyxDQUFULENBQVdJLFFBQW5CLEdBQStCVCxTQUFTSyxDQUFULENBQVdDLGNBQXJELElBQXVFLENBQXRGO0FBQ0EsVUFBTWdDLFFBQVMxckIsS0FBS3VFLEtBQUwsQ0FBWXlsQixPQUFPWixTQUFTSyxDQUFULENBQVdJLFFBQW5CLEdBQStCVCxTQUFTSyxDQUFULENBQVdDLGNBQXJELElBQXVFLENBQXhFLEdBQTZFOVYsQ0FBM0Y7O0FBRUEsVUFBTStYLHFCQUFtQkQsS0FBbkIsV0FBOEJ0QyxTQUFTSyxDQUFULENBQVdTLFlBQXpDLFdBQTJEdUIsS0FBM0QsUUFBTjtBQUNBbndCLFVBQUlxd0IsSUFBSjtBQUNBeHdCLFFBQUUsZ0JBQUYsRUFBb0JtRyxHQUFwQixDQUF3QixNQUF4QixFQUFnQ3FxQixJQUFoQzs7QUFFQSxVQUFNQyxNQUFNLDJDQUFaO0FBQ0EsVUFBTWh1QixPQUFPLEVBQUUsY0FBY2d1QixHQUFoQixFQUFxQixlQUFlLFNBQXBDLEVBQStDLGtCQUFrQixRQUFqRSxFQUFiO0FBQ0F6d0IsUUFBRUEsRUFBRSxXQUFGLEVBQWVnRCxHQUFmLENBQW1CLENBQW5CLENBQUYsRUFBeUJQLElBQXpCLENBQThCQSxJQUE5QixFQUFvQ2MsV0FBcEMsQ0FBZ0Qsa0JBQWhELEVBQW9FSCxRQUFwRSxDQUE2RSxNQUE3RTtBQUNBcEQsUUFBRUEsRUFBRSxXQUFGLEVBQWVnRCxHQUFmLENBQW1CLENBQW5CLENBQUYsRUFBeUJQLElBQXpCLENBQThCQSxJQUE5QixFQUFvQ2MsV0FBcEMsQ0FBZ0Qsa0JBQWhELEVBQW9FSCxRQUFwRSxDQUE2RSxNQUE3RTs7QUFFQTZxQixlQUFTaUMsTUFBVCxDQUFnQm5kLElBQWhCLEVBQXNCOGIsSUFBdEI7QUFDRDs7OzJCQUVhOWIsSSxFQUFNOGIsSSxFQUFNO0FBQ3hCLFVBQU02QixhQUFjN0IsT0FBTzliLElBQVAsR0FBYyxDQUFsQzs7QUFFQTVTLFVBQUksT0FBSixFQUFhNFMsSUFBYixFQUFtQixPQUFuQixFQUE0QjhiLElBQTVCOztBQUVBLFVBQUk2QixVQUFKLEVBQWdCO0FBQ2Qxd0IsVUFBRSxLQUFGLEVBQVNrRSxJQUFUO0FBQ0FsRSxVQUFFLDJCQUFGLEVBQStCbUcsR0FBL0IsQ0FBbUMsYUFBbkMsRUFBa0QsU0FBbEQ7QUFDQW5HLFVBQUUsMkJBQUYsRUFBK0JtRyxHQUEvQixDQUFtQyxtQkFBbkMsRUFBd0QsQ0FBeEQ7QUFDRCxPQUpELE1BSU87QUFDTG5HLFVBQUUsMkJBQUYsRUFBK0JtRyxHQUEvQixDQUFtQyxhQUFuQyxFQUFrRCxTQUFsRDtBQUNBbkcsVUFBRSwyQkFBRixFQUErQm1HLEdBQS9CLENBQW1DLG1CQUFuQyxFQUF3RCxDQUF4RDtBQUNEO0FBQ0Y7OzsyQkFFYTtBQUNaLFVBQUksQ0FBQzhuQixTQUFTa0MsV0FBZCxFQUNFLE9BQU8sRUFBUDtBQUNGLFVBQU1RLFFBQVEzd0IsRUFBRSxRQUFGLEVBQVkwQyxJQUFaLEdBQW1CZ04sSUFBbkIsRUFBZDtBQUNBLFVBQVFraEIsTUFBTTV3QixFQUFFLFFBQUYsRUFBWTBDLElBQVosR0FBbUJnTixJQUFuQixFQUFkO0FBQ0EsVUFBTW1oQixNQUFPRixVQUFVQyxHQUFWLEdBQWdCLEVBQWhCLFNBQXlCQSxHQUF0QztBQUNBLHdCQUFnQkQsS0FBaEIsR0FBd0JFLEdBQXhCLENBTlksQ0FNa0I7QUFDL0I7Ozs7S0FDRDs7O0FBN0hJNUMsUSxDQUtHa0MsVyxHQUFjLEs7QUFMakJsQyxRLENBTUdLLEMsR0FBSSxFO0FBMEhaLFVBQVN3QyxjQUFULEdBQTBCO0FBQ3pCOzs7O0FBSUEsV0FBU0MscUJBQVQsQ0FBK0J2TSxNQUEvQixFQUF1QztBQUNyQyxXQUFPQSxPQUFPcE4sTUFBUCxDQUFjLENBQWQsRUFBaUJDLFdBQWpCLEtBQWlDbU4sT0FBT2xILEtBQVAsQ0FBYSxDQUFiLENBQXhDO0FBQ0Q7O0FBRUQ7Ozs7O0FBVHlCLE1BYW5CMFQsV0FibUI7QUFjdkI7Ozs7O0FBS0EsZ0NBQTRCO0FBQUEsVUFBZGhOLElBQWMsU0FBZEEsSUFBYztBQUFBLFVBQVJ2SyxJQUFRLFNBQVJBLElBQVE7O0FBQUE7O0FBQzFCLFdBQUt1SyxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLdkssSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBRUQ7Ozs7O0FBeEJ1QjtBQUFBO0FBQUEsMEJBMkJIO0FBQ2xCLGVBQU9zWCxzQkFBc0IsS0FBS3RYLElBQTNCLENBQVA7QUFDRDtBQTdCc0I7O0FBQUE7QUFBQTs7QUFnQ3pCOzs7OztBQWhDeUIsTUFtQ25Cd1gsUUFuQ21CO0FBb0N2Qjs7Ozs7O0FBTUEsNkJBQXVDO0FBQUEsVUFBekJoRSxLQUF5QixTQUF6QkEsS0FBeUI7QUFBQSxVQUFsQkUsT0FBa0IsU0FBbEJBLE9BQWtCO0FBQUEsVUFBVEQsS0FBUyxTQUFUQSxLQUFTOztBQUFBOztBQUNyQyxXQUFLRCxLQUFMLEdBQWEvbUIsU0FBUyttQixLQUFULEVBQWdCLEVBQWhCLENBQWI7QUFDQSxXQUFLRSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRDs7Ozs7QUFoRHVCO0FBQUE7QUFBQSwwQkFtREY7QUFDbkIsZUFBT3JyQixJQUFJcXZCLFNBQUosQ0FBYyxLQUFLakUsS0FBbkIsQ0FBUDtBQUNEO0FBckRzQjs7QUFBQTtBQUFBOztBQXdEekI7Ozs7OztBQUlBLFdBQVNrRSx5QkFBVCxDQUFtQ2xuQixJQUFuQyxFQUF5QztBQUN2QyxXQUFPLElBQUlnbkIsUUFBSixDQUFhO0FBQ2xCaEUsYUFBT2hqQixLQUFLbW5CLGVBRE07O0FBR2xCakUsZUFBUyxJQUFJNkQsV0FBSixDQUFnQjtBQUN2QmhOLGNBQU0vWixLQUFLb25CLFdBRFk7QUFFdkI1WCxjQUFNeFAsS0FBS2tqQjtBQUZZLE9BQWhCLENBSFM7O0FBUWxCRCxhQUFPLElBQUk4RCxXQUFKLENBQWdCO0FBQ3JCaE4sY0FBTS9aLEtBQUtxbkIsU0FEVTtBQUVyQjdYLGNBQU14UCxLQUFLaWpCO0FBRlUsT0FBaEI7QUFSVyxLQUFiLENBQVA7QUFhRDs7QUFFRDs7Ozs7Ozs7O0FBU0EsV0FBU3FFLGtDQUFULENBQTRDdG5CLElBQTVDLEVBRVE7QUFBQSxvRkFBSixFQUFJO0FBQUEsOEJBRE53akIsT0FDTTtBQUFBLFFBRE5BLE9BQ00saUNBREksQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixjQUF2QixDQUNKOztBQUNOLFFBQUksQ0FBQ3hqQixLQUFLdW5CLFVBQVYsRUFDRSxNQUFNLElBQUlDLFVBQUosQ0FBZSxxREFBZixDQUFOOztBQUVGOzs7O0FBSUEsYUFBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDL0IsYUFBT2xFLFFBQVFqbUIsT0FBUixDQUFnQm1xQixNQUFoQixNQUE0QixDQUFDLENBQXBDO0FBQ0Q7O0FBRUQsUUFBTUMsWUFBWSxFQUFsQjs7QUFFQSxTQUFLLElBQUkvbEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNUIsS0FBS3VuQixVQUFMLENBQWdCcHZCLE1BQXBDLEVBQTRDeUosR0FBNUMsRUFBaUQ7QUFDL0MsVUFBTWdtQixZQUFZNW5CLEtBQUt1bkIsVUFBTCxDQUFnQjNsQixDQUFoQixDQUFsQjs7QUFFQTtBQUNBLFVBQUk2bEIsZ0JBQWdCRyxVQUFVQyxPQUExQixLQUFzQ0QsVUFBVTFFLE9BQVYsS0FBc0IsU0FBaEUsRUFBMkU7QUFDekUsWUFBTTRFLFNBQVlGLFVBQVVSLFdBQXRCLFNBQXFDUSxVQUFVUCxTQUFyRDs7QUFFQTtBQUNBLFlBQUlNLFVBQVVHLE1BQVYsQ0FBSixFQUNFSCxVQUFVRyxNQUFWLEVBQWtCOUUsS0FBbEIsSUFBMkI0RSxVQUFVVCxlQUFyQyxDQURGLEtBR0VRLFVBQVVHLE1BQVYsSUFBb0JaLDBCQUEwQlUsU0FBMUIsQ0FBcEI7QUFDSDtBQUNGOztBQUVELFdBQU96SixPQUFPQyxJQUFQLENBQVl1SixTQUFaLEVBQXVCaG1CLEdBQXZCLENBQTJCO0FBQUEsYUFBT2dtQixVQUFVNWhCLEdBQVYsQ0FBUDtBQUFBLEtBQTNCLENBQVA7QUFDRDs7QUFFRCxNQUFNZ2lCLGFBQWEsd0NBQW5COztBQUVBOzs7QUFHQW53QixNQUFJK3JCLGNBQUo7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFDRTs7Ozs7OztBQURGLG1DQVFzQnptQixVQVJ0QixFQVlVO0FBQUEseUZBQUosRUFBSTtBQUFBLGlDQUhOdW1CLElBR007QUFBQSxZQUhOQSxJQUdNLCtCQUhDLEVBR0Q7QUFBQSxrQ0FGTkMsS0FFTTtBQUFBLFlBRk5BLEtBRU0sZ0NBRkUsR0FFRjtBQUFBLG9DQURORixPQUNNO0FBQUEsWUFETkEsT0FDTSxrQ0FESSxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLGNBQXZCLENBQ0o7O0FBQ04sWUFBTTVxQixNQUFTbXZCLFVBQVQsMkJBQXlDN3FCLFVBQXpDLFNBQXVEdW1CLElBQTdEOztBQUVBLGVBQU8xdEIsRUFBRWdELEdBQUYsQ0FBTUgsR0FBTixFQUNKeUosSUFESSxDQUNDLFVBQUNyQyxJQUFELEVBQVU7QUFDZCxjQUFJO0FBQ0YsbUJBQU9zbkIsbUNBQW1DdG5CLElBQW5DLEVBQXlDLEVBQUV3akIsZ0JBQUYsRUFBekMsRUFDSndFLElBREksQ0FDQyxVQUFDQyxNQUFELEVBQVNDLE1BQVQ7QUFBQSxxQkFBcUJELE9BQU9qRixLQUFQLEdBQWVrRixPQUFPbEYsS0FBdEIsR0FBOEIsQ0FBOUIsR0FBa0MsQ0FBQyxDQUF4RDtBQUFBLGFBREQsRUFFSjNQLEtBRkksQ0FFRSxDQUZGLEVBRUtxUSxLQUZMLENBQVA7QUFHRCxXQUpELENBSUUsT0FBT3BZLEtBQVAsRUFBYztBQUNkLG1CQUFPdlYsRUFBRWdNLFFBQUYsR0FBYTJKLE1BQWIsQ0FBb0JKLEtBQXBCLENBQVA7QUFDRDtBQUNGLFNBVEksQ0FBUDtBQVVEO0FBekJIOztBQUFBO0FBQUE7QUEyQkQsQ0F2SkEsR0FBRDs7QUF5SkE7O0FBRUE7Ozs7QUFJQTFULElBQUl1d0IsMEJBQUosR0FBaUNDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDakRDLHFCQUFtQixnQkFEOEI7O0FBR2pEQyxnQkFBYztBQUNaM0osaUJBQWFob0IsU0FERDtBQUVaaW9CLHFCQUFpQjtBQUZMLEdBSG1DOztBQVFqRDJKLGlCQVJpRCw2QkFRL0I7QUFDaEIsV0FBTztBQUNMM0osdUJBQWlCLEtBQUs5YixLQUFMLENBQVc4YixlQUR2QjtBQUVMNEosZ0JBQVUsS0FBSzFsQixLQUFMLENBQVc2YixXQUFYLElBQTBCLEtBQUswSixpQkFGcEM7QUFHTEksc0JBQWdCLEtBQUszbEIsS0FBTCxDQUFXNmI7QUFIdEIsS0FBUDtBQUtELEdBZGdEO0FBZ0JqRCtKLDJCQWhCaUQscUNBZ0J2QkMsUUFoQnVCLEVBZ0JiO0FBQ2xDLFNBQUtDLFFBQUwsQ0FBYztBQUNaaEssdUJBQWlCK0osU0FBUy9KLGVBRGQ7QUFFWjRKLGdCQUFVRyxTQUFTaEssV0FBVCxJQUF3QixLQUFLMEo7QUFGM0IsS0FBZDtBQUlELEdBckJnRDtBQXVCakRRLGVBdkJpRCwyQkF1QmpDO0FBQ2QsU0FBS0QsUUFBTCxDQUFjO0FBQ1poSyx1QkFBaUIsS0FETDtBQUVaNEosZ0JBQVUsS0FBS0g7QUFGSCxLQUFkOztBQUtBLFNBQUtTLHdCQUFMO0FBQ0QsR0E5QmdEOzs7QUFnQ2pEOzs7O0FBSUFBLDBCQXBDaUQsc0NBb0N0QjtBQUN6QixRQUFNQyxXQUFXL3RCLFNBQVNndUIsY0FBVCxDQUF3QixpQkFBeEIsQ0FBakI7QUFDQUQsYUFBU0UsVUFBVCxDQUFvQkMsV0FBcEIsQ0FBZ0NILFFBQWhDO0FBQ0QsR0F2Q2dEO0FBeUNqREksb0JBekNpRCxnQ0F5QzVCO0FBQ25CLFdBQU8sS0FBS25HLEtBQUwsQ0FBV3lGLGNBQVgsS0FBOEIsS0FBS3pGLEtBQUwsQ0FBV3dGLFFBQWhEO0FBQ0QsR0EzQ2dEO0FBNkNqRFkseUJBN0NpRCxxQ0E2Q3ZCO0FBQ3hCLFFBQUksS0FBS3BHLEtBQUwsQ0FBV3lGLGNBQVgsSUFBNkIsS0FBS1Usa0JBQUwsRUFBakMsRUFBNEQ7QUFDMUQsNENBQW9DLEtBQUtuRyxLQUFMLENBQVd5RixjQUEvQztBQUNEOztBQUVELFdBQU8sRUFBUDtBQUNELEdBbkRnRDtBQXFEakR2bEIsUUFyRGlELG9CQXFEeEM7QUFDUCxXQUFPO0FBQUE7QUFBQTtBQUNMO0FBQUMsV0FBRCxDQUFLLFNBQUw7QUFBQTtBQUNFLGdCQUFNLEtBQUtKLEtBQUwsQ0FBV2xLLElBRG5CO0FBRUUsa0JBQU8sS0FGVDtBQUdFLGlCQUFNLEtBSFI7QUFJRSxpQkFBTyxLQUFLd3dCLHVCQUFMO0FBSlQ7QUFLRSxhQUFLcEcsS0FBTCxDQUFXd0Y7QUFMYixPQURLO0FBUUosU0FSSTtBQVVKLFdBQUt4RixLQUFMLENBQVdwRSxlQUFYLElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFDQyxrQkFBSyxRQUROO0FBRUMsdUJBQVUsdUNBRlg7QUFHQyxxQkFBUyxLQUFLaUs7QUFIZjtBQUFBO0FBQUEsU0FESDtBQUFBO0FBQUE7QUFYRyxLQUFQO0FBb0JEO0FBMUVnRCxDQUFsQixDQUFqQztBQTRFQTs7QUFFQWx4QixJQUFJMHhCLFNBQUosR0FBZ0JsQixNQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ2hDa0IsbUJBQWlCLEdBRGU7O0FBR2hDZixpQkFIZ0MsNkJBR2Q7QUFDaEIsV0FBTztBQUNMbFcsWUFBTSxDQUREO0FBRUx6WixZQUFNLEVBRkQ7QUFHTDJ3QixlQUFTLEtBSEo7QUFJTEMsV0FBSyxFQUpBO0FBS0wxbEIsZUFBUztBQUxKLEtBQVA7QUFPRCxHQVgrQjtBQWFoQzJsQixXQWJnQyx1QkFhcEI7QUFDVixRQUFNQyxPQUFPLElBQWI7QUFDQTtBQUNBNXpCLE1BQUVpc0IsT0FBRixDQUFhLEtBQUtqZixLQUFMLENBQVdsSyxJQUF4Qiw4QkFBdUQsVUFBQyt3QixHQUFELEVBQVM7QUFDOUQ7QUFDQUEsVUFBSS93QixJQUFKLEdBQVc4d0IsS0FBSzVtQixLQUFMLENBQVdsSyxJQUF0QjtBQUNBO0FBQ0Erd0IsVUFBSUosT0FBSixHQUFjLElBQWQ7QUFDQXR6QixVQUFJMHpCLEdBQUo7O0FBRUFELFdBQUtkLFFBQUwsQ0FBY2UsR0FBZDs7QUFFQTtBQUNBLFdBQUssSUFBSXBYLElBQUksQ0FBYixFQUFnQkEsSUFBSW9YLElBQUkza0IsT0FBSixDQUFZOU0sTUFBaEMsRUFBd0NxYSxHQUF4QyxFQUE2QztBQUMzQyxhQUFLLElBQUk1USxJQUFJLENBQWIsRUFBZ0JBLElBQUkrbkIsS0FBSzFHLEtBQUwsQ0FBV2xmLE9BQVgsQ0FBbUI1TCxNQUF2QyxFQUErQ3lKLEdBQS9DLEVBQW9EO0FBQUEsY0FDMUMrQixHQUQwQyxHQUNsQ2dtQixLQUFLMUcsS0FBTCxDQUFXbGYsT0FBWCxDQUFtQm5DLENBQW5CLENBRGtDLENBQzFDK0IsR0FEMEM7QUFFbEQ7QUFDQTs7QUFDQSxjQUFJaW1CLElBQUkza0IsT0FBSixDQUFZdU4sQ0FBWixLQUFrQjdPLEdBQXRCLEVBQTJCO0FBQ3pCZ21CLGlCQUFLRSxJQUFMLENBQVVsbUIsR0FBVixFQUFlc0IsT0FBZixHQUF5QixJQUF6QjtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0FyQkQ7QUFzQkQsR0F0QytCO0FBd0NoQzZrQixtQkF4Q2dDLCtCQXdDWjtBQUNsQjtBQUNBO0FBQ0E1ekIsUUFBSSxTQUFKO0FBQ0EsU0FBS3d6QixTQUFMO0FBQ0QsR0E3QytCO0FBK0NoQ0ssV0EvQ2dDLHFCQStDdEI5akIsQ0EvQ3NCLEVBK0NuQjtBQUNYQSxNQUFFb0ksZUFBRjtBQUNBcEksTUFBRXFJLGNBQUY7O0FBRUE7QUFDQTtBQUNBLFFBQU1nRSxPQUFRdmMsRUFBRWtRLEVBQUVuTSxNQUFKLEVBQVlyQixJQUFaLE9BQXVCLEVBQXZCLEdBQTRCLEtBQUt3cUIsS0FBTCxDQUFXM1EsSUFBWCxHQUFrQixDQUE5QyxHQUFrRHJXLFNBQVNsRyxFQUFFa1EsRUFBRW5NLE1BQUosRUFBWXJCLElBQVosRUFBVCxFQUE2QixFQUE3QixDQUFoRTtBQUNBLFNBQUtvd0IsUUFBTCxDQUFjLEVBQUV2VyxVQUFGLEVBQWQ7QUFDRCxHQXZEK0I7QUF5RGhDMFgsYUF6RGdDLHlCQXlEbEI7QUFDWjl6QixRQUFJLFdBQUo7QUFDQSxRQUFJMEMsTUFBTSxLQUFLcXFCLEtBQUwsQ0FBV2hWLE1BQXJCO0FBQ0EsU0FBSyxJQUFJck0sSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtxaEIsS0FBTCxDQUFXbGYsT0FBWCxDQUFtQjVMLE1BQXZDLEVBQStDeUosR0FBL0MsRUFBb0Q7QUFBQSxVQUMxQytCLEdBRDBDLEdBQ2xDLEtBQUtzZixLQUFMLENBQVdsZixPQUFYLENBQW1CbkMsQ0FBbkIsQ0FEa0MsQ0FDMUMrQixHQUQwQzs7QUFFbEQsVUFBSSxLQUFLa21CLElBQUwsQ0FBVWxtQixHQUFWLEVBQWVzQixPQUFuQixFQUE0QjtBQUMxQixZQUFNUyxrQkFBZ0IsS0FBS3VkLEtBQUwsQ0FBV2dILElBQTNCLFlBQXNDbnhCLG1CQUFtQjZLLEdBQW5CLENBQXRDLE1BQU47QUFDQXpOLFlBQUksU0FBSixFQUFleU4sR0FBZixFQUFvQixJQUFwQixFQUEwQitCLEdBQTFCO0FBQ0E5TSxlQUFPOE0sR0FBUDtBQUNEO0FBQ0Y7QUFDRHhQLFFBQUkwQyxHQUFKO0FBQ0F6QyxhQUFTMEMsSUFBVCxHQUFnQkQsR0FBaEI7QUFDRCxHQXRFK0I7QUF3RWhDdUssUUF4RWdDLG9CQXdFdkI7QUFBQTs7QUFDUGpOLFFBQUksYUFBSjtBQUNBO0FBQ0E7O0FBRUEsUUFBSWcwQixVQUFVLENBQUMsS0FBS2pILEtBQUwsQ0FBV3VHLE9BQTFCO0FBQ0EsUUFBSSxLQUFLdkcsS0FBTCxDQUFXcHFCLElBQVgsS0FBb0IsRUFBcEIsSUFBNEIsS0FBS2tLLEtBQUwsQ0FBV2xLLElBQVgsS0FBb0IsS0FBS29xQixLQUFMLENBQVdwcUIsSUFBL0QsRUFBcUU7QUFDbkVxeEIsZ0JBQVUsSUFBVjtBQUNBLFdBQUtSLFNBQUw7QUFDRDs7QUFFRDN6QixNQUFFLDBCQUFGLEVBQThCbU8sSUFBOUIsQ0FBbUNnbUIsVUFBVSxFQUFWLEdBQWUsS0FBS2pILEtBQUwsQ0FBV3dHLEdBQTdEOztBQUVBLFFBQU0xb0IsTUFBTSxDQUFDLEtBQUtraUIsS0FBTCxDQUFXM1EsSUFBWCxHQUFrQixDQUFuQixJQUF3QixLQUFLaVgsZUFBekM7QUFDQSxRQUFNanFCLE1BQU95QixNQUFNLEtBQUt3b0IsZUFBWixHQUErQixDQUEzQztBQUNBLFFBQU14bEIsVUFBVSxLQUFLa2YsS0FBTCxDQUFXbGYsT0FBWCxDQUFtQnBDLEdBQW5CLENBQXVCLFVBQUN3b0IsTUFBRCxFQUFTQyxDQUFUO0FBQUEsYUFDckM7QUFBQTtBQUFBLFVBQUssV0FBWUEsS0FBS3JwQixHQUFMLElBQVlxcEIsS0FBSzlxQixHQUFqQixJQUF3QixDQUFDNHFCLE9BQXpCLEdBQW1DLE9BQW5DLEdBQTZDLGNBQTlELEVBQStFLEtBQUtDLE9BQU94bUIsR0FBM0Y7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUNFLHFCQUFTLE1BQUs0YSxXQURoQjtBQUVFLGtCQUFLLFVBRlA7QUFHRSxrQkFBTTRMLE9BQU94bUIsR0FIZjtBQUlFLG1CQUFPd21CLE9BQU94bUIsR0FKaEI7QUFLRSxpQkFBS3dtQixPQUFPeG1CO0FBTGQ7QUFERixTQURGO0FBVUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0cvTCxjQUFJcXZCLFNBQUosQ0FBY2tELE9BQU9DLENBQXJCO0FBREgsU0FWRjtBQWFFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNHRCxpQkFBT2pkLEdBQVAsR0FBYWlkLE9BQU9qZCxHQUFwQixHQUEwQmlkLE9BQU94bUI7QUFEcEM7QUFiRixPQURxQztBQUFBLEtBQXZCLENBQWhCOztBQW1CQSxRQUFNMG1CLFNBQVMsRUFBZjtBQUNBLFFBQU1DLFNBQVUxdkIsS0FBSzhOLElBQUwsQ0FBVSxLQUFLdWEsS0FBTCxDQUFXbGYsT0FBWCxDQUFtQjVMLE1BQW5CLEdBQTRCLEtBQUtveEIsZUFBM0MsQ0FBaEI7QUFDQSxRQUFJZ0IsV0FBVyxFQUFmO0FBQ0EsUUFBSUwsT0FBSixFQUFhO0FBQ1hLLGlCQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBRSxjQUFjLFFBQWhCLEVBQTBCQyxRQUFRLE1BQWxDLEVBQTBDLGNBQWMsUUFBeEQsRUFBWjtBQUFBO0FBRUUscUNBQUssS0FBSSxFQUFULEVBQVksT0FBTyxFQUFFdnJCLE9BQU8sTUFBVCxFQUFuQixFQUFzQyxLQUFLaXJCLE9BQTNDLEVBQW9ELEtBQUkscUJBQXhEO0FBRkYsT0FERjtBQUtELEtBTkQsTUFNTztBQUNMLFVBQUk1WCxPQUFPLENBQVg7QUFDQSxXQUFLQSxPQUFPLENBQVosRUFBZUEsUUFBUWdZLE1BQXZCLEVBQStCaFksTUFBL0IsRUFBdUM7QUFDckMsWUFBSSxLQUFLMlEsS0FBTCxDQUFXM1EsSUFBWCxLQUFvQkEsSUFBeEIsRUFDRStYLE9BQU90aEIsSUFBUCxDQUFZO0FBQUE7QUFBQSxZQUFLLEtBQUssSUFBSXJRLE1BQUosQ0FBVzRaLElBQVgsQ0FBVixFQUE0QixXQUFVLFlBQXRDO0FBQW9EQTtBQUFwRCxTQUFaLEVBREYsS0FHRStYLE9BQU90aEIsSUFBUCxDQUFZO0FBQUE7QUFBQSxZQUFHLE1BQU0sSUFBSXJRLE1BQUosQ0FBVzRaLElBQVgsQ0FBVCxFQUEyQixLQUFLLElBQUk1WixNQUFKLENBQVc0WixJQUFYLENBQWhDLEVBQWtELFNBQVMsS0FBS3lYLFNBQWhFO0FBQTRFelg7QUFBNUUsU0FBWjtBQUNGK1gsZUFBT3RoQixJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0QsVUFBSSxLQUFLa2EsS0FBTCxDQUFXM1EsSUFBWCxHQUFrQmdZLE1BQXRCLEVBQThCO0FBQzVCLFlBQU01a0IsTUFDSjtBQUFBO0FBQUEsWUFBRyxNQUFNLElBQUloTixNQUFKLENBQVc0WixJQUFYLENBQVQsRUFBMkIsS0FBSyxLQUFLNVosTUFBTCxDQUFZNFosSUFBWixDQUFoQyxFQUFtRCxTQUFTLEtBQUt5WCxTQUFqRTtBQUNFLHdDQUFNLFdBQVUsd0JBQWhCO0FBREYsU0FERjtBQUlBTSxlQUFPdGhCLElBQVAsQ0FBWXJELEdBQVo7QUFDRDtBQUNGO0FBQ0QsV0FDRTtBQUFBO0FBQUEsUUFBSyxJQUFHLFdBQVI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHVCQUFmO0FBQ0czQjtBQURILFNBREY7QUFJR3dtQixnQkFKSDtBQUtFO0FBQUE7QUFBQSxZQUFLLElBQUcsYUFBUjtBQUNHRjtBQURILFNBTEY7QUFRRTtBQUFBO0FBQUE7QUFDRSx5Q0FBTyxXQUFXSCxVQUFVLG9CQUFWLEdBQWlDLGFBQW5ELEVBQWtFLE1BQUssUUFBdkUsRUFBZ0YsT0FBTSxvQkFBdEYsRUFBMkcsU0FBUyxLQUFLRixXQUF6SDtBQURGO0FBUkY7QUFERixLQURGO0FBZ0JEO0FBcEorQixDQUFsQixDQUFoQixDLENBcUpFOzs7QUFHRjs7Ozs7Ozs7QUFRQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7Ozs7Ozs7Ozs7Ozs7O0FBY0FqMEIsRUFBRXNHLE1BQUYsR0FBVyxVQUFTbVQsSUFBVCxFQUFlekMsS0FBZixFQUFzQmhKLE9BQXRCLEVBQStCO0FBQ3hDLE1BQUksT0FBT2dKLEtBQVAsSUFBZ0IsV0FBcEIsRUFBaUM7QUFBRTtBQUMvQmhKLGNBQVVBLFdBQVcsRUFBckI7QUFDQSxRQUFJZ0osVUFBVSxJQUFkLEVBQW9CO0FBQ2hCQSxjQUFRLEVBQVI7QUFDQWhKLGNBQVFoSCxPQUFSLEdBQWtCLENBQUMsQ0FBbkI7QUFDSDtBQUNELFFBQUlBLFVBQVUsRUFBZDtBQUNBLFFBQUlnSCxRQUFRaEgsT0FBUixLQUFvQixPQUFPZ0gsUUFBUWhILE9BQWYsSUFBMEIsUUFBMUIsSUFBc0NnSCxRQUFRaEgsT0FBUixDQUFnQjB0QixXQUExRSxDQUFKLEVBQTRGO0FBQ3hGLFVBQUlDLElBQUo7QUFDQSxVQUFJLE9BQU8zbUIsUUFBUWhILE9BQWYsSUFBMEIsUUFBOUIsRUFBd0M7QUFDcEMydEIsZUFBTyxJQUFJenpCLElBQUosRUFBUDtBQUNBeXpCLGFBQUtDLE9BQUwsQ0FBYUQsS0FBS2hHLE9BQUwsS0FBa0IzZ0IsUUFBUWhILE9BQVIsR0FBa0IsRUFBbEIsR0FBdUIsRUFBdkIsR0FBNEIsRUFBNUIsR0FBaUMsSUFBaEU7QUFDSCxPQUhELE1BR087QUFDSDJ0QixlQUFPM21CLFFBQVFoSCxPQUFmO0FBQ0g7QUFDREEsZ0JBQVUsZUFBZTJ0QixLQUFLRCxXQUFMLEVBQXpCLENBUndGLENBUTNDO0FBQ2hEOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFFBQUkzdEIsT0FBT2lILFFBQVFqSCxJQUFSLEdBQWUsWUFBYWlILFFBQVFqSCxJQUFwQyxHQUE0QyxFQUF2RDtBQUNBLFFBQUl1SSxTQUFTdEIsUUFBUXNCLE1BQVIsR0FBaUIsY0FBZXRCLFFBQVFzQixNQUF4QyxHQUFrRCxFQUEvRDtBQUNBLFFBQUl1bEIsU0FBUzdtQixRQUFRNm1CLE1BQVIsR0FBaUIsVUFBakIsR0FBOEIsRUFBM0M7O0FBRUEsUUFBSS9HLFVBQVVDLFNBQVYsQ0FBb0J2bUIsT0FBcEIsQ0FBNEIsU0FBNUIsSUFBdUMsQ0FBM0MsRUFBOEM7QUFBRTtBQUM5QzhILGVBQU8sRUFBUDtBQUNBdkksYUFBSyxFQUFMO0FBQ0Q7O0FBRUQ3QixhQUFTb0IsTUFBVCxHQUFrQixDQUFDbVQsSUFBRCxFQUFPLEdBQVAsRUFBWTFXLG1CQUFtQmlVLEtBQW5CLENBQVosRUFBdUNoUSxPQUF2QyxFQUFnREQsSUFBaEQsRUFBc0R1SSxNQUF0RCxFQUE4RHVsQixNQUE5RCxFQUFzRTVoQixJQUF0RSxDQUEyRSxFQUEzRSxDQUFsQjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBaENELE1BZ0NPO0FBQUU7QUFDTCxRQUFJNmhCLGNBQWMsSUFBbEI7QUFDQSxRQUFJNXZCLFNBQVNvQixNQUFULElBQW1CcEIsU0FBU29CLE1BQVQsSUFBbUIsRUFBMUMsRUFBOEM7QUFDMUMsVUFBSXl1QixVQUFVN3ZCLFNBQVNvQixNQUFULENBQWdCMlYsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBZDtBQUNBLFdBQUssSUFBSXBRLElBQUksQ0FBYixFQUFnQkEsSUFBSWtwQixRQUFRM3lCLE1BQTVCLEVBQW9DeUosR0FBcEMsRUFBeUM7QUFDckMsWUFBSXZGLFNBQVN0RyxFQUFFMFAsSUFBRixDQUFPcWxCLFFBQVFscEIsQ0FBUixDQUFQLENBQWI7QUFDQTtBQUNBLFlBQUl2RixPQUFPMHVCLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0J2YixLQUFLclgsTUFBTCxHQUFjLENBQWxDLEtBQXlDcVgsT0FBTyxHQUFwRCxFQUEwRDtBQUN0RHFiLHdCQUFjRyxtQkFBbUIzdUIsT0FBTzB1QixTQUFQLENBQWlCdmIsS0FBS3JYLE1BQUwsR0FBYyxDQUEvQixDQUFuQixDQUFkO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFDRCxXQUFPMHlCLFdBQVA7QUFDSDtBQUNGLENBaEREO0FBaURBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOTBCLEVBQUVVLEVBQUYsQ0FBS21mLE1BQUwsR0FBYyxTQUFTcVYsdUJBQVQsR0FBbUM7QUFDL0MsTUFBTUMsV0FBWSxLQUFLL3VCLE1BQUwsS0FDQUYsU0FBUyxLQUFLQyxHQUFMLENBQVMsYUFBVCxDQUFULEVBQWtDLEVBQWxDLENBREEsR0FFQUQsU0FBUyxLQUFLQyxHQUFMLENBQVMsZ0JBQVQsQ0FBVCxFQUFxQyxFQUFyQyxDQUZsQjs7QUFJQWhHLE1BQUksVUFBSixFQUFnQmcxQixRQUFoQjtBQUNBaDFCLE1BQUksU0FBSixFQUFlLEtBQUsrSSxLQUFMLEVBQWY7QUFDQS9JLE1BQ0UsVUFERixFQUNjSCxFQUFFQyxNQUFGLEVBQVVtRyxNQUFWLEVBRGQsRUFFRSxTQUZGLEVBRWFwRyxFQUFFQyxNQUFGLEVBQVVpSixLQUFWLEVBRmIsRUFHRSxhQUhGLEVBR2lCbEosRUFBRUMsTUFBRixFQUFVOFUsU0FBVixFQUhqQixFQUlFLGNBSkYsRUFJa0IvVSxFQUFFQyxNQUFGLEVBQVVtMUIsVUFBVixFQUpsQjs7QUFRQSxNQUFJcHZCLFlBQUo7QUFDQSxNQUFJK00sYUFBSjtBQUNBLE1BQUlsUixJQUFJb1osR0FBUixFQUFhO0FBQ1gsUUFBTW9hLE1BQU1wMUIsT0FBT3ExQixVQUFuQjtBQUNBLFFBQU1DLE1BQU10MUIsT0FBT2dHLFdBQW5COztBQUVBOUYsUUFBSSxLQUFKLEVBQVdvMUIsR0FBWDtBQUNBcDFCLFFBQUksS0FBSixFQUFXazFCLEdBQVg7O0FBRUFydkIsVUFBUSxDQUFDdXZCLE1BQVVKLFFBQVgsSUFBdUIsQ0FBeEIsR0FBK0JuMUIsRUFBRUMsTUFBRixFQUFVOFUsU0FBVixFQUF0QztBQUNBaEMsV0FBUSxDQUFDc2lCLE1BQU0sS0FBS25zQixLQUFMLEVBQVAsSUFBdUIsQ0FBeEIsR0FBK0JsSixFQUFFQyxNQUFGLEVBQVVtMUIsVUFBVixFQUF0QztBQUNELEdBVEQsTUFTTztBQUNMcHZCLFVBQU8sQ0FBQ2hHLEVBQUVDLE1BQUYsRUFBVW1HLE1BQVYsS0FBcUIrdUIsUUFBdEIsSUFBa0MsQ0FBekM7QUFDQXBpQixXQUFPLENBQUMvUyxFQUFFQyxNQUFGLEVBQVVpSixLQUFWLEtBQXFCLEtBQUtBLEtBQUwsRUFBdEIsSUFBc0MsQ0FBN0M7QUFDRDs7QUFFRDtBQUNBbEQsUUFBT25CLEtBQUswRSxHQUFMLENBQVMsRUFBVCxFQUFhdkQsR0FBYixDQUFQO0FBQ0ErTSxTQUFPbE8sS0FBSzBFLEdBQUwsQ0FBUyxFQUFULEVBQWF3SixJQUFiLENBQVA7O0FBRUEsT0FBSzVNLEdBQUwsQ0FBUztBQUNQNFksY0FBV2xkLElBQUlvWixHQUFKLEdBQVUsVUFBVixHQUF1QixPQUQzQjtBQUVQdWEsYUFBVSxPQUZIO0FBR1B4dkIsWUFITztBQUlQK007QUFKTyxHQUFUOztBQU9BLFNBQU8sSUFBUDtBQUNELENBM0NELEMsQ0EyQ0U7OztBQUdGL1MsRUFBRSxZQUFNO0FBQ047QUFDQTZCLE1BQUk0ekIsMEJBQUosQ0FBK0Isa0JBQS9COztBQUdBNXpCLE1BQUk2ekIsbUJBQUosR0FMTSxDQUtvQjtBQUMxQjd6QixNQUFJOHpCLGdCQUFKO0FBQ0E5ekIsTUFBSSt6QixtQkFBSjs7QUFFQTtBQUNBL3pCLE1BQUlnMEIsY0FBSjtBQUNBaDBCLE1BQUlpMEIsK0JBQUo7QUFDQWowQixNQUFJazBCLGdCQUFKO0FBQ0FsMEIsTUFBSW0wQixxQkFBSjtBQUNBbjBCLE1BQUlvMEIsZUFBSjtBQUNBcDBCLE1BQUlxMEIsaUJBQUo7QUFDQTs7QUFFQTtBQUNBLE1BQUksT0FBT0MsYUFBUCxLQUF5QixXQUE3QixFQUEwQztBQUN4QztBQUNBbjJCLE1BQUUsWUFBTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNOLDZCQUFpQm0yQixhQUFqQjtBQUFBLGNBQVd6MUIsRUFBWDs7QUFDRUE7QUFERjtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHUCxLQUhEO0FBSUQ7O0FBRURtQixNQUFJdTBCLE1BQUo7QUFDRCxDQTVCRDs7QUErQkE7QUFDQW4yQixPQUFPNEIsR0FBUCxHQUFhQSxHQUFiO0FBQ0E1QixPQUFPZ3VCLFFBQVAsR0FBa0JBLFFBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzE0SUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNBLFNBQVNvSSxpQkFBVCxDQUEyQkMsWUFBM0IsRUFBeUM5Z0IsT0FBekMsRUFBa0Q7QUFDaEQsTUFBSStnQixTQUFTRCxhQUFhM04sYUFBYixDQUEyQixRQUEzQixDQUFiOztBQUVBLE1BQUksQ0FBQzROLE1BQUwsRUFBYTtBQUNYQSxhQUFTcnhCLFNBQVNzeEIsYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0FELFdBQU9oTCxZQUFQLENBQW9CLE1BQXBCLEVBQTRCLE9BQTVCO0FBQ0ErSyxpQkFBYUcsV0FBYixDQUF5QkYsTUFBekI7QUFDRDs7QUFFRDtBQUNBO0FBQ0FBLFNBQU9HLFdBQVAsR0FBcUIsRUFBckI7QUFDQUgsU0FBT0csV0FBUCxHQUFxQmxoQixPQUFyQjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTbWhCLFlBQVQsQ0FBc0JMLFlBQXRCLEVBQW9DO0FBQ2xDLE1BQU1NLFNBQVMxeEIsU0FBU3N4QixhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUksU0FBT3pjLElBQVAsR0FBYyxRQUFkO0FBQ0F5YyxTQUFPRixXQUFQLEdBQXFCLE1BQXJCO0FBQ0FFLFNBQU9ycEIsS0FBUCxHQUFlLG1CQUFmO0FBQ0FxcEIsU0FBT3JMLFlBQVAsQ0FBb0IsdUJBQXBCLFFBQWlEK0ssYUFBYTNOLGFBQWIsQ0FBMkIsT0FBM0IsRUFBb0MxbUIsRUFBckY7O0FBRUEsU0FBTzIwQixNQUFQO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsU0FBU0MsaUJBQVQsQ0FBMkJQLFlBQTNCLEVBQXlDO0FBQ3ZDO0FBQ0EsTUFBSSxDQUFDQSxhQUFhM04sYUFBYixDQUEyQixPQUEzQixDQUFMLEVBQTBDOztBQUUxQzJOLGVBQWFHLFdBQWIsQ0FBeUJFLGFBQWFMLFlBQWIsQ0FBekI7O0FBRUE7QUFDQUEsZUFBYS9LLFlBQWIsQ0FBMEIsMEJBQTFCLEVBQXNELEVBQXREO0FBQ0Q7O0FBRUQ7OztBQUdBLFNBQVN1TCxnQkFBVCxHQUE0QjtBQUMxQixNQUFNQyxZQUFZLElBQUlDLG1CQUFKLENBQWdCLDhDQUFoQixDQUFsQjs7QUFFQUQsWUFBVXp6QixFQUFWLENBQWEsU0FBYixFQUF3QixVQUFDNkIsS0FBRCxFQUFXO0FBQ2pDLFFBQU1teEIsZUFBZW54QixNQUFNc0gsT0FBTixDQUFjd3FCLGFBQW5DOztBQUVBLFFBQU16aEIsVUFDSjhnQixhQUFhWSxZQUFiLENBQTBCLG9DQUExQixLQUNBLDJCQUZGOztBQUtBYixzQkFBa0JDLFlBQWxCLEVBQWdDOWdCLE9BQWhDO0FBQ0QsR0FURDs7QUFXQXVoQixZQUFVenpCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFVBQUM2QixLQUFELEVBQVc7QUFDL0IsUUFBTW14QixlQUFlbnhCLE1BQU1zSCxPQUFOLENBQWN3cUIsYUFBbkM7O0FBRUEsUUFBTXpoQixVQUNKOGdCLGFBQWFZLFlBQWIsQ0FBMEIsa0NBQTFCLEtBQ0EsdUJBRkY7O0FBS0FiLHNCQUFrQkMsWUFBbEIsRUFBZ0M5Z0IsT0FBaEM7QUFDRCxHQVREO0FBVUQ7O0FBRUQ7Ozs7Ozs7Ozs7OztBQVlBLFNBQVMyaEIsa0JBQVQsR0FBOEI7QUFDNUIsTUFBTUMsZ0JBQWdCbHlCLFNBQVNtbUIsZ0JBQVQsQ0FBMEIsc0RBQTFCLENBQXRCOztBQUVBO0FBQ0EsTUFBSStMLGNBQWNoMUIsTUFBZCxJQUF3QixDQUE1QixFQUErQjs7QUFFL0I7QUFDQSxNQUFJLENBQUM0MEIsb0JBQVlLLFdBQVosRUFBTCxFQUFnQzs7QUFFaEM7QUFDQSwrQkFBSUQsYUFBSixHQUFtQmpoQixPQUFuQixDQUEyQjBnQixpQkFBM0I7QUFDQUM7QUFDRDs7a0JBRWNLLGtCOzs7Ozs7Ozs7OztBQ2hIZix1RCIsImZpbGUiOiJhcmNoaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohXG4gKiBjbGlwYm9hcmQuanMgdjIuMC4xXG4gKiBodHRwczovL3plbm9yb2NoYS5naXRodWIuaW8vY2xpcGJvYXJkLmpzXG4gKiBcbiAqIExpY2Vuc2VkIE1JVCDCqSBaZW5vIFJvY2hhXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW21vZHVsZSwgX193ZWJwYWNrX3JlcXVpcmVfXyg3KV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJ3NlbGVjdCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5zZWxlY3QpO1xuICAgICAgICBnbG9iYWwuY2xpcGJvYXJkQWN0aW9uID0gbW9kLmV4cG9ydHM7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKG1vZHVsZSwgX3NlbGVjdCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBfc2VsZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlbGVjdCk7XG5cbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgICAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgICAgICB9O1xuICAgIH0oKTtcblxuICAgIHZhciBDbGlwYm9hcmRBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBiYXNlIHByb3BlcnRpZXMgcGFzc2VkIGZyb20gY29uc3RydWN0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZEFjdGlvbiwgW3tcbiAgICAgICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0dGVyID0gb3B0aW9ucy5lbWl0dGVyO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlciA9IG9wdGlvbnMudHJpZ2dlcjtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2luaXRTZWxlY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZha2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdzZWxlY3RGYWtlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGYWtlKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNSVEwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXInKSA9PSAncnRsJztcblxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlciA9IHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKSB8fCB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB6b29taW5nIG9uIGlPU1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYm94IG1vZGVsXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGVbaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnXSA9ICctOTk5OXB4JztcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgdG8gdGhlIHNhbWUgcG9zaXRpb24gdmVydGljYWxseVxuICAgICAgICAgICAgICAgIHZhciB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnRvcCA9IHlQb3NpdGlvbiArICdweCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS52YWx1ZSA9IHRoaXMudGV4dDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmFrZUVsZW0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5VGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdyZW1vdmVGYWtlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVGYWtlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZha2VIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmFrZUVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnc2VsZWN0VGFyZ2V0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RUYXJnZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY29weVRleHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvcHlUZXh0KCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZWVkZWQgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCh0aGlzLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2hhbmRsZVJlc3VsdCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHN1Y2NlZWRlZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5zZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb246IHRoaXMuY2xlYXJTZWxlY3Rpb24uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdjbGVhclNlbGVjdGlvbicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2FjdGlvbicsXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnY29weSc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWN0aW9uICE9PSAnY29weScgJiYgdGhpcy5fYWN0aW9uICE9PSAnY3V0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJhY3Rpb25cIiB2YWx1ZSwgdXNlIGVpdGhlciBcImNvcHlcIiBvciBcImN1dFwiJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3RhcmdldCcsXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCAmJiAodHlwZW9mIHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGFyZ2V0KSkgPT09ICdvYmplY3QnICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY29weScgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gUGxlYXNlIHVzZSBcInJlYWRvbmx5XCIgaW5zdGVhZCBvZiBcImRpc2FibGVkXCIgYXR0cmlidXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2N1dCcgJiYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgfHwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFlvdSBjYW5cXCd0IGN1dCB0ZXh0IGZyb20gZWxlbWVudHMgd2l0aCBcInJlYWRvbmx5XCIgb3IgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgdmFsdWUsIHVzZSBhIHZhbGlkIEVsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENsaXBib2FyZEFjdGlvbjtcbiAgICB9KCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IENsaXBib2FyZEFjdGlvbjtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBkZWxlZ2F0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbi8qKlxuICogVmFsaWRhdGVzIGFsbCBwYXJhbXMgYW5kIGNhbGxzIHRoZSByaWdodFxuICogbGlzdGVuZXIgZnVuY3Rpb24gYmFzZWQgb24gaXRzIHRhcmdldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghdGFyZ2V0ICYmICF0eXBlICYmICFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5zdHJpbmcodHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLmZuKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoaXMubm9kZSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5ub2RlTGlzdCh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlTGlzdCh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMuc3RyaW5nKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblNlbGVjdG9yKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZywgSFRNTEVsZW1lbnQsIEhUTUxDb2xsZWN0aW9uLCBvciBOb2RlTGlzdCcpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgSFRNTCBlbGVtZW50XG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZShub2RlLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBub2RlTGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGVMaXN0KG5vZGVMaXN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBzZWxlY3RvclxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuU2VsZWN0b3Ioc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuO1xuXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbbW9kdWxlLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBmYWN0b3J5KG1vZHVsZSwgcmVxdWlyZSgnLi9jbGlwYm9hcmQtYWN0aW9uJyksIHJlcXVpcmUoJ3RpbnktZW1pdHRlcicpLCByZXF1aXJlKCdnb29kLWxpc3RlbmVyJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtb2QgPSB7XG4gICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmYWN0b3J5KG1vZCwgZ2xvYmFsLmNsaXBib2FyZEFjdGlvbiwgZ2xvYmFsLnRpbnlFbWl0dGVyLCBnbG9iYWwuZ29vZExpc3RlbmVyKTtcbiAgICAgICAgZ2xvYmFsLmNsaXBib2FyZCA9IG1vZC5leHBvcnRzO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUsIF9jbGlwYm9hcmRBY3Rpb24sIF90aW55RW1pdHRlciwgX2dvb2RMaXN0ZW5lcikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBfY2xpcGJvYXJkQWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsaXBib2FyZEFjdGlvbik7XG5cbiAgICB2YXIgX3RpbnlFbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbnlFbWl0dGVyKTtcblxuICAgIHZhciBfZ29vZExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2RMaXN0ZW5lcik7XG5cbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgICAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgICAgICB9O1xuICAgIH0oKTtcblxuICAgIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICAgICAgaWYgKCFzZWxmKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICAgIH1cblxuICAgIHZhciBDbGlwYm9hcmQgPSBmdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgICAgICAgX2luaGVyaXRzKENsaXBib2FyZCwgX0VtaXR0ZXIpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2xpcGJvYXJkKHRyaWdnZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGlwYm9hcmQpO1xuXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2xpcGJvYXJkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xpcGJvYXJkKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMubGlzdGVuQ2xpY2sodHJpZ2dlcik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBpZiBhdHRyaWJ1dGVzIHdvdWxkIGJlIHJlc29sdmVkIHVzaW5nIGludGVybmFsIHNldHRlciBmdW5jdGlvbnNcbiAgICAgICAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG5cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkLCBbe1xuICAgICAgICAgICAga2V5OiAncmVzb2x2ZU9wdGlvbnMnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gdHlwZW9mIG9wdGlvbnMuYWN0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5hY3Rpb24gOiB0aGlzLmRlZmF1bHRBY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0eXBlb2Ygb3B0aW9ucy50YXJnZXQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRhcmdldCA6IHRoaXMuZGVmYXVsdFRhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50ZXh0IDogdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IF90eXBlb2Yob3B0aW9ucy5jb250YWluZXIpID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnbGlzdGVuQ2xpY2snLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbkNsaWNrKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSAoMCwgX2dvb2RMaXN0ZW5lcjIuZGVmYXVsdCkodHJpZ2dlciwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdvbkNsaWNrJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlciA9IGUuZGVsZWdhdGVUYXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG5ldyBfY2xpcGJvYXJkQWN0aW9uMi5kZWZhdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbih0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyOiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHRBY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRBY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgnYWN0aW9uJywgdHJpZ2dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHRUYXJnZXQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUYXJnZXQodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IGdldEF0dHJpYnV0ZVZhbHVlKCd0YXJnZXQnLCB0cmlnZ2VyKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0VGV4dCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRleHQodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgndGV4dCcsIHRyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sIFt7XG4gICAgICAgICAgICBrZXk6ICdpc1N1cHBvcnRlZCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydjb3B5JywgJ2N1dCddO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbnMgPSB0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJyA/IFthY3Rpb25dIDogYWN0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBzdXBwb3J0ID0gISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ID0gc3VwcG9ydCAmJiAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gQ2xpcGJvYXJkO1xuICAgIH0oX3RpbnlFbWl0dGVyMi5kZWZhdWx0KTtcblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKHN1ZmZpeCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gJ2RhdGEtY2xpcGJvYXJkLScgKyBzdWZmaXg7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IENsaXBib2FyZDtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBsaXN0IG9mIEhUTUwgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGVMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiAodHlwZSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nKVxuICAgICAgICAmJiAoJ2xlbmd0aCcgaW4gdmFsdWUpXG4gICAgICAgICYmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgZXhwb3J0cy5ub2RlKHZhbHVlWzBdKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5zdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5mbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBzZWxlY3QoZWxlbWVudCkge1xuICAgIHZhciBzZWxlY3RlZFRleHQ7XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICB2YXIgaXNSZWFkT25seSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZWxlY3QoKTtcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhlbGVtZW50KTtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VsZWN0O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3NjcmlwdHMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIElhRGVzaWduU3lzdGVtID0ge307XG5cbi8vIEFkZCBjb21wb25lbnRzIGFzIGtleXMgaW4gdGhlIElhRGVzaWduU3lzdGVtIG9iamVjdCwgZm9yIGV4YW1wbGU6XG4vLyAgICBpbXBvcnQgTXlDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9NeUNvbXBvbmVudCc7XG4vLyAgICBJYURlc2lnblN5c3RlbS5NeUNvbXBvbmVudCA9IE15Q29tcG9uZW50O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJYURlc2lnblN5c3RlbTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc3R5bGVzL2luZGV4Lmxlc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc3R5bGVzL2luZGV4Lmxlc3MgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuLyoqKi8gfSksXG5cbi8qKiovIDA6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgLi9zcmMvc2NyaXB0cy9pbmRleC5qcyAuL3NyYy9zdHlsZXMvaW5kZXgubGVzcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbl9fd2VicGFja19yZXF1aXJlX18oLyohIC9Vc2Vycy9taXRyYS8ubnBtL19jYWNhY2hlL3RtcC9naXQtY2xvbmUtNTU2NTkzMjAvc3JjL3NjcmlwdHMvaW5kZXguanMgKi9cIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC9Vc2Vycy9taXRyYS8ubnBtL19jYWNhY2hlL3RtcC9naXQtY2xvbmUtNTU2NTkzMjAvc3JjL3N0eWxlcy9pbmRleC5sZXNzICovXCIuL3NyYy9zdHlsZXMvaW5kZXgubGVzc1wiKTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM05qY21sd2RITXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wZVd4bGN5OXBibVJsZUM1c1pYTnpJbDBzSW01aGJXVnpJanBiSWtsaFJHVnphV2R1VTNsemRHVnRJbDBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdPenM3T3pzN1FVTnNSa0VzU1VGQlRVRXNhVUpCUVdsQ0xFVkJRWFpDT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3YTBKQlJXVkJMR003T3pzN096czdPenM3TzBGRFRtWXNlVU1pTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01DazdYRzRpTENKamIyNXpkQ0JKWVVSbGMybG5ibE41YzNSbGJTQTlJSHQ5TzF4dVhHNHZMeUJCWkdRZ1kyOXRjRzl1Wlc1MGN5QmhjeUJyWlhseklHbHVJSFJvWlNCSllVUmxjMmxuYmxONWMzUmxiU0J2WW1wbFkzUXNJR1p2Y2lCbGVHRnRjR3hsT2x4dUx5OGdJQ0FnYVcxd2IzSjBJRTE1UTI5dGNHOXVaVzUwSUdaeWIyMGdKMk52YlhCdmJtVnVkSE12VFhsRGIyMXdiMjVsYm5Rbk8xeHVMeThnSUNBZ1NXRkVaWE5wWjI1VGVYTjBaVzB1VFhsRGIyMXdiMjVsYm5RZ1BTQk5lVU52YlhCdmJtVnVkRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnU1dGRVpYTnBaMjVUZVhOMFpXMDdYRzRpTENJdkx5QnlaVzF2ZG1Wa0lHSjVJR1Y0ZEhKaFkzUXRkR1Y0ZEMxM1pXSndZV05yTFhCc2RXZHBiaUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiLy8gTm90IHVzaW5nIGFueXRoaW5nIGZyb20gdGhlIGRlc2lnbiBzeXN0ZW0gcmlnaHQgbm93LCBpbXBvcnRlZCBhcyBhIHByb29mIG9mIGNvbmNlcHQuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBJYURlc2lnblN5c3RlbSBmcm9tICdpYS1kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgc2V0VXBDb3B5YWJsZVRleHRzIGZyb20gJy4vc2V0VXBDb3B5YWJsZVRleHRzJ1xuXG4vLyBMb2NhbCBiaW5kaW5nIGluIGNhc2Ugb2YgY29uZmxpY3RzIGluIGdsb2JhbCBzY29wZVxuY29uc3QgJCA9IHdpbmRvdy5qUXVlcnlcblxuLy8gY29udmVuaWVudCwgbm8/ICBTdGF0ZWxlc3MgZnVuY3Rpb24sIGdsb2JhbCB0byBhbGwgUGxheSBvYmplY3RzXG4vLyAgIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tY29uc29sZVxuY29uc3QgbG9nID0gKGxvY2F0aW9uLmhvc3Quc3Vic3RyKDAsIDQpICE9PSAnd3d3LScgPyAoKSA9PiB7fSA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSkpXG5cbi8qKlxuICogRXhlY3V0ZXMgYSBmdW5jdGlvbiBubyBtb3JlIHRoYW4gb25jZSB3aXRoaW4gdGhlIHNwZWNpZmllZCB0aW1lIHRocmVzaGhvbGRcbiAqXG4gKiBQYXNzIGl0cyByZXR1cm4gdmFsdWUgaW50byBoaWdoLWZyZXF1ZW5jeSBldmVudCBsaXN0ZW5lcnNcbiAqIGxpa2Ugc2Nyb2xsL3Jlc2l6ZSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gICB0aHJlc2hob2xkIC0gaW4gbWlsbGlzZWNvbmRzXG4gKiBAcGFyYW0geyp9ICAgICAgICBjb250ZXh0ICAgIC0gd2lsbCBiZSBib3VuZCB0byBmbiBhcyBpdHMgXCJ0aGlzXCIgdmFsdWVcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgdGhyb3R0bGVkIHZlcnNpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB0aHJlc2hob2xkID0gMjUwLCBjb250ZXh0ID0gdW5kZWZpbmVkKSB7XG4gIGxldCBsYXN0XG4gIGxldCBkZWZlclRpbWVvdXRcblxuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAvLyBDb252ZXJ0IHRvIGEgTnVtYmVyXG4gICAgY29uc3Qgbm93ID0gK25ldyBEYXRlKClcblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBmbiBmdW5jdGlvbiBhbmQgdXBkYXRlcyB0aGUgbGFzdCB0aW1lXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2FsbEZuKCkge1xuICAgICAgbGFzdCA9IG5vd1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncylcbiAgICB9XG5cbiAgICBpZiAobGFzdCAmJiBub3cgPCBsYXN0ICsgdGhyZXNoaG9sZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZW91dClcbiAgICAgIGRlZmVyVGltZW91dCA9IHNldFRpbWVvdXQoY2FsbEZuLCB0aHJlc2hob2xkKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsRm4oKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2VzIGEgQm9va1JlYWRlciBmcmFnbWVudCBzdHJpbmcgaW4gYSBVUkwgcGF0aCB3aXRoIGEgbmV3IGZyYWdtZW50LFxuICogb3IgYWRkcyB0aGUgcGF0aCBzdHJpbmcgdG8gdGhlIGVuZCBvZiB0aGUgVVJMIGlmIGl0J3Mgbm90IHNldFxuICpcbiAqIE5PVEU6IEJvb2tSZWFkZXIgXCJmcmFnbWVudHNcIiBhcmUgbm90IG5lY2Vzc2FyaWx5IFVSTCBoYXNoIGZyYWdtZW50cyxcbiAqIHRob3VnaCB0aGV5IG1heSBiZSBzdG9yZWQgaW4gdGhlIGhhc2guXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhTdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBuZXdGcmFnbWVudFxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUJvb2tSZWFkZXJGcmFnbWVudChwYXRoU3RyaW5nLCBuZXdGcmFnbWVudCkge1xuICAvLyBTZWUgaHR0cDovL29wZW5saWJyYXJ5Lm9yZy9kZXYvZG9jcy9ib29rdXJsc1xuICBjb25zdCBmcmFnbWVudFJlZ2V4ID0gLyhcXC8oKHBhZ2V8bW9kZXxzZWFyY2gpXFwvW14vPyRdKykpK1xcLz8oPz1cXD98JCkvZ1xuXG4gIGlmIChwYXRoU3RyaW5nLm1hdGNoKGZyYWdtZW50UmVnZXgpKVxuICAgIHJldHVybiBwYXRoU3RyaW5nLnJlcGxhY2UoZnJhZ21lbnRSZWdleCwgYC8ke25ld0ZyYWdtZW50fWApXG5cbiAgcmV0dXJuIGAke3BhdGhTdHJpbmd9LyR7bmV3RnJhZ21lbnR9YC5yZXBsYWNlKC9cXC8rL2csICcvJylcbn1cblxuLy8gY2xhc3MgbWVtbm9uaWM6IEFyY2hpdmUgSlNcbmNsYXNzIEFKUyB7XG4gIC8qIGdsb2JhbCAgYXJjaGl2ZV9hbmFseXRpY3MgIGp3cGxheWVyICovXG4gIC8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogW1wiZXJyb3JcIiwgeyBcImFsbG93XCI6IFtcIl9tb2RhbF9hZGRcIl0gfV0gKi9cblxuXG4gIHN0YXRpYyBUSUxFX1dJRFRIICAgICAgID0gMTgwIC8vIE5PVEU6IG5lZWRzIHRvIHN0YXkgaW4gc3luYyB3LyBhcmNoaXZlLmxlc3NcbiAgc3RhdGljIFRJTEVfV0lEVEhfU01BTEwgPSAxNTAgLy8gTk9URTogbmVlZHMgdG8gc3RheSBpbiBzeW5jIHcvIGFyY2hpdmUubGVzc1xuXG4gIHN0YXRpYyBpb3MgPSAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgIHx8XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwICB8fFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMClcbiAgc3RhdGljIHBhZ2VfbWFwID0ge31cbiAgc3RhdGljIGNnaV9hcmdzID0ge31cblxuICBzdGF0aWMgdHZBRChlbG0pIHtcbiAgICBjb25zdCBpbl9zaG93ID0gJChlbG0pLnBhcmVudHMoJy5zaG93cycpXG4gICAgbGV0IGlkXG4gICAgbGV0IGNoYW5cbiAgICBsZXQgc2hvd1xuICAgIGlmIChpbl9zaG93Lmxlbmd0aCkge1xuICAgICAgLy8gc2VlIGlmIHdlJ3ZlIGFscmVhZHkgZ290dGVuIGFuZCBkaXNwbGF5ZWQgdGhlIFwiQWlyIGRhdGVcIiBzZWN0aW9uLi4uXG4gICAgICBjb25zdCBvcGVuZWQgPSAkKGVsbSkucGFyZW50KCkuZmluZCgnLnNob3dzJylcbiAgICAgIGlmIChvcGVuZWQubGVuZ3RoKSB7XG4gICAgICAgIC8vIC4uLiB5ZXMsIHNpbXBseSBjbG9zZS9vcGVuIGl0XG4gICAgICAgIG9wZW5lZC50b2dnbGUoKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGNoYW4gPSBpbl9zaG93LmF0dHIoJ2RhdGEtY2hhbicpXG4gICAgICBzaG93ID0gJChlbG0pLnRleHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjaGFuID0gJChlbG0pLnRleHQoKVxuICAgICAgaWQgPSAnbWVudS1jaGFuLScuY29uY2F0KGNoYW4pXG4gICAgICBjb25zdCBkaXYgPSAkKGAjJHtpZH1gKVxuICAgICAgaWYgKGRpdi5sZW5ndGgpIHtcbiAgICAgICAgZGl2LnRvZ2dsZSgpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB1cmwgPSBgJHtsb2NhdGlvbi5ocmVmfT9jaGFubmVsPSR7Y2hhbn1gXG4gICAgaWYgKGluX3Nob3cubGVuZ3RoKVxuICAgICAgdXJsICs9ICcmcHJvZ3JhbT0nLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoc2hvdykpXG4gICAgbG9nKHVybClcblxuICAgICQuZ2V0KHVybCwgKGh0bSkgPT4ge1xuICAgICAgaWYgKGluX3Nob3cubGVuZ3RoKSB7XG4gICAgICAgICQoZWxtKS5wYXJlbnQoKVxuICAgICAgICAgIC5hcHBlbmQoYDxkaXYgZGF0YS1jaGFuPVwiJHtjaGFufVwiIGNsYXNzPVwic2hvd3NcIj48aDU+QWlyIGRhdGU8L2g1PjxkaXY+JHtodG19PC9kaXY+PC9kaXY+YClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoZWxtKS5wYXJlbnQoKVxuICAgICAgICAgIC5hcHBlbmQoYDxkaXYgaWQ9XCIke2lkfVwiIGRhdGEtY2hhbj1cIiR7Y2hhbn1cIiBjbGFzcz1cInNob3dzXCI+PGg0PlNob3c8L2g0PjxkaXY+JHtodG19PC9kaXY+PC9kaXY+YClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuXG4gIHN0YXRpYyBuYXZfdG9waGF0X3NldHVwKCkge1xuICAgIGlmICghJCgnI25hdi10b3BoYXQnKS5sZW5ndGgpXG4gICAgICByZXR1cm5cblxuICAgIGlmIChBSlMuaXNUb3VjaERldmljZSgpKVxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCd0b3VjaCcpXG4gICAgZWxzZVxuICAgICAgQUpTLmxvZ29UZXh0KClcblxuXG4gICAgJCgnI25hdi10b3BoYXQnKVxuICAgICAgLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgKCkgPT4gJCgnI25hdndyYXAxJykuYWRkQ2xhc3MoJ2hhdHRlZCcpKVxuICAgICAgLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgKCkgPT4gJCgnI25hdndyYXAxJykucmVtb3ZlQ2xhc3MoJ2hhdHRlZCcpKVxuXG5cbiAgICAkKCcubmF2YmFyIGEubmF2aWEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIG5hdmhhdF9jbGljayhldnQpIHtcbiAgICAgIC8vIGFyZSB3ZSBpbiBcIm1vYmlsZSBuYXYgLyB4cyB3aWR0aFwiIG1vZGU/XG4gICAgICBjb25zdCB4cyA9ICEkKCcjbmF2LXRvcGhhdC1oZWxwZXI6dmlzaWJsZScpLmxlbmd0aFxuICAgICAgY29uc3QgaGF0X29wZW4gPSAkKCcjbmF2LXRvcGhhdCcpLmhhc0NsYXNzKCdpbicpXG4gICAgICBjb25zdCBuYXZsaW5rID0gdGhpc1xuXG4gICAgICAvLyBkZXRlcm1pbmUgbWVkaWF0eXBlIGZyb20gZWl0aGVyOiAoMSkgdXNlciBoaXQgdGV4dCBvciAoMikgdXNlciBoaXQgaWNvblxuICAgICAgY29uc3QgbXQgPSAoJChldnQudGFyZ2V0KS5hdHRyKCdkYXRhLXRvcC1raW5kJykgIHx8XG4gICAgICAgICAgICAgICAgICAkKGV2dC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLXRvcC1raW5kJykpXG5cbiAgICAgIGNvbnN0IGlzbm93ID0gJCgnLm5hdmJhciAuZHJvcGRvd24taWEuaGF0dGVkIGEnKS5hdHRyKCdkYXRhLXRvcC1raW5kJylcblxuICAgICAgaWYgKCEoeHMgICYmICBoYXRfb3BlbiAgJiYgIGlzbm93ICE9PSBtdCkpIHtcbiAgICAgICAgLy8gc2hvdyB0aGUgbGlua3MgZm9yIG1lZGlhdHlwZSBjbGlja2VkXG4gICAgICAgICQoJy50b3Byb3cnKS5oaWRlKClcbiAgICAgICAgJChgLnRvcHJvdy4ke210fWApLnNob3coKVxuICAgICAgfVxuXG5cbiAgICAgIGlmICghaGF0X29wZW4pIHtcbiAgICAgICAgJCgnI25hdi10b3BoYXQnKS5jb2xsYXBzZSgnc2hvdycpIC8vIC4uIHRvcCBoYXQgaXMgKm5vdCogb3Blbi4gIGNsaWNrZWQsIHNvIG9wZW4gdG9waGF0XG5cbiAgICAgICAgaWYgKEFKUy50b3BoYXRfZG9udF9jb3VudF9maXJzdF9vcGVuKSB7XG4gICAgICAgICAgZGVsZXRlIEFKUy50b3BoYXRfZG9udF9jb3VudF9maXJzdF9vcGVuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyY2hpdmVfYW5hbHl0aWNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIGxvZyB0aGF0IGEgdXNlciBoYXMgb3BlbmVkIHRoZSBuYXYgdG9waGF0LCB5YXl6XG4gICAgICAgICAgYXJjaGl2ZV9hbmFseXRpY3Muc2VuZF9waW5nKHtcbiAgICAgICAgICAgIGtpbmQ6ICdldmVudCcsXG4gICAgICAgICAgICBlYzogJ3BhZ2VfYWN0aW9uJyxcbiAgICAgICAgICAgIGVhOiAnbmF2X3RvcGhhdF9nYWxhY3RpY2EnLFxuICAgICAgICAgICAgZWw6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgY2FjaGVfYnVzdDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgaWYgKHR5cGVvZiBpc25vdyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIGxvZygnaXNub3cnLCBpc25vdylcbiAgICAgIGxvZygnc2hvdWxkQicsIG10KVxuXG4gICAgICBpZiAoaXNub3cgPT09IG10KSB7XG4gICAgICAgIC8vIDJuZCBjbGljayBvbiBzYW1lIG1lZGlhdHlwZSBkcm9wZG93biAtLSBjbG9zZSB0b3BoYXQhXG4gICAgICAgICQoJyNuYXYtdG9waGF0JykuY29sbGFwc2UoJ2hpZGUnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKHhzICAmJiAgaGF0X29wZW4gICYmICBpc25vdyAhPT0gbXQpIHtcbiAgICAgICAgLy8gTW9iaWxlL3hzIG5hdiBhbmQgdXNlciBoYXMgY2xpY2tlZCBvbiAqYW5vdGhlciogbmF2L01UIGljb24uXG4gICAgICAgIC8vIFNvIHdlIHdhbnQgdG8gKGFuaW1hdGUpIGNsb3NlIHRoZSB0b3BoYXQsIGFuZCB3aGVuIGNsb3NlZCxcbiAgICAgICAgLy8gcmVvcGVuIChhbmltYXRlKSB0byB0aGUgcmlnaHQgb3BlbiB0b3BoYXQgLS0gdGhpcyBpcyBiZWNhdXNlXG4gICAgICAgIC8vIG1vYmlsZS94cyBtYWtlcyB0aGUgdG9waGF0IGhlaWdodHMgbXVjaCBtb3JlIGFyYml0cmFyeVxuICAgICAgICAvLyBhbmQgaXQgbG9va3Mgd2VpcmQgaGFyZCBqdW1waW5nIHRvIG90aGVyIG9wZW4gYXJlYSBhdCBhbm90aGVyIGhlaWdodCFcbiAgICAgICAgJCgnI25hdi10b3BoYXQnKS5vbmUoJ2hpZGRlbi5icy5jb2xsYXBzZScsICgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICQobmF2bGluaykuY2xpY2soKSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgICAkKCcjbmF2LXRvcGhhdCcpLmNvbGxhcHNlKCdoaWRlJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cblxuICAgICAgJCgnLm5hdmJhciAuZHJvcGRvd24taWEnKS5yZW1vdmVDbGFzcygnaGF0dGVkJykuaGFzKGAuJHttdH1gKS5hZGRDbGFzcygnaGF0dGVkJylcbiAgICAgICQoJyNuYXYtdG9waGF0Jykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsICgpID0+ICQoJy5uYXZiYXIgLmRyb3Bkb3duLWlhJykucmVtb3ZlQ2xhc3MoJ2hhdHRlZCcpKVxuXG5cbiAgICAgIC8vIGFueSBjbGljayBtYWtlcyB0b3BoYXQgaGlkZS4uLlxuICAgICAgJChkb2N1bWVudCkub25lKCdjbGljay50b3BoYXQubml4ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGUgPSAkKGV2ZW50LnRhcmdldClcbiAgICAgICAgLy8gbG9nKCRlKVxuICAgICAgICBpZiAoJGUuYXR0cignaWQnKSA9PT0gJ25hdi13Yi11cmwnKVxuICAgICAgICAgIHJldHVybiAvLyAuLi4gZXhjZXB0IGNsaWNraW5nIG9uIHdheWJhY2sgbWFjaGluZSBmb3JtIGlucHV0XG4gICAgICAgIGlmICgkZS5pcygnYScpKVxuICAgICAgICAgIHJldHVybiAvLyAuLi4gZXhjZXB0IGNsaWNraW5nIG9uIGEgbGlua1xuICAgICAgICBpZiAoJGUuaGFzQ2xhc3MoJ2l0ZW0taW1nJykgIHx8ICAkZS5oYXNDbGFzcygnaXRlbS1pYScpKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIC8vIE5PVEU6IGlmIG5vdCBvcGVuLCB3ZSB3b250IGhpZGVcbiAgICAgICAgJCgnI25hdi10b3BoYXQuaW4nKS5jb2xsYXBzZSgnaGlkZScpXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICB9XG5cblxuICBzdGF0aWMgaXNUb3VjaERldmljZSgpIHtcbiAgICByZXR1cm4gKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpKVxuICB9XG5cblxuICBzdGF0aWMgZm9vdGVyKCkge1xuICAgIGlmICghQUpTLmlzVG91Y2hEZXZpY2UoKSAgJiYgIHR5cGVvZiAkLmZuLnRvb2x0aXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAkKCcubmF2YmFyIFtkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0sIC5jb250YWluZXItaWEgW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXSwgI2NvbHMgW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXSwgI3R2YmFubmVyIFtkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKHtcbiAgICAgIH0pXG4gICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ2dseXBocy1hcy10ZXh0JylcbiAgICB9XG4gIH1cblxuXG4gIHN0YXRpYyB3cmFwZGFya193YXRjaGVyKCkgeyAvLyBubyBsb25nZXIgbmVlZGVkL3VzZWQgYnV0IGhhcyBzb21lIGhhbmR5IHRlY2huaXF1ZXMuLi5cbiAgICBpZiAoIUFKUy4kc2hhcmVkb3duKSB7XG4gICAgICBBSlMuJHNoYXJlZG93biA9ICQoJyNzaGFyZWRvd24nKVxuICAgICAgQUpTLiR3cmFwZGFyayAgPSAkKCcjd3JhcGRhcmsnKVxuICAgIH1cblxuICAgIC8vIGV2ZXJ5IHNlY29uZCwgc2lnaCwgY2hlY2svYWRqdXN0IGZvciB0aGUgd3JhcGRhcmsgaGVpZ2h0XG4gICAgaWYgKCFBSlMud3JhcGRhcmtfd2F0Y2hlcl9wdHIpXG4gICAgICBBSlMud3JhcGRhcmtfd2F0Y2hlcl9wdHIgPSBzZXRJbnRlcnZhbChBSlMud3JhcGRhcmtfd2F0Y2hlciwgMTAwMClcblxuICAgIGlmICghQUpTLiRzaGFyZWRvd24ubGVuZ3RoICB8fCAgIUFKUy4kd3JhcGRhcmsubGVuZ3RoKSB7XG4gICAgICBjbGVhckludGVydmFsKEFKUy53cmFwZGFya193YXRjaGVyX3B0cilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHdyYXBkYXJrSFQgPSBBSlMuJHNoYXJlZG93bi5vZmZzZXQoKS50b3AgKyBBSlMuJHNoYXJlZG93bi5maW5kKCcucGFuZWwtaGVhZGluZycpLmlubmVySGVpZ2h0KClcbiAgICBpZiAocGFyc2VJbnQoQUpTLiR3cmFwZGFyay5jc3MoJ2hlaWdodCcpLCAxMCkgIT09IHdyYXBkYXJrSFQpIHtcbiAgICAgIEFKUy4kd3JhcGRhcmsuY3NzKHsgaGVpZ2h0OiB3cmFwZGFya0hUIH0pLnNob3coKVxuICAgICAgbG9nKCcgICAgICAgV1JBUERBUkstRUQgdG8gJywgd3JhcGRhcmtIVClcbiAgICB9XG4gIH1cblxuXG4gIHN0YXRpYyBtdXRlX2NsaWNrKCkge1xuICAgIGNvbnN0IG11dGVkTk9XID0gISQuY29va2llKCd1bm11dGUnKVxuXG4gICAgaWYgKHRoaXMuZW11bGF0b3IpIHtcbiAgICAgIHRoaXMuZW11bGF0b3Iuc2V0TXV0ZSghbXV0ZWROT1cpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IGp3cGxheWVyKCdqdzYnKVxuICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICBjb25zdCB2b2xub3cgPSBwbGF5ZXIuZ2V0Vm9sdW1lKClcbiAgICAgICAgaWYgKHZvbG5vdykge1xuICAgICAgICAgIEFKUy5tdXRlX2NsaWNrX3ByaW9yX3ZvbHVtZSA9IHZvbG5vd1xuICAgICAgICAgIHBsYXllci5zZXRWb2x1bWUoMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIuc2V0Vm9sdW1lKHR5cGVvZiBBSlMubXV0ZV9jbGlja19wcmlvcl92b2x1bWUgPT09ICd1bmRlZmluZWQnID8gMTAwIDpcbiAgICAgICAgICAgIEFKUy5tdXRlX2NsaWNrX3ByaW9yX3ZvbHVtZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgJCgnI3RoZWF0cmUtaWEgLmljb25vY2hpdmUtbXV0ZSwgI3RoZWF0cmUtaWEgLmljb25vY2hpdmUtdW5tdXRlJykudG9nZ2xlKClcblxuXG4gICAgaWYgKG11dGVkTk9XKSB7XG4gICAgICAvLyBzb3VuZHMgaXMgb2ZmLiAgbWFrZSBpdCBsb3VkXG4gICAgICAkLmNvb2tpZSgndW5tdXRlJywgMSwgeyBwYXRoOiAnL2RldGFpbHMnLCBleHBpcmVzOiAzMCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzb3VuZHMgaXMgb24uICBtdXRlIGl0IVxuICAgICAgJC5jb29raWUoJ3VubXV0ZScsIG51bGwsIHsgcGF0aDogJy9kZXRhaWxzJyB9KVxuICAgIH1cblxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuXG4gIHN0YXRpYyBlbXVsYXRlX3NldHVwKGdhbWUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZ2FtZS50b1N0cmluZyA9ICgoKSA9PiBnYW1lLmlkZW50aWZpZXIpXG4gICAgQUpTLmVtdWxhdG9yID0gbmV3IElBTG9hZGVyKFxuICAgICAgJCgnI2NhbnZhcycpLmdldCgwKSwgZ2FtZSwgbnVsbCxcbiAgICAgIChnYW1lLnNjYWxlID8gcGFyc2VGbG9hdChnYW1lLnNjYWxlKSA6IDEpLFxuICAgICAgKGdhbWUubW9kdWxlLmluZGV4T2YoJ2Rvc2JveCcpID09PSAwID8gJy9pbWFnZXMvZG9zYm94LnBuZycgOiAnL2ltYWdlcy9tYW1lLnBuZycpLFxuICAgIClcblxuXG4gICAgJCgnI3RoZWF0cmUtaWEgLmljb25vY2hpdmUtdW5tdXRlLCAjdGhlYXRyZS1pYSAuaWNvbm9jaGl2ZS1tdXRlJykuaGlkZSgpXG4gICAgaWYgKCQuY29va2llKCd1bm11dGUnKSkge1xuICAgICAgJCgnI3RoZWF0cmUtaWEgLmljb25vY2hpdmUtdW5tdXRlJykuc2hvdygpXG4gICAgICBBSlMuZW11bGF0b3IudW5tdXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI3RoZWF0cmUtaWEgLmljb25vY2hpdmUtbXV0ZScpLnNob3coKVxuICAgICAgQUpTLmVtdWxhdG9yLm11dGUoKVxuICAgIH1cblxuICAgIEFKUy50aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uKClcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSAgb3JpZW50YXRpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoQUpTLnRoZWF0cmVfY29udHJvbHNfcG9zaXRpb25fdGhyb3R0bGVyKVxuICAgICAgQUpTLnRoZWF0cmVfY29udHJvbHNfcG9zaXRpb25fdGhyb3R0bGVyID0gc2V0VGltZW91dChBSlMudGhlYXRyZV9jb250cm9sc19wb3NpdGlvbiwgMjUwKVxuICAgIH0pXG4gIH1cblxuXG4gIHN0YXRpYyBlbXVsYXRlKCkge1xuICAgIC8qIGdsb2JhbCAgY2FudmFzICBJQUxvYWRlciAgRE9TQk9YICBKU01FU1MgIE1vZHVsZSAqL1xuXG4gICAgLy8gbW92ZSB0aGUgdmlydHVhbCBrZXlib2FyZCB0aGluZyBhbmQgZ2l2ZSBpdCBhIFwiZ28gYXdheSFcIiBidXR0b25cbiAgICAkKCcudWkta2V5Ym9hcmQnKS5wcmVwZW5kKGBcbiAgICAgIDxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTVweDtyaWdodDotOHB4O1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCJcbiAgICAgICAgICAgICAgb25jbGljaz1cIiQoJy51aS1rZXlib2FyZCcpLnJlbW92ZUNsYXNzKCdzaG93aW5nJykuaGlkZSgpXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbm9jaGl2ZS1yZW1vdmUtY2lyY2xlXCI+PC9zcGFuPjwvYnV0dG9uPmApXG4gICAgICAuYXBwZW5kVG8oJCgnI2VtdWxhdGUgLnBvc3JlbCcpKS5hZGRDbGFzcygnc2hvd2luZycpXG5cbiAgICAkKCcjanNtZXNzU1MnKS5mYWRlT3V0KCdzbG93JylcbiAgICAkKCcjY2FudmFzaG9sZGVyJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgIEFKUy5lbXVsYXRvci5zdGFydCh7IGhhc0N1c3RvbUNTUzogdHJ1ZSB9KVxuXG4gICAgLy8gc2V0dXAgdGhlIHRoZWF0cmUtaWEgZnVsbHNjcmVlbiBidXR0b25cbiAgICBjb25zdCBFTSA9IChKU01FU1MgIHx8ICBET1NCT1ggIHx8ICBmYWxzZSlcbiAgICBpZiAoRU0gICYmICAoY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8IGNhbnZhcy5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuICAgICAgICAgICAgICAgICAgY2FudmFzLnJlcXVlc3RGdWxsU2NyZWVuKSkge1xuICAgICAgJCgnI2dvZnVsbHNjcmVlbicpLm9uKCdjbGljaycsICgpID0+IE1vZHVsZS5yZXF1ZXN0RnVsbFNjcmVlbigxLCAwKSlcbiAgICAgIC8qKi8gaWYgKCdvbmZ1bGxzY3JlZW5jaGFuZ2UnICAgICAgIGluIGRvY3VtZW50KSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgICAgICAgRU0uZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIpXG4gICAgICBlbHNlIGlmICgnb25tb3pmdWxsc2NyZWVuY2hhbmdlJyAgICBpbiBkb2N1bWVudCkgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW96ZnVsbHNjcmVlbmNoYW5nZScsICAgIEVNLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKVxuICAgICAgZWxzZSBpZiAoJ29ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZScgaW4gZG9jdW1lbnQpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBFTS5mdWxsU2NyZWVuQ2hhbmdlSGFuZGxlcilcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KEFKUy50aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uLCAgIDEwMClcbiAgICBzZXRUaW1lb3V0KEFKUy50aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uLCAgIDUwMClcbiAgICBzZXRUaW1lb3V0KEFKUy50aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uLCAgMzAwMClcbiAgICBzZXRUaW1lb3V0KEFKUy50aGVhdHJlX2NvbnRyb2xzX3Bvc2l0aW9uLCAxMDAwMClcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICBzdGF0aWMgdGhlYXRyZV9jb250cm9sc19wb3NpdGlvbigkc2VsZWN0b3JJbiwgcGVnVG9wLCB3aWR0aEluLCBoZWlnaHRJbikge1xuICAgIC8vIFdlIGhhdmUgbG90cyBvZiBjYWxsZXJzISAgdmlkZW8sIHNvZnR3YXJlLCB0ZXh0cy5cbiAgICAvLyBTbyBzb3J0IG91dCBvdXIgYXJncyBhbmQgd2hlcmUgd2UgZ29ubmEgXCJwZWdcIi9nbHVlIHRoaW5ncyB0by4uLlxuICAgIGxldCAkc2VsZWN0b3IgPSAkc2VsZWN0b3JJblxuICAgIGNvbnN0IHZpZGVvID0gKGhlaWdodEluICAmJiAgISRzZWxlY3RvckluKVxuICAgIGlmICghdmlkZW8pIHtcbiAgICAgIGlmICghJHNlbGVjdG9ySW4pICRzZWxlY3RvciA9ICQoJyNjYW52YXMnKSAvLyBzb2Z0d2FyZSBlbXVsYXRpb25cbiAgICAgIGlmICghJHNlbGVjdG9yLmxlbmd0aCkgcmV0dXJuIC8vIHByb3RlY3QgYWdhaW5zdCBlbXVsYXRlZCBlbWJlZHMgYW5kIHVuZGVmLi4uXG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gKHZpZGVvID8gaGVpZ2h0SW4gOiAkc2VsZWN0b3IuaGVpZ2h0KCkpXG4gICAgY29uc3Qgd2lkdGggID0gKHZpZGVvID8gd2lkdGhJbiAgOiAkc2VsZWN0b3Iud2lkdGgoKSlcblxuICAgIGlmICghdmlkZW8gICYmICB0eXBlb2YgcGVnVG9wICE9PSAndW5kZWZpbmVkJylcbiAgICAgICQoJyN0aGVhdHJlLWNvbnRyb2xzJykub2Zmc2V0KHsgdG9wOiBwZWdUb3AgfSlcblxuXG4gICAgLy8gU3VidHJhY3Qgb3V0IHRoZSB3aWR0aCBvZiB0aGUgY29udHJvbHMgdG8gZ2V0IHRvdGFsIGFtb3VudCBvZiBibGFjayBwaXhlbHNcbiAgICAvLyB0byB0aGUgcmlnaHQgb2YgdGhlIHRoZWF0cmUgb2JqZWN0LlxuICAgIC8vIFdlIHdhbnQgdG8gcG9zaXRpb24gdGhlIGNvbnRyb2xzIGluIHRoZSBtaWRkbGUgb2YgdGhlIGRhcmsgcGl4ZWxzIC8gcmlnaHQgZ3V0dGVyIVxuICAgIGNvbnN0IHJpZ2h0X2d1dHRlcl93aWR0aCA9XG4gICAgICBNYXRoLnJvdW5kKCgkKCcjdGhlYXRyZS1pYS13cmFwJykud2lkdGgoKSAtICQoJyN0aGVhdHJlLWNvbnRyb2xzJykud2lkdGgoKSAtIHdpZHRoKSAvIDIpXG5cbiAgICBsb2coJ3dpZHRoJywgd2lkdGgpXG4gICAgbG9nKCdyaWdodF9ndXR0ZXJfd2lkdGgnLCByaWdodF9ndXR0ZXJfd2lkdGgpXG5cblxuICAgICQoJyN0aGVhdHJlLWNvbnRyb2xzJykuY3NzKHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIHJpZ2h0OiBNYXRoLm1heCgyMCwgcmlnaHRfZ3V0dGVyX3dpZHRoIC8gMiksXG4gICAgfSlcbiAgfVxuXG5cbiAgc3RhdGljIGJvb2tzaXplKCkge1xuICAgIGlmICghJCgnI3RleHR5JykubGVuZ3RoKVxuICAgICAgcmV0dXJuXG5cbiAgICAvLyBVc2UgdGhlIHN0YW5kYXJkIHRoZWF0cmVzaXplIGZ1bmN0aW9uXG4gICAgQUpTLnRoZWF0cmVzaXplKClcblxuICAgIGNvbnN0IHBvbGxpbmdNaWxsaXMgPSAyMDBcblxuICAgIC8vIENoYW5nZSB0aGUgYmcgaW4gdGhlIGlmcmFtZVxuICAgIGNvbnN0ICR0ZXh0eWlmcmFtZSA9ICQoJyN0ZXh0eSBpZnJhbWUnKVxuICAgIGNvbnN0IGNoYW5nZUJnQ29sb3IgPSAoKSA9PiB7XG4gICAgICBjb25zdCAkY29udGVudERvbSA9ICQoJHRleHR5aWZyYW1lLmdldCgwKS5jb250ZW50RG9jdW1lbnQpXG4gICAgICBjb25zdCAkbWF0Y2ggPSAkY29udGVudERvbS5maW5kKCcjQm9va1JlYWRlcicpXG4gICAgICBpZiAoJG1hdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJGNvbnRlbnREb20uZmluZCgnYm9keSwgI0Jvb2tSZWFkZXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghY2hhbmdlQmdDb2xvcigpKSB7XG4gICAgICBjb25zdCBiZ0NvbG9ySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2VCZ0NvbG9yKCkpXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChiZ0NvbG9ySW50ZXJ2YWwpXG4gICAgICB9LCBwb2xsaW5nTWlsbGlzKVxuICAgIH1cblxuICAgIC8vIFNldHVwIHRoZSBjb250cm9sc1xuICAgIC8vIE5PVEUgVGhlIGF0dHJpYnV0ZSBkYXRhLWxlbmRhYmxlLWJvb2sgaXMgYWRkZWQgaW4gRGV0YWlscy5pbmNcbiAgICBjb25zdCBpc0xlbmRhYmxlQm9vayA9IHR5cGVvZiAkKCcjdGV4dHknKS5kYXRhKCdsZW5kYWJsZS1ib29rJykgIT09ICd1bmRlZmluZWQnXG4gICAgaWYgKCFpc0xlbmRhYmxlQm9vayAmJiAhQUpTLmJvb2tzaXplX2NvbnRyb2xzX2hpZGRlbikge1xuICAgICAgQUpTLmJvb2tzaXplX2NvbnRyb2xzKClcbiAgICAgIGNvbnN0IGJvb2tTaXplSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICghQUpTLmJvb2tzaXplX2NvbnRyb2xzX2hpZGRlbilcbiAgICAgICAgICBBSlMuYm9va3NpemVfY29udHJvbHMoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChib29rU2l6ZUludGVydmFsKVxuICAgICAgfSwgcG9sbGluZ01pbGxpcylcbiAgICB9XG4gIH1cblxuICAvLyBIaWRlcyB0aGUgYm9vayBjb250cm9scywgcGVyIGRhdmlkIVxuICAvLyBBbHNvIHBvc2l0aW9ucyB0aGUgXCJ0aGVhdHJlIGNvbnRyb2xzXCJcbiAgc3RhdGljIGJvb2tzaXplX2NvbnRyb2xzKCkge1xuICAgIGNvbnN0ICRpZnJhbWUgPSAkKCdpZnJhbWU6Zmlyc3QnKVxuICAgIGlmICghJGlmcmFtZS5sZW5ndGgpXG4gICAgICByZXR1cm5cbiAgICBjb25zdCAkaWZyYW1lRE9NID0gJCgkaWZyYW1lLmdldCgwKS5jb250ZW50RG9jdW1lbnQpXG4gICAgaWYgKCEkaWZyYW1lRE9NLmxlbmd0aClcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKCFBSlMuYm9va3NpemVfY29udHJvbHNfaGlkZGVuKSB7XG4gICAgICBpZiAoISRpZnJhbWVET00uZmluZCgnI0JSbmF2JykubGVuZ3RoKSB7XG4gICAgICAgIGxvZygnQk9PSyBOT1QgUkVBRFkgWUVUJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoJGlmcmFtZURPTS5maW5kKCcjQlJ0d29wYWdldmlldycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gT25seSBoaWRlIG5hdiBpbiAydXAuIFNob3cgaXQgaW4gMXVwXG4gICAgICAgICRpZnJhbWVET00uZmluZCgnI0JSbmF2JykuaGlkZSgpXG4gICAgICB9XG4gICAgICBBSlMuYm9va3NpemVfY29udHJvbHNfaGlkZGVuID0gdHJ1ZVxuICAgICAgJCgnI3RleHR5IGlmcmFtZScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgIGxvZygnQk9PSyBDT05UUk9MUyBISURERU4hJylcbiAgICB9XG5cbiAgICAkaWZyYW1lRE9NLmZpbmQoJ2JvZHksICNCb29rUmVhZGVyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50JylcblxuICAgIC8vIG5vdyBwb3NpdGlvbiB0aGUgdGhlYXRyZSBjb250cm9sc1xuICAgIGNvbnN0ICRib29rID0gJGlmcmFtZURPTS5maW5kKCcjQlJ0d29wYWdldmlldywgI0JScGFnZXZpZXcnKVxuXG4gICAgLy8gY29tcHV0ZSB3aGVyZSB0aGUgbG9naWNhbCB0b3AgcG9pbnQgc2hvdWxkIGJlIGZvciB0aGUgYm9vayBhbmQgZm9yIHRoZSBjb250cm9sc1xuICAgIC8vICh3aGljaCBpcyBjb21wYXJhYmxlIHRvIEEvViBpdGVtcylcbiAgICBjb25zdCAkbmF2YmFyID0gJCgnLm5hdmJhcicpXG4gICAgLy8gTk9URTogd2UgKmRvKiBjaGVjayB0aGUgbmF2IHRvcCAoYWxtb3N0IGFsd2F5cyAwISkgZm9yIHJhcmUgY2FzZXMgd2UgaGF2ZSBhIGJhbm5lclxuICAgIC8vICpBQk9WRSogdGhlIG5hdmJhciwgZWc6IEVPWSBkb25hdGUgYmFubmVyIGNhbXBhaWduICh3aGljaCBpcyBhYm92ZSB0aGUgbmF2KSFcbiAgICBjb25zdCBwZWdUb3AgPSAoJG5hdmJhci5vZmZzZXQoKS50b3AgKyAkbmF2YmFyLmhlaWdodCgpICtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoJCgnI3RleHR5JykuY3NzKCdwYWRkaW5nLXRvcCcpLCAxMCkpXG4gICAgQUpTLnRoZWF0cmVfY29udHJvbHNfcG9zaXRpb24oJGJvb2ssIHBlZ1RvcClcbiAgICBsb2coJ2Jvb2sgdG9wJywgJGlmcmFtZS5vZmZzZXQoKS50b3AgKyAkYm9vay5vZmZzZXQoKS50b3AsICcgLXYtIHBlZ1RvcCcsIHBlZ1RvcClcblxuICAgIC8vIGFuZCBub3cgZG9udCBvdmVyZmxvdyBuZWdhdGl2ZSBtYXJnaW4tYm90dG9tIGJsYWNrbmVzcyBpbnRvIG1ldGFkYXRhIHNlY3Rpb25cbiAgICAkKCcjdGhlYXRyZS1pYScpLmNzcyh7IG92ZXJmbG93OiAnaGlkZGVuJyB9KVxuICB9XG5cblxuICBzdGF0aWMgcG9wY29ybnNpemUoKSB7XG4gICAgY29uc3QgcmVzaXplciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhSGVpZ2h0ID0gMTAwIC8vIG1ldGFkYXRhIHBlZWthYm9vIG1pbiBoZWlnaHQhXG4gICAgICBjb25zdCBtYXhIID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gJCgnaWZyYW1lOmZpcnN0Jykub2Zmc2V0KCkudG9wIC0gbWV0YWRhdGFIZWlnaHRcbiAgICAgIGNvbnN0IG1heFcgPSAkKCcjdGhlYXRyZS1pYSAucm93Jykub3V0ZXJXaWR0aCgpXG4gICAgICAvLyBtYWtlIG1heCBoZWlnaHQgYXQgbW9zdCAxNng5IHJhdGlvICg0M3B4IGlzIHRoZSBwb3Bjb3JuIGNvbnRyb2xzIGhlaWdodClcbiAgICAgIGNvbnN0IFdIID0geyB3aWR0aDogbWF4VywgaGVpZ2h0OiBNYXRoLm1pbihtYXhILCAoKG1heFcgKiA5KSAvIDE2KSArIDQzKSB9XG4gICAgICBsb2coJ3BvcGNvcm4gcmVzaXplOiAnLCBXSClcbiAgICAgICQoJ2lmcmFtZTpmaXJzdCcpLmNzcyhXSCkgLy8gcmVzaXplIHBvcGNvcm5cbiAgICB9XG4gICAgcmVzaXplcigpIC8vIHBhZ2UgbG9hZCBldmVudCBpcyBub3dcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSAgb3JpZW50YXRpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoQUpTLnBvcGNvcm5fdGhyb3R0bGVyKVxuICAgICAgQUpTLnBvcGNvcm5fdGhyb3R0bGVyID0gc2V0VGltZW91dChyZXNpemVyLCAyNTApXG4gICAgfSlcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEEgZ2VuZXJhbCBwdXJwb3NlIHRoZWF0cmUgc2l6aW5nIGZ1bmN0aW9uLlxuICAgKiBJdCBrZWVwcyB0aGUgbWV0YWRhdGEgYmVsb3cgdGhlIHRoZWF0cmUgcGFydGlhbGx5IHZpc2libGUuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ2hhbmdlIC0gY2FsbGVkIHdoZW4gc2l6ZSBjaGFuZ2VzXG4gICAqIEBnbG9iYWwgQUpTLnRoZWF0cmVzaXplX21heGhlaWdodCBpZiB0aGlzIGlzIHNldCBieSBhbm90aGVyXG4gICAqICAgcGFydCBvZiB0aGUgY29kZSwgaXQgd2lsbCBjb250cmFpbiB0byB0aGlzIG1heCBoZWlnaHQuXG4gICAqL1xuICBzdGF0aWMgdGhlYXRyZXNpemUob25DaGFuZ2UpIHtcbiAgICBpZiAoIUFKUy50aGVhdHJlc2l6ZV9tYXhoZWlnaHQpXG4gICAgICBBSlMudGhlYXRyZXNpemVfbWF4aGVpZ2h0ID0gbnVsbFxuICAgIGNvbnN0IHJlc2l6ZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtZXRhZGF0YUhlaWdodCA9IDEwMCAvLyBtZXRhZGF0YSBwZWVrYWJvbyBtaW4gaGVpZ2h0IVxuICAgICAgY29uc3QgbWF4aW11bUhlaWdodCA9IDEwMDAgLy8gZG9uJ3QgZ2V0IGxhcmdlciB0aGFuIHRoaXNcbiAgICAgIGNvbnN0IG1pbkhlaWdodCA9IE1hdGgubWluKCQod2luZG93KS53aWR0aCgpLCA0MDApXG4gICAgICBsZXQgdGFyZ2V0SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gJCgnI25hdndyYXAxJykuaGVpZ2h0KCkgLSBtZXRhZGF0YUhlaWdodFxuXG4gICAgICBpZiAoQUpTLnRoZWF0cmVzaXplX21heGhlaWdodClcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gTWF0aC5taW4odGFyZ2V0SGVpZ2h0LCBBSlMudGhlYXRyZXNpemVfbWF4aGVpZ2h0KVxuXG4gICAgICB0YXJnZXRIZWlnaHQgPSBNYXRoLm1heCh0YXJnZXRIZWlnaHQsIG1pbkhlaWdodClcbiAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKHRhcmdldEhlaWdodCwgbWF4aW11bUhlaWdodClcbiAgICAgICQoJyN0aGVhdHJlLWlhLXdyYXAnKS5hZGRDbGFzcygncmVzaXplZCcpLmNzcygnaGVpZ2h0JywgaGVpZ2h0KVxuXG4gICAgICBpZiAob25DaGFuZ2UpXG4gICAgICAgIG9uQ2hhbmdlKCQoJyN0aGVhdHJlLWlhLXdyYXAnKS5oZWlnaHQoKSlcbiAgICB9XG4gICAgcmVzaXplcigpIC8vIHBhZ2UgbG9hZCBldmVudCBpcyBub3dcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSAgb3JpZW50YXRpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoQUpTLnRoZWF0cmVzaXplX3Rocm90dGxlcilcbiAgICAgIEFKUy50aGVhdHJlc2l6ZV90aHJvdHRsZXIgPSBzZXRUaW1lb3V0KHJlc2l6ZXIsIDI1MClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmVkdWNlIHRoZSB2ZXJ0aWNhbCBzaXplIG9mIHRoZSBjYXJvdXNlbCBvbmNlIGFsbCB0aGUgaW1hZ2VzIGhhdmVcbiAgICogZG93bmxvYWRlZCBhbmQgb25seSBpZiB0aGV5IGFyZSBhbGwgc21hbGxlciB0aGFuIHRoZSBjdXJyZW50IHNpemUuXG4gICAqIFRoaXMgaXMgYSBwcm9ncmVzc2l2ZSBlbmhhbmNlbWVudFxuICAgKiBAcGFyYW0gc3RyaW5nIHNlbGVjdG9yXG4gICAqIEBwYXJhbSBib29sIGVuYWJsZVRocmVhdHJlQ2hhbmdlXG4gICAqL1xuICBzdGF0aWMgY2Fyb3VzZWxzaXplKHNlbGVjdG9yLCBlbmFibGVUaHJlYXRyZUNoYW5nZSkge1xuICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoc2VsZWN0b3IpXG4gICAgY29uc3QgaW1hZ2VQcm9taXNlcyA9ICRjYXJvdXNlbC5maW5kKCdpbWcuY2Fyb3VzZWwtaW1hZ2UnKS5tYXAoKGksIGltZykgPT4ge1xuICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKVxuICAgICAgbGV0IHJlc3VsdFxuICAgICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICByZXN1bHQgPSBwcm9taXNlLnJlc29sdmUoaW1nLm5hdHVyYWxIZWlnaHQpLnByb21pc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGltZy5uYXR1cmFsSGVpZ2h0KVxuICAgICAgICB9KVxuICAgICAgICByZXN1bHQgPSBwcm9taXNlXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSlcbiAgICAkLndoZW4oLi4uaW1hZ2VQcm9taXNlcykudGhlbigoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgY3VyckhlaWdodCA9ICRjYXJvdXNlbC5oZWlnaHQoKVxuICAgICAgY29uc3QgbWF4SW1hZ2VIZWlnaHQgPSBNYXRoLm1heCguLi5hcmdzKVxuICAgICAgaWYgKGN1cnJIZWlnaHQgPiBtYXhJbWFnZUhlaWdodCkge1xuICAgICAgICAkY2Fyb3VzZWwuY3NzKCdtYXhIZWlnaHQnLCBtYXhJbWFnZUhlaWdodClcbiAgICAgICAgaWYgKGVuYWJsZVRocmVhdHJlQ2hhbmdlKSB7XG4gICAgICAgICAgQUpTLnRoZWF0cmVzaXplX21heGhlaWdodCA9IG1heEltYWdlSGVpZ2h0XG4gICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHBhdXNlKGlkID0gJ2p3NicpIHtcbiAgICBjb25zdCBqdyA9IGp3cGxheWVyKGlkKVxuICAgIGlmIChqdyAgJiYgIGp3LmdldFN0YXRlICAmJiAgancuZ2V0U3RhdGUoKS50b0xvd2VyQ2FzZSgpID09PSAncGxheWluZycpXG4gICAgICBqdy5wYXVzZSgpXG4gIH1cblxuXG4gIHN0YXRpYyBtb3JmKGxuaywgc3dpdGNoVG9BMlopIHsgLy8gTU9SZSBGYWNldHNcbiAgICBjb25zdCBocmVmID0gJChsbmspLmF0dHIoJ2hyZWYnKVxuXG4gICAgaWYgKHN3aXRjaFRvQTJaICAmJiAgc3dpdGNoVG9BMlpbMF0gPT09ICctJylcbiAgICAgICQuY29va2llKHN3aXRjaFRvQTJaLnN1YnN0cigxKS5jb25jYXQoJ0EyWicpLCAxLCB7IHBhdGg6ICcvJywgZXhwaXJlczogMSB9KVxuICAgIGVsc2UgaWYgKHN3aXRjaFRvQTJaKVxuICAgICAgJC5jb29raWUoc3dpdGNoVG9BMlouY29uY2F0KCdBMlonKSwgbnVsbCwgeyBwYXRoOiAnLycsIGV4cGlyZXM6IDEgfSlcblxuXG4gICAgY29uc3QgcHJvcHMgPSB7IHNlbGVjdG9ySUQ6ICdtb3JmLW1vZGFsJyB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgIyR7cHJvcHMuc2VsZWN0b3JJRH1gXG5cbiAgICBjb25zdCBjb250ZW50cyA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyIG1vZGFsLWhlYWRlci1zdGRcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbm9jaGl2ZS1yZW1vdmUtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlICBqc3gtYTExeS9oZWFkaW5nLWhhcy1jb250ZW50ICovfVxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgLz5cbiAgICAgICAgICAgIHsvKiBlc2xpbnQtZW5hYmxlICAganN4LWExMXkvaGVhZGluZy1oYXMtY29udGVudCAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBpZD17cHJvcHMuc2VsZWN0b3JJRC5jb25jYXQoJy1ib2R5Jyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KVxuICAgIGlmICghJChzZWxlY3RvcikubGVuZ3RoKVxuICAgICAgJCgnYm9keScpLnByZXBlbmQoJChgPGRpdiBpZD1cIiR7cHJvcHMuc2VsZWN0b3JJRH1cIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPmApKVxuXG4gICAgUmVhY3RET00ucmVuZGVyKGNvbnRlbnRzLCAkKHNlbGVjdG9yKS5nZXQoMCkpXG4gICAgJChzZWxlY3RvcikubW9kYWwoJ3Nob3cnKVxuXG4gICAgUmVhY3RET00ucmVuZGVyKDxBSlMuTU9SRnJlYWN0IGhyZWY9e2hyZWZ9IC8+LCAkKGAke3NlbGVjdG9yfS1ib2R5YCkuZ2V0KDApKVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBzdGF0aWMgYWRkMmxpc3QobG5rKSB7XG4gICAgY29uc3QgaHJlZiA9ICQobG5rKS5hdHRyKCdocmVmJylcblxuICAgICQuZ2V0KGAke2hyZWZ9JmhlYWRsZXNzPTEmdGl0bGVsaXN0PSR7JChsbmspLnRleHQoKX1gLCAoaHRtKSA9PiB7XG4gICAgICAvLyBkeW5hbWljYWxseSBhZGQgbW9kYWwgdG8gcGFnZSAoaWYgaXNudCB0aGVyZSBhbHJlYWR5KVxuICAgICAgQUpTLm1vZGFsX2dvKGxuaywge1xuICAgICAgICB0aXRsZTogJ0FkZCBUbyBMaXN0JyxcbiAgICAgICAgaGVhZGVyQ2xhc3M6ICdtb2RhbC1oZWFkZXItbmV3LWxpc3QnLFxuICAgICAgICBpZ25vcmVfbG5rOiB0cnVlLFxuICAgICAgICBhdXRvX3JlbW92ZTogdHJ1ZSxcbiAgICAgICAgYm9keTogaHRtLFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBzdGF0aWMgbmV3bGlzdChsbmspIHtcbiAgICBjb25zdCBocmVmID0gJChsbmspLmF0dHIoJ2hyZWYnKVxuXG4gICAgJC5nZXQoaHJlZi5jb25jYXQoJyZoZWFkbGVzcz0xJyksIChodG0pID0+IHtcbiAgICAgIC8vIGR5bmFtaWNhbGx5IGFkZCBtb2RhbCB0byBwYWdlIChpZiBpc250IHRoZXJlIGFscmVhZHkpXG4gICAgICBBSlMubW9kYWxfZ28obG5rLCB7XG4gICAgICAgIHRpdGxlOiAnQ3JlYXRlIE5ldyBMaXN0JyxcbiAgICAgICAgaGVhZGVyQ2xhc3M6ICdtb2RhbC1oZWFkZXItbmV3LWxpc3QnLFxuICAgICAgICBpZ25vcmVfbG5rOiB0cnVlLFxuICAgICAgICBib2R5OiBodG0sXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBuZXdsaXN0X3N1Ym1pdCgpIHtcbiAgICAvLyBTdHJpbmdzIHdpdGggU1BBQ0UgY2hhcmFjdGVycyB3aWxsIGJlIGNoYW5nZWQgdG8gXCJjYW1lbCBjYXNlXCIuXG4gICAgLy8gRm9yIGV4YW1wbGU6XG4gICAgLy8gICAgXCJteSBMQSByb2FkdHJpcFwiXG4gICAgLy8gd2lsbCBiZWNvbWU6XG4gICAgLy8gICAgXCJNeUxhUm9hZHRyaXBcIlxuICAgIC8vIExldHRlcnMsIG51bWJlcnMsIHBlcmlvZHMgKC4pLCBkYXNoZXMgKC0pLCBvciB1bmRlcnNjb3JlcyAoXykgYXJlIG9rLCBidXRcbiAgICAvLyBvdGhlciBjaGFyYWN0ZXJzIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICBjb25zdCB0aXRsZSA9ICQoJyNuZXctbGlzdC1mb3JtIGlucHV0W25hbWU9dGl0bGVdJykudmFsKClcbiAgICBpZiAoIXRpdGxlLmxlbmd0aCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBuby1hbGVydFxuICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHRpdGxlIGZvciB5b3VyIExpc3QnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gdHVybiB0aGUgdGl0bGUgaW50byBhbiBhY2NlcHRhYmxlIGlkZW50aWZpZXJcbiAgICAvLyAoMSkgcmVtb3ZlIGFueSBcImJhZFwiIGNoYXJzXG4gICAgLy8gKDIpIHRyaW0gYW55ICpsZWFkaW5nKiBjaGFycyBsaWtlOiAgLSBfIC5cbiAgICBjb25zdCBjbGVhbmVkID0gdGl0bGUucmVwbGFjZSgvW15hLXpBLVowLTlfXFwtLl0vZywgJycpLnJlcGxhY2UoL15bX1xcLS5dKy8sICcnKVxuICAgIGxvZyhjbGVhbmVkKVxuXG4gICAgaWYgKCFjbGVhbmVkLmxlbmd0aCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBuby1hbGVydFxuICAgICAgYWxlcnQoJ1BsZWFzZSB0cnkgYW5vdGhlciB0aXRsZSB0aGF0IGNvbnRhaW5zIG1vcmUgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN0YXRpYyBwb3BvdmVyX21lbnUoc2VsZWN0b3IsIG9wdHMpIHtcbiAgICAvLyBzZXR1cCBvcHRpb25zXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRyaWdnZXI6ICdob3ZlciBmb2N1cyBjbGljaycsIC8vIG1ha2UgYWNjZXNzaWJsZVxuICAgICAgY29udGFpbmVyOiBzZWxlY3RvcixcbiAgICAgIGNvbnRlbnQ6IG9wdHMuY29udGVudCxcbiAgICAgIGh0bWw6IHRydWUsXG4gICAgfVxuICAgIC8vIGRvIG5vdCBvdmVyd3JpdGUgdmFsdWVzIGdpdmVuIGJ5IHRoZSAnZGF0YS0nIGF0dHJpYnV0ZVxuICAgIGlmIChvcHRzLnRpdGxlKVxuICAgICAgb3B0aW9ucy50aXRsZSA9IG9wdHMudGl0bGVcbiAgICBpZiAob3B0cy5wbGFjZW1lbnQpXG4gICAgICBvcHRpb25zLnBsYWNlbWVudCA9IG9wdHMucGxhY2VtZW50XG4gICAgaWYgKG9wdHMudHJpZ2dlcilcbiAgICAgIG9wdGlvbnMudHJpZ2dlciA9IG9wdHMudHJpZ2dlclxuXG4gICAgLy8gc2V0dXAgcG9wb3ZlclxuICAgICQoc2VsZWN0b3IpLnBvcG92ZXIob3B0aW9ucylcbiAgfVxuXG5cbiAgLy8gbWFrZXMgdGhlIHRvb2x0aXAgc2hvdyBmb3IgcGlja2luZyBkYXRlc1xuICBzdGF0aWMgZGF0ZV9zd2l0Y2hlcihodG0pIHtcbiAgICBjb25zdCBzZWxlY3RvciA9ICcjZGF0ZV9zd2l0Y2hlcidcblxuICAgIC8vIG1ha2UgYSB0b29sdGlwIHRyaWdnZXIgbWFudWFsbHksIG9uIGhvdmVyLCBidXQgdGhlbiAqaG9sZCBpdCBzaG93aW5nKlxuICAgIC8vIHVudGlsIHRoZXkgbGVhdmUgYXJlYSAqaW5jbHVkaW5nKiB0b29sdGlwIGl0c2VsZlxuICAgICQoc2VsZWN0b3IpLnRvb2x0aXAoe1xuICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgIHRyaWdnZXI6ICdtYW51YWwnLCAvLyB3ZSBnb25uYSBjb250cm9sIGhvdmVyIGJlaGF2aW91clxuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIHRpdGxlOiBodG0sXG4gICAgfSkub24oJ21vdXNlZW50ZXIgZm9jdXNpbicsIGZ1bmN0aW9uIGRhdGVfc3dpdGNoZXJfaG92ZXIoKSB7XG4gICAgICAvLyBjaGVjayBmaXJzdCBpZiBhbHJlYWR5IHNob3dpbmcsIHRvIGF2b2lkIFwiZmxpY2tlcmluZ1wiIHdpdGggXCJzaG93ISAuLiBzaG93IVwiXG4gICAgICBpZiAoISgkKHNlbGVjdG9yKS5wYXJlbnQoKS5maW5kKCcudG9vbHRpcCcpLmxlbmd0aCkpXG4gICAgICAgICQodGhpcykudG9vbHRpcCgnc2hvdycpXG4gICAgfSlcblxuXG4gICAgLy8gdGhlIGRhdGVfc3dpdGNoZXIgbGl2ZXMgaW5zaWRlIGJpZ2dlciBcInNvcnRiYXJcIi4gIHRoZSBkYXRlIGNoYW5naW5nIHRvb2x0aXBcbiAgICAvLyBsaXZlcyBpbnNpZGUgaXQgKGFuZCBoYW5ncyBvZmYgaXQpLiAgU28gd2hhdCB3ZSAqcmVhbGx5KiB3YW50IGFzIHRoZSB0cmlnZ2VyXG4gICAgLy8gdG8gaGlkZSB0aGUgZGF0ZSBjaGFuZ2UgdG9vbHRpcCBpcyB0aGUgZW50aXJlIHNvcnRiYXIgaXRzZWxmLiAgbmljZSFcbiAgICAkKCcuc29ydGJhcicpLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgbG9nKCdub3QgaG92ZXJpbmcgc29ydGJhciBhbnltb3JlJylcbiAgICAgICQoc2VsZWN0b3IpLnRvb2x0aXAoJ2hpZGUnKVxuICAgIH0pXG5cblxuICAgICQoc2VsZWN0b3IpLm9uKCdzaG93bi5icy50b29sdGlwJywgKCkgPT4ge1xuICAgICAgLy8gbWFrZSBhbnkgbGluayBoaXQgY2hhbmdlIHdoaWNoIG9uZSBpcyBcImluXCJcbiAgICAgIC8vIChqdXN0IGJlZm9yZSBwYWdlIHN0YXJ0cyB0byByZWxvYWQpICBmaW5lc3NlIVxuICAgICAgJChzZWxlY3RvcikucGFyZW50KCkuZmluZCgnLmRhdGVfc3dpdGNoZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiBkYXRlX3N3aXRjaGVyX2NsaWNrKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy50b29sdGlwJykuZmluZCgnLmRhdGVfc3dpdGNoZXIuaW4nKS5yZW1vdmVDbGFzcygnaW4nKVxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbicpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuXG4gIC8vIE5PVEU6IFVOVVNFRCBCVVQgS0VQVCBJTiBDQVNFIFdFIEVWRVIgR08gQkFDSyBGUk9NIE5FV0VSL0JFVFRFUiBDU1MtT05MWSBTT0xVVElPTiFcbiAgLy9cbiAgLy8gWyBOb3cgd2UgdXNlIENTUyB0byAobWF4LS8pd2lkdGggQzIgYW5kIEM0ICppbnN0ZWFkKiBmb3IgYSBtdWNoIGJldHRlciB1c2VyIGV4cGVyaWVuY2VcbiAgLy8gICBBTkQgZm9yIGEgbW9yZSBlZmZpY2llbnQgLyBraW5kZXIgdG8gYnJvd3NlciBub24tSlMgc29sdXRpb24hIF1cbiAgc3RhdGljIHRpbGVzX3RvX2xpc3QoKSB7XG4gICAgLypcbiAgICAgIEZpcnN0LCBhbGxvdyBuYXR1cmFsIEhUTS9DU1Mgd2lkdGhzIG9mIDMgb2YgNSBcInRhYmxlLWNlbGxcIiBkaXNwbGF5IHR5cGUgY29sdW1uc1xuICAgICAgICBDMSAgICAgICAgIEMyMzQgICAgICBDNVxuICAgICAgICBWSUVXUyAgLi4gIERBVEUgIC4uICBNVC1JQ09OXG5cbiAgICAgICAgQ29tcHV0ZSB3aWR0aCBvZiBcIkMyMzRcIiAtIHdpZHRoIG9mIEMzL0RBVEUuXG4gICAgICAgIFNwbGl0IFRJVExFIChDMikgYW5kIENSRUFUT1IgKEM0KSBtYXgtd2lkdGggaW50b1xuICAgICAgICA2MCUgLyA0MCUgc3BsaXQgb2YgdGhhdCAjcGl4ZWxzLlxuICAgICovXG5cbiAgICAvLyBOT1RFOiB0aGVyZSBjYW4gYmUgMisgc2V0cyBvZiByZXN1bHRzIG9uIGEgcGFnZSAtLSBlZzogXCJNeSBMaWJyYXJ5XCIgcGFnZSFcbiAgICBjb25zdCBzZWxlY3RvciA9IEFKUy5zZWxlY3RvcigpXG4gICAgY29uc3QgJHNlbGVjdG9yID0gJChzZWxlY3RvcikuZmlyc3QoKVxuICAgIGxvZygnbGlzdGVyKCkgU0VMRUNUT1InLCBzZWxlY3RvcilcblxuICAgIGNvbnN0IEMzICAgPSAkc2VsZWN0b3IuZmluZCgnLnJlc3VsdHMgLml0ZW0taWE6Zmlyc3QgICAuQzMnKS5vdXRlcldpZHRoKClcbiAgICBjb25zdCBDMjM0ID0gJHNlbGVjdG9yLmZpbmQoJy5yZXN1bHRzIC5pdGVtLWlhOmZpcnN0IC5DMjM0Jykub3V0ZXJXaWR0aCgpXG5cbiAgICAvLyB0aGUgXCItMjBcIiB3YXMgZW1waXJpY2FsbHkgb2JzZXJ2ZWQgLyBtYWRlIHVwIC0tIGdldCBzb21lIHNjaWVuY2UsIGdpcmwhXG4gICAgY29uc3QgYXZhaWxXaWR0aCA9IChDMjM0IC0gQzMpIC0gMjBcbiAgICBjb25zdCBDMiA9IE1hdGgubWF4KDgwLCBNYXRoLnJvdW5kKDAuNiAqIGF2YWlsV2lkdGgpKVxuICAgIGNvbnN0IEM0ID0gTWF0aC5tYXgoODAsIE1hdGgucm91bmQoMC40ICogYXZhaWxXaWR0aCkpXG4gICAgbG9nKCdDMyAgJywgICBDMylcbiAgICBsb2coJ0MyMzQnLCBDMjM0KVxuICAgIGxvZygnQzIgICcsICAgQzIpXG4gICAgbG9nKCdDNCAgJywgICBDNClcbiAgICBsb2coJyA9PT4gYXZhaWxXaWR0aDogJywgYXZhaWxXaWR0aCwgJygnLCBDMiwgJysnLCBDNCwgJyknKVxuXG4gICAgJHNlbGVjdG9yLmZpbmQoJy5yZXN1bHRzIC5pdGVtLWlhIC5DMicpLmNzcyh7IHdpZHRoOiBDMiwgJ21heC13aWR0aCc6IEMyIH0pXG4gICAgJHNlbGVjdG9yLmZpbmQoJy5yZXN1bHRzIC5pdGVtLWlhIC5DNCcpLmNzcyh7IHdpZHRoOiBDNCwgJ21heC13aWR0aCc6IEM0IH0pXG4gIH1cblxuXG4gIC8vIFdlIG1vdmVkIHRvIG5ld2VyIHRhY3RpYyBNYXIyMDE1Li4uXG4gIC8vIFBhZ2VzIGFyZSBlbWl0dGVkIGJ5IGRlZmF1bHQgd2l0aCBib2R5IGNsYXNzZXMgXCJsaXN0c1wiIGFuZCBcInNob3dkZXRhaWxzXCIuXG4gIC8vIFdlIHVzZSBKUyB0byB0b2dnbGUvcmVtb3ZlIHRoZW0gYW5kIHN3aXRjaCBvZmYgZGV0YWlscyBvciBzd2l0Y2ggdG8gXCJ0aWxlc1wiIG1vZGUuXG4gIHN0YXRpYyBsaXN0c192X3RpbGVzX3NldHVwKGNvb2tpZV9yYW5nZSkge1xuICAgIC8vIGRvZXMgdXNlciBoYXZlIGFueSBjb29raWVkIHByZWZlcmVuY2VzP1xuICAgIGNvbnN0IGRlZmF1bHRzICAgID0gJ3RpbGVzJyAvLyAoY29va2llX3JhbmdlID09PSAnc2VhcmNoJyA/ICdsaXN0cycgOiAndGlsZXMnKVxuICAgIGNvbnN0IHByZWZlciAgICAgID0gKCQuY29va2llKGB2aWV3LSR7Y29va2llX3JhbmdlfWApKVxuICAgIGNvbnN0IHNob3dkZXRhaWxzID0gKCQuY29va2llKGBzaG93ZGV0YWlscy0ke2Nvb2tpZV9yYW5nZX1gKSlcblxuICAgIGNvbnN0IGNoZWNrZWQgPSAoc2hvd2RldGFpbHMgPT09ICdzaG93ZGV0YWlscycgIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHNob3dkZXRhaWxzID09PSBudWxsICAmJiAgZGVmYXVsdHMgPT09ICdsaXN0cycpKVxuXG4gICAgaWYgKHByZWZlciA9PT0gJ2xpc3RzJyAgfHwgICghcHJlZmVyICAmJiAgZGVmYXVsdHMgPT09ICdsaXN0cycpKSB7XG4gICAgICBpZiAoY2hlY2tlZClcbiAgICAgICAgcmV0dXJuIC8vIHBlcmZlY3QsIHdlIGFyZSBhbHJlYWR5IHdoYXQgdGhleSB3YW50XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Nob3dkZXRhaWxzJykgLy8gdGhleSBkb250IHdhbnQgZnVsbCBkZXRhaWxzIHJpZ2h0IG5vd1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzd2l0Y2ggdG8gXCJ0aWxlc1wiIG1vZGVcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGlzdHMnLmNvbmNhdChjaGVja2VkID8gJycgOiAnIHNob3dkZXRhaWxzJykpLmFkZENsYXNzKCd0aWxlcycpXG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgc2hvd2RldGFpbHNfdG9nZ2xlKGJ0biwgY29va2llX3JhbmdlKSB7XG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcblxuICAgIGNvbnN0IHRvID0gKCRib2R5Lmhhc0NsYXNzKCdzaG93ZGV0YWlscycpID8gJycgOiAnc2hvd2RldGFpbHMnKVxuICAgIGxvZygnc2hvd2RldGFpbHNfdG9nZ2xlKCkgZ29pbmcgdG86ICcsIHRvKVxuXG4gICAgJC5jb29raWUoYHNob3dkZXRhaWxzLSR7Y29va2llX3JhbmdlfWAsIHRvLCB7IHBhdGg6ICcvJywgZXhwaXJlczogMzAsIGRvbWFpbjogJy5hcmNoaXZlLm9yZycgfSlcblxuICAgICRib2R5LnRvZ2dsZUNsYXNzKCdzaG93ZGV0YWlscycpXG4gIH1cblxuXG4gIHN0YXRpYyB0aWxlc190b2dnbGUoYnRuLCBjb29raWVfcmFuZ2UpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuXG4gICAgY29uc3QgdG8gPSAoJGJvZHkuaGFzQ2xhc3MoJ3RpbGVzJykgPyAnbGlzdHMnIDogJ3RpbGVzJylcbiAgICBsb2coJ3RpbGVzX3RvZ2dsZSgpIGdvaW5nIHRvJywgdG8pXG5cbiAgICAkYm9keS5yZW1vdmVDbGFzcygnbGlzdHMgdGlsZXMnKS5hZGRDbGFzcyh0bylcbiAgICBBSlMudGlsZXIoKVxuXG4gICAgJC5jb29raWUoYHZpZXctJHtjb29raWVfcmFuZ2V9YCwgdG8sIHsgcGF0aDogJy8nLCBleHBpcmVzOiAzMCwgZG9tYWluOiAnLmFyY2hpdmUub3JnJyB9KVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuXG4gIC8vIFJldHVybnMgb25lIG9mIHRoZXNlLCBsaWtlIFwiI2lraW5kLVtJS0lORF1cIlxuICAvL1xuICAvLyBDT0xMRUNUSU9OIFBBR0VTLCBBQ0NPVU5UIFBBR0VTOlxuICAvL1xuICAvLyAgICNpa2luZC0tZG93bmxvYWRzXG4gIC8vICAgI2lraW5kLS10aXRsZVNvcnRlclxuICAvLyAgICNpa2luZC0tcHVibGljZGF0ZVxuICAvLyAgICNpa2luZC0tZGF0ZVxuICAvLyAgICNpa2luZC0tcmV2aWV3ZGF0ZVxuICAvLyAgICNpa2luZC0tdXBkYXRlZGF0ZVxuICAvLyAgICNpa2luZC0tY3JlYXRvclNvcnRlclxuICAvL1xuICAvLyAgICNpa2luZC1kb3dubG9hZHNcbiAgLy8gICAjaWtpbmQtdGl0bGVTb3J0ZXJcbiAgLy8gICAjaWtpbmQtcHVibGljZGF0ZVxuICAvLyAgICNpa2luZC1kYXRlXG4gIC8vICAgI2lraW5kLXJldmlld2RhdGVcbiAgLy8gICAjaWtpbmQtdXBkYXRlZGF0ZVxuICAvLyAgICNpa2luZC1jcmVhdG9yU29ydGVyXG4gIC8vXG4gIC8vIEFDQ09VTlQgUEFHRVMgKGFkZGl0aW9uYWxseSk6XG4gIC8vXG4gIC8vICAgI2lraW5kLWxvYW5zLXdhaXRpbmctbGlzdFxuICAvLyAgICNpa2luZC1sb2Fucy1vbi1sb2FuXG4gIC8vICAgI2lraW5kLWxvYW5zLWhpc3RvcnlcbiAgLy9cbiAgLy8gT1RIRVI6XG4gIC8vXG4gIC8vICAgI2lraW5kLXNlYXJjaCAgICAgICAgICAgICAgKHNlYXJjaClcbiAgLy9cbiAgc3RhdGljIHNlbGVjdG9yKCkge1xuICAgIGNvbnN0IGluVGFiID0gJCgnLndlbGNvbWUgLnRhYmJ5LmluIC50YWJieS10ZXh0JylcbiAgICAgIC5maXJzdCgpXG4gICAgICAudGV4dCgpXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnRyaW0oKVxuICAgIGlmIChpblRhYiA9PT0gJ2ZvcnVtJyAgfHwgIGluVGFiID09PSAncG9zdHMnICB8fCAgaW5UYWIgPT09ICdhYm91dCcpXG4gICAgICByZXR1cm4gZmFsc2UgLy8gbm8gdGFiIG9mIHRpbGVzIGFyZSBzaG93aW5nXG5cbiAgICBsZXQgc2VsZWN0b3IgPSBmYWxzZVxuICAgIGlmIChpblRhYikge1xuICAgICAgLy8gV2Ugd2FudCB0byBlbmQgdXAgd2l0aCBhIHNlbGVjdG9yIGxpa2U6XG4gICAgICAvLyAgICAjaWtpbmQtY29sbGVjdGlvbnMtdGl0bGVcbiAgICAgIC8vICAgICNpa2luZC0tcHVibGljZGF0ZVxuICAgICAgbG9nKCdpblRhYicsIGluVGFiKVxuICAgICAgY29uc3QgdG1wID0gYCN0YWJieS0ke2luVGFiLnJlcGxhY2UoJyAnLCAnLScpfWBcbiAgICAgIGlmIChpblRhYiA9PT0gJ2NvbGxlY3Rpb24nICB8fCAgaW5UYWIgPT09ICdjb2xsZWN0aW9ucycgIHx8ICBpblRhYiA9PT0gJ3VwbG9hZHMnIHx8IGluVGFiID09PSAncmV2aWV3cycgfHwgaW5UYWIgPT09ICd3ZWIgYXJjaGl2ZXMnKSB7XG4gICAgICAgIHNlbGVjdG9yID0gJyMnLmNvbmNhdCgkKHRtcC5jb25jYXQoJyBkaXYuaWtpbmQuaW46Zmlyc3QnKSkuYXR0cignaWQnKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGlraW5kID0gJCh0bXAuY29uY2F0KCcgLmlraW5kLnN0ZWFsdGguaW46Zmlyc3QnKSkudGV4dCgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC8sICctJylcbiAgICAgICAgc2VsZWN0b3IgPSBgI2lraW5kLSR7aW5UYWJ9JHtpa2luZCA9PT0gJycgPyAnJyA6ICctJ30ke2lraW5kfWBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2Ugd2FudCB0byBlbmQgdXAgd2l0aCBhIHNlbGVjdG9yIGxpa2U6XG4gICAgICAvLyAgICAjaWtpbmQtZGF0ZVxuICAgICAgc2VsZWN0b3IgPSAnI2lraW5kLScuY29uY2F0KCQoJy5pa2luZC5zdGVhbHRoLmluOmZpcnN0JykudGV4dCgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC8sICctJykpXG4gICAgICBpZiAoISQoc2VsZWN0b3IpLmxlbmd0aCkgc2VsZWN0b3IgPSAnI2lraW5kLXNlYXJjaCcgLy8geHh4ICBTSE9SRSBUSElTIFVQLCBHSVJMIVxuICAgIH1cblxuICAgIGxvZygnU0VMRUNUT1InLCBzZWxlY3RvcilcblxuICAgIHJldHVybiBzZWxlY3RvclxuICB9XG5cblxuICAvLyBmdW5jdGlvbiB0aGF0IGZpbmRzIGFsdGVybmF0ZSAobm9uLUFKUy50aWxlcigpKSBzZXRzIG9mIGl0ZW0gdGlsZXMsXG4gIC8vIHRoYXQgYXJlIGxhaWQgb3V0IGluIHN0cmlwcy9jb2x1bW5zIGFuZCB3aWxsIGhpZGUgZW50aXJlIGNvbHVtbnNcbiAgLy8gaWYgdGhleSBmYWxsIG9mZiB0aGUgcmlnaHQgc2lkZSwgaW4gdGVybXMgb2YgZml0dGluZyB0byBicm93c2VyL3BhZ2Ugd2lkdGhcbiAgc3RhdGljIHRpbGViYXJzKCkge1xuICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgcm93IGNsYXNzZXMgdGhhdCBoYXZlIGF0IGxlYXN0IDEgLnRpbGViYXJzIC5yZXN1bHRzIGRpdiBpbiB0aGVtLi4uXG4gICAgJCgnLnJvdyAudGlsZWJhcnMnKS5maW5kKCcucmVzdWx0cycpLnBhcmVudHMoJy5yb3cnKS5lYWNoKChrLCByb3cpID0+IHtcbiAgICAgIGxldCBmaXJzdCA9IGZhbHNlXG4gICAgICAkKHJvdykuZmluZCgnLnJlc3VsdHMnKS5lYWNoKChrZXksIHZhbCkgPT4ge1xuICAgICAgICAkKHZhbCkuc2hvdygpLmNzcyh7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pXG4gICAgICAgIGlmICghZmlyc3QpXG4gICAgICAgICAgZmlyc3QgPSAkKHZhbCkub2Zmc2V0KClcbiAgICAgICAgaWYgKCQodmFsKS5vZmZzZXQoKS50b3AgIT09IGZpcnN0LnRvcClcbiAgICAgICAgICAkKHZhbCkuaGlkZSgpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkKHZhbCkuY3NzKHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pXG4gICAgICB9KVxuICAgICAgLy8gaWYgKGZpcnN0KSAkKHJvdykuZmluZCgnLnRpbGViYXJzID4gaDQnKS5jc3MoeydwYWRkaW5nLWxlZnQnOmZpcnN0LmxlZnQrMTB9KVxuICAgIH0pXG4gIH1cblxuXG4gIC8vIGFkZHMgY29sbGVjdGlvbiBwYXJlbnQgaG92ZXJpbmcgaW1hZ2UgYW5kIHRleHQgdG8gdGlsZXNcbiAgc3RhdGljIHBhcmVudF9ob3Zlcigkc2VsZWN0b3IpIHtcbiAgICAkc2VsZWN0b3IuZmluZCgnLml0ZW0taWE6bm90KC5ob3YpOm5vdCguY29sbGVjdGlvbi1pYSk6bm90KC5hY2NvdW50LWlhKScpLmFkZENsYXNzKCdob3YnKVxuICAgICAgLm1vdXNlb3ZlcigoZSA9PiAkKGUuY3VycmVudFRhcmdldCkuZmluZCgnLml0ZW0tcGFyZW50JykuYWRkQ2xhc3MoJ2hvdmVyaW4nKSkpXG4gICAgICAubW91c2VvdXQoKGUgID0+ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKCcuaXRlbS1wYXJlbnQnKS5yZW1vdmVDbGFzcygnaG92ZXJpbicpKSlcbiAgfVxuXG5cbiAgc3RhdGljIHRpbGVyKHNlbGVjdG9ySW4sIG5vUmVjYWxsKSB7XG4gICAgY29uc3QgdGlsZU1hcmdpbkggPSAzMFxuICAgIGNvbnN0IHRpbGVNYXJnaW5XID0gMTdcblxuXG4gICAgLy8gU2VlIGxpc3RlcigpIGZvciB3aHkgdGhpcyBpcyBhYmxlIHRvIGJlIGNvbW1lbnRlZCBvdXQgbm93IVxuICAgIC8vICQoJy5yZXN1bHRzIC5pdGVtLWlhIC5DMiwgLnJlc3VsdHMgLml0ZW0taWEgLkM0JykuY3NzKHsnd2lkdGgnOicnLCdtYXgtd2lkdGgnOicnfSk7XG4gICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ3RpbGVzJykpIHtcbiAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3Nob3dkZXRhaWxzJykpXG4gICAgICAgICQoJy5zb3J0YmFyIGlucHV0W25hbWU9c2hvd2RldGFpbHNdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpXG4gICAgICAvLyBBSlMubGlzdGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RvciA9IChzZWxlY3RvckluICB8fCAgQUpTLnNlbGVjdG9yKCkpXG4gICAgaWYgKHNlbGVjdG9yID09PSBmYWxzZSlcbiAgICAgIHJldHVyblxuXG5cbiAgICBjb25zdCAkc2VsZWN0b3IgPSAkKHNlbGVjdG9yKS5maXJzdCgpXG4gICAgY29uc3Qgc2VsZWN0b3JJRCA9ICRzZWxlY3Rvci5hdHRyKCdpZCcpXG4gICAgY29uc3QgJHBhcmVudFJvdyA9ICRzZWxlY3Rvci5wYXJlbnRzKCcucm93JylcblxuICAgIC8vIENTUyBHcmlkIHRpbGVyIGV4cGVyaW1lbnQuICBPRkYvdW51c2VkLlxuICAgIC8vIFRoaXMgY291bGQgYmUgYSB3YXkgdG8gZHJvcCBtdWNoIG9mIHRoZSBKUyB0byBkbyBvdXIgJ21hc29uaWMnIHRpbGluZyBieSBsZXZlcmFnaW5nXG4gICAgLy8gQ1NTIEdyaWQgcm93ICdzdHJpcHMnIGFuZCBzcGFjZSB0aGUgdGlsZSB0byB0aGUgY2xvc2VzdCBvdmVyYWxsIGhlaWdodCBvZiBuYXJyb3cgcm93c1xuICAgIC8vIGluc3RlYWQgb2YgSlMtYmFzZWQgY2FsY3VsYXRpb25zIGZvciBhYnNvbHV0ZSAndG9wJyBwb3NpdGlvbmluZy5cbiAgICBjb25zdCBjc3NHcmlkID0gKGZhbHNlICAmJiAgJCgnYm9keScpLmhhc0NsYXNzKCdkZXZib3gnKSAgJiYgIENTUy5zdXBwb3J0cygnZGlzcGxheScsICdncmlkJykpXG5cblxuICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCd0aWxlcycpKSB7XG4gICAgICAkcGFyZW50Um93LmNzcyh7ICdwYWRkaW5nLWxlZnQnOiAnJywgJ3BhZGRpbmctcmlnaHQnOiAnJyB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICBpZiAoIUFKUy50aWxlclBSRVYpIHtcbiAgICAgIC8vIGZpcnN0IHRpbWUgdGlsaW5nIHBhZ2UhXG4gICAgICBBSlMudGlsZXJQUkVWID0ge1xuICAgICAgICB3aW5XOiAwLFxuICAgICAgICBwYWQ6IDAsXG4gICAgICAgIG5QZXJSb3c6IDEsXG4gICAgICAgIGd1dHRlcjogdGlsZU1hcmdpblcsXG4gICAgICAgIHRpbGVXaWR0aDogQUpTLlRJTEVfV0lEVEgsXG4gICAgICAgIHVuc291cmNlZDoge30sXG4gICAgICAgIGZpcnN0TGVmdDogMCxcbiAgICAgIH1cblxuICAgICAgQUpTLnBhcmVudF9ob3Zlcigkc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBBSlMudGlsZXJQUkVWLndpblcpIHtcbiAgICAgIC8vIEZpcnN0IHRpbWUsIG9yIHBhZ2UgcmVzaXplL29yaWVudGF0aW9uIGNoYW5nZS5cbiAgICAgIC8vIFdlIHdpbGwgZWZmZWN0aXZlbHkgXCJjYWNoZVwiIGFsbCB0aGlzIGFkanVzdGluZyBjb21wdXRhdGlvbnMsIHNvIG11bHRpcGxlIGNhbGxzIHRvIHRpbGVyKClcbiAgICAgIC8vIGNhbiByZXVzZSBpZiB3aW5kb3cgd2lkdGggaGFzbnQgY2hhbmdlZFxuICAgICAgLy8gKGZvciBlZmZpY2llbmN5LCBlZzogbWFueSBpbWFnZXMgc3RpbGwgc2xvd2x5IGxvYWRpbmcuLilcbiAgICAgICRwYXJlbnRSb3cuY3NzKHsgJ3BhZGRpbmctbGVmdCc6ICcnLCAncGFkZGluZy1yaWdodCc6ICcnIH0pIC8vIHJlc2V0IChzZWUgYmVsb3cpXG4gICAgICBBSlMudGlsZXJQUkVWLmZpcnN0TGVmdCA9IDAgIC8vIHJlc2V0IChzZWUgYmVsb3cpXG5cbiAgICAgIGNvbnN0ICRmYWNldHMgPSAkcGFyZW50Um93LmZpbmQoJy5jb2x1bW5zLWZhY2V0czp2aXNpYmxlJylcbiAgICAgIGxldCBmYWNldHNXaWR0aCA9ICRmYWNldHMub3V0ZXJXaWR0aCgpICB8fCAgMFxuICAgICAgaWYgKGZhY2V0c1dpZHRoKVxuICAgICAgICBmYWNldHNXaWR0aCArPSAxICsgcGFyc2VJbnQoJGZhY2V0cy5jc3MoJ3BhZGRpbmctcmlnaHQnKSwgMTApIC8vIGFkZCBjb2x1bW5zLWl0ZW1zIGd1dHRlclxuICAgICAgY29uc3QgYXZhaWxXaWR0aCA9ICRwYXJlbnRSb3cud2lkdGgoKSAtIGZhY2V0c1dpZHRoXG4gICAgICBjb25zdCBndXR0ZXIgPSAoYXZhaWxXaWR0aCA8IDQwMCA/IDUgOiB0aWxlTWFyZ2luVylcbiAgICAgIGNvbnN0IHRpbGVXaWR0aCA9ICgkKCcuaXRlbS1pYTpmaXJzdCcpLm91dGVyV2lkdGgoKSA+PSBBSlMuVElMRV9XSURUSCA/IEFKUy5USUxFX1dJRFRIIDogQUpTLlRJTEVfV0lEVEhfU01BTEwpXG4gICAgICBjb25zdCBuUGVyUm93ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcigoYXZhaWxXaWR0aCArIGd1dHRlcikgLyAodGlsZVdpZHRoICsgZ3V0dGVyKSkpXG4gICAgICBjb25zdCBleHRyYSAgID0gTWF0aC5tYXgoMCwgKGF2YWlsV2lkdGggLSAoblBlclJvdyAqICh0aWxlV2lkdGggKyBndXR0ZXIpKSkgKyBndXR0ZXIpXG5cbiAgICAgIGxvZyhcbiAgICAgICAgJ3RpbGluZycsIHNlbGVjdG9ySUQsXG4gICAgICAgICdwYXJlbnRSb3dXJywgJHBhcmVudFJvdy53aWR0aCgpLFxuICAgICAgICAnZmFjZXRzV2lkdGgnLCBmYWNldHNXaWR0aCxcbiAgICAgICAgJ2F2YWlsV2lkdGg6ICcsIGF2YWlsV2lkdGgsXG4gICAgICAgICdudW1iZXIgcGVyIHJvdycsIG5QZXJSb3csICcuICcsXG4gICAgICAgICdXaXRoIGd1dHRlciBtYXJnaW4nLCBndXR0ZXIsXG4gICAgICAgICdoYWQgJywgZXh0cmEsICdleHRyYSBwaXhlbHMnLFxuICAgICAgKVxuICAgICAgQUpTLnRpbGVyUFJFVi5wYWQgPSBNYXRoLnJvdW5kKGV4dHJhIC8gMilcblxuICAgICAgQUpTLnRpbGVyUFJFVi53aW5XID0gJCh3aW5kb3cpLndpZHRoKClcbiAgICAgIEFKUy50aWxlclBSRVYublBlclJvdyA9IG5QZXJSb3dcbiAgICAgIEFKUy50aWxlclBSRVYuZ3V0dGVyID0gZ3V0dGVyXG4gICAgICBBSlMudGlsZXJQUkVWLnRpbGVXaWR0aCA9IHRpbGVXaWR0aFxuICAgIH1cblxuICAgIGlmICghY3NzR3JpZCkge1xuICAgICAgaWYgKEFKUy50aWxlclBSRVYublBlclJvdyA+IDEpXG4gICAgICAgICRwYXJlbnRSb3cuY3NzKHsgJ3BhZGRpbmctbGVmdCc6IEFKUy50aWxlclBSRVYucGFkLCAncGFkZGluZy1yaWdodCc6IEFKUy50aWxlclBSRVYucGFkIH0pXG4gICAgICBlbHNlXG4gICAgICAgIEFKUy50aWxlclBSRVYuZmlyc3RMZWZ0ID0gQUpTLnRpbGVyUFJFVi5wYWRcbiAgICB9XG5cbiAgICBsZXQgbkltZ1plcm9IZWlnaHQgPSAwXG4gICAgY29uc3QgbkltZ1plcm9IZWlnaHRBcnkgPSBbXVxuICAgIGxldCBtYXh0b3AgPSAwXG4gICAgY29uc3QgdG9wcyA9IHsgMDogMCB9XG4gICAgY29uc3QgbGVmdHMgPSB7IDA6IEFKUy50aWxlclBSRVYuZmlyc3RMZWZ0IH1cbiAgICBpZiAoIWNzc0dyaWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgQUpTLnRpbGVyUFJFVi5uUGVyUm93OyBpKyspIHtcbiAgICAgICAgbGVmdHNbaV0gPSBsZWZ0c1tpIC0gMV0gKyBBSlMudGlsZXJQUkVWLmd1dHRlciArIEFKUy50aWxlclBSRVYudGlsZVdpZHRoXG4gICAgICAgIHRvcHNbaV0gPSAwXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBBbnkgaXRlbSB0aWxlcyB3LyB1bmxvYWRlZC9zZXQgc3JjIHRhZ3MgZ2V0IHVwZGF0ZWQgYW5kIGxvYWRlZCBub3chXG4gICAgLy8gT25seSBoYXZlIHRvIGRvIHRoaXMgcGFzcyBvbiBhIHN3YXRoZSBvZiBuZXcgcmVzdWx0cyAoMXN0IHBhZ2Ugb3IgaW5maW4gc2Nyb2xsIHNldCBhZGRlZClcbiAgICBpZiAoIUFKUy50aWxlclBSRVYudW5zb3VyY2VkW3NlbGVjdG9ySURdKSB7XG4gICAgICBsb2coJ3Vuc291cmNpbmcnLCBzZWxlY3RvcklEKVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBwcmVmZXItYXJyb3ctY2FsbGJhY2tcbiAgICAgICRzZWxlY3Rvci5maW5kKCcuaXRlbS1pYSBpbWdbc291cmNlXScpLmVhY2goZnVuY3Rpb24gdGlsZXJfdW5zb3VyY2luZyhrLCB2KSB7XG4gICAgICAgICQodikuYXR0cih7XG4gICAgICAgICAgc3JjOiAkKHYpLmF0dHIoJ3NvdXJjZScpLFxuICAgICAgICAgIG9uRXJyb3I6ICckKHRoaXMpLmF0dHIoXCJzcmNcIixcIi9pbWFnZXMvbm90Zm91bmQucG5nXCIpJyxcbiAgICAgICAgfSkucmVtb3ZlQXR0cignc291cmNlJylcbiAgICAgIH0pXG4gICAgICBBSlMudGlsZXJQUkVWLnVuc291cmNlZFtzZWxlY3RvcklEXSA9IDFcbiAgICB9XG5cblxuICAgIGlmIChjc3NHcmlkKVxuICAgICAgJHNlbGVjdG9yLmZpbmQoJy5yZXN1bHRzJykucmVtb3ZlQ2xhc3MoJ2dyaWQtdGlsZXMnKSAvLyB3ZSBuZWVkIHRvIGxldCB0aWxlcyBzaXplIG5hdHVyYWxseSBmaXJzdFxuICAgIGVsc2VcbiAgICAgIEFKUy5jb2xQUkVWID0gLTEgLy8gd2UgdHJhY2sgd2hlcmUgcHJldmlvdXMgdGlsZSB3YXMgcGxhY2VkXG5cbiAgICAkc2VsZWN0b3IuZmluZCgnLml0ZW0taWEnKS5ub3QoJy5tb2JpbGUtaGVhZGVyJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpLmVhY2goKGlkeCwgdmFsKSA9PiB7XG4gICAgICBjb25zdCAkdmFsID0gJCh2YWwpXG4gICAgICBjb25zdCAkdmFsSFQgPSAkdmFsLmlubmVySGVpZ2h0KClcbiAgICAgIC8vIGxvZygnJHZhbEhUJywgJHZhbEhUKVxuXG4gICAgICBjb25zdCBjc3MgPSB7fVxuICAgICAgaWYgKGNzc0dyaWQpIHtcbiAgICAgICAgbG9nKGAkeyR2YWxIVH0gc3BhbjogJHtNYXRoLmNlaWwoKCR2YWxIVCArIDI1KSAvIDM1KX1gKVxuICAgICAgICBjc3NbJ2dyaWQtcm93LWVuZCddID0gYHNwYW4gJHtNYXRoLmNlaWwoKCR2YWxIVCArIDI1KSAvIDM1KX1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY29sID0gMFxuICAgICAgICBpZiAoQUpTLnRpbGVyUFJFVi5uUGVyUm93ID4gMSAgJiYgIGlkeCA+PSBBSlMudGlsZXJQUkVWLm5QZXJSb3cpIHtcbiAgICAgICAgICAvLyBGaXJzdCwgY3ljbGUgZnJvbSBsYXN0IHBsYWNlZCB0aWxlIGNvbHVtbiBsb2NhdGlvbiB0byBcImZpcnN0IGN5Y2xlZCBzbG90XCIuXG4gICAgICAgICAgLy8gKFRoYXQgaXMsIG1vdmUgXCIxIHRvIHJpZ2h0XCIgZnJvbSBsYXN0IHBsYWNlZCB0aWxlIGNvbHVtbiwgYnV0IGl0J3MgYSBjeWNsZS9yaW5nXG4gICAgICAgICAgLy8gZm9yIGZpbmFsIGNvbHVtbiAtLSBnbyB0byAxc3QgY29sdW1uIGluIHRoYXQgY2FzZSkuXG4gICAgICAgICAgLy8gVGVzdCBwbGFjZSBuZXcgdGlsZSAqdGhlcmUqIChpbiBcImZpcnN0IGN5Y2xlZCBzbG90XCIpIFVOTEVTUyBmdXJ0aGVyIGFoZWFkIGluXG4gICAgICAgICAgLy8gY3ljbGUvcmluZyBvZiBvdGhlciBzbG90cywgdGhlIHRpbGUgd2lsbCBmaXQgd2hlcmUgaXRzIEJPVFRPTSB3aWxsIGJlIGFib3ZlIHdoZXJlXG4gICAgICAgICAgLy8gdGlsZSBUT1Agd291bGQgYmUgaW4gdGhlIFwiZmlyc3QgY3ljbGVkIHNsb3RcIi5cbiAgICAgICAgICAvLyAoYW5kIHBpY2sgdGhlIFwiZmlyc3RcIiBpbiBzdWNoIGEgY2FzZSBpZiAyKyBzbG90cyBsaWtlIHRoYXQpXG4gICAgICAgICAgY29uc3QgY29sVEVTVCA9ICgoQUpTLmNvbFBSRVYgKyAxKSAgJSAgQUpTLnRpbGVyUFJFVi5uUGVyUm93KVxuICAgICAgICAgIGNvbCA9IGNvbFRFU1QgLy8gZmFsbGJhY2svZGVmYXVsdFxuICAgICAgICAgIGNvbnN0IGNtcFRFU1QgPSB0b3BzW2NvbFRFU1RdIC0gJHZhbEhUIC8vIFtzbGlnaHRseSBtb3JlIGVmZmljaWVudCB3YXkgMiBjb21wYXJlXVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQUpTLnRpbGVyUFJFVi5uUGVyUm93OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2xURVNUICAmJiAgY21wVEVTVCA+IHRvcHNbaV0pIHtcbiAgICAgICAgICAgICAgY29sID0gaVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wgPSAoaWR4ICUgQUpTLnRpbGVyUFJFVi5uUGVyUm93KVxuICAgICAgICB9XG4gICAgICAgIEFKUy5jb2xQUkVWID0gY29sXG4gICAgICAgIGNzcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICAgIGNzcy50b3AgID0gIHRvcHNbY29sXVxuICAgICAgICBjc3MubGVmdCA9IGxlZnRzW2NvbF1cblxuICAgICAgICAvLyBzZXR1cCBmb3IgbmV4dCB0aWxlLi4uXG4gICAgICAgIHRvcHNbY29sXSArPSAoJHZhbEhUICsgdGlsZU1hcmdpbkgpXG5cbiAgICAgICAgbWF4dG9wID0gTWF0aC5tYXgobWF4dG9wLCB0b3BzW2NvbF0pXG4gICAgICB9XG5cbiAgICAgICR2YWwuY3NzKGNzcylcblxuXG4gICAgICAvLyB0cmFjayBob3cgbWFueSB0aWxlIGltYWdlcyBhcmUgd2l0aG91dCBoZWlnaHRcbiAgICAgIC8vIChlaXRoZXIgbm90IGxvYWRlZCBvciBubyBDU1MgaGVpZ2h0IHN0eWxlIHNldCBpZiBpbWcgbm90IGxvYWRpbmcgZnJvbSBEQilcbiAgICAgIGxldCB0bXAgPSAkdmFsLmZpbmQoJy5pdGVtLWltZycpXG5cbiAgICAgIGlmICh0bXAubGVuZ3RoICAmJiAgISgkdmFsLmZpbmQoJy5pdGVtLWltZycpLmhlaWdodCgpKSkge1xuICAgICAgICBuSW1nWmVyb0hlaWdodCArPSAxXG4gICAgICAgIHRtcCA9ICR2YWwuYXR0cignZGF0YS1pZCcpXG4gICAgICAgIGlmICh0bXApXG4gICAgICAgICAgbkltZ1plcm9IZWlnaHRBcnkucHVzaCh0bXApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjc3NHcmlkKSB7XG4gICAgICAkc2VsZWN0b3IuZmluZCgnLnJlc3VsdHMnKS5hZGRDbGFzcygnZ3JpZC10aWxlcycpXG4gICAgICAkc2VsZWN0b3IuZmluZCgnLml0ZW0taWEnKS5jc3MoeyB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2UgaGF2ZSB0byBtYW51YWxseSBzZXQgdGhlIGhlaWdodCBvZiB0aGUgXCJzZWxlY3RvclwiXG4gICAgICBsb2coJ21heHRvcCcsIG1heHRvcClcbiAgICAgICRzZWxlY3Rvci5maW5kKCcucmVzdWx0cycpLmNzcyh7IGhlaWdodDogbWF4dG9wIH0pXG4gICAgfVxuXG5cbiAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdtYW5hZ2UnKSkge1xuICAgICAgJCgnLml0ZW0taWE6bm90KC5yZW1vdmFibGUpJykuYWRkQ2xhc3MoJ3JlbW92YWJsZScpLmFwcGVuZChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ4ZXJcIiBvbmNsaWNrPVwicmV0dXJuIEFKUy51bm1hbmFnZSh0aGlzKVwiIHRpdGxlPVwicmVtb3ZlIGl0ZW0gZnJvbSBiZWluZyBzdWJtaXR0ZWQgdG8gaXRlbSBtYW5hZ2VtZW50XCI+PC9kaXY+YClcbiAgICB9XG5cblxuICAgIGlmICgobkltZ1plcm9IZWlnaHQpICAmJiAgIW5vUmVjYWxsKSB7XG4gICAgICBsb2coXG4gICAgICAgIG5JbWdaZXJvSGVpZ2h0LCAnIGltZyAoc3RpbGwgdy9vIGhlaWdodCk7IHJlY2FsbCB0aWxlcignLCBzZWxlY3RvciwgJykuLi4nLFxuICAgICAgICBuSW1nWmVyb0hlaWdodEFyeS5qb2luKCcsJyksXG4gICAgICApXG4gICAgICAvLyByZWNhbGwgb3Vyc2VsdmVzLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDEuNSBzZWNvbmRzIVxuICAgICAgY2xlYXJUaW1lb3V0KEFKUy50aWxlcl90aHJvdHRsZXIpXG4gICAgICBBSlMudGlsZXJfdGhyb3R0bGVyID0gc2V0VGltZW91dCgoKSA9PiBBSlMudGlsZXIoc2VsZWN0b3IsIDApLCAxNTAwKVxuICAgIH1cbiAgfVxuXG5cbiAgc3RhdGljIGlraW5kKGxuaywgaWQpIHtcbiAgICBjb25zdCBpZHNlbCA9IGAjJHtpZH1gXG4gICAgbG9nKCdpa2luZCcsIGlkKVxuICAgICQoaWRzZWwpLnBhcmVudCgpLmZpbmQoJ2Rpdi5pa2luZC5pbicpLmhpZGUoKVxuICAgICQoaWRzZWwpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcygnaW4nKS5zaG93KClcbiAgICAkKGlkc2VsKS5wYXJlbnRzKCcudGFiYnktZGF0YScpLmZpbmQoJ2EuaWtpbmQnKS5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgJChsbmspLmFkZENsYXNzKCdpbicpXG5cbiAgICBBSlMudGlsZXIoaWRzZWwpXG5cbiAgICAvLyBub3cgc2VsZWN0IHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnQgaW4gdGhlIHNoYWRvd2luZyBzZWxlY3QgZm9yIG1vYmlsZVxuICAgIGNvbnN0ICRzZWwgPSAkKGlkc2VsKS5wYXJlbnRzKCcudGFiYnktZGF0YScpLmZpbmQoJ3NlbGVjdC5pa2luZC1tb2JpbGUnKVxuICAgIGNvbnN0ICRuZXcgPSAkc2VsLmZpbmQoJ29wdGlvbjpjb250YWlucygnLmNvbmNhdCgkKGxuaykudGV4dCgpLCAnKScpKVxuICAgIGNvbnN0ICRub3cgPSAkc2VsLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpXG4gICAgaWYgKCRuZXcudGV4dCgpLnRyaW0oKSAhPT0gJG5vdy50ZXh0KCkudHJpbSgpKSB7XG4gICAgICBsb2coJ2NoYW5naW5nIGlraW5kIG1vYmlsZSBub3cgdG8gJywgJG5ldy50ZXh0KCkpXG4gICAgICBBSlMuaWtpbmRfbW9iaWxlX2NoYW5nZV9pZ25vcmVfbmV4dCA9IHRydWVcbiAgICAgICRuZXcuYXR0cignc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKVxuICAgICAgLy8gJG5vdy5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBzdGF0aWMgaWtpbmRfbW9iaWxlX2NoYW5nZShlbG0pIHtcbiAgICBpZiAoQUpTLmlraW5kX21vYmlsZV9jaGFuZ2VfaWdub3JlX25leHQpIHtcbiAgICAgIEFKUy5pa2luZF9tb2JpbGVfY2hhbmdlX2lnbm9yZV9uZXh0ID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0ICRzZWxvcHQgPSAkKGVsbSkuZmluZCgnb3B0aW9uOnNlbGVjdGVkJylcbiAgICBsb2coJ2lraW5kIG1vYmlsZSBjaGFuZ2VkIHRvOiAnLCAkc2Vsb3B0LnRleHQoKSlcbiAgICBsZXQgJGlraW5kcyA9ICQoZWxtKS5wYXJlbnRzKCcudGFiYnktZGF0YScpLmZpbmQoJ2EuaWtpbmQnKVxuICAgIGlmICghJGlraW5kcy5sZW5ndGgpIHtcbiAgICAgIC8vIE5PIHRhYmJ5ISAgZWc6IHRvcCBwYWdlIG9yIHNlYXJjaCBwYWdlXG4gICAgICAkaWtpbmRzID0gJCgnYm9keScpLmZpbmQoJ2EuaWtpbmQnKVxuICAgIH1cblxuICAgIGlmICghJGlraW5kcy5sZW5ndGgpXG4gICAgICByZXR1cm4gLy8gdWhvIVxuXG4gICAgY29uc3QgJGlraW5kID0gJGlraW5kcy5maWx0ZXIoKGssIHYpID0+ICQodikudGV4dCgpID09PSAkc2Vsb3B0LnRleHQoKSlcblxuICAgIGNvbnN0IGhyZWYgPSAkaWtpbmQuYXR0cignaHJlZicpXG4gICAgbG9nKCdnb3RvJywgaHJlZilcblxuICAgIGlmIChocmVmKSB7XG4gICAgICBpZiAoaHJlZi5zdWJzdHIoMCwgMSkgPT09ICcjJykge1xuICAgICAgICAvLyBBQ0NPVU5UIFBBR0UgKEZPUiBOT1cpISAgKFNUSUxMIFVTRVMgSEFTSCBGT1IgTk9XKVxuICAgICAgICAkKGBhLmlraW5kW2RhdGEtaWQ9JHtocmVmLnN1YnN0cigxKX1dYCkuY2xpY2soKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGhyZWZcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHN0YXRpYyBwb3BTdGF0ZShwYWdlVHlwZSkge1xuICAgIC8vIGFyZSB3ZSB3YXRjaGluZyBoaXN0b3J5LnB1c2hTdGF0ZSgpIGFuZCBoaXN0b3J5LnBvcFN0YXRlKCkgY2FsbHM/XG4gICAgQUpTLnB1c2hTdGF0ZSA9ICh0eXBlb2YgaGlzdG9yeS5wdXNoU3RhdGUgIT09ICd1bmRlZmluZWQnKVxuICAgIGxvZygncG9wU3RhdGUoJywgcGFnZVR5cGUsICcpIGNhbGxlZCwgbW9kZXJuIGJyb3dzZXI6ICcsIChBSlMucHVzaFN0YXRlID8gJ3knIDogJ24nKSlcblxuICAgIGlmIChwYWdlVHlwZSkgLy8gYW55dGhpbmcgY3VzdG9tIHdlIG5lZWQgdG8gZG8gYmFzZWQgb24gcGFnZVR5cGU/XG4gICAgICByZXR1cm5cblxuXG4gICAgY29uc3QgdGFiUGljayA9IChoYXNoMmFyZykgPT4ge1xuICAgICAgbGV0IHRhYiA9IEFKUy5hcmcoJ3RhYicsIHRydWUpXG4gICAgICBpZiAodGFiKVxuICAgICAgICB0YWIgPSBgI3RhYmJ5LSR7dGFifS1maW5kZXJgXG4gICAgICBlbHNlIGlmIChoYXNoMmFyZylcbiAgICAgICAgdGFiID0gYCN0YWJieS0ke2hhc2gyYXJnfS1maW5kZXJgXG4gICAgICBlbHNlXG4gICAgICAgIHRhYiA9ICcudGFiYnktZGVmYXVsdC1maW5kZXInXG5cbiAgICAgIGlmIChBSlMucHVzaFN0YXRlKVxuICAgICAgICBsb2coJ2dvdG8gdGFiOiAnLCB0YWIsICcgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFNUQVRFJylcbiAgICAgIEFKUy50YWJieV9ub19wdXNoU3RhdGVfbmV4dF9jbGljayA9IHRydWVcbiAgICAgICQodGFiKS5jbGljaygpXG4gICAgfVxuXG4gICAgaWYgKEFKUy5wdXNoU3RhdGUpIHtcbiAgICAgIC8vIHJ1bnMgb24gcGFnZSBsb2FkIG9yIGJyb3dzZXIgXCJiYWNrXCI6XG4gICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgKCkgPT4gdGFiUGljaygpKVxuICAgIH1cbiAgICAvLyBlbHNlIHVzZXIgaGFzIGFuIG9sZGVyIGJyb3dzZXIgb3IgT3BlcmEgTWluaSBhbmQgZG9lc24ndCBoYXZlIHB1c2hTdGF0ZS9wb3BTdGF0ZSFcblxuICAgIHRhYlBpY2soKVxuICB9XG5cblxuICBzdGF0aWMgdGFiYnkobG5rLCBpZCkge1xuICAgIGxvZygnQUpTLnRhYmJ5KCknLCBpZClcbiAgICBjb25zdCBpblRhYiA9IGlkLnJlcGxhY2UoL3RhYmJ5LS8sICcnKS50cmltKClcbiAgICBpZiAoaW5UYWIgPT09ICd1cGxvYWRzJyB8fCBpblRhYiA9PT0gJ3Jldmlld3MnIHx8IGluVGFiID09PSAnY29sbGVjdGlvbnMnIHx8IGluVGFiID09PSAnbG9hbnMnIHx8IGluVGFiID09PSAnd2ViIGFyY2hpdmVzJykge1xuICAgICAgLy8gYWNjb3VudCBwYWdlcyAtLSB3ZSBuZWVkIHRvIGZ1bGx5IHJlbG9hZCBwYWdlIHcvIG5ldy93YW50ZWQgaXRlbSB0aWxlcyFcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gT25seSBjb2xsZWN0aW9uIHBhZ2VzIGhhdmUgdGFicyAvIHByb2NlZWRcbiAgICAvLyBBbGwgdGhyZWUgdGFicyBoYXZlIGFsbCB0aGUgbWFya3VwIG9uIHRoZSBwYWdlIGFscmVhZHkuXG4gICAgLy8gU28sIGZvciBtb2Rlcm4gYnJvd3NlcnMsIHdlIHdpbGwgc2ltcGx5IHN3aXRjaCB0aGUgdmlzaWJpbGVcbiAgICAvLyB0YWIgYW5kIHVwZGF0ZS1pbi1wbGFjZSB0aGUgdXJsIGluIHRoZSBicm93c2VyIHVybCB0eXBlaW5cbiAgICAvLyAtLSBXSVRIT1VUIHJlZnJlc2hpbmcgdGhlIHBhZ2UuXG5cbiAgICAkKCcudGFiYnktZGF0YS5pbicpLnJlbW92ZUNsYXNzKCdpbicpLmhpZGUoKVxuICAgICQoYCMke2lkfWApLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcygnaW4nKS5zaG93KClcbiAgICAkKCcudGFiYnknKS5yZW1vdmVDbGFzcygnaW4nKVxuICAgICQobG5rKS5wYXJlbnRzKCcudGFiYnknKS5hZGRDbGFzcygnaW4nKVxuXG4gICAgaWYgKEFKUy50YWJieV9ub19wdXNoU3RhdGVfbmV4dF9jbGljaykge1xuICAgICAgZGVsZXRlIEFKUy50YWJieV9ub19wdXNoU3RhdGVfbmV4dF9jbGlja1xuICAgIH0gZWxzZSBpZiAoQUpTLnB1c2hTdGF0ZSAgJiYgIHR5cGVvZiBoaXN0b3J5LnB1c2hTdGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSAkKGxuaykuYXR0cignaHJlZicpXG4gICAgICBjb25zdCBsb2NOT1cgPSBsb2NhdGlvbi5ocmVmXG4gICAgICBjb25zdCBsb2NORVcgPSBsb2NhdGlvbi5wcm90b2NvbC5jb25jYXQoJy8vJywgbG9jYXRpb24uaG9zdCwgaHJlZilcbiAgICAgIGlmIChsb2NOT1cgIT09IGxvY05FVykge1xuICAgICAgICBsb2coJ3B1c2hTdGF0ZTogJywgaHJlZiwgJyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgU1RBVEUnKVxuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGxvY05FVylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5UYWIgPT09ICdjb2xsZWN0aW9uJyAgfHwgIGluVGFiID09PSAnYWJvdXQnKSB7ICAvLyBjb2xsZWN0aW9uIHBhZ2VzXG4gICAgICBpZiAoaW5UYWIgPT09ICdhYm91dCcpXG4gICAgICAgIEFKUy5ncmFmcygpXG4gICAgICBBSlMudGlsZXIoKVxuICAgIH1cblxuICAgIGlmIChBSlMucHVzaFN0YXRlKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG5cbiAgc3RhdGljIGNvbGNsaWNrKGUpIHtcbiAgICBjb25zdCAkZSA9ICQoZSlcbiAgICBjb25zdCBpZCA9ICRlLmF0dHIoJ2RhdGEtaWQnKVxuXG4gICAgLy8gKk5PUk1BTExZKiBjbGlja2luZyBvbiBhIGNvbGxlY3Rpb24gdGlsZSBnb2VzIHRvIGl0LlxuICAgIC8vIEJVVCBOT1Q6XG4gICAgLy8gICAqIGluIGxpc3RzIG1vZGUgKG9ubHkgdGhlIGlkZW50aWZpZXIgbGluayBkb2VzIHRoYXQgLS0gbm90IG90aGVyIGRhdGEgY29sdW1ucyEpXG4gICAgLy8gICAqIGlmIGluIHByb2Nlc3Mgb2YgcmVtb3ZpbmcgaXRlbXMgKGVnOiBmcm9tIGZhdm9yaXRlcyBsaXN0KVxuICAgIGlmIChpZCAgJiYgICQoJ2JvZHknKS5oYXNDbGFzcygndGlsZXMnKSAgJiYgICEkZS5oYXNDbGFzcygncmVtb3ZhYmxlJykpXG4gICAgICBsb2NhdGlvbi5ocmVmID0gYC9kZXRhaWxzLyR7aWR9YFxuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3NpbmcgdG8gZ2V0IHJlbGF0ZWQgaXRlbSB1c2luZyBuZXcgQVBJLCBHZXQgcmVzcG9uc2UgYW5kIFJlbmRlciB1c2luZyBSZWFjdCBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBzZXRVcFJlbGF0ZWRJdGVtcygpIHtcbiAgICBjb25zdCBhbHNvRm91bmRFbGVtZW50ICA9ICQoJyNhbHNvLWZvdW5kLXJlc3VsdCcpXG5cbiAgICAvLyBHRVQgdG9wIG9mZnNldCBvZiAjYWxzby1mb3VuZChyZWxhdGVkIGl0ZW0gc2VjdGlvbikgYW5kIGV4ZWN1dGluZyBhamF4IGNhbGwgYWNjb3JkaW5nbHlcbiAgICBpZiAoYWxzb0ZvdW5kRWxlbWVudC5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdylcblxuICAgICAgY29uc3QgdGhyb3R0bGVkTGlzdGVuZXIgPSB0aHJvdHRsZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsc29Gb3VuZCAgICA9ICQoJyNhbHNvLWZvdW5kJylcbiAgICAgICAgY29uc3QgdG9wT2Zmc2V0ICAgID0gYWxzb0ZvdW5kLm9mZnNldCgpLnRvcFxuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpXG4gICAgICAgIC8vIE9uZSBoYWxmIHNjcmVlbiBhYm92ZSB0aGUgdG9wIG9mIHRoZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGxhenlMb2FkU3RhcnQgPSB0b3BPZmZzZXQgLSAod2luZG93SGVpZ2h0IC8gMilcblxuICAgICAgICBpZiAoJHdpbmRvdy5zY3JvbGxUb3AoKSArIHdpbmRvd0hlaWdodCA+PSBsYXp5TG9hZFN0YXJ0KSB7XG4gICAgICAgICAgaWYgKGFsc29Gb3VuZEVsZW1lbnQudGV4dCgpID09PSAnJykge1xuICAgICAgICAgICAgLy8gU2hvdyB0aGUgdGlsZWJhcnMsIG5vdyB0aGF0IHdlJ3ZlIHN0YXJ0ZWQgbG9hZGluZ1xuICAgICAgICAgICAgYWxzb0ZvdW5kLmZpbmQoJy50aWxlYmFycycpLnNob3coKVxuXG4gICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoPEFKUy5Mb2FkaW5nTWVzc2FnZSBtZXNzYWdlPVwiRmV0Y2hpbmcgaXRlbXNcIiAvPiwgYWxzb0ZvdW5kRWxlbWVudFswXSlcblxuICAgICAgICAgICAgQUpTLmRvV2hlblNjcm9sbGVkVG9SZWxhdGVkU2VjdGlvbigpXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBhZnRlciBpdCBsb2Fkc1xuICAgICAgICAgICAgICAudGhlbigoKSA9PiAkd2luZG93Lm9mZignc2Nyb2xsJywgdGhyb3R0bGVkTGlzdGVuZXIpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMTAwKVxuXG4gICAgICAkd2luZG93LnNjcm9sbCh0aHJvdHRsZWRMaXN0ZW5lcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IEFQSSByZXNwb25zZSBmcm9tIEFKUy5nZXRSZWxhdGVkSXRlbXMoKSBhZnRlciAjYWxzby1mb3VuZC1yZXN1bHQgc2Nyb2xsZWQgYW5kXG4gICAqIHJlbmRlciByZXNwb25zZSB1c2luZyByZWFjdCBjb21wb25lbnRcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHN0YXRpYyBkb1doZW5TY3JvbGxlZFRvUmVsYXRlZFNlY3Rpb24oKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9ICQoJyNhbHNvLWZvdW5kJykuZGF0YSgnaWRlbnRpZmllcicpXG4gICAgY29uc3QgYWxzb0ZvdW5kRWxlbWVudCA9ICQoJyNhbHNvLWZvdW5kLXJlc3VsdCcpXG5cbiAgICByZXR1cm4gQUpTLmdldFJlbGF0ZWRJdGVtcyhpZGVudGlmaWVyKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIFNlbmRpbmcgZGF0YUhhc2ggdG8gUmVhY3QgQ29tcG9uZW5ldCB0byByZW5kZXIgSFRNTCBvZiByZWxhdGVkIGl0ZW1zIHNlY3Rpb25cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKDxBSlMuUmVsYXRlZEl0ZW1TZWN0aW9uIGRhdGFIYXNoPXtyZXNwb25zZX0gLz4sIGFsc29Gb3VuZEVsZW1lbnRbMF0pXG5cbiAgICAgICAgLy8gU2V0IHZpc2liaWxpdHk6aGlkZGVuIG9mIHRpbGVzIGZvciAybmQrIHJvdyBlc3AuIGZvciBuYXJyb3dlciBwYWdlc1xuICAgICAgICBBSlMudGlsZWJhcnMoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gU2hvdyBtZXNzc2FnZSB3aGVuIHNpbWlsYXIgaXRlbXMgbm90IGZvdW5kLlxuICAgICAgICAvLyBTaG93IHRoZSByZWxhdGVkIGl0ZW1zIHNlY3Rpb24sIHNvIHdlIGNhbiBkaXNwbGF5IGVycm9yXG4gICAgICAgICQoJyNhbHNvLWZvdW5kJykuc2hvdygpXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcig8QUpTLkVycm9yTWVzc2FnZSBlcnJvck1zZz17ZXJyb3IubWVzc2FnZX0gLz4sIGFsc29Gb3VuZEVsZW1lbnRbMF0pXG4gICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFQSSBjYWxsIHRvIGdldCByZWxhdGVkIGl0ZW0gYW5kIHJldHVybiByZXNwb25zZSB1c2luZyBQcm9taXNlXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaWRlbnRpZmllciBpdGVtIGlkZW50aWZpZXJcbiAgICogQHBhcmFtICB7TnVtYmVyfSBzaXplIG51bWJlciBvZiBpdGVtIHJlc3VsdHMgKDYgaXMgdGhlIGRlZmF1bHQpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXl8U3RyaW5nPn1cbiAgICovXG4gIHN0YXRpYyBnZXRSZWxhdGVkSXRlbXMoaWRlbnRpZmllciwgc2l6ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBhcmdzID0geyBzaXplIH1cbiAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2JlLWFwaS51cy5hcmNoaXZlLm9yZy9tZHMvdjEvZ2V0X3JlbGF0ZWQvYWxsLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkZW50aWZpZXIpfSR7KHNpemUgPyBgPyR7JC5wYXJhbShhcmdzKX1gIDogJycpfWBcbiAgICAgIGNvbnN0IGhhc2hEYXRhID0gW11cbiAgICAgIGxldCBhcGlFcnJvciA9IGZhbHNlXG5cbiAgICAgICQuZ2V0KGFwaVVybCwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IFtdXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaXRlbXMgPSByZXNwb25zZS5oaXRzLmhpdHNcbiAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgYXBpRXJyb3IgPSB0cnVlXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgYXBpRXJyb3IgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXBpRXJyb3IpIHtcbiAgICAgICAgICAvLyBSZXR1cm4gZXJyb3IgbWVzc2FnZSB0byBQcm9taXNlIHdoZW4gcmVzcG9uc2UgaXMgZW1wdHkgT1Iga2V5IG5vdCBleGlzdHNcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTaW1pbGFyIGl0ZW1zIG5vdCBmb3VuZCcpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIC8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTpcbiAgICAgICAgICBbZXJyb3IsIHsgXCJhbGxvd1wiOiBbXCJfaWRcIiwgXCJfc291cmNlXCIsIFwiX21vZGFsX2FkZFwiXSB9XSAqL1xuICAgICAgICAgIGNvbnN0IGl0ZW1Tb3VyY2UgID0gaXRlbS5fc291cmNlXG4gICAgICAgICAgY29uc3Qgc2luZ2xlSGFzaCAgPSB7XG4gICAgICAgICAgICBpZGVudGlmaWVyOiBpdGVtLl9pZCxcbiAgICAgICAgICAgIG51bVJldmlld3M6IDAsXG4gICAgICAgICAgICBsZW5kaW5nRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBsZW5kaW5nQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvZ2luUmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGVuZENsYXNzOiAnJyxcbiAgICAgICAgICAgIGZhdm9yaXRlOiAwLFxuICAgICAgICAgICAgY3JlYXRvcjogJycsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJC5lYWNoKGl0ZW1Tb3VyY2UsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnZG93bmxvYWRzJylcbiAgICAgICAgICAgICAgc2luZ2xlSGFzaC5kb3dubG9hZHMgPSBbdmFsdWVbMF1dXG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICd0aXRsZScpXG4gICAgICAgICAgICAgIHNpbmdsZUhhc2gudGl0bGUgPSBbdmFsdWVbMF1dXG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdtZWRpYXR5cGUnKVxuICAgICAgICAgICAgICBzaW5nbGVIYXNoLm1lZGlhdHlwZSA9IFt2YWx1ZVswXV1cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NyZWF0b3JTb3J0ZXInKSB7XG4gICAgICAgICAgICAgIC8vIFJlcGxhY2luZyBmaXJzdCBjaGFyYWN0ZXIgbG93ZXIgdG8gQ0FQVElBTCBvZiBlYWNoIGNyZWF0b3IgbmFtZS5cbiAgICAgICAgICAgICAgLy8gRS5nIGdvbGRzbWl0aCBUTyBHb2xkc21pdGhcbiAgICAgICAgICAgICAgdmFsdWVbMF0ucmVwbGFjZSgvXFx3XFxTKi9nLCAodHh0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2luZ2xlSGFzaC5jcmVhdG9yICs9IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKS5jb25jYXQoJyAnKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnY29sbGVjdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gQ291bnRpbmcgbnVtYmVyIG9mIGZhdm9yaXRlIGNvbGxsZWN0aW9uc1xuICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBzaW5nbGVIYXNoLmZhdm9yaXRlICs9ICh2YWwubWF0Y2goL2Zhdi0vZykgfHwgW10pLmxlbmd0aFxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdsb2dnZWRpbicpID4gMClcbiAgICAgICAgICAgICAgICBzaW5nbGVIYXNoLmxvZ2luUmVxdWlyZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdsb2Fuc19fc3RhdHVzX19zdGF0dXMnKSB7XG4gICAgICAgICAgICAgIHNpbmdsZUhhc2gubGVuZGluZ0VuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICAgIGlmICh2YWx1ZVswXSA9PT0gJ0FWQUlMQUJMRScpIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVIYXNoLmxlbmRpbmdBdmFpbGFibGUgID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNpbmdsZUhhc2gubGVuZENsYXNzID0gJ2xlbmRpbmctYXZhaWxhYmxlJ1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpbmdsZUhhc2gubGVuZENsYXNzID0gJ2xlbmRpbmctY2hlY2tlZC1vdXQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ251bV9yZXZpZXdzJylcbiAgICAgICAgICAgICAgc2luZ2xlSGFzaC5udW1SZXZpZXdzID0gW3ZhbHVlWzBdXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBoYXNoRGF0YS5wdXNoKHNpbmdsZUhhc2gpXG4gICAgICAgIH0pXG4gICAgICAgIHJlc29sdmUoaGFzaERhdGEpIC8vIFJldHVybiByZWxhdGVkIGl0ZW1zIGhhc2hEYXRhIHVzaW5nIFByb21pc2VcbiAgICAgIH0pLmVycm9yKCgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2ltaWxhciBpdGVtcyBub3QgZm91bmQnKSkgLy8gUmV0dXJuIGVycm9yIG1lc3NhZ2UgdG8gUHJvbWlzZSB3aGVuIGFueSBlcnJvciBmb3VuZFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cblxuICBzdGF0aWMgbGlzdF9yZW1vdmVfaXRlbSh4ZXIpIHtcbiAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdsaXN0cycpKVxuICAgICAgJCgnLnRpbGVzLWJ1dHRvbjp2aXNpYmxlJykuY2xpY2soKSAvLyBzb3JyeSEgIG9ubHkgd29ya3MgaW4gdGlsZXMgbW9kZSBub3cuLi5cblxuXG4gICAgaWYgKCF4ZXIpIHtcbiAgICAgIGlmICghJCgnLml0ZW0taWEgLnhlcicpLmxlbmd0aCkge1xuICAgICAgICAvLyBtYWtlIGFsbCBpdGVtcyBlZGl0YWJsZVxuICAgICAgICAkKCcuaXRlbS1pYScpLmFkZENsYXNzKCdyZW1vdmFibGUnKS5hcHBlbmQoJzxkaXYgb25jbGljaz1cIkFKUy5saXN0X3JlbW92ZV9pdGVtKHRoaXMpXCIgY2xhc3M9XCJ4ZXJcIiBhbHQ9XCJyZW1vdmUgdGhpcyBpdGVtIGZyb20gbGlzdFwiIHRpdGxlPVwicmVtb3ZlIHRoaXMgaXRlbSBmcm9tIGxpc3RcIj48L2Rpdj4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2FuY2VsIGVkaXRhYmlsaXR5XG4gICAgICAgICQoJy5pdGVtLWlhJykucmVtb3ZlQ2xhc3MoJ3JlbW92YWJsZScpXG4gICAgICAgICQoJy5pdGVtLWlhIC54ZXInKS5yZW1vdmUoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW5nbGUgaXRlbSBpcyBzbGF0ZWQgZm9yIHV0dGVyIGRlc3RydWN0aW9uIGZyb20gdGhlIGxpc3QuLi5cbiAgICAgIGNvbnN0ICRpdGVtID0gJCh4ZXIpLnBhcmVudHMoJy5pdGVtLWlhJylcbiAgICAgIGNvbnN0IGlkWCA9ICRpdGVtLmF0dHIoJ2RhdGEtaWQnKVxuICAgICAgbGV0IHVybCA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvIy4qJC8sICcnKS5jb25jYXQoJz9yZW1vdmVfaXRlbT0nLCBlbmNvZGVVUklDb21wb25lbnQoaWRYKSlcbiAgICAgIC8vIFVzZSB0aGUgbW9zdCByZWNlbnQgdXBkYXRlIGRhdGUgdG8gaGVscCB1bmlxdWVseSBpZGVudGlmeSB0aGUgaXRlbSFcbiAgICAgIGlmICgkaXRlbS5hdHRyKCdkYXRhLWRhdGUnKSlcbiAgICAgICAgdXJsICs9IGAmZGF0YS1kYXRlPSR7JGl0ZW0uYXR0cignZGF0YS1kYXRlJyl9YFxuICAgICAgaWYgKEFKUy5saXN0a2luZClcbiAgICAgICAgdXJsICs9IGAma2luZD0ke0FKUy5saXN0a2luZH1gXG4gICAgICBsb2coJ0dFVCcsIHVybClcblxuICAgICAgJC5nZXQodXJsLCAoaHRtKSA9PiB7XG4gICAgICAgIGxvZygnR09UJywgdXJsKVxuICAgICAgICBsb2coaHRtKVxuICAgICAgICAkaXRlbS5yZW1vdmUoKVxuICAgICAgICBBSlMudGlsZXIoKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuXG4gIC8vIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gYSBzZWFyY2ggcmVzdWx0cyBwYWdlXG4gIHN0YXRpYyB1bm1hbmFnZSh4ZXIpIHtcbiAgICAkKHhlcikucGFyZW50KCcuaXRlbS1pYScpLm5leHQoKS5yZW1vdmUoKSAvLyByZW1vdmUgaXRlbSBsaXN0IHBvcnRpb25cbiAgICAkKHhlcikucGFyZW50KCcuaXRlbS1pYScpLnJlbW92ZSgpICAgICAgICAvLyByZW1vdmUgaXRlbSB0aWxlIHBvcnRpb25cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgLy8gc3VibWl0cyBzZWFyY2ggcmVzdWx0cyBpdGVtcyB0byBpdGVtIG1hbmFnZXIgZm9yIGludm9raW5nIG9wZXJhdGlvbnMgb24gdGhlIGxpc3RcbiAgc3RhdGljIG1hbmFnZSgpIHtcbiAgICAvLyBnZXQgbGlzdCBvZiBhbGwgKHJlbWFpbmluZykgaWRlbnRpZmllcnMgaW4gYSBzZWFyY2ggcmVzdWx0cyBwYWdlXG4gICAgY29uc3QgaWRzID0gJCgnLml0ZW0taWFbZGF0YS1pZF0nKS50b0FycmF5KCkucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBpZCA9ICQoYikuYXR0cignZGF0YS1pZCcpXG4gICAgICBpZiAoaWQgPT09ICdfX21vYmlsZV9oZWFkZXJfXycpXG4gICAgICAgIHJldHVybiBhXG4gICAgICByZXR1cm4gYS5jb25jYXQoaWQsICcsJylcbiAgICB9LCAnJylcbiAgICBsb2coJ01BTkFHRScsIGlkcylcblxuICAgIGlmIChpZHMgIT09ICcnKSB7XG4gICAgICAvLyBub3cgbWFrZSBhIGZvcm0gdGhhdCB3ZSBjYW4gUE9TVCB0bywgd2l0aCBhbGwgdGhlIGlkZW50aWZpZXJzLFxuICAgICAgLy8gYW5kIHBvc3QgdG8gL21hbmFnZS8gcGFnZVxuICAgICAgY29uc3QgJGZvcm0gPSAkKGBcbiAgICAgICAgPGZvcm0gaWQ9XCJtYW5hZ2UtaWRzXCIgbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9tYW5hZ2UvXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJ2aXNpYmlsaXR5OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MXB4O2hlaWdodDoxcHg7XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlkZW50aWZpZXJcIiB2YWx1ZT1cIiR7aWRzfVwiLz5cbiAgICAgICAgPC9mb3JtPmApXG4gICAgICAkKCdib2R5JykuYXBwZW5kKCRmb3JtKSAvLyBOT1RFOiBmaXJlZm94IG5lZWRzIGl0IGluIERPTSB0byBzdWJtaXRcbiAgICAgICRmb3JtLnN1Ym1pdCgpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICBzdGF0aWMgaGVhZF9pbWdfZHJhZ2Ryb3Bfc2V0dXAoaWRlbnRpZmllcikge1xuICAgIGlmIChBSlMuaGVhZF9pbWdfZHJhZ2Ryb3Bfc2V0dXBfZG9uZSlcbiAgICAgIHJldHVyblxuICAgIGxvZygnaGVhZF9pbWdfZHJhZ2Ryb3Bfc2V0dXAnKVxuICAgIEFKUy5oZWFkX2ltZ19kcmFnZHJvcF9zZXR1cF9kb25lID0gdHJ1ZVxuXG5cbiAgICAkKCcjZmlsZS1kcm9wcGVyLXdyYXAnKS5iaW5kKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgbG9nKCdlbnRlcicpXG4gICAgICBBSlMuaGVhZF9pbWdfcmVwbGFjZWFibGUoaWRlbnRpZmllcilcbiAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5zaG93KClcbiAgICB9KS5iaW5kKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgbG9nKCdvdWRkaWUnKVxuICAgICAgaWYgKCFBSlMuZmlsZV9waWNrZWQpXG4gICAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5oaWRlKClcbiAgICB9KVxuXG4gICAgJCgnYm9keScpLmJpbmQoJ2RyYWdvdmVyJywgKGV2dCkgPT4ge1xuICAgICAgLy8gZW5hYmxlIGZpbGUgZHJvcHBpbmdcbiAgICAgIGxvZygnZHJhZ292ZXInKVxuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBBSlMuaGVhZF9pbWdfcmVwbGFjZWFibGUoaWRlbnRpZmllcilcbiAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5hZGRDbGFzcygnZHJhZ19vdmVyJykuc2hvdygpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgJCgnYm9keScpLmJpbmQoJ2RyYWdsZWF2ZScsIChldnQpID0+IHtcbiAgICAgIGxvZygnZHJhZ2xlYXZlJylcblxuICAgICAgLy8gYXJlIHdlIHN0aWxsIG92ZXIgYSBmaWxlLWRyb3BwZXIgZGl2L2ltZz9cbiAgICAgIGxldCBvdmVyID0gKCQoJyNmaWxlLWRyb3BwZXItd3JhcCcpLmlzKCc6aG92ZXInKSB8fFxuICAgICAgICAgICAgICAgICAgJCgnI2ZpbGUtZHJvcHBlciAgICAgJykuaXMoJzpob3ZlcicpIHx8XG4gICAgICAgICAgICAgICAgICAkKCcjZmlsZS1kcm9wcGVyLWltZyAnKS5pcygnOmhvdmVyJykpXG4gICAgICBjb25zdCB4ID0gZXZ0LnBhZ2VYIHx8IGV2dC5vcmlnaW5hbEV2ZW50LnBhZ2VYXG4gICAgICBjb25zdCB5ID0gZXZ0LnBhZ2VZIHx8IGV2dC5vcmlnaW5hbEV2ZW50LnBhZ2VZXG4gICAgICBpZiAoIW92ZXIpIHtcbiAgICAgICAgY29uc3QgZSA9ICQoJyNmaWxlLWRyb3BwZXItd3JhcCcpXG4gICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBlLm9mZnNldCgpXG4gICAgICAgIGlmICh4ID49IGxlZnQgICYmICB4IDw9IGxlZnQgKyBlLm91dGVyV2lkdGgoKSAgJiZcbiAgICAgICAgICAgIHkgPj0gdG9wICAgJiYgIHkgPD0gdG9wICArIGUub3V0ZXJIZWlnaHQoKSkge1xuICAgICAgICAgIC8vIHN0aWxsIG92ZXIgdGhlIGZpbGUgZHJvcCB0YXJnZXQgaW1hZ2UgYXJlYSFcbiAgICAgICAgICBvdmVyID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW92ZXIpIHtcbiAgICAgICAgY29uc3QgZSA9ICQoJyNmaWxlLWRyb3BwZXInKVxuICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gZS5vZmZzZXQoKVxuICAgICAgICBpZiAoeCA+PSBsZWZ0ICAmJiAgeCA8PSBsZWZ0ICsgZS5vdXRlcldpZHRoKCkgICYmXG4gICAgICAgICAgICB5ID49IHRvcCAgICYmICB5IDw9IHRvcCAgKyBlLm91dGVySGVpZ2h0KCkpIHtcbiAgICAgICAgICAvLyBzdGlsbCBvdmVyIHRoZSBmaWxlIGRyb3AgdGFyZ2V0IGltYWdlIGFyZWEhXG4gICAgICAgICAgb3ZlciA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW92ZXIpXG4gICAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5yZW1vdmVDbGFzcygnZHJhZ19vdmVyJykuaGlkZSgpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBoZWFkX2ltZ19yZXBsYWNlYWJsZShpZGVudGlmaWVyKSB7XG4gICAgLy8gaGVscGZ1bHM6XG4gICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdFxuICAgIC8vICBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vaHRtbDUtYWpheC1maWxlLXVwbG9hZC9cbiAgICBpZiAoJCgnI2ZpbGUtZHJvcHBlcicpLmh0bWwoKS50cmltKCkgIT09ICcnKVxuICAgICAgcmV0dXJuXG5cbiAgICAkKCcjZmlsZS1kcm9wcGVyJykuc2hvdygpLmh0bWwoYFxuPGRpdj5cbjxidXR0b24gaWQ9XCJmaWxlLWNhbmNlbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICB0aXRsZT1cImNhbmNlbCBmaWxlIHVwbG9hZFwiIGFsdD1cImNhbmNlbCBmaWxlIHVwbG9hZFwiPlxuICAmdGltZXM7XG48L2J1dHRvbj5cbjxiPlxuICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTo0MHB4OyBjb2xvcjojYWFhXCIgY2xhc3M9XCJpY29ub2NoaXZlLXBsdXMtY2lyY2xlXCIgLz5cbjwvYj48YnIvPlxuPGI+XG4gIERyYWcgJiBEcm9wIGFuIGltYWdlIGZpbGUgaGVyZSBvclxuPC9iPlxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLXhzXCIgb25jbGljaz1cIiQoJyNmaWxlLXNlbGVjdG9yJykuY2xpY2soKTtcIj5cbiAgUGljayBpbWFnZSB0byB1cGxvYWRcbjwvYnV0dG9uPlxuPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9zZXJ2aWNlcy9wb3N0LWZpbGUucGhwP3N1Ym1pdD0xJmlkZW50aWZpZXI9JHtpZGVudGlmaWVyfVwiXG4gICAgICBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGlkPVwicG9zdGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJoaWRkZW5cIj5cbiAgICA8aW5wdXQgaWQ9XCJmaWxlLXNlbGVjdG9yXCIgbmFtZT1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIi8+XG4gIDwvZGl2PlxuICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZGVudGlmaWVyXCIgdmFsdWU9XCIke2lkZW50aWZpZXJ9XCIvPlxuICA8aW5wdXQgaWQ9XCJmaWxlLXN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJTVUJNSVRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiLz5cbiAgPGRpdiBpZD1cImZpbGUtdXBsb2FkaW5nXCI+XG4gICAgVXBsb2FkaW5nIHlvdXIgZmlsZS4uXG4gIDwvZGl2PlxuPC9mb3JtPlxuPC9kaXY+YClcblxuXG4gICAgJCgnI2ZpbGUtY2FuY2VsJykuYmluZCgnY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICBBSlMuY2FuY2VsRmlsZSgpXG5cbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cblxuICAgICQuZXZlbnQucHJvcHMucHVzaCgnZGF0YVRyYW5zZmVyJykgLy8gaWYgbm90IHNldCwgZGF0YVRyYW5zZmVyIGlzIG5vdCBzZW50XG5cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICBsb2coJ3N1Y2Nlc3MhJylcbiAgICAgIC8vIEFKUy5jYW5jZWxGaWxlKClcbiAgICB9XG5cblxuICAgIC8vIHVwbG9hZCBhbiBpbWFnZSAodHlwaWNhbGx5IGEgY29sbGVjdGlvbi9saXN0IGhlYWRlciBvciBhY2NvdW50L3BlcnNvbiBwcm9maWxlKSAgdmlhIFMzXG4gICAgLy8gcmV0dXJucyAnJyBvbiBzdWNjZXNzOyBlbHNlIHN0cmluZyB3LyBlcnJvci9mYWlsIHJlYXNvblxuICAgIGNvbnN0IHVwbG9hZEZpbGUgPSAoKSA9PiB7XG4gICAgICBsZXQgZmFpbCA9IGZhbHNlXG5cbiAgICAgIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICBmYWlsID0gJ2Jyb3dzZXIgYXBwZWFycyB0byBub3QgaGF2ZSBIVE1MNSBmdW5jdGlvbmFsaXR5J1xuXG4gICAgICBpZiAoIWZhaWwpXG4gICAgICAgIGZhaWwgPSBBSlMuYmFkRmlsZSgpXG5cblxuICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIGlmICghZmFpbCkge1xuICAgICAgICBsb2coQUpTLmZpbGUycG9zdClcbiAgICAgICAgaWYgKCF4aHIudXBsb2FkKVxuICAgICAgICAgIGZhaWwgPSAnYnJvd3NlciBzdWJtaXQgc2V0dXAgZmFpbGVkJ1xuICAgICAgfVxuXG4gICAgICBpZiAoZmFpbClcbiAgICAgICAgcmV0dXJuIGZhaWxcblxuXG4gICAgICAvLyBzdGFydCB1cGxvYWRcbiAgICAgIGxvZygncG9zdCcpXG4gICAgICAvLyBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSA+IDApIHhoci50aW1lb3V0ID0gMTAgKiA2MCAqIDEwMDA7IC8vIDEwIG1pblxuICAgICAgeGhyLm9wZW4oXG4gICAgICAgICdQT1NUJyxcbiAgICAgICAgbG9jYXRpb24ucHJvdG9jb2wuY29uY2F0KFxuICAgICAgICAgICcvLycsIGxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgJy9zZXJ2aWNlcy9wb3N0LWZpbGUucGhwP3N1Ym1pdD0xJmlkZW50aWZpZXI9JywgaWRlbnRpZmllcixcbiAgICAgICAgICAnJmZuYW1lPScsIGVuY29kZVVSSUNvbXBvbmVudChBSlMuZmlsZTJwb3N0Lm5hbWUpLFxuICAgICAgICApLFxuICAgICAgICBmYWxzZSxcbiAgICAgICkgLy8gYmxvY2sgc3luY2hyb25vdXNseSBvbiB0aGUgcG9zdCFcbiAgICAgIC8vIGlmICghb3B0aW9ucy5zZW5kQm91bmRhcnkpIHh4eFxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBjaGFyc2V0PVVURi04JylcbiAgICAgIHhoci5zZW5kKEFKUy5maWxlMnBvc3QpXG5cbiAgICAgIGNvbnN0IHJlcGx5ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgICAgY29uc3QgbWF0ID0gcmVwbHkubWF0Y2goL1NVQ0NFU1MgXFwodGFza19pZD0oXFxkKylcXCkvKVxuICAgICAgaWYgKG1hdCAgJiYgIG1hdC5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdGFza19pZCA9IG1hdFsxXVxuICAgICAgICBsb2coJ1NUQUxLSU5HIFRBU0tfSUQ6ICcsIHRhc2tfaWQpXG5cbiAgICAgICAgJCgnI2ZpbGUtZHJvcHBlcicpLmh0bWwoJ3dhaXRpbmcgZm9yIHVwZGF0ZXMuLicpXG4gICAgICAgIGxldCBzdGFsa2VyX3B0ciA9IGZhbHNlXG4gICAgICAgIGNvbnN0IHN0YWxrZXIgPSAoKSA9PiB7XG4gICAgICAgICAgbG9nKCdTVEFMS0lORy4uLicpXG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiAnL2NhdGFsb2dfc3RhdHVzLnBocD93aGVyZT10YXNrX2lkPScuY29uY2F0KHRhc2tfaWQsICcmcmFuZD0nLCBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAneG1sJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh4bWwpID0+IHtcbiAgICAgICAgICAgICAgbG9nKHhtbClcbiAgICAgICAgICAgICAgY29uc3QgeCA9IHtcbiAgICAgICAgICAgICAgICBncmVlbjogcGFyc2VJbnQoJCh4bWwpLmZpbmQoJ3dhaXRfYWRtaW4wJykudGV4dCgpLCAxMCkgfHwgMCxcbiAgICAgICAgICAgICAgICBibHVlOiAgcGFyc2VJbnQoJCh4bWwpLmZpbmQoJ3dhaXRfYWRtaW4xJykudGV4dCgpLCAxMCkgfHwgMCxcbiAgICAgICAgICAgICAgICByZWQ6ICAgcGFyc2VJbnQoJCh4bWwpLmZpbmQoJ3dhaXRfYWRtaW4yJykudGV4dCgpLCAxMCkgfHwgMCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsb2coeClcbiAgICAgICAgICAgICAgY29uc3QgbldhaXQgPSB4LmdyZWVuICsgeC5ibHVlICsgeC5yZWRcbiAgICAgICAgICAgICAgJCgnI2ZpbGUtZHJvcHBlcicpLmh0bWwoYHdhaXRpbmcgZm9yICR7bldhaXR9IHRhc2tzIHRvIHJ1bmApXG4gICAgICAgICAgICAgIGlmICghbldhaXQpIHtcbiAgICAgICAgICAgICAgICBsb2coJ3Rhc2socykgZG9uZSEnKVxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhbGtlcl9wdHIpXG4gICAgICAgICAgICAgICAgJCgnI2ZpbGUtZHJvcHBlcicpLmh0bWwoJ3JlbG9hZGluZyBwYWdlIHdpdGggeW91ciBpbWFnZScpXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWYgLy8gcmVhZHkhIHJlbG9hZCB0aGUgcGFnZSFcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh4LnJlZCkge1xuICAgICAgICAgICAgICAgICQoJyNmaWxlLWRyb3BwZXInKS5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+c3RhdHVzIHRhc2sgZmFpbHVyZSAtLSBhbiBhZG1pbiB3aWxsIG5lZWQgdG8gcmVzb2x2ZTwvZGl2PicpXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzdGFsa2VyX3B0cilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXZlcnkgMiBzZWNvbmRzLCBjaGVjayBmb3Igc3RhdHVzXG4gICAgICAgIHN0YWxrZXJfcHRyID0gc2V0SW50ZXJ2YWwoc3RhbGtlciwgMjAwMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZyhyZXBseSlcbiAgICAgIH1cblxuICAgICAgbG9nKCdwb3N0IGRvbmUnKVxuICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG5cbiAgICAkKCcjZmlsZS1zZWxlY3RvcicpLmJpbmQoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgQUpTLmZpbGVfcGlja2VkID0gJ3NlbGVjdGVkJ1xuICAgIH0pLmJpbmQoJ2NoYW5nZScsIChldnQpID0+IHtcbiAgICAgIGxvZygnZmlsZSBkcm9wZG93biBzZWxlY3RlZCEnKVxuICAgICAgJCgnI2ZpbGUtc3VibWl0LCAjZmlsZS1jYW5jZWwnKS5zaG93KClcbiAgICAgIGxvZyhldnQpXG4gICAgICBpZiAoZXZ0LnRhcmdldCAgJiYgIGV2dC50YXJnZXQuZmlsZXMgICYmICBldnQudGFyZ2V0LmZpbGVzLmxlbmd0aCkge1xuICAgICAgICBbQUpTLmZpbGUycG9zdF0gPSBldnQudGFyZ2V0LmZpbGVzXG4gICAgICAgIEFKUy5wcmV2aWV3RmlsZSgpXG4gICAgICB9XG4gICAgfSlcblxuXG4gICAgJCgnI2ZpbGUtZHJvcHBlcicpLmJpbmQoJ2Ryb3AnLCAoZXZ0KSA9PiB7XG4gICAgICAvLyB3ZSd2ZSBiZWVuIGRyb3BwZWQgYSBmaWxlIChmcm9tIGEgZHJhZy1hbmQtZHJvcCkhXG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGxvZyhldnQuZGF0YVRyYW5zZmVyLmZpbGVzKVxuICAgICAgJCgnI2ZpbGUtZHJvcHBlcicpLnJlbW92ZUNsYXNzKCdkcmFnX292ZXInKVxuXG4gICAgICAkKCcjZmlsZS1zdWJtaXQsICNmaWxlLWNhbmNlbCcpLnNob3coKVxuXG5cbiAgICAgIGlmIChldnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICBBSlMuZmlsZV9waWNrZWQgPSAnZHJvcHBlZCc7XG4gICAgICAgIFtBSlMuZmlsZTJwb3N0XSA9IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXNcbiAgICAgICAgQUpTLnByZXZpZXdGaWxlKClcbiAgICAgIH1cbiAgICB9KVxuXG5cbiAgICAkKCcjcG9zdGVyJykuYmluZCgnZm9jdXNpbicsIChldnQpID0+IHtcbiAgICAgIGxvZyhldnQudHlwZSlcbiAgICAgICQoJyNmaWxlLXVwbG9hZGluZycpLnNob3coKVxuICAgIH0pLmJpbmQoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgIGxvZygnc3VibWl0IScpXG4gICAgICAkKCcjZmlsZS11cGxvYWRpbmcnKS5zaG93KClcblxuICAgICAgLy8gRmlyc3QgdHJ5IHRoZSBzY2htYW5jeSBIVE1MNSBzdWJtaXQgdmlhIFhNTEh0dHBSZXF1ZXN0IGFuZCBGaWxlUmVhZGVyLlxuICAgICAgLy8gSWYgd2UgZmFpbCwgd2UnbGwgZmFsbGJhY2sgdG8gZm9ybSBzdWJtaXQgbm9ybWFsIGFjdGlvbi5cbiAgICAgIGNvbnN0IGZhaWwgPSB1cGxvYWRGaWxlKClcbiAgICAgIGlmIChmYWlsID09PSAnJykge1xuICAgICAgICAvLyBTVUNDRVNTISAgd2UgYXJlIGRvbmUhXG4gICAgICAgIHN1Y2Nlc3MoKVxuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChBSlMuZmlsZV9waWNrZWQgPT09ICdkcm9wcGVkJykge1xuICAgICAgICAvLyB3ZSBoYWQgY2xpZW50IGRyYWctbi1kcm9wIHRoZSBmaWxlIC0tIHdlIGNhbid0IHBvc3QgaXQhXG4gICAgICAgIC8vIGVwaWMgZmFpbC4uLlxuICAgICAgICBBSlMuY2FuY2VsRmlsZSgpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tYWxlcnRcbiAgICAgICAgYWxlcnQoYEZhaWx1cmU6ICR7ZmFpbH1gKVxuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIC8vIE9LIGZhbGxiYWNrIHRvIG5vcm1hbCAoc2VsZWN0ZWQpIGZpbGUgc3VibWl0IChhbmQgZnVsbCBwYWdlIHJlbG9hZCkhXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG5cblxuICAgIC8vIG5vdyBjZW50ZXIgZmlsZS1kcm9wcGVyIG92ZXIgY3VycmVudCBpbWFnZVxuICAgIGNvbnN0IHcxID0gJCgnI2ZpbGUtZHJvcHBlci1pbWcnKS5vdXRlcldpZHRoKClcbiAgICBjb25zdCBoMSA9ICQoJyNmaWxlLWRyb3BwZXItaW1nJykub3V0ZXJIZWlnaHQoKVxuICAgIGNvbnN0IHcyID0gJCgnI2ZpbGUtZHJvcHBlcicpLm91dGVyV2lkdGgoKVxuICAgIGNvbnN0IGgyID0gJCgnI2ZpbGUtZHJvcHBlcicpLm91dGVySGVpZ2h0KClcbiAgICAkKCcjZmlsZS1kcm9wcGVyJykuY3NzKHtcbiAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHcxIC0gdzIpIC8gMiksXG4gICAgICB0b3A6ICBNYXRoLnJvdW5kKChoMSAtIGgyKSAvIDIpLFxuICAgIH0pXG5cbiAgICBpZiAoQUpTLmlvcykge1xuICAgICAgJCgnI2ZpbGUtZHJvcHBlciA+IGZvcm0gPiBkaXYuaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpXG4gICAgICAkKCcjZmlsZS1kcm9wcGVyID4gYnV0dG9uJykuYWRkQ2xhc3MoJ2hpZGRlbicpXG4gICAgfVxuICB9XG5cblxuICAvLyBjbGllbnQtc2lkZSBwcmV2aWV3IHRoZSBpbWFnZSBkaXJlY3RseSBpbiB0aGUgYnJvd3NlciEgIHh4eCBjYXRjaCBleGNlcHRpb25zLCBldGMuXG4gIHN0YXRpYyBwcmV2aWV3RmlsZSgpIHtcbiAgICAkKCcjZmlsZS1kcm9wcGVyIC51cHByZXZpZXcnKS5yZW1vdmUoKSAvLyByZW1vdmUgYW55IHByaW9yIHVwbG9hZC9wcmV2aWV3XG5cbiAgICBpZiAoQUpTLmJhZEZpbGUoKSkge1xuICAgICAgQUpTLmNhbmNlbEZpbGUoKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBGaWxlUmVhZGVyID09PSAndW5kZWZpbmVkJylcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZ0KSA9PiB7XG4gICAgICBsb2coZXZ0LnRhcmdldClcbiAgICAgIGNvbnN0IGltID0gbmV3IEltYWdlKClcbiAgICAgIGltLnNyYyA9IGV2dC50YXJnZXQucmVzdWx0XG4gICAgICAkKCcjZmlsZS1kcm9wcGVyJykuYXBwZW5kKGltKVxuICAgICAgJChpbSkuYWRkQ2xhc3MoJ3VwcHJldmlldycpXG4gICAgICAvLyAkKCcjZmlsZS1kcm9wcGVyJykuY3NzKFxuICAgICAgLy8gICAgICB7J2JhY2tncm91bmQnOid1cmwoJyArIGV2dC50YXJnZXQucmVzdWx0ICsgJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInfSlcbiAgICB9XG5cbiAgICBsb2coQUpTLmZpbGUycG9zdClcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChBSlMuZmlsZTJwb3N0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuXG4gIHN0YXRpYyBjYW5jZWxGaWxlKCkge1xuICAgICQoJyNmaWxlLWRyb3BwZXIgLnVwcHJldmlldycpLnJlbW92ZSgpIC8vIHJlbW92ZSBhbnkgcHJpb3IgdXBsb2FkL3ByZXZpZXdcbiAgICAkKCcjZmlsZS1kcm9wcGVyLCBmaWxlLXN1Ym1pdCwgI2ZpbGUtY2FuY2VsLCAjZmlsZS11cGxvYWRpbmcnKS5oaWRlKClcbiAgICBpZiAoQUpTLmZpbGVfcGlja2VkKVxuICAgICAgZGVsZXRlIEFKUy5maWxlX3BpY2tlZFxuICAgIGlmIChBSlMuZmlsZTJwb3N0KVxuICAgICAgZGVsZXRlIEFKUy5maWxlMnBvc3RcbiAgfVxuXG5cbiAgc3RhdGljIGJhZEZpbGUoKSB7XG4gICAgbGV0IGZhaWwgPSBmYWxzZVxuXG4gICAgaWYgKCFmYWlsICAmJiAgIUFKUy5maWxlMnBvc3QpXG4gICAgICBmYWlsID0gJ2ZpbGUgaXMgbWlzc2luZydcblxuICAgIC8vIHBocCB1cGxvYWRfbWF4X2ZpbGVzaXplIGlzIDhNXG4gICAgaWYgKCFmYWlsICAmJiAgQUpTLmZpbGUycG9zdC5zaXplID4gODAwMDAwMClcbiAgICAgIGZhaWwgPSAnZmlsZSBpcyBvdmVyIDhNQiBpbiBzaXplJ1xuXG4gICAgaWYgKCFmYWlsKSB7XG4gICAgICBjb25zdCB0eXBlID0gQUpTLmZpbGUycG9zdC50eXBlLnRvTG93ZXJDYXNlKClcbiAgICAgIGlmICh0eXBlICE9PSAnaW1hZ2UvanBlZycgJiYgdHlwZSAhPT0gJ2ltYWdlL3BuZycgJiYgdHlwZSAhPT0gJ2ltYWdlL2dpZicpXG4gICAgICAgIGZhaWwgPSAnZmlsZSBub3QgcmVxdWlyZWQgZm9ybWF0IG9mIEpQRUcgb3IgUE5HIG9yIEdJRidcbiAgICB9XG5cbiAgICBpZiAoZmFpbClcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tYWxlcnRcbiAgICAgIGFsZXJ0KGZhaWwpXG5cbiAgICByZXR1cm4gZmFpbFxuICB9XG5cblxuICAvLyBmb3IgbWljcm9maWxtIGJvb2tzIHdpdGggbWFueSBtb250aHMgb2YgbmV3c3BhcGVycyBpbiBQREZcbiAgLy8gICBlZzogL2RldGFpbHMvbGFfY2FsZWFnbGVfcmVlbDFcbiAgLy9cbiAgLy8gcGFnaW5mbyBpcyBhIGxvZ2ljYWwgaGFzaG1hcCBKU09OIG9iamVjdCBvZjpcbiAgLy8gICBZWVlZTU1ERCA9PiBbY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgcGFnZXNdXG4gIC8vIGVnOlxuICAvLyAgIDIwMDgwMTI5ID0+ICBcIjEsMiwzLDExLDE3XCJcbiAgc3RhdGljIGRyYXdQREYoaWRlbnRpZmllciwgcGFnZWluZm8pIHtcbiAgICBjb25zdCB1cmxzdGFydCA9ICcvZG93bmxvYWQvJy5jb25jYXQoXG4gICAgICBpZGVudGlmaWVyLCAnLycsXG4gICAgICBpZGVudGlmaWVyLCAnX3BkZi56aXAvJyxcbiAgICAgIGlkZW50aWZpZXIsICdfcGRmLycsIGlkZW50aWZpZXIsICdfJyxcbiAgICApXG4gICAgbGV0IG11bHRpX3llYXIgPSBmYWxzZVxuICAgIGxldCBsYXN0X3llYXIgID0gZmFsc2VcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgZ3VhcmQtZm9yLWluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFnZWluZm8pIHtcbiAgICAgIGNvbnN0IHllYXIgPSBrZXkuc3Vic3RyKDAsIDQpXG4gICAgICBpZiAobGFzdF95ZWFyID09PSBmYWxzZSkgbGFzdF95ZWFyID0geWVhclxuICAgICAgaWYgKGxhc3RfeWVhciAhPT0geWVhcikge1xuICAgICAgICBtdWx0aV95ZWFyID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNlcCA9ICcnXG4gICAgbGV0IHN0ciA9IHNlcFxuICAgIGxldCBsYXN0eWVhcm1vbnRoID0gNjY2XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBndWFyZC1mb3ItaW5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYWdlaW5mbykge1xuICAgICAgLy8gbG9nKGtleSk7IGxvZyhwYWdlaW5mb1trZXldKTtcbiAgICAgIGNvbnN0IHBhZ2VzICAgICA9IHBhZ2VpbmZvW2tleV0uc3BsaXQoJywnKVxuICAgICAgY29uc3QgeWVhciAgICAgID0ga2V5LnN1YnN0cigwLCA0KVxuICAgICAgY29uc3QgbW9udGggICAgID0gcGFyc2VJbnQoa2V5LnN1YnN0cig0LCAyKSwgMTApXG4gICAgICBjb25zdCBkYXkgICAgICAgPSBwYXJzZUludChrZXkuc3Vic3RyKDYsIDIpLCAxMClcbiAgICAgIGNvbnN0IHllYXJtb250aCA9IHllYXIuY29uY2F0KCctJywgbW9udGgpXG4gICAgICBsZXQgc2tpcF9kYXkgPSBmYWxzZVxuXG4gICAgICBsZXQgbW9udGhOYW1lID0gJydcbiAgICAgIGlmICh5ZWFybW9udGggIT09IGxhc3R5ZWFybW9udGgpIHtcbiAgICAgICAgLyoqLyBpZiAobW9udGggPT09ICAxKSAgICAgICAgbW9udGhOYW1lID0gJ0phbnVhcnknXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAgMikgICAgICAgIG1vbnRoTmFtZSA9ICdGZWJydWFyeSdcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT09ICAzKSAgICAgICAgbW9udGhOYW1lID0gJ01hcmNoJ1xuICAgICAgICBlbHNlIGlmIChtb250aCA9PT0gIDQpICAgICAgICBtb250aE5hbWUgPSAnQXByaWwnXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAgNSkgICAgICAgIG1vbnRoTmFtZSA9ICdNYXknXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAgNikgICAgICAgIG1vbnRoTmFtZSA9ICdKdW5lJ1xuICAgICAgICBlbHNlIGlmIChtb250aCA9PT0gIDcpICAgICAgICBtb250aE5hbWUgPSAnSnVseSdcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT09ICA4KSAgICAgICAgbW9udGhOYW1lID0gJ0F1Z3VzdCdcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT09ICA5KSAgICAgICAgbW9udGhOYW1lID0gJ1NlcHRlbWJlcidcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT09IDEwKSAgICAgICAgbW9udGhOYW1lID0gJ09jdG9iZXInXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAxMSkgICAgICAgIG1vbnRoTmFtZSA9ICdOb3ZlbWJlcidcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT09IDEyKSAgICAgICAgbW9udGhOYW1lID0gJ0RlY2VtYmVyJ1xuICAgICAgICBlbHNlIGlmIChtb250aCA9PT0gdW5kZWZpbmVkKSBtb250aE5hbWUgPSAnU2luZ2xlIFBhZ2UgUERGcydcbiAgICAgICAgZWxzZSAvKiAgICAgICAgICAgICAqLyAgICAgICAgbW9udGhOYW1lID0gJ1Vua25vd25fJy5jb25jYXQobW9udGgpXG5cbiAgICAgICAgaWYgKG11bHRpX3llYXIpIG1vbnRoTmFtZSA9IHllYXIuY29uY2F0KCcgJywgbW9udGhOYW1lKVxuXG4gICAgICAgIC8vIG1ha2UgaGVhZGVyL2EgdGhhdCBzaG93cy9oaWRlcyBhIGhpZGRlbiBkaXYgYWZ0ZXIgaXQgd2l0aCB0aGUgbW9udGgncyBkYXRhXG4gICAgICAgIHN0ciArPSAoc3RyID8gJzwvZGl2PjwhLS1tby0tPjxici8+JyA6ICcnKVxuICAgICAgICBzdHIgKz0gYFxuPGEgaHJlZj1cIiMke21vbnRoTmFtZX0sJHt5ZWFyfVwiIG9uY2xpY2s9XCIkKCcjbSR7eWVhcm1vbnRofScpLnRvZ2dsZSgpOyByZXR1cm4gZmFsc2VcIj5cbjxzcGFuIGNsYXNzPVwiaWNvbm9jaGl2ZS1mb2xkZXJcIiAvPiAke21vbnRoTmFtZX1cbjwvYT5cbjxkaXYgY2xhc3M9XCJtb1wiIGlkPVwibSR7eWVhcm1vbnRofVwiPmBcbiAgICAgIH1cblxuICAgICAgLy8gbWFrZSBoZWFkZXIvYSB0aGF0IHNob3dzL2hpZGVzIGEgaGlkZGVuIGRpdiBhZnRlciBpdCB3aXRoIHRoZSBwYWdlIGRhdGFcbiAgICAgIGlmICgoZGF5ID09PSB1bmRlZmluZWQpIHx8IChkYXkgPT09ICcnKSkgc2tpcF9kYXkgPSB0cnVlXG4gICAgICBpZiAoc2tpcF9kYXkpIHtcbiAgICAgICAgc3RyICs9ICc8ZGl2IGNsYXNzPVwiZGF5XCI+J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyICs9IGBcbjxkaXYgY2xhc3M9XCJkYXlcIj5cbjxhIGhyZWY9XCIjJHt5ZWFybW9udGh9LSR7ZGF5fVwiXG4gICAgb25jbGljaz1cIiQoJyNtJHt5ZWFybW9udGh9ZCR7ZGF5fScpLnRvZ2dsZSgpO3JldHVybiBmYWxzZTtcIj5cbiAgPHNwYW4gY2xhc3M9XCJpY29ub2NoaXZlLWZvbGRlclwiIC8+ICR7ZGF5fVxuPC9hPlxuPGRpdiBjbGFzcz1cInBhZ2VzXCIgaWQ9XCJtJHt5ZWFybW9udGh9ZCR7ZGF5fVwiPmBcbiAgICAgIH1cblxuICAgICAgLy8gZHJvcCBpbiB0aGUgaW5kaXZpZHVhbCBwYWdlIGxpbmtzXG4gICAgICBsZXQgb2Zmc2V0ID0gMVxuICAgICAgbGV0IHBhZ2VcbiAgICAgIGxldCBwbnVtXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhZ2UgPSBwYWdlc1tqXVxuICAgICAgICBpZiAoIXBhZ2UpXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBuby1jb250aW51ZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIGlmIChvZmZzZXQgPiAwKSBvZmZzZXQgPSAxIC0gcGFnZVxuICAgICAgICBwbnVtID0gcGFyc2VJbnQocGFnZSwgMTApICsgb2Zmc2V0XG5cbiAgICAgICAgLy8gbGVmdCAwLXBhZCB0byA0IGRpZ2l0cyBhcyBuZWVkZWRcbiAgICAgICAgcGFnZSA9ICcwMDAwJy5jb25jYXQocGFnZSlcbiAgICAgICAgcGFnZSA9IHBhZ2Uuc3Vic3RyKHBhZ2UubGVuZ3RoIC0gNCwgNClcblxuICAgICAgICBjb25zdCB1cmwgPSB1cmxzdGFydC5jb25jYXQocGFnZSwgJy5wZGYnKVxuICAgICAgICBzdHIgKz0gYDxhIGhyZWY9XCIke3VybH1cIj5bJHtwbnVtfV08L2E+IGBcbiAgICAgIH1cblxuICAgICAgaWYgKHNraXBfZGF5KVxuICAgICAgICBzdHIgKz0gJzwvZGl2PidcbiAgICAgIGVsc2VcbiAgICAgICAgc3RyICs9ICc8L2Rpdj48IS0tcGFnZXMtLT48L2Rpdj48IS0tZGF5LS0+J1xuXG4gICAgICBsYXN0eWVhcm1vbnRoID0geWVhcm1vbnRoXG4gICAgfVxuXG4gICAgc3RyICs9ICc8L2Rpdj48IS0tbW8tLT4nXG5cbiAgICAvLyByZXBsYWNlIHRoZSBcInBkZnNcIiBlbXB0eSBkaXYgd2l0aCBvdXIgaGVmdHkgSFRNTFxuICAgICQoJyNwZGZzIC5yZXBsYWNlZCcpLmh0bWwoc3RyKVxuICB9XG5cblxuICAvLyBmb3IgY29sbGVjdGlvbiBwYWdlcywgW0Fib3V0XSB0YWJcbiAgc3RhdGljIGdyYWZzKCkge1xuICAgIGNvbnN0ICRncmFmczEgPSAkKCcjZ3JhZnMxJylcbiAgICBjb25zdCAkZ3JhZnMyID0gJCgnI2dyYWZzMicpXG4gICAgaWYgKCEkZ3JhZnMxLmxlbmd0aClcbiAgICAgIHJldHVyblxuICAgIGlmICh0eXBlb2YgJGdyYWZzMS5hdHRyKCdkYXRhLWlkJykgPT09ICd1bmRlZmluZWQnKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBpZGVudGlmaWVyID0gJGdyYWZzMS5hdHRyKCdkYXRhLWlkJylcbiAgICAkZ3JhZnMxLmF0dHIoJ2RhdGEtaWQnLCBudWxsKVxuXG4gICAgbG9nKCdsb2FkaW5nIGdyYWZzJylcbiAgICAkZ3JhZnMxLmh0bWwoJzxpPjxzbWFsbD5sb2FkaW5nIGdyYXBoIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiLz48L3NtYWxsPjwvaT4nKS5zaG93KClcbiAgICAkZ3JhZnMyLmh0bWwoJzxpPjxzbWFsbD5sb2FkaW5nIGdyYXBoIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiLz48L3NtYWxsPjwvaT4nKS5zaG93KClcbiAgICBjb25zdCB0b2sgPSAnPGgyPidcbiAgICAkLmdldCgnL2RldGFpbHMvJy5jb25jYXQoaWRlbnRpZmllciwgJyZncmFmcz0xJnY9MycpLCAoaHRtKSA9PiB7XG4gICAgICBjb25zdCBhID0gaHRtLnNwbGl0KHRvaylcbiAgICAgIGlmIChhLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICQoJyNhY3Rpdml0eS1yZXZpZXdzTicpLmh0bWwoYVsxXSkucGFyZW50cygnLmFjdGl2aXR5LWJveCcpLnNob3coKVxuICAgICAgICAkKCcjYWN0aXZpdHktZm9ydW1OICAnKS5odG1sKGFbMl0pLnBhcmVudHMoJy5hY3Rpdml0eS1ib3gnKS5zaG93KClcbiAgICAgIH1cbiAgICAgIGlmIChhLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAkZ3JhZnMxLmh0bWwodG9rICsgYVszXSlcbiAgICAgICAgJGdyYWZzMi5odG1sKHRvayArIGFbNF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZ3JhZnMxLmh0bWwoJyhncmFwaCBkYXRhIG5vdCBhdmFpbGFibGUpJylcbiAgICAgICAgJGdyYWZzMi5odG1sKCcoZ3JhcGggZGF0YSBub3QgYXZhaWxhYmxlKScpXG4gICAgICB9XG4gICAgfSlcblxuICAgIEFKUy5zZXRVcFRvcFJlZ2lvbnNUYWJsZSgpXG4gIH1cblxuXG4gIHN0YXRpYyBxdWlja19kb3duKGlkLCB0YXJnZXQpIHtcbiAgICBjb25zdCBpZHNlbCA9IGAjJHtpZH1gXG5cbiAgICBpZiAoISQoJy5mb3JtYXQtZ3JvdXAuaW4nKS5sZW5ndGgpIHtcbiAgICAgIC8vIG5vIHNldCBvZiBmaWxlcyBmb3IgYSBzaW5nbGUgZm9ybWF0IHNob3dpbmcuLi4geWV0IVxuICAgICAgY29uc3QgZm9ybWF0ID0gJCh0YXJnZXQpLnRleHQoKVxuICAgICAgY29uc3QgJGZvcm1hdEdyb3VwID0gJChpZHNlbCkucGFyZW50cygnLmZvcm1hdC1ncm91cCcpXG5cbiAgICAgICQoJy5kb3dubG9hZC1idXR0b24nKS5odG1sKGZvcm1hdC5jb25jYXQoJyBGSUxFUycpKVxuICAgICAgJGZvcm1hdEdyb3VwLmFkZENsYXNzKCdpbicpXG4gICAgICAvLyBoaWRlIHRoZSBvdGhlciBzdW1tYXJ5IGZvcm1hdHMgKG9uZS1saW5lcikgY2xpY2thYmxlc1xuICAgICAgJCgnLmZvcm1hdC1ncm91cDpub3QoLmluKScpLnNsaWRlVXAoKVxuICAgICAgJChpZHNlbCkuc2xpZGVEb3duKClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmUtb3BlbiBhbGwgdGhlIHN1bW1hcnkgZm9ybWF0cyAob25lLWxpbmVyKSBjbGlja2FibGVzXG4gICAgICAkKCcuZm9ybWF0LWdyb3VwJykuc2xpZGVEb3duKDQwMClcbiAgICAgIC8vIGNsb3NlIHRoZSBvcGVuIHNldCBvZiBzaW5nbGUgZmlsZXNcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBmdHcsIHRoeCBmb3Igbm90aGluZyBqcXVlcnlcbiAgICAgICAgJCgnLmZvcm1hdC1ncm91cC5pbicpLnJlbW92ZUNsYXNzKCdpbicpXG4gICAgICAgICQoJy5kb3dubG9hZC1idXR0b24nKS5odG1sKCdET1dOTE9BRCBPUFRJT05TJylcbiAgICAgIH0sIDQwMClcbiAgICAgICQoaWRzZWwpLnNsaWRlVXAoKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICAvLyBwYXJzZSBhIENHSSBhcmdcbiAgc3RhdGljIGFyZyh0aGVBcmdOYW1lLCB0cnlfZnVsbCkge1xuICAgIGNvbnN0IHNBcmdzID0gKHRyeV9mdWxsICAmJiAgbG9jYXRpb24uc2VhcmNoID09PSAnJyA/XG4gICAgICBsb2NhdGlvbi5ocmVmLnNsaWNlKDEpLnNwbGl0KCcmJykgOlxuICAgICAgbG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJykpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzQXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNBcmdzW2ldLnNsaWNlKDAsIHNBcmdzW2ldLmluZGV4T2YoJz0nKSkgPT09IHRoZUFyZ05hbWUpIHtcbiAgICAgICAgY29uc3QgciA9IHNBcmdzW2ldLnNsaWNlKHNBcmdzW2ldLmluZGV4T2YoJz0nKSArIDEpXG4gICAgICAgIHJldHVybiAoci5sZW5ndGggPiAwID8gdW5lc2NhcGUocikuc3BsaXQoJywnKSA6ICcnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIHNldHVwIHRyaWdnZXIgb24gMS8yIHNlY29uZCBvZiBob3ZlcmluZyBvdmVyIHRoZSBuYXYgSUEgbG9nb1xuICBzdGF0aWMgbG9nb1RleHQoKSB7XG4gICAgY29uc3QgaGlkZUxvZ29UZXh0ID0gKCkgPT4ge1xuICAgICAgJCgnI2ludGVybmV0LWFyY2hpdmUnKS5mYWRlT3V0KCdzbG93JywgKCkgPT4ge1xuICAgICAgICAkKCcjaW50ZXJuZXQtYXJjaGl2ZScpLnJlbW92ZSgpXG4gICAgICAgICQoJyNleGl0LWVyJykuc2hvdygpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxldCBtb3VzZXRpbWVyID0gZmFsc2VcblxuICAgIC8vIGF4eHggbWFrZSBzdXJlIHdoZW4gaXQgb3BlbnMgb24gVEFCLCB0aGUgYWJvdXQgbGkgaXMgaW4gdGhlIERPTSAqbmV4dCpcbiAgICAkKCcubmF2YmFyLW5hdjpmaXJzdCcpLm9uKCdtb3VzZWVudGVyIGZvY3VzaW4nLCAoZXZ0KSA9PiB7XG4gICAgICAvLyBPbmx5IHByb2NlZWQgaWYgdXNlciBpcyBpbnRlcmFjdGluZyB3aXRoIHRoZSBsb2dvIGVsZW1lbnRzLlxuICAgICAgaWYgKCEkKGV2dC50YXJnZXQpLmlzKCd1bCwgLm5hdmJhci1icmFuZCwgLmljb25vY2hpdmUtbG9nbywgLmxvZ28tdGV4dC1oaWRlcicpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgbW91c2V0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoJCgnI2ludGVybmV0LWFyY2hpdmUnKS5sZW5ndGgpIHtcbiAgICAgICAgICBoaWRlTG9nb1RleHQoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgJCgnI2V4aXQtZXInKS5oaWRlKCkgLy8gKGdldHMgaW4gdGhlIHdheSBvZiB4cy9tb2JpbGUhKVxuICAgICAgICAvLyBmbGFuayB0aGUgSUEgbG9nbyFcbiAgICAgICAgJCgnLm5hdmJhci1uYXY6Zmlyc3QnKS5wcmVwZW5kKCQoYFxuPGRpdiBpZD1cImludGVybmV0LWFyY2hpdmVcIiBjbGFzcz1cImhpZGRlbi14cyBsb2dvLXRleHQtaGlkZXJcIlxuICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyB0b3A6MTBweDsgd2lkdGg6MTAwJTsgdGV4dC1hbGlnbjpjZW50ZXI7XCI+XG48ZGl2IGNsYXNzPVwidG9waW5ibG9jayBsb2dvLXRleHQtaGlkZXJcIiBzdHlsZT1cIndpZHRoOjEwMHB4OyBwYWRkaW5nLWxlZnQ6MTBweDtcIj5cbiAgPGRpdiBjbGFzcz1cImxvZ28tdGV4dC1oaWRlclwiXG4gICAgICBzdHlsZT1cImRpc3BsYXk6bm9uZTsgd2lkdGg6ODVweDsgaGVpZ2h0OjMwcHg7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgLTM1cHggdG9wIG5vLXJlcGVhdCB1cmwoL2ltYWdlcy9mb290ZXIucG5nKVwiIC8+XG48L2Rpdj48ZGl2IGNsYXNzPVwidG9waW5ibG9jayBsb2dvLXRleHQtaGlkZXJcIiBzdHlsZT1cIndpZHRoOjM1cHg7aGVpZ2h0OjFweDtcIiAvPjxkaXYgY2xhc3M9XCJ0b3BpbmJsb2NrIGxvZ28tdGV4dC1oaWRlclwiIHN0eWxlPVwid2lkdGg6MTAwcHg7XCI+XG4gIDxkaXYgY2xhc3M9XCJsb2dvLXRleHQtaGlkZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTsgd2lkdGg6ODVweDsgaGVpZ2h0OjMwcHg7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgLTExNnB4IHRvcCBuby1yZXBlYXQgdXJsKC9pbWFnZXMvZm9vdGVyLnBuZylcIiAvPlxuPC9kaXY+XG48L2Rpdj5gKSlcblxuICAgICAgICAvLyBib3RoIG9mIHRoZSBhYm92ZSBkaXZzIGFyZSBoaWRkZW4uICBub3cgZmFkZSB0aGVtIGluXG4gICAgICAgICQoJyNpbnRlcm5ldC1hcmNoaXZlID4gZGl2ID4gZGl2JykuZmFkZUluKCdzbG93JylcbiAgICAgIH0sIDEwMDApXG4gICAgfSkubW91c2VsZWF2ZSgoKSA9PiB7XG4gICAgICBpZiAobW91c2V0aW1lcikgY2xlYXJUaW1lb3V0KG1vdXNldGltZXIpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBzY3JvbGxlZCgpIHtcbiAgICBjb25zdCBuZXd0b3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcbiAgICAvLyBsb2coJ3Njcm9sbGVkIHRvICcsIG5ld3RvcClcblxuICAgIGNvbnN0IHNlbGVjdG9yID0gJy5tb3JlX3NlYXJjaDp2aXNpYmxlJ1xuICAgIGNvbnN0ICRlID0gJChzZWxlY3RvcilcbiAgICBpZiAoISRlLmxlbmd0aClcbiAgICAgIHJldHVyblxuXG4gICAgLy8gbWFrZSB0aGUgZWRnZSBkZXRlY3QgZm9yIFwiaGl0IGJvdHRvbVwiIDQwIHBpeGVscyBmcm9tIHRoZSBib3R0b21cbiAgICBjb25zdCBjaGVjayA9ICgoJGUub2Zmc2V0KCkudG9wICsgJGUub3V0ZXJIZWlnaHQoKSkgLSAkKHdpbmRvdykuaGVpZ2h0KCkpIC0gNDBcbiAgICAvLyBsb2coJy12LSBjaGVjaycsIGNoZWNrKVxuICAgIGlmIChuZXd0b3AgPiBjaGVjaykge1xuICAgICAgbG9nKCdoaXQgcm9jayBib3R0b20gPiAnLCBjaGVjaylcbiAgICAgIGlmICghQUpTLm1vcmVfc2VhcmNoaW5nKVxuICAgICAgICAkKHNlbGVjdG9yLmNvbmNhdCgnID4gYScpKS5jbGljaygpXG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgbW9yZV9zZWFyY2gobG5rLCB1cmxJbiwgcGFnZV9ub3cpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IEFKUy5zZWxlY3RvcigpXG4gICAgaWYgKHNlbGVjdG9yID09PSBmYWxzZSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgaWtpbmQgPSBzZWxlY3Rvci5yZXBsYWNlKC8jaWtpbmQtLywgJycpXG5cbiAgICBjb25zdCAkbW9yZV9zZWFyY2ggPSAkKHNlbGVjdG9yLmNvbmNhdCgnIC5tb3JlX3NlYXJjaCcpKVxuXG4gICAgLy8gd2Ugc3Rhc2ggYSByZWZlcmVuY2Ugb2Ygd2hhdCBwYWdlIHRoZSBjbGllbnQgaGFzIHJlcXVlc3RlZCwgc28gd2UgY2FuIGluY3JlbWVudCBpdCBvblxuICAgIC8vIGVhY2ggXCJtb3JlX3NlYXJjaCBoaXRcbiAgICBjb25zdCBwYWdlS2V5ID0gc2VsZWN0b3JcbiAgICBpZiAodHlwZW9mIEFKUy5wYWdlX21hcFtwYWdlS2V5XSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICBBSlMucGFnZV9tYXBbcGFnZUtleV0gPSAocGFnZV9ub3cgfHwgMSlcblxuICAgIGlmIChBSlMucGFnZV9tYXBbcGFnZUtleV0gPCAwKSB7XG4gICAgICAvLyAkbW9yZV9zZWFyY2guZmluZCgnLm1vcmUtc2VhcmNoLWFsbCcpLnNob3coKVxuICAgICAgcmV0dXJuIGZhbHNlIC8vIGFsbCByZXN1bHRzIHNob3dpbmcgLS0gbm8gbW9yZSBmb3IgdGhlIGlraW5kIGF2YWlsIHNvIG5vb3AvaWdub3JlXG4gICAgfVxuXG4gICAgQUpTLnBhZ2VfbWFwW3BhZ2VLZXldICs9IDFcbiAgICBjb25zdCBwYWdlID0gQUpTLnBhZ2VfbWFwW3BhZ2VLZXldXG5cbiAgICAkbW9yZV9zZWFyY2guZmluZCgnLm1vcmUtc2VhcmNoLWZldGNoaW5nJykuc2hvdygpXG5cbiAgICBBSlMubW9yZV9zZWFyY2hpbmcgPSB0cnVlXG5cbiAgICBsZXQgdXJsID0gdXJsSW4gKyBwYWdlXG4gICAgY29uc3QgdXJscmVwbGFjZSA9IGxvY2F0aW9uLnByb3RvY29sLmNvbmNhdCgnLy8nLCBsb2NhdGlvbi5ob3N0LCB1cmwpXG4gICAgdXJsICs9ICcmc2Nyb2xsPTEnXG5cbiAgICBsb2coJ3VybDogJywgdXJsKSAgICAgICAgICAgICAgLy8gdXJsIHRvIEFKQVggZ2V0IG5leHQgcGFnZVxuICAgIGxvZygndXJscmVwbGFjZScsIHVybHJlcGxhY2UpICAvLyB1cmwgdG8gY2hhbmdlIGJyb3dzZXIgbG9jYXRpb24gKHZpc3VhbGx5KSB0b1xuXG5cbiAgICBsb2coJ21vcmVfc2VhcmNoKHNlbGVjdG9yPScsIHNlbGVjdG9yLCAnc29ydD0nLCBpa2luZCwgJ3BhZ2U9JywgcGFnZSwgJ3VybD0nLCB1cmwsICcpJylcbiAgICAvLyBsb2coQUpTLnBhZ2VfbWFwKVxuXG5cbiAgICAkLmdldCh1cmwsIChodG0pID0+IHtcbiAgICAgIGlmIChodG0ubGVuZ3RoIDwgMTAwICAmJiAgJChodG0pLmZpbmQoJ2Rpdi5uby1yZXN1bHRzJykpIHtcbiAgICAgICAgLy8gbm8gbW9yZSByZXN1bHRzIGF2YWlsL2ZvdW5kLiAgd2UgaGF2ZSByZWFjaGVkIGluZmluaXR5IVxuICAgICAgICAkbW9yZV9zZWFyY2guZmluZCgnLm1vcmUtc2VhcmNoLWZldGNoaW5nLCBhLmJ0bicpLmhpZGUoKVxuICAgICAgICAvLyAkbW9yZV9zZWFyY2guZmluZCgnLm1vcmUtc2VhcmNoLWFsbCcpLnNob3coKVxuICAgICAgICBBSlMucGFnZV9tYXBbcGFnZUtleV0gPSAtMSAvLyBmbGFnIHRvIGlnbm9yZSBmdXR1cmUgbW9yZV9zZWFyY2ggYXR0ZW1wdHNcbiAgICAgICAgQUpTLm1vcmVfc2VhcmNoaW5nID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChBSlMucHVzaFN0YXRlICAmJiAgdHlwZW9mIGhpc3RvcnkucmVwbGFjZVN0YXRlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmxyZXBsYWNlKVxuXG5cbiAgICAgIGNvbnN0IHNlbGVjdG9ySUQgPSAkKHNlbGVjdG9yKS5hdHRyKCdpZCcpXG4gICAgICBpZiAoQUpTLnRpbGVyUFJFViAgJiYgIEFKUy50aWxlclBSRVYudW5zb3VyY2VkICAmJiAgQUpTLnRpbGVyUFJFVi51bnNvdXJjZWRbc2VsZWN0b3JJRF0pXG4gICAgICAgIGRlbGV0ZSBBSlMudGlsZXJQUkVWLnVuc291cmNlZFtzZWxlY3RvcklEXVxuXG5cbiAgICAgIGNvbnN0ICRzZWxlY3RvciA9ICQoc2VsZWN0b3IuY29uY2F0KCcgLnJlc3VsdHMnKSlcbiAgICAgICRzZWxlY3Rvci5hcHBlbmQoQUpTLmFkZE5vdGVzKEFKUy5hZGRpbmdOb3Rlc0tpbmQsIGh0bSkpXG5cbiAgICAgIC8vIHJlLXRpbGUgYW5kIHJlLWZsb3chICAodGhlIGZvcmNlIHNob3VsZCBmbG93IHRocm91Z2ggeW91KVxuICAgICAgQUpTLnRpbGVyKHNlbGVjdG9yKVxuICAgICAgJG1vcmVfc2VhcmNoLmZpbmQoJy5tb3JlLXNlYXJjaC1mZXRjaGluZycpLmhpZGUoKVxuICAgICAgQUpTLm1vcmVfc2VhcmNoaW5nID0gZmFsc2VcblxuICAgICAgQUpTLnBhcmVudF9ob3Zlcigkc2VsZWN0b3IpXG5cblxuICAgICAgLy8gT0ssIHRoaXMgaXMgcXVpdGUgYSBiaXQgbW9yZSBzdWJ0bGUuLi4gIHRoZSBIVE0gaGFzIGJlZW4gZHJvcHBlZCBpbixcbiAgICAgIC8vICphbmQqIHdlJ3ZlIGRvbmUgYSBiYXNpYyByZS10aWxpbmcuICBob3dldmVyLCBpdCdzIHZlcnkgbGlrZWx5IG1hbnlcbiAgICAgIC8vIG9mIHRoZSBpbWFnZXMgYXJlIHN0aWxsIGxvYWRpbmcuICBzbyBsaXN0ZW4gZm9yIGltYWdlIFwiaXMgbG9hZGVkXCIgZXZlbnRzXG4gICAgICAvLyBpZiB0aGV5IHRyaWNrbGUgaW4sIGFuZCBhdCBtb3N0IHJlLXRpbGUgZXZlcnkgMSBzZWNvbmQgKGV2ZW4gaWYgdGhleVxuICAgICAgLy8gbGlrZWx5IHRyaWNrbGluZyBpbiBhdCBhIGZhc3RlciByYXRlIHRoYW4gdGhhdCkgdW50aWwgdGhleSBhbGwgbG9hZGVkXG4gICAgICAkKHNlbGVjdG9yLmNvbmNhdCgnIGltZycpKS5vbignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KEFKUy5tb3JlX3NlYXJjaF90aHJvdHRsZXIpXG4gICAgICAgIEFKUy5tb3JlX3NlYXJjaF90aHJvdHRsZXIgPSBzZXRUaW1lb3V0KEFKUy50aWxlciwgMTAwMClcbiAgICAgIH0pXG5cblxuICAgICAgaWYgKHR5cGVvZiBhcmNoaXZlX2FuYWx5dGljcyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIGFyY2hpdmVfYW5hbHl0aWNzLnNlbmRfc2Nyb2xsX2ZldGNoX2V2ZW50KHBhZ2UpXG4gICAgfSlcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICAvLyB3aGVuIGVtYmVkIGNvZGVzIGFyZSBiZWluZyBzaG93biwgYWRqdXN0IHRoZWlyIGhlaWdodHMgc28gdGhleSBzaG93IGFsbCB0aGUgY29udGVudC9jb2RlcyFcbiAgc3RhdGljIGVtYmVkX2NvZGVzX2FkanVzdCgpIHtcbiAgICBsb2coJ3Nob3dpbmcgZW1iZWRzIScpXG5cbiAgICAvLyB0aGVzZSBhcmUgZm91bmQgKG9ubHkpIG9uIC9kZXRhaWxzLyBwYWdlc1xuICAgIGZvciAoY29uc3QgZW1iaWQgb2YgWydlbWJlZGNvZGVoZXJlJywgJ2VtYmVkY29kZWhlcmVXUCddKSB7XG4gICAgICBjb25zdCAkZW1iaWQgPSAkKGAjJHtlbWJpZH1gKVxuICAgICAgJGVtYmlkLnJlbW92ZUF0dHIoJ3Jvd3MnKS5jc3MoJ2hlaWdodCcsICcnKVxuXG4gICAgICBjb25zdCBlbWJ0eHQgPSAkZW1iaWQudGV4dCgpXG5cbiAgICAgIC8vIHRoaXMgaXMgKnB1a2UqIGNpdHkgLS0gc2luY2UgdGV4dGFyZWFzIGFyZSBhIFBJVEEsIG1ha2UgYSBzaGFkb3cgZGl2IHcvIHRoZVxuICAgICAgLy8gdGV4dCB3ZSB3YW50IGluIGl0LCB0cnlpbmcgdG8gYmUgc2FtZSB3aWR0aCwgc2FtZSBmb250LXNpemUsIGV0Yy5cbiAgICAgIC8vIGFuZCAqdGhlbiogaW5zZXJ0IGludG8gRE9NIGludmlzaWJpbHkgc28gd2UgY2FuIGNhbGN1bGF0ZSBpdHMgb3ZlcmFsbCBoZWlnaHRcbiAgICAgIC8vIC4uIGFuZCB0aGVuIHBlZyB0aGUgdGV4dGFyZWEgaGVpZ2h0IHRvIHRoYXQgaGVpZ2h0XG4gICAgICAkKCdib2R5JykucHJlcGVuZCgkKCc8ZGl2Lz4nKS5hdHRyKHtcbiAgICAgICAgaWQ6IGAke2VtYmlkfVNoYWRvd2AsXG4gICAgICAgIGNsYXNzOiAndGV4dGFyZWEtaW52ZXJ0LXJlYWRvbmx5IHJvdW5kYm94NScsXG4gICAgICB9KS5jc3Moe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIHRvcDogNjAsXG4gICAgICAgIGxlZnQ6IDEwLFxuICAgICAgICBwYWRkaW5nOiAnNXB4IDE1cHggNXB4IDE1cHgnLFxuICAgICAgICB3aWR0aDogJGVtYmlkLndpZHRoKCksXG4gICAgICAgICdmb250LXNpemUnOiAkZW1iaWQuY3NzKCdmb250LXNpemUnKSxcbiAgICAgIH0pXG4gICAgICAgIC50ZXh0KGVtYnR4dCkpXG5cbiAgICAgIGNvbnN0IGJlc3RIVCA9ICQoYCMke2VtYmlkfVNoYWRvd2ApLm91dGVySGVpZ2h0KCkgKyAxNVxuICAgICAgbG9nKGVtYmlkLCAnYmVzdGllIGhlaWdodCcsIGJlc3RIVCwgJ2ZvciBjdXJyZW50IHdpZHRoJywgJGVtYmlkLndpZHRoKCkpXG4gICAgICAkKGAjJHtlbWJpZH1TaGFkb3dgKS5yZW1vdmUoKVxuXG4gICAgICAkZW1iaWQuaGVpZ2h0KGJlc3RIVClcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZXIgJ29uZSBzaG90JyB3YXkgdG8gZHluYW1pY2FsbHkgaW5zZXJ0IGEgbW9kYWwgYW5kIHNob3cgaXQgb24gdGhlIHBhZ2UuXG4gICAqIFlvdSBjYW4gY2FsbCBpdCB3LyBhIGhhc2htYXAgb2Ygb3B0aW9uYWwgcGFyYW10ZXJzIHRvIG1ha2UgaXQgdmVyeSBlYXN5IG9uIGNhbGxlciBlbmQgdG8gZ3Jva1xuICAgKiAoc2ltaWxhciB0byBweXRob24ncyBrd2FyZ3MpXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW3ByZXBlbmQ9J2JvZHknXSAgICAgICAgYSBqUXVlcnkgc2VsZWN0b3Igd2hlcmUgdG8gcHJlcGVuZCB0aGUgbW9kYWwgbWFya3VwXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW3NlbGVjdG9yPScjbXktbW9kYWwnXSAgYSB1bmlxdWUgaWQgLS0gaXMgX2ZpcnN0XyByZW1vdmUoZCksIGFuZCB0aGVuIGFkZGVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW3RpdGxlPSdjb25maXJtZWQnXSAgICAgd2hhdCB0aXRsZS9oZWFkZXIgc2hvdWxkIGFwcGVhclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtib2R5PScnXSAgICAgICAgICAgICAgIHRleHQvbWFya3VwIGZvciB0aGUgbW9kYWwgYm9keVxuICAgKiBAcmV0dXJuIG4vYVxuICAgKi9cbiAgc3RhdGljIG1vZGFsKHtcbiAgICBwcmVwZW5kID0gJ2JvZHknLFxuICAgIHNlbGVjdG9yID0gJyNteS1tb2RhbCcsXG4gICAgdGl0bGUgPSAnY29uZmlybWVkJyxcbiAgICBib2R5ID0gJycsXG4gIH0gPSB7fSkge1xuICAgIGNvbnN0IGlkID0gc2VsZWN0b3IucmVwbGFjZSgvIy8sICcnKVxuICAgICQoc2VsZWN0b3IpLnJlbW92ZSgpXG4gICAgJChwcmVwZW5kKS5wcmVwZW5kKGBcbjxkaXYgaWQ9XCIke2lkfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmc6MTBweDtcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cImNsb3NlXCJcbiAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29ub2NoaXZlLXJlbW92ZS1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+cmVtb3ZlLWNpcmNsZTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgIDxoMyBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JHt0aXRsZX08L2gzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCIke2lkfS1ib2R5XCI+JHtib2R5fTwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+YClcbiAgICAkKHNlbGVjdG9yKS5tb2RhbCgnc2hvdycpXG4gIH1cblxuXG4gIC8vIGR5bmFtaWNhbGx5IGFkZHMgbW9kYWwgdG8gcGFnZSAoaWYgaXNudCB0aGVyZSBhbHJlYWR5KVxuICBzdGF0aWMgX21vZGFsX2FkZChzZWxlY3RvciwgY29uZikgeyAvLyBsb2dpY2FsbHkgcHJpdmF0ZVxuICAgIGxvZyhjb25mKVxuXG4gICAgaWYgKCQoc2VsZWN0b3IpLmxlbmd0aClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2VsZWN0b3JJRCA9IHNlbGVjdG9yLnJlcGxhY2UoLyMvLCAnJylcblxuICAgICQoJ2JvZHknKS5wcmVwZW5kKGBcbjxkaXYgaWQ9XCIke3NlbGVjdG9ySUR9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXIgJHtjb25mLmhlYWRlckNsYXNzID8gY29uZi5oZWFkZXJDbGFzcyA6ICdtb2RhbC1oZWFkZXItc3RkJ31cIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25vY2hpdmUtcmVtb3ZlLWNpcmNsZVwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGgyIGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgJHt0eXBlb2YgY29uZi50aXRsZSA9PT0gJ3VuZGVmaW5lZCcgPyAnQ29uZmlybWVkJyA6IGNvbmYudGl0bGV9XG4gICAgICA8L2gyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCIke3NlbGVjdG9ySUR9LWJvZHlcIj5cbiAgICAgICR7dHlwZW9mIGNvbmYuYm9keSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IGNvbmYuYm9keX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjwvZGl2PmApXG5cbiAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ2JsdXJyeScpIC8vIGV4eHhwZXJpbWVudCFcbiAgfVxuXG5cbiAgc3RhdGljIG1vZGFsX2JldGEobG5rLCBjb25mSW4pIHsgLy8gTk9URTogbm90IGluIHVzZSBub3dcbiAgICBjb25zdCBjb25mID0gY29uZkluXG4gICAgY29uZi50aXRsZSA9ICc8Y2VudGVyPkdpdmUgVXMgRmVlZGJhY2shPC9jZW50ZXI+J1xuXG4gICAgLy8gU2V0IGEgY29va2llICpOT1cqIHcvIEpTIC0tIHNvIHdlIGNhbiBhYnNvbHV0ZWx5IGFzc3VyZSB0aGF0IGlmIHVzZXIgaGl0c1xuICAgIC8vIHRoZSBleGl0IGZvcm0gKldJVEhPVVQqIGNvb2tpZXMsIHRoYXQgdGhleSBtdXN0IGJlIGRpc2FibGluZyBjb29raWVzIG9uIGFyY2hpdmUub3JnXG4gICAgLy8gKGJ1dCBpbnRlcmVzdGluZ2x5IGhhdmUgSlMgZW5hYmxlZCAoc2luY2UgdGhleSBhcmUgaGVyZSEgOy0pKVxuICAgIC8vIFNvIGV4aXQgZm9ybSBjYW4gZ2l2ZSB0aGVtIFwieW91IG5lZWQgdG8gZW5hYmxlIGNvb2tpZXNcIiBmYWlsLi4uXG4gICAgJC5jb29raWUoJ2JldGEtbW9kYWwnLCAnb3BlbicsIHsgcGF0aDogJy8nLCBleHBpcmVzOiAxLCBkb21haW46ICcuYXJjaGl2ZS5vcmcnIH0pXG5cbiAgICBjb25zdCBzZWxlY3RvciA9ICQobG5rKS5hdHRyKCdkYXRhLXRhcmdldCcpXG4gICAgY29uZi5ocmVmID0gbG9jYXRpb24uaHJlZlxuICAgIGNvbmYuaHJlZiA9IGNvbmYuaHJlZi5yZXBsYWNlKC8mdWkzPTEkLywgJycpXG4gICAgY29uZi5ocmVmID0gY29uZi5ocmVmLnJlcGxhY2UoL1xcL3YyJC8sICAnJylcblxuICAgIGNvbmYuYm9keSA9IGBcbjxzdHlsZT4gI2ZiYWNrIGg0IHsgbWFyZ2luLXRvcDozMHB4OyB9IDwvc3R5bGU+XG48ZGl2IGlkPVwiZmJhY2tcIiBzdHlsZT1cInBhZGRpbmc6MjBweFwiPlxuICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL2RldGFpbHMvdjJ0b3VyMjAxNTA0MjBcIj5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7IGZsb2F0OnJpZ2h0XCI+XG4gICAgICA8aW1nIHNyYz1cIi9kb3dubG9hZC92MnRvdXIyMDE1MDQyMC92MnRvdXIyMDE1MDQyMC50aHVtYnMvQXByaWwyMDIwMTVUb3VyXzAwMDM3NS5qcGdcIi8+PGJyLz5cbiAgICAgIFRVVE9SSUFMIFZJREVPXG4gICAgPC9kaXY+XG4gIDwvYT5cbiAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4XCI+XG4gICAgUGxlYXNlIHRha2UgYSBtb21lbnQgdG8gZ2l2ZSB1cyBmZWVkYmFjayBiZWxvdy5cbiAgICBXZSBjb25zaWRlciB0aGVzZSBjb21tZW50cyBhcyB3ZSBtYWtlIGNoYW5nZXMgdG8gdGhlIHNpdGUuXG4gIDwvZGl2PlxuICA8aDUgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICA8YnIvPjxici8+PGJyLz5cbiAgICBUSEFOSyBZT1UgZm9yIHlvdXIgdmFsdWFibGUgZmVlZGJhY2shXG4gIDwvaDU+XG4gIDxmb3JtIGlkPVwibW9kYWxfYmV0YV9mb3JtXCIgbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9zZXJ2aWNlcy9leGl0LnBocFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZlZWRiYWNrX29ubHlcIiB2YWx1ZT1cIjFcIi8+PGJyLz5cblxuICAgIDxoND5GZWVkYmFjayAoZGV0YWlscyBhcmUgaGVscGZ1bCk6PC9oND5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBuYW1lPVwiZmVlZGJhY2tcIiByb3dzPVwiNFwiPjwvdGV4dGFyZWE+XG5cbiAgICA8aDQ+TWF5IHdlIGNvbnRhY3QgeW91IGFib3V0IHlvdXIgZmVlZGJhY2s/PC9oND5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbnRhY3RcIiB2YWx1ZT1cInllc1wiLz4geWVzLCBoZXJlJ3MgbXkgZW1haWwgYWRkcmVzczo8YnIvPlxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtbFwiLz4gPGJyLz5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbnRhY3RcIiB2YWx1ZT1cIm5vXCIvPiBubzxici8+XG4gICAgPGhyIHN0eWxlPVwiYm9yZGVyLWNvbG9yOmJsYWNrO2JhY2tncm91bmQtY29sb3I6YmxhY2s7Y29sb3I6YmxhY2tcIiAvPlxuICAgIFlvdSBjYW4gdXNlIHRoZSBjbGFzc2ljIHZlcnNpb24gb2YgYXJjaGl2ZS5vcmcgZm9yIGEgbGltaXRlZCBwZXJpb2Qgb2YgdGltZS48YnIvPlxuICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Jsb2cuYXJjaGl2ZS5vcmcvMjAxNC8xMS8wNS9yZWRlc2lnbi9cIj5cbiAgICAgIExlYXJuIG1vcmVcbiAgICA8L2E+XG4gICAgYWJvdXQgd2h5IGFyY2hpdmUub3JnIGNoYW5nZWQuPGJyLz5gXG5cbiAgICBpZiAoY29uZi5mZWVkYmFja19vbmx5KSB7XG4gICAgICBjb25mLmJvZHkgKz0gYFxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOjIwcHhcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5gXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmYuYm9keSArPSBgXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MjBweFwiIHZhbHVlPVwiU3VibWl0IEZlZWRiYWNrXCIvPlxuICAgICAgICA8aW5wdXQgaWQ9XCJtb2RhbF9iZXRhX2Zvcm1fZXhpdFwiIGNsYXNzPVwiYnRuXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLXRvcDoyMHB4XCIgdmFsdWU9XCJFeGl0IHRvIENsYXNzaWMgU2l0ZVwiLz5gXG4gICAgfVxuICAgIGNvbmYuYm9keSArPSBgXG4gICAgPGJyLz48YnIvPlxuICAgIDxpPldoYXQncyBOZXc/PC9pPlxuICAgIFtcbiAgICAgIDxhIHRhcmdldD1cInRvcFwiIGhyZWY9XCJodHRwczovL2Jsb2cuYXJjaGl2ZS5vcmcvMjAxNS8wMi8xMi93aGF0cy1uZXctd2l0aC12Mi9cIj5yZWNlbnQgY2hhbmdlczwvYT4gfFxuICAgICAgPGEgdGFyZ2V0PVwidG9wXCIgaHJlZj1cIi9DSEFOR0VMT0cudHh0XCI+ZGV0YWlsZWQgQ0hBTkdFTE9HPC9hPlxuICAgIF1cbiAgPC9mb3JtPlxuPC9kaXY+YFxuXG5cbiAgICBBSlMuX21vZGFsX2FkZChzZWxlY3RvciwgY29uZilcblxuICAgIC8vIGluIGNhc2UgaXQncyBub3Qgb2J2aW91cywgdGhlcmUgYXJlIEZPVVIgQ0FTRVMgd2UgKGhhdmUgdG8pIGhhbmRsZTpcbiAgICAvLyAgIGZlZWRiYWNrIG9ubHksIGhpdCBbc3VibWl0XSBidXR0b25cbiAgICAvLyAgIGZlZWRiYWNrIG9ubHksIGNhbmNlbCBvdXQgKG5vIGZlZWRiYWNrIGdpdmVuKVxuICAgIC8vICAgZXhpdCBiZXRhLCBoaXQgW3N1Ym1pdF0gYnV0dG9uXG4gICAgLy8gICBleGl0IGJldGEsIG5vIGZlZWRiYWNrIGdpdmVuXG4gICAgJCgnI21vZGFsX2JldGFfZm9ybV9leGl0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJCgnI21vZGFsX2JldGFfZm9ybSBpbnB1dFtuYW1lPWZlZWRiYWNrX29ubHldJykudmFsKDApXG4gICAgICBjb25mLmZlZWRiYWNrX29ubHkgPSBmYWxzZVxuICAgICAgY29uZi5leGl0aW5nID0gdHJ1ZVxuICAgICAgJCgnI21vZGFsX2JldGFfZm9ybScpLnN1Ym1pdCgpXG4gICAgfSlcblxuXG4gICAgJCgnI21vZGFsX2JldGFfZm9ybScpLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBsb2coJ3N1Ym1pdCBjbGlja2VkIScpXG5cbiAgICAgIGNvbmYuc3VibWl0dGVkID0gdHJ1ZVxuICAgICAgY29uZi5wb3N0ZGF0YSA9ICQoJyNtb2RhbF9iZXRhX2Zvcm0nKS5zZXJpYWxpemUoKSAvLyBvaCwgZmt5YSFcblxuICAgICAgLy8gd2UncmUgcG9saXRlXG4gICAgICAkKHNlbGVjdG9yLmNvbmNhdCgnIGg1JykpLmZhZGVJbignc2xvdycpXG4gICAgICAkKHNlbGVjdG9yLmNvbmNhdCgnIGZvcm0nKSkuZmFkZU91dCgnc2xvdycpXG5cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIEFKQVggZm9ybSBwb3N0LCBrZWVwaW5nIHBhZ2Ugd2hlcmUgaXQgaXNcbiAgICAgICAgJC5wb3N0KCcvc2VydmljZXMvZXhpdC5waHAnLCBjb25mLnBvc3RkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgbG9nKCdQT1NURUQgJywgY29uZi5wb3N0ZGF0YSlcblxuICAgICAgICAgIGlmICgoIWNvbmYuZmVlZGJhY2tfb25seSAgfHwgIGNvbmYuZXhpdGluZykgICYmICBkb2N1bWVudC5jb29raWUgPT09ICcnKSB7XG4gICAgICAgICAgICAvLyB1c2VyIGRpc2FibGVzIGNvb2tpZXMsIHNvIGdvIGRpcmVjdGx5IHRvIGV4aXQgZm9ybSB3aGVyZSB3ZSdsbFxuICAgICAgICAgICAgLy8gZ2l2ZSB0aGVtIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhhdCBhbmQgaG93IHdlIGNhbid0IFwic3RpY2tcIlxuICAgICAgICAgICAgLy8gdGhlaXIgcHJlZmVyZW5jZSB0byBleGl0IGJldGEuLi5cbiAgICAgICAgICAgIGxvZygnRVhJVElORyBCVVQgSEFTIE5PIENPT0tJRVMhJylcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL3NlcnZpY2VzL2V4aXQucGhwJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdibHVycnknKVxuICAgICAgICAgICQoc2VsZWN0b3IpLm1vZGFsKCdoaWRlJylcbiAgICAgICAgfSlcbiAgICAgIH0sIDI1MDApXG5cbiAgICAgIHJldHVybiBmYWxzZSAvLyBkb250IGRvICpub3JtYWwqIHN1Ym1pdCBvZiB0aGUgZm9ybSAoYW5kIGRyaXZlIHRoZSBwYWdlIGF3YXkpXG4gICAgfSlcblxuXG4gICAgJChzZWxlY3RvcikubW9kYWwoJ3Nob3cnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgbG9nKCdiZXRhIG1vZGFsIGhpZGRlbicpXG5cbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYmx1cnJ5JylcbiAgICAgIGlmIChjb25mLmZlZWRiYWNrX29ubHkgIHx8ICAhY29uZi5leGl0aW5nKSB7XG4gICAgICAgICQoc2VsZWN0b3IpLnJlbW92ZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBleGl0Rk4gPSAoKSA9PiB7XG4gICAgICAgIGlmICghY29uZi5zdWJtaXR0ZWQpIHtcbiAgICAgICAgICAvLyB1c2VyIGNsaWNrZWQgb3V0IG9mIG1vZGFsIG9yIFt4XSBjbG9zZSBidXR0b24gLS0gbm8gZm9ybSBzdWJtaXRcbiAgICAgICAgICAvLyBidXQgdGhleSBETyB3YW50IHRvIGV4aXQgYmV0YS4uLlxuICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL3NlcnZpY2VzL2V4aXQucGhwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoc2VsZWN0b3IpLnJlbW92ZSgpXG4gICAgICAgICAgbG9nKCdnb2luZyB0byAnLCBjb25mLmhyZWYpXG4gICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGNvbmYuaHJlZlxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgaWYgKHR5cGVvZiBhcmNoaXZlX2FuYWx5dGljcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXJjaGl2ZV9hbmFseXRpY3Muc2VuZF9waW5nKHtcbiAgICAgICAgICBraW5kOiAnZXZlbnQnLFxuICAgICAgICAgIGVjOiAnaW5fYmV0YScsXG4gICAgICAgICAgZWE6ICdleGl0JyxcbiAgICAgICAgICBjYWNoZV9idXN0OiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICB9LCBleGl0Rk4pIC8vIG9uY2UgYW5hbHl0aWNzIEdJRiBpcyBsb2FkZWQsIGludm9rZSBvdXIgY2FsbGJhY2shXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2coJ3VobyBhbmFseXRpY3Mgbm90IGRlZmluZWQhJylcbiAgICAgICAgLy8gc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IGp1c3QgdG8gYmUgc2FmZSEhXG4gICAgICAgIGV4aXRGTigpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFBhcnNlIEFQSSBkYXRhIGFuZCBjaGVjayBpZiB0aGUgaXRlbSBpcyBzdWNjZXNzZnVsbHkgbWFya2VkIHRvIGZhdm9yaXRlIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYm9va21hcmtSZXMgcmVzcG9uc2UgZGF0YSBmcm9tIC9ib29rbWFya3MucGhwP2FkZF9ib29rbWFyaz0xJi4uLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRmF2b3JpdGVTdWNjZXNzZnVsKGJvb2ttYXJrUmVzKSB7XG4gICAgcmV0dXJuIChib29rbWFya1Jlcy5pbmRleE9mKCc8bWV0YSBuYW1lPVwiaWEtZmF2b3JpdGUtc3VjY2Vzc1wiIGNvbnRlbnQ9XCIxXCI+JykgIT09IC0xKVxuICB9XG5cbiAgLy8gZ2l2ZXMgdXMgYWJpbGl0eSB0byBoYXZlIEpTIGludGVyY2VwdCBhbiBocmVmIGNsaWNrIGFuZCBpbnN0ZWFkIGRvIGEgYm9vdHN0cmFwIG1vZGFsLlxuICAvLyBlZzogd2hlbiBzb21lb25lIEZhdm9yaXRlcyBhIGxpc3Qgb3IgaXRlbSAtIGEga2luZCBvZiBjb25maXJtYXRpb24gYm94LlxuICAvLyAgICAgSW4gdGhhdCBjYXNlLCB3ZSB3YW50IGl0IHRvIGp1c3Qgc2F5IEZhdm9yaXRlZCB3aXRoIGEgYmlnIGJsYWNrIHN0YXIgaW4gdGhlIG1pZGRsZS5cbiAgLy8gICAgIFdlIGRvbid0IHRha2UgdXNlciB0byB0aGUgaHJlZiB0YXJnZXQuXG4gIC8vICAgICBUaGUgbW9kYWwgZGlzYXBwZWFycyBpZiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgYW5kIHJldHVybnMgdG8gcGFnZSB0aGV5IHdlcmUgb24uXG4gIC8vICAgICBUaW1lb3V0IG9mIGEgZmV3IHNlY29uZHMgdG8gY2xvc2UgbW9kYWwgaWYgdGhleSBkbyBub3RoaW5nLlxuICAvLyBjb25maWcgaXMgYSBoYXNobWFwIHdpdGggb3B0aW9uYWwga2V5czpcbiAgLy8gICBhdXRvX2Nsb3NlLCBhdXRvX3JlbW92ZSwgYm9keSwgY2VudGVyLCBmYXZvcml0ZSwgaWdub3JlX2xuaywgdGl0bGVuLFxuICAvLyAgIGhlYWRlckNsYXNzLCBzaG93biwgZm9sbG93X2xpbmtfb25fZGlzbWlzc1xuICBzdGF0aWMgbW9kYWxfZ28obG5rLCBjb25mSW4pIHtcbiAgICBjb25zdCBjb25mID0gY29uZkluIC8vIHNpZ2hcblxuICAgIGlmIChjb25mLmZhdm9yaXRlKSB7XG4gICAgICAvLyB0aGlzIGZsaWNrcyBvbiBhIGJ1bmNoIG9mIGNvbmZpZyBvcHRpb25zXG4gICAgICBjb25mLmNlbnRlciA9IHRydWVcbiAgICAgIGNvbmYuYXV0b19jbG9zZSA9IHRydWVcbiAgICAgIGNvbmYudGl0bGUgPSAnRmF2b3JpdGVkJ1xuICAgICAgY29uZi5ib2R5ID0gJzxjZW50ZXI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTAwcHg7XCIgY2xhc3M9XCJpY29ub2NoaXZlLWZhdm9yaXRlXCI+PC9zcGFuPjwvY2VudGVyPidcbiAgICAgIGNvbmYubG9naW4gPSB0cnVlIC8vIG11c3QgYmUgbG9nZ2VkIGluIVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdG9yID0gJChsbmspLmF0dHIoJ2RhdGEtdGFyZ2V0JylcbiAgICBjb25zdCBocmVmICAgICA9ICQobG5rKS5hdHRyKCdocmVmJylcblxuICAgIEFKUy5fbW9kYWxfYWRkKHNlbGVjdG9yLCBjb25mKVxuXG5cbiAgICBpZiAoY29uZi5zaG93bikge1xuICAgICAgJChzZWxlY3Rvcikub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICBjb25mLnNob3duKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGNvbmYuZm9sbG93X2xpbmtfb25fZGlzbWlzcykge1xuICAgICAgJChzZWxlY3Rvcikub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgbG9nKCdtb2RhbCBoaWRkZW4sIGdvaW5nIHRvICcsIGhyZWYsICcuLicpXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYmx1cnJ5JylcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGhyZWZcbiAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAkKHNlbGVjdG9yKS5tb2RhbCgnc2hvdycpXG5cblxuICAgIGlmIChjb25mLmxvZ2luICAmJiAgJC5jb29raWUoJ2xvZ2dlZC1pbi11c2VyJykgPT09IG51bGwpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2h0dHBzOicpIHtcbiAgICAgICAgLy8gbWFrZSBhYnNvbHV0ZWx5IHN1cmUgd2UgbmV2ZXIgbG9naW4gd2l0aCBodHRwIVxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vYXJjaGl2ZS5vcmcvYWNjb3VudC9sb2dpbi5waHAnXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgY29uc3QgdXJsID0gJy9hY2NvdW50L2xvZ2luLnBocCdcbiAgICAgICQuZ2V0KHVybCwgKGh0bUluKSA9PiB7XG4gICAgICAgICQoc2VsZWN0b3IuY29uY2F0KCcgLm1vZGFsLXRpdGxlJykpLnRleHQoJ05lYXJseSB0aGVyZSEgIFBsZWFzZSBsb2dpbiBmaXJzdCcpXG5cbiAgICAgICAgJChzZWxlY3RvcikubW9kYWwoJ3Nob3cnKVxuICAgICAgICAvLyB0aGlzIGFsbG93cyB1cyB0byBlZmZlY3RpdmVseSByaXAgb2ZmIHRoZSBoZWFkZXIvbmF2IGFuZCBmb290ZXJcbiAgICAgICAgLy8gaWYgd2UgYXJlIGFjY2Vzc2luZyBhIGZ1bGwgcGFnZSAoZWc6IGFjY291bnQgbG9naW4gcGFnZSlcbiAgICAgICAgY29uc3QgaHRtID0gKCQoaHRtSW4pLmZpbmQoJy5jb250YWluZXItaWEgPiBkaXYnKS5sZW5ndGggP1xuICAgICAgICAgICQoaHRtSW4pLmZpbmQoJy5jb250YWluZXItaWEgPiBkaXYnKS5nZXQoMCkgOlxuICAgICAgICAgIGh0bUluXG4gICAgICAgIClcblxuICAgICAgICAkKHNlbGVjdG9yLmNvbmNhdCgnLWJvZHknKSkuaHRtbChodG0pXG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKHNlbGVjdG9yLmNvbmNhdCgnLWJvZHkgZm9ybTpoYXMoaW5wdXRbdHlwZT1zdWJtaXRdKScpKVxuXG4gICAgICAgIGlmICgkZm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAkZm9ybS5vbignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICBjb25zdCBrZXl2YWxzID0ge31cbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0JykuZWFjaCgoaywgdikgPT4ge1xuICAgICAgICAgICAgICBpZiAoJCh2KS5hdHRyKCduYW1lJykubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGtleXZhbHNbJCh2KS5hdHRyKCduYW1lJyldID0gJCh2KS52YWwoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIGxvZygnUE9TVCcsIHVybClcbiAgICAgICAgICAgIC8vIGxvZyhrZXl2YWxzKVxuICAgICAgICAgICAgJC5wb3N0KHVybCwga2V5dmFscywgKCkgPT4ge1xuICAgICAgICAgICAgICBsb2coJ1NVQk1JVFRFRCcpXG4gICAgICAgICAgICAgIGlmICgkLmNvb2tpZSgnbG9nZ2VkLWluLXVzZXInKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFNVQ0NFU1MhXG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIGdvaW5nIHRvIGhpZGUgdGhlIGxvZ2luIG1vZGFsIG5vdywgYW5kIG5lZWRcbiAgICAgICAgICAgICAgICAvLyB0byBwcm9jZWVkIG9ubHkgKmFmdGVyKiB0aGUgbW9kYWwgYW5pbWF0aW9uIGlzIGRvbmVcbiAgICAgICAgICAgICAgICAvLyBhbmQgbW9kYWwgaXMgZ29uZS4gIFNvIHNldHVwIGxpc3RlbmVyIG5vdywgKnRoZW4qIGhpZGUuXG4gICAgICAgICAgICAgICAgLy8gT25jZSBsb2dpbiBtb2RhbCBpcyBnb25lLCByZW1vdmUgdGhlIG1vZGFsLCBhbmRcbiAgICAgICAgICAgICAgICAvLyBpbnZva2UgdGhlIG9yaWdpbmFsbHkgaW50ZW5kZWQgbW9kYWwgaW4gZnJlc2ggZW52aXJvbm1lbnQhXG4gICAgICAgICAgICAgICAgJChzZWxlY3Rvcikub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICQoc2VsZWN0b3IpLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICBsb2coJ1NVQ0NFU1MnKVxuICAgICAgICAgICAgICAgICAgQUpTLm1vZGFsX2dvKGxuaywgY29uZikgLy8gaW52b2tlIG9yaWdpbmFsIG1vZGFsIVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdibHVycnknKVxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3IpLm1vZGFsKCdoaWRlJylcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLWFsZXJ0XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSB0cnkgbG9nZ2luZyBpbiBhZ2FpbicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cblxuICAgIGlmIChjb25mLmF1dG9fcmVtb3ZlKSB7XG4gICAgICBjb25mLmF1dG9fY2xvc2UgPSB0cnVlXG4gICAgICAkKHNlbGVjdG9yKS5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICAkKHNlbGVjdG9yKS5yZW1vdmUoKVxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JsdXJyeScpXG4gICAgICB9KVxuICAgIH1cblxuXG4gICAgaWYgKCFjb25mLmlnbm9yZV9sbmspIHtcbiAgICAgIGNvbnN0IHVybCA9IGxuay5ocmVmXG4gICAgICAvLyBsb2coJ3N1Ym1pdCcsIHVybClcbiAgICAgICQuZ2V0KHVybCwgKHJlcykgPT4ge1xuICAgICAgICBpZiAoY29uZi5mYXZvcml0ZSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJjaGl2ZV9hbmFseXRpY3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhcmNoaXZlX2FuYWx5dGljcy5zZW5kX3Bpbmcoe1xuICAgICAgICAgICAgICBraW5kOiAnZXZlbnQnLFxuICAgICAgICAgICAgICBlYzogJ3BhZ2VfYWN0aW9uJyxcbiAgICAgICAgICAgICAgZWE6ICdmYXZvcml0ZScsXG4gICAgICAgICAgICAgIGVsOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgY2FjaGVfYnVzdDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKEFKUy5pc0Zhdm9yaXRlU3VjY2Vzc2Z1bChyZXMpKSB7XG4gICAgICAgICAgICAkKCcjZmF2b3JpdGUtYnV0dG9uJykuYWRkQ2xhc3MoJ2Zhdm9yaXRlZCcpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0ICRmYXZNb2RhbCA9ICQoc2VsZWN0b3IpXG4gICAgICAgICAgICBjb25zdCBmYWlsTWVzc2FnZSA9IGBcbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZhdm9yaXRlLWZhaWx1cmUtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgVGhlcmUgd2FzIGFuIGVycm9yIGFkZGluZyB0aGUgZmF2b3JpdGUuIElmIHRoZSBwcm9ibGVtIHBlcnNpc3RzLCBwbGVhc2UgY29udGFjdCBzdXBwb3J0LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICBgXG5cbiAgICAgICAgICAgICRmYXZNb2RhbC5maW5kKCcubW9kYWwtdGl0bGUnKS5odG1sKCdGYWlsZWQnKVxuICAgICAgICAgICAgJGZhdk1vZGFsLmZpbmQoJyNjb25maXJtLW1vZGFsLWJvZHknKS5odG1sKGZhaWxNZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoc2VsZWN0b3IpLm1vZGFsKCdzaG93JylcbiAgICAgICAgaWYgKGNvbmYuYXV0b19jbG9zZSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgoKSA9PiAkKHNlbGVjdG9yKS5tb2RhbCgnaGlkZScpKSwgMjAwMClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICQoc2VsZWN0b3IpLm1vZGFsKCdzaG93JylcbiAgICB9XG5cbiAgICBpZiAoY29uZi5jZW50ZXIpXG4gICAgICAkKHNlbGVjdG9yLmNvbmNhdCgnIC5tb2RhbC1kaWFsb2cnKSkuY2VudGVyKCkgLy8gdmVydGljYWxseSBjZW50ZXJcblxuICAgIGlmIChjb25mLmF1dG9fY2xvc2UgICYmICBjb25mLmlnbm9yZV9sbmspXG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICQoc2VsZWN0b3IpLm1vZGFsKCdoaWRlJyksIDIwMDApXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG5cbiAgLy8gaGFuZHkgbGl0dGxlIG1ldGhvZCB0byBlbnN1cmUgb25seSAxIGNoZWNrYm94IGlzIGNoZWNrZWRcbiAgc3RhdGljIGNoZWNrMShvYmosIHNlbGVjdG9yKSB7XG4gICAgaWYgKCFvYmouY2hlY2tlZClcbiAgICAgIHJldHVyblxuXG4gICAgLy8gdG9nZ2xlIG90aGVycyB0byB1bmNoZWNrZWRcbiAgICBjb25zdCAkc2VsZWN0b3IgPSAoc2VsZWN0b3IgPyAkKHNlbGVjdG9yKSA6ICQob2JqKS5wYXJlbnRzKCdmb3JtJykpXG5cbiAgICAvLyB1bmNoZWNrIGFsbDsgdGhlIHJlLWNoZWNrIHRoZSBjaGVja2VkIG9uZVxuICAgICRzZWxlY3Rvci5maW5kKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpLmF0dHIoJ2NoZWNrZWQnLCBmYWxzZSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvYmouY2hlY2tlZCA9IHRydWVcbiAgfVxuXG5cbiAgc3RhdGljIGFkZENvbW1hcyhuU3RyKSB7XG4gICAgLy8gaHR0cDovL3d3dy5tcmVka2ouY29tL2phdmFzY3JpcHQvbnVtYmVyRm9ybWF0Lmh0bWxcbiAgICBjb25zdCB4ID0gKGAke25TdHJ9YCkuc3BsaXQoJy4nKVxuICAgIGxldCB4MSA9IHhbMF1cbiAgICBjb25zdCB4MiA9IHgubGVuZ3RoID4gMSA/ICcuJy5jb25jYXQoeFsxXSkgOiAnJ1xuICAgIGNvbnN0IHJneCA9IC8oXFxkKykoXFxkezN9KS9cbiAgICB3aGlsZSAocmd4LnRlc3QoeDEpKVxuICAgICAgeDEgPSB4MS5yZXBsYWNlKHJneCwgJyQxLCQyJylcbiAgICByZXR1cm4geDEgKyB4MlxuICB9XG5cblxuICBzdGF0aWMgc3VmZml4Rm10KHZhbCwgYXhpcykge1xuICAgIGlmIChheGlzLm1pbiA+PSAwLjAgICYmICBheGlzLm1heCA8PSA1KVxuICAgICAgLy8gZ2l2ZSBhIGxpdHRsZSBiaXQgbW9yZSBncmFudWxhcml0eSBvZiAxIGRlY2ltYWwgcG9pbnQuLi5cbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIDEwLCAxKSAvIDEwXG5cbiAgICBpZiAodmFsID49IDEwMDAwMDApIHJldHVybiAodmFsIC8gMTAwMDAwMCkudG9GaXhlZCgwKS5jb25jYXQoJyBNJylcbiAgICBpZiAodmFsID49ICAgIDEwMDApIHJldHVybiAodmFsIC8gICAgMTAwMCkudG9GaXhlZCgwKS5jb25jYXQoJyBLJylcbiAgICByZXR1cm4gdmFsLnRvRml4ZWQoMClcbiAgfVxuXG5cbiAgc3RhdGljIHN1ZmZpeEZtdFBlcmNlbnQodmFsLCBheGlzKSB7XG4gICAgcmV0dXJuIEFKUy5zdWZmaXhGbXQodmFsLCBheGlzKS5jb25jYXQoJyUnKVxuICB9XG5cblxuICBzdGF0aWMgZGVzY3JpcHQoKSB7XG4gICAgY29uc3QgZCA9ICQoJyNkZXNjcmlwdCcpLmdldCgwKVxuICAgIGlmIChkICAmJiAgZC5vZmZzZXRIZWlnaHQgPCBkLnNjcm9sbEhlaWdodCkge1xuICAgICAgLy8gd2Ugb3ZlcmZsb3dlZCB0aGUgc2hvcnQgZGVzY3JpcHQgYXQgdGhlIHRvcCBvZiB0aGUgY29sbGVjdGlvbiBwYWdlLlxuICAgICAgLy8gc28gc2hvdyB0aGUgbGl0dGxlIE1PUkUgYnV0dG9uLi5cbiAgICAgICQoJyNkZXNjcmlwdC1tb3JlJykuc2hvdygpXG4gICAgICAvLyAkKCcjZGVzY3JpcHQnKS5jc3Moeydib3JkZXItYm90dG9tJzonMXB4IHNvbGlkICNjY2MnfSlcbiAgICB9XG4gIH1cblxuXG4gIC8vIHRoaXMgYWxsb3dzIGVhc3kgc2V0dXAgZm9yIHJlc2l6ZS9vcmllbnRhdGlvbiB0cmlnZ2VycyBmb3IgYWxsIGdyYXBoc1xuICAvLyBvbiBhIHBhZ2UgdGhhdCB1c2UgdGhpcyFcbiAgc3RhdGljIHBsb3R0ZXIoY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIEFKUy5wbG90dGVycyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICBBSlMucGxvdHRlcnMgPSBbXVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAvLyBzdGFzaCBhIGNvcHkgb2YgdGhlIGNhbGxiYWNrIGZvciByZXNpemUvb3JpZW50YXRpb25jaGFuZ2UgdHJpZ2dlcnNcbiAgICAgIEFKUy5wbG90dGVycy5wdXNoKGNhbGxiYWNrKVxuXG4gICAgICAvLyBub3cgZG8gdGhlIGFjdHVhbCBwbG90dGluZyAoZWc6IHBhZ2UgbG9hZClcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3RlcCB0aHJvdWdoIGVhY2ggZ3JhcGggYW5kIHJlcnVuIHRoZW1cbiAgICAgIGxvZygncGxvdHRlcigpIHJlc2l6ZS9vcmllbnQgY2hhbmdlJywgQUpTLnBsb3R0ZXJzLmxlbmd0aCwgJ2dyYXBocyB0byByZXNpemUnKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBSlMucGxvdHRlcnMubGVuZ3RoOyBpKyspXG4gICAgICAgIEFKUy5wbG90dGVyc1tpXSgpXG4gICAgfVxuICB9XG5cblxuICAvLyBHcmFwaGluZyBmb3IgYXJjaGl2ZS5vcmcvc2VydmljZXMvdmlld3MucGhwIGFuZCBUVlxuICBzdGF0aWMgcGxvdChpZCwgY2ZnSW4sIGZtdF9mbiwgcHRzLCBtYW55KSB7XG4gICAgY29uc3QgY2ZnID0gY2ZnSW5cbiAgICBpZiAoIWNmZy54YXhpcylcbiAgICAgIGNmZy54YXhpcyA9IHsgbW9kZTogJ3RpbWUnLCBjb2xvcjogKGNmZy5kYXJrID8gJyNjY2MnIDogJyM1NDU0NTQnKSB9XG4gICAgaWYgKCFjZmcueWF4aXMpXG4gICAgICBjZmcueWF4aXMgPSB7IGNvbG9yOiAoY2ZnLmRhcmsgPyAnI2NjYycgOiAnIzU0NTQ1NCcpIH1cblxuICAgIGxldCBiYXJXaWR0aFxuICAgIGlmIChtYW55ICYmIGNmZy5iYXJXaWR0aClcbiAgICAgIGJhcldpZHRoID0gY2ZnLmJhcldpZHRoICogMSAvLyAqMSB0byBwYXNzIGxpbnQ7IGtlZXBzIGxpa2UgYmVsb3c7IGF2b2lkIG9iaiBkZXN0cnVjdHVyaW5nXG4gICAgZWxzZSBpZiAoY2ZnLmJhcldpZHRoKVxuICAgICAgYmFyV2lkdGggPSBjZmcuYmFyV2lkdGggKiA4NjQwMCAqIDEwMDBcbiAgICBlbHNlXG4gICAgICBiYXJXaWR0aCA9IChjZmcuZGF5QmFyc05vUG9pbnRzID8gMSA6IDcpICogODY0MDAgKiAxMDAwIC8vIDFkYXl8MXdlZWtcblxuICAgIGNmZy5zZXJpZXMgPSB7XG4gICAgICBiYXJzOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGJhcldpZHRoLFxuICAgICAgICBmaWxsOiAwLjYsXG4gICAgICAgIGNvbG9yOiAnIzM4NUM3NCcsXG4gICAgICB9LFxuICAgICAgY29sb3I6ICcjMzg1Qzc0JyxcbiAgICAgIHBvaW50czogeyBzaG93OiAhY2ZnLmRheUJhcnNOb1BvaW50cyB9LFxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLmdyaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjZmcuZ3JpZCA9IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IChjZmcuZGFyayA/ICcjMzMzJyA6ICcjYWFhJyksXG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbG9nKGNmZy5zZXJpZXMuYmFycylcblxuXG4gICAgaWYgKGNmZy5kYXJrKVxuICAgICAgY2ZnLmdyaWQuYmFja2dyb3VuZENvbG9yID0gJyMwMDJiMzYnXG5cbiAgICBpZiAoIWNmZy50aXApXG4gICAgICBjZmcudGlwID0ge31cbiAgICBpZiAoIWNmZy50aXAuaWQpXG4gICAgICBjZmcudGlwLmlkID0gaWRcblxuICAgIGlmICh0eXBlb2Ygd2luZG93LkdyYXBoUHJpb3JJbmRleCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB3aW5kb3cuR3JhcGhQcmlvckluZGV4ID0ge31cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICBjb25zdCBhcnkgPSAobWFueSA/IHB0cyA6ICh0eXBlb2YgcHRzLmRhdGEgPT09ICd1bmRlZmluZWQnID8gW3sgZGF0YTogcHRzIH1dIDogW3B0c10pKVxuICAgIGlmIChjZmcuZGF5QmFyc05vUG9pbnRzICAmJiAgIWNmZy5ub0xhYmVsKVxuICAgICAgYXJ5WzBdLmxhYmVsID0gaWRcblxuICAgIGNvbnN0IHNlbGlkID0gYCMke2lkfWBcbiAgICAkLnBsb3QoJChzZWxpZCksIGFyeSwgY2ZnKVxuXG4gICAgaWYgKCFmbXRfZm4pXG4gICAgICByZXR1cm5cblxuICAgICQoc2VsaWQpLmJpbmQoJ3Bsb3Rob3ZlcicsIChldmVudCwgcG9zLCBpdGVtKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgd2luZG93LkdyYXBoUHJpb3JJbmRleFtpZF0gPSAtNjY2XG4gICAgICAgICQoJyNndGlwJykucmVtb3ZlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAod2luZG93LkdyYXBoUHJpb3JJbmRleFtpZF0gIT09IGl0ZW0uZGF0YUluZGV4KSB7XG4gICAgICAgIHdpbmRvdy5HcmFwaFByaW9ySW5kZXhbaWRdID0gaXRlbS5kYXRhSW5kZXhcbiAgICAgICAgJCgnI2d0aXAnKS5yZW1vdmUoKVxuXG4gICAgICAgIGNvbnN0IHN0ciA9IGZtdF9mbihpdGVtLmRhdGFwb2ludFswXSwgaXRlbS5kYXRhcG9pbnRbMV0pXG4gICAgICAgIGNvbnN0ICRncmFmID0gJChzZWxpZClcbiAgICAgICAgY29uc3Qgb2ZmID0gJGdyYWYub2Zmc2V0KClcblxuICAgICAgICAvLyBmaWd1cmUgb3V0IHdoaWNoIHdheSBmcm9tIHRoZSBcImRvdFwiL2JhciBpbiB0aGUgZ3JhcGggdGhlXG4gICAgICAgIC8vIHRvb2x0aXAgc2hvdWxkIGdvIC0tIGxlZnQgb3IgcmlnaHQhXG4gICAgICAgIGxldCB7IHBlZ1RvIH0gPSBjZmcudGlwXG4gICAgICAgIGlmICghcGVnVG8pXG4gICAgICAgICAgcGVnVG8gPSAoKHBvcy5wYWdlWCAtIG9mZi5sZWZ0KSA+ICgkZ3JhZi53aWR0aCgpIC8gMikgPyAncmlnaHQnIDogJ2xlZnQnKVxuXG4gICAgICAgIGNvbnN0IHBlZ1RvVmFsID0gKHBlZ1RvID09PSAncmlnaHQnID9cbiAgICAgICAgICAoJGdyYWYud2lkdGgoKSAtIChwb3MucGFnZVggLSBvZmYubGVmdCAtIDIwKSkgOlxuICAgICAgICAgIChwb3MucGFnZVggLSBvZmYubGVmdCkgKyAyMClcbiAgICAgICAgbG9nKHBlZ1RvLCBwZWdUb1ZhbClcblxuICAgICAgICAkKGAjJHtjZmcudGlwLmlkfWApLmFwcGVuZChgXG48ZGl2IGlkPVwiZ3RpcFwiIGNsYXNzPVwicm91bmRib3gyXCJcbnN0eWxlPVwidG9wOiR7cG9zLnBhZ2VZIC0gb2ZmLnRvcH1weDsgJHtwZWdUb306JHtwZWdUb1ZhbH1weFwiPiR7c3RyfTwvZGl2PmApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgLy8gVXNlIGEgY29sb3Igc2FtcGxpbmcgM3JkIHBhcnR5IHBpZWNlIG9mIGNvZGUsIHRvIGZpbmQgdGhlIDFzdC9wcmltYXJ5IGltYWdlIGluIHRoZSBcIndlbGNvbWVcIlxuICAvLyBhcmVhLCBhbmQgZmluZCB0aGUgXCJkb21pbmFudCBjb2xvclwiLiAgKGludGVybmFsbHksIHVzZXMgY2FudmFzIHRvIGNvbG9yIHNhbXBsZSkuXG4gIC8vIEFkanVzdCB0ZXh0L2ZvcmVncm91bmQgY29sb3IgYXMgd2VsbCBhcyBhbnkgXCJzZWxlY3RlZCB0YWJcIiBiYWNrZ3JvdW5kIGNvbG9yLlxuICAvLyBOT1QgVVNFRCBBTllNT1JFIC0tIEdPTkUgU0VSVkVSU0lERSFcbiAgc3RhdGljIHdlbGNvbWVfcmVjb2xvcihlKSB7XG4gICAgaWYgKHR5cGVvZiBDb2xvclRoaWVmID09PSAndW5kZWZpbmVkJyAgfHwgICFlLmxlbmd0aClcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKEFKUy53ZWxjb21lX3JlY29sb3JlZClcbiAgICAgIHJldHVyblxuICAgIEFKUy53ZWxjb21lX3JlY29sb3JlZCA9IHRydWVcblxuICAgIGNvbnN0IGltZyA9ICQoZSlbMF1cbiAgICBsb2coJ3dlbGNvbWVfcmVjb2xvcicsIGltZy5zcmMpXG5cbiAgICAvKiBnbG9iYWwgQ29sb3JUaGllZiAqL1xuICAgIGNvbnN0IGN0ID0gbmV3IENvbG9yVGhpZWYoKVxuICAgIGNvbnN0IHBhbGV0dGUgPSBjdC5nZXRQYWxldHRlKGltZywgNSlcbiAgICBsb2cocGFsZXR0ZSlcbiAgICBpZiAoIXBhbGV0dGUpXG4gICAgICByZXR1cm5cbiAgICBjb25zdCBkb21pbmFudENvbG9yUkdCID0gcGFsZXR0ZVswXSAvLyAzIGVsZW1lbnQgYXJyYXkhXG5cbiAgICBpZiAoIWRvbWluYW50Q29sb3JSR0IpXG4gICAgICByZXR1cm5cbiAgICBsb2coZG9taW5hbnRDb2xvclJHQilcblxuICAgIC8vIGlmIGRvbWluYW50IGNvbG9yIGlzIHVoLCBraW5kYSBpbiB0aGUgbGlnaHRlciByYW5nZSAtLSB0eHQgc2hvdWxkIGJlIGJsYWNrXG4gICAgY29uc3QgYXZnVmFsID1cbiAgICAgIE1hdGgucm91bmQoJChkb21pbmFudENvbG9yUkdCKS5tYXAoKGssIHYpID0+IHYpLnRvQXJyYXkoKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvXG4gICAgICAgIGRvbWluYW50Q29sb3JSR0IubGVuZ3RoKVxuICAgIGNvbnN0IGNvbG9yID0gKGF2Z1ZhbCA+PSAxMjggPyAnYmxhY2snIDogJ3doaXRlJylcbiAgICBsb2coJ2F2Z1ZhbCcsIGF2Z1ZhbClcblxuICAgICQoJy53ZWxjb21lJykuY3NzKHtcbiAgICAgIGNvbG9yLFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBgcmdiKCR7ZG9taW5hbnRDb2xvclJHQi5qb2luKCcsJyl9KWAsXG4gICAgfSlcbiAgICAkKCcud2VsY29tZSAuc3RlYWx0aDpub3QoLnRhYmJ5IC5zdGVhbHRoKScpLmNzcyh7IGNvbG9yIH0pXG4gIH1cblxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiB0byBtYWtlIGFuIGltYWdlLCBkaXYsIGV0YyBmb2N1c2FibGUsIGFuZCAnY2xpY2snLWFibGUuXG4gICAqIEZ1bmN0aW9uIGFkZHMgYSB0YWJpbmRleCBmb3IgJ2ZvY3VzJyBhbmQgbGlzdGVucyBmb3IgYSBrZXlkb3duL2tleXByZXNzIG9mIGVudGVyIG9yIHNwYWNlLFxuICAgKiB0aGVuIHRyaWdnZXJzIGEgY2xpY2suXG4gICAqXG4gICAqIHZhciBlbGVtZW50OiBTdHJpbmcgdXNlZCBmb3IganF1ZXJ5IGNhcHR1cmUgb2Ygbm9uLWFjZXNzaWJsZSAmIG1vdXNlLW9ubHkgZWxlbWVudC5cbiAgICogICAgZXg6IFwiI0FtYXpvblBheUJ1dHRvbiBpbWdcIlxuICAgKiBUcmlnZ2VycyAnY2xpY2snIG9uIGVsZW1lbnQuXG4gICAqL1xuICBzdGF0aWMgbWFrZU1vdXNlRWxlbWVudEFjY2Vzc2libGUoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkuYXR0cigndGFiaW5kZXgnLCAnMCcpLm9uKCdrZXlwcmVzcyBrZXlkb3duJywgZnVuY3Rpb24gbWFrZU1vdXNlRWxlbWVudEFjY2Vzc2libGVHbyhlKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSAnY2xpY2snKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSAoZS5rZXlDb2RlIHx8IGUud2hpY2gpXG4gICAgICAgIGNvbnN0IGtfc3BhY2UgPSAzMiAvLyBzcGFjZSBiYXIgcHJlc3NlZFxuICAgICAgICBjb25zdCBrX2VudGVyID0gMTMgLy8gZW50ZXIga2V5IHByZXNzZWRcbiAgICAgICAgaWYgKFtrX3NwYWNlLCBrX2VudGVyXS5pbmRleE9mKGNvZGUpICE9PSAtMSlcbiAgICAgICAgICAkKHRoaXMpLmNsaWNrKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICAvLyB1c2Ugc29tZXRoaW5nIGxpa2UgJywnIGZvciB0aGUgb3B0aW9uYWwgM3JkIGFyZyBpZiB5b3Ugd2FudCB0byBhbGxvd1xuICAvLyBmb3IgYXBwZW5kaW5nIDIrIHZhbHVlcyBpbnRvIGEgZmllbGQsIGV0Yy4uLlxuICBzdGF0aWMgYXV0b2NvbXBsZXRlKHNlbGVjdG9yLCBvcHRpb25zLCBtdWx0aVZhbFNwbGl0Q2hhcikge1xuICAgICQoc2VsZWN0b3IpLmF1dG9jb21wbGV0ZSh7XG4gICAgICBhcHBlbmRUbzogJyNhdXRvY29tcGxldGVlJyxcbiAgICAgIG1pbkxlbmd0aDogMCxcbiAgICAgIHNvdXJjZTogKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIGRlbGVnYXRlIGJhY2sgdG8gYXV0b2NvbXBsZXRlLCBidXQgZXh0cmFjdCB0aGUgbGFzdCB0ZXJtXG4gICAgICAgIHJlc3BvbnNlKCQudWkuYXV0b2NvbXBsZXRlLmZpbHRlcihvcHRpb25zLCByZXF1ZXN0LnRlcm0uc3BsaXQoLyxcXHMqLykucG9wKCkpKVxuICAgICAgfSxcbiAgICAgIGZvY3VzOiAoKSA9PiBmYWxzZSwgLy8gcHJldmVudCB2YWx1ZSBpbnNlcnRlZCBvbiBmb2N1c1xuICAgICAgc2VsZWN0OiBmdW5jdGlvbiBhdXRvY29tcGxldGVfc2VsZWN0KGV2ZW50LCB1aSkge1xuICAgICAgICBpZiAobXVsdGlWYWxTcGxpdENoYXIpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtcyA9IHRoaXMudmFsdWUuc3BsaXQoLyxcXHMqLylcbiAgICAgICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgaW5wdXRcbiAgICAgICAgICB0ZXJtcy5wb3AoKVxuICAgICAgICAgIC8vIGFkZCB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgIHRlcm1zLnB1c2godWkuaXRlbS52YWx1ZSlcbiAgICAgICAgICAvLyBhZGQgcGxhY2Vob2xkZXIgdG8gZ2V0IHRoZSBjb21tYS1hbmQtc3BhY2UgYXQgdGhlIGVuZFxuICAgICAgICAgIHRlcm1zLnB1c2goJycpXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRlcm1zLmpvaW4oJywgJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdWkuaXRlbS52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cblxuICBzdGF0aWMgYWRkTm90ZXMoa2luZCwgaHRtKSB7XG4gICAgLy8gZmxhZyBsaXN0cyBoYXZlIG11bHRpcGxlIHVzZXJzIHNvIHRoZSBcInJpZ2h0c1wiIHRoZXJlXG4gICAgLy8gaXMgYSBiaXQgdG8gdGhvcm55IHJpZ2h0IG5vdyBzbyBmb3Igc2ltcGxpY2l0eSBhbmRcbiAgICAvLyB0aGUgbWFpbiBmZWF0dXJlIHRvIGdvIGxpdmUsIHNraXBwaW5nIHRoZW0uLi5cbiAgICBpZiAoa2luZCAhPT0gJ2Zhdm9yaXRlJyAgJiYgIGtpbmQgIT09ICdsaXN0JylcbiAgICAgIHJldHVybiBodG1cblxuICAgIGlmICghaHRtICAmJiAgJCgnYm9keScpLmhhc0NsYXNzKCdlZGl0YWJsZScpKVxuICAgICAgQUpTLmFkZGluZ05vdGVzS2luZCA9IGtpbmRcbiAgICBpZiAoIUFKUy5hZGRpbmdOb3Rlc0tpbmQpXG4gICAgICByZXR1cm4gaHRtXG5cbiAgICBBSlMuYWRkTm90ZUhUTSA9ICQoYFxuPGRpdiBjbGFzcz1cIm5vdGVcIj5cbiAgPHNwYW4gY2xhc3M9XCJlZGl0XCI+XG4gICAgPGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwicmV0dXJuIEFKUy5lZGl0Tm90ZSh0aGlzKVwiPkFkZCBhIE5vdGU8L2E+XG4gIDwvc3Bhbj5cbjwvZGl2PmApXG5cbiAgICBsb2coJ2FkZE5vdGVzJylcblxuICAgIC8vIE5leHQsIHdlIGFyZSBnb2luZyB0byBkbyBhIGdsb2JhbCBET00gc2VhcmNoIGFuZCBpbnNlcnQgKHdoZXJlIG5lZWRlZClcbiAgICAvLyBmb3IgYmFzaWNhbGx5IHRoZSBmaXJzdCBwYWdlIGxvYWQuICBCdXQgd2UncmUgYWxzbyBjYWxsZWQgaW4gXCJpbmZpbml0ZSBzY3JvbGxcIlxuICAgIC8vIHBhZ2UgMisgbW9kZSwgYW5kIGluIHRoYXQgY2FzZSwgd2Ugd2FudCB0byBtb2RpZnkgKEpVU1QpIHRoZSBIVE0gd2hlbiB0aGF0J3NcbiAgICAvLyBmb3IgcGFnZSAyKyBhbmQgYWJvdXQgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgRE9NLCAqaW5zdGVhZCogb2YgYW5vdGhlciBnbG9iYWxcbiAgICAvLyBET00gc2VhcmNoLlxuICAgIGlmIChodG0pIHtcbiAgICAgIC8vIChCYXNpY2FsbHkgd2UgYXJlIG5vdyBkb2luZyBwYWdlIDIrIGluIGluZmluaXRlIHNjcm9sbClcbiAgICAgIC8vIE9LIHRoaXMgaXMgc29ydGEgd2lsZC9tYXliZSBub3Qgb2J2aS4uLmFcbiAgICAgIC8vIChLaW5kYSBsaWtlIGEgalF1ZXJ5IHJlcGxhY2VfcmVnZXhwKCkuLi4pXG4gICAgICAvLyBUYWtlIHRoZSAqc3RyaW5nKiBvZiBIVE0gd2UgYXJlIHBhc3NlZCwgY29udmVydCBpdCB0byBhIFwiZmluZGFibGVcIiBqUXVlcnkgb2JqZWN0XG4gICAgICAvLyB0aGVuIGluc2VydGQgXCJhZGROb3RlSFRNXCIgd2hlcmUgbmVlZGVkLlxuICAgICAgLy8gRmluYWxseSwgY29udmVydCBiYWNrIHRvIHN0cmluZyBhbmQgcmV0dXJuIHRoaXMgbW9kaWZpZWQgdmVyc2lvbiB0byBjYWxsZXIuXG4gICAgICBjb25zdCAkaHRtID0gJChgPGRpdj4ke2h0bX08L2Rpdj5gKVxuICAgICAgJGh0bS5maW5kKCcuZGV0YWlscy1pYSAuQzIzNDpub3QoOmhhcyhcIi5ub3RlXCIpKScpLmFwcGVuZChBSlMuYWRkTm90ZUhUTSlcbiAgICAgIHJldHVybiAkaHRtLmh0bWwoKVxuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgaW5pdGlhbCBwYWdlIGxvYWRcbiAgICAvLyBOT1RFOiByZXR1cm4gdmFsdWUgaXJyZWxldmFudCBoZXJlXG4gICAgcmV0dXJuICQoJy5kZXRhaWxzLWlhIC5DMjM0Om5vdCg6aGFzKFwiLm5vdGVcIikpJykuYXBwZW5kKEFKUy5hZGROb3RlSFRNKVxuICB9XG5cblxuICBzdGF0aWMgZWRpdE5vdGUoZSkge1xuICAgIGNvbnN0ICRlID0gJChlKVxuICAgIGNvbnN0IGlkZW50aWZpZXIgPSAkZS5wYXJlbnRzKCcuZGV0YWlscy1pYScpLnByZXYoKS5hdHRyKCdkYXRhLWlkJylcbiAgICBpZiAoIWlkZW50aWZpZXIpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0ICRub3RlID0gJGUucGFyZW50cygnLm5vdGUnKVxuXG4gICAgbGV0IHZhbCA9ICcnXG4gICAgaWYgKCRlLnRleHQoKSA9PT0gJ2VkaXQnKSB7XG4gICAgICB2YWwgPSAkbm90ZS5maW5kKCdzcGFuOmZpcnN0JykudGV4dCgpXG4gICAgICB2YWwgPSB2YWwucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIH1cbiAgICAkbm90ZS5oaWRlKClcbiAgICAkbm90ZS5wYXJlbnQoKS5hcHBlbmQoJChgXG48Zm9ybSBjbGFzcz1cImZvcm0gZm9ybS1ob3Jpem9udGFsIG5vdGVcIiByb2xlPVwiZm9ybVwiIG9uc3VibWl0PVwiQUpTLmVkaXRlZE5vdGUodGhpcyk7cmV0dXJuIGZhbHNlXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC14cy0yIGNvbC1tZC0xIGNvbC1sZy0xXCI+XG4gICAgICA8Yj5Ob3RlOjwvYj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwIGNvbC1tZC02IGNvbC1sZy03XCI+XG4gICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY29tbWVudHNcIj4ke3ZhbH08L3RleHRhcmVhPlxuICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4IHZpc2libGUteHMtYmxvY2tcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXggdmlzaWJsZS14cy1ibG9ja1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTUgY29sLWxnLTQgYnRuc1wiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cIkFKUy5lZGl0ZWROb3RlKHRoaXMpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXhzXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cIkFKUy5lZGl0ZWROb3RlKHRoaXMpXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLWNhbmNlbCBidG4teHNcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJBSlMuZWRpdGVkTm90ZSh0aGlzKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzICR7dmFsID8gJycgOiAnaGlkZGVuJ31cIj5SZW1vdmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Zvcm0+YCkpXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBzdGF0aWMgZWRpdGVkTm90ZShlKSB7XG4gICAgbGV0ICRlID0gJChlKVxuXG4gICAgY29uc3QgaWRlbnRpZmllciA9ICRlLnBhcmVudHMoJy5kZXRhaWxzLWlhJykucHJldigpLmF0dHIoJ2RhdGEtaWQnKVxuICAgIGlmICghaWRlbnRpZmllcilcbiAgICAgIHJldHVyblxuXG4gICAgLy8gaWYgdXNlciBoaXQgW3JldHVybl0gYW5kIHN1Ym1pdHRlZCBmb3JtLCBldGMuXG4gICAgLy8gdHJlYXQgaXQgbGlrZSB0aGV5IGhpdCB0aGUgW1NhdmVdIGJ1dHRvblxuICAgIGlmICgkZS5pcygnZm9ybScpKVxuICAgICAgJGUgPSAkZS5maW5kKCdidXR0b246Y29udGFpbnMoXCJTYXZlXCIpJylcblxuICAgIGNvbnN0IGFjdGlvbiA9ICRlLnRleHQoKVxuICAgIGNvbnN0ICRwYXJlbnQgPSAkZS5wYXJlbnRzKCcubm90ZScpXG4gICAgY29uc3QgJG9yaWdOb3RlID0gJHBhcmVudC5wcmV2KClcblxuICAgIGlmIChhY3Rpb24gPT09ICdTYXZlJyAgfHwgIGFjdGlvbiA9PT0gJ1JlbW92ZScpIHtcbiAgICAgIGNvbnN0IHZhbCAgPSAoYWN0aW9uID09PSAnU2F2ZScgPyAkcGFyZW50LmZpbmQoJ3RleHRhcmVhJykudmFsKCkgOiAnJylcbiAgICAgIGNvbnN0ICB1cmwgPSAnL2Jvb2ttYXJrcy5waHA/aWRlbnRpZmllcj0nLmNvbmNhdChcbiAgICAgICAgaWRlbnRpZmllciwgJyZraW5kPScsIEFKUy5hZGRpbmdOb3Rlc0tpbmQsXG4gICAgICAgICcmYWRkX2NvbW1lbnQ9JywgZW5jb2RlVVJJQ29tcG9uZW50KHZhbCksXG4gICAgICApXG4gICAgICBsb2coJ2dldCAnLCB1cmwpXG4gICAgICAkLmdldCh1cmwsICgpID0+IHtcbiAgICAgICAgY29uc3QgaHRtID0gKHZhbCA/XG4gICAgICAgICAgYE5vdGU6IFwiPHNwYW4+JHt2YWwucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKX08L3NwYW4+XCJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImVkaXRcIj4oPGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwicmV0dXJuIEFKUy5lZGl0Tm90ZSh0aGlzKVwiPmVkaXQ8L2E+KTwvc3Bhbj5gIDpcbiAgICAgICAgICBBSlMuYWRkTm90ZUhUTS5odG1sKCkpXG4gICAgICAgIC8vIHNob3cgdGhlIFwiTm90ZTogLi4uXCIgc2VjdGlvbiBhZ2FpbiAod2l0aCBub3cgYXBwcm9wcmlhdGVseSB1cGRhdGVkIGlubmFyZHMpXG4gICAgICAgICRvcmlnTm90ZS5odG1sKGh0bSkuc2hvdygpXG4gICAgICAgICRwYXJlbnQucmVtb3ZlKCkgLy8gbG9zZSB0aGUgZm9ybVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBlbHNlIENhbmNlbCBkb2VzIG5vdGhpbmcgYnV0IGJlbG93Li4uXG5cbiAgICAkb3JpZ05vdGUuc2hvdygpIC8vIHNob3cgdGhlIFwiTm90ZTogLi4uXCIgc2VjdGlvbiBhZ2FpblxuICAgICRwYXJlbnQucmVtb3ZlKCkgLy8gbG9zZSB0aGUgZm9ybVxuICB9XG5cblxuICBzdGF0aWMgdGh1bWJ6aWxsYShpZCkge1xuICAgIC8qIGdsb2JhbCAgVFYyICBUVjMgKi9cbiAgICAvLyBjb3ZlciBlbnRpcmUgc2NyZWVuIHdpdGggbmV3IGRpdi4uLlxuICAgIGNvbnN0IFRWID0gJCgnYm9keScpLmhhc0NsYXNzKCd0dicpXG4gICAgaWYgKFRWKVxuICAgICAgVFYyLnVucGxheSgndGh1bWJ6aWxsYScpXG5cbiAgICAvLyBnZXQgbGlzdCBvZiB0aHVtYnNcbiAgICBsZXQgaHRtID0gJydcbiAgICAkKEFKUy50aHVtYnppbGxhcykuZWFjaCgoa2V5LCB2YWwpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gcGFyc2VJbnQodmFsLCAxMClcbiAgICAgIGlmIChUVikge1xuICAgICAgICBjb25zdCBzdGFydGVuZCA9IGAvc3RhcnQvJHtzdGFydH0vZW5kLyR7c3RhcnQgKyBUVjMuQ0xJUF9TRUNfTUFYMn1gXG4gICAgICAgIGh0bSArPSBgPGEgb25jbGljaz1cIiQoJyNvcHNjcmVlbjFNJykuZmFkZU91dCgnc2xvdycpOyBUVjIuc2Vla1VSTCgnJHtzdGFydGVuZH0nKVwiIGhyZWY9XCIke3N0YXJ0ZW5kfVwiPmBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxvY05FVyA9IGAvZGV0YWlscy8ke2lkfSZzdGFydD0ke3N0YXJ0fWBcbiAgICAgICAgaHRtICs9IGA8YSBvbmNsaWNrPVwiJCgnI29wc2NyZWVuMU0nKS5mYWRlT3V0KCdzbG93Jyk7IHJldHVybiBQbGF5LnNlZWsodGhpcylcIiBocmVmPVwiJHtsb2NORVd9XCI+YFxuICAgICAgfVxuICAgICAgaHRtICs9IGA8aW1nIHNyYz1cIi9kb3dubG9hZC8ke2lkfS8ke2lkfS50aHVtYnMvJHtpZH1fJHt2YWx9LmpwZ1wiLz48L2E+YFxuICAgIH0pXG5cbiAgICBpZiAoaHRtID09PSAnJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBuby1hbGVydFxuICAgICAgYWxlcnQoJ2NvbWluZyBzb29uIScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAkKCcjb3BzY3JlZW4xTScpLnJlbW92ZSgpXG4gICAgJCgnYm9keScpLnByZXBlbmQoJCgnPGRpdiAvPicpLmF0dHIoeyBpZDogJ29wc2NyZWVuMU0nIH0pKVxuXG4gICAgY29uc3QgJGltZ3MgPSAkKCc8ZGl2Lz4nKS5hdHRyKHsgaWQ6ICd0aHVtYnppbGxhJyB9KS5odG1sKGA8ZGl2PiR7aHRtfTwvZGl2PmApXG4gICAgJGltZ3MuYXBwZW5kVG8oJyNvcHNjcmVlbjFNJylcbiAgICAkKCcjb3BzY3JlZW4xTScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKS5zaG93KClcbiAgICBjb25zdCB3aW5IID0gJCh3aW5kb3cpLmhlaWdodCgpICsgKEFKUy5pb3MgPyA2MCA6IDApIC8vIHBsdXMgaU9TIGJsZWFoXG4gICAgZm9yIChsZXQgdyA9IDE2MDsgdyA+PSAxMDsgdyAtPSAxMCkge1xuICAgICAgY29uc3QgaCA9IE1hdGgucm91bmQodyAqICgxMTAgLyAxNjAuMCkpXG4gICAgICBsb2coJ1RSWUlORycsIHcsICd4JywgaClcbiAgICAgICQoJyN0aHVtYnppbGxhIGltZycpLmNzcyh7IHdpZHRoOiB3LCBoZWlnaHQ6IGggfSlcbiAgICAgIGlmICgkKCcjdGh1bWJ6aWxsYSBpbWc6bGFzdCcpLm9mZnNldCgpLnRvcCArIGggPD0gd2luSClcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICAkKCcjdGh1bWJ6aWxsYSBkaXYnKS5jZW50ZXIoKVxuICAgICQoJyNvcHNjcmVlbjFNJykuaGlkZSgpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJykuZmFkZUluKCdzbG93JylcbiAgICAgIC5vbmUoJ2NsaWNrLm9wc2NyZWVuMU0ubml4ZXInLCAoKSA9PiAkKCcjb3BzY3JlZW4xTScpLmZhZGVPdXQoJ3Nsb3cnKSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qIFdheWJhY2sgTWFjaGluZSBmb3JtIHR5cGUtYWhlYWQgc2V0dXA6IGl0IHByZXNlbnRzIGEgbGlzdCBvZiBzaXRlc1xuICAgICAgbWF0Y2hpbmcgdGhlIHRleHQgYXMgdXNlciB0eXBlcy4gKi9cbiAgc3RhdGljIG5hdl90b3BoYXRfd2Jfc2V0dXAoKSB7XG4gICAgLy8gQ29uZmlndXJhdGlvblxuICAgIGNvbnN0IFdBWUJBQ0sgPSAnaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcnXG4gICAgY29uc3QgSE9TVFNfRU5EUE9JTlQgPSAgIGAke1dBWUJBQ0t9L19fd2Ivc2VhcmNoL2hvc3Q/cT1gXG4gICAgY29uc3QgQU5DSE9SU19FTkRQT0lOVCA9IGAke1dBWUJBQ0t9L19fd2Ivc2VhcmNoL2FuY2hvcj9xPWBcbiAgICBjb25zdCBSRURJUkVDVF9VUkwgPSAgICAgYCR7V0FZQkFDS30vd2ViLyovYFxuICAgIGNvbnN0IFJFRElSRUNUX1NFQVJDSCA9ICBgJHtXQVlCQUNLfS93ZWIvKi9gXG5cbiAgICBmdW5jdGlvbiBzZWFyY2hfb3JfY2FsZW5kYXIocXVlcnkpIHtcbiAgICAgIGlmIChxdWVyeS5pbmRleE9mKCdodHRwOi8vJykgPT09IDAgfHxcbiAgICAgICAgICBxdWVyeS5pbmRleE9mKCdodHRwczovLycpID09PSAwIHx8XG4gICAgICAgICAgcXVlcnkubWF0Y2goL1tcXHcuXXsyLDI1Nn1cXC5bYS16XXsyLDR9L2dpKSlcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFJFRElSRUNUX1VSTCArIHF1ZXJ5XG4gICAgICBlbHNlXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBSRURJUkVDVF9TRUFSQ0ggKyBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpXG4gICAgfVxuXG4gICAgY29uc3QgJGlucHV0ID0gJCgnI25hdi13Yi11cmwnKVxuICAgIGNvbnN0ICRmb3JtID0gJGlucHV0LnBhcmVudCgnZm9ybScpXG4gICAgJGZvcm0uc3VibWl0KChlKSA9PiB7XG4gICAgICBBSlMuZmlyZUFuYWx5dGljc1RyYWNraW5nRXZlbnQoJ0hvbWVQYWdlV2F5YmFjaycsICdTZWFyY2hGb3JtJylcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gJGlucHV0LnZhbCgpXG4gICAgICBzZWFyY2hfb3JfY2FsZW5kYXIocXVlcnkpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgJGlucHV0Lm9uKCdmb2N1cyBpbnB1dCBwYXN0ZScsICgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgJGlucHV0LnR5cGVhaGVhZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6ICcvaW5jbHVkZXMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC0zLXR5cGVhaGVhZC9ib290c3RyYXAzLXR5cGVhaGVhZC5taW4uanMnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnc2NyaXB0JyxcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgfSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgJGlucHV0LnR5cGVhaGVhZCh7XG4gICAgICAgICAgICBzb3VyY2U6IChxdWVyeSwgcHJvY2VzcykgPT4ge1xuICAgICAgICAgICAgICAkaW5wdXQuZm9jdXMoKSAvLyBidWdmaXggaHR0cHM6Ly9naXRodWIuY29tL2Jhc3Nqb2JzZW4vQm9vdHN0cmFwLTMtVHlwZWFoZWFkL2lzc3Vlcy8xNTAjaXNzdWVjb21tZW50LTE5Nzk0OTg5OVxuICAgICAgICAgICAgICByZXR1cm4gJC5nZXQoSE9TVFNfRU5EUE9JTlQgKyBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5ob3N0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YS5ob3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2VzcyhkYXRhLmhvc3RzKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuaXNVcmwgIT09ICd1bmRlZmluZWQnICYmICBkYXRhLmlzVXJsID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLmV4Y2x1ZGVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MoW3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAkLmdldChBTkNIT1JTX0VORFBPSU5UICsgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KSwgKGRhdGEyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEyICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhMi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2VzcyhkYXRhMi5zbGljZSgwLCA1KSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hdGNoZXI6ICgpID0+IHRydWUsXG4gICAgICAgICAgICBkaXNwbGF5VGV4dDogaXRlbSA9PiBpdGVtLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgIGF1dG9TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgZGVsYXk6IDQwMCxcbiAgICAgICAgICAgIGZpdFRvRWxlbWVudDogZmFsc2UsIC8qIG5vdCBnb29kIHdpdGggbG9uZyBVUkxzICovXG4gICAgICAgICAgICBtaW5MZW5naHQ6IDMsXG4gICAgICAgICAgICBpdGVtczogOCxcbiAgICAgICAgICB9KS5jaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9ICRpbnB1dC50eXBlYWhlYWQoJ2dldEFjdGl2ZScpXG4gICAgICAgICAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50LmRpc3BsYXlfbmFtZSA9PT0gJGlucHV0LnZhbCgpKVxuICAgICAgICAgICAgICAkZm9ybS5zdWJtaXQoKVxuICAgICAgICAgIH0pLm9uKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTAgfHwgZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgQUpTLmZpcmVBbmFseXRpY3NUcmFja2luZ0V2ZW50KCdIb21lUGFnZVdheWJhY2snLCAnU2VhcmNoRm9ybScpXG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gJGlucHV0LnZhbCgpXG4gICAgICAgICAgICAgIHNlYXJjaF9vcl9jYWxlbmRhcihxdWVyeSlcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cbiAgLyoqXG4gICAqIEhlbHBlciB0byBvcGVuIGEgcG9wdXAgd2l0aCBKU1xuICAgKiBAcGFyYW0gaW50IHdpZHRoXG4gICAqIEBwYXJhbSBpbnQgaGVpZ2h0XG4gICAqIEBwYXJhbSBzdHJpbmcgaHJlZlxuICAgKi9cbiAgc3RhdGljIG9wZW5Qb3B1cCh3aWR0aCwgaGVpZ2h0LCBocmVmKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBzY3JvbGxiYXJzOiAneWVzJyxcbiAgICAgIHJlc2l6YWJsZTogJ3llcycsXG4gICAgICB0b29sYmFyOiAnbm8nLFxuICAgICAgZGlyZWN0b3JpZXM6ICdubycsXG4gICAgICBsb2NhdGlvbjogJ3llcycsXG4gICAgICBtZW51YmFyOiAnbm8nLFxuICAgICAgc3RhdHVzOiAneWVzJyxcbiAgICB9XG5cbiAgICAvLyBPcHRpb25zIG11c3QgYmUgZXhwcmVzc2VkIGFzIGNvbW1hLXNlcGFyYXRlZCBrZXktdmFsdWUgcGFpcnMuXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5maWx0ZXIoa2V5ID0+IHBhcmFtc1trZXldKVxuICAgICAgLnJlZHVjZSgocGFyYW1QYWlycywga2V5KSA9PiBwYXJhbVBhaXJzLmNvbmNhdChgJHtrZXl9PSR7cGFyYW1zW2tleV19YCksIFtdKVxuICAgICAgLmpvaW4oJywnKVxuXG4gICAgd2luZG93Lm9wZW4oaHJlZiwgJ3BvcHVwJywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFjdCBDb21wb25lbnQsIGEgbGluayB0aGF0IG9wZW5zIGl0cyBocmVmIGluIGEgcG9wdXAgaW5zdGVhZCBvZiB0aGUgc2FtZSB3aW5kb3cuXG4gICAqIEhlaWdodCBhbmQgd2lkdGggb2YgdGhlIHBvcHVwIGNhbiBiZSBjdXN0b21pemVkIHZpYSBwcm9wcy5cbiAgICovXG4gIHN0YXRpYyBQb3B1cExpbmsoe2NoaWxkcmVuLCBocmVmLCBoZWlnaHQsIHdpZHRoLCB0aXRsZX0gPSB7fSkge1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIEFKUy5vcGVuUG9wdXAod2lkdGgsIGhlaWdodCwgaHJlZik7XG4gICAgfVxuXG4gICAgLy8gSW5jbHVkZSBocmVmIGZvciBzZW1hbnRpY3MuXG4gICAgcmV0dXJuIDxhIGhyZWY9e2hyZWZ9IHRpdGxlPXt0aXRsZX0gb25DbGljaz17aGFuZGxlQ2xpY2t9PntjaGlsZHJlbn08L2E+O1xuICB9XG5cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBDcmVhdGl2ZUNvbW1vbnNMaWNlbnNlTGluayBSZWFjdCBjb21wb25lbnQgdG8gYSBET00gbm9kZSB3aXRoIHRoZVxuICAgKiBhcHByb3ByaWF0ZSBJRC5cbiAgICovXG4gIHN0YXRpYyBzZXRVcENyZWF0aXZlQ29tbW9uc0xpY2Vuc2VMaW5rKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRpdmVfY29tbW9uc19saWNlbnNlX2xpbmtfcmVhY3QnKTtcblxuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFJlYWN0RE9NLnJlbmRlcig8QUpTLkNyZWF0aXZlQ29tbW9uc0xpY2Vuc2VMaW5rXG4gICAgICBocmVmPXtyb290LmRhdGFzZXQuaHJlZn1cbiAgICAgIGxpY2Vuc2VOYW1lPXtyb290LmRhdGFzZXQubGljZW5zZU5hbWV9XG4gICAgICBsaWNlbnNlU2VsZWN0ZWQ9e3Jvb3QuZGF0YXNldC5saWNlbnNlU2VsZWN0ZWQgPT09ICd0cnVlJ31cbiAgICAvPiwgcm9vdCk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIC8qKlxuICAgKiBTZXRzIHVwIGxpc3RlbmVycyBvbiBzZWFyY2ggZm9ybXMgdG8gaGFuZGxlIG9wZW5pbmcvY2xvc2luZyB0aGUgc2VhcmNoIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzZWUgU2VhcmNoT3B0aW9ucy5pbmNcbiAgICovXG4gIHN0YXRpYyBzZXRVcFNlYXJjaEZvcm1zKCkge1xuICAgIGNvbnN0IGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpXG4gICAgY29uc3Qgc2VhcmNoRm9ybXMgPSAkKCcuanMtc2VhcmNoLWZvcm0nKVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhbiBpbmRpdmlkdWFsIGZvcm0sIGlzb2xhdGluZyBpdHMgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIG90aGVyIG9uZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybU5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRVcFNlYXJjaEZvcm0oZm9ybU5vZGUpIHtcbiAgICAgIGNvbnN0IGZvcm0gPSAkKGZvcm1Ob2RlKVxuICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZm9ybS5maW5kKCcuanMtc2VhcmNoLWJhcicpXG4gICAgICBjb25zdCBzZWFyY2hPcHRpb25zID0gZm9ybS5maW5kKCcuanMtc2VhcmNoLW9wdGlvbnMnKVxuICAgICAgY29uc3Qga2VlcE9wZW5XaGVuQ2hhbmdlZCA9IHNlYXJjaE9wdGlvbnMuZGF0YSgna2VlcE9wZW5XaGVuQ2hhbmdlZCcpXG4gICAgICBsZXQgZm9ybUNoYW5nZWQgPSBmYWxzZVxuXG4gICAgICAvKipcbiAgICAgICAqIENhdGNoZXMgd2ViIHNlYXJjaGVzIGFuZCByZWRpcmVjdHMgdGhlbSB0byBXYXliYWNrIE1hY2hpbmUuIFRoZSBzZWFyY2ggZm9ybSBtdXN0IGhhdmUgYVxuICAgICAgICogXCJkYXRhLXdheWJhY2stbWFjaGluZS1zZWFyY2gtdXJsXCIgYXR0cmlidXRlIHNldCBpbiBvcmRlciBmb3IgdGhpcyBtZXRob2QgdG8gd29yayAoYW5kIHRoZVxuICAgICAgICogbWV0aG9kIGFzc3VtZXMgdGhlIHF1ZXJ5IGNhbiBiZSB0YWNrZWQgb250byB0aGUgZW5kIG9mIHRoaXMgVVJMKS4gRm9yIGFsbCBvdGhlciBraW5kcyBvZlxuICAgICAgICogc2VhcmNoZXMsIGRvZXMgbm90aGluZy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiByZWRpcmVjdFdheWJhY2tTZWFyY2hlcyhldmVudCkge1xuICAgICAgICBjb25zdCB7IHdheWJhY2tNYWNoaW5lU2VhcmNoVXJsIH0gPSB0aGlzLmRhdGFzZXRcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSAkKHRoaXMuZWxlbWVudHMpXG4gICAgICAgIGNvbnN0IGNoZWNrZWRJbnB1dCA9IGVsZW1lbnRzLmZpbHRlcignW25hbWU9XCJzaW5cIl06Y2hlY2tlZCcpXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZWxlbWVudHMuZmlsdGVyKCdbbmFtZT1cInNlYXJjaFwiXScpXG4gICAgICAgIGNvbnN0IHNpblZhbHVlID0gY2hlY2tlZElucHV0Lmxlbmd0aCA/IGNoZWNrZWRJbnB1dFswXS52YWx1ZSA6ICcnXG4gICAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gc2VhcmNoSW5wdXQubGVuZ3RoID8gc2VhcmNoSW5wdXRbMF0udmFsdWUgOiAnJ1xuXG4gICAgICAgIGlmICh3YXliYWNrTWFjaGluZVNlYXJjaFVybCAmJiBzaW5WYWx1ZSA9PT0gJ1dFQicpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBbXG4gICAgICAgICAgICAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2gganVzdCBpbiBjYXNlLlxuICAgICAgICAgICAgd2F5YmFja01hY2hpbmVTZWFyY2hVcmwucmVwbGFjZSgvXFwvJC8sICcnKSxcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlLFxuICAgICAgICAgIF0uam9pbignLycpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb3Blbk9wdGlvbnMoKSB7XG4gICAgICAgIHNlYXJjaE9wdGlvbnNcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2xvc2VPcHRpb25zKCkge1xuICAgICAgICBzZWFyY2hPcHRpb25zXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENsb3NlcyBvcHRpb25zIGlmIHRoZSBuZXdseSBmb2N1c2VkIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGUgZm9ybSBhbmQgdGhlIGZvcm1cbiAgICAgICAqIGlzIGNvbmZpZ3VyZWQgdG8gY2xvc2Ugd2hlbiBpdCBpcyBubyBsb25nZXIgYWN0aXZlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldEVsZW1lbnQgZWxlbWVudCBiZWluZyBjbGlja2VkIG9yIHJlY2VpdmluZyBmb2N1c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBoYW5kbGVGb2N1c0NoYW5nZSh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGFyZ2V0RWxlbWVudCB8fFxuICAgICAgICAgIGZvcm1bMF0uY29udGFpbnModGFyZ2V0RWxlbWVudCkgfHxcbiAgICAgICAgICAoa2VlcE9wZW5XaGVuQ2hhbmdlZCAmJiBmb3JtQ2hhbmdlZClcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGNsb3NlT3B0aW9ucygpXG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtLmxlbmd0aCkge1xuICAgICAgICBmb3JtLm9uKCdzdWJtaXQnLCByZWRpcmVjdFdheWJhY2tTZWFyY2hlcylcblxuICAgICAgICBpZiAoIXNlYXJjaE9wdGlvbnMuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgIGJvZHkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVGb2N1c0NoYW5nZShldmVudC50YXJnZXQpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGZvcm1cbiAgICAgICAgICAgIC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICBmb3JtQ2hhbmdlZCA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2ZvY3Vzb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZUZvY3VzQ2hhbmdlKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2VhcmNoQmFyLm9uKCdmb2N1c2luJywgKCkgPT4ge1xuICAgICAgICAgICAgb3Blbk9wdGlvbnMoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hGb3Jtcy5lYWNoKChpbmRleCwgbm9kZSkgPT4gc2V0VXBTZWFyY2hGb3JtKG5vZGUpKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdHdvLXdheSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIG1haW4gcGFnZSBhbmQgYSBCb29rUmVhZGVyXG4gICAqIGVtYmVkZGVkIGluIGFuIDxpZnJhbWU+XG4gICAqXG4gICAqIER1ZSB0byB0aGUgPGlmcmFtZT4gdGhlIHBhZ2UgYW5kIHRoZSBCb29rUmVhZGVyIG11c3QgY29tbXVuaWNhdGUgdXNpbmdcbiAgICogdGhlIEJvb2tSZWFkZXIncyBVUkwgcGx1Z2luLCB3aGljaCBzZW5kcyBhbmQgbGlzdGVucyBmb3IgXCJtZXNzYWdlXCJcbiAgICogZXZlbnRzIHZpYSB3aW5kb3cucG9zdE1lc3NhZ2UoKS5cbiAgICovXG4gIHN0YXRpYyBzZXRVcEJvb2tSZWFkZXJJZnJhbWUoKSB7XG4gICAgY29uc3QgbWVzc2FnZVR5cGUgPSAnYm9va1JlYWRlckZyYWdtZW50Q2hhbmdlJ1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0eSBpZnJhbWUnKVxuXG4gICAgLy8gTm8gQm9va1JlYWRlciBlbWJlZCwgYWJvcnRcbiAgICBpZiAoIWlmcmFtZSkgcmV0dXJuXG5cbiAgICAvLyBVUkwgc3luY2luZyBub3QgZW5hYmxlZCwgYWJvcnRcbiAgICBpZiAoIWlmcmFtZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYm9vay1yZWFkZXItc3luYy11cmxzJykpIHJldHVyblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCBwYWdlIFVSTCB3aXRob3V0IHJlbG9hZGluZyBvciBhZGRpbmcgdG8gdGhlXG4gICAgICogYnJvd3NlciBoaXN0b3J5IHVzaW5nIHRoZSBIaXN0b3J5IEFQSVxuICAgICAqXG4gICAgICogT24gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHdpbmRvdy5oaXN0b3J5IChtYWlubHkgT3BlcmEgTWluaSksXG4gICAgICogdGhpcyBpcyBhIG5vLW9wLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZyYWdtZW50IHRoZSBuZXcgZnJhZ21lbnRcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnlfQVBJXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlVXJsKGZyYWdtZW50KSB7XG4gICAgICAvLyBIaXN0b3J5IEFQSSBub3Qgc3VwcG9ydGVkLCBhYm9ydFxuICAgICAgaWYgKCEoJ2hpc3RvcnknIGluIHdpbmRvdykpIHJldHVyblxuXG4gICAgICBjb25zdCBwYXRoID0gcmVwbGFjZUJvb2tSZWFkZXJGcmFnbWVudChcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICBmcmFnbWVudCxcbiAgICAgIClcblxuICAgICAgLy8gUmVjb25zdHJ1Y3QgVVJMIHdpdGggbmV3IHBhdGhcbiAgICAgIGNvbnN0IHVybCA9IHBhdGggKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2hcblxuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHsgZnJhZ21lbnQgfSwgd2luZG93LnRpdGxlLCB1cmwpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIC8vIE5vdCBhIHJlY29nbml6ZWQgbWVzc2FnZSB0eXBlLCBhYm9ydFxuICAgICAgaWYgKCFldmVudC5kYXRhIHx8IGV2ZW50LmRhdGEudHlwZSAhPT0gbWVzc2FnZVR5cGUpIHJldHVyblxuXG4gICAgICB1cGRhdGVVcmwoZXZlbnQuZGF0YS5mcmFnbWVudClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZGFibGUvY29sbGFwc2libGUgYWNjb3JkaW9uIGNvbXBvbmVudCwgaW1wbGVtZW50ZWQgd2l0aCA8ZGV0YWlscz5cbiAgICogZWxlbWVudHNcbiAgICpcbiAgICogVGhlIEphdmFTY3JpcHQgZ3VhcmFudGVlcyBvbmx5IG9uZSA8ZGV0YWlscz4gaXMgb3BlbiBhdCBhIHRpbWUgYW5kXG4gICAqIHNjcm9sbHMgdGhlIG9wZW4gPGRldGFpbHM+J3MgY29udGVudCBpbnRvIHZpZXcuXG4gICAqXG4gICAqIEBzZWUgYWNjb3JkaW9uLmxlc3NcbiAgICovXG4gIHN0YXRpYyBzZXRVcEFjY29yZGlvbnMoKSB7XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFsbCA8ZGV0YWlscz4gZWxlbWVudHMgaW4gZGV0YWlsc0VscywgZXhjZXB0IHNlbGVjdGVkRGV0YWlsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRGV0YWlsc0VsZW1lbnRbXX0gZGV0YWlsc0Vsc1xuICAgICAqIEBwYXJhbSB7SFRNTERldGFpbHNFbGVtZW50fSAgIHNlbGVjdGVkRGV0YWlsc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsb3NlQWxsRXhjZXB0KGRldGFpbHNFbHMsIHNlbGVjdGVkRGV0YWlscykge1xuICAgICAgQXJyYXkuZnJvbShkZXRhaWxzRWxzKVxuICAgICAgICAuZm9yRWFjaCgoZGV0YWlscykgPT4ge1xuICAgICAgICAgIGlmIChkZXRhaWxzICE9PSBzZWxlY3RlZERldGFpbHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgZGV0YWlscy5vcGVuID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHNpbmdsZSBhY2NvcmRpb24gY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhY2NvcmRpb25cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRVcEFjY29yZGlvbihhY2NvcmRpb24pIHtcbiAgICAgIC8qKlxuICAgICAgICogUmVzcG9uZHMgdG8gdGhlIFwidG9nZ2xlXCIgZXZlbnQgb24gYSA8ZGV0YWlscz5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBoYW5kbGVUb2dnbGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQub3BlbikgcmV0dXJuXG5cbiAgICAgICAgY2xvc2VBbGxFeGNlcHQoXG4gICAgICAgICAgYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RldGFpbHMnKSxcbiAgICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICAgIClcblxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly93d3cuYWJlYXV0aWZ1bHNpdGUubmV0L3Ntb290aGx5LXNjcm9sbC10by1hbi1lbGVtZW50LXdpdGhvdXQtYS1qcXVlcnktcGx1Z2luLTJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChldmVudC50YXJnZXQpLm9mZnNldCgpLnRvcCxcbiAgICAgICAgfSwgNDAwKVxuICAgICAgfVxuXG4gICAgICBBcnJheS5mcm9tKGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdkZXRhaWxzJykpXG4gICAgICAgIC5mb3JFYWNoKChkZXRhaWxzKSA9PiB7XG4gICAgICAgICAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCBoYW5kbGVUb2dnbGUpXG4gICAgICAgIH0pXG5cbiAgICAgIGFjY29yZGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWNjb3JkaW9uLXJlYWR5JywgJycpXG4gICAgfVxuXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY2NvcmRpb25dJykpXG4gICAgICAuZm9yRWFjaChzZXRVcEFjY29yZGlvbilcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNsaWNrIG9uIHNlYXJjaCAnQWR2YW5jZWQgU2VhcmNoJyBsaW5rLlxuICAgKlxuICAgKiBJZiAnU2VhcmNoIFRWIG5ld3MgY2FwdGlvbnMnIGlzIGNoZWNrZWQsIHdlIGlnbm9yZSB0aGUgbGluayBjbGlja1xuICAgKiBhbmQgY3JlYXRlIGFuZCBvcGVuIFRWIGFkdmFuY2VkIHNlYXJjaCBwb3B1cCByaWdodCBvbiB0aGUgcGFnZS5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gIHRydWUgZm9yIGJyb3dzZXIgdG8gZ28gdG8gbm9ybWFsIGFkdmFuY2VkIHNlYXJjaCBwYWdlOyBlbHNlIGZhbHNlXG4gICAqL1xuICBzdGF0aWMgYWR2YW5jZWRfc2VhcmNoKGxpbmspIHtcbiAgICBpZiAoIUFKUy5pc19hZHZhbmNlZF9UVl9zZWFyY2gobGluaykpXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgLy8gdGhpcyBtZWFucyB3ZSB3YW50IFRWIGFkdmFuY2VkIHNlYXJjaCBmb3JtIGJlaGF2aW91ciBpbnN0ZWFkIVxuICAgIGlmICghQUpTLmFkdikge1xuICAgICAgQUpTLmFkdiA9IHtcbiAgICAgICAgbWFwcGluZzogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gb25seSByZWxvYWQgdGhlIHJlc291cmNlcyBiZWxvdyBhdCBtb3N0IDF4L2RheVxuICAgIGNvbnN0IHltZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApIC8vIGVnOiAyMDE3LTA2LTI4XG4gICAgJC5hamF4U2V0dXAoe1xuICAgICAgY2FjaGU6IHRydWUsXG4gICAgfSlcblxuICAgIC8vIE5PVEU6IHVzaW5nIG5ldyBKUyBQcm9taXNlIC8galF1ZXJ5IFByb21pc2UtaXNoIERlZmVycmVkLi5cbiAgICAvLyBOT1RFOiBpZiB3ZSBhcmUgaW52b2tpbmcgdGhpcyBtb3JlIHRoYW4gb25jZSwgd2UgcmV1c2UgcHJpb3IgcmVzdWx0c1xuICAgIC8vIE5PVEU6IHltZCBmb3JjZXMgcmVsb2FkIGF0IGxlYXN0IG9uY2UgYSBkYXlcbiAgICAvLyBOT1RFOiBpZiBhbnkgcmVzb3VyY2VzIGhhcHBlbiB0byBfYWxyZWFkeV8gYmUgbG9hZGVkIGluIDxoZWFkPiwgdXNlIHRoZW1cbiAgICBjb25zdCBpID0gJ2h0dHBzOi8vYXJjaGl2ZS5vcmcvaW5jbHVkZXMvJ1xuICAgICQud2hlbihcbiAgICAgICh0eXBlb2YgVFYgICAgICAgIT09ICd1bmRlZmluZWQnIHx8ICQuZ2V0U2NyaXB0KGkuY29uY2F0KCd0di5taW4uanM/JywgeW1kKSkpLFxuICAgICAgKHR5cGVvZiBUVlNlYXJjaCAhPT0gJ3VuZGVmaW5lZCcgfHwgJC5nZXRTY3JpcHQoaS5jb25jYXQoJ2J1aWxkL2pzL3R2c2VhcmNoLm1pbi5qcz8nLCB5bWQpKSksXG4gICAgICAoJC51aSB8fCAkLmdldFNjcmlwdChpLmNvbmNhdCgnanF1ZXJ5LXVpLTEuMTAuMy5taW4uanMnKSkpLFxuICAgICAgKCQudWkgfHwgJC5nZXQoJy9pbmNsdWRlcy9yZWRtb25kL2pxdWVyeS11aS0xLjEwLjMubWluLmNzcycsIChjc3MpID0+IHtcbiAgICAgICAgJCgnPHN0eWxlIC8+JykuaHRtbChjc3MpLmFwcGVuZFRvKCdoZWFkJykgLy8gQWRkIENTUyB0byBwYWdlXG4gICAgICB9KSksXG4gICAgICAoQUpTLmFkdi5tYXBwaW5nIHx8ICQuZ2V0SlNPTignL2RldGFpbHMvdHY/bWFwcGluZ3Mmb3V0cHV0PWpzb24mJy5jb25jYXQoeW1kKSwgKG1hcHBpbmcpID0+IHtcbiAgICAgICAgQUpTLmFkdi5tYXBwaW5nID0gbWFwcGluZ1xuICAgICAgfSkpLFxuICAgICkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoQUpTLmFkdi5tYXBwaW5nLmxlbmd0aCAhPT0gMikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIG5vLWFsZXJ0XG4gICAgICAgIGFsZXJ0KCdmYWlsZWQgdG8gZ2V0IG5ldHdvcmsgYW5kIHByb2dyYW0gbWFwcGluZ3MhJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8qIGdsb2JhbCAgVFZTZWFyY2ggKi9cbiAgICAgIFRWU2VhcmNoLnByb1BpY2soQUpTLmFkdi5tYXBwaW5nLCBsaW5rKVxuICAgIH0pXG5cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCAnQWR2YW5jZWQgU2VhcmNoJyBzaG91bGQgYmUgaGFuZGxlZCB2aWEgSlNcbiAgICogKHdoaWNoIGFzIG9mIG5vdyBpcyBqdXN0IFRWIEZUUyB0byBtYWtlIGEgcG9wdXAgc2hvdyB1cCkuXG4gICAqIExvZ2ljYWxseSBwcml2YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtET00gZWxlbWVudH0gIGVsbSAnQWR2YW5jZWQgU2VhcmNoJyBsaW5rIGVsZW1lbnQgdGhhdCB3YXMganVzdCBjbGlja2VkXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgc2hvdWxkIGhhbmRsZSB3aXRoIEpTIGFuZCBub3QgZGlyZWN0bHkgZ28gdG8gL2FkdmFuY2VkX3NlYXJjaC5waHA/XG4gICAqL1xuICBzdGF0aWMgaXNfYWR2YW5jZWRfVFZfc2VhcmNoKGVsbSkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ3dlYi5hcmNoaXZlLm9yZycpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIC8vIGZvciBub3cgYXQgbGVhc3QsIHRyYWNleSBmZWx0IHNob3VsZCBhdm9pZCBoYW5kbGluZyBsaW5rIG9uIElBIHRvcC9ob21lIHBhZ2UgZXZlbiB3aGVuXG4gICAgLy8gVFYgRlRTIGlzIHBpY2tlZC4gIGZvciBjb25zaXN0ZW5jeSwgdGhpcyBpcyBfZGVmaW5pdGVseV8gd29ydGggcmV2aXNpdGluZy5cbiAgICBpZiAoJChkb2N1bWVudC5ib2R5KS5oYXNDbGFzcygndG9wJykpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0ICRmb3JtID0gJChlbG0pLnBhcmVudHMoJ2Zvcm0nKVxuICAgIGlmICgkZm9ybS5maW5kKCcuanMtc2VhcmNoLW9wdGlvbnMgaW5wdXRbdmFsdWU9VFZdJykuaXMoJzpjaGVja2VkJykpXG4gICAgICByZXR1cm4gJGZvcm1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICAvKipcbiAgICogRmlyZXMgYW4gQXJjaGl2ZSBBbmFseXRpY3MgdHJhY2tpbmcgZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc3RhdGljIGZpcmVBbmFseXRpY3NUcmFja2luZ0V2ZW50KGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsID0gbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIGFyY2hpdmVfYW5hbHl0aWNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYXJjaGl2ZV9hbmFseXRpY3Muc2VuZF9waW5nKHtcbiAgICAgICAga2luZDogJ2V2ZW50JyxcbiAgICAgICAgZWM6IGNhdGVnb3J5LFxuICAgICAgICBlYTogYWN0aW9uLFxuICAgICAgICBlbDogbGFiZWwsXG4gICAgICAgIGNhY2hlX2J1c3Q6IE1hdGgucmFuZG9tKCksXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBoYW5kbGVycyBmb3IgYWN0aW9uIHRyYWNraW5nLlxuICAgKlxuICAgKiBUbyBlbmFibGUgY2xpY2sgdHJhY2tpbmcgZm9yIGEgbGluaywgYWRkIGEgYGRhdGEtZXZlbnQtY2xpY2stdHJhY2tpbmdgXG4gICAqIGF0dHJpYnV0ZSBjb250YWluaW5nIHRoZSBHb29nbGUgQW5hbHl0aWNzIEV2ZW50IENhdGVnb3J5IGFuZCBBY3Rpb24sIHNlcGFyYXRlZFxuICAgKiBieSBhIHZlcnRpY2FsIHBpcGUgKHwpLlxuICAgKiBlLmcuIGA8YSBocmVmPVwiZm9vYmFyXCIgZGF0YS1ldmVudC1jbGljay10cmFja2luZz1cIlRvcE5hdnxGb29CYXJcIj5gXG4gICAqXG4gICAqIFRvIGVuYWJsZSBmb3JtIHN1Ym1pdCB0cmFja2luZywgYWRkIGEgYGRhdGEtZXZlbnQtZm9ybS10cmFja2luZ2AgYXR0cmlidXRlXG4gICAqIHRvIHRoZSBgZm9ybWAgdGFnLlxuICAgKiBlLmcuIGA8Zm9ybSBkYXRhLWV2ZW50LWZvcm0tdHJhY2tpbmc9XCJUb3BOYXZ8U2VhcmNoRm9ybVwiIG1ldGhvZD1cIkdFVFwiPmBcbiAgICovXG4gIHN0YXRpYyBzZXRVcEFjdGlvblRyYWNraW5nKCkge1xuICAgIGNvbnN0IGNsaWNrVHJhY2tpbmdBdHRyaWJ1dGVOYW1lID0gJ2V2ZW50LWNsaWNrLXRyYWNraW5nJ1xuICAgIGNvbnN0IGZvcm1UcmFja2luZ0F0dHJpYnV0ZU5hbWUgPSAnZXZlbnQtZm9ybS10cmFja2luZydcblxuICAgIGZ1bmN0aW9uIGFjdGlvbkhhbmRsZXIoYXR0cmlidXRlTmFtZSkge1xuICAgICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICBpZiAoIWN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QWN0aW9uID0gY3VycmVudFRhcmdldC5kYXRhKGF0dHJpYnV0ZU5hbWUpXG4gICAgICAgIGlmICghY2F0ZWdvcnlBY3Rpb24pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QWN0aW9uUGFydHMgPSBjYXRlZ29yeUFjdGlvbi5zcGxpdCgnfCcpXG4gICAgICAgIEFKUy5maXJlQW5hbHl0aWNzVHJhY2tpbmdFdmVudChjYXRlZ29yeUFjdGlvblBhcnRzWzBdLCBjYXRlZ29yeUFjdGlvblBhcnRzWzFdKVxuICAgICAgfVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2NsaWNrJywgYFtkYXRhLSR7Y2xpY2tUcmFja2luZ0F0dHJpYnV0ZU5hbWV9XWAsIGFjdGlvbkhhbmRsZXIoY2xpY2tUcmFja2luZ0F0dHJpYnV0ZU5hbWUpKVxuICAgICQoYGZvcm1bZGF0YS0ke2Zvcm1UcmFja2luZ0F0dHJpYnV0ZU5hbWV9XWApLm9uKCdzdWJtaXQnLCBhY3Rpb25IYW5kbGVyKGZvcm1UcmFja2luZ0F0dHJpYnV0ZU5hbWUpKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgZGF0YS1wb3B1cC1saW5rc1xuICAgKi9cbiAgc3RhdGljIHNldHVwUG9wdXBMaW5rKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSAncG9wdXAtbGluaydcbiAgICBjb25zdCB3aWR0aEF0dHJpYnV0ZSA9ICdwb3B1cC1saW5rLXdpZHRoJ1xuICAgIGNvbnN0IGhlaWdodEF0dHJpYnV0ZSA9ICdwb3B1cC1saW5rLWhlaWdodCdcblxuICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2NsaWNrJywgYFtkYXRhLSR7YXR0cmlidXRlTmFtZX1dYCwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgY29uc3QgdyA9IGN1cnJlbnRUYXJnZXQuZGF0YSh3aWR0aEF0dHJpYnV0ZSkgfHwgNTAwXG4gICAgICBjb25zdCBoID0gY3VycmVudFRhcmdldC5kYXRhKGhlaWdodEF0dHJpYnV0ZSkgfHwgNTAwXG4gICAgICBBSlMub3BlblBvcHVwKHcsIGgsIGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZilcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWN0IGZ1bmN0aW9uYWwgY29tcG9uZW50LiBSZW5kZXJzIHJlbGF0ZWQgaXRlbSB0aWxlcyBvbiBkZXRhaWxzIHBhZ2UuXG4gICAqIFRoaXMgbWFya3VwIGlzICpkdXBsaWNhdGVkIGJldHdlZW4gdGhlIEpTIGFuZCBQSFAgdG8gcmVuZGVyIHRpbGVzLlxuICAgKlxuICAgKiBAc2VlIFRpbGVzOjpjb25zdHJ1Y3QoKVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7QXJyYXl9ICBwYXJhbXMuZGF0YUhhc2hcbiAgICogQHJldHVybiB7SlNYLkVsZW1lbnRDbGFzc31cbiAgICovXG4gIHN0YXRpYyBSZWxhdGVkSXRlbVNlY3Rpb24oeyBkYXRhSGFzaCA9IFtdIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gYXJpYS1sYWJlbD1cIlJlbGF0ZWQgSXRlbXNcIj5cbiAgICAgICAge2RhdGFIYXNoLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1pYVwiIGRhdGEtaWQ9e2l0ZW0uaWRlbnRpZmllcn0gZGF0YS1tZWRpYXR5cGU9e2l0ZW0ubWVkaWF0eXBlfSBkYXRhLXllYXI9XCJcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3RlYWx0aFwiIHRhYkluZGV4PVwiLTFcIiBocmVmPXtgL2RldGFpbHMvJHtpdGVtLmlkZW50aWZpZXJ9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4tdGlsZXMgdmlld3MgQyBDMVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXhzXCI+e2l0ZW0uZG93bmxvYWRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbi1zbSBoaWRkZW4tbWQgaGlkZGVuLWxnXCI+e2l0ZW0uZG93bmxvYWRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQzIzNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaXRlbS10dGwgJHtpdGVtLmxlbmRDbGFzc30gQyBDMmB9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9kZXRhaWxzLyR7aXRlbS5pZGVudGlmaWVyfWB9IHRpdGxlPXtpdGVtLnRpdGxlfSBkYXRhLWV2ZW50LWNsaWNrLXRyYWNraW5nPVwiR2VuZXJpY05vbkNvbGxlY3Rpb258SXRlbVRpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaXRlbS1pbWdcIiBhbHQ9XCJcIiBzcmM9e2Avc2VydmljZXMvaW1nLyR7aXRlbS5pZGVudGlmaWVyfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsoaXRlbS5sZW5kaW5nRW5hYmxlZCA9PT0gdHJ1ZSAmJiBpdGVtLmxlbmRpbmdBdmFpbGFibGUgPT09IHRydWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlLWFjdGlvbiBoaWRkZW4tbGlzdHNcIj5Cb3Jyb3c8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsoaXRlbS5sZW5kaW5nRW5hYmxlZCA9PT0gdHJ1ZSAmJiBpdGVtLmxlbmRpbmdBdmFpbGFibGUgPT09IGZhbHNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZS1hY3Rpb24gaGlkZGVuLWxpc3RzXCI+Sm9pbiBXYWl0bGlzdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgeyhpdGVtLmxvZ2luUmVxdWlyZWQgPT09IHRydWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlLWFjdGlvbiBoaWRkZW4tbGlzdHNcIj5Mb2cgaW4gdG8gdmlldyB0aGlzIGl0ZW08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHRsXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ5IEMgQzRcIj5cbiAgICAgICAgICAgICAgICAgIHsoaXRlbS5jcmVhdG9yICE9PSAnJykgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4tbGlzdHNcIj5ieSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnl2XCIgdGl0bGU9e2l0ZW0uY3JlYXRvcn0+e2l0ZW0uY3JlYXRvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRiYXIgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1pY29uIEMgQzVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGljb25vY2hpdmUtJHtpdGVtLm1lZGlhdHlwZX1gfSBhcmlhLWhpZGRlbj1cInRydWVcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2l0ZW0ubWVkaWF0eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdGF0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29ub2NoaXZlLWV5ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5leWU8L3NwYW4+PHNwYW4+e2l0ZW0uZG93bmxvYWRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2g2PlxuXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN0YXRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25vY2hpdmUtZmF2b3JpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+ZmF2b3JpdGU8L3NwYW4+e2l0ZW0uZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgPC9oNj5cblxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdGF0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29ub2NoaXZlLWNvbW1lbnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Y29tbWVudDwvc3Bhbj57aXRlbS5udW1SZXZpZXdzfVxuICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFjdCBmdW5jdGlvbmFsIGNvbXBvbmVudC4gUmVuZGVycyBhIHRhYmxlIHNob3dpbmcgdmlldyBzdGF0cyBwZXIgZ2VvZ3JhcGhpYyByZWdpb24gZm9yIGFuXG4gICAqIGl0ZW0gb3IgY29sbGVjdGlvbi5cbiAgICpcbiAgICogQHNlZSBzdGF0cy10YWJsZS5sZXNzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuY2FwdGlvblxuICAgKiBAcGFyYW0ge0dlb0NvdW50W119IHByb3BzLmNvdW50c1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgUmVnaW9uc1RhYmxlKHsgY2FwdGlvbiA9ICdSZWdpb25zJywgY2FwdGlvbkNsYXNzID0gJycsIGNvdW50cyA9IFtdIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0YXRzLXRhYmxlXCI+XG4gICAgICAgIDxjYXB0aW9uIGNsYXNzTmFtZT17Y2FwdGlvbkNsYXNzfT57Y2FwdGlvbn08L2NhcHRpb24+XG5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlJlZ2lvbjwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db3VudHJ5PC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0cy10YWJsZV9fbnVtZXJpYy1jb2x1bW5cIiBzY29wZT1cImNvbFwiPlZpZXdzPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7Y291bnRzLm1hcChjb3VudCA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtgJHtjb3VudC5zdGF0ZS5jb2RlfV8ke2NvdW50LmNvdW50cnkuY29kZX1fJHtjb3VudC5jb3VudH1gfT5cbiAgICAgICAgICAgICAgPHRkPntjb3VudC5zdGF0ZS5mb3JtYXR0ZWROYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57Y291bnQuY291bnRyeS5mb3JtYXR0ZWROYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzdGF0cy10YWJsZV9fbnVtZXJpYy1jb2x1bW5cIj57Y291bnQuZm9ybWF0dGVkQ291bnR9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPilcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFjdCBmdW5jdGlvbmFsIGNvbXBvbmVudC4gUmVuZGVycyBhIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGlsZSBhIHJlc291cmNlIGlzIGxvYWRpbmcuXG4gICAqXG4gICAqIEBzZWUgbG9hZGluZy1tZXNzYWdlLmxlc3NcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5tZXNzYWdlXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBMb2FkaW5nTWVzc2FnZSh7IG1lc3NhZ2UgPSAnTG9hZGluZycgfSkge1xuICAgIHJldHVybiA8c21hbGwgY2xhc3NOYW1lPVwibG9hZGluZy1tZXNzYWdlXCI+e21lc3NhZ2V9PC9zbWFsbD5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFjdCBmdW5jdGlvbmFsIGNvbXBvbmVudC4gUmVuZGVycyBhIGVycm9yIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuZXJyb3JNc2dcbiAgICogQHJldHVybiB7SlNYLkVsZW1lbnRDbGFzc31cbiAgICovXG4gIHN0YXRpYyBFcnJvck1lc3NhZ2UoeyBlcnJvck1zZyB9KSB7XG4gICAgcmV0dXJuIDxzbWFsbD57ZXJyb3JNc2d9PC9zbWFsbD5cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbiBlbGVtZW50IHdpdGggY2xhc3MgXCJqcy10b3AtcmVnaW9ucy10YWJsZVwiIGFuZCByZW5kZXJzIGEgdGFibGUgc2hvd2luZyB0aGUgdG9wIDEwXG4gICAqIHJlZ2lvbnMgaW4gdGVybXMgb2Ygdmlld3MgZm9yIGFuIGl0ZW0vY29sbGVjdGlvbi5cbiAgICpcbiAgICogRGF0YSBBdHRyaWJ1dGVzOlxuICAgKiAgLSBkYXRhLWNhcHRpb24gKHN0cmluZylcbiAgICogIC0gZGF0YS1jYXB0aW9uLWNsYXNzIChzdHJpbmcpXG4gICAqICAtIGRhdGEtZGF5cyAobnVtYmVyKVxuICAgKiAgLSBkYXRhLWlkZW50aWZpZXIgKHN0cmluZylcbiAgICogIC0gZGF0YS1saW1pdCAobnVtYmVyKVxuICAgKi9cbiAgc3RhdGljIHNldFVwVG9wUmVnaW9uc1RhYmxlKCkge1xuICAgIGNvbnN0IHJvb3QgPSAkKCcuanMtdG9wLXJlZ2lvbnMtdGFibGUnKVxuICAgIGNvbnN0IG1lc3NhZ2UgPSByb290LmZpbmQoJy5qcy10b3AtcmVnaW9ucy1tZXNzYWdlJylcbiAgICBjb25zdCBvcmlnaW5hbE1lc3NhZ2VUZXh0ID0gbWVzc2FnZS50ZXh0KClcblxuICAgIGlmICghcm9vdCB8fCAhbWVzc2FnZSlcbiAgICAgIHJldHVyblxuXG4gICAgUmVhY3RET00ucmVuZGVyKDxBSlMuTG9hZGluZ01lc3NhZ2UgbWVzc2FnZT1cImxvYWRpbmcgZGF0YVwiIC8+LCBtZXNzYWdlWzBdKVxuXG4gICAgY29uc3QgYXBpT3B0aW9ucyA9IHtcbiAgICAgIHVhS2luZHM6IFsnbm9uX3JvYm90JywgJ3VucmVjb2duaXplZCddLFxuICAgIH1cblxuICAgIGlmIChyb290LmRhdGEoJ2RheXMnKSlcbiAgICAgIGFwaU9wdGlvbnMuZGF5cyA9IHBhcnNlSW50KHJvb3QuZGF0YSgnZGF5cycpLCAxMClcblxuICAgIGlmIChyb290LmRhdGEoJ2xpbWl0JykpXG4gICAgICBhcGlPcHRpb25zLmxpbWl0ID0gcGFyc2VJbnQocm9vdC5kYXRhKCdsaW1pdCcpLCAxMClcblxuICAgIEFKUy5TdGF0c0FwaUNsaWVudC5nZXRHZW9Db3VudHMocm9vdC5kYXRhKCdpZGVudGlmaWVyJyksIGFwaU9wdGlvbnMpLnRoZW4oXG4gICAgICAoY291bnRzKSA9PiB7XG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcig8QUpTLlJlZ2lvbnNUYWJsZVxuICAgICAgICAgIGNhcHRpb249e3Jvb3QuZGF0YSgnY2FwdGlvbicpfVxuICAgICAgICAgIGNhcHRpb25DbGFzcz17cm9vdC5kYXRhKCdjYXB0aW9uQ2xhc3MnKX1cbiAgICAgICAgICBjb3VudHM9e2NvdW50c31cbiAgICAgICAgLz4sIHJvb3RbMF0pXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBJZiBBUEkgY2FsbCBmYWlscywgZmFsbCBiYWNrIHRvIG9yaWdpbmFsIHRleHQuXG4gICAgICAgIG1lc3NhZ2UudGV4dChvcmlnaW5hbE1lc3NhZ2VUZXh0KVxuICAgICAgfSxcbiAgICApXG4gIH1cbn0gLy8gZW5kIGNsYXNzIEFKU1xuXG5cbmNsYXNzIFRpbWVncmFmIHtcbiAgLy8gY2xhc3MgZm9yIGZhY2V0cyBzZWN0aW9uIGludGVyYWN0aXZlIHRpbWUtcmVsYXRlZCBncmFwaC5cbiAgLy8gR3JhcGggc2hvd3Mgc2VhcmNoIHJlc3VsdHMgaGlzdG9ncmFtZWQgb3ZlciB0aW1lLlxuICAvLyBJdCBhbGxvd3MgdXNlciB0byBkcmFnIGxlZnQgYW5kIHJpZ2h0ICdoYW5kbGVzJyBvdmVybGF5aW5nIHRoZSBncmFwaCB0byBjb25zdHJhaW4gdG8gYVxuICAvLyBzbWFsbGVyIHRpbWUgcGVyaW9kLlxuICBzdGF0aWMgdGltZWNoYW5nZWQgPSBmYWxzZVxuICBzdGF0aWMgYyA9IHt9IC8vIGNvbmZpZyB0aGF0IGNvbWVzIGZyb20gUEhQXG5cbiAgc3RhdGljIHNldHVwKGxlZnRUUywgcml0ZVRTLCBtaW5EYXRlLCBtYXhEYXRlKSB7XG4gICAgVGltZWdyYWYuYy5yZWFsR3JhcGhXaWR0aCA9IFRpbWVncmFmLmMuR1JBUEhfV0lEVEggLSBUaW1lZ3JhZi5jLkdSQVBIX1BBRERJTkdcbiAgICBUaW1lZ3JhZi5jLm1heFNsaWRlID0gTWF0aC5mbG9vcigobWF4RGF0ZS5nZXRUaW1lKCkgLSBtaW5EYXRlLmdldFRpbWUoKSkgLyA4NjQwMDAwMClcbiAgICBjb25zdCBjc01pblRTID0gbWluRGF0ZS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgY29uc3QgbGVmdCA9IGxlZnRUUyA+IDAgPyBNYXRoLmZsb29yKChsZWZ0VFMgLSBjc01pblRTKSAvIDg2NDAwKSA6IDBcbiAgICBjb25zdCByaXRlID0gcml0ZVRTID4gMCA/IE1hdGguZmxvb3IoKHJpdGVUUyAtIGNzTWluVFMpIC8gODY0MDApIDogVGltZWdyYWYuYy5tYXhTbGlkZVxuXG5cbiAgICBjb25zdCAkc2xpZGVyZGl2ID0gJCgnPGRpdiAvPicpLmF0dHIoeyBpZDogJ3NsaWRlcicgfSkuY3NzKHtcbiAgICAgIHdpZHRoOiBUaW1lZ3JhZi5jLnJlYWxHcmFwaFdpZHRoLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IChUaW1lZ3JhZi5jLkdSQVBIX0hFSUdIVCAtIDEwKSxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgfSlcbiAgICAkKCcjdGltZWdyYWYnKS5hcHBlbmQoJHNsaWRlcmRpdilcbiAgICAkc2xpZGVyZGl2LmFwcGVuZCgnPGJyIC8+JykgLy8gYmxlYWghXG5cblxuICAgIGxvZyhsZWZ0LCByaXRlKVxuXG4gICAgJCgnI3NsaWRlcicpLnNsaWRlcih7XG4gICAgICByYW5nZTogdHJ1ZSxcbiAgICAgIG1heDogVGltZWdyYWYuYy5tYXhTbGlkZSxcbiAgICAgIHZhbHVlczogW2xlZnQsIHJpdGVdLFxuICAgICAgc2xpZGU6IChldmVudCwgdWkpID0+IHtcbiAgICAgICAgY29uc3QgdHMgPSBtaW5EYXRlLmdldFRpbWUoKVxuICAgICAgICBjb25zdCBkMSA9IG5ldyBEYXRlKHRzKVxuICAgICAgICBjb25zdCBkMiA9IG5ldyBEYXRlKHRzKVxuXG4gICAgICAgIGQxLnNldERhdGUoZDEuZ2V0RGF0ZSgpICsgdWkudmFsdWVzWzBdKVxuICAgICAgICBkMi5zZXREYXRlKGQyLmdldERhdGUoKSArIHVpLnZhbHVlc1sxXSlcblxuICAgICAgICAkKCcjZnJvbSAnKS5odG1sKCQuZGF0ZXBpY2tlci5mb3JtYXREYXRlKCdNIGQnLCBkMSkpIC8vIEphbiAxOVxuICAgICAgICAkKCcjdG8gICAnKS5odG1sKCQuZGF0ZXBpY2tlci5mb3JtYXREYXRlKCdNIGQnLCBkMikpIC8vIEphbiAxOVxuICAgICAgICAkKCcjZnJvbUInKS5odG1sKCQuZGF0ZXBpY2tlci5mb3JtYXREYXRlKCd5eW1tZGQnLCBkMSkpIC8vIHl5eXltbWRkXG4gICAgICAgICQoJyN0b0IgICcpLmh0bWwoJC5kYXRlcGlja2VyLmZvcm1hdERhdGUoJ3l5bW1kZCcsIGQyKSkgLy8geXl5eW1tZGRcbiAgICAgICAgJCgnI2RhdGVwaWNrTCcpLnZhbCgkLmRhdGVwaWNrZXIuZm9ybWF0RGF0ZSgnbW0vZGQveXknLCBkMSkpIC8vIG1tL2RkL3l5eXlcbiAgICAgICAgJCgnI2RhdGVwaWNrUicpLnZhbCgkLmRhdGVwaWNrZXIuZm9ybWF0RGF0ZSgnbW0vZGQveXknLCBkMikpIC8vIG1tL2RkL3l5eXlcblxuXG4gICAgICAgIGNsZWFyVGltZW91dChUaW1lZ3JhZi5oaWRlTClcbiAgICAgICAgY2xlYXJUaW1lb3V0KFRpbWVncmFmLmhpZGVSKVxuXG4gICAgICAgIGNvbnN0IGZvZmYgPSB7IGxlZnQ6ICgkKCcjc2xpZGVyIC5wdHJMJykub2Zmc2V0KCkubGVmdCAtICQoJyNmcm9tJykud2lkdGgoKSkgKyAxMCB9XG4gICAgICAgIGNvbnN0IHRvZmYgPSB7IGxlZnQ6ICAkKCcjc2xpZGVyIC5wdHJSJykub2Zmc2V0KCkubGVmdCB9XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICBicmFjZS1zdHlsZSAqL1xuICAgICAgICAkKCcjZnJvbScpLm9mZnNldChmb2ZmKS5zaG93KDAsICgpID0+IHsgVGltZWdyYWYuaGlkZUwgPSBzZXRUaW1lb3V0KCgpID0+ICQoJyNmcm9tJykuaGlkZSgnc2xvdycpLCAyMDAwKSB9KVxuICAgICAgICAkKCcjdG8gICcpLm9mZnNldCh0b2ZmKS5zaG93KDAsICgpID0+IHsgVGltZWdyYWYuaGlkZVIgPSBzZXRUaW1lb3V0KCgpID0+ICQoJyN0byAgJykuaGlkZSgnc2xvdycpLCAyMDAwKSB9KVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICBicmFjZS1zdHlsZSAqL1xuXG4gICAgICAgIFRpbWVncmFmLnBpbmttZSh1aS52YWx1ZXNbMF0sIHVpLnZhbHVlc1sxXSlcbiAgICAgIH0sXG4gICAgICBzdG9wOiAoZXZlbnQsIHVpKSA9PiB7XG4gICAgICAgIFRpbWVncmFmLmFkanVzdCh1aS52YWx1ZXNbMF0sIHVpLnZhbHVlc1sxXSlcbiAgICAgICAgVGltZWdyYWYudGltZWNoYW5nZWQgPSB0cnVlXG4gICAgICAgIGNvbnN0IG5vdyA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvXmh0dHBbc10qOi8sICcnKVxuICAgICAgICBjb25zdCBiZWNvbWUgPSBgLy8ke2xvY2F0aW9uLmhvc3R9JHtUaW1lZ3JhZi5jLnF9JHtUaW1lZ3JhZi5hcmdzKCl9YFxuXG4gICAgICAgIGlmIChub3cgIT09IGJlY29tZSkge1xuICAgICAgICAgIGxvZyhub3cpXG4gICAgICAgICAgbG9nKGJlY29tZSlcblxuICAgICAgICAgIC8vIG1ha2UgaXQgbW9yZSBvYnZpb3VzIHRoYXQgc2VhcmNoIGlzIGJlaW5nIGlzc3VlZFxuICAgICAgICAgICQoJyNvcHNjcmVlbjFNJykucmVtb3ZlKClcbiAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCQoJzxkaXYgaWQ9XCJvcHNjcmVlbjFNXCIvPicpKVxuICAgICAgICAgICQoJyNvcHNjcmVlbjFNJykuc2hvdygnc2xvdycsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBiZWNvbWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBpZiAobGVmdCA+IDAgIHx8ICByaXRlID4gMClcbiAgICAgIFRpbWVncmFmLnBpbmttZShsZWZ0LCByaXRlKVxuICB9XG5cbiAgc3RhdGljIHBpbmttZShsZWZ0LCByaXRlKSB7XG4gICAgY29uc3QgeCA9IE1hdGgucm91bmQoVGltZWdyYWYuYy5HUkFQSF9QQURESU5HIC8gMilcbiAgICBjb25zdCBwaW5rTCA9IChNYXRoLnJvdW5kKChsZWZ0IC8gVGltZWdyYWYuYy5tYXhTbGlkZSkgKiBUaW1lZ3JhZi5jLnJlYWxHcmFwaFdpZHRoKSArIDIpXG4gICAgY29uc3QgcGlua1IgPSAoTWF0aC5yb3VuZCgocml0ZSAvIFRpbWVncmFmLmMubWF4U2xpZGUpICogVGltZWdyYWYuYy5yZWFsR3JhcGhXaWR0aCkgLSAyKSArIHhcblxuICAgIGNvbnN0IHJlY3QgPSBgcmVjdCgwcHgsJHtwaW5rUn1weCwke1RpbWVncmFmLmMuR1JBUEhfSEVJR0hUfXB4LCR7cGlua0x9cHgpYFxuICAgIGxvZyhyZWN0KVxuICAgICQoJyN0aW1lZ3JhZi1jbGlwJykuY3NzKCdjbGlwJywgcmVjdClcblxuICAgIGNvbnN0IHR0bCA9ICdjbGljayBhbmQgZHJhZyB0aGlzIHRvIGNoYW5nZSB0aW1lIHBlcmlvZCdcbiAgICBjb25zdCBhdHRyID0geyAnZGF0YS10aXRsZSc6IHR0bCwgJ2RhdGEtdG9nZ2xlJzogJ3Rvb2x0aXAnLCAnZGF0YS1wbGFjZW1lbnQnOiAnYm90dG9tJyB9XG4gICAgJCgkKCcjc2xpZGVyIGEnKS5nZXQoMCkpLmF0dHIoYXR0cikucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKS5hZGRDbGFzcygncHRyTCcpXG4gICAgJCgkKCcjc2xpZGVyIGEnKS5nZXQoMSkpLmF0dHIoYXR0cikucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKS5hZGRDbGFzcygncHRyUicpXG5cbiAgICBUaW1lZ3JhZi5hZGp1c3QobGVmdCwgcml0ZSlcbiAgfVxuXG4gIHN0YXRpYyBhZGp1c3QobGVmdCwgcml0ZSkge1xuICAgIGNvbnN0IG9uZWRheXNwYW4gPSAocml0ZSAtIGxlZnQgPCAyKVxuXG4gICAgbG9nKCdsZWZ0OicsIGxlZnQsICdyaXRlOicsIHJpdGUpXG5cbiAgICBpZiAob25lZGF5c3Bhbikge1xuICAgICAgJCgnI3RvJykuaGlkZSgpXG4gICAgICAkKCcjc2xpZGVyIC51aS13aWRnZXQtaGVhZGVyJykuY3NzKCdib3JkZXJDb2xvcicsICcjZDMzNjgyJylcbiAgICAgICQoJyNzbGlkZXIgLnVpLXdpZGdldC1oZWFkZXInKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJywgMClcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI3NsaWRlciAudWktd2lkZ2V0LWhlYWRlcicpLmNzcygnYm9yZGVyQ29sb3InLCAnI2QzMzY4MicpXG4gICAgICAkKCcjc2xpZGVyIC51aS13aWRnZXQtaGVhZGVyJykuY3NzKCdib3JkZXItbGVmdC13aWR0aCcsIDIpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFyZ3MoKSB7XG4gICAgaWYgKCFUaW1lZ3JhZi50aW1lY2hhbmdlZClcbiAgICAgIHJldHVybiAnJ1xuICAgIGNvbnN0IGZyb20yID0gJCgnI2Zyb21CJykudGV4dCgpLnRyaW0oKVxuICAgIGNvbnN0ICAgdG8yID0gJCgnI3RvQiAgJykudGV4dCgpLnRyaW0oKVxuICAgIGNvbnN0IGVuZCA9IChmcm9tMiA9PT0gdG8yID8gJycgOiBgLSR7dG8yfWApXG4gICAgcmV0dXJuIGAmdGltZT0ke2Zyb20yfSR7ZW5kfWAgLy8gVFZJSVxuICB9XG59IC8vIGVuZCBjbGFzcyBUaW1lZ3JhZlxuXG5cbihmdW5jdGlvbiBkZWZpbmVTdGF0c0FwaSgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2VcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzb3VyY2Uuc2xpY2UoMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGdlb2dyYXBoaWMgcmVnaW9uIChlaXRoZXIgYSBjb3VudHJ5IG9yIGEgc3RhdGUvcHJvdmluY2Ugd2l0aGluIGEgY291bnRyeSkgZm9yIHRoZVxuICAgKiBwdXJwb3NlcyBvZiBzaXRlIHVzYWdlIHN0YXRpc3RpY3MuXG4gICAqL1xuICBjbGFzcyBTdGF0c1JlZ2lvbiB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmNvZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubmFtZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgY29kZSwgbmFtZSB9KSB7XG4gICAgICB0aGlzLmNvZGUgPSBjb2RlXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBmb3JtYXR0ZWROYW1lKCkge1xuICAgICAgcmV0dXJuIGNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLm5hbWUpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgY291bnQgb2Ygc2l0ZSB1c2FnZSBmcm9tIGEgcGFydGljdWxhciBzdGF0ZS9wcm92aW5jZS5cbiAgICovXG4gIGNsYXNzIEdlb0NvdW50IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuY291bnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuY291bnRyeVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5zdGF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgY291bnQsIGNvdW50cnksIHN0YXRlIH0pIHtcbiAgICAgIHRoaXMuY291bnQgPSBwYXJzZUludChjb3VudCwgMTApXG4gICAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGZvcm1hdHRlZENvdW50KCkge1xuICAgICAgcmV0dXJuIEFKUy5hZGRDb21tYXModGhpcy5jb3VudClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHJldHVybiB7R2VvQ291bnR9XG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVHZW9Db3VudEZyb21BcGlEYXRhKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IEdlb0NvdW50KHtcbiAgICAgIGNvdW50OiBkYXRhLnN1bV9jb3VudF92YWx1ZSxcblxuICAgICAgY291bnRyeTogbmV3IFN0YXRzUmVnaW9uKHtcbiAgICAgICAgY29kZTogZGF0YS5nZW9fY291bnRyeSxcbiAgICAgICAgbmFtZTogZGF0YS5jb3VudHJ5LFxuICAgICAgfSksXG5cbiAgICAgIHN0YXRlOiBuZXcgU3RhdHNSZWdpb24oe1xuICAgICAgICBjb2RlOiBkYXRhLmdlb19zdGF0ZSxcbiAgICAgICAgbmFtZTogZGF0YS5zdGF0ZSxcbiAgICAgIH0pLFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgQVBJIGRhdGEgYW5kIHByb2R1Y2UgYSBsaXN0IG9mIEdlb0NvdW50IG9iamVjdHMsIHdpdGggY291bnRzIG1hZGUgYnkgY29tYmluaW5nIHN1bXNcbiAgICogZnJvbSB2YXJpb3VzIGtpbmRzIG9mIHVzZXIgYWdlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gICBkYXRhIG11c3QgaGF2ZSBrZXkgY291bnRzX2dlb1xuICAgKiBAcGFyYW0ge09iamVjdH0gICBvcHRpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nW119IG9wdGlvbnMudWFLaW5kcyBsaXN0IG9mIHVzZXItYWdlbnQga2luZHMgdG8gaW5jbHVkZVxuICAgKiBAcmV0dXJuIHtHZW9Db3VudFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlQ29tYmluZWRHZW9Db3VudHNGcm9tQXBpRGF0YShkYXRhLCB7XG4gICAgdWFLaW5kcyA9IFsncm9ib3QnLCAnbm9uX3JvYm90JywgJ3VucmVjb2duaXplZCddLFxuICB9ID0ge30pIHtcbiAgICBpZiAoIWRhdGEuY291bnRzX2dlbylcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiQVBJIHJlc3BvbnNlIGRvZXNuJ3QgY29udGFpbiBwcm9wZXJ0eSAnY291bnRzX2dlbycuXCIpXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdWFLaW5kXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1YUtpbmRJc0FsbG93ZWQodWFLaW5kKSB7XG4gICAgICByZXR1cm4gdWFLaW5kcy5pbmRleE9mKHVhS2luZCkgIT09IC0xXG4gICAgfVxuXG4gICAgY29uc3QgY291bnRzTWFwID0ge31cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jb3VudHNfZ2VvLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb3VudERhdGEgPSBkYXRhLmNvdW50c19nZW9baV1cblxuICAgICAgLy8gV2hpdGVsaXN0IHVzZXIgYWdlbnRzIGFuZCBza2lwIHVua25vd24gY291bnRyaWVzLlxuICAgICAgaWYgKHVhS2luZElzQWxsb3dlZChjb3VudERhdGEudWFfa2luZCkgJiYgY291bnREYXRhLmNvdW50cnkgIT09ICd1bmtub3duJykge1xuICAgICAgICBjb25zdCBtYXBLZXkgPSBgJHtjb3VudERhdGEuZ2VvX2NvdW50cnl9XyR7Y291bnREYXRhLmdlb19zdGF0ZX1gXG5cbiAgICAgICAgLy8gQWRkIHRvIGFuIGV4aXN0aW5nIGNvdW50IG9yIGNyZWF0ZSBhIG5ldyBvbmUuXG4gICAgICAgIGlmIChjb3VudHNNYXBbbWFwS2V5XSlcbiAgICAgICAgICBjb3VudHNNYXBbbWFwS2V5XS5jb3VudCArPSBjb3VudERhdGEuc3VtX2NvdW50X3ZhbHVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjb3VudHNNYXBbbWFwS2V5XSA9IGNyZWF0ZUdlb0NvdW50RnJvbUFwaURhdGEoY291bnREYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhjb3VudHNNYXApLm1hcChrZXkgPT4gY291bnRzTWFwW2tleV0pXG4gIH1cblxuICBjb25zdCBhcGlCYXNlVXJsID0gJ2h0dHBzOi8vYmUtYXBpLnVzLmFyY2hpdmUub3JnL3ZpZXdzL3YxJ1xuXG4gIC8qKlxuICAgKiBJbnRlcmZhY2UgZm9yIGZldGNoaW5nIHNpdGUgdXNhZ2Ugc3RhdHMgZnJvbSB0aGUgc3RhdHMgQVBJLlxuICAgKi9cbiAgQUpTLlN0YXRzQXBpQ2xpZW50ID0gY2xhc3MgU3RhdHNBcGlDbGllbnQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZGVudGlmaWVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5kYXlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMubGltaXRcbiAgICAgKiBAcmV0dXJuIHtqUXVlcnkuUHJvbWlzZTxHZW9EYXRhW10+fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRHZW9Db3VudHMoaWRlbnRpZmllciwge1xuICAgICAgZGF5cyA9IDMwLFxuICAgICAgbGltaXQgPSAxMDAsXG4gICAgICB1YUtpbmRzID0gWydyb2JvdCcsICdub25fcm9ib3QnLCAndW5yZWNvZ25pemVkJ10sXG4gICAgfSA9IHt9KSB7XG4gICAgICBjb25zdCB1cmwgPSBgJHthcGlCYXNlVXJsfS9kZXRhaWwvY29sbGVjdGlvbi8ke2lkZW50aWZpZXJ9LyR7ZGF5c31gXG5cbiAgICAgIHJldHVybiAkLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb21iaW5lZEdlb0NvdW50c0Zyb21BcGlEYXRhKGRhdGEsIHsgdWFLaW5kcyB9KVxuICAgICAgICAgICAgICAuc29ydCgoY291bnQxLCBjb3VudDIpID0+IChjb3VudDEuY291bnQgPCBjb3VudDIuY291bnQgPyAxIDogLTEpKVxuICAgICAgICAgICAgICAuc2xpY2UoMCwgbGltaXQpXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KGVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbn0oKSlcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBSZWFjdCBjb21wb25lbnQsIENyZWF0aXZlIENvbW1vbnMgbGljZW5zZSBzZWxlY3RvciBsaW5rLlxuICogU2hvd3MgYSBcInJlbW92ZVwiIGxpbmsgd2hlbiBhIGxpY2Vuc2UgaXMgc2VsZWN0ZWQuXG4gKi9cbkFKUy5DcmVhdGl2ZUNvbW1vbnNMaWNlbnNlTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgREVGQVVMVF9MSU5LX1RFWFQ6ICdDaG9vc2UgbGljZW5zZScsXG5cbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgbGljZW5zZU5hbWU6IHVuZGVmaW5lZCxcbiAgICBsaWNlbnNlU2VsZWN0ZWQ6IGZhbHNlLFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGljZW5zZVNlbGVjdGVkOiB0aGlzLnByb3BzLmxpY2Vuc2VTZWxlY3RlZCxcbiAgICAgIGxpbmtUZXh0OiB0aGlzLnByb3BzLmxpY2Vuc2VOYW1lIHx8IHRoaXMuREVGQVVMVF9MSU5LX1RFWFQsXG4gICAgICBvbGRMaWNlbnNlTmFtZTogdGhpcy5wcm9wcy5saWNlbnNlTmFtZSxcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxpY2Vuc2VTZWxlY3RlZDogbmV3UHJvcHMubGljZW5zZVNlbGVjdGVkLFxuICAgICAgbGlua1RleHQ6IG5ld1Byb3BzLmxpY2Vuc2VOYW1lIHx8IHRoaXMuREVGQVVMVF9MSU5LX1RFWFQsXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVtb3ZlTGljZW5zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxpY2Vuc2VTZWxlY3RlZDogZmFsc2UsXG4gICAgICBsaW5rVGV4dDogdGhpcy5ERUZBVUxUX0xJTktfVEVYVCxcbiAgICB9KTtcblxuICAgIHRoaXMucmVtb3ZlUmV0YWluTGljZW5zZUlucHV0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgbGVmdCBvdmVyIGZyb20gdGhlIG9sZCwgbm9uLVJlYWN0IHZlcnNpb24gb2YgdGhpcyB3aWRnZXQsIHNvXG4gICAqIHdlIG5lZWQgdG8gcmVhY2ggb3V0c2lkZSBvZiB0aGUgUmVhY3QgY29tcG9uZW50IGFuZCBjaGFuZ2UgYW5vdGhlciBET00gbm9kZS5cbiAgICovXG4gIHJlbW92ZVJldGFpbkxpY2Vuc2VJbnB1dCgpIHtcbiAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXRhaW5jY2xpY2Vuc2UnKTtcbiAgICBmb3JtSXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZvcm1JdGVtKTtcbiAgfSxcblxuICB3YXNMaWNlbnNlZENoYW5nZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUub2xkTGljZW5zZU5hbWUgIT09IHRoaXMuc3RhdGUubGlua1RleHQ7XG4gIH0sXG5cbiAgZ2V0TGljZW5zZUNoYW5nZU1lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub2xkTGljZW5zZU5hbWUgJiYgdGhpcy53YXNMaWNlbnNlZENoYW5nZWQoKSkge1xuICAgICAgcmV0dXJuIGBDaGFuZ2UgbGljZW5zZSAoY3VycmVudGx5ICR7dGhpcy5zdGF0ZS5vbGRMaWNlbnNlTmFtZX0pYDtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3Bhbj5cbiAgICAgIDxBSlMuUG9wdXBMaW5rXG4gICAgICAgIGhyZWY9e3RoaXMucHJvcHMuaHJlZn1cbiAgICAgICAgaGVpZ2h0PVwiNjAwXCJcbiAgICAgICAgd2lkdGg9XCI2MDBcIlxuICAgICAgICB0aXRsZT17dGhpcy5nZXRMaWNlbnNlQ2hhbmdlTWVzc2FnZSgpfVxuICAgICAgPnt0aGlzLnN0YXRlLmxpbmtUZXh0fTwvQUpTLlBvcHVwTGluaz5cblxuICAgICAgeycgJ31cblxuICAgICAge3RoaXMuc3RhdGUubGljZW5zZVNlbGVjdGVkICYmXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICg8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyZWF0aXZlY29tbW9ucy1yZW1vdmUtbGljZW5zZS1idXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVMaWNlbnNlfVxuICAgICAgICAgID5yZW1vdmU8L2J1dHRvbj4pXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIH1cbiAgICA8L3NwYW4+O1xuICB9LFxufSlcbi8qIGVzbGludC1lbmFibGUgKi9cblxuQUpTLk1PUkZyZWFjdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgRkFDRVRTX1BFUl9QQUdFOiAxMDAsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlOiAxLFxuICAgICAgaHJlZjogJycsXG4gICAgICBtb3VudGVkOiBmYWxzZSxcbiAgICAgIGhkcjogJycsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgLy8geHh4eCBNYXRoLnJhbmQgYW50aS1icm93c2VyIGNhY2hpbmcgZXRjPz9cbiAgICAkLmdldEpTT04oYCR7dGhpcy5wcm9wcy5ocmVmfSZoZWFkbGVzcz0xJm91dHB1dD1qc29uYCwgKHJldCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgcmV0LmhyZWYgPSBzZWxmLnByb3BzLmhyZWZcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHJldC5tb3VudGVkID0gdHJ1ZVxuICAgICAgbG9nKHJldClcblxuICAgICAgc2VsZi5zZXRTdGF0ZShyZXQpXG5cbiAgICAgIC8vIG5vdyBjaGVjayBhbGwgdGhlIGJveGVzIHRoYXQgdXNlciBoYXMgcHJldmlvdXNseS9jdXJyZW50bHkgY2hlY2tlZFxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXQuY2hlY2tlZC5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuc3RhdGUub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHsgdmFsIH0gPSBzZWxmLnN0YXRlLm9wdGlvbnNbaV1cbiAgICAgICAgICAvLyBOT1RFOiA9PSBub3QgPT09IHNvIFwiMTk3MFwiPT0xOTcwIChlZzogeWVhciBmYWNldClcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIGVxZXFlcVxuICAgICAgICAgIGlmIChyZXQuY2hlY2tlZFtqXSA9PSB2YWwpIHtcbiAgICAgICAgICAgIHNlbGYucmVmc1t2YWxdLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gT3VyIGNvbXBvbmVudCBpcyB2aXNpYmxlIGluIHBhZ2Ugbm93LCBlZmZlY3RpdmVseSBlbXB0eVxuICAgIC8vIE5vdyBhc2sgc2VydmVyIGZvciBmYWNldHMgdG8gcmVuZGVyIGluXG4gICAgbG9nKCdtb3VudGVkJylcbiAgICB0aGlzLmdldEZhY2V0cygpXG4gIH0sXG5cbiAgcGFnZUNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBpZiB1c2VyIGNsaWNrZWQgb24gdGhlIHw+IFwibmV4dCBwYWdlXCIgaWNvbiwgYWR2YW5jZSBvbmUgcGFnZTtcbiAgICAvLyBlbHNlIHRoZXkgY2xpY2tlZCBvbiBhIHNwZWNpZmljIHBhZ2UgbnVtYmVyIHRvIGdvIHRvXG4gICAgY29uc3QgcGFnZSA9ICgkKGUudGFyZ2V0KS50ZXh0KCkgPT09ICcnID8gdGhpcy5zdGF0ZS5wYWdlICsgMSA6IHBhcnNlSW50KCQoZS50YXJnZXQpLnRleHQoKSwgMTApKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlIH0pXG4gIH0sXG5cbiAgc3VibWl0Q2xpY2soKSB7XG4gICAgbG9nKCdzdWJtaXR0ZWQnKVxuICAgIGxldCB1cmwgPSB0aGlzLnN0YXRlLnN1Ym1pdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IHZhbCB9ID0gdGhpcy5zdGF0ZS5vcHRpb25zW2ldXG4gICAgICBpZiAodGhpcy5yZWZzW3ZhbF0uY2hlY2tlZCkge1xuICAgICAgICBjb25zdCB0bXAgPSBgJmFuZFtdPSR7dGhpcy5zdGF0ZS5tb3JmfSUzQVwiJHtlbmNvZGVVUklDb21wb25lbnQodmFsKX1cImBcbiAgICAgICAgbG9nKCdjaGVja2VkJywgdmFsLCAnPT4nLCB0bXApXG4gICAgICAgIHVybCArPSB0bXBcbiAgICAgIH1cbiAgICB9XG4gICAgbG9nKHVybClcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGxvZygncmVuZGVyaW5nLi4nKVxuICAgIC8vIGxvZyh0aGlzLnByb3BzLmhyZWYpXG4gICAgLy8gbG9nKHRoaXMuc3RhdGUuaHJlZilcblxuICAgIGxldCBsb2FkaW5nID0gIXRoaXMuc3RhdGUubW91bnRlZFxuICAgIGlmICh0aGlzLnN0YXRlLmhyZWYgIT09ICcnICAmJiAgdGhpcy5wcm9wcy5ocmVmICE9PSB0aGlzLnN0YXRlLmhyZWYpIHtcbiAgICAgIGxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLmdldEZhY2V0cygpXG4gICAgfVxuXG4gICAgJCgnI21vcmYtbW9kYWwgLm1vZGFsLXRpdGxlJykuaHRtbChsb2FkaW5nID8gJycgOiB0aGlzLnN0YXRlLmhkcilcblxuICAgIGNvbnN0IG1pbiA9ICh0aGlzLnN0YXRlLnBhZ2UgLSAxKSAqIHRoaXMuRkFDRVRTX1BFUl9QQUdFXG4gICAgY29uc3QgbWF4ID0gKG1pbiArIHRoaXMuRkFDRVRTX1BFUl9QQUdFKSAtIDFcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdGF0ZS5vcHRpb25zLm1hcCgob3B0aW9uLCBuKSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17KG4gPj0gbWluICYmIG4gPD0gbWF4ICYmICFsb2FkaW5nID8gJ2Zhcm93JyA6ICdmYXJvdyBoaWRkZW4nKX0ga2V5PXtvcHRpb24udmFsfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNlbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT17b3B0aW9uLnZhbH1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsfVxuICAgICAgICAgICAgcmVmPXtvcHRpb24udmFsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2VsbFwiPlxuICAgICAgICAgIHtBSlMuYWRkQ29tbWFzKG9wdGlvbi5uKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjZWxsXCI+XG4gICAgICAgICAge29wdGlvbi50eHQgPyBvcHRpb24udHh0IDogb3B0aW9uLnZhbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pKVxuXG4gICAgY29uc3QgcGFnaW5nID0gW11cbiAgICBjb25zdCBucGFnZXMgPSAoTWF0aC5jZWlsKHRoaXMuc3RhdGUub3B0aW9ucy5sZW5ndGggLyB0aGlzLkZBQ0VUU19QRVJfUEFHRSkpXG4gICAgbGV0IGxvYWRub3RlID0gJydcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgbG9hZG5vdGUgPSAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgJ2ZvbnQtc3R5bGUnOiAnaXRhbGljJywgbWFyZ2luOiAnMjVweCcsICd0ZXh0LWFsaWduJzogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgbG9hZGluZyBmaWx0ZXJzLi4uXG4gICAgICAgICAgPGltZyBhbHQ9XCJcIiBzdHlsZT17eyB3aWR0aDogJzI1cHgnIH19IGtleT17bG9hZGluZ30gc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiIC8+XG4gICAgICAgIDwvZGl2PilcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICBmb3IgKHBhZ2UgPSAxOyBwYWdlIDw9IG5wYWdlczsgcGFnZSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBhZ2UgPT09IHBhZ2UpXG4gICAgICAgICAgcGFnaW5nLnB1c2goPGRpdiBrZXk9eydwJy5jb25jYXQocGFnZSl9IGNsYXNzTmFtZT1cInRvcGluYmxvY2tcIj57cGFnZX08L2Rpdj4pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwYWdpbmcucHVzaCg8YSBocmVmPXsnIycuY29uY2F0KHBhZ2UpfSBrZXk9eydwJy5jb25jYXQocGFnZSl9IG9uQ2xpY2s9e3RoaXMucGFnZUNsaWNrfT57cGFnZX08L2E+KVxuICAgICAgICBwYWdpbmcucHVzaCgnICcpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5wYWdlIDwgbnBhZ2VzKSB7XG4gICAgICAgIGNvbnN0IHRtcCA9IChcbiAgICAgICAgICA8YSBocmVmPXsnIycuY29uY2F0KHBhZ2UpfSBrZXk9eydwcCcuY29uY2F0KHBhZ2UpfSBvbkNsaWNrPXt0aGlzLnBhZ2VDbGlja30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29ub2NoaXZlLXJpZ2h0LXNvbGlkXCIgLz5cbiAgICAgICAgICA8L2E+KVxuICAgICAgICBwYWdpbmcucHVzaCh0bXApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibW9yZi1wYWdlXCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF0YWJsZSBmYWNldC1zdWJqZWN0XCI+XG4gICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bG9hZG5vdGV9XG4gICAgICAgICAgPGRpdiBpZD1cIm1vcmYtcGFnaW5nXCI+XG4gICAgICAgICAgICB7cGFnaW5nfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtsb2FkaW5nID8gJ2J0bi1wcmltYXJ5IGhpZGRlbicgOiAnYnRuLXByaW1hcnknfSB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJBcHBseSB5b3VyIGZpbHRlcnNcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdENsaWNrfSAvPlxuICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG59KS8vIGVuZCBNT1JGcmVhY3RcblxuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKlxuICpcbiAqICAgIFRISVJEIFBBUlRZIElOQ0xVREVTIFdFIENBTlQgTElWRSBXSVRIT1VUISA4LSlcbiAqXG4gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIENvb2tpZSBwbHVnaW5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDYgS2xhdXMgSGFydGwgKHN0aWxidWVyby5kZSlcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzOlxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwuaHRtbFxuICpcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGNvb2tpZSB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCB2YWx1ZSBhbmQgb3RoZXIgb3B0aW9uYWwgcGFyYW1ldGVycy5cbiAqXG4gKiBAZXhhbXBsZSAkLmNvb2tpZSgndGhlX2Nvb2tpZScsICd0aGVfdmFsdWUnKTtcbiAqIEBkZXNjIFNldCB0aGUgdmFsdWUgb2YgYSBjb29raWUuXG4gKiBAZXhhbXBsZSAkLmNvb2tpZSgndGhlX2Nvb2tpZScsICd0aGVfdmFsdWUnLCB7IGV4cGlyZXM6IDcsIHBhdGg6ICcvJywgZG9tYWluOiAnanF1ZXJ5LmNvbScsIHNlY3VyZTogdHJ1ZSB9KTtcbiAqIEBkZXNjIENyZWF0ZSBhIGNvb2tpZSB3aXRoIGFsbCBhdmFpbGFibGUgb3B0aW9ucy5cbiAqIEBleGFtcGxlICQuY29va2llKCd0aGVfY29va2llJywgJ3RoZV92YWx1ZScpO1xuICogQGRlc2MgQ3JlYXRlIGEgc2Vzc2lvbiBjb29raWUuXG4gKiBAZXhhbXBsZSAkLmNvb2tpZSgndGhlX2Nvb2tpZScsIG51bGwpO1xuICogQGRlc2MgRGVsZXRlIGEgY29va2llIGJ5IHBhc3NpbmcgbnVsbCBhcyB2YWx1ZS4gS2VlcCBpbiBtaW5kIHRoYXQgeW91IGhhdmUgdG8gdXNlIHRoZSBzYW1lIHBhdGggYW5kIGRvbWFpblxuICogICAgICAgdXNlZCB3aGVuIHRoZSBjb29raWUgd2FzIHNldC5cbiAqXG4gKiBAcGFyYW0gU3RyaW5nIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvb2tpZS5cbiAqIEBwYXJhbSBTdHJpbmcgdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBjb29raWUuXG4gKiBAcGFyYW0gT2JqZWN0IG9wdGlvbnMgQW4gb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyBrZXkvdmFsdWUgcGFpcnMgdG8gcHJvdmlkZSBvcHRpb25hbCBjb29raWUgYXR0cmlidXRlcy5cbiAqIEBvcHRpb24gTnVtYmVyfERhdGUgZXhwaXJlcyBFaXRoZXIgYW4gaW50ZWdlciBzcGVjaWZ5aW5nIHRoZSBleHBpcmF0aW9uIGRhdGUgZnJvbSBub3cgb24gaW4gZGF5cyBvciBhIERhdGUgb2JqZWN0LlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIGEgbmVnYXRpdmUgdmFsdWUgaXMgc3BlY2lmaWVkIChlLmcuIGEgZGF0ZSBpbiB0aGUgcGFzdCksIHRoZSBjb29raWUgd2lsbCBiZSBkZWxldGVkLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHNldCB0byBudWxsIG9yIG9taXR0ZWQsIHRoZSBjb29raWUgd2lsbCBiZSBhIHNlc3Npb24gY29va2llIGFuZCB3aWxsIG5vdCBiZSByZXRhaW5lZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHRoZSBicm93c2VyIGV4aXRzLlxuICogQG9wdGlvbiBTdHJpbmcgcGF0aCBUaGUgdmFsdWUgb2YgdGhlIHBhdGggYXRyaWJ1dGUgb2YgdGhlIGNvb2tpZSAoZGVmYXVsdDogcGF0aCBvZiBwYWdlIHRoYXQgY3JlYXRlZCB0aGUgY29va2llKS5cbiAqIEBvcHRpb24gU3RyaW5nIGRvbWFpbiBUaGUgdmFsdWUgb2YgdGhlIGRvbWFpbiBhdHRyaWJ1dGUgb2YgdGhlIGNvb2tpZSAoZGVmYXVsdDogZG9tYWluIG9mIHBhZ2UgdGhhdCBjcmVhdGVkIHRoZSBjb29raWUpLlxuICogQG9wdGlvbiBCb29sZWFuIHNlY3VyZSBJZiB0cnVlLCB0aGUgc2VjdXJlIGF0dHJpYnV0ZSBvZiB0aGUgY29va2llIHdpbGwgYmUgc2V0IGFuZCB0aGUgY29va2llIHRyYW5zbWlzc2lvbiB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmUgYSBzZWN1cmUgcHJvdG9jb2wgKGxpa2UgSFRUUFMpLlxuICogQHR5cGUgdW5kZWZpbmVkXG4gKlxuICogQG5hbWUgJC5jb29raWVcbiAqIEBjYXQgUGx1Z2lucy9Db29raWVcbiAqIEBhdXRob3IgS2xhdXMgSGFydGwva2xhdXMuaGFydGxAc3RpbGJ1ZXJvLmRlXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gKlxuICogQGV4YW1wbGUgJC5jb29raWUoJ3RoZV9jb29raWUnKTtcbiAqIEBkZXNjIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWUuXG4gKlxuICogQHBhcmFtIFN0cmluZyBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb29raWUuXG4gKiBAcmV0dXJuIFRoZSB2YWx1ZSBvZiB0aGUgY29va2llLlxuICogQHR5cGUgU3RyaW5nXG4gKlxuICogQG5hbWUgJC5jb29raWVcbiAqIEBjYXQgUGx1Z2lucy9Db29raWVcbiAqIEBhdXRob3IgS2xhdXMgSGFydGwva2xhdXMuaGFydGxAc3RpbGJ1ZXJvLmRlXG4gKi9cbiQuY29va2llID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJykgeyAvLyBuYW1lIGFuZCB2YWx1ZSBnaXZlbiwgc2V0IGNvb2tpZVxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IC0xO1xuICAgICAgfVxuICAgICAgdmFyIGV4cGlyZXMgPSAnJztcbiAgICAgIGlmIChvcHRpb25zLmV4cGlyZXMgJiYgKHR5cGVvZiBvcHRpb25zLmV4cGlyZXMgPT0gJ251bWJlcicgfHwgb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKSkge1xuICAgICAgICAgIHZhciBkYXRlO1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5leHBpcmVzID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAob3B0aW9ucy5leHBpcmVzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRhdGUgPSBvcHRpb25zLmV4cGlyZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cGlyZXMgPSAnOyBleHBpcmVzPScgKyBkYXRlLnRvVVRDU3RyaW5nKCk7IC8vIHVzZSBleHBpcmVzIGF0dHJpYnV0ZSwgbWF4LWFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG4gICAgICB9XG5cbiAgICAgIC8vIENBVVRJT046IE5lZWRlZCB0byBwYXJlbnRoZXNpemUgb3B0aW9ucy5wYXRoIGFuZCBvcHRpb25zLmRvbWFpblxuICAgICAgLy8gaW4gdGhlIGZvbGxvd2luZyBleHByZXNzaW9ucywgb3RoZXJ3aXNlIHRoZXkgZXZhbHVhdGUgdG8gdW5kZWZpbmVkXG4gICAgICAvLyBpbiB0aGUgcGFja2VkIHZlcnNpb24gZm9yIHNvbWUgcmVhc29uLi4uXG4gICAgICB2YXIgcGF0aCA9IG9wdGlvbnMucGF0aCA/ICc7IHBhdGg9JyArIChvcHRpb25zLnBhdGgpIDogJyc7XG4gICAgICB2YXIgZG9tYWluID0gb3B0aW9ucy5kb21haW4gPyAnOyBkb21haW49JyArIChvcHRpb25zLmRvbWFpbikgOiAnJztcbiAgICAgIHZhciBzZWN1cmUgPSBvcHRpb25zLnNlY3VyZSA/ICc7IHNlY3VyZScgOiAnJztcblxuICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRSA5LicpPjApIHsgLy8gSUU5IHN1Y2tzIGFuZCBjYW4ga2lzcyBpdCAodHJhY2V5IG1heTIwMTIpXG4gICAgICAgIGRvbWFpbj0nJztcbiAgICAgICAgcGF0aD0nJztcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuY29va2llID0gW25hbWUsICc9JywgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmVdLmpvaW4oJycpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7IC8vIG9ubHkgbmFtZSBnaXZlbiwgZ2V0IGNvb2tpZVxuICAgICAgdmFyIGNvb2tpZVZhbHVlID0gbnVsbDtcbiAgICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9ICcnKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9ICQudHJpbShjb29raWVzW2ldKTtcbiAgICAgICAgICAgICAgLy8gRG9lcyB0aGlzIGNvb2tpZSBzdHJpbmcgYmVnaW4gd2l0aCB0aGUgbmFtZSB3ZSB3YW50P1xuICAgICAgICAgICAgICBpZiAoY29va2llLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCArIDEpID09IChuYW1lICsgJz0nKSkge1xuICAgICAgICAgICAgICAgICAgY29va2llVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xuICB9XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cblxuLy8gKGFkYXB0ZWQpIGZyb20gaHR0cDovL3d3dy5xdWVuZXNzLmNvbS9jb2RlLXNuaXBwZXQvNjg1My9jZW50ZXItYW4tZWxlbWVudC1vbi10aGUtc2NyZWVuLXVzaW5nLWpxdWVyeVxuLy8gdGhlbiB5b3UgY2FuIHVzZSBpdCBsaWtlOlxuLy8gICAgICAkKFwiI2dyaWRtaW5pXCIpLmNlbnRlcigpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tcGFyYW0tcmVhc3NpZ25cbiQuZm4uY2VudGVyID0gZnVuY3Rpb24ganF1ZXJ5X2V4dGVuc2lvbl9jZW50ZXIoKSB7XG4gIGNvbnN0IG15aGVpZ2h0ID0gKHRoaXMuaGVpZ2h0KCkgK1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh0aGlzLmNzcygncGFkZGluZy10b3AnKSwgMTApICtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQodGhpcy5jc3MoJ3BhZGRpbmctYm90dG9tJyksIDEwKSlcblxuICBsb2coJ215aGVpZ2h0JywgbXloZWlnaHQpXG4gIGxvZygnbXl3aWR0aCcsIHRoaXMud2lkdGgoKSlcbiAgbG9nKFxuICAgICd3LmhlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAndy53aWR0aCcsICQod2luZG93KS53aWR0aCgpLFxuICAgICd3LnNjcm9sbFRvcCcsICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAndy5zY3JvbGxMZWZ0JywgJCh3aW5kb3cpLnNjcm9sbExlZnQoKSxcbiAgKVxuXG5cbiAgbGV0IHRvcFxuICBsZXQgbGVmdFxuICBpZiAoQUpTLmlvcykge1xuICAgIGNvbnN0IHZwVyA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgY29uc3QgdnBIID0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICBsb2coJ3ZwSCcsIHZwSClcbiAgICBsb2coJ3ZwVycsIHZwVylcblxuICAgIHRvcCAgPSAoKHZwSCAtICAgICBteWhlaWdodCkgLyAyKSAgKyAgJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG4gICAgbGVmdCA9ICgodnBXIC0gdGhpcy53aWR0aCgpKSAvIDIpICArICAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpXG4gIH0gZWxzZSB7XG4gICAgdG9wICA9ICgkKHdpbmRvdykuaGVpZ2h0KCkgLSBteWhlaWdodCkgLyAyXG4gICAgbGVmdCA9ICgkKHdpbmRvdykud2lkdGgoKSAgLSB0aGlzLndpZHRoKCkpIC8gMlxuICB9XG5cbiAgLy8gZm9yIHNtYWxsIHZpZXdwb3J0cyBsaWtlIGlwaG9uZSwgd2hlbiBjZW50ZXJpbmcgcG9wdXBzLCBlbnN1cmUgbWluaW1hbGx5ICsyMHB4XG4gIHRvcCAgPSBNYXRoLm1heCgyMCwgdG9wKVxuICBsZWZ0ID0gTWF0aC5tYXgoMjAsIGxlZnQpXG5cbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAoQUpTLmlvcyA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnKSxcbiAgICBkaXNwbGF5OiAgJ2Jsb2NrJyxcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgfSlcblxuICByZXR1cm4gdGhpc1xufSAvLyBlbmQgJC5mbi5jZW50ZXJcblxuXG4kKCgpID0+IHtcbiAgLy8gVXNlIHRoaXMgZ2xvYmFsIGhhY2ssIGJ5IGFkZGluZyBjbGFzcyAnYWNjZXNzaWJsZS1saW5rJyB0byBhbnkgbW91c2Utb25seSBlbGVtZW50IGRpdi9pbWdcbiAgQUpTLm1ha2VNb3VzZUVsZW1lbnRBY2Nlc3NpYmxlKCcuYWNjZXNzaWJsZS1saW5rJylcblxuXG4gIEFKUy5zZXRVcEFjdGlvblRyYWNraW5nKCkgLy8gTXVzdCBiZSBiZWZvcmUgb3RoZXIgZm9ybSBzdWJtaXQgaGFuZGxlcnMgYXJlIGFzc2lnbmVkXG4gIEFKUy5uYXZfdG9waGF0X3NldHVwKClcbiAgQUpTLm5hdl90b3BoYXRfd2Jfc2V0dXAoKVxuXG4gIC8vIFVJIGNvbXBvbmVudCBpbml0aWFsaXphdGlvblxuICBBSlMuc2V0dXBQb3B1cExpbmsoKVxuICBBSlMuc2V0VXBDcmVhdGl2ZUNvbW1vbnNMaWNlbnNlTGluaygpXG4gIEFKUy5zZXRVcFNlYXJjaEZvcm1zKClcbiAgQUpTLnNldFVwQm9va1JlYWRlcklmcmFtZSgpXG4gIEFKUy5zZXRVcEFjY29yZGlvbnMoKVxuICBBSlMuc2V0VXBSZWxhdGVkSXRlbXMoKVxuICBzZXRVcENvcHlhYmxlVGV4dHMoKVxuXG4gIC8qIGdsb2JhbCAgYXJjaGl2ZV9zZXR1cCAqL1xuICBpZiAodHlwZW9mIGFyY2hpdmVfc2V0dXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gd2hlbiBET00gbG9hZGVkL3N0YWJsZSwgZG8gc29tZSBzZXR1cFxuICAgICQoKCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBmbiBvZiBhcmNoaXZlX3NldHVwKVxuICAgICAgICBmbigpXG4gICAgfSlcbiAgfVxuXG4gIEFKUy5mb290ZXIoKVxufSlcblxuXG4vLyBwcm9tb3RlIHRvIGdsb2JhbHM6XG53aW5kb3cuQUpTID0gQUpTXG53aW5kb3cuVGltZWdyYWYgPSBUaW1lZ3JhZlxuIiwiaW1wb3J0IENsaXBib2FyZEpTIGZyb20gJ2NsaXBib2FyZCdcblxuLyoqXG4gKiBTaG93cyBhIG1lc3NhZ2UgaW5kaWNhdGluZyB0aGUgc3RhdHVzIG9mIHRoZSBjb3B5IG9wZXJhdGlvblxuICpcbiAqIFNldHMgcHJvcGVyIEFSSUEgcHJvcGVydGllcyB0byBlbnN1cmUgdGhlIHN0YXR1cyBpcyByZWFkIG91dCBieVxuICogYWNjZXNzaWJsZSB0ZWNobm9sb2dpZXNcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb3B5YWJsZVRleHRcbiAqIEBwYXJhbSB7U3RyaW5nfSAgICAgIG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gc2hvd1N0YXR1c01lc3NhZ2UoY29weWFibGVUZXh0LCBtZXNzYWdlKSB7XG4gIGxldCBvdXRwdXQgPSBjb3B5YWJsZVRleHQucXVlcnlTZWxlY3Rvcignb3V0cHV0JylcblxuICBpZiAoIW91dHB1dCkge1xuICAgIG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpXG4gICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdhbGVydCcpXG4gICAgY29weWFibGVUZXh0LmFwcGVuZENoaWxkKG91dHB1dClcbiAgfVxuXG4gIC8vIEVtcHR5IGl0IGZpcnN0IHRvIHRyaWdnZXIgYWNjZXNzaWJpbGl0eSB0ZWNobm9sb2dpZXMgdG8gcmVhZCBvdXQgdGhlXG4gIC8vIHZhbHVlIGV2ZW4gaWYgaXQncyB0aGUgc2FtZSBhcyBiZWZvcmVcbiAgb3V0cHV0LnRleHRDb250ZW50ID0gJydcbiAgb3V0cHV0LnRleHRDb250ZW50ID0gbWVzc2FnZVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjb3B5IGJ1dHRvbiB3aXRoIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgdHJpZ2dlcnMgdGhlXG4gKiBjb3B5IG9wZXJhdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvcHlhYmxlVGV4dFxuICovXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oY29weWFibGVUZXh0KSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NvcHknXG4gIGJ1dHRvbi50aXRsZSA9ICdDb3B5IHRvIGNsaXBib2FyZCdcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwYm9hcmQtdGFyZ2V0JywgYCMke2NvcHlhYmxlVGV4dC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmlkfWApXG5cbiAgcmV0dXJuIGJ1dHRvblxufVxuXG4vKipcbiAqIFNldHMgdXAgYSBzcGVjaWZpYyBjb3B5YWJsZSB0ZXh0IGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvcHlhYmxlVGV4dFxuICovXG5mdW5jdGlvbiBzZXRVcENvcHlhYmxlVGV4dChjb3B5YWJsZVRleHQpIHtcbiAgLy8gTm8gPGlucHV0PiB0byBjb3B5LCBhYm9ydFxuICBpZiAoIWNvcHlhYmxlVGV4dC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKSByZXR1cm5cblxuICBjb3B5YWJsZVRleHQuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKGNvcHlhYmxlVGV4dCkpXG5cbiAgLy8gTWFyayBpdCBhcyBcInJlYWR5XCIgc28gd2UgY2FuIGF2b2lkIGRvdWJsZS1pbml0aWFsaXppbmdcbiAgY29weWFibGVUZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb3B5YWJsZS10ZXh0LXJlYWR5JywgJycpXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBDbGlwYm9hcmRKUyBiZWhhdmlvciBmb3IgYWxsIGJ1dHRvbnMgYW5kIGF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gc2hvdyBzdGF0dXNlc1xuICovXG5mdW5jdGlvbiBzZXRVcENsaXBib2FyZEpTKCkge1xuICBjb25zdCBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoJ1tkYXRhLWNvcHlhYmxlLXRleHRdIFtkYXRhLWNsaXBib2FyZC10YXJnZXRdJylcblxuICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb3B5YWJsZVRleHQgPSBldmVudC50cmlnZ2VyLnBhcmVudEVsZW1lbnRcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSAoXG4gICAgICBjb3B5YWJsZVRleHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvcHlhYmxlLXRleHQtc3VjY2Vzcy1tZXNzYWdlJykgfHxcbiAgICAgICdUZXh0IGNvcGllZCB0byBjbGlwYm9hcmQuJ1xuICAgIClcblxuICAgIHNob3dTdGF0dXNNZXNzYWdlKGNvcHlhYmxlVGV4dCwgbWVzc2FnZSlcbiAgfSlcblxuICBjbGlwYm9hcmQub24oJ2Vycm9yJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY29weWFibGVUZXh0ID0gZXZlbnQudHJpZ2dlci5wYXJlbnRFbGVtZW50XG5cbiAgICBjb25zdCBtZXNzYWdlID0gKFxuICAgICAgY29weWFibGVUZXh0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb3B5YWJsZS10ZXh0LWVycm9yLW1lc3NhZ2UnKSB8fFxuICAgICAgJ1NvbWV0aGluZyB3ZW50IHdyb25nLidcbiAgICApXG5cbiAgICBzaG93U3RhdHVzTWVzc2FnZShjb3B5YWJsZVRleHQsIG1lc3NhZ2UpXG4gIH0pXG59XG5cbi8qKlxuICogUmVhZC1vbmx5IHRleHQgaW5wdXQgY29tcG9uZW50IHdpdGggYSBidXR0b24gdG8gY29weSB0aGUgdGV4dCB0byB0aGVcbiAqIHVzZXIncyBjbGlwYm9hcmRcbiAqXG4gKiBQcm9ncmVzc2l2ZWx5IGVuaGFuY2VzIHRoZSBpbnB1dCBieSBnZW5lcmF0aW5nIHRoZSBidXR0b24gYW5kIHN0YXR1c1xuICogbWVzc2FnZSBlbnRpcmVseSBpbiB0aGUgSmF2YVNjcmlwdC5cbiAqXG4gKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyA8aW5wdXQ+cyBidXQgaXQgY2FuIGJlIGVhc2lseSBtb2RpZmllZCB0byBzdXBwb3J0XG4gKiA8dGV4dGFyZWE+cyBpbiB0aGUgZnV0dXJlLlxuICpcbiAqIEBzZWUgY29weWFibGUtdGV4dC5sZXNzXG4gKi9cbmZ1bmN0aW9uIHNldFVwQ29weWFibGVUZXh0cygpIHtcbiAgY29uc3QgY29weWFibGVUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvcHlhYmxlLXRleHRdOm5vdChbZGF0YS1jb3B5YWJsZS10ZXh0LXJlYWR5XSknKVxuXG4gIC8vIE5vIGNvbXBvbmVudHMgZm91bmQsIGFib3J0XG4gIGlmIChjb3B5YWJsZVRleHRzLmxlbmd0aCA8PSAwKSByZXR1cm5cblxuICAvLyBCcm93c2VyIGNhbm5vdCBwcm9ncmFtbWF0aWNhbGx5IGNvcHksIGFib3J0XG4gIGlmICghQ2xpcGJvYXJkSlMuaXNTdXBwb3J0ZWQoKSkgcmV0dXJuXG5cbiAgLy8gVHVybiBpbnRvIGFuIGFycmF5IHNvIHdlIGNhbiB1c2UgZm9yRWFjaCgpXG4gIFsuLi5jb3B5YWJsZVRleHRzXS5mb3JFYWNoKHNldFVwQ29weWFibGVUZXh0KVxuICBzZXRVcENsaXBib2FyZEpTKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0VXBDb3B5YWJsZVRleHRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhcmNoaXZlLmNzc1wiOyJdLCJzb3VyY2VSb290IjoiIn0=