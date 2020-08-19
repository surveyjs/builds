/*!
 * surveyjs - SurveyJS Analytics library v1.7.27
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
                handle: ".sa-question__title",
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
        this._muuri.add(elements, options);
    };
    MuuriLayoutEngine.prototype.remove = function (elements, options) {
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
        this.onPermissionsChangedCallback && this.onPermissionsChangedCallback(this);
    };
    VisualizationPanel.prototype.makeElementPublic = function (element) {
        if (element.visibility !== _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].PublicInvisible)
            return;
        element.visibility = _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Visible;
        this.onStateChanged.fire(this, this.state);
        this.onPermissionsChangedCallback && this.onPermissionsChangedCallback(this);
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
            this._elements = [].concat(newState.elements || []);
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
            this.onPermissionsChangedCallback && this.onPermissionsChangedCallback(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vbm9kZV9tb2R1bGVzL211dXJpL2Rpc3QvbXV1cmkuanMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2FsdGVybmF0aXZlVml6dWFsaXplcnNXcmFwcGVyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9ib29sZWFuLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2RhdGFQcm92aWRlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvZW50cmllcy9zdW1tYXJ5LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9maWx0ZXJJbmZvLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sYXlvdXRFbmdpbmUudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZmFyc2kudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9ydXNzaWFuLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL251bWJlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L2Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Bsb3RseS9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RleHQuc2Nzcz8yYzRlIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90ZXh0LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25NYXRyaXhEcm9wZG93bi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzPzNjODIiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsRHluYW1pYy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXplckJhc2Uuc2Nzcz9hZmJkIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy92aXN1YWxpemVyQmFzZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXplckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvd29yZGNsb3VkL3dvcmRjbG91ZC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiUGxvdGx5XCIsXCJjb21tb25qczJcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJjb21tb25qc1wiOlwicGxvdGx5LmpzLWRpc3RcIixcImFtZFwiOlwicGxvdGx5LmpzLWRpc3RcIn0iLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXktY29yZVwiLFwiY29tbW9uanNcIjpcInN1cnZleS1jb3JlXCIsXCJhbWRcIjpcInN1cnZleS1jb3JlXCJ9Iiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwid29yZGNsb3VkXCIsXCJjb21tb25qc1wiOlwid29yZGNsb3VkXCIsXCJhbWRcIjpcIndvcmRjbG91ZFwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEscUNBQXFDO0FBQ2xELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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ekIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLGFBQWE7QUFDMUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IseURBQXlEO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUF5RDtBQUNuRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLEtBQUs7QUFDbEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsYUFBYSxFQUFFO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFlBQVk7QUFDekIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUF3RDtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3REFBd0Q7QUFDeEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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N0MsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FB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T0FBTyxFQUNQLElBQUksRUFDSixPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUNQLFFBQVEsRUFDUixLQUFLLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILE9BQU8sRUFDUCxHQUFHLEVBQ0gsUUFBUSxFQUNSLFFBQVEsRUFDUixPQUFPLEVBQ1AsT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILE1BQU0sRUFDTixNQUFNLEVBQ04sS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLE1BQU0sRUFDTixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNYLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04sT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04sS0FBSyxFQUNMLE9BQU8sRUFDUCxNQUFNLEVBQ04s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ZmlsZSI6InN1cnZleS5hbmFseXRpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJwbG90bHkuanMtZGlzdFwiKSwgcmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwid29yZGNsb3VkXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzXCIsIFtcInBsb3RseS5qcy1kaXN0XCIsIFwic3VydmV5LWNvcmVcIiwgXCJ3b3JkY2xvdWRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3VydmV5QW5hbHl0aWNzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcIndvcmRjbG91ZFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5QW5hbHl0aWNzXCJdID0gZmFjdG9yeShyb290W1wiUGxvdGx5XCJdLCByb290W1wiU3VydmV5XCJdLCByb290W1wiV29yZENsb3VkXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wbG90bHlfanNfZGlzdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd29yZGNsb3VkX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL3N1bW1hcnkudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZGV0YWlsXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZHJhZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEzIDVsLTEgMSAxIDFIOVYzbDEgMSAxLTEtMy0zLTMgMyAxIDEgMS0xdjRIM2wxLTEtMS0xLTMgMyAzIDMgMS0xLTEtMWg0djRsLTEtMS0xIDEgMyAzIDMtMy0xLTEtMSAxVjloNGwtMSAxIDEgMSAzLTN6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctaGlkZVxcXCI+PHBhdGggY2xhc3M9XFxcInN0MVxcXCIgZD1cXFwiTTEyLjc5IDQuMkwxNiAxbC0xLTEtMy4zMiAzLjMyQzEwLjU3IDIuNTUgOS4zMiAyIDggMiAzLjYzIDIgMCA3Ljk3IDAgNy45N3MxLjI3IDIuMSAzLjIxIDMuODJsLTMuMjMgMy4yMy45OC45OCAzLjM1LTMuMzRDNS40MSAxMy40NCA2LjY3IDE0IDggMTRjNC4zNyAwIDgtNiA4LTZzLTEuMjctMi4wOS0zLjIxLTMuOHpNMiA3Ljk3YzEuMDctMS40NyAzLjYxLTQgNi00IC44IDAgMS42LjI3IDIuMzUuNjhsLS43OC43OGMtLjQ2LS4yOS0uOTktLjQ2LTEuNTctLjQ2LTEuNjYgMC0zIDEuMzQtMyAzIDAgLjU4LjE3IDEuMTEuNDYgMS41N2wtLjk3Ljk3QTEzLjM4IDEzLjM4IDAgMCAxIDIgNy45N3ptNiA0Yy0uOCAwLTEuNTktLjI3LTIuMzMtLjY3bC43OC0uNzdjLjQ1LjI3Ljk4LjQ0IDEuNTUuNDQgMS42NiAwIDMtMS4zNCAzLTMgMC0uNTctLjE3LTEuMDktLjQ0LTEuNTVsLjk4LS45OGMxLjExLjg3IDIuMDEgMS45MSAyLjQ2IDIuNTItMS4wNyAxLjQ4LTMuNjEgNC4wMS02IDQuMDF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXByaXZhdGVcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCI0XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCA4Yy0zLjMxIDAtNiAyLjczLTYgNC42N1M1LjI3IDE1IDggMTVzNi0uNCA2LTIuMzNTMTEuMzEgOCA4IDh6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXB1YmxpY1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMCA1YzAgLjM0LS4wNi42Ny0uMTQuOTkuMDUgMCAuMDkuMDEuMTQuMDEgMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTNDOC45NyAwIDguMDcuNTIgNy41MyAxLjMgOC45OCAxLjkxIDEwIDMuMzMgMTAgNXpNNiA5Yy0zLjMxIDAtNiAyLjczLTYgNC42N1MzLjI3IDE2IDYgMTZzNi0uNCA2LTIuMzNTOS4zMSA5IDYgOXpNMTAgN2MtLjE5IDAtLjM4LjAxLS41Ny4wM2E0LjE0IDQuMTQgMCAwIDEtMS4zNyAxLjM5YzMgLjgzIDUuMjMgMy4zMSA1LjQyIDUuMjggMS40NC0uMzEgMi41Mi0uOTIgMi41Mi0yLjAzQzE2IDkuNzQgMTMuMzEgNyAxMCA3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1zb3J0aW5nXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCAzbDIgMiAxLTEtMy0zLTMgMyAxIDF6TTggMTNsLTItMi0xIDEgMyAzIDMtMy0xLTF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PC9zdmc+XCI7IiwiLyoqXG4qIE11dXJpIHYwLjguMFxuKiBodHRwczovL2dpdGh1Yi5jb20vaGFsdHUvbXV1cmlcbiogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEhhbHR1IE95XG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuKiBodHRwczovL2dpdGh1Yi5jb20vaGFsdHUvbXV1cmkvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuKiBAbGljZW5zZSBNSVRcbipcbiogTXV1cmkgUGFja2VyXG4qIENvcHlyaWdodCAoYykgMjAxNi1wcmVzZW50LCBOaWtsYXMgUsOkbcO2IDxpbnJhbW9AZ21haWwuY29tPlxuKiBAbGljZW5zZSBNSVRcbipcbiogTXV1cmkgVGlja2VyIC8gTXV1cmkgRW1pdHRlciAvIE11dXJpIFF1ZXVlXG4qIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBOaWtsYXMgUsOkbcO2IDxpbnJhbW9AZ21haWwuY29tPlxuKiBAbGljZW5zZSBNSVRcbiovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuTXV1cmkgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgbmFtZXNwYWNlID0gJ011dXJpJztcbiAgdmFyIGdyaWRJbnN0YW5jZXMgPSB7fTtcblxuICB2YXIgYWN0aW9uU3dhcCA9ICdzd2FwJztcbiAgdmFyIGFjdGlvbk1vdmUgPSAnbW92ZSc7XG5cbiAgdmFyIGV2ZW50U3luY2hyb25pemUgPSAnc3luY2hyb25pemUnO1xuICB2YXIgZXZlbnRMYXlvdXRTdGFydCA9ICdsYXlvdXRTdGFydCc7XG4gIHZhciBldmVudExheW91dEVuZCA9ICdsYXlvdXRFbmQnO1xuICB2YXIgZXZlbnRBZGQgPSAnYWRkJztcbiAgdmFyIGV2ZW50UmVtb3ZlID0gJ3JlbW92ZSc7XG4gIHZhciBldmVudFNob3dTdGFydCA9ICdzaG93U3RhcnQnO1xuICB2YXIgZXZlbnRTaG93RW5kID0gJ3Nob3dFbmQnO1xuICB2YXIgZXZlbnRIaWRlU3RhcnQgPSAnaGlkZVN0YXJ0JztcbiAgdmFyIGV2ZW50SGlkZUVuZCA9ICdoaWRlRW5kJztcbiAgdmFyIGV2ZW50RmlsdGVyID0gJ2ZpbHRlcic7XG4gIHZhciBldmVudFNvcnQgPSAnc29ydCc7XG4gIHZhciBldmVudE1vdmUgPSAnbW92ZSc7XG4gIHZhciBldmVudFNlbmQgPSAnc2VuZCc7XG4gIHZhciBldmVudEJlZm9yZVNlbmQgPSAnYmVmb3JlU2VuZCc7XG4gIHZhciBldmVudFJlY2VpdmUgPSAncmVjZWl2ZSc7XG4gIHZhciBldmVudEJlZm9yZVJlY2VpdmUgPSAnYmVmb3JlUmVjZWl2ZSc7XG4gIHZhciBldmVudERyYWdJbml0ID0gJ2RyYWdJbml0JztcbiAgdmFyIGV2ZW50RHJhZ1N0YXJ0ID0gJ2RyYWdTdGFydCc7XG4gIHZhciBldmVudERyYWdNb3ZlID0gJ2RyYWdNb3ZlJztcbiAgdmFyIGV2ZW50RHJhZ1Njcm9sbCA9ICdkcmFnU2Nyb2xsJztcbiAgdmFyIGV2ZW50RHJhZ0VuZCA9ICdkcmFnRW5kJztcbiAgdmFyIGV2ZW50RHJhZ1JlbGVhc2VTdGFydCA9ICdkcmFnUmVsZWFzZVN0YXJ0JztcbiAgdmFyIGV2ZW50RHJhZ1JlbGVhc2VFbmQgPSAnZHJhZ1JlbGVhc2VFbmQnO1xuICB2YXIgZXZlbnREZXN0cm95ID0gJ2Rlc3Ryb3knO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVyIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9jb3VudGVyID0gMDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBsaXN0ZW5lcnMgcXVldWUgYW5kIGNyZWF0ZSBpdCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycykgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XSA9IFtdO1xuXG4gICAgLy8gQWRkIHRoZSBsaXN0ZW5lciB0byB0aGUgcXVldWUuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbGwgZXZlbnQgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhlIHByb3ZpZGVkIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2xpc3RlbmVyXVxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBHZXQgbGlzdGVuZXJzIGFuZCByZXR1cm4gaW1tZWRpYXRlbHkgaWYgbm9uZSBpcyBmb3VuZC5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBJZiBubyBzcGVjaWZpYyBsaXN0ZW5lciBpcyBwcm92aWRlZCByZW1vdmUgYWxsIGxpc3RlbmVycy5cbiAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgIHZhciBpID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAobGlzdGVuZXIgPT09IGxpc3RlbmVyc1tpXSkgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRW1pdCBhbGwgbGlzdGVuZXJzIGluIGEgc3BlY2lmaWVkIGV2ZW50IHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7Kn0gW2FyZzFdXG4gICAqIEBwYXJhbSB7Kn0gW2FyZzJdXG4gICAqIEBwYXJhbSB7Kn0gW2FyZzNdXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50LCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBldmVudCBsaXN0ZW5lcnMgYW5kIHF1aXQgZWFybHkgaWYgdGhlcmUncyBubyBsaXN0ZW5lcnMuXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHFMZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gICAgdmFyIGFMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICB2YXIgaTtcblxuICAgIC8vIEFkZCB0aGUgY3VycmVudCBsaXN0ZW5lcnMgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGJlZm9yZSB3ZSBwcm9jZXNzIHRoZW0uXG4gICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gZ3VhcmFudGVlIHRoYXQgYWxsIG9mIHRoZSBsaXN0ZW5lcnMgYXJlIGNhbGxlZCBpblxuICAgIC8vIGNvcnJlY3Qgb3JkZXIgZXZlbiBpZiBuZXcgZXZlbnQgbGlzdGVuZXJzIGFyZSByZW1vdmVkL2FkZGVkIGR1cmluZ1xuICAgIC8vIHByb2Nlc3NpbmcgYW5kL29yIGV2ZW50cyBhcmUgZW1pdHRlZCBkdXJpbmcgcHJvY2Vzc2luZy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBxdWV1ZS5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gSW5jcmVtZW50IHF1ZXVlIGNvdW50ZXIuIFRoaXMgaXMgbmVlZGVkIGZvciB0aGUgc2NlbmFyaW9zIHdoZXJlIGVtaXQgaXNcbiAgICAvLyB0cmlnZ2VyZWQgd2hpbGUgdGhlIHF1ZXVlIGlzIGFscmVhZHkgcHJvY2Vzc2luZy4gV2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mXG4gICAgLy8gaG93IG1hbnkgXCJxdWV1ZSBwcm9jZXNzb3JzXCIgdGhlcmUgYXJlIGFjdGl2ZSBzbyB0aGF0IHdlIGNhbiBzYWZlbHkgcmVzZXRcbiAgICAvLyB0aGUgcXVldWUgaW4gdGhlIGVuZCB3aGVuIHRoZSBsYXN0IHF1ZXVlIHByb2Nlc3NvciBpcyBmaW5pc2hlZC5cbiAgICArK3RoaXMuX2NvdW50ZXI7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBxdWV1ZSAodGhlIHNwZWNpZmljIHBhcnQgb2YgaXQgZm9yIHRoaXMgZW1pdCkuXG4gICAgZm9yIChpID0gcUxlbmd0aCwgcUxlbmd0aCA9IHF1ZXVlLmxlbmd0aDsgaSA8IHFMZW5ndGg7IGkrKykge1xuICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICBhTGVuZ3RoID09PSAwID8gcXVldWVbaV0oKSA6XG4gICAgICBhTGVuZ3RoID09PSAxID8gcXVldWVbaV0oYXJnMSkgOlxuICAgICAgYUxlbmd0aCA9PT0gMiA/IHF1ZXVlW2ldKGFyZzEsIGFyZzIpIDpcbiAgICAgICAgICAgICAgICAgICAgICBxdWV1ZVtpXShhcmcxLCBhcmcyLCBhcmczKTtcblxuICAgICAgLy8gU3RvcCBwcm9jZXNzaW5nIGlmIHRoZSBlbWl0dGVyIGlzIGRlc3Ryb3llZC5cbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRGVjcmVtZW50IHF1ZXVlIHByb2Nlc3MgY291bnRlci5cbiAgICAtLXRoaXMuX2NvdW50ZXI7XG5cbiAgICAvLyBSZXNldCB0aGUgcXVldWUgaWYgdGhlcmUgYXJlIG5vIG1vcmUgcXVldWUgcHJvY2Vzc2VzIHJ1bm5pbmcuXG4gICAgaWYgKCF0aGlzLl9jb3VudGVyKSBxdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgZW1pdHRlciBpbnN0YW5jZS4gQmFzaWNhbGx5IGp1c3QgcmVtb3ZlcyBhbGwgYm91bmQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICAvLyBGbGFnIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICAvLyBSZXNldCBxdWV1ZSAoaWYgcXVldWUgaXMgY3VycmVudGx5IHByb2Nlc3NpbmcgdGhpcyB3aWxsIGFsc28gc3RvcCB0aGF0KS5cbiAgICB0aGlzLl9xdWV1ZS5sZW5ndGggPSB0aGlzLl9jb3VudGVyID0gMDtcblxuICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzLlxuICAgIGZvciAoZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICBpZiAoZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICBldmVudHNbZXZlbnRdLmxlbmd0aCA9IDA7XG4gICAgICAgIGV2ZW50c1tldmVudF0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gU2V0IHVwIHRoZSBkZWZhdWx0IGV4cG9ydCB2YWx1ZXMuXG4gIHZhciB0cmFuc2Zvcm1TdHlsZSA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xuXG4gIC8vIEZpbmQgdGhlIHN1cHBvcnRlZCB0cmFuc2Zvcm0gcHJvcCBhbmQgc3R5bGUgbmFtZXMuXG4gIHZhciBkb2NFbGVtU3R5bGUgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuICB2YXIgc3R5bGUgPSAndHJhbnNmb3JtJztcbiAgdmFyIHN0eWxlQ2FwID0gJ1RyYW5zZm9ybSc7XG4gIHZhciBmb3VuZCA9IGZhbHNlO1xuICBbJycsICdXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnXS5mb3JFYWNoKGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuICAgIHZhciBwcm9wTmFtZSA9IHByZWZpeCA/IHByZWZpeCArIHN0eWxlQ2FwIDogc3R5bGU7XG4gICAgaWYgKGRvY0VsZW1TdHlsZVtwcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlZml4ID0gcHJlZml4LnRvTG93ZXJDYXNlKCk7XG4gICAgICB0cmFuc2Zvcm1TdHlsZSA9IHByZWZpeCA/ICctJyArIHByZWZpeCArICctJyArIHN0eWxlIDogc3R5bGU7XG4gICAgICB0cmFuc2Zvcm1Qcm9wID0gcHJvcE5hbWU7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICB2YXIgc3R5bGVzQ2FjaGUgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBXZWFrTWFwKCkgOiBudWxsO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiBhbiBlbGVtZW50J3Mgc3R5bGUgcHJvcGVydHkgYXMgYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICAgIHZhciBzdHlsZXMgPSBzdHlsZXNDYWNoZSAmJiBzdHlsZXNDYWNoZS5nZXQoZWxlbWVudCk7XG4gICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICAgICAgaWYgKHN0eWxlc0NhY2hlKSBzdHlsZXNDYWNoZS5zZXQoZWxlbWVudCwgc3R5bGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlID09PSAndHJhbnNmb3JtJyA/IHRyYW5zZm9ybVN0eWxlIDogc3R5bGUpO1xuICB9XG5cbiAgdmFyIHN0eWxlTmFtZVJlZ0V4ID0gLyhbQS1aXSkvZztcblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBhIGNhbWVsIGNhc2Ugc3R5bGUgcHJvcGVydHkgdG8ga2ViYWIgY2FzZSBzdHlsZSBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3R5bGVOYW1lKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShzdHlsZU5hbWVSZWdFeCwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICB2YXIgc3RyRnVuY3Rpb24gPSAnZnVuY3Rpb24nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gc3RyRnVuY3Rpb247XG4gIH1cblxuICB2YXIgdHJhbnNmb3JtU3R5bGUkMSA9ICd0cmFuc2Zvcm0nO1xuXG4gIC8qKlxuICAgKiBTZXQgaW5saW5lIHN0eWxlcyB0byBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcbiAgICovXG4gIGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlcykge1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wID09PSB0cmFuc2Zvcm1TdHlsZSQxID8gdHJhbnNmb3JtUHJvcCA6IHByb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVtIGFuaW1hdGlvbiBoYW5kbGVyIHBvd2VyZWQgYnkgV2ViIEFuaW1hdGlvbnMgQVBJLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbUFuaW1hdGUoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuX3Byb3BzID0gW107XG4gICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgdGhpcy5fa2V5ZnJhbWVzID0gW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fb25GaW5pc2ggPSB0aGlzLl9vbkZpbmlzaC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGluc3RhbmNlJ3MgYW5pbWF0aW9uLiBBdXRvbWF0aWNhbGx5IHN0b3BzIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzXG4gICAqIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNGcm9tXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1RvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmVhc2luZz0nZWFzZSddXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24ocHJvcHNGcm9tLCBwcm9wc1RvLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uO1xuICAgIHZhciBjdXJyZW50UHJvcHMgPSB0aGlzLl9wcm9wcztcbiAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgY2FuY2VsQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGV4aXN0aW5nIGFuaW1hdGlvbiBydW5uaW5nLCBsZXQncyBjaGVjayBpZiBpdCBuZWVkcyB0byBiZVxuICAgIC8vIGNhbmNlbGxlZCBvciBpZiBpdCBjYW4gY29udGludWUgcnVubmluZy5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICB2YXIgcHJvcENvdW50ID0gMDtcbiAgICAgIHZhciBwcm9wSW5kZXg7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSByZXF1ZXN0ZWQgYW5pbWF0aW9uIHRhcmdldCBwcm9wcyBhbmQgdmFsdWVzIG1hdGNoIHdpdGggdGhlXG4gICAgICAvLyBjdXJyZW50IHByb3BzIGFuZCB2YWx1ZXMuXG4gICAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wc1RvKSB7XG4gICAgICAgICsrcHJvcENvdW50O1xuICAgICAgICBwcm9wSW5kZXggPSBjdXJyZW50UHJvcHMuaW5kZXhPZihwcm9wTmFtZSk7XG4gICAgICAgIGlmIChwcm9wSW5kZXggPT09IC0xIHx8IHByb3BzVG9bcHJvcE5hbWVdICE9PSBjdXJyZW50VmFsdWVzW3Byb3BJbmRleF0pIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB0YXJnZXQgcHJvcHMgY291bnQgbWF0Y2hlcyBjdXJyZW50IHByb3BzIGNvdW50LiBUaGlzIGlzXG4gICAgICAvLyBuZWVkZWQgZm9yIHRoZSBlZGdlIGNhc2Ugc2NlbmFyaW8gd2hlcmUgdGFyZ2V0IHByb3BzIGNvbnRhaW4gdGhlIHNhbWVcbiAgICAgIC8vIHN0eWxlcyBhcyBjdXJyZW50IHByb3BzLCBidXQgdGhlIGN1cnJlbnQgcHJvcHMgaGF2ZSBzb21lIGFkZGl0aW9uYWxcbiAgICAgIC8vIHByb3BzLlxuICAgICAgaWYgKCFjYW5jZWxBbmltYXRpb24gJiYgcHJvcENvdW50ICE9PSBjdXJyZW50UHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIGFuaW1hdGlvbiAoaWYgcmVxdWlyZWQpLlxuICAgIGlmIChjYW5jZWxBbmltYXRpb24pIGFuaW1hdGlvbi5jYW5jZWwoKTtcblxuICAgIC8vIFN0b3JlIGFuaW1hdGlvbiBjYWxsYmFjay5cbiAgICB0aGlzLl9jYWxsYmFjayA9IGlzRnVuY3Rpb24ob3B0cy5vbkZpbmlzaCkgPyBvcHRzLm9uRmluaXNoIDogbnVsbDtcblxuICAgIC8vIElmIHdlIGhhdmUgYSBydW5uaW5nIGFuaW1hdGlvbiB0aGF0IGRvZXMgbm90IG5lZWQgdG8gYmUgY2FuY2VsbGVkLCBsZXQnc1xuICAgIC8vIGNhbGwgaXQgYSBkYXkgaGVyZSBhbmQgbGV0IGl0IHJ1bi5cbiAgICBpZiAoYW5pbWF0aW9uICYmICFjYW5jZWxBbmltYXRpb24pIHJldHVybjtcblxuICAgIC8vIFN0b3JlIHRhcmdldCBwcm9wcyBhbmQgdmFsdWVzIHRvIGluc3RhbmNlLlxuICAgIGN1cnJlbnRQcm9wcy5sZW5ndGggPSBjdXJyZW50VmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBwcm9wc1RvKSB7XG4gICAgICBjdXJyZW50UHJvcHMucHVzaChwcm9wTmFtZSk7XG4gICAgICBjdXJyZW50VmFsdWVzLnB1c2gocHJvcHNUb1twcm9wTmFtZV0pO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBrZXlmcmFtZXMuXG4gICAgdmFyIGFuaW1LZXlmcmFtZXMgPSB0aGlzLl9rZXlmcmFtZXM7XG4gICAgYW5pbUtleWZyYW1lc1swXSA9IHByb3BzRnJvbTtcbiAgICBhbmltS2V5ZnJhbWVzWzFdID0gcHJvcHNUbztcblxuICAgIC8vIFNldCB1cCBvcHRpb25zLlxuICAgIHZhciBhbmltT3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gICAgYW5pbU9wdGlvbnMuZHVyYXRpb24gPSBvcHRzLmR1cmF0aW9uIHx8IDMwMDtcbiAgICBhbmltT3B0aW9ucy5lYXNpbmcgPSBvcHRzLmVhc2luZyB8fCAnZWFzZSc7XG5cbiAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIGFuaW1hdGlvbiA9IGVsZW1lbnQuYW5pbWF0ZShhbmltS2V5ZnJhbWVzLCBhbmltT3B0aW9ucyk7XG4gICAgYW5pbWF0aW9uLm9uZmluaXNoID0gdGhpcy5fb25GaW5pc2g7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXG4gICAgLy8gU2V0IHRoZSBlbmQgc3R5bGVzLiBUaGlzIG1ha2VzIHN1cmUgdGhhdCB0aGUgZWxlbWVudCBzdGF5cyBhdCB0aGUgZW5kXG4gICAgLy8gdmFsdWVzIGFmdGVyIGFuaW1hdGlvbiBpcyBmaW5pc2hlZC5cbiAgICBzZXRTdHlsZXMoZWxlbWVudCwgcHJvcHNUbyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgaW5zdGFuY2UncyBjdXJyZW50IGFuaW1hdGlvbiBpZiBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdHlsZXNdXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKHN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5fYW5pbWF0aW9uKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX3Byb3BzO1xuICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHZhciBwcm9wTmFtZTtcbiAgICB2YXIgcHJvcFZhbHVlO1xuICAgIHZhciBpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIChpZiBub3QgcHJvdmlkZWQpIGFuZCBzZXQgc3R5bGVzLlxuICAgIGlmICghc3R5bGVzKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY3VycmVudFByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb3BOYW1lID0gY3VycmVudFByb3BzW2ldO1xuICAgICAgICBwcm9wVmFsdWUgPSBnZXRTdHlsZShlbGVtZW50LCBnZXRTdHlsZU5hbWUocHJvcE5hbWUpKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wTmFtZSA9PT0gJ3RyYW5zZm9ybScgPyB0cmFuc2Zvcm1Qcm9wIDogcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKTtcbiAgICB9XG5cbiAgICAvLyAgQ2FuY2VsIGFuaW1hdGlvbi5cbiAgICB0aGlzLl9hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgLy8gUmVzZXQgY3VycmVudCBwcm9wcyBhbmQgdmFsdWVzLlxuICAgIGN1cnJlbnRQcm9wcy5sZW5ndGggPSBjdXJyZW50VmFsdWVzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBpdGVtIGlzIGJlaW5nIGFuaW1hdGVkIGN1cnJlbnRseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuaXNBbmltYXRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl9hbmltYXRpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fb3B0aW9ucyA9IHRoaXMuX2tleWZyYW1lcyA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBlbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLl9vbkZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrO1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLl9wcm9wcy5sZW5ndGggPSB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICB9O1xuXG4gIHZhciB2ZW5kb3JQcmVmaXhlcyA9IFsnJywgJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycsICdXZWJraXQnLCAnTW96JywgJ01TJywgJ08nXTtcblxuICAvKipcbiAgICogR2V0IHByZWZpeGVkIENTUyBwcm9wZXJ0eSBuYW1lIHdoZW4gZ2l2ZW4gYSBub24tcHJlZml4ZWQgQ1NTIHByb3BlcnR5IG5hbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtU3R5bGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gICAqIEByZXR1cm5zIHshU3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UHJlZml4ZWRQcm9wTmFtZShlbGVtU3R5bGUsIHByb3BOYW1lKSB7XG4gICAgdmFyIGNhbWVsUHJvcE5hbWUgPSBwcm9wTmFtZVswXS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwcmVmaXg7XG4gICAgdmFyIHByZWZpeGVkUHJvcE5hbWU7XG5cbiAgICB3aGlsZSAoaSA8IHZlbmRvclByZWZpeGVzLmxlbmd0aCkge1xuICAgICAgcHJlZml4ID0gdmVuZG9yUHJlZml4ZXNbaV07XG4gICAgICBwcmVmaXhlZFByb3BOYW1lID0gcHJlZml4ID8gcHJlZml4ICsgY2FtZWxQcm9wTmFtZSA6IHByb3BOYW1lO1xuICAgICAgaWYgKHByZWZpeGVkUHJvcE5hbWUgaW4gZWxlbVN0eWxlKSByZXR1cm4gcHJlZml4ZWRQcm9wTmFtZTtcbiAgICAgICsraTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBkdCA9IDEwMDAgLyA2MDtcblxuICB2YXIgcmFmID0gKFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjayhkdCk7XG4gICAgICB9LCBkdCk7XG4gICAgfVxuICApLmJpbmQod2luZG93KTtcblxuICAvLyBEZXRlY3Qgc3VwcG9ydCBmb3IgcGFzc2l2ZSBldmVudHM6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kI2ZlYXR1cmUtZGV0ZWN0aW9uXG4gIHZhciBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgcGFzc2l2ZU9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNQYXNzaXZlRXZlbnRzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlT3B0cyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZU9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIC8vIERyYWdnZXIgZXZlbnRzLlxuICB2YXIgZXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnc3RhcnQnLFxuICAgIG1vdmU6ICdtb3ZlJyxcbiAgICBlbmQ6ICdlbmQnLFxuICAgIGNhbmNlbDogJ2NhbmNlbCdcbiAgfTtcblxuICB2YXIgaGFzVG91Y2hFdmVudHMgPSAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LlRvdWNoRXZlbnQpO1xuICB2YXIgaGFzUG9pbnRlckV2ZW50cyA9ICEhd2luZG93LlBvaW50ZXJFdmVudDtcbiAgdmFyIGhhc01zUG9pbnRlckV2ZW50cyA9ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkO1xuICB2YXIgaXNBbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgbGlzdGVuZXJPcHRpb25zID0gaXNQYXNzaXZlRXZlbnRzU3VwcG9ydGVkID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcblxuICB2YXIgdGFQcm9wID0gJ3RvdWNoQWN0aW9uJztcbiAgdmFyIHRhUHJvcFByZWZpeGVkID0gZ2V0UHJlZml4ZWRQcm9wTmFtZSh3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLCB0YVByb3ApO1xuICB2YXIgdGFEZWZhdWx0VmFsdWUgPSAnYXV0byc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRHJhZ2dlciBpbnN0YW5jZSBmb3IgYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2Nzc1Byb3BzXVxuICAgKi9cbiAgZnVuY3Rpb24gRHJhZ2dlcihlbGVtZW50LCBjc3NQcm9wcykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fY3NzUHJvcHMgPSB7fTtcbiAgICB0aGlzLl90b3VjaEFjdGlvbiA9ICcnO1xuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xuICAgIHRoaXMuX3N0YXJ0WCA9IDA7XG4gICAgdGhpcy5fc3RhcnRZID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFkgPSAwO1xuXG4gICAgdGhpcy5fcHJlU3RhcnRDaGVjayA9IHRoaXMuX3ByZVN0YXJ0Q2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUgPSB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblN0YXJ0ID0gdGhpcy5fb25TdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTW92ZSA9IHRoaXMuX29uTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2FuY2VsID0gdGhpcy5fb25DYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkVuZCA9IHRoaXMuX29uRW5kLmJpbmQodGhpcyk7XG5cbiAgICAvLyBBcHBseSBpbml0aWFsIGNzcyBwcm9wcy5cbiAgICB0aGlzLnNldENzc1Byb3BzKGNzc1Byb3BzKTtcblxuICAgIC8vIElmIHRvdWNoIGFjdGlvbiB3YXMgbm90IHByb3ZpZGVkIHdpdGggaW5pdGlhbCBjc3MgcHJvcHMgbGV0J3MgYXNzdW1lIGl0J3NcbiAgICAvLyBhdXRvLlxuICAgIGlmICghdGhpcy5fdG91Y2hBY3Rpb24pIHtcbiAgICAgIHRoaXMuc2V0VG91Y2hBY3Rpb24odGFEZWZhdWx0VmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgbmF0aXZlIGxpbmsvaW1hZ2UgZHJhZ2dpbmcgZm9yIHRoZSBpdGVtIGFuZCBpdCdzIGFuY2VzdG9ycy5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG5cbiAgICAvLyBMaXN0ZW4gdG8gc3RhcnQgZXZlbnQuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX2V2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcblxuICAgIC8vIElmIHdlIGhhdmUgdG91Y2ggZXZlbnRzLCBidXQgbm8gcG9pbnRlciBldmVudHMgd2UgbmVlZCB0byBhbHNvIGxpc3RlbiBmb3JcbiAgICAvLyBtb3VzZSBldmVudHMgaW4gYWRkaXRpb24gdG8gdG91Y2ggZXZlbnRzIGZvciBkZXZpY2VzIHdoaWNoIHN1cHBvcnQgYm90aFxuICAgIC8vIG1vdXNlIGFuZCB0b3VjaCBpbnRlcmFjdGlvbi5cbiAgICBpZiAoaGFzVG91Y2hFdmVudHMgJiYgIWhhc1BvaW50ZXJFdmVudHMgJiYgIWhhc01zUG9pbnRlckV2ZW50cykge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX21vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90ZWN0ZWQgcHJvcGVydGllc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBEcmFnZ2VyLl9wb2ludGVyRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAncG9pbnRlcmRvd24nLFxuICAgIG1vdmU6ICdwb2ludGVybW92ZScsXG4gICAgY2FuY2VsOiAncG9pbnRlcmNhbmNlbCcsXG4gICAgZW5kOiAncG9pbnRlcnVwJ1xuICB9O1xuXG4gIERyYWdnZXIuX21zUG9pbnRlckV2ZW50cyA9IHtcbiAgICBzdGFydDogJ01TUG9pbnRlckRvd24nLFxuICAgIG1vdmU6ICdNU1BvaW50ZXJNb3ZlJyxcbiAgICBjYW5jZWw6ICdNU1BvaW50ZXJDYW5jZWwnLFxuICAgIGVuZDogJ01TUG9pbnRlclVwJ1xuICB9O1xuXG4gIERyYWdnZXIuX3RvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgY2FuY2VsOiAndG91Y2hjYW5jZWwnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9O1xuXG4gIERyYWdnZXIuX21vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBjYW5jZWw6ICcnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fZXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChoYXNQb2ludGVyRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fcG9pbnRlckV2ZW50cztcbiAgICBpZiAoaGFzTXNQb2ludGVyRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fbXNQb2ludGVyRXZlbnRzO1xuICAgIGlmIChoYXNUb3VjaEV2ZW50cykgcmV0dXJuIERyYWdnZXIuX3RvdWNoRXZlbnRzO1xuICAgIHJldHVybiBEcmFnZ2VyLl9tb3VzZUV2ZW50cztcbiAgfSkoKTtcblxuICBEcmFnZ2VyLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuICBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMgPSBbXTtcblxuICAvKipcbiAgICogUHJvdGVjdGVkIHN0YXRpYyBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCAmJiBlLmNhbmNlbGFibGUgIT09IGZhbHNlKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgRHJhZ2dlci5fYWN0aXZhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIGluZGV4ID0gRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA+IC0xKSByZXR1cm47XG5cbiAgICBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMubW92ZSwgaW5zdGFuY2UuX29uTW92ZSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMuY2FuY2VsLCBpbnN0YW5jZS5fb25DYW5jZWwpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub24oZXZlbnRzLmVuZCwgaW5zdGFuY2UuX29uRW5kKTtcblxuICAgIGlmIChEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBEcmFnZ2VyLl9iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIERyYWdnZXIuX2RlYWN0aXZhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIGluZGV4ID0gRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5tb3ZlLCBpbnN0YW5jZS5fb25Nb3ZlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9mZihldmVudHMuY2FuY2VsLCBpbnN0YW5jZS5fb25DYW5jZWwpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5lbmQsIGluc3RhbmNlLl9vbkVuZCk7XG5cbiAgICBpZiAoIURyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5sZW5ndGgpIHtcbiAgICAgIERyYWdnZXIuX3VuYmluZExpc3RlbmVycygpO1xuICAgIH1cbiAgfTtcblxuICBEcmFnZ2VyLl9iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZSwgRHJhZ2dlci5fb25Nb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5lbmQsIERyYWdnZXIuX29uRW5kLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGV2ZW50cy5jYW5jZWwgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLmNhbmNlbCwgRHJhZ2dlci5fb25DYW5jZWwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gIH07XG5cbiAgRHJhZ2dlci5fdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZSwgRHJhZ2dlci5fb25Nb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5lbmQsIERyYWdnZXIuX29uRW5kLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGV2ZW50cy5jYW5jZWwgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLmNhbmNlbCwgRHJhZ2dlci5fb25DYW5jZWwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gIH07XG5cbiAgRHJhZ2dlci5fZ2V0RXZlbnRQb2ludGVySWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIElmIHdlIGhhdmUgcG9pbnRlciBpZCBhdmFpbGFibGUgbGV0J3MgdXNlIGl0LlxuICAgIGlmICh0eXBlb2YgZXZlbnQucG9pbnRlcklkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGV2ZW50LnBvaW50ZXJJZDtcbiAgICB9XG5cbiAgICAvLyBGb3IgdG91Y2ggZXZlbnRzIGxldCdzIGdldCB0aGUgZmlyc3QgY2hhbmdlZCB0b3VjaCdzIGlkZW50aWZpZXIuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyIDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgbW91c2Uvb3RoZXIgZXZlbnRzIGxldCdzIHByb3ZpZGUgYSBzdGF0aWMgaWQuXG4gICAgcmV0dXJuIDE7XG4gIH07XG5cbiAgRHJhZ2dlci5fZ2V0VG91Y2hCeUlkID0gZnVuY3Rpb24oZXZlbnQsIGlkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIHBvaW50ZXIgZXZlbnQgcmV0dXJuIHRoZSB3aG9sZSBldmVudCBpZiB0aGVyZSdzIGEgbWF0Y2gsIGFuZFxuICAgIC8vIG51bGwgb3RoZXJ3aXNlLlxuICAgIGlmICh0eXBlb2YgZXZlbnQucG9pbnRlcklkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGV2ZW50LnBvaW50ZXJJZCA9PT0gaWQgPyBldmVudCA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yIHRvdWNoIGV2ZW50cyBsZXQncyBjaGVjayBpZiB0aGVyZSdzIGEgY2hhbmdlZCB0b3VjaCBvYmplY3QgdGhhdCBtYXRjaGVzXG4gICAgLy8gdGhlIHBvaW50ZXJJZCBpbiB3aGljaCBjYXNlIHJldHVybiB0aGUgdG91Y2ggb2JqZWN0LlxuICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciBtb3VzZS9vdGhlciBldmVudHMgbGV0J3MgYXNzdW1lIHRoZXJlJ3Mgb25seSBvbmUgcG9pbnRlciBhbmQganVzdFxuICAgIC8vIHJldHVybiB0aGUgZXZlbnQuXG4gICAgcmV0dXJuIGV2ZW50O1xuICB9O1xuXG4gIERyYWdnZXIuX29uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLmVtaXQoZXZlbnRzLm1vdmUsIGUpO1xuICB9O1xuXG4gIERyYWdnZXIuX29uQ2FuY2VsID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMuY2FuY2VsLCBlKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9vbkVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLmVtaXQoZXZlbnRzLmVuZCwgZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogUmVzZXQgY3VycmVudCBkcmFnIG9wZXJhdGlvbiAoaWYgYW55KS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHRoaXMuX3BvaW50ZXJJZCA9IG51bGw7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gMDtcbiAgICB0aGlzLl9zdGFydFggPSAwO1xuICAgIHRoaXMuX3N0YXJ0WSA9IDA7XG4gICAgdGhpcy5fY3VycmVudFggPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gMDtcbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LFxuICAgICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLFxuICAgICAgbGlzdGVuZXJPcHRpb25zXG4gICAgKTtcblxuICAgIERyYWdnZXIuX2RlYWN0aXZhdGVJbnN0YW5jZSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY3VzdG9tIGRyYWdnZXIgZXZlbnQgZnJvbSBhIHJhdyBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqIEByZXR1cm5zIHtEcmFnZ2VyRXZlbnR9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fY3JlYXRlRXZlbnQgPSBmdW5jdGlvbih0eXBlLCBlKSB7XG4gICAgdmFyIHRvdWNoID0gdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpO1xuICAgIHJldHVybiB7XG4gICAgICAvLyBIYW1tZXIuanMgY29tcGF0aWJpbGl0eSBpbnRlcmZhY2UuXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgc3JjRXZlbnQ6IGUsXG4gICAgICBkaXN0YW5jZTogdGhpcy5nZXREaXN0YW5jZSgpLFxuICAgICAgZGVsdGFYOiB0aGlzLmdldERlbHRhWCgpLFxuICAgICAgZGVsdGFZOiB0aGlzLmdldERlbHRhWSgpLFxuICAgICAgZGVsdGFUaW1lOiB0eXBlID09PSBldmVudHMuc3RhcnQgPyAwIDogdGhpcy5nZXREZWx0YVRpbWUoKSxcbiAgICAgIGlzRmlyc3Q6IHR5cGUgPT09IGV2ZW50cy5zdGFydCxcbiAgICAgIGlzRmluYWw6IHR5cGUgPT09IGV2ZW50cy5lbmQgfHwgdHlwZSA9PT0gZXZlbnRzLmNhbmNlbCxcbiAgICAgIC8vIFBhcnRpYWwgVG91Y2ggQVBJIGludGVyZmFjZS5cbiAgICAgIGlkZW50aWZpZXI6IHRoaXMuX3BvaW50ZXJJZCxcbiAgICAgIHNjcmVlblg6IHRvdWNoLnNjcmVlblgsXG4gICAgICBzY3JlZW5ZOiB0b3VjaC5zY3JlZW5ZLFxuICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXG4gICAgICBwYWdlWDogdG91Y2gucGFnZVgsXG4gICAgICBwYWdlWTogdG91Y2gucGFnZVksXG4gICAgICB0YXJnZXQ6IHRvdWNoLnRhcmdldFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtaXQgYSByYXcgZXZlbnQgYXMgZHJhZ2dlciBldmVudCBpbnRlcm5hbGx5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9lbWl0ID0gZnVuY3Rpb24odHlwZSwgZSkge1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCh0eXBlLCB0aGlzLl9jcmVhdGVFdmVudCh0eXBlLCBlKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIHRoZSBwcm92aWRlZCBldmVudCBpcyBhIFBvaW50ZXJFdmVudCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiBpdCBpZiBpdCBoYXNcbiAgICogdGhlIHNhbWUgcG9pbnRlcklkIGFzIHRoZSBpbnN0YW5jZS4gSWYgdGhlIHByb3ZpZGVkIGV2ZW50IGlzIGEgVG91Y2hFdmVudFxuICAgKiB0aGlzIG1ldGhvZCB3aWxsIHRyeSB0byBsb29rIGZvciBhIFRvdWNoIGluc3RhbmNlIGluIHRoZSBjaGFuZ2VkVG91Y2hlcyB0aGF0XG4gICAqIGhhcyBhbiBpZGVudGlmaWVyIG1hdGNoaW5nIHRoaXMgaW5zdGFuY2UncyBwb2ludGVySWQuIElmIHRoZSBwcm92aWRlZCBldmVudFxuICAgKiBpcyBhIE1vdXNlRXZlbnQgKG9yIGp1c3QgYW55IG90aGVyIGV2ZW50IHRoYW4gUG9pbnRlckV2ZW50IG9yIFRvdWNoRXZlbnQpXG4gICAqIGl0IHdpbGwgYmUgcmV0dXJuZWQgaW1tZWRpYXRlbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX1cbiAgICogQHJldHVybnMgez8oVG91Y2h8UG9pbnRlckV2ZW50fE1vdXNlRXZlbnQpfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2dldFRyYWNrZWRUb3VjaCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5fcG9pbnRlcklkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERyYWdnZXIuX2dldFRvdWNoQnlJZChlLCB0aGlzLl9wb2ludGVySWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQSBwcmUtaGFuZGxlciBmb3Igc3RhcnQgZXZlbnQgdGhhdCBjaGVja3MgaWYgd2UgY2FuIHN0YXJ0IGRyYWdnaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9wcmVTdGFydENoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIG5vdCBiZWluZyBkcmFnZ2VkIGN1cnJlbnRseS5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKCkpIHJldHVybjtcblxuICAgIC8vIFNwZWNpYWwgY2FuY2VsYWJsZSBjaGVjayBmb3IgQW5kcm9pZCB0byBwcmV2ZW50IGRyYWcgcHJvY2VkdXJlIGZyb21cbiAgICAvLyBzdGFydGluZyBpZiBuYXRpdmUgc2Nyb2xsaW5nIGlzIGluIHByb2dyZXNzLiBQYXJ0IDEuXG4gICAgaWYgKGlzQW5kcm9pZCAmJiBlLmNhbmNlbGFibGUgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAvLyBNYWtlIHN1cmUgbGVmdCBidXR0b24gaXMgcHJlc3NlZCBvbiBtb3VzZS5cbiAgICBpZiAoZS5idXR0b24pIHJldHVybjtcblxuICAgIC8vIEdldCAoYW5kIHNldCkgcG9pbnRlciBpZC5cbiAgICB0aGlzLl9wb2ludGVySWQgPSBEcmFnZ2VyLl9nZXRFdmVudFBvaW50ZXJJZChlKTtcbiAgICBpZiAodGhpcy5fcG9pbnRlcklkID09PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyBTdG9yZSB0aGUgc3RhcnQgZXZlbnQgYW5kIHRyaWdnZXIgc3RhcnQgKGFzeW5jIG9yIHN5bmMpLiBQb2ludGVyIGV2ZW50c1xuICAgIC8vIGFyZSBlbWl0dGVkIGJlZm9yZSB0b3VjaCBldmVudHMgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYm90aCBvZiB0aGVtLiBBbmRcbiAgICAvLyBpZiB5b3UgdHJ5IHRvIG1vdmUgYW4gZWxlbWVudCBiZWZvcmUgYHRvdWNoc3RhcnRgIGlzIGVtaXR0ZWQgdGhlIHBvaW50ZXJcbiAgICAvLyBldmVudHMgZm9yIHRoYXQgZWxlbWVudCB3aWxsIGJlIGNhbmNlbGVkLiBUaGUgZml4IGlzIHRvIGRlbGF5IHRoZSBlbWl0dGVkXG4gICAgLy8gcG9pbnRlciBldmVudHMgaW4gc3VjaCBhIHNjZW5hcmlvIGJ5IG9uZSBmcmFtZSBzbyB0aGF0IGB0b3VjaHN0YXJ0YCBoYXNcbiAgICAvLyB0aW1lIHRvIGJlIGVtaXR0ZWQgYmVmb3JlIHRoZSBlbGVtZW50IGlzIChwb3RlbnRpYWxseSkgbW92ZWQuXG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IGU7XG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzICYmIChoYXNQb2ludGVyRXZlbnRzIHx8IGhhc01zUG9pbnRlckV2ZW50cykpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FuY2VsYWJsZSBjaGVjayBmb3IgQW5kcm9pZCB0byBwcmV2ZW50IGRyYWcgcHJvY2VkdXJlIGZyb21cbiAgICAgIC8vIHN0YXJ0aW5nIGlmIG5hdGl2ZSBzY3JvbGxpbmcgaXMgaW4gcHJvZ3Jlc3MuIFBhcnQgMi5cbiAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LFxuICAgICAgICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSxcbiAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJhZih0aGlzLl9vblN0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25TdGFydCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWJvcnQgc3RhcnQgZXZlbnQgaWYgaXQgdHVybnMgb3V0IHRvIGJlIG5vbi1jYW5jZWxhYmxlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9hYm9ydE5vbkNhbmNlbGFibGUgPSBmdW5jdGlvbihlKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUsXG4gICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuX3N0YXJ0RXZlbnQgJiYgZS5jYW5jZWxhYmxlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIGRyYWcgcHJvY2VkdXJlIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vblN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9zdGFydEV2ZW50O1xuICAgIGlmICghZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuXG4gICAgLy8gU2V0IHVwIGluaXQgZGF0YSBhbmQgZW1pdCBzdGFydCBldmVudC5cbiAgICB0aGlzLl9zdGFydFggPSB0aGlzLl9jdXJyZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy5fc3RhcnRZID0gdGhpcy5fY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fZW1pdChldmVudHMuc3RhcnQsIGUpO1xuICAgIERyYWdnZXIuX2FjdGl2YXRlSW5zdGFuY2UodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIG1vdmUgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY3VycmVudFggPSB0b3VjaC5jbGllbnRYO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5tb3ZlLCBlKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgbW92ZSBjYW5jZWwgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uQ2FuY2VsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICghdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpKSByZXR1cm47XG5cbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5jYW5jZWwsIGUpO1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIGVuZCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25FbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLl9nZXRUcmFja2VkVG91Y2goZSkpIHJldHVybjtcblxuICAgIHRoaXMuX2VtaXQoZXZlbnRzLmVuZCwgZSk7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgYmVpbmcgZHJhZ2dlZCBhdCB0aGUgbW9tZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRlcklkICE9PSBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgZWxlbWVudCdzIHRvdWNoLWFjdGlvbiBDU1MgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuc2V0VG91Y2hBY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIFN0b3JlIHVubW9kaWZpZWQgdG91Y2ggYWN0aW9uIHZhbHVlICh3ZSB0cnVzdCB1c2VyIGlucHV0IGhlcmUpLlxuICAgIHRoaXMuX3RvdWNoQWN0aW9uID0gdmFsdWU7XG5cbiAgICAvLyBTZXQgdG91Y2gtYWN0aW9uIHN0eWxlLlxuICAgIGlmICh0YVByb3BQcmVmaXhlZCkge1xuICAgICAgdGhpcy5fY3NzUHJvcHNbdGFQcm9wUHJlZml4ZWRdID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3RhUHJvcFByZWZpeGVkXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgYW4gdW5zdXBwb3J0ZWQgdG91Y2gtYWN0aW9uIHZhbHVlIGxldCdzIGFkZCBhIHNwZWNpYWwgbGlzdGVuZXJcbiAgICAvLyB0aGF0IHByZXZlbnRzIGRlZmF1bHQgYWN0aW9uIG9uIHRvdWNoIHN0YXJ0IGV2ZW50LiBBIGRpcnR5IGhhY2ssIGJ1dCBiZXN0XG4gICAgLy8gd2UgY2FuIGRvIGZvciBub3cuIFRoZSBvdGhlciBvcHRpb25zIHdvdWxkIGJlIHRvIHNvbWVob3cgcG9seWZpbGwgdGhlXG4gICAgLy8gdW5zdXBwb3J0ZWQgdG91Y2ggYWN0aW9uIGJlaGF2aW9yIHdpdGggY3VzdG9tIGhldXJpc3RpY3Mgd2hpY2ggc291bmRzIGxpa2VcbiAgICAvLyBhIGNhbiBvZiB3b3Jtcy5cbiAgICBpZiAoaGFzVG91Y2hFdmVudHMpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCwgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlW3RhUHJvcFByZWZpeGVkXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGVsZW1lbnQncyBDU1MgcHJvcGVydGllcy4gQWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBjYW1lbCBjYXNlZCBzdHlsZVxuICAgKiBwcm9wcyB3aXRoIHZhbHVlIHBhaXJzIGFzIGl0J3MgZmlyc3QgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbbmV3UHJvcHNdXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5zZXRDc3NQcm9wcyA9IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgaWYgKCFuZXdQcm9wcykgcmV0dXJuO1xuXG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX2Nzc1Byb3BzO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgcHJvcDtcbiAgICB2YXIgcHJlZml4ZWRQcm9wO1xuXG4gICAgLy8gUmVzZXQgY3VycmVudCBwcm9wcy5cbiAgICBmb3IgKHByb3AgaW4gY3VycmVudFByb3BzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gY3VycmVudFByb3BzW3Byb3BdO1xuICAgICAgZGVsZXRlIGN1cnJlbnRQcm9wc1twcm9wXTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbmV3IHByb3BzLlxuICAgIGZvciAocHJvcCBpbiBuZXdQcm9wcykge1xuICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSB2YWx1ZSBmb3IgdGhlIHByb3AuXG4gICAgICBpZiAoIW5ld1Byb3BzW3Byb3BdKSBjb250aW51ZTtcblxuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdG91Y2gtYWN0aW9uLlxuICAgICAgaWYgKHByb3AgPT09IHRhUHJvcCkge1xuICAgICAgICB0aGlzLnNldFRvdWNoQWN0aW9uKG5ld1Byb3BzW3Byb3BdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBwcmVmaXhlZCBwcm9wIGFuZCBza2lwIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAgcHJlZml4ZWRQcm9wID0gZ2V0UHJlZml4ZWRQcm9wTmFtZShlbGVtZW50LnN0eWxlLCBwcm9wKTtcbiAgICAgIGlmICghcHJlZml4ZWRQcm9wKSBjb250aW51ZTtcblxuICAgICAgLy8gU3RvcmUgdGhlIHByb3AgYW5kIGFkZCB0aGUgc3R5bGUuXG4gICAgICBjdXJyZW50UHJvcHNbcHJlZml4ZWRQcm9wXSA9ICcnO1xuICAgICAgZWxlbWVudC5zdHlsZVtwcmVmaXhlZFByb3BdID0gbmV3UHJvcHNbcHJvcF07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgcG9pbnRlciBoYXMgbW92ZWQgb24geC1heGlzIGZyb20gc3RhcnQgcG9zaXRpb24sIGluIHBpeGVscy5cbiAgICogUG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIG1vdmVtZW50IGZyb20gbGVmdCB0byByaWdodC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhWCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50WCAtIHRoaXMuX3N0YXJ0WDtcbiAgfTtcblxuICAvKipcbiAgICogSG93IG11Y2ggdGhlIHBvaW50ZXIgaGFzIG1vdmVkIG9uIHktYXhpcyBmcm9tIHN0YXJ0IHBvc2l0aW9uLCBpbiBwaXhlbHMuXG4gICAqIFBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBtb3ZlbWVudCBmcm9tIHRvcCB0byBib3R0b20uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREZWx0YVkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFkgLSB0aGlzLl9zdGFydFk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgKGluIHBpeGVscykgaGFzIHBvaW50ZXIgbW92ZWQgZnJvbSBzdGFydCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHggPSB0aGlzLmdldERlbHRhWCgpO1xuICAgIHZhciB5ID0gdGhpcy5nZXREZWx0YVkoKTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbG9uZyBoYXMgcG9pbnRlciBiZWVuIGRyYWdnZWQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREZWx0YVRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lID8gRGF0ZS5ub3coKSAtIHRoaXMuX3N0YXJ0VGltZSA6IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICogICAtICdzdGFydCcsICdtb3ZlJywgJ2NhbmNlbCcgb3IgJ2VuZCcuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICogICAtICdzdGFydCcsICdtb3ZlJywgJ2NhbmNlbCcgb3IgJ2VuZCcuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudHMsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCB1bmJpbmQgYWxsIGRyYWcgZXZlbnQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBldmVudHMgPSBEcmFnZ2VyLl9ldmVudHM7XG5cbiAgICAvLyBSZXNldCBkYXRhIGFuZCBkZWFjdGl2YXRlIHRoZSBpbnN0YW5jZS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gRGVzdHJveSBlbWl0dGVyLlxuICAgIHRoaXMuX2VtaXR0ZXIuZGVzdHJveSgpO1xuXG4gICAgLy8gVW5iaW5kIGV2ZW50IGhhbmRsZXJzLlxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERyYWdnZXIuX21vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG5cbiAgICAvLyBSZXNldCBzdHlsZXMuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLl9jc3NQcm9wcykge1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHRoaXMuX2Nzc1Byb3BzW3Byb3BdO1xuICAgICAgZGVsZXRlIHRoaXMuX2Nzc1Byb3BzW3Byb3BdO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGRhdGEuXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBNYXJrIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgdGlja2VyIHN5c3RlbSBmb3IgaGFuZGxpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXMgaW4gYW4gZWZmaWNpZW50IHdheS5cbiAgICogQ29udGFpbnMgYSByZWFkIHF1ZXVlIGFuZCBhIHdyaXRlIHF1ZXVlIHRoYXQgYXJlIHByb2Nlc3NlZCBvbiB0aGUgbmV4dFxuICAgKiBhbmltYXRpb24gZnJhbWUgd2hlbiBuZWVkZWQuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gVGlja2VyKCkge1xuICAgIHRoaXMuX25leHRTdGVwID0gbnVsbDtcblxuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5fcmVhZHMgPSB7fTtcbiAgICB0aGlzLl93cml0ZXMgPSB7fTtcblxuICAgIHRoaXMuX2JhdGNoID0gW107XG4gICAgdGhpcy5fYmF0Y2hSZWFkcyA9IHt9O1xuICAgIHRoaXMuX2JhdGNoV3JpdGVzID0ge307XG5cbiAgICB0aGlzLl9zdGVwID0gdGhpcy5fc3RlcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVGlja2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihpZCwgcmVhZE9wZXJhdGlvbiwgd3JpdGVPcGVyYXRpb24sIGlzUHJpb3JpdGl6ZWQpIHtcbiAgICAvLyBGaXJzdCwgbGV0J3MgY2hlY2sgaWYgYW4gaXRlbSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgcXVldWVzIHdpdGggdGhlIHNhbWUgaWRcbiAgICAvLyBhbmQgaWYgc28gLT4gcmVtb3ZlIGl0LlxuICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLl9xdWV1ZS5pbmRleE9mKGlkKTtcbiAgICBpZiAoY3VycmVudEluZGV4ID4gLTEpIHRoaXMuX3F1ZXVlW2N1cnJlbnRJbmRleF0gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBBZGQgZW50cnkuXG4gICAgaXNQcmlvcml0aXplZCA/IHRoaXMuX3F1ZXVlLnVuc2hpZnQoaWQpIDogdGhpcy5fcXVldWUucHVzaChpZCk7XG4gICAgdGhpcy5fcmVhZHNbaWRdID0gcmVhZE9wZXJhdGlvbjtcbiAgICB0aGlzLl93cml0ZXNbaWRdID0gd3JpdGVPcGVyYXRpb247XG5cbiAgICAvLyBGaW5hbGx5LCBsZXQncyBraWNrLXN0YXJ0IHRoZSBuZXh0IHRpY2sgaWYgaXQgaXMgbm90IHJ1bm5pbmcgeWV0LlxuICAgIGlmICghdGhpcy5fbmV4dFN0ZXApIHRoaXMuX25leHRTdGVwID0gcmFmKHRoaXMuX3N0ZXApO1xuICB9O1xuXG4gIFRpY2tlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5fcXVldWUuaW5kZXhPZihpZCk7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9xdWV1ZVtjdXJyZW50SW5kZXhdID0gdW5kZWZpbmVkO1xuICAgICAgZGVsZXRlIHRoaXMuX3JlYWRzW2lkXTtcbiAgICAgIGRlbGV0ZSB0aGlzLl93cml0ZXNbaWRdO1xuICAgIH1cbiAgfTtcblxuICBUaWNrZXIucHJvdG90eXBlLl9zdGVwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHJlYWRzID0gdGhpcy5fcmVhZHM7XG4gICAgdmFyIHdyaXRlcyA9IHRoaXMuX3dyaXRlcztcbiAgICB2YXIgYmF0Y2ggPSB0aGlzLl9iYXRjaDtcbiAgICB2YXIgYmF0Y2hSZWFkcyA9IHRoaXMuX2JhdGNoUmVhZHM7XG4gICAgdmFyIGJhdGNoV3JpdGVzID0gdGhpcy5fYmF0Y2hXcml0ZXM7XG4gICAgdmFyIGxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgaWQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZXNldCB0aWNrZXIuXG4gICAgdGhpcy5fbmV4dFN0ZXAgPSBudWxsO1xuXG4gICAgLy8gU2V0dXAgcXVldWVzIGFuZCBjYWxsYmFjayBwbGFjZWhvbGRlcnMuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZCA9IHF1ZXVlW2ldO1xuICAgICAgaWYgKCFpZCkgY29udGludWU7XG5cbiAgICAgIGJhdGNoLnB1c2goaWQpO1xuXG4gICAgICBiYXRjaFJlYWRzW2lkXSA9IHJlYWRzW2lkXTtcbiAgICAgIGRlbGV0ZSByZWFkc1tpZF07XG5cbiAgICAgIGJhdGNoV3JpdGVzW2lkXSA9IHdyaXRlc1tpZF07XG4gICAgICBkZWxldGUgd3JpdGVzW2lkXTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBxdWV1ZS5cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgLy8gUHJvY2VzcyByZWFkIGNhbGxiYWNrcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkID0gYmF0Y2hbaV07XG4gICAgICBpZiAoYmF0Y2hSZWFkc1tpZF0pIHtcbiAgICAgICAgYmF0Y2hSZWFkc1tpZF0oKTtcbiAgICAgICAgZGVsZXRlIGJhdGNoUmVhZHNbaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb2Nlc3Mgd3JpdGUgY2FsbGJhY2tzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWQgPSBiYXRjaFtpXTtcbiAgICAgIGlmIChiYXRjaFdyaXRlc1tpZF0pIHtcbiAgICAgICAgYmF0Y2hXcml0ZXNbaWRdKCk7XG4gICAgICAgIGRlbGV0ZSBiYXRjaFdyaXRlc1tpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgYmF0Y2guXG4gICAgYmF0Y2gubGVuZ3RoID0gMDtcblxuICAgIC8vIFJlc3RhcnQgdGhlIHRpY2tlciBpZiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9uZXh0U3RlcCAmJiBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX25leHRTdGVwID0gcmFmKHRoaXMuX3N0ZXApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdGlja2VyID0gbmV3IFRpY2tlcigpO1xuXG4gIHZhciBsYXlvdXRUaWNrID0gJ2xheW91dCc7XG4gIHZhciB2aXNpYmlsaXR5VGljayA9ICd2aXNpYmlsaXR5JztcbiAgdmFyIG1vdmVUaWNrID0gJ21vdmUnO1xuICB2YXIgc2Nyb2xsVGljayA9ICdzY3JvbGwnO1xuICB2YXIgcGxhY2Vob2xkZXJUaWNrID0gJ3BsYWNlaG9sZGVyJztcblxuICBmdW5jdGlvbiBhZGRMYXlvdXRUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgbGF5b3V0VGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbExheW91dFRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgbGF5b3V0VGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRWaXNpYmlsaXR5VGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHZpc2liaWxpdHlUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsVmlzaWJpbGl0eVRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgdmlzaWJpbGl0eVRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTW92ZVRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBtb3ZlVGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbE1vdmVUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIG1vdmVUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbFRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBzY3JvbGxUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2ssIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsU2Nyb2xsVGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBzY3JvbGxUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFBsYWNlaG9sZGVyVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHBsYWNlaG9sZGVyVGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBwbGFjZWhvbGRlclRpY2spO1xuICB9XG5cbiAgdmFyIEVsUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gIHZhciBtYXRjaGVzRm4gPVxuICAgIEVsUHJvdG8ubWF0Y2hlcyB8fFxuICAgIEVsUHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBlbGVtZW50IG1hdGNoZXMgYSBDU1Mgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gZWxlbWVudE1hdGNoZXMoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNGbi5jYWxsKGVsLCBzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNsYXNzIHRvIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFlbGVtZW50TWF0Y2hlcyhlbGVtZW50LCAnLicgKyBjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcEFycmF5ID0gW107XG4gIHZhciBudW1iZXJUeXBlID0gJ251bWJlcic7XG5cbiAgLyoqXG4gICAqIEluc2VydCBhbiBpdGVtIG9yIGFuIGFycmF5IG9mIGl0ZW1zIHRvIGFycmF5IHRvIGEgc3BlY2lmaWVkIGluZGV4LiBNdXRhdGVzXG4gICAqIHRoZSBhcnJheS4gVGhlIGluZGV4IGNhbiBiZSBuZWdhdGl2ZSBpbiB3aGljaCBjYXNlIHRoZSBpdGVtcyB3aWxsIGJlIGFkZGVkXG4gICAqIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXg9LTFdXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheUluc2VydChhcnJheSwgaXRlbXMsIGluZGV4KSB7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSB0eXBlb2YgaW5kZXggPT09IG51bWJlclR5cGUgPyBpbmRleCA6IC0xO1xuICAgIGlmIChzdGFydEluZGV4IDwgMCkgc3RhcnRJbmRleCA9IGFycmF5Lmxlbmd0aCAtIHN0YXJ0SW5kZXggKyAxO1xuXG4gICAgYXJyYXkuc3BsaWNlLmFwcGx5KGFycmF5LCB0ZW1wQXJyYXkuY29uY2F0KHN0YXJ0SW5kZXgsIDAsIGl0ZW1zKSk7XG4gICAgdGVtcEFycmF5Lmxlbmd0aCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIGFycmF5IGluZGV4LiBCYXNpY2FsbHkgdGhpcyBmdW5jdGlvbiBtYWtlcyBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkXG4gICAqIGFycmF5IGluZGV4IGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgYWxzbyB0cmFuc2Zvcm1zXG4gICAqIG5lZ2F0aXZlIGluZGV4IHRvIHRoZSBtYXRjaGluZyBwb3NpdGl2ZSBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNNaWdyYXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGluZGV4LCBpc01pZ3JhdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIG1heEluZGV4ID0gTWF0aC5tYXgoMCwgaXNNaWdyYXRpb24gPyBsZW5ndGggOiBsZW5ndGggLSAxKTtcbiAgICByZXR1cm4gaW5kZXggPiBtYXhJbmRleCA/IG1heEluZGV4IDogaW5kZXggPCAwID8gTWF0aC5tYXgobWF4SW5kZXggKyBpbmRleCArIDEsIDApIDogaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhcnJheSBpdGVtIHRvIGFub3RoZXIgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgb2YgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIG1vdmVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSB3aGVyZSB0aGUgaXRlbSBzaG91bGQgYmUgbW92ZWQgdG8uXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheU1vdmUoYXJyYXksIGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXJyYXkgaGFzIHR3byBvciBtb3JlIGl0ZW1zLlxuICAgIGlmIChhcnJheS5sZW5ndGggPCAyKSByZXR1cm47XG5cbiAgICAvLyBOb3JtYWxpemUgdGhlIGluZGljZXMuXG4gICAgdmFyIGZyb20gPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCBmcm9tSW5kZXgpO1xuICAgIHZhciB0byA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIHRvSW5kZXgpO1xuXG4gICAgLy8gQWRkIHRhcmdldCBpdGVtIHRvIHRoZSBuZXcgcG9zaXRpb24uXG4gICAgaWYgKGZyb20gIT09IHRvKSB7XG4gICAgICBhcnJheS5zcGxpY2UodG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN3YXAgYXJyYXkgaXRlbXMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgaXRlbSB0aGF0IHdpbGwgYmUgc3dhcHBlZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpdGhJbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgb3RoZXIgaXRlbSB0aGF0IHdpbGwgYmUgc3dhcHBlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5U3dhcChhcnJheSwgaW5kZXgsIHdpdGhJbmRleCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXJyYXkgaGFzIHR3byBvciBtb3JlIGl0ZW1zLlxuICAgIGlmIChhcnJheS5sZW5ndGggPCAyKSByZXR1cm47XG5cbiAgICAvLyBOb3JtYWxpemUgdGhlIGluZGljZXMuXG4gICAgdmFyIGluZGV4QSA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGluZGV4KTtcbiAgICB2YXIgaW5kZXhCID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgd2l0aEluZGV4KTtcbiAgICB2YXIgdGVtcDtcblxuICAgIC8vIFN3YXAgdGhlIGl0ZW1zLlxuICAgIGlmIChpbmRleEEgIT09IGluZGV4Qikge1xuICAgICAgdGVtcCA9IGFycmF5W2luZGV4QV07XG4gICAgICBhcnJheVtpbmRleEFdID0gYXJyYXlbaW5kZXhCXTtcbiAgICAgIGFycmF5W2luZGV4Ql0gPSB0ZW1wO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhY3Rpb25DYW5jZWwgPSAnY2FuY2VsJztcbiAgdmFyIGFjdGlvbkZpbmlzaCA9ICdmaW5pc2gnO1xuICB2YXIgZGVib3VuY2VUaWNrID0gJ2RlYm91bmNlJztcbiAgdmFyIGRlYm91bmNlSWQgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gICAqIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgICogTiBtaWxsaXNlY29uZHMuIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBhY2NlcHRzIG9uZSBhcmd1bWVudCB3aGljaCwgd2hlblxuICAgKiBiZWluZyBcImZpbmlzaFwiLCBjYWxscyB0aGUgZGVib3VuY2UgZnVuY3Rpb24gaW1tZWRpYXRlbHkgaWYgaXQgaXMgY3VycmVudGx5XG4gICAqIHdhaXRpbmcgdG8gYmUgY2FsbGVkLCBhbmQgd2hlbiBiZWluZyBcImNhbmNlbFwiIGNhbmNlbHMgdGhlIGN1cnJlbnRseSBxdWV1ZWRcbiAgICogZnVuY3Rpb24gY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZGVib3VuY2UoZm4sIHdhaXQpIHtcbiAgICB2YXIgdGltZW91dDtcbiAgICB2YXIgdGlja2VySWQgPSArK2RlYm91bmNlSWQgKyBkZWJvdW5jZVRpY2s7XG5cbiAgICBpZiAod2FpdCA+IDApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpY2tlci5jYW5jZWwodGlja2VySWQpO1xuICAgICAgICAgIGlmIChhY3Rpb24gPT09IGFjdGlvbkZpbmlzaCkgZm4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24gIT09IGFjdGlvbkNhbmNlbCAmJiBhY3Rpb24gIT09IGFjdGlvbkZpbmlzaCkge1xuICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aWNrZXIuYWRkKHRpY2tlcklkLCBmbiwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgd2FpdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgaWYgKGFjdGlvbiAhPT0gYWN0aW9uQ2FuY2VsKSBmbigpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGVsZW1lbnQgaXMgdHJhbnNmb3JtZWQsIGZhbHNlIGlmIG5vdC4gSW4gcHJhY3RpY2UgdGhlXG4gICAqIGVsZW1lbnQncyBkaXNwbGF5IHZhbHVlIG11c3QgYmUgYW55dGhpbmcgZWxzZSB0aGFuIFwibm9uZVwiIG9yIFwiaW5saW5lXCIgYXNcbiAgICogd2VsbCBhcyBoYXZlIGEgdmFsaWQgdHJhbnNmb3JtIHZhbHVlIGFwcGxpZWQgaW4gb3JkZXIgdG8gYmUgY291bnRlZCBhcyBhXG4gICAqIHRyYW5zZm9ybWVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEJvcnJvd2VkIGZyb20gTWV6ciAodjAuNi4xKTpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3JhbW8vbWV6ci9ibG9iLzAuNi4xL21lenIuanMjTDY2MVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNUcmFuc2Zvcm1lZChlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IGdldFN0eWxlKGVsZW1lbnQsICd0cmFuc2Zvcm0nKTtcbiAgICBpZiAoIXRyYW5zZm9ybSB8fCB0cmFuc2Zvcm0gPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGRpc3BsYXkgPSBnZXRTdHlsZShlbGVtZW50LCAnZGlzcGxheScpO1xuICAgIGlmIChkaXNwbGF5ID09PSAnaW5saW5lJyB8fCBkaXNwbGF5ID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYWJzb2x1dGUgcG9zaXRpb25lZCBlbGVtZW50J3MgY29udGFpbmluZyBibG9jaywgd2hpY2ggaXNcbiAgICogY29uc2lkZXJlZCB0byBiZSB0aGUgY2xvc2VzdCBhbmNlc3RvciBlbGVtZW50IHRoYXQgdGhlIHRhcmdldCBlbGVtZW50J3NcbiAgICogcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8uIERpc2NsYWltZXI6IHRoaXMgb25seSB3b3JrcyBhcyBpbnRlbmRlZCBmb3JcbiAgICogYWJzb2x1dGUgcG9zaXRpb25lZCBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbmNsdWRlU2VsZj1mYWxzZV1cbiAgICogICAtIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSB0aGUgY29udGFpbmluZyBibG9jayBjaGVja2luZyBpcyBzdGFydGVkIGZyb21cbiAgICogICAgIHRoZSBwcm92aWRlZCBlbGVtZW50LiBPdGhlcndpc2UgdGhlIGNoZWNraW5nIGlzIHN0YXJ0ZWQgZnJvbSB0aGVcbiAgICogICAgIHByb3ZpZGVkIGVsZW1lbnQncyBwYXJlbnQgZWxlbWVudC5cbiAgICogQHJldHVybnMgeyhEb2N1bWVudHxFbGVtZW50KX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50LCBpbmNsdWRlU2VsZikge1xuICAgIC8vIEFzIGxvbmcgYXMgdGhlIGNvbnRhaW5pbmcgYmxvY2sgaXMgYW4gZWxlbWVudCwgc3RhdGljIGFuZCBub3RcbiAgICAvLyB0cmFuc2Zvcm1lZCwgdHJ5IHRvIGdldCB0aGUgZWxlbWVudCdzIHBhcmVudCBlbGVtZW50IGFuZCBmYWxsYmFjayB0b1xuICAgIC8vIGRvY3VtZW50LiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzcmFtby9tZXpyL2Jsb2IvMC42LjEvbWV6ci5qcyNMMzM5XG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciByZXQgPSAoaW5jbHVkZVNlbGYgPyBlbGVtZW50IDogZWxlbWVudC5wYXJlbnRFbGVtZW50KSB8fCBkb2N1bWVudDtcbiAgICB3aGlsZSAocmV0ICYmIHJldCAhPT0gZG9jdW1lbnQgJiYgZ2V0U3R5bGUocmV0LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiYgIWlzVHJhbnNmb3JtZWQocmV0KSkge1xuICAgICAgcmV0ID0gcmV0LnBhcmVudEVsZW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29tcHV0ZWQgdmFsdWUgb2YgYW4gZWxlbWVudCdzIHN0eWxlIHByb3BlcnR5IHRyYW5zZm9ybWVkIGludG9cbiAgICogYSBmbG9hdCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZUFzRmxvYXQoZWwsIHN0eWxlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZ2V0U3R5bGUoZWwsIHN0eWxlKSkgfHwgMDtcbiAgfVxuXG4gIHZhciBvZmZzZXRBID0ge307XG4gIHZhciBvZmZzZXRCID0ge307XG4gIHZhciBvZmZzZXREaWZmID0ge307XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQncyBkb2N1bWVudCBvZmZzZXQsIHdoaWNoIGluIHByYWN0aWNlIG1lYW5zIHRoZSB2ZXJ0aWNhbFxuICAgKiBhbmQgaG9yaXpvbnRhbCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBlbGVtZW50J3Mgbm9ydGh3ZXN0IGNvcm5lciBhbmQgdGhlXG4gICAqIGRvY3VtZW50J3Mgbm9ydGh3ZXN0IGNvcm5lci4gTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gYWx3YXlzIHJldHVybnMgdGhlIHNhbWVcbiAgICogb2JqZWN0IHNvIGJlIHN1cmUgdG8gcmVhZCB0aGUgZGF0YSBmcm9tIGl0IGluc3RlYWQgdXNpbmcgaXQgYXMgYSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7KERvY3VtZW50fEVsZW1lbnR8V2luZG93KX0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29mZnNldERhdGFdXG4gICAqICAgLSBPcHRpb25hbCBkYXRhIG9iamVjdCB3aGVyZSB0aGUgb2Zmc2V0IGRhdGEgd2lsbCBiZSBpbnNlcnRlZCB0by4gSWYgbm90XG4gICAqICAgICBwcm92aWRlZCBhIG5ldyBvYmplY3Qgd2lsbCBiZSBjcmVhdGVkIGZvciB0aGUgcmV0dXJuIGRhdGEuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXQoZWxlbWVudCwgb2Zmc2V0RGF0YSkge1xuICAgIHZhciByZXQgPSBvZmZzZXREYXRhIHx8IHt9O1xuICAgIHZhciByZWN0O1xuXG4gICAgLy8gU2V0IHVwIHJldHVybiBkYXRhLlxuICAgIHJldC5sZWZ0ID0gMDtcbiAgICByZXQudG9wID0gMDtcblxuICAgIC8vIERvY3VtZW50J3Mgb2Zmc2V0cyBhcmUgYWx3YXlzIDAuXG4gICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50KSByZXR1cm4gcmV0O1xuXG4gICAgLy8gQWRkIHZpZXdwb3J0IHNjcm9sbCBsZWZ0L3RvcCB0byB0aGUgcmVzcGVjdGl2ZSBvZmZzZXRzLlxuICAgIHJldC5sZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IDA7XG4gICAgcmV0LnRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCAwO1xuXG4gICAgLy8gV2luZG93J3Mgb2Zmc2V0cyBhcmUgdGhlIHZpZXdwb3J0IHNjcm9sbCBsZWZ0L3RvcCB2YWx1ZXMuXG4gICAgaWYgKGVsZW1lbnQuc2VsZiA9PT0gd2luZG93LnNlbGYpIHJldHVybiByZXQ7XG5cbiAgICAvLyBBZGQgZWxlbWVudCdzIGNsaWVudCByZWN0cyB0byB0aGUgb2Zmc2V0cy5cbiAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXQubGVmdCArPSByZWN0LmxlZnQ7XG4gICAgcmV0LnRvcCArPSByZWN0LnRvcDtcblxuICAgIC8vIEV4Y2x1ZGUgZWxlbWVudCdzIGJvcmRlcnMgZnJvbSB0aGUgb2Zmc2V0LlxuICAgIHJldC5sZWZ0ICs9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLWxlZnQtd2lkdGgnKTtcbiAgICByZXQudG9wICs9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIG9mZnNldCBkaWZmZXJlbmNlIHR3byBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbUFcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbUJcbiAgICogQHBhcmFtIHtCb29sZWFufSBbY29tcGFyZUNvbnRhaW5pbmdCbG9ja3M9ZmFsc2VdXG4gICAqICAgLSBXaGVuIHRoaXMgaXMgc2V0IHRvIHRydWUgdGhlIGNvbnRhaW5pbmcgYmxvY2tzIG9mIHRoZSBwcm92aWRlZCBlbGVtZW50c1xuICAgKiAgICAgd2lsbCBiZSB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgZGlmZmVyZW5jZS4gT3RoZXJ3aXNlIHRoZSBwcm92aWRlZFxuICAgKiAgICAgZWxlbWVudHMgd2lsbCBiZSBjb21wYXJlZCBkaXJlY3RseS5cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldE9mZnNldERpZmYoZWxlbUEsIGVsZW1CLCBjb21wYXJlQ29udGFpbmluZ0Jsb2Nrcykge1xuICAgIG9mZnNldERpZmYubGVmdCA9IDA7XG4gICAgb2Zmc2V0RGlmZi50b3AgPSAwO1xuXG4gICAgLy8gSWYgZWxlbWVudHMgYXJlIHNhbWUgbGV0J3MgcmV0dXJuIGVhcmx5LlxuICAgIGlmIChlbGVtQSA9PT0gZWxlbUIpIHJldHVybiBvZmZzZXREaWZmO1xuXG4gICAgLy8gQ29tcGFyZSBjb250YWluaW5nIGJsb2NrcyBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKGNvbXBhcmVDb250YWluaW5nQmxvY2tzKSB7XG4gICAgICBlbGVtQSA9IGdldENvbnRhaW5pbmdCbG9jayhlbGVtQSwgdHJ1ZSk7XG4gICAgICBlbGVtQiA9IGdldENvbnRhaW5pbmdCbG9jayhlbGVtQiwgdHJ1ZSk7XG5cbiAgICAgIC8vIElmIGNvbnRhaW5pbmcgYmxvY2tzIGFyZSBpZGVudGljYWwsIGxldCdzIHJldHVybiBlYXJseS5cbiAgICAgIGlmIChlbGVtQSA9PT0gZWxlbUIpIHJldHVybiBvZmZzZXREaWZmO1xuICAgIH1cblxuICAgIC8vIEZpbmFsbHksIGxldCdzIGNhbGN1bGF0ZSB0aGUgb2Zmc2V0IGRpZmYuXG4gICAgZ2V0T2Zmc2V0KGVsZW1BLCBvZmZzZXRBKTtcbiAgICBnZXRPZmZzZXQoZWxlbUIsIG9mZnNldEIpO1xuICAgIG9mZnNldERpZmYubGVmdCA9IG9mZnNldEIubGVmdCAtIG9mZnNldEEubGVmdDtcbiAgICBvZmZzZXREaWZmLnRvcCA9IG9mZnNldEIudG9wIC0gb2Zmc2V0QS50b3A7XG5cbiAgICByZXR1cm4gb2Zmc2V0RGlmZjtcbiAgfVxuXG4gIHZhciBzdHlsZU92ZXJmbG93ID0gJ292ZXJmbG93JztcbiAgdmFyIHN0eWxlT3ZlcmZsb3dYID0gJ292ZXJmbG93LXgnO1xuICB2YXIgc3R5bGVPdmVyZmxvd1kgPSAnb3ZlcmZsb3cteSc7XG4gIHZhciBvdmVyZmxvd0F1dG8gPSAnYXV0byc7XG4gIHZhciBvdmVyZmxvd1Njcm9sbCA9ICdzY3JvbGwnO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIHNjcm9sbGFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWxlbWVudCkge1xuICAgIHZhciBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3cpO1xuICAgIGlmIChvdmVyZmxvdyA9PT0gb3ZlcmZsb3dBdXRvIHx8IG92ZXJmbG93ID09PSBvdmVyZmxvd1Njcm9sbCkgcmV0dXJuIHRydWU7XG5cbiAgICBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3dYKTtcbiAgICBpZiAob3ZlcmZsb3cgPT09IG92ZXJmbG93QXV0byB8fCBvdmVyZmxvdyA9PT0gb3ZlcmZsb3dTY3JvbGwpIHJldHVybiB0cnVlO1xuXG4gICAgb3ZlcmZsb3cgPSBnZXRTdHlsZShlbGVtZW50LCBzdHlsZU92ZXJmbG93WSk7XG4gICAgaWYgKG92ZXJmbG93ID09PSBvdmVyZmxvd0F1dG8gfHwgb3ZlcmZsb3cgPT09IG92ZXJmbG93U2Nyb2xsKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0IGVsZW1lbnQncyBhbmNlc3RvcnMgdGhhdCBhcmUgcG90ZW50aWFsbHkgc2Nyb2xsYWJsZSBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbmNsdWRlU2VsZj1mYWxzZV1cbiAgICogQHBhcmFtIHtBcnJheX0gW2RhdGFdXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFNjcm9sbGFibGVBbmNlc3RvcnMoZWxlbWVudCwgaW5jbHVkZVNlbGYsIGRhdGEpIHtcbiAgICB2YXIgcmV0ID0gZGF0YSB8fCBbXTtcbiAgICB2YXIgcGFyZW50ID0gaW5jbHVkZVNlbGYgPyBlbGVtZW50IDogZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgLy8gRmluZCBzY3JvbGwgcGFyZW50cy5cbiAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgIC8vIElmIGVsZW1lbnQgaXMgaW5zaWRlIFNoYWRvd0RPTSBsZXQncyBnZXQgaXQncyBob3N0IG5vZGUgZnJvbSB0aGUgcmVhbFxuICAgICAgLy8gRE9NIGFuZCBjb250aW51ZSBsb29waW5nLlxuICAgICAgaWYgKHBhcmVudC5nZXRSb290Tm9kZSAmJiBwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5nZXRSb290Tm9kZSgpLmhvc3Q7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBlbGVtZW50IGlzIHNjcm9sbGFibGUgbGV0J3MgYWRkIGl0IHRvIHRoZSBzY3JvbGxhYmxlIGxpc3QuXG4gICAgICBpZiAoaXNTY3JvbGxhYmxlKHBhcmVudCkpIHtcbiAgICAgICAgcmV0LnB1c2gocGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGFkZCB3aW5kb3cgdG8gdGhlIHJlc3VsdHMuXG4gICAgcmV0LnB1c2god2luZG93KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlVmFsdWUgPSB7fTtcbiAgdmFyIHRyYW5zZm9ybVN0eWxlJDIgPSAndHJhbnNmb3JtJztcbiAgdmFyIHRyYW5zZm9ybU5vbmUgPSAnbm9uZSc7XG4gIHZhciByeE1hdDNkID0gL15tYXRyaXgzZC87XG4gIHZhciByeE1hdFR4ID0gLyhbXixdKiwpezR9LztcbiAgdmFyIHJ4TWF0M2RUeCA9IC8oW14sXSosKXsxMn0vO1xuICB2YXIgcnhOZXh0SXRlbSA9IC9bXixdKiwvO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50J3MgY29tcHV0ZWQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZXMgYXMgYSBmbG9hdHMuXG4gICAqIFRoZSByZXR1cm5lZCBvYmplY3QgaXMgYWx3YXlzIHRoZSBzYW1lIG9iamVjdCBhbmQgdXBkYXRlZCBldmVyeSB0aW1lIHRoaXNcbiAgICogZnVuY3Rpb24gaXMgY2FsbGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWxlbWVudCkge1xuICAgIHRyYW5zbGF0ZVZhbHVlLnggPSAwO1xuICAgIHRyYW5zbGF0ZVZhbHVlLnkgPSAwO1xuXG4gICAgdmFyIHRyYW5zZm9ybSA9IGdldFN0eWxlKGVsZW1lbnQsIHRyYW5zZm9ybVN0eWxlJDIpO1xuICAgIGlmICghdHJhbnNmb3JtIHx8IHRyYW5zZm9ybSA9PT0gdHJhbnNmb3JtTm9uZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZVZhbHVlO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBzdHlsZSBjYW4gYmUgaW4gZWl0aGVyIG1hdHJpeDNkKC4uLikgb3IgbWF0cml4KC4uLikuXG4gICAgdmFyIGlzTWF0M2QgPSByeE1hdDNkLnRlc3QodHJhbnNmb3JtKTtcbiAgICB2YXIgdFggPSB0cmFuc2Zvcm0ucmVwbGFjZShpc01hdDNkID8gcnhNYXQzZFR4IDogcnhNYXRUeCwgJycpO1xuICAgIHZhciB0WSA9IHRYLnJlcGxhY2UocnhOZXh0SXRlbSwgJycpO1xuXG4gICAgdHJhbnNsYXRlVmFsdWUueCA9IHBhcnNlRmxvYXQodFgpIHx8IDA7XG4gICAgdHJhbnNsYXRlVmFsdWUueSA9IHBhcnNlRmxvYXQodFkpIHx8IDA7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRlVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgdmFsdWUgaW50byBDU1MgdHJhbnNmb3JtIHN0eWxlXG4gICAqIHByb3BlcnR5J3MgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUcmFuc2xhdGVTdHJpbmcoeCwgeSkge1xuICAgIHJldHVybiAndHJhbnNsYXRlWCgnICsgeCArICdweCkgdHJhbnNsYXRlWSgnICsgeSArICdweCknO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjbGFzcyBmcm9tIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnRNYXRjaGVzKGVsZW1lbnQsICcuJyArIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoJyAnICsgZWxlbWVudC5jbGFzc05hbWUgKyAnICcpXG4gICAgICAgICAgLnJlcGxhY2UoJyAnICsgY2xhc3NOYW1lICsgJyAnLCAnICcpXG4gICAgICAgICAgLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEcmFnIHN0YXJ0IHByZWRpY2F0ZSBzdGF0ZXMuXG4gIHZhciBzdGFydFByZWRpY2F0ZUluYWN0aXZlID0gMDtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUGVuZGluZyA9IDE7XG4gIHZhciBzdGFydFByZWRpY2F0ZVJlc29sdmVkID0gMjtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUmVqZWN0ZWQgPSAzO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvdWNoIGludGVyYWN0aW9uIHRvIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1EcmFnKGl0ZW0pIHtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2dyaWRJZCA9IGdyaWQuX2lkO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPSBmYWxzZTtcblxuICAgIC8vIFN0YXJ0IHByZWRpY2F0ZSBkYXRhLlxuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlID0gaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU3RhcnRQcmVkaWNhdGUpXG4gICAgICA/IHNldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZVxuICAgICAgOiBJdGVtRHJhZy5kZWZhdWx0U3RhcnRQcmVkaWNhdGU7XG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlSW5hY3RpdmU7XG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEYXRhIGZvciBkcmFnIHNvcnQgcHJlZGljYXRlIGhldXJpc3RpY3MuXG4gICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgdGhpcy5faFgxID0gMDtcbiAgICB0aGlzLl9oWDIgPSAwO1xuICAgIHRoaXMuX2hZMSA9IDA7XG4gICAgdGhpcy5faFkyID0gMDtcblxuICAgIC8vIFNldHVwIGl0ZW0ncyBpbml0aWFsIGRyYWcgZGF0YS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gQmluZCB0aGUgbWV0aG9kcyB0aGF0IG5lZWRzIGJpbmRpbmcuXG4gICAgdGhpcy5fcHJlU3RhcnRDaGVjayA9IHRoaXMuX3ByZVN0YXJ0Q2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVFbmRDaGVjayA9IHRoaXMuX3ByZUVuZENoZWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25TY3JvbGwgPSB0aGlzLl9vblNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZXBhcmVNb3ZlID0gdGhpcy5fcHJlcGFyZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9hcHBseU1vdmUgPSB0aGlzLl9hcHBseU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVwYXJlU2Nyb2xsID0gdGhpcy5fcHJlcGFyZVNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2FwcGx5U2Nyb2xsID0gdGhpcy5fYXBwbHlTY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9jaGVja092ZXJsYXAgPSB0aGlzLl9jaGVja092ZXJsYXAuYmluZCh0aGlzKTtcblxuICAgIC8vIENyZWF0ZSBkZWJvdW5jZSBvdmVybGFwIGNoZWNrZXIgZnVuY3Rpb24uXG4gICAgdmFyIHNvcnRJbnRlcnZhbCA9IHNldHRpbmdzLmRyYWdTb3J0SGV1cmlzdGljcy5zb3J0SW50ZXJ2YWw7XG4gICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UgPSBkZWJvdW5jZSh0aGlzLl9jaGVja092ZXJsYXAsIHNvcnRJbnRlcnZhbCk7XG5cbiAgICAvLyBJbml0IGRyYWdnZXIuXG4gICAgdGhpcy5fZHJhZ2dlciA9IG5ldyBEcmFnZ2VyKGVsZW1lbnQsIHNldHRpbmdzLmRyYWdDc3NQcm9wcyk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignc3RhcnQnLCB0aGlzLl9wcmVTdGFydENoZWNrKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdtb3ZlJywgdGhpcy5fcHJlU3RhcnRDaGVjayk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignY2FuY2VsJywgdGhpcy5fcHJlRW5kQ2hlY2spO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ2VuZCcsIHRoaXMuX3ByZUVuZENoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgc3RhdGljIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRyYWcgc3RhcnQgcHJlZGljYXRlIGhhbmRsZXIgdGhhdCBoYW5kbGVzIGFuY2hvciBlbGVtZW50c1xuICAgKiBncmFjZWZ1bGx5LiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoaXMgZnVuY3Rpb24gZGVmaW5lcyBpZiB0aGUgZHJhZyBpc1xuICAgKiBzdGFydGVkLCByZWplY3RlZCBvciBwZW5kaW5nLiBXaGVuIHRydWUgaXMgcmV0dXJuZWQgdGhlIGRyYWdnaW5nIGlzIHN0YXJ0ZWRcbiAgICogYW5kIHdoZW4gZmFsc2UgaXMgcmV0dXJuZWQgdGhlIGRyYWdnaW5nIGlzIHJlamVjdGVkLiBJZiBub3RoaW5nIGlzIHJldHVybmVkXG4gICAqIHRoZSBwcmVkaWNhdGUgd2lsbCBiZSBjYWxsZWQgYWdhaW4gb24gdGhlIG5leHQgZHJhZyBtb3ZlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqICAgLSBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCB3aGljaCBjYW4gYmUgdXNlZCB0byBwYXNzIHRoZSBwcmVkaWNhdGVcbiAgICogICAgIGl0J3Mgb3B0aW9ucyBtYW51YWxseS4gQnkgZGVmYXVsdCB0aGUgcHJlZGljYXRlIHJldHJpZXZlcyB0aGUgb3B0aW9uc1xuICAgKiAgICAgZnJvbSB0aGUgZ3JpZCdzIHNldHRpbmdzLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnLmRlZmF1bHRTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGl0ZW0sIGV2ZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGRyYWcgPSBpdGVtLl9kcmFnO1xuICAgIHZhciBwcmVkaWNhdGUgPSBkcmFnLl9zdGFydFByZWRpY2F0ZURhdGEgfHwgZHJhZy5fc2V0dXBTdGFydFByZWRpY2F0ZShvcHRpb25zKTtcblxuICAgIC8vIEZpbmFsIGV2ZW50IGxvZ2ljLiBBdCB0aGlzIHN0YWdlIHJldHVybiB2YWx1ZSBkb2VzIG5vdCBtYXR0ZXIgYW55bW9yZSxcbiAgICAvLyB0aGUgcHJlZGljYXRlIGlzIGVpdGhlciByZXNvbHZlZCBvciBpdCdzIG5vdCBhbmQgdGhlcmUncyBub3RoaW5nIHRvIGRvXG4gICAgLy8gYWJvdXQgaXQuIEhlcmUgd2UganVzdCByZXNldCBkYXRhIGFuZCBpZiB0aGUgaXRlbSBlbGVtZW50IGlzIGEgbGlua1xuICAgIC8vIHdlIGZvbGxvdyBpdCAoaWYgdGhlcmUgaGFzIG9ubHkgYmVlbiBzbGlnaHQgbW92ZW1lbnQpLlxuICAgIGlmIChldmVudC5pc0ZpbmFsKSB7XG4gICAgICBkcmFnLl9maW5pc2hTdGFydFByZWRpY2F0ZShldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmluZCBhbmQgc3RvcmUgdGhlIGhhbmRsZSBlbGVtZW50IHNvIHdlIGNhbiBjaGVjayBsYXRlciBvbiBpZiB0aGVcbiAgICAvLyBjdXJzb3IgaXMgd2l0aGluIHRoZSBoYW5kbGUuIElmIHdlIGhhdmUgYSBoYW5kbGUgc2VsZWN0b3IgbGV0J3MgZmluZFxuICAgIC8vIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnQuIE90aGVyd2lzZSBsZXQncyB1c2UgdGhlIGl0ZW0gZWxlbWVudCBhcyB0aGVcbiAgICAvLyBoYW5kbGUuXG4gICAgaWYgKCFwcmVkaWNhdGUuaGFuZGxlRWxlbWVudCkge1xuICAgICAgcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQgPSBkcmFnLl9nZXRTdGFydFByZWRpY2F0ZUhhbmRsZShldmVudCk7XG4gICAgICBpZiAoIXByZWRpY2F0ZS5oYW5kbGVFbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgZGVsYXkgaXMgZGVmaW5lZCBsZXQncyBrZWVwIHRyYWNrIG9mIHRoZSBsYXRlc3QgZXZlbnQgYW5kIGluaXRpYXRlXG4gICAgLy8gZGVsYXkgaWYgaXQgaGFzIG5vdCBiZWVuIGRvbmUgeWV0LlxuICAgIGlmIChwcmVkaWNhdGUuZGVsYXkpIHtcbiAgICAgIHByZWRpY2F0ZS5ldmVudCA9IGV2ZW50O1xuICAgICAgaWYgKCFwcmVkaWNhdGUuZGVsYXlUaW1lcikge1xuICAgICAgICBwcmVkaWNhdGUuZGVsYXlUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHByZWRpY2F0ZS5kZWxheSA9IDA7XG4gICAgICAgICAgaWYgKGRyYWcuX3Jlc29sdmVTdGFydFByZWRpY2F0ZShwcmVkaWNhdGUuZXZlbnQpKSB7XG4gICAgICAgICAgICBkcmFnLl9mb3JjZVJlc29sdmVTdGFydFByZWRpY2F0ZShwcmVkaWNhdGUuZXZlbnQpO1xuICAgICAgICAgICAgZHJhZy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgcHJlZGljYXRlLmRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZHJhZy5fcmVzb2x2ZVN0YXJ0UHJlZGljYXRlKGV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRGVmYXVsdCBkcmFnIHNvcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudGhyZXNob2xkPTUwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuYWN0aW9uPSdtb3ZlJ11cbiAgICogQHJldHVybnMgeyhCb29sZWFufERyYWdTb3J0Q29tbWFuZCl9XG4gICAqICAgLSBSZXR1cm5zIGZhbHNlIGlmIG5vIHZhbGlkIGluZGV4IHdhcyBmb3VuZC4gT3RoZXJ3aXNlIHJldHVybnMgZHJhZyBzb3J0XG4gICAqICAgICBjb21tYW5kLlxuICAgKi9cbiAgSXRlbURyYWcuZGVmYXVsdFNvcnRQcmVkaWNhdGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1SZWN0ID0ge307XG4gICAgdmFyIHRhcmdldFJlY3QgPSB7fTtcbiAgICB2YXIgcmV0dXJuRGF0YSA9IHt9O1xuICAgIHZhciByb290R3JpZEFycmF5ID0gW107XG5cbiAgICBmdW5jdGlvbiBnZXRUYXJnZXRHcmlkKGl0ZW0sIHJvb3RHcmlkLCB0aHJlc2hvbGQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBudWxsO1xuICAgICAgdmFyIGRyYWdTb3J0ID0gcm9vdEdyaWQuX3NldHRpbmdzLmRyYWdTb3J0O1xuICAgICAgdmFyIGJlc3RTY29yZSA9IC0xO1xuICAgICAgdmFyIGdyaWRTY29yZTtcbiAgICAgIHZhciBncmlkcztcbiAgICAgIHZhciBncmlkO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIEdldCBwb3RlbnRpYWwgdGFyZ2V0IGdyaWRzLlxuICAgICAgaWYgKGRyYWdTb3J0ID09PSB0cnVlKSB7XG4gICAgICAgIHJvb3RHcmlkQXJyYXlbMF0gPSByb290R3JpZDtcbiAgICAgICAgZ3JpZHMgPSByb290R3JpZEFycmF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZHMgPSBkcmFnU29ydC5jYWxsKHJvb3RHcmlkLCBpdGVtKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGFyZSBubyBncmlkcy5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShncmlkcykpIHJldHVybiB0YXJnZXQ7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgZ3JpZHMgYW5kIGdldCB0aGUgYmVzdCBtYXRjaC5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBncmlkID0gZ3JpZHNbaV07XG5cbiAgICAgICAgLy8gRmlsdGVyIG91dCBhbGwgZGVzdHJveWVkIGdyaWRzLlxuICAgICAgICBpZiAoZ3JpZC5faXNEZXN0cm95ZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIHRoZSBncmlkJ3Mgb2Zmc2V0cyBhbmQgZGltZW5zaW9ucyBzaW5jZSB0aGV5IG1pZ2h0XG4gICAgICAgIC8vIGhhdmUgY2hhbmdlZCAoZS5nIGR1cmluZyBzY3JvbGxpbmcpLlxuICAgICAgICBncmlkLl91cGRhdGVCb3VuZGluZ1JlY3QoKTtcblxuICAgICAgICAvLyBDaGVjayBob3cgbXVjaCBkcmFnZ2VkIGVsZW1lbnQgb3ZlcmxhcHMgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgICAgICB0YXJnZXRSZWN0LndpZHRoID0gZ3JpZC5fd2lkdGg7XG4gICAgICAgIHRhcmdldFJlY3QuaGVpZ2h0ID0gZ3JpZC5faGVpZ2h0O1xuICAgICAgICB0YXJnZXRSZWN0LmxlZnQgPSBncmlkLl9sZWZ0O1xuICAgICAgICB0YXJnZXRSZWN0LnRvcCA9IGdyaWQuX3RvcDtcbiAgICAgICAgZ3JpZFNjb3JlID0gZ2V0UmVjdE92ZXJsYXBTY29yZShpdGVtUmVjdCwgdGFyZ2V0UmVjdCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBncmlkIGlzIHRoZSBiZXN0IG1hdGNoIHNvIGZhci5cbiAgICAgICAgaWYgKGdyaWRTY29yZSA+IHRocmVzaG9sZCAmJiBncmlkU2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBncmlkU2NvcmU7XG4gICAgICAgICAgdGFyZ2V0ID0gZ3JpZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBbHdheXMgcmVzZXQgcm9vdCBncmlkIGFycmF5LlxuICAgICAgcm9vdEdyaWRBcnJheS5sZW5ndGggPSAwO1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihpdGVtLCBvcHRpb25zKSB7XG4gICAgICB2YXIgZHJhZyA9IGl0ZW0uX2RyYWc7XG4gICAgICB2YXIgcm9vdEdyaWQgPSBkcmFnLl9nZXRHcmlkKCk7XG5cbiAgICAgIC8vIEdldCBkcmFnIHNvcnQgcHJlZGljYXRlIHNldHRpbmdzLlxuICAgICAgdmFyIHNvcnRUaHJlc2hvbGQgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLnRocmVzaG9sZCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnRocmVzaG9sZCA6IDUwO1xuICAgICAgdmFyIHNvcnRBY3Rpb24gPSBvcHRpb25zICYmIG9wdGlvbnMuYWN0aW9uID09PSBhY3Rpb25Td2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG5cbiAgICAgIC8vIFBvcHVsYXRlIGl0ZW0gcmVjdCBkYXRhLlxuICAgICAgaXRlbVJlY3Qud2lkdGggPSBpdGVtLl93aWR0aDtcbiAgICAgIGl0ZW1SZWN0LmhlaWdodCA9IGl0ZW0uX2hlaWdodDtcbiAgICAgIGl0ZW1SZWN0LmxlZnQgPSBkcmFnLl9lbGVtZW50Q2xpZW50WDtcbiAgICAgIGl0ZW1SZWN0LnRvcCA9IGRyYWcuX2VsZW1lbnRDbGllbnRZO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHRhcmdldCBncmlkLlxuICAgICAgdmFyIGdyaWQgPSBnZXRUYXJnZXRHcmlkKGl0ZW0sIHJvb3RHcmlkLCBzb3J0VGhyZXNob2xkKTtcblxuICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlIGZvdW5kIG5vIGdyaWQgY29udGFpbmVyIGVsZW1lbnQgdGhhdCBvdmVybGFwcyB0aGVcbiAgICAgIC8vIGRyYWdnZWQgaXRlbSBlbm91Z2guXG4gICAgICBpZiAoIWdyaWQpIHJldHVybiBmYWxzZTtcblxuICAgICAgdmFyIGdyaWRPZmZzZXRMZWZ0ID0gMDtcbiAgICAgIHZhciBncmlkT2Zmc2V0VG9wID0gMDtcbiAgICAgIHZhciBtYXRjaFNjb3JlID0gLTE7XG4gICAgICB2YXIgbWF0Y2hJbmRleDtcbiAgICAgIHZhciBoYXNWYWxpZFRhcmdldHM7XG4gICAgICB2YXIgdGFyZ2V0O1xuICAgICAgdmFyIHNjb3JlO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIElmIGl0ZW0gaXMgbW92ZWQgd2l0aGluIGl0J3Mgb3JpZ2luYXRpbmcgZ3JpZCBhZGp1c3QgaXRlbSdzIGxlZnQgYW5kXG4gICAgICAvLyB0b3AgcHJvcHMuIE90aGVyd2lzZSBpZiBpdGVtIGlzIG1vdmVkIHRvL3dpdGhpbiBhbm90aGVyIGdyaWQgZ2V0IHRoZVxuICAgICAgLy8gY29udGFpbmVyIGVsZW1lbnQncyBvZmZzZXQgKGZyb20gdGhlIGVsZW1lbnQncyBjb250ZW50IGVkZ2UpLlxuICAgICAgaWYgKGdyaWQgPT09IHJvb3RHcmlkKSB7XG4gICAgICAgIGl0ZW1SZWN0LmxlZnQgPSBkcmFnLl9ncmlkWCArIGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgICAgIGl0ZW1SZWN0LnRvcCA9IGRyYWcuX2dyaWRZICsgaXRlbS5fbWFyZ2luVG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZC5fdXBkYXRlQm9yZGVycygxLCAwLCAxLCAwKTtcbiAgICAgICAgZ3JpZE9mZnNldExlZnQgPSBncmlkLl9sZWZ0ICsgZ3JpZC5fYm9yZGVyTGVmdDtcbiAgICAgICAgZ3JpZE9mZnNldFRvcCA9IGdyaWQuX3RvcCArIGdyaWQuX2JvcmRlclRvcDtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSB0YXJnZXQgZ3JpZCBpdGVtcyBhbmQgdHJ5IHRvIGZpbmQgdGhlIGJlc3QgbWF0Y2guXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZC5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0ID0gZ3JpZC5faXRlbXNbaV07XG5cbiAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpdGVtIGlzIG5vdCBhY3RpdmUgb3IgdGhlIHRhcmdldCBpdGVtIGlzIHRoZSBkcmFnZ2VkXG4gICAgICAgIC8vIGl0ZW0gbGV0J3Mgc2tpcCB0byB0aGUgbmV4dCBpdGVtLlxuICAgICAgICBpZiAoIXRhcmdldC5faXNBY3RpdmUgfHwgdGFyZ2V0ID09PSBpdGVtKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYXJrIHRoZSBncmlkIGFzIGhhdmluZyB2YWxpZCB0YXJnZXQgaXRlbXMuXG4gICAgICAgIGhhc1ZhbGlkVGFyZ2V0cyA9IHRydWU7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0YXJnZXQncyBvdmVybGFwIHNjb3JlIHdpdGggdGhlIGRyYWdnZWQgaXRlbS5cbiAgICAgICAgdGFyZ2V0UmVjdC53aWR0aCA9IHRhcmdldC5fd2lkdGg7XG4gICAgICAgIHRhcmdldFJlY3QuaGVpZ2h0ID0gdGFyZ2V0Ll9oZWlnaHQ7XG4gICAgICAgIHRhcmdldFJlY3QubGVmdCA9IHRhcmdldC5fbGVmdCArIHRhcmdldC5fbWFyZ2luTGVmdCArIGdyaWRPZmZzZXRMZWZ0O1xuICAgICAgICB0YXJnZXRSZWN0LnRvcCA9IHRhcmdldC5fdG9wICsgdGFyZ2V0Ll9tYXJnaW5Ub3AgKyBncmlkT2Zmc2V0VG9wO1xuICAgICAgICBzY29yZSA9IGdldFJlY3RPdmVybGFwU2NvcmUoaXRlbVJlY3QsIHRhcmdldFJlY3QpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBiZXN0IG1hdGNoIGluZGV4IGFuZCBzY29yZSBpZiB0aGUgdGFyZ2V0J3Mgb3ZlcmxhcCBzY29yZSB3aXRoXG4gICAgICAgIC8vIHRoZSBkcmFnZ2VkIGl0ZW0gaXMgaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgYmVzdCBtYXRjaCBzY29yZS5cbiAgICAgICAgaWYgKHNjb3JlID4gbWF0Y2hTY29yZSkge1xuICAgICAgICAgIG1hdGNoSW5kZXggPSBpO1xuICAgICAgICAgIG1hdGNoU2NvcmUgPSBzY29yZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyB2YWxpZCBtYXRjaCBhbmQgdGhlIGl0ZW0gaXMgYmVpbmcgbW92ZWQgaW50byBhbm90aGVyXG4gICAgICAvLyBncmlkLlxuICAgICAgaWYgKG1hdGNoU2NvcmUgPCBzb3J0VGhyZXNob2xkICYmIGl0ZW0uZ2V0R3JpZCgpICE9PSBncmlkKSB7XG4gICAgICAgIG1hdGNoSW5kZXggPSBoYXNWYWxpZFRhcmdldHMgPyAtMSA6IDA7XG4gICAgICAgIG1hdGNoU2NvcmUgPSBJbmZpbml0eTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGJlc3QgbWF0Y2ggb3ZlcmxhcHMgZW5vdWdoIHRvIGp1c3RpZnkgYSBwbGFjZW1lbnQgc3dpdGNoLlxuICAgICAgaWYgKG1hdGNoU2NvcmUgPj0gc29ydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5EYXRhLmdyaWQgPSBncmlkO1xuICAgICAgICByZXR1cm5EYXRhLmluZGV4ID0gbWF0Y2hJbmRleDtcbiAgICAgICAgcmV0dXJuRGF0YS5hY3Rpb24gPSBzb3J0QWN0aW9uO1xuICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFib3J0IGRyYWdnaW5nIGFuZCByZXNldCBkcmFnIGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbURyYWd9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG5cbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGJlaW5nIGRyb3BwZWQgaW50byBhbm90aGVyIGdyaWQsIGZpbmlzaCBpdCB1cCBhbmQgcmV0dXJuXG4gICAgLy8gaW1tZWRpYXRlbHkuXG4gICAgaWYgKHRoaXMuX2lzTWlncmF0aW5nKSB7XG4gICAgICB0aGlzLl9maW5pc2hNaWdyYXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBxdWV1ZWQgbW92ZSBhbmQgc2Nyb2xsIHRpY2tzLlxuICAgIGNhbmNlbE1vdmVUaWNrKGl0ZW0uX2lkKTtcbiAgICBjYW5jZWxTY3JvbGxUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFJlbW92ZSBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIHRoaXMuX3VuYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gQ2FuY2VsIG92ZXJsYXAgY2hlY2suXG4gICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoJ2NhbmNlbCcpO1xuXG4gICAgLy8gQXBwZW5kIGl0ZW0gZWxlbWVudCB0byB0aGUgY29udGFpbmVyIGlmIGl0J3Mgbm90IGl0J3MgY2hpbGQuIEFsc28gbWFrZVxuICAgIC8vIHN1cmUgdGhlIHRyYW5zbGF0ZSB2YWx1ZXMgYXJlIGFkanVzdGVkIHRvIGFjY291bnQgZm9yIHRoZSBET00gc2hpZnQuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gZ3JpZC5fZWxlbWVudCkge1xuICAgICAgZ3JpZC5fZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fZ3JpZFgsIHRoaXMuX2dyaWRZKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgZ3JpZC5fc2V0dGluZ3MuaXRlbURyYWdnaW5nQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgZHJhZyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtRHJhZ31cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9kcmFnZ2VyLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogR2V0IEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHJldHVybnMgez9HcmlkfVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9nZXRHcmlkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdyaWRJbnN0YW5jZXNbdGhpcy5fZ3JpZElkXSB8fCBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cC9yZXNldCBkcmFnIGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJcyBpdGVtIGJlaW5nIGRyYWdnZWQ/XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIC8vIFRoZSBkcmFnZ2VkIGl0ZW0ncyBjb250YWluZXIgZWxlbWVudC5cbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuXG4gICAgLy8gVGhlIGRyYWdnZWQgaXRlbSdzIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgdGhpcy5fY29udGFpbmluZ0Jsb2NrID0gbnVsbDtcblxuICAgIC8vIERyYWcvc2Nyb2xsIGV2ZW50IGRhdGEuXG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9zY3JvbGxFdmVudCA9IG51bGw7XG5cbiAgICAvLyBBbGwgdGhlIGVsZW1lbnRzIHdoaWNoIG5lZWQgdG8gYmUgbGlzdGVuZWQgZm9yIHNjcm9sbCBldmVudHMgZHVyaW5nXG4gICAgLy8gZHJhZ2dpbmcuXG4gICAgdGhpcy5fc2Nyb2xsZXJzID0gW107XG5cbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGVYL3RyYW5zbGF0ZVkgcG9zaXRpb24uXG4gICAgdGhpcy5fbGVmdCA9IDA7XG4gICAgdGhpcy5fdG9wID0gMDtcblxuICAgIC8vIERyYWdnZWQgZWxlbWVudCdzIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIHRoZSBncmlkLlxuICAgIHRoaXMuX2dyaWRYID0gMDtcbiAgICB0aGlzLl9ncmlkWSA9IDA7XG5cbiAgICAvLyBEcmFnZ2VkIGVsZW1lbnQncyBjdXJyZW50IG9mZnNldCBmcm9tIHdpbmRvdydzIG5vcnRod2VzdCBjb3JuZXIuIERvZXNcbiAgICAvLyBub3QgYWNjb3VudCBmb3IgZWxlbWVudCdzIG1hcmdpbnMuXG4gICAgdGhpcy5fZWxlbWVudENsaWVudFggPSAwO1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZID0gMDtcblxuICAgIC8vIE9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGRyYWdnZWQgZWxlbWVudCdzIHRlbXBvcmFyeSBkcmFnXG4gICAgLy8gY29udGFpbmVyIGFuZCBpdCdzIG9yaWdpbmFsIGNvbnRhaW5lci5cbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIHRvIGFsbCBzY3JvbGxhYmxlIGFuY2VzdG9yIGVsZW1lbnRzIG9mIHRoZVxuICAgKiBkcmFnZ2VkIGVsZW1lbnQgYW5kIHRoZSBkcmFnIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2JpbmRTY3JvbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IHRoaXMuX2dldEdyaWQoKS5fZWxlbWVudDtcbiAgICB2YXIgZHJhZ0NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB2YXIgc2Nyb2xsZXJzID0gdGhpcy5fc2Nyb2xsZXJzO1xuICAgIHZhciBncmlkU2Nyb2xsZXJzO1xuICAgIHZhciBpO1xuXG4gICAgLy8gR2V0IGRyYWdnZWQgZWxlbWVudCdzIHNjcm9sbGluZyBwYXJlbnRzLlxuICAgIHNjcm9sbGVycy5sZW5ndGggPSAwO1xuICAgIGdldFNjcm9sbGFibGVBbmNlc3RvcnModGhpcy5faXRlbS5fZWxlbWVudCwgZmFsc2UsIHNjcm9sbGVycyk7XG5cbiAgICAvLyBJZiBkcmFnIGNvbnRhaW5lciBpcyBkZWZpbmVkIGFuZCBpdCdzIG5vdCB0aGUgc2FtZSBlbGVtZW50IGFzIGdyaWRcbiAgICAvLyBjb250YWluZXIgdGhlbiB3ZSBuZWVkIHRvIGFkZCB0aGUgZ3JpZCBjb250YWluZXIgYW5kIGl0J3Mgc2Nyb2xsIHBhcmVudHNcbiAgICAvLyB0byB0aGUgZWxlbWVudHMgd2hpY2ggYXJlIGdvaW5nIHRvIGJlIGxpc3RlbmVyIGZvciBzY3JvbGwgZXZlbnRzLlxuICAgIGlmIChkcmFnQ29udGFpbmVyICE9PSBncmlkQ29udGFpbmVyKSB7XG4gICAgICBncmlkU2Nyb2xsZXJzID0gW107XG4gICAgICBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKGdyaWRDb250YWluZXIsIHRydWUsIGdyaWRTY3JvbGxlcnMpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRTY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjcm9sbGVycy5pbmRleE9mKGdyaWRTY3JvbGxlcnNbaV0pIDwgMCkge1xuICAgICAgICAgIHNjcm9sbGVycy5wdXNoKGdyaWRTY3JvbGxlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmluZCBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNjcm9sbGVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgY3VycmVudGx5IGJvdW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIGZyb20gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3JcbiAgICogZWxlbWVudHMgb2YgdGhlIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fdW5iaW5kU2Nyb2xsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcm9sbGVycyA9IHRoaXMuX3Njcm9sbGVycztcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNjcm9sbGVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsZXJzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGRlZmF1bHQgc3RhcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fc2V0dXBTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgY29uZmlnID0gb3B0aW9ucyB8fCB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZSB8fCAwO1xuICAgIHJldHVybiAodGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhID0ge1xuICAgICAgZGlzdGFuY2U6IE1hdGguYWJzKGNvbmZpZy5kaXN0YW5jZSkgfHwgMCxcbiAgICAgIGRlbGF5OiBNYXRoLm1heChjb25maWcuZGVsYXksIDApIHx8IDAsXG4gICAgICBoYW5kbGU6IHR5cGVvZiBjb25maWcuaGFuZGxlID09PSAnc3RyaW5nJyA/IGNvbmZpZy5oYW5kbGUgOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCBkZWZhdWx0IHN0YXJ0IHByZWRpY2F0ZSBoYW5kbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHs/SFRNTEVsZW1lbnR9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2dldFN0YXJ0UHJlZGljYXRlSGFuZGxlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcHJlZGljYXRlID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5faXRlbS5fZWxlbWVudDtcbiAgICB2YXIgaGFuZGxlRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBObyBoYW5kbGUsIG5vIGhhc3NsZSAtPiBsZXQncyB1c2UgdGhlIGl0ZW0gZWxlbWVudCBhcyB0aGUgaGFuZGxlLlxuICAgIGlmICghcHJlZGljYXRlLmhhbmRsZSkgcmV0dXJuIGhhbmRsZUVsZW1lbnQ7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNwZWNpZmljIHByZWRpY2F0ZSBoYW5kbGUgZGVmaW5lZCwgbGV0J3MgdHJ5IHRvIGdldCBpdC5cbiAgICBoYW5kbGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIHdoaWxlIChoYW5kbGVFbGVtZW50ICYmICFlbGVtZW50TWF0Y2hlcyhoYW5kbGVFbGVtZW50LCBwcmVkaWNhdGUuaGFuZGxlKSkge1xuICAgICAgaGFuZGxlRWxlbWVudCA9IGhhbmRsZUVsZW1lbnQgIT09IGVsZW1lbnQgPyBoYW5kbGVFbGVtZW50LnBhcmVudEVsZW1lbnQgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlRWxlbWVudCB8fCBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgY3VycmVudGx5IGJvdW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIGZyb20gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3JcbiAgICogZWxlbWVudHMgb2YgdGhlIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNvbHZlU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG5cbiAgICAvLyBJZiB0aGUgbW92ZWQgZGlzdGFuY2UgaXMgc21hbGxlciB0aGFuIHRoZSB0aHJlc2hvbGQgZGlzdGFuY2Ugb3IgdGhlcmUgaXNcbiAgICAvLyBzb21lIGRlbGF5IGxlZnQsIGlnbm9yZSB0aGlzIHByZWRpY2F0ZSBjeWNsZS5cbiAgICBpZiAoZXZlbnQuZGlzdGFuY2UgPCBwcmVkaWNhdGUuZGlzdGFuY2UgfHwgcHJlZGljYXRlLmRlbGF5KSByZXR1cm47XG5cbiAgICAvLyBHZXQgaGFuZGxlIHJlY3QgZGF0YS5cbiAgICB2YXIgaGFuZGxlUmVjdCA9IHByZWRpY2F0ZS5oYW5kbGVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBoYW5kbGVMZWZ0ID0gaGFuZGxlUmVjdC5sZWZ0ICsgKHdpbmRvdy5wYWdlWE9mZnNldCB8fCAwKTtcbiAgICB2YXIgaGFuZGxlVG9wID0gaGFuZGxlUmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IDApO1xuICAgIHZhciBoYW5kbGVXaWR0aCA9IGhhbmRsZVJlY3Qud2lkdGg7XG4gICAgdmFyIGhhbmRsZUhlaWdodCA9IGhhbmRsZVJlY3QuaGVpZ2h0O1xuXG4gICAgLy8gUmVzZXQgcHJlZGljYXRlIGRhdGEuXG4gICAgdGhpcy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuXG4gICAgLy8gSWYgdGhlIGN1cnNvciBpcyBzdGlsbCB3aXRoaW4gdGhlIGhhbmRsZSBsZXQncyBzdGFydCB0aGUgZHJhZy5cbiAgICByZXR1cm4gKFxuICAgICAgaGFuZGxlV2lkdGggJiZcbiAgICAgIGhhbmRsZUhlaWdodCAmJlxuICAgICAgZXZlbnQucGFnZVggPj0gaGFuZGxlTGVmdCAmJlxuICAgICAgZXZlbnQucGFnZVggPCBoYW5kbGVMZWZ0ICsgaGFuZGxlV2lkdGggJiZcbiAgICAgIGV2ZW50LnBhZ2VZID49IGhhbmRsZVRvcCAmJlxuICAgICAgZXZlbnQucGFnZVkgPCBoYW5kbGVUb3AgKyBoYW5kbGVIZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JjZWZ1bGx5IHJlc29sdmUgZHJhZyBzdGFydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2ZvcmNlUmVzb2x2ZVN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRGVzdHJveWVkICYmIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUGVuZGluZykge1xuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQ7XG4gICAgICB0aGlzLl9vblN0YXJ0KGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmFsaXplIHN0YXJ0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZmluaXNoU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5faXRlbS5fZWxlbWVudDtcblxuICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSBjbGljayAodmVyeSBzdWJqZWN0aXZlIGhldXJpc3RpY3MpLlxuICAgIHZhciBpc0NsaWNrID0gTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA8IDIgJiYgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSA8IDIgJiYgZXZlbnQuZGVsdGFUaW1lIDwgMjAwO1xuXG4gICAgLy8gUmVzZXQgcHJlZGljYXRlLlxuICAgIHRoaXMuX3Jlc2V0U3RhcnRQcmVkaWNhdGUoKTtcblxuICAgIC8vIElmIHRoZSBnZXN0dXJlIGNhbiBiZSBpbnRlcnByZXRlZCBhcyBjbGljayBsZXQncyB0cnkgdG8gb3BlbiB0aGUgZWxlbWVudCdzXG4gICAgLy8gaHJlZiB1cmwgKGlmIGl0IGlzIGFuIGFuY2hvciBlbGVtZW50KS5cbiAgICBpZiAoaXNDbGljaykgb3BlbkFuY2hvckhyZWYoZWxlbWVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IGRyYWcgc29ydCBoZXVyaXN0aWNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldEhldXJpc3RpY3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgIHRoaXMuX2hYMSA9IHRoaXMuX2hYMiA9IGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy5faFkxID0gdGhpcy5faFkyID0gZXZlbnQuY2xpZW50WTtcbiAgfTtcblxuICAvKipcbiAgICogUnVuIGhldXJpc3RpY3MgYW5kIHJldHVybiB0cnVlIGlmIG92ZXJsYXAgY2hlY2sgY2FuIGJlIHBlcmZvcm1lZCwgYW5kIGZhbHNlXG4gICAqIGlmIGl0IGNhbiBub3QuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9jaGVja0hldXJpc3RpY3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1NvcnRIZXVyaXN0aWNzO1xuICAgIHZhciBtaW5EaXN0ID0gc2V0dGluZ3MubWluRHJhZ0Rpc3RhbmNlO1xuXG4gICAgLy8gU2tpcCBoZXVyaXN0aWNzIGlmIG5vdCBuZWVkZWQuXG4gICAgaWYgKG1pbkRpc3QgPD0gMCkge1xuICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgeCA9IGV2ZW50LmNsaWVudFg7XG4gICAgdmFyIHkgPSBldmVudC5jbGllbnRZO1xuICAgIHZhciBkaWZmWCA9IHggLSB0aGlzLl9oWDI7XG4gICAgdmFyIGRpZmZZID0geSAtIHRoaXMuX2hZMjtcblxuICAgIC8vIElmIHdlIGNhbid0IGRvIHByb3BlciBib3VuY2UgYmFjayBjaGVjayBtYWtlIHN1cmUgdGhhdCB0aGUgYmxvY2tlZCBpbmRleFxuICAgIC8vIGlzIG5vdCBzZXQuXG4gICAgdmFyIGNhbkNoZWNrQm91bmNlQmFjayA9IG1pbkRpc3QgPiAzICYmIHNldHRpbmdzLm1pbkJvdW5jZUJhY2tBbmdsZSA+IDA7XG4gICAgaWYgKCFjYW5DaGVja0JvdW5jZUJhY2spIHtcbiAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiBtaW5EaXN0IHx8IE1hdGguYWJzKGRpZmZZKSA+IG1pbkRpc3QpIHtcbiAgICAgIC8vIFJlc2V0IGJsb2NrZWQgaW5kZXggaWYgYW5nbGUgY2hhbmdlZCBlbm91Z2guIFRoaXMgY2hlY2sgcmVxdWlyZXMgYVxuICAgICAgLy8gbWluaW11bSB2YWx1ZSBvZiAzIGZvciBtaW5EcmFnRGlzdGFuY2UgdG8gZnVuY3Rpb24gcHJvcGVybHkuXG4gICAgICBpZiAoY2FuQ2hlY2tCb3VuY2VCYWNrKSB7XG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoZGlmZlgsIGRpZmZZKTtcbiAgICAgICAgdmFyIHByZXZBbmdsZSA9IE1hdGguYXRhbjIodGhpcy5faFgyIC0gdGhpcy5faFgxLCB0aGlzLl9oWTIgLSB0aGlzLl9oWTEpO1xuICAgICAgICB2YXIgZGVsdGFBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5zaW4oYW5nbGUgLSBwcmV2QW5nbGUpLCBNYXRoLmNvcyhhbmdsZSAtIHByZXZBbmdsZSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFBbmdsZSkgPiBzZXR0aW5ncy5taW5Cb3VuY2VCYWNrQW5nbGUpIHtcbiAgICAgICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgcG9pbnRzLlxuICAgICAgdGhpcy5faFgxID0gdGhpcy5faFgyO1xuICAgICAgdGhpcy5faFkxID0gdGhpcy5faFkyO1xuICAgICAgdGhpcy5faFgyID0geDtcbiAgICAgIHRoaXMuX2hZMiA9IHk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzZXQgZm9yIGRlZmF1bHQgZHJhZyBzdGFydCBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzZXRTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG4gICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5kZWxheVRpbWVyKSB7XG4gICAgICAgIHByZWRpY2F0ZS5kZWxheVRpbWVyID0gd2luZG93LmNsZWFyVGltZW91dChwcmVkaWNhdGUuZGVsYXlUaW1lcik7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGEgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgKGR1cmluZyBkcmFnKSBpZiBhbiBpdGVtIGlzIG92ZXJsYXBwaW5nIG90aGVyIGl0ZW1zIGFuZCBiYXNlZCBvblxuICAgKiB0aGUgY29uZmlndXJhdGlvbiBsYXlvdXQgdGhlIGl0ZW1zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2NoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGN1cnJlbnRHcmlkO1xuICAgIHZhciBjdXJyZW50SW5kZXg7XG4gICAgdmFyIHRhcmdldEdyaWQ7XG4gICAgdmFyIHRhcmdldEluZGV4O1xuICAgIHZhciBzb3J0QWN0aW9uO1xuICAgIHZhciBpc01pZ3JhdGlvbjtcblxuICAgIC8vIEdldCBvdmVybGFwIGNoZWNrIHJlc3VsdC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU29ydFByZWRpY2F0ZSkpIHtcbiAgICAgIHJlc3VsdCA9IHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKGl0ZW0sIHRoaXMuX2RyYWdFdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IEl0ZW1EcmFnLmRlZmF1bHRTb3J0UHJlZGljYXRlKGl0ZW0sIHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKTtcbiAgICB9XG5cbiAgICAvLyBMZXQncyBtYWtlIHN1cmUgdGhlIHJlc3VsdCBvYmplY3QgaGFzIGEgdmFsaWQgaW5kZXggYmVmb3JlIGdvaW5nIGZ1cnRoZXIuXG4gICAgaWYgKCFyZXN1bHQgfHwgdHlwZW9mIHJlc3VsdC5pbmRleCAhPT0gJ251bWJlcicpIHJldHVybjtcblxuICAgIGN1cnJlbnRHcmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdGFyZ2V0R3JpZCA9IHJlc3VsdC5ncmlkIHx8IGN1cnJlbnRHcmlkO1xuICAgIGlzTWlncmF0aW9uID0gY3VycmVudEdyaWQgIT09IHRhcmdldEdyaWQ7XG4gICAgY3VycmVudEluZGV4ID0gY3VycmVudEdyaWQuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdGFyZ2V0SW5kZXggPSBub3JtYWxpemVBcnJheUluZGV4KHRhcmdldEdyaWQuX2l0ZW1zLCByZXN1bHQuaW5kZXgsIGlzTWlncmF0aW9uKTtcbiAgICBzb3J0QWN0aW9uID0gcmVzdWx0LmFjdGlvbiA9PT0gYWN0aW9uU3dhcCA/IGFjdGlvblN3YXAgOiBhY3Rpb25Nb3ZlO1xuXG4gICAgLy8gUHJldmVudCBwb3NpdGlvbiBib3VuY2UuXG4gICAgaWYgKCFpc01pZ3JhdGlvbiAmJiB0YXJnZXRJbmRleCA9PT0gdGhpcy5faEJsb2NrZWRJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIHdhcyBtb3ZlZCB3aXRoaW4gaXQncyBjdXJyZW50IGdyaWQuXG4gICAgaWYgKCFpc01pZ3JhdGlvbikge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSB0YXJnZXQgaW5kZXggaXMgbm90IHRoZSBjdXJyZW50IGluZGV4LlxuICAgICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IGN1cnJlbnRJbmRleDtcblxuICAgICAgICAvLyBEbyB0aGUgc29ydC5cbiAgICAgICAgKHNvcnRBY3Rpb24gPT09IGFjdGlvblN3YXAgPyBhcnJheVN3YXAgOiBhcnJheU1vdmUpKFxuICAgICAgICAgIGN1cnJlbnRHcmlkLl9pdGVtcyxcbiAgICAgICAgICBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdGFyZ2V0SW5kZXhcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBFbWl0IG1vdmUgZXZlbnQuXG4gICAgICAgIGlmIChjdXJyZW50R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50TW92ZSkpIHtcbiAgICAgICAgICBjdXJyZW50R3JpZC5fZW1pdChldmVudE1vdmUsIHtcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4LFxuICAgICAgICAgICAgYWN0aW9uOiBzb3J0QWN0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXlvdXQgdGhlIGdyaWQuXG4gICAgICAgIGN1cnJlbnRHcmlkLmxheW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIHdhcyBtb3ZlZCB0byBhbm90aGVyIGdyaWQuXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcblxuICAgICAgLy8gRW1pdCBiZWZvcmVTZW5kIGV2ZW50LlxuICAgICAgaWYgKGN1cnJlbnRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVTZW5kKSkge1xuICAgICAgICBjdXJyZW50R3JpZC5fZW1pdChldmVudEJlZm9yZVNlbmQsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgYmVmb3JlUmVjZWl2ZSBldmVudC5cbiAgICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVSZWNlaXZlKSkge1xuICAgICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50QmVmb3JlUmVjZWl2ZSwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGl0ZW0ncyBncmlkIGlkIHJlZmVyZW5jZS5cbiAgICAgIGl0ZW0uX2dyaWRJZCA9IHRhcmdldEdyaWQuX2lkO1xuXG4gICAgICAvLyBVcGRhdGUgZHJhZyBpbnN0YW5jZSdzIG1pZ3JhdGluZyBpbmRpY2F0b3IuXG4gICAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGl0ZW0uX2dyaWRJZCAhPT0gdGhpcy5fZ3JpZElkO1xuXG4gICAgICAvLyBNb3ZlIGl0ZW0gaW5zdGFuY2UgZnJvbSBjdXJyZW50IGdyaWQgdG8gdGFyZ2V0IGdyaWQuXG4gICAgICBjdXJyZW50R3JpZC5faXRlbXMuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XG4gICAgICBhcnJheUluc2VydCh0YXJnZXRHcmlkLl9pdGVtcywgaXRlbSwgdGFyZ2V0SW5kZXgpO1xuXG4gICAgICAvLyBTZXQgc29ydCBkYXRhIGFzIG51bGwsIHdoaWNoIGlzIGFuIGluZGljYXRvciBmb3IgdGhlIGl0ZW0gY29tcGFyaXNvblxuICAgICAgLy8gZnVuY3Rpb24gdGhhdCB0aGUgc29ydCBkYXRhIG9mIHRoaXMgc3BlY2lmaWMgaXRlbSBzaG91bGQgYmUgZmV0Y2hlZFxuICAgICAgLy8gbGF6aWx5LlxuICAgICAgaXRlbS5fc29ydERhdGEgPSBudWxsO1xuXG4gICAgICAvLyBFbWl0IHNlbmQgZXZlbnQuXG4gICAgICBpZiAoY3VycmVudEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFNlbmQpKSB7XG4gICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50U2VuZCwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCByZWNlaXZlIGV2ZW50LlxuICAgICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFJlY2VpdmUpKSB7XG4gICAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRSZWNlaXZlLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBMYXlvdXQgYm90aCBncmlkcy5cbiAgICAgIGN1cnJlbnRHcmlkLmxheW91dCgpO1xuICAgICAgdGFyZ2V0R3JpZC5sYXlvdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIGl0ZW0gaXMgZHJhZ2dlZCBpbnRvIGFub3RoZXIgZ3JpZCwgZmluaXNoIHRoZSBtaWdyYXRpb24gcHJvY2Vzc1xuICAgKiBncmFjZWZ1bGx5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2ZpbmlzaE1pZ3JhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBpc0FjdGl2ZSA9IGl0ZW0uX2lzQWN0aXZlO1xuICAgIHZhciB0YXJnZXRHcmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHRhcmdldEdyaWRFbGVtZW50ID0gdGFyZ2V0R3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdGFyZ2V0U2V0dGluZ3MgPSB0YXJnZXRHcmlkLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVyID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0NvbnRhaW5lciB8fCB0YXJnZXRHcmlkRWxlbWVudDtcbiAgICB2YXIgY3VycmVudFNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgY3VycmVudENvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB2YXIgdHJhbnNsYXRlO1xuICAgIHZhciBvZmZzZXREaWZmO1xuXG4gICAgLy8gRGVzdHJveSBjdXJyZW50IGRyYWcuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIHNldCB0aGUgbWlncmF0aW5nIGZsYWcgdG9cbiAgICAvLyBmYWxzZSBmaXJzdCwgYmVjYXVzZSBvdGhlcndpc2Ugd2UgY3JlYXRlIGFuIGluZmluaXRlIGxvb3AgYmV0d2VlbiB0aGlzXG4gICAgLy8gYW5kIHRoZSBkcmFnLnN0b3AoKSBtZXRob2QuXG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSBjdXJyZW50IGNsYXNzbmFtZXMuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGN1cnJlbnRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gQWRkIG5ldyBjbGFzc25hbWVzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHRhcmdldFNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgaXNBY3RpdmUgPyB0YXJnZXRTZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzIDogdGFyZ2V0U2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIE1vdmUgdGhlIGl0ZW0gaW5zaWRlIHRoZSB0YXJnZXQgY29udGFpbmVyIGlmIGl0J3MgZGlmZmVyZW50IHRoYW4gdGhlXG4gICAgLy8gY3VycmVudCBjb250YWluZXIuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYoY3VycmVudENvbnRhaW5lciwgdGFyZ2V0Q29udGFpbmVyLCB0cnVlKTtcbiAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgIHRyYW5zbGF0ZS54IC09IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRyYW5zbGF0ZS55IC09IG9mZnNldERpZmYudG9wO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpdGVtJ3MgY2FjaGVkIGRpbWVuc2lvbnMgYW5kIHNvcnQgZGF0YS5cbiAgICBpdGVtLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIGl0ZW0uX3JlZnJlc2hTb3J0RGF0YSgpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBvZmZzZXQgZGlmZmVyZW5jZSBiZXR3ZWVuIHRhcmdldCdzIGRyYWcgY29udGFpbmVyIChpZiBhbnkpXG4gICAgLy8gYW5kIGFjdHVhbCBncmlkIGNvbnRhaW5lciBlbGVtZW50LiBXZSBzYXZlIGl0IGxhdGVyIGZvciB0aGUgcmVsZWFzZVxuICAgIC8vIHByb2Nlc3MuXG4gICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYodGFyZ2V0Q29udGFpbmVyLCB0YXJnZXRHcmlkRWxlbWVudCwgdHJ1ZSk7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlggPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcblxuICAgIC8vIFJlY3JlYXRlIGl0ZW0ncyBkcmFnIGhhbmRsZXIuXG4gICAgaXRlbS5fZHJhZyA9IHRhcmdldFNldHRpbmdzLmRyYWdFbmFibGVkID8gbmV3IEl0ZW1EcmFnKGl0ZW0pIDogbnVsbDtcblxuICAgIC8vIEFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gZWxlbWVudCBpZiBpdCB3YXMgbW92ZWQgZnJvbSBhIGNvbnRhaW5lclxuICAgIC8vIHRvIGFub3RoZXIuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGUueCwgdHJhbnNsYXRlLnkpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjaGlsZCBlbGVtZW50J3Mgc3R5bGVzIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBzdGF0ZS5cbiAgICBpdGVtLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCBpc0FjdGl2ZSA/IHRhcmdldFNldHRpbmdzLnZpc2libGVTdHlsZXMgOiB0YXJnZXRTZXR0aW5ncy5oaWRkZW5TdHlsZXMpO1xuXG4gICAgLy8gU3RhcnQgdGhlIHJlbGVhc2UuXG4gICAgcmVsZWFzZS5zdGFydCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHByZS1zdGFydCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVTdGFydENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBMZXQncyBhY3RpdmF0ZSBkcmFnIHN0YXJ0IHByZWRpY2F0ZSBzdGF0ZS5cbiAgICBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZSkge1xuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUGVuZGluZztcbiAgICB9XG5cbiAgICAvLyBJZiBwcmVkaWNhdGUgaXMgcGVuZGluZyB0cnkgdG8gcmVzb2x2ZSBpdC5cbiAgICBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlKHRoaXMuX2l0ZW0sIGV2ZW50KTtcbiAgICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcbiAgICAgICAgdGhpcy5fb25TdGFydChldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZWplY3RlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgaWYgcHJlZGljYXRlIGlzIHJlc29sdmVkIGFuZCBkcmFnIGlzIGFjdGl2ZSwgbW92ZSB0aGUgaXRlbS5cbiAgICBlbHNlIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVJlc29sdmVkICYmIHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLl9vbk1vdmUoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBwcmUtZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZUVuZENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgc3RhcnQgcHJlZGljYXRlIHdhcyByZXNvbHZlZCBkdXJpbmcgZHJhZy5cbiAgICB2YXIgaXNSZXNvbHZlZCA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQ7XG5cbiAgICAvLyBEbyBmaW5hbCBwcmVkaWNhdGUgY2hlY2sgdG8gYWxsb3cgdXNlciB0byB1bmJpbmQgc3R1ZmYgZm9yIHRoZSBjdXJyZW50XG4gICAgLy8gZHJhZyBwcm9jZWR1cmUgd2l0aGluIHRoZSBwcmVkaWNhdGUgY2FsbGJhY2suIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpc1xuICAgIC8vIGNoZWNrIHdpbGwgaGF2ZSBubyBlZmZlY3QgdG8gdGhlIHN0YXRlIG9mIHRoZSBwcmVkaWNhdGUuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGUodGhpcy5faXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gUmVzZXQgc3RhcnQgcHJlZGljYXRlIHN0YXRlLlxuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZUluYWN0aXZlO1xuXG4gICAgLy8gSWYgcHJlZGljYXRlIGlzIHJlc29sdmVkIGFuZCBkcmFnZ2luZyBpcyBhY3RpdmUsIGNhbGwgdGhlIGVuZCBoYW5kbGVyLlxuICAgIGlmIChpc1Jlc29sdmVkICYmIHRoaXMuX2lzQWN0aXZlKSB0aGlzLl9vbkVuZChldmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgc3RhcnQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25TdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCBkb24ndCBzdGFydCB0aGUgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuICAgIHZhciBtaWdyYXRlID0gaXRlbS5fbWlncmF0ZTtcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIGRyYWdDb250YWluZXIgPSBzZXR0aW5ncy5kcmFnQ29udGFpbmVyIHx8IGdyaWRDb250YWluZXI7XG4gICAgdmFyIGNvbnRhaW5pbmdCbG9jayA9IGdldENvbnRhaW5pbmdCbG9jayhkcmFnQ29udGFpbmVyLCB0cnVlKTtcbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgIHZhciBjdXJyZW50TGVmdCA9IHRyYW5zbGF0ZS54O1xuICAgIHZhciBjdXJyZW50VG9wID0gdHJhbnNsYXRlLnk7XG4gICAgdmFyIGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgaGFzRHJhZ0NvbnRhaW5lciA9IGRyYWdDb250YWluZXIgIT09IGdyaWRDb250YWluZXI7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBSZXNldCBoZXVyaXN0aWNzIGRhdGEuXG4gICAgdGhpcy5fcmVzZXRIZXVyaXN0aWNzKGV2ZW50KTtcblxuICAgIC8vIElmIGdyaWQgY29udGFpbmVyIGlzIG5vdCB0aGUgZHJhZyBjb250YWluZXIsIHdlIG5lZWQgdG8gY2FsY3VsYXRlIHRoZVxuICAgIC8vIG9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gZ3JpZCBjb250YWluZXIgYW5kIGRyYWcgY29udGFpbmVyJ3MgY29udGFpbmluZ1xuICAgIC8vIGVsZW1lbnQuXG4gICAgaWYgKGhhc0RyYWdDb250YWluZXIpIHtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKGNvbnRhaW5pbmdCbG9jaywgZ3JpZENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IHBvc2l0aW9uaW5nIGFuaW1hdGlvbi5cbiAgICBpZiAoaXRlbS5pc1Bvc2l0aW9uaW5nKCkpIHtcbiAgICAgIGl0ZW0uX2xheW91dC5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcoY3VycmVudExlZnQsIGN1cnJlbnRUb3ApIH0pO1xuICAgIH1cblxuICAgIC8vIFN0b3AgY3VycmVudCBtaWdyYXRpb24gYW5pbWF0aW9uLlxuICAgIGlmIChtaWdyYXRlLl9pc0FjdGl2ZSkge1xuICAgICAgY3VycmVudExlZnQgLT0gbWlncmF0ZS5fY29udGFpbmVyRGlmZlg7XG4gICAgICBjdXJyZW50VG9wIC09IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgbWlncmF0ZS5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcoY3VycmVudExlZnQsIGN1cnJlbnRUb3ApIH0pO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgYmVpbmcgcmVsZWFzZWQgcmVzZXQgcmVsZWFzZSBkYXRhLlxuICAgIGlmIChpdGVtLmlzUmVsZWFzaW5nKCkpIHJlbGVhc2UuX3Jlc2V0KCk7XG5cbiAgICAvLyBTZXR1cCBkcmFnIGRhdGEuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2RyYWdFdmVudCA9IGV2ZW50O1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRyYWdDb250YWluZXI7XG4gICAgdGhpcy5fY29udGFpbmluZ0Jsb2NrID0gY29udGFpbmluZ0Jsb2NrO1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRYID0gZWxlbWVudFJlY3QubGVmdDtcbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WSA9IGVsZW1lbnRSZWN0LnRvcDtcbiAgICB0aGlzLl9sZWZ0ID0gdGhpcy5fZ3JpZFggPSBjdXJyZW50TGVmdDtcbiAgICB0aGlzLl90b3AgPSB0aGlzLl9ncmlkWSA9IGN1cnJlbnRUb3A7XG5cbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgKGlmIG5lY2Vzc2FyeSkuXG4gICAgaWYgKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5lbmFibGVkKSB7XG4gICAgICBpdGVtLl9kcmFnUGxhY2Vob2xkZXIuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBkcmFnSW5pdCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ0luaXQsIGl0ZW0sIGV2ZW50KTtcblxuICAgIC8vIElmIGEgc3BlY2lmaWMgZHJhZyBjb250YWluZXIgaXMgc2V0IGFuZCBpdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGVcbiAgICAvLyBncmlkJ3MgY29udGFpbmVyIGVsZW1lbnQgd2UgbmVlZCB0byBjYXN0IHNvbWUgZXh0cmEgc3BlbGxzLlxuICAgIGlmIChoYXNEcmFnQ29udGFpbmVyKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgY29udGFpbmVyIG9mZnNldCBkaWZmcyB0byBkcmFnIGRhdGEuXG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gb2Zmc2V0RGlmZi50b3A7XG5cbiAgICAgIC8vIElmIHRoZSBkcmFnZ2VkIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgZHJhZyBjb250YWluZXIgYWxsIHdlIG5lZWQgdG9cbiAgICAgIC8vIGRvIGlzIHNldHVwIHRoZSByZWxhdGl2ZSBkcmFnIHBvc2l0aW9uIGRhdGEuXG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlID09PSBkcmFnQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2dyaWRYID0gY3VycmVudExlZnQgLSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgICAgdGhpcy5fZ3JpZFkgPSBjdXJyZW50VG9wIC0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGFwcGVuZCB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGNvcnJlY3QgY29udGFpbmVyLFxuICAgICAgLy8gc2V0dXAgdGhlIGFjdHVhbCBkcmFnIHBvc2l0aW9uIGRhdGEgYW5kIGFkanVzdCB0aGUgZWxlbWVudCdzIHRyYW5zbGF0ZVxuICAgICAgLy8gdmFsdWVzIHRvIGFjY291bnQgZm9yIHRoZSBET00gcG9zaXRpb24gc2hpZnQuXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGVmdCA9IGN1cnJlbnRMZWZ0ICsgdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgICAgIHRoaXMuX3RvcCA9IGN1cnJlbnRUb3AgKyB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICAgICAgZHJhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9sZWZ0LCB0aGlzLl90b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBkcmFnIGNsYXNzIGFuZCBiaW5kIHNjcm9sbGVycy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtRHJhZ2dpbmdDbGFzcyk7XG4gICAgdGhpcy5fYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gRW1pdCBkcmFnU3RhcnQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdTdGFydCwgaXRlbSwgZXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIG1vdmUgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25Nb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIHJlc2V0IGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgYXhpcyA9IHNldHRpbmdzLmRyYWdBeGlzO1xuXG4gICAgLy8gVXBkYXRlIGhvcml6b250YWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3knKSB7XG4gICAgICB2YXIgeERpZmYgPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZHJhZ0V2ZW50LmNsaWVudFg7XG4gICAgICB0aGlzLl9sZWZ0ICs9IHhEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFggKz0geERpZmY7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xpZW50WCArPSB4RGlmZjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdmVydGljYWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3gnKSB7XG4gICAgICB2YXIgeURpZmYgPSBldmVudC5jbGllbnRZIC0gdGhpcy5fZHJhZ0V2ZW50LmNsaWVudFk7XG4gICAgICB0aGlzLl90b3AgKz0geURpZmY7XG4gICAgICB0aGlzLl9ncmlkWSArPSB5RGlmZjtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZICs9IHlEaWZmO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBldmVudCBkYXRhLlxuICAgIHRoaXMuX2RyYWdFdmVudCA9IGV2ZW50O1xuXG4gICAgLy8gRG8gbW92ZSBwcmVwYXJlL2FwcGx5IGhhbmRsaW5nIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkTW92ZVRpY2soaXRlbS5faWQsIHRoaXMuX3ByZXBhcmVNb3ZlLCB0aGlzLl9hcHBseU1vdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRyYWdnZWQgaXRlbSBmb3IgbW92aW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZXBhcmVNb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gRG8gbm90aGluZyBpZiBpdGVtIGlzIG5vdCBhY3RpdmUuXG4gICAgaWYgKCF0aGlzLl9pdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gSWYgZHJhZyBzb3J0IGlzIGVuYWJsZWQgLT4gY2hlY2sgb3ZlcmxhcC5cbiAgICBpZiAodGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnU29ydCkge1xuICAgICAgaWYgKHRoaXMuX2NoZWNrSGV1cmlzdGljcyh0aGlzLl9kcmFnRXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBseSBtb3ZlbWVudCB0byBkcmFnZ2VkIGl0ZW0uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fYXBwbHlNb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gRG8gbm90aGluZyBpZiBpdGVtIGlzIG5vdCBhY3RpdmUuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVXBkYXRlIGVsZW1lbnQncyB0cmFuc2xhdGVYL1kgdmFsdWVzLlxuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fbGVmdCwgdGhpcy5fdG9wKTtcblxuICAgIC8vIEVtaXQgZHJhZ01vdmUgZXZlbnQuXG4gICAgdGhpcy5fZ2V0R3JpZCgpLl9lbWl0KGV2ZW50RHJhZ01vdmUsIGl0ZW0sIHRoaXMuX2RyYWdFdmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgc2Nyb2xsIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25TY3JvbGwgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgbGFzdCBzY3JvbGwgZXZlbnQuXG4gICAgdGhpcy5fc2Nyb2xsRXZlbnQgPSBldmVudDtcblxuICAgIC8vIERvIHNjcm9sbCBwcmVwYXJlL2FwcGx5IGhhbmRsaW5nIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkU2Nyb2xsVGljayhpdGVtLl9pZCwgdGhpcy5fcHJlcGFyZVNjcm9sbCwgdGhpcy5fYXBwbHlTY3JvbGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRyYWdnZWQgaXRlbSBmb3Igc2Nyb2xsaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZXBhcmVTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUgZG8gbm90aGluZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGF4aXMgPSBzZXR0aW5ncy5kcmFnQXhpcztcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBDYWxjdWxhdGUgZWxlbWVudCdzIHJlY3QgYW5kIHgveSBkaWZmLlxuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgeERpZmYgPSB0aGlzLl9lbGVtZW50Q2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICB2YXIgeURpZmYgPSB0aGlzLl9lbGVtZW50Q2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgLy8gVXBkYXRlIGNvbnRhaW5lciBkaWZmLlxuICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IGdyaWRDb250YWluZXIpIHtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKHRoaXMuX2NvbnRhaW5pbmdCbG9jaywgZ3JpZENvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gb2Zmc2V0RGlmZi50b3A7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGhvcml6b250YWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3knKSB7XG4gICAgICB0aGlzLl9sZWZ0ICs9IHhEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFggPSB0aGlzLl9sZWZ0IC0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHZlcnRpY2FsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd4Jykge1xuICAgICAgdGhpcy5fdG9wICs9IHlEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFkgPSB0aGlzLl90b3AgLSB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICB9XG5cbiAgICAvLyBPdmVybGFwIGhhbmRsaW5nLlxuICAgIGlmIChzZXR0aW5ncy5kcmFnU29ydCkgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogQXBwbHkgc2Nyb2xsIHRvIGRyYWdnZWQgaXRlbS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9hcHBseVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSBkbyBub3RoaW5nLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFVwZGF0ZSBlbGVtZW50J3MgdHJhbnNsYXRlWC9ZIHZhbHVlcy5cbiAgICBpdGVtLl9lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2xlZnQsIHRoaXMuX3RvcCk7XG5cbiAgICAvLyBFbWl0IGRyYWdTY3JvbGwgZXZlbnQuXG4gICAgdGhpcy5fZ2V0R3JpZCgpLl9lbWl0KGV2ZW50RHJhZ1Njcm9sbCwgaXRlbSwgdGhpcy5fc2Nyb2xsRXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIGVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vbkVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIHJlc2V0IGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCBtb3ZlIGFuZCBzY3JvbGwgdGlja3MuXG4gICAgY2FuY2VsTW92ZVRpY2soaXRlbS5faWQpO1xuICAgIGNhbmNlbFNjcm9sbFRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gRmluaXNoIGN1cnJlbnRseSBxdWV1ZWQgb3ZlcmxhcCBjaGVjay5cbiAgICBzZXR0aW5ncy5kcmFnU29ydCAmJiB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgnZmluaXNoJyk7XG5cbiAgICAvLyBSZW1vdmUgc2Nyb2xsIGxpc3RlbmVycy5cbiAgICB0aGlzLl91bmJpbmRTY3JvbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIFNldHVwIHJlbGVhc2UgZGF0YS5cbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWCA9IHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZZID0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG5cbiAgICAvLyBSZXNldCBkcmFnIGRhdGEuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIFJlbW92ZSBkcmFnIGNsYXNzIG5hbWUgZnJvbSBlbGVtZW50LlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1EcmFnZ2luZ0NsYXNzKTtcblxuICAgIC8vIEVtaXQgZHJhZ0VuZCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ0VuZCwgaXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gRmluaXNoIHVwIHRoZSBtaWdyYXRpb24gcHJvY2VzcyBvciBzdGFydCB0aGUgcmVsZWFzZSBwcm9jZXNzLlxuICAgIHRoaXMuX2lzTWlncmF0aW5nID8gdGhpcy5fZmluaXNoTWlncmF0aW9uKCkgOiByZWxlYXNlLnN0YXJ0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgaGVscGVyc1xuICAgKiAqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBob3cgbWFueSBwZXJjZW50IHRoZSBpbnRlcnNlY3Rpb24gYXJlYSBvZiB0d28gcmVjdGFuZ2xlcyBpcyBmcm9tXG4gICAqIHRoZSBtYXhpbXVtIHBvdGVudGlhbCBpbnRlcnNlY3Rpb24gYXJlYSBiZXR3ZWVuIHRoZSByZWN0YW5nbGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKiAgIC0gQSBudW1iZXIgYmV0d2VlbiAwLTEwMC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFJlY3RPdmVybGFwU2NvcmUoYSwgYikge1xuICAgIC8vIFJldHVybiAwIGltbWVkaWF0ZWx5IGlmIHRoZSByZWN0YW5nbGVzIGRvIG5vdCBvdmVybGFwLlxuICAgIGlmIChcbiAgICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0IHx8XG4gICAgICBiLmxlZnQgKyBiLndpZHRoIDw9IGEubGVmdCB8fFxuICAgICAgYS50b3AgKyBhLmhlaWdodCA8PSBiLnRvcCB8fFxuICAgICAgYi50b3AgKyBiLmhlaWdodCA8PSBhLnRvcFxuICAgICkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBhcmVhJ3Mgd2lkdGgsIGhlaWdodCwgbWF4IGhlaWdodCBhbmQgbWF4IHdpZHRoLlxuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKGEubGVmdCArIGEud2lkdGgsIGIubGVmdCArIGIud2lkdGgpIC0gTWF0aC5tYXgoYS5sZWZ0LCBiLmxlZnQpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbihhLnRvcCArIGEuaGVpZ2h0LCBiLnRvcCArIGIuaGVpZ2h0KSAtIE1hdGgubWF4KGEudG9wLCBiLnRvcCk7XG4gICAgdmFyIG1heFdpZHRoID0gTWF0aC5taW4oYS53aWR0aCwgYi53aWR0aCk7XG4gICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWluKGEuaGVpZ2h0LCBiLmhlaWdodCk7XG5cbiAgICByZXR1cm4gKCh3aWR0aCAqIGhlaWdodCkgLyAobWF4V2lkdGggKiBtYXhIZWlnaHQpKSAqIDEwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGFuIGFuY2hvciBlbGVtZW50IGFuZCBvcGVuIHRoZSBocmVmIHVybCBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gb3BlbkFuY2hvckhyZWYoZWxlbWVudCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBhbmNob3IgZWxlbWVudC5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdhJykgcmV0dXJuO1xuXG4gICAgLy8gR2V0IGhyZWYgYW5kIG1ha2Ugc3VyZSBpdCBleGlzdHMuXG4gICAgdmFyIGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmICghaHJlZikgcmV0dXJuO1xuXG4gICAgLy8gRmluYWxseSBsZXQncyBuYXZpZ2F0ZSB0byB0aGUgbGluayBocmVmLlxuICAgIHZhciB0YXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFyZ2V0Jyk7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGhyZWYsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBwbGFjZWhvbGRlci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbURyYWdQbGFjZWhvbGRlcihpdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fYW5pbWF0ZSA9IG5ldyBJdGVtQW5pbWF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9ICcnO1xuICAgIHRoaXMuX2RpZE1pZ3JhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSAwO1xuICAgIHRoaXMuX25leHRMZWZ0ID0gMDtcbiAgICB0aGlzLl9uZXh0VG9wID0gMDtcblxuICAgIC8vIEJpbmQgYW5pbWF0aW9uIGhhbmRsZXJzLlxuICAgIHRoaXMuX3NldHVwQW5pbWF0aW9uID0gdGhpcy5fc2V0dXBBbmltYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbiA9IHRoaXMuX3N0YXJ0QW5pbWF0aW9uLmJpbmQodGhpcyk7XG5cbiAgICAvLyBCaW5kIGV2ZW50IGhhbmRsZXJzLlxuICAgIHRoaXMuX29uTGF5b3V0U3RhcnQgPSB0aGlzLl9vbkxheW91dFN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25MYXlvdXRFbmQgPSB0aGlzLl9vbkxheW91dEVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uUmVsZWFzZUVuZCA9IHRoaXMuX29uUmVsZWFzZUVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTWlncmF0ZSA9IHRoaXMuX29uTWlncmF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogTW92ZSBwbGFjZWhvbGRlciB0byBhIG5ldyBwb3NpdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25MYXlvdXRTdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuXG4gICAgLy8gRmluZCBvdXQgdGhlIGl0ZW0ncyBuZXcgKHVuYXBwbGllZCkgbGVmdCBhbmQgdG9wIHBvc2l0aW9uLlxuICAgIHZhciBpdGVtSW5kZXggPSBncmlkLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIHZhciBuZXh0TGVmdCA9IGdyaWQuX2xheW91dC5zbG90c1tpdGVtSW5kZXggKiAyXTtcbiAgICB2YXIgbmV4dFRvcCA9IGdyaWQuX2xheW91dC5zbG90c1tpdGVtSW5kZXggKiAyICsgMV07XG5cbiAgICAvLyBJZiBpdGVtJ3MgcG9zaXRpb24gZGlkIG5vdCBjaGFuZ2UgYW5kIHRoZSBpdGVtIGRpZCBub3QgbWlncmF0ZSB3ZSBjYW5cbiAgICAvLyBzYWZlbHkgc2tpcCBsYXlvdXQuXG4gICAgaWYgKCF0aGlzLl9kaWRNaWdyYXRlICYmIGl0ZW0uX2xlZnQgPT09IG5leHRMZWZ0ICYmIGl0ZW0uX3RvcCA9PT0gbmV4dFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNsb3RzIGRhdGEgaXMgY2FsY3VsYXRlZCB3aXRoIGl0ZW0gbWFyZ2lucyBhZGRlZCB0byB0aGVtIHNvIHdlIG5lZWQgdG8gYWRkXG4gICAgLy8gaXRlbSdzIGxlZnQgYW5kIHRvcCBtYXJnaW4gdG8gdGhlIHNsb3QgZGF0YSB0byBnZXQgdGhlIHBsYWNlaG9sZGVyJ3NcbiAgICAvLyBuZXh0IHBvc2l0aW9uLlxuICAgIG5leHRMZWZ0ICs9IGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgbmV4dFRvcCArPSBpdGVtLl9tYXJnaW5Ub3A7XG5cbiAgICAvLyBKdXN0IHNuYXAgdG8gbmV3IHBvc2l0aW9uIHdpdGhvdXQgYW55IGFuaW1hdGlvbnMgaWYgbm8gYW5pbWF0aW9uIGlzXG4gICAgLy8gcmVxdWlyZWQgb3IgaWYgcGxhY2Vob2xkZXIgbW92ZXMgYmV0d2VlbiBncmlkcy5cbiAgICB2YXIgYW5pbUVuYWJsZWQgPSBncmlkLl9zZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuZHVyYXRpb24gPiAwO1xuICAgIGlmICghYW5pbUVuYWJsZWQgfHwgdGhpcy5fZGlkTWlncmF0ZSkge1xuICAgICAgLy8gQ2FuY2VsIHBvdGVudGlhbCAocXVldWVkKSBsYXlvdXQgdGljay5cbiAgICAgIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCk7XG5cbiAgICAgIC8vIFNuYXAgcGxhY2Vob2xkZXIgdG8gY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgIHZhciB0YXJnZXRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKG5leHRMZWZ0LCBuZXh0VG9wKSB9O1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGUuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICB0aGlzLl9hbmltYXRlLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB0YXJnZXRTdHlsZXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBNb3ZlIHBsYWNlaG9sZGVyIGluc2lkZSBjb3JyZWN0IGNvbnRhaW5lciBhZnRlciBtaWdyYXRpb24uXG4gICAgICBpZiAodGhpcy5fZGlkTWlncmF0ZSkge1xuICAgICAgICBncmlkLmdldEVsZW1lbnQoKS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgdGhpcy5fZGlkTWlncmF0ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdGhlIHBsYWNlaG9sZGVyJ3MgbGF5b3V0IGFuaW1hdGlvbiBpbiB0aGUgbmV4dCB0aWNrLiBXZSBkbyB0aGlzIHRvXG4gICAgLy8gYXZvaWQgbGF5b3V0IHRocmFzaGluZy5cbiAgICB0aGlzLl9uZXh0TGVmdCA9IG5leHRMZWZ0O1xuICAgIHRoaXMuX25leHRUb3AgPSBuZXh0VG9wO1xuICAgIGFkZFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCwgdGhpcy5fc2V0dXBBbmltYXRpb24sIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBwbGFjZWhvbGRlciBmb3IgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fc2V0dXBBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSh0aGlzLl9lbGVtZW50KTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IHRyYW5zbGF0ZS54O1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSB0cmFuc2xhdGUueTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG4gICAgdmFyIGN1cnJlbnRMZWZ0ID0gdGhpcy5fY3VycmVudExlZnQ7XG4gICAgdmFyIGN1cnJlbnRUb3AgPSB0aGlzLl9jdXJyZW50VG9wO1xuICAgIHZhciBuZXh0TGVmdCA9IHRoaXMuX25leHRMZWZ0O1xuICAgIHZhciBuZXh0VG9wID0gdGhpcy5fbmV4dFRvcDtcbiAgICB2YXIgdGFyZ2V0U3R5bGVzID0geyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhuZXh0TGVmdCwgbmV4dFRvcCkgfTtcblxuICAgIC8vIElmIHBsYWNlaG9sZGVyIGlzIGFscmVhZHkgaW4gY29ycmVjdCBwb3NpdGlvbiBsZXQncyBqdXN0IHN0b3AgYW5pbWF0aW9uXG4gICAgLy8gYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAoY3VycmVudExlZnQgPT09IG5leHRMZWZ0ICYmIGN1cnJlbnRUb3AgPT09IG5leHRUb3ApIHtcbiAgICAgIGlmIChhbmltYXRpb24uaXNBbmltYXRpbmcoKSkgYW5pbWF0aW9uLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgbGV0J3Mgc3RhcnQgdGhlIGFuaW1hdGlvbi5cbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9pdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyO1xuICAgIHZhciBjdXJyZW50U3R5bGVzID0geyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfTtcbiAgICBhbmltYXRpb24uc3RhcnQoY3VycmVudFN0eWxlcywgdGFyZ2V0U3R5bGVzLCB7XG4gICAgICBkdXJhdGlvbjogc2V0dGluZ3MuZHVyYXRpb24sXG4gICAgICBlYXNpbmc6IHNldHRpbmdzLmVhc2luZyxcbiAgICAgIG9uRmluaXNoOiB0aGlzLl9vbkxheW91dEVuZFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMYXlvdXQgZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uTGF5b3V0RW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgZW5kIGhhbmRsZXIuIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbiBkcmFnUmVsZWFzZUVuZCBldmVudCBpc1xuICAgKiBlbWl0dGVkIGFuZCByZWNlaXZlcyB0aGUgZXZlbnQgZGF0YSBhcyBpdCdzIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25SZWxlYXNlRW5kID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLl9pZCA9PT0gdGhpcy5faXRlbS5faWQpIHtcbiAgICAgIC8vIElmIHRoZSBwbGFjZWhvbGRlciBpcyBub3QgYW5pbWF0aW5nIGFueW1vcmUgd2UgY2FuIHNhZmVseSByZXNldCBpdC5cbiAgICAgIGlmICghdGhpcy5fYW5pbWF0ZS5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgcGxhY2Vob2xkZXIgaXRlbSBpcyBzdGlsbCBhbmltYXRpbmcgaGVyZSwgbGV0J3Mgd2FpdCBmb3IgaXQgdG9cbiAgICAgIC8vIGZpbmlzaCBpdCdzIGFuaW1hdGlvbi5cbiAgICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogTWlncmF0aW9uIHN0YXJ0IGhhbmRsZXIuIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbiBiZWZvcmVTZW5kIGV2ZW50IGlzXG4gICAqIGVtaXR0ZWQgYW5kIHJlY2VpdmVzIHRoZSBldmVudCBkYXRhIGFzIGl0J3MgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge0l0ZW19IGRhdGEuaXRlbVxuICAgKiBAcGFyYW0ge0dyaWR9IGRhdGEuZnJvbUdyaWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuZnJvbUluZGV4XG4gICAqIEBwYXJhbSB7R3JpZH0gZGF0YS50b0dyaWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudG9JbmRleFxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uTWlncmF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIG1hdGNoaW5nIGl0ZW0uXG4gICAgaWYgKGRhdGEuaXRlbSAhPT0gdGhpcy5faXRlbSkgcmV0dXJuO1xuXG4gICAgdmFyIGdyaWQgPSB0aGlzLl9pdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgbmV4dEdyaWQgPSBkYXRhLnRvR3JpZDtcblxuICAgIC8vIFVuYmluZCBsaXN0ZW5lcnMgZnJvbSBjdXJyZW50IGdyaWQuXG4gICAgZ3JpZC5vZmYoZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBncmlkLm9mZihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBncmlkLm9mZihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBCaW5kIGxpc3RlbmVycyB0byB0aGUgbmV4dCBncmlkLlxuICAgIG5leHRHcmlkLm9uKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgbmV4dEdyaWQub24oZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgbmV4dEdyaWQub24oZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gTWFyayB0aGUgaXRlbSBhcyBtaWdyYXRlZC5cbiAgICB0aGlzLl9kaWRNaWdyYXRlID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ3JlYXRlIHBsYWNlaG9sZGVyLiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgb25seSB3cml0ZXMgdG8gRE9NIGFuZCBkb2VzIG5vdFxuICAgKiByZWFkIGFueXRoaW5nIGZyb20gRE9NIHNvIGl0IHNob3VsZCBub3QgY2F1c2UgYW55IGFkZGl0aW9uYWwgbGF5b3V0XG4gICAqIHRocmFzaGluZyB3aGVuIGl0J3MgY2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIGRyYWcgc3RhcnQgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHBsYWNlaG9sZGVyIHNldCB1cCB3ZSBjYW4gc2tpcCB0aGUgaW5pdGlhdGlvbiBsb2dpYy5cbiAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG5cbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICB2YXIgZWxlbWVudDtcbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnQgPSBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBVcGRhdGUgZWxlbWVudCB0byBhbmltYXRpb24gaW5zdGFuY2UuXG4gICAgYW5pbWF0aW9uLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIEFkZCBwbGFjZWhvbGRlciBjbGFzcyB0byB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBzZXR0aW5ncy5pdGVtUGxhY2Vob2xkZXJDbGFzcyB8fCAnJztcbiAgICBpZiAodGhpcy5fY2xhc3NOYW1lKSB7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIH1cblxuICAgIC8vIFBvc2l0aW9uIHRoZSBwbGFjZWhvbGRlciBpdGVtIGNvcnJlY3RseS5cbiAgICB2YXIgbGVmdCA9IGl0ZW0uX2xlZnQgKyBpdGVtLl9tYXJnaW5MZWZ0O1xuICAgIHZhciB0b3AgPSBpdGVtLl90b3AgKyBpdGVtLl9tYXJnaW5Ub3A7XG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgd2lkdGg6IGl0ZW0uX3dpZHRoICsgJ3B4JyxcbiAgICAgIGhlaWdodDogaXRlbS5faGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGxlZnQsIHRvcClcbiAgICB9KTtcblxuICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGdyaWQub24oZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgZ3JpZC5vbihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub24oZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gb25DcmVhdGUgaG9vay5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGUpKSB7XG4gICAgICBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGUoaXRlbSwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IHRoZSBwbGFjZWhvbGRlciBlbGVtZW50IHRvIHRoZSBncmlkLlxuICAgIGdyaWQuZ2V0RWxlbWVudCgpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCBwbGFjZWhvbGRlciBkYXRhLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRlO1xuXG4gICAgLy8gUmVzZXQgZmxhZy5cbiAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG5cbiAgICAvLyBDYW5jZWwgcG90ZW50aWFsIChxdWV1ZWQpIGxheW91dCB0aWNrLlxuICAgIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBSZXNldCBhbmltYXRpb24gaW5zdGFuY2UuXG4gICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICBhbmltYXRpb24uX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gVW5iaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICBncmlkLm9mZihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub2ZmKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIGdyaWQub2ZmKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIFJlbW92ZSBwbGFjZWhvbGRlciBjbGFzcyBmcm9tIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIGlmICh0aGlzLl9jbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgICB0aGlzLl9jbGFzc05hbWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZWxlbWVudC5cbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBvblJlbW92ZSBob29rLiBOb3RlIHRoYXQgaGVyZSB3ZSB1c2UgdGhlIGN1cnJlbnQgZ3JpZCdzIG9uUmVtb3ZlIGNhbGxiYWNrXG4gICAgLy8gc28gaWYgdGhlIGl0ZW0gaGFzIG1pZ3JhdGVkIGR1cmluZyBkcmFnIHRoZSBvblJlbW92ZSBtZXRob2Qgd2lsbCBub3QgYmVcbiAgICAvLyB0aGUgb3JpZ2luYXRpbmcgZ3JpZCdzIG1ldGhvZC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmUpKSB7XG4gICAgICBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmUoaXRlbSwgZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgcGxhY2Vob2xkZXIncyBkaW1lbnNpb25zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtoZWlnaHR9IGhlaWdodFxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUudXBkYXRlRGltZW5zaW9ucyA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICBzZXRTdHlsZXModGhpcy5fZWxlbWVudCwge1xuICAgICAgICB3aWR0aDogd2lkdGggKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGxhY2Vob2xkZXIgaXMgY3VycmVudGx5IGFjdGl2ZSAodmlzaWJsZSkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl9lbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHBsYWNlaG9sZGVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLl9hbmltYXRlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pdGVtID0gdGhpcy5fYW5pbWF0ZSA9IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFF1ZXVlIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFF1ZXVlKCkge1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBZGQgY2FsbGJhY2sgdG8gdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJvY2VzcyBxdWV1ZSBjYWxsYmFja3MgYW5kIHJlc2V0IHRoZSBxdWV1ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUXVldWUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Kn0gYXJnMVxuICAgKiBAcGFyYW0geyp9IGFyZzJcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgbGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUXVpdCBlYXJseSBpZiB0aGUgcXVldWUgaXMgZW1wdHkuXG4gICAgaWYgKCFsZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHNpbmdsZUNhbGxiYWNrID0gbGVuZ3RoID09PSAxO1xuICAgIHZhciBzbmFwc2hvdCA9IHNpbmdsZUNhbGxiYWNrID8gcXVldWVbMF0gOiBxdWV1ZS5zbGljZSgwKTtcblxuICAgIC8vIFJlc2V0IHF1ZXVlLlxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgY2FsbGJhY2sgbGV0J3MganVzdCBjYWxsIGl0LlxuICAgIGlmIChzaW5nbGVDYWxsYmFjaykge1xuICAgICAgc25hcHNob3QoYXJnMSwgYXJnMik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG11bHRpcGxlIGNhbGxiYWNrcywgbGV0J3MgcHJvY2VzcyB0aGVtLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc25hcHNob3RbaV0oYXJnMSwgYXJnMik7XG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IFF1ZXVlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3F1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogTGF5b3V0IG1hbmFnZXIgZm9yIEl0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1MYXlvdXQoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0ludGVycnVwdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY3VycmVudFN0eWxlcyA9IHt9O1xuICAgIHRoaXMuX3RhcmdldFN0eWxlcyA9IHt9O1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gMDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gMDtcbiAgICB0aGlzLl9vZmZzZXRMZWZ0ID0gMDtcbiAgICB0aGlzLl9vZmZzZXRUb3AgPSAwO1xuICAgIHRoaXMuX3NraXBOZXh0QW5pbWF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5fYW5pbWF0ZU9wdGlvbnMgPSB7XG4gICAgICBvbkZpbmlzaDogdGhpcy5fZmluaXNoLmJpbmQodGhpcylcbiAgICB9O1xuICAgIHRoaXMuX3F1ZXVlID0gbmV3IFF1ZXVlKCk7XG5cbiAgICAvLyBCaW5kIGFuaW1hdGlvbiBoYW5kbGVycyBhbmQgZmluaXNoIG1ldGhvZC5cbiAgICB0aGlzLl9zZXR1cEFuaW1hdGlvbiA9IHRoaXMuX3NldHVwQW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24gPSB0aGlzLl9zdGFydEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGl0ZW0gbGF5b3V0IGJhc2VkIG9uIGl0J3MgY3VycmVudCBkYXRhLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIGdyaWRTZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgaXNQb3NpdGlvbmluZyA9IHRoaXMuX2lzQWN0aXZlO1xuICAgIHZhciBpc0p1c3RSZWxlYXNlZCA9IHJlbGVhc2UuX2lzQWN0aXZlICYmIHJlbGVhc2UuX2lzUG9zaXRpb25pbmdTdGFydGVkID09PSBmYWxzZTtcbiAgICB2YXIgYW5pbUR1cmF0aW9uID0gaXNKdXN0UmVsZWFzZWRcbiAgICAgID8gZ3JpZFNldHRpbmdzLmRyYWdSZWxlYXNlRHVyYXRpb25cbiAgICAgIDogZ3JpZFNldHRpbmdzLmxheW91dER1cmF0aW9uO1xuICAgIHZhciBhbmltRWFzaW5nID0gaXNKdXN0UmVsZWFzZWQgPyBncmlkU2V0dGluZ3MuZHJhZ1JlbGVhc2VFYXNpbmcgOiBncmlkU2V0dGluZ3MubGF5b3V0RWFzaW5nO1xuICAgIHZhciBhbmltRW5hYmxlZCA9ICFpbnN0YW50ICYmICF0aGlzLl9za2lwTmV4dEFuaW1hdGlvbiAmJiBhbmltRHVyYXRpb24gPiAwO1xuICAgIHZhciBpc0FuaW1hdGluZztcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGN1cnJlbnRseSBwb3NpdGlvbmluZyBwcm9jZXNzIGN1cnJlbnQgbGF5b3V0IGNhbGxiYWNrXG4gICAgLy8gcXVldWUgd2l0aCBpbnRlcnJ1cHRlZCBmbGFnIG9uLlxuICAgIGlmIChpc1Bvc2l0aW9uaW5nKSB0aGlzLl9xdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcblxuICAgIC8vIE1hcmsgcmVsZWFzZSBwb3NpdGlvbmluZyBhcyBzdGFydGVkLlxuICAgIGlmIChpc0p1c3RSZWxlYXNlZCkgcmVsZWFzZS5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgLy8gUHVzaCB0aGUgY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGlmIChpc0Z1bmN0aW9uKG9uRmluaXNoKSkgdGhpcy5fcXVldWUuYWRkKG9uRmluaXNoKTtcblxuICAgIC8vIElmIG5vIGFuaW1hdGlvbnMgYXJlIG5lZWRlZCwgZWFzeSBwZWFzeSFcbiAgICBpZiAoIWFuaW1FbmFibGVkKSB7XG4gICAgICB0aGlzLl91cGRhdGVPZmZzZXRzKCk7XG4gICAgICB0aGlzLl91cGRhdGVUYXJnZXRTdHlsZXMoKTtcbiAgICAgIGlzQW5pbWF0aW5nID0gaXRlbS5fYW5pbWF0ZS5pc0FuaW1hdGluZygpO1xuICAgICAgdGhpcy5zdG9wKGZhbHNlLCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgIWlzQW5pbWF0aW5nICYmIHNldFN0eWxlcyhlbGVtZW50LCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgdGhpcy5fc2tpcE5leHRBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLl9maW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaXRlbSBhY3RpdmUgYW5kIHN0b3JlIHNvbWUgZGF0YSBmb3IgdGhlIGFuaW1hdGlvbiB0aGF0IGlzIGFib3V0IHRvIGJlXG4gICAgLy8gdHJpZ2dlcmVkLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9hbmltYXRlT3B0aW9ucy5lYXNpbmcgPSBhbmltRWFzaW5nO1xuICAgIHRoaXMuX2FuaW1hdGVPcHRpb25zLmR1cmF0aW9uID0gYW5pbUR1cmF0aW9uO1xuICAgIHRoaXMuX2lzSW50ZXJydXB0ZWQgPSBpc1Bvc2l0aW9uaW5nO1xuXG4gICAgLy8gU3RhcnQgdGhlIGl0ZW0ncyBsYXlvdXQgYW5pbWF0aW9uIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkTGF5b3V0VGljayhpdGVtLl9pZCwgdGhpcy5fc2V0dXBBbmltYXRpb24sIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIGl0ZW0ncyBwb3NpdGlvbiBhbmltYXRpb24gaWYgaXQgaXMgY3VycmVudGx5IGFuaW1hdGluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcHJvY2Vzc0NhbGxiYWNrUXVldWU9ZmFsc2VdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0U3R5bGVzXVxuICAgKiBAcmV0dXJucyB7SXRlbUxheW91dH1cbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihwcm9jZXNzQ2FsbGJhY2tRdWV1ZSwgdGFyZ2V0U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBDYW5jZWwgYW5pbWF0aW9uIGluaXQuXG4gICAgY2FuY2VsTGF5b3V0VGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBTdG9wIGFuaW1hdGlvbi5cbiAgICBpdGVtLl9hbmltYXRlLnN0b3AodGFyZ2V0U3R5bGVzKTtcblxuICAgIC8vIFJlbW92ZSBwb3NpdGlvbmluZyBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhpdGVtLl9lbGVtZW50LCBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuaXRlbVBvc2l0aW9uaW5nQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgYWN0aXZlIHN0YXRlLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAvLyBQcm9jZXNzIGNhbGxiYWNrIHF1ZXVlIGlmIG5lZWRlZC5cbiAgICBpZiAocHJvY2Vzc0NhbGxiYWNrUXVldWUpIHRoaXMuX3F1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKHRydWUsIHt9KTtcbiAgICB0aGlzLl9xdWV1ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5faXRlbSA9IHRoaXMuX2N1cnJlbnRTdHlsZXMgPSB0aGlzLl90YXJnZXRTdHlsZXMgPSB0aGlzLl9hbmltYXRlT3B0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgdXBkYXRlIGl0ZW0ncyBjdXJyZW50IGxheW91dCBvZmZzZXQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fdXBkYXRlT2Zmc2V0cyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBtaWdyYXRlID0gaXRlbS5fbWlncmF0ZTtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG5cbiAgICB0aGlzLl9vZmZzZXRMZWZ0ID0gcmVsZWFzZS5faXNBY3RpdmVcbiAgICAgID8gcmVsZWFzZS5fY29udGFpbmVyRGlmZlhcbiAgICAgIDogbWlncmF0ZS5faXNBY3RpdmVcbiAgICAgID8gbWlncmF0ZS5fY29udGFpbmVyRGlmZlhcbiAgICAgIDogMDtcblxuICAgIHRoaXMuX29mZnNldFRvcCA9IHJlbGVhc2UuX2lzQWN0aXZlXG4gICAgICA/IHJlbGVhc2UuX2NvbnRhaW5lckRpZmZZXG4gICAgICA6IG1pZ3JhdGUuX2lzQWN0aXZlXG4gICAgICA/IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZZXG4gICAgICA6IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgdXBkYXRlIGl0ZW0ncyBsYXlvdXQgdGFyZ2V0IHN0eWxlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fdXBkYXRlVGFyZ2V0U3R5bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdGhpcy5fdGFyZ2V0U3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgIHRoaXMuX2l0ZW0uX2xlZnQgKyB0aGlzLl9vZmZzZXRMZWZ0LFxuICAgICAgdGhpcy5faXRlbS5fdG9wICsgdGhpcy5fb2Zmc2V0VG9wXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIGl0ZW0gbGF5b3V0IHByb2NlZHVyZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIC8vIE1hcmsgdGhlIGl0ZW0gYXMgaW5hY3RpdmUgYW5kIHJlbW92ZSBwb3NpdGlvbmluZyBjbGFzc2VzLlxuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gRmluaXNoIHVwIHJlbGVhc2UgYW5kIG1pZ3JhdGlvbi5cbiAgICBpZiAocmVsZWFzZS5faXNBY3RpdmUpIHJlbGVhc2Uuc3RvcCgpO1xuICAgIGlmIChtaWdyYXRlLl9pc0FjdGl2ZSkgbWlncmF0ZS5zdG9wKCk7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgaXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgaXRlbSBmb3IgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fc2V0dXBBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKHRoaXMuX2l0ZW0uX2VsZW1lbnQpO1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IHRyYW5zbGF0ZS55O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgc2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgdGhlIG9mZnNldCBkYXRhIGFuZCB0YXJnZXQgc3R5bGVzLlxuICAgIHRoaXMuX3VwZGF0ZU9mZnNldHMoKTtcbiAgICB0aGlzLl91cGRhdGVUYXJnZXRTdHlsZXMoKTtcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGFscmVhZHkgaW4gY29ycmVjdCBwb3NpdGlvbiBsZXQncyBxdWl0IGVhcmx5LlxuICAgIGlmIChcbiAgICAgIGl0ZW0uX2xlZnQgPT09IHRoaXMuX2N1cnJlbnRMZWZ0IC0gdGhpcy5fb2Zmc2V0TGVmdCAmJlxuICAgICAgaXRlbS5fdG9wID09PSB0aGlzLl9jdXJyZW50VG9wIC0gdGhpcy5fb2Zmc2V0VG9wXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5faXNJbnRlcnJ1cHRlZCkgdGhpcy5zdG9wKGZhbHNlLCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNldCBpdGVtJ3MgcG9zaXRpb25pbmcgY2xhc3MgaWYgbmVlZGVkLlxuICAgIGlmICghdGhpcy5faXNJbnRlcnJ1cHRlZCkge1xuICAgICAgYWRkQ2xhc3MoaXRlbS5fZWxlbWVudCwgc2V0dGluZ3MuaXRlbVBvc2l0aW9uaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHN0eWxlcyBmb3IgYW5pbWF0aW9uLlxuICAgIHRoaXMuX2N1cnJlbnRTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2N1cnJlbnRMZWZ0LCB0aGlzLl9jdXJyZW50VG9wKTtcblxuICAgIC8vIEFuaW1hdGUuXG4gICAgaXRlbS5fYW5pbWF0ZS5zdGFydCh0aGlzLl9jdXJyZW50U3R5bGVzLCB0aGlzLl90YXJnZXRTdHlsZXMsIHRoaXMuX2FuaW1hdGVPcHRpb25zKTtcbiAgfTtcblxuICB2YXIgdGVtcFN0eWxlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgbWlncmF0ZSBwcm9jZXNzIGhhbmRsZXIgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1NaWdyYXRlKGl0ZW0pIHtcbiAgICAvLyBQcml2YXRlIHByb3BzLlxuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBtaWdyYXRlIHByb2Nlc3Mgb2YgYW4gaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZH0gdGFyZ2V0R3JpZFxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtjb250YWluZXJdXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKHRhcmdldEdyaWQsIHBvc2l0aW9uLCBjb250YWluZXIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgaXNWaXNpYmxlID0gaXRlbS5pc1Zpc2libGUoKTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRTZXR0aW5ncyA9IHRhcmdldEdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0R3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0YXJnZXRHcmlkLl9pdGVtcztcbiAgICB2YXIgY3VycmVudEluZGV4ID0gZ3JpZC5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVyID0gY29udGFpbmVyIHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICAgIHZhciB0YXJnZXRJbmRleDtcbiAgICB2YXIgdGFyZ2V0SXRlbTtcbiAgICB2YXIgY3VycmVudENvbnRhaW5lcjtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcbiAgICB2YXIgY29udGFpbmVyRGlmZjtcbiAgICB2YXIgdHJhbnNsYXRlO1xuICAgIHZhciB0cmFuc2xhdGVYO1xuICAgIHZhciB0cmFuc2xhdGVZO1xuXG4gICAgLy8gR2V0IHRhcmdldCBpbmRleC5cbiAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgdGFyZ2V0SW5kZXggPSBub3JtYWxpemVBcnJheUluZGV4KHRhcmdldEl0ZW1zLCBwb3NpdGlvbiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEl0ZW0gPSB0YXJnZXRHcmlkLl9nZXRJdGVtKHBvc2l0aW9uKTtcbiAgICAgIC8qKiBAdG9kbyBDb25zaWRlciB0aHJvd2luZyBhbiBlcnJvciBoZXJlIGluc3RlYWQgb2Ygc2lsZW50bHkgZmFpbGluZy4gKi9cbiAgICAgIGlmICghdGFyZ2V0SXRlbSkgcmV0dXJuIHRoaXM7XG4gICAgICB0YXJnZXRJbmRleCA9IHRhcmdldEl0ZW1zLmluZGV4T2YodGFyZ2V0SXRlbSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZXMgaWYgbmVlZGVkLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSB8fCB0aGlzLl9pc0FjdGl2ZSB8fCBpdGVtLmlzUmVsZWFzaW5nKCkpIHtcbiAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGUueDtcbiAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUueTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IHBvc2l0aW9uaW5nLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSkge1xuICAgICAgaXRlbS5fbGF5b3V0LnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IG1pZ3JhdGlvbi5cbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRyYW5zbGF0ZVggLT0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgICB0cmFuc2xhdGVZIC09IHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgdGhpcy5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkgfSk7XG4gICAgfVxuXG4gICAgLy8gQWJvcnQgY3VycmVudCByZWxlYXNlLlxuICAgIGlmIChpdGVtLmlzUmVsZWFzaW5nKCkpIHtcbiAgICAgIHRyYW5zbGF0ZVggLT0gaXRlbS5fcmVsZWFzZS5fY29udGFpbmVyRGlmZlg7XG4gICAgICB0cmFuc2xhdGVZIC09IGl0ZW0uX3JlbGVhc2UuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgaXRlbS5fcmVsZWFzZS5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IHZpc2liaWxpdHkgYW5pbWF0aW9ucy5cbiAgICBpdGVtLl92aXNpYmlsaXR5Ll9zdG9wQW5pbWF0aW9uKCk7XG5cbiAgICAvLyBEZXN0cm95IGN1cnJlbnQgZHJhZy5cbiAgICBpZiAoaXRlbS5fZHJhZykgaXRlbS5fZHJhZy5kZXN0cm95KCk7XG5cbiAgICAvLyBQcm9jZXNzIGN1cnJlbnQgdmlzaWJpbGl0eSBhbmltYXRpb24gcXVldWUuXG4gICAgaXRlbS5fdmlzaWJpbGl0eS5fcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG5cbiAgICAvLyBFbWl0IGJlZm9yZVNlbmQgZXZlbnQuXG4gICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVNlbmQpKSB7XG4gICAgICBncmlkLl9lbWl0KGV2ZW50QmVmb3JlU2VuZCwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEVtaXQgYmVmb3JlUmVjZWl2ZSBldmVudC5cbiAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlUmVjZWl2ZSkpIHtcbiAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRCZWZvcmVSZWNlaXZlLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGN1cnJlbnQgY2xhc3NuYW1lcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBBZGQgbmV3IGNsYXNzbmFtZXMuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgdGFyZ2V0U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc1Zpc2libGUgPyB0YXJnZXRTZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzIDogdGFyZ2V0U2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIE1vdmUgaXRlbSBpbnN0YW5jZSBmcm9tIGN1cnJlbnQgZ3JpZCB0byB0YXJnZXQgZ3JpZC5cbiAgICBncmlkLl9pdGVtcy5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcbiAgICBhcnJheUluc2VydCh0YXJnZXRJdGVtcywgaXRlbSwgdGFyZ2V0SW5kZXgpO1xuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBncmlkIGlkIHJlZmVyZW5jZS5cbiAgICBpdGVtLl9ncmlkSWQgPSB0YXJnZXRHcmlkLl9pZDtcblxuICAgIC8vIEdldCBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBjdXJyZW50Q29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgLy8gTW92ZSB0aGUgaXRlbSBpbnNpZGUgdGhlIHRhcmdldCBjb250YWluZXIgaWYgaXQncyBkaWZmZXJlbnQgdGhhbiB0aGVcbiAgICAvLyBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIGN1cnJlbnRDb250YWluZXIsIHRydWUpO1xuICAgICAgaWYgKCF0cmFuc2xhdGUpIHtcbiAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlLng7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUueTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICAgIHRyYW5zbGF0ZVggKyBvZmZzZXREaWZmLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVkgKyBvZmZzZXREaWZmLnRvcFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY2hpbGQgZWxlbWVudCdzIHN0eWxlcyB0byByZWZsZWN0IHRoZSBjdXJyZW50IHZpc2liaWxpdHkgc3RhdGUuXG4gICAgaXRlbS5fY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgaXNWaXNpYmxlID8gdGFyZ2V0U2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHRhcmdldFNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG5cbiAgICAvLyBVcGRhdGUgZGlzcGxheSBzdHlsZS5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyAnYmxvY2snIDogJ2hpZGRlbic7XG5cbiAgICAvLyBHZXQgb2Zmc2V0IGRpZmYgZm9yIHRoZSBtaWdyYXRpb24gZGF0YS5cbiAgICBjb250YWluZXJEaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIHRhcmdldEVsZW1lbnQsIHRydWUpO1xuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBjYWNoZWQgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIGl0ZW0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgaXRlbS5fcmVmcmVzaFNvcnREYXRhKCk7XG5cbiAgICAvLyBDcmVhdGUgbmV3IGRyYWcgaGFuZGxlci5cbiAgICBpdGVtLl9kcmFnID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0VuYWJsZWQgPyBuZXcgSXRlbURyYWcoaXRlbSkgOiBudWxsO1xuXG4gICAgLy8gU2V0dXAgbWlncmF0aW9uIGRhdGEuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRhcmdldENvbnRhaW5lcjtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IGNvbnRhaW5lckRpZmYubGVmdDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IGNvbnRhaW5lckRpZmYudG9wO1xuXG4gICAgLy8gRW1pdCBzZW5kIGV2ZW50LlxuICAgIGlmIChncmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRTZW5kKSkge1xuICAgICAgZ3JpZC5fZW1pdChldmVudFNlbmQsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHJlY2VpdmUgZXZlbnQuXG4gICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFJlY2VpdmUpKSB7XG4gICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50UmVjZWl2ZSwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgdGhlIG1pZ3JhdGUgcHJvY2VzcyBvZiBhbiBpdGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBhYm9ydCBhblxuICAgKiBvbmdvaW5nIG1pZ3JhdGUgcHJvY2VzcyAoYW5pbWF0aW9uKSBvciBmaW5pc2ggdGhlIG1pZ3JhdGUgcHJvY2Vzcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Fib3J0PWZhbHNlXVxuICAgKiAgLSBTaG91bGQgdGhlIG1pZ3JhdGlvbiBiZSBhYm9ydGVkP1xuICAgKiBAcGFyYW0ge09iamVjdH0gW2N1cnJlbnRTdHlsZXNdXG4gICAqICAtIE9wdGlvbmFsIGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSBzdHlsZXMuXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oYWJvcnQsIGN1cnJlbnRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgZ3JpZEVsZW1lbnQgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciB0cmFuc2xhdGU7XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBncmlkRWxlbWVudCkge1xuICAgICAgaWYgKCFjdXJyZW50U3R5bGVzKSB7XG4gICAgICAgIGlmIChhYm9ydCkge1xuICAgICAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICB0ZW1wU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgICAgIHRyYW5zbGF0ZS54IC0gdGhpcy5fY29udGFpbmVyRGlmZlgsXG4gICAgICAgICAgICB0cmFuc2xhdGUueSAtIHRoaXMuX2NvbnRhaW5lckRpZmZZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhpdGVtLl9sZWZ0LCBpdGVtLl90b3ApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSB0ZW1wU3R5bGVzO1xuICAgICAgfVxuICAgICAgZ3JpZEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgY3VycmVudFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSk7XG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciB0ZW1wU3R5bGVzJDEgPSB7fTtcblxuICAvKipcbiAgICogVGhlIHJlbGVhc2UgcHJvY2VzcyBoYW5kbGVyIGNvbnN0cnVjdG9yLiBBbHRob3VnaCB0aGlzIG1pZ2h0IHNlZW0gYXMgcHJvcGVyXG4gICAqIGZpdCBmb3IgdGhlIGRyYWcgcHJvY2VzcyB0aGlzIG5lZWRzIHRvIGJlIHNlcGFyYXRlZCBpbnRvIGl0J3Mgb3duIGxvZ2ljXG4gICAqIGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgYSBzY2VuYXJpbyB3aGVyZSBkcmFnIGlzIGRpc2FibGVkLCBidXQgdGhlIHJlbGVhc2VcbiAgICogcHJvY2VzcyBzdGlsbCBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZCAoZHJhZ2dpbmcgZnJvbSBhIGdyaWQgdG8gYW5vdGhlcikuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1SZWxlYXNlKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSByZWxlYXNlIHByb2Nlc3Mgb2YgYW4gaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcblxuICAgIC8vIEZsYWcgcmVsZWFzZSBhcyBhY3RpdmUuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gQWRkIHJlbGVhc2UgY2xhc3MgbmFtZSB0byB0aGUgcmVsZWFzZWQgZWxlbWVudC5cbiAgICBhZGRDbGFzcyhpdGVtLl9lbGVtZW50LCBncmlkLl9zZXR0aW5ncy5pdGVtUmVsZWFzaW5nQ2xhc3MpO1xuXG4gICAgLy8gRW1pdCBkcmFnUmVsZWFzZVN0YXJ0IGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnUmVsZWFzZVN0YXJ0LCBpdGVtKTtcblxuICAgIC8vIFBvc2l0aW9uIHRoZSByZWxlYXNlZCBpdGVtLlxuICAgIGl0ZW0uX2xheW91dC5zdGFydChmYWxzZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRW5kIHRoZSByZWxlYXNlIHByb2Nlc3Mgb2YgYW4gaXRlbS4gVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gYWJvcnQgYW5cbiAgICogb25nb2luZyByZWxlYXNlIHByb2Nlc3MgKGFuaW1hdGlvbikgb3IgZmluaXNoIHRoZSByZWxlYXNlIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFthYm9ydD1mYWxzZV1cbiAgICogIC0gU2hvdWxkIHRoZSByZWxlYXNlIGJlIGFib3J0ZWQ/IFdoZW4gdHJ1ZSwgdGhlIHJlbGVhc2UgZW5kIGV2ZW50IHdvbid0IGJlXG4gICAqICAgIGVtaXR0ZWQuIFNldCB0byB0cnVlIG9ubHkgd2hlbiB5b3UgbmVlZCB0byBhYm9ydCB0aGUgcmVsZWFzZSBwcm9jZXNzXG4gICAqICAgIHdoaWxlIHRoZSBpdGVtIGlzIGFuaW1hdGluZyB0byBpdCdzIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2N1cnJlbnRTdHlsZXNdXG4gICAqICAtIE9wdGlvbmFsIGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSBzdHlsZXMuXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oYWJvcnQsIGN1cnJlbnRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgY29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdHJhbnNsYXRlO1xuXG4gICAgLy8gUmVzZXQgZGF0YSBhbmQgcmVtb3ZlIHJlbGVhc2luZyBjbGFzcyBuYW1lIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIElmIHRoZSByZWxlYXNlZCBlbGVtZW50IGlzIG91dHNpZGUgdGhlIGdyaWQncyBjb250YWluZXIgZWxlbWVudCBwdXQgaXRcbiAgICAvLyBiYWNrIHRoZXJlIGFuZCBhZGp1c3QgcG9zaXRpb24gYWNjb3JkaW5nbHkuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gY29udGFpbmVyKSB7XG4gICAgICBpZiAoIWN1cnJlbnRTdHlsZXMpIHtcbiAgICAgICAgaWYgKGFib3J0KSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRlbXBTdHlsZXMkMS50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICAgICAgICB0cmFuc2xhdGUueCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYLFxuICAgICAgICAgICAgdHJhbnNsYXRlLnkgLSB0aGlzLl9jb250YWluZXJEaWZmWVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFN0eWxlcyQxLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhpdGVtLl9sZWZ0LCBpdGVtLl90b3ApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSB0ZW1wU3R5bGVzJDE7XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgY3VycmVudFN0eWxlcyk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBkcmFnUmVsZWFzZUVuZCBldmVudC5cbiAgICBpZiAoIWFib3J0KSBncmlkLl9lbWl0KGV2ZW50RHJhZ1JlbGVhc2VFbmQsIGl0ZW0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbVJlbGVhc2V9XG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKHRydWUpO1xuICAgIHRoaXMuX2l0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZXNldCBwdWJsaWMgZGF0YSBhbmQgcmVtb3ZlIHJlbGVhc2luZyBjbGFzcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzUG9zaXRpb25pbmdTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgICByZW1vdmVDbGFzcyhpdGVtLl9lbGVtZW50LCBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuaXRlbVJlbGVhc2luZ0NsYXNzKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgdmFsdWVzIG9mIHRoZSBwcm92aWRlZCBzdHlsZXMgZGVmaW5pdGlvbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDdXJyZW50U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIHZhciBjdXJyZW50ID0ge307XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIGN1cnJlbnRbcHJvcF0gPSBnZXRTdHlsZShlbGVtZW50LCBnZXRTdHlsZU5hbWUocHJvcCkpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXNpYmlsaXR5IG1hbmFnZXIgZm9yIEl0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1WaXNpYmlsaXR5KGl0ZW0pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSBpdGVtLl9pc0FjdGl2ZTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNldCB1cCB2aXNpYmlsaXR5IHN0YXRlcy5cbiAgICB0aGlzLl9pc0hpZGRlbiA9ICFpc0FjdGl2ZTtcbiAgICB0aGlzLl9pc0hpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgLy8gQ2FsbGJhY2sgcXVldWUuXG4gICAgdGhpcy5fcXVldWUgPSBuZXcgUXVldWUoKTtcblxuICAgIC8vIEJpbmQgc2hvdy9oaWRlIGZpbmlzaGVycy5cbiAgICB0aGlzLl9maW5pc2hTaG93ID0gdGhpcy5fZmluaXNoU2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2ZpbmlzaEhpZGUgPSB0aGlzLl9maW5pc2hIaWRlLmJpbmQodGhpcyk7XG5cbiAgICAvLyBGb3JjZSBpdGVtIHRvIGJlIGVpdGhlciB2aXNpYmxlIG9yIGhpZGRlbiBvbiBpbml0LlxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzQWN0aXZlID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgIC8vIFNldCB2aXNpYmxlL2hpZGRlbiBjbGFzcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc0FjdGl2ZSA/IHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgc3R5bGVzIGZvciB0aGUgY2hpbGQgZWxlbWVudC5cbiAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIGlzQWN0aXZlID8gc2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU2hvdyBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbnN0YW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1WaXNpYmlsaXR5fVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24ob25GaW5pc2gpID8gb25GaW5pc2ggOiBudWxsO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBJZiBpdGVtIGlzIHZpc2libGUgY2FsbCB0aGUgY2FsbGJhY2sgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd2luZyAmJiAhdGhpcy5faXNIaWRkZW4pIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGZhbHNlLCBpdGVtKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgc2hvd2luZyBhbmQgZG9lcyBub3QgbmVlZCB0byBiZSBzaG93biBpbnN0YW50bHksIGxldCdzIGp1c3RcbiAgICAvLyBwdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZSBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICh0aGlzLl9pc1Nob3dpbmcgJiYgIWluc3RhbnQpIHtcbiAgICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBoaWRpbmcgb3IgaGlkZGVuIHByb2Nlc3MgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBjYWxsYmFja1xuICAgIC8vIHF1ZXVlIHdpdGggdGhlIGludGVycnVwdGVkIGZsYWcgYWN0aXZlLCB1cGRhdGUgY2xhc3NlcyBhbmQgc2V0IGRpc3BsYXlcbiAgICAvLyB0byBibG9jayBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3dpbmcpIHtcbiAgICAgIHF1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgICAgaWYgKCF0aGlzLl9pc0hpZGluZykgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICAvLyBQdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuXG4gICAgLy8gVXBkYXRlIHZpc2liaWxpdHkgc3RhdGVzLlxuICAgIGl0ZW0uX2lzQWN0aXZlID0gdGhpcy5faXNTaG93aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9pc0hpZGluZyA9IHRoaXMuX2lzSGlkZGVuID0gZmFsc2U7XG5cbiAgICAvLyBGaW5hbGx5IGxldCdzIHN0YXJ0IHNob3cgYW5pbWF0aW9uLlxuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKHRydWUsIGluc3RhbnQsIHRoaXMuX2ZpbmlzaFNob3cpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGUgaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zdGFudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtJdGVtVmlzaWJpbGl0eX1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKG9uRmluaXNoKSA/IG9uRmluaXNoIDogbnVsbDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBhbHJlYWR5IGhpZGRlbiBjYWxsIHRoZSBjYWxsYmFjayBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICghdGhpcy5faXNIaWRpbmcgJiYgdGhpcy5faXNIaWRkZW4pIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGZhbHNlLCBpdGVtKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgaGlkaW5nIGFuZCBkb2VzIG5vdCBuZWVkIHRvIGJlIGhpZGRlbiBpbnN0YW50bHksIGxldCdzIGp1c3RcbiAgICAvLyBwdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZSBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICh0aGlzLl9pc0hpZGluZyAmJiAhaW5zdGFudCkge1xuICAgICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIHNob3dpbmcgb3IgdmlzaWJsZSBwcm9jZXNzIHRoZSBjdXJyZW50IHZpc2liaWxpdHkgY2FsbGJhY2tcbiAgICAvLyBxdWV1ZSB3aXRoIHRoZSBpbnRlcnJ1cHRlZCBmbGFnIGFjdGl2ZSwgdXBkYXRlIGNsYXNzZXMgYW5kIHNldCBkaXNwbGF5XG4gICAgLy8gdG8gYmxvY2sgaWYgbmVjZXNzYXJ5LlxuICAgIGlmICghdGhpcy5faXNIaWRpbmcpIHtcbiAgICAgIHF1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIFB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG5cbiAgICAvLyBVcGRhdGUgdmlzaWJpbGl0eSBzdGF0ZXMuXG4gICAgdGhpcy5faXNIaWRkZW4gPSB0aGlzLl9pc0hpZGluZyA9IHRydWU7XG4gICAgaXRlbS5faXNBY3RpdmUgPSB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcblxuICAgIC8vIEZpbmFsbHkgbGV0J3Mgc3RhcnQgaGlkZSBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24oZmFsc2UsIGluc3RhbnQsIHRoaXMuX2ZpbmlzaEhpZGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbVZpc2liaWxpdHl9XG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBTdG9wIHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgIHRoaXMuX3N0b3BBbmltYXRpb24oe30pO1xuXG4gICAgLy8gRmlyZSBhbGwgdW5jb21wbGV0ZWQgY2FsbGJhY2tzIHdpdGggaW50ZXJydXB0ZWQgZmxhZyBhbmQgZGVzdHJveSB0aGUgcXVldWUuXG4gICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSkuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIHZpc2libGUvaGlkZGVuIGNsYXNzZXMuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIFJlc2V0IHN0YXRlLlxuICAgIHRoaXMuX2l0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0aGlzLl9pc0hpZGRlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCB2aXNpYmlsaXR5IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvVmlzaWJsZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50XVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX3N0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24odG9WaXNpYmxlLCBpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0U3R5bGVzID0gdG9WaXNpYmxlID8gc2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHNldHRpbmdzLmhpZGRlblN0eWxlcztcbiAgICB2YXIgZHVyYXRpb24gPSBwYXJzZUludCh0b1Zpc2libGUgPyBzZXR0aW5ncy5zaG93RHVyYXRpb24gOiBzZXR0aW5ncy5oaWRlRHVyYXRpb24pIHx8IDA7XG4gICAgdmFyIGVhc2luZyA9ICh0b1Zpc2libGUgPyBzZXR0aW5ncy5zaG93RWFzaW5nIDogc2V0dGluZ3MuaGlkZUVhc2luZykgfHwgJ2Vhc2UnO1xuICAgIHZhciBpc0luc3RhbnQgPSBpbnN0YW50IHx8IGR1cmF0aW9uIDw9IDA7XG4gICAgdmFyIGN1cnJlbnRTdHlsZXM7XG5cbiAgICAvLyBObyB0YXJnZXQgc3R5bGVzPyBMZXQncyBxdWl0IGVhcmx5LlxuICAgIGlmICghdGFyZ2V0U3R5bGVzKSB7XG4gICAgICBvbkZpbmlzaCAmJiBvbkZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBxdWV1ZWQgdmlzaWJpbGl0eSB0aWNrLlxuICAgIGNhbmNlbFZpc2liaWxpdHlUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIElmIHdlIG5lZWQgdG8gYXBwbHkgdGhlIHN0eWxlcyBpbnN0YW50bHkgd2l0aG91dCBhbmltYXRpb24uXG4gICAgaWYgKGlzSW5zdGFudCkge1xuICAgICAgaWYgKGl0ZW0uX2FuaW1hdGVDaGlsZC5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIGl0ZW0uX2FuaW1hdGVDaGlsZC5zdG9wKHRhcmdldFN0eWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIHRhcmdldFN0eWxlcyk7XG4gICAgICB9XG4gICAgICBvbkZpbmlzaCAmJiBvbkZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb24gaW4gdGhlIG5leHQgdGljayAodG8gYXZvaWQgbGF5b3V0IHRocmFzaGluZykuXG4gICAgYWRkVmlzaWJpbGl0eVRpY2soXG4gICAgICBpdGVtLl9pZCxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjdXJyZW50U3R5bGVzID0gZ2V0Q3VycmVudFN0eWxlcyhpdGVtLl9jaGlsZCwgdGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0YXJ0KGN1cnJlbnRTdHlsZXMsIHRhcmdldFN0eWxlcywge1xuICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6IGVhc2luZyxcbiAgICAgICAgICBvbkZpbmlzaDogb25GaW5pc2hcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCB2aXNpYmlsaXR5IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldFN0eWxlc11cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fc3RvcEFuaW1hdGlvbiA9IGZ1bmN0aW9uKHRhcmdldFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICBjYW5jZWxWaXNpYmlsaXR5VGljayhpdGVtLl9pZCk7XG4gICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIHNob3cgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX2ZpbmlzaFNob3cgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNIaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgdGhpcy5faXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmlzaCBoaWRlIHByb2NlZHVyZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKi9cbiAgdmFyIGZpbmlzaFN0eWxlcyA9IHt9O1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX2ZpbmlzaEhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzSGlkZGVuKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gZmFsc2U7XG4gICAgZmluaXNoU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZygwLCAwKTtcbiAgICBpdGVtLl9sYXlvdXQuc3RvcCh0cnVlLCBmaW5pc2hTdHlsZXMpO1xuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgaXRlbSk7XG4gIH07XG5cbiAgdmFyIGlkID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHVuaXF1ZSBudW1lcmljIGlkIChpbmNyZW1lbnRzIGEgYmFzZSB2YWx1ZSBvbiBldmVyeSBjYWxsKS5cbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZVVpZCgpIHtcbiAgICByZXR1cm4gKytpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEl0ZW0gaW5zdGFuY2UgZm9yIGEgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzQWN0aXZlXVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbShncmlkLCBlbGVtZW50LCBpc0FjdGl2ZSkge1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIGlkLlxuICAgIHRoaXMuX2lkID0gY3JlYXRlVWlkKCk7XG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gY29ubmVjdGVkIEdyaWQgaW5zdGFuY2UncyBpZC5cbiAgICB0aGlzLl9ncmlkSWQgPSBncmlkLl9pZDtcblxuICAgIC8vIERlc3Ryb3llZCBmbGFnLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBwb3NpdGlvbnMuXG4gICAgdGhpcy5fbGVmdCA9IDA7XG4gICAgdGhpcy5fdG9wID0gMDtcblxuICAgIC8vIFRoZSBlbGVtZW50cy5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9jaGlsZCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG5cbiAgICAvLyBJZiB0aGUgcHJvdmlkZWQgaXRlbSBlbGVtZW50IGlzIG5vdCBhIGRpcmVjdCBjaGlsZCBvZiB0aGUgZ3JpZCBjb250YWluZXJcbiAgICAvLyBlbGVtZW50LCBhcHBlbmQgaXQgdG8gdGhlIGdyaWQgY29udGFpbmVyLlxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IGdyaWQuX2VsZW1lbnQpIHtcbiAgICAgIGdyaWQuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGl0ZW0gY2xhc3MuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUNsYXNzKTtcblxuICAgIC8vIElmIGlzQWN0aXZlIGlzIG5vdCBkZWZpbmVkLCBsZXQncyB0cnkgdG8gYXV0by1kZXRlY3QgaXQuXG4gICAgaWYgKHR5cGVvZiBpc0FjdGl2ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpc0FjdGl2ZSA9IGdldFN0eWxlKGVsZW1lbnQsICdkaXNwbGF5JykgIT09ICdub25lJztcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgYWN0aXZlIHN0YXRlIChkZWZpbmVzIGlmIHRoZSBpdGVtIGlzIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgbGF5b3V0XG4gICAgLy8gb3Igbm90KS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuXG4gICAgLy8gU2V0IGVsZW1lbnQncyBpbml0aWFsIHBvc2l0aW9uIHN0eWxlcy5cbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZygwLCAwKTtcblxuICAgIC8vIEluaXRpYXRlIGl0ZW0ncyBhbmltYXRpb24gY29udHJvbGxlcnMuXG4gICAgdGhpcy5fYW5pbWF0ZSA9IG5ldyBJdGVtQW5pbWF0ZShlbGVtZW50KTtcbiAgICB0aGlzLl9hbmltYXRlQ2hpbGQgPSBuZXcgSXRlbUFuaW1hdGUodGhpcy5fY2hpbGQpO1xuXG4gICAgLy8gU2V0dXAgdmlzaWJpbGl0eSBoYW5kbGVyLlxuICAgIHRoaXMuX3Zpc2liaWxpdHkgPSBuZXcgSXRlbVZpc2liaWxpdHkodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgbGF5b3V0IGhhbmRsZXIuXG4gICAgdGhpcy5fbGF5b3V0ID0gbmV3IEl0ZW1MYXlvdXQodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgbWlncmF0aW9uIGhhbmRsZXIgZGF0YS5cbiAgICB0aGlzLl9taWdyYXRlID0gbmV3IEl0ZW1NaWdyYXRlKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIHJlbGVhc2UgaGFuZGxlci4gTm90ZSB0aGF0IGFsdGhvdWdoIHRoaXMgaXMgZnVsbHkgbGlua2VkIHRvIGRyYWdnaW5nXG4gICAgLy8gdGhpcyBzdGlsbCBuZWVkcyB0byBiZSBhbHdheXMgaW5zdGFudGlhdGVkIHRvIGhhbmRsZSBtaWdyYXRpb24gc2NlbmFyaW9zXG4gICAgLy8gY29ycmVjdGx5LlxuICAgIHRoaXMuX3JlbGVhc2UgPSBuZXcgSXRlbVJlbGVhc2UodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgZHJhZyBwbGFjZWhvbGRlciBoYW5kbGVyLiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBpcyBmdWxseSBsaW5rZWQgdG9cbiAgICAvLyBkcmFnZ2luZyB0aGlzIHN0aWxsIG5lZWRzIHRvIGJlIGFsd2F5cyBpbnN0YW50aWF0ZWQgdG8gaGFuZGxlIG1pZ3JhdGlvblxuICAgIC8vIHNjZW5hcmlvcyBjb3JyZWN0bHkuXG4gICAgdGhpcy5fZHJhZ1BsYWNlaG9sZGVyID0gbmV3IEl0ZW1EcmFnUGxhY2Vob2xkZXIodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgZHJhZyBoYW5kbGVyLlxuICAgIHRoaXMuX2RyYWcgPSBzZXR0aW5ncy5kcmFnRW5hYmxlZCA/IG5ldyBJdGVtRHJhZyh0aGlzKSA6IG51bGw7XG5cbiAgICAvLyBTZXQgdXAgdGhlIGluaXRpYWwgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIHRoaXMuX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgdGhpcy5fcmVmcmVzaFNvcnREYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBncmlkIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRHcmlkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdyaWRJbnN0YW5jZXNbdGhpcy5fZ3JpZElkXTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIHdpZHRoLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIGhlaWdodC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIG1hcmdpbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqICAgLSBUaGUgcmV0dXJuZWQgb2JqZWN0IGNvbnRhaW5zIGxlZnQsIHJpZ2h0LCB0b3AgYW5kIGJvdHRvbSBwcm9wZXJ0aWVzXG4gICAqICAgICB3aGljaCBpbmRpY2F0ZSB0aGUgaXRlbSBlbGVtZW50J3MgY2FjaGVkIG1hcmdpbnMuXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRNYXJnaW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogdGhpcy5fbWFyZ2luTGVmdCxcbiAgICAgIHJpZ2h0OiB0aGlzLl9tYXJnaW5SaWdodCxcbiAgICAgIHRvcDogdGhpcy5fbWFyZ2luVG9wLFxuICAgICAgYm90dG9tOiB0aGlzLl9tYXJnaW5Cb3R0b21cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogICAtIFRoZSByZXR1cm5lZCBvYmplY3QgY29udGFpbnMgbGVmdCBhbmQgdG9wIHByb3BlcnRpZXMgd2hpY2ggaW5kaWNhdGUgdGhlXG4gICAqICAgICBpdGVtIGVsZW1lbnQncyBjYWNoZWQgcG9zaXRpb24gaW4gdGhlIGdyaWQuXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiB0aGlzLl9sZWZ0LFxuICAgICAgdG9wOiB0aGlzLl90b3BcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBhY3RpdmU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIHZpc2libGU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fdmlzaWJpbGl0eSAmJiAhdGhpcy5fdmlzaWJpbGl0eS5faXNIaWRkZW47XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIGFuaW1hdGVkIHRvIHZpc2libGU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNTaG93aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3Zpc2liaWxpdHkgJiYgdGhpcy5fdmlzaWJpbGl0eS5faXNTaG93aW5nKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgYW5pbWF0ZWQgdG8gaGlkZGVuP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzSGlkaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3Zpc2liaWxpdHkgJiYgdGhpcy5fdmlzaWJpbGl0eS5faXNIaWRpbmcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBwb3NpdGlvbmluZz9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Bvc2l0aW9uaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX2xheW91dCAmJiB0aGlzLl9sYXlvdXQuX2lzQWN0aXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgZHJhZ2dlZD9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX2RyYWcgJiYgdGhpcy5fZHJhZy5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyByZWxlYXNlZD9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1JlbGVhc2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl9yZWxlYXNlICYmIHRoaXMuX3JlbGVhc2UuX2lzQWN0aXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gZGVzdHJveWVkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzRGVzdHJveWVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGVzdHJveWVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlIGl0ZW0ncyBkaW1lbnNpb25zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9yZWZyZXNoRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGRlbikgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBkcmFnUGxhY2Vob2xkZXIgPSB0aGlzLl9kcmFnUGxhY2Vob2xkZXI7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAgdGhpcy5fd2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IHJlY3QuaGVpZ2h0O1xuXG4gICAgLy8gQ2FsY3VsYXRlIG1hcmdpbnMgKGlnbm9yZSBuZWdhdGl2ZSBtYXJnaW5zKS5cbiAgICB0aGlzLl9tYXJnaW5MZWZ0ID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tbGVmdCcpKTtcbiAgICB0aGlzLl9tYXJnaW5SaWdodCA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLXJpZ2h0JykpO1xuICAgIHRoaXMuX21hcmdpblRvcCA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLXRvcCcpKTtcbiAgICB0aGlzLl9tYXJnaW5Cb3R0b20gPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi1ib3R0b20nKSk7XG5cbiAgICAvLyBLZWVwIGRyYWcgcGxhY2Vob2xkZXIncyBkaW1lbnNpb25zIHN5bmNlZCB3aXRoIHRoZSBpdGVtJ3MuXG4gICAgaWYgKGRyYWdQbGFjZWhvbGRlcikge1xuICAgICAgZHJhZ1BsYWNlaG9sZGVyLnVwZGF0ZURpbWVuc2lvbnModGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaCBhbmQgc3RvcmUgaXRlbSdzIHNvcnQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5fcmVmcmVzaFNvcnREYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgZGF0YSA9ICh0aGlzLl9zb3J0RGF0YSA9IHt9KTtcbiAgICB2YXIgZ2V0dGVycyA9IHRoaXMuZ2V0R3JpZCgpLl9zZXR0aW5ncy5zb3J0RGF0YTtcbiAgICB2YXIgcHJvcDtcblxuICAgIGZvciAocHJvcCBpbiBnZXR0ZXJzKSB7XG4gICAgICBkYXRhW3Byb3BdID0gZ2V0dGVyc1twcm9wXSh0aGlzLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbW92ZUVsZW1lbnQ9ZmFsc2VdXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uKHJlbW92ZUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBpbmRleCA9IGdyaWQuX2l0ZW1zLmluZGV4T2YodGhpcyk7XG5cbiAgICAvLyBEZXN0cm95IGhhbmRsZXJzLlxuICAgIHRoaXMuX3JlbGVhc2UuZGVzdHJveSgpO1xuICAgIHRoaXMuX21pZ3JhdGUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2xheW91dC5kZXN0cm95KCk7XG4gICAgdGhpcy5fdmlzaWJpbGl0eS5kZXN0cm95KCk7XG4gICAgdGhpcy5fYW5pbWF0ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fYW5pbWF0ZUNoaWxkLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9kcmFnUGxhY2Vob2xkZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuX2RyYWcgJiYgdGhpcy5fZHJhZy5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgYWxsIGlubGluZSBzdHlsZXMuXG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgdGhpcy5fY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gY2xhc3MuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUNsYXNzKTtcblxuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gR3JpZCBpbnN0YW5jZSBpZiBpdCBzdGlsbCBleGlzdHMgdGhlcmUuXG4gICAgaW5kZXggPiAtMSAmJiBncmlkLl9pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gUmVtb3ZlIGVsZW1lbnQgZnJvbSBET00uXG4gICAgcmVtb3ZlRWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAvLyBSZXNldCBzdGF0ZS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZGVmYXVsdCBsYXlvdXQgYWxnb3JpdGhtIGZvciBNdXVyaS4gQmFzZWQgb24gTUFYUkVDVFMgYXBwcm9hY2hcbiAgICogYXMgZGVzY3JpYmVkIGJ5IEp1a2thIEp5bMOkbmtpIGluIGhpcyBzdXJ2ZXk6IFwiQSBUaG91c2FuZCBXYXlzIHRvIFBhY2sgdGhlXG4gICAqIEJpbiAtIEEgUHJhY3RpY2FsIEFwcHJvYWNoIHRvIFR3by1EaW1lbnNpb25hbCBSZWN0YW5nbGUgQmluIFBhY2tpbmcuXCIuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUGFja2VyKCkge1xuICAgIHRoaXMuX3Nsb3RzID0gW107XG4gICAgdGhpcy5fc2xvdFNpemVzID0gW107XG4gICAgdGhpcy5fZnJlZVNsb3RzID0gW107XG4gICAgdGhpcy5fbmV3U2xvdHMgPSBbXTtcbiAgICB0aGlzLl9yZWN0SXRlbSA9IHt9O1xuICAgIHRoaXMuX3JlY3RTdG9yZSA9IFtdO1xuICAgIHRoaXMuX3JlY3RJZCA9IDA7XG5cbiAgICAvLyBUaGUgbGF5b3V0IHJldHVybiBkYXRhLCB3aGljaCB3aWxsIGJlIHBvcHVsYXRlZCBpbiBnZXRMYXlvdXQuXG4gICAgdGhpcy5fbGF5b3V0ID0ge1xuICAgICAgc2xvdHM6IG51bGwsXG4gICAgICBzZXRXaWR0aDogZmFsc2UsXG4gICAgICBzZXRIZWlnaHQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IGZhbHNlLFxuICAgICAgaGVpZ2h0OiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBCaW5kIHNvcnQgaGFuZGxlcnMuXG4gICAgdGhpcy5fc29ydFJlY3RzTGVmdFRvcCA9IHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0ID0gdGhpcy5fc29ydFJlY3RzVG9wTGVmdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtW119IGl0ZW1zXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEBwYXJhbSB7TnVtYmVyW119IFtzbG90c11cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbGxHYXBzPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmhvcml6b250YWw9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxpZ25SaWdodD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGlnbkJvdHRvbT1mYWxzZV1cbiAgICogQHJldHVybnMge0xheW91dERhdGF9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLmdldExheW91dCA9IGZ1bmN0aW9uKGl0ZW1zLCB3aWR0aCwgaGVpZ2h0LCBzbG90cywgb3B0aW9ucykge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgdmFyIGZpbGxHYXBzID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmZpbGxHYXBzKTtcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmhvcml6b250YWwpO1xuICAgIHZhciBhbGlnblJpZ2h0ID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmFsaWduUmlnaHQpO1xuICAgIHZhciBhbGlnbkJvdHRvbSA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGlnbkJvdHRvbSk7XG4gICAgdmFyIHJvdW5kaW5nID0gISEob3B0aW9ucyAmJiBvcHRpb25zLnJvdW5kaW5nKTtcbiAgICB2YXIgc2xvdFNpemVzID0gdGhpcy5fc2xvdFNpemVzO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUmVzZXQgbGF5b3V0IGRhdGEuXG4gICAgbGF5b3V0LnNsb3RzID0gc2xvdHMgPyBzbG90cyA6IHRoaXMuX3Nsb3RzO1xuICAgIGxheW91dC53aWR0aCA9IGlzSG9yaXpvbnRhbCA/IDAgOiByb3VuZGluZyA/IE1hdGgucm91bmQod2lkdGgpIDogd2lkdGg7XG4gICAgbGF5b3V0LmhlaWdodCA9ICFpc0hvcml6b250YWwgPyAwIDogcm91bmRpbmcgPyBNYXRoLnJvdW5kKGhlaWdodCkgOiBoZWlnaHQ7XG4gICAgbGF5b3V0LnNldFdpZHRoID0gaXNIb3Jpem9udGFsO1xuICAgIGxheW91dC5zZXRIZWlnaHQgPSAhaXNIb3Jpem9udGFsO1xuXG4gICAgLy8gTWFrZSBzdXJlIHNsb3RzIGFuZCBzbG90IHNpemUgYXJyYXlzIGFyZSByZXNldC5cbiAgICBsYXlvdXQuc2xvdHMubGVuZ3RoID0gMDtcbiAgICBzbG90U2l6ZXMubGVuZ3RoID0gMDtcblxuICAgIC8vIE5vIG5lZWQgdG8gZ28gZnVydGhlciBpZiBpdGVtcyBkbyBub3QgZXhpc3QuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHJldHVybiBsYXlvdXQ7XG5cbiAgICAvLyBGaW5kIHNsb3RzIGZvciBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX2FkZFNsb3QoaXRlbXNbaV0sIGlzSG9yaXpvbnRhbCwgZmlsbEdhcHMsIHJvdW5kaW5nLCBhbGlnblJpZ2h0IHx8IGFsaWduQm90dG9tKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYWxpZ25tZW50IGlzIHNldCB0byByaWdodCB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgcmVzdWx0cy5cbiAgICBpZiAoYWxpZ25SaWdodCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxheW91dC5zbG90cy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgICBsYXlvdXQuc2xvdHNbaV0gPSBsYXlvdXQud2lkdGggLSAobGF5b3V0LnNsb3RzW2ldICsgc2xvdFNpemVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYWxpZ25tZW50IGlzIHNldCB0byBib3R0b20gd2UgbmVlZCB0byBhZGp1c3QgdGhlIHJlc3VsdHMuXG4gICAgaWYgKGFsaWduQm90dG9tKSB7XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbGF5b3V0LnNsb3RzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgIGxheW91dC5zbG90c1tpXSA9IGxheW91dC5oZWlnaHQgLSAobGF5b3V0LnNsb3RzW2ldICsgc2xvdFNpemVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXNldCBzbG90cyBhcnJheXMgYW5kIHJlY3QgaWQuXG4gICAgc2xvdFNpemVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJlZVNsb3RzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fbmV3U2xvdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9yZWN0SWQgPSAwO1xuXG4gICAgcmV0dXJuIGxheW91dDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHBvc2l0aW9uIGZvciB0aGUgbGF5b3V0IGl0ZW0uIFJldHVybnMgdGhlIGxlZnQgYW5kIHRvcCBwb3NpdGlvblxuICAgKiBvZiB0aGUgaXRlbSBpbiBwaXhlbHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzSG9yaXpvbnRhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbGxHYXBzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcm91bmRpbmdcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fYWRkU2xvdCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgZXBzID0gMC4wMDE7XG4gICAgdmFyIGl0ZW1TbG90ID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0sIGlzSG9yaXpvbnRhbCwgZmlsbEdhcHMsIHJvdW5kaW5nLCB0cmFja1NpemUpIHtcbiAgICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgICB2YXIgZnJlZVNsb3RzID0gdGhpcy5fZnJlZVNsb3RzO1xuICAgICAgdmFyIG5ld1Nsb3RzID0gdGhpcy5fbmV3U2xvdHM7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIHZhciByZWN0SWQ7XG4gICAgICB2YXIgcG90ZW50aWFsU2xvdHM7XG4gICAgICB2YXIgaWdub3JlQ3VycmVudFNsb3RzO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgaWk7XG5cbiAgICAgIC8vIFJlc2V0IG5ldyBzbG90cy5cbiAgICAgIG5ld1Nsb3RzLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIFNldCBpdGVtIHNsb3QgaW5pdGlhbCBkYXRhLlxuICAgICAgaXRlbVNsb3QubGVmdCA9IG51bGw7XG4gICAgICBpdGVtU2xvdC50b3AgPSBudWxsO1xuICAgICAgaXRlbVNsb3Qud2lkdGggPSBpdGVtLl93aWR0aCArIGl0ZW0uX21hcmdpbkxlZnQgKyBpdGVtLl9tYXJnaW5SaWdodDtcbiAgICAgIGl0ZW1TbG90LmhlaWdodCA9IGl0ZW0uX2hlaWdodCArIGl0ZW0uX21hcmdpblRvcCArIGl0ZW0uX21hcmdpbkJvdHRvbTtcblxuICAgICAgLy8gUm91bmQgaXRlbSBzbG90IHdpZHRoIGFuZCBoZWlnaHQgaWYgbmVlZGVkLlxuICAgICAgaWYgKHJvdW5kaW5nKSB7XG4gICAgICAgIGl0ZW1TbG90LndpZHRoID0gTWF0aC5yb3VuZChpdGVtU2xvdC53aWR0aCk7XG4gICAgICAgIGl0ZW1TbG90LmhlaWdodCA9IE1hdGgucm91bmQoaXRlbVNsb3QuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBzbG90IGZvciB0aGUgaXRlbS5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmcmVlU2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVjdElkID0gZnJlZVNsb3RzW2ldO1xuICAgICAgICBpZiAoIXJlY3RJZCkgY29udGludWU7XG4gICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgIGlmIChpdGVtU2xvdC53aWR0aCA8PSByZWN0LndpZHRoICsgZXBzICYmIGl0ZW1TbG90LmhlaWdodCA8PSByZWN0LmhlaWdodCArIGVwcykge1xuICAgICAgICAgIGl0ZW1TbG90LmxlZnQgPSByZWN0LmxlZnQ7XG4gICAgICAgICAgaXRlbVNsb3QudG9wID0gcmVjdC50b3A7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gc2xvdCB3YXMgZm91bmQgZm9yIHRoZSBpdGVtLlxuICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIGl0ZW0gaW4gdG8gdGhlIGJvdHRvbSBsZWZ0ICh2ZXJ0aWNhbCBtb2RlKSBvciB0b3AgcmlnaHRcbiAgICAgICAgLy8gKGhvcml6b250YWwgbW9kZSkgb2YgdGhlIGdyaWQuXG4gICAgICAgIGl0ZW1TbG90LmxlZnQgPSAhaXNIb3Jpem9udGFsID8gMCA6IGxheW91dC53aWR0aDtcbiAgICAgICAgaXRlbVNsb3QudG9wID0gIWlzSG9yaXpvbnRhbCA/IGxheW91dC5oZWlnaHQgOiAwO1xuXG4gICAgICAgIC8vIElmIGdhcHMgZG9uJ3QgbmVlZCBmaWxsaW5nIGRvIG5vdCBhZGQgYW55IGN1cnJlbnQgc2xvdHMgdG8gdGhlIG5ld1xuICAgICAgICAvLyBzbG90cyBhcnJheS5cbiAgICAgICAgaWYgKCFmaWxsR2Fwcykge1xuICAgICAgICAgIGlnbm9yZUN1cnJlbnRTbG90cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSW4gdmVydGljYWwgbW9kZSwgaWYgdGhlIGl0ZW0ncyBib3R0b20gb3ZlcmxhcHMgdGhlIGdyaWQncyBib3R0b20uXG4gICAgICBpZiAoIWlzSG9yaXpvbnRhbCAmJiBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQgPiBsYXlvdXQuaGVpZ2h0KSB7XG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIGxlZnQgZWRnZSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ID4gMCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2godGhpcy5fYWRkUmVjdCgwLCBsYXlvdXQuaGVpZ2h0LCBpdGVtU2xvdC5sZWZ0LCBJbmZpbml0eSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgcmlnaHQgZWRnZSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGggPCBsYXlvdXQud2lkdGgpIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgICAgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoLFxuICAgICAgICAgICAgICBsYXlvdXQuaGVpZ2h0LFxuICAgICAgICAgICAgICBsYXlvdXQud2lkdGggLSBpdGVtU2xvdC5sZWZ0IC0gaXRlbVNsb3Qud2lkdGgsXG4gICAgICAgICAgICAgIEluZmluaXR5XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBncmlkIGhlaWdodC5cbiAgICAgICAgbGF5b3V0LmhlaWdodCA9IGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gaG9yaXpvbnRhbCBtb2RlLCBpZiB0aGUgaXRlbSdzIHJpZ2h0IG92ZXJsYXBzIHRoZSBncmlkJ3MgcmlnaHQgZWRnZS5cbiAgICAgIGlmIChpc0hvcml6b250YWwgJiYgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoID4gbGF5b3V0LndpZHRoKSB7XG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIHRvcCwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC50b3AgPiAwKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaCh0aGlzLl9hZGRSZWN0KGxheW91dC53aWR0aCwgMCwgSW5maW5pdHksIGl0ZW1TbG90LnRvcCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgYm90dG9tLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCA8IGxheW91dC5oZWlnaHQpIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgICAgbGF5b3V0LndpZHRoLFxuICAgICAgICAgICAgICBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQsXG4gICAgICAgICAgICAgIEluZmluaXR5LFxuICAgICAgICAgICAgICBsYXlvdXQuaGVpZ2h0IC0gaXRlbVNsb3QudG9wIC0gaXRlbVNsb3QuaGVpZ2h0XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBncmlkIHdpZHRoLlxuICAgICAgICBsYXlvdXQud2lkdGggPSBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFuIHVwIHRoZSBjdXJyZW50IHNsb3RzIG1ha2luZyBzdXJlIHRoZXJlIGFyZSBubyBvbGQgc2xvdHMgdGhhdFxuICAgICAgLy8gb3ZlcmxhcCB3aXRoIHRoZSBpdGVtLiBJZiBhbiBvbGQgc2xvdCBvdmVybGFwcyB3aXRoIHRoZSBpdGVtLCBzcGxpdCBpdFxuICAgICAgLy8gaW50byBzbWFsbGVyIHNsb3RzIGlmIG5lY2Vzc2FyeS5cbiAgICAgIGZvciAoaSA9IGZpbGxHYXBzID8gMCA6IGlnbm9yZUN1cnJlbnRTbG90cyA/IGZyZWVTbG90cy5sZW5ndGggOiBpOyBpIDwgZnJlZVNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlY3RJZCA9IGZyZWVTbG90c1tpXTtcbiAgICAgICAgaWYgKCFyZWN0SWQpIGNvbnRpbnVlO1xuICAgICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgICBwb3RlbnRpYWxTbG90cyA9IHRoaXMuX3NwbGl0UmVjdChyZWN0LCBpdGVtU2xvdCk7XG4gICAgICAgIGZvciAoaWkgPSAwOyBpaSA8IHBvdGVudGlhbFNsb3RzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIHJlY3RJZCA9IHBvdGVudGlhbFNsb3RzW2lpXTtcbiAgICAgICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgICAgIC8vIExldCdzIG1ha2Ugc3VyZSBoZXJlIHRoYXQgd2UgaGF2ZSBhIGJpZyBlbm91Z2ggc2xvdFxuICAgICAgICAgIC8vICh3aWR0aC9oZWlnaHQgPiAwLjQ5cHgpIGFuZCBhbHNvIGxldCdzIG1ha2Ugc3VyZSB0aGF0IHRoZSBzbG90IGlzXG4gICAgICAgICAgLy8gd2l0aGluIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBncmlkLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlY3Qud2lkdGggPiAwLjQ5ICYmXG4gICAgICAgICAgICByZWN0LmhlaWdodCA+IDAuNDkgJiZcbiAgICAgICAgICAgICgoIWlzSG9yaXpvbnRhbCAmJiByZWN0LnRvcCA8IGxheW91dC5oZWlnaHQpIHx8XG4gICAgICAgICAgICAgIChpc0hvcml6b250YWwgJiYgcmVjdC5sZWZ0IDwgbGF5b3V0LndpZHRoKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5ld1Nsb3RzLnB1c2gocmVjdElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2FuaXRpemUgbmV3IHNsb3RzLlxuICAgICAgaWYgKG5ld1Nsb3RzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9wdXJnZVJlY3RzKG5ld1Nsb3RzKS5zb3J0KFxuICAgICAgICAgIGlzSG9yaXpvbnRhbCA/IHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AgOiB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBsYXlvdXQgd2lkdGgvaGVpZ2h0LlxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICBsYXlvdXQud2lkdGggPSBNYXRoLm1heChsYXlvdXQud2lkdGgsIGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gTWF0aC5tYXgobGF5b3V0LmhlaWdodCwgaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGl0ZW0gc2xvdCBkYXRhIHRvIGxheW91dCBzbG90cyAoYW5kIHN0b3JlIHRoZSBzbG90IHNpemUgZm9yIGxhdGVyXG4gICAgICAvLyB1c2FnZSB0b28gaWYgbmVjZXNzYXJ5KS5cbiAgICAgIGxheW91dC5zbG90cy5wdXNoKGl0ZW1TbG90LmxlZnQsIGl0ZW1TbG90LnRvcCk7XG4gICAgICBpZiAodHJhY2tTaXplKSB0aGlzLl9zbG90U2l6ZXMucHVzaChpdGVtU2xvdC53aWR0aCwgaXRlbVNsb3QuaGVpZ2h0KTtcblxuICAgICAgLy8gRnJlZS9uZXcgc2xvdHMgc3dpdGNoZXJvbyFcbiAgICAgIHRoaXMuX2ZyZWVTbG90cyA9IG5ld1Nsb3RzO1xuICAgICAgdGhpcy5fbmV3U2xvdHMgPSBmcmVlU2xvdHM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQWRkIGEgbmV3IHJlY3RhbmdsZSB0byB0aGUgcmVjdGFuZ2xlIHN0b3JlLiBSZXR1cm5zIHRoZSBpZCBvZiB0aGUgbmV3XG4gICAqIHJlY3RhbmdsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlZnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvcFxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgKiBAcmV0dXJucyB7UmVjdElkfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fYWRkUmVjdCA9IGZ1bmN0aW9uKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICAgIHZhciByZWN0SWQgPSArK3RoaXMuX3JlY3RJZDtcbiAgICB2YXIgcmVjdFN0b3JlID0gdGhpcy5fcmVjdFN0b3JlO1xuXG4gICAgcmVjdFN0b3JlW3JlY3RJZF0gPSBsZWZ0IHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IHRvcCB8fCAwO1xuICAgIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSB3aWR0aCB8fCAwO1xuICAgIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSBoZWlnaHQgfHwgMDtcblxuICAgIHJldHVybiByZWN0SWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCByZWN0YW5nbGUgZGF0YSBmcm9tIHRoZSByZWN0YW5nbGUgc3RvcmUgYnkgaWQuIE9wdGlvbmFsbHkgeW91IGNhblxuICAgKiBwcm92aWRlIGEgdGFyZ2V0IG9iamVjdCB3aGVyZSB0aGUgcmVjdGFuZ2xlIGRhdGEgd2lsbCBiZSB3cml0dGVuIGluLiBCeVxuICAgKiBkZWZhdWx0IGFuIGludGVybmFsIG9iamVjdCBpcyByZXVzZWQgYXMgYSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gaWRcbiAgICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRdXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9nZXRSZWN0ID0gZnVuY3Rpb24oaWQsIHRhcmdldCkge1xuICAgIHZhciByZWN0SXRlbSA9IHRhcmdldCA/IHRhcmdldCA6IHRoaXMuX3JlY3RJdGVtO1xuICAgIHZhciByZWN0U3RvcmUgPSB0aGlzLl9yZWN0U3RvcmU7XG5cbiAgICByZWN0SXRlbS5sZWZ0ID0gcmVjdFN0b3JlW2lkXSB8fCAwO1xuICAgIHJlY3RJdGVtLnRvcCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuICAgIHJlY3RJdGVtLndpZHRoID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0uaGVpZ2h0ID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG5cbiAgICByZXR1cm4gcmVjdEl0ZW07XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1bmNoIGEgaG9sZSBpbnRvIGEgcmVjdGFuZ2xlIGFuZCBzcGxpdCB0aGUgcmVtYWluaW5nIGFyZWEgaW50byBzbWFsbGVyXG4gICAqIHJlY3RhbmdsZXMgKDQgYXQgbWF4KS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IHJlY3RcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGhvbGVcbiAgICogQHJldHVybnMge1JlY3RJZFtdfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fc3BsaXRSZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3QsIGhvbGUpIHtcbiAgICAgIC8vIFJlc2V0IG9sZCByZXN1bHRzLlxuICAgICAgcmVzdWx0cy5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBJZiB0aGUgcmVjdCBkb2VzIG5vdCBvdmVybGFwIHdpdGggdGhlIGhvbGUgYWRkIHJlY3QgdG8gdGhlIHJldHVybiBkYXRhXG4gICAgICAvLyBhcyBpcy5cbiAgICAgIGlmICghdGhpcy5fZG9SZWN0c092ZXJsYXAocmVjdCwgaG9sZSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG5cbiAgICAgIC8vIExlZnQgc3BsaXQuXG4gICAgICBpZiAocmVjdC5sZWZ0IDwgaG9sZS5sZWZ0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9hZGRSZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIGhvbGUubGVmdCAtIHJlY3QubGVmdCwgcmVjdC5oZWlnaHQpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmlnaHQgc3BsaXQuXG4gICAgICBpZiAocmVjdC5sZWZ0ICsgcmVjdC53aWR0aCA+IGhvbGUubGVmdCArIGhvbGUud2lkdGgpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICBob2xlLmxlZnQgKyBob2xlLndpZHRoLFxuICAgICAgICAgICAgcmVjdC50b3AsXG4gICAgICAgICAgICByZWN0LmxlZnQgKyByZWN0LndpZHRoIC0gKGhvbGUubGVmdCArIGhvbGUud2lkdGgpLFxuICAgICAgICAgICAgcmVjdC5oZWlnaHRcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvcCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LnRvcCA8IGhvbGUudG9wKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9hZGRSZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIHJlY3Qud2lkdGgsIGhvbGUudG9wIC0gcmVjdC50b3ApKTtcbiAgICAgIH1cblxuICAgICAgLy8gQm90dG9tIHNwbGl0LlxuICAgICAgaWYgKHJlY3QudG9wICsgcmVjdC5oZWlnaHQgPiBob2xlLnRvcCArIGhvbGUuaGVpZ2h0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChcbiAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgcmVjdC5sZWZ0LFxuICAgICAgICAgICAgaG9sZS50b3AgKyBob2xlLmhlaWdodCxcbiAgICAgICAgICAgIHJlY3Qud2lkdGgsXG4gICAgICAgICAgICByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC0gKGhvbGUudG9wICsgaG9sZS5oZWlnaHQpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcmVjdGFuZ2xlcyBvdmVybGFwLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2RvUmVjdHNPdmVybGFwID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiAhKFxuICAgICAgYS5sZWZ0ICsgYS53aWR0aCA8PSBiLmxlZnQgfHxcbiAgICAgIGIubGVmdCArIGIud2lkdGggPD0gYS5sZWZ0IHx8XG4gICAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wIHx8XG4gICAgICBiLnRvcCArIGIuaGVpZ2h0IDw9IGEudG9wXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSByZWN0YW5nbGUgaXMgZnVsbHkgd2l0aGluIGFub3RoZXIgcmVjdGFuZ2xlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2lzUmVjdFdpdGhpblJlY3QgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubGVmdCA+PSBiLmxlZnQgJiZcbiAgICAgIGEudG9wID49IGIudG9wICYmXG4gICAgICBhLmxlZnQgKyBhLndpZHRoIDw9IGIubGVmdCArIGIud2lkdGggJiZcbiAgICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgKyBiLmhlaWdodFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgb2YgcmVjdGFuZ2xlIGlkcyBhbmQgcmVzZXRzIGFsbCB0aGF0IGFyZSBmdWxseVxuICAgKiB3aXRoaW4gYW5vdGhlciByZWN0YW5nbGUgaW4gdGhlIGFycmF5LiBSZXNldHRpbmcgaW4gdGhpcyBjYXNlIG1lYW5zIHRoYXRcbiAgICogdGhlIHJlY3RhbmdsZSBpZCB2YWx1ZSBpcyByZXBsYWNlZCB3aXRoIHplcm8uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkW119IHJlY3RJZHNcbiAgICogQHJldHVybnMge1JlY3RJZFtdfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fcHVyZ2VSZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjdEEgPSB7fTtcbiAgICB2YXIgcmVjdEIgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdElkcykge1xuICAgICAgdmFyIGkgPSByZWN0SWRzLmxlbmd0aDtcbiAgICAgIHZhciBpaTtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpaSA9IHJlY3RJZHMubGVuZ3RoO1xuICAgICAgICBpZiAoIXJlY3RJZHNbaV0pIGNvbnRpbnVlO1xuICAgICAgICB0aGlzLl9nZXRSZWN0KHJlY3RJZHNbaV0sIHJlY3RBKTtcbiAgICAgICAgd2hpbGUgKGlpLS0pIHtcbiAgICAgICAgICBpZiAoIXJlY3RJZHNbaWldIHx8IGkgPT09IGlpKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodGhpcy5faXNSZWN0V2l0aGluUmVjdChyZWN0QSwgdGhpcy5fZ2V0UmVjdChyZWN0SWRzW2lpXSwgcmVjdEIpKSkge1xuICAgICAgICAgICAgcmVjdElkc1tpXSA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlY3RJZHM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogU29ydCByZWN0YW5nbGVzIHdpdGggdG9wLWxlZnQgZ3Jhdml0eS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWR9IGFJZFxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYklkXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9zb3J0UmVjdHNUb3BMZWZ0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWN0QSA9IHt9O1xuICAgIHZhciByZWN0QiA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihhSWQsIGJJZCkge1xuICAgICAgdGhpcy5fZ2V0UmVjdChhSWQsIHJlY3RBKTtcbiAgICAgIHRoaXMuX2dldFJlY3QoYklkLCByZWN0Qik7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIHJldHVybiByZWN0QS50b3AgPCByZWN0Qi50b3AgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wID4gcmVjdEIudG9wID8gMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA8IHJlY3RCLmxlZnQgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA+IHJlY3RCLmxlZnQgPyAxIDogMDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBTb3J0IHJlY3RhbmdsZXMgd2l0aCBsZWZ0LXRvcCBncmF2aXR5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYUlkXG4gICAqIEBwYXJhbSB7UmVjdElkfSBiSWRcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3NvcnRSZWN0c0xlZnRUb3AgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY3RBID0ge307XG4gICAgdmFyIHJlY3RCID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFJZCwgYklkKSB7XG4gICAgICB0aGlzLl9nZXRSZWN0KGFJZCwgcmVjdEEpO1xuICAgICAgdGhpcy5fZ2V0UmVjdChiSWQsIHJlY3RCKTtcbiAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgcmV0dXJuIHJlY3RBLmxlZnQgPCByZWN0Qi5sZWZ0ID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLmxlZnQgPiByZWN0Qi5sZWZ0ID8gMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wIDwgcmVjdEIudG9wID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLnRvcCA+IHJlY3RCLnRvcCA/IDEgOiAwO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgdmFyIGh0bWxDb2xsZWN0aW9uVHlwZSA9ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXSc7XG4gIHZhciBub2RlTGlzdFR5cGUgPSAnW29iamVjdCBOb2RlTGlzdF0nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbm9kZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNOb2RlTGlzdCh2YWwpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpO1xuICAgIHJldHVybiB0eXBlID09PSBodG1sQ29sbGVjdGlvblR5cGUgfHwgdHlwZSA9PT0gbm9kZUxpc3RUeXBlO1xuICB9XG5cbiAgdmFyIG9iamVjdFR5cGUgPSAnb2JqZWN0JztcbiAgdmFyIG9iamVjdFRvU3RyaW5nVHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IG9iamVjdFR5cGUgJiYgdG9TdHJpbmcuY2FsbCh2YWwpID09PSBvYmplY3RUb1N0cmluZ1R5cGU7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSB2YWx1ZSB0byBhbiBhcnJheSBvciBjbG9uZXMgYW4gYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdGFyZ2V0XG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGlzTm9kZUxpc3QodGFyZ2V0KSA/IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCkgOiBBcnJheS5wcm90b3R5cGUuY29uY2F0KHRhcmdldCk7XG4gIH1cblxuICB2YXIgcGFja2VyID0gbmV3IFBhY2tlcigpO1xuICB2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbiAgdmFyIG51bWJlclR5cGUkMSA9ICdudW1iZXInO1xuICB2YXIgc3RyaW5nVHlwZSA9ICdzdHJpbmcnO1xuICB2YXIgaW5zdGFudExheW91dCA9ICdpbnN0YW50JztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U3RyaW5nKX0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7PyhIVE1MRWxlbWVudFtdfE5vZGVMaXN0fFN0cmluZyl9IFtvcHRpb25zLml0ZW1zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2hvd0R1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNob3dFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52aXNpYmxlU3R5bGVzXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaGlkZUR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmhpZGVFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5oaWRkZW5TdHlsZXNdXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IFtvcHRpb25zLmxheW91dF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuZmlsbEdhcHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0Lmhvcml6b250YWw9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LmFsaWduUmlnaHQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LmFsaWduQm90dG9tPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5yb3VuZGluZz10cnVlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufE51bWJlcil9IFtvcHRpb25zLmxheW91dE9uUmVzaXplPTEwMF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXRPbkluaXQ9dHJ1ZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmxheW91dER1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmxheW91dEVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHs/T2JqZWN0fSBbb3B0aW9ucy5zb3J0RGF0YT1udWxsXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRyYWdFbmFibGVkPWZhbHNlXVxuICAgKiBAcGFyYW0gez9IdG1sRWxlbWVudH0gW29wdGlvbnMuZHJhZ0NvbnRhaW5lcj1udWxsXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlLmRpc3RhbmNlPTBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuZGVsYXk9MF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxTdHJpbmcpfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuaGFuZGxlPWZhbHNlXVxuICAgKiBAcGFyYW0gez9TdHJpbmd9IFtvcHRpb25zLmRyYWdBeGlzXVxuICAgKiBAcGFyYW0geyhCb29sZWFufEZ1bmN0aW9uKX0gW29wdGlvbnMuZHJhZ1NvcnQ9dHJ1ZV1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljcy5zb3J0SW50ZXJ2YWw9MTAwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLm1pbkRyYWdEaXN0YW5jZT0xMF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljcy5taW5Cb3VuY2VCYWNrQW5nbGU9MV1cbiAgICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gW29wdGlvbnMuZHJhZ1NvcnRQcmVkaWNhdGVdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZS50aHJlc2hvbGQ9NTBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZS5hY3Rpb249XCJtb3ZlXCJdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnUmVsZWFzZUR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdSZWxlYXNlRWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ0Nzc1Byb3BzXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5lbmFibGVkPWZhbHNlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5lYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudD1udWxsXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLm9uQ3JlYXRlPW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmU9bnVsbF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbnRhaW5lckNsYXNzPVwibXV1cmlcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1DbGFzcz1cIm11dXJpLWl0ZW1cIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1WaXNpYmxlQ2xhc3M9XCJtdXVyaS1pdGVtLXZpc2libGVcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1IaWRkZW5DbGFzcz1cIm11dXJpLWl0ZW0taGlkZGVuXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtUG9zaXRpb25pbmdDbGFzcz1cIm11dXJpLWl0ZW0tcG9zaXRpb25pbmdcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1EcmFnZ2luZ0NsYXNzPVwibXV1cmktaXRlbS1kcmFnZ2luZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVJlbGVhc2luZ0NsYXNzPVwibXV1cmktaXRlbS1yZWxlYXNpbmdcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1QbGFjZWhvbGRlckNsYXNzPVwibXV1cmktaXRlbS1wbGFjZWhvbGRlclwiXVxuICAgKi9cblxuICBmdW5jdGlvbiBHcmlkKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW5zdCA9IHRoaXM7XG4gICAgdmFyIHNldHRpbmdzO1xuICAgIHZhciBpdGVtcztcbiAgICB2YXIgbGF5b3V0T25SZXNpemU7XG5cbiAgICAvLyBBbGxvdyBwYXNzaW5nIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nLiBTdG9yZSBlbGVtZW50IGZvciBpbnN0YW5jZS5cbiAgICBlbGVtZW50ID0gdGhpcy5fZWxlbWVudCA9XG4gICAgICB0eXBlb2YgZWxlbWVudCA9PT0gc3RyaW5nVHlwZSA/IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBjb250YWluZXIgZWxlbWVudCBpcyBub3QgYm9keSBlbGVtZW50IG9yIGRvZXMgbm90XG4gICAgLy8gZXhpc3Qgd2l0aGluIHRoZSBib2R5IGVsZW1lbnQuXG4gICAgdmFyIGlzRWxlbWVudEluRG9tID0gZWxlbWVudC5nZXRSb290Tm9kZVxuICAgICAgPyBlbGVtZW50LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkgPT09IGRvY3VtZW50XG4gICAgICA6IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsZW1lbnQpO1xuICAgIGlmICghaXNFbGVtZW50SW5Eb20gfHwgZWxlbWVudCA9PT0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgZWxlbWVudCBtdXN0IGJlIGFuIGV4aXN0aW5nIERPTSBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIHNldHRpbmdzIGJ5IG1lcmdpbmcgdGhlIG9wdGlvbnMgd2l0aCBkZWZhdWx0IG9wdGlvbnMuXG4gICAgc2V0dGluZ3MgPSB0aGlzLl9zZXR0aW5ncyA9IG1lcmdlU2V0dGluZ3MoR3JpZC5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAvLyBTYW5pdGl6ZSBkcmFnU29ydCBzZXR0aW5nLlxuICAgIGlmICghaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU29ydCkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdTb3J0ID0gISFzZXR0aW5ncy5kcmFnU29ydDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2UgaWQgYW5kIHN0b3JlIGl0IHRvIHRoZSBncmlkIGluc3RhbmNlcyBjb2xsZWN0aW9uLlxuICAgIHRoaXMuX2lkID0gY3JlYXRlVWlkKCk7XG4gICAgZ3JpZEluc3RhbmNlc1t0aGlzLl9pZF0gPSBpbnN0O1xuXG4gICAgLy8gRGVzdHJveWVkIGZsYWcuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFRoZSBsYXlvdXQgb2JqZWN0IChtdXRhdGVkIG9uIGV2ZXJ5IGxheW91dCkuXG4gICAgdGhpcy5fbGF5b3V0ID0ge1xuICAgICAgaWQ6IDAsXG4gICAgICBpdGVtczogW10sXG4gICAgICBzbG90czogW10sXG4gICAgICBzZXRXaWR0aDogZmFsc2UsXG4gICAgICBzZXRIZWlnaHQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIHByaXZhdGUgRW1pdHRlciBpbnN0YW5jZS5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuICAgIC8vIEFkZCBjb250YWluZXIgZWxlbWVudCdzIGNsYXNzIG5hbWUuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuY29udGFpbmVyQ2xhc3MpO1xuXG4gICAgLy8gQ3JlYXRlIGluaXRpYWwgaXRlbXMuXG4gICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICBpdGVtcyA9IHNldHRpbmdzLml0ZW1zO1xuICAgIGlmICh0eXBlb2YgaXRlbXMgPT09IHN0cmluZ1R5cGUpIHtcbiAgICAgIHRvQXJyYXkoZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihpdGVtRWxlbWVudCkge1xuICAgICAgICBpZiAoaXRlbXMgPT09ICcqJyB8fCBlbGVtZW50TWF0Y2hlcyhpdGVtRWxlbWVudCwgaXRlbXMpKSB7XG4gICAgICAgICAgaW5zdC5faXRlbXMucHVzaChuZXcgSXRlbShpbnN0LCBpdGVtRWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpIHx8IGlzTm9kZUxpc3QoaXRlbXMpKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IHRvQXJyYXkoaXRlbXMpLm1hcChmdW5jdGlvbihpdGVtRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IEl0ZW0oaW5zdCwgaXRlbUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGF5b3V0T25SZXNpemUgb3B0aW9uIGlzIGEgdmFsaWQgbnVtYmVyIHNhbml0aXplIGl0IGFuZCBiaW5kIHRoZSByZXNpemVcbiAgICAvLyBoYW5kbGVyLlxuICAgIGxheW91dE9uUmVzaXplID0gc2V0dGluZ3MubGF5b3V0T25SZXNpemU7XG4gICAgaWYgKHR5cGVvZiBsYXlvdXRPblJlc2l6ZSAhPT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICBsYXlvdXRPblJlc2l6ZSA9IGxheW91dE9uUmVzaXplID09PSB0cnVlID8gMCA6IC0xO1xuICAgIH1cbiAgICBpZiAobGF5b3V0T25SZXNpemUgPj0gMCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICAoaW5zdC5fcmVzaXplSGFuZGxlciA9IGRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGluc3QucmVmcmVzaEl0ZW1zKCkubGF5b3V0KCk7XG4gICAgICAgIH0sIGxheW91dE9uUmVzaXplKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTGF5b3V0IG9uIGluaXQgaWYgbmVjZXNzYXJ5LlxuICAgIGlmIChzZXR0aW5ncy5sYXlvdXRPbkluaXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvcGVydGllc1xuICAgKiAqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQHNlZSBJdGVtXG4gICAqL1xuICBHcmlkLkl0ZW0gPSBJdGVtO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1MYXlvdXRcbiAgICovXG4gIEdyaWQuSXRlbUxheW91dCA9IEl0ZW1MYXlvdXQ7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbVZpc2liaWxpdHlcbiAgICovXG4gIEdyaWQuSXRlbVZpc2liaWxpdHkgPSBJdGVtVmlzaWJpbGl0eTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtTWlncmF0ZVxuICAgKi9cbiAgR3JpZC5JdGVtTWlncmF0ZSA9IEl0ZW1NaWdyYXRlO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1BbmltYXRlXG4gICAqL1xuICBHcmlkLkl0ZW1BbmltYXRlID0gSXRlbUFuaW1hdGU7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbURyYWdcbiAgICovXG4gIEdyaWQuSXRlbURyYWcgPSBJdGVtRHJhZztcblxuICAvKipcbiAgICogQHNlZSBJdGVtUmVsZWFzZVxuICAgKi9cbiAgR3JpZC5JdGVtUmVsZWFzZSA9IEl0ZW1SZWxlYXNlO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1EcmFnUGxhY2Vob2xkZXJcbiAgICovXG4gIEdyaWQuSXRlbURyYWdQbGFjZWhvbGRlciA9IEl0ZW1EcmFnUGxhY2Vob2xkZXI7XG5cbiAgLyoqXG4gICAqIEBzZWUgRW1pdHRlclxuICAgKi9cbiAgR3JpZC5FbWl0dGVyID0gRW1pdHRlcjtcblxuICAvKipcbiAgICogQHNlZSBEcmFnZ2VyXG4gICAqL1xuICBHcmlkLkRyYWdnZXIgPSBEcmFnZ2VyO1xuXG4gIC8qKlxuICAgKiBAc2VlIFBhY2tlclxuICAgKi9cbiAgR3JpZC5QYWNrZXIgPSBQYWNrZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9ucyBmb3IgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZFxuICAgKi9cbiAgR3JpZC5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyBJdGVtIGVsZW1lbnRzXG4gICAgaXRlbXM6ICcqJyxcblxuICAgIC8vIERlZmF1bHQgc2hvdyBhbmltYXRpb25cbiAgICBzaG93RHVyYXRpb246IDMwMCxcbiAgICBzaG93RWFzaW5nOiAnZWFzZScsXG5cbiAgICAvLyBEZWZhdWx0IGhpZGUgYW5pbWF0aW9uXG4gICAgaGlkZUR1cmF0aW9uOiAzMDAsXG4gICAgaGlkZUVhc2luZzogJ2Vhc2UnLFxuXG4gICAgLy8gSXRlbSdzIHZpc2libGUvaGlkZGVuIHN0YXRlIHN0eWxlc1xuICAgIHZpc2libGVTdHlsZXM6IHtcbiAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgIH0sXG4gICAgaGlkZGVuU3R5bGVzOiB7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJ1xuICAgIH0sXG5cbiAgICAvLyBMYXlvdXRcbiAgICBsYXlvdXQ6IHtcbiAgICAgIGZpbGxHYXBzOiBmYWxzZSxcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgYWxpZ25SaWdodDogZmFsc2UsXG4gICAgICBhbGlnbkJvdHRvbTogZmFsc2UsXG4gICAgICByb3VuZGluZzogdHJ1ZVxuICAgIH0sXG4gICAgbGF5b3V0T25SZXNpemU6IDEwMCxcbiAgICBsYXlvdXRPbkluaXQ6IHRydWUsXG4gICAgbGF5b3V0RHVyYXRpb246IDMwMCxcbiAgICBsYXlvdXRFYXNpbmc6ICdlYXNlJyxcblxuICAgIC8vIFNvcnRpbmdcbiAgICBzb3J0RGF0YTogbnVsbCxcblxuICAgIC8vIERyYWcgJiBEcm9wXG4gICAgZHJhZ0VuYWJsZWQ6IGZhbHNlLFxuICAgIGRyYWdDb250YWluZXI6IG51bGwsXG4gICAgZHJhZ1N0YXJ0UHJlZGljYXRlOiB7XG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgaGFuZGxlOiBmYWxzZVxuICAgIH0sXG4gICAgZHJhZ0F4aXM6IG51bGwsXG4gICAgZHJhZ1NvcnQ6IHRydWUsXG4gICAgZHJhZ1NvcnRIZXVyaXN0aWNzOiB7XG4gICAgICBzb3J0SW50ZXJ2YWw6IDEwMCxcbiAgICAgIG1pbkRyYWdEaXN0YW5jZTogMTAsXG4gICAgICBtaW5Cb3VuY2VCYWNrQW5nbGU6IDFcbiAgICB9LFxuICAgIGRyYWdTb3J0UHJlZGljYXRlOiB7XG4gICAgICB0aHJlc2hvbGQ6IDUwLFxuICAgICAgYWN0aW9uOiBhY3Rpb25Nb3ZlXG4gICAgfSxcbiAgICBkcmFnUmVsZWFzZUR1cmF0aW9uOiAzMDAsXG4gICAgZHJhZ1JlbGVhc2VFYXNpbmc6ICdlYXNlJyxcbiAgICBkcmFnQ3NzUHJvcHM6IHtcbiAgICAgIHRvdWNoQWN0aW9uOiAnbm9uZScsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB1c2VyRHJhZzogJ25vbmUnLFxuICAgICAgdGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgIHRvdWNoQ2FsbG91dDogJ25vbmUnLFxuICAgICAgY29udGVudFpvb21pbmc6ICdub25lJ1xuICAgIH0sXG4gICAgZHJhZ1BsYWNlaG9sZGVyOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBlYXNpbmc6ICdlYXNlJyxcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IG51bGwsXG4gICAgICBvbkNyZWF0ZTogbnVsbCxcbiAgICAgIG9uUmVtb3ZlOiBudWxsXG4gICAgfSxcblxuICAgIC8vIENsYXNzbmFtZXNcbiAgICBjb250YWluZXJDbGFzczogJ211dXJpJyxcbiAgICBpdGVtQ2xhc3M6ICdtdXVyaS1pdGVtJyxcbiAgICBpdGVtVmlzaWJsZUNsYXNzOiAnbXV1cmktaXRlbS1zaG93bicsXG4gICAgaXRlbUhpZGRlbkNsYXNzOiAnbXV1cmktaXRlbS1oaWRkZW4nLFxuICAgIGl0ZW1Qb3NpdGlvbmluZ0NsYXNzOiAnbXV1cmktaXRlbS1wb3NpdGlvbmluZycsXG4gICAgaXRlbURyYWdnaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLWRyYWdnaW5nJyxcbiAgICBpdGVtUmVsZWFzaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLXJlbGVhc2luZycsXG4gICAgaXRlbVBsYWNlaG9sZGVyQ2xhc3M6ICdtdXVyaS1pdGVtLXBsYWNlaG9sZGVyJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBCaW5kIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaXRlbXMuIE9wdGlvbmFsbHkgeW91IGNhbiBwcm92aWRlIHNwZWNpZmljIHRhcmdldHMgKGVsZW1lbnRzIGFuZFxuICAgKiBpbmRpY2VzKS4gTm90ZSB0aGF0IHRoZSByZXR1cm5lZCBhcnJheSBpcyBub3QgdGhlIHNhbWUgb2JqZWN0IHVzZWQgYnkgdGhlXG4gICAqIGluc3RhbmNlIHNvIG1vZGlmeWluZyBpdCB3aWxsIG5vdCBhZmZlY3QgaW5zdGFuY2UncyBpdGVtcy4gQWxsIGl0ZW1zIHRoYXRcbiAgICogYXJlIG5vdCBmb3VuZCBhcmUgb21pdHRlZCBmcm9tIHRoZSByZXR1cm5lZCBhcnJheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IFt0YXJnZXRzXVxuICAgKiBAcmV0dXJucyB7SXRlbVtdfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZ2V0SXRlbXMgPSBmdW5jdGlvbih0YXJnZXRzKSB7XG4gICAgLy8gUmV0dXJuIGFsbCBpdGVtcyBpbW1lZGlhdGVseSBpZiBubyB0YXJnZXRzIHdlcmUgcHJvdmlkZWQgb3IgaWYgdGhlXG4gICAgLy8gaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAoIXRhcmdldHMgJiYgdGFyZ2V0cyAhPT0gMCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gW107XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdG9BcnJheSh0YXJnZXRzKTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHRhcmdldCBpdGVtcyBhcmUgZGVmaW5lZCByZXR1cm4gZmlsdGVyZWQgcmVzdWx0cy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSB0aGlzLl9nZXRJdGVtKHRhcmdldEl0ZW1zW2ldKTtcbiAgICAgIGl0ZW0gJiYgcmV0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjYWNoZWQgZGltZW5zaW9ucyBvZiB0aGUgaW5zdGFuY2UncyBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IFtpdGVtc11cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5yZWZyZXNoSXRlbXMgPSBmdW5jdGlvbihpdGVtcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0cyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldHNbaV0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgc29ydCBkYXRhIG9mIHRoZSBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW2l0ZW1zXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlZnJlc2hTb3J0RGF0YSA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXRJdGVtc1tpXS5fcmVmcmVzaFNvcnREYXRhKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplIHRoZSBpdGVtIGVsZW1lbnRzIHRvIG1hdGNoIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIERPTS5cbiAgICogVGhpcyBjb21lcyBoYW5keSBpZiB5b3UgbmVlZCB0byBrZWVwIHRoZSBET00gc3RydWN0dXJlIG1hdGNoZWQgd2l0aCB0aGVcbiAgICogb3JkZXIgb2YgdGhlIGl0ZW1zLiBOb3RlIHRoYXQgaWYgYW4gaXRlbSdzIGVsZW1lbnQgaXMgbm90IGN1cnJlbnRseSBhIGNoaWxkXG4gICAqIG9mIHRoZSBjb250YWluZXIgZWxlbWVudCAoaWYgaXQgaXMgZHJhZ2dlZCBmb3IgZXhhbXBsZSkgaXQgaXMgaWdub3JlZCBhbmRcbiAgICogbGVmdCB1bnRvdWNoZWQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc3luY2hyb25pemUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIGZyYWdtZW50O1xuICAgIHZhciBlbGVtZW50O1xuICAgIHZhciBpO1xuXG4gICAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyBpbiBvcmRlciB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnQgPSBpdGVtc1tpXS5fZWxlbWVudDtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSA9PT0gY29udGFpbmVyKSB7XG4gICAgICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudCB8fCB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFnbWVudCkgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHN5bmNocm9uaXplIGV2ZW50LlxuICAgIHRoaXMuX2VtaXQoZXZlbnRTeW5jaHJvbml6ZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCBhcHBseSBpdGVtIHBvc2l0aW9ucy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtMYXlvdXRDYWxsYmFja30gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpbnN0ID0gdGhpcztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX3VwZGF0ZUxheW91dCgpO1xuICAgIHZhciBsYXlvdXRJZCA9IGxheW91dC5pZDtcbiAgICB2YXIgaXRlbXNMZW5ndGggPSBsYXlvdXQuaXRlbXMubGVuZ3RoO1xuICAgIHZhciBjb3VudGVyID0gaXRlbXNMZW5ndGg7XG4gICAgdmFyIGlzQm9yZGVyQm94O1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gVGhlIGZpbmlzaCBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBjaGVja2luZyBpZiBhbGwgdGhlIGl0ZW1zXG4gICAgLy8gaGF2ZSBsYWlkIG91dCB5ZXQuIEFmdGVyIGFsbCBpdGVtcyBoYXZlIGZpbmlzaGVkIHRoZWlyIGFuaW1hdGlvbnMgY2FsbFxuICAgIC8vIGNhbGxiYWNrIGFuZCBlbWl0IGxheW91dEVuZCBldmVudC4gT25seSBlbWl0IGxheW91dEVuZCBldmVudCBpZiB0aGVyZVxuICAgIC8vIGhhc24ndCBiZWVuIGEgbmV3IGxheW91dCBjYWxsIGR1cmluZyB0aGlzIGxheW91dC5cbiAgICBmdW5jdGlvbiB0cnlGaW5pc2goKSB7XG4gICAgICBpZiAoLS1jb3VudGVyID4gMCkgcmV0dXJuO1xuXG4gICAgICB2YXIgaGFzTGF5b3V0Q2hhbmdlZCA9IGluc3QuX2xheW91dC5pZCAhPT0gbGF5b3V0SWQ7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKGluc3RhbnQpID8gaW5zdGFudCA6IG9uRmluaXNoO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgY2FsbGJhY2soaGFzTGF5b3V0Q2hhbmdlZCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXNMYXlvdXRDaGFuZ2VkICYmIGluc3QuX2hhc0xpc3RlbmVycyhldmVudExheW91dEVuZCkpIHtcbiAgICAgICAgaW5zdC5fZW1pdChldmVudExheW91dEVuZCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBncmlkJ3Mgd2lkdGggb3IgaGVpZ2h0IHdhcyBtb2RpZmllZCwgd2UgbmVlZCB0byB1cGRhdGUgaXQncyBjYWNoZWRcbiAgICAvLyBkaW1lbnNpb25zLiBBbHNvIGtlZXAgaW4gbWluZCB0aGF0IGdyaWQncyBjYWNoZWQgd2lkdGgvaGVpZ2h0IHNob3VsZFxuICAgIC8vIGFsd2F5cyBlcXVhbCB0byB3aGF0IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgd291bGQgcmV0dXJuLCBzb1xuICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIGFkZCB0aGUgZ3JpZCBlbGVtZW50J3MgYm9yZGVycyB0byB0aGUgZGltZW5zaW9ucyBpZlxuICAgIC8vIGl0J3MgYm94LXNpemluZyBpcyBib3JkZXItYm94LiBOb3RlIHRoYXQgd2Ugc3VwcG9ydCBwcm92aWRpbmcgdGhlXG4gICAgLy8gZGltZW5zaW9ucyBhcyBhIHN0cmluZyBoZXJlIHRvbyBzbyB0aGF0IG9uZSBjYW4gZGVmaW5lIHRoZSB1bml0IG9mIHRoZVxuICAgIC8vIGRpbWVuc2lvbnMsIGluIHdoaWNoIGNhc2Ugd2UgZG9uJ3QgZG8gdGhlIGJvcmRlci1ib3ggY2hlY2suXG4gICAgaWYgKFxuICAgICAgKGxheW91dC5zZXRIZWlnaHQgJiYgdHlwZW9mIGxheW91dC5oZWlnaHQgPT09IG51bWJlclR5cGUkMSkgfHxcbiAgICAgIChsYXlvdXQuc2V0V2lkdGggJiYgdHlwZW9mIGxheW91dC53aWR0aCA9PT0gbnVtYmVyVHlwZSQxKVxuICAgICkge1xuICAgICAgaXNCb3JkZXJCb3ggPSBnZXRTdHlsZShlbGVtZW50LCAnYm94LXNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG4gICAgfVxuICAgIGlmIChsYXlvdXQuc2V0SGVpZ2h0KSB7XG4gICAgICBpZiAodHlwZW9mIGxheW91dC5oZWlnaHQgPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9XG4gICAgICAgICAgKGlzQm9yZGVyQm94ID8gbGF5b3V0LmhlaWdodCArIHRoaXMuX2JvcmRlclRvcCArIHRoaXMuX2JvcmRlckJvdHRvbSA6IGxheW91dC5oZWlnaHQpICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbGF5b3V0LmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxheW91dC5zZXRXaWR0aCkge1xuICAgICAgaWYgKHR5cGVvZiBsYXlvdXQud2lkdGggPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID1cbiAgICAgICAgICAoaXNCb3JkZXJCb3ggPyBsYXlvdXQud2lkdGggKyB0aGlzLl9ib3JkZXJMZWZ0ICsgdGhpcy5fYm9yZGVyUmlnaHQgOiBsYXlvdXQud2lkdGgpICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBsYXlvdXQud2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsYXlvdXRTdGFydCBldmVudC4gTm90ZSB0aGF0IHRoaXMgaXMgaW50ZW50aW9uYWxseSBlbWl0dGVkIGFmdGVyIHRoZVxuICAgIC8vIGNvbnRhaW5lciBlbGVtZW50J3MgZGltZW5zaW9ucyBhcmUgc2V0LCBiZWNhdXNlIG90aGVyd2lzZSB0aGVyZSB3b3VsZCBiZVxuICAgIC8vIG5vIGhvb2sgZm9yIHJlYWN0aW5nIHRvIGNvbnRhaW5lciBkaW1lbnNpb24gY2hhbmdlcy5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50TGF5b3V0U3RhcnQpKSB7XG4gICAgICB0aGlzLl9lbWl0KGV2ZW50TGF5b3V0U3RhcnQsIGxheW91dC5pdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGl0ZW1zIGxldCdzIGZpbmlzaCBxdWlja2x5LlxuICAgIGlmICghaXRlbXNMZW5ndGgpIHtcbiAgICAgIHRyeUZpbmlzaCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGl0ZW1zIGxldCdzIHBvc2l0aW9uIHRoZW0uXG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zTGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBsYXlvdXQuaXRlbXNbaV07XG4gICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlO1xuXG4gICAgICAvLyBVcGRhdGUgaXRlbSdzIHBvc2l0aW9uLlxuICAgICAgaXRlbS5fbGVmdCA9IGxheW91dC5zbG90c1tpICogMl07XG4gICAgICBpdGVtLl90b3AgPSBsYXlvdXQuc2xvdHNbaSAqIDIgKyAxXTtcblxuICAgICAgLy8gTGF5b3V0IGl0ZW0gaWYgaXQgaXMgbm90IGRyYWdnZWQuXG4gICAgICBpdGVtLmlzRHJhZ2dpbmcoKSA/IHRyeUZpbmlzaCgpIDogaXRlbS5fbGF5b3V0LnN0YXJ0KGluc3RhbnQgPT09IHRydWUsIHRyeUZpbmlzaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgaXRlbXMgYnkgcHJvdmlkaW5nIHRoZSBlbGVtZW50cyB5b3Ugd2lzaCB0byBhZGQgdG8gdGhlIGluc3RhbmNlIGFuZFxuICAgKiBvcHRpb25hbGx5IHByb3ZpZGUgdGhlIGluZGV4IHdoZXJlIHlvdSB3YW50IHRoZSBpdGVtcyB0byBiZSBpbnNlcnRlZCBpbnRvLlxuICAgKiBBbGwgZWxlbWVudHMgdGhhdCBhcmUgbm90IGFscmVhZHkgY2hpbGRyZW4gb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50IHdpbGwgYmVcbiAgICogYXV0b21hdGljYWxseSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuIElmIGFuIGVsZW1lbnQgaGFzIGl0J3MgQ1NTXG4gICAqIGRpc3BsYXkgcHJvcGVydHkgc2V0IHRvIFwibm9uZVwiIGl0IHdpbGwgYmUgbWFya2VkIGFzIGluYWN0aXZlIGR1cmluZyB0aGVcbiAgICogaW5pdGlhdGlvbiBwcm9jZXNzLiBBcyBsb25nIGFzIHRoZSBpdGVtIGlzIGluYWN0aXZlIGl0IHdpbGwgbm90IGJlIHBhcnQgb2ZcbiAgICogdGhlIGxheW91dCwgYnV0IGl0IHdpbGwgcmV0YWluIGl0J3MgaW5kZXguIFlvdSBjYW4gYWN0aXZhdGUgaXRlbXMgYXQgYW55XG4gICAqIHBvaW50IHdpdGggZ3JpZC5zaG93KCkgbWV0aG9kLiBUaGlzIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbFxuICAgKiBncmlkLmxheW91dCgpIGlmIG9uZSBvciBtb3JlIG9mIHRoZSBhZGRlZCBlbGVtZW50cyBhcmUgdmlzaWJsZS4gSWYgb25seVxuICAgKiBoaWRkZW4gaXRlbXMgYXJlIGFkZGVkIG5vIGxheW91dCB3aWxsIGJlIGNhbGxlZC4gQWxsIHRoZSBuZXcgdmlzaWJsZSBpdGVtc1xuICAgKiBhcmUgcG9zaXRpb25lZCB3aXRob3V0IGFuaW1hdGlvbiBkdXJpbmcgdGhlaXIgZmlyc3QgbGF5b3V0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxIVE1MRWxlbWVudFtdKX0gZWxlbWVudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaW5kZXg9LTFdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaXNBY3RpdmVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihlbGVtZW50cywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhZWxlbWVudHMpIHJldHVybiBbXTtcblxuICAgIHZhciBuZXdJdGVtcyA9IHRvQXJyYXkoZWxlbWVudHMpO1xuICAgIGlmICghbmV3SXRlbXMubGVuZ3RoKSByZXR1cm4gbmV3SXRlbXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBNYXAgcHJvdmlkZWQgZWxlbWVudHMgaW50byBuZXcgZ3JpZCBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBuZXcgSXRlbSh0aGlzLCBuZXdJdGVtc1tpXSwgb3B0cy5pc0FjdGl2ZSk7XG4gICAgICBuZXdJdGVtc1tpXSA9IGl0ZW07XG5cbiAgICAgIC8vIElmIHRoZSBpdGVtIHRvIGJlIGFkZGVkIGlzIGFjdGl2ZSwgd2UgbmVlZCB0byBkbyBhIGxheW91dC4gQWxzbywgd2VcbiAgICAgIC8vIG5lZWQgdG8gbWFyayB0aGUgaXRlbSB3aXRoIHRoZSBza2lwTmV4dEFuaW1hdGlvbiBmbGFnIHRvIG1ha2UgaXRcbiAgICAgIC8vIHBvc2l0aW9uIGluc3RhbnRseSAod2l0aG91dCBhbmltYXRpb24pIGR1cmluZyB0aGUgbmV4dCBsYXlvdXQuIFdpdGhvdXRcbiAgICAgIC8vIHRoZSBoYWNrIHRoZSBpdGVtIHdvdWxkIGFuaW1hdGUgdG8gaXQncyBuZXcgcG9zaXRpb24gZnJvbSB0aGUgbm9ydGh3ZXN0XG4gICAgICAvLyBjb3JuZXIgb2YgdGhlIGdyaWQsIHdoaWNoIGZlZWxzIGEgYml0IGJ1Z2d5IChpbWhvKS5cbiAgICAgIGlmIChpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgICBuZWVkc0xheW91dCA9IHRydWU7XG4gICAgICAgIGl0ZW0uX2xheW91dC5fc2tpcE5leHRBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgbmV3IGl0ZW1zIHRvIHRoZSBpdGVtcyBjb2xsZWN0aW9uIHRvIGNvcnJlY3QgaW5kZXguXG4gICAgYXJyYXlJbnNlcnQoaXRlbXMsIG5ld0l0ZW1zLCBvcHRzLmluZGV4KTtcblxuICAgIC8vIEVtaXQgYWRkIGV2ZW50LlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRBZGQpKSB7XG4gICAgICB0aGlzLl9lbWl0KGV2ZW50QWRkLCBuZXdJdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICBpZiAobmVlZHNMYXlvdXQgJiYgbGF5b3V0KSB7XG4gICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0l0ZW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgaXRlbXMgZnJvbSB0aGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucmVtb3ZlRWxlbWVudHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGFsbEl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gdGFyZ2V0SXRlbXNbaV07XG4gICAgICBpbmRpY2VzLnB1c2goYWxsSXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgICBpZiAoaXRlbS5faXNBY3RpdmUpIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgIGl0ZW0uX2Rlc3Ryb3kob3B0cy5yZW1vdmVFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCByZW1vdmUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudFJlbW92ZSkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRSZW1vdmUsIHRhcmdldEl0ZW1zLnNsaWNlKDApLCBpbmRpY2VzKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgIGlmIChuZWVkc0xheW91dCAmJiBsYXlvdXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0SXRlbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgaW5zdGFuY2UgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtTaG93Q2FsbGJhY2t9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fc2V0SXRlbXNWaXNpYmlsaXR5KGl0ZW1zLCB0cnVlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSGlkZSBpbnN0YW5jZSBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0hpZGVDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9zZXRJdGVtc1Zpc2liaWxpdHkoaXRlbXMsIGZhbHNlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVyIGl0ZW1zLiBFeHBlY3RzIGF0IGxlYXN0IG9uZSBhcmd1bWVudCwgYSBwcmVkaWNhdGUsIHdoaWNoIHNob3VsZCBiZVxuICAgKiBlaXRoZXIgYSBmdW5jdGlvbiBvciBhIHN0cmluZy4gVGhlIHByZWRpY2F0ZSBjYWxsYmFjayBpcyBleGVjdXRlZCBmb3IgZXZlcnlcbiAgICogaXRlbSBpbiB0aGUgaW5zdGFuY2UuIElmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZWRpY2F0ZSBpcyB0cnV0aHkgdGhlXG4gICAqIGl0ZW0gaW4gcXVlc3Rpb24gd2lsbCBiZSBzaG93biBhbmQgb3RoZXJ3aXNlIGhpZGRlbi4gVGhlIHByZWRpY2F0ZSBjYWxsYmFja1xuICAgKiByZWNlaXZlcyB0aGUgaXRlbSBpbnN0YW5jZSBhcyBpdCdzIGFyZ3VtZW50LiBJZiB0aGUgcHJlZGljYXRlIGlzIGEgc3RyaW5nXG4gICAqIGl0IGlzIGNvbnNpZGVyZWQgdG8gYmUgYSBzZWxlY3RvciBhbmQgaXQgaXMgY2hlY2tlZCBhZ2FpbnN0IGV2ZXJ5IGl0ZW1cbiAgICogZWxlbWVudCBpbiB0aGUgaW5zdGFuY2Ugd2l0aCB0aGUgbmF0aXZlIGVsZW1lbnQubWF0Y2hlcygpIG1ldGhvZC4gQWxsIHRoZVxuICAgKiBtYXRjaGluZyBpdGVtcyB3aWxsIGJlIHNob3duIGFuZCBvdGhlcnMgaGlkZGVuLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxTdHJpbmcpfSBwcmVkaWNhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7RmlsdGVyQ2FsbGJhY2t9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXRlbXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtc1RvU2hvdyA9IFtdO1xuICAgIHZhciBpdGVtc1RvSGlkZSA9IFtdO1xuICAgIHZhciBpc1ByZWRpY2F0ZVN0cmluZyA9IHR5cGVvZiBwcmVkaWNhdGUgPT09IHN0cmluZ1R5cGU7XG4gICAgdmFyIGlzUHJlZGljYXRlRm4gPSBpc0Z1bmN0aW9uKHByZWRpY2F0ZSk7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGlzSW5zdGFudCA9IG9wdHMuaW5zdGFudCA9PT0gdHJ1ZTtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIG9uRmluaXNoID0gaXNGdW5jdGlvbihvcHRzLm9uRmluaXNoKSA/IG9wdHMub25GaW5pc2ggOiBudWxsO1xuICAgIHZhciB0cnlGaW5pc2hDb3VudGVyID0gLTE7XG4gICAgdmFyIHRyeUZpbmlzaCA9IG5vb3A7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG9uRmluaXNoIGNhbGxiYWNrLCBsZXQncyBjcmVhdGUgcHJvcGVyIHRyeUZpbmlzaCBjYWxsYmFjay5cbiAgICBpZiAob25GaW5pc2gpIHtcbiAgICAgIHRyeUZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICArK3RyeUZpbmlzaENvdW50ZXIgJiYgb25GaW5pc2goaXRlbXNUb1Nob3cuc2xpY2UoMCksIGl0ZW1zVG9IaWRlLnNsaWNlKDApKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgd2hpY2ggaXRlbXMgbmVlZCB0byBiZSBzaG93biBhbmQgd2hpY2ggaGlkZGVuLlxuICAgIGlmIChpc1ByZWRpY2F0ZUZuIHx8IGlzUHJlZGljYXRlU3RyaW5nKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IHRoaXMuX2l0ZW1zW2ldO1xuICAgICAgICBpZiAoaXNQcmVkaWNhdGVGbiA/IHByZWRpY2F0ZShpdGVtKSA6IGVsZW1lbnRNYXRjaGVzKGl0ZW0uX2VsZW1lbnQsIHByZWRpY2F0ZSkpIHtcbiAgICAgICAgICBpdGVtc1RvU2hvdy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1zVG9IaWRlLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IGl0ZW1zIHRoYXQgbmVlZCB0byBiZSBzaG93bi5cbiAgICBpZiAoaXRlbXNUb1Nob3cubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNob3coaXRlbXNUb1Nob3csIHtcbiAgICAgICAgaW5zdGFudDogaXNJbnN0YW50LFxuICAgICAgICBvbkZpbmlzaDogdHJ5RmluaXNoLFxuICAgICAgICBsYXlvdXQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5RmluaXNoKCk7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBpdGVtcyB0aGF0IG5lZWQgdG8gYmUgaGlkZGVuLlxuICAgIGlmIChpdGVtc1RvSGlkZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaGlkZShpdGVtc1RvSGlkZSwge1xuICAgICAgICBpbnN0YW50OiBpc0luc3RhbnQsXG4gICAgICAgIG9uRmluaXNoOiB0cnlGaW5pc2gsXG4gICAgICAgIGxheW91dDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnlGaW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgYW55IGl0ZW1zIHRvIGZpbHRlci5cbiAgICBpZiAoaXRlbXNUb1Nob3cubGVuZ3RoIHx8IGl0ZW1zVG9IaWRlLmxlbmd0aCkge1xuICAgICAgLy8gRW1pdCBmaWx0ZXIgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50RmlsdGVyKSkge1xuICAgICAgICB0aGlzLl9lbWl0KGV2ZW50RmlsdGVyLCBpdGVtc1RvU2hvdy5zbGljZSgwKSwgaXRlbXNUb0hpZGUuc2xpY2UoMCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNvcnQgaXRlbXMuIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIHNvcnQgdGhlIGl0ZW1zLiBUaGUgZmlyc3QgaXMgc2ltcGx5IGJ5XG4gICAqIHByb3ZpZGluZyBhIGZ1bmN0aW9uIGFzIHRoZSBjb21wYXJlciB3aGljaCB3b3JrcyBpZGVudGljYWxseSB0byBuYXRpdmVcbiAgICogYXJyYXkgc29ydC4gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHNvcnQgYnkgdGhlIHNvcnQgZGF0YSB5b3UgaGF2ZSBwcm92aWRlZFxuICAgKiBpbiB0aGUgaW5zdGFuY2UncyBvcHRpb25zLiBKdXN0IHByb3ZpZGUgdGhlIHNvcnQgZGF0YSBrZXkocykgYXMgYSBzdHJpbmdcbiAgICogKHNlcGFyYXRlZCBieSBzcGFjZSkgYW5kIHRoZSBpdGVtcyB3aWxsIGJlIHNvcnRlZCBiYXNlZCBvbiB0aGUgcHJvdmlkZWRcbiAgICogc29ydCBkYXRhIGtleXMuIExhc3RseSB5b3UgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcHJvdmlkZSBhIHByZXNvcnRlZFxuICAgKiBhcnJheSBvZiBpdGVtcyB3aGljaCB3aWxsIGJlIHVzZWQgdG8gc3luYyB0aGUgaW50ZXJuYWwgaXRlbXMgYXJyYXkgaW4gdGhlXG4gICAqIHNhbWUgb3JkZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufEl0ZW1bXXxTdHJpbmd8U3RyaW5nW10pfSBjb21wYXJlclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGVzY2VuZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zb3J0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzb3J0Q29tcGFyZXI7XG4gICAgdmFyIGlzRGVzY2VuZGluZztcbiAgICB2YXIgb3JpZ0l0ZW1zO1xuICAgIHZhciBpbmRleE1hcDtcblxuICAgIGZ1bmN0aW9uIHBhcnNlQ3JpdGVyaWEoZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgIHJldHVybiB2YWwuc3BsaXQoJzonKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5kZXhNYXAoaXRlbXMpIHtcbiAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmV0W2l0ZW1zW2ldLl9pZF0gPSBpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wYXJlSW5kaWNlcyhpdGVtQSwgaXRlbUIpIHtcbiAgICAgIHZhciBpbmRleEEgPSBpbmRleE1hcFtpdGVtQS5faWRdO1xuICAgICAgdmFyIGluZGV4QiA9IGluZGV4TWFwW2l0ZW1CLl9pZF07XG4gICAgICByZXR1cm4gaXNEZXNjZW5kaW5nID8gaW5kZXhCIC0gaW5kZXhBIDogaW5kZXhBIC0gaW5kZXhCO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgIHZhciBjcml0ZXJpYU5hbWU7XG4gICAgICB2YXIgY3JpdGVyaWFPcmRlcjtcbiAgICAgIHZhciB2YWxBO1xuICAgICAgdmFyIHZhbEI7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGlzdCBvZiBzb3J0IGNyaXRlcmlhLlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3J0Q29tcGFyZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRoZSBjcml0ZXJpYSBuYW1lLCB3aGljaCBzaG91bGQgbWF0Y2ggYW4gaXRlbSdzIHNvcnQgZGF0YSBrZXkuXG4gICAgICAgIGNyaXRlcmlhTmFtZSA9IHNvcnRDb21wYXJlcltpXVswXTtcbiAgICAgICAgY3JpdGVyaWFPcmRlciA9IHNvcnRDb21wYXJlcltpXVsxXTtcblxuICAgICAgICAvLyBHZXQgaXRlbXMnIGNhY2hlZCBzb3J0IHZhbHVlcyBmb3IgdGhlIGNyaXRlcmlhLiBJZiB0aGUgaXRlbSBoYXMgbm8gc29ydFxuICAgICAgICAvLyBkYXRhIGxldCdzIHVwZGF0ZSB0aGUgaXRlbXMgc29ydCBkYXRhICh0aGlzIGlzIGEgbGF6eSBsb2FkIG1lY2hhbmlzbSkuXG4gICAgICAgIHZhbEEgPSAoYS5fc29ydERhdGEgPyBhIDogYS5fcmVmcmVzaFNvcnREYXRhKCkpLl9zb3J0RGF0YVtjcml0ZXJpYU5hbWVdO1xuICAgICAgICB2YWxCID0gKGIuX3NvcnREYXRhID8gYiA6IGIuX3JlZnJlc2hTb3J0RGF0YSgpKS5fc29ydERhdGFbY3JpdGVyaWFOYW1lXTtcblxuICAgICAgICAvLyBTb3J0IHRoZSBpdGVtcyBpbiBkZXNjZW5kaW5nIG9yZGVyIGlmIGRlZmluZWQgc28gZXhwbGljaXRseS4gT3RoZXJ3aXNlXG4gICAgICAgIC8vIHNvcnQgaXRlbXMgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICAgICAgICBpZiAoY3JpdGVyaWFPcmRlciA9PT0gJ2Rlc2MnIHx8ICghY3JpdGVyaWFPcmRlciAmJiBpc0Rlc2NlbmRpbmcpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsQiA8IHZhbEEgPyAtMSA6IHZhbEIgPiB2YWxBID8gMSA6IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsQSA8IHZhbEIgPyAtMSA6IHZhbEEgPiB2YWxCID8gMSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIC0xIG9yIDEgYXMgdGhlIHJldHVybiB2YWx1ZSwgbGV0J3MgcmV0dXJuIGl0IGltbWVkaWF0ZWx5LlxuICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB2YWx1ZXMgYXJlIGVxdWFsIGxldCdzIGNvbXBhcmUgdGhlIGl0ZW0gaW5kaWNlcyB0byBtYWtlIHN1cmUgd2VcbiAgICAgIC8vIGhhdmUgYSBzdGFibGUgc29ydC5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGlmICghaW5kZXhNYXApIGluZGV4TWFwID0gZ2V0SW5kZXhNYXAob3JpZ0l0ZW1zKTtcbiAgICAgICAgcmVzdWx0ID0gY29tcGFyZUluZGljZXMoYSwgYik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXBhcmVyKGEsIGIpIHtcbiAgICAgIHZhciByZXN1bHQgPSBzb3J0Q29tcGFyZXIoYSwgYik7XG4gICAgICAvLyBJZiBkZXNjZW5kaW5nIGxldCdzIGludmVydCB0aGUgcmVzdWx0IHZhbHVlLlxuICAgICAgaWYgKGlzRGVzY2VuZGluZyAmJiByZXN1bHQpIHJlc3VsdCA9IC1yZXN1bHQ7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgcmVzdWx0IChub3QgemVybykgbGV0J3MgcmV0dXJuIGl0IHJpZ2h0IGF3YXkuXG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgLy8gSWYgcmVzdWx0IGlzIHplcm8gbGV0J3MgY29tcGFyZSB0aGUgaXRlbSBpbmRpY2VzIHRvIG1ha2Ugc3VyZSB3ZSBoYXZlIGFcbiAgICAgIC8vIHN0YWJsZSBzb3J0LlxuICAgICAgaWYgKCFpbmRleE1hcCkgaW5kZXhNYXAgPSBnZXRJbmRleE1hcChvcmlnSXRlbXMpO1xuICAgICAgcmV0dXJuIGNvbXBhcmVJbmRpY2VzKGEsIGIpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihjb21wYXJlciwgb3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2l0ZW1zLmxlbmd0aCA8IDIpIHJldHVybiB0aGlzO1xuXG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIFNldHVwIHBhcmVudCBzY29wZSBkYXRhLlxuICAgICAgc29ydENvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgICBpc0Rlc2NlbmRpbmcgPSAhIW9wdHMuZGVzY2VuZGluZztcbiAgICAgIG9yaWdJdGVtcyA9IGl0ZW1zLnNsaWNlKDApO1xuICAgICAgaW5kZXhNYXAgPSBudWxsO1xuXG4gICAgICAvLyBJZiBmdW5jdGlvbiBpcyBwcm92aWRlZCBkbyBhIG5hdGl2ZSBhcnJheSBzb3J0LlxuICAgICAgaWYgKGlzRnVuY3Rpb24oc29ydENvbXBhcmVyKSkge1xuICAgICAgICBpdGVtcy5zb3J0KGN1c3RvbUNvbXBhcmVyKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBpZiB3ZSBnb3QgYSBzdHJpbmcsIGxldCdzIHNvcnQgYnkgdGhlIHNvcnQgZGF0YSBhcyBwcm92aWRlZCBpblxuICAgICAgLy8gdGhlIGluc3RhbmNlJ3Mgb3B0aW9ucy5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBzb3J0Q29tcGFyZXIgPT09IHN0cmluZ1R5cGUpIHtcbiAgICAgICAgc29ydENvbXBhcmVyID0gcGFyc2VDcml0ZXJpYShjb21wYXJlcik7XG4gICAgICAgIGl0ZW1zLnNvcnQoZGVmYXVsdENvbXBhcmVyKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBpZiB3ZSBnb3QgYW4gYXJyYXksIGxldCdzIGFzc3VtZSBpdCdzIGEgcHJlc29ydGVkIGFycmF5IG9mIHRoZVxuICAgICAgLy8gaXRlbXMgYW5kIG9yZGVyIHRoZSBpdGVtcyBiYXNlZCBvbiBpdC5cbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc29ydENvbXBhcmVyKSkge1xuICAgICAgICBpZiAoc29ydENvbXBhcmVyLmxlbmd0aCAhPT0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbJyArIG5hbWVzcGFjZSArICddIHNvcnQgcmVmZXJlbmNlIGl0ZW1zIGRvIG5vdCBtYXRjaCB3aXRoIGdyaWQgaXRlbXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHNvcnRDb21wYXJlci5pbmRleE9mKGl0ZW1zW2ldKSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWycgKyBuYW1lc3BhY2UgKyAnXSBzb3J0IHJlZmVyZW5jZSBpdGVtcyBkbyBub3QgbWF0Y2ggd2l0aCBncmlkIGl0ZW1zLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtc1tpXSA9IHNvcnRDb21wYXJlcltpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEZXNjZW5kaW5nKSBpdGVtcy5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UgbGV0J3MganVzdCBza2lwIGl0LCBub3RoaW5nIHdlIGNhbiBkbyBoZXJlLlxuICAgICAgZWxzZSB7XG4gICAgICAgIC8qKiBAdG9kbyBNYXliZSB0aHJvdyBhbiBlcnJvciBoZXJlPyAqL1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBzb3J0IGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudFNvcnQpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoZXZlbnRTb3J0LCBpdGVtcy5zbGljZSgwKSwgb3JpZ0l0ZW1zKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBNb3ZlIGl0ZW0gdG8gYW5vdGhlciBpbmRleCBvciBpbiBwbGFjZSBvZiBhbm90aGVyIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gaXRlbVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmFjdGlvbj1cIm1vdmVcIl1cbiAgICogICAtIEFjY2VwdHMgZWl0aGVyIFwibW92ZVwiIG9yIFwic3dhcFwiLlxuICAgKiAgIC0gXCJtb3ZlXCIgbW92ZXMgdGhlIGl0ZW0gaW4gcGxhY2Ugb2YgdGhlIG90aGVyIGl0ZW0uXG4gICAqICAgLSBcInN3YXBcIiBzd2FwcyB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW1zLlxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihpdGVtLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pdGVtcy5sZW5ndGggPCAyKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXNTd2FwID0gb3B0cy5hY3Rpb24gPT09IGFjdGlvblN3YXA7XG4gICAgdmFyIGFjdGlvbiA9IGlzU3dhcCA/IGFjdGlvblN3YXAgOiBhY3Rpb25Nb3ZlO1xuICAgIHZhciBmcm9tSXRlbSA9IHRoaXMuX2dldEl0ZW0oaXRlbSk7XG4gICAgdmFyIHRvSXRlbSA9IHRoaXMuX2dldEl0ZW0ocG9zaXRpb24pO1xuICAgIHZhciBmcm9tSW5kZXg7XG4gICAgdmFyIHRvSW5kZXg7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGl0ZW1zIGV4aXN0IGFuZCBhcmUgbm90IHRoZSBzYW1lLlxuICAgIGlmIChmcm9tSXRlbSAmJiB0b0l0ZW0gJiYgZnJvbUl0ZW0gIT09IHRvSXRlbSkge1xuICAgICAgLy8gR2V0IHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcy5cbiAgICAgIGZyb21JbmRleCA9IGl0ZW1zLmluZGV4T2YoZnJvbUl0ZW0pO1xuICAgICAgdG9JbmRleCA9IGl0ZW1zLmluZGV4T2YodG9JdGVtKTtcblxuICAgICAgLy8gRG8gdGhlIG1vdmUvc3dhcC5cbiAgICAgIGlmIChpc1N3YXApIHtcbiAgICAgICAgYXJyYXlTd2FwKGl0ZW1zLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlNb3ZlKGl0ZW1zLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IG1vdmUgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50TW92ZSkpIHtcbiAgICAgICAgdGhpcy5fZW1pdChldmVudE1vdmUsIHtcbiAgICAgICAgICBpdGVtOiBmcm9tSXRlbSxcbiAgICAgICAgICBmcm9tSW5kZXg6IGZyb21JbmRleCxcbiAgICAgICAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlbmQgaXRlbSB0byBhbm90aGVyIEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gaXRlbVxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLmFwcGVuZFRvPWRvY3VtZW50LmJvZHldXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0U2VuZGVyPXRydWVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0UmVjZWl2ZXI9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oaXRlbSwgZ3JpZCwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgZ3JpZC5faXNEZXN0cm95ZWQgfHwgdGhpcyA9PT0gZ3JpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIHRhcmdldCBpdGVtLlxuICAgIGl0ZW0gPSB0aGlzLl9nZXRJdGVtKGl0ZW0pO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgY29udGFpbmVyID0gb3B0cy5hcHBlbmRUbyB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgbGF5b3V0U2VuZGVyID0gb3B0cy5sYXlvdXRTZW5kZXIgPyBvcHRzLmxheW91dFNlbmRlciA6IG9wdHMubGF5b3V0U2VuZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGxheW91dFJlY2VpdmVyID0gb3B0cy5sYXlvdXRSZWNlaXZlclxuICAgICAgPyBvcHRzLmxheW91dFJlY2VpdmVyXG4gICAgICA6IG9wdHMubGF5b3V0UmVjZWl2ZXIgPT09IHVuZGVmaW5lZDtcblxuICAgIC8vIFN0YXJ0IHRoZSBtaWdyYXRpb24gcHJvY2Vzcy5cbiAgICBpdGVtLl9taWdyYXRlLnN0YXJ0KGdyaWQsIHBvc2l0aW9uLCBjb250YWluZXIpO1xuXG4gICAgLy8gSWYgbWlncmF0aW9uIHdhcyBzdGFydGVkIHN1Y2Nlc3NmdWxseSBhbmQgdGhlIGl0ZW0gaXMgYWN0aXZlLCBsZXQncyBsYXlvdXRcbiAgICAvLyB0aGUgZ3JpZHMuXG4gICAgaWYgKGl0ZW0uX21pZ3JhdGUuX2lzQWN0aXZlICYmIGl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICBpZiAobGF5b3V0U2VuZGVyKSB7XG4gICAgICAgIHRoaXMubGF5b3V0KFxuICAgICAgICAgIGxheW91dFNlbmRlciA9PT0gaW5zdGFudExheW91dCxcbiAgICAgICAgICBpc0Z1bmN0aW9uKGxheW91dFNlbmRlcikgPyBsYXlvdXRTZW5kZXIgOiB1bmRlZmluZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXlvdXRSZWNlaXZlcikge1xuICAgICAgICBncmlkLmxheW91dChcbiAgICAgICAgICBsYXlvdXRSZWNlaXZlciA9PT0gaW5zdGFudExheW91dCxcbiAgICAgICAgICBpc0Z1bmN0aW9uKGxheW91dFJlY2VpdmVyKSA/IGxheW91dFJlY2VpdmVyIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZW1vdmVFbGVtZW50cz1mYWxzZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXMuc2xpY2UoMCk7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBVbmJpbmQgd2luZG93IHJlc2l6ZSBldmVudCBsaXN0ZW5lci5cbiAgICBpZiAodGhpcy5fcmVzaXplSGFuZGxlcikge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3kgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtc1tpXS5fZGVzdHJveShyZW1vdmVFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gUmVzdG9yZSBjb250YWluZXIuXG4gICAgcmVtb3ZlQ2xhc3MoY29udGFpbmVyLCB0aGlzLl9zZXR0aW5ncy5jb250YWluZXJDbGFzcyk7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcnO1xuXG4gICAgLy8gRW1pdCBkZXN0cm95IGV2ZW50IGFuZCB1bmJpbmQgYWxsIGV2ZW50cy5cbiAgICB0aGlzLl9lbWl0KGV2ZW50RGVzdHJveSk7XG4gICAgdGhpcy5fZW1pdHRlci5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgcmVmZXJlbmNlIGZyb20gdGhlIGdyaWQgaW5zdGFuY2VzIGNvbGxlY3Rpb24uXG4gICAgZ3JpZEluc3RhbmNlc1t0aGlzLl9pZF0gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGbGFnIGluc3RhbmNlIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UncyBpdGVtIGJ5IGVsZW1lbnQgb3IgYnkgaW5kZXguIFRhcmdldCBjYW4gYWxzbyBiZSBhbiBJdGVtXG4gICAqIGluc3RhbmNlIGluIHdoaWNoIGNhc2UgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIGl0ZW0gaWYgaXQgZXhpc3RzIHdpdGhpblxuICAgKiByZWxhdGVkIEdyaWQgaW5zdGFuY2UuIElmIG5vdGhpbmcgaXMgZm91bmQgd2l0aCB0aGUgcHJvdmlkZWQgdGFyZ2V0LCBudWxsXG4gICAqIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBbdGFyZ2V0XVxuICAgKiBAcmV0dXJucyB7P0l0ZW19XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fZ2V0SXRlbSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIC8vIElmIG5vIHRhcmdldCBpcyBzcGVjaWZpZWQgb3IgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZCwgcmV0dXJuIG51bGwuXG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICghdGFyZ2V0ICYmIHRhcmdldCAhPT0gMCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRhcmdldCBpcyBudW1iZXIgcmV0dXJuIHRoZSBpdGVtIGluIHRoYXQgaW5kZXguIElmIHRoZSBudW1iZXIgaXMgbG93ZXJcbiAgICAvLyB0aGFuIHplcm8gbG9vayBmb3IgdGhlIGl0ZW0gc3RhcnRpbmcgZnJvbSB0aGUgZW5kIG9mIHRoZSBpdGVtcyBhcnJheS4gRm9yXG4gICAgLy8gZXhhbXBsZSAtMSBmb3IgdGhlIGxhc3QgaXRlbSwgLTIgZm9yIHRoZSBzZWNvbmQgbGFzdCBpdGVtLCBldGMuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3RhcmdldCA+IC0xID8gdGFyZ2V0IDogdGhpcy5faXRlbXMubGVuZ3RoICsgdGFyZ2V0XSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYW4gaW5zdGFuY2Ugb2YgSXRlbSByZXR1cm4gaXQgaWYgaXQgaXMgYXR0YWNoZWQgdG8gdGhpc1xuICAgIC8vIEdyaWQgaW5zdGFuY2UsIG90aGVyd2lzZSByZXR1cm4gbnVsbC5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSXRlbSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5fZ3JpZElkID09PSB0aGlzLl9pZCA/IHRhcmdldCA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSW4gb3RoZXIgY2FzZXMgbGV0J3MgYXNzdW1lIHRoYXQgdGhlIHRhcmdldCBpcyBhbiBlbGVtZW50LCBzbyBsZXQncyB0cnlcbiAgICAvLyB0byBmaW5kIGFuIGl0ZW0gdGhhdCBtYXRjaGVzIHRoZSBlbGVtZW50IGFuZCByZXR1cm4gaXQuIElmIGl0ZW0gaXMgbm90XG4gICAgLy8gZm91bmQgcmV0dXJuIG51bGwuXG4gICAgLyoqIEB0b2RvIFRoaXMgY291bGQgYmUgbWFkZSBhIGxvdCBmYXN0ZXIgYnkgdXNpbmcgTWFwL1dlYWtNYXAgb2YgZWxlbWVudHMuICovXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zW2ldLl9lbGVtZW50ID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZXMgYW5kIHVwZGF0ZXMgaW5zdGFuY2UncyBsYXlvdXQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtMYXlvdXREYXRhfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fc2V0dGluZ3MubGF5b3V0O1xuICAgIHZhciB3aWR0aDtcbiAgICB2YXIgaGVpZ2h0O1xuICAgIHZhciBuZXdMYXlvdXQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBMZXQncyBpbmNyZW1lbnQgbGF5b3V0IGlkLlxuICAgICsrbGF5b3V0LmlkO1xuXG4gICAgLy8gTGV0J3MgdXBkYXRlIGxheW91dCBpdGVtc1xuICAgIGxheW91dC5pdGVtcy5sZW5ndGggPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zW2ldLl9pc0FjdGl2ZSkgbGF5b3V0Lml0ZW1zLnB1c2godGhpcy5faXRlbXNbaV0pO1xuICAgIH1cblxuICAgIC8vIExldCdzIG1ha2Ugc3VyZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IGNvbnRhaW5lciBkaW1lbnNpb25zLlxuICAgIHRoaXMuX3JlZnJlc2hEaW1lbnNpb25zKCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgY29udGFpbmVyIHdpZHRoIGFuZCBoZWlnaHQgKHdpdGhvdXQgYm9yZGVycykuXG4gICAgd2lkdGggPSB0aGlzLl93aWR0aCAtIHRoaXMuX2JvcmRlckxlZnQgLSB0aGlzLl9ib3JkZXJSaWdodDtcbiAgICBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgLSB0aGlzLl9ib3JkZXJUb3AgLSB0aGlzLl9ib3JkZXJCb3R0b207XG5cbiAgICAvLyBDYWxjdWxhdGUgbmV3IGxheW91dC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncykpIHtcbiAgICAgIG5ld0xheW91dCA9IHNldHRpbmdzKGxheW91dC5pdGVtcywgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0xheW91dCA9IHBhY2tlci5nZXRMYXlvdXQobGF5b3V0Lml0ZW1zLCB3aWR0aCwgaGVpZ2h0LCBsYXlvdXQuc2xvdHMsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgdGhlIGdyaWQncyBsYXlvdXQuXG4gICAgbGF5b3V0LnNsb3RzID0gbmV3TGF5b3V0LnNsb3RzO1xuICAgIGxheW91dC5zZXRXaWR0aCA9IEJvb2xlYW4obmV3TGF5b3V0LnNldFdpZHRoKTtcbiAgICBsYXlvdXQuc2V0SGVpZ2h0ID0gQm9vbGVhbihuZXdMYXlvdXQuc2V0SGVpZ2h0KTtcbiAgICBsYXlvdXQud2lkdGggPSBuZXdMYXlvdXQud2lkdGg7XG4gICAgbGF5b3V0LmhlaWdodCA9IG5ld0xheW91dC5oZWlnaHQ7XG5cbiAgICByZXR1cm4gbGF5b3V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0IGEgZ3JpZCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0gey4uLip9IFthcmddXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fZW1pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdC5hcHBseSh0aGlzLl9lbWl0dGVyLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBhcmUgYW55IGV2ZW50cyBsaXN0ZW5lcnMgZm9yIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX2hhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2VtaXR0ZXIuX2V2ZW50c1tldmVudF07XG4gICAgcmV0dXJuICEhKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoKTtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGNvbnRhaW5lcidzIHdpZHRoLCBoZWlnaHQgYW5kIG9mZnNldHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUJvdW5kaW5nUmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5fd2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgIHRoaXMuX2xlZnQgPSByZWN0LmxlZnQ7XG4gICAgdGhpcy5fdG9wID0gcmVjdC50b3A7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb250YWluZXIncyBib3JkZXIgc2l6ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGxlZnRcbiAgICogQHBhcmFtIHtCb29sZWFufSByaWdodFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvcFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGJvdHRvbVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUJvcmRlcnMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCwgdG9wLCBib3R0b20pIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgaWYgKGxlZnQpIHRoaXMuX2JvcmRlckxlZnQgPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1sZWZ0LXdpZHRoJyk7XG4gICAgaWYgKHJpZ2h0KSB0aGlzLl9ib3JkZXJSaWdodCA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLXJpZ2h0LXdpZHRoJyk7XG4gICAgaWYgKHRvcCkgdGhpcy5fYm9yZGVyVG9wID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItdG9wLXdpZHRoJyk7XG4gICAgaWYgKGJvdHRvbSkgdGhpcy5fYm9yZGVyQm90dG9tID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItYm90dG9tLXdpZHRoJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggYWxsIG9mIGNvbnRhaW5lcidzIGludGVybmFsIGRpbWVuc2lvbnMgYW5kIG9mZnNldHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3JlZnJlc2hEaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5fdXBkYXRlQm9yZGVycygxLCAxLCAxLCAxKTtcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBvciBoaWRlIEdyaWQgaW5zdGFuY2UncyBpdGVtcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvVmlzaWJsZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHsoU2hvd0NhbGxiYWNrfEhpZGVDYWxsYmFjayl9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3NldEl0ZW1zVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKGl0ZW1zLCB0b1Zpc2libGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZ3JpZCA9IHRoaXM7XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGlzSW5zdGFudCA9IG9wdHMuaW5zdGFudCA9PT0gdHJ1ZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBvcHRzLm9uRmluaXNoO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgY291bnRlciA9IHRhcmdldEl0ZW1zLmxlbmd0aDtcbiAgICB2YXIgc3RhcnRFdmVudCA9IHRvVmlzaWJsZSA/IGV2ZW50U2hvd1N0YXJ0IDogZXZlbnRIaWRlU3RhcnQ7XG4gICAgdmFyIGVuZEV2ZW50ID0gdG9WaXNpYmxlID8gZXZlbnRTaG93RW5kIDogZXZlbnRIaWRlRW5kO1xuICAgIHZhciBtZXRob2QgPSB0b1Zpc2libGUgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGNvbXBsZXRlZEl0ZW1zID0gW107XG4gICAgdmFyIGhpZGRlbkl0ZW1zID0gW107XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaXRlbXMgY2FsbCB0aGUgY2FsbGJhY2ssIGJ1dCBkb24ndCBlbWl0IGFueSBldmVudHMuXG4gICAgaWYgKCFjb3VudGVyKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIGNhbGxiYWNrKHRhcmdldEl0ZW1zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHNob3dTdGFydC9oaWRlU3RhcnQgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhzdGFydEV2ZW50KSkge1xuICAgICAgdGhpcy5fZW1pdChzdGFydEV2ZW50LCB0YXJnZXRJdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gU2hvdy9oaWRlIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IHRhcmdldEl0ZW1zW2ldO1xuXG4gICAgICAvLyBJZiBpbmFjdGl2ZSBpdGVtIGlzIHNob3duIG9yIGFjdGl2ZSBpdGVtIGlzIGhpZGRlbiB3ZSBuZWVkIHRvIGRvXG4gICAgICAvLyBsYXlvdXQuXG4gICAgICBpZiAoKHRvVmlzaWJsZSAmJiAhaXRlbS5faXNBY3RpdmUpIHx8ICghdG9WaXNpYmxlICYmIGl0ZW0uX2lzQWN0aXZlKSkge1xuICAgICAgICBuZWVkc0xheW91dCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGluYWN0aXZlIGl0ZW0gaXMgc2hvd24gd2UgYWxzbyBuZWVkIHRvIGRvIGEgbGl0dGxlIGhhY2sgdG8gbWFrZSB0aGVcbiAgICAgIC8vIGl0ZW0gbm90IGFuaW1hdGUgaXQncyBuZXh0IHBvc2l0aW9uaW5nIChsYXlvdXQpLlxuICAgICAgaWYgKHRvVmlzaWJsZSAmJiAhaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgICAgaXRlbS5fbGF5b3V0Ll9za2lwTmV4dEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGEgaGlkZGVuIGl0ZW0gaXMgYmVpbmcgc2hvd24gd2UgbmVlZCB0byByZWZyZXNoIHRoZSBpdGVtJ3NcbiAgICAgIC8vIGRpbWVuc2lvbnMuXG4gICAgICBpZiAodG9WaXNpYmxlICYmIGl0ZW0uX3Zpc2liaWxpdHkuX2lzSGlkZGVuKSB7XG4gICAgICAgIGhpZGRlbkl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cvaGlkZSB0aGUgaXRlbS5cbiAgICAgIGl0ZW0uX3Zpc2liaWxpdHlbbWV0aG9kXShpc0luc3RhbnQsIGZ1bmN0aW9uKGludGVycnVwdGVkLCBpdGVtKSB7XG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGl0ZW0ncyBhbmltYXRpb24gd2FzIG5vdCBpbnRlcnJ1cHRlZCBhZGQgaXQgdG8gdGhlXG4gICAgICAgIC8vIGNvbXBsZXRlZEl0ZW1zIGFycmF5LlxuICAgICAgICBpZiAoIWludGVycnVwdGVkKSBjb21wbGV0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIC8vIElmIGFsbCBpdGVtcyBoYXZlIGZpbmlzaGVkIHRoZWlyIGFuaW1hdGlvbnMgY2FsbCB0aGUgY2FsbGJhY2tcbiAgICAgICAgLy8gYW5kIGVtaXQgc2hvd0VuZC9oaWRlRW5kIGV2ZW50LlxuICAgICAgICBpZiAoLS1jb3VudGVyIDwgMSkge1xuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkgY2FsbGJhY2soY29tcGxldGVkSXRlbXMuc2xpY2UoMCkpO1xuICAgICAgICAgIGlmIChncmlkLl9oYXNMaXN0ZW5lcnMoZW5kRXZlbnQpKSBncmlkLl9lbWl0KGVuZEV2ZW50LCBjb21wbGV0ZWRJdGVtcy5zbGljZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlZnJlc2ggaGlkZGVuIGl0ZW1zLlxuICAgIGlmIChoaWRkZW5JdGVtcy5sZW5ndGgpIHRoaXMucmVmcmVzaEl0ZW1zKGhpZGRlbkl0ZW1zKTtcblxuICAgIC8vIExheW91dCBpZiBuZWVkZWQuXG4gICAgaWYgKG5lZWRzTGF5b3V0ICYmIGxheW91dCkge1xuICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBoZWxwZXJzXG4gICAqICoqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogTWVyZ2UgZGVmYXVsdCBzZXR0aW5ncyB3aXRoIHVzZXIgc2V0dGluZ3MuIFRoZSByZXR1cm5lZCBvYmplY3QgaXMgYSBuZXdcbiAgICogb2JqZWN0IHdpdGggbWVyZ2VkIHZhbHVlcy4gVGhlIG1lcmdpbmcgaXMgYSBkZWVwIG1lcmdlIG1lYW5pbmcgdGhhdCBhbGxcbiAgICogb2JqZWN0cyBhbmQgYXJyYXlzIHdpdGhpbiB0aGUgcHJvdmlkZWQgc2V0dGluZ3Mgb2JqZWN0cyB3aWxsIGJlIGFsc28gbWVyZ2VkXG4gICAqIHNvIHRoYXQgbW9kaWZ5aW5nIHRoZSB2YWx1ZXMgb2YgdGhlIHNldHRpbmdzIG9iamVjdCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uXG4gICAqIHRoZSByZXR1cm5lZCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0U2V0dGluZ3NcbiAgICogQHBhcmFtIHtPYmplY3R9IFt1c2VyU2V0dGluZ3NdXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYSBuZXcgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VTZXR0aW5ncyhkZWZhdWx0U2V0dGluZ3MsIHVzZXJTZXR0aW5ncykge1xuICAgIC8vIENyZWF0ZSBhIGZyZXNoIGNvcHkgb2YgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICB2YXIgcmV0ID0gbWVyZ2VPYmplY3RzKHt9LCBkZWZhdWx0U2V0dGluZ3MpO1xuXG4gICAgLy8gTWVyZ2UgdXNlciBzZXR0aW5ncyB0byBkZWZhdWx0IHNldHRpbmdzLlxuICAgIGlmICh1c2VyU2V0dGluZ3MpIHtcbiAgICAgIHJldCA9IG1lcmdlT2JqZWN0cyhyZXQsIHVzZXJTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHZpc2libGUvaGlkZGVuIHN0eWxlcyBtYW51YWxseSBzbyB0aGF0IHRoZSB3aG9sZSBvYmplY3QgaXNcbiAgICAvLyBvdmVycmlkZGVuIGluc3RlYWQgb2YgdGhlIHByb3BzLlxuICAgIHJldC52aXNpYmxlU3R5bGVzID0gKHVzZXJTZXR0aW5ncyB8fCAwKS52aXNpYmxlU3R5bGVzIHx8IChkZWZhdWx0U2V0dGluZ3MgfHwgMCkudmlzaWJsZVN0eWxlcztcbiAgICByZXQuaGlkZGVuU3R5bGVzID0gKHVzZXJTZXR0aW5ncyB8fCAwKS5oaWRkZW5TdHlsZXMgfHwgKGRlZmF1bHRTZXR0aW5ncyB8fCAwKS5oaWRkZW5TdHlsZXM7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHR3byBvYmplY3RzIHJlY3Vyc2l2ZWx5IChkZWVwIG1lcmdlKS4gVGhlIHNvdXJjZSBvYmplY3QncyBwcm9wZXJ0aWVzXG4gICAqIGFyZSBtZXJnZWQgdG8gdGhlIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAgICogICAtIFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gICAqICAgLSBUaGUgc291cmNlIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlT2JqZWN0cyh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIgbGVuZ3RoID0gc291cmNlS2V5cy5sZW5ndGg7XG4gICAgdmFyIGlzU291cmNlT2JqZWN0O1xuICAgIHZhciBwcm9wTmFtZTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcHJvcE5hbWUgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgaXNTb3VyY2VPYmplY3QgPSBpc1BsYWluT2JqZWN0KHNvdXJjZVtwcm9wTmFtZV0pO1xuXG4gICAgICAvLyBJZiB0YXJnZXQgYW5kIHNvdXJjZSB2YWx1ZXMgYXJlIGJvdGggb2JqZWN0cywgbWVyZ2UgdGhlIG9iamVjdHMgYW5kXG4gICAgICAvLyBhc3NpZ24gdGhlIG1lcmdlZCB2YWx1ZSB0byB0aGUgdGFyZ2V0IHByb3BlcnR5LlxuICAgICAgaWYgKGlzUGxhaW5PYmplY3QodGFyZ2V0W3Byb3BOYW1lXSkgJiYgaXNTb3VyY2VPYmplY3QpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IG1lcmdlT2JqZWN0cyhtZXJnZU9iamVjdHMoe30sIHRhcmdldFtwcm9wTmFtZV0pLCBzb3VyY2VbcHJvcE5hbWVdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHNvdXJjZSdzIHZhbHVlIGlzIG9iamVjdCBhbmQgdGFyZ2V0J3MgaXMgbm90IGxldCdzIGNsb25lIHRoZSBvYmplY3QgYXNcbiAgICAgIC8vIHRoZSB0YXJnZXQncyB2YWx1ZS5cbiAgICAgIGlmIChpc1NvdXJjZU9iamVjdCkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gbWVyZ2VPYmplY3RzKHt9LCBzb3VyY2VbcHJvcE5hbWVdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHNvdXJjZSdzIHZhbHVlIGlzIGFuIGFycmF5IGxldCdzIGNsb25lIHRoZSBhcnJheSBhcyB0aGUgdGFyZ2V0J3NcbiAgICAgIC8vIHZhbHVlLlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV0uc2xpY2UoMCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbiBhbGwgb3RoZXIgY2FzZXMgbGV0J3MganVzdCBkaXJlY3RseSBhc3NpZ24gdGhlIHNvdXJjZSdzIHZhbHVlIGFzIHRoZVxuICAgICAgLy8gdGFyZ2V0J3MgdmFsdWUuXG4gICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIEdyaWQ7XG5cbn0pKTtcbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBBbHRlcm5hdGl2ZVZpc3VhbGl6ZXJzV3JhcHBlciBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aXN1YWxpemVyczogQXJyYXk8VmlzdWFsaXplckJhc2U+LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIGlmICghdmlzdWFsaXplcnMgfHwgdmlzdWFsaXplcnMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlZpc3VhbGl6ZXJBcnJheVdyYXBwZXIgd29ya3Mgd2l0aCB2aXN1YWxpemVycyBjb2xsZWN0aW9uIG9ubHkuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgdmlzdWFsaXplci5vblVwZGF0ZSA9ICgpID0+IHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcImNoYW5nZVZpc3VhbGl6ZXJcIiwgKCkgPT5cbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZVNlbGVjdG9yKFxuICAgICAgICB0aGlzLnZpc3VhbGl6ZXJzLm1hcCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdmlzdWFsaXplci5uYW1lLFxuICAgICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInZpc3VhbGl6ZXJfXCIgKyB2aXN1YWxpemVyLm5hbWUpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMudmlzdWFsaXplci5uYW1lID09PSBvcHRpb24udmFsdWUsXG4gICAgICAgIChlOiBhbnkpID0+IHRoaXMuc2V0VmlzdWFsaXplcihlLnRhcmdldC52YWx1ZSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy52aXN1YWxpemVyID0gdmlzdWFsaXplcnNbMF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdmlzdWFsaXplckNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdmlzdWFsaXplcjogVmlzdWFsaXplckJhc2U7XG5cbiAgcHJpdmF0ZSBzZXRWaXN1YWxpemVyKG5hbWU6IHN0cmluZykge1xuICAgIGlmICghIXRoaXMudmlzdWFsaXplcikge1xuICAgICAgdGhpcy52aXN1YWxpemVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy52aXN1YWxpemVyID0gdGhpcy52aXN1YWxpemVycy5maWx0ZXIoKHYpID0+IHYubmFtZSA9PT0gbmFtZSlbMF07XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICB1cGRhdGVEYXRhKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICBzdXBlci51cGRhdGVEYXRhKGRhdGEpO1xuICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgdmlzdWFsaXplci51cGRhdGVEYXRhKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudmlzdWFsaXplckNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnZpc3VhbGl6ZXIucmVuZGVyKHRoaXMudmlzdWFsaXplckNvbnRhaW5lcik7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgdmlzdWFsaXplci5vblVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICB0aGlzLnZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlckFsdGVybmF0aXZlc1Zpc3VhbGl6ZXIoXG4gIEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyXG4pO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uQm9vbGVhbk1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBJdGVtVmFsdWUgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhUHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Nb2RlbCBleHRlbmRzIFNlbGVjdEJhc2Uge1xuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogc3RyaW5nW107XG4gIHB1YmxpYyBjaGFydFR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zLCBuYW1lIHx8IFwiYm9vbGVhblwiKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYm9vbGVhblF1ZXN0aW9uKCkge1xuICAgIHJldHVybiA8UXVlc3Rpb25Cb29sZWFuTW9kZWw+dGhpcy5xdWVzdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHJ1ZUNvbG9yID0gXCJcIjtcbiAgcHVibGljIHN0YXRpYyBmYWxzZUNvbG9yID0gXCJcIjtcblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgcmV0dXJuIG5ldyBJdGVtVmFsdWUodmFsdWVzW2xhYmVscy5pbmRleE9mKGl0ZW1UZXh0KV0sIGl0ZW1UZXh0KTtcbiAgfVxuXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVUcnVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyB0aGlzLmJvb2xlYW5RdWVzdGlvbi52YWx1ZVRydWVcbiAgICAgICAgOiB0cnVlLFxuICAgICAgdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVGYWxzZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVGYWxzZVxuICAgICAgICA6IGZhbHNlLFxuICAgIF07XG4gIH1cblxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIGxhYmVscyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgaWYgKHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsVHJ1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsYWJlbHNbMF0gPSB0aGlzLmJvb2xlYW5RdWVzdGlvbi5sb2NMYWJlbFRydWUudGV4dE9ySHRtbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsRmFsc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGFiZWxzWzFdID0gdGhpcy5ib29sZWFuUXVlc3Rpb24ubG9jTGFiZWxGYWxzZS50ZXh0T3JIdG1sO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBFbGVtZW50VmlzaWJpbGl0eSB7XHJcbiAgVmlzaWJsZSxcclxuICBJbnZpc2libGUsXHJcbiAgUHVibGljSW52aXNpYmxlLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWaXN1YWxpemVyUGFuZWxFbGVtZW50IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eTtcclxuICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgbG9jYWxlOiBzdHJpbmc7XHJcbiAgZWxlbWVudHM6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlcm1pc3Npb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eTtcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyBkYXRhIGluZm86XHJcbiAqIGRhdGFOYW1lIC0gcXVlc3Rpb24gbmFtZSwgdXNlZCBhcyBhIGtleSB0byBvYnRhaW4gcXVlc3Rpb24gZGF0YVxyXG4gKiBnZXRWYWx1ZXMgLSBmdW5jdGlvbiByZXR1cm5pbmcgYW4gYXJyYXkgb2YgYWxsIHBvc3NpYmxlIHZhbHVlc1xyXG4gKiBnZXRMYWJlbHMgLSBmdW5jdGlvbiByZXR1cm5pbmcgYW4gYXJyYXkgb2YgaHVtYW4tZnJpZW5kbHkgZGVzY3JpcHRpb25zIGZvciB2YWx1ZXNcclxuICogZ2V0U2VyaWVzVmFsdWVzIC0gZnVuY3Rpb24gcmV0dXJuaW5nIGFuIGFycmF5IG9mIGFsbCBwb3NzaWJsZSBzZXJpZXMgdmFsdWVzXHJcbiAqIGdldFNlcmllc0xhYmVscyAtIGZ1bmN0aW9uIHJldHVybmluZyBhbiBhcnJheSBvZiBodW1hbi1mcmllbmRseSBkZXNjcmlwdGlvbnMgZm9yIHNlcmllcyB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFJbmZvIHtcclxuICBkYXRhTmFtZTogc3RyaW5nO1xyXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+O1xyXG4gIGdldExhYmVscygpOiBBcnJheTxzdHJpbmc+O1xyXG4gIGdldFNlcmllc1ZhbHVlcygpOiBBcnJheTxzdHJpbmc+O1xyXG4gIGdldFNlcmllc0xhYmVscygpOiBBcnJheTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVByb3ZpZGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHNlcmllc01hcmtlcktleSA9IFwiX19zYV9zZXJpZXNfbmFtZVwiO1xyXG5cclxuICBwcml2YXRlIF9maWx0ZXJlZERhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT47XHJcbiAgcHJpdmF0ZSBfc3RhdGlzdGljc0NhY2hlOiB7IFtpbmRleDogc3RyaW5nXTogQXJyYXk8QXJyYXk8bnVtYmVyPj4gfTtcclxuICBwcm90ZWN0ZWQgZmlsdGVyVmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PiA9IFtdKSB7fVxyXG5cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSAhPT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMucmFpc2VEYXRhQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXQgZGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLl9kYXRhID0gW10uY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBmaWx0ZXJlZERhdGEoKSB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyZWREYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGZpbHRlcktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpbHRlclZhbHVlcyk7XHJcbiAgICAgIGlmIChmaWx0ZXJLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuZmlsdGVyVmFsdWVzKS5zb21lKFxyXG4gICAgICAgICAgICAoa2V5KSA9PiBpdGVtW2tleV0gIT09IHRoaXMuZmlsdGVyVmFsdWVzW2tleV1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWREYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBmaWx0ZXIgYnkgcXVlc3Rpb24gbmFtZSBhbmQgdmFsdWUuXHJcbiAgICovXHJcbiAgcHVibGljIHNldEZpbHRlcihxdWVzdGlvbk5hbWU6IHN0cmluZywgc2VsZWN0ZWRWYWx1ZTogYW55KSB7XHJcbiAgICB2YXIgZmlsdGVyQ2hhbmdlZCA9IHRydWU7XHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZpbHRlckNoYW5nZWQgPSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdICE9PSBzZWxlY3RlZFZhbHVlO1xyXG4gICAgICB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdID0gc2VsZWN0ZWRWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbHRlckNoYW5nZWQgPSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlckNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldERhdGFDb3JlKGRhdGFJbmZvOiBJRGF0YUluZm8pIHtcclxuICAgIGNvbnN0IGRhdGFOYW1lID0gZGF0YUluZm8uZGF0YU5hbWU7XHJcbiAgICBjb25zdCBzdGF0aXN0aWNzOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IGRhdGFJbmZvLmdldFZhbHVlcygpO1xyXG4gICAgY29uc3QgdmFsdWVzSW5kZXg6IHsgW2luZGV4OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgdmFsdWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHZhbHVlc0luZGV4W3ZhbF0gPSBpbmRleDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlcmllcyA9IGRhdGFJbmZvLmdldFNlcmllc1ZhbHVlcygpO1xyXG4gICAgY29uc3Qgc2VyaWVzSW5kZXg6IHsgW2luZGV4OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgc2VyaWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHNlcmllc0luZGV4W3ZhbF0gPSBpbmRleDtcclxuICAgICAgc3RhdGlzdGljcy5wdXNoKG5ldyBBcnJheTxudW1iZXI+KHZhbHVlcy5sZW5ndGgpLmZpbGwoMCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHN0YXRpc3RpY3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHN0YXRpc3RpY3MucHVzaChuZXcgQXJyYXk8bnVtYmVyPih2YWx1ZXMubGVuZ3RoKS5maWxsKDApKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkRGF0YS5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1tkYXRhTmFtZV07XHJcbiAgICAgIGlmIChyb3dWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3Qgcm93VmFsdWVzID0gQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkgPyByb3dWYWx1ZSA6IFtyb3dWYWx1ZV07XHJcbiAgICAgICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpZiAocm93W0RhdGFQcm92aWRlci5zZXJpZXNNYXJrZXJLZXldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gU2VyaWVzIGFyZSBsYWJlbGxlZCBieSBzZXJpZXNNYXJrZXJLZXkgaW4gcm93IGRhdGFcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWVzTm8gPVxyXG4gICAgICAgICAgICAgIHNlcmllc0luZGV4W3Jvd1tEYXRhUHJvdmlkZXIuc2VyaWVzTWFya2VyS2V5XV0gfHwgMDtcclxuICAgICAgICAgICAgcm93VmFsdWVzLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRpc3RpY3Nbc2VyaWVzTm9dW3ZhbHVlc0luZGV4W3ZhbF1dKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2VyaWVzIGFyZSB0aGUga2V5cyBpbiBxdWVzdGlvbiB2YWx1ZSAobWF0cml4IHF1ZXN0aW9uKVxyXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGluayBhYm91dCB0aGUgZGUtbm9ybWFsaXphdGlvbiBhbmQgY29tYmluZSB3aXRoIHRoZSBwcmV2aW91cyBjYXNlXHJcbiAgICAgICAgICAgIHJvd1ZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICBzZXJpZXMuZm9yRWFjaCgoc2VyaWVzTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbFtzZXJpZXNOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcmllc05vID0gc2VyaWVzSW5kZXhbc2VyaWVzTmFtZV0gfHwgMDtcclxuICAgICAgICAgICAgICAgICAgc3RhdGlzdGljc1tzZXJpZXNOb11bdmFsdWVzSW5kZXhbdmFsW3Nlcmllc05hbWVdXV0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIE5vIHNlcmllc1xyXG4gICAgICAgICAgcm93VmFsdWVzLmZvckVhY2goKHZhbCkgPT4gc3RhdGlzdGljc1swXVt2YWx1ZXNJbmRleFt2YWxdXSsrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZVtkYXRhTmFtZV0gPSBzdGF0aXN0aWNzO1xyXG4gICAgcmV0dXJuIHN0YXRpc3RpY3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGNhbGN1bGF0ZWQgc3RhdGlzY3RpY3MgZm9yIHRoZSBJRGF0YUluZm8gb2JqZWN0LlxyXG4gICAqL1xyXG4gIGdldERhdGEoZGF0YUluZm86IElEYXRhSW5mbykge1xyXG4gICAgY29uc3QgZGF0YU5hbWUgPSBkYXRhSW5mby5kYXRhTmFtZTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlW2RhdGFOYW1lXSA9PT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMuX3N0YXRpc3RpY3NDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlID0ge307XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc3RhdGlzdGljc0NhY2hlW2RhdGFOYW1lXSA9IHRoaXMuZ2V0RGF0YUNvcmUoZGF0YUluZm8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9zdGF0aXN0aWNzQ2FjaGVbZGF0YU5hbWVdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVzIHdoZW4gZGF0YSBoYXMgYmVlbiBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvbkRhdGFDaGFuZ2VkID0gbmV3IEV2ZW50PFxyXG4gICAgKHNlbmRlcjogRGF0YVByb3ZpZGVyLCBvcHRpb25zOiBhbnkpID0+IGFueSxcclxuICAgIGFueVxyXG4gID4oKTtcclxuXHJcbiAgcHJvdGVjdGVkIHJhaXNlRGF0YUNoYW5nZWQoKSB7XHJcbiAgICBpZiAoIXRoaXMub25EYXRhQ2hhbmdlZC5pc0VtcHR5KSB7XHJcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlZC5maXJlKHRoaXMsIHt9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuLy9sb2NhbGl6YXRpb25cbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mYXJzaVwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZyZW5jaFwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL3J1c3NpYW5cIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL2RhdGFQcm92aWRlclwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi4vbnVtYmVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vc2VsZWN0QmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL21hdHJpeFwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL2Jvb2xlYW5cIjtcbmV4cG9ydCAqIGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1wiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hdHJpeERyb3Bkb3duXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXJcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL3Bsb3RseS9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3dvcmRjbG91ZC93b3JkY2xvdWRcIjtcbmV4cG9ydCAqIGZyb20gXCIuLi93b3JkY2xvdWQvc3RvcHdvcmRzL2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdGV4dFwiO1xuZXhwb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHMvaW5kZXhcIjtcbiIsImltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XHJcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJdGVtVmFsdWUgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJJbmZvIHtcclxuICBwcml2YXRlIF9odG1sRWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSB0ZXh0OiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IodmlzdWFsaXplcjogU2VsZWN0QmFzZSkge1xyXG4gICAgdGhpcy5faHRtbEVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2EtcXVlc3Rpb25fX2ZpbHRlclwiKVxyXG4gICAgKTtcclxuICAgIHRoaXMudGV4dCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwic3BhblwiLFxyXG4gICAgICBcInNhLXF1ZXN0aW9uX19maWx0ZXItdGV4dFwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5faHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuICAgIGNvbnN0IGZpbHRlckNsZWFyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlQnV0dG9uKCgpID0+IHtcclxuICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcclxuICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjbGVhckJ1dHRvblwiKSk7XHJcbiAgICB0aGlzLl9odG1sRWxlbWVudC5hcHBlbmRDaGlsZChmaWx0ZXJDbGVhcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGh0bWxFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0bWxFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShzZWxlY3Rpb246IHsgdmFsdWU6IGFueTsgdGV4dDogc3RyaW5nIH0pIHtcclxuICAgIGlmIChzZWxlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBzZWxlY3Rpb24udmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgdGhpcy50ZXh0LmlubmVySFRNTCA9IFwiRmlsdGVyOiBbXCIgKyBzZWxlY3Rpb24udGV4dCArIFwiXVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB0aGlzLnRleHQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiY29uc3QgTXV1cmkgPSByZXF1aXJlKFwibXV1cmlcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0RW5naW5lIHtcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2FsbG93ZWQ6IGJvb2xlYW4pIHt9XHJcblxyXG4gIHByb3RlY3RlZCBzdGFydENvcmUoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge31cclxuICBwcm90ZWN0ZWQgc3RvcENvcmUoKSB7fVxyXG4gIHByb3RlY3RlZCB1cGRhdGVDb3JlKCkge31cclxuXHJcbiAgZ2V0IGFsbG93ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dlZDtcclxuICB9XHJcblxyXG4gIHN0YXJ0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLl9hbGxvd2VkKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRDb3JlKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0b3AoKSB7XHJcbiAgICBpZiAodGhpcy5fYWxsb3dlZCkge1xyXG4gICAgICB0aGlzLnN0b3BDb3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLl9hbGxvd2VkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4sIG9wdGlvbnM/OiBhbnkpIHt9XHJcbiAgcmVtb3ZlKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4sIG9wdGlvbnM/OiBhbnkpIHt9XHJcblxyXG4gIG9uTW92ZUNhbGxiYWNrOiAoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE11dXJpTGF5b3V0RW5naW5lIGV4dGVuZHMgTGF5b3V0RW5naW5lIHtcclxuICBwcml2YXRlIF9tdXVyaTogYW55ID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2xheW91dGluZ1RpbWVyOiBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFsbG93ZWQ6IGJvb2xlYW4sIHByaXZhdGUgX3NlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGFsbG93ZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0Q29yZShjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9tdXVyaSA9IG5ldyBNdXVyaShjb250YWluZXIsIHtcclxuICAgICAgZHJhZ1N0YXJ0UHJlZGljYXRlOiB7XHJcbiAgICAgICAgaGFuZGxlOiBcIi5zYS1xdWVzdGlvbl9fdGl0bGVcIixcclxuICAgICAgfSxcclxuICAgICAgaXRlbXM6IHRoaXMuX3NlbGVjdG9yLFxyXG4gICAgICBkcmFnRW5hYmxlZDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbXV1cmkub24oXHJcbiAgICAgIFwibW92ZVwiLFxyXG4gICAgICAoZGF0YTogYW55KSA9PlxyXG4gICAgICAgIHRoaXMub25Nb3ZlQ2FsbGJhY2sgJiYgdGhpcy5vbk1vdmVDYWxsYmFjayhkYXRhLmZyb21JbmRleCwgZGF0YS50b0luZGV4KVxyXG4gICAgKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHN0b3BDb3JlKCkge1xyXG4gICAgdGhpcy5fbXV1cmkub2ZmKFwibW92ZVwiKTtcclxuICAgIHRoaXMuX211dXJpLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuX211dXJpID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgdXBkYXRlQ29yZSgpIHtcclxuICAgIGlmICh0aGlzLl9sYXlvdXRpbmdUaW1lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9sYXlvdXRpbmdUaW1lcik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sYXlvdXRpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9sYXlvdXRpbmdUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5fbXV1cmkucmVmcmVzaEl0ZW1zKCk7XHJcbiAgICAgIHRoaXMuX211dXJpLmxheW91dCgpO1xyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgYWRkKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4sIG9wdGlvbnM/OiBhbnkpIHtcclxuICAgIHRoaXMuX211dXJpLmFkZChlbGVtZW50cywgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIHJlbW92ZShlbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQ+LCBvcHRpb25zPzogYW55KSB7XHJcbiAgICB0aGlzLl9tdXVyaS5yZW1vdmUoZWxlbWVudHMsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iLCIvL1VuY29tbWVudCB0aGlzIGxpbmUgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlXG4vL2ltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZW5nbGlzaFN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0IE1lXCIsXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJNYWtlIGNvbHVtbiBwcml2YXRlXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHVibGljXCIsXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gIHJlbW92ZVJvd3M6IFwiUmVtb3ZlIHJvd3NcIixcbiAgc2hvd0xhYmVsOiBcIlNob3dcIixcbiAgZW50cmllc0xhYmVsOiBcImVudHJpZXNcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG91Z2hudXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJQaWVcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCJIaWRlXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIk1ha2UgcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQnV0dG9uOiBcIk1ha2UgcHVibGljXCIsXG4gIHNob3dCdXR0b246IFwiU2hvd1wiLFxuICByZXNldEZpbHRlcjogXCJSZXNldCBGaWx0ZXJcIixcbiAgY2hhbmdlTG9jYWxlOiBcIkNoYW5nZSBMb2NhbGVcIixcbiAgY2xlYXJCdXR0b246IFwiQ2xlYXJcIixcbiAgYWRkRWxlbWVudDogXCJDaG9vc2UgcXVlc3Rpb24gdG8gc2hvdy4uLlwiLFxuICBkZWZhdWx0T3JkZXI6IFwiRGVmYXVsdFwiLFxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJTaG93IG1pbm9yIGNvbHVtbnNcIixcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCIsXG4gIHNob3dQZXJjZW50YWdlczogXCJTaG93IHBlcmNlbnRhZ2VzXCIsXG4gIGhpZGVQZXJjZW50YWdlczogXCJIaWRlIHBlcmNlbnRhZ2VzXCIsXG59O1xuXG4vL1VuY29tbWVudCB0aGVzZSB0d28gbGluZXMgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlLiBZb3Ugc2hvdWxkIHJlcGxhY2UgXCJlblwiIGFuZCBlblN0cmluZ3Mgd2l0aCB5b3VyIGxvY2FsZSAoXCJmclwiLCBcImRlXCIgYW5kIHNvIG9uKSBhbmQgeW91ciB2YXJpYWJsZS5cbi8vbG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuLy9sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiRW5nbGlzaFwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBmYXJzaVN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcItqv2LHZiNmHINio2YbYr9uMINio2KdcIixcbiAgdW5ncm91cEJ1dHRvbjogXCLYrdiw2YEg2q/YsdmI2YdcIixcbiAgc2VsZWN0QnV0dG9uOiBcItin2YbYqtiu2KfYqFwiLFxuICBoaWRlQ29sdW1uOiBcItmF2K7ZgduMINqp2LHYr9mGINiz2KrZiNmGXCIsXG4gIHNob3dDb2x1bW46IFwi2YbZhdin24zYtCDYs9iq2YjZhlwiLFxuICBtb3ZlVG9EZXRhaWw6IFwi2KfZhtiq2YLYp9mEINio2Ycg2KzYstim24zYp9iqXCIsXG4gIHNob3dBc0NvbHVtbjogXCLZhtmF2KfbjNi0INio2Ycg2LnZhtmI2KfZhiDYs9iq2YjZhlwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwi2YXYqtmI2YYg2K/YsSDYrNiv2YjZhFwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCLYp9io2LEg2qnZhNmF2KfYqlwiLFxuICBjaGFydFR5cGVfYmFyOiBcItmF24zZhNmHINin24xcIixcbiAgY2hhcnRUeXBlX3BpZTogXCLYr9in2KjYsdmHINin24wocGllKVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCLZvtix2KfaqdmG2K/ar9uMKFNjYXR0ZXIpXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCLYudmC2LHYqNmHINin24xcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCLZhdiu2YHbjFwiLFxuICByZXNldEZpbHRlcjogXCLYqNin2LLZhti02KfZhtuMINmB24zZhNiq2LHZh9inXCIsXG4gIGNsZWFyQnV0dG9uOiBcItm+2KfaqSDaqdix2K/ZhlwiLFxuICBhZGRFbGVtZW50OiBcItin2YbYqtiu2KfYqCDYs9mI2KfZhCDYqNix2KfbjCDZhtmF2KfbjNi0Li4uXCJcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmFcIl0gPSBmYXJzaVN0cmluZ3M7XG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmYVwiXSA9IFwiRmFyc2koUGVyc2lhbilcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIGZyZW5jaFN0cmluZ3MgPSB7XHJcbiAgICBncm91cEJ1dHRvbjogXCJHcm91cGVyXCIsXHJcbiAgICB1bmdyb3VwQnV0dG9uOiBcIkRpc3NvY2llclwiLFxyXG4gICAgc2VsZWN0QnV0dG9uOiBcIlPDqWxlY3Rpb25uZXJcIixcclxuICAgIGhpZGVDb2x1bW46IFwiTWFzcXVlciBjb2xvbm5lXCIsXHJcbiAgICBzaG93Q29sdW1uOiBcIkFmZmljaGVyIGNvbG9ubmVcIixcclxuICAgIG1ha2VQcml2YXRlQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHByaXbDqVwiLFxyXG4gICAgbWFrZVB1YmxpY0NvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwdWJsaWNcIixcclxuICAgIG1vdmVUb0RldGFpbDogXCJEw6lwbGFjZXIgdmVycyBkw6l0YWlsc1wiLFxyXG4gICAgc2hvd0FzQ29sdW1uOiBcIkFmZmljaGVyIGVuIGNvbG9ubmVcIixcclxuICAgIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0ZXMgZW4gdGFibGVcIixcclxuICAgIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk51YWdlcyBkZSBtb3RzXCIsXHJcbiAgICBjaGFydFR5cGVfYmFyOiBcIkJhcnJlc1wiLFxyXG4gICAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiQmFycmVzIGVtcGlsw6llc1wiLFxyXG4gICAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkFubmVhdVwiLFxyXG4gICAgY2hhcnRUeXBlX3BpZTogXCJTZWN0ZXVyc1wiLFxyXG4gICAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiTnVhZ2VzIGRlIHBvaW50c1wiLFxyXG4gICAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXHJcbiAgICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxlc1wiLFxyXG4gICAgaGlkZUJ1dHRvbjogXCJNYXNxdWVyXCIsXHJcbiAgICByZXNldEZpbHRlcjogXCJSYWZyYWljaGlyIEZpbHRyZXNcIixcclxuICAgIGNsZWFyQnV0dG9uOiBcIlJhZnJhaWNoaXJcIixcclxuICAgIGFkZEVsZW1lbnQ6IFwiQ2hvaXNpciBsYSBxdWVzdGlvbiDDoCBhZmZpY2hlci4uLlwiLFxyXG4gICAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1dFwiLFxyXG4gICAgYXNjT3JkZXI6IFwiQXNjZW5kYW50XCIsXHJcbiAgICBkZXNjT3JkZXI6IFwiRGVzY2VuZGFudFwiLFxyXG4gICAgc2hvd01pbm9yQ29sdW1uczogXCJBZmZpY2hlciBsZXMgY29sb25uZXMgbWluZXVyZXNcIlxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN0cmluZ3M7XHJcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZyXCJdID0gXCJGcmVuY2hcIjsiLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIHJ1c3NpYW5TdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0cyBpbiB0YWJsZVwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhY2tlZCBCYXJcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwi0KHQutGA0YvRgtGMXCIsXG4gIHNob3dCdXR0b246IFwi0J/QvtC60LDQt9Cw0YLRjFwiLFxuICByZXNldEZpbHRlcjogXCLQntGH0LjRgdGC0LjRgtGMINGE0LjQu9GM0YLRgFwiLFxuICBjaGFuZ2VMb2NhbGU6IFwi0KHQvNC10L3QuNGC0Ywg0Y/Qt9GL0LpcIixcbiAgY2xlYXJCdXR0b246IFwiQ2xlYXJcIixcbiAgYWRkRWxlbWVudDogXCJDaG9vc2UgcXVlc3Rpb24gdG8gc2hvdy4uLlwiLFxuICBkZWZhdWx0T3JkZXI6IFwiRGVmYXVsdFwiLFxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJTaG93IG1pbm9yIGNvbHVtbnNcIixcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCIsXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcInJ1XCJdID0gcnVzc2lhblN0cmluZ3M7XG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJydVwiXSA9IFwiUnVzc2lhblwiO1xuIiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xuXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxuICBkZWZhdWx0TG9jYWxlVmFsdWU6IFwiZW5cIixcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgc3VwcG9ydGVkTG9jYWxlczogPEFycmF5PGFueT4+W10sXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcbiAgICAgID8gXCJcIlxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGN1cnJlbnRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgZGVmYXVsdExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgZ2V0TG9jYWxlczogZnVuY3Rpb24oKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZExvY2FsZXMgJiYgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzLnNvcnQoKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcImVuZ2xpc2hcIjtcbiIsImltcG9ydCB7IEl0ZW1WYWx1ZSwgUXVlc3Rpb25NYXRyaXhNb2RlbCwgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXggZXh0ZW5kcyBTZWxlY3RCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdCxcbiAgICBuYW1lPzogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zLCBuYW1lIHx8IFwibWF0cml4XCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBtYXRyaXhRdWVzdGlvbigpOiBRdWVzdGlvbk1hdHJpeE1vZGVsIHtcbiAgICByZXR1cm4gPFF1ZXN0aW9uTWF0cml4TW9kZWw+dGhpcy5xdWVzdGlvbjtcbiAgfVxuXG4gIGdldFNlcmllc1ZhbHVlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXhRdWVzdGlvbi5yb3dzLm1hcCgocm93OiBJdGVtVmFsdWUpID0+IFwiXCIgKyByb3cudmFsdWUpO1xuICB9XG5cbiAgZ2V0U2VyaWVzTGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeFF1ZXN0aW9uLnJvd3MubWFwKChyb3c6IEl0ZW1WYWx1ZSkgPT5cbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZSh0aGlzLm1hdHJpeFF1ZXN0aW9uLnJvd3MsIHJvdy52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4UXVlc3Rpb24uY29sdW1ucy5maWx0ZXIoXG4gICAgICAoY29sdW1uOiBJdGVtVmFsdWUpID0+IGNvbHVtbi50ZXh0ID09PSBpdGVtVGV4dFxuICAgIClbMF07XG4gIH1cblxuICB2YWx1ZXNTb3VyY2UoKTogQXJyYXk8SXRlbVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4UXVlc3Rpb24uY29sdW1ucztcbiAgfVxuXG4gIGdldERhdGEoKTogYW55W10ge1xuICAgIGNvbnN0IHN0YXRpc3RpY3MgPSBzdXBlci5nZXREYXRhKCk7XG4gICAgY29uc3Qgc2VyaWVzID0gdGhpcy5nZXRTZXJpZXNWYWx1ZXMoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIGlmIChzZXJpZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgcHJlcGFyZWREYXRhOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuICAgICAgdmFsdWVzLmZvckVhY2goKHZhbCwgdmFsdWVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzZXJpZXNEYXRhID0gc2VyaWVzLm1hcChcbiAgICAgICAgICAoc2VyaWVzTmFtZSwgc2VyaWVzSW5kZXgpID0+IHN0YXRpc3RpY3Nbc2VyaWVzSW5kZXhdW3ZhbHVlSW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIHByZXBhcmVkRGF0YS5wdXNoKHNlcmllc0RhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJlcGFyZWREYXRhO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGlzdGljcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4vdXRpbHMvaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIE51bWJlck1vZGVsIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBwcml2YXRlIF9yZXN1bHRBdmVyYWdlOiBudW1iZXI7XG4gIHByaXZhdGUgX3Jlc3VsdE1pbjogbnVtYmVyO1xuICBwcml2YXRlIF9yZXN1bHRNYXg6IG51bWJlcjtcblxuICBwdWJsaWMgc3RhdGljIHN0ZXBzQ291bnQgPSA1O1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlVGV4dHNDYWxsYmFjazogKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBtYXhWYWx1ZTogbnVtYmVyLFxuICAgIG1pblZhbHVlOiBudW1iZXIsXG4gICAgc3RlcHNDb3VudDogbnVtYmVyLFxuICAgIHRleHRzOiBzdHJpbmdbXVxuICApID0+IHN0cmluZ1tdO1xuXG4gIHByb3RlY3RlZCBjaGFydFR5cGVzOiBBcnJheTxzdHJpbmc+O1xuICBjaGFydFR5cGU6IFN0cmluZztcblxuICBwdWJsaWMgc3RhdGljIHNob3dBc1BlcmNlbnRhZ2UgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICBuYW1lPzogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zLCBuYW1lIHx8IFwibnVtYmVyXCIpO1xuICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcImNoYW5nZUNoYXJ0VHlwZVwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jaGFydFR5cGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIERvY3VtZW50SGVscGVyLmNyZWF0ZVNlbGVjdG9yKFxuICAgICAgICAgIHRoaXMuY2hhcnRUeXBlcy5tYXAoKGNoYXJ0VHlwZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmFsdWU6IGNoYXJ0VHlwZSxcbiAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYXJ0VHlwZV9cIiArIGNoYXJ0VHlwZSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIChvcHRpb246IGFueSkgPT4gdGhpcy5jaGFydFR5cGUgPT09IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldENoYXJ0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25EYXRhQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Jlc3VsdE1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXN1bHRNYXggPSB1bmRlZmluZWQ7XG4gICAgc3VwZXIub25EYXRhQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uQ2hhcnRUeXBlQ2hhbmdlZCgpIHt9XG5cbiAgcHJvdGVjdGVkIHNldENoYXJ0VHlwZShjaGFydFR5cGU6IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2hhcnRUeXBlcy5pbmRleE9mKGNoYXJ0VHlwZSkgIT09IC0xICYmXG4gICAgICB0aGlzLmNoYXJ0VHlwZSAhPT0gY2hhcnRUeXBlXG4gICAgKSB7XG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGNoYXJ0VHlwZTtcbiAgICAgIHRoaXMub25DaGFydFR5cGVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3Jlc3VsdEF2ZXJhZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzdWx0TWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Jlc3VsdE1heCA9IHVuZGVmaW5lZDtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICBnZW5lcmF0ZVRleHQobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgbGV0IHRleHRzOiBhbnkgPSBbXTtcblxuICAgIGlmIChzdGVwc0NvdW50ID09PSA1KSB7XG4gICAgICB0ZXh0cyA9IFtcbiAgICAgICAgXCJ2ZXJ5IGhpZ2ggKFwiICsgbWF4VmFsdWUgKyBcIilcIixcbiAgICAgICAgXCJoaWdoXCIsXG4gICAgICAgIFwibWVkaXVtXCIsXG4gICAgICAgIFwibG93XCIsXG4gICAgICAgIFwidmVyeSBsb3cgKFwiICsgbWluVmFsdWUgKyBcIilcIixcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRzLnB1c2gobWF4VmFsdWUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50IC0gMjsgaSsrKSB7XG4gICAgICAgIHRleHRzLnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgICB0ZXh0cy5wdXNoKG1pblZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoISFOdW1iZXJNb2RlbC5nZW5lcmF0ZVRleHRzQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBOdW1iZXJNb2RlbC5nZW5lcmF0ZVRleHRzQ2FsbGJhY2soXG4gICAgICAgIHRoaXMucXVlc3Rpb24sXG4gICAgICAgIG1heFZhbHVlLFxuICAgICAgICBtaW5WYWx1ZSxcbiAgICAgICAgc3RlcHNDb3VudCxcbiAgICAgICAgdGV4dHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRzO1xuICB9XG5cbiAgZ2VuZXJhdGVWYWx1ZXMobWF4VmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xuICAgICAgdmFsdWVzLnB1c2gobWF4VmFsdWUgLyBzdGVwc0NvdW50KTtcbiAgICB9XG5cbiAgICB2YWx1ZXMucHVzaChtYXhWYWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgZ2VuZXJhdGVDb2xvcnMobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgY29sb3JzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xuICAgICAgY29sb3JzLnB1c2gocGFsZXR0ZVtpXSk7XG4gICAgfVxuXG4gICAgY29sb3JzLnB1c2goXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIpO1xuXG4gICAgcmV0dXJuIGNvbG9ycztcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fcmVzdWx0QXZlcmFnZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9yZXN1bHRNaW4gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fcmVzdWx0TWF4ID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XG4gICAgICB0aGlzLl9yZXN1bHRNaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgdGhpcy5fcmVzdWx0TWF4ID0gLU51bWJlci5NQVhfVkFMVUU7XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3dEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWU6IG51bWJlciA9ICtyb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICAgIGlmIChxdWVzdGlvblZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBxdWVzdGlvblZhbHVlcy5wdXNoKHF1ZXN0aW9uVmFsdWUpO1xuICAgICAgICAgIGlmICh0aGlzLl9yZXN1bHRNaW4gPiBxdWVzdGlvblZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRNaW4gPSBxdWVzdGlvblZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fcmVzdWx0TWF4IDwgcXVlc3Rpb25WYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0TWF4ID0gcXVlc3Rpb25WYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID1cbiAgICAgICAgcXVlc3Rpb25WYWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyBxdWVzdGlvblZhbHVlcy5sZW5ndGg7XG4gICAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID0gTWF0aC5jZWlsKHRoaXMuX3Jlc3VsdEF2ZXJhZ2UgKiAxMDApIC8gMTAwO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMuX3Jlc3VsdEF2ZXJhZ2UsIHRoaXMuX3Jlc3VsdE1pbiwgdGhpcy5fcmVzdWx0TWF4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uQm9vbGVhbk1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgQm9vbGVhbk1vZGVsIH0gZnJvbSBcIi4uL2Jvb2xlYW5cIjtcbmltcG9ydCB7IFBsb3RseUNoYXJ0QWRhcHRlciB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbG90bHlCb29sQ2hhcnRBZGFwdGVyIGV4dGVuZHMgUGxvdGx5Q2hhcnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IobW9kZWw6IEJvb2xlYW5QbG90bHkpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxuICAgIGNoYXJ0Tm9kZTogb2JqZWN0LFxuICAgIHRyYWNlczogQXJyYXk8b2JqZWN0PixcbiAgICBsYXlvdXQ6IG9iamVjdCxcbiAgICBjb25maWc6IG9iamVjdFxuICApIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLm1vZGVsLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGJvb2xDb2xvcnMgPSBbXG4gICAgICBCb29sZWFuUGxvdGx5LnRydWVDb2xvciB8fCBjb2xvcnNbMF0sXG4gICAgICBCb29sZWFuUGxvdGx5LmZhbHNlQ29sb3IgfHwgY29sb3JzWzFdLFxuICAgIF07XG5cbiAgICBpZiAodGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwicGllXCIgfHwgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIikge1xuICAgICAgdHJhY2VzLmZvckVhY2goKHRyYWNlOiBhbnkpID0+IHtcbiAgICAgICAgdHJhY2UubWFya2VyLmNvbG9ycyA9IGJvb2xDb2xvcnM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImJhclwiKSB7XG4gICAgICB0cmFjZXMuZm9yRWFjaCgodHJhY2U6IGFueSkgPT4ge1xuICAgICAgICB0cmFjZS5tYXJrZXIuY29sb3IgPSBib29sQ29sb3JzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuUGxvdGx5IGV4dGVuZHMgQm9vbGVhbk1vZGVsIHtcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlDaGFydEFkYXB0ZXI7XG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJwaWVcIiwgXCJiYXJcIiwgXCJkb3VnaG51dFwiXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBCb29sZWFuUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlciA9IG5ldyBQbG90bHlCb29sQ2hhcnRBZGFwdGVyKHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIuZGVzdHJveSg8SFRNTEVsZW1lbnQ+Y29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImJvb2xlYW5cIiwgQm9vbGVhblBsb3RseSk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yYXRpbmdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hdHJpeFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vYm9vbGVhblwiO1xuIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuLi9tYXRyaXhcIjtcbmltcG9ydCB7IFBsb3RseUNoYXJ0QWRhcHRlciB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhQbG90bHkgZXh0ZW5kcyBNYXRyaXgge1xuICBwcml2YXRlIF9jaGFydEFkYXB0ZXI6IFBsb3RseUNoYXJ0QWRhcHRlcjtcbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImJhclwiLCBcInN0YWNrZWRiYXJcIiwgXCJwaWVcIiwgXCJkb3VnaG51dFwiXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBNYXRyaXhQbG90bHkudHlwZXM7XG4gICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLmNoYXJ0VHlwZXNbMF07XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyID0gbmV3IFBsb3RseUNoYXJ0QWRhcHRlcih0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmRlc3Ryb3koPEhUTUxFbGVtZW50PmNvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGFydE5vZGU6IEhUTUxFbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhcnROb2RlKTtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIuY3JlYXRlKGNoYXJ0Tm9kZSk7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibWF0cml4XCIsIE1hdHJpeFBsb3RseSk7XG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgTnVtYmVyTW9kZWwgfSBmcm9tIFwiLi4vbnVtYmVyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgYWxsb3dEb21SZW5kZXJpbmcsIERhdGFIZWxwZXIsIERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG52YXIgUGxvdGx5OiBhbnkgPSBudWxsO1xuaWYgKGFsbG93RG9tUmVuZGVyaW5nKCkpIHtcbiAgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBQbG90bHlHYXVnZUFkYXB0ZXIge1xuICBwcml2YXRlIF9jaGFydDogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IEdhdWdlUGxvdGx5KSB7fVxuXG4gIHB1YmxpYyBnZXQgY2hhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShjaGFydE5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLm1vZGVsLnF1ZXN0aW9uO1xuICAgIGxldCBbbGV2ZWwsIG1pblZhbHVlLCBtYXhWYWx1ZV0gPSB0aGlzLm1vZGVsLmdldERhdGEoKTtcblxuICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwicmF0aW5nXCIpIHtcbiAgICAgIGNvbnN0IHJhdGVWYWx1ZXMgPSBxdWVzdGlvbi52aXNpYmxlUmF0ZVZhbHVlcztcbiAgICAgIG1heFZhbHVlID0gcmF0ZVZhbHVlc1tyYXRlVmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlO1xuICAgICAgbWluVmFsdWUgPSByYXRlVmFsdWVzWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMubW9kZWwuZ2VuZXJhdGVDb2xvcnMoXG4gICAgICBtYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlLFxuICAgICAgR2F1Z2VQbG90bHkuc3RlcHNDb3VudFxuICAgICk7XG5cbiAgICBpZiAoR2F1Z2VQbG90bHkuc2hvd0FzUGVyY2VudGFnZSkge1xuICAgICAgbGV2ZWwgPSBEYXRhSGVscGVyLnRvUGVyY2VudGFnZShsZXZlbCwgbWF4VmFsdWUpO1xuICAgICAgbWluVmFsdWUgPSBEYXRhSGVscGVyLnRvUGVyY2VudGFnZShtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuICAgICAgbWF4VmFsdWUgPSBEYXRhSGVscGVyLnRvUGVyY2VudGFnZShtYXhWYWx1ZSwgbWF4VmFsdWUpO1xuICAgIH1cblxuICAgIHZhciBkYXRhOiBhbnkgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiaW5kaWNhdG9yXCIsXG4gICAgICAgIG1vZGU6IFwiZ2F1Z2UrbnVtYmVyXCIsXG4gICAgICAgIGdhdWdlOiB7XG4gICAgICAgICAgYXhpczogeyByYW5nZTogW21pblZhbHVlLCBtYXhWYWx1ZV0gfSxcbiAgICAgICAgICBzaGFwZTogdGhpcy5tb2RlbC5jaGFydFR5cGUsXG4gICAgICAgICAgYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIGJhcjogeyBjb2xvcjogY29sb3JzWzBdIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBsZXZlbCxcbiAgICAgICAgdGV4dDogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZG9tYWluOiB7IHg6IFswLCAxXSwgeTogWzAsIDFdIH0sXG4gICAgICB9LFxuICAgIF07XG5cbiAgICB2YXIgaGVpZ2h0ID0gNDAwO1xuXG4gICAgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImJ1bGxldFwiKSB7XG4gICAgICBoZWlnaHQgPSAyNTA7XG4gICAgfVxuXG4gICAgdmFyIGxheW91dCA9IHtcbiAgICAgIHdpZHRoOiA2MDAsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5tb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiB0aGlzLm1vZGVsLmJhY2tncm91bmRDb2xvcixcbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlLFxuICAgICAgc3RhdGljUGxvdDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUsXG4gICAgfTtcblxuICAgIHJldHVybiBQbG90bHkubmV3UGxvdChjaGFydE5vZGUsIGRhdGEsIGxheW91dCwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgUGxvdGx5LnB1cmdlKG5vZGUpO1xuICAgIHRoaXMuX2NoYXJ0ID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYXVnZVBsb3RseSBleHRlbmRzIE51bWJlck1vZGVsIHtcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlHYXVnZUFkYXB0ZXI7XG5cbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImdhdWdlXCIsIFwiYnVsbGV0XCJdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRUeXBlcyA9IEdhdWdlUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlciA9IG5ldyBQbG90bHlHYXVnZUFkYXB0ZXIodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5kZXN0cm95KDxIVE1MRWxlbWVudD5jb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY2hhcnROb2RlOiBIVE1MRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm51bWJlclwiLCBHYXVnZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJyYXRpbmdcIiwgR2F1Z2VQbG90bHkpO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9zZWxlY3RCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgYWxsb3dEb21SZW5kZXJpbmcsIERhdGFIZWxwZXIsIERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG52YXIgUGxvdGx5OiBhbnkgPSBudWxsO1xuaWYgKGFsbG93RG9tUmVuZGVyaW5nKCkpIHtcbiAgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBQbG90bHlDaGFydEFkYXB0ZXIge1xuICBwcml2YXRlIF9jaGFydDogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RlbDogU2VsZWN0QmFzZSkge31cblxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxuICAgIGNoYXJ0Tm9kZTogb2JqZWN0LFxuICAgIHRyYWNlczogQXJyYXk8b2JqZWN0PixcbiAgICBsYXlvdXQ6IG9iamVjdCxcbiAgICBjb25maWc6IG9iamVjdFxuICApIHt9XG5cbiAgcHVibGljIGdldCBjaGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICB2YXIgcGxvdGx5T3B0aW9ucyA9IFBsb3RseVNldHVwLnNldHVwKHRoaXMubW9kZWwuY2hhcnRUeXBlLCB0aGlzLm1vZGVsKTtcblxuICAgIGxldCBjb25maWc6IGFueSA9IHtcbiAgICAgIGRpc3BsYXlsb2dvOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxuICAgIH07XG4gICAgaWYgKFNlbGVjdEJhc2VQbG90bHkuZGlzcGxheU1vZGVCYXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLmRpc3BsYXlNb2RlQmFyID0gU2VsZWN0QmFzZVBsb3RseS5kaXNwbGF5TW9kZUJhcjtcbiAgICB9XG5cbiAgICB0aGlzLnBhdGNoQ29uZmlnUGFyYW1ldGVycyhcbiAgICAgIGNoYXJ0Tm9kZSxcbiAgICAgIHBsb3RseU9wdGlvbnMudHJhY2VzLFxuICAgICAgcGxvdGx5T3B0aW9ucy5sYXlvdXQsXG4gICAgICBjb25maWdcbiAgICApO1xuXG4gICAgY29uc3QgcGxvdCA9IFBsb3RseS5uZXdQbG90KFxuICAgICAgY2hhcnROb2RlLFxuICAgICAgcGxvdGx5T3B0aW9ucy50cmFjZXMsXG4gICAgICBwbG90bHlPcHRpb25zLmxheW91dCxcbiAgICAgIGNvbmZpZ1xuICAgICk7XG5cbiAgICAoPGFueT5jaGFydE5vZGUpW1wib25cIl0oXCJwbG90bHlfY2xpY2tcIiwgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGRhdGEucG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgaXRlbVRleHQgPSBwbG90bHlPcHRpb25zLmhhc1Nlcmllc1xuICAgICAgICAgID8gZGF0YS5wb2ludHNbMF0uZGF0YS5uYW1lXG4gICAgICAgICAgOiBBcnJheS5pc0FycmF5KGRhdGEucG9pbnRzWzBdLmN1c3RvbWRhdGEpXG4gICAgICAgICAgPyBkYXRhLnBvaW50c1swXS5jdXN0b21kYXRhWzBdXG4gICAgICAgICAgOiBkYXRhLnBvaW50c1swXS5jdXN0b21kYXRhO1xuICAgICAgICBjb25zdCBpdGVtOiBJdGVtVmFsdWUgPSB0aGlzLm1vZGVsLmdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dCk7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0U2VsZWN0aW9uKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGdldERyYWdMYXllciA9ICgpID0+XG4gICAgICA8SFRNTEVsZW1lbnQ+Y2hhcnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuc2V3ZHJhZ1wiKVswXTtcbiAgICAoPGFueT5jaGFydE5vZGUpW1wib25cIl0oXCJwbG90bHlfaG92ZXJcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0xheWVyID0gZ2V0RHJhZ0xheWVyKCk7XG4gICAgICBkcmFnTGF5ZXIgJiYgKGRyYWdMYXllci5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIik7XG4gICAgfSk7XG4gICAgKDxhbnk+Y2hhcnROb2RlKVtcIm9uXCJdKFwicGxvdGx5X3VuaG92ZXJcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0xheWVyID0gZ2V0RHJhZ0xheWVyKCk7XG4gICAgICBkcmFnTGF5ZXIgJiYgKGRyYWdMYXllci5zdHlsZS5jdXJzb3IgPSBcIlwiKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NoYXJ0ID0gcGxvdDtcbiAgICByZXR1cm4gcGxvdDtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgUGxvdGx5LnB1cmdlKG5vZGUpO1xuICAgIHRoaXMuX2NoYXJ0ID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxvdGx5T3B0aW9ucyB7XG4gIHRyYWNlczogQXJyYXk8YW55PjtcbiAgbGF5b3V0OiBhbnk7XG4gIGhhc1NlcmllczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFBsb3RseVNldHVwIHtcbiAgc3RhdGljIHNldHVwczogeyBbdHlwZTogc3RyaW5nXTogKG1vZGVsOiBTZWxlY3RCYXNlKSA9PiBQbG90bHlPcHRpb25zIH0gPSB7XG4gICAgYmFyOiBQbG90bHlTZXR1cC5zZXR1cEJhcixcbiAgICBzdGFja2VkYmFyOiBQbG90bHlTZXR1cC5zZXR1cEJhcixcbiAgICBkb3VnaG51dDogUGxvdGx5U2V0dXAuc2V0dXBQaWUsXG4gICAgcGllOiBQbG90bHlTZXR1cC5zZXR1cFBpZSxcbiAgICBzY2F0dGVyOiBQbG90bHlTZXR1cC5zZXR1cFNjYXR0ZXIsXG4gIH07XG5cbiAgc3RhdGljIHNldHVwKGNoYXJUeXBlOiBzdHJpbmcsIG1vZGVsOiBTZWxlY3RCYXNlKTogUGxvdGx5T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dXBzW2NoYXJUeXBlXShtb2RlbCk7XG4gIH1cblxuICBzdGF0aWMgc2V0dXBQaWUobW9kZWw6IFNlbGVjdEJhc2UpOiBQbG90bHlPcHRpb25zIHtcbiAgICBsZXQgZGF0YXNldHMgPSBtb2RlbC5nZXREYXRhKCk7XG4gICAgbGV0IHNlcmllc1ZhbHVlcyA9IG1vZGVsLmdldFNlcmllc1ZhbHVlcygpO1xuICAgIGxldCBzZXJpZXNMYWJlbHMgPSBtb2RlbC5nZXRTZXJpZXNMYWJlbHMoKTtcbiAgICBsZXQgbGFiZWxzID0gbW9kZWwuZ2V0TGFiZWxzKCk7XG4gICAgbGV0IGNvbG9ycyA9IG1vZGVsLmdldENvbG9ycygpO1xuICAgIGNvbnN0IHRyYWNlczogYW55ID0gW107XG4gICAgY29uc3QgaGFzU2VyaWVzID0gZGF0YXNldHMubGVuZ3RoID4gMSAmJiBzZXJpZXNWYWx1ZXMubGVuZ3RoID4gMTtcblxuICAgIGNvbnN0IHRyYWNlQ29uZmlnOiBhbnkgPSB7XG4gICAgICB0eXBlOiBtb2RlbC5jaGFydFR5cGUsXG4gICAgICB5OiBoYXNTZXJpZXMgPyBzZXJpZXNMYWJlbHMgOiBsYWJlbHMsXG4gICAgICB0ZXh0OiAoaGFzU2VyaWVzID8gc2VyaWVzTGFiZWxzIDogbGFiZWxzKS5tYXAoKGwpID0+IHtcbiAgICAgICAgaWYgKGwubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICByZXR1cm4gbC5zdWJzdHJpbmcoMCwgMjcpICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH0pLFxuICAgICAgaG92ZXJpbmZvOiBcIngreVwiLFxuICAgICAgbW9kZTogXCJtYXJrZXJzXCIsXG4gICAgICBtYXJrZXI6IDxhbnk+e30sXG4gICAgfTtcblxuICAgIHRyYWNlQ29uZmlnLmhvdmVyaW5mbyA9IFwibGFiZWwrdmFsdWUrcGVyY2VudFwiO1xuICAgIHRyYWNlQ29uZmlnLm1hcmtlci5jb2xvcnMgPSBjb2xvcnM7XG4gICAgdHJhY2VDb25maWcudGV4dHBvc2l0aW9uID0gXCJpbnNpZGVcIjtcblxuICAgIGlmIChtb2RlbC5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIikge1xuICAgICAgdHJhY2VDb25maWcudHlwZSA9IFwicGllXCI7XG4gICAgICB0cmFjZUNvbmZpZy5ob2xlID0gMC40O1xuICAgIH1cblxuICAgIGlmICghaGFzU2VyaWVzKSB7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuc3ltYm9sID0gXCJjaXJjbGVcIjtcbiAgICAgIHRyYWNlQ29uZmlnLm1hcmtlci5zaXplID0gMTY7XG4gICAgfVxuXG4gICAgZGF0YXNldHMuZm9yRWFjaCgoZGF0YXNldDogQXJyYXk8bnVtYmVyPiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgdHJhY2VzLnB1c2goXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRyYWNlQ29uZmlnLCB7XG4gICAgICAgICAgdmFsdWVzOiBkYXRhc2V0LFxuICAgICAgICAgIGxhYmVsczogaGFzU2VyaWVzID8gc2VyaWVzTGFiZWxzIDogbGFiZWxzLFxuICAgICAgICAgIGN1c3RvbWRhdGE6IGhhc1NlcmllcyA/IHNlcmllc0xhYmVscyA6IGxhYmVscyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgcmFkaXVzID0gbGFiZWxzLmxlbmd0aCA8IDEwID8gbGFiZWxzLmxlbmd0aCAqIDUwICsgMTAwIDogNTUwO1xuICAgIGNvbnN0IGhlaWdodCA9IHJhZGl1cyAqIE1hdGgucm91bmQodHJhY2VzLmxlbmd0aCAvIDIpO1xuICAgIGNvbnN0IGxheW91dDogYW55ID0ge1xuICAgICAgZm9udDoge1xuICAgICAgICBmYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgc2l6ZTogMTQsXG4gICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgY29sb3I6IFwiIzQwNDA0MFwiLFxuICAgICAgfSxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIGw6IDAsXG4gICAgICAgIHQ6IDAsXG4gICAgICAgIGI6IDAsXG4gICAgICAgIHI6IDEwLFxuICAgICAgfSxcbiAgICAgIGNvbG9yd2F5OiBjb2xvcnMsXG4gICAgICBob3Zlcm1vZGU6IFwiY2xvc2VzdFwiLFxuICAgICAgcGxvdF9iZ2NvbG9yOiBtb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiBtb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBzaG93bGVnZW5kOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaWYgKGhhc1Nlcmllcykge1xuICAgICAgbGF5b3V0LmdyaWQgPSB7XG4gICAgICAgIHJvd3M6IE1hdGgucm91bmQodHJhY2VzLmxlbmd0aCAvIDIpLFxuICAgICAgICBjb2x1bW5zOiAyLFxuICAgICAgfTtcbiAgICAgIGxheW91dC5hbm5vdGF0aW9ucyA9IFtdO1xuICAgICAgbGFiZWxzLmZvckVhY2goKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICB0cmFjZXNbaW5kZXhdLmRvbWFpbiA9IHtcbiAgICAgICAgICBjb2x1bW46IGluZGV4ICUgMixcbiAgICAgICAgICByb3c6IE1hdGguZmxvb3IoaW5kZXggLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgdHJhY2VzW2luZGV4XS50aXRsZSA9IHsgcG9zaXRpb246IFwiYm90dG9tIGNlbnRlclwiLCB0ZXh0OiBsYWJlbCB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IHRyYWNlcywgbGF5b3V0LCBoYXNTZXJpZXMgfTtcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cEJhcihtb2RlbDogU2VsZWN0QmFzZSk6IFBsb3RseU9wdGlvbnMge1xuICAgIGxldCBkYXRhc2V0cyA9IG1vZGVsLmdldERhdGEoKTtcbiAgICBsZXQgc2VyaWVzVmFsdWVzID0gbW9kZWwuZ2V0U2VyaWVzVmFsdWVzKCk7XG4gICAgbGV0IHNlcmllc0xhYmVscyA9IG1vZGVsLmdldFNlcmllc0xhYmVscygpO1xuICAgIGxldCBsYWJlbHMgPSBtb2RlbC5nZXRMYWJlbHMoKTtcbiAgICBsZXQgY29sb3JzID0gbW9kZWwuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgdHJhY2VzOiBhbnkgPSBbXTtcbiAgICBjb25zdCBoYXNTZXJpZXMgPSBkYXRhc2V0cy5sZW5ndGggPiAxICYmIHNlcmllc1ZhbHVlcy5sZW5ndGggPiAxO1xuXG4gICAgaWYgKG1vZGVsLm9yZGVyQnlBbnN3ZXJlcyA9PSBcImFzY1wiIHx8IG1vZGVsLm9yZGVyQnlBbnN3ZXJlcyA9PSBcImRlc2NcIikge1xuICAgICAgbGV0IGRpY3QgPSBEYXRhSGVscGVyLnNvcnREaWN0aW9uYXJ5KFxuICAgICAgICBEYXRhSGVscGVyLnppcEFycmF5cyhsYWJlbHMsIGNvbG9ycyksXG4gICAgICAgIGRhdGFzZXRzWzBdLFxuICAgICAgICBtb2RlbC5vcmRlckJ5QW5zd2VyZXMgPT0gXCJkZXNjXCJcbiAgICAgICk7XG4gICAgICBsZXQgbGFiZWxzQW5kQ29sb3JzID0gRGF0YUhlbHBlci51bnppcEFycmF5cyhkaWN0LmtleXMpO1xuICAgICAgbGFiZWxzID0gbGFiZWxzQW5kQ29sb3JzLmZpcnN0O1xuICAgICAgY29sb3JzID0gbGFiZWxzQW5kQ29sb3JzLnNlY29uZDtcbiAgICAgIGRhdGFzZXRzWzBdID0gZGljdC52YWx1ZXM7XG4gICAgfVxuICAgIGNvbnN0IHRyYWNlQ29uZmlnOiBhbnkgPSB7XG4gICAgICB0eXBlOiBtb2RlbC5jaGFydFR5cGUsXG4gICAgICB5OiAoaGFzU2VyaWVzID8gc2VyaWVzTGFiZWxzIDogbGFiZWxzKS5tYXAoKGwpID0+IHtcbiAgICAgICAgaWYgKGwubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICByZXR1cm4gbC5zdWJzdHJpbmcoMCwgMjcpICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH0pLFxuICAgICAgY3VzdG9tZGF0YTogaGFzU2VyaWVzID8gc2VyaWVzTGFiZWxzIDogbGFiZWxzLFxuICAgICAgaG92ZXJpbmZvOiBcIngreVwiLFxuICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgbW9kZTogXCJtYXJrZXJzXCIsXG4gICAgICB3aWR0aDogMC41LFxuICAgICAgbWFya2VyOiA8YW55Pnt9LFxuICAgIH07XG4gICAgdHJhY2VDb25maWcubWFya2VyLmNvbG9yID0gY29sb3JzO1xuXG4gICAgdmFyIHRleHRzID0gbW9kZWwuc2hvd1BlcmNlbnRhZ2VzID8gbW9kZWwuZ2V0UGVyY2VudGFnZXMoKSA6IGRhdGFzZXRzO1xuXG4gICAgZGF0YXNldHMuZm9yRWFjaCgoZGF0YXNldDogQXJyYXk8bnVtYmVyPiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgdmFyIHRyYWNlID0gT2JqZWN0LmFzc2lnbih7fSwgdHJhY2VDb25maWcsIHtcbiAgICAgICAgeDogZGF0YXNldCxcbiAgICAgICAgdGV4dDogdGV4dHNbaW5kZXhdLFxuICAgICAgfSk7XG4gICAgICBpZiAobW9kZWwuc2hvd1BlcmNlbnRhZ2VzKSB7XG4gICAgICAgIHRyYWNlLnRleHRwb3NpdGlvbiA9IFwiaW5zaWRlXCI7XG4gICAgICAgIHRyYWNlLnRleHR0ZW1wbGF0ZSA9IFwiJXt2YWx1ZX0gKCV7dGV4dH0lKVwiO1xuICAgICAgICB0cmFjZS53aWR0aCA9IDAuOTtcbiAgICAgIH1cbiAgICAgIHRyYWNlcy5wdXNoKHRyYWNlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlaWdodCA9IChsYWJlbHMubGVuZ3RoICsgKGxhYmVscy5sZW5ndGggKyAxKSAqIDAuNSkgKiAyMDtcblxuICAgIGNvbnN0IGxheW91dDogYW55ID0ge1xuICAgICAgZm9udDoge1xuICAgICAgICBmYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgc2l6ZTogMTQsXG4gICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgY29sb3I6IFwiIzQwNDA0MFwiLFxuICAgICAgfSxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHQ6IDAsXG4gICAgICAgIGI6IDAsXG4gICAgICAgIHI6IDEwLFxuICAgICAgfSxcbiAgICAgIGNvbG9yd2F5OiBjb2xvcnMsXG4gICAgICBob3Zlcm1vZGU6IFwiY2xvc2VzdFwiLFxuICAgICAgeWF4aXM6IHtcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJjYXRlZ29yeVwiLFxuICAgICAgICB0aWNrbGVuOiA1LFxuICAgICAgICB0aWNrY29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIH0sXG4gICAgICB4YXhpczoge1xuICAgICAgICByYW5nZW1vZGU6IFwibm9ubmVnYXRpdmVcIixcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBwbG90X2JnY29sb3I6IG1vZGVsLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHBhcGVyX2JnY29sb3I6IG1vZGVsLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHNob3dsZWdlbmQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICBpZiAoaGFzU2VyaWVzKSB7XG4gICAgICBsYXlvdXQuc2hvd2xlZ2VuZCA9IHRydWU7XG4gICAgICBsYXlvdXQuaGVpZ2h0ID1cbiAgICAgICAgKGxhYmVscy5sZW5ndGggKyAobGFiZWxzLmxlbmd0aCArIDEpICogMC41KSAqIDE1ICogdHJhY2VzLmxlbmd0aDtcbiAgICAgIGlmIChtb2RlbC5jaGFydFR5cGUgPT0gXCJzdGFja2VkYmFyXCIpIHtcbiAgICAgICAgbGF5b3V0LmJhcm1vZGUgPSBcInN0YWNrXCI7XG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5mb3JFYWNoKChsYWJlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgdHJhY2VzW2luZGV4XS5ob3ZlcmluZm8gPSBcIngrbmFtZVwiO1xuICAgICAgICB0cmFjZXNbaW5kZXhdLm1hcmtlci5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJhY2VzW2luZGV4XS5uYW1lID0gbGFiZWw7XG5cbiAgICAgICAgaWYgKG1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJzdGFja2VkYmFyXCIpIHtcbiAgICAgICAgICB0cmFjZXNbaW5kZXhdLnR5cGUgPSBcImJhclwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhY2VzW2luZGV4XS53aWR0aCA9XG4gICAgICAgICAgKG1vZGVsLnNob3dQZXJjZW50YWdlcyA/IDAuNyA6IDAuNSkgLyB0cmFjZXMubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IHRyYWNlcywgbGF5b3V0LCBoYXNTZXJpZXMgfTtcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cFNjYXR0ZXIobW9kZWw6IFNlbGVjdEJhc2UpOiBQbG90bHlPcHRpb25zIHtcbiAgICBsZXQgZGF0YXNldHMgPSBtb2RlbC5nZXREYXRhKCk7XG4gICAgbGV0IHNlcmllc1ZhbHVlcyA9IG1vZGVsLmdldFNlcmllc1ZhbHVlcygpO1xuICAgIGxldCBzZXJpZXNMYWJlbHMgPSBtb2RlbC5nZXRTZXJpZXNMYWJlbHMoKTtcbiAgICBjb25zdCBoYXNTZXJpZXMgPSBkYXRhc2V0cy5sZW5ndGggPiAxICYmIHNlcmllc1ZhbHVlcy5sZW5ndGggPiAxO1xuICAgIGxldCBsYWJlbHMgPSBtb2RlbC5nZXRMYWJlbHMoKTtcbiAgICBsZXQgY29sb3JzID0gbW9kZWwuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgdHJhY2VzOiBhbnkgPSBbXTtcblxuICAgIGNvbnN0IHRyYWNlQ29uZmlnOiBhbnkgPSB7XG4gICAgICB0eXBlOiBcInNjYXR0ZXJcIixcbiAgICAgIHk6IChoYXNTZXJpZXMgPyBzZXJpZXNMYWJlbHMgOiBsYWJlbHMpLm1hcCgobCkgPT4ge1xuICAgICAgICBpZiAobC5sZW5ndGggPiAzMCkge1xuICAgICAgICAgIHJldHVybiBsLnN1YnN0cmluZygwLCAyNykgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsO1xuICAgICAgfSksXG4gICAgICBjdXN0b21kYXRhOiBoYXNTZXJpZXMgPyBzZXJpZXNMYWJlbHMgOiBsYWJlbHMsXG4gICAgICB0ZXh0OiBoYXNTZXJpZXMgPyBzZXJpZXNMYWJlbHMgOiBsYWJlbHMsXG4gICAgICBob3ZlcmluZm86IFwieCt5XCIsXG4gICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICBtb2RlOiBcIm1hcmtlcnNcIixcbiAgICAgIHdpZHRoOiAwLjUsXG4gICAgICBtYXJrZXI6IDxhbnk+e30sXG4gICAgfTtcblxuICAgIGlmICghaGFzU2VyaWVzKSB7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuc3ltYm9sID0gXCJjaXJjbGVcIjtcbiAgICAgIHRyYWNlQ29uZmlnLm1hcmtlci5zaXplID0gMTY7XG4gICAgfVxuXG4gICAgZGF0YXNldHMuZm9yRWFjaCgoZGF0YXNldDogQXJyYXk8bnVtYmVyPikgPT4ge1xuICAgICAge1xuICAgICAgICB2YXIgdHJhY2UgPSBPYmplY3QuYXNzaWduKHt9LCB0cmFjZUNvbmZpZywge1xuICAgICAgICAgIHg6IGRhdGFzZXQsXG4gICAgICAgIH0pO1xuICAgICAgICB0cmFjZXMucHVzaCh0cmFjZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWlnaHQgPSAobGFiZWxzLmxlbmd0aCArIChsYWJlbHMubGVuZ3RoICsgMSkgKiAwLjUpICogMjA7XG5cbiAgICBjb25zdCBsYXlvdXQ6IGFueSA9IHtcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgZmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIHNpemU6IDE0LFxuICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgIGNvbG9yOiBcIiM0MDQwNDBcIixcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0OiAwLFxuICAgICAgICBiOiAwLFxuICAgICAgICByOiAxMCxcbiAgICAgIH0sXG4gICAgICBjb2xvcndheTogY29sb3JzLFxuICAgICAgaG92ZXJtb2RlOiBcImNsb3Nlc3RcIixcbiAgICAgIHlheGlzOiB7XG4gICAgICAgIGF1dG9tYXJnaW46IHRydWUsXG4gICAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgdGlja2xlbjogNSxcbiAgICAgICAgdGlja2NvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgcmFuZ2Vtb2RlOiBcIm5vbm5lZ2F0aXZlXCIsXG4gICAgICAgIGF1dG9tYXJnaW46IHRydWUsXG4gICAgICB9LFxuICAgICAgcGxvdF9iZ2NvbG9yOiBtb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiBtb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBzaG93bGVnZW5kOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaWYgKGhhc1Nlcmllcykge1xuICAgICAgbGF5b3V0LnNob3dsZWdlbmQgPSB0cnVlO1xuICAgICAgbGF5b3V0LmhlaWdodCA9IHVuZGVmaW5lZDtcblxuICAgICAgbGFiZWxzLmZvckVhY2goKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICB0cmFjZXNbaW5kZXhdLmhvdmVyaW5mbyA9IFwieCtuYW1lXCI7XG4gICAgICAgIHRyYWNlc1tpbmRleF0ubWFya2VyLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgICAgICB0cmFjZXNbaW5kZXhdLm5hbWUgPSBsYWJlbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyB0cmFjZXMsIGxheW91dCwgaGFzU2VyaWVzIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhc2VQbG90bHkgZXh0ZW5kcyBTZWxlY3RCYXNlIHtcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlDaGFydEFkYXB0ZXI7XG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJiYXJcIiwgXCJwaWVcIiwgXCJkb3VnaG51dFwiLCBcInNjYXR0ZXJcIl07XG4gIHB1YmxpYyBzdGF0aWMgZGlzcGxheU1vZGVCYXI6IGFueSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBTZWxlY3RCYXNlUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlciA9IG5ldyBQbG90bHlDaGFydEFkYXB0ZXIodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5kZXN0cm95KDxIVE1MRWxlbWVudD5jb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY2hhcnROb2RlOiBIVE1MRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnlbXSB7XG4gICAgY29uc3Qgc3RhdGlzdGljcyA9IHN1cGVyLmdldERhdGEoKTtcbiAgICBjb25zdCBzZXJpZXMgPSB0aGlzLmdldFNlcmllc1ZhbHVlcygpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgaWYgKHNlcmllcy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBwcmVwYXJlZERhdGE6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG4gICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsLCB2YWx1ZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlcmllc0RhdGEgPSBzZXJpZXMubWFwKFxuICAgICAgICAgIChzZXJpZXNWYWx1ZSwgc2VyaWVzSW5kZXgpID0+IHN0YXRpc3RpY3Nbc2VyaWVzSW5kZXhdW3ZhbHVlSW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIHByZXBhcmVkRGF0YS5wdXNoKHNlcmllc0RhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJlcGFyZWREYXRhO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGlzdGljcztcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjaGVja2JveFwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInJhZGlvZ3JvdXBcIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJkcm9wZG93blwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImltYWdlcGlja2VyXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uU2VsZWN0QmFzZSwgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyRmFjdG9yeSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhUHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhc2UgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBJdGVtVmFsdWUgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgY2hvaWNlc09yZGVyOiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBzaG93UGVyY2VudGFnZUJ0bjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3Nob3dQZXJjZW50YWdlczogYm9vbGVhbjtcbiAgcHVibGljIG9yZGVyQnlBbnN3ZXJlczogc3RyaW5nID0gXCJkZWZhdWx0XCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdCxcbiAgICBuYW1lPzogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zLCBuYW1lIHx8IFwic2VsZWN0QmFzZVwiKTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJjaGFuZ2VDaGFydFR5cGVcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudEhlbHBlci5jcmVhdGVTZWxlY3RvcihcbiAgICAgICAgICB0aGlzLmNoYXJ0VHlwZXMubWFwKChjaGFydFR5cGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBjaGFydFR5cGUsXG4gICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFydFR5cGVfXCIgKyBjaGFydFR5cGUpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMuY2hhcnRUeXBlID09PSBvcHRpb24udmFsdWUsXG4gICAgICAgICAgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDaGFydFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcImNoYW5nZUxhYmVsc09yZGVyXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nZXRTZXJpZXNWYWx1ZXMoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgdGhpcy5jaGFydFR5cGVzLmluZGV4T2YoXCJiYXJcIikgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jaG9pY2VzT3JkZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTZWxlY3RvcihcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJkZWZhdWx0T3JkZXJcIiksIHZhbHVlOiBcImRlZmF1bHRcIiB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYXNjT3JkZXJcIiksIHZhbHVlOiBcImFzY1wiIH0sXG4gICAgICAgICAgICB7IHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJkZXNjT3JkZXJcIiksIHZhbHVlOiBcImRlc2NcIiB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgKG9wdGlvbikgPT4gZmFsc2UsXG4gICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGFiZWxzT3JkZXIoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnVwZGF0ZU9yZGVyU2VsZWN0b3IoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNob2ljZXNPcmRlcjtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcInNob3dQZXJjZW50YWdlc1wiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMub3B0aW9ucy5hbGxvd1Nob3dQZXJjZW50YWdlcyAmJlxuICAgICAgICAodGhpcy5jaGFydFR5cGVzLmluZGV4T2YoXCJiYXJcIikgIT09IC0xIHx8XG4gICAgICAgICAgdGhpcy5jaGFydFR5cGVzLmluZGV4T2YoXCJzdGFja2VkYmFyXCIpICE9PSAtMSlcbiAgICAgICkge1xuICAgICAgICB2YXIgdXBkYXRlQ2FwdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dQZXJjZW50YWdlQnRuLmlubmVySFRNTCA9IHRoaXMuX3Nob3dQZXJjZW50YWdlc1xuICAgICAgICAgICAgPyBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZVBlcmNlbnRhZ2VzXCIpXG4gICAgICAgICAgICA6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93UGVyY2VudGFnZXNcIik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2hvd1BlcmNlbnRhZ2VCdG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVCdXR0b24oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd1BlcmNlbnRhZ2VzID0gIXRoaXMuX3Nob3dQZXJjZW50YWdlcztcbiAgICAgICAgICB1cGRhdGVDYXB0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVDYXB0aW9uKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2hvd1BlcmNlbnRhZ2VCdG4oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1BlcmNlbnRhZ2VCdG47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIGNoYXJ0VHlwZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgdXBkYXRlT3JkZXJTZWxlY3RvcigpIHtcbiAgICBpZiAoISF0aGlzLmNob2ljZXNPcmRlcikge1xuICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlID09IFwiYmFyXCIpIHtcbiAgICAgICAgdGhpcy5jaG9pY2VzT3JkZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNob2ljZXNPcmRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuY2hvaWNlc09yZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VsZWN0XCIpWzBdLnZhbHVlID0gXCJkZWZhdWx0XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTaG93UGVyY2VudGFnZUJ0bigpIHtcbiAgICBpZiAoISF0aGlzLnNob3dQZXJjZW50YWdlQnRuKSB7XG4gICAgICBpZiAodGhpcy5jaGFydFR5cGUgPT0gXCJiYXJcIiB8fCB0aGlzLmNoYXJ0VHlwZSA9PSBcInN0YWNrZWRiYXJcIikge1xuICAgICAgICB0aGlzLnNob3dQZXJjZW50YWdlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93UGVyY2VudGFnZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG9uQ2hhcnRUeXBlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnNldExhYmVsc09yZGVyKFwiZGVmYXVsdFwiKTtcbiAgICB0aGlzLnVwZGF0ZU9yZGVyU2VsZWN0b3IoKTtcbiAgICB0aGlzLnVwZGF0ZVNob3dQZXJjZW50YWdlQnRuKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Q2hhcnRUeXBlKGNoYXJ0VHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jaGFydFR5cGVzLmluZGV4T2YoY2hhcnRUeXBlKSAhPT0gLTEgJiZcbiAgICAgIHRoaXMuY2hhcnRUeXBlICE9PSBjaGFydFR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gY2hhcnRUeXBlO1xuICAgICAgdGhpcy5vbkNoYXJ0VHlwZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5jaG9pY2VzLmZpbHRlcihcbiAgICAgIChjaG9pY2U6IEl0ZW1WYWx1ZSkgPT4gY2hvaWNlLnRleHQgPT09IGl0ZW1UZXh0XG4gICAgKVswXTtcbiAgfVxuXG4gIHNldFNlbGVjdGlvbihpdGVtOiBJdGVtVmFsdWUpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIGlmICh0aGlzLm9uRGF0YUl0ZW1TZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMub25EYXRhSXRlbVNlbGVjdGVkKFxuICAgICAgICAgIGl0ZW0gIT09IHVuZGVmaW5lZCA/IGl0ZW0udmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgaXRlbSAhPT0gdW5kZWZpbmVkID8gaXRlbS50ZXh0IDogXCJcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hvd1BlcmNlbnRhZ2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UGVyY2VudGFnZXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNob3dQZXJjZW50YWdlcyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UGVyY2VudGFnZXMgPSB2YWw7XG4gICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICB9XG5cbiAgc2V0TGFiZWxzT3JkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3JkZXJCeUFuc3dlcmVzID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICB9XG5cbiAgcmVmcmVzaENvbnRlbnQoKSB7XG4gICAgdGhpcy5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgfVxuXG4gIG9uRGF0YUl0ZW1TZWxlY3RlZDogKHNlbGVjdGVkVmFsdWU6IGFueSwgc2VsZWN0ZWRUZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgdmFsdWVzU291cmNlKCk6IEFycmF5PEl0ZW1WYWx1ZT4ge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gPFF1ZXN0aW9uU2VsZWN0QmFzZT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBxdWVzdGlvbltcImFjdGl2ZUNob2ljZXNcIl07XG4gIH1cblxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgdmFsdWVzOiBBcnJheTxhbnk+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoXG4gICAgICAoY2hvaWNlKSA9PiBjaG9pY2UudmFsdWVcbiAgICApO1xuXG4gICAgaWYgKHRoaXMucXVlc3Rpb24uaGFzT3RoZXIpIHZhbHVlcy51bnNoaWZ0KFwib3RoZXJcIik7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXNlVmFsdWVzQXNMYWJlbHMpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlcygpO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcCgoY2hvaWNlKSA9PlxuICAgICAgSXRlbVZhbHVlLmdldFRleHRPckh0bWxCeVZhbHVlKHRoaXMudmFsdWVzU291cmNlKCksIGNob2ljZS52YWx1ZSlcbiAgICApO1xuXG4gICAgaWYgKHRoaXMucXVlc3Rpb24uaGFzT3RoZXIpIGxhYmVscy51bnNoaWZ0KFwiT3RoZXJcIik7XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0UGVyY2VudGFnZXMoKTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuICAgIHZhciBkYXRhOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHZhciBwZXJjZW50YWdlczogQXJyYXk8QXJyYXk8bnVtYmVyPj4gPSBbXTtcbiAgICBpZiAoZGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICBkYXRhLmZvckVhY2goKHJlcywgaW5kZXgpID0+IHtcbiAgICAgICAgdmFyIHN1bSA9IHJlcy5yZWR1Y2UoKHN1bSwgdmFsKSA9PiBzdW0gKyB2YWwpO1xuICAgICAgICBwZXJjZW50YWdlc1tpbmRleF0gPSByZXMubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gc3VtICYmIE1hdGgucm91bmQoKHZhbCAvIHN1bSkgKiAxMDApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHN1bSArPSBkYXRhW2pdW2ldO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwZXJjZW50YWdlc1tqXSkpIHBlcmNlbnRhZ2VzW2pdID0gW107XG4gICAgICAgICAgcGVyY2VudGFnZXNbal1baV0gPSBzdW0gJiYgTWF0aC5yb3VuZCgoZGF0YVtqXVtpXSAvIHN1bSkgKiAxMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwZXJjZW50YWdlcztcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5pbXBvcnQgXCIuL3RleHQuc2Nzc1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dFRhYmxlQWRhcHRlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RlbDogVGV4dCkge31cclxuXHJcbiAgcHVibGljIGNyZWF0ZShjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IGNvbHVtbnNDb3VudCwgZGF0YSB9ID0gdGhpcy5tb2RlbC5nZXREYXRhKCk7XHJcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gPEhUTUxFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiXCIsIHtcclxuICAgICAgaW5uZXJIVE1MOiBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYmxlTm9kZSA9IDxIVE1MVGFibGVFbGVtZW50PihcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIFwic2EtdGV4dC10YWJsZVwiKVxyXG4gICAgKTtcclxuXHJcbiAgICB0YWJsZU5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5tb2RlbC5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKHJvd0RhdGEpID0+IHtcclxuICAgICAgdmFyIHJvdyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zQ291bnQ7IGkrKykge1xyXG4gICAgICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNhLXRleHQtdGFibGVfX2NlbGxcIiwge1xyXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IHJvd0RhdGFbaV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgfVxyXG4gICAgICB0YWJsZU5vZGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVfX2NvbnRhaW5lclwiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveShub2RlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbm9kZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHQgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XHJcbiAgcHJpdmF0ZSBfdGV4dFRhYmxlQWRhcHRlcjogVGV4dFRhYmxlQWRhcHRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdCxcclxuICAgIG5hbWU/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zLCBuYW1lIHx8IFwidGV4dFwiKTtcclxuICAgIHRoaXMuX3RleHRUYWJsZUFkYXB0ZXIgPSBuZXcgVGV4dFRhYmxlQWRhcHRlcih0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBBcnJheTxBcnJheTxzdHJpbmc+PiA9IFtdO1xyXG4gICAgbGV0IGNvbHVtbnNDb3VudCA9IDA7XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XHJcbiAgICAgIGNvbnN0IGRhdGFTdHJpbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgIGlmICghIXJvd1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93VmFsdWUpKSB7XHJcbiAgICAgICAgICBkYXRhU3RyaW5ncy5jb25jYXQocm93VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHJvd1ZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvd1ZhbHVlKS5mb3JFYWNoKChrZXkpID0+XHJcbiAgICAgICAgICAgICAgZGF0YVN0cmluZ3MucHVzaChyb3dWYWx1ZVtrZXldKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YVN0cmluZ3MucHVzaChyb3dWYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGRhdGFTdHJpbmdzKTtcclxuICAgICAgICBpZiAoZGF0YVN0cmluZ3MubGVuZ3RoID4gY29sdW1uc0NvdW50KSB7XHJcbiAgICAgICAgICBjb2x1bW5zQ291bnQgPSBkYXRhU3RyaW5ncy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBjb2x1bW5zQ291bnQsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX3RleHRUYWJsZUFkYXB0ZXIuZGVzdHJveShjb250YWluZXIpO1xyXG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX3RleHRUYWJsZUFkYXB0ZXIuY3JlYXRlKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5fdGV4dFRhYmxlQWRhcHRlci5kZXN0cm95KHRoaXMuY29udGVudENvbnRhaW5lcik7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcblxyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFRleHQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFRleHQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgVGV4dCk7XHJcbiIsImV4cG9ydCB2YXIgX19hc3NpZ24gPVxuICAoPGFueT5PYmplY3QpW1wiYXNzaWduXCJdIHx8XG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgcCBpbiBzKVxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xuICBmb3IgKHZhciBwIGluIGJhc2VDbGFzcylcbiAgICBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XG4gIGZ1bmN0aW9uIF9fKCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSB0aGlzQ2xhc3M7XG4gIH1cbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XG4gICAgYmFzZUNsYXNzID09PSBudWxsXG4gICAgICA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKVxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcbiAgdmFyIHJlc3VsdDogYW55ID0ge307XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBzb3VyY2UpXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgcHJvcGVydHlOYW1lKSAmJlxuICAgICAgZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPCAwXG4gICAgKVxuICAgICAgcmVzdWx0W3Byb3BlcnR5TmFtZV0gPSBzb3VyY2VbcHJvcGVydHlOYW1lXTtcbiAgaWYgKFxuICAgIHNvdXJjZSAhPSBudWxsICYmXG4gICAgdHlwZW9mICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0gPT09IFwiZnVuY3Rpb25cIlxuICApXG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgcHJvcGVydHlTeW1ib2xzID0gKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXShzb3VyY2UpO1xuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XG4gICAgICBpKytcbiAgICApXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxuICAgICAgICByZXN1bHRbcHJvcGVydHlTeW1ib2xzW2ldXSA9IHNvdXJjZVtwcm9wZXJ0eVN5bWJvbHNbaV1dO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xuXG5leHBvcnQgdmFyIF9fZGVjb3JhdGUgPSBmdW5jdGlvbihcbiAgZGVjb3JhdG9yczogYW55LFxuICB0YXJnZXQ6IGFueSxcbiAga2V5OiBhbnksXG4gIGRlc2M6IGFueVxuKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICByID1cbiAgICAgIGMgPCAzXG4gICAgICAgID8gdGFyZ2V0XG4gICAgICAgIDogZGVzYyA9PT0gbnVsbFxuICAgICAgICA/IChkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXG4gICAgICAgIDogZGVzYyxcbiAgICBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2VcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgIGlmICgoZCA9IGRlY29yYXRvcnNbaV0pKVxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG4iLCJleHBvcnQgY2xhc3MgRG9jdW1lbnRIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9PixcclxuICAgIGlzU2VsZWN0ZWQ6IChvcHRpb246IHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0pID0+IGJvb2xlYW4sXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0LXdyYXBwZXJcIjtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0XCI7XHJcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xyXG4gICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgdGV4dDogb3B0aW9uLnRleHQsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQob3B0aW9uKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gaGFuZGxlcjtcclxuICAgIHNlbGVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgIHJldHVybiBzZWxlY3RXcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24oXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkLFxyXG4gICAgdGV4dCA9IFwiXCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvblwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBjbGFzc05hbWUsIHtcclxuICAgICAgaW5uZXJUZXh0OiB0ZXh0LFxyXG4gICAgICBvbmNsaWNrOiBoYW5kbGVyLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KFxyXG4gICAgdGFnTmFtZTogc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgYXR0cnM/OiBhbnlcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKCEhYXR0cnMpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICg8YW55PmVsKVtrZXldID0gYXR0cnNba2V5XTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0VsZW1lbnQocGF0aDogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwic3ZnXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB1c2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwidXNlXCJcclxuICAgICk7XHJcbiAgICB1c2VFbGVtLnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgIFwiI3NhLXN2Zy1cIiArIHBhdGhcclxuICAgICk7XHJcbiAgICBzdmdFbGVtLmFwcGVuZENoaWxkKHVzZUVsZW0pO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0J1dHRvbihwYXRoOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG4gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic2EtdGFibGVfX3N2Zy1idXR0b25cIilcclxuICAgICk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChwYXRoKSk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdUb2dnbGVCdXR0b24oXHJcbiAgICBzdmdQYXRoMTogc3RyaW5nLFxyXG4gICAgc3ZQcGF0aDI6IHN0cmluZyxcclxuICAgIHRleHQxOiBzdHJpbmcsXHJcbiAgICB0ZXh0Mjogc3RyaW5nLFxyXG4gICAgaGFuZGxlcjE6IChlOiBhbnkpID0+IGFueSxcclxuICAgIGhhbmRsZXIyOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBzdGF0ZSA9IFwiZmlyc3RcIixcclxuICAgIGNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uIHNhLXRvb2xiYXJfX3N2Zy1idXR0b25cIlxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2ZzEgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2Z1BhdGgxKTtcclxuICAgIGNvbnN0IHN2ZzIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2UHBhdGgyKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgY2xhc3NOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcInNlY29uZFwiO1xyXG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChzdmcxKTtcclxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgaGFuZGxlcjIoZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFwic2Vjb25kXCIpIHtcclxuICAgICAgICBzdGF0ZSA9IFwiZmlyc3RcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgICAgIGhhbmRsZXIxKGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQxO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMSk7XHJcbiAgICB9IGVsc2UgaWYgKChzdGF0ZSA9IFwic2Vjb25kXCIpKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSB0b2dnbGU7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5wdXQoXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyID0gXCJcIixcclxuICAgIGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxuICApOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiaW5wdXRcIixcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIHJ1bm5pbmdJbkJyb3dzZXI6IHR5cGVvZiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiLFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEb21SZW5kZXJpbmcoKSB7XHJcbiAgcmV0dXJuIG9wdGlvbnMucnVubmluZ0luQnJvd3NlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgemlwQXJyYXlzKGZpcnN0OiBhbnlbXSwgc2Vjb25kOiBhbnlbXSk6IGFueVtdW10ge1xyXG4gICAgbGV0IHppcEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihmaXJzdC5sZW5ndGgsIHNlY29uZC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgemlwQXJyYXlbaV0gPSBbZmlyc3RbaV0sIHNlY29uZFtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gemlwQXJyYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuemlwQXJyYXlzKFxyXG4gICAgemlwQXJyYXk6IGFueVtdW11cclxuICApOiB7IGZpcnN0OiBhbnlbXTsgc2Vjb25kOiBhbnlbXSB9IHtcclxuICAgIGxldCB0d29BcnJheXM6IGFueSA9IHsgZmlyc3Q6IFtdLCBzZWNvbmQ6IFtdIH07XHJcbiAgICB6aXBBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICB0d29BcnJheXMuZmlyc3RbaV0gPSB2YWx1ZVswXTtcclxuICAgICAgdHdvQXJyYXlzLnNlY29uZFtpXSA9IHZhbHVlWzFdO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHdvQXJyYXlzO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNvcnREaWN0aW9uYXJ5KFxyXG4gICAga2V5czogYW55W10sXHJcbiAgICB2YWx1ZXM6IGFueVtdLFxyXG4gICAgZGVzYzogYm9vbGVhblxyXG4gICk6IHsga2V5czogYW55W107IHZhbHVlczogYW55W10gfSB7XHJcbiAgICBsZXQgZGljdGlvbmFyeSA9IHRoaXMuemlwQXJyYXlzKGtleXMsIHZhbHVlcyk7XHJcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFbMV0gPCBiWzFdID8gMSA6IGFbMV0gPT0gYlsxXSA/IDAgOiAtMTtcclxuICAgICAgcmV0dXJuIGFzYyA/IHJlc3VsdCA6IHJlc3VsdCAqIC0xO1xyXG4gICAgfTtcclxuICAgIGRpY3Rpb25hcnkuc29ydCgoYTogYW55W10sIGI6IGFueVtdKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZXNjID8gY29tcGFyYXRvcihhLCBiLCBmYWxzZSkgOiBjb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQga2V5c0FuZFZhbHVlcyA9IHRoaXMudW56aXBBcnJheXMoZGljdGlvbmFyeSk7XHJcbiAgICByZXR1cm4geyBrZXlzOiBrZXlzQW5kVmFsdWVzLmZpcnN0LCB2YWx1ZXM6IGtleXNBbmRWYWx1ZXMuc2Vjb25kIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlIC8gbWF4VmFsdWUpICogMTAwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuXG5kZWNsYXJlIHR5cGUgVmlzdWFsaXplckNvbnN0cnVjdG9yID0gbmV3IChcbiAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICBvcHRpb25zPzogT2JqZWN0XG4pID0+IGFueTtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYW5hZ2VyIHtcbiAgc3RhdGljIGFsdGVybmF0aXZlc1Zpc3VhbGl6ZXI6IGFueSA9IHVuZGVmaW5lZDtcbiAgc3RhdGljIHZpenVhbGl6ZXJzOiB7IFtpbmRleDogc3RyaW5nXTogQXJyYXk8VmlzdWFsaXplckNvbnN0cnVjdG9yPiB9ID0ge307XG4gIC8qKlxuICAgKiBSZWdpc3RlciB2aXN1YWxpemVyIChjb25zdHJ1Y3RvcikgZm9yIHF1ZXN0aW9uIHR5cGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyVmlzdWFsaXplcihcbiAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgIGNvbnN0cnVjdG9yOiBWaXN1YWxpemVyQ29uc3RydWN0b3JcbiAgKSB7XG4gICAgbGV0IHZpenVhbGl6ZXJzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdO1xuICAgIGlmICghdml6dWFsaXplcnMpIHtcbiAgICAgIHZpenVhbGl6ZXJzID0gW107XG4gICAgICBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV0gPSB2aXp1YWxpemVycztcbiAgICB9XG4gICAgdml6dWFsaXplcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB2aXN1YWxpemVycyAoY29uc3RydWN0b3JzKSBmb3IgcXVlc3Rpb24gdHlwZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VmlzdWFsaXplcnNCeVR5cGUodHlwZU5hbWU6IHN0cmluZyk6IFZpc3VhbGl6ZXJDb25zdHJ1Y3RvcltdIHtcbiAgICBsZXQgdml6dWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV07XG4gICAgaWYgKCF2aXp1YWxpemVycykge1xuICAgICAgcmV0dXJuIFtWaXN1YWxpemVyQmFzZV07XG4gICAgfVxuICAgIHJldHVybiB2aXp1YWxpemVycztcbiAgfVxuICAvKipcbiAgICogR2V0IHZpc3VhbGl6ZXJzIChjb25zdHJ1Y3RvcnMpIGZvciBxdWVzdGlvbiB0eXBlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRBbHRlcm5hdGl2ZXNWaXN1YWxpemVyKCkge1xuICAgIHJldHVybiBWaXN1YWxpemF0aW9uTWFuYWdlci5hbHRlcm5hdGl2ZXNWaXN1YWxpemVyIHx8IFZpc3VhbGl6ZXJCYXNlO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlciB2aXN1YWxpemVyIChjb25zdHJ1Y3RvcikgZm9yIHF1ZXN0aW9uIHR5cGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWx0ZXJuYXRpdmVzVmlzdWFsaXplcihjb25zdHJ1Y3RvcjogYW55KSB7XG4gICAgVmlzdWFsaXphdGlvbk1hbmFnZXIuYWx0ZXJuYXRpdmVzVmlzdWFsaXplciA9IGNvbnN0cnVjdG9yO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwsXG4gIE1hdHJpeERyb3Bkb3duQ29sdW1uLFxuICBJdGVtVmFsdWUsXG59IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhUHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYXRyaXhEcm9wZG93biBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJvdGVjdGVkIF9wYW5lbFZpc3VhbGl6ZXI6IFZpc3VhbGl6YXRpb25QYW5lbCA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge30sXG4gICAgbmFtZT86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucywgbmFtZSB8fCBcIm1hdHJpeERyb3Bkb3duXCIpO1xuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgb3B0aW9ucy5kYXRhUHJvdmlkZXIgPSB1bmRlZmluZWQ7XG4gICAgb3B0aW9ucy5hbGxvd0R5bmFtaWNMYXlvdXQgPSBmYWxzZTtcbiAgICBvcHRpb25zLnNlcmllc1ZhbHVlcyA9IHF1ZXN0aW9uLnJvd3MubWFwKChyb3c6IEl0ZW1WYWx1ZSkgPT4gcm93LnZhbHVlKTtcbiAgICBvcHRpb25zLnNlcmllc0xhYmVscyA9IHF1ZXN0aW9uLnJvd3MubWFwKChyb3c6IEl0ZW1WYWx1ZSkgPT4gcm93LnRleHQpO1xuXG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyID0gbmV3IFZpc3VhbGl6YXRpb25QYW5lbChcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCksXG4gICAgICBbXSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIHRoaXMudXBkYXRlRGF0YShkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xuICAgIHN1cGVyLnVwZGF0ZURhdGEoZGF0YSk7XG4gICAgbGV0IHBhbmVsRGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgbGV0IHJhd0RhdGFJdGVtID0gZGF0YUl0ZW1bdGhpcy5xdWVzdGlvbi5uYW1lXTtcbiAgICAgIGlmICghIXJhd0RhdGFJdGVtKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJhd0RhdGFJdGVtKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICB2YXIgbmVzdGVkRGF0YUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCByYXdEYXRhSXRlbVtrZXldKTtcbiAgICAgICAgICBuZXN0ZWREYXRhSXRlbVtEYXRhUHJvdmlkZXIuc2VyaWVzTWFya2VyS2V5XSA9IGtleTtcbiAgICAgICAgICBwYW5lbERhdGEucHVzaChuZXN0ZWREYXRhSXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3BhbmVsVmlzdWFsaXplci51cGRhdGVEYXRhKHBhbmVsRGF0YSk7XG4gIH1cblxuICBnZXRRdWVzdGlvbnMoKSB7XG4gICAgY29uc3QgbWF0cml4ZHJvcGRvd246IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gbWF0cml4ZHJvcGRvd24uY29sdW1ucy5tYXAoXG4gICAgICAoY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbikgPT4gY29sdW1uLnRlbXBsYXRlUXVlc3Rpb25cbiAgICApO1xuICB9XG5cbiAgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3BhbmVsVmlzdWFsaXplci5jbGVhcigpO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gIH1cblxuICByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIucmVuZGVyKGNvbnRhaW5lcik7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcIm1hdHJpeGRyb3Bkb3duXCIsXG4gIFZpc3VhbGl6YXRpb25NYXRyaXhEcm9wZG93blxuKTtcbiIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxEeW5hbWljXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pYyBleHRlbmRzIFZpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJtYXRyaXhEeW5hbWljXCI7XG4gIH1cblxuICBnZXRRdWVzdGlvbnMoKSB7XG4gICAgY29uc3QgbWF0cml4ZHluYW1pYzogUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIGNvbnN0IHZpc2libGVSb3dzID0gbWF0cml4ZHluYW1pYy52aXNpYmxlUm93cztcblxuICAgIGlmICh2aXNpYmxlUm93cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIHJldHVybiB2aXNpYmxlUm93c1swXS5jZWxscy5tYXAoYyA9PiBjLnF1ZXN0aW9uKTtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXG4gIFwibWF0cml4ZHluYW1pY1wiLFxuICBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pY1xuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IEV2ZW50LCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4vdXRpbHMvaW5kZXhcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7XG4gIElWaXN1YWxpemVyUGFuZWxFbGVtZW50LFxuICBFbGVtZW50VmlzaWJpbGl0eSxcbiAgSVN0YXRlLFxuICBJUGVybWlzc2lvbixcbn0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBGaWx0ZXJJbmZvIH0gZnJvbSBcIi4vZmlsdGVySW5mb1wiO1xuaW1wb3J0IHsgTGF5b3V0RW5naW5lLCBNdXVyaUxheW91dEVuZ2luZSB9IGZyb20gXCIuL2xheW91dEVuZ2luZVwiO1xuXG5pbXBvcnQgXCIuL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzXCI7XG5cbmNvbnN0IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25cIjtcbmNvbnN0IHF1ZXN0aW9uTGF5b3V0ZWRFbGVtZW50Q2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbi1sYXlvdXRlZFwiO1xuXG5pZiAoISFkb2N1bWVudCkge1xuICBjb25zdCBzdmdUZW1wbGF0ZSA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4vc3ZnYnVuZGxlLmh0bWxcIik7XG4gIGNvbnN0IHRlbXBsYXRlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcGxhdGVIb2xkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0ZW1wbGF0ZUhvbGRlci5pbm5lckhUTUwgPSBzdmdUZW1wbGF0ZTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUhvbGRlcik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZpc3VhbGl6ZXJQYW5lbFJlbmRlcmVkRWxlbWVudFxuICBleHRlbmRzIElWaXN1YWxpemVyUGFuZWxFbGVtZW50IHtcbiAgcmVuZGVyZWRFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG59XG5cbi8qKlxuICogVmlzdWFsaXphdGlvblBhbmVsIGlzIHJlc3BvbnNpYmxlIGZvciBkaXNwbGF5aW5nIGFuIGFycmF5IG9mIHN1cnZleSBxdWVzdGlvbnNcbiAqXG4gKiBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJzOlxuICogcXVlc3Rpb25zIC0gYW4gYXJyYXkgb2Ygc3VydmV5IHF1ZXN0aW9ucyB0byB2aXN1YWxpemVcbiAqIGRhdGEgLSBhbiBhcnJheSBvZiBhbnN3ZXJzIGluIGZvcm1hdCBvZiBzdXJ2ZXkgcmVzdWx0XG4gKlxuICogb3B0aW9uczpcbiAqIGFsbG93RHluYW1pY0xheW91dCAtIHNldCBpdCB0byBmYWxzZSB0byBkaXNhYmxlIGl0ZW1zIGRyYWcvZHJvcCByZW9yZGVyaW5nIGFuZCBkeW5hbWljIGxheW91dGluZ1xuICogYWxsb3dIaWRlUXVlc3Rpb25zIC0gc2V0IGl0IHRvIGZhbHNlIHRvIGRlbnkgdXNlciB0byBoaWRlL3Nob3cgaW5kaXZpZHVhbCBxdWVzdGlvbnNcbiAqIHNlcmllc1ZhbHVlcyAtIGFuIGFycmF5IG9mIHNlcmllcyB2YWx1ZXMgaW4gZGF0YSB0byBncm91cCBkYXRhIGJ5IHNlcmllc1xuICogc2VyaWVzTGFiZWxzIC0gbGFiZWxzIGZvciBzZXJpZXMgdG8gZGlzcGxheSwgaWYgbm90IHBhc3NlZCB0aGUgc2VyaWVzVmFsdWVzIGFyZSB1c2VkIGFzIGxhYmVsc1xuICogc3VydmV5IC0gcGFzcyBzdXJ2ZXkgaW5zdGFuY2UgdG8gdXNlIGxvY2Fsc2VzIGZyb20gdGhlIHN1cnZleSBKU09OXG4gKiBkYXRhUHJvdmlkZXIgLSBkYXRhUHJvdmlkZXIgZm9yIHRoaXMgdmlzdWFsaXplclxuICpcbiAqIGVsZW1lbnRzIC0gbGlzdCBvZiB2aXN1YWwgZWxlbWVudCBkZXNjcmlwdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25QYW5lbCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcXVlc3Rpb25zOiBBcnJheTxhbnk+LFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge30sXG4gICAgcHJpdmF0ZSBfZWxlbWVudHM6IEFycmF5PElWaXN1YWxpemVyUGFuZWxSZW5kZXJlZEVsZW1lbnQ+ID0gdW5kZWZpbmVkLFxuICAgIHByaXZhdGUgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgc3VwZXIobnVsbCwgZGF0YSwgb3B0aW9ucywgXCJwYW5lbFwiKTtcblxuICAgIHRoaXMuX2xheW91dEVuZ2luZSA9XG4gICAgICBvcHRpb25zLmxheW91dEVuZ2luZSB8fFxuICAgICAgbmV3IE11dXJpTGF5b3V0RW5naW5lKFxuICAgICAgICB0aGlzLmFsbG93RHluYW1pY0xheW91dCxcbiAgICAgICAgXCIuXCIgKyBxdWVzdGlvbkxheW91dGVkRWxlbWVudENsYXNzTmFtZVxuICAgICAgKTtcbiAgICB0aGlzLl9sYXlvdXRFbmdpbmUub25Nb3ZlQ2FsbGJhY2sgPSAoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikgPT5cbiAgICAgIHRoaXMubW92ZVZpc2libGVFbGVtZW50KGZyb21JbmRleCwgdG9JbmRleCk7XG5cbiAgICB0aGlzLnNob3dIZWFkZXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnN1cnZleSkge1xuICAgICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSB0aGlzLm9wdGlvbnMuc3VydmV5LmxvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAoX2VsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRzID0gdGhpcy5idWlsZEVsZW1lbnRzKHF1ZXN0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhpcy5idWlsZFZpc3VhbGl6ZXJzKHF1ZXN0aW9ucyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJyZXNldEZpbHRlclwiLCAoKSA9PiB7XG4gICAgICByZXR1cm4gRG9jdW1lbnRIZWxwZXIuY3JlYXRlQnV0dG9uKCgpID0+IHtcbiAgICAgICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKCh2aXN1YWxpemVyKSA9PiB7XG4gICAgICAgICAgaWYgKHZpc3VhbGl6ZXIgaW5zdGFuY2VvZiBTZWxlY3RCYXNlKSB7XG4gICAgICAgICAgICB2aXN1YWxpemVyLnNldFNlbGVjdGlvbih1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicmVzZXRGaWx0ZXJcIikpO1xuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcImFkZEVsZW1lbnRcIiwgKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5hbGxvd0hpZGVRdWVzdGlvbnMpIHtcbiAgICAgICAgbGV0IGFkZEVsZW1lbnRTZWxlY3RvcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGFkZEVsZW1lbnRTZWxlY3RvclVwZGF0ZXIgPSAoXG4gICAgICAgICAgcGFuZWw6IFZpc3VhbGl6YXRpb25QYW5lbCxcbiAgICAgICAgICBvcHRpb25zOiBhbnlcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSB0aGlzLmhpZGRlbkVsZW1lbnRzO1xuICAgICAgICAgIGlmIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICA8YW55PntcbiAgICAgICAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYWRkRWxlbWVudFwiKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgLmNvbmNhdChoaWRkZW5FbGVtZW50cylcbiAgICAgICAgICAgICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbGVtZW50LmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKG9wdGlvbjogYW55KSA9PiBmYWxzZSxcbiAgICAgICAgICAgICAgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgKGFkZEVsZW1lbnRTZWxlY3RvciAmJlxuICAgICAgICAgICAgICB0b29sYmFyLnJlcGxhY2VDaGlsZChzZWxlY3RXcmFwcGVyLCBhZGRFbGVtZW50U2VsZWN0b3IpKSB8fFxuICAgICAgICAgICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICAgICAgYWRkRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0V3JhcHBlcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkRWxlbWVudFNlbGVjdG9yICYmIHRvb2xiYXIucmVtb3ZlQ2hpbGQoYWRkRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvclVwZGF0ZXIodGhpcywge30pO1xuICAgICAgICB0aGlzLm9uVmlzaWJsZUVsZW1lbnRzQ2hhbmdlZC5hZGQoYWRkRWxlbWVudFNlbGVjdG9yVXBkYXRlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmxvY2FsZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5yZWdpc3RlclRvb2xiYXJJdGVtKFwiY2hhbmdlTG9jYWxlXCIsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIERvY3VtZW50SGVscGVyLmNyZWF0ZVNlbGVjdG9yKFxuICAgICAgICAgIFtsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiY2hhbmdlTG9jYWxlXCIpXVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmxvY2FsZXMpXG4gICAgICAgICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdGV4dDogZWxlbWVudCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIChvcHRpb246IGFueSkgPT4gZmFsc2UsXG4gICAgICAgICAgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG5ld0xvY2FsZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNob3dFbGVtZW50KGVsZW1lbnROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICBjb25zdCBlbGVtZW50SW5kZXggPSB0aGlzLl9lbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQudmlzaWJpbGl0eSA9IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGU7XG4gICAgY29uc3QgcXVlc3Rpb25FbGVtZW50ID0gdGhpcy5yZW5kZXJQYW5lbEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgdGhpcy5sYXlvdXRFbmdpbmUuYWRkKFtxdWVzdGlvbkVsZW1lbnRdLCB7IGluZGV4OiBlbGVtZW50SW5kZXggfSk7XG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHNDaGFuZ2VkKGVsZW1lbnQsIFwiQURERURcIik7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGlkZUVsZW1lbnQoZWxlbWVudE5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgIGVsZW1lbnQudmlzaWJpbGl0eSA9IEVsZW1lbnRWaXNpYmlsaXR5LkludmlzaWJsZTtcbiAgICBpZiAoISFlbGVtZW50LnJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgdGhpcy5sYXlvdXRFbmdpbmUucmVtb3ZlKFtlbGVtZW50LnJlbmRlcmVkRWxlbWVudF0pO1xuICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnQucmVuZGVyZWRFbGVtZW50KTtcbiAgICAgIGVsZW1lbnQucmVuZGVyZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnZpc2libGVFbGVtZW50c0NoYW5nZWQoZWxlbWVudCwgXCJSRU1PVkVEXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1ha2VFbGVtZW50UHJpdmF0ZShlbGVtZW50OiBhbnkpIHtcbiAgICBpZiAoZWxlbWVudC52aXNpYmlsaXR5ICE9PSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlKSByZXR1cm47XG5cbiAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICAgIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJiB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbWFrZUVsZW1lbnRQdWJsaWMoZWxlbWVudDogYW55KSB7XG4gICAgaWYgKGVsZW1lbnQudmlzaWJpbGl0eSAhPT0gRWxlbWVudFZpc2liaWxpdHkuUHVibGljSW52aXNpYmxlKSByZXR1cm47XG5cbiAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sgJiYgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrKHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1vdmVWaXNpYmxlRWxlbWVudChcbiAgICBmcm9tVmlzaWJsZUluZGV4OiBudW1iZXIsXG4gICAgdG9WaXNpYmxlSW5kZXg6IG51bWJlclxuICApIHtcbiAgICBsZXQgZnJvbUluZGV4LCB0b0luZGV4O1xuXG4gICAgbGV0IGZyb21WaXNpYmxlSW5kZXhFbGVtZW50ID0gdGhpcy52aXNpYmxlRWxlbWVudHNbZnJvbVZpc2libGVJbmRleF07XG4gICAgbGV0IHRvVmlzaWJsZUluZGV4RWxlbWVudCA9IHRoaXMudmlzaWJsZUVsZW1lbnRzW3RvVmlzaWJsZUluZGV4XTtcblxuICAgIGZyb21JbmRleCA9IHRoaXMuX2VsZW1lbnRzLmluZGV4T2YoZnJvbVZpc2libGVJbmRleEVsZW1lbnQpO1xuICAgIHRvSW5kZXggPSB0aGlzLl9lbGVtZW50cy5pbmRleE9mKHRvVmlzaWJsZUluZGV4RWxlbWVudCk7XG5cbiAgICB0aGlzLm1vdmVFbGVtZW50KGZyb21JbmRleCwgdG9JbmRleCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbW92ZUVsZW1lbnQoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikge1xuICAgIHZhciBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzLnNwbGljZShmcm9tSW5kZXgsIDEpO1xuICAgIHRoaXMuX2VsZW1lbnRzLnNwbGljZSh0b0luZGV4LCAwLCBlbGVtZW50c1swXSk7XG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHNDaGFuZ2VkKGVsZW1lbnRzWzBdLCBcIk1PVkVEXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFZpc3VhbGl6ZXJzKHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb24+KSB7XG4gICAgcXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XG4gICAgICBjb25zdCB2aXN1YWxpemVyID0gdGhpcy5jcmVhdGVWaXN1YWxpemVyKHF1ZXN0aW9uKTtcblxuICAgICAgaWYgKHRoaXMuYWxsb3dIaWRlUXVlc3Rpb25zKSB7XG4gICAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInJlbW92ZVF1ZXN0aW9uXCIsICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gRG9jdW1lbnRIZWxwZXIuY3JlYXRlQnV0dG9uKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlRWxlbWVudChxdWVzdGlvbi5uYW1lKSwgMCk7XG4gICAgICAgICAgfSwgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVCdXR0b25cIikpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNUcnVzdGVkQWNjZXNzKSB7XG4gICAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcIm1ha2VQcml2YXRlUHVibGljXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KHF1ZXN0aW9uLm5hbWUpO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGUgPVxuICAgICAgICAgICAgZWxlbWVudC52aXNpYmlsaXR5ID09PSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlXG4gICAgICAgICAgICAgID8gXCJmaXJzdFwiXG4gICAgICAgICAgICAgIDogXCJzZWNvbmRcIjtcblxuICAgICAgICAgIGNvbnN0IHBhdGhNYWtlUHJpdmF0ZVN2ZyA9IFwibWFrZXByaXZhdGVcIjtcbiAgICAgICAgICBjb25zdCBwYXRoTWFrZVB1YmxpY1N2ZyA9IFwibWFrZXB1YmxpY1wiO1xuICAgICAgICAgIGNvbnN0IG1ha2VQcml2YXRlVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVByaXZhdGVCdXR0b25cIik7XG4gICAgICAgICAgY29uc3QgbWFrZVB1YmxpY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNCdXR0b25cIik7XG4gICAgICAgICAgY29uc3QgZG9Qcml2YXRlID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VFbGVtZW50UHJpdmF0ZShlbGVtZW50KSwgMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBkb1B1YmxpYyA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tYWtlRWxlbWVudFB1YmxpYyhlbGVtZW50KSwgMCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdUb2dnbGVCdXR0b24oXG4gICAgICAgICAgICBwYXRoTWFrZVB1YmxpY1N2ZyxcbiAgICAgICAgICAgIHBhdGhNYWtlUHJpdmF0ZVN2ZyxcbiAgICAgICAgICAgIG1ha2VQcml2YXRlVGl0bGUsXG4gICAgICAgICAgICBtYWtlUHVibGljVGl0bGUsXG4gICAgICAgICAgICBkb1B1YmxpYyxcbiAgICAgICAgICAgIGRvUHJpdmF0ZSxcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICBsZXQgZmlsdGVySW5mbyA9IG5ldyBGaWx0ZXJJbmZvKHZpc3VhbGl6ZXIpO1xuXG4gICAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInF1ZXN0aW9uRmlsdGVySW5mb1wiLCAoKSA9PiB7XG4gICAgICAgICAgZmlsdGVySW5mby51cGRhdGUodmlzdWFsaXplci5zZWxlY3Rpb24pO1xuICAgICAgICAgIHJldHVybiBmaWx0ZXJJbmZvLmh0bWxFbGVtZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IChcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBhbnksXG4gICAgICAgICAgc2VsZWN0ZWRUZXh0OiBzdHJpbmdcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgZmlsdGVySW5mby51cGRhdGUoeyB2YWx1ZTogc2VsZWN0ZWRWYWx1ZSwgdGV4dDogc2VsZWN0ZWRUZXh0IH0pO1xuICAgICAgICAgIHRoaXMuc2V0RmlsdGVyKHF1ZXN0aW9uLm5hbWUsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcbiAgICAgIHRoaXMudmlzdWFsaXplcnMucHVzaCh2aXN1YWxpemVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVZpc3VhbGl6ZXJzKCkge1xuICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgdmlzdWFsaXplci5vblVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMudmlzdWFsaXplcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgbG9jYWxlIG9mIHRoZSB2aXN1YWxpemF0aW9uIHBhbmVsLlxuICAgKiBJZiBsb2NhbGVzIG1vcmUgdGhhbiBvbmUsIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gZHJvcGRvd24gd2lsbCBiZSBhZGRlZCBpbiB0aGUgdG9vbGJhclxuICAgKiBJbiBvcmRlciB0byB1c2Ugc3VydmV5IGxvY2FsZXMgdGhlIHN1cnZleSBpbnN0YW5jZSBvYmplY3Qgc2hvdWxkIGJlIHBhc3NlZCBhcyAnc3VydmV5JyBvcHRpb24gZm9yIHZpc3VhbGl6ZXJcbiAgICovXG4gIHB1YmxpYyBnZXQgbG9jYWxlKCkge1xuICAgIHZhciBzdXJ2ZXkgPSB0aGlzLm9wdGlvbnMuc3VydmV5O1xuICAgIGlmICghIXN1cnZleSkge1xuICAgICAgcmV0dXJuIHN1cnZleS5sb2NhbGU7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGxvY2FsZSBmb3IgdmlzdWFsaXphdGlvbiBwYW5lbC5cbiAgICovXG4gIHB1YmxpYyBzZXQgbG9jYWxlKG5ld0xvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobmV3TG9jYWxlKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHNldExvY2FsZShuZXdMb2NhbGU6IHN0cmluZykge1xuICAgIHZhciBzdXJ2ZXkgPSB0aGlzLm9wdGlvbnMuc3VydmV5O1xuICAgIGlmICghIXN1cnZleSkge1xuICAgICAgc3VydmV5LmxvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICAgICh0aGlzLnF1ZXN0aW9ucyB8fCBbXSkuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChxdWVzdGlvbi5uYW1lKTtcbiAgICAgICAgaWYgKCEhZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZGlzcGxheU5hbWUgPSBxdWVzdGlvbi50aXRsZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgVmlzdWFsaXphdGlvblBhbmVsIGFsbG93cyBkeW5hbWljIGxheW91dGluZyAtIHJlYXJyYW5nZSBpdGVtcyB2aWEgZHJhcC9kcm9wLlxuICAgKi9cbiAgcHVibGljIGdldCBhbGxvd0R5bmFtaWNMYXlvdXQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMub3B0aW9ucy5hbGxvd0R5bmFtaWNMYXlvdXQgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5vcHRpb25zLmFsbG93RHluYW1pY0xheW91dCA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBWaXN1YWxpemF0aW9uUGFuZWwgYWxsb3dzIHRvIGhpZGUvc2hvdyBpbmRpdmlkdWFsIGlubmVyIHZpc3VhbGl6ZXJzLlxuICAgKi9cbiAgcHVibGljIGdldCBhbGxvd0hpZGVRdWVzdGlvbnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMub3B0aW9ucy5hbGxvd0hpZGVRdWVzdGlvbnMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5vcHRpb25zLmFsbG93SGlkZVF1ZXN0aW9ucyA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9sYXlvdXRFbmdpbmU6IExheW91dEVuZ2luZTtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxheW91dCBlbmdpbmUgaW5zdGFuY2UgaWYgYW55LlxuICAgKi9cbiAgcHVibGljIGdldCBsYXlvdXRFbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dEVuZ2luZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZEVsZW1lbnRzKHF1ZXN0aW9uczogYW55W10pOiBJVmlzdWFsaXplclBhbmVsRWxlbWVudFtdIHtcbiAgICByZXR1cm4gKHF1ZXN0aW9ucyB8fCBbXSkubWFwKChxdWVzdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6IHF1ZXN0aW9uLnRpdGxlLFxuICAgICAgICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlLFxuICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcGFuZWwgZWxlbWVudHMgZGVzY3JpcHRpb25zIGFycmF5LlxuICAgKiBJbm5lciB2aXN1YWxpemVycyBhcmUgcmVuZGVyZWQgaW4gdGhlIG9yZGVyIG9mIHRoaXMgYXJyYXkgYW5kIHdpdGggdGl0bGVzIGZyb20gdGhlIGRpc3BsYXlOYW1lIHByb3BlcnR5XG4gICAqL1xuICBwdWJsaWMgZ2V0RWxlbWVudHMoKTogSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuICh0aGlzLl9lbGVtZW50cyB8fCBbXSkubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBlbGVtZW50Lm5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBlbGVtZW50LmRpc3BsYXlOYW1lLFxuICAgICAgICB2aXNpYmlsaXR5OiBlbGVtZW50LnZpc2liaWxpdHksXG4gICAgICAgIHR5cGU6IGVsZW1lbnQudHlwZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgY2VydGFpbiBlbGVtZW50IGlzIHZpc2libGUuXG4gICAqL1xuICBwdWJsaWMgaXNWaXNpYmxlKHZpc2liaWxpdHk6IEVsZW1lbnRWaXNpYmlsaXR5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ICE9PSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGUpIHx8XG4gICAgICAoIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgdmlzaWJsZUVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5maWx0ZXIoKGVsKSA9PiB0aGlzLmlzVmlzaWJsZShlbC52aXNpYmlsaXR5KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGhpZGRlbkVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5maWx0ZXIoKGVsKSA9PiAhdGhpcy5pc1Zpc2libGUoZWwudmlzaWJpbGl0eSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBsb2NhbGVzKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3VydmV5KSByZXR1cm4gdGhpcy5vcHRpb25zLnN1cnZleS5nZXRVc2VkTG9jYWxlcygpO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBhbmVsIGVsZW1lbnQgZGVzY3JpcHRpb24gYnkgdGhlIHF1ZXN0aW9uIG5hbWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0RWxlbWVudChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWwubmFtZSA9PT0gbmFtZSlbMF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwYW5lbCBlbGVtZW50IHZpc3VhbGl6ZXIgYnkgdGhlIHF1ZXN0aW9uIG5hbWUuXG4gICAqL1xuICBnZXRWaXN1YWxpemVyKGRhdGFOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy52aXN1YWxpemVycy5maWx0ZXIoKHYpID0+IHYuZGF0YU5hbWUgPT09IGRhdGFOYW1lKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGVsZW1lbnQgdmlzaWJpbGl0eSBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKiBvcHRpb25zOlxuICAgKiBlbGVtZW50cyAtIHBhbmVsIGVsZW1lbnRzIGFycmF5XG4gICAqIGNoYW5nZWQgLSBjaGFuZ2VkIGVsZW1lbnRcbiAgICogcmVhc29uIC0gcmVhc29uIChzdHJpbmcpIHdoeSBldmVudCBmaXJlZDogXCJBRERFRFwiLCBcIk1PVkVEXCIgb3IgXCJSRU1PVkVEXCJcbiAgICovXG4gIHB1YmxpYyBvblZpc2libGVFbGVtZW50c0NoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVmlzdWFsaXphdGlvblBhbmVsLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPigpO1xuXG4gIHByb3RlY3RlZCB2aXNpYmxlRWxlbWVudHNDaGFuZ2VkKFxuICAgIGVsZW1lbnQ6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50LFxuICAgIHJlYXNvbjogc3RyaW5nXG4gICkge1xuICAgIGlmICghdGhpcy5vblZpc2libGVFbGVtZW50c0NoYW5nZWQuaXNFbXB0eSkge1xuICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NoYW5nZWQuZmlyZSh0aGlzLCB7XG4gICAgICAgIGVsZW1lbnRzOiB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgY2hhbmdlZDogZWxlbWVudCxcbiAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICAgIHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB2aXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIGNoYW5nZWQuXG4gICAqIHNlbmRlciAtIHRoaXMgcGFuZWxcbiAgICogc3RhdGUgLSBuZXcgc3RhdGUgb2YgdGhlIHBhbmVsXG4gICAqL1xuICBwdWJsaWMgb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVmlzdWFsaXphdGlvblBhbmVsLCBzdGF0ZTogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBwZXJtaXNzaW9ucyBjaGFuZ2VkXG4gICAqL1xuICBwdWJsaWMgb25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjazogYW55O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGdpdmVuIHBhbmVsIGVsZW1lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVuZGVyUGFuZWxFbGVtZW50KGVsZW1lbnQ6IElWaXN1YWxpemVyUGFuZWxSZW5kZXJlZEVsZW1lbnQpIHtcbiAgICBjb25zdCB2aXN1YWxpemVyID0gdGhpcy5nZXRWaXN1YWxpemVyKGVsZW1lbnQubmFtZSk7XG5cbiAgICBjb25zdCBxdWVzdGlvbkVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IHZpenVhbGl6ZXJFbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBlbGVtZW50LmRpc3BsYXlOYW1lO1xuXG4gICAgcXVlc3Rpb25FbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuYWxsb3dEeW5hbWljTGF5b3V0XG4gICAgICA/IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiIFwiICsgcXVlc3Rpb25MYXlvdXRlZEVsZW1lbnRDbGFzc05hbWVcbiAgICAgIDogcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgKyBcIl9fdGl0bGVcIjtcbiAgICBxdWVzdGlvbkNvbnRlbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lICsgXCJfX2NvbnRlbnRcIjtcblxuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh2aXp1YWxpemVyRWxlbWVudCk7XG4gICAgcXVlc3Rpb25FbGVtZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uQ29udGVudCk7XG5cbiAgICB2aXN1YWxpemVyLnJlbmRlcih2aXp1YWxpemVyRWxlbWVudCk7XG5cbiAgICBlbGVtZW50LnJlbmRlcmVkRWxlbWVudCA9IHF1ZXN0aW9uRWxlbWVudDtcbiAgICByZXR1cm4gcXVlc3Rpb25FbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlclRvb2xiYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgc2EtcGFuZWxfX2hlYWRlclwiO1xuICAgIHN1cGVyLnJlbmRlclRvb2xiYXIoY29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFsbCBxdWVzdGlvbnMgaW50byBnaXZlbiBIVE1MIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKiBjb250YWluZXIgLSBIVE1MIGVsZW1lbnQgdG8gcmVuZGVyIHRoZSBwYW5lbFxuICAgKi9cbiAgcHVibGljIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgc2EtcGFuZWxfX2NvbnRlbnQgc2EtZ3JpZFwiO1xuXG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyUGFuZWxFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxheW91dEVuZ2luZS5zdGFydChjb250YWluZXIpO1xuICAgIC8vICEhd2luZG93ICYmIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBVSUV2ZW50KFwicmVzaXplXCIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB2aXN1YWxpemVyIGFuZCBhbGwgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5sYXlvdXRFbmdpbmUuc3RvcCgpO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGZvciBjbGVhcmluZyBhbGwgcmVuZGVyZWQgZWxlbWVudHMgZnJvbSBvdXRzaWRlLlxuICAgKi9cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIGlmICghIXRoaXMudG9vbGJhckNvbnRhaW5lcikge1xuICAgICAgdGhpcy5kZXN0cm95VG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuICAgIH1cbiAgICBpZiAoISF0aGlzLmNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgIHRoaXMuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICB9XG4gICAgaWYgKCEhdGhpcy5mb290ZXJDb250YWluZXIpIHtcbiAgICAgIHRoaXMuZGVzdHJveUZvb3Rlcih0aGlzLmZvb3RlckNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZHJhd3MgdmlzdWFsaXplciB0b29iYXIgYW5kIGFsbCBpbm5lciBjb250ZW50LlxuICAgKi9cbiAgcHVibGljIHJlZnJlc2goKSB7XG4gICAgaWYgKCEhdGhpcy50b29sYmFyQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lUb29sYmFyKHRoaXMudG9vbGJhckNvbnRhaW5lcik7XG4gICAgICB0aGlzLnJlbmRlclRvb2xiYXIodGhpcy50b29sYmFyQ29udGFpbmVyKTtcbiAgICB9XG4gICAgc3VwZXIucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgbGF5b3V0IG9mIHZpc3VhbGl6ZXIgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgdGhpcy5sYXlvdXRFbmdpbmUudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmaWx0ZXIgYnkgcXVlc3Rpb24gbmFtZSBhbmQgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgc2V0RmlsdGVyKHF1ZXN0aW9uTmFtZTogc3RyaW5nLCBzZWxlY3RlZFZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFQcm92aWRlci5zZXRGaWx0ZXIocXVlc3Rpb25OYW1lLCBzZWxlY3RlZFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IElTdGF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICBlbGVtZW50czogW10uY29uY2F0KHRoaXMuX2VsZW1lbnRzKSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgc2V0IHN0YXRlKG5ld1N0YXRlOiBJU3RhdGUpIHtcbiAgICB0aGlzLl9lbGVtZW50cyA9IFtdLmNvbmNhdChuZXdTdGF0ZS5lbGVtZW50cyB8fCBbXSk7XG4gICAgdGhpcy5zZXRMb2NhbGUobmV3U3RhdGUubG9jYWxlKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHZpenVhbGl6YXRpb24gcGFuZWwgcGVybWlzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCk6IElQZXJtaXNzaW9uW10ge1xuICAgIHJldHVybiA8YW55PnRoaXMuX2VsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICB2aXNpYmlsaXR5OiBlbGVtZW50LnZpc2liaWxpdHksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHZpenVhbGl6YXRpb24gcGFuZWwgcGVybWlzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgc2V0IHBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBJUGVybWlzc2lvbltdKSB7XG4gICAgY29uc3QgdXBkYXRlZEVsZW1lbnRzID0gdGhpcy5fZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtaXNzaW9uLm5hbWUgPT09IGVsZW1lbnQubmFtZSlcbiAgICAgICAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBwZXJtaXNzaW9uLnZpc2liaWxpdHk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHsgLi4uZWxlbWVudCB9O1xuICAgIH0pO1xuICAgIHRoaXMuX2VsZW1lbnRzID0gW10uY29uY2F0KHVwZGF0ZWRFbGVtZW50cyk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrICYmIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayh0aGlzKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZGVzdHJveVZpc3VhbGl6ZXJzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25QYW5lbCB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbFwiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uUGFuZWxEeW5hbWljTW9kZWwsIElRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJvdGVjdGVkIF9wYW5lbFZpc3VhbGl6ZXI6IFZpc3VhbGl6YXRpb25QYW5lbCA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICBuYW1lPzogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zLCBuYW1lIHx8IFwicGFuZWxEeW5hbWljXCIpO1xuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgb3B0aW9ucy5hbGxvd0R5bmFtaWNMYXlvdXQgPSBmYWxzZTtcbiAgICBvcHRpb25zLmRhdGFQcm92aWRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIgPSBuZXcgVmlzdWFsaXphdGlvblBhbmVsKFxuICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKSxcbiAgICAgIFtdLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gICAgdGhpcy51cGRhdGVEYXRhKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcInBhbmVsRHluYW1pY1wiO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgc3VwZXIudXBkYXRlRGF0YShkYXRhKTtcbiAgICBsZXQgcGFuZWxEYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICBpZiAoZGF0YUl0ZW1bdGhpcy5xdWVzdGlvbi5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhbmVsRGF0YSA9IHBhbmVsRGF0YS5jb25jYXQoZGF0YUl0ZW1bdGhpcy5xdWVzdGlvbi5uYW1lXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLnVwZGF0ZURhdGEocGFuZWxEYXRhKTtcbiAgfVxuXG4gIGdldFF1ZXN0aW9ucygpOiBJUXVlc3Rpb25bXSB7XG4gICAgY29uc3QgcGFuZWxkeW5hbWljOiBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBwYW5lbGR5bmFtaWMudGVtcGxhdGUucXVlc3Rpb25zO1xuICB9XG5cbiAgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3BhbmVsVmlzdWFsaXplci5jbGVhcigpO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gIH1cblxuICByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIucmVuZGVyKGNvbnRhaW5lcik7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcInBhbmVsZHluYW1pY1wiLFxuICBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljXG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uQ29tbWVudE1vZGVsLCBzZXR0aW5ncyB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSURhdGFJbmZvLCBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhUHJvdmlkZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJGYWN0b3J5IH0gZnJvbSBcIi4vdmlzdWFsaXplckZhY3RvcnlcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuaW1wb3J0IFwiLi92aXN1YWxpemVyQmFzZS5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemVyQmFzZSBpbXBsZW1lbnRzIElEYXRhSW5mbyB7XG4gIHByaXZhdGUgX3Nob3dIZWFkZXIgPSB0cnVlO1xuICBwcml2YXRlIF9mb290ZXJWaXN1YWxpemVyOiBWaXN1YWxpemVyQmFzZSA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIgPSB1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCByZW5kZXJSZXN1bHQ6IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgdG9vbGJhckNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCBjb250ZW50Q29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIGZvb3RlckNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIC8vIHB1YmxpYyBzdGF0aWMgb3RoZXJDb21tZW50UXVlc3Rpb25UeXBlID0gXCJjb21tZW50XCI7IC8vIFRPRE86IG1ha2UgaXQgY29uZmlndXJlYWJsZSAtIGFsbG93IGNob29zZSB3aGF0IGtpbmQgb2YgcXVlc3Rpb24vdmlzdWFsaXplciB3aWxsIGJlIHVzZWQgZm9yIGNvbW1lbnRzL290aGVyc1xuICBwdWJsaWMgc3RhdGljIG90aGVyQ29tbWVudENvbGxhcHNlZCA9IHRydWU7XG5cbiAgcHJvdGVjdGVkIHRvb2xiYXJJdGVtQ3JlYXRvcnM6IHtcbiAgICBbbmFtZTogc3RyaW5nXTogKHRvb2xiYXI/OiBIVE1MRGl2RWxlbWVudCkgPT4gSFRNTEVsZW1lbnQ7XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgIHByaXZhdGUgX25hbWU/OiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyID0gb3B0aW9ucy5kYXRhUHJvdmlkZXIgfHwgbmV3IERhdGFQcm92aWRlcihkYXRhKTtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIub25EYXRhQ2hhbmdlZC5hZGQoKCkgPT4gdGhpcy5vbkRhdGFDaGFuZ2VkKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGF0YUNoYW5nZWQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgZGF0YU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5uYW1lO1xuICB9XG5cbiAgZ2V0IGhhc0Zvb3RlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISF0aGlzLnF1ZXN0aW9uICYmICh0aGlzLnF1ZXN0aW9uLmhhc0NvbW1lbnQgfHwgdGhpcy5xdWVzdGlvbi5oYXNPdGhlcilcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVZpc3VhbGl6ZXIocXVlc3Rpb246IFF1ZXN0aW9uKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmRhdGFQcm92aWRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLmRhdGFQcm92aWRlciA9IHRoaXMuZGF0YVByb3ZpZGVyO1xuICAgIH1cblxuICAgIHJldHVybiBWaXN1YWxpemVyRmFjdG9yeS5jcmVhdGVWaXN1YWxpemVyKHF1ZXN0aW9uLCB0aGlzLmRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0IGZvb3RlclZpc3VhbGl6ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmhhc0Zvb3Rlcikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9mb290ZXJWaXN1YWxpemVyKSB7XG4gICAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBRdWVzdGlvbkNvbW1lbnRNb2RlbChcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5uYW1lICsgKHNldHRpbmdzIHx8IHt9KS5jb21tZW50UHJlZml4XG4gICAgICApO1xuICAgICAgcXVlc3Rpb24udGl0bGUgPSB0aGlzLnF1ZXN0aW9uLnRpdGxlO1xuXG4gICAgICB0aGlzLl9mb290ZXJWaXN1YWxpemVyID0gdGhpcy5jcmVhdGVWaXN1YWxpemVyKHF1ZXN0aW9uKTtcbiAgICAgIHRoaXMuX2Zvb3RlclZpc3VhbGl6ZXIub25VcGRhdGUgPSAoKSA9PiB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mb290ZXJWaXN1YWxpemVyO1xuICB9XG5cbiAgZ2V0U2VyaWVzVmFsdWVzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VyaWVzVmFsdWVzIHx8IFtdO1xuICB9XG5cbiAgZ2V0U2VyaWVzTGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VyaWVzTGFiZWxzIHx8IHRoaXMuZ2V0U2VyaWVzVmFsdWVzKCk7XG4gIH1cblxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKCk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJUb29sYmFySXRlbShcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgY3JlYXRvcjogKHRvb2xiYXI/OiBIVE1MRGl2RWxlbWVudCkgPT4gSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy50b29sYmFySXRlbUNyZWF0b3JzW25hbWVdID0gY3JlYXRvcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZSB8fCBcInZpc3VhbGl6ZXJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhUHJvdmlkZXIuZmlsdGVyZWREYXRhO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBkYXRhUHJvdmlkZXIoKTogRGF0YVByb3ZpZGVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVByb3ZpZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdmlzdWFsaXplciBkYXRhLlxuICAgKi9cbiAgdXBkYXRlRGF0YShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGF0YVByb3ZpZGVyKSB7XG4gICAgICB0aGlzLmRhdGFQcm92aWRlci5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzRm9vdGVyKSB7XG4gICAgICB0aGlzLmZvb3RlclZpc3VhbGl6ZXIudXBkYXRlRGF0YShkYXRhKTtcbiAgICB9XG4gIH1cblxuICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcblxuICBpbnZva2VPblVwZGF0ZSgpIHtcbiAgICB0aGlzLm9uVXBkYXRlICYmIHRoaXMub25VcGRhdGUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKCEhdGhpcy5yZW5kZXJSZXN1bHQpIHtcbiAgICAgIHRoaXMuZGVzdHJveVRvb2xiYXIodGhpcy50b29sYmFyQ29udGFpbmVyKTtcbiAgICAgIHRoaXMudG9vbGJhckNvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZGVzdHJveUZvb3Rlcih0aGlzLmZvb3RlckNvbnRhaW5lcik7XG4gICAgICB0aGlzLmZvb3RlckNvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMucmVuZGVyUmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCEhdGhpcy5fZm9vdGVyVmlzdWFsaXplcikge1xuICAgICAgdGhpcy5fZm9vdGVyVmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9mb290ZXJWaXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZm9vdGVyVmlzdWFsaXplciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgT2JqZWN0LmtleXModGhpcy50b29sYmFySXRlbUNyZWF0b3JzIHx8IHt9KS5mb3JFYWNoKCh0b29sYmFySXRlbU5hbWUpID0+IHtcbiAgICAgIGxldCB0b29sYmFySXRlbSA9IHRoaXMudG9vbGJhckl0ZW1DcmVhdG9yc1t0b29sYmFySXRlbU5hbWVdKHRvb2xiYXIpO1xuICAgICAgaWYgKCEhdG9vbGJhckl0ZW0pIHtcbiAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZCh0b29sYmFySXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveVRvb2xiYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlclRvb2xiYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLnNob3dIZWFkZXIpIHtcbiAgICAgIGNvbnN0IHRvb2xiYXIgPSA8SFRNTERpdkVsZW1lbnQ+KFxuICAgICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2EtdG9vbGJhclwiKVxuICAgICAgKTtcbiAgICAgIHRoaXMuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2xiYXIpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKCEhdGhpcy5vcHRpb25zICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZGVzdHJveUNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5vcHRpb25zLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lciwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoISF0aGlzLm9wdGlvbnMgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5yZW5kZXJDb250ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5yZW5kZXJDb250ZW50KGNvbnRhaW5lciwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlRoaXMgcXVlc3Rpb24gdHlwZSBpcyBub3QgdmlzdWFsaXplZCB5ZXRcIjtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUZvb3Rlcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyRm9vdGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAodGhpcy5oYXNGb290ZXIpIHtcbiAgICAgIGNvbnN0IGZvb3RlclRpdGxlRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaDRcIixcbiAgICAgICAgXCJzYS12aXN1YWxpemVyX19mb290ZXItdGl0bGVcIixcbiAgICAgICAgeyBpbm5lclRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvdGhlckNvbW1lbnRUaXRsZVwiKSB9XG4gICAgICApO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRpdGxlRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGZvb3RlckNvbnRlbnRFbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJzYS12aXN1YWxpemVyX19mb290ZXItY29udGVudFwiXG4gICAgICApO1xuICAgICAgZm9vdGVyQ29udGVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFZpc3VhbGl6ZXJCYXNlLm90aGVyQ29tbWVudENvbGxhcHNlZFxuICAgICAgICA/IFwibm9uZVwiXG4gICAgICAgIDogXCJibG9ja1wiO1xuXG4gICAgICBjb25zdCB2aXNpYmlsaXR5QnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlQnV0dG9uKCgpID0+IHtcbiAgICAgICAgaWYgKGZvb3RlckNvbnRlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgZm9vdGVyQ29udGVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICB2aXNpYmlsaXR5QnV0dG9uLmlubmVyVGV4dCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQnV0dG9uXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvb3RlckNvbnRlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICB2aXNpYmlsaXR5QnV0dG9uLmlubmVyVGV4dCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXG4gICAgICAgICAgICBWaXN1YWxpemVyQmFzZS5vdGhlckNvbW1lbnRDb2xsYXBzZWQgPyBcInNob3dCdXR0b25cIiA6IFwiaGlkZUJ1dHRvblwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvb3RlclZpc3VhbGl6ZXIuaW52b2tlT25VcGRhdGUoKTtcbiAgICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93QnV0dG9uXCIpIC8qLCBcInNhLXRvb2xiYXJfX2J1dHRvbi0tcmlnaHRcIiovKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5QnV0dG9uKTtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnRFbGVtZW50KTtcblxuICAgICAgdGhpcy5mb290ZXJWaXN1YWxpemVyLnJlbmRlcihmb290ZXJDb250ZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB0YXJnZXRFbGVtZW50O1xuXG4gICAgdGhpcy50b29sYmFyQ29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInNhLXZpc3VhbGl6ZXJfX3Rvb2xiYXJcIlxuICAgICk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyVG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuXG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInNhLXZpc3VhbGl6ZXJfX2NvbnRlbnRcIlxuICAgICk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgdGhpcy5mb290ZXJDb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdmlzdWFsaXplcl9fZm9vdGVyXCJcbiAgICApO1xuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5mb290ZXJDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyRm9vdGVyKHRoaXMuZm9vdGVyQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRyYXdzIHZpc3VhbGl6ZXIgYW5kIGFsbCBpbm5lciBjb250ZW50LlxuICAgKi9cbiAgcHVibGljIHJlZnJlc2goKSB7XG4gICAgaWYgKCEhdGhpcy5jb250ZW50Q29udGFpbmVyKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghIXRoaXMuZm9vdGVyQ29udGFpbmVyKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXN0cm95Rm9vdGVyKHRoaXMuZm9vdGVyQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGb290ZXIodGhpcy5mb290ZXJDb250YWluZXIpO1xuICAgICAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuICB9XG5cbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZjdmN2Y3XCI7XG5cbiAgc3RhdGljIGN1c3RvbUNvbG9yczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0aWMgY29sb3JzID0gW1xuICAgIFwiIzg2ZTFmYlwiLFxuICAgIFwiIzM5OTlmYlwiLFxuICAgIFwiI2ZmNjc3MVwiLFxuICAgIFwiIzFlYjQ5NlwiLFxuICAgIFwiI2ZmYzE1MlwiLFxuICAgIFwiI2FiYTFmZlwiLFxuICAgIFwiIzdkOGRhNVwiLFxuICAgIFwiIzRlYzQ2Y1wiLFxuICAgIFwiI2NmMzdhNlwiLFxuICAgIFwiIzRlNjE5OFwiLFxuICBdO1xuXG4gIGdldENvbG9ycyhjb3VudCA9IDEwKSB7XG4gICAgY29uc3QgY29sb3JzID1cbiAgICAgIEFycmF5LmlzQXJyYXkoVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzKSAmJlxuICAgICAgVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnNcbiAgICAgICAgOiBWaXN1YWxpemVyQmFzZS5jb2xvcnM7XG5cbiAgICBsZXQgbWFueUNvbG9yczogYW55ID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIG1hbnlDb2xvcnMgPSBtYW55Q29sb3JzLmNvbmNhdChjb2xvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBtYW55Q29sb3JzO1xuICB9XG5cbiAgZ2V0IHNob3dIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dIZWFkZXI7XG4gIH1cbiAgc2V0IHNob3dIZWFkZXIobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAobmV3VmFsdWUgIT0gdGhpcy5fc2hvd0hlYWRlcikge1xuICAgICAgdGhpcy5fc2hvd0hlYWRlciA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKCEhdGhpcy50b29sYmFyQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveVRvb2xiYXIodGhpcy50b29sYmFyQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb29sYmFyKHRoaXMudG9vbGJhckNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmRhdGFQcm92aWRlci5nZXREYXRhKHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXplckZhY3Rvcnkge1xuICAvKipcbiAgICogQ3JlYXRlIHZpc3VhbGl6ZXIgYnkgcXVlc3Rpb24uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVZpc3VhbGl6ZXIoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfVxuICApOiBWaXN1YWxpemVyQmFzZSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInRleHRcIiAmJiBxdWVzdGlvbi5pbnB1dFR5cGUpIHtcbiAgICAgIHR5cGUgPSBxdWVzdGlvbi5pbnB1dFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgdmFyIGNyZWF0b3JzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIuZ2V0VmlzdWFsaXplcnNCeVR5cGUodHlwZSk7XG4gICAgdmFyIHZpc3VhbGl6ZXJzID0gY3JlYXRvcnMubWFwKFxuICAgICAgKGNyZWF0b3IpID0+IG5ldyBjcmVhdG9yKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKVxuICAgICk7XG4gICAgaWYgKHZpc3VhbGl6ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGFsdGVybmF0aXZlc1Zpc3VhbGl6ZXJDb25zdHJ1Y3RvciA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLmdldEFsdGVybmF0aXZlc1Zpc3VhbGl6ZXIoKTtcbiAgICAgIGxldCB2aXN1YWxpemVyID0gbmV3IGFsdGVybmF0aXZlc1Zpc3VhbGl6ZXJDb25zdHJ1Y3RvcihcbiAgICAgICAgdmlzdWFsaXplcnMsXG4gICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICBkYXRhLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIHZpc3VhbGl6ZXI7XG4gICAgfVxuICAgIHJldHVybiB2aXN1YWxpemVyc1swXTtcbiAgfVxufVxuIiwiZXhwb3J0IHZhciBzdG9wV29yZHMgPSBuZXcgQXJyYXkoXG4gIFwiYVwiLFxuICBcImFib3V0XCIsXG4gIFwiYWJvdmVcIixcbiAgXCJhY3Jvc3NcIixcbiAgXCJhZnRlclwiLFxuICBcImFnYWluXCIsXG4gIFwiYWdhaW5zdFwiLFxuICBcImFsbFwiLFxuICBcImFsbW9zdFwiLFxuICBcImFsb25lXCIsXG4gIFwiYWxvbmdcIixcbiAgXCJhbHJlYWR5XCIsXG4gIFwiYWxzb1wiLFxuICBcImFsdGhvdWdoXCIsXG4gIFwiYWx3YXlzXCIsXG4gIFwiYW1vbmdcIixcbiAgXCJhblwiLFxuICBcImFuZFwiLFxuICBcImFub3RoZXJcIixcbiAgXCJhbnlcIixcbiAgXCJhbnlib2R5XCIsXG4gIFwiYW55b25lXCIsXG4gIFwiYW55dGhpbmdcIixcbiAgXCJhbnl3aGVyZVwiLFxuICBcImFyZVwiLFxuICBcImFyZWFcIixcbiAgXCJhcmVhc1wiLFxuICBcImFyb3VuZFwiLFxuICBcImFzXCIsXG4gIFwiYXNrXCIsXG4gIFwiYXNrZWRcIixcbiAgXCJhc2tpbmdcIixcbiAgXCJhc2tzXCIsXG4gIFwiYXRcIixcbiAgXCJhd2F5XCIsXG4gIFwiYlwiLFxuICBcImJhY2tcIixcbiAgXCJiYWNrZWRcIixcbiAgXCJiYWNraW5nXCIsXG4gIFwiYmFja3NcIixcbiAgXCJiZVwiLFxuICBcImJlY2FtZVwiLFxuICBcImJlY2F1c2VcIixcbiAgXCJiZWNvbWVcIixcbiAgXCJiZWNvbWVzXCIsXG4gIFwiYmVlblwiLFxuICBcImJlZm9yZVwiLFxuICBcImJlZ2FuXCIsXG4gIFwiYmVoaW5kXCIsXG4gIFwiYmVpbmdcIixcbiAgXCJiZWluZ3NcIixcbiAgXCJiZXN0XCIsXG4gIFwiYmV0dGVyXCIsXG4gIFwiYmV0d2VlblwiLFxuICBcImJpZ1wiLFxuICBcImJvdGhcIixcbiAgXCJidXRcIixcbiAgXCJieVwiLFxuICBcImNcIixcbiAgXCJjYW1lXCIsXG4gIFwiY2FuXCIsXG4gIFwiY2Fubm90XCIsXG4gIFwiY2FzZVwiLFxuICBcImNhc2VzXCIsXG4gIFwiY2VydGFpblwiLFxuICBcImNlcnRhaW5seVwiLFxuICBcImNsZWFyXCIsXG4gIFwiY2xlYXJseVwiLFxuICBcImNvbWVcIixcbiAgXCJjb3VsZFwiLFxuICBcImRcIixcbiAgXCJkaWRcIixcbiAgXCJkaWZmZXJcIixcbiAgXCJkaWZmZXJlbnRcIixcbiAgXCJkaWZmZXJlbnRseVwiLFxuICBcImRvXCIsXG4gIFwiZG9lc1wiLFxuICBcImRvbmVcIixcbiAgXCJkb3duXCIsXG4gIFwiZG93blwiLFxuICBcImRvd25lZFwiLFxuICBcImRvd25pbmdcIixcbiAgXCJkb3duc1wiLFxuICBcImR1cmluZ1wiLFxuICBcImVcIixcbiAgXCJlYWNoXCIsXG4gIFwiZWFybHlcIixcbiAgXCJlaXRoZXJcIixcbiAgXCJlbmRcIixcbiAgXCJlbmRlZFwiLFxuICBcImVuZGluZ1wiLFxuICBcImVuZHNcIixcbiAgXCJlbm91Z2hcIixcbiAgXCJldmVuXCIsXG4gIFwiZXZlbmx5XCIsXG4gIFwiZXZlclwiLFxuICBcImV2ZXJ5XCIsXG4gIFwiZXZlcnlib2R5XCIsXG4gIFwiZXZlcnlvbmVcIixcbiAgXCJldmVyeXRoaW5nXCIsXG4gIFwiZXZlcnl3aGVyZVwiLFxuICBcImZcIixcbiAgXCJmYWNlXCIsXG4gIFwiZmFjZXNcIixcbiAgXCJmYWN0XCIsXG4gIFwiZmFjdHNcIixcbiAgXCJmYXJcIixcbiAgXCJmZWx0XCIsXG4gIFwiZmV3XCIsXG4gIFwiZmluZFwiLFxuICBcImZpbmRzXCIsXG4gIFwiZmlyc3RcIixcbiAgXCJmb3JcIixcbiAgXCJmb3VyXCIsXG4gIFwiZnJvbVwiLFxuICBcImZ1bGxcIixcbiAgXCJmdWxseVwiLFxuICBcImZ1cnRoZXJcIixcbiAgXCJmdXJ0aGVyZWRcIixcbiAgXCJmdXJ0aGVyaW5nXCIsXG4gIFwiZnVydGhlcnNcIixcbiAgXCJnXCIsXG4gIFwiZ2F2ZVwiLFxuICBcImdlbmVyYWxcIixcbiAgXCJnZW5lcmFsbHlcIixcbiAgXCJnZXRcIixcbiAgXCJnZXRzXCIsXG4gIFwiZ2l2ZVwiLFxuICBcImdpdmVuXCIsXG4gIFwiZ2l2ZXNcIixcbiAgXCJnb1wiLFxuICBcImdvaW5nXCIsXG4gIFwiZ29vZFwiLFxuICBcImdvb2RzXCIsXG4gIFwiZ290XCIsXG4gIFwiZ3JlYXRcIixcbiAgXCJncmVhdGVyXCIsXG4gIFwiZ3JlYXRlc3RcIixcbiAgXCJncm91cFwiLFxuICBcImdyb3VwZWRcIixcbiAgXCJncm91cGluZ1wiLFxuICBcImdyb3Vwc1wiLFxuICBcImhcIixcbiAgXCJoYWRcIixcbiAgXCJoYXNcIixcbiAgXCJoYXZlXCIsXG4gIFwiaGF2aW5nXCIsXG4gIFwiaGVcIixcbiAgXCJoZXJcIixcbiAgXCJoZXJlXCIsXG4gIFwiaGVyc2VsZlwiLFxuICBcImhpZ2hcIixcbiAgXCJoaWdoXCIsXG4gIFwiaGlnaFwiLFxuICBcImhpZ2hlclwiLFxuICBcImhpZ2hlc3RcIixcbiAgXCJoaW1cIixcbiAgXCJoaW1zZWxmXCIsXG4gIFwiaGlzXCIsXG4gIFwiaG93XCIsXG4gIFwiaG93ZXZlclwiLFxuICBcImlcIixcbiAgXCJpZlwiLFxuICBcImltcG9ydGFudFwiLFxuICBcImluXCIsXG4gIFwiaW50ZXJlc3RcIixcbiAgXCJpbnRlcmVzdGVkXCIsXG4gIFwiaW50ZXJlc3RpbmdcIixcbiAgXCJpbnRlcmVzdHNcIixcbiAgXCJpbnRvXCIsXG4gIFwiaXNcIixcbiAgXCJpdFwiLFxuICBcIml0c1wiLFxuICBcIml0c2VsZlwiLFxuICBcImpcIixcbiAgXCJqdXN0XCIsXG4gIFwia1wiLFxuICBcImtlZXBcIixcbiAgXCJrZWVwc1wiLFxuICBcImtpbmRcIixcbiAgXCJrbmV3XCIsXG4gIFwia25vd1wiLFxuICBcImtub3duXCIsXG4gIFwia25vd3NcIixcbiAgXCJsXCIsXG4gIFwibGFyZ2VcIixcbiAgXCJsYXJnZWx5XCIsXG4gIFwibGFzdFwiLFxuICBcImxhdGVyXCIsXG4gIFwibGF0ZXN0XCIsXG4gIFwibGVhc3RcIixcbiAgXCJsZXNzXCIsXG4gIFwibGV0XCIsXG4gIFwibGV0c1wiLFxuICBcImxpa2VcIixcbiAgXCJsaWtlbHlcIixcbiAgXCJsb25nXCIsXG4gIFwibG9uZ2VyXCIsXG4gIFwibG9uZ2VzdFwiLFxuICBcIm1cIixcbiAgXCJtYWRlXCIsXG4gIFwibWFrZVwiLFxuICBcIm1ha2luZ1wiLFxuICBcIm1hblwiLFxuICBcIm1hbnlcIixcbiAgXCJtYXlcIixcbiAgXCJtZVwiLFxuICBcIm1lbWJlclwiLFxuICBcIm1lbWJlcnNcIixcbiAgXCJtZW5cIixcbiAgXCJtaWdodFwiLFxuICBcIm1vcmVcIixcbiAgXCJtb3N0XCIsXG4gIFwibW9zdGx5XCIsXG4gIFwibXJcIixcbiAgXCJtcnNcIixcbiAgXCJtdWNoXCIsXG4gIFwibXVzdFwiLFxuICBcIm15XCIsXG4gIFwibXlzZWxmXCIsXG4gIFwiblwiLFxuICBcIm5lY2Vzc2FyeVwiLFxuICBcIm5lZWRcIixcbiAgXCJuZWVkZWRcIixcbiAgXCJuZWVkaW5nXCIsXG4gIFwibmVlZHNcIixcbiAgXCJuZXZlclwiLFxuICBcIm5ld1wiLFxuICBcIm5ld1wiLFxuICBcIm5ld2VyXCIsXG4gIFwibmV3ZXN0XCIsXG4gIFwibmV4dFwiLFxuICBcIm5vXCIsXG4gIFwibm9ib2R5XCIsXG4gIFwibm9uXCIsXG4gIFwibm9vbmVcIixcbiAgXCJub3RcIixcbiAgXCJub3RoaW5nXCIsXG4gIFwibm93XCIsXG4gIFwibm93aGVyZVwiLFxuICBcIm51bWJlclwiLFxuICBcIm51bWJlcnNcIixcbiAgXCJvXCIsXG4gIFwib2ZcIixcbiAgXCJvZmZcIixcbiAgXCJvZnRlblwiLFxuICBcIm9sZFwiLFxuICBcIm9sZGVyXCIsXG4gIFwib2xkZXN0XCIsXG4gIFwib25cIixcbiAgXCJvbmNlXCIsXG4gIFwib25lXCIsXG4gIFwib25seVwiLFxuICBcIm9wZW5cIixcbiAgXCJvcGVuZWRcIixcbiAgXCJvcGVuaW5nXCIsXG4gIFwib3BlbnNcIixcbiAgXCJvclwiLFxuICBcIm9yZGVyXCIsXG4gIFwib3JkZXJlZFwiLFxuICBcIm9yZGVyaW5nXCIsXG4gIFwib3JkZXJzXCIsXG4gIFwib3RoZXJcIixcbiAgXCJvdGhlcnNcIixcbiAgXCJvdXJcIixcbiAgXCJvdXRcIixcbiAgXCJvdmVyXCIsXG4gIFwicFwiLFxuICBcInBhcnRcIixcbiAgXCJwYXJ0ZWRcIixcbiAgXCJwYXJ0aW5nXCIsXG4gIFwicGFydHNcIixcbiAgXCJwZXJcIixcbiAgXCJwZXJoYXBzXCIsXG4gIFwicGxhY2VcIixcbiAgXCJwbGFjZXNcIixcbiAgXCJwb2ludFwiLFxuICBcInBvaW50ZWRcIixcbiAgXCJwb2ludGluZ1wiLFxuICBcInBvaW50c1wiLFxuICBcInBvc3NpYmxlXCIsXG4gIFwicHJlc2VudFwiLFxuICBcInByZXNlbnRlZFwiLFxuICBcInByZXNlbnRpbmdcIixcbiAgXCJwcmVzZW50c1wiLFxuICBcInByb2JsZW1cIixcbiAgXCJwcm9ibGVtc1wiLFxuICBcInB1dFwiLFxuICBcInB1dHNcIixcbiAgXCJxXCIsXG4gIFwicXVpdGVcIixcbiAgXCJyXCIsXG4gIFwicmF0aGVyXCIsXG4gIFwicmVhbGx5XCIsXG4gIFwicmlnaHRcIixcbiAgXCJyaWdodFwiLFxuICBcInJvb21cIixcbiAgXCJyb29tc1wiLFxuICBcInNcIixcbiAgXCJzYWlkXCIsXG4gIFwic2FtZVwiLFxuICBcInNhd1wiLFxuICBcInNheVwiLFxuICBcInNheXNcIixcbiAgXCJzZWNvbmRcIixcbiAgXCJzZWNvbmRzXCIsXG4gIFwic2VlXCIsXG4gIFwic2VlbVwiLFxuICBcInNlZW1lZFwiLFxuICBcInNlZW1pbmdcIixcbiAgXCJzZWVtc1wiLFxuICBcInNlZXNcIixcbiAgXCJzZXZlcmFsXCIsXG4gIFwic2hhbGxcIixcbiAgXCJzaGVcIixcbiAgXCJzaG91bGRcIixcbiAgXCJzaG93XCIsXG4gIFwic2hvd2VkXCIsXG4gIFwic2hvd2luZ1wiLFxuICBcInNob3dzXCIsXG4gIFwic2lkZVwiLFxuICBcInNpZGVzXCIsXG4gIFwic2luY2VcIixcbiAgXCJzbWFsbFwiLFxuICBcInNtYWxsZXJcIixcbiAgXCJzbWFsbGVzdFwiLFxuICBcInNvXCIsXG4gIFwic29tZVwiLFxuICBcInNvbWVib2R5XCIsXG4gIFwic29tZW9uZVwiLFxuICBcInNvbWV0aGluZ1wiLFxuICBcInNvbWV3aGVyZVwiLFxuICBcInN0YXRlXCIsXG4gIFwic3RhdGVzXCIsXG4gIFwic3RpbGxcIixcbiAgXCJzdGlsbFwiLFxuICBcInN1Y2hcIixcbiAgXCJzdXJlXCIsXG4gIFwidFwiLFxuICBcInRha2VcIixcbiAgXCJ0YWtlblwiLFxuICBcInRoYW5cIixcbiAgXCJ0aGF0XCIsXG4gIFwidGhlXCIsXG4gIFwidGhlaXJcIixcbiAgXCJ0aGVtXCIsXG4gIFwidGhlblwiLFxuICBcInRoZXJlXCIsXG4gIFwidGhlcmVmb3JlXCIsXG4gIFwidGhlc2VcIixcbiAgXCJ0aGV5XCIsXG4gIFwidGhpbmdcIixcbiAgXCJ0aGluZ3NcIixcbiAgXCJ0aGlua1wiLFxuICBcInRoaW5rc1wiLFxuICBcInRoaXNcIixcbiAgXCJ0aG9zZVwiLFxuICBcInRob3VnaFwiLFxuICBcInRob3VnaHRcIixcbiAgXCJ0aG91Z2h0c1wiLFxuICBcInRocmVlXCIsXG4gIFwidGhyb3VnaFwiLFxuICBcInRodXNcIixcbiAgXCJ0b1wiLFxuICBcInRvZGF5XCIsXG4gIFwidG9nZXRoZXJcIixcbiAgXCJ0b29cIixcbiAgXCJ0b29rXCIsXG4gIFwidG93YXJkXCIsXG4gIFwidHVyblwiLFxuICBcInR1cm5lZFwiLFxuICBcInR1cm5pbmdcIixcbiAgXCJ0dXJuc1wiLFxuICBcInR3b1wiLFxuICBcInVcIixcbiAgXCJ1bmRlclwiLFxuICBcInVudGlsXCIsXG4gIFwidXBcIixcbiAgXCJ1cG9uXCIsXG4gIFwidXNcIixcbiAgXCJ1c2VcIixcbiAgXCJ1c2VkXCIsXG4gIFwidXNlc1wiLFxuICBcInZcIixcbiAgXCJ2ZXJ5XCIsXG4gIFwid1wiLFxuICBcIndhbnRcIixcbiAgXCJ3YW50ZWRcIixcbiAgXCJ3YW50aW5nXCIsXG4gIFwid2FudHNcIixcbiAgXCJ3YXNcIixcbiAgXCJ3YXlcIixcbiAgXCJ3YXlzXCIsXG4gIFwid2VcIixcbiAgXCJ3ZWxsXCIsXG4gIFwid2VsbHNcIixcbiAgXCJ3ZW50XCIsXG4gIFwid2VyZVwiLFxuICBcIndoYXRcIixcbiAgXCJ3aGVuXCIsXG4gIFwid2hlcmVcIixcbiAgXCJ3aGV0aGVyXCIsXG4gIFwid2hpY2hcIixcbiAgXCJ3aGlsZVwiLFxuICBcIndob1wiLFxuICBcIndob2xlXCIsXG4gIFwid2hvc2VcIixcbiAgXCJ3aHlcIixcbiAgXCJ3aWxsXCIsXG4gIFwid2l0aFwiLFxuICBcIndpdGhpblwiLFxuICBcIndpdGhvdXRcIixcbiAgXCJ3b3JrXCIsXG4gIFwid29ya2VkXCIsXG4gIFwid29ya2luZ1wiLFxuICBcIndvcmtzXCIsXG4gIFwid291bGRcIixcbiAgXCJ4XCIsXG4gIFwieVwiLFxuICBcInllYXJcIixcbiAgXCJ5ZWFyc1wiLFxuICBcInlldFwiLFxuICBcInlvdVwiLFxuICBcInlvdW5nXCIsXG4gIFwieW91bmdlclwiLFxuICBcInlvdW5nZXN0XCIsXG4gIFwieW91clwiLFxuICBcInlvdXJzXCIsXG4gIFwielwiXG4pO1xuIiwiaW1wb3J0IHsgc3RvcFdvcmRzIH0gZnJvbSBcIi4vZW5nbGlzaFwiO1xuXG52YXIgc3RvcFdvcmRzRGljdGlvbmFyeTogeyBbaW5kZXg6IHN0cmluZ106IEFycmF5PHN0cmluZz4gfSA9IHt9O1xuc3RvcFdvcmRzRGljdGlvbmFyeVtcImVuXCJdID0gc3RvcFdvcmRzO1xuXG5leHBvcnQgdmFyIHRleHRIZWxwZXIgPSB7XG4gIGdldFN0b3BXb3JkczogKGxvY2FsZTogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIHJldHVybiBzdG9wV29yZHNEaWN0aW9uYXJ5W2xvY2FsZSB8fCBcImVuXCJdIHx8IFtdO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4uL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgdGV4dEhlbHBlciB9IGZyb20gXCIuL3N0b3B3b3Jkcy9pbmRleFwiO1xuaW1wb3J0IFdvcmRDbG91ZExpYiBmcm9tIFwid29yZGNsb3VkXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgV29yZENsb3VkQWRhcHRlciB7XG4gIHByaXZhdGUgX3dvcmRjbG91ZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IFdvcmRDbG91ZCkge31cblxuICBwdWJsaWMgZ2V0IHdvcmRjbG91ZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd29yZGNsb3VkO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShub2RlOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm1vZGVsLmdldERhdGEoKTtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLm1vZGVsLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGNhbnZhc05vZGUgPSA8SFRNTENhbnZhc0VsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCBcIlwiKVxuICAgICk7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IDxIVE1MRWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwicFwiLCBcIlwiLCB7XG4gICAgICBpbm5lckhUTUw6IFwiVGhlcmUgYXJlIG5vIHJlc3VsdHMgeWV0XCIsXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChjYW52YXNOb2RlKTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGxpc3Q6IGRhdGEsXG4gICAgICB3ZWlnaHRGYWN0b3I6IDIwLFxuICAgICAgZm9udEZhbWlseTogXCJTZWdvZSBVSSBCb2xkLCBzYW5zLXNlcmlmXCIsXG4gICAgICBjb2xvcjogKHdvcmQ6IHN0cmluZywgd2VpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICAgIH0sXG4gICAgICByb3RhdGVSYXRpbzogMC41LFxuICAgICAgcm90YXRpb25TdGVwczogMixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5tb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBjbGljazogZnVuY3Rpb24gKGl0ZW06IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtWzBdICsgXCI6IFwiICsgaXRlbVsxXSk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLl93b3JkY2xvdWQgPSBXb3JkQ2xvdWRMaWIoY2FudmFzTm9kZSwgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5fd29yZGNsb3VkO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl93b3JkY2xvdWQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmRDbG91ZCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJpdmF0ZSBfd29yZGNsb3VkQWRhcHRlcjogV29yZENsb3VkQWRhcHRlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0LFxuICAgIG5hbWU/OiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMsIG5hbWUgfHwgXCJ3b3JkY2xvdWRcIik7XG4gICAgdGhpcy5fd29yZGNsb3VkQWRhcHRlciA9IG5ldyBXb3JkQ2xvdWRBZGFwdGVyKHRoaXMpO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBsZXQgcmVzdWx0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5cbiAgICBsZXQgc3RvcFdvcmRzID0gdGV4dEhlbHBlci5nZXRTdG9wV29yZHMoKTtcbiAgICBsZXQgc3RvcFRoZVdvcmQgPSAod29yZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoc3RvcFdvcmRzLmluZGV4T2Yod29yZCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdvcmQ7XG4gICAgfTtcblxuICAgIGxldCBwcm9jZXNzU3RyaW5nID0gKHJvdzogc3RyaW5nKSA9PiB7XG4gICAgICByb3cgPSBcIlwiICsgcm93O1xuICAgICAgaWYgKCEhcm93KSB7XG4gICAgICAgIHJvdy5zcGxpdChcIiBcIikuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgICAgIHdvcmQgPSBzdG9wVGhlV29yZCh3b3JkLnRvTG93ZXJDYXNlKCkgfHwgXCJcIik7XG4gICAgICAgICAgaWYgKCEhd29yZCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHRbd29yZF0pIHtcbiAgICAgICAgICAgICAgcmVzdWx0W3dvcmRdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdFt3b3JkXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbdGhpcy5xdWVzdGlvbi5uYW1lXTtcbiAgICAgIGlmICghIXJvd1ZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xuICAgICAgICAgIHJvd1ZhbHVlLmZvckVhY2gocHJvY2Vzc1N0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByb3dWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocm93VmFsdWUpLmZvckVhY2goKGtleSkgPT5cbiAgICAgICAgICAgICAgcHJvY2Vzc1N0cmluZyhyb3dWYWx1ZVtrZXldKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc1N0cmluZyhyb3dWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIFtrZXksIHJlc3VsdFtrZXldXTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fd29yZGNsb3VkQWRhcHRlci5kZXN0cm95KGNvbnRhaW5lcik7XG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl93b3JkY2xvdWRBZGFwdGVyLmNyZWF0ZShjb250YWluZXIpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl93b3JkY2xvdWRBZGFwdGVyLmRlc3Ryb3kodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwidGV4dFwiLCBXb3JkQ2xvdWQpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY29tbWVudFwiLCBXb3JkQ2xvdWQpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibXVsdGlwbGV0ZXh0XCIsIFdvcmRDbG91ZCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGxvdGx5X2pzX2Rpc3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd29yZGNsb3VkX187Il0sInNvdXJjZVJvb3QiOiIifQ==