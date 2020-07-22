/*!
 * surveyjs - SurveyJS Analytics library v1.7.23
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




var AlternativeVisualizersWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlternativeVisualizersWrapper, _super);
    function AlternativeVisualizersWrapper(visualizers, question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.visualizers = visualizers;
        if (!visualizers || visualizers.length < 2) {
            throw new Error("VisualizerArrayWrapper works with visualizers collection only.");
        }
        _this.registerToolbarItem("changeVisualizer", function () {
            return _utils_index__WEBPACK_IMPORTED_MODULE_3__["ToolbarHelper"].createSelector(_this.visualizers.map(function (visualizer) {
                return {
                    value: visualizer.name,
                    text: _localizationManager__WEBPACK_IMPORTED_MODULE_2__["localization"].getString("visualizer_" + visualizer.name)
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
        this.visualizer.render(this.visualizerContainer);
        this.invokeOnUpdate();
    };
    AlternativeVisualizersWrapper.prototype.update = function (data) {
        this.visualizer.update(data);
    };
    AlternativeVisualizersWrapper.prototype.destroy = function () {
        this.visualizer.destroy();
        _super.prototype.destroy.call(this);
    };
    AlternativeVisualizersWrapper.prototype.renderContent = function (container) {
        this.visualizerContainer = container;
        this.visualizer.render(this.visualizerContainer);
    };
    return AlternativeVisualizersWrapper;
}(_visualizerBase__WEBPACK_IMPORTED_MODULE_1__["VisualizerBase"]));



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
        return _super.call(this, question, data, options) || this;
    }
    Object.defineProperty(BooleanModel.prototype, "booleanQuestion", {
        get: function () {
            return this.question;
        },
        enumerable: true,
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
                : false
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
    BooleanModel.prototype.getData = function () {
        var _this = this;
        var values = this.getValues();
        var trueCount = 0;
        var falseCount = 0;
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            if (rowValue === values[0]) {
                trueCount++;
            }
            if (rowValue === values[1]) {
                falseCount++;
            }
        });
        return [[trueCount, falseCount]];
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

/***/ "./src/entries/summary.ts":
/*!********************************!*\
  !*** ./src/entries/summary.ts ***!
  \********************************/
/*! exports provided: localization, surveyStrings, VisualizerBase, VisualizationManager, VisualizationPanel, VisualizationPanelDynamic, VisualizationMatrixDynamic, VisualizationMatrixDropdown, PlotlyChartAdapter, SelectBasePlotly, PlotlyGaugeAdapter, GaugePlotly, PlotlyMatrixChartAdapter, MatrixPlotly, PlotlyBoolChartAdapter, BooleanPlotly, WordCloudAdapter, WordCloud, textHelper, TextTableAdapter, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });

/* harmony import */ var _localization_farsi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localization/farsi */ "./src/localization/farsi.ts");
/* harmony import */ var _localization_french__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localization/french */ "./src/localization/french.ts");
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visualizerBase */ "./src/visualizerBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return _visualizerBase__WEBPACK_IMPORTED_MODULE_3__["VisualizerBase"]; });

/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return _visualizationManager__WEBPACK_IMPORTED_MODULE_4__["VisualizationManager"]; });

/* harmony import */ var _visualizationPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../visualizationPanel */ "./src/visualizationPanel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return _visualizationPanel__WEBPACK_IMPORTED_MODULE_5__["VisualizationPanel"]; });

/* harmony import */ var _visualizationPanelDynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../visualizationPanelDynamic */ "./src/visualizationPanelDynamic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return _visualizationPanelDynamic__WEBPACK_IMPORTED_MODULE_6__["VisualizationPanelDynamic"]; });

/* harmony import */ var _visualizationMatrixDynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../visualizationMatrixDynamic */ "./src/visualizationMatrixDynamic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return _visualizationMatrixDynamic__WEBPACK_IMPORTED_MODULE_7__["VisualizationMatrixDynamic"]; });

/* harmony import */ var _visualizationMatrixDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../visualizationMatrixDropdown */ "./src/visualizationMatrixDropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDropdown", function() { return _visualizationMatrixDropdown__WEBPACK_IMPORTED_MODULE_8__["VisualizationMatrixDropdown"]; });

/* harmony import */ var _plotly_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../plotly/index */ "./src/plotly/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyChartAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_9__["PlotlyChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_9__["SelectBasePlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyGaugeAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_9__["PlotlyGaugeAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_9__["GaugePlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyMatrixChartAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_9__["PlotlyMatrixChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_9__["MatrixPlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyBoolChartAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_9__["PlotlyBoolChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_9__["BooleanPlotly"]; });

/* harmony import */ var _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wordcloud/wordcloud */ "./src/wordcloud/wordcloud.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordCloudAdapter", function() { return _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_10__["WordCloudAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_10__["WordCloud"]; });

/* harmony import */ var _wordcloud_stopwords_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wordcloud/stopwords/index */ "./src/wordcloud/stopwords/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return _wordcloud_stopwords_index__WEBPACK_IMPORTED_MODULE_11__["textHelper"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../text */ "./src/text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextTableAdapter", function() { return _text__WEBPACK_IMPORTED_MODULE_12__["TextTableAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_12__["Text"]; });


//localization














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
    showButton: "Show",
    resetFilter: "Reset Filter",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Other items and comments"
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
    function Matrix(question, data, options) {
        return _super.call(this, question, data, options) || this;
    }
    Matrix.prototype.valuesSource = function () {
        var question = this.question;
        return question.columns;
    };
    Matrix.prototype.getLabels = function () {
        var question = this.question;
        return question.rows.map(function (row) {
            return survey_core__WEBPACK_IMPORTED_MODULE_1__["ItemValue"].getTextOrHtmlByValue(question.rows, row.value);
        });
    };
    Matrix.prototype.getData = function () {
        var _this = this;
        var question = this.question;
        var datasets = this.valuesSource().map(function (choice) {
            return question.rows.map(function (v) { return 0; });
        });
        this.data.forEach(function (rowData) {
            var questionValue = rowData[_this.question.name];
            if (!!questionValue) {
                question.rows.forEach(function (row, index) {
                    _this.getValues().forEach(function (val, dsIndex) {
                        if (questionValue[row.value] == val) {
                            datasets[dsIndex][index]++;
                        }
                    });
                });
            }
        });
        return datasets;
    };
    return Matrix;
}(_selectBase__WEBPACK_IMPORTED_MODULE_2__["SelectBase"]));



/***/ }),

/***/ "./src/number.ts":
/*!***********************!*\
  !*** ./src/number.ts ***!
  \***********************/
/*! exports provided: Number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return Number; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizerBase */ "./src/visualizerBase.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/index */ "./src/utils/index.ts");




var Number = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Number, _super);
    function Number(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.toolbarChangeHandler = function (e) {
            if (_this.chartType !== e.target.value) {
                _this.chartType = e.target.value;
                _this.update(_this.data);
            }
        };
        return _this;
    }
    Number.prototype.update = function (data) {
        if (data !== undefined) {
            this._resultAverage = undefined;
        }
        _super.prototype.update.call(this, data);
        this.destroyContent(this.contentContainer);
        this.renderContent(this.contentContainer);
        this.invokeOnUpdate();
    };
    Number.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 1) {
            var selectWrapper = _utils_index__WEBPACK_IMPORTED_MODULE_3__["ToolbarHelper"].createSelector(this.chartTypes.map(function (chartType) {
                return {
                    value: chartType,
                    text: _localizationManager__WEBPACK_IMPORTED_MODULE_2__["localization"].getString("chartType_" + chartType),
                };
            }), function (option) { return _this.chartType === option.value; }, this.toolbarChangeHandler);
            toolbar.appendChild(selectWrapper);
        }
        _super.prototype.createToolbarItems.call(this, toolbar);
    };
    Number.prototype.destroy = function () {
        this.destroyContent(this.contentContainer);
        this._resultAverage = undefined;
        _super.prototype.destroy.call(this);
    };
    Number.prototype.generateText = function (maxValue, minValue, stepsCount) {
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
        if (!!Number.generateTextsCallback) {
            return Number.generateTextsCallback(this.question, maxValue, minValue, stepsCount, texts);
        }
        return texts;
    };
    Number.prototype.generateValues = function (maxValue, stepsCount) {
        var values = [];
        for (var i = 0; i < stepsCount; i++) {
            values.push(maxValue / stepsCount);
        }
        values.push(maxValue);
        return values;
    };
    Number.prototype.generateColors = function (maxValue, minValue, stepsCount) {
        var palette = this.getColors();
        var colors = [];
        for (var i = 0; i < stepsCount; i++) {
            colors.push(palette[i]);
        }
        colors.push("rgba(255, 255, 255, 0)");
        return colors;
    };
    Object.defineProperty(Number.prototype, "result", {
        get: function () {
            var _this = this;
            if (this._resultAverage === undefined) {
                var questionValues_1 = [];
                this.data.forEach(function (rowData) {
                    var questionValue = +rowData[_this.question.name];
                    if (!!questionValue) {
                        questionValues_1.push(questionValue);
                    }
                });
                this._resultAverage =
                    (questionValues_1 &&
                        questionValues_1.reduce(function (a, b) { return a + b; }, 0) / questionValues_1.length) ||
                        0;
                this._resultAverage = Math.ceil(this._resultAverage * 100) / 100;
            }
            return this._resultAverage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Number.prototype, "resultMax", {
        get: function () {
            var _this = this;
            if (this._resultMax === undefined) {
                this._resultMax = 0;
                this.data.forEach(function (rowData) {
                    var questionValue = +rowData[_this.question.name];
                    if (!!questionValue && _this._resultMax < questionValue) {
                        _this._resultMax = questionValue;
                    }
                });
            }
            return this._resultMax;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Number.prototype, "resultMin", {
        get: function () {
            var _this = this;
            if (this._resultMin === undefined) {
                this._resultMin = 0;
                this.data.forEach(function (rowData) {
                    var questionValue = +rowData[_this.question.name];
                    if (!!questionValue && _this._resultMin > questionValue) {
                        _this._resultMin = questionValue;
                    }
                });
            }
            return this._resultMin;
        },
        enumerable: true,
        configurable: true
    });
    Number.stepsCount = 5;
    Number.showAsPercentage = false;
    return Number;
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




var PlotlyBoolChartAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PlotlyBoolChartAdapter, _super);
    function PlotlyBoolChartAdapter(model) {
        return _super.call(this, model) || this;
    }
    PlotlyBoolChartAdapter.prototype.patchConfigParameters = function (chartNode, traces, layout, config) {
        var colors = this.model.getColors();
        var boolColors = [
            BooleanPlotly.trueColor || colors[0],
            BooleanPlotly.falseColor || colors[1]
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
        var chartNode = document.createElement("div");
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
/*! exports provided: PlotlyChartAdapter, SelectBasePlotly, PlotlyGaugeAdapter, GaugePlotly, PlotlyMatrixChartAdapter, MatrixPlotly, PlotlyBoolChartAdapter, BooleanPlotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectBase */ "./src/plotly/selectBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyChartAdapter", function() { return _selectBase__WEBPACK_IMPORTED_MODULE_0__["PlotlyChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return _selectBase__WEBPACK_IMPORTED_MODULE_0__["SelectBasePlotly"]; });

/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating */ "./src/plotly/rating.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyGaugeAdapter", function() { return _rating__WEBPACK_IMPORTED_MODULE_1__["PlotlyGaugeAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return _rating__WEBPACK_IMPORTED_MODULE_1__["GaugePlotly"]; });

/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "./src/plotly/matrix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyMatrixChartAdapter", function() { return _matrix__WEBPACK_IMPORTED_MODULE_2__["PlotlyMatrixChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return _matrix__WEBPACK_IMPORTED_MODULE_2__["MatrixPlotly"]; });

/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean */ "./src/plotly/boolean.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyBoolChartAdapter", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["PlotlyBoolChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["BooleanPlotly"]; });







/***/ }),

/***/ "./src/plotly/matrix.ts":
/*!******************************!*\
  !*** ./src/plotly/matrix.ts ***!
  \******************************/
/*! exports provided: PlotlyMatrixChartAdapter, MatrixPlotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotlyMatrixChartAdapter", function() { return PlotlyMatrixChartAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return MatrixPlotly; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matrix */ "./src/matrix.ts");
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectBase */ "./src/plotly/selectBase.ts");




var PlotlyMatrixChartAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PlotlyMatrixChartAdapter, _super);
    function PlotlyMatrixChartAdapter(model) {
        return _super.call(this, model) || this;
    }
    PlotlyMatrixChartAdapter.prototype.patchConfigParameters = function (chartNode, traces, layout, config) {
        var _this = this;
        var question = this.model.question;
        //var valueTitles = question.columns.map(column => column.text);
        layout.showlegend = true;
        if (this.model.chartType === "pie" || this.model.chartType === "doughnut") {
            layout.grid = { rows: 1, columns: traces.length };
        }
        else if (this.model.chartType === "stackedbar") {
            layout.height = undefined;
            layout.barmode = "stack";
        }
        else {
            layout.height = undefined;
        }
        question.columns.forEach(function (column, index) {
            if (_this.model.chartType === "pie" || _this.model.chartType === "doughnut") {
                traces[index].domain = { column: index };
            }
            else {
                traces[index].hoverinfo = "x+name";
                traces[index].marker.color = undefined;
                if (_this.model.chartType === "stackedbar") {
                    traces[index].type = "bar";
                    traces[index].name = column.text;
                    traces[index].width = 0.5 / traces.length;
                }
                else {
                    traces[index].name = column.text;
                    traces[index].width = 0.5 / traces.length;
                }
            }
        });
    };
    return PlotlyMatrixChartAdapter;
}(_selectBase__WEBPACK_IMPORTED_MODULE_3__["PlotlyChartAdapter"]));

var MatrixPlotly = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatrixPlotly, _super);
    function MatrixPlotly(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.chartTypes = MatrixPlotly.types;
        _this.chartType = _this.chartTypes[0];
        _this._chartAdapter = new PlotlyMatrixChartAdapter(_this);
        return _this;
    }
    MatrixPlotly.prototype.destroyContent = function (container) {
        this._chartAdapter.destroy(container.children[0]);
        _super.prototype.destroyContent.call(this, container);
    };
    MatrixPlotly.prototype.renderContent = function (container) {
        var chartNode = document.createElement("div");
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
        enumerable: true,
        configurable: true
    });
    PlotlyGaugeAdapter.prototype.create = function (chartNode) {
        var question = this.model.question;
        var maxValue;
        var minValue;
        if (question.getType() === "text") {
            maxValue = this.model.resultMax;
            minValue = this.model.resultMin;
        }
        else {
            var rateValues = question.visibleRateValues;
            maxValue = rateValues[rateValues.length - 1].value;
            minValue = rateValues[0].value;
        }
        var colors = this.model.generateColors(maxValue, minValue, GaugePlotly.stepsCount);
        var level = this.model.result;
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
        var chartNode = document.createElement("div");
        container.appendChild(chartNode);
        this._chartAdapter.create(chartNode);
    };
    GaugePlotly.types = ["gauge", "bullet"];
    return GaugePlotly;
}(_number__WEBPACK_IMPORTED_MODULE_1__["Number"]));

_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("number", GaugePlotly);
_visualizationManager__WEBPACK_IMPORTED_MODULE_2__["VisualizationManager"].registerVisualizer("rating", GaugePlotly);


/***/ }),

/***/ "./src/plotly/selectBase.ts":
/*!**********************************!*\
  !*** ./src/plotly/selectBase.ts ***!
  \**********************************/
/*! exports provided: PlotlyChartAdapter, SelectBasePlotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotlyChartAdapter", function() { return PlotlyChartAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return SelectBasePlotly; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _selectBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectBase */ "./src/selectBase.ts");
/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");




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
        enumerable: true,
        configurable: true
    });
    PlotlyChartAdapter.prototype.create = function (chartNode) {
        var _this = this;
        var datasets = this.model.getData();
        var labels = this.model.getLabels();
        var colors = this.model.getColors();
        var traces = [];
        if (this.model.orderByAnsweres == "asc" || this.model.orderByAnsweres == "desc") {
            var dict = _utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].sortDictionary(_utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].zipArrays(labels, colors), datasets[0], this.model.orderByAnsweres == "desc");
            var labelsAndColors = _utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].unzipArrays(dict.keys);
            labels = labelsAndColors.first;
            colors = labelsAndColors.second;
            datasets[0] = dict.values;
        }
        var traceConfig = {
            type: this.model.chartType,
            y: labels.map(function (l) {
                if (l.length > 30) {
                    return l.substring(0, 27) + "...";
                }
                return l;
            }),
            text: labels,
            hoverinfo: "x+y",
            orientation: "h",
            mode: "markers",
            width: 0.5,
            marker: {}
        };
        if (this.model.chartType === "pie" || this.model.chartType === "doughnut") {
            traceConfig.hoverinfo = "text+value+percent";
            traceConfig.marker.colors = colors;
            traceConfig.textposition = "inside";
        }
        else if (this.model.chartType === "bar") {
            traceConfig.marker.color = colors;
        }
        if (this.model.chartType === "doughnut") {
            traceConfig.type = "pie";
            traceConfig.hole = 0.4;
        }
        if (datasets.length === 1) {
            traceConfig.marker.symbol = "circle";
            traceConfig.marker.size = 16;
        }
        datasets.forEach(function (dataset) {
            if (_this.model.chartType === "pie" || _this.model.chartType === "doughnut") {
                traces.push(Object.assign({}, traceConfig, {
                    values: dataset,
                    labels: labels
                }));
            }
            else {
                traces.push(Object.assign({}, traceConfig, { x: dataset }));
            }
        });
        var height = this.model.chartType === "pie" || this.model.chartType === "doughnut"
            ? labels.length < 10
                ? labels.length * 50 + 100
                : 550
            : (labels.length + (labels.length + 1) * 0.5) * 20;
        var layout = {
            font: {
                family: "Segoe UI, sans-serif",
                size: 14,
                weight: "normal",
                color: "#404040"
            },
            height: height,
            margin: {
                t: 0,
                b: 0,
                r: 10
            },
            colorway: colors,
            hovermode: "closest",
            yaxis: {
                automargin: true,
                type: "category",
                ticklen: 5,
                tickcolor: "transparent"
            },
            xaxis: {
                rangemode: "nonnegative",
                automargin: true
            },
            plot_bgcolor: this.model.backgroundColor,
            paper_bgcolor: this.model.backgroundColor,
            showlegend: false
        };
        var config = {
            displaylogo: false,
            responsive: true
        };
        if (SelectBasePlotly.displayModeBar !== undefined) {
            config.displayModeBar = SelectBasePlotly.displayModeBar;
        }
        this.patchConfigParameters(chartNode, traces, layout, config);
        var plot = Plotly.newPlot(chartNode, traces, layout, config);
        chartNode["on"]("plotly_click", function (data) {
            if (data.points.length > 0 && _this.model.onDataItemSelected) {
                var itemText = data.points[0].text;
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
        var chartNode = document.createElement("div");
        container.appendChild(chartNode);
        this._chartAdapter.create(chartNode);
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
/* harmony import */ var _visualizerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visualizerFactory */ "./src/visualizerFactory.ts");






var SelectBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectBase, _super);
    function SelectBase(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.selectedItem = undefined;
        _this.choicesOrder = undefined;
        _this.orderByAnsweres = "default";
        _this.registerToolbarItem("changeChartType", function () {
            if (_this.chartTypes.length > 1) {
                return _utils_index__WEBPACK_IMPORTED_MODULE_4__["ToolbarHelper"].createSelector(_this.chartTypes.map(function (chartType) {
                    return {
                        value: chartType,
                        text: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("chartType_" + chartType)
                    };
                }), function (option) { return _this.chartType === option.value; }, function (e) {
                    _this.setChartType(e.target.value);
                    _this.onChartTypeChanged();
                });
            }
            return null;
        });
        _this.registerToolbarItem("changeChoicesOrder", function () {
            if (_this.chartTypes.indexOf("bar") !== -1) {
                _this.choicesOrder = _utils_index__WEBPACK_IMPORTED_MODULE_4__["ToolbarHelper"].createSelector([
                    { text: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("defaultOrder"), value: "default" },
                    { text: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("ascOrder"), value: "asc" },
                    { text: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("descOrder"), value: "desc" }
                ], function (option) { return false; }, function (e) {
                    _this.setLabelsOrder(e.target.value);
                    _this.update(_this.data);
                });
                _this.updateOrderSelector();
            }
            return _this.choicesOrder;
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
    SelectBase.prototype.onChartTypeChanged = function () {
        this.setLabelsOrder("default");
        this.updateOrderSelector();
    };
    SelectBase.prototype.setChartType = function (chartType) {
        if (this.chartTypes.indexOf(chartType) !== -1 &&
            this.chartType !== chartType) {
            this.chartType = chartType;
            this.destroyContent(this.contentContainer);
            this.renderContent(this.contentContainer);
            this.invokeOnUpdate();
        }
    };
    SelectBase.prototype.getSelectedItemByText = function (itemText) {
        return this.question.choices.filter(function (choice) { return choice.text === itemText; })[0];
    };
    SelectBase.prototype.setSelection = function (item) {
        this.selectedItem = item;
        this.onDataItemSelected((item && item.value) || undefined, (item && item.text) || "");
    };
    Object.defineProperty(SelectBase.prototype, "selection", {
        get: function () {
            return this.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    SelectBase.prototype.setLabelsOrder = function (value) {
        this.orderByAnsweres = value;
    };
    SelectBase.prototype.update = function (data) {
        _super.prototype.update.call(this, data);
        this.destroyContent(this.contentContainer);
        this.renderContent(this.contentContainer);
        this.destroyFooter(this.footerContainer);
        this.renderFooter(this.footerContainer);
        this.invokeOnUpdate();
    };
    SelectBase.prototype.renderFooter = function (container) {
        var _this = this;
        container.innerHTML = "";
        if (this.question.hasComment || this.question.hasOther) {
            var footerTitleElement = document.createElement("h4");
            footerTitleElement.className = "sa-visualizer__footer-title";
            footerTitleElement.innerText = _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("otherCommentTitle");
            container.appendChild(footerTitleElement);
            var footerContentElement_1 = document.createElement("div");
            footerContentElement_1.className = "sa-visualizer__footer-content";
            footerContentElement_1.style.display = SelectBase.otherCommentCollapsed ? "none" : "block";
            var visibilityButton_1 = _utils_index__WEBPACK_IMPORTED_MODULE_4__["ToolbarHelper"].createButton(function () {
                if (footerContentElement_1.style.display === "none") {
                    footerContentElement_1.style.display = "block";
                    visibilityButton_1.innerText = _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("hideButton");
                }
                else {
                    footerContentElement_1.style.display = "none";
                    visibilityButton_1.innerText = _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString(SelectBase.otherCommentCollapsed ? "showButton" : "hideButton");
                }
                _this.invokeOnUpdate();
            }, _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("showButton") /*, "sa-toolbar__button--right"*/);
            container.appendChild(visibilityButton_1);
            container.appendChild(footerContentElement_1);
            var question = new survey_core__WEBPACK_IMPORTED_MODULE_1__["QuestionCommentModel"](this.question.name + survey_core__WEBPACK_IMPORTED_MODULE_1__["settings"].commentPrefix);
            question.title = this.question.title;
            var visualizer = _visualizerFactory__WEBPACK_IMPORTED_MODULE_5__["VisualizerFactory"].createVizualizer(question, this.data);
            visualizer.render(footerContentElement_1);
        }
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
        var labels = this.valuesSource().map(function (choice) {
            return survey_core__WEBPACK_IMPORTED_MODULE_1__["ItemValue"].getTextOrHtmlByValue(_this.valuesSource(), choice.value);
        });
        if (this.question.hasOther)
            labels.unshift("Other");
        return labels;
    };
    SelectBase.prototype.getData = function () {
        var _this = this;
        var values = this.getValues();
        var statistics = values.map(function (v) { return 0; });
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    values.forEach(function (val, index) {
                        if (rowValue.indexOf(val) !== -1) {
                            statistics[index]++;
                        }
                    });
                }
                else {
                    values.forEach(function (val, index) {
                        if (rowValue == val) {
                            statistics[index]++;
                        }
                    });
                }
            }
        });
        return [statistics];
    };
    // public static otherCommentQuestionType = "comment"; // TODO: make it configureable - allow choose what kind of question/visualizer will be used for comments/others
    SelectBase.otherCommentCollapsed = true;
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




var TextTableAdapter = /** @class */ (function () {
    function TextTableAdapter(model) {
        this.model = model;
    }
    TextTableAdapter.prototype.create = function (container) {
        var _a = this.model.getData(), columnsCount = _a.columnsCount, data = _a.data;
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There are no results yet";
        if (data.length === 0) {
            container.appendChild(emptyTextNode);
            return;
        }
        var tableNode = document.createElement("table");
        tableNode.className = "sa-text-table";
        tableNode.style.backgroundColor = this.model.backgroundColor;
        container.appendChild(tableNode);
        data.forEach(function (rowData) {
            var row = document.createElement("tr");
            for (var i = 0; i < columnsCount; i++) {
                var td = document.createElement("td");
                td.className = "sa-text-table__cell";
                td.textContent = rowData[i];
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
    function Text(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this._textTableAdapter = new TextTableAdapter(_this);
        return _this;
    }
    Object.defineProperty(Text.prototype, "name", {
        get: function () {
            return "text";
        },
        enumerable: true,
        configurable: true
    });
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
                        Object.keys(rowValue).forEach(function (key) { return dataStrings.push(rowValue[key]); });
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
/*! exports provided: ToolbarHelper, DocumentHelper, options, allowDomRendering, DataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarHelper", function() { return ToolbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return DocumentHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowDomRendering", function() { return allowDomRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHelper", function() { return DataHelper; });
var ToolbarHelper = /** @class */ (function () {
    function ToolbarHelper() {
    }
    ToolbarHelper.createSelector = function (options, isSelected, hander) {
        var selectWrapper = document.createElement("div");
        selectWrapper.className = "sa-question__select-wrapper";
        var select = document.createElement("select");
        select.className = "sa-question__select";
        options.forEach(function (option) {
            var optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.text = option.text;
            optionElement.selected = isSelected(option);
            select.appendChild(optionElement);
        });
        select.onchange = hander;
        selectWrapper.appendChild(select);
        return selectWrapper;
    };
    ToolbarHelper.createButton = function (handler, text, cssClass) {
        if (text === void 0) { text = ""; }
        if (cssClass === void 0) { cssClass = ""; }
        var button = document.createElement("span");
        button.className = "sa-toolbar__button " + cssClass;
        button.innerText = text;
        button.onclick = handler;
        return button;
    };
    return ToolbarHelper;
}());

var DocumentHelper = /** @class */ (function () {
    function DocumentHelper() {
    }
    DocumentHelper.createSvgElement = function (path) {
        var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sa-svg-" + path);
        svgElem.appendChild(useElem);
        return svgElem;
    };
    DocumentHelper.createSvgButton = function (path) {
        var btn = document.createElement("button");
        btn.className = "sa-table__svg-button";
        btn.appendChild(DocumentHelper.createSvgElement(path));
        return btn;
    };
    DocumentHelper.createBtn = function (caption) {
        var btn = document.createElement("button");
        btn.className = "sa-table__btn sa-table__btn--small sa-table__btn--gray";
        btn.innerHTML = caption;
        return btn;
    };
    DocumentHelper.createInput = function (className, placeholder, defaultValue) {
        if (placeholder === void 0) { placeholder = ""; }
        if (defaultValue === void 0) { defaultValue = ""; }
        var el = document.createElement("input");
        el.className = className;
        el.placeholder = placeholder;
        el.defaultValue = defaultValue;
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




var VisualizationMatrixDropdown = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VisualizationMatrixDropdown, _super);
    function VisualizationMatrixDropdown(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this._panelVisualizer = undefined;
        _this._panelVisualizer = new _visualizationPanel__WEBPACK_IMPORTED_MODULE_3__["VisualizationPanel"](_this.getQuestions(), [], { allowDynamicLayout: false });
        _this.update(data);
        return _this;
    }
    VisualizationMatrixDropdown.prototype.update = function (data) {
        var _this = this;
        this.data = [];
        data.forEach(function (dataItem) {
            var rawDataItem = dataItem[_this.question.name];
            if (!!rawDataItem) {
                Object.keys(rawDataItem).forEach(function (key) {
                    _this.data.push(rawDataItem[key]);
                });
            }
        });
        this._panelVisualizer.update(this.data);
    };
    VisualizationMatrixDropdown.prototype.getQuestions = function () {
        var matrixdropdown = this.question;
        return matrixdropdown.columns.map(function (column) { return column.templateQuestion; });
    };
    VisualizationMatrixDropdown.prototype.destroyContent = function (container) {
        this._panelVisualizer.destroy();
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
/* harmony import */ var _visualizerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visualizerFactory */ "./src/visualizerFactory.ts");
/* harmony import */ var _visualizationPanel_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visualizationPanel.scss */ "./src/visualizationPanel.scss");
/* harmony import */ var _visualizationPanel_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_visualizationPanel_scss__WEBPACK_IMPORTED_MODULE_8__);








var Muuri = __webpack_require__(/*! muuri */ "./node_modules/muuri/dist/muuri.js");

var questionElementClassName = "sa-question";
var questionLayoutedElementClassName = "sa-question-layouted";
/**
 * VisualizationPanel is responsible for displaying an array of survey questions
 * questions - an array of survey questions to visualize
 * data - an array of answers in format of survey result
 * options:
 * allowDynamicLayout - set it to false to disable items drag/drop reordering and dynamic layouting
 * allowHideQuestions - set it to false to deny user to hide/show individual questions
 * elements - list of visual element descriptions
 */
var VisualizationPanel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VisualizationPanel, _super);
    function VisualizationPanel(questions, data, options, _elements, isTrustedAccess) {
        if (options === void 0) { options = {}; }
        if (_elements === void 0) { _elements = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        var _this = _super.call(this, null, data, options) || this;
        _this.questions = questions;
        _this._elements = _elements;
        _this.isTrustedAccess = isTrustedAccess;
        _this.filterValues = {};
        _this.visualizers = [];
        /**
         * Fires when element visibility has been changed.
         */
        _this.onVisibleElementsChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        _this.filteredData = data;
        if (_elements.length === 0) {
            _this._elements = _this.buildElements(questions);
        }
        _this.showHeader = false;
        _this.registerToolbarItem("resetFilter", function () {
            return _utils_index__WEBPACK_IMPORTED_MODULE_4__["ToolbarHelper"].createButton(function () {
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
                var addElementSelectorUpdater = function (panel, _) {
                    var hiddenElements = _this.hiddenElements;
                    if (hiddenElements.length > 0) {
                        var selectWrapper = _utils_index__WEBPACK_IMPORTED_MODULE_4__["ToolbarHelper"].createSelector([
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
                            var element = _this.getElement(e.target.value);
                            element.visibility = _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Visible;
                            var questionElement = _this.renderVisualizer(element);
                            _this.contentContainer.appendChild(questionElement);
                            !!_this.layoutEngine && _this.layoutEngine.add([questionElement]);
                            _this.visibleElementsChanged(element);
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
        return _this;
    }
    Object.defineProperty(VisualizationPanel.prototype, "allowDynamicLayout", {
        get: function () {
            return (this.options.allowDynamicLayout === undefined ||
                this.options.allowDynamicLayout === true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "allowHideQuestions", {
        get: function () {
            return (this.options.allowHideQuestions === undefined ||
                this.options.allowHideQuestions === true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "layoutEngine", {
        get: function () {
            return !!this.getLayoutEngine && this.getLayoutEngine();
        },
        enumerable: true,
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "hiddenElements", {
        get: function () {
            var _this = this;
            return this._elements.filter(function (el) { return !_this.isVisible(el.visibility); });
        },
        enumerable: true,
        configurable: true
    });
    VisualizationPanel.prototype.getElement = function (name) {
        return this._elements.filter(function (el) { return el.name === name; })[0];
    };
    VisualizationPanel.prototype.visibleElementsChanged = function (element) {
        if (!this.onVisibleElementsChanged.isEmpty) {
            this.onVisibleElementsChanged.fire(this, {
                elements: this._elements,
                changed: element,
            });
        }
        this.layout();
    };
    /**
     * Destroys given visualizer.
     */
    VisualizationPanel.prototype.destroyVisualizer = function (visualizer) {
        if (visualizer instanceof _selectBase__WEBPACK_IMPORTED_MODULE_3__["SelectBase"]) {
            visualizer.setSelection(undefined);
            visualizer.onDataItemSelected = undefined;
        }
        visualizer.onUpdate = undefined;
        visualizer.destroy();
        this.visualizers.splice(this.visualizers.indexOf(visualizer), 1);
    };
    /**
     * Renders given element.
     */
    VisualizationPanel.prototype.renderVisualizer = function (element) {
        var _this = this;
        var question = this.questions.filter(function (q) { return q.name === element.name; })[0];
        var questionElement = document.createElement("div");
        var questionContent = document.createElement("div");
        var titleElement = document.createElement("h3");
        var vizualizerElement = document.createElement("div");
        titleElement.innerText = element.displayName;
        questionElement.className = this.allowDynamicLayout
            ? questionElementClassName + " " + questionLayoutedElementClassName
            : questionElementClassName;
        titleElement.className = questionElementClassName + "__title";
        questionContent.className = questionElementClassName + "__content";
        questionContent.appendChild(titleElement);
        questionContent.appendChild(vizualizerElement);
        questionElement.appendChild(questionContent);
        var visualizer = _visualizerFactory__WEBPACK_IMPORTED_MODULE_7__["VisualizerFactory"].createVizualizer(question, this.filteredData);
        if (this.allowHideQuestions) {
            visualizer.registerToolbarItem("removeQuestion", function () {
                return _utils_index__WEBPACK_IMPORTED_MODULE_4__["ToolbarHelper"].createButton(function () {
                    setTimeout(function () {
                        element.visibility = _config__WEBPACK_IMPORTED_MODULE_6__["ElementVisibility"].Invisible;
                        _this.destroyVisualizer(visualizer);
                        !!_this.layoutEngine &&
                            _this.layoutEngine.remove([questionElement]);
                        _this.contentContainer.removeChild(questionElement);
                        _this.visibleElementsChanged(element);
                    }, 0);
                }, _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString("hideButton"));
            });
        }
        if (visualizer instanceof _selectBase__WEBPACK_IMPORTED_MODULE_3__["SelectBase"]) {
            var filterInfo = {
                text: undefined,
                element: undefined,
                update: function (selection) {
                    if (!!selection && !!selection.value) {
                        this.element.style.display = "inline-block";
                        this.text.innerHTML = "Filter: [" + selection.text + "]";
                    }
                    else {
                        this.element.style.display = "none";
                        this.text.innerHTML = "";
                    }
                },
            };
            visualizer.registerToolbarItem("questionFilterInfo", function () {
                filterInfo.element = document.createElement("div");
                filterInfo.element.className = "sa-question__filter";
                filterInfo.text = document.createElement("span");
                filterInfo.text.className = "sa-question__filter-text";
                filterInfo.element.appendChild(filterInfo.text);
                var filterClear = _utils_index__WEBPACK_IMPORTED_MODULE_4__["ToolbarHelper"].createButton(function () {
                    visualizer.setSelection(undefined);
                }, _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString("clearButton"));
                filterInfo.element.appendChild(filterClear);
                filterInfo.update(visualizer.selection);
                return filterInfo.element;
            });
            visualizer.onDataItemSelected = function (selectedValue, selectedText) {
                filterInfo.update({ value: selectedValue, text: selectedText });
                _this.setFilter(question.name, selectedValue);
            };
        }
        visualizer.render(vizualizerElement);
        visualizer.onUpdate = function () { return _this.layout(); };
        this.visualizers.push(visualizer);
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
        var layoutEngine = undefined;
        this.getLayoutEngine = function () { return layoutEngine; };
        container.className += " sa-panel__content sa-grid";
        this.visibleElements.forEach(function (element) {
            var questionElement = _this.renderVisualizer(element);
            container.appendChild(questionElement);
        });
        var moveHandler = function (data) {
            var elements = _this._elements.splice(data.fromIndex, 1);
            _this._elements.splice(data.toIndex, 0, elements[0]);
        };
        if (this.allowDynamicLayout) {
            layoutEngine = new Muuri(container, {
                items: "." + questionLayoutedElementClassName,
                dragEnabled: true,
            });
            layoutEngine.on("move", moveHandler);
        }
        !!window && window.dispatchEvent(new UIEvent("resize"));
    };
    /**
     * Destroys visualizer and all inner content.
     */
    VisualizationPanel.prototype.destroyContent = function (container) {
        var layoutEngine = this.layoutEngine;
        if (!!layoutEngine) {
            layoutEngine.off("move");
            layoutEngine.destroy();
            this.getLayoutEngine = undefined;
        }
        this.visualizers.forEach(function (visualizer) {
            visualizer.onUpdate = undefined;
            if (visualizer instanceof _selectBase__WEBPACK_IMPORTED_MODULE_3__["SelectBase"]) {
                visualizer.onDataItemSelected = undefined;
            }
            visualizer.destroy();
        });
        this.visualizers = [];
        _super.prototype.destroyContent.call(this, container);
    };
    /**
     * Updates visualizer and all inner content.
     */
    VisualizationPanel.prototype.update = function (data) {
        _super.prototype.update.call(this, data);
        this.applyFilter();
    };
    /**
     * Updates visualizer and all inner content.
     */
    VisualizationPanel.prototype.refresh = function (hard) {
        var _this = this;
        if (hard === void 0) { hard = false; }
        if (hard && this.visualizers.length > 0 && !!this.contentContainer) {
            this.destroyContent(this.contentContainer);
            this.renderContent(this.contentContainer);
        }
        else {
            this.visualizers.forEach(function (visualizer) {
                return setTimeout(function () { return visualizer.update(_this.filteredData); }, 10);
            });
        }
    };
    /**
     * Updates layout of visualizer inner content.
     */
    VisualizationPanel.prototype.layout = function () {
        var layoutEngine = this.layoutEngine;
        if (!!layoutEngine) {
            layoutEngine.refreshItems();
            layoutEngine.layout();
        }
    };
    /**
     * Sets filter by question name and value.
     */
    VisualizationPanel.prototype.setFilter = function (questionName, selectedValue) {
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
            this.applyFilter();
        }
    };
    /**
     * Applies filter to the data and update visualizers.
     */
    VisualizationPanel.prototype.applyFilter = function () {
        var _this = this;
        this.filteredData = this.data.filter(function (item) {
            return !Object.keys(_this.filterValues).some(function (key) { return item[key] !== _this.filterValues[key]; });
        });
        this.refresh();
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
    function VisualizationPanelDynamic(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this._panelVisualizer = undefined;
        _this._panelVisualizer = new _visualizationPanel__WEBPACK_IMPORTED_MODULE_3__["VisualizationPanel"](_this.getQuestions(), [], { allowDynamicLayout: false });
        _this.update(data);
        return _this;
    }
    VisualizationPanelDynamic.prototype.update = function (data) {
        var _this = this;
        this.data = [];
        data.forEach(function (dataItem) {
            if (!!dataItem[_this.question.name]) {
                _this.data = _this.data.concat(dataItem[_this.question.name]);
            }
        });
        this._panelVisualizer.update(this.data);
    };
    VisualizationPanelDynamic.prototype.getQuestions = function () {
        var paneldynamic = this.question;
        return paneldynamic.template.questions;
    };
    VisualizationPanelDynamic.prototype.destroyContent = function (container) {
        this._panelVisualizer.destroy();
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
/* harmony import */ var _visualizerBase_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizerBase.scss */ "./src/visualizerBase.scss");
/* harmony import */ var _visualizerBase_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_visualizerBase_scss__WEBPACK_IMPORTED_MODULE_0__);

var VisualizerBase = /** @class */ (function () {
    function VisualizerBase(question, data, options) {
        if (options === void 0) { options = {}; }
        this.question = question;
        this.data = data;
        this.options = options;
        this._showHeader = true;
        this.renderResult = undefined;
        this.toolbarContainer = undefined;
        this.contentContainer = undefined;
        this.footerContainer = undefined;
        this.toolbarItemCreators = {};
        this.backgroundColor = "#f7f7f7";
    }
    VisualizerBase.prototype.registerToolbarItem = function (name, creator) {
        this.toolbarItemCreators[name] = creator;
    };
    Object.defineProperty(VisualizerBase.prototype, "name", {
        get: function () {
            return "visualizer";
        },
        enumerable: true,
        configurable: true
    });
    VisualizerBase.prototype.update = function (data) {
        this.data = data;
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
            var toolbar_1 = document.createElement("div");
            toolbar_1.className = "sa-toolbar";
            this.createToolbarItems(toolbar_1);
            container.appendChild(toolbar_1);
        }
    };
    VisualizerBase.prototype.destroyContent = function (container) {
        container.innerHTML = "";
    };
    VisualizerBase.prototype.renderContent = function (container) {
        container.innerHTML = "This question type is not visualized yet";
    };
    VisualizerBase.prototype.destroyFooter = function (container) {
        container.innerHTML = "";
    };
    VisualizerBase.prototype.renderFooter = function (container) {
        container.innerHTML = "";
    };
    VisualizerBase.prototype.render = function (targetElement) {
        this.renderResult = targetElement;
        this.toolbarContainer = document.createElement("div");
        this.toolbarContainer.className = "sa-visualizer__toolbar";
        targetElement.appendChild(this.toolbarContainer);
        this.renderToolbar(this.toolbarContainer);
        this.contentContainer = document.createElement("div");
        this.contentContainer.className = "sa-visualizer__content";
        targetElement.appendChild(this.contentContainer);
        this.renderContent(this.contentContainer);
        this.footerContainer = document.createElement("div");
        this.footerContainer.className = "sa-visualizer__footer";
        targetElement.appendChild(this.footerContainer);
        this.renderFooter(this.footerContainer);
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
        enumerable: true,
        configurable: true
    });
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
        "#4e6198"
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
/* harmony import */ var _alternativeVizualizersWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alternativeVizualizersWrapper */ "./src/alternativeVizualizersWrapper.ts");


var VisualizerFactory = /** @class */ (function () {
    function VisualizerFactory() {
    }
    /**
     * Create visualizer by question.
     */
    VisualizerFactory.createVizualizer = function (question, data) {
        var type;
        if (question.getType() === "text" && question.inputType) {
            type = question.inputType;
        }
        else {
            type = question.getType();
        }
        var creators = _visualizationManager__WEBPACK_IMPORTED_MODULE_0__["VisualizationManager"].getVisualizersByType(type);
        var visualizers = creators.map(function (creator) { return new creator(question, data); });
        if (visualizers.length > 1) {
            var visualizer = new _alternativeVizualizersWrapper__WEBPACK_IMPORTED_MODULE_1__["AlternativeVisualizersWrapper"](visualizers, question, data);
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





var WordCloudAdapter = /** @class */ (function () {
    function WordCloudAdapter(model) {
        this.model = model;
    }
    Object.defineProperty(WordCloudAdapter.prototype, "wordcloud", {
        get: function () {
            return this._wordcloud;
        },
        enumerable: true,
        configurable: true
    });
    WordCloudAdapter.prototype.create = function (node) {
        var _this = this;
        var data = this.model.getData();
        var colors = this.model.getColors();
        var canvasNode = document.createElement("canvas");
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There are no results yet";
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
            }
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
    function WordCloud(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this._wordcloudAdapter = new WordCloudAdapter(_this);
        return _this;
    }
    Object.defineProperty(WordCloud.prototype, "name", {
        get: function () {
            return "wordcloud";
        },
        enumerable: true,
        configurable: true
    });
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
                        Object.keys(rowValue).forEach(function (key) { return processString(rowValue[key]); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9ub2RlX21vZHVsZXMvbXV1cmkvZGlzdC9tdXVyaS5qcyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvZW50cmllcy9zdW1tYXJ5LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZhcnNpLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL251bWJlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L2Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Bsb3RseS9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RleHQuc2Nzcz8yYzRlIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90ZXh0LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25NYXRyaXhEcm9wZG93bi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzPzNjODIiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsRHluYW1pYy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXplckJhc2Uuc2Nzcz9hZmJkIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy92aXN1YWxpemVyQmFzZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXplckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvd29yZGNsb3VkL3dvcmRjbG91ZC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiUGxvdGx5XCIsXCJjb21tb25qczJcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJjb21tb25qc1wiOlwicGxvdGx5LmpzLWRpc3RcIixcImFtZFwiOlwicGxvdGx5LmpzLWRpc3RcIn0iLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXktY29yZVwiLFwiY29tbW9uanNcIjpcInN1cnZleS1jb3JlXCIsXCJhbWRcIjpcInN1cnZleS1jb3JlXCJ9Iiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwid29yZGNsb3VkXCIsXCJjb21tb25qc1wiOlwid29yZGNsb3VkXCIsXCJhbWRcIjpcIndvcmRjbG91ZFwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEscUNBQXFDO0FBQ2xELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtB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a0I7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IseURBQXlEO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUF5RDtBQUNuRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLEtBQUs7QUFDbEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsYUFBYSxFQUFFO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFlBQVk7QUFDekIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUF3RDtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3REFBd0Q7QUFDeEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FB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LENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzlELDBFQUFvQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkluRSw0RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RCIsImZpbGUiOiJzdXJ2ZXkuYW5hbHl0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcIndvcmRjbG91ZFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUFuYWx5dGljc1wiLCBbXCJwbG90bHkuanMtZGlzdFwiLCBcInN1cnZleS1jb3JlXCIsIFwid29yZGNsb3VkXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpLCByZXF1aXJlKFwic3VydmV5LWNvcmVcIiksIHJlcXVpcmUoXCJ3b3JkY2xvdWRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBsb3RseVwiXSwgcm9vdFtcIlN1cnZleVwiXSwgcm9vdFtcIldvcmRDbG91ZFwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGxvdGx5X2pzX2Rpc3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dvcmRjbG91ZF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cmllcy9zdW1tYXJ5LnRzXCIpO1xuIiwiLyoqXG4qIE11dXJpIHYwLjguMFxuKiBodHRwczovL2dpdGh1Yi5jb20vaGFsdHUvbXV1cmlcbiogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEhhbHR1IE95XG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuKiBodHRwczovL2dpdGh1Yi5jb20vaGFsdHUvbXV1cmkvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuKiBAbGljZW5zZSBNSVRcbipcbiogTXV1cmkgUGFja2VyXG4qIENvcHlyaWdodCAoYykgMjAxNi1wcmVzZW50LCBOaWtsYXMgUsOkbcO2IDxpbnJhbW9AZ21haWwuY29tPlxuKiBAbGljZW5zZSBNSVRcbipcbiogTXV1cmkgVGlja2VyIC8gTXV1cmkgRW1pdHRlciAvIE11dXJpIFF1ZXVlXG4qIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBOaWtsYXMgUsOkbcO2IDxpbnJhbW9AZ21haWwuY29tPlxuKiBAbGljZW5zZSBNSVRcbiovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuTXV1cmkgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgbmFtZXNwYWNlID0gJ011dXJpJztcbiAgdmFyIGdyaWRJbnN0YW5jZXMgPSB7fTtcblxuICB2YXIgYWN0aW9uU3dhcCA9ICdzd2FwJztcbiAgdmFyIGFjdGlvbk1vdmUgPSAnbW92ZSc7XG5cbiAgdmFyIGV2ZW50U3luY2hyb25pemUgPSAnc3luY2hyb25pemUnO1xuICB2YXIgZXZlbnRMYXlvdXRTdGFydCA9ICdsYXlvdXRTdGFydCc7XG4gIHZhciBldmVudExheW91dEVuZCA9ICdsYXlvdXRFbmQnO1xuICB2YXIgZXZlbnRBZGQgPSAnYWRkJztcbiAgdmFyIGV2ZW50UmVtb3ZlID0gJ3JlbW92ZSc7XG4gIHZhciBldmVudFNob3dTdGFydCA9ICdzaG93U3RhcnQnO1xuICB2YXIgZXZlbnRTaG93RW5kID0gJ3Nob3dFbmQnO1xuICB2YXIgZXZlbnRIaWRlU3RhcnQgPSAnaGlkZVN0YXJ0JztcbiAgdmFyIGV2ZW50SGlkZUVuZCA9ICdoaWRlRW5kJztcbiAgdmFyIGV2ZW50RmlsdGVyID0gJ2ZpbHRlcic7XG4gIHZhciBldmVudFNvcnQgPSAnc29ydCc7XG4gIHZhciBldmVudE1vdmUgPSAnbW92ZSc7XG4gIHZhciBldmVudFNlbmQgPSAnc2VuZCc7XG4gIHZhciBldmVudEJlZm9yZVNlbmQgPSAnYmVmb3JlU2VuZCc7XG4gIHZhciBldmVudFJlY2VpdmUgPSAncmVjZWl2ZSc7XG4gIHZhciBldmVudEJlZm9yZVJlY2VpdmUgPSAnYmVmb3JlUmVjZWl2ZSc7XG4gIHZhciBldmVudERyYWdJbml0ID0gJ2RyYWdJbml0JztcbiAgdmFyIGV2ZW50RHJhZ1N0YXJ0ID0gJ2RyYWdTdGFydCc7XG4gIHZhciBldmVudERyYWdNb3ZlID0gJ2RyYWdNb3ZlJztcbiAgdmFyIGV2ZW50RHJhZ1Njcm9sbCA9ICdkcmFnU2Nyb2xsJztcbiAgdmFyIGV2ZW50RHJhZ0VuZCA9ICdkcmFnRW5kJztcbiAgdmFyIGV2ZW50RHJhZ1JlbGVhc2VTdGFydCA9ICdkcmFnUmVsZWFzZVN0YXJ0JztcbiAgdmFyIGV2ZW50RHJhZ1JlbGVhc2VFbmQgPSAnZHJhZ1JlbGVhc2VFbmQnO1xuICB2YXIgZXZlbnREZXN0cm95ID0gJ2Rlc3Ryb3knO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVyIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9jb3VudGVyID0gMDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBsaXN0ZW5lcnMgcXVldWUgYW5kIGNyZWF0ZSBpdCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycykgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XSA9IFtdO1xuXG4gICAgLy8gQWRkIHRoZSBsaXN0ZW5lciB0byB0aGUgcXVldWUuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbGwgZXZlbnQgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhlIHByb3ZpZGVkIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2xpc3RlbmVyXVxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBHZXQgbGlzdGVuZXJzIGFuZCByZXR1cm4gaW1tZWRpYXRlbHkgaWYgbm9uZSBpcyBmb3VuZC5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBJZiBubyBzcGVjaWZpYyBsaXN0ZW5lciBpcyBwcm92aWRlZCByZW1vdmUgYWxsIGxpc3RlbmVycy5cbiAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgIHZhciBpID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAobGlzdGVuZXIgPT09IGxpc3RlbmVyc1tpXSkgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRW1pdCBhbGwgbGlzdGVuZXJzIGluIGEgc3BlY2lmaWVkIGV2ZW50IHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7Kn0gW2FyZzFdXG4gICAqIEBwYXJhbSB7Kn0gW2FyZzJdXG4gICAqIEBwYXJhbSB7Kn0gW2FyZzNdXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50LCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBldmVudCBsaXN0ZW5lcnMgYW5kIHF1aXQgZWFybHkgaWYgdGhlcmUncyBubyBsaXN0ZW5lcnMuXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHFMZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gICAgdmFyIGFMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICB2YXIgaTtcblxuICAgIC8vIEFkZCB0aGUgY3VycmVudCBsaXN0ZW5lcnMgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGJlZm9yZSB3ZSBwcm9jZXNzIHRoZW0uXG4gICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gZ3VhcmFudGVlIHRoYXQgYWxsIG9mIHRoZSBsaXN0ZW5lcnMgYXJlIGNhbGxlZCBpblxuICAgIC8vIGNvcnJlY3Qgb3JkZXIgZXZlbiBpZiBuZXcgZXZlbnQgbGlzdGVuZXJzIGFyZSByZW1vdmVkL2FkZGVkIGR1cmluZ1xuICAgIC8vIHByb2Nlc3NpbmcgYW5kL29yIGV2ZW50cyBhcmUgZW1pdHRlZCBkdXJpbmcgcHJvY2Vzc2luZy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBxdWV1ZS5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gSW5jcmVtZW50IHF1ZXVlIGNvdW50ZXIuIFRoaXMgaXMgbmVlZGVkIGZvciB0aGUgc2NlbmFyaW9zIHdoZXJlIGVtaXQgaXNcbiAgICAvLyB0cmlnZ2VyZWQgd2hpbGUgdGhlIHF1ZXVlIGlzIGFscmVhZHkgcHJvY2Vzc2luZy4gV2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mXG4gICAgLy8gaG93IG1hbnkgXCJxdWV1ZSBwcm9jZXNzb3JzXCIgdGhlcmUgYXJlIGFjdGl2ZSBzbyB0aGF0IHdlIGNhbiBzYWZlbHkgcmVzZXRcbiAgICAvLyB0aGUgcXVldWUgaW4gdGhlIGVuZCB3aGVuIHRoZSBsYXN0IHF1ZXVlIHByb2Nlc3NvciBpcyBmaW5pc2hlZC5cbiAgICArK3RoaXMuX2NvdW50ZXI7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBxdWV1ZSAodGhlIHNwZWNpZmljIHBhcnQgb2YgaXQgZm9yIHRoaXMgZW1pdCkuXG4gICAgZm9yIChpID0gcUxlbmd0aCwgcUxlbmd0aCA9IHF1ZXVlLmxlbmd0aDsgaSA8IHFMZW5ndGg7IGkrKykge1xuICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICBhTGVuZ3RoID09PSAwID8gcXVldWVbaV0oKSA6XG4gICAgICBhTGVuZ3RoID09PSAxID8gcXVldWVbaV0oYXJnMSkgOlxuICAgICAgYUxlbmd0aCA9PT0gMiA/IHF1ZXVlW2ldKGFyZzEsIGFyZzIpIDpcbiAgICAgICAgICAgICAgICAgICAgICBxdWV1ZVtpXShhcmcxLCBhcmcyLCBhcmczKTtcblxuICAgICAgLy8gU3RvcCBwcm9jZXNzaW5nIGlmIHRoZSBlbWl0dGVyIGlzIGRlc3Ryb3llZC5cbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRGVjcmVtZW50IHF1ZXVlIHByb2Nlc3MgY291bnRlci5cbiAgICAtLXRoaXMuX2NvdW50ZXI7XG5cbiAgICAvLyBSZXNldCB0aGUgcXVldWUgaWYgdGhlcmUgYXJlIG5vIG1vcmUgcXVldWUgcHJvY2Vzc2VzIHJ1bm5pbmcuXG4gICAgaWYgKCF0aGlzLl9jb3VudGVyKSBxdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgZW1pdHRlciBpbnN0YW5jZS4gQmFzaWNhbGx5IGp1c3QgcmVtb3ZlcyBhbGwgYm91bmQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICAvLyBGbGFnIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICAvLyBSZXNldCBxdWV1ZSAoaWYgcXVldWUgaXMgY3VycmVudGx5IHByb2Nlc3NpbmcgdGhpcyB3aWxsIGFsc28gc3RvcCB0aGF0KS5cbiAgICB0aGlzLl9xdWV1ZS5sZW5ndGggPSB0aGlzLl9jb3VudGVyID0gMDtcblxuICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzLlxuICAgIGZvciAoZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICBpZiAoZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICBldmVudHNbZXZlbnRdLmxlbmd0aCA9IDA7XG4gICAgICAgIGV2ZW50c1tldmVudF0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gU2V0IHVwIHRoZSBkZWZhdWx0IGV4cG9ydCB2YWx1ZXMuXG4gIHZhciB0cmFuc2Zvcm1TdHlsZSA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xuXG4gIC8vIEZpbmQgdGhlIHN1cHBvcnRlZCB0cmFuc2Zvcm0gcHJvcCBhbmQgc3R5bGUgbmFtZXMuXG4gIHZhciBkb2NFbGVtU3R5bGUgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuICB2YXIgc3R5bGUgPSAndHJhbnNmb3JtJztcbiAgdmFyIHN0eWxlQ2FwID0gJ1RyYW5zZm9ybSc7XG4gIHZhciBmb3VuZCA9IGZhbHNlO1xuICBbJycsICdXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnXS5mb3JFYWNoKGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuICAgIHZhciBwcm9wTmFtZSA9IHByZWZpeCA/IHByZWZpeCArIHN0eWxlQ2FwIDogc3R5bGU7XG4gICAgaWYgKGRvY0VsZW1TdHlsZVtwcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlZml4ID0gcHJlZml4LnRvTG93ZXJDYXNlKCk7XG4gICAgICB0cmFuc2Zvcm1TdHlsZSA9IHByZWZpeCA/ICctJyArIHByZWZpeCArICctJyArIHN0eWxlIDogc3R5bGU7XG4gICAgICB0cmFuc2Zvcm1Qcm9wID0gcHJvcE5hbWU7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICB2YXIgc3R5bGVzQ2FjaGUgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBXZWFrTWFwKCkgOiBudWxsO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiBhbiBlbGVtZW50J3Mgc3R5bGUgcHJvcGVydHkgYXMgYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICAgIHZhciBzdHlsZXMgPSBzdHlsZXNDYWNoZSAmJiBzdHlsZXNDYWNoZS5nZXQoZWxlbWVudCk7XG4gICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICAgICAgaWYgKHN0eWxlc0NhY2hlKSBzdHlsZXNDYWNoZS5zZXQoZWxlbWVudCwgc3R5bGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlID09PSAndHJhbnNmb3JtJyA/IHRyYW5zZm9ybVN0eWxlIDogc3R5bGUpO1xuICB9XG5cbiAgdmFyIHN0eWxlTmFtZVJlZ0V4ID0gLyhbQS1aXSkvZztcblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBhIGNhbWVsIGNhc2Ugc3R5bGUgcHJvcGVydHkgdG8ga2ViYWIgY2FzZSBzdHlsZSBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3R5bGVOYW1lKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShzdHlsZU5hbWVSZWdFeCwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICB2YXIgc3RyRnVuY3Rpb24gPSAnZnVuY3Rpb24nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gc3RyRnVuY3Rpb247XG4gIH1cblxuICB2YXIgdHJhbnNmb3JtU3R5bGUkMSA9ICd0cmFuc2Zvcm0nO1xuXG4gIC8qKlxuICAgKiBTZXQgaW5saW5lIHN0eWxlcyB0byBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcbiAgICovXG4gIGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlcykge1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wID09PSB0cmFuc2Zvcm1TdHlsZSQxID8gdHJhbnNmb3JtUHJvcCA6IHByb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVtIGFuaW1hdGlvbiBoYW5kbGVyIHBvd2VyZWQgYnkgV2ViIEFuaW1hdGlvbnMgQVBJLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbUFuaW1hdGUoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuX3Byb3BzID0gW107XG4gICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgdGhpcy5fa2V5ZnJhbWVzID0gW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fb25GaW5pc2ggPSB0aGlzLl9vbkZpbmlzaC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGluc3RhbmNlJ3MgYW5pbWF0aW9uLiBBdXRvbWF0aWNhbGx5IHN0b3BzIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzXG4gICAqIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNGcm9tXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1RvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmVhc2luZz0nZWFzZSddXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24ocHJvcHNGcm9tLCBwcm9wc1RvLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uO1xuICAgIHZhciBjdXJyZW50UHJvcHMgPSB0aGlzLl9wcm9wcztcbiAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgY2FuY2VsQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGV4aXN0aW5nIGFuaW1hdGlvbiBydW5uaW5nLCBsZXQncyBjaGVjayBpZiBpdCBuZWVkcyB0byBiZVxuICAgIC8vIGNhbmNlbGxlZCBvciBpZiBpdCBjYW4gY29udGludWUgcnVubmluZy5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICB2YXIgcHJvcENvdW50ID0gMDtcbiAgICAgIHZhciBwcm9wSW5kZXg7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSByZXF1ZXN0ZWQgYW5pbWF0aW9uIHRhcmdldCBwcm9wcyBhbmQgdmFsdWVzIG1hdGNoIHdpdGggdGhlXG4gICAgICAvLyBjdXJyZW50IHByb3BzIGFuZCB2YWx1ZXMuXG4gICAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wc1RvKSB7XG4gICAgICAgICsrcHJvcENvdW50O1xuICAgICAgICBwcm9wSW5kZXggPSBjdXJyZW50UHJvcHMuaW5kZXhPZihwcm9wTmFtZSk7XG4gICAgICAgIGlmIChwcm9wSW5kZXggPT09IC0xIHx8IHByb3BzVG9bcHJvcE5hbWVdICE9PSBjdXJyZW50VmFsdWVzW3Byb3BJbmRleF0pIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB0YXJnZXQgcHJvcHMgY291bnQgbWF0Y2hlcyBjdXJyZW50IHByb3BzIGNvdW50LiBUaGlzIGlzXG4gICAgICAvLyBuZWVkZWQgZm9yIHRoZSBlZGdlIGNhc2Ugc2NlbmFyaW8gd2hlcmUgdGFyZ2V0IHByb3BzIGNvbnRhaW4gdGhlIHNhbWVcbiAgICAgIC8vIHN0eWxlcyBhcyBjdXJyZW50IHByb3BzLCBidXQgdGhlIGN1cnJlbnQgcHJvcHMgaGF2ZSBzb21lIGFkZGl0aW9uYWxcbiAgICAgIC8vIHByb3BzLlxuICAgICAgaWYgKCFjYW5jZWxBbmltYXRpb24gJiYgcHJvcENvdW50ICE9PSBjdXJyZW50UHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIGFuaW1hdGlvbiAoaWYgcmVxdWlyZWQpLlxuICAgIGlmIChjYW5jZWxBbmltYXRpb24pIGFuaW1hdGlvbi5jYW5jZWwoKTtcblxuICAgIC8vIFN0b3JlIGFuaW1hdGlvbiBjYWxsYmFjay5cbiAgICB0aGlzLl9jYWxsYmFjayA9IGlzRnVuY3Rpb24ob3B0cy5vbkZpbmlzaCkgPyBvcHRzLm9uRmluaXNoIDogbnVsbDtcblxuICAgIC8vIElmIHdlIGhhdmUgYSBydW5uaW5nIGFuaW1hdGlvbiB0aGF0IGRvZXMgbm90IG5lZWQgdG8gYmUgY2FuY2VsbGVkLCBsZXQnc1xuICAgIC8vIGNhbGwgaXQgYSBkYXkgaGVyZSBhbmQgbGV0IGl0IHJ1bi5cbiAgICBpZiAoYW5pbWF0aW9uICYmICFjYW5jZWxBbmltYXRpb24pIHJldHVybjtcblxuICAgIC8vIFN0b3JlIHRhcmdldCBwcm9wcyBhbmQgdmFsdWVzIHRvIGluc3RhbmNlLlxuICAgIGN1cnJlbnRQcm9wcy5sZW5ndGggPSBjdXJyZW50VmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBwcm9wc1RvKSB7XG4gICAgICBjdXJyZW50UHJvcHMucHVzaChwcm9wTmFtZSk7XG4gICAgICBjdXJyZW50VmFsdWVzLnB1c2gocHJvcHNUb1twcm9wTmFtZV0pO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBrZXlmcmFtZXMuXG4gICAgdmFyIGFuaW1LZXlmcmFtZXMgPSB0aGlzLl9rZXlmcmFtZXM7XG4gICAgYW5pbUtleWZyYW1lc1swXSA9IHByb3BzRnJvbTtcbiAgICBhbmltS2V5ZnJhbWVzWzFdID0gcHJvcHNUbztcblxuICAgIC8vIFNldCB1cCBvcHRpb25zLlxuICAgIHZhciBhbmltT3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gICAgYW5pbU9wdGlvbnMuZHVyYXRpb24gPSBvcHRzLmR1cmF0aW9uIHx8IDMwMDtcbiAgICBhbmltT3B0aW9ucy5lYXNpbmcgPSBvcHRzLmVhc2luZyB8fCAnZWFzZSc7XG5cbiAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIGFuaW1hdGlvbiA9IGVsZW1lbnQuYW5pbWF0ZShhbmltS2V5ZnJhbWVzLCBhbmltT3B0aW9ucyk7XG4gICAgYW5pbWF0aW9uLm9uZmluaXNoID0gdGhpcy5fb25GaW5pc2g7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXG4gICAgLy8gU2V0IHRoZSBlbmQgc3R5bGVzLiBUaGlzIG1ha2VzIHN1cmUgdGhhdCB0aGUgZWxlbWVudCBzdGF5cyBhdCB0aGUgZW5kXG4gICAgLy8gdmFsdWVzIGFmdGVyIGFuaW1hdGlvbiBpcyBmaW5pc2hlZC5cbiAgICBzZXRTdHlsZXMoZWxlbWVudCwgcHJvcHNUbyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgaW5zdGFuY2UncyBjdXJyZW50IGFuaW1hdGlvbiBpZiBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdHlsZXNdXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKHN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5fYW5pbWF0aW9uKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX3Byb3BzO1xuICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHZhciBwcm9wTmFtZTtcbiAgICB2YXIgcHJvcFZhbHVlO1xuICAgIHZhciBpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIChpZiBub3QgcHJvdmlkZWQpIGFuZCBzZXQgc3R5bGVzLlxuICAgIGlmICghc3R5bGVzKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY3VycmVudFByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb3BOYW1lID0gY3VycmVudFByb3BzW2ldO1xuICAgICAgICBwcm9wVmFsdWUgPSBnZXRTdHlsZShlbGVtZW50LCBnZXRTdHlsZU5hbWUocHJvcE5hbWUpKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wTmFtZSA9PT0gJ3RyYW5zZm9ybScgPyB0cmFuc2Zvcm1Qcm9wIDogcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKTtcbiAgICB9XG5cbiAgICAvLyAgQ2FuY2VsIGFuaW1hdGlvbi5cbiAgICB0aGlzLl9hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgLy8gUmVzZXQgY3VycmVudCBwcm9wcyBhbmQgdmFsdWVzLlxuICAgIGN1cnJlbnRQcm9wcy5sZW5ndGggPSBjdXJyZW50VmFsdWVzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBpdGVtIGlzIGJlaW5nIGFuaW1hdGVkIGN1cnJlbnRseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuaXNBbmltYXRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl9hbmltYXRpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fb3B0aW9ucyA9IHRoaXMuX2tleWZyYW1lcyA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBlbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLl9vbkZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrO1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLl9wcm9wcy5sZW5ndGggPSB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICB9O1xuXG4gIHZhciB2ZW5kb3JQcmVmaXhlcyA9IFsnJywgJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycsICdXZWJraXQnLCAnTW96JywgJ01TJywgJ08nXTtcblxuICAvKipcbiAgICogR2V0IHByZWZpeGVkIENTUyBwcm9wZXJ0eSBuYW1lIHdoZW4gZ2l2ZW4gYSBub24tcHJlZml4ZWQgQ1NTIHByb3BlcnR5IG5hbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtU3R5bGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gICAqIEByZXR1cm5zIHshU3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UHJlZml4ZWRQcm9wTmFtZShlbGVtU3R5bGUsIHByb3BOYW1lKSB7XG4gICAgdmFyIGNhbWVsUHJvcE5hbWUgPSBwcm9wTmFtZVswXS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwcmVmaXg7XG4gICAgdmFyIHByZWZpeGVkUHJvcE5hbWU7XG5cbiAgICB3aGlsZSAoaSA8IHZlbmRvclByZWZpeGVzLmxlbmd0aCkge1xuICAgICAgcHJlZml4ID0gdmVuZG9yUHJlZml4ZXNbaV07XG4gICAgICBwcmVmaXhlZFByb3BOYW1lID0gcHJlZml4ID8gcHJlZml4ICsgY2FtZWxQcm9wTmFtZSA6IHByb3BOYW1lO1xuICAgICAgaWYgKHByZWZpeGVkUHJvcE5hbWUgaW4gZWxlbVN0eWxlKSByZXR1cm4gcHJlZml4ZWRQcm9wTmFtZTtcbiAgICAgICsraTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBkdCA9IDEwMDAgLyA2MDtcblxuICB2YXIgcmFmID0gKFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjayhkdCk7XG4gICAgICB9LCBkdCk7XG4gICAgfVxuICApLmJpbmQod2luZG93KTtcblxuICAvLyBEZXRlY3Qgc3VwcG9ydCBmb3IgcGFzc2l2ZSBldmVudHM6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kI2ZlYXR1cmUtZGV0ZWN0aW9uXG4gIHZhciBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgcGFzc2l2ZU9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNQYXNzaXZlRXZlbnRzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlT3B0cyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZU9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIC8vIERyYWdnZXIgZXZlbnRzLlxuICB2YXIgZXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnc3RhcnQnLFxuICAgIG1vdmU6ICdtb3ZlJyxcbiAgICBlbmQ6ICdlbmQnLFxuICAgIGNhbmNlbDogJ2NhbmNlbCdcbiAgfTtcblxuICB2YXIgaGFzVG91Y2hFdmVudHMgPSAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LlRvdWNoRXZlbnQpO1xuICB2YXIgaGFzUG9pbnRlckV2ZW50cyA9ICEhd2luZG93LlBvaW50ZXJFdmVudDtcbiAgdmFyIGhhc01zUG9pbnRlckV2ZW50cyA9ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkO1xuICB2YXIgaXNBbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgbGlzdGVuZXJPcHRpb25zID0gaXNQYXNzaXZlRXZlbnRzU3VwcG9ydGVkID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcblxuICB2YXIgdGFQcm9wID0gJ3RvdWNoQWN0aW9uJztcbiAgdmFyIHRhUHJvcFByZWZpeGVkID0gZ2V0UHJlZml4ZWRQcm9wTmFtZSh3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLCB0YVByb3ApO1xuICB2YXIgdGFEZWZhdWx0VmFsdWUgPSAnYXV0byc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRHJhZ2dlciBpbnN0YW5jZSBmb3IgYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2Nzc1Byb3BzXVxuICAgKi9cbiAgZnVuY3Rpb24gRHJhZ2dlcihlbGVtZW50LCBjc3NQcm9wcykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fY3NzUHJvcHMgPSB7fTtcbiAgICB0aGlzLl90b3VjaEFjdGlvbiA9ICcnO1xuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xuICAgIHRoaXMuX3N0YXJ0WCA9IDA7XG4gICAgdGhpcy5fc3RhcnRZID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFkgPSAwO1xuXG4gICAgdGhpcy5fcHJlU3RhcnRDaGVjayA9IHRoaXMuX3ByZVN0YXJ0Q2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUgPSB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblN0YXJ0ID0gdGhpcy5fb25TdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTW92ZSA9IHRoaXMuX29uTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2FuY2VsID0gdGhpcy5fb25DYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkVuZCA9IHRoaXMuX29uRW5kLmJpbmQodGhpcyk7XG5cbiAgICAvLyBBcHBseSBpbml0aWFsIGNzcyBwcm9wcy5cbiAgICB0aGlzLnNldENzc1Byb3BzKGNzc1Byb3BzKTtcblxuICAgIC8vIElmIHRvdWNoIGFjdGlvbiB3YXMgbm90IHByb3ZpZGVkIHdpdGggaW5pdGlhbCBjc3MgcHJvcHMgbGV0J3MgYXNzdW1lIGl0J3NcbiAgICAvLyBhdXRvLlxuICAgIGlmICghdGhpcy5fdG91Y2hBY3Rpb24pIHtcbiAgICAgIHRoaXMuc2V0VG91Y2hBY3Rpb24odGFEZWZhdWx0VmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgbmF0aXZlIGxpbmsvaW1hZ2UgZHJhZ2dpbmcgZm9yIHRoZSBpdGVtIGFuZCBpdCdzIGFuY2VzdG9ycy5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG5cbiAgICAvLyBMaXN0ZW4gdG8gc3RhcnQgZXZlbnQuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX2V2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcblxuICAgIC8vIElmIHdlIGhhdmUgdG91Y2ggZXZlbnRzLCBidXQgbm8gcG9pbnRlciBldmVudHMgd2UgbmVlZCB0byBhbHNvIGxpc3RlbiBmb3JcbiAgICAvLyBtb3VzZSBldmVudHMgaW4gYWRkaXRpb24gdG8gdG91Y2ggZXZlbnRzIGZvciBkZXZpY2VzIHdoaWNoIHN1cHBvcnQgYm90aFxuICAgIC8vIG1vdXNlIGFuZCB0b3VjaCBpbnRlcmFjdGlvbi5cbiAgICBpZiAoaGFzVG91Y2hFdmVudHMgJiYgIWhhc1BvaW50ZXJFdmVudHMgJiYgIWhhc01zUG9pbnRlckV2ZW50cykge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX21vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90ZWN0ZWQgcHJvcGVydGllc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBEcmFnZ2VyLl9wb2ludGVyRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAncG9pbnRlcmRvd24nLFxuICAgIG1vdmU6ICdwb2ludGVybW92ZScsXG4gICAgY2FuY2VsOiAncG9pbnRlcmNhbmNlbCcsXG4gICAgZW5kOiAncG9pbnRlcnVwJ1xuICB9O1xuXG4gIERyYWdnZXIuX21zUG9pbnRlckV2ZW50cyA9IHtcbiAgICBzdGFydDogJ01TUG9pbnRlckRvd24nLFxuICAgIG1vdmU6ICdNU1BvaW50ZXJNb3ZlJyxcbiAgICBjYW5jZWw6ICdNU1BvaW50ZXJDYW5jZWwnLFxuICAgIGVuZDogJ01TUG9pbnRlclVwJ1xuICB9O1xuXG4gIERyYWdnZXIuX3RvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgY2FuY2VsOiAndG91Y2hjYW5jZWwnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9O1xuXG4gIERyYWdnZXIuX21vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBjYW5jZWw6ICcnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fZXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChoYXNQb2ludGVyRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fcG9pbnRlckV2ZW50cztcbiAgICBpZiAoaGFzTXNQb2ludGVyRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fbXNQb2ludGVyRXZlbnRzO1xuICAgIGlmIChoYXNUb3VjaEV2ZW50cykgcmV0dXJuIERyYWdnZXIuX3RvdWNoRXZlbnRzO1xuICAgIHJldHVybiBEcmFnZ2VyLl9tb3VzZUV2ZW50cztcbiAgfSkoKTtcblxuICBEcmFnZ2VyLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuICBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMgPSBbXTtcblxuICAvKipcbiAgICogUHJvdGVjdGVkIHN0YXRpYyBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCAmJiBlLmNhbmNlbGFibGUgIT09IGZhbHNlKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgRHJhZ2dlci5fYWN0aXZhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIGluZGV4ID0gRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA+IC0xKSByZXR1cm47XG5cbiAgICBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMubW92ZSwgaW5zdGFuY2UuX29uTW92ZSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMuY2FuY2VsLCBpbnN0YW5jZS5fb25DYW5jZWwpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub24oZXZlbnRzLmVuZCwgaW5zdGFuY2UuX29uRW5kKTtcblxuICAgIGlmIChEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBEcmFnZ2VyLl9iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIERyYWdnZXIuX2RlYWN0aXZhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIGluZGV4ID0gRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5tb3ZlLCBpbnN0YW5jZS5fb25Nb3ZlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9mZihldmVudHMuY2FuY2VsLCBpbnN0YW5jZS5fb25DYW5jZWwpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5lbmQsIGluc3RhbmNlLl9vbkVuZCk7XG5cbiAgICBpZiAoIURyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5sZW5ndGgpIHtcbiAgICAgIERyYWdnZXIuX3VuYmluZExpc3RlbmVycygpO1xuICAgIH1cbiAgfTtcblxuICBEcmFnZ2VyLl9iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZSwgRHJhZ2dlci5fb25Nb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5lbmQsIERyYWdnZXIuX29uRW5kLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGV2ZW50cy5jYW5jZWwgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLmNhbmNlbCwgRHJhZ2dlci5fb25DYW5jZWwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gIH07XG5cbiAgRHJhZ2dlci5fdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZSwgRHJhZ2dlci5fb25Nb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5lbmQsIERyYWdnZXIuX29uRW5kLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGV2ZW50cy5jYW5jZWwgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLmNhbmNlbCwgRHJhZ2dlci5fb25DYW5jZWwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gIH07XG5cbiAgRHJhZ2dlci5fZ2V0RXZlbnRQb2ludGVySWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIElmIHdlIGhhdmUgcG9pbnRlciBpZCBhdmFpbGFibGUgbGV0J3MgdXNlIGl0LlxuICAgIGlmICh0eXBlb2YgZXZlbnQucG9pbnRlcklkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGV2ZW50LnBvaW50ZXJJZDtcbiAgICB9XG5cbiAgICAvLyBGb3IgdG91Y2ggZXZlbnRzIGxldCdzIGdldCB0aGUgZmlyc3QgY2hhbmdlZCB0b3VjaCdzIGlkZW50aWZpZXIuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyIDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgbW91c2Uvb3RoZXIgZXZlbnRzIGxldCdzIHByb3ZpZGUgYSBzdGF0aWMgaWQuXG4gICAgcmV0dXJuIDE7XG4gIH07XG5cbiAgRHJhZ2dlci5fZ2V0VG91Y2hCeUlkID0gZnVuY3Rpb24oZXZlbnQsIGlkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIHBvaW50ZXIgZXZlbnQgcmV0dXJuIHRoZSB3aG9sZSBldmVudCBpZiB0aGVyZSdzIGEgbWF0Y2gsIGFuZFxuICAgIC8vIG51bGwgb3RoZXJ3aXNlLlxuICAgIGlmICh0eXBlb2YgZXZlbnQucG9pbnRlcklkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGV2ZW50LnBvaW50ZXJJZCA9PT0gaWQgPyBldmVudCA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yIHRvdWNoIGV2ZW50cyBsZXQncyBjaGVjayBpZiB0aGVyZSdzIGEgY2hhbmdlZCB0b3VjaCBvYmplY3QgdGhhdCBtYXRjaGVzXG4gICAgLy8gdGhlIHBvaW50ZXJJZCBpbiB3aGljaCBjYXNlIHJldHVybiB0aGUgdG91Y2ggb2JqZWN0LlxuICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciBtb3VzZS9vdGhlciBldmVudHMgbGV0J3MgYXNzdW1lIHRoZXJlJ3Mgb25seSBvbmUgcG9pbnRlciBhbmQganVzdFxuICAgIC8vIHJldHVybiB0aGUgZXZlbnQuXG4gICAgcmV0dXJuIGV2ZW50O1xuICB9O1xuXG4gIERyYWdnZXIuX29uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLmVtaXQoZXZlbnRzLm1vdmUsIGUpO1xuICB9O1xuXG4gIERyYWdnZXIuX29uQ2FuY2VsID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMuY2FuY2VsLCBlKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9vbkVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLmVtaXQoZXZlbnRzLmVuZCwgZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogUmVzZXQgY3VycmVudCBkcmFnIG9wZXJhdGlvbiAoaWYgYW55KS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHRoaXMuX3BvaW50ZXJJZCA9IG51bGw7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gMDtcbiAgICB0aGlzLl9zdGFydFggPSAwO1xuICAgIHRoaXMuX3N0YXJ0WSA9IDA7XG4gICAgdGhpcy5fY3VycmVudFggPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gMDtcbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LFxuICAgICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLFxuICAgICAgbGlzdGVuZXJPcHRpb25zXG4gICAgKTtcblxuICAgIERyYWdnZXIuX2RlYWN0aXZhdGVJbnN0YW5jZSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY3VzdG9tIGRyYWdnZXIgZXZlbnQgZnJvbSBhIHJhdyBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqIEByZXR1cm5zIHtEcmFnZ2VyRXZlbnR9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fY3JlYXRlRXZlbnQgPSBmdW5jdGlvbih0eXBlLCBlKSB7XG4gICAgdmFyIHRvdWNoID0gdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpO1xuICAgIHJldHVybiB7XG4gICAgICAvLyBIYW1tZXIuanMgY29tcGF0aWJpbGl0eSBpbnRlcmZhY2UuXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgc3JjRXZlbnQ6IGUsXG4gICAgICBkaXN0YW5jZTogdGhpcy5nZXREaXN0YW5jZSgpLFxuICAgICAgZGVsdGFYOiB0aGlzLmdldERlbHRhWCgpLFxuICAgICAgZGVsdGFZOiB0aGlzLmdldERlbHRhWSgpLFxuICAgICAgZGVsdGFUaW1lOiB0eXBlID09PSBldmVudHMuc3RhcnQgPyAwIDogdGhpcy5nZXREZWx0YVRpbWUoKSxcbiAgICAgIGlzRmlyc3Q6IHR5cGUgPT09IGV2ZW50cy5zdGFydCxcbiAgICAgIGlzRmluYWw6IHR5cGUgPT09IGV2ZW50cy5lbmQgfHwgdHlwZSA9PT0gZXZlbnRzLmNhbmNlbCxcbiAgICAgIC8vIFBhcnRpYWwgVG91Y2ggQVBJIGludGVyZmFjZS5cbiAgICAgIGlkZW50aWZpZXI6IHRoaXMuX3BvaW50ZXJJZCxcbiAgICAgIHNjcmVlblg6IHRvdWNoLnNjcmVlblgsXG4gICAgICBzY3JlZW5ZOiB0b3VjaC5zY3JlZW5ZLFxuICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXG4gICAgICBwYWdlWDogdG91Y2gucGFnZVgsXG4gICAgICBwYWdlWTogdG91Y2gucGFnZVksXG4gICAgICB0YXJnZXQ6IHRvdWNoLnRhcmdldFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtaXQgYSByYXcgZXZlbnQgYXMgZHJhZ2dlciBldmVudCBpbnRlcm5hbGx5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9lbWl0ID0gZnVuY3Rpb24odHlwZSwgZSkge1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCh0eXBlLCB0aGlzLl9jcmVhdGVFdmVudCh0eXBlLCBlKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIHRoZSBwcm92aWRlZCBldmVudCBpcyBhIFBvaW50ZXJFdmVudCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiBpdCBpZiBpdCBoYXNcbiAgICogdGhlIHNhbWUgcG9pbnRlcklkIGFzIHRoZSBpbnN0YW5jZS4gSWYgdGhlIHByb3ZpZGVkIGV2ZW50IGlzIGEgVG91Y2hFdmVudFxuICAgKiB0aGlzIG1ldGhvZCB3aWxsIHRyeSB0byBsb29rIGZvciBhIFRvdWNoIGluc3RhbmNlIGluIHRoZSBjaGFuZ2VkVG91Y2hlcyB0aGF0XG4gICAqIGhhcyBhbiBpZGVudGlmaWVyIG1hdGNoaW5nIHRoaXMgaW5zdGFuY2UncyBwb2ludGVySWQuIElmIHRoZSBwcm92aWRlZCBldmVudFxuICAgKiBpcyBhIE1vdXNlRXZlbnQgKG9yIGp1c3QgYW55IG90aGVyIGV2ZW50IHRoYW4gUG9pbnRlckV2ZW50IG9yIFRvdWNoRXZlbnQpXG4gICAqIGl0IHdpbGwgYmUgcmV0dXJuZWQgaW1tZWRpYXRlbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX1cbiAgICogQHJldHVybnMgez8oVG91Y2h8UG9pbnRlckV2ZW50fE1vdXNlRXZlbnQpfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2dldFRyYWNrZWRUb3VjaCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5fcG9pbnRlcklkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERyYWdnZXIuX2dldFRvdWNoQnlJZChlLCB0aGlzLl9wb2ludGVySWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQSBwcmUtaGFuZGxlciBmb3Igc3RhcnQgZXZlbnQgdGhhdCBjaGVja3MgaWYgd2UgY2FuIHN0YXJ0IGRyYWdnaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9wcmVTdGFydENoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIG5vdCBiZWluZyBkcmFnZ2VkIGN1cnJlbnRseS5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKCkpIHJldHVybjtcblxuICAgIC8vIFNwZWNpYWwgY2FuY2VsYWJsZSBjaGVjayBmb3IgQW5kcm9pZCB0byBwcmV2ZW50IGRyYWcgcHJvY2VkdXJlIGZyb21cbiAgICAvLyBzdGFydGluZyBpZiBuYXRpdmUgc2Nyb2xsaW5nIGlzIGluIHByb2dyZXNzLiBQYXJ0IDEuXG4gICAgaWYgKGlzQW5kcm9pZCAmJiBlLmNhbmNlbGFibGUgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAvLyBNYWtlIHN1cmUgbGVmdCBidXR0b24gaXMgcHJlc3NlZCBvbiBtb3VzZS5cbiAgICBpZiAoZS5idXR0b24pIHJldHVybjtcblxuICAgIC8vIEdldCAoYW5kIHNldCkgcG9pbnRlciBpZC5cbiAgICB0aGlzLl9wb2ludGVySWQgPSBEcmFnZ2VyLl9nZXRFdmVudFBvaW50ZXJJZChlKTtcbiAgICBpZiAodGhpcy5fcG9pbnRlcklkID09PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyBTdG9yZSB0aGUgc3RhcnQgZXZlbnQgYW5kIHRyaWdnZXIgc3RhcnQgKGFzeW5jIG9yIHN5bmMpLiBQb2ludGVyIGV2ZW50c1xuICAgIC8vIGFyZSBlbWl0dGVkIGJlZm9yZSB0b3VjaCBldmVudHMgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYm90aCBvZiB0aGVtLiBBbmRcbiAgICAvLyBpZiB5b3UgdHJ5IHRvIG1vdmUgYW4gZWxlbWVudCBiZWZvcmUgYHRvdWNoc3RhcnRgIGlzIGVtaXR0ZWQgdGhlIHBvaW50ZXJcbiAgICAvLyBldmVudHMgZm9yIHRoYXQgZWxlbWVudCB3aWxsIGJlIGNhbmNlbGVkLiBUaGUgZml4IGlzIHRvIGRlbGF5IHRoZSBlbWl0dGVkXG4gICAgLy8gcG9pbnRlciBldmVudHMgaW4gc3VjaCBhIHNjZW5hcmlvIGJ5IG9uZSBmcmFtZSBzbyB0aGF0IGB0b3VjaHN0YXJ0YCBoYXNcbiAgICAvLyB0aW1lIHRvIGJlIGVtaXR0ZWQgYmVmb3JlIHRoZSBlbGVtZW50IGlzIChwb3RlbnRpYWxseSkgbW92ZWQuXG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IGU7XG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzICYmIChoYXNQb2ludGVyRXZlbnRzIHx8IGhhc01zUG9pbnRlckV2ZW50cykpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FuY2VsYWJsZSBjaGVjayBmb3IgQW5kcm9pZCB0byBwcmV2ZW50IGRyYWcgcHJvY2VkdXJlIGZyb21cbiAgICAgIC8vIHN0YXJ0aW5nIGlmIG5hdGl2ZSBzY3JvbGxpbmcgaXMgaW4gcHJvZ3Jlc3MuIFBhcnQgMi5cbiAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LFxuICAgICAgICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSxcbiAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJhZih0aGlzLl9vblN0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25TdGFydCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWJvcnQgc3RhcnQgZXZlbnQgaWYgaXQgdHVybnMgb3V0IHRvIGJlIG5vbi1jYW5jZWxhYmxlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9hYm9ydE5vbkNhbmNlbGFibGUgPSBmdW5jdGlvbihlKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUsXG4gICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuX3N0YXJ0RXZlbnQgJiYgZS5jYW5jZWxhYmxlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIGRyYWcgcHJvY2VkdXJlIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vblN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9zdGFydEV2ZW50O1xuICAgIGlmICghZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuXG4gICAgLy8gU2V0IHVwIGluaXQgZGF0YSBhbmQgZW1pdCBzdGFydCBldmVudC5cbiAgICB0aGlzLl9zdGFydFggPSB0aGlzLl9jdXJyZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy5fc3RhcnRZID0gdGhpcy5fY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fZW1pdChldmVudHMuc3RhcnQsIGUpO1xuICAgIERyYWdnZXIuX2FjdGl2YXRlSW5zdGFuY2UodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIG1vdmUgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY3VycmVudFggPSB0b3VjaC5jbGllbnRYO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5tb3ZlLCBlKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgbW92ZSBjYW5jZWwgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uQ2FuY2VsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICghdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpKSByZXR1cm47XG5cbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5jYW5jZWwsIGUpO1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIGVuZCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25FbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLl9nZXRUcmFja2VkVG91Y2goZSkpIHJldHVybjtcblxuICAgIHRoaXMuX2VtaXQoZXZlbnRzLmVuZCwgZSk7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgYmVpbmcgZHJhZ2dlZCBhdCB0aGUgbW9tZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRlcklkICE9PSBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgZWxlbWVudCdzIHRvdWNoLWFjdGlvbiBDU1MgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuc2V0VG91Y2hBY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIFN0b3JlIHVubW9kaWZpZWQgdG91Y2ggYWN0aW9uIHZhbHVlICh3ZSB0cnVzdCB1c2VyIGlucHV0IGhlcmUpLlxuICAgIHRoaXMuX3RvdWNoQWN0aW9uID0gdmFsdWU7XG5cbiAgICAvLyBTZXQgdG91Y2gtYWN0aW9uIHN0eWxlLlxuICAgIGlmICh0YVByb3BQcmVmaXhlZCkge1xuICAgICAgdGhpcy5fY3NzUHJvcHNbdGFQcm9wUHJlZml4ZWRdID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3RhUHJvcFByZWZpeGVkXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgYW4gdW5zdXBwb3J0ZWQgdG91Y2gtYWN0aW9uIHZhbHVlIGxldCdzIGFkZCBhIHNwZWNpYWwgbGlzdGVuZXJcbiAgICAvLyB0aGF0IHByZXZlbnRzIGRlZmF1bHQgYWN0aW9uIG9uIHRvdWNoIHN0YXJ0IGV2ZW50LiBBIGRpcnR5IGhhY2ssIGJ1dCBiZXN0XG4gICAgLy8gd2UgY2FuIGRvIGZvciBub3cuIFRoZSBvdGhlciBvcHRpb25zIHdvdWxkIGJlIHRvIHNvbWVob3cgcG9seWZpbGwgdGhlXG4gICAgLy8gdW5zdXBwb3J0ZWQgdG91Y2ggYWN0aW9uIGJlaGF2aW9yIHdpdGggY3VzdG9tIGhldXJpc3RpY3Mgd2hpY2ggc291bmRzIGxpa2VcbiAgICAvLyBhIGNhbiBvZiB3b3Jtcy5cbiAgICBpZiAoaGFzVG91Y2hFdmVudHMpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCwgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlW3RhUHJvcFByZWZpeGVkXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGVsZW1lbnQncyBDU1MgcHJvcGVydGllcy4gQWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBjYW1lbCBjYXNlZCBzdHlsZVxuICAgKiBwcm9wcyB3aXRoIHZhbHVlIHBhaXJzIGFzIGl0J3MgZmlyc3QgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbbmV3UHJvcHNdXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5zZXRDc3NQcm9wcyA9IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgaWYgKCFuZXdQcm9wcykgcmV0dXJuO1xuXG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX2Nzc1Byb3BzO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgcHJvcDtcbiAgICB2YXIgcHJlZml4ZWRQcm9wO1xuXG4gICAgLy8gUmVzZXQgY3VycmVudCBwcm9wcy5cbiAgICBmb3IgKHByb3AgaW4gY3VycmVudFByb3BzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gY3VycmVudFByb3BzW3Byb3BdO1xuICAgICAgZGVsZXRlIGN1cnJlbnRQcm9wc1twcm9wXTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbmV3IHByb3BzLlxuICAgIGZvciAocHJvcCBpbiBuZXdQcm9wcykge1xuICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSB2YWx1ZSBmb3IgdGhlIHByb3AuXG4gICAgICBpZiAoIW5ld1Byb3BzW3Byb3BdKSBjb250aW51ZTtcblxuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdG91Y2gtYWN0aW9uLlxuICAgICAgaWYgKHByb3AgPT09IHRhUHJvcCkge1xuICAgICAgICB0aGlzLnNldFRvdWNoQWN0aW9uKG5ld1Byb3BzW3Byb3BdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBwcmVmaXhlZCBwcm9wIGFuZCBza2lwIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAgcHJlZml4ZWRQcm9wID0gZ2V0UHJlZml4ZWRQcm9wTmFtZShlbGVtZW50LnN0eWxlLCBwcm9wKTtcbiAgICAgIGlmICghcHJlZml4ZWRQcm9wKSBjb250aW51ZTtcblxuICAgICAgLy8gU3RvcmUgdGhlIHByb3AgYW5kIGFkZCB0aGUgc3R5bGUuXG4gICAgICBjdXJyZW50UHJvcHNbcHJlZml4ZWRQcm9wXSA9ICcnO1xuICAgICAgZWxlbWVudC5zdHlsZVtwcmVmaXhlZFByb3BdID0gbmV3UHJvcHNbcHJvcF07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgcG9pbnRlciBoYXMgbW92ZWQgb24geC1heGlzIGZyb20gc3RhcnQgcG9zaXRpb24sIGluIHBpeGVscy5cbiAgICogUG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIG1vdmVtZW50IGZyb20gbGVmdCB0byByaWdodC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhWCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50WCAtIHRoaXMuX3N0YXJ0WDtcbiAgfTtcblxuICAvKipcbiAgICogSG93IG11Y2ggdGhlIHBvaW50ZXIgaGFzIG1vdmVkIG9uIHktYXhpcyBmcm9tIHN0YXJ0IHBvc2l0aW9uLCBpbiBwaXhlbHMuXG4gICAqIFBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBtb3ZlbWVudCBmcm9tIHRvcCB0byBib3R0b20uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREZWx0YVkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFkgLSB0aGlzLl9zdGFydFk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgKGluIHBpeGVscykgaGFzIHBvaW50ZXIgbW92ZWQgZnJvbSBzdGFydCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHggPSB0aGlzLmdldERlbHRhWCgpO1xuICAgIHZhciB5ID0gdGhpcy5nZXREZWx0YVkoKTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbG9uZyBoYXMgcG9pbnRlciBiZWVuIGRyYWdnZWQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREZWx0YVRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lID8gRGF0ZS5ub3coKSAtIHRoaXMuX3N0YXJ0VGltZSA6IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICogICAtICdzdGFydCcsICdtb3ZlJywgJ2NhbmNlbCcgb3IgJ2VuZCcuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICogICAtICdzdGFydCcsICdtb3ZlJywgJ2NhbmNlbCcgb3IgJ2VuZCcuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudHMsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCB1bmJpbmQgYWxsIGRyYWcgZXZlbnQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBldmVudHMgPSBEcmFnZ2VyLl9ldmVudHM7XG5cbiAgICAvLyBSZXNldCBkYXRhIGFuZCBkZWFjdGl2YXRlIHRoZSBpbnN0YW5jZS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gRGVzdHJveSBlbWl0dGVyLlxuICAgIHRoaXMuX2VtaXR0ZXIuZGVzdHJveSgpO1xuXG4gICAgLy8gVW5iaW5kIGV2ZW50IGhhbmRsZXJzLlxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERyYWdnZXIuX21vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG5cbiAgICAvLyBSZXNldCBzdHlsZXMuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLl9jc3NQcm9wcykge1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHRoaXMuX2Nzc1Byb3BzW3Byb3BdO1xuICAgICAgZGVsZXRlIHRoaXMuX2Nzc1Byb3BzW3Byb3BdO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGRhdGEuXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBNYXJrIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgdGlja2VyIHN5c3RlbSBmb3IgaGFuZGxpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXMgaW4gYW4gZWZmaWNpZW50IHdheS5cbiAgICogQ29udGFpbnMgYSByZWFkIHF1ZXVlIGFuZCBhIHdyaXRlIHF1ZXVlIHRoYXQgYXJlIHByb2Nlc3NlZCBvbiB0aGUgbmV4dFxuICAgKiBhbmltYXRpb24gZnJhbWUgd2hlbiBuZWVkZWQuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gVGlja2VyKCkge1xuICAgIHRoaXMuX25leHRTdGVwID0gbnVsbDtcblxuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5fcmVhZHMgPSB7fTtcbiAgICB0aGlzLl93cml0ZXMgPSB7fTtcblxuICAgIHRoaXMuX2JhdGNoID0gW107XG4gICAgdGhpcy5fYmF0Y2hSZWFkcyA9IHt9O1xuICAgIHRoaXMuX2JhdGNoV3JpdGVzID0ge307XG5cbiAgICB0aGlzLl9zdGVwID0gdGhpcy5fc3RlcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVGlja2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihpZCwgcmVhZE9wZXJhdGlvbiwgd3JpdGVPcGVyYXRpb24sIGlzUHJpb3JpdGl6ZWQpIHtcbiAgICAvLyBGaXJzdCwgbGV0J3MgY2hlY2sgaWYgYW4gaXRlbSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgcXVldWVzIHdpdGggdGhlIHNhbWUgaWRcbiAgICAvLyBhbmQgaWYgc28gLT4gcmVtb3ZlIGl0LlxuICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLl9xdWV1ZS5pbmRleE9mKGlkKTtcbiAgICBpZiAoY3VycmVudEluZGV4ID4gLTEpIHRoaXMuX3F1ZXVlW2N1cnJlbnRJbmRleF0gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBBZGQgZW50cnkuXG4gICAgaXNQcmlvcml0aXplZCA/IHRoaXMuX3F1ZXVlLnVuc2hpZnQoaWQpIDogdGhpcy5fcXVldWUucHVzaChpZCk7XG4gICAgdGhpcy5fcmVhZHNbaWRdID0gcmVhZE9wZXJhdGlvbjtcbiAgICB0aGlzLl93cml0ZXNbaWRdID0gd3JpdGVPcGVyYXRpb247XG5cbiAgICAvLyBGaW5hbGx5LCBsZXQncyBraWNrLXN0YXJ0IHRoZSBuZXh0IHRpY2sgaWYgaXQgaXMgbm90IHJ1bm5pbmcgeWV0LlxuICAgIGlmICghdGhpcy5fbmV4dFN0ZXApIHRoaXMuX25leHRTdGVwID0gcmFmKHRoaXMuX3N0ZXApO1xuICB9O1xuXG4gIFRpY2tlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5fcXVldWUuaW5kZXhPZihpZCk7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9xdWV1ZVtjdXJyZW50SW5kZXhdID0gdW5kZWZpbmVkO1xuICAgICAgZGVsZXRlIHRoaXMuX3JlYWRzW2lkXTtcbiAgICAgIGRlbGV0ZSB0aGlzLl93cml0ZXNbaWRdO1xuICAgIH1cbiAgfTtcblxuICBUaWNrZXIucHJvdG90eXBlLl9zdGVwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHJlYWRzID0gdGhpcy5fcmVhZHM7XG4gICAgdmFyIHdyaXRlcyA9IHRoaXMuX3dyaXRlcztcbiAgICB2YXIgYmF0Y2ggPSB0aGlzLl9iYXRjaDtcbiAgICB2YXIgYmF0Y2hSZWFkcyA9IHRoaXMuX2JhdGNoUmVhZHM7XG4gICAgdmFyIGJhdGNoV3JpdGVzID0gdGhpcy5fYmF0Y2hXcml0ZXM7XG4gICAgdmFyIGxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgaWQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZXNldCB0aWNrZXIuXG4gICAgdGhpcy5fbmV4dFN0ZXAgPSBudWxsO1xuXG4gICAgLy8gU2V0dXAgcXVldWVzIGFuZCBjYWxsYmFjayBwbGFjZWhvbGRlcnMuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZCA9IHF1ZXVlW2ldO1xuICAgICAgaWYgKCFpZCkgY29udGludWU7XG5cbiAgICAgIGJhdGNoLnB1c2goaWQpO1xuXG4gICAgICBiYXRjaFJlYWRzW2lkXSA9IHJlYWRzW2lkXTtcbiAgICAgIGRlbGV0ZSByZWFkc1tpZF07XG5cbiAgICAgIGJhdGNoV3JpdGVzW2lkXSA9IHdyaXRlc1tpZF07XG4gICAgICBkZWxldGUgd3JpdGVzW2lkXTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBxdWV1ZS5cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgLy8gUHJvY2VzcyByZWFkIGNhbGxiYWNrcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkID0gYmF0Y2hbaV07XG4gICAgICBpZiAoYmF0Y2hSZWFkc1tpZF0pIHtcbiAgICAgICAgYmF0Y2hSZWFkc1tpZF0oKTtcbiAgICAgICAgZGVsZXRlIGJhdGNoUmVhZHNbaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb2Nlc3Mgd3JpdGUgY2FsbGJhY2tzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWQgPSBiYXRjaFtpXTtcbiAgICAgIGlmIChiYXRjaFdyaXRlc1tpZF0pIHtcbiAgICAgICAgYmF0Y2hXcml0ZXNbaWRdKCk7XG4gICAgICAgIGRlbGV0ZSBiYXRjaFdyaXRlc1tpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgYmF0Y2guXG4gICAgYmF0Y2gubGVuZ3RoID0gMDtcblxuICAgIC8vIFJlc3RhcnQgdGhlIHRpY2tlciBpZiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9uZXh0U3RlcCAmJiBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX25leHRTdGVwID0gcmFmKHRoaXMuX3N0ZXApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdGlja2VyID0gbmV3IFRpY2tlcigpO1xuXG4gIHZhciBsYXlvdXRUaWNrID0gJ2xheW91dCc7XG4gIHZhciB2aXNpYmlsaXR5VGljayA9ICd2aXNpYmlsaXR5JztcbiAgdmFyIG1vdmVUaWNrID0gJ21vdmUnO1xuICB2YXIgc2Nyb2xsVGljayA9ICdzY3JvbGwnO1xuICB2YXIgcGxhY2Vob2xkZXJUaWNrID0gJ3BsYWNlaG9sZGVyJztcblxuICBmdW5jdGlvbiBhZGRMYXlvdXRUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgbGF5b3V0VGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbExheW91dFRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgbGF5b3V0VGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRWaXNpYmlsaXR5VGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHZpc2liaWxpdHlUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsVmlzaWJpbGl0eVRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgdmlzaWJpbGl0eVRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTW92ZVRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBtb3ZlVGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbE1vdmVUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIG1vdmVUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbFRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBzY3JvbGxUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2ssIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsU2Nyb2xsVGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBzY3JvbGxUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFBsYWNlaG9sZGVyVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHBsYWNlaG9sZGVyVGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBwbGFjZWhvbGRlclRpY2spO1xuICB9XG5cbiAgdmFyIEVsUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gIHZhciBtYXRjaGVzRm4gPVxuICAgIEVsUHJvdG8ubWF0Y2hlcyB8fFxuICAgIEVsUHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBlbGVtZW50IG1hdGNoZXMgYSBDU1Mgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gZWxlbWVudE1hdGNoZXMoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNGbi5jYWxsKGVsLCBzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNsYXNzIHRvIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFlbGVtZW50TWF0Y2hlcyhlbGVtZW50LCAnLicgKyBjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcEFycmF5ID0gW107XG4gIHZhciBudW1iZXJUeXBlID0gJ251bWJlcic7XG5cbiAgLyoqXG4gICAqIEluc2VydCBhbiBpdGVtIG9yIGFuIGFycmF5IG9mIGl0ZW1zIHRvIGFycmF5IHRvIGEgc3BlY2lmaWVkIGluZGV4LiBNdXRhdGVzXG4gICAqIHRoZSBhcnJheS4gVGhlIGluZGV4IGNhbiBiZSBuZWdhdGl2ZSBpbiB3aGljaCBjYXNlIHRoZSBpdGVtcyB3aWxsIGJlIGFkZGVkXG4gICAqIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXg9LTFdXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheUluc2VydChhcnJheSwgaXRlbXMsIGluZGV4KSB7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSB0eXBlb2YgaW5kZXggPT09IG51bWJlclR5cGUgPyBpbmRleCA6IC0xO1xuICAgIGlmIChzdGFydEluZGV4IDwgMCkgc3RhcnRJbmRleCA9IGFycmF5Lmxlbmd0aCAtIHN0YXJ0SW5kZXggKyAxO1xuXG4gICAgYXJyYXkuc3BsaWNlLmFwcGx5KGFycmF5LCB0ZW1wQXJyYXkuY29uY2F0KHN0YXJ0SW5kZXgsIDAsIGl0ZW1zKSk7XG4gICAgdGVtcEFycmF5Lmxlbmd0aCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIGFycmF5IGluZGV4LiBCYXNpY2FsbHkgdGhpcyBmdW5jdGlvbiBtYWtlcyBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkXG4gICAqIGFycmF5IGluZGV4IGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgYWxzbyB0cmFuc2Zvcm1zXG4gICAqIG5lZ2F0aXZlIGluZGV4IHRvIHRoZSBtYXRjaGluZyBwb3NpdGl2ZSBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNNaWdyYXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGluZGV4LCBpc01pZ3JhdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIG1heEluZGV4ID0gTWF0aC5tYXgoMCwgaXNNaWdyYXRpb24gPyBsZW5ndGggOiBsZW5ndGggLSAxKTtcbiAgICByZXR1cm4gaW5kZXggPiBtYXhJbmRleCA/IG1heEluZGV4IDogaW5kZXggPCAwID8gTWF0aC5tYXgobWF4SW5kZXggKyBpbmRleCArIDEsIDApIDogaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhcnJheSBpdGVtIHRvIGFub3RoZXIgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgb2YgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIG1vdmVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSB3aGVyZSB0aGUgaXRlbSBzaG91bGQgYmUgbW92ZWQgdG8uXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheU1vdmUoYXJyYXksIGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXJyYXkgaGFzIHR3byBvciBtb3JlIGl0ZW1zLlxuICAgIGlmIChhcnJheS5sZW5ndGggPCAyKSByZXR1cm47XG5cbiAgICAvLyBOb3JtYWxpemUgdGhlIGluZGljZXMuXG4gICAgdmFyIGZyb20gPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCBmcm9tSW5kZXgpO1xuICAgIHZhciB0byA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIHRvSW5kZXgpO1xuXG4gICAgLy8gQWRkIHRhcmdldCBpdGVtIHRvIHRoZSBuZXcgcG9zaXRpb24uXG4gICAgaWYgKGZyb20gIT09IHRvKSB7XG4gICAgICBhcnJheS5zcGxpY2UodG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN3YXAgYXJyYXkgaXRlbXMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgaXRlbSB0aGF0IHdpbGwgYmUgc3dhcHBlZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpdGhJbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgb3RoZXIgaXRlbSB0aGF0IHdpbGwgYmUgc3dhcHBlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5U3dhcChhcnJheSwgaW5kZXgsIHdpdGhJbmRleCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXJyYXkgaGFzIHR3byBvciBtb3JlIGl0ZW1zLlxuICAgIGlmIChhcnJheS5sZW5ndGggPCAyKSByZXR1cm47XG5cbiAgICAvLyBOb3JtYWxpemUgdGhlIGluZGljZXMuXG4gICAgdmFyIGluZGV4QSA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGluZGV4KTtcbiAgICB2YXIgaW5kZXhCID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgd2l0aEluZGV4KTtcbiAgICB2YXIgdGVtcDtcblxuICAgIC8vIFN3YXAgdGhlIGl0ZW1zLlxuICAgIGlmIChpbmRleEEgIT09IGluZGV4Qikge1xuICAgICAgdGVtcCA9IGFycmF5W2luZGV4QV07XG4gICAgICBhcnJheVtpbmRleEFdID0gYXJyYXlbaW5kZXhCXTtcbiAgICAgIGFycmF5W2luZGV4Ql0gPSB0ZW1wO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhY3Rpb25DYW5jZWwgPSAnY2FuY2VsJztcbiAgdmFyIGFjdGlvbkZpbmlzaCA9ICdmaW5pc2gnO1xuICB2YXIgZGVib3VuY2VUaWNrID0gJ2RlYm91bmNlJztcbiAgdmFyIGRlYm91bmNlSWQgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gICAqIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgICogTiBtaWxsaXNlY29uZHMuIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBhY2NlcHRzIG9uZSBhcmd1bWVudCB3aGljaCwgd2hlblxuICAgKiBiZWluZyBcImZpbmlzaFwiLCBjYWxscyB0aGUgZGVib3VuY2UgZnVuY3Rpb24gaW1tZWRpYXRlbHkgaWYgaXQgaXMgY3VycmVudGx5XG4gICAqIHdhaXRpbmcgdG8gYmUgY2FsbGVkLCBhbmQgd2hlbiBiZWluZyBcImNhbmNlbFwiIGNhbmNlbHMgdGhlIGN1cnJlbnRseSBxdWV1ZWRcbiAgICogZnVuY3Rpb24gY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZGVib3VuY2UoZm4sIHdhaXQpIHtcbiAgICB2YXIgdGltZW91dDtcbiAgICB2YXIgdGlja2VySWQgPSArK2RlYm91bmNlSWQgKyBkZWJvdW5jZVRpY2s7XG5cbiAgICBpZiAod2FpdCA+IDApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpY2tlci5jYW5jZWwodGlja2VySWQpO1xuICAgICAgICAgIGlmIChhY3Rpb24gPT09IGFjdGlvbkZpbmlzaCkgZm4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24gIT09IGFjdGlvbkNhbmNlbCAmJiBhY3Rpb24gIT09IGFjdGlvbkZpbmlzaCkge1xuICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aWNrZXIuYWRkKHRpY2tlcklkLCBmbiwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgd2FpdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgaWYgKGFjdGlvbiAhPT0gYWN0aW9uQ2FuY2VsKSBmbigpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGVsZW1lbnQgaXMgdHJhbnNmb3JtZWQsIGZhbHNlIGlmIG5vdC4gSW4gcHJhY3RpY2UgdGhlXG4gICAqIGVsZW1lbnQncyBkaXNwbGF5IHZhbHVlIG11c3QgYmUgYW55dGhpbmcgZWxzZSB0aGFuIFwibm9uZVwiIG9yIFwiaW5saW5lXCIgYXNcbiAgICogd2VsbCBhcyBoYXZlIGEgdmFsaWQgdHJhbnNmb3JtIHZhbHVlIGFwcGxpZWQgaW4gb3JkZXIgdG8gYmUgY291bnRlZCBhcyBhXG4gICAqIHRyYW5zZm9ybWVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEJvcnJvd2VkIGZyb20gTWV6ciAodjAuNi4xKTpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3JhbW8vbWV6ci9ibG9iLzAuNi4xL21lenIuanMjTDY2MVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNUcmFuc2Zvcm1lZChlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IGdldFN0eWxlKGVsZW1lbnQsICd0cmFuc2Zvcm0nKTtcbiAgICBpZiAoIXRyYW5zZm9ybSB8fCB0cmFuc2Zvcm0gPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGRpc3BsYXkgPSBnZXRTdHlsZShlbGVtZW50LCAnZGlzcGxheScpO1xuICAgIGlmIChkaXNwbGF5ID09PSAnaW5saW5lJyB8fCBkaXNwbGF5ID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYWJzb2x1dGUgcG9zaXRpb25lZCBlbGVtZW50J3MgY29udGFpbmluZyBibG9jaywgd2hpY2ggaXNcbiAgICogY29uc2lkZXJlZCB0byBiZSB0aGUgY2xvc2VzdCBhbmNlc3RvciBlbGVtZW50IHRoYXQgdGhlIHRhcmdldCBlbGVtZW50J3NcbiAgICogcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8uIERpc2NsYWltZXI6IHRoaXMgb25seSB3b3JrcyBhcyBpbnRlbmRlZCBmb3JcbiAgICogYWJzb2x1dGUgcG9zaXRpb25lZCBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbmNsdWRlU2VsZj1mYWxzZV1cbiAgICogICAtIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSB0aGUgY29udGFpbmluZyBibG9jayBjaGVja2luZyBpcyBzdGFydGVkIGZyb21cbiAgICogICAgIHRoZSBwcm92aWRlZCBlbGVtZW50LiBPdGhlcndpc2UgdGhlIGNoZWNraW5nIGlzIHN0YXJ0ZWQgZnJvbSB0aGVcbiAgICogICAgIHByb3ZpZGVkIGVsZW1lbnQncyBwYXJlbnQgZWxlbWVudC5cbiAgICogQHJldHVybnMgeyhEb2N1bWVudHxFbGVtZW50KX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50LCBpbmNsdWRlU2VsZikge1xuICAgIC8vIEFzIGxvbmcgYXMgdGhlIGNvbnRhaW5pbmcgYmxvY2sgaXMgYW4gZWxlbWVudCwgc3RhdGljIGFuZCBub3RcbiAgICAvLyB0cmFuc2Zvcm1lZCwgdHJ5IHRvIGdldCB0aGUgZWxlbWVudCdzIHBhcmVudCBlbGVtZW50IGFuZCBmYWxsYmFjayB0b1xuICAgIC8vIGRvY3VtZW50LiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzcmFtby9tZXpyL2Jsb2IvMC42LjEvbWV6ci5qcyNMMzM5XG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciByZXQgPSAoaW5jbHVkZVNlbGYgPyBlbGVtZW50IDogZWxlbWVudC5wYXJlbnRFbGVtZW50KSB8fCBkb2N1bWVudDtcbiAgICB3aGlsZSAocmV0ICYmIHJldCAhPT0gZG9jdW1lbnQgJiYgZ2V0U3R5bGUocmV0LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiYgIWlzVHJhbnNmb3JtZWQocmV0KSkge1xuICAgICAgcmV0ID0gcmV0LnBhcmVudEVsZW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29tcHV0ZWQgdmFsdWUgb2YgYW4gZWxlbWVudCdzIHN0eWxlIHByb3BlcnR5IHRyYW5zZm9ybWVkIGludG9cbiAgICogYSBmbG9hdCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZUFzRmxvYXQoZWwsIHN0eWxlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZ2V0U3R5bGUoZWwsIHN0eWxlKSkgfHwgMDtcbiAgfVxuXG4gIHZhciBvZmZzZXRBID0ge307XG4gIHZhciBvZmZzZXRCID0ge307XG4gIHZhciBvZmZzZXREaWZmID0ge307XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQncyBkb2N1bWVudCBvZmZzZXQsIHdoaWNoIGluIHByYWN0aWNlIG1lYW5zIHRoZSB2ZXJ0aWNhbFxuICAgKiBhbmQgaG9yaXpvbnRhbCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBlbGVtZW50J3Mgbm9ydGh3ZXN0IGNvcm5lciBhbmQgdGhlXG4gICAqIGRvY3VtZW50J3Mgbm9ydGh3ZXN0IGNvcm5lci4gTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gYWx3YXlzIHJldHVybnMgdGhlIHNhbWVcbiAgICogb2JqZWN0IHNvIGJlIHN1cmUgdG8gcmVhZCB0aGUgZGF0YSBmcm9tIGl0IGluc3RlYWQgdXNpbmcgaXQgYXMgYSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7KERvY3VtZW50fEVsZW1lbnR8V2luZG93KX0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29mZnNldERhdGFdXG4gICAqICAgLSBPcHRpb25hbCBkYXRhIG9iamVjdCB3aGVyZSB0aGUgb2Zmc2V0IGRhdGEgd2lsbCBiZSBpbnNlcnRlZCB0by4gSWYgbm90XG4gICAqICAgICBwcm92aWRlZCBhIG5ldyBvYmplY3Qgd2lsbCBiZSBjcmVhdGVkIGZvciB0aGUgcmV0dXJuIGRhdGEuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXQoZWxlbWVudCwgb2Zmc2V0RGF0YSkge1xuICAgIHZhciByZXQgPSBvZmZzZXREYXRhIHx8IHt9O1xuICAgIHZhciByZWN0O1xuXG4gICAgLy8gU2V0IHVwIHJldHVybiBkYXRhLlxuICAgIHJldC5sZWZ0ID0gMDtcbiAgICByZXQudG9wID0gMDtcblxuICAgIC8vIERvY3VtZW50J3Mgb2Zmc2V0cyBhcmUgYWx3YXlzIDAuXG4gICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50KSByZXR1cm4gcmV0O1xuXG4gICAgLy8gQWRkIHZpZXdwb3J0IHNjcm9sbCBsZWZ0L3RvcCB0byB0aGUgcmVzcGVjdGl2ZSBvZmZzZXRzLlxuICAgIHJldC5sZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IDA7XG4gICAgcmV0LnRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCAwO1xuXG4gICAgLy8gV2luZG93J3Mgb2Zmc2V0cyBhcmUgdGhlIHZpZXdwb3J0IHNjcm9sbCBsZWZ0L3RvcCB2YWx1ZXMuXG4gICAgaWYgKGVsZW1lbnQuc2VsZiA9PT0gd2luZG93LnNlbGYpIHJldHVybiByZXQ7XG5cbiAgICAvLyBBZGQgZWxlbWVudCdzIGNsaWVudCByZWN0cyB0byB0aGUgb2Zmc2V0cy5cbiAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXQubGVmdCArPSByZWN0LmxlZnQ7XG4gICAgcmV0LnRvcCArPSByZWN0LnRvcDtcblxuICAgIC8vIEV4Y2x1ZGUgZWxlbWVudCdzIGJvcmRlcnMgZnJvbSB0aGUgb2Zmc2V0LlxuICAgIHJldC5sZWZ0ICs9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLWxlZnQtd2lkdGgnKTtcbiAgICByZXQudG9wICs9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIG9mZnNldCBkaWZmZXJlbmNlIHR3byBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbUFcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbUJcbiAgICogQHBhcmFtIHtCb29sZWFufSBbY29tcGFyZUNvbnRhaW5pbmdCbG9ja3M9ZmFsc2VdXG4gICAqICAgLSBXaGVuIHRoaXMgaXMgc2V0IHRvIHRydWUgdGhlIGNvbnRhaW5pbmcgYmxvY2tzIG9mIHRoZSBwcm92aWRlZCBlbGVtZW50c1xuICAgKiAgICAgd2lsbCBiZSB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgZGlmZmVyZW5jZS4gT3RoZXJ3aXNlIHRoZSBwcm92aWRlZFxuICAgKiAgICAgZWxlbWVudHMgd2lsbCBiZSBjb21wYXJlZCBkaXJlY3RseS5cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldE9mZnNldERpZmYoZWxlbUEsIGVsZW1CLCBjb21wYXJlQ29udGFpbmluZ0Jsb2Nrcykge1xuICAgIG9mZnNldERpZmYubGVmdCA9IDA7XG4gICAgb2Zmc2V0RGlmZi50b3AgPSAwO1xuXG4gICAgLy8gSWYgZWxlbWVudHMgYXJlIHNhbWUgbGV0J3MgcmV0dXJuIGVhcmx5LlxuICAgIGlmIChlbGVtQSA9PT0gZWxlbUIpIHJldHVybiBvZmZzZXREaWZmO1xuXG4gICAgLy8gQ29tcGFyZSBjb250YWluaW5nIGJsb2NrcyBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKGNvbXBhcmVDb250YWluaW5nQmxvY2tzKSB7XG4gICAgICBlbGVtQSA9IGdldENvbnRhaW5pbmdCbG9jayhlbGVtQSwgdHJ1ZSk7XG4gICAgICBlbGVtQiA9IGdldENvbnRhaW5pbmdCbG9jayhlbGVtQiwgdHJ1ZSk7XG5cbiAgICAgIC8vIElmIGNvbnRhaW5pbmcgYmxvY2tzIGFyZSBpZGVudGljYWwsIGxldCdzIHJldHVybiBlYXJseS5cbiAgICAgIGlmIChlbGVtQSA9PT0gZWxlbUIpIHJldHVybiBvZmZzZXREaWZmO1xuICAgIH1cblxuICAgIC8vIEZpbmFsbHksIGxldCdzIGNhbGN1bGF0ZSB0aGUgb2Zmc2V0IGRpZmYuXG4gICAgZ2V0T2Zmc2V0KGVsZW1BLCBvZmZzZXRBKTtcbiAgICBnZXRPZmZzZXQoZWxlbUIsIG9mZnNldEIpO1xuICAgIG9mZnNldERpZmYubGVmdCA9IG9mZnNldEIubGVmdCAtIG9mZnNldEEubGVmdDtcbiAgICBvZmZzZXREaWZmLnRvcCA9IG9mZnNldEIudG9wIC0gb2Zmc2V0QS50b3A7XG5cbiAgICByZXR1cm4gb2Zmc2V0RGlmZjtcbiAgfVxuXG4gIHZhciBzdHlsZU92ZXJmbG93ID0gJ292ZXJmbG93JztcbiAgdmFyIHN0eWxlT3ZlcmZsb3dYID0gJ292ZXJmbG93LXgnO1xuICB2YXIgc3R5bGVPdmVyZmxvd1kgPSAnb3ZlcmZsb3cteSc7XG4gIHZhciBvdmVyZmxvd0F1dG8gPSAnYXV0byc7XG4gIHZhciBvdmVyZmxvd1Njcm9sbCA9ICdzY3JvbGwnO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIHNjcm9sbGFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWxlbWVudCkge1xuICAgIHZhciBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3cpO1xuICAgIGlmIChvdmVyZmxvdyA9PT0gb3ZlcmZsb3dBdXRvIHx8IG92ZXJmbG93ID09PSBvdmVyZmxvd1Njcm9sbCkgcmV0dXJuIHRydWU7XG5cbiAgICBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3dYKTtcbiAgICBpZiAob3ZlcmZsb3cgPT09IG92ZXJmbG93QXV0byB8fCBvdmVyZmxvdyA9PT0gb3ZlcmZsb3dTY3JvbGwpIHJldHVybiB0cnVlO1xuXG4gICAgb3ZlcmZsb3cgPSBnZXRTdHlsZShlbGVtZW50LCBzdHlsZU92ZXJmbG93WSk7XG4gICAgaWYgKG92ZXJmbG93ID09PSBvdmVyZmxvd0F1dG8gfHwgb3ZlcmZsb3cgPT09IG92ZXJmbG93U2Nyb2xsKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0IGVsZW1lbnQncyBhbmNlc3RvcnMgdGhhdCBhcmUgcG90ZW50aWFsbHkgc2Nyb2xsYWJsZSBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbmNsdWRlU2VsZj1mYWxzZV1cbiAgICogQHBhcmFtIHtBcnJheX0gW2RhdGFdXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFNjcm9sbGFibGVBbmNlc3RvcnMoZWxlbWVudCwgaW5jbHVkZVNlbGYsIGRhdGEpIHtcbiAgICB2YXIgcmV0ID0gZGF0YSB8fCBbXTtcbiAgICB2YXIgcGFyZW50ID0gaW5jbHVkZVNlbGYgPyBlbGVtZW50IDogZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgLy8gRmluZCBzY3JvbGwgcGFyZW50cy5cbiAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgIC8vIElmIGVsZW1lbnQgaXMgaW5zaWRlIFNoYWRvd0RPTSBsZXQncyBnZXQgaXQncyBob3N0IG5vZGUgZnJvbSB0aGUgcmVhbFxuICAgICAgLy8gRE9NIGFuZCBjb250aW51ZSBsb29waW5nLlxuICAgICAgaWYgKHBhcmVudC5nZXRSb290Tm9kZSAmJiBwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5nZXRSb290Tm9kZSgpLmhvc3Q7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBlbGVtZW50IGlzIHNjcm9sbGFibGUgbGV0J3MgYWRkIGl0IHRvIHRoZSBzY3JvbGxhYmxlIGxpc3QuXG4gICAgICBpZiAoaXNTY3JvbGxhYmxlKHBhcmVudCkpIHtcbiAgICAgICAgcmV0LnB1c2gocGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGFkZCB3aW5kb3cgdG8gdGhlIHJlc3VsdHMuXG4gICAgcmV0LnB1c2god2luZG93KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlVmFsdWUgPSB7fTtcbiAgdmFyIHRyYW5zZm9ybVN0eWxlJDIgPSAndHJhbnNmb3JtJztcbiAgdmFyIHRyYW5zZm9ybU5vbmUgPSAnbm9uZSc7XG4gIHZhciByeE1hdDNkID0gL15tYXRyaXgzZC87XG4gIHZhciByeE1hdFR4ID0gLyhbXixdKiwpezR9LztcbiAgdmFyIHJ4TWF0M2RUeCA9IC8oW14sXSosKXsxMn0vO1xuICB2YXIgcnhOZXh0SXRlbSA9IC9bXixdKiwvO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50J3MgY29tcHV0ZWQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZXMgYXMgYSBmbG9hdHMuXG4gICAqIFRoZSByZXR1cm5lZCBvYmplY3QgaXMgYWx3YXlzIHRoZSBzYW1lIG9iamVjdCBhbmQgdXBkYXRlZCBldmVyeSB0aW1lIHRoaXNcbiAgICogZnVuY3Rpb24gaXMgY2FsbGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWxlbWVudCkge1xuICAgIHRyYW5zbGF0ZVZhbHVlLnggPSAwO1xuICAgIHRyYW5zbGF0ZVZhbHVlLnkgPSAwO1xuXG4gICAgdmFyIHRyYW5zZm9ybSA9IGdldFN0eWxlKGVsZW1lbnQsIHRyYW5zZm9ybVN0eWxlJDIpO1xuICAgIGlmICghdHJhbnNmb3JtIHx8IHRyYW5zZm9ybSA9PT0gdHJhbnNmb3JtTm9uZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZVZhbHVlO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBzdHlsZSBjYW4gYmUgaW4gZWl0aGVyIG1hdHJpeDNkKC4uLikgb3IgbWF0cml4KC4uLikuXG4gICAgdmFyIGlzTWF0M2QgPSByeE1hdDNkLnRlc3QodHJhbnNmb3JtKTtcbiAgICB2YXIgdFggPSB0cmFuc2Zvcm0ucmVwbGFjZShpc01hdDNkID8gcnhNYXQzZFR4IDogcnhNYXRUeCwgJycpO1xuICAgIHZhciB0WSA9IHRYLnJlcGxhY2UocnhOZXh0SXRlbSwgJycpO1xuXG4gICAgdHJhbnNsYXRlVmFsdWUueCA9IHBhcnNlRmxvYXQodFgpIHx8IDA7XG4gICAgdHJhbnNsYXRlVmFsdWUueSA9IHBhcnNlRmxvYXQodFkpIHx8IDA7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRlVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgdmFsdWUgaW50byBDU1MgdHJhbnNmb3JtIHN0eWxlXG4gICAqIHByb3BlcnR5J3MgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUcmFuc2xhdGVTdHJpbmcoeCwgeSkge1xuICAgIHJldHVybiAndHJhbnNsYXRlWCgnICsgeCArICdweCkgdHJhbnNsYXRlWSgnICsgeSArICdweCknO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjbGFzcyBmcm9tIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnRNYXRjaGVzKGVsZW1lbnQsICcuJyArIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoJyAnICsgZWxlbWVudC5jbGFzc05hbWUgKyAnICcpXG4gICAgICAgICAgLnJlcGxhY2UoJyAnICsgY2xhc3NOYW1lICsgJyAnLCAnICcpXG4gICAgICAgICAgLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEcmFnIHN0YXJ0IHByZWRpY2F0ZSBzdGF0ZXMuXG4gIHZhciBzdGFydFByZWRpY2F0ZUluYWN0aXZlID0gMDtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUGVuZGluZyA9IDE7XG4gIHZhciBzdGFydFByZWRpY2F0ZVJlc29sdmVkID0gMjtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUmVqZWN0ZWQgPSAzO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvdWNoIGludGVyYWN0aW9uIHRvIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1EcmFnKGl0ZW0pIHtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2dyaWRJZCA9IGdyaWQuX2lkO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPSBmYWxzZTtcblxuICAgIC8vIFN0YXJ0IHByZWRpY2F0ZSBkYXRhLlxuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlID0gaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU3RhcnRQcmVkaWNhdGUpXG4gICAgICA/IHNldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZVxuICAgICAgOiBJdGVtRHJhZy5kZWZhdWx0U3RhcnRQcmVkaWNhdGU7XG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlSW5hY3RpdmU7XG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEYXRhIGZvciBkcmFnIHNvcnQgcHJlZGljYXRlIGhldXJpc3RpY3MuXG4gICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgdGhpcy5faFgxID0gMDtcbiAgICB0aGlzLl9oWDIgPSAwO1xuICAgIHRoaXMuX2hZMSA9IDA7XG4gICAgdGhpcy5faFkyID0gMDtcblxuICAgIC8vIFNldHVwIGl0ZW0ncyBpbml0aWFsIGRyYWcgZGF0YS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gQmluZCB0aGUgbWV0aG9kcyB0aGF0IG5lZWRzIGJpbmRpbmcuXG4gICAgdGhpcy5fcHJlU3RhcnRDaGVjayA9IHRoaXMuX3ByZVN0YXJ0Q2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVFbmRDaGVjayA9IHRoaXMuX3ByZUVuZENoZWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25TY3JvbGwgPSB0aGlzLl9vblNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZXBhcmVNb3ZlID0gdGhpcy5fcHJlcGFyZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9hcHBseU1vdmUgPSB0aGlzLl9hcHBseU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVwYXJlU2Nyb2xsID0gdGhpcy5fcHJlcGFyZVNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2FwcGx5U2Nyb2xsID0gdGhpcy5fYXBwbHlTY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9jaGVja092ZXJsYXAgPSB0aGlzLl9jaGVja092ZXJsYXAuYmluZCh0aGlzKTtcblxuICAgIC8vIENyZWF0ZSBkZWJvdW5jZSBvdmVybGFwIGNoZWNrZXIgZnVuY3Rpb24uXG4gICAgdmFyIHNvcnRJbnRlcnZhbCA9IHNldHRpbmdzLmRyYWdTb3J0SGV1cmlzdGljcy5zb3J0SW50ZXJ2YWw7XG4gICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UgPSBkZWJvdW5jZSh0aGlzLl9jaGVja092ZXJsYXAsIHNvcnRJbnRlcnZhbCk7XG5cbiAgICAvLyBJbml0IGRyYWdnZXIuXG4gICAgdGhpcy5fZHJhZ2dlciA9IG5ldyBEcmFnZ2VyKGVsZW1lbnQsIHNldHRpbmdzLmRyYWdDc3NQcm9wcyk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignc3RhcnQnLCB0aGlzLl9wcmVTdGFydENoZWNrKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdtb3ZlJywgdGhpcy5fcHJlU3RhcnRDaGVjayk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignY2FuY2VsJywgdGhpcy5fcHJlRW5kQ2hlY2spO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ2VuZCcsIHRoaXMuX3ByZUVuZENoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgc3RhdGljIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRyYWcgc3RhcnQgcHJlZGljYXRlIGhhbmRsZXIgdGhhdCBoYW5kbGVzIGFuY2hvciBlbGVtZW50c1xuICAgKiBncmFjZWZ1bGx5LiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoaXMgZnVuY3Rpb24gZGVmaW5lcyBpZiB0aGUgZHJhZyBpc1xuICAgKiBzdGFydGVkLCByZWplY3RlZCBvciBwZW5kaW5nLiBXaGVuIHRydWUgaXMgcmV0dXJuZWQgdGhlIGRyYWdnaW5nIGlzIHN0YXJ0ZWRcbiAgICogYW5kIHdoZW4gZmFsc2UgaXMgcmV0dXJuZWQgdGhlIGRyYWdnaW5nIGlzIHJlamVjdGVkLiBJZiBub3RoaW5nIGlzIHJldHVybmVkXG4gICAqIHRoZSBwcmVkaWNhdGUgd2lsbCBiZSBjYWxsZWQgYWdhaW4gb24gdGhlIG5leHQgZHJhZyBtb3ZlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqICAgLSBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCB3aGljaCBjYW4gYmUgdXNlZCB0byBwYXNzIHRoZSBwcmVkaWNhdGVcbiAgICogICAgIGl0J3Mgb3B0aW9ucyBtYW51YWxseS4gQnkgZGVmYXVsdCB0aGUgcHJlZGljYXRlIHJldHJpZXZlcyB0aGUgb3B0aW9uc1xuICAgKiAgICAgZnJvbSB0aGUgZ3JpZCdzIHNldHRpbmdzLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnLmRlZmF1bHRTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGl0ZW0sIGV2ZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGRyYWcgPSBpdGVtLl9kcmFnO1xuICAgIHZhciBwcmVkaWNhdGUgPSBkcmFnLl9zdGFydFByZWRpY2F0ZURhdGEgfHwgZHJhZy5fc2V0dXBTdGFydFByZWRpY2F0ZShvcHRpb25zKTtcblxuICAgIC8vIEZpbmFsIGV2ZW50IGxvZ2ljLiBBdCB0aGlzIHN0YWdlIHJldHVybiB2YWx1ZSBkb2VzIG5vdCBtYXR0ZXIgYW55bW9yZSxcbiAgICAvLyB0aGUgcHJlZGljYXRlIGlzIGVpdGhlciByZXNvbHZlZCBvciBpdCdzIG5vdCBhbmQgdGhlcmUncyBub3RoaW5nIHRvIGRvXG4gICAgLy8gYWJvdXQgaXQuIEhlcmUgd2UganVzdCByZXNldCBkYXRhIGFuZCBpZiB0aGUgaXRlbSBlbGVtZW50IGlzIGEgbGlua1xuICAgIC8vIHdlIGZvbGxvdyBpdCAoaWYgdGhlcmUgaGFzIG9ubHkgYmVlbiBzbGlnaHQgbW92ZW1lbnQpLlxuICAgIGlmIChldmVudC5pc0ZpbmFsKSB7XG4gICAgICBkcmFnLl9maW5pc2hTdGFydFByZWRpY2F0ZShldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmluZCBhbmQgc3RvcmUgdGhlIGhhbmRsZSBlbGVtZW50IHNvIHdlIGNhbiBjaGVjayBsYXRlciBvbiBpZiB0aGVcbiAgICAvLyBjdXJzb3IgaXMgd2l0aGluIHRoZSBoYW5kbGUuIElmIHdlIGhhdmUgYSBoYW5kbGUgc2VsZWN0b3IgbGV0J3MgZmluZFxuICAgIC8vIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnQuIE90aGVyd2lzZSBsZXQncyB1c2UgdGhlIGl0ZW0gZWxlbWVudCBhcyB0aGVcbiAgICAvLyBoYW5kbGUuXG4gICAgaWYgKCFwcmVkaWNhdGUuaGFuZGxlRWxlbWVudCkge1xuICAgICAgcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQgPSBkcmFnLl9nZXRTdGFydFByZWRpY2F0ZUhhbmRsZShldmVudCk7XG4gICAgICBpZiAoIXByZWRpY2F0ZS5oYW5kbGVFbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgZGVsYXkgaXMgZGVmaW5lZCBsZXQncyBrZWVwIHRyYWNrIG9mIHRoZSBsYXRlc3QgZXZlbnQgYW5kIGluaXRpYXRlXG4gICAgLy8gZGVsYXkgaWYgaXQgaGFzIG5vdCBiZWVuIGRvbmUgeWV0LlxuICAgIGlmIChwcmVkaWNhdGUuZGVsYXkpIHtcbiAgICAgIHByZWRpY2F0ZS5ldmVudCA9IGV2ZW50O1xuICAgICAgaWYgKCFwcmVkaWNhdGUuZGVsYXlUaW1lcikge1xuICAgICAgICBwcmVkaWNhdGUuZGVsYXlUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHByZWRpY2F0ZS5kZWxheSA9IDA7XG4gICAgICAgICAgaWYgKGRyYWcuX3Jlc29sdmVTdGFydFByZWRpY2F0ZShwcmVkaWNhdGUuZXZlbnQpKSB7XG4gICAgICAgICAgICBkcmFnLl9mb3JjZVJlc29sdmVTdGFydFByZWRpY2F0ZShwcmVkaWNhdGUuZXZlbnQpO1xuICAgICAgICAgICAgZHJhZy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgcHJlZGljYXRlLmRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZHJhZy5fcmVzb2x2ZVN0YXJ0UHJlZGljYXRlKGV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRGVmYXVsdCBkcmFnIHNvcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudGhyZXNob2xkPTUwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuYWN0aW9uPSdtb3ZlJ11cbiAgICogQHJldHVybnMgeyhCb29sZWFufERyYWdTb3J0Q29tbWFuZCl9XG4gICAqICAgLSBSZXR1cm5zIGZhbHNlIGlmIG5vIHZhbGlkIGluZGV4IHdhcyBmb3VuZC4gT3RoZXJ3aXNlIHJldHVybnMgZHJhZyBzb3J0XG4gICAqICAgICBjb21tYW5kLlxuICAgKi9cbiAgSXRlbURyYWcuZGVmYXVsdFNvcnRQcmVkaWNhdGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1SZWN0ID0ge307XG4gICAgdmFyIHRhcmdldFJlY3QgPSB7fTtcbiAgICB2YXIgcmV0dXJuRGF0YSA9IHt9O1xuICAgIHZhciByb290R3JpZEFycmF5ID0gW107XG5cbiAgICBmdW5jdGlvbiBnZXRUYXJnZXRHcmlkKGl0ZW0sIHJvb3RHcmlkLCB0aHJlc2hvbGQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBudWxsO1xuICAgICAgdmFyIGRyYWdTb3J0ID0gcm9vdEdyaWQuX3NldHRpbmdzLmRyYWdTb3J0O1xuICAgICAgdmFyIGJlc3RTY29yZSA9IC0xO1xuICAgICAgdmFyIGdyaWRTY29yZTtcbiAgICAgIHZhciBncmlkcztcbiAgICAgIHZhciBncmlkO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIEdldCBwb3RlbnRpYWwgdGFyZ2V0IGdyaWRzLlxuICAgICAgaWYgKGRyYWdTb3J0ID09PSB0cnVlKSB7XG4gICAgICAgIHJvb3RHcmlkQXJyYXlbMF0gPSByb290R3JpZDtcbiAgICAgICAgZ3JpZHMgPSByb290R3JpZEFycmF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZHMgPSBkcmFnU29ydC5jYWxsKHJvb3RHcmlkLCBpdGVtKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGFyZSBubyBncmlkcy5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShncmlkcykpIHJldHVybiB0YXJnZXQ7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgZ3JpZHMgYW5kIGdldCB0aGUgYmVzdCBtYXRjaC5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBncmlkID0gZ3JpZHNbaV07XG5cbiAgICAgICAgLy8gRmlsdGVyIG91dCBhbGwgZGVzdHJveWVkIGdyaWRzLlxuICAgICAgICBpZiAoZ3JpZC5faXNEZXN0cm95ZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIHRoZSBncmlkJ3Mgb2Zmc2V0cyBhbmQgZGltZW5zaW9ucyBzaW5jZSB0aGV5IG1pZ2h0XG4gICAgICAgIC8vIGhhdmUgY2hhbmdlZCAoZS5nIGR1cmluZyBzY3JvbGxpbmcpLlxuICAgICAgICBncmlkLl91cGRhdGVCb3VuZGluZ1JlY3QoKTtcblxuICAgICAgICAvLyBDaGVjayBob3cgbXVjaCBkcmFnZ2VkIGVsZW1lbnQgb3ZlcmxhcHMgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgICAgICB0YXJnZXRSZWN0LndpZHRoID0gZ3JpZC5fd2lkdGg7XG4gICAgICAgIHRhcmdldFJlY3QuaGVpZ2h0ID0gZ3JpZC5faGVpZ2h0O1xuICAgICAgICB0YXJnZXRSZWN0LmxlZnQgPSBncmlkLl9sZWZ0O1xuICAgICAgICB0YXJnZXRSZWN0LnRvcCA9IGdyaWQuX3RvcDtcbiAgICAgICAgZ3JpZFNjb3JlID0gZ2V0UmVjdE92ZXJsYXBTY29yZShpdGVtUmVjdCwgdGFyZ2V0UmVjdCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBncmlkIGlzIHRoZSBiZXN0IG1hdGNoIHNvIGZhci5cbiAgICAgICAgaWYgKGdyaWRTY29yZSA+IHRocmVzaG9sZCAmJiBncmlkU2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBncmlkU2NvcmU7XG4gICAgICAgICAgdGFyZ2V0ID0gZ3JpZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBbHdheXMgcmVzZXQgcm9vdCBncmlkIGFycmF5LlxuICAgICAgcm9vdEdyaWRBcnJheS5sZW5ndGggPSAwO1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihpdGVtLCBvcHRpb25zKSB7XG4gICAgICB2YXIgZHJhZyA9IGl0ZW0uX2RyYWc7XG4gICAgICB2YXIgcm9vdEdyaWQgPSBkcmFnLl9nZXRHcmlkKCk7XG5cbiAgICAgIC8vIEdldCBkcmFnIHNvcnQgcHJlZGljYXRlIHNldHRpbmdzLlxuICAgICAgdmFyIHNvcnRUaHJlc2hvbGQgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLnRocmVzaG9sZCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnRocmVzaG9sZCA6IDUwO1xuICAgICAgdmFyIHNvcnRBY3Rpb24gPSBvcHRpb25zICYmIG9wdGlvbnMuYWN0aW9uID09PSBhY3Rpb25Td2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG5cbiAgICAgIC8vIFBvcHVsYXRlIGl0ZW0gcmVjdCBkYXRhLlxuICAgICAgaXRlbVJlY3Qud2lkdGggPSBpdGVtLl93aWR0aDtcbiAgICAgIGl0ZW1SZWN0LmhlaWdodCA9IGl0ZW0uX2hlaWdodDtcbiAgICAgIGl0ZW1SZWN0LmxlZnQgPSBkcmFnLl9lbGVtZW50Q2xpZW50WDtcbiAgICAgIGl0ZW1SZWN0LnRvcCA9IGRyYWcuX2VsZW1lbnRDbGllbnRZO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHRhcmdldCBncmlkLlxuICAgICAgdmFyIGdyaWQgPSBnZXRUYXJnZXRHcmlkKGl0ZW0sIHJvb3RHcmlkLCBzb3J0VGhyZXNob2xkKTtcblxuICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlIGZvdW5kIG5vIGdyaWQgY29udGFpbmVyIGVsZW1lbnQgdGhhdCBvdmVybGFwcyB0aGVcbiAgICAgIC8vIGRyYWdnZWQgaXRlbSBlbm91Z2guXG4gICAgICBpZiAoIWdyaWQpIHJldHVybiBmYWxzZTtcblxuICAgICAgdmFyIGdyaWRPZmZzZXRMZWZ0ID0gMDtcbiAgICAgIHZhciBncmlkT2Zmc2V0VG9wID0gMDtcbiAgICAgIHZhciBtYXRjaFNjb3JlID0gLTE7XG4gICAgICB2YXIgbWF0Y2hJbmRleDtcbiAgICAgIHZhciBoYXNWYWxpZFRhcmdldHM7XG4gICAgICB2YXIgdGFyZ2V0O1xuICAgICAgdmFyIHNjb3JlO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIElmIGl0ZW0gaXMgbW92ZWQgd2l0aGluIGl0J3Mgb3JpZ2luYXRpbmcgZ3JpZCBhZGp1c3QgaXRlbSdzIGxlZnQgYW5kXG4gICAgICAvLyB0b3AgcHJvcHMuIE90aGVyd2lzZSBpZiBpdGVtIGlzIG1vdmVkIHRvL3dpdGhpbiBhbm90aGVyIGdyaWQgZ2V0IHRoZVxuICAgICAgLy8gY29udGFpbmVyIGVsZW1lbnQncyBvZmZzZXQgKGZyb20gdGhlIGVsZW1lbnQncyBjb250ZW50IGVkZ2UpLlxuICAgICAgaWYgKGdyaWQgPT09IHJvb3RHcmlkKSB7XG4gICAgICAgIGl0ZW1SZWN0LmxlZnQgPSBkcmFnLl9ncmlkWCArIGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgICAgIGl0ZW1SZWN0LnRvcCA9IGRyYWcuX2dyaWRZICsgaXRlbS5fbWFyZ2luVG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZC5fdXBkYXRlQm9yZGVycygxLCAwLCAxLCAwKTtcbiAgICAgICAgZ3JpZE9mZnNldExlZnQgPSBncmlkLl9sZWZ0ICsgZ3JpZC5fYm9yZGVyTGVmdDtcbiAgICAgICAgZ3JpZE9mZnNldFRvcCA9IGdyaWQuX3RvcCArIGdyaWQuX2JvcmRlclRvcDtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSB0YXJnZXQgZ3JpZCBpdGVtcyBhbmQgdHJ5IHRvIGZpbmQgdGhlIGJlc3QgbWF0Y2guXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZC5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0ID0gZ3JpZC5faXRlbXNbaV07XG5cbiAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpdGVtIGlzIG5vdCBhY3RpdmUgb3IgdGhlIHRhcmdldCBpdGVtIGlzIHRoZSBkcmFnZ2VkXG4gICAgICAgIC8vIGl0ZW0gbGV0J3Mgc2tpcCB0byB0aGUgbmV4dCBpdGVtLlxuICAgICAgICBpZiAoIXRhcmdldC5faXNBY3RpdmUgfHwgdGFyZ2V0ID09PSBpdGVtKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYXJrIHRoZSBncmlkIGFzIGhhdmluZyB2YWxpZCB0YXJnZXQgaXRlbXMuXG4gICAgICAgIGhhc1ZhbGlkVGFyZ2V0cyA9IHRydWU7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0YXJnZXQncyBvdmVybGFwIHNjb3JlIHdpdGggdGhlIGRyYWdnZWQgaXRlbS5cbiAgICAgICAgdGFyZ2V0UmVjdC53aWR0aCA9IHRhcmdldC5fd2lkdGg7XG4gICAgICAgIHRhcmdldFJlY3QuaGVpZ2h0ID0gdGFyZ2V0Ll9oZWlnaHQ7XG4gICAgICAgIHRhcmdldFJlY3QubGVmdCA9IHRhcmdldC5fbGVmdCArIHRhcmdldC5fbWFyZ2luTGVmdCArIGdyaWRPZmZzZXRMZWZ0O1xuICAgICAgICB0YXJnZXRSZWN0LnRvcCA9IHRhcmdldC5fdG9wICsgdGFyZ2V0Ll9tYXJnaW5Ub3AgKyBncmlkT2Zmc2V0VG9wO1xuICAgICAgICBzY29yZSA9IGdldFJlY3RPdmVybGFwU2NvcmUoaXRlbVJlY3QsIHRhcmdldFJlY3QpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBiZXN0IG1hdGNoIGluZGV4IGFuZCBzY29yZSBpZiB0aGUgdGFyZ2V0J3Mgb3ZlcmxhcCBzY29yZSB3aXRoXG4gICAgICAgIC8vIHRoZSBkcmFnZ2VkIGl0ZW0gaXMgaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgYmVzdCBtYXRjaCBzY29yZS5cbiAgICAgICAgaWYgKHNjb3JlID4gbWF0Y2hTY29yZSkge1xuICAgICAgICAgIG1hdGNoSW5kZXggPSBpO1xuICAgICAgICAgIG1hdGNoU2NvcmUgPSBzY29yZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyB2YWxpZCBtYXRjaCBhbmQgdGhlIGl0ZW0gaXMgYmVpbmcgbW92ZWQgaW50byBhbm90aGVyXG4gICAgICAvLyBncmlkLlxuICAgICAgaWYgKG1hdGNoU2NvcmUgPCBzb3J0VGhyZXNob2xkICYmIGl0ZW0uZ2V0R3JpZCgpICE9PSBncmlkKSB7XG4gICAgICAgIG1hdGNoSW5kZXggPSBoYXNWYWxpZFRhcmdldHMgPyAtMSA6IDA7XG4gICAgICAgIG1hdGNoU2NvcmUgPSBJbmZpbml0eTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGJlc3QgbWF0Y2ggb3ZlcmxhcHMgZW5vdWdoIHRvIGp1c3RpZnkgYSBwbGFjZW1lbnQgc3dpdGNoLlxuICAgICAgaWYgKG1hdGNoU2NvcmUgPj0gc29ydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5EYXRhLmdyaWQgPSBncmlkO1xuICAgICAgICByZXR1cm5EYXRhLmluZGV4ID0gbWF0Y2hJbmRleDtcbiAgICAgICAgcmV0dXJuRGF0YS5hY3Rpb24gPSBzb3J0QWN0aW9uO1xuICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFib3J0IGRyYWdnaW5nIGFuZCByZXNldCBkcmFnIGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbURyYWd9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG5cbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGJlaW5nIGRyb3BwZWQgaW50byBhbm90aGVyIGdyaWQsIGZpbmlzaCBpdCB1cCBhbmQgcmV0dXJuXG4gICAgLy8gaW1tZWRpYXRlbHkuXG4gICAgaWYgKHRoaXMuX2lzTWlncmF0aW5nKSB7XG4gICAgICB0aGlzLl9maW5pc2hNaWdyYXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBxdWV1ZWQgbW92ZSBhbmQgc2Nyb2xsIHRpY2tzLlxuICAgIGNhbmNlbE1vdmVUaWNrKGl0ZW0uX2lkKTtcbiAgICBjYW5jZWxTY3JvbGxUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFJlbW92ZSBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIHRoaXMuX3VuYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gQ2FuY2VsIG92ZXJsYXAgY2hlY2suXG4gICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoJ2NhbmNlbCcpO1xuXG4gICAgLy8gQXBwZW5kIGl0ZW0gZWxlbWVudCB0byB0aGUgY29udGFpbmVyIGlmIGl0J3Mgbm90IGl0J3MgY2hpbGQuIEFsc28gbWFrZVxuICAgIC8vIHN1cmUgdGhlIHRyYW5zbGF0ZSB2YWx1ZXMgYXJlIGFkanVzdGVkIHRvIGFjY291bnQgZm9yIHRoZSBET00gc2hpZnQuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gZ3JpZC5fZWxlbWVudCkge1xuICAgICAgZ3JpZC5fZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fZ3JpZFgsIHRoaXMuX2dyaWRZKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgZ3JpZC5fc2V0dGluZ3MuaXRlbURyYWdnaW5nQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgZHJhZyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtRHJhZ31cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9kcmFnZ2VyLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogR2V0IEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHJldHVybnMgez9HcmlkfVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9nZXRHcmlkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdyaWRJbnN0YW5jZXNbdGhpcy5fZ3JpZElkXSB8fCBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cC9yZXNldCBkcmFnIGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJcyBpdGVtIGJlaW5nIGRyYWdnZWQ/XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIC8vIFRoZSBkcmFnZ2VkIGl0ZW0ncyBjb250YWluZXIgZWxlbWVudC5cbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuXG4gICAgLy8gVGhlIGRyYWdnZWQgaXRlbSdzIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgdGhpcy5fY29udGFpbmluZ0Jsb2NrID0gbnVsbDtcblxuICAgIC8vIERyYWcvc2Nyb2xsIGV2ZW50IGRhdGEuXG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9zY3JvbGxFdmVudCA9IG51bGw7XG5cbiAgICAvLyBBbGwgdGhlIGVsZW1lbnRzIHdoaWNoIG5lZWQgdG8gYmUgbGlzdGVuZWQgZm9yIHNjcm9sbCBldmVudHMgZHVyaW5nXG4gICAgLy8gZHJhZ2dpbmcuXG4gICAgdGhpcy5fc2Nyb2xsZXJzID0gW107XG5cbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGVYL3RyYW5zbGF0ZVkgcG9zaXRpb24uXG4gICAgdGhpcy5fbGVmdCA9IDA7XG4gICAgdGhpcy5fdG9wID0gMDtcblxuICAgIC8vIERyYWdnZWQgZWxlbWVudCdzIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIHRoZSBncmlkLlxuICAgIHRoaXMuX2dyaWRYID0gMDtcbiAgICB0aGlzLl9ncmlkWSA9IDA7XG5cbiAgICAvLyBEcmFnZ2VkIGVsZW1lbnQncyBjdXJyZW50IG9mZnNldCBmcm9tIHdpbmRvdydzIG5vcnRod2VzdCBjb3JuZXIuIERvZXNcbiAgICAvLyBub3QgYWNjb3VudCBmb3IgZWxlbWVudCdzIG1hcmdpbnMuXG4gICAgdGhpcy5fZWxlbWVudENsaWVudFggPSAwO1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZID0gMDtcblxuICAgIC8vIE9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGRyYWdnZWQgZWxlbWVudCdzIHRlbXBvcmFyeSBkcmFnXG4gICAgLy8gY29udGFpbmVyIGFuZCBpdCdzIG9yaWdpbmFsIGNvbnRhaW5lci5cbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIHRvIGFsbCBzY3JvbGxhYmxlIGFuY2VzdG9yIGVsZW1lbnRzIG9mIHRoZVxuICAgKiBkcmFnZ2VkIGVsZW1lbnQgYW5kIHRoZSBkcmFnIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2JpbmRTY3JvbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IHRoaXMuX2dldEdyaWQoKS5fZWxlbWVudDtcbiAgICB2YXIgZHJhZ0NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB2YXIgc2Nyb2xsZXJzID0gdGhpcy5fc2Nyb2xsZXJzO1xuICAgIHZhciBncmlkU2Nyb2xsZXJzO1xuICAgIHZhciBpO1xuXG4gICAgLy8gR2V0IGRyYWdnZWQgZWxlbWVudCdzIHNjcm9sbGluZyBwYXJlbnRzLlxuICAgIHNjcm9sbGVycy5sZW5ndGggPSAwO1xuICAgIGdldFNjcm9sbGFibGVBbmNlc3RvcnModGhpcy5faXRlbS5fZWxlbWVudCwgZmFsc2UsIHNjcm9sbGVycyk7XG5cbiAgICAvLyBJZiBkcmFnIGNvbnRhaW5lciBpcyBkZWZpbmVkIGFuZCBpdCdzIG5vdCB0aGUgc2FtZSBlbGVtZW50IGFzIGdyaWRcbiAgICAvLyBjb250YWluZXIgdGhlbiB3ZSBuZWVkIHRvIGFkZCB0aGUgZ3JpZCBjb250YWluZXIgYW5kIGl0J3Mgc2Nyb2xsIHBhcmVudHNcbiAgICAvLyB0byB0aGUgZWxlbWVudHMgd2hpY2ggYXJlIGdvaW5nIHRvIGJlIGxpc3RlbmVyIGZvciBzY3JvbGwgZXZlbnRzLlxuICAgIGlmIChkcmFnQ29udGFpbmVyICE9PSBncmlkQ29udGFpbmVyKSB7XG4gICAgICBncmlkU2Nyb2xsZXJzID0gW107XG4gICAgICBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKGdyaWRDb250YWluZXIsIHRydWUsIGdyaWRTY3JvbGxlcnMpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRTY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjcm9sbGVycy5pbmRleE9mKGdyaWRTY3JvbGxlcnNbaV0pIDwgMCkge1xuICAgICAgICAgIHNjcm9sbGVycy5wdXNoKGdyaWRTY3JvbGxlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmluZCBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNjcm9sbGVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgY3VycmVudGx5IGJvdW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIGZyb20gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3JcbiAgICogZWxlbWVudHMgb2YgdGhlIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fdW5iaW5kU2Nyb2xsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcm9sbGVycyA9IHRoaXMuX3Njcm9sbGVycztcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNjcm9sbGVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsZXJzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGRlZmF1bHQgc3RhcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fc2V0dXBTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgY29uZmlnID0gb3B0aW9ucyB8fCB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZSB8fCAwO1xuICAgIHJldHVybiAodGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhID0ge1xuICAgICAgZGlzdGFuY2U6IE1hdGguYWJzKGNvbmZpZy5kaXN0YW5jZSkgfHwgMCxcbiAgICAgIGRlbGF5OiBNYXRoLm1heChjb25maWcuZGVsYXksIDApIHx8IDAsXG4gICAgICBoYW5kbGU6IHR5cGVvZiBjb25maWcuaGFuZGxlID09PSAnc3RyaW5nJyA/IGNvbmZpZy5oYW5kbGUgOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCBkZWZhdWx0IHN0YXJ0IHByZWRpY2F0ZSBoYW5kbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHs/SFRNTEVsZW1lbnR9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2dldFN0YXJ0UHJlZGljYXRlSGFuZGxlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcHJlZGljYXRlID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5faXRlbS5fZWxlbWVudDtcbiAgICB2YXIgaGFuZGxlRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBObyBoYW5kbGUsIG5vIGhhc3NsZSAtPiBsZXQncyB1c2UgdGhlIGl0ZW0gZWxlbWVudCBhcyB0aGUgaGFuZGxlLlxuICAgIGlmICghcHJlZGljYXRlLmhhbmRsZSkgcmV0dXJuIGhhbmRsZUVsZW1lbnQ7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNwZWNpZmljIHByZWRpY2F0ZSBoYW5kbGUgZGVmaW5lZCwgbGV0J3MgdHJ5IHRvIGdldCBpdC5cbiAgICBoYW5kbGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIHdoaWxlIChoYW5kbGVFbGVtZW50ICYmICFlbGVtZW50TWF0Y2hlcyhoYW5kbGVFbGVtZW50LCBwcmVkaWNhdGUuaGFuZGxlKSkge1xuICAgICAgaGFuZGxlRWxlbWVudCA9IGhhbmRsZUVsZW1lbnQgIT09IGVsZW1lbnQgPyBoYW5kbGVFbGVtZW50LnBhcmVudEVsZW1lbnQgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlRWxlbWVudCB8fCBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgY3VycmVudGx5IGJvdW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIGZyb20gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3JcbiAgICogZWxlbWVudHMgb2YgdGhlIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNvbHZlU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG5cbiAgICAvLyBJZiB0aGUgbW92ZWQgZGlzdGFuY2UgaXMgc21hbGxlciB0aGFuIHRoZSB0aHJlc2hvbGQgZGlzdGFuY2Ugb3IgdGhlcmUgaXNcbiAgICAvLyBzb21lIGRlbGF5IGxlZnQsIGlnbm9yZSB0aGlzIHByZWRpY2F0ZSBjeWNsZS5cbiAgICBpZiAoZXZlbnQuZGlzdGFuY2UgPCBwcmVkaWNhdGUuZGlzdGFuY2UgfHwgcHJlZGljYXRlLmRlbGF5KSByZXR1cm47XG5cbiAgICAvLyBHZXQgaGFuZGxlIHJlY3QgZGF0YS5cbiAgICB2YXIgaGFuZGxlUmVjdCA9IHByZWRpY2F0ZS5oYW5kbGVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBoYW5kbGVMZWZ0ID0gaGFuZGxlUmVjdC5sZWZ0ICsgKHdpbmRvdy5wYWdlWE9mZnNldCB8fCAwKTtcbiAgICB2YXIgaGFuZGxlVG9wID0gaGFuZGxlUmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IDApO1xuICAgIHZhciBoYW5kbGVXaWR0aCA9IGhhbmRsZVJlY3Qud2lkdGg7XG4gICAgdmFyIGhhbmRsZUhlaWdodCA9IGhhbmRsZVJlY3QuaGVpZ2h0O1xuXG4gICAgLy8gUmVzZXQgcHJlZGljYXRlIGRhdGEuXG4gICAgdGhpcy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuXG4gICAgLy8gSWYgdGhlIGN1cnNvciBpcyBzdGlsbCB3aXRoaW4gdGhlIGhhbmRsZSBsZXQncyBzdGFydCB0aGUgZHJhZy5cbiAgICByZXR1cm4gKFxuICAgICAgaGFuZGxlV2lkdGggJiZcbiAgICAgIGhhbmRsZUhlaWdodCAmJlxuICAgICAgZXZlbnQucGFnZVggPj0gaGFuZGxlTGVmdCAmJlxuICAgICAgZXZlbnQucGFnZVggPCBoYW5kbGVMZWZ0ICsgaGFuZGxlV2lkdGggJiZcbiAgICAgIGV2ZW50LnBhZ2VZID49IGhhbmRsZVRvcCAmJlxuICAgICAgZXZlbnQucGFnZVkgPCBoYW5kbGVUb3AgKyBoYW5kbGVIZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JjZWZ1bGx5IHJlc29sdmUgZHJhZyBzdGFydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2ZvcmNlUmVzb2x2ZVN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRGVzdHJveWVkICYmIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUGVuZGluZykge1xuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQ7XG4gICAgICB0aGlzLl9vblN0YXJ0KGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmFsaXplIHN0YXJ0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZmluaXNoU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5faXRlbS5fZWxlbWVudDtcblxuICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSBjbGljayAodmVyeSBzdWJqZWN0aXZlIGhldXJpc3RpY3MpLlxuICAgIHZhciBpc0NsaWNrID0gTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA8IDIgJiYgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSA8IDIgJiYgZXZlbnQuZGVsdGFUaW1lIDwgMjAwO1xuXG4gICAgLy8gUmVzZXQgcHJlZGljYXRlLlxuICAgIHRoaXMuX3Jlc2V0U3RhcnRQcmVkaWNhdGUoKTtcblxuICAgIC8vIElmIHRoZSBnZXN0dXJlIGNhbiBiZSBpbnRlcnByZXRlZCBhcyBjbGljayBsZXQncyB0cnkgdG8gb3BlbiB0aGUgZWxlbWVudCdzXG4gICAgLy8gaHJlZiB1cmwgKGlmIGl0IGlzIGFuIGFuY2hvciBlbGVtZW50KS5cbiAgICBpZiAoaXNDbGljaykgb3BlbkFuY2hvckhyZWYoZWxlbWVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IGRyYWcgc29ydCBoZXVyaXN0aWNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldEhldXJpc3RpY3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgIHRoaXMuX2hYMSA9IHRoaXMuX2hYMiA9IGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy5faFkxID0gdGhpcy5faFkyID0gZXZlbnQuY2xpZW50WTtcbiAgfTtcblxuICAvKipcbiAgICogUnVuIGhldXJpc3RpY3MgYW5kIHJldHVybiB0cnVlIGlmIG92ZXJsYXAgY2hlY2sgY2FuIGJlIHBlcmZvcm1lZCwgYW5kIGZhbHNlXG4gICAqIGlmIGl0IGNhbiBub3QuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9jaGVja0hldXJpc3RpY3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1NvcnRIZXVyaXN0aWNzO1xuICAgIHZhciBtaW5EaXN0ID0gc2V0dGluZ3MubWluRHJhZ0Rpc3RhbmNlO1xuXG4gICAgLy8gU2tpcCBoZXVyaXN0aWNzIGlmIG5vdCBuZWVkZWQuXG4gICAgaWYgKG1pbkRpc3QgPD0gMCkge1xuICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgeCA9IGV2ZW50LmNsaWVudFg7XG4gICAgdmFyIHkgPSBldmVudC5jbGllbnRZO1xuICAgIHZhciBkaWZmWCA9IHggLSB0aGlzLl9oWDI7XG4gICAgdmFyIGRpZmZZID0geSAtIHRoaXMuX2hZMjtcblxuICAgIC8vIElmIHdlIGNhbid0IGRvIHByb3BlciBib3VuY2UgYmFjayBjaGVjayBtYWtlIHN1cmUgdGhhdCB0aGUgYmxvY2tlZCBpbmRleFxuICAgIC8vIGlzIG5vdCBzZXQuXG4gICAgdmFyIGNhbkNoZWNrQm91bmNlQmFjayA9IG1pbkRpc3QgPiAzICYmIHNldHRpbmdzLm1pbkJvdW5jZUJhY2tBbmdsZSA+IDA7XG4gICAgaWYgKCFjYW5DaGVja0JvdW5jZUJhY2spIHtcbiAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiBtaW5EaXN0IHx8IE1hdGguYWJzKGRpZmZZKSA+IG1pbkRpc3QpIHtcbiAgICAgIC8vIFJlc2V0IGJsb2NrZWQgaW5kZXggaWYgYW5nbGUgY2hhbmdlZCBlbm91Z2guIFRoaXMgY2hlY2sgcmVxdWlyZXMgYVxuICAgICAgLy8gbWluaW11bSB2YWx1ZSBvZiAzIGZvciBtaW5EcmFnRGlzdGFuY2UgdG8gZnVuY3Rpb24gcHJvcGVybHkuXG4gICAgICBpZiAoY2FuQ2hlY2tCb3VuY2VCYWNrKSB7XG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoZGlmZlgsIGRpZmZZKTtcbiAgICAgICAgdmFyIHByZXZBbmdsZSA9IE1hdGguYXRhbjIodGhpcy5faFgyIC0gdGhpcy5faFgxLCB0aGlzLl9oWTIgLSB0aGlzLl9oWTEpO1xuICAgICAgICB2YXIgZGVsdGFBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5zaW4oYW5nbGUgLSBwcmV2QW5nbGUpLCBNYXRoLmNvcyhhbmdsZSAtIHByZXZBbmdsZSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFBbmdsZSkgPiBzZXR0aW5ncy5taW5Cb3VuY2VCYWNrQW5nbGUpIHtcbiAgICAgICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgcG9pbnRzLlxuICAgICAgdGhpcy5faFgxID0gdGhpcy5faFgyO1xuICAgICAgdGhpcy5faFkxID0gdGhpcy5faFkyO1xuICAgICAgdGhpcy5faFgyID0geDtcbiAgICAgIHRoaXMuX2hZMiA9IHk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzZXQgZm9yIGRlZmF1bHQgZHJhZyBzdGFydCBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzZXRTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG4gICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5kZWxheVRpbWVyKSB7XG4gICAgICAgIHByZWRpY2F0ZS5kZWxheVRpbWVyID0gd2luZG93LmNsZWFyVGltZW91dChwcmVkaWNhdGUuZGVsYXlUaW1lcik7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGEgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgKGR1cmluZyBkcmFnKSBpZiBhbiBpdGVtIGlzIG92ZXJsYXBwaW5nIG90aGVyIGl0ZW1zIGFuZCBiYXNlZCBvblxuICAgKiB0aGUgY29uZmlndXJhdGlvbiBsYXlvdXQgdGhlIGl0ZW1zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2NoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGN1cnJlbnRHcmlkO1xuICAgIHZhciBjdXJyZW50SW5kZXg7XG4gICAgdmFyIHRhcmdldEdyaWQ7XG4gICAgdmFyIHRhcmdldEluZGV4O1xuICAgIHZhciBzb3J0QWN0aW9uO1xuICAgIHZhciBpc01pZ3JhdGlvbjtcblxuICAgIC8vIEdldCBvdmVybGFwIGNoZWNrIHJlc3VsdC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU29ydFByZWRpY2F0ZSkpIHtcbiAgICAgIHJlc3VsdCA9IHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKGl0ZW0sIHRoaXMuX2RyYWdFdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IEl0ZW1EcmFnLmRlZmF1bHRTb3J0UHJlZGljYXRlKGl0ZW0sIHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKTtcbiAgICB9XG5cbiAgICAvLyBMZXQncyBtYWtlIHN1cmUgdGhlIHJlc3VsdCBvYmplY3QgaGFzIGEgdmFsaWQgaW5kZXggYmVmb3JlIGdvaW5nIGZ1cnRoZXIuXG4gICAgaWYgKCFyZXN1bHQgfHwgdHlwZW9mIHJlc3VsdC5pbmRleCAhPT0gJ251bWJlcicpIHJldHVybjtcblxuICAgIGN1cnJlbnRHcmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdGFyZ2V0R3JpZCA9IHJlc3VsdC5ncmlkIHx8IGN1cnJlbnRHcmlkO1xuICAgIGlzTWlncmF0aW9uID0gY3VycmVudEdyaWQgIT09IHRhcmdldEdyaWQ7XG4gICAgY3VycmVudEluZGV4ID0gY3VycmVudEdyaWQuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdGFyZ2V0SW5kZXggPSBub3JtYWxpemVBcnJheUluZGV4KHRhcmdldEdyaWQuX2l0ZW1zLCByZXN1bHQuaW5kZXgsIGlzTWlncmF0aW9uKTtcbiAgICBzb3J0QWN0aW9uID0gcmVzdWx0LmFjdGlvbiA9PT0gYWN0aW9uU3dhcCA/IGFjdGlvblN3YXAgOiBhY3Rpb25Nb3ZlO1xuXG4gICAgLy8gUHJldmVudCBwb3NpdGlvbiBib3VuY2UuXG4gICAgaWYgKCFpc01pZ3JhdGlvbiAmJiB0YXJnZXRJbmRleCA9PT0gdGhpcy5faEJsb2NrZWRJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIHdhcyBtb3ZlZCB3aXRoaW4gaXQncyBjdXJyZW50IGdyaWQuXG4gICAgaWYgKCFpc01pZ3JhdGlvbikge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSB0YXJnZXQgaW5kZXggaXMgbm90IHRoZSBjdXJyZW50IGluZGV4LlxuICAgICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IGN1cnJlbnRJbmRleDtcblxuICAgICAgICAvLyBEbyB0aGUgc29ydC5cbiAgICAgICAgKHNvcnRBY3Rpb24gPT09IGFjdGlvblN3YXAgPyBhcnJheVN3YXAgOiBhcnJheU1vdmUpKFxuICAgICAgICAgIGN1cnJlbnRHcmlkLl9pdGVtcyxcbiAgICAgICAgICBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdGFyZ2V0SW5kZXhcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBFbWl0IG1vdmUgZXZlbnQuXG4gICAgICAgIGlmIChjdXJyZW50R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50TW92ZSkpIHtcbiAgICAgICAgICBjdXJyZW50R3JpZC5fZW1pdChldmVudE1vdmUsIHtcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4LFxuICAgICAgICAgICAgYWN0aW9uOiBzb3J0QWN0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXlvdXQgdGhlIGdyaWQuXG4gICAgICAgIGN1cnJlbnRHcmlkLmxheW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIHdhcyBtb3ZlZCB0byBhbm90aGVyIGdyaWQuXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcblxuICAgICAgLy8gRW1pdCBiZWZvcmVTZW5kIGV2ZW50LlxuICAgICAgaWYgKGN1cnJlbnRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVTZW5kKSkge1xuICAgICAgICBjdXJyZW50R3JpZC5fZW1pdChldmVudEJlZm9yZVNlbmQsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgYmVmb3JlUmVjZWl2ZSBldmVudC5cbiAgICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVSZWNlaXZlKSkge1xuICAgICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50QmVmb3JlUmVjZWl2ZSwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGl0ZW0ncyBncmlkIGlkIHJlZmVyZW5jZS5cbiAgICAgIGl0ZW0uX2dyaWRJZCA9IHRhcmdldEdyaWQuX2lkO1xuXG4gICAgICAvLyBVcGRhdGUgZHJhZyBpbnN0YW5jZSdzIG1pZ3JhdGluZyBpbmRpY2F0b3IuXG4gICAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGl0ZW0uX2dyaWRJZCAhPT0gdGhpcy5fZ3JpZElkO1xuXG4gICAgICAvLyBNb3ZlIGl0ZW0gaW5zdGFuY2UgZnJvbSBjdXJyZW50IGdyaWQgdG8gdGFyZ2V0IGdyaWQuXG4gICAgICBjdXJyZW50R3JpZC5faXRlbXMuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XG4gICAgICBhcnJheUluc2VydCh0YXJnZXRHcmlkLl9pdGVtcywgaXRlbSwgdGFyZ2V0SW5kZXgpO1xuXG4gICAgICAvLyBTZXQgc29ydCBkYXRhIGFzIG51bGwsIHdoaWNoIGlzIGFuIGluZGljYXRvciBmb3IgdGhlIGl0ZW0gY29tcGFyaXNvblxuICAgICAgLy8gZnVuY3Rpb24gdGhhdCB0aGUgc29ydCBkYXRhIG9mIHRoaXMgc3BlY2lmaWMgaXRlbSBzaG91bGQgYmUgZmV0Y2hlZFxuICAgICAgLy8gbGF6aWx5LlxuICAgICAgaXRlbS5fc29ydERhdGEgPSBudWxsO1xuXG4gICAgICAvLyBFbWl0IHNlbmQgZXZlbnQuXG4gICAgICBpZiAoY3VycmVudEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFNlbmQpKSB7XG4gICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50U2VuZCwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCByZWNlaXZlIGV2ZW50LlxuICAgICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFJlY2VpdmUpKSB7XG4gICAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRSZWNlaXZlLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBMYXlvdXQgYm90aCBncmlkcy5cbiAgICAgIGN1cnJlbnRHcmlkLmxheW91dCgpO1xuICAgICAgdGFyZ2V0R3JpZC5sYXlvdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIGl0ZW0gaXMgZHJhZ2dlZCBpbnRvIGFub3RoZXIgZ3JpZCwgZmluaXNoIHRoZSBtaWdyYXRpb24gcHJvY2Vzc1xuICAgKiBncmFjZWZ1bGx5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2ZpbmlzaE1pZ3JhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBpc0FjdGl2ZSA9IGl0ZW0uX2lzQWN0aXZlO1xuICAgIHZhciB0YXJnZXRHcmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHRhcmdldEdyaWRFbGVtZW50ID0gdGFyZ2V0R3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdGFyZ2V0U2V0dGluZ3MgPSB0YXJnZXRHcmlkLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVyID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0NvbnRhaW5lciB8fCB0YXJnZXRHcmlkRWxlbWVudDtcbiAgICB2YXIgY3VycmVudFNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgY3VycmVudENvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB2YXIgdHJhbnNsYXRlO1xuICAgIHZhciBvZmZzZXREaWZmO1xuXG4gICAgLy8gRGVzdHJveSBjdXJyZW50IGRyYWcuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIHNldCB0aGUgbWlncmF0aW5nIGZsYWcgdG9cbiAgICAvLyBmYWxzZSBmaXJzdCwgYmVjYXVzZSBvdGhlcndpc2Ugd2UgY3JlYXRlIGFuIGluZmluaXRlIGxvb3AgYmV0d2VlbiB0aGlzXG4gICAgLy8gYW5kIHRoZSBkcmFnLnN0b3AoKSBtZXRob2QuXG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSBjdXJyZW50IGNsYXNzbmFtZXMuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGN1cnJlbnRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gQWRkIG5ldyBjbGFzc25hbWVzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHRhcmdldFNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgaXNBY3RpdmUgPyB0YXJnZXRTZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzIDogdGFyZ2V0U2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIE1vdmUgdGhlIGl0ZW0gaW5zaWRlIHRoZSB0YXJnZXQgY29udGFpbmVyIGlmIGl0J3MgZGlmZmVyZW50IHRoYW4gdGhlXG4gICAgLy8gY3VycmVudCBjb250YWluZXIuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYoY3VycmVudENvbnRhaW5lciwgdGFyZ2V0Q29udGFpbmVyLCB0cnVlKTtcbiAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgIHRyYW5zbGF0ZS54IC09IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRyYW5zbGF0ZS55IC09IG9mZnNldERpZmYudG9wO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpdGVtJ3MgY2FjaGVkIGRpbWVuc2lvbnMgYW5kIHNvcnQgZGF0YS5cbiAgICBpdGVtLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIGl0ZW0uX3JlZnJlc2hTb3J0RGF0YSgpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBvZmZzZXQgZGlmZmVyZW5jZSBiZXR3ZWVuIHRhcmdldCdzIGRyYWcgY29udGFpbmVyIChpZiBhbnkpXG4gICAgLy8gYW5kIGFjdHVhbCBncmlkIGNvbnRhaW5lciBlbGVtZW50LiBXZSBzYXZlIGl0IGxhdGVyIGZvciB0aGUgcmVsZWFzZVxuICAgIC8vIHByb2Nlc3MuXG4gICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYodGFyZ2V0Q29udGFpbmVyLCB0YXJnZXRHcmlkRWxlbWVudCwgdHJ1ZSk7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlggPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcblxuICAgIC8vIFJlY3JlYXRlIGl0ZW0ncyBkcmFnIGhhbmRsZXIuXG4gICAgaXRlbS5fZHJhZyA9IHRhcmdldFNldHRpbmdzLmRyYWdFbmFibGVkID8gbmV3IEl0ZW1EcmFnKGl0ZW0pIDogbnVsbDtcblxuICAgIC8vIEFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gZWxlbWVudCBpZiBpdCB3YXMgbW92ZWQgZnJvbSBhIGNvbnRhaW5lclxuICAgIC8vIHRvIGFub3RoZXIuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGUueCwgdHJhbnNsYXRlLnkpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjaGlsZCBlbGVtZW50J3Mgc3R5bGVzIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBzdGF0ZS5cbiAgICBpdGVtLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCBpc0FjdGl2ZSA/IHRhcmdldFNldHRpbmdzLnZpc2libGVTdHlsZXMgOiB0YXJnZXRTZXR0aW5ncy5oaWRkZW5TdHlsZXMpO1xuXG4gICAgLy8gU3RhcnQgdGhlIHJlbGVhc2UuXG4gICAgcmVsZWFzZS5zdGFydCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHByZS1zdGFydCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVTdGFydENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBMZXQncyBhY3RpdmF0ZSBkcmFnIHN0YXJ0IHByZWRpY2F0ZSBzdGF0ZS5cbiAgICBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZSkge1xuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUGVuZGluZztcbiAgICB9XG5cbiAgICAvLyBJZiBwcmVkaWNhdGUgaXMgcGVuZGluZyB0cnkgdG8gcmVzb2x2ZSBpdC5cbiAgICBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlKHRoaXMuX2l0ZW0sIGV2ZW50KTtcbiAgICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcbiAgICAgICAgdGhpcy5fb25TdGFydChldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZWplY3RlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgaWYgcHJlZGljYXRlIGlzIHJlc29sdmVkIGFuZCBkcmFnIGlzIGFjdGl2ZSwgbW92ZSB0aGUgaXRlbS5cbiAgICBlbHNlIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVJlc29sdmVkICYmIHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLl9vbk1vdmUoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBwcmUtZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZUVuZENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgc3RhcnQgcHJlZGljYXRlIHdhcyByZXNvbHZlZCBkdXJpbmcgZHJhZy5cbiAgICB2YXIgaXNSZXNvbHZlZCA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQ7XG5cbiAgICAvLyBEbyBmaW5hbCBwcmVkaWNhdGUgY2hlY2sgdG8gYWxsb3cgdXNlciB0byB1bmJpbmQgc3R1ZmYgZm9yIHRoZSBjdXJyZW50XG4gICAgLy8gZHJhZyBwcm9jZWR1cmUgd2l0aGluIHRoZSBwcmVkaWNhdGUgY2FsbGJhY2suIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpc1xuICAgIC8vIGNoZWNrIHdpbGwgaGF2ZSBubyBlZmZlY3QgdG8gdGhlIHN0YXRlIG9mIHRoZSBwcmVkaWNhdGUuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGUodGhpcy5faXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gUmVzZXQgc3RhcnQgcHJlZGljYXRlIHN0YXRlLlxuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZUluYWN0aXZlO1xuXG4gICAgLy8gSWYgcHJlZGljYXRlIGlzIHJlc29sdmVkIGFuZCBkcmFnZ2luZyBpcyBhY3RpdmUsIGNhbGwgdGhlIGVuZCBoYW5kbGVyLlxuICAgIGlmIChpc1Jlc29sdmVkICYmIHRoaXMuX2lzQWN0aXZlKSB0aGlzLl9vbkVuZChldmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgc3RhcnQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25TdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCBkb24ndCBzdGFydCB0aGUgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuICAgIHZhciBtaWdyYXRlID0gaXRlbS5fbWlncmF0ZTtcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIGRyYWdDb250YWluZXIgPSBzZXR0aW5ncy5kcmFnQ29udGFpbmVyIHx8IGdyaWRDb250YWluZXI7XG4gICAgdmFyIGNvbnRhaW5pbmdCbG9jayA9IGdldENvbnRhaW5pbmdCbG9jayhkcmFnQ29udGFpbmVyLCB0cnVlKTtcbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgIHZhciBjdXJyZW50TGVmdCA9IHRyYW5zbGF0ZS54O1xuICAgIHZhciBjdXJyZW50VG9wID0gdHJhbnNsYXRlLnk7XG4gICAgdmFyIGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgaGFzRHJhZ0NvbnRhaW5lciA9IGRyYWdDb250YWluZXIgIT09IGdyaWRDb250YWluZXI7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBSZXNldCBoZXVyaXN0aWNzIGRhdGEuXG4gICAgdGhpcy5fcmVzZXRIZXVyaXN0aWNzKGV2ZW50KTtcblxuICAgIC8vIElmIGdyaWQgY29udGFpbmVyIGlzIG5vdCB0aGUgZHJhZyBjb250YWluZXIsIHdlIG5lZWQgdG8gY2FsY3VsYXRlIHRoZVxuICAgIC8vIG9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gZ3JpZCBjb250YWluZXIgYW5kIGRyYWcgY29udGFpbmVyJ3MgY29udGFpbmluZ1xuICAgIC8vIGVsZW1lbnQuXG4gICAgaWYgKGhhc0RyYWdDb250YWluZXIpIHtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKGNvbnRhaW5pbmdCbG9jaywgZ3JpZENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IHBvc2l0aW9uaW5nIGFuaW1hdGlvbi5cbiAgICBpZiAoaXRlbS5pc1Bvc2l0aW9uaW5nKCkpIHtcbiAgICAgIGl0ZW0uX2xheW91dC5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcoY3VycmVudExlZnQsIGN1cnJlbnRUb3ApIH0pO1xuICAgIH1cblxuICAgIC8vIFN0b3AgY3VycmVudCBtaWdyYXRpb24gYW5pbWF0aW9uLlxuICAgIGlmIChtaWdyYXRlLl9pc0FjdGl2ZSkge1xuICAgICAgY3VycmVudExlZnQgLT0gbWlncmF0ZS5fY29udGFpbmVyRGlmZlg7XG4gICAgICBjdXJyZW50VG9wIC09IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgbWlncmF0ZS5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcoY3VycmVudExlZnQsIGN1cnJlbnRUb3ApIH0pO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgYmVpbmcgcmVsZWFzZWQgcmVzZXQgcmVsZWFzZSBkYXRhLlxuICAgIGlmIChpdGVtLmlzUmVsZWFzaW5nKCkpIHJlbGVhc2UuX3Jlc2V0KCk7XG5cbiAgICAvLyBTZXR1cCBkcmFnIGRhdGEuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2RyYWdFdmVudCA9IGV2ZW50O1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRyYWdDb250YWluZXI7XG4gICAgdGhpcy5fY29udGFpbmluZ0Jsb2NrID0gY29udGFpbmluZ0Jsb2NrO1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRYID0gZWxlbWVudFJlY3QubGVmdDtcbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WSA9IGVsZW1lbnRSZWN0LnRvcDtcbiAgICB0aGlzLl9sZWZ0ID0gdGhpcy5fZ3JpZFggPSBjdXJyZW50TGVmdDtcbiAgICB0aGlzLl90b3AgPSB0aGlzLl9ncmlkWSA9IGN1cnJlbnRUb3A7XG5cbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgKGlmIG5lY2Vzc2FyeSkuXG4gICAgaWYgKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5lbmFibGVkKSB7XG4gICAgICBpdGVtLl9kcmFnUGxhY2Vob2xkZXIuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBkcmFnSW5pdCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ0luaXQsIGl0ZW0sIGV2ZW50KTtcblxuICAgIC8vIElmIGEgc3BlY2lmaWMgZHJhZyBjb250YWluZXIgaXMgc2V0IGFuZCBpdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGVcbiAgICAvLyBncmlkJ3MgY29udGFpbmVyIGVsZW1lbnQgd2UgbmVlZCB0byBjYXN0IHNvbWUgZXh0cmEgc3BlbGxzLlxuICAgIGlmIChoYXNEcmFnQ29udGFpbmVyKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgY29udGFpbmVyIG9mZnNldCBkaWZmcyB0byBkcmFnIGRhdGEuXG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gb2Zmc2V0RGlmZi50b3A7XG5cbiAgICAgIC8vIElmIHRoZSBkcmFnZ2VkIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgZHJhZyBjb250YWluZXIgYWxsIHdlIG5lZWQgdG9cbiAgICAgIC8vIGRvIGlzIHNldHVwIHRoZSByZWxhdGl2ZSBkcmFnIHBvc2l0aW9uIGRhdGEuXG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlID09PSBkcmFnQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2dyaWRYID0gY3VycmVudExlZnQgLSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgICAgdGhpcy5fZ3JpZFkgPSBjdXJyZW50VG9wIC0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGFwcGVuZCB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGNvcnJlY3QgY29udGFpbmVyLFxuICAgICAgLy8gc2V0dXAgdGhlIGFjdHVhbCBkcmFnIHBvc2l0aW9uIGRhdGEgYW5kIGFkanVzdCB0aGUgZWxlbWVudCdzIHRyYW5zbGF0ZVxuICAgICAgLy8gdmFsdWVzIHRvIGFjY291bnQgZm9yIHRoZSBET00gcG9zaXRpb24gc2hpZnQuXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGVmdCA9IGN1cnJlbnRMZWZ0ICsgdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgICAgIHRoaXMuX3RvcCA9IGN1cnJlbnRUb3AgKyB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICAgICAgZHJhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9sZWZ0LCB0aGlzLl90b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBkcmFnIGNsYXNzIGFuZCBiaW5kIHNjcm9sbGVycy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtRHJhZ2dpbmdDbGFzcyk7XG4gICAgdGhpcy5fYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gRW1pdCBkcmFnU3RhcnQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdTdGFydCwgaXRlbSwgZXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIG1vdmUgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25Nb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIHJlc2V0IGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgYXhpcyA9IHNldHRpbmdzLmRyYWdBeGlzO1xuXG4gICAgLy8gVXBkYXRlIGhvcml6b250YWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3knKSB7XG4gICAgICB2YXIgeERpZmYgPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZHJhZ0V2ZW50LmNsaWVudFg7XG4gICAgICB0aGlzLl9sZWZ0ICs9IHhEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFggKz0geERpZmY7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xpZW50WCArPSB4RGlmZjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdmVydGljYWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3gnKSB7XG4gICAgICB2YXIgeURpZmYgPSBldmVudC5jbGllbnRZIC0gdGhpcy5fZHJhZ0V2ZW50LmNsaWVudFk7XG4gICAgICB0aGlzLl90b3AgKz0geURpZmY7XG4gICAgICB0aGlzLl9ncmlkWSArPSB5RGlmZjtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZICs9IHlEaWZmO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBldmVudCBkYXRhLlxuICAgIHRoaXMuX2RyYWdFdmVudCA9IGV2ZW50O1xuXG4gICAgLy8gRG8gbW92ZSBwcmVwYXJlL2FwcGx5IGhhbmRsaW5nIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkTW92ZVRpY2soaXRlbS5faWQsIHRoaXMuX3ByZXBhcmVNb3ZlLCB0aGlzLl9hcHBseU1vdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRyYWdnZWQgaXRlbSBmb3IgbW92aW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZXBhcmVNb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gRG8gbm90aGluZyBpZiBpdGVtIGlzIG5vdCBhY3RpdmUuXG4gICAgaWYgKCF0aGlzLl9pdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gSWYgZHJhZyBzb3J0IGlzIGVuYWJsZWQgLT4gY2hlY2sgb3ZlcmxhcC5cbiAgICBpZiAodGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnU29ydCkge1xuICAgICAgaWYgKHRoaXMuX2NoZWNrSGV1cmlzdGljcyh0aGlzLl9kcmFnRXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBseSBtb3ZlbWVudCB0byBkcmFnZ2VkIGl0ZW0uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fYXBwbHlNb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gRG8gbm90aGluZyBpZiBpdGVtIGlzIG5vdCBhY3RpdmUuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVXBkYXRlIGVsZW1lbnQncyB0cmFuc2xhdGVYL1kgdmFsdWVzLlxuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fbGVmdCwgdGhpcy5fdG9wKTtcblxuICAgIC8vIEVtaXQgZHJhZ01vdmUgZXZlbnQuXG4gICAgdGhpcy5fZ2V0R3JpZCgpLl9lbWl0KGV2ZW50RHJhZ01vdmUsIGl0ZW0sIHRoaXMuX2RyYWdFdmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgc2Nyb2xsIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25TY3JvbGwgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgbGFzdCBzY3JvbGwgZXZlbnQuXG4gICAgdGhpcy5fc2Nyb2xsRXZlbnQgPSBldmVudDtcblxuICAgIC8vIERvIHNjcm9sbCBwcmVwYXJlL2FwcGx5IGhhbmRsaW5nIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkU2Nyb2xsVGljayhpdGVtLl9pZCwgdGhpcy5fcHJlcGFyZVNjcm9sbCwgdGhpcy5fYXBwbHlTY3JvbGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRyYWdnZWQgaXRlbSBmb3Igc2Nyb2xsaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZXBhcmVTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUgZG8gbm90aGluZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGF4aXMgPSBzZXR0aW5ncy5kcmFnQXhpcztcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBDYWxjdWxhdGUgZWxlbWVudCdzIHJlY3QgYW5kIHgveSBkaWZmLlxuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgeERpZmYgPSB0aGlzLl9lbGVtZW50Q2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICB2YXIgeURpZmYgPSB0aGlzLl9lbGVtZW50Q2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgLy8gVXBkYXRlIGNvbnRhaW5lciBkaWZmLlxuICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IGdyaWRDb250YWluZXIpIHtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKHRoaXMuX2NvbnRhaW5pbmdCbG9jaywgZ3JpZENvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gb2Zmc2V0RGlmZi50b3A7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGhvcml6b250YWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3knKSB7XG4gICAgICB0aGlzLl9sZWZ0ICs9IHhEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFggPSB0aGlzLl9sZWZ0IC0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHZlcnRpY2FsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd4Jykge1xuICAgICAgdGhpcy5fdG9wICs9IHlEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFkgPSB0aGlzLl90b3AgLSB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICB9XG5cbiAgICAvLyBPdmVybGFwIGhhbmRsaW5nLlxuICAgIGlmIChzZXR0aW5ncy5kcmFnU29ydCkgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogQXBwbHkgc2Nyb2xsIHRvIGRyYWdnZWQgaXRlbS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9hcHBseVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSBkbyBub3RoaW5nLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFVwZGF0ZSBlbGVtZW50J3MgdHJhbnNsYXRlWC9ZIHZhbHVlcy5cbiAgICBpdGVtLl9lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2xlZnQsIHRoaXMuX3RvcCk7XG5cbiAgICAvLyBFbWl0IGRyYWdTY3JvbGwgZXZlbnQuXG4gICAgdGhpcy5fZ2V0R3JpZCgpLl9lbWl0KGV2ZW50RHJhZ1Njcm9sbCwgaXRlbSwgdGhpcy5fc2Nyb2xsRXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIGVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vbkVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIHJlc2V0IGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCBtb3ZlIGFuZCBzY3JvbGwgdGlja3MuXG4gICAgY2FuY2VsTW92ZVRpY2soaXRlbS5faWQpO1xuICAgIGNhbmNlbFNjcm9sbFRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gRmluaXNoIGN1cnJlbnRseSBxdWV1ZWQgb3ZlcmxhcCBjaGVjay5cbiAgICBzZXR0aW5ncy5kcmFnU29ydCAmJiB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgnZmluaXNoJyk7XG5cbiAgICAvLyBSZW1vdmUgc2Nyb2xsIGxpc3RlbmVycy5cbiAgICB0aGlzLl91bmJpbmRTY3JvbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIFNldHVwIHJlbGVhc2UgZGF0YS5cbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWCA9IHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZZID0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG5cbiAgICAvLyBSZXNldCBkcmFnIGRhdGEuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIFJlbW92ZSBkcmFnIGNsYXNzIG5hbWUgZnJvbSBlbGVtZW50LlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1EcmFnZ2luZ0NsYXNzKTtcblxuICAgIC8vIEVtaXQgZHJhZ0VuZCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ0VuZCwgaXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gRmluaXNoIHVwIHRoZSBtaWdyYXRpb24gcHJvY2VzcyBvciBzdGFydCB0aGUgcmVsZWFzZSBwcm9jZXNzLlxuICAgIHRoaXMuX2lzTWlncmF0aW5nID8gdGhpcy5fZmluaXNoTWlncmF0aW9uKCkgOiByZWxlYXNlLnN0YXJ0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgaGVscGVyc1xuICAgKiAqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBob3cgbWFueSBwZXJjZW50IHRoZSBpbnRlcnNlY3Rpb24gYXJlYSBvZiB0d28gcmVjdGFuZ2xlcyBpcyBmcm9tXG4gICAqIHRoZSBtYXhpbXVtIHBvdGVudGlhbCBpbnRlcnNlY3Rpb24gYXJlYSBiZXR3ZWVuIHRoZSByZWN0YW5nbGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKiAgIC0gQSBudW1iZXIgYmV0d2VlbiAwLTEwMC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFJlY3RPdmVybGFwU2NvcmUoYSwgYikge1xuICAgIC8vIFJldHVybiAwIGltbWVkaWF0ZWx5IGlmIHRoZSByZWN0YW5nbGVzIGRvIG5vdCBvdmVybGFwLlxuICAgIGlmIChcbiAgICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0IHx8XG4gICAgICBiLmxlZnQgKyBiLndpZHRoIDw9IGEubGVmdCB8fFxuICAgICAgYS50b3AgKyBhLmhlaWdodCA8PSBiLnRvcCB8fFxuICAgICAgYi50b3AgKyBiLmhlaWdodCA8PSBhLnRvcFxuICAgICkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBhcmVhJ3Mgd2lkdGgsIGhlaWdodCwgbWF4IGhlaWdodCBhbmQgbWF4IHdpZHRoLlxuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKGEubGVmdCArIGEud2lkdGgsIGIubGVmdCArIGIud2lkdGgpIC0gTWF0aC5tYXgoYS5sZWZ0LCBiLmxlZnQpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbihhLnRvcCArIGEuaGVpZ2h0LCBiLnRvcCArIGIuaGVpZ2h0KSAtIE1hdGgubWF4KGEudG9wLCBiLnRvcCk7XG4gICAgdmFyIG1heFdpZHRoID0gTWF0aC5taW4oYS53aWR0aCwgYi53aWR0aCk7XG4gICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWluKGEuaGVpZ2h0LCBiLmhlaWdodCk7XG5cbiAgICByZXR1cm4gKCh3aWR0aCAqIGhlaWdodCkgLyAobWF4V2lkdGggKiBtYXhIZWlnaHQpKSAqIDEwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGFuIGFuY2hvciBlbGVtZW50IGFuZCBvcGVuIHRoZSBocmVmIHVybCBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gb3BlbkFuY2hvckhyZWYoZWxlbWVudCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBhbmNob3IgZWxlbWVudC5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdhJykgcmV0dXJuO1xuXG4gICAgLy8gR2V0IGhyZWYgYW5kIG1ha2Ugc3VyZSBpdCBleGlzdHMuXG4gICAgdmFyIGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmICghaHJlZikgcmV0dXJuO1xuXG4gICAgLy8gRmluYWxseSBsZXQncyBuYXZpZ2F0ZSB0byB0aGUgbGluayBocmVmLlxuICAgIHZhciB0YXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFyZ2V0Jyk7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGhyZWYsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBwbGFjZWhvbGRlci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbURyYWdQbGFjZWhvbGRlcihpdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fYW5pbWF0ZSA9IG5ldyBJdGVtQW5pbWF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9ICcnO1xuICAgIHRoaXMuX2RpZE1pZ3JhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSAwO1xuICAgIHRoaXMuX25leHRMZWZ0ID0gMDtcbiAgICB0aGlzLl9uZXh0VG9wID0gMDtcblxuICAgIC8vIEJpbmQgYW5pbWF0aW9uIGhhbmRsZXJzLlxuICAgIHRoaXMuX3NldHVwQW5pbWF0aW9uID0gdGhpcy5fc2V0dXBBbmltYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbiA9IHRoaXMuX3N0YXJ0QW5pbWF0aW9uLmJpbmQodGhpcyk7XG5cbiAgICAvLyBCaW5kIGV2ZW50IGhhbmRsZXJzLlxuICAgIHRoaXMuX29uTGF5b3V0U3RhcnQgPSB0aGlzLl9vbkxheW91dFN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25MYXlvdXRFbmQgPSB0aGlzLl9vbkxheW91dEVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uUmVsZWFzZUVuZCA9IHRoaXMuX29uUmVsZWFzZUVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTWlncmF0ZSA9IHRoaXMuX29uTWlncmF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogTW92ZSBwbGFjZWhvbGRlciB0byBhIG5ldyBwb3NpdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25MYXlvdXRTdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuXG4gICAgLy8gRmluZCBvdXQgdGhlIGl0ZW0ncyBuZXcgKHVuYXBwbGllZCkgbGVmdCBhbmQgdG9wIHBvc2l0aW9uLlxuICAgIHZhciBpdGVtSW5kZXggPSBncmlkLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIHZhciBuZXh0TGVmdCA9IGdyaWQuX2xheW91dC5zbG90c1tpdGVtSW5kZXggKiAyXTtcbiAgICB2YXIgbmV4dFRvcCA9IGdyaWQuX2xheW91dC5zbG90c1tpdGVtSW5kZXggKiAyICsgMV07XG5cbiAgICAvLyBJZiBpdGVtJ3MgcG9zaXRpb24gZGlkIG5vdCBjaGFuZ2UgYW5kIHRoZSBpdGVtIGRpZCBub3QgbWlncmF0ZSB3ZSBjYW5cbiAgICAvLyBzYWZlbHkgc2tpcCBsYXlvdXQuXG4gICAgaWYgKCF0aGlzLl9kaWRNaWdyYXRlICYmIGl0ZW0uX2xlZnQgPT09IG5leHRMZWZ0ICYmIGl0ZW0uX3RvcCA9PT0gbmV4dFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNsb3RzIGRhdGEgaXMgY2FsY3VsYXRlZCB3aXRoIGl0ZW0gbWFyZ2lucyBhZGRlZCB0byB0aGVtIHNvIHdlIG5lZWQgdG8gYWRkXG4gICAgLy8gaXRlbSdzIGxlZnQgYW5kIHRvcCBtYXJnaW4gdG8gdGhlIHNsb3QgZGF0YSB0byBnZXQgdGhlIHBsYWNlaG9sZGVyJ3NcbiAgICAvLyBuZXh0IHBvc2l0aW9uLlxuICAgIG5leHRMZWZ0ICs9IGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgbmV4dFRvcCArPSBpdGVtLl9tYXJnaW5Ub3A7XG5cbiAgICAvLyBKdXN0IHNuYXAgdG8gbmV3IHBvc2l0aW9uIHdpdGhvdXQgYW55IGFuaW1hdGlvbnMgaWYgbm8gYW5pbWF0aW9uIGlzXG4gICAgLy8gcmVxdWlyZWQgb3IgaWYgcGxhY2Vob2xkZXIgbW92ZXMgYmV0d2VlbiBncmlkcy5cbiAgICB2YXIgYW5pbUVuYWJsZWQgPSBncmlkLl9zZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuZHVyYXRpb24gPiAwO1xuICAgIGlmICghYW5pbUVuYWJsZWQgfHwgdGhpcy5fZGlkTWlncmF0ZSkge1xuICAgICAgLy8gQ2FuY2VsIHBvdGVudGlhbCAocXVldWVkKSBsYXlvdXQgdGljay5cbiAgICAgIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCk7XG5cbiAgICAgIC8vIFNuYXAgcGxhY2Vob2xkZXIgdG8gY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgIHZhciB0YXJnZXRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKG5leHRMZWZ0LCBuZXh0VG9wKSB9O1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGUuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICB0aGlzLl9hbmltYXRlLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB0YXJnZXRTdHlsZXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBNb3ZlIHBsYWNlaG9sZGVyIGluc2lkZSBjb3JyZWN0IGNvbnRhaW5lciBhZnRlciBtaWdyYXRpb24uXG4gICAgICBpZiAodGhpcy5fZGlkTWlncmF0ZSkge1xuICAgICAgICBncmlkLmdldEVsZW1lbnQoKS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgdGhpcy5fZGlkTWlncmF0ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdGhlIHBsYWNlaG9sZGVyJ3MgbGF5b3V0IGFuaW1hdGlvbiBpbiB0aGUgbmV4dCB0aWNrLiBXZSBkbyB0aGlzIHRvXG4gICAgLy8gYXZvaWQgbGF5b3V0IHRocmFzaGluZy5cbiAgICB0aGlzLl9uZXh0TGVmdCA9IG5leHRMZWZ0O1xuICAgIHRoaXMuX25leHRUb3AgPSBuZXh0VG9wO1xuICAgIGFkZFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCwgdGhpcy5fc2V0dXBBbmltYXRpb24sIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBwbGFjZWhvbGRlciBmb3IgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fc2V0dXBBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSh0aGlzLl9lbGVtZW50KTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IHRyYW5zbGF0ZS54O1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSB0cmFuc2xhdGUueTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG4gICAgdmFyIGN1cnJlbnRMZWZ0ID0gdGhpcy5fY3VycmVudExlZnQ7XG4gICAgdmFyIGN1cnJlbnRUb3AgPSB0aGlzLl9jdXJyZW50VG9wO1xuICAgIHZhciBuZXh0TGVmdCA9IHRoaXMuX25leHRMZWZ0O1xuICAgIHZhciBuZXh0VG9wID0gdGhpcy5fbmV4dFRvcDtcbiAgICB2YXIgdGFyZ2V0U3R5bGVzID0geyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhuZXh0TGVmdCwgbmV4dFRvcCkgfTtcblxuICAgIC8vIElmIHBsYWNlaG9sZGVyIGlzIGFscmVhZHkgaW4gY29ycmVjdCBwb3NpdGlvbiBsZXQncyBqdXN0IHN0b3AgYW5pbWF0aW9uXG4gICAgLy8gYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAoY3VycmVudExlZnQgPT09IG5leHRMZWZ0ICYmIGN1cnJlbnRUb3AgPT09IG5leHRUb3ApIHtcbiAgICAgIGlmIChhbmltYXRpb24uaXNBbmltYXRpbmcoKSkgYW5pbWF0aW9uLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgbGV0J3Mgc3RhcnQgdGhlIGFuaW1hdGlvbi5cbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9pdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyO1xuICAgIHZhciBjdXJyZW50U3R5bGVzID0geyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfTtcbiAgICBhbmltYXRpb24uc3RhcnQoY3VycmVudFN0eWxlcywgdGFyZ2V0U3R5bGVzLCB7XG4gICAgICBkdXJhdGlvbjogc2V0dGluZ3MuZHVyYXRpb24sXG4gICAgICBlYXNpbmc6IHNldHRpbmdzLmVhc2luZyxcbiAgICAgIG9uRmluaXNoOiB0aGlzLl9vbkxheW91dEVuZFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMYXlvdXQgZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uTGF5b3V0RW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgZW5kIGhhbmRsZXIuIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbiBkcmFnUmVsZWFzZUVuZCBldmVudCBpc1xuICAgKiBlbWl0dGVkIGFuZCByZWNlaXZlcyB0aGUgZXZlbnQgZGF0YSBhcyBpdCdzIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25SZWxlYXNlRW5kID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLl9pZCA9PT0gdGhpcy5faXRlbS5faWQpIHtcbiAgICAgIC8vIElmIHRoZSBwbGFjZWhvbGRlciBpcyBub3QgYW5pbWF0aW5nIGFueW1vcmUgd2UgY2FuIHNhZmVseSByZXNldCBpdC5cbiAgICAgIGlmICghdGhpcy5fYW5pbWF0ZS5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgcGxhY2Vob2xkZXIgaXRlbSBpcyBzdGlsbCBhbmltYXRpbmcgaGVyZSwgbGV0J3Mgd2FpdCBmb3IgaXQgdG9cbiAgICAgIC8vIGZpbmlzaCBpdCdzIGFuaW1hdGlvbi5cbiAgICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogTWlncmF0aW9uIHN0YXJ0IGhhbmRsZXIuIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbiBiZWZvcmVTZW5kIGV2ZW50IGlzXG4gICAqIGVtaXR0ZWQgYW5kIHJlY2VpdmVzIHRoZSBldmVudCBkYXRhIGFzIGl0J3MgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge0l0ZW19IGRhdGEuaXRlbVxuICAgKiBAcGFyYW0ge0dyaWR9IGRhdGEuZnJvbUdyaWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuZnJvbUluZGV4XG4gICAqIEBwYXJhbSB7R3JpZH0gZGF0YS50b0dyaWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudG9JbmRleFxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uTWlncmF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIG1hdGNoaW5nIGl0ZW0uXG4gICAgaWYgKGRhdGEuaXRlbSAhPT0gdGhpcy5faXRlbSkgcmV0dXJuO1xuXG4gICAgdmFyIGdyaWQgPSB0aGlzLl9pdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgbmV4dEdyaWQgPSBkYXRhLnRvR3JpZDtcblxuICAgIC8vIFVuYmluZCBsaXN0ZW5lcnMgZnJvbSBjdXJyZW50IGdyaWQuXG4gICAgZ3JpZC5vZmYoZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBncmlkLm9mZihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBncmlkLm9mZihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBCaW5kIGxpc3RlbmVycyB0byB0aGUgbmV4dCBncmlkLlxuICAgIG5leHRHcmlkLm9uKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgbmV4dEdyaWQub24oZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgbmV4dEdyaWQub24oZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gTWFyayB0aGUgaXRlbSBhcyBtaWdyYXRlZC5cbiAgICB0aGlzLl9kaWRNaWdyYXRlID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ3JlYXRlIHBsYWNlaG9sZGVyLiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgb25seSB3cml0ZXMgdG8gRE9NIGFuZCBkb2VzIG5vdFxuICAgKiByZWFkIGFueXRoaW5nIGZyb20gRE9NIHNvIGl0IHNob3VsZCBub3QgY2F1c2UgYW55IGFkZGl0aW9uYWwgbGF5b3V0XG4gICAqIHRocmFzaGluZyB3aGVuIGl0J3MgY2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIGRyYWcgc3RhcnQgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHBsYWNlaG9sZGVyIHNldCB1cCB3ZSBjYW4gc2tpcCB0aGUgaW5pdGlhdGlvbiBsb2dpYy5cbiAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG5cbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICB2YXIgZWxlbWVudDtcbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnQgPSBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBVcGRhdGUgZWxlbWVudCB0byBhbmltYXRpb24gaW5zdGFuY2UuXG4gICAgYW5pbWF0aW9uLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIEFkZCBwbGFjZWhvbGRlciBjbGFzcyB0byB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBzZXR0aW5ncy5pdGVtUGxhY2Vob2xkZXJDbGFzcyB8fCAnJztcbiAgICBpZiAodGhpcy5fY2xhc3NOYW1lKSB7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIH1cblxuICAgIC8vIFBvc2l0aW9uIHRoZSBwbGFjZWhvbGRlciBpdGVtIGNvcnJlY3RseS5cbiAgICB2YXIgbGVmdCA9IGl0ZW0uX2xlZnQgKyBpdGVtLl9tYXJnaW5MZWZ0O1xuICAgIHZhciB0b3AgPSBpdGVtLl90b3AgKyBpdGVtLl9tYXJnaW5Ub3A7XG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgd2lkdGg6IGl0ZW0uX3dpZHRoICsgJ3B4JyxcbiAgICAgIGhlaWdodDogaXRlbS5faGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGxlZnQsIHRvcClcbiAgICB9KTtcblxuICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGdyaWQub24oZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgZ3JpZC5vbihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub24oZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gb25DcmVhdGUgaG9vay5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGUpKSB7XG4gICAgICBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGUoaXRlbSwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IHRoZSBwbGFjZWhvbGRlciBlbGVtZW50IHRvIHRoZSBncmlkLlxuICAgIGdyaWQuZ2V0RWxlbWVudCgpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCBwbGFjZWhvbGRlciBkYXRhLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRlO1xuXG4gICAgLy8gUmVzZXQgZmxhZy5cbiAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG5cbiAgICAvLyBDYW5jZWwgcG90ZW50aWFsIChxdWV1ZWQpIGxheW91dCB0aWNrLlxuICAgIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBSZXNldCBhbmltYXRpb24gaW5zdGFuY2UuXG4gICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICBhbmltYXRpb24uX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gVW5iaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICBncmlkLm9mZihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub2ZmKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIGdyaWQub2ZmKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIFJlbW92ZSBwbGFjZWhvbGRlciBjbGFzcyBmcm9tIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIGlmICh0aGlzLl9jbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgICB0aGlzLl9jbGFzc05hbWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZWxlbWVudC5cbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBvblJlbW92ZSBob29rLiBOb3RlIHRoYXQgaGVyZSB3ZSB1c2UgdGhlIGN1cnJlbnQgZ3JpZCdzIG9uUmVtb3ZlIGNhbGxiYWNrXG4gICAgLy8gc28gaWYgdGhlIGl0ZW0gaGFzIG1pZ3JhdGVkIGR1cmluZyBkcmFnIHRoZSBvblJlbW92ZSBtZXRob2Qgd2lsbCBub3QgYmVcbiAgICAvLyB0aGUgb3JpZ2luYXRpbmcgZ3JpZCdzIG1ldGhvZC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmUpKSB7XG4gICAgICBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmUoaXRlbSwgZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgcGxhY2Vob2xkZXIncyBkaW1lbnNpb25zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtoZWlnaHR9IGhlaWdodFxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUudXBkYXRlRGltZW5zaW9ucyA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICBzZXRTdHlsZXModGhpcy5fZWxlbWVudCwge1xuICAgICAgICB3aWR0aDogd2lkdGggKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGxhY2Vob2xkZXIgaXMgY3VycmVudGx5IGFjdGl2ZSAodmlzaWJsZSkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl9lbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHBsYWNlaG9sZGVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLl9hbmltYXRlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pdGVtID0gdGhpcy5fYW5pbWF0ZSA9IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFF1ZXVlIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFF1ZXVlKCkge1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBZGQgY2FsbGJhY2sgdG8gdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJvY2VzcyBxdWV1ZSBjYWxsYmFja3MgYW5kIHJlc2V0IHRoZSBxdWV1ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUXVldWUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Kn0gYXJnMVxuICAgKiBAcGFyYW0geyp9IGFyZzJcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgbGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUXVpdCBlYXJseSBpZiB0aGUgcXVldWUgaXMgZW1wdHkuXG4gICAgaWYgKCFsZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHNpbmdsZUNhbGxiYWNrID0gbGVuZ3RoID09PSAxO1xuICAgIHZhciBzbmFwc2hvdCA9IHNpbmdsZUNhbGxiYWNrID8gcXVldWVbMF0gOiBxdWV1ZS5zbGljZSgwKTtcblxuICAgIC8vIFJlc2V0IHF1ZXVlLlxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgY2FsbGJhY2sgbGV0J3MganVzdCBjYWxsIGl0LlxuICAgIGlmIChzaW5nbGVDYWxsYmFjaykge1xuICAgICAgc25hcHNob3QoYXJnMSwgYXJnMik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG11bHRpcGxlIGNhbGxiYWNrcywgbGV0J3MgcHJvY2VzcyB0aGVtLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc25hcHNob3RbaV0oYXJnMSwgYXJnMik7XG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IFF1ZXVlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3F1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogTGF5b3V0IG1hbmFnZXIgZm9yIEl0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1MYXlvdXQoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0ludGVycnVwdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY3VycmVudFN0eWxlcyA9IHt9O1xuICAgIHRoaXMuX3RhcmdldFN0eWxlcyA9IHt9O1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gMDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gMDtcbiAgICB0aGlzLl9vZmZzZXRMZWZ0ID0gMDtcbiAgICB0aGlzLl9vZmZzZXRUb3AgPSAwO1xuICAgIHRoaXMuX3NraXBOZXh0QW5pbWF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5fYW5pbWF0ZU9wdGlvbnMgPSB7XG4gICAgICBvbkZpbmlzaDogdGhpcy5fZmluaXNoLmJpbmQodGhpcylcbiAgICB9O1xuICAgIHRoaXMuX3F1ZXVlID0gbmV3IFF1ZXVlKCk7XG5cbiAgICAvLyBCaW5kIGFuaW1hdGlvbiBoYW5kbGVycyBhbmQgZmluaXNoIG1ldGhvZC5cbiAgICB0aGlzLl9zZXR1cEFuaW1hdGlvbiA9IHRoaXMuX3NldHVwQW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24gPSB0aGlzLl9zdGFydEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGl0ZW0gbGF5b3V0IGJhc2VkIG9uIGl0J3MgY3VycmVudCBkYXRhLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIGdyaWRTZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgaXNQb3NpdGlvbmluZyA9IHRoaXMuX2lzQWN0aXZlO1xuICAgIHZhciBpc0p1c3RSZWxlYXNlZCA9IHJlbGVhc2UuX2lzQWN0aXZlICYmIHJlbGVhc2UuX2lzUG9zaXRpb25pbmdTdGFydGVkID09PSBmYWxzZTtcbiAgICB2YXIgYW5pbUR1cmF0aW9uID0gaXNKdXN0UmVsZWFzZWRcbiAgICAgID8gZ3JpZFNldHRpbmdzLmRyYWdSZWxlYXNlRHVyYXRpb25cbiAgICAgIDogZ3JpZFNldHRpbmdzLmxheW91dER1cmF0aW9uO1xuICAgIHZhciBhbmltRWFzaW5nID0gaXNKdXN0UmVsZWFzZWQgPyBncmlkU2V0dGluZ3MuZHJhZ1JlbGVhc2VFYXNpbmcgOiBncmlkU2V0dGluZ3MubGF5b3V0RWFzaW5nO1xuICAgIHZhciBhbmltRW5hYmxlZCA9ICFpbnN0YW50ICYmICF0aGlzLl9za2lwTmV4dEFuaW1hdGlvbiAmJiBhbmltRHVyYXRpb24gPiAwO1xuICAgIHZhciBpc0FuaW1hdGluZztcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGN1cnJlbnRseSBwb3NpdGlvbmluZyBwcm9jZXNzIGN1cnJlbnQgbGF5b3V0IGNhbGxiYWNrXG4gICAgLy8gcXVldWUgd2l0aCBpbnRlcnJ1cHRlZCBmbGFnIG9uLlxuICAgIGlmIChpc1Bvc2l0aW9uaW5nKSB0aGlzLl9xdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcblxuICAgIC8vIE1hcmsgcmVsZWFzZSBwb3NpdGlvbmluZyBhcyBzdGFydGVkLlxuICAgIGlmIChpc0p1c3RSZWxlYXNlZCkgcmVsZWFzZS5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgLy8gUHVzaCB0aGUgY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGlmIChpc0Z1bmN0aW9uKG9uRmluaXNoKSkgdGhpcy5fcXVldWUuYWRkKG9uRmluaXNoKTtcblxuICAgIC8vIElmIG5vIGFuaW1hdGlvbnMgYXJlIG5lZWRlZCwgZWFzeSBwZWFzeSFcbiAgICBpZiAoIWFuaW1FbmFibGVkKSB7XG4gICAgICB0aGlzLl91cGRhdGVPZmZzZXRzKCk7XG4gICAgICB0aGlzLl91cGRhdGVUYXJnZXRTdHlsZXMoKTtcbiAgICAgIGlzQW5pbWF0aW5nID0gaXRlbS5fYW5pbWF0ZS5pc0FuaW1hdGluZygpO1xuICAgICAgdGhpcy5zdG9wKGZhbHNlLCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgIWlzQW5pbWF0aW5nICYmIHNldFN0eWxlcyhlbGVtZW50LCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgdGhpcy5fc2tpcE5leHRBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLl9maW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaXRlbSBhY3RpdmUgYW5kIHN0b3JlIHNvbWUgZGF0YSBmb3IgdGhlIGFuaW1hdGlvbiB0aGF0IGlzIGFib3V0IHRvIGJlXG4gICAgLy8gdHJpZ2dlcmVkLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9hbmltYXRlT3B0aW9ucy5lYXNpbmcgPSBhbmltRWFzaW5nO1xuICAgIHRoaXMuX2FuaW1hdGVPcHRpb25zLmR1cmF0aW9uID0gYW5pbUR1cmF0aW9uO1xuICAgIHRoaXMuX2lzSW50ZXJydXB0ZWQgPSBpc1Bvc2l0aW9uaW5nO1xuXG4gICAgLy8gU3RhcnQgdGhlIGl0ZW0ncyBsYXlvdXQgYW5pbWF0aW9uIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkTGF5b3V0VGljayhpdGVtLl9pZCwgdGhpcy5fc2V0dXBBbmltYXRpb24sIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIGl0ZW0ncyBwb3NpdGlvbiBhbmltYXRpb24gaWYgaXQgaXMgY3VycmVudGx5IGFuaW1hdGluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcHJvY2Vzc0NhbGxiYWNrUXVldWU9ZmFsc2VdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0U3R5bGVzXVxuICAgKiBAcmV0dXJucyB7SXRlbUxheW91dH1cbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihwcm9jZXNzQ2FsbGJhY2tRdWV1ZSwgdGFyZ2V0U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBDYW5jZWwgYW5pbWF0aW9uIGluaXQuXG4gICAgY2FuY2VsTGF5b3V0VGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBTdG9wIGFuaW1hdGlvbi5cbiAgICBpdGVtLl9hbmltYXRlLnN0b3AodGFyZ2V0U3R5bGVzKTtcblxuICAgIC8vIFJlbW92ZSBwb3NpdGlvbmluZyBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhpdGVtLl9lbGVtZW50LCBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuaXRlbVBvc2l0aW9uaW5nQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgYWN0aXZlIHN0YXRlLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAvLyBQcm9jZXNzIGNhbGxiYWNrIHF1ZXVlIGlmIG5lZWRlZC5cbiAgICBpZiAocHJvY2Vzc0NhbGxiYWNrUXVldWUpIHRoaXMuX3F1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKHRydWUsIHt9KTtcbiAgICB0aGlzLl9xdWV1ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5faXRlbSA9IHRoaXMuX2N1cnJlbnRTdHlsZXMgPSB0aGlzLl90YXJnZXRTdHlsZXMgPSB0aGlzLl9hbmltYXRlT3B0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgdXBkYXRlIGl0ZW0ncyBjdXJyZW50IGxheW91dCBvZmZzZXQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fdXBkYXRlT2Zmc2V0cyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBtaWdyYXRlID0gaXRlbS5fbWlncmF0ZTtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG5cbiAgICB0aGlzLl9vZmZzZXRMZWZ0ID0gcmVsZWFzZS5faXNBY3RpdmVcbiAgICAgID8gcmVsZWFzZS5fY29udGFpbmVyRGlmZlhcbiAgICAgIDogbWlncmF0ZS5faXNBY3RpdmVcbiAgICAgID8gbWlncmF0ZS5fY29udGFpbmVyRGlmZlhcbiAgICAgIDogMDtcblxuICAgIHRoaXMuX29mZnNldFRvcCA9IHJlbGVhc2UuX2lzQWN0aXZlXG4gICAgICA/IHJlbGVhc2UuX2NvbnRhaW5lckRpZmZZXG4gICAgICA6IG1pZ3JhdGUuX2lzQWN0aXZlXG4gICAgICA/IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZZXG4gICAgICA6IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgdXBkYXRlIGl0ZW0ncyBsYXlvdXQgdGFyZ2V0IHN0eWxlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fdXBkYXRlVGFyZ2V0U3R5bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdGhpcy5fdGFyZ2V0U3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgIHRoaXMuX2l0ZW0uX2xlZnQgKyB0aGlzLl9vZmZzZXRMZWZ0LFxuICAgICAgdGhpcy5faXRlbS5fdG9wICsgdGhpcy5fb2Zmc2V0VG9wXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIGl0ZW0gbGF5b3V0IHByb2NlZHVyZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIC8vIE1hcmsgdGhlIGl0ZW0gYXMgaW5hY3RpdmUgYW5kIHJlbW92ZSBwb3NpdGlvbmluZyBjbGFzc2VzLlxuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gRmluaXNoIHVwIHJlbGVhc2UgYW5kIG1pZ3JhdGlvbi5cbiAgICBpZiAocmVsZWFzZS5faXNBY3RpdmUpIHJlbGVhc2Uuc3RvcCgpO1xuICAgIGlmIChtaWdyYXRlLl9pc0FjdGl2ZSkgbWlncmF0ZS5zdG9wKCk7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgaXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgaXRlbSBmb3IgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fc2V0dXBBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKHRoaXMuX2l0ZW0uX2VsZW1lbnQpO1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IHRyYW5zbGF0ZS55O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgc2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgdGhlIG9mZnNldCBkYXRhIGFuZCB0YXJnZXQgc3R5bGVzLlxuICAgIHRoaXMuX3VwZGF0ZU9mZnNldHMoKTtcbiAgICB0aGlzLl91cGRhdGVUYXJnZXRTdHlsZXMoKTtcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGFscmVhZHkgaW4gY29ycmVjdCBwb3NpdGlvbiBsZXQncyBxdWl0IGVhcmx5LlxuICAgIGlmIChcbiAgICAgIGl0ZW0uX2xlZnQgPT09IHRoaXMuX2N1cnJlbnRMZWZ0IC0gdGhpcy5fb2Zmc2V0TGVmdCAmJlxuICAgICAgaXRlbS5fdG9wID09PSB0aGlzLl9jdXJyZW50VG9wIC0gdGhpcy5fb2Zmc2V0VG9wXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5faXNJbnRlcnJ1cHRlZCkgdGhpcy5zdG9wKGZhbHNlLCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNldCBpdGVtJ3MgcG9zaXRpb25pbmcgY2xhc3MgaWYgbmVlZGVkLlxuICAgIGlmICghdGhpcy5faXNJbnRlcnJ1cHRlZCkge1xuICAgICAgYWRkQ2xhc3MoaXRlbS5fZWxlbWVudCwgc2V0dGluZ3MuaXRlbVBvc2l0aW9uaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHN0eWxlcyBmb3IgYW5pbWF0aW9uLlxuICAgIHRoaXMuX2N1cnJlbnRTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2N1cnJlbnRMZWZ0LCB0aGlzLl9jdXJyZW50VG9wKTtcblxuICAgIC8vIEFuaW1hdGUuXG4gICAgaXRlbS5fYW5pbWF0ZS5zdGFydCh0aGlzLl9jdXJyZW50U3R5bGVzLCB0aGlzLl90YXJnZXRTdHlsZXMsIHRoaXMuX2FuaW1hdGVPcHRpb25zKTtcbiAgfTtcblxuICB2YXIgdGVtcFN0eWxlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgbWlncmF0ZSBwcm9jZXNzIGhhbmRsZXIgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1NaWdyYXRlKGl0ZW0pIHtcbiAgICAvLyBQcml2YXRlIHByb3BzLlxuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBtaWdyYXRlIHByb2Nlc3Mgb2YgYW4gaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZH0gdGFyZ2V0R3JpZFxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtjb250YWluZXJdXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKHRhcmdldEdyaWQsIHBvc2l0aW9uLCBjb250YWluZXIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgaXNWaXNpYmxlID0gaXRlbS5pc1Zpc2libGUoKTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRTZXR0aW5ncyA9IHRhcmdldEdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0R3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0YXJnZXRHcmlkLl9pdGVtcztcbiAgICB2YXIgY3VycmVudEluZGV4ID0gZ3JpZC5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVyID0gY29udGFpbmVyIHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICAgIHZhciB0YXJnZXRJbmRleDtcbiAgICB2YXIgdGFyZ2V0SXRlbTtcbiAgICB2YXIgY3VycmVudENvbnRhaW5lcjtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcbiAgICB2YXIgY29udGFpbmVyRGlmZjtcbiAgICB2YXIgdHJhbnNsYXRlO1xuICAgIHZhciB0cmFuc2xhdGVYO1xuICAgIHZhciB0cmFuc2xhdGVZO1xuXG4gICAgLy8gR2V0IHRhcmdldCBpbmRleC5cbiAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgdGFyZ2V0SW5kZXggPSBub3JtYWxpemVBcnJheUluZGV4KHRhcmdldEl0ZW1zLCBwb3NpdGlvbiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEl0ZW0gPSB0YXJnZXRHcmlkLl9nZXRJdGVtKHBvc2l0aW9uKTtcbiAgICAgIC8qKiBAdG9kbyBDb25zaWRlciB0aHJvd2luZyBhbiBlcnJvciBoZXJlIGluc3RlYWQgb2Ygc2lsZW50bHkgZmFpbGluZy4gKi9cbiAgICAgIGlmICghdGFyZ2V0SXRlbSkgcmV0dXJuIHRoaXM7XG4gICAgICB0YXJnZXRJbmRleCA9IHRhcmdldEl0ZW1zLmluZGV4T2YodGFyZ2V0SXRlbSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZXMgaWYgbmVlZGVkLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSB8fCB0aGlzLl9pc0FjdGl2ZSB8fCBpdGVtLmlzUmVsZWFzaW5nKCkpIHtcbiAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGUueDtcbiAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUueTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IHBvc2l0aW9uaW5nLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSkge1xuICAgICAgaXRlbS5fbGF5b3V0LnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IG1pZ3JhdGlvbi5cbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRyYW5zbGF0ZVggLT0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgICB0cmFuc2xhdGVZIC09IHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgdGhpcy5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkgfSk7XG4gICAgfVxuXG4gICAgLy8gQWJvcnQgY3VycmVudCByZWxlYXNlLlxuICAgIGlmIChpdGVtLmlzUmVsZWFzaW5nKCkpIHtcbiAgICAgIHRyYW5zbGF0ZVggLT0gaXRlbS5fcmVsZWFzZS5fY29udGFpbmVyRGlmZlg7XG4gICAgICB0cmFuc2xhdGVZIC09IGl0ZW0uX3JlbGVhc2UuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgaXRlbS5fcmVsZWFzZS5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IHZpc2liaWxpdHkgYW5pbWF0aW9ucy5cbiAgICBpdGVtLl92aXNpYmlsaXR5Ll9zdG9wQW5pbWF0aW9uKCk7XG5cbiAgICAvLyBEZXN0cm95IGN1cnJlbnQgZHJhZy5cbiAgICBpZiAoaXRlbS5fZHJhZykgaXRlbS5fZHJhZy5kZXN0cm95KCk7XG5cbiAgICAvLyBQcm9jZXNzIGN1cnJlbnQgdmlzaWJpbGl0eSBhbmltYXRpb24gcXVldWUuXG4gICAgaXRlbS5fdmlzaWJpbGl0eS5fcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG5cbiAgICAvLyBFbWl0IGJlZm9yZVNlbmQgZXZlbnQuXG4gICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVNlbmQpKSB7XG4gICAgICBncmlkLl9lbWl0KGV2ZW50QmVmb3JlU2VuZCwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEVtaXQgYmVmb3JlUmVjZWl2ZSBldmVudC5cbiAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlUmVjZWl2ZSkpIHtcbiAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRCZWZvcmVSZWNlaXZlLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGN1cnJlbnQgY2xhc3NuYW1lcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBBZGQgbmV3IGNsYXNzbmFtZXMuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgdGFyZ2V0U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc1Zpc2libGUgPyB0YXJnZXRTZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzIDogdGFyZ2V0U2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIE1vdmUgaXRlbSBpbnN0YW5jZSBmcm9tIGN1cnJlbnQgZ3JpZCB0byB0YXJnZXQgZ3JpZC5cbiAgICBncmlkLl9pdGVtcy5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcbiAgICBhcnJheUluc2VydCh0YXJnZXRJdGVtcywgaXRlbSwgdGFyZ2V0SW5kZXgpO1xuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBncmlkIGlkIHJlZmVyZW5jZS5cbiAgICBpdGVtLl9ncmlkSWQgPSB0YXJnZXRHcmlkLl9pZDtcblxuICAgIC8vIEdldCBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBjdXJyZW50Q29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgLy8gTW92ZSB0aGUgaXRlbSBpbnNpZGUgdGhlIHRhcmdldCBjb250YWluZXIgaWYgaXQncyBkaWZmZXJlbnQgdGhhbiB0aGVcbiAgICAvLyBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIGN1cnJlbnRDb250YWluZXIsIHRydWUpO1xuICAgICAgaWYgKCF0cmFuc2xhdGUpIHtcbiAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlLng7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUueTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICAgIHRyYW5zbGF0ZVggKyBvZmZzZXREaWZmLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVkgKyBvZmZzZXREaWZmLnRvcFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY2hpbGQgZWxlbWVudCdzIHN0eWxlcyB0byByZWZsZWN0IHRoZSBjdXJyZW50IHZpc2liaWxpdHkgc3RhdGUuXG4gICAgaXRlbS5fY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgaXNWaXNpYmxlID8gdGFyZ2V0U2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHRhcmdldFNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG5cbiAgICAvLyBVcGRhdGUgZGlzcGxheSBzdHlsZS5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyAnYmxvY2snIDogJ2hpZGRlbic7XG5cbiAgICAvLyBHZXQgb2Zmc2V0IGRpZmYgZm9yIHRoZSBtaWdyYXRpb24gZGF0YS5cbiAgICBjb250YWluZXJEaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIHRhcmdldEVsZW1lbnQsIHRydWUpO1xuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBjYWNoZWQgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIGl0ZW0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgaXRlbS5fcmVmcmVzaFNvcnREYXRhKCk7XG5cbiAgICAvLyBDcmVhdGUgbmV3IGRyYWcgaGFuZGxlci5cbiAgICBpdGVtLl9kcmFnID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0VuYWJsZWQgPyBuZXcgSXRlbURyYWcoaXRlbSkgOiBudWxsO1xuXG4gICAgLy8gU2V0dXAgbWlncmF0aW9uIGRhdGEuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRhcmdldENvbnRhaW5lcjtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IGNvbnRhaW5lckRpZmYubGVmdDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IGNvbnRhaW5lckRpZmYudG9wO1xuXG4gICAgLy8gRW1pdCBzZW5kIGV2ZW50LlxuICAgIGlmIChncmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRTZW5kKSkge1xuICAgICAgZ3JpZC5fZW1pdChldmVudFNlbmQsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHJlY2VpdmUgZXZlbnQuXG4gICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFJlY2VpdmUpKSB7XG4gICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50UmVjZWl2ZSwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgdGhlIG1pZ3JhdGUgcHJvY2VzcyBvZiBhbiBpdGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBhYm9ydCBhblxuICAgKiBvbmdvaW5nIG1pZ3JhdGUgcHJvY2VzcyAoYW5pbWF0aW9uKSBvciBmaW5pc2ggdGhlIG1pZ3JhdGUgcHJvY2Vzcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Fib3J0PWZhbHNlXVxuICAgKiAgLSBTaG91bGQgdGhlIG1pZ3JhdGlvbiBiZSBhYm9ydGVkP1xuICAgKiBAcGFyYW0ge09iamVjdH0gW2N1cnJlbnRTdHlsZXNdXG4gICAqICAtIE9wdGlvbmFsIGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSBzdHlsZXMuXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oYWJvcnQsIGN1cnJlbnRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgZ3JpZEVsZW1lbnQgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciB0cmFuc2xhdGU7XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBncmlkRWxlbWVudCkge1xuICAgICAgaWYgKCFjdXJyZW50U3R5bGVzKSB7XG4gICAgICAgIGlmIChhYm9ydCkge1xuICAgICAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICB0ZW1wU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgICAgIHRyYW5zbGF0ZS54IC0gdGhpcy5fY29udGFpbmVyRGlmZlgsXG4gICAgICAgICAgICB0cmFuc2xhdGUueSAtIHRoaXMuX2NvbnRhaW5lckRpZmZZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhpdGVtLl9sZWZ0LCBpdGVtLl90b3ApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSB0ZW1wU3R5bGVzO1xuICAgICAgfVxuICAgICAgZ3JpZEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgY3VycmVudFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSk7XG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciB0ZW1wU3R5bGVzJDEgPSB7fTtcblxuICAvKipcbiAgICogVGhlIHJlbGVhc2UgcHJvY2VzcyBoYW5kbGVyIGNvbnN0cnVjdG9yLiBBbHRob3VnaCB0aGlzIG1pZ2h0IHNlZW0gYXMgcHJvcGVyXG4gICAqIGZpdCBmb3IgdGhlIGRyYWcgcHJvY2VzcyB0aGlzIG5lZWRzIHRvIGJlIHNlcGFyYXRlZCBpbnRvIGl0J3Mgb3duIGxvZ2ljXG4gICAqIGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgYSBzY2VuYXJpbyB3aGVyZSBkcmFnIGlzIGRpc2FibGVkLCBidXQgdGhlIHJlbGVhc2VcbiAgICogcHJvY2VzcyBzdGlsbCBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZCAoZHJhZ2dpbmcgZnJvbSBhIGdyaWQgdG8gYW5vdGhlcikuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1SZWxlYXNlKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSByZWxlYXNlIHByb2Nlc3Mgb2YgYW4gaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcblxuICAgIC8vIEZsYWcgcmVsZWFzZSBhcyBhY3RpdmUuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gQWRkIHJlbGVhc2UgY2xhc3MgbmFtZSB0byB0aGUgcmVsZWFzZWQgZWxlbWVudC5cbiAgICBhZGRDbGFzcyhpdGVtLl9lbGVtZW50LCBncmlkLl9zZXR0aW5ncy5pdGVtUmVsZWFzaW5nQ2xhc3MpO1xuXG4gICAgLy8gRW1pdCBkcmFnUmVsZWFzZVN0YXJ0IGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnUmVsZWFzZVN0YXJ0LCBpdGVtKTtcblxuICAgIC8vIFBvc2l0aW9uIHRoZSByZWxlYXNlZCBpdGVtLlxuICAgIGl0ZW0uX2xheW91dC5zdGFydChmYWxzZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRW5kIHRoZSByZWxlYXNlIHByb2Nlc3Mgb2YgYW4gaXRlbS4gVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gYWJvcnQgYW5cbiAgICogb25nb2luZyByZWxlYXNlIHByb2Nlc3MgKGFuaW1hdGlvbikgb3IgZmluaXNoIHRoZSByZWxlYXNlIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFthYm9ydD1mYWxzZV1cbiAgICogIC0gU2hvdWxkIHRoZSByZWxlYXNlIGJlIGFib3J0ZWQ/IFdoZW4gdHJ1ZSwgdGhlIHJlbGVhc2UgZW5kIGV2ZW50IHdvbid0IGJlXG4gICAqICAgIGVtaXR0ZWQuIFNldCB0byB0cnVlIG9ubHkgd2hlbiB5b3UgbmVlZCB0byBhYm9ydCB0aGUgcmVsZWFzZSBwcm9jZXNzXG4gICAqICAgIHdoaWxlIHRoZSBpdGVtIGlzIGFuaW1hdGluZyB0byBpdCdzIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2N1cnJlbnRTdHlsZXNdXG4gICAqICAtIE9wdGlvbmFsIGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSBzdHlsZXMuXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oYWJvcnQsIGN1cnJlbnRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgY29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdHJhbnNsYXRlO1xuXG4gICAgLy8gUmVzZXQgZGF0YSBhbmQgcmVtb3ZlIHJlbGVhc2luZyBjbGFzcyBuYW1lIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIElmIHRoZSByZWxlYXNlZCBlbGVtZW50IGlzIG91dHNpZGUgdGhlIGdyaWQncyBjb250YWluZXIgZWxlbWVudCBwdXQgaXRcbiAgICAvLyBiYWNrIHRoZXJlIGFuZCBhZGp1c3QgcG9zaXRpb24gYWNjb3JkaW5nbHkuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gY29udGFpbmVyKSB7XG4gICAgICBpZiAoIWN1cnJlbnRTdHlsZXMpIHtcbiAgICAgICAgaWYgKGFib3J0KSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRlbXBTdHlsZXMkMS50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICAgICAgICB0cmFuc2xhdGUueCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYLFxuICAgICAgICAgICAgdHJhbnNsYXRlLnkgLSB0aGlzLl9jb250YWluZXJEaWZmWVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFN0eWxlcyQxLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhpdGVtLl9sZWZ0LCBpdGVtLl90b3ApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSB0ZW1wU3R5bGVzJDE7XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgY3VycmVudFN0eWxlcyk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBkcmFnUmVsZWFzZUVuZCBldmVudC5cbiAgICBpZiAoIWFib3J0KSBncmlkLl9lbWl0KGV2ZW50RHJhZ1JlbGVhc2VFbmQsIGl0ZW0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbVJlbGVhc2V9XG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKHRydWUpO1xuICAgIHRoaXMuX2l0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZXNldCBwdWJsaWMgZGF0YSBhbmQgcmVtb3ZlIHJlbGVhc2luZyBjbGFzcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzUG9zaXRpb25pbmdTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgICByZW1vdmVDbGFzcyhpdGVtLl9lbGVtZW50LCBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuaXRlbVJlbGVhc2luZ0NsYXNzKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgdmFsdWVzIG9mIHRoZSBwcm92aWRlZCBzdHlsZXMgZGVmaW5pdGlvbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDdXJyZW50U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIHZhciBjdXJyZW50ID0ge307XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIGN1cnJlbnRbcHJvcF0gPSBnZXRTdHlsZShlbGVtZW50LCBnZXRTdHlsZU5hbWUocHJvcCkpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXNpYmlsaXR5IG1hbmFnZXIgZm9yIEl0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1WaXNpYmlsaXR5KGl0ZW0pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSBpdGVtLl9pc0FjdGl2ZTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNldCB1cCB2aXNpYmlsaXR5IHN0YXRlcy5cbiAgICB0aGlzLl9pc0hpZGRlbiA9ICFpc0FjdGl2ZTtcbiAgICB0aGlzLl9pc0hpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgLy8gQ2FsbGJhY2sgcXVldWUuXG4gICAgdGhpcy5fcXVldWUgPSBuZXcgUXVldWUoKTtcblxuICAgIC8vIEJpbmQgc2hvdy9oaWRlIGZpbmlzaGVycy5cbiAgICB0aGlzLl9maW5pc2hTaG93ID0gdGhpcy5fZmluaXNoU2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2ZpbmlzaEhpZGUgPSB0aGlzLl9maW5pc2hIaWRlLmJpbmQodGhpcyk7XG5cbiAgICAvLyBGb3JjZSBpdGVtIHRvIGJlIGVpdGhlciB2aXNpYmxlIG9yIGhpZGRlbiBvbiBpbml0LlxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzQWN0aXZlID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgIC8vIFNldCB2aXNpYmxlL2hpZGRlbiBjbGFzcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc0FjdGl2ZSA/IHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgc3R5bGVzIGZvciB0aGUgY2hpbGQgZWxlbWVudC5cbiAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIGlzQWN0aXZlID8gc2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU2hvdyBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbnN0YW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1WaXNpYmlsaXR5fVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24ob25GaW5pc2gpID8gb25GaW5pc2ggOiBudWxsO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBJZiBpdGVtIGlzIHZpc2libGUgY2FsbCB0aGUgY2FsbGJhY2sgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd2luZyAmJiAhdGhpcy5faXNIaWRkZW4pIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGZhbHNlLCBpdGVtKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgc2hvd2luZyBhbmQgZG9lcyBub3QgbmVlZCB0byBiZSBzaG93biBpbnN0YW50bHksIGxldCdzIGp1c3RcbiAgICAvLyBwdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZSBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICh0aGlzLl9pc1Nob3dpbmcgJiYgIWluc3RhbnQpIHtcbiAgICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBoaWRpbmcgb3IgaGlkZGVuIHByb2Nlc3MgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBjYWxsYmFja1xuICAgIC8vIHF1ZXVlIHdpdGggdGhlIGludGVycnVwdGVkIGZsYWcgYWN0aXZlLCB1cGRhdGUgY2xhc3NlcyBhbmQgc2V0IGRpc3BsYXlcbiAgICAvLyB0byBibG9jayBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3dpbmcpIHtcbiAgICAgIHF1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgICAgaWYgKCF0aGlzLl9pc0hpZGluZykgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICAvLyBQdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuXG4gICAgLy8gVXBkYXRlIHZpc2liaWxpdHkgc3RhdGVzLlxuICAgIGl0ZW0uX2lzQWN0aXZlID0gdGhpcy5faXNTaG93aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9pc0hpZGluZyA9IHRoaXMuX2lzSGlkZGVuID0gZmFsc2U7XG5cbiAgICAvLyBGaW5hbGx5IGxldCdzIHN0YXJ0IHNob3cgYW5pbWF0aW9uLlxuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKHRydWUsIGluc3RhbnQsIHRoaXMuX2ZpbmlzaFNob3cpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGUgaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zdGFudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtJdGVtVmlzaWJpbGl0eX1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKG9uRmluaXNoKSA/IG9uRmluaXNoIDogbnVsbDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBhbHJlYWR5IGhpZGRlbiBjYWxsIHRoZSBjYWxsYmFjayBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICghdGhpcy5faXNIaWRpbmcgJiYgdGhpcy5faXNIaWRkZW4pIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGZhbHNlLCBpdGVtKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgaGlkaW5nIGFuZCBkb2VzIG5vdCBuZWVkIHRvIGJlIGhpZGRlbiBpbnN0YW50bHksIGxldCdzIGp1c3RcbiAgICAvLyBwdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZSBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICh0aGlzLl9pc0hpZGluZyAmJiAhaW5zdGFudCkge1xuICAgICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIHNob3dpbmcgb3IgdmlzaWJsZSBwcm9jZXNzIHRoZSBjdXJyZW50IHZpc2liaWxpdHkgY2FsbGJhY2tcbiAgICAvLyBxdWV1ZSB3aXRoIHRoZSBpbnRlcnJ1cHRlZCBmbGFnIGFjdGl2ZSwgdXBkYXRlIGNsYXNzZXMgYW5kIHNldCBkaXNwbGF5XG4gICAgLy8gdG8gYmxvY2sgaWYgbmVjZXNzYXJ5LlxuICAgIGlmICghdGhpcy5faXNIaWRpbmcpIHtcbiAgICAgIHF1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIFB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG5cbiAgICAvLyBVcGRhdGUgdmlzaWJpbGl0eSBzdGF0ZXMuXG4gICAgdGhpcy5faXNIaWRkZW4gPSB0aGlzLl9pc0hpZGluZyA9IHRydWU7XG4gICAgaXRlbS5faXNBY3RpdmUgPSB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcblxuICAgIC8vIEZpbmFsbHkgbGV0J3Mgc3RhcnQgaGlkZSBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24oZmFsc2UsIGluc3RhbnQsIHRoaXMuX2ZpbmlzaEhpZGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbVZpc2liaWxpdHl9XG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBTdG9wIHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgIHRoaXMuX3N0b3BBbmltYXRpb24oe30pO1xuXG4gICAgLy8gRmlyZSBhbGwgdW5jb21wbGV0ZWQgY2FsbGJhY2tzIHdpdGggaW50ZXJydXB0ZWQgZmxhZyBhbmQgZGVzdHJveSB0aGUgcXVldWUuXG4gICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSkuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIHZpc2libGUvaGlkZGVuIGNsYXNzZXMuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIFJlc2V0IHN0YXRlLlxuICAgIHRoaXMuX2l0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0aGlzLl9pc0hpZGRlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCB2aXNpYmlsaXR5IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvVmlzaWJsZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50XVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX3N0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24odG9WaXNpYmxlLCBpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0U3R5bGVzID0gdG9WaXNpYmxlID8gc2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHNldHRpbmdzLmhpZGRlblN0eWxlcztcbiAgICB2YXIgZHVyYXRpb24gPSBwYXJzZUludCh0b1Zpc2libGUgPyBzZXR0aW5ncy5zaG93RHVyYXRpb24gOiBzZXR0aW5ncy5oaWRlRHVyYXRpb24pIHx8IDA7XG4gICAgdmFyIGVhc2luZyA9ICh0b1Zpc2libGUgPyBzZXR0aW5ncy5zaG93RWFzaW5nIDogc2V0dGluZ3MuaGlkZUVhc2luZykgfHwgJ2Vhc2UnO1xuICAgIHZhciBpc0luc3RhbnQgPSBpbnN0YW50IHx8IGR1cmF0aW9uIDw9IDA7XG4gICAgdmFyIGN1cnJlbnRTdHlsZXM7XG5cbiAgICAvLyBObyB0YXJnZXQgc3R5bGVzPyBMZXQncyBxdWl0IGVhcmx5LlxuICAgIGlmICghdGFyZ2V0U3R5bGVzKSB7XG4gICAgICBvbkZpbmlzaCAmJiBvbkZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBxdWV1ZWQgdmlzaWJpbGl0eSB0aWNrLlxuICAgIGNhbmNlbFZpc2liaWxpdHlUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIElmIHdlIG5lZWQgdG8gYXBwbHkgdGhlIHN0eWxlcyBpbnN0YW50bHkgd2l0aG91dCBhbmltYXRpb24uXG4gICAgaWYgKGlzSW5zdGFudCkge1xuICAgICAgaWYgKGl0ZW0uX2FuaW1hdGVDaGlsZC5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIGl0ZW0uX2FuaW1hdGVDaGlsZC5zdG9wKHRhcmdldFN0eWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIHRhcmdldFN0eWxlcyk7XG4gICAgICB9XG4gICAgICBvbkZpbmlzaCAmJiBvbkZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb24gaW4gdGhlIG5leHQgdGljayAodG8gYXZvaWQgbGF5b3V0IHRocmFzaGluZykuXG4gICAgYWRkVmlzaWJpbGl0eVRpY2soXG4gICAgICBpdGVtLl9pZCxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjdXJyZW50U3R5bGVzID0gZ2V0Q3VycmVudFN0eWxlcyhpdGVtLl9jaGlsZCwgdGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0YXJ0KGN1cnJlbnRTdHlsZXMsIHRhcmdldFN0eWxlcywge1xuICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6IGVhc2luZyxcbiAgICAgICAgICBvbkZpbmlzaDogb25GaW5pc2hcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCB2aXNpYmlsaXR5IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldFN0eWxlc11cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fc3RvcEFuaW1hdGlvbiA9IGZ1bmN0aW9uKHRhcmdldFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICBjYW5jZWxWaXNpYmlsaXR5VGljayhpdGVtLl9pZCk7XG4gICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIHNob3cgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX2ZpbmlzaFNob3cgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNIaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgdGhpcy5faXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmlzaCBoaWRlIHByb2NlZHVyZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKi9cbiAgdmFyIGZpbmlzaFN0eWxlcyA9IHt9O1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX2ZpbmlzaEhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzSGlkZGVuKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gZmFsc2U7XG4gICAgZmluaXNoU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZygwLCAwKTtcbiAgICBpdGVtLl9sYXlvdXQuc3RvcCh0cnVlLCBmaW5pc2hTdHlsZXMpO1xuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgaXRlbSk7XG4gIH07XG5cbiAgdmFyIGlkID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHVuaXF1ZSBudW1lcmljIGlkIChpbmNyZW1lbnRzIGEgYmFzZSB2YWx1ZSBvbiBldmVyeSBjYWxsKS5cbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZVVpZCgpIHtcbiAgICByZXR1cm4gKytpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEl0ZW0gaW5zdGFuY2UgZm9yIGEgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzQWN0aXZlXVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbShncmlkLCBlbGVtZW50LCBpc0FjdGl2ZSkge1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIGlkLlxuICAgIHRoaXMuX2lkID0gY3JlYXRlVWlkKCk7XG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gY29ubmVjdGVkIEdyaWQgaW5zdGFuY2UncyBpZC5cbiAgICB0aGlzLl9ncmlkSWQgPSBncmlkLl9pZDtcblxuICAgIC8vIERlc3Ryb3llZCBmbGFnLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBwb3NpdGlvbnMuXG4gICAgdGhpcy5fbGVmdCA9IDA7XG4gICAgdGhpcy5fdG9wID0gMDtcblxuICAgIC8vIFRoZSBlbGVtZW50cy5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9jaGlsZCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG5cbiAgICAvLyBJZiB0aGUgcHJvdmlkZWQgaXRlbSBlbGVtZW50IGlzIG5vdCBhIGRpcmVjdCBjaGlsZCBvZiB0aGUgZ3JpZCBjb250YWluZXJcbiAgICAvLyBlbGVtZW50LCBhcHBlbmQgaXQgdG8gdGhlIGdyaWQgY29udGFpbmVyLlxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IGdyaWQuX2VsZW1lbnQpIHtcbiAgICAgIGdyaWQuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGl0ZW0gY2xhc3MuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUNsYXNzKTtcblxuICAgIC8vIElmIGlzQWN0aXZlIGlzIG5vdCBkZWZpbmVkLCBsZXQncyB0cnkgdG8gYXV0by1kZXRlY3QgaXQuXG4gICAgaWYgKHR5cGVvZiBpc0FjdGl2ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpc0FjdGl2ZSA9IGdldFN0eWxlKGVsZW1lbnQsICdkaXNwbGF5JykgIT09ICdub25lJztcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgYWN0aXZlIHN0YXRlIChkZWZpbmVzIGlmIHRoZSBpdGVtIGlzIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgbGF5b3V0XG4gICAgLy8gb3Igbm90KS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuXG4gICAgLy8gU2V0IGVsZW1lbnQncyBpbml0aWFsIHBvc2l0aW9uIHN0eWxlcy5cbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZygwLCAwKTtcblxuICAgIC8vIEluaXRpYXRlIGl0ZW0ncyBhbmltYXRpb24gY29udHJvbGxlcnMuXG4gICAgdGhpcy5fYW5pbWF0ZSA9IG5ldyBJdGVtQW5pbWF0ZShlbGVtZW50KTtcbiAgICB0aGlzLl9hbmltYXRlQ2hpbGQgPSBuZXcgSXRlbUFuaW1hdGUodGhpcy5fY2hpbGQpO1xuXG4gICAgLy8gU2V0dXAgdmlzaWJpbGl0eSBoYW5kbGVyLlxuICAgIHRoaXMuX3Zpc2liaWxpdHkgPSBuZXcgSXRlbVZpc2liaWxpdHkodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgbGF5b3V0IGhhbmRsZXIuXG4gICAgdGhpcy5fbGF5b3V0ID0gbmV3IEl0ZW1MYXlvdXQodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgbWlncmF0aW9uIGhhbmRsZXIgZGF0YS5cbiAgICB0aGlzLl9taWdyYXRlID0gbmV3IEl0ZW1NaWdyYXRlKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIHJlbGVhc2UgaGFuZGxlci4gTm90ZSB0aGF0IGFsdGhvdWdoIHRoaXMgaXMgZnVsbHkgbGlua2VkIHRvIGRyYWdnaW5nXG4gICAgLy8gdGhpcyBzdGlsbCBuZWVkcyB0byBiZSBhbHdheXMgaW5zdGFudGlhdGVkIHRvIGhhbmRsZSBtaWdyYXRpb24gc2NlbmFyaW9zXG4gICAgLy8gY29ycmVjdGx5LlxuICAgIHRoaXMuX3JlbGVhc2UgPSBuZXcgSXRlbVJlbGVhc2UodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgZHJhZyBwbGFjZWhvbGRlciBoYW5kbGVyLiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBpcyBmdWxseSBsaW5rZWQgdG9cbiAgICAvLyBkcmFnZ2luZyB0aGlzIHN0aWxsIG5lZWRzIHRvIGJlIGFsd2F5cyBpbnN0YW50aWF0ZWQgdG8gaGFuZGxlIG1pZ3JhdGlvblxuICAgIC8vIHNjZW5hcmlvcyBjb3JyZWN0bHkuXG4gICAgdGhpcy5fZHJhZ1BsYWNlaG9sZGVyID0gbmV3IEl0ZW1EcmFnUGxhY2Vob2xkZXIodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgZHJhZyBoYW5kbGVyLlxuICAgIHRoaXMuX2RyYWcgPSBzZXR0aW5ncy5kcmFnRW5hYmxlZCA/IG5ldyBJdGVtRHJhZyh0aGlzKSA6IG51bGw7XG5cbiAgICAvLyBTZXQgdXAgdGhlIGluaXRpYWwgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIHRoaXMuX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgdGhpcy5fcmVmcmVzaFNvcnREYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBncmlkIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRHcmlkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdyaWRJbnN0YW5jZXNbdGhpcy5fZ3JpZElkXTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIHdpZHRoLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIGhlaWdodC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIG1hcmdpbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqICAgLSBUaGUgcmV0dXJuZWQgb2JqZWN0IGNvbnRhaW5zIGxlZnQsIHJpZ2h0LCB0b3AgYW5kIGJvdHRvbSBwcm9wZXJ0aWVzXG4gICAqICAgICB3aGljaCBpbmRpY2F0ZSB0aGUgaXRlbSBlbGVtZW50J3MgY2FjaGVkIG1hcmdpbnMuXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRNYXJnaW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogdGhpcy5fbWFyZ2luTGVmdCxcbiAgICAgIHJpZ2h0OiB0aGlzLl9tYXJnaW5SaWdodCxcbiAgICAgIHRvcDogdGhpcy5fbWFyZ2luVG9wLFxuICAgICAgYm90dG9tOiB0aGlzLl9tYXJnaW5Cb3R0b21cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogICAtIFRoZSByZXR1cm5lZCBvYmplY3QgY29udGFpbnMgbGVmdCBhbmQgdG9wIHByb3BlcnRpZXMgd2hpY2ggaW5kaWNhdGUgdGhlXG4gICAqICAgICBpdGVtIGVsZW1lbnQncyBjYWNoZWQgcG9zaXRpb24gaW4gdGhlIGdyaWQuXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiB0aGlzLl9sZWZ0LFxuICAgICAgdG9wOiB0aGlzLl90b3BcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBhY3RpdmU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIHZpc2libGU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fdmlzaWJpbGl0eSAmJiAhdGhpcy5fdmlzaWJpbGl0eS5faXNIaWRkZW47XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIGFuaW1hdGVkIHRvIHZpc2libGU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNTaG93aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3Zpc2liaWxpdHkgJiYgdGhpcy5fdmlzaWJpbGl0eS5faXNTaG93aW5nKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgYW5pbWF0ZWQgdG8gaGlkZGVuP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzSGlkaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3Zpc2liaWxpdHkgJiYgdGhpcy5fdmlzaWJpbGl0eS5faXNIaWRpbmcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBwb3NpdGlvbmluZz9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Bvc2l0aW9uaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX2xheW91dCAmJiB0aGlzLl9sYXlvdXQuX2lzQWN0aXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgZHJhZ2dlZD9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX2RyYWcgJiYgdGhpcy5fZHJhZy5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyByZWxlYXNlZD9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1JlbGVhc2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl9yZWxlYXNlICYmIHRoaXMuX3JlbGVhc2UuX2lzQWN0aXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gZGVzdHJveWVkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzRGVzdHJveWVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGVzdHJveWVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlIGl0ZW0ncyBkaW1lbnNpb25zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9yZWZyZXNoRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGRlbikgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBkcmFnUGxhY2Vob2xkZXIgPSB0aGlzLl9kcmFnUGxhY2Vob2xkZXI7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAgdGhpcy5fd2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IHJlY3QuaGVpZ2h0O1xuXG4gICAgLy8gQ2FsY3VsYXRlIG1hcmdpbnMgKGlnbm9yZSBuZWdhdGl2ZSBtYXJnaW5zKS5cbiAgICB0aGlzLl9tYXJnaW5MZWZ0ID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tbGVmdCcpKTtcbiAgICB0aGlzLl9tYXJnaW5SaWdodCA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLXJpZ2h0JykpO1xuICAgIHRoaXMuX21hcmdpblRvcCA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLXRvcCcpKTtcbiAgICB0aGlzLl9tYXJnaW5Cb3R0b20gPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi1ib3R0b20nKSk7XG5cbiAgICAvLyBLZWVwIGRyYWcgcGxhY2Vob2xkZXIncyBkaW1lbnNpb25zIHN5bmNlZCB3aXRoIHRoZSBpdGVtJ3MuXG4gICAgaWYgKGRyYWdQbGFjZWhvbGRlcikge1xuICAgICAgZHJhZ1BsYWNlaG9sZGVyLnVwZGF0ZURpbWVuc2lvbnModGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaCBhbmQgc3RvcmUgaXRlbSdzIHNvcnQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5fcmVmcmVzaFNvcnREYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgZGF0YSA9ICh0aGlzLl9zb3J0RGF0YSA9IHt9KTtcbiAgICB2YXIgZ2V0dGVycyA9IHRoaXMuZ2V0R3JpZCgpLl9zZXR0aW5ncy5zb3J0RGF0YTtcbiAgICB2YXIgcHJvcDtcblxuICAgIGZvciAocHJvcCBpbiBnZXR0ZXJzKSB7XG4gICAgICBkYXRhW3Byb3BdID0gZ2V0dGVyc1twcm9wXSh0aGlzLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbW92ZUVsZW1lbnQ9ZmFsc2VdXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uKHJlbW92ZUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBpbmRleCA9IGdyaWQuX2l0ZW1zLmluZGV4T2YodGhpcyk7XG5cbiAgICAvLyBEZXN0cm95IGhhbmRsZXJzLlxuICAgIHRoaXMuX3JlbGVhc2UuZGVzdHJveSgpO1xuICAgIHRoaXMuX21pZ3JhdGUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2xheW91dC5kZXN0cm95KCk7XG4gICAgdGhpcy5fdmlzaWJpbGl0eS5kZXN0cm95KCk7XG4gICAgdGhpcy5fYW5pbWF0ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fYW5pbWF0ZUNoaWxkLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9kcmFnUGxhY2Vob2xkZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuX2RyYWcgJiYgdGhpcy5fZHJhZy5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgYWxsIGlubGluZSBzdHlsZXMuXG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgdGhpcy5fY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gY2xhc3MuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUNsYXNzKTtcblxuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gR3JpZCBpbnN0YW5jZSBpZiBpdCBzdGlsbCBleGlzdHMgdGhlcmUuXG4gICAgaW5kZXggPiAtMSAmJiBncmlkLl9pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gUmVtb3ZlIGVsZW1lbnQgZnJvbSBET00uXG4gICAgcmVtb3ZlRWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAvLyBSZXNldCBzdGF0ZS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZGVmYXVsdCBsYXlvdXQgYWxnb3JpdGhtIGZvciBNdXVyaS4gQmFzZWQgb24gTUFYUkVDVFMgYXBwcm9hY2hcbiAgICogYXMgZGVzY3JpYmVkIGJ5IEp1a2thIEp5bMOkbmtpIGluIGhpcyBzdXJ2ZXk6IFwiQSBUaG91c2FuZCBXYXlzIHRvIFBhY2sgdGhlXG4gICAqIEJpbiAtIEEgUHJhY3RpY2FsIEFwcHJvYWNoIHRvIFR3by1EaW1lbnNpb25hbCBSZWN0YW5nbGUgQmluIFBhY2tpbmcuXCIuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUGFja2VyKCkge1xuICAgIHRoaXMuX3Nsb3RzID0gW107XG4gICAgdGhpcy5fc2xvdFNpemVzID0gW107XG4gICAgdGhpcy5fZnJlZVNsb3RzID0gW107XG4gICAgdGhpcy5fbmV3U2xvdHMgPSBbXTtcbiAgICB0aGlzLl9yZWN0SXRlbSA9IHt9O1xuICAgIHRoaXMuX3JlY3RTdG9yZSA9IFtdO1xuICAgIHRoaXMuX3JlY3RJZCA9IDA7XG5cbiAgICAvLyBUaGUgbGF5b3V0IHJldHVybiBkYXRhLCB3aGljaCB3aWxsIGJlIHBvcHVsYXRlZCBpbiBnZXRMYXlvdXQuXG4gICAgdGhpcy5fbGF5b3V0ID0ge1xuICAgICAgc2xvdHM6IG51bGwsXG4gICAgICBzZXRXaWR0aDogZmFsc2UsXG4gICAgICBzZXRIZWlnaHQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IGZhbHNlLFxuICAgICAgaGVpZ2h0OiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBCaW5kIHNvcnQgaGFuZGxlcnMuXG4gICAgdGhpcy5fc29ydFJlY3RzTGVmdFRvcCA9IHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0ID0gdGhpcy5fc29ydFJlY3RzVG9wTGVmdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtW119IGl0ZW1zXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEBwYXJhbSB7TnVtYmVyW119IFtzbG90c11cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbGxHYXBzPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmhvcml6b250YWw9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxpZ25SaWdodD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGlnbkJvdHRvbT1mYWxzZV1cbiAgICogQHJldHVybnMge0xheW91dERhdGF9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLmdldExheW91dCA9IGZ1bmN0aW9uKGl0ZW1zLCB3aWR0aCwgaGVpZ2h0LCBzbG90cywgb3B0aW9ucykge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgdmFyIGZpbGxHYXBzID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmZpbGxHYXBzKTtcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmhvcml6b250YWwpO1xuICAgIHZhciBhbGlnblJpZ2h0ID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmFsaWduUmlnaHQpO1xuICAgIHZhciBhbGlnbkJvdHRvbSA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGlnbkJvdHRvbSk7XG4gICAgdmFyIHJvdW5kaW5nID0gISEob3B0aW9ucyAmJiBvcHRpb25zLnJvdW5kaW5nKTtcbiAgICB2YXIgc2xvdFNpemVzID0gdGhpcy5fc2xvdFNpemVzO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUmVzZXQgbGF5b3V0IGRhdGEuXG4gICAgbGF5b3V0LnNsb3RzID0gc2xvdHMgPyBzbG90cyA6IHRoaXMuX3Nsb3RzO1xuICAgIGxheW91dC53aWR0aCA9IGlzSG9yaXpvbnRhbCA/IDAgOiByb3VuZGluZyA/IE1hdGgucm91bmQod2lkdGgpIDogd2lkdGg7XG4gICAgbGF5b3V0LmhlaWdodCA9ICFpc0hvcml6b250YWwgPyAwIDogcm91bmRpbmcgPyBNYXRoLnJvdW5kKGhlaWdodCkgOiBoZWlnaHQ7XG4gICAgbGF5b3V0LnNldFdpZHRoID0gaXNIb3Jpem9udGFsO1xuICAgIGxheW91dC5zZXRIZWlnaHQgPSAhaXNIb3Jpem9udGFsO1xuXG4gICAgLy8gTWFrZSBzdXJlIHNsb3RzIGFuZCBzbG90IHNpemUgYXJyYXlzIGFyZSByZXNldC5cbiAgICBsYXlvdXQuc2xvdHMubGVuZ3RoID0gMDtcbiAgICBzbG90U2l6ZXMubGVuZ3RoID0gMDtcblxuICAgIC8vIE5vIG5lZWQgdG8gZ28gZnVydGhlciBpZiBpdGVtcyBkbyBub3QgZXhpc3QuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHJldHVybiBsYXlvdXQ7XG5cbiAgICAvLyBGaW5kIHNsb3RzIGZvciBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX2FkZFNsb3QoaXRlbXNbaV0sIGlzSG9yaXpvbnRhbCwgZmlsbEdhcHMsIHJvdW5kaW5nLCBhbGlnblJpZ2h0IHx8IGFsaWduQm90dG9tKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYWxpZ25tZW50IGlzIHNldCB0byByaWdodCB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgcmVzdWx0cy5cbiAgICBpZiAoYWxpZ25SaWdodCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxheW91dC5zbG90cy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgICBsYXlvdXQuc2xvdHNbaV0gPSBsYXlvdXQud2lkdGggLSAobGF5b3V0LnNsb3RzW2ldICsgc2xvdFNpemVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYWxpZ25tZW50IGlzIHNldCB0byBib3R0b20gd2UgbmVlZCB0byBhZGp1c3QgdGhlIHJlc3VsdHMuXG4gICAgaWYgKGFsaWduQm90dG9tKSB7XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbGF5b3V0LnNsb3RzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgIGxheW91dC5zbG90c1tpXSA9IGxheW91dC5oZWlnaHQgLSAobGF5b3V0LnNsb3RzW2ldICsgc2xvdFNpemVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXNldCBzbG90cyBhcnJheXMgYW5kIHJlY3QgaWQuXG4gICAgc2xvdFNpemVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJlZVNsb3RzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fbmV3U2xvdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9yZWN0SWQgPSAwO1xuXG4gICAgcmV0dXJuIGxheW91dDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHBvc2l0aW9uIGZvciB0aGUgbGF5b3V0IGl0ZW0uIFJldHVybnMgdGhlIGxlZnQgYW5kIHRvcCBwb3NpdGlvblxuICAgKiBvZiB0aGUgaXRlbSBpbiBwaXhlbHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzSG9yaXpvbnRhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbGxHYXBzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcm91bmRpbmdcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fYWRkU2xvdCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgZXBzID0gMC4wMDE7XG4gICAgdmFyIGl0ZW1TbG90ID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0sIGlzSG9yaXpvbnRhbCwgZmlsbEdhcHMsIHJvdW5kaW5nLCB0cmFja1NpemUpIHtcbiAgICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgICB2YXIgZnJlZVNsb3RzID0gdGhpcy5fZnJlZVNsb3RzO1xuICAgICAgdmFyIG5ld1Nsb3RzID0gdGhpcy5fbmV3U2xvdHM7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIHZhciByZWN0SWQ7XG4gICAgICB2YXIgcG90ZW50aWFsU2xvdHM7XG4gICAgICB2YXIgaWdub3JlQ3VycmVudFNsb3RzO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgaWk7XG5cbiAgICAgIC8vIFJlc2V0IG5ldyBzbG90cy5cbiAgICAgIG5ld1Nsb3RzLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIFNldCBpdGVtIHNsb3QgaW5pdGlhbCBkYXRhLlxuICAgICAgaXRlbVNsb3QubGVmdCA9IG51bGw7XG4gICAgICBpdGVtU2xvdC50b3AgPSBudWxsO1xuICAgICAgaXRlbVNsb3Qud2lkdGggPSBpdGVtLl93aWR0aCArIGl0ZW0uX21hcmdpbkxlZnQgKyBpdGVtLl9tYXJnaW5SaWdodDtcbiAgICAgIGl0ZW1TbG90LmhlaWdodCA9IGl0ZW0uX2hlaWdodCArIGl0ZW0uX21hcmdpblRvcCArIGl0ZW0uX21hcmdpbkJvdHRvbTtcblxuICAgICAgLy8gUm91bmQgaXRlbSBzbG90IHdpZHRoIGFuZCBoZWlnaHQgaWYgbmVlZGVkLlxuICAgICAgaWYgKHJvdW5kaW5nKSB7XG4gICAgICAgIGl0ZW1TbG90LndpZHRoID0gTWF0aC5yb3VuZChpdGVtU2xvdC53aWR0aCk7XG4gICAgICAgIGl0ZW1TbG90LmhlaWdodCA9IE1hdGgucm91bmQoaXRlbVNsb3QuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBzbG90IGZvciB0aGUgaXRlbS5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmcmVlU2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVjdElkID0gZnJlZVNsb3RzW2ldO1xuICAgICAgICBpZiAoIXJlY3RJZCkgY29udGludWU7XG4gICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgIGlmIChpdGVtU2xvdC53aWR0aCA8PSByZWN0LndpZHRoICsgZXBzICYmIGl0ZW1TbG90LmhlaWdodCA8PSByZWN0LmhlaWdodCArIGVwcykge1xuICAgICAgICAgIGl0ZW1TbG90LmxlZnQgPSByZWN0LmxlZnQ7XG4gICAgICAgICAgaXRlbVNsb3QudG9wID0gcmVjdC50b3A7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gc2xvdCB3YXMgZm91bmQgZm9yIHRoZSBpdGVtLlxuICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIGl0ZW0gaW4gdG8gdGhlIGJvdHRvbSBsZWZ0ICh2ZXJ0aWNhbCBtb2RlKSBvciB0b3AgcmlnaHRcbiAgICAgICAgLy8gKGhvcml6b250YWwgbW9kZSkgb2YgdGhlIGdyaWQuXG4gICAgICAgIGl0ZW1TbG90LmxlZnQgPSAhaXNIb3Jpem9udGFsID8gMCA6IGxheW91dC53aWR0aDtcbiAgICAgICAgaXRlbVNsb3QudG9wID0gIWlzSG9yaXpvbnRhbCA/IGxheW91dC5oZWlnaHQgOiAwO1xuXG4gICAgICAgIC8vIElmIGdhcHMgZG9uJ3QgbmVlZCBmaWxsaW5nIGRvIG5vdCBhZGQgYW55IGN1cnJlbnQgc2xvdHMgdG8gdGhlIG5ld1xuICAgICAgICAvLyBzbG90cyBhcnJheS5cbiAgICAgICAgaWYgKCFmaWxsR2Fwcykge1xuICAgICAgICAgIGlnbm9yZUN1cnJlbnRTbG90cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSW4gdmVydGljYWwgbW9kZSwgaWYgdGhlIGl0ZW0ncyBib3R0b20gb3ZlcmxhcHMgdGhlIGdyaWQncyBib3R0b20uXG4gICAgICBpZiAoIWlzSG9yaXpvbnRhbCAmJiBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQgPiBsYXlvdXQuaGVpZ2h0KSB7XG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIGxlZnQgZWRnZSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ID4gMCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2godGhpcy5fYWRkUmVjdCgwLCBsYXlvdXQuaGVpZ2h0LCBpdGVtU2xvdC5sZWZ0LCBJbmZpbml0eSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgcmlnaHQgZWRnZSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGggPCBsYXlvdXQud2lkdGgpIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgICAgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoLFxuICAgICAgICAgICAgICBsYXlvdXQuaGVpZ2h0LFxuICAgICAgICAgICAgICBsYXlvdXQud2lkdGggLSBpdGVtU2xvdC5sZWZ0IC0gaXRlbVNsb3Qud2lkdGgsXG4gICAgICAgICAgICAgIEluZmluaXR5XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBncmlkIGhlaWdodC5cbiAgICAgICAgbGF5b3V0LmhlaWdodCA9IGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gaG9yaXpvbnRhbCBtb2RlLCBpZiB0aGUgaXRlbSdzIHJpZ2h0IG92ZXJsYXBzIHRoZSBncmlkJ3MgcmlnaHQgZWRnZS5cbiAgICAgIGlmIChpc0hvcml6b250YWwgJiYgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoID4gbGF5b3V0LndpZHRoKSB7XG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIHRvcCwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC50b3AgPiAwKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaCh0aGlzLl9hZGRSZWN0KGxheW91dC53aWR0aCwgMCwgSW5maW5pdHksIGl0ZW1TbG90LnRvcCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgYm90dG9tLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCA8IGxheW91dC5oZWlnaHQpIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgICAgbGF5b3V0LndpZHRoLFxuICAgICAgICAgICAgICBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQsXG4gICAgICAgICAgICAgIEluZmluaXR5LFxuICAgICAgICAgICAgICBsYXlvdXQuaGVpZ2h0IC0gaXRlbVNsb3QudG9wIC0gaXRlbVNsb3QuaGVpZ2h0XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBncmlkIHdpZHRoLlxuICAgICAgICBsYXlvdXQud2lkdGggPSBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFuIHVwIHRoZSBjdXJyZW50IHNsb3RzIG1ha2luZyBzdXJlIHRoZXJlIGFyZSBubyBvbGQgc2xvdHMgdGhhdFxuICAgICAgLy8gb3ZlcmxhcCB3aXRoIHRoZSBpdGVtLiBJZiBhbiBvbGQgc2xvdCBvdmVybGFwcyB3aXRoIHRoZSBpdGVtLCBzcGxpdCBpdFxuICAgICAgLy8gaW50byBzbWFsbGVyIHNsb3RzIGlmIG5lY2Vzc2FyeS5cbiAgICAgIGZvciAoaSA9IGZpbGxHYXBzID8gMCA6IGlnbm9yZUN1cnJlbnRTbG90cyA/IGZyZWVTbG90cy5sZW5ndGggOiBpOyBpIDwgZnJlZVNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlY3RJZCA9IGZyZWVTbG90c1tpXTtcbiAgICAgICAgaWYgKCFyZWN0SWQpIGNvbnRpbnVlO1xuICAgICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgICBwb3RlbnRpYWxTbG90cyA9IHRoaXMuX3NwbGl0UmVjdChyZWN0LCBpdGVtU2xvdCk7XG4gICAgICAgIGZvciAoaWkgPSAwOyBpaSA8IHBvdGVudGlhbFNsb3RzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIHJlY3RJZCA9IHBvdGVudGlhbFNsb3RzW2lpXTtcbiAgICAgICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgICAgIC8vIExldCdzIG1ha2Ugc3VyZSBoZXJlIHRoYXQgd2UgaGF2ZSBhIGJpZyBlbm91Z2ggc2xvdFxuICAgICAgICAgIC8vICh3aWR0aC9oZWlnaHQgPiAwLjQ5cHgpIGFuZCBhbHNvIGxldCdzIG1ha2Ugc3VyZSB0aGF0IHRoZSBzbG90IGlzXG4gICAgICAgICAgLy8gd2l0aGluIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBncmlkLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlY3Qud2lkdGggPiAwLjQ5ICYmXG4gICAgICAgICAgICByZWN0LmhlaWdodCA+IDAuNDkgJiZcbiAgICAgICAgICAgICgoIWlzSG9yaXpvbnRhbCAmJiByZWN0LnRvcCA8IGxheW91dC5oZWlnaHQpIHx8XG4gICAgICAgICAgICAgIChpc0hvcml6b250YWwgJiYgcmVjdC5sZWZ0IDwgbGF5b3V0LndpZHRoKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5ld1Nsb3RzLnB1c2gocmVjdElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2FuaXRpemUgbmV3IHNsb3RzLlxuICAgICAgaWYgKG5ld1Nsb3RzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9wdXJnZVJlY3RzKG5ld1Nsb3RzKS5zb3J0KFxuICAgICAgICAgIGlzSG9yaXpvbnRhbCA/IHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AgOiB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBsYXlvdXQgd2lkdGgvaGVpZ2h0LlxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICBsYXlvdXQud2lkdGggPSBNYXRoLm1heChsYXlvdXQud2lkdGgsIGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gTWF0aC5tYXgobGF5b3V0LmhlaWdodCwgaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGl0ZW0gc2xvdCBkYXRhIHRvIGxheW91dCBzbG90cyAoYW5kIHN0b3JlIHRoZSBzbG90IHNpemUgZm9yIGxhdGVyXG4gICAgICAvLyB1c2FnZSB0b28gaWYgbmVjZXNzYXJ5KS5cbiAgICAgIGxheW91dC5zbG90cy5wdXNoKGl0ZW1TbG90LmxlZnQsIGl0ZW1TbG90LnRvcCk7XG4gICAgICBpZiAodHJhY2tTaXplKSB0aGlzLl9zbG90U2l6ZXMucHVzaChpdGVtU2xvdC53aWR0aCwgaXRlbVNsb3QuaGVpZ2h0KTtcblxuICAgICAgLy8gRnJlZS9uZXcgc2xvdHMgc3dpdGNoZXJvbyFcbiAgICAgIHRoaXMuX2ZyZWVTbG90cyA9IG5ld1Nsb3RzO1xuICAgICAgdGhpcy5fbmV3U2xvdHMgPSBmcmVlU2xvdHM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQWRkIGEgbmV3IHJlY3RhbmdsZSB0byB0aGUgcmVjdGFuZ2xlIHN0b3JlLiBSZXR1cm5zIHRoZSBpZCBvZiB0aGUgbmV3XG4gICAqIHJlY3RhbmdsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlZnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvcFxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgKiBAcmV0dXJucyB7UmVjdElkfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fYWRkUmVjdCA9IGZ1bmN0aW9uKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICAgIHZhciByZWN0SWQgPSArK3RoaXMuX3JlY3RJZDtcbiAgICB2YXIgcmVjdFN0b3JlID0gdGhpcy5fcmVjdFN0b3JlO1xuXG4gICAgcmVjdFN0b3JlW3JlY3RJZF0gPSBsZWZ0IHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IHRvcCB8fCAwO1xuICAgIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSB3aWR0aCB8fCAwO1xuICAgIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSBoZWlnaHQgfHwgMDtcblxuICAgIHJldHVybiByZWN0SWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCByZWN0YW5nbGUgZGF0YSBmcm9tIHRoZSByZWN0YW5nbGUgc3RvcmUgYnkgaWQuIE9wdGlvbmFsbHkgeW91IGNhblxuICAgKiBwcm92aWRlIGEgdGFyZ2V0IG9iamVjdCB3aGVyZSB0aGUgcmVjdGFuZ2xlIGRhdGEgd2lsbCBiZSB3cml0dGVuIGluLiBCeVxuICAgKiBkZWZhdWx0IGFuIGludGVybmFsIG9iamVjdCBpcyByZXVzZWQgYXMgYSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gaWRcbiAgICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRdXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9nZXRSZWN0ID0gZnVuY3Rpb24oaWQsIHRhcmdldCkge1xuICAgIHZhciByZWN0SXRlbSA9IHRhcmdldCA/IHRhcmdldCA6IHRoaXMuX3JlY3RJdGVtO1xuICAgIHZhciByZWN0U3RvcmUgPSB0aGlzLl9yZWN0U3RvcmU7XG5cbiAgICByZWN0SXRlbS5sZWZ0ID0gcmVjdFN0b3JlW2lkXSB8fCAwO1xuICAgIHJlY3RJdGVtLnRvcCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuICAgIHJlY3RJdGVtLndpZHRoID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0uaGVpZ2h0ID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG5cbiAgICByZXR1cm4gcmVjdEl0ZW07XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1bmNoIGEgaG9sZSBpbnRvIGEgcmVjdGFuZ2xlIGFuZCBzcGxpdCB0aGUgcmVtYWluaW5nIGFyZWEgaW50byBzbWFsbGVyXG4gICAqIHJlY3RhbmdsZXMgKDQgYXQgbWF4KS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IHJlY3RcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGhvbGVcbiAgICogQHJldHVybnMge1JlY3RJZFtdfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fc3BsaXRSZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3QsIGhvbGUpIHtcbiAgICAgIC8vIFJlc2V0IG9sZCByZXN1bHRzLlxuICAgICAgcmVzdWx0cy5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBJZiB0aGUgcmVjdCBkb2VzIG5vdCBvdmVybGFwIHdpdGggdGhlIGhvbGUgYWRkIHJlY3QgdG8gdGhlIHJldHVybiBkYXRhXG4gICAgICAvLyBhcyBpcy5cbiAgICAgIGlmICghdGhpcy5fZG9SZWN0c092ZXJsYXAocmVjdCwgaG9sZSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG5cbiAgICAgIC8vIExlZnQgc3BsaXQuXG4gICAgICBpZiAocmVjdC5sZWZ0IDwgaG9sZS5sZWZ0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9hZGRSZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIGhvbGUubGVmdCAtIHJlY3QubGVmdCwgcmVjdC5oZWlnaHQpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmlnaHQgc3BsaXQuXG4gICAgICBpZiAocmVjdC5sZWZ0ICsgcmVjdC53aWR0aCA+IGhvbGUubGVmdCArIGhvbGUud2lkdGgpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICBob2xlLmxlZnQgKyBob2xlLndpZHRoLFxuICAgICAgICAgICAgcmVjdC50b3AsXG4gICAgICAgICAgICByZWN0LmxlZnQgKyByZWN0LndpZHRoIC0gKGhvbGUubGVmdCArIGhvbGUud2lkdGgpLFxuICAgICAgICAgICAgcmVjdC5oZWlnaHRcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvcCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LnRvcCA8IGhvbGUudG9wKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9hZGRSZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIHJlY3Qud2lkdGgsIGhvbGUudG9wIC0gcmVjdC50b3ApKTtcbiAgICAgIH1cblxuICAgICAgLy8gQm90dG9tIHNwbGl0LlxuICAgICAgaWYgKHJlY3QudG9wICsgcmVjdC5oZWlnaHQgPiBob2xlLnRvcCArIGhvbGUuaGVpZ2h0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChcbiAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgcmVjdC5sZWZ0LFxuICAgICAgICAgICAgaG9sZS50b3AgKyBob2xlLmhlaWdodCxcbiAgICAgICAgICAgIHJlY3Qud2lkdGgsXG4gICAgICAgICAgICByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC0gKGhvbGUudG9wICsgaG9sZS5oZWlnaHQpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcmVjdGFuZ2xlcyBvdmVybGFwLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2RvUmVjdHNPdmVybGFwID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiAhKFxuICAgICAgYS5sZWZ0ICsgYS53aWR0aCA8PSBiLmxlZnQgfHxcbiAgICAgIGIubGVmdCArIGIud2lkdGggPD0gYS5sZWZ0IHx8XG4gICAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wIHx8XG4gICAgICBiLnRvcCArIGIuaGVpZ2h0IDw9IGEudG9wXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSByZWN0YW5nbGUgaXMgZnVsbHkgd2l0aGluIGFub3RoZXIgcmVjdGFuZ2xlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2lzUmVjdFdpdGhpblJlY3QgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubGVmdCA+PSBiLmxlZnQgJiZcbiAgICAgIGEudG9wID49IGIudG9wICYmXG4gICAgICBhLmxlZnQgKyBhLndpZHRoIDw9IGIubGVmdCArIGIud2lkdGggJiZcbiAgICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgKyBiLmhlaWdodFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgb2YgcmVjdGFuZ2xlIGlkcyBhbmQgcmVzZXRzIGFsbCB0aGF0IGFyZSBmdWxseVxuICAgKiB3aXRoaW4gYW5vdGhlciByZWN0YW5nbGUgaW4gdGhlIGFycmF5LiBSZXNldHRpbmcgaW4gdGhpcyBjYXNlIG1lYW5zIHRoYXRcbiAgICogdGhlIHJlY3RhbmdsZSBpZCB2YWx1ZSBpcyByZXBsYWNlZCB3aXRoIHplcm8uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkW119IHJlY3RJZHNcbiAgICogQHJldHVybnMge1JlY3RJZFtdfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fcHVyZ2VSZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjdEEgPSB7fTtcbiAgICB2YXIgcmVjdEIgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdElkcykge1xuICAgICAgdmFyIGkgPSByZWN0SWRzLmxlbmd0aDtcbiAgICAgIHZhciBpaTtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpaSA9IHJlY3RJZHMubGVuZ3RoO1xuICAgICAgICBpZiAoIXJlY3RJZHNbaV0pIGNvbnRpbnVlO1xuICAgICAgICB0aGlzLl9nZXRSZWN0KHJlY3RJZHNbaV0sIHJlY3RBKTtcbiAgICAgICAgd2hpbGUgKGlpLS0pIHtcbiAgICAgICAgICBpZiAoIXJlY3RJZHNbaWldIHx8IGkgPT09IGlpKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodGhpcy5faXNSZWN0V2l0aGluUmVjdChyZWN0QSwgdGhpcy5fZ2V0UmVjdChyZWN0SWRzW2lpXSwgcmVjdEIpKSkge1xuICAgICAgICAgICAgcmVjdElkc1tpXSA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlY3RJZHM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogU29ydCByZWN0YW5nbGVzIHdpdGggdG9wLWxlZnQgZ3Jhdml0eS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWR9IGFJZFxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYklkXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9zb3J0UmVjdHNUb3BMZWZ0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWN0QSA9IHt9O1xuICAgIHZhciByZWN0QiA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihhSWQsIGJJZCkge1xuICAgICAgdGhpcy5fZ2V0UmVjdChhSWQsIHJlY3RBKTtcbiAgICAgIHRoaXMuX2dldFJlY3QoYklkLCByZWN0Qik7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIHJldHVybiByZWN0QS50b3AgPCByZWN0Qi50b3AgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wID4gcmVjdEIudG9wID8gMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA8IHJlY3RCLmxlZnQgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA+IHJlY3RCLmxlZnQgPyAxIDogMDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBTb3J0IHJlY3RhbmdsZXMgd2l0aCBsZWZ0LXRvcCBncmF2aXR5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYUlkXG4gICAqIEBwYXJhbSB7UmVjdElkfSBiSWRcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3NvcnRSZWN0c0xlZnRUb3AgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY3RBID0ge307XG4gICAgdmFyIHJlY3RCID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFJZCwgYklkKSB7XG4gICAgICB0aGlzLl9nZXRSZWN0KGFJZCwgcmVjdEEpO1xuICAgICAgdGhpcy5fZ2V0UmVjdChiSWQsIHJlY3RCKTtcbiAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgcmV0dXJuIHJlY3RBLmxlZnQgPCByZWN0Qi5sZWZ0ID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLmxlZnQgPiByZWN0Qi5sZWZ0ID8gMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wIDwgcmVjdEIudG9wID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLnRvcCA+IHJlY3RCLnRvcCA/IDEgOiAwO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgdmFyIGh0bWxDb2xsZWN0aW9uVHlwZSA9ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXSc7XG4gIHZhciBub2RlTGlzdFR5cGUgPSAnW29iamVjdCBOb2RlTGlzdF0nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbm9kZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNOb2RlTGlzdCh2YWwpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpO1xuICAgIHJldHVybiB0eXBlID09PSBodG1sQ29sbGVjdGlvblR5cGUgfHwgdHlwZSA9PT0gbm9kZUxpc3RUeXBlO1xuICB9XG5cbiAgdmFyIG9iamVjdFR5cGUgPSAnb2JqZWN0JztcbiAgdmFyIG9iamVjdFRvU3RyaW5nVHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IG9iamVjdFR5cGUgJiYgdG9TdHJpbmcuY2FsbCh2YWwpID09PSBvYmplY3RUb1N0cmluZ1R5cGU7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSB2YWx1ZSB0byBhbiBhcnJheSBvciBjbG9uZXMgYW4gYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdGFyZ2V0XG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGlzTm9kZUxpc3QodGFyZ2V0KSA/IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCkgOiBBcnJheS5wcm90b3R5cGUuY29uY2F0KHRhcmdldCk7XG4gIH1cblxuICB2YXIgcGFja2VyID0gbmV3IFBhY2tlcigpO1xuICB2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbiAgdmFyIG51bWJlclR5cGUkMSA9ICdudW1iZXInO1xuICB2YXIgc3RyaW5nVHlwZSA9ICdzdHJpbmcnO1xuICB2YXIgaW5zdGFudExheW91dCA9ICdpbnN0YW50JztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U3RyaW5nKX0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7PyhIVE1MRWxlbWVudFtdfE5vZGVMaXN0fFN0cmluZyl9IFtvcHRpb25zLml0ZW1zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2hvd0R1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNob3dFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52aXNpYmxlU3R5bGVzXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaGlkZUR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmhpZGVFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5oaWRkZW5TdHlsZXNdXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IFtvcHRpb25zLmxheW91dF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuZmlsbEdhcHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0Lmhvcml6b250YWw9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LmFsaWduUmlnaHQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LmFsaWduQm90dG9tPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5yb3VuZGluZz10cnVlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufE51bWJlcil9IFtvcHRpb25zLmxheW91dE9uUmVzaXplPTEwMF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXRPbkluaXQ9dHJ1ZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmxheW91dER1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmxheW91dEVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHs/T2JqZWN0fSBbb3B0aW9ucy5zb3J0RGF0YT1udWxsXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRyYWdFbmFibGVkPWZhbHNlXVxuICAgKiBAcGFyYW0gez9IdG1sRWxlbWVudH0gW29wdGlvbnMuZHJhZ0NvbnRhaW5lcj1udWxsXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlLmRpc3RhbmNlPTBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuZGVsYXk9MF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxTdHJpbmcpfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuaGFuZGxlPWZhbHNlXVxuICAgKiBAcGFyYW0gez9TdHJpbmd9IFtvcHRpb25zLmRyYWdBeGlzXVxuICAgKiBAcGFyYW0geyhCb29sZWFufEZ1bmN0aW9uKX0gW29wdGlvbnMuZHJhZ1NvcnQ9dHJ1ZV1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljcy5zb3J0SW50ZXJ2YWw9MTAwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLm1pbkRyYWdEaXN0YW5jZT0xMF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljcy5taW5Cb3VuY2VCYWNrQW5nbGU9MV1cbiAgICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gW29wdGlvbnMuZHJhZ1NvcnRQcmVkaWNhdGVdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZS50aHJlc2hvbGQ9NTBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZS5hY3Rpb249XCJtb3ZlXCJdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnUmVsZWFzZUR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdSZWxlYXNlRWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ0Nzc1Byb3BzXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5lbmFibGVkPWZhbHNlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5lYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudD1udWxsXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLm9uQ3JlYXRlPW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmU9bnVsbF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbnRhaW5lckNsYXNzPVwibXV1cmlcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1DbGFzcz1cIm11dXJpLWl0ZW1cIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1WaXNpYmxlQ2xhc3M9XCJtdXVyaS1pdGVtLXZpc2libGVcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1IaWRkZW5DbGFzcz1cIm11dXJpLWl0ZW0taGlkZGVuXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtUG9zaXRpb25pbmdDbGFzcz1cIm11dXJpLWl0ZW0tcG9zaXRpb25pbmdcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1EcmFnZ2luZ0NsYXNzPVwibXV1cmktaXRlbS1kcmFnZ2luZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVJlbGVhc2luZ0NsYXNzPVwibXV1cmktaXRlbS1yZWxlYXNpbmdcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1QbGFjZWhvbGRlckNsYXNzPVwibXV1cmktaXRlbS1wbGFjZWhvbGRlclwiXVxuICAgKi9cblxuICBmdW5jdGlvbiBHcmlkKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW5zdCA9IHRoaXM7XG4gICAgdmFyIHNldHRpbmdzO1xuICAgIHZhciBpdGVtcztcbiAgICB2YXIgbGF5b3V0T25SZXNpemU7XG5cbiAgICAvLyBBbGxvdyBwYXNzaW5nIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nLiBTdG9yZSBlbGVtZW50IGZvciBpbnN0YW5jZS5cbiAgICBlbGVtZW50ID0gdGhpcy5fZWxlbWVudCA9XG4gICAgICB0eXBlb2YgZWxlbWVudCA9PT0gc3RyaW5nVHlwZSA/IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBjb250YWluZXIgZWxlbWVudCBpcyBub3QgYm9keSBlbGVtZW50IG9yIGRvZXMgbm90XG4gICAgLy8gZXhpc3Qgd2l0aGluIHRoZSBib2R5IGVsZW1lbnQuXG4gICAgdmFyIGlzRWxlbWVudEluRG9tID0gZWxlbWVudC5nZXRSb290Tm9kZVxuICAgICAgPyBlbGVtZW50LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkgPT09IGRvY3VtZW50XG4gICAgICA6IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsZW1lbnQpO1xuICAgIGlmICghaXNFbGVtZW50SW5Eb20gfHwgZWxlbWVudCA9PT0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgZWxlbWVudCBtdXN0IGJlIGFuIGV4aXN0aW5nIERPTSBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIHNldHRpbmdzIGJ5IG1lcmdpbmcgdGhlIG9wdGlvbnMgd2l0aCBkZWZhdWx0IG9wdGlvbnMuXG4gICAgc2V0dGluZ3MgPSB0aGlzLl9zZXR0aW5ncyA9IG1lcmdlU2V0dGluZ3MoR3JpZC5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAvLyBTYW5pdGl6ZSBkcmFnU29ydCBzZXR0aW5nLlxuICAgIGlmICghaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU29ydCkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdTb3J0ID0gISFzZXR0aW5ncy5kcmFnU29ydDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2UgaWQgYW5kIHN0b3JlIGl0IHRvIHRoZSBncmlkIGluc3RhbmNlcyBjb2xsZWN0aW9uLlxuICAgIHRoaXMuX2lkID0gY3JlYXRlVWlkKCk7XG4gICAgZ3JpZEluc3RhbmNlc1t0aGlzLl9pZF0gPSBpbnN0O1xuXG4gICAgLy8gRGVzdHJveWVkIGZsYWcuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFRoZSBsYXlvdXQgb2JqZWN0IChtdXRhdGVkIG9uIGV2ZXJ5IGxheW91dCkuXG4gICAgdGhpcy5fbGF5b3V0ID0ge1xuICAgICAgaWQ6IDAsXG4gICAgICBpdGVtczogW10sXG4gICAgICBzbG90czogW10sXG4gICAgICBzZXRXaWR0aDogZmFsc2UsXG4gICAgICBzZXRIZWlnaHQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIHByaXZhdGUgRW1pdHRlciBpbnN0YW5jZS5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuICAgIC8vIEFkZCBjb250YWluZXIgZWxlbWVudCdzIGNsYXNzIG5hbWUuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuY29udGFpbmVyQ2xhc3MpO1xuXG4gICAgLy8gQ3JlYXRlIGluaXRpYWwgaXRlbXMuXG4gICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICBpdGVtcyA9IHNldHRpbmdzLml0ZW1zO1xuICAgIGlmICh0eXBlb2YgaXRlbXMgPT09IHN0cmluZ1R5cGUpIHtcbiAgICAgIHRvQXJyYXkoZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihpdGVtRWxlbWVudCkge1xuICAgICAgICBpZiAoaXRlbXMgPT09ICcqJyB8fCBlbGVtZW50TWF0Y2hlcyhpdGVtRWxlbWVudCwgaXRlbXMpKSB7XG4gICAgICAgICAgaW5zdC5faXRlbXMucHVzaChuZXcgSXRlbShpbnN0LCBpdGVtRWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpIHx8IGlzTm9kZUxpc3QoaXRlbXMpKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IHRvQXJyYXkoaXRlbXMpLm1hcChmdW5jdGlvbihpdGVtRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IEl0ZW0oaW5zdCwgaXRlbUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGF5b3V0T25SZXNpemUgb3B0aW9uIGlzIGEgdmFsaWQgbnVtYmVyIHNhbml0aXplIGl0IGFuZCBiaW5kIHRoZSByZXNpemVcbiAgICAvLyBoYW5kbGVyLlxuICAgIGxheW91dE9uUmVzaXplID0gc2V0dGluZ3MubGF5b3V0T25SZXNpemU7XG4gICAgaWYgKHR5cGVvZiBsYXlvdXRPblJlc2l6ZSAhPT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICBsYXlvdXRPblJlc2l6ZSA9IGxheW91dE9uUmVzaXplID09PSB0cnVlID8gMCA6IC0xO1xuICAgIH1cbiAgICBpZiAobGF5b3V0T25SZXNpemUgPj0gMCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICAoaW5zdC5fcmVzaXplSGFuZGxlciA9IGRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGluc3QucmVmcmVzaEl0ZW1zKCkubGF5b3V0KCk7XG4gICAgICAgIH0sIGxheW91dE9uUmVzaXplKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTGF5b3V0IG9uIGluaXQgaWYgbmVjZXNzYXJ5LlxuICAgIGlmIChzZXR0aW5ncy5sYXlvdXRPbkluaXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvcGVydGllc1xuICAgKiAqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQHNlZSBJdGVtXG4gICAqL1xuICBHcmlkLkl0ZW0gPSBJdGVtO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1MYXlvdXRcbiAgICovXG4gIEdyaWQuSXRlbUxheW91dCA9IEl0ZW1MYXlvdXQ7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbVZpc2liaWxpdHlcbiAgICovXG4gIEdyaWQuSXRlbVZpc2liaWxpdHkgPSBJdGVtVmlzaWJpbGl0eTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtTWlncmF0ZVxuICAgKi9cbiAgR3JpZC5JdGVtTWlncmF0ZSA9IEl0ZW1NaWdyYXRlO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1BbmltYXRlXG4gICAqL1xuICBHcmlkLkl0ZW1BbmltYXRlID0gSXRlbUFuaW1hdGU7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbURyYWdcbiAgICovXG4gIEdyaWQuSXRlbURyYWcgPSBJdGVtRHJhZztcblxuICAvKipcbiAgICogQHNlZSBJdGVtUmVsZWFzZVxuICAgKi9cbiAgR3JpZC5JdGVtUmVsZWFzZSA9IEl0ZW1SZWxlYXNlO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1EcmFnUGxhY2Vob2xkZXJcbiAgICovXG4gIEdyaWQuSXRlbURyYWdQbGFjZWhvbGRlciA9IEl0ZW1EcmFnUGxhY2Vob2xkZXI7XG5cbiAgLyoqXG4gICAqIEBzZWUgRW1pdHRlclxuICAgKi9cbiAgR3JpZC5FbWl0dGVyID0gRW1pdHRlcjtcblxuICAvKipcbiAgICogQHNlZSBEcmFnZ2VyXG4gICAqL1xuICBHcmlkLkRyYWdnZXIgPSBEcmFnZ2VyO1xuXG4gIC8qKlxuICAgKiBAc2VlIFBhY2tlclxuICAgKi9cbiAgR3JpZC5QYWNrZXIgPSBQYWNrZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9ucyBmb3IgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZFxuICAgKi9cbiAgR3JpZC5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyBJdGVtIGVsZW1lbnRzXG4gICAgaXRlbXM6ICcqJyxcblxuICAgIC8vIERlZmF1bHQgc2hvdyBhbmltYXRpb25cbiAgICBzaG93RHVyYXRpb246IDMwMCxcbiAgICBzaG93RWFzaW5nOiAnZWFzZScsXG5cbiAgICAvLyBEZWZhdWx0IGhpZGUgYW5pbWF0aW9uXG4gICAgaGlkZUR1cmF0aW9uOiAzMDAsXG4gICAgaGlkZUVhc2luZzogJ2Vhc2UnLFxuXG4gICAgLy8gSXRlbSdzIHZpc2libGUvaGlkZGVuIHN0YXRlIHN0eWxlc1xuICAgIHZpc2libGVTdHlsZXM6IHtcbiAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgIH0sXG4gICAgaGlkZGVuU3R5bGVzOiB7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJ1xuICAgIH0sXG5cbiAgICAvLyBMYXlvdXRcbiAgICBsYXlvdXQ6IHtcbiAgICAgIGZpbGxHYXBzOiBmYWxzZSxcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgYWxpZ25SaWdodDogZmFsc2UsXG4gICAgICBhbGlnbkJvdHRvbTogZmFsc2UsXG4gICAgICByb3VuZGluZzogdHJ1ZVxuICAgIH0sXG4gICAgbGF5b3V0T25SZXNpemU6IDEwMCxcbiAgICBsYXlvdXRPbkluaXQ6IHRydWUsXG4gICAgbGF5b3V0RHVyYXRpb246IDMwMCxcbiAgICBsYXlvdXRFYXNpbmc6ICdlYXNlJyxcblxuICAgIC8vIFNvcnRpbmdcbiAgICBzb3J0RGF0YTogbnVsbCxcblxuICAgIC8vIERyYWcgJiBEcm9wXG4gICAgZHJhZ0VuYWJsZWQ6IGZhbHNlLFxuICAgIGRyYWdDb250YWluZXI6IG51bGwsXG4gICAgZHJhZ1N0YXJ0UHJlZGljYXRlOiB7XG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgaGFuZGxlOiBmYWxzZVxuICAgIH0sXG4gICAgZHJhZ0F4aXM6IG51bGwsXG4gICAgZHJhZ1NvcnQ6IHRydWUsXG4gICAgZHJhZ1NvcnRIZXVyaXN0aWNzOiB7XG4gICAgICBzb3J0SW50ZXJ2YWw6IDEwMCxcbiAgICAgIG1pbkRyYWdEaXN0YW5jZTogMTAsXG4gICAgICBtaW5Cb3VuY2VCYWNrQW5nbGU6IDFcbiAgICB9LFxuICAgIGRyYWdTb3J0UHJlZGljYXRlOiB7XG4gICAgICB0aHJlc2hvbGQ6IDUwLFxuICAgICAgYWN0aW9uOiBhY3Rpb25Nb3ZlXG4gICAgfSxcbiAgICBkcmFnUmVsZWFzZUR1cmF0aW9uOiAzMDAsXG4gICAgZHJhZ1JlbGVhc2VFYXNpbmc6ICdlYXNlJyxcbiAgICBkcmFnQ3NzUHJvcHM6IHtcbiAgICAgIHRvdWNoQWN0aW9uOiAnbm9uZScsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB1c2VyRHJhZzogJ25vbmUnLFxuICAgICAgdGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgIHRvdWNoQ2FsbG91dDogJ25vbmUnLFxuICAgICAgY29udGVudFpvb21pbmc6ICdub25lJ1xuICAgIH0sXG4gICAgZHJhZ1BsYWNlaG9sZGVyOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBlYXNpbmc6ICdlYXNlJyxcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IG51bGwsXG4gICAgICBvbkNyZWF0ZTogbnVsbCxcbiAgICAgIG9uUmVtb3ZlOiBudWxsXG4gICAgfSxcblxuICAgIC8vIENsYXNzbmFtZXNcbiAgICBjb250YWluZXJDbGFzczogJ211dXJpJyxcbiAgICBpdGVtQ2xhc3M6ICdtdXVyaS1pdGVtJyxcbiAgICBpdGVtVmlzaWJsZUNsYXNzOiAnbXV1cmktaXRlbS1zaG93bicsXG4gICAgaXRlbUhpZGRlbkNsYXNzOiAnbXV1cmktaXRlbS1oaWRkZW4nLFxuICAgIGl0ZW1Qb3NpdGlvbmluZ0NsYXNzOiAnbXV1cmktaXRlbS1wb3NpdGlvbmluZycsXG4gICAgaXRlbURyYWdnaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLWRyYWdnaW5nJyxcbiAgICBpdGVtUmVsZWFzaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLXJlbGVhc2luZycsXG4gICAgaXRlbVBsYWNlaG9sZGVyQ2xhc3M6ICdtdXVyaS1pdGVtLXBsYWNlaG9sZGVyJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBCaW5kIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaXRlbXMuIE9wdGlvbmFsbHkgeW91IGNhbiBwcm92aWRlIHNwZWNpZmljIHRhcmdldHMgKGVsZW1lbnRzIGFuZFxuICAgKiBpbmRpY2VzKS4gTm90ZSB0aGF0IHRoZSByZXR1cm5lZCBhcnJheSBpcyBub3QgdGhlIHNhbWUgb2JqZWN0IHVzZWQgYnkgdGhlXG4gICAqIGluc3RhbmNlIHNvIG1vZGlmeWluZyBpdCB3aWxsIG5vdCBhZmZlY3QgaW5zdGFuY2UncyBpdGVtcy4gQWxsIGl0ZW1zIHRoYXRcbiAgICogYXJlIG5vdCBmb3VuZCBhcmUgb21pdHRlZCBmcm9tIHRoZSByZXR1cm5lZCBhcnJheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IFt0YXJnZXRzXVxuICAgKiBAcmV0dXJucyB7SXRlbVtdfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZ2V0SXRlbXMgPSBmdW5jdGlvbih0YXJnZXRzKSB7XG4gICAgLy8gUmV0dXJuIGFsbCBpdGVtcyBpbW1lZGlhdGVseSBpZiBubyB0YXJnZXRzIHdlcmUgcHJvdmlkZWQgb3IgaWYgdGhlXG4gICAgLy8gaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAoIXRhcmdldHMgJiYgdGFyZ2V0cyAhPT0gMCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gW107XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdG9BcnJheSh0YXJnZXRzKTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHRhcmdldCBpdGVtcyBhcmUgZGVmaW5lZCByZXR1cm4gZmlsdGVyZWQgcmVzdWx0cy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSB0aGlzLl9nZXRJdGVtKHRhcmdldEl0ZW1zW2ldKTtcbiAgICAgIGl0ZW0gJiYgcmV0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjYWNoZWQgZGltZW5zaW9ucyBvZiB0aGUgaW5zdGFuY2UncyBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IFtpdGVtc11cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5yZWZyZXNoSXRlbXMgPSBmdW5jdGlvbihpdGVtcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0cyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldHNbaV0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgc29ydCBkYXRhIG9mIHRoZSBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW2l0ZW1zXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlZnJlc2hTb3J0RGF0YSA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXRJdGVtc1tpXS5fcmVmcmVzaFNvcnREYXRhKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplIHRoZSBpdGVtIGVsZW1lbnRzIHRvIG1hdGNoIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIERPTS5cbiAgICogVGhpcyBjb21lcyBoYW5keSBpZiB5b3UgbmVlZCB0byBrZWVwIHRoZSBET00gc3RydWN0dXJlIG1hdGNoZWQgd2l0aCB0aGVcbiAgICogb3JkZXIgb2YgdGhlIGl0ZW1zLiBOb3RlIHRoYXQgaWYgYW4gaXRlbSdzIGVsZW1lbnQgaXMgbm90IGN1cnJlbnRseSBhIGNoaWxkXG4gICAqIG9mIHRoZSBjb250YWluZXIgZWxlbWVudCAoaWYgaXQgaXMgZHJhZ2dlZCBmb3IgZXhhbXBsZSkgaXQgaXMgaWdub3JlZCBhbmRcbiAgICogbGVmdCB1bnRvdWNoZWQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc3luY2hyb25pemUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIGZyYWdtZW50O1xuICAgIHZhciBlbGVtZW50O1xuICAgIHZhciBpO1xuXG4gICAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyBpbiBvcmRlciB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnQgPSBpdGVtc1tpXS5fZWxlbWVudDtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSA9PT0gY29udGFpbmVyKSB7XG4gICAgICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudCB8fCB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFnbWVudCkgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHN5bmNocm9uaXplIGV2ZW50LlxuICAgIHRoaXMuX2VtaXQoZXZlbnRTeW5jaHJvbml6ZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCBhcHBseSBpdGVtIHBvc2l0aW9ucy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtMYXlvdXRDYWxsYmFja30gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpbnN0ID0gdGhpcztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX3VwZGF0ZUxheW91dCgpO1xuICAgIHZhciBsYXlvdXRJZCA9IGxheW91dC5pZDtcbiAgICB2YXIgaXRlbXNMZW5ndGggPSBsYXlvdXQuaXRlbXMubGVuZ3RoO1xuICAgIHZhciBjb3VudGVyID0gaXRlbXNMZW5ndGg7XG4gICAgdmFyIGlzQm9yZGVyQm94O1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gVGhlIGZpbmlzaCBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBjaGVja2luZyBpZiBhbGwgdGhlIGl0ZW1zXG4gICAgLy8gaGF2ZSBsYWlkIG91dCB5ZXQuIEFmdGVyIGFsbCBpdGVtcyBoYXZlIGZpbmlzaGVkIHRoZWlyIGFuaW1hdGlvbnMgY2FsbFxuICAgIC8vIGNhbGxiYWNrIGFuZCBlbWl0IGxheW91dEVuZCBldmVudC4gT25seSBlbWl0IGxheW91dEVuZCBldmVudCBpZiB0aGVyZVxuICAgIC8vIGhhc24ndCBiZWVuIGEgbmV3IGxheW91dCBjYWxsIGR1cmluZyB0aGlzIGxheW91dC5cbiAgICBmdW5jdGlvbiB0cnlGaW5pc2goKSB7XG4gICAgICBpZiAoLS1jb3VudGVyID4gMCkgcmV0dXJuO1xuXG4gICAgICB2YXIgaGFzTGF5b3V0Q2hhbmdlZCA9IGluc3QuX2xheW91dC5pZCAhPT0gbGF5b3V0SWQ7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKGluc3RhbnQpID8gaW5zdGFudCA6IG9uRmluaXNoO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgY2FsbGJhY2soaGFzTGF5b3V0Q2hhbmdlZCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXNMYXlvdXRDaGFuZ2VkICYmIGluc3QuX2hhc0xpc3RlbmVycyhldmVudExheW91dEVuZCkpIHtcbiAgICAgICAgaW5zdC5fZW1pdChldmVudExheW91dEVuZCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBncmlkJ3Mgd2lkdGggb3IgaGVpZ2h0IHdhcyBtb2RpZmllZCwgd2UgbmVlZCB0byB1cGRhdGUgaXQncyBjYWNoZWRcbiAgICAvLyBkaW1lbnNpb25zLiBBbHNvIGtlZXAgaW4gbWluZCB0aGF0IGdyaWQncyBjYWNoZWQgd2lkdGgvaGVpZ2h0IHNob3VsZFxuICAgIC8vIGFsd2F5cyBlcXVhbCB0byB3aGF0IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgd291bGQgcmV0dXJuLCBzb1xuICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIGFkZCB0aGUgZ3JpZCBlbGVtZW50J3MgYm9yZGVycyB0byB0aGUgZGltZW5zaW9ucyBpZlxuICAgIC8vIGl0J3MgYm94LXNpemluZyBpcyBib3JkZXItYm94LiBOb3RlIHRoYXQgd2Ugc3VwcG9ydCBwcm92aWRpbmcgdGhlXG4gICAgLy8gZGltZW5zaW9ucyBhcyBhIHN0cmluZyBoZXJlIHRvbyBzbyB0aGF0IG9uZSBjYW4gZGVmaW5lIHRoZSB1bml0IG9mIHRoZVxuICAgIC8vIGRpbWVuc2lvbnMsIGluIHdoaWNoIGNhc2Ugd2UgZG9uJ3QgZG8gdGhlIGJvcmRlci1ib3ggY2hlY2suXG4gICAgaWYgKFxuICAgICAgKGxheW91dC5zZXRIZWlnaHQgJiYgdHlwZW9mIGxheW91dC5oZWlnaHQgPT09IG51bWJlclR5cGUkMSkgfHxcbiAgICAgIChsYXlvdXQuc2V0V2lkdGggJiYgdHlwZW9mIGxheW91dC53aWR0aCA9PT0gbnVtYmVyVHlwZSQxKVxuICAgICkge1xuICAgICAgaXNCb3JkZXJCb3ggPSBnZXRTdHlsZShlbGVtZW50LCAnYm94LXNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG4gICAgfVxuICAgIGlmIChsYXlvdXQuc2V0SGVpZ2h0KSB7XG4gICAgICBpZiAodHlwZW9mIGxheW91dC5oZWlnaHQgPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9XG4gICAgICAgICAgKGlzQm9yZGVyQm94ID8gbGF5b3V0LmhlaWdodCArIHRoaXMuX2JvcmRlclRvcCArIHRoaXMuX2JvcmRlckJvdHRvbSA6IGxheW91dC5oZWlnaHQpICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbGF5b3V0LmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxheW91dC5zZXRXaWR0aCkge1xuICAgICAgaWYgKHR5cGVvZiBsYXlvdXQud2lkdGggPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID1cbiAgICAgICAgICAoaXNCb3JkZXJCb3ggPyBsYXlvdXQud2lkdGggKyB0aGlzLl9ib3JkZXJMZWZ0ICsgdGhpcy5fYm9yZGVyUmlnaHQgOiBsYXlvdXQud2lkdGgpICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBsYXlvdXQud2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsYXlvdXRTdGFydCBldmVudC4gTm90ZSB0aGF0IHRoaXMgaXMgaW50ZW50aW9uYWxseSBlbWl0dGVkIGFmdGVyIHRoZVxuICAgIC8vIGNvbnRhaW5lciBlbGVtZW50J3MgZGltZW5zaW9ucyBhcmUgc2V0LCBiZWNhdXNlIG90aGVyd2lzZSB0aGVyZSB3b3VsZCBiZVxuICAgIC8vIG5vIGhvb2sgZm9yIHJlYWN0aW5nIHRvIGNvbnRhaW5lciBkaW1lbnNpb24gY2hhbmdlcy5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50TGF5b3V0U3RhcnQpKSB7XG4gICAgICB0aGlzLl9lbWl0KGV2ZW50TGF5b3V0U3RhcnQsIGxheW91dC5pdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGl0ZW1zIGxldCdzIGZpbmlzaCBxdWlja2x5LlxuICAgIGlmICghaXRlbXNMZW5ndGgpIHtcbiAgICAgIHRyeUZpbmlzaCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGl0ZW1zIGxldCdzIHBvc2l0aW9uIHRoZW0uXG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zTGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBsYXlvdXQuaXRlbXNbaV07XG4gICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlO1xuXG4gICAgICAvLyBVcGRhdGUgaXRlbSdzIHBvc2l0aW9uLlxuICAgICAgaXRlbS5fbGVmdCA9IGxheW91dC5zbG90c1tpICogMl07XG4gICAgICBpdGVtLl90b3AgPSBsYXlvdXQuc2xvdHNbaSAqIDIgKyAxXTtcblxuICAgICAgLy8gTGF5b3V0IGl0ZW0gaWYgaXQgaXMgbm90IGRyYWdnZWQuXG4gICAgICBpdGVtLmlzRHJhZ2dpbmcoKSA/IHRyeUZpbmlzaCgpIDogaXRlbS5fbGF5b3V0LnN0YXJ0KGluc3RhbnQgPT09IHRydWUsIHRyeUZpbmlzaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgaXRlbXMgYnkgcHJvdmlkaW5nIHRoZSBlbGVtZW50cyB5b3Ugd2lzaCB0byBhZGQgdG8gdGhlIGluc3RhbmNlIGFuZFxuICAgKiBvcHRpb25hbGx5IHByb3ZpZGUgdGhlIGluZGV4IHdoZXJlIHlvdSB3YW50IHRoZSBpdGVtcyB0byBiZSBpbnNlcnRlZCBpbnRvLlxuICAgKiBBbGwgZWxlbWVudHMgdGhhdCBhcmUgbm90IGFscmVhZHkgY2hpbGRyZW4gb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50IHdpbGwgYmVcbiAgICogYXV0b21hdGljYWxseSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuIElmIGFuIGVsZW1lbnQgaGFzIGl0J3MgQ1NTXG4gICAqIGRpc3BsYXkgcHJvcGVydHkgc2V0IHRvIFwibm9uZVwiIGl0IHdpbGwgYmUgbWFya2VkIGFzIGluYWN0aXZlIGR1cmluZyB0aGVcbiAgICogaW5pdGlhdGlvbiBwcm9jZXNzLiBBcyBsb25nIGFzIHRoZSBpdGVtIGlzIGluYWN0aXZlIGl0IHdpbGwgbm90IGJlIHBhcnQgb2ZcbiAgICogdGhlIGxheW91dCwgYnV0IGl0IHdpbGwgcmV0YWluIGl0J3MgaW5kZXguIFlvdSBjYW4gYWN0aXZhdGUgaXRlbXMgYXQgYW55XG4gICAqIHBvaW50IHdpdGggZ3JpZC5zaG93KCkgbWV0aG9kLiBUaGlzIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbFxuICAgKiBncmlkLmxheW91dCgpIGlmIG9uZSBvciBtb3JlIG9mIHRoZSBhZGRlZCBlbGVtZW50cyBhcmUgdmlzaWJsZS4gSWYgb25seVxuICAgKiBoaWRkZW4gaXRlbXMgYXJlIGFkZGVkIG5vIGxheW91dCB3aWxsIGJlIGNhbGxlZC4gQWxsIHRoZSBuZXcgdmlzaWJsZSBpdGVtc1xuICAgKiBhcmUgcG9zaXRpb25lZCB3aXRob3V0IGFuaW1hdGlvbiBkdXJpbmcgdGhlaXIgZmlyc3QgbGF5b3V0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxIVE1MRWxlbWVudFtdKX0gZWxlbWVudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaW5kZXg9LTFdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaXNBY3RpdmVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihlbGVtZW50cywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhZWxlbWVudHMpIHJldHVybiBbXTtcblxuICAgIHZhciBuZXdJdGVtcyA9IHRvQXJyYXkoZWxlbWVudHMpO1xuICAgIGlmICghbmV3SXRlbXMubGVuZ3RoKSByZXR1cm4gbmV3SXRlbXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBNYXAgcHJvdmlkZWQgZWxlbWVudHMgaW50byBuZXcgZ3JpZCBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBuZXcgSXRlbSh0aGlzLCBuZXdJdGVtc1tpXSwgb3B0cy5pc0FjdGl2ZSk7XG4gICAgICBuZXdJdGVtc1tpXSA9IGl0ZW07XG5cbiAgICAgIC8vIElmIHRoZSBpdGVtIHRvIGJlIGFkZGVkIGlzIGFjdGl2ZSwgd2UgbmVlZCB0byBkbyBhIGxheW91dC4gQWxzbywgd2VcbiAgICAgIC8vIG5lZWQgdG8gbWFyayB0aGUgaXRlbSB3aXRoIHRoZSBza2lwTmV4dEFuaW1hdGlvbiBmbGFnIHRvIG1ha2UgaXRcbiAgICAgIC8vIHBvc2l0aW9uIGluc3RhbnRseSAod2l0aG91dCBhbmltYXRpb24pIGR1cmluZyB0aGUgbmV4dCBsYXlvdXQuIFdpdGhvdXRcbiAgICAgIC8vIHRoZSBoYWNrIHRoZSBpdGVtIHdvdWxkIGFuaW1hdGUgdG8gaXQncyBuZXcgcG9zaXRpb24gZnJvbSB0aGUgbm9ydGh3ZXN0XG4gICAgICAvLyBjb3JuZXIgb2YgdGhlIGdyaWQsIHdoaWNoIGZlZWxzIGEgYml0IGJ1Z2d5IChpbWhvKS5cbiAgICAgIGlmIChpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgICBuZWVkc0xheW91dCA9IHRydWU7XG4gICAgICAgIGl0ZW0uX2xheW91dC5fc2tpcE5leHRBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgbmV3IGl0ZW1zIHRvIHRoZSBpdGVtcyBjb2xsZWN0aW9uIHRvIGNvcnJlY3QgaW5kZXguXG4gICAgYXJyYXlJbnNlcnQoaXRlbXMsIG5ld0l0ZW1zLCBvcHRzLmluZGV4KTtcblxuICAgIC8vIEVtaXQgYWRkIGV2ZW50LlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRBZGQpKSB7XG4gICAgICB0aGlzLl9lbWl0KGV2ZW50QWRkLCBuZXdJdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICBpZiAobmVlZHNMYXlvdXQgJiYgbGF5b3V0KSB7XG4gICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0l0ZW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgaXRlbXMgZnJvbSB0aGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucmVtb3ZlRWxlbWVudHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGFsbEl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gdGFyZ2V0SXRlbXNbaV07XG4gICAgICBpbmRpY2VzLnB1c2goYWxsSXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgICBpZiAoaXRlbS5faXNBY3RpdmUpIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgIGl0ZW0uX2Rlc3Ryb3kob3B0cy5yZW1vdmVFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCByZW1vdmUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudFJlbW92ZSkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRSZW1vdmUsIHRhcmdldEl0ZW1zLnNsaWNlKDApLCBpbmRpY2VzKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgIGlmIChuZWVkc0xheW91dCAmJiBsYXlvdXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0SXRlbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgaW5zdGFuY2UgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtTaG93Q2FsbGJhY2t9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fc2V0SXRlbXNWaXNpYmlsaXR5KGl0ZW1zLCB0cnVlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSGlkZSBpbnN0YW5jZSBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0hpZGVDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9zZXRJdGVtc1Zpc2liaWxpdHkoaXRlbXMsIGZhbHNlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVyIGl0ZW1zLiBFeHBlY3RzIGF0IGxlYXN0IG9uZSBhcmd1bWVudCwgYSBwcmVkaWNhdGUsIHdoaWNoIHNob3VsZCBiZVxuICAgKiBlaXRoZXIgYSBmdW5jdGlvbiBvciBhIHN0cmluZy4gVGhlIHByZWRpY2F0ZSBjYWxsYmFjayBpcyBleGVjdXRlZCBmb3IgZXZlcnlcbiAgICogaXRlbSBpbiB0aGUgaW5zdGFuY2UuIElmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZWRpY2F0ZSBpcyB0cnV0aHkgdGhlXG4gICAqIGl0ZW0gaW4gcXVlc3Rpb24gd2lsbCBiZSBzaG93biBhbmQgb3RoZXJ3aXNlIGhpZGRlbi4gVGhlIHByZWRpY2F0ZSBjYWxsYmFja1xuICAgKiByZWNlaXZlcyB0aGUgaXRlbSBpbnN0YW5jZSBhcyBpdCdzIGFyZ3VtZW50LiBJZiB0aGUgcHJlZGljYXRlIGlzIGEgc3RyaW5nXG4gICAqIGl0IGlzIGNvbnNpZGVyZWQgdG8gYmUgYSBzZWxlY3RvciBhbmQgaXQgaXMgY2hlY2tlZCBhZ2FpbnN0IGV2ZXJ5IGl0ZW1cbiAgICogZWxlbWVudCBpbiB0aGUgaW5zdGFuY2Ugd2l0aCB0aGUgbmF0aXZlIGVsZW1lbnQubWF0Y2hlcygpIG1ldGhvZC4gQWxsIHRoZVxuICAgKiBtYXRjaGluZyBpdGVtcyB3aWxsIGJlIHNob3duIGFuZCBvdGhlcnMgaGlkZGVuLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxTdHJpbmcpfSBwcmVkaWNhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7RmlsdGVyQ2FsbGJhY2t9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXRlbXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtc1RvU2hvdyA9IFtdO1xuICAgIHZhciBpdGVtc1RvSGlkZSA9IFtdO1xuICAgIHZhciBpc1ByZWRpY2F0ZVN0cmluZyA9IHR5cGVvZiBwcmVkaWNhdGUgPT09IHN0cmluZ1R5cGU7XG4gICAgdmFyIGlzUHJlZGljYXRlRm4gPSBpc0Z1bmN0aW9uKHByZWRpY2F0ZSk7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGlzSW5zdGFudCA9IG9wdHMuaW5zdGFudCA9PT0gdHJ1ZTtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIG9uRmluaXNoID0gaXNGdW5jdGlvbihvcHRzLm9uRmluaXNoKSA/IG9wdHMub25GaW5pc2ggOiBudWxsO1xuICAgIHZhciB0cnlGaW5pc2hDb3VudGVyID0gLTE7XG4gICAgdmFyIHRyeUZpbmlzaCA9IG5vb3A7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG9uRmluaXNoIGNhbGxiYWNrLCBsZXQncyBjcmVhdGUgcHJvcGVyIHRyeUZpbmlzaCBjYWxsYmFjay5cbiAgICBpZiAob25GaW5pc2gpIHtcbiAgICAgIHRyeUZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICArK3RyeUZpbmlzaENvdW50ZXIgJiYgb25GaW5pc2goaXRlbXNUb1Nob3cuc2xpY2UoMCksIGl0ZW1zVG9IaWRlLnNsaWNlKDApKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgd2hpY2ggaXRlbXMgbmVlZCB0byBiZSBzaG93biBhbmQgd2hpY2ggaGlkZGVuLlxuICAgIGlmIChpc1ByZWRpY2F0ZUZuIHx8IGlzUHJlZGljYXRlU3RyaW5nKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IHRoaXMuX2l0ZW1zW2ldO1xuICAgICAgICBpZiAoaXNQcmVkaWNhdGVGbiA/IHByZWRpY2F0ZShpdGVtKSA6IGVsZW1lbnRNYXRjaGVzKGl0ZW0uX2VsZW1lbnQsIHByZWRpY2F0ZSkpIHtcbiAgICAgICAgICBpdGVtc1RvU2hvdy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1zVG9IaWRlLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IGl0ZW1zIHRoYXQgbmVlZCB0byBiZSBzaG93bi5cbiAgICBpZiAoaXRlbXNUb1Nob3cubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNob3coaXRlbXNUb1Nob3csIHtcbiAgICAgICAgaW5zdGFudDogaXNJbnN0YW50LFxuICAgICAgICBvbkZpbmlzaDogdHJ5RmluaXNoLFxuICAgICAgICBsYXlvdXQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5RmluaXNoKCk7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBpdGVtcyB0aGF0IG5lZWQgdG8gYmUgaGlkZGVuLlxuICAgIGlmIChpdGVtc1RvSGlkZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaGlkZShpdGVtc1RvSGlkZSwge1xuICAgICAgICBpbnN0YW50OiBpc0luc3RhbnQsXG4gICAgICAgIG9uRmluaXNoOiB0cnlGaW5pc2gsXG4gICAgICAgIGxheW91dDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnlGaW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgYW55IGl0ZW1zIHRvIGZpbHRlci5cbiAgICBpZiAoaXRlbXNUb1Nob3cubGVuZ3RoIHx8IGl0ZW1zVG9IaWRlLmxlbmd0aCkge1xuICAgICAgLy8gRW1pdCBmaWx0ZXIgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50RmlsdGVyKSkge1xuICAgICAgICB0aGlzLl9lbWl0KGV2ZW50RmlsdGVyLCBpdGVtc1RvU2hvdy5zbGljZSgwKSwgaXRlbXNUb0hpZGUuc2xpY2UoMCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNvcnQgaXRlbXMuIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIHNvcnQgdGhlIGl0ZW1zLiBUaGUgZmlyc3QgaXMgc2ltcGx5IGJ5XG4gICAqIHByb3ZpZGluZyBhIGZ1bmN0aW9uIGFzIHRoZSBjb21wYXJlciB3aGljaCB3b3JrcyBpZGVudGljYWxseSB0byBuYXRpdmVcbiAgICogYXJyYXkgc29ydC4gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHNvcnQgYnkgdGhlIHNvcnQgZGF0YSB5b3UgaGF2ZSBwcm92aWRlZFxuICAgKiBpbiB0aGUgaW5zdGFuY2UncyBvcHRpb25zLiBKdXN0IHByb3ZpZGUgdGhlIHNvcnQgZGF0YSBrZXkocykgYXMgYSBzdHJpbmdcbiAgICogKHNlcGFyYXRlZCBieSBzcGFjZSkgYW5kIHRoZSBpdGVtcyB3aWxsIGJlIHNvcnRlZCBiYXNlZCBvbiB0aGUgcHJvdmlkZWRcbiAgICogc29ydCBkYXRhIGtleXMuIExhc3RseSB5b3UgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcHJvdmlkZSBhIHByZXNvcnRlZFxuICAgKiBhcnJheSBvZiBpdGVtcyB3aGljaCB3aWxsIGJlIHVzZWQgdG8gc3luYyB0aGUgaW50ZXJuYWwgaXRlbXMgYXJyYXkgaW4gdGhlXG4gICAqIHNhbWUgb3JkZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufEl0ZW1bXXxTdHJpbmd8U3RyaW5nW10pfSBjb21wYXJlclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGVzY2VuZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zb3J0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzb3J0Q29tcGFyZXI7XG4gICAgdmFyIGlzRGVzY2VuZGluZztcbiAgICB2YXIgb3JpZ0l0ZW1zO1xuICAgIHZhciBpbmRleE1hcDtcblxuICAgIGZ1bmN0aW9uIHBhcnNlQ3JpdGVyaWEoZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgIHJldHVybiB2YWwuc3BsaXQoJzonKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5kZXhNYXAoaXRlbXMpIHtcbiAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmV0W2l0ZW1zW2ldLl9pZF0gPSBpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wYXJlSW5kaWNlcyhpdGVtQSwgaXRlbUIpIHtcbiAgICAgIHZhciBpbmRleEEgPSBpbmRleE1hcFtpdGVtQS5faWRdO1xuICAgICAgdmFyIGluZGV4QiA9IGluZGV4TWFwW2l0ZW1CLl9pZF07XG4gICAgICByZXR1cm4gaXNEZXNjZW5kaW5nID8gaW5kZXhCIC0gaW5kZXhBIDogaW5kZXhBIC0gaW5kZXhCO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgIHZhciBjcml0ZXJpYU5hbWU7XG4gICAgICB2YXIgY3JpdGVyaWFPcmRlcjtcbiAgICAgIHZhciB2YWxBO1xuICAgICAgdmFyIHZhbEI7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGlzdCBvZiBzb3J0IGNyaXRlcmlhLlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3J0Q29tcGFyZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRoZSBjcml0ZXJpYSBuYW1lLCB3aGljaCBzaG91bGQgbWF0Y2ggYW4gaXRlbSdzIHNvcnQgZGF0YSBrZXkuXG4gICAgICAgIGNyaXRlcmlhTmFtZSA9IHNvcnRDb21wYXJlcltpXVswXTtcbiAgICAgICAgY3JpdGVyaWFPcmRlciA9IHNvcnRDb21wYXJlcltpXVsxXTtcblxuICAgICAgICAvLyBHZXQgaXRlbXMnIGNhY2hlZCBzb3J0IHZhbHVlcyBmb3IgdGhlIGNyaXRlcmlhLiBJZiB0aGUgaXRlbSBoYXMgbm8gc29ydFxuICAgICAgICAvLyBkYXRhIGxldCdzIHVwZGF0ZSB0aGUgaXRlbXMgc29ydCBkYXRhICh0aGlzIGlzIGEgbGF6eSBsb2FkIG1lY2hhbmlzbSkuXG4gICAgICAgIHZhbEEgPSAoYS5fc29ydERhdGEgPyBhIDogYS5fcmVmcmVzaFNvcnREYXRhKCkpLl9zb3J0RGF0YVtjcml0ZXJpYU5hbWVdO1xuICAgICAgICB2YWxCID0gKGIuX3NvcnREYXRhID8gYiA6IGIuX3JlZnJlc2hTb3J0RGF0YSgpKS5fc29ydERhdGFbY3JpdGVyaWFOYW1lXTtcblxuICAgICAgICAvLyBTb3J0IHRoZSBpdGVtcyBpbiBkZXNjZW5kaW5nIG9yZGVyIGlmIGRlZmluZWQgc28gZXhwbGljaXRseS4gT3RoZXJ3aXNlXG4gICAgICAgIC8vIHNvcnQgaXRlbXMgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICAgICAgICBpZiAoY3JpdGVyaWFPcmRlciA9PT0gJ2Rlc2MnIHx8ICghY3JpdGVyaWFPcmRlciAmJiBpc0Rlc2NlbmRpbmcpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsQiA8IHZhbEEgPyAtMSA6IHZhbEIgPiB2YWxBID8gMSA6IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsQSA8IHZhbEIgPyAtMSA6IHZhbEEgPiB2YWxCID8gMSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIC0xIG9yIDEgYXMgdGhlIHJldHVybiB2YWx1ZSwgbGV0J3MgcmV0dXJuIGl0IGltbWVkaWF0ZWx5LlxuICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB2YWx1ZXMgYXJlIGVxdWFsIGxldCdzIGNvbXBhcmUgdGhlIGl0ZW0gaW5kaWNlcyB0byBtYWtlIHN1cmUgd2VcbiAgICAgIC8vIGhhdmUgYSBzdGFibGUgc29ydC5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGlmICghaW5kZXhNYXApIGluZGV4TWFwID0gZ2V0SW5kZXhNYXAob3JpZ0l0ZW1zKTtcbiAgICAgICAgcmVzdWx0ID0gY29tcGFyZUluZGljZXMoYSwgYik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXBhcmVyKGEsIGIpIHtcbiAgICAgIHZhciByZXN1bHQgPSBzb3J0Q29tcGFyZXIoYSwgYik7XG4gICAgICAvLyBJZiBkZXNjZW5kaW5nIGxldCdzIGludmVydCB0aGUgcmVzdWx0IHZhbHVlLlxuICAgICAgaWYgKGlzRGVzY2VuZGluZyAmJiByZXN1bHQpIHJlc3VsdCA9IC1yZXN1bHQ7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgcmVzdWx0IChub3QgemVybykgbGV0J3MgcmV0dXJuIGl0IHJpZ2h0IGF3YXkuXG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgLy8gSWYgcmVzdWx0IGlzIHplcm8gbGV0J3MgY29tcGFyZSB0aGUgaXRlbSBpbmRpY2VzIHRvIG1ha2Ugc3VyZSB3ZSBoYXZlIGFcbiAgICAgIC8vIHN0YWJsZSBzb3J0LlxuICAgICAgaWYgKCFpbmRleE1hcCkgaW5kZXhNYXAgPSBnZXRJbmRleE1hcChvcmlnSXRlbXMpO1xuICAgICAgcmV0dXJuIGNvbXBhcmVJbmRpY2VzKGEsIGIpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihjb21wYXJlciwgb3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2l0ZW1zLmxlbmd0aCA8IDIpIHJldHVybiB0aGlzO1xuXG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIFNldHVwIHBhcmVudCBzY29wZSBkYXRhLlxuICAgICAgc29ydENvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgICBpc0Rlc2NlbmRpbmcgPSAhIW9wdHMuZGVzY2VuZGluZztcbiAgICAgIG9yaWdJdGVtcyA9IGl0ZW1zLnNsaWNlKDApO1xuICAgICAgaW5kZXhNYXAgPSBudWxsO1xuXG4gICAgICAvLyBJZiBmdW5jdGlvbiBpcyBwcm92aWRlZCBkbyBhIG5hdGl2ZSBhcnJheSBzb3J0LlxuICAgICAgaWYgKGlzRnVuY3Rpb24oc29ydENvbXBhcmVyKSkge1xuICAgICAgICBpdGVtcy5zb3J0KGN1c3RvbUNvbXBhcmVyKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBpZiB3ZSBnb3QgYSBzdHJpbmcsIGxldCdzIHNvcnQgYnkgdGhlIHNvcnQgZGF0YSBhcyBwcm92aWRlZCBpblxuICAgICAgLy8gdGhlIGluc3RhbmNlJ3Mgb3B0aW9ucy5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBzb3J0Q29tcGFyZXIgPT09IHN0cmluZ1R5cGUpIHtcbiAgICAgICAgc29ydENvbXBhcmVyID0gcGFyc2VDcml0ZXJpYShjb21wYXJlcik7XG4gICAgICAgIGl0ZW1zLnNvcnQoZGVmYXVsdENvbXBhcmVyKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBpZiB3ZSBnb3QgYW4gYXJyYXksIGxldCdzIGFzc3VtZSBpdCdzIGEgcHJlc29ydGVkIGFycmF5IG9mIHRoZVxuICAgICAgLy8gaXRlbXMgYW5kIG9yZGVyIHRoZSBpdGVtcyBiYXNlZCBvbiBpdC5cbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc29ydENvbXBhcmVyKSkge1xuICAgICAgICBpZiAoc29ydENvbXBhcmVyLmxlbmd0aCAhPT0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbJyArIG5hbWVzcGFjZSArICddIHNvcnQgcmVmZXJlbmNlIGl0ZW1zIGRvIG5vdCBtYXRjaCB3aXRoIGdyaWQgaXRlbXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHNvcnRDb21wYXJlci5pbmRleE9mKGl0ZW1zW2ldKSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWycgKyBuYW1lc3BhY2UgKyAnXSBzb3J0IHJlZmVyZW5jZSBpdGVtcyBkbyBub3QgbWF0Y2ggd2l0aCBncmlkIGl0ZW1zLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtc1tpXSA9IHNvcnRDb21wYXJlcltpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEZXNjZW5kaW5nKSBpdGVtcy5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UgbGV0J3MganVzdCBza2lwIGl0LCBub3RoaW5nIHdlIGNhbiBkbyBoZXJlLlxuICAgICAgZWxzZSB7XG4gICAgICAgIC8qKiBAdG9kbyBNYXliZSB0aHJvdyBhbiBlcnJvciBoZXJlPyAqL1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBzb3J0IGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudFNvcnQpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoZXZlbnRTb3J0LCBpdGVtcy5zbGljZSgwKSwgb3JpZ0l0ZW1zKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBNb3ZlIGl0ZW0gdG8gYW5vdGhlciBpbmRleCBvciBpbiBwbGFjZSBvZiBhbm90aGVyIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gaXRlbVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmFjdGlvbj1cIm1vdmVcIl1cbiAgICogICAtIEFjY2VwdHMgZWl0aGVyIFwibW92ZVwiIG9yIFwic3dhcFwiLlxuICAgKiAgIC0gXCJtb3ZlXCIgbW92ZXMgdGhlIGl0ZW0gaW4gcGxhY2Ugb2YgdGhlIG90aGVyIGl0ZW0uXG4gICAqICAgLSBcInN3YXBcIiBzd2FwcyB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW1zLlxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihpdGVtLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pdGVtcy5sZW5ndGggPCAyKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXNTd2FwID0gb3B0cy5hY3Rpb24gPT09IGFjdGlvblN3YXA7XG4gICAgdmFyIGFjdGlvbiA9IGlzU3dhcCA/IGFjdGlvblN3YXAgOiBhY3Rpb25Nb3ZlO1xuICAgIHZhciBmcm9tSXRlbSA9IHRoaXMuX2dldEl0ZW0oaXRlbSk7XG4gICAgdmFyIHRvSXRlbSA9IHRoaXMuX2dldEl0ZW0ocG9zaXRpb24pO1xuICAgIHZhciBmcm9tSW5kZXg7XG4gICAgdmFyIHRvSW5kZXg7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGl0ZW1zIGV4aXN0IGFuZCBhcmUgbm90IHRoZSBzYW1lLlxuICAgIGlmIChmcm9tSXRlbSAmJiB0b0l0ZW0gJiYgZnJvbUl0ZW0gIT09IHRvSXRlbSkge1xuICAgICAgLy8gR2V0IHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcy5cbiAgICAgIGZyb21JbmRleCA9IGl0ZW1zLmluZGV4T2YoZnJvbUl0ZW0pO1xuICAgICAgdG9JbmRleCA9IGl0ZW1zLmluZGV4T2YodG9JdGVtKTtcblxuICAgICAgLy8gRG8gdGhlIG1vdmUvc3dhcC5cbiAgICAgIGlmIChpc1N3YXApIHtcbiAgICAgICAgYXJyYXlTd2FwKGl0ZW1zLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlNb3ZlKGl0ZW1zLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IG1vdmUgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50TW92ZSkpIHtcbiAgICAgICAgdGhpcy5fZW1pdChldmVudE1vdmUsIHtcbiAgICAgICAgICBpdGVtOiBmcm9tSXRlbSxcbiAgICAgICAgICBmcm9tSW5kZXg6IGZyb21JbmRleCxcbiAgICAgICAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlbmQgaXRlbSB0byBhbm90aGVyIEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gaXRlbVxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLmFwcGVuZFRvPWRvY3VtZW50LmJvZHldXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0U2VuZGVyPXRydWVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0UmVjZWl2ZXI9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oaXRlbSwgZ3JpZCwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgZ3JpZC5faXNEZXN0cm95ZWQgfHwgdGhpcyA9PT0gZ3JpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIHRhcmdldCBpdGVtLlxuICAgIGl0ZW0gPSB0aGlzLl9nZXRJdGVtKGl0ZW0pO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgY29udGFpbmVyID0gb3B0cy5hcHBlbmRUbyB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgbGF5b3V0U2VuZGVyID0gb3B0cy5sYXlvdXRTZW5kZXIgPyBvcHRzLmxheW91dFNlbmRlciA6IG9wdHMubGF5b3V0U2VuZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGxheW91dFJlY2VpdmVyID0gb3B0cy5sYXlvdXRSZWNlaXZlclxuICAgICAgPyBvcHRzLmxheW91dFJlY2VpdmVyXG4gICAgICA6IG9wdHMubGF5b3V0UmVjZWl2ZXIgPT09IHVuZGVmaW5lZDtcblxuICAgIC8vIFN0YXJ0IHRoZSBtaWdyYXRpb24gcHJvY2Vzcy5cbiAgICBpdGVtLl9taWdyYXRlLnN0YXJ0KGdyaWQsIHBvc2l0aW9uLCBjb250YWluZXIpO1xuXG4gICAgLy8gSWYgbWlncmF0aW9uIHdhcyBzdGFydGVkIHN1Y2Nlc3NmdWxseSBhbmQgdGhlIGl0ZW0gaXMgYWN0aXZlLCBsZXQncyBsYXlvdXRcbiAgICAvLyB0aGUgZ3JpZHMuXG4gICAgaWYgKGl0ZW0uX21pZ3JhdGUuX2lzQWN0aXZlICYmIGl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICBpZiAobGF5b3V0U2VuZGVyKSB7XG4gICAgICAgIHRoaXMubGF5b3V0KFxuICAgICAgICAgIGxheW91dFNlbmRlciA9PT0gaW5zdGFudExheW91dCxcbiAgICAgICAgICBpc0Z1bmN0aW9uKGxheW91dFNlbmRlcikgPyBsYXlvdXRTZW5kZXIgOiB1bmRlZmluZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXlvdXRSZWNlaXZlcikge1xuICAgICAgICBncmlkLmxheW91dChcbiAgICAgICAgICBsYXlvdXRSZWNlaXZlciA9PT0gaW5zdGFudExheW91dCxcbiAgICAgICAgICBpc0Z1bmN0aW9uKGxheW91dFJlY2VpdmVyKSA/IGxheW91dFJlY2VpdmVyIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZW1vdmVFbGVtZW50cz1mYWxzZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXMuc2xpY2UoMCk7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBVbmJpbmQgd2luZG93IHJlc2l6ZSBldmVudCBsaXN0ZW5lci5cbiAgICBpZiAodGhpcy5fcmVzaXplSGFuZGxlcikge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3kgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtc1tpXS5fZGVzdHJveShyZW1vdmVFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gUmVzdG9yZSBjb250YWluZXIuXG4gICAgcmVtb3ZlQ2xhc3MoY29udGFpbmVyLCB0aGlzLl9zZXR0aW5ncy5jb250YWluZXJDbGFzcyk7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcnO1xuXG4gICAgLy8gRW1pdCBkZXN0cm95IGV2ZW50IGFuZCB1bmJpbmQgYWxsIGV2ZW50cy5cbiAgICB0aGlzLl9lbWl0KGV2ZW50RGVzdHJveSk7XG4gICAgdGhpcy5fZW1pdHRlci5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgcmVmZXJlbmNlIGZyb20gdGhlIGdyaWQgaW5zdGFuY2VzIGNvbGxlY3Rpb24uXG4gICAgZ3JpZEluc3RhbmNlc1t0aGlzLl9pZF0gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGbGFnIGluc3RhbmNlIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UncyBpdGVtIGJ5IGVsZW1lbnQgb3IgYnkgaW5kZXguIFRhcmdldCBjYW4gYWxzbyBiZSBhbiBJdGVtXG4gICAqIGluc3RhbmNlIGluIHdoaWNoIGNhc2UgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIGl0ZW0gaWYgaXQgZXhpc3RzIHdpdGhpblxuICAgKiByZWxhdGVkIEdyaWQgaW5zdGFuY2UuIElmIG5vdGhpbmcgaXMgZm91bmQgd2l0aCB0aGUgcHJvdmlkZWQgdGFyZ2V0LCBudWxsXG4gICAqIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBbdGFyZ2V0XVxuICAgKiBAcmV0dXJucyB7P0l0ZW19XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fZ2V0SXRlbSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIC8vIElmIG5vIHRhcmdldCBpcyBzcGVjaWZpZWQgb3IgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZCwgcmV0dXJuIG51bGwuXG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICghdGFyZ2V0ICYmIHRhcmdldCAhPT0gMCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRhcmdldCBpcyBudW1iZXIgcmV0dXJuIHRoZSBpdGVtIGluIHRoYXQgaW5kZXguIElmIHRoZSBudW1iZXIgaXMgbG93ZXJcbiAgICAvLyB0aGFuIHplcm8gbG9vayBmb3IgdGhlIGl0ZW0gc3RhcnRpbmcgZnJvbSB0aGUgZW5kIG9mIHRoZSBpdGVtcyBhcnJheS4gRm9yXG4gICAgLy8gZXhhbXBsZSAtMSBmb3IgdGhlIGxhc3QgaXRlbSwgLTIgZm9yIHRoZSBzZWNvbmQgbGFzdCBpdGVtLCBldGMuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3RhcmdldCA+IC0xID8gdGFyZ2V0IDogdGhpcy5faXRlbXMubGVuZ3RoICsgdGFyZ2V0XSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYW4gaW5zdGFuY2Ugb2YgSXRlbSByZXR1cm4gaXQgaWYgaXQgaXMgYXR0YWNoZWQgdG8gdGhpc1xuICAgIC8vIEdyaWQgaW5zdGFuY2UsIG90aGVyd2lzZSByZXR1cm4gbnVsbC5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSXRlbSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5fZ3JpZElkID09PSB0aGlzLl9pZCA/IHRhcmdldCA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSW4gb3RoZXIgY2FzZXMgbGV0J3MgYXNzdW1lIHRoYXQgdGhlIHRhcmdldCBpcyBhbiBlbGVtZW50LCBzbyBsZXQncyB0cnlcbiAgICAvLyB0byBmaW5kIGFuIGl0ZW0gdGhhdCBtYXRjaGVzIHRoZSBlbGVtZW50IGFuZCByZXR1cm4gaXQuIElmIGl0ZW0gaXMgbm90XG4gICAgLy8gZm91bmQgcmV0dXJuIG51bGwuXG4gICAgLyoqIEB0b2RvIFRoaXMgY291bGQgYmUgbWFkZSBhIGxvdCBmYXN0ZXIgYnkgdXNpbmcgTWFwL1dlYWtNYXAgb2YgZWxlbWVudHMuICovXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zW2ldLl9lbGVtZW50ID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZXMgYW5kIHVwZGF0ZXMgaW5zdGFuY2UncyBsYXlvdXQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtMYXlvdXREYXRhfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fc2V0dGluZ3MubGF5b3V0O1xuICAgIHZhciB3aWR0aDtcbiAgICB2YXIgaGVpZ2h0O1xuICAgIHZhciBuZXdMYXlvdXQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBMZXQncyBpbmNyZW1lbnQgbGF5b3V0IGlkLlxuICAgICsrbGF5b3V0LmlkO1xuXG4gICAgLy8gTGV0J3MgdXBkYXRlIGxheW91dCBpdGVtc1xuICAgIGxheW91dC5pdGVtcy5sZW5ndGggPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zW2ldLl9pc0FjdGl2ZSkgbGF5b3V0Lml0ZW1zLnB1c2godGhpcy5faXRlbXNbaV0pO1xuICAgIH1cblxuICAgIC8vIExldCdzIG1ha2Ugc3VyZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IGNvbnRhaW5lciBkaW1lbnNpb25zLlxuICAgIHRoaXMuX3JlZnJlc2hEaW1lbnNpb25zKCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgY29udGFpbmVyIHdpZHRoIGFuZCBoZWlnaHQgKHdpdGhvdXQgYm9yZGVycykuXG4gICAgd2lkdGggPSB0aGlzLl93aWR0aCAtIHRoaXMuX2JvcmRlckxlZnQgLSB0aGlzLl9ib3JkZXJSaWdodDtcbiAgICBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgLSB0aGlzLl9ib3JkZXJUb3AgLSB0aGlzLl9ib3JkZXJCb3R0b207XG5cbiAgICAvLyBDYWxjdWxhdGUgbmV3IGxheW91dC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncykpIHtcbiAgICAgIG5ld0xheW91dCA9IHNldHRpbmdzKGxheW91dC5pdGVtcywgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0xheW91dCA9IHBhY2tlci5nZXRMYXlvdXQobGF5b3V0Lml0ZW1zLCB3aWR0aCwgaGVpZ2h0LCBsYXlvdXQuc2xvdHMsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgdGhlIGdyaWQncyBsYXlvdXQuXG4gICAgbGF5b3V0LnNsb3RzID0gbmV3TGF5b3V0LnNsb3RzO1xuICAgIGxheW91dC5zZXRXaWR0aCA9IEJvb2xlYW4obmV3TGF5b3V0LnNldFdpZHRoKTtcbiAgICBsYXlvdXQuc2V0SGVpZ2h0ID0gQm9vbGVhbihuZXdMYXlvdXQuc2V0SGVpZ2h0KTtcbiAgICBsYXlvdXQud2lkdGggPSBuZXdMYXlvdXQud2lkdGg7XG4gICAgbGF5b3V0LmhlaWdodCA9IG5ld0xheW91dC5oZWlnaHQ7XG5cbiAgICByZXR1cm4gbGF5b3V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0IGEgZ3JpZCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0gey4uLip9IFthcmddXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fZW1pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdC5hcHBseSh0aGlzLl9lbWl0dGVyLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBhcmUgYW55IGV2ZW50cyBsaXN0ZW5lcnMgZm9yIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX2hhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2VtaXR0ZXIuX2V2ZW50c1tldmVudF07XG4gICAgcmV0dXJuICEhKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoKTtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGNvbnRhaW5lcidzIHdpZHRoLCBoZWlnaHQgYW5kIG9mZnNldHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUJvdW5kaW5nUmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5fd2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgIHRoaXMuX2xlZnQgPSByZWN0LmxlZnQ7XG4gICAgdGhpcy5fdG9wID0gcmVjdC50b3A7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb250YWluZXIncyBib3JkZXIgc2l6ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGxlZnRcbiAgICogQHBhcmFtIHtCb29sZWFufSByaWdodFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvcFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGJvdHRvbVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUJvcmRlcnMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCwgdG9wLCBib3R0b20pIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgaWYgKGxlZnQpIHRoaXMuX2JvcmRlckxlZnQgPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1sZWZ0LXdpZHRoJyk7XG4gICAgaWYgKHJpZ2h0KSB0aGlzLl9ib3JkZXJSaWdodCA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLXJpZ2h0LXdpZHRoJyk7XG4gICAgaWYgKHRvcCkgdGhpcy5fYm9yZGVyVG9wID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItdG9wLXdpZHRoJyk7XG4gICAgaWYgKGJvdHRvbSkgdGhpcy5fYm9yZGVyQm90dG9tID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItYm90dG9tLXdpZHRoJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggYWxsIG9mIGNvbnRhaW5lcidzIGludGVybmFsIGRpbWVuc2lvbnMgYW5kIG9mZnNldHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3JlZnJlc2hEaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5fdXBkYXRlQm9yZGVycygxLCAxLCAxLCAxKTtcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBvciBoaWRlIEdyaWQgaW5zdGFuY2UncyBpdGVtcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvVmlzaWJsZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHsoU2hvd0NhbGxiYWNrfEhpZGVDYWxsYmFjayl9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3NldEl0ZW1zVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKGl0ZW1zLCB0b1Zpc2libGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZ3JpZCA9IHRoaXM7XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGlzSW5zdGFudCA9IG9wdHMuaW5zdGFudCA9PT0gdHJ1ZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBvcHRzLm9uRmluaXNoO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgY291bnRlciA9IHRhcmdldEl0ZW1zLmxlbmd0aDtcbiAgICB2YXIgc3RhcnRFdmVudCA9IHRvVmlzaWJsZSA/IGV2ZW50U2hvd1N0YXJ0IDogZXZlbnRIaWRlU3RhcnQ7XG4gICAgdmFyIGVuZEV2ZW50ID0gdG9WaXNpYmxlID8gZXZlbnRTaG93RW5kIDogZXZlbnRIaWRlRW5kO1xuICAgIHZhciBtZXRob2QgPSB0b1Zpc2libGUgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGNvbXBsZXRlZEl0ZW1zID0gW107XG4gICAgdmFyIGhpZGRlbkl0ZW1zID0gW107XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaXRlbXMgY2FsbCB0aGUgY2FsbGJhY2ssIGJ1dCBkb24ndCBlbWl0IGFueSBldmVudHMuXG4gICAgaWYgKCFjb3VudGVyKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIGNhbGxiYWNrKHRhcmdldEl0ZW1zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHNob3dTdGFydC9oaWRlU3RhcnQgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhzdGFydEV2ZW50KSkge1xuICAgICAgdGhpcy5fZW1pdChzdGFydEV2ZW50LCB0YXJnZXRJdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gU2hvdy9oaWRlIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IHRhcmdldEl0ZW1zW2ldO1xuXG4gICAgICAvLyBJZiBpbmFjdGl2ZSBpdGVtIGlzIHNob3duIG9yIGFjdGl2ZSBpdGVtIGlzIGhpZGRlbiB3ZSBuZWVkIHRvIGRvXG4gICAgICAvLyBsYXlvdXQuXG4gICAgICBpZiAoKHRvVmlzaWJsZSAmJiAhaXRlbS5faXNBY3RpdmUpIHx8ICghdG9WaXNpYmxlICYmIGl0ZW0uX2lzQWN0aXZlKSkge1xuICAgICAgICBuZWVkc0xheW91dCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGluYWN0aXZlIGl0ZW0gaXMgc2hvd24gd2UgYWxzbyBuZWVkIHRvIGRvIGEgbGl0dGxlIGhhY2sgdG8gbWFrZSB0aGVcbiAgICAgIC8vIGl0ZW0gbm90IGFuaW1hdGUgaXQncyBuZXh0IHBvc2l0aW9uaW5nIChsYXlvdXQpLlxuICAgICAgaWYgKHRvVmlzaWJsZSAmJiAhaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgICAgaXRlbS5fbGF5b3V0Ll9za2lwTmV4dEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGEgaGlkZGVuIGl0ZW0gaXMgYmVpbmcgc2hvd24gd2UgbmVlZCB0byByZWZyZXNoIHRoZSBpdGVtJ3NcbiAgICAgIC8vIGRpbWVuc2lvbnMuXG4gICAgICBpZiAodG9WaXNpYmxlICYmIGl0ZW0uX3Zpc2liaWxpdHkuX2lzSGlkZGVuKSB7XG4gICAgICAgIGhpZGRlbkl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cvaGlkZSB0aGUgaXRlbS5cbiAgICAgIGl0ZW0uX3Zpc2liaWxpdHlbbWV0aG9kXShpc0luc3RhbnQsIGZ1bmN0aW9uKGludGVycnVwdGVkLCBpdGVtKSB7XG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGl0ZW0ncyBhbmltYXRpb24gd2FzIG5vdCBpbnRlcnJ1cHRlZCBhZGQgaXQgdG8gdGhlXG4gICAgICAgIC8vIGNvbXBsZXRlZEl0ZW1zIGFycmF5LlxuICAgICAgICBpZiAoIWludGVycnVwdGVkKSBjb21wbGV0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIC8vIElmIGFsbCBpdGVtcyBoYXZlIGZpbmlzaGVkIHRoZWlyIGFuaW1hdGlvbnMgY2FsbCB0aGUgY2FsbGJhY2tcbiAgICAgICAgLy8gYW5kIGVtaXQgc2hvd0VuZC9oaWRlRW5kIGV2ZW50LlxuICAgICAgICBpZiAoLS1jb3VudGVyIDwgMSkge1xuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkgY2FsbGJhY2soY29tcGxldGVkSXRlbXMuc2xpY2UoMCkpO1xuICAgICAgICAgIGlmIChncmlkLl9oYXNMaXN0ZW5lcnMoZW5kRXZlbnQpKSBncmlkLl9lbWl0KGVuZEV2ZW50LCBjb21wbGV0ZWRJdGVtcy5zbGljZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlZnJlc2ggaGlkZGVuIGl0ZW1zLlxuICAgIGlmIChoaWRkZW5JdGVtcy5sZW5ndGgpIHRoaXMucmVmcmVzaEl0ZW1zKGhpZGRlbkl0ZW1zKTtcblxuICAgIC8vIExheW91dCBpZiBuZWVkZWQuXG4gICAgaWYgKG5lZWRzTGF5b3V0ICYmIGxheW91dCkge1xuICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBoZWxwZXJzXG4gICAqICoqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogTWVyZ2UgZGVmYXVsdCBzZXR0aW5ncyB3aXRoIHVzZXIgc2V0dGluZ3MuIFRoZSByZXR1cm5lZCBvYmplY3QgaXMgYSBuZXdcbiAgICogb2JqZWN0IHdpdGggbWVyZ2VkIHZhbHVlcy4gVGhlIG1lcmdpbmcgaXMgYSBkZWVwIG1lcmdlIG1lYW5pbmcgdGhhdCBhbGxcbiAgICogb2JqZWN0cyBhbmQgYXJyYXlzIHdpdGhpbiB0aGUgcHJvdmlkZWQgc2V0dGluZ3Mgb2JqZWN0cyB3aWxsIGJlIGFsc28gbWVyZ2VkXG4gICAqIHNvIHRoYXQgbW9kaWZ5aW5nIHRoZSB2YWx1ZXMgb2YgdGhlIHNldHRpbmdzIG9iamVjdCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uXG4gICAqIHRoZSByZXR1cm5lZCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0U2V0dGluZ3NcbiAgICogQHBhcmFtIHtPYmplY3R9IFt1c2VyU2V0dGluZ3NdXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYSBuZXcgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VTZXR0aW5ncyhkZWZhdWx0U2V0dGluZ3MsIHVzZXJTZXR0aW5ncykge1xuICAgIC8vIENyZWF0ZSBhIGZyZXNoIGNvcHkgb2YgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICB2YXIgcmV0ID0gbWVyZ2VPYmplY3RzKHt9LCBkZWZhdWx0U2V0dGluZ3MpO1xuXG4gICAgLy8gTWVyZ2UgdXNlciBzZXR0aW5ncyB0byBkZWZhdWx0IHNldHRpbmdzLlxuICAgIGlmICh1c2VyU2V0dGluZ3MpIHtcbiAgICAgIHJldCA9IG1lcmdlT2JqZWN0cyhyZXQsIHVzZXJTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHZpc2libGUvaGlkZGVuIHN0eWxlcyBtYW51YWxseSBzbyB0aGF0IHRoZSB3aG9sZSBvYmplY3QgaXNcbiAgICAvLyBvdmVycmlkZGVuIGluc3RlYWQgb2YgdGhlIHByb3BzLlxuICAgIHJldC52aXNpYmxlU3R5bGVzID0gKHVzZXJTZXR0aW5ncyB8fCAwKS52aXNpYmxlU3R5bGVzIHx8IChkZWZhdWx0U2V0dGluZ3MgfHwgMCkudmlzaWJsZVN0eWxlcztcbiAgICByZXQuaGlkZGVuU3R5bGVzID0gKHVzZXJTZXR0aW5ncyB8fCAwKS5oaWRkZW5TdHlsZXMgfHwgKGRlZmF1bHRTZXR0aW5ncyB8fCAwKS5oaWRkZW5TdHlsZXM7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHR3byBvYmplY3RzIHJlY3Vyc2l2ZWx5IChkZWVwIG1lcmdlKS4gVGhlIHNvdXJjZSBvYmplY3QncyBwcm9wZXJ0aWVzXG4gICAqIGFyZSBtZXJnZWQgdG8gdGhlIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAgICogICAtIFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gICAqICAgLSBUaGUgc291cmNlIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlT2JqZWN0cyh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIgbGVuZ3RoID0gc291cmNlS2V5cy5sZW5ndGg7XG4gICAgdmFyIGlzU291cmNlT2JqZWN0O1xuICAgIHZhciBwcm9wTmFtZTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcHJvcE5hbWUgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgaXNTb3VyY2VPYmplY3QgPSBpc1BsYWluT2JqZWN0KHNvdXJjZVtwcm9wTmFtZV0pO1xuXG4gICAgICAvLyBJZiB0YXJnZXQgYW5kIHNvdXJjZSB2YWx1ZXMgYXJlIGJvdGggb2JqZWN0cywgbWVyZ2UgdGhlIG9iamVjdHMgYW5kXG4gICAgICAvLyBhc3NpZ24gdGhlIG1lcmdlZCB2YWx1ZSB0byB0aGUgdGFyZ2V0IHByb3BlcnR5LlxuICAgICAgaWYgKGlzUGxhaW5PYmplY3QodGFyZ2V0W3Byb3BOYW1lXSkgJiYgaXNTb3VyY2VPYmplY3QpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IG1lcmdlT2JqZWN0cyhtZXJnZU9iamVjdHMoe30sIHRhcmdldFtwcm9wTmFtZV0pLCBzb3VyY2VbcHJvcE5hbWVdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHNvdXJjZSdzIHZhbHVlIGlzIG9iamVjdCBhbmQgdGFyZ2V0J3MgaXMgbm90IGxldCdzIGNsb25lIHRoZSBvYmplY3QgYXNcbiAgICAgIC8vIHRoZSB0YXJnZXQncyB2YWx1ZS5cbiAgICAgIGlmIChpc1NvdXJjZU9iamVjdCkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gbWVyZ2VPYmplY3RzKHt9LCBzb3VyY2VbcHJvcE5hbWVdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHNvdXJjZSdzIHZhbHVlIGlzIGFuIGFycmF5IGxldCdzIGNsb25lIHRoZSBhcnJheSBhcyB0aGUgdGFyZ2V0J3NcbiAgICAgIC8vIHZhbHVlLlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV0uc2xpY2UoMCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbiBhbGwgb3RoZXIgY2FzZXMgbGV0J3MganVzdCBkaXJlY3RseSBhc3NpZ24gdGhlIHNvdXJjZSdzIHZhbHVlIGFzIHRoZVxuICAgICAgLy8gdGFyZ2V0J3MgdmFsdWUuXG4gICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIEdyaWQ7XG5cbn0pKTtcbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUb29sYmFySGVscGVyIH0gZnJvbSBcIi4vdXRpbHMvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbHRlcm5hdGl2ZVZpc3VhbGl6ZXJzV3JhcHBlciBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmlzdWFsaXplcnM6IEFycmF5PFZpc3VhbGl6ZXJCYXNlPixcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICBpZighdmlzdWFsaXplcnMgfHwgdmlzdWFsaXplcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWaXN1YWxpemVyQXJyYXlXcmFwcGVyIHdvcmtzIHdpdGggdmlzdWFsaXplcnMgY29sbGVjdGlvbiBvbmx5LlwiKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcclxuICAgICAgXCJjaGFuZ2VWaXN1YWxpemVyXCIsXHJcbiAgICAgICgpID0+IFxyXG4gICAgICAgIFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgICAgICB0aGlzLnZpc3VhbGl6ZXJzLm1hcCh2aXN1YWxpemVyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdmlzdWFsaXplci5uYW1lLFxyXG4gICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ2aXN1YWxpemVyX1wiICsgdmlzdWFsaXplci5uYW1lKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMudmlzdWFsaXplci5uYW1lID09PSBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICAoZTogYW55KSA9PiB0aGlzLnNldFZpc3VhbGl6ZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSB2aXN1YWxpemVyc1swXTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB2aXN1YWxpemVyQ29udGFpbmVyOiBIVE1MRWxlbWVudFxyXG4gIHByaXZhdGUgdmlzdWFsaXplcjogVmlzdWFsaXplckJhc2U7XHJcblxyXG4gIHByaXZhdGUgc2V0VmlzdWFsaXplcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmKCEhdGhpcy52aXN1YWxpemVyKSB7XHJcbiAgICAgIHRoaXMudmlzdWFsaXplci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSB0aGlzLnZpc3VhbGl6ZXJzLmZpbHRlcih2ID0+IHYubmFtZSA9PT0gbmFtZSlbMF07XHJcbiAgICB0aGlzLnZpc3VhbGl6ZXIucmVuZGVyKHRoaXMudmlzdWFsaXplckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xyXG4gICAgdGhpcy52aXN1YWxpemVyLnVwZGF0ZShkYXRhKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnZpc3VhbGl6ZXIuZGVzdHJveSgpO1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy52aXN1YWxpemVyQ29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy52aXN1YWxpemVyLnJlbmRlcih0aGlzLnZpc3VhbGl6ZXJDb250YWluZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25Cb29sZWFuTW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbk1vZGVsIGV4dGVuZHMgU2VsZWN0QmFzZSB7XHJcbiAgcHJvdGVjdGVkIGNoYXJ0VHlwZXM6IHN0cmluZ1tdO1xyXG4gIHB1YmxpYyBjaGFydFR5cGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBib29sZWFuUXVlc3Rpb24oKSB7XHJcbiAgICByZXR1cm4gPFF1ZXN0aW9uQm9vbGVhbk1vZGVsPnRoaXMucXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRydWVDb2xvciA9IFwiXCI7XHJcbiAgcHVibGljIHN0YXRpYyBmYWxzZUNvbG9yID0gXCJcIjtcclxuXHJcbiAgcHVibGljIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpO1xyXG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcclxuICAgIHJldHVybiBuZXcgSXRlbVZhbHVlKHZhbHVlc1tsYWJlbHMuaW5kZXhPZihpdGVtVGV4dCldLCBpdGVtVGV4dCk7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB0aGlzLmJvb2xlYW5RdWVzdGlvbi52YWx1ZVRydWUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVUcnVlXHJcbiAgICAgICAgOiB0cnVlLFxyXG4gICAgICB0aGlzLmJvb2xlYW5RdWVzdGlvbi52YWx1ZUZhbHNlICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2VcclxuICAgICAgICA6IGZhbHNlXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgdmFyIGxhYmVscyA9IHRoaXMuZ2V0VmFsdWVzKCk7XHJcbiAgICBpZiAodGhpcy5ib29sZWFuUXVlc3Rpb24ubGFiZWxUcnVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbGFiZWxzWzBdID0gdGhpcy5ib29sZWFuUXVlc3Rpb24ubG9jTGFiZWxUcnVlLnRleHRPckh0bWw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib29sZWFuUXVlc3Rpb24ubGFiZWxGYWxzZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxhYmVsc1sxXSA9IHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxvY0xhYmVsRmFsc2UudGV4dE9ySHRtbDtcclxuICAgIH1cclxuICAgIHJldHVybiBsYWJlbHM7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XHJcbiAgICB2YXIgdHJ1ZUNvdW50ID0gMDtcclxuICAgIHZhciBmYWxzZUNvdW50ID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbdGhpcy5xdWVzdGlvbi5uYW1lXTtcclxuICAgICAgaWYgKHJvd1ZhbHVlID09PSB2YWx1ZXNbMF0pIHtcclxuICAgICAgICB0cnVlQ291bnQrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAocm93VmFsdWUgPT09IHZhbHVlc1sxXSkge1xyXG4gICAgICAgIGZhbHNlQ291bnQrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW1t0cnVlQ291bnQsIGZhbHNlQ291bnRdXTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRWxlbWVudFZpc2liaWxpdHkge1xyXG4gIFZpc2libGUsXHJcbiAgSW52aXNpYmxlLFxyXG4gIFB1YmxpY0ludmlzaWJsZSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmlzdWFsaXplclBhbmVsRWxlbWVudCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgdmlzaWJpbGl0eTogRWxlbWVudFZpc2liaWxpdHk7XHJcbiAgdHlwZT86IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuLy9sb2NhbGl6YXRpb25cclxuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZhcnNpXCI7XHJcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mcmVuY2hcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25QYW5lbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYXRyaXhEcm9wZG93blwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4uL3Bsb3RseS9pbmRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi4vd29yZGNsb3VkL3dvcmRjbG91ZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi4vd29yZGNsb3VkL3N0b3B3b3Jkcy9pbmRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi4vdGV4dFwiO1xyXG4iLCIvL1VuY29tbWVudCB0aGlzIGxpbmUgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlXHJcbi8vaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCB2YXIgZW5nbGlzaFN0cmluZ3MgPSB7XHJcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcclxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcclxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0IE1lXCIsXHJcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxyXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcclxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJNYWtlIGNvbHVtbiBwcml2YXRlXCIsXHJcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJNYWtlIGNvbHVtbiBwdWJsaWNcIixcclxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcclxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcclxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcclxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcclxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxyXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXHJcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXHJcbiAgY2hhcnRUeXBlX3BpZTogXCJQaWVcIixcclxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXHJcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXHJcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcclxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcclxuICBzaG93QnV0dG9uOiBcIlNob3dcIixcclxuICByZXNldEZpbHRlcjogXCJSZXNldCBGaWx0ZXJcIixcclxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxyXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcclxuICBkZWZhdWx0T3JkZXI6IFwiRGVmYXVsdFwiLCBcclxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcclxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxyXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXHJcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCJcclxufTtcclxuXHJcbi8vVW5jb21tZW50IHRoZXNlIHR3byBsaW5lcyBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGUuIFlvdSBzaG91bGQgcmVwbGFjZSBcImVuXCIgYW5kIGVuU3RyaW5ncyB3aXRoIHlvdXIgbG9jYWxlIChcImZyXCIsIFwiZGVcIiBhbmQgc28gb24pIGFuZCB5b3VyIHZhcmlhYmxlLlxyXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcclxuLy9sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiRW5nbGlzaFwiO1xyXG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBmYXJzaVN0cmluZ3MgPSB7XHJcbiAgZ3JvdXBCdXR0b246IFwi2q/YsdmI2Ycg2KjZhtiv24wg2KjYp1wiLFxyXG4gIHVuZ3JvdXBCdXR0b246IFwi2K3YsNmBINqv2LHZiNmHXCIsXHJcbiAgc2VsZWN0QnV0dG9uOiBcItin2YbYqtiu2KfYqFwiLFxyXG4gIGhpZGVDb2x1bW46IFwi2YXYrtmB24wg2qnYsdiv2YYg2LPYqtmI2YZcIixcclxuICBzaG93Q29sdW1uOiBcItmG2YXYp9uM2LQg2LPYqtmI2YZcIixcclxuICBtb3ZlVG9EZXRhaWw6IFwi2KfZhtiq2YLYp9mEINio2Ycg2KzYstim24zYp9iqXCIsXHJcbiAgc2hvd0FzQ29sdW1uOiBcItmG2YXYp9uM2LQg2KjZhyDYudmG2YjYp9mGINiz2KrZiNmGXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcItmF2KrZiNmGINiv2LEg2KzYr9mI2YRcIixcclxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCLYp9io2LEg2qnZhNmF2KfYqlwiLFxyXG4gIGNoYXJ0VHlwZV9iYXI6IFwi2YXbjNmE2Ycg2KfbjFwiLFxyXG4gIGNoYXJ0VHlwZV9waWU6IFwi2K/Yp9io2LHZhyDYp9uMKHBpZSlcIixcclxuICBjaGFydFR5cGVfc2NhdHRlcjogXCLZvtix2KfaqdmG2K/ar9uMKFNjYXR0ZXIpXCIsXHJcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIti52YLYsdio2Ycg2KfbjFwiLFxyXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXHJcbiAgaGlkZUJ1dHRvbjogXCLZhdiu2YHbjFwiLFxyXG4gIHJlc2V0RmlsdGVyOiBcItio2KfYstmG2LTYp9mG24wg2YHbjNmE2KrYsdmH2KdcIixcclxuICBjbGVhckJ1dHRvbjogXCLZvtin2qkg2qnYsdiv2YZcIixcclxuICBhZGRFbGVtZW50OiBcItin2YbYqtiu2KfYqCDYs9mI2KfZhCDYqNix2KfbjCDZhtmF2KfbjNi0Li4uXCJcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmFcIl0gPSBmYXJzaVN0cmluZ3M7XHJcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZhXCJdID0gXCJGYXJzaShQZXJzaWFuKVwiO1xyXG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBmcmVuY2hTdHJpbmdzID0ge1xyXG4gICAgZ3JvdXBCdXR0b246IFwiR3JvdXBlclwiLFxyXG4gICAgdW5ncm91cEJ1dHRvbjogXCJEaXNzb2NpZXJcIixcclxuICAgIHNlbGVjdEJ1dHRvbjogXCJTw6lsZWN0aW9ubmVyXCIsXHJcbiAgICBoaWRlQ29sdW1uOiBcIk1hc3F1ZXIgY29sb25uZVwiLFxyXG4gICAgc2hvd0NvbHVtbjogXCJBZmZpY2hlciBjb2xvbm5lXCIsXHJcbiAgICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwcml2w6lcIixcclxuICAgIG1ha2VQdWJsaWNDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHVibGljXCIsXHJcbiAgICBtb3ZlVG9EZXRhaWw6IFwiRMOpcGxhY2VyIHZlcnMgZMOpdGFpbHNcIixcclxuICAgIHNob3dBc0NvbHVtbjogXCJBZmZpY2hlciBlbiBjb2xvbm5lXCIsXHJcbiAgICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dGVzIGVuIHRhYmxlXCIsXHJcbiAgICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJOdWFnZXMgZGUgbW90c1wiLFxyXG4gICAgY2hhcnRUeXBlX2JhcjogXCJCYXJyZXNcIixcclxuICAgIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIkJhcnJlcyBlbXBpbMOpZXNcIixcclxuICAgIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJBbm5lYXVcIixcclxuICAgIGNoYXJ0VHlwZV9waWU6IFwiU2VjdGV1cnNcIixcclxuICAgIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIk51YWdlcyBkZSBwb2ludHNcIixcclxuICAgIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gICAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXNcIixcclxuICAgIGhpZGVCdXR0b246IFwiTWFzcXVlclwiLFxyXG4gICAgcmVzZXRGaWx0ZXI6IFwiUmFmcmFpY2hpciBGaWx0cmVzXCIsXHJcbiAgICBjbGVhckJ1dHRvbjogXCJSYWZyYWljaGlyXCIsXHJcbiAgICBhZGRFbGVtZW50OiBcIkNob2lzaXIgbGEgcXVlc3Rpb24gw6AgYWZmaWNoZXIuLi5cIixcclxuICAgIGRlZmF1bHRPcmRlcjogXCJEZWZhdXRcIixcclxuICAgIGFzY09yZGVyOiBcIkFzY2VuZGFudFwiLFxyXG4gICAgZGVzY09yZGVyOiBcIkRlc2NlbmRhbnRcIixcclxuICAgIHNob3dNaW5vckNvbHVtbnM6IFwiQWZmaWNoZXIgbGVzIGNvbG9ubmVzIG1pbmV1cmVzXCJcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hTdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmclwiXSA9IFwiRnJlbmNoXCI7IiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xyXG5cclxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XHJcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxyXG4gIGRlZmF1bHRMb2NhbGVWYWx1ZTogXCJlblwiLFxyXG4gIGxvY2FsZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxyXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcclxuICBzdXBwb3J0ZWRMb2NhbGVzOiA8QXJyYXk8YW55Pj5bXSxcclxuICBnZXQgY3VycmVudExvY2FsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcclxuICAgICAgPyBcIlwiXHJcbiAgICAgIDogdGhpcy5jdXJyZW50TG9jYWxlVmFsdWU7XHJcbiAgfSxcclxuICBzZXQgY3VycmVudExvY2FsZSh2YWw6IHN0cmluZykge1xyXG4gICAgdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPSB2YWw7XHJcbiAgfSxcclxuICBnZXQgZGVmYXVsdExvY2FsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZTtcclxuICB9LFxyXG4gIHNldCBkZWZhdWx0TG9jYWxlKHZhbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZSA9IHZhbDtcclxuICB9LFxyXG4gIGdldFN0cmluZzogZnVuY3Rpb24oc3RyTmFtZTogc3RyaW5nKSB7XHJcbiAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlXHJcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cclxuICAgICAgOiB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcclxuICAgIGlmICghbG9jIHx8ICFsb2Nbc3RyTmFtZV0pIGxvYyA9IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xyXG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcclxuICAgIGlmKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0sXHJcbiAgZ2V0TG9jYWxlczogZnVuY3Rpb24oKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICB2YXIgcmVzID0gW107XHJcbiAgICByZXMucHVzaChcIlwiKTtcclxuICAgIGlmICh0aGlzLnN1cHBvcnRlZExvY2FsZXMgJiYgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XHJcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzLnNvcnQoKTtcclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XHJcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XHJcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiZW5nbGlzaFwiO1xyXG4iLCJpbXBvcnQgeyBJdGVtVmFsdWUsIFF1ZXN0aW9uTWF0cml4TW9kZWwsIFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4IGV4dGVuZHMgU2VsZWN0QmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHZhbHVlc1NvdXJjZSgpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIHJldHVybiBxdWVzdGlvbi5jb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uLnJvd3MubWFwKChyb3c6IGFueSkgPT5cclxuICAgICAgSXRlbVZhbHVlLmdldFRleHRPckh0bWxCeVZhbHVlKHF1ZXN0aW9uLnJvd3MsIHJvdy52YWx1ZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xyXG4gICAgY29uc3QgZGF0YXNldHM6IEFycmF5PGFueT4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT4ge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24ucm93cy5tYXAoKHY6IGFueSkgPT4gMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3dEYXRhID0+IHtcclxuICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZTogYW55ID0gcm93RGF0YVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XHJcbiAgICAgICAgcXVlc3Rpb24ucm93cy5mb3JFYWNoKChyb3c6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nZXRWYWx1ZXMoKS5mb3JFYWNoKCh2YWw6IGFueSwgZHNJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvblZhbHVlW3Jvdy52YWx1ZV0gPT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgZGF0YXNldHNbZHNJbmRleF1baW5kZXhdKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhc2V0cztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xyXG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRvb2xiYXJIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE51bWJlciBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcclxuICBwcml2YXRlIF9yZXN1bHRBdmVyYWdlOiBhbnk7XHJcbiAgcHJpdmF0ZSBfcmVzdWx0TWluOiBhbnk7XHJcbiAgcHJpdmF0ZSBfcmVzdWx0TWF4OiBhbnk7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3RlcHNDb3VudCA9IDU7XHJcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZVRleHRzQ2FsbGJhY2s6IChcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIG1heFZhbHVlOiBudW1iZXIsXHJcbiAgICBtaW5WYWx1ZTogbnVtYmVyLFxyXG4gICAgc3RlcHNDb3VudDogbnVtYmVyLFxyXG4gICAgdGV4dHM6IHN0cmluZ1tdXHJcbiAgKSA9PiBzdHJpbmdbXTtcclxuXHJcbiAgcHJvdGVjdGVkIGNoYXJ0VHlwZXM6IEFycmF5PHN0cmluZz47XHJcbiAgY2hhcnRUeXBlOiBTdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2hvd0FzUGVyY2VudGFnZSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xyXG4gICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgc3VwZXIudXBkYXRlKGRhdGEpO1xyXG4gICAgdGhpcy5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgdGhpcy5yZW5kZXJDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XHJcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvb2xiYXJDaGFuZ2VIYW5kbGVyID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2hhcnRUeXBlICE9PSBlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByb3RlY3RlZCBjcmVhdGVUb29sYmFySXRlbXModG9vbGJhcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gVG9vbGJhckhlbHBlci5jcmVhdGVTZWxlY3RvcihcclxuICAgICAgICB0aGlzLmNoYXJ0VHlwZXMubWFwKChjaGFydFR5cGUpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBjaGFydFR5cGUsXHJcbiAgICAgICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFydFR5cGVfXCIgKyBjaGFydFR5cGUpLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMuY2hhcnRUeXBlID09PSBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgdGhpcy50b29sYmFyQ2hhbmdlSGFuZGxlclxyXG4gICAgICApO1xyXG4gICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcclxuICAgIHRoaXMuX3Jlc3VsdEF2ZXJhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVRleHQobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XHJcbiAgICBsZXQgdGV4dHM6IGFueSA9IFtdO1xyXG5cclxuICAgIGlmIChzdGVwc0NvdW50ID09PSA1KSB7XHJcbiAgICAgIHRleHRzID0gW1xyXG4gICAgICAgIFwidmVyeSBoaWdoIChcIiArIG1heFZhbHVlICsgXCIpXCIsXHJcbiAgICAgICAgXCJoaWdoXCIsXHJcbiAgICAgICAgXCJtZWRpdW1cIixcclxuICAgICAgICBcImxvd1wiLFxyXG4gICAgICAgIFwidmVyeSBsb3cgKFwiICsgbWluVmFsdWUgKyBcIilcIixcclxuICAgICAgXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHRzLnB1c2gobWF4VmFsdWUpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQgLSAyOyBpKyspIHtcclxuICAgICAgICB0ZXh0cy5wdXNoKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRleHRzLnB1c2gobWluVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghIU51bWJlci5nZW5lcmF0ZVRleHRzQ2FsbGJhY2spIHtcclxuICAgICAgcmV0dXJuIE51bWJlci5nZW5lcmF0ZVRleHRzQ2FsbGJhY2soXHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbixcclxuICAgICAgICBtYXhWYWx1ZSxcclxuICAgICAgICBtaW5WYWx1ZSxcclxuICAgICAgICBzdGVwc0NvdW50LFxyXG4gICAgICAgIHRleHRzXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHRzO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVWYWx1ZXMobWF4VmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xyXG4gICAgICB2YWx1ZXMucHVzaChtYXhWYWx1ZSAvIHN0ZXBzQ291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlcy5wdXNoKG1heFZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDb2xvcnMobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBwYWxldHRlID0gdGhpcy5nZXRDb2xvcnMoKTtcclxuICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHNDb3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbG9ycy5wdXNoKHBhbGV0dGVbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9ycy5wdXNoKFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiKTtcclxuXHJcbiAgICByZXR1cm4gY29sb3JzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlc3VsdCgpIHtcclxuICAgIGlmICh0aGlzLl9yZXN1bHRBdmVyYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZTogYW55ID0gK3Jvd0RhdGFbdGhpcy5xdWVzdGlvbi5uYW1lXTtcclxuICAgICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICBxdWVzdGlvblZhbHVlcy5wdXNoKHF1ZXN0aW9uVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID1cclxuICAgICAgICAocXVlc3Rpb25WYWx1ZXMgJiZcclxuICAgICAgICAgIHF1ZXN0aW9uVmFsdWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gcXVlc3Rpb25WYWx1ZXMubGVuZ3RoKSB8fFxyXG4gICAgICAgIDA7XHJcbiAgICAgIHRoaXMuX3Jlc3VsdEF2ZXJhZ2UgPSBNYXRoLmNlaWwodGhpcy5fcmVzdWx0QXZlcmFnZSAqIDEwMCkgLyAxMDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0QXZlcmFnZTtcclxuICB9XHJcblxyXG4gIGdldCByZXN1bHRNYXgoKSB7XHJcbiAgICBpZiAodGhpcy5fcmVzdWx0TWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fcmVzdWx0TWF4ID0gMDtcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZTogYW55ID0gK3Jvd0RhdGFbdGhpcy5xdWVzdGlvbi5uYW1lXTtcclxuICAgICAgICBpZiAoISFxdWVzdGlvblZhbHVlICYmIHRoaXMuX3Jlc3VsdE1heCA8IHF1ZXN0aW9uVmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuX3Jlc3VsdE1heCA9IHF1ZXN0aW9uVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9yZXN1bHRNYXg7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVzdWx0TWluKCkge1xyXG4gICAgaWYgKHRoaXMuX3Jlc3VsdE1pbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3Jlc3VsdE1pbiA9IDA7XHJcblxyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWU6IGFueSA9ICtyb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XHJcbiAgICAgICAgaWYgKCEhcXVlc3Rpb25WYWx1ZSAmJiB0aGlzLl9yZXN1bHRNaW4gPiBxdWVzdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLl9yZXN1bHRNaW4gPSBxdWVzdGlvblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0TWluO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25Cb29sZWFuTW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQm9vbGVhbk1vZGVsIH0gZnJvbSBcIi4uL2Jvb2xlYW5cIjtcclxuaW1wb3J0IHsgUGxvdGx5Q2hhcnRBZGFwdGVyIH0gZnJvbSAnLi9zZWxlY3RCYXNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbG90bHlCb29sQ2hhcnRBZGFwdGVyIGV4dGVuZHMgUGxvdGx5Q2hhcnRBZGFwdGVyIHtcclxuICBjb25zdHJ1Y3Rvcihtb2RlbDogQm9vbGVhblBsb3RseSkge1xyXG4gICAgc3VwZXIobW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHBhdGNoQ29uZmlnUGFyYW1ldGVycyhcclxuICAgIGNoYXJ0Tm9kZTogb2JqZWN0LFxyXG4gICAgdHJhY2VzOiBBcnJheTxvYmplY3Q+LFxyXG4gICAgbGF5b3V0OiBvYmplY3QsXHJcbiAgICBjb25maWc6IG9iamVjdFxyXG4gICkge1xyXG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5tb2RlbC5nZXRDb2xvcnMoKTtcclxuICAgIGNvbnN0IGJvb2xDb2xvcnMgPSBbXHJcbiAgICAgIEJvb2xlYW5QbG90bHkudHJ1ZUNvbG9yIHx8IGNvbG9yc1swXSxcclxuICAgICAgQm9vbGVhblBsb3RseS5mYWxzZUNvbG9yIHx8IGNvbG9yc1sxXVxyXG4gICAgXTtcclxuXHJcbiAgICBpZiAodGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwicGllXCIgfHwgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIikge1xyXG4gICAgICB0cmFjZXMuZm9yRWFjaCgodHJhY2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHRyYWNlLm1hcmtlci5jb2xvcnMgPSBib29sQ29sb3JzO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwiYmFyXCIpIHtcclxuICAgICAgdHJhY2VzLmZvckVhY2goKHRyYWNlOiBhbnkpID0+IHtcclxuICAgICAgICB0cmFjZS5tYXJrZXIuY29sb3IgPSBib29sQ29sb3JzO1xyXG4gICAgICB9KTtcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5QbG90bHkgZXh0ZW5kcyBCb29sZWFuTW9kZWwge1xyXG4gIHByaXZhdGUgX2NoYXJ0QWRhcHRlcjogUGxvdGx5Q2hhcnRBZGFwdGVyO1xyXG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJwaWVcIiwgXCJiYXJcIiwgXCJkb3VnaG51dFwiXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jaGFydFR5cGVzID0gQm9vbGVhblBsb3RseS50eXBlcztcclxuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xyXG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyID0gbmV3IFBsb3RseUJvb2xDaGFydEFkYXB0ZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmRlc3Ryb3koPEhUTUxFbGVtZW50PmNvbnRhaW5lci5jaGlsZHJlblswXSk7XHJcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3QgY2hhcnROb2RlOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XHJcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIuY3JlYXRlKGNoYXJ0Tm9kZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiYm9vbGVhblwiLCBCb29sZWFuUGxvdGx5KTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYXRpbmdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0cml4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Jvb2xlYW5cIjtcclxuIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tIFwiLi4vbWF0cml4XCI7XHJcbmltcG9ydCB7IFBsb3RseUNoYXJ0QWRhcHRlciB9IGZyb20gJy4vc2VsZWN0QmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxvdGx5TWF0cml4Q2hhcnRBZGFwdGVyIGV4dGVuZHMgUGxvdGx5Q2hhcnRBZGFwdGVyIHtcclxuICBjb25zdHJ1Y3Rvcihtb2RlbDogTWF0cml4UGxvdGx5KSB7XHJcbiAgICBzdXBlcihtb2RlbCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxyXG4gICAgY2hhcnROb2RlOiBIVE1MRGl2RWxlbWVudCxcclxuICAgIHRyYWNlczogQXJyYXk8YW55PixcclxuICAgIGxheW91dDogYW55LFxyXG4gICAgY29uZmlnOiBhbnlcclxuICApIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLm1vZGVsLnF1ZXN0aW9uO1xyXG4gICAgLy92YXIgdmFsdWVUaXRsZXMgPSBxdWVzdGlvbi5jb2x1bW5zLm1hcChjb2x1bW4gPT4gY29sdW1uLnRleHQpO1xyXG4gICAgbGF5b3V0LnNob3dsZWdlbmQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcInBpZVwiIHx8IHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCIpIHtcclxuICAgICAgbGF5b3V0LmdyaWQgPSB7IHJvd3M6IDEsIGNvbHVtbnM6IHRyYWNlcy5sZW5ndGggfTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwic3RhY2tlZGJhclwiKSB7XHJcbiAgICAgIGxheW91dC5oZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIGxheW91dC5iYXJtb2RlID0gXCJzdGFja1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF5b3V0LmhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHF1ZXN0aW9uLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwicGllXCIgfHwgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIikge1xyXG4gICAgICAgIHRyYWNlc1tpbmRleF0uZG9tYWluID0geyBjb2x1bW46IGluZGV4IH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJhY2VzW2luZGV4XS5ob3ZlcmluZm8gPSBcIngrbmFtZVwiO1xyXG4gICAgICAgIHRyYWNlc1tpbmRleF0ubWFya2VyLmNvbG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJzdGFja2VkYmFyXCIpIHtcclxuICAgICAgICAgIHRyYWNlc1tpbmRleF0udHlwZSA9IFwiYmFyXCI7XHJcbiAgICAgICAgICB0cmFjZXNbaW5kZXhdLm5hbWUgPSBjb2x1bW4udGV4dDtcclxuICAgICAgICAgIHRyYWNlc1tpbmRleF0ud2lkdGggPSAwLjUgLyB0cmFjZXMubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0cmFjZXNbaW5kZXhdLm5hbWUgPSBjb2x1bW4udGV4dDtcclxuICAgICAgICAgIHRyYWNlc1tpbmRleF0ud2lkdGggPSAwLjUgLyB0cmFjZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeFBsb3RseSBleHRlbmRzIE1hdHJpeCB7XHJcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlNYXRyaXhDaGFydEFkYXB0ZXI7XHJcbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImJhclwiLCBcInN0YWNrZWRiYXJcIiwgXCJwaWVcIiwgXCJkb3VnaG51dFwiXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jaGFydFR5cGVzID0gTWF0cml4UGxvdGx5LnR5cGVzO1xyXG4gICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLmNoYXJ0VHlwZXNbMF07XHJcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIgPSBuZXcgUGxvdGx5TWF0cml4Q2hhcnRBZGFwdGVyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5kZXN0cm95KDxIVE1MRWxlbWVudD5jb250YWluZXIuY2hpbGRyZW5bMF0pO1xyXG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFydE5vZGUpO1xyXG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm1hdHJpeFwiLCBNYXRyaXhQbG90bHkpO1xyXG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBOdW1iZXIgfSBmcm9tIFwiLi4vbnVtYmVyXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGFsbG93RG9tUmVuZGVyaW5nLCBEYXRhSGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XHJcblxyXG52YXIgUGxvdGx5OiBhbnkgPSBudWxsO1xyXG5pZiAoYWxsb3dEb21SZW5kZXJpbmcoKSkge1xyXG4gIFBsb3RseSA9IDxhbnk+cmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxvdGx5R2F1Z2VBZGFwdGVyIHtcclxuICBwcml2YXRlIF9jaGFydDogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+ID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGVsOiBHYXVnZVBsb3RseSkge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2hhcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5tb2RlbC5xdWVzdGlvbjtcclxuICAgIGxldCBtYXhWYWx1ZTtcclxuICAgIGxldCBtaW5WYWx1ZTtcclxuXHJcbiAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInRleHRcIikge1xyXG4gICAgICBtYXhWYWx1ZSA9IHRoaXMubW9kZWwucmVzdWx0TWF4O1xyXG4gICAgICBtaW5WYWx1ZSA9IHRoaXMubW9kZWwucmVzdWx0TWluO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmF0ZVZhbHVlcyA9IHF1ZXN0aW9uLnZpc2libGVSYXRlVmFsdWVzO1xyXG4gICAgICBtYXhWYWx1ZSA9IHJhdGVWYWx1ZXNbcmF0ZVZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZTtcclxuICAgICAgbWluVmFsdWUgPSByYXRlVmFsdWVzWzBdLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMubW9kZWwuZ2VuZXJhdGVDb2xvcnMoXHJcbiAgICAgIG1heFZhbHVlLFxyXG4gICAgICBtaW5WYWx1ZSxcclxuICAgICAgR2F1Z2VQbG90bHkuc3RlcHNDb3VudFxyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgbGV2ZWwgPSB0aGlzLm1vZGVsLnJlc3VsdDtcclxuXHJcbiAgICBpZiAoR2F1Z2VQbG90bHkuc2hvd0FzUGVyY2VudGFnZSkge1xyXG4gICAgICBsZXZlbCA9IERhdGFIZWxwZXIudG9QZXJjZW50YWdlKGxldmVsLCBtYXhWYWx1ZSk7XHJcbiAgICAgIG1pblZhbHVlID0gRGF0YUhlbHBlci50b1BlcmNlbnRhZ2UobWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgbWF4VmFsdWUgPSBEYXRhSGVscGVyLnRvUGVyY2VudGFnZShtYXhWYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRhOiBhbnkgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImluZGljYXRvclwiLFxyXG4gICAgICAgIG1vZGU6IFwiZ2F1Z2UrbnVtYmVyXCIsXHJcbiAgICAgICAgZ2F1Z2U6IHtcclxuICAgICAgICAgIGF4aXM6IHsgcmFuZ2U6IFttaW5WYWx1ZSwgbWF4VmFsdWVdIH0sXHJcbiAgICAgICAgICBzaGFwZTogdGhpcy5tb2RlbC5jaGFydFR5cGUsXHJcbiAgICAgICAgICBiZ2NvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICBiYXI6IHsgY29sb3I6IGNvbG9yc1swXSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IGxldmVsLFxyXG4gICAgICAgIHRleHQ6IHF1ZXN0aW9uLm5hbWUsXHJcbiAgICAgICAgZG9tYWluOiB7IHg6IFswLCAxXSwgeTogWzAsIDFdIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBoZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImJ1bGxldFwiKSB7XHJcbiAgICAgIGhlaWdodCA9IDI1MDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbGF5b3V0ID0ge1xyXG4gICAgICB3aWR0aDogNjAwLFxyXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgcGxvdF9iZ2NvbG9yOiB0aGlzLm1vZGVsLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgcGFwZXJfYmdjb2xvcjogdGhpcy5tb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlLFxyXG4gICAgICBzdGF0aWNQbG90OiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUGxvdGx5Lm5ld1Bsb3QoY2hhcnROb2RlLCBkYXRhLCBsYXlvdXQsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveShub2RlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgUGxvdGx5LnB1cmdlKG5vZGUpO1xyXG4gICAgdGhpcy5fY2hhcnQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2F1Z2VQbG90bHkgZXh0ZW5kcyBOdW1iZXIge1xyXG4gIHByaXZhdGUgX2NoYXJ0QWRhcHRlcjogUGxvdGx5R2F1Z2VBZGFwdGVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHR5cGVzID0gW1wiZ2F1Z2VcIiwgXCJidWxsZXRcIl07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICAgIHRoaXMuY2hhcnRUeXBlcyA9IEdhdWdlUGxvdGx5LnR5cGVzO1xyXG4gICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLmNoYXJ0VHlwZXNbMF07XHJcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIgPSBuZXcgUGxvdGx5R2F1Z2VBZGFwdGVyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5kZXN0cm95KDxIVE1MRWxlbWVudD5jb250YWluZXIuY2hpbGRyZW5bMF0pO1xyXG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFydE5vZGUpO1xyXG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xyXG4gIH1cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibnVtYmVyXCIsIEdhdWdlUGxvdGx5KTtcclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwicmF0aW5nXCIsIEdhdWdlUGxvdGx5KTtcclxuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vc2VsZWN0QmFzZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gJy4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyJztcclxuaW1wb3J0IHsgYWxsb3dEb21SZW5kZXJpbmcsIERhdGFIZWxwZXIgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG52YXIgUGxvdGx5OiBhbnkgPSBudWxsO1xyXG5pZiAoYWxsb3dEb21SZW5kZXJpbmcoKSkge1xyXG4gIFBsb3RseSA9IDxhbnk+cmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxvdGx5Q2hhcnRBZGFwdGVyIHtcclxuICBwcml2YXRlIF9jaGFydDogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+ID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbW9kZWw6IFNlbGVjdEJhc2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxyXG4gICAgY2hhcnROb2RlOiBvYmplY3QsXHJcbiAgICB0cmFjZXM6IEFycmF5PG9iamVjdD4sXHJcbiAgICBsYXlvdXQ6IG9iamVjdCxcclxuICAgIGNvbmZpZzogb2JqZWN0XHJcbiAgKSB7fVxyXG5cclxuXHJcbiAgcHVibGljIGdldCBjaGFydCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFydDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoY2hhcnROb2RlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGRhdGFzZXRzID0gdGhpcy5tb2RlbC5nZXREYXRhKCk7XHJcbiAgICBsZXQgbGFiZWxzID0gdGhpcy5tb2RlbC5nZXRMYWJlbHMoKTtcclxuICAgIGxldCBjb2xvcnMgPSB0aGlzLm1vZGVsLmdldENvbG9ycygpO1xyXG4gICAgY29uc3QgdHJhY2VzOiBhbnkgPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5tb2RlbC5vcmRlckJ5QW5zd2VyZXMgPT0gXCJhc2NcIiB8fCB0aGlzLm1vZGVsLm9yZGVyQnlBbnN3ZXJlcyA9PSBcImRlc2NcIikge1xyXG4gICAgICBsZXQgZGljdCA9IERhdGFIZWxwZXIuc29ydERpY3Rpb25hcnkoXHJcbiAgICAgICAgRGF0YUhlbHBlci56aXBBcnJheXMobGFiZWxzLCBjb2xvcnMpLFxyXG4gICAgICAgIGRhdGFzZXRzWzBdLFxyXG4gICAgICAgIHRoaXMubW9kZWwub3JkZXJCeUFuc3dlcmVzID09IFwiZGVzY1wiXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBsYWJlbHNBbmRDb2xvcnMgPSBEYXRhSGVscGVyLnVuemlwQXJyYXlzKGRpY3Qua2V5cyk7XHJcbiAgICAgIGxhYmVscyA9IGxhYmVsc0FuZENvbG9ycy5maXJzdDtcclxuICAgICAgY29sb3JzID0gbGFiZWxzQW5kQ29sb3JzLnNlY29uZDtcclxuICAgICAgZGF0YXNldHNbMF0gPSBkaWN0LnZhbHVlcztcclxuICAgIH1cclxuICAgIGNvbnN0IHRyYWNlQ29uZmlnOiBhbnkgPSB7XHJcbiAgICAgIHR5cGU6IHRoaXMubW9kZWwuY2hhcnRUeXBlLFxyXG4gICAgICB5OiBsYWJlbHMubWFwKGwgPT4ge1xyXG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgICByZXR1cm4gbC5zdWJzdHJpbmcoMCwgMjcpICsgXCIuLi5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGw7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0ZXh0OiBsYWJlbHMsXHJcbiAgICAgIGhvdmVyaW5mbzogXCJ4K3lcIixcclxuICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxyXG4gICAgICBtb2RlOiBcIm1hcmtlcnNcIixcclxuICAgICAgd2lkdGg6IDAuNSxcclxuICAgICAgbWFya2VyOiA8YW55Pnt9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJwaWVcIiB8fCB0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJkb3VnaG51dFwiKSB7XHJcbiAgICAgIHRyYWNlQ29uZmlnLmhvdmVyaW5mbyA9IFwidGV4dCt2YWx1ZStwZXJjZW50XCI7XHJcbiAgICAgIHRyYWNlQ29uZmlnLm1hcmtlci5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgICAgIHRyYWNlQ29uZmlnLnRleHRwb3NpdGlvbiA9IFwiaW5zaWRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImJhclwiKSB7XHJcbiAgICAgIHRyYWNlQ29uZmlnLm1hcmtlci5jb2xvciA9IGNvbG9ycztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIikge1xyXG4gICAgICB0cmFjZUNvbmZpZy50eXBlID0gXCJwaWVcIjtcclxuICAgICAgdHJhY2VDb25maWcuaG9sZSA9IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YXNldHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRyYWNlQ29uZmlnLm1hcmtlci5zeW1ib2wgPSBcImNpcmNsZVwiO1xyXG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuc2l6ZSA9IDE2O1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGFzZXRzLmZvckVhY2goZGF0YXNldCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJwaWVcIiB8fCB0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJkb3VnaG51dFwiKSB7XHJcbiAgICAgICAgdHJhY2VzLnB1c2goXHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0cmFjZUNvbmZpZywge1xyXG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGFzZXQsXHJcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJhY2VzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgdHJhY2VDb25maWcsIHsgeDogZGF0YXNldCB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhlaWdodCA9XHJcbiAgICAgIHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcInBpZVwiIHx8IHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCJcclxuICAgICAgICA/IGxhYmVscy5sZW5ndGggPCAxMFxyXG4gICAgICAgICAgPyBsYWJlbHMubGVuZ3RoICogNTAgKyAxMDBcclxuICAgICAgICAgIDogNTUwXHJcbiAgICAgICAgOiAobGFiZWxzLmxlbmd0aCArIChsYWJlbHMubGVuZ3RoICsgMSkgKiAwLjUpICogMjA7XHJcblxyXG4gICAgY29uc3QgbGF5b3V0OiBhbnkgPSB7XHJcbiAgICAgIGZvbnQ6IHtcclxuICAgICAgICBmYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcclxuICAgICAgICBzaXplOiAxNCxcclxuICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgY29sb3I6IFwiIzQwNDA0MFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICBtYXJnaW46IHtcclxuICAgICAgICB0OiAwLFxyXG4gICAgICAgIGI6IDAsXHJcbiAgICAgICAgcjogMTBcclxuICAgICAgfSxcclxuICAgICAgY29sb3J3YXk6IGNvbG9ycyxcclxuICAgICAgaG92ZXJtb2RlOiBcImNsb3Nlc3RcIixcclxuICAgICAgeWF4aXM6IHtcclxuICAgICAgICBhdXRvbWFyZ2luOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgICB0aWNrbGVuOiA1LFxyXG4gICAgICAgIHRpY2tjb2xvcjogXCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgcmFuZ2Vtb2RlOiBcIm5vbm5lZ2F0aXZlXCIsXHJcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwbG90X2JnY29sb3I6IHRoaXMubW9kZWwuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICBwYXBlcl9iZ2NvbG9yOiB0aGlzLm1vZGVsLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgc2hvd2xlZ2VuZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNvbmZpZzogYW55ID0ge1xyXG4gICAgICBkaXNwbGF5bG9nbzogZmFsc2UsXHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWVcclxuICAgIH07XHJcbiAgICBpZihTZWxlY3RCYXNlUGxvdGx5LmRpc3BsYXlNb2RlQmFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uZmlnLmRpc3BsYXlNb2RlQmFyID0gU2VsZWN0QmFzZVBsb3RseS5kaXNwbGF5TW9kZUJhcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGNoQ29uZmlnUGFyYW1ldGVycyhjaGFydE5vZGUsIHRyYWNlcywgbGF5b3V0LCBjb25maWcpO1xyXG5cclxuICAgIGNvbnN0IHBsb3QgPSBQbG90bHkubmV3UGxvdChjaGFydE5vZGUsIHRyYWNlcywgbGF5b3V0LCBjb25maWcpO1xyXG5cclxuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9jbGlja1wiLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLnBvaW50cy5sZW5ndGggPiAwICYmIHRoaXMubW9kZWwub25EYXRhSXRlbVNlbGVjdGVkKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbVRleHQgPSBkYXRhLnBvaW50c1swXS50ZXh0O1xyXG4gICAgICAgIGNvbnN0IGl0ZW06IEl0ZW1WYWx1ZSA9IHRoaXMubW9kZWwuZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldFNlbGVjdGlvbihpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGdldERyYWdMYXllciA9ICgpID0+XHJcbiAgICAgIDxIVE1MRWxlbWVudD5jaGFydE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5zZXdkcmFnXCIpWzBdO1xyXG4gICAgKDxhbnk+Y2hhcnROb2RlKVtcIm9uXCJdKFwicGxvdGx5X2hvdmVyXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgZHJhZ0xheWVyID0gZ2V0RHJhZ0xheWVyKCk7XHJcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiKTtcclxuICAgIH0pO1xyXG4gICAgKDxhbnk+Y2hhcnROb2RlKVtcIm9uXCJdKFwicGxvdGx5X3VuaG92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcclxuICAgICAgZHJhZ0xheWVyICYmIChkcmFnTGF5ZXIuc3R5bGUuY3Vyc29yID0gXCJcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jaGFydCA9IHBsb3Q7XHJcbiAgICByZXR1cm4gcGxvdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KG5vZGU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBQbG90bHkucHVyZ2Uobm9kZSk7XHJcbiAgICB0aGlzLl9jaGFydCA9IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlUGxvdGx5IGV4dGVuZHMgU2VsZWN0QmFzZSB7XHJcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlDaGFydEFkYXB0ZXI7XHJcbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImJhclwiLCBcInBpZVwiLCBcImRvdWdobnV0XCIsIFwic2NhdHRlclwiXTtcclxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXlNb2RlQmFyOiBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICAgIHRoaXMuY2hhcnRUeXBlcyA9IFNlbGVjdEJhc2VQbG90bHkudHlwZXM7XHJcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcclxuICAgIHRoaXMuX2NoYXJ0QWRhcHRlciA9IG5ldyBQbG90bHlDaGFydEFkYXB0ZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmRlc3Ryb3koPEhUTUxFbGVtZW50PmNvbnRhaW5lci5jaGlsZHJlblswXSk7XHJcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3QgY2hhcnROb2RlOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XHJcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIuY3JlYXRlKGNoYXJ0Tm9kZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY2hlY2tib3hcIiwgU2VsZWN0QmFzZVBsb3RseSk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInJhZGlvZ3JvdXBcIiwgU2VsZWN0QmFzZVBsb3RseSk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImRyb3Bkb3duXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJpbWFnZXBpY2tlclwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcclxuIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uU2VsZWN0QmFzZSwgSXRlbVZhbHVlLCBRdWVzdGlvbkNvbW1lbnRNb2RlbCwgc2V0dGluZ3MgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xyXG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRvb2xiYXJIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyRmFjdG9yeSB9IGZyb20gJy4vdmlzdWFsaXplckZhY3RvcnknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhc2UgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IEl0ZW1WYWx1ZSA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIGNob2ljZXNPcmRlcjogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgcHVibGljIG9yZGVyQnlBbnN3ZXJlczogc3RyaW5nID0gXCJkZWZhdWx0XCI7XHJcbiAgLy8gcHVibGljIHN0YXRpYyBvdGhlckNvbW1lbnRRdWVzdGlvblR5cGUgPSBcImNvbW1lbnRcIjsgLy8gVE9ETzogbWFrZSBpdCBjb25maWd1cmVhYmxlIC0gYWxsb3cgY2hvb3NlIHdoYXQga2luZCBvZiBxdWVzdGlvbi92aXN1YWxpemVyIHdpbGwgYmUgdXNlZCBmb3IgY29tbWVudHMvb3RoZXJzXHJcbiAgcHVibGljIHN0YXRpYyBvdGhlckNvbW1lbnRDb2xsYXBzZWQgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXHJcbiAgICAgIFwiY2hhbmdlQ2hhcnRUeXBlXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jaGFydFR5cGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIHJldHVybiBUb29sYmFySGVscGVyLmNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJ0VHlwZXMubWFwKGNoYXJ0VHlwZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFydFR5cGUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiY2hhcnRUeXBlX1wiICsgY2hhcnRUeXBlKVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMuY2hhcnRUeXBlID09PSBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIChlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldENoYXJ0VHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vbkNoYXJ0VHlwZUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXHJcbiAgICAgIFwiY2hhbmdlQ2hvaWNlc09yZGVyXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jaGFydFR5cGVzLmluZGV4T2YoXCJiYXJcIikgIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLmNob2ljZXNPcmRlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICB7IHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJkZWZhdWx0T3JkZXJcIiksIHZhbHVlOiBcImRlZmF1bHRcIiB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpLCB2YWx1ZTogXCJhc2NcIiB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImRlc2NPcmRlclwiKSwgdmFsdWU6IFwiZGVzY1wiIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3B0aW9uID0+IGZhbHNlLFxyXG4gICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldExhYmVsc09yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVPcmRlclNlbGVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNob2ljZXNPcmRlcjtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFydFR5cGVzOiBzdHJpbmdbXTtcclxuICBwdWJsaWMgY2hhcnRUeXBlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlT3JkZXJTZWxlY3RvcigpIHtcclxuICAgIGlmKCEhdGhpcy5jaG9pY2VzT3JkZXIpIHtcclxuICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlID09IFwiYmFyXCIpIHtcclxuICAgICAgICB0aGlzLmNob2ljZXNPcmRlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNob2ljZXNPcmRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5jaG9pY2VzT3JkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF0udmFsdWUgPSBcImRlZmF1bHRcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uQ2hhcnRUeXBlQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMuc2V0TGFiZWxzT3JkZXIoXCJkZWZhdWx0XCIpO1xyXG4gICAgdGhpcy51cGRhdGVPcmRlclNlbGVjdG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0Q2hhcnRUeXBlKGNoYXJ0VHlwZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuY2hhcnRUeXBlcy5pbmRleE9mKGNoYXJ0VHlwZSkgIT09IC0xICYmXHJcbiAgICAgIHRoaXMuY2hhcnRUeXBlICE9PSBjaGFydFR5cGVcclxuICAgICkge1xyXG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGNoYXJ0VHlwZTtcclxuICAgICAgdGhpcy5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcclxuICAgICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5jaG9pY2VzLmZpbHRlcihcclxuICAgICAgKGNob2ljZTogSXRlbVZhbHVlKSA9PiBjaG9pY2UudGV4dCA9PT0gaXRlbVRleHRcclxuICAgIClbMF07XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oaXRlbTogSXRlbVZhbHVlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICB0aGlzLm9uRGF0YUl0ZW1TZWxlY3RlZCgoaXRlbSAmJiBpdGVtLnZhbHVlKSB8fCB1bmRlZmluZWQsIChpdGVtICYmIGl0ZW0udGV4dCkgfHwgXCJcIik7XHJcbiAgfVxyXG4gIGdldCBzZWxlY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW07XHJcbiAgfVxyXG4gIHNldExhYmVsc09yZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMub3JkZXJCeUFuc3dlcmVzID0gdmFsdWU7XHJcbiAgfVxyXG4gIG9uRGF0YUl0ZW1TZWxlY3RlZDogKHNlbGVjdGVkVmFsdWU6IGFueSwgc2VsZWN0ZWRUZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XHJcbiAgICBzdXBlci51cGRhdGUoZGF0YSk7XHJcbiAgICB0aGlzLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcclxuICAgIHRoaXMuZGVzdHJveUZvb3Rlcih0aGlzLmZvb3RlckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlbmRlckZvb3Rlcih0aGlzLmZvb3RlckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyRm9vdGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYodGhpcy5xdWVzdGlvbi5oYXNDb21tZW50IHx8IHRoaXMucXVlc3Rpb24uaGFzT3RoZXIpIHtcclxuICAgICAgY29uc3QgZm9vdGVyVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICBmb290ZXJUaXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJzYS12aXN1YWxpemVyX19mb290ZXItdGl0bGVcIjtcclxuICAgICAgZm9vdGVyVGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvdGhlckNvbW1lbnRUaXRsZVwiKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRpdGxlRWxlbWVudCk7XHJcblxyXG4gICAgICBjb25zdCBmb290ZXJDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGZvb3RlckNvbnRlbnRFbGVtZW50LmNsYXNzTmFtZSA9IFwic2EtdmlzdWFsaXplcl9fZm9vdGVyLWNvbnRlbnRcIjtcclxuICAgICAgZm9vdGVyQ29udGVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFNlbGVjdEJhc2Uub3RoZXJDb21tZW50Q29sbGFwc2VkID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcblxyXG4gICAgICBjb25zdCB2aXNpYmlsaXR5QnV0dG9uID0gVG9vbGJhckhlbHBlci5jcmVhdGVCdXR0b24oKCkgPT4ge1xyXG4gICAgICAgIGlmKGZvb3RlckNvbnRlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICBmb290ZXJDb250ZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eUJ1dHRvbi5pbm5lclRleHQgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUJ1dHRvblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9vdGVyQ29udGVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eUJ1dHRvbi5pbm5lclRleHQgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFNlbGVjdEJhc2Uub3RoZXJDb21tZW50Q29sbGFwc2VkID8gXCJzaG93QnV0dG9uXCIgOiBcImhpZGVCdXR0b25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcclxuICAgICAgfSwgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dCdXR0b25cIikvKiwgXCJzYS10b29sYmFyX19idXR0b24tLXJpZ2h0XCIqLyk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5QnV0dG9uKTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50RWxlbWVudCk7XHJcblxyXG4gICAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBRdWVzdGlvbkNvbW1lbnRNb2RlbCh0aGlzLnF1ZXN0aW9uLm5hbWUgKyBzZXR0aW5ncy5jb21tZW50UHJlZml4KTtcclxuICAgICAgcXVlc3Rpb24udGl0bGUgPSB0aGlzLnF1ZXN0aW9uLnRpdGxlO1xyXG4gICAgICBjb25zdCB2aXN1YWxpemVyID0gVmlzdWFsaXplckZhY3RvcnkuY3JlYXRlVml6dWFsaXplcihcclxuICAgICAgICBxdWVzdGlvbixcclxuICAgICAgICB0aGlzLmRhdGFcclxuICAgICAgKTtcclxuICAgICAgdmlzdWFsaXplci5yZW5kZXIoZm9vdGVyQ29udGVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsdWVzU291cmNlKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gPFF1ZXN0aW9uU2VsZWN0QmFzZT50aGlzLnF1ZXN0aW9uO1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uW1wiYWN0aXZlQ2hvaWNlc1wiXTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IHZhbHVlczogQXJyYXk8YW55PiA9IHRoaXMudmFsdWVzU291cmNlKCkubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xyXG5cclxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSB2YWx1ZXMudW5zaGlmdChcIm90aGVyXCIpO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT5cclxuICAgICAgSXRlbVZhbHVlLmdldFRleHRPckh0bWxCeVZhbHVlKHRoaXMudmFsdWVzU291cmNlKCksIGNob2ljZS52YWx1ZSlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMucXVlc3Rpb24uaGFzT3RoZXIpIGxhYmVscy51bnNoaWZ0KFwiT3RoZXJcIik7XHJcblxyXG4gICAgcmV0dXJuIGxhYmVscztcclxuICB9XHJcblxyXG4gIGdldERhdGEoKTogYW55W10ge1xyXG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcclxuICAgIGNvbnN0IHN0YXRpc3RpY3MgPSB2YWx1ZXMubWFwKHYgPT4gMCk7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XHJcbiAgICAgIGlmICghIXJvd1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93VmFsdWUpKSB7XHJcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvd1ZhbHVlLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICBzdGF0aXN0aWNzW2luZGV4XSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3dWYWx1ZSA9PSB2YWwpIHtcclxuICAgICAgICAgICAgICBzdGF0aXN0aWNzW2luZGV4XSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtzdGF0aXN0aWNzXTtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IFwiLi90ZXh0LnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0VGFibGVBZGFwdGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGVsOiBUZXh0KSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHsgY29sdW1uc0NvdW50LCBkYXRhfSAgPSB0aGlzLm1vZGVsLmdldERhdGEoKTtcclxuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBlbXB0eVRleHROb2RlLmlubmVySFRNTCA9IFwiVGhlcmUgYXJlIG5vIHJlc3VsdHMgeWV0XCI7XHJcblxyXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5VGV4dE5vZGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFibGVOb2RlID0gPEhUTUxUYWJsZUVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGFibGVOb2RlLmNsYXNzTmFtZSA9IFwic2EtdGV4dC10YWJsZVwiO1xyXG4gICAgdGFibGVOb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMubW9kZWwuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKHJvd0RhdGEgPT4ge1xyXG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbHVtbnNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdGQuY2xhc3NOYW1lID0gXCJzYS10ZXh0LXRhYmxlX19jZWxsXCI7XHJcbiAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gcm93RGF0YVtpXTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVOb2RlLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS10ZXh0LXRhYmxlX19jb250YWluZXJcIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZU5vZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3kobm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICAgIG5vZGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcclxuICBwcml2YXRlIF90ZXh0VGFibGVBZGFwdGVyOiBUZXh0VGFibGVBZGFwdGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLl90ZXh0VGFibGVBZGFwdGVyID0gbmV3IFRleHRUYWJsZUFkYXB0ZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gXCJ0ZXh0XCI7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgbGV0IHJlc3VsdDogQXJyYXk8QXJyYXk8c3RyaW5nPj4gPSBbXTtcclxuICAgIGxldCBjb2x1bW5zQ291bnQgPSAwO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbdGhpcy5xdWVzdGlvbi5uYW1lXTtcclxuICAgICAgY29uc3QgZGF0YVN0cmluZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgaWYgKCEhcm93VmFsdWUpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkpIHtcclxuICAgICAgICAgIGRhdGFTdHJpbmdzLmNvbmNhdChyb3dWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygcm93VmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMocm93VmFsdWUpLmZvckVhY2goa2V5ID0+IGRhdGFTdHJpbmdzLnB1c2gocm93VmFsdWVba2V5XSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YVN0cmluZ3MucHVzaChyb3dWYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGRhdGFTdHJpbmdzKTtcclxuICAgICAgICBpZihkYXRhU3RyaW5ncy5sZW5ndGggPiBjb2x1bW5zQ291bnQpIHtcclxuICAgICAgICAgICAgY29sdW1uc0NvdW50ID0gZGF0YVN0cmluZ3MubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgY29sdW1uc0NvdW50LCBkYXRhOiByZXN1bHQgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl90ZXh0VGFibGVBZGFwdGVyLmRlc3Ryb3koY29udGFpbmVyKTtcclxuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl90ZXh0VGFibGVBZGFwdGVyLmNyZWF0ZShjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3RleHRUYWJsZUFkYXB0ZXIuZGVzdHJveSh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInRleHRcIiwgVGV4dCk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNvbW1lbnRcIiwgVGV4dCk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm11bHRpcGxldGV4dFwiLCBUZXh0KTtcclxuIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XHJcbiAgKDxhbnk+T2JqZWN0KVtcImFzc2lnblwiXSB8fFxyXG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgZm9yICh2YXIgcCBpbiBzKVxyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xyXG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxyXG4gICAgaWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShwKSkgdGhpc0NsYXNzW3BdID0gYmFzZUNsYXNzW3BdO1xyXG4gIGZ1bmN0aW9uIF9fKCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcclxuICB9XHJcbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XHJcbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcclxuICAgICAgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcylcclxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcclxuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcclxuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gc291cmNlKVxyXG4gICAgaWYgKFxyXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXHJcbiAgICAgIGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpIDwgMFxyXG4gICAgKVxyXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xyXG4gIGlmIChcclxuICAgIHNvdXJjZSAhPSBudWxsICYmXHJcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXHJcbiAgKVxyXG4gICAgZm9yIChcclxuICAgICAgdmFyIGkgPSAwLFxyXG4gICAgICAgIHByb3BlcnR5U3ltYm9scyA9ICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0oc291cmNlKTtcclxuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XHJcbiAgICAgIGkrK1xyXG4gICAgKVxyXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxyXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmRlY2xhcmUgdmFyIFJlZmxlY3Q6IGFueTtcclxuXHJcbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxyXG4gIGRlY29yYXRvcnM6IGFueSxcclxuICB0YXJnZXQ6IGFueSxcclxuICBrZXk6IGFueSxcclxuICBkZXNjOiBhbnlcclxuKSB7XHJcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxyXG4gICAgciA9XHJcbiAgICAgIGMgPCAzXHJcbiAgICAgICAgPyB0YXJnZXRcclxuICAgICAgICA6IGRlc2MgPT09IG51bGxcclxuICAgICAgICA/IChkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXHJcbiAgICAgICAgOiBkZXNjLFxyXG4gICAgZDtcclxuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICBlbHNlXHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXHJcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIFRvb2xiYXJIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9PixcclxuICAgIGlzU2VsZWN0ZWQ6IChvcHRpb246IHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0pID0+IGJvb2xlYW4sXHJcbiAgICBoYW5kZXI6IChlOiBhbnkpID0+IHZvaWRcclxuICApIHtcclxuICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VsZWN0V3JhcHBlci5jbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uX19zZWxlY3Qtd3JhcHBlclwiO1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uX19zZWxlY3RcIjtcclxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIGxldCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcclxuICAgICAgb3B0aW9uRWxlbWVudC50ZXh0ID0gb3B0aW9uLnRleHQ7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQuc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvbik7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gaGFuZGVyO1xyXG4gICAgc2VsZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgcmV0dXJuIHNlbGVjdFdyYXBwZXI7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnV0dG9uKFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZCxcclxuICAgIHRleHQgPSBcIlwiLFxyXG4gICAgY3NzQ2xhc3MgPSBcIlwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvbiBcIiArIGNzc0NsYXNzO1xyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICBidXR0b24ub25jbGljayA9IGhhbmRsZXI7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50SGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0VsZW1lbnQocGF0aDogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwic3ZnXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB1c2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwidXNlXCJcclxuICAgICk7XHJcbiAgICB1c2VFbGVtLnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgIFwiI3NhLXN2Zy1cIiArIHBhdGhcclxuICAgICk7XHJcbiAgICBzdmdFbGVtLmFwcGVuZENoaWxkKHVzZUVsZW0pO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0J1dHRvbihwYXRoOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHBhdGgpKTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJ0bihjYXB0aW9uOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1zbWFsbCBzYS10YWJsZV9fYnRuLS1ncmF5XCI7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gY2FwdGlvbjtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlucHV0KFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgICBkZWZhdWx0VmFsdWUgPSBcIlwiXHJcbiAgKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBlbC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xyXG4gICAgZWwuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIHJ1bm5pbmdJbkJyb3dzZXI6IHR5cGVvZiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiLFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEb21SZW5kZXJpbmcoKSB7XHJcbiAgcmV0dXJuIG9wdGlvbnMucnVubmluZ0luQnJvd3NlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgemlwQXJyYXlzKGZpcnN0OiBhbnlbXSwgc2Vjb25kOiBhbnlbXSk6IGFueVtdW10ge1xyXG4gICAgbGV0IHppcEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihmaXJzdC5sZW5ndGgsIHNlY29uZC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgemlwQXJyYXlbaV0gPSBbZmlyc3RbaV0sIHNlY29uZFtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gemlwQXJyYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuemlwQXJyYXlzKFxyXG4gICAgemlwQXJyYXk6IGFueVtdW11cclxuICApOiB7IGZpcnN0OiBhbnlbXTsgc2Vjb25kOiBhbnlbXSB9IHtcclxuICAgIGxldCB0d29BcnJheXM6IGFueSA9IHsgZmlyc3Q6IFtdLCBzZWNvbmQ6IFtdIH07XHJcbiAgICB6aXBBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICB0d29BcnJheXMuZmlyc3RbaV0gPSB2YWx1ZVswXTtcclxuICAgICAgdHdvQXJyYXlzLnNlY29uZFtpXSA9IHZhbHVlWzFdO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHdvQXJyYXlzO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNvcnREaWN0aW9uYXJ5KFxyXG4gICAga2V5czogYW55W10sXHJcbiAgICB2YWx1ZXM6IGFueVtdLFxyXG4gICAgZGVzYzogYm9vbGVhblxyXG4gICk6IHsga2V5czogYW55W107IHZhbHVlczogYW55W10gfSB7XHJcbiAgICBsZXQgZGljdGlvbmFyeSA9IHRoaXMuemlwQXJyYXlzKGtleXMsIHZhbHVlcyk7XHJcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFbMV0gPCBiWzFdID8gMSA6IGFbMV0gPT0gYlsxXSA/IDAgOiAtMTtcclxuICAgICAgcmV0dXJuIGFzYyA/IHJlc3VsdCA6IHJlc3VsdCAqIC0xO1xyXG4gICAgfTtcclxuICAgIGRpY3Rpb25hcnkuc29ydCgoYTogYW55W10sIGI6IGFueVtdKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZXNjID8gY29tcGFyYXRvcihhLCBiLCBmYWxzZSkgOiBjb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQga2V5c0FuZFZhbHVlcyA9IHRoaXMudW56aXBBcnJheXMoZGljdGlvbmFyeSk7XHJcbiAgICByZXR1cm4geyBrZXlzOiBrZXlzQW5kVmFsdWVzLmZpcnN0LCB2YWx1ZXM6IGtleXNBbmRWYWx1ZXMuc2Vjb25kIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlIC8gbWF4VmFsdWUpICogMTAwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XHJcblxyXG5kZWNsYXJlIHR5cGUgVmlzdWFsaXplckNvbnN0cnVjdG9yID0gbmV3IChcclxuICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICBvcHRpb25zPzogT2JqZWN0XHJcbikgPT4gYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYW5hZ2VyIHtcclxuICBzdGF0aWMgdml6dWFsaXplcnM6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxWaXN1YWxpemVyQ29uc3RydWN0b3I+IH0gPSB7fTtcclxuICAvKipcclxuICAgKiBSZWdpc3RlciB2aXN1YWxpemVyIChjb25zdHJ1Y3RvcikgZm9yIHF1ZXN0aW9uIHR5cGUuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlclZpc3VhbGl6ZXIoXHJcbiAgICB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgY29uc3RydWN0b3I6IFZpc3VhbGl6ZXJDb25zdHJ1Y3RvclxyXG4gICkge1xyXG4gICAgbGV0IHZpenVhbGl6ZXJzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdO1xyXG4gICAgaWYgKCF2aXp1YWxpemVycykge1xyXG4gICAgICB2aXp1YWxpemVycyA9IFtdO1xyXG4gICAgICBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV0gPSB2aXp1YWxpemVycztcclxuICAgIH1cclxuICAgIHZpenVhbGl6ZXJzLnB1c2goY29uc3RydWN0b3IpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBHZXQgdmlzdWFsaXplcnMgKGNvbnN0cnVjdG9ycykgZm9yIHF1ZXN0aW9uIHR5cGUuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXRWaXN1YWxpemVyc0J5VHlwZSh0eXBlTmFtZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgdml6dWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV07XHJcbiAgICBpZiAoIXZpenVhbGl6ZXJzKSB7XHJcbiAgICAgIHJldHVybiBbVmlzdWFsaXplckJhc2VdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZpenVhbGl6ZXJzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsLCBNYXRyaXhEcm9wZG93bkNvbHVtbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvbk1hdHJpeERyb3Bkb3duIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xyXG4gIHByaXZhdGUgX3BhbmVsVmlzdWFsaXplcjogVmlzdWFsaXphdGlvblBhbmVsID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIgPSBuZXcgVmlzdWFsaXphdGlvblBhbmVsKFxyXG4gICAgICB0aGlzLmdldFF1ZXN0aW9ucygpLFxyXG4gICAgICBbXSxcclxuICAgICAgeyBhbGxvd0R5bmFtaWNMYXlvdXQ6IGZhbHNlIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIGRhdGEuZm9yRWFjaChkYXRhSXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IHJhd0RhdGFJdGVtID0gZGF0YUl0ZW1bdGhpcy5xdWVzdGlvbi5uYW1lXTtcclxuICAgICAgICBpZighIXJhd0RhdGFJdGVtKSB7XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyhyYXdEYXRhSXRlbSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaChyYXdEYXRhSXRlbVtrZXldKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLnVwZGF0ZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgY29uc3QgbWF0cml4ZHJvcGRvd246IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIHJldHVybiBtYXRyaXhkcm9wZG93bi5jb2x1bW5zLm1hcCgoY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbikgPT4gY29sdW1uLnRlbXBsYXRlUXVlc3Rpb24pXHJcbiAgfVxyXG5cclxuICBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIucmVuZGVyKGNvbnRhaW5lcik7XHJcbiAgfVxyXG59XHJcblxyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXHJcbiAgXCJtYXRyaXhkcm9wZG93blwiLFxyXG4gIFZpc3VhbGl6YXRpb25NYXRyaXhEcm9wZG93blxyXG4pO1xyXG4iLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pYyBleHRlbmRzIFZpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXN0aW9ucygpIHtcclxuICAgIGNvbnN0IG1hdHJpeGR5bmFtaWM6IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIGNvbnN0IHZpc2libGVSb3dzID0gbWF0cml4ZHluYW1pYy52aXNpYmxlUm93cztcclxuXHJcbiAgICBpZiAodmlzaWJsZVJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gW107XHJcblxyXG4gICAgcmV0dXJuIHZpc2libGVSb3dzWzBdLmNlbGxzLm1hcChjID0+IGMucXVlc3Rpb24pO1xyXG4gIH1cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxyXG4gIFwibWF0cml4ZHluYW1pY1wiLFxyXG4gIFZpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljXHJcbik7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcclxuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XHJcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQsIEVsZW1lbnRWaXNpYmlsaXR5IH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJGYWN0b3J5IH0gZnJvbSAnLi92aXN1YWxpemVyRmFjdG9yeSc7XHJcbmNvbnN0IE11dXJpID0gcmVxdWlyZShcIm11dXJpXCIpO1xyXG5pbXBvcnQgXCIuL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzXCI7XHJcblxyXG5jb25zdCBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uXCI7XHJcbmNvbnN0IHF1ZXN0aW9uTGF5b3V0ZWRFbGVtZW50Q2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbi1sYXlvdXRlZFwiO1xyXG5cclxuLyoqXHJcbiAqIFZpc3VhbGl6YXRpb25QYW5lbCBpcyByZXNwb25zaWJsZSBmb3IgZGlzcGxheWluZyBhbiBhcnJheSBvZiBzdXJ2ZXkgcXVlc3Rpb25zXHJcbiAqIHF1ZXN0aW9ucyAtIGFuIGFycmF5IG9mIHN1cnZleSBxdWVzdGlvbnMgdG8gdmlzdWFsaXplXHJcbiAqIGRhdGEgLSBhbiBhcnJheSBvZiBhbnN3ZXJzIGluIGZvcm1hdCBvZiBzdXJ2ZXkgcmVzdWx0XHJcbiAqIG9wdGlvbnM6XHJcbiAqIGFsbG93RHluYW1pY0xheW91dCAtIHNldCBpdCB0byBmYWxzZSB0byBkaXNhYmxlIGl0ZW1zIGRyYWcvZHJvcCByZW9yZGVyaW5nIGFuZCBkeW5hbWljIGxheW91dGluZ1xyXG4gKiBhbGxvd0hpZGVRdWVzdGlvbnMgLSBzZXQgaXQgdG8gZmFsc2UgdG8gZGVueSB1c2VyIHRvIGhpZGUvc2hvdyBpbmRpdmlkdWFsIHF1ZXN0aW9uc1xyXG4gKiBlbGVtZW50cyAtIGxpc3Qgb2YgdmlzdWFsIGVsZW1lbnQgZGVzY3JpcHRpb25zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvblBhbmVsIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xyXG4gIHByb3RlY3RlZCBmaWx0ZXJlZERhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT47XHJcbiAgcHJvdGVjdGVkIGZpbHRlclZhbHVlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcXVlc3Rpb25zOiBBcnJheTxhbnk+LFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9LFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudHM6IEFycmF5PElWaXN1YWxpemVyUGFuZWxFbGVtZW50PiA9IFtdLFxyXG4gICAgcHJpdmF0ZSBpc1RydXN0ZWRBY2Nlc3MgPSBmYWxzZVxyXG4gICkge1xyXG4gICAgc3VwZXIobnVsbCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGRhdGE7XHJcbiAgICBpZiAoX2VsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50cyA9IHRoaXMuYnVpbGRFbGVtZW50cyhxdWVzdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93SGVhZGVyID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXHJcbiAgICAgIFwicmVzZXRGaWx0ZXJcIixcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBUb29sYmFySGVscGVyLmNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKCh2aXN1YWxpemVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHZpc3VhbGl6ZXIgaW5zdGFuY2VvZiBTZWxlY3RCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxpemVyLnNldFNlbGVjdGlvbih1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlc2V0RmlsdGVyXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcclxuICAgICAgXCJhZGRFbGVtZW50XCIsXHJcbiAgICAgICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFsbG93SGlkZVF1ZXN0aW9ucykge1xyXG4gICAgICAgICAgbGV0IGFkZEVsZW1lbnRTZWxlY3RvcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBjb25zdCBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyID0gKHBhbmVsOiBWaXN1YWxpemF0aW9uUGFuZWwsIF86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IHRoaXMuaGlkZGVuRWxlbWVudHM7XHJcbiAgICAgICAgICAgIGlmIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIDxhbnk+e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFkZEVsZW1lbnRcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgIC5jb25jYXQoaGlkZGVuRWxlbWVudHMpXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsZW1lbnQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVsZW1lbnQuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAob3B0aW9uOiBhbnkpID0+IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmlzaWJpbGl0eSA9IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyVmlzdWFsaXplcihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICEhdGhpcy5sYXlvdXRFbmdpbmUgJiYgdGhpcy5sYXlvdXRFbmdpbmUuYWRkKFtxdWVzdGlvbkVsZW1lbnRdKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlRWxlbWVudHNDaGFuZ2VkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgKGFkZEVsZW1lbnRTZWxlY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgdG9vbGJhci5yZXBsYWNlQ2hpbGQoc2VsZWN0V3JhcHBlciwgYWRkRWxlbWVudFNlbGVjdG9yKSkgfHxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0V3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgYWRkRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0V3JhcHBlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgJiYgdG9vbGJhci5yZW1vdmVDaGlsZChhZGRFbGVtZW50U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvclVwZGF0ZXIodGhpcywge30pO1xyXG4gICAgICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NoYW5nZWQuYWRkKGFkZEVsZW1lbnRTZWxlY3RvclVwZGF0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhbGxvd0R5bmFtaWNMYXlvdXQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLm9wdGlvbnMuYWxsb3dEeW5hbWljTGF5b3V0ID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLmFsbG93RHluYW1pY0xheW91dCA9PT0gdHJ1ZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYWxsb3dIaWRlUXVlc3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5vcHRpb25zLmFsbG93SGlkZVF1ZXN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy5hbGxvd0hpZGVRdWVzdGlvbnMgPT09IHRydWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldExheW91dEVuZ2luZTogKCkgPT4gYW55O1xyXG4gIHB1YmxpYyBnZXQgbGF5b3V0RW5naW5lKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5nZXRMYXlvdXRFbmdpbmUgJiYgdGhpcy5nZXRMYXlvdXRFbmdpbmUoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBidWlsZEVsZW1lbnRzKHF1ZXN0aW9uczogYW55W10pOiBJVmlzdWFsaXplclBhbmVsRWxlbWVudFtdIHtcclxuICAgIHJldHVybiAocXVlc3Rpb25zIHx8IFtdKS5tYXAoKHF1ZXN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ubmFtZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogcXVlc3Rpb24udGl0bGUsXHJcbiAgICAgICAgdmlzaWJpbGl0eTogRWxlbWVudFZpc2liaWxpdHkuVmlzaWJsZSxcclxuICAgICAgICB0eXBlOiB1bmRlZmluZWQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50cygpOiBJVmlzdWFsaXplclBhbmVsRWxlbWVudFtdIHtcclxuICAgIHJldHVybiAodGhpcy5fZWxlbWVudHMgfHwgW10pLm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGVsZW1lbnQubmFtZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogZWxlbWVudC5kaXNwbGF5TmFtZSxcclxuICAgICAgICB2aXNpYmlsaXR5OiBlbGVtZW50LnZpc2liaWxpdHksXHJcbiAgICAgICAgdHlwZTogZWxlbWVudC50eXBlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciBjZXJ0YWluIGVsZW1lbnQgaXMgdmlzaWJsZS5cclxuICAgKi9cclxuICBwdWJsaWMgaXNWaXNpYmxlKHZpc2liaWxpdHk6IEVsZW1lbnRWaXNpYmlsaXR5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSAhPT0gRWxlbWVudFZpc2liaWxpdHkuSW52aXNpYmxlKSB8fFxyXG4gICAgICAoIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCB2aXNpYmxlRWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKChlbCkgPT4gdGhpcy5pc1Zpc2libGUoZWwudmlzaWJpbGl0eSkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBoaWRkZW5FbGVtZW50cygpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5maWx0ZXIoKGVsKSA9PiAhdGhpcy5pc1Zpc2libGUoZWwudmlzaWJpbGl0eSkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldEVsZW1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWwubmFtZSA9PT0gbmFtZSlbMF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIGVsZW1lbnQgdmlzaWJpbGl0eSBoYXMgYmVlbiBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvblZpc2libGVFbGVtZW50c0NoYW5nZWQgPSBuZXcgRXZlbnQ8XHJcbiAgICAoc2VuZGVyOiBWaXN1YWxpemF0aW9uUGFuZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxyXG4gICAgYW55XHJcbiAgPigpO1xyXG5cclxuICB2aXNpYmxlRWxlbWVudHNDaGFuZ2VkKGVsZW1lbnQ6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50KSB7XHJcbiAgICBpZiAoIXRoaXMub25WaXNpYmxlRWxlbWVudHNDaGFuZ2VkLmlzRW1wdHkpIHtcclxuICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NoYW5nZWQuZmlyZSh0aGlzLCB7XHJcbiAgICAgICAgZWxlbWVudHM6IHRoaXMuX2VsZW1lbnRzLFxyXG4gICAgICAgIGNoYW5nZWQ6IGVsZW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYXlvdXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3lzIGdpdmVuIHZpc3VhbGl6ZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGRlc3Ryb3lWaXN1YWxpemVyKHZpc3VhbGl6ZXI6IFZpc3VhbGl6ZXJCYXNlKSB7XHJcbiAgICBpZiAodmlzdWFsaXplciBpbnN0YW5jZW9mIFNlbGVjdEJhc2UpIHtcclxuICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcclxuICAgICAgdmlzdWFsaXplci5vbkRhdGFJdGVtU2VsZWN0ZWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdmlzdWFsaXplci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLnNwbGljZSh0aGlzLnZpc3VhbGl6ZXJzLmluZGV4T2YodmlzdWFsaXplciksIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVycyBnaXZlbiBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJWaXN1YWxpemVyKGVsZW1lbnQ6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50KSB7XHJcbiAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9ucy5maWx0ZXIoKHEpID0+IHEubmFtZSA9PT0gZWxlbWVudC5uYW1lKVswXTtcclxuICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgY29uc3Qgdml6dWFsaXplckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIHRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBlbGVtZW50LmRpc3BsYXlOYW1lO1xyXG5cclxuICAgIHF1ZXN0aW9uRWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmFsbG93RHluYW1pY0xheW91dFxyXG4gICAgICA/IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiIFwiICsgcXVlc3Rpb25MYXlvdXRlZEVsZW1lbnRDbGFzc05hbWVcclxuICAgICAgOiBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWU7XHJcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lICsgXCJfX3RpdGxlXCI7XHJcbiAgICBxdWVzdGlvbkNvbnRlbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lICsgXCJfX2NvbnRlbnRcIjtcclxuXHJcbiAgICBxdWVzdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcclxuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh2aXp1YWxpemVyRWxlbWVudCk7XHJcbiAgICBxdWVzdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25Db250ZW50KTtcclxuXHJcbiAgICBjb25zdCB2aXN1YWxpemVyID0gVmlzdWFsaXplckZhY3RvcnkuY3JlYXRlVml6dWFsaXplcihcclxuICAgICAgcXVlc3Rpb24sXHJcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLmFsbG93SGlkZVF1ZXN0aW9ucykge1xyXG4gICAgICB2aXN1YWxpemVyLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXHJcbiAgICAgICAgXCJyZW1vdmVRdWVzdGlvblwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBUb29sYmFySGVscGVyLmNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC52aXNpYmlsaXR5ID0gRWxlbWVudFZpc2liaWxpdHkuSW52aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95VmlzdWFsaXplcih2aXN1YWxpemVyKTtcclxuICAgICAgICAgICAgICAgICEhdGhpcy5sYXlvdXRFbmdpbmUgJiZcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sYXlvdXRFbmdpbmUucmVtb3ZlKFtxdWVzdGlvbkVsZW1lbnRdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChxdWVzdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlRWxlbWVudHNDaGFuZ2VkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUJ1dHRvblwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZpc3VhbGl6ZXIgaW5zdGFuY2VvZiBTZWxlY3RCYXNlKSB7XHJcbiAgICAgIHZhciBmaWx0ZXJJbmZvID0ge1xyXG4gICAgICAgIHRleHQ6IDxIVE1MRWxlbWVudD51bmRlZmluZWQsXHJcbiAgICAgICAgZWxlbWVudDogPEhUTUxEaXZFbGVtZW50PnVuZGVmaW5lZCxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChzZWxlY3Rpb246IGFueSkge1xyXG4gICAgICAgICAgaWYgKCEhc2VsZWN0aW9uICYmICEhc2VsZWN0aW9uLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVySFRNTCA9IFwiRmlsdGVyOiBbXCIgKyBzZWxlY3Rpb24udGV4dCArIFwiXVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcclxuICAgICAgICBcInF1ZXN0aW9uRmlsdGVySW5mb1wiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGZpbHRlckluZm8uZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBmaWx0ZXJJbmZvLmVsZW1lbnQuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fZmlsdGVyXCI7XHJcblxyXG4gICAgICAgICAgZmlsdGVySW5mby50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICBmaWx0ZXJJbmZvLnRleHQuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fZmlsdGVyLXRleHRcIjtcclxuICAgICAgICAgIGZpbHRlckluZm8uZWxlbWVudC5hcHBlbmRDaGlsZChmaWx0ZXJJbmZvLnRleHQpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGZpbHRlckNsZWFyID0gVG9vbGJhckhlbHBlci5jcmVhdGVCdXR0b24oKCkgPT4ge1xyXG4gICAgICAgICAgICB2aXN1YWxpemVyLnNldFNlbGVjdGlvbih1bmRlZmluZWQpO1xyXG4gICAgICAgICAgfSwgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNsZWFyQnV0dG9uXCIpKTtcclxuICAgICAgICAgIGZpbHRlckluZm8uZWxlbWVudC5hcHBlbmRDaGlsZChmaWx0ZXJDbGVhcik7XHJcblxyXG4gICAgICAgICAgZmlsdGVySW5mby51cGRhdGUodmlzdWFsaXplci5zZWxlY3Rpb24pO1xyXG5cclxuICAgICAgICAgIHJldHVybiBmaWx0ZXJJbmZvLmVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdmlzdWFsaXplci5vbkRhdGFJdGVtU2VsZWN0ZWQgPSAoXHJcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZTogYW55LFxyXG4gICAgICAgIHNlbGVjdGVkVGV4dDogc3RyaW5nXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGZpbHRlckluZm8udXBkYXRlKHsgdmFsdWU6IHNlbGVjdGVkVmFsdWUsIHRleHQ6IHNlbGVjdGVkVGV4dCB9KTtcclxuICAgICAgICB0aGlzLnNldEZpbHRlcihxdWVzdGlvbi5uYW1lLCBzZWxlY3RlZFZhbHVlKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2aXN1YWxpemVyLnJlbmRlcih2aXp1YWxpemVyRWxlbWVudCk7XHJcbiAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcclxuICAgIHRoaXMudmlzdWFsaXplcnMucHVzaCh2aXN1YWxpemVyKTtcclxuXHJcbiAgICByZXR1cm4gcXVlc3Rpb25FbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlclRvb2xiYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSBcIiBzYS1wYW5lbF9faGVhZGVyXCI7XHJcbiAgICBzdXBlci5yZW5kZXJUb29sYmFyKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIGFsbCBxdWVzdGlvbnMgaW50byBnaXZlbiBIVE1MIGNvbnRhaW5lciBlbGVtZW50LlxyXG4gICAqIGNvbnRhaW5lciAtIEhUTUwgZWxlbWVudCB0byByZW5kZXIgdGhlIHBhbmVsXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGxheW91dEVuZ2luZTogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5nZXRMYXlvdXRFbmdpbmUgPSAoKSA9PiBsYXlvdXRFbmdpbmU7XHJcblxyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSBcIiBzYS1wYW5lbF9fY29udGVudCBzYS1ncmlkXCI7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgcXVlc3Rpb25FbGVtZW50ID0gdGhpcy5yZW5kZXJWaXN1YWxpemVyKGVsZW1lbnQpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBtb3ZlSGFuZGxlciA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5fZWxlbWVudHMuc3BsaWNlKGRhdGEuZnJvbUluZGV4LCAxKTtcclxuICAgICAgdGhpcy5fZWxlbWVudHMuc3BsaWNlKGRhdGEudG9JbmRleCwgMCwgZWxlbWVudHNbMF0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5hbGxvd0R5bmFtaWNMYXlvdXQpIHtcclxuICAgICAgbGF5b3V0RW5naW5lID0gbmV3IE11dXJpKGNvbnRhaW5lciwge1xyXG4gICAgICAgIGl0ZW1zOiBcIi5cIiArIHF1ZXN0aW9uTGF5b3V0ZWRFbGVtZW50Q2xhc3NOYW1lLFxyXG4gICAgICAgIGRyYWdFbmFibGVkOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgbGF5b3V0RW5naW5lLm9uKFwibW92ZVwiLCBtb3ZlSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICAhIXdpbmRvdyAmJiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgVUlFdmVudChcInJlc2l6ZVwiKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95cyB2aXN1YWxpemVyIGFuZCBhbGwgaW5uZXIgY29udGVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGxheW91dEVuZ2luZSA9IHRoaXMubGF5b3V0RW5naW5lO1xyXG4gICAgaWYgKCEhbGF5b3V0RW5naW5lKSB7XHJcbiAgICAgIGxheW91dEVuZ2luZS5vZmYoXCJtb3ZlXCIpO1xyXG4gICAgICBsYXlvdXRFbmdpbmUuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmdldExheW91dEVuZ2luZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xyXG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgICBpZiAodmlzdWFsaXplciBpbnN0YW5jZW9mIFNlbGVjdEJhc2UpIHtcclxuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICB2aXN1YWxpemVyLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy52aXN1YWxpemVycyA9IFtdO1xyXG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdmlzdWFsaXplciBhbmQgYWxsIGlubmVyIGNvbnRlbnQuXHJcbiAgICovXHJcbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcclxuICAgIHN1cGVyLnVwZGF0ZShkYXRhKTtcclxuICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHZpc3VhbGl6ZXIgYW5kIGFsbCBpbm5lciBjb250ZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWZyZXNoKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKGhhcmQgJiYgdGhpcy52aXN1YWxpemVycy5sZW5ndGggPiAwICYmICEhdGhpcy5jb250ZW50Q29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcclxuICAgICAgdGhpcy5yZW5kZXJDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2goKHZpc3VhbGl6ZXIpID0+XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB2aXN1YWxpemVyLnVwZGF0ZSh0aGlzLmZpbHRlcmVkRGF0YSksIDEwKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBsYXlvdXQgb2YgdmlzdWFsaXplciBpbm5lciBjb250ZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYXlvdXQoKSB7XHJcbiAgICBjb25zdCBsYXlvdXRFbmdpbmUgPSB0aGlzLmxheW91dEVuZ2luZTtcclxuICAgIGlmICghIWxheW91dEVuZ2luZSkge1xyXG4gICAgICBsYXlvdXRFbmdpbmUucmVmcmVzaEl0ZW1zKCk7XHJcbiAgICAgIGxheW91dEVuZ2luZS5sYXlvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgZmlsdGVyIGJ5IHF1ZXN0aW9uIG5hbWUgYW5kIHZhbHVlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRGaWx0ZXIocXVlc3Rpb25OYW1lOiBzdHJpbmcsIHNlbGVjdGVkVmFsdWU6IGFueSkge1xyXG4gICAgdmFyIGZpbHRlckNoYW5nZWQgPSB0cnVlO1xyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBmaWx0ZXJDaGFuZ2VkID0gdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXSAhPT0gc2VsZWN0ZWRWYWx1ZTtcclxuICAgICAgdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXSA9IHNlbGVjdGVkVmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWx0ZXJDaGFuZ2VkID0gdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICBkZWxldGUgdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXJDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGxpZXMgZmlsdGVyIHRvIHRoZSBkYXRhIGFuZCB1cGRhdGUgdmlzdWFsaXplcnMuXHJcbiAgICovXHJcbiAgcHVibGljIGFwcGx5RmlsdGVyKCkge1xyXG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5maWx0ZXJWYWx1ZXMpLnNvbWUoXHJcbiAgICAgICAgKGtleSkgPT4gaXRlbVtrZXldICE9PSB0aGlzLmZpbHRlclZhbHVlc1trZXldXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsLCBJUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xyXG4gIHByaXZhdGUgX3BhbmVsVmlzdWFsaXplcjogVmlzdWFsaXphdGlvblBhbmVsID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIgPSBuZXcgVmlzdWFsaXphdGlvblBhbmVsKFxyXG4gICAgICB0aGlzLmdldFF1ZXN0aW9ucygpLFxyXG4gICAgICBbXSxcclxuICAgICAgeyBhbGxvd0R5bmFtaWNMYXlvdXQ6IGZhbHNlIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIGRhdGEuZm9yRWFjaChkYXRhSXRlbSA9PiB7XHJcbiAgICAgIGlmKCEhZGF0YUl0ZW1bdGhpcy5xdWVzdGlvbi5uYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5jb25jYXQoZGF0YUl0ZW1bdGhpcy5xdWVzdGlvbi5uYW1lXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLnVwZGF0ZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UXVlc3Rpb25zKCk6IElRdWVzdGlvbltdIHtcclxuICAgIGNvbnN0IHBhbmVsZHluYW1pYzogUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIHJldHVybiBwYW5lbGR5bmFtaWMudGVtcGxhdGUucXVlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLnJlbmRlcihjb250YWluZXIpO1xyXG4gIH1cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxyXG4gIFwicGFuZWxkeW5hbWljXCIsXHJcbiAgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1xyXG4pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5cclxuaW1wb3J0IFwiLi92aXN1YWxpemVyQmFzZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsaXplckJhc2Uge1xyXG4gIHByaXZhdGUgX3Nob3dIZWFkZXIgPSB0cnVlO1xyXG4gIHByb3RlY3RlZCByZW5kZXJSZXN1bHQ6IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gIHByb3RlY3RlZCB0b29sYmFyQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICBwcm90ZWN0ZWQgY29udGVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIGZvb3RlckNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHByb3RlY3RlZCB0b29sYmFySXRlbUNyZWF0b3JzOiB7IFtuYW1lOiBzdHJpbmddOiAodG9vbGJhcj86IEhUTUxEaXZFbGVtZW50KSA9PiBIVE1MRWxlbWVudCB9ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9XHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJUb29sYmFySXRlbShuYW1lOiBzdHJpbmcsIGNyZWF0b3I6ICh0b29sYmFyPzogSFRNTERpdkVsZW1lbnQpID0+IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRvb2xiYXJJdGVtQ3JlYXRvcnNbbmFtZV0gPSBjcmVhdG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIFwidmlzdWFsaXplclwiO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgaW52b2tlT25VcGRhdGUoKSB7XHJcbiAgICB0aGlzLm9uVXBkYXRlICYmIHRoaXMub25VcGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZighIXRoaXMucmVuZGVyUmVzdWx0KSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveVRvb2xiYXIodGhpcy50b29sYmFyQ29udGFpbmVyKTtcclxuICAgICAgdGhpcy50b29sYmFyQ29udGFpbmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5kZXN0cm95Rm9vdGVyKHRoaXMuZm9vdGVyQ29udGFpbmVyKTtcclxuICAgICAgdGhpcy5mb290ZXJDb250YWluZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMucmVuZGVyUmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy50b29sYmFySXRlbUNyZWF0b3JzIHx8IHt9KS5mb3JFYWNoKHRvb2xiYXJJdGVtTmFtZSA9PiB7XHJcbiAgICAgIGxldCB0b29sYmFySXRlbSA9IHRoaXMudG9vbGJhckl0ZW1DcmVhdG9yc1t0b29sYmFySXRlbU5hbWVdKHRvb2xiYXIpO1xyXG4gICAgICBpZighIXRvb2xiYXJJdGVtKSB7XHJcbiAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZCh0b29sYmFySXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3lUb29sYmFyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlclRvb2xiYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYodGhpcy5zaG93SGVhZGVyKSB7XHJcbiAgICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0b29sYmFyLmNsYXNzTmFtZSA9IFwic2EtdG9vbGJhclwiO1xyXG4gICAgICB0aGlzLmNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2xiYXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiVGhpcyBxdWVzdGlvbiB0eXBlIGlzIG5vdCB2aXN1YWxpemVkIHlldFwiO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3lGb290ZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyRm9vdGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHRhcmdldEVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy50b29sYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMudG9vbGJhckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXZpc3VhbGl6ZXJfX3Rvb2xiYXJcIjtcclxuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50b29sYmFyQ29udGFpbmVyKTtcclxuICAgIHRoaXMucmVuZGVyVG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS12aXN1YWxpemVyX19jb250ZW50XCI7XHJcbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudENvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLmZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmZvb3RlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXZpc3VhbGl6ZXJfX2Zvb3RlclwiO1xyXG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmZvb3RlckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlbmRlckZvb3Rlcih0aGlzLmZvb3RlckNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21Db2xvcigpIHtcclxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKCk7XHJcbiAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcclxuICB9XHJcblxyXG4gIGJhY2tncm91bmRDb2xvciA9IFwiI2Y3ZjdmN1wiO1xyXG5cclxuICBzdGF0aWMgY3VzdG9tQ29sb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIGNvbG9ycyA9IFtcclxuICAgIFwiIzg2ZTFmYlwiLFxyXG4gICAgXCIjMzk5OWZiXCIsXHJcbiAgICBcIiNmZjY3NzFcIixcclxuICAgIFwiIzFlYjQ5NlwiLFxyXG4gICAgXCIjZmZjMTUyXCIsXHJcbiAgICBcIiNhYmExZmZcIixcclxuICAgIFwiIzdkOGRhNVwiLFxyXG4gICAgXCIjNGVjNDZjXCIsXHJcbiAgICBcIiNjZjM3YTZcIixcclxuICAgIFwiIzRlNjE5OFwiXHJcbiAgXTtcclxuXHJcbiAgZ2V0Q29sb3JzKGNvdW50ID0gMTApIHtcclxuICAgIGNvbnN0IGNvbG9ycyA9XHJcbiAgICAgIEFycmF5LmlzQXJyYXkoVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzKSAmJlxyXG4gICAgICBWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzXHJcbiAgICAgICAgOiBWaXN1YWxpemVyQmFzZS5jb2xvcnM7XHJcblxyXG4gICAgbGV0IG1hbnlDb2xvcnM6IGFueSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICBtYW55Q29sb3JzID0gbWFueUNvbG9ycy5jb25jYXQoY29sb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWFueUNvbG9ycztcclxuICB9XHJcblxyXG4gIGdldCBzaG93SGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dIZWFkZXI7XHJcbiAgfVxyXG4gIHNldCBzaG93SGVhZGVyKG5ld1ZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAobmV3VmFsdWUgIT0gdGhpcy5fc2hvd0hlYWRlcikge1xyXG4gICAgICB0aGlzLl9zaG93SGVhZGVyID0gbmV3VmFsdWU7XHJcbiAgICAgIGlmKCEhdGhpcy50b29sYmFyQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95VG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tICcuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyJztcclxuaW1wb3J0IHsgQWx0ZXJuYXRpdmVWaXN1YWxpemVyc1dyYXBwZXIgfSBmcm9tICcuL2FsdGVybmF0aXZlVml6dWFsaXplcnNXcmFwcGVyJztcclxuXHJcbmRlY2xhcmUgdHlwZSBWaXN1YWxpemVyQ29uc3RydWN0b3IgPSBuZXcgKFxyXG4gIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gIG9wdGlvbnM/OiBPYmplY3RcclxuKSA9PiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsaXplckZhY3Rvcnkge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSB2aXN1YWxpemVyIGJ5IHF1ZXN0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlVml6dWFsaXplcihcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT5cclxuICApOiBWaXN1YWxpemVyQmFzZSB7XHJcbiAgICBsZXQgdHlwZTtcclxuXHJcbiAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInRleHRcIiAmJiBxdWVzdGlvbi5pbnB1dFR5cGUpIHtcclxuICAgICAgdHlwZSA9IHF1ZXN0aW9uLmlucHV0VHlwZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0b3JzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIuZ2V0VmlzdWFsaXplcnNCeVR5cGUodHlwZSk7XHJcbiAgICB2YXIgdmlzdWFsaXplcnMgPSBjcmVhdG9ycy5tYXAoXHJcbiAgICAgIChjcmVhdG9yKSA9PiBuZXcgY3JlYXRvcihxdWVzdGlvbiwgZGF0YSlcclxuICAgICk7XHJcbiAgICBpZiAodmlzdWFsaXplcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICBsZXQgdmlzdWFsaXplciA9IG5ldyBBbHRlcm5hdGl2ZVZpc3VhbGl6ZXJzV3JhcHBlcihcclxuICAgICAgICB2aXN1YWxpemVycyxcclxuICAgICAgICBxdWVzdGlvbixcclxuICAgICAgICBkYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiB2aXN1YWxpemVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZpc3VhbGl6ZXJzWzBdO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIHN0b3BXb3JkcyA9IG5ldyBBcnJheShcclxuICBcImFcIixcclxuICBcImFib3V0XCIsXHJcbiAgXCJhYm92ZVwiLFxyXG4gIFwiYWNyb3NzXCIsXHJcbiAgXCJhZnRlclwiLFxyXG4gIFwiYWdhaW5cIixcclxuICBcImFnYWluc3RcIixcclxuICBcImFsbFwiLFxyXG4gIFwiYWxtb3N0XCIsXHJcbiAgXCJhbG9uZVwiLFxyXG4gIFwiYWxvbmdcIixcclxuICBcImFscmVhZHlcIixcclxuICBcImFsc29cIixcclxuICBcImFsdGhvdWdoXCIsXHJcbiAgXCJhbHdheXNcIixcclxuICBcImFtb25nXCIsXHJcbiAgXCJhblwiLFxyXG4gIFwiYW5kXCIsXHJcbiAgXCJhbm90aGVyXCIsXHJcbiAgXCJhbnlcIixcclxuICBcImFueWJvZHlcIixcclxuICBcImFueW9uZVwiLFxyXG4gIFwiYW55dGhpbmdcIixcclxuICBcImFueXdoZXJlXCIsXHJcbiAgXCJhcmVcIixcclxuICBcImFyZWFcIixcclxuICBcImFyZWFzXCIsXHJcbiAgXCJhcm91bmRcIixcclxuICBcImFzXCIsXHJcbiAgXCJhc2tcIixcclxuICBcImFza2VkXCIsXHJcbiAgXCJhc2tpbmdcIixcclxuICBcImFza3NcIixcclxuICBcImF0XCIsXHJcbiAgXCJhd2F5XCIsXHJcbiAgXCJiXCIsXHJcbiAgXCJiYWNrXCIsXHJcbiAgXCJiYWNrZWRcIixcclxuICBcImJhY2tpbmdcIixcclxuICBcImJhY2tzXCIsXHJcbiAgXCJiZVwiLFxyXG4gIFwiYmVjYW1lXCIsXHJcbiAgXCJiZWNhdXNlXCIsXHJcbiAgXCJiZWNvbWVcIixcclxuICBcImJlY29tZXNcIixcclxuICBcImJlZW5cIixcclxuICBcImJlZm9yZVwiLFxyXG4gIFwiYmVnYW5cIixcclxuICBcImJlaGluZFwiLFxyXG4gIFwiYmVpbmdcIixcclxuICBcImJlaW5nc1wiLFxyXG4gIFwiYmVzdFwiLFxyXG4gIFwiYmV0dGVyXCIsXHJcbiAgXCJiZXR3ZWVuXCIsXHJcbiAgXCJiaWdcIixcclxuICBcImJvdGhcIixcclxuICBcImJ1dFwiLFxyXG4gIFwiYnlcIixcclxuICBcImNcIixcclxuICBcImNhbWVcIixcclxuICBcImNhblwiLFxyXG4gIFwiY2Fubm90XCIsXHJcbiAgXCJjYXNlXCIsXHJcbiAgXCJjYXNlc1wiLFxyXG4gIFwiY2VydGFpblwiLFxyXG4gIFwiY2VydGFpbmx5XCIsXHJcbiAgXCJjbGVhclwiLFxyXG4gIFwiY2xlYXJseVwiLFxyXG4gIFwiY29tZVwiLFxyXG4gIFwiY291bGRcIixcclxuICBcImRcIixcclxuICBcImRpZFwiLFxyXG4gIFwiZGlmZmVyXCIsXHJcbiAgXCJkaWZmZXJlbnRcIixcclxuICBcImRpZmZlcmVudGx5XCIsXHJcbiAgXCJkb1wiLFxyXG4gIFwiZG9lc1wiLFxyXG4gIFwiZG9uZVwiLFxyXG4gIFwiZG93blwiLFxyXG4gIFwiZG93blwiLFxyXG4gIFwiZG93bmVkXCIsXHJcbiAgXCJkb3duaW5nXCIsXHJcbiAgXCJkb3duc1wiLFxyXG4gIFwiZHVyaW5nXCIsXHJcbiAgXCJlXCIsXHJcbiAgXCJlYWNoXCIsXHJcbiAgXCJlYXJseVwiLFxyXG4gIFwiZWl0aGVyXCIsXHJcbiAgXCJlbmRcIixcclxuICBcImVuZGVkXCIsXHJcbiAgXCJlbmRpbmdcIixcclxuICBcImVuZHNcIixcclxuICBcImVub3VnaFwiLFxyXG4gIFwiZXZlblwiLFxyXG4gIFwiZXZlbmx5XCIsXHJcbiAgXCJldmVyXCIsXHJcbiAgXCJldmVyeVwiLFxyXG4gIFwiZXZlcnlib2R5XCIsXHJcbiAgXCJldmVyeW9uZVwiLFxyXG4gIFwiZXZlcnl0aGluZ1wiLFxyXG4gIFwiZXZlcnl3aGVyZVwiLFxyXG4gIFwiZlwiLFxyXG4gIFwiZmFjZVwiLFxyXG4gIFwiZmFjZXNcIixcclxuICBcImZhY3RcIixcclxuICBcImZhY3RzXCIsXHJcbiAgXCJmYXJcIixcclxuICBcImZlbHRcIixcclxuICBcImZld1wiLFxyXG4gIFwiZmluZFwiLFxyXG4gIFwiZmluZHNcIixcclxuICBcImZpcnN0XCIsXHJcbiAgXCJmb3JcIixcclxuICBcImZvdXJcIixcclxuICBcImZyb21cIixcclxuICBcImZ1bGxcIixcclxuICBcImZ1bGx5XCIsXHJcbiAgXCJmdXJ0aGVyXCIsXHJcbiAgXCJmdXJ0aGVyZWRcIixcclxuICBcImZ1cnRoZXJpbmdcIixcclxuICBcImZ1cnRoZXJzXCIsXHJcbiAgXCJnXCIsXHJcbiAgXCJnYXZlXCIsXHJcbiAgXCJnZW5lcmFsXCIsXHJcbiAgXCJnZW5lcmFsbHlcIixcclxuICBcImdldFwiLFxyXG4gIFwiZ2V0c1wiLFxyXG4gIFwiZ2l2ZVwiLFxyXG4gIFwiZ2l2ZW5cIixcclxuICBcImdpdmVzXCIsXHJcbiAgXCJnb1wiLFxyXG4gIFwiZ29pbmdcIixcclxuICBcImdvb2RcIixcclxuICBcImdvb2RzXCIsXHJcbiAgXCJnb3RcIixcclxuICBcImdyZWF0XCIsXHJcbiAgXCJncmVhdGVyXCIsXHJcbiAgXCJncmVhdGVzdFwiLFxyXG4gIFwiZ3JvdXBcIixcclxuICBcImdyb3VwZWRcIixcclxuICBcImdyb3VwaW5nXCIsXHJcbiAgXCJncm91cHNcIixcclxuICBcImhcIixcclxuICBcImhhZFwiLFxyXG4gIFwiaGFzXCIsXHJcbiAgXCJoYXZlXCIsXHJcbiAgXCJoYXZpbmdcIixcclxuICBcImhlXCIsXHJcbiAgXCJoZXJcIixcclxuICBcImhlcmVcIixcclxuICBcImhlcnNlbGZcIixcclxuICBcImhpZ2hcIixcclxuICBcImhpZ2hcIixcclxuICBcImhpZ2hcIixcclxuICBcImhpZ2hlclwiLFxyXG4gIFwiaGlnaGVzdFwiLFxyXG4gIFwiaGltXCIsXHJcbiAgXCJoaW1zZWxmXCIsXHJcbiAgXCJoaXNcIixcclxuICBcImhvd1wiLFxyXG4gIFwiaG93ZXZlclwiLFxyXG4gIFwiaVwiLFxyXG4gIFwiaWZcIixcclxuICBcImltcG9ydGFudFwiLFxyXG4gIFwiaW5cIixcclxuICBcImludGVyZXN0XCIsXHJcbiAgXCJpbnRlcmVzdGVkXCIsXHJcbiAgXCJpbnRlcmVzdGluZ1wiLFxyXG4gIFwiaW50ZXJlc3RzXCIsXHJcbiAgXCJpbnRvXCIsXHJcbiAgXCJpc1wiLFxyXG4gIFwiaXRcIixcclxuICBcIml0c1wiLFxyXG4gIFwiaXRzZWxmXCIsXHJcbiAgXCJqXCIsXHJcbiAgXCJqdXN0XCIsXHJcbiAgXCJrXCIsXHJcbiAgXCJrZWVwXCIsXHJcbiAgXCJrZWVwc1wiLFxyXG4gIFwia2luZFwiLFxyXG4gIFwia25ld1wiLFxyXG4gIFwia25vd1wiLFxyXG4gIFwia25vd25cIixcclxuICBcImtub3dzXCIsXHJcbiAgXCJsXCIsXHJcbiAgXCJsYXJnZVwiLFxyXG4gIFwibGFyZ2VseVwiLFxyXG4gIFwibGFzdFwiLFxyXG4gIFwibGF0ZXJcIixcclxuICBcImxhdGVzdFwiLFxyXG4gIFwibGVhc3RcIixcclxuICBcImxlc3NcIixcclxuICBcImxldFwiLFxyXG4gIFwibGV0c1wiLFxyXG4gIFwibGlrZVwiLFxyXG4gIFwibGlrZWx5XCIsXHJcbiAgXCJsb25nXCIsXHJcbiAgXCJsb25nZXJcIixcclxuICBcImxvbmdlc3RcIixcclxuICBcIm1cIixcclxuICBcIm1hZGVcIixcclxuICBcIm1ha2VcIixcclxuICBcIm1ha2luZ1wiLFxyXG4gIFwibWFuXCIsXHJcbiAgXCJtYW55XCIsXHJcbiAgXCJtYXlcIixcclxuICBcIm1lXCIsXHJcbiAgXCJtZW1iZXJcIixcclxuICBcIm1lbWJlcnNcIixcclxuICBcIm1lblwiLFxyXG4gIFwibWlnaHRcIixcclxuICBcIm1vcmVcIixcclxuICBcIm1vc3RcIixcclxuICBcIm1vc3RseVwiLFxyXG4gIFwibXJcIixcclxuICBcIm1yc1wiLFxyXG4gIFwibXVjaFwiLFxyXG4gIFwibXVzdFwiLFxyXG4gIFwibXlcIixcclxuICBcIm15c2VsZlwiLFxyXG4gIFwiblwiLFxyXG4gIFwibmVjZXNzYXJ5XCIsXHJcbiAgXCJuZWVkXCIsXHJcbiAgXCJuZWVkZWRcIixcclxuICBcIm5lZWRpbmdcIixcclxuICBcIm5lZWRzXCIsXHJcbiAgXCJuZXZlclwiLFxyXG4gIFwibmV3XCIsXHJcbiAgXCJuZXdcIixcclxuICBcIm5ld2VyXCIsXHJcbiAgXCJuZXdlc3RcIixcclxuICBcIm5leHRcIixcclxuICBcIm5vXCIsXHJcbiAgXCJub2JvZHlcIixcclxuICBcIm5vblwiLFxyXG4gIFwibm9vbmVcIixcclxuICBcIm5vdFwiLFxyXG4gIFwibm90aGluZ1wiLFxyXG4gIFwibm93XCIsXHJcbiAgXCJub3doZXJlXCIsXHJcbiAgXCJudW1iZXJcIixcclxuICBcIm51bWJlcnNcIixcclxuICBcIm9cIixcclxuICBcIm9mXCIsXHJcbiAgXCJvZmZcIixcclxuICBcIm9mdGVuXCIsXHJcbiAgXCJvbGRcIixcclxuICBcIm9sZGVyXCIsXHJcbiAgXCJvbGRlc3RcIixcclxuICBcIm9uXCIsXHJcbiAgXCJvbmNlXCIsXHJcbiAgXCJvbmVcIixcclxuICBcIm9ubHlcIixcclxuICBcIm9wZW5cIixcclxuICBcIm9wZW5lZFwiLFxyXG4gIFwib3BlbmluZ1wiLFxyXG4gIFwib3BlbnNcIixcclxuICBcIm9yXCIsXHJcbiAgXCJvcmRlclwiLFxyXG4gIFwib3JkZXJlZFwiLFxyXG4gIFwib3JkZXJpbmdcIixcclxuICBcIm9yZGVyc1wiLFxyXG4gIFwib3RoZXJcIixcclxuICBcIm90aGVyc1wiLFxyXG4gIFwib3VyXCIsXHJcbiAgXCJvdXRcIixcclxuICBcIm92ZXJcIixcclxuICBcInBcIixcclxuICBcInBhcnRcIixcclxuICBcInBhcnRlZFwiLFxyXG4gIFwicGFydGluZ1wiLFxyXG4gIFwicGFydHNcIixcclxuICBcInBlclwiLFxyXG4gIFwicGVyaGFwc1wiLFxyXG4gIFwicGxhY2VcIixcclxuICBcInBsYWNlc1wiLFxyXG4gIFwicG9pbnRcIixcclxuICBcInBvaW50ZWRcIixcclxuICBcInBvaW50aW5nXCIsXHJcbiAgXCJwb2ludHNcIixcclxuICBcInBvc3NpYmxlXCIsXHJcbiAgXCJwcmVzZW50XCIsXHJcbiAgXCJwcmVzZW50ZWRcIixcclxuICBcInByZXNlbnRpbmdcIixcclxuICBcInByZXNlbnRzXCIsXHJcbiAgXCJwcm9ibGVtXCIsXHJcbiAgXCJwcm9ibGVtc1wiLFxyXG4gIFwicHV0XCIsXHJcbiAgXCJwdXRzXCIsXHJcbiAgXCJxXCIsXHJcbiAgXCJxdWl0ZVwiLFxyXG4gIFwiclwiLFxyXG4gIFwicmF0aGVyXCIsXHJcbiAgXCJyZWFsbHlcIixcclxuICBcInJpZ2h0XCIsXHJcbiAgXCJyaWdodFwiLFxyXG4gIFwicm9vbVwiLFxyXG4gIFwicm9vbXNcIixcclxuICBcInNcIixcclxuICBcInNhaWRcIixcclxuICBcInNhbWVcIixcclxuICBcInNhd1wiLFxyXG4gIFwic2F5XCIsXHJcbiAgXCJzYXlzXCIsXHJcbiAgXCJzZWNvbmRcIixcclxuICBcInNlY29uZHNcIixcclxuICBcInNlZVwiLFxyXG4gIFwic2VlbVwiLFxyXG4gIFwic2VlbWVkXCIsXHJcbiAgXCJzZWVtaW5nXCIsXHJcbiAgXCJzZWVtc1wiLFxyXG4gIFwic2Vlc1wiLFxyXG4gIFwic2V2ZXJhbFwiLFxyXG4gIFwic2hhbGxcIixcclxuICBcInNoZVwiLFxyXG4gIFwic2hvdWxkXCIsXHJcbiAgXCJzaG93XCIsXHJcbiAgXCJzaG93ZWRcIixcclxuICBcInNob3dpbmdcIixcclxuICBcInNob3dzXCIsXHJcbiAgXCJzaWRlXCIsXHJcbiAgXCJzaWRlc1wiLFxyXG4gIFwic2luY2VcIixcclxuICBcInNtYWxsXCIsXHJcbiAgXCJzbWFsbGVyXCIsXHJcbiAgXCJzbWFsbGVzdFwiLFxyXG4gIFwic29cIixcclxuICBcInNvbWVcIixcclxuICBcInNvbWVib2R5XCIsXHJcbiAgXCJzb21lb25lXCIsXHJcbiAgXCJzb21ldGhpbmdcIixcclxuICBcInNvbWV3aGVyZVwiLFxyXG4gIFwic3RhdGVcIixcclxuICBcInN0YXRlc1wiLFxyXG4gIFwic3RpbGxcIixcclxuICBcInN0aWxsXCIsXHJcbiAgXCJzdWNoXCIsXHJcbiAgXCJzdXJlXCIsXHJcbiAgXCJ0XCIsXHJcbiAgXCJ0YWtlXCIsXHJcbiAgXCJ0YWtlblwiLFxyXG4gIFwidGhhblwiLFxyXG4gIFwidGhhdFwiLFxyXG4gIFwidGhlXCIsXHJcbiAgXCJ0aGVpclwiLFxyXG4gIFwidGhlbVwiLFxyXG4gIFwidGhlblwiLFxyXG4gIFwidGhlcmVcIixcclxuICBcInRoZXJlZm9yZVwiLFxyXG4gIFwidGhlc2VcIixcclxuICBcInRoZXlcIixcclxuICBcInRoaW5nXCIsXHJcbiAgXCJ0aGluZ3NcIixcclxuICBcInRoaW5rXCIsXHJcbiAgXCJ0aGlua3NcIixcclxuICBcInRoaXNcIixcclxuICBcInRob3NlXCIsXHJcbiAgXCJ0aG91Z2hcIixcclxuICBcInRob3VnaHRcIixcclxuICBcInRob3VnaHRzXCIsXHJcbiAgXCJ0aHJlZVwiLFxyXG4gIFwidGhyb3VnaFwiLFxyXG4gIFwidGh1c1wiLFxyXG4gIFwidG9cIixcclxuICBcInRvZGF5XCIsXHJcbiAgXCJ0b2dldGhlclwiLFxyXG4gIFwidG9vXCIsXHJcbiAgXCJ0b29rXCIsXHJcbiAgXCJ0b3dhcmRcIixcclxuICBcInR1cm5cIixcclxuICBcInR1cm5lZFwiLFxyXG4gIFwidHVybmluZ1wiLFxyXG4gIFwidHVybnNcIixcclxuICBcInR3b1wiLFxyXG4gIFwidVwiLFxyXG4gIFwidW5kZXJcIixcclxuICBcInVudGlsXCIsXHJcbiAgXCJ1cFwiLFxyXG4gIFwidXBvblwiLFxyXG4gIFwidXNcIixcclxuICBcInVzZVwiLFxyXG4gIFwidXNlZFwiLFxyXG4gIFwidXNlc1wiLFxyXG4gIFwidlwiLFxyXG4gIFwidmVyeVwiLFxyXG4gIFwid1wiLFxyXG4gIFwid2FudFwiLFxyXG4gIFwid2FudGVkXCIsXHJcbiAgXCJ3YW50aW5nXCIsXHJcbiAgXCJ3YW50c1wiLFxyXG4gIFwid2FzXCIsXHJcbiAgXCJ3YXlcIixcclxuICBcIndheXNcIixcclxuICBcIndlXCIsXHJcbiAgXCJ3ZWxsXCIsXHJcbiAgXCJ3ZWxsc1wiLFxyXG4gIFwid2VudFwiLFxyXG4gIFwid2VyZVwiLFxyXG4gIFwid2hhdFwiLFxyXG4gIFwid2hlblwiLFxyXG4gIFwid2hlcmVcIixcclxuICBcIndoZXRoZXJcIixcclxuICBcIndoaWNoXCIsXHJcbiAgXCJ3aGlsZVwiLFxyXG4gIFwid2hvXCIsXHJcbiAgXCJ3aG9sZVwiLFxyXG4gIFwid2hvc2VcIixcclxuICBcIndoeVwiLFxyXG4gIFwid2lsbFwiLFxyXG4gIFwid2l0aFwiLFxyXG4gIFwid2l0aGluXCIsXHJcbiAgXCJ3aXRob3V0XCIsXHJcbiAgXCJ3b3JrXCIsXHJcbiAgXCJ3b3JrZWRcIixcclxuICBcIndvcmtpbmdcIixcclxuICBcIndvcmtzXCIsXHJcbiAgXCJ3b3VsZFwiLFxyXG4gIFwieFwiLFxyXG4gIFwieVwiLFxyXG4gIFwieWVhclwiLFxyXG4gIFwieWVhcnNcIixcclxuICBcInlldFwiLFxyXG4gIFwieW91XCIsXHJcbiAgXCJ5b3VuZ1wiLFxyXG4gIFwieW91bmdlclwiLFxyXG4gIFwieW91bmdlc3RcIixcclxuICBcInlvdXJcIixcclxuICBcInlvdXJzXCIsXHJcbiAgXCJ6XCJcclxuKTtcclxuIiwiaW1wb3J0IHsgc3RvcFdvcmRzIH0gZnJvbSBcIi4vZW5nbGlzaFwiO1xyXG5cclxudmFyIHN0b3BXb3Jkc0RpY3Rpb25hcnk6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxzdHJpbmc+IH0gPSB7fTtcclxuc3RvcFdvcmRzRGljdGlvbmFyeVtcImVuXCJdID0gc3RvcFdvcmRzO1xyXG5cclxuZXhwb3J0IHZhciB0ZXh0SGVscGVyID0ge1xyXG4gIGdldFN0b3BXb3JkczogKGxvY2FsZTogc3RyaW5nID0gXCJcIikgPT4ge1xyXG4gICAgcmV0dXJuIHN0b3BXb3Jkc0RpY3Rpb25hcnlbbG9jYWxlIHx8IFwiZW5cIl0gfHwgW107XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyB0ZXh0SGVscGVyIH0gZnJvbSBcIi4vc3RvcHdvcmRzL2luZGV4XCI7XHJcbmltcG9ydCBXb3JkQ2xvdWRMaWIgZnJvbSBcIndvcmRjbG91ZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmRDbG91ZEFkYXB0ZXIge1xyXG4gIHByaXZhdGUgX3dvcmRjbG91ZDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGVsOiBXb3JkQ2xvdWQpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd29yZGNsb3VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dvcmRjbG91ZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUobm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm1vZGVsLmdldERhdGEoKTtcclxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMubW9kZWwuZ2V0Q29sb3JzKCk7XHJcbiAgICBjb25zdCBjYW52YXNOb2RlID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZW1wdHlUZXh0Tm9kZS5pbm5lckhUTUwgPSBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiO1xyXG5cclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBub2RlLmFwcGVuZENoaWxkKGVtcHR5VGV4dE5vZGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZS5hcHBlbmRDaGlsZChjYW52YXNOb2RlKTtcclxuXHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIGxpc3Q6IGRhdGEsXHJcbiAgICAgIHdlaWdodEZhY3RvcjogMjAsXHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUkgQm9sZCwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICBjb2xvcjogKHdvcmQ6IHN0cmluZywgd2VpZ2h0OiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5nZXRSYW5kb21Db2xvcigpO1xyXG4gICAgICB9LFxyXG4gICAgICByb3RhdGVSYXRpbzogMC41LFxyXG4gICAgICByb3RhdGlvblN0ZXBzOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMubW9kZWwuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICBjbGljazogZnVuY3Rpb24oaXRlbTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSArIFwiOiBcIiArIGl0ZW1bMV0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3dvcmRjbG91ZCA9IFdvcmRDbG91ZExpYihjYW52YXNOb2RlLCBjb25maWcpO1xyXG4gICAgcmV0dXJuIHRoaXMuX3dvcmRjbG91ZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KG5vZGU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl93b3JkY2xvdWQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmRDbG91ZCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcclxuICBwcml2YXRlIF93b3JkY2xvdWRBZGFwdGVyOiBXb3JkQ2xvdWRBZGFwdGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLl93b3JkY2xvdWRBZGFwdGVyID0gbmV3IFdvcmRDbG91ZEFkYXB0ZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gXCJ3b3JkY2xvdWRcIjtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBsZXQgcmVzdWx0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcblxyXG4gICAgbGV0IHN0b3BXb3JkcyA9IHRleHRIZWxwZXIuZ2V0U3RvcFdvcmRzKCk7XHJcbiAgICBsZXQgc3RvcFRoZVdvcmQgPSAod29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmIChzdG9wV29yZHMuaW5kZXhPZih3b3JkKSAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gd29yZDtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHByb2Nlc3NTdHJpbmcgPSAocm93OiBzdHJpbmcpID0+IHtcclxuICAgICAgcm93ID0gXCJcIiArIHJvdztcclxuICAgICAgaWYgKCEhcm93KSB7XHJcbiAgICAgICAgcm93LnNwbGl0KFwiIFwiKS5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICAgICAgd29yZCA9IHN0b3BUaGVXb3JkKHdvcmQudG9Mb3dlckNhc2UoKSB8fCBcIlwiKTtcclxuICAgICAgICAgIGlmICghIXdvcmQpIHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHRbd29yZF0pIHtcclxuICAgICAgICAgICAgICByZXN1bHRbd29yZF0gPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc3VsdFt3b3JkXSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xyXG4gICAgICAgICAgcm93VmFsdWUuZm9yRWFjaChwcm9jZXNzU3RyaW5nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiByb3dWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb3dWYWx1ZSkuZm9yRWFjaChrZXkgPT4gcHJvY2Vzc1N0cmluZyhyb3dWYWx1ZVtrZXldKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXN1bHQpLm1hcChrZXkgPT4ge1xyXG4gICAgICByZXR1cm4gW2tleSwgcmVzdWx0W2tleV1dO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fd29yZGNsb3VkQWRhcHRlci5kZXN0cm95KGNvbnRhaW5lcik7XHJcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fd29yZGNsb3VkQWRhcHRlci5jcmVhdGUoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl93b3JkY2xvdWRBZGFwdGVyLmRlc3Ryb3kodGhpcy5jb250ZW50Q29udGFpbmVyKTtcclxuICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuXHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInRleHRcIiwgV29yZENsb3VkKTtcclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY29tbWVudFwiLCBXb3JkQ2xvdWQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgV29yZENsb3VkKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Bsb3RseV9qc19kaXN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dvcmRjbG91ZF9fOyJdLCJzb3VyY2VSb290IjoiIn0=