/*!
 * surveyjs - SurveyJS Analytics library v1.7.28
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("plotly.js-dist"), require("survey-core"), require("wordcloud"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalytics", ["plotly.js-dist", "survey-core", "wordcloud"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalytics"] = factory(require("plotly.js-dist"), require("survey-core"), require("wordcloud"));
	else
		root["SurveyAnalytics"] = factory(root["Plotly"], root["Survey"], root["WordCloud"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_plotly_js_dist__, __WEBPACK_EXTERNAL_MODULE_survey_core__, __WEBPACK_EXTERNAL_MODULE_wordcloud__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/summary.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/svgbundle.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg style=\"display:none;\"><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-detail\"><circle class=\"st0\" cx=\"1.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"8.5\" r=\"1.5\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-drag\"><path class=\"st0\" d=\"M13 5l-1 1 1 1H9V3l1 1 1-1-3-3-3 3 1 1 1-1v4H3l1-1-1-1-3 3 3 3 1-1-1-1h4v4l-1-1-1 1 3 3 3-3-1-1-1 1V9h4l-1 1 1 1 3-3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-hide\"><path class=\"st1\" d=\"M12.79 4.2L16 1l-1-1-3.32 3.32C10.57 2.55 9.32 2 8 2 3.63 2 0 7.97 0 7.97s1.27 2.1 3.21 3.82l-3.23 3.23.98.98 3.35-3.34C5.41 13.44 6.67 14 8 14c4.37 0 8-6 8-6s-1.27-2.09-3.21-3.8zM2 7.97c1.07-1.47 3.61-4 6-4 .8 0 1.6.27 2.35.68l-.78.78c-.46-.29-.99-.46-1.57-.46-1.66 0-3 1.34-3 3 0 .58.17 1.11.46 1.57l-.97.97A13.38 13.38 0 0 1 2 7.97zm6 4c-.8 0-1.59-.27-2.33-.67l.78-.77c.45.27.98.44 1.55.44 1.66 0 3-1.34 3-3 0-.57-.17-1.09-.44-1.55l.98-.98c1.11.87 2.01 1.91 2.46 2.52-1.07 1.48-3.61 4.01-6 4.01z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makeprivate\"><circle class=\"st0\" cx=\"8\" cy=\"4\" r=\"3\"></circle><path class=\"st0\" d=\"M8 8c-3.31 0-6 2.73-6 4.67S5.27 15 8 15s6-.4 6-2.33S11.31 8 8 8z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makepublic\"><circle class=\"st0\" cx=\"6\" cy=\"5\" r=\"3\"></circle><path class=\"st0\" d=\"M10 5c0 .34-.06.67-.14.99.05 0 .09.01.14.01 1.66 0 3-1.34 3-3s-1.34-3-3-3C8.97 0 8.07.52 7.53 1.3 8.98 1.91 10 3.33 10 5zM6 9c-3.31 0-6 2.73-6 4.67S3.27 16 6 16s6-.4 6-2.33S9.31 9 6 9zM10 7c-.19 0-.38.01-.57.03a4.14 4.14 0 0 1-1.37 1.39c3 .83 5.23 3.31 5.42 5.28 1.44-.31 2.52-.92 2.52-2.03C16 9.74 13.31 7 10 7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-movetodetails\"><circle class=\"st0\" cx=\"1.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"14.5\" r=\"1.5\"></circle><path class=\"st0\" d=\"M12 1h3v9h-3zM2.02 7.02L1 6 0 7l3 3 3-3-1-1-.94.94C4.33 4.73 6.21 3 8.5 3c.17 0 .33.03.5.05V1.03C8.83 1.01 8.67 1 8.5 1 5.08 1 2.27 3.66 2.02 7.02z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-sorting\"><path class=\"st0\" d=\"M8 3l2 2 1-1-3-3-3 3 1 1zM8 13l-2-2-1 1 3 3 3-3-1-1z\"></path></symbol></svg>";

/***/ }),

/***/ "./node_modules/muuri/dist/muuri.js":
/*!******************************************!*\
  !*** ./node_modules/muuri/dist/muuri.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* Muuri v0.8.0
* https://github.com/haltu/muuri
* Copyright (c) 2015-present, Haltu Oy
* Released under the MIT license
* https://github.com/haltu/muuri/blob/master/LICENSE.md
* @license MIT
*
* Muuri Packer
* Copyright (c) 2016-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*
* Muuri Ticker / Muuri Emitter / Muuri Queue
* Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*/

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  var namespace = 'Muuri';
  var gridInstances = {};

  var actionSwap = 'swap';
  var actionMove = 'move';

  var eventSynchronize = 'synchronize';
  var eventLayoutStart = 'layoutStart';
  var eventLayoutEnd = 'layoutEnd';
  var eventAdd = 'add';
  var eventRemove = 'remove';
  var eventShowStart = 'showStart';
  var eventShowEnd = 'showEnd';
  var eventHideStart = 'hideStart';
  var eventHideEnd = 'hideEnd';
  var eventFilter = 'filter';
  var eventSort = 'sort';
  var eventMove = 'move';
  var eventSend = 'send';
  var eventBeforeSend = 'beforeSend';
  var eventReceive = 'receive';
  var eventBeforeReceive = 'beforeReceive';
  var eventDragInit = 'dragInit';
  var eventDragStart = 'dragStart';
  var eventDragMove = 'dragMove';
  var eventDragScroll = 'dragScroll';
  var eventDragEnd = 'dragEnd';
  var eventDragReleaseStart = 'dragReleaseStart';
  var eventDragReleaseEnd = 'dragReleaseEnd';
  var eventDestroy = 'destroy';

  /**
   * Event emitter constructor.
   *
   * @class
   */
  function Emitter() {
    this._events = {};
    this._queue = [];
    this._counter = 0;
    this._isDestroyed = false;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Bind an event listener.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Emitter}
   */
  Emitter.prototype.on = function(event, listener) {
    if (this._isDestroyed) return this;

    // Get listeners queue and create it if it does not exist.
    var listeners = this._events[event];
    if (!listeners) listeners = this._events[event] = [];

    // Add the listener to the queue.
    listeners.push(listener);

    return this;
  };

  /**
   * Unbind all event listeners that match the provided listener function.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {Function} [listener]
   * @returns {Emitter}
   */
  Emitter.prototype.off = function(event, listener) {
    if (this._isDestroyed) return this;

    // Get listeners and return immediately if none is found.
    var listeners = this._events[event];
    if (!listeners || !listeners.length) return this;

    // If no specific listener is provided remove all listeners.
    if (!listener) {
      listeners.length = 0;
      return this;
    }

    // Remove all matching listeners.
    var i = listeners.length;
    while (i--) {
      if (listener === listeners[i]) listeners.splice(i, 1);
    }

    return this;
  };

  /**
   * Emit all listeners in a specified event with the provided arguments.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {*} [arg1]
   * @param {*} [arg2]
   * @param {*} [arg3]
   * @returns {Emitter}
   */
  Emitter.prototype.emit = function(event, arg1, arg2, arg3) {
    if (this._isDestroyed) return this;

    // Get event listeners and quit early if there's no listeners.
    var listeners = this._events[event];
    if (!listeners || !listeners.length) return this;

    var queue = this._queue;
    var qLength = queue.length;
    var aLength = arguments.length - 1;
    var i;

    // Add the current listeners to the callback queue before we process them.
    // This is necessary to guarantee that all of the listeners are called in
    // correct order even if new event listeners are removed/added during
    // processing and/or events are emitted during processing.
    for (i = 0; i < listeners.length; i++) {
      queue.push(listeners[i]);
    }

    // Increment queue counter. This is needed for the scenarios where emit is
    // triggered while the queue is already processing. We need to keep track of
    // how many "queue processors" there are active so that we can safely reset
    // the queue in the end when the last queue processor is finished.
    ++this._counter;

    // Process the queue (the specific part of it for this emit).
    for (i = qLength, qLength = queue.length; i < qLength; i++) {
      // prettier-ignore
      aLength === 0 ? queue[i]() :
      aLength === 1 ? queue[i](arg1) :
      aLength === 2 ? queue[i](arg1, arg2) :
                      queue[i](arg1, arg2, arg3);

      // Stop processing if the emitter is destroyed.
      if (this._isDestroyed) return this;
    }

    // Decrement queue process counter.
    --this._counter;

    // Reset the queue if there are no more queue processes running.
    if (!this._counter) queue.length = 0;

    return this;
  };

  /**
   * Destroy emitter instance. Basically just removes all bound listeners.
   *
   * @public
   * @memberof Emitter.prototype
   * @returns {Emitter}
   */
  Emitter.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    var events = this._events;
    var event;

    // Flag as destroyed.
    this._isDestroyed = true;

    // Reset queue (if queue is currently processing this will also stop that).
    this._queue.length = this._counter = 0;

    // Remove all listeners.
    for (event in events) {
      if (events[event]) {
        events[event].length = 0;
        events[event] = undefined;
      }
    }

    return this;
  };

  // Set up the default export values.
  var transformStyle = 'transform';
  var transformProp = 'transform';

  // Find the supported transform prop and style names.
  var docElemStyle = window.document.documentElement.style;
  var style = 'transform';
  var styleCap = 'Transform';
  var found = false;
  ['', 'Webkit', 'Moz', 'O', 'ms'].forEach(function(prefix) {
    if (found) return;
    var propName = prefix ? prefix + styleCap : style;
    if (docElemStyle[propName] !== undefined) {
      prefix = prefix.toLowerCase();
      transformStyle = prefix ? '-' + prefix + '-' + style : style;
      transformProp = propName;
      found = true;
    }
  });

  var stylesCache = typeof WeakMap === 'function' ? new WeakMap() : null;

  /**
   * Returns the computed value of an element's style property as a string.
   *
   * @param {HTMLElement} element
   * @param {String} style
   * @returns {String}
   */
  function getStyle(element, style) {
    var styles = stylesCache && stylesCache.get(element);
    if (!styles) {
      styles = window.getComputedStyle(element, null);
      if (stylesCache) stylesCache.set(element, styles);
    }
    return styles.getPropertyValue(style === 'transform' ? transformStyle : style);
  }

  var styleNameRegEx = /([A-Z])/g;

  /**
   * Transforms a camel case style property to kebab case style property.
   *
   * @param {String} string
   * @returns {String}
   */
  function getStyleName(string) {
    return string.replace(styleNameRegEx, '-$1').toLowerCase();
  }

  var strFunction = 'function';

  /**
   * Check if a value is a function.
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isFunction(val) {
    return typeof val === strFunction;
  }

  var transformStyle$1 = 'transform';

  /**
   * Set inline styles to an element.
   *
   * @param {HTMLElement} element
   * @param {Object} styles
   */
  function setStyles(element, styles) {
    for (var prop in styles) {
      element.style[prop === transformStyle$1 ? transformProp : prop] = styles[prop];
    }
  }

  /**
   * Item animation handler powered by Web Animations API.
   *
   * @class
   * @param {HTMLElement} element
   */
  function ItemAnimate(element) {
    this._element = element;
    this._animation = null;
    this._callback = null;
    this._props = [];
    this._values = [];
    this._keyframes = [];
    this._options = {};
    this._isDestroyed = false;
    this._onFinish = this._onFinish.bind(this);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start instance's animation. Automatically stops current animation if it is
   * running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @param {Object} propsFrom
   * @param {Object} propsTo
   * @param {Object} [options]
   * @param {Number} [options.duration=300]
   * @param {String} [options.easing='ease']
   * @param {Function} [options.onFinish]
   */
  ItemAnimate.prototype.start = function(propsFrom, propsTo, options) {
    if (this._isDestroyed) return;

    var animation = this._animation;
    var currentProps = this._props;
    var currentValues = this._values;
    var opts = options || 0;
    var cancelAnimation = false;

    // If we have an existing animation running, let's check if it needs to be
    // cancelled or if it can continue running.
    if (animation) {
      var propCount = 0;
      var propIndex;

      // Check if the requested animation target props and values match with the
      // current props and values.
      for (var propName in propsTo) {
        ++propCount;
        propIndex = currentProps.indexOf(propName);
        if (propIndex === -1 || propsTo[propName] !== currentValues[propIndex]) {
          cancelAnimation = true;
          break;
        }
      }

      // Check if the target props count matches current props count. This is
      // needed for the edge case scenario where target props contain the same
      // styles as current props, but the current props have some additional
      // props.
      if (!cancelAnimation && propCount !== currentProps.length) {
        cancelAnimation = true;
      }
    }

    // Cancel animation (if required).
    if (cancelAnimation) animation.cancel();

    // Store animation callback.
    this._callback = isFunction(opts.onFinish) ? opts.onFinish : null;

    // If we have a running animation that does not need to be cancelled, let's
    // call it a day here and let it run.
    if (animation && !cancelAnimation) return;

    // Store target props and values to instance.
    currentProps.length = currentValues.length = 0;
    for (propName in propsTo) {
      currentProps.push(propName);
      currentValues.push(propsTo[propName]);
    }

    // Set up keyframes.
    var animKeyframes = this._keyframes;
    animKeyframes[0] = propsFrom;
    animKeyframes[1] = propsTo;

    // Set up options.
    var animOptions = this._options;
    animOptions.duration = opts.duration || 300;
    animOptions.easing = opts.easing || 'ease';

    // Start the animation
    var element = this._element;
    animation = element.animate(animKeyframes, animOptions);
    animation.onfinish = this._onFinish;
    this._animation = animation;

    // Set the end styles. This makes sure that the element stays at the end
    // values after animation is finished.
    setStyles(element, propsTo);
  };

  /**
   * Stop instance's current animation if running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @param {Object} [styles]
   */
  ItemAnimate.prototype.stop = function(styles) {
    if (this._isDestroyed || !this._animation) return;

    var element = this._element;
    var currentProps = this._props;
    var currentValues = this._values;
    var propName;
    var propValue;
    var i;

    // Calculate (if not provided) and set styles.
    if (!styles) {
      for (i = 0; i < currentProps.length; i++) {
        propName = currentProps[i];
        propValue = getStyle(element, getStyleName(propName));
        element.style[propName === 'transform' ? transformProp : propName] = propValue;
      }
    } else {
      setStyles(element, styles);
    }

    //  Cancel animation.
    this._animation.cancel();
    this._animation = this._callback = null;

    // Reset current props and values.
    currentProps.length = currentValues.length = 0;
  };

  /**
   * Check if the item is being animated currently.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @return {Boolean}
   */
  ItemAnimate.prototype.isAnimating = function() {
    return !!this._animation;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   */
  ItemAnimate.prototype.destroy = function() {
    if (this._isDestroyed) return;
    this.stop();
    this._element = this._options = this._keyframes = null;
    this._isDestroyed = true;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Animation end handler.
   *
   * @private
   * @memberof ItemAnimate.prototype
   */
  ItemAnimate.prototype._onFinish = function() {
    var callback = this._callback;
    this._animation = this._callback = null;
    this._props.length = this._values.length = 0;
    callback && callback();
  };

  var vendorPrefixes = ['', 'webkit', 'moz', 'ms', 'o', 'Webkit', 'Moz', 'MS', 'O'];

  /**
   * Get prefixed CSS property name when given a non-prefixed CSS property name.
   * @param {Object} elemStyle
   * @param {String} propName
   * @returns {!String}
   */
  function getPrefixedPropName(elemStyle, propName) {
    var camelPropName = propName[0].toUpperCase() + propName.slice(1);
    var i = 0;
    var prefix;
    var prefixedPropName;

    while (i < vendorPrefixes.length) {
      prefix = vendorPrefixes[i];
      prefixedPropName = prefix ? prefix + camelPropName : propName;
      if (prefixedPropName in elemStyle) return prefixedPropName;
      ++i;
    }

    return null;
  }

  var dt = 1000 / 60;

  var raf = (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      return this.setTimeout(function() {
        callback(dt);
      }, dt);
    }
  ).bind(window);

  // Detect support for passive events:
  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
  var isPassiveEventsSupported = false;
  try {
    var passiveOpts = Object.defineProperty({}, 'passive', {
      get: function() {
        isPassiveEventsSupported = true;
      }
    });
    window.addEventListener('testPassive', null, passiveOpts);
    window.removeEventListener('testPassive', null, passiveOpts);
  } catch (e) {}

  // Dragger events.
  var events = {
    start: 'start',
    move: 'move',
    end: 'end',
    cancel: 'cancel'
  };

  var hasTouchEvents = !!('ontouchstart' in window || window.TouchEvent);
  var hasPointerEvents = !!window.PointerEvent;
  var hasMsPointerEvents = !!window.navigator.msPointerEnabled;
  var isAndroid = /(android)/i.test(window.navigator.userAgent);
  var listenerOptions = isPassiveEventsSupported ? { passive: true } : false;

  var taProp = 'touchAction';
  var taPropPrefixed = getPrefixedPropName(window.document.documentElement.style, taProp);
  var taDefaultValue = 'auto';

  /**
   * Creates a new Dragger instance for an element.
   *
   * @public
   * @class
   * @param {HTMLElement} element
   * @param {Object} [cssProps]
   */
  function Dragger(element, cssProps) {
    this._element = element;
    this._emitter = new Emitter();
    this._isDestroyed = false;
    this._cssProps = {};
    this._touchAction = '';
    this._startEvent = null;

    this._pointerId = null;
    this._startTime = 0;
    this._startX = 0;
    this._startY = 0;
    this._currentX = 0;
    this._currentY = 0;

    this._preStartCheck = this._preStartCheck.bind(this);
    this._abortNonCancelable = this._abortNonCancelable.bind(this);
    this._onStart = this._onStart.bind(this);
    this._onMove = this._onMove.bind(this);
    this._onCancel = this._onCancel.bind(this);
    this._onEnd = this._onEnd.bind(this);

    // Apply initial css props.
    this.setCssProps(cssProps);

    // If touch action was not provided with initial css props let's assume it's
    // auto.
    if (!this._touchAction) {
      this.setTouchAction(taDefaultValue);
    }

    // Prevent native link/image dragging for the item and it's ancestors.
    element.addEventListener('dragstart', Dragger._preventDefault, false);

    // Listen to start event.
    element.addEventListener(Dragger._events.start, this._preStartCheck, listenerOptions);

    // If we have touch events, but no pointer events we need to also listen for
    // mouse events in addition to touch events for devices which support both
    // mouse and touch interaction.
    if (hasTouchEvents && !hasPointerEvents && !hasMsPointerEvents) {
      element.addEventListener(Dragger._mouseEvents.start, this._preStartCheck, listenerOptions);
    }
  }

  /**
   * Protected properties
   * ********************
   */

  Dragger._pointerEvents = {
    start: 'pointerdown',
    move: 'pointermove',
    cancel: 'pointercancel',
    end: 'pointerup'
  };

  Dragger._msPointerEvents = {
    start: 'MSPointerDown',
    move: 'MSPointerMove',
    cancel: 'MSPointerCancel',
    end: 'MSPointerUp'
  };

  Dragger._touchEvents = {
    start: 'touchstart',
    move: 'touchmove',
    cancel: 'touchcancel',
    end: 'touchend'
  };

  Dragger._mouseEvents = {
    start: 'mousedown',
    move: 'mousemove',
    cancel: '',
    end: 'mouseup'
  };

  Dragger._events = (function() {
    if (hasPointerEvents) return Dragger._pointerEvents;
    if (hasMsPointerEvents) return Dragger._msPointerEvents;
    if (hasTouchEvents) return Dragger._touchEvents;
    return Dragger._mouseEvents;
  })();

  Dragger._emitter = new Emitter();

  Dragger._activeInstances = [];

  /**
   * Protected static methods
   * ************************
   */

  Dragger._preventDefault = function(e) {
    if (e.preventDefault && e.cancelable !== false) e.preventDefault();
  };

  Dragger._activateInstance = function(instance) {
    var index = Dragger._activeInstances.indexOf(instance);
    if (index > -1) return;

    Dragger._activeInstances.push(instance);
    Dragger._emitter.on(events.move, instance._onMove);
    Dragger._emitter.on(events.cancel, instance._onCancel);
    Dragger._emitter.on(events.end, instance._onEnd);

    if (Dragger._activeInstances.length === 1) {
      Dragger._bindListeners();
    }
  };

  Dragger._deactivateInstance = function(instance) {
    var index = Dragger._activeInstances.indexOf(instance);
    if (index === -1) return;

    Dragger._activeInstances.splice(index, 1);
    Dragger._emitter.off(events.move, instance._onMove);
    Dragger._emitter.off(events.cancel, instance._onCancel);
    Dragger._emitter.off(events.end, instance._onEnd);

    if (!Dragger._activeInstances.length) {
      Dragger._unbindListeners();
    }
  };

  Dragger._bindListeners = function() {
    var events = Dragger._events;
    window.addEventListener(events.move, Dragger._onMove, listenerOptions);
    window.addEventListener(events.end, Dragger._onEnd, listenerOptions);
    events.cancel && window.addEventListener(events.cancel, Dragger._onCancel, listenerOptions);
  };

  Dragger._unbindListeners = function() {
    var events = Dragger._events;
    window.removeEventListener(events.move, Dragger._onMove, listenerOptions);
    window.removeEventListener(events.end, Dragger._onEnd, listenerOptions);
    events.cancel && window.removeEventListener(events.cancel, Dragger._onCancel, listenerOptions);
  };

  Dragger._getEventPointerId = function(event) {
    // If we have pointer id available let's use it.
    if (typeof event.pointerId === 'number') {
      return event.pointerId;
    }

    // For touch events let's get the first changed touch's identifier.
    if (event.changedTouches) {
      return event.changedTouches[0] ? event.changedTouches[0].identifier : null;
    }

    // For mouse/other events let's provide a static id.
    return 1;
  };

  Dragger._getTouchById = function(event, id) {
    // If we have a pointer event return the whole event if there's a match, and
    // null otherwise.
    if (typeof event.pointerId === 'number') {
      return event.pointerId === id ? event : null;
    }

    // For touch events let's check if there's a changed touch object that matches
    // the pointerId in which case return the touch object.
    if (event.changedTouches) {
      for (var i = 0; i < event.changedTouches.length; i++) {
        if (event.changedTouches[i].identifier === id) {
          return event.changedTouches[i];
        }
      }
      return null;
    }

    // For mouse/other events let's assume there's only one pointer and just
    // return the event.
    return event;
  };

  Dragger._onMove = function(e) {
    Dragger._emitter.emit(events.move, e);
  };

  Dragger._onCancel = function(e) {
    Dragger._emitter.emit(events.cancel, e);
  };

  Dragger._onEnd = function(e) {
    Dragger._emitter.emit(events.end, e);
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Reset current drag operation (if any).
   *
   * @private
   * @memberof Dragger.prototype
   */
  Dragger.prototype._reset = function() {
    if (this._isDestroyed) return;

    this._pointerId = null;
    this._startTime = 0;
    this._startX = 0;
    this._startY = 0;
    this._currentX = 0;
    this._currentY = 0;
    this._startEvent = null;

    this._element.removeEventListener(
      Dragger._touchEvents.start,
      this._abortNonCancelable,
      listenerOptions
    );

    Dragger._deactivateInstance(this);
  };

  /**
   * Create a custom dragger event from a raw event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {String} type
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   * @returns {DraggerEvent}
   */
  Dragger.prototype._createEvent = function(type, e) {
    var touch = this._getTrackedTouch(e);
    return {
      // Hammer.js compatibility interface.
      type: type,
      srcEvent: e,
      distance: this.getDistance(),
      deltaX: this.getDeltaX(),
      deltaY: this.getDeltaY(),
      deltaTime: type === events.start ? 0 : this.getDeltaTime(),
      isFirst: type === events.start,
      isFinal: type === events.end || type === events.cancel,
      // Partial Touch API interface.
      identifier: this._pointerId,
      screenX: touch.screenX,
      screenY: touch.screenY,
      clientX: touch.clientX,
      clientY: touch.clientY,
      pageX: touch.pageX,
      pageY: touch.pageY,
      target: touch.target
    };
  };

  /**
   * Emit a raw event as dragger event internally.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {String} type
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._emit = function(type, e) {
    this._emitter.emit(type, this._createEvent(type, e));
  };

  /**
   * If the provided event is a PointerEvent this method will return it if it has
   * the same pointerId as the instance. If the provided event is a TouchEvent
   * this method will try to look for a Touch instance in the changedTouches that
   * has an identifier matching this instance's pointerId. If the provided event
   * is a MouseEvent (or just any other event than PointerEvent or TouchEvent)
   * it will be returned immediately.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)}
   * @returns {?(Touch|PointerEvent|MouseEvent)}
   */
  Dragger.prototype._getTrackedTouch = function(e) {
    if (this._pointerId === null) {
      return null;
    } else {
      return Dragger._getTouchById(e, this._pointerId);
    }
  };

  /**
   * A pre-handler for start event that checks if we can start dragging.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._preStartCheck = function(e) {
    if (this._isDestroyed) return;

    // Make sure the element is not being dragged currently.
    if (this.isDragging()) return;

    // Special cancelable check for Android to prevent drag procedure from
    // starting if native scrolling is in progress. Part 1.
    if (isAndroid && e.cancelable === false) return;

    // Make sure left button is pressed on mouse.
    if (e.button) return;

    // Get (and set) pointer id.
    this._pointerId = Dragger._getEventPointerId(e);
    if (this._pointerId === null) return;

    // Store the start event and trigger start (async or sync). Pointer events
    // are emitted before touch events if the browser supports both of them. And
    // if you try to move an element before `touchstart` is emitted the pointer
    // events for that element will be canceled. The fix is to delay the emitted
    // pointer events in such a scenario by one frame so that `touchstart` has
    // time to be emitted before the element is (potentially) moved.
    this._startEvent = e;
    if (hasTouchEvents && (hasPointerEvents || hasMsPointerEvents)) {
      // Special cancelable check for Android to prevent drag procedure from
      // starting if native scrolling is in progress. Part 2.
      if (isAndroid) {
        this._element.addEventListener(
          Dragger._touchEvents.start,
          this._abortNonCancelable,
          listenerOptions
        );
      }
      raf(this._onStart);
    } else {
      this._onStart();
    }
  };

  /**
   * Abort start event if it turns out to be non-cancelable.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._abortNonCancelable = function(e) {
    this._element.removeEventListener(
      Dragger._touchEvents.start,
      this._abortNonCancelable,
      listenerOptions
    );

    if (this._startEvent && e.cancelable === false) {
      this._pointerId = null;
      this._startEvent = null;
    }
  };

  /**
   * Start the drag procedure if possible.
   *
   * @private
   * @memberof Dragger.prototype
   */
  Dragger.prototype._onStart = function() {
    var e = this._startEvent;
    if (!e) return;

    this._startEvent = null;

    var touch = this._getTrackedTouch(e);
    if (!touch) return;

    // Set up init data and emit start event.
    this._startX = this._currentX = touch.clientX;
    this._startY = this._currentY = touch.clientY;
    this._startTime = Date.now();
    this._emit(events.start, e);
    Dragger._activateInstance(this);
  };

  /**
   * Handler for move event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onMove = function(e) {
    var touch = this._getTrackedTouch(e);
    if (!touch) return;

    this._currentX = touch.clientX;
    this._currentY = touch.clientY;
    this._emit(events.move, e);
  };

  /**
   * Handler for move cancel event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onCancel = function(e) {
    if (!this._getTrackedTouch(e)) return;

    this._emit(events.cancel, e);
    this._reset();
  };

  /**
   * Handler for end event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onEnd = function(e) {
    if (!this._getTrackedTouch(e)) return;

    this._emit(events.end, e);
    this._reset();
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Check if the element is being dragged at the moment.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Boolean}
   */
  Dragger.prototype.isDragging = function() {
    return this._pointerId !== null;
  };

  /**
   * Set element's touch-action CSS property.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} value
   */
  Dragger.prototype.setTouchAction = function(value) {
    // Store unmodified touch action value (we trust user input here).
    this._touchAction = value;

    // Set touch-action style.
    if (taPropPrefixed) {
      this._cssProps[taPropPrefixed] = '';
      this._element.style[taPropPrefixed] = value;
    }

    // If we have an unsupported touch-action value let's add a special listener
    // that prevents default action on touch start event. A dirty hack, but best
    // we can do for now. The other options would be to somehow polyfill the
    // unsupported touch action behavior with custom heuristics which sounds like
    // a can of worms.
    if (hasTouchEvents) {
      this._element.removeEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);
      if (this._element.style[taPropPrefixed] !== value) {
        this._element.addEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);
      }
    }
  };

  /**
   * Update element's CSS properties. Accepts an object with camel cased style
   * props with value pairs as it's first argument.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {Object} [newProps]
   */
  Dragger.prototype.setCssProps = function(newProps) {
    if (!newProps) return;

    var currentProps = this._cssProps;
    var element = this._element;
    var prop;
    var prefixedProp;

    // Reset current props.
    for (prop in currentProps) {
      element.style[prop] = currentProps[prop];
      delete currentProps[prop];
    }

    // Set new props.
    for (prop in newProps) {
      // Make sure we have a value for the prop.
      if (!newProps[prop]) continue;

      // Special handling for touch-action.
      if (prop === taProp) {
        this.setTouchAction(newProps[prop]);
        continue;
      }

      // Get prefixed prop and skip if it does not exist.
      prefixedProp = getPrefixedPropName(element.style, prop);
      if (!prefixedProp) continue;

      // Store the prop and add the style.
      currentProps[prefixedProp] = '';
      element.style[prefixedProp] = newProps[prop];
    }
  };

  /**
   * How much the pointer has moved on x-axis from start position, in pixels.
   * Positive value indicates movement from left to right.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaX = function() {
    return this._currentX - this._startX;
  };

  /**
   * How much the pointer has moved on y-axis from start position, in pixels.
   * Positive value indicates movement from top to bottom.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaY = function() {
    return this._currentY - this._startY;
  };

  /**
   * How far (in pixels) has pointer moved from start position.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDistance = function() {
    var x = this.getDeltaX();
    var y = this.getDeltaY();
    return Math.sqrt(x * x + y * y);
  };

  /**
   * How long has pointer been dragged.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaTime = function() {
    return this._startTime ? Date.now() - this._startTime : 0;
  };

  /**
   * Bind drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} eventName
   *   - 'start', 'move', 'cancel' or 'end'.
   * @param {Function} listener
   */
  Dragger.prototype.on = function(eventName, listener) {
    this._emitter.on(eventName, listener);
  };

  /**
   * Unbind drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} eventName
   *   - 'start', 'move', 'cancel' or 'end'.
   * @param {Function} listener
   */
  Dragger.prototype.off = function(events, listener) {
    this._emitter.off(eventName, listener);
  };

  /**
   * Destroy the instance and unbind all drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   */
  Dragger.prototype.destroy = function() {
    if (this._isDestroyed) return;

    var element = this._element;
    var events = Dragger._events;

    // Reset data and deactivate the instance.
    this._reset();

    // Destroy emitter.
    this._emitter.destroy();

    // Unbind event handlers.
    element.removeEventListener(events.start, this._preStartCheck, listenerOptions);
    element.removeEventListener(Dragger._mouseEvents.start, this._preStartCheck, listenerOptions);
    element.removeEventListener('dragstart', Dragger._preventDefault, false);
    element.removeEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);

    // Reset styles.
    for (var prop in this._cssProps) {
      element.style[prop] = this._cssProps[prop];
      delete this._cssProps[prop];
    }

    // Reset data.
    this._element = null;

    // Mark as destroyed.
    this._isDestroyed = true;
  };

  /**
   * A ticker system for handling DOM reads and writes in an efficient way.
   * Contains a read queue and a write queue that are processed on the next
   * animation frame when needed.
   *
   * @class
   */
  function Ticker() {
    this._nextStep = null;

    this._queue = [];
    this._reads = {};
    this._writes = {};

    this._batch = [];
    this._batchReads = {};
    this._batchWrites = {};

    this._step = this._step.bind(this);
  }

  Ticker.prototype.add = function(id, readOperation, writeOperation, isPrioritized) {
    // First, let's check if an item has been added to the queues with the same id
    // and if so -> remove it.
    var currentIndex = this._queue.indexOf(id);
    if (currentIndex > -1) this._queue[currentIndex] = undefined;

    // Add entry.
    isPrioritized ? this._queue.unshift(id) : this._queue.push(id);
    this._reads[id] = readOperation;
    this._writes[id] = writeOperation;

    // Finally, let's kick-start the next tick if it is not running yet.
    if (!this._nextStep) this._nextStep = raf(this._step);
  };

  Ticker.prototype.cancel = function(id) {
    var currentIndex = this._queue.indexOf(id);
    if (currentIndex > -1) {
      this._queue[currentIndex] = undefined;
      delete this._reads[id];
      delete this._writes[id];
    }
  };

  Ticker.prototype._step = function() {
    var queue = this._queue;
    var reads = this._reads;
    var writes = this._writes;
    var batch = this._batch;
    var batchReads = this._batchReads;
    var batchWrites = this._batchWrites;
    var length = queue.length;
    var id;
    var i;

    // Reset ticker.
    this._nextStep = null;

    // Setup queues and callback placeholders.
    for (i = 0; i < length; i++) {
      id = queue[i];
      if (!id) continue;

      batch.push(id);

      batchReads[id] = reads[id];
      delete reads[id];

      batchWrites[id] = writes[id];
      delete writes[id];
    }

    // Reset queue.
    queue.length = 0;

    // Process read callbacks.
    for (i = 0; i < length; i++) {
      id = batch[i];
      if (batchReads[id]) {
        batchReads[id]();
        delete batchReads[id];
      }
    }

    // Process write callbacks.
    for (i = 0; i < length; i++) {
      id = batch[i];
      if (batchWrites[id]) {
        batchWrites[id]();
        delete batchWrites[id];
      }
    }

    // Reset batch.
    batch.length = 0;

    // Restart the ticker if needed.
    if (!this._nextStep && queue.length) {
      this._nextStep = raf(this._step);
    }
  };

  var ticker = new Ticker();

  var layoutTick = 'layout';
  var visibilityTick = 'visibility';
  var moveTick = 'move';
  var scrollTick = 'scroll';
  var placeholderTick = 'placeholder';

  function addLayoutTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + layoutTick, readCallback, writeCallback);
  }

  function cancelLayoutTick(itemId) {
    return ticker.cancel(itemId + layoutTick);
  }

  function addVisibilityTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + visibilityTick, readCallback, writeCallback);
  }

  function cancelVisibilityTick(itemId) {
    return ticker.cancel(itemId + visibilityTick);
  }

  function addMoveTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + moveTick, readCallback, writeCallback, true);
  }

  function cancelMoveTick(itemId) {
    return ticker.cancel(itemId + moveTick);
  }

  function addScrollTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + scrollTick, readCallback, writeCallback, true);
  }

  function cancelScrollTick(itemId) {
    return ticker.cancel(itemId + scrollTick);
  }

  function addPlaceholderTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + placeholderTick, readCallback, writeCallback);
  }

  function cancelPlaceholderTick(itemId) {
    return ticker.cancel(itemId + placeholderTick);
  }

  var ElProto = window.Element.prototype;
  var matchesFn =
    ElProto.matches ||
    ElProto.matchesSelector ||
    ElProto.webkitMatchesSelector ||
    ElProto.mozMatchesSelector ||
    ElProto.msMatchesSelector ||
    ElProto.oMatchesSelector ||
    function() {
      return false;
    };

  /**
   * Check if element matches a CSS selector.
   *
   * @param {Element} el
   * @param {String} selector
   * @returns {Boolean}
   */
  function elementMatches(el, selector) {
    return matchesFn.call(el, selector);
  }

  /**
   * Add class to an element.
   *
   * @param {HTMLElement} element
   * @param {String} className
   */
  function addClass(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      if (!elementMatches(element, '.' + className)) {
        element.className += ' ' + className;
      }
    }
  }

  var tempArray = [];
  var numberType = 'number';

  /**
   * Insert an item or an array of items to array to a specified index. Mutates
   * the array. The index can be negative in which case the items will be added
   * to the end of the array.
   *
   * @param {Array} array
   * @param {*} items
   * @param {Number} [index=-1]
   */
  function arrayInsert(array, items, index) {
    var startIndex = typeof index === numberType ? index : -1;
    if (startIndex < 0) startIndex = array.length - startIndex + 1;

    array.splice.apply(array, tempArray.concat(startIndex, 0, items));
    tempArray.length = 0;
  }

  /**
   * Normalize array index. Basically this function makes sure that the provided
   * array index is within the bounds of the provided array and also transforms
   * negative index to the matching positive index.
   *
   * @param {Array} array
   * @param {Number} index
   * @param {Boolean} isMigration
   */
  function normalizeArrayIndex(array, index, isMigration) {
    var length = array.length;
    var maxIndex = Math.max(0, isMigration ? length : length - 1);
    return index > maxIndex ? maxIndex : index < 0 ? Math.max(maxIndex + index + 1, 0) : index;
  }

  /**
   * Move array item to another index.
   *
   * @param {Array} array
   * @param {Number} fromIndex
   *   - Index (positive or negative) of the item that will be moved.
   * @param {Number} toIndex
   *   - Index (positive or negative) where the item should be moved to.
   */
  function arrayMove(array, fromIndex, toIndex) {
    // Make sure the array has two or more items.
    if (array.length < 2) return;

    // Normalize the indices.
    var from = normalizeArrayIndex(array, fromIndex);
    var to = normalizeArrayIndex(array, toIndex);

    // Add target item to the new position.
    if (from !== to) {
      array.splice(to, 0, array.splice(from, 1)[0]);
    }
  }

  /**
   * Swap array items.
   *
   * @param {Array} array
   * @param {Number} index
   *   - Index (positive or negative) of the item that will be swapped.
   * @param {Number} withIndex
   *   - Index (positive or negative) of the other item that will be swapped.
   */
  function arraySwap(array, index, withIndex) {
    // Make sure the array has two or more items.
    if (array.length < 2) return;

    // Normalize the indices.
    var indexA = normalizeArrayIndex(array, index);
    var indexB = normalizeArrayIndex(array, withIndex);
    var temp;

    // Swap the items.
    if (indexA !== indexB) {
      temp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = temp;
    }
  }

  var actionCancel = 'cancel';
  var actionFinish = 'finish';
  var debounceTick = 'debounce';
  var debounceId = 0;

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. The returned function accepts one argument which, when
   * being "finish", calls the debounce function immediately if it is currently
   * waiting to be called, and when being "cancel" cancels the currently queued
   * function call.
   *
   * @param {Function} fn
   * @param {Number} wait
   * @returns {Function}
   */
  function debounce(fn, wait) {
    var timeout;
    var tickerId = ++debounceId + debounceTick;

    if (wait > 0) {
      return function(action) {
        if (timeout !== undefined) {
          timeout = window.clearTimeout(timeout);
          ticker.cancel(tickerId);
          if (action === actionFinish) fn();
        }

        if (action !== actionCancel && action !== actionFinish) {
          timeout = window.setTimeout(function() {
            timeout = undefined;
            ticker.add(tickerId, fn, null, true);
          }, wait);
        }
      };
    }

    return function(action) {
      if (action !== actionCancel) fn();
    };
  }

  /**
   * Returns true if element is transformed, false if not. In practice the
   * element's display value must be anything else than "none" or "inline" as
   * well as have a valid transform value applied in order to be counted as a
   * transformed element.
   *
   * Borrowed from Mezr (v0.6.1):
   * https://github.com/niklasramo/mezr/blob/0.6.1/mezr.js#L661
   *
   * @param {HTMLElement} element
   * @returns {Boolean}
   */
  function isTransformed(element) {
    var transform = getStyle(element, 'transform');
    if (!transform || transform === 'none') return false;

    var display = getStyle(element, 'display');
    if (display === 'inline' || display === 'none') return false;

    return true;
  }

  /**
   * Returns an absolute positioned element's containing block, which is
   * considered to be the closest ancestor element that the target element's
   * positioning is relative to. Disclaimer: this only works as intended for
   * absolute positioned elements.
   *
   * @param {HTMLElement} element
   * @param {Boolean} [includeSelf=false]
   *   - When this is set to true the containing block checking is started from
   *     the provided element. Otherwise the checking is started from the
   *     provided element's parent element.
   * @returns {(Document|Element)}
   */
  function getContainingBlock(element, includeSelf) {
    // As long as the containing block is an element, static and not
    // transformed, try to get the element's parent element and fallback to
    // document. https://github.com/niklasramo/mezr/blob/0.6.1/mezr.js#L339
    var document = window.document;
    var ret = (includeSelf ? element : element.parentElement) || document;
    while (ret && ret !== document && getStyle(ret, 'position') === 'static' && !isTransformed(ret)) {
      ret = ret.parentElement || document;
    }
    return ret;
  }

  /**
   * Returns the computed value of an element's style property transformed into
   * a float value.
   *
   * @param {HTMLElement} el
   * @param {String} style
   * @returns {Number}
   */
  function getStyleAsFloat(el, style) {
    return parseFloat(getStyle(el, style)) || 0;
  }

  var offsetA = {};
  var offsetB = {};
  var offsetDiff = {};

  /**
   * Returns the element's document offset, which in practice means the vertical
   * and horizontal distance between the element's northwest corner and the
   * document's northwest corner. Note that this function always returns the same
   * object so be sure to read the data from it instead using it as a reference.
   *
   * @param {(Document|Element|Window)} element
   * @param {Object} [offsetData]
   *   - Optional data object where the offset data will be inserted to. If not
   *     provided a new object will be created for the return data.
   * @returns {Object}
   */
  function getOffset(element, offsetData) {
    var ret = offsetData || {};
    var rect;

    // Set up return data.
    ret.left = 0;
    ret.top = 0;

    // Document's offsets are always 0.
    if (element === document) return ret;

    // Add viewport scroll left/top to the respective offsets.
    ret.left = window.pageXOffset || 0;
    ret.top = window.pageYOffset || 0;

    // Window's offsets are the viewport scroll left/top values.
    if (element.self === window.self) return ret;

    // Add element's client rects to the offsets.
    rect = element.getBoundingClientRect();
    ret.left += rect.left;
    ret.top += rect.top;

    // Exclude element's borders from the offset.
    ret.left += getStyleAsFloat(element, 'border-left-width');
    ret.top += getStyleAsFloat(element, 'border-top-width');

    return ret;
  }

  /**
   * Calculate the offset difference two elements.
   *
   * @param {HTMLElement} elemA
   * @param {HTMLElement} elemB
   * @param {Boolean} [compareContainingBlocks=false]
   *   - When this is set to true the containing blocks of the provided elements
   *     will be used for calculating the difference. Otherwise the provided
   *     elements will be compared directly.
   * @returns {Object}
   */
  function getOffsetDiff(elemA, elemB, compareContainingBlocks) {
    offsetDiff.left = 0;
    offsetDiff.top = 0;

    // If elements are same let's return early.
    if (elemA === elemB) return offsetDiff;

    // Compare containing blocks if necessary.
    if (compareContainingBlocks) {
      elemA = getContainingBlock(elemA, true);
      elemB = getContainingBlock(elemB, true);

      // If containing blocks are identical, let's return early.
      if (elemA === elemB) return offsetDiff;
    }

    // Finally, let's calculate the offset diff.
    getOffset(elemA, offsetA);
    getOffset(elemB, offsetB);
    offsetDiff.left = offsetB.left - offsetA.left;
    offsetDiff.top = offsetB.top - offsetA.top;

    return offsetDiff;
  }

  var styleOverflow = 'overflow';
  var styleOverflowX = 'overflow-x';
  var styleOverflowY = 'overflow-y';
  var overflowAuto = 'auto';
  var overflowScroll = 'scroll';

  /**
   * Check if an element is scrollable.
   *
   * @param {HTMLElement} element
   * @returns {Boolean}
   */
  function isScrollable(element) {
    var overflow = getStyle(element, styleOverflow);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    overflow = getStyle(element, styleOverflowX);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    overflow = getStyle(element, styleOverflowY);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    return false;
  }

  /**
   * Collect element's ancestors that are potentially scrollable elements.
   *
   * @param {HTMLElement} element
   * @param {Boolean} [includeSelf=false]
   * @param {Array} [data]
   * @returns {Array}
   */
  function getScrollableAncestors(element, includeSelf, data) {
    var ret = data || [];
    var parent = includeSelf ? element : element.parentNode;

    // Find scroll parents.
    while (parent && parent !== document) {
      // If element is inside ShadowDOM let's get it's host node from the real
      // DOM and continue looping.
      if (parent.getRootNode && parent instanceof DocumentFragment) {
        parent = parent.getRootNode().host;
        continue;
      }

      // If element is scrollable let's add it to the scrollable list.
      if (isScrollable(parent)) {
        ret.push(parent);
      }

      parent = parent.parentNode;
    }

    // Always add window to the results.
    ret.push(window);

    return ret;
  }

  var translateValue = {};
  var transformStyle$2 = 'transform';
  var transformNone = 'none';
  var rxMat3d = /^matrix3d/;
  var rxMatTx = /([^,]*,){4}/;
  var rxMat3dTx = /([^,]*,){12}/;
  var rxNextItem = /[^,]*,/;

  /**
   * Returns the element's computed translateX and translateY values as a floats.
   * The returned object is always the same object and updated every time this
   * function is called.
   *
   * @param {HTMLElement} element
   * @returns {Object}
   */
  function getTranslate(element) {
    translateValue.x = 0;
    translateValue.y = 0;

    var transform = getStyle(element, transformStyle$2);
    if (!transform || transform === transformNone) {
      return translateValue;
    }

    // Transform style can be in either matrix3d(...) or matrix(...).
    var isMat3d = rxMat3d.test(transform);
    var tX = transform.replace(isMat3d ? rxMat3dTx : rxMatTx, '');
    var tY = tX.replace(rxNextItem, '');

    translateValue.x = parseFloat(tX) || 0;
    translateValue.y = parseFloat(tY) || 0;

    return translateValue;
  }

  /**
   * Transform translateX and translateY value into CSS transform style
   * property's value.
   *
   * @param {Number} x
   * @param {Number} y
   * @returns {String}
   */
  function getTranslateString(x, y) {
    return 'translateX(' + x + 'px) translateY(' + y + 'px)';
  }

  /**
   * Remove class from an element.
   *
   * @param {HTMLElement} element
   * @param {String} className
   */
  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      if (elementMatches(element, '.' + className)) {
        element.className = (' ' + element.className + ' ')
          .replace(' ' + className + ' ', ' ')
          .trim();
      }
    }
  }

  // Drag start predicate states.
  var startPredicateInactive = 0;
  var startPredicatePending = 1;
  var startPredicateResolved = 2;
  var startPredicateRejected = 3;

  /**
   * Bind touch interaction to an item.
   *
   * @class
   * @param {Item} item
   */
  function ItemDrag(item) {
    var element = item._element;
    var grid = item.getGrid();
    var settings = grid._settings;

    this._item = item;
    this._gridId = grid._id;
    this._isDestroyed = false;
    this._isMigrating = false;

    // Start predicate data.
    this._startPredicate = isFunction(settings.dragStartPredicate)
      ? settings.dragStartPredicate
      : ItemDrag.defaultStartPredicate;
    this._startPredicateState = startPredicateInactive;
    this._startPredicateResult = undefined;

    // Data for drag sort predicate heuristics.
    this._hBlockedIndex = null;
    this._hX1 = 0;
    this._hX2 = 0;
    this._hY1 = 0;
    this._hY2 = 0;

    // Setup item's initial drag data.
    this._reset();

    // Bind the methods that needs binding.
    this._preStartCheck = this._preStartCheck.bind(this);
    this._preEndCheck = this._preEndCheck.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._prepareMove = this._prepareMove.bind(this);
    this._applyMove = this._applyMove.bind(this);
    this._prepareScroll = this._prepareScroll.bind(this);
    this._applyScroll = this._applyScroll.bind(this);
    this._checkOverlap = this._checkOverlap.bind(this);

    // Create debounce overlap checker function.
    var sortInterval = settings.dragSortHeuristics.sortInterval;
    this._checkOverlapDebounce = debounce(this._checkOverlap, sortInterval);

    // Init dragger.
    this._dragger = new Dragger(element, settings.dragCssProps);
    this._dragger.on('start', this._preStartCheck);
    this._dragger.on('move', this._preStartCheck);
    this._dragger.on('cancel', this._preEndCheck);
    this._dragger.on('end', this._preEndCheck);
  }

  /**
   * Public static methods
   * *********************
   */

  /**
   * Default drag start predicate handler that handles anchor elements
   * gracefully. The return value of this function defines if the drag is
   * started, rejected or pending. When true is returned the dragging is started
   * and when false is returned the dragging is rejected. If nothing is returned
   * the predicate will be called again on the next drag movement.
   *
   * @public
   * @memberof ItemDrag
   * @param {Item} item
   * @param {DraggerEvent} event
   * @param {Object} [options]
   *   - An optional options object which can be used to pass the predicate
   *     it's options manually. By default the predicate retrieves the options
   *     from the grid's settings.
   * @returns {Boolean}
   */
  ItemDrag.defaultStartPredicate = function(item, event, options) {
    var drag = item._drag;
    var predicate = drag._startPredicateData || drag._setupStartPredicate(options);

    // Final event logic. At this stage return value does not matter anymore,
    // the predicate is either resolved or it's not and there's nothing to do
    // about it. Here we just reset data and if the item element is a link
    // we follow it (if there has only been slight movement).
    if (event.isFinal) {
      drag._finishStartPredicate(event);
      return;
    }

    // Find and store the handle element so we can check later on if the
    // cursor is within the handle. If we have a handle selector let's find
    // the corresponding element. Otherwise let's use the item element as the
    // handle.
    if (!predicate.handleElement) {
      predicate.handleElement = drag._getStartPredicateHandle(event);
      if (!predicate.handleElement) return false;
    }

    // If delay is defined let's keep track of the latest event and initiate
    // delay if it has not been done yet.
    if (predicate.delay) {
      predicate.event = event;
      if (!predicate.delayTimer) {
        predicate.delayTimer = window.setTimeout(function() {
          predicate.delay = 0;
          if (drag._resolveStartPredicate(predicate.event)) {
            drag._forceResolveStartPredicate(predicate.event);
            drag._resetStartPredicate();
          }
        }, predicate.delay);
      }
    }

    return drag._resolveStartPredicate(event);
  };

  /**
   * Default drag sort predicate.
   *
   * @public
   * @memberof ItemDrag
   * @param {Item} item
   * @param {Object} [options]
   * @param {Number} [options.threshold=50]
   * @param {String} [options.action='move']
   * @returns {(Boolean|DragSortCommand)}
   *   - Returns false if no valid index was found. Otherwise returns drag sort
   *     command.
   */
  ItemDrag.defaultSortPredicate = (function() {
    var itemRect = {};
    var targetRect = {};
    var returnData = {};
    var rootGridArray = [];

    function getTargetGrid(item, rootGrid, threshold) {
      var target = null;
      var dragSort = rootGrid._settings.dragSort;
      var bestScore = -1;
      var gridScore;
      var grids;
      var grid;
      var i;

      // Get potential target grids.
      if (dragSort === true) {
        rootGridArray[0] = rootGrid;
        grids = rootGridArray;
      } else {
        grids = dragSort.call(rootGrid, item);
      }

      // Return immediately if there are no grids.
      if (!Array.isArray(grids)) return target;

      // Loop through the grids and get the best match.
      for (i = 0; i < grids.length; i++) {
        grid = grids[i];

        // Filter out all destroyed grids.
        if (grid._isDestroyed) continue;

        // We need to update the grid's offsets and dimensions since they might
        // have changed (e.g during scrolling).
        grid._updateBoundingRect();

        // Check how much dragged element overlaps the container element.
        targetRect.width = grid._width;
        targetRect.height = grid._height;
        targetRect.left = grid._left;
        targetRect.top = grid._top;
        gridScore = getRectOverlapScore(itemRect, targetRect);

        // Check if this grid is the best match so far.
        if (gridScore > threshold && gridScore > bestScore) {
          bestScore = gridScore;
          target = grid;
        }
      }

      // Always reset root grid array.
      rootGridArray.length = 0;

      return target;
    }

    return function(item, options) {
      var drag = item._drag;
      var rootGrid = drag._getGrid();

      // Get drag sort predicate settings.
      var sortThreshold = options && typeof options.threshold === 'number' ? options.threshold : 50;
      var sortAction = options && options.action === actionSwap ? actionSwap : actionMove;

      // Populate item rect data.
      itemRect.width = item._width;
      itemRect.height = item._height;
      itemRect.left = drag._elementClientX;
      itemRect.top = drag._elementClientY;

      // Calculate the target grid.
      var grid = getTargetGrid(item, rootGrid, sortThreshold);

      // Return early if we found no grid container element that overlaps the
      // dragged item enough.
      if (!grid) return false;

      var gridOffsetLeft = 0;
      var gridOffsetTop = 0;
      var matchScore = -1;
      var matchIndex;
      var hasValidTargets;
      var target;
      var score;
      var i;

      // If item is moved within it's originating grid adjust item's left and
      // top props. Otherwise if item is moved to/within another grid get the
      // container element's offset (from the element's content edge).
      if (grid === rootGrid) {
        itemRect.left = drag._gridX + item._marginLeft;
        itemRect.top = drag._gridY + item._marginTop;
      } else {
        grid._updateBorders(1, 0, 1, 0);
        gridOffsetLeft = grid._left + grid._borderLeft;
        gridOffsetTop = grid._top + grid._borderTop;
      }

      // Loop through the target grid items and try to find the best match.
      for (i = 0; i < grid._items.length; i++) {
        target = grid._items[i];

        // If the target item is not active or the target item is the dragged
        // item let's skip to the next item.
        if (!target._isActive || target === item) {
          continue;
        }

        // Mark the grid as having valid target items.
        hasValidTargets = true;

        // Calculate the target's overlap score with the dragged item.
        targetRect.width = target._width;
        targetRect.height = target._height;
        targetRect.left = target._left + target._marginLeft + gridOffsetLeft;
        targetRect.top = target._top + target._marginTop + gridOffsetTop;
        score = getRectOverlapScore(itemRect, targetRect);

        // Update best match index and score if the target's overlap score with
        // the dragged item is higher than the current best match score.
        if (score > matchScore) {
          matchIndex = i;
          matchScore = score;
        }
      }

      // If there is no valid match and the item is being moved into another
      // grid.
      if (matchScore < sortThreshold && item.getGrid() !== grid) {
        matchIndex = hasValidTargets ? -1 : 0;
        matchScore = Infinity;
      }

      // Check if the best match overlaps enough to justify a placement switch.
      if (matchScore >= sortThreshold) {
        returnData.grid = grid;
        returnData.index = matchIndex;
        returnData.action = sortAction;
        return returnData;
      }

      return false;
    };
  })();

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Abort dragging and reset drag data.
   *
   * @public
   * @memberof ItemDrag.prototype
   * @returns {ItemDrag}
   */
  ItemDrag.prototype.stop = function() {
    var item = this._item;
    var element = item._element;
    var grid = this._getGrid();

    if (!this._isActive) return this;

    // If the item is being dropped into another grid, finish it up and return
    // immediately.
    if (this._isMigrating) {
      this._finishMigration();
      return this;
    }

    // Cancel queued move and scroll ticks.
    cancelMoveTick(item._id);
    cancelScrollTick(item._id);

    // Remove scroll listeners.
    this._unbindScrollListeners();

    // Cancel overlap check.
    this._checkOverlapDebounce('cancel');

    // Append item element to the container if it's not it's child. Also make
    // sure the translate values are adjusted to account for the DOM shift.
    if (element.parentNode !== grid._element) {
      grid._element.appendChild(element);
      element.style[transformProp] = getTranslateString(this._gridX, this._gridY);
    }

    // Remove dragging class.
    removeClass(element, grid._settings.itemDraggingClass);

    // Reset drag data.
    this._reset();

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemDrag.prototype
   * @returns {ItemDrag}
   */
  ItemDrag.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop();
    this._dragger.destroy();
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Get Grid instance.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @returns {?Grid}
   */
  ItemDrag.prototype._getGrid = function() {
    return gridInstances[this._gridId] || null;
  };

  /**
   * Setup/reset drag data.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._reset = function() {
    // Is item being dragged?
    this._isActive = false;

    // The dragged item's container element.
    this._container = null;

    // The dragged item's containing block.
    this._containingBlock = null;

    // Drag/scroll event data.
    this._dragEvent = null;
    this._scrollEvent = null;

    // All the elements which need to be listened for scroll events during
    // dragging.
    this._scrollers = [];

    // The current translateX/translateY position.
    this._left = 0;
    this._top = 0;

    // Dragged element's current position within the grid.
    this._gridX = 0;
    this._gridY = 0;

    // Dragged element's current offset from window's northwest corner. Does
    // not account for element's margins.
    this._elementClientX = 0;
    this._elementClientY = 0;

    // Offset difference between the dragged element's temporary drag
    // container and it's original container.
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  };

  /**
   * Bind drag scroll handlers to all scrollable ancestor elements of the
   * dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._bindScrollListeners = function() {
    var gridContainer = this._getGrid()._element;
    var dragContainer = this._container;
    var scrollers = this._scrollers;
    var gridScrollers;
    var i;

    // Get dragged element's scrolling parents.
    scrollers.length = 0;
    getScrollableAncestors(this._item._element, false, scrollers);

    // If drag container is defined and it's not the same element as grid
    // container then we need to add the grid container and it's scroll parents
    // to the elements which are going to be listener for scroll events.
    if (dragContainer !== gridContainer) {
      gridScrollers = [];
      getScrollableAncestors(gridContainer, true, gridScrollers);
      for (i = 0; i < gridScrollers.length; i++) {
        if (scrollers.indexOf(gridScrollers[i]) < 0) {
          scrollers.push(gridScrollers[i]);
        }
      }
    }

    // Bind scroll listeners.
    for (i = 0; i < scrollers.length; i++) {
      scrollers[i].addEventListener('scroll', this._onScroll);
    }
  };

  /**
   * Unbind currently bound drag scroll handlers from all scrollable ancestor
   * elements of the dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._unbindScrollListeners = function() {
    var scrollers = this._scrollers;
    var i;

    for (i = 0; i < scrollers.length; i++) {
      scrollers[i].removeEventListener('scroll', this._onScroll);
    }

    scrollers.length = 0;
  };

  /**
   * Setup default start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {Object} [options]
   * @returns {Object}
   */
  ItemDrag.prototype._setupStartPredicate = function(options) {
    var config = options || this._getGrid()._settings.dragStartPredicate || 0;
    return (this._startPredicateData = {
      distance: Math.abs(config.distance) || 0,
      delay: Math.max(config.delay, 0) || 0,
      handle: typeof config.handle === 'string' ? config.handle : false
    });
  };

  /**
   * Setup default start predicate handle.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {?HTMLElement}
   */
  ItemDrag.prototype._getStartPredicateHandle = function(event) {
    var predicate = this._startPredicateData;
    var element = this._item._element;
    var handleElement = element;

    // No handle, no hassle -> let's use the item element as the handle.
    if (!predicate.handle) return handleElement;

    // If there is a specific predicate handle defined, let's try to get it.
    handleElement = event.target;
    while (handleElement && !elementMatches(handleElement, predicate.handle)) {
      handleElement = handleElement !== element ? handleElement.parentElement : null;
    }
    return handleElement || null;
  };

  /**
   * Unbind currently bound drag scroll handlers from all scrollable ancestor
   * elements of the dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {Boolean}
   */
  ItemDrag.prototype._resolveStartPredicate = function(event) {
    var predicate = this._startPredicateData;

    // If the moved distance is smaller than the threshold distance or there is
    // some delay left, ignore this predicate cycle.
    if (event.distance < predicate.distance || predicate.delay) return;

    // Get handle rect data.
    var handleRect = predicate.handleElement.getBoundingClientRect();
    var handleLeft = handleRect.left + (window.pageXOffset || 0);
    var handleTop = handleRect.top + (window.pageYOffset || 0);
    var handleWidth = handleRect.width;
    var handleHeight = handleRect.height;

    // Reset predicate data.
    this._resetStartPredicate();

    // If the cursor is still within the handle let's start the drag.
    return (
      handleWidth &&
      handleHeight &&
      event.pageX >= handleLeft &&
      event.pageX < handleLeft + handleWidth &&
      event.pageY >= handleTop &&
      event.pageY < handleTop + handleHeight
    );
  };

  /**
   * Forcefully resolve drag start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._forceResolveStartPredicate = function(event) {
    if (!this._isDestroyed && this._startPredicateState === startPredicatePending) {
      this._startPredicateState = startPredicateResolved;
      this._onStart(event);
    }
  };

  /**
   * Finalize start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._finishStartPredicate = function(event) {
    var element = this._item._element;

    // Check if this is a click (very subjective heuristics).
    var isClick = Math.abs(event.deltaX) < 2 && Math.abs(event.deltaY) < 2 && event.deltaTime < 200;

    // Reset predicate.
    this._resetStartPredicate();

    // If the gesture can be interpreted as click let's try to open the element's
    // href url (if it is an anchor element).
    if (isClick) openAnchorHref(element);
  };

  /**
   * Reset drag sort heuristics.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._resetHeuristics = function(event) {
    this._hBlockedIndex = null;
    this._hX1 = this._hX2 = event.clientX;
    this._hY1 = this._hY2 = event.clientY;
  };

  /**
   * Run heuristics and return true if overlap check can be performed, and false
   * if it can not.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {Boolean}
   */
  ItemDrag.prototype._checkHeuristics = function(event) {
    var settings = this._getGrid()._settings.dragSortHeuristics;
    var minDist = settings.minDragDistance;

    // Skip heuristics if not needed.
    if (minDist <= 0) {
      this._hBlockedIndex = null;
      return true;
    }

    var x = event.clientX;
    var y = event.clientY;
    var diffX = x - this._hX2;
    var diffY = y - this._hY2;

    // If we can't do proper bounce back check make sure that the blocked index
    // is not set.
    var canCheckBounceBack = minDist > 3 && settings.minBounceBackAngle > 0;
    if (!canCheckBounceBack) {
      this._hBlockedIndex = null;
    }

    if (Math.abs(diffX) > minDist || Math.abs(diffY) > minDist) {
      // Reset blocked index if angle changed enough. This check requires a
      // minimum value of 3 for minDragDistance to function properly.
      if (canCheckBounceBack) {
        var angle = Math.atan2(diffX, diffY);
        var prevAngle = Math.atan2(this._hX2 - this._hX1, this._hY2 - this._hY1);
        var deltaAngle = Math.atan2(Math.sin(angle - prevAngle), Math.cos(angle - prevAngle));
        if (Math.abs(deltaAngle) > settings.minBounceBackAngle) {
          this._hBlockedIndex = null;
        }
      }

      // Update points.
      this._hX1 = this._hX2;
      this._hY1 = this._hY2;
      this._hX2 = x;
      this._hY2 = y;

      return true;
    }

    return false;
  };

  /**
   * Reset for default drag start predicate function.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._resetStartPredicate = function() {
    var predicate = this._startPredicateData;
    if (predicate) {
      if (predicate.delayTimer) {
        predicate.delayTimer = window.clearTimeout(predicate.delayTimer);
      }
      this._startPredicateData = null;
    }
  };

  /**
   * Check (during drag) if an item is overlapping other items and based on
   * the configuration layout the items.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._checkOverlap = function() {
    if (!this._isActive) return;

    var item = this._item;
    var settings = this._getGrid()._settings;
    var result;
    var currentGrid;
    var currentIndex;
    var targetGrid;
    var targetIndex;
    var sortAction;
    var isMigration;

    // Get overlap check result.
    if (isFunction(settings.dragSortPredicate)) {
      result = settings.dragSortPredicate(item, this._dragEvent);
    } else {
      result = ItemDrag.defaultSortPredicate(item, settings.dragSortPredicate);
    }

    // Let's make sure the result object has a valid index before going further.
    if (!result || typeof result.index !== 'number') return;

    currentGrid = item.getGrid();
    targetGrid = result.grid || currentGrid;
    isMigration = currentGrid !== targetGrid;
    currentIndex = currentGrid._items.indexOf(item);
    targetIndex = normalizeArrayIndex(targetGrid._items, result.index, isMigration);
    sortAction = result.action === actionSwap ? actionSwap : actionMove;

    // Prevent position bounce.
    if (!isMigration && targetIndex === this._hBlockedIndex) {
      return;
    }

    // If the item was moved within it's current grid.
    if (!isMigration) {
      // Make sure the target index is not the current index.
      if (currentIndex !== targetIndex) {
        this._hBlockedIndex = currentIndex;

        // Do the sort.
        (sortAction === actionSwap ? arraySwap : arrayMove)(
          currentGrid._items,
          currentIndex,
          targetIndex
        );

        // Emit move event.
        if (currentGrid._hasListeners(eventMove)) {
          currentGrid._emit(eventMove, {
            item: item,
            fromIndex: currentIndex,
            toIndex: targetIndex,
            action: sortAction
          });
        }

        // Layout the grid.
        currentGrid.layout();
      }
    }

    // If the item was moved to another grid.
    else {
      this._hBlockedIndex = null;

      // Emit beforeSend event.
      if (currentGrid._hasListeners(eventBeforeSend)) {
        currentGrid._emit(eventBeforeSend, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Emit beforeReceive event.
      if (targetGrid._hasListeners(eventBeforeReceive)) {
        targetGrid._emit(eventBeforeReceive, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Update item's grid id reference.
      item._gridId = targetGrid._id;

      // Update drag instance's migrating indicator.
      this._isMigrating = item._gridId !== this._gridId;

      // Move item instance from current grid to target grid.
      currentGrid._items.splice(currentIndex, 1);
      arrayInsert(targetGrid._items, item, targetIndex);

      // Set sort data as null, which is an indicator for the item comparison
      // function that the sort data of this specific item should be fetched
      // lazily.
      item._sortData = null;

      // Emit send event.
      if (currentGrid._hasListeners(eventSend)) {
        currentGrid._emit(eventSend, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Emit receive event.
      if (targetGrid._hasListeners(eventReceive)) {
        targetGrid._emit(eventReceive, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Layout both grids.
      currentGrid.layout();
      targetGrid.layout();
    }
  };

  /**
   * If item is dragged into another grid, finish the migration process
   * gracefully.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._finishMigration = function() {
    var item = this._item;
    var release = item._release;
    var element = item._element;
    var isActive = item._isActive;
    var targetGrid = item.getGrid();
    var targetGridElement = targetGrid._element;
    var targetSettings = targetGrid._settings;
    var targetContainer = targetSettings.dragContainer || targetGridElement;
    var currentSettings = this._getGrid()._settings;
    var currentContainer = element.parentNode;
    var translate;
    var offsetDiff;

    // Destroy current drag. Note that we need to set the migrating flag to
    // false first, because otherwise we create an infinite loop between this
    // and the drag.stop() method.
    this._isMigrating = false;
    this.destroy();

    // Remove current classnames.
    removeClass(element, currentSettings.itemClass);
    removeClass(element, currentSettings.itemVisibleClass);
    removeClass(element, currentSettings.itemHiddenClass);

    // Add new classnames.
    addClass(element, targetSettings.itemClass);
    addClass(element, isActive ? targetSettings.itemVisibleClass : targetSettings.itemHiddenClass);

    // Move the item inside the target container if it's different than the
    // current container.
    if (targetContainer !== currentContainer) {
      targetContainer.appendChild(element);
      offsetDiff = getOffsetDiff(currentContainer, targetContainer, true);
      translate = getTranslate(element);
      translate.x -= offsetDiff.left;
      translate.y -= offsetDiff.top;
    }

    // Update item's cached dimensions and sort data.
    item._refreshDimensions();
    item._refreshSortData();

    // Calculate the offset difference between target's drag container (if any)
    // and actual grid container element. We save it later for the release
    // process.
    offsetDiff = getOffsetDiff(targetContainer, targetGridElement, true);
    release._containerDiffX = offsetDiff.left;
    release._containerDiffY = offsetDiff.top;

    // Recreate item's drag handler.
    item._drag = targetSettings.dragEnabled ? new ItemDrag(item) : null;

    // Adjust the position of the item element if it was moved from a container
    // to another.
    if (targetContainer !== currentContainer) {
      element.style[transformProp] = getTranslateString(translate.x, translate.y);
    }

    // Update child element's styles to reflect the current visibility state.
    item._child.removeAttribute('style');
    setStyles(item._child, isActive ? targetSettings.visibleStyles : targetSettings.hiddenStyles);

    // Start the release.
    release.start();
  };

  /**
   * Drag pre-start handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._preStartCheck = function(event) {
    // Let's activate drag start predicate state.
    if (this._startPredicateState === startPredicateInactive) {
      this._startPredicateState = startPredicatePending;
    }

    // If predicate is pending try to resolve it.
    if (this._startPredicateState === startPredicatePending) {
      this._startPredicateResult = this._startPredicate(this._item, event);
      if (this._startPredicateResult === true) {
        this._startPredicateState = startPredicateResolved;
        this._onStart(event);
      } else if (this._startPredicateResult === false) {
        this._startPredicateState = startPredicateRejected;
      }
    }

    // Otherwise if predicate is resolved and drag is active, move the item.
    else if (this._startPredicateState === startPredicateResolved && this._isActive) {
      this._onMove(event);
    }
  };

  /**
   * Drag pre-end handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._preEndCheck = function(event) {
    // Check if the start predicate was resolved during drag.
    var isResolved = this._startPredicateState === startPredicateResolved;

    // Do final predicate check to allow user to unbind stuff for the current
    // drag procedure within the predicate callback. The return value of this
    // check will have no effect to the state of the predicate.
    this._startPredicate(this._item, event);

    // Reset start predicate state.
    this._startPredicateState = startPredicateInactive;

    // If predicate is resolved and dragging is active, call the end handler.
    if (isResolved && this._isActive) this._onEnd(event);
  };

  /**
   * Drag start handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onStart = function(event) {
    var item = this._item;

    // If item is not active, don't start the drag.
    if (!item._isActive) return;

    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var release = item._release;
    var migrate = item._migrate;
    var gridContainer = grid._element;
    var dragContainer = settings.dragContainer || gridContainer;
    var containingBlock = getContainingBlock(dragContainer, true);
    var translate = getTranslate(element);
    var currentLeft = translate.x;
    var currentTop = translate.y;
    var elementRect = element.getBoundingClientRect();
    var hasDragContainer = dragContainer !== gridContainer;
    var offsetDiff;

    // Reset heuristics data.
    this._resetHeuristics(event);

    // If grid container is not the drag container, we need to calculate the
    // offset difference between grid container and drag container's containing
    // element.
    if (hasDragContainer) {
      offsetDiff = getOffsetDiff(containingBlock, gridContainer);
    }

    // Stop current positioning animation.
    if (item.isPositioning()) {
      item._layout.stop(true, { transform: getTranslateString(currentLeft, currentTop) });
    }

    // Stop current migration animation.
    if (migrate._isActive) {
      currentLeft -= migrate._containerDiffX;
      currentTop -= migrate._containerDiffY;
      migrate.stop(true, { transform: getTranslateString(currentLeft, currentTop) });
    }

    // If item is being released reset release data.
    if (item.isReleasing()) release._reset();

    // Setup drag data.
    this._isActive = true;
    this._dragEvent = event;
    this._container = dragContainer;
    this._containingBlock = containingBlock;
    this._elementClientX = elementRect.left;
    this._elementClientY = elementRect.top;
    this._left = this._gridX = currentLeft;
    this._top = this._gridY = currentTop;

    // Create placeholder (if necessary).
    if (settings.dragPlaceholder.enabled) {
      item._dragPlaceholder.create();
    }

    // Emit dragInit event.
    grid._emit(eventDragInit, item, event);

    // If a specific drag container is set and it is different from the
    // grid's container element we need to cast some extra spells.
    if (hasDragContainer) {
      // Store the container offset diffs to drag data.
      this._containerDiffX = offsetDiff.left;
      this._containerDiffY = offsetDiff.top;

      // If the dragged element is a child of the drag container all we need to
      // do is setup the relative drag position data.
      if (element.parentNode === dragContainer) {
        this._gridX = currentLeft - this._containerDiffX;
        this._gridY = currentTop - this._containerDiffY;
      }

      // Otherwise we need to append the element inside the correct container,
      // setup the actual drag position data and adjust the element's translate
      // values to account for the DOM position shift.
      else {
        this._left = currentLeft + this._containerDiffX;
        this._top = currentTop + this._containerDiffY;
        dragContainer.appendChild(element);
        element.style[transformProp] = getTranslateString(this._left, this._top);
      }
    }

    // Set drag class and bind scrollers.
    addClass(element, settings.itemDraggingClass);
    this._bindScrollListeners();

    // Emit dragStart event.
    grid._emit(eventDragStart, item, event);
  };

  /**
   * Drag move handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onMove = function(event) {
    var item = this._item;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    var settings = this._getGrid()._settings;
    var axis = settings.dragAxis;

    // Update horizontal position data.
    if (axis !== 'y') {
      var xDiff = event.clientX - this._dragEvent.clientX;
      this._left += xDiff;
      this._gridX += xDiff;
      this._elementClientX += xDiff;
    }

    // Update vertical position data.
    if (axis !== 'x') {
      var yDiff = event.clientY - this._dragEvent.clientY;
      this._top += yDiff;
      this._gridY += yDiff;
      this._elementClientY += yDiff;
    }

    // Update event data.
    this._dragEvent = event;

    // Do move prepare/apply handling in the next tick.
    addMoveTick(item._id, this._prepareMove, this._applyMove);
  };

  /**
   * Prepare dragged item for moving.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._prepareMove = function() {
    // Do nothing if item is not active.
    if (!this._item._isActive) return;

    // If drag sort is enabled -> check overlap.
    if (this._getGrid()._settings.dragSort) {
      if (this._checkHeuristics(this._dragEvent)) {
        this._checkOverlapDebounce();
      }
    }
  };

  /**
   * Apply movement to dragged item.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._applyMove = function() {
    var item = this._item;

    // Do nothing if item is not active.
    if (!item._isActive) return;

    // Update element's translateX/Y values.
    item._element.style[transformProp] = getTranslateString(this._left, this._top);

    // Emit dragMove event.
    this._getGrid()._emit(eventDragMove, item, this._dragEvent);
  };

  /**
   * Drag scroll handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {Event} event
   */
  ItemDrag.prototype._onScroll = function(event) {
    var item = this._item;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    // Update last scroll event.
    this._scrollEvent = event;

    // Do scroll prepare/apply handling in the next tick.
    addScrollTick(item._id, this._prepareScroll, this._applyScroll);
  };

  /**
   * Prepare dragged item for scrolling.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._prepareScroll = function() {
    var item = this._item;

    // If item is not active do nothing.
    if (!item._isActive) return;

    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var axis = settings.dragAxis;
    var gridContainer = grid._element;
    var offsetDiff;

    // Calculate element's rect and x/y diff.
    var rect = element.getBoundingClientRect();
    var xDiff = this._elementClientX - rect.left;
    var yDiff = this._elementClientY - rect.top;

    // Update container diff.
    if (this._container !== gridContainer) {
      offsetDiff = getOffsetDiff(this._containingBlock, gridContainer);
      this._containerDiffX = offsetDiff.left;
      this._containerDiffY = offsetDiff.top;
    }

    // Update horizontal position data.
    if (axis !== 'y') {
      this._left += xDiff;
      this._gridX = this._left - this._containerDiffX;
    }

    // Update vertical position data.
    if (axis !== 'x') {
      this._top += yDiff;
      this._gridY = this._top - this._containerDiffY;
    }

    // Overlap handling.
    if (settings.dragSort) this._checkOverlapDebounce();
  };

  /**
   * Apply scroll to dragged item.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._applyScroll = function() {
    var item = this._item;

    // If item is not active do nothing.
    if (!item._isActive) return;

    // Update element's translateX/Y values.
    item._element.style[transformProp] = getTranslateString(this._left, this._top);

    // Emit dragScroll event.
    this._getGrid()._emit(eventDragScroll, item, this._scrollEvent);
  };

  /**
   * Drag end handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onEnd = function(event) {
    var item = this._item;
    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var release = item._release;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    // Cancel queued move and scroll ticks.
    cancelMoveTick(item._id);
    cancelScrollTick(item._id);

    // Finish currently queued overlap check.
    settings.dragSort && this._checkOverlapDebounce('finish');

    // Remove scroll listeners.
    this._unbindScrollListeners();

    // Setup release data.
    release._containerDiffX = this._containerDiffX;
    release._containerDiffY = this._containerDiffY;

    // Reset drag data.
    this._reset();

    // Remove drag class name from element.
    removeClass(element, settings.itemDraggingClass);

    // Emit dragEnd event.
    grid._emit(eventDragEnd, item, event);

    // Finish up the migration process or start the release process.
    this._isMigrating ? this._finishMigration() : release.start();
  };

  /**
   * Private helpers
   * ***************
   */

  /**
   * Calculate how many percent the intersection area of two rectangles is from
   * the maximum potential intersection area between the rectangles.
   *
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Number}
   *   - A number between 0-100.
   */
  function getRectOverlapScore(a, b) {
    // Return 0 immediately if the rectangles do not overlap.
    if (
      a.left + a.width <= b.left ||
      b.left + b.width <= a.left ||
      a.top + a.height <= b.top ||
      b.top + b.height <= a.top
    ) {
      return 0;
    }

    // Calculate intersection area's width, height, max height and max width.
    var width = Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left);
    var height = Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top);
    var maxWidth = Math.min(a.width, b.width);
    var maxHeight = Math.min(a.height, b.height);

    return ((width * height) / (maxWidth * maxHeight)) * 100;
  }

  /**
   * Check if an element is an anchor element and open the href url if possible.
   *
   * @param {HTMLElement} element
   */
  function openAnchorHref(element) {
    // Make sure the element is anchor element.
    if (element.tagName.toLowerCase() !== 'a') return;

    // Get href and make sure it exists.
    var href = element.getAttribute('href');
    if (!href) return;

    // Finally let's navigate to the link href.
    var target = element.getAttribute('target');
    if (target && target !== '_self') {
      window.open(href, target);
    } else {
      window.location.href = href;
    }
  }

  /**
   * Drag placeholder.
   *
   * @class
   * @param {Item} item
   */
  function ItemDragPlaceholder(item) {
    this._item = item;
    this._animate = new ItemAnimate();
    this._element = null;
    this._className = '';
    this._didMigrate = false;
    this._resetAfterLayout = false;
    this._currentLeft = 0;
    this._currentTop = 0;
    this._nextLeft = 0;
    this._nextTop = 0;

    // Bind animation handlers.
    this._setupAnimation = this._setupAnimation.bind(this);
    this._startAnimation = this._startAnimation.bind(this);

    // Bind event handlers.
    this._onLayoutStart = this._onLayoutStart.bind(this);
    this._onLayoutEnd = this._onLayoutEnd.bind(this);
    this._onReleaseEnd = this._onReleaseEnd.bind(this);
    this._onMigrate = this._onMigrate.bind(this);
  }

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Move placeholder to a new position.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._onLayoutStart = function() {
    var item = this._item;
    var grid = item.getGrid();

    // Find out the item's new (unapplied) left and top position.
    var itemIndex = grid._items.indexOf(item);
    var nextLeft = grid._layout.slots[itemIndex * 2];
    var nextTop = grid._layout.slots[itemIndex * 2 + 1];

    // If item's position did not change and the item did not migrate we can
    // safely skip layout.
    if (!this._didMigrate && item._left === nextLeft && item._top === nextTop) {
      return;
    }

    // Slots data is calculated with item margins added to them so we need to add
    // item's left and top margin to the slot data to get the placeholder's
    // next position.
    nextLeft += item._marginLeft;
    nextTop += item._marginTop;

    // Just snap to new position without any animations if no animation is
    // required or if placeholder moves between grids.
    var animEnabled = grid._settings.dragPlaceholder.duration > 0;
    if (!animEnabled || this._didMigrate) {
      // Cancel potential (queued) layout tick.
      cancelPlaceholderTick(item._id);

      // Snap placeholder to correct position.
      var targetStyles = { transform: getTranslateString(nextLeft, nextTop) };
      if (this._animate.isAnimating()) {
        this._animate.stop(targetStyles);
      } else {
        setStyles(this._element, targetStyles);
      }

      // Move placeholder inside correct container after migration.
      if (this._didMigrate) {
        grid.getElement().appendChild(this._element);
        this._didMigrate = false;
      }

      return;
    }

    // Start the placeholder's layout animation in the next tick. We do this to
    // avoid layout thrashing.
    this._nextLeft = nextLeft;
    this._nextTop = nextTop;
    addPlaceholderTick(item._id, this._setupAnimation, this._startAnimation);
  };

  /**
   * Prepare placeholder for layout animation.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._setupAnimation = function() {
    if (!this.isActive()) return;

    var translate = getTranslate(this._element);
    this._currentLeft = translate.x;
    this._currentTop = translate.y;
  };

  /**
   * Start layout animation.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._startAnimation = function() {
    if (!this.isActive()) return;

    var animation = this._animate;
    var currentLeft = this._currentLeft;
    var currentTop = this._currentTop;
    var nextLeft = this._nextLeft;
    var nextTop = this._nextTop;
    var targetStyles = { transform: getTranslateString(nextLeft, nextTop) };

    // If placeholder is already in correct position let's just stop animation
    // and be done with it.
    if (currentLeft === nextLeft && currentTop === nextTop) {
      if (animation.isAnimating()) animation.stop(targetStyles);
      return;
    }

    // Otherwise let's start the animation.
    var settings = this._item.getGrid()._settings.dragPlaceholder;
    var currentStyles = { transform: getTranslateString(currentLeft, currentTop) };
    animation.start(currentStyles, targetStyles, {
      duration: settings.duration,
      easing: settings.easing,
      onFinish: this._onLayoutEnd
    });
  };

  /**
   * Layout end handler.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._onLayoutEnd = function() {
    if (this._resetAfterLayout) {
      this.reset();
    }
  };

  /**
   * Drag end handler. This handler is called when dragReleaseEnd event is
   * emitted and receives the event data as it's argument.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   * @param {Item} item
   */
  ItemDragPlaceholder.prototype._onReleaseEnd = function(item) {
    if (item._id === this._item._id) {
      // If the placeholder is not animating anymore we can safely reset it.
      if (!this._animate.isAnimating()) {
        this.reset();
        return;
      }

      // If the placeholder item is still animating here, let's wait for it to
      // finish it's animation.
      this._resetAfterLayout = true;
    }
  };

  /**
   * Migration start handler. This handler is called when beforeSend event is
   * emitted and receives the event data as it's argument.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   * @param {Object} data
   * @param {Item} data.item
   * @param {Grid} data.fromGrid
   * @param {Number} data.fromIndex
   * @param {Grid} data.toGrid
   * @param {Number} data.toIndex
   */
  ItemDragPlaceholder.prototype._onMigrate = function(data) {
    // Make sure we have a matching item.
    if (data.item !== this._item) return;

    var grid = this._item.getGrid();
    var nextGrid = data.toGrid;

    // Unbind listeners from current grid.
    grid.off(eventDragReleaseEnd, this._onReleaseEnd);
    grid.off(eventLayoutStart, this._onLayoutStart);
    grid.off(eventBeforeSend, this._onMigrate);

    // Bind listeners to the next grid.
    nextGrid.on(eventDragReleaseEnd, this._onReleaseEnd);
    nextGrid.on(eventLayoutStart, this._onLayoutStart);
    nextGrid.on(eventBeforeSend, this._onMigrate);

    // Mark the item as migrated.
    this._didMigrate = true;
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Create placeholder. Note that this method only writes to DOM and does not
   * read anything from DOM so it should not cause any additional layout
   * thrashing when it's called at the end of the drag start procedure.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.create = function() {
    // If we already have placeholder set up we can skip the initiation logic.
    if (this.isActive()) {
      this._resetAfterLayout = false;
      return;
    }

    var item = this._item;
    var grid = item.getGrid();
    var settings = grid._settings;
    var animation = this._animate;

    // Create placeholder element.
    var element;
    if (isFunction(settings.dragPlaceholder.createElement)) {
      element = settings.dragPlaceholder.createElement(item);
    } else {
      element = window.document.createElement('div');
    }
    this._element = element;

    // Update element to animation instance.
    animation._element = element;

    // Add placeholder class to the placeholder element.
    this._className = settings.itemPlaceholderClass || '';
    if (this._className) {
      addClass(element, this._className);
    }

    // Position the placeholder item correctly.
    var left = item._left + item._marginLeft;
    var top = item._top + item._marginTop;
    setStyles(element, {
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '0',
      width: item._width + 'px',
      height: item._height + 'px',
      transform: getTranslateString(left, top)
    });

    // Bind event listeners.
    grid.on(eventLayoutStart, this._onLayoutStart);
    grid.on(eventDragReleaseEnd, this._onReleaseEnd);
    grid.on(eventBeforeSend, this._onMigrate);

    // onCreate hook.
    if (isFunction(settings.dragPlaceholder.onCreate)) {
      settings.dragPlaceholder.onCreate(item, element);
    }

    // Insert the placeholder element to the grid.
    grid.getElement().appendChild(element);
  };

  /**
   * Reset placeholder data.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.reset = function() {
    if (!this.isActive()) return;

    var element = this._element;
    var item = this._item;
    var grid = item.getGrid();
    var settings = grid._settings;
    var animation = this._animate;

    // Reset flag.
    this._resetAfterLayout = false;

    // Cancel potential (queued) layout tick.
    cancelPlaceholderTick(item._id);

    // Reset animation instance.
    animation.stop();
    animation._element = null;

    // Unbind event listeners.
    grid.off(eventDragReleaseEnd, this._onReleaseEnd);
    grid.off(eventLayoutStart, this._onLayoutStart);
    grid.off(eventBeforeSend, this._onMigrate);

    // Remove placeholder class from the placeholder element.
    if (this._className) {
      removeClass(element, this._className);
      this._className = '';
    }

    // Remove element.
    element.parentNode.removeChild(element);
    this._element = null;

    // onRemove hook. Note that here we use the current grid's onRemove callback
    // so if the item has migrated during drag the onRemove method will not be
    // the originating grid's method.
    if (isFunction(settings.dragPlaceholder.onRemove)) {
      settings.dragPlaceholder.onRemove(item, element);
    }
  };

  /**
   * Update placeholder's dimensions.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   * @param {Number} width
   * @param {height} height
   */
  ItemDragPlaceholder.prototype.updateDimensions = function(width, height) {
    if (this.isActive()) {
      setStyles(this._element, {
        width: width + 'px',
        height: height + 'px'
      });
    }
  };

  /**
   * Check if placeholder is currently active (visible).
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   * @returns {Boolean}
   */
  ItemDragPlaceholder.prototype.isActive = function() {
    return !!this._element;
  };

  /**
   * Destroy placeholder instance.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.destroy = function() {
    this.reset();
    this._animate.destroy();
    this._item = this._animate = null;
  };

  /**
   * Queue constructor.
   *
   * @class
   */
  function Queue() {
    this._queue = [];
    this._isDestroyed = false;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Add callback to the queue.
   *
   * @public
   * @memberof Queue.prototype
   * @param {Function} callback
   * @returns {Queue}
   */
  Queue.prototype.add = function(callback) {
    if (this._isDestroyed) return this;
    this._queue.push(callback);
    return this;
  };

  /**
   * Process queue callbacks and reset the queue.
   *
   * @public
   * @memberof Queue.prototype
   * @param {*} arg1
   * @param {*} arg2
   * @returns {Queue}
   */
  Queue.prototype.flush = function(arg1, arg2) {
    if (this._isDestroyed) return this;

    var queue = this._queue;
    var length = queue.length;
    var i;

    // Quit early if the queue is empty.
    if (!length) return this;

    var singleCallback = length === 1;
    var snapshot = singleCallback ? queue[0] : queue.slice(0);

    // Reset queue.
    queue.length = 0;

    // If we only have a single callback let's just call it.
    if (singleCallback) {
      snapshot(arg1, arg2);
      return this;
    }

    // If we have multiple callbacks, let's process them.
    for (i = 0; i < length; i++) {
      snapshot[i](arg1, arg2);
      if (this._isDestroyed) break;
    }

    return this;
  };

  /**
   * Destroy Queue instance.
   *
   * @public
   * @memberof Queue.prototype
   * @returns {Queue}
   */
  Queue.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    this._isDestroyed = true;
    this._queue.length = 0;

    return this;
  };

  /**
   * Layout manager for Item instance.
   *
   * @class
   * @param {Item} item
   */
  function ItemLayout(item) {
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._isInterrupted = false;
    this._currentStyles = {};
    this._targetStyles = {};
    this._currentLeft = 0;
    this._currentTop = 0;
    this._offsetLeft = 0;
    this._offsetTop = 0;
    this._skipNextAnimation = false;
    this._animateOptions = {
      onFinish: this._finish.bind(this)
    };
    this._queue = new Queue();

    // Bind animation handlers and finish method.
    this._setupAnimation = this._setupAnimation.bind(this);
    this._startAnimation = this._startAnimation.bind(this);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start item layout based on it's current data.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @param {Boolean} [instant=false]
   * @param {Function} [onFinish]
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.start = function(instant, onFinish) {
    if (this._isDestroyed) return;

    var item = this._item;
    var element = item._element;
    var release = item._release;
    var gridSettings = item.getGrid()._settings;
    var isPositioning = this._isActive;
    var isJustReleased = release._isActive && release._isPositioningStarted === false;
    var animDuration = isJustReleased
      ? gridSettings.dragReleaseDuration
      : gridSettings.layoutDuration;
    var animEasing = isJustReleased ? gridSettings.dragReleaseEasing : gridSettings.layoutEasing;
    var animEnabled = !instant && !this._skipNextAnimation && animDuration > 0;
    var isAnimating;

    // If the item is currently positioning process current layout callback
    // queue with interrupted flag on.
    if (isPositioning) this._queue.flush(true, item);

    // Mark release positioning as started.
    if (isJustReleased) release._isPositioningStarted = true;

    // Push the callback to the callback queue.
    if (isFunction(onFinish)) this._queue.add(onFinish);

    // If no animations are needed, easy peasy!
    if (!animEnabled) {
      this._updateOffsets();
      this._updateTargetStyles();
      isAnimating = item._animate.isAnimating();
      this.stop(false, this._targetStyles);
      !isAnimating && setStyles(element, this._targetStyles);
      this._skipNextAnimation = false;
      return this._finish();
    }

    // Set item active and store some data for the animation that is about to be
    // triggered.
    this._isActive = true;
    this._animateOptions.easing = animEasing;
    this._animateOptions.duration = animDuration;
    this._isInterrupted = isPositioning;

    // Start the item's layout animation in the next tick.
    addLayoutTick(item._id, this._setupAnimation, this._startAnimation);

    return this;
  };

  /**
   * Stop item's position animation if it is currently animating.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @param {Boolean} [processCallbackQueue=false]
   * @param {Object} [targetStyles]
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.stop = function(processCallbackQueue, targetStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;

    // Cancel animation init.
    cancelLayoutTick(item._id);

    // Stop animation.
    item._animate.stop(targetStyles);

    // Remove positioning class.
    removeClass(item._element, item.getGrid()._settings.itemPositioningClass);

    // Reset active state.
    this._isActive = false;

    // Process callback queue if needed.
    if (processCallbackQueue) this._queue.flush(true, item);

    return this;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true, {});
    this._queue.destroy();
    this._item = this._currentStyles = this._targetStyles = this._animateOptions = null;
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Calculate and update item's current layout offset data.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._updateOffsets = function() {
    if (this._isDestroyed) return;

    var item = this._item;
    var migrate = item._migrate;
    var release = item._release;

    this._offsetLeft = release._isActive
      ? release._containerDiffX
      : migrate._isActive
      ? migrate._containerDiffX
      : 0;

    this._offsetTop = release._isActive
      ? release._containerDiffY
      : migrate._isActive
      ? migrate._containerDiffY
      : 0;
  };

  /**
   * Calculate and update item's layout target styles.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._updateTargetStyles = function() {
    if (this._isDestroyed) return;
    this._targetStyles.transform = getTranslateString(
      this._item._left + this._offsetLeft,
      this._item._top + this._offsetTop
    );
  };

  /**
   * Finish item layout procedure.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._finish = function() {
    if (this._isDestroyed) return;

    var item = this._item;
    var migrate = item._migrate;
    var release = item._release;

    // Mark the item as inactive and remove positioning classes.
    if (this._isActive) {
      this._isActive = false;
      removeClass(item._element, item.getGrid()._settings.itemPositioningClass);
    }

    // Finish up release and migration.
    if (release._isActive) release.stop();
    if (migrate._isActive) migrate.stop();

    // Process the callback queue.
    this._queue.flush(false, item);
  };

  /**
   * Prepare item for layout animation.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._setupAnimation = function() {
    var translate = getTranslate(this._item._element);
    this._currentLeft = translate.x;
    this._currentTop = translate.y;
  };

  /**
   * Start layout animation.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._startAnimation = function() {
    var item = this._item;
    var settings = item.getGrid()._settings;

    // Let's update the offset data and target styles.
    this._updateOffsets();
    this._updateTargetStyles();

    // If the item is already in correct position let's quit early.
    if (
      item._left === this._currentLeft - this._offsetLeft &&
      item._top === this._currentTop - this._offsetTop
    ) {
      if (this._isInterrupted) this.stop(false, this._targetStyles);
      this._isActive = false;
      this._finish();
      return;
    }

    // Set item's positioning class if needed.
    if (!this._isInterrupted) {
      addClass(item._element, settings.itemPositioningClass);
    }

    // Get current styles for animation.
    this._currentStyles.transform = getTranslateString(this._currentLeft, this._currentTop);

    // Animate.
    item._animate.start(this._currentStyles, this._targetStyles, this._animateOptions);
  };

  var tempStyles = {};

  /**
   * The migrate process handler constructor.
   *
   * @class
   * @param {Item} item
   */
  function ItemMigrate(item) {
    // Private props.
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._container = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start the migrate process of an item.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @param {Grid} targetGrid
   * @param {GridSingleItemQuery} position
   * @param {HTMLElement} [container]
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.start = function(targetGrid, position, container) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var isVisible = item.isVisible();
    var grid = item.getGrid();
    var settings = grid._settings;
    var targetSettings = targetGrid._settings;
    var targetElement = targetGrid._element;
    var targetItems = targetGrid._items;
    var currentIndex = grid._items.indexOf(item);
    var targetContainer = container || window.document.body;
    var targetIndex;
    var targetItem;
    var currentContainer;
    var offsetDiff;
    var containerDiff;
    var translate;
    var translateX;
    var translateY;

    // Get target index.
    if (typeof position === 'number') {
      targetIndex = normalizeArrayIndex(targetItems, position, true);
    } else {
      targetItem = targetGrid._getItem(position);
      /** @todo Consider throwing an error here instead of silently failing. */
      if (!targetItem) return this;
      targetIndex = targetItems.indexOf(targetItem);
    }

    // Get current translateX and translateY values if needed.
    if (item.isPositioning() || this._isActive || item.isReleasing()) {
      translate = getTranslate(element);
      translateX = translate.x;
      translateY = translate.y;
    }

    // Abort current positioning.
    if (item.isPositioning()) {
      item._layout.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Abort current migration.
    if (this._isActive) {
      translateX -= this._containerDiffX;
      translateY -= this._containerDiffY;
      this.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Abort current release.
    if (item.isReleasing()) {
      translateX -= item._release._containerDiffX;
      translateY -= item._release._containerDiffY;
      item._release.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Stop current visibility animations.
    item._visibility._stopAnimation();

    // Destroy current drag.
    if (item._drag) item._drag.destroy();

    // Process current visibility animation queue.
    item._visibility._queue.flush(true, item);

    // Emit beforeSend event.
    if (grid._hasListeners(eventBeforeSend)) {
      grid._emit(eventBeforeSend, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Emit beforeReceive event.
    if (targetGrid._hasListeners(eventBeforeReceive)) {
      targetGrid._emit(eventBeforeReceive, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Remove current classnames.
    removeClass(element, settings.itemClass);
    removeClass(element, settings.itemVisibleClass);
    removeClass(element, settings.itemHiddenClass);

    // Add new classnames.
    addClass(element, targetSettings.itemClass);
    addClass(element, isVisible ? targetSettings.itemVisibleClass : targetSettings.itemHiddenClass);

    // Move item instance from current grid to target grid.
    grid._items.splice(currentIndex, 1);
    arrayInsert(targetItems, item, targetIndex);

    // Update item's grid id reference.
    item._gridId = targetGrid._id;

    // Get current container.
    currentContainer = element.parentNode;

    // Move the item inside the target container if it's different than the
    // current container.
    if (targetContainer !== currentContainer) {
      targetContainer.appendChild(element);
      offsetDiff = getOffsetDiff(targetContainer, currentContainer, true);
      if (!translate) {
        translate = getTranslate(element);
        translateX = translate.x;
        translateY = translate.y;
      }
      element.style[transformProp] = getTranslateString(
        translateX + offsetDiff.left,
        translateY + offsetDiff.top
      );
    }

    // Update child element's styles to reflect the current visibility state.
    item._child.removeAttribute('style');
    setStyles(item._child, isVisible ? targetSettings.visibleStyles : targetSettings.hiddenStyles);

    // Update display style.
    element.style.display = isVisible ? 'block' : 'hidden';

    // Get offset diff for the migration data.
    containerDiff = getOffsetDiff(targetContainer, targetElement, true);

    // Update item's cached dimensions and sort data.
    item._refreshDimensions();
    item._refreshSortData();

    // Create new drag handler.
    item._drag = targetSettings.dragEnabled ? new ItemDrag(item) : null;

    // Setup migration data.
    this._isActive = true;
    this._container = targetContainer;
    this._containerDiffX = containerDiff.left;
    this._containerDiffY = containerDiff.top;

    // Emit send event.
    if (grid._hasListeners(eventSend)) {
      grid._emit(eventSend, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Emit receive event.
    if (targetGrid._hasListeners(eventReceive)) {
      targetGrid._emit(eventReceive, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    return this;
  };

  /**
   * End the migrate process of an item. This method can be used to abort an
   * ongoing migrate process (animation) or finish the migrate process.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @param {Boolean} [abort=false]
   *  - Should the migration be aborted?
   * @param {Object} [currentStyles]
   *  - Optional current translateX and translateY styles.
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.stop = function(abort, currentStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var gridElement = grid._element;
    var translate;

    if (this._container !== gridElement) {
      if (!currentStyles) {
        if (abort) {
          translate = getTranslate(element);
          tempStyles.transform = getTranslateString(
            translate.x - this._containerDiffX,
            translate.y - this._containerDiffY
          );
        } else {
          tempStyles.transform = getTranslateString(item._left, item._top);
        }
        currentStyles = tempStyles;
      }
      gridElement.appendChild(element);
      setStyles(element, currentStyles);
    }

    this._isActive = false;
    this._container = null;
    this._containerDiffX = 0;
    this._containerDiffY = 0;

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true);
    this._item = null;
    this._isDestroyed = true;
    return this;
  };

  var tempStyles$1 = {};

  /**
   * The release process handler constructor. Although this might seem as proper
   * fit for the drag process this needs to be separated into it's own logic
   * because there might be a scenario where drag is disabled, but the release
   * process still needs to be implemented (dragging from a grid to another).
   *
   * @class
   * @param {Item} item
   */
  function ItemRelease(item) {
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._isPositioningStarted = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start the release process of an item.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.start = function() {
    if (this._isDestroyed || this._isActive) return this;

    var item = this._item;
    var grid = item.getGrid();

    // Flag release as active.
    this._isActive = true;

    // Add release class name to the released element.
    addClass(item._element, grid._settings.itemReleasingClass);

    // Emit dragReleaseStart event.
    grid._emit(eventDragReleaseStart, item);

    // Position the released item.
    item._layout.start(false);

    return this;
  };

  /**
   * End the release process of an item. This method can be used to abort an
   * ongoing release process (animation) or finish the release process.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @param {Boolean} [abort=false]
   *  - Should the release be aborted? When true, the release end event won't be
   *    emitted. Set to true only when you need to abort the release process
   *    while the item is animating to it's position.
   * @param {Object} [currentStyles]
   *  - Optional current translateX and translateY styles.
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.stop = function(abort, currentStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var container = grid._element;
    var translate;

    // Reset data and remove releasing class name from the element.
    this._reset();

    // If the released element is outside the grid's container element put it
    // back there and adjust position accordingly.
    if (element.parentNode !== container) {
      if (!currentStyles) {
        if (abort) {
          translate = getTranslate(element);
          tempStyles$1.transform = getTranslateString(
            translate.x - this._containerDiffX,
            translate.y - this._containerDiffY
          );
        } else {
          tempStyles$1.transform = getTranslateString(item._left, item._top);
        }
        currentStyles = tempStyles$1;
      }
      container.appendChild(element);
      setStyles(element, currentStyles);
    }

    // Emit dragReleaseEnd event.
    if (!abort) grid._emit(eventDragReleaseEnd, item);

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true);
    this._item = null;
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Reset public data and remove releasing class.
   *
   * @private
   * @memberof ItemRelease.prototype
   */
  ItemRelease.prototype._reset = function() {
    if (this._isDestroyed) return;
    var item = this._item;
    this._isActive = false;
    this._isPositioningStarted = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
    removeClass(item._element, item.getGrid()._settings.itemReleasingClass);
  };

  /**
   * Get current values of the provided styles definition object.
   *
   * @param {HTMLElement} element
   * @param {Object} styles
   * @return {Object}
   */
  function getCurrentStyles(element, styles) {
    var current = {};
    for (var prop in styles) {
      current[prop] = getStyle(element, getStyleName(prop));
    }
    return current;
  }

  /**
   * Visibility manager for Item instance.
   *
   * @class
   * @param {Item} item
   */
  function ItemVisibility(item) {
    var isActive = item._isActive;
    var element = item._element;
    var settings = item.getGrid()._settings;

    this._item = item;
    this._isDestroyed = false;

    // Set up visibility states.
    this._isHidden = !isActive;
    this._isHiding = false;
    this._isShowing = false;

    // Callback queue.
    this._queue = new Queue();

    // Bind show/hide finishers.
    this._finishShow = this._finishShow.bind(this);
    this._finishHide = this._finishHide.bind(this);

    // Force item to be either visible or hidden on init.
    element.style.display = isActive ? 'block' : 'none';

    // Set visible/hidden class.
    addClass(element, isActive ? settings.itemVisibleClass : settings.itemHiddenClass);

    // Set initial styles for the child element.
    setStyles(item._child, isActive ? settings.visibleStyles : settings.hiddenStyles);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Show item.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @param {Boolean} instant
   * @param {Function} [onFinish]
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.show = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var queue = this._queue;
    var callback = isFunction(onFinish) ? onFinish : null;
    var grid = item.getGrid();
    var settings = grid._settings;

    // If item is visible call the callback and be done with it.
    if (!this._isShowing && !this._isHidden) {
      callback && callback(false, item);
      return this;
    }

    // If item is showing and does not need to be shown instantly, let's just
    // push callback to the callback queue and be done with it.
    if (this._isShowing && !instant) {
      callback && queue.add(callback);
      return this;
    }

    // If the item is hiding or hidden process the current visibility callback
    // queue with the interrupted flag active, update classes and set display
    // to block if necessary.
    if (!this._isShowing) {
      queue.flush(true, item);
      removeClass(element, settings.itemHiddenClass);
      addClass(element, settings.itemVisibleClass);
      if (!this._isHiding) element.style.display = 'block';
    }

    // Push callback to the callback queue.
    callback && queue.add(callback);

    // Update visibility states.
    item._isActive = this._isShowing = true;
    this._isHiding = this._isHidden = false;

    // Finally let's start show animation.
    this._startAnimation(true, instant, this._finishShow);

    return this;
  };

  /**
   * Hide item.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @param {Boolean} instant
   * @param {Function} [onFinish]
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.hide = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var queue = this._queue;
    var callback = isFunction(onFinish) ? onFinish : null;
    var grid = item.getGrid();
    var settings = grid._settings;

    // If item is already hidden call the callback and be done with it.
    if (!this._isHiding && this._isHidden) {
      callback && callback(false, item);
      return this;
    }

    // If item is hiding and does not need to be hidden instantly, let's just
    // push callback to the callback queue and be done with it.
    if (this._isHiding && !instant) {
      callback && queue.add(callback);
      return this;
    }

    // If the item is showing or visible process the current visibility callback
    // queue with the interrupted flag active, update classes and set display
    // to block if necessary.
    if (!this._isHiding) {
      queue.flush(true, item);
      addClass(element, settings.itemHiddenClass);
      removeClass(element, settings.itemVisibleClass);
    }

    // Push callback to the callback queue.
    callback && queue.add(callback);

    // Update visibility states.
    this._isHidden = this._isHiding = true;
    item._isActive = this._isShowing = false;

    // Finally let's start hide animation.
    this._startAnimation(false, instant, this._finishHide);

    return this;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var queue = this._queue;
    var settings = grid._settings;

    // Stop visibility animation.
    this._stopAnimation({});

    // Fire all uncompleted callbacks with interrupted flag and destroy the queue.
    queue.flush(true, item).destroy();

    // Remove visible/hidden classes.
    removeClass(element, settings.itemVisibleClass);
    removeClass(element, settings.itemHiddenClass);

    // Reset state.
    this._item = null;
    this._isHiding = this._isShowing = false;
    this._isDestroyed = this._isHidden = true;

    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Start visibility animation.
   *
   * @private
   * @memberof ItemVisibility.prototype
   * @param {Boolean} toVisible
   * @param {Boolean} [instant]
   * @param {Function} [onFinish]
   */
  ItemVisibility.prototype._startAnimation = function(toVisible, instant, onFinish) {
    if (this._isDestroyed) return;

    var item = this._item;
    var settings = item.getGrid()._settings;
    var targetStyles = toVisible ? settings.visibleStyles : settings.hiddenStyles;
    var duration = parseInt(toVisible ? settings.showDuration : settings.hideDuration) || 0;
    var easing = (toVisible ? settings.showEasing : settings.hideEasing) || 'ease';
    var isInstant = instant || duration <= 0;
    var currentStyles;

    // No target styles? Let's quit early.
    if (!targetStyles) {
      onFinish && onFinish();
      return;
    }

    // Cancel queued visibility tick.
    cancelVisibilityTick(item._id);

    // If we need to apply the styles instantly without animation.
    if (isInstant) {
      if (item._animateChild.isAnimating()) {
        item._animateChild.stop(targetStyles);
      } else {
        setStyles(item._child, targetStyles);
      }
      onFinish && onFinish();
      return;
    }

    // Start the animation in the next tick (to avoid layout thrashing).
    addVisibilityTick(
      item._id,
      function() {
        currentStyles = getCurrentStyles(item._child, targetStyles);
      },
      function() {
        item._animateChild.start(currentStyles, targetStyles, {
          duration: duration,
          easing: easing,
          onFinish: onFinish
        });
      }
    );
  };

  /**
   * Stop visibility animation.
   *
   * @private
   * @memberof ItemVisibility.prototype
   * @param {Object} [targetStyles]
   */
  ItemVisibility.prototype._stopAnimation = function(targetStyles) {
    if (this._isDestroyed) return;
    var item = this._item;
    cancelVisibilityTick(item._id);
    item._animateChild.stop(targetStyles);
  };

  /**
   * Finish show procedure.
   *
   * @private
   * @memberof ItemVisibility.prototype
   */
  ItemVisibility.prototype._finishShow = function() {
    if (this._isHidden) return;
    this._isShowing = false;
    this._queue.flush(false, this._item);
  };

  /**
   * Finish hide procedure.
   *
   * @private
   * @memberof ItemVisibility.prototype
   */
  var finishStyles = {};
  ItemVisibility.prototype._finishHide = function() {
    if (!this._isHidden) return;
    var item = this._item;
    this._isHiding = false;
    finishStyles.transform = getTranslateString(0, 0);
    item._layout.stop(true, finishStyles);
    item._element.style.display = 'none';
    this._queue.flush(false, item);
  };

  var id = 0;

  /**
   * Returns a unique numeric id (increments a base value on every call).
   * @returns {Number}
   */
  function createUid() {
    return ++id;
  }

  /**
   * Creates a new Item instance for a Grid instance.
   *
   * @class
   * @param {Grid} grid
   * @param {HTMLElement} element
   * @param {Boolean} [isActive]
   */
  function Item(grid, element, isActive) {
    var settings = grid._settings;

    // Create instance id.
    this._id = createUid();

    // Reference to connected Grid instance's id.
    this._gridId = grid._id;

    // Destroyed flag.
    this._isDestroyed = false;

    // Set up initial positions.
    this._left = 0;
    this._top = 0;

    // The elements.
    this._element = element;
    this._child = element.children[0];

    // If the provided item element is not a direct child of the grid container
    // element, append it to the grid container.
    if (element.parentNode !== grid._element) {
      grid._element.appendChild(element);
    }

    // Set item class.
    addClass(element, settings.itemClass);

    // If isActive is not defined, let's try to auto-detect it.
    if (typeof isActive !== 'boolean') {
      isActive = getStyle(element, 'display') !== 'none';
    }

    // Set up active state (defines if the item is considered part of the layout
    // or not).
    this._isActive = isActive;

    // Set element's initial position styles.
    element.style.left = '0';
    element.style.top = '0';
    element.style[transformProp] = getTranslateString(0, 0);

    // Initiate item's animation controllers.
    this._animate = new ItemAnimate(element);
    this._animateChild = new ItemAnimate(this._child);

    // Setup visibility handler.
    this._visibility = new ItemVisibility(this);

    // Set up layout handler.
    this._layout = new ItemLayout(this);

    // Set up migration handler data.
    this._migrate = new ItemMigrate(this);

    // Set up release handler. Note that although this is fully linked to dragging
    // this still needs to be always instantiated to handle migration scenarios
    // correctly.
    this._release = new ItemRelease(this);

    // Set up drag placeholder handler. Note that although this is fully linked to
    // dragging this still needs to be always instantiated to handle migration
    // scenarios correctly.
    this._dragPlaceholder = new ItemDragPlaceholder(this);

    // Set up drag handler.
    this._drag = settings.dragEnabled ? new ItemDrag(this) : null;

    // Set up the initial dimensions and sort data.
    this._refreshDimensions();
    this._refreshSortData();
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Get the instance grid reference.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Grid}
   */
  Item.prototype.getGrid = function() {
    return gridInstances[this._gridId];
  };

  /**
   * Get the instance element.
   *
   * @public
   * @memberof Item.prototype
   * @returns {HTMLElement}
   */
  Item.prototype.getElement = function() {
    return this._element;
  };

  /**
   * Get instance element's cached width.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Number}
   */
  Item.prototype.getWidth = function() {
    return this._width;
  };

  /**
   * Get instance element's cached height.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Number}
   */
  Item.prototype.getHeight = function() {
    return this._height;
  };

  /**
   * Get instance element's cached margins.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Object}
   *   - The returned object contains left, right, top and bottom properties
   *     which indicate the item element's cached margins.
   */
  Item.prototype.getMargin = function() {
    return {
      left: this._marginLeft,
      right: this._marginRight,
      top: this._marginTop,
      bottom: this._marginBottom
    };
  };

  /**
   * Get instance element's cached position.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Object}
   *   - The returned object contains left and top properties which indicate the
   *     item element's cached position in the grid.
   */
  Item.prototype.getPosition = function() {
    return {
      left: this._left,
      top: this._top
    };
  };

  /**
   * Is the item active?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isActive = function() {
    return this._isActive;
  };

  /**
   * Is the item visible?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isVisible = function() {
    return !!this._visibility && !this._visibility._isHidden;
  };

  /**
   * Is the item being animated to visible?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isShowing = function() {
    return !!(this._visibility && this._visibility._isShowing);
  };

  /**
   * Is the item being animated to hidden?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isHiding = function() {
    return !!(this._visibility && this._visibility._isHiding);
  };

  /**
   * Is the item positioning?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isPositioning = function() {
    return !!(this._layout && this._layout._isActive);
  };

  /**
   * Is the item being dragged?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isDragging = function() {
    return !!(this._drag && this._drag._isActive);
  };

  /**
   * Is the item being released?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isReleasing = function() {
    return !!(this._release && this._release._isActive);
  };

  /**
   * Is the item destroyed?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isDestroyed = function() {
    return this._isDestroyed;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Recalculate item's dimensions.
   *
   * @private
   * @memberof Item.prototype
   */
  Item.prototype._refreshDimensions = function() {
    if (this._isDestroyed || this._visibility._isHidden) return;

    var element = this._element;
    var dragPlaceholder = this._dragPlaceholder;
    var rect = element.getBoundingClientRect();

    // Calculate width and height.
    this._width = rect.width;
    this._height = rect.height;

    // Calculate margins (ignore negative margins).
    this._marginLeft = Math.max(0, getStyleAsFloat(element, 'margin-left'));
    this._marginRight = Math.max(0, getStyleAsFloat(element, 'margin-right'));
    this._marginTop = Math.max(0, getStyleAsFloat(element, 'margin-top'));
    this._marginBottom = Math.max(0, getStyleAsFloat(element, 'margin-bottom'));

    // Keep drag placeholder's dimensions synced with the item's.
    if (dragPlaceholder) {
      dragPlaceholder.updateDimensions(this._width, this._height);
    }
  };

  /**
   * Fetch and store item's sort data.
   *
   * @private
   * @memberof Item.prototype
   */
  Item.prototype._refreshSortData = function() {
    if (this._isDestroyed) return;

    var data = (this._sortData = {});
    var getters = this.getGrid()._settings.sortData;
    var prop;

    for (prop in getters) {
      data[prop] = getters[prop](this, this._element);
    }
  };

  /**
   * Destroy item instance.
   *
   * @private
   * @memberof Item.prototype
   * @param {Boolean} [removeElement=false]
   */
  Item.prototype._destroy = function(removeElement) {
    if (this._isDestroyed) return;

    var element = this._element;
    var grid = this.getGrid();
    var settings = grid._settings;
    var index = grid._items.indexOf(this);

    // Destroy handlers.
    this._release.destroy();
    this._migrate.destroy();
    this._layout.destroy();
    this._visibility.destroy();
    this._animate.destroy();
    this._animateChild.destroy();
    this._dragPlaceholder.destroy();
    this._drag && this._drag.destroy();

    // Remove all inline styles.
    element.removeAttribute('style');
    this._child.removeAttribute('style');

    // Remove item class.
    removeClass(element, settings.itemClass);

    // Remove item from Grid instance if it still exists there.
    index > -1 && grid._items.splice(index, 1);

    // Remove element from DOM.
    removeElement && element.parentNode.removeChild(element);

    // Reset state.
    this._isActive = false;
    this._isDestroyed = true;
  };

  /**
   * This is the default layout algorithm for Muuri. Based on MAXRECTS approach
   * as described by Jukka Jylänki in his survey: "A Thousand Ways to Pack the
   * Bin - A Practical Approach to Two-Dimensional Rectangle Bin Packing.".
   *
   * @class
   */
  function Packer() {
    this._slots = [];
    this._slotSizes = [];
    this._freeSlots = [];
    this._newSlots = [];
    this._rectItem = {};
    this._rectStore = [];
    this._rectId = 0;

    // The layout return data, which will be populated in getLayout.
    this._layout = {
      slots: null,
      setWidth: false,
      setHeight: false,
      width: false,
      height: false
    };

    // Bind sort handlers.
    this._sortRectsLeftTop = this._sortRectsLeftTop.bind(this);
    this._sortRectsTopLeft = this._sortRectsTopLeft.bind(this);
  }

  /**
   * @public
   * @memberof Packer.prototype
   * @param {Item[]} items
   * @param {Number} width
   * @param {Number} height
   * @param {Number[]} [slots]
   * @param {Object} [options]
   * @param {Boolean} [options.fillGaps=false]
   * @param {Boolean} [options.horizontal=false]
   * @param {Boolean} [options.alignRight=false]
   * @param {Boolean} [options.alignBottom=false]
   * @returns {LayoutData}
   */
  Packer.prototype.getLayout = function(items, width, height, slots, options) {
    var layout = this._layout;
    var fillGaps = !!(options && options.fillGaps);
    var isHorizontal = !!(options && options.horizontal);
    var alignRight = !!(options && options.alignRight);
    var alignBottom = !!(options && options.alignBottom);
    var rounding = !!(options && options.rounding);
    var slotSizes = this._slotSizes;
    var i;

    // Reset layout data.
    layout.slots = slots ? slots : this._slots;
    layout.width = isHorizontal ? 0 : rounding ? Math.round(width) : width;
    layout.height = !isHorizontal ? 0 : rounding ? Math.round(height) : height;
    layout.setWidth = isHorizontal;
    layout.setHeight = !isHorizontal;

    // Make sure slots and slot size arrays are reset.
    layout.slots.length = 0;
    slotSizes.length = 0;

    // No need to go further if items do not exist.
    if (!items.length) return layout;

    // Find slots for items.
    for (i = 0; i < items.length; i++) {
      this._addSlot(items[i], isHorizontal, fillGaps, rounding, alignRight || alignBottom);
    }

    // If the alignment is set to right we need to adjust the results.
    if (alignRight) {
      for (i = 0; i < layout.slots.length; i = i + 2) {
        layout.slots[i] = layout.width - (layout.slots[i] + slotSizes[i]);
      }
    }

    // If the alignment is set to bottom we need to adjust the results.
    if (alignBottom) {
      for (i = 1; i < layout.slots.length; i = i + 2) {
        layout.slots[i] = layout.height - (layout.slots[i] + slotSizes[i]);
      }
    }

    // Reset slots arrays and rect id.
    slotSizes.length = 0;
    this._freeSlots.length = 0;
    this._newSlots.length = 0;
    this._rectId = 0;

    return layout;
  };

  /**
   * Calculate position for the layout item. Returns the left and top position
   * of the item in pixels.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Item} item
   * @param {Boolean} isHorizontal
   * @param {Boolean} fillGaps
   * @param {Boolean} rounding
   * @returns {Array}
   */
  Packer.prototype._addSlot = (function() {
    var eps = 0.001;
    var itemSlot = {};
    return function(item, isHorizontal, fillGaps, rounding, trackSize) {
      var layout = this._layout;
      var freeSlots = this._freeSlots;
      var newSlots = this._newSlots;
      var rect;
      var rectId;
      var potentialSlots;
      var ignoreCurrentSlots;
      var i;
      var ii;

      // Reset new slots.
      newSlots.length = 0;

      // Set item slot initial data.
      itemSlot.left = null;
      itemSlot.top = null;
      itemSlot.width = item._width + item._marginLeft + item._marginRight;
      itemSlot.height = item._height + item._marginTop + item._marginBottom;

      // Round item slot width and height if needed.
      if (rounding) {
        itemSlot.width = Math.round(itemSlot.width);
        itemSlot.height = Math.round(itemSlot.height);
      }

      // Try to find a slot for the item.
      for (i = 0; i < freeSlots.length; i++) {
        rectId = freeSlots[i];
        if (!rectId) continue;
        rect = this._getRect(rectId);
        if (itemSlot.width <= rect.width + eps && itemSlot.height <= rect.height + eps) {
          itemSlot.left = rect.left;
          itemSlot.top = rect.top;
          break;
        }
      }

      // If no slot was found for the item.
      if (itemSlot.left === null) {
        // Position the item in to the bottom left (vertical mode) or top right
        // (horizontal mode) of the grid.
        itemSlot.left = !isHorizontal ? 0 : layout.width;
        itemSlot.top = !isHorizontal ? layout.height : 0;

        // If gaps don't need filling do not add any current slots to the new
        // slots array.
        if (!fillGaps) {
          ignoreCurrentSlots = true;
        }
      }

      // In vertical mode, if the item's bottom overlaps the grid's bottom.
      if (!isHorizontal && itemSlot.top + itemSlot.height > layout.height) {
        // If item is not aligned to the left edge, create a new slot.
        if (itemSlot.left > 0) {
          newSlots.push(this._addRect(0, layout.height, itemSlot.left, Infinity));
        }

        // If item is not aligned to the right edge, create a new slot.
        if (itemSlot.left + itemSlot.width < layout.width) {
          newSlots.push(
            this._addRect(
              itemSlot.left + itemSlot.width,
              layout.height,
              layout.width - itemSlot.left - itemSlot.width,
              Infinity
            )
          );
        }

        // Update grid height.
        layout.height = itemSlot.top + itemSlot.height;
      }

      // In horizontal mode, if the item's right overlaps the grid's right edge.
      if (isHorizontal && itemSlot.left + itemSlot.width > layout.width) {
        // If item is not aligned to the top, create a new slot.
        if (itemSlot.top > 0) {
          newSlots.push(this._addRect(layout.width, 0, Infinity, itemSlot.top));
        }

        // If item is not aligned to the bottom, create a new slot.
        if (itemSlot.top + itemSlot.height < layout.height) {
          newSlots.push(
            this._addRect(
              layout.width,
              itemSlot.top + itemSlot.height,
              Infinity,
              layout.height - itemSlot.top - itemSlot.height
            )
          );
        }

        // Update grid width.
        layout.width = itemSlot.left + itemSlot.width;
      }

      // Clean up the current slots making sure there are no old slots that
      // overlap with the item. If an old slot overlaps with the item, split it
      // into smaller slots if necessary.
      for (i = fillGaps ? 0 : ignoreCurrentSlots ? freeSlots.length : i; i < freeSlots.length; i++) {
        rectId = freeSlots[i];
        if (!rectId) continue;
        rect = this._getRect(rectId);
        potentialSlots = this._splitRect(rect, itemSlot);
        for (ii = 0; ii < potentialSlots.length; ii++) {
          rectId = potentialSlots[ii];
          rect = this._getRect(rectId);
          // Let's make sure here that we have a big enough slot
          // (width/height > 0.49px) and also let's make sure that the slot is
          // within the boundaries of the grid.
          if (
            rect.width > 0.49 &&
            rect.height > 0.49 &&
            ((!isHorizontal && rect.top < layout.height) ||
              (isHorizontal && rect.left < layout.width))
          ) {
            newSlots.push(rectId);
          }
        }
      }

      // Sanitize new slots.
      if (newSlots.length) {
        this._purgeRects(newSlots).sort(
          isHorizontal ? this._sortRectsLeftTop : this._sortRectsTopLeft
        );
      }

      // Update layout width/height.
      if (isHorizontal) {
        layout.width = Math.max(layout.width, itemSlot.left + itemSlot.width);
      } else {
        layout.height = Math.max(layout.height, itemSlot.top + itemSlot.height);
      }

      // Add item slot data to layout slots (and store the slot size for later
      // usage too if necessary).
      layout.slots.push(itemSlot.left, itemSlot.top);
      if (trackSize) this._slotSizes.push(itemSlot.width, itemSlot.height);

      // Free/new slots switcheroo!
      this._freeSlots = newSlots;
      this._newSlots = freeSlots;
    };
  })();

  /**
   * Add a new rectangle to the rectangle store. Returns the id of the new
   * rectangle.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Number} left
   * @param {Number} top
   * @param {Number} width
   * @param {Number} height
   * @returns {RectId}
   */
  Packer.prototype._addRect = function(left, top, width, height) {
    var rectId = ++this._rectId;
    var rectStore = this._rectStore;

    rectStore[rectId] = left || 0;
    rectStore[++this._rectId] = top || 0;
    rectStore[++this._rectId] = width || 0;
    rectStore[++this._rectId] = height || 0;

    return rectId;
  };

  /**
   * Get rectangle data from the rectangle store by id. Optionally you can
   * provide a target object where the rectangle data will be written in. By
   * default an internal object is reused as a target object.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} id
   * @param {Object} [target]
   * @returns {Object}
   */
  Packer.prototype._getRect = function(id, target) {
    var rectItem = target ? target : this._rectItem;
    var rectStore = this._rectStore;

    rectItem.left = rectStore[id] || 0;
    rectItem.top = rectStore[++id] || 0;
    rectItem.width = rectStore[++id] || 0;
    rectItem.height = rectStore[++id] || 0;

    return rectItem;
  };

  /**
   * Punch a hole into a rectangle and split the remaining area into smaller
   * rectangles (4 at max).
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} rect
   * @param {Rectangle} hole
   * @returns {RectId[]}
   */
  Packer.prototype._splitRect = (function() {
    var results = [];
    return function(rect, hole) {
      // Reset old results.
      results.length = 0;

      // If the rect does not overlap with the hole add rect to the return data
      // as is.
      if (!this._doRectsOverlap(rect, hole)) {
        results.push(this._addRect(rect.left, rect.top, rect.width, rect.height));
        return results;
      }

      // Left split.
      if (rect.left < hole.left) {
        results.push(this._addRect(rect.left, rect.top, hole.left - rect.left, rect.height));
      }

      // Right split.
      if (rect.left + rect.width > hole.left + hole.width) {
        results.push(
          this._addRect(
            hole.left + hole.width,
            rect.top,
            rect.left + rect.width - (hole.left + hole.width),
            rect.height
          )
        );
      }

      // Top split.
      if (rect.top < hole.top) {
        results.push(this._addRect(rect.left, rect.top, rect.width, hole.top - rect.top));
      }

      // Bottom split.
      if (rect.top + rect.height > hole.top + hole.height) {
        results.push(
          this._addRect(
            rect.left,
            hole.top + hole.height,
            rect.width,
            rect.top + rect.height - (hole.top + hole.height)
          )
        );
      }

      return results;
    };
  })();

  /**
   * Check if two rectangles overlap.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Boolean}
   */
  Packer.prototype._doRectsOverlap = function(a, b) {
    return !(
      a.left + a.width <= b.left ||
      b.left + b.width <= a.left ||
      a.top + a.height <= b.top ||
      b.top + b.height <= a.top
    );
  };

  /**
   * Check if a rectangle is fully within another rectangle.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Boolean}
   */
  Packer.prototype._isRectWithinRect = function(a, b) {
    return (
      a.left >= b.left &&
      a.top >= b.top &&
      a.left + a.width <= b.left + b.width &&
      a.top + a.height <= b.top + b.height
    );
  };

  /**
   * Loops through an array of rectangle ids and resets all that are fully
   * within another rectangle in the array. Resetting in this case means that
   * the rectangle id value is replaced with zero.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId[]} rectIds
   * @returns {RectId[]}
   */
  Packer.prototype._purgeRects = (function() {
    var rectA = {};
    var rectB = {};
    return function(rectIds) {
      var i = rectIds.length;
      var ii;

      while (i--) {
        ii = rectIds.length;
        if (!rectIds[i]) continue;
        this._getRect(rectIds[i], rectA);
        while (ii--) {
          if (!rectIds[ii] || i === ii) continue;
          if (this._isRectWithinRect(rectA, this._getRect(rectIds[ii], rectB))) {
            rectIds[i] = 0;
            break;
          }
        }
      }

      return rectIds;
    };
  })();

  /**
   * Sort rectangles with top-left gravity.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} aId
   * @param {RectId} bId
   * @returns {Number}
   */
  Packer.prototype._sortRectsTopLeft = (function() {
    var rectA = {};
    var rectB = {};
    return function(aId, bId) {
      this._getRect(aId, rectA);
      this._getRect(bId, rectB);
      // prettier-ignore
      return rectA.top < rectB.top ? -1 :
             rectA.top > rectB.top ? 1 :
             rectA.left < rectB.left ? -1 :
             rectA.left > rectB.left ? 1 : 0;
    };
  })();

  /**
   * Sort rectangles with left-top gravity.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} aId
   * @param {RectId} bId
   * @returns {Number}
   */
  Packer.prototype._sortRectsLeftTop = (function() {
    var rectA = {};
    var rectB = {};
    return function(aId, bId) {
      this._getRect(aId, rectA);
      this._getRect(bId, rectB);
      // prettier-ignore
      return rectA.left < rectB.left ? -1 :
             rectA.left > rectB.left ? 1 :
             rectA.top < rectB.top ? -1 :
             rectA.top > rectB.top ? 1 : 0;
    };
  })();

  var htmlCollectionType = '[object HTMLCollection]';
  var nodeListType = '[object NodeList]';

  /**
   * Check if a value is a node list
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isNodeList(val) {
    var type = Object.prototype.toString.call(val);
    return type === htmlCollectionType || type === nodeListType;
  }

  var objectType = 'object';
  var objectToStringType = '[object Object]';
  var toString = Object.prototype.toString;

  /**
   * Check if a value is a plain object.
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isPlainObject(val) {
    return typeof val === objectType && toString.call(val) === objectToStringType;
  }

  /**
   * Converts a value to an array or clones an array.
   *
   * @param {*} target
   * @returns {Array}
   */
  function toArray(target) {
    return isNodeList(target) ? Array.prototype.slice.call(target) : Array.prototype.concat(target);
  }

  var packer = new Packer();
  var noop = function() {};

  var numberType$1 = 'number';
  var stringType = 'string';
  var instantLayout = 'instant';

  /**
   * Creates a new Grid instance.
   *
   * @class
   * @param {(HTMLElement|String)} element
   * @param {Object} [options]
   * @param {?(HTMLElement[]|NodeList|String)} [options.items]
   * @param {Number} [options.showDuration=300]
   * @param {String} [options.showEasing="ease"]
   * @param {Object} [options.visibleStyles]
   * @param {Number} [options.hideDuration=300]
   * @param {String} [options.hideEasing="ease"]
   * @param {Object} [options.hiddenStyles]
   * @param {(Function|Object)} [options.layout]
   * @param {Boolean} [options.layout.fillGaps=false]
   * @param {Boolean} [options.layout.horizontal=false]
   * @param {Boolean} [options.layout.alignRight=false]
   * @param {Boolean} [options.layout.alignBottom=false]
   * @param {Boolean} [options.layout.rounding=true]
   * @param {(Boolean|Number)} [options.layoutOnResize=100]
   * @param {Boolean} [options.layoutOnInit=true]
   * @param {Number} [options.layoutDuration=300]
   * @param {String} [options.layoutEasing="ease"]
   * @param {?Object} [options.sortData=null]
   * @param {Boolean} [options.dragEnabled=false]
   * @param {?HtmlElement} [options.dragContainer=null]
   * @param {?Function} [options.dragStartPredicate]
   * @param {Number} [options.dragStartPredicate.distance=0]
   * @param {Number} [options.dragStartPredicate.delay=0]
   * @param {(Boolean|String)} [options.dragStartPredicate.handle=false]
   * @param {?String} [options.dragAxis]
   * @param {(Boolean|Function)} [options.dragSort=true]
   * @param {Object} [options.dragSortHeuristics]
   * @param {Number} [options.dragSortHeuristics.sortInterval=100]
   * @param {Number} [options.dragSortHeuristics.minDragDistance=10]
   * @param {Number} [options.dragSortHeuristics.minBounceBackAngle=1]
   * @param {(Function|Object)} [options.dragSortPredicate]
   * @param {Number} [options.dragSortPredicate.threshold=50]
   * @param {String} [options.dragSortPredicate.action="move"]
   * @param {Number} [options.dragReleaseDuration=300]
   * @param {String} [options.dragReleaseEasing="ease"]
   * @param {Object} [options.dragCssProps]
   * @param {Object} [options.dragPlaceholder]
   * @param {Boolean} [options.dragPlaceholder.enabled=false]
   * @param {Number} [options.dragPlaceholder.duration=300]
   * @param {String} [options.dragPlaceholder.easing="ease"]
   * @param {?Function} [options.dragPlaceholder.createElement=null]
   * @param {?Function} [options.dragPlaceholder.onCreate=null]
   * @param {?Function} [options.dragPlaceholder.onRemove=null]
   * @param {String} [options.containerClass="muuri"]
   * @param {String} [options.itemClass="muuri-item"]
   * @param {String} [options.itemVisibleClass="muuri-item-visible"]
   * @param {String} [options.itemHiddenClass="muuri-item-hidden"]
   * @param {String} [options.itemPositioningClass="muuri-item-positioning"]
   * @param {String} [options.itemDraggingClass="muuri-item-dragging"]
   * @param {String} [options.itemReleasingClass="muuri-item-releasing"]
   * @param {String} [options.itemPlaceholderClass="muuri-item-placeholder"]
   */

  function Grid(element, options) {
    var inst = this;
    var settings;
    var items;
    var layoutOnResize;

    // Allow passing element as selector string. Store element for instance.
    element = this._element =
      typeof element === stringType ? window.document.querySelector(element) : element;

    // Throw an error if the container element is not body element or does not
    // exist within the body element.
    var isElementInDom = element.getRootNode
      ? element.getRootNode({ composed: true }) === document
      : window.document.body.contains(element);
    if (!isElementInDom || element === window.document.documentElement) {
      throw new Error('Container element must be an existing DOM element');
    }

    // Create instance settings by merging the options with default options.
    settings = this._settings = mergeSettings(Grid.defaultOptions, options);

    // Sanitize dragSort setting.
    if (!isFunction(settings.dragSort)) {
      settings.dragSort = !!settings.dragSort;
    }

    // Create instance id and store it to the grid instances collection.
    this._id = createUid();
    gridInstances[this._id] = inst;

    // Destroyed flag.
    this._isDestroyed = false;

    // The layout object (mutated on every layout).
    this._layout = {
      id: 0,
      items: [],
      slots: [],
      setWidth: false,
      setHeight: false,
      width: 0,
      height: 0
    };

    // Create private Emitter instance.
    this._emitter = new Emitter();

    // Add container element's class name.
    addClass(element, settings.containerClass);

    // Create initial items.
    this._items = [];
    items = settings.items;
    if (typeof items === stringType) {
      toArray(element.children).forEach(function(itemElement) {
        if (items === '*' || elementMatches(itemElement, items)) {
          inst._items.push(new Item(inst, itemElement));
        }
      });
    } else if (Array.isArray(items) || isNodeList(items)) {
      this._items = toArray(items).map(function(itemElement) {
        return new Item(inst, itemElement);
      });
    }

    // If layoutOnResize option is a valid number sanitize it and bind the resize
    // handler.
    layoutOnResize = settings.layoutOnResize;
    if (typeof layoutOnResize !== numberType$1) {
      layoutOnResize = layoutOnResize === true ? 0 : -1;
    }
    if (layoutOnResize >= 0) {
      window.addEventListener(
        'resize',
        (inst._resizeHandler = debounce(function() {
          inst.refreshItems().layout();
        }, layoutOnResize))
      );
    }

    // Layout on init if necessary.
    if (settings.layoutOnInit) {
      this.layout(true);
    }
  }

  /**
   * Public properties
   * *****************
   */

  /**
   * @see Item
   */
  Grid.Item = Item;

  /**
   * @see ItemLayout
   */
  Grid.ItemLayout = ItemLayout;

  /**
   * @see ItemVisibility
   */
  Grid.ItemVisibility = ItemVisibility;

  /**
   * @see ItemMigrate
   */
  Grid.ItemMigrate = ItemMigrate;

  /**
   * @see ItemAnimate
   */
  Grid.ItemAnimate = ItemAnimate;

  /**
   * @see ItemDrag
   */
  Grid.ItemDrag = ItemDrag;

  /**
   * @see ItemRelease
   */
  Grid.ItemRelease = ItemRelease;

  /**
   * @see ItemDragPlaceholder
   */
  Grid.ItemDragPlaceholder = ItemDragPlaceholder;

  /**
   * @see Emitter
   */
  Grid.Emitter = Emitter;

  /**
   * @see Dragger
   */
  Grid.Dragger = Dragger;

  /**
   * @see Packer
   */
  Grid.Packer = Packer;

  /**
   * Default options for Grid instance.
   *
   * @public
   * @memberof Grid
   */
  Grid.defaultOptions = {
    // Item elements
    items: '*',

    // Default show animation
    showDuration: 300,
    showEasing: 'ease',

    // Default hide animation
    hideDuration: 300,
    hideEasing: 'ease',

    // Item's visible/hidden state styles
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    },

    // Layout
    layout: {
      fillGaps: false,
      horizontal: false,
      alignRight: false,
      alignBottom: false,
      rounding: true
    },
    layoutOnResize: 100,
    layoutOnInit: true,
    layoutDuration: 300,
    layoutEasing: 'ease',

    // Sorting
    sortData: null,

    // Drag & Drop
    dragEnabled: false,
    dragContainer: null,
    dragStartPredicate: {
      distance: 0,
      delay: 0,
      handle: false
    },
    dragAxis: null,
    dragSort: true,
    dragSortHeuristics: {
      sortInterval: 100,
      minDragDistance: 10,
      minBounceBackAngle: 1
    },
    dragSortPredicate: {
      threshold: 50,
      action: actionMove
    },
    dragReleaseDuration: 300,
    dragReleaseEasing: 'ease',
    dragCssProps: {
      touchAction: 'none',
      userSelect: 'none',
      userDrag: 'none',
      tapHighlightColor: 'rgba(0, 0, 0, 0)',
      touchCallout: 'none',
      contentZooming: 'none'
    },
    dragPlaceholder: {
      enabled: false,
      duration: 300,
      easing: 'ease',
      createElement: null,
      onCreate: null,
      onRemove: null
    },

    // Classnames
    containerClass: 'muuri',
    itemClass: 'muuri-item',
    itemVisibleClass: 'muuri-item-shown',
    itemHiddenClass: 'muuri-item-hidden',
    itemPositioningClass: 'muuri-item-positioning',
    itemDraggingClass: 'muuri-item-dragging',
    itemReleasingClass: 'muuri-item-releasing',
    itemPlaceholderClass: 'muuri-item-placeholder'
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Bind an event listener.
   *
   * @public
   * @memberof Grid.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Grid}
   */
  Grid.prototype.on = function(event, listener) {
    this._emitter.on(event, listener);
    return this;
  };

  /**
   * Unbind an event listener.
   *
   * @public
   * @memberof Grid.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Grid}
   */
  Grid.prototype.off = function(event, listener) {
    this._emitter.off(event, listener);
    return this;
  };

  /**
   * Get the container element.
   *
   * @public
   * @memberof Grid.prototype
   * @returns {HTMLElement}
   */
  Grid.prototype.getElement = function() {
    return this._element;
  };

  /**
   * Get all items. Optionally you can provide specific targets (elements and
   * indices). Note that the returned array is not the same object used by the
   * instance so modifying it will not affect instance's items. All items that
   * are not found are omitted from the returned array.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [targets]
   * @returns {Item[]}
   */
  Grid.prototype.getItems = function(targets) {
    // Return all items immediately if no targets were provided or if the
    // instance is destroyed.
    if (this._isDestroyed || (!targets && targets !== 0)) {
      return this._items.slice(0);
    }

    var ret = [];
    var targetItems = toArray(targets);
    var item;
    var i;

    // If target items are defined return filtered results.
    for (i = 0; i < targetItems.length; i++) {
      item = this._getItem(targetItems[i]);
      item && ret.push(item);
    }

    return ret;
  };

  /**
   * Update the cached dimensions of the instance's items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [items]
   * @returns {Grid}
   */
  Grid.prototype.refreshItems = function(items) {
    if (this._isDestroyed) return this;

    var targets = this.getItems(items);
    var i;

    for (i = 0; i < targets.length; i++) {
      targets[i]._refreshDimensions();
    }

    return this;
  };

  /**
   * Update the sort data of the instance's items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [items]
   * @returns {Grid}
   */
  Grid.prototype.refreshSortData = function(items) {
    if (this._isDestroyed) return this;

    var targetItems = this.getItems(items);
    var i;

    for (i = 0; i < targetItems.length; i++) {
      targetItems[i]._refreshSortData();
    }

    return this;
  };

  /**
   * Synchronize the item elements to match the order of the items in the DOM.
   * This comes handy if you need to keep the DOM structure matched with the
   * order of the items. Note that if an item's element is not currently a child
   * of the container element (if it is dragged for example) it is ignored and
   * left untouched.
   *
   * @public
   * @memberof Grid.prototype
   * @returns {Grid}
   */
  Grid.prototype.synchronize = function() {
    if (this._isDestroyed) return this;

    var container = this._element;
    var items = this._items;
    var fragment;
    var element;
    var i;

    // Append all elements in order to the container element.
    if (items.length) {
      for (i = 0; i < items.length; i++) {
        element = items[i]._element;
        if (element.parentNode === container) {
          fragment = fragment || window.document.createDocumentFragment();
          fragment.appendChild(element);
        }
      }

      if (fragment) container.appendChild(fragment);
    }

    // Emit synchronize event.
    this._emit(eventSynchronize);

    return this;
  };

  /**
   * Calculate and apply item positions.
   *
   * @public
   * @memberof Grid.prototype
   * @param {Boolean} [instant=false]
   * @param {LayoutCallback} [onFinish]
   * @returns {Grid}
   */
  Grid.prototype.layout = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var inst = this;
    var element = this._element;
    var layout = this._updateLayout();
    var layoutId = layout.id;
    var itemsLength = layout.items.length;
    var counter = itemsLength;
    var isBorderBox;
    var item;
    var i;

    // The finish function, which will be used for checking if all the items
    // have laid out yet. After all items have finished their animations call
    // callback and emit layoutEnd event. Only emit layoutEnd event if there
    // hasn't been a new layout call during this layout.
    function tryFinish() {
      if (--counter > 0) return;

      var hasLayoutChanged = inst._layout.id !== layoutId;
      var callback = isFunction(instant) ? instant : onFinish;

      if (isFunction(callback)) {
        callback(hasLayoutChanged, layout.items.slice(0));
      }

      if (!hasLayoutChanged && inst._hasListeners(eventLayoutEnd)) {
        inst._emit(eventLayoutEnd, layout.items.slice(0));
      }
    }

    // If grid's width or height was modified, we need to update it's cached
    // dimensions. Also keep in mind that grid's cached width/height should
    // always equal to what elem.getBoundingClientRect() would return, so
    // therefore we need to add the grid element's borders to the dimensions if
    // it's box-sizing is border-box. Note that we support providing the
    // dimensions as a string here too so that one can define the unit of the
    // dimensions, in which case we don't do the border-box check.
    if (
      (layout.setHeight && typeof layout.height === numberType$1) ||
      (layout.setWidth && typeof layout.width === numberType$1)
    ) {
      isBorderBox = getStyle(element, 'box-sizing') === 'border-box';
    }
    if (layout.setHeight) {
      if (typeof layout.height === numberType$1) {
        element.style.height =
          (isBorderBox ? layout.height + this._borderTop + this._borderBottom : layout.height) + 'px';
      } else {
        element.style.height = layout.height;
      }
    }
    if (layout.setWidth) {
      if (typeof layout.width === numberType$1) {
        element.style.width =
          (isBorderBox ? layout.width + this._borderLeft + this._borderRight : layout.width) + 'px';
      } else {
        element.style.width = layout.width;
      }
    }

    // Emit layoutStart event. Note that this is intentionally emitted after the
    // container element's dimensions are set, because otherwise there would be
    // no hook for reacting to container dimension changes.
    if (this._hasListeners(eventLayoutStart)) {
      this._emit(eventLayoutStart, layout.items.slice(0));
    }

    // If there are no items let's finish quickly.
    if (!itemsLength) {
      tryFinish();
      return this;
    }

    // If there are items let's position them.
    for (i = 0; i < itemsLength; i++) {
      item = layout.items[i];
      if (!item) continue;

      // Update item's position.
      item._left = layout.slots[i * 2];
      item._top = layout.slots[i * 2 + 1];

      // Layout item if it is not dragged.
      item.isDragging() ? tryFinish() : item._layout.start(instant === true, tryFinish);
    }

    return this;
  };

  /**
   * Add new items by providing the elements you wish to add to the instance and
   * optionally provide the index where you want the items to be inserted into.
   * All elements that are not already children of the container element will be
   * automatically appended to the container element. If an element has it's CSS
   * display property set to "none" it will be marked as inactive during the
   * initiation process. As long as the item is inactive it will not be part of
   * the layout, but it will retain it's index. You can activate items at any
   * point with grid.show() method. This method will automatically call
   * grid.layout() if one or more of the added elements are visible. If only
   * hidden items are added no layout will be called. All the new visible items
   * are positioned without animation during their first layout.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(HTMLElement|HTMLElement[])} elements
   * @param {Object} [options]
   * @param {Number} [options.index=-1]
   * @param {Boolean} [options.isActive]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Item[]}
   */
  Grid.prototype.add = function(elements, options) {
    if (this._isDestroyed || !elements) return [];

    var newItems = toArray(elements);
    if (!newItems.length) return newItems;

    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var items = this._items;
    var needsLayout = false;
    var item;
    var i;

    // Map provided elements into new grid items.
    for (i = 0; i < newItems.length; i++) {
      item = new Item(this, newItems[i], opts.isActive);
      newItems[i] = item;

      // If the item to be added is active, we need to do a layout. Also, we
      // need to mark the item with the skipNextAnimation flag to make it
      // position instantly (without animation) during the next layout. Without
      // the hack the item would animate to it's new position from the northwest
      // corner of the grid, which feels a bit buggy (imho).
      if (item._isActive) {
        needsLayout = true;
        item._layout._skipNextAnimation = true;
      }
    }

    // Add the new items to the items collection to correct index.
    arrayInsert(items, newItems, opts.index);

    // Emit add event.
    if (this._hasListeners(eventAdd)) {
      this._emit(eventAdd, newItems.slice(0));
    }

    // If layout is needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }

    return newItems;
  };

  /**
   * Remove items from the instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.removeElements=false]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Item[]}
   */
  Grid.prototype.remove = function(items, options) {
    if (this._isDestroyed) return this;

    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var needsLayout = false;
    var allItems = this.getItems();
    var targetItems = this.getItems(items);
    var indices = [];
    var item;
    var i;

    // Remove the individual items.
    for (i = 0; i < targetItems.length; i++) {
      item = targetItems[i];
      indices.push(allItems.indexOf(item));
      if (item._isActive) needsLayout = true;
      item._destroy(opts.removeElements);
    }

    // Emit remove event.
    if (this._hasListeners(eventRemove)) {
      this._emit(eventRemove, targetItems.slice(0), indices);
    }

    // If layout is needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }

    return targetItems;
  };

  /**
   * Show instance items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {ShowCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.show = function(items, options) {
    if (this._isDestroyed) return this;
    this._setItemsVisibility(items, true, options);
    return this;
  };

  /**
   * Hide instance items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {HideCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.hide = function(items, options) {
    if (this._isDestroyed) return this;
    this._setItemsVisibility(items, false, options);
    return this;
  };

  /**
   * Filter items. Expects at least one argument, a predicate, which should be
   * either a function or a string. The predicate callback is executed for every
   * item in the instance. If the return value of the predicate is truthy the
   * item in question will be shown and otherwise hidden. The predicate callback
   * receives the item instance as it's argument. If the predicate is a string
   * it is considered to be a selector and it is checked against every item
   * element in the instance with the native element.matches() method. All the
   * matching items will be shown and others hidden.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(Function|String)} predicate
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {FilterCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.filter = function(predicate, options) {
    if (this._isDestroyed || !this._items.length) return this;

    var itemsToShow = [];
    var itemsToHide = [];
    var isPredicateString = typeof predicate === stringType;
    var isPredicateFn = isFunction(predicate);
    var opts = options || 0;
    var isInstant = opts.instant === true;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var onFinish = isFunction(opts.onFinish) ? opts.onFinish : null;
    var tryFinishCounter = -1;
    var tryFinish = noop;
    var item;
    var i;

    // If we have onFinish callback, let's create proper tryFinish callback.
    if (onFinish) {
      tryFinish = function() {
        ++tryFinishCounter && onFinish(itemsToShow.slice(0), itemsToHide.slice(0));
      };
    }

    // Check which items need to be shown and which hidden.
    if (isPredicateFn || isPredicateString) {
      for (i = 0; i < this._items.length; i++) {
        item = this._items[i];
        if (isPredicateFn ? predicate(item) : elementMatches(item._element, predicate)) {
          itemsToShow.push(item);
        } else {
          itemsToHide.push(item);
        }
      }
    }

    // Show items that need to be shown.
    if (itemsToShow.length) {
      this.show(itemsToShow, {
        instant: isInstant,
        onFinish: tryFinish,
        layout: false
      });
    } else {
      tryFinish();
    }

    // Hide items that need to be hidden.
    if (itemsToHide.length) {
      this.hide(itemsToHide, {
        instant: isInstant,
        onFinish: tryFinish,
        layout: false
      });
    } else {
      tryFinish();
    }

    // If there are any items to filter.
    if (itemsToShow.length || itemsToHide.length) {
      // Emit filter event.
      if (this._hasListeners(eventFilter)) {
        this._emit(eventFilter, itemsToShow.slice(0), itemsToHide.slice(0));
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }
    }

    return this;
  };

  /**
   * Sort items. There are three ways to sort the items. The first is simply by
   * providing a function as the comparer which works identically to native
   * array sort. Alternatively you can sort by the sort data you have provided
   * in the instance's options. Just provide the sort data key(s) as a string
   * (separated by space) and the items will be sorted based on the provided
   * sort data keys. Lastly you have the opportunity to provide a presorted
   * array of items which will be used to sync the internal items array in the
   * same order.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(Function|Item[]|String|String[])} comparer
   * @param {Object} [options]
   * @param {Boolean} [options.descending=false]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.sort = (function() {
    var sortComparer;
    var isDescending;
    var origItems;
    var indexMap;

    function parseCriteria(data) {
      return data
        .trim()
        .split(' ')
        .map(function(val) {
          return val.split(':');
        });
    }

    function getIndexMap(items) {
      var ret = {};
      for (var i = 0; i < items.length; i++) {
        ret[items[i]._id] = i;
      }
      return ret;
    }

    function compareIndices(itemA, itemB) {
      var indexA = indexMap[itemA._id];
      var indexB = indexMap[itemB._id];
      return isDescending ? indexB - indexA : indexA - indexB;
    }

    function defaultComparer(a, b) {
      var result = 0;
      var criteriaName;
      var criteriaOrder;
      var valA;
      var valB;

      // Loop through the list of sort criteria.
      for (var i = 0; i < sortComparer.length; i++) {
        // Get the criteria name, which should match an item's sort data key.
        criteriaName = sortComparer[i][0];
        criteriaOrder = sortComparer[i][1];

        // Get items' cached sort values for the criteria. If the item has no sort
        // data let's update the items sort data (this is a lazy load mechanism).
        valA = (a._sortData ? a : a._refreshSortData())._sortData[criteriaName];
        valB = (b._sortData ? b : b._refreshSortData())._sortData[criteriaName];

        // Sort the items in descending order if defined so explicitly. Otherwise
        // sort items in ascending order.
        if (criteriaOrder === 'desc' || (!criteriaOrder && isDescending)) {
          result = valB < valA ? -1 : valB > valA ? 1 : 0;
        } else {
          result = valA < valB ? -1 : valA > valB ? 1 : 0;
        }

        // If we have -1 or 1 as the return value, let's return it immediately.
        if (result) return result;
      }

      // If values are equal let's compare the item indices to make sure we
      // have a stable sort.
      if (!result) {
        if (!indexMap) indexMap = getIndexMap(origItems);
        result = compareIndices(a, b);
      }
      return result;
    }

    function customComparer(a, b) {
      var result = sortComparer(a, b);
      // If descending let's invert the result value.
      if (isDescending && result) result = -result;
      // If we have a valid result (not zero) let's return it right away.
      if (result) return result;
      // If result is zero let's compare the item indices to make sure we have a
      // stable sort.
      if (!indexMap) indexMap = getIndexMap(origItems);
      return compareIndices(a, b);
    }

    return function(comparer, options) {
      if (this._isDestroyed || this._items.length < 2) return this;

      var items = this._items;
      var opts = options || 0;
      var layout = opts.layout ? opts.layout : opts.layout === undefined;
      var i;

      // Setup parent scope data.
      sortComparer = comparer;
      isDescending = !!opts.descending;
      origItems = items.slice(0);
      indexMap = null;

      // If function is provided do a native array sort.
      if (isFunction(sortComparer)) {
        items.sort(customComparer);
      }
      // Otherwise if we got a string, let's sort by the sort data as provided in
      // the instance's options.
      else if (typeof sortComparer === stringType) {
        sortComparer = parseCriteria(comparer);
        items.sort(defaultComparer);
      }
      // Otherwise if we got an array, let's assume it's a presorted array of the
      // items and order the items based on it.
      else if (Array.isArray(sortComparer)) {
        if (sortComparer.length !== items.length) {
          throw new Error('[' + namespace + '] sort reference items do not match with grid items.');
        }
        for (i = 0; i < items.length; i++) {
          if (sortComparer.indexOf(items[i]) < 0) {
            throw new Error('[' + namespace + '] sort reference items do not match with grid items.');
          }
          items[i] = sortComparer[i];
        }
        if (isDescending) items.reverse();
      }
      // Otherwise let's just skip it, nothing we can do here.
      else {
        /** @todo Maybe throw an error here? */
        return this;
      }

      // Emit sort event.
      if (this._hasListeners(eventSort)) {
        this._emit(eventSort, items.slice(0), origItems);
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }

      return this;
    };
  })();

  /**
   * Move item to another index or in place of another item.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} item
   * @param {GridSingleItemQuery} position
   * @param {Object} [options]
   * @param {String} [options.action="move"]
   *   - Accepts either "move" or "swap".
   *   - "move" moves the item in place of the other item.
   *   - "swap" swaps the position of the items.
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.move = function(item, position, options) {
    if (this._isDestroyed || this._items.length < 2) return this;

    var items = this._items;
    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var isSwap = opts.action === actionSwap;
    var action = isSwap ? actionSwap : actionMove;
    var fromItem = this._getItem(item);
    var toItem = this._getItem(position);
    var fromIndex;
    var toIndex;

    // Make sure the items exist and are not the same.
    if (fromItem && toItem && fromItem !== toItem) {
      // Get the indices of the items.
      fromIndex = items.indexOf(fromItem);
      toIndex = items.indexOf(toItem);

      // Do the move/swap.
      if (isSwap) {
        arraySwap(items, fromIndex, toIndex);
      } else {
        arrayMove(items, fromIndex, toIndex);
      }

      // Emit move event.
      if (this._hasListeners(eventMove)) {
        this._emit(eventMove, {
          item: fromItem,
          fromIndex: fromIndex,
          toIndex: toIndex,
          action: action
        });
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }
    }

    return this;
  };

  /**
   * Send item to another Grid instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} item
   * @param {Grid} grid
   * @param {GridSingleItemQuery} position
   * @param {Object} [options]
   * @param {HTMLElement} [options.appendTo=document.body]
   * @param {(Boolean|LayoutCallback|String)} [options.layoutSender=true]
   * @param {(Boolean|LayoutCallback|String)} [options.layoutReceiver=true]
   * @returns {Grid}
   */
  Grid.prototype.send = function(item, grid, position, options) {
    if (this._isDestroyed || grid._isDestroyed || this === grid) return this;

    // Make sure we have a valid target item.
    item = this._getItem(item);
    if (!item) return this;

    var opts = options || 0;
    var container = opts.appendTo || window.document.body;
    var layoutSender = opts.layoutSender ? opts.layoutSender : opts.layoutSender === undefined;
    var layoutReceiver = opts.layoutReceiver
      ? opts.layoutReceiver
      : opts.layoutReceiver === undefined;

    // Start the migration process.
    item._migrate.start(grid, position, container);

    // If migration was started successfully and the item is active, let's layout
    // the grids.
    if (item._migrate._isActive && item._isActive) {
      if (layoutSender) {
        this.layout(
          layoutSender === instantLayout,
          isFunction(layoutSender) ? layoutSender : undefined
        );
      }
      if (layoutReceiver) {
        grid.layout(
          layoutReceiver === instantLayout,
          isFunction(layoutReceiver) ? layoutReceiver : undefined
        );
      }
    }

    return this;
  };

  /**
   * Destroy the instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {Boolean} [removeElements=false]
   * @returns {Grid}
   */
  Grid.prototype.destroy = function(removeElements) {
    if (this._isDestroyed) return this;

    var container = this._element;
    var items = this._items.slice(0);
    var i;

    // Unbind window resize event listener.
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
    }

    // Destroy items.
    for (i = 0; i < items.length; i++) {
      items[i]._destroy(removeElements);
    }

    // Restore container.
    removeClass(container, this._settings.containerClass);
    container.style.height = '';
    container.style.width = '';

    // Emit destroy event and unbind all events.
    this._emit(eventDestroy);
    this._emitter.destroy();

    // Remove reference from the grid instances collection.
    gridInstances[this._id] = undefined;

    // Flag instance as destroyed.
    this._isDestroyed = true;

    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Get instance's item by element or by index. Target can also be an Item
   * instance in which case the function returns the item if it exists within
   * related Grid instance. If nothing is found with the provided target, null
   * is returned.
   *
   * @private
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} [target]
   * @returns {?Item}
   */
  Grid.prototype._getItem = function(target) {
    // If no target is specified or the instance is destroyed, return null.
    if (this._isDestroyed || (!target && target !== 0)) {
      return null;
    }

    // If target is number return the item in that index. If the number is lower
    // than zero look for the item starting from the end of the items array. For
    // example -1 for the last item, -2 for the second last item, etc.
    if (typeof target === numberType$1) {
      return this._items[target > -1 ? target : this._items.length + target] || null;
    }

    // If the target is an instance of Item return it if it is attached to this
    // Grid instance, otherwise return null.
    if (target instanceof Item) {
      return target._gridId === this._id ? target : null;
    }

    // In other cases let's assume that the target is an element, so let's try
    // to find an item that matches the element and return it. If item is not
    // found return null.
    /** @todo This could be made a lot faster by using Map/WeakMap of elements. */
    for (var i = 0; i < this._items.length; i++) {
      if (this._items[i]._element === target) {
        return this._items[i];
      }
    }

    return null;
  };

  /**
   * Recalculates and updates instance's layout data.
   *
   * @private
   * @memberof Grid.prototype
   * @returns {LayoutData}
   */
  Grid.prototype._updateLayout = function() {
    var layout = this._layout;
    var settings = this._settings.layout;
    var width;
    var height;
    var newLayout;
    var i;

    // Let's increment layout id.
    ++layout.id;

    // Let's update layout items
    layout.items.length = 0;
    for (i = 0; i < this._items.length; i++) {
      if (this._items[i]._isActive) layout.items.push(this._items[i]);
    }

    // Let's make sure we have the correct container dimensions.
    this._refreshDimensions();

    // Calculate container width and height (without borders).
    width = this._width - this._borderLeft - this._borderRight;
    height = this._height - this._borderTop - this._borderBottom;

    // Calculate new layout.
    if (isFunction(settings)) {
      newLayout = settings(layout.items, width, height);
    } else {
      newLayout = packer.getLayout(layout.items, width, height, layout.slots, settings);
    }

    // Let's update the grid's layout.
    layout.slots = newLayout.slots;
    layout.setWidth = Boolean(newLayout.setWidth);
    layout.setHeight = Boolean(newLayout.setHeight);
    layout.width = newLayout.width;
    layout.height = newLayout.height;

    return layout;
  };

  /**
   * Emit a grid event.
   *
   * @private
   * @memberof Grid.prototype
   * @param {String} event
   * @param {...*} [arg]
   */
  Grid.prototype._emit = function() {
    if (this._isDestroyed) return;
    this._emitter.emit.apply(this._emitter, arguments);
  };

  /**
   * Check if there are any events listeners for an event.
   *
   * @private
   * @memberof Grid.prototype
   * @param {String} event
   * @returns {Boolean}
   */
  Grid.prototype._hasListeners = function(event) {
    var listeners = this._emitter._events[event];
    return !!(listeners && listeners.length);
  };

  /**
   * Update container's width, height and offsets.
   *
   * @private
   * @memberof Grid.prototype
   */
  Grid.prototype._updateBoundingRect = function() {
    var element = this._element;
    var rect = element.getBoundingClientRect();
    this._width = rect.width;
    this._height = rect.height;
    this._left = rect.left;
    this._top = rect.top;
  };

  /**
   * Update container's border sizes.
   *
   * @private
   * @memberof Grid.prototype
   * @param {Boolean} left
   * @param {Boolean} right
   * @param {Boolean} top
   * @param {Boolean} bottom
   */
  Grid.prototype._updateBorders = function(left, right, top, bottom) {
    var element = this._element;
    if (left) this._borderLeft = getStyleAsFloat(element, 'border-left-width');
    if (right) this._borderRight = getStyleAsFloat(element, 'border-right-width');
    if (top) this._borderTop = getStyleAsFloat(element, 'border-top-width');
    if (bottom) this._borderBottom = getStyleAsFloat(element, 'border-bottom-width');
  };

  /**
   * Refresh all of container's internal dimensions and offsets.
   *
   * @private
   * @memberof Grid.prototype
   */
  Grid.prototype._refreshDimensions = function() {
    this._updateBoundingRect();
    this._updateBorders(1, 1, 1, 1);
  };

  /**
   * Show or hide Grid instance's items.
   *
   * @private
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Boolean} toVisible
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {(ShowCallback|HideCallback)} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   */
  Grid.prototype._setItemsVisibility = function(items, toVisible, options) {
    var grid = this;
    var targetItems = this.getItems(items);
    var opts = options || 0;
    var isInstant = opts.instant === true;
    var callback = opts.onFinish;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var counter = targetItems.length;
    var startEvent = toVisible ? eventShowStart : eventHideStart;
    var endEvent = toVisible ? eventShowEnd : eventHideEnd;
    var method = toVisible ? 'show' : 'hide';
    var needsLayout = false;
    var completedItems = [];
    var hiddenItems = [];
    var item;
    var i;

    // If there are no items call the callback, but don't emit any events.
    if (!counter) {
      if (isFunction(callback)) callback(targetItems);
      return;
    }

    // Emit showStart/hideStart event.
    if (this._hasListeners(startEvent)) {
      this._emit(startEvent, targetItems.slice(0));
    }

    // Show/hide items.
    for (i = 0; i < targetItems.length; i++) {
      item = targetItems[i];

      // If inactive item is shown or active item is hidden we need to do
      // layout.
      if ((toVisible && !item._isActive) || (!toVisible && item._isActive)) {
        needsLayout = true;
      }

      // If inactive item is shown we also need to do a little hack to make the
      // item not animate it's next positioning (layout).
      if (toVisible && !item._isActive) {
        item._layout._skipNextAnimation = true;
      }

      // If a hidden item is being shown we need to refresh the item's
      // dimensions.
      if (toVisible && item._visibility._isHidden) {
        hiddenItems.push(item);
      }

      // Show/hide the item.
      item._visibility[method](isInstant, function(interrupted, item) {
        // If the current item's animation was not interrupted add it to the
        // completedItems array.
        if (!interrupted) completedItems.push(item);

        // If all items have finished their animations call the callback
        // and emit showEnd/hideEnd event.
        if (--counter < 1) {
          if (isFunction(callback)) callback(completedItems.slice(0));
          if (grid._hasListeners(endEvent)) grid._emit(endEvent, completedItems.slice(0));
        }
      });
    }

    // Refresh hidden items.
    if (hiddenItems.length) this.refreshItems(hiddenItems);

    // Layout if needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }
  };

  /**
   * Private helpers
   * ***************
   */

  /**
   * Merge default settings with user settings. The returned object is a new
   * object with merged values. The merging is a deep merge meaning that all
   * objects and arrays within the provided settings objects will be also merged
   * so that modifying the values of the settings object will have no effect on
   * the returned object.
   *
   * @param {Object} defaultSettings
   * @param {Object} [userSettings]
   * @returns {Object} Returns a new object.
   */
  function mergeSettings(defaultSettings, userSettings) {
    // Create a fresh copy of default settings.
    var ret = mergeObjects({}, defaultSettings);

    // Merge user settings to default settings.
    if (userSettings) {
      ret = mergeObjects(ret, userSettings);
    }

    // Handle visible/hidden styles manually so that the whole object is
    // overridden instead of the props.
    ret.visibleStyles = (userSettings || 0).visibleStyles || (defaultSettings || 0).visibleStyles;
    ret.hiddenStyles = (userSettings || 0).hiddenStyles || (defaultSettings || 0).hiddenStyles;

    return ret;
  }

  /**
   * Merge two objects recursively (deep merge). The source object's properties
   * are merged to the target object.
   *
   * @param {Object} target
   *   - The target object.
   * @param {Object} source
   *   - The source object.
   * @returns {Object} Returns the target object.
   */
  function mergeObjects(target, source) {
    var sourceKeys = Object.keys(source);
    var length = sourceKeys.length;
    var isSourceObject;
    var propName;
    var i;

    for (i = 0; i < length; i++) {
      propName = sourceKeys[i];
      isSourceObject = isPlainObject(source[propName]);

      // If target and source values are both objects, merge the objects and
      // assign the merged value to the target property.
      if (isPlainObject(target[propName]) && isSourceObject) {
        target[propName] = mergeObjects(mergeObjects({}, target[propName]), source[propName]);
        continue;
      }

      // If source's value is object and target's is not let's clone the object as
      // the target's value.
      if (isSourceObject) {
        target[propName] = mergeObjects({}, source[propName]);
        continue;
      }

      // If source's value is an array let's clone the array as the target's
      // value.
      if (Array.isArray(source[propName])) {
        target[propName] = source[propName].slice(0);
        continue;
      }

      // In all other cases let's just directly assign the source's value as the
      // target's value.
      target[propName] = source[propName];
    }

    return target;
  }

  return Grid;

}));


/***/ }),

/***/ "./src/alternativeVizualizersWrapper.ts":
/*!**********************************************!*\
  !*** ./src/alternativeVizualizersWrapper.ts ***!
  \**********************************************/
/*! exports provided: AlternativeVisualizersWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlternativeVisualizersWrapper", function() { return AlternativeVisualizersWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/index */ "./src/utils/index.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualizationManager */ "./src/visualizationManager.ts");





var AlternativeVisualizersWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlternativeVisualizersWrapper, _super);
    function AlternativeVisualizersWrapper(visualizers, question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.visualizers = visualizers;
        if (!visualizers || visualizers.length < 2) {
            throw new Error("VisualizerArrayWrapper works with visualizers collection only.");
        }
        _this.visualizers.forEach(function (visualizer) {
            visualizer.onUpdate = function () { return _this.invokeOnUpdate(); };
        });
        _this.registerToolbarItem("changeVisualizer", function () {
            return _utils_index__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createSelector(_this.visualizers.map(function (visualizer) {
                return {
                    value: visualizer.name,
                    text: _localizationManager__WEBPACK_IMPORTED_MODULE_2__["localization"].getString("visualizer_" + visualizer.name),
                };
            }), function (option) { return _this.visualizer.name === option.value; }, function (e) { return _this.setVisualizer(e.target.value); });
        });
        _this.visualizer = visualizers[0];
        return _this;
    }
    AlternativeVisualizersWrapper.prototype.setVisualizer = function (name) {
        if (!!this.visualizer) {
            this.visualizer.destroy();
        }
        this.visualizer = this.visualizers.filter(function (v) { return v.name === name; })[0];
        this.refresh();
    };
    AlternativeVisualizersWrapper.prototype.updateData = function (data) {
        _super.prototype.updateData.call(this, data);
        this.visualizers.forEach(function (visualizer) {
            visualizer.updateData(data);
        });
    };
    AlternativeVisualizersWrapper.prototype.renderContent = function (container) {
        this.visualizerContainer = container;
        this.visualizer.render(this.visualizerContainer);
    };
    AlternativeVisualizersWrapper.prototype.destroy = function () {
        this.visualizers.forEach(function (visualizer) {
            visualizer.onUpdate = undefined;
        });
        this.visualizer.destroy();
        _super.prototype.destroy.call(this);
    };
    return AlternativeVisualizersWrapper;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_1__["VisualizerBase"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_4__["VisualizationManager"].registerAlternativesVisualizer(AlternativeVisualizersWrapper);


/***/ }),

/***/ "./src/boolean.ts":
/*!************************!*\
  !*** ./src/boolean.ts ***!
  \************************/
/*! exports provided: BooleanModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanModel", function() { return BooleanModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectBase */ "./src/selectBase.ts");



var BooleanModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BooleanModel, _super);
    function BooleanModel(question, data, options) {
        return _super.call(this, question, data, options, name || "boolean") || this;
    }
    Object.defineProperty(BooleanModel.prototype, "booleanQuestion", {
        get: function () {
            return this.question;
        },
        enumerable: false,
        configurable: true
    });
    BooleanModel.prototype.getSelectedItemByText = function (itemText) {
        var labels = this.getLabels();
        var values = this.getValues();
        return new survey_core__WEBPACK_IMPORTED_MODULE_1__["ItemValue"](values[labels.indexOf(itemText)], itemText);
    };
    BooleanModel.prototype.getValues = function () {
        return [
            this.booleanQuestion.valueTrue !== undefined
                ? this.booleanQuestion.valueTrue
                : true,
            this.booleanQuestion.valueFalse !== undefined
                ? this.booleanQuestion.valueFalse
                : false,
        ];
    };
    BooleanModel.prototype.getLabels = function () {
        var labels = this.getValues();
        if (this.booleanQuestion.labelTrue !== undefined) {
            labels[0] = this.booleanQuestion.locLabelTrue.textOrHtml;
        }
        if (this.booleanQuestion.labelFalse !== undefined) {
            labels[1] = this.booleanQuestion.locLabelFalse.textOrHtml;
        }
        return labels;
    };
    BooleanModel.trueColor = "";
    BooleanModel.falseColor = "";
    return BooleanModel;
}(_selectBase__WEBPACK_IMPORTED_MODULE_2__["SelectBase"]));



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: ElementVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementVisibility", function() { return ElementVisibility; });
var ElementVisibility;
(function (ElementVisibility) {
    ElementVisibility[ElementVisibility["Visible"] = 0] = "Visible";
    ElementVisibility[ElementVisibility["Invisible"] = 1] = "Invisible";
    ElementVisibility[ElementVisibility["PublicInvisible"] = 2] = "PublicInvisible";
})(ElementVisibility || (ElementVisibility = {}));


/***/ }),

/***/ "./src/dataProvider.ts":
/*!*****************************!*\
  !*** ./src/dataProvider.ts ***!
  \*****************************/
/*! exports provided: DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var DataProvider = /** @class */ (function () {
    function DataProvider(_data) {
        if (_data === void 0) { _data = []; }
        this._data = _data;
        this.filterValues = {};
        /**
         * Fires when data has been changed.
         */
        this.onDataChanged = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
    }
    DataProvider.prototype.reset = function () {
        if (this._statisticsCache !== undefined ||
            this._filteredData !== undefined) {
            this._statisticsCache = undefined;
            this._filteredData = undefined;
            this.raiseDataChanged();
        }
    };
    Object.defineProperty(DataProvider.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = [].concat(data);
            this.reset();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataProvider.prototype, "filteredData", {
        get: function () {
            var _this = this;
            if (this._filteredData === undefined) {
                var filterKeys = Object.keys(this.filterValues);
                if (filterKeys.length > 0) {
                    this._filteredData = this.data.filter(function (item) {
                        return !Object.keys(_this.filterValues).some(function (key) { return item[key] !== _this.filterValues[key]; });
                    });
                }
                else {
                    this._filteredData = this.data;
                }
            }
            return this._filteredData;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets filter by question name and value.
     */
    DataProvider.prototype.setFilter = function (questionName, selectedValue) {
        var filterChanged = true;
        if (selectedValue !== undefined) {
            filterChanged = this.filterValues[questionName] !== selectedValue;
            this.filterValues[questionName] = selectedValue;
        }
        else {
            filterChanged = this.filterValues[questionName] !== undefined;
            delete this.filterValues[questionName];
        }
        if (filterChanged) {
            this.reset();
        }
    };
    DataProvider.prototype.getDataCore = function (dataInfo) {
        var dataName = dataInfo.dataName;
        var statistics = [];
        var values = dataInfo.getValues();
        var valuesIndex = {};
        values.forEach(function (val, index) {
            valuesIndex[val] = index;
        });
        var series = dataInfo.getSeriesValues();
        var seriesIndex = {};
        series.forEach(function (val, index) {
            seriesIndex[val] = index;
            statistics.push(new Array(values.length).fill(0));
        });
        if (statistics.length === 0) {
            statistics.push(new Array(values.length).fill(0));
        }
        this.filteredData.forEach(function (row) {
            var rowValue = row[dataName];
            if (rowValue !== undefined) {
                var rowValues = Array.isArray(rowValue) ? rowValue : [rowValue];
                if (series.length > 0) {
                    if (row[DataProvider.seriesMarkerKey] !== undefined) {
                        // Series are labelled by seriesMarkerKey in row data
                        var seriesNo_1 = seriesIndex[row[DataProvider.seriesMarkerKey]] || 0;
                        rowValues.forEach(function (val) {
                            statistics[seriesNo_1][valuesIndex[val]]++;
                        });
                    }
                    else {
                        // Series are the keys in question value (matrix question)
                        // TODO: think about the de-normalization and combine with the previous case
                        rowValues.forEach(function (val) {
                            series.forEach(function (seriesName) {
                                if (val[seriesName] !== undefined) {
                                    var seriesNo = seriesIndex[seriesName] || 0;
                                    statistics[seriesNo][valuesIndex[val[seriesName]]]++;
                                }
                            });
                        });
                    }
                }
                else {
                    // No series
                    rowValues.forEach(function (val) { return statistics[0][valuesIndex[val]]++; });
                }
            }
        });
        this._statisticsCache[dataName] = statistics;
        return statistics;
    };
    /**
     * Returns calculated statisctics for the IDataInfo object.
     */
    DataProvider.prototype.getData = function (dataInfo) {
        var dataName = dataInfo.dataName;
        if (this._statisticsCache === undefined ||
            this._statisticsCache[dataName] === undefined) {
            if (this._statisticsCache === undefined) {
                this._statisticsCache = {};
            }
            this._statisticsCache[dataName] = this.getDataCore(dataInfo);
        }
        return [].concat(this._statisticsCache[dataName]);
    };
    DataProvider.prototype.raiseDataChanged = function () {
        if (!this.onDataChanged.isEmpty) {
            this.onDataChanged.fire(this, {});
        }
    };
    DataProvider.seriesMarkerKey = "__sa_series_name";
    return DataProvider;
}());



/***/ }),

/***/ "./src/entries/summary.ts":
/*!********************************!*\
  !*** ./src/entries/summary.ts ***!
  \********************************/
/*! exports provided: localization, surveyStrings, DataProvider, NumberModel, SelectBase, Matrix, BooleanModel, VisualizerBase, VisualizationManager, VisualizationPanel, VisualizationPanelDynamic, VisualizationMatrixDynamic, VisualizationMatrixDropdown, AlternativeVisualizersWrapper, PlotlyChartAdapter, PlotlySetup, SelectBasePlotly, PlotlyGaugeAdapter, GaugePlotly, MatrixPlotly, PlotlyBoolChartAdapter, BooleanPlotly, WordCloudAdapter, WordCloud, textHelper, TextTableAdapter, Text, DocumentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });

/* harmony import */ var _localization_farsi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localization/farsi */ "./src/localization/farsi.ts");
/* harmony import */ var _localization_french__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localization/french */ "./src/localization/french.ts");
/* harmony import */ var _localization_russian__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localization/russian */ "./src/localization/russian.ts");
/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataProvider */ "./src/dataProvider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return _dataProvider__WEBPACK_IMPORTED_MODULE_4__["DataProvider"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../number */ "./src/number.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberModel", function() { return _number__WEBPACK_IMPORTED_MODULE_5__["NumberModel"]; });

/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selectBase */ "./src/selectBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectBase", function() { return _selectBase__WEBPACK_IMPORTED_MODULE_6__["SelectBase"]; });

/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../matrix */ "./src/matrix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_7__["Matrix"]; });

/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../boolean */ "./src/boolean.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanModel", function() { return _boolean__WEBPACK_IMPORTED_MODULE_8__["BooleanModel"]; });

/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../visualizerBase */ "./src/visualizerBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return _visualizerBase__WEBPACK_IMPORTED_MODULE_9__["VisualizerBase"]; });

/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return _visualizationManager__WEBPACK_IMPORTED_MODULE_10__["VisualizationManager"]; });

/* harmony import */ var _visualizationPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../visualizationPanel */ "./src/visualizationPanel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return _visualizationPanel__WEBPACK_IMPORTED_MODULE_11__["VisualizationPanel"]; });

/* harmony import */ var _visualizationPanelDynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../visualizationPanelDynamic */ "./src/visualizationPanelDynamic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return _visualizationPanelDynamic__WEBPACK_IMPORTED_MODULE_12__["VisualizationPanelDynamic"]; });

/* harmony import */ var _visualizationMatrixDynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../visualizationMatrixDynamic */ "./src/visualizationMatrixDynamic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return _visualizationMatrixDynamic__WEBPACK_IMPORTED_MODULE_13__["VisualizationMatrixDynamic"]; });

/* harmony import */ var _visualizationMatrixDropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../visualizationMatrixDropdown */ "./src/visualizationMatrixDropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDropdown", function() { return _visualizationMatrixDropdown__WEBPACK_IMPORTED_MODULE_14__["VisualizationMatrixDropdown"]; });

/* harmony import */ var _alternativeVizualizersWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../alternativeVizualizersWrapper */ "./src/alternativeVizualizersWrapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlternativeVisualizersWrapper", function() { return _alternativeVizualizersWrapper__WEBPACK_IMPORTED_MODULE_15__["AlternativeVisualizersWrapper"]; });

/* harmony import */ var _plotly_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../plotly/index */ "./src/plotly/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyChartAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_16__["PlotlyChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlySetup", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_16__["PlotlySetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_16__["SelectBasePlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyGaugeAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_16__["PlotlyGaugeAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_16__["GaugePlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_16__["MatrixPlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyBoolChartAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_16__["PlotlyBoolChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_16__["BooleanPlotly"]; });

/* harmony import */ var _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../wordcloud/wordcloud */ "./src/wordcloud/wordcloud.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordCloudAdapter", function() { return _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_17__["WordCloudAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_17__["WordCloud"]; });

/* harmony import */ var _wordcloud_stopwords_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../wordcloud/stopwords/index */ "./src/wordcloud/stopwords/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return _wordcloud_stopwords_index__WEBPACK_IMPORTED_MODULE_18__["textHelper"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../text */ "./src/text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextTableAdapter", function() { return _text__WEBPACK_IMPORTED_MODULE_19__["TextTableAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_19__["Text"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_20__["DocumentHelper"]; });


//localization






















/***/ }),

/***/ "./src/filterInfo.ts":
/*!***************************!*\
  !*** ./src/filterInfo.ts ***!
  \***************************/
/*! exports provided: FilterInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterInfo", function() { return FilterInfo; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localizationManager */ "./src/localizationManager.ts");


var FilterInfo = /** @class */ (function () {
    function FilterInfo(visualizer) {
        this._htmlElement = undefined;
        this.text = undefined;
        this._htmlElement = (_utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("div", "sa-question__filter"));
        this.text = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("span", "sa-question__filter-text");
        this._htmlElement.appendChild(this.text);
        var filterClear = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createButton(function () {
            visualizer.setSelection(undefined);
        }, _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("clearButton"));
        this._htmlElement.appendChild(filterClear);
    }
    Object.defineProperty(FilterInfo.prototype, "htmlElement", {
        get: function () {
            return this._htmlElement;
        },
        enumerable: false,
        configurable: true
    });
    FilterInfo.prototype.update = function (selection) {
        if (selection !== undefined && selection.value !== undefined) {
            this._htmlElement.style.display = "inline-block";
            this.text.innerHTML = "Filter: [" + selection.text + "]";
        }
        else {
            this._htmlElement.style.display = "none";
            this.text.innerHTML = "";
        }
    };
    return FilterInfo;
}());



/***/ }),

/***/ "./src/layoutEngine.ts":
/*!*****************************!*\
  !*** ./src/layoutEngine.ts ***!
  \*****************************/
/*! exports provided: LayoutEngine, MuuriLayoutEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutEngine", function() { return LayoutEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuuriLayoutEngine", function() { return MuuriLayoutEngine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");

var Muuri = __webpack_require__(/*! muuri */ "./node_modules/muuri/dist/muuri.js");
var LayoutEngine = /** @class */ (function () {
    function LayoutEngine(_allowed) {
        this._allowed = _allowed;
    }
    LayoutEngine.prototype.startCore = function (container) { };
    LayoutEngine.prototype.stopCore = function () { };
    LayoutEngine.prototype.updateCore = function () { };
    Object.defineProperty(LayoutEngine.prototype, "allowed", {
        get: function () {
            return this._allowed;
        },
        enumerable: false,
        configurable: true
    });
    LayoutEngine.prototype.start = function (container) {
        if (this._allowed) {
            this.startCore(container);
        }
    };
    LayoutEngine.prototype.stop = function () {
        if (this._allowed) {
            this.stopCore();
        }
    };
    LayoutEngine.prototype.update = function () {
        if (this._allowed) {
            this.updateCore();
        }
    };
    LayoutEngine.prototype.add = function (elements, options) { };
    LayoutEngine.prototype.remove = function (elements, options) { };
    LayoutEngine.prototype.destroy = function () {
        this.stop();
    };
    return LayoutEngine;
}());

var MuuriLayoutEngine = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MuuriLayoutEngine, _super);
    function MuuriLayoutEngine(allowed, _selector) {
        var _this = _super.call(this, allowed) || this;
        _this._selector = _selector;
        _this._muuri = undefined;
        _this._layoutingTimer = undefined;
        return _this;
    }
    MuuriLayoutEngine.prototype.startCore = function (container) {
        var _this = this;
        this._muuri = new Muuri(container, {
            dragStartPredicate: {
                handle: ".sa-question__title--draggable",
            },
            items: this._selector,
            dragEnabled: true,
        });
        this._muuri.on("move", function (data) {
            return _this.onMoveCallback && _this.onMoveCallback(data.fromIndex, data.toIndex);
        });
    };
    MuuriLayoutEngine.prototype.stopCore = function () {
        this._muuri.off("move");
        this._muuri.destroy();
        this._muuri = undefined;
    };
    MuuriLayoutEngine.prototype.updateCore = function () {
        var _this = this;
        if (this._layoutingTimer !== undefined) {
            clearTimeout(this._layoutingTimer);
        }
        this._layoutingTimer = setTimeout(function () {
            _this._layoutingTimer = undefined;
            _this._muuri.refreshItems();
            _this._muuri.layout();
        }, 10);
    };
    MuuriLayoutEngine.prototype.add = function (elements, options) {
        if (this._allowed)
            this._muuri.add(elements, options);
    };
    MuuriLayoutEngine.prototype.remove = function (elements, options) {
        if (this._allowed)
            this._muuri.remove(elements, options);
    };
    return MuuriLayoutEngine;
}(LayoutEngine));



/***/ }),

/***/ "./src/localization/english.ts":
/*!*************************************!*\
  !*** ./src/localization/english.ts ***!
  \*************************************/
/*! exports provided: englishStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "englishStrings", function() { return englishStrings; });
//Uncomment this line on creating a translation file
//import { localization } from "../localizationManager";
var englishStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    makePrivateColumn: "Make column private",
    makePublicColumn: "Make column public",
    moveToDetail: "Move to Detail",
    showAsColumn: "Show as Column",
    filterPlaceholder: "Search...",
    removeRows: "Remove rows",
    showLabel: "Show",
    entriesLabel: "entries",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_stackedbar: "Stacked Bar",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Hide",
    makePrivateButton: "Make private",
    makePublicButton: "Make public",
    showButton: "Show",
    resetFilter: "Reset Filter",
    changeLocale: "Change Locale",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Other items and comments",
    showPercentages: "Show percentages",
    hidePercentages: "Hide percentages",
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//localization.locales["en"] = englishStrings;
//localization.localeNames["en"] = "English";


/***/ }),

/***/ "./src/localization/farsi.ts":
/*!***********************************!*\
  !*** ./src/localization/farsi.ts ***!
  \***********************************/
/*! exports provided: farsiStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "farsiStrings", function() { return farsiStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var farsiStrings = {
    groupButton: "گروه بندی با",
    ungroupButton: "حذف گروه",
    selectButton: "انتخاب",
    hideColumn: "مخفی کردن ستون",
    showColumn: "نمایش ستون",
    moveToDetail: "انتقال به جزئیات",
    showAsColumn: "نمایش به عنوان ستون",
    visualizer_text: "متون در جدول",
    visualizer_wordcloud: "ابر کلمات",
    chartType_bar: "میله ای",
    chartType_pie: "دابره ای(pie)",
    chartType_scatter: "پراکندگی(Scatter)",
    chartType_gauge: "عقربه ای",
    chartType_bullet: "Bullet",
    hideButton: "مخفی",
    resetFilter: "بازنشانی فیلترها",
    clearButton: "پاک کردن",
    addElement: "انتخاب سوال برای نمایش..."
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["fa"] = farsiStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["fa"] = "Farsi(Persian)";


/***/ }),

/***/ "./src/localization/french.ts":
/*!************************************!*\
  !*** ./src/localization/french.ts ***!
  \************************************/
/*! exports provided: frenchStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchStrings", function() { return frenchStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var frenchStrings = {
    groupButton: "Grouper",
    ungroupButton: "Dissocier",
    selectButton: "Sélectionner",
    hideColumn: "Masquer colonne",
    showColumn: "Afficher colonne",
    makePrivateColumn: "Rendre la colonne privé",
    makePublicColumn: "Rendre la colonne public",
    moveToDetail: "Déplacer vers détails",
    showAsColumn: "Afficher en colonne",
    visualizer_text: "Textes en table",
    visualizer_wordcloud: "Nuages de mots",
    chartType_bar: "Barres",
    chartType_stackedbar: "Barres empilées",
    chartType_doughnut: "Anneau",
    chartType_pie: "Secteurs",
    chartType_scatter: "Nuages de points",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bulles",
    hideButton: "Masquer",
    resetFilter: "Rafraichir Filtres",
    clearButton: "Rafraichir",
    addElement: "Choisir la question à afficher...",
    defaultOrder: "Defaut",
    ascOrder: "Ascendant",
    descOrder: "Descendant",
    showMinorColumns: "Afficher les colonnes mineures"
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["fr"] = frenchStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["fr"] = "French";


/***/ }),

/***/ "./src/localization/russian.ts":
/*!*************************************!*\
  !*** ./src/localization/russian.ts ***!
  \*************************************/
/*! exports provided: russianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russianStrings", function() { return russianStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var russianStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    makePrivateColumn: "Make column private",
    makePublicColumn: "Make column public",
    moveToDetail: "Move to Detail",
    showAsColumn: "Show as Column",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_stackedbar: "Stacked Bar",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Скрыть",
    showButton: "Показать",
    resetFilter: "Очистить фильтр",
    changeLocale: "Сменить язык",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Other items and comments",
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["ru"] = russianStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["ru"] = "Russian";


/***/ }),

/***/ "./src/localizationManager.ts":
/*!************************************!*\
  !*** ./src/localizationManager.ts ***!
  \************************************/
/*! exports provided: localization, surveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return localization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return surveyStrings; });
/* harmony import */ var _localization_english__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localization/english */ "./src/localization/english.ts");

var localization = {
    currentLocaleValue: "",
    defaultLocaleValue: "en",
    locales: {},
    localeNames: {},
    supportedLocales: [],
    get currentLocale() {
        return this.currentLocaleValue === this.defaultLocaleValue
            ? ""
            : this.currentLocaleValue;
    },
    set currentLocale(val) {
        this.currentLocaleValue = val;
    },
    get defaultLocale() {
        return this.defaultLocaleValue;
    },
    set defaultLocale(val) {
        this.defaultLocaleValue = val;
    },
    getString: function (strName) {
        var loc = this.currentLocale
            ? this.locales[this.currentLocale]
            : this.locales[this.defaultLocale];
        if (!loc || !loc[strName])
            loc = this.locales[this.defaultLocale];
        var result = loc[strName];
        if (result === undefined) {
            result = this.locales["en"][strName] || strName;
        }
        return result;
    },
    getLocales: function () {
        var res = [];
        res.push("");
        if (this.supportedLocales && this.supportedLocales.length > 0) {
            for (var i = 0; i < this.supportedLocales.length; i++) {
                res.push(this.supportedLocales[i]);
            }
        }
        else {
            for (var key in this.locales) {
                res.push(key);
            }
        }
        res.sort();
        return res;
    }
};
var surveyStrings = _localization_english__WEBPACK_IMPORTED_MODULE_0__["englishStrings"];
localization.locales["en"] = _localization_english__WEBPACK_IMPORTED_MODULE_0__["englishStrings"];
localization.localeNames["en"] = "english";


/***/ }),

/***/ "./src/matrix.ts":
/*!***********************!*\
  !*** ./src/matrix.ts ***!
  \***********************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectBase */ "./src/selectBase.ts");



var Matrix = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Matrix, _super);
    function Matrix(question, data, options, name) {
        return _super.call(this, question, data, options, name || "matrix") || this;
    }
    Object.defineProperty(Matrix.prototype, "matrixQuestion", {
        get: function () {
            return this.question;
        },
        enumerable: false,
        configurable: true
    });
    Matrix.prototype.getSeriesValues = function () {
        return this.matrixQuestion.rows.map(function (row) { return "" + row.value; });
    };
    Matrix.prototype.getSeriesLabels = function () {
        var _this = this;
        return this.matrixQuestion.rows.map(function (row) {
            return survey_core__WEBPACK_IMPORTED_MODULE_1__["ItemValue"].getTextOrHtmlByValue(_this.matrixQuestion.rows, row.value);
        });
    };
    Matrix.prototype.getSelectedItemByText = function (itemText) {
        return this.matrixQuestion.columns.filter(function (column) { return column.text === itemText; })[0];
    };
    Matrix.prototype.valuesSource = function () {
        return this.matrixQuestion.columns;
    };
    Matrix.prototype.getData = function () {
        var statistics = _super.prototype.getData.call(this);
        var series = this.getSeriesValues();
        var values = this.getValues();
        if (series.length > 1) {
            var preparedData_1 = [];
            values.forEach(function (val, valueIndex) {
                var seriesData = series.map(function (seriesName, seriesIndex) { return statistics[seriesIndex][valueIndex]; });
                preparedData_1.push(seriesData);
            });
            return preparedData_1;
        }
        return statistics;
    };
    return Matrix;
}(_selectBase__WEBPACK_IMPORTED_MODULE_2__["SelectBase"]));



/***/ }),

/***/ "./src/number.ts":
/*!***********************!*\
  !*** ./src/number.ts ***!
  \***********************/
/*! exports provided: NumberModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberModel", function() { return NumberModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/index */ "./src/utils/index.ts");




var NumberModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NumberModel, _super);
    function NumberModel(question, data, options, name) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, question, data, options, name || "number") || this;
        _this.registerToolbarItem("changeChartType", function () {
            if (_this.chartTypes.length > 1) {
                return _utils_index__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createSelector(_this.chartTypes.map(function (chartType) {
                    return {
                        value: chartType,
                        text: _localizationManager__WEBPACK_IMPORTED_MODULE_2__["localization"].getString("chartType_" + chartType),
                    };
                }), function (option) { return _this.chartType === option.value; }, function (e) {
                    _this.setChartType(e.target.value);
                });
            }
            return null;
        });
        return _this;
    }
    NumberModel.prototype.onDataChanged = function () {
        this._resultAverage = undefined;
        this._resultMin = undefined;
        this._resultMax = undefined;
        _super.prototype.onDataChanged.call(this);
    };
    NumberModel.prototype.onChartTypeChanged = function () { };
    NumberModel.prototype.setChartType = function (chartType) {
        if (this.chartTypes.indexOf(chartType) !== -1 &&
            this.chartType !== chartType) {
            this.chartType = chartType;
            this.onChartTypeChanged();
            this.destroyContent(this.contentContainer);
            this.renderContent(this.contentContainer);
            this.invokeOnUpdate();
        }
    };
    NumberModel.prototype.destroy = function () {
        this._resultAverage = undefined;
        this._resultMin = undefined;
        this._resultMax = undefined;
        _super.prototype.destroy.call(this);
    };
    NumberModel.prototype.generateText = function (maxValue, minValue, stepsCount) {
        var texts = [];
        if (stepsCount === 5) {
            texts = [
                "very high (" + maxValue + ")",
                "high",
                "medium",
                "low",
                "very low (" + minValue + ")",
            ];
        }
        else {
            texts.push(maxValue);
            for (var i = 0; i < stepsCount - 2; i++) {
                texts.push("");
            }
            texts.push(minValue);
        }
        if (!!NumberModel.generateTextsCallback) {
            return NumberModel.generateTextsCallback(this.question, maxValue, minValue, stepsCount, texts);
        }
        return texts;
    };
    NumberModel.prototype.generateValues = function (maxValue, stepsCount) {
        var values = [];
        for (var i = 0; i < stepsCount; i++) {
            values.push(maxValue / stepsCount);
        }
        values.push(maxValue);
        return values;
    };
    NumberModel.prototype.generateColors = function (maxValue, minValue, stepsCount) {
        var palette = this.getColors();
        var colors = [];
        for (var i = 0; i < stepsCount; i++) {
            colors.push(palette[i]);
        }
        colors.push("rgba(255, 255, 255, 0)");
        return colors;
    };
    NumberModel.prototype.getData = function () {
        var _this = this;
        if (this._resultAverage === undefined ||
            this._resultMin === undefined ||
            this._resultMax === undefined) {
            var questionValues_1 = [];
            this._resultMin = Number.MAX_VALUE;
            this._resultMax = -Number.MAX_VALUE;
            this.data.forEach(function (rowData) {
                var questionValue = +rowData[_this.question.name];
                if (questionValue !== undefined) {
                    questionValues_1.push(questionValue);
                    if (_this._resultMin > questionValue) {
                        _this._resultMin = questionValue;
                    }
                    if (_this._resultMax < questionValue) {
                        _this._resultMax = questionValue;
                    }
                }
            });
            this._resultAverage =
                questionValues_1.reduce(function (a, b) { return a + b; }, 0) / questionValues_1.length;
            this._resultAverage = Math.ceil(this._resultAverage * 100) / 100;
        }
        return [this._resultAverage, this._resultMin, this._resultMax];
    };
    NumberModel.stepsCount = 5;
    NumberModel.showAsPercentage = false;
    return NumberModel;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_1__["VisualizerBase"]));



/***/ }),

/***/ "./src/plotly/boolean.ts":
/*!*******************************!*\
  !*** ./src/plotly/boolean.ts ***!
  \*******************************/
/*! exports provided: PlotlyBoolChartAdapter, BooleanPlotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotlyBoolChartAdapter", function() { return PlotlyBoolChartAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return BooleanPlotly; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boolean */ "./src/boolean.ts");
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectBase */ "./src/plotly/selectBase.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");





var PlotlyBoolChartAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PlotlyBoolChartAdapter, _super);
    function PlotlyBoolChartAdapter(model) {
        return _super.call(this, model) || this;
    }
    PlotlyBoolChartAdapter.prototype.patchConfigParameters = function (chartNode, traces, layout, config) {
        var colors = this.model.getColors();
        var boolColors = [
            BooleanPlotly.trueColor || colors[0],
            BooleanPlotly.falseColor || colors[1],
        ];
        if (this.model.chartType === "pie" || this.model.chartType === "doughnut") {
            traces.forEach(function (trace) {
                trace.marker.colors = boolColors;
            });
        }
        else if (this.model.chartType === "bar") {
            traces.forEach(function (trace) {
                trace.marker.color = boolColors;
            });
        }
    };
    return PlotlyBoolChartAdapter;
}(_selectBase__WEBPACK_IMPORTED_MODULE_3__["PlotlyChartAdapter"]));

var BooleanPlotly = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BooleanPlotly, _super);
    function BooleanPlotly(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.chartTypes = BooleanPlotly.types;
        _this.chartType = _this.chartTypes[0];
        _this._chartAdapter = new PlotlyBoolChartAdapter(_this);
        return _this;
    }
    BooleanPlotly.prototype.destroyContent = function (container) {
        this._chartAdapter.destroy(container.children[0]);
        _super.prototype.destroyContent.call(this, container);
    };
    BooleanPlotly.prototype.renderContent = function (container) {
        var chartNode = (_utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div"));
        container.appendChild(chartNode);
        this._chartAdapter.create(chartNode);
    };
    BooleanPlotly.types = ["pie", "bar", "doughnut"];
    return BooleanPlotly;
}(_boolean__WEBPACK_IMPORTED_MODULE_2__["BooleanModel"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_1__["VisualizationManager"].registerVisualizer("boolean", BooleanPlotly);


/***/ }),

/***/ "./src/plotly/index.ts":
/*!*****************************!*\
  !*** ./src/plotly/index.ts ***!
  \*****************************/
/*! exports provided: PlotlyChartAdapter, PlotlySetup, SelectBasePlotly, PlotlyGaugeAdapter, GaugePlotly, MatrixPlotly, PlotlyBoolChartAdapter, BooleanPlotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectBase */ "./src/plotly/selectBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyChartAdapter", function() { return _selectBase__WEBPACK_IMPORTED_MODULE_0__["PlotlyChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlySetup", function() { return _selectBase__WEBPACK_IMPORTED_MODULE_0__["PlotlySetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return _selectBase__WEBPACK_IMPORTED_MODULE_0__["SelectBasePlotly"]; });

/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating */ "./src/plotly/rating.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyGaugeAdapter", function() { return _rating__WEBPACK_IMPORTED_MODULE_1__["PlotlyGaugeAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return _rating__WEBPACK_IMPORTED_MODULE_1__["GaugePlotly"]; });

/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "./src/plotly/matrix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return _matrix__WEBPACK_IMPORTED_MODULE_2__["MatrixPlotly"]; });

/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean */ "./src/plotly/boolean.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyBoolChartAdapter", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["PlotlyBoolChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["BooleanPlotly"]; });







/***/ }),

/***/ "./src/plotly/matrix.ts":
/*!******************************!*\
  !*** ./src/plotly/matrix.ts ***!
  \******************************/
/*! exports provided: MatrixPlotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return MatrixPlotly; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matrix */ "./src/matrix.ts");
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectBase */ "./src/plotly/selectBase.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");





var MatrixPlotly = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatrixPlotly, _super);
    function MatrixPlotly(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.chartTypes = MatrixPlotly.types;
        _this.chartType = _this.chartTypes[0];
        _this._chartAdapter = new _selectBase__WEBPACK_IMPORTED_MODULE_3__["PlotlyChartAdapter"](_this);
        return _this;
    }
    MatrixPlotly.prototype.destroyContent = function (container) {
        this._chartAdapter.destroy(container.children[0]);
        _super.prototype.destroyContent.call(this, container);
    };
    MatrixPlotly.prototype.renderContent = function (container) {
        var chartNode = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        container.appendChild(chartNode);
        this._chartAdapter.create(chartNode);
    };
    MatrixPlotly.types = ["bar", "stackedbar", "pie", "doughnut"];
    return MatrixPlotly;
}(_matrix__WEBPACK_IMPORTED_MODULE_2__["Matrix"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_1__["VisualizationManager"].registerVisualizer("matrix", MatrixPlotly);


/***/ }),

/***/ "./src/plotly/rating.ts":
/*!******************************!*\
  !*** ./src/plotly/rating.ts ***!
  \******************************/
/*! exports provided: PlotlyGaugeAdapter, GaugePlotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotlyGaugeAdapter", function() { return PlotlyGaugeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return GaugePlotly; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../number */ "./src/number.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");





var Plotly = null;
if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["allowDomRendering"])()) {
    Plotly = __webpack_require__(/*! plotly.js-dist */ "plotly.js-dist");
}
var PlotlyGaugeAdapter = /** @class */ (function () {
    function PlotlyGaugeAdapter(model) {
        this.model = model;
        this._chart = undefined;
    }
    Object.defineProperty(PlotlyGaugeAdapter.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        enumerable: false,
        configurable: true
    });
    PlotlyGaugeAdapter.prototype.create = function (chartNode) {
        var question = this.model.question;
        var _a = this.model.getData(), level = _a[0], minValue = _a[1], maxValue = _a[2];
        if (question.getType() === "rating") {
            var rateValues = question.visibleRateValues;
            maxValue = rateValues[rateValues.length - 1].value;
            minValue = rateValues[0].value;
        }
        var colors = this.model.generateColors(maxValue, minValue, GaugePlotly.stepsCount);
        if (GaugePlotly.showAsPercentage) {
            level = _utils_index__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].toPercentage(level, maxValue);
            minValue = _utils_index__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].toPercentage(minValue, maxValue);
            maxValue = _utils_index__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].toPercentage(maxValue, maxValue);
        }
        var data = [
            {
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { range: [minValue, maxValue] },
                    shape: this.model.chartType,
                    bgcolor: "white",
                    bar: { color: colors[0] },
                },
                value: level,
                text: question.name,
                domain: { x: [0, 1], y: [0, 1] },
            },
        ];
        var height = 400;
        if (this.model.chartType === "bullet") {
            height = 250;
        }
        var layout = {
            width: 600,
            height: height,
            plot_bgcolor: this.model.backgroundColor,
            paper_bgcolor: this.model.backgroundColor,
        };
        var config = {
            displayModeBar: false,
            staticPlot: true,
            locale: _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale,
        };
        return Plotly.newPlot(chartNode, data, layout, config);
    };
    PlotlyGaugeAdapter.prototype.destroy = function (node) {
        Plotly.purge(node);
        this._chart = undefined;
    };
    return PlotlyGaugeAdapter;
}());

var GaugePlotly = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GaugePlotly, _super);
    function GaugePlotly(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.chartTypes = GaugePlotly.types;
        _this.chartType = _this.chartTypes[0];
        _this._chartAdapter = new PlotlyGaugeAdapter(_this);
        return _this;
    }
    GaugePlotly.prototype.destroyContent = function (container) {
        this._chartAdapter.destroy(container.children[0]);
        _super.prototype.destroyContent.call(this, container);
    };
    GaugePlotly.prototype.renderContent = function (container) {
        var chartNode = _utils_index__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createElement("div");
        container.appendChild(chartNode);
        this._chartAdapter.create(chartNode);
    };
    GaugePlotly.types = ["gauge", "bullet"];
    return GaugePlotly;
}(_number__WEBPACK_IMPORTED_MODULE_1__["NumberModel"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("number", GaugePlotly);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("rating", GaugePlotly);


/***/ }),

/***/ "./src/plotly/selectBase.ts":
/*!**********************************!*\
  !*** ./src/plotly/selectBase.ts ***!
  \**********************************/
/*! exports provided: PlotlyChartAdapter, PlotlySetup, SelectBasePlotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotlyChartAdapter", function() { return PlotlyChartAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotlySetup", function() { return PlotlySetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return SelectBasePlotly; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectBase */ "./src/selectBase.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");





var Plotly = null;
if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["allowDomRendering"])()) {
    Plotly = __webpack_require__(/*! plotly.js-dist */ "plotly.js-dist");
}
var PlotlyChartAdapter = /** @class */ (function () {
    function PlotlyChartAdapter(model) {
        this.model = model;
        this._chart = undefined;
    }
    PlotlyChartAdapter.prototype.patchConfigParameters = function (chartNode, traces, layout, config) { };
    Object.defineProperty(PlotlyChartAdapter.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        enumerable: false,
        configurable: true
    });
    PlotlyChartAdapter.prototype.create = function (chartNode) {
        var _this = this;
        var plotlyOptions = PlotlySetup.setup(this.model.chartType, this.model);
        var config = {
            displaylogo: false,
            responsive: true,
            locale: _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale,
        };
        if (SelectBasePlotly.displayModeBar !== undefined) {
            config.displayModeBar = SelectBasePlotly.displayModeBar;
        }
        this.patchConfigParameters(chartNode, plotlyOptions.traces, plotlyOptions.layout, config);
        var plot = Plotly.newPlot(chartNode, plotlyOptions.traces, plotlyOptions.layout, config);
        chartNode["on"]("plotly_click", function (data) {
            if (data.points.length > 0) {
                var itemText = plotlyOptions.hasSeries
                    ? data.points[0].data.name
                    : Array.isArray(data.points[0].customdata)
                        ? data.points[0].customdata[0]
                        : data.points[0].customdata;
                var item = _this.model.getSelectedItemByText(itemText);
                _this.model.setSelection(item);
            }
        });
        var getDragLayer = function () {
            return chartNode.getElementsByClassName("nsewdrag")[0];
        };
        chartNode["on"]("plotly_hover", function () {
            var dragLayer = getDragLayer();
            dragLayer && (dragLayer.style.cursor = "pointer");
        });
        chartNode["on"]("plotly_unhover", function () {
            var dragLayer = getDragLayer();
            dragLayer && (dragLayer.style.cursor = "");
        });
        this._chart = plot;
        return plot;
    };
    PlotlyChartAdapter.prototype.destroy = function (node) {
        Plotly.purge(node);
        this._chart = undefined;
    };
    return PlotlyChartAdapter;
}());

var PlotlySetup = /** @class */ (function () {
    function PlotlySetup() {
    }
    PlotlySetup.setup = function (charType, model) {
        return this.setups[charType](model);
    };
    PlotlySetup.setupPie = function (model) {
        var datasets = model.getData();
        var seriesValues = model.getSeriesValues();
        var seriesLabels = model.getSeriesLabels();
        var labels = model.getLabels();
        var colors = model.getColors();
        var traces = [];
        var hasSeries = datasets.length > 1 && seriesValues.length > 1;
        var traceConfig = {
            type: model.chartType,
            y: hasSeries ? seriesLabels : labels,
            text: (hasSeries ? seriesLabels : labels).map(function (l) {
                if (l.length > 30) {
                    return l.substring(0, 27) + "...";
                }
                return l;
            }),
            hoverinfo: "x+y",
            mode: "markers",
            marker: {},
        };
        traceConfig.hoverinfo = "label+value+percent";
        traceConfig.marker.colors = colors;
        traceConfig.textposition = "inside";
        if (model.chartType === "doughnut") {
            traceConfig.type = "pie";
            traceConfig.hole = 0.4;
        }
        if (!hasSeries) {
            traceConfig.marker.symbol = "circle";
            traceConfig.marker.size = 16;
        }
        datasets.forEach(function (dataset, index) {
            traces.push(Object.assign({}, traceConfig, {
                values: dataset,
                labels: hasSeries ? seriesLabels : labels,
                customdata: hasSeries ? seriesLabels : labels,
            }));
        });
        var radius = labels.length < 10 ? labels.length * 50 + 100 : 550;
        var height = radius * Math.round(traces.length / 2);
        var layout = {
            font: {
                family: "Segoe UI, sans-serif",
                size: 14,
                weight: "normal",
                color: "#404040",
            },
            height: height,
            margin: {
                l: 0,
                t: 0,
                b: 0,
                r: 10,
            },
            colorway: colors,
            hovermode: "closest",
            plot_bgcolor: model.backgroundColor,
            paper_bgcolor: model.backgroundColor,
            showlegend: false,
        };
        if (hasSeries) {
            layout.grid = {
                rows: Math.round(traces.length / 2),
                columns: 2,
            };
            layout.annotations = [];
            labels.forEach(function (label, index) {
                traces[index].domain = {
                    column: index % 2,
                    row: Math.floor(index / 2),
                };
                traces[index].title = { position: "bottom center", text: label };
            });
        }
        return { traces: traces, layout: layout, hasSeries: hasSeries };
    };
    PlotlySetup.setupBar = function (model) {
        var datasets = model.getData();
        var seriesValues = model.getSeriesValues();
        var seriesLabels = model.getSeriesLabels();
        var labels = model.getLabels();
        var colors = model.getColors();
        var traces = [];
        var hasSeries = datasets.length > 1 && seriesValues.length > 1;
        if (model.orderByAnsweres == "asc" || model.orderByAnsweres == "desc") {
            var dict = _utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].sortDictionary(_utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].zipArrays(labels, colors), datasets[0], model.orderByAnsweres == "desc");
            var labelsAndColors = _utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].unzipArrays(dict.keys);
            labels = labelsAndColors.first;
            colors = labelsAndColors.second;
            datasets[0] = dict.values;
        }
        var traceConfig = {
            type: model.chartType,
            y: (hasSeries ? seriesLabels : labels).map(function (l) {
                if (l.length > 30) {
                    return l.substring(0, 27) + "...";
                }
                return l;
            }),
            customdata: hasSeries ? seriesLabels : labels,
            hoverinfo: "x+y",
            orientation: "h",
            mode: "markers",
            width: 0.5,
            marker: {},
        };
        traceConfig.marker.color = colors;
        var texts = model.showPercentages ? model.getPercentages() : datasets;
        datasets.forEach(function (dataset, index) {
            var trace = Object.assign({}, traceConfig, {
                x: dataset,
                text: texts[index],
            });
            if (model.showPercentages) {
                trace.textposition = "inside";
                trace.texttemplate = "%{value} (%{text}%)";
                trace.width = 0.9;
            }
            traces.push(trace);
        });
        var height = (labels.length + (labels.length + 1) * 0.5) * 20;
        var layout = {
            font: {
                family: "Segoe UI, sans-serif",
                size: 14,
                weight: "normal",
                color: "#404040",
            },
            height: height,
            margin: {
                t: 0,
                b: 0,
                r: 10,
            },
            colorway: colors,
            hovermode: "closest",
            yaxis: {
                automargin: true,
                type: "category",
                ticklen: 5,
                tickcolor: "transparent",
            },
            xaxis: {
                rangemode: "nonnegative",
                automargin: true,
            },
            plot_bgcolor: model.backgroundColor,
            paper_bgcolor: model.backgroundColor,
            showlegend: false,
        };
        if (hasSeries) {
            layout.showlegend = true;
            layout.height =
                (labels.length + (labels.length + 1) * 0.5) * 15 * traces.length;
            if (model.chartType == "stackedbar") {
                layout.barmode = "stack";
            }
            labels.forEach(function (label, index) {
                traces[index].hoverinfo = "x+name";
                traces[index].marker.color = undefined;
                traces[index].name = label;
                if (model.chartType === "stackedbar") {
                    traces[index].type = "bar";
                }
                traces[index].width =
                    (model.showPercentages ? 0.7 : 0.5) / traces.length;
            });
        }
        return { traces: traces, layout: layout, hasSeries: hasSeries };
    };
    PlotlySetup.setupScatter = function (model) {
        var datasets = model.getData();
        var seriesValues = model.getSeriesValues();
        var seriesLabels = model.getSeriesLabels();
        var hasSeries = datasets.length > 1 && seriesValues.length > 1;
        var labels = model.getLabels();
        var colors = model.getColors();
        var traces = [];
        var traceConfig = {
            type: "scatter",
            y: (hasSeries ? seriesLabels : labels).map(function (l) {
                if (l.length > 30) {
                    return l.substring(0, 27) + "...";
                }
                return l;
            }),
            customdata: hasSeries ? seriesLabels : labels,
            text: hasSeries ? seriesLabels : labels,
            hoverinfo: "x+y",
            orientation: "h",
            mode: "markers",
            width: 0.5,
            marker: {},
        };
        if (!hasSeries) {
            traceConfig.marker.symbol = "circle";
            traceConfig.marker.size = 16;
        }
        datasets.forEach(function (dataset) {
            {
                var trace = Object.assign({}, traceConfig, {
                    x: dataset,
                });
                traces.push(trace);
            }
        });
        var height = (labels.length + (labels.length + 1) * 0.5) * 20;
        var layout = {
            font: {
                family: "Segoe UI, sans-serif",
                size: 14,
                weight: "normal",
                color: "#404040",
            },
            height: height,
            margin: {
                t: 0,
                b: 0,
                r: 10,
            },
            colorway: colors,
            hovermode: "closest",
            yaxis: {
                automargin: true,
                type: "category",
                ticklen: 5,
                tickcolor: "transparent",
            },
            xaxis: {
                rangemode: "nonnegative",
                automargin: true,
            },
            plot_bgcolor: model.backgroundColor,
            paper_bgcolor: model.backgroundColor,
            showlegend: false,
        };
        if (hasSeries) {
            layout.showlegend = true;
            layout.height = undefined;
            labels.forEach(function (label, index) {
                traces[index].hoverinfo = "x+name";
                traces[index].marker.color = undefined;
                traces[index].name = label;
            });
        }
        return { traces: traces, layout: layout, hasSeries: hasSeries };
    };
    PlotlySetup.setups = {
        bar: PlotlySetup.setupBar,
        stackedbar: PlotlySetup.setupBar,
        doughnut: PlotlySetup.setupPie,
        pie: PlotlySetup.setupPie,
        scatter: PlotlySetup.setupScatter,
    };
    return PlotlySetup;
}());

var SelectBasePlotly = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectBasePlotly, _super);
    function SelectBasePlotly(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.chartTypes = SelectBasePlotly.types;
        _this.chartType = _this.chartTypes[0];
        _this._chartAdapter = new PlotlyChartAdapter(_this);
        return _this;
    }
    SelectBasePlotly.prototype.destroyContent = function (container) {
        this._chartAdapter.destroy(container.children[0]);
        _super.prototype.destroyContent.call(this, container);
    };
    SelectBasePlotly.prototype.renderContent = function (container) {
        var chartNode = _utils__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createElement("div");
        container.appendChild(chartNode);
        this._chartAdapter.create(chartNode);
    };
    SelectBasePlotly.prototype.getData = function () {
        var statistics = _super.prototype.getData.call(this);
        var series = this.getSeriesValues();
        var values = this.getValues();
        if (series.length > 1) {
            var preparedData_1 = [];
            values.forEach(function (val, valueIndex) {
                var seriesData = series.map(function (seriesValue, seriesIndex) { return statistics[seriesIndex][valueIndex]; });
                preparedData_1.push(seriesData);
            });
            return preparedData_1;
        }
        return statistics;
    };
    SelectBasePlotly.types = ["bar", "pie", "doughnut", "scatter"];
    SelectBasePlotly.displayModeBar = undefined;
    return SelectBasePlotly;
}(_selectBase__WEBPACK_IMPORTED_MODULE_1__["SelectBase"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("checkbox", SelectBasePlotly);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("radiogroup", SelectBasePlotly);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("dropdown", SelectBasePlotly);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("imagepicker", SelectBasePlotly);


/***/ }),

/***/ "./src/selectBase.ts":
/*!***************************!*\
  !*** ./src/selectBase.ts ***!
  \***************************/
/*! exports provided: SelectBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBase", function() { return SelectBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/index */ "./src/utils/index.ts");





var SelectBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectBase, _super);
    function SelectBase(question, data, options, name) {
        var _this = _super.call(this, question, data, options, name || "selectBase") || this;
        _this.selectedItem = undefined;
        _this.choicesOrder = undefined;
        _this.showPercentageBtn = undefined;
        _this.orderByAnsweres = "default";
        _this.chartTypes = [];
        _this.registerToolbarItem("changeChartType", function () {
            if (_this.chartTypes.length > 1) {
                return _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createSelector(_this.chartTypes.map(function (chartType) {
                    return {
                        value: chartType,
                        text: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("chartType_" + chartType),
                    };
                }), function (option) { return _this.chartType === option.value; }, function (e) {
                    _this.setChartType(e.target.value);
                });
            }
            return null;
        });
        _this.registerToolbarItem("changeLabelsOrder", function () {
            if (_this.getSeriesValues().length === 0 &&
                _this.chartTypes.indexOf("bar") !== -1) {
                _this.choicesOrder = _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createSelector([
                    { text: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("defaultOrder"), value: "default" },
                    { text: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("ascOrder"), value: "asc" },
                    { text: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("descOrder"), value: "desc" },
                ], function (option) { return false; }, function (e) {
                    _this.setLabelsOrder(e.target.value);
                    _this.updateData(_this.data);
                });
                _this.updateOrderSelector();
            }
            return _this.choicesOrder;
        });
        _this.registerToolbarItem("showPercentages", function () {
            if (_this.options.allowShowPercentages &&
                (_this.chartTypes.indexOf("bar") !== -1 ||
                    _this.chartTypes.indexOf("stackedbar") !== -1)) {
                var updateCaption = function () {
                    _this.showPercentageBtn.innerHTML = _this._showPercentages
                        ? _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("hidePercentages")
                        : _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("showPercentages");
                };
                _this.showPercentageBtn = _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createButton(function () {
                    _this.showPercentages = !_this._showPercentages;
                    updateCaption();
                });
                updateCaption();
                _this.updateShowPercentageBtn();
                return _this.showPercentageBtn;
            }
        });
        return _this;
    }
    SelectBase.prototype.updateOrderSelector = function () {
        if (!!this.choicesOrder) {
            if (this.chartType == "bar") {
                this.choicesOrder.style.display = "inline-block";
            }
            else {
                this.choicesOrder.style.display = "none";
                this.choicesOrder.getElementsByTagName("select")[0].value = "default";
            }
        }
    };
    SelectBase.prototype.updateShowPercentageBtn = function () {
        if (!!this.showPercentageBtn) {
            if (this.chartType == "bar" || this.chartType == "stackedbar") {
                this.showPercentageBtn.style.display = "inline";
            }
            else {
                this.showPercentageBtn.style.display = "none";
            }
        }
    };
    SelectBase.prototype.onChartTypeChanged = function () {
        this.setLabelsOrder("default");
        this.updateOrderSelector();
        this.updateShowPercentageBtn();
    };
    SelectBase.prototype.setChartType = function (chartType) {
        if (this.chartTypes.indexOf(chartType) !== -1 &&
            this.chartType !== chartType) {
            this.chartType = chartType;
            this.onChartTypeChanged();
            this.invokeOnUpdate();
        }
    };
    SelectBase.prototype.getSelectedItemByText = function (itemText) {
        return this.question.choices.filter(function (choice) { return choice.text === itemText; })[0];
    };
    SelectBase.prototype.setSelection = function (item) {
        if (this.selectedItem !== item) {
            this.selectedItem = item;
            if (this.onDataItemSelected !== undefined) {
                this.onDataItemSelected(item !== undefined ? item.value : undefined, item !== undefined ? item.text : "");
            }
        }
    };
    Object.defineProperty(SelectBase.prototype, "selection", {
        get: function () {
            return this.selectedItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectBase.prototype, "showPercentages", {
        get: function () {
            return this._showPercentages;
        },
        set: function (val) {
            this._showPercentages = val;
            this.refreshContent();
        },
        enumerable: false,
        configurable: true
    });
    SelectBase.prototype.setLabelsOrder = function (value) {
        this.orderByAnsweres = value;
        this.refreshContent();
    };
    SelectBase.prototype.refreshContent = function () {
        this.destroyContent(this.contentContainer);
        this.renderContent(this.contentContainer);
        this.invokeOnUpdate();
    };
    SelectBase.prototype.valuesSource = function () {
        var question = this.question;
        return question["activeChoices"];
    };
    SelectBase.prototype.getValues = function () {
        var values = this.valuesSource().map(function (choice) { return choice.value; });
        if (this.question.hasOther)
            values.unshift("other");
        return values;
    };
    SelectBase.prototype.getLabels = function () {
        var _this = this;
        if (this.options.useValuesAsLabels) {
            return this.getValues();
        }
        var labels = this.valuesSource().map(function (choice) {
            return survey_core__WEBPACK_IMPORTED_MODULE_1__["ItemValue"].getTextOrHtmlByValue(_this.valuesSource(), choice.value);
        });
        if (this.question.hasOther)
            labels.unshift("Other");
        return labels;
    };
    SelectBase.prototype.getPercentages = function () {
        var data = this.getData();
        var percentages = [];
        if (data.length < 2) {
            data.forEach(function (res, index) {
                var sum = res.reduce(function (sum, val) { return sum + val; });
                percentages[index] = res.map(function (val) {
                    return sum && Math.round((val / sum) * 100);
                });
            });
        }
        else {
            for (var i = 0; i < data[0].length; i++) {
                var sum = 0;
                for (var j = 0; j < data.length; j++) {
                    sum += data[j][i];
                }
                for (var j = 0; j < data.length; j++) {
                    if (!Array.isArray(percentages[j]))
                        percentages[j] = [];
                    percentages[j][i] = sum && Math.round((data[j][i] / sum) * 100);
                }
            }
        }
        return percentages;
    };
    return SelectBase;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_2__["VisualizerBase"]));



/***/ }),

/***/ "./src/text.scss":
/*!***********************!*\
  !*** ./src/text.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/text.ts":
/*!*********************!*\
  !*** ./src/text.ts ***!
  \*********************/
/*! exports provided: TextTableAdapter, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTableAdapter", function() { return TextTableAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _text_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text.scss */ "./src/text.scss");
/* harmony import */ var _text_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");





var TextTableAdapter = /** @class */ (function () {
    function TextTableAdapter(model) {
        this.model = model;
    }
    TextTableAdapter.prototype.create = function (container) {
        var _a = this.model.getData(), columnsCount = _a.columnsCount, data = _a.data;
        var emptyTextNode = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("p", "", {
            innerHTML: "There are no results yet",
        });
        if (data.length === 0) {
            container.appendChild(emptyTextNode);
            return;
        }
        var tableNode = (_utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("table", "sa-text-table"));
        tableNode.style.backgroundColor = this.model.backgroundColor;
        container.appendChild(tableNode);
        data.forEach(function (rowData) {
            var row = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("tr");
            for (var i = 0; i < columnsCount; i++) {
                var td = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("td", "sa-text-table__cell", {
                    textContent: rowData[i],
                });
                row.appendChild(td);
            }
            tableNode.appendChild(row);
        });
        container.className = "sa-text-table__container";
        container.appendChild(tableNode);
    };
    TextTableAdapter.prototype.destroy = function (node) {
        node.innerHTML = "";
    };
    return TextTableAdapter;
}());

var Text = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Text, _super);
    function Text(question, data, options, name) {
        var _this = _super.call(this, question, data, options, name || "text") || this;
        _this._textTableAdapter = new TextTableAdapter(_this);
        return _this;
    }
    Text.prototype.getData = function () {
        var _this = this;
        var result = [];
        var columnsCount = 0;
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            var dataStrings = [];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    dataStrings.concat(rowValue);
                }
                else {
                    if (typeof rowValue === "object") {
                        Object.keys(rowValue).forEach(function (key) {
                            return dataStrings.push(rowValue[key]);
                        });
                    }
                    else {
                        dataStrings.push(rowValue);
                    }
                }
                result.push(dataStrings);
                if (dataStrings.length > columnsCount) {
                    columnsCount = dataStrings.length;
                }
            }
        });
        return { columnsCount: columnsCount, data: result };
    };
    Text.prototype.destroyContent = function (container) {
        this._textTableAdapter.destroy(container);
        _super.prototype.destroyContent.call(this, container);
    };
    Text.prototype.renderContent = function (container) {
        this._textTableAdapter.create(container);
    };
    Text.prototype.destroy = function () {
        this._textTableAdapter.destroy(this.contentContainer);
        _super.prototype.destroy.call(this);
    };
    return Text;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_1__["VisualizerBase"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("text", Text);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("comment", Text);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("multipletext", Text);


/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! exports provided: __assign, __extends, __rest, __decorate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
var __assign = Object["assign"] ||
    function (target) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    target[p] = s[p];
        }
        return target;
    };
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() {
        this.constructor = thisClass;
    }
    thisClass.prototype =
        baseClass === null
            ? Object.create(baseClass)
            : ((__.prototype = baseClass.prototype), new __());
}
var __rest = function (source, e) {
    var result = {};
    for (var propertyName in source)
        if (Object.prototype.hasOwnProperty.call(source, propertyName) &&
            e.indexOf(propertyName) < 0)
            result[propertyName] = source[propertyName];
    if (source != null &&
        typeof Object["getOwnPropertySymbols"] === "function")
        for (var i = 0, propertySymbols = Object["getOwnPropertySymbols"](source); i < propertySymbols.length; i++)
            if (e.indexOf(propertySymbols[i]) < 0)
                result[propertySymbols[i]] = source[propertySymbols[i]];
    return result;
};
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3
        ? target
        : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: DocumentHelper, options, allowDomRendering, DataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return DocumentHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowDomRendering", function() { return allowDomRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHelper", function() { return DataHelper; });
var DocumentHelper = /** @class */ (function () {
    function DocumentHelper() {
    }
    DocumentHelper.createSelector = function (options, isSelected, handler) {
        var selectWrapper = document.createElement("div");
        selectWrapper.className = "sa-question__select-wrapper";
        var select = document.createElement("select");
        select.className = "sa-question__select";
        options.forEach(function (option) {
            var optionElement = DocumentHelper.createElement("option", "", {
                value: option.value,
                text: option.text,
                selected: isSelected(option),
            });
            select.appendChild(optionElement);
        });
        select.onchange = handler;
        selectWrapper.appendChild(select);
        return selectWrapper;
    };
    DocumentHelper.createButton = function (handler, text, className) {
        if (text === void 0) { text = ""; }
        if (className === void 0) { className = "sa-toolbar__button"; }
        var button = DocumentHelper.createElement("span", className, {
            innerText: text,
            onclick: handler,
        });
        return button;
    };
    DocumentHelper.createElement = function (tagName, className, attrs) {
        if (className === void 0) { className = ""; }
        var el = document.createElement(tagName);
        el.className = className;
        if (!!attrs) {
            Object.keys(attrs).forEach(function (key) {
                el[key] = attrs[key];
            });
        }
        return el;
    };
    DocumentHelper.createSvgElement = function (path) {
        var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sa-svg-" + path);
        svgElem.appendChild(useElem);
        return svgElem;
    };
    DocumentHelper.createSvgButton = function (path) {
        var btn = (DocumentHelper.createElement("button", "sa-table__svg-button"));
        btn.appendChild(DocumentHelper.createSvgElement(path));
        return btn;
    };
    DocumentHelper.createSvgToggleButton = function (svgPath1, svPpath2, text1, text2, handler1, handler2, state, className) {
        if (state === void 0) { state = "first"; }
        if (className === void 0) { className = "sa-toolbar__button sa-toolbar__svg-button"; }
        var svg1 = DocumentHelper.createSvgElement(svgPath1);
        var svg2 = DocumentHelper.createSvgElement(svPpath2);
        var button = DocumentHelper.createElement("button", className);
        var toggle = function (e) {
            if (state === "first") {
                state = "second";
                button.title = text2;
                button.removeChild(svg1);
                button.appendChild(svg2);
                handler2(e);
            }
            else if (state === "second") {
                state = "first";
                button.title = text1;
                button.removeChild(svg2);
                button.appendChild(svg1);
                handler1(e);
            }
        };
        if (state === "first") {
            button.title = text1;
            button.appendChild(svg1);
        }
        else if ((state = "second")) {
            button.title = text2;
            button.appendChild(svg2);
        }
        button.onclick = toggle;
        return button;
    };
    DocumentHelper.createInput = function (className, placeholder, defaultValue) {
        if (placeholder === void 0) { placeholder = ""; }
        if (defaultValue === void 0) { defaultValue = ""; }
        var el = DocumentHelper.createElement("input", className, {
            placeholder: placeholder,
            defaultValue: defaultValue,
        });
        return el;
    };
    return DocumentHelper;
}());

var options = {
    runningInBrowser: typeof window.URL.createObjectURL === "function",
};
function allowDomRendering() {
    return options.runningInBrowser;
}
var DataHelper = /** @class */ (function () {
    function DataHelper() {
    }
    DataHelper.zipArrays = function (first, second) {
        var zipArray = [];
        for (var i = 0; i < Math.min(first.length, second.length); i++) {
            zipArray[i] = [first[i], second[i]];
        }
        return zipArray;
    };
    DataHelper.unzipArrays = function (zipArray) {
        var twoArrays = { first: [], second: [] };
        zipArray.forEach(function (value, i) {
            twoArrays.first[i] = value[0];
            twoArrays.second[i] = value[1];
        });
        return twoArrays;
    };
    DataHelper.sortDictionary = function (keys, values, desc) {
        var dictionary = this.zipArrays(keys, values);
        var comparator = function (a, b, asc) {
            if (asc === void 0) { asc = true; }
            var result = a[1] < b[1] ? 1 : a[1] == b[1] ? 0 : -1;
            return asc ? result : result * -1;
        };
        dictionary.sort(function (a, b) {
            return desc ? comparator(a, b, false) : comparator(a, b);
        });
        var keysAndValues = this.unzipArrays(dictionary);
        return { keys: keysAndValues.first, values: keysAndValues.second };
    };
    DataHelper.toPercentage = function (value, maxValue) {
        return (value / maxValue) * 100;
    };
    return DataHelper;
}());



/***/ }),

/***/ "./src/visualizationManager.ts":
/*!*************************************!*\
  !*** ./src/visualizationManager.ts ***!
  \*************************************/
/*! exports provided: VisualizationManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return VisualizationManager; });
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");

var VisualizationManager = /** @class */ (function () {
    function VisualizationManager() {
    }
    /**
     * Register visualizer (constructor) for question type.
     */
    VisualizationManager.registerVisualizer = function (typeName, constructor) {
        var vizualizers = VisualizationManager.vizualizers[typeName];
        if (!vizualizers) {
            vizualizers = [];
            VisualizationManager.vizualizers[typeName] = vizualizers;
        }
        vizualizers.push(constructor);
    };
    /**
     * Get visualizers (constructors) for question type.
     */
    VisualizationManager.getVisualizersByType = function (typeName) {
        var vizualizers = VisualizationManager.vizualizers[typeName];
        if (!vizualizers) {
            return [_visualizerBase__WEBPACK_IMPORTED_MODULE_0__["VisualizerBase"]];
        }
        return vizualizers;
    };
    /**
     * Get visualizers (constructors) for question type.
     */
    VisualizationManager.getAlternativesVisualizer = function () {
        return VisualizationManager.alternativesVisualizer || _visualizerBase__WEBPACK_IMPORTED_MODULE_0__["VisualizerBase"];
    };
    /**
     * Register visualizer (constructor) for question type.
     */
    VisualizationManager.registerAlternativesVisualizer = function (constructor) {
        VisualizationManager.alternativesVisualizer = constructor;
    };
    VisualizationManager.alternativesVisualizer = undefined;
    VisualizationManager.vizualizers = {};
    return VisualizationManager;
}());



/***/ }),

/***/ "./src/visualizationMatrixDropdown.ts":
/*!********************************************!*\
  !*** ./src/visualizationMatrixDropdown.ts ***!
  \********************************************/
/*! exports provided: VisualizationMatrixDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDropdown", function() { return VisualizationMatrixDropdown; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _visualizationPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualizationPanel */ "./src/visualizationPanel.ts");
/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataProvider */ "./src/dataProvider.ts");





var VisualizationMatrixDropdown = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VisualizationMatrixDropdown, _super);
    function VisualizationMatrixDropdown(question, data, options, name) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, question, data, options, name || "matrixDropdown") || this;
        _this._panelVisualizer = undefined;
        var options = Object.assign({}, options);
        options.dataProvider = undefined;
        options.allowDynamicLayout = false;
        options.seriesValues = question.rows.map(function (row) { return row.value; });
        options.seriesLabels = question.rows.map(function (row) { return row.text; });
        _this._panelVisualizer = new _visualizationPanel__WEBPACK_IMPORTED_MODULE_3__["VisualizationPanel"](_this.getQuestions(), [], options);
        _this.updateData(data);
        return _this;
    }
    VisualizationMatrixDropdown.prototype.updateData = function (data) {
        var _this = this;
        _super.prototype.updateData.call(this, data);
        var panelData = [];
        this.data.forEach(function (dataItem) {
            var rawDataItem = dataItem[_this.question.name];
            if (!!rawDataItem) {
                Object.keys(rawDataItem).forEach(function (key) {
                    var nestedDataItem = Object.assign({}, rawDataItem[key]);
                    nestedDataItem[_dataProvider__WEBPACK_IMPORTED_MODULE_4__["DataProvider"].seriesMarkerKey] = key;
                    panelData.push(nestedDataItem);
                });
            }
        });
        this._panelVisualizer.updateData(panelData);
    };
    VisualizationMatrixDropdown.prototype.getQuestions = function () {
        var matrixdropdown = this.question;
        return matrixdropdown.columns.map(function (column) { return column.templateQuestion; });
    };
    VisualizationMatrixDropdown.prototype.destroyContent = function (container) {
        this._panelVisualizer.clear();
        _super.prototype.destroyContent.call(this, this.contentContainer);
    };
    VisualizationMatrixDropdown.prototype.renderContent = function (container) {
        this._panelVisualizer.render(container);
    };
    return VisualizationMatrixDropdown;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_1__["VisualizerBase"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("matrixdropdown", VisualizationMatrixDropdown);


/***/ }),

/***/ "./src/visualizationMatrixDynamic.ts":
/*!*******************************************!*\
  !*** ./src/visualizationMatrixDynamic.ts ***!
  \*******************************************/
/*! exports provided: VisualizationMatrixDynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return VisualizationMatrixDynamic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _visualizationPanelDynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizationPanelDynamic */ "./src/visualizationPanelDynamic.ts");



var VisualizationMatrixDynamic = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VisualizationMatrixDynamic, _super);
    function VisualizationMatrixDynamic(question, data, options) {
        return _super.call(this, question, data, options) || this;
    }
    Object.defineProperty(VisualizationMatrixDynamic.prototype, "name", {
        get: function () {
            return "matrixDynamic";
        },
        enumerable: false,
        configurable: true
    });
    VisualizationMatrixDynamic.prototype.getQuestions = function () {
        var matrixdynamic = this.question;
        var visibleRows = matrixdynamic.visibleRows;
        if (visibleRows.length === 0)
            return [];
        return visibleRows[0].cells.map(function (c) { return c.question; });
    };
    return VisualizationMatrixDynamic;
}(_visualizationPanelDynamic__WEBPACK_IMPORTED_MODULE_2__["VisualizationPanelDynamic"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_1__["VisualizationManager"].registerVisualizer("matrixdynamic", VisualizationMatrixDynamic);


/***/ }),

/***/ "./src/visualizationPanel.scss":
/*!*************************************!*\
  !*** ./src/visualizationPanel.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/visualizationPanel.ts":
/*!***********************************!*\
  !*** ./src/visualizationPanel.ts ***!
  \***********************************/
/*! exports provided: VisualizationPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return VisualizationPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectBase */ "./src/selectBase.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/index */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _filterInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filterInfo */ "./src/filterInfo.ts");
/* harmony import */ var _layoutEngine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layoutEngine */ "./src/layoutEngine.ts");
/* harmony import */ var _visualizationPanel_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visualizationPanel.scss */ "./src/visualizationPanel.scss");
/* harmony import */ var _visualizationPanel_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_visualizationPanel_scss__WEBPACK_IMPORTED_MODULE_9__);










var questionElementClassName = "sa-question";
var questionLayoutedElementClassName = "sa-question-layouted";
if (!!document) {
    var svgTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!./svgbundle.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html");
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
/**
 * VisualizationPanel is responsible for displaying an array of survey questions
 *
 * constructor parameters:
 * questions - an array of survey questions to visualize
 * data - an array of answers in format of survey result
 *
 * options:
 * allowDynamicLayout - set it to false to disable items drag/drop reordering and dynamic layouting
 * allowHideQuestions - set it to false to deny user to hide/show individual questions
 * seriesValues - an array of series values in data to group data by series
 * seriesLabels - labels for series to display, if not passed the seriesValues are used as labels
 * survey - pass survey instance to use localses from the survey JSON
 * dataProvider - dataProvider for this visualizer
 *
 * elements - list of visual element descriptions
 */
var VisualizationPanel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VisualizationPanel, _super);
    function VisualizationPanel(questions, data, options, _elements, isTrustedAccess) {
        if (options === void 0) { options = {}; }
        if (_elements === void 0) { _elements = undefined; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        var _this = _super.call(this, null, data, options, "panel") || this;
        _this.questions = questions;
        _this._elements = _elements;
        _this.isTrustedAccess = isTrustedAccess;
        _this.visualizers = [];
        /**
         * Fires when element visibility has been changed.
         * options:
         * elements - panel elements array
         * changed - changed element
         * reason - reason (string) why event fired: "ADDED", "MOVED" or "REMOVED"
         */
        _this.onVisibleElementsChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        /**
         * Fires when vizualization panel state changed.
         * sender - this panel
         * state - new state of the panel
         */
        _this.onStateChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        _this._layoutEngine =
            options.layoutEngine ||
                new _layoutEngine__WEBPACK_IMPORTED_MODULE_8__["MuuriLayoutEngine"](_this.allowDynamicLayout, "." + questionLayoutedElementClassName);
        _this._layoutEngine.onMoveCallback = function (fromIndex, toIndex) {
            return _this.moveVisibleElement(fromIndex, toIndex);
        };
        _this.showHeader = false;
        if (_this.options.survey) {
            _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].currentLocale = _this.options.survey.locale;
        }
        if (_elements === undefined) {
            _this._elements = _this.buildElements(questions);
        }
        _this.buildVisualizers(questions);
        _this.registerToolbarItem("resetFilter", function () {
            return _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createButton(function () {
                _this.visualizers.forEach(function (visualizer) {
                    if (visualizer instanceof _selectBase__WEBPACK_IMPORTED_MODULE_3__["SelectBase"]) {
                        visualizer.setSelection(undefined);
                    }
                });
            }, _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString("resetFilter"));
        });
        _this.registerToolbarItem("addElement", function (toolbar) {
            if (_this.allowHideQuestions) {
                var addElementSelector_1 = undefined;
                var addElementSelectorUpdater = function (panel, options) {
                    var hiddenElements = _this.hiddenElements;
                    if (hiddenElements.length > 0) {
                        var selectWrapper = _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createSelector([
                            {
                                name: undefined,
                                displayName: _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString("addElement"),
                            },
                        ]
                            .concat(hiddenElements)
                            .map(function (element) {
                            return {
                                value: element.name,
                                text: element.displayName,
                            };
                        }), function (option) { return false; }, function (e) {
                            _this.showElement(e.target.value);
                        });
                        (addElementSelector_1 &&
                            toolbar.replaceChild(selectWrapper, addElementSelector_1)) ||
                            toolbar.appendChild(selectWrapper);
                        addElementSelector_1 = selectWrapper;
                    }
                    else {
                        addElementSelector_1 && toolbar.removeChild(addElementSelector_1);
                        addElementSelector_1 = undefined;
                    }
                };
                addElementSelectorUpdater(_this, {});
                _this.onVisibleElementsChanged.add(addElementSelectorUpdater);
            }
            return undefined;
        });
        if (_this.locales.length > 1) {
            _this.registerToolbarItem("changeLocale", function () {
                return _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createSelector([_localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString("changeLocale")]
                    .concat(_this.locales)
                    .map(function (element) {
                    return {
                        value: element,
                        text: element,
                    };
                }), function (option) { return false; }, function (e) {
                    var newLocale = e.target.value;
                    _this.locale = newLocale;
                });
            });
        }
        return _this;
    }
    VisualizationPanel.prototype.showElement = function (elementName) {
        var element = this.getElement(elementName);
        var elementIndex = this._elements.indexOf(element);
        element.visibility = _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Visible;
        var questionElement = this.renderPanelElement(element);
        this.contentContainer.appendChild(questionElement);
        this.layoutEngine.add([questionElement], { index: elementIndex });
        this.visibleElementsChanged(element, "ADDED");
    };
    VisualizationPanel.prototype.hideElement = function (elementName) {
        var element = this.getElement(elementName);
        element.visibility = _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Invisible;
        if (!!element.renderedElement) {
            this.layoutEngine.remove([element.renderedElement]);
            this.contentContainer.removeChild(element.renderedElement);
            element.renderedElement = undefined;
        }
        this.visibleElementsChanged(element, "REMOVED");
    };
    VisualizationPanel.prototype.makeElementPrivate = function (element) {
        if (element.visibility !== _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Visible)
            return;
        element.visibility = _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].PublicInvisible;
        this.onStateChanged.fire(this, this.state);
        this.onPermissionsChangedCallback &&
            this.onPermissionsChangedCallback(this);
    };
    VisualizationPanel.prototype.makeElementPublic = function (element) {
        if (element.visibility !== _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].PublicInvisible)
            return;
        element.visibility = _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Visible;
        this.onStateChanged.fire(this, this.state);
        this.onPermissionsChangedCallback &&
            this.onPermissionsChangedCallback(this);
    };
    VisualizationPanel.prototype.moveVisibleElement = function (fromVisibleIndex, toVisibleIndex) {
        var fromIndex, toIndex;
        var fromVisibleIndexElement = this.visibleElements[fromVisibleIndex];
        var toVisibleIndexElement = this.visibleElements[toVisibleIndex];
        fromIndex = this._elements.indexOf(fromVisibleIndexElement);
        toIndex = this._elements.indexOf(toVisibleIndexElement);
        this.moveElement(fromIndex, toIndex);
    };
    VisualizationPanel.prototype.moveElement = function (fromIndex, toIndex) {
        var elements = this._elements.splice(fromIndex, 1);
        this._elements.splice(toIndex, 0, elements[0]);
        this.visibleElementsChanged(elements[0], "MOVED");
    };
    VisualizationPanel.prototype.buildVisualizers = function (questions) {
        var _this = this;
        questions.forEach(function (question) {
            var visualizer = _this.createVisualizer(question);
            if (_this.allowHideQuestions) {
                visualizer.registerToolbarItem("removeQuestion", function () {
                    return _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createButton(function () {
                        setTimeout(function () { return _this.hideElement(question.name); }, 0);
                    }, _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString("hideButton"));
                });
            }
            if (_this.isTrustedAccess) {
                visualizer.registerToolbarItem("makePrivatePublic", function () {
                    var element = _this.getElement(question.name);
                    var state = element.visibility === _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Visible
                        ? "first"
                        : "second";
                    var pathMakePrivateSvg = "makeprivate";
                    var pathMakePublicSvg = "makepublic";
                    var makePrivateTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString("makePrivateButton");
                    var makePublicTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString("makePublicButton");
                    var doPrivate = function (e) {
                        setTimeout(function () { return _this.makeElementPrivate(element); }, 0);
                    };
                    var doPublic = function (e) {
                        setTimeout(function () { return _this.makeElementPublic(element); }, 0);
                    };
                    return _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createSvgToggleButton(pathMakePublicSvg, pathMakePrivateSvg, makePrivateTitle, makePublicTitle, doPublic, doPrivate, state);
                });
            }
            if (visualizer instanceof _selectBase__WEBPACK_IMPORTED_MODULE_3__["SelectBase"]) {
                var filterInfo_1 = new _filterInfo__WEBPACK_IMPORTED_MODULE_7__["FilterInfo"](visualizer);
                visualizer.registerToolbarItem("questionFilterInfo", function () {
                    filterInfo_1.update(visualizer.selection);
                    return filterInfo_1.htmlElement;
                });
                visualizer.onDataItemSelected = function (selectedValue, selectedText) {
                    filterInfo_1.update({ value: selectedValue, text: selectedText });
                    _this.setFilter(question.name, selectedValue);
                };
            }
            visualizer.onUpdate = function () { return _this.layout(); };
            _this.visualizers.push(visualizer);
        });
    };
    VisualizationPanel.prototype.destroyVisualizers = function () {
        this.visualizers.forEach(function (visualizer) {
            visualizer.onUpdate = undefined;
            if (visualizer instanceof _selectBase__WEBPACK_IMPORTED_MODULE_3__["SelectBase"]) {
                visualizer.onDataItemSelected = undefined;
            }
            visualizer.destroy();
        });
        this.visualizers = [];
    };
    Object.defineProperty(VisualizationPanel.prototype, "locale", {
        /**
         * Returns current locale of the visualization panel.
         * If locales more than one, the language selection dropdown will be added in the toolbar
         * In order to use survey locales the survey instance object should be passed as 'survey' option for visualizer
         */
        get: function () {
            var survey = this.options.survey;
            if (!!survey) {
                return survey.locale;
            }
            return _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].currentLocale;
        },
        /**
         * Sets locale for visualization panel.
         */
        set: function (newLocale) {
            this.setLocale(newLocale);
            this.refresh();
            this.onStateChanged.fire(this, this.state);
        },
        enumerable: false,
        configurable: true
    });
    VisualizationPanel.prototype.setLocale = function (newLocale) {
        var _this = this;
        var survey = this.options.survey;
        if (!!survey) {
            survey.locale = newLocale;
            (this.questions || []).forEach(function (question) {
                var element = _this.getElement(question.name);
                if (!!element) {
                    element.displayName = question.title;
                }
            });
        }
        _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].currentLocale = newLocale;
    };
    Object.defineProperty(VisualizationPanel.prototype, "allowDynamicLayout", {
        /**
         * Returns whether the VisualizationPanel allows dynamic layouting - rearrange items via drap/drop.
         */
        get: function () {
            return (this.options.allowDynamicLayout === undefined ||
                this.options.allowDynamicLayout === true);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "allowHideQuestions", {
        /**
         * Returns whether the VisualizationPanel allows to hide/show individual inner visualizers.
         */
        get: function () {
            return (this.options.allowHideQuestions === undefined ||
                this.options.allowHideQuestions === true);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "layoutEngine", {
        /**
         * Returns the layout engine instance if any.
         */
        get: function () {
            return this._layoutEngine;
        },
        enumerable: false,
        configurable: true
    });
    VisualizationPanel.prototype.buildElements = function (questions) {
        return (questions || []).map(function (question) {
            return {
                name: question.name,
                displayName: question.title,
                visibility: _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Visible,
                type: undefined,
            };
        });
    };
    /**
     * Returns panel elements descriptions array.
     * Inner visualizers are rendered in the order of this array and with titles from the displayName property
     */
    VisualizationPanel.prototype.getElements = function () {
        return (this._elements || []).map(function (element) {
            return {
                name: element.name,
                displayName: element.displayName,
                visibility: element.visibility,
                type: element.type,
            };
        });
    };
    /**
     * Checks whether certain element is visible.
     */
    VisualizationPanel.prototype.isVisible = function (visibility) {
        return ((this.isTrustedAccess && visibility !== _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Invisible) ||
            (!this.isTrustedAccess && visibility === _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Visible));
    };
    Object.defineProperty(VisualizationPanel.prototype, "visibleElements", {
        get: function () {
            var _this = this;
            return this._elements.filter(function (el) { return _this.isVisible(el.visibility); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "hiddenElements", {
        get: function () {
            var _this = this;
            return this._elements.filter(function (el) { return !_this.isVisible(el.visibility); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "locales", {
        get: function () {
            if (this.options.survey)
                return this.options.survey.getUsedLocales();
            return [];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns panel element description by the question name.
     */
    VisualizationPanel.prototype.getElement = function (name) {
        return this._elements.filter(function (el) { return el.name === name; })[0];
    };
    /**
     * Returns panel element visualizer by the question name.
     */
    VisualizationPanel.prototype.getVisualizer = function (dataName) {
        return this.visualizers.filter(function (v) { return v.dataName === dataName; })[0];
    };
    VisualizationPanel.prototype.visibleElementsChanged = function (element, reason) {
        if (!this.onVisibleElementsChanged.isEmpty) {
            this.onVisibleElementsChanged.fire(this, {
                elements: this._elements,
                changed: element,
                reason: reason,
            });
        }
        this.onStateChanged.fire(this, this.state);
        this.layout();
    };
    /**
     * Renders given panel element.
     */
    VisualizationPanel.prototype.renderPanelElement = function (element) {
        var visualizer = this.getVisualizer(element.name);
        var questionElement = _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        var questionContent = _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        var titleElement = _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("h3");
        var vizualizerElement = _utils_index__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        titleElement.innerText = element.displayName;
        questionElement.className = this.allowDynamicLayout
            ? questionElementClassName + " " + questionLayoutedElementClassName
            : questionElementClassName;
        titleElement.className = questionElementClassName + "__title";
        if (this.allowDynamicLayout) {
            titleElement.className =
                titleElement.className +
                    " " +
                    questionElementClassName +
                    "__title--draggable";
        }
        questionContent.className = questionElementClassName + "__content";
        questionContent.appendChild(titleElement);
        questionContent.appendChild(vizualizerElement);
        questionElement.appendChild(questionContent);
        visualizer.render(vizualizerElement);
        element.renderedElement = questionElement;
        return questionElement;
    };
    VisualizationPanel.prototype.renderToolbar = function (container) {
        container.className += " sa-panel__header";
        _super.prototype.renderToolbar.call(this, container);
    };
    /**
     * Renders all questions into given HTML container element.
     * container - HTML element to render the panel
     */
    VisualizationPanel.prototype.renderContent = function (container) {
        var _this = this;
        container.className += " sa-panel__content sa-grid";
        this.visibleElements.forEach(function (element) {
            var questionElement = _this.renderPanelElement(element);
            container.appendChild(questionElement);
        });
        this.layoutEngine.start(container);
        // !!window && window.dispatchEvent(new UIEvent("resize"));
    };
    /**
     * Destroys visualizer and all inner content.
     */
    VisualizationPanel.prototype.destroyContent = function (container) {
        this.layoutEngine.stop();
        _super.prototype.destroyContent.call(this, container);
    };
    /**
     * Method for clearing all rendered elements from outside.
     */
    VisualizationPanel.prototype.clear = function () {
        if (!!this.toolbarContainer) {
            this.destroyToolbar(this.toolbarContainer);
        }
        if (!!this.contentContainer) {
            this.destroyContent(this.contentContainer);
        }
        if (!!this.footerContainer) {
            this.destroyFooter(this.footerContainer);
        }
    };
    /**
     * Redraws visualizer toobar and all inner content.
     */
    VisualizationPanel.prototype.refresh = function () {
        if (!!this.toolbarContainer) {
            this.destroyToolbar(this.toolbarContainer);
            this.renderToolbar(this.toolbarContainer);
        }
        _super.prototype.refresh.call(this);
    };
    /**
     * Updates layout of visualizer inner content.
     */
    VisualizationPanel.prototype.layout = function () {
        this.layoutEngine.update();
    };
    /**
     * Sets filter by question name and value.
     */
    VisualizationPanel.prototype.setFilter = function (questionName, selectedValue) {
        this.dataProvider.setFilter(questionName, selectedValue);
    };
    Object.defineProperty(VisualizationPanel.prototype, "state", {
        /**
         * Gets vizualization panel state.
         */
        get: function () {
            return {
                locale: this.locale,
                elements: [].concat(this._elements),
            };
        },
        /**
         * Sets vizualization panel state.
         */
        set: function (newState) {
            if (typeof newState.elements !== "undefined")
                this._elements = [].concat(newState.elements);
            if (typeof newState.locale !== "undefined")
                this.setLocale(newState.locale);
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "permissions", {
        /**
         * Gets vizualization panel permissions.
         */
        get: function () {
            return this._elements.map(function (element) {
                return {
                    name: element.name,
                    visibility: element.visibility,
                };
            });
        },
        /**
         * Sets vizualization panel permissions.
         */
        set: function (permissions) {
            var updatedElements = this._elements.map(function (element) {
                permissions.forEach(function (permission) {
                    if (permission.name === element.name)
                        element.visibility = permission.visibility;
                });
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, element);
            });
            this._elements = [].concat(updatedElements);
            this.refresh();
            this.onPermissionsChangedCallback &&
                this.onPermissionsChangedCallback(this);
        },
        enumerable: false,
        configurable: true
    });
    VisualizationPanel.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.destroyVisualizers();
    };
    return VisualizationPanel;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_2__["VisualizerBase"]));



/***/ }),

/***/ "./src/visualizationPanelDynamic.ts":
/*!******************************************!*\
  !*** ./src/visualizationPanelDynamic.ts ***!
  \******************************************/
/*! exports provided: VisualizationPanelDynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return VisualizationPanelDynamic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _visualizationPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualizationPanel */ "./src/visualizationPanel.ts");




var VisualizationPanelDynamic = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VisualizationPanelDynamic, _super);
    function VisualizationPanelDynamic(question, data, options, name) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, question, data, options, name || "panelDynamic") || this;
        _this._panelVisualizer = undefined;
        var options = Object.assign({}, options);
        options.allowDynamicLayout = false;
        options.dataProvider = undefined;
        _this._panelVisualizer = new _visualizationPanel__WEBPACK_IMPORTED_MODULE_3__["VisualizationPanel"](_this.getQuestions(), [], options);
        _this.updateData(data);
        return _this;
    }
    Object.defineProperty(VisualizationPanelDynamic.prototype, "name", {
        get: function () {
            return "panelDynamic";
        },
        enumerable: false,
        configurable: true
    });
    VisualizationPanelDynamic.prototype.updateData = function (data) {
        var _this = this;
        _super.prototype.updateData.call(this, data);
        var panelData = [];
        this.data.forEach(function (dataItem) {
            if (dataItem[_this.question.name] !== undefined) {
                panelData = panelData.concat(dataItem[_this.question.name]);
            }
        });
        this._panelVisualizer.updateData(panelData);
    };
    VisualizationPanelDynamic.prototype.getQuestions = function () {
        var paneldynamic = this.question;
        return paneldynamic.template.questions;
    };
    VisualizationPanelDynamic.prototype.destroyContent = function (container) {
        this._panelVisualizer.clear();
        _super.prototype.destroyContent.call(this, this.contentContainer);
    };
    VisualizationPanelDynamic.prototype.renderContent = function (container) {
        this._panelVisualizer.render(container);
    };
    return VisualizationPanelDynamic;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_1__["VisualizerBase"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("paneldynamic", VisualizationPanelDynamic);


/***/ }),

/***/ "./src/visualizerBase.scss":
/*!*********************************!*\
  !*** ./src/visualizerBase.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/visualizerBase.ts":
/*!*******************************!*\
  !*** ./src/visualizerBase.ts ***!
  \*******************************/
/*! exports provided: VisualizerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return VisualizerBase; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataProvider */ "./src/dataProvider.ts");
/* harmony import */ var _visualizerFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizerFactory */ "./src/visualizerFactory.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _visualizerBase_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visualizerBase.scss */ "./src/visualizerBase.scss");
/* harmony import */ var _visualizerBase_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_visualizerBase_scss__WEBPACK_IMPORTED_MODULE_5__);






var VisualizerBase = /** @class */ (function () {
    function VisualizerBase(question, data, options, _name) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.question = question;
        this.options = options;
        this._name = _name;
        this._showHeader = true;
        this._footerVisualizer = undefined;
        this._dataProvider = undefined;
        this.renderResult = undefined;
        this.toolbarContainer = undefined;
        this.contentContainer = undefined;
        this.footerContainer = undefined;
        this.toolbarItemCreators = {};
        this.backgroundColor = "#f7f7f7";
        this._dataProvider = options.dataProvider || new _dataProvider__WEBPACK_IMPORTED_MODULE_1__["DataProvider"](data);
        this._dataProvider.onDataChanged.add(function () { return _this.onDataChanged(); });
    }
    VisualizerBase.prototype.onDataChanged = function () {
        this.refresh();
    };
    Object.defineProperty(VisualizerBase.prototype, "dataName", {
        get: function () {
            return this.question.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualizerBase.prototype, "hasFooter", {
        get: function () {
            return (!!this.question && (this.question.hasComment || this.question.hasOther));
        },
        enumerable: false,
        configurable: true
    });
    VisualizerBase.prototype.createVisualizer = function (question) {
        var options = Object.assign({}, this.options);
        if (options.dataProvider === undefined) {
            options.dataProvider = this.dataProvider;
        }
        return _visualizerFactory__WEBPACK_IMPORTED_MODULE_2__["VisualizerFactory"].createVisualizer(question, this.data, options);
    };
    Object.defineProperty(VisualizerBase.prototype, "footerVisualizer", {
        get: function () {
            var _this = this;
            if (!this.hasFooter) {
                return undefined;
            }
            if (!this._footerVisualizer) {
                var question = new survey_core__WEBPACK_IMPORTED_MODULE_0__["QuestionCommentModel"](this.question.name + (survey_core__WEBPACK_IMPORTED_MODULE_0__["settings"] || {}).commentPrefix);
                question.title = this.question.title;
                this._footerVisualizer = this.createVisualizer(question);
                this._footerVisualizer.onUpdate = function () { return _this.invokeOnUpdate(); };
            }
            return this._footerVisualizer;
        },
        enumerable: false,
        configurable: true
    });
    VisualizerBase.prototype.getSeriesValues = function () {
        return this.options.seriesValues || [];
    };
    VisualizerBase.prototype.getSeriesLabels = function () {
        return this.options.seriesLabels || this.getSeriesValues();
    };
    VisualizerBase.prototype.getValues = function () {
        throw new Error("Method not implemented.");
    };
    VisualizerBase.prototype.getLabels = function () {
        return this.getValues();
    };
    VisualizerBase.prototype.registerToolbarItem = function (name, creator) {
        this.toolbarItemCreators[name] = creator;
    };
    Object.defineProperty(VisualizerBase.prototype, "name", {
        get: function () {
            return this._name || "visualizer";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualizerBase.prototype, "data", {
        get: function () {
            return this.dataProvider.filteredData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualizerBase.prototype, "dataProvider", {
        get: function () {
            return this._dataProvider;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Updates visualizer data.
     */
    VisualizerBase.prototype.updateData = function (data) {
        if (!this.options.dataProvider) {
            this.dataProvider.data = data;
        }
        if (this.hasFooter) {
            this.footerVisualizer.updateData(data);
        }
    };
    VisualizerBase.prototype.invokeOnUpdate = function () {
        this.onUpdate && this.onUpdate();
    };
    VisualizerBase.prototype.destroy = function () {
        if (!!this.renderResult) {
            this.destroyToolbar(this.toolbarContainer);
            this.toolbarContainer = undefined;
            this.destroyContent(this.contentContainer);
            this.contentContainer = undefined;
            this.destroyFooter(this.footerContainer);
            this.footerContainer = undefined;
            this.renderResult.innerHTML = "";
            this.renderResult = undefined;
        }
        if (!!this._footerVisualizer) {
            this._footerVisualizer.destroy();
            this._footerVisualizer.onUpdate = undefined;
            this._footerVisualizer = undefined;
        }
    };
    VisualizerBase.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        Object.keys(this.toolbarItemCreators || {}).forEach(function (toolbarItemName) {
            var toolbarItem = _this.toolbarItemCreators[toolbarItemName](toolbar);
            if (!!toolbarItem) {
                toolbar.appendChild(toolbarItem);
            }
        });
    };
    VisualizerBase.prototype.destroyToolbar = function (container) {
        container.innerHTML = "";
    };
    VisualizerBase.prototype.renderToolbar = function (container) {
        if (this.showHeader) {
            var toolbar_1 = (_utils__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createElement("div", "sa-toolbar"));
            this.createToolbarItems(toolbar_1);
            container.appendChild(toolbar_1);
        }
    };
    VisualizerBase.prototype.destroyContent = function (container) {
        if (!!this.options && typeof this.options.destroyContent === "function") {
            this.options.destroyContent(container, this);
        }
        else {
            container.innerHTML = "";
        }
    };
    VisualizerBase.prototype.renderContent = function (container) {
        if (!!this.options && typeof this.options.renderContent === "function") {
            this.options.renderContent(container, this);
        }
        else {
            container.innerHTML = "This question type is not visualized yet";
        }
    };
    VisualizerBase.prototype.destroyFooter = function (container) {
        container.innerHTML = "";
    };
    VisualizerBase.prototype.renderFooter = function (container) {
        var _this = this;
        container.innerHTML = "";
        if (this.hasFooter) {
            var footerTitleElement = _utils__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createElement("h4", "sa-visualizer__footer-title", { innerText: _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].getString("otherCommentTitle") });
            container.appendChild(footerTitleElement);
            var footerContentElement_1 = _utils__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createElement("div", "sa-visualizer__footer-content");
            footerContentElement_1.style.display = VisualizerBase.otherCommentCollapsed
                ? "none"
                : "block";
            var visibilityButton_1 = _utils__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createButton(function () {
                if (footerContentElement_1.style.display === "none") {
                    footerContentElement_1.style.display = "block";
                    visibilityButton_1.innerText = _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].getString("hideButton");
                }
                else {
                    footerContentElement_1.style.display = "none";
                    visibilityButton_1.innerText = _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].getString(VisualizerBase.otherCommentCollapsed ? "showButton" : "hideButton");
                }
                _this.footerVisualizer.invokeOnUpdate();
            }, _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].getString("showButton") /*, "sa-toolbar__button--right"*/);
            container.appendChild(visibilityButton_1);
            container.appendChild(footerContentElement_1);
            this.footerVisualizer.render(footerContentElement_1);
        }
    };
    VisualizerBase.prototype.render = function (targetElement) {
        this.renderResult = targetElement;
        this.toolbarContainer = _utils__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createElement("div", "sa-visualizer__toolbar");
        targetElement.appendChild(this.toolbarContainer);
        this.renderToolbar(this.toolbarContainer);
        this.contentContainer = _utils__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createElement("div", "sa-visualizer__content");
        targetElement.appendChild(this.contentContainer);
        this.renderContent(this.contentContainer);
        this.footerContainer = _utils__WEBPACK_IMPORTED_MODULE_3__["DocumentHelper"].createElement("div", "sa-visualizer__footer");
        targetElement.appendChild(this.footerContainer);
        this.renderFooter(this.footerContainer);
    };
    /**
     * Redraws visualizer and all inner content.
     */
    VisualizerBase.prototype.refresh = function () {
        var _this = this;
        if (!!this.contentContainer) {
            setTimeout(function () {
                _this.destroyContent(_this.contentContainer);
                _this.renderContent(_this.contentContainer);
                _this.invokeOnUpdate();
            });
        }
        if (!!this.footerContainer) {
            setTimeout(function () {
                _this.destroyFooter(_this.footerContainer);
                _this.renderFooter(_this.footerContainer);
                _this.invokeOnUpdate();
            });
        }
    };
    VisualizerBase.prototype.getRandomColor = function () {
        var colors = this.getColors();
        return colors[Math.floor(Math.random() * colors.length)];
    };
    VisualizerBase.prototype.getColors = function (count) {
        if (count === void 0) { count = 10; }
        var colors = Array.isArray(VisualizerBase.customColors) &&
            VisualizerBase.customColors.length > 0
            ? VisualizerBase.customColors
            : VisualizerBase.colors;
        var manyColors = [];
        for (var index = 0; index < count; index++) {
            manyColors = manyColors.concat(colors);
        }
        return manyColors;
    };
    Object.defineProperty(VisualizerBase.prototype, "showHeader", {
        get: function () {
            return this._showHeader;
        },
        set: function (newValue) {
            if (newValue != this._showHeader) {
                this._showHeader = newValue;
                if (!!this.toolbarContainer) {
                    this.destroyToolbar(this.toolbarContainer);
                    this.renderToolbar(this.toolbarContainer);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    VisualizerBase.prototype.getData = function () {
        return this.dataProvider.getData(this);
    };
    // public static otherCommentQuestionType = "comment"; // TODO: make it configureable - allow choose what kind of question/visualizer will be used for comments/others
    VisualizerBase.otherCommentCollapsed = true;
    VisualizerBase.customColors = [];
    VisualizerBase.colors = [
        "#86e1fb",
        "#3999fb",
        "#ff6771",
        "#1eb496",
        "#ffc152",
        "#aba1ff",
        "#7d8da5",
        "#4ec46c",
        "#cf37a6",
        "#4e6198",
    ];
    return VisualizerBase;
}());



/***/ }),

/***/ "./src/visualizerFactory.ts":
/*!**********************************!*\
  !*** ./src/visualizerFactory.ts ***!
  \**********************************/
/*! exports provided: VisualizerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerFactory", function() { return VisualizerFactory; });
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizationManager */ "./src/visualizationManager.ts");

var VisualizerFactory = /** @class */ (function () {
    function VisualizerFactory() {
    }
    /**
     * Create visualizer by question.
     */
    VisualizerFactory.createVisualizer = function (question, data, options) {
        var type;
        if (question.getType() === "text" && question.inputType) {
            type = question.inputType;
        }
        else {
            type = question.getType();
        }
        var creators = _visualizationManager__WEBPACK_IMPORTED_MODULE_0__["VisualizationManager"].getVisualizersByType(type);
        var visualizers = creators.map(function (creator) { return new creator(question, data, options); });
        if (visualizers.length > 1) {
            var alternativesVisualizerConstructor = _visualizationManager__WEBPACK_IMPORTED_MODULE_0__["VisualizationManager"].getAlternativesVisualizer();
            var visualizer = new alternativesVisualizerConstructor(visualizers, question, data, options);
            return visualizer;
        }
        return visualizers[0];
    };
    return VisualizerFactory;
}());



/***/ }),

/***/ "./src/wordcloud/stopwords/english.ts":
/*!********************************************!*\
  !*** ./src/wordcloud/stopwords/english.ts ***!
  \********************************************/
/*! exports provided: stopWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWords", function() { return stopWords; });
var stopWords = new Array("a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z");


/***/ }),

/***/ "./src/wordcloud/stopwords/index.ts":
/*!******************************************!*\
  !*** ./src/wordcloud/stopwords/index.ts ***!
  \******************************************/
/*! exports provided: textHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return textHelper; });
/* harmony import */ var _english__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english */ "./src/wordcloud/stopwords/english.ts");

var stopWordsDictionary = {};
stopWordsDictionary["en"] = _english__WEBPACK_IMPORTED_MODULE_0__["stopWords"];
var textHelper = {
    getStopWords: function (locale) {
        if (locale === void 0) { locale = ""; }
        return stopWordsDictionary[locale || "en"] || [];
    }
};


/***/ }),

/***/ "./src/wordcloud/wordcloud.ts":
/*!************************************!*\
  !*** ./src/wordcloud/wordcloud.ts ***!
  \************************************/
/*! exports provided: WordCloudAdapter, WordCloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordCloudAdapter", function() { return WordCloudAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return WordCloud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _stopwords_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopwords/index */ "./src/wordcloud/stopwords/index.ts");
/* harmony import */ var wordcloud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wordcloud */ "wordcloud");
/* harmony import */ var wordcloud__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wordcloud__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");






var WordCloudAdapter = /** @class */ (function () {
    function WordCloudAdapter(model) {
        this.model = model;
    }
    Object.defineProperty(WordCloudAdapter.prototype, "wordcloud", {
        get: function () {
            return this._wordcloud;
        },
        enumerable: false,
        configurable: true
    });
    WordCloudAdapter.prototype.create = function (node) {
        var _this = this;
        var data = this.model.getData();
        var colors = this.model.getColors();
        var canvasNode = (_utils__WEBPACK_IMPORTED_MODULE_5__["DocumentHelper"].createElement("canvas", ""));
        var emptyTextNode = _utils__WEBPACK_IMPORTED_MODULE_5__["DocumentHelper"].createElement("p", "", {
            innerHTML: "There are no results yet",
        });
        if (data.length === 0) {
            node.appendChild(emptyTextNode);
            return;
        }
        node.appendChild(canvasNode);
        var config = {
            list: data,
            weightFactor: 20,
            fontFamily: "Segoe UI Bold, sans-serif",
            color: function (word, weight) {
                return _this.model.getRandomColor();
            },
            rotateRatio: 0.5,
            rotationSteps: 2,
            backgroundColor: this.model.backgroundColor,
            click: function (item) {
                console.log(item[0] + ": " + item[1]);
            },
        };
        this._wordcloud = wordcloud__WEBPACK_IMPORTED_MODULE_4___default()(canvasNode, config);
        return this._wordcloud;
    };
    WordCloudAdapter.prototype.destroy = function (node) {
        this._wordcloud = undefined;
    };
    return WordCloudAdapter;
}());

var WordCloud = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WordCloud, _super);
    function WordCloud(question, data, options, name) {
        var _this = _super.call(this, question, data, options, name || "wordcloud") || this;
        _this._wordcloudAdapter = new WordCloudAdapter(_this);
        return _this;
    }
    WordCloud.prototype.getData = function () {
        var _this = this;
        var result = {};
        var stopWords = _stopwords_index__WEBPACK_IMPORTED_MODULE_3__["textHelper"].getStopWords();
        var stopTheWord = function (word) {
            if (stopWords.indexOf(word) !== -1) {
                return "";
            }
            return word;
        };
        var processString = function (row) {
            row = "" + row;
            if (!!row) {
                row.split(" ").forEach(function (word) {
                    word = stopTheWord(word.toLowerCase() || "");
                    if (!!word) {
                        if (!result[word]) {
                            result[word] = 1;
                        }
                        else {
                            result[word]++;
                        }
                    }
                });
            }
        };
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    rowValue.forEach(processString);
                }
                else {
                    if (typeof rowValue === "object") {
                        Object.keys(rowValue).forEach(function (key) {
                            return processString(rowValue[key]);
                        });
                    }
                    else {
                        processString(rowValue);
                    }
                }
            }
        });
        return Object.keys(result).map(function (key) {
            return [key, result[key]];
        });
    };
    WordCloud.prototype.destroyContent = function (container) {
        this._wordcloudAdapter.destroy(container);
        _super.prototype.destroyContent.call(this, container);
    };
    WordCloud.prototype.renderContent = function (container) {
        this._wordcloudAdapter.create(container);
    };
    WordCloud.prototype.destroy = function () {
        this._wordcloudAdapter.destroy(this.contentContainer);
        _super.prototype.destroy.call(this);
    };
    return WordCloud;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_1__["VisualizerBase"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("text", WordCloud);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("comment", WordCloud);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("multipletext", WordCloud);


/***/ }),

/***/ "plotly.js-dist":
/*!******************************************************************************************************************!*\
  !*** external {"root":"Plotly","commonjs2":"plotly.js-dist","commonjs":"plotly.js-dist","amd":"plotly.js-dist"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_plotly_js_dist__;

/***/ }),

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ }),

/***/ "wordcloud":
/*!******************************************************************************************************!*\
  !*** external {"root":"WordCloud","commonjs2":"wordcloud","commonjs":"wordcloud","amd":"wordcloud"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wordcloud__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vbm9kZV9tb2R1bGVzL211dXJpL2Rpc3QvbXV1cmkuanMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2FsdGVybmF0aXZlVml6dWFsaXplcnNXcmFwcGVyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9ib29sZWFuLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2RhdGFQcm92aWRlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvZW50cmllcy9zdW1tYXJ5LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9maWx0ZXJJbmZvLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sYXlvdXRFbmdpbmUudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZmFyc2kudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9ydXNzaWFuLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL251bWJlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L2Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Bsb3RseS9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RleHQuc2Nzcz8yYzRlIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90ZXh0LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25NYXRyaXhEcm9wZG93bi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzPzNjODIiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsRHluYW1pYy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXplckJhc2Uuc2Nzcz9hZmJkIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy92aXN1YWxpemVyQmFzZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXplckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvd29yZGNsb3VkL3dvcmRjbG91ZC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiUGxvdGx5XCIsXCJjb21tb25qczJcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJjb21tb25qc1wiOlwicGxvdGx5LmpzLWRpc3RcIixcImFtZFwiOlwicGxvdGx5LmpzLWRpc3RcIn0iLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXktY29yZVwiLFwiY29tbW9uanNcIjpcInN1cnZleS1jb3JlXCIsXCJhbWRcIjpcInN1cnZleS1jb3JlXCJ9Iiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwid29yZGNsb3VkXCIsXCJjb21tb25qc1wiOlwid29yZGNsb3VkXCIsXCJhbWRcIjpcIndvcmRjbG91ZFwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEscUNBQXFDO0FBQ2xELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLEVBQUU7QUFDZixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsTUFBTTtBQUNuQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCLDRCQUE0QixHQUFHO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLGFBQWE7QUFDMUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IseURBQXlEO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUF5RDtBQUNuRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLEtBQUs7QUFDbEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsYUFBYSxFQUFFO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFlBQVk7QUFDekIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUF3RDtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3REFBd0Q7QUFDeEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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N0MsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FB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QUFELENBQUMsQ0EzRThCLDhEQUFjLEdBMkU1Qzs7QUFFRCwwRUFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0QsMEVBQW9CLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzlELDBFQUFvQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeEluRSw0RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RCIsImZpbGUiOiJzdXJ2ZXkuYW5hbHl0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcIndvcmRjbG91ZFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUFuYWx5dGljc1wiLCBbXCJwbG90bHkuanMtZGlzdFwiLCBcInN1cnZleS1jb3JlXCIsIFwid29yZGNsb3VkXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpLCByZXF1aXJlKFwic3VydmV5LWNvcmVcIiksIHJlcXVpcmUoXCJ3b3JkY2xvdWRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBsb3RseVwiXSwgcm9vdFtcIlN1cnZleVwiXSwgcm9vdFtcIldvcmRDbG91ZFwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGxvdGx5X2pzX2Rpc3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dvcmRjbG91ZF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cmllcy9zdW1tYXJ5LnRzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRldGFpbFxcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMS41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRyYWdcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMyA1bC0xIDEgMSAxSDlWM2wxIDEgMS0xLTMtMy0zIDMgMSAxIDEtMXY0SDNsMS0xLTEtMS0zIDMgMyAzIDEtMS0xLTFoNHY0bC0xLTEtMSAxIDMgMyAzLTMtMS0xLTEgMVY5aDRsLTEgMSAxIDEgMy0zelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWhpZGVcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDFcXFwiIGQ9XFxcIk0xMi43OSA0LjJMMTYgMWwtMS0xLTMuMzIgMy4zMkMxMC41NyAyLjU1IDkuMzIgMiA4IDIgMy42MyAyIDAgNy45NyAwIDcuOTdzMS4yNyAyLjEgMy4yMSAzLjgybC0zLjIzIDMuMjMuOTguOTggMy4zNS0zLjM0QzUuNDEgMTMuNDQgNi42NyAxNCA4IDE0YzQuMzcgMCA4LTYgOC02cy0xLjI3LTIuMDktMy4yMS0zLjh6TTIgNy45N2MxLjA3LTEuNDcgMy42MS00IDYtNCAuOCAwIDEuNi4yNyAyLjM1LjY4bC0uNzguNzhjLS40Ni0uMjktLjk5LS40Ni0xLjU3LS40Ni0xLjY2IDAtMyAxLjM0LTMgMyAwIC41OC4xNyAxLjExLjQ2IDEuNTdsLS45Ny45N0ExMy4zOCAxMy4zOCAwIDAgMSAyIDcuOTd6bTYgNGMtLjggMC0xLjU5LS4yNy0yLjMzLS42N2wuNzgtLjc3Yy40NS4yNy45OC40NCAxLjU1LjQ0IDEuNjYgMCAzLTEuMzQgMy0zIDAtLjU3LS4xNy0xLjA5LS40NC0xLjU1bC45OC0uOThjMS4xMS44NyAyLjAxIDEuOTEgMi40NiAyLjUyLTEuMDcgMS40OC0zLjYxIDQuMDEtNiA0LjAxelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1ha2Vwcml2YXRlXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI4XFxcIiBjeT1cXFwiNFxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTggOGMtMy4zMSAwLTYgMi43My02IDQuNjdTNS4yNyAxNSA4IDE1czYtLjQgNi0yLjMzUzExLjMxIDggOCA4elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1ha2VwdWJsaWNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjZcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTAgNWMwIC4zNC0uMDYuNjctLjE0Ljk5LjA1IDAgLjA5LjAxLjE0LjAxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zQzguOTcgMCA4LjA3LjUyIDcuNTMgMS4zIDguOTggMS45MSAxMCAzLjMzIDEwIDV6TTYgOWMtMy4zMSAwLTYgMi43My02IDQuNjdTMy4yNyAxNiA2IDE2czYtLjQgNi0yLjMzUzkuMzEgOSA2IDl6TTEwIDdjLS4xOSAwLS4zOC4wMS0uNTcuMDNhNC4xNCA0LjE0IDAgMCAxLTEuMzcgMS4zOWMzIC44MyA1LjIzIDMuMzEgNS40MiA1LjI4IDEuNDQtLjMxIDIuNTItLjkyIDIuNTItMi4wM0MxNiA5Ljc0IDEzLjMxIDcgMTAgN3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tb3ZldG9kZXRhaWxzXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMTMuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEyIDFoM3Y5aC0zek0yLjAyIDcuMDJMMSA2IDAgN2wzIDMgMy0zLTEtMS0uOTQuOTRDNC4zMyA0LjczIDYuMjEgMyA4LjUgM2MuMTcgMCAuMzMuMDMuNS4wNVYxLjAzQzguODMgMS4wMSA4LjY3IDEgOC41IDEgNS4wOCAxIDIuMjcgMy42NiAyLjAyIDcuMDJ6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctc29ydGluZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTggM2wyIDIgMS0xLTMtMy0zIDMgMSAxek04IDEzbC0yLTItMSAxIDMgMyAzLTMtMS0xelxcXCI+PC9wYXRoPjwvc3ltYm9sPjwvc3ZnPlwiOyIsIi8qKlxuKiBNdXVyaSB2MC44LjBcbiogaHR0cHM6Ly9naXRodWIuY29tL2hhbHR1L211dXJpXG4qIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBIYWx0dSBPeVxuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiogaHR0cHM6Ly9naXRodWIuY29tL2hhbHR1L211dXJpL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiogQGxpY2Vuc2UgTUlUXG4qXG4qIE11dXJpIFBhY2tlclxuKiBDb3B5cmlnaHQgKGMpIDIwMTYtcHJlc2VudCwgTmlrbGFzIFLDpG3DtiA8aW5yYW1vQGdtYWlsLmNvbT5cbiogQGxpY2Vuc2UgTUlUXG4qXG4qIE11dXJpIFRpY2tlciAvIE11dXJpIEVtaXR0ZXIgLyBNdXVyaSBRdWV1ZVxuKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgTmlrbGFzIFLDpG3DtiA8aW5yYW1vQGdtYWlsLmNvbT5cbiogQGxpY2Vuc2UgTUlUXG4qL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLk11dXJpID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG5hbWVzcGFjZSA9ICdNdXVyaSc7XG4gIHZhciBncmlkSW5zdGFuY2VzID0ge307XG5cbiAgdmFyIGFjdGlvblN3YXAgPSAnc3dhcCc7XG4gIHZhciBhY3Rpb25Nb3ZlID0gJ21vdmUnO1xuXG4gIHZhciBldmVudFN5bmNocm9uaXplID0gJ3N5bmNocm9uaXplJztcbiAgdmFyIGV2ZW50TGF5b3V0U3RhcnQgPSAnbGF5b3V0U3RhcnQnO1xuICB2YXIgZXZlbnRMYXlvdXRFbmQgPSAnbGF5b3V0RW5kJztcbiAgdmFyIGV2ZW50QWRkID0gJ2FkZCc7XG4gIHZhciBldmVudFJlbW92ZSA9ICdyZW1vdmUnO1xuICB2YXIgZXZlbnRTaG93U3RhcnQgPSAnc2hvd1N0YXJ0JztcbiAgdmFyIGV2ZW50U2hvd0VuZCA9ICdzaG93RW5kJztcbiAgdmFyIGV2ZW50SGlkZVN0YXJ0ID0gJ2hpZGVTdGFydCc7XG4gIHZhciBldmVudEhpZGVFbmQgPSAnaGlkZUVuZCc7XG4gIHZhciBldmVudEZpbHRlciA9ICdmaWx0ZXInO1xuICB2YXIgZXZlbnRTb3J0ID0gJ3NvcnQnO1xuICB2YXIgZXZlbnRNb3ZlID0gJ21vdmUnO1xuICB2YXIgZXZlbnRTZW5kID0gJ3NlbmQnO1xuICB2YXIgZXZlbnRCZWZvcmVTZW5kID0gJ2JlZm9yZVNlbmQnO1xuICB2YXIgZXZlbnRSZWNlaXZlID0gJ3JlY2VpdmUnO1xuICB2YXIgZXZlbnRCZWZvcmVSZWNlaXZlID0gJ2JlZm9yZVJlY2VpdmUnO1xuICB2YXIgZXZlbnREcmFnSW5pdCA9ICdkcmFnSW5pdCc7XG4gIHZhciBldmVudERyYWdTdGFydCA9ICdkcmFnU3RhcnQnO1xuICB2YXIgZXZlbnREcmFnTW92ZSA9ICdkcmFnTW92ZSc7XG4gIHZhciBldmVudERyYWdTY3JvbGwgPSAnZHJhZ1Njcm9sbCc7XG4gIHZhciBldmVudERyYWdFbmQgPSAnZHJhZ0VuZCc7XG4gIHZhciBldmVudERyYWdSZWxlYXNlU3RhcnQgPSAnZHJhZ1JlbGVhc2VTdGFydCc7XG4gIHZhciBldmVudERyYWdSZWxlYXNlRW5kID0gJ2RyYWdSZWxlYXNlRW5kJztcbiAgdmFyIGV2ZW50RGVzdHJveSA9ICdkZXN0cm95JztcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlciBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBFbWl0dGVyKCkge1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5fY291bnRlciA9IDA7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBCaW5kIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBHZXQgbGlzdGVuZXJzIHF1ZXVlIGFuZCBjcmVhdGUgaXQgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFsaXN0ZW5lcnMpIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF0gPSBbXTtcblxuICAgIC8vIEFkZCB0aGUgbGlzdGVuZXIgdG8gdGhlIHF1ZXVlLlxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgYWxsIGV2ZW50IGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoZSBwcm92aWRlZCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtsaXN0ZW5lcl1cbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gR2V0IGxpc3RlbmVycyBhbmQgcmV0dXJuIGltbWVkaWF0ZWx5IGlmIG5vbmUgaXMgZm91bmQuXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gSWYgbm8gc3BlY2lmaWMgbGlzdGVuZXIgaXMgcHJvdmlkZWQgcmVtb3ZlIGFsbCBsaXN0ZW5lcnMuXG4gICAgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIG1hdGNoaW5nIGxpc3RlbmVycy5cbiAgICB2YXIgaSA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGxpc3RlbmVyID09PSBsaXN0ZW5lcnNbaV0pIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtaXQgYWxsIGxpc3RlbmVycyBpbiBhIHNwZWNpZmllZCBldmVudCB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0geyp9IFthcmcxXVxuICAgKiBAcGFyYW0geyp9IFthcmcyXVxuICAgKiBAcGFyYW0geyp9IFthcmczXVxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBHZXQgZXZlbnQgbGlzdGVuZXJzIGFuZCBxdWl0IGVhcmx5IGlmIHRoZXJlJ3Mgbm8gbGlzdGVuZXJzLlxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBxTGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICAgIHZhciBhTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBBZGQgdGhlIGN1cnJlbnQgbGlzdGVuZXJzIHRvIHRoZSBjYWxsYmFjayBxdWV1ZSBiZWZvcmUgd2UgcHJvY2VzcyB0aGVtLlxuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGd1YXJhbnRlZSB0aGF0IGFsbCBvZiB0aGUgbGlzdGVuZXJzIGFyZSBjYWxsZWQgaW5cbiAgICAvLyBjb3JyZWN0IG9yZGVyIGV2ZW4gaWYgbmV3IGV2ZW50IGxpc3RlbmVycyBhcmUgcmVtb3ZlZC9hZGRlZCBkdXJpbmdcbiAgICAvLyBwcm9jZXNzaW5nIGFuZC9vciBldmVudHMgYXJlIGVtaXR0ZWQgZHVyaW5nIHByb2Nlc3NpbmcuXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgcXVldWUucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIEluY3JlbWVudCBxdWV1ZSBjb3VudGVyLiBUaGlzIGlzIG5lZWRlZCBmb3IgdGhlIHNjZW5hcmlvcyB3aGVyZSBlbWl0IGlzXG4gICAgLy8gdHJpZ2dlcmVkIHdoaWxlIHRoZSBxdWV1ZSBpcyBhbHJlYWR5IHByb2Nlc3NpbmcuIFdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZlxuICAgIC8vIGhvdyBtYW55IFwicXVldWUgcHJvY2Vzc29yc1wiIHRoZXJlIGFyZSBhY3RpdmUgc28gdGhhdCB3ZSBjYW4gc2FmZWx5IHJlc2V0XG4gICAgLy8gdGhlIHF1ZXVlIGluIHRoZSBlbmQgd2hlbiB0aGUgbGFzdCBxdWV1ZSBwcm9jZXNzb3IgaXMgZmluaXNoZWQuXG4gICAgKyt0aGlzLl9jb3VudGVyO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgcXVldWUgKHRoZSBzcGVjaWZpYyBwYXJ0IG9mIGl0IGZvciB0aGlzIGVtaXQpLlxuICAgIGZvciAoaSA9IHFMZW5ndGgsIHFMZW5ndGggPSBxdWV1ZS5sZW5ndGg7IGkgPCBxTGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgYUxlbmd0aCA9PT0gMCA/IHF1ZXVlW2ldKCkgOlxuICAgICAgYUxlbmd0aCA9PT0gMSA/IHF1ZXVlW2ldKGFyZzEpIDpcbiAgICAgIGFMZW5ndGggPT09IDIgPyBxdWV1ZVtpXShhcmcxLCBhcmcyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgcXVldWVbaV0oYXJnMSwgYXJnMiwgYXJnMyk7XG5cbiAgICAgIC8vIFN0b3AgcHJvY2Vzc2luZyBpZiB0aGUgZW1pdHRlciBpcyBkZXN0cm95ZWQuXG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIERlY3JlbWVudCBxdWV1ZSBwcm9jZXNzIGNvdW50ZXIuXG4gICAgLS10aGlzLl9jb3VudGVyO1xuXG4gICAgLy8gUmVzZXQgdGhlIHF1ZXVlIGlmIHRoZXJlIGFyZSBubyBtb3JlIHF1ZXVlIHByb2Nlc3NlcyBydW5uaW5nLlxuICAgIGlmICghdGhpcy5fY291bnRlcikgcXVldWUubGVuZ3RoID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGVtaXR0ZXIgaW5zdGFuY2UuIEJhc2ljYWxseSBqdXN0IHJlbW92ZXMgYWxsIGJvdW5kIGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgdmFyIGV2ZW50O1xuXG4gICAgLy8gRmxhZyBhcyBkZXN0cm95ZWQuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgLy8gUmVzZXQgcXVldWUgKGlmIHF1ZXVlIGlzIGN1cnJlbnRseSBwcm9jZXNzaW5nIHRoaXMgd2lsbCBhbHNvIHN0b3AgdGhhdCkuXG4gICAgdGhpcy5fcXVldWUubGVuZ3RoID0gdGhpcy5fY291bnRlciA9IDA7XG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycy5cbiAgICBmb3IgKGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgaWYgKGV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50XS5sZW5ndGggPSAwO1xuICAgICAgICBldmVudHNbZXZlbnRdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIFNldCB1cCB0aGUgZGVmYXVsdCBleHBvcnQgdmFsdWVzLlxuICB2YXIgdHJhbnNmb3JtU3R5bGUgPSAndHJhbnNmb3JtJztcbiAgdmFyIHRyYW5zZm9ybVByb3AgPSAndHJhbnNmb3JtJztcblxuICAvLyBGaW5kIHRoZSBzdXBwb3J0ZWQgdHJhbnNmb3JtIHByb3AgYW5kIHN0eWxlIG5hbWVzLlxuICB2YXIgZG9jRWxlbVN0eWxlID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgdmFyIHN0eWxlID0gJ3RyYW5zZm9ybSc7XG4gIHZhciBzdHlsZUNhcCA9ICdUcmFuc2Zvcm0nO1xuICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgWycnLCAnV2Via2l0JywgJ01veicsICdPJywgJ21zJ10uZm9yRWFjaChmdW5jdGlvbihwcmVmaXgpIHtcbiAgICBpZiAoZm91bmQpIHJldHVybjtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcmVmaXggPyBwcmVmaXggKyBzdHlsZUNhcCA6IHN0eWxlO1xuICAgIGlmIChkb2NFbGVtU3R5bGVbcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWZpeCA9IHByZWZpeC50b0xvd2VyQ2FzZSgpO1xuICAgICAgdHJhbnNmb3JtU3R5bGUgPSBwcmVmaXggPyAnLScgKyBwcmVmaXggKyAnLScgKyBzdHlsZSA6IHN0eWxlO1xuICAgICAgdHJhbnNmb3JtUHJvcCA9IHByb3BOYW1lO1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHN0eWxlc0NhY2hlID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBuZXcgV2Vha01hcCgpIDogbnVsbDtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29tcHV0ZWQgdmFsdWUgb2YgYW4gZWxlbWVudCdzIHN0eWxlIHByb3BlcnR5IGFzIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgICB2YXIgc3R5bGVzID0gc3R5bGVzQ2FjaGUgJiYgc3R5bGVzQ2FjaGUuZ2V0KGVsZW1lbnQpO1xuICAgIGlmICghc3R5bGVzKSB7XG4gICAgICBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcbiAgICAgIGlmIChzdHlsZXNDYWNoZSkgc3R5bGVzQ2FjaGUuc2V0KGVsZW1lbnQsIHN0eWxlcyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZSA9PT0gJ3RyYW5zZm9ybScgPyB0cmFuc2Zvcm1TdHlsZSA6IHN0eWxlKTtcbiAgfVxuXG4gIHZhciBzdHlsZU5hbWVSZWdFeCA9IC8oW0EtWl0pL2c7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgYSBjYW1lbCBjYXNlIHN0eWxlIHByb3BlcnR5IHRvIGtlYmFiIGNhc2Ugc3R5bGUgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uoc3R5bGVOYW1lUmVnRXgsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdmFyIHN0ckZ1bmN0aW9uID0gJ2Z1bmN0aW9uJztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IHN0ckZ1bmN0aW9uO1xuICB9XG5cbiAgdmFyIHRyYW5zZm9ybVN0eWxlJDEgPSAndHJhbnNmb3JtJztcblxuICAvKipcbiAgICogU2V0IGlubGluZSBzdHlsZXMgdG8gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzXG4gICAqL1xuICBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcCA9PT0gdHJhbnNmb3JtU3R5bGUkMSA/IHRyYW5zZm9ybVByb3AgOiBwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlbSBhbmltYXRpb24gaGFuZGxlciBwb3dlcmVkIGJ5IFdlYiBBbmltYXRpb25zIEFQSS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1BbmltYXRlKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLl9wcm9wcyA9IFtdO1xuICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgIHRoaXMuX2tleWZyYW1lcyA9IFtdO1xuICAgIHRoaXMuX29wdGlvbnMgPSB7fTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX29uRmluaXNoID0gdGhpcy5fb25GaW5pc2guYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCBpbnN0YW5jZSdzIGFuaW1hdGlvbi4gQXV0b21hdGljYWxseSBzdG9wcyBjdXJyZW50IGFuaW1hdGlvbiBpZiBpdCBpc1xuICAgKiBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzRnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNUb1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5lYXNpbmc9J2Vhc2UnXVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKHByb3BzRnJvbSwgcHJvcHNUbywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGlvbjtcbiAgICB2YXIgY3VycmVudFByb3BzID0gdGhpcy5fcHJvcHM7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGNhbmNlbEFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhbiBleGlzdGluZyBhbmltYXRpb24gcnVubmluZywgbGV0J3MgY2hlY2sgaWYgaXQgbmVlZHMgdG8gYmVcbiAgICAvLyBjYW5jZWxsZWQgb3IgaWYgaXQgY2FuIGNvbnRpbnVlIHJ1bm5pbmcuXG4gICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgdmFyIHByb3BDb3VudCA9IDA7XG4gICAgICB2YXIgcHJvcEluZGV4O1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgcmVxdWVzdGVkIGFuaW1hdGlvbiB0YXJnZXQgcHJvcHMgYW5kIHZhbHVlcyBtYXRjaCB3aXRoIHRoZVxuICAgICAgLy8gY3VycmVudCBwcm9wcyBhbmQgdmFsdWVzLlxuICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcHNUbykge1xuICAgICAgICArK3Byb3BDb3VudDtcbiAgICAgICAgcHJvcEluZGV4ID0gY3VycmVudFByb3BzLmluZGV4T2YocHJvcE5hbWUpO1xuICAgICAgICBpZiAocHJvcEluZGV4ID09PSAtMSB8fCBwcm9wc1RvW3Byb3BOYW1lXSAhPT0gY3VycmVudFZhbHVlc1twcm9wSW5kZXhdKSB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdGFyZ2V0IHByb3BzIGNvdW50IG1hdGNoZXMgY3VycmVudCBwcm9wcyBjb3VudC4gVGhpcyBpc1xuICAgICAgLy8gbmVlZGVkIGZvciB0aGUgZWRnZSBjYXNlIHNjZW5hcmlvIHdoZXJlIHRhcmdldCBwcm9wcyBjb250YWluIHRoZSBzYW1lXG4gICAgICAvLyBzdHlsZXMgYXMgY3VycmVudCBwcm9wcywgYnV0IHRoZSBjdXJyZW50IHByb3BzIGhhdmUgc29tZSBhZGRpdGlvbmFsXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIGlmICghY2FuY2VsQW5pbWF0aW9uICYmIHByb3BDb3VudCAhPT0gY3VycmVudFByb3BzLmxlbmd0aCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENhbmNlbCBhbmltYXRpb24gKGlmIHJlcXVpcmVkKS5cbiAgICBpZiAoY2FuY2VsQW5pbWF0aW9uKSBhbmltYXRpb24uY2FuY2VsKCk7XG5cbiAgICAvLyBTdG9yZSBhbmltYXRpb24gY2FsbGJhY2suXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKG9wdHMub25GaW5pc2gpID8gb3B0cy5vbkZpbmlzaCA6IG51bGw7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGEgcnVubmluZyBhbmltYXRpb24gdGhhdCBkb2VzIG5vdCBuZWVkIHRvIGJlIGNhbmNlbGxlZCwgbGV0J3NcbiAgICAvLyBjYWxsIGl0IGEgZGF5IGhlcmUgYW5kIGxldCBpdCBydW4uXG4gICAgaWYgKGFuaW1hdGlvbiAmJiAhY2FuY2VsQW5pbWF0aW9uKSByZXR1cm47XG5cbiAgICAvLyBTdG9yZSB0YXJnZXQgcHJvcHMgYW5kIHZhbHVlcyB0byBpbnN0YW5jZS5cbiAgICBjdXJyZW50UHJvcHMubGVuZ3RoID0gY3VycmVudFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIGZvciAocHJvcE5hbWUgaW4gcHJvcHNUbykge1xuICAgICAgY3VycmVudFByb3BzLnB1c2gocHJvcE5hbWUpO1xuICAgICAgY3VycmVudFZhbHVlcy5wdXNoKHByb3BzVG9bcHJvcE5hbWVdKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAga2V5ZnJhbWVzLlxuICAgIHZhciBhbmltS2V5ZnJhbWVzID0gdGhpcy5fa2V5ZnJhbWVzO1xuICAgIGFuaW1LZXlmcmFtZXNbMF0gPSBwcm9wc0Zyb207XG4gICAgYW5pbUtleWZyYW1lc1sxXSA9IHByb3BzVG87XG5cbiAgICAvLyBTZXQgdXAgb3B0aW9ucy5cbiAgICB2YXIgYW5pbU9wdGlvbnMgPSB0aGlzLl9vcHRpb25zO1xuICAgIGFuaW1PcHRpb25zLmR1cmF0aW9uID0gb3B0cy5kdXJhdGlvbiB8fCAzMDA7XG4gICAgYW5pbU9wdGlvbnMuZWFzaW5nID0gb3B0cy5lYXNpbmcgfHwgJ2Vhc2UnO1xuXG4gICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICBhbmltYXRpb24gPSBlbGVtZW50LmFuaW1hdGUoYW5pbUtleWZyYW1lcywgYW5pbU9wdGlvbnMpO1xuICAgIGFuaW1hdGlvbi5vbmZpbmlzaCA9IHRoaXMuX29uRmluaXNoO1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbjtcblxuICAgIC8vIFNldCB0aGUgZW5kIHN0eWxlcy4gVGhpcyBtYWtlcyBzdXJlIHRoYXQgdGhlIGVsZW1lbnQgc3RheXMgYXQgdGhlIGVuZFxuICAgIC8vIHZhbHVlcyBhZnRlciBhbmltYXRpb24gaXMgZmluaXNoZWQuXG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIHByb3BzVG8pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIGluc3RhbmNlJ3MgY3VycmVudCBhbmltYXRpb24gaWYgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc3R5bGVzXVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihzdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2FuaW1hdGlvbikgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBjdXJyZW50UHJvcHMgPSB0aGlzLl9wcm9wcztcbiAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgcHJvcE5hbWU7XG4gICAgdmFyIHByb3BWYWx1ZTtcbiAgICB2YXIgaTtcblxuICAgIC8vIENhbGN1bGF0ZSAoaWYgbm90IHByb3ZpZGVkKSBhbmQgc2V0IHN0eWxlcy5cbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGN1cnJlbnRQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9wTmFtZSA9IGN1cnJlbnRQcm9wc1tpXTtcbiAgICAgICAgcHJvcFZhbHVlID0gZ2V0U3R5bGUoZWxlbWVudCwgZ2V0U3R5bGVOYW1lKHByb3BOYW1lKSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcE5hbWUgPT09ICd0cmFuc2Zvcm0nID8gdHJhbnNmb3JtUHJvcCA6IHByb3BOYW1lXSA9IHByb3BWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcyk7XG4gICAgfVxuXG4gICAgLy8gIENhbmNlbCBhbmltYXRpb24uXG4gICAgdGhpcy5fYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcblxuICAgIC8vIFJlc2V0IGN1cnJlbnQgcHJvcHMgYW5kIHZhbHVlcy5cbiAgICBjdXJyZW50UHJvcHMubGVuZ3RoID0gY3VycmVudFZhbHVlcy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgaXRlbSBpcyBiZWluZyBhbmltYXRlZCBjdXJyZW50bHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLmlzQW5pbWF0aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fYW5pbWF0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgc3RvcCBjdXJyZW50IGFuaW1hdGlvbiBpZiBpdCBpcyBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX29wdGlvbnMgPSB0aGlzLl9rZXlmcmFtZXMgPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5fb25GaW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICB0aGlzLl9hbmltYXRpb24gPSB0aGlzLl9jYWxsYmFjayA9IG51bGw7XG4gICAgdGhpcy5fcHJvcHMubGVuZ3RoID0gdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgfTtcblxuICB2YXIgdmVuZG9yUHJlZml4ZXMgPSBbJycsICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nLCAnV2Via2l0JywgJ01veicsICdNUycsICdPJ107XG5cbiAgLyoqXG4gICAqIEdldCBwcmVmaXhlZCBDU1MgcHJvcGVydHkgbmFtZSB3aGVuIGdpdmVuIGEgbm9uLXByZWZpeGVkIENTUyBwcm9wZXJ0eSBuYW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbVN0eWxlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZVxuICAgKiBAcmV0dXJucyB7IVN0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFByZWZpeGVkUHJvcE5hbWUoZWxlbVN0eWxlLCBwcm9wTmFtZSkge1xuICAgIHZhciBjYW1lbFByb3BOYW1lID0gcHJvcE5hbWVbMF0udG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcHJlZml4O1xuICAgIHZhciBwcmVmaXhlZFByb3BOYW1lO1xuXG4gICAgd2hpbGUgKGkgPCB2ZW5kb3JQcmVmaXhlcy5sZW5ndGgpIHtcbiAgICAgIHByZWZpeCA9IHZlbmRvclByZWZpeGVzW2ldO1xuICAgICAgcHJlZml4ZWRQcm9wTmFtZSA9IHByZWZpeCA/IHByZWZpeCArIGNhbWVsUHJvcE5hbWUgOiBwcm9wTmFtZTtcbiAgICAgIGlmIChwcmVmaXhlZFByb3BOYW1lIGluIGVsZW1TdHlsZSkgcmV0dXJuIHByZWZpeGVkUHJvcE5hbWU7XG4gICAgICArK2k7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZHQgPSAxMDAwIC8gNjA7XG5cbiAgdmFyIHJhZiA9IChcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2soZHQpO1xuICAgICAgfSwgZHQpO1xuICAgIH1cbiAgKS5iaW5kKHdpbmRvdyk7XG5cbiAgLy8gRGV0ZWN0IHN1cHBvcnQgZm9yIHBhc3NpdmUgZXZlbnRzOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZCNmZWF0dXJlLWRldGVjdGlvblxuICB2YXIgaXNQYXNzaXZlRXZlbnRzU3VwcG9ydGVkID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIHBhc3NpdmVPcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzUGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZU9wdHMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVPcHRzKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICAvLyBEcmFnZ2VyIGV2ZW50cy5cbiAgdmFyIGV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3N0YXJ0JyxcbiAgICBtb3ZlOiAnbW92ZScsXG4gICAgZW5kOiAnZW5kJyxcbiAgICBjYW5jZWw6ICdjYW5jZWwnXG4gIH07XG5cbiAgdmFyIGhhc1RvdWNoRXZlbnRzID0gISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Ub3VjaEV2ZW50KTtcbiAgdmFyIGhhc1BvaW50ZXJFdmVudHMgPSAhIXdpbmRvdy5Qb2ludGVyRXZlbnQ7XG4gIHZhciBoYXNNc1BvaW50ZXJFdmVudHMgPSAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDtcbiAgdmFyIGlzQW5kcm9pZCA9IC8oYW5kcm9pZCkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgdmFyIGxpc3RlbmVyT3B0aW9ucyA9IGlzUGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cbiAgdmFyIHRhUHJvcCA9ICd0b3VjaEFjdGlvbic7XG4gIHZhciB0YVByb3BQcmVmaXhlZCA9IGdldFByZWZpeGVkUHJvcE5hbWUod2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSwgdGFQcm9wKTtcbiAgdmFyIHRhRGVmYXVsdFZhbHVlID0gJ2F1dG8nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IERyYWdnZXIgaW5zdGFuY2UgZm9yIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtjc3NQcm9wc11cbiAgICovXG4gIGZ1bmN0aW9uIERyYWdnZXIoZWxlbWVudCwgY3NzUHJvcHMpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Nzc1Byb3BzID0ge307XG4gICAgdGhpcy5fdG91Y2hBY3Rpb24gPSAnJztcbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHRoaXMuX3BvaW50ZXJJZCA9IG51bGw7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gMDtcbiAgICB0aGlzLl9zdGFydFggPSAwO1xuICAgIHRoaXMuX3N0YXJ0WSA9IDA7XG4gICAgdGhpcy5fY3VycmVudFggPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gMDtcblxuICAgIHRoaXMuX3ByZVN0YXJ0Q2hlY2sgPSB0aGlzLl9wcmVTdGFydENoZWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlID0gdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25TdGFydCA9IHRoaXMuX29uU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1vdmUgPSB0aGlzLl9vbk1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNhbmNlbCA9IHRoaXMuX29uQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25FbmQgPSB0aGlzLl9vbkVuZC5iaW5kKHRoaXMpO1xuXG4gICAgLy8gQXBwbHkgaW5pdGlhbCBjc3MgcHJvcHMuXG4gICAgdGhpcy5zZXRDc3NQcm9wcyhjc3NQcm9wcyk7XG5cbiAgICAvLyBJZiB0b3VjaCBhY3Rpb24gd2FzIG5vdCBwcm92aWRlZCB3aXRoIGluaXRpYWwgY3NzIHByb3BzIGxldCdzIGFzc3VtZSBpdCdzXG4gICAgLy8gYXV0by5cbiAgICBpZiAoIXRoaXMuX3RvdWNoQWN0aW9uKSB7XG4gICAgICB0aGlzLnNldFRvdWNoQWN0aW9uKHRhRGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IG5hdGl2ZSBsaW5rL2ltYWdlIGRyYWdnaW5nIGZvciB0aGUgaXRlbSBhbmQgaXQncyBhbmNlc3RvcnMuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuXG4gICAgLy8gTGlzdGVuIHRvIHN0YXJ0IGV2ZW50LlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl9ldmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIHRvdWNoIGV2ZW50cywgYnV0IG5vIHBvaW50ZXIgZXZlbnRzIHdlIG5lZWQgdG8gYWxzbyBsaXN0ZW4gZm9yXG4gICAgLy8gbW91c2UgZXZlbnRzIGluIGFkZGl0aW9uIHRvIHRvdWNoIGV2ZW50cyBmb3IgZGV2aWNlcyB3aGljaCBzdXBwb3J0IGJvdGhcbiAgICAvLyBtb3VzZSBhbmQgdG91Y2ggaW50ZXJhY3Rpb24uXG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzICYmICFoYXNQb2ludGVyRXZlbnRzICYmICFoYXNNc1BvaW50ZXJFdmVudHMpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl9tb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvdGVjdGVkIHByb3BlcnRpZXNcbiAgICogKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgRHJhZ2dlci5fcG9pbnRlckV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3BvaW50ZXJkb3duJyxcbiAgICBtb3ZlOiAncG9pbnRlcm1vdmUnLFxuICAgIGNhbmNlbDogJ3BvaW50ZXJjYW5jZWwnLFxuICAgIGVuZDogJ3BvaW50ZXJ1cCdcbiAgfTtcblxuICBEcmFnZ2VyLl9tc1BvaW50ZXJFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdNU1BvaW50ZXJEb3duJyxcbiAgICBtb3ZlOiAnTVNQb2ludGVyTW92ZScsXG4gICAgY2FuY2VsOiAnTVNQb2ludGVyQ2FuY2VsJyxcbiAgICBlbmQ6ICdNU1BvaW50ZXJVcCdcbiAgfTtcblxuICBEcmFnZ2VyLl90b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGNhbmNlbDogJ3RvdWNoY2FuY2VsJyxcbiAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgfTtcblxuICBEcmFnZ2VyLl9tb3VzZUV2ZW50cyA9IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgY2FuY2VsOiAnJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9O1xuXG4gIERyYWdnZXIuX2V2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaGFzUG9pbnRlckV2ZW50cykgcmV0dXJuIERyYWdnZXIuX3BvaW50ZXJFdmVudHM7XG4gICAgaWYgKGhhc01zUG9pbnRlckV2ZW50cykgcmV0dXJuIERyYWdnZXIuX21zUG9pbnRlckV2ZW50cztcbiAgICBpZiAoaGFzVG91Y2hFdmVudHMpIHJldHVybiBEcmFnZ2VyLl90b3VjaEV2ZW50cztcbiAgICByZXR1cm4gRHJhZ2dlci5fbW91c2VFdmVudHM7XG4gIH0pKCk7XG5cbiAgRHJhZ2dlci5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG5cbiAgRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzID0gW107XG5cbiAgLyoqXG4gICAqIFByb3RlY3RlZCBzdGF0aWMgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgRHJhZ2dlci5fcHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQgJiYgZS5jYW5jZWxhYmxlICE9PSBmYWxzZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIERyYWdnZXIuX2FjdGl2YXRlSW5zdGFuY2UgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHZhciBpbmRleCA9IERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5pbmRleE9mKGluc3RhbmNlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkgcmV0dXJuO1xuXG4gICAgRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub24oZXZlbnRzLm1vdmUsIGluc3RhbmNlLl9vbk1vdmUpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub24oZXZlbnRzLmNhbmNlbCwgaW5zdGFuY2UuX29uQ2FuY2VsKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9uKGV2ZW50cy5lbmQsIGluc3RhbmNlLl9vbkVuZCk7XG5cbiAgICBpZiAoRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgRHJhZ2dlci5fYmluZExpc3RlbmVycygpO1xuICAgIH1cbiAgfTtcblxuICBEcmFnZ2VyLl9kZWFjdGl2YXRlSW5zdGFuY2UgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHZhciBpbmRleCA9IERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5pbmRleE9mKGluc3RhbmNlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cbiAgICBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9mZihldmVudHMubW92ZSwgaW5zdGFuY2UuX29uTW92ZSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vZmYoZXZlbnRzLmNhbmNlbCwgaW5zdGFuY2UuX29uQ2FuY2VsKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9mZihldmVudHMuZW5kLCBpbnN0YW5jZS5fb25FbmQpO1xuXG4gICAgaWYgKCFEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMubGVuZ3RoKSB7XG4gICAgICBEcmFnZ2VyLl91bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgRHJhZ2dlci5fYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudHMgPSBEcmFnZ2VyLl9ldmVudHM7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdmUsIERyYWdnZXIuX29uTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuZW5kLCBEcmFnZ2VyLl9vbkVuZCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBldmVudHMuY2FuY2VsICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5jYW5jZWwsIERyYWdnZXIuX29uQ2FuY2VsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICB9O1xuXG4gIERyYWdnZXIuX3VuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudHMgPSBEcmFnZ2VyLl9ldmVudHM7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdmUsIERyYWdnZXIuX29uTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMuZW5kLCBEcmFnZ2VyLl9vbkVuZCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBldmVudHMuY2FuY2VsICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5jYW5jZWwsIERyYWdnZXIuX29uQ2FuY2VsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICB9O1xuXG4gIERyYWdnZXIuX2dldEV2ZW50UG9pbnRlcklkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIHBvaW50ZXIgaWQgYXZhaWxhYmxlIGxldCdzIHVzZSBpdC5cbiAgICBpZiAodHlwZW9mIGV2ZW50LnBvaW50ZXJJZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBldmVudC5wb2ludGVySWQ7XG4gICAgfVxuXG4gICAgLy8gRm9yIHRvdWNoIGV2ZW50cyBsZXQncyBnZXQgdGhlIGZpcnN0IGNoYW5nZWQgdG91Y2gncyBpZGVudGlmaWVyLlxuICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgcmV0dXJuIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllciA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yIG1vdXNlL290aGVyIGV2ZW50cyBsZXQncyBwcm92aWRlIGEgc3RhdGljIGlkLlxuICAgIHJldHVybiAxO1xuICB9O1xuXG4gIERyYWdnZXIuX2dldFRvdWNoQnlJZCA9IGZ1bmN0aW9uKGV2ZW50LCBpZCkge1xuICAgIC8vIElmIHdlIGhhdmUgYSBwb2ludGVyIGV2ZW50IHJldHVybiB0aGUgd2hvbGUgZXZlbnQgaWYgdGhlcmUncyBhIG1hdGNoLCBhbmRcbiAgICAvLyBudWxsIG90aGVyd2lzZS5cbiAgICBpZiAodHlwZW9mIGV2ZW50LnBvaW50ZXJJZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBldmVudC5wb2ludGVySWQgPT09IGlkID8gZXZlbnQgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciB0b3VjaCBldmVudHMgbGV0J3MgY2hlY2sgaWYgdGhlcmUncyBhIGNoYW5nZWQgdG91Y2ggb2JqZWN0IHRoYXQgbWF0Y2hlc1xuICAgIC8vIHRoZSBwb2ludGVySWQgaW4gd2hpY2ggY2FzZSByZXR1cm4gdGhlIHRvdWNoIG9iamVjdC5cbiAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgbW91c2Uvb3RoZXIgZXZlbnRzIGxldCdzIGFzc3VtZSB0aGVyZSdzIG9ubHkgb25lIHBvaW50ZXIgYW5kIGp1c3RcbiAgICAvLyByZXR1cm4gdGhlIGV2ZW50LlxuICAgIHJldHVybiBldmVudDtcbiAgfTtcblxuICBEcmFnZ2VyLl9vbk1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5lbWl0KGV2ZW50cy5tb3ZlLCBlKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9vbkNhbmNlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLmVtaXQoZXZlbnRzLmNhbmNlbCwgZSk7XG4gIH07XG5cbiAgRHJhZ2dlci5fb25FbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5lbWl0KGV2ZW50cy5lbmQsIGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFJlc2V0IGN1cnJlbnQgZHJhZyBvcGVyYXRpb24gKGlmIGFueSkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB0aGlzLl9wb2ludGVySWQgPSBudWxsO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5fc3RhcnRYID0gMDtcbiAgICB0aGlzLl9zdGFydFkgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRYID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WSA9IDA7XG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCxcbiAgICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSxcbiAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICk7XG5cbiAgICBEcmFnZ2VyLl9kZWFjdGl2YXRlSW5zdGFuY2UodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGN1c3RvbSBkcmFnZ2VyIGV2ZW50IGZyb20gYSByYXcgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKiBAcmV0dXJucyB7RHJhZ2dlckV2ZW50fVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2NyZWF0ZUV2ZW50ID0gZnVuY3Rpb24odHlwZSwgZSkge1xuICAgIHZhciB0b3VjaCA9IHRoaXMuX2dldFRyYWNrZWRUb3VjaChlKTtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gSGFtbWVyLmpzIGNvbXBhdGliaWxpdHkgaW50ZXJmYWNlLlxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHNyY0V2ZW50OiBlLFxuICAgICAgZGlzdGFuY2U6IHRoaXMuZ2V0RGlzdGFuY2UoKSxcbiAgICAgIGRlbHRhWDogdGhpcy5nZXREZWx0YVgoKSxcbiAgICAgIGRlbHRhWTogdGhpcy5nZXREZWx0YVkoKSxcbiAgICAgIGRlbHRhVGltZTogdHlwZSA9PT0gZXZlbnRzLnN0YXJ0ID8gMCA6IHRoaXMuZ2V0RGVsdGFUaW1lKCksXG4gICAgICBpc0ZpcnN0OiB0eXBlID09PSBldmVudHMuc3RhcnQsXG4gICAgICBpc0ZpbmFsOiB0eXBlID09PSBldmVudHMuZW5kIHx8IHR5cGUgPT09IGV2ZW50cy5jYW5jZWwsXG4gICAgICAvLyBQYXJ0aWFsIFRvdWNoIEFQSSBpbnRlcmZhY2UuXG4gICAgICBpZGVudGlmaWVyOiB0aGlzLl9wb2ludGVySWQsXG4gICAgICBzY3JlZW5YOiB0b3VjaC5zY3JlZW5YLFxuICAgICAgc2NyZWVuWTogdG91Y2guc2NyZWVuWSxcbiAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXG4gICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxuICAgICAgcGFnZVg6IHRvdWNoLnBhZ2VYLFxuICAgICAgcGFnZVk6IHRvdWNoLnBhZ2VZLFxuICAgICAgdGFyZ2V0OiB0b3VjaC50YXJnZXRcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0IGEgcmF3IGV2ZW50IGFzIGRyYWdnZXIgZXZlbnQgaW50ZXJuYWxseS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fZW1pdCA9IGZ1bmN0aW9uKHR5cGUsIGUpIHtcbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQodHlwZSwgdGhpcy5fY3JlYXRlRXZlbnQodHlwZSwgZSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgcHJvdmlkZWQgZXZlbnQgaXMgYSBQb2ludGVyRXZlbnQgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gaXQgaWYgaXQgaGFzXG4gICAqIHRoZSBzYW1lIHBvaW50ZXJJZCBhcyB0aGUgaW5zdGFuY2UuIElmIHRoZSBwcm92aWRlZCBldmVudCBpcyBhIFRvdWNoRXZlbnRcbiAgICogdGhpcyBtZXRob2Qgd2lsbCB0cnkgdG8gbG9vayBmb3IgYSBUb3VjaCBpbnN0YW5jZSBpbiB0aGUgY2hhbmdlZFRvdWNoZXMgdGhhdFxuICAgKiBoYXMgYW4gaWRlbnRpZmllciBtYXRjaGluZyB0aGlzIGluc3RhbmNlJ3MgcG9pbnRlcklkLiBJZiB0aGUgcHJvdmlkZWQgZXZlbnRcbiAgICogaXMgYSBNb3VzZUV2ZW50IChvciBqdXN0IGFueSBvdGhlciBldmVudCB0aGFuIFBvaW50ZXJFdmVudCBvciBUb3VjaEV2ZW50KVxuICAgKiBpdCB3aWxsIGJlIHJldHVybmVkIGltbWVkaWF0ZWx5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9XG4gICAqIEByZXR1cm5zIHs/KFRvdWNofFBvaW50ZXJFdmVudHxNb3VzZUV2ZW50KX1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9nZXRUcmFja2VkVG91Y2ggPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMuX3BvaW50ZXJJZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEcmFnZ2VyLl9nZXRUb3VjaEJ5SWQoZSwgdGhpcy5fcG9pbnRlcklkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgcHJlLWhhbmRsZXIgZm9yIHN0YXJ0IGV2ZW50IHRoYXQgY2hlY2tzIGlmIHdlIGNhbiBzdGFydCBkcmFnZ2luZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fcHJlU3RhcnRDaGVjayA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBub3QgYmVpbmcgZHJhZ2dlZCBjdXJyZW50bHkuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpKSByZXR1cm47XG5cbiAgICAvLyBTcGVjaWFsIGNhbmNlbGFibGUgY2hlY2sgZm9yIEFuZHJvaWQgdG8gcHJldmVudCBkcmFnIHByb2NlZHVyZSBmcm9tXG4gICAgLy8gc3RhcnRpbmcgaWYgbmF0aXZlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy4gUGFydCAxLlxuICAgIGlmIChpc0FuZHJvaWQgJiYgZS5jYW5jZWxhYmxlID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgLy8gTWFrZSBzdXJlIGxlZnQgYnV0dG9uIGlzIHByZXNzZWQgb24gbW91c2UuXG4gICAgaWYgKGUuYnV0dG9uKSByZXR1cm47XG5cbiAgICAvLyBHZXQgKGFuZCBzZXQpIHBvaW50ZXIgaWQuXG4gICAgdGhpcy5fcG9pbnRlcklkID0gRHJhZ2dlci5fZ2V0RXZlbnRQb2ludGVySWQoZSk7XG4gICAgaWYgKHRoaXMuX3BvaW50ZXJJZCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8gU3RvcmUgdGhlIHN0YXJ0IGV2ZW50IGFuZCB0cmlnZ2VyIHN0YXJ0IChhc3luYyBvciBzeW5jKS4gUG9pbnRlciBldmVudHNcbiAgICAvLyBhcmUgZW1pdHRlZCBiZWZvcmUgdG91Y2ggZXZlbnRzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGJvdGggb2YgdGhlbS4gQW5kXG4gICAgLy8gaWYgeW91IHRyeSB0byBtb3ZlIGFuIGVsZW1lbnQgYmVmb3JlIGB0b3VjaHN0YXJ0YCBpcyBlbWl0dGVkIHRoZSBwb2ludGVyXG4gICAgLy8gZXZlbnRzIGZvciB0aGF0IGVsZW1lbnQgd2lsbCBiZSBjYW5jZWxlZC4gVGhlIGZpeCBpcyB0byBkZWxheSB0aGUgZW1pdHRlZFxuICAgIC8vIHBvaW50ZXIgZXZlbnRzIGluIHN1Y2ggYSBzY2VuYXJpbyBieSBvbmUgZnJhbWUgc28gdGhhdCBgdG91Y2hzdGFydGAgaGFzXG4gICAgLy8gdGltZSB0byBiZSBlbWl0dGVkIGJlZm9yZSB0aGUgZWxlbWVudCBpcyAocG90ZW50aWFsbHkpIG1vdmVkLlxuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBlO1xuICAgIGlmIChoYXNUb3VjaEV2ZW50cyAmJiAoaGFzUG9pbnRlckV2ZW50cyB8fCBoYXNNc1BvaW50ZXJFdmVudHMpKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhbmNlbGFibGUgY2hlY2sgZm9yIEFuZHJvaWQgdG8gcHJldmVudCBkcmFnIHByb2NlZHVyZSBmcm9tXG4gICAgICAvLyBzdGFydGluZyBpZiBuYXRpdmUgc2Nyb2xsaW5nIGlzIGluIHByb2dyZXNzLiBQYXJ0IDIuXG4gICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCxcbiAgICAgICAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUsXG4gICAgICAgICAgbGlzdGVuZXJPcHRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByYWYodGhpcy5fb25TdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uU3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFib3J0IHN0YXJ0IGV2ZW50IGlmIGl0IHR1cm5zIG91dCB0byBiZSBub24tY2FuY2VsYWJsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fYWJvcnROb25DYW5jZWxhYmxlID0gZnVuY3Rpb24oZSkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LFxuICAgICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLFxuICAgICAgbGlzdGVuZXJPcHRpb25zXG4gICAgKTtcblxuICAgIGlmICh0aGlzLl9zdGFydEV2ZW50ICYmIGUuY2FuY2VsYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3BvaW50ZXJJZCA9IG51bGw7XG4gICAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBkcmFnIHByb2NlZHVyZSBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25TdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5fc3RhcnRFdmVudDtcbiAgICBpZiAoIWUpIHJldHVybjtcblxuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuXG4gICAgdmFyIHRvdWNoID0gdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpO1xuICAgIGlmICghdG91Y2gpIHJldHVybjtcblxuICAgIC8vIFNldCB1cCBpbml0IGRhdGEgYW5kIGVtaXQgc3RhcnQgZXZlbnQuXG4gICAgdGhpcy5fc3RhcnRYID0gdGhpcy5fY3VycmVudFggPSB0b3VjaC5jbGllbnRYO1xuICAgIHRoaXMuX3N0YXJ0WSA9IHRoaXMuX2N1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX2VtaXQoZXZlbnRzLnN0YXJ0LCBlKTtcbiAgICBEcmFnZ2VyLl9hY3RpdmF0ZUluc3RhbmNlKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBtb3ZlIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vbk1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHRvdWNoID0gdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpO1xuICAgIGlmICghdG91Y2gpIHJldHVybjtcblxuICAgIHRoaXMuX2N1cnJlbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLl9jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5fZW1pdChldmVudHMubW92ZSwgZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIG1vdmUgY2FuY2VsIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vbkNhbmNlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIXRoaXMuX2dldFRyYWNrZWRUb3VjaChlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fZW1pdChldmVudHMuY2FuY2VsLCBlKTtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBlbmQgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uRW5kID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICghdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpKSByZXR1cm47XG5cbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5lbmQsIGUpO1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWQgYXQgdGhlIG1vbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXJJZCAhPT0gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IGVsZW1lbnQncyB0b3VjaC1hY3Rpb24gQ1NTIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLnNldFRvdWNoQWN0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBTdG9yZSB1bm1vZGlmaWVkIHRvdWNoIGFjdGlvbiB2YWx1ZSAod2UgdHJ1c3QgdXNlciBpbnB1dCBoZXJlKS5cbiAgICB0aGlzLl90b3VjaEFjdGlvbiA9IHZhbHVlO1xuXG4gICAgLy8gU2V0IHRvdWNoLWFjdGlvbiBzdHlsZS5cbiAgICBpZiAodGFQcm9wUHJlZml4ZWQpIHtcbiAgICAgIHRoaXMuX2Nzc1Byb3BzW3RhUHJvcFByZWZpeGVkXSA9ICcnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVt0YVByb3BQcmVmaXhlZF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIHVuc3VwcG9ydGVkIHRvdWNoLWFjdGlvbiB2YWx1ZSBsZXQncyBhZGQgYSBzcGVjaWFsIGxpc3RlbmVyXG4gICAgLy8gdGhhdCBwcmV2ZW50cyBkZWZhdWx0IGFjdGlvbiBvbiB0b3VjaCBzdGFydCBldmVudC4gQSBkaXJ0eSBoYWNrLCBidXQgYmVzdFxuICAgIC8vIHdlIGNhbiBkbyBmb3Igbm93LiBUaGUgb3RoZXIgb3B0aW9ucyB3b3VsZCBiZSB0byBzb21laG93IHBvbHlmaWxsIHRoZVxuICAgIC8vIHVuc3VwcG9ydGVkIHRvdWNoIGFjdGlvbiBiZWhhdmlvciB3aXRoIGN1c3RvbSBoZXVyaXN0aWNzIHdoaWNoIHNvdW5kcyBsaWtlXG4gICAgLy8gYSBjYW4gb2Ygd29ybXMuXG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZVt0YVByb3BQcmVmaXhlZF0gIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCwgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBlbGVtZW50J3MgQ1NTIHByb3BlcnRpZXMuIEFjY2VwdHMgYW4gb2JqZWN0IHdpdGggY2FtZWwgY2FzZWQgc3R5bGVcbiAgICogcHJvcHMgd2l0aCB2YWx1ZSBwYWlycyBhcyBpdCdzIGZpcnN0IGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW25ld1Byb3BzXVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuc2V0Q3NzUHJvcHMgPSBmdW5jdGlvbihuZXdQcm9wcykge1xuICAgIGlmICghbmV3UHJvcHMpIHJldHVybjtcblxuICAgIHZhciBjdXJyZW50UHJvcHMgPSB0aGlzLl9jc3NQcm9wcztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIHByb3A7XG4gICAgdmFyIHByZWZpeGVkUHJvcDtcblxuICAgIC8vIFJlc2V0IGN1cnJlbnQgcHJvcHMuXG4gICAgZm9yIChwcm9wIGluIGN1cnJlbnRQcm9wcykge1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IGN1cnJlbnRQcm9wc1twcm9wXTtcbiAgICAgIGRlbGV0ZSBjdXJyZW50UHJvcHNbcHJvcF07XG4gICAgfVxuXG4gICAgLy8gU2V0IG5ldyBwcm9wcy5cbiAgICBmb3IgKHByb3AgaW4gbmV3UHJvcHMpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsdWUgZm9yIHRoZSBwcm9wLlxuICAgICAgaWYgKCFuZXdQcm9wc1twcm9wXSkgY29udGludWU7XG5cbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRvdWNoLWFjdGlvbi5cbiAgICAgIGlmIChwcm9wID09PSB0YVByb3ApIHtcbiAgICAgICAgdGhpcy5zZXRUb3VjaEFjdGlvbihuZXdQcm9wc1twcm9wXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgcHJlZml4ZWQgcHJvcCBhbmQgc2tpcCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICAgIHByZWZpeGVkUHJvcCA9IGdldFByZWZpeGVkUHJvcE5hbWUoZWxlbWVudC5zdHlsZSwgcHJvcCk7XG4gICAgICBpZiAoIXByZWZpeGVkUHJvcCkgY29udGludWU7XG5cbiAgICAgIC8vIFN0b3JlIHRoZSBwcm9wIGFuZCBhZGQgdGhlIHN0eWxlLlxuICAgICAgY3VycmVudFByb3BzW3ByZWZpeGVkUHJvcF0gPSAnJztcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJlZml4ZWRQcm9wXSA9IG5ld1Byb3BzW3Byb3BdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSG93IG11Y2ggdGhlIHBvaW50ZXIgaGFzIG1vdmVkIG9uIHgtYXhpcyBmcm9tIHN0YXJ0IHBvc2l0aW9uLCBpbiBwaXhlbHMuXG4gICAqIFBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBtb3ZlbWVudCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREZWx0YVggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFggLSB0aGlzLl9zdGFydFg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRoZSBwb2ludGVyIGhhcyBtb3ZlZCBvbiB5LWF4aXMgZnJvbSBzdGFydCBwb3NpdGlvbiwgaW4gcGl4ZWxzLlxuICAgKiBQb3NpdGl2ZSB2YWx1ZSBpbmRpY2F0ZXMgbW92ZW1lbnQgZnJvbSB0b3AgdG8gYm90dG9tLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGVsdGFZID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRZIC0gdGhpcy5fc3RhcnRZO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIChpbiBwaXhlbHMpIGhhcyBwb2ludGVyIG1vdmVkIGZyb20gc3RhcnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy5nZXREZWx0YVgoKTtcbiAgICB2YXIgeSA9IHRoaXMuZ2V0RGVsdGFZKCk7XG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgfTtcblxuICAvKipcbiAgICogSG93IGxvbmcgaGFzIHBvaW50ZXIgYmVlbiBkcmFnZ2VkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGVsdGFUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSA/IERhdGUubm93KCkgLSB0aGlzLl9zdGFydFRpbWUgOiAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGRyYWcgZXZlbnQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAqICAgLSAnc3RhcnQnLCAnbW92ZScsICdjYW5jZWwnIG9yICdlbmQnLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGRyYWcgZXZlbnQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAqICAgLSAnc3RhcnQnLCAnbW92ZScsICdjYW5jZWwnIG9yICdlbmQnLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnRzLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgdW5iaW5kIGFsbCBkcmFnIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgZXZlbnRzID0gRHJhZ2dlci5fZXZlbnRzO1xuXG4gICAgLy8gUmVzZXQgZGF0YSBhbmQgZGVhY3RpdmF0ZSB0aGUgaW5zdGFuY2UuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIERlc3Ryb3kgZW1pdHRlci5cbiAgICB0aGlzLl9lbWl0dGVyLmRlc3Ryb3koKTtcblxuICAgIC8vIFVuYmluZCBldmVudCBoYW5kbGVycy5cbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl9tb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuXG4gICAgLy8gUmVzZXQgc3R5bGVzLlxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5fY3NzUHJvcHMpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSB0aGlzLl9jc3NQcm9wc1twcm9wXTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jc3NQcm9wc1twcm9wXTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBkYXRhLlxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gTWFyayBhcyBkZXN0cm95ZWQuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIHRpY2tlciBzeXN0ZW0gZm9yIGhhbmRsaW5nIERPTSByZWFkcyBhbmQgd3JpdGVzIGluIGFuIGVmZmljaWVudCB3YXkuXG4gICAqIENvbnRhaW5zIGEgcmVhZCBxdWV1ZSBhbmQgYSB3cml0ZSBxdWV1ZSB0aGF0IGFyZSBwcm9jZXNzZWQgb24gdGhlIG5leHRcbiAgICogYW5pbWF0aW9uIGZyYW1lIHdoZW4gbmVlZGVkLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFRpY2tlcigpIHtcbiAgICB0aGlzLl9uZXh0U3RlcCA9IG51bGw7XG5cbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX3JlYWRzID0ge307XG4gICAgdGhpcy5fd3JpdGVzID0ge307XG5cbiAgICB0aGlzLl9iYXRjaCA9IFtdO1xuICAgIHRoaXMuX2JhdGNoUmVhZHMgPSB7fTtcbiAgICB0aGlzLl9iYXRjaFdyaXRlcyA9IHt9O1xuXG4gICAgdGhpcy5fc3RlcCA9IHRoaXMuX3N0ZXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFRpY2tlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oaWQsIHJlYWRPcGVyYXRpb24sIHdyaXRlT3BlcmF0aW9uLCBpc1ByaW9yaXRpemVkKSB7XG4gICAgLy8gRmlyc3QsIGxldCdzIGNoZWNrIGlmIGFuIGl0ZW0gaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHF1ZXVlcyB3aXRoIHRoZSBzYW1lIGlkXG4gICAgLy8gYW5kIGlmIHNvIC0+IHJlbW92ZSBpdC5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5fcXVldWUuaW5kZXhPZihpZCk7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB0aGlzLl9xdWV1ZVtjdXJyZW50SW5kZXhdID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gQWRkIGVudHJ5LlxuICAgIGlzUHJpb3JpdGl6ZWQgPyB0aGlzLl9xdWV1ZS51bnNoaWZ0KGlkKSA6IHRoaXMuX3F1ZXVlLnB1c2goaWQpO1xuICAgIHRoaXMuX3JlYWRzW2lkXSA9IHJlYWRPcGVyYXRpb247XG4gICAgdGhpcy5fd3JpdGVzW2lkXSA9IHdyaXRlT3BlcmF0aW9uO1xuXG4gICAgLy8gRmluYWxseSwgbGV0J3Mga2ljay1zdGFydCB0aGUgbmV4dCB0aWNrIGlmIGl0IGlzIG5vdCBydW5uaW5nIHlldC5cbiAgICBpZiAoIXRoaXMuX25leHRTdGVwKSB0aGlzLl9uZXh0U3RlcCA9IHJhZih0aGlzLl9zdGVwKTtcbiAgfTtcblxuICBUaWNrZXIucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuX3F1ZXVlLmluZGV4T2YoaWQpO1xuICAgIGlmIChjdXJyZW50SW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5fcXVldWVbY3VycmVudEluZGV4XSA9IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9yZWFkc1tpZF07XG4gICAgICBkZWxldGUgdGhpcy5fd3JpdGVzW2lkXTtcbiAgICB9XG4gIH07XG5cbiAgVGlja2VyLnByb3RvdHlwZS5fc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciByZWFkcyA9IHRoaXMuX3JlYWRzO1xuICAgIHZhciB3cml0ZXMgPSB0aGlzLl93cml0ZXM7XG4gICAgdmFyIGJhdGNoID0gdGhpcy5fYmF0Y2g7XG4gICAgdmFyIGJhdGNoUmVhZHMgPSB0aGlzLl9iYXRjaFJlYWRzO1xuICAgIHZhciBiYXRjaFdyaXRlcyA9IHRoaXMuX2JhdGNoV3JpdGVzO1xuICAgIHZhciBsZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gICAgdmFyIGlkO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUmVzZXQgdGlja2VyLlxuICAgIHRoaXMuX25leHRTdGVwID0gbnVsbDtcblxuICAgIC8vIFNldHVwIHF1ZXVlcyBhbmQgY2FsbGJhY2sgcGxhY2Vob2xkZXJzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWQgPSBxdWV1ZVtpXTtcbiAgICAgIGlmICghaWQpIGNvbnRpbnVlO1xuXG4gICAgICBiYXRjaC5wdXNoKGlkKTtcblxuICAgICAgYmF0Y2hSZWFkc1tpZF0gPSByZWFkc1tpZF07XG4gICAgICBkZWxldGUgcmVhZHNbaWRdO1xuXG4gICAgICBiYXRjaFdyaXRlc1tpZF0gPSB3cml0ZXNbaWRdO1xuICAgICAgZGVsZXRlIHdyaXRlc1tpZF07XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgcXVldWUuXG4gICAgcXVldWUubGVuZ3RoID0gMDtcblxuICAgIC8vIFByb2Nlc3MgcmVhZCBjYWxsYmFja3MuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZCA9IGJhdGNoW2ldO1xuICAgICAgaWYgKGJhdGNoUmVhZHNbaWRdKSB7XG4gICAgICAgIGJhdGNoUmVhZHNbaWRdKCk7XG4gICAgICAgIGRlbGV0ZSBiYXRjaFJlYWRzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzIHdyaXRlIGNhbGxiYWNrcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkID0gYmF0Y2hbaV07XG4gICAgICBpZiAoYmF0Y2hXcml0ZXNbaWRdKSB7XG4gICAgICAgIGJhdGNoV3JpdGVzW2lkXSgpO1xuICAgICAgICBkZWxldGUgYmF0Y2hXcml0ZXNbaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IGJhdGNoLlxuICAgIGJhdGNoLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aWNrZXIgaWYgbmVlZGVkLlxuICAgIGlmICghdGhpcy5fbmV4dFN0ZXAgJiYgcXVldWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9uZXh0U3RlcCA9IHJhZih0aGlzLl9zdGVwKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHRpY2tlciA9IG5ldyBUaWNrZXIoKTtcblxuICB2YXIgbGF5b3V0VGljayA9ICdsYXlvdXQnO1xuICB2YXIgdmlzaWJpbGl0eVRpY2sgPSAndmlzaWJpbGl0eSc7XG4gIHZhciBtb3ZlVGljayA9ICdtb3ZlJztcbiAgdmFyIHNjcm9sbFRpY2sgPSAnc2Nyb2xsJztcbiAgdmFyIHBsYWNlaG9sZGVyVGljayA9ICdwbGFjZWhvbGRlcic7XG5cbiAgZnVuY3Rpb24gYWRkTGF5b3V0VGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIGxheW91dFRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxMYXlvdXRUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIGxheW91dFRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVmlzaWJpbGl0eVRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyB2aXNpYmlsaXR5VGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbFZpc2liaWxpdHlUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIHZpc2liaWxpdHlUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE1vdmVUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgbW92ZVRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxNb3ZlVGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBtb3ZlVGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTY3JvbGxUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgc2Nyb2xsVGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbFNjcm9sbFRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgc2Nyb2xsVGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQbGFjZWhvbGRlclRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBwbGFjZWhvbGRlclRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxQbGFjZWhvbGRlclRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgcGxhY2Vob2xkZXJUaWNrKTtcbiAgfVxuXG4gIHZhciBFbFByb3RvID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuICB2YXIgbWF0Y2hlc0ZuID1cbiAgICBFbFByb3RvLm1hdGNoZXMgfHxcbiAgICBFbFByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgZWxlbWVudCBtYXRjaGVzIGEgQ1NTIHNlbGVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGVsZW1lbnRNYXRjaGVzKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBtYXRjaGVzRm4uY2FsbChlbCwgc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjbGFzcyB0byBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZWxlbWVudE1hdGNoZXMoZWxlbWVudCwgJy4nICsgY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHRlbXBBcnJheSA9IFtdO1xuICB2YXIgbnVtYmVyVHlwZSA9ICdudW1iZXInO1xuXG4gIC8qKlxuICAgKiBJbnNlcnQgYW4gaXRlbSBvciBhbiBhcnJheSBvZiBpdGVtcyB0byBhcnJheSB0byBhIHNwZWNpZmllZCBpbmRleC4gTXV0YXRlc1xuICAgKiB0aGUgYXJyYXkuIFRoZSBpbmRleCBjYW4gYmUgbmVnYXRpdmUgaW4gd2hpY2ggY2FzZSB0aGUgaXRlbXMgd2lsbCBiZSBhZGRlZFxuICAgKiB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4PS0xXVxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlJbnNlcnQoYXJyYXksIGl0ZW1zLCBpbmRleCkge1xuICAgIHZhciBzdGFydEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSBudW1iZXJUeXBlID8gaW5kZXggOiAtMTtcbiAgICBpZiAoc3RhcnRJbmRleCA8IDApIHN0YXJ0SW5kZXggPSBhcnJheS5sZW5ndGggLSBzdGFydEluZGV4ICsgMTtcblxuICAgIGFycmF5LnNwbGljZS5hcHBseShhcnJheSwgdGVtcEFycmF5LmNvbmNhdChzdGFydEluZGV4LCAwLCBpdGVtcykpO1xuICAgIHRlbXBBcnJheS5sZW5ndGggPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBhcnJheSBpbmRleC4gQmFzaWNhbGx5IHRoaXMgZnVuY3Rpb24gbWFrZXMgc3VyZSB0aGF0IHRoZSBwcm92aWRlZFxuICAgKiBhcnJheSBpbmRleCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgcHJvdmlkZWQgYXJyYXkgYW5kIGFsc28gdHJhbnNmb3Jtc1xuICAgKiBuZWdhdGl2ZSBpbmRleCB0byB0aGUgbWF0Y2hpbmcgcG9zaXRpdmUgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzTWlncmF0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCBpbmRleCwgaXNNaWdyYXRpb24pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBtYXhJbmRleCA9IE1hdGgubWF4KDAsIGlzTWlncmF0aW9uID8gbGVuZ3RoIDogbGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIGluZGV4ID4gbWF4SW5kZXggPyBtYXhJbmRleCA6IGluZGV4IDwgMCA/IE1hdGgubWF4KG1heEluZGV4ICsgaW5kZXggKyAxLCAwKSA6IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYXJyYXkgaXRlbSB0byBhbm90aGVyIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIG9mIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBtb3ZlZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvSW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgd2hlcmUgdGhlIGl0ZW0gc2hvdWxkIGJlIG1vdmVkIHRvLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlNb3ZlKGFycmF5LCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGFycmF5IGhhcyB0d28gb3IgbW9yZSBpdGVtcy5cbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG4gICAgLy8gTm9ybWFsaXplIHRoZSBpbmRpY2VzLlxuICAgIHZhciBmcm9tID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgZnJvbUluZGV4KTtcbiAgICB2YXIgdG8gPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCB0b0luZGV4KTtcblxuICAgIC8vIEFkZCB0YXJnZXQgaXRlbSB0byB0aGUgbmV3IHBvc2l0aW9uLlxuICAgIGlmIChmcm9tICE9PSB0bykge1xuICAgICAgYXJyYXkuc3BsaWNlKHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTd2FwIGFycmF5IGl0ZW1zLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgb2YgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIHN3YXBwZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aXRoSW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgb2YgdGhlIG90aGVyIGl0ZW0gdGhhdCB3aWxsIGJlIHN3YXBwZWQuXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheVN3YXAoYXJyYXksIGluZGV4LCB3aXRoSW5kZXgpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGFycmF5IGhhcyB0d28gb3IgbW9yZSBpdGVtcy5cbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG4gICAgLy8gTm9ybWFsaXplIHRoZSBpbmRpY2VzLlxuICAgIHZhciBpbmRleEEgPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCBpbmRleCk7XG4gICAgdmFyIGluZGV4QiA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIHdpdGhJbmRleCk7XG4gICAgdmFyIHRlbXA7XG5cbiAgICAvLyBTd2FwIHRoZSBpdGVtcy5cbiAgICBpZiAoaW5kZXhBICE9PSBpbmRleEIpIHtcbiAgICAgIHRlbXAgPSBhcnJheVtpbmRleEFdO1xuICAgICAgYXJyYXlbaW5kZXhBXSA9IGFycmF5W2luZGV4Ql07XG4gICAgICBhcnJheVtpbmRleEJdID0gdGVtcDtcbiAgICB9XG4gIH1cblxuICB2YXIgYWN0aW9uQ2FuY2VsID0gJ2NhbmNlbCc7XG4gIHZhciBhY3Rpb25GaW5pc2ggPSAnZmluaXNoJztcbiAgdmFyIGRlYm91bmNlVGljayA9ICdkZWJvdW5jZSc7XG4gIHZhciBkZWJvdW5jZUlkID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAgKiBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gICAqIE4gbWlsbGlzZWNvbmRzLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gYWNjZXB0cyBvbmUgYXJndW1lbnQgd2hpY2gsIHdoZW5cbiAgICogYmVpbmcgXCJmaW5pc2hcIiwgY2FsbHMgdGhlIGRlYm91bmNlIGZ1bmN0aW9uIGltbWVkaWF0ZWx5IGlmIGl0IGlzIGN1cnJlbnRseVxuICAgKiB3YWl0aW5nIHRvIGJlIGNhbGxlZCwgYW5kIHdoZW4gYmVpbmcgXCJjYW5jZWxcIiBjYW5jZWxzIHRoZSBjdXJyZW50bHkgcXVldWVkXG4gICAqIGZ1bmN0aW9uIGNhbGwuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0XG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZuLCB3YWl0KSB7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgdmFyIHRpY2tlcklkID0gKytkZWJvdW5jZUlkICsgZGVib3VuY2VUaWNrO1xuXG4gICAgaWYgKHdhaXQgPiAwKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aWNrZXIuY2FuY2VsKHRpY2tlcklkKTtcbiAgICAgICAgICBpZiAoYWN0aW9uID09PSBhY3Rpb25GaW5pc2gpIGZuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uICE9PSBhY3Rpb25DYW5jZWwgJiYgYWN0aW9uICE9PSBhY3Rpb25GaW5pc2gpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGlja2VyLmFkZCh0aWNrZXJJZCwgZm4sIG51bGwsIHRydWUpO1xuICAgICAgICAgIH0sIHdhaXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgIGlmIChhY3Rpb24gIT09IGFjdGlvbkNhbmNlbCkgZm4oKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBlbGVtZW50IGlzIHRyYW5zZm9ybWVkLCBmYWxzZSBpZiBub3QuIEluIHByYWN0aWNlIHRoZVxuICAgKiBlbGVtZW50J3MgZGlzcGxheSB2YWx1ZSBtdXN0IGJlIGFueXRoaW5nIGVsc2UgdGhhbiBcIm5vbmVcIiBvciBcImlubGluZVwiIGFzXG4gICAqIHdlbGwgYXMgaGF2ZSBhIHZhbGlkIHRyYW5zZm9ybSB2YWx1ZSBhcHBsaWVkIGluIG9yZGVyIHRvIGJlIGNvdW50ZWQgYXMgYVxuICAgKiB0cmFuc2Zvcm1lZCBlbGVtZW50LlxuICAgKlxuICAgKiBCb3Jyb3dlZCBmcm9tIE1lenIgKHYwLjYuMSk6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXNyYW1vL21lenIvYmxvYi8wLjYuMS9tZXpyLmpzI0w2NjFcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzVHJhbnNmb3JtZWQoZWxlbWVudCkge1xuICAgIHZhciB0cmFuc2Zvcm0gPSBnZXRTdHlsZShlbGVtZW50LCAndHJhbnNmb3JtJyk7XG4gICAgaWYgKCF0cmFuc2Zvcm0gfHwgdHJhbnNmb3JtID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBkaXNwbGF5ID0gZ2V0U3R5bGUoZWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICBpZiAoZGlzcGxheSA9PT0gJ2lubGluZScgfHwgZGlzcGxheSA9PT0gJ25vbmUnKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFic29sdXRlIHBvc2l0aW9uZWQgZWxlbWVudCdzIGNvbnRhaW5pbmcgYmxvY2ssIHdoaWNoIGlzXG4gICAqIGNvbnNpZGVyZWQgdG8gYmUgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgZWxlbWVudCB0aGF0IHRoZSB0YXJnZXQgZWxlbWVudCdzXG4gICAqIHBvc2l0aW9uaW5nIGlzIHJlbGF0aXZlIHRvLiBEaXNjbGFpbWVyOiB0aGlzIG9ubHkgd29ya3MgYXMgaW50ZW5kZWQgZm9yXG4gICAqIGFic29sdXRlIHBvc2l0aW9uZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5jbHVkZVNlbGY9ZmFsc2VdXG4gICAqICAgLSBXaGVuIHRoaXMgaXMgc2V0IHRvIHRydWUgdGhlIGNvbnRhaW5pbmcgYmxvY2sgY2hlY2tpbmcgaXMgc3RhcnRlZCBmcm9tXG4gICAqICAgICB0aGUgcHJvdmlkZWQgZWxlbWVudC4gT3RoZXJ3aXNlIHRoZSBjaGVja2luZyBpcyBzdGFydGVkIGZyb20gdGhlXG4gICAqICAgICBwcm92aWRlZCBlbGVtZW50J3MgcGFyZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm5zIHsoRG9jdW1lbnR8RWxlbWVudCl9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCwgaW5jbHVkZVNlbGYpIHtcbiAgICAvLyBBcyBsb25nIGFzIHRoZSBjb250YWluaW5nIGJsb2NrIGlzIGFuIGVsZW1lbnQsIHN0YXRpYyBhbmQgbm90XG4gICAgLy8gdHJhbnNmb3JtZWQsIHRyeSB0byBnZXQgdGhlIGVsZW1lbnQncyBwYXJlbnQgZWxlbWVudCBhbmQgZmFsbGJhY2sgdG9cbiAgICAvLyBkb2N1bWVudC4gaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3JhbW8vbWV6ci9ibG9iLzAuNi4xL21lenIuanMjTDMzOVxuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICB2YXIgcmV0ID0gKGluY2x1ZGVTZWxmID8gZWxlbWVudCA6IGVsZW1lbnQucGFyZW50RWxlbWVudCkgfHwgZG9jdW1lbnQ7XG4gICAgd2hpbGUgKHJldCAmJiByZXQgIT09IGRvY3VtZW50ICYmIGdldFN0eWxlKHJldCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnICYmICFpc1RyYW5zZm9ybWVkKHJldCkpIHtcbiAgICAgIHJldCA9IHJldC5wYXJlbnRFbGVtZW50IHx8IGRvY3VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXB1dGVkIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBzdHlsZSBwcm9wZXJ0eSB0cmFuc2Zvcm1lZCBpbnRvXG4gICAqIGEgZmxvYXQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3R5bGVBc0Zsb2F0KGVsLCBzdHlsZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGdldFN0eWxlKGVsLCBzdHlsZSkpIHx8IDA7XG4gIH1cblxuICB2YXIgb2Zmc2V0QSA9IHt9O1xuICB2YXIgb2Zmc2V0QiA9IHt9O1xuICB2YXIgb2Zmc2V0RGlmZiA9IHt9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50J3MgZG9jdW1lbnQgb2Zmc2V0LCB3aGljaCBpbiBwcmFjdGljZSBtZWFucyB0aGUgdmVydGljYWxcbiAgICogYW5kIGhvcml6b250YWwgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZWxlbWVudCdzIG5vcnRod2VzdCBjb3JuZXIgYW5kIHRoZVxuICAgKiBkb2N1bWVudCdzIG5vcnRod2VzdCBjb3JuZXIuIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lXG4gICAqIG9iamVjdCBzbyBiZSBzdXJlIHRvIHJlYWQgdGhlIGRhdGEgZnJvbSBpdCBpbnN0ZWFkIHVzaW5nIGl0IGFzIGEgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAcGFyYW0geyhEb2N1bWVudHxFbGVtZW50fFdpbmRvdyl9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvZmZzZXREYXRhXVxuICAgKiAgIC0gT3B0aW9uYWwgZGF0YSBvYmplY3Qgd2hlcmUgdGhlIG9mZnNldCBkYXRhIHdpbGwgYmUgaW5zZXJ0ZWQgdG8uIElmIG5vdFxuICAgKiAgICAgcHJvdmlkZWQgYSBuZXcgb2JqZWN0IHdpbGwgYmUgY3JlYXRlZCBmb3IgdGhlIHJldHVybiBkYXRhLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsZW1lbnQsIG9mZnNldERhdGEpIHtcbiAgICB2YXIgcmV0ID0gb2Zmc2V0RGF0YSB8fCB7fTtcbiAgICB2YXIgcmVjdDtcblxuICAgIC8vIFNldCB1cCByZXR1cm4gZGF0YS5cbiAgICByZXQubGVmdCA9IDA7XG4gICAgcmV0LnRvcCA9IDA7XG5cbiAgICAvLyBEb2N1bWVudCdzIG9mZnNldHMgYXJlIGFsd2F5cyAwLlxuICAgIGlmIChlbGVtZW50ID09PSBkb2N1bWVudCkgcmV0dXJuIHJldDtcblxuICAgIC8vIEFkZCB2aWV3cG9ydCBzY3JvbGwgbGVmdC90b3AgdG8gdGhlIHJlc3BlY3RpdmUgb2Zmc2V0cy5cbiAgICByZXQubGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCAwO1xuICAgIHJldC50b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgMDtcblxuICAgIC8vIFdpbmRvdydzIG9mZnNldHMgYXJlIHRoZSB2aWV3cG9ydCBzY3JvbGwgbGVmdC90b3AgdmFsdWVzLlxuICAgIGlmIChlbGVtZW50LnNlbGYgPT09IHdpbmRvdy5zZWxmKSByZXR1cm4gcmV0O1xuXG4gICAgLy8gQWRkIGVsZW1lbnQncyBjbGllbnQgcmVjdHMgdG8gdGhlIG9mZnNldHMuXG4gICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0LmxlZnQgKz0gcmVjdC5sZWZ0O1xuICAgIHJldC50b3AgKz0gcmVjdC50b3A7XG5cbiAgICAvLyBFeGNsdWRlIGVsZW1lbnQncyBib3JkZXJzIGZyb20gdGhlIG9mZnNldC5cbiAgICByZXQubGVmdCArPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1sZWZ0LXdpZHRoJyk7XG4gICAgcmV0LnRvcCArPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci10b3Atd2lkdGgnKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBvZmZzZXQgZGlmZmVyZW5jZSB0d28gZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1BXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1CXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbXBhcmVDb250YWluaW5nQmxvY2tzPWZhbHNlXVxuICAgKiAgIC0gV2hlbiB0aGlzIGlzIHNldCB0byB0cnVlIHRoZSBjb250YWluaW5nIGJsb2NrcyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudHNcbiAgICogICAgIHdpbGwgYmUgdXNlZCBmb3IgY2FsY3VsYXRpbmcgdGhlIGRpZmZlcmVuY2UuIE90aGVyd2lzZSB0aGUgcHJvdmlkZWRcbiAgICogICAgIGVsZW1lbnRzIHdpbGwgYmUgY29tcGFyZWQgZGlyZWN0bHkuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXREaWZmKGVsZW1BLCBlbGVtQiwgY29tcGFyZUNvbnRhaW5pbmdCbG9ja3MpIHtcbiAgICBvZmZzZXREaWZmLmxlZnQgPSAwO1xuICAgIG9mZnNldERpZmYudG9wID0gMDtcblxuICAgIC8vIElmIGVsZW1lbnRzIGFyZSBzYW1lIGxldCdzIHJldHVybiBlYXJseS5cbiAgICBpZiAoZWxlbUEgPT09IGVsZW1CKSByZXR1cm4gb2Zmc2V0RGlmZjtcblxuICAgIC8vIENvbXBhcmUgY29udGFpbmluZyBibG9ja3MgaWYgbmVjZXNzYXJ5LlxuICAgIGlmIChjb21wYXJlQ29udGFpbmluZ0Jsb2Nrcykge1xuICAgICAgZWxlbUEgPSBnZXRDb250YWluaW5nQmxvY2soZWxlbUEsIHRydWUpO1xuICAgICAgZWxlbUIgPSBnZXRDb250YWluaW5nQmxvY2soZWxlbUIsIHRydWUpO1xuXG4gICAgICAvLyBJZiBjb250YWluaW5nIGJsb2NrcyBhcmUgaWRlbnRpY2FsLCBsZXQncyByZXR1cm4gZWFybHkuXG4gICAgICBpZiAoZWxlbUEgPT09IGVsZW1CKSByZXR1cm4gb2Zmc2V0RGlmZjtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5LCBsZXQncyBjYWxjdWxhdGUgdGhlIG9mZnNldCBkaWZmLlxuICAgIGdldE9mZnNldChlbGVtQSwgb2Zmc2V0QSk7XG4gICAgZ2V0T2Zmc2V0KGVsZW1CLCBvZmZzZXRCKTtcbiAgICBvZmZzZXREaWZmLmxlZnQgPSBvZmZzZXRCLmxlZnQgLSBvZmZzZXRBLmxlZnQ7XG4gICAgb2Zmc2V0RGlmZi50b3AgPSBvZmZzZXRCLnRvcCAtIG9mZnNldEEudG9wO1xuXG4gICAgcmV0dXJuIG9mZnNldERpZmY7XG4gIH1cblxuICB2YXIgc3R5bGVPdmVyZmxvdyA9ICdvdmVyZmxvdyc7XG4gIHZhciBzdHlsZU92ZXJmbG93WCA9ICdvdmVyZmxvdy14JztcbiAgdmFyIHN0eWxlT3ZlcmZsb3dZID0gJ292ZXJmbG93LXknO1xuICB2YXIgb3ZlcmZsb3dBdXRvID0gJ2F1dG8nO1xuICB2YXIgb3ZlcmZsb3dTY3JvbGwgPSAnc2Nyb2xsJztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBzY3JvbGxhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsZW1lbnQpIHtcbiAgICB2YXIgb3ZlcmZsb3cgPSBnZXRTdHlsZShlbGVtZW50LCBzdHlsZU92ZXJmbG93KTtcbiAgICBpZiAob3ZlcmZsb3cgPT09IG92ZXJmbG93QXV0byB8fCBvdmVyZmxvdyA9PT0gb3ZlcmZsb3dTY3JvbGwpIHJldHVybiB0cnVlO1xuXG4gICAgb3ZlcmZsb3cgPSBnZXRTdHlsZShlbGVtZW50LCBzdHlsZU92ZXJmbG93WCk7XG4gICAgaWYgKG92ZXJmbG93ID09PSBvdmVyZmxvd0F1dG8gfHwgb3ZlcmZsb3cgPT09IG92ZXJmbG93U2Nyb2xsKSByZXR1cm4gdHJ1ZTtcblxuICAgIG92ZXJmbG93ID0gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVPdmVyZmxvd1kpO1xuICAgIGlmIChvdmVyZmxvdyA9PT0gb3ZlcmZsb3dBdXRvIHx8IG92ZXJmbG93ID09PSBvdmVyZmxvd1Njcm9sbCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdCBlbGVtZW50J3MgYW5jZXN0b3JzIHRoYXQgYXJlIHBvdGVudGlhbGx5IHNjcm9sbGFibGUgZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5jbHVkZVNlbGY9ZmFsc2VdXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtkYXRhXVxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKGVsZW1lbnQsIGluY2x1ZGVTZWxmLCBkYXRhKSB7XG4gICAgdmFyIHJldCA9IGRhdGEgfHwgW107XG4gICAgdmFyIHBhcmVudCA9IGluY2x1ZGVTZWxmID8gZWxlbWVudCA6IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgIC8vIEZpbmQgc2Nyb2xsIHBhcmVudHMuXG4gICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAvLyBJZiBlbGVtZW50IGlzIGluc2lkZSBTaGFkb3dET00gbGV0J3MgZ2V0IGl0J3MgaG9zdCBub2RlIGZyb20gdGhlIHJlYWxcbiAgICAgIC8vIERPTSBhbmQgY29udGludWUgbG9vcGluZy5cbiAgICAgIGlmIChwYXJlbnQuZ2V0Um9vdE5vZGUgJiYgcGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0Um9vdE5vZGUoKS5ob3N0O1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgZWxlbWVudCBpcyBzY3JvbGxhYmxlIGxldCdzIGFkZCBpdCB0byB0aGUgc2Nyb2xsYWJsZSBsaXN0LlxuICAgICAgaWYgKGlzU2Nyb2xsYWJsZShwYXJlbnQpKSB7XG4gICAgICAgIHJldC5wdXNoKHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyBhZGQgd2luZG93IHRvIHRoZSByZXN1bHRzLlxuICAgIHJldC5wdXNoKHdpbmRvdyk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgdmFyIHRyYW5zbGF0ZVZhbHVlID0ge307XG4gIHZhciB0cmFuc2Zvcm1TdHlsZSQyID0gJ3RyYW5zZm9ybSc7XG4gIHZhciB0cmFuc2Zvcm1Ob25lID0gJ25vbmUnO1xuICB2YXIgcnhNYXQzZCA9IC9ebWF0cml4M2QvO1xuICB2YXIgcnhNYXRUeCA9IC8oW14sXSosKXs0fS87XG4gIHZhciByeE1hdDNkVHggPSAvKFteLF0qLCl7MTJ9LztcbiAgdmFyIHJ4TmV4dEl0ZW0gPSAvW14sXSosLztcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCdzIGNvbXB1dGVkIHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgdmFsdWVzIGFzIGEgZmxvYXRzLlxuICAgKiBUaGUgcmV0dXJuZWQgb2JqZWN0IGlzIGFsd2F5cyB0aGUgc2FtZSBvYmplY3QgYW5kIHVwZGF0ZWQgZXZlcnkgdGltZSB0aGlzXG4gICAqIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpIHtcbiAgICB0cmFuc2xhdGVWYWx1ZS54ID0gMDtcbiAgICB0cmFuc2xhdGVWYWx1ZS55ID0gMDtcblxuICAgIHZhciB0cmFuc2Zvcm0gPSBnZXRTdHlsZShlbGVtZW50LCB0cmFuc2Zvcm1TdHlsZSQyKTtcbiAgICBpZiAoIXRyYW5zZm9ybSB8fCB0cmFuc2Zvcm0gPT09IHRyYW5zZm9ybU5vbmUpIHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGVWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gc3R5bGUgY2FuIGJlIGluIGVpdGhlciBtYXRyaXgzZCguLi4pIG9yIG1hdHJpeCguLi4pLlxuICAgIHZhciBpc01hdDNkID0gcnhNYXQzZC50ZXN0KHRyYW5zZm9ybSk7XG4gICAgdmFyIHRYID0gdHJhbnNmb3JtLnJlcGxhY2UoaXNNYXQzZCA/IHJ4TWF0M2RUeCA6IHJ4TWF0VHgsICcnKTtcbiAgICB2YXIgdFkgPSB0WC5yZXBsYWNlKHJ4TmV4dEl0ZW0sICcnKTtcblxuICAgIHRyYW5zbGF0ZVZhbHVlLnggPSBwYXJzZUZsb2F0KHRYKSB8fCAwO1xuICAgIHRyYW5zbGF0ZVZhbHVlLnkgPSBwYXJzZUZsb2F0KHRZKSB8fCAwO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0ZVZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHZhbHVlIGludG8gQ1NTIHRyYW5zZm9ybSBzdHlsZVxuICAgKiBwcm9wZXJ0eSdzIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlU3RyaW5nKHgsIHkpIHtcbiAgICByZXR1cm4gJ3RyYW5zbGF0ZVgoJyArIHggKyAncHgpIHRyYW5zbGF0ZVkoJyArIHkgKyAncHgpJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3MgZnJvbSBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50TWF0Y2hlcyhlbGVtZW50LCAnLicgKyBjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKCcgJyArIGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnKVxuICAgICAgICAgIC5yZXBsYWNlKCcgJyArIGNsYXNzTmFtZSArICcgJywgJyAnKVxuICAgICAgICAgIC50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRHJhZyBzdGFydCBwcmVkaWNhdGUgc3RhdGVzLlxuICB2YXIgc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZSA9IDA7XG4gIHZhciBzdGFydFByZWRpY2F0ZVBlbmRpbmcgPSAxO1xuICB2YXIgc3RhcnRQcmVkaWNhdGVSZXNvbHZlZCA9IDI7XG4gIHZhciBzdGFydFByZWRpY2F0ZVJlamVjdGVkID0gMztcblxuICAvKipcbiAgICogQmluZCB0b3VjaCBpbnRlcmFjdGlvbiB0byBhbiBpdGVtLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtRHJhZyhpdGVtKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9ncmlkSWQgPSBncmlkLl9pZDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzTWlncmF0aW5nID0gZmFsc2U7XG5cbiAgICAvLyBTdGFydCBwcmVkaWNhdGUgZGF0YS5cbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZSA9IGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1N0YXJ0UHJlZGljYXRlKVxuICAgICAgPyBzZXR0aW5ncy5kcmFnU3RhcnRQcmVkaWNhdGVcbiAgICAgIDogSXRlbURyYWcuZGVmYXVsdFN0YXJ0UHJlZGljYXRlO1xuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZUluYWN0aXZlO1xuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRGF0YSBmb3IgZHJhZyBzb3J0IHByZWRpY2F0ZSBoZXVyaXN0aWNzLlxuICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgIHRoaXMuX2hYMSA9IDA7XG4gICAgdGhpcy5faFgyID0gMDtcbiAgICB0aGlzLl9oWTEgPSAwO1xuICAgIHRoaXMuX2hZMiA9IDA7XG5cbiAgICAvLyBTZXR1cCBpdGVtJ3MgaW5pdGlhbCBkcmFnIGRhdGEuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIEJpbmQgdGhlIG1ldGhvZHMgdGhhdCBuZWVkcyBiaW5kaW5nLlxuICAgIHRoaXMuX3ByZVN0YXJ0Q2hlY2sgPSB0aGlzLl9wcmVTdGFydENoZWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcHJlRW5kQ2hlY2sgPSB0aGlzLl9wcmVFbmRDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uU2Nyb2xsID0gdGhpcy5fb25TY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVwYXJlTW92ZSA9IHRoaXMuX3ByZXBhcmVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYXBwbHlNb3ZlID0gdGhpcy5fYXBwbHlNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcHJlcGFyZVNjcm9sbCA9IHRoaXMuX3ByZXBhcmVTY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9hcHBseVNjcm9sbCA9IHRoaXMuX2FwcGx5U2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fY2hlY2tPdmVybGFwID0gdGhpcy5fY2hlY2tPdmVybGFwLmJpbmQodGhpcyk7XG5cbiAgICAvLyBDcmVhdGUgZGVib3VuY2Ugb3ZlcmxhcCBjaGVja2VyIGZ1bmN0aW9uLlxuICAgIHZhciBzb3J0SW50ZXJ2YWwgPSBzZXR0aW5ncy5kcmFnU29ydEhldXJpc3RpY3Muc29ydEludGVydmFsO1xuICAgIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlID0gZGVib3VuY2UodGhpcy5fY2hlY2tPdmVybGFwLCBzb3J0SW50ZXJ2YWwpO1xuXG4gICAgLy8gSW5pdCBkcmFnZ2VyLlxuICAgIHRoaXMuX2RyYWdnZXIgPSBuZXcgRHJhZ2dlcihlbGVtZW50LCBzZXR0aW5ncy5kcmFnQ3NzUHJvcHMpO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ3N0YXJ0JywgdGhpcy5fcHJlU3RhcnRDaGVjayk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignbW92ZScsIHRoaXMuX3ByZVN0YXJ0Q2hlY2spO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ2NhbmNlbCcsIHRoaXMuX3ByZUVuZENoZWNrKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdlbmQnLCB0aGlzLl9wcmVFbmRDaGVjayk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHN0YXRpYyBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogRGVmYXVsdCBkcmFnIHN0YXJ0IHByZWRpY2F0ZSBoYW5kbGVyIHRoYXQgaGFuZGxlcyBhbmNob3IgZWxlbWVudHNcbiAgICogZ3JhY2VmdWxseS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzIGZ1bmN0aW9uIGRlZmluZXMgaWYgdGhlIGRyYWcgaXNcbiAgICogc3RhcnRlZCwgcmVqZWN0ZWQgb3IgcGVuZGluZy4gV2hlbiB0cnVlIGlzIHJldHVybmVkIHRoZSBkcmFnZ2luZyBpcyBzdGFydGVkXG4gICAqIGFuZCB3aGVuIGZhbHNlIGlzIHJldHVybmVkIHRoZSBkcmFnZ2luZyBpcyByZWplY3RlZC4gSWYgbm90aGluZyBpcyByZXR1cm5lZFxuICAgKiB0aGUgcHJlZGljYXRlIHdpbGwgYmUgY2FsbGVkIGFnYWluIG9uIHRoZSBuZXh0IGRyYWcgbW92ZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiAgIC0gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgd2hpY2ggY2FuIGJlIHVzZWQgdG8gcGFzcyB0aGUgcHJlZGljYXRlXG4gICAqICAgICBpdCdzIG9wdGlvbnMgbWFudWFsbHkuIEJ5IGRlZmF1bHQgdGhlIHByZWRpY2F0ZSByZXRyaWV2ZXMgdGhlIG9wdGlvbnNcbiAgICogICAgIGZyb20gdGhlIGdyaWQncyBzZXR0aW5ncy5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZy5kZWZhdWx0U3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihpdGVtLCBldmVudCwgb3B0aW9ucykge1xuICAgIHZhciBkcmFnID0gaXRlbS5fZHJhZztcbiAgICB2YXIgcHJlZGljYXRlID0gZHJhZy5fc3RhcnRQcmVkaWNhdGVEYXRhIHx8IGRyYWcuX3NldHVwU3RhcnRQcmVkaWNhdGUob3B0aW9ucyk7XG5cbiAgICAvLyBGaW5hbCBldmVudCBsb2dpYy4gQXQgdGhpcyBzdGFnZSByZXR1cm4gdmFsdWUgZG9lcyBub3QgbWF0dGVyIGFueW1vcmUsXG4gICAgLy8gdGhlIHByZWRpY2F0ZSBpcyBlaXRoZXIgcmVzb2x2ZWQgb3IgaXQncyBub3QgYW5kIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuICAgIC8vIGFib3V0IGl0LiBIZXJlIHdlIGp1c3QgcmVzZXQgZGF0YSBhbmQgaWYgdGhlIGl0ZW0gZWxlbWVudCBpcyBhIGxpbmtcbiAgICAvLyB3ZSBmb2xsb3cgaXQgKGlmIHRoZXJlIGhhcyBvbmx5IGJlZW4gc2xpZ2h0IG1vdmVtZW50KS5cbiAgICBpZiAoZXZlbnQuaXNGaW5hbCkge1xuICAgICAgZHJhZy5fZmluaXNoU3RhcnRQcmVkaWNhdGUoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpbmQgYW5kIHN0b3JlIHRoZSBoYW5kbGUgZWxlbWVudCBzbyB3ZSBjYW4gY2hlY2sgbGF0ZXIgb24gaWYgdGhlXG4gICAgLy8gY3Vyc29yIGlzIHdpdGhpbiB0aGUgaGFuZGxlLiBJZiB3ZSBoYXZlIGEgaGFuZGxlIHNlbGVjdG9yIGxldCdzIGZpbmRcbiAgICAvLyB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50LiBPdGhlcndpc2UgbGV0J3MgdXNlIHRoZSBpdGVtIGVsZW1lbnQgYXMgdGhlXG4gICAgLy8gaGFuZGxlLlxuICAgIGlmICghcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQpIHtcbiAgICAgIHByZWRpY2F0ZS5oYW5kbGVFbGVtZW50ID0gZHJhZy5fZ2V0U3RhcnRQcmVkaWNhdGVIYW5kbGUoZXZlbnQpO1xuICAgICAgaWYgKCFwcmVkaWNhdGUuaGFuZGxlRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIGRlbGF5IGlzIGRlZmluZWQgbGV0J3Mga2VlcCB0cmFjayBvZiB0aGUgbGF0ZXN0IGV2ZW50IGFuZCBpbml0aWF0ZVxuICAgIC8vIGRlbGF5IGlmIGl0IGhhcyBub3QgYmVlbiBkb25lIHlldC5cbiAgICBpZiAocHJlZGljYXRlLmRlbGF5KSB7XG4gICAgICBwcmVkaWNhdGUuZXZlbnQgPSBldmVudDtcbiAgICAgIGlmICghcHJlZGljYXRlLmRlbGF5VGltZXIpIHtcbiAgICAgICAgcHJlZGljYXRlLmRlbGF5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBwcmVkaWNhdGUuZGVsYXkgPSAwO1xuICAgICAgICAgIGlmIChkcmFnLl9yZXNvbHZlU3RhcnRQcmVkaWNhdGUocHJlZGljYXRlLmV2ZW50KSkge1xuICAgICAgICAgICAgZHJhZy5fZm9yY2VSZXNvbHZlU3RhcnRQcmVkaWNhdGUocHJlZGljYXRlLmV2ZW50KTtcbiAgICAgICAgICAgIGRyYWcuX3Jlc2V0U3RhcnRQcmVkaWNhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHByZWRpY2F0ZS5kZWxheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRyYWcuX3Jlc29sdmVTdGFydFByZWRpY2F0ZShldmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZHJhZyBzb3J0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZD01MF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmFjdGlvbj0nbW92ZSddXG4gICAqIEByZXR1cm5zIHsoQm9vbGVhbnxEcmFnU29ydENvbW1hbmQpfVxuICAgKiAgIC0gUmV0dXJucyBmYWxzZSBpZiBubyB2YWxpZCBpbmRleCB3YXMgZm91bmQuIE90aGVyd2lzZSByZXR1cm5zIGRyYWcgc29ydFxuICAgKiAgICAgY29tbWFuZC5cbiAgICovXG4gIEl0ZW1EcmFnLmRlZmF1bHRTb3J0UHJlZGljYXRlID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtUmVjdCA9IHt9O1xuICAgIHZhciB0YXJnZXRSZWN0ID0ge307XG4gICAgdmFyIHJldHVybkRhdGEgPSB7fTtcbiAgICB2YXIgcm9vdEdyaWRBcnJheSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGFyZ2V0R3JpZChpdGVtLCByb290R3JpZCwgdGhyZXNob2xkKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gbnVsbDtcbiAgICAgIHZhciBkcmFnU29ydCA9IHJvb3RHcmlkLl9zZXR0aW5ncy5kcmFnU29ydDtcbiAgICAgIHZhciBiZXN0U2NvcmUgPSAtMTtcbiAgICAgIHZhciBncmlkU2NvcmU7XG4gICAgICB2YXIgZ3JpZHM7XG4gICAgICB2YXIgZ3JpZDtcbiAgICAgIHZhciBpO1xuXG4gICAgICAvLyBHZXQgcG90ZW50aWFsIHRhcmdldCBncmlkcy5cbiAgICAgIGlmIChkcmFnU29ydCA9PT0gdHJ1ZSkge1xuICAgICAgICByb290R3JpZEFycmF5WzBdID0gcm9vdEdyaWQ7XG4gICAgICAgIGdyaWRzID0gcm9vdEdyaWRBcnJheTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRzID0gZHJhZ1NvcnQuY2FsbChyb290R3JpZCwgaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiBpbW1lZGlhdGVseSBpZiB0aGVyZSBhcmUgbm8gZ3JpZHMuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZ3JpZHMpKSByZXR1cm4gdGFyZ2V0O1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGdyaWRzIGFuZCBnZXQgdGhlIGJlc3QgbWF0Y2guXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ3JpZCA9IGdyaWRzW2ldO1xuXG4gICAgICAgIC8vIEZpbHRlciBvdXQgYWxsIGRlc3Ryb3llZCBncmlkcy5cbiAgICAgICAgaWYgKGdyaWQuX2lzRGVzdHJveWVkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSB0aGUgZ3JpZCdzIG9mZnNldHMgYW5kIGRpbWVuc2lvbnMgc2luY2UgdGhleSBtaWdodFxuICAgICAgICAvLyBoYXZlIGNoYW5nZWQgKGUuZyBkdXJpbmcgc2Nyb2xsaW5nKS5cbiAgICAgICAgZ3JpZC5fdXBkYXRlQm91bmRpbmdSZWN0KCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaG93IG11Y2ggZHJhZ2dlZCBlbGVtZW50IG92ZXJsYXBzIHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICAgICAgdGFyZ2V0UmVjdC53aWR0aCA9IGdyaWQuX3dpZHRoO1xuICAgICAgICB0YXJnZXRSZWN0LmhlaWdodCA9IGdyaWQuX2hlaWdodDtcbiAgICAgICAgdGFyZ2V0UmVjdC5sZWZ0ID0gZ3JpZC5fbGVmdDtcbiAgICAgICAgdGFyZ2V0UmVjdC50b3AgPSBncmlkLl90b3A7XG4gICAgICAgIGdyaWRTY29yZSA9IGdldFJlY3RPdmVybGFwU2NvcmUoaXRlbVJlY3QsIHRhcmdldFJlY3QpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgZ3JpZCBpcyB0aGUgYmVzdCBtYXRjaCBzbyBmYXIuXG4gICAgICAgIGlmIChncmlkU2NvcmUgPiB0aHJlc2hvbGQgJiYgZ3JpZFNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgYmVzdFNjb3JlID0gZ3JpZFNjb3JlO1xuICAgICAgICAgIHRhcmdldCA9IGdyaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWx3YXlzIHJlc2V0IHJvb3QgZ3JpZCBhcnJheS5cbiAgICAgIHJvb3RHcmlkQXJyYXkubGVuZ3RoID0gMDtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSwgb3B0aW9ucykge1xuICAgICAgdmFyIGRyYWcgPSBpdGVtLl9kcmFnO1xuICAgICAgdmFyIHJvb3RHcmlkID0gZHJhZy5fZ2V0R3JpZCgpO1xuXG4gICAgICAvLyBHZXQgZHJhZyBzb3J0IHByZWRpY2F0ZSBzZXR0aW5ncy5cbiAgICAgIHZhciBzb3J0VGhyZXNob2xkID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy50aHJlc2hvbGQgPT09ICdudW1iZXInID8gb3B0aW9ucy50aHJlc2hvbGQgOiA1MDtcbiAgICAgIHZhciBzb3J0QWN0aW9uID0gb3B0aW9ucyAmJiBvcHRpb25zLmFjdGlvbiA9PT0gYWN0aW9uU3dhcCA/IGFjdGlvblN3YXAgOiBhY3Rpb25Nb3ZlO1xuXG4gICAgICAvLyBQb3B1bGF0ZSBpdGVtIHJlY3QgZGF0YS5cbiAgICAgIGl0ZW1SZWN0LndpZHRoID0gaXRlbS5fd2lkdGg7XG4gICAgICBpdGVtUmVjdC5oZWlnaHQgPSBpdGVtLl9oZWlnaHQ7XG4gICAgICBpdGVtUmVjdC5sZWZ0ID0gZHJhZy5fZWxlbWVudENsaWVudFg7XG4gICAgICBpdGVtUmVjdC50b3AgPSBkcmFnLl9lbGVtZW50Q2xpZW50WTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0YXJnZXQgZ3JpZC5cbiAgICAgIHZhciBncmlkID0gZ2V0VGFyZ2V0R3JpZChpdGVtLCByb290R3JpZCwgc29ydFRocmVzaG9sZCk7XG5cbiAgICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSBmb3VuZCBubyBncmlkIGNvbnRhaW5lciBlbGVtZW50IHRoYXQgb3ZlcmxhcHMgdGhlXG4gICAgICAvLyBkcmFnZ2VkIGl0ZW0gZW5vdWdoLlxuICAgICAgaWYgKCFncmlkKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHZhciBncmlkT2Zmc2V0TGVmdCA9IDA7XG4gICAgICB2YXIgZ3JpZE9mZnNldFRvcCA9IDA7XG4gICAgICB2YXIgbWF0Y2hTY29yZSA9IC0xO1xuICAgICAgdmFyIG1hdGNoSW5kZXg7XG4gICAgICB2YXIgaGFzVmFsaWRUYXJnZXRzO1xuICAgICAgdmFyIHRhcmdldDtcbiAgICAgIHZhciBzY29yZTtcbiAgICAgIHZhciBpO1xuXG4gICAgICAvLyBJZiBpdGVtIGlzIG1vdmVkIHdpdGhpbiBpdCdzIG9yaWdpbmF0aW5nIGdyaWQgYWRqdXN0IGl0ZW0ncyBsZWZ0IGFuZFxuICAgICAgLy8gdG9wIHByb3BzLiBPdGhlcndpc2UgaWYgaXRlbSBpcyBtb3ZlZCB0by93aXRoaW4gYW5vdGhlciBncmlkIGdldCB0aGVcbiAgICAgIC8vIGNvbnRhaW5lciBlbGVtZW50J3Mgb2Zmc2V0IChmcm9tIHRoZSBlbGVtZW50J3MgY29udGVudCBlZGdlKS5cbiAgICAgIGlmIChncmlkID09PSByb290R3JpZCkge1xuICAgICAgICBpdGVtUmVjdC5sZWZ0ID0gZHJhZy5fZ3JpZFggKyBpdGVtLl9tYXJnaW5MZWZ0O1xuICAgICAgICBpdGVtUmVjdC50b3AgPSBkcmFnLl9ncmlkWSArIGl0ZW0uX21hcmdpblRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWQuX3VwZGF0ZUJvcmRlcnMoMSwgMCwgMSwgMCk7XG4gICAgICAgIGdyaWRPZmZzZXRMZWZ0ID0gZ3JpZC5fbGVmdCArIGdyaWQuX2JvcmRlckxlZnQ7XG4gICAgICAgIGdyaWRPZmZzZXRUb3AgPSBncmlkLl90b3AgKyBncmlkLl9ib3JkZXJUb3A7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgdGFyZ2V0IGdyaWQgaXRlbXMgYW5kIHRyeSB0byBmaW5kIHRoZSBiZXN0IG1hdGNoLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWQuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhcmdldCA9IGdyaWQuX2l0ZW1zW2ldO1xuXG4gICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXRlbSBpcyBub3QgYWN0aXZlIG9yIHRoZSB0YXJnZXQgaXRlbSBpcyB0aGUgZHJhZ2dlZFxuICAgICAgICAvLyBpdGVtIGxldCdzIHNraXAgdG8gdGhlIG5leHQgaXRlbS5cbiAgICAgICAgaWYgKCF0YXJnZXQuX2lzQWN0aXZlIHx8IHRhcmdldCA9PT0gaXRlbSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFyayB0aGUgZ3JpZCBhcyBoYXZpbmcgdmFsaWQgdGFyZ2V0IGl0ZW1zLlxuICAgICAgICBoYXNWYWxpZFRhcmdldHMgPSB0cnVlO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdGFyZ2V0J3Mgb3ZlcmxhcCBzY29yZSB3aXRoIHRoZSBkcmFnZ2VkIGl0ZW0uXG4gICAgICAgIHRhcmdldFJlY3Qud2lkdGggPSB0YXJnZXQuX3dpZHRoO1xuICAgICAgICB0YXJnZXRSZWN0LmhlaWdodCA9IHRhcmdldC5faGVpZ2h0O1xuICAgICAgICB0YXJnZXRSZWN0LmxlZnQgPSB0YXJnZXQuX2xlZnQgKyB0YXJnZXQuX21hcmdpbkxlZnQgKyBncmlkT2Zmc2V0TGVmdDtcbiAgICAgICAgdGFyZ2V0UmVjdC50b3AgPSB0YXJnZXQuX3RvcCArIHRhcmdldC5fbWFyZ2luVG9wICsgZ3JpZE9mZnNldFRvcDtcbiAgICAgICAgc2NvcmUgPSBnZXRSZWN0T3ZlcmxhcFNjb3JlKGl0ZW1SZWN0LCB0YXJnZXRSZWN0KTtcblxuICAgICAgICAvLyBVcGRhdGUgYmVzdCBtYXRjaCBpbmRleCBhbmQgc2NvcmUgaWYgdGhlIHRhcmdldCdzIG92ZXJsYXAgc2NvcmUgd2l0aFxuICAgICAgICAvLyB0aGUgZHJhZ2dlZCBpdGVtIGlzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IGJlc3QgbWF0Y2ggc2NvcmUuXG4gICAgICAgIGlmIChzY29yZSA+IG1hdGNoU2NvcmUpIHtcbiAgICAgICAgICBtYXRjaEluZGV4ID0gaTtcbiAgICAgICAgICBtYXRjaFNjb3JlID0gc2NvcmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gdmFsaWQgbWF0Y2ggYW5kIHRoZSBpdGVtIGlzIGJlaW5nIG1vdmVkIGludG8gYW5vdGhlclxuICAgICAgLy8gZ3JpZC5cbiAgICAgIGlmIChtYXRjaFNjb3JlIDwgc29ydFRocmVzaG9sZCAmJiBpdGVtLmdldEdyaWQoKSAhPT0gZ3JpZCkge1xuICAgICAgICBtYXRjaEluZGV4ID0gaGFzVmFsaWRUYXJnZXRzID8gLTEgOiAwO1xuICAgICAgICBtYXRjaFNjb3JlID0gSW5maW5pdHk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBiZXN0IG1hdGNoIG92ZXJsYXBzIGVub3VnaCB0byBqdXN0aWZ5IGEgcGxhY2VtZW50IHN3aXRjaC5cbiAgICAgIGlmIChtYXRjaFNjb3JlID49IHNvcnRUaHJlc2hvbGQpIHtcbiAgICAgICAgcmV0dXJuRGF0YS5ncmlkID0gZ3JpZDtcbiAgICAgICAgcmV0dXJuRGF0YS5pbmRleCA9IG1hdGNoSW5kZXg7XG4gICAgICAgIHJldHVybkRhdGEuYWN0aW9uID0gc29ydEFjdGlvbjtcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBYm9ydCBkcmFnZ2luZyBhbmQgcmVzZXQgZHJhZyBkYXRhLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1EcmFnfVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuXG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBiZWluZyBkcm9wcGVkIGludG8gYW5vdGhlciBncmlkLCBmaW5pc2ggaXQgdXAgYW5kIHJldHVyblxuICAgIC8vIGltbWVkaWF0ZWx5LlxuICAgIGlmICh0aGlzLl9pc01pZ3JhdGluZykge1xuICAgICAgdGhpcy5fZmluaXNoTWlncmF0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgcXVldWVkIG1vdmUgYW5kIHNjcm9sbCB0aWNrcy5cbiAgICBjYW5jZWxNb3ZlVGljayhpdGVtLl9pZCk7XG4gICAgY2FuY2VsU2Nyb2xsVGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBSZW1vdmUgc2Nyb2xsIGxpc3RlbmVycy5cbiAgICB0aGlzLl91bmJpbmRTY3JvbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIENhbmNlbCBvdmVybGFwIGNoZWNrLlxuICAgIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCdjYW5jZWwnKTtcblxuICAgIC8vIEFwcGVuZCBpdGVtIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lciBpZiBpdCdzIG5vdCBpdCdzIGNoaWxkLiBBbHNvIG1ha2VcbiAgICAvLyBzdXJlIHRoZSB0cmFuc2xhdGUgdmFsdWVzIGFyZSBhZGp1c3RlZCB0byBhY2NvdW50IGZvciB0aGUgRE9NIHNoaWZ0LlxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IGdyaWQuX2VsZW1lbnQpIHtcbiAgICAgIGdyaWQuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2dyaWRYLCB0aGlzLl9ncmlkWSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGRyYWdnaW5nIGNsYXNzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGdyaWQuX3NldHRpbmdzLml0ZW1EcmFnZ2luZ0NsYXNzKTtcblxuICAgIC8vIFJlc2V0IGRyYWcgZGF0YS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbURyYWd9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5fZHJhZ2dlci5kZXN0cm95KCk7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEdldCBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHs/R3JpZH1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZ2V0R3JpZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBncmlkSW5zdGFuY2VzW3RoaXMuX2dyaWRJZF0gfHwgbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAvcmVzZXQgZHJhZyBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gSXMgaXRlbSBiZWluZyBkcmFnZ2VkP1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAvLyBUaGUgZHJhZ2dlZCBpdGVtJ3MgY29udGFpbmVyIGVsZW1lbnQuXG4gICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcblxuICAgIC8vIFRoZSBkcmFnZ2VkIGl0ZW0ncyBjb250YWluaW5nIGJsb2NrLlxuICAgIHRoaXMuX2NvbnRhaW5pbmdCbG9jayA9IG51bGw7XG5cbiAgICAvLyBEcmFnL3Njcm9sbCBldmVudCBkYXRhLlxuICAgIHRoaXMuX2RyYWdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fc2Nyb2xsRXZlbnQgPSBudWxsO1xuXG4gICAgLy8gQWxsIHRoZSBlbGVtZW50cyB3aGljaCBuZWVkIHRvIGJlIGxpc3RlbmVkIGZvciBzY3JvbGwgZXZlbnRzIGR1cmluZ1xuICAgIC8vIGRyYWdnaW5nLlxuICAgIHRoaXMuX3Njcm9sbGVycyA9IFtdO1xuXG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlWC90cmFuc2xhdGVZIHBvc2l0aW9uLlxuICAgIHRoaXMuX2xlZnQgPSAwO1xuICAgIHRoaXMuX3RvcCA9IDA7XG5cbiAgICAvLyBEcmFnZ2VkIGVsZW1lbnQncyBjdXJyZW50IHBvc2l0aW9uIHdpdGhpbiB0aGUgZ3JpZC5cbiAgICB0aGlzLl9ncmlkWCA9IDA7XG4gICAgdGhpcy5fZ3JpZFkgPSAwO1xuXG4gICAgLy8gRHJhZ2dlZCBlbGVtZW50J3MgY3VycmVudCBvZmZzZXQgZnJvbSB3aW5kb3cncyBub3J0aHdlc3QgY29ybmVyLiBEb2VzXG4gICAgLy8gbm90IGFjY291bnQgZm9yIGVsZW1lbnQncyBtYXJnaW5zLlxuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRYID0gMDtcbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WSA9IDA7XG5cbiAgICAvLyBPZmZzZXQgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBkcmFnZ2VkIGVsZW1lbnQncyB0ZW1wb3JhcnkgZHJhZ1xuICAgIC8vIGNvbnRhaW5lciBhbmQgaXQncyBvcmlnaW5hbCBjb250YWluZXIuXG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBkcmFnIHNjcm9sbCBoYW5kbGVycyB0byBhbGwgc2Nyb2xsYWJsZSBhbmNlc3RvciBlbGVtZW50cyBvZiB0aGVcbiAgICogZHJhZ2dlZCBlbGVtZW50IGFuZCB0aGUgZHJhZyBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9iaW5kU2Nyb2xsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdyaWRDb250YWluZXIgPSB0aGlzLl9nZXRHcmlkKCkuX2VsZW1lbnQ7XG4gICAgdmFyIGRyYWdDb250YWluZXIgPSB0aGlzLl9jb250YWluZXI7XG4gICAgdmFyIHNjcm9sbGVycyA9IHRoaXMuX3Njcm9sbGVycztcbiAgICB2YXIgZ3JpZFNjcm9sbGVycztcbiAgICB2YXIgaTtcblxuICAgIC8vIEdldCBkcmFnZ2VkIGVsZW1lbnQncyBzY3JvbGxpbmcgcGFyZW50cy5cbiAgICBzY3JvbGxlcnMubGVuZ3RoID0gMDtcbiAgICBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKHRoaXMuX2l0ZW0uX2VsZW1lbnQsIGZhbHNlLCBzY3JvbGxlcnMpO1xuXG4gICAgLy8gSWYgZHJhZyBjb250YWluZXIgaXMgZGVmaW5lZCBhbmQgaXQncyBub3QgdGhlIHNhbWUgZWxlbWVudCBhcyBncmlkXG4gICAgLy8gY29udGFpbmVyIHRoZW4gd2UgbmVlZCB0byBhZGQgdGhlIGdyaWQgY29udGFpbmVyIGFuZCBpdCdzIHNjcm9sbCBwYXJlbnRzXG4gICAgLy8gdG8gdGhlIGVsZW1lbnRzIHdoaWNoIGFyZSBnb2luZyB0byBiZSBsaXN0ZW5lciBmb3Igc2Nyb2xsIGV2ZW50cy5cbiAgICBpZiAoZHJhZ0NvbnRhaW5lciAhPT0gZ3JpZENvbnRhaW5lcikge1xuICAgICAgZ3JpZFNjcm9sbGVycyA9IFtdO1xuICAgICAgZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyhncmlkQ29udGFpbmVyLCB0cnVlLCBncmlkU2Nyb2xsZXJzKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkU2Nyb2xsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY3JvbGxlcnMuaW5kZXhPZihncmlkU2Nyb2xsZXJzW2ldKSA8IDApIHtcbiAgICAgICAgICBzY3JvbGxlcnMucHVzaChncmlkU2Nyb2xsZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJpbmQgc2Nyb2xsIGxpc3RlbmVycy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2Nyb2xsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzY3JvbGxlcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGN1cnJlbnRseSBib3VuZCBkcmFnIHNjcm9sbCBoYW5kbGVycyBmcm9tIGFsbCBzY3JvbGxhYmxlIGFuY2VzdG9yXG4gICAqIGVsZW1lbnRzIG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYW5kIHRoZSBkcmFnIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3VuYmluZFNjcm9sbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGxlcnMgPSB0aGlzLl9zY3JvbGxlcnM7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2Nyb2xsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzY3JvbGxlcnNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGwpO1xuICAgIH1cblxuICAgIHNjcm9sbGVycy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCBkZWZhdWx0IHN0YXJ0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3NldHVwU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGNvbmZpZyA9IG9wdGlvbnMgfHwgdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnU3RhcnRQcmVkaWNhdGUgfHwgMDtcbiAgICByZXR1cm4gKHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YSA9IHtcbiAgICAgIGRpc3RhbmNlOiBNYXRoLmFicyhjb25maWcuZGlzdGFuY2UpIHx8IDAsXG4gICAgICBkZWxheTogTWF0aC5tYXgoY29uZmlnLmRlbGF5LCAwKSB8fCAwLFxuICAgICAgaGFuZGxlOiB0eXBlb2YgY29uZmlnLmhhbmRsZSA9PT0gJ3N0cmluZycgPyBjb25maWcuaGFuZGxlIDogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAgZGVmYXVsdCBzdGFydCBwcmVkaWNhdGUgaGFuZGxlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7P0hUTUxFbGVtZW50fVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9nZXRTdGFydFByZWRpY2F0ZUhhbmRsZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHByZWRpY2F0ZSA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YTtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2l0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGhhbmRsZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgLy8gTm8gaGFuZGxlLCBubyBoYXNzbGUgLT4gbGV0J3MgdXNlIHRoZSBpdGVtIGVsZW1lbnQgYXMgdGhlIGhhbmRsZS5cbiAgICBpZiAoIXByZWRpY2F0ZS5oYW5kbGUpIHJldHVybiBoYW5kbGVFbGVtZW50O1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzcGVjaWZpYyBwcmVkaWNhdGUgaGFuZGxlIGRlZmluZWQsIGxldCdzIHRyeSB0byBnZXQgaXQuXG4gICAgaGFuZGxlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICB3aGlsZSAoaGFuZGxlRWxlbWVudCAmJiAhZWxlbWVudE1hdGNoZXMoaGFuZGxlRWxlbWVudCwgcHJlZGljYXRlLmhhbmRsZSkpIHtcbiAgICAgIGhhbmRsZUVsZW1lbnQgPSBoYW5kbGVFbGVtZW50ICE9PSBlbGVtZW50ID8gaGFuZGxlRWxlbWVudC5wYXJlbnRFbGVtZW50IDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZUVsZW1lbnQgfHwgbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGN1cnJlbnRseSBib3VuZCBkcmFnIHNjcm9sbCBoYW5kbGVycyBmcm9tIGFsbCBzY3JvbGxhYmxlIGFuY2VzdG9yXG4gICAqIGVsZW1lbnRzIG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYW5kIHRoZSBkcmFnIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzb2x2ZVN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcHJlZGljYXRlID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhO1xuXG4gICAgLy8gSWYgdGhlIG1vdmVkIGRpc3RhbmNlIGlzIHNtYWxsZXIgdGhhbiB0aGUgdGhyZXNob2xkIGRpc3RhbmNlIG9yIHRoZXJlIGlzXG4gICAgLy8gc29tZSBkZWxheSBsZWZ0LCBpZ25vcmUgdGhpcyBwcmVkaWNhdGUgY3ljbGUuXG4gICAgaWYgKGV2ZW50LmRpc3RhbmNlIDwgcHJlZGljYXRlLmRpc3RhbmNlIHx8IHByZWRpY2F0ZS5kZWxheSkgcmV0dXJuO1xuXG4gICAgLy8gR2V0IGhhbmRsZSByZWN0IGRhdGEuXG4gICAgdmFyIGhhbmRsZVJlY3QgPSBwcmVkaWNhdGUuaGFuZGxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgaGFuZGxlTGVmdCA9IGhhbmRsZVJlY3QubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgMCk7XG4gICAgdmFyIGhhbmRsZVRvcCA9IGhhbmRsZVJlY3QudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCAwKTtcbiAgICB2YXIgaGFuZGxlV2lkdGggPSBoYW5kbGVSZWN0LndpZHRoO1xuICAgIHZhciBoYW5kbGVIZWlnaHQgPSBoYW5kbGVSZWN0LmhlaWdodDtcblxuICAgIC8vIFJlc2V0IHByZWRpY2F0ZSBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0U3RhcnRQcmVkaWNhdGUoKTtcblxuICAgIC8vIElmIHRoZSBjdXJzb3IgaXMgc3RpbGwgd2l0aGluIHRoZSBoYW5kbGUgbGV0J3Mgc3RhcnQgdGhlIGRyYWcuXG4gICAgcmV0dXJuIChcbiAgICAgIGhhbmRsZVdpZHRoICYmXG4gICAgICBoYW5kbGVIZWlnaHQgJiZcbiAgICAgIGV2ZW50LnBhZ2VYID49IGhhbmRsZUxlZnQgJiZcbiAgICAgIGV2ZW50LnBhZ2VYIDwgaGFuZGxlTGVmdCArIGhhbmRsZVdpZHRoICYmXG4gICAgICBldmVudC5wYWdlWSA+PSBoYW5kbGVUb3AgJiZcbiAgICAgIGV2ZW50LnBhZ2VZIDwgaGFuZGxlVG9wICsgaGFuZGxlSGVpZ2h0XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogRm9yY2VmdWxseSByZXNvbHZlIGRyYWcgc3RhcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9mb3JjZVJlc29sdmVTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0Rlc3Ryb3llZCAmJiB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVBlbmRpbmcpIHtcbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVJlc29sdmVkO1xuICAgICAgdGhpcy5fb25TdGFydChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5hbGl6ZSBzdGFydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2ZpbmlzaFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2l0ZW0uX2VsZW1lbnQ7XG5cbiAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgY2xpY2sgKHZlcnkgc3ViamVjdGl2ZSBoZXVyaXN0aWNzKS5cbiAgICB2YXIgaXNDbGljayA9IE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPCAyICYmIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkgPCAyICYmIGV2ZW50LmRlbHRhVGltZSA8IDIwMDtcblxuICAgIC8vIFJlc2V0IHByZWRpY2F0ZS5cbiAgICB0aGlzLl9yZXNldFN0YXJ0UHJlZGljYXRlKCk7XG5cbiAgICAvLyBJZiB0aGUgZ2VzdHVyZSBjYW4gYmUgaW50ZXJwcmV0ZWQgYXMgY2xpY2sgbGV0J3MgdHJ5IHRvIG9wZW4gdGhlIGVsZW1lbnQnc1xuICAgIC8vIGhyZWYgdXJsIChpZiBpdCBpcyBhbiBhbmNob3IgZWxlbWVudCkuXG4gICAgaWYgKGlzQ2xpY2spIG9wZW5BbmNob3JIcmVmKGVsZW1lbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCBkcmFnIHNvcnQgaGV1cmlzdGljcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzZXRIZXVyaXN0aWNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9oWDEgPSB0aGlzLl9oWDIgPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMuX2hZMSA9IHRoaXMuX2hZMiA9IGV2ZW50LmNsaWVudFk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJ1biBoZXVyaXN0aWNzIGFuZCByZXR1cm4gdHJ1ZSBpZiBvdmVybGFwIGNoZWNrIGNhbiBiZSBwZXJmb3JtZWQsIGFuZCBmYWxzZVxuICAgKiBpZiBpdCBjYW4gbm90LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fY2hlY2tIZXVyaXN0aWNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdTb3J0SGV1cmlzdGljcztcbiAgICB2YXIgbWluRGlzdCA9IHNldHRpbmdzLm1pbkRyYWdEaXN0YW5jZTtcblxuICAgIC8vIFNraXAgaGV1cmlzdGljcyBpZiBub3QgbmVlZGVkLlxuICAgIGlmIChtaW5EaXN0IDw9IDApIHtcbiAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHggPSBldmVudC5jbGllbnRYO1xuICAgIHZhciB5ID0gZXZlbnQuY2xpZW50WTtcbiAgICB2YXIgZGlmZlggPSB4IC0gdGhpcy5faFgyO1xuICAgIHZhciBkaWZmWSA9IHkgLSB0aGlzLl9oWTI7XG5cbiAgICAvLyBJZiB3ZSBjYW4ndCBkbyBwcm9wZXIgYm91bmNlIGJhY2sgY2hlY2sgbWFrZSBzdXJlIHRoYXQgdGhlIGJsb2NrZWQgaW5kZXhcbiAgICAvLyBpcyBub3Qgc2V0LlxuICAgIHZhciBjYW5DaGVja0JvdW5jZUJhY2sgPSBtaW5EaXN0ID4gMyAmJiBzZXR0aW5ncy5taW5Cb3VuY2VCYWNrQW5nbGUgPiAwO1xuICAgIGlmICghY2FuQ2hlY2tCb3VuY2VCYWNrKSB7XG4gICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gbWluRGlzdCB8fCBNYXRoLmFicyhkaWZmWSkgPiBtaW5EaXN0KSB7XG4gICAgICAvLyBSZXNldCBibG9ja2VkIGluZGV4IGlmIGFuZ2xlIGNoYW5nZWQgZW5vdWdoLiBUaGlzIGNoZWNrIHJlcXVpcmVzIGFcbiAgICAgIC8vIG1pbmltdW0gdmFsdWUgb2YgMyBmb3IgbWluRHJhZ0Rpc3RhbmNlIHRvIGZ1bmN0aW9uIHByb3Blcmx5LlxuICAgICAgaWYgKGNhbkNoZWNrQm91bmNlQmFjaykge1xuICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKGRpZmZYLCBkaWZmWSk7XG4gICAgICAgIHZhciBwcmV2QW5nbGUgPSBNYXRoLmF0YW4yKHRoaXMuX2hYMiAtIHRoaXMuX2hYMSwgdGhpcy5faFkyIC0gdGhpcy5faFkxKTtcbiAgICAgICAgdmFyIGRlbHRhQW5nbGUgPSBNYXRoLmF0YW4yKE1hdGguc2luKGFuZ2xlIC0gcHJldkFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUgLSBwcmV2QW5nbGUpKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhQW5nbGUpID4gc2V0dGluZ3MubWluQm91bmNlQmFja0FuZ2xlKSB7XG4gICAgICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHBvaW50cy5cbiAgICAgIHRoaXMuX2hYMSA9IHRoaXMuX2hYMjtcbiAgICAgIHRoaXMuX2hZMSA9IHRoaXMuX2hZMjtcbiAgICAgIHRoaXMuX2hYMiA9IHg7XG4gICAgICB0aGlzLl9oWTIgPSB5O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IGZvciBkZWZhdWx0IGRyYWcgc3RhcnQgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc2V0U3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJlZGljYXRlID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhO1xuICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUuZGVsYXlUaW1lcikge1xuICAgICAgICBwcmVkaWNhdGUuZGVsYXlUaW1lciA9IHdpbmRvdy5jbGVhclRpbWVvdXQocHJlZGljYXRlLmRlbGF5VGltZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIChkdXJpbmcgZHJhZykgaWYgYW4gaXRlbSBpcyBvdmVybGFwcGluZyBvdGhlciBpdGVtcyBhbmQgYmFzZWQgb25cbiAgICogdGhlIGNvbmZpZ3VyYXRpb24gbGF5b3V0IHRoZSBpdGVtcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9jaGVja092ZXJsYXAgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBjdXJyZW50R3JpZDtcbiAgICB2YXIgY3VycmVudEluZGV4O1xuICAgIHZhciB0YXJnZXRHcmlkO1xuICAgIHZhciB0YXJnZXRJbmRleDtcbiAgICB2YXIgc29ydEFjdGlvbjtcbiAgICB2YXIgaXNNaWdyYXRpb247XG5cbiAgICAvLyBHZXQgb3ZlcmxhcCBjaGVjayByZXN1bHQuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1NvcnRQcmVkaWNhdGUpKSB7XG4gICAgICByZXN1bHQgPSBzZXR0aW5ncy5kcmFnU29ydFByZWRpY2F0ZShpdGVtLCB0aGlzLl9kcmFnRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBJdGVtRHJhZy5kZWZhdWx0U29ydFByZWRpY2F0ZShpdGVtLCBzZXR0aW5ncy5kcmFnU29ydFByZWRpY2F0ZSk7XG4gICAgfVxuXG4gICAgLy8gTGV0J3MgbWFrZSBzdXJlIHRoZSByZXN1bHQgb2JqZWN0IGhhcyBhIHZhbGlkIGluZGV4IGJlZm9yZSBnb2luZyBmdXJ0aGVyLlxuICAgIGlmICghcmVzdWx0IHx8IHR5cGVvZiByZXN1bHQuaW5kZXggIT09ICdudW1iZXInKSByZXR1cm47XG5cbiAgICBjdXJyZW50R3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHRhcmdldEdyaWQgPSByZXN1bHQuZ3JpZCB8fCBjdXJyZW50R3JpZDtcbiAgICBpc01pZ3JhdGlvbiA9IGN1cnJlbnRHcmlkICE9PSB0YXJnZXRHcmlkO1xuICAgIGN1cnJlbnRJbmRleCA9IGN1cnJlbnRHcmlkLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIHRhcmdldEluZGV4ID0gbm9ybWFsaXplQXJyYXlJbmRleCh0YXJnZXRHcmlkLl9pdGVtcywgcmVzdWx0LmluZGV4LCBpc01pZ3JhdGlvbik7XG4gICAgc29ydEFjdGlvbiA9IHJlc3VsdC5hY3Rpb24gPT09IGFjdGlvblN3YXAgPyBhY3Rpb25Td2FwIDogYWN0aW9uTW92ZTtcblxuICAgIC8vIFByZXZlbnQgcG9zaXRpb24gYm91bmNlLlxuICAgIGlmICghaXNNaWdyYXRpb24gJiYgdGFyZ2V0SW5kZXggPT09IHRoaXMuX2hCbG9ja2VkSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSB3YXMgbW92ZWQgd2l0aGluIGl0J3MgY3VycmVudCBncmlkLlxuICAgIGlmICghaXNNaWdyYXRpb24pIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGFyZ2V0IGluZGV4IGlzIG5vdCB0aGUgY3VycmVudCBpbmRleC5cbiAgICAgIGlmIChjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBjdXJyZW50SW5kZXg7XG5cbiAgICAgICAgLy8gRG8gdGhlIHNvcnQuXG4gICAgICAgIChzb3J0QWN0aW9uID09PSBhY3Rpb25Td2FwID8gYXJyYXlTd2FwIDogYXJyYXlNb3ZlKShcbiAgICAgICAgICBjdXJyZW50R3JpZC5faXRlbXMsXG4gICAgICAgICAgY3VycmVudEluZGV4LFxuICAgICAgICAgIHRhcmdldEluZGV4XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRW1pdCBtb3ZlIGV2ZW50LlxuICAgICAgICBpZiAoY3VycmVudEdyaWQuX2hhc0xpc3RlbmVycyhldmVudE1vdmUpKSB7XG4gICAgICAgICAgY3VycmVudEdyaWQuX2VtaXQoZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleCxcbiAgICAgICAgICAgIGFjdGlvbjogc29ydEFjdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGF5b3V0IHRoZSBncmlkLlxuICAgICAgICBjdXJyZW50R3JpZC5sYXlvdXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSB3YXMgbW92ZWQgdG8gYW5vdGhlciBncmlkLlxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG5cbiAgICAgIC8vIEVtaXQgYmVmb3JlU2VuZCBldmVudC5cbiAgICAgIGlmIChjdXJyZW50R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlU2VuZCkpIHtcbiAgICAgICAgY3VycmVudEdyaWQuX2VtaXQoZXZlbnRCZWZvcmVTZW5kLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IGJlZm9yZVJlY2VpdmUgZXZlbnQuXG4gICAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlUmVjZWl2ZSkpIHtcbiAgICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudEJlZm9yZVJlY2VpdmUsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBpdGVtJ3MgZ3JpZCBpZCByZWZlcmVuY2UuXG4gICAgICBpdGVtLl9ncmlkSWQgPSB0YXJnZXRHcmlkLl9pZDtcblxuICAgICAgLy8gVXBkYXRlIGRyYWcgaW5zdGFuY2UncyBtaWdyYXRpbmcgaW5kaWNhdG9yLlxuICAgICAgdGhpcy5faXNNaWdyYXRpbmcgPSBpdGVtLl9ncmlkSWQgIT09IHRoaXMuX2dyaWRJZDtcblxuICAgICAgLy8gTW92ZSBpdGVtIGluc3RhbmNlIGZyb20gY3VycmVudCBncmlkIHRvIHRhcmdldCBncmlkLlxuICAgICAgY3VycmVudEdyaWQuX2l0ZW1zLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuICAgICAgYXJyYXlJbnNlcnQodGFyZ2V0R3JpZC5faXRlbXMsIGl0ZW0sIHRhcmdldEluZGV4KTtcblxuICAgICAgLy8gU2V0IHNvcnQgZGF0YSBhcyBudWxsLCB3aGljaCBpcyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBpdGVtIGNvbXBhcmlzb25cbiAgICAgIC8vIGZ1bmN0aW9uIHRoYXQgdGhlIHNvcnQgZGF0YSBvZiB0aGlzIHNwZWNpZmljIGl0ZW0gc2hvdWxkIGJlIGZldGNoZWRcbiAgICAgIC8vIGxhemlseS5cbiAgICAgIGl0ZW0uX3NvcnREYXRhID0gbnVsbDtcblxuICAgICAgLy8gRW1pdCBzZW5kIGV2ZW50LlxuICAgICAgaWYgKGN1cnJlbnRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRTZW5kKSkge1xuICAgICAgICBjdXJyZW50R3JpZC5fZW1pdChldmVudFNlbmQsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgcmVjZWl2ZSBldmVudC5cbiAgICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRSZWNlaXZlKSkge1xuICAgICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50UmVjZWl2ZSwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gTGF5b3V0IGJvdGggZ3JpZHMuXG4gICAgICBjdXJyZW50R3JpZC5sYXlvdXQoKTtcbiAgICAgIHRhcmdldEdyaWQubGF5b3V0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBpdGVtIGlzIGRyYWdnZWQgaW50byBhbm90aGVyIGdyaWQsIGZpbmlzaCB0aGUgbWlncmF0aW9uIHByb2Nlc3NcbiAgICogZ3JhY2VmdWxseS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9maW5pc2hNaWdyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgaXNBY3RpdmUgPSBpdGVtLl9pc0FjdGl2ZTtcbiAgICB2YXIgdGFyZ2V0R3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciB0YXJnZXRHcmlkRWxlbWVudCA9IHRhcmdldEdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRhcmdldFNldHRpbmdzID0gdGFyZ2V0R3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldENvbnRhaW5lciA9IHRhcmdldFNldHRpbmdzLmRyYWdDb250YWluZXIgfHwgdGFyZ2V0R3JpZEVsZW1lbnQ7XG4gICAgdmFyIGN1cnJlbnRTZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIGN1cnJlbnRDb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgdmFyIHRyYW5zbGF0ZTtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcblxuICAgIC8vIERlc3Ryb3kgY3VycmVudCBkcmFnLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBzZXQgdGhlIG1pZ3JhdGluZyBmbGFnIHRvXG4gICAgLy8gZmFsc2UgZmlyc3QsIGJlY2F1c2Ugb3RoZXJ3aXNlIHdlIGNyZWF0ZSBhbiBpbmZpbml0ZSBsb29wIGJldHdlZW4gdGhpc1xuICAgIC8vIGFuZCB0aGUgZHJhZy5zdG9wKCkgbWV0aG9kLlxuICAgIHRoaXMuX2lzTWlncmF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgY3VycmVudCBjbGFzc25hbWVzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGN1cnJlbnRTZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGN1cnJlbnRTZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjdXJyZW50U2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIEFkZCBuZXcgY2xhc3NuYW1lcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCB0YXJnZXRTZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIGFkZENsYXNzKGVsZW1lbnQsIGlzQWN0aXZlID8gdGFyZ2V0U2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyA6IHRhcmdldFNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBNb3ZlIHRoZSBpdGVtIGluc2lkZSB0aGUgdGFyZ2V0IGNvbnRhaW5lciBpZiBpdCdzIGRpZmZlcmVudCB0aGFuIHRoZVxuICAgIC8vIGN1cnJlbnQgY29udGFpbmVyLlxuICAgIGlmICh0YXJnZXRDb250YWluZXIgIT09IGN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKGN1cnJlbnRDb250YWluZXIsIHRhcmdldENvbnRhaW5lciwgdHJ1ZSk7XG4gICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICB0cmFuc2xhdGUueCAtPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgICB0cmFuc2xhdGUueSAtPSBvZmZzZXREaWZmLnRvcDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaXRlbSdzIGNhY2hlZCBkaW1lbnNpb25zIGFuZCBzb3J0IGRhdGEuXG4gICAgaXRlbS5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICBpdGVtLl9yZWZyZXNoU29ydERhdGEoKTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgb2Zmc2V0IGRpZmZlcmVuY2UgYmV0d2VlbiB0YXJnZXQncyBkcmFnIGNvbnRhaW5lciAoaWYgYW55KVxuICAgIC8vIGFuZCBhY3R1YWwgZ3JpZCBjb250YWluZXIgZWxlbWVudC4gV2Ugc2F2ZSBpdCBsYXRlciBmb3IgdGhlIHJlbGVhc2VcbiAgICAvLyBwcm9jZXNzLlxuICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKHRhcmdldENvbnRhaW5lciwgdGFyZ2V0R3JpZEVsZW1lbnQsIHRydWUpO1xuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZYID0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZZID0gb2Zmc2V0RGlmZi50b3A7XG5cbiAgICAvLyBSZWNyZWF0ZSBpdGVtJ3MgZHJhZyBoYW5kbGVyLlxuICAgIGl0ZW0uX2RyYWcgPSB0YXJnZXRTZXR0aW5ncy5kcmFnRW5hYmxlZCA/IG5ldyBJdGVtRHJhZyhpdGVtKSA6IG51bGw7XG5cbiAgICAvLyBBZGp1c3QgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIGVsZW1lbnQgaWYgaXQgd2FzIG1vdmVkIGZyb20gYSBjb250YWluZXJcbiAgICAvLyB0byBhbm90aGVyLlxuICAgIGlmICh0YXJnZXRDb250YWluZXIgIT09IGN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlLngsIHRyYW5zbGF0ZS55KTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY2hpbGQgZWxlbWVudCdzIHN0eWxlcyB0byByZWZsZWN0IHRoZSBjdXJyZW50IHZpc2liaWxpdHkgc3RhdGUuXG4gICAgaXRlbS5fY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgaXNBY3RpdmUgPyB0YXJnZXRTZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogdGFyZ2V0U2V0dGluZ3MuaGlkZGVuU3R5bGVzKTtcblxuICAgIC8vIFN0YXJ0IHRoZSByZWxlYXNlLlxuICAgIHJlbGVhc2Uuc3RhcnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBwcmUtc3RhcnQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlU3RhcnRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gTGV0J3MgYWN0aXZhdGUgZHJhZyBzdGFydCBwcmVkaWNhdGUgc3RhdGUuXG4gICAgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlSW5hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVBlbmRpbmc7XG4gICAgfVxuXG4gICAgLy8gSWYgcHJlZGljYXRlIGlzIHBlbmRpbmcgdHJ5IHRvIHJlc29sdmUgaXQuXG4gICAgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUGVuZGluZykge1xuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPSB0aGlzLl9zdGFydFByZWRpY2F0ZSh0aGlzLl9pdGVtLCBldmVudCk7XG4gICAgICBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQ7XG4gICAgICAgIHRoaXMuX29uU3RhcnQoZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUmVqZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGlmIHByZWRpY2F0ZSBpcyByZXNvbHZlZCBhbmQgZHJhZyBpcyBhY3RpdmUsIG1vdmUgdGhlIGl0ZW0uXG4gICAgZWxzZSBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZCAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5fb25Nb3ZlKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgcHJlLWVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVFbmRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHN0YXJ0IHByZWRpY2F0ZSB3YXMgcmVzb2x2ZWQgZHVyaW5nIGRyYWcuXG4gICAgdmFyIGlzUmVzb2x2ZWQgPSB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVJlc29sdmVkO1xuXG4gICAgLy8gRG8gZmluYWwgcHJlZGljYXRlIGNoZWNrIHRvIGFsbG93IHVzZXIgdG8gdW5iaW5kIHN0dWZmIGZvciB0aGUgY3VycmVudFxuICAgIC8vIGRyYWcgcHJvY2VkdXJlIHdpdGhpbiB0aGUgcHJlZGljYXRlIGNhbGxiYWNrLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoaXNcbiAgICAvLyBjaGVjayB3aWxsIGhhdmUgbm8gZWZmZWN0IHRvIHRoZSBzdGF0ZSBvZiB0aGUgcHJlZGljYXRlLlxuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlKHRoaXMuX2l0ZW0sIGV2ZW50KTtcblxuICAgIC8vIFJlc2V0IHN0YXJ0IHByZWRpY2F0ZSBzdGF0ZS5cbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZTtcblxuICAgIC8vIElmIHByZWRpY2F0ZSBpcyByZXNvbHZlZCBhbmQgZHJhZ2dpbmcgaXMgYWN0aXZlLCBjYWxsIHRoZSBlbmQgaGFuZGxlci5cbiAgICBpZiAoaXNSZXNvbHZlZCAmJiB0aGlzLl9pc0FjdGl2ZSkgdGhpcy5fb25FbmQoZXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHN0YXJ0IGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgZG9uJ3Qgc3RhcnQgdGhlIGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcbiAgICB2YXIgbWlncmF0ZSA9IGl0ZW0uX21pZ3JhdGU7XG4gICAgdmFyIGdyaWRDb250YWluZXIgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciBkcmFnQ29udGFpbmVyID0gc2V0dGluZ3MuZHJhZ0NvbnRhaW5lciB8fCBncmlkQ29udGFpbmVyO1xuICAgIHZhciBjb250YWluaW5nQmxvY2sgPSBnZXRDb250YWluaW5nQmxvY2soZHJhZ0NvbnRhaW5lciwgdHJ1ZSk7XG4gICAgdmFyIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICB2YXIgY3VycmVudExlZnQgPSB0cmFuc2xhdGUueDtcbiAgICB2YXIgY3VycmVudFRvcCA9IHRyYW5zbGF0ZS55O1xuICAgIHZhciBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGhhc0RyYWdDb250YWluZXIgPSBkcmFnQ29udGFpbmVyICE9PSBncmlkQ29udGFpbmVyO1xuICAgIHZhciBvZmZzZXREaWZmO1xuXG4gICAgLy8gUmVzZXQgaGV1cmlzdGljcyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0SGV1cmlzdGljcyhldmVudCk7XG5cbiAgICAvLyBJZiBncmlkIGNvbnRhaW5lciBpcyBub3QgdGhlIGRyYWcgY29udGFpbmVyLCB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGVcbiAgICAvLyBvZmZzZXQgZGlmZmVyZW5jZSBiZXR3ZWVuIGdyaWQgY29udGFpbmVyIGFuZCBkcmFnIGNvbnRhaW5lcidzIGNvbnRhaW5pbmdcbiAgICAvLyBlbGVtZW50LlxuICAgIGlmIChoYXNEcmFnQ29udGFpbmVyKSB7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZihjb250YWluaW5nQmxvY2ssIGdyaWRDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8vIFN0b3AgY3VycmVudCBwb3NpdGlvbmluZyBhbmltYXRpb24uXG4gICAgaWYgKGl0ZW0uaXNQb3NpdGlvbmluZygpKSB7XG4gICAgICBpdGVtLl9sYXlvdXQuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGN1cnJlbnRMZWZ0LCBjdXJyZW50VG9wKSB9KTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGN1cnJlbnQgbWlncmF0aW9uIGFuaW1hdGlvbi5cbiAgICBpZiAobWlncmF0ZS5faXNBY3RpdmUpIHtcbiAgICAgIGN1cnJlbnRMZWZ0IC09IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgY3VycmVudFRvcCAtPSBtaWdyYXRlLl9jb250YWluZXJEaWZmWTtcbiAgICAgIG1pZ3JhdGUuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGN1cnJlbnRMZWZ0LCBjdXJyZW50VG9wKSB9KTtcbiAgICB9XG5cbiAgICAvLyBJZiBpdGVtIGlzIGJlaW5nIHJlbGVhc2VkIHJlc2V0IHJlbGVhc2UgZGF0YS5cbiAgICBpZiAoaXRlbS5pc1JlbGVhc2luZygpKSByZWxlYXNlLl9yZXNldCgpO1xuXG4gICAgLy8gU2V0dXAgZHJhZyBkYXRhLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9kcmFnRXZlbnQgPSBldmVudDtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkcmFnQ29udGFpbmVyO1xuICAgIHRoaXMuX2NvbnRhaW5pbmdCbG9jayA9IGNvbnRhaW5pbmdCbG9jaztcbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WCA9IGVsZW1lbnRSZWN0LmxlZnQ7XG4gICAgdGhpcy5fZWxlbWVudENsaWVudFkgPSBlbGVtZW50UmVjdC50b3A7XG4gICAgdGhpcy5fbGVmdCA9IHRoaXMuX2dyaWRYID0gY3VycmVudExlZnQ7XG4gICAgdGhpcy5fdG9wID0gdGhpcy5fZ3JpZFkgPSBjdXJyZW50VG9wO1xuXG4gICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIChpZiBuZWNlc3NhcnkpLlxuICAgIGlmIChzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuZW5hYmxlZCkge1xuICAgICAgaXRlbS5fZHJhZ1BsYWNlaG9sZGVyLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgZHJhZ0luaXQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdJbml0LCBpdGVtLCBldmVudCk7XG5cbiAgICAvLyBJZiBhIHNwZWNpZmljIGRyYWcgY29udGFpbmVyIGlzIHNldCBhbmQgaXQgaXMgZGlmZmVyZW50IGZyb20gdGhlXG4gICAgLy8gZ3JpZCdzIGNvbnRhaW5lciBlbGVtZW50IHdlIG5lZWQgdG8gY2FzdCBzb21lIGV4dHJhIHNwZWxscy5cbiAgICBpZiAoaGFzRHJhZ0NvbnRhaW5lcikge1xuICAgICAgLy8gU3RvcmUgdGhlIGNvbnRhaW5lciBvZmZzZXQgZGlmZnMgdG8gZHJhZyBkYXRhLlxuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IG9mZnNldERpZmYudG9wO1xuXG4gICAgICAvLyBJZiB0aGUgZHJhZ2dlZCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIGRyYWcgY29udGFpbmVyIGFsbCB3ZSBuZWVkIHRvXG4gICAgICAvLyBkbyBpcyBzZXR1cCB0aGUgcmVsYXRpdmUgZHJhZyBwb3NpdGlvbiBkYXRhLlxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSA9PT0gZHJhZ0NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9ncmlkWCA9IGN1cnJlbnRMZWZ0IC0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgICAgIHRoaXMuX2dyaWRZID0gY3VycmVudFRvcCAtIHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgbmVlZCB0byBhcHBlbmQgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBjb3JyZWN0IGNvbnRhaW5lcixcbiAgICAgIC8vIHNldHVwIHRoZSBhY3R1YWwgZHJhZyBwb3NpdGlvbiBkYXRhIGFuZCBhZGp1c3QgdGhlIGVsZW1lbnQncyB0cmFuc2xhdGVcbiAgICAgIC8vIHZhbHVlcyB0byBhY2NvdW50IGZvciB0aGUgRE9NIHBvc2l0aW9uIHNoaWZ0LlxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2xlZnQgPSBjdXJyZW50TGVmdCArIHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgICB0aGlzLl90b3AgPSBjdXJyZW50VG9wICsgdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgICAgIGRyYWdDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fbGVmdCwgdGhpcy5fdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgZHJhZyBjbGFzcyBhbmQgYmluZCBzY3JvbGxlcnMuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbURyYWdnaW5nQ2xhc3MpO1xuICAgIHRoaXMuX2JpbmRTY3JvbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEVtaXQgZHJhZ1N0YXJ0IGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnU3RhcnQsIGl0ZW0sIGV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBtb3ZlIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCByZXNldCBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIGF4aXMgPSBzZXR0aW5ncy5kcmFnQXhpcztcblxuICAgIC8vIFVwZGF0ZSBob3Jpem9udGFsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd5Jykge1xuICAgICAgdmFyIHhEaWZmID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RyYWdFdmVudC5jbGllbnRYO1xuICAgICAgdGhpcy5fbGVmdCArPSB4RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRYICs9IHhEaWZmO1xuICAgICAgdGhpcy5fZWxlbWVudENsaWVudFggKz0geERpZmY7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHZlcnRpY2FsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd4Jykge1xuICAgICAgdmFyIHlEaWZmID0gZXZlbnQuY2xpZW50WSAtIHRoaXMuX2RyYWdFdmVudC5jbGllbnRZO1xuICAgICAgdGhpcy5fdG9wICs9IHlEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFkgKz0geURpZmY7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xpZW50WSArPSB5RGlmZjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZXZlbnQgZGF0YS5cbiAgICB0aGlzLl9kcmFnRXZlbnQgPSBldmVudDtcblxuICAgIC8vIERvIG1vdmUgcHJlcGFyZS9hcHBseSBoYW5kbGluZyBpbiB0aGUgbmV4dCB0aWNrLlxuICAgIGFkZE1vdmVUaWNrKGl0ZW0uX2lkLCB0aGlzLl9wcmVwYXJlTW92ZSwgdGhpcy5fYXBwbHlNb3ZlKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBkcmFnZ2VkIGl0ZW0gZm9yIG1vdmluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVwYXJlTW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIERvIG5vdGhpbmcgaWYgaXRlbSBpcyBub3QgYWN0aXZlLlxuICAgIGlmICghdGhpcy5faXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIC8vIElmIGRyYWcgc29ydCBpcyBlbmFibGVkIC0+IGNoZWNrIG92ZXJsYXAuXG4gICAgaWYgKHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1NvcnQpIHtcbiAgICAgIGlmICh0aGlzLl9jaGVja0hldXJpc3RpY3ModGhpcy5fZHJhZ0V2ZW50KSkge1xuICAgICAgICB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQXBwbHkgbW92ZW1lbnQgdG8gZHJhZ2dlZCBpdGVtLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2FwcGx5TW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgaXRlbSBpcyBub3QgYWN0aXZlLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFVwZGF0ZSBlbGVtZW50J3MgdHJhbnNsYXRlWC9ZIHZhbHVlcy5cbiAgICBpdGVtLl9lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2xlZnQsIHRoaXMuX3RvcCk7XG5cbiAgICAvLyBFbWl0IGRyYWdNb3ZlIGV2ZW50LlxuICAgIHRoaXMuX2dldEdyaWQoKS5fZW1pdChldmVudERyYWdNb3ZlLCBpdGVtLCB0aGlzLl9kcmFnRXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHNjcm9sbCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uU2Nyb2xsID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIHJlc2V0IGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGxhc3Qgc2Nyb2xsIGV2ZW50LlxuICAgIHRoaXMuX3Njcm9sbEV2ZW50ID0gZXZlbnQ7XG5cbiAgICAvLyBEbyBzY3JvbGwgcHJlcGFyZS9hcHBseSBoYW5kbGluZyBpbiB0aGUgbmV4dCB0aWNrLlxuICAgIGFkZFNjcm9sbFRpY2soaXRlbS5faWQsIHRoaXMuX3ByZXBhcmVTY3JvbGwsIHRoaXMuX2FwcGx5U2Nyb2xsKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBkcmFnZ2VkIGl0ZW0gZm9yIHNjcm9sbGluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVwYXJlU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlIGRvIG5vdGhpbmcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBheGlzID0gc2V0dGluZ3MuZHJhZ0F4aXM7XG4gICAgdmFyIGdyaWRDb250YWluZXIgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciBvZmZzZXREaWZmO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGVsZW1lbnQncyByZWN0IGFuZCB4L3kgZGlmZi5cbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHhEaWZmID0gdGhpcy5fZWxlbWVudENsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgdmFyIHlEaWZmID0gdGhpcy5fZWxlbWVudENsaWVudFkgLSByZWN0LnRvcDtcblxuICAgIC8vIFVwZGF0ZSBjb250YWluZXIgZGlmZi5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBncmlkQ29udGFpbmVyKSB7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZih0aGlzLl9jb250YWluaW5nQmxvY2ssIGdyaWRDb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IG9mZnNldERpZmYudG9wO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBob3Jpem9udGFsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd5Jykge1xuICAgICAgdGhpcy5fbGVmdCArPSB4RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRYID0gdGhpcy5fbGVmdCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB2ZXJ0aWNhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneCcpIHtcbiAgICAgIHRoaXMuX3RvcCArPSB5RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRZID0gdGhpcy5fdG9wIC0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcmxhcCBoYW5kbGluZy5cbiAgICBpZiAoc2V0dGluZ3MuZHJhZ1NvcnQpIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGx5IHNjcm9sbCB0byBkcmFnZ2VkIGl0ZW0uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fYXBwbHlTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUgZG8gbm90aGluZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGUgZWxlbWVudCdzIHRyYW5zbGF0ZVgvWSB2YWx1ZXMuXG4gICAgaXRlbS5fZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9sZWZ0LCB0aGlzLl90b3ApO1xuXG4gICAgLy8gRW1pdCBkcmFnU2Nyb2xsIGV2ZW50LlxuICAgIHRoaXMuX2dldEdyaWQoKS5fZW1pdChldmVudERyYWdTY3JvbGwsIGl0ZW0sIHRoaXMuX3Njcm9sbEV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBlbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25FbmQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCByZXNldCBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBxdWV1ZWQgbW92ZSBhbmQgc2Nyb2xsIHRpY2tzLlxuICAgIGNhbmNlbE1vdmVUaWNrKGl0ZW0uX2lkKTtcbiAgICBjYW5jZWxTY3JvbGxUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIEZpbmlzaCBjdXJyZW50bHkgcXVldWVkIG92ZXJsYXAgY2hlY2suXG4gICAgc2V0dGluZ3MuZHJhZ1NvcnQgJiYgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoJ2ZpbmlzaCcpO1xuXG4gICAgLy8gUmVtb3ZlIHNjcm9sbCBsaXN0ZW5lcnMuXG4gICAgdGhpcy5fdW5iaW5kU2Nyb2xsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBTZXR1cCByZWxlYXNlIGRhdGEuXG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlggPSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWSA9IHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuXG4gICAgLy8gUmVzZXQgZHJhZyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBSZW1vdmUgZHJhZyBjbGFzcyBuYW1lIGZyb20gZWxlbWVudC5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtRHJhZ2dpbmdDbGFzcyk7XG5cbiAgICAvLyBFbWl0IGRyYWdFbmQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdFbmQsIGl0ZW0sIGV2ZW50KTtcblxuICAgIC8vIEZpbmlzaCB1cCB0aGUgbWlncmF0aW9uIHByb2Nlc3Mgb3Igc3RhcnQgdGhlIHJlbGVhc2UgcHJvY2Vzcy5cbiAgICB0aGlzLl9pc01pZ3JhdGluZyA/IHRoaXMuX2ZpbmlzaE1pZ3JhdGlvbigpIDogcmVsZWFzZS5zdGFydCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIGhlbHBlcnNcbiAgICogKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgaG93IG1hbnkgcGVyY2VudCB0aGUgaW50ZXJzZWN0aW9uIGFyZWEgb2YgdHdvIHJlY3RhbmdsZXMgaXMgZnJvbVxuICAgKiB0aGUgbWF4aW11bSBwb3RlbnRpYWwgaW50ZXJzZWN0aW9uIGFyZWEgYmV0d2VlbiB0aGUgcmVjdGFuZ2xlcy5cbiAgICpcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGFcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGJcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICogICAtIEEgbnVtYmVyIGJldHdlZW4gMC0xMDAuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRSZWN0T3ZlcmxhcFNjb3JlKGEsIGIpIHtcbiAgICAvLyBSZXR1cm4gMCBpbW1lZGlhdGVseSBpZiB0aGUgcmVjdGFuZ2xlcyBkbyBub3Qgb3ZlcmxhcC5cbiAgICBpZiAoXG4gICAgICBhLmxlZnQgKyBhLndpZHRoIDw9IGIubGVmdCB8fFxuICAgICAgYi5sZWZ0ICsgYi53aWR0aCA8PSBhLmxlZnQgfHxcbiAgICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgfHxcbiAgICAgIGIudG9wICsgYi5oZWlnaHQgPD0gYS50b3BcbiAgICApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBpbnRlcnNlY3Rpb24gYXJlYSdzIHdpZHRoLCBoZWlnaHQsIG1heCBoZWlnaHQgYW5kIG1heCB3aWR0aC5cbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbihhLmxlZnQgKyBhLndpZHRoLCBiLmxlZnQgKyBiLndpZHRoKSAtIE1hdGgubWF4KGEubGVmdCwgYi5sZWZ0KTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4oYS50b3AgKyBhLmhlaWdodCwgYi50b3AgKyBiLmhlaWdodCkgLSBNYXRoLm1heChhLnRvcCwgYi50b3ApO1xuICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWluKGEud2lkdGgsIGIud2lkdGgpO1xuICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1pbihhLmhlaWdodCwgYi5oZWlnaHQpO1xuXG4gICAgcmV0dXJuICgod2lkdGggKiBoZWlnaHQpIC8gKG1heFdpZHRoICogbWF4SGVpZ2h0KSkgKiAxMDA7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBhbiBhbmNob3IgZWxlbWVudCBhbmQgb3BlbiB0aGUgaHJlZiB1cmwgaWYgcG9zc2libGUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIG9wZW5BbmNob3JIcmVmKGVsZW1lbnQpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgYW5jaG9yIGVsZW1lbnQuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnYScpIHJldHVybjtcblxuICAgIC8vIEdldCBocmVmIGFuZCBtYWtlIHN1cmUgaXQgZXhpc3RzLlxuICAgIHZhciBocmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBpZiAoIWhyZWYpIHJldHVybjtcblxuICAgIC8vIEZpbmFsbHkgbGV0J3MgbmF2aWdhdGUgdG8gdGhlIGxpbmsgaHJlZi5cbiAgICB2YXIgdGFyZ2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB7XG4gICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgcGxhY2Vob2xkZXIuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1EcmFnUGxhY2Vob2xkZXIoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2FuaW1hdGUgPSBuZXcgSXRlbUFuaW1hdGUoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSAnJztcbiAgICB0aGlzLl9kaWRNaWdyYXRlID0gZmFsc2U7XG4gICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IGZhbHNlO1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gMDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gMDtcbiAgICB0aGlzLl9uZXh0TGVmdCA9IDA7XG4gICAgdGhpcy5fbmV4dFRvcCA9IDA7XG5cbiAgICAvLyBCaW5kIGFuaW1hdGlvbiBoYW5kbGVycy5cbiAgICB0aGlzLl9zZXR1cEFuaW1hdGlvbiA9IHRoaXMuX3NldHVwQW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24gPSB0aGlzLl9zdGFydEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuXG4gICAgLy8gQmluZCBldmVudCBoYW5kbGVycy5cbiAgICB0aGlzLl9vbkxheW91dFN0YXJ0ID0gdGhpcy5fb25MYXlvdXRTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTGF5b3V0RW5kID0gdGhpcy5fb25MYXlvdXRFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblJlbGVhc2VFbmQgPSB0aGlzLl9vblJlbGVhc2VFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1pZ3JhdGUgPSB0aGlzLl9vbk1pZ3JhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIE1vdmUgcGxhY2Vob2xkZXIgdG8gYSBuZXcgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uTGF5b3V0U3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcblxuICAgIC8vIEZpbmQgb3V0IHRoZSBpdGVtJ3MgbmV3ICh1bmFwcGxpZWQpIGxlZnQgYW5kIHRvcCBwb3NpdGlvbi5cbiAgICB2YXIgaXRlbUluZGV4ID0gZ3JpZC5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB2YXIgbmV4dExlZnQgPSBncmlkLl9sYXlvdXQuc2xvdHNbaXRlbUluZGV4ICogMl07XG4gICAgdmFyIG5leHRUb3AgPSBncmlkLl9sYXlvdXQuc2xvdHNbaXRlbUluZGV4ICogMiArIDFdO1xuXG4gICAgLy8gSWYgaXRlbSdzIHBvc2l0aW9uIGRpZCBub3QgY2hhbmdlIGFuZCB0aGUgaXRlbSBkaWQgbm90IG1pZ3JhdGUgd2UgY2FuXG4gICAgLy8gc2FmZWx5IHNraXAgbGF5b3V0LlxuICAgIGlmICghdGhpcy5fZGlkTWlncmF0ZSAmJiBpdGVtLl9sZWZ0ID09PSBuZXh0TGVmdCAmJiBpdGVtLl90b3AgPT09IG5leHRUb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTbG90cyBkYXRhIGlzIGNhbGN1bGF0ZWQgd2l0aCBpdGVtIG1hcmdpbnMgYWRkZWQgdG8gdGhlbSBzbyB3ZSBuZWVkIHRvIGFkZFxuICAgIC8vIGl0ZW0ncyBsZWZ0IGFuZCB0b3AgbWFyZ2luIHRvIHRoZSBzbG90IGRhdGEgdG8gZ2V0IHRoZSBwbGFjZWhvbGRlcidzXG4gICAgLy8gbmV4dCBwb3NpdGlvbi5cbiAgICBuZXh0TGVmdCArPSBpdGVtLl9tYXJnaW5MZWZ0O1xuICAgIG5leHRUb3AgKz0gaXRlbS5fbWFyZ2luVG9wO1xuXG4gICAgLy8gSnVzdCBzbmFwIHRvIG5ldyBwb3NpdGlvbiB3aXRob3V0IGFueSBhbmltYXRpb25zIGlmIG5vIGFuaW1hdGlvbiBpc1xuICAgIC8vIHJlcXVpcmVkIG9yIGlmIHBsYWNlaG9sZGVyIG1vdmVzIGJldHdlZW4gZ3JpZHMuXG4gICAgdmFyIGFuaW1FbmFibGVkID0gZ3JpZC5fc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmR1cmF0aW9uID4gMDtcbiAgICBpZiAoIWFuaW1FbmFibGVkIHx8IHRoaXMuX2RpZE1pZ3JhdGUpIHtcbiAgICAgIC8vIENhbmNlbCBwb3RlbnRpYWwgKHF1ZXVlZCkgbGF5b3V0IHRpY2suXG4gICAgICBjYW5jZWxQbGFjZWhvbGRlclRpY2soaXRlbS5faWQpO1xuXG4gICAgICAvLyBTbmFwIHBsYWNlaG9sZGVyIHRvIGNvcnJlY3QgcG9zaXRpb24uXG4gICAgICB2YXIgdGFyZ2V0U3R5bGVzID0geyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhuZXh0TGVmdCwgbmV4dFRvcCkgfTtcbiAgICAgIGlmICh0aGlzLl9hbmltYXRlLmlzQW5pbWF0aW5nKCkpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZS5zdG9wKHRhcmdldFN0eWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHlsZXModGhpcy5fZWxlbWVudCwgdGFyZ2V0U3R5bGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gTW92ZSBwbGFjZWhvbGRlciBpbnNpZGUgY29ycmVjdCBjb250YWluZXIgYWZ0ZXIgbWlncmF0aW9uLlxuICAgICAgaWYgKHRoaXMuX2RpZE1pZ3JhdGUpIHtcbiAgICAgICAgZ3JpZC5nZXRFbGVtZW50KCkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2RpZE1pZ3JhdGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRoZSBwbGFjZWhvbGRlcidzIGxheW91dCBhbmltYXRpb24gaW4gdGhlIG5leHQgdGljay4gV2UgZG8gdGhpcyB0b1xuICAgIC8vIGF2b2lkIGxheW91dCB0aHJhc2hpbmcuXG4gICAgdGhpcy5fbmV4dExlZnQgPSBuZXh0TGVmdDtcbiAgICB0aGlzLl9uZXh0VG9wID0gbmV4dFRvcDtcbiAgICBhZGRQbGFjZWhvbGRlclRpY2soaXRlbS5faWQsIHRoaXMuX3NldHVwQW5pbWF0aW9uLCB0aGlzLl9zdGFydEFuaW1hdGlvbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgcGxhY2Vob2xkZXIgZm9yIGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX3NldHVwQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHJldHVybjtcblxuICAgIHZhciB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUodGhpcy5fZWxlbWVudCk7XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSB0cmFuc2xhdGUueDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gdHJhbnNsYXRlLnk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX3N0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHJldHVybjtcblxuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRlO1xuICAgIHZhciBjdXJyZW50TGVmdCA9IHRoaXMuX2N1cnJlbnRMZWZ0O1xuICAgIHZhciBjdXJyZW50VG9wID0gdGhpcy5fY3VycmVudFRvcDtcbiAgICB2YXIgbmV4dExlZnQgPSB0aGlzLl9uZXh0TGVmdDtcbiAgICB2YXIgbmV4dFRvcCA9IHRoaXMuX25leHRUb3A7XG4gICAgdmFyIHRhcmdldFN0eWxlcyA9IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcobmV4dExlZnQsIG5leHRUb3ApIH07XG5cbiAgICAvLyBJZiBwbGFjZWhvbGRlciBpcyBhbHJlYWR5IGluIGNvcnJlY3QgcG9zaXRpb24gbGV0J3MganVzdCBzdG9wIGFuaW1hdGlvblxuICAgIC8vIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKGN1cnJlbnRMZWZ0ID09PSBuZXh0TGVmdCAmJiBjdXJyZW50VG9wID09PSBuZXh0VG9wKSB7XG4gICAgICBpZiAoYW5pbWF0aW9uLmlzQW5pbWF0aW5nKCkpIGFuaW1hdGlvbi5zdG9wKHRhcmdldFN0eWxlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGxldCdzIHN0YXJ0IHRoZSBhbmltYXRpb24uXG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5faXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdQbGFjZWhvbGRlcjtcbiAgICB2YXIgY3VycmVudFN0eWxlcyA9IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcoY3VycmVudExlZnQsIGN1cnJlbnRUb3ApIH07XG4gICAgYW5pbWF0aW9uLnN0YXJ0KGN1cnJlbnRTdHlsZXMsIHRhcmdldFN0eWxlcywge1xuICAgICAgZHVyYXRpb246IHNldHRpbmdzLmR1cmF0aW9uLFxuICAgICAgZWFzaW5nOiBzZXR0aW5ncy5lYXNpbmcsXG4gICAgICBvbkZpbmlzaDogdGhpcy5fb25MYXlvdXRFbmRcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogTGF5b3V0IGVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vbkxheW91dEVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9yZXNldEFmdGVyTGF5b3V0KSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIGVuZCBoYW5kbGVyLiBUaGlzIGhhbmRsZXIgaXMgY2FsbGVkIHdoZW4gZHJhZ1JlbGVhc2VFbmQgZXZlbnQgaXNcbiAgICogZW1pdHRlZCBhbmQgcmVjZWl2ZXMgdGhlIGV2ZW50IGRhdGEgYXMgaXQncyBhcmd1bWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uUmVsZWFzZUVuZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5faWQgPT09IHRoaXMuX2l0ZW0uX2lkKSB7XG4gICAgICAvLyBJZiB0aGUgcGxhY2Vob2xkZXIgaXMgbm90IGFuaW1hdGluZyBhbnltb3JlIHdlIGNhbiBzYWZlbHkgcmVzZXQgaXQuXG4gICAgICBpZiAoIXRoaXMuX2FuaW1hdGUuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHBsYWNlaG9sZGVyIGl0ZW0gaXMgc3RpbGwgYW5pbWF0aW5nIGhlcmUsIGxldCdzIHdhaXQgZm9yIGl0IHRvXG4gICAgICAvLyBmaW5pc2ggaXQncyBhbmltYXRpb24uXG4gICAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1pZ3JhdGlvbiBzdGFydCBoYW5kbGVyLiBUaGlzIGhhbmRsZXIgaXMgY2FsbGVkIHdoZW4gYmVmb3JlU2VuZCBldmVudCBpc1xuICAgKiBlbWl0dGVkIGFuZCByZWNlaXZlcyB0aGUgZXZlbnQgZGF0YSBhcyBpdCdzIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtJdGVtfSBkYXRhLml0ZW1cbiAgICogQHBhcmFtIHtHcmlkfSBkYXRhLmZyb21HcmlkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmZyb21JbmRleFxuICAgKiBAcGFyYW0ge0dyaWR9IGRhdGEudG9HcmlkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnRvSW5kZXhcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vbk1pZ3JhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSBtYXRjaGluZyBpdGVtLlxuICAgIGlmIChkYXRhLml0ZW0gIT09IHRoaXMuX2l0ZW0pIHJldHVybjtcblxuICAgIHZhciBncmlkID0gdGhpcy5faXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIG5leHRHcmlkID0gZGF0YS50b0dyaWQ7XG5cbiAgICAvLyBVbmJpbmQgbGlzdGVuZXJzIGZyb20gY3VycmVudCBncmlkLlxuICAgIGdyaWQub2ZmKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gQmluZCBsaXN0ZW5lcnMgdG8gdGhlIG5leHQgZ3JpZC5cbiAgICBuZXh0R3JpZC5vbihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIG5leHRHcmlkLm9uKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIG5leHRHcmlkLm9uKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIE1hcmsgdGhlIGl0ZW0gYXMgbWlncmF0ZWQuXG4gICAgdGhpcy5fZGlkTWlncmF0ZSA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBwbGFjZWhvbGRlci4gTm90ZSB0aGF0IHRoaXMgbWV0aG9kIG9ubHkgd3JpdGVzIHRvIERPTSBhbmQgZG9lcyBub3RcbiAgICogcmVhZCBhbnl0aGluZyBmcm9tIERPTSBzbyBpdCBzaG91bGQgbm90IGNhdXNlIGFueSBhZGRpdGlvbmFsIGxheW91dFxuICAgKiB0aHJhc2hpbmcgd2hlbiBpdCdzIGNhbGxlZCBhdCB0aGUgZW5kIG9mIHRoZSBkcmFnIHN0YXJ0IHByb2NlZHVyZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSBwbGFjZWhvbGRlciBzZXQgdXAgd2UgY2FuIHNraXAgdGhlIGluaXRpYXRpb24gbG9naWMuXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRlO1xuXG4gICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIGVsZW1lbnQuXG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmNyZWF0ZUVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50ID0gc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmNyZWF0ZUVsZW1lbnQoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgLy8gVXBkYXRlIGVsZW1lbnQgdG8gYW5pbWF0aW9uIGluc3RhbmNlLlxuICAgIGFuaW1hdGlvbi5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBBZGQgcGxhY2Vob2xkZXIgY2xhc3MgdG8gdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQuXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gc2V0dGluZ3MuaXRlbVBsYWNlaG9sZGVyQ2xhc3MgfHwgJyc7XG4gICAgaWYgKHRoaXMuX2NsYXNzTmFtZSkge1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICAvLyBQb3NpdGlvbiB0aGUgcGxhY2Vob2xkZXIgaXRlbSBjb3JyZWN0bHkuXG4gICAgdmFyIGxlZnQgPSBpdGVtLl9sZWZ0ICsgaXRlbS5fbWFyZ2luTGVmdDtcbiAgICB2YXIgdG9wID0gaXRlbS5fdG9wICsgaXRlbS5fbWFyZ2luVG9wO1xuICAgIHNldFN0eWxlcyhlbGVtZW50LCB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIHdpZHRoOiBpdGVtLl93aWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6IGl0ZW0uX2hlaWdodCArICdweCcsXG4gICAgICB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhsZWZ0LCB0b3ApXG4gICAgfSk7XG5cbiAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICBncmlkLm9uKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIGdyaWQub24oZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBncmlkLm9uKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIG9uQ3JlYXRlIGhvb2suXG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLm9uQ3JlYXRlKSkge1xuICAgICAgc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLm9uQ3JlYXRlKGl0ZW0sIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluc2VydCB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudCB0byB0aGUgZ3JpZC5cbiAgICBncmlkLmdldEVsZW1lbnQoKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzZXQgcGxhY2Vob2xkZXIgZGF0YS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0ZTtcblxuICAgIC8vIFJlc2V0IGZsYWcuXG4gICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IGZhbHNlO1xuXG4gICAgLy8gQ2FuY2VsIHBvdGVudGlhbCAocXVldWVkKSBsYXlvdXQgdGljay5cbiAgICBjYW5jZWxQbGFjZWhvbGRlclRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gUmVzZXQgYW5pbWF0aW9uIGluc3RhbmNlLlxuICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgYW5pbWF0aW9uLl9lbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIFVuYmluZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgZ3JpZC5vZmYoZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBncmlkLm9mZihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBncmlkLm9mZihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBSZW1vdmUgcGxhY2Vob2xkZXIgY2xhc3MgZnJvbSB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICBpZiAodGhpcy5fY2xhc3NOYW1lKSB7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCB0aGlzLl9jbGFzc05hbWUpO1xuICAgICAgdGhpcy5fY2xhc3NOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGVsZW1lbnQuXG4gICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gb25SZW1vdmUgaG9vay4gTm90ZSB0aGF0IGhlcmUgd2UgdXNlIHRoZSBjdXJyZW50IGdyaWQncyBvblJlbW92ZSBjYWxsYmFja1xuICAgIC8vIHNvIGlmIHRoZSBpdGVtIGhhcyBtaWdyYXRlZCBkdXJpbmcgZHJhZyB0aGUgb25SZW1vdmUgbWV0aG9kIHdpbGwgbm90IGJlXG4gICAgLy8gdGhlIG9yaWdpbmF0aW5nIGdyaWQncyBtZXRob2QuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLm9uUmVtb3ZlKSkge1xuICAgICAgc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLm9uUmVtb3ZlKGl0ZW0sIGVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIHBsYWNlaG9sZGVyJ3MgZGltZW5zaW9ucy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7aGVpZ2h0fSBoZWlnaHRcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLnVwZGF0ZURpbWVuc2lvbnMgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgc2V0U3R5bGVzKHRoaXMuX2VsZW1lbnQsIHtcbiAgICAgICAgd2lkdGg6IHdpZHRoICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBsYWNlaG9sZGVyIGlzIGN1cnJlbnRseSBhY3RpdmUgKHZpc2libGUpLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBwbGFjZWhvbGRlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5fYW5pbWF0ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5faXRlbSA9IHRoaXMuX2FuaW1hdGUgPSBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBRdWV1ZSBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBRdWV1ZSgpIHtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQWRkIGNhbGxiYWNrIHRvIHRoZSBxdWV1ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUXVldWUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtRdWV1ZX1cbiAgICovXG4gIFF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fcXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgcXVldWUgY2FsbGJhY2tzIGFuZCByZXNldCB0aGUgcXVldWUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFF1ZXVlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyp9IGFyZzFcbiAgICogQHBhcmFtIHsqfSBhcmcyXG4gICAqIEByZXR1cm5zIHtRdWV1ZX1cbiAgICovXG4gIFF1ZXVlLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uKGFyZzEsIGFyZzIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgaTtcblxuICAgIC8vIFF1aXQgZWFybHkgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5LlxuICAgIGlmICghbGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBzaW5nbGVDYWxsYmFjayA9IGxlbmd0aCA9PT0gMTtcbiAgICB2YXIgc25hcHNob3QgPSBzaW5nbGVDYWxsYmFjayA/IHF1ZXVlWzBdIDogcXVldWUuc2xpY2UoMCk7XG5cbiAgICAvLyBSZXNldCBxdWV1ZS5cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIGNhbGxiYWNrIGxldCdzIGp1c3QgY2FsbCBpdC5cbiAgICBpZiAoc2luZ2xlQ2FsbGJhY2spIHtcbiAgICAgIHNuYXBzaG90KGFyZzEsIGFyZzIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBtdWx0aXBsZSBjYWxsYmFja3MsIGxldCdzIHByb2Nlc3MgdGhlbS5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNuYXBzaG90W2ldKGFyZzEsIGFyZzIpO1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBRdWV1ZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUXVldWUucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtRdWV1ZX1cbiAgICovXG4gIFF1ZXVlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLl9xdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIExheW91dCBtYW5hZ2VyIGZvciBJdGVtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtTGF5b3V0KGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNJbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2N1cnJlbnRTdHlsZXMgPSB7fTtcbiAgICB0aGlzLl90YXJnZXRTdHlsZXMgPSB7fTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IDA7XG4gICAgdGhpcy5fb2Zmc2V0TGVmdCA9IDA7XG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gMDtcbiAgICB0aGlzLl9za2lwTmV4dEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuX2FuaW1hdGVPcHRpb25zID0ge1xuICAgICAgb25GaW5pc2g6IHRoaXMuX2ZpbmlzaC5iaW5kKHRoaXMpXG4gICAgfTtcbiAgICB0aGlzLl9xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuXG4gICAgLy8gQmluZCBhbmltYXRpb24gaGFuZGxlcnMgYW5kIGZpbmlzaCBtZXRob2QuXG4gICAgdGhpcy5fc2V0dXBBbmltYXRpb24gPSB0aGlzLl9zZXR1cEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uID0gdGhpcy5fc3RhcnRBbmltYXRpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCBpdGVtIGxheW91dCBiYXNlZCBvbiBpdCdzIGN1cnJlbnQgZGF0YS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7SXRlbUxheW91dH1cbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuICAgIHZhciBncmlkU2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIGlzUG9zaXRpb25pbmcgPSB0aGlzLl9pc0FjdGl2ZTtcbiAgICB2YXIgaXNKdXN0UmVsZWFzZWQgPSByZWxlYXNlLl9pc0FjdGl2ZSAmJiByZWxlYXNlLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9PT0gZmFsc2U7XG4gICAgdmFyIGFuaW1EdXJhdGlvbiA9IGlzSnVzdFJlbGVhc2VkXG4gICAgICA/IGdyaWRTZXR0aW5ncy5kcmFnUmVsZWFzZUR1cmF0aW9uXG4gICAgICA6IGdyaWRTZXR0aW5ncy5sYXlvdXREdXJhdGlvbjtcbiAgICB2YXIgYW5pbUVhc2luZyA9IGlzSnVzdFJlbGVhc2VkID8gZ3JpZFNldHRpbmdzLmRyYWdSZWxlYXNlRWFzaW5nIDogZ3JpZFNldHRpbmdzLmxheW91dEVhc2luZztcbiAgICB2YXIgYW5pbUVuYWJsZWQgPSAhaW5zdGFudCAmJiAhdGhpcy5fc2tpcE5leHRBbmltYXRpb24gJiYgYW5pbUR1cmF0aW9uID4gMDtcbiAgICB2YXIgaXNBbmltYXRpbmc7XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBjdXJyZW50bHkgcG9zaXRpb25pbmcgcHJvY2VzcyBjdXJyZW50IGxheW91dCBjYWxsYmFja1xuICAgIC8vIHF1ZXVlIHdpdGggaW50ZXJydXB0ZWQgZmxhZyBvbi5cbiAgICBpZiAoaXNQb3NpdGlvbmluZykgdGhpcy5fcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG5cbiAgICAvLyBNYXJrIHJlbGVhc2UgcG9zaXRpb25pbmcgYXMgc3RhcnRlZC5cbiAgICBpZiAoaXNKdXN0UmVsZWFzZWQpIHJlbGVhc2UuX2lzUG9zaXRpb25pbmdTdGFydGVkID0gdHJ1ZTtcblxuICAgIC8vIFB1c2ggdGhlIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICBpZiAoaXNGdW5jdGlvbihvbkZpbmlzaCkpIHRoaXMuX3F1ZXVlLmFkZChvbkZpbmlzaCk7XG5cbiAgICAvLyBJZiBubyBhbmltYXRpb25zIGFyZSBuZWVkZWQsIGVhc3kgcGVhc3khXG4gICAgaWYgKCFhbmltRW5hYmxlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlT2Zmc2V0cygpO1xuICAgICAgdGhpcy5fdXBkYXRlVGFyZ2V0U3R5bGVzKCk7XG4gICAgICBpc0FuaW1hdGluZyA9IGl0ZW0uX2FuaW1hdGUuaXNBbmltYXRpbmcoKTtcbiAgICAgIHRoaXMuc3RvcChmYWxzZSwgdGhpcy5fdGFyZ2V0U3R5bGVzKTtcbiAgICAgICFpc0FuaW1hdGluZyAmJiBzZXRTdHlsZXMoZWxlbWVudCwgdGhpcy5fdGFyZ2V0U3R5bGVzKTtcbiAgICAgIHRoaXMuX3NraXBOZXh0QW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5fZmluaXNoKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGl0ZW0gYWN0aXZlIGFuZCBzdG9yZSBzb21lIGRhdGEgZm9yIHRoZSBhbmltYXRpb24gdGhhdCBpcyBhYm91dCB0byBiZVxuICAgIC8vIHRyaWdnZXJlZC5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYW5pbWF0ZU9wdGlvbnMuZWFzaW5nID0gYW5pbUVhc2luZztcbiAgICB0aGlzLl9hbmltYXRlT3B0aW9ucy5kdXJhdGlvbiA9IGFuaW1EdXJhdGlvbjtcbiAgICB0aGlzLl9pc0ludGVycnVwdGVkID0gaXNQb3NpdGlvbmluZztcblxuICAgIC8vIFN0YXJ0IHRoZSBpdGVtJ3MgbGF5b3V0IGFuaW1hdGlvbiBpbiB0aGUgbmV4dCB0aWNrLlxuICAgIGFkZExheW91dFRpY2soaXRlbS5faWQsIHRoaXMuX3NldHVwQW5pbWF0aW9uLCB0aGlzLl9zdGFydEFuaW1hdGlvbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCBpdGVtJ3MgcG9zaXRpb24gYW5pbWF0aW9uIGlmIGl0IGlzIGN1cnJlbnRseSBhbmltYXRpbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3Byb2Nlc3NDYWxsYmFja1F1ZXVlPWZhbHNlXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldFN0eWxlc11cbiAgICogQHJldHVybnMge0l0ZW1MYXlvdXR9XG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24ocHJvY2Vzc0NhbGxiYWNrUXVldWUsIHRhcmdldFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gQ2FuY2VsIGFuaW1hdGlvbiBpbml0LlxuICAgIGNhbmNlbExheW91dFRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gU3RvcCBhbmltYXRpb24uXG4gICAgaXRlbS5fYW5pbWF0ZS5zdG9wKHRhcmdldFN0eWxlcyk7XG5cbiAgICAvLyBSZW1vdmUgcG9zaXRpb25pbmcgY2xhc3MuXG4gICAgcmVtb3ZlQ2xhc3MoaXRlbS5fZWxlbWVudCwgaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLml0ZW1Qb3NpdGlvbmluZ0NsYXNzKTtcblxuICAgIC8vIFJlc2V0IGFjdGl2ZSBzdGF0ZS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLy8gUHJvY2VzcyBjYWxsYmFjayBxdWV1ZSBpZiBuZWVkZWQuXG4gICAgaWYgKHByb2Nlc3NDYWxsYmFja1F1ZXVlKSB0aGlzLl9xdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgc3RvcCBjdXJyZW50IGFuaW1hdGlvbiBpZiBpdCBpcyBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbUxheW91dH1cbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCh0cnVlLCB7fSk7XG4gICAgdGhpcy5fcXVldWUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2l0ZW0gPSB0aGlzLl9jdXJyZW50U3R5bGVzID0gdGhpcy5fdGFyZ2V0U3R5bGVzID0gdGhpcy5fYW5pbWF0ZU9wdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIHVwZGF0ZSBpdGVtJ3MgY3VycmVudCBsYXlvdXQgb2Zmc2V0IGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3VwZGF0ZU9mZnNldHMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgbWlncmF0ZSA9IGl0ZW0uX21pZ3JhdGU7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuXG4gICAgdGhpcy5fb2Zmc2V0TGVmdCA9IHJlbGVhc2UuX2lzQWN0aXZlXG4gICAgICA/IHJlbGVhc2UuX2NvbnRhaW5lckRpZmZYXG4gICAgICA6IG1pZ3JhdGUuX2lzQWN0aXZlXG4gICAgICA/IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZYXG4gICAgICA6IDA7XG5cbiAgICB0aGlzLl9vZmZzZXRUb3AgPSByZWxlYXNlLl9pc0FjdGl2ZVxuICAgICAgPyByZWxlYXNlLl9jb250YWluZXJEaWZmWVxuICAgICAgOiBtaWdyYXRlLl9pc0FjdGl2ZVxuICAgICAgPyBtaWdyYXRlLl9jb250YWluZXJEaWZmWVxuICAgICAgOiAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIHVwZGF0ZSBpdGVtJ3MgbGF5b3V0IHRhcmdldCBzdHlsZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3VwZGF0ZVRhcmdldFN0eWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuX3RhcmdldFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICB0aGlzLl9pdGVtLl9sZWZ0ICsgdGhpcy5fb2Zmc2V0TGVmdCxcbiAgICAgIHRoaXMuX2l0ZW0uX3RvcCArIHRoaXMuX29mZnNldFRvcFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmlzaCBpdGVtIGxheW91dCBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX2ZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBtaWdyYXRlID0gaXRlbS5fbWlncmF0ZTtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG5cbiAgICAvLyBNYXJrIHRoZSBpdGVtIGFzIGluYWN0aXZlIGFuZCByZW1vdmUgcG9zaXRpb25pbmcgY2xhc3Nlcy5cbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICByZW1vdmVDbGFzcyhpdGVtLl9lbGVtZW50LCBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuaXRlbVBvc2l0aW9uaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIEZpbmlzaCB1cCByZWxlYXNlIGFuZCBtaWdyYXRpb24uXG4gICAgaWYgKHJlbGVhc2UuX2lzQWN0aXZlKSByZWxlYXNlLnN0b3AoKTtcbiAgICBpZiAobWlncmF0ZS5faXNBY3RpdmUpIG1pZ3JhdGUuc3RvcCgpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgdGhpcy5fcXVldWUuZmx1c2goZmFsc2UsIGl0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGl0ZW0gZm9yIGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3NldHVwQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSh0aGlzLl9pdGVtLl9lbGVtZW50KTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IHRyYW5zbGF0ZS54O1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSB0cmFuc2xhdGUueTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuXG4gICAgLy8gTGV0J3MgdXBkYXRlIHRoZSBvZmZzZXQgZGF0YSBhbmQgdGFyZ2V0IHN0eWxlcy5cbiAgICB0aGlzLl91cGRhdGVPZmZzZXRzKCk7XG4gICAgdGhpcy5fdXBkYXRlVGFyZ2V0U3R5bGVzKCk7XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBhbHJlYWR5IGluIGNvcnJlY3QgcG9zaXRpb24gbGV0J3MgcXVpdCBlYXJseS5cbiAgICBpZiAoXG4gICAgICBpdGVtLl9sZWZ0ID09PSB0aGlzLl9jdXJyZW50TGVmdCAtIHRoaXMuX29mZnNldExlZnQgJiZcbiAgICAgIGl0ZW0uX3RvcCA9PT0gdGhpcy5fY3VycmVudFRvcCAtIHRoaXMuX29mZnNldFRvcFxuICAgICkge1xuICAgICAgaWYgKHRoaXMuX2lzSW50ZXJydXB0ZWQpIHRoaXMuc3RvcChmYWxzZSwgdGhpcy5fdGFyZ2V0U3R5bGVzKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9maW5pc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgaXRlbSdzIHBvc2l0aW9uaW5nIGNsYXNzIGlmIG5lZWRlZC5cbiAgICBpZiAoIXRoaXMuX2lzSW50ZXJydXB0ZWQpIHtcbiAgICAgIGFkZENsYXNzKGl0ZW0uX2VsZW1lbnQsIHNldHRpbmdzLml0ZW1Qb3NpdGlvbmluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY3VycmVudCBzdHlsZXMgZm9yIGFuaW1hdGlvbi5cbiAgICB0aGlzLl9jdXJyZW50U3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9jdXJyZW50TGVmdCwgdGhpcy5fY3VycmVudFRvcCk7XG5cbiAgICAvLyBBbmltYXRlLlxuICAgIGl0ZW0uX2FuaW1hdGUuc3RhcnQodGhpcy5fY3VycmVudFN0eWxlcywgdGhpcy5fdGFyZ2V0U3R5bGVzLCB0aGlzLl9hbmltYXRlT3B0aW9ucyk7XG4gIH07XG5cbiAgdmFyIHRlbXBTdHlsZXMgPSB7fTtcblxuICAvKipcbiAgICogVGhlIG1pZ3JhdGUgcHJvY2VzcyBoYW5kbGVyIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtTWlncmF0ZShpdGVtKSB7XG4gICAgLy8gUHJpdmF0ZSBwcm9wcy5cbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgbWlncmF0ZSBwcm9jZXNzIG9mIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1NaWdyYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWR9IHRhcmdldEdyaWRcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbY29udGFpbmVyXVxuICAgKiBAcmV0dXJucyB7SXRlbU1pZ3JhdGV9XG4gICAqL1xuICBJdGVtTWlncmF0ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbih0YXJnZXRHcmlkLCBwb3NpdGlvbiwgY29udGFpbmVyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGlzVmlzaWJsZSA9IGl0ZW0uaXNWaXNpYmxlKCk7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0U2V0dGluZ3MgPSB0YXJnZXRHcmlkLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IHRhcmdldEdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGFyZ2V0R3JpZC5faXRlbXM7XG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IGdyaWQuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdmFyIHRhcmdldENvbnRhaW5lciA9IGNvbnRhaW5lciB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgdGFyZ2V0SW5kZXg7XG4gICAgdmFyIHRhcmdldEl0ZW07XG4gICAgdmFyIGN1cnJlbnRDb250YWluZXI7XG4gICAgdmFyIG9mZnNldERpZmY7XG4gICAgdmFyIGNvbnRhaW5lckRpZmY7XG4gICAgdmFyIHRyYW5zbGF0ZTtcbiAgICB2YXIgdHJhbnNsYXRlWDtcbiAgICB2YXIgdHJhbnNsYXRlWTtcblxuICAgIC8vIEdldCB0YXJnZXQgaW5kZXguXG4gICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRhcmdldEluZGV4ID0gbm9ybWFsaXplQXJyYXlJbmRleCh0YXJnZXRJdGVtcywgcG9zaXRpb24sIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRJdGVtID0gdGFyZ2V0R3JpZC5fZ2V0SXRlbShwb3NpdGlvbik7XG4gICAgICAvKiogQHRvZG8gQ29uc2lkZXIgdGhyb3dpbmcgYW4gZXJyb3IgaGVyZSBpbnN0ZWFkIG9mIHNpbGVudGx5IGZhaWxpbmcuICovXG4gICAgICBpZiAoIXRhcmdldEl0ZW0pIHJldHVybiB0aGlzO1xuICAgICAgdGFyZ2V0SW5kZXggPSB0YXJnZXRJdGVtcy5pbmRleE9mKHRhcmdldEl0ZW0pO1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgdmFsdWVzIGlmIG5lZWRlZC5cbiAgICBpZiAoaXRlbS5pc1Bvc2l0aW9uaW5nKCkgfHwgdGhpcy5faXNBY3RpdmUgfHwgaXRlbS5pc1JlbGVhc2luZygpKSB7XG4gICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlLng7XG4gICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlLnk7XG4gICAgfVxuXG4gICAgLy8gQWJvcnQgY3VycmVudCBwb3NpdGlvbmluZy5cbiAgICBpZiAoaXRlbS5pc1Bvc2l0aW9uaW5nKCkpIHtcbiAgICAgIGl0ZW0uX2xheW91dC5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkgfSk7XG4gICAgfVxuXG4gICAgLy8gQWJvcnQgY3VycmVudCBtaWdyYXRpb24uXG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0cmFuc2xhdGVYIC09IHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgdHJhbnNsYXRlWSAtPSB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICAgIHRoaXMuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpIH0pO1xuICAgIH1cblxuICAgIC8vIEFib3J0IGN1cnJlbnQgcmVsZWFzZS5cbiAgICBpZiAoaXRlbS5pc1JlbGVhc2luZygpKSB7XG4gICAgICB0cmFuc2xhdGVYIC09IGl0ZW0uX3JlbGVhc2UuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgdHJhbnNsYXRlWSAtPSBpdGVtLl9yZWxlYXNlLl9jb250YWluZXJEaWZmWTtcbiAgICAgIGl0ZW0uX3JlbGVhc2Uuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpIH0pO1xuICAgIH1cblxuICAgIC8vIFN0b3AgY3VycmVudCB2aXNpYmlsaXR5IGFuaW1hdGlvbnMuXG4gICAgaXRlbS5fdmlzaWJpbGl0eS5fc3RvcEFuaW1hdGlvbigpO1xuXG4gICAgLy8gRGVzdHJveSBjdXJyZW50IGRyYWcuXG4gICAgaWYgKGl0ZW0uX2RyYWcpIGl0ZW0uX2RyYWcuZGVzdHJveSgpO1xuXG4gICAgLy8gUHJvY2VzcyBjdXJyZW50IHZpc2liaWxpdHkgYW5pbWF0aW9uIHF1ZXVlLlxuICAgIGl0ZW0uX3Zpc2liaWxpdHkuX3F1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuXG4gICAgLy8gRW1pdCBiZWZvcmVTZW5kIGV2ZW50LlxuICAgIGlmIChncmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVTZW5kKSkge1xuICAgICAgZ3JpZC5fZW1pdChldmVudEJlZm9yZVNlbmQsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGJlZm9yZVJlY2VpdmUgZXZlbnQuXG4gICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVJlY2VpdmUpKSB7XG4gICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50QmVmb3JlUmVjZWl2ZSwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBjdXJyZW50IGNsYXNzbmFtZXMuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gQWRkIG5ldyBjbGFzc25hbWVzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHRhcmdldFNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgaXNWaXNpYmxlID8gdGFyZ2V0U2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyA6IHRhcmdldFNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBNb3ZlIGl0ZW0gaW5zdGFuY2UgZnJvbSBjdXJyZW50IGdyaWQgdG8gdGFyZ2V0IGdyaWQuXG4gICAgZ3JpZC5faXRlbXMuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XG4gICAgYXJyYXlJbnNlcnQodGFyZ2V0SXRlbXMsIGl0ZW0sIHRhcmdldEluZGV4KTtcblxuICAgIC8vIFVwZGF0ZSBpdGVtJ3MgZ3JpZCBpZCByZWZlcmVuY2UuXG4gICAgaXRlbS5fZ3JpZElkID0gdGFyZ2V0R3JpZC5faWQ7XG5cbiAgICAvLyBHZXQgY3VycmVudCBjb250YWluZXIuXG4gICAgY3VycmVudENvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgIC8vIE1vdmUgdGhlIGl0ZW0gaW5zaWRlIHRoZSB0YXJnZXQgY29udGFpbmVyIGlmIGl0J3MgZGlmZmVyZW50IHRoYW4gdGhlXG4gICAgLy8gY3VycmVudCBjb250YWluZXIuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYodGFyZ2V0Q29udGFpbmVyLCBjdXJyZW50Q29udGFpbmVyLCB0cnVlKTtcbiAgICAgIGlmICghdHJhbnNsYXRlKSB7XG4gICAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZS54O1xuICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlLnk7XG4gICAgICB9XG4gICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgICB0cmFuc2xhdGVYICsgb2Zmc2V0RGlmZi5sZWZ0LFxuICAgICAgICB0cmFuc2xhdGVZICsgb2Zmc2V0RGlmZi50b3BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNoaWxkIGVsZW1lbnQncyBzdHlsZXMgdG8gcmVmbGVjdCB0aGUgY3VycmVudCB2aXNpYmlsaXR5IHN0YXRlLlxuICAgIGl0ZW0uX2NoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIGlzVmlzaWJsZSA/IHRhcmdldFNldHRpbmdzLnZpc2libGVTdHlsZXMgOiB0YXJnZXRTZXR0aW5ncy5oaWRkZW5TdHlsZXMpO1xuXG4gICAgLy8gVXBkYXRlIGRpc3BsYXkgc3R5bGUuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJ2Jsb2NrJyA6ICdoaWRkZW4nO1xuXG4gICAgLy8gR2V0IG9mZnNldCBkaWZmIGZvciB0aGUgbWlncmF0aW9uIGRhdGEuXG4gICAgY29udGFpbmVyRGlmZiA9IGdldE9mZnNldERpZmYodGFyZ2V0Q29udGFpbmVyLCB0YXJnZXRFbGVtZW50LCB0cnVlKTtcblxuICAgIC8vIFVwZGF0ZSBpdGVtJ3MgY2FjaGVkIGRpbWVuc2lvbnMgYW5kIHNvcnQgZGF0YS5cbiAgICBpdGVtLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIGl0ZW0uX3JlZnJlc2hTb3J0RGF0YSgpO1xuXG4gICAgLy8gQ3JlYXRlIG5ldyBkcmFnIGhhbmRsZXIuXG4gICAgaXRlbS5fZHJhZyA9IHRhcmdldFNldHRpbmdzLmRyYWdFbmFibGVkID8gbmV3IEl0ZW1EcmFnKGl0ZW0pIDogbnVsbDtcblxuICAgIC8vIFNldHVwIG1pZ3JhdGlvbiBkYXRhLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSB0YXJnZXRDb250YWluZXI7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSBjb250YWluZXJEaWZmLmxlZnQ7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSBjb250YWluZXJEaWZmLnRvcDtcblxuICAgIC8vIEVtaXQgc2VuZCBldmVudC5cbiAgICBpZiAoZ3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50U2VuZCkpIHtcbiAgICAgIGdyaWQuX2VtaXQoZXZlbnRTZW5kLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCByZWNlaXZlIGV2ZW50LlxuICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRSZWNlaXZlKSkge1xuICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudFJlY2VpdmUsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRW5kIHRoZSBtaWdyYXRlIHByb2Nlc3Mgb2YgYW4gaXRlbS4gVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gYWJvcnQgYW5cbiAgICogb25nb2luZyBtaWdyYXRlIHByb2Nlc3MgKGFuaW1hdGlvbikgb3IgZmluaXNoIHRoZSBtaWdyYXRlIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1NaWdyYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFthYm9ydD1mYWxzZV1cbiAgICogIC0gU2hvdWxkIHRoZSBtaWdyYXRpb24gYmUgYWJvcnRlZD9cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjdXJyZW50U3R5bGVzXVxuICAgKiAgLSBPcHRpb25hbCBjdXJyZW50IHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgc3R5bGVzLlxuICAgKiBAcmV0dXJucyB7SXRlbU1pZ3JhdGV9XG4gICAqL1xuICBJdGVtTWlncmF0ZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKGFib3J0LCBjdXJyZW50U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIGdyaWRFbGVtZW50ID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdHJhbnNsYXRlO1xuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gZ3JpZEVsZW1lbnQpIHtcbiAgICAgIGlmICghY3VycmVudFN0eWxlcykge1xuICAgICAgICBpZiAoYWJvcnQpIHtcbiAgICAgICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgICAgdGVtcFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICAgICAgICB0cmFuc2xhdGUueCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYLFxuICAgICAgICAgICAgdHJhbnNsYXRlLnkgLSB0aGlzLl9jb250YWluZXJEaWZmWVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoaXRlbS5fbGVmdCwgaXRlbS5fdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U3R5bGVzID0gdGVtcFN0eWxlcztcbiAgICAgIH1cbiAgICAgIGdyaWRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgc2V0U3R5bGVzKGVsZW1lbnQsIGN1cnJlbnRTdHlsZXMpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1NaWdyYXRlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbU1pZ3JhdGV9XG4gICAqL1xuICBJdGVtTWlncmF0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKHRydWUpO1xuICAgIHRoaXMuX2l0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgdGVtcFN0eWxlcyQxID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSByZWxlYXNlIHByb2Nlc3MgaGFuZGxlciBjb25zdHJ1Y3Rvci4gQWx0aG91Z2ggdGhpcyBtaWdodCBzZWVtIGFzIHByb3BlclxuICAgKiBmaXQgZm9yIHRoZSBkcmFnIHByb2Nlc3MgdGhpcyBuZWVkcyB0byBiZSBzZXBhcmF0ZWQgaW50byBpdCdzIG93biBsb2dpY1xuICAgKiBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIGEgc2NlbmFyaW8gd2hlcmUgZHJhZyBpcyBkaXNhYmxlZCwgYnV0IHRoZSByZWxlYXNlXG4gICAqIHByb2Nlc3Mgc3RpbGwgbmVlZHMgdG8gYmUgaW1wbGVtZW50ZWQgKGRyYWdnaW5nIGZyb20gYSBncmlkIHRvIGFub3RoZXIpLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtUmVsZWFzZShpdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzUG9zaXRpb25pbmdTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgcmVsZWFzZSBwcm9jZXNzIG9mIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbVJlbGVhc2V9XG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG5cbiAgICAvLyBGbGFnIHJlbGVhc2UgYXMgYWN0aXZlLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcblxuICAgIC8vIEFkZCByZWxlYXNlIGNsYXNzIG5hbWUgdG8gdGhlIHJlbGVhc2VkIGVsZW1lbnQuXG4gICAgYWRkQ2xhc3MoaXRlbS5fZWxlbWVudCwgZ3JpZC5fc2V0dGluZ3MuaXRlbVJlbGVhc2luZ0NsYXNzKTtcblxuICAgIC8vIEVtaXQgZHJhZ1JlbGVhc2VTdGFydCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ1JlbGVhc2VTdGFydCwgaXRlbSk7XG5cbiAgICAvLyBQb3NpdGlvbiB0aGUgcmVsZWFzZWQgaXRlbS5cbiAgICBpdGVtLl9sYXlvdXQuc3RhcnQoZmFsc2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuZCB0aGUgcmVsZWFzZSBwcm9jZXNzIG9mIGFuIGl0ZW0uIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGFib3J0IGFuXG4gICAqIG9uZ29pbmcgcmVsZWFzZSBwcm9jZXNzIChhbmltYXRpb24pIG9yIGZpbmlzaCB0aGUgcmVsZWFzZSBwcm9jZXNzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbYWJvcnQ9ZmFsc2VdXG4gICAqICAtIFNob3VsZCB0aGUgcmVsZWFzZSBiZSBhYm9ydGVkPyBXaGVuIHRydWUsIHRoZSByZWxlYXNlIGVuZCBldmVudCB3b24ndCBiZVxuICAgKiAgICBlbWl0dGVkLiBTZXQgdG8gdHJ1ZSBvbmx5IHdoZW4geW91IG5lZWQgdG8gYWJvcnQgdGhlIHJlbGVhc2UgcHJvY2Vzc1xuICAgKiAgICB3aGlsZSB0aGUgaXRlbSBpcyBhbmltYXRpbmcgdG8gaXQncyBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjdXJyZW50U3R5bGVzXVxuICAgKiAgLSBPcHRpb25hbCBjdXJyZW50IHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgc3R5bGVzLlxuICAgKiBAcmV0dXJucyB7SXRlbVJlbGVhc2V9XG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKGFib3J0LCBjdXJyZW50U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRyYW5zbGF0ZTtcblxuICAgIC8vIFJlc2V0IGRhdGEgYW5kIHJlbW92ZSByZWxlYXNpbmcgY2xhc3MgbmFtZSBmcm9tIHRoZSBlbGVtZW50LlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBJZiB0aGUgcmVsZWFzZWQgZWxlbWVudCBpcyBvdXRzaWRlIHRoZSBncmlkJ3MgY29udGFpbmVyIGVsZW1lbnQgcHV0IGl0XG4gICAgLy8gYmFjayB0aGVyZSBhbmQgYWRqdXN0IHBvc2l0aW9uIGFjY29yZGluZ2x5LlxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IGNvbnRhaW5lcikge1xuICAgICAgaWYgKCFjdXJyZW50U3R5bGVzKSB7XG4gICAgICAgIGlmIChhYm9ydCkge1xuICAgICAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICB0ZW1wU3R5bGVzJDEudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgICAgICAgdHJhbnNsYXRlLnggLSB0aGlzLl9jb250YWluZXJEaWZmWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZS55IC0gdGhpcy5fY29udGFpbmVyRGlmZllcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBTdHlsZXMkMS50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoaXRlbS5fbGVmdCwgaXRlbS5fdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U3R5bGVzID0gdGVtcFN0eWxlcyQxO1xuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgc2V0U3R5bGVzKGVsZW1lbnQsIGN1cnJlbnRTdHlsZXMpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgZHJhZ1JlbGVhc2VFbmQgZXZlbnQuXG4gICAgaWYgKCFhYm9ydCkgZ3JpZC5fZW1pdChldmVudERyYWdSZWxlYXNlRW5kLCBpdGVtKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1SZWxlYXNlfVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCh0cnVlKTtcbiAgICB0aGlzLl9pdGVtID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogUmVzZXQgcHVibGljIGRhdGEgYW5kIHJlbW92ZSByZWxlYXNpbmcgY2xhc3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gICAgcmVtb3ZlQ2xhc3MoaXRlbS5fZWxlbWVudCwgaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLml0ZW1SZWxlYXNpbmdDbGFzcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHZhbHVlcyBvZiB0aGUgcHJvdmlkZWQgc3R5bGVzIGRlZmluaXRpb24gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgICB2YXIgY3VycmVudCA9IHt9O1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBjdXJyZW50W3Byb3BdID0gZ2V0U3R5bGUoZWxlbWVudCwgZ2V0U3R5bGVOYW1lKHByb3ApKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogVmlzaWJpbGl0eSBtYW5hZ2VyIGZvciBJdGVtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtVmlzaWJpbGl0eShpdGVtKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gaXRlbS5faXNBY3RpdmU7XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBzZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcblxuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgdXAgdmlzaWJpbGl0eSBzdGF0ZXMuXG4gICAgdGhpcy5faXNIaWRkZW4gPSAhaXNBY3RpdmU7XG4gICAgdGhpcy5faXNIaWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcblxuICAgIC8vIENhbGxiYWNrIHF1ZXVlLlxuICAgIHRoaXMuX3F1ZXVlID0gbmV3IFF1ZXVlKCk7XG5cbiAgICAvLyBCaW5kIHNob3cvaGlkZSBmaW5pc2hlcnMuXG4gICAgdGhpcy5fZmluaXNoU2hvdyA9IHRoaXMuX2ZpbmlzaFNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9maW5pc2hIaWRlID0gdGhpcy5fZmluaXNoSGlkZS5iaW5kKHRoaXMpO1xuXG4gICAgLy8gRm9yY2UgaXRlbSB0byBiZSBlaXRoZXIgdmlzaWJsZSBvciBoaWRkZW4gb24gaW5pdC5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc0FjdGl2ZSA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAvLyBTZXQgdmlzaWJsZS9oaWRkZW4gY2xhc3MuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgaXNBY3RpdmUgPyBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzIDogc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0eWxlcyBmb3IgdGhlIGNoaWxkIGVsZW1lbnQuXG4gICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCBpc0FjdGl2ZSA/IHNldHRpbmdzLnZpc2libGVTdHlsZXMgOiBzZXR0aW5ncy5oaWRkZW5TdHlsZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFNob3cgaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zdGFudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtJdGVtVmlzaWJpbGl0eX1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKG9uRmluaXNoKSA/IG9uRmluaXNoIDogbnVsbDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gSWYgaXRlbSBpcyB2aXNpYmxlIGNhbGwgdGhlIGNhbGxiYWNrIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3dpbmcgJiYgIXRoaXMuX2lzSGlkZGVuKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhmYWxzZSwgaXRlbSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiBpdGVtIGlzIHNob3dpbmcgYW5kIGRvZXMgbm90IG5lZWQgdG8gYmUgc2hvd24gaW5zdGFudGx5LCBsZXQncyBqdXN0XG4gICAgLy8gcHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAodGhpcy5faXNTaG93aW5nICYmICFpbnN0YW50KSB7XG4gICAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgaGlkaW5nIG9yIGhpZGRlbiBwcm9jZXNzIHRoZSBjdXJyZW50IHZpc2liaWxpdHkgY2FsbGJhY2tcbiAgICAvLyBxdWV1ZSB3aXRoIHRoZSBpbnRlcnJ1cHRlZCBmbGFnIGFjdGl2ZSwgdXBkYXRlIGNsYXNzZXMgYW5kIHNldCBkaXNwbGF5XG4gICAgLy8gdG8gYmxvY2sgaWYgbmVjZXNzYXJ5LlxuICAgIGlmICghdGhpcy5faXNTaG93aW5nKSB7XG4gICAgICBxdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICAgIGlmICghdGhpcy5faXNIaWRpbmcpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgLy8gUHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcblxuICAgIC8vIFVwZGF0ZSB2aXNpYmlsaXR5IHN0YXRlcy5cbiAgICBpdGVtLl9pc0FjdGl2ZSA9IHRoaXMuX2lzU2hvd2luZyA9IHRydWU7XG4gICAgdGhpcy5faXNIaWRpbmcgPSB0aGlzLl9pc0hpZGRlbiA9IGZhbHNlO1xuXG4gICAgLy8gRmluYWxseSBsZXQncyBzdGFydCBzaG93IGFuaW1hdGlvbi5cbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbih0cnVlLCBpbnN0YW50LCB0aGlzLl9maW5pc2hTaG93KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluc3RhbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7SXRlbVZpc2liaWxpdHl9XG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGNhbGxiYWNrID0gaXNGdW5jdGlvbihvbkZpbmlzaCkgPyBvbkZpbmlzaCA6IG51bGw7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIElmIGl0ZW0gaXMgYWxyZWFkeSBoaWRkZW4gY2FsbCB0aGUgY2FsbGJhY2sgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAoIXRoaXMuX2lzSGlkaW5nICYmIHRoaXMuX2lzSGlkZGVuKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhmYWxzZSwgaXRlbSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiBpdGVtIGlzIGhpZGluZyBhbmQgZG9lcyBub3QgbmVlZCB0byBiZSBoaWRkZW4gaW5zdGFudGx5LCBsZXQncyBqdXN0XG4gICAgLy8gcHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAodGhpcy5faXNIaWRpbmcgJiYgIWluc3RhbnQpIHtcbiAgICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBzaG93aW5nIG9yIHZpc2libGUgcHJvY2VzcyB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGNhbGxiYWNrXG4gICAgLy8gcXVldWUgd2l0aCB0aGUgaW50ZXJydXB0ZWQgZmxhZyBhY3RpdmUsIHVwZGF0ZSBjbGFzc2VzIGFuZCBzZXQgZGlzcGxheVxuICAgIC8vIHRvIGJsb2NrIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoIXRoaXMuX2lzSGlkaW5nKSB7XG4gICAgICBxdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBQdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuXG4gICAgLy8gVXBkYXRlIHZpc2liaWxpdHkgc3RhdGVzLlxuICAgIHRoaXMuX2lzSGlkZGVuID0gdGhpcy5faXNIaWRpbmcgPSB0cnVlO1xuICAgIGl0ZW0uX2lzQWN0aXZlID0gdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG5cbiAgICAvLyBGaW5hbGx5IGxldCdzIHN0YXJ0IGhpZGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKGZhbHNlLCBpbnN0YW50LCB0aGlzLl9maW5pc2hIaWRlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgc3RvcCBjdXJyZW50IGFuaW1hdGlvbiBpZiBpdCBpcyBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1WaXNpYmlsaXR5fVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gU3RvcCB2aXNpYmlsaXR5IGFuaW1hdGlvbi5cbiAgICB0aGlzLl9zdG9wQW5pbWF0aW9uKHt9KTtcblxuICAgIC8vIEZpcmUgYWxsIHVuY29tcGxldGVkIGNhbGxiYWNrcyB3aXRoIGludGVycnVwdGVkIGZsYWcgYW5kIGRlc3Ryb3kgdGhlIHF1ZXVlLlxuICAgIHF1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSB2aXNpYmxlL2hpZGRlbiBjbGFzc2VzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBSZXNldCBzdGF0ZS5cbiAgICB0aGlzLl9pdGVtID0gbnVsbDtcbiAgICB0aGlzLl9pc0hpZGluZyA9IHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdGhpcy5faXNIaWRkZW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgdmlzaWJpbGl0eSBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSB0b1Zpc2libGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zdGFudF1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKHRvVmlzaWJsZSwgaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgc2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldFN0eWxlcyA9IHRvVmlzaWJsZSA/IHNldHRpbmdzLnZpc2libGVTdHlsZXMgOiBzZXR0aW5ncy5oaWRkZW5TdHlsZXM7XG4gICAgdmFyIGR1cmF0aW9uID0gcGFyc2VJbnQodG9WaXNpYmxlID8gc2V0dGluZ3Muc2hvd0R1cmF0aW9uIDogc2V0dGluZ3MuaGlkZUR1cmF0aW9uKSB8fCAwO1xuICAgIHZhciBlYXNpbmcgPSAodG9WaXNpYmxlID8gc2V0dGluZ3Muc2hvd0Vhc2luZyA6IHNldHRpbmdzLmhpZGVFYXNpbmcpIHx8ICdlYXNlJztcbiAgICB2YXIgaXNJbnN0YW50ID0gaW5zdGFudCB8fCBkdXJhdGlvbiA8PSAwO1xuICAgIHZhciBjdXJyZW50U3R5bGVzO1xuXG4gICAgLy8gTm8gdGFyZ2V0IHN0eWxlcz8gTGV0J3MgcXVpdCBlYXJseS5cbiAgICBpZiAoIXRhcmdldFN0eWxlcykge1xuICAgICAgb25GaW5pc2ggJiYgb25GaW5pc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgcXVldWVkIHZpc2liaWxpdHkgdGljay5cbiAgICBjYW5jZWxWaXNpYmlsaXR5VGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBJZiB3ZSBuZWVkIHRvIGFwcGx5IHRoZSBzdHlsZXMgaW5zdGFudGx5IHdpdGhvdXQgYW5pbWF0aW9uLlxuICAgIGlmIChpc0luc3RhbnQpIHtcbiAgICAgIGlmIChpdGVtLl9hbmltYXRlQ2hpbGQuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICBpdGVtLl9hbmltYXRlQ2hpbGQuc3RvcCh0YXJnZXRTdHlsZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCB0YXJnZXRTdHlsZXMpO1xuICAgICAgfVxuICAgICAgb25GaW5pc2ggJiYgb25GaW5pc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uIGluIHRoZSBuZXh0IHRpY2sgKHRvIGF2b2lkIGxheW91dCB0aHJhc2hpbmcpLlxuICAgIGFkZFZpc2liaWxpdHlUaWNrKFxuICAgICAgaXRlbS5faWQsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY3VycmVudFN0eWxlcyA9IGdldEN1cnJlbnRTdHlsZXMoaXRlbS5fY2hpbGQsIHRhcmdldFN0eWxlcyk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0ZW0uX2FuaW1hdGVDaGlsZC5zdGFydChjdXJyZW50U3R5bGVzLCB0YXJnZXRTdHlsZXMsIHtcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgICAgb25GaW5pc2g6IG9uRmluaXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgdmlzaWJpbGl0eSBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRTdHlsZXNdXG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX3N0b3BBbmltYXRpb24gPSBmdW5jdGlvbih0YXJnZXRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgY2FuY2VsVmlzaWJpbGl0eVRpY2soaXRlbS5faWQpO1xuICAgIGl0ZW0uX2FuaW1hdGVDaGlsZC5zdG9wKHRhcmdldFN0eWxlcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmlzaCBzaG93IHByb2NlZHVyZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9maW5pc2hTaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzSGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcXVldWUuZmx1c2goZmFsc2UsIHRoaXMuX2l0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5pc2ggaGlkZSBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICovXG4gIHZhciBmaW5pc2hTdHlsZXMgPSB7fTtcbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9maW5pc2hIaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9pc0hpZGRlbikgcmV0dXJuO1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB0aGlzLl9pc0hpZGluZyA9IGZhbHNlO1xuICAgIGZpbmlzaFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoMCwgMCk7XG4gICAgaXRlbS5fbGF5b3V0LnN0b3AodHJ1ZSwgZmluaXNoU3R5bGVzKTtcbiAgICBpdGVtLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5fcXVldWUuZmx1c2goZmFsc2UsIGl0ZW0pO1xuICB9O1xuXG4gIHZhciBpZCA9IDA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB1bmlxdWUgbnVtZXJpYyBpZCAoaW5jcmVtZW50cyBhIGJhc2UgdmFsdWUgb24gZXZlcnkgY2FsbCkuXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVVaWQoKSB7XG4gICAgcmV0dXJuICsraWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBJdGVtIGluc3RhbmNlIGZvciBhIEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpc0FjdGl2ZV1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW0oZ3JpZCwgZWxlbWVudCwgaXNBY3RpdmUpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIENyZWF0ZSBpbnN0YW5jZSBpZC5cbiAgICB0aGlzLl9pZCA9IGNyZWF0ZVVpZCgpO1xuXG4gICAgLy8gUmVmZXJlbmNlIHRvIGNvbm5lY3RlZCBHcmlkIGluc3RhbmNlJ3MgaWQuXG4gICAgdGhpcy5fZ3JpZElkID0gZ3JpZC5faWQ7XG5cbiAgICAvLyBEZXN0cm95ZWQgZmxhZy5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gU2V0IHVwIGluaXRpYWwgcG9zaXRpb25zLlxuICAgIHRoaXMuX2xlZnQgPSAwO1xuICAgIHRoaXMuX3RvcCA9IDA7XG5cbiAgICAvLyBUaGUgZWxlbWVudHMuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fY2hpbGQgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuXG4gICAgLy8gSWYgdGhlIHByb3ZpZGVkIGl0ZW0gZWxlbWVudCBpcyBub3QgYSBkaXJlY3QgY2hpbGQgb2YgdGhlIGdyaWQgY29udGFpbmVyXG4gICAgLy8gZWxlbWVudCwgYXBwZW5kIGl0IHRvIHRoZSBncmlkIGNvbnRhaW5lci5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBncmlkLl9lbGVtZW50KSB7XG4gICAgICBncmlkLl9lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIFNldCBpdGVtIGNsYXNzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1DbGFzcyk7XG5cbiAgICAvLyBJZiBpc0FjdGl2ZSBpcyBub3QgZGVmaW5lZCwgbGV0J3MgdHJ5IHRvIGF1dG8tZGV0ZWN0IGl0LlxuICAgIGlmICh0eXBlb2YgaXNBY3RpdmUgIT09ICdib29sZWFuJykge1xuICAgICAgaXNBY3RpdmUgPSBnZXRTdHlsZShlbGVtZW50LCAnZGlzcGxheScpICE9PSAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGFjdGl2ZSBzdGF0ZSAoZGVmaW5lcyBpZiB0aGUgaXRlbSBpcyBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIGxheW91dFxuICAgIC8vIG9yIG5vdCkuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBpc0FjdGl2ZTtcblxuICAgIC8vIFNldCBlbGVtZW50J3MgaW5pdGlhbCBwb3NpdGlvbiBzdHlsZXMuXG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoMCwgMCk7XG5cbiAgICAvLyBJbml0aWF0ZSBpdGVtJ3MgYW5pbWF0aW9uIGNvbnRyb2xsZXJzLlxuICAgIHRoaXMuX2FuaW1hdGUgPSBuZXcgSXRlbUFuaW1hdGUoZWxlbWVudCk7XG4gICAgdGhpcy5fYW5pbWF0ZUNoaWxkID0gbmV3IEl0ZW1BbmltYXRlKHRoaXMuX2NoaWxkKTtcblxuICAgIC8vIFNldHVwIHZpc2liaWxpdHkgaGFuZGxlci5cbiAgICB0aGlzLl92aXNpYmlsaXR5ID0gbmV3IEl0ZW1WaXNpYmlsaXR5KHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIGxheW91dCBoYW5kbGVyLlxuICAgIHRoaXMuX2xheW91dCA9IG5ldyBJdGVtTGF5b3V0KHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIG1pZ3JhdGlvbiBoYW5kbGVyIGRhdGEuXG4gICAgdGhpcy5fbWlncmF0ZSA9IG5ldyBJdGVtTWlncmF0ZSh0aGlzKTtcblxuICAgIC8vIFNldCB1cCByZWxlYXNlIGhhbmRsZXIuIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGlzIGZ1bGx5IGxpbmtlZCB0byBkcmFnZ2luZ1xuICAgIC8vIHRoaXMgc3RpbGwgbmVlZHMgdG8gYmUgYWx3YXlzIGluc3RhbnRpYXRlZCB0byBoYW5kbGUgbWlncmF0aW9uIHNjZW5hcmlvc1xuICAgIC8vIGNvcnJlY3RseS5cbiAgICB0aGlzLl9yZWxlYXNlID0gbmV3IEl0ZW1SZWxlYXNlKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIGRyYWcgcGxhY2Vob2xkZXIgaGFuZGxlci4gTm90ZSB0aGF0IGFsdGhvdWdoIHRoaXMgaXMgZnVsbHkgbGlua2VkIHRvXG4gICAgLy8gZHJhZ2dpbmcgdGhpcyBzdGlsbCBuZWVkcyB0byBiZSBhbHdheXMgaW5zdGFudGlhdGVkIHRvIGhhbmRsZSBtaWdyYXRpb25cbiAgICAvLyBzY2VuYXJpb3MgY29ycmVjdGx5LlxuICAgIHRoaXMuX2RyYWdQbGFjZWhvbGRlciA9IG5ldyBJdGVtRHJhZ1BsYWNlaG9sZGVyKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIGRyYWcgaGFuZGxlci5cbiAgICB0aGlzLl9kcmFnID0gc2V0dGluZ3MuZHJhZ0VuYWJsZWQgPyBuZXcgSXRlbURyYWcodGhpcykgOiBudWxsO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBpbml0aWFsIGRpbWVuc2lvbnMgYW5kIHNvcnQgZGF0YS5cbiAgICB0aGlzLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIHRoaXMuX3JlZnJlc2hTb3J0RGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5zdGFuY2UgZ3JpZCByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0R3JpZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBncmlkSW5zdGFuY2VzW3RoaXMuX2dyaWRJZF07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5zdGFuY2UgZWxlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCB3aWR0aC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCBoZWlnaHQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCBtYXJnaW5zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiAgIC0gVGhlIHJldHVybmVkIG9iamVjdCBjb250YWlucyBsZWZ0LCByaWdodCwgdG9wIGFuZCBib3R0b20gcHJvcGVydGllc1xuICAgKiAgICAgd2hpY2ggaW5kaWNhdGUgdGhlIGl0ZW0gZWxlbWVudCdzIGNhY2hlZCBtYXJnaW5zLlxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0TWFyZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IHRoaXMuX21hcmdpbkxlZnQsXG4gICAgICByaWdodDogdGhpcy5fbWFyZ2luUmlnaHQsXG4gICAgICB0b3A6IHRoaXMuX21hcmdpblRvcCxcbiAgICAgIGJvdHRvbTogdGhpcy5fbWFyZ2luQm90dG9tXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqICAgLSBUaGUgcmV0dXJuZWQgb2JqZWN0IGNvbnRhaW5zIGxlZnQgYW5kIHRvcCBwcm9wZXJ0aWVzIHdoaWNoIGluZGljYXRlIHRoZVxuICAgKiAgICAgaXRlbSBlbGVtZW50J3MgY2FjaGVkIHBvc2l0aW9uIGluIHRoZSBncmlkLlxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogdGhpcy5fbGVmdCxcbiAgICAgIHRvcDogdGhpcy5fdG9wXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYWN0aXZlP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSB2aXNpYmxlP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3Zpc2liaWxpdHkgJiYgIXRoaXMuX3Zpc2liaWxpdHkuX2lzSGlkZGVuO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyBhbmltYXRlZCB0byB2aXNpYmxlP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzU2hvd2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl92aXNpYmlsaXR5ICYmIHRoaXMuX3Zpc2liaWxpdHkuX2lzU2hvd2luZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIGFuaW1hdGVkIHRvIGhpZGRlbj9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0hpZGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl92aXNpYmlsaXR5ICYmIHRoaXMuX3Zpc2liaWxpdHkuX2lzSGlkaW5nKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gcG9zaXRpb25pbmc/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNQb3NpdGlvbmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl9sYXlvdXQgJiYgdGhpcy5fbGF5b3V0Ll9pc0FjdGl2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIGRyYWdnZWQ/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl9kcmFnICYmIHRoaXMuX2RyYWcuX2lzQWN0aXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgcmVsZWFzZWQ/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNSZWxlYXNpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fcmVsZWFzZSAmJiB0aGlzLl9yZWxlYXNlLl9pc0FjdGl2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGRlc3Ryb3llZD9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0Rlc3Ryb3llZDtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZSBpdGVtJ3MgZGltZW5zaW9ucy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5fcmVmcmVzaERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5fdmlzaWJpbGl0eS5faXNIaWRkZW4pIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgZHJhZ1BsYWNlaG9sZGVyID0gdGhpcy5fZHJhZ1BsYWNlaG9sZGVyO1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIENhbGN1bGF0ZSB3aWR0aCBhbmQgaGVpZ2h0LlxuICAgIHRoaXMuX3dpZHRoID0gcmVjdC53aWR0aDtcbiAgICB0aGlzLl9oZWlnaHQgPSByZWN0LmhlaWdodDtcblxuICAgIC8vIENhbGN1bGF0ZSBtYXJnaW5zIChpZ25vcmUgbmVnYXRpdmUgbWFyZ2lucykuXG4gICAgdGhpcy5fbWFyZ2luTGVmdCA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLWxlZnQnKSk7XG4gICAgdGhpcy5fbWFyZ2luUmlnaHQgPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi1yaWdodCcpKTtcbiAgICB0aGlzLl9tYXJnaW5Ub3AgPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi10b3AnKSk7XG4gICAgdGhpcy5fbWFyZ2luQm90dG9tID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tYm90dG9tJykpO1xuXG4gICAgLy8gS2VlcCBkcmFnIHBsYWNlaG9sZGVyJ3MgZGltZW5zaW9ucyBzeW5jZWQgd2l0aCB0aGUgaXRlbSdzLlxuICAgIGlmIChkcmFnUGxhY2Vob2xkZXIpIHtcbiAgICAgIGRyYWdQbGFjZWhvbGRlci51cGRhdGVEaW1lbnNpb25zKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2ggYW5kIHN0b3JlIGl0ZW0ncyBzb3J0IGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuX3JlZnJlc2hTb3J0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGRhdGEgPSAodGhpcy5fc29ydERhdGEgPSB7fSk7XG4gICAgdmFyIGdldHRlcnMgPSB0aGlzLmdldEdyaWQoKS5fc2V0dGluZ3Muc29ydERhdGE7XG4gICAgdmFyIHByb3A7XG5cbiAgICBmb3IgKHByb3AgaW4gZ2V0dGVycykge1xuICAgICAgZGF0YVtwcm9wXSA9IGdldHRlcnNbcHJvcF0odGhpcywgdGhpcy5fZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGl0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZW1vdmVFbGVtZW50PWZhbHNlXVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbihyZW1vdmVFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgaW5kZXggPSBncmlkLl9pdGVtcy5pbmRleE9mKHRoaXMpO1xuXG4gICAgLy8gRGVzdHJveSBoYW5kbGVycy5cbiAgICB0aGlzLl9yZWxlYXNlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9taWdyYXRlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9sYXlvdXQuZGVzdHJveSgpO1xuICAgIHRoaXMuX3Zpc2liaWxpdHkuZGVzdHJveSgpO1xuICAgIHRoaXMuX2FuaW1hdGUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2FuaW1hdGVDaGlsZC5kZXN0cm95KCk7XG4gICAgdGhpcy5fZHJhZ1BsYWNlaG9sZGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9kcmFnICYmIHRoaXMuX2RyYWcuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBpbmxpbmUgc3R5bGVzLlxuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIHRoaXMuX2NoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgIC8vIFJlbW92ZSBpdGVtIGNsYXNzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1DbGFzcyk7XG5cbiAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIEdyaWQgaW5zdGFuY2UgaWYgaXQgc3RpbGwgZXhpc3RzIHRoZXJlLlxuICAgIGluZGV4ID4gLTEgJiYgZ3JpZC5faXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIFJlbW92ZSBlbGVtZW50IGZyb20gRE9NLlxuICAgIHJlbW92ZUVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuXG4gICAgLy8gUmVzZXQgc3RhdGUuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgbGF5b3V0IGFsZ29yaXRobSBmb3IgTXV1cmkuIEJhc2VkIG9uIE1BWFJFQ1RTIGFwcHJvYWNoXG4gICAqIGFzIGRlc2NyaWJlZCBieSBKdWtrYSBKeWzDpG5raSBpbiBoaXMgc3VydmV5OiBcIkEgVGhvdXNhbmQgV2F5cyB0byBQYWNrIHRoZVxuICAgKiBCaW4gLSBBIFByYWN0aWNhbCBBcHByb2FjaCB0byBUd28tRGltZW5zaW9uYWwgUmVjdGFuZ2xlIEJpbiBQYWNraW5nLlwiLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFBhY2tlcigpIHtcbiAgICB0aGlzLl9zbG90cyA9IFtdO1xuICAgIHRoaXMuX3Nsb3RTaXplcyA9IFtdO1xuICAgIHRoaXMuX2ZyZWVTbG90cyA9IFtdO1xuICAgIHRoaXMuX25ld1Nsb3RzID0gW107XG4gICAgdGhpcy5fcmVjdEl0ZW0gPSB7fTtcbiAgICB0aGlzLl9yZWN0U3RvcmUgPSBbXTtcbiAgICB0aGlzLl9yZWN0SWQgPSAwO1xuXG4gICAgLy8gVGhlIGxheW91dCByZXR1cm4gZGF0YSwgd2hpY2ggd2lsbCBiZSBwb3B1bGF0ZWQgaW4gZ2V0TGF5b3V0LlxuICAgIHRoaXMuX2xheW91dCA9IHtcbiAgICAgIHNsb3RzOiBudWxsLFxuICAgICAgc2V0V2lkdGg6IGZhbHNlLFxuICAgICAgc2V0SGVpZ2h0OiBmYWxzZSxcbiAgICAgIHdpZHRoOiBmYWxzZSxcbiAgICAgIGhlaWdodDogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gQmluZCBzb3J0IGhhbmRsZXJzLlxuICAgIHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AgPSB0aGlzLl9zb3J0UmVjdHNMZWZ0VG9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc29ydFJlY3RzVG9wTGVmdCA9IHRoaXMuX3NvcnRSZWN0c1RvcExlZnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7SXRlbVtdfSBpdGVtc1xuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgKiBAcGFyYW0ge051bWJlcltdfSBbc2xvdHNdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maWxsR2Fwcz1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5ob3Jpem9udGFsPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsaWduUmlnaHQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxpZ25Cb3R0b209ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtMYXlvdXREYXRhfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5nZXRMYXlvdXQgPSBmdW5jdGlvbihpdGVtcywgd2lkdGgsIGhlaWdodCwgc2xvdHMsIG9wdGlvbnMpIHtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5fbGF5b3V0O1xuICAgIHZhciBmaWxsR2FwcyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5maWxsR2Fwcyk7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5ob3Jpem9udGFsKTtcbiAgICB2YXIgYWxpZ25SaWdodCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGlnblJpZ2h0KTtcbiAgICB2YXIgYWxpZ25Cb3R0b20gPSAhIShvcHRpb25zICYmIG9wdGlvbnMuYWxpZ25Cb3R0b20pO1xuICAgIHZhciByb3VuZGluZyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5yb3VuZGluZyk7XG4gICAgdmFyIHNsb3RTaXplcyA9IHRoaXMuX3Nsb3RTaXplcztcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlc2V0IGxheW91dCBkYXRhLlxuICAgIGxheW91dC5zbG90cyA9IHNsb3RzID8gc2xvdHMgOiB0aGlzLl9zbG90cztcbiAgICBsYXlvdXQud2lkdGggPSBpc0hvcml6b250YWwgPyAwIDogcm91bmRpbmcgPyBNYXRoLnJvdW5kKHdpZHRoKSA6IHdpZHRoO1xuICAgIGxheW91dC5oZWlnaHQgPSAhaXNIb3Jpem9udGFsID8gMCA6IHJvdW5kaW5nID8gTWF0aC5yb3VuZChoZWlnaHQpIDogaGVpZ2h0O1xuICAgIGxheW91dC5zZXRXaWR0aCA9IGlzSG9yaXpvbnRhbDtcbiAgICBsYXlvdXQuc2V0SGVpZ2h0ID0gIWlzSG9yaXpvbnRhbDtcblxuICAgIC8vIE1ha2Ugc3VyZSBzbG90cyBhbmQgc2xvdCBzaXplIGFycmF5cyBhcmUgcmVzZXQuXG4gICAgbGF5b3V0LnNsb3RzLmxlbmd0aCA9IDA7XG4gICAgc2xvdFNpemVzLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBObyBuZWVkIHRvIGdvIGZ1cnRoZXIgaWYgaXRlbXMgZG8gbm90IGV4aXN0LlxuICAgIGlmICghaXRlbXMubGVuZ3RoKSByZXR1cm4gbGF5b3V0O1xuXG4gICAgLy8gRmluZCBzbG90cyBmb3IgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9hZGRTbG90KGl0ZW1zW2ldLCBpc0hvcml6b250YWwsIGZpbGxHYXBzLCByb3VuZGluZywgYWxpZ25SaWdodCB8fCBhbGlnbkJvdHRvbSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGFsaWdubWVudCBpcyBzZXQgdG8gcmlnaHQgd2UgbmVlZCB0byBhZGp1c3QgdGhlIHJlc3VsdHMuXG4gICAgaWYgKGFsaWduUmlnaHQpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsYXlvdXQuc2xvdHMubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgbGF5b3V0LnNsb3RzW2ldID0gbGF5b3V0LndpZHRoIC0gKGxheW91dC5zbG90c1tpXSArIHNsb3RTaXplc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGFsaWdubWVudCBpcyBzZXQgdG8gYm90dG9tIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSByZXN1bHRzLlxuICAgIGlmIChhbGlnbkJvdHRvbSkge1xuICAgICAgZm9yIChpID0gMTsgaSA8IGxheW91dC5zbG90cy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgICBsYXlvdXQuc2xvdHNbaV0gPSBsYXlvdXQuaGVpZ2h0IC0gKGxheW91dC5zbG90c1tpXSArIHNsb3RTaXplc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgc2xvdHMgYXJyYXlzIGFuZCByZWN0IGlkLlxuICAgIHNsb3RTaXplcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX2ZyZWVTbG90cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX25ld1Nsb3RzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fcmVjdElkID0gMDtcblxuICAgIHJldHVybiBsYXlvdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwb3NpdGlvbiBmb3IgdGhlIGxheW91dCBpdGVtLiBSZXR1cm5zIHRoZSBsZWZ0IGFuZCB0b3AgcG9zaXRpb25cbiAgICogb2YgdGhlIGl0ZW0gaW4gcGl4ZWxzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtCb29sZWFufSBpc0hvcml6b250YWxcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaWxsR2Fwc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJvdW5kaW5nXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2FkZFNsb3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVwcyA9IDAuMDAxO1xuICAgIHZhciBpdGVtU2xvdCA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihpdGVtLCBpc0hvcml6b250YWwsIGZpbGxHYXBzLCByb3VuZGluZywgdHJhY2tTaXplKSB7XG4gICAgICB2YXIgbGF5b3V0ID0gdGhpcy5fbGF5b3V0O1xuICAgICAgdmFyIGZyZWVTbG90cyA9IHRoaXMuX2ZyZWVTbG90cztcbiAgICAgIHZhciBuZXdTbG90cyA9IHRoaXMuX25ld1Nsb3RzO1xuICAgICAgdmFyIHJlY3Q7XG4gICAgICB2YXIgcmVjdElkO1xuICAgICAgdmFyIHBvdGVudGlhbFNsb3RzO1xuICAgICAgdmFyIGlnbm9yZUN1cnJlbnRTbG90cztcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGlpO1xuXG4gICAgICAvLyBSZXNldCBuZXcgc2xvdHMuXG4gICAgICBuZXdTbG90cy5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBTZXQgaXRlbSBzbG90IGluaXRpYWwgZGF0YS5cbiAgICAgIGl0ZW1TbG90LmxlZnQgPSBudWxsO1xuICAgICAgaXRlbVNsb3QudG9wID0gbnVsbDtcbiAgICAgIGl0ZW1TbG90LndpZHRoID0gaXRlbS5fd2lkdGggKyBpdGVtLl9tYXJnaW5MZWZ0ICsgaXRlbS5fbWFyZ2luUmlnaHQ7XG4gICAgICBpdGVtU2xvdC5oZWlnaHQgPSBpdGVtLl9oZWlnaHQgKyBpdGVtLl9tYXJnaW5Ub3AgKyBpdGVtLl9tYXJnaW5Cb3R0b207XG5cbiAgICAgIC8vIFJvdW5kIGl0ZW0gc2xvdCB3aWR0aCBhbmQgaGVpZ2h0IGlmIG5lZWRlZC5cbiAgICAgIGlmIChyb3VuZGluZykge1xuICAgICAgICBpdGVtU2xvdC53aWR0aCA9IE1hdGgucm91bmQoaXRlbVNsb3Qud2lkdGgpO1xuICAgICAgICBpdGVtU2xvdC5oZWlnaHQgPSBNYXRoLnJvdW5kKGl0ZW1TbG90LmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyeSB0byBmaW5kIGEgc2xvdCBmb3IgdGhlIGl0ZW0uXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZnJlZVNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlY3RJZCA9IGZyZWVTbG90c1tpXTtcbiAgICAgICAgaWYgKCFyZWN0SWQpIGNvbnRpbnVlO1xuICAgICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgICBpZiAoaXRlbVNsb3Qud2lkdGggPD0gcmVjdC53aWR0aCArIGVwcyAmJiBpdGVtU2xvdC5oZWlnaHQgPD0gcmVjdC5oZWlnaHQgKyBlcHMpIHtcbiAgICAgICAgICBpdGVtU2xvdC5sZWZ0ID0gcmVjdC5sZWZ0O1xuICAgICAgICAgIGl0ZW1TbG90LnRvcCA9IHJlY3QudG9wO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIHNsb3Qgd2FzIGZvdW5kIGZvciB0aGUgaXRlbS5cbiAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBpdGVtIGluIHRvIHRoZSBib3R0b20gbGVmdCAodmVydGljYWwgbW9kZSkgb3IgdG9wIHJpZ2h0XG4gICAgICAgIC8vIChob3Jpem9udGFsIG1vZGUpIG9mIHRoZSBncmlkLlxuICAgICAgICBpdGVtU2xvdC5sZWZ0ID0gIWlzSG9yaXpvbnRhbCA/IDAgOiBsYXlvdXQud2lkdGg7XG4gICAgICAgIGl0ZW1TbG90LnRvcCA9ICFpc0hvcml6b250YWwgPyBsYXlvdXQuaGVpZ2h0IDogMDtcblxuICAgICAgICAvLyBJZiBnYXBzIGRvbid0IG5lZWQgZmlsbGluZyBkbyBub3QgYWRkIGFueSBjdXJyZW50IHNsb3RzIHRvIHRoZSBuZXdcbiAgICAgICAgLy8gc2xvdHMgYXJyYXkuXG4gICAgICAgIGlmICghZmlsbEdhcHMpIHtcbiAgICAgICAgICBpZ25vcmVDdXJyZW50U2xvdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEluIHZlcnRpY2FsIG1vZGUsIGlmIHRoZSBpdGVtJ3MgYm90dG9tIG92ZXJsYXBzIHRoZSBncmlkJ3MgYm90dG9tLlxuICAgICAgaWYgKCFpc0hvcml6b250YWwgJiYgaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0ID4gbGF5b3V0LmhlaWdodCkge1xuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSBsZWZ0IGVkZ2UsIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QubGVmdCA+IDApIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKHRoaXMuX2FkZFJlY3QoMCwgbGF5b3V0LmhlaWdodCwgaXRlbVNsb3QubGVmdCwgSW5maW5pdHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIHJpZ2h0IGVkZ2UsIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoIDwgbGF5b3V0LndpZHRoKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaChcbiAgICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICAgIGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCxcbiAgICAgICAgICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgICAgICAgICAgbGF5b3V0LndpZHRoIC0gaXRlbVNsb3QubGVmdCAtIGl0ZW1TbG90LndpZHRoLFxuICAgICAgICAgICAgICBJbmZpbml0eVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZ3JpZCBoZWlnaHQuXG4gICAgICAgIGxheW91dC5oZWlnaHQgPSBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEluIGhvcml6b250YWwgbW9kZSwgaWYgdGhlIGl0ZW0ncyByaWdodCBvdmVybGFwcyB0aGUgZ3JpZCdzIHJpZ2h0IGVkZ2UuXG4gICAgICBpZiAoaXNIb3Jpem9udGFsICYmIGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCA+IGxheW91dC53aWR0aCkge1xuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSB0b3AsIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QudG9wID4gMCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2godGhpcy5fYWRkUmVjdChsYXlvdXQud2lkdGgsIDAsIEluZmluaXR5LCBpdGVtU2xvdC50b3ApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIGJvdHRvbSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQgPCBsYXlvdXQuaGVpZ2h0KSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaChcbiAgICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICAgIGxheW91dC53aWR0aCxcbiAgICAgICAgICAgICAgaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0LFxuICAgICAgICAgICAgICBJbmZpbml0eSxcbiAgICAgICAgICAgICAgbGF5b3V0LmhlaWdodCAtIGl0ZW1TbG90LnRvcCAtIGl0ZW1TbG90LmhlaWdodFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZ3JpZCB3aWR0aC5cbiAgICAgICAgbGF5b3V0LndpZHRoID0gaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhbiB1cCB0aGUgY3VycmVudCBzbG90cyBtYWtpbmcgc3VyZSB0aGVyZSBhcmUgbm8gb2xkIHNsb3RzIHRoYXRcbiAgICAgIC8vIG92ZXJsYXAgd2l0aCB0aGUgaXRlbS4gSWYgYW4gb2xkIHNsb3Qgb3ZlcmxhcHMgd2l0aCB0aGUgaXRlbSwgc3BsaXQgaXRcbiAgICAgIC8vIGludG8gc21hbGxlciBzbG90cyBpZiBuZWNlc3NhcnkuXG4gICAgICBmb3IgKGkgPSBmaWxsR2FwcyA/IDAgOiBpZ25vcmVDdXJyZW50U2xvdHMgPyBmcmVlU2xvdHMubGVuZ3RoIDogaTsgaSA8IGZyZWVTbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZWN0SWQgPSBmcmVlU2xvdHNbaV07XG4gICAgICAgIGlmICghcmVjdElkKSBjb250aW51ZTtcbiAgICAgICAgcmVjdCA9IHRoaXMuX2dldFJlY3QocmVjdElkKTtcbiAgICAgICAgcG90ZW50aWFsU2xvdHMgPSB0aGlzLl9zcGxpdFJlY3QocmVjdCwgaXRlbVNsb3QpO1xuICAgICAgICBmb3IgKGlpID0gMDsgaWkgPCBwb3RlbnRpYWxTbG90cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICByZWN0SWQgPSBwb3RlbnRpYWxTbG90c1tpaV07XG4gICAgICAgICAgcmVjdCA9IHRoaXMuX2dldFJlY3QocmVjdElkKTtcbiAgICAgICAgICAvLyBMZXQncyBtYWtlIHN1cmUgaGVyZSB0aGF0IHdlIGhhdmUgYSBiaWcgZW5vdWdoIHNsb3RcbiAgICAgICAgICAvLyAod2lkdGgvaGVpZ2h0ID4gMC40OXB4KSBhbmQgYWxzbyBsZXQncyBtYWtlIHN1cmUgdGhhdCB0aGUgc2xvdCBpc1xuICAgICAgICAgIC8vIHdpdGhpbiB0aGUgYm91bmRhcmllcyBvZiB0aGUgZ3JpZC5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZWN0LndpZHRoID4gMC40OSAmJlxuICAgICAgICAgICAgcmVjdC5oZWlnaHQgPiAwLjQ5ICYmXG4gICAgICAgICAgICAoKCFpc0hvcml6b250YWwgJiYgcmVjdC50b3AgPCBsYXlvdXQuaGVpZ2h0KSB8fFxuICAgICAgICAgICAgICAoaXNIb3Jpem9udGFsICYmIHJlY3QubGVmdCA8IGxheW91dC53aWR0aCkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBuZXdTbG90cy5wdXNoKHJlY3RJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNhbml0aXplIG5ldyBzbG90cy5cbiAgICAgIGlmIChuZXdTbG90cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcHVyZ2VSZWN0cyhuZXdTbG90cykuc29ydChcbiAgICAgICAgICBpc0hvcml6b250YWwgPyB0aGlzLl9zb3J0UmVjdHNMZWZ0VG9wIDogdGhpcy5fc29ydFJlY3RzVG9wTGVmdFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgbGF5b3V0IHdpZHRoL2hlaWdodC5cbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgbGF5b3V0LndpZHRoID0gTWF0aC5tYXgobGF5b3V0LndpZHRoLCBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5b3V0LmhlaWdodCA9IE1hdGgubWF4KGxheW91dC5oZWlnaHQsIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBpdGVtIHNsb3QgZGF0YSB0byBsYXlvdXQgc2xvdHMgKGFuZCBzdG9yZSB0aGUgc2xvdCBzaXplIGZvciBsYXRlclxuICAgICAgLy8gdXNhZ2UgdG9vIGlmIG5lY2Vzc2FyeSkuXG4gICAgICBsYXlvdXQuc2xvdHMucHVzaChpdGVtU2xvdC5sZWZ0LCBpdGVtU2xvdC50b3ApO1xuICAgICAgaWYgKHRyYWNrU2l6ZSkgdGhpcy5fc2xvdFNpemVzLnB1c2goaXRlbVNsb3Qud2lkdGgsIGl0ZW1TbG90LmhlaWdodCk7XG5cbiAgICAgIC8vIEZyZWUvbmV3IHNsb3RzIHN3aXRjaGVyb28hXG4gICAgICB0aGlzLl9mcmVlU2xvdHMgPSBuZXdTbG90cztcbiAgICAgIHRoaXMuX25ld1Nsb3RzID0gZnJlZVNsb3RzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyByZWN0YW5nbGUgdG8gdGhlIHJlY3RhbmdsZSBzdG9yZS4gUmV0dXJucyB0aGUgaWQgb2YgdGhlIG5ld1xuICAgKiByZWN0YW5nbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3BcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICogQHJldHVybnMge1JlY3RJZH1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2FkZFJlY3QgPSBmdW5jdGlvbihsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgcmVjdElkID0gKyt0aGlzLl9yZWN0SWQ7XG4gICAgdmFyIHJlY3RTdG9yZSA9IHRoaXMuX3JlY3RTdG9yZTtcblxuICAgIHJlY3RTdG9yZVtyZWN0SWRdID0gbGVmdCB8fCAwO1xuICAgIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSB0b3AgfHwgMDtcbiAgICByZWN0U3RvcmVbKyt0aGlzLl9yZWN0SWRdID0gd2lkdGggfHwgMDtcbiAgICByZWN0U3RvcmVbKyt0aGlzLl9yZWN0SWRdID0gaGVpZ2h0IHx8IDA7XG5cbiAgICByZXR1cm4gcmVjdElkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgcmVjdGFuZ2xlIGRhdGEgZnJvbSB0aGUgcmVjdGFuZ2xlIHN0b3JlIGJ5IGlkLiBPcHRpb25hbGx5IHlvdSBjYW5cbiAgICogcHJvdmlkZSBhIHRhcmdldCBvYmplY3Qgd2hlcmUgdGhlIHJlY3RhbmdsZSBkYXRhIHdpbGwgYmUgd3JpdHRlbiBpbi4gQnlcbiAgICogZGVmYXVsdCBhbiBpbnRlcm5hbCBvYmplY3QgaXMgcmV1c2VkIGFzIGEgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWR9IGlkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0XVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fZ2V0UmVjdCA9IGZ1bmN0aW9uKGlkLCB0YXJnZXQpIHtcbiAgICB2YXIgcmVjdEl0ZW0gPSB0YXJnZXQgPyB0YXJnZXQgOiB0aGlzLl9yZWN0SXRlbTtcbiAgICB2YXIgcmVjdFN0b3JlID0gdGhpcy5fcmVjdFN0b3JlO1xuXG4gICAgcmVjdEl0ZW0ubGVmdCA9IHJlY3RTdG9yZVtpZF0gfHwgMDtcbiAgICByZWN0SXRlbS50b3AgPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcbiAgICByZWN0SXRlbS53aWR0aCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuICAgIHJlY3RJdGVtLmhlaWdodCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuXG4gICAgcmV0dXJuIHJlY3RJdGVtO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdW5jaCBhIGhvbGUgaW50byBhIHJlY3RhbmdsZSBhbmQgc3BsaXQgdGhlIHJlbWFpbmluZyBhcmVhIGludG8gc21hbGxlclxuICAgKiByZWN0YW5nbGVzICg0IGF0IG1heCkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSByZWN0XG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBob2xlXG4gICAqIEByZXR1cm5zIHtSZWN0SWRbXX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3NwbGl0UmVjdCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHJldHVybiBmdW5jdGlvbihyZWN0LCBob2xlKSB7XG4gICAgICAvLyBSZXNldCBvbGQgcmVzdWx0cy5cbiAgICAgIHJlc3VsdHMubGVuZ3RoID0gMDtcblxuICAgICAgLy8gSWYgdGhlIHJlY3QgZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIHRoZSBob2xlIGFkZCByZWN0IHRvIHRoZSByZXR1cm4gZGF0YVxuICAgICAgLy8gYXMgaXMuXG4gICAgICBpZiAoIXRoaXMuX2RvUmVjdHNPdmVybGFwKHJlY3QsIGhvbGUpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9hZGRSZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfVxuXG4gICAgICAvLyBMZWZ0IHNwbGl0LlxuICAgICAgaWYgKHJlY3QubGVmdCA8IGhvbGUubGVmdCkge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCBob2xlLmxlZnQgLSByZWN0LmxlZnQsIHJlY3QuaGVpZ2h0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJpZ2h0IHNwbGl0LlxuICAgICAgaWYgKHJlY3QubGVmdCArIHJlY3Qud2lkdGggPiBob2xlLmxlZnQgKyBob2xlLndpZHRoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChcbiAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCxcbiAgICAgICAgICAgIHJlY3QudG9wLFxuICAgICAgICAgICAgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAtIChob2xlLmxlZnQgKyBob2xlLndpZHRoKSxcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBUb3Agc3BsaXQuXG4gICAgICBpZiAocmVjdC50b3AgPCBob2xlLnRvcCkge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCByZWN0LndpZHRoLCBob2xlLnRvcCAtIHJlY3QudG9wKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEJvdHRvbSBzcGxpdC5cbiAgICAgIGlmIChyZWN0LnRvcCArIHJlY3QuaGVpZ2h0ID4gaG9sZS50b3AgKyBob2xlLmhlaWdodCkge1xuICAgICAgICByZXN1bHRzLnB1c2goXG4gICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgIHJlY3QubGVmdCxcbiAgICAgICAgICAgIGhvbGUudG9wICsgaG9sZS5oZWlnaHQsXG4gICAgICAgICAgICByZWN0LndpZHRoLFxuICAgICAgICAgICAgcmVjdC50b3AgKyByZWN0LmhlaWdodCAtIChob2xlLnRvcCArIGhvbGUuaGVpZ2h0KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIHJlY3RhbmdsZXMgb3ZlcmxhcC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGFcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGJcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9kb1JlY3RzT3ZlcmxhcCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0IHx8XG4gICAgICBiLmxlZnQgKyBiLndpZHRoIDw9IGEubGVmdCB8fFxuICAgICAgYS50b3AgKyBhLmhlaWdodCA8PSBiLnRvcCB8fFxuICAgICAgYi50b3AgKyBiLmhlaWdodCA8PSBhLnRvcFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgcmVjdGFuZ2xlIGlzIGZ1bGx5IHdpdGhpbiBhbm90aGVyIHJlY3RhbmdsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGFcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGJcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9pc1JlY3RXaXRoaW5SZWN0ID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiAoXG4gICAgICBhLmxlZnQgPj0gYi5sZWZ0ICYmXG4gICAgICBhLnRvcCA+PSBiLnRvcCAmJlxuICAgICAgYS5sZWZ0ICsgYS53aWR0aCA8PSBiLmxlZnQgKyBiLndpZHRoICYmXG4gICAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wICsgYi5oZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb29wcyB0aHJvdWdoIGFuIGFycmF5IG9mIHJlY3RhbmdsZSBpZHMgYW5kIHJlc2V0cyBhbGwgdGhhdCBhcmUgZnVsbHlcbiAgICogd2l0aGluIGFub3RoZXIgcmVjdGFuZ2xlIGluIHRoZSBhcnJheS4gUmVzZXR0aW5nIGluIHRoaXMgY2FzZSBtZWFucyB0aGF0XG4gICAqIHRoZSByZWN0YW5nbGUgaWQgdmFsdWUgaXMgcmVwbGFjZWQgd2l0aCB6ZXJvLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZFtdfSByZWN0SWRzXG4gICAqIEByZXR1cm5zIHtSZWN0SWRbXX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3B1cmdlUmVjdHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY3RBID0ge307XG4gICAgdmFyIHJlY3RCID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RJZHMpIHtcbiAgICAgIHZhciBpID0gcmVjdElkcy5sZW5ndGg7XG4gICAgICB2YXIgaWk7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWkgPSByZWN0SWRzLmxlbmd0aDtcbiAgICAgICAgaWYgKCFyZWN0SWRzW2ldKSBjb250aW51ZTtcbiAgICAgICAgdGhpcy5fZ2V0UmVjdChyZWN0SWRzW2ldLCByZWN0QSk7XG4gICAgICAgIHdoaWxlIChpaS0tKSB7XG4gICAgICAgICAgaWYgKCFyZWN0SWRzW2lpXSB8fCBpID09PSBpaSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzUmVjdFdpdGhpblJlY3QocmVjdEEsIHRoaXMuX2dldFJlY3QocmVjdElkc1tpaV0sIHJlY3RCKSkpIHtcbiAgICAgICAgICAgIHJlY3RJZHNbaV0gPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWN0SWRzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIFNvcnQgcmVjdGFuZ2xlcyB3aXRoIHRvcC1sZWZ0IGdyYXZpdHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkfSBhSWRcbiAgICogQHBhcmFtIHtSZWN0SWR9IGJJZFxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fc29ydFJlY3RzVG9wTGVmdCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjdEEgPSB7fTtcbiAgICB2YXIgcmVjdEIgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24oYUlkLCBiSWQpIHtcbiAgICAgIHRoaXMuX2dldFJlY3QoYUlkLCByZWN0QSk7XG4gICAgICB0aGlzLl9nZXRSZWN0KGJJZCwgcmVjdEIpO1xuICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICByZXR1cm4gcmVjdEEudG9wIDwgcmVjdEIudG9wID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLnRvcCA+IHJlY3RCLnRvcCA/IDEgOlxuICAgICAgICAgICAgIHJlY3RBLmxlZnQgPCByZWN0Qi5sZWZ0ID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLmxlZnQgPiByZWN0Qi5sZWZ0ID8gMSA6IDA7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogU29ydCByZWN0YW5nbGVzIHdpdGggbGVmdC10b3AgZ3Jhdml0eS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWR9IGFJZFxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYklkXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9zb3J0UmVjdHNMZWZ0VG9wID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWN0QSA9IHt9O1xuICAgIHZhciByZWN0QiA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihhSWQsIGJJZCkge1xuICAgICAgdGhpcy5fZ2V0UmVjdChhSWQsIHJlY3RBKTtcbiAgICAgIHRoaXMuX2dldFJlY3QoYklkLCByZWN0Qik7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIHJldHVybiByZWN0QS5sZWZ0IDwgcmVjdEIubGVmdCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS5sZWZ0ID4gcmVjdEIubGVmdCA/IDEgOlxuICAgICAgICAgICAgIHJlY3RBLnRvcCA8IHJlY3RCLnRvcCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS50b3AgPiByZWN0Qi50b3AgPyAxIDogMDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHZhciBodG1sQ29sbGVjdGlvblR5cGUgPSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nO1xuICB2YXIgbm9kZUxpc3RUeXBlID0gJ1tvYmplY3QgTm9kZUxpc3RdJztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIG5vZGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzTm9kZUxpc3QodmFsKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICByZXR1cm4gdHlwZSA9PT0gaHRtbENvbGxlY3Rpb25UeXBlIHx8IHR5cGUgPT09IG5vZGVMaXN0VHlwZTtcbiAgfVxuXG4gIHZhciBvYmplY3RUeXBlID0gJ29iamVjdCc7XG4gIHZhciBvYmplY3RUb1N0cmluZ1R5cGUgPSAnW29iamVjdCBPYmplY3RdJztcbiAgdmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBvYmplY3RUeXBlICYmIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gb2JqZWN0VG9TdHJpbmdUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgdmFsdWUgdG8gYW4gYXJyYXkgb3IgY2xvbmVzIGFuIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHRhcmdldFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5KHRhcmdldCkge1xuICAgIHJldHVybiBpc05vZGVMaXN0KHRhcmdldCkgPyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQpIDogQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQpO1xuICB9XG5cbiAgdmFyIHBhY2tlciA9IG5ldyBQYWNrZXIoKTtcbiAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXG4gIHZhciBudW1iZXJUeXBlJDEgPSAnbnVtYmVyJztcbiAgdmFyIHN0cmluZ1R5cGUgPSAnc3RyaW5nJztcbiAgdmFyIGluc3RhbnRMYXlvdXQgPSAnaW5zdGFudCc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fFN0cmluZyl9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0gez8oSFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxTdHJpbmcpfSBbb3B0aW9ucy5pdGVtc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNob3dEdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zaG93RWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMudmlzaWJsZVN0eWxlc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmhpZGVEdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5oaWRlRWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuaGlkZGVuU3R5bGVzXVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxPYmplY3QpfSBbb3B0aW9ucy5sYXlvdXRdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LmZpbGxHYXBzPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5ob3Jpem9udGFsPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5hbGlnblJpZ2h0PWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5hbGlnbkJvdHRvbT1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQucm91bmRpbmc9dHJ1ZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxOdW1iZXIpfSBbb3B0aW9ucy5sYXlvdXRPblJlc2l6ZT0xMDBdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0T25Jbml0PXRydWVdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5sYXlvdXREdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5sYXlvdXRFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7P09iamVjdH0gW29wdGlvbnMuc29ydERhdGE9bnVsbF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kcmFnRW5hYmxlZD1mYWxzZV1cbiAgICogQHBhcmFtIHs/SHRtbEVsZW1lbnR9IFtvcHRpb25zLmRyYWdDb250YWluZXI9bnVsbF1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZS5kaXN0YW5jZT0wXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlLmRlbGF5PTBdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58U3RyaW5nKX0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlLmhhbmRsZT1mYWxzZV1cbiAgICogQHBhcmFtIHs/U3RyaW5nfSBbb3B0aW9ucy5kcmFnQXhpc11cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxGdW5jdGlvbil9IFtvcHRpb25zLmRyYWdTb3J0PXRydWVdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3NdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3Muc29ydEludGVydmFsPTEwMF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljcy5taW5EcmFnRGlzdGFuY2U9MTBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3MubWluQm91bmNlQmFja0FuZ2xlPTFdXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IFtvcHRpb25zLmRyYWdTb3J0UHJlZGljYXRlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRQcmVkaWNhdGUudGhyZXNob2xkPTUwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZHJhZ1NvcnRQcmVkaWNhdGUuYWN0aW9uPVwibW92ZVwiXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1JlbGVhc2VEdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5kcmFnUmVsZWFzZUVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRyYWdDc3NQcm9wc11cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlcl1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuZW5hYmxlZD1mYWxzZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5kdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuZWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmNyZWF0ZUVsZW1lbnQ9bnVsbF1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5vbkNyZWF0ZT1udWxsXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLm9uUmVtb3ZlPW51bGxdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5jb250YWluZXJDbGFzcz1cIm11dXJpXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtQ2xhc3M9XCJtdXVyaS1pdGVtXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtVmlzaWJsZUNsYXNzPVwibXV1cmktaXRlbS12aXNpYmxlXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtSGlkZGVuQ2xhc3M9XCJtdXVyaS1pdGVtLWhpZGRlblwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVBvc2l0aW9uaW5nQ2xhc3M9XCJtdXVyaS1pdGVtLXBvc2l0aW9uaW5nXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtRHJhZ2dpbmdDbGFzcz1cIm11dXJpLWl0ZW0tZHJhZ2dpbmdcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1SZWxlYXNpbmdDbGFzcz1cIm11dXJpLWl0ZW0tcmVsZWFzaW5nXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtUGxhY2Vob2xkZXJDbGFzcz1cIm11dXJpLWl0ZW0tcGxhY2Vob2xkZXJcIl1cbiAgICovXG5cbiAgZnVuY3Rpb24gR3JpZChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGluc3QgPSB0aGlzO1xuICAgIHZhciBzZXR0aW5ncztcbiAgICB2YXIgaXRlbXM7XG4gICAgdmFyIGxheW91dE9uUmVzaXplO1xuXG4gICAgLy8gQWxsb3cgcGFzc2luZyBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZy4gU3RvcmUgZWxlbWVudCBmb3IgaW5zdGFuY2UuXG4gICAgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQgPVxuICAgICAgdHlwZW9mIGVsZW1lbnQgPT09IHN0cmluZ1R5cGUgPyB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgaXMgbm90IGJvZHkgZWxlbWVudCBvciBkb2VzIG5vdFxuICAgIC8vIGV4aXN0IHdpdGhpbiB0aGUgYm9keSBlbGVtZW50LlxuICAgIHZhciBpc0VsZW1lbnRJbkRvbSA9IGVsZW1lbnQuZ2V0Um9vdE5vZGVcbiAgICAgID8gZWxlbWVudC5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID09PSBkb2N1bWVudFxuICAgICAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keS5jb250YWlucyhlbGVtZW50KTtcbiAgICBpZiAoIWlzRWxlbWVudEluRG9tIHx8IGVsZW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29udGFpbmVyIGVsZW1lbnQgbXVzdCBiZSBhbiBleGlzdGluZyBET00gZWxlbWVudCcpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBpbnN0YW5jZSBzZXR0aW5ncyBieSBtZXJnaW5nIHRoZSBvcHRpb25zIHdpdGggZGVmYXVsdCBvcHRpb25zLlxuICAgIHNldHRpbmdzID0gdGhpcy5fc2V0dGluZ3MgPSBtZXJnZVNldHRpbmdzKEdyaWQuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgLy8gU2FuaXRpemUgZHJhZ1NvcnQgc2V0dGluZy5cbiAgICBpZiAoIWlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1NvcnQpKSB7XG4gICAgICBzZXR0aW5ncy5kcmFnU29ydCA9ICEhc2V0dGluZ3MuZHJhZ1NvcnQ7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIGlkIGFuZCBzdG9yZSBpdCB0byB0aGUgZ3JpZCBpbnN0YW5jZXMgY29sbGVjdGlvbi5cbiAgICB0aGlzLl9pZCA9IGNyZWF0ZVVpZCgpO1xuICAgIGdyaWRJbnN0YW5jZXNbdGhpcy5faWRdID0gaW5zdDtcblxuICAgIC8vIERlc3Ryb3llZCBmbGFnLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAvLyBUaGUgbGF5b3V0IG9iamVjdCAobXV0YXRlZCBvbiBldmVyeSBsYXlvdXQpLlxuICAgIHRoaXMuX2xheW91dCA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgc2xvdHM6IFtdLFxuICAgICAgc2V0V2lkdGg6IGZhbHNlLFxuICAgICAgc2V0SGVpZ2h0OiBmYWxzZSxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBwcml2YXRlIEVtaXR0ZXIgaW5zdGFuY2UuXG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG5cbiAgICAvLyBBZGQgY29udGFpbmVyIGVsZW1lbnQncyBjbGFzcyBuYW1lLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLmNvbnRhaW5lckNsYXNzKTtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIGl0ZW1zLlxuICAgIHRoaXMuX2l0ZW1zID0gW107XG4gICAgaXRlbXMgPSBzZXR0aW5ncy5pdGVtcztcbiAgICBpZiAodHlwZW9mIGl0ZW1zID09PSBzdHJpbmdUeXBlKSB7XG4gICAgICB0b0FycmF5KGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24oaXRlbUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGl0ZW1zID09PSAnKicgfHwgZWxlbWVudE1hdGNoZXMoaXRlbUVsZW1lbnQsIGl0ZW1zKSkge1xuICAgICAgICAgIGluc3QuX2l0ZW1zLnB1c2gobmV3IEl0ZW0oaW5zdCwgaXRlbUVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSB8fCBpc05vZGVMaXN0KGl0ZW1zKSkge1xuICAgICAgdGhpcy5faXRlbXMgPSB0b0FycmF5KGl0ZW1zKS5tYXAoZnVuY3Rpb24oaXRlbUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJdGVtKGluc3QsIGl0ZW1FbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIElmIGxheW91dE9uUmVzaXplIG9wdGlvbiBpcyBhIHZhbGlkIG51bWJlciBzYW5pdGl6ZSBpdCBhbmQgYmluZCB0aGUgcmVzaXplXG4gICAgLy8gaGFuZGxlci5cbiAgICBsYXlvdXRPblJlc2l6ZSA9IHNldHRpbmdzLmxheW91dE9uUmVzaXplO1xuICAgIGlmICh0eXBlb2YgbGF5b3V0T25SZXNpemUgIT09IG51bWJlclR5cGUkMSkge1xuICAgICAgbGF5b3V0T25SZXNpemUgPSBsYXlvdXRPblJlc2l6ZSA9PT0gdHJ1ZSA/IDAgOiAtMTtcbiAgICB9XG4gICAgaWYgKGxheW91dE9uUmVzaXplID49IDApIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgKGluc3QuX3Jlc2l6ZUhhbmRsZXIgPSBkZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBpbnN0LnJlZnJlc2hJdGVtcygpLmxheW91dCgpO1xuICAgICAgICB9LCBsYXlvdXRPblJlc2l6ZSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIExheW91dCBvbiBpbml0IGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoc2V0dGluZ3MubGF5b3V0T25Jbml0KSB7XG4gICAgICB0aGlzLmxheW91dCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3BlcnRpZXNcbiAgICogKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbVxuICAgKi9cbiAgR3JpZC5JdGVtID0gSXRlbTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtTGF5b3V0XG4gICAqL1xuICBHcmlkLkl0ZW1MYXlvdXQgPSBJdGVtTGF5b3V0O1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1WaXNpYmlsaXR5XG4gICAqL1xuICBHcmlkLkl0ZW1WaXNpYmlsaXR5ID0gSXRlbVZpc2liaWxpdHk7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbU1pZ3JhdGVcbiAgICovXG4gIEdyaWQuSXRlbU1pZ3JhdGUgPSBJdGVtTWlncmF0ZTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtQW5pbWF0ZVxuICAgKi9cbiAgR3JpZC5JdGVtQW5pbWF0ZSA9IEl0ZW1BbmltYXRlO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1EcmFnXG4gICAqL1xuICBHcmlkLkl0ZW1EcmFnID0gSXRlbURyYWc7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbVJlbGVhc2VcbiAgICovXG4gIEdyaWQuSXRlbVJlbGVhc2UgPSBJdGVtUmVsZWFzZTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtRHJhZ1BsYWNlaG9sZGVyXG4gICAqL1xuICBHcmlkLkl0ZW1EcmFnUGxhY2Vob2xkZXIgPSBJdGVtRHJhZ1BsYWNlaG9sZGVyO1xuXG4gIC8qKlxuICAgKiBAc2VlIEVtaXR0ZXJcbiAgICovXG4gIEdyaWQuRW1pdHRlciA9IEVtaXR0ZXI7XG5cbiAgLyoqXG4gICAqIEBzZWUgRHJhZ2dlclxuICAgKi9cbiAgR3JpZC5EcmFnZ2VyID0gRHJhZ2dlcjtcblxuICAvKipcbiAgICogQHNlZSBQYWNrZXJcbiAgICovXG4gIEdyaWQuUGFja2VyID0gUGFja2VyO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG9wdGlvbnMgZm9yIEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWRcbiAgICovXG4gIEdyaWQuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gSXRlbSBlbGVtZW50c1xuICAgIGl0ZW1zOiAnKicsXG5cbiAgICAvLyBEZWZhdWx0IHNob3cgYW5pbWF0aW9uXG4gICAgc2hvd0R1cmF0aW9uOiAzMDAsXG4gICAgc2hvd0Vhc2luZzogJ2Vhc2UnLFxuXG4gICAgLy8gRGVmYXVsdCBoaWRlIGFuaW1hdGlvblxuICAgIGhpZGVEdXJhdGlvbjogMzAwLFxuICAgIGhpZGVFYXNpbmc6ICdlYXNlJyxcblxuICAgIC8vIEl0ZW0ncyB2aXNpYmxlL2hpZGRlbiBzdGF0ZSBzdHlsZXNcbiAgICB2aXNpYmxlU3R5bGVzOiB7XG4gICAgICBvcGFjaXR5OiAnMScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICB9LFxuICAgIGhpZGRlblN0eWxlczoge1xuICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC41KSdcbiAgICB9LFxuXG4gICAgLy8gTGF5b3V0XG4gICAgbGF5b3V0OiB7XG4gICAgICBmaWxsR2FwczogZmFsc2UsXG4gICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgIGFsaWduUmlnaHQ6IGZhbHNlLFxuICAgICAgYWxpZ25Cb3R0b206IGZhbHNlLFxuICAgICAgcm91bmRpbmc6IHRydWVcbiAgICB9LFxuICAgIGxheW91dE9uUmVzaXplOiAxMDAsXG4gICAgbGF5b3V0T25Jbml0OiB0cnVlLFxuICAgIGxheW91dER1cmF0aW9uOiAzMDAsXG4gICAgbGF5b3V0RWFzaW5nOiAnZWFzZScsXG5cbiAgICAvLyBTb3J0aW5nXG4gICAgc29ydERhdGE6IG51bGwsXG5cbiAgICAvLyBEcmFnICYgRHJvcFxuICAgIGRyYWdFbmFibGVkOiBmYWxzZSxcbiAgICBkcmFnQ29udGFpbmVyOiBudWxsLFxuICAgIGRyYWdTdGFydFByZWRpY2F0ZToge1xuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBkZWxheTogMCxcbiAgICAgIGhhbmRsZTogZmFsc2VcbiAgICB9LFxuICAgIGRyYWdBeGlzOiBudWxsLFxuICAgIGRyYWdTb3J0OiB0cnVlLFxuICAgIGRyYWdTb3J0SGV1cmlzdGljczoge1xuICAgICAgc29ydEludGVydmFsOiAxMDAsXG4gICAgICBtaW5EcmFnRGlzdGFuY2U6IDEwLFxuICAgICAgbWluQm91bmNlQmFja0FuZ2xlOiAxXG4gICAgfSxcbiAgICBkcmFnU29ydFByZWRpY2F0ZToge1xuICAgICAgdGhyZXNob2xkOiA1MCxcbiAgICAgIGFjdGlvbjogYWN0aW9uTW92ZVxuICAgIH0sXG4gICAgZHJhZ1JlbGVhc2VEdXJhdGlvbjogMzAwLFxuICAgIGRyYWdSZWxlYXNlRWFzaW5nOiAnZWFzZScsXG4gICAgZHJhZ0Nzc1Byb3BzOiB7XG4gICAgICB0b3VjaEFjdGlvbjogJ25vbmUnLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgdXNlckRyYWc6ICdub25lJyxcbiAgICAgIHRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICB0b3VjaENhbGxvdXQ6ICdub25lJyxcbiAgICAgIGNvbnRlbnRab29taW5nOiAnbm9uZSdcbiAgICB9LFxuICAgIGRyYWdQbGFjZWhvbGRlcjoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnZWFzZScsXG4gICAgICBjcmVhdGVFbGVtZW50OiBudWxsLFxuICAgICAgb25DcmVhdGU6IG51bGwsXG4gICAgICBvblJlbW92ZTogbnVsbFxuICAgIH0sXG5cbiAgICAvLyBDbGFzc25hbWVzXG4gICAgY29udGFpbmVyQ2xhc3M6ICdtdXVyaScsXG4gICAgaXRlbUNsYXNzOiAnbXV1cmktaXRlbScsXG4gICAgaXRlbVZpc2libGVDbGFzczogJ211dXJpLWl0ZW0tc2hvd24nLFxuICAgIGl0ZW1IaWRkZW5DbGFzczogJ211dXJpLWl0ZW0taGlkZGVuJyxcbiAgICBpdGVtUG9zaXRpb25pbmdDbGFzczogJ211dXJpLWl0ZW0tcG9zaXRpb25pbmcnLFxuICAgIGl0ZW1EcmFnZ2luZ0NsYXNzOiAnbXV1cmktaXRlbS1kcmFnZ2luZycsXG4gICAgaXRlbVJlbGVhc2luZ0NsYXNzOiAnbXV1cmktaXRlbS1yZWxlYXNpbmcnLFxuICAgIGl0ZW1QbGFjZWhvbGRlckNsYXNzOiAnbXV1cmktaXRlbS1wbGFjZWhvbGRlcidcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQmluZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGl0ZW1zLiBPcHRpb25hbGx5IHlvdSBjYW4gcHJvdmlkZSBzcGVjaWZpYyB0YXJnZXRzIChlbGVtZW50cyBhbmRcbiAgICogaW5kaWNlcykuIE5vdGUgdGhhdCB0aGUgcmV0dXJuZWQgYXJyYXkgaXMgbm90IHRoZSBzYW1lIG9iamVjdCB1c2VkIGJ5IHRoZVxuICAgKiBpbnN0YW5jZSBzbyBtb2RpZnlpbmcgaXQgd2lsbCBub3QgYWZmZWN0IGluc3RhbmNlJ3MgaXRlbXMuIEFsbCBpdGVtcyB0aGF0XG4gICAqIGFyZSBub3QgZm91bmQgYXJlIG9taXR0ZWQgZnJvbSB0aGUgcmV0dXJuZWQgYXJyYXkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBbdGFyZ2V0c11cbiAgICogQHJldHVybnMge0l0ZW1bXX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmdldEl0ZW1zID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIC8vIFJldHVybiBhbGwgaXRlbXMgaW1tZWRpYXRlbHkgaWYgbm8gdGFyZ2V0cyB3ZXJlIHByb3ZpZGVkIG9yIGlmIHRoZVxuICAgIC8vIGluc3RhbmNlIGlzIGRlc3Ryb3llZC5cbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgKCF0YXJnZXRzICYmIHRhcmdldHMgIT09IDApKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IFtdO1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRvQXJyYXkodGFyZ2V0cyk7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBJZiB0YXJnZXQgaXRlbXMgYXJlIGRlZmluZWQgcmV0dXJuIGZpbHRlcmVkIHJlc3VsdHMuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gdGhpcy5fZ2V0SXRlbSh0YXJnZXRJdGVtc1tpXSk7XG4gICAgICBpdGVtICYmIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY2FjaGVkIGRpbWVuc2lvbnMgb2YgdGhlIGluc3RhbmNlJ3MgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBbaXRlbXNdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUucmVmcmVzaEl0ZW1zID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHRhcmdldHMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXRzW2ldLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHNvcnQgZGF0YSBvZiB0aGUgaW5zdGFuY2UncyBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IFtpdGVtc11cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5yZWZyZXNoU29ydERhdGEgPSBmdW5jdGlvbihpdGVtcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0SXRlbXNbaV0uX3JlZnJlc2hTb3J0RGF0YSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZSB0aGUgaXRlbSBlbGVtZW50cyB0byBtYXRjaCB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIHRoZSBET00uXG4gICAqIFRoaXMgY29tZXMgaGFuZHkgaWYgeW91IG5lZWQgdG8ga2VlcCB0aGUgRE9NIHN0cnVjdHVyZSBtYXRjaGVkIHdpdGggdGhlXG4gICAqIG9yZGVyIG9mIHRoZSBpdGVtcy4gTm90ZSB0aGF0IGlmIGFuIGl0ZW0ncyBlbGVtZW50IGlzIG5vdCBjdXJyZW50bHkgYSBjaGlsZFxuICAgKiBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgKGlmIGl0IGlzIGRyYWdnZWQgZm9yIGV4YW1wbGUpIGl0IGlzIGlnbm9yZWQgYW5kXG4gICAqIGxlZnQgdW50b3VjaGVkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnN5bmNocm9uaXplID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIHZhciBmcmFnbWVudDtcbiAgICB2YXIgZWxlbWVudDtcbiAgICB2YXIgaTtcblxuICAgIC8vIEFwcGVuZCBhbGwgZWxlbWVudHMgaW4gb3JkZXIgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50ID0gaXRlbXNbaV0uX2VsZW1lbnQ7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgPT09IGNvbnRhaW5lcikge1xuICAgICAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnQgfHwgd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhZ21lbnQpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBzeW5jaHJvbml6ZSBldmVudC5cbiAgICB0aGlzLl9lbWl0KGV2ZW50U3luY2hyb25pemUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgYXBwbHkgaXRlbSBwb3NpdGlvbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7TGF5b3V0Q2FsbGJhY2t9IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaW5zdCA9IHRoaXM7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLl91cGRhdGVMYXlvdXQoKTtcbiAgICB2YXIgbGF5b3V0SWQgPSBsYXlvdXQuaWQ7XG4gICAgdmFyIGl0ZW1zTGVuZ3RoID0gbGF5b3V0Lml0ZW1zLmxlbmd0aDtcbiAgICB2YXIgY291bnRlciA9IGl0ZW1zTGVuZ3RoO1xuICAgIHZhciBpc0JvcmRlckJveDtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIFRoZSBmaW5pc2ggZnVuY3Rpb24sIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgY2hlY2tpbmcgaWYgYWxsIHRoZSBpdGVtc1xuICAgIC8vIGhhdmUgbGFpZCBvdXQgeWV0LiBBZnRlciBhbGwgaXRlbXMgaGF2ZSBmaW5pc2hlZCB0aGVpciBhbmltYXRpb25zIGNhbGxcbiAgICAvLyBjYWxsYmFjayBhbmQgZW1pdCBsYXlvdXRFbmQgZXZlbnQuIE9ubHkgZW1pdCBsYXlvdXRFbmQgZXZlbnQgaWYgdGhlcmVcbiAgICAvLyBoYXNuJ3QgYmVlbiBhIG5ldyBsYXlvdXQgY2FsbCBkdXJpbmcgdGhpcyBsYXlvdXQuXG4gICAgZnVuY3Rpb24gdHJ5RmluaXNoKCkge1xuICAgICAgaWYgKC0tY291bnRlciA+IDApIHJldHVybjtcblxuICAgICAgdmFyIGhhc0xheW91dENoYW5nZWQgPSBpbnN0Ll9sYXlvdXQuaWQgIT09IGxheW91dElkO1xuICAgICAgdmFyIGNhbGxiYWNrID0gaXNGdW5jdGlvbihpbnN0YW50KSA/IGluc3RhbnQgOiBvbkZpbmlzaDtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIGNhbGxiYWNrKGhhc0xheW91dENoYW5nZWQsIGxheW91dC5pdGVtcy5zbGljZSgwKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFzTGF5b3V0Q2hhbmdlZCAmJiBpbnN0Ll9oYXNMaXN0ZW5lcnMoZXZlbnRMYXlvdXRFbmQpKSB7XG4gICAgICAgIGluc3QuX2VtaXQoZXZlbnRMYXlvdXRFbmQsIGxheW91dC5pdGVtcy5zbGljZSgwKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgZ3JpZCdzIHdpZHRoIG9yIGhlaWdodCB3YXMgbW9kaWZpZWQsIHdlIG5lZWQgdG8gdXBkYXRlIGl0J3MgY2FjaGVkXG4gICAgLy8gZGltZW5zaW9ucy4gQWxzbyBrZWVwIGluIG1pbmQgdGhhdCBncmlkJ3MgY2FjaGVkIHdpZHRoL2hlaWdodCBzaG91bGRcbiAgICAvLyBhbHdheXMgZXF1YWwgdG8gd2hhdCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHdvdWxkIHJldHVybiwgc29cbiAgICAvLyB0aGVyZWZvcmUgd2UgbmVlZCB0byBhZGQgdGhlIGdyaWQgZWxlbWVudCdzIGJvcmRlcnMgdG8gdGhlIGRpbWVuc2lvbnMgaWZcbiAgICAvLyBpdCdzIGJveC1zaXppbmcgaXMgYm9yZGVyLWJveC4gTm90ZSB0aGF0IHdlIHN1cHBvcnQgcHJvdmlkaW5nIHRoZVxuICAgIC8vIGRpbWVuc2lvbnMgYXMgYSBzdHJpbmcgaGVyZSB0b28gc28gdGhhdCBvbmUgY2FuIGRlZmluZSB0aGUgdW5pdCBvZiB0aGVcbiAgICAvLyBkaW1lbnNpb25zLCBpbiB3aGljaCBjYXNlIHdlIGRvbid0IGRvIHRoZSBib3JkZXItYm94IGNoZWNrLlxuICAgIGlmIChcbiAgICAgIChsYXlvdXQuc2V0SGVpZ2h0ICYmIHR5cGVvZiBsYXlvdXQuaGVpZ2h0ID09PSBudW1iZXJUeXBlJDEpIHx8XG4gICAgICAobGF5b3V0LnNldFdpZHRoICYmIHR5cGVvZiBsYXlvdXQud2lkdGggPT09IG51bWJlclR5cGUkMSlcbiAgICApIHtcbiAgICAgIGlzQm9yZGVyQm94ID0gZ2V0U3R5bGUoZWxlbWVudCwgJ2JveC1zaXppbmcnKSA9PT0gJ2JvcmRlci1ib3gnO1xuICAgIH1cbiAgICBpZiAobGF5b3V0LnNldEhlaWdodCkge1xuICAgICAgaWYgKHR5cGVvZiBsYXlvdXQuaGVpZ2h0ID09PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPVxuICAgICAgICAgIChpc0JvcmRlckJveCA/IGxheW91dC5oZWlnaHQgKyB0aGlzLl9ib3JkZXJUb3AgKyB0aGlzLl9ib3JkZXJCb3R0b20gOiBsYXlvdXQuaGVpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGxheW91dC5oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXlvdXQuc2V0V2lkdGgpIHtcbiAgICAgIGlmICh0eXBlb2YgbGF5b3V0LndpZHRoID09PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgKGlzQm9yZGVyQm94ID8gbGF5b3V0LndpZHRoICsgdGhpcy5fYm9yZGVyTGVmdCArIHRoaXMuX2JvcmRlclJpZ2h0IDogbGF5b3V0LndpZHRoKSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gbGF5b3V0LndpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVtaXQgbGF5b3V0U3RhcnQgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIGlzIGludGVudGlvbmFsbHkgZW1pdHRlZCBhZnRlciB0aGVcbiAgICAvLyBjb250YWluZXIgZWxlbWVudCdzIGRpbWVuc2lvbnMgYXJlIHNldCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlcmUgd291bGQgYmVcbiAgICAvLyBubyBob29rIGZvciByZWFjdGluZyB0byBjb250YWluZXIgZGltZW5zaW9uIGNoYW5nZXMuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudExheW91dFN0YXJ0KSkge1xuICAgICAgdGhpcy5fZW1pdChldmVudExheW91dFN0YXJ0LCBsYXlvdXQuaXRlbXMuc2xpY2UoMCkpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBpdGVtcyBsZXQncyBmaW5pc2ggcXVpY2tseS5cbiAgICBpZiAoIWl0ZW1zTGVuZ3RoKSB7XG4gICAgICB0cnlGaW5pc2goKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBpdGVtcyBsZXQncyBwb3NpdGlvbiB0aGVtLlxuICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtc0xlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gbGF5b3V0Lml0ZW1zW2ldO1xuICAgICAgaWYgKCFpdGVtKSBjb250aW51ZTtcblxuICAgICAgLy8gVXBkYXRlIGl0ZW0ncyBwb3NpdGlvbi5cbiAgICAgIGl0ZW0uX2xlZnQgPSBsYXlvdXQuc2xvdHNbaSAqIDJdO1xuICAgICAgaXRlbS5fdG9wID0gbGF5b3V0LnNsb3RzW2kgKiAyICsgMV07XG5cbiAgICAgIC8vIExheW91dCBpdGVtIGlmIGl0IGlzIG5vdCBkcmFnZ2VkLlxuICAgICAgaXRlbS5pc0RyYWdnaW5nKCkgPyB0cnlGaW5pc2goKSA6IGl0ZW0uX2xheW91dC5zdGFydChpbnN0YW50ID09PSB0cnVlLCB0cnlGaW5pc2gpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGl0ZW1zIGJ5IHByb3ZpZGluZyB0aGUgZWxlbWVudHMgeW91IHdpc2ggdG8gYWRkIHRvIHRoZSBpbnN0YW5jZSBhbmRcbiAgICogb3B0aW9uYWxseSBwcm92aWRlIHRoZSBpbmRleCB3aGVyZSB5b3Ugd2FudCB0aGUgaXRlbXMgdG8gYmUgaW5zZXJ0ZWQgaW50by5cbiAgICogQWxsIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBhbHJlYWR5IGNoaWxkcmVuIG9mIHRoZSBjb250YWluZXIgZWxlbWVudCB3aWxsIGJlXG4gICAqIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50LiBJZiBhbiBlbGVtZW50IGhhcyBpdCdzIENTU1xuICAgKiBkaXNwbGF5IHByb3BlcnR5IHNldCB0byBcIm5vbmVcIiBpdCB3aWxsIGJlIG1hcmtlZCBhcyBpbmFjdGl2ZSBkdXJpbmcgdGhlXG4gICAqIGluaXRpYXRpb24gcHJvY2Vzcy4gQXMgbG9uZyBhcyB0aGUgaXRlbSBpcyBpbmFjdGl2ZSBpdCB3aWxsIG5vdCBiZSBwYXJ0IG9mXG4gICAqIHRoZSBsYXlvdXQsIGJ1dCBpdCB3aWxsIHJldGFpbiBpdCdzIGluZGV4LiBZb3UgY2FuIGFjdGl2YXRlIGl0ZW1zIGF0IGFueVxuICAgKiBwb2ludCB3aXRoIGdyaWQuc2hvdygpIG1ldGhvZC4gVGhpcyBtZXRob2Qgd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGxcbiAgICogZ3JpZC5sYXlvdXQoKSBpZiBvbmUgb3IgbW9yZSBvZiB0aGUgYWRkZWQgZWxlbWVudHMgYXJlIHZpc2libGUuIElmIG9ubHlcbiAgICogaGlkZGVuIGl0ZW1zIGFyZSBhZGRlZCBubyBsYXlvdXQgd2lsbCBiZSBjYWxsZWQuIEFsbCB0aGUgbmV3IHZpc2libGUgaXRlbXNcbiAgICogYXJlIHBvc2l0aW9uZWQgd2l0aG91dCBhbmltYXRpb24gZHVyaW5nIHRoZWlyIGZpcnN0IGxheW91dC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8SFRNTEVsZW1lbnRbXSl9IGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmluZGV4PS0xXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmlzQWN0aXZlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7SXRlbVtdfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZWxlbWVudHMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIWVsZW1lbnRzKSByZXR1cm4gW107XG5cbiAgICB2YXIgbmV3SXRlbXMgPSB0b0FycmF5KGVsZW1lbnRzKTtcbiAgICBpZiAoIW5ld0l0ZW1zLmxlbmd0aCkgcmV0dXJuIG5ld0l0ZW1zO1xuXG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIHZhciBuZWVkc0xheW91dCA9IGZhbHNlO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gTWFwIHByb3ZpZGVkIGVsZW1lbnRzIGludG8gbmV3IGdyaWQgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gbmV3IEl0ZW0odGhpcywgbmV3SXRlbXNbaV0sIG9wdHMuaXNBY3RpdmUpO1xuICAgICAgbmV3SXRlbXNbaV0gPSBpdGVtO1xuXG4gICAgICAvLyBJZiB0aGUgaXRlbSB0byBiZSBhZGRlZCBpcyBhY3RpdmUsIHdlIG5lZWQgdG8gZG8gYSBsYXlvdXQuIEFsc28sIHdlXG4gICAgICAvLyBuZWVkIHRvIG1hcmsgdGhlIGl0ZW0gd2l0aCB0aGUgc2tpcE5leHRBbmltYXRpb24gZmxhZyB0byBtYWtlIGl0XG4gICAgICAvLyBwb3NpdGlvbiBpbnN0YW50bHkgKHdpdGhvdXQgYW5pbWF0aW9uKSBkdXJpbmcgdGhlIG5leHQgbGF5b3V0LiBXaXRob3V0XG4gICAgICAvLyB0aGUgaGFjayB0aGUgaXRlbSB3b3VsZCBhbmltYXRlIHRvIGl0J3MgbmV3IHBvc2l0aW9uIGZyb20gdGhlIG5vcnRod2VzdFxuICAgICAgLy8gY29ybmVyIG9mIHRoZSBncmlkLCB3aGljaCBmZWVscyBhIGJpdCBidWdneSAoaW1obykuXG4gICAgICBpZiAoaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgICAgbmVlZHNMYXlvdXQgPSB0cnVlO1xuICAgICAgICBpdGVtLl9sYXlvdXQuX3NraXBOZXh0QW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIG5ldyBpdGVtcyB0byB0aGUgaXRlbXMgY29sbGVjdGlvbiB0byBjb3JyZWN0IGluZGV4LlxuICAgIGFycmF5SW5zZXJ0KGl0ZW1zLCBuZXdJdGVtcywgb3B0cy5pbmRleCk7XG5cbiAgICAvLyBFbWl0IGFkZCBldmVudC5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50QWRkKSkge1xuICAgICAgdGhpcy5fZW1pdChldmVudEFkZCwgbmV3SXRlbXMuc2xpY2UoMCkpO1xuICAgIH1cblxuICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgaWYgKG5lZWRzTGF5b3V0ICYmIGxheW91dCkge1xuICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdJdGVtcztcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGl0ZW1zIGZyb20gdGhlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnJlbW92ZUVsZW1lbnRzPWZhbHNlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7SXRlbVtdfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oaXRlbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBuZWVkc0xheW91dCA9IGZhbHNlO1xuICAgIHZhciBhbGxJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBpbmRpdmlkdWFsIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IHRhcmdldEl0ZW1zW2ldO1xuICAgICAgaW5kaWNlcy5wdXNoKGFsbEl0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgICAgaWYgKGl0ZW0uX2lzQWN0aXZlKSBuZWVkc0xheW91dCA9IHRydWU7XG4gICAgICBpdGVtLl9kZXN0cm95KG9wdHMucmVtb3ZlRWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgcmVtb3ZlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRSZW1vdmUpKSB7XG4gICAgICB0aGlzLl9lbWl0KGV2ZW50UmVtb3ZlLCB0YXJnZXRJdGVtcy5zbGljZSgwKSwgaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICBpZiAobmVlZHNMYXlvdXQgJiYgbGF5b3V0KSB7XG4gICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEl0ZW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93IGluc3RhbmNlIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7U2hvd0NhbGxiYWNrfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oaXRlbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3NldEl0ZW1zVmlzaWJpbGl0eShpdGVtcywgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGUgaW5zdGFuY2UgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtIaWRlQ2FsbGJhY2t9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fc2V0SXRlbXNWaXNpYmlsaXR5KGl0ZW1zLCBmYWxzZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbHRlciBpdGVtcy4gRXhwZWN0cyBhdCBsZWFzdCBvbmUgYXJndW1lbnQsIGEgcHJlZGljYXRlLCB3aGljaCBzaG91bGQgYmVcbiAgICogZWl0aGVyIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmcuIFRoZSBwcmVkaWNhdGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWQgZm9yIGV2ZXJ5XG4gICAqIGl0ZW0gaW4gdGhlIGluc3RhbmNlLiBJZiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmVkaWNhdGUgaXMgdHJ1dGh5IHRoZVxuICAgKiBpdGVtIGluIHF1ZXN0aW9uIHdpbGwgYmUgc2hvd24gYW5kIG90aGVyd2lzZSBoaWRkZW4uIFRoZSBwcmVkaWNhdGUgY2FsbGJhY2tcbiAgICogcmVjZWl2ZXMgdGhlIGl0ZW0gaW5zdGFuY2UgYXMgaXQncyBhcmd1bWVudC4gSWYgdGhlIHByZWRpY2F0ZSBpcyBhIHN0cmluZ1xuICAgKiBpdCBpcyBjb25zaWRlcmVkIHRvIGJlIGEgc2VsZWN0b3IgYW5kIGl0IGlzIGNoZWNrZWQgYWdhaW5zdCBldmVyeSBpdGVtXG4gICAqIGVsZW1lbnQgaW4gdGhlIGluc3RhbmNlIHdpdGggdGhlIG5hdGl2ZSBlbGVtZW50Lm1hdGNoZXMoKSBtZXRob2QuIEFsbCB0aGVcbiAgICogbWF0Y2hpbmcgaXRlbXMgd2lsbCBiZSBzaG93biBhbmQgb3RoZXJzIGhpZGRlbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoRnVuY3Rpb258U3RyaW5nKX0gcHJlZGljYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0ZpbHRlckNhbGxiYWNrfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihwcmVkaWNhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2l0ZW1zLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbXNUb1Nob3cgPSBbXTtcbiAgICB2YXIgaXRlbXNUb0hpZGUgPSBbXTtcbiAgICB2YXIgaXNQcmVkaWNhdGVTdHJpbmcgPSB0eXBlb2YgcHJlZGljYXRlID09PSBzdHJpbmdUeXBlO1xuICAgIHZhciBpc1ByZWRpY2F0ZUZuID0gaXNGdW5jdGlvbihwcmVkaWNhdGUpO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBpc0luc3RhbnQgPSBvcHRzLmluc3RhbnQgPT09IHRydWU7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBvbkZpbmlzaCA9IGlzRnVuY3Rpb24ob3B0cy5vbkZpbmlzaCkgPyBvcHRzLm9uRmluaXNoIDogbnVsbDtcbiAgICB2YXIgdHJ5RmluaXNoQ291bnRlciA9IC0xO1xuICAgIHZhciB0cnlGaW5pc2ggPSBub29wO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBvbkZpbmlzaCBjYWxsYmFjaywgbGV0J3MgY3JlYXRlIHByb3BlciB0cnlGaW5pc2ggY2FsbGJhY2suXG4gICAgaWYgKG9uRmluaXNoKSB7XG4gICAgICB0cnlGaW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgKyt0cnlGaW5pc2hDb3VudGVyICYmIG9uRmluaXNoKGl0ZW1zVG9TaG93LnNsaWNlKDApLCBpdGVtc1RvSGlkZS5zbGljZSgwKSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIENoZWNrIHdoaWNoIGl0ZW1zIG5lZWQgdG8gYmUgc2hvd24gYW5kIHdoaWNoIGhpZGRlbi5cbiAgICBpZiAoaXNQcmVkaWNhdGVGbiB8fCBpc1ByZWRpY2F0ZVN0cmluZykge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSB0aGlzLl9pdGVtc1tpXTtcbiAgICAgICAgaWYgKGlzUHJlZGljYXRlRm4gPyBwcmVkaWNhdGUoaXRlbSkgOiBlbGVtZW50TWF0Y2hlcyhpdGVtLl9lbGVtZW50LCBwcmVkaWNhdGUpKSB7XG4gICAgICAgICAgaXRlbXNUb1Nob3cucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtc1RvSGlkZS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hvdyBpdGVtcyB0aGF0IG5lZWQgdG8gYmUgc2hvd24uXG4gICAgaWYgKGl0ZW1zVG9TaG93Lmxlbmd0aCkge1xuICAgICAgdGhpcy5zaG93KGl0ZW1zVG9TaG93LCB7XG4gICAgICAgIGluc3RhbnQ6IGlzSW5zdGFudCxcbiAgICAgICAgb25GaW5pc2g6IHRyeUZpbmlzaCxcbiAgICAgICAgbGF5b3V0OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeUZpbmlzaCgpO1xuICAgIH1cblxuICAgIC8vIEhpZGUgaXRlbXMgdGhhdCBuZWVkIHRvIGJlIGhpZGRlbi5cbiAgICBpZiAoaXRlbXNUb0hpZGUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmhpZGUoaXRlbXNUb0hpZGUsIHtcbiAgICAgICAgaW5zdGFudDogaXNJbnN0YW50LFxuICAgICAgICBvbkZpbmlzaDogdHJ5RmluaXNoLFxuICAgICAgICBsYXlvdXQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5RmluaXNoKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGFueSBpdGVtcyB0byBmaWx0ZXIuXG4gICAgaWYgKGl0ZW1zVG9TaG93Lmxlbmd0aCB8fCBpdGVtc1RvSGlkZS5sZW5ndGgpIHtcbiAgICAgIC8vIEVtaXQgZmlsdGVyIGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudEZpbHRlcikpIHtcbiAgICAgICAgdGhpcy5fZW1pdChldmVudEZpbHRlciwgaXRlbXNUb1Nob3cuc2xpY2UoMCksIGl0ZW1zVG9IaWRlLnNsaWNlKDApKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTb3J0IGl0ZW1zLiBUaGVyZSBhcmUgdGhyZWUgd2F5cyB0byBzb3J0IHRoZSBpdGVtcy4gVGhlIGZpcnN0IGlzIHNpbXBseSBieVxuICAgKiBwcm92aWRpbmcgYSBmdW5jdGlvbiBhcyB0aGUgY29tcGFyZXIgd2hpY2ggd29ya3MgaWRlbnRpY2FsbHkgdG8gbmF0aXZlXG4gICAqIGFycmF5IHNvcnQuIEFsdGVybmF0aXZlbHkgeW91IGNhbiBzb3J0IGJ5IHRoZSBzb3J0IGRhdGEgeW91IGhhdmUgcHJvdmlkZWRcbiAgICogaW4gdGhlIGluc3RhbmNlJ3Mgb3B0aW9ucy4gSnVzdCBwcm92aWRlIHRoZSBzb3J0IGRhdGEga2V5KHMpIGFzIGEgc3RyaW5nXG4gICAqIChzZXBhcmF0ZWQgYnkgc3BhY2UpIGFuZCB0aGUgaXRlbXMgd2lsbCBiZSBzb3J0ZWQgYmFzZWQgb24gdGhlIHByb3ZpZGVkXG4gICAqIHNvcnQgZGF0YSBrZXlzLiBMYXN0bHkgeW91IGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHByb3ZpZGUgYSBwcmVzb3J0ZWRcbiAgICogYXJyYXkgb2YgaXRlbXMgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHN5bmMgdGhlIGludGVybmFsIGl0ZW1zIGFycmF5IGluIHRoZVxuICAgKiBzYW1lIG9yZGVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxJdGVtW118U3RyaW5nfFN0cmluZ1tdKX0gY29tcGFyZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRlc2NlbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc29ydCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgc29ydENvbXBhcmVyO1xuICAgIHZhciBpc0Rlc2NlbmRpbmc7XG4gICAgdmFyIG9yaWdJdGVtcztcbiAgICB2YXIgaW5kZXhNYXA7XG5cbiAgICBmdW5jdGlvbiBwYXJzZUNyaXRlcmlhKGRhdGEpIHtcbiAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICByZXR1cm4gdmFsLnNwbGl0KCc6Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEluZGV4TWFwKGl0ZW1zKSB7XG4gICAgICB2YXIgcmV0ID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJldFtpdGVtc1tpXS5faWRdID0gaTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGFyZUluZGljZXMoaXRlbUEsIGl0ZW1CKSB7XG4gICAgICB2YXIgaW5kZXhBID0gaW5kZXhNYXBbaXRlbUEuX2lkXTtcbiAgICAgIHZhciBpbmRleEIgPSBpbmRleE1hcFtpdGVtQi5faWRdO1xuICAgICAgcmV0dXJuIGlzRGVzY2VuZGluZyA/IGluZGV4QiAtIGluZGV4QSA6IGluZGV4QSAtIGluZGV4QjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0Q29tcGFyZXIoYSwgYikge1xuICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICB2YXIgY3JpdGVyaWFOYW1lO1xuICAgICAgdmFyIGNyaXRlcmlhT3JkZXI7XG4gICAgICB2YXIgdmFsQTtcbiAgICAgIHZhciB2YWxCO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGxpc3Qgb2Ygc29ydCBjcml0ZXJpYS5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc29ydENvbXBhcmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCB0aGUgY3JpdGVyaWEgbmFtZSwgd2hpY2ggc2hvdWxkIG1hdGNoIGFuIGl0ZW0ncyBzb3J0IGRhdGEga2V5LlxuICAgICAgICBjcml0ZXJpYU5hbWUgPSBzb3J0Q29tcGFyZXJbaV1bMF07XG4gICAgICAgIGNyaXRlcmlhT3JkZXIgPSBzb3J0Q29tcGFyZXJbaV1bMV07XG5cbiAgICAgICAgLy8gR2V0IGl0ZW1zJyBjYWNoZWQgc29ydCB2YWx1ZXMgZm9yIHRoZSBjcml0ZXJpYS4gSWYgdGhlIGl0ZW0gaGFzIG5vIHNvcnRcbiAgICAgICAgLy8gZGF0YSBsZXQncyB1cGRhdGUgdGhlIGl0ZW1zIHNvcnQgZGF0YSAodGhpcyBpcyBhIGxhenkgbG9hZCBtZWNoYW5pc20pLlxuICAgICAgICB2YWxBID0gKGEuX3NvcnREYXRhID8gYSA6IGEuX3JlZnJlc2hTb3J0RGF0YSgpKS5fc29ydERhdGFbY3JpdGVyaWFOYW1lXTtcbiAgICAgICAgdmFsQiA9IChiLl9zb3J0RGF0YSA/IGIgOiBiLl9yZWZyZXNoU29ydERhdGEoKSkuX3NvcnREYXRhW2NyaXRlcmlhTmFtZV07XG5cbiAgICAgICAgLy8gU29ydCB0aGUgaXRlbXMgaW4gZGVzY2VuZGluZyBvcmRlciBpZiBkZWZpbmVkIHNvIGV4cGxpY2l0bHkuIE90aGVyd2lzZVxuICAgICAgICAvLyBzb3J0IGl0ZW1zIGluIGFzY2VuZGluZyBvcmRlci5cbiAgICAgICAgaWYgKGNyaXRlcmlhT3JkZXIgPT09ICdkZXNjJyB8fCAoIWNyaXRlcmlhT3JkZXIgJiYgaXNEZXNjZW5kaW5nKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbEIgPCB2YWxBID8gLTEgOiB2YWxCID4gdmFsQSA/IDEgOiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbEEgPCB2YWxCID8gLTEgOiB2YWxBID4gdmFsQiA/IDEgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSAtMSBvciAxIGFzIHRoZSByZXR1cm4gdmFsdWUsIGxldCdzIHJldHVybiBpdCBpbW1lZGlhdGVseS5cbiAgICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdmFsdWVzIGFyZSBlcXVhbCBsZXQncyBjb21wYXJlIHRoZSBpdGVtIGluZGljZXMgdG8gbWFrZSBzdXJlIHdlXG4gICAgICAvLyBoYXZlIGEgc3RhYmxlIHNvcnQuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBpZiAoIWluZGV4TWFwKSBpbmRleE1hcCA9IGdldEluZGV4TWFwKG9yaWdJdGVtcyk7XG4gICAgICAgIHJlc3VsdCA9IGNvbXBhcmVJbmRpY2VzKGEsIGIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdXN0b21Db21wYXJlcihhLCBiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gc29ydENvbXBhcmVyKGEsIGIpO1xuICAgICAgLy8gSWYgZGVzY2VuZGluZyBsZXQncyBpbnZlcnQgdGhlIHJlc3VsdCB2YWx1ZS5cbiAgICAgIGlmIChpc0Rlc2NlbmRpbmcgJiYgcmVzdWx0KSByZXN1bHQgPSAtcmVzdWx0O1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbGlkIHJlc3VsdCAobm90IHplcm8pIGxldCdzIHJldHVybiBpdCByaWdodCBhd2F5LlxuICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIC8vIElmIHJlc3VsdCBpcyB6ZXJvIGxldCdzIGNvbXBhcmUgdGhlIGl0ZW0gaW5kaWNlcyB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhXG4gICAgICAvLyBzdGFibGUgc29ydC5cbiAgICAgIGlmICghaW5kZXhNYXApIGluZGV4TWFwID0gZ2V0SW5kZXhNYXAob3JpZ0l0ZW1zKTtcbiAgICAgIHJldHVybiBjb21wYXJlSW5kaWNlcyhhLCBiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oY29tcGFyZXIsIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pdGVtcy5sZW5ndGggPCAyKSByZXR1cm4gdGhpcztcblxuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICAgIHZhciBpO1xuXG4gICAgICAvLyBTZXR1cCBwYXJlbnQgc2NvcGUgZGF0YS5cbiAgICAgIHNvcnRDb21wYXJlciA9IGNvbXBhcmVyO1xuICAgICAgaXNEZXNjZW5kaW5nID0gISFvcHRzLmRlc2NlbmRpbmc7XG4gICAgICBvcmlnSXRlbXMgPSBpdGVtcy5zbGljZSgwKTtcbiAgICAgIGluZGV4TWFwID0gbnVsbDtcblxuICAgICAgLy8gSWYgZnVuY3Rpb24gaXMgcHJvdmlkZWQgZG8gYSBuYXRpdmUgYXJyYXkgc29ydC5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHNvcnRDb21wYXJlcikpIHtcbiAgICAgICAgaXRlbXMuc29ydChjdXN0b21Db21wYXJlcik7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UgaWYgd2UgZ290IGEgc3RyaW5nLCBsZXQncyBzb3J0IGJ5IHRoZSBzb3J0IGRhdGEgYXMgcHJvdmlkZWQgaW5cbiAgICAgIC8vIHRoZSBpbnN0YW5jZSdzIG9wdGlvbnMuXG4gICAgICBlbHNlIGlmICh0eXBlb2Ygc29ydENvbXBhcmVyID09PSBzdHJpbmdUeXBlKSB7XG4gICAgICAgIHNvcnRDb21wYXJlciA9IHBhcnNlQ3JpdGVyaWEoY29tcGFyZXIpO1xuICAgICAgICBpdGVtcy5zb3J0KGRlZmF1bHRDb21wYXJlcik7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UgaWYgd2UgZ290IGFuIGFycmF5LCBsZXQncyBhc3N1bWUgaXQncyBhIHByZXNvcnRlZCBhcnJheSBvZiB0aGVcbiAgICAgIC8vIGl0ZW1zIGFuZCBvcmRlciB0aGUgaXRlbXMgYmFzZWQgb24gaXQuXG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvcnRDb21wYXJlcikpIHtcbiAgICAgICAgaWYgKHNvcnRDb21wYXJlci5sZW5ndGggIT09IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWycgKyBuYW1lc3BhY2UgKyAnXSBzb3J0IHJlZmVyZW5jZSBpdGVtcyBkbyBub3QgbWF0Y2ggd2l0aCBncmlkIGl0ZW1zLicpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzb3J0Q29tcGFyZXIuaW5kZXhPZihpdGVtc1tpXSkgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1snICsgbmFtZXNwYWNlICsgJ10gc29ydCByZWZlcmVuY2UgaXRlbXMgZG8gbm90IG1hdGNoIHdpdGggZ3JpZCBpdGVtcy4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXNbaV0gPSBzb3J0Q29tcGFyZXJbaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGVzY2VuZGluZykgaXRlbXMucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGxldCdzIGp1c3Qgc2tpcCBpdCwgbm90aGluZyB3ZSBjYW4gZG8gaGVyZS5cbiAgICAgIGVsc2Uge1xuICAgICAgICAvKiogQHRvZG8gTWF5YmUgdGhyb3cgYW4gZXJyb3IgaGVyZT8gKi9cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgc29ydCBldmVudC5cbiAgICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRTb3J0KSkge1xuICAgICAgICB0aGlzLl9lbWl0KGV2ZW50U29ydCwgaXRlbXMuc2xpY2UoMCksIG9yaWdJdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogTW92ZSBpdGVtIHRvIGFub3RoZXIgaW5kZXggb3IgaW4gcGxhY2Ugb2YgYW5vdGhlciBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IGl0ZW1cbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5hY3Rpb249XCJtb3ZlXCJdXG4gICAqICAgLSBBY2NlcHRzIGVpdGhlciBcIm1vdmVcIiBvciBcInN3YXBcIi5cbiAgICogICAtIFwibW92ZVwiIG1vdmVzIHRoZSBpdGVtIGluIHBsYWNlIG9mIHRoZSBvdGhlciBpdGVtLlxuICAgKiAgIC0gXCJzd2FwXCIgc3dhcHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtcy5cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oaXRlbSwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5faXRlbXMubGVuZ3RoIDwgMikgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGlzU3dhcCA9IG9wdHMuYWN0aW9uID09PSBhY3Rpb25Td2FwO1xuICAgIHZhciBhY3Rpb24gPSBpc1N3YXAgPyBhY3Rpb25Td2FwIDogYWN0aW9uTW92ZTtcbiAgICB2YXIgZnJvbUl0ZW0gPSB0aGlzLl9nZXRJdGVtKGl0ZW0pO1xuICAgIHZhciB0b0l0ZW0gPSB0aGlzLl9nZXRJdGVtKHBvc2l0aW9uKTtcbiAgICB2YXIgZnJvbUluZGV4O1xuICAgIHZhciB0b0luZGV4O1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBpdGVtcyBleGlzdCBhbmQgYXJlIG5vdCB0aGUgc2FtZS5cbiAgICBpZiAoZnJvbUl0ZW0gJiYgdG9JdGVtICYmIGZyb21JdGVtICE9PSB0b0l0ZW0pIHtcbiAgICAgIC8vIEdldCB0aGUgaW5kaWNlcyBvZiB0aGUgaXRlbXMuXG4gICAgICBmcm9tSW5kZXggPSBpdGVtcy5pbmRleE9mKGZyb21JdGVtKTtcbiAgICAgIHRvSW5kZXggPSBpdGVtcy5pbmRleE9mKHRvSXRlbSk7XG5cbiAgICAgIC8vIERvIHRoZSBtb3ZlL3N3YXAuXG4gICAgICBpZiAoaXNTd2FwKSB7XG4gICAgICAgIGFycmF5U3dhcChpdGVtcywgZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5TW92ZShpdGVtcywgZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBtb3ZlIGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudE1vdmUpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgaXRlbTogZnJvbUl0ZW0sXG4gICAgICAgICAgZnJvbUluZGV4OiBmcm9tSW5kZXgsXG4gICAgICAgICAgdG9JbmRleDogdG9JbmRleCxcbiAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZW5kIGl0ZW0gdG8gYW5vdGhlciBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IGl0ZW1cbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gcG9zaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy5hcHBlbmRUbz1kb2N1bWVudC5ib2R5XVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dFNlbmRlcj10cnVlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dFJlY2VpdmVyPXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGl0ZW0sIGdyaWQsIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IGdyaWQuX2lzRGVzdHJveWVkIHx8IHRoaXMgPT09IGdyaWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSB2YWxpZCB0YXJnZXQgaXRlbS5cbiAgICBpdGVtID0gdGhpcy5fZ2V0SXRlbShpdGVtKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGNvbnRhaW5lciA9IG9wdHMuYXBwZW5kVG8gfHwgd2luZG93LmRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGxheW91dFNlbmRlciA9IG9wdHMubGF5b3V0U2VuZGVyID8gb3B0cy5sYXlvdXRTZW5kZXIgOiBvcHRzLmxheW91dFNlbmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBsYXlvdXRSZWNlaXZlciA9IG9wdHMubGF5b3V0UmVjZWl2ZXJcbiAgICAgID8gb3B0cy5sYXlvdXRSZWNlaXZlclxuICAgICAgOiBvcHRzLmxheW91dFJlY2VpdmVyID09PSB1bmRlZmluZWQ7XG5cbiAgICAvLyBTdGFydCB0aGUgbWlncmF0aW9uIHByb2Nlc3MuXG4gICAgaXRlbS5fbWlncmF0ZS5zdGFydChncmlkLCBwb3NpdGlvbiwgY29udGFpbmVyKTtcblxuICAgIC8vIElmIG1pZ3JhdGlvbiB3YXMgc3RhcnRlZCBzdWNjZXNzZnVsbHkgYW5kIHRoZSBpdGVtIGlzIGFjdGl2ZSwgbGV0J3MgbGF5b3V0XG4gICAgLy8gdGhlIGdyaWRzLlxuICAgIGlmIChpdGVtLl9taWdyYXRlLl9pc0FjdGl2ZSAmJiBpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgaWYgKGxheW91dFNlbmRlcikge1xuICAgICAgICB0aGlzLmxheW91dChcbiAgICAgICAgICBsYXlvdXRTZW5kZXIgPT09IGluc3RhbnRMYXlvdXQsXG4gICAgICAgICAgaXNGdW5jdGlvbihsYXlvdXRTZW5kZXIpID8gbGF5b3V0U2VuZGVyIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAobGF5b3V0UmVjZWl2ZXIpIHtcbiAgICAgICAgZ3JpZC5sYXlvdXQoXG4gICAgICAgICAgbGF5b3V0UmVjZWl2ZXIgPT09IGluc3RhbnRMYXlvdXQsXG4gICAgICAgICAgaXNGdW5jdGlvbihsYXlvdXRSZWNlaXZlcikgPyBsYXlvdXRSZWNlaXZlciA6IHVuZGVmaW5lZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlRWxlbWVudHM9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zLnNsaWNlKDApO1xuICAgIHZhciBpO1xuXG4gICAgLy8gVW5iaW5kIHdpbmRvdyByZXNpemUgZXZlbnQgbGlzdGVuZXIuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZUhhbmRsZXIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemVIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBEZXN0cm95IGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbXNbaV0uX2Rlc3Ryb3kocmVtb3ZlRWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgY29udGFpbmVyLlxuICAgIHJlbW92ZUNsYXNzKGNvbnRhaW5lciwgdGhpcy5fc2V0dGluZ3MuY29udGFpbmVyQ2xhc3MpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnJztcblxuICAgIC8vIEVtaXQgZGVzdHJveSBldmVudCBhbmQgdW5iaW5kIGFsbCBldmVudHMuXG4gICAgdGhpcy5fZW1pdChldmVudERlc3Ryb3kpO1xuICAgIHRoaXMuX2VtaXR0ZXIuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIHJlZmVyZW5jZSBmcm9tIHRoZSBncmlkIGluc3RhbmNlcyBjb2xsZWN0aW9uLlxuICAgIGdyaWRJbnN0YW5jZXNbdGhpcy5faWRdID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRmxhZyBpbnN0YW5jZSBhcyBkZXN0cm95ZWQuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlJ3MgaXRlbSBieSBlbGVtZW50IG9yIGJ5IGluZGV4LiBUYXJnZXQgY2FuIGFsc28gYmUgYW4gSXRlbVxuICAgKiBpbnN0YW5jZSBpbiB3aGljaCBjYXNlIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZSBpdGVtIGlmIGl0IGV4aXN0cyB3aXRoaW5cbiAgICogcmVsYXRlZCBHcmlkIGluc3RhbmNlLiBJZiBub3RoaW5nIGlzIGZvdW5kIHdpdGggdGhlIHByb3ZpZGVkIHRhcmdldCwgbnVsbFxuICAgKiBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gW3RhcmdldF1cbiAgICogQHJldHVybnMgez9JdGVtfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX2dldEl0ZW0gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAvLyBJZiBubyB0YXJnZXQgaXMgc3BlY2lmaWVkIG9yIHRoZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWQsIHJldHVybiBudWxsLlxuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAoIXRhcmdldCAmJiB0YXJnZXQgIT09IDApKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBJZiB0YXJnZXQgaXMgbnVtYmVyIHJldHVybiB0aGUgaXRlbSBpbiB0aGF0IGluZGV4LiBJZiB0aGUgbnVtYmVyIGlzIGxvd2VyXG4gICAgLy8gdGhhbiB6ZXJvIGxvb2sgZm9yIHRoZSBpdGVtIHN0YXJ0aW5nIGZyb20gdGhlIGVuZCBvZiB0aGUgaXRlbXMgYXJyYXkuIEZvclxuICAgIC8vIGV4YW1wbGUgLTEgZm9yIHRoZSBsYXN0IGl0ZW0sIC0yIGZvciB0aGUgc2Vjb25kIGxhc3QgaXRlbSwgZXRjLlxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtc1t0YXJnZXQgPiAtMSA/IHRhcmdldCA6IHRoaXMuX2l0ZW1zLmxlbmd0aCArIHRhcmdldF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGFuIGluc3RhbmNlIG9mIEl0ZW0gcmV0dXJuIGl0IGlmIGl0IGlzIGF0dGFjaGVkIHRvIHRoaXNcbiAgICAvLyBHcmlkIGluc3RhbmNlLCBvdGhlcndpc2UgcmV0dXJuIG51bGwuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEl0ZW0pIHtcbiAgICAgIHJldHVybiB0YXJnZXQuX2dyaWRJZCA9PT0gdGhpcy5faWQgPyB0YXJnZXQgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIEluIG90aGVyIGNhc2VzIGxldCdzIGFzc3VtZSB0aGF0IHRoZSB0YXJnZXQgaXMgYW4gZWxlbWVudCwgc28gbGV0J3MgdHJ5XG4gICAgLy8gdG8gZmluZCBhbiBpdGVtIHRoYXQgbWF0Y2hlcyB0aGUgZWxlbWVudCBhbmQgcmV0dXJuIGl0LiBJZiBpdGVtIGlzIG5vdFxuICAgIC8vIGZvdW5kIHJldHVybiBudWxsLlxuICAgIC8qKiBAdG9kbyBUaGlzIGNvdWxkIGJlIG1hZGUgYSBsb3QgZmFzdGVyIGJ5IHVzaW5nIE1hcC9XZWFrTWFwIG9mIGVsZW1lbnRzLiAqL1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtc1tpXS5fZWxlbWVudCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIGFuZCB1cGRhdGVzIGluc3RhbmNlJ3MgbGF5b3V0IGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TGF5b3V0RGF0YX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl91cGRhdGVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5fbGF5b3V0O1xuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX3NldHRpbmdzLmxheW91dDtcbiAgICB2YXIgd2lkdGg7XG4gICAgdmFyIGhlaWdodDtcbiAgICB2YXIgbmV3TGF5b3V0O1xuICAgIHZhciBpO1xuXG4gICAgLy8gTGV0J3MgaW5jcmVtZW50IGxheW91dCBpZC5cbiAgICArK2xheW91dC5pZDtcblxuICAgIC8vIExldCdzIHVwZGF0ZSBsYXlvdXQgaXRlbXNcbiAgICBsYXlvdXQuaXRlbXMubGVuZ3RoID0gMDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtc1tpXS5faXNBY3RpdmUpIGxheW91dC5pdGVtcy5wdXNoKHRoaXMuX2l0ZW1zW2ldKTtcbiAgICB9XG5cbiAgICAvLyBMZXQncyBtYWtlIHN1cmUgd2UgaGF2ZSB0aGUgY29ycmVjdCBjb250YWluZXIgZGltZW5zaW9ucy5cbiAgICB0aGlzLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGNvbnRhaW5lciB3aWR0aCBhbmQgaGVpZ2h0ICh3aXRob3V0IGJvcmRlcnMpLlxuICAgIHdpZHRoID0gdGhpcy5fd2lkdGggLSB0aGlzLl9ib3JkZXJMZWZ0IC0gdGhpcy5fYm9yZGVyUmlnaHQ7XG4gICAgaGVpZ2h0ID0gdGhpcy5faGVpZ2h0IC0gdGhpcy5fYm9yZGVyVG9wIC0gdGhpcy5fYm9yZGVyQm90dG9tO1xuXG4gICAgLy8gQ2FsY3VsYXRlIG5ldyBsYXlvdXQuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MpKSB7XG4gICAgICBuZXdMYXlvdXQgPSBzZXR0aW5ncyhsYXlvdXQuaXRlbXMsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMYXlvdXQgPSBwYWNrZXIuZ2V0TGF5b3V0KGxheW91dC5pdGVtcywgd2lkdGgsIGhlaWdodCwgbGF5b3V0LnNsb3RzLCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gTGV0J3MgdXBkYXRlIHRoZSBncmlkJ3MgbGF5b3V0LlxuICAgIGxheW91dC5zbG90cyA9IG5ld0xheW91dC5zbG90cztcbiAgICBsYXlvdXQuc2V0V2lkdGggPSBCb29sZWFuKG5ld0xheW91dC5zZXRXaWR0aCk7XG4gICAgbGF5b3V0LnNldEhlaWdodCA9IEJvb2xlYW4obmV3TGF5b3V0LnNldEhlaWdodCk7XG4gICAgbGF5b3V0LndpZHRoID0gbmV3TGF5b3V0LndpZHRoO1xuICAgIGxheW91dC5oZWlnaHQgPSBuZXdMYXlvdXQuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIGxheW91dDtcbiAgfTtcblxuICAvKipcbiAgICogRW1pdCBhIGdyaWQgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHsuLi4qfSBbYXJnXVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX2VtaXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQuYXBwbHkodGhpcy5fZW1pdHRlciwgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBldmVudHMgbGlzdGVuZXJzIGZvciBhbiBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9lbWl0dGVyLl9ldmVudHNbZXZlbnRdO1xuICAgIHJldHVybiAhIShsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb250YWluZXIncyB3aWR0aCwgaGVpZ2h0IGFuZCBvZmZzZXRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl91cGRhdGVCb3VuZGluZ1JlY3QgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuX3dpZHRoID0gcmVjdC53aWR0aDtcbiAgICB0aGlzLl9oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICB0aGlzLl9sZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIHRoaXMuX3RvcCA9IHJlY3QudG9wO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29udGFpbmVyJ3MgYm9yZGVyIHNpemVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBsZWZ0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmlnaHRcbiAgICogQHBhcmFtIHtCb29sZWFufSB0b3BcbiAgICogQHBhcmFtIHtCb29sZWFufSBib3R0b21cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl91cGRhdGVCb3JkZXJzID0gZnVuY3Rpb24obGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIGlmIChsZWZ0KSB0aGlzLl9ib3JkZXJMZWZ0ID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItbGVmdC13aWR0aCcpO1xuICAgIGlmIChyaWdodCkgdGhpcy5fYm9yZGVyUmlnaHQgPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1yaWdodC13aWR0aCcpO1xuICAgIGlmICh0b3ApIHRoaXMuX2JvcmRlclRvcCA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuICAgIGlmIChib3R0b20pIHRoaXMuX2JvcmRlckJvdHRvbSA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLWJvdHRvbS13aWR0aCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGFsbCBvZiBjb250YWluZXIncyBpbnRlcm5hbCBkaW1lbnNpb25zIGFuZCBvZmZzZXRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9yZWZyZXNoRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3VwZGF0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuX3VwZGF0ZUJvcmRlcnMoMSwgMSwgMSwgMSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgb3IgaGlkZSBHcmlkIGluc3RhbmNlJ3MgaXRlbXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtCb29sZWFufSB0b1Zpc2libGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7KFNob3dDYWxsYmFja3xIaWRlQ2FsbGJhY2spfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9zZXRJdGVtc1Zpc2liaWxpdHkgPSBmdW5jdGlvbihpdGVtcywgdG9WaXNpYmxlLCBvcHRpb25zKSB7XG4gICAgdmFyIGdyaWQgPSB0aGlzO1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBpc0luc3RhbnQgPSBvcHRzLmluc3RhbnQgPT09IHRydWU7XG4gICAgdmFyIGNhbGxiYWNrID0gb3B0cy5vbkZpbmlzaDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGNvdW50ZXIgPSB0YXJnZXRJdGVtcy5sZW5ndGg7XG4gICAgdmFyIHN0YXJ0RXZlbnQgPSB0b1Zpc2libGUgPyBldmVudFNob3dTdGFydCA6IGV2ZW50SGlkZVN0YXJ0O1xuICAgIHZhciBlbmRFdmVudCA9IHRvVmlzaWJsZSA/IGV2ZW50U2hvd0VuZCA6IGV2ZW50SGlkZUVuZDtcbiAgICB2YXIgbWV0aG9kID0gdG9WaXNpYmxlID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgIHZhciBuZWVkc0xheW91dCA9IGZhbHNlO1xuICAgIHZhciBjb21wbGV0ZWRJdGVtcyA9IFtdO1xuICAgIHZhciBoaWRkZW5JdGVtcyA9IFtdO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGl0ZW1zIGNhbGwgdGhlIGNhbGxiYWNrLCBidXQgZG9uJ3QgZW1pdCBhbnkgZXZlbnRzLlxuICAgIGlmICghY291bnRlcikge1xuICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSBjYWxsYmFjayh0YXJnZXRJdGVtcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRW1pdCBzaG93U3RhcnQvaGlkZVN0YXJ0IGV2ZW50LlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoc3RhcnRFdmVudCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoc3RhcnRFdmVudCwgdGFyZ2V0SXRlbXMuc2xpY2UoMCkpO1xuICAgIH1cblxuICAgIC8vIFNob3cvaGlkZSBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSB0YXJnZXRJdGVtc1tpXTtcblxuICAgICAgLy8gSWYgaW5hY3RpdmUgaXRlbSBpcyBzaG93biBvciBhY3RpdmUgaXRlbSBpcyBoaWRkZW4gd2UgbmVlZCB0byBkb1xuICAgICAgLy8gbGF5b3V0LlxuICAgICAgaWYgKCh0b1Zpc2libGUgJiYgIWl0ZW0uX2lzQWN0aXZlKSB8fCAoIXRvVmlzaWJsZSAmJiBpdGVtLl9pc0FjdGl2ZSkpIHtcbiAgICAgICAgbmVlZHNMYXlvdXQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpbmFjdGl2ZSBpdGVtIGlzIHNob3duIHdlIGFsc28gbmVlZCB0byBkbyBhIGxpdHRsZSBoYWNrIHRvIG1ha2UgdGhlXG4gICAgICAvLyBpdGVtIG5vdCBhbmltYXRlIGl0J3MgbmV4dCBwb3NpdGlvbmluZyAobGF5b3V0KS5cbiAgICAgIGlmICh0b1Zpc2libGUgJiYgIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICAgIGl0ZW0uX2xheW91dC5fc2tpcE5leHRBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBhIGhpZGRlbiBpdGVtIGlzIGJlaW5nIHNob3duIHdlIG5lZWQgdG8gcmVmcmVzaCB0aGUgaXRlbSdzXG4gICAgICAvLyBkaW1lbnNpb25zLlxuICAgICAgaWYgKHRvVmlzaWJsZSAmJiBpdGVtLl92aXNpYmlsaXR5Ll9pc0hpZGRlbikge1xuICAgICAgICBoaWRkZW5JdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93L2hpZGUgdGhlIGl0ZW0uXG4gICAgICBpdGVtLl92aXNpYmlsaXR5W21ldGhvZF0oaXNJbnN0YW50LCBmdW5jdGlvbihpbnRlcnJ1cHRlZCwgaXRlbSkge1xuICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBpdGVtJ3MgYW5pbWF0aW9uIHdhcyBub3QgaW50ZXJydXB0ZWQgYWRkIGl0IHRvIHRoZVxuICAgICAgICAvLyBjb21wbGV0ZWRJdGVtcyBhcnJheS5cbiAgICAgICAgaWYgKCFpbnRlcnJ1cHRlZCkgY29tcGxldGVkSXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgICAvLyBJZiBhbGwgaXRlbXMgaGF2ZSBmaW5pc2hlZCB0aGVpciBhbmltYXRpb25zIGNhbGwgdGhlIGNhbGxiYWNrXG4gICAgICAgIC8vIGFuZCBlbWl0IHNob3dFbmQvaGlkZUVuZCBldmVudC5cbiAgICAgICAgaWYgKC0tY291bnRlciA8IDEpIHtcbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIGNhbGxiYWNrKGNvbXBsZXRlZEl0ZW1zLnNsaWNlKDApKTtcbiAgICAgICAgICBpZiAoZ3JpZC5faGFzTGlzdGVuZXJzKGVuZEV2ZW50KSkgZ3JpZC5fZW1pdChlbmRFdmVudCwgY29tcGxldGVkSXRlbXMuc2xpY2UoMCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZWZyZXNoIGhpZGRlbiBpdGVtcy5cbiAgICBpZiAoaGlkZGVuSXRlbXMubGVuZ3RoKSB0aGlzLnJlZnJlc2hJdGVtcyhoaWRkZW5JdGVtcyk7XG5cbiAgICAvLyBMYXlvdXQgaWYgbmVlZGVkLlxuICAgIGlmIChuZWVkc0xheW91dCAmJiBsYXlvdXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgaGVscGVyc1xuICAgKiAqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIE1lcmdlIGRlZmF1bHQgc2V0dGluZ3Mgd2l0aCB1c2VyIHNldHRpbmdzLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGlzIGEgbmV3XG4gICAqIG9iamVjdCB3aXRoIG1lcmdlZCB2YWx1ZXMuIFRoZSBtZXJnaW5nIGlzIGEgZGVlcCBtZXJnZSBtZWFuaW5nIHRoYXQgYWxsXG4gICAqIG9iamVjdHMgYW5kIGFycmF5cyB3aXRoaW4gdGhlIHByb3ZpZGVkIHNldHRpbmdzIG9iamVjdHMgd2lsbCBiZSBhbHNvIG1lcmdlZFxuICAgKiBzbyB0aGF0IG1vZGlmeWluZyB0aGUgdmFsdWVzIG9mIHRoZSBzZXR0aW5ncyBvYmplY3Qgd2lsbCBoYXZlIG5vIGVmZmVjdCBvblxuICAgKiB0aGUgcmV0dXJuZWQgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFNldHRpbmdzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdXNlclNldHRpbmdzXVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlU2V0dGluZ3MoZGVmYXVsdFNldHRpbmdzLCB1c2VyU2V0dGluZ3MpIHtcbiAgICAvLyBDcmVhdGUgYSBmcmVzaCBjb3B5IG9mIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAgdmFyIHJldCA9IG1lcmdlT2JqZWN0cyh7fSwgZGVmYXVsdFNldHRpbmdzKTtcblxuICAgIC8vIE1lcmdlIHVzZXIgc2V0dGluZ3MgdG8gZGVmYXVsdCBzZXR0aW5ncy5cbiAgICBpZiAodXNlclNldHRpbmdzKSB7XG4gICAgICByZXQgPSBtZXJnZU9iamVjdHMocmV0LCB1c2VyU2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSB2aXNpYmxlL2hpZGRlbiBzdHlsZXMgbWFudWFsbHkgc28gdGhhdCB0aGUgd2hvbGUgb2JqZWN0IGlzXG4gICAgLy8gb3ZlcnJpZGRlbiBpbnN0ZWFkIG9mIHRoZSBwcm9wcy5cbiAgICByZXQudmlzaWJsZVN0eWxlcyA9ICh1c2VyU2V0dGluZ3MgfHwgMCkudmlzaWJsZVN0eWxlcyB8fCAoZGVmYXVsdFNldHRpbmdzIHx8IDApLnZpc2libGVTdHlsZXM7XG4gICAgcmV0LmhpZGRlblN0eWxlcyA9ICh1c2VyU2V0dGluZ3MgfHwgMCkuaGlkZGVuU3R5bGVzIHx8IChkZWZhdWx0U2V0dGluZ3MgfHwgMCkuaGlkZGVuU3R5bGVzO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSB0d28gb2JqZWN0cyByZWN1cnNpdmVseSAoZGVlcCBtZXJnZSkuIFRoZSBzb3VyY2Ugb2JqZWN0J3MgcHJvcGVydGllc1xuICAgKiBhcmUgbWVyZ2VkIHRvIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAqICAgLSBUaGUgdGFyZ2V0IG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICAgKiAgIC0gVGhlIHNvdXJjZSBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHRhcmdldCBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZU9iamVjdHModGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGxlbmd0aCA9IHNvdXJjZUtleXMubGVuZ3RoO1xuICAgIHZhciBpc1NvdXJjZU9iamVjdDtcbiAgICB2YXIgcHJvcE5hbWU7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb3BOYW1lID0gc291cmNlS2V5c1tpXTtcbiAgICAgIGlzU291cmNlT2JqZWN0ID0gaXNQbGFpbk9iamVjdChzb3VyY2VbcHJvcE5hbWVdKTtcblxuICAgICAgLy8gSWYgdGFyZ2V0IGFuZCBzb3VyY2UgdmFsdWVzIGFyZSBib3RoIG9iamVjdHMsIG1lcmdlIHRoZSBvYmplY3RzIGFuZFxuICAgICAgLy8gYXNzaWduIHRoZSBtZXJnZWQgdmFsdWUgdG8gdGhlIHRhcmdldCBwcm9wZXJ0eS5cbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHRhcmdldFtwcm9wTmFtZV0pICYmIGlzU291cmNlT2JqZWN0KSB7XG4gICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBtZXJnZU9iamVjdHMobWVyZ2VPYmplY3RzKHt9LCB0YXJnZXRbcHJvcE5hbWVdKSwgc291cmNlW3Byb3BOYW1lXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBzb3VyY2UncyB2YWx1ZSBpcyBvYmplY3QgYW5kIHRhcmdldCdzIGlzIG5vdCBsZXQncyBjbG9uZSB0aGUgb2JqZWN0IGFzXG4gICAgICAvLyB0aGUgdGFyZ2V0J3MgdmFsdWUuXG4gICAgICBpZiAoaXNTb3VyY2VPYmplY3QpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IG1lcmdlT2JqZWN0cyh7fSwgc291cmNlW3Byb3BOYW1lXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBzb3VyY2UncyB2YWx1ZSBpcyBhbiBhcnJheSBsZXQncyBjbG9uZSB0aGUgYXJyYXkgYXMgdGhlIHRhcmdldCdzXG4gICAgICAvLyB2YWx1ZS5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZVtwcm9wTmFtZV0pKSB7XG4gICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdLnNsaWNlKDApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gYWxsIG90aGVyIGNhc2VzIGxldCdzIGp1c3QgZGlyZWN0bHkgYXNzaWduIHRoZSBzb3VyY2UncyB2YWx1ZSBhcyB0aGVcbiAgICAgIC8vIHRhcmdldCdzIHZhbHVlLlxuICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBHcmlkO1xuXG59KSk7XG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgQWx0ZXJuYXRpdmVWaXN1YWxpemVyc1dyYXBwZXIgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmlzdWFsaXplcnM6IEFycmF5PFZpc3VhbGl6ZXJCYXNlPixcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICBpZiAoIXZpc3VhbGl6ZXJzIHx8IHZpc3VhbGl6ZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJWaXN1YWxpemVyQXJyYXlXcmFwcGVyIHdvcmtzIHdpdGggdmlzdWFsaXplcnMgY29sbGVjdGlvbiBvbmx5LlwiXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2goKHZpc3VhbGl6ZXIpID0+IHtcbiAgICAgIHZpc3VhbGl6ZXIub25VcGRhdGUgPSAoKSA9PiB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJjaGFuZ2VWaXN1YWxpemVyXCIsICgpID0+XG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVTZWxlY3RvcihcbiAgICAgICAgdGhpcy52aXN1YWxpemVycy5tYXAoKHZpc3VhbGl6ZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHZpc3VhbGl6ZXIubmFtZSxcbiAgICAgICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ2aXN1YWxpemVyX1wiICsgdmlzdWFsaXplci5uYW1lKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgKG9wdGlvbjogYW55KSA9PiB0aGlzLnZpc3VhbGl6ZXIubmFtZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgICAoZTogYW55KSA9PiB0aGlzLnNldFZpc3VhbGl6ZXIoZS50YXJnZXQudmFsdWUpXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMudmlzdWFsaXplciA9IHZpc3VhbGl6ZXJzWzBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHZpc3VhbGl6ZXI6IFZpc3VhbGl6ZXJCYXNlO1xuXG4gIHByaXZhdGUgc2V0VmlzdWFsaXplcihuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISF0aGlzLnZpc3VhbGl6ZXIpIHtcbiAgICAgIHRoaXMudmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMudmlzdWFsaXplciA9IHRoaXMudmlzdWFsaXplcnMuZmlsdGVyKCh2KSA9PiB2Lm5hbWUgPT09IG5hbWUpWzBdO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgc3VwZXIudXBkYXRlRGF0YShkYXRhKTtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2goKHZpc3VhbGl6ZXIpID0+IHtcbiAgICAgIHZpc3VhbGl6ZXIudXBkYXRlRGF0YShkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnZpc3VhbGl6ZXJDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy52aXN1YWxpemVyLnJlbmRlcih0aGlzLnZpc3VhbGl6ZXJDb250YWluZXIpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2goKHZpc3VhbGl6ZXIpID0+IHtcbiAgICAgIHZpc3VhbGl6ZXIub25VcGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgdGhpcy52aXN1YWxpemVyLmRlc3Ryb3koKTtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJBbHRlcm5hdGl2ZXNWaXN1YWxpemVyKFxuICBBbHRlcm5hdGl2ZVZpc3VhbGl6ZXJzV3JhcHBlclxuKTtcbiIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvbkJvb2xlYW5Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlIH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vZGF0YVByb3ZpZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuTW9kZWwgZXh0ZW5kcyBTZWxlY3RCYXNlIHtcbiAgcHJvdGVjdGVkIGNoYXJ0VHlwZXM6IHN0cmluZ1tdO1xuICBwdWJsaWMgY2hhcnRUeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucywgbmFtZSB8fCBcImJvb2xlYW5cIik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJvb2xlYW5RdWVzdGlvbigpIHtcbiAgICByZXR1cm4gPFF1ZXN0aW9uQm9vbGVhbk1vZGVsPnRoaXMucXVlc3Rpb247XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRydWVDb2xvciA9IFwiXCI7XG4gIHB1YmxpYyBzdGF0aWMgZmFsc2VDb2xvciA9IFwiXCI7XG5cbiAgcHVibGljIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIHJldHVybiBuZXcgSXRlbVZhbHVlKHZhbHVlc1tsYWJlbHMuaW5kZXhPZihpdGVtVGV4dCldLCBpdGVtVGV4dCk7XG4gIH1cblxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlVHJ1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVUcnVlXG4gICAgICAgIDogdHJ1ZSxcbiAgICAgIHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2UgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2VcbiAgICAgICAgOiBmYWxzZSxcbiAgICBdO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciBsYWJlbHMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIGlmICh0aGlzLmJvb2xlYW5RdWVzdGlvbi5sYWJlbFRydWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGFiZWxzWzBdID0gdGhpcy5ib29sZWFuUXVlc3Rpb24ubG9jTGFiZWxUcnVlLnRleHRPckh0bWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvb2xlYW5RdWVzdGlvbi5sYWJlbEZhbHNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxhYmVsc1sxXSA9IHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxvY0xhYmVsRmFsc2UudGV4dE9ySHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gRWxlbWVudFZpc2liaWxpdHkge1xyXG4gIFZpc2libGUsXHJcbiAgSW52aXNpYmxlLFxyXG4gIFB1YmxpY0ludmlzaWJsZSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmlzdWFsaXplclBhbmVsRWxlbWVudCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgdmlzaWJpbGl0eTogRWxlbWVudFZpc2liaWxpdHk7XHJcbiAgdHlwZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xyXG4gIGxvY2FsZT86IHN0cmluZztcclxuICBlbGVtZW50cz86IElWaXN1YWxpemVyUGFuZWxFbGVtZW50W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlcm1pc3Npb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eTtcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyBkYXRhIGluZm86XHJcbiAqIGRhdGFOYW1lIC0gcXVlc3Rpb24gbmFtZSwgdXNlZCBhcyBhIGtleSB0byBvYnRhaW4gcXVlc3Rpb24gZGF0YVxyXG4gKiBnZXRWYWx1ZXMgLSBmdW5jdGlvbiByZXR1cm5pbmcgYW4gYXJyYXkgb2YgYWxsIHBvc3NpYmxlIHZhbHVlc1xyXG4gKiBnZXRMYWJlbHMgLSBmdW5jdGlvbiByZXR1cm5pbmcgYW4gYXJyYXkgb2YgaHVtYW4tZnJpZW5kbHkgZGVzY3JpcHRpb25zIGZvciB2YWx1ZXNcclxuICogZ2V0U2VyaWVzVmFsdWVzIC0gZnVuY3Rpb24gcmV0dXJuaW5nIGFuIGFycmF5IG9mIGFsbCBwb3NzaWJsZSBzZXJpZXMgdmFsdWVzXHJcbiAqIGdldFNlcmllc0xhYmVscyAtIGZ1bmN0aW9uIHJldHVybmluZyBhbiBhcnJheSBvZiBodW1hbi1mcmllbmRseSBkZXNjcmlwdGlvbnMgZm9yIHNlcmllcyB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFJbmZvIHtcclxuICBkYXRhTmFtZTogc3RyaW5nO1xyXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+O1xyXG4gIGdldExhYmVscygpOiBBcnJheTxzdHJpbmc+O1xyXG4gIGdldFNlcmllc1ZhbHVlcygpOiBBcnJheTxzdHJpbmc+O1xyXG4gIGdldFNlcmllc0xhYmVscygpOiBBcnJheTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVByb3ZpZGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHNlcmllc01hcmtlcktleSA9IFwiX19zYV9zZXJpZXNfbmFtZVwiO1xyXG5cclxuICBwcml2YXRlIF9maWx0ZXJlZERhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT47XHJcbiAgcHJpdmF0ZSBfc3RhdGlzdGljc0NhY2hlOiB7IFtpbmRleDogc3RyaW5nXTogQXJyYXk8QXJyYXk8bnVtYmVyPj4gfTtcclxuICBwcm90ZWN0ZWQgZmlsdGVyVmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PiA9IFtdKSB7fVxyXG5cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSAhPT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMucmFpc2VEYXRhQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXQgZGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLl9kYXRhID0gW10uY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBmaWx0ZXJlZERhdGEoKSB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyZWREYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGZpbHRlcktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpbHRlclZhbHVlcyk7XHJcbiAgICAgIGlmIChmaWx0ZXJLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuZmlsdGVyVmFsdWVzKS5zb21lKFxyXG4gICAgICAgICAgICAoa2V5KSA9PiBpdGVtW2tleV0gIT09IHRoaXMuZmlsdGVyVmFsdWVzW2tleV1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWREYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBmaWx0ZXIgYnkgcXVlc3Rpb24gbmFtZSBhbmQgdmFsdWUuXHJcbiAgICovXHJcbiAgcHVibGljIHNldEZpbHRlcihxdWVzdGlvbk5hbWU6IHN0cmluZywgc2VsZWN0ZWRWYWx1ZTogYW55KSB7XHJcbiAgICB2YXIgZmlsdGVyQ2hhbmdlZCA9IHRydWU7XHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZpbHRlckNoYW5nZWQgPSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdICE9PSBzZWxlY3RlZFZhbHVlO1xyXG4gICAgICB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdID0gc2VsZWN0ZWRWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbHRlckNoYW5nZWQgPSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlckNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldERhdGFDb3JlKGRhdGFJbmZvOiBJRGF0YUluZm8pIHtcclxuICAgIGNvbnN0IGRhdGFOYW1lID0gZGF0YUluZm8uZGF0YU5hbWU7XHJcbiAgICBjb25zdCBzdGF0aXN0aWNzOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IGRhdGFJbmZvLmdldFZhbHVlcygpO1xyXG4gICAgY29uc3QgdmFsdWVzSW5kZXg6IHsgW2luZGV4OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgdmFsdWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHZhbHVlc0luZGV4W3ZhbF0gPSBpbmRleDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlcmllcyA9IGRhdGFJbmZvLmdldFNlcmllc1ZhbHVlcygpO1xyXG4gICAgY29uc3Qgc2VyaWVzSW5kZXg6IHsgW2luZGV4OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgc2VyaWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHNlcmllc0luZGV4W3ZhbF0gPSBpbmRleDtcclxuICAgICAgc3RhdGlzdGljcy5wdXNoKG5ldyBBcnJheTxudW1iZXI+KHZhbHVlcy5sZW5ndGgpLmZpbGwoMCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHN0YXRpc3RpY3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHN0YXRpc3RpY3MucHVzaChuZXcgQXJyYXk8bnVtYmVyPih2YWx1ZXMubGVuZ3RoKS5maWxsKDApKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkRGF0YS5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1tkYXRhTmFtZV07XHJcbiAgICAgIGlmIChyb3dWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3Qgcm93VmFsdWVzID0gQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkgPyByb3dWYWx1ZSA6IFtyb3dWYWx1ZV07XHJcbiAgICAgICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpZiAocm93W0RhdGFQcm92aWRlci5zZXJpZXNNYXJrZXJLZXldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gU2VyaWVzIGFyZSBsYWJlbGxlZCBieSBzZXJpZXNNYXJrZXJLZXkgaW4gcm93IGRhdGFcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWVzTm8gPVxyXG4gICAgICAgICAgICAgIHNlcmllc0luZGV4W3Jvd1tEYXRhUHJvdmlkZXIuc2VyaWVzTWFya2VyS2V5XV0gfHwgMDtcclxuICAgICAgICAgICAgcm93VmFsdWVzLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRpc3RpY3Nbc2VyaWVzTm9dW3ZhbHVlc0luZGV4W3ZhbF1dKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2VyaWVzIGFyZSB0aGUga2V5cyBpbiBxdWVzdGlvbiB2YWx1ZSAobWF0cml4IHF1ZXN0aW9uKVxyXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGluayBhYm91dCB0aGUgZGUtbm9ybWFsaXphdGlvbiBhbmQgY29tYmluZSB3aXRoIHRoZSBwcmV2aW91cyBjYXNlXHJcbiAgICAgICAgICAgIHJvd1ZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICBzZXJpZXMuZm9yRWFjaCgoc2VyaWVzTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbFtzZXJpZXNOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcmllc05vID0gc2VyaWVzSW5kZXhbc2VyaWVzTmFtZV0gfHwgMDtcclxuICAgICAgICAgICAgICAgICAgc3RhdGlzdGljc1tzZXJpZXNOb11bdmFsdWVzSW5kZXhbdmFsW3Nlcmllc05hbWVdXV0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIE5vIHNlcmllc1xyXG4gICAgICAgICAgcm93VmFsdWVzLmZvckVhY2goKHZhbCkgPT4gc3RhdGlzdGljc1swXVt2YWx1ZXNJbmRleFt2YWxdXSsrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZVtkYXRhTmFtZV0gPSBzdGF0aXN0aWNzO1xyXG4gICAgcmV0dXJuIHN0YXRpc3RpY3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGNhbGN1bGF0ZWQgc3RhdGlzY3RpY3MgZm9yIHRoZSBJRGF0YUluZm8gb2JqZWN0LlxyXG4gICAqL1xyXG4gIGdldERhdGEoZGF0YUluZm86IElEYXRhSW5mbykge1xyXG4gICAgY29uc3QgZGF0YU5hbWUgPSBkYXRhSW5mby5kYXRhTmFtZTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlW2RhdGFOYW1lXSA9PT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMuX3N0YXRpc3RpY3NDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlID0ge307XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlW2RhdGFOYW1lXSA9IHRoaXMuZ2V0RGF0YUNvcmUoZGF0YUluZm8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9zdGF0aXN0aWNzQ2FjaGVbZGF0YU5hbWVdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVzIHdoZW4gZGF0YSBoYXMgYmVlbiBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvbkRhdGFDaGFuZ2VkID0gbmV3IEV2ZW50PFxyXG4gICAgKHNlbmRlcjogRGF0YVByb3ZpZGVyLCBvcHRpb25zOiBhbnkpID0+IGFueSxcclxuICAgIGFueVxyXG4gID4oKTtcclxuXHJcbiAgcHJvdGVjdGVkIHJhaXNlRGF0YUNoYW5nZWQoKSB7XHJcbiAgICBpZiAoIXRoaXMub25EYXRhQ2hhbmdlZC5pc0VtcHR5KSB7XHJcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlZC5maXJlKHRoaXMsIHt9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuLy9sb2NhbGl6YXRpb25cbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mYXJzaVwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZyZW5jaFwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL3J1c3NpYW5cIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL2RhdGFQcm92aWRlclwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi4vbnVtYmVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vc2VsZWN0QmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL21hdHJpeFwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL2Jvb2xlYW5cIjtcbmV4cG9ydCAqIGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1wiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hdHJpeERyb3Bkb3duXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXJcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL3Bsb3RseS9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3dvcmRjbG91ZC93b3JkY2xvdWRcIjtcbmV4cG9ydCAqIGZyb20gXCIuLi93b3JkY2xvdWQvc3RvcHdvcmRzL2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdGV4dFwiO1xuZXhwb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHMvaW5kZXhcIjtcbiIsImltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XHJcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJdGVtVmFsdWUgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJJbmZvIHtcclxuICBwcml2YXRlIF9odG1sRWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSB0ZXh0OiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IodmlzdWFsaXplcjogU2VsZWN0QmFzZSkge1xyXG4gICAgdGhpcy5faHRtbEVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2EtcXVlc3Rpb25fX2ZpbHRlclwiKVxyXG4gICAgKTtcclxuICAgIHRoaXMudGV4dCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwic3BhblwiLFxyXG4gICAgICBcInNhLXF1ZXN0aW9uX19maWx0ZXItdGV4dFwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5faHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuICAgIGNvbnN0IGZpbHRlckNsZWFyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlQnV0dG9uKCgpID0+IHtcclxuICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcclxuICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjbGVhckJ1dHRvblwiKSk7XHJcbiAgICB0aGlzLl9odG1sRWxlbWVudC5hcHBlbmRDaGlsZChmaWx0ZXJDbGVhcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGh0bWxFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0bWxFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShzZWxlY3Rpb246IHsgdmFsdWU6IGFueTsgdGV4dDogc3RyaW5nIH0pIHtcclxuICAgIGlmIChzZWxlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBzZWxlY3Rpb24udmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgdGhpcy50ZXh0LmlubmVySFRNTCA9IFwiRmlsdGVyOiBbXCIgKyBzZWxlY3Rpb24udGV4dCArIFwiXVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB0aGlzLnRleHQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiY29uc3QgTXV1cmkgPSByZXF1aXJlKFwibXV1cmlcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0RW5naW5lIHtcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2FsbG93ZWQ6IGJvb2xlYW4pIHt9XHJcblxyXG4gIHByb3RlY3RlZCBzdGFydENvcmUoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge31cclxuICBwcm90ZWN0ZWQgc3RvcENvcmUoKSB7fVxyXG4gIHByb3RlY3RlZCB1cGRhdGVDb3JlKCkge31cclxuXHJcbiAgZ2V0IGFsbG93ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dlZDtcclxuICB9XHJcblxyXG4gIHN0YXJ0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLl9hbGxvd2VkKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRDb3JlKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0b3AoKSB7XHJcbiAgICBpZiAodGhpcy5fYWxsb3dlZCkge1xyXG4gICAgICB0aGlzLnN0b3BDb3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLl9hbGxvd2VkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4sIG9wdGlvbnM/OiBhbnkpIHt9XHJcbiAgcmVtb3ZlKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4sIG9wdGlvbnM/OiBhbnkpIHt9XHJcblxyXG4gIG9uTW92ZUNhbGxiYWNrOiAoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE11dXJpTGF5b3V0RW5naW5lIGV4dGVuZHMgTGF5b3V0RW5naW5lIHtcclxuICBwcml2YXRlIF9tdXVyaTogYW55ID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2xheW91dGluZ1RpbWVyOiBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFsbG93ZWQ6IGJvb2xlYW4sIHByaXZhdGUgX3NlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGFsbG93ZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0Q29yZShjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9tdXVyaSA9IG5ldyBNdXVyaShjb250YWluZXIsIHtcclxuICAgICAgZHJhZ1N0YXJ0UHJlZGljYXRlOiB7XHJcbiAgICAgICAgaGFuZGxlOiBcIi5zYS1xdWVzdGlvbl9fdGl0bGUtLWRyYWdnYWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtczogdGhpcy5fc2VsZWN0b3IsXHJcbiAgICAgIGRyYWdFbmFibGVkOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9tdXVyaS5vbihcclxuICAgICAgXCJtb3ZlXCIsXHJcbiAgICAgIChkYXRhOiBhbnkpID0+XHJcbiAgICAgICAgdGhpcy5vbk1vdmVDYWxsYmFjayAmJiB0aGlzLm9uTW92ZUNhbGxiYWNrKGRhdGEuZnJvbUluZGV4LCBkYXRhLnRvSW5kZXgpXHJcbiAgICApO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgc3RvcENvcmUoKSB7XHJcbiAgICB0aGlzLl9tdXVyaS5vZmYoXCJtb3ZlXCIpO1xyXG4gICAgdGhpcy5fbXV1cmkuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5fbXV1cmkgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCB1cGRhdGVDb3JlKCkge1xyXG4gICAgaWYgKHRoaXMuX2xheW91dGluZ1RpbWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2xheW91dGluZ1RpbWVyKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2xheW91dGluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2xheW91dGluZ1RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLl9tdXVyaS5yZWZyZXNoSXRlbXMoKTtcclxuICAgICAgdGhpcy5fbXV1cmkubGF5b3V0KCk7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBhZGQoZWxlbWVudHM6IEFycmF5PEhUTUxFbGVtZW50Piwgb3B0aW9ucz86IGFueSkge1xyXG4gICAgaWYgKHRoaXMuX2FsbG93ZWQpIHRoaXMuX211dXJpLmFkZChlbGVtZW50cywgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIHJlbW92ZShlbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQ+LCBvcHRpb25zPzogYW55KSB7XHJcbiAgICBpZiAodGhpcy5fYWxsb3dlZCkgdGhpcy5fbXV1cmkucmVtb3ZlKGVsZW1lbnRzLCBvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGVuZ2xpc2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICByZW1vdmVSb3dzOiBcIlJlbW92ZSByb3dzXCIsXG4gIHNob3dMYWJlbDogXCJTaG93XCIsXG4gIGVudHJpZXNMYWJlbDogXCJlbnRyaWVzXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0cyBpbiB0YWJsZVwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhY2tlZCBCYXJcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwiSGlkZVwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJNYWtlIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJNYWtlIHB1YmxpY1wiLFxuICBzaG93QnV0dG9uOiBcIlNob3dcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNoYW5nZUxvY2FsZTogXCJDaGFuZ2UgTG9jYWxlXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHRcIixcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXG4gIGRlc2NPcmRlcjogXCJEZXNjZW5kaW5nXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk90aGVyIGl0ZW1zIGFuZCBjb21tZW50c1wiLFxuICBzaG93UGVyY2VudGFnZXM6IFwiU2hvdyBwZXJjZW50YWdlc1wiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwiSGlkZSBwZXJjZW50YWdlc1wiLFxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vbG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcIkVuZ2xpc2hcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZmFyc2lTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCLar9ix2YjZhyDYqNmG2K/bjCDYqNinXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwi2K3YsNmBINqv2LHZiNmHXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCLYp9mG2KrYrtin2KhcIixcbiAgaGlkZUNvbHVtbjogXCLZhdiu2YHbjCDaqdix2K/ZhiDYs9iq2YjZhlwiLFxuICBzaG93Q29sdW1uOiBcItmG2YXYp9uM2LQg2LPYqtmI2YZcIixcbiAgbW92ZVRvRGV0YWlsOiBcItin2YbYqtmC2KfZhCDYqNmHINis2LLYptuM2KfYqlwiLFxuICBzaG93QXNDb2x1bW46IFwi2YbZhdin24zYtCDYqNmHINi52YbZiNin2YYg2LPYqtmI2YZcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcItmF2KrZiNmGINiv2LEg2KzYr9mI2YRcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwi2KfYqNixINqp2YTZhdin2KpcIixcbiAgY2hhcnRUeXBlX2JhcjogXCLZhduM2YTZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwi2K/Yp9io2LHZhyDYp9uMKHBpZSlcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwi2b7Ysdin2qnZhtiv2q/bjChTY2F0dGVyKVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi2LnZgtix2KjZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwi2YXYrtmB24xcIixcbiAgcmVzZXRGaWx0ZXI6IFwi2KjYp9iy2YbYtNin2YbbjCDZgduM2YTYqtix2YfYp1wiLFxuICBjbGVhckJ1dHRvbjogXCLZvtin2qkg2qnYsdiv2YZcIixcbiAgYWRkRWxlbWVudDogXCLYp9mG2KrYrtin2Kgg2LPZiNin2YQg2KjYsdin24wg2YbZhdin24zYtC4uLlwiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZhXCJdID0gZmFyc2lTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZmFcIl0gPSBcIkZhcnNpKFBlcnNpYW4pXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBmcmVuY2hTdHJpbmdzID0ge1xyXG4gICAgZ3JvdXBCdXR0b246IFwiR3JvdXBlclwiLFxyXG4gICAgdW5ncm91cEJ1dHRvbjogXCJEaXNzb2NpZXJcIixcclxuICAgIHNlbGVjdEJ1dHRvbjogXCJTw6lsZWN0aW9ubmVyXCIsXHJcbiAgICBoaWRlQ29sdW1uOiBcIk1hc3F1ZXIgY29sb25uZVwiLFxyXG4gICAgc2hvd0NvbHVtbjogXCJBZmZpY2hlciBjb2xvbm5lXCIsXHJcbiAgICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwcml2w6lcIixcclxuICAgIG1ha2VQdWJsaWNDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHVibGljXCIsXHJcbiAgICBtb3ZlVG9EZXRhaWw6IFwiRMOpcGxhY2VyIHZlcnMgZMOpdGFpbHNcIixcclxuICAgIHNob3dBc0NvbHVtbjogXCJBZmZpY2hlciBlbiBjb2xvbm5lXCIsXHJcbiAgICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dGVzIGVuIHRhYmxlXCIsXHJcbiAgICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJOdWFnZXMgZGUgbW90c1wiLFxyXG4gICAgY2hhcnRUeXBlX2JhcjogXCJCYXJyZXNcIixcclxuICAgIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIkJhcnJlcyBlbXBpbMOpZXNcIixcclxuICAgIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJBbm5lYXVcIixcclxuICAgIGNoYXJ0VHlwZV9waWU6IFwiU2VjdGV1cnNcIixcclxuICAgIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIk51YWdlcyBkZSBwb2ludHNcIixcclxuICAgIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gICAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXNcIixcclxuICAgIGhpZGVCdXR0b246IFwiTWFzcXVlclwiLFxyXG4gICAgcmVzZXRGaWx0ZXI6IFwiUmFmcmFpY2hpciBGaWx0cmVzXCIsXHJcbiAgICBjbGVhckJ1dHRvbjogXCJSYWZyYWljaGlyXCIsXHJcbiAgICBhZGRFbGVtZW50OiBcIkNob2lzaXIgbGEgcXVlc3Rpb24gw6AgYWZmaWNoZXIuLi5cIixcclxuICAgIGRlZmF1bHRPcmRlcjogXCJEZWZhdXRcIixcclxuICAgIGFzY09yZGVyOiBcIkFzY2VuZGFudFwiLFxyXG4gICAgZGVzY09yZGVyOiBcIkRlc2NlbmRhbnRcIixcclxuICAgIHNob3dNaW5vckNvbHVtbnM6IFwiQWZmaWNoZXIgbGVzIGNvbG9ubmVzIG1pbmV1cmVzXCJcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hTdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmclwiXSA9IFwiRnJlbmNoXCI7IiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBydXNzaWFuU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJNYWtlIGNvbHVtbiBwdWJsaWNcIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcItCh0LrRgNGL0YLRjFwiLFxuICBzaG93QnV0dG9uOiBcItCf0L7QutCw0LfQsNGC0YxcIixcbiAgcmVzZXRGaWx0ZXI6IFwi0J7Rh9C40YHRgtC40YLRjCDRhNC40LvRjNGC0YBcIixcbiAgY2hhbmdlTG9jYWxlOiBcItCh0LzQtdC90LjRgtGMINGP0LfRi9C6XCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHRcIixcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXG4gIGRlc2NPcmRlcjogXCJEZXNjZW5kaW5nXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk90aGVyIGl0ZW1zIGFuZCBjb21tZW50c1wiLFxufTtcblxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJydVwiXSA9IHJ1c3NpYW5TdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wicnVcIl0gPSBcIlJ1c3NpYW5cIjtcbiIsImltcG9ydCB7IGVuZ2xpc2hTdHJpbmdzIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uL2VuZ2xpc2hcIjtcblxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XG4gIGN1cnJlbnRMb2NhbGVWYWx1ZTogXCJcIixcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXG4gIGxvY2FsZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBsb2NhbGVOYW1lczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxuICBnZXQgY3VycmVudExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPT09IHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlXG4gICAgICA/IFwiXCJcbiAgICAgIDogdGhpcy5jdXJyZW50TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlXG4gICAgICA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIGlmICghbG9jIHx8ICFsb2Nbc3RyTmFtZV0pIGxvYyA9IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIHZhciByZXN1bHQgPSBsb2Nbc3RyTmFtZV07XG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICByZXMucHVzaChcIlwiKTtcbiAgICBpZiAodGhpcy5zdXBwb3J0ZWRMb2NhbGVzICYmIHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5zb3J0KCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XG4iLCJpbXBvcnQgeyBJdGVtVmFsdWUsIFF1ZXN0aW9uTWF0cml4TW9kZWwsIFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlIH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTWF0cml4IGV4dGVuZHMgU2VsZWN0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3QsXG4gICAgbmFtZT86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucywgbmFtZSB8fCBcIm1hdHJpeFwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbWF0cml4UXVlc3Rpb24oKTogUXVlc3Rpb25NYXRyaXhNb2RlbCB7XG4gICAgcmV0dXJuIDxRdWVzdGlvbk1hdHJpeE1vZGVsPnRoaXMucXVlc3Rpb247XG4gIH1cblxuICBnZXRTZXJpZXNWYWx1ZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4UXVlc3Rpb24ucm93cy5tYXAoKHJvdzogSXRlbVZhbHVlKSA9PiBcIlwiICsgcm93LnZhbHVlKTtcbiAgfVxuXG4gIGdldFNlcmllc0xhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXhRdWVzdGlvbi5yb3dzLm1hcCgocm93OiBJdGVtVmFsdWUpID0+XG4gICAgICBJdGVtVmFsdWUuZ2V0VGV4dE9ySHRtbEJ5VmFsdWUodGhpcy5tYXRyaXhRdWVzdGlvbi5yb3dzLCByb3cudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZEl0ZW1CeVRleHQoaXRlbVRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeFF1ZXN0aW9uLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgKGNvbHVtbjogSXRlbVZhbHVlKSA9PiBjb2x1bW4udGV4dCA9PT0gaXRlbVRleHRcbiAgICApWzBdO1xuICB9XG5cbiAgdmFsdWVzU291cmNlKCk6IEFycmF5PEl0ZW1WYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeFF1ZXN0aW9uLmNvbHVtbnM7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueVtdIHtcbiAgICBjb25zdCBzdGF0aXN0aWNzID0gc3VwZXIuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IHNlcmllcyA9IHRoaXMuZ2V0U2VyaWVzVmFsdWVzKCk7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHByZXBhcmVkRGF0YTogQXJyYXk8QXJyYXk8bnVtYmVyPj4gPSBbXTtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWwsIHZhbHVlSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VyaWVzRGF0YSA9IHNlcmllcy5tYXAoXG4gICAgICAgICAgKHNlcmllc05hbWUsIHNlcmllc0luZGV4KSA9PiBzdGF0aXN0aWNzW3Nlcmllc0luZGV4XVt2YWx1ZUluZGV4XVxuICAgICAgICApO1xuICAgICAgICBwcmVwYXJlZERhdGEucHVzaChzZXJpZXNEYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByZXBhcmVkRGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpc3RpY3M7XG4gIH1cbn1cbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJNb2RlbCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJpdmF0ZSBfcmVzdWx0QXZlcmFnZTogbnVtYmVyO1xuICBwcml2YXRlIF9yZXN1bHRNaW46IG51bWJlcjtcbiAgcHJpdmF0ZSBfcmVzdWx0TWF4OiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBzdGVwc0NvdW50ID0gNTtcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZVRleHRzQ2FsbGJhY2s6IChcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgbWF4VmFsdWU6IG51bWJlcixcbiAgICBtaW5WYWx1ZTogbnVtYmVyLFxuICAgIHN0ZXBzQ291bnQ6IG51bWJlcixcbiAgICB0ZXh0czogc3RyaW5nW11cbiAgKSA9PiBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogQXJyYXk8c3RyaW5nPjtcbiAgY2hhcnRUeXBlOiBTdHJpbmc7XG5cbiAgcHVibGljIHN0YXRpYyBzaG93QXNQZXJjZW50YWdlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge30sXG4gICAgbmFtZT86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucywgbmFtZSB8fCBcIm51bWJlclwiKTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJjaGFuZ2VDaGFydFR5cGVcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudEhlbHBlci5jcmVhdGVTZWxlY3RvcihcbiAgICAgICAgICB0aGlzLmNoYXJ0VHlwZXMubWFwKChjaGFydFR5cGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBjaGFydFR5cGUsXG4gICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFydFR5cGVfXCIgKyBjaGFydFR5cGUpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMuY2hhcnRUeXBlID09PSBvcHRpb24udmFsdWUsXG4gICAgICAgICAgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDaGFydFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGF0YUNoYW5nZWQoKSB7XG4gICAgdGhpcy5fcmVzdWx0QXZlcmFnZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXN1bHRNaW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzdWx0TWF4ID0gdW5kZWZpbmVkO1xuICAgIHN1cGVyLm9uRGF0YUNoYW5nZWQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkNoYXJ0VHlwZUNoYW5nZWQoKSB7fVxuXG4gIHByb3RlY3RlZCBzZXRDaGFydFR5cGUoY2hhcnRUeXBlOiBzdHJpbmcpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNoYXJ0VHlwZXMuaW5kZXhPZihjaGFydFR5cGUpICE9PSAtMSAmJlxuICAgICAgdGhpcy5jaGFydFR5cGUgIT09IGNoYXJ0VHlwZVxuICAgICkge1xuICAgICAgdGhpcy5jaGFydFR5cGUgPSBjaGFydFR5cGU7XG4gICAgICB0aGlzLm9uQ2hhcnRUeXBlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgICAgdGhpcy5yZW5kZXJDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Jlc3VsdE1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXN1bHRNYXggPSB1bmRlZmluZWQ7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVUZXh0KG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGxldCB0ZXh0czogYW55ID0gW107XG5cbiAgICBpZiAoc3RlcHNDb3VudCA9PT0gNSkge1xuICAgICAgdGV4dHMgPSBbXG4gICAgICAgIFwidmVyeSBoaWdoIChcIiArIG1heFZhbHVlICsgXCIpXCIsXG4gICAgICAgIFwiaGlnaFwiLFxuICAgICAgICBcIm1lZGl1bVwiLFxuICAgICAgICBcImxvd1wiLFxuICAgICAgICBcInZlcnkgbG93IChcIiArIG1pblZhbHVlICsgXCIpXCIsXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0cy5wdXNoKG1heFZhbHVlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHNDb3VudCAtIDI7IGkrKykge1xuICAgICAgICB0ZXh0cy5wdXNoKFwiXCIpO1xuICAgICAgfVxuICAgICAgdGV4dHMucHVzaChtaW5WYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCEhTnVtYmVyTW9kZWwuZ2VuZXJhdGVUZXh0c0NhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gTnVtYmVyTW9kZWwuZ2VuZXJhdGVUZXh0c0NhbGxiYWNrKFxuICAgICAgICB0aGlzLnF1ZXN0aW9uLFxuICAgICAgICBtYXhWYWx1ZSxcbiAgICAgICAgbWluVmFsdWUsXG4gICAgICAgIHN0ZXBzQ291bnQsXG4gICAgICAgIHRleHRzXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0cztcbiAgfVxuXG4gIGdlbmVyYXRlVmFsdWVzKG1heFZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50OyBpKyspIHtcbiAgICAgIHZhbHVlcy5wdXNoKG1heFZhbHVlIC8gc3RlcHNDb3VudCk7XG4gICAgfVxuXG4gICAgdmFsdWVzLnB1c2gobWF4VmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGdlbmVyYXRlQ29sb3JzKG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50OyBpKyspIHtcbiAgICAgIGNvbG9ycy5wdXNoKHBhbGV0dGVbaV0pO1xuICAgIH1cblxuICAgIGNvbG9ycy5wdXNoKFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiKTtcblxuICAgIHJldHVybiBjb2xvcnM7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuX3Jlc3VsdEF2ZXJhZ2UgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fcmVzdWx0TWluID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX3Jlc3VsdE1heCA9PT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVzdGlvblZhbHVlczogQXJyYXk8YW55PiA9IFtdO1xuICAgICAgdGhpcy5fcmVzdWx0TWluID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgIHRoaXMuX3Jlc3VsdE1heCA9IC1OdW1iZXIuTUFYX1ZBTFVFO1xuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocm93RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBudW1iZXIgPSArcm93RGF0YVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgICBpZiAocXVlc3Rpb25WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcXVlc3Rpb25WYWx1ZXMucHVzaChxdWVzdGlvblZhbHVlKTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVzdWx0TWluID4gcXVlc3Rpb25WYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0TWluID0gcXVlc3Rpb25WYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX3Jlc3VsdE1heCA8IHF1ZXN0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdE1heCA9IHF1ZXN0aW9uVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fcmVzdWx0QXZlcmFnZSA9XG4gICAgICAgIHF1ZXN0aW9uVmFsdWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gcXVlc3Rpb25WYWx1ZXMubGVuZ3RoO1xuICAgICAgdGhpcy5fcmVzdWx0QXZlcmFnZSA9IE1hdGguY2VpbCh0aGlzLl9yZXN1bHRBdmVyYWdlICogMTAwKSAvIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIFt0aGlzLl9yZXN1bHRBdmVyYWdlLCB0aGlzLl9yZXN1bHRNaW4sIHRoaXMuX3Jlc3VsdE1heF07XG4gIH1cbn1cbiIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvbkJvb2xlYW5Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IEJvb2xlYW5Nb2RlbCB9IGZyb20gXCIuLi9ib29sZWFuXCI7XG5pbXBvcnQgeyBQbG90bHlDaGFydEFkYXB0ZXIgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUGxvdGx5Qm9vbENoYXJ0QWRhcHRlciBleHRlbmRzIFBsb3RseUNoYXJ0QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsOiBCb29sZWFuUGxvdGx5KSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBhdGNoQ29uZmlnUGFyYW1ldGVycyhcbiAgICBjaGFydE5vZGU6IG9iamVjdCxcbiAgICB0cmFjZXM6IEFycmF5PG9iamVjdD4sXG4gICAgbGF5b3V0OiBvYmplY3QsXG4gICAgY29uZmlnOiBvYmplY3RcbiAgKSB7XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5tb2RlbC5nZXRDb2xvcnMoKTtcbiAgICBjb25zdCBib29sQ29sb3JzID0gW1xuICAgICAgQm9vbGVhblBsb3RseS50cnVlQ29sb3IgfHwgY29sb3JzWzBdLFxuICAgICAgQm9vbGVhblBsb3RseS5mYWxzZUNvbG9yIHx8IGNvbG9yc1sxXSxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcInBpZVwiIHx8IHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCIpIHtcbiAgICAgIHRyYWNlcy5mb3JFYWNoKCh0cmFjZTogYW55KSA9PiB7XG4gICAgICAgIHRyYWNlLm1hcmtlci5jb2xvcnMgPSBib29sQ29sb3JzO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJiYXJcIikge1xuICAgICAgdHJhY2VzLmZvckVhY2goKHRyYWNlOiBhbnkpID0+IHtcbiAgICAgICAgdHJhY2UubWFya2VyLmNvbG9yID0gYm9vbENvbG9ycztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm9vbGVhblBsb3RseSBleHRlbmRzIEJvb2xlYW5Nb2RlbCB7XG4gIHByaXZhdGUgX2NoYXJ0QWRhcHRlcjogUGxvdGx5Q2hhcnRBZGFwdGVyO1xuICBwdWJsaWMgc3RhdGljIHR5cGVzID0gW1wicGllXCIsIFwiYmFyXCIsIFwiZG91Z2hudXRcIl07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydFR5cGVzID0gQm9vbGVhblBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIgPSBuZXcgUGxvdGx5Qm9vbENoYXJ0QWRhcHRlcih0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmRlc3Ryb3koPEhUTUxFbGVtZW50PmNvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGFydE5vZGU6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PihcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFydE5vZGUpO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5jcmVhdGUoY2hhcnROb2RlKTtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJib29sZWFuXCIsIEJvb2xlYW5QbG90bHkpO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcmF0aW5nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXRyaXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Jvb2xlYW5cIjtcbiIsImltcG9ydCB7IEl0ZW1WYWx1ZSwgUXVlc3Rpb25NYXRyaXhNb2RlbCwgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgeyBQbG90bHlDaGFydEFkYXB0ZXIgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgTWF0cml4UGxvdGx5IGV4dGVuZHMgTWF0cml4IHtcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlDaGFydEFkYXB0ZXI7XG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJiYXJcIiwgXCJzdGFja2VkYmFyXCIsIFwicGllXCIsIFwiZG91Z2hudXRcIl07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydFR5cGVzID0gTWF0cml4UGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlciA9IG5ldyBQbG90bHlDaGFydEFkYXB0ZXIodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5kZXN0cm95KDxIVE1MRWxlbWVudD5jb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY2hhcnROb2RlOiBIVE1MRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm1hdHJpeFwiLCBNYXRyaXhQbG90bHkpO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IE51bWJlck1vZGVsIH0gZnJvbSBcIi4uL251bWJlclwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IGFsbG93RG9tUmVuZGVyaW5nLCBEYXRhSGVscGVyLCBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxudmFyIFBsb3RseTogYW55ID0gbnVsbDtcbmlmIChhbGxvd0RvbVJlbmRlcmluZygpKSB7XG4gIFBsb3RseSA9IDxhbnk+cmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpO1xufVxuXG5leHBvcnQgY2xhc3MgUGxvdGx5R2F1Z2VBZGFwdGVyIHtcbiAgcHJpdmF0ZSBfY2hhcnQ6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PiA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGVsOiBHYXVnZVBsb3RseSkge31cblxuICBwdWJsaWMgZ2V0IGNoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoY2hhcnROb2RlOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5tb2RlbC5xdWVzdGlvbjtcbiAgICBsZXQgW2xldmVsLCBtaW5WYWx1ZSwgbWF4VmFsdWVdID0gdGhpcy5tb2RlbC5nZXREYXRhKCk7XG5cbiAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInJhdGluZ1wiKSB7XG4gICAgICBjb25zdCByYXRlVmFsdWVzID0gcXVlc3Rpb24udmlzaWJsZVJhdGVWYWx1ZXM7XG4gICAgICBtYXhWYWx1ZSA9IHJhdGVWYWx1ZXNbcmF0ZVZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZTtcbiAgICAgIG1pblZhbHVlID0gcmF0ZVZhbHVlc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLm1vZGVsLmdlbmVyYXRlQ29sb3JzKFxuICAgICAgbWF4VmFsdWUsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIEdhdWdlUGxvdGx5LnN0ZXBzQ291bnRcbiAgICApO1xuXG4gICAgaWYgKEdhdWdlUGxvdGx5LnNob3dBc1BlcmNlbnRhZ2UpIHtcbiAgICAgIGxldmVsID0gRGF0YUhlbHBlci50b1BlcmNlbnRhZ2UobGV2ZWwsIG1heFZhbHVlKTtcbiAgICAgIG1pblZhbHVlID0gRGF0YUhlbHBlci50b1BlcmNlbnRhZ2UobWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICAgIG1heFZhbHVlID0gRGF0YUhlbHBlci50b1BlcmNlbnRhZ2UobWF4VmFsdWUsIG1heFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YTogYW55ID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcImluZGljYXRvclwiLFxuICAgICAgICBtb2RlOiBcImdhdWdlK251bWJlclwiLFxuICAgICAgICBnYXVnZToge1xuICAgICAgICAgIGF4aXM6IHsgcmFuZ2U6IFttaW5WYWx1ZSwgbWF4VmFsdWVdIH0sXG4gICAgICAgICAgc2hhcGU6IHRoaXMubW9kZWwuY2hhcnRUeXBlLFxuICAgICAgICAgIGJnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBiYXI6IHsgY29sb3I6IGNvbG9yc1swXSB9LFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogbGV2ZWwsXG4gICAgICAgIHRleHQ6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRvbWFpbjogeyB4OiBbMCwgMV0sIHk6IFswLCAxXSB9LFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgdmFyIGhlaWdodCA9IDQwMDtcblxuICAgIGlmICh0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJidWxsZXRcIikge1xuICAgICAgaGVpZ2h0ID0gMjUwO1xuICAgIH1cblxuICAgIHZhciBsYXlvdXQgPSB7XG4gICAgICB3aWR0aDogNjAwLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBwbG90X2JnY29sb3I6IHRoaXMubW9kZWwuYmFja2dyb3VuZENvbG9yLFxuICAgICAgcGFwZXJfYmdjb2xvcjogdGhpcy5tb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGRpc3BsYXlNb2RlQmFyOiBmYWxzZSxcbiAgICAgIHN0YXRpY1Bsb3Q6IHRydWUsXG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxuICAgIH07XG5cbiAgICByZXR1cm4gUGxvdGx5Lm5ld1Bsb3QoY2hhcnROb2RlLCBkYXRhLCBsYXlvdXQsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveShub2RlOiBIVE1MRWxlbWVudCkge1xuICAgIFBsb3RseS5wdXJnZShub2RlKTtcbiAgICB0aGlzLl9jaGFydCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2F1Z2VQbG90bHkgZXh0ZW5kcyBOdW1iZXJNb2RlbCB7XG4gIHByaXZhdGUgX2NoYXJ0QWRhcHRlcjogUGxvdGx5R2F1Z2VBZGFwdGVyO1xuXG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJnYXVnZVwiLCBcImJ1bGxldFwiXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBHYXVnZVBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIgPSBuZXcgUGxvdGx5R2F1Z2VBZGFwdGVyKHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIuZGVzdHJveSg8SFRNTEVsZW1lbnQ+Y29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFydE5vZGUpO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5jcmVhdGUoY2hhcnROb2RlKTtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJudW1iZXJcIiwgR2F1Z2VQbG90bHkpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwicmF0aW5nXCIsIEdhdWdlUGxvdGx5KTtcbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBJdGVtVmFsdWUgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vc2VsZWN0QmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IGFsbG93RG9tUmVuZGVyaW5nLCBEYXRhSGVscGVyLCBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxudmFyIFBsb3RseTogYW55ID0gbnVsbDtcbmlmIChhbGxvd0RvbVJlbmRlcmluZygpKSB7XG4gIFBsb3RseSA9IDxhbnk+cmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpO1xufVxuXG5leHBvcnQgY2xhc3MgUGxvdGx5Q2hhcnRBZGFwdGVyIHtcbiAgcHJpdmF0ZSBfY2hhcnQ6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PiA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbW9kZWw6IFNlbGVjdEJhc2UpIHt9XG5cbiAgcHJvdGVjdGVkIHBhdGNoQ29uZmlnUGFyYW1ldGVycyhcbiAgICBjaGFydE5vZGU6IG9iamVjdCxcbiAgICB0cmFjZXM6IEFycmF5PG9iamVjdD4sXG4gICAgbGF5b3V0OiBvYmplY3QsXG4gICAgY29uZmlnOiBvYmplY3RcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXQgY2hhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShjaGFydE5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgdmFyIHBsb3RseU9wdGlvbnMgPSBQbG90bHlTZXR1cC5zZXR1cCh0aGlzLm1vZGVsLmNoYXJ0VHlwZSwgdGhpcy5tb2RlbCk7XG5cbiAgICBsZXQgY29uZmlnOiBhbnkgPSB7XG4gICAgICBkaXNwbGF5bG9nbzogZmFsc2UsXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgbG9jYWxlOiBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSxcbiAgICB9O1xuICAgIGlmIChTZWxlY3RCYXNlUGxvdGx5LmRpc3BsYXlNb2RlQmFyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5kaXNwbGF5TW9kZUJhciA9IFNlbGVjdEJhc2VQbG90bHkuZGlzcGxheU1vZGVCYXI7XG4gICAgfVxuXG4gICAgdGhpcy5wYXRjaENvbmZpZ1BhcmFtZXRlcnMoXG4gICAgICBjaGFydE5vZGUsXG4gICAgICBwbG90bHlPcHRpb25zLnRyYWNlcyxcbiAgICAgIHBsb3RseU9wdGlvbnMubGF5b3V0LFxuICAgICAgY29uZmlnXG4gICAgKTtcblxuICAgIGNvbnN0IHBsb3QgPSBQbG90bHkubmV3UGxvdChcbiAgICAgIGNoYXJ0Tm9kZSxcbiAgICAgIHBsb3RseU9wdGlvbnMudHJhY2VzLFxuICAgICAgcGxvdGx5T3B0aW9ucy5sYXlvdXQsXG4gICAgICBjb25maWdcbiAgICApO1xuXG4gICAgKDxhbnk+Y2hhcnROb2RlKVtcIm9uXCJdKFwicGxvdGx5X2NsaWNrXCIsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmIChkYXRhLnBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gcGxvdGx5T3B0aW9ucy5oYXNTZXJpZXNcbiAgICAgICAgICA/IGRhdGEucG9pbnRzWzBdLmRhdGEubmFtZVxuICAgICAgICAgIDogQXJyYXkuaXNBcnJheShkYXRhLnBvaW50c1swXS5jdXN0b21kYXRhKVxuICAgICAgICAgID8gZGF0YS5wb2ludHNbMF0uY3VzdG9tZGF0YVswXVxuICAgICAgICAgIDogZGF0YS5wb2ludHNbMF0uY3VzdG9tZGF0YTtcbiAgICAgICAgY29uc3QgaXRlbTogSXRlbVZhbHVlID0gdGhpcy5tb2RlbC5nZXRTZWxlY3RlZEl0ZW1CeVRleHQoaXRlbVRleHQpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldFNlbGVjdGlvbihpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBnZXREcmFnTGF5ZXIgPSAoKSA9PlxuICAgICAgPEhUTUxFbGVtZW50PmNoYXJ0Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibnNld2RyYWdcIilbMF07XG4gICAgKDxhbnk+Y2hhcnROb2RlKVtcIm9uXCJdKFwicGxvdGx5X2hvdmVyXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGRyYWdMYXllciA9IGdldERyYWdMYXllcigpO1xuICAgICAgZHJhZ0xheWVyICYmIChkcmFnTGF5ZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCIpO1xuICAgIH0pO1xuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV91bmhvdmVyXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGRyYWdMYXllciA9IGdldERyYWdMYXllcigpO1xuICAgICAgZHJhZ0xheWVyICYmIChkcmFnTGF5ZXIuc3R5bGUuY3Vyc29yID0gXCJcIik7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jaGFydCA9IHBsb3Q7XG4gICAgcmV0dXJuIHBsb3Q7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveShub2RlOiBIVE1MRWxlbWVudCkge1xuICAgIFBsb3RseS5wdXJnZShub2RlKTtcbiAgICB0aGlzLl9jaGFydCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsb3RseU9wdGlvbnMge1xuICB0cmFjZXM6IEFycmF5PGFueT47XG4gIGxheW91dDogYW55O1xuICBoYXNTZXJpZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBQbG90bHlTZXR1cCB7XG4gIHN0YXRpYyBzZXR1cHM6IHsgW3R5cGU6IHN0cmluZ106IChtb2RlbDogU2VsZWN0QmFzZSkgPT4gUGxvdGx5T3B0aW9ucyB9ID0ge1xuICAgIGJhcjogUGxvdGx5U2V0dXAuc2V0dXBCYXIsXG4gICAgc3RhY2tlZGJhcjogUGxvdGx5U2V0dXAuc2V0dXBCYXIsXG4gICAgZG91Z2hudXQ6IFBsb3RseVNldHVwLnNldHVwUGllLFxuICAgIHBpZTogUGxvdGx5U2V0dXAuc2V0dXBQaWUsXG4gICAgc2NhdHRlcjogUGxvdGx5U2V0dXAuc2V0dXBTY2F0dGVyLFxuICB9O1xuXG4gIHN0YXRpYyBzZXR1cChjaGFyVHlwZTogc3RyaW5nLCBtb2RlbDogU2VsZWN0QmFzZSk6IFBsb3RseU9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLnNldHVwc1tjaGFyVHlwZV0obW9kZWwpO1xuICB9XG5cbiAgc3RhdGljIHNldHVwUGllKG1vZGVsOiBTZWxlY3RCYXNlKTogUGxvdGx5T3B0aW9ucyB7XG4gICAgbGV0IGRhdGFzZXRzID0gbW9kZWwuZ2V0RGF0YSgpO1xuICAgIGxldCBzZXJpZXNWYWx1ZXMgPSBtb2RlbC5nZXRTZXJpZXNWYWx1ZXMoKTtcbiAgICBsZXQgc2VyaWVzTGFiZWxzID0gbW9kZWwuZ2V0U2VyaWVzTGFiZWxzKCk7XG4gICAgbGV0IGxhYmVscyA9IG1vZGVsLmdldExhYmVscygpO1xuICAgIGxldCBjb2xvcnMgPSBtb2RlbC5nZXRDb2xvcnMoKTtcbiAgICBjb25zdCB0cmFjZXM6IGFueSA9IFtdO1xuICAgIGNvbnN0IGhhc1NlcmllcyA9IGRhdGFzZXRzLmxlbmd0aCA+IDEgJiYgc2VyaWVzVmFsdWVzLmxlbmd0aCA+IDE7XG5cbiAgICBjb25zdCB0cmFjZUNvbmZpZzogYW55ID0ge1xuICAgICAgdHlwZTogbW9kZWwuY2hhcnRUeXBlLFxuICAgICAgeTogaGFzU2VyaWVzID8gc2VyaWVzTGFiZWxzIDogbGFiZWxzLFxuICAgICAgdGV4dDogKGhhc1NlcmllcyA/IHNlcmllc0xhYmVscyA6IGxhYmVscykubWFwKChsKSA9PiB7XG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgcmV0dXJuIGwuc3Vic3RyaW5nKDAsIDI3KSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KSxcbiAgICAgIGhvdmVyaW5mbzogXCJ4K3lcIixcbiAgICAgIG1vZGU6IFwibWFya2Vyc1wiLFxuICAgICAgbWFya2VyOiA8YW55Pnt9LFxuICAgIH07XG5cbiAgICB0cmFjZUNvbmZpZy5ob3ZlcmluZm8gPSBcImxhYmVsK3ZhbHVlK3BlcmNlbnRcIjtcbiAgICB0cmFjZUNvbmZpZy5tYXJrZXIuY29sb3JzID0gY29sb3JzO1xuICAgIHRyYWNlQ29uZmlnLnRleHRwb3NpdGlvbiA9IFwiaW5zaWRlXCI7XG5cbiAgICBpZiAobW9kZWwuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCIpIHtcbiAgICAgIHRyYWNlQ29uZmlnLnR5cGUgPSBcInBpZVwiO1xuICAgICAgdHJhY2VDb25maWcuaG9sZSA9IDAuNDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1Nlcmllcykge1xuICAgICAgdHJhY2VDb25maWcubWFya2VyLnN5bWJvbCA9IFwiY2lyY2xlXCI7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuc2l6ZSA9IDE2O1xuICAgIH1cblxuICAgIGRhdGFzZXRzLmZvckVhY2goKGRhdGFzZXQ6IEFycmF5PG51bWJlcj4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRyYWNlcy5wdXNoKFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0cmFjZUNvbmZpZywge1xuICAgICAgICAgIHZhbHVlczogZGF0YXNldCxcbiAgICAgICAgICBsYWJlbHM6IGhhc1NlcmllcyA/IHNlcmllc0xhYmVscyA6IGxhYmVscyxcbiAgICAgICAgICBjdXN0b21kYXRhOiBoYXNTZXJpZXMgPyBzZXJpZXNMYWJlbHMgOiBsYWJlbHMsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IHJhZGl1cyA9IGxhYmVscy5sZW5ndGggPCAxMCA/IGxhYmVscy5sZW5ndGggKiA1MCArIDEwMCA6IDU1MDtcbiAgICBjb25zdCBoZWlnaHQgPSByYWRpdXMgKiBNYXRoLnJvdW5kKHRyYWNlcy5sZW5ndGggLyAyKTtcbiAgICBjb25zdCBsYXlvdXQ6IGFueSA9IHtcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgZmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIHNpemU6IDE0LFxuICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgIGNvbG9yOiBcIiM0MDQwNDBcIixcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICBsOiAwLFxuICAgICAgICB0OiAwLFxuICAgICAgICBiOiAwLFxuICAgICAgICByOiAxMCxcbiAgICAgIH0sXG4gICAgICBjb2xvcndheTogY29sb3JzLFxuICAgICAgaG92ZXJtb2RlOiBcImNsb3Nlc3RcIixcbiAgICAgIHBsb3RfYmdjb2xvcjogbW9kZWwuYmFja2dyb3VuZENvbG9yLFxuICAgICAgcGFwZXJfYmdjb2xvcjogbW9kZWwuYmFja2dyb3VuZENvbG9yLFxuICAgICAgc2hvd2xlZ2VuZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGlmIChoYXNTZXJpZXMpIHtcbiAgICAgIGxheW91dC5ncmlkID0ge1xuICAgICAgICByb3dzOiBNYXRoLnJvdW5kKHRyYWNlcy5sZW5ndGggLyAyKSxcbiAgICAgICAgY29sdW1uczogMixcbiAgICAgIH07XG4gICAgICBsYXlvdXQuYW5ub3RhdGlvbnMgPSBbXTtcbiAgICAgIGxhYmVscy5mb3JFYWNoKChsYWJlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgdHJhY2VzW2luZGV4XS5kb21haW4gPSB7XG4gICAgICAgICAgY29sdW1uOiBpbmRleCAlIDIsXG4gICAgICAgICAgcm93OiBNYXRoLmZsb29yKGluZGV4IC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHRyYWNlc1tpbmRleF0udGl0bGUgPSB7IHBvc2l0aW9uOiBcImJvdHRvbSBjZW50ZXJcIiwgdGV4dDogbGFiZWwgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyB0cmFjZXMsIGxheW91dCwgaGFzU2VyaWVzIH07XG4gIH1cblxuICBzdGF0aWMgc2V0dXBCYXIobW9kZWw6IFNlbGVjdEJhc2UpOiBQbG90bHlPcHRpb25zIHtcbiAgICBsZXQgZGF0YXNldHMgPSBtb2RlbC5nZXREYXRhKCk7XG4gICAgbGV0IHNlcmllc1ZhbHVlcyA9IG1vZGVsLmdldFNlcmllc1ZhbHVlcygpO1xuICAgIGxldCBzZXJpZXNMYWJlbHMgPSBtb2RlbC5nZXRTZXJpZXNMYWJlbHMoKTtcbiAgICBsZXQgbGFiZWxzID0gbW9kZWwuZ2V0TGFiZWxzKCk7XG4gICAgbGV0IGNvbG9ycyA9IG1vZGVsLmdldENvbG9ycygpO1xuICAgIGNvbnN0IHRyYWNlczogYW55ID0gW107XG4gICAgY29uc3QgaGFzU2VyaWVzID0gZGF0YXNldHMubGVuZ3RoID4gMSAmJiBzZXJpZXNWYWx1ZXMubGVuZ3RoID4gMTtcblxuICAgIGlmIChtb2RlbC5vcmRlckJ5QW5zd2VyZXMgPT0gXCJhc2NcIiB8fCBtb2RlbC5vcmRlckJ5QW5zd2VyZXMgPT0gXCJkZXNjXCIpIHtcbiAgICAgIGxldCBkaWN0ID0gRGF0YUhlbHBlci5zb3J0RGljdGlvbmFyeShcbiAgICAgICAgRGF0YUhlbHBlci56aXBBcnJheXMobGFiZWxzLCBjb2xvcnMpLFxuICAgICAgICBkYXRhc2V0c1swXSxcbiAgICAgICAgbW9kZWwub3JkZXJCeUFuc3dlcmVzID09IFwiZGVzY1wiXG4gICAgICApO1xuICAgICAgbGV0IGxhYmVsc0FuZENvbG9ycyA9IERhdGFIZWxwZXIudW56aXBBcnJheXMoZGljdC5rZXlzKTtcbiAgICAgIGxhYmVscyA9IGxhYmVsc0FuZENvbG9ycy5maXJzdDtcbiAgICAgIGNvbG9ycyA9IGxhYmVsc0FuZENvbG9ycy5zZWNvbmQ7XG4gICAgICBkYXRhc2V0c1swXSA9IGRpY3QudmFsdWVzO1xuICAgIH1cbiAgICBjb25zdCB0cmFjZUNvbmZpZzogYW55ID0ge1xuICAgICAgdHlwZTogbW9kZWwuY2hhcnRUeXBlLFxuICAgICAgeTogKGhhc1NlcmllcyA/IHNlcmllc0xhYmVscyA6IGxhYmVscykubWFwKChsKSA9PiB7XG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgcmV0dXJuIGwuc3Vic3RyaW5nKDAsIDI3KSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KSxcbiAgICAgIGN1c3RvbWRhdGE6IGhhc1NlcmllcyA/IHNlcmllc0xhYmVscyA6IGxhYmVscyxcbiAgICAgIGhvdmVyaW5mbzogXCJ4K3lcIixcbiAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgIG1vZGU6IFwibWFya2Vyc1wiLFxuICAgICAgd2lkdGg6IDAuNSxcbiAgICAgIG1hcmtlcjogPGFueT57fSxcbiAgICB9O1xuICAgIHRyYWNlQ29uZmlnLm1hcmtlci5jb2xvciA9IGNvbG9ycztcblxuICAgIHZhciB0ZXh0cyA9IG1vZGVsLnNob3dQZXJjZW50YWdlcyA/IG1vZGVsLmdldFBlcmNlbnRhZ2VzKCkgOiBkYXRhc2V0cztcblxuICAgIGRhdGFzZXRzLmZvckVhY2goKGRhdGFzZXQ6IEFycmF5PG51bWJlcj4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHZhciB0cmFjZSA9IE9iamVjdC5hc3NpZ24oe30sIHRyYWNlQ29uZmlnLCB7XG4gICAgICAgIHg6IGRhdGFzZXQsXG4gICAgICAgIHRleHQ6IHRleHRzW2luZGV4XSxcbiAgICAgIH0pO1xuICAgICAgaWYgKG1vZGVsLnNob3dQZXJjZW50YWdlcykge1xuICAgICAgICB0cmFjZS50ZXh0cG9zaXRpb24gPSBcImluc2lkZVwiO1xuICAgICAgICB0cmFjZS50ZXh0dGVtcGxhdGUgPSBcIiV7dmFsdWV9ICgle3RleHR9JSlcIjtcbiAgICAgICAgdHJhY2Uud2lkdGggPSAwLjk7XG4gICAgICB9XG4gICAgICB0cmFjZXMucHVzaCh0cmFjZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWlnaHQgPSAobGFiZWxzLmxlbmd0aCArIChsYWJlbHMubGVuZ3RoICsgMSkgKiAwLjUpICogMjA7XG5cbiAgICBjb25zdCBsYXlvdXQ6IGFueSA9IHtcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgZmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIHNpemU6IDE0LFxuICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgIGNvbG9yOiBcIiM0MDQwNDBcIixcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0OiAwLFxuICAgICAgICBiOiAwLFxuICAgICAgICByOiAxMCxcbiAgICAgIH0sXG4gICAgICBjb2xvcndheTogY29sb3JzLFxuICAgICAgaG92ZXJtb2RlOiBcImNsb3Nlc3RcIixcbiAgICAgIHlheGlzOiB7XG4gICAgICAgIGF1dG9tYXJnaW46IHRydWUsXG4gICAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgdGlja2xlbjogNSxcbiAgICAgICAgdGlja2NvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgcmFuZ2Vtb2RlOiBcIm5vbm5lZ2F0aXZlXCIsXG4gICAgICAgIGF1dG9tYXJnaW46IHRydWUsXG4gICAgICB9LFxuICAgICAgcGxvdF9iZ2NvbG9yOiBtb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiBtb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBzaG93bGVnZW5kOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaWYgKGhhc1Nlcmllcykge1xuICAgICAgbGF5b3V0LnNob3dsZWdlbmQgPSB0cnVlO1xuICAgICAgbGF5b3V0LmhlaWdodCA9XG4gICAgICAgIChsYWJlbHMubGVuZ3RoICsgKGxhYmVscy5sZW5ndGggKyAxKSAqIDAuNSkgKiAxNSAqIHRyYWNlcy5sZW5ndGg7XG4gICAgICBpZiAobW9kZWwuY2hhcnRUeXBlID09IFwic3RhY2tlZGJhclwiKSB7XG4gICAgICAgIGxheW91dC5iYXJtb2RlID0gXCJzdGFja1wiO1xuICAgICAgfVxuXG4gICAgICBsYWJlbHMuZm9yRWFjaCgobGFiZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHRyYWNlc1tpbmRleF0uaG92ZXJpbmZvID0gXCJ4K25hbWVcIjtcbiAgICAgICAgdHJhY2VzW2luZGV4XS5tYXJrZXIuY29sb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyYWNlc1tpbmRleF0ubmFtZSA9IGxhYmVsO1xuXG4gICAgICAgIGlmIChtb2RlbC5jaGFydFR5cGUgPT09IFwic3RhY2tlZGJhclwiKSB7XG4gICAgICAgICAgdHJhY2VzW2luZGV4XS50eXBlID0gXCJiYXJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYWNlc1tpbmRleF0ud2lkdGggPVxuICAgICAgICAgIChtb2RlbC5zaG93UGVyY2VudGFnZXMgPyAwLjcgOiAwLjUpIC8gdHJhY2VzLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyB0cmFjZXMsIGxheW91dCwgaGFzU2VyaWVzIH07XG4gIH1cblxuICBzdGF0aWMgc2V0dXBTY2F0dGVyKG1vZGVsOiBTZWxlY3RCYXNlKTogUGxvdGx5T3B0aW9ucyB7XG4gICAgbGV0IGRhdGFzZXRzID0gbW9kZWwuZ2V0RGF0YSgpO1xuICAgIGxldCBzZXJpZXNWYWx1ZXMgPSBtb2RlbC5nZXRTZXJpZXNWYWx1ZXMoKTtcbiAgICBsZXQgc2VyaWVzTGFiZWxzID0gbW9kZWwuZ2V0U2VyaWVzTGFiZWxzKCk7XG4gICAgY29uc3QgaGFzU2VyaWVzID0gZGF0YXNldHMubGVuZ3RoID4gMSAmJiBzZXJpZXNWYWx1ZXMubGVuZ3RoID4gMTtcbiAgICBsZXQgbGFiZWxzID0gbW9kZWwuZ2V0TGFiZWxzKCk7XG4gICAgbGV0IGNvbG9ycyA9IG1vZGVsLmdldENvbG9ycygpO1xuICAgIGNvbnN0IHRyYWNlczogYW55ID0gW107XG5cbiAgICBjb25zdCB0cmFjZUNvbmZpZzogYW55ID0ge1xuICAgICAgdHlwZTogXCJzY2F0dGVyXCIsXG4gICAgICB5OiAoaGFzU2VyaWVzID8gc2VyaWVzTGFiZWxzIDogbGFiZWxzKS5tYXAoKGwpID0+IHtcbiAgICAgICAgaWYgKGwubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICByZXR1cm4gbC5zdWJzdHJpbmcoMCwgMjcpICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH0pLFxuICAgICAgY3VzdG9tZGF0YTogaGFzU2VyaWVzID8gc2VyaWVzTGFiZWxzIDogbGFiZWxzLFxuICAgICAgdGV4dDogaGFzU2VyaWVzID8gc2VyaWVzTGFiZWxzIDogbGFiZWxzLFxuICAgICAgaG92ZXJpbmZvOiBcIngreVwiLFxuICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgbW9kZTogXCJtYXJrZXJzXCIsXG4gICAgICB3aWR0aDogMC41LFxuICAgICAgbWFya2VyOiA8YW55Pnt9LFxuICAgIH07XG5cbiAgICBpZiAoIWhhc1Nlcmllcykge1xuICAgICAgdHJhY2VDb25maWcubWFya2VyLnN5bWJvbCA9IFwiY2lyY2xlXCI7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuc2l6ZSA9IDE2O1xuICAgIH1cblxuICAgIGRhdGFzZXRzLmZvckVhY2goKGRhdGFzZXQ6IEFycmF5PG51bWJlcj4pID0+IHtcbiAgICAgIHtcbiAgICAgICAgdmFyIHRyYWNlID0gT2JqZWN0LmFzc2lnbih7fSwgdHJhY2VDb25maWcsIHtcbiAgICAgICAgICB4OiBkYXRhc2V0LFxuICAgICAgICB9KTtcbiAgICAgICAgdHJhY2VzLnB1c2godHJhY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gKGxhYmVscy5sZW5ndGggKyAobGFiZWxzLmxlbmd0aCArIDEpICogMC41KSAqIDIwO1xuXG4gICAgY29uc3QgbGF5b3V0OiBhbnkgPSB7XG4gICAgICBmb250OiB7XG4gICAgICAgIGZhbWlseTogXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBzaXplOiAxNCxcbiAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICBjb2xvcjogXCIjNDA0MDQwXCIsXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdDogMCxcbiAgICAgICAgYjogMCxcbiAgICAgICAgcjogMTAsXG4gICAgICB9LFxuICAgICAgY29sb3J3YXk6IGNvbG9ycyxcbiAgICAgIGhvdmVybW9kZTogXCJjbG9zZXN0XCIsXG4gICAgICB5YXhpczoge1xuICAgICAgICBhdXRvbWFyZ2luOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImNhdGVnb3J5XCIsXG4gICAgICAgIHRpY2tsZW46IDUsXG4gICAgICAgIHRpY2tjb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIHJhbmdlbW9kZTogXCJub25uZWdhdGl2ZVwiLFxuICAgICAgICBhdXRvbWFyZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHBsb3RfYmdjb2xvcjogbW9kZWwuYmFja2dyb3VuZENvbG9yLFxuICAgICAgcGFwZXJfYmdjb2xvcjogbW9kZWwuYmFja2dyb3VuZENvbG9yLFxuICAgICAgc2hvd2xlZ2VuZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGlmIChoYXNTZXJpZXMpIHtcbiAgICAgIGxheW91dC5zaG93bGVnZW5kID0gdHJ1ZTtcbiAgICAgIGxheW91dC5oZWlnaHQgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGxhYmVscy5mb3JFYWNoKChsYWJlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgdHJhY2VzW2luZGV4XS5ob3ZlcmluZm8gPSBcIngrbmFtZVwiO1xuICAgICAgICB0cmFjZXNbaW5kZXhdLm1hcmtlci5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJhY2VzW2luZGV4XS5uYW1lID0gbGFiZWw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdHJhY2VzLCBsYXlvdXQsIGhhc1NlcmllcyB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlUGxvdGx5IGV4dGVuZHMgU2VsZWN0QmFzZSB7XG4gIHByaXZhdGUgX2NoYXJ0QWRhcHRlcjogUGxvdGx5Q2hhcnRBZGFwdGVyO1xuICBwdWJsaWMgc3RhdGljIHR5cGVzID0gW1wiYmFyXCIsIFwicGllXCIsIFwiZG91Z2hudXRcIiwgXCJzY2F0dGVyXCJdO1xuICBwdWJsaWMgc3RhdGljIGRpc3BsYXlNb2RlQmFyOiBhbnkgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydFR5cGVzID0gU2VsZWN0QmFzZVBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIgPSBuZXcgUGxvdGx5Q2hhcnRBZGFwdGVyKHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIuZGVzdHJveSg8SFRNTEVsZW1lbnQ+Y29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFydE5vZGUpO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5jcmVhdGUoY2hhcnROb2RlKTtcbiAgfVxuXG4gIGdldERhdGEoKTogYW55W10ge1xuICAgIGNvbnN0IHN0YXRpc3RpY3MgPSBzdXBlci5nZXREYXRhKCk7XG4gICAgY29uc3Qgc2VyaWVzID0gdGhpcy5nZXRTZXJpZXNWYWx1ZXMoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIGlmIChzZXJpZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgcHJlcGFyZWREYXRhOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuICAgICAgdmFsdWVzLmZvckVhY2goKHZhbCwgdmFsdWVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzZXJpZXNEYXRhID0gc2VyaWVzLm1hcChcbiAgICAgICAgICAoc2VyaWVzVmFsdWUsIHNlcmllc0luZGV4KSA9PiBzdGF0aXN0aWNzW3Nlcmllc0luZGV4XVt2YWx1ZUluZGV4XVxuICAgICAgICApO1xuICAgICAgICBwcmVwYXJlZERhdGEucHVzaChzZXJpZXNEYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByZXBhcmVkRGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpc3RpY3M7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY2hlY2tib3hcIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJyYWRpb2dyb3VwXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiZHJvcGRvd25cIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJpbWFnZXBpY2tlclwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcbiIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblNlbGVjdEJhc2UsIEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckZhY3RvcnkgfSBmcm9tIFwiLi92aXN1YWxpemVyRmFjdG9yeVwiO1xuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vZGF0YVByb3ZpZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBwcml2YXRlIHNlbGVjdGVkSXRlbTogSXRlbVZhbHVlID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGNob2ljZXNPcmRlcjogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgc2hvd1BlcmNlbnRhZ2VCdG46IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9zaG93UGVyY2VudGFnZXM6IGJvb2xlYW47XG4gIHB1YmxpYyBvcmRlckJ5QW5zd2VyZXM6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3QsXG4gICAgbmFtZT86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucywgbmFtZSB8fCBcInNlbGVjdEJhc2VcIik7XG4gICAgdGhpcy5yZWdpc3RlclRvb2xiYXJJdGVtKFwiY2hhbmdlQ2hhcnRUeXBlXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXG4gICAgICAgICAgdGhpcy5jaGFydFR5cGVzLm1hcCgoY2hhcnRUeXBlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogY2hhcnRUeXBlLFxuICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiY2hhcnRUeXBlX1wiICsgY2hhcnRUeXBlKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgKG9wdGlvbjogYW55KSA9PiB0aGlzLmNoYXJ0VHlwZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgICAgIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2hhcnRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJjaGFuZ2VMYWJlbHNPcmRlclwiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2V0U2VyaWVzVmFsdWVzKCkubGVuZ3RoID09PSAwICYmXG4gICAgICAgIHRoaXMuY2hhcnRUeXBlcy5pbmRleE9mKFwiYmFyXCIpICE9PSAtMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2hvaWNlc09yZGVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVmYXVsdE9yZGVyXCIpLCB2YWx1ZTogXCJkZWZhdWx0XCIgfSxcbiAgICAgICAgICAgIHsgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpLCB2YWx1ZTogXCJhc2NcIiB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpLCB2YWx1ZTogXCJkZXNjXCIgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIChvcHRpb24pID0+IGZhbHNlLFxuICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldExhYmVsc09yZGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSh0aGlzLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy51cGRhdGVPcmRlclNlbGVjdG9yKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jaG9pY2VzT3JkZXI7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJzaG93UGVyY2VudGFnZXNcIiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm9wdGlvbnMuYWxsb3dTaG93UGVyY2VudGFnZXMgJiZcbiAgICAgICAgKHRoaXMuY2hhcnRUeXBlcy5pbmRleE9mKFwiYmFyXCIpICE9PSAtMSB8fFxuICAgICAgICAgIHRoaXMuY2hhcnRUeXBlcy5pbmRleE9mKFwic3RhY2tlZGJhclwiKSAhPT0gLTEpXG4gICAgICApIHtcbiAgICAgICAgdmFyIHVwZGF0ZUNhcHRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zaG93UGVyY2VudGFnZUJ0bi5pbm5lckhUTUwgPSB0aGlzLl9zaG93UGVyY2VudGFnZXNcbiAgICAgICAgICAgID8gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVQZXJjZW50YWdlc1wiKVxuICAgICAgICAgICAgOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd1BlcmNlbnRhZ2VzXCIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNob3dQZXJjZW50YWdlQnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlQnV0dG9uKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dQZXJjZW50YWdlcyA9ICF0aGlzLl9zaG93UGVyY2VudGFnZXM7XG4gICAgICAgICAgdXBkYXRlQ2FwdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdXBkYXRlQ2FwdGlvbigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNob3dQZXJjZW50YWdlQnRuKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3dQZXJjZW50YWdlQnRuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNoYXJ0VHlwZXM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyBjaGFydFR5cGU6IHN0cmluZztcblxuICBwcml2YXRlIHVwZGF0ZU9yZGVyU2VsZWN0b3IoKSB7XG4gICAgaWYgKCEhdGhpcy5jaG9pY2VzT3JkZXIpIHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PSBcImJhclwiKSB7XG4gICAgICAgIHRoaXMuY2hvaWNlc09yZGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaG9pY2VzT3JkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmNob2ljZXNPcmRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKVswXS52YWx1ZSA9IFwiZGVmYXVsdFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2hvd1BlcmNlbnRhZ2VCdG4oKSB7XG4gICAgaWYgKCEhdGhpcy5zaG93UGVyY2VudGFnZUJ0bikge1xuICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlID09IFwiYmFyXCIgfHwgdGhpcy5jaGFydFR5cGUgPT0gXCJzdGFja2VkYmFyXCIpIHtcbiAgICAgICAgdGhpcy5zaG93UGVyY2VudGFnZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd1BlcmNlbnRhZ2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvbkNoYXJ0VHlwZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5zZXRMYWJlbHNPcmRlcihcImRlZmF1bHRcIik7XG4gICAgdGhpcy51cGRhdGVPcmRlclNlbGVjdG9yKCk7XG4gICAgdGhpcy51cGRhdGVTaG93UGVyY2VudGFnZUJ0bigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldENoYXJ0VHlwZShjaGFydFR5cGU6IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2hhcnRUeXBlcy5pbmRleE9mKGNoYXJ0VHlwZSkgIT09IC0xICYmXG4gICAgICB0aGlzLmNoYXJ0VHlwZSAhPT0gY2hhcnRUeXBlXG4gICAgKSB7XG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGNoYXJ0VHlwZTtcbiAgICAgIHRoaXMub25DaGFydFR5cGVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb24uY2hvaWNlcy5maWx0ZXIoXG4gICAgICAoY2hvaWNlOiBJdGVtVmFsdWUpID0+IGNob2ljZS50ZXh0ID09PSBpdGVtVGV4dFxuICAgIClbMF07XG4gIH1cblxuICBzZXRTZWxlY3Rpb24oaXRlbTogSXRlbVZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtICE9PSBpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICBpZiAodGhpcy5vbkRhdGFJdGVtU2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm9uRGF0YUl0ZW1TZWxlY3RlZChcbiAgICAgICAgICBpdGVtICE9PSB1bmRlZmluZWQgPyBpdGVtLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGl0ZW0gIT09IHVuZGVmaW5lZCA/IGl0ZW0udGV4dCA6IFwiXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dQZXJjZW50YWdlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BlcmNlbnRhZ2VzO1xuICB9XG5cbiAgcHVibGljIHNldCBzaG93UGVyY2VudGFnZXModmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1BlcmNlbnRhZ2VzID0gdmFsO1xuICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgfVxuXG4gIHNldExhYmVsc09yZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9yZGVyQnlBbnN3ZXJlcyA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgfVxuXG4gIHJlZnJlc2hDb250ZW50KCkge1xuICAgIHRoaXMuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gIH1cblxuICBvbkRhdGFJdGVtU2VsZWN0ZWQ6IChzZWxlY3RlZFZhbHVlOiBhbnksIHNlbGVjdGVkVGV4dDogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIHZhbHVlc1NvdXJjZSgpOiBBcnJheTxJdGVtVmFsdWU+IHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IDxRdWVzdGlvblNlbGVjdEJhc2U+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcXVlc3Rpb25bXCJhY3RpdmVDaG9pY2VzXCJdO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IHZhbHVlczogQXJyYXk8YW55PiA9IHRoaXMudmFsdWVzU291cmNlKCkubWFwKFxuICAgICAgKGNob2ljZSkgPT4gY2hvaWNlLnZhbHVlXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSB2YWx1ZXMudW5zaGlmdChcIm90aGVyXCIpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGdldExhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnVzZVZhbHVlc0FzTGFiZWxzKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICB9XG4gICAgY29uc3QgbGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoKGNob2ljZSkgPT5cbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZSh0aGlzLnZhbHVlc1NvdXJjZSgpLCBjaG9pY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSBsYWJlbHMudW5zaGlmdChcIk90aGVyXCIpO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFBlcmNlbnRhZ2VzKCk6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcbiAgICB2YXIgZGF0YTogQXJyYXk8QXJyYXk8bnVtYmVyPj4gPSB0aGlzLmdldERhdGEoKTtcbiAgICB2YXIgcGVyY2VudGFnZXM6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG4gICAgaWYgKGRhdGEubGVuZ3RoIDwgMikge1xuICAgICAgZGF0YS5mb3JFYWNoKChyZXMsIGluZGV4KSA9PiB7XG4gICAgICAgIHZhciBzdW0gPSByZXMucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsKTtcbiAgICAgICAgcGVyY2VudGFnZXNbaW5kZXhdID0gcmVzLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHN1bSAmJiBNYXRoLnJvdW5kKCh2YWwgLyBzdW0pICogMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzdW0gKz0gZGF0YVtqXVtpXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocGVyY2VudGFnZXNbal0pKSBwZXJjZW50YWdlc1tqXSA9IFtdO1xuICAgICAgICAgIHBlcmNlbnRhZ2VzW2pdW2ldID0gc3VtICYmIE1hdGgucm91bmQoKGRhdGFbal1baV0gLyBzdW0pICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGVyY2VudGFnZXM7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IFwiLi90ZXh0LnNjc3NcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRUYWJsZUFkYXB0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IFRleHQpIHt9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb2x1bW5zQ291bnQsIGRhdGEgfSA9IHRoaXMubW9kZWwuZ2V0RGF0YSgpO1xyXG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IDxIVE1MRWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwicFwiLCBcIlwiLCB7XHJcbiAgICAgIGlubmVySFRNTDogXCJUaGVyZSBhcmUgbm8gcmVzdWx0cyB5ZXRcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YWJsZU5vZGUgPSA8SFRNTFRhYmxlRWxlbWVudD4oXHJcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCBcInNhLXRleHQtdGFibGVcIilcclxuICAgICk7XHJcblxyXG4gICAgdGFibGVOb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMubW9kZWwuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKChyb3dEYXRhKSA9PiB7XHJcbiAgICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1uc0NvdW50OyBpKyspIHtcclxuICAgICAgICB2YXIgdGQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzYS10ZXh0LXRhYmxlX19jZWxsXCIsIHtcclxuICAgICAgICAgIHRleHRDb250ZW50OiByb3dEYXRhW2ldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIH1cclxuICAgICAgdGFibGVOb2RlLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS10ZXh0LXRhYmxlX19jb250YWluZXJcIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZU5vZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3kobm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICAgIG5vZGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0IGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xyXG4gIHByaXZhdGUgX3RleHRUYWJsZUFkYXB0ZXI6IFRleHRUYWJsZUFkYXB0ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3QsXHJcbiAgICBuYW1lPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucywgbmFtZSB8fCBcInRleHRcIik7XHJcbiAgICB0aGlzLl90ZXh0VGFibGVBZGFwdGVyID0gbmV3IFRleHRUYWJsZUFkYXB0ZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgbGV0IHJlc3VsdDogQXJyYXk8QXJyYXk8c3RyaW5nPj4gPSBbXTtcclxuICAgIGxldCBjb2x1bW5zQ291bnQgPSAwO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBjb25zdCBkYXRhU3RyaW5nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xyXG4gICAgICAgICAgZGF0YVN0cmluZ3MuY29uY2F0KHJvd1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiByb3dWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb3dWYWx1ZSkuZm9yRWFjaCgoa2V5KSA9PlxyXG4gICAgICAgICAgICAgIGRhdGFTdHJpbmdzLnB1c2gocm93VmFsdWVba2V5XSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGFTdHJpbmdzLnB1c2gocm93VmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaChkYXRhU3RyaW5ncyk7XHJcbiAgICAgICAgaWYgKGRhdGFTdHJpbmdzLmxlbmd0aCA+IGNvbHVtbnNDb3VudCkge1xyXG4gICAgICAgICAgY29sdW1uc0NvdW50ID0gZGF0YVN0cmluZ3MubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgY29sdW1uc0NvdW50LCBkYXRhOiByZXN1bHQgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl90ZXh0VGFibGVBZGFwdGVyLmRlc3Ryb3koY29udGFpbmVyKTtcclxuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl90ZXh0VGFibGVBZGFwdGVyLmNyZWF0ZShjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3RleHRUYWJsZUFkYXB0ZXIuZGVzdHJveSh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwidGV4dFwiLCBUZXh0KTtcclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY29tbWVudFwiLCBUZXh0KTtcclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibXVsdGlwbGV0ZXh0XCIsIFRleHQpO1xyXG4iLCJleHBvcnQgdmFyIF9fYXNzaWduID1cbiAgKDxhbnk+T2JqZWN0KVtcImFzc2lnblwiXSB8fFxuICBmdW5jdGlvbih0YXJnZXQ6IGFueSkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIHAgaW4gcylcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdGFyZ2V0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyh0aGlzQ2xhc3M6IGFueSwgYmFzZUNsYXNzOiBhbnkpIHtcbiAgZm9yICh2YXIgcCBpbiBiYXNlQ2xhc3MpXG4gICAgaWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShwKSkgdGhpc0NsYXNzW3BdID0gYmFzZUNsYXNzW3BdO1xuICBmdW5jdGlvbiBfXygpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gdGhpc0NsYXNzO1xuICB9XG4gIHRoaXNDbGFzcy5wcm90b3R5cGUgPVxuICAgIGJhc2VDbGFzcyA9PT0gbnVsbFxuICAgICAgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcylcbiAgICAgIDogKChfXy5wcm90b3R5cGUgPSBiYXNlQ2xhc3MucHJvdG90eXBlKSwgbmV3ICg8YW55Pl9fKSgpKTtcbn1cblxuZXhwb3J0IHZhciBfX3Jlc3QgPSBmdW5jdGlvbihzb3VyY2U6IGFueSwgZTogYW55KSB7XG4gIHZhciByZXN1bHQ6IGFueSA9IHt9O1xuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gc291cmNlKVxuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIHByb3BlcnR5TmFtZSkgJiZcbiAgICAgIGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpIDwgMFxuICAgIClcbiAgICAgIHJlc3VsdFtwcm9wZXJ0eU5hbWVdID0gc291cmNlW3Byb3BlcnR5TmFtZV07XG4gIGlmIChcbiAgICBzb3VyY2UgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdID09PSBcImZ1bmN0aW9uXCJcbiAgKVxuICAgIGZvciAoXG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgIHByb3BlcnR5U3ltYm9scyA9ICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0oc291cmNlKTtcbiAgICAgIGkgPCBwcm9wZXJ0eVN5bWJvbHMubGVuZ3RoO1xuICAgICAgaSsrXG4gICAgKVxuICAgICAgaWYgKGUuaW5kZXhPZihwcm9wZXJ0eVN5bWJvbHNbaV0pIDwgMClcbiAgICAgICAgcmVzdWx0W3Byb3BlcnR5U3ltYm9sc1tpXV0gPSBzb3VyY2VbcHJvcGVydHlTeW1ib2xzW2ldXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmRlY2xhcmUgdmFyIFJlZmxlY3Q6IGFueTtcblxuZXhwb3J0IHZhciBfX2RlY29yYXRlID0gZnVuY3Rpb24oXG4gIGRlY29yYXRvcnM6IGFueSxcbiAgdGFyZ2V0OiBhbnksXG4gIGtleTogYW55LFxuICBkZXNjOiBhbnlcbikge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgciA9XG4gICAgICBjIDwgM1xuICAgICAgICA/IHRhcmdldFxuICAgICAgICA6IGRlc2MgPT09IG51bGxcbiAgICAgICAgPyAoZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpKVxuICAgICAgICA6IGRlc2MsXG4gICAgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAgICBpZiAoKGQgPSBkZWNvcmF0b3JzW2ldKSlcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuIiwiZXhwb3J0IGNsYXNzIERvY3VtZW50SGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT4sXHJcbiAgICBpc1NlbGVjdGVkOiAob3B0aW9uOiB7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSA9PiBib29sZWFuLFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxyXG4gICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKG9wdGlvbiksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdC5vbmNoYW5nZSA9IGhhbmRsZXI7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnV0dG9uKFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZCxcclxuICAgIHRleHQgPSBcIlwiLFxyXG4gICAgY2xhc3NOYW1lID0gXCJzYS10b29sYmFyX19idXR0b25cIlxyXG4gICkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgY2xhc3NOYW1lLCB7XHJcbiAgICAgIGlubmVyVGV4dDogdGV4dCxcclxuICAgICAgb25jbGljazogaGFuZGxlcixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChcclxuICAgIHRhZ05hbWU6IHN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nID0gXCJcIixcclxuICAgIGF0dHJzPzogYW55XHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmICghIWF0dHJzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAoPGFueT5lbClba2V5XSA9IGF0dHJzW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdFbGVtZW50KHBhdGg6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInN2Z1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInVzZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWxlbS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXHJcbiAgICAgIFwiaHJlZlwiLFxyXG4gICAgICBcIiNzYS1zdmctXCIgKyBwYXRoXHJcbiAgICApO1xyXG4gICAgc3ZnRWxlbS5hcHBlbmRDaGlsZCh1c2VFbGVtKTtcclxuICAgIHJldHVybiBzdmdFbGVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdCdXR0b24ocGF0aDogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgY29uc3QgYnRuID0gPEhUTUxCdXR0b25FbGVtZW50PihcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNhLXRhYmxlX19zdmctYnV0dG9uXCIpXHJcbiAgICApO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQocGF0aCkpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnVG9nZ2xlQnV0dG9uKFxyXG4gICAgc3ZnUGF0aDE6IHN0cmluZyxcclxuICAgIHN2UHBhdGgyOiBzdHJpbmcsXHJcbiAgICB0ZXh0MTogc3RyaW5nLFxyXG4gICAgdGV4dDI6IHN0cmluZyxcclxuICAgIGhhbmRsZXIxOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBoYW5kbGVyMjogKGU6IGFueSkgPT4gYW55LFxyXG4gICAgc3RhdGUgPSBcImZpcnN0XCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvbiBzYS10b29sYmFyX19zdmctYnV0dG9uXCJcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmcxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdmdQYXRoMSk7XHJcbiAgICBjb25zdCBzdmcyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdlBwYXRoMik7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICAgIHN0YXRlID0gXCJzZWNvbmRcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMSk7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGhhbmRsZXIyKGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcInNlY29uZFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcImZpcnN0XCI7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gdGV4dDE7XHJcbiAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzdmcxKTtcclxuICAgICAgICBoYW5kbGVyMShlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgfSBlbHNlIGlmICgoc3RhdGUgPSBcInNlY29uZFwiKSkge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gdG9nZ2xlO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlucHV0KFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgICBkZWZhdWx0VmFsdWUgPSBcIlwiXHJcbiAgKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSA8SFRNTElucHV0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImlucHV0XCIsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBydW5uaW5nSW5Ccm93c2VyOiB0eXBlb2Ygd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIixcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93RG9tUmVuZGVyaW5nKCkge1xyXG4gIHJldHVybiBvcHRpb25zLnJ1bm5pbmdJbkJyb3dzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHppcEFycmF5cyhmaXJzdDogYW55W10sIHNlY29uZDogYW55W10pOiBhbnlbXVtdIHtcclxuICAgIGxldCB6aXBBcnJheTogYW55W10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oZmlyc3QubGVuZ3RoLCBzZWNvbmQubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgIHppcEFycmF5W2ldID0gW2ZpcnN0W2ldLCBzZWNvbmRbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHppcEFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnppcEFycmF5cyhcclxuICAgIHppcEFycmF5OiBhbnlbXVtdXHJcbiAgKTogeyBmaXJzdDogYW55W107IHNlY29uZDogYW55W10gfSB7XHJcbiAgICBsZXQgdHdvQXJyYXlzOiBhbnkgPSB7IGZpcnN0OiBbXSwgc2Vjb25kOiBbXSB9O1xyXG4gICAgemlwQXJyYXkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgdHdvQXJyYXlzLmZpcnN0W2ldID0gdmFsdWVbMF07XHJcbiAgICAgIHR3b0FycmF5cy5zZWNvbmRbaV0gPSB2YWx1ZVsxXTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHR3b0FycmF5cztcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBzb3J0RGljdGlvbmFyeShcclxuICAgIGtleXM6IGFueVtdLFxyXG4gICAgdmFsdWVzOiBhbnlbXSxcclxuICAgIGRlc2M6IGJvb2xlYW5cclxuICApOiB7IGtleXM6IGFueVtdOyB2YWx1ZXM6IGFueVtdIH0ge1xyXG4gICAgbGV0IGRpY3Rpb25hcnkgPSB0aGlzLnppcEFycmF5cyhrZXlzLCB2YWx1ZXMpO1xyXG4gICAgbGV0IGNvbXBhcmF0b3IgPSAoYTogYW55W10sIGI6IGFueVtdLCBhc2M6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhWzFdIDwgYlsxXSA/IDEgOiBhWzFdID09IGJbMV0gPyAwIDogLTE7XHJcbiAgICAgIHJldHVybiBhc2MgPyByZXN1bHQgOiByZXN1bHQgKiAtMTtcclxuICAgIH07XHJcbiAgICBkaWN0aW9uYXJ5LnNvcnQoKGE6IGFueVtdLCBiOiBhbnlbXSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGVzYyA/IGNvbXBhcmF0b3IoYSwgYiwgZmFsc2UpIDogY29tcGFyYXRvcihhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGtleXNBbmRWYWx1ZXMgPSB0aGlzLnVuemlwQXJyYXlzKGRpY3Rpb25hcnkpO1xyXG4gICAgcmV0dXJuIHsga2V5czoga2V5c0FuZFZhbHVlcy5maXJzdCwgdmFsdWVzOiBrZXlzQW5kVmFsdWVzLnNlY29uZCB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAvIG1heFZhbHVlKSAqIDEwMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcblxuZGVjbGFyZSB0eXBlIFZpc3VhbGl6ZXJDb25zdHJ1Y3RvciA9IG5ldyAoXG4gIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgb3B0aW9ucz86IE9iamVjdFxuKSA9PiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uTWFuYWdlciB7XG4gIHN0YXRpYyBhbHRlcm5hdGl2ZXNWaXN1YWxpemVyOiBhbnkgPSB1bmRlZmluZWQ7XG4gIHN0YXRpYyB2aXp1YWxpemVyczogeyBbaW5kZXg6IHN0cmluZ106IEFycmF5PFZpc3VhbGl6ZXJDb25zdHJ1Y3Rvcj4gfSA9IHt9O1xuICAvKipcbiAgICogUmVnaXN0ZXIgdmlzdWFsaXplciAoY29uc3RydWN0b3IpIGZvciBxdWVzdGlvbiB0eXBlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWdpc3RlclZpc3VhbGl6ZXIoXG4gICAgdHlwZU5hbWU6IHN0cmluZyxcbiAgICBjb25zdHJ1Y3RvcjogVmlzdWFsaXplckNvbnN0cnVjdG9yXG4gICkge1xuICAgIGxldCB2aXp1YWxpemVycyA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLnZpenVhbGl6ZXJzW3R5cGVOYW1lXTtcbiAgICBpZiAoIXZpenVhbGl6ZXJzKSB7XG4gICAgICB2aXp1YWxpemVycyA9IFtdO1xuICAgICAgVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdID0gdml6dWFsaXplcnM7XG4gICAgfVxuICAgIHZpenVhbGl6ZXJzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdmlzdWFsaXplcnMgKGNvbnN0cnVjdG9ycykgZm9yIHF1ZXN0aW9uIHR5cGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldFZpc3VhbGl6ZXJzQnlUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiBWaXN1YWxpemVyQ29uc3RydWN0b3JbXSB7XG4gICAgbGV0IHZpenVhbGl6ZXJzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdO1xuICAgIGlmICghdml6dWFsaXplcnMpIHtcbiAgICAgIHJldHVybiBbVmlzdWFsaXplckJhc2VdO1xuICAgIH1cbiAgICByZXR1cm4gdml6dWFsaXplcnM7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB2aXN1YWxpemVycyAoY29uc3RydWN0b3JzKSBmb3IgcXVlc3Rpb24gdHlwZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QWx0ZXJuYXRpdmVzVmlzdWFsaXplcigpIHtcbiAgICByZXR1cm4gVmlzdWFsaXphdGlvbk1hbmFnZXIuYWx0ZXJuYXRpdmVzVmlzdWFsaXplciB8fCBWaXN1YWxpemVyQmFzZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgdmlzdWFsaXplciAoY29uc3RydWN0b3IpIGZvciBxdWVzdGlvbiB0eXBlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckFsdGVybmF0aXZlc1Zpc3VhbGl6ZXIoY29uc3RydWN0b3I6IGFueSkge1xuICAgIFZpc3VhbGl6YXRpb25NYW5hZ2VyLmFsdGVybmF0aXZlc1Zpc3VhbGl6ZXIgPSBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsLFxuICBNYXRyaXhEcm9wZG93bkNvbHVtbixcbiAgSXRlbVZhbHVlLFxufSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25QYW5lbCB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbFwiO1xuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vZGF0YVByb3ZpZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uTWF0cml4RHJvcGRvd24gZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByb3RlY3RlZCBfcGFuZWxWaXN1YWxpemVyOiBWaXN1YWxpemF0aW9uUGFuZWwgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCxcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgIG5hbWU/OiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMsIG5hbWUgfHwgXCJtYXRyaXhEcm9wZG93blwiKTtcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgIG9wdGlvbnMuZGF0YVByb3ZpZGVyID0gdW5kZWZpbmVkO1xuICAgIG9wdGlvbnMuYWxsb3dEeW5hbWljTGF5b3V0ID0gZmFsc2U7XG4gICAgb3B0aW9ucy5zZXJpZXNWYWx1ZXMgPSBxdWVzdGlvbi5yb3dzLm1hcCgocm93OiBJdGVtVmFsdWUpID0+IHJvdy52YWx1ZSk7XG4gICAgb3B0aW9ucy5zZXJpZXNMYWJlbHMgPSBxdWVzdGlvbi5yb3dzLm1hcCgocm93OiBJdGVtVmFsdWUpID0+IHJvdy50ZXh0KTtcblxuICAgIHRoaXMuX3BhbmVsVmlzdWFsaXplciA9IG5ldyBWaXN1YWxpemF0aW9uUGFuZWwoXG4gICAgICB0aGlzLmdldFF1ZXN0aW9ucygpLFxuICAgICAgW10sXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICB0aGlzLnVwZGF0ZURhdGEoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVEYXRhKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICBzdXBlci51cGRhdGVEYXRhKGRhdGEpO1xuICAgIGxldCBwYW5lbERhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZGF0YUl0ZW0pID0+IHtcbiAgICAgIGxldCByYXdEYXRhSXRlbSA9IGRhdGFJdGVtW3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFyYXdEYXRhSXRlbSkge1xuICAgICAgICBPYmplY3Qua2V5cyhyYXdEYXRhSXRlbSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgdmFyIG5lc3RlZERhdGFJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcmF3RGF0YUl0ZW1ba2V5XSk7XG4gICAgICAgICAgbmVzdGVkRGF0YUl0ZW1bRGF0YVByb3ZpZGVyLnNlcmllc01hcmtlcktleV0gPSBrZXk7XG4gICAgICAgICAgcGFuZWxEYXRhLnB1c2gobmVzdGVkRGF0YUl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIudXBkYXRlRGF0YShwYW5lbERhdGEpO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IG1hdHJpeGRyb3Bkb3duOiBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgcmV0dXJuIG1hdHJpeGRyb3Bkb3duLmNvbHVtbnMubWFwKFxuICAgICAgKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pID0+IGNvbHVtbi50ZW1wbGF0ZVF1ZXN0aW9uXG4gICAgKTtcbiAgfVxuXG4gIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIuY2xlYXIoKTtcbiAgICBzdXBlci5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLnJlbmRlcihjb250YWluZXIpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJtYXRyaXhkcm9wZG93blwiLFxuICBWaXN1YWxpemF0aW9uTWF0cml4RHJvcGRvd25cbik7XG4iLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1wiO1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWMgZXh0ZW5kcyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwibWF0cml4RHluYW1pY1wiO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IG1hdHJpeGR5bmFtaWM6IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICBjb25zdCB2aXNpYmxlUm93cyA9IG1hdHJpeGR5bmFtaWMudmlzaWJsZVJvd3M7XG5cbiAgICBpZiAodmlzaWJsZVJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gdmlzaWJsZVJvd3NbMF0uY2VsbHMubWFwKGMgPT4gYy5xdWVzdGlvbik7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcIm1hdHJpeGR5bmFtaWNcIixcbiAgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBFdmVudCwgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQge1xuICBJVmlzdWFsaXplclBhbmVsRWxlbWVudCxcbiAgRWxlbWVudFZpc2liaWxpdHksXG4gIElTdGF0ZSxcbiAgSVBlcm1pc3Npb24sXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRmlsdGVySW5mbyB9IGZyb20gXCIuL2ZpbHRlckluZm9cIjtcbmltcG9ydCB7IExheW91dEVuZ2luZSwgTXV1cmlMYXlvdXRFbmdpbmUgfSBmcm9tIFwiLi9sYXlvdXRFbmdpbmVcIjtcblxuaW1wb3J0IFwiLi92aXN1YWxpemF0aW9uUGFuZWwuc2Nzc1wiO1xuXG5jb25zdCBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uXCI7XG5jb25zdCBxdWVzdGlvbkxheW91dGVkRWxlbWVudENsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb24tbGF5b3V0ZWRcIjtcblxuaWYgKCEhZG9jdW1lbnQpIHtcbiAgY29uc3Qgc3ZnVGVtcGxhdGUgPSByZXF1aXJlKFwiaHRtbC1sb2FkZXI/aW50ZXJwb2xhdGUhdmFsLWxvYWRlciEuL3N2Z2J1bmRsZS5odG1sXCIpO1xuICBjb25zdCB0ZW1wbGF0ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGVtcGxhdGVIb2xkZXIuaW5uZXJIVE1MID0gc3ZnVGVtcGxhdGU7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGVIb2xkZXIpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWaXN1YWxpemVyUGFuZWxSZW5kZXJlZEVsZW1lbnRcbiAgZXh0ZW5kcyBJVmlzdWFsaXplclBhbmVsRWxlbWVudCB7XG4gIHJlbmRlcmVkRWxlbWVudD86IEhUTUxFbGVtZW50O1xufVxuXG4vKipcbiAqIFZpc3VhbGl6YXRpb25QYW5lbCBpcyByZXNwb25zaWJsZSBmb3IgZGlzcGxheWluZyBhbiBhcnJheSBvZiBzdXJ2ZXkgcXVlc3Rpb25zXG4gKlxuICogY29uc3RydWN0b3IgcGFyYW1ldGVyczpcbiAqIHF1ZXN0aW9ucyAtIGFuIGFycmF5IG9mIHN1cnZleSBxdWVzdGlvbnMgdG8gdmlzdWFsaXplXG4gKiBkYXRhIC0gYW4gYXJyYXkgb2YgYW5zd2VycyBpbiBmb3JtYXQgb2Ygc3VydmV5IHJlc3VsdFxuICpcbiAqIG9wdGlvbnM6XG4gKiBhbGxvd0R5bmFtaWNMYXlvdXQgLSBzZXQgaXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBpdGVtcyBkcmFnL2Ryb3AgcmVvcmRlcmluZyBhbmQgZHluYW1pYyBsYXlvdXRpbmdcbiAqIGFsbG93SGlkZVF1ZXN0aW9ucyAtIHNldCBpdCB0byBmYWxzZSB0byBkZW55IHVzZXIgdG8gaGlkZS9zaG93IGluZGl2aWR1YWwgcXVlc3Rpb25zXG4gKiBzZXJpZXNWYWx1ZXMgLSBhbiBhcnJheSBvZiBzZXJpZXMgdmFsdWVzIGluIGRhdGEgdG8gZ3JvdXAgZGF0YSBieSBzZXJpZXNcbiAqIHNlcmllc0xhYmVscyAtIGxhYmVscyBmb3Igc2VyaWVzIHRvIGRpc3BsYXksIGlmIG5vdCBwYXNzZWQgdGhlIHNlcmllc1ZhbHVlcyBhcmUgdXNlZCBhcyBsYWJlbHNcbiAqIHN1cnZleSAtIHBhc3Mgc3VydmV5IGluc3RhbmNlIHRvIHVzZSBsb2NhbHNlcyBmcm9tIHRoZSBzdXJ2ZXkgSlNPTlxuICogZGF0YVByb3ZpZGVyIC0gZGF0YVByb3ZpZGVyIGZvciB0aGlzIHZpc3VhbGl6ZXJcbiAqXG4gKiBlbGVtZW50cyAtIGxpc3Qgb2YgdmlzdWFsIGVsZW1lbnQgZGVzY3JpcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uUGFuZWwgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByb3RlY3RlZCB2aXN1YWxpemVyczogQXJyYXk8VmlzdWFsaXplckJhc2U+ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHF1ZXN0aW9uczogQXJyYXk8YW55PixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgIHByaXZhdGUgX2VsZW1lbnRzOiBBcnJheTxJVmlzdWFsaXplclBhbmVsUmVuZGVyZWRFbGVtZW50PiA9IHVuZGVmaW5lZCxcbiAgICBwcml2YXRlIGlzVHJ1c3RlZEFjY2VzcyA9IGZhbHNlXG4gICkge1xuICAgIHN1cGVyKG51bGwsIGRhdGEsIG9wdGlvbnMsIFwicGFuZWxcIik7XG5cbiAgICB0aGlzLl9sYXlvdXRFbmdpbmUgPVxuICAgICAgb3B0aW9ucy5sYXlvdXRFbmdpbmUgfHxcbiAgICAgIG5ldyBNdXVyaUxheW91dEVuZ2luZShcbiAgICAgICAgdGhpcy5hbGxvd0R5bmFtaWNMYXlvdXQsXG4gICAgICAgIFwiLlwiICsgcXVlc3Rpb25MYXlvdXRlZEVsZW1lbnRDbGFzc05hbWVcbiAgICAgICk7XG4gICAgdGhpcy5fbGF5b3V0RW5naW5lLm9uTW92ZUNhbGxiYWNrID0gKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpID0+XG4gICAgICB0aGlzLm1vdmVWaXNpYmxlRWxlbWVudChmcm9tSW5kZXgsIHRvSW5kZXgpO1xuXG4gICAgdGhpcy5zaG93SGVhZGVyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdXJ2ZXkpIHtcbiAgICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdGhpcy5vcHRpb25zLnN1cnZleS5sb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKF9lbGVtZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50cyA9IHRoaXMuYnVpbGRFbGVtZW50cyhxdWVzdGlvbnMpO1xuICAgIH1cblxuICAgIHRoaXMuYnVpbGRWaXN1YWxpemVycyhxdWVzdGlvbnMpO1xuXG4gICAgdGhpcy5yZWdpc3RlclRvb2xiYXJJdGVtKFwicmVzZXRGaWx0ZXJcIiwgKCkgPT4ge1xuICAgICAgcmV0dXJuIERvY3VtZW50SGVscGVyLmNyZWF0ZUJ1dHRvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlc2V0RmlsdGVyXCIpKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJhZGRFbGVtZW50XCIsICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYWxsb3dIaWRlUXVlc3Rpb25zKSB7XG4gICAgICAgIGxldCBhZGRFbGVtZW50U2VsZWN0b3I6IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyID0gKFxuICAgICAgICAgIHBhbmVsOiBWaXN1YWxpemF0aW9uUGFuZWwsXG4gICAgICAgICAgb3B0aW9uczogYW55XG4gICAgICAgICkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gdGhpcy5oaWRkZW5FbGVtZW50cztcbiAgICAgICAgICBpZiAoaGlkZGVuRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVNlbGVjdG9yKFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgPGFueT57XG4gICAgICAgICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFkZEVsZW1lbnRcIiksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIC5jb25jYXQoaGlkZGVuRWxlbWVudHMpXG4gICAgICAgICAgICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZWxlbWVudC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIChvcHRpb246IGFueSkgPT4gZmFsc2UsXG4gICAgICAgICAgICAgIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFbGVtZW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIChhZGRFbGVtZW50U2VsZWN0b3IgJiZcbiAgICAgICAgICAgICAgdG9vbGJhci5yZXBsYWNlQ2hpbGQoc2VsZWN0V3JhcHBlciwgYWRkRWxlbWVudFNlbGVjdG9yKSkgfHxcbiAgICAgICAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChzZWxlY3RXcmFwcGVyKTtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciA9IHNlbGVjdFdyYXBwZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciAmJiB0b29sYmFyLnJlbW92ZUNoaWxkKGFkZEVsZW1lbnRTZWxlY3Rvcik7XG4gICAgICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyKHRoaXMsIHt9KTtcbiAgICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NoYW5nZWQuYWRkKGFkZEVsZW1lbnRTZWxlY3RvclVwZGF0ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5sb2NhbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcImNoYW5nZUxvY2FsZVwiLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudEhlbHBlci5jcmVhdGVTZWxlY3RvcihcbiAgICAgICAgICBbbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYW5nZUxvY2FsZVwiKV1cbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5sb2NhbGVzKVxuICAgICAgICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIHRleHQ6IGVsZW1lbnQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAob3B0aW9uOiBhbnkpID0+IGZhbHNlLFxuICAgICAgICAgIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBuZXdMb2NhbGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbmV3TG9jYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzaG93RWxlbWVudChlbGVtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgY29uc3QgZWxlbWVudEluZGV4ID0gdGhpcy5fZWxlbWVudHMuaW5kZXhPZihlbGVtZW50KTtcbiAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlO1xuICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyUGFuZWxFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkVsZW1lbnQpO1xuICAgIHRoaXMubGF5b3V0RW5naW5lLmFkZChbcXVlc3Rpb25FbGVtZW50XSwgeyBpbmRleDogZWxlbWVudEluZGV4IH0pO1xuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzQ2hhbmdlZChlbGVtZW50LCBcIkFEREVEXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhpZGVFbGVtZW50KGVsZW1lbnROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGU7XG4gICAgaWYgKCEhZWxlbWVudC5yZW5kZXJlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubGF5b3V0RW5naW5lLnJlbW92ZShbZWxlbWVudC5yZW5kZXJlZEVsZW1lbnRdKTtcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50LnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICBlbGVtZW50LnJlbmRlcmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHNDaGFuZ2VkKGVsZW1lbnQsIFwiUkVNT1ZFRFwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBtYWtlRWxlbWVudFByaXZhdGUoZWxlbWVudDogYW55KSB7XG4gICAgaWYgKGVsZW1lbnQudmlzaWJpbGl0eSAhPT0gRWxlbWVudFZpc2liaWxpdHkuVmlzaWJsZSkgcmV0dXJuO1xuXG4gICAgZWxlbWVudC52aXNpYmlsaXR5ID0gRWxlbWVudFZpc2liaWxpdHkuUHVibGljSW52aXNpYmxlO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sgJiZcbiAgICAgIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayh0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBtYWtlRWxlbWVudFB1YmxpYyhlbGVtZW50OiBhbnkpIHtcbiAgICBpZiAoZWxlbWVudC52aXNpYmlsaXR5ICE9PSBFbGVtZW50VmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGUpIHJldHVybjtcblxuICAgIGVsZW1lbnQudmlzaWJpbGl0eSA9IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGU7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICAgIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJlxuICAgICAgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrKHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1vdmVWaXNpYmxlRWxlbWVudChcbiAgICBmcm9tVmlzaWJsZUluZGV4OiBudW1iZXIsXG4gICAgdG9WaXNpYmxlSW5kZXg6IG51bWJlclxuICApIHtcbiAgICBsZXQgZnJvbUluZGV4LCB0b0luZGV4O1xuXG4gICAgbGV0IGZyb21WaXNpYmxlSW5kZXhFbGVtZW50ID0gdGhpcy52aXNpYmxlRWxlbWVudHNbZnJvbVZpc2libGVJbmRleF07XG4gICAgbGV0IHRvVmlzaWJsZUluZGV4RWxlbWVudCA9IHRoaXMudmlzaWJsZUVsZW1lbnRzW3RvVmlzaWJsZUluZGV4XTtcblxuICAgIGZyb21JbmRleCA9IHRoaXMuX2VsZW1lbnRzLmluZGV4T2YoZnJvbVZpc2libGVJbmRleEVsZW1lbnQpO1xuICAgIHRvSW5kZXggPSB0aGlzLl9lbGVtZW50cy5pbmRleE9mKHRvVmlzaWJsZUluZGV4RWxlbWVudCk7XG5cbiAgICB0aGlzLm1vdmVFbGVtZW50KGZyb21JbmRleCwgdG9JbmRleCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbW92ZUVsZW1lbnQoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikge1xuICAgIHZhciBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzLnNwbGljZShmcm9tSW5kZXgsIDEpO1xuICAgIHRoaXMuX2VsZW1lbnRzLnNwbGljZSh0b0luZGV4LCAwLCBlbGVtZW50c1swXSk7XG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHNDaGFuZ2VkKGVsZW1lbnRzWzBdLCBcIk1PVkVEXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFZpc3VhbGl6ZXJzKHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb24+KSB7XG4gICAgcXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XG4gICAgICBjb25zdCB2aXN1YWxpemVyID0gdGhpcy5jcmVhdGVWaXN1YWxpemVyKHF1ZXN0aW9uKTtcblxuICAgICAgaWYgKHRoaXMuYWxsb3dIaWRlUXVlc3Rpb25zKSB7XG4gICAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInJlbW92ZVF1ZXN0aW9uXCIsICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gRG9jdW1lbnRIZWxwZXIuY3JlYXRlQnV0dG9uKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlRWxlbWVudChxdWVzdGlvbi5uYW1lKSwgMCk7XG4gICAgICAgICAgfSwgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVCdXR0b25cIikpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNUcnVzdGVkQWNjZXNzKSB7XG4gICAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcIm1ha2VQcml2YXRlUHVibGljXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KHF1ZXN0aW9uLm5hbWUpO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGUgPVxuICAgICAgICAgICAgZWxlbWVudC52aXNpYmlsaXR5ID09PSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlXG4gICAgICAgICAgICAgID8gXCJmaXJzdFwiXG4gICAgICAgICAgICAgIDogXCJzZWNvbmRcIjtcblxuICAgICAgICAgIGNvbnN0IHBhdGhNYWtlUHJpdmF0ZVN2ZyA9IFwibWFrZXByaXZhdGVcIjtcbiAgICAgICAgICBjb25zdCBwYXRoTWFrZVB1YmxpY1N2ZyA9IFwibWFrZXB1YmxpY1wiO1xuICAgICAgICAgIGNvbnN0IG1ha2VQcml2YXRlVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVByaXZhdGVCdXR0b25cIik7XG4gICAgICAgICAgY29uc3QgbWFrZVB1YmxpY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNCdXR0b25cIik7XG4gICAgICAgICAgY29uc3QgZG9Qcml2YXRlID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VFbGVtZW50UHJpdmF0ZShlbGVtZW50KSwgMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBkb1B1YmxpYyA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tYWtlRWxlbWVudFB1YmxpYyhlbGVtZW50KSwgMCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdUb2dnbGVCdXR0b24oXG4gICAgICAgICAgICBwYXRoTWFrZVB1YmxpY1N2ZyxcbiAgICAgICAgICAgIHBhdGhNYWtlUHJpdmF0ZVN2ZyxcbiAgICAgICAgICAgIG1ha2VQcml2YXRlVGl0bGUsXG4gICAgICAgICAgICBtYWtlUHVibGljVGl0bGUsXG4gICAgICAgICAgICBkb1B1YmxpYyxcbiAgICAgICAgICAgIGRvUHJpdmF0ZSxcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICBsZXQgZmlsdGVySW5mbyA9IG5ldyBGaWx0ZXJJbmZvKHZpc3VhbGl6ZXIpO1xuXG4gICAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInF1ZXN0aW9uRmlsdGVySW5mb1wiLCAoKSA9PiB7XG4gICAgICAgICAgZmlsdGVySW5mby51cGRhdGUodmlzdWFsaXplci5zZWxlY3Rpb24pO1xuICAgICAgICAgIHJldHVybiBmaWx0ZXJJbmZvLmh0bWxFbGVtZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IChcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBhbnksXG4gICAgICAgICAgc2VsZWN0ZWRUZXh0OiBzdHJpbmdcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgZmlsdGVySW5mby51cGRhdGUoeyB2YWx1ZTogc2VsZWN0ZWRWYWx1ZSwgdGV4dDogc2VsZWN0ZWRUZXh0IH0pO1xuICAgICAgICAgIHRoaXMuc2V0RmlsdGVyKHF1ZXN0aW9uLm5hbWUsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcbiAgICAgIHRoaXMudmlzdWFsaXplcnMucHVzaCh2aXN1YWxpemVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVZpc3VhbGl6ZXJzKCkge1xuICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgdmlzdWFsaXplci5vblVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMudmlzdWFsaXplcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgbG9jYWxlIG9mIHRoZSB2aXN1YWxpemF0aW9uIHBhbmVsLlxuICAgKiBJZiBsb2NhbGVzIG1vcmUgdGhhbiBvbmUsIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gZHJvcGRvd24gd2lsbCBiZSBhZGRlZCBpbiB0aGUgdG9vbGJhclxuICAgKiBJbiBvcmRlciB0byB1c2Ugc3VydmV5IGxvY2FsZXMgdGhlIHN1cnZleSBpbnN0YW5jZSBvYmplY3Qgc2hvdWxkIGJlIHBhc3NlZCBhcyAnc3VydmV5JyBvcHRpb24gZm9yIHZpc3VhbGl6ZXJcbiAgICovXG4gIHB1YmxpYyBnZXQgbG9jYWxlKCkge1xuICAgIHZhciBzdXJ2ZXkgPSB0aGlzLm9wdGlvbnMuc3VydmV5O1xuICAgIGlmICghIXN1cnZleSkge1xuICAgICAgcmV0dXJuIHN1cnZleS5sb2NhbGU7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGxvY2FsZSBmb3IgdmlzdWFsaXphdGlvbiBwYW5lbC5cbiAgICovXG4gIHB1YmxpYyBzZXQgbG9jYWxlKG5ld0xvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobmV3TG9jYWxlKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHNldExvY2FsZShuZXdMb2NhbGU6IHN0cmluZykge1xuICAgIHZhciBzdXJ2ZXkgPSB0aGlzLm9wdGlvbnMuc3VydmV5O1xuICAgIGlmICghIXN1cnZleSkge1xuICAgICAgc3VydmV5LmxvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICAgICh0aGlzLnF1ZXN0aW9ucyB8fCBbXSkuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChxdWVzdGlvbi5uYW1lKTtcbiAgICAgICAgaWYgKCEhZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZGlzcGxheU5hbWUgPSBxdWVzdGlvbi50aXRsZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgVmlzdWFsaXphdGlvblBhbmVsIGFsbG93cyBkeW5hbWljIGxheW91dGluZyAtIHJlYXJyYW5nZSBpdGVtcyB2aWEgZHJhcC9kcm9wLlxuICAgKi9cbiAgcHVibGljIGdldCBhbGxvd0R5bmFtaWNMYXlvdXQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMub3B0aW9ucy5hbGxvd0R5bmFtaWNMYXlvdXQgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5vcHRpb25zLmFsbG93RHluYW1pY0xheW91dCA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBWaXN1YWxpemF0aW9uUGFuZWwgYWxsb3dzIHRvIGhpZGUvc2hvdyBpbmRpdmlkdWFsIGlubmVyIHZpc3VhbGl6ZXJzLlxuICAgKi9cbiAgcHVibGljIGdldCBhbGxvd0hpZGVRdWVzdGlvbnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMub3B0aW9ucy5hbGxvd0hpZGVRdWVzdGlvbnMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5vcHRpb25zLmFsbG93SGlkZVF1ZXN0aW9ucyA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9sYXlvdXRFbmdpbmU6IExheW91dEVuZ2luZTtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxheW91dCBlbmdpbmUgaW5zdGFuY2UgaWYgYW55LlxuICAgKi9cbiAgcHVibGljIGdldCBsYXlvdXRFbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dEVuZ2luZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZEVsZW1lbnRzKHF1ZXN0aW9uczogYW55W10pOiBJVmlzdWFsaXplclBhbmVsRWxlbWVudFtdIHtcbiAgICByZXR1cm4gKHF1ZXN0aW9ucyB8fCBbXSkubWFwKChxdWVzdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6IHF1ZXN0aW9uLnRpdGxlLFxuICAgICAgICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlLFxuICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcGFuZWwgZWxlbWVudHMgZGVzY3JpcHRpb25zIGFycmF5LlxuICAgKiBJbm5lciB2aXN1YWxpemVycyBhcmUgcmVuZGVyZWQgaW4gdGhlIG9yZGVyIG9mIHRoaXMgYXJyYXkgYW5kIHdpdGggdGl0bGVzIGZyb20gdGhlIGRpc3BsYXlOYW1lIHByb3BlcnR5XG4gICAqL1xuICBwdWJsaWMgZ2V0RWxlbWVudHMoKTogSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuICh0aGlzLl9lbGVtZW50cyB8fCBbXSkubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBlbGVtZW50Lm5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBlbGVtZW50LmRpc3BsYXlOYW1lLFxuICAgICAgICB2aXNpYmlsaXR5OiBlbGVtZW50LnZpc2liaWxpdHksXG4gICAgICAgIHR5cGU6IGVsZW1lbnQudHlwZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgY2VydGFpbiBlbGVtZW50IGlzIHZpc2libGUuXG4gICAqL1xuICBwdWJsaWMgaXNWaXNpYmxlKHZpc2liaWxpdHk6IEVsZW1lbnRWaXNpYmlsaXR5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ICE9PSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGUpIHx8XG4gICAgICAoIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgdmlzaWJsZUVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5maWx0ZXIoKGVsKSA9PiB0aGlzLmlzVmlzaWJsZShlbC52aXNpYmlsaXR5KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGhpZGRlbkVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5maWx0ZXIoKGVsKSA9PiAhdGhpcy5pc1Zpc2libGUoZWwudmlzaWJpbGl0eSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBsb2NhbGVzKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3VydmV5KSByZXR1cm4gdGhpcy5vcHRpb25zLnN1cnZleS5nZXRVc2VkTG9jYWxlcygpO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBhbmVsIGVsZW1lbnQgZGVzY3JpcHRpb24gYnkgdGhlIHF1ZXN0aW9uIG5hbWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0RWxlbWVudChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWwubmFtZSA9PT0gbmFtZSlbMF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwYW5lbCBlbGVtZW50IHZpc3VhbGl6ZXIgYnkgdGhlIHF1ZXN0aW9uIG5hbWUuXG4gICAqL1xuICBnZXRWaXN1YWxpemVyKGRhdGFOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy52aXN1YWxpemVycy5maWx0ZXIoKHYpID0+IHYuZGF0YU5hbWUgPT09IGRhdGFOYW1lKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGVsZW1lbnQgdmlzaWJpbGl0eSBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKiBvcHRpb25zOlxuICAgKiBlbGVtZW50cyAtIHBhbmVsIGVsZW1lbnRzIGFycmF5XG4gICAqIGNoYW5nZWQgLSBjaGFuZ2VkIGVsZW1lbnRcbiAgICogcmVhc29uIC0gcmVhc29uIChzdHJpbmcpIHdoeSBldmVudCBmaXJlZDogXCJBRERFRFwiLCBcIk1PVkVEXCIgb3IgXCJSRU1PVkVEXCJcbiAgICovXG4gIHB1YmxpYyBvblZpc2libGVFbGVtZW50c0NoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVmlzdWFsaXphdGlvblBhbmVsLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPigpO1xuXG4gIHByb3RlY3RlZCB2aXNpYmxlRWxlbWVudHNDaGFuZ2VkKFxuICAgIGVsZW1lbnQ6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50LFxuICAgIHJlYXNvbjogc3RyaW5nXG4gICkge1xuICAgIGlmICghdGhpcy5vblZpc2libGVFbGVtZW50c0NoYW5nZWQuaXNFbXB0eSkge1xuICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NoYW5nZWQuZmlyZSh0aGlzLCB7XG4gICAgICAgIGVsZW1lbnRzOiB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgY2hhbmdlZDogZWxlbWVudCxcbiAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICAgIHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB2aXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIGNoYW5nZWQuXG4gICAqIHNlbmRlciAtIHRoaXMgcGFuZWxcbiAgICogc3RhdGUgLSBuZXcgc3RhdGUgb2YgdGhlIHBhbmVsXG4gICAqL1xuICBwdWJsaWMgb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVmlzdWFsaXphdGlvblBhbmVsLCBzdGF0ZTogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBwZXJtaXNzaW9ucyBjaGFuZ2VkXG4gICAqL1xuICBwdWJsaWMgb25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjazogYW55O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGdpdmVuIHBhbmVsIGVsZW1lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVuZGVyUGFuZWxFbGVtZW50KGVsZW1lbnQ6IElWaXN1YWxpemVyUGFuZWxSZW5kZXJlZEVsZW1lbnQpIHtcbiAgICBjb25zdCB2aXN1YWxpemVyID0gdGhpcy5nZXRWaXN1YWxpemVyKGVsZW1lbnQubmFtZSk7XG5cbiAgICBjb25zdCBxdWVzdGlvbkVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IHZpenVhbGl6ZXJFbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBlbGVtZW50LmRpc3BsYXlOYW1lO1xuXG4gICAgcXVlc3Rpb25FbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuYWxsb3dEeW5hbWljTGF5b3V0XG4gICAgICA/IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiIFwiICsgcXVlc3Rpb25MYXlvdXRlZEVsZW1lbnRDbGFzc05hbWVcbiAgICAgIDogcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgKyBcIl9fdGl0bGVcIjtcbiAgICBpZiAodGhpcy5hbGxvd0R5bmFtaWNMYXlvdXQpIHtcbiAgICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPVxuICAgICAgICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgK1xuICAgICAgICBcIl9fdGl0bGUtLWRyYWdnYWJsZVwiO1xuICAgIH1cbiAgICBxdWVzdGlvbkNvbnRlbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lICsgXCJfX2NvbnRlbnRcIjtcblxuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh2aXp1YWxpemVyRWxlbWVudCk7XG4gICAgcXVlc3Rpb25FbGVtZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uQ29udGVudCk7XG5cbiAgICB2aXN1YWxpemVyLnJlbmRlcih2aXp1YWxpemVyRWxlbWVudCk7XG5cbiAgICBlbGVtZW50LnJlbmRlcmVkRWxlbWVudCA9IHF1ZXN0aW9uRWxlbWVudDtcbiAgICByZXR1cm4gcXVlc3Rpb25FbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlclRvb2xiYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgc2EtcGFuZWxfX2hlYWRlclwiO1xuICAgIHN1cGVyLnJlbmRlclRvb2xiYXIoY29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFsbCBxdWVzdGlvbnMgaW50byBnaXZlbiBIVE1MIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKiBjb250YWluZXIgLSBIVE1MIGVsZW1lbnQgdG8gcmVuZGVyIHRoZSBwYW5lbFxuICAgKi9cbiAgcHVibGljIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgc2EtcGFuZWxfX2NvbnRlbnQgc2EtZ3JpZFwiO1xuXG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyUGFuZWxFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxheW91dEVuZ2luZS5zdGFydChjb250YWluZXIpO1xuICAgIC8vICEhd2luZG93ICYmIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBVSUV2ZW50KFwicmVzaXplXCIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB2aXN1YWxpemVyIGFuZCBhbGwgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5sYXlvdXRFbmdpbmUuc3RvcCgpO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGZvciBjbGVhcmluZyBhbGwgcmVuZGVyZWQgZWxlbWVudHMgZnJvbSBvdXRzaWRlLlxuICAgKi9cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIGlmICghIXRoaXMudG9vbGJhckNvbnRhaW5lcikge1xuICAgICAgdGhpcy5kZXN0cm95VG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuICAgIH1cbiAgICBpZiAoISF0aGlzLmNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgIHRoaXMuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICB9XG4gICAgaWYgKCEhdGhpcy5mb290ZXJDb250YWluZXIpIHtcbiAgICAgIHRoaXMuZGVzdHJveUZvb3Rlcih0aGlzLmZvb3RlckNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZHJhd3MgdmlzdWFsaXplciB0b29iYXIgYW5kIGFsbCBpbm5lciBjb250ZW50LlxuICAgKi9cbiAgcHVibGljIHJlZnJlc2goKSB7XG4gICAgaWYgKCEhdGhpcy50b29sYmFyQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lUb29sYmFyKHRoaXMudG9vbGJhckNvbnRhaW5lcik7XG4gICAgICB0aGlzLnJlbmRlclRvb2xiYXIodGhpcy50b29sYmFyQ29udGFpbmVyKTtcbiAgICB9XG4gICAgc3VwZXIucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgbGF5b3V0IG9mIHZpc3VhbGl6ZXIgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgdGhpcy5sYXlvdXRFbmdpbmUudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmaWx0ZXIgYnkgcXVlc3Rpb24gbmFtZSBhbmQgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgc2V0RmlsdGVyKHF1ZXN0aW9uTmFtZTogc3RyaW5nLCBzZWxlY3RlZFZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFQcm92aWRlci5zZXRGaWx0ZXIocXVlc3Rpb25OYW1lLCBzZWxlY3RlZFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IElTdGF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICBlbGVtZW50czogW10uY29uY2F0KHRoaXMuX2VsZW1lbnRzKSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgc2V0IHN0YXRlKG5ld1N0YXRlOiBJU3RhdGUpIHtcbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlLmVsZW1lbnRzICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgdGhpcy5fZWxlbWVudHMgPSBbXS5jb25jYXQobmV3U3RhdGUuZWxlbWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuZXdTdGF0ZS5sb2NhbGUgIT09IFwidW5kZWZpbmVkXCIpIHRoaXMuc2V0TG9jYWxlKG5ld1N0YXRlLmxvY2FsZSk7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHZpenVhbGl6YXRpb24gcGFuZWwgcGVybWlzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCk6IElQZXJtaXNzaW9uW10ge1xuICAgIHJldHVybiA8YW55PnRoaXMuX2VsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICB2aXNpYmlsaXR5OiBlbGVtZW50LnZpc2liaWxpdHksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHZpenVhbGl6YXRpb24gcGFuZWwgcGVybWlzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgc2V0IHBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBJUGVybWlzc2lvbltdKSB7XG4gICAgY29uc3QgdXBkYXRlZEVsZW1lbnRzID0gdGhpcy5fZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtaXNzaW9uLm5hbWUgPT09IGVsZW1lbnQubmFtZSlcbiAgICAgICAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBwZXJtaXNzaW9uLnZpc2liaWxpdHk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHsgLi4uZWxlbWVudCB9O1xuICAgIH0pO1xuICAgIHRoaXMuX2VsZW1lbnRzID0gW10uY29uY2F0KHVwZGF0ZWRFbGVtZW50cyk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrICYmXG4gICAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGhpcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRlc3Ryb3lWaXN1YWxpemVycygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uUGFuZWwgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsLCBJUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByb3RlY3RlZCBfcGFuZWxWaXN1YWxpemVyOiBWaXN1YWxpemF0aW9uUGFuZWwgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge30sXG4gICAgbmFtZT86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucywgbmFtZSB8fCBcInBhbmVsRHluYW1pY1wiKTtcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgIG9wdGlvbnMuYWxsb3dEeW5hbWljTGF5b3V0ID0gZmFsc2U7XG4gICAgb3B0aW9ucy5kYXRhUHJvdmlkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyID0gbmV3IFZpc3VhbGl6YXRpb25QYW5lbChcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCksXG4gICAgICBbXSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIHRoaXMudXBkYXRlRGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJwYW5lbER5bmFtaWNcIjtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xuICAgIHN1cGVyLnVwZGF0ZURhdGEoZGF0YSk7XG4gICAgbGV0IHBhbmVsRGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgaWYgKGRhdGFJdGVtW3RoaXMucXVlc3Rpb24ubmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYW5lbERhdGEgPSBwYW5lbERhdGEuY29uY2F0KGRhdGFJdGVtW3RoaXMucXVlc3Rpb24ubmFtZV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3BhbmVsVmlzdWFsaXplci51cGRhdGVEYXRhKHBhbmVsRGF0YSk7XG4gIH1cblxuICBnZXRRdWVzdGlvbnMoKTogSVF1ZXN0aW9uW10ge1xuICAgIGNvbnN0IHBhbmVsZHluYW1pYzogUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcGFuZWxkeW5hbWljLnRlbXBsYXRlLnF1ZXN0aW9ucztcbiAgfVxuXG4gIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIuY2xlYXIoKTtcbiAgICBzdXBlci5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLnJlbmRlcihjb250YWluZXIpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJwYW5lbGR5bmFtaWNcIixcbiAgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1xuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvbkNvbW1lbnRNb2RlbCwgc2V0dGluZ3MgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IElEYXRhSW5mbywgRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vZGF0YVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyRmFjdG9yeSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmltcG9ydCBcIi4vdmlzdWFsaXplckJhc2Uuc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXplckJhc2UgaW1wbGVtZW50cyBJRGF0YUluZm8ge1xuICBwcml2YXRlIF9zaG93SGVhZGVyID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZm9vdGVyVmlzdWFsaXplcjogVmlzdWFsaXplckJhc2UgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2RhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIHRvb2xiYXJDb250YWluZXI6IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgY29udGVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCBmb290ZXJDb250YWluZXI6IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAvLyBwdWJsaWMgc3RhdGljIG90aGVyQ29tbWVudFF1ZXN0aW9uVHlwZSA9IFwiY29tbWVudFwiOyAvLyBUT0RPOiBtYWtlIGl0IGNvbmZpZ3VyZWFibGUgLSBhbGxvdyBjaG9vc2Ugd2hhdCBraW5kIG9mIHF1ZXN0aW9uL3Zpc3VhbGl6ZXIgd2lsbCBiZSB1c2VkIGZvciBjb21tZW50cy9vdGhlcnNcbiAgcHVibGljIHN0YXRpYyBvdGhlckNvbW1lbnRDb2xsYXBzZWQgPSB0cnVlO1xuXG4gIHByb3RlY3RlZCB0b29sYmFySXRlbUNyZWF0b3JzOiB7XG4gICAgW25hbWU6IHN0cmluZ106ICh0b29sYmFyPzogSFRNTERpdkVsZW1lbnQpID0+IEhUTUxFbGVtZW50O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIHByb3RlY3RlZCBvcHRpb25zOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICBwcml2YXRlIF9uYW1lPzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuX2RhdGFQcm92aWRlciA9IG9wdGlvbnMuZGF0YVByb3ZpZGVyIHx8IG5ldyBEYXRhUHJvdmlkZXIoZGF0YSk7XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyLm9uRGF0YUNoYW5nZWQuYWRkKCgpID0+IHRoaXMub25EYXRhQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRhdGFDaGFuZ2VkKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IGRhdGFOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb24ubmFtZTtcbiAgfVxuXG4gIGdldCBoYXNGb290ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICEhdGhpcy5xdWVzdGlvbiAmJiAodGhpcy5xdWVzdGlvbi5oYXNDb21tZW50IHx8IHRoaXMucXVlc3Rpb24uaGFzT3RoZXIpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVWaXN1YWxpemVyKHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5kYXRhUHJvdmlkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5kYXRhUHJvdmlkZXIgPSB0aGlzLmRhdGFQcm92aWRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gVmlzdWFsaXplckZhY3RvcnkuY3JlYXRlVmlzdWFsaXplcihxdWVzdGlvbiwgdGhpcy5kYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldCBmb290ZXJWaXN1YWxpemVyKCkge1xuICAgIGlmICghdGhpcy5oYXNGb290ZXIpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghdGhpcy5fZm9vdGVyVmlzdWFsaXplcikge1xuICAgICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgUXVlc3Rpb25Db21tZW50TW9kZWwoXG4gICAgICAgIHRoaXMucXVlc3Rpb24ubmFtZSArIChzZXR0aW5ncyB8fCB7fSkuY29tbWVudFByZWZpeFxuICAgICAgKTtcbiAgICAgIHF1ZXN0aW9uLnRpdGxlID0gdGhpcy5xdWVzdGlvbi50aXRsZTtcblxuICAgICAgdGhpcy5fZm9vdGVyVmlzdWFsaXplciA9IHRoaXMuY3JlYXRlVmlzdWFsaXplcihxdWVzdGlvbik7XG4gICAgICB0aGlzLl9mb290ZXJWaXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZm9vdGVyVmlzdWFsaXplcjtcbiAgfVxuXG4gIGdldFNlcmllc1ZhbHVlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcmllc1ZhbHVlcyB8fCBbXTtcbiAgfVxuXG4gIGdldFNlcmllc0xhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcmllc0xhYmVscyB8fCB0aGlzLmdldFNlcmllc1ZhbHVlcygpO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCk6IEFycmF5PGFueT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlcygpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyVG9vbGJhckl0ZW0oXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGNyZWF0b3I6ICh0b29sYmFyPzogSFRNTERpdkVsZW1lbnQpID0+IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHRoaXMudG9vbGJhckl0ZW1DcmVhdG9yc1tuYW1lXSA9IGNyZWF0b3I7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWUgfHwgXCJ2aXN1YWxpemVyXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVByb3ZpZGVyLmZpbHRlcmVkRGF0YTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZGF0YVByb3ZpZGVyKCk6IERhdGFQcm92aWRlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFQcm92aWRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHZpc3VhbGl6ZXIgZGF0YS5cbiAgICovXG4gIHVwZGF0ZURhdGEoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRhdGFQcm92aWRlcikge1xuICAgICAgdGhpcy5kYXRhUHJvdmlkZXIuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc0Zvb3Rlcikge1xuICAgICAgdGhpcy5mb290ZXJWaXN1YWxpemVyLnVwZGF0ZURhdGEoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgb25VcGRhdGU6ICgpID0+IHZvaWQ7XG5cbiAgaW52b2tlT25VcGRhdGUoKSB7XG4gICAgdGhpcy5vblVwZGF0ZSAmJiB0aGlzLm9uVXBkYXRlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICghIXRoaXMucmVuZGVyUmVzdWx0KSB7XG4gICAgICB0aGlzLmRlc3Ryb3lUb29sYmFyKHRoaXMudG9vbGJhckNvbnRhaW5lcik7XG4gICAgICB0aGlzLnRvb2xiYXJDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRlc3Ryb3lGb290ZXIodGhpcy5mb290ZXJDb250YWluZXIpO1xuICAgICAgdGhpcy5mb290ZXJDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnJlbmRlclJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghIXRoaXMuX2Zvb3RlclZpc3VhbGl6ZXIpIHtcbiAgICAgIHRoaXMuX2Zvb3RlclZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fZm9vdGVyVmlzdWFsaXplci5vblVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zvb3RlclZpc3VhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMudG9vbGJhckl0ZW1DcmVhdG9ycyB8fCB7fSkuZm9yRWFjaCgodG9vbGJhckl0ZW1OYW1lKSA9PiB7XG4gICAgICBsZXQgdG9vbGJhckl0ZW0gPSB0aGlzLnRvb2xiYXJJdGVtQ3JlYXRvcnNbdG9vbGJhckl0ZW1OYW1lXSh0b29sYmFyKTtcbiAgICAgIGlmICghIXRvb2xiYXJJdGVtKSB7XG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQodG9vbGJhckl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lUb29sYmFyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJUb29sYmFyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5zaG93SGVhZGVyKSB7XG4gICAgICBjb25zdCB0b29sYmFyID0gPEhUTUxEaXZFbGVtZW50PihcbiAgICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNhLXRvb2xiYXJcIilcbiAgICAgICk7XG4gICAgICB0aGlzLmNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICghIXRoaXMub3B0aW9ucyAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmRlc3Ryb3lDb250ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kZXN0cm95Q29udGVudChjb250YWluZXIsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKCEhdGhpcy5vcHRpb25zICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMucmVuZGVyQ29udGVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLm9wdGlvbnMucmVuZGVyQ29udGVudChjb250YWluZXIsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJUaGlzIHF1ZXN0aW9uIHR5cGUgaXMgbm90IHZpc3VhbGl6ZWQgeWV0XCI7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lGb290ZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckZvb3Rlcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYgKHRoaXMuaGFzRm9vdGVyKSB7XG4gICAgICBjb25zdCBmb290ZXJUaXRsZUVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImg0XCIsXG4gICAgICAgIFwic2EtdmlzdWFsaXplcl9fZm9vdGVyLXRpdGxlXCIsXG4gICAgICAgIHsgaW5uZXJUZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJDb21tZW50VGl0bGVcIikgfVxuICAgICAgKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJUaXRsZUVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBmb290ZXJDb250ZW50RWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwic2EtdmlzdWFsaXplcl9fZm9vdGVyLWNvbnRlbnRcIlxuICAgICAgKTtcbiAgICAgIGZvb3RlckNvbnRlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBWaXN1YWxpemVyQmFzZS5vdGhlckNvbW1lbnRDb2xsYXBzZWRcbiAgICAgICAgPyBcIm5vbmVcIlxuICAgICAgICA6IFwiYmxvY2tcIjtcblxuICAgICAgY29uc3QgdmlzaWJpbGl0eUJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUJ1dHRvbigoKSA9PiB7XG4gICAgICAgIGlmIChmb290ZXJDb250ZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIGZvb3RlckNvbnRlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgdmlzaWJpbGl0eUJ1dHRvbi5pbm5lclRleHQgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUJ1dHRvblwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb290ZXJDb250ZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgdmlzaWJpbGl0eUJ1dHRvbi5pbm5lclRleHQgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFxuICAgICAgICAgICAgVmlzdWFsaXplckJhc2Uub3RoZXJDb21tZW50Q29sbGFwc2VkID8gXCJzaG93QnV0dG9uXCIgOiBcImhpZGVCdXR0b25cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb290ZXJWaXN1YWxpemVyLmludm9rZU9uVXBkYXRlKCk7XG4gICAgICB9LCBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0J1dHRvblwiKSAvKiwgXCJzYS10b29sYmFyX19idXR0b24tLXJpZ2h0XCIqLyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlzaWJpbGl0eUJ1dHRvbik7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50RWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZm9vdGVyVmlzdWFsaXplci5yZW5kZXIoZm9vdGVyQ29udGVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcih0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0RWxlbWVudDtcblxuICAgIHRoaXMudG9vbGJhckNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS12aXN1YWxpemVyX190b29sYmFyXCJcbiAgICApO1xuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50b29sYmFyQ29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlclRvb2xiYXIodGhpcy50b29sYmFyQ29udGFpbmVyKTtcblxuICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS12aXN1YWxpemVyX19jb250ZW50XCJcbiAgICApO1xuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcblxuICAgIHRoaXMuZm9vdGVyQ29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInNhLXZpc3VhbGl6ZXJfX2Zvb3RlclwiXG4gICAgKTtcbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyQ29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlckZvb3Rlcih0aGlzLmZvb3RlckNvbnRhaW5lcik7XG4gIH1cblxuICAvKipcbiAgICogUmVkcmF3cyB2aXN1YWxpemVyIGFuZCBhbGwgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyByZWZyZXNoKCkge1xuICAgIGlmICghIXRoaXMuY29udGVudENvbnRhaW5lcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoISF0aGlzLmZvb3RlckNvbnRhaW5lcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVzdHJveUZvb3Rlcih0aGlzLmZvb3RlckNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMucmVuZGVyRm9vdGVyKHRoaXMuZm9vdGVyQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmFuZG9tQ29sb3IoKSB7XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5nZXRDb2xvcnMoKTtcbiAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbiAgfVxuXG4gIGJhY2tncm91bmRDb2xvciA9IFwiI2Y3ZjdmN1wiO1xuXG4gIHN0YXRpYyBjdXN0b21Db2xvcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3RhdGljIGNvbG9ycyA9IFtcbiAgICBcIiM4NmUxZmJcIixcbiAgICBcIiMzOTk5ZmJcIixcbiAgICBcIiNmZjY3NzFcIixcbiAgICBcIiMxZWI0OTZcIixcbiAgICBcIiNmZmMxNTJcIixcbiAgICBcIiNhYmExZmZcIixcbiAgICBcIiM3ZDhkYTVcIixcbiAgICBcIiM0ZWM0NmNcIixcbiAgICBcIiNjZjM3YTZcIixcbiAgICBcIiM0ZTYxOThcIixcbiAgXTtcblxuICBnZXRDb2xvcnMoY291bnQgPSAxMCkge1xuICAgIGNvbnN0IGNvbG9ycyA9XG4gICAgICBBcnJheS5pc0FycmF5KFZpc3VhbGl6ZXJCYXNlLmN1c3RvbUNvbG9ycykgJiZcbiAgICAgIFZpc3VhbGl6ZXJCYXNlLmN1c3RvbUNvbG9ycy5sZW5ndGggPiAwXG4gICAgICAgID8gVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzXG4gICAgICAgIDogVmlzdWFsaXplckJhc2UuY29sb3JzO1xuXG4gICAgbGV0IG1hbnlDb2xvcnM6IGFueSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICBtYW55Q29sb3JzID0gbWFueUNvbG9ycy5jb25jYXQoY29sb3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFueUNvbG9ycztcbiAgfVxuXG4gIGdldCBzaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93SGVhZGVyO1xuICB9XG4gIHNldCBzaG93SGVhZGVyKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKG5ld1ZhbHVlICE9IHRoaXMuX3Nob3dIZWFkZXIpIHtcbiAgICAgIHRoaXMuX3Nob3dIZWFkZXIgPSBuZXdWYWx1ZTtcbiAgICAgIGlmICghIXRoaXMudG9vbGJhckNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmRlc3Ryb3lUb29sYmFyKHRoaXMudG9vbGJhckNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMucmVuZGVyVG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldERhdGEoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhUHJvdmlkZXIuZ2V0RGF0YSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6ZXJGYWN0b3J5IHtcbiAgLyoqXG4gICAqIENyZWF0ZSB2aXN1YWxpemVyIGJ5IHF1ZXN0aW9uLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjcmVhdGVWaXN1YWxpemVyKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiB7IFtpbmRleDogc3RyaW5nXTogYW55IH1cbiAgKTogVmlzdWFsaXplckJhc2Uge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJ0ZXh0XCIgJiYgcXVlc3Rpb24uaW5wdXRUeXBlKSB7XG4gICAgICB0eXBlID0gcXVlc3Rpb24uaW5wdXRUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHZhciBjcmVhdG9ycyA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLmdldFZpc3VhbGl6ZXJzQnlUeXBlKHR5cGUpO1xuICAgIHZhciB2aXN1YWxpemVycyA9IGNyZWF0b3JzLm1hcChcbiAgICAgIChjcmVhdG9yKSA9PiBuZXcgY3JlYXRvcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucylcbiAgICApO1xuICAgIGlmICh2aXN1YWxpemVycy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBhbHRlcm5hdGl2ZXNWaXN1YWxpemVyQ29uc3RydWN0b3IgPSBWaXN1YWxpemF0aW9uTWFuYWdlci5nZXRBbHRlcm5hdGl2ZXNWaXN1YWxpemVyKCk7XG4gICAgICBsZXQgdmlzdWFsaXplciA9IG5ldyBhbHRlcm5hdGl2ZXNWaXN1YWxpemVyQ29uc3RydWN0b3IoXG4gICAgICAgIHZpc3VhbGl6ZXJzLFxuICAgICAgICBxdWVzdGlvbixcbiAgICAgICAgZGF0YSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiB2aXN1YWxpemVyO1xuICAgIH1cbiAgICByZXR1cm4gdmlzdWFsaXplcnNbMF07XG4gIH1cbn1cbiIsImV4cG9ydCB2YXIgc3RvcFdvcmRzID0gbmV3IEFycmF5KFxuICBcImFcIixcbiAgXCJhYm91dFwiLFxuICBcImFib3ZlXCIsXG4gIFwiYWNyb3NzXCIsXG4gIFwiYWZ0ZXJcIixcbiAgXCJhZ2FpblwiLFxuICBcImFnYWluc3RcIixcbiAgXCJhbGxcIixcbiAgXCJhbG1vc3RcIixcbiAgXCJhbG9uZVwiLFxuICBcImFsb25nXCIsXG4gIFwiYWxyZWFkeVwiLFxuICBcImFsc29cIixcbiAgXCJhbHRob3VnaFwiLFxuICBcImFsd2F5c1wiLFxuICBcImFtb25nXCIsXG4gIFwiYW5cIixcbiAgXCJhbmRcIixcbiAgXCJhbm90aGVyXCIsXG4gIFwiYW55XCIsXG4gIFwiYW55Ym9keVwiLFxuICBcImFueW9uZVwiLFxuICBcImFueXRoaW5nXCIsXG4gIFwiYW55d2hlcmVcIixcbiAgXCJhcmVcIixcbiAgXCJhcmVhXCIsXG4gIFwiYXJlYXNcIixcbiAgXCJhcm91bmRcIixcbiAgXCJhc1wiLFxuICBcImFza1wiLFxuICBcImFza2VkXCIsXG4gIFwiYXNraW5nXCIsXG4gIFwiYXNrc1wiLFxuICBcImF0XCIsXG4gIFwiYXdheVwiLFxuICBcImJcIixcbiAgXCJiYWNrXCIsXG4gIFwiYmFja2VkXCIsXG4gIFwiYmFja2luZ1wiLFxuICBcImJhY2tzXCIsXG4gIFwiYmVcIixcbiAgXCJiZWNhbWVcIixcbiAgXCJiZWNhdXNlXCIsXG4gIFwiYmVjb21lXCIsXG4gIFwiYmVjb21lc1wiLFxuICBcImJlZW5cIixcbiAgXCJiZWZvcmVcIixcbiAgXCJiZWdhblwiLFxuICBcImJlaGluZFwiLFxuICBcImJlaW5nXCIsXG4gIFwiYmVpbmdzXCIsXG4gIFwiYmVzdFwiLFxuICBcImJldHRlclwiLFxuICBcImJldHdlZW5cIixcbiAgXCJiaWdcIixcbiAgXCJib3RoXCIsXG4gIFwiYnV0XCIsXG4gIFwiYnlcIixcbiAgXCJjXCIsXG4gIFwiY2FtZVwiLFxuICBcImNhblwiLFxuICBcImNhbm5vdFwiLFxuICBcImNhc2VcIixcbiAgXCJjYXNlc1wiLFxuICBcImNlcnRhaW5cIixcbiAgXCJjZXJ0YWlubHlcIixcbiAgXCJjbGVhclwiLFxuICBcImNsZWFybHlcIixcbiAgXCJjb21lXCIsXG4gIFwiY291bGRcIixcbiAgXCJkXCIsXG4gIFwiZGlkXCIsXG4gIFwiZGlmZmVyXCIsXG4gIFwiZGlmZmVyZW50XCIsXG4gIFwiZGlmZmVyZW50bHlcIixcbiAgXCJkb1wiLFxuICBcImRvZXNcIixcbiAgXCJkb25lXCIsXG4gIFwiZG93blwiLFxuICBcImRvd25cIixcbiAgXCJkb3duZWRcIixcbiAgXCJkb3duaW5nXCIsXG4gIFwiZG93bnNcIixcbiAgXCJkdXJpbmdcIixcbiAgXCJlXCIsXG4gIFwiZWFjaFwiLFxuICBcImVhcmx5XCIsXG4gIFwiZWl0aGVyXCIsXG4gIFwiZW5kXCIsXG4gIFwiZW5kZWRcIixcbiAgXCJlbmRpbmdcIixcbiAgXCJlbmRzXCIsXG4gIFwiZW5vdWdoXCIsXG4gIFwiZXZlblwiLFxuICBcImV2ZW5seVwiLFxuICBcImV2ZXJcIixcbiAgXCJldmVyeVwiLFxuICBcImV2ZXJ5Ym9keVwiLFxuICBcImV2ZXJ5b25lXCIsXG4gIFwiZXZlcnl0aGluZ1wiLFxuICBcImV2ZXJ5d2hlcmVcIixcbiAgXCJmXCIsXG4gIFwiZmFjZVwiLFxuICBcImZhY2VzXCIsXG4gIFwiZmFjdFwiLFxuICBcImZhY3RzXCIsXG4gIFwiZmFyXCIsXG4gIFwiZmVsdFwiLFxuICBcImZld1wiLFxuICBcImZpbmRcIixcbiAgXCJmaW5kc1wiLFxuICBcImZpcnN0XCIsXG4gIFwiZm9yXCIsXG4gIFwiZm91clwiLFxuICBcImZyb21cIixcbiAgXCJmdWxsXCIsXG4gIFwiZnVsbHlcIixcbiAgXCJmdXJ0aGVyXCIsXG4gIFwiZnVydGhlcmVkXCIsXG4gIFwiZnVydGhlcmluZ1wiLFxuICBcImZ1cnRoZXJzXCIsXG4gIFwiZ1wiLFxuICBcImdhdmVcIixcbiAgXCJnZW5lcmFsXCIsXG4gIFwiZ2VuZXJhbGx5XCIsXG4gIFwiZ2V0XCIsXG4gIFwiZ2V0c1wiLFxuICBcImdpdmVcIixcbiAgXCJnaXZlblwiLFxuICBcImdpdmVzXCIsXG4gIFwiZ29cIixcbiAgXCJnb2luZ1wiLFxuICBcImdvb2RcIixcbiAgXCJnb29kc1wiLFxuICBcImdvdFwiLFxuICBcImdyZWF0XCIsXG4gIFwiZ3JlYXRlclwiLFxuICBcImdyZWF0ZXN0XCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJncm91cGVkXCIsXG4gIFwiZ3JvdXBpbmdcIixcbiAgXCJncm91cHNcIixcbiAgXCJoXCIsXG4gIFwiaGFkXCIsXG4gIFwiaGFzXCIsXG4gIFwiaGF2ZVwiLFxuICBcImhhdmluZ1wiLFxuICBcImhlXCIsXG4gIFwiaGVyXCIsXG4gIFwiaGVyZVwiLFxuICBcImhlcnNlbGZcIixcbiAgXCJoaWdoXCIsXG4gIFwiaGlnaFwiLFxuICBcImhpZ2hcIixcbiAgXCJoaWdoZXJcIixcbiAgXCJoaWdoZXN0XCIsXG4gIFwiaGltXCIsXG4gIFwiaGltc2VsZlwiLFxuICBcImhpc1wiLFxuICBcImhvd1wiLFxuICBcImhvd2V2ZXJcIixcbiAgXCJpXCIsXG4gIFwiaWZcIixcbiAgXCJpbXBvcnRhbnRcIixcbiAgXCJpblwiLFxuICBcImludGVyZXN0XCIsXG4gIFwiaW50ZXJlc3RlZFwiLFxuICBcImludGVyZXN0aW5nXCIsXG4gIFwiaW50ZXJlc3RzXCIsXG4gIFwiaW50b1wiLFxuICBcImlzXCIsXG4gIFwiaXRcIixcbiAgXCJpdHNcIixcbiAgXCJpdHNlbGZcIixcbiAgXCJqXCIsXG4gIFwianVzdFwiLFxuICBcImtcIixcbiAgXCJrZWVwXCIsXG4gIFwia2VlcHNcIixcbiAgXCJraW5kXCIsXG4gIFwia25ld1wiLFxuICBcImtub3dcIixcbiAgXCJrbm93blwiLFxuICBcImtub3dzXCIsXG4gIFwibFwiLFxuICBcImxhcmdlXCIsXG4gIFwibGFyZ2VseVwiLFxuICBcImxhc3RcIixcbiAgXCJsYXRlclwiLFxuICBcImxhdGVzdFwiLFxuICBcImxlYXN0XCIsXG4gIFwibGVzc1wiLFxuICBcImxldFwiLFxuICBcImxldHNcIixcbiAgXCJsaWtlXCIsXG4gIFwibGlrZWx5XCIsXG4gIFwibG9uZ1wiLFxuICBcImxvbmdlclwiLFxuICBcImxvbmdlc3RcIixcbiAgXCJtXCIsXG4gIFwibWFkZVwiLFxuICBcIm1ha2VcIixcbiAgXCJtYWtpbmdcIixcbiAgXCJtYW5cIixcbiAgXCJtYW55XCIsXG4gIFwibWF5XCIsXG4gIFwibWVcIixcbiAgXCJtZW1iZXJcIixcbiAgXCJtZW1iZXJzXCIsXG4gIFwibWVuXCIsXG4gIFwibWlnaHRcIixcbiAgXCJtb3JlXCIsXG4gIFwibW9zdFwiLFxuICBcIm1vc3RseVwiLFxuICBcIm1yXCIsXG4gIFwibXJzXCIsXG4gIFwibXVjaFwiLFxuICBcIm11c3RcIixcbiAgXCJteVwiLFxuICBcIm15c2VsZlwiLFxuICBcIm5cIixcbiAgXCJuZWNlc3NhcnlcIixcbiAgXCJuZWVkXCIsXG4gIFwibmVlZGVkXCIsXG4gIFwibmVlZGluZ1wiLFxuICBcIm5lZWRzXCIsXG4gIFwibmV2ZXJcIixcbiAgXCJuZXdcIixcbiAgXCJuZXdcIixcbiAgXCJuZXdlclwiLFxuICBcIm5ld2VzdFwiLFxuICBcIm5leHRcIixcbiAgXCJub1wiLFxuICBcIm5vYm9keVwiLFxuICBcIm5vblwiLFxuICBcIm5vb25lXCIsXG4gIFwibm90XCIsXG4gIFwibm90aGluZ1wiLFxuICBcIm5vd1wiLFxuICBcIm5vd2hlcmVcIixcbiAgXCJudW1iZXJcIixcbiAgXCJudW1iZXJzXCIsXG4gIFwib1wiLFxuICBcIm9mXCIsXG4gIFwib2ZmXCIsXG4gIFwib2Z0ZW5cIixcbiAgXCJvbGRcIixcbiAgXCJvbGRlclwiLFxuICBcIm9sZGVzdFwiLFxuICBcIm9uXCIsXG4gIFwib25jZVwiLFxuICBcIm9uZVwiLFxuICBcIm9ubHlcIixcbiAgXCJvcGVuXCIsXG4gIFwib3BlbmVkXCIsXG4gIFwib3BlbmluZ1wiLFxuICBcIm9wZW5zXCIsXG4gIFwib3JcIixcbiAgXCJvcmRlclwiLFxuICBcIm9yZGVyZWRcIixcbiAgXCJvcmRlcmluZ1wiLFxuICBcIm9yZGVyc1wiLFxuICBcIm90aGVyXCIsXG4gIFwib3RoZXJzXCIsXG4gIFwib3VyXCIsXG4gIFwib3V0XCIsXG4gIFwib3ZlclwiLFxuICBcInBcIixcbiAgXCJwYXJ0XCIsXG4gIFwicGFydGVkXCIsXG4gIFwicGFydGluZ1wiLFxuICBcInBhcnRzXCIsXG4gIFwicGVyXCIsXG4gIFwicGVyaGFwc1wiLFxuICBcInBsYWNlXCIsXG4gIFwicGxhY2VzXCIsXG4gIFwicG9pbnRcIixcbiAgXCJwb2ludGVkXCIsXG4gIFwicG9pbnRpbmdcIixcbiAgXCJwb2ludHNcIixcbiAgXCJwb3NzaWJsZVwiLFxuICBcInByZXNlbnRcIixcbiAgXCJwcmVzZW50ZWRcIixcbiAgXCJwcmVzZW50aW5nXCIsXG4gIFwicHJlc2VudHNcIixcbiAgXCJwcm9ibGVtXCIsXG4gIFwicHJvYmxlbXNcIixcbiAgXCJwdXRcIixcbiAgXCJwdXRzXCIsXG4gIFwicVwiLFxuICBcInF1aXRlXCIsXG4gIFwiclwiLFxuICBcInJhdGhlclwiLFxuICBcInJlYWxseVwiLFxuICBcInJpZ2h0XCIsXG4gIFwicmlnaHRcIixcbiAgXCJyb29tXCIsXG4gIFwicm9vbXNcIixcbiAgXCJzXCIsXG4gIFwic2FpZFwiLFxuICBcInNhbWVcIixcbiAgXCJzYXdcIixcbiAgXCJzYXlcIixcbiAgXCJzYXlzXCIsXG4gIFwic2Vjb25kXCIsXG4gIFwic2Vjb25kc1wiLFxuICBcInNlZVwiLFxuICBcInNlZW1cIixcbiAgXCJzZWVtZWRcIixcbiAgXCJzZWVtaW5nXCIsXG4gIFwic2VlbXNcIixcbiAgXCJzZWVzXCIsXG4gIFwic2V2ZXJhbFwiLFxuICBcInNoYWxsXCIsXG4gIFwic2hlXCIsXG4gIFwic2hvdWxkXCIsXG4gIFwic2hvd1wiLFxuICBcInNob3dlZFwiLFxuICBcInNob3dpbmdcIixcbiAgXCJzaG93c1wiLFxuICBcInNpZGVcIixcbiAgXCJzaWRlc1wiLFxuICBcInNpbmNlXCIsXG4gIFwic21hbGxcIixcbiAgXCJzbWFsbGVyXCIsXG4gIFwic21hbGxlc3RcIixcbiAgXCJzb1wiLFxuICBcInNvbWVcIixcbiAgXCJzb21lYm9keVwiLFxuICBcInNvbWVvbmVcIixcbiAgXCJzb21ldGhpbmdcIixcbiAgXCJzb21ld2hlcmVcIixcbiAgXCJzdGF0ZVwiLFxuICBcInN0YXRlc1wiLFxuICBcInN0aWxsXCIsXG4gIFwic3RpbGxcIixcbiAgXCJzdWNoXCIsXG4gIFwic3VyZVwiLFxuICBcInRcIixcbiAgXCJ0YWtlXCIsXG4gIFwidGFrZW5cIixcbiAgXCJ0aGFuXCIsXG4gIFwidGhhdFwiLFxuICBcInRoZVwiLFxuICBcInRoZWlyXCIsXG4gIFwidGhlbVwiLFxuICBcInRoZW5cIixcbiAgXCJ0aGVyZVwiLFxuICBcInRoZXJlZm9yZVwiLFxuICBcInRoZXNlXCIsXG4gIFwidGhleVwiLFxuICBcInRoaW5nXCIsXG4gIFwidGhpbmdzXCIsXG4gIFwidGhpbmtcIixcbiAgXCJ0aGlua3NcIixcbiAgXCJ0aGlzXCIsXG4gIFwidGhvc2VcIixcbiAgXCJ0aG91Z2hcIixcbiAgXCJ0aG91Z2h0XCIsXG4gIFwidGhvdWdodHNcIixcbiAgXCJ0aHJlZVwiLFxuICBcInRocm91Z2hcIixcbiAgXCJ0aHVzXCIsXG4gIFwidG9cIixcbiAgXCJ0b2RheVwiLFxuICBcInRvZ2V0aGVyXCIsXG4gIFwidG9vXCIsXG4gIFwidG9va1wiLFxuICBcInRvd2FyZFwiLFxuICBcInR1cm5cIixcbiAgXCJ0dXJuZWRcIixcbiAgXCJ0dXJuaW5nXCIsXG4gIFwidHVybnNcIixcbiAgXCJ0d29cIixcbiAgXCJ1XCIsXG4gIFwidW5kZXJcIixcbiAgXCJ1bnRpbFwiLFxuICBcInVwXCIsXG4gIFwidXBvblwiLFxuICBcInVzXCIsXG4gIFwidXNlXCIsXG4gIFwidXNlZFwiLFxuICBcInVzZXNcIixcbiAgXCJ2XCIsXG4gIFwidmVyeVwiLFxuICBcIndcIixcbiAgXCJ3YW50XCIsXG4gIFwid2FudGVkXCIsXG4gIFwid2FudGluZ1wiLFxuICBcIndhbnRzXCIsXG4gIFwid2FzXCIsXG4gIFwid2F5XCIsXG4gIFwid2F5c1wiLFxuICBcIndlXCIsXG4gIFwid2VsbFwiLFxuICBcIndlbGxzXCIsXG4gIFwid2VudFwiLFxuICBcIndlcmVcIixcbiAgXCJ3aGF0XCIsXG4gIFwid2hlblwiLFxuICBcIndoZXJlXCIsXG4gIFwid2hldGhlclwiLFxuICBcIndoaWNoXCIsXG4gIFwid2hpbGVcIixcbiAgXCJ3aG9cIixcbiAgXCJ3aG9sZVwiLFxuICBcIndob3NlXCIsXG4gIFwid2h5XCIsXG4gIFwid2lsbFwiLFxuICBcIndpdGhcIixcbiAgXCJ3aXRoaW5cIixcbiAgXCJ3aXRob3V0XCIsXG4gIFwid29ya1wiLFxuICBcIndvcmtlZFwiLFxuICBcIndvcmtpbmdcIixcbiAgXCJ3b3Jrc1wiLFxuICBcIndvdWxkXCIsXG4gIFwieFwiLFxuICBcInlcIixcbiAgXCJ5ZWFyXCIsXG4gIFwieWVhcnNcIixcbiAgXCJ5ZXRcIixcbiAgXCJ5b3VcIixcbiAgXCJ5b3VuZ1wiLFxuICBcInlvdW5nZXJcIixcbiAgXCJ5b3VuZ2VzdFwiLFxuICBcInlvdXJcIixcbiAgXCJ5b3Vyc1wiLFxuICBcInpcIlxuKTtcbiIsImltcG9ydCB7IHN0b3BXb3JkcyB9IGZyb20gXCIuL2VuZ2xpc2hcIjtcblxudmFyIHN0b3BXb3Jkc0RpY3Rpb25hcnk6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxzdHJpbmc+IH0gPSB7fTtcbnN0b3BXb3Jkc0RpY3Rpb25hcnlbXCJlblwiXSA9IHN0b3BXb3JkcztcblxuZXhwb3J0IHZhciB0ZXh0SGVscGVyID0ge1xuICBnZXRTdG9wV29yZHM6IChsb2NhbGU6IHN0cmluZyA9IFwiXCIpID0+IHtcbiAgICByZXR1cm4gc3RvcFdvcmRzRGljdGlvbmFyeVtsb2NhbGUgfHwgXCJlblwiXSB8fCBbXTtcbiAgfVxufTtcbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IHRleHRIZWxwZXIgfSBmcm9tIFwiLi9zdG9wd29yZHMvaW5kZXhcIjtcbmltcG9ydCBXb3JkQ2xvdWRMaWIgZnJvbSBcIndvcmRjbG91ZFwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFdvcmRDbG91ZEFkYXB0ZXIge1xuICBwcml2YXRlIF93b3JkY2xvdWQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGVsOiBXb3JkQ2xvdWQpIHt9XG5cbiAgcHVibGljIGdldCB3b3JkY2xvdWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmRjbG91ZDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5tb2RlbC5nZXREYXRhKCk7XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5tb2RlbC5nZXRDb2xvcnMoKTtcbiAgICBjb25zdCBjYW52YXNOb2RlID0gPEhUTUxDYW52YXNFbGVtZW50PihcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwgXCJcIilcbiAgICApO1xuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSA8SFRNTEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInBcIiwgXCJcIiwge1xuICAgICAgaW5uZXJIVE1MOiBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiLFxuICAgIH0pO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGVtcHR5VGV4dE5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2FudmFzTm9kZSk7XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBsaXN0OiBkYXRhLFxuICAgICAgd2VpZ2h0RmFjdG9yOiAyMCxcbiAgICAgIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUkgQm9sZCwgc2Fucy1zZXJpZlwiLFxuICAgICAgY29sb3I6ICh3b3JkOiBzdHJpbmcsIHdlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmdldFJhbmRvbUNvbG9yKCk7XG4gICAgICB9LFxuICAgICAgcm90YXRlUmF0aW86IDAuNSxcbiAgICAgIHJvdGF0aW9uU3RlcHM6IDIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMubW9kZWwuYmFja2dyb3VuZENvbG9yLFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uIChpdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSArIFwiOiBcIiArIGl0ZW1bMV0pO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5fd29yZGNsb3VkID0gV29yZENsb3VkTGliKGNhbnZhc05vZGUsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmRjbG91ZDtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fd29yZGNsb3VkID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXb3JkQ2xvdWQgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByaXZhdGUgX3dvcmRjbG91ZEFkYXB0ZXI6IFdvcmRDbG91ZEFkYXB0ZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdCxcbiAgICBuYW1lPzogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zLCBuYW1lIHx8IFwid29yZGNsb3VkXCIpO1xuICAgIHRoaXMuX3dvcmRjbG91ZEFkYXB0ZXIgPSBuZXcgV29yZENsb3VkQWRhcHRlcih0aGlzKTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgbGV0IHJlc3VsdDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gICAgbGV0IHN0b3BXb3JkcyA9IHRleHRIZWxwZXIuZ2V0U3RvcFdvcmRzKCk7XG4gICAgbGV0IHN0b3BUaGVXb3JkID0gKHdvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHN0b3BXb3Jkcy5pbmRleE9mKHdvcmQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3b3JkO1xuICAgIH07XG5cbiAgICBsZXQgcHJvY2Vzc1N0cmluZyA9IChyb3c6IHN0cmluZykgPT4ge1xuICAgICAgcm93ID0gXCJcIiArIHJvdztcbiAgICAgIGlmICghIXJvdykge1xuICAgICAgICByb3cuc3BsaXQoXCIgXCIpLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICAgICAgICB3b3JkID0gc3RvcFRoZVdvcmQod29yZC50b0xvd2VyQ2FzZSgpIHx8IFwiXCIpO1xuICAgICAgICAgIGlmICghIXdvcmQpIHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0W3dvcmRdKSB7XG4gICAgICAgICAgICAgIHJlc3VsdFt3b3JkXSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHRbd29yZF0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkpIHtcbiAgICAgICAgICByb3dWYWx1ZS5mb3JFYWNoKHByb2Nlc3NTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2Ygcm93VmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvd1ZhbHVlKS5mb3JFYWNoKChrZXkpID0+XG4gICAgICAgICAgICAgIHByb2Nlc3NTdHJpbmcocm93VmFsdWVba2V5XSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2Nlc3NTdHJpbmcocm93VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlc3VsdCkubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiBba2V5LCByZXN1bHRba2V5XV07XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3dvcmRjbG91ZEFkYXB0ZXIuZGVzdHJveShjb250YWluZXIpO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fd29yZGNsb3VkQWRhcHRlci5jcmVhdGUoY29udGFpbmVyKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fd29yZGNsb3VkQWRhcHRlci5kZXN0cm95KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInRleHRcIiwgV29yZENsb3VkKTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNvbW1lbnRcIiwgV29yZENsb3VkKTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm11bHRpcGxldGV4dFwiLCBXb3JkQ2xvdWQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Bsb3RseV9qc19kaXN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dvcmRjbG91ZF9fOyJdLCJzb3VyY2VSb290IjoiIn0=