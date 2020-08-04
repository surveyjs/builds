/*!
 * surveyjs - SurveyJS Analytics library v1.7.25
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
        return _super.call(this, question, data, options) || this;
    }
    Object.defineProperty(BooleanModel.prototype, "name", {
        get: function () {
            return "boolean";
        },
        enumerable: false,
        configurable: true
    });
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
/*! exports provided: localization, surveyStrings, DataProvider, VisualizerBase, VisualizationManager, VisualizationPanel, VisualizationPanelDynamic, VisualizationMatrixDynamic, VisualizationMatrixDropdown, AlternativeVisualizersWrapper, PlotlyChartAdapter, SelectBasePlotly, PlotlyGaugeAdapter, GaugePlotly, MatrixPlotly, PlotlyBoolChartAdapter, BooleanPlotly, WordCloudAdapter, WordCloud, textHelper, TextTableAdapter, Text, DocumentHelper */
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

/* harmony import */ var _visualizerBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../visualizerBase */ "./src/visualizerBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return _visualizerBase__WEBPACK_IMPORTED_MODULE_5__["VisualizerBase"]; });

/* harmony import */ var _visualizationManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../visualizationManager */ "./src/visualizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return _visualizationManager__WEBPACK_IMPORTED_MODULE_6__["VisualizationManager"]; });

/* harmony import */ var _visualizationPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../visualizationPanel */ "./src/visualizationPanel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return _visualizationPanel__WEBPACK_IMPORTED_MODULE_7__["VisualizationPanel"]; });

/* harmony import */ var _visualizationPanelDynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../visualizationPanelDynamic */ "./src/visualizationPanelDynamic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return _visualizationPanelDynamic__WEBPACK_IMPORTED_MODULE_8__["VisualizationPanelDynamic"]; });

/* harmony import */ var _visualizationMatrixDynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../visualizationMatrixDynamic */ "./src/visualizationMatrixDynamic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return _visualizationMatrixDynamic__WEBPACK_IMPORTED_MODULE_9__["VisualizationMatrixDynamic"]; });

/* harmony import */ var _visualizationMatrixDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../visualizationMatrixDropdown */ "./src/visualizationMatrixDropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDropdown", function() { return _visualizationMatrixDropdown__WEBPACK_IMPORTED_MODULE_10__["VisualizationMatrixDropdown"]; });

/* harmony import */ var _alternativeVizualizersWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../alternativeVizualizersWrapper */ "./src/alternativeVizualizersWrapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlternativeVisualizersWrapper", function() { return _alternativeVizualizersWrapper__WEBPACK_IMPORTED_MODULE_11__["AlternativeVisualizersWrapper"]; });

/* harmony import */ var _plotly_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../plotly/index */ "./src/plotly/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyChartAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_12__["PlotlyChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_12__["SelectBasePlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyGaugeAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_12__["PlotlyGaugeAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_12__["GaugePlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_12__["MatrixPlotly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyBoolChartAdapter", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_12__["PlotlyBoolChartAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return _plotly_index__WEBPACK_IMPORTED_MODULE_12__["BooleanPlotly"]; });

/* harmony import */ var _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../wordcloud/wordcloud */ "./src/wordcloud/wordcloud.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordCloudAdapter", function() { return _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_13__["WordCloudAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return _wordcloud_wordcloud__WEBPACK_IMPORTED_MODULE_13__["WordCloud"]; });

/* harmony import */ var _wordcloud_stopwords_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../wordcloud/stopwords/index */ "./src/wordcloud/stopwords/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return _wordcloud_stopwords_index__WEBPACK_IMPORTED_MODULE_14__["textHelper"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../text */ "./src/text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextTableAdapter", function() { return _text__WEBPACK_IMPORTED_MODULE_15__["TextTableAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_15__["Text"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_16__["DocumentHelper"]; });


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
    changeLocale: "Change Locale",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Other items and comments",
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
    function Matrix(question, data, options) {
        return _super.call(this, question, data, options) || this;
    }
    Object.defineProperty(Matrix.prototype, "matrixQuestion", {
        get: function () {
            return this.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "name", {
        get: function () {
            return "matrix";
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
    function NumberModel(question, data, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, question, data, options) || this;
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
    Object.defineProperty(NumberModel.prototype, "name", {
        get: function () {
            return "number";
        },
        enumerable: false,
        configurable: true
    });
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
/*! exports provided: PlotlyChartAdapter, SelectBasePlotly, PlotlyGaugeAdapter, GaugePlotly, MatrixPlotly, PlotlyBoolChartAdapter, BooleanPlotly */
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
        var datasets = this.model.getData();
        var seriesValues = this.model.getSeriesValues();
        var seriesLabels = this.model.getSeriesLabels();
        var labels = this.model.getLabels();
        var colors = this.model.getColors();
        var traces = [];
        var hasSeries = datasets.length > 1 && seriesValues.length > 1;
        if (this.model.orderByAnsweres == "asc" ||
            this.model.orderByAnsweres == "desc") {
            var dict = _utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].sortDictionary(_utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].zipArrays(labels, colors), datasets[0], this.model.orderByAnsweres == "desc");
            var labelsAndColors = _utils__WEBPACK_IMPORTED_MODULE_3__["DataHelper"].unzipArrays(dict.keys);
            labels = labelsAndColors.first;
            colors = labelsAndColors.second;
            datasets[0] = dict.values;
        }
        var traceConfig = {
            type: this.model.chartType,
            y: (hasSeries ? seriesLabels : labels).map(function (l) {
                if (l.length > 30) {
                    return l.substring(0, 27) + "...";
                }
                return l;
            }),
            text: hasSeries ? seriesLabels : labels,
            hoverinfo: "x+y",
            orientation: "h",
            mode: "markers",
            width: 0.5,
            marker: {},
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
        if (!hasSeries) {
            traceConfig.marker.symbol = "circle";
            traceConfig.marker.size = 16;
        }
        datasets.forEach(function (dataset) {
            if (_this.model.chartType === "pie" ||
                _this.model.chartType === "doughnut") {
                traces.push(Object.assign({}, traceConfig, {
                    values: dataset,
                    labels: hasSeries ? seriesLabels : labels,
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
            plot_bgcolor: this.model.backgroundColor,
            paper_bgcolor: this.model.backgroundColor,
            showlegend: false,
        };
        var config = {
            displaylogo: false,
            responsive: true,
            locale: _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale,
        };
        if (SelectBasePlotly.displayModeBar !== undefined) {
            config.displayModeBar = SelectBasePlotly.displayModeBar;
        }
        if (hasSeries) {
            layout.showlegend = true;
            if (this.model.chartType === "pie" ||
                this.model.chartType === "doughnut") {
                layout.grid = { rows: 1, columns: traces.length };
            }
            else if (this.model.chartType === "stackedbar") {
                layout.height = undefined;
                layout.barmode = "stack";
            }
            else {
                layout.height = undefined;
            }
            labels.forEach(function (label, index) {
                if (_this.model.chartType === "pie" ||
                    _this.model.chartType === "doughnut") {
                    traces[index].domain = { column: index };
                }
                else {
                    traces[index].hoverinfo = "x+name";
                    traces[index].marker.color = undefined;
                    if (_this.model.chartType === "stackedbar") {
                        traces[index].type = "bar";
                        traces[index].name = label;
                        traces[index].width = 0.5 / traces.length;
                    }
                    else {
                        traces[index].name = label;
                        traces[index].width = 0.5 / traces.length;
                    }
                }
            });
        }
        this.patchConfigParameters(chartNode, traces, layout, config);
        var plot = Plotly.newPlot(chartNode, traces, layout, config);
        chartNode["on"]("plotly_click", function (data) {
            if (data.points.length > 0) {
                var itemText = hasSeries
                    ? data.points[0].data.name
                    : data.points[0].text;
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
    function SelectBase(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this.selectedItem = undefined;
        _this.choicesOrder = undefined;
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
        return _this;
    }
    Object.defineProperty(SelectBase.prototype, "name", {
        get: function () {
            return "selectBase";
        },
        enumerable: false,
        configurable: true
    });
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
    SelectBase.prototype.setLabelsOrder = function (value) {
        this.orderByAnsweres = value;
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
    function Text(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this._textTableAdapter = new TextTableAdapter(_this);
        return _this;
    }
    Object.defineProperty(Text.prototype, "name", {
        get: function () {
            return "text";
        },
        enumerable: false,
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
    function VisualizationMatrixDropdown(question, data, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, question, data, options) || this;
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
    Object.defineProperty(VisualizationMatrixDropdown.prototype, "name", {
        get: function () {
            return "matrixDropdown";
        },
        enumerable: false,
        configurable: true
    });
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
        var _this = _super.call(this, null, data, options) || this;
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
    Object.defineProperty(VisualizationPanel.prototype, "name", {
        /**
         * Returns name of the visualizer - 'panel' for the VisualizationPanel.
         */
        get: function () {
            return "panel";
        },
        enumerable: false,
        configurable: true
    });
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
    function VisualizationPanelDynamic(question, data, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, question, data, options) || this;
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
    function VisualizerBase(question, data, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.question = question;
        this.options = options;
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
            return "visualizer";
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
        container.innerHTML = "";
    };
    VisualizerBase.prototype.renderContent = function (container) {
        container.innerHTML = "This question type is not visualized yet";
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
    function WordCloud(question, data, options) {
        var _this = _super.call(this, question, data, options) || this;
        _this._wordcloudAdapter = new WordCloudAdapter(_this);
        return _this;
    }
    Object.defineProperty(WordCloud.prototype, "name", {
        get: function () {
            return "wordcloud";
        },
        enumerable: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9ub2RlX21vZHVsZXMvbXV1cmkvZGlzdC9tdXVyaS5qcyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvZGF0YVByb3ZpZGVyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9lbnRyaWVzL3N1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2ZpbHRlckluZm8udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xheW91dEVuZ2luZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mYXJzaS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL3J1c3NpYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL21hdHJpeC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbnVtYmVyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9wbG90bHkvYm9vbGVhbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvcGxvdGx5L2luZGV4LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9wbG90bHkvbWF0cml4LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9wbG90bHkvcmF0aW5nLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9wbG90bHkvc2VsZWN0QmFzZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc2VsZWN0QmFzZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGV4dC5zY3NzPzJjNGUiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RleHQudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy92aXN1YWxpemF0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvbk1hdHJpeERyb3Bkb3duLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy92aXN1YWxpemF0aW9uTWF0cml4RHluYW1pYy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsLnNjc3M/M2M4MiIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy92aXN1YWxpemF0aW9uUGFuZWxEeW5hbWljLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy92aXN1YWxpemVyQmFzZS5zY3NzP2FmYmQiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3Zpc3VhbGl6ZXJCYXNlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy92aXN1YWxpemVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9lbmdsaXNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy93b3JkY2xvdWQvc3RvcHdvcmRzL2luZGV4LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy93b3JkY2xvdWQvd29yZGNsb3VkLnRzIiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJQbG90bHlcIixcImNvbW1vbmpzMlwiOlwicGxvdGx5LmpzLWRpc3RcIixcImNvbW1vbmpzXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiYW1kXCI6XCJwbG90bHkuanMtZGlzdFwifSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIldvcmRDbG91ZFwiLFwiY29tbW9uanMyXCI6XCJ3b3JkY2xvdWRcIixcImNvbW1vbmpzXCI6XCJ3b3JkY2xvdWRcIixcImFtZFwiOlwid29yZGNsb3VkXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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O0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsYUFBYTtBQUMxQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQix5REFBeUQ7QUFDeEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseURBQXlEO0FBQ25GOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsS0FBSztBQUNsQixhQUFhLE9BQU87QUFDcEIsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZixhQUFhLEVBQUU7QUFDZixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsWUFBWTtBQUN6QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQix3REFBd0Q7QUFDdkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQXdEO0FBQy9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdEQUF3RDtBQUN4Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLFlBQVk7QUFDekIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFD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TUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLElBQUksRUFDSixPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUNQLFFBQVEsRUFDUixLQUFLLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILE9BQU8sRUFDUCxHQUFHLEVBQ0gsUUFBUSxFQUNSLFFBQVEsRUFDUixPQUFPLEVBQ1AsT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILE1BQU0sRUFDTixNQUFNLEVBQ04sS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLE1BQU0sRUFDTixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNYLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04s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LENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMzSW5FLDREOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEIiwiZmlsZSI6InN1cnZleS5hbmFseXRpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJwbG90bHkuanMtZGlzdFwiKSwgcmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwid29yZGNsb3VkXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzXCIsIFtcInBsb3RseS5qcy1kaXN0XCIsIFwic3VydmV5LWNvcmVcIiwgXCJ3b3JkY2xvdWRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3VydmV5QW5hbHl0aWNzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcIndvcmRjbG91ZFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5QW5hbHl0aWNzXCJdID0gZmFjdG9yeShyb290W1wiUGxvdGx5XCJdLCByb290W1wiU3VydmV5XCJdLCByb290W1wiV29yZENsb3VkXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wbG90bHlfanNfZGlzdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd29yZGNsb3VkX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL3N1bW1hcnkudHNcIik7XG4iLCIvKipcbiogTXV1cmkgdjAuOC4wXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9oYWx0dS9tdXVyaVxuKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgSGFsdHUgT3lcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9oYWx0dS9tdXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4qIEBsaWNlbnNlIE1JVFxuKlxuKiBNdXVyaSBQYWNrZXJcbiogQ29weXJpZ2h0IChjKSAyMDE2LXByZXNlbnQsIE5pa2xhcyBSw6Rtw7YgPGlucmFtb0BnbWFpbC5jb20+XG4qIEBsaWNlbnNlIE1JVFxuKlxuKiBNdXVyaSBUaWNrZXIgLyBNdXVyaSBFbWl0dGVyIC8gTXV1cmkgUXVldWVcbiogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIE5pa2xhcyBSw6Rtw7YgPGlucmFtb0BnbWFpbC5jb20+XG4qIEBsaWNlbnNlIE1JVFxuKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5NdXVyaSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBuYW1lc3BhY2UgPSAnTXV1cmknO1xuICB2YXIgZ3JpZEluc3RhbmNlcyA9IHt9O1xuXG4gIHZhciBhY3Rpb25Td2FwID0gJ3N3YXAnO1xuICB2YXIgYWN0aW9uTW92ZSA9ICdtb3ZlJztcblxuICB2YXIgZXZlbnRTeW5jaHJvbml6ZSA9ICdzeW5jaHJvbml6ZSc7XG4gIHZhciBldmVudExheW91dFN0YXJ0ID0gJ2xheW91dFN0YXJ0JztcbiAgdmFyIGV2ZW50TGF5b3V0RW5kID0gJ2xheW91dEVuZCc7XG4gIHZhciBldmVudEFkZCA9ICdhZGQnO1xuICB2YXIgZXZlbnRSZW1vdmUgPSAncmVtb3ZlJztcbiAgdmFyIGV2ZW50U2hvd1N0YXJ0ID0gJ3Nob3dTdGFydCc7XG4gIHZhciBldmVudFNob3dFbmQgPSAnc2hvd0VuZCc7XG4gIHZhciBldmVudEhpZGVTdGFydCA9ICdoaWRlU3RhcnQnO1xuICB2YXIgZXZlbnRIaWRlRW5kID0gJ2hpZGVFbmQnO1xuICB2YXIgZXZlbnRGaWx0ZXIgPSAnZmlsdGVyJztcbiAgdmFyIGV2ZW50U29ydCA9ICdzb3J0JztcbiAgdmFyIGV2ZW50TW92ZSA9ICdtb3ZlJztcbiAgdmFyIGV2ZW50U2VuZCA9ICdzZW5kJztcbiAgdmFyIGV2ZW50QmVmb3JlU2VuZCA9ICdiZWZvcmVTZW5kJztcbiAgdmFyIGV2ZW50UmVjZWl2ZSA9ICdyZWNlaXZlJztcbiAgdmFyIGV2ZW50QmVmb3JlUmVjZWl2ZSA9ICdiZWZvcmVSZWNlaXZlJztcbiAgdmFyIGV2ZW50RHJhZ0luaXQgPSAnZHJhZ0luaXQnO1xuICB2YXIgZXZlbnREcmFnU3RhcnQgPSAnZHJhZ1N0YXJ0JztcbiAgdmFyIGV2ZW50RHJhZ01vdmUgPSAnZHJhZ01vdmUnO1xuICB2YXIgZXZlbnREcmFnU2Nyb2xsID0gJ2RyYWdTY3JvbGwnO1xuICB2YXIgZXZlbnREcmFnRW5kID0gJ2RyYWdFbmQnO1xuICB2YXIgZXZlbnREcmFnUmVsZWFzZVN0YXJ0ID0gJ2RyYWdSZWxlYXNlU3RhcnQnO1xuICB2YXIgZXZlbnREcmFnUmVsZWFzZUVuZCA9ICdkcmFnUmVsZWFzZUVuZCc7XG4gIHZhciBldmVudERlc3Ryb3kgPSAnZGVzdHJveSc7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZXIgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQmluZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gR2V0IGxpc3RlbmVycyBxdWV1ZSBhbmQgY3JlYXRlIGl0IGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghbGlzdGVuZXJzKSBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdID0gW107XG5cbiAgICAvLyBBZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBxdWV1ZS5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGFsbCBldmVudCBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGUgcHJvdmlkZWQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbbGlzdGVuZXJdXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBsaXN0ZW5lcnMgYW5kIHJldHVybiBpbW1lZGlhdGVseSBpZiBub25lIGlzIGZvdW5kLlxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIC8vIElmIG5vIHNwZWNpZmljIGxpc3RlbmVyIGlzIHByb3ZpZGVkIHJlbW92ZSBhbGwgbGlzdGVuZXJzLlxuICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBtYXRjaGluZyBsaXN0ZW5lcnMuXG4gICAgdmFyIGkgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChsaXN0ZW5lciA9PT0gbGlzdGVuZXJzW2ldKSBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0IGFsbCBsaXN0ZW5lcnMgaW4gYSBzcGVjaWZpZWQgZXZlbnQgd2l0aCB0aGUgcHJvdmlkZWQgYXJndW1lbnRzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHsqfSBbYXJnMV1cbiAgICogQHBhcmFtIHsqfSBbYXJnMl1cbiAgICogQHBhcmFtIHsqfSBbYXJnM11cbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gR2V0IGV2ZW50IGxpc3RlbmVycyBhbmQgcXVpdCBlYXJseSBpZiB0aGVyZSdzIG5vIGxpc3RlbmVycy5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgcUxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgYUxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgIHZhciBpO1xuXG4gICAgLy8gQWRkIHRoZSBjdXJyZW50IGxpc3RlbmVycyB0byB0aGUgY2FsbGJhY2sgcXVldWUgYmVmb3JlIHdlIHByb2Nlc3MgdGhlbS5cbiAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBndWFyYW50ZWUgdGhhdCBhbGwgb2YgdGhlIGxpc3RlbmVycyBhcmUgY2FsbGVkIGluXG4gICAgLy8gY29ycmVjdCBvcmRlciBldmVuIGlmIG5ldyBldmVudCBsaXN0ZW5lcnMgYXJlIHJlbW92ZWQvYWRkZWQgZHVyaW5nXG4gICAgLy8gcHJvY2Vzc2luZyBhbmQvb3IgZXZlbnRzIGFyZSBlbWl0dGVkIGR1cmluZyBwcm9jZXNzaW5nLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHF1ZXVlLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBJbmNyZW1lbnQgcXVldWUgY291bnRlci4gVGhpcyBpcyBuZWVkZWQgZm9yIHRoZSBzY2VuYXJpb3Mgd2hlcmUgZW1pdCBpc1xuICAgIC8vIHRyaWdnZXJlZCB3aGlsZSB0aGUgcXVldWUgaXMgYWxyZWFkeSBwcm9jZXNzaW5nLiBXZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2ZcbiAgICAvLyBob3cgbWFueSBcInF1ZXVlIHByb2Nlc3NvcnNcIiB0aGVyZSBhcmUgYWN0aXZlIHNvIHRoYXQgd2UgY2FuIHNhZmVseSByZXNldFxuICAgIC8vIHRoZSBxdWV1ZSBpbiB0aGUgZW5kIHdoZW4gdGhlIGxhc3QgcXVldWUgcHJvY2Vzc29yIGlzIGZpbmlzaGVkLlxuICAgICsrdGhpcy5fY291bnRlcjtcblxuICAgIC8vIFByb2Nlc3MgdGhlIHF1ZXVlICh0aGUgc3BlY2lmaWMgcGFydCBvZiBpdCBmb3IgdGhpcyBlbWl0KS5cbiAgICBmb3IgKGkgPSBxTGVuZ3RoLCBxTGVuZ3RoID0gcXVldWUubGVuZ3RoOyBpIDwgcUxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIGFMZW5ndGggPT09IDAgPyBxdWV1ZVtpXSgpIDpcbiAgICAgIGFMZW5ndGggPT09IDEgPyBxdWV1ZVtpXShhcmcxKSA6XG4gICAgICBhTGVuZ3RoID09PSAyID8gcXVldWVbaV0oYXJnMSwgYXJnMikgOlxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldKGFyZzEsIGFyZzIsIGFyZzMpO1xuXG4gICAgICAvLyBTdG9wIHByb2Nlc3NpbmcgaWYgdGhlIGVtaXR0ZXIgaXMgZGVzdHJveWVkLlxuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBEZWNyZW1lbnQgcXVldWUgcHJvY2VzcyBjb3VudGVyLlxuICAgIC0tdGhpcy5fY291bnRlcjtcblxuICAgIC8vIFJlc2V0IHRoZSBxdWV1ZSBpZiB0aGVyZSBhcmUgbm8gbW9yZSBxdWV1ZSBwcm9jZXNzZXMgcnVubmluZy5cbiAgICBpZiAoIXRoaXMuX2NvdW50ZXIpIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBlbWl0dGVyIGluc3RhbmNlLiBCYXNpY2FsbHkganVzdCByZW1vdmVzIGFsbCBib3VuZCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgIHZhciBldmVudDtcblxuICAgIC8vIEZsYWcgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIC8vIFJlc2V0IHF1ZXVlIChpZiBxdWV1ZSBpcyBjdXJyZW50bHkgcHJvY2Vzc2luZyB0aGlzIHdpbGwgYWxzbyBzdG9wIHRoYXQpLlxuICAgIHRoaXMuX3F1ZXVlLmxlbmd0aCA9IHRoaXMuX2NvdW50ZXIgPSAwO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMuXG4gICAgZm9yIChldmVudCBpbiBldmVudHMpIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnRdKSB7XG4gICAgICAgIGV2ZW50c1tldmVudF0ubGVuZ3RoID0gMDtcbiAgICAgICAgZXZlbnRzW2V2ZW50XSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBTZXQgdXAgdGhlIGRlZmF1bHQgZXhwb3J0IHZhbHVlcy5cbiAgdmFyIHRyYW5zZm9ybVN0eWxlID0gJ3RyYW5zZm9ybSc7XG4gIHZhciB0cmFuc2Zvcm1Qcm9wID0gJ3RyYW5zZm9ybSc7XG5cbiAgLy8gRmluZCB0aGUgc3VwcG9ydGVkIHRyYW5zZm9ybSBwcm9wIGFuZCBzdHlsZSBuYW1lcy5cbiAgdmFyIGRvY0VsZW1TdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4gIHZhciBzdHlsZSA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgc3R5bGVDYXAgPSAnVHJhbnNmb3JtJztcbiAgdmFyIGZvdW5kID0gZmFsc2U7XG4gIFsnJywgJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcyddLmZvckVhY2goZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgaWYgKGZvdW5kKSByZXR1cm47XG4gICAgdmFyIHByb3BOYW1lID0gcHJlZml4ID8gcHJlZml4ICsgc3R5bGVDYXAgOiBzdHlsZTtcbiAgICBpZiAoZG9jRWxlbVN0eWxlW3Byb3BOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVmaXggPSBwcmVmaXgudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRyYW5zZm9ybVN0eWxlID0gcHJlZml4ID8gJy0nICsgcHJlZml4ICsgJy0nICsgc3R5bGUgOiBzdHlsZTtcbiAgICAgIHRyYW5zZm9ybVByb3AgPSBwcm9wTmFtZTtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBzdHlsZXNDYWNoZSA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gbmV3IFdlYWtNYXAoKSA6IG51bGw7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXB1dGVkIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBzdHlsZSBwcm9wZXJ0eSBhcyBhIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gICAgdmFyIHN0eWxlcyA9IHN0eWxlc0NhY2hlICYmIHN0eWxlc0NhY2hlLmdldChlbGVtZW50KTtcbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gICAgICBpZiAoc3R5bGVzQ2FjaGUpIHN0eWxlc0NhY2hlLnNldChlbGVtZW50LCBzdHlsZXMpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoc3R5bGUgPT09ICd0cmFuc2Zvcm0nID8gdHJhbnNmb3JtU3R5bGUgOiBzdHlsZSk7XG4gIH1cblxuICB2YXIgc3R5bGVOYW1lUmVnRXggPSAvKFtBLVpdKS9nO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGEgY2FtZWwgY2FzZSBzdHlsZSBwcm9wZXJ0eSB0byBrZWJhYiBjYXNlIHN0eWxlIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZU5hbWUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHN0eWxlTmFtZVJlZ0V4LCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHZhciBzdHJGdW5jdGlvbiA9ICdmdW5jdGlvbic7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBzdHJGdW5jdGlvbjtcbiAgfVxuXG4gIHZhciB0cmFuc2Zvcm1TdHlsZSQxID0gJ3RyYW5zZm9ybSc7XG5cbiAgLyoqXG4gICAqIFNldCBpbmxpbmUgc3R5bGVzIHRvIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xuICAgKi9cbiAgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3AgPT09IHRyYW5zZm9ybVN0eWxlJDEgPyB0cmFuc2Zvcm1Qcm9wIDogcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZW0gYW5pbWF0aW9uIGhhbmRsZXIgcG93ZXJlZCBieSBXZWIgQW5pbWF0aW9ucyBBUEkuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBJdGVtQW5pbWF0ZShlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9jYWxsYmFjayA9IG51bGw7XG4gICAgdGhpcy5fcHJvcHMgPSBbXTtcbiAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICB0aGlzLl9rZXlmcmFtZXMgPSBbXTtcbiAgICB0aGlzLl9vcHRpb25zID0ge307XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9vbkZpbmlzaCA9IHRoaXMuX29uRmluaXNoLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgaW5zdGFuY2UncyBhbmltYXRpb24uIEF1dG9tYXRpY2FsbHkgc3RvcHMgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXNcbiAgICogcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc0Zyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzVG9cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZWFzaW5nPSdlYXNlJ11cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25GaW5pc2hdXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihwcm9wc0Zyb20sIHByb3BzVG8sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRpb247XG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX3Byb3BzO1xuICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBjYW5jZWxBbmltYXRpb24gPSBmYWxzZTtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gZXhpc3RpbmcgYW5pbWF0aW9uIHJ1bm5pbmcsIGxldCdzIGNoZWNrIGlmIGl0IG5lZWRzIHRvIGJlXG4gICAgLy8gY2FuY2VsbGVkIG9yIGlmIGl0IGNhbiBjb250aW51ZSBydW5uaW5nLlxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIHZhciBwcm9wQ291bnQgPSAwO1xuICAgICAgdmFyIHByb3BJbmRleDtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlcXVlc3RlZCBhbmltYXRpb24gdGFyZ2V0IHByb3BzIGFuZCB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGVcbiAgICAgIC8vIGN1cnJlbnQgcHJvcHMgYW5kIHZhbHVlcy5cbiAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzVG8pIHtcbiAgICAgICAgKytwcm9wQ291bnQ7XG4gICAgICAgIHByb3BJbmRleCA9IGN1cnJlbnRQcm9wcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgaWYgKHByb3BJbmRleCA9PT0gLTEgfHwgcHJvcHNUb1twcm9wTmFtZV0gIT09IGN1cnJlbnRWYWx1ZXNbcHJvcEluZGV4XSkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRhcmdldCBwcm9wcyBjb3VudCBtYXRjaGVzIGN1cnJlbnQgcHJvcHMgY291bnQuIFRoaXMgaXNcbiAgICAgIC8vIG5lZWRlZCBmb3IgdGhlIGVkZ2UgY2FzZSBzY2VuYXJpbyB3aGVyZSB0YXJnZXQgcHJvcHMgY29udGFpbiB0aGUgc2FtZVxuICAgICAgLy8gc3R5bGVzIGFzIGN1cnJlbnQgcHJvcHMsIGJ1dCB0aGUgY3VycmVudCBwcm9wcyBoYXZlIHNvbWUgYWRkaXRpb25hbFxuICAgICAgLy8gcHJvcHMuXG4gICAgICBpZiAoIWNhbmNlbEFuaW1hdGlvbiAmJiBwcm9wQ291bnQgIT09IGN1cnJlbnRQcm9wcy5sZW5ndGgpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgYW5pbWF0aW9uIChpZiByZXF1aXJlZCkuXG4gICAgaWYgKGNhbmNlbEFuaW1hdGlvbikgYW5pbWF0aW9uLmNhbmNlbCgpO1xuXG4gICAgLy8gU3RvcmUgYW5pbWF0aW9uIGNhbGxiYWNrLlxuICAgIHRoaXMuX2NhbGxiYWNrID0gaXNGdW5jdGlvbihvcHRzLm9uRmluaXNoKSA/IG9wdHMub25GaW5pc2ggOiBudWxsO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHJ1bm5pbmcgYW5pbWF0aW9uIHRoYXQgZG9lcyBub3QgbmVlZCB0byBiZSBjYW5jZWxsZWQsIGxldCdzXG4gICAgLy8gY2FsbCBpdCBhIGRheSBoZXJlIGFuZCBsZXQgaXQgcnVuLlxuICAgIGlmIChhbmltYXRpb24gJiYgIWNhbmNlbEFuaW1hdGlvbikgcmV0dXJuO1xuXG4gICAgLy8gU3RvcmUgdGFyZ2V0IHByb3BzIGFuZCB2YWx1ZXMgdG8gaW5zdGFuY2UuXG4gICAgY3VycmVudFByb3BzLmxlbmd0aCA9IGN1cnJlbnRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICBmb3IgKHByb3BOYW1lIGluIHByb3BzVG8pIHtcbiAgICAgIGN1cnJlbnRQcm9wcy5wdXNoKHByb3BOYW1lKTtcbiAgICAgIGN1cnJlbnRWYWx1ZXMucHVzaChwcm9wc1RvW3Byb3BOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGtleWZyYW1lcy5cbiAgICB2YXIgYW5pbUtleWZyYW1lcyA9IHRoaXMuX2tleWZyYW1lcztcbiAgICBhbmltS2V5ZnJhbWVzWzBdID0gcHJvcHNGcm9tO1xuICAgIGFuaW1LZXlmcmFtZXNbMV0gPSBwcm9wc1RvO1xuXG4gICAgLy8gU2V0IHVwIG9wdGlvbnMuXG4gICAgdmFyIGFuaW1PcHRpb25zID0gdGhpcy5fb3B0aW9ucztcbiAgICBhbmltT3B0aW9ucy5kdXJhdGlvbiA9IG9wdHMuZHVyYXRpb24gfHwgMzAwO1xuICAgIGFuaW1PcHRpb25zLmVhc2luZyA9IG9wdHMuZWFzaW5nIHx8ICdlYXNlJztcblxuICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb25cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKGFuaW1LZXlmcmFtZXMsIGFuaW1PcHRpb25zKTtcbiAgICBhbmltYXRpb24ub25maW5pc2ggPSB0aGlzLl9vbkZpbmlzaDtcbiAgICB0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb247XG5cbiAgICAvLyBTZXQgdGhlIGVuZCBzdHlsZXMuIFRoaXMgbWFrZXMgc3VyZSB0aGF0IHRoZSBlbGVtZW50IHN0YXlzIGF0IHRoZSBlbmRcbiAgICAvLyB2YWx1ZXMgYWZ0ZXIgYW5pbWF0aW9uIGlzIGZpbmlzaGVkLlxuICAgIHNldFN0eWxlcyhlbGVtZW50LCBwcm9wc1RvKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCBpbnN0YW5jZSdzIGN1cnJlbnQgYW5pbWF0aW9uIGlmIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3N0eWxlc11cbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oc3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9hbmltYXRpb24pIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgY3VycmVudFByb3BzID0gdGhpcy5fcHJvcHM7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIHByb3BOYW1lO1xuICAgIHZhciBwcm9wVmFsdWU7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBDYWxjdWxhdGUgKGlmIG5vdCBwcm92aWRlZCkgYW5kIHNldCBzdHlsZXMuXG4gICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjdXJyZW50UHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvcE5hbWUgPSBjdXJyZW50UHJvcHNbaV07XG4gICAgICAgIHByb3BWYWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIGdldFN0eWxlTmFtZShwcm9wTmFtZSkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BOYW1lID09PSAndHJhbnNmb3JtJyA/IHRyYW5zZm9ybVByb3AgOiBwcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpO1xuICAgIH1cblxuICAgIC8vICBDYW5jZWwgYW5pbWF0aW9uLlxuICAgIHRoaXMuX2FuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB0aGlzLl9hbmltYXRpb24gPSB0aGlzLl9jYWxsYmFjayA9IG51bGw7XG5cbiAgICAvLyBSZXNldCBjdXJyZW50IHByb3BzIGFuZCB2YWx1ZXMuXG4gICAgY3VycmVudFByb3BzLmxlbmd0aCA9IGN1cnJlbnRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGl0ZW0gaXMgYmVpbmcgYW5pbWF0ZWQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5pc0FuaW1hdGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2FuaW1hdGlvbjtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9vcHRpb25zID0gdGhpcy5fa2V5ZnJhbWVzID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQW5pbWF0aW9uIGVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuX29uRmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuX3Byb3BzLmxlbmd0aCA9IHRoaXMuX3ZhbHVlcy5sZW5ndGggPSAwO1xuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gIH07XG5cbiAgdmFyIHZlbmRvclByZWZpeGVzID0gWycnLCAnd2Via2l0JywgJ21veicsICdtcycsICdvJywgJ1dlYmtpdCcsICdNb3onLCAnTVMnLCAnTyddO1xuXG4gIC8qKlxuICAgKiBHZXQgcHJlZml4ZWQgQ1NTIHByb3BlcnR5IG5hbWUgd2hlbiBnaXZlbiBhIG5vbi1wcmVmaXhlZCBDU1MgcHJvcGVydHkgbmFtZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1TdHlsZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcE5hbWVcbiAgICogQHJldHVybnMgeyFTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRQcmVmaXhlZFByb3BOYW1lKGVsZW1TdHlsZSwgcHJvcE5hbWUpIHtcbiAgICB2YXIgY2FtZWxQcm9wTmFtZSA9IHByb3BOYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHByZWZpeDtcbiAgICB2YXIgcHJlZml4ZWRQcm9wTmFtZTtcblxuICAgIHdoaWxlIChpIDwgdmVuZG9yUHJlZml4ZXMubGVuZ3RoKSB7XG4gICAgICBwcmVmaXggPSB2ZW5kb3JQcmVmaXhlc1tpXTtcbiAgICAgIHByZWZpeGVkUHJvcE5hbWUgPSBwcmVmaXggPyBwcmVmaXggKyBjYW1lbFByb3BOYW1lIDogcHJvcE5hbWU7XG4gICAgICBpZiAocHJlZml4ZWRQcm9wTmFtZSBpbiBlbGVtU3R5bGUpIHJldHVybiBwcmVmaXhlZFByb3BOYW1lO1xuICAgICAgKytpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGR0ID0gMTAwMCAvIDYwO1xuXG4gIHZhciByYWYgPSAoXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKGR0KTtcbiAgICAgIH0sIGR0KTtcbiAgICB9XG4gICkuYmluZCh3aW5kb3cpO1xuXG4gIC8vIERldGVjdCBzdXBwb3J0IGZvciBwYXNzaXZlIGV2ZW50czpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAgdmFyIGlzUGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBwYXNzaXZlT3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVPcHRzKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlT3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgLy8gRHJhZ2dlciBldmVudHMuXG4gIHZhciBldmVudHMgPSB7XG4gICAgc3RhcnQ6ICdzdGFydCcsXG4gICAgbW92ZTogJ21vdmUnLFxuICAgIGVuZDogJ2VuZCcsXG4gICAgY2FuY2VsOiAnY2FuY2VsJ1xuICB9O1xuXG4gIHZhciBoYXNUb3VjaEV2ZW50cyA9ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuVG91Y2hFdmVudCk7XG4gIHZhciBoYXNQb2ludGVyRXZlbnRzID0gISF3aW5kb3cuUG9pbnRlckV2ZW50O1xuICB2YXIgaGFzTXNQb2ludGVyRXZlbnRzID0gISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG4gIHZhciBpc0FuZHJvaWQgPSAvKGFuZHJvaWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHZhciBsaXN0ZW5lck9wdGlvbnMgPSBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xuXG4gIHZhciB0YVByb3AgPSAndG91Y2hBY3Rpb24nO1xuICB2YXIgdGFQcm9wUHJlZml4ZWQgPSBnZXRQcmVmaXhlZFByb3BOYW1lKHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsIHRhUHJvcCk7XG4gIHZhciB0YURlZmF1bHRWYWx1ZSA9ICdhdXRvJztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBEcmFnZ2VyIGluc3RhbmNlIGZvciBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3NzUHJvcHNdXG4gICAqL1xuICBmdW5jdGlvbiBEcmFnZ2VyKGVsZW1lbnQsIGNzc1Byb3BzKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jc3NQcm9wcyA9IHt9O1xuICAgIHRoaXMuX3RvdWNoQWN0aW9uID0gJyc7XG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB0aGlzLl9wb2ludGVySWQgPSBudWxsO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5fc3RhcnRYID0gMDtcbiAgICB0aGlzLl9zdGFydFkgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRYID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WSA9IDA7XG5cbiAgICB0aGlzLl9wcmVTdGFydENoZWNrID0gdGhpcy5fcHJlU3RhcnRDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSA9IHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uU3RhcnQgPSB0aGlzLl9vblN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Nb3ZlID0gdGhpcy5fb25Nb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DYW5jZWwgPSB0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRW5kID0gdGhpcy5fb25FbmQuYmluZCh0aGlzKTtcblxuICAgIC8vIEFwcGx5IGluaXRpYWwgY3NzIHByb3BzLlxuICAgIHRoaXMuc2V0Q3NzUHJvcHMoY3NzUHJvcHMpO1xuXG4gICAgLy8gSWYgdG91Y2ggYWN0aW9uIHdhcyBub3QgcHJvdmlkZWQgd2l0aCBpbml0aWFsIGNzcyBwcm9wcyBsZXQncyBhc3N1bWUgaXQnc1xuICAgIC8vIGF1dG8uXG4gICAgaWYgKCF0aGlzLl90b3VjaEFjdGlvbikge1xuICAgICAgdGhpcy5zZXRUb3VjaEFjdGlvbih0YURlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBuYXRpdmUgbGluay9pbWFnZSBkcmFnZ2luZyBmb3IgdGhlIGl0ZW0gYW5kIGl0J3MgYW5jZXN0b3JzLlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcblxuICAgIC8vIExpc3RlbiB0byBzdGFydCBldmVudC5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fZXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSB0b3VjaCBldmVudHMsIGJ1dCBubyBwb2ludGVyIGV2ZW50cyB3ZSBuZWVkIHRvIGFsc28gbGlzdGVuIGZvclxuICAgIC8vIG1vdXNlIGV2ZW50cyBpbiBhZGRpdGlvbiB0byB0b3VjaCBldmVudHMgZm9yIGRldmljZXMgd2hpY2ggc3VwcG9ydCBib3RoXG4gICAgLy8gbW91c2UgYW5kIHRvdWNoIGludGVyYWN0aW9uLlxuICAgIGlmIChoYXNUb3VjaEV2ZW50cyAmJiAhaGFzUG9pbnRlckV2ZW50cyAmJiAhaGFzTXNQb2ludGVyRXZlbnRzKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fbW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3RlY3RlZCBwcm9wZXJ0aWVzXG4gICAqICoqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIERyYWdnZXIuX3BvaW50ZXJFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdwb2ludGVyZG93bicsXG4gICAgbW92ZTogJ3BvaW50ZXJtb3ZlJyxcbiAgICBjYW5jZWw6ICdwb2ludGVyY2FuY2VsJyxcbiAgICBlbmQ6ICdwb2ludGVydXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fbXNQb2ludGVyRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnTVNQb2ludGVyRG93bicsXG4gICAgbW92ZTogJ01TUG9pbnRlck1vdmUnLFxuICAgIGNhbmNlbDogJ01TUG9pbnRlckNhbmNlbCcsXG4gICAgZW5kOiAnTVNQb2ludGVyVXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fdG91Y2hFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBjYW5jZWw6ICd0b3VjaGNhbmNlbCcsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH07XG5cbiAgRHJhZ2dlci5fbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGNhbmNlbDogJycsXG4gICAgZW5kOiAnbW91c2V1cCdcbiAgfTtcblxuICBEcmFnZ2VyLl9ldmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhhc1BvaW50ZXJFdmVudHMpIHJldHVybiBEcmFnZ2VyLl9wb2ludGVyRXZlbnRzO1xuICAgIGlmIChoYXNNc1BvaW50ZXJFdmVudHMpIHJldHVybiBEcmFnZ2VyLl9tc1BvaW50ZXJFdmVudHM7XG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fdG91Y2hFdmVudHM7XG4gICAgcmV0dXJuIERyYWdnZXIuX21vdXNlRXZlbnRzO1xuICB9KSgpO1xuXG4gIERyYWdnZXIuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuXG4gIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBQcm90ZWN0ZWQgc3RhdGljIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0ICYmIGUuY2FuY2VsYWJsZSAhPT0gZmFsc2UpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9hY3RpdmF0ZUluc3RhbmNlID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5kZXggPSBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHJldHVybjtcblxuICAgIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9uKGV2ZW50cy5tb3ZlLCBpbnN0YW5jZS5fb25Nb3ZlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9uKGV2ZW50cy5jYW5jZWwsIGluc3RhbmNlLl9vbkNhbmNlbCk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMuZW5kLCBpbnN0YW5jZS5fb25FbmQpO1xuXG4gICAgaWYgKERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIERyYWdnZXIuX2JpbmRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgRHJhZ2dlci5fZGVhY3RpdmF0ZUluc3RhbmNlID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5kZXggPSBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vZmYoZXZlbnRzLm1vdmUsIGluc3RhbmNlLl9vbk1vdmUpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5jYW5jZWwsIGluc3RhbmNlLl9vbkNhbmNlbCk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vZmYoZXZlbnRzLmVuZCwgaW5zdGFuY2UuX29uRW5kKTtcblxuICAgIGlmICghRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCkge1xuICAgICAgRHJhZ2dlci5fdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIERyYWdnZXIuX2JpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnRzID0gRHJhZ2dlci5fZXZlbnRzO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3ZlLCBEcmFnZ2VyLl9vbk1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLmVuZCwgRHJhZ2dlci5fb25FbmQsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZXZlbnRzLmNhbmNlbCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuY2FuY2VsLCBEcmFnZ2VyLl9vbkNhbmNlbCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgfTtcblxuICBEcmFnZ2VyLl91bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnRzID0gRHJhZ2dlci5fZXZlbnRzO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5tb3ZlLCBEcmFnZ2VyLl9vbk1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLmVuZCwgRHJhZ2dlci5fb25FbmQsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZXZlbnRzLmNhbmNlbCAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMuY2FuY2VsLCBEcmFnZ2VyLl9vbkNhbmNlbCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9nZXRFdmVudFBvaW50ZXJJZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBwb2ludGVyIGlkIGF2YWlsYWJsZSBsZXQncyB1c2UgaXQuXG4gICAgaWYgKHR5cGVvZiBldmVudC5wb2ludGVySWQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZXZlbnQucG9pbnRlcklkO1xuICAgIH1cblxuICAgIC8vIEZvciB0b3VjaCBldmVudHMgbGV0J3MgZ2V0IHRoZSBmaXJzdCBjaGFuZ2VkIHRvdWNoJ3MgaWRlbnRpZmllci5cbiAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgIHJldHVybiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXIgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciBtb3VzZS9vdGhlciBldmVudHMgbGV0J3MgcHJvdmlkZSBhIHN0YXRpYyBpZC5cbiAgICByZXR1cm4gMTtcbiAgfTtcblxuICBEcmFnZ2VyLl9nZXRUb3VjaEJ5SWQgPSBmdW5jdGlvbihldmVudCwgaWQpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgcG9pbnRlciBldmVudCByZXR1cm4gdGhlIHdob2xlIGV2ZW50IGlmIHRoZXJlJ3MgYSBtYXRjaCwgYW5kXG4gICAgLy8gbnVsbCBvdGhlcndpc2UuXG4gICAgaWYgKHR5cGVvZiBldmVudC5wb2ludGVySWQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZXZlbnQucG9pbnRlcklkID09PSBpZCA/IGV2ZW50IDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgdG91Y2ggZXZlbnRzIGxldCdzIGNoZWNrIGlmIHRoZXJlJ3MgYSBjaGFuZ2VkIHRvdWNoIG9iamVjdCB0aGF0IG1hdGNoZXNcbiAgICAvLyB0aGUgcG9pbnRlcklkIGluIHdoaWNoIGNhc2UgcmV0dXJuIHRoZSB0b3VjaCBvYmplY3QuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yIG1vdXNlL290aGVyIGV2ZW50cyBsZXQncyBhc3N1bWUgdGhlcmUncyBvbmx5IG9uZSBwb2ludGVyIGFuZCBqdXN0XG4gICAgLy8gcmV0dXJuIHRoZSBldmVudC5cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH07XG5cbiAgRHJhZ2dlci5fb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMubW92ZSwgZSk7XG4gIH07XG5cbiAgRHJhZ2dlci5fb25DYW5jZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5lbWl0KGV2ZW50cy5jYW5jZWwsIGUpO1xuICB9O1xuXG4gIERyYWdnZXIuX29uRW5kID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMuZW5kLCBlKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZXNldCBjdXJyZW50IGRyYWcgb3BlcmF0aW9uIChpZiBhbnkpLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xuICAgIHRoaXMuX3N0YXJ0WCA9IDA7XG4gICAgdGhpcy5fc3RhcnRZID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFkgPSAwO1xuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUsXG4gICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICApO1xuXG4gICAgRHJhZ2dlci5fZGVhY3RpdmF0ZUluc3RhbmNlKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjdXN0b20gZHJhZ2dlciBldmVudCBmcm9tIGEgcmF3IGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICogQHJldHVybnMge0RyYWdnZXJFdmVudH1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9jcmVhdGVFdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGUpIHtcbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIEhhbW1lci5qcyBjb21wYXRpYmlsaXR5IGludGVyZmFjZS5cbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBzcmNFdmVudDogZSxcbiAgICAgIGRpc3RhbmNlOiB0aGlzLmdldERpc3RhbmNlKCksXG4gICAgICBkZWx0YVg6IHRoaXMuZ2V0RGVsdGFYKCksXG4gICAgICBkZWx0YVk6IHRoaXMuZ2V0RGVsdGFZKCksXG4gICAgICBkZWx0YVRpbWU6IHR5cGUgPT09IGV2ZW50cy5zdGFydCA/IDAgOiB0aGlzLmdldERlbHRhVGltZSgpLFxuICAgICAgaXNGaXJzdDogdHlwZSA9PT0gZXZlbnRzLnN0YXJ0LFxuICAgICAgaXNGaW5hbDogdHlwZSA9PT0gZXZlbnRzLmVuZCB8fCB0eXBlID09PSBldmVudHMuY2FuY2VsLFxuICAgICAgLy8gUGFydGlhbCBUb3VjaCBBUEkgaW50ZXJmYWNlLlxuICAgICAgaWRlbnRpZmllcjogdGhpcy5fcG9pbnRlcklkLFxuICAgICAgc2NyZWVuWDogdG91Y2guc2NyZWVuWCxcbiAgICAgIHNjcmVlblk6IHRvdWNoLnNjcmVlblksXG4gICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcbiAgICAgIHBhZ2VYOiB0b3VjaC5wYWdlWCxcbiAgICAgIHBhZ2VZOiB0b3VjaC5wYWdlWSxcbiAgICAgIHRhcmdldDogdG91Y2gudGFyZ2V0XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogRW1pdCBhIHJhdyBldmVudCBhcyBkcmFnZ2VyIGV2ZW50IGludGVybmFsbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2VtaXQgPSBmdW5jdGlvbih0eXBlLCBlKSB7XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KHR5cGUsIHRoaXMuX2NyZWF0ZUV2ZW50KHR5cGUsIGUpKTtcbiAgfTtcblxuICAvKipcbiAgICogSWYgdGhlIHByb3ZpZGVkIGV2ZW50IGlzIGEgUG9pbnRlckV2ZW50IHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGl0IGlmIGl0IGhhc1xuICAgKiB0aGUgc2FtZSBwb2ludGVySWQgYXMgdGhlIGluc3RhbmNlLiBJZiB0aGUgcHJvdmlkZWQgZXZlbnQgaXMgYSBUb3VjaEV2ZW50XG4gICAqIHRoaXMgbWV0aG9kIHdpbGwgdHJ5IHRvIGxvb2sgZm9yIGEgVG91Y2ggaW5zdGFuY2UgaW4gdGhlIGNoYW5nZWRUb3VjaGVzIHRoYXRcbiAgICogaGFzIGFuIGlkZW50aWZpZXIgbWF0Y2hpbmcgdGhpcyBpbnN0YW5jZSdzIHBvaW50ZXJJZC4gSWYgdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAqIGlzIGEgTW91c2VFdmVudCAob3IganVzdCBhbnkgb3RoZXIgZXZlbnQgdGhhbiBQb2ludGVyRXZlbnQgb3IgVG91Y2hFdmVudClcbiAgICogaXQgd2lsbCBiZSByZXR1cm5lZCBpbW1lZGlhdGVseS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfVxuICAgKiBAcmV0dXJucyB7PyhUb3VjaHxQb2ludGVyRXZlbnR8TW91c2VFdmVudCl9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fZ2V0VHJhY2tlZFRvdWNoID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLl9wb2ludGVySWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHJhZ2dlci5fZ2V0VG91Y2hCeUlkKGUsIHRoaXMuX3BvaW50ZXJJZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBIHByZS1oYW5kbGVyIGZvciBzdGFydCBldmVudCB0aGF0IGNoZWNrcyBpZiB3ZSBjYW4gc3RhcnQgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX3ByZVN0YXJ0Q2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgbm90IGJlaW5nIGRyYWdnZWQgY3VycmVudGx5LlxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSkgcmV0dXJuO1xuXG4gICAgLy8gU3BlY2lhbCBjYW5jZWxhYmxlIGNoZWNrIGZvciBBbmRyb2lkIHRvIHByZXZlbnQgZHJhZyBwcm9jZWR1cmUgZnJvbVxuICAgIC8vIHN0YXJ0aW5nIGlmIG5hdGl2ZSBzY3JvbGxpbmcgaXMgaW4gcHJvZ3Jlc3MuIFBhcnQgMS5cbiAgICBpZiAoaXNBbmRyb2lkICYmIGUuY2FuY2VsYWJsZSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIC8vIE1ha2Ugc3VyZSBsZWZ0IGJ1dHRvbiBpcyBwcmVzc2VkIG9uIG1vdXNlLlxuICAgIGlmIChlLmJ1dHRvbikgcmV0dXJuO1xuXG4gICAgLy8gR2V0IChhbmQgc2V0KSBwb2ludGVyIGlkLlxuICAgIHRoaXMuX3BvaW50ZXJJZCA9IERyYWdnZXIuX2dldEV2ZW50UG9pbnRlcklkKGUpO1xuICAgIGlmICh0aGlzLl9wb2ludGVySWQgPT09IG51bGwpIHJldHVybjtcblxuICAgIC8vIFN0b3JlIHRoZSBzdGFydCBldmVudCBhbmQgdHJpZ2dlciBzdGFydCAoYXN5bmMgb3Igc3luYykuIFBvaW50ZXIgZXZlbnRzXG4gICAgLy8gYXJlIGVtaXR0ZWQgYmVmb3JlIHRvdWNoIGV2ZW50cyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBib3RoIG9mIHRoZW0uIEFuZFxuICAgIC8vIGlmIHlvdSB0cnkgdG8gbW92ZSBhbiBlbGVtZW50IGJlZm9yZSBgdG91Y2hzdGFydGAgaXMgZW1pdHRlZCB0aGUgcG9pbnRlclxuICAgIC8vIGV2ZW50cyBmb3IgdGhhdCBlbGVtZW50IHdpbGwgYmUgY2FuY2VsZWQuIFRoZSBmaXggaXMgdG8gZGVsYXkgdGhlIGVtaXR0ZWRcbiAgICAvLyBwb2ludGVyIGV2ZW50cyBpbiBzdWNoIGEgc2NlbmFyaW8gYnkgb25lIGZyYW1lIHNvIHRoYXQgYHRvdWNoc3RhcnRgIGhhc1xuICAgIC8vIHRpbWUgdG8gYmUgZW1pdHRlZCBiZWZvcmUgdGhlIGVsZW1lbnQgaXMgKHBvdGVudGlhbGx5KSBtb3ZlZC5cbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gZTtcbiAgICBpZiAoaGFzVG91Y2hFdmVudHMgJiYgKGhhc1BvaW50ZXJFdmVudHMgfHwgaGFzTXNQb2ludGVyRXZlbnRzKSkge1xuICAgICAgLy8gU3BlY2lhbCBjYW5jZWxhYmxlIGNoZWNrIGZvciBBbmRyb2lkIHRvIHByZXZlbnQgZHJhZyBwcm9jZWR1cmUgZnJvbVxuICAgICAgLy8gc3RhcnRpbmcgaWYgbmF0aXZlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy4gUGFydCAyLlxuICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICAgICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLFxuICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmFmKHRoaXMuX29uU3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblN0YXJ0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBYm9ydCBzdGFydCBldmVudCBpZiBpdCB0dXJucyBvdXQgdG8gYmUgbm9uLWNhbmNlbGFibGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2Fib3J0Tm9uQ2FuY2VsYWJsZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCxcbiAgICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSxcbiAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAodGhpcy5fc3RhcnRFdmVudCAmJiBlLmNhbmNlbGFibGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9wb2ludGVySWQgPSBudWxsO1xuICAgICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgZHJhZyBwcm9jZWR1cmUgaWYgcG9zc2libGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuX3N0YXJ0RXZlbnQ7XG4gICAgaWYgKCFlKSByZXR1cm47XG5cbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHZhciB0b3VjaCA9IHRoaXMuX2dldFRyYWNrZWRUb3VjaChlKTtcbiAgICBpZiAoIXRvdWNoKSByZXR1cm47XG5cbiAgICAvLyBTZXQgdXAgaW5pdCBkYXRhIGFuZCBlbWl0IHN0YXJ0IGV2ZW50LlxuICAgIHRoaXMuX3N0YXJ0WCA9IHRoaXMuX2N1cnJlbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLl9zdGFydFkgPSB0aGlzLl9jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5zdGFydCwgZSk7XG4gICAgRHJhZ2dlci5fYWN0aXZhdGVJbnN0YW5jZSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgbW92ZSBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0b3VjaCA9IHRoaXMuX2dldFRyYWNrZWRUb3VjaChlKTtcbiAgICBpZiAoIXRvdWNoKSByZXR1cm47XG5cbiAgICB0aGlzLl9jdXJyZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy5fY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuX2VtaXQoZXZlbnRzLm1vdmUsIGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBtb3ZlIGNhbmNlbCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25DYW5jZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLl9nZXRUcmFja2VkVG91Y2goZSkpIHJldHVybjtcblxuICAgIHRoaXMuX2VtaXQoZXZlbnRzLmNhbmNlbCwgZSk7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgZW5kIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vbkVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIXRoaXMuX2dldFRyYWNrZWRUb3VjaChlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fZW1pdChldmVudHMuZW5kLCBlKTtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkIGF0IHRoZSBtb21lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2ludGVySWQgIT09IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBlbGVtZW50J3MgdG91Y2gtYWN0aW9uIENTUyBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5zZXRUb3VjaEFjdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gU3RvcmUgdW5tb2RpZmllZCB0b3VjaCBhY3Rpb24gdmFsdWUgKHdlIHRydXN0IHVzZXIgaW5wdXQgaGVyZSkuXG4gICAgdGhpcy5fdG91Y2hBY3Rpb24gPSB2YWx1ZTtcblxuICAgIC8vIFNldCB0b3VjaC1hY3Rpb24gc3R5bGUuXG4gICAgaWYgKHRhUHJvcFByZWZpeGVkKSB7XG4gICAgICB0aGlzLl9jc3NQcm9wc1t0YVByb3BQcmVmaXhlZF0gPSAnJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbdGFQcm9wUHJlZml4ZWRdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBhbiB1bnN1cHBvcnRlZCB0b3VjaC1hY3Rpb24gdmFsdWUgbGV0J3MgYWRkIGEgc3BlY2lhbCBsaXN0ZW5lclxuICAgIC8vIHRoYXQgcHJldmVudHMgZGVmYXVsdCBhY3Rpb24gb24gdG91Y2ggc3RhcnQgZXZlbnQuIEEgZGlydHkgaGFjaywgYnV0IGJlc3RcbiAgICAvLyB3ZSBjYW4gZG8gZm9yIG5vdy4gVGhlIG90aGVyIG9wdGlvbnMgd291bGQgYmUgdG8gc29tZWhvdyBwb2x5ZmlsbCB0aGVcbiAgICAvLyB1bnN1cHBvcnRlZCB0b3VjaCBhY3Rpb24gYmVoYXZpb3Igd2l0aCBjdXN0b20gaGV1cmlzdGljcyB3aGljaCBzb3VuZHMgbGlrZVxuICAgIC8vIGEgY2FuIG9mIHdvcm1zLlxuICAgIGlmIChoYXNUb3VjaEV2ZW50cykge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGVbdGFQcm9wUHJlZml4ZWRdICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgZWxlbWVudCdzIENTUyBwcm9wZXJ0aWVzLiBBY2NlcHRzIGFuIG9iamVjdCB3aXRoIGNhbWVsIGNhc2VkIHN0eWxlXG4gICAqIHByb3BzIHdpdGggdmFsdWUgcGFpcnMgYXMgaXQncyBmaXJzdCBhcmd1bWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtuZXdQcm9wc11cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLnNldENzc1Byb3BzID0gZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICBpZiAoIW5ld1Byb3BzKSByZXR1cm47XG5cbiAgICB2YXIgY3VycmVudFByb3BzID0gdGhpcy5fY3NzUHJvcHM7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBwcm9wO1xuICAgIHZhciBwcmVmaXhlZFByb3A7XG5cbiAgICAvLyBSZXNldCBjdXJyZW50IHByb3BzLlxuICAgIGZvciAocHJvcCBpbiBjdXJyZW50UHJvcHMpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBjdXJyZW50UHJvcHNbcHJvcF07XG4gICAgICBkZWxldGUgY3VycmVudFByb3BzW3Byb3BdO1xuICAgIH1cblxuICAgIC8vIFNldCBuZXcgcHJvcHMuXG4gICAgZm9yIChwcm9wIGluIG5ld1Byb3BzKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbHVlIGZvciB0aGUgcHJvcC5cbiAgICAgIGlmICghbmV3UHJvcHNbcHJvcF0pIGNvbnRpbnVlO1xuXG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0b3VjaC1hY3Rpb24uXG4gICAgICBpZiAocHJvcCA9PT0gdGFQcm9wKSB7XG4gICAgICAgIHRoaXMuc2V0VG91Y2hBY3Rpb24obmV3UHJvcHNbcHJvcF0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHByZWZpeGVkIHByb3AgYW5kIHNraXAgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgICBwcmVmaXhlZFByb3AgPSBnZXRQcmVmaXhlZFByb3BOYW1lKGVsZW1lbnQuc3R5bGUsIHByb3ApO1xuICAgICAgaWYgKCFwcmVmaXhlZFByb3ApIGNvbnRpbnVlO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgcHJvcCBhbmQgYWRkIHRoZSBzdHlsZS5cbiAgICAgIGN1cnJlbnRQcm9wc1twcmVmaXhlZFByb3BdID0gJyc7XG4gICAgICBlbGVtZW50LnN0eWxlW3ByZWZpeGVkUHJvcF0gPSBuZXdQcm9wc1twcm9wXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRoZSBwb2ludGVyIGhhcyBtb3ZlZCBvbiB4LWF4aXMgZnJvbSBzdGFydCBwb3NpdGlvbiwgaW4gcGl4ZWxzLlxuICAgKiBQb3NpdGl2ZSB2YWx1ZSBpbmRpY2F0ZXMgbW92ZW1lbnQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGVsdGFYID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRYIC0gdGhpcy5fc3RhcnRYO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgcG9pbnRlciBoYXMgbW92ZWQgb24geS1heGlzIGZyb20gc3RhcnQgcG9zaXRpb24sIGluIHBpeGVscy5cbiAgICogUG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIG1vdmVtZW50IGZyb20gdG9wIHRvIGJvdHRvbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhWSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50WSAtIHRoaXMuX3N0YXJ0WTtcbiAgfTtcblxuICAvKipcbiAgICogSG93IGZhciAoaW4gcGl4ZWxzKSBoYXMgcG9pbnRlciBtb3ZlZCBmcm9tIHN0YXJ0IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgeCA9IHRoaXMuZ2V0RGVsdGFYKCk7XG4gICAgdmFyIHkgPSB0aGlzLmdldERlbHRhWSgpO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBsb25nIGhhcyBwb2ludGVyIGJlZW4gZHJhZ2dlZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhVGltZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUgPyBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRUaW1lIDogMDtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBkcmFnIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgKiAgIC0gJ3N0YXJ0JywgJ21vdmUnLCAnY2FuY2VsJyBvciAnZW5kJy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBkcmFnIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgKiAgIC0gJ3N0YXJ0JywgJ21vdmUnLCAnY2FuY2VsJyBvciAnZW5kJy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50cywgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHVuYmluZCBhbGwgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcblxuICAgIC8vIFJlc2V0IGRhdGEgYW5kIGRlYWN0aXZhdGUgdGhlIGluc3RhbmNlLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBEZXN0cm95IGVtaXR0ZXIuXG4gICAgdGhpcy5fZW1pdHRlci5kZXN0cm95KCk7XG5cbiAgICAvLyBVbmJpbmQgZXZlbnQgaGFuZGxlcnMuXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fbW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCwgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcblxuICAgIC8vIFJlc2V0IHN0eWxlcy5cbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuX2Nzc1Byb3BzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdGhpcy5fY3NzUHJvcHNbcHJvcF07XG4gICAgICBkZWxldGUgdGhpcy5fY3NzUHJvcHNbcHJvcF07XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgZGF0YS5cbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIE1hcmsgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQSB0aWNrZXIgc3lzdGVtIGZvciBoYW5kbGluZyBET00gcmVhZHMgYW5kIHdyaXRlcyBpbiBhbiBlZmZpY2llbnQgd2F5LlxuICAgKiBDb250YWlucyBhIHJlYWQgcXVldWUgYW5kIGEgd3JpdGUgcXVldWUgdGhhdCBhcmUgcHJvY2Vzc2VkIG9uIHRoZSBuZXh0XG4gICAqIGFuaW1hdGlvbiBmcmFtZSB3aGVuIG5lZWRlZC5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBUaWNrZXIoKSB7XG4gICAgdGhpcy5fbmV4dFN0ZXAgPSBudWxsO1xuXG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9yZWFkcyA9IHt9O1xuICAgIHRoaXMuX3dyaXRlcyA9IHt9O1xuXG4gICAgdGhpcy5fYmF0Y2ggPSBbXTtcbiAgICB0aGlzLl9iYXRjaFJlYWRzID0ge307XG4gICAgdGhpcy5fYmF0Y2hXcml0ZXMgPSB7fTtcblxuICAgIHRoaXMuX3N0ZXAgPSB0aGlzLl9zdGVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBUaWNrZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGlkLCByZWFkT3BlcmF0aW9uLCB3cml0ZU9wZXJhdGlvbiwgaXNQcmlvcml0aXplZCkge1xuICAgIC8vIEZpcnN0LCBsZXQncyBjaGVjayBpZiBhbiBpdGVtIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBxdWV1ZXMgd2l0aCB0aGUgc2FtZSBpZFxuICAgIC8vIGFuZCBpZiBzbyAtPiByZW1vdmUgaXQuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuX3F1ZXVlLmluZGV4T2YoaWQpO1xuICAgIGlmIChjdXJyZW50SW5kZXggPiAtMSkgdGhpcy5fcXVldWVbY3VycmVudEluZGV4XSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEFkZCBlbnRyeS5cbiAgICBpc1ByaW9yaXRpemVkID8gdGhpcy5fcXVldWUudW5zaGlmdChpZCkgOiB0aGlzLl9xdWV1ZS5wdXNoKGlkKTtcbiAgICB0aGlzLl9yZWFkc1tpZF0gPSByZWFkT3BlcmF0aW9uO1xuICAgIHRoaXMuX3dyaXRlc1tpZF0gPSB3cml0ZU9wZXJhdGlvbjtcblxuICAgIC8vIEZpbmFsbHksIGxldCdzIGtpY2stc3RhcnQgdGhlIG5leHQgdGljayBpZiBpdCBpcyBub3QgcnVubmluZyB5ZXQuXG4gICAgaWYgKCF0aGlzLl9uZXh0U3RlcCkgdGhpcy5fbmV4dFN0ZXAgPSByYWYodGhpcy5fc3RlcCk7XG4gIH07XG5cbiAgVGlja2VyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbihpZCkge1xuICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLl9xdWV1ZS5pbmRleE9mKGlkKTtcbiAgICBpZiAoY3VycmVudEluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3F1ZXVlW2N1cnJlbnRJbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fcmVhZHNbaWRdO1xuICAgICAgZGVsZXRlIHRoaXMuX3dyaXRlc1tpZF07XG4gICAgfVxuICB9O1xuXG4gIFRpY2tlci5wcm90b3R5cGUuX3N0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgcmVhZHMgPSB0aGlzLl9yZWFkcztcbiAgICB2YXIgd3JpdGVzID0gdGhpcy5fd3JpdGVzO1xuICAgIHZhciBiYXRjaCA9IHRoaXMuX2JhdGNoO1xuICAgIHZhciBiYXRjaFJlYWRzID0gdGhpcy5fYmF0Y2hSZWFkcztcbiAgICB2YXIgYmF0Y2hXcml0ZXMgPSB0aGlzLl9iYXRjaFdyaXRlcztcbiAgICB2YXIgbGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICAgIHZhciBpZDtcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlc2V0IHRpY2tlci5cbiAgICB0aGlzLl9uZXh0U3RlcCA9IG51bGw7XG5cbiAgICAvLyBTZXR1cCBxdWV1ZXMgYW5kIGNhbGxiYWNrIHBsYWNlaG9sZGVycy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkID0gcXVldWVbaV07XG4gICAgICBpZiAoIWlkKSBjb250aW51ZTtcblxuICAgICAgYmF0Y2gucHVzaChpZCk7XG5cbiAgICAgIGJhdGNoUmVhZHNbaWRdID0gcmVhZHNbaWRdO1xuICAgICAgZGVsZXRlIHJlYWRzW2lkXTtcblxuICAgICAgYmF0Y2hXcml0ZXNbaWRdID0gd3JpdGVzW2lkXTtcbiAgICAgIGRlbGV0ZSB3cml0ZXNbaWRdO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHF1ZXVlLlxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBQcm9jZXNzIHJlYWQgY2FsbGJhY2tzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWQgPSBiYXRjaFtpXTtcbiAgICAgIGlmIChiYXRjaFJlYWRzW2lkXSkge1xuICAgICAgICBiYXRjaFJlYWRzW2lkXSgpO1xuICAgICAgICBkZWxldGUgYmF0Y2hSZWFkc1tpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvY2VzcyB3cml0ZSBjYWxsYmFja3MuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZCA9IGJhdGNoW2ldO1xuICAgICAgaWYgKGJhdGNoV3JpdGVzW2lkXSkge1xuICAgICAgICBiYXRjaFdyaXRlc1tpZF0oKTtcbiAgICAgICAgZGVsZXRlIGJhdGNoV3JpdGVzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXNldCBiYXRjaC5cbiAgICBiYXRjaC5sZW5ndGggPSAwO1xuXG4gICAgLy8gUmVzdGFydCB0aGUgdGlja2VyIGlmIG5lZWRlZC5cbiAgICBpZiAoIXRoaXMuX25leHRTdGVwICYmIHF1ZXVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5fbmV4dFN0ZXAgPSByYWYodGhpcy5fc3RlcCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB0aWNrZXIgPSBuZXcgVGlja2VyKCk7XG5cbiAgdmFyIGxheW91dFRpY2sgPSAnbGF5b3V0JztcbiAgdmFyIHZpc2liaWxpdHlUaWNrID0gJ3Zpc2liaWxpdHknO1xuICB2YXIgbW92ZVRpY2sgPSAnbW92ZSc7XG4gIHZhciBzY3JvbGxUaWNrID0gJ3Njcm9sbCc7XG4gIHZhciBwbGFjZWhvbGRlclRpY2sgPSAncGxhY2Vob2xkZXInO1xuXG4gIGZ1bmN0aW9uIGFkZExheW91dFRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBsYXlvdXRUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsTGF5b3V0VGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBsYXlvdXRUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFZpc2liaWxpdHlUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgdmlzaWJpbGl0eVRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxWaXNpYmlsaXR5VGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyB2aXNpYmlsaXR5VGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNb3ZlVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIG1vdmVUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2ssIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsTW92ZVRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgbW92ZVRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2Nyb2xsVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHNjcm9sbFRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxTY3JvbGxUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIHNjcm9sbFRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUGxhY2Vob2xkZXJUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgcGxhY2Vob2xkZXJUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIHBsYWNlaG9sZGVyVGljayk7XG4gIH1cblxuICB2YXIgRWxQcm90byA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZTtcbiAgdmFyIG1hdGNoZXNGbiA9XG4gICAgRWxQcm90by5tYXRjaGVzIHx8XG4gICAgRWxQcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGVsZW1lbnQgbWF0Y2hlcyBhIENTUyBzZWxlY3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBlbGVtZW50TWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbWF0Y2hlc0ZuLmNhbGwoZWwsIHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2xhc3MgdG8gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXRjaGVzKGVsZW1lbnQsICcuJyArIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciB0ZW1wQXJyYXkgPSBbXTtcbiAgdmFyIG51bWJlclR5cGUgPSAnbnVtYmVyJztcblxuICAvKipcbiAgICogSW5zZXJ0IGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgdG8gYXJyYXkgdG8gYSBzcGVjaWZpZWQgaW5kZXguIE11dGF0ZXNcbiAgICogdGhlIGFycmF5LiBUaGUgaW5kZXggY2FuIGJlIG5lZ2F0aXZlIGluIHdoaWNoIGNhc2UgdGhlIGl0ZW1zIHdpbGwgYmUgYWRkZWRcbiAgICogdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleD0tMV1cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5SW5zZXJ0KGFycmF5LCBpdGVtcywgaW5kZXgpIHtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gbnVtYmVyVHlwZSA/IGluZGV4IDogLTE7XG4gICAgaWYgKHN0YXJ0SW5kZXggPCAwKSBzdGFydEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gc3RhcnRJbmRleCArIDE7XG5cbiAgICBhcnJheS5zcGxpY2UuYXBwbHkoYXJyYXksIHRlbXBBcnJheS5jb25jYXQoc3RhcnRJbmRleCwgMCwgaXRlbXMpKTtcbiAgICB0ZW1wQXJyYXkubGVuZ3RoID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgYXJyYXkgaW5kZXguIEJhc2ljYWxseSB0aGlzIGZ1bmN0aW9uIG1ha2VzIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWRcbiAgICogYXJyYXkgaW5kZXggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBhbHNvIHRyYW5zZm9ybXNcbiAgICogbmVnYXRpdmUgaW5kZXggdG8gdGhlIG1hdGNoaW5nIHBvc2l0aXZlIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtCb29sZWFufSBpc01pZ3JhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgaW5kZXgsIGlzTWlncmF0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgbWF4SW5kZXggPSBNYXRoLm1heCgwLCBpc01pZ3JhdGlvbiA/IGxlbmd0aCA6IGxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBpbmRleCA+IG1heEluZGV4ID8gbWF4SW5kZXggOiBpbmRleCA8IDAgPyBNYXRoLm1heChtYXhJbmRleCArIGluZGV4ICsgMSwgMCkgOiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGFycmF5IGl0ZW0gdG8gYW5vdGhlciBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgaXRlbSB0aGF0IHdpbGwgYmUgbW92ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIHdoZXJlIHRoZSBpdGVtIHNob3VsZCBiZSBtb3ZlZCB0by5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5TW92ZShhcnJheSwgZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBhcnJheSBoYXMgdHdvIG9yIG1vcmUgaXRlbXMuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybjtcblxuICAgIC8vIE5vcm1hbGl6ZSB0aGUgaW5kaWNlcy5cbiAgICB2YXIgZnJvbSA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGZyb21JbmRleCk7XG4gICAgdmFyIHRvID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgdG9JbmRleCk7XG5cbiAgICAvLyBBZGQgdGFyZ2V0IGl0ZW0gdG8gdGhlIG5ldyBwb3NpdGlvbi5cbiAgICBpZiAoZnJvbSAhPT0gdG8pIHtcbiAgICAgIGFycmF5LnNwbGljZSh0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dhcCBhcnJheSBpdGVtcy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIG9mIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBzd2FwcGVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gd2l0aEluZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIG9mIHRoZSBvdGhlciBpdGVtIHRoYXQgd2lsbCBiZSBzd2FwcGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlTd2FwKGFycmF5LCBpbmRleCwgd2l0aEluZGV4KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBhcnJheSBoYXMgdHdvIG9yIG1vcmUgaXRlbXMuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybjtcblxuICAgIC8vIE5vcm1hbGl6ZSB0aGUgaW5kaWNlcy5cbiAgICB2YXIgaW5kZXhBID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgaW5kZXgpO1xuICAgIHZhciBpbmRleEIgPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCB3aXRoSW5kZXgpO1xuICAgIHZhciB0ZW1wO1xuXG4gICAgLy8gU3dhcCB0aGUgaXRlbXMuXG4gICAgaWYgKGluZGV4QSAhPT0gaW5kZXhCKSB7XG4gICAgICB0ZW1wID0gYXJyYXlbaW5kZXhBXTtcbiAgICAgIGFycmF5W2luZGV4QV0gPSBhcnJheVtpbmRleEJdO1xuICAgICAgYXJyYXlbaW5kZXhCXSA9IHRlbXA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFjdGlvbkNhbmNlbCA9ICdjYW5jZWwnO1xuICB2YXIgYWN0aW9uRmluaXNoID0gJ2ZpbmlzaCc7XG4gIHZhciBkZWJvdW5jZVRpY2sgPSAnZGVib3VuY2UnO1xuICB2YXIgZGVib3VuY2VJZCA9IDA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgICogYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAgKiBOIG1pbGxpc2Vjb25kcy4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIGFjY2VwdHMgb25lIGFyZ3VtZW50IHdoaWNoLCB3aGVuXG4gICAqIGJlaW5nIFwiZmluaXNoXCIsIGNhbGxzIHRoZSBkZWJvdW5jZSBmdW5jdGlvbiBpbW1lZGlhdGVseSBpZiBpdCBpcyBjdXJyZW50bHlcbiAgICogd2FpdGluZyB0byBiZSBjYWxsZWQsIGFuZCB3aGVuIGJlaW5nIFwiY2FuY2VsXCIgY2FuY2VscyB0aGUgY3VycmVudGx5IHF1ZXVlZFxuICAgKiBmdW5jdGlvbiBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge051bWJlcn0gd2FpdFxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBkZWJvdW5jZShmbiwgd2FpdCkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHZhciB0aWNrZXJJZCA9ICsrZGVib3VuY2VJZCArIGRlYm91bmNlVGljaztcblxuICAgIGlmICh3YWl0ID4gMCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICBpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGlja2VyLmNhbmNlbCh0aWNrZXJJZCk7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gYWN0aW9uRmluaXNoKSBmbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gYWN0aW9uQ2FuY2VsICYmIGFjdGlvbiAhPT0gYWN0aW9uRmluaXNoKSB7XG4gICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRpY2tlci5hZGQodGlja2VySWQsIGZuLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICB9LCB3YWl0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICBpZiAoYWN0aW9uICE9PSBhY3Rpb25DYW5jZWwpIGZuKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZWxlbWVudCBpcyB0cmFuc2Zvcm1lZCwgZmFsc2UgaWYgbm90LiBJbiBwcmFjdGljZSB0aGVcbiAgICogZWxlbWVudCdzIGRpc3BsYXkgdmFsdWUgbXVzdCBiZSBhbnl0aGluZyBlbHNlIHRoYW4gXCJub25lXCIgb3IgXCJpbmxpbmVcIiBhc1xuICAgKiB3ZWxsIGFzIGhhdmUgYSB2YWxpZCB0cmFuc2Zvcm0gdmFsdWUgYXBwbGllZCBpbiBvcmRlciB0byBiZSBjb3VudGVkIGFzIGFcbiAgICogdHJhbnNmb3JtZWQgZWxlbWVudC5cbiAgICpcbiAgICogQm9ycm93ZWQgZnJvbSBNZXpyICh2MC42LjEpOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzcmFtby9tZXpyL2Jsb2IvMC42LjEvbWV6ci5qcyNMNjYxXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1RyYW5zZm9ybWVkKGVsZW1lbnQpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gZ2V0U3R5bGUoZWxlbWVudCwgJ3RyYW5zZm9ybScpO1xuICAgIGlmICghdHJhbnNmb3JtIHx8IHRyYW5zZm9ybSA9PT0gJ25vbmUnKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgZGlzcGxheSA9IGdldFN0eWxlKGVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgaWYgKGRpc3BsYXkgPT09ICdpbmxpbmUnIHx8IGRpc3BsYXkgPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhYnNvbHV0ZSBwb3NpdGlvbmVkIGVsZW1lbnQncyBjb250YWluaW5nIGJsb2NrLCB3aGljaCBpc1xuICAgKiBjb25zaWRlcmVkIHRvIGJlIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGVsZW1lbnQgdGhhdCB0aGUgdGFyZ2V0IGVsZW1lbnQnc1xuICAgKiBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0by4gRGlzY2xhaW1lcjogdGhpcyBvbmx5IHdvcmtzIGFzIGludGVuZGVkIGZvclxuICAgKiBhYnNvbHV0ZSBwb3NpdGlvbmVkIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luY2x1ZGVTZWxmPWZhbHNlXVxuICAgKiAgIC0gV2hlbiB0aGlzIGlzIHNldCB0byB0cnVlIHRoZSBjb250YWluaW5nIGJsb2NrIGNoZWNraW5nIGlzIHN0YXJ0ZWQgZnJvbVxuICAgKiAgICAgdGhlIHByb3ZpZGVkIGVsZW1lbnQuIE90aGVyd2lzZSB0aGUgY2hlY2tpbmcgaXMgc3RhcnRlZCBmcm9tIHRoZVxuICAgKiAgICAgcHJvdmlkZWQgZWxlbWVudCdzIHBhcmVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7KERvY3VtZW50fEVsZW1lbnQpfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQsIGluY2x1ZGVTZWxmKSB7XG4gICAgLy8gQXMgbG9uZyBhcyB0aGUgY29udGFpbmluZyBibG9jayBpcyBhbiBlbGVtZW50LCBzdGF0aWMgYW5kIG5vdFxuICAgIC8vIHRyYW5zZm9ybWVkLCB0cnkgdG8gZ2V0IHRoZSBlbGVtZW50J3MgcGFyZW50IGVsZW1lbnQgYW5kIGZhbGxiYWNrIHRvXG4gICAgLy8gZG9jdW1lbnQuIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXNyYW1vL21lenIvYmxvYi8wLjYuMS9tZXpyLmpzI0wzMzlcbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgdmFyIHJldCA9IChpbmNsdWRlU2VsZiA/IGVsZW1lbnQgOiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHx8IGRvY3VtZW50O1xuICAgIHdoaWxlIChyZXQgJiYgcmV0ICE9PSBkb2N1bWVudCAmJiBnZXRTdHlsZShyZXQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJyAmJiAhaXNUcmFuc2Zvcm1lZChyZXQpKSB7XG4gICAgICByZXQgPSByZXQucGFyZW50RWxlbWVudCB8fCBkb2N1bWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiBhbiBlbGVtZW50J3Mgc3R5bGUgcHJvcGVydHkgdHJhbnNmb3JtZWQgaW50b1xuICAgKiBhIGZsb2F0IHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlQXNGbG9hdChlbCwgc3R5bGUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChnZXRTdHlsZShlbCwgc3R5bGUpKSB8fCAwO1xuICB9XG5cbiAgdmFyIG9mZnNldEEgPSB7fTtcbiAgdmFyIG9mZnNldEIgPSB7fTtcbiAgdmFyIG9mZnNldERpZmYgPSB7fTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCdzIGRvY3VtZW50IG9mZnNldCwgd2hpY2ggaW4gcHJhY3RpY2UgbWVhbnMgdGhlIHZlcnRpY2FsXG4gICAqIGFuZCBob3Jpem9udGFsIGRpc3RhbmNlIGJldHdlZW4gdGhlIGVsZW1lbnQncyBub3J0aHdlc3QgY29ybmVyIGFuZCB0aGVcbiAgICogZG9jdW1lbnQncyBub3J0aHdlc3QgY29ybmVyLiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBhbHdheXMgcmV0dXJucyB0aGUgc2FtZVxuICAgKiBvYmplY3Qgc28gYmUgc3VyZSB0byByZWFkIHRoZSBkYXRhIGZyb20gaXQgaW5zdGVhZCB1c2luZyBpdCBhcyBhIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHsoRG9jdW1lbnR8RWxlbWVudHxXaW5kb3cpfSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb2Zmc2V0RGF0YV1cbiAgICogICAtIE9wdGlvbmFsIGRhdGEgb2JqZWN0IHdoZXJlIHRoZSBvZmZzZXQgZGF0YSB3aWxsIGJlIGluc2VydGVkIHRvLiBJZiBub3RcbiAgICogICAgIHByb3ZpZGVkIGEgbmV3IG9iamVjdCB3aWxsIGJlIGNyZWF0ZWQgZm9yIHRoZSByZXR1cm4gZGF0YS5cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldE9mZnNldChlbGVtZW50LCBvZmZzZXREYXRhKSB7XG4gICAgdmFyIHJldCA9IG9mZnNldERhdGEgfHwge307XG4gICAgdmFyIHJlY3Q7XG5cbiAgICAvLyBTZXQgdXAgcmV0dXJuIGRhdGEuXG4gICAgcmV0LmxlZnQgPSAwO1xuICAgIHJldC50b3AgPSAwO1xuXG4gICAgLy8gRG9jdW1lbnQncyBvZmZzZXRzIGFyZSBhbHdheXMgMC5cbiAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQpIHJldHVybiByZXQ7XG5cbiAgICAvLyBBZGQgdmlld3BvcnQgc2Nyb2xsIGxlZnQvdG9wIHRvIHRoZSByZXNwZWN0aXZlIG9mZnNldHMuXG4gICAgcmV0LmxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgMDtcbiAgICByZXQudG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IDA7XG5cbiAgICAvLyBXaW5kb3cncyBvZmZzZXRzIGFyZSB0aGUgdmlld3BvcnQgc2Nyb2xsIGxlZnQvdG9wIHZhbHVlcy5cbiAgICBpZiAoZWxlbWVudC5zZWxmID09PSB3aW5kb3cuc2VsZikgcmV0dXJuIHJldDtcblxuICAgIC8vIEFkZCBlbGVtZW50J3MgY2xpZW50IHJlY3RzIHRvIHRoZSBvZmZzZXRzLlxuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldC5sZWZ0ICs9IHJlY3QubGVmdDtcbiAgICByZXQudG9wICs9IHJlY3QudG9wO1xuXG4gICAgLy8gRXhjbHVkZSBlbGVtZW50J3MgYm9yZGVycyBmcm9tIHRoZSBvZmZzZXQuXG4gICAgcmV0LmxlZnQgKz0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItbGVmdC13aWR0aCcpO1xuICAgIHJldC50b3AgKz0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItdG9wLXdpZHRoJyk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgb2Zmc2V0IGRpZmZlcmVuY2UgdHdvIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtQVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtQlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjb21wYXJlQ29udGFpbmluZ0Jsb2Nrcz1mYWxzZV1cbiAgICogICAtIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSB0aGUgY29udGFpbmluZyBibG9ja3Mgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRzXG4gICAqICAgICB3aWxsIGJlIHVzZWQgZm9yIGNhbGN1bGF0aW5nIHRoZSBkaWZmZXJlbmNlLiBPdGhlcndpc2UgdGhlIHByb3ZpZGVkXG4gICAqICAgICBlbGVtZW50cyB3aWxsIGJlIGNvbXBhcmVkIGRpcmVjdGx5LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0RGlmZihlbGVtQSwgZWxlbUIsIGNvbXBhcmVDb250YWluaW5nQmxvY2tzKSB7XG4gICAgb2Zmc2V0RGlmZi5sZWZ0ID0gMDtcbiAgICBvZmZzZXREaWZmLnRvcCA9IDA7XG5cbiAgICAvLyBJZiBlbGVtZW50cyBhcmUgc2FtZSBsZXQncyByZXR1cm4gZWFybHkuXG4gICAgaWYgKGVsZW1BID09PSBlbGVtQikgcmV0dXJuIG9mZnNldERpZmY7XG5cbiAgICAvLyBDb21wYXJlIGNvbnRhaW5pbmcgYmxvY2tzIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoY29tcGFyZUNvbnRhaW5pbmdCbG9ja3MpIHtcbiAgICAgIGVsZW1BID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1BLCB0cnVlKTtcbiAgICAgIGVsZW1CID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1CLCB0cnVlKTtcblxuICAgICAgLy8gSWYgY29udGFpbmluZyBibG9ja3MgYXJlIGlkZW50aWNhbCwgbGV0J3MgcmV0dXJuIGVhcmx5LlxuICAgICAgaWYgKGVsZW1BID09PSBlbGVtQikgcmV0dXJuIG9mZnNldERpZmY7XG4gICAgfVxuXG4gICAgLy8gRmluYWxseSwgbGV0J3MgY2FsY3VsYXRlIHRoZSBvZmZzZXQgZGlmZi5cbiAgICBnZXRPZmZzZXQoZWxlbUEsIG9mZnNldEEpO1xuICAgIGdldE9mZnNldChlbGVtQiwgb2Zmc2V0Qik7XG4gICAgb2Zmc2V0RGlmZi5sZWZ0ID0gb2Zmc2V0Qi5sZWZ0IC0gb2Zmc2V0QS5sZWZ0O1xuICAgIG9mZnNldERpZmYudG9wID0gb2Zmc2V0Qi50b3AgLSBvZmZzZXRBLnRvcDtcblxuICAgIHJldHVybiBvZmZzZXREaWZmO1xuICB9XG5cbiAgdmFyIHN0eWxlT3ZlcmZsb3cgPSAnb3ZlcmZsb3cnO1xuICB2YXIgc3R5bGVPdmVyZmxvd1ggPSAnb3ZlcmZsb3cteCc7XG4gIHZhciBzdHlsZU92ZXJmbG93WSA9ICdvdmVyZmxvdy15JztcbiAgdmFyIG92ZXJmbG93QXV0byA9ICdhdXRvJztcbiAgdmFyIG92ZXJmbG93U2Nyb2xsID0gJ3Njcm9sbCc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtZW50KSB7XG4gICAgdmFyIG92ZXJmbG93ID0gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVPdmVyZmxvdyk7XG4gICAgaWYgKG92ZXJmbG93ID09PSBvdmVyZmxvd0F1dG8gfHwgb3ZlcmZsb3cgPT09IG92ZXJmbG93U2Nyb2xsKSByZXR1cm4gdHJ1ZTtcblxuICAgIG92ZXJmbG93ID0gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVPdmVyZmxvd1gpO1xuICAgIGlmIChvdmVyZmxvdyA9PT0gb3ZlcmZsb3dBdXRvIHx8IG92ZXJmbG93ID09PSBvdmVyZmxvd1Njcm9sbCkgcmV0dXJuIHRydWU7XG5cbiAgICBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3dZKTtcbiAgICBpZiAob3ZlcmZsb3cgPT09IG92ZXJmbG93QXV0byB8fCBvdmVyZmxvdyA9PT0gb3ZlcmZsb3dTY3JvbGwpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3QgZWxlbWVudCdzIGFuY2VzdG9ycyB0aGF0IGFyZSBwb3RlbnRpYWxseSBzY3JvbGxhYmxlIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luY2x1ZGVTZWxmPWZhbHNlXVxuICAgKiBAcGFyYW0ge0FycmF5fSBbZGF0YV1cbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyhlbGVtZW50LCBpbmNsdWRlU2VsZiwgZGF0YSkge1xuICAgIHZhciByZXQgPSBkYXRhIHx8IFtdO1xuICAgIHZhciBwYXJlbnQgPSBpbmNsdWRlU2VsZiA/IGVsZW1lbnQgOiBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAvLyBGaW5kIHNjcm9sbCBwYXJlbnRzLlxuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgLy8gSWYgZWxlbWVudCBpcyBpbnNpZGUgU2hhZG93RE9NIGxldCdzIGdldCBpdCdzIGhvc3Qgbm9kZSBmcm9tIHRoZSByZWFsXG4gICAgICAvLyBET00gYW5kIGNvbnRpbnVlIGxvb3BpbmcuXG4gICAgICBpZiAocGFyZW50LmdldFJvb3ROb2RlICYmIHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LmdldFJvb3ROb2RlKCkuaG9zdDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSBsZXQncyBhZGQgaXQgdG8gdGhlIHNjcm9sbGFibGUgbGlzdC5cbiAgICAgIGlmIChpc1Njcm9sbGFibGUocGFyZW50KSkge1xuICAgICAgICByZXQucHVzaChwYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgYWRkIHdpbmRvdyB0byB0aGUgcmVzdWx0cy5cbiAgICByZXQucHVzaCh3aW5kb3cpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGVWYWx1ZSA9IHt9O1xuICB2YXIgdHJhbnNmb3JtU3R5bGUkMiA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgdHJhbnNmb3JtTm9uZSA9ICdub25lJztcbiAgdmFyIHJ4TWF0M2QgPSAvXm1hdHJpeDNkLztcbiAgdmFyIHJ4TWF0VHggPSAvKFteLF0qLCl7NH0vO1xuICB2YXIgcnhNYXQzZFR4ID0gLyhbXixdKiwpezEyfS87XG4gIHZhciByeE5leHRJdGVtID0gL1teLF0qLC87XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQncyBjb21wdXRlZCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHZhbHVlcyBhcyBhIGZsb2F0cy5cbiAgICogVGhlIHJldHVybmVkIG9iamVjdCBpcyBhbHdheXMgdGhlIHNhbWUgb2JqZWN0IGFuZCB1cGRhdGVkIGV2ZXJ5IHRpbWUgdGhpc1xuICAgKiBmdW5jdGlvbiBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbGVtZW50KSB7XG4gICAgdHJhbnNsYXRlVmFsdWUueCA9IDA7XG4gICAgdHJhbnNsYXRlVmFsdWUueSA9IDA7XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gZ2V0U3R5bGUoZWxlbWVudCwgdHJhbnNmb3JtU3R5bGUkMik7XG4gICAgaWYgKCF0cmFuc2Zvcm0gfHwgdHJhbnNmb3JtID09PSB0cmFuc2Zvcm1Ob25lKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIHN0eWxlIGNhbiBiZSBpbiBlaXRoZXIgbWF0cml4M2QoLi4uKSBvciBtYXRyaXgoLi4uKS5cbiAgICB2YXIgaXNNYXQzZCA9IHJ4TWF0M2QudGVzdCh0cmFuc2Zvcm0pO1xuICAgIHZhciB0WCA9IHRyYW5zZm9ybS5yZXBsYWNlKGlzTWF0M2QgPyByeE1hdDNkVHggOiByeE1hdFR4LCAnJyk7XG4gICAgdmFyIHRZID0gdFgucmVwbGFjZShyeE5leHRJdGVtLCAnJyk7XG5cbiAgICB0cmFuc2xhdGVWYWx1ZS54ID0gcGFyc2VGbG9hdCh0WCkgfHwgMDtcbiAgICB0cmFuc2xhdGVWYWx1ZS55ID0gcGFyc2VGbG9hdCh0WSkgfHwgMDtcblxuICAgIHJldHVybiB0cmFuc2xhdGVWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZSBpbnRvIENTUyB0cmFuc2Zvcm0gc3R5bGVcbiAgICogcHJvcGVydHkncyB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFRyYW5zbGF0ZVN0cmluZyh4LCB5KSB7XG4gICAgcmV0dXJuICd0cmFuc2xhdGVYKCcgKyB4ICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB5ICsgJ3B4KSc7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNsYXNzIGZyb20gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudE1hdGNoZXMoZWxlbWVudCwgJy4nICsgY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJylcbiAgICAgICAgICAucmVwbGFjZSgnICcgKyBjbGFzc05hbWUgKyAnICcsICcgJylcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERyYWcgc3RhcnQgcHJlZGljYXRlIHN0YXRlcy5cbiAgdmFyIHN0YXJ0UHJlZGljYXRlSW5hY3RpdmUgPSAwO1xuICB2YXIgc3RhcnRQcmVkaWNhdGVQZW5kaW5nID0gMTtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQgPSAyO1xuICB2YXIgc3RhcnRQcmVkaWNhdGVSZWplY3RlZCA9IDM7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG91Y2ggaW50ZXJhY3Rpb24gdG8gYW4gaXRlbS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbURyYWcoaXRlbSkge1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fZ3JpZElkID0gZ3JpZC5faWQ7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGZhbHNlO1xuXG4gICAgLy8gU3RhcnQgcHJlZGljYXRlIGRhdGEuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGUgPSBpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZSlcbiAgICAgID8gc2V0dGluZ3MuZHJhZ1N0YXJ0UHJlZGljYXRlXG4gICAgICA6IEl0ZW1EcmFnLmRlZmF1bHRTdGFydFByZWRpY2F0ZTtcbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZTtcbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIERhdGEgZm9yIGRyYWcgc29ydCBwcmVkaWNhdGUgaGV1cmlzdGljcy5cbiAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9oWDEgPSAwO1xuICAgIHRoaXMuX2hYMiA9IDA7XG4gICAgdGhpcy5faFkxID0gMDtcbiAgICB0aGlzLl9oWTIgPSAwO1xuXG4gICAgLy8gU2V0dXAgaXRlbSdzIGluaXRpYWwgZHJhZyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBCaW5kIHRoZSBtZXRob2RzIHRoYXQgbmVlZHMgYmluZGluZy5cbiAgICB0aGlzLl9wcmVTdGFydENoZWNrID0gdGhpcy5fcHJlU3RhcnRDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZUVuZENoZWNrID0gdGhpcy5fcHJlRW5kQ2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblNjcm9sbCA9IHRoaXMuX29uU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcHJlcGFyZU1vdmUgPSB0aGlzLl9wcmVwYXJlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2FwcGx5TW92ZSA9IHRoaXMuX2FwcGx5TW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZXBhcmVTY3JvbGwgPSB0aGlzLl9wcmVwYXJlU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYXBwbHlTY3JvbGwgPSB0aGlzLl9hcHBseVNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2NoZWNrT3ZlcmxhcCA9IHRoaXMuX2NoZWNrT3ZlcmxhcC5iaW5kKHRoaXMpO1xuXG4gICAgLy8gQ3JlYXRlIGRlYm91bmNlIG92ZXJsYXAgY2hlY2tlciBmdW5jdGlvbi5cbiAgICB2YXIgc29ydEludGVydmFsID0gc2V0dGluZ3MuZHJhZ1NvcnRIZXVyaXN0aWNzLnNvcnRJbnRlcnZhbDtcbiAgICB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSA9IGRlYm91bmNlKHRoaXMuX2NoZWNrT3ZlcmxhcCwgc29ydEludGVydmFsKTtcblxuICAgIC8vIEluaXQgZHJhZ2dlci5cbiAgICB0aGlzLl9kcmFnZ2VyID0gbmV3IERyYWdnZXIoZWxlbWVudCwgc2V0dGluZ3MuZHJhZ0Nzc1Byb3BzKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdzdGFydCcsIHRoaXMuX3ByZVN0YXJ0Q2hlY2spO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ21vdmUnLCB0aGlzLl9wcmVTdGFydENoZWNrKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdjYW5jZWwnLCB0aGlzLl9wcmVFbmRDaGVjayk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignZW5kJywgdGhpcy5fcHJlRW5kQ2hlY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBzdGF0aWMgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZHJhZyBzdGFydCBwcmVkaWNhdGUgaGFuZGxlciB0aGF0IGhhbmRsZXMgYW5jaG9yIGVsZW1lbnRzXG4gICAqIGdyYWNlZnVsbHkuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpcyBmdW5jdGlvbiBkZWZpbmVzIGlmIHRoZSBkcmFnIGlzXG4gICAqIHN0YXJ0ZWQsIHJlamVjdGVkIG9yIHBlbmRpbmcuIFdoZW4gdHJ1ZSBpcyByZXR1cm5lZCB0aGUgZHJhZ2dpbmcgaXMgc3RhcnRlZFxuICAgKiBhbmQgd2hlbiBmYWxzZSBpcyByZXR1cm5lZCB0aGUgZHJhZ2dpbmcgaXMgcmVqZWN0ZWQuIElmIG5vdGhpbmcgaXMgcmV0dXJuZWRcbiAgICogdGhlIHByZWRpY2F0ZSB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBvbiB0aGUgbmV4dCBkcmFnIG1vdmVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogICAtIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIHRvIHBhc3MgdGhlIHByZWRpY2F0ZVxuICAgKiAgICAgaXQncyBvcHRpb25zIG1hbnVhbGx5LiBCeSBkZWZhdWx0IHRoZSBwcmVkaWNhdGUgcmV0cmlldmVzIHRoZSBvcHRpb25zXG4gICAqICAgICBmcm9tIHRoZSBncmlkJ3Mgc2V0dGluZ3MuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcuZGVmYXVsdFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oaXRlbSwgZXZlbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgZHJhZyA9IGl0ZW0uX2RyYWc7XG4gICAgdmFyIHByZWRpY2F0ZSA9IGRyYWcuX3N0YXJ0UHJlZGljYXRlRGF0YSB8fCBkcmFnLl9zZXR1cFN0YXJ0UHJlZGljYXRlKG9wdGlvbnMpO1xuXG4gICAgLy8gRmluYWwgZXZlbnQgbG9naWMuIEF0IHRoaXMgc3RhZ2UgcmV0dXJuIHZhbHVlIGRvZXMgbm90IG1hdHRlciBhbnltb3JlLFxuICAgIC8vIHRoZSBwcmVkaWNhdGUgaXMgZWl0aGVyIHJlc29sdmVkIG9yIGl0J3Mgbm90IGFuZCB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cbiAgICAvLyBhYm91dCBpdC4gSGVyZSB3ZSBqdXN0IHJlc2V0IGRhdGEgYW5kIGlmIHRoZSBpdGVtIGVsZW1lbnQgaXMgYSBsaW5rXG4gICAgLy8gd2UgZm9sbG93IGl0IChpZiB0aGVyZSBoYXMgb25seSBiZWVuIHNsaWdodCBtb3ZlbWVudCkuXG4gICAgaWYgKGV2ZW50LmlzRmluYWwpIHtcbiAgICAgIGRyYWcuX2ZpbmlzaFN0YXJ0UHJlZGljYXRlKGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGFuZCBzdG9yZSB0aGUgaGFuZGxlIGVsZW1lbnQgc28gd2UgY2FuIGNoZWNrIGxhdGVyIG9uIGlmIHRoZVxuICAgIC8vIGN1cnNvciBpcyB3aXRoaW4gdGhlIGhhbmRsZS4gSWYgd2UgaGF2ZSBhIGhhbmRsZSBzZWxlY3RvciBsZXQncyBmaW5kXG4gICAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudC4gT3RoZXJ3aXNlIGxldCdzIHVzZSB0aGUgaXRlbSBlbGVtZW50IGFzIHRoZVxuICAgIC8vIGhhbmRsZS5cbiAgICBpZiAoIXByZWRpY2F0ZS5oYW5kbGVFbGVtZW50KSB7XG4gICAgICBwcmVkaWNhdGUuaGFuZGxlRWxlbWVudCA9IGRyYWcuX2dldFN0YXJ0UHJlZGljYXRlSGFuZGxlKGV2ZW50KTtcbiAgICAgIGlmICghcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiBkZWxheSBpcyBkZWZpbmVkIGxldCdzIGtlZXAgdHJhY2sgb2YgdGhlIGxhdGVzdCBldmVudCBhbmQgaW5pdGlhdGVcbiAgICAvLyBkZWxheSBpZiBpdCBoYXMgbm90IGJlZW4gZG9uZSB5ZXQuXG4gICAgaWYgKHByZWRpY2F0ZS5kZWxheSkge1xuICAgICAgcHJlZGljYXRlLmV2ZW50ID0gZXZlbnQ7XG4gICAgICBpZiAoIXByZWRpY2F0ZS5kZWxheVRpbWVyKSB7XG4gICAgICAgIHByZWRpY2F0ZS5kZWxheVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcHJlZGljYXRlLmRlbGF5ID0gMDtcbiAgICAgICAgICBpZiAoZHJhZy5fcmVzb2x2ZVN0YXJ0UHJlZGljYXRlKHByZWRpY2F0ZS5ldmVudCkpIHtcbiAgICAgICAgICAgIGRyYWcuX2ZvcmNlUmVzb2x2ZVN0YXJ0UHJlZGljYXRlKHByZWRpY2F0ZS5ldmVudCk7XG4gICAgICAgICAgICBkcmFnLl9yZXNldFN0YXJ0UHJlZGljYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBwcmVkaWNhdGUuZGVsYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcmFnLl9yZXNvbHZlU3RhcnRQcmVkaWNhdGUoZXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRyYWcgc29ydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy50aHJlc2hvbGQ9NTBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5hY3Rpb249J21vdmUnXVxuICAgKiBAcmV0dXJucyB7KEJvb2xlYW58RHJhZ1NvcnRDb21tYW5kKX1cbiAgICogICAtIFJldHVybnMgZmFsc2UgaWYgbm8gdmFsaWQgaW5kZXggd2FzIGZvdW5kLiBPdGhlcndpc2UgcmV0dXJucyBkcmFnIHNvcnRcbiAgICogICAgIGNvbW1hbmQuXG4gICAqL1xuICBJdGVtRHJhZy5kZWZhdWx0U29ydFByZWRpY2F0ZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbVJlY3QgPSB7fTtcbiAgICB2YXIgdGFyZ2V0UmVjdCA9IHt9O1xuICAgIHZhciByZXR1cm5EYXRhID0ge307XG4gICAgdmFyIHJvb3RHcmlkQXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGdldFRhcmdldEdyaWQoaXRlbSwgcm9vdEdyaWQsIHRocmVzaG9sZCkge1xuICAgICAgdmFyIHRhcmdldCA9IG51bGw7XG4gICAgICB2YXIgZHJhZ1NvcnQgPSByb290R3JpZC5fc2V0dGluZ3MuZHJhZ1NvcnQ7XG4gICAgICB2YXIgYmVzdFNjb3JlID0gLTE7XG4gICAgICB2YXIgZ3JpZFNjb3JlO1xuICAgICAgdmFyIGdyaWRzO1xuICAgICAgdmFyIGdyaWQ7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gR2V0IHBvdGVudGlhbCB0YXJnZXQgZ3JpZHMuXG4gICAgICBpZiAoZHJhZ1NvcnQgPT09IHRydWUpIHtcbiAgICAgICAgcm9vdEdyaWRBcnJheVswXSA9IHJvb3RHcmlkO1xuICAgICAgICBncmlkcyA9IHJvb3RHcmlkQXJyYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkcyA9IGRyYWdTb3J0LmNhbGwocm9vdEdyaWQsIGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIGdyaWRzLlxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGdyaWRzKSkgcmV0dXJuIHRhcmdldDtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBncmlkcyBhbmQgZ2V0IHRoZSBiZXN0IG1hdGNoLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdyaWQgPSBncmlkc1tpXTtcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IGFsbCBkZXN0cm95ZWQgZ3JpZHMuXG4gICAgICAgIGlmIChncmlkLl9pc0Rlc3Ryb3llZCkgY29udGludWU7XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgdGhlIGdyaWQncyBvZmZzZXRzIGFuZCBkaW1lbnNpb25zIHNpbmNlIHRoZXkgbWlnaHRcbiAgICAgICAgLy8gaGF2ZSBjaGFuZ2VkIChlLmcgZHVyaW5nIHNjcm9sbGluZykuXG4gICAgICAgIGdyaWQuX3VwZGF0ZUJvdW5kaW5nUmVjdCgpO1xuXG4gICAgICAgIC8vIENoZWNrIGhvdyBtdWNoIGRyYWdnZWQgZWxlbWVudCBvdmVybGFwcyB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAgICAgIHRhcmdldFJlY3Qud2lkdGggPSBncmlkLl93aWR0aDtcbiAgICAgICAgdGFyZ2V0UmVjdC5oZWlnaHQgPSBncmlkLl9oZWlnaHQ7XG4gICAgICAgIHRhcmdldFJlY3QubGVmdCA9IGdyaWQuX2xlZnQ7XG4gICAgICAgIHRhcmdldFJlY3QudG9wID0gZ3JpZC5fdG9wO1xuICAgICAgICBncmlkU2NvcmUgPSBnZXRSZWN0T3ZlcmxhcFNjb3JlKGl0ZW1SZWN0LCB0YXJnZXRSZWN0KTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGdyaWQgaXMgdGhlIGJlc3QgbWF0Y2ggc28gZmFyLlxuICAgICAgICBpZiAoZ3JpZFNjb3JlID4gdGhyZXNob2xkICYmIGdyaWRTY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgIGJlc3RTY29yZSA9IGdyaWRTY29yZTtcbiAgICAgICAgICB0YXJnZXQgPSBncmlkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFsd2F5cyByZXNldCByb290IGdyaWQgYXJyYXkuXG4gICAgICByb290R3JpZEFycmF5Lmxlbmd0aCA9IDA7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0sIG9wdGlvbnMpIHtcbiAgICAgIHZhciBkcmFnID0gaXRlbS5fZHJhZztcbiAgICAgIHZhciByb290R3JpZCA9IGRyYWcuX2dldEdyaWQoKTtcblxuICAgICAgLy8gR2V0IGRyYWcgc29ydCBwcmVkaWNhdGUgc2V0dGluZ3MuXG4gICAgICB2YXIgc29ydFRocmVzaG9sZCA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMudGhyZXNob2xkID09PSAnbnVtYmVyJyA/IG9wdGlvbnMudGhyZXNob2xkIDogNTA7XG4gICAgICB2YXIgc29ydEFjdGlvbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5hY3Rpb24gPT09IGFjdGlvblN3YXAgPyBhY3Rpb25Td2FwIDogYWN0aW9uTW92ZTtcblxuICAgICAgLy8gUG9wdWxhdGUgaXRlbSByZWN0IGRhdGEuXG4gICAgICBpdGVtUmVjdC53aWR0aCA9IGl0ZW0uX3dpZHRoO1xuICAgICAgaXRlbVJlY3QuaGVpZ2h0ID0gaXRlbS5faGVpZ2h0O1xuICAgICAgaXRlbVJlY3QubGVmdCA9IGRyYWcuX2VsZW1lbnRDbGllbnRYO1xuICAgICAgaXRlbVJlY3QudG9wID0gZHJhZy5fZWxlbWVudENsaWVudFk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdGFyZ2V0IGdyaWQuXG4gICAgICB2YXIgZ3JpZCA9IGdldFRhcmdldEdyaWQoaXRlbSwgcm9vdEdyaWQsIHNvcnRUaHJlc2hvbGQpO1xuXG4gICAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UgZm91bmQgbm8gZ3JpZCBjb250YWluZXIgZWxlbWVudCB0aGF0IG92ZXJsYXBzIHRoZVxuICAgICAgLy8gZHJhZ2dlZCBpdGVtIGVub3VnaC5cbiAgICAgIGlmICghZ3JpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB2YXIgZ3JpZE9mZnNldExlZnQgPSAwO1xuICAgICAgdmFyIGdyaWRPZmZzZXRUb3AgPSAwO1xuICAgICAgdmFyIG1hdGNoU2NvcmUgPSAtMTtcbiAgICAgIHZhciBtYXRjaEluZGV4O1xuICAgICAgdmFyIGhhc1ZhbGlkVGFyZ2V0cztcbiAgICAgIHZhciB0YXJnZXQ7XG4gICAgICB2YXIgc2NvcmU7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gSWYgaXRlbSBpcyBtb3ZlZCB3aXRoaW4gaXQncyBvcmlnaW5hdGluZyBncmlkIGFkanVzdCBpdGVtJ3MgbGVmdCBhbmRcbiAgICAgIC8vIHRvcCBwcm9wcy4gT3RoZXJ3aXNlIGlmIGl0ZW0gaXMgbW92ZWQgdG8vd2l0aGluIGFub3RoZXIgZ3JpZCBnZXQgdGhlXG4gICAgICAvLyBjb250YWluZXIgZWxlbWVudCdzIG9mZnNldCAoZnJvbSB0aGUgZWxlbWVudCdzIGNvbnRlbnQgZWRnZSkuXG4gICAgICBpZiAoZ3JpZCA9PT0gcm9vdEdyaWQpIHtcbiAgICAgICAgaXRlbVJlY3QubGVmdCA9IGRyYWcuX2dyaWRYICsgaXRlbS5fbWFyZ2luTGVmdDtcbiAgICAgICAgaXRlbVJlY3QudG9wID0gZHJhZy5fZ3JpZFkgKyBpdGVtLl9tYXJnaW5Ub3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkLl91cGRhdGVCb3JkZXJzKDEsIDAsIDEsIDApO1xuICAgICAgICBncmlkT2Zmc2V0TGVmdCA9IGdyaWQuX2xlZnQgKyBncmlkLl9ib3JkZXJMZWZ0O1xuICAgICAgICBncmlkT2Zmc2V0VG9wID0gZ3JpZC5fdG9wICsgZ3JpZC5fYm9yZGVyVG9wO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHRhcmdldCBncmlkIGl0ZW1zIGFuZCB0cnkgdG8gZmluZCB0aGUgYmVzdCBtYXRjaC5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YXJnZXQgPSBncmlkLl9pdGVtc1tpXTtcblxuICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGl0ZW0gaXMgbm90IGFjdGl2ZSBvciB0aGUgdGFyZ2V0IGl0ZW0gaXMgdGhlIGRyYWdnZWRcbiAgICAgICAgLy8gaXRlbSBsZXQncyBza2lwIHRvIHRoZSBuZXh0IGl0ZW0uXG4gICAgICAgIGlmICghdGFyZ2V0Ll9pc0FjdGl2ZSB8fCB0YXJnZXQgPT09IGl0ZW0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1hcmsgdGhlIGdyaWQgYXMgaGF2aW5nIHZhbGlkIHRhcmdldCBpdGVtcy5cbiAgICAgICAgaGFzVmFsaWRUYXJnZXRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHRhcmdldCdzIG92ZXJsYXAgc2NvcmUgd2l0aCB0aGUgZHJhZ2dlZCBpdGVtLlxuICAgICAgICB0YXJnZXRSZWN0LndpZHRoID0gdGFyZ2V0Ll93aWR0aDtcbiAgICAgICAgdGFyZ2V0UmVjdC5oZWlnaHQgPSB0YXJnZXQuX2hlaWdodDtcbiAgICAgICAgdGFyZ2V0UmVjdC5sZWZ0ID0gdGFyZ2V0Ll9sZWZ0ICsgdGFyZ2V0Ll9tYXJnaW5MZWZ0ICsgZ3JpZE9mZnNldExlZnQ7XG4gICAgICAgIHRhcmdldFJlY3QudG9wID0gdGFyZ2V0Ll90b3AgKyB0YXJnZXQuX21hcmdpblRvcCArIGdyaWRPZmZzZXRUb3A7XG4gICAgICAgIHNjb3JlID0gZ2V0UmVjdE92ZXJsYXBTY29yZShpdGVtUmVjdCwgdGFyZ2V0UmVjdCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGJlc3QgbWF0Y2ggaW5kZXggYW5kIHNjb3JlIGlmIHRoZSB0YXJnZXQncyBvdmVybGFwIHNjb3JlIHdpdGhcbiAgICAgICAgLy8gdGhlIGRyYWdnZWQgaXRlbSBpcyBoaWdoZXIgdGhhbiB0aGUgY3VycmVudCBiZXN0IG1hdGNoIHNjb3JlLlxuICAgICAgICBpZiAoc2NvcmUgPiBtYXRjaFNjb3JlKSB7XG4gICAgICAgICAgbWF0Y2hJbmRleCA9IGk7XG4gICAgICAgICAgbWF0Y2hTY29yZSA9IHNjb3JlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHZhbGlkIG1hdGNoIGFuZCB0aGUgaXRlbSBpcyBiZWluZyBtb3ZlZCBpbnRvIGFub3RoZXJcbiAgICAgIC8vIGdyaWQuXG4gICAgICBpZiAobWF0Y2hTY29yZSA8IHNvcnRUaHJlc2hvbGQgJiYgaXRlbS5nZXRHcmlkKCkgIT09IGdyaWQpIHtcbiAgICAgICAgbWF0Y2hJbmRleCA9IGhhc1ZhbGlkVGFyZ2V0cyA/IC0xIDogMDtcbiAgICAgICAgbWF0Y2hTY29yZSA9IEluZmluaXR5O1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgYmVzdCBtYXRjaCBvdmVybGFwcyBlbm91Z2ggdG8ganVzdGlmeSBhIHBsYWNlbWVudCBzd2l0Y2guXG4gICAgICBpZiAobWF0Y2hTY29yZSA+PSBzb3J0VGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybkRhdGEuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHJldHVybkRhdGEuaW5kZXggPSBtYXRjaEluZGV4O1xuICAgICAgICByZXR1cm5EYXRhLmFjdGlvbiA9IHNvcnRBY3Rpb247XG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQWJvcnQgZHJhZ2dpbmcgYW5kIHJlc2V0IGRyYWcgZGF0YS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtRHJhZ31cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcblxuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgYmVpbmcgZHJvcHBlZCBpbnRvIGFub3RoZXIgZ3JpZCwgZmluaXNoIGl0IHVwIGFuZCByZXR1cm5cbiAgICAvLyBpbW1lZGlhdGVseS5cbiAgICBpZiAodGhpcy5faXNNaWdyYXRpbmcpIHtcbiAgICAgIHRoaXMuX2ZpbmlzaE1pZ3JhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCBtb3ZlIGFuZCBzY3JvbGwgdGlja3MuXG4gICAgY2FuY2VsTW92ZVRpY2soaXRlbS5faWQpO1xuICAgIGNhbmNlbFNjcm9sbFRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gUmVtb3ZlIHNjcm9sbCBsaXN0ZW5lcnMuXG4gICAgdGhpcy5fdW5iaW5kU2Nyb2xsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBDYW5jZWwgb3ZlcmxhcCBjaGVjay5cbiAgICB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgnY2FuY2VsJyk7XG5cbiAgICAvLyBBcHBlbmQgaXRlbSBlbGVtZW50IHRvIHRoZSBjb250YWluZXIgaWYgaXQncyBub3QgaXQncyBjaGlsZC4gQWxzbyBtYWtlXG4gICAgLy8gc3VyZSB0aGUgdHJhbnNsYXRlIHZhbHVlcyBhcmUgYWRqdXN0ZWQgdG8gYWNjb3VudCBmb3IgdGhlIERPTSBzaGlmdC5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBncmlkLl9lbGVtZW50KSB7XG4gICAgICBncmlkLl9lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9ncmlkWCwgdGhpcy5fZ3JpZFkpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBncmlkLl9zZXR0aW5ncy5pdGVtRHJhZ2dpbmdDbGFzcyk7XG5cbiAgICAvLyBSZXNldCBkcmFnIGRhdGEuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1EcmFnfVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2RyYWdnZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7P0dyaWR9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2dldEdyaWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ3JpZEluc3RhbmNlc1t0aGlzLl9ncmlkSWRdIHx8IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwL3Jlc2V0IGRyYWcgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIElzIGl0ZW0gYmVpbmcgZHJhZ2dlZD9cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLy8gVGhlIGRyYWdnZWQgaXRlbSdzIGNvbnRhaW5lciBlbGVtZW50LlxuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG5cbiAgICAvLyBUaGUgZHJhZ2dlZCBpdGVtJ3MgY29udGFpbmluZyBibG9jay5cbiAgICB0aGlzLl9jb250YWluaW5nQmxvY2sgPSBudWxsO1xuXG4gICAgLy8gRHJhZy9zY3JvbGwgZXZlbnQgZGF0YS5cbiAgICB0aGlzLl9kcmFnRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX3Njcm9sbEV2ZW50ID0gbnVsbDtcblxuICAgIC8vIEFsbCB0aGUgZWxlbWVudHMgd2hpY2ggbmVlZCB0byBiZSBsaXN0ZW5lZCBmb3Igc2Nyb2xsIGV2ZW50cyBkdXJpbmdcbiAgICAvLyBkcmFnZ2luZy5cbiAgICB0aGlzLl9zY3JvbGxlcnMgPSBbXTtcblxuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZVgvdHJhbnNsYXRlWSBwb3NpdGlvbi5cbiAgICB0aGlzLl9sZWZ0ID0gMDtcbiAgICB0aGlzLl90b3AgPSAwO1xuXG4gICAgLy8gRHJhZ2dlZCBlbGVtZW50J3MgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gdGhlIGdyaWQuXG4gICAgdGhpcy5fZ3JpZFggPSAwO1xuICAgIHRoaXMuX2dyaWRZID0gMDtcblxuICAgIC8vIERyYWdnZWQgZWxlbWVudCdzIGN1cnJlbnQgb2Zmc2V0IGZyb20gd2luZG93J3Mgbm9ydGh3ZXN0IGNvcm5lci4gRG9lc1xuICAgIC8vIG5vdCBhY2NvdW50IGZvciBlbGVtZW50J3MgbWFyZ2lucy5cbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WCA9IDA7XG4gICAgdGhpcy5fZWxlbWVudENsaWVudFkgPSAwO1xuXG4gICAgLy8gT2Zmc2V0IGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZHJhZ2dlZCBlbGVtZW50J3MgdGVtcG9yYXJ5IGRyYWdcbiAgICAvLyBjb250YWluZXIgYW5kIGl0J3Mgb3JpZ2luYWwgY29udGFpbmVyLlxuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgdG8gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3IgZWxlbWVudHMgb2YgdGhlXG4gICAqIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fYmluZFNjcm9sbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gdGhpcy5fZ2V0R3JpZCgpLl9lbGVtZW50O1xuICAgIHZhciBkcmFnQ29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xuICAgIHZhciBzY3JvbGxlcnMgPSB0aGlzLl9zY3JvbGxlcnM7XG4gICAgdmFyIGdyaWRTY3JvbGxlcnM7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBHZXQgZHJhZ2dlZCBlbGVtZW50J3Mgc2Nyb2xsaW5nIHBhcmVudHMuXG4gICAgc2Nyb2xsZXJzLmxlbmd0aCA9IDA7XG4gICAgZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyh0aGlzLl9pdGVtLl9lbGVtZW50LCBmYWxzZSwgc2Nyb2xsZXJzKTtcblxuICAgIC8vIElmIGRyYWcgY29udGFpbmVyIGlzIGRlZmluZWQgYW5kIGl0J3Mgbm90IHRoZSBzYW1lIGVsZW1lbnQgYXMgZ3JpZFxuICAgIC8vIGNvbnRhaW5lciB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZSBncmlkIGNvbnRhaW5lciBhbmQgaXQncyBzY3JvbGwgcGFyZW50c1xuICAgIC8vIHRvIHRoZSBlbGVtZW50cyB3aGljaCBhcmUgZ29pbmcgdG8gYmUgbGlzdGVuZXIgZm9yIHNjcm9sbCBldmVudHMuXG4gICAgaWYgKGRyYWdDb250YWluZXIgIT09IGdyaWRDb250YWluZXIpIHtcbiAgICAgIGdyaWRTY3JvbGxlcnMgPSBbXTtcbiAgICAgIGdldFNjcm9sbGFibGVBbmNlc3RvcnMoZ3JpZENvbnRhaW5lciwgdHJ1ZSwgZ3JpZFNjcm9sbGVycyk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZFNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2Nyb2xsZXJzLmluZGV4T2YoZ3JpZFNjcm9sbGVyc1tpXSkgPCAwKSB7XG4gICAgICAgICAgc2Nyb2xsZXJzLnB1c2goZ3JpZFNjcm9sbGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCaW5kIHNjcm9sbCBsaXN0ZW5lcnMuXG4gICAgZm9yIChpID0gMDsgaSA8IHNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgc2Nyb2xsZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBjdXJyZW50bHkgYm91bmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgZnJvbSBhbGwgc2Nyb2xsYWJsZSBhbmNlc3RvclxuICAgKiBlbGVtZW50cyBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IGFuZCB0aGUgZHJhZyBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl91bmJpbmRTY3JvbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsZXJzID0gdGhpcy5fc2Nyb2xsZXJzO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgc2Nyb2xsZXJzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBzY3JvbGxlcnMubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAgZGVmYXVsdCBzdGFydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9zZXR1cFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBjb25maWcgPSBvcHRpb25zIHx8IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1N0YXJ0UHJlZGljYXRlIHx8IDA7XG4gICAgcmV0dXJuICh0aGlzLl9zdGFydFByZWRpY2F0ZURhdGEgPSB7XG4gICAgICBkaXN0YW5jZTogTWF0aC5hYnMoY29uZmlnLmRpc3RhbmNlKSB8fCAwLFxuICAgICAgZGVsYXk6IE1hdGgubWF4KGNvbmZpZy5kZWxheSwgMCkgfHwgMCxcbiAgICAgIGhhbmRsZTogdHlwZW9mIGNvbmZpZy5oYW5kbGUgPT09ICdzdHJpbmcnID8gY29uZmlnLmhhbmRsZSA6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGRlZmF1bHQgc3RhcnQgcHJlZGljYXRlIGhhbmRsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMgez9IVE1MRWxlbWVudH1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZ2V0U3RhcnRQcmVkaWNhdGVIYW5kbGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9pdGVtLl9lbGVtZW50O1xuICAgIHZhciBoYW5kbGVFbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIE5vIGhhbmRsZSwgbm8gaGFzc2xlIC0+IGxldCdzIHVzZSB0aGUgaXRlbSBlbGVtZW50IGFzIHRoZSBoYW5kbGUuXG4gICAgaWYgKCFwcmVkaWNhdGUuaGFuZGxlKSByZXR1cm4gaGFuZGxlRWxlbWVudDtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc3BlY2lmaWMgcHJlZGljYXRlIGhhbmRsZSBkZWZpbmVkLCBsZXQncyB0cnkgdG8gZ2V0IGl0LlxuICAgIGhhbmRsZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgd2hpbGUgKGhhbmRsZUVsZW1lbnQgJiYgIWVsZW1lbnRNYXRjaGVzKGhhbmRsZUVsZW1lbnQsIHByZWRpY2F0ZS5oYW5kbGUpKSB7XG4gICAgICBoYW5kbGVFbGVtZW50ID0gaGFuZGxlRWxlbWVudCAhPT0gZWxlbWVudCA/IGhhbmRsZUVsZW1lbnQucGFyZW50RWxlbWVudCA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVFbGVtZW50IHx8IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBjdXJyZW50bHkgYm91bmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgZnJvbSBhbGwgc2Nyb2xsYWJsZSBhbmNlc3RvclxuICAgKiBlbGVtZW50cyBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IGFuZCB0aGUgZHJhZyBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc29sdmVTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHByZWRpY2F0ZSA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YTtcblxuICAgIC8vIElmIHRoZSBtb3ZlZCBkaXN0YW5jZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHRocmVzaG9sZCBkaXN0YW5jZSBvciB0aGVyZSBpc1xuICAgIC8vIHNvbWUgZGVsYXkgbGVmdCwgaWdub3JlIHRoaXMgcHJlZGljYXRlIGN5Y2xlLlxuICAgIGlmIChldmVudC5kaXN0YW5jZSA8IHByZWRpY2F0ZS5kaXN0YW5jZSB8fCBwcmVkaWNhdGUuZGVsYXkpIHJldHVybjtcblxuICAgIC8vIEdldCBoYW5kbGUgcmVjdCBkYXRhLlxuICAgIHZhciBoYW5kbGVSZWN0ID0gcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGhhbmRsZUxlZnQgPSBoYW5kbGVSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IDApO1xuICAgIHZhciBoYW5kbGVUb3AgPSBoYW5kbGVSZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgMCk7XG4gICAgdmFyIGhhbmRsZVdpZHRoID0gaGFuZGxlUmVjdC53aWR0aDtcbiAgICB2YXIgaGFuZGxlSGVpZ2h0ID0gaGFuZGxlUmVjdC5oZWlnaHQ7XG5cbiAgICAvLyBSZXNldCBwcmVkaWNhdGUgZGF0YS5cbiAgICB0aGlzLl9yZXNldFN0YXJ0UHJlZGljYXRlKCk7XG5cbiAgICAvLyBJZiB0aGUgY3Vyc29yIGlzIHN0aWxsIHdpdGhpbiB0aGUgaGFuZGxlIGxldCdzIHN0YXJ0IHRoZSBkcmFnLlxuICAgIHJldHVybiAoXG4gICAgICBoYW5kbGVXaWR0aCAmJlxuICAgICAgaGFuZGxlSGVpZ2h0ICYmXG4gICAgICBldmVudC5wYWdlWCA+PSBoYW5kbGVMZWZ0ICYmXG4gICAgICBldmVudC5wYWdlWCA8IGhhbmRsZUxlZnQgKyBoYW5kbGVXaWR0aCAmJlxuICAgICAgZXZlbnQucGFnZVkgPj0gaGFuZGxlVG9wICYmXG4gICAgICBldmVudC5wYWdlWSA8IGhhbmRsZVRvcCArIGhhbmRsZUhlaWdodFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZvcmNlZnVsbHkgcmVzb2x2ZSBkcmFnIHN0YXJ0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZm9yY2VSZXNvbHZlU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5faXNEZXN0cm95ZWQgJiYgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcbiAgICAgIHRoaXMuX29uU3RhcnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmluYWxpemUgc3RhcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9maW5pc2hTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9pdGVtLl9lbGVtZW50O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIGNsaWNrICh2ZXJ5IHN1YmplY3RpdmUgaGV1cmlzdGljcykuXG4gICAgdmFyIGlzQ2xpY2sgPSBNYXRoLmFicyhldmVudC5kZWx0YVgpIDwgMiAmJiBNYXRoLmFicyhldmVudC5kZWx0YVkpIDwgMiAmJiBldmVudC5kZWx0YVRpbWUgPCAyMDA7XG5cbiAgICAvLyBSZXNldCBwcmVkaWNhdGUuXG4gICAgdGhpcy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuXG4gICAgLy8gSWYgdGhlIGdlc3R1cmUgY2FuIGJlIGludGVycHJldGVkIGFzIGNsaWNrIGxldCdzIHRyeSB0byBvcGVuIHRoZSBlbGVtZW50J3NcbiAgICAvLyBocmVmIHVybCAoaWYgaXQgaXMgYW4gYW5jaG9yIGVsZW1lbnQpLlxuICAgIGlmIChpc0NsaWNrKSBvcGVuQW5jaG9ySHJlZihlbGVtZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzZXQgZHJhZyBzb3J0IGhldXJpc3RpY3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc2V0SGV1cmlzdGljcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgdGhpcy5faFgxID0gdGhpcy5faFgyID0gZXZlbnQuY2xpZW50WDtcbiAgICB0aGlzLl9oWTEgPSB0aGlzLl9oWTIgPSBldmVudC5jbGllbnRZO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSdW4gaGV1cmlzdGljcyBhbmQgcmV0dXJuIHRydWUgaWYgb3ZlcmxhcCBjaGVjayBjYW4gYmUgcGVyZm9ybWVkLCBhbmQgZmFsc2VcbiAgICogaWYgaXQgY2FuIG5vdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2NoZWNrSGV1cmlzdGljcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnU29ydEhldXJpc3RpY3M7XG4gICAgdmFyIG1pbkRpc3QgPSBzZXR0aW5ncy5taW5EcmFnRGlzdGFuY2U7XG5cbiAgICAvLyBTa2lwIGhldXJpc3RpY3MgaWYgbm90IG5lZWRlZC5cbiAgICBpZiAobWluRGlzdCA8PSAwKSB7XG4gICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciB4ID0gZXZlbnQuY2xpZW50WDtcbiAgICB2YXIgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgdmFyIGRpZmZYID0geCAtIHRoaXMuX2hYMjtcbiAgICB2YXIgZGlmZlkgPSB5IC0gdGhpcy5faFkyO1xuXG4gICAgLy8gSWYgd2UgY2FuJ3QgZG8gcHJvcGVyIGJvdW5jZSBiYWNrIGNoZWNrIG1ha2Ugc3VyZSB0aGF0IHRoZSBibG9ja2VkIGluZGV4XG4gICAgLy8gaXMgbm90IHNldC5cbiAgICB2YXIgY2FuQ2hlY2tCb3VuY2VCYWNrID0gbWluRGlzdCA+IDMgJiYgc2V0dGluZ3MubWluQm91bmNlQmFja0FuZ2xlID4gMDtcbiAgICBpZiAoIWNhbkNoZWNrQm91bmNlQmFjaykge1xuICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IG1pbkRpc3QgfHwgTWF0aC5hYnMoZGlmZlkpID4gbWluRGlzdCkge1xuICAgICAgLy8gUmVzZXQgYmxvY2tlZCBpbmRleCBpZiBhbmdsZSBjaGFuZ2VkIGVub3VnaC4gVGhpcyBjaGVjayByZXF1aXJlcyBhXG4gICAgICAvLyBtaW5pbXVtIHZhbHVlIG9mIDMgZm9yIG1pbkRyYWdEaXN0YW5jZSB0byBmdW5jdGlvbiBwcm9wZXJseS5cbiAgICAgIGlmIChjYW5DaGVja0JvdW5jZUJhY2spIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkaWZmWCwgZGlmZlkpO1xuICAgICAgICB2YXIgcHJldkFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLl9oWDIgLSB0aGlzLl9oWDEsIHRoaXMuX2hZMiAtIHRoaXMuX2hZMSk7XG4gICAgICAgIHZhciBkZWx0YUFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLnNpbihhbmdsZSAtIHByZXZBbmdsZSksIE1hdGguY29zKGFuZ2xlIC0gcHJldkFuZ2xlKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhkZWx0YUFuZ2xlKSA+IHNldHRpbmdzLm1pbkJvdW5jZUJhY2tBbmdsZSkge1xuICAgICAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBwb2ludHMuXG4gICAgICB0aGlzLl9oWDEgPSB0aGlzLl9oWDI7XG4gICAgICB0aGlzLl9oWTEgPSB0aGlzLl9oWTI7XG4gICAgICB0aGlzLl9oWDIgPSB4O1xuICAgICAgdGhpcy5faFkyID0geTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCBmb3IgZGVmYXVsdCBkcmFnIHN0YXJ0IHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByZWRpY2F0ZSA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YTtcbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICBpZiAocHJlZGljYXRlLmRlbGF5VGltZXIpIHtcbiAgICAgICAgcHJlZGljYXRlLmRlbGF5VGltZXIgPSB3aW5kb3cuY2xlYXJUaW1lb3V0KHByZWRpY2F0ZS5kZWxheVRpbWVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayAoZHVyaW5nIGRyYWcpIGlmIGFuIGl0ZW0gaXMgb3ZlcmxhcHBpbmcgb3RoZXIgaXRlbXMgYW5kIGJhc2VkIG9uXG4gICAqIHRoZSBjb25maWd1cmF0aW9uIGxheW91dCB0aGUgaXRlbXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fY2hlY2tPdmVybGFwID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgY3VycmVudEdyaWQ7XG4gICAgdmFyIGN1cnJlbnRJbmRleDtcbiAgICB2YXIgdGFyZ2V0R3JpZDtcbiAgICB2YXIgdGFyZ2V0SW5kZXg7XG4gICAgdmFyIHNvcnRBY3Rpb247XG4gICAgdmFyIGlzTWlncmF0aW9uO1xuXG4gICAgLy8gR2V0IG92ZXJsYXAgY2hlY2sgcmVzdWx0LlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKSkge1xuICAgICAgcmVzdWx0ID0gc2V0dGluZ3MuZHJhZ1NvcnRQcmVkaWNhdGUoaXRlbSwgdGhpcy5fZHJhZ0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gSXRlbURyYWcuZGVmYXVsdFNvcnRQcmVkaWNhdGUoaXRlbSwgc2V0dGluZ3MuZHJhZ1NvcnRQcmVkaWNhdGUpO1xuICAgIH1cblxuICAgIC8vIExldCdzIG1ha2Ugc3VyZSB0aGUgcmVzdWx0IG9iamVjdCBoYXMgYSB2YWxpZCBpbmRleCBiZWZvcmUgZ29pbmcgZnVydGhlci5cbiAgICBpZiAoIXJlc3VsdCB8fCB0eXBlb2YgcmVzdWx0LmluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuO1xuXG4gICAgY3VycmVudEdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB0YXJnZXRHcmlkID0gcmVzdWx0LmdyaWQgfHwgY3VycmVudEdyaWQ7XG4gICAgaXNNaWdyYXRpb24gPSBjdXJyZW50R3JpZCAhPT0gdGFyZ2V0R3JpZDtcbiAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50R3JpZC5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB0YXJnZXRJbmRleCA9IG5vcm1hbGl6ZUFycmF5SW5kZXgodGFyZ2V0R3JpZC5faXRlbXMsIHJlc3VsdC5pbmRleCwgaXNNaWdyYXRpb24pO1xuICAgIHNvcnRBY3Rpb24gPSByZXN1bHQuYWN0aW9uID09PSBhY3Rpb25Td2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG5cbiAgICAvLyBQcmV2ZW50IHBvc2l0aW9uIGJvdW5jZS5cbiAgICBpZiAoIWlzTWlncmF0aW9uICYmIHRhcmdldEluZGV4ID09PSB0aGlzLl9oQmxvY2tlZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gd2FzIG1vdmVkIHdpdGhpbiBpdCdzIGN1cnJlbnQgZ3JpZC5cbiAgICBpZiAoIWlzTWlncmF0aW9uKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHRhcmdldCBpbmRleCBpcyBub3QgdGhlIGN1cnJlbnQgaW5kZXguXG4gICAgICBpZiAoY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gY3VycmVudEluZGV4O1xuXG4gICAgICAgIC8vIERvIHRoZSBzb3J0LlxuICAgICAgICAoc29ydEFjdGlvbiA9PT0gYWN0aW9uU3dhcCA/IGFycmF5U3dhcCA6IGFycmF5TW92ZSkoXG4gICAgICAgICAgY3VycmVudEdyaWQuX2l0ZW1zLFxuICAgICAgICAgIGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0YXJnZXRJbmRleFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEVtaXQgbW92ZSBldmVudC5cbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRNb3ZlKSkge1xuICAgICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50TW92ZSwge1xuICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXgsXG4gICAgICAgICAgICBhY3Rpb246IHNvcnRBY3Rpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExheW91dCB0aGUgZ3JpZC5cbiAgICAgICAgY3VycmVudEdyaWQubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gd2FzIG1vdmVkIHRvIGFub3RoZXIgZ3JpZC5cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuXG4gICAgICAvLyBFbWl0IGJlZm9yZVNlbmQgZXZlbnQuXG4gICAgICBpZiAoY3VycmVudEdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVNlbmQpKSB7XG4gICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50QmVmb3JlU2VuZCwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBiZWZvcmVSZWNlaXZlIGV2ZW50LlxuICAgICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVJlY2VpdmUpKSB7XG4gICAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRCZWZvcmVSZWNlaXZlLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgaXRlbSdzIGdyaWQgaWQgcmVmZXJlbmNlLlxuICAgICAgaXRlbS5fZ3JpZElkID0gdGFyZ2V0R3JpZC5faWQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBkcmFnIGluc3RhbmNlJ3MgbWlncmF0aW5nIGluZGljYXRvci5cbiAgICAgIHRoaXMuX2lzTWlncmF0aW5nID0gaXRlbS5fZ3JpZElkICE9PSB0aGlzLl9ncmlkSWQ7XG5cbiAgICAgIC8vIE1vdmUgaXRlbSBpbnN0YW5jZSBmcm9tIGN1cnJlbnQgZ3JpZCB0byB0YXJnZXQgZ3JpZC5cbiAgICAgIGN1cnJlbnRHcmlkLl9pdGVtcy5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcbiAgICAgIGFycmF5SW5zZXJ0KHRhcmdldEdyaWQuX2l0ZW1zLCBpdGVtLCB0YXJnZXRJbmRleCk7XG5cbiAgICAgIC8vIFNldCBzb3J0IGRhdGEgYXMgbnVsbCwgd2hpY2ggaXMgYW4gaW5kaWNhdG9yIGZvciB0aGUgaXRlbSBjb21wYXJpc29uXG4gICAgICAvLyBmdW5jdGlvbiB0aGF0IHRoZSBzb3J0IGRhdGEgb2YgdGhpcyBzcGVjaWZpYyBpdGVtIHNob3VsZCBiZSBmZXRjaGVkXG4gICAgICAvLyBsYXppbHkuXG4gICAgICBpdGVtLl9zb3J0RGF0YSA9IG51bGw7XG5cbiAgICAgIC8vIEVtaXQgc2VuZCBldmVudC5cbiAgICAgIGlmIChjdXJyZW50R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50U2VuZCkpIHtcbiAgICAgICAgY3VycmVudEdyaWQuX2VtaXQoZXZlbnRTZW5kLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IHJlY2VpdmUgZXZlbnQuXG4gICAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50UmVjZWl2ZSkpIHtcbiAgICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudFJlY2VpdmUsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExheW91dCBib3RoIGdyaWRzLlxuICAgICAgY3VycmVudEdyaWQubGF5b3V0KCk7XG4gICAgICB0YXJnZXRHcmlkLmxheW91dCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSWYgaXRlbSBpcyBkcmFnZ2VkIGludG8gYW5vdGhlciBncmlkLCBmaW5pc2ggdGhlIG1pZ3JhdGlvbiBwcm9jZXNzXG4gICAqIGdyYWNlZnVsbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZmluaXNoTWlncmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGlzQWN0aXZlID0gaXRlbS5faXNBY3RpdmU7XG4gICAgdmFyIHRhcmdldEdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgdGFyZ2V0R3JpZEVsZW1lbnQgPSB0YXJnZXRHcmlkLl9lbGVtZW50O1xuICAgIHZhciB0YXJnZXRTZXR0aW5ncyA9IHRhcmdldEdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRDb250YWluZXIgPSB0YXJnZXRTZXR0aW5ncy5kcmFnQ29udGFpbmVyIHx8IHRhcmdldEdyaWRFbGVtZW50O1xuICAgIHZhciBjdXJyZW50U2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBjdXJyZW50Q29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIHZhciB0cmFuc2xhdGU7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBEZXN0cm95IGN1cnJlbnQgZHJhZy4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gc2V0IHRoZSBtaWdyYXRpbmcgZmxhZyB0b1xuICAgIC8vIGZhbHNlIGZpcnN0LCBiZWNhdXNlIG90aGVyd2lzZSB3ZSBjcmVhdGUgYW4gaW5maW5pdGUgbG9vcCBiZXR3ZWVuIHRoaXNcbiAgICAvLyBhbmQgdGhlIGRyYWcuc3RvcCgpIG1ldGhvZC5cbiAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIGN1cnJlbnQgY2xhc3NuYW1lcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjdXJyZW50U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjdXJyZW50U2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBBZGQgbmV3IGNsYXNzbmFtZXMuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgdGFyZ2V0U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc0FjdGl2ZSA/IHRhcmdldFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiB0YXJnZXRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gTW92ZSB0aGUgaXRlbSBpbnNpZGUgdGhlIHRhcmdldCBjb250YWluZXIgaWYgaXQncyBkaWZmZXJlbnQgdGhhbiB0aGVcbiAgICAvLyBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZihjdXJyZW50Q29udGFpbmVyLCB0YXJnZXRDb250YWluZXIsIHRydWUpO1xuICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgdHJhbnNsYXRlLnggLT0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdHJhbnNsYXRlLnkgLT0gb2Zmc2V0RGlmZi50b3A7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBjYWNoZWQgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIGl0ZW0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgaXRlbS5fcmVmcmVzaFNvcnREYXRhKCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIG9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gdGFyZ2V0J3MgZHJhZyBjb250YWluZXIgKGlmIGFueSlcbiAgICAvLyBhbmQgYWN0dWFsIGdyaWQgY29udGFpbmVyIGVsZW1lbnQuIFdlIHNhdmUgaXQgbGF0ZXIgZm9yIHRoZSByZWxlYXNlXG4gICAgLy8gcHJvY2Vzcy5cbiAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIHRhcmdldEdyaWRFbGVtZW50LCB0cnVlKTtcbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWSA9IG9mZnNldERpZmYudG9wO1xuXG4gICAgLy8gUmVjcmVhdGUgaXRlbSdzIGRyYWcgaGFuZGxlci5cbiAgICBpdGVtLl9kcmFnID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0VuYWJsZWQgPyBuZXcgSXRlbURyYWcoaXRlbSkgOiBudWxsO1xuXG4gICAgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSBlbGVtZW50IGlmIGl0IHdhcyBtb3ZlZCBmcm9tIGEgY29udGFpbmVyXG4gICAgLy8gdG8gYW5vdGhlci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZS54LCB0cmFuc2xhdGUueSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNoaWxkIGVsZW1lbnQncyBzdHlsZXMgdG8gcmVmbGVjdCB0aGUgY3VycmVudCB2aXNpYmlsaXR5IHN0YXRlLlxuICAgIGl0ZW0uX2NoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIGlzQWN0aXZlID8gdGFyZ2V0U2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHRhcmdldFNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG5cbiAgICAvLyBTdGFydCB0aGUgcmVsZWFzZS5cbiAgICByZWxlYXNlLnN0YXJ0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgcHJlLXN0YXJ0IGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZVN0YXJ0Q2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIExldCdzIGFjdGl2YXRlIGRyYWcgc3RhcnQgcHJlZGljYXRlIHN0YXRlLlxuICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZUluYWN0aXZlKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nO1xuICAgIH1cblxuICAgIC8vIElmIHByZWRpY2F0ZSBpcyBwZW5kaW5nIHRyeSB0byByZXNvbHZlIGl0LlxuICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVBlbmRpbmcpIHtcbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID0gdGhpcy5fc3RhcnRQcmVkaWNhdGUodGhpcy5faXRlbSwgZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVJlc29sdmVkO1xuICAgICAgICB0aGlzLl9vblN0YXJ0KGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVJlamVjdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBpZiBwcmVkaWNhdGUgaXMgcmVzb2x2ZWQgYW5kIGRyYWcgaXMgYWN0aXZlLCBtb3ZlIHRoZSBpdGVtLlxuICAgIGVsc2UgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQgJiYgdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuX29uTW92ZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHByZS1lbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlRW5kQ2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBzdGFydCBwcmVkaWNhdGUgd2FzIHJlc29sdmVkIGR1cmluZyBkcmFnLlxuICAgIHZhciBpc1Jlc29sdmVkID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcblxuICAgIC8vIERvIGZpbmFsIHByZWRpY2F0ZSBjaGVjayB0byBhbGxvdyB1c2VyIHRvIHVuYmluZCBzdHVmZiBmb3IgdGhlIGN1cnJlbnRcbiAgICAvLyBkcmFnIHByb2NlZHVyZSB3aXRoaW4gdGhlIHByZWRpY2F0ZSBjYWxsYmFjay4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzXG4gICAgLy8gY2hlY2sgd2lsbCBoYXZlIG5vIGVmZmVjdCB0byB0aGUgc3RhdGUgb2YgdGhlIHByZWRpY2F0ZS5cbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZSh0aGlzLl9pdGVtLCBldmVudCk7XG5cbiAgICAvLyBSZXNldCBzdGFydCBwcmVkaWNhdGUgc3RhdGUuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlSW5hY3RpdmU7XG5cbiAgICAvLyBJZiBwcmVkaWNhdGUgaXMgcmVzb2x2ZWQgYW5kIGRyYWdnaW5nIGlzIGFjdGl2ZSwgY2FsbCB0aGUgZW5kIGhhbmRsZXIuXG4gICAgaWYgKGlzUmVzb2x2ZWQgJiYgdGhpcy5faXNBY3RpdmUpIHRoaXMuX29uRW5kKGV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBzdGFydCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vblN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIGRvbid0IHN0YXJ0IHRoZSBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgZHJhZ0NvbnRhaW5lciA9IHNldHRpbmdzLmRyYWdDb250YWluZXIgfHwgZ3JpZENvbnRhaW5lcjtcbiAgICB2YXIgY29udGFpbmluZ0Jsb2NrID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGRyYWdDb250YWluZXIsIHRydWUpO1xuICAgIHZhciB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgdmFyIGN1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdmFyIGN1cnJlbnRUb3AgPSB0cmFuc2xhdGUueTtcbiAgICB2YXIgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBoYXNEcmFnQ29udGFpbmVyID0gZHJhZ0NvbnRhaW5lciAhPT0gZ3JpZENvbnRhaW5lcjtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcblxuICAgIC8vIFJlc2V0IGhldXJpc3RpY3MgZGF0YS5cbiAgICB0aGlzLl9yZXNldEhldXJpc3RpY3MoZXZlbnQpO1xuXG4gICAgLy8gSWYgZ3JpZCBjb250YWluZXIgaXMgbm90IHRoZSBkcmFnIGNvbnRhaW5lciwgd2UgbmVlZCB0byBjYWxjdWxhdGUgdGhlXG4gICAgLy8gb2Zmc2V0IGRpZmZlcmVuY2UgYmV0d2VlbiBncmlkIGNvbnRhaW5lciBhbmQgZHJhZyBjb250YWluZXIncyBjb250YWluaW5nXG4gICAgLy8gZWxlbWVudC5cbiAgICBpZiAoaGFzRHJhZ0NvbnRhaW5lcikge1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYoY29udGFpbmluZ0Jsb2NrLCBncmlkQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGN1cnJlbnQgcG9zaXRpb25pbmcgYW5pbWF0aW9uLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSkge1xuICAgICAgaXRlbS5fbGF5b3V0LnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IG1pZ3JhdGlvbiBhbmltYXRpb24uXG4gICAgaWYgKG1pZ3JhdGUuX2lzQWN0aXZlKSB7XG4gICAgICBjdXJyZW50TGVmdCAtPSBtaWdyYXRlLl9jb250YWluZXJEaWZmWDtcbiAgICAgIGN1cnJlbnRUb3AgLT0gbWlncmF0ZS5fY29udGFpbmVyRGlmZlk7XG4gICAgICBtaWdyYXRlLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBiZWluZyByZWxlYXNlZCByZXNldCByZWxlYXNlIGRhdGEuXG4gICAgaWYgKGl0ZW0uaXNSZWxlYXNpbmcoKSkgcmVsZWFzZS5fcmVzZXQoKTtcblxuICAgIC8vIFNldHVwIGRyYWcgZGF0YS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZHJhZ0NvbnRhaW5lcjtcbiAgICB0aGlzLl9jb250YWluaW5nQmxvY2sgPSBjb250YWluaW5nQmxvY2s7XG4gICAgdGhpcy5fZWxlbWVudENsaWVudFggPSBlbGVtZW50UmVjdC5sZWZ0O1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZID0gZWxlbWVudFJlY3QudG9wO1xuICAgIHRoaXMuX2xlZnQgPSB0aGlzLl9ncmlkWCA9IGN1cnJlbnRMZWZ0O1xuICAgIHRoaXMuX3RvcCA9IHRoaXMuX2dyaWRZID0gY3VycmVudFRvcDtcblxuICAgIC8vIENyZWF0ZSBwbGFjZWhvbGRlciAoaWYgbmVjZXNzYXJ5KS5cbiAgICBpZiAoc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmVuYWJsZWQpIHtcbiAgICAgIGl0ZW0uX2RyYWdQbGFjZWhvbGRlci5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGRyYWdJbml0IGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnSW5pdCwgaXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gSWYgYSBzcGVjaWZpYyBkcmFnIGNvbnRhaW5lciBpcyBzZXQgYW5kIGl0IGlzIGRpZmZlcmVudCBmcm9tIHRoZVxuICAgIC8vIGdyaWQncyBjb250YWluZXIgZWxlbWVudCB3ZSBuZWVkIHRvIGNhc3Qgc29tZSBleHRyYSBzcGVsbHMuXG4gICAgaWYgKGhhc0RyYWdDb250YWluZXIpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBjb250YWluZXIgb2Zmc2V0IGRpZmZzIHRvIGRyYWcgZGF0YS5cbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcblxuICAgICAgLy8gSWYgdGhlIGRyYWdnZWQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHRoZSBkcmFnIGNvbnRhaW5lciBhbGwgd2UgbmVlZCB0b1xuICAgICAgLy8gZG8gaXMgc2V0dXAgdGhlIHJlbGF0aXZlIGRyYWcgcG9zaXRpb24gZGF0YS5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgPT09IGRyYWdDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fZ3JpZFggPSBjdXJyZW50TGVmdCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgICB0aGlzLl9ncmlkWSA9IGN1cnJlbnRUb3AgLSB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gYXBwZW5kIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgY29ycmVjdCBjb250YWluZXIsXG4gICAgICAvLyBzZXR1cCB0aGUgYWN0dWFsIGRyYWcgcG9zaXRpb24gZGF0YSBhbmQgYWRqdXN0IHRoZSBlbGVtZW50J3MgdHJhbnNsYXRlXG4gICAgICAvLyB2YWx1ZXMgdG8gYWNjb3VudCBmb3IgdGhlIERPTSBwb3NpdGlvbiBzaGlmdC5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9sZWZ0ID0gY3VycmVudExlZnQgKyB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgICAgdGhpcy5fdG9wID0gY3VycmVudFRvcCArIHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgICBkcmFnQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2xlZnQsIHRoaXMuX3RvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGRyYWcgY2xhc3MgYW5kIGJpbmQgc2Nyb2xsZXJzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1EcmFnZ2luZ0NsYXNzKTtcbiAgICB0aGlzLl9iaW5kU2Nyb2xsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBFbWl0IGRyYWdTdGFydCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ1N0YXJ0LCBpdGVtLCBldmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgbW92ZSBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vbk1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBheGlzID0gc2V0dGluZ3MuZHJhZ0F4aXM7XG5cbiAgICAvLyBVcGRhdGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneScpIHtcbiAgICAgIHZhciB4RGlmZiA9IGV2ZW50LmNsaWVudFggLSB0aGlzLl9kcmFnRXZlbnQuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xlZnQgKz0geERpZmY7XG4gICAgICB0aGlzLl9ncmlkWCArPSB4RGlmZjtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGllbnRYICs9IHhEaWZmO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB2ZXJ0aWNhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneCcpIHtcbiAgICAgIHZhciB5RGlmZiA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLl9kcmFnRXZlbnQuY2xpZW50WTtcbiAgICAgIHRoaXMuX3RvcCArPSB5RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRZICs9IHlEaWZmO1xuICAgICAgdGhpcy5fZWxlbWVudENsaWVudFkgKz0geURpZmY7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGV2ZW50IGRhdGEuXG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gZXZlbnQ7XG5cbiAgICAvLyBEbyBtb3ZlIHByZXBhcmUvYXBwbHkgaGFuZGxpbmcgaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRNb3ZlVGljayhpdGVtLl9pZCwgdGhpcy5fcHJlcGFyZU1vdmUsIHRoaXMuX2FwcGx5TW92ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZHJhZ2dlZCBpdGVtIGZvciBtb3ZpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlcGFyZU1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0ZW0gaXMgbm90IGFjdGl2ZS5cbiAgICBpZiAoIXRoaXMuX2l0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBJZiBkcmFnIHNvcnQgaXMgZW5hYmxlZCAtPiBjaGVjayBvdmVybGFwLlxuICAgIGlmICh0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdTb3J0KSB7XG4gICAgICBpZiAodGhpcy5fY2hlY2tIZXVyaXN0aWNzKHRoaXMuX2RyYWdFdmVudCkpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGx5IG1vdmVtZW50IHRvIGRyYWdnZWQgaXRlbS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9hcHBseU1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0ZW0gaXMgbm90IGFjdGl2ZS5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGUgZWxlbWVudCdzIHRyYW5zbGF0ZVgvWSB2YWx1ZXMuXG4gICAgaXRlbS5fZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9sZWZ0LCB0aGlzLl90b3ApO1xuXG4gICAgLy8gRW1pdCBkcmFnTW92ZSBldmVudC5cbiAgICB0aGlzLl9nZXRHcmlkKCkuX2VtaXQoZXZlbnREcmFnTW92ZSwgaXRlbSwgdGhpcy5fZHJhZ0V2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBzY3JvbGwgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vblNjcm9sbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCByZXNldCBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBsYXN0IHNjcm9sbCBldmVudC5cbiAgICB0aGlzLl9zY3JvbGxFdmVudCA9IGV2ZW50O1xuXG4gICAgLy8gRG8gc2Nyb2xsIHByZXBhcmUvYXBwbHkgaGFuZGxpbmcgaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRTY3JvbGxUaWNrKGl0ZW0uX2lkLCB0aGlzLl9wcmVwYXJlU2Nyb2xsLCB0aGlzLl9hcHBseVNjcm9sbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZHJhZ2dlZCBpdGVtIGZvciBzY3JvbGxpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlcGFyZVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSBkbyBub3RoaW5nLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgYXhpcyA9IHNldHRpbmdzLmRyYWdBeGlzO1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcblxuICAgIC8vIENhbGN1bGF0ZSBlbGVtZW50J3MgcmVjdCBhbmQgeC95IGRpZmYuXG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB4RGlmZiA9IHRoaXMuX2VsZW1lbnRDbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgIHZhciB5RGlmZiA9IHRoaXMuX2VsZW1lbnRDbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICAvLyBVcGRhdGUgY29udGFpbmVyIGRpZmYuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gZ3JpZENvbnRhaW5lcikge1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYodGhpcy5fY29udGFpbmluZ0Jsb2NrLCBncmlkQ29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneScpIHtcbiAgICAgIHRoaXMuX2xlZnQgKz0geERpZmY7XG4gICAgICB0aGlzLl9ncmlkWCA9IHRoaXMuX2xlZnQgLSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdmVydGljYWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3gnKSB7XG4gICAgICB0aGlzLl90b3AgKz0geURpZmY7XG4gICAgICB0aGlzLl9ncmlkWSA9IHRoaXMuX3RvcCAtIHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgIH1cblxuICAgIC8vIE92ZXJsYXAgaGFuZGxpbmcuXG4gICAgaWYgKHNldHRpbmdzLmRyYWdTb3J0KSB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBseSBzY3JvbGwgdG8gZHJhZ2dlZCBpdGVtLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2FwcGx5U2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlIGRvIG5vdGhpbmcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVXBkYXRlIGVsZW1lbnQncyB0cmFuc2xhdGVYL1kgdmFsdWVzLlxuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fbGVmdCwgdGhpcy5fdG9wKTtcblxuICAgIC8vIEVtaXQgZHJhZ1Njcm9sbCBldmVudC5cbiAgICB0aGlzLl9nZXRHcmlkKCkuX2VtaXQoZXZlbnREcmFnU2Nyb2xsLCBpdGVtLCB0aGlzLl9zY3JvbGxFdmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgcXVldWVkIG1vdmUgYW5kIHNjcm9sbCB0aWNrcy5cbiAgICBjYW5jZWxNb3ZlVGljayhpdGVtLl9pZCk7XG4gICAgY2FuY2VsU2Nyb2xsVGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBGaW5pc2ggY3VycmVudGx5IHF1ZXVlZCBvdmVybGFwIGNoZWNrLlxuICAgIHNldHRpbmdzLmRyYWdTb3J0ICYmIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCdmaW5pc2gnKTtcblxuICAgIC8vIFJlbW92ZSBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIHRoaXMuX3VuYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gU2V0dXAgcmVsZWFzZSBkYXRhLlxuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZYID0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlkgPSB0aGlzLl9jb250YWluZXJEaWZmWTtcblxuICAgIC8vIFJlc2V0IGRyYWcgZGF0YS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gUmVtb3ZlIGRyYWcgY2xhc3MgbmFtZSBmcm9tIGVsZW1lbnQuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbURyYWdnaW5nQ2xhc3MpO1xuXG4gICAgLy8gRW1pdCBkcmFnRW5kIGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnRW5kLCBpdGVtLCBldmVudCk7XG5cbiAgICAvLyBGaW5pc2ggdXAgdGhlIG1pZ3JhdGlvbiBwcm9jZXNzIG9yIHN0YXJ0IHRoZSByZWxlYXNlIHByb2Nlc3MuXG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPyB0aGlzLl9maW5pc2hNaWdyYXRpb24oKSA6IHJlbGVhc2Uuc3RhcnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBoZWxwZXJzXG4gICAqICoqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGhvdyBtYW55IHBlcmNlbnQgdGhlIGludGVyc2VjdGlvbiBhcmVhIG9mIHR3byByZWN0YW5nbGVzIGlzIGZyb21cbiAgICogdGhlIG1heGltdW0gcG90ZW50aWFsIGludGVyc2VjdGlvbiBhcmVhIGJldHdlZW4gdGhlIHJlY3RhbmdsZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqICAgLSBBIG51bWJlciBiZXR3ZWVuIDAtMTAwLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UmVjdE92ZXJsYXBTY29yZShhLCBiKSB7XG4gICAgLy8gUmV0dXJuIDAgaW1tZWRpYXRlbHkgaWYgdGhlIHJlY3RhbmdsZXMgZG8gbm90IG92ZXJsYXAuXG4gICAgaWYgKFxuICAgICAgYS5sZWZ0ICsgYS53aWR0aCA8PSBiLmxlZnQgfHxcbiAgICAgIGIubGVmdCArIGIud2lkdGggPD0gYS5sZWZ0IHx8XG4gICAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wIHx8XG4gICAgICBiLnRvcCArIGIuaGVpZ2h0IDw9IGEudG9wXG4gICAgKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIGFyZWEncyB3aWR0aCwgaGVpZ2h0LCBtYXggaGVpZ2h0IGFuZCBtYXggd2lkdGguXG4gICAgdmFyIHdpZHRoID0gTWF0aC5taW4oYS5sZWZ0ICsgYS53aWR0aCwgYi5sZWZ0ICsgYi53aWR0aCkgLSBNYXRoLm1heChhLmxlZnQsIGIubGVmdCk7XG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWluKGEudG9wICsgYS5oZWlnaHQsIGIudG9wICsgYi5oZWlnaHQpIC0gTWF0aC5tYXgoYS50b3AsIGIudG9wKTtcbiAgICB2YXIgbWF4V2lkdGggPSBNYXRoLm1pbihhLndpZHRoLCBiLndpZHRoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5taW4oYS5oZWlnaHQsIGIuaGVpZ2h0KTtcblxuICAgIHJldHVybiAoKHdpZHRoICogaGVpZ2h0KSAvIChtYXhXaWR0aCAqIG1heEhlaWdodCkpICogMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYW4gYW5jaG9yIGVsZW1lbnQgYW5kIG9wZW4gdGhlIGhyZWYgdXJsIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBvcGVuQW5jaG9ySHJlZihlbGVtZW50KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIGFuY2hvciBlbGVtZW50LlxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2EnKSByZXR1cm47XG5cbiAgICAvLyBHZXQgaHJlZiBhbmQgbWFrZSBzdXJlIGl0IGV4aXN0cy5cbiAgICB2YXIgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgaWYgKCFocmVmKSByZXR1cm47XG5cbiAgICAvLyBGaW5hbGx5IGxldCdzIG5hdmlnYXRlIHRvIHRoZSBsaW5rIGhyZWYuXG4gICAgdmFyIHRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKTtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykge1xuICAgICAgd2luZG93Lm9wZW4oaHJlZiwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHBsYWNlaG9sZGVyLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtRHJhZ1BsYWNlaG9sZGVyKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9hbmltYXRlID0gbmV3IEl0ZW1BbmltYXRlKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gJyc7XG4gICAgdGhpcy5fZGlkTWlncmF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IDA7XG4gICAgdGhpcy5fbmV4dExlZnQgPSAwO1xuICAgIHRoaXMuX25leHRUb3AgPSAwO1xuXG4gICAgLy8gQmluZCBhbmltYXRpb24gaGFuZGxlcnMuXG4gICAgdGhpcy5fc2V0dXBBbmltYXRpb24gPSB0aGlzLl9zZXR1cEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uID0gdGhpcy5fc3RhcnRBbmltYXRpb24uYmluZCh0aGlzKTtcblxuICAgIC8vIEJpbmQgZXZlbnQgaGFuZGxlcnMuXG4gICAgdGhpcy5fb25MYXlvdXRTdGFydCA9IHRoaXMuX29uTGF5b3V0U3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkxheW91dEVuZCA9IHRoaXMuX29uTGF5b3V0RW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25SZWxlYXNlRW5kID0gdGhpcy5fb25SZWxlYXNlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25NaWdyYXRlID0gdGhpcy5fb25NaWdyYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBNb3ZlIHBsYWNlaG9sZGVyIHRvIGEgbmV3IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vbkxheW91dFN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG5cbiAgICAvLyBGaW5kIG91dCB0aGUgaXRlbSdzIG5ldyAodW5hcHBsaWVkKSBsZWZ0IGFuZCB0b3AgcG9zaXRpb24uXG4gICAgdmFyIGl0ZW1JbmRleCA9IGdyaWQuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdmFyIG5leHRMZWZ0ID0gZ3JpZC5fbGF5b3V0LnNsb3RzW2l0ZW1JbmRleCAqIDJdO1xuICAgIHZhciBuZXh0VG9wID0gZ3JpZC5fbGF5b3V0LnNsb3RzW2l0ZW1JbmRleCAqIDIgKyAxXTtcblxuICAgIC8vIElmIGl0ZW0ncyBwb3NpdGlvbiBkaWQgbm90IGNoYW5nZSBhbmQgdGhlIGl0ZW0gZGlkIG5vdCBtaWdyYXRlIHdlIGNhblxuICAgIC8vIHNhZmVseSBza2lwIGxheW91dC5cbiAgICBpZiAoIXRoaXMuX2RpZE1pZ3JhdGUgJiYgaXRlbS5fbGVmdCA9PT0gbmV4dExlZnQgJiYgaXRlbS5fdG9wID09PSBuZXh0VG9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2xvdHMgZGF0YSBpcyBjYWxjdWxhdGVkIHdpdGggaXRlbSBtYXJnaW5zIGFkZGVkIHRvIHRoZW0gc28gd2UgbmVlZCB0byBhZGRcbiAgICAvLyBpdGVtJ3MgbGVmdCBhbmQgdG9wIG1hcmdpbiB0byB0aGUgc2xvdCBkYXRhIHRvIGdldCB0aGUgcGxhY2Vob2xkZXInc1xuICAgIC8vIG5leHQgcG9zaXRpb24uXG4gICAgbmV4dExlZnQgKz0gaXRlbS5fbWFyZ2luTGVmdDtcbiAgICBuZXh0VG9wICs9IGl0ZW0uX21hcmdpblRvcDtcblxuICAgIC8vIEp1c3Qgc25hcCB0byBuZXcgcG9zaXRpb24gd2l0aG91dCBhbnkgYW5pbWF0aW9ucyBpZiBubyBhbmltYXRpb24gaXNcbiAgICAvLyByZXF1aXJlZCBvciBpZiBwbGFjZWhvbGRlciBtb3ZlcyBiZXR3ZWVuIGdyaWRzLlxuICAgIHZhciBhbmltRW5hYmxlZCA9IGdyaWQuX3NldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5kdXJhdGlvbiA+IDA7XG4gICAgaWYgKCFhbmltRW5hYmxlZCB8fCB0aGlzLl9kaWRNaWdyYXRlKSB7XG4gICAgICAvLyBDYW5jZWwgcG90ZW50aWFsIChxdWV1ZWQpIGxheW91dCB0aWNrLlxuICAgICAgY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkKTtcblxuICAgICAgLy8gU25hcCBwbGFjZWhvbGRlciB0byBjb3JyZWN0IHBvc2l0aW9uLlxuICAgICAgdmFyIHRhcmdldFN0eWxlcyA9IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcobmV4dExlZnQsIG5leHRUb3ApIH07XG4gICAgICBpZiAodGhpcy5fYW5pbWF0ZS5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGUuc3RvcCh0YXJnZXRTdHlsZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3R5bGVzKHRoaXMuX2VsZW1lbnQsIHRhcmdldFN0eWxlcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgcGxhY2Vob2xkZXIgaW5zaWRlIGNvcnJlY3QgY29udGFpbmVyIGFmdGVyIG1pZ3JhdGlvbi5cbiAgICAgIGlmICh0aGlzLl9kaWRNaWdyYXRlKSB7XG4gICAgICAgIGdyaWQuZ2V0RWxlbWVudCgpLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kaWRNaWdyYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0aGUgcGxhY2Vob2xkZXIncyBsYXlvdXQgYW5pbWF0aW9uIGluIHRoZSBuZXh0IHRpY2suIFdlIGRvIHRoaXMgdG9cbiAgICAvLyBhdm9pZCBsYXlvdXQgdGhyYXNoaW5nLlxuICAgIHRoaXMuX25leHRMZWZ0ID0gbmV4dExlZnQ7XG4gICAgdGhpcy5fbmV4dFRvcCA9IG5leHRUb3A7XG4gICAgYWRkUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkLCB0aGlzLl9zZXR1cEFuaW1hdGlvbiwgdGhpcy5fc3RhcnRBbmltYXRpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHBsYWNlaG9sZGVyIGZvciBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9zZXR1cEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKHRoaXMuX2VsZW1lbnQpO1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IHRyYW5zbGF0ZS55O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0ZTtcbiAgICB2YXIgY3VycmVudExlZnQgPSB0aGlzLl9jdXJyZW50TGVmdDtcbiAgICB2YXIgY3VycmVudFRvcCA9IHRoaXMuX2N1cnJlbnRUb3A7XG4gICAgdmFyIG5leHRMZWZ0ID0gdGhpcy5fbmV4dExlZnQ7XG4gICAgdmFyIG5leHRUb3AgPSB0aGlzLl9uZXh0VG9wO1xuICAgIHZhciB0YXJnZXRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKG5leHRMZWZ0LCBuZXh0VG9wKSB9O1xuXG4gICAgLy8gSWYgcGxhY2Vob2xkZXIgaXMgYWxyZWFkeSBpbiBjb3JyZWN0IHBvc2l0aW9uIGxldCdzIGp1c3Qgc3RvcCBhbmltYXRpb25cbiAgICAvLyBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmIChjdXJyZW50TGVmdCA9PT0gbmV4dExlZnQgJiYgY3VycmVudFRvcCA9PT0gbmV4dFRvcCkge1xuICAgICAgaWYgKGFuaW1hdGlvbi5pc0FuaW1hdGluZygpKSBhbmltYXRpb24uc3RvcCh0YXJnZXRTdHlsZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBsZXQncyBzdGFydCB0aGUgYW5pbWF0aW9uLlxuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2l0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXI7XG4gICAgdmFyIGN1cnJlbnRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGN1cnJlbnRMZWZ0LCBjdXJyZW50VG9wKSB9O1xuICAgIGFuaW1hdGlvbi5zdGFydChjdXJyZW50U3R5bGVzLCB0YXJnZXRTdHlsZXMsIHtcbiAgICAgIGR1cmF0aW9uOiBzZXR0aW5ncy5kdXJhdGlvbixcbiAgICAgIGVhc2luZzogc2V0dGluZ3MuZWFzaW5nLFxuICAgICAgb25GaW5pc2g6IHRoaXMuX29uTGF5b3V0RW5kXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExheW91dCBlbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25MYXlvdXRFbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcmVzZXRBZnRlckxheW91dCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBlbmQgaGFuZGxlci4gVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCB3aGVuIGRyYWdSZWxlYXNlRW5kIGV2ZW50IGlzXG4gICAqIGVtaXR0ZWQgYW5kIHJlY2VpdmVzIHRoZSBldmVudCBkYXRhIGFzIGl0J3MgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vblJlbGVhc2VFbmQgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0uX2lkID09PSB0aGlzLl9pdGVtLl9pZCkge1xuICAgICAgLy8gSWYgdGhlIHBsYWNlaG9sZGVyIGlzIG5vdCBhbmltYXRpbmcgYW55bW9yZSB3ZSBjYW4gc2FmZWx5IHJlc2V0IGl0LlxuICAgICAgaWYgKCF0aGlzLl9hbmltYXRlLmlzQW5pbWF0aW5nKCkpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBwbGFjZWhvbGRlciBpdGVtIGlzIHN0aWxsIGFuaW1hdGluZyBoZXJlLCBsZXQncyB3YWl0IGZvciBpdCB0b1xuICAgICAgLy8gZmluaXNoIGl0J3MgYW5pbWF0aW9uLlxuICAgICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBNaWdyYXRpb24gc3RhcnQgaGFuZGxlci4gVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCB3aGVuIGJlZm9yZVNlbmQgZXZlbnQgaXNcbiAgICogZW1pdHRlZCBhbmQgcmVjZWl2ZXMgdGhlIGV2ZW50IGRhdGEgYXMgaXQncyBhcmd1bWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqIEBwYXJhbSB7SXRlbX0gZGF0YS5pdGVtXG4gICAqIEBwYXJhbSB7R3JpZH0gZGF0YS5mcm9tR3JpZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5mcm9tSW5kZXhcbiAgICogQHBhcmFtIHtHcmlkfSBkYXRhLnRvR3JpZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS50b0luZGV4XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25NaWdyYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgbWF0Y2hpbmcgaXRlbS5cbiAgICBpZiAoZGF0YS5pdGVtICE9PSB0aGlzLl9pdGVtKSByZXR1cm47XG5cbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2l0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBuZXh0R3JpZCA9IGRhdGEudG9HcmlkO1xuXG4gICAgLy8gVW5iaW5kIGxpc3RlbmVycyBmcm9tIGN1cnJlbnQgZ3JpZC5cbiAgICBncmlkLm9mZihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub2ZmKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIGdyaWQub2ZmKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIEJpbmQgbGlzdGVuZXJzIHRvIHRoZSBuZXh0IGdyaWQuXG4gICAgbmV4dEdyaWQub24oZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBuZXh0R3JpZC5vbihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBuZXh0R3JpZC5vbihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBNYXJrIHRoZSBpdGVtIGFzIG1pZ3JhdGVkLlxuICAgIHRoaXMuX2RpZE1pZ3JhdGUgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGxhY2Vob2xkZXIuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBvbmx5IHdyaXRlcyB0byBET00gYW5kIGRvZXMgbm90XG4gICAqIHJlYWQgYW55dGhpbmcgZnJvbSBET00gc28gaXQgc2hvdWxkIG5vdCBjYXVzZSBhbnkgYWRkaXRpb25hbCBsYXlvdXRcbiAgICogdGhyYXNoaW5nIHdoZW4gaXQncyBjYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgZHJhZyBzdGFydCBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgcGxhY2Vob2xkZXIgc2V0IHVwIHdlIGNhbiBza2lwIHRoZSBpbml0aWF0aW9uIGxvZ2ljLlxuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0ZTtcblxuICAgIC8vIENyZWF0ZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIHZhciBlbGVtZW50O1xuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50KSkge1xuICAgICAgZWxlbWVudCA9IHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIFVwZGF0ZSBlbGVtZW50IHRvIGFuaW1hdGlvbiBpbnN0YW5jZS5cbiAgICBhbmltYXRpb24uX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgLy8gQWRkIHBsYWNlaG9sZGVyIGNsYXNzIHRvIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHNldHRpbmdzLml0ZW1QbGFjZWhvbGRlckNsYXNzIHx8ICcnO1xuICAgIGlmICh0aGlzLl9jbGFzc05hbWUpIHtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgLy8gUG9zaXRpb24gdGhlIHBsYWNlaG9sZGVyIGl0ZW0gY29ycmVjdGx5LlxuICAgIHZhciBsZWZ0ID0gaXRlbS5fbGVmdCArIGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgdmFyIHRvcCA9IGl0ZW0uX3RvcCArIGl0ZW0uX21hcmdpblRvcDtcbiAgICBzZXRTdHlsZXMoZWxlbWVudCwge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICB3aWR0aDogaXRlbS5fd2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBpdGVtLl9oZWlnaHQgKyAncHgnLFxuICAgICAgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcobGVmdCwgdG9wKVxuICAgIH0pO1xuXG4gICAgLy8gQmluZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgZ3JpZC5vbihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBncmlkLm9uKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgZ3JpZC5vbihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBvbkNyZWF0ZSBob29rLlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vbkNyZWF0ZSkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vbkNyZWF0ZShpdGVtLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnQgdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQgdG8gdGhlIGdyaWQuXG4gICAgZ3JpZC5nZXRFbGVtZW50KCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IHBsYWNlaG9sZGVyIGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG5cbiAgICAvLyBSZXNldCBmbGFnLlxuICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcblxuICAgIC8vIENhbmNlbCBwb3RlbnRpYWwgKHF1ZXVlZCkgbGF5b3V0IHRpY2suXG4gICAgY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFJlc2V0IGFuaW1hdGlvbiBpbnN0YW5jZS5cbiAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIGFuaW1hdGlvbi5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBVbmJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGdyaWQub2ZmKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gUmVtb3ZlIHBsYWNlaG9sZGVyIGNsYXNzIGZyb20gdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQuXG4gICAgaWYgKHRoaXMuX2NsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBlbGVtZW50LlxuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIG9uUmVtb3ZlIGhvb2suIE5vdGUgdGhhdCBoZXJlIHdlIHVzZSB0aGUgY3VycmVudCBncmlkJ3Mgb25SZW1vdmUgY2FsbGJhY2tcbiAgICAvLyBzbyBpZiB0aGUgaXRlbSBoYXMgbWlncmF0ZWQgZHVyaW5nIGRyYWcgdGhlIG9uUmVtb3ZlIG1ldGhvZCB3aWxsIG5vdCBiZVxuICAgIC8vIHRoZSBvcmlnaW5hdGluZyBncmlkJ3MgbWV0aG9kLlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZSkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZShpdGVtLCBlbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBwbGFjZWhvbGRlcidzIGRpbWVuc2lvbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge2hlaWdodH0gaGVpZ2h0XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS51cGRhdGVEaW1lbnNpb25zID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCArICdweCcsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBwbGFjZWhvbGRlciBpcyBjdXJyZW50bHkgYWN0aXZlICh2aXNpYmxlKS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgcGxhY2Vob2xkZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuX2FuaW1hdGUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2l0ZW0gPSB0aGlzLl9hbmltYXRlID0gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogUXVldWUgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUXVldWUoKSB7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFkZCBjYWxsYmFjayB0byB0aGUgcXVldWUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFF1ZXVlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3F1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHF1ZXVlIGNhbGxiYWNrcyBhbmQgcmVzZXQgdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsqfSBhcmcxXG4gICAqIEBwYXJhbSB7Kn0gYXJnMlxuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbihhcmcxLCBhcmcyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBsZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBRdWl0IGVhcmx5IGlmIHRoZSBxdWV1ZSBpcyBlbXB0eS5cbiAgICBpZiAoIWxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgc2luZ2xlQ2FsbGJhY2sgPSBsZW5ndGggPT09IDE7XG4gICAgdmFyIHNuYXBzaG90ID0gc2luZ2xlQ2FsbGJhY2sgPyBxdWV1ZVswXSA6IHF1ZXVlLnNsaWNlKDApO1xuXG4gICAgLy8gUmVzZXQgcXVldWUuXG4gICAgcXVldWUubGVuZ3RoID0gMDtcblxuICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSBjYWxsYmFjayBsZXQncyBqdXN0IGNhbGwgaXQuXG4gICAgaWYgKHNpbmdsZUNhbGxiYWNrKSB7XG4gICAgICBzbmFwc2hvdChhcmcxLCBhcmcyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgbXVsdGlwbGUgY2FsbGJhY2tzLCBsZXQncyBwcm9jZXNzIHRoZW0uXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzbmFwc2hvdFtpXShhcmcxLCBhcmcyKTtcbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgUXVldWUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFF1ZXVlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5fcXVldWUubGVuZ3RoID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMYXlvdXQgbWFuYWdlciBmb3IgSXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbUxheW91dChpdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzSW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50U3R5bGVzID0ge307XG4gICAgdGhpcy5fdGFyZ2V0U3R5bGVzID0ge307XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSAwO1xuICAgIHRoaXMuX29mZnNldExlZnQgPSAwO1xuICAgIHRoaXMuX29mZnNldFRvcCA9IDA7XG4gICAgdGhpcy5fc2tpcE5leHRBbmltYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLl9hbmltYXRlT3B0aW9ucyA9IHtcbiAgICAgIG9uRmluaXNoOiB0aGlzLl9maW5pc2guYmluZCh0aGlzKVxuICAgIH07XG4gICAgdGhpcy5fcXVldWUgPSBuZXcgUXVldWUoKTtcblxuICAgIC8vIEJpbmQgYW5pbWF0aW9uIGhhbmRsZXJzIGFuZCBmaW5pc2ggbWV0aG9kLlxuICAgIHRoaXMuX3NldHVwQW5pbWF0aW9uID0gdGhpcy5fc2V0dXBBbmltYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbiA9IHRoaXMuX3N0YXJ0QW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgaXRlbSBsYXlvdXQgYmFzZWQgb24gaXQncyBjdXJyZW50IGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1MYXlvdXR9XG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcbiAgICB2YXIgZ3JpZFNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBpc1Bvc2l0aW9uaW5nID0gdGhpcy5faXNBY3RpdmU7XG4gICAgdmFyIGlzSnVzdFJlbGVhc2VkID0gcmVsZWFzZS5faXNBY3RpdmUgJiYgcmVsZWFzZS5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPT09IGZhbHNlO1xuICAgIHZhciBhbmltRHVyYXRpb24gPSBpc0p1c3RSZWxlYXNlZFxuICAgICAgPyBncmlkU2V0dGluZ3MuZHJhZ1JlbGVhc2VEdXJhdGlvblxuICAgICAgOiBncmlkU2V0dGluZ3MubGF5b3V0RHVyYXRpb247XG4gICAgdmFyIGFuaW1FYXNpbmcgPSBpc0p1c3RSZWxlYXNlZCA/IGdyaWRTZXR0aW5ncy5kcmFnUmVsZWFzZUVhc2luZyA6IGdyaWRTZXR0aW5ncy5sYXlvdXRFYXNpbmc7XG4gICAgdmFyIGFuaW1FbmFibGVkID0gIWluc3RhbnQgJiYgIXRoaXMuX3NraXBOZXh0QW5pbWF0aW9uICYmIGFuaW1EdXJhdGlvbiA+IDA7XG4gICAgdmFyIGlzQW5pbWF0aW5nO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgY3VycmVudGx5IHBvc2l0aW9uaW5nIHByb2Nlc3MgY3VycmVudCBsYXlvdXQgY2FsbGJhY2tcbiAgICAvLyBxdWV1ZSB3aXRoIGludGVycnVwdGVkIGZsYWcgb24uXG4gICAgaWYgKGlzUG9zaXRpb25pbmcpIHRoaXMuX3F1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuXG4gICAgLy8gTWFyayByZWxlYXNlIHBvc2l0aW9uaW5nIGFzIHN0YXJ0ZWQuXG4gICAgaWYgKGlzSnVzdFJlbGVhc2VkKSByZWxlYXNlLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9IHRydWU7XG5cbiAgICAvLyBQdXNoIHRoZSBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgaWYgKGlzRnVuY3Rpb24ob25GaW5pc2gpKSB0aGlzLl9xdWV1ZS5hZGQob25GaW5pc2gpO1xuXG4gICAgLy8gSWYgbm8gYW5pbWF0aW9ucyBhcmUgbmVlZGVkLCBlYXN5IHBlYXN5IVxuICAgIGlmICghYW5pbUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9mZnNldHMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRhcmdldFN0eWxlcygpO1xuICAgICAgaXNBbmltYXRpbmcgPSBpdGVtLl9hbmltYXRlLmlzQW5pbWF0aW5nKCk7XG4gICAgICB0aGlzLnN0b3AoZmFsc2UsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICAhaXNBbmltYXRpbmcgJiYgc2V0U3R5bGVzKGVsZW1lbnQsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICB0aGlzLl9za2lwTmV4dEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpbmlzaCgpO1xuICAgIH1cblxuICAgIC8vIFNldCBpdGVtIGFjdGl2ZSBhbmQgc3RvcmUgc29tZSBkYXRhIGZvciB0aGUgYW5pbWF0aW9uIHRoYXQgaXMgYWJvdXQgdG8gYmVcbiAgICAvLyB0cmlnZ2VyZWQuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2FuaW1hdGVPcHRpb25zLmVhc2luZyA9IGFuaW1FYXNpbmc7XG4gICAgdGhpcy5fYW5pbWF0ZU9wdGlvbnMuZHVyYXRpb24gPSBhbmltRHVyYXRpb247XG4gICAgdGhpcy5faXNJbnRlcnJ1cHRlZCA9IGlzUG9zaXRpb25pbmc7XG5cbiAgICAvLyBTdGFydCB0aGUgaXRlbSdzIGxheW91dCBhbmltYXRpb24gaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRMYXlvdXRUaWNrKGl0ZW0uX2lkLCB0aGlzLl9zZXR1cEFuaW1hdGlvbiwgdGhpcy5fc3RhcnRBbmltYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgaXRlbSdzIHBvc2l0aW9uIGFuaW1hdGlvbiBpZiBpdCBpcyBjdXJyZW50bHkgYW5pbWF0aW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcm9jZXNzQ2FsbGJhY2tRdWV1ZT1mYWxzZV1cbiAgICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRTdHlsZXNdXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKHByb2Nlc3NDYWxsYmFja1F1ZXVlLCB0YXJnZXRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIENhbmNlbCBhbmltYXRpb24gaW5pdC5cbiAgICBjYW5jZWxMYXlvdXRUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFN0b3AgYW5pbWF0aW9uLlxuICAgIGl0ZW0uX2FuaW1hdGUuc3RvcCh0YXJnZXRTdHlsZXMpO1xuXG4gICAgLy8gUmVtb3ZlIHBvc2l0aW9uaW5nIGNsYXNzLlxuICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG5cbiAgICAvLyBSZXNldCBhY3RpdmUgc3RhdGUuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIC8vIFByb2Nlc3MgY2FsbGJhY2sgcXVldWUgaWYgbmVlZGVkLlxuICAgIGlmIChwcm9jZXNzQ2FsbGJhY2tRdWV1ZSkgdGhpcy5fcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1MYXlvdXR9XG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSwge30pO1xuICAgIHRoaXMuX3F1ZXVlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pdGVtID0gdGhpcy5fY3VycmVudFN0eWxlcyA9IHRoaXMuX3RhcmdldFN0eWxlcyA9IHRoaXMuX2FuaW1hdGVPcHRpb25zID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCB1cGRhdGUgaXRlbSdzIGN1cnJlbnQgbGF5b3V0IG9mZnNldCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl91cGRhdGVPZmZzZXRzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIHRoaXMuX29mZnNldExlZnQgPSByZWxlYXNlLl9pc0FjdGl2ZVxuICAgICAgPyByZWxlYXNlLl9jb250YWluZXJEaWZmWFxuICAgICAgOiBtaWdyYXRlLl9pc0FjdGl2ZVxuICAgICAgPyBtaWdyYXRlLl9jb250YWluZXJEaWZmWFxuICAgICAgOiAwO1xuXG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gcmVsZWFzZS5faXNBY3RpdmVcbiAgICAgID8gcmVsZWFzZS5fY29udGFpbmVyRGlmZllcbiAgICAgIDogbWlncmF0ZS5faXNBY3RpdmVcbiAgICAgID8gbWlncmF0ZS5fY29udGFpbmVyRGlmZllcbiAgICAgIDogMDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCB1cGRhdGUgaXRlbSdzIGxheW91dCB0YXJnZXQgc3R5bGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl91cGRhdGVUYXJnZXRTdHlsZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB0aGlzLl90YXJnZXRTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgdGhpcy5faXRlbS5fbGVmdCArIHRoaXMuX29mZnNldExlZnQsXG4gICAgICB0aGlzLl9pdGVtLl90b3AgKyB0aGlzLl9vZmZzZXRUb3BcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5pc2ggaXRlbSBsYXlvdXQgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgbWlncmF0ZSA9IGl0ZW0uX21pZ3JhdGU7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuXG4gICAgLy8gTWFyayB0aGUgaXRlbSBhcyBpbmFjdGl2ZSBhbmQgcmVtb3ZlIHBvc2l0aW9uaW5nIGNsYXNzZXMuXG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgcmVtb3ZlQ2xhc3MoaXRlbS5fZWxlbWVudCwgaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLml0ZW1Qb3NpdGlvbmluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBGaW5pc2ggdXAgcmVsZWFzZSBhbmQgbWlncmF0aW9uLlxuICAgIGlmIChyZWxlYXNlLl9pc0FjdGl2ZSkgcmVsZWFzZS5zdG9wKCk7XG4gICAgaWYgKG1pZ3JhdGUuX2lzQWN0aXZlKSBtaWdyYXRlLnN0b3AoKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCBpdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBpdGVtIGZvciBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9zZXR1cEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUodGhpcy5faXRlbS5fZWxlbWVudCk7XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSB0cmFuc2xhdGUueDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gdHJhbnNsYXRlLnk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3N0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcblxuICAgIC8vIExldCdzIHVwZGF0ZSB0aGUgb2Zmc2V0IGRhdGEgYW5kIHRhcmdldCBzdHlsZXMuXG4gICAgdGhpcy5fdXBkYXRlT2Zmc2V0cygpO1xuICAgIHRoaXMuX3VwZGF0ZVRhcmdldFN0eWxlcygpO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgYWxyZWFkeSBpbiBjb3JyZWN0IHBvc2l0aW9uIGxldCdzIHF1aXQgZWFybHkuXG4gICAgaWYgKFxuICAgICAgaXRlbS5fbGVmdCA9PT0gdGhpcy5fY3VycmVudExlZnQgLSB0aGlzLl9vZmZzZXRMZWZ0ICYmXG4gICAgICBpdGVtLl90b3AgPT09IHRoaXMuX2N1cnJlbnRUb3AgLSB0aGlzLl9vZmZzZXRUb3BcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLl9pc0ludGVycnVwdGVkKSB0aGlzLnN0b3AoZmFsc2UsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fZmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IGl0ZW0ncyBwb3NpdGlvbmluZyBjbGFzcyBpZiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9pc0ludGVycnVwdGVkKSB7XG4gICAgICBhZGRDbGFzcyhpdGVtLl9lbGVtZW50LCBzZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGN1cnJlbnQgc3R5bGVzIGZvciBhbmltYXRpb24uXG4gICAgdGhpcy5fY3VycmVudFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fY3VycmVudExlZnQsIHRoaXMuX2N1cnJlbnRUb3ApO1xuXG4gICAgLy8gQW5pbWF0ZS5cbiAgICBpdGVtLl9hbmltYXRlLnN0YXJ0KHRoaXMuX2N1cnJlbnRTdHlsZXMsIHRoaXMuX3RhcmdldFN0eWxlcywgdGhpcy5fYW5pbWF0ZU9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciB0ZW1wU3R5bGVzID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBtaWdyYXRlIHByb2Nlc3MgaGFuZGxlciBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbU1pZ3JhdGUoaXRlbSkge1xuICAgIC8vIFByaXZhdGUgcHJvcHMuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgdGhlIG1pZ3JhdGUgcHJvY2VzcyBvZiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkfSB0YXJnZXRHcmlkXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gcG9zaXRpb25cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2NvbnRhaW5lcl1cbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24odGFyZ2V0R3JpZCwgcG9zaXRpb24sIGNvbnRhaW5lcikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBpc1Zpc2libGUgPSBpdGVtLmlzVmlzaWJsZSgpO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldFNldHRpbmdzID0gdGFyZ2V0R3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRHcmlkLl9lbGVtZW50O1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRhcmdldEdyaWQuX2l0ZW1zO1xuICAgIHZhciBjdXJyZW50SW5kZXggPSBncmlkLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIHZhciB0YXJnZXRDb250YWluZXIgPSBjb250YWluZXIgfHwgd2luZG93LmRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldEluZGV4O1xuICAgIHZhciB0YXJnZXRJdGVtO1xuICAgIHZhciBjdXJyZW50Q29udGFpbmVyO1xuICAgIHZhciBvZmZzZXREaWZmO1xuICAgIHZhciBjb250YWluZXJEaWZmO1xuICAgIHZhciB0cmFuc2xhdGU7XG4gICAgdmFyIHRyYW5zbGF0ZVg7XG4gICAgdmFyIHRyYW5zbGF0ZVk7XG5cbiAgICAvLyBHZXQgdGFyZ2V0IGluZGV4LlxuICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICB0YXJnZXRJbmRleCA9IG5vcm1hbGl6ZUFycmF5SW5kZXgodGFyZ2V0SXRlbXMsIHBvc2l0aW9uLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0SXRlbSA9IHRhcmdldEdyaWQuX2dldEl0ZW0ocG9zaXRpb24pO1xuICAgICAgLyoqIEB0b2RvIENvbnNpZGVyIHRocm93aW5nIGFuIGVycm9yIGhlcmUgaW5zdGVhZCBvZiBzaWxlbnRseSBmYWlsaW5nLiAqL1xuICAgICAgaWYgKCF0YXJnZXRJdGVtKSByZXR1cm4gdGhpcztcbiAgICAgIHRhcmdldEluZGV4ID0gdGFyZ2V0SXRlbXMuaW5kZXhPZih0YXJnZXRJdGVtKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHZhbHVlcyBpZiBuZWVkZWQuXG4gICAgaWYgKGl0ZW0uaXNQb3NpdGlvbmluZygpIHx8IHRoaXMuX2lzQWN0aXZlIHx8IGl0ZW0uaXNSZWxlYXNpbmcoKSkge1xuICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZS54O1xuICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZS55O1xuICAgIH1cblxuICAgIC8vIEFib3J0IGN1cnJlbnQgcG9zaXRpb25pbmcuXG4gICAgaWYgKGl0ZW0uaXNQb3NpdGlvbmluZygpKSB7XG4gICAgICBpdGVtLl9sYXlvdXQuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpIH0pO1xuICAgIH1cblxuICAgIC8vIEFib3J0IGN1cnJlbnQgbWlncmF0aW9uLlxuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgdHJhbnNsYXRlWCAtPSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgIHRyYW5zbGF0ZVkgLT0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgICB0aGlzLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IHJlbGVhc2UuXG4gICAgaWYgKGl0ZW0uaXNSZWxlYXNpbmcoKSkge1xuICAgICAgdHJhbnNsYXRlWCAtPSBpdGVtLl9yZWxlYXNlLl9jb250YWluZXJEaWZmWDtcbiAgICAgIHRyYW5zbGF0ZVkgLT0gaXRlbS5fcmVsZWFzZS5fY29udGFpbmVyRGlmZlk7XG4gICAgICBpdGVtLl9yZWxlYXNlLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGN1cnJlbnQgdmlzaWJpbGl0eSBhbmltYXRpb25zLlxuICAgIGl0ZW0uX3Zpc2liaWxpdHkuX3N0b3BBbmltYXRpb24oKTtcblxuICAgIC8vIERlc3Ryb3kgY3VycmVudCBkcmFnLlxuICAgIGlmIChpdGVtLl9kcmFnKSBpdGVtLl9kcmFnLmRlc3Ryb3koKTtcblxuICAgIC8vIFByb2Nlc3MgY3VycmVudCB2aXNpYmlsaXR5IGFuaW1hdGlvbiBxdWV1ZS5cbiAgICBpdGVtLl92aXNpYmlsaXR5Ll9xdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcblxuICAgIC8vIEVtaXQgYmVmb3JlU2VuZCBldmVudC5cbiAgICBpZiAoZ3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlU2VuZCkpIHtcbiAgICAgIGdyaWQuX2VtaXQoZXZlbnRCZWZvcmVTZW5kLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBiZWZvcmVSZWNlaXZlIGV2ZW50LlxuICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVSZWNlaXZlKSkge1xuICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudEJlZm9yZVJlY2VpdmUsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgY3VycmVudCBjbGFzc25hbWVzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIEFkZCBuZXcgY2xhc3NuYW1lcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCB0YXJnZXRTZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIGFkZENsYXNzKGVsZW1lbnQsIGlzVmlzaWJsZSA/IHRhcmdldFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiB0YXJnZXRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gTW92ZSBpdGVtIGluc3RhbmNlIGZyb20gY3VycmVudCBncmlkIHRvIHRhcmdldCBncmlkLlxuICAgIGdyaWQuX2l0ZW1zLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuICAgIGFycmF5SW5zZXJ0KHRhcmdldEl0ZW1zLCBpdGVtLCB0YXJnZXRJbmRleCk7XG5cbiAgICAvLyBVcGRhdGUgaXRlbSdzIGdyaWQgaWQgcmVmZXJlbmNlLlxuICAgIGl0ZW0uX2dyaWRJZCA9IHRhcmdldEdyaWQuX2lkO1xuXG4gICAgLy8gR2V0IGN1cnJlbnQgY29udGFpbmVyLlxuICAgIGN1cnJlbnRDb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAvLyBNb3ZlIHRoZSBpdGVtIGluc2lkZSB0aGUgdGFyZ2V0IGNvbnRhaW5lciBpZiBpdCdzIGRpZmZlcmVudCB0aGFuIHRoZVxuICAgIC8vIGN1cnJlbnQgY29udGFpbmVyLlxuICAgIGlmICh0YXJnZXRDb250YWluZXIgIT09IGN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKHRhcmdldENvbnRhaW5lciwgY3VycmVudENvbnRhaW5lciwgdHJ1ZSk7XG4gICAgICBpZiAoIXRyYW5zbGF0ZSkge1xuICAgICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGUueDtcbiAgICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZS55O1xuICAgICAgfVxuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgdHJhbnNsYXRlWCArIG9mZnNldERpZmYubGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWSArIG9mZnNldERpZmYudG9wXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjaGlsZCBlbGVtZW50J3Mgc3R5bGVzIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBzdGF0ZS5cbiAgICBpdGVtLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCBpc1Zpc2libGUgPyB0YXJnZXRTZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogdGFyZ2V0U2V0dGluZ3MuaGlkZGVuU3R5bGVzKTtcblxuICAgIC8vIFVwZGF0ZSBkaXNwbGF5IHN0eWxlLlxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdibG9jaycgOiAnaGlkZGVuJztcblxuICAgIC8vIEdldCBvZmZzZXQgZGlmZiBmb3IgdGhlIG1pZ3JhdGlvbiBkYXRhLlxuICAgIGNvbnRhaW5lckRpZmYgPSBnZXRPZmZzZXREaWZmKHRhcmdldENvbnRhaW5lciwgdGFyZ2V0RWxlbWVudCwgdHJ1ZSk7XG5cbiAgICAvLyBVcGRhdGUgaXRlbSdzIGNhY2hlZCBkaW1lbnNpb25zIGFuZCBzb3J0IGRhdGEuXG4gICAgaXRlbS5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICBpdGVtLl9yZWZyZXNoU29ydERhdGEoKTtcblxuICAgIC8vIENyZWF0ZSBuZXcgZHJhZyBoYW5kbGVyLlxuICAgIGl0ZW0uX2RyYWcgPSB0YXJnZXRTZXR0aW5ncy5kcmFnRW5hYmxlZCA/IG5ldyBJdGVtRHJhZyhpdGVtKSA6IG51bGw7XG5cbiAgICAvLyBTZXR1cCBtaWdyYXRpb24gZGF0YS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fY29udGFpbmVyID0gdGFyZ2V0Q29udGFpbmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gY29udGFpbmVyRGlmZi5sZWZ0O1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gY29udGFpbmVyRGlmZi50b3A7XG5cbiAgICAvLyBFbWl0IHNlbmQgZXZlbnQuXG4gICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhldmVudFNlbmQpKSB7XG4gICAgICBncmlkLl9lbWl0KGV2ZW50U2VuZCwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEVtaXQgcmVjZWl2ZSBldmVudC5cbiAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50UmVjZWl2ZSkpIHtcbiAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRSZWNlaXZlLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuZCB0aGUgbWlncmF0ZSBwcm9jZXNzIG9mIGFuIGl0ZW0uIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGFib3J0IGFuXG4gICAqIG9uZ29pbmcgbWlncmF0ZSBwcm9jZXNzIChhbmltYXRpb24pIG9yIGZpbmlzaCB0aGUgbWlncmF0ZSBwcm9jZXNzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbYWJvcnQ9ZmFsc2VdXG4gICAqICAtIFNob3VsZCB0aGUgbWlncmF0aW9uIGJlIGFib3J0ZWQ/XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3VycmVudFN0eWxlc11cbiAgICogIC0gT3B0aW9uYWwgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHN0eWxlcy5cbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihhYm9ydCwgY3VycmVudFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBncmlkRWxlbWVudCA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRyYW5zbGF0ZTtcblxuICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IGdyaWRFbGVtZW50KSB7XG4gICAgICBpZiAoIWN1cnJlbnRTdHlsZXMpIHtcbiAgICAgICAgaWYgKGFib3J0KSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRlbXBTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgICAgICAgdHJhbnNsYXRlLnggLSB0aGlzLl9jb250YWluZXJEaWZmWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZS55IC0gdGhpcy5fY29udGFpbmVyRGlmZllcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKGl0ZW0uX2xlZnQsIGl0ZW0uX3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFN0eWxlcyA9IHRlbXBTdHlsZXM7XG4gICAgICB9XG4gICAgICBncmlkRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBjdXJyZW50U3R5bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCh0cnVlKTtcbiAgICB0aGlzLl9pdGVtID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIHRlbXBTdHlsZXMkMSA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVsZWFzZSBwcm9jZXNzIGhhbmRsZXIgY29uc3RydWN0b3IuIEFsdGhvdWdoIHRoaXMgbWlnaHQgc2VlbSBhcyBwcm9wZXJcbiAgICogZml0IGZvciB0aGUgZHJhZyBwcm9jZXNzIHRoaXMgbmVlZHMgdG8gYmUgc2VwYXJhdGVkIGludG8gaXQncyBvd24gbG9naWNcbiAgICogYmVjYXVzZSB0aGVyZSBtaWdodCBiZSBhIHNjZW5hcmlvIHdoZXJlIGRyYWcgaXMgZGlzYWJsZWQsIGJ1dCB0aGUgcmVsZWFzZVxuICAgKiBwcm9jZXNzIHN0aWxsIG5lZWRzIHRvIGJlIGltcGxlbWVudGVkIChkcmFnZ2luZyBmcm9tIGEgZ3JpZCB0byBhbm90aGVyKS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbVJlbGVhc2UoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHJlbGVhc2UgcHJvY2VzcyBvZiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1SZWxlYXNlfVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuXG4gICAgLy8gRmxhZyByZWxlYXNlIGFzIGFjdGl2ZS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICAvLyBBZGQgcmVsZWFzZSBjbGFzcyBuYW1lIHRvIHRoZSByZWxlYXNlZCBlbGVtZW50LlxuICAgIGFkZENsYXNzKGl0ZW0uX2VsZW1lbnQsIGdyaWQuX3NldHRpbmdzLml0ZW1SZWxlYXNpbmdDbGFzcyk7XG5cbiAgICAvLyBFbWl0IGRyYWdSZWxlYXNlU3RhcnQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdSZWxlYXNlU3RhcnQsIGl0ZW0pO1xuXG4gICAgLy8gUG9zaXRpb24gdGhlIHJlbGVhc2VkIGl0ZW0uXG4gICAgaXRlbS5fbGF5b3V0LnN0YXJ0KGZhbHNlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgdGhlIHJlbGVhc2UgcHJvY2VzcyBvZiBhbiBpdGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBhYm9ydCBhblxuICAgKiBvbmdvaW5nIHJlbGVhc2UgcHJvY2VzcyAoYW5pbWF0aW9uKSBvciBmaW5pc2ggdGhlIHJlbGVhc2UgcHJvY2Vzcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Fib3J0PWZhbHNlXVxuICAgKiAgLSBTaG91bGQgdGhlIHJlbGVhc2UgYmUgYWJvcnRlZD8gV2hlbiB0cnVlLCB0aGUgcmVsZWFzZSBlbmQgZXZlbnQgd29uJ3QgYmVcbiAgICogICAgZW1pdHRlZC4gU2V0IHRvIHRydWUgb25seSB3aGVuIHlvdSBuZWVkIHRvIGFib3J0IHRoZSByZWxlYXNlIHByb2Nlc3NcbiAgICogICAgd2hpbGUgdGhlIGl0ZW0gaXMgYW5pbWF0aW5nIHRvIGl0J3MgcG9zaXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3VycmVudFN0eWxlc11cbiAgICogIC0gT3B0aW9uYWwgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHN0eWxlcy5cbiAgICogQHJldHVybnMge0l0ZW1SZWxlYXNlfVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihhYm9ydCwgY3VycmVudFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBjb250YWluZXIgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciB0cmFuc2xhdGU7XG5cbiAgICAvLyBSZXNldCBkYXRhIGFuZCByZW1vdmUgcmVsZWFzaW5nIGNsYXNzIG5hbWUgZnJvbSB0aGUgZWxlbWVudC5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gSWYgdGhlIHJlbGVhc2VkIGVsZW1lbnQgaXMgb3V0c2lkZSB0aGUgZ3JpZCdzIGNvbnRhaW5lciBlbGVtZW50IHB1dCBpdFxuICAgIC8vIGJhY2sgdGhlcmUgYW5kIGFkanVzdCBwb3NpdGlvbiBhY2NvcmRpbmdseS5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBjb250YWluZXIpIHtcbiAgICAgIGlmICghY3VycmVudFN0eWxlcykge1xuICAgICAgICBpZiAoYWJvcnQpIHtcbiAgICAgICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgICAgdGVtcFN0eWxlcyQxLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgICAgIHRyYW5zbGF0ZS54IC0gdGhpcy5fY29udGFpbmVyRGlmZlgsXG4gICAgICAgICAgICB0cmFuc2xhdGUueSAtIHRoaXMuX2NvbnRhaW5lckRpZmZZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wU3R5bGVzJDEudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKGl0ZW0uX2xlZnQsIGl0ZW0uX3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFN0eWxlcyA9IHRlbXBTdHlsZXMkMTtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBjdXJyZW50U3R5bGVzKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGRyYWdSZWxlYXNlRW5kIGV2ZW50LlxuICAgIGlmICghYWJvcnQpIGdyaWQuX2VtaXQoZXZlbnREcmFnUmVsZWFzZUVuZCwgaXRlbSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSk7XG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFJlc2V0IHB1YmxpYyBkYXRhIGFuZCByZW1vdmUgcmVsZWFzaW5nIGNsYXNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUmVsZWFzaW5nQ2xhc3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCB2YWx1ZXMgb2YgdGhlIHByb3ZpZGVkIHN0eWxlcyBkZWZpbml0aW9uIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB7fTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlcykge1xuICAgICAgY3VycmVudFtwcm9wXSA9IGdldFN0eWxlKGVsZW1lbnQsIGdldFN0eWxlTmFtZShwcm9wKSk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFZpc2liaWxpdHkgbWFuYWdlciBmb3IgSXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbVZpc2liaWxpdHkoaXRlbSkge1xuICAgIHZhciBpc0FjdGl2ZSA9IGl0ZW0uX2lzQWN0aXZlO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgc2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG5cbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gU2V0IHVwIHZpc2liaWxpdHkgc3RhdGVzLlxuICAgIHRoaXMuX2lzSGlkZGVuID0gIWlzQWN0aXZlO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG5cbiAgICAvLyBDYWxsYmFjayBxdWV1ZS5cbiAgICB0aGlzLl9xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuXG4gICAgLy8gQmluZCBzaG93L2hpZGUgZmluaXNoZXJzLlxuICAgIHRoaXMuX2ZpbmlzaFNob3cgPSB0aGlzLl9maW5pc2hTaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZmluaXNoSGlkZSA9IHRoaXMuX2ZpbmlzaEhpZGUuYmluZCh0aGlzKTtcblxuICAgIC8vIEZvcmNlIGl0ZW0gdG8gYmUgZWl0aGVyIHZpc2libGUgb3IgaGlkZGVuIG9uIGluaXQuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNBY3RpdmUgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgLy8gU2V0IHZpc2libGUvaGlkZGVuIGNsYXNzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGlzQWN0aXZlID8gc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyA6IHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdHlsZXMgZm9yIHRoZSBjaGlsZCBlbGVtZW50LlxuICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgaXNBY3RpdmUgPyBzZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogc2V0dGluZ3MuaGlkZGVuU3R5bGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTaG93IGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluc3RhbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7SXRlbVZpc2liaWxpdHl9XG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGNhbGxiYWNrID0gaXNGdW5jdGlvbihvbkZpbmlzaCkgPyBvbkZpbmlzaCA6IG51bGw7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIElmIGl0ZW0gaXMgdmlzaWJsZSBjYWxsIHRoZSBjYWxsYmFjayBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICghdGhpcy5faXNTaG93aW5nICYmICF0aGlzLl9pc0hpZGRlbikge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZmFsc2UsIGl0ZW0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBzaG93aW5nIGFuZCBkb2VzIG5vdCBuZWVkIHRvIGJlIHNob3duIGluc3RhbnRseSwgbGV0J3MganVzdFxuICAgIC8vIHB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKHRoaXMuX2lzU2hvd2luZyAmJiAhaW5zdGFudCkge1xuICAgICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGhpZGluZyBvciBoaWRkZW4gcHJvY2VzcyB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGNhbGxiYWNrXG4gICAgLy8gcXVldWUgd2l0aCB0aGUgaW50ZXJydXB0ZWQgZmxhZyBhY3RpdmUsIHVwZGF0ZSBjbGFzc2VzIGFuZCBzZXQgZGlzcGxheVxuICAgIC8vIHRvIGJsb2NrIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd2luZykge1xuICAgICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgICBpZiAoIXRoaXMuX2lzSGlkaW5nKSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIC8vIFB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG5cbiAgICAvLyBVcGRhdGUgdmlzaWJpbGl0eSBzdGF0ZXMuXG4gICAgaXRlbS5faXNBY3RpdmUgPSB0aGlzLl9pc1Nob3dpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gdGhpcy5faXNIaWRkZW4gPSBmYWxzZTtcblxuICAgIC8vIEZpbmFsbHkgbGV0J3Mgc3RhcnQgc2hvdyBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24odHJ1ZSwgaW5zdGFudCwgdGhpcy5fZmluaXNoU2hvdyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSGlkZSBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbnN0YW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1WaXNpYmlsaXR5fVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24ob25GaW5pc2gpID8gb25GaW5pc2ggOiBudWxsO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBJZiBpdGVtIGlzIGFscmVhZHkgaGlkZGVuIGNhbGwgdGhlIGNhbGxiYWNrIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKCF0aGlzLl9pc0hpZGluZyAmJiB0aGlzLl9pc0hpZGRlbikge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZmFsc2UsIGl0ZW0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBoaWRpbmcgYW5kIGRvZXMgbm90IG5lZWQgdG8gYmUgaGlkZGVuIGluc3RhbnRseSwgbGV0J3MganVzdFxuICAgIC8vIHB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKHRoaXMuX2lzSGlkaW5nICYmICFpbnN0YW50KSB7XG4gICAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgc2hvd2luZyBvciB2aXNpYmxlIHByb2Nlc3MgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBjYWxsYmFja1xuICAgIC8vIHF1ZXVlIHdpdGggdGhlIGludGVycnVwdGVkIGZsYWcgYWN0aXZlLCB1cGRhdGUgY2xhc3NlcyBhbmQgc2V0IGRpc3BsYXlcbiAgICAvLyB0byBibG9jayBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKCF0aGlzLl9pc0hpZGluZykge1xuICAgICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gUHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcblxuICAgIC8vIFVwZGF0ZSB2aXNpYmlsaXR5IHN0YXRlcy5cbiAgICB0aGlzLl9pc0hpZGRlbiA9IHRoaXMuX2lzSGlkaW5nID0gdHJ1ZTtcbiAgICBpdGVtLl9pc0FjdGl2ZSA9IHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgLy8gRmluYWxseSBsZXQncyBzdGFydCBoaWRlIGFuaW1hdGlvbi5cbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbihmYWxzZSwgaW5zdGFudCwgdGhpcy5fZmluaXNoSGlkZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtVmlzaWJpbGl0eX1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIFN0b3AgdmlzaWJpbGl0eSBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RvcEFuaW1hdGlvbih7fSk7XG5cbiAgICAvLyBGaXJlIGFsbCB1bmNvbXBsZXRlZCBjYWxsYmFja3Mgd2l0aCBpbnRlcnJ1cHRlZCBmbGFnIGFuZCBkZXN0cm95IHRoZSBxdWV1ZS5cbiAgICBxdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKS5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgdmlzaWJsZS9oaWRkZW4gY2xhc3Nlcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgc3RhdGUuXG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNIaWRpbmcgPSB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRoaXMuX2lzSGlkZGVuID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9WaXNpYmxlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc3RhbnRdXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbih0b1Zpc2libGUsIGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRTdHlsZXMgPSB0b1Zpc2libGUgPyBzZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogc2V0dGluZ3MuaGlkZGVuU3R5bGVzO1xuICAgIHZhciBkdXJhdGlvbiA9IHBhcnNlSW50KHRvVmlzaWJsZSA/IHNldHRpbmdzLnNob3dEdXJhdGlvbiA6IHNldHRpbmdzLmhpZGVEdXJhdGlvbikgfHwgMDtcbiAgICB2YXIgZWFzaW5nID0gKHRvVmlzaWJsZSA/IHNldHRpbmdzLnNob3dFYXNpbmcgOiBzZXR0aW5ncy5oaWRlRWFzaW5nKSB8fCAnZWFzZSc7XG4gICAgdmFyIGlzSW5zdGFudCA9IGluc3RhbnQgfHwgZHVyYXRpb24gPD0gMDtcbiAgICB2YXIgY3VycmVudFN0eWxlcztcblxuICAgIC8vIE5vIHRhcmdldCBzdHlsZXM/IExldCdzIHF1aXQgZWFybHkuXG4gICAgaWYgKCF0YXJnZXRTdHlsZXMpIHtcbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCB2aXNpYmlsaXR5IHRpY2suXG4gICAgY2FuY2VsVmlzaWJpbGl0eVRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gSWYgd2UgbmVlZCB0byBhcHBseSB0aGUgc3R5bGVzIGluc3RhbnRseSB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICBpZiAoaXNJbnN0YW50KSB7XG4gICAgICBpZiAoaXRlbS5fYW5pbWF0ZUNoaWxkLmlzQW5pbWF0aW5nKCkpIHtcbiAgICAgICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgdGFyZ2V0U3R5bGVzKTtcbiAgICAgIH1cbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvbiBpbiB0aGUgbmV4dCB0aWNrICh0byBhdm9pZCBsYXlvdXQgdGhyYXNoaW5nKS5cbiAgICBhZGRWaXNpYmlsaXR5VGljayhcbiAgICAgIGl0ZW0uX2lkLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSBnZXRDdXJyZW50U3R5bGVzKGl0ZW0uX2NoaWxkLCB0YXJnZXRTdHlsZXMpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpdGVtLl9hbmltYXRlQ2hpbGQuc3RhcnQoY3VycmVudFN0eWxlcywgdGFyZ2V0U3R5bGVzLCB7XG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogZWFzaW5nLFxuICAgICAgICAgIG9uRmluaXNoOiBvbkZpbmlzaFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0U3R5bGVzXVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9zdG9wQW5pbWF0aW9uID0gZnVuY3Rpb24odGFyZ2V0U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIGNhbmNlbFZpc2liaWxpdHlUaWNrKGl0ZW0uX2lkKTtcbiAgICBpdGVtLl9hbmltYXRlQ2hpbGQuc3RvcCh0YXJnZXRTdHlsZXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5pc2ggc2hvdyBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fZmluaXNoU2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0hpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCB0aGlzLl9pdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIGhpZGUgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqL1xuICB2YXIgZmluaXNoU3R5bGVzID0ge307XG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fZmluaXNoSGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5faXNIaWRkZW4pIHJldHVybjtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdGhpcy5faXNIaWRpbmcgPSBmYWxzZTtcbiAgICBmaW5pc2hTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKDAsIDApO1xuICAgIGl0ZW0uX2xheW91dC5zdG9wKHRydWUsIGZpbmlzaFN0eWxlcyk7XG4gICAgaXRlbS5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCBpdGVtKTtcbiAgfTtcblxuICB2YXIgaWQgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdW5pcXVlIG51bWVyaWMgaWQgKGluY3JlbWVudHMgYSBiYXNlIHZhbHVlIG9uIGV2ZXJ5IGNhbGwpLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlVWlkKCkge1xuICAgIHJldHVybiArK2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgSXRlbSBpbnN0YW5jZSBmb3IgYSBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaXNBY3RpdmVdXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtKGdyaWQsIGVsZW1lbnQsIGlzQWN0aXZlKSB7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2UgaWQuXG4gICAgdGhpcy5faWQgPSBjcmVhdGVVaWQoKTtcblxuICAgIC8vIFJlZmVyZW5jZSB0byBjb25uZWN0ZWQgR3JpZCBpbnN0YW5jZSdzIGlkLlxuICAgIHRoaXMuX2dyaWRJZCA9IGdyaWQuX2lkO1xuXG4gICAgLy8gRGVzdHJveWVkIGZsYWcuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNldCB1cCBpbml0aWFsIHBvc2l0aW9ucy5cbiAgICB0aGlzLl9sZWZ0ID0gMDtcbiAgICB0aGlzLl90b3AgPSAwO1xuXG4gICAgLy8gVGhlIGVsZW1lbnRzLlxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2NoaWxkID0gZWxlbWVudC5jaGlsZHJlblswXTtcblxuICAgIC8vIElmIHRoZSBwcm92aWRlZCBpdGVtIGVsZW1lbnQgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBncmlkIGNvbnRhaW5lclxuICAgIC8vIGVsZW1lbnQsIGFwcGVuZCBpdCB0byB0aGUgZ3JpZCBjb250YWluZXIuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gZ3JpZC5fZWxlbWVudCkge1xuICAgICAgZ3JpZC5fZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaXRlbSBjbGFzcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuXG4gICAgLy8gSWYgaXNBY3RpdmUgaXMgbm90IGRlZmluZWQsIGxldCdzIHRyeSB0byBhdXRvLWRldGVjdCBpdC5cbiAgICBpZiAodHlwZW9mIGlzQWN0aXZlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIGlzQWN0aXZlID0gZ2V0U3R5bGUoZWxlbWVudCwgJ2Rpc3BsYXknKSAhPT0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBhY3RpdmUgc3RhdGUgKGRlZmluZXMgaWYgdGhlIGl0ZW0gaXMgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBsYXlvdXRcbiAgICAvLyBvciBub3QpLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG5cbiAgICAvLyBTZXQgZWxlbWVudCdzIGluaXRpYWwgcG9zaXRpb24gc3R5bGVzLlxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKDAsIDApO1xuXG4gICAgLy8gSW5pdGlhdGUgaXRlbSdzIGFuaW1hdGlvbiBjb250cm9sbGVycy5cbiAgICB0aGlzLl9hbmltYXRlID0gbmV3IEl0ZW1BbmltYXRlKGVsZW1lbnQpO1xuICAgIHRoaXMuX2FuaW1hdGVDaGlsZCA9IG5ldyBJdGVtQW5pbWF0ZSh0aGlzLl9jaGlsZCk7XG5cbiAgICAvLyBTZXR1cCB2aXNpYmlsaXR5IGhhbmRsZXIuXG4gICAgdGhpcy5fdmlzaWJpbGl0eSA9IG5ldyBJdGVtVmlzaWJpbGl0eSh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBsYXlvdXQgaGFuZGxlci5cbiAgICB0aGlzLl9sYXlvdXQgPSBuZXcgSXRlbUxheW91dCh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBtaWdyYXRpb24gaGFuZGxlciBkYXRhLlxuICAgIHRoaXMuX21pZ3JhdGUgPSBuZXcgSXRlbU1pZ3JhdGUodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgcmVsZWFzZSBoYW5kbGVyLiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBpcyBmdWxseSBsaW5rZWQgdG8gZHJhZ2dpbmdcbiAgICAvLyB0aGlzIHN0aWxsIG5lZWRzIHRvIGJlIGFsd2F5cyBpbnN0YW50aWF0ZWQgdG8gaGFuZGxlIG1pZ3JhdGlvbiBzY2VuYXJpb3NcbiAgICAvLyBjb3JyZWN0bHkuXG4gICAgdGhpcy5fcmVsZWFzZSA9IG5ldyBJdGVtUmVsZWFzZSh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBkcmFnIHBsYWNlaG9sZGVyIGhhbmRsZXIuIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGlzIGZ1bGx5IGxpbmtlZCB0b1xuICAgIC8vIGRyYWdnaW5nIHRoaXMgc3RpbGwgbmVlZHMgdG8gYmUgYWx3YXlzIGluc3RhbnRpYXRlZCB0byBoYW5kbGUgbWlncmF0aW9uXG4gICAgLy8gc2NlbmFyaW9zIGNvcnJlY3RseS5cbiAgICB0aGlzLl9kcmFnUGxhY2Vob2xkZXIgPSBuZXcgSXRlbURyYWdQbGFjZWhvbGRlcih0aGlzKTtcblxuICAgIC8vIFNldCB1cCBkcmFnIGhhbmRsZXIuXG4gICAgdGhpcy5fZHJhZyA9IHNldHRpbmdzLmRyYWdFbmFibGVkID8gbmV3IEl0ZW1EcmFnKHRoaXMpIDogbnVsbDtcblxuICAgIC8vIFNldCB1cCB0aGUgaW5pdGlhbCBkaW1lbnNpb25zIGFuZCBzb3J0IGRhdGEuXG4gICAgdGhpcy5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICB0aGlzLl9yZWZyZXNoU29ydERhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluc3RhbmNlIGdyaWQgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEdyaWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ3JpZEluc3RhbmNlc1t0aGlzLl9ncmlkSWRdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluc3RhbmNlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgd2lkdGguXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgaGVpZ2h0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgbWFyZ2lucy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogICAtIFRoZSByZXR1cm5lZCBvYmplY3QgY29udGFpbnMgbGVmdCwgcmlnaHQsIHRvcCBhbmQgYm90dG9tIHByb3BlcnRpZXNcbiAgICogICAgIHdoaWNoIGluZGljYXRlIHRoZSBpdGVtIGVsZW1lbnQncyBjYWNoZWQgbWFyZ2lucy5cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldE1hcmdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiB0aGlzLl9tYXJnaW5MZWZ0LFxuICAgICAgcmlnaHQ6IHRoaXMuX21hcmdpblJpZ2h0LFxuICAgICAgdG9wOiB0aGlzLl9tYXJnaW5Ub3AsXG4gICAgICBib3R0b206IHRoaXMuX21hcmdpbkJvdHRvbVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiAgIC0gVGhlIHJldHVybmVkIG9iamVjdCBjb250YWlucyBsZWZ0IGFuZCB0b3AgcHJvcGVydGllcyB3aGljaCBpbmRpY2F0ZSB0aGVcbiAgICogICAgIGl0ZW0gZWxlbWVudCdzIGNhY2hlZCBwb3NpdGlvbiBpbiB0aGUgZ3JpZC5cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IHRoaXMuX2xlZnQsXG4gICAgICB0b3A6IHRoaXMuX3RvcFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGFjdGl2ZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gdmlzaWJsZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl92aXNpYmlsaXR5ICYmICF0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGRlbjtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgYW5pbWF0ZWQgdG8gdmlzaWJsZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Nob3dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fdmlzaWJpbGl0eSAmJiB0aGlzLl92aXNpYmlsaXR5Ll9pc1Nob3dpbmcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyBhbmltYXRlZCB0byBoaWRkZW4/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNIaWRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fdmlzaWJpbGl0eSAmJiB0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGluZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIHBvc2l0aW9uaW5nP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzUG9zaXRpb25pbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fbGF5b3V0ICYmIHRoaXMuX2xheW91dC5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyBkcmFnZ2VkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fZHJhZyAmJiB0aGlzLl9kcmFnLl9pc0FjdGl2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIHJlbGVhc2VkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzUmVsZWFzaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3JlbGVhc2UgJiYgdGhpcy5fcmVsZWFzZS5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBkZXN0cm95ZWQ/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNEZXN0cm95ZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEZXN0cm95ZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGUgaXRlbSdzIGRpbWVuc2lvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuX3JlZnJlc2hEaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX3Zpc2liaWxpdHkuX2lzSGlkZGVuKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGRyYWdQbGFjZWhvbGRlciA9IHRoaXMuX2RyYWdQbGFjZWhvbGRlcjtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgd2lkdGggYW5kIGhlaWdodC5cbiAgICB0aGlzLl93aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG5cbiAgICAvLyBDYWxjdWxhdGUgbWFyZ2lucyAoaWdub3JlIG5lZ2F0aXZlIG1hcmdpbnMpLlxuICAgIHRoaXMuX21hcmdpbkxlZnQgPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi1sZWZ0JykpO1xuICAgIHRoaXMuX21hcmdpblJpZ2h0ID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tcmlnaHQnKSk7XG4gICAgdGhpcy5fbWFyZ2luVG9wID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tdG9wJykpO1xuICAgIHRoaXMuX21hcmdpbkJvdHRvbSA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLWJvdHRvbScpKTtcblxuICAgIC8vIEtlZXAgZHJhZyBwbGFjZWhvbGRlcidzIGRpbWVuc2lvbnMgc3luY2VkIHdpdGggdGhlIGl0ZW0ncy5cbiAgICBpZiAoZHJhZ1BsYWNlaG9sZGVyKSB7XG4gICAgICBkcmFnUGxhY2Vob2xkZXIudXBkYXRlRGltZW5zaW9ucyh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoIGFuZCBzdG9yZSBpdGVtJ3Mgc29ydCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9yZWZyZXNoU29ydERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBkYXRhID0gKHRoaXMuX3NvcnREYXRhID0ge30pO1xuICAgIHZhciBnZXR0ZXJzID0gdGhpcy5nZXRHcmlkKCkuX3NldHRpbmdzLnNvcnREYXRhO1xuICAgIHZhciBwcm9wO1xuXG4gICAgZm9yIChwcm9wIGluIGdldHRlcnMpIHtcbiAgICAgIGRhdGFbcHJvcF0gPSBnZXR0ZXJzW3Byb3BdKHRoaXMsIHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpdGVtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlRWxlbWVudD1mYWxzZV1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24ocmVtb3ZlRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGluZGV4ID0gZ3JpZC5faXRlbXMuaW5kZXhPZih0aGlzKTtcblxuICAgIC8vIERlc3Ryb3kgaGFuZGxlcnMuXG4gICAgdGhpcy5fcmVsZWFzZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fbWlncmF0ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fbGF5b3V0LmRlc3Ryb3koKTtcbiAgICB0aGlzLl92aXNpYmlsaXR5LmRlc3Ryb3koKTtcbiAgICB0aGlzLl9hbmltYXRlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9hbmltYXRlQ2hpbGQuZGVzdHJveSgpO1xuICAgIHRoaXMuX2RyYWdQbGFjZWhvbGRlci5kZXN0cm95KCk7XG4gICAgdGhpcy5fZHJhZyAmJiB0aGlzLl9kcmFnLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgaW5saW5lIHN0eWxlcy5cbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB0aGlzLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAvLyBSZW1vdmUgaXRlbSBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSBHcmlkIGluc3RhbmNlIGlmIGl0IHN0aWxsIGV4aXN0cyB0aGVyZS5cbiAgICBpbmRleCA+IC0xICYmIGdyaWQuX2l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBSZW1vdmUgZWxlbWVudCBmcm9tIERPTS5cbiAgICByZW1vdmVFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgIC8vIFJlc2V0IHN0YXRlLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxheW91dCBhbGdvcml0aG0gZm9yIE11dXJpLiBCYXNlZCBvbiBNQVhSRUNUUyBhcHByb2FjaFxuICAgKiBhcyBkZXNjcmliZWQgYnkgSnVra2EgSnlsw6Rua2kgaW4gaGlzIHN1cnZleTogXCJBIFRob3VzYW5kIFdheXMgdG8gUGFjayB0aGVcbiAgICogQmluIC0gQSBQcmFjdGljYWwgQXBwcm9hY2ggdG8gVHdvLURpbWVuc2lvbmFsIFJlY3RhbmdsZSBCaW4gUGFja2luZy5cIi5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBQYWNrZXIoKSB7XG4gICAgdGhpcy5fc2xvdHMgPSBbXTtcbiAgICB0aGlzLl9zbG90U2l6ZXMgPSBbXTtcbiAgICB0aGlzLl9mcmVlU2xvdHMgPSBbXTtcbiAgICB0aGlzLl9uZXdTbG90cyA9IFtdO1xuICAgIHRoaXMuX3JlY3RJdGVtID0ge307XG4gICAgdGhpcy5fcmVjdFN0b3JlID0gW107XG4gICAgdGhpcy5fcmVjdElkID0gMDtcblxuICAgIC8vIFRoZSBsYXlvdXQgcmV0dXJuIGRhdGEsIHdoaWNoIHdpbGwgYmUgcG9wdWxhdGVkIGluIGdldExheW91dC5cbiAgICB0aGlzLl9sYXlvdXQgPSB7XG4gICAgICBzbG90czogbnVsbCxcbiAgICAgIHNldFdpZHRoOiBmYWxzZSxcbiAgICAgIHNldEhlaWdodDogZmFsc2UsXG4gICAgICB3aWR0aDogZmFsc2UsXG4gICAgICBoZWlnaHQ6IGZhbHNlXG4gICAgfTtcblxuICAgIC8vIEJpbmQgc29ydCBoYW5kbGVycy5cbiAgICB0aGlzLl9zb3J0UmVjdHNMZWZ0VG9wID0gdGhpcy5fc29ydFJlY3RzTGVmdFRvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NvcnRSZWN0c1RvcExlZnQgPSB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0LmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0l0ZW1bXX0gaXRlbXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICogQHBhcmFtIHtOdW1iZXJbXX0gW3Nsb3RzXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZmlsbEdhcHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaG9yaXpvbnRhbD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGlnblJpZ2h0PWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsaWduQm90dG9tPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7TGF5b3V0RGF0YX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24oaXRlbXMsIHdpZHRoLCBoZWlnaHQsIHNsb3RzLCBvcHRpb25zKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICB2YXIgZmlsbEdhcHMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuZmlsbEdhcHMpO1xuICAgIHZhciBpc0hvcml6b250YWwgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuaG9yaXpvbnRhbCk7XG4gICAgdmFyIGFsaWduUmlnaHQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuYWxpZ25SaWdodCk7XG4gICAgdmFyIGFsaWduQm90dG9tID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmFsaWduQm90dG9tKTtcbiAgICB2YXIgcm91bmRpbmcgPSAhIShvcHRpb25zICYmIG9wdGlvbnMucm91bmRpbmcpO1xuICAgIHZhciBzbG90U2l6ZXMgPSB0aGlzLl9zbG90U2l6ZXM7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZXNldCBsYXlvdXQgZGF0YS5cbiAgICBsYXlvdXQuc2xvdHMgPSBzbG90cyA/IHNsb3RzIDogdGhpcy5fc2xvdHM7XG4gICAgbGF5b3V0LndpZHRoID0gaXNIb3Jpem9udGFsID8gMCA6IHJvdW5kaW5nID8gTWF0aC5yb3VuZCh3aWR0aCkgOiB3aWR0aDtcbiAgICBsYXlvdXQuaGVpZ2h0ID0gIWlzSG9yaXpvbnRhbCA/IDAgOiByb3VuZGluZyA/IE1hdGgucm91bmQoaGVpZ2h0KSA6IGhlaWdodDtcbiAgICBsYXlvdXQuc2V0V2lkdGggPSBpc0hvcml6b250YWw7XG4gICAgbGF5b3V0LnNldEhlaWdodCA9ICFpc0hvcml6b250YWw7XG5cbiAgICAvLyBNYWtlIHN1cmUgc2xvdHMgYW5kIHNsb3Qgc2l6ZSBhcnJheXMgYXJlIHJlc2V0LlxuICAgIGxheW91dC5zbG90cy5sZW5ndGggPSAwO1xuICAgIHNsb3RTaXplcy5sZW5ndGggPSAwO1xuXG4gICAgLy8gTm8gbmVlZCB0byBnbyBmdXJ0aGVyIGlmIGl0ZW1zIGRvIG5vdCBleGlzdC5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuIGxheW91dDtcblxuICAgIC8vIEZpbmQgc2xvdHMgZm9yIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fYWRkU2xvdChpdGVtc1tpXSwgaXNIb3Jpem9udGFsLCBmaWxsR2Fwcywgcm91bmRpbmcsIGFsaWduUmlnaHQgfHwgYWxpZ25Cb3R0b20pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBhbGlnbm1lbnQgaXMgc2V0IHRvIHJpZ2h0IHdlIG5lZWQgdG8gYWRqdXN0IHRoZSByZXN1bHRzLlxuICAgIGlmIChhbGlnblJpZ2h0KSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGF5b3V0LnNsb3RzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgIGxheW91dC5zbG90c1tpXSA9IGxheW91dC53aWR0aCAtIChsYXlvdXQuc2xvdHNbaV0gKyBzbG90U2l6ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBhbGlnbm1lbnQgaXMgc2V0IHRvIGJvdHRvbSB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgcmVzdWx0cy5cbiAgICBpZiAoYWxpZ25Cb3R0b20pIHtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBsYXlvdXQuc2xvdHMubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgbGF5b3V0LnNsb3RzW2ldID0gbGF5b3V0LmhlaWdodCAtIChsYXlvdXQuc2xvdHNbaV0gKyBzbG90U2l6ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IHNsb3RzIGFycmF5cyBhbmQgcmVjdCBpZC5cbiAgICBzbG90U2l6ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcmVlU2xvdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9uZXdTbG90cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX3JlY3RJZCA9IDA7XG5cbiAgICByZXR1cm4gbGF5b3V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcG9zaXRpb24gZm9yIHRoZSBsYXlvdXQgaXRlbS4gUmV0dXJucyB0aGUgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAqIG9mIHRoZSBpdGVtIGluIHBpeGVscy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNIb3Jpem9udGFsXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmlsbEdhcHNcbiAgICogQHBhcmFtIHtCb29sZWFufSByb3VuZGluZ1xuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9hZGRTbG90ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlcHMgPSAwLjAwMTtcbiAgICB2YXIgaXRlbVNsb3QgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSwgaXNIb3Jpem9udGFsLCBmaWxsR2Fwcywgcm91bmRpbmcsIHRyYWNrU2l6ZSkge1xuICAgICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICAgIHZhciBmcmVlU2xvdHMgPSB0aGlzLl9mcmVlU2xvdHM7XG4gICAgICB2YXIgbmV3U2xvdHMgPSB0aGlzLl9uZXdTbG90cztcbiAgICAgIHZhciByZWN0O1xuICAgICAgdmFyIHJlY3RJZDtcbiAgICAgIHZhciBwb3RlbnRpYWxTbG90cztcbiAgICAgIHZhciBpZ25vcmVDdXJyZW50U2xvdHM7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBpaTtcblxuICAgICAgLy8gUmVzZXQgbmV3IHNsb3RzLlxuICAgICAgbmV3U2xvdHMubGVuZ3RoID0gMDtcblxuICAgICAgLy8gU2V0IGl0ZW0gc2xvdCBpbml0aWFsIGRhdGEuXG4gICAgICBpdGVtU2xvdC5sZWZ0ID0gbnVsbDtcbiAgICAgIGl0ZW1TbG90LnRvcCA9IG51bGw7XG4gICAgICBpdGVtU2xvdC53aWR0aCA9IGl0ZW0uX3dpZHRoICsgaXRlbS5fbWFyZ2luTGVmdCArIGl0ZW0uX21hcmdpblJpZ2h0O1xuICAgICAgaXRlbVNsb3QuaGVpZ2h0ID0gaXRlbS5faGVpZ2h0ICsgaXRlbS5fbWFyZ2luVG9wICsgaXRlbS5fbWFyZ2luQm90dG9tO1xuXG4gICAgICAvLyBSb3VuZCBpdGVtIHNsb3Qgd2lkdGggYW5kIGhlaWdodCBpZiBuZWVkZWQuXG4gICAgICBpZiAocm91bmRpbmcpIHtcbiAgICAgICAgaXRlbVNsb3Qud2lkdGggPSBNYXRoLnJvdW5kKGl0ZW1TbG90LndpZHRoKTtcbiAgICAgICAgaXRlbVNsb3QuaGVpZ2h0ID0gTWF0aC5yb3VuZChpdGVtU2xvdC5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcnkgdG8gZmluZCBhIHNsb3QgZm9yIHRoZSBpdGVtLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGZyZWVTbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZWN0SWQgPSBmcmVlU2xvdHNbaV07XG4gICAgICAgIGlmICghcmVjdElkKSBjb250aW51ZTtcbiAgICAgICAgcmVjdCA9IHRoaXMuX2dldFJlY3QocmVjdElkKTtcbiAgICAgICAgaWYgKGl0ZW1TbG90LndpZHRoIDw9IHJlY3Qud2lkdGggKyBlcHMgJiYgaXRlbVNsb3QuaGVpZ2h0IDw9IHJlY3QuaGVpZ2h0ICsgZXBzKSB7XG4gICAgICAgICAgaXRlbVNsb3QubGVmdCA9IHJlY3QubGVmdDtcbiAgICAgICAgICBpdGVtU2xvdC50b3AgPSByZWN0LnRvcDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBzbG90IHdhcyBmb3VuZCBmb3IgdGhlIGl0ZW0uXG4gICAgICBpZiAoaXRlbVNsb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgaXRlbSBpbiB0byB0aGUgYm90dG9tIGxlZnQgKHZlcnRpY2FsIG1vZGUpIG9yIHRvcCByaWdodFxuICAgICAgICAvLyAoaG9yaXpvbnRhbCBtb2RlKSBvZiB0aGUgZ3JpZC5cbiAgICAgICAgaXRlbVNsb3QubGVmdCA9ICFpc0hvcml6b250YWwgPyAwIDogbGF5b3V0LndpZHRoO1xuICAgICAgICBpdGVtU2xvdC50b3AgPSAhaXNIb3Jpem9udGFsID8gbGF5b3V0LmhlaWdodCA6IDA7XG5cbiAgICAgICAgLy8gSWYgZ2FwcyBkb24ndCBuZWVkIGZpbGxpbmcgZG8gbm90IGFkZCBhbnkgY3VycmVudCBzbG90cyB0byB0aGUgbmV3XG4gICAgICAgIC8vIHNsb3RzIGFycmF5LlxuICAgICAgICBpZiAoIWZpbGxHYXBzKSB7XG4gICAgICAgICAgaWdub3JlQ3VycmVudFNsb3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJbiB2ZXJ0aWNhbCBtb2RlLCBpZiB0aGUgaXRlbSdzIGJvdHRvbSBvdmVybGFwcyB0aGUgZ3JpZCdzIGJvdHRvbS5cbiAgICAgIGlmICghaXNIb3Jpem9udGFsICYmIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCA+IGxheW91dC5oZWlnaHQpIHtcbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgbGVmdCBlZGdlLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgPiAwKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaCh0aGlzLl9hZGRSZWN0KDAsIGxheW91dC5oZWlnaHQsIGl0ZW1TbG90LmxlZnQsIEluZmluaXR5KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSByaWdodCBlZGdlLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCA8IGxheW91dC53aWR0aCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgICBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGgsXG4gICAgICAgICAgICAgIGxheW91dC5oZWlnaHQsXG4gICAgICAgICAgICAgIGxheW91dC53aWR0aCAtIGl0ZW1TbG90LmxlZnQgLSBpdGVtU2xvdC53aWR0aCxcbiAgICAgICAgICAgICAgSW5maW5pdHlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGdyaWQgaGVpZ2h0LlxuICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICAvLyBJbiBob3Jpem9udGFsIG1vZGUsIGlmIHRoZSBpdGVtJ3MgcmlnaHQgb3ZlcmxhcHMgdGhlIGdyaWQncyByaWdodCBlZGdlLlxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCAmJiBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGggPiBsYXlvdXQud2lkdGgpIHtcbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgdG9wLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LnRvcCA+IDApIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKHRoaXMuX2FkZFJlY3QobGF5b3V0LndpZHRoLCAwLCBJbmZpbml0eSwgaXRlbVNsb3QudG9wKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSBib3R0b20sIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0IDwgbGF5b3V0LmhlaWdodCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgICBsYXlvdXQud2lkdGgsXG4gICAgICAgICAgICAgIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCxcbiAgICAgICAgICAgICAgSW5maW5pdHksXG4gICAgICAgICAgICAgIGxheW91dC5oZWlnaHQgLSBpdGVtU2xvdC50b3AgLSBpdGVtU2xvdC5oZWlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGdyaWQgd2lkdGguXG4gICAgICAgIGxheW91dC53aWR0aCA9IGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aDtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYW4gdXAgdGhlIGN1cnJlbnQgc2xvdHMgbWFraW5nIHN1cmUgdGhlcmUgYXJlIG5vIG9sZCBzbG90cyB0aGF0XG4gICAgICAvLyBvdmVybGFwIHdpdGggdGhlIGl0ZW0uIElmIGFuIG9sZCBzbG90IG92ZXJsYXBzIHdpdGggdGhlIGl0ZW0sIHNwbGl0IGl0XG4gICAgICAvLyBpbnRvIHNtYWxsZXIgc2xvdHMgaWYgbmVjZXNzYXJ5LlxuICAgICAgZm9yIChpID0gZmlsbEdhcHMgPyAwIDogaWdub3JlQ3VycmVudFNsb3RzID8gZnJlZVNsb3RzLmxlbmd0aCA6IGk7IGkgPCBmcmVlU2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVjdElkID0gZnJlZVNsb3RzW2ldO1xuICAgICAgICBpZiAoIXJlY3RJZCkgY29udGludWU7XG4gICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgIHBvdGVudGlhbFNsb3RzID0gdGhpcy5fc3BsaXRSZWN0KHJlY3QsIGl0ZW1TbG90KTtcbiAgICAgICAgZm9yIChpaSA9IDA7IGlpIDwgcG90ZW50aWFsU2xvdHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgcmVjdElkID0gcG90ZW50aWFsU2xvdHNbaWldO1xuICAgICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgICAgLy8gTGV0J3MgbWFrZSBzdXJlIGhlcmUgdGhhdCB3ZSBoYXZlIGEgYmlnIGVub3VnaCBzbG90XG4gICAgICAgICAgLy8gKHdpZHRoL2hlaWdodCA+IDAuNDlweCkgYW5kIGFsc28gbGV0J3MgbWFrZSBzdXJlIHRoYXQgdGhlIHNsb3QgaXNcbiAgICAgICAgICAvLyB3aXRoaW4gdGhlIGJvdW5kYXJpZXMgb2YgdGhlIGdyaWQuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVjdC53aWR0aCA+IDAuNDkgJiZcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ID4gMC40OSAmJlxuICAgICAgICAgICAgKCghaXNIb3Jpem9udGFsICYmIHJlY3QudG9wIDwgbGF5b3V0LmhlaWdodCkgfHxcbiAgICAgICAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPCBsYXlvdXQud2lkdGgpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbmV3U2xvdHMucHVzaChyZWN0SWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTYW5pdGl6ZSBuZXcgc2xvdHMuXG4gICAgICBpZiAobmV3U2xvdHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3B1cmdlUmVjdHMobmV3U2xvdHMpLnNvcnQoXG4gICAgICAgICAgaXNIb3Jpem9udGFsID8gdGhpcy5fc29ydFJlY3RzTGVmdFRvcCA6IHRoaXMuX3NvcnRSZWN0c1RvcExlZnRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGxheW91dCB3aWR0aC9oZWlnaHQuXG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIGxheW91dC53aWR0aCA9IE1hdGgubWF4KGxheW91dC53aWR0aCwgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxheW91dC5oZWlnaHQgPSBNYXRoLm1heChsYXlvdXQuaGVpZ2h0LCBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgaXRlbSBzbG90IGRhdGEgdG8gbGF5b3V0IHNsb3RzIChhbmQgc3RvcmUgdGhlIHNsb3Qgc2l6ZSBmb3IgbGF0ZXJcbiAgICAgIC8vIHVzYWdlIHRvbyBpZiBuZWNlc3NhcnkpLlxuICAgICAgbGF5b3V0LnNsb3RzLnB1c2goaXRlbVNsb3QubGVmdCwgaXRlbVNsb3QudG9wKTtcbiAgICAgIGlmICh0cmFja1NpemUpIHRoaXMuX3Nsb3RTaXplcy5wdXNoKGl0ZW1TbG90LndpZHRoLCBpdGVtU2xvdC5oZWlnaHQpO1xuXG4gICAgICAvLyBGcmVlL25ldyBzbG90cyBzd2l0Y2hlcm9vIVxuICAgICAgdGhpcy5fZnJlZVNsb3RzID0gbmV3U2xvdHM7XG4gICAgICB0aGlzLl9uZXdTbG90cyA9IGZyZWVTbG90cztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgcmVjdGFuZ2xlIHRvIHRoZSByZWN0YW5nbGUgc3RvcmUuIFJldHVybnMgdGhlIGlkIG9mIHRoZSBuZXdcbiAgICogcmVjdGFuZ2xlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVmdFxuICAgKiBAcGFyYW0ge051bWJlcn0gdG9wXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEByZXR1cm5zIHtSZWN0SWR9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9hZGRSZWN0ID0gZnVuY3Rpb24obGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIHJlY3RJZCA9ICsrdGhpcy5fcmVjdElkO1xuICAgIHZhciByZWN0U3RvcmUgPSB0aGlzLl9yZWN0U3RvcmU7XG5cbiAgICByZWN0U3RvcmVbcmVjdElkXSA9IGxlZnQgfHwgMDtcbiAgICByZWN0U3RvcmVbKyt0aGlzLl9yZWN0SWRdID0gdG9wIHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IHdpZHRoIHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IGhlaWdodCB8fCAwO1xuXG4gICAgcmV0dXJuIHJlY3RJZDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHJlY3RhbmdsZSBkYXRhIGZyb20gdGhlIHJlY3RhbmdsZSBzdG9yZSBieSBpZC4gT3B0aW9uYWxseSB5b3UgY2FuXG4gICAqIHByb3ZpZGUgYSB0YXJnZXQgb2JqZWN0IHdoZXJlIHRoZSByZWN0YW5nbGUgZGF0YSB3aWxsIGJlIHdyaXR0ZW4gaW4uIEJ5XG4gICAqIGRlZmF1bHQgYW4gaW50ZXJuYWwgb2JqZWN0IGlzIHJldXNlZCBhcyBhIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkfSBpZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldF1cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2dldFJlY3QgPSBmdW5jdGlvbihpZCwgdGFyZ2V0KSB7XG4gICAgdmFyIHJlY3RJdGVtID0gdGFyZ2V0ID8gdGFyZ2V0IDogdGhpcy5fcmVjdEl0ZW07XG4gICAgdmFyIHJlY3RTdG9yZSA9IHRoaXMuX3JlY3RTdG9yZTtcblxuICAgIHJlY3RJdGVtLmxlZnQgPSByZWN0U3RvcmVbaWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0udG9wID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0ud2lkdGggPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcbiAgICByZWN0SXRlbS5oZWlnaHQgPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcblxuICAgIHJldHVybiByZWN0SXRlbTtcbiAgfTtcblxuICAvKipcbiAgICogUHVuY2ggYSBob2xlIGludG8gYSByZWN0YW5nbGUgYW5kIHNwbGl0IHRoZSByZW1haW5pbmcgYXJlYSBpbnRvIHNtYWxsZXJcbiAgICogcmVjdGFuZ2xlcyAoNCBhdCBtYXgpLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gcmVjdFxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gaG9sZVxuICAgKiBAcmV0dXJucyB7UmVjdElkW119XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9zcGxpdFJlY3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdCwgaG9sZSkge1xuICAgICAgLy8gUmVzZXQgb2xkIHJlc3VsdHMuXG4gICAgICByZXN1bHRzLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIElmIHRoZSByZWN0IGRvZXMgbm90IG92ZXJsYXAgd2l0aCB0aGUgaG9sZSBhZGQgcmVjdCB0byB0aGUgcmV0dXJuIGRhdGFcbiAgICAgIC8vIGFzIGlzLlxuICAgICAgaWYgKCF0aGlzLl9kb1JlY3RzT3ZlcmxhcChyZWN0LCBob2xlKSkge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cblxuICAgICAgLy8gTGVmdCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LmxlZnQgPCBob2xlLmxlZnQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgaG9sZS5sZWZ0IC0gcmVjdC5sZWZ0LCByZWN0LmhlaWdodCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSaWdodCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LmxlZnQgKyByZWN0LndpZHRoID4gaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCkge1xuICAgICAgICByZXN1bHRzLnB1c2goXG4gICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgIGhvbGUubGVmdCArIGhvbGUud2lkdGgsXG4gICAgICAgICAgICByZWN0LnRvcCxcbiAgICAgICAgICAgIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLSAoaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCksXG4gICAgICAgICAgICByZWN0LmhlaWdodFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9wIHNwbGl0LlxuICAgICAgaWYgKHJlY3QudG9wIDwgaG9sZS50b3ApIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgaG9sZS50b3AgLSByZWN0LnRvcCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBCb3R0b20gc3BsaXQuXG4gICAgICBpZiAocmVjdC50b3AgKyByZWN0LmhlaWdodCA+IGhvbGUudG9wICsgaG9sZS5oZWlnaHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICByZWN0LmxlZnQsXG4gICAgICAgICAgICBob2xlLnRvcCArIGhvbGUuaGVpZ2h0LFxuICAgICAgICAgICAgcmVjdC53aWR0aCxcbiAgICAgICAgICAgIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLSAoaG9sZS50b3AgKyBob2xlLmhlaWdodClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byByZWN0YW5nbGVzIG92ZXJsYXAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fZG9SZWN0c092ZXJsYXAgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuICEoXG4gICAgICBhLmxlZnQgKyBhLndpZHRoIDw9IGIubGVmdCB8fFxuICAgICAgYi5sZWZ0ICsgYi53aWR0aCA8PSBhLmxlZnQgfHxcbiAgICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgfHxcbiAgICAgIGIudG9wICsgYi5oZWlnaHQgPD0gYS50b3BcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHJlY3RhbmdsZSBpcyBmdWxseSB3aXRoaW4gYW5vdGhlciByZWN0YW5nbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5faXNSZWN0V2l0aGluUmVjdCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5sZWZ0ID49IGIubGVmdCAmJlxuICAgICAgYS50b3AgPj0gYi50b3AgJiZcbiAgICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0ICsgYi53aWR0aCAmJlxuICAgICAgYS50b3AgKyBhLmhlaWdodCA8PSBiLnRvcCArIGIuaGVpZ2h0XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogTG9vcHMgdGhyb3VnaCBhbiBhcnJheSBvZiByZWN0YW5nbGUgaWRzIGFuZCByZXNldHMgYWxsIHRoYXQgYXJlIGZ1bGx5XG4gICAqIHdpdGhpbiBhbm90aGVyIHJlY3RhbmdsZSBpbiB0aGUgYXJyYXkuIFJlc2V0dGluZyBpbiB0aGlzIGNhc2UgbWVhbnMgdGhhdFxuICAgKiB0aGUgcmVjdGFuZ2xlIGlkIHZhbHVlIGlzIHJlcGxhY2VkIHdpdGggemVyby5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWRbXX0gcmVjdElkc1xuICAgKiBAcmV0dXJucyB7UmVjdElkW119XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9wdXJnZVJlY3RzID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWN0QSA9IHt9O1xuICAgIHZhciByZWN0QiA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihyZWN0SWRzKSB7XG4gICAgICB2YXIgaSA9IHJlY3RJZHMubGVuZ3RoO1xuICAgICAgdmFyIGlpO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlpID0gcmVjdElkcy5sZW5ndGg7XG4gICAgICAgIGlmICghcmVjdElkc1tpXSkgY29udGludWU7XG4gICAgICAgIHRoaXMuX2dldFJlY3QocmVjdElkc1tpXSwgcmVjdEEpO1xuICAgICAgICB3aGlsZSAoaWktLSkge1xuICAgICAgICAgIGlmICghcmVjdElkc1tpaV0gfHwgaSA9PT0gaWkpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1JlY3RXaXRoaW5SZWN0KHJlY3RBLCB0aGlzLl9nZXRSZWN0KHJlY3RJZHNbaWldLCByZWN0QikpKSB7XG4gICAgICAgICAgICByZWN0SWRzW2ldID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdElkcztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBTb3J0IHJlY3RhbmdsZXMgd2l0aCB0b3AtbGVmdCBncmF2aXR5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYUlkXG4gICAqIEBwYXJhbSB7UmVjdElkfSBiSWRcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3NvcnRSZWN0c1RvcExlZnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY3RBID0ge307XG4gICAgdmFyIHJlY3RCID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFJZCwgYklkKSB7XG4gICAgICB0aGlzLl9nZXRSZWN0KGFJZCwgcmVjdEEpO1xuICAgICAgdGhpcy5fZ2V0UmVjdChiSWQsIHJlY3RCKTtcbiAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgcmV0dXJuIHJlY3RBLnRvcCA8IHJlY3RCLnRvcCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS50b3AgPiByZWN0Qi50b3AgPyAxIDpcbiAgICAgICAgICAgICByZWN0QS5sZWZ0IDwgcmVjdEIubGVmdCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS5sZWZ0ID4gcmVjdEIubGVmdCA/IDEgOiAwO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIFNvcnQgcmVjdGFuZ2xlcyB3aXRoIGxlZnQtdG9wIGdyYXZpdHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkfSBhSWRcbiAgICogQHBhcmFtIHtSZWN0SWR9IGJJZFxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fc29ydFJlY3RzTGVmdFRvcCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjdEEgPSB7fTtcbiAgICB2YXIgcmVjdEIgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24oYUlkLCBiSWQpIHtcbiAgICAgIHRoaXMuX2dldFJlY3QoYUlkLCByZWN0QSk7XG4gICAgICB0aGlzLl9nZXRSZWN0KGJJZCwgcmVjdEIpO1xuICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICByZXR1cm4gcmVjdEEubGVmdCA8IHJlY3RCLmxlZnQgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA+IHJlY3RCLmxlZnQgPyAxIDpcbiAgICAgICAgICAgICByZWN0QS50b3AgPCByZWN0Qi50b3AgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wID4gcmVjdEIudG9wID8gMSA6IDA7XG4gICAgfTtcbiAgfSkoKTtcblxuICB2YXIgaHRtbENvbGxlY3Rpb25UeXBlID0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJztcbiAgdmFyIG5vZGVMaXN0VHlwZSA9ICdbb2JqZWN0IE5vZGVMaXN0XSc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBub2RlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc05vZGVMaXN0KHZhbCkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgcmV0dXJuIHR5cGUgPT09IGh0bWxDb2xsZWN0aW9uVHlwZSB8fCB0eXBlID09PSBub2RlTGlzdFR5cGU7XG4gIH1cblxuICB2YXIgb2JqZWN0VHlwZSA9ICdvYmplY3QnO1xuICB2YXIgb2JqZWN0VG9TdHJpbmdUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gb2JqZWN0VHlwZSAmJiB0b1N0cmluZy5jYWxsKHZhbCkgPT09IG9iamVjdFRvU3RyaW5nVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGFuIGFycmF5IG9yIGNsb25lcyBhbiBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB0YXJnZXRcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gdG9BcnJheSh0YXJnZXQpIHtcbiAgICByZXR1cm4gaXNOb2RlTGlzdCh0YXJnZXQpID8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0KSA6IEFycmF5LnByb3RvdHlwZS5jb25jYXQodGFyZ2V0KTtcbiAgfVxuXG4gIHZhciBwYWNrZXIgPSBuZXcgUGFja2VyKCk7XG4gIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuICB2YXIgbnVtYmVyVHlwZSQxID0gJ251bWJlcic7XG4gIHZhciBzdHJpbmdUeXBlID0gJ3N0cmluZyc7XG4gIHZhciBpbnN0YW50TGF5b3V0ID0gJ2luc3RhbnQnO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxTdHJpbmcpfSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHs/KEhUTUxFbGVtZW50W118Tm9kZUxpc3R8U3RyaW5nKX0gW29wdGlvbnMuaXRlbXNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zaG93RHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc2hvd0Vhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnZpc2libGVTdHlsZXNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5oaWRlRHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaGlkZUVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmhpZGRlblN0eWxlc11cbiAgICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gW29wdGlvbnMubGF5b3V0XVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5maWxsR2Fwcz1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuaG9yaXpvbnRhbD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuYWxpZ25SaWdodD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuYWxpZ25Cb3R0b209ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LnJvdW5kaW5nPXRydWVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TnVtYmVyKX0gW29wdGlvbnMubGF5b3V0T25SZXNpemU9MTAwXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dE9uSW5pdD10cnVlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubGF5b3V0RHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubGF5b3V0RWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zLnNvcnREYXRhPW51bGxdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZHJhZ0VuYWJsZWQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7P0h0bWxFbGVtZW50fSBbb3B0aW9ucy5kcmFnQ29udGFpbmVyPW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGVdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuZGlzdGFuY2U9MF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZS5kZWxheT0wXVxuICAgKiBAcGFyYW0geyhCb29sZWFufFN0cmluZyl9IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZS5oYW5kbGU9ZmFsc2VdXG4gICAqIEBwYXJhbSB7P1N0cmluZ30gW29wdGlvbnMuZHJhZ0F4aXNdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58RnVuY3Rpb24pfSBbb3B0aW9ucy5kcmFnU29ydD10cnVlXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLnNvcnRJbnRlcnZhbD0xMDBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3MubWluRHJhZ0Rpc3RhbmNlPTEwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLm1pbkJvdW5jZUJhY2tBbmdsZT0xXVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxPYmplY3QpfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0UHJlZGljYXRlLnRocmVzaG9sZD01MF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdTb3J0UHJlZGljYXRlLmFjdGlvbj1cIm1vdmVcIl1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdSZWxlYXNlRHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZHJhZ1JlbGVhc2VFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kcmFnQ3NzUHJvcHNdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXJdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmVuYWJsZWQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuZHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50PW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGU9bnVsbF1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZT1udWxsXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY29udGFpbmVyQ2xhc3M9XCJtdXVyaVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbUNsYXNzPVwibXV1cmktaXRlbVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVZpc2libGVDbGFzcz1cIm11dXJpLWl0ZW0tdmlzaWJsZVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbUhpZGRlbkNsYXNzPVwibXV1cmktaXRlbS1oaWRkZW5cIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1Qb3NpdGlvbmluZ0NsYXNzPVwibXV1cmktaXRlbS1wb3NpdGlvbmluZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbURyYWdnaW5nQ2xhc3M9XCJtdXVyaS1pdGVtLWRyYWdnaW5nXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtUmVsZWFzaW5nQ2xhc3M9XCJtdXVyaS1pdGVtLXJlbGVhc2luZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVBsYWNlaG9sZGVyQ2xhc3M9XCJtdXVyaS1pdGVtLXBsYWNlaG9sZGVyXCJdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEdyaWQoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciBpbnN0ID0gdGhpcztcbiAgICB2YXIgc2V0dGluZ3M7XG4gICAgdmFyIGl0ZW1zO1xuICAgIHZhciBsYXlvdXRPblJlc2l6ZTtcblxuICAgIC8vIEFsbG93IHBhc3NpbmcgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmcuIFN0b3JlIGVsZW1lbnQgZm9yIGluc3RhbmNlLlxuICAgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID1cbiAgICAgIHR5cGVvZiBlbGVtZW50ID09PSBzdHJpbmdUeXBlID8gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIGNvbnRhaW5lciBlbGVtZW50IGlzIG5vdCBib2R5IGVsZW1lbnQgb3IgZG9lcyBub3RcbiAgICAvLyBleGlzdCB3aXRoaW4gdGhlIGJvZHkgZWxlbWVudC5cbiAgICB2YXIgaXNFbGVtZW50SW5Eb20gPSBlbGVtZW50LmdldFJvb3ROb2RlXG4gICAgICA/IGVsZW1lbnQuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA9PT0gZG9jdW1lbnRcbiAgICAgIDogd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnMoZWxlbWVudCk7XG4gICAgaWYgKCFpc0VsZW1lbnRJbkRvbSB8fCBlbGVtZW50ID09PSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRhaW5lciBlbGVtZW50IG11c3QgYmUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2Ugc2V0dGluZ3MgYnkgbWVyZ2luZyB0aGUgb3B0aW9ucyB3aXRoIGRlZmF1bHQgb3B0aW9ucy5cbiAgICBzZXR0aW5ncyA9IHRoaXMuX3NldHRpbmdzID0gbWVyZ2VTZXR0aW5ncyhHcmlkLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIC8vIFNhbml0aXplIGRyYWdTb3J0IHNldHRpbmcuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTb3J0KSkge1xuICAgICAgc2V0dGluZ3MuZHJhZ1NvcnQgPSAhIXNldHRpbmdzLmRyYWdTb3J0O1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBpbnN0YW5jZSBpZCBhbmQgc3RvcmUgaXQgdG8gdGhlIGdyaWQgaW5zdGFuY2VzIGNvbGxlY3Rpb24uXG4gICAgdGhpcy5faWQgPSBjcmVhdGVVaWQoKTtcbiAgICBncmlkSW5zdGFuY2VzW3RoaXMuX2lkXSA9IGluc3Q7XG5cbiAgICAvLyBEZXN0cm95ZWQgZmxhZy5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gVGhlIGxheW91dCBvYmplY3QgKG11dGF0ZWQgb24gZXZlcnkgbGF5b3V0KS5cbiAgICB0aGlzLl9sYXlvdXQgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIHNsb3RzOiBbXSxcbiAgICAgIHNldFdpZHRoOiBmYWxzZSxcbiAgICAgIHNldEhlaWdodDogZmFsc2UsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgcHJpdmF0ZSBFbWl0dGVyIGluc3RhbmNlLlxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuXG4gICAgLy8gQWRkIGNvbnRhaW5lciBlbGVtZW50J3MgY2xhc3MgbmFtZS5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5jb250YWluZXJDbGFzcyk7XG5cbiAgICAvLyBDcmVhdGUgaW5pdGlhbCBpdGVtcy5cbiAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgIGl0ZW1zID0gc2V0dGluZ3MuaXRlbXM7XG4gICAgaWYgKHR5cGVvZiBpdGVtcyA9PT0gc3RyaW5nVHlwZSkge1xuICAgICAgdG9BcnJheShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW1FbGVtZW50KSB7XG4gICAgICAgIGlmIChpdGVtcyA9PT0gJyonIHx8IGVsZW1lbnRNYXRjaGVzKGl0ZW1FbGVtZW50LCBpdGVtcykpIHtcbiAgICAgICAgICBpbnN0Ll9pdGVtcy5wdXNoKG5ldyBJdGVtKGluc3QsIGl0ZW1FbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgfHwgaXNOb2RlTGlzdChpdGVtcykpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdG9BcnJheShpdGVtcykubWFwKGZ1bmN0aW9uKGl0ZW1FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgSXRlbShpbnN0LCBpdGVtRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXRPblJlc2l6ZSBvcHRpb24gaXMgYSB2YWxpZCBudW1iZXIgc2FuaXRpemUgaXQgYW5kIGJpbmQgdGhlIHJlc2l6ZVxuICAgIC8vIGhhbmRsZXIuXG4gICAgbGF5b3V0T25SZXNpemUgPSBzZXR0aW5ncy5sYXlvdXRPblJlc2l6ZTtcbiAgICBpZiAodHlwZW9mIGxheW91dE9uUmVzaXplICE9PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgIGxheW91dE9uUmVzaXplID0gbGF5b3V0T25SZXNpemUgPT09IHRydWUgPyAwIDogLTE7XG4gICAgfVxuICAgIGlmIChsYXlvdXRPblJlc2l6ZSA+PSAwKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIChpbnN0Ll9yZXNpemVIYW5kbGVyID0gZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaW5zdC5yZWZyZXNoSXRlbXMoKS5sYXlvdXQoKTtcbiAgICAgICAgfSwgbGF5b3V0T25SZXNpemUpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBMYXlvdXQgb24gaW5pdCBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKHNldHRpbmdzLmxheW91dE9uSW5pdCkge1xuICAgICAgdGhpcy5sYXlvdXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm9wZXJ0aWVzXG4gICAqICoqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1cbiAgICovXG4gIEdyaWQuSXRlbSA9IEl0ZW07XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbUxheW91dFxuICAgKi9cbiAgR3JpZC5JdGVtTGF5b3V0ID0gSXRlbUxheW91dDtcblxuICAvKipcbiAgICogQHNlZSBJdGVtVmlzaWJpbGl0eVxuICAgKi9cbiAgR3JpZC5JdGVtVmlzaWJpbGl0eSA9IEl0ZW1WaXNpYmlsaXR5O1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1NaWdyYXRlXG4gICAqL1xuICBHcmlkLkl0ZW1NaWdyYXRlID0gSXRlbU1pZ3JhdGU7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbUFuaW1hdGVcbiAgICovXG4gIEdyaWQuSXRlbUFuaW1hdGUgPSBJdGVtQW5pbWF0ZTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtRHJhZ1xuICAgKi9cbiAgR3JpZC5JdGVtRHJhZyA9IEl0ZW1EcmFnO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1SZWxlYXNlXG4gICAqL1xuICBHcmlkLkl0ZW1SZWxlYXNlID0gSXRlbVJlbGVhc2U7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbURyYWdQbGFjZWhvbGRlclxuICAgKi9cbiAgR3JpZC5JdGVtRHJhZ1BsYWNlaG9sZGVyID0gSXRlbURyYWdQbGFjZWhvbGRlcjtcblxuICAvKipcbiAgICogQHNlZSBFbWl0dGVyXG4gICAqL1xuICBHcmlkLkVtaXR0ZXIgPSBFbWl0dGVyO1xuXG4gIC8qKlxuICAgKiBAc2VlIERyYWdnZXJcbiAgICovXG4gIEdyaWQuRHJhZ2dlciA9IERyYWdnZXI7XG5cbiAgLyoqXG4gICAqIEBzZWUgUGFja2VyXG4gICAqL1xuICBHcmlkLlBhY2tlciA9IFBhY2tlcjtcblxuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zIGZvciBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkXG4gICAqL1xuICBHcmlkLmRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIEl0ZW0gZWxlbWVudHNcbiAgICBpdGVtczogJyonLFxuXG4gICAgLy8gRGVmYXVsdCBzaG93IGFuaW1hdGlvblxuICAgIHNob3dEdXJhdGlvbjogMzAwLFxuICAgIHNob3dFYXNpbmc6ICdlYXNlJyxcblxuICAgIC8vIERlZmF1bHQgaGlkZSBhbmltYXRpb25cbiAgICBoaWRlRHVyYXRpb246IDMwMCxcbiAgICBoaWRlRWFzaW5nOiAnZWFzZScsXG5cbiAgICAvLyBJdGVtJ3MgdmlzaWJsZS9oaWRkZW4gc3RhdGUgc3R5bGVzXG4gICAgdmlzaWJsZVN0eWxlczoge1xuICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgfSxcbiAgICBoaWRkZW5TdHlsZXM6IHtcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuNSknXG4gICAgfSxcblxuICAgIC8vIExheW91dFxuICAgIGxheW91dDoge1xuICAgICAgZmlsbEdhcHM6IGZhbHNlLFxuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICBhbGlnblJpZ2h0OiBmYWxzZSxcbiAgICAgIGFsaWduQm90dG9tOiBmYWxzZSxcbiAgICAgIHJvdW5kaW5nOiB0cnVlXG4gICAgfSxcbiAgICBsYXlvdXRPblJlc2l6ZTogMTAwLFxuICAgIGxheW91dE9uSW5pdDogdHJ1ZSxcbiAgICBsYXlvdXREdXJhdGlvbjogMzAwLFxuICAgIGxheW91dEVhc2luZzogJ2Vhc2UnLFxuXG4gICAgLy8gU29ydGluZ1xuICAgIHNvcnREYXRhOiBudWxsLFxuXG4gICAgLy8gRHJhZyAmIERyb3BcbiAgICBkcmFnRW5hYmxlZDogZmFsc2UsXG4gICAgZHJhZ0NvbnRhaW5lcjogbnVsbCxcbiAgICBkcmFnU3RhcnRQcmVkaWNhdGU6IHtcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBoYW5kbGU6IGZhbHNlXG4gICAgfSxcbiAgICBkcmFnQXhpczogbnVsbCxcbiAgICBkcmFnU29ydDogdHJ1ZSxcbiAgICBkcmFnU29ydEhldXJpc3RpY3M6IHtcbiAgICAgIHNvcnRJbnRlcnZhbDogMTAwLFxuICAgICAgbWluRHJhZ0Rpc3RhbmNlOiAxMCxcbiAgICAgIG1pbkJvdW5jZUJhY2tBbmdsZTogMVxuICAgIH0sXG4gICAgZHJhZ1NvcnRQcmVkaWNhdGU6IHtcbiAgICAgIHRocmVzaG9sZDogNTAsXG4gICAgICBhY3Rpb246IGFjdGlvbk1vdmVcbiAgICB9LFxuICAgIGRyYWdSZWxlYXNlRHVyYXRpb246IDMwMCxcbiAgICBkcmFnUmVsZWFzZUVhc2luZzogJ2Vhc2UnLFxuICAgIGRyYWdDc3NQcm9wczoge1xuICAgICAgdG91Y2hBY3Rpb246ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHVzZXJEcmFnOiAnbm9uZScsXG4gICAgICB0YXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgdG91Y2hDYWxsb3V0OiAnbm9uZScsXG4gICAgICBjb250ZW50Wm9vbWluZzogJ25vbmUnXG4gICAgfSxcbiAgICBkcmFnUGxhY2Vob2xkZXI6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2UnLFxuICAgICAgY3JlYXRlRWxlbWVudDogbnVsbCxcbiAgICAgIG9uQ3JlYXRlOiBudWxsLFxuICAgICAgb25SZW1vdmU6IG51bGxcbiAgICB9LFxuXG4gICAgLy8gQ2xhc3NuYW1lc1xuICAgIGNvbnRhaW5lckNsYXNzOiAnbXV1cmknLFxuICAgIGl0ZW1DbGFzczogJ211dXJpLWl0ZW0nLFxuICAgIGl0ZW1WaXNpYmxlQ2xhc3M6ICdtdXVyaS1pdGVtLXNob3duJyxcbiAgICBpdGVtSGlkZGVuQ2xhc3M6ICdtdXVyaS1pdGVtLWhpZGRlbicsXG4gICAgaXRlbVBvc2l0aW9uaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLXBvc2l0aW9uaW5nJyxcbiAgICBpdGVtRHJhZ2dpbmdDbGFzczogJ211dXJpLWl0ZW0tZHJhZ2dpbmcnLFxuICAgIGl0ZW1SZWxlYXNpbmdDbGFzczogJ211dXJpLWl0ZW0tcmVsZWFzaW5nJyxcbiAgICBpdGVtUGxhY2Vob2xkZXJDbGFzczogJ211dXJpLWl0ZW0tcGxhY2Vob2xkZXInXG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGFsbCBpdGVtcy4gT3B0aW9uYWxseSB5b3UgY2FuIHByb3ZpZGUgc3BlY2lmaWMgdGFyZ2V0cyAoZWxlbWVudHMgYW5kXG4gICAqIGluZGljZXMpLiBOb3RlIHRoYXQgdGhlIHJldHVybmVkIGFycmF5IGlzIG5vdCB0aGUgc2FtZSBvYmplY3QgdXNlZCBieSB0aGVcbiAgICogaW5zdGFuY2Ugc28gbW9kaWZ5aW5nIGl0IHdpbGwgbm90IGFmZmVjdCBpbnN0YW5jZSdzIGl0ZW1zLiBBbGwgaXRlbXMgdGhhdFxuICAgKiBhcmUgbm90IGZvdW5kIGFyZSBvbWl0dGVkIGZyb20gdGhlIHJldHVybmVkIGFycmF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW3RhcmdldHNdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5nZXRJdGVtcyA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICAvLyBSZXR1cm4gYWxsIGl0ZW1zIGltbWVkaWF0ZWx5IGlmIG5vIHRhcmdldHMgd2VyZSBwcm92aWRlZCBvciBpZiB0aGVcbiAgICAvLyBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICghdGFyZ2V0cyAmJiB0YXJnZXRzICE9PSAwKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKDApO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBbXTtcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0b0FycmF5KHRhcmdldHMpO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gSWYgdGFyZ2V0IGl0ZW1zIGFyZSBkZWZpbmVkIHJldHVybiBmaWx0ZXJlZCByZXN1bHRzLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IHRoaXMuX2dldEl0ZW0odGFyZ2V0SXRlbXNbaV0pO1xuICAgICAgaXRlbSAmJiByZXQucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNhY2hlZCBkaW1lbnNpb25zIG9mIHRoZSBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW2l0ZW1zXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlZnJlc2hJdGVtcyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciB0YXJnZXRzID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0c1tpXS5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzb3J0IGRhdGEgb2YgdGhlIGluc3RhbmNlJ3MgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBbaXRlbXNdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUucmVmcmVzaFNvcnREYXRhID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldEl0ZW1zW2ldLl9yZWZyZXNoU29ydERhdGEoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU3luY2hyb25pemUgdGhlIGl0ZW0gZWxlbWVudHMgdG8gbWF0Y2ggdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgRE9NLlxuICAgKiBUaGlzIGNvbWVzIGhhbmR5IGlmIHlvdSBuZWVkIHRvIGtlZXAgdGhlIERPTSBzdHJ1Y3R1cmUgbWF0Y2hlZCB3aXRoIHRoZVxuICAgKiBvcmRlciBvZiB0aGUgaXRlbXMuIE5vdGUgdGhhdCBpZiBhbiBpdGVtJ3MgZWxlbWVudCBpcyBub3QgY3VycmVudGx5IGEgY2hpbGRcbiAgICogb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50IChpZiBpdCBpcyBkcmFnZ2VkIGZvciBleGFtcGxlKSBpdCBpcyBpZ25vcmVkIGFuZFxuICAgKiBsZWZ0IHVudG91Y2hlZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zeW5jaHJvbml6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB2YXIgZnJhZ21lbnQ7XG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIGluIG9yZGVyIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudCA9IGl0ZW1zW2ldLl9lbGVtZW50O1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlID09PSBjb250YWluZXIpIHtcbiAgICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZyYWdtZW50KSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgc3luY2hyb25pemUgZXZlbnQuXG4gICAgdGhpcy5fZW1pdChldmVudFN5bmNocm9uaXplKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIGFwcGx5IGl0ZW0gcG9zaXRpb25zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0xheW91dENhbGxiYWNrfSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGluc3QgPSB0aGlzO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5fdXBkYXRlTGF5b3V0KCk7XG4gICAgdmFyIGxheW91dElkID0gbGF5b3V0LmlkO1xuICAgIHZhciBpdGVtc0xlbmd0aCA9IGxheW91dC5pdGVtcy5sZW5ndGg7XG4gICAgdmFyIGNvdW50ZXIgPSBpdGVtc0xlbmd0aDtcbiAgICB2YXIgaXNCb3JkZXJCb3g7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBUaGUgZmluaXNoIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGNoZWNraW5nIGlmIGFsbCB0aGUgaXRlbXNcbiAgICAvLyBoYXZlIGxhaWQgb3V0IHlldC4gQWZ0ZXIgYWxsIGl0ZW1zIGhhdmUgZmluaXNoZWQgdGhlaXIgYW5pbWF0aW9ucyBjYWxsXG4gICAgLy8gY2FsbGJhY2sgYW5kIGVtaXQgbGF5b3V0RW5kIGV2ZW50LiBPbmx5IGVtaXQgbGF5b3V0RW5kIGV2ZW50IGlmIHRoZXJlXG4gICAgLy8gaGFzbid0IGJlZW4gYSBuZXcgbGF5b3V0IGNhbGwgZHVyaW5nIHRoaXMgbGF5b3V0LlxuICAgIGZ1bmN0aW9uIHRyeUZpbmlzaCgpIHtcbiAgICAgIGlmICgtLWNvdW50ZXIgPiAwKSByZXR1cm47XG5cbiAgICAgIHZhciBoYXNMYXlvdXRDaGFuZ2VkID0gaW5zdC5fbGF5b3V0LmlkICE9PSBsYXlvdXRJZDtcbiAgICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24oaW5zdGFudCkgPyBpbnN0YW50IDogb25GaW5pc2g7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICBjYWxsYmFjayhoYXNMYXlvdXRDaGFuZ2VkLCBsYXlvdXQuaXRlbXMuc2xpY2UoMCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc0xheW91dENoYW5nZWQgJiYgaW5zdC5faGFzTGlzdGVuZXJzKGV2ZW50TGF5b3V0RW5kKSkge1xuICAgICAgICBpbnN0Ll9lbWl0KGV2ZW50TGF5b3V0RW5kLCBsYXlvdXQuaXRlbXMuc2xpY2UoMCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGdyaWQncyB3aWR0aCBvciBoZWlnaHQgd2FzIG1vZGlmaWVkLCB3ZSBuZWVkIHRvIHVwZGF0ZSBpdCdzIGNhY2hlZFxuICAgIC8vIGRpbWVuc2lvbnMuIEFsc28ga2VlcCBpbiBtaW5kIHRoYXQgZ3JpZCdzIGNhY2hlZCB3aWR0aC9oZWlnaHQgc2hvdWxkXG4gICAgLy8gYWx3YXlzIGVxdWFsIHRvIHdoYXQgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB3b3VsZCByZXR1cm4sIHNvXG4gICAgLy8gdGhlcmVmb3JlIHdlIG5lZWQgdG8gYWRkIHRoZSBncmlkIGVsZW1lbnQncyBib3JkZXJzIHRvIHRoZSBkaW1lbnNpb25zIGlmXG4gICAgLy8gaXQncyBib3gtc2l6aW5nIGlzIGJvcmRlci1ib3guIE5vdGUgdGhhdCB3ZSBzdXBwb3J0IHByb3ZpZGluZyB0aGVcbiAgICAvLyBkaW1lbnNpb25zIGFzIGEgc3RyaW5nIGhlcmUgdG9vIHNvIHRoYXQgb25lIGNhbiBkZWZpbmUgdGhlIHVuaXQgb2YgdGhlXG4gICAgLy8gZGltZW5zaW9ucywgaW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBkbyB0aGUgYm9yZGVyLWJveCBjaGVjay5cbiAgICBpZiAoXG4gICAgICAobGF5b3V0LnNldEhlaWdodCAmJiB0eXBlb2YgbGF5b3V0LmhlaWdodCA9PT0gbnVtYmVyVHlwZSQxKSB8fFxuICAgICAgKGxheW91dC5zZXRXaWR0aCAmJiB0eXBlb2YgbGF5b3V0LndpZHRoID09PSBudW1iZXJUeXBlJDEpXG4gICAgKSB7XG4gICAgICBpc0JvcmRlckJveCA9IGdldFN0eWxlKGVsZW1lbnQsICdib3gtc2l6aW5nJykgPT09ICdib3JkZXItYm94JztcbiAgICB9XG4gICAgaWYgKGxheW91dC5zZXRIZWlnaHQpIHtcbiAgICAgIGlmICh0eXBlb2YgbGF5b3V0LmhlaWdodCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cbiAgICAgICAgICAoaXNCb3JkZXJCb3ggPyBsYXlvdXQuaGVpZ2h0ICsgdGhpcy5fYm9yZGVyVG9wICsgdGhpcy5fYm9yZGVyQm90dG9tIDogbGF5b3V0LmhlaWdodCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBsYXlvdXQuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGF5b3V0LnNldFdpZHRoKSB7XG4gICAgICBpZiAodHlwZW9mIGxheW91dC53aWR0aCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPVxuICAgICAgICAgIChpc0JvcmRlckJveCA/IGxheW91dC53aWR0aCArIHRoaXMuX2JvcmRlckxlZnQgKyB0aGlzLl9ib3JkZXJSaWdodCA6IGxheW91dC53aWR0aCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGxheW91dC53aWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbWl0IGxheW91dFN0YXJ0IGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBpcyBpbnRlbnRpb25hbGx5IGVtaXR0ZWQgYWZ0ZXIgdGhlXG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnQncyBkaW1lbnNpb25zIGFyZSBzZXQsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZXJlIHdvdWxkIGJlXG4gICAgLy8gbm8gaG9vayBmb3IgcmVhY3RpbmcgdG8gY29udGFpbmVyIGRpbWVuc2lvbiBjaGFuZ2VzLlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRMYXlvdXRTdGFydCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRMYXlvdXRTdGFydCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaXRlbXMgbGV0J3MgZmluaXNoIHF1aWNrbHkuXG4gICAgaWYgKCFpdGVtc0xlbmd0aCkge1xuICAgICAgdHJ5RmluaXNoKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgaXRlbXMgbGV0J3MgcG9zaXRpb24gdGhlbS5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXNMZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IGxheW91dC5pdGVtc1tpXTtcbiAgICAgIGlmICghaXRlbSkgY29udGludWU7XG5cbiAgICAgIC8vIFVwZGF0ZSBpdGVtJ3MgcG9zaXRpb24uXG4gICAgICBpdGVtLl9sZWZ0ID0gbGF5b3V0LnNsb3RzW2kgKiAyXTtcbiAgICAgIGl0ZW0uX3RvcCA9IGxheW91dC5zbG90c1tpICogMiArIDFdO1xuXG4gICAgICAvLyBMYXlvdXQgaXRlbSBpZiBpdCBpcyBub3QgZHJhZ2dlZC5cbiAgICAgIGl0ZW0uaXNEcmFnZ2luZygpID8gdHJ5RmluaXNoKCkgOiBpdGVtLl9sYXlvdXQuc3RhcnQoaW5zdGFudCA9PT0gdHJ1ZSwgdHJ5RmluaXNoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQWRkIG5ldyBpdGVtcyBieSBwcm92aWRpbmcgdGhlIGVsZW1lbnRzIHlvdSB3aXNoIHRvIGFkZCB0byB0aGUgaW5zdGFuY2UgYW5kXG4gICAqIG9wdGlvbmFsbHkgcHJvdmlkZSB0aGUgaW5kZXggd2hlcmUgeW91IHdhbnQgdGhlIGl0ZW1zIHRvIGJlIGluc2VydGVkIGludG8uXG4gICAqIEFsbCBlbGVtZW50cyB0aGF0IGFyZSBub3QgYWxyZWFkeSBjaGlsZHJlbiBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgd2lsbCBiZVxuICAgKiBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC4gSWYgYW4gZWxlbWVudCBoYXMgaXQncyBDU1NcbiAgICogZGlzcGxheSBwcm9wZXJ0eSBzZXQgdG8gXCJub25lXCIgaXQgd2lsbCBiZSBtYXJrZWQgYXMgaW5hY3RpdmUgZHVyaW5nIHRoZVxuICAgKiBpbml0aWF0aW9uIHByb2Nlc3MuIEFzIGxvbmcgYXMgdGhlIGl0ZW0gaXMgaW5hY3RpdmUgaXQgd2lsbCBub3QgYmUgcGFydCBvZlxuICAgKiB0aGUgbGF5b3V0LCBidXQgaXQgd2lsbCByZXRhaW4gaXQncyBpbmRleC4gWW91IGNhbiBhY3RpdmF0ZSBpdGVtcyBhdCBhbnlcbiAgICogcG9pbnQgd2l0aCBncmlkLnNob3coKSBtZXRob2QuIFRoaXMgbWV0aG9kIHdpbGwgYXV0b21hdGljYWxseSBjYWxsXG4gICAqIGdyaWQubGF5b3V0KCkgaWYgb25lIG9yIG1vcmUgb2YgdGhlIGFkZGVkIGVsZW1lbnRzIGFyZSB2aXNpYmxlLiBJZiBvbmx5XG4gICAqIGhpZGRlbiBpdGVtcyBhcmUgYWRkZWQgbm8gbGF5b3V0IHdpbGwgYmUgY2FsbGVkLiBBbGwgdGhlIG5ldyB2aXNpYmxlIGl0ZW1zXG4gICAqIGFyZSBwb3NpdGlvbmVkIHdpdGhvdXQgYW5pbWF0aW9uIGR1cmluZyB0aGVpciBmaXJzdCBsYXlvdXQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fEhUTUxFbGVtZW50W10pfSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5pbmRleD0tMV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pc0FjdGl2ZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0l0ZW1bXX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICFlbGVtZW50cykgcmV0dXJuIFtdO1xuXG4gICAgdmFyIG5ld0l0ZW1zID0gdG9BcnJheShlbGVtZW50cyk7XG4gICAgaWYgKCFuZXdJdGVtcy5sZW5ndGgpIHJldHVybiBuZXdJdGVtcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIE1hcCBwcm92aWRlZCBlbGVtZW50cyBpbnRvIG5ldyBncmlkIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCBuZXdJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IG5ldyBJdGVtKHRoaXMsIG5ld0l0ZW1zW2ldLCBvcHRzLmlzQWN0aXZlKTtcbiAgICAgIG5ld0l0ZW1zW2ldID0gaXRlbTtcblxuICAgICAgLy8gSWYgdGhlIGl0ZW0gdG8gYmUgYWRkZWQgaXMgYWN0aXZlLCB3ZSBuZWVkIHRvIGRvIGEgbGF5b3V0LiBBbHNvLCB3ZVxuICAgICAgLy8gbmVlZCB0byBtYXJrIHRoZSBpdGVtIHdpdGggdGhlIHNraXBOZXh0QW5pbWF0aW9uIGZsYWcgdG8gbWFrZSBpdFxuICAgICAgLy8gcG9zaXRpb24gaW5zdGFudGx5ICh3aXRob3V0IGFuaW1hdGlvbikgZHVyaW5nIHRoZSBuZXh0IGxheW91dC4gV2l0aG91dFxuICAgICAgLy8gdGhlIGhhY2sgdGhlIGl0ZW0gd291bGQgYW5pbWF0ZSB0byBpdCdzIG5ldyBwb3NpdGlvbiBmcm9tIHRoZSBub3J0aHdlc3RcbiAgICAgIC8vIGNvcm5lciBvZiB0aGUgZ3JpZCwgd2hpY2ggZmVlbHMgYSBiaXQgYnVnZ3kgKGltaG8pLlxuICAgICAgaWYgKGl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICAgIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5fbGF5b3V0Ll9za2lwTmV4dEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBuZXcgaXRlbXMgdG8gdGhlIGl0ZW1zIGNvbGxlY3Rpb24gdG8gY29ycmVjdCBpbmRleC5cbiAgICBhcnJheUluc2VydChpdGVtcywgbmV3SXRlbXMsIG9wdHMuaW5kZXgpO1xuXG4gICAgLy8gRW1pdCBhZGQgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudEFkZCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRBZGQsIG5ld0l0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgIGlmIChuZWVkc0xheW91dCAmJiBsYXlvdXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3SXRlbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpdGVtcyBmcm9tIHRoZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZW1vdmVFbGVtZW50cz1mYWxzZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0l0ZW1bXX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgYWxsSXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlbW92ZSB0aGUgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSB0YXJnZXRJdGVtc1tpXTtcbiAgICAgIGluZGljZXMucHVzaChhbGxJdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICAgIGlmIChpdGVtLl9pc0FjdGl2ZSkgbmVlZHNMYXlvdXQgPSB0cnVlO1xuICAgICAgaXRlbS5fZGVzdHJveShvcHRzLnJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHJlbW92ZSBldmVudC5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50UmVtb3ZlKSkge1xuICAgICAgdGhpcy5fZW1pdChldmVudFJlbW92ZSwgdGFyZ2V0SXRlbXMuc2xpY2UoMCksIGluZGljZXMpO1xuICAgIH1cblxuICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgaWYgKG5lZWRzTGF5b3V0ICYmIGxheW91dCkge1xuICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRJdGVtcztcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBpbnN0YW5jZSBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge1Nob3dDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9zZXRJdGVtc1Zpc2liaWxpdHkoaXRlbXMsIHRydWUsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlIGluc3RhbmNlIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7SGlkZUNhbGxiYWNrfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oaXRlbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3NldEl0ZW1zVmlzaWJpbGl0eShpdGVtcywgZmFsc2UsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgaXRlbXMuIEV4cGVjdHMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LCBhIHByZWRpY2F0ZSwgd2hpY2ggc2hvdWxkIGJlXG4gICAqIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nLiBUaGUgcHJlZGljYXRlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGZvciBldmVyeVxuICAgKiBpdGVtIGluIHRoZSBpbnN0YW5jZS4gSWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJlZGljYXRlIGlzIHRydXRoeSB0aGVcbiAgICogaXRlbSBpbiBxdWVzdGlvbiB3aWxsIGJlIHNob3duIGFuZCBvdGhlcndpc2UgaGlkZGVuLiBUaGUgcHJlZGljYXRlIGNhbGxiYWNrXG4gICAqIHJlY2VpdmVzIHRoZSBpdGVtIGluc3RhbmNlIGFzIGl0J3MgYXJndW1lbnQuIElmIHRoZSBwcmVkaWNhdGUgaXMgYSBzdHJpbmdcbiAgICogaXQgaXMgY29uc2lkZXJlZCB0byBiZSBhIHNlbGVjdG9yIGFuZCBpdCBpcyBjaGVja2VkIGFnYWluc3QgZXZlcnkgaXRlbVxuICAgKiBlbGVtZW50IGluIHRoZSBpbnN0YW5jZSB3aXRoIHRoZSBuYXRpdmUgZWxlbWVudC5tYXRjaGVzKCkgbWV0aG9kLiBBbGwgdGhlXG4gICAqIG1hdGNoaW5nIGl0ZW1zIHdpbGwgYmUgc2hvd24gYW5kIG90aGVycyBoaWRkZW4uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufFN0cmluZyl9IHByZWRpY2F0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtGaWx0ZXJDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24ocHJlZGljYXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pdGVtcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW1zVG9TaG93ID0gW107XG4gICAgdmFyIGl0ZW1zVG9IaWRlID0gW107XG4gICAgdmFyIGlzUHJlZGljYXRlU3RyaW5nID0gdHlwZW9mIHByZWRpY2F0ZSA9PT0gc3RyaW5nVHlwZTtcbiAgICB2YXIgaXNQcmVkaWNhdGVGbiA9IGlzRnVuY3Rpb24ocHJlZGljYXRlKTtcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgaXNJbnN0YW50ID0gb3B0cy5pbnN0YW50ID09PSB0cnVlO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgb25GaW5pc2ggPSBpc0Z1bmN0aW9uKG9wdHMub25GaW5pc2gpID8gb3B0cy5vbkZpbmlzaCA6IG51bGw7XG4gICAgdmFyIHRyeUZpbmlzaENvdW50ZXIgPSAtMTtcbiAgICB2YXIgdHJ5RmluaXNoID0gbm9vcDtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHdlIGhhdmUgb25GaW5pc2ggY2FsbGJhY2ssIGxldCdzIGNyZWF0ZSBwcm9wZXIgdHJ5RmluaXNoIGNhbGxiYWNrLlxuICAgIGlmIChvbkZpbmlzaCkge1xuICAgICAgdHJ5RmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICsrdHJ5RmluaXNoQ291bnRlciAmJiBvbkZpbmlzaChpdGVtc1RvU2hvdy5zbGljZSgwKSwgaXRlbXNUb0hpZGUuc2xpY2UoMCkpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB3aGljaCBpdGVtcyBuZWVkIHRvIGJlIHNob3duIGFuZCB3aGljaCBoaWRkZW4uXG4gICAgaWYgKGlzUHJlZGljYXRlRm4gfHwgaXNQcmVkaWNhdGVTdHJpbmcpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtID0gdGhpcy5faXRlbXNbaV07XG4gICAgICAgIGlmIChpc1ByZWRpY2F0ZUZuID8gcHJlZGljYXRlKGl0ZW0pIDogZWxlbWVudE1hdGNoZXMoaXRlbS5fZWxlbWVudCwgcHJlZGljYXRlKSkge1xuICAgICAgICAgIGl0ZW1zVG9TaG93LnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbXNUb0hpZGUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgaXRlbXMgdGhhdCBuZWVkIHRvIGJlIHNob3duLlxuICAgIGlmIChpdGVtc1RvU2hvdy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hvdyhpdGVtc1RvU2hvdywge1xuICAgICAgICBpbnN0YW50OiBpc0luc3RhbnQsXG4gICAgICAgIG9uRmluaXNoOiB0cnlGaW5pc2gsXG4gICAgICAgIGxheW91dDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnlGaW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBIaWRlIGl0ZW1zIHRoYXQgbmVlZCB0byBiZSBoaWRkZW4uXG4gICAgaWYgKGl0ZW1zVG9IaWRlLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaWRlKGl0ZW1zVG9IaWRlLCB7XG4gICAgICAgIGluc3RhbnQ6IGlzSW5zdGFudCxcbiAgICAgICAgb25GaW5pc2g6IHRyeUZpbmlzaCxcbiAgICAgICAgbGF5b3V0OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeUZpbmlzaCgpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgaXRlbXMgdG8gZmlsdGVyLlxuICAgIGlmIChpdGVtc1RvU2hvdy5sZW5ndGggfHwgaXRlbXNUb0hpZGUubGVuZ3RoKSB7XG4gICAgICAvLyBFbWl0IGZpbHRlciBldmVudC5cbiAgICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRGaWx0ZXIpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoZXZlbnRGaWx0ZXIsIGl0ZW1zVG9TaG93LnNsaWNlKDApLCBpdGVtc1RvSGlkZS5zbGljZSgwKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU29ydCBpdGVtcy4gVGhlcmUgYXJlIHRocmVlIHdheXMgdG8gc29ydCB0aGUgaXRlbXMuIFRoZSBmaXJzdCBpcyBzaW1wbHkgYnlcbiAgICogcHJvdmlkaW5nIGEgZnVuY3Rpb24gYXMgdGhlIGNvbXBhcmVyIHdoaWNoIHdvcmtzIGlkZW50aWNhbGx5IHRvIG5hdGl2ZVxuICAgKiBhcnJheSBzb3J0LiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc29ydCBieSB0aGUgc29ydCBkYXRhIHlvdSBoYXZlIHByb3ZpZGVkXG4gICAqIGluIHRoZSBpbnN0YW5jZSdzIG9wdGlvbnMuIEp1c3QgcHJvdmlkZSB0aGUgc29ydCBkYXRhIGtleShzKSBhcyBhIHN0cmluZ1xuICAgKiAoc2VwYXJhdGVkIGJ5IHNwYWNlKSBhbmQgdGhlIGl0ZW1zIHdpbGwgYmUgc29ydGVkIGJhc2VkIG9uIHRoZSBwcm92aWRlZFxuICAgKiBzb3J0IGRhdGEga2V5cy4gTGFzdGx5IHlvdSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byBwcm92aWRlIGEgcHJlc29ydGVkXG4gICAqIGFycmF5IG9mIGl0ZW1zIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBzeW5jIHRoZSBpbnRlcm5hbCBpdGVtcyBhcnJheSBpbiB0aGVcbiAgICogc2FtZSBvcmRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoRnVuY3Rpb258SXRlbVtdfFN0cmluZ3xTdHJpbmdbXSl9IGNvbXBhcmVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kZXNjZW5kaW5nPWZhbHNlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNvcnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvcnRDb21wYXJlcjtcbiAgICB2YXIgaXNEZXNjZW5kaW5nO1xuICAgIHZhciBvcmlnSXRlbXM7XG4gICAgdmFyIGluZGV4TWFwO1xuXG4gICAgZnVuY3Rpb24gcGFyc2VDcml0ZXJpYShkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbC5zcGxpdCgnOicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbmRleE1hcChpdGVtcykge1xuICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXRbaXRlbXNbaV0uX2lkXSA9IGk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBhcmVJbmRpY2VzKGl0ZW1BLCBpdGVtQikge1xuICAgICAgdmFyIGluZGV4QSA9IGluZGV4TWFwW2l0ZW1BLl9pZF07XG4gICAgICB2YXIgaW5kZXhCID0gaW5kZXhNYXBbaXRlbUIuX2lkXTtcbiAgICAgIHJldHVybiBpc0Rlc2NlbmRpbmcgPyBpbmRleEIgLSBpbmRleEEgOiBpbmRleEEgLSBpbmRleEI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdENvbXBhcmVyKGEsIGIpIHtcbiAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgdmFyIGNyaXRlcmlhTmFtZTtcbiAgICAgIHZhciBjcml0ZXJpYU9yZGVyO1xuICAgICAgdmFyIHZhbEE7XG4gICAgICB2YXIgdmFsQjtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsaXN0IG9mIHNvcnQgY3JpdGVyaWEuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRDb21wYXJlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIGNyaXRlcmlhIG5hbWUsIHdoaWNoIHNob3VsZCBtYXRjaCBhbiBpdGVtJ3Mgc29ydCBkYXRhIGtleS5cbiAgICAgICAgY3JpdGVyaWFOYW1lID0gc29ydENvbXBhcmVyW2ldWzBdO1xuICAgICAgICBjcml0ZXJpYU9yZGVyID0gc29ydENvbXBhcmVyW2ldWzFdO1xuXG4gICAgICAgIC8vIEdldCBpdGVtcycgY2FjaGVkIHNvcnQgdmFsdWVzIGZvciB0aGUgY3JpdGVyaWEuIElmIHRoZSBpdGVtIGhhcyBubyBzb3J0XG4gICAgICAgIC8vIGRhdGEgbGV0J3MgdXBkYXRlIHRoZSBpdGVtcyBzb3J0IGRhdGEgKHRoaXMgaXMgYSBsYXp5IGxvYWQgbWVjaGFuaXNtKS5cbiAgICAgICAgdmFsQSA9IChhLl9zb3J0RGF0YSA/IGEgOiBhLl9yZWZyZXNoU29ydERhdGEoKSkuX3NvcnREYXRhW2NyaXRlcmlhTmFtZV07XG4gICAgICAgIHZhbEIgPSAoYi5fc29ydERhdGEgPyBiIDogYi5fcmVmcmVzaFNvcnREYXRhKCkpLl9zb3J0RGF0YVtjcml0ZXJpYU5hbWVdO1xuXG4gICAgICAgIC8vIFNvcnQgdGhlIGl0ZW1zIGluIGRlc2NlbmRpbmcgb3JkZXIgaWYgZGVmaW5lZCBzbyBleHBsaWNpdGx5LiBPdGhlcndpc2VcbiAgICAgICAgLy8gc29ydCBpdGVtcyBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gICAgICAgIGlmIChjcml0ZXJpYU9yZGVyID09PSAnZGVzYycgfHwgKCFjcml0ZXJpYU9yZGVyICYmIGlzRGVzY2VuZGluZykpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWxCIDwgdmFsQSA/IC0xIDogdmFsQiA+IHZhbEEgPyAxIDogMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWxBIDwgdmFsQiA/IC0xIDogdmFsQSA+IHZhbEIgPyAxIDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgLTEgb3IgMSBhcyB0aGUgcmV0dXJuIHZhbHVlLCBsZXQncyByZXR1cm4gaXQgaW1tZWRpYXRlbHkuXG4gICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHZhbHVlcyBhcmUgZXF1YWwgbGV0J3MgY29tcGFyZSB0aGUgaXRlbSBpbmRpY2VzIHRvIG1ha2Ugc3VyZSB3ZVxuICAgICAgLy8gaGF2ZSBhIHN0YWJsZSBzb3J0LlxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgaWYgKCFpbmRleE1hcCkgaW5kZXhNYXAgPSBnZXRJbmRleE1hcChvcmlnSXRlbXMpO1xuICAgICAgICByZXN1bHQgPSBjb21wYXJlSW5kaWNlcyhhLCBiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3VzdG9tQ29tcGFyZXIoYSwgYikge1xuICAgICAgdmFyIHJlc3VsdCA9IHNvcnRDb21wYXJlcihhLCBiKTtcbiAgICAgIC8vIElmIGRlc2NlbmRpbmcgbGV0J3MgaW52ZXJ0IHRoZSByZXN1bHQgdmFsdWUuXG4gICAgICBpZiAoaXNEZXNjZW5kaW5nICYmIHJlc3VsdCkgcmVzdWx0ID0gLXJlc3VsdDtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCByZXN1bHQgKG5vdCB6ZXJvKSBsZXQncyByZXR1cm4gaXQgcmlnaHQgYXdheS5cbiAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAvLyBJZiByZXN1bHQgaXMgemVybyBsZXQncyBjb21wYXJlIHRoZSBpdGVtIGluZGljZXMgdG8gbWFrZSBzdXJlIHdlIGhhdmUgYVxuICAgICAgLy8gc3RhYmxlIHNvcnQuXG4gICAgICBpZiAoIWluZGV4TWFwKSBpbmRleE1hcCA9IGdldEluZGV4TWFwKG9yaWdJdGVtcyk7XG4gICAgICByZXR1cm4gY29tcGFyZUluZGljZXMoYSwgYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbXBhcmVyLCBvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5faXRlbXMubGVuZ3RoIDwgMikgcmV0dXJuIHRoaXM7XG5cbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gU2V0dXAgcGFyZW50IHNjb3BlIGRhdGEuXG4gICAgICBzb3J0Q29tcGFyZXIgPSBjb21wYXJlcjtcbiAgICAgIGlzRGVzY2VuZGluZyA9ICEhb3B0cy5kZXNjZW5kaW5nO1xuICAgICAgb3JpZ0l0ZW1zID0gaXRlbXMuc2xpY2UoMCk7XG4gICAgICBpbmRleE1hcCA9IG51bGw7XG5cbiAgICAgIC8vIElmIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGRvIGEgbmF0aXZlIGFycmF5IHNvcnQuXG4gICAgICBpZiAoaXNGdW5jdGlvbihzb3J0Q29tcGFyZXIpKSB7XG4gICAgICAgIGl0ZW1zLnNvcnQoY3VzdG9tQ29tcGFyZXIpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGlmIHdlIGdvdCBhIHN0cmluZywgbGV0J3Mgc29ydCBieSB0aGUgc29ydCBkYXRhIGFzIHByb3ZpZGVkIGluXG4gICAgICAvLyB0aGUgaW5zdGFuY2UncyBvcHRpb25zLlxuICAgICAgZWxzZSBpZiAodHlwZW9mIHNvcnRDb21wYXJlciA9PT0gc3RyaW5nVHlwZSkge1xuICAgICAgICBzb3J0Q29tcGFyZXIgPSBwYXJzZUNyaXRlcmlhKGNvbXBhcmVyKTtcbiAgICAgICAgaXRlbXMuc29ydChkZWZhdWx0Q29tcGFyZXIpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGlmIHdlIGdvdCBhbiBhcnJheSwgbGV0J3MgYXNzdW1lIGl0J3MgYSBwcmVzb3J0ZWQgYXJyYXkgb2YgdGhlXG4gICAgICAvLyBpdGVtcyBhbmQgb3JkZXIgdGhlIGl0ZW1zIGJhc2VkIG9uIGl0LlxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3J0Q29tcGFyZXIpKSB7XG4gICAgICAgIGlmIChzb3J0Q29tcGFyZXIubGVuZ3RoICE9PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1snICsgbmFtZXNwYWNlICsgJ10gc29ydCByZWZlcmVuY2UgaXRlbXMgZG8gbm90IG1hdGNoIHdpdGggZ3JpZCBpdGVtcy4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc29ydENvbXBhcmVyLmluZGV4T2YoaXRlbXNbaV0pIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbJyArIG5hbWVzcGFjZSArICddIHNvcnQgcmVmZXJlbmNlIGl0ZW1zIGRvIG5vdCBtYXRjaCB3aXRoIGdyaWQgaXRlbXMuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1zW2ldID0gc29ydENvbXBhcmVyW2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rlc2NlbmRpbmcpIGl0ZW1zLnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBsZXQncyBqdXN0IHNraXAgaXQsIG5vdGhpbmcgd2UgY2FuIGRvIGhlcmUuXG4gICAgICBlbHNlIHtcbiAgICAgICAgLyoqIEB0b2RvIE1heWJlIHRocm93IGFuIGVycm9yIGhlcmU/ICovXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IHNvcnQgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50U29ydCkpIHtcbiAgICAgICAgdGhpcy5fZW1pdChldmVudFNvcnQsIGl0ZW1zLnNsaWNlKDApLCBvcmlnSXRlbXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIE1vdmUgaXRlbSB0byBhbm90aGVyIGluZGV4IG9yIGluIHBsYWNlIG9mIGFub3RoZXIgaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBpdGVtXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gcG9zaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuYWN0aW9uPVwibW92ZVwiXVxuICAgKiAgIC0gQWNjZXB0cyBlaXRoZXIgXCJtb3ZlXCIgb3IgXCJzd2FwXCIuXG4gICAqICAgLSBcIm1vdmVcIiBtb3ZlcyB0aGUgaXRlbSBpbiBwbGFjZSBvZiB0aGUgb3RoZXIgaXRlbS5cbiAgICogICAtIFwic3dhcFwiIHN3YXBzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbXMuXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGl0ZW0sIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2l0ZW1zLmxlbmd0aCA8IDIpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBpc1N3YXAgPSBvcHRzLmFjdGlvbiA9PT0gYWN0aW9uU3dhcDtcbiAgICB2YXIgYWN0aW9uID0gaXNTd2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG4gICAgdmFyIGZyb21JdGVtID0gdGhpcy5fZ2V0SXRlbShpdGVtKTtcbiAgICB2YXIgdG9JdGVtID0gdGhpcy5fZ2V0SXRlbShwb3NpdGlvbik7XG4gICAgdmFyIGZyb21JbmRleDtcbiAgICB2YXIgdG9JbmRleDtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgaXRlbXMgZXhpc3QgYW5kIGFyZSBub3QgdGhlIHNhbWUuXG4gICAgaWYgKGZyb21JdGVtICYmIHRvSXRlbSAmJiBmcm9tSXRlbSAhPT0gdG9JdGVtKSB7XG4gICAgICAvLyBHZXQgdGhlIGluZGljZXMgb2YgdGhlIGl0ZW1zLlxuICAgICAgZnJvbUluZGV4ID0gaXRlbXMuaW5kZXhPZihmcm9tSXRlbSk7XG4gICAgICB0b0luZGV4ID0gaXRlbXMuaW5kZXhPZih0b0l0ZW0pO1xuXG4gICAgICAvLyBEbyB0aGUgbW92ZS9zd2FwLlxuICAgICAgaWYgKGlzU3dhcCkge1xuICAgICAgICBhcnJheVN3YXAoaXRlbXMsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheU1vdmUoaXRlbXMsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgbW92ZSBldmVudC5cbiAgICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRNb3ZlKSkge1xuICAgICAgICB0aGlzLl9lbWl0KGV2ZW50TW92ZSwge1xuICAgICAgICAgIGl0ZW06IGZyb21JdGVtLFxuICAgICAgICAgIGZyb21JbmRleDogZnJvbUluZGV4LFxuICAgICAgICAgIHRvSW5kZXg6IHRvSW5kZXgsXG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU2VuZCBpdGVtIHRvIGFub3RoZXIgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBpdGVtXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW29wdGlvbnMuYXBwZW5kVG89ZG9jdW1lbnQuYm9keV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXRTZW5kZXI9dHJ1ZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXRSZWNlaXZlcj10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihpdGVtLCBncmlkLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCBncmlkLl9pc0Rlc3Ryb3llZCB8fCB0aGlzID09PSBncmlkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgdGFyZ2V0IGl0ZW0uXG4gICAgaXRlbSA9IHRoaXMuX2dldEl0ZW0oaXRlbSk7XG4gICAgaWYgKCFpdGVtKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBjb250YWluZXIgPSBvcHRzLmFwcGVuZFRvIHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICAgIHZhciBsYXlvdXRTZW5kZXIgPSBvcHRzLmxheW91dFNlbmRlciA/IG9wdHMubGF5b3V0U2VuZGVyIDogb3B0cy5sYXlvdXRTZW5kZXIgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbGF5b3V0UmVjZWl2ZXIgPSBvcHRzLmxheW91dFJlY2VpdmVyXG4gICAgICA/IG9wdHMubGF5b3V0UmVjZWl2ZXJcbiAgICAgIDogb3B0cy5sYXlvdXRSZWNlaXZlciA9PT0gdW5kZWZpbmVkO1xuXG4gICAgLy8gU3RhcnQgdGhlIG1pZ3JhdGlvbiBwcm9jZXNzLlxuICAgIGl0ZW0uX21pZ3JhdGUuc3RhcnQoZ3JpZCwgcG9zaXRpb24sIGNvbnRhaW5lcik7XG5cbiAgICAvLyBJZiBtaWdyYXRpb24gd2FzIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5IGFuZCB0aGUgaXRlbSBpcyBhY3RpdmUsIGxldCdzIGxheW91dFxuICAgIC8vIHRoZSBncmlkcy5cbiAgICBpZiAoaXRlbS5fbWlncmF0ZS5faXNBY3RpdmUgJiYgaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIGlmIChsYXlvdXRTZW5kZXIpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQoXG4gICAgICAgICAgbGF5b3V0U2VuZGVyID09PSBpbnN0YW50TGF5b3V0LFxuICAgICAgICAgIGlzRnVuY3Rpb24obGF5b3V0U2VuZGVyKSA/IGxheW91dFNlbmRlciA6IHVuZGVmaW5lZFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGxheW91dFJlY2VpdmVyKSB7XG4gICAgICAgIGdyaWQubGF5b3V0KFxuICAgICAgICAgIGxheW91dFJlY2VpdmVyID09PSBpbnN0YW50TGF5b3V0LFxuICAgICAgICAgIGlzRnVuY3Rpb24obGF5b3V0UmVjZWl2ZXIpID8gbGF5b3V0UmVjZWl2ZXIgOiB1bmRlZmluZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbW92ZUVsZW1lbnRzPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZW1vdmVFbGVtZW50cykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcy5zbGljZSgwKTtcbiAgICB2YXIgaTtcblxuICAgIC8vIFVuYmluZCB3aW5kb3cgcmVzaXplIGV2ZW50IGxpc3RlbmVyLlxuICAgIGlmICh0aGlzLl9yZXNpemVIYW5kbGVyKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplSGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gRGVzdHJveSBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW1zW2ldLl9kZXN0cm95KHJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBSZXN0b3JlIGNvbnRhaW5lci5cbiAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIHRoaXMuX3NldHRpbmdzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJyc7XG5cbiAgICAvLyBFbWl0IGRlc3Ryb3kgZXZlbnQgYW5kIHVuYmluZCBhbGwgZXZlbnRzLlxuICAgIHRoaXMuX2VtaXQoZXZlbnREZXN0cm95KTtcbiAgICB0aGlzLl9lbWl0dGVyLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSByZWZlcmVuY2UgZnJvbSB0aGUgZ3JpZCBpbnN0YW5jZXMgY29sbGVjdGlvbi5cbiAgICBncmlkSW5zdGFuY2VzW3RoaXMuX2lkXSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEZsYWcgaW5zdGFuY2UgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSdzIGl0ZW0gYnkgZWxlbWVudCBvciBieSBpbmRleC4gVGFyZ2V0IGNhbiBhbHNvIGJlIGFuIEl0ZW1cbiAgICogaW5zdGFuY2UgaW4gd2hpY2ggY2FzZSB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgaXRlbSBpZiBpdCBleGlzdHMgd2l0aGluXG4gICAqIHJlbGF0ZWQgR3JpZCBpbnN0YW5jZS4gSWYgbm90aGluZyBpcyBmb3VuZCB3aXRoIHRoZSBwcm92aWRlZCB0YXJnZXQsIG51bGxcbiAgICogaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IFt0YXJnZXRdXG4gICAqIEByZXR1cm5zIHs/SXRlbX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9nZXRJdGVtID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgLy8gSWYgbm8gdGFyZ2V0IGlzIHNwZWNpZmllZCBvciB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLCByZXR1cm4gbnVsbC5cbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgKCF0YXJnZXQgJiYgdGFyZ2V0ICE9PSAwKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGFyZ2V0IGlzIG51bWJlciByZXR1cm4gdGhlIGl0ZW0gaW4gdGhhdCBpbmRleC4gSWYgdGhlIG51bWJlciBpcyBsb3dlclxuICAgIC8vIHRoYW4gemVybyBsb29rIGZvciB0aGUgaXRlbSBzdGFydGluZyBmcm9tIHRoZSBlbmQgb2YgdGhlIGl0ZW1zIGFycmF5LiBGb3JcbiAgICAvLyBleGFtcGxlIC0xIGZvciB0aGUgbGFzdCBpdGVtLCAtMiBmb3IgdGhlIHNlY29uZCBsYXN0IGl0ZW0sIGV0Yy5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXNbdGFyZ2V0ID4gLTEgPyB0YXJnZXQgOiB0aGlzLl9pdGVtcy5sZW5ndGggKyB0YXJnZXRdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhbiBpbnN0YW5jZSBvZiBJdGVtIHJldHVybiBpdCBpZiBpdCBpcyBhdHRhY2hlZCB0byB0aGlzXG4gICAgLy8gR3JpZCBpbnN0YW5jZSwgb3RoZXJ3aXNlIHJldHVybiBudWxsLlxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJdGVtKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0Ll9ncmlkSWQgPT09IHRoaXMuX2lkID8gdGFyZ2V0IDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBJbiBvdGhlciBjYXNlcyBsZXQncyBhc3N1bWUgdGhhdCB0aGUgdGFyZ2V0IGlzIGFuIGVsZW1lbnQsIHNvIGxldCdzIHRyeVxuICAgIC8vIHRvIGZpbmQgYW4gaXRlbSB0aGF0IG1hdGNoZXMgdGhlIGVsZW1lbnQgYW5kIHJldHVybiBpdC4gSWYgaXRlbSBpcyBub3RcbiAgICAvLyBmb3VuZCByZXR1cm4gbnVsbC5cbiAgICAvKiogQHRvZG8gVGhpcyBjb3VsZCBiZSBtYWRlIGEgbG90IGZhc3RlciBieSB1c2luZyBNYXAvV2Vha01hcCBvZiBlbGVtZW50cy4gKi9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXRlbXNbaV0uX2VsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlcyBhbmQgdXBkYXRlcyBpbnN0YW5jZSdzIGxheW91dCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0xheW91dERhdGF9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9zZXR0aW5ncy5sYXlvdXQ7XG4gICAgdmFyIHdpZHRoO1xuICAgIHZhciBoZWlnaHQ7XG4gICAgdmFyIG5ld0xheW91dDtcbiAgICB2YXIgaTtcblxuICAgIC8vIExldCdzIGluY3JlbWVudCBsYXlvdXQgaWQuXG4gICAgKytsYXlvdXQuaWQ7XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgbGF5b3V0IGl0ZW1zXG4gICAgbGF5b3V0Lml0ZW1zLmxlbmd0aCA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXRlbXNbaV0uX2lzQWN0aXZlKSBsYXlvdXQuaXRlbXMucHVzaCh0aGlzLl9pdGVtc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gTGV0J3MgbWFrZSBzdXJlIHdlIGhhdmUgdGhlIGNvcnJlY3QgY29udGFpbmVyIGRpbWVuc2lvbnMuXG4gICAgdGhpcy5fcmVmcmVzaERpbWVuc2lvbnMoKTtcblxuICAgIC8vIENhbGN1bGF0ZSBjb250YWluZXIgd2lkdGggYW5kIGhlaWdodCAod2l0aG91dCBib3JkZXJzKS5cbiAgICB3aWR0aCA9IHRoaXMuX3dpZHRoIC0gdGhpcy5fYm9yZGVyTGVmdCAtIHRoaXMuX2JvcmRlclJpZ2h0O1xuICAgIGhlaWdodCA9IHRoaXMuX2hlaWdodCAtIHRoaXMuX2JvcmRlclRvcCAtIHRoaXMuX2JvcmRlckJvdHRvbTtcblxuICAgIC8vIENhbGN1bGF0ZSBuZXcgbGF5b3V0LlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzKSkge1xuICAgICAgbmV3TGF5b3V0ID0gc2V0dGluZ3MobGF5b3V0Lml0ZW1zLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TGF5b3V0ID0gcGFja2VyLmdldExheW91dChsYXlvdXQuaXRlbXMsIHdpZHRoLCBoZWlnaHQsIGxheW91dC5zbG90cywgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIExldCdzIHVwZGF0ZSB0aGUgZ3JpZCdzIGxheW91dC5cbiAgICBsYXlvdXQuc2xvdHMgPSBuZXdMYXlvdXQuc2xvdHM7XG4gICAgbGF5b3V0LnNldFdpZHRoID0gQm9vbGVhbihuZXdMYXlvdXQuc2V0V2lkdGgpO1xuICAgIGxheW91dC5zZXRIZWlnaHQgPSBCb29sZWFuKG5ld0xheW91dC5zZXRIZWlnaHQpO1xuICAgIGxheW91dC53aWR0aCA9IG5ld0xheW91dC53aWR0aDtcbiAgICBsYXlvdXQuaGVpZ2h0ID0gbmV3TGF5b3V0LmhlaWdodDtcblxuICAgIHJldHVybiBsYXlvdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtaXQgYSBncmlkIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7Li4uKn0gW2FyZ11cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9lbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0LmFwcGx5KHRoaXMuX2VtaXR0ZXIsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgZXZlbnRzIGxpc3RlbmVycyBmb3IgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5faGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZW1pdHRlci5fZXZlbnRzW2V2ZW50XTtcbiAgICByZXR1cm4gISEobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29udGFpbmVyJ3Mgd2lkdGgsIGhlaWdodCBhbmQgb2Zmc2V0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlQm91bmRpbmdSZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLl93aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgdGhpcy5fbGVmdCA9IHJlY3QubGVmdDtcbiAgICB0aGlzLl90b3AgPSByZWN0LnRvcDtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGNvbnRhaW5lcidzIGJvcmRlciBzaXplcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbGVmdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJpZ2h0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9wXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYm90dG9tXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlQm9yZGVycyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICBpZiAobGVmdCkgdGhpcy5fYm9yZGVyTGVmdCA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLWxlZnQtd2lkdGgnKTtcbiAgICBpZiAocmlnaHQpIHRoaXMuX2JvcmRlclJpZ2h0ID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItcmlnaHQtd2lkdGgnKTtcbiAgICBpZiAodG9wKSB0aGlzLl9ib3JkZXJUb3AgPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci10b3Atd2lkdGgnKTtcbiAgICBpZiAoYm90dG9tKSB0aGlzLl9ib3JkZXJCb3R0b20gPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1ib3R0b20td2lkdGgnKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVmcmVzaCBhbGwgb2YgY29udGFpbmVyJ3MgaW50ZXJuYWwgZGltZW5zaW9ucyBhbmQgb2Zmc2V0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fcmVmcmVzaERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLl91cGRhdGVCb3JkZXJzKDEsIDEsIDEsIDEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93IG9yIGhpZGUgR3JpZCBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9WaXNpYmxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0geyhTaG93Q2FsbGJhY2t8SGlkZUNhbGxiYWNrKX0gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fc2V0SXRlbXNWaXNpYmlsaXR5ID0gZnVuY3Rpb24oaXRlbXMsIHRvVmlzaWJsZSwgb3B0aW9ucykge1xuICAgIHZhciBncmlkID0gdGhpcztcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgaXNJbnN0YW50ID0gb3B0cy5pbnN0YW50ID09PSB0cnVlO1xuICAgIHZhciBjYWxsYmFjayA9IG9wdHMub25GaW5pc2g7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBjb3VudGVyID0gdGFyZ2V0SXRlbXMubGVuZ3RoO1xuICAgIHZhciBzdGFydEV2ZW50ID0gdG9WaXNpYmxlID8gZXZlbnRTaG93U3RhcnQgOiBldmVudEhpZGVTdGFydDtcbiAgICB2YXIgZW5kRXZlbnQgPSB0b1Zpc2libGUgPyBldmVudFNob3dFbmQgOiBldmVudEhpZGVFbmQ7XG4gICAgdmFyIG1ldGhvZCA9IHRvVmlzaWJsZSA/ICdzaG93JyA6ICdoaWRlJztcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgY29tcGxldGVkSXRlbXMgPSBbXTtcbiAgICB2YXIgaGlkZGVuSXRlbXMgPSBbXTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBpdGVtcyBjYWxsIHRoZSBjYWxsYmFjaywgYnV0IGRvbid0IGVtaXQgYW55IGV2ZW50cy5cbiAgICBpZiAoIWNvdW50ZXIpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkgY2FsbGJhY2sodGFyZ2V0SXRlbXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEVtaXQgc2hvd1N0YXJ0L2hpZGVTdGFydCBldmVudC5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKHN0YXJ0RXZlbnQpKSB7XG4gICAgICB0aGlzLl9lbWl0KHN0YXJ0RXZlbnQsIHRhcmdldEl0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBTaG93L2hpZGUgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gdGFyZ2V0SXRlbXNbaV07XG5cbiAgICAgIC8vIElmIGluYWN0aXZlIGl0ZW0gaXMgc2hvd24gb3IgYWN0aXZlIGl0ZW0gaXMgaGlkZGVuIHdlIG5lZWQgdG8gZG9cbiAgICAgIC8vIGxheW91dC5cbiAgICAgIGlmICgodG9WaXNpYmxlICYmICFpdGVtLl9pc0FjdGl2ZSkgfHwgKCF0b1Zpc2libGUgJiYgaXRlbS5faXNBY3RpdmUpKSB7XG4gICAgICAgIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaW5hY3RpdmUgaXRlbSBpcyBzaG93biB3ZSBhbHNvIG5lZWQgdG8gZG8gYSBsaXR0bGUgaGFjayB0byBtYWtlIHRoZVxuICAgICAgLy8gaXRlbSBub3QgYW5pbWF0ZSBpdCdzIG5leHQgcG9zaXRpb25pbmcgKGxheW91dCkuXG4gICAgICBpZiAodG9WaXNpYmxlICYmICFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgICBpdGVtLl9sYXlvdXQuX3NraXBOZXh0QW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYSBoaWRkZW4gaXRlbSBpcyBiZWluZyBzaG93biB3ZSBuZWVkIHRvIHJlZnJlc2ggdGhlIGl0ZW0nc1xuICAgICAgLy8gZGltZW5zaW9ucy5cbiAgICAgIGlmICh0b1Zpc2libGUgJiYgaXRlbS5fdmlzaWJpbGl0eS5faXNIaWRkZW4pIHtcbiAgICAgICAgaGlkZGVuSXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2hvdy9oaWRlIHRoZSBpdGVtLlxuICAgICAgaXRlbS5fdmlzaWJpbGl0eVttZXRob2RdKGlzSW5zdGFudCwgZnVuY3Rpb24oaW50ZXJydXB0ZWQsIGl0ZW0pIHtcbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgaXRlbSdzIGFuaW1hdGlvbiB3YXMgbm90IGludGVycnVwdGVkIGFkZCBpdCB0byB0aGVcbiAgICAgICAgLy8gY29tcGxldGVkSXRlbXMgYXJyYXkuXG4gICAgICAgIGlmICghaW50ZXJydXB0ZWQpIGNvbXBsZXRlZEl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgLy8gSWYgYWxsIGl0ZW1zIGhhdmUgZmluaXNoZWQgdGhlaXIgYW5pbWF0aW9ucyBjYWxsIHRoZSBjYWxsYmFja1xuICAgICAgICAvLyBhbmQgZW1pdCBzaG93RW5kL2hpZGVFbmQgZXZlbnQuXG4gICAgICAgIGlmICgtLWNvdW50ZXIgPCAxKSB7XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSBjYWxsYmFjayhjb21wbGV0ZWRJdGVtcy5zbGljZSgwKSk7XG4gICAgICAgICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhlbmRFdmVudCkpIGdyaWQuX2VtaXQoZW5kRXZlbnQsIGNvbXBsZXRlZEl0ZW1zLnNsaWNlKDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVmcmVzaCBoaWRkZW4gaXRlbXMuXG4gICAgaWYgKGhpZGRlbkl0ZW1zLmxlbmd0aCkgdGhpcy5yZWZyZXNoSXRlbXMoaGlkZGVuSXRlbXMpO1xuXG4gICAgLy8gTGF5b3V0IGlmIG5lZWRlZC5cbiAgICBpZiAobmVlZHNMYXlvdXQgJiYgbGF5b3V0KSB7XG4gICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIGhlbHBlcnNcbiAgICogKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBNZXJnZSBkZWZhdWx0IHNldHRpbmdzIHdpdGggdXNlciBzZXR0aW5ncy4gVGhlIHJldHVybmVkIG9iamVjdCBpcyBhIG5ld1xuICAgKiBvYmplY3Qgd2l0aCBtZXJnZWQgdmFsdWVzLiBUaGUgbWVyZ2luZyBpcyBhIGRlZXAgbWVyZ2UgbWVhbmluZyB0aGF0IGFsbFxuICAgKiBvYmplY3RzIGFuZCBhcnJheXMgd2l0aGluIHRoZSBwcm92aWRlZCBzZXR0aW5ncyBvYmplY3RzIHdpbGwgYmUgYWxzbyBtZXJnZWRcbiAgICogc28gdGhhdCBtb2RpZnlpbmcgdGhlIHZhbHVlcyBvZiB0aGUgc2V0dGluZ3Mgb2JqZWN0IHdpbGwgaGF2ZSBubyBlZmZlY3Qgb25cbiAgICogdGhlIHJldHVybmVkIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRTZXR0aW5nc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW3VzZXJTZXR0aW5nc11cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhIG5ldyBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZVNldHRpbmdzKGRlZmF1bHRTZXR0aW5ncywgdXNlclNldHRpbmdzKSB7XG4gICAgLy8gQ3JlYXRlIGEgZnJlc2ggY29weSBvZiBkZWZhdWx0IHNldHRpbmdzLlxuICAgIHZhciByZXQgPSBtZXJnZU9iamVjdHMoe30sIGRlZmF1bHRTZXR0aW5ncyk7XG5cbiAgICAvLyBNZXJnZSB1c2VyIHNldHRpbmdzIHRvIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAgaWYgKHVzZXJTZXR0aW5ncykge1xuICAgICAgcmV0ID0gbWVyZ2VPYmplY3RzKHJldCwgdXNlclNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdmlzaWJsZS9oaWRkZW4gc3R5bGVzIG1hbnVhbGx5IHNvIHRoYXQgdGhlIHdob2xlIG9iamVjdCBpc1xuICAgIC8vIG92ZXJyaWRkZW4gaW5zdGVhZCBvZiB0aGUgcHJvcHMuXG4gICAgcmV0LnZpc2libGVTdHlsZXMgPSAodXNlclNldHRpbmdzIHx8IDApLnZpc2libGVTdHlsZXMgfHwgKGRlZmF1bHRTZXR0aW5ncyB8fCAwKS52aXNpYmxlU3R5bGVzO1xuICAgIHJldC5oaWRkZW5TdHlsZXMgPSAodXNlclNldHRpbmdzIHx8IDApLmhpZGRlblN0eWxlcyB8fCAoZGVmYXVsdFNldHRpbmdzIHx8IDApLmhpZGRlblN0eWxlcztcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgdHdvIG9iamVjdHMgcmVjdXJzaXZlbHkgKGRlZXAgbWVyZ2UpLiBUaGUgc291cmNlIG9iamVjdCdzIHByb3BlcnRpZXNcbiAgICogYXJlIG1lcmdlZCB0byB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICAgKiAgIC0gVGhlIHRhcmdldCBvYmplY3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VcbiAgICogICAtIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VPYmplY3RzKHRhcmdldCwgc291cmNlKSB7XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBsZW5ndGggPSBzb3VyY2VLZXlzLmxlbmd0aDtcbiAgICB2YXIgaXNTb3VyY2VPYmplY3Q7XG4gICAgdmFyIHByb3BOYW1lO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9wTmFtZSA9IHNvdXJjZUtleXNbaV07XG4gICAgICBpc1NvdXJjZU9iamVjdCA9IGlzUGxhaW5PYmplY3Qoc291cmNlW3Byb3BOYW1lXSk7XG5cbiAgICAgIC8vIElmIHRhcmdldCBhbmQgc291cmNlIHZhbHVlcyBhcmUgYm90aCBvYmplY3RzLCBtZXJnZSB0aGUgb2JqZWN0cyBhbmRcbiAgICAgIC8vIGFzc2lnbiB0aGUgbWVyZ2VkIHZhbHVlIHRvIHRoZSB0YXJnZXQgcHJvcGVydHkuXG4gICAgICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXRbcHJvcE5hbWVdKSAmJiBpc1NvdXJjZU9iamVjdCkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gbWVyZ2VPYmplY3RzKG1lcmdlT2JqZWN0cyh7fSwgdGFyZ2V0W3Byb3BOYW1lXSksIHNvdXJjZVtwcm9wTmFtZV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgc291cmNlJ3MgdmFsdWUgaXMgb2JqZWN0IGFuZCB0YXJnZXQncyBpcyBub3QgbGV0J3MgY2xvbmUgdGhlIG9iamVjdCBhc1xuICAgICAgLy8gdGhlIHRhcmdldCdzIHZhbHVlLlxuICAgICAgaWYgKGlzU291cmNlT2JqZWN0KSB7XG4gICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBtZXJnZU9iamVjdHMoe30sIHNvdXJjZVtwcm9wTmFtZV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgc291cmNlJ3MgdmFsdWUgaXMgYW4gYXJyYXkgbGV0J3MgY2xvbmUgdGhlIGFycmF5IGFzIHRoZSB0YXJnZXQnc1xuICAgICAgLy8gdmFsdWUuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2VbcHJvcE5hbWVdKSkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXS5zbGljZSgwKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluIGFsbCBvdGhlciBjYXNlcyBsZXQncyBqdXN0IGRpcmVjdGx5IGFzc2lnbiB0aGUgc291cmNlJ3MgdmFsdWUgYXMgdGhlXG4gICAgICAvLyB0YXJnZXQncyB2YWx1ZS5cbiAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICByZXR1cm4gR3JpZDtcblxufSkpO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4vdXRpbHMvaW5kZXhcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4sXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgaWYgKCF2aXN1YWxpemVycyB8fCB2aXN1YWxpemVycy5sZW5ndGggPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiVmlzdWFsaXplckFycmF5V3JhcHBlciB3b3JrcyB3aXRoIHZpc3VhbGl6ZXJzIGNvbGxlY3Rpb24gb25seS5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKCh2aXN1YWxpemVyKSA9PiB7XG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlclRvb2xiYXJJdGVtKFwiY2hhbmdlVmlzdWFsaXplclwiLCAoKSA9PlxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXG4gICAgICAgIHRoaXMudmlzdWFsaXplcnMubWFwKCh2aXN1YWxpemVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB2aXN1YWxpemVyLm5hbWUsXG4gICAgICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidmlzdWFsaXplcl9cIiArIHZpc3VhbGl6ZXIubmFtZSksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIChvcHRpb246IGFueSkgPT4gdGhpcy52aXN1YWxpemVyLm5hbWUgPT09IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgKGU6IGFueSkgPT4gdGhpcy5zZXRWaXN1YWxpemVyKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSB2aXN1YWxpemVyc1swXTtcbiAgfVxuXG4gIHByb3RlY3RlZCB2aXN1YWxpemVyQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB2aXN1YWxpemVyOiBWaXN1YWxpemVyQmFzZTtcblxuICBwcml2YXRlIHNldFZpc3VhbGl6ZXIobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCEhdGhpcy52aXN1YWxpemVyKSB7XG4gICAgICB0aGlzLnZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSB0aGlzLnZpc3VhbGl6ZXJzLmZpbHRlcigodikgPT4gdi5uYW1lID09PSBuYW1lKVswXTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xuICAgIHN1cGVyLnVwZGF0ZURhdGEoZGF0YSk7XG4gICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKCh2aXN1YWxpemVyKSA9PiB7XG4gICAgICB2aXN1YWxpemVyLnVwZGF0ZURhdGEoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy52aXN1YWxpemVyQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMudmlzdWFsaXplci5yZW5kZXIodGhpcy52aXN1YWxpemVyQ29udGFpbmVyKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKCh2aXN1YWxpemVyKSA9PiB7XG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIHRoaXMudmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyQWx0ZXJuYXRpdmVzVmlzdWFsaXplcihcbiAgQWx0ZXJuYXRpdmVWaXN1YWxpemVyc1dyYXBwZXJcbik7XG4iLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25Cb29sZWFuTW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gXCIuL2RhdGFQcm92aWRlclwiO1xuXG5leHBvcnQgY2xhc3MgQm9vbGVhbk1vZGVsIGV4dGVuZHMgU2VsZWN0QmFzZSB7XG4gIHByb3RlY3RlZCBjaGFydFR5cGVzOiBzdHJpbmdbXTtcbiAgcHVibGljIGNoYXJ0VHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcImJvb2xlYW5cIjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYm9vbGVhblF1ZXN0aW9uKCkge1xuICAgIHJldHVybiA8UXVlc3Rpb25Cb29sZWFuTW9kZWw+dGhpcy5xdWVzdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHJ1ZUNvbG9yID0gXCJcIjtcbiAgcHVibGljIHN0YXRpYyBmYWxzZUNvbG9yID0gXCJcIjtcblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgcmV0dXJuIG5ldyBJdGVtVmFsdWUodmFsdWVzW2xhYmVscy5pbmRleE9mKGl0ZW1UZXh0KV0sIGl0ZW1UZXh0KTtcbiAgfVxuXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVUcnVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyB0aGlzLmJvb2xlYW5RdWVzdGlvbi52YWx1ZVRydWVcbiAgICAgICAgOiB0cnVlLFxuICAgICAgdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVGYWxzZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVGYWxzZVxuICAgICAgICA6IGZhbHNlLFxuICAgIF07XG4gIH1cblxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIGxhYmVscyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgaWYgKHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsVHJ1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsYWJlbHNbMF0gPSB0aGlzLmJvb2xlYW5RdWVzdGlvbi5sb2NMYWJlbFRydWUudGV4dE9ySHRtbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsRmFsc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGFiZWxzWzFdID0gdGhpcy5ib29sZWFuUXVlc3Rpb24ubG9jTGFiZWxGYWxzZS50ZXh0T3JIdG1sO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBFbGVtZW50VmlzaWJpbGl0eSB7XHJcbiAgVmlzaWJsZSxcclxuICBJbnZpc2libGUsXHJcbiAgUHVibGljSW52aXNpYmxlLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWaXN1YWxpemVyUGFuZWxFbGVtZW50IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eTtcclxuICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgbG9jYWxlOiBzdHJpbmc7XHJcbiAgZWxlbWVudHM6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50W107XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBEZXNjcmliZXMgZGF0YSBpbmZvOlxyXG4gKiBkYXRhTmFtZSAtIHF1ZXN0aW9uIG5hbWUsIHVzZWQgYXMgYSBrZXkgdG8gb2J0YWluIHF1ZXN0aW9uIGRhdGFcclxuICogZ2V0VmFsdWVzIC0gZnVuY3Rpb24gcmV0dXJuaW5nIGFuIGFycmF5IG9mIGFsbCBwb3NzaWJsZSB2YWx1ZXNcclxuICogZ2V0TGFiZWxzIC0gZnVuY3Rpb24gcmV0dXJuaW5nIGFuIGFycmF5IG9mIGh1bWFuLWZyaWVuZGx5IGRlc2NyaXB0aW9ucyBmb3IgdmFsdWVzXHJcbiAqIGdldFNlcmllc1ZhbHVlcyAtIGZ1bmN0aW9uIHJldHVybmluZyBhbiBhcnJheSBvZiBhbGwgcG9zc2libGUgc2VyaWVzIHZhbHVlc1xyXG4gKiBnZXRTZXJpZXNMYWJlbHMgLSBmdW5jdGlvbiByZXR1cm5pbmcgYW4gYXJyYXkgb2YgaHVtYW4tZnJpZW5kbHkgZGVzY3JpcHRpb25zIGZvciBzZXJpZXMgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSW5mbyB7XHJcbiAgZGF0YU5hbWU6IHN0cmluZztcclxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PjtcclxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPjtcclxuICBnZXRTZXJpZXNWYWx1ZXMoKTogQXJyYXk8c3RyaW5nPjtcclxuICBnZXRTZXJpZXNMYWJlbHMoKTogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFQcm92aWRlciB7XHJcbiAgcHVibGljIHN0YXRpYyBzZXJpZXNNYXJrZXJLZXkgPSBcIl9fc2Ffc2VyaWVzX25hbWVcIjtcclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyZWREYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+O1xyXG4gIHByaXZhdGUgX3N0YXRpc3RpY3NDYWNoZTogeyBbaW5kZXg6IHN0cmluZ106IEFycmF5PEFycmF5PG51bWJlcj4+IH07XHJcbiAgcHJvdGVjdGVkIGZpbHRlclZhbHVlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT4gPSBbXSkge31cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLl9zdGF0aXN0aWNzQ2FjaGUgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICB0aGlzLl9maWx0ZXJlZERhdGEgIT09IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZSA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5fZmlsdGVyZWREYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLnJhaXNlRGF0YUNoYW5nZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0IGRhdGEoZGF0YTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy5fZGF0YSA9IFtdLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZmlsdGVyZWREYXRhKCkge1xyXG4gICAgaWYgKHRoaXMuX2ZpbHRlcmVkRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCBmaWx0ZXJLZXlzID0gT2JqZWN0LmtleXModGhpcy5maWx0ZXJWYWx1ZXMpO1xyXG4gICAgICBpZiAoZmlsdGVyS2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyh0aGlzLmZpbHRlclZhbHVlcykuc29tZShcclxuICAgICAgICAgICAgKGtleSkgPT4gaXRlbVtrZXldICE9PSB0aGlzLmZpbHRlclZhbHVlc1trZXldXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkRGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgZmlsdGVyIGJ5IHF1ZXN0aW9uIG5hbWUgYW5kIHZhbHVlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRGaWx0ZXIocXVlc3Rpb25OYW1lOiBzdHJpbmcsIHNlbGVjdGVkVmFsdWU6IGFueSkge1xyXG4gICAgdmFyIGZpbHRlckNoYW5nZWQgPSB0cnVlO1xyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBmaWx0ZXJDaGFuZ2VkID0gdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXSAhPT0gc2VsZWN0ZWRWYWx1ZTtcclxuICAgICAgdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXSA9IHNlbGVjdGVkVmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWx0ZXJDaGFuZ2VkID0gdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICBkZWxldGUgdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXJDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXREYXRhQ29yZShkYXRhSW5mbzogSURhdGFJbmZvKSB7XHJcbiAgICBjb25zdCBkYXRhTmFtZSA9IGRhdGFJbmZvLmRhdGFOYW1lO1xyXG4gICAgY29uc3Qgc3RhdGlzdGljczogQXJyYXk8QXJyYXk8bnVtYmVyPj4gPSBbXTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZXMgPSBkYXRhSW5mby5nZXRWYWx1ZXMoKTtcclxuICAgIGNvbnN0IHZhbHVlc0luZGV4OiB7IFtpbmRleDogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgIHZhbHVlcy5mb3JFYWNoKCh2YWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICB2YWx1ZXNJbmRleFt2YWxdID0gaW5kZXg7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXJpZXMgPSBkYXRhSW5mby5nZXRTZXJpZXNWYWx1ZXMoKTtcclxuICAgIGNvbnN0IHNlcmllc0luZGV4OiB7IFtpbmRleDogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgIHNlcmllcy5mb3JFYWNoKCh2YWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBzZXJpZXNJbmRleFt2YWxdID0gaW5kZXg7XHJcbiAgICAgIHN0YXRpc3RpY3MucHVzaChuZXcgQXJyYXk8bnVtYmVyPih2YWx1ZXMubGVuZ3RoKS5maWxsKDApKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdGF0aXN0aWNzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzdGF0aXN0aWNzLnB1c2gobmV3IEFycmF5PG51bWJlcj4odmFsdWVzLmxlbmd0aCkuZmlsbCgwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZERhdGEuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbZGF0YU5hbWVdO1xyXG4gICAgICBpZiAocm93VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IHJvd1ZhbHVlcyA9IEFycmF5LmlzQXJyYXkocm93VmFsdWUpID8gcm93VmFsdWUgOiBbcm93VmFsdWVdO1xyXG4gICAgICAgIGlmIChzZXJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaWYgKHJvd1tEYXRhUHJvdmlkZXIuc2VyaWVzTWFya2VyS2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIFNlcmllcyBhcmUgbGFiZWxsZWQgYnkgc2VyaWVzTWFya2VyS2V5IGluIHJvdyBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmllc05vID1cclxuICAgICAgICAgICAgICBzZXJpZXNJbmRleFtyb3dbRGF0YVByb3ZpZGVyLnNlcmllc01hcmtlcktleV1dIHx8IDA7XHJcbiAgICAgICAgICAgIHJvd1ZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICBzdGF0aXN0aWNzW3Nlcmllc05vXVt2YWx1ZXNJbmRleFt2YWxdXSsrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNlcmllcyBhcmUgdGhlIGtleXMgaW4gcXVlc3Rpb24gdmFsdWUgKG1hdHJpeCBxdWVzdGlvbilcclxuICAgICAgICAgICAgLy8gVE9ETzogdGhpbmsgYWJvdXQgdGhlIGRlLW5vcm1hbGl6YXRpb24gYW5kIGNvbWJpbmUgd2l0aCB0aGUgcHJldmlvdXMgY2FzZVxyXG4gICAgICAgICAgICByb3dWYWx1ZXMuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2VyaWVzLmZvckVhY2goKHNlcmllc05hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxbc2VyaWVzTmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzZXJpZXNObyA9IHNlcmllc0luZGV4W3Nlcmllc05hbWVdIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3Nbc2VyaWVzTm9dW3ZhbHVlc0luZGV4W3ZhbFtzZXJpZXNOYW1lXV1dKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBObyBzZXJpZXNcclxuICAgICAgICAgIHJvd1ZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHN0YXRpc3RpY3NbMF1bdmFsdWVzSW5kZXhbdmFsXV0rKyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9zdGF0aXN0aWNzQ2FjaGVbZGF0YU5hbWVdID0gc3RhdGlzdGljcztcclxuICAgIHJldHVybiBzdGF0aXN0aWNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBjYWxjdWxhdGVkIHN0YXRpc2N0aWNzIGZvciB0aGUgSURhdGFJbmZvIG9iamVjdC5cclxuICAgKi9cclxuICBnZXREYXRhKGRhdGFJbmZvOiBJRGF0YUluZm8pIHtcclxuICAgIGNvbnN0IGRhdGFOYW1lID0gZGF0YUluZm8uZGF0YU5hbWU7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZVtkYXRhTmFtZV0gPT09IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIGlmICh0aGlzLl9zdGF0aXN0aWNzQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZSA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3N0YXRpc3RpY3NDYWNoZVtkYXRhTmFtZV0gPSB0aGlzLmdldERhdGFDb3JlKGRhdGFJbmZvKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fc3RhdGlzdGljc0NhY2hlW2RhdGFOYW1lXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIGRhdGEgaGFzIGJlZW4gY2hhbmdlZC5cclxuICAgKi9cclxuICBwdWJsaWMgb25EYXRhQ2hhbmdlZCA9IG5ldyBFdmVudDxcclxuICAgIChzZW5kZXI6IERhdGFQcm92aWRlciwgb3B0aW9uczogYW55KSA9PiBhbnksXHJcbiAgICBhbnlcclxuICA+KCk7XHJcblxyXG4gIHByb3RlY3RlZCByYWlzZURhdGFDaGFuZ2VkKCkge1xyXG4gICAgaWYgKCF0aGlzLm9uRGF0YUNoYW5nZWQuaXNFbXB0eSkge1xyXG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZWQuZmlyZSh0aGlzLCB7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbi8vbG9jYWxpemF0aW9uXG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZmFyc2lcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mcmVuY2hcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9ydXNzaWFuXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuLi9kYXRhUHJvdmlkZXJcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL3Zpc3VhbGl6ZXJCYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcbmV4cG9ydCAqIGZyb20gXCIuLi92aXN1YWxpemF0aW9uUGFuZWxEeW5hbWljXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcIjtcbmV4cG9ydCAqIGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWF0cml4RHJvcGRvd25cIjtcbmV4cG9ydCAqIGZyb20gXCIuLi9hbHRlcm5hdGl2ZVZpenVhbGl6ZXJzV3JhcHBlclwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi4vcGxvdGx5L2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vd29yZGNsb3VkL3dvcmRjbG91ZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuLi90ZXh0XCI7XG5leHBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuIiwiaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckluZm8ge1xyXG4gIHByaXZhdGUgX2h0bWxFbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHRleHQ6IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih2aXN1YWxpemVyOiBTZWxlY3RCYXNlKSB7XHJcbiAgICB0aGlzLl9odG1sRWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4oXHJcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzYS1xdWVzdGlvbl9fZmlsdGVyXCIpXHJcbiAgICApO1xyXG4gICAgdGhpcy50ZXh0ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJzcGFuXCIsXHJcbiAgICAgIFwic2EtcXVlc3Rpb25fX2ZpbHRlci10ZXh0XCJcclxuICAgICk7XHJcbiAgICB0aGlzLl9odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xyXG4gICAgY29uc3QgZmlsdGVyQ2xlYXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVCdXR0b24oKCkgPT4ge1xyXG4gICAgICB2aXN1YWxpemVyLnNldFNlbGVjdGlvbih1bmRlZmluZWQpO1xyXG4gICAgfSwgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNsZWFyQnV0dG9uXCIpKTtcclxuICAgIHRoaXMuX2h0bWxFbGVtZW50LmFwcGVuZENoaWxkKGZpbHRlckNsZWFyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaHRtbEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHRtbEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHNlbGVjdGlvbjogeyB2YWx1ZTogYW55OyB0ZXh0OiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gdW5kZWZpbmVkICYmIHNlbGVjdGlvbi52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2h0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICB0aGlzLnRleHQuaW5uZXJIVE1MID0gXCJGaWx0ZXI6IFtcIiArIHNlbGVjdGlvbi50ZXh0ICsgXCJdXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHRoaXMudGV4dC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCBNdXVyaSA9IHJlcXVpcmUoXCJtdXVyaVwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFbmdpbmUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfYWxsb3dlZDogYm9vbGVhbikge31cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0Q29yZShjb250YWluZXI6IEhUTUxFbGVtZW50KSB7fVxyXG4gIHByb3RlY3RlZCBzdG9wQ29yZSgpIHt9XHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNvcmUoKSB7fVxyXG5cclxuICBnZXQgYWxsb3dlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYgKHRoaXMuX2FsbG93ZWQpIHtcclxuICAgICAgdGhpcy5zdGFydENvcmUoY29udGFpbmVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RvcCgpIHtcclxuICAgIGlmICh0aGlzLl9hbGxvd2VkKSB7XHJcbiAgICAgIHRoaXMuc3RvcENvcmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2FsbG93ZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVDb3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGQoZWxlbWVudHM6IEFycmF5PEhUTUxFbGVtZW50Piwgb3B0aW9ucz86IGFueSkge31cclxuICByZW1vdmUoZWxlbWVudHM6IEFycmF5PEhUTUxFbGVtZW50Piwgb3B0aW9ucz86IGFueSkge31cclxuXHJcbiAgb25Nb3ZlQ2FsbGJhY2s6IChmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdG9wKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXV1cmlMYXlvdXRFbmdpbmUgZXh0ZW5kcyBMYXlvdXRFbmdpbmUge1xyXG4gIHByaXZhdGUgX211dXJpOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfbGF5b3V0aW5nVGltZXI6IGFueSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoYWxsb3dlZDogYm9vbGVhbiwgcHJpdmF0ZSBfc2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgc3VwZXIoYWxsb3dlZCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnRDb3JlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX211dXJpID0gbmV3IE11dXJpKGNvbnRhaW5lciwge1xyXG4gICAgICBkcmFnU3RhcnRQcmVkaWNhdGU6IHtcclxuICAgICAgICBoYW5kbGU6IFwiLnNhLXF1ZXN0aW9uX190aXRsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtczogdGhpcy5fc2VsZWN0b3IsXHJcbiAgICAgIGRyYWdFbmFibGVkOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9tdXVyaS5vbihcclxuICAgICAgXCJtb3ZlXCIsXHJcbiAgICAgIChkYXRhOiBhbnkpID0+XHJcbiAgICAgICAgdGhpcy5vbk1vdmVDYWxsYmFjayAmJiB0aGlzLm9uTW92ZUNhbGxiYWNrKGRhdGEuZnJvbUluZGV4LCBkYXRhLnRvSW5kZXgpXHJcbiAgICApO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgc3RvcENvcmUoKSB7XHJcbiAgICB0aGlzLl9tdXVyaS5vZmYoXCJtb3ZlXCIpO1xyXG4gICAgdGhpcy5fbXV1cmkuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5fbXV1cmkgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCB1cGRhdGVDb3JlKCkge1xyXG4gICAgaWYgKHRoaXMuX2xheW91dGluZ1RpbWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2xheW91dGluZ1RpbWVyKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2xheW91dGluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2xheW91dGluZ1RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLl9tdXVyaS5yZWZyZXNoSXRlbXMoKTtcclxuICAgICAgdGhpcy5fbXV1cmkubGF5b3V0KCk7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBhZGQoZWxlbWVudHM6IEFycmF5PEhUTUxFbGVtZW50Piwgb3B0aW9ucz86IGFueSkge1xyXG4gICAgdGhpcy5fbXV1cmkuYWRkKGVsZW1lbnRzLCBvcHRpb25zKTtcclxuICB9XHJcbiAgcmVtb3ZlKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4sIG9wdGlvbnM/OiBhbnkpIHtcclxuICAgIHRoaXMuX211dXJpLnJlbW92ZShlbGVtZW50cywgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcbi8vaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJNYWtlIGNvbHVtbiBwdWJsaWNcIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcbiAgc2hvd0J1dHRvbjogXCJTaG93XCIsXG4gIHJlc2V0RmlsdGVyOiBcIlJlc2V0IEZpbHRlclwiLFxuICBjaGFuZ2VMb2NhbGU6IFwiQ2hhbmdlIExvY2FsZVwiLFxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0XCIsXG4gIGFzY09yZGVyOiBcIkFzY2VuZGluZ1wiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJPdGhlciBpdGVtcyBhbmQgY29tbWVudHNcIixcbn07XG5cbi8vVW5jb21tZW50IHRoZXNlIHR3byBsaW5lcyBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGUuIFlvdSBzaG91bGQgcmVwbGFjZSBcImVuXCIgYW5kIGVuU3RyaW5ncyB3aXRoIHlvdXIgbG9jYWxlIChcImZyXCIsIFwiZGVcIiBhbmQgc28gb24pIGFuZCB5b3VyIHZhcmlhYmxlLlxuLy9sb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4vL2xvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJFbmdsaXNoXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGZhcnNpU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwi2q/YsdmI2Ycg2KjZhtiv24wg2KjYp1wiLFxuICB1bmdyb3VwQnV0dG9uOiBcItit2LDZgSDar9ix2YjZh1wiLFxuICBzZWxlY3RCdXR0b246IFwi2KfZhtiq2K7Yp9ioXCIsXG4gIGhpZGVDb2x1bW46IFwi2YXYrtmB24wg2qnYsdiv2YYg2LPYqtmI2YZcIixcbiAgc2hvd0NvbHVtbjogXCLZhtmF2KfbjNi0INiz2KrZiNmGXCIsXG4gIG1vdmVUb0RldGFpbDogXCLYp9mG2KrZgtin2YQg2KjZhyDYrNiy2KbbjNin2KpcIixcbiAgc2hvd0FzQ29sdW1uOiBcItmG2YXYp9uM2LQg2KjZhyDYudmG2YjYp9mGINiz2KrZiNmGXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCLZhdiq2YjZhiDYr9ixINis2K/ZiNmEXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcItin2KjYsSDaqdmE2YXYp9iqXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwi2YXbjNmE2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfcGllOiBcItiv2KfYqNix2Ycg2KfbjChwaWUpXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcItm+2LHYp9qp2YbYr9qv24woU2NhdHRlcilcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIti52YLYsdio2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcItmF2K7ZgduMXCIsXG4gIHJlc2V0RmlsdGVyOiBcItio2KfYstmG2LTYp9mG24wg2YHbjNmE2KrYsdmH2KdcIixcbiAgY2xlYXJCdXR0b246IFwi2b7Yp9qpINqp2LHYr9mGXCIsXG4gIGFkZEVsZW1lbnQ6IFwi2KfZhtiq2K7Yp9ioINiz2YjYp9mEINio2LHYp9uMINmG2YXYp9uM2LQuLi5cIlxufTtcblxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmYVwiXSA9IGZhcnNpU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZhXCJdID0gXCJGYXJzaShQZXJzaWFuKVwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCB2YXIgZnJlbmNoU3RyaW5ncyA9IHtcclxuICAgIGdyb3VwQnV0dG9uOiBcIkdyb3VwZXJcIixcclxuICAgIHVuZ3JvdXBCdXR0b246IFwiRGlzc29jaWVyXCIsXHJcbiAgICBzZWxlY3RCdXR0b246IFwiU8OpbGVjdGlvbm5lclwiLFxyXG4gICAgaGlkZUNvbHVtbjogXCJNYXNxdWVyIGNvbG9ubmVcIixcclxuICAgIHNob3dDb2x1bW46IFwiQWZmaWNoZXIgY29sb25uZVwiLFxyXG4gICAgbWFrZVByaXZhdGVDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHJpdsOpXCIsXHJcbiAgICBtYWtlUHVibGljQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHB1YmxpY1wiLFxyXG4gICAgbW92ZVRvRGV0YWlsOiBcIkTDqXBsYWNlciB2ZXJzIGTDqXRhaWxzXCIsXHJcbiAgICBzaG93QXNDb2x1bW46IFwiQWZmaWNoZXIgZW4gY29sb25uZVwiLFxyXG4gICAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRlcyBlbiB0YWJsZVwiLFxyXG4gICAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiTnVhZ2VzIGRlIG1vdHNcIixcclxuICAgIGNoYXJ0VHlwZV9iYXI6IFwiQmFycmVzXCIsXHJcbiAgICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJCYXJyZXMgZW1waWzDqWVzXCIsXHJcbiAgICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiQW5uZWF1XCIsXHJcbiAgICBjaGFydFR5cGVfcGllOiBcIlNlY3RldXJzXCIsXHJcbiAgICBjaGFydFR5cGVfc2NhdHRlcjogXCJOdWFnZXMgZGUgcG9pbnRzXCIsXHJcbiAgICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcclxuICAgIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGVzXCIsXHJcbiAgICBoaWRlQnV0dG9uOiBcIk1hc3F1ZXJcIixcclxuICAgIHJlc2V0RmlsdGVyOiBcIlJhZnJhaWNoaXIgRmlsdHJlc1wiLFxyXG4gICAgY2xlYXJCdXR0b246IFwiUmFmcmFpY2hpclwiLFxyXG4gICAgYWRkRWxlbWVudDogXCJDaG9pc2lyIGxhIHF1ZXN0aW9uIMOgIGFmZmljaGVyLi4uXCIsXHJcbiAgICBkZWZhdWx0T3JkZXI6IFwiRGVmYXV0XCIsXHJcbiAgICBhc2NPcmRlcjogXCJBc2NlbmRhbnRcIixcclxuICAgIGRlc2NPcmRlcjogXCJEZXNjZW5kYW50XCIsXHJcbiAgICBzaG93TWlub3JDb2x1bW5zOiBcIkFmZmljaGVyIGxlcyBjb2xvbm5lcyBtaW5ldXJlc1wiXHJcbn07XHJcblxyXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZyXCJdID0gZnJlbmNoU3RyaW5ncztcclxubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZnJcIl0gPSBcIkZyZW5jaFwiOyIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgcnVzc2lhblN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0IE1lXCIsXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJNYWtlIGNvbHVtbiBwcml2YXRlXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHVibGljXCIsXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG91Z2hudXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJQaWVcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCLQodC60YDRi9GC0YxcIixcbiAgc2hvd0J1dHRvbjogXCLQn9C+0LrQsNC30LDRgtGMXCIsXG4gIHJlc2V0RmlsdGVyOiBcItCe0YfQuNGB0YLQuNGC0Ywg0YTQuNC70YzRgtGAXCIsXG4gIGNoYW5nZUxvY2FsZTogXCLQodC80LXQvdC40YLRjCDRj9C30YvQulwiLFxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0XCIsXG4gIGFzY09yZGVyOiBcIkFzY2VuZGluZ1wiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJPdGhlciBpdGVtcyBhbmQgY29tbWVudHNcIixcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wicnVcIl0gPSBydXNzaWFuU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcInJ1XCJdID0gXCJSdXNzaWFuXCI7XG4iLCJpbXBvcnQgeyBlbmdsaXNoU3RyaW5ncyB9IGZyb20gXCIuL2xvY2FsaXphdGlvbi9lbmdsaXNoXCI7XG5cbmV4cG9ydCB2YXIgbG9jYWxpemF0aW9uID0ge1xuICBjdXJyZW50TG9jYWxlVmFsdWU6IFwiXCIsXG4gIGRlZmF1bHRMb2NhbGVWYWx1ZTogXCJlblwiLFxuICBsb2NhbGVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgbG9jYWxlTmFtZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBzdXBwb3J0ZWRMb2NhbGVzOiA8QXJyYXk8YW55Pj5bXSxcbiAgZ2V0IGN1cnJlbnRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID09PSB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZVxuICAgICAgPyBcIlwiXG4gICAgICA6IHRoaXMuY3VycmVudExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgY3VycmVudExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXQgZGVmYXVsdExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBkZWZhdWx0TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldFN0cmluZzogZnVuY3Rpb24oc3RyTmFtZTogc3RyaW5nKSB7XG4gICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2FsZVxuICAgICAgPyB0aGlzLmxvY2FsZXNbdGhpcy5jdXJyZW50TG9jYWxlXVxuICAgICAgOiB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcbiAgICBpZiAoIWxvYyB8fCAhbG9jW3N0ck5hbWVdKSBsb2MgPSB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcbiAgICB2YXIgcmVzdWx0ID0gbG9jW3N0ck5hbWVdO1xuICAgIGlmKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmxvY2FsZXNbXCJlblwiXVtzdHJOYW1lXSB8fCBzdHJOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICBnZXRMb2NhbGVzOiBmdW5jdGlvbigpOiBBcnJheTxzdHJpbmc+IHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgcmVzLnB1c2goXCJcIik7XG4gICAgaWYgKHRoaXMuc3VwcG9ydGVkTG9jYWxlcyAmJiB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzLnB1c2godGhpcy5zdXBwb3J0ZWRMb2NhbGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXMuc29ydCgpO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgc3VydmV5U3RyaW5ncyA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiZW5nbGlzaFwiO1xuIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE1hdHJpeCBleHRlbmRzIFNlbGVjdEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbWF0cml4UXVlc3Rpb24oKTogUXVlc3Rpb25NYXRyaXhNb2RlbCB7XG4gICAgcmV0dXJuIDxRdWVzdGlvbk1hdHJpeE1vZGVsPnRoaXMucXVlc3Rpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwibWF0cml4XCI7XG4gIH1cblxuICBnZXRTZXJpZXNWYWx1ZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4UXVlc3Rpb24ucm93cy5tYXAoKHJvdzogSXRlbVZhbHVlKSA9PiBcIlwiICsgcm93LnZhbHVlKTtcbiAgfVxuXG4gIGdldFNlcmllc0xhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXhRdWVzdGlvbi5yb3dzLm1hcCgocm93OiBJdGVtVmFsdWUpID0+XG4gICAgICBJdGVtVmFsdWUuZ2V0VGV4dE9ySHRtbEJ5VmFsdWUodGhpcy5tYXRyaXhRdWVzdGlvbi5yb3dzLCByb3cudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZEl0ZW1CeVRleHQoaXRlbVRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeFF1ZXN0aW9uLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgKGNvbHVtbjogSXRlbVZhbHVlKSA9PiBjb2x1bW4udGV4dCA9PT0gaXRlbVRleHRcbiAgICApWzBdO1xuICB9XG5cbiAgdmFsdWVzU291cmNlKCk6IEFycmF5PEl0ZW1WYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeFF1ZXN0aW9uLmNvbHVtbnM7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueVtdIHtcbiAgICBjb25zdCBzdGF0aXN0aWNzID0gc3VwZXIuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IHNlcmllcyA9IHRoaXMuZ2V0U2VyaWVzVmFsdWVzKCk7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHByZXBhcmVkRGF0YTogQXJyYXk8QXJyYXk8bnVtYmVyPj4gPSBbXTtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWwsIHZhbHVlSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VyaWVzRGF0YSA9IHNlcmllcy5tYXAoXG4gICAgICAgICAgKHNlcmllc05hbWUsIHNlcmllc0luZGV4KSA9PiBzdGF0aXN0aWNzW3Nlcmllc0luZGV4XVt2YWx1ZUluZGV4XVxuICAgICAgICApO1xuICAgICAgICBwcmVwYXJlZERhdGEucHVzaChzZXJpZXNEYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByZXBhcmVkRGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpc3RpY3M7XG4gIH1cbn1cbiIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJNb2RlbCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJpdmF0ZSBfcmVzdWx0QXZlcmFnZTogbnVtYmVyO1xuICBwcml2YXRlIF9yZXN1bHRNaW46IG51bWJlcjtcbiAgcHJpdmF0ZSBfcmVzdWx0TWF4OiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBzdGVwc0NvdW50ID0gNTtcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZVRleHRzQ2FsbGJhY2s6IChcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgbWF4VmFsdWU6IG51bWJlcixcbiAgICBtaW5WYWx1ZTogbnVtYmVyLFxuICAgIHN0ZXBzQ291bnQ6IG51bWJlcixcbiAgICB0ZXh0czogc3RyaW5nW11cbiAgKSA9PiBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogQXJyYXk8c3RyaW5nPjtcbiAgY2hhcnRUeXBlOiBTdHJpbmc7XG5cbiAgcHVibGljIHN0YXRpYyBzaG93QXNQZXJjZW50YWdlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcImNoYW5nZUNoYXJ0VHlwZVwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jaGFydFR5cGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIERvY3VtZW50SGVscGVyLmNyZWF0ZVNlbGVjdG9yKFxuICAgICAgICAgIHRoaXMuY2hhcnRUeXBlcy5tYXAoKGNoYXJ0VHlwZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmFsdWU6IGNoYXJ0VHlwZSxcbiAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYXJ0VHlwZV9cIiArIGNoYXJ0VHlwZSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIChvcHRpb246IGFueSkgPT4gdGhpcy5jaGFydFR5cGUgPT09IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldENoYXJ0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25EYXRhQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Jlc3VsdE1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXN1bHRNYXggPSB1bmRlZmluZWQ7XG4gICAgc3VwZXIub25EYXRhQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcIm51bWJlclwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uQ2hhcnRUeXBlQ2hhbmdlZCgpIHt9XG5cbiAgcHJvdGVjdGVkIHNldENoYXJ0VHlwZShjaGFydFR5cGU6IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2hhcnRUeXBlcy5pbmRleE9mKGNoYXJ0VHlwZSkgIT09IC0xICYmXG4gICAgICB0aGlzLmNoYXJ0VHlwZSAhPT0gY2hhcnRUeXBlXG4gICAgKSB7XG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGNoYXJ0VHlwZTtcbiAgICAgIHRoaXMub25DaGFydFR5cGVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3Jlc3VsdEF2ZXJhZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzdWx0TWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Jlc3VsdE1heCA9IHVuZGVmaW5lZDtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICBnZW5lcmF0ZVRleHQobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgbGV0IHRleHRzOiBhbnkgPSBbXTtcblxuICAgIGlmIChzdGVwc0NvdW50ID09PSA1KSB7XG4gICAgICB0ZXh0cyA9IFtcbiAgICAgICAgXCJ2ZXJ5IGhpZ2ggKFwiICsgbWF4VmFsdWUgKyBcIilcIixcbiAgICAgICAgXCJoaWdoXCIsXG4gICAgICAgIFwibWVkaXVtXCIsXG4gICAgICAgIFwibG93XCIsXG4gICAgICAgIFwidmVyeSBsb3cgKFwiICsgbWluVmFsdWUgKyBcIilcIixcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRzLnB1c2gobWF4VmFsdWUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50IC0gMjsgaSsrKSB7XG4gICAgICAgIHRleHRzLnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgICB0ZXh0cy5wdXNoKG1pblZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoISFOdW1iZXJNb2RlbC5nZW5lcmF0ZVRleHRzQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBOdW1iZXJNb2RlbC5nZW5lcmF0ZVRleHRzQ2FsbGJhY2soXG4gICAgICAgIHRoaXMucXVlc3Rpb24sXG4gICAgICAgIG1heFZhbHVlLFxuICAgICAgICBtaW5WYWx1ZSxcbiAgICAgICAgc3RlcHNDb3VudCxcbiAgICAgICAgdGV4dHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRzO1xuICB9XG5cbiAgZ2VuZXJhdGVWYWx1ZXMobWF4VmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xuICAgICAgdmFsdWVzLnB1c2gobWF4VmFsdWUgLyBzdGVwc0NvdW50KTtcbiAgICB9XG5cbiAgICB2YWx1ZXMucHVzaChtYXhWYWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgZ2VuZXJhdGVDb2xvcnMobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgY29sb3JzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xuICAgICAgY29sb3JzLnB1c2gocGFsZXR0ZVtpXSk7XG4gICAgfVxuXG4gICAgY29sb3JzLnB1c2goXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIpO1xuXG4gICAgcmV0dXJuIGNvbG9ycztcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fcmVzdWx0QXZlcmFnZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9yZXN1bHRNaW4gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fcmVzdWx0TWF4ID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XG4gICAgICB0aGlzLl9yZXN1bHRNaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgdGhpcy5fcmVzdWx0TWF4ID0gLU51bWJlci5NQVhfVkFMVUU7XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3dEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWU6IG51bWJlciA9ICtyb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICAgIGlmIChxdWVzdGlvblZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBxdWVzdGlvblZhbHVlcy5wdXNoKHF1ZXN0aW9uVmFsdWUpO1xuICAgICAgICAgIGlmICh0aGlzLl9yZXN1bHRNaW4gPiBxdWVzdGlvblZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRNaW4gPSBxdWVzdGlvblZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fcmVzdWx0TWF4IDwgcXVlc3Rpb25WYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0TWF4ID0gcXVlc3Rpb25WYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID1cbiAgICAgICAgcXVlc3Rpb25WYWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyBxdWVzdGlvblZhbHVlcy5sZW5ndGg7XG4gICAgICB0aGlzLl9yZXN1bHRBdmVyYWdlID0gTWF0aC5jZWlsKHRoaXMuX3Jlc3VsdEF2ZXJhZ2UgKiAxMDApIC8gMTAwO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMuX3Jlc3VsdEF2ZXJhZ2UsIHRoaXMuX3Jlc3VsdE1pbiwgdGhpcy5fcmVzdWx0TWF4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uQm9vbGVhbk1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgQm9vbGVhbk1vZGVsIH0gZnJvbSBcIi4uL2Jvb2xlYW5cIjtcbmltcG9ydCB7IFBsb3RseUNoYXJ0QWRhcHRlciB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbG90bHlCb29sQ2hhcnRBZGFwdGVyIGV4dGVuZHMgUGxvdGx5Q2hhcnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IobW9kZWw6IEJvb2xlYW5QbG90bHkpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxuICAgIGNoYXJ0Tm9kZTogb2JqZWN0LFxuICAgIHRyYWNlczogQXJyYXk8b2JqZWN0PixcbiAgICBsYXlvdXQ6IG9iamVjdCxcbiAgICBjb25maWc6IG9iamVjdFxuICApIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLm1vZGVsLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGJvb2xDb2xvcnMgPSBbXG4gICAgICBCb29sZWFuUGxvdGx5LnRydWVDb2xvciB8fCBjb2xvcnNbMF0sXG4gICAgICBCb29sZWFuUGxvdGx5LmZhbHNlQ29sb3IgfHwgY29sb3JzWzFdLFxuICAgIF07XG5cbiAgICBpZiAodGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwicGllXCIgfHwgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIikge1xuICAgICAgdHJhY2VzLmZvckVhY2goKHRyYWNlOiBhbnkpID0+IHtcbiAgICAgICAgdHJhY2UubWFya2VyLmNvbG9ycyA9IGJvb2xDb2xvcnM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImJhclwiKSB7XG4gICAgICB0cmFjZXMuZm9yRWFjaCgodHJhY2U6IGFueSkgPT4ge1xuICAgICAgICB0cmFjZS5tYXJrZXIuY29sb3IgPSBib29sQ29sb3JzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuUGxvdGx5IGV4dGVuZHMgQm9vbGVhbk1vZGVsIHtcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlDaGFydEFkYXB0ZXI7XG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJwaWVcIiwgXCJiYXJcIiwgXCJkb3VnaG51dFwiXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBCb29sZWFuUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlciA9IG5ldyBQbG90bHlCb29sQ2hhcnRBZGFwdGVyKHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIuZGVzdHJveSg8SFRNTEVsZW1lbnQ+Y29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImJvb2xlYW5cIiwgQm9vbGVhblBsb3RseSk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yYXRpbmdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hdHJpeFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vYm9vbGVhblwiO1xuIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuLi9tYXRyaXhcIjtcbmltcG9ydCB7IFBsb3RseUNoYXJ0QWRhcHRlciB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhQbG90bHkgZXh0ZW5kcyBNYXRyaXgge1xuICBwcml2YXRlIF9jaGFydEFkYXB0ZXI6IFBsb3RseUNoYXJ0QWRhcHRlcjtcbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImJhclwiLCBcInN0YWNrZWRiYXJcIiwgXCJwaWVcIiwgXCJkb3VnaG51dFwiXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBNYXRyaXhQbG90bHkudHlwZXM7XG4gICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLmNoYXJ0VHlwZXNbMF07XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyID0gbmV3IFBsb3RseUNoYXJ0QWRhcHRlcih0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmRlc3Ryb3koPEhUTUxFbGVtZW50PmNvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGFydE5vZGU6IEhUTUxFbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhcnROb2RlKTtcbiAgICB0aGlzLl9jaGFydEFkYXB0ZXIuY3JlYXRlKGNoYXJ0Tm9kZSk7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibWF0cml4XCIsIE1hdHJpeFBsb3RseSk7XG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgTnVtYmVyTW9kZWwgfSBmcm9tIFwiLi4vbnVtYmVyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgYWxsb3dEb21SZW5kZXJpbmcsIERhdGFIZWxwZXIsIERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG52YXIgUGxvdGx5OiBhbnkgPSBudWxsO1xuaWYgKGFsbG93RG9tUmVuZGVyaW5nKCkpIHtcbiAgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBQbG90bHlHYXVnZUFkYXB0ZXIge1xuICBwcml2YXRlIF9jaGFydDogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IEdhdWdlUGxvdGx5KSB7fVxuXG4gIHB1YmxpYyBnZXQgY2hhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShjaGFydE5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLm1vZGVsLnF1ZXN0aW9uO1xuICAgIGxldCBbbGV2ZWwsIG1pblZhbHVlLCBtYXhWYWx1ZV0gPSB0aGlzLm1vZGVsLmdldERhdGEoKTtcblxuICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwicmF0aW5nXCIpIHtcbiAgICAgIGNvbnN0IHJhdGVWYWx1ZXMgPSBxdWVzdGlvbi52aXNpYmxlUmF0ZVZhbHVlcztcbiAgICAgIG1heFZhbHVlID0gcmF0ZVZhbHVlc1tyYXRlVmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlO1xuICAgICAgbWluVmFsdWUgPSByYXRlVmFsdWVzWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMubW9kZWwuZ2VuZXJhdGVDb2xvcnMoXG4gICAgICBtYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlLFxuICAgICAgR2F1Z2VQbG90bHkuc3RlcHNDb3VudFxuICAgICk7XG5cbiAgICBpZiAoR2F1Z2VQbG90bHkuc2hvd0FzUGVyY2VudGFnZSkge1xuICAgICAgbGV2ZWwgPSBEYXRhSGVscGVyLnRvUGVyY2VudGFnZShsZXZlbCwgbWF4VmFsdWUpO1xuICAgICAgbWluVmFsdWUgPSBEYXRhSGVscGVyLnRvUGVyY2VudGFnZShtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuICAgICAgbWF4VmFsdWUgPSBEYXRhSGVscGVyLnRvUGVyY2VudGFnZShtYXhWYWx1ZSwgbWF4VmFsdWUpO1xuICAgIH1cblxuICAgIHZhciBkYXRhOiBhbnkgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiaW5kaWNhdG9yXCIsXG4gICAgICAgIG1vZGU6IFwiZ2F1Z2UrbnVtYmVyXCIsXG4gICAgICAgIGdhdWdlOiB7XG4gICAgICAgICAgYXhpczogeyByYW5nZTogW21pblZhbHVlLCBtYXhWYWx1ZV0gfSxcbiAgICAgICAgICBzaGFwZTogdGhpcy5tb2RlbC5jaGFydFR5cGUsXG4gICAgICAgICAgYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIGJhcjogeyBjb2xvcjogY29sb3JzWzBdIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBsZXZlbCxcbiAgICAgICAgdGV4dDogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZG9tYWluOiB7IHg6IFswLCAxXSwgeTogWzAsIDFdIH0sXG4gICAgICB9LFxuICAgIF07XG5cbiAgICB2YXIgaGVpZ2h0ID0gNDAwO1xuXG4gICAgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImJ1bGxldFwiKSB7XG4gICAgICBoZWlnaHQgPSAyNTA7XG4gICAgfVxuXG4gICAgdmFyIGxheW91dCA9IHtcbiAgICAgIHdpZHRoOiA2MDAsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5tb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiB0aGlzLm1vZGVsLmJhY2tncm91bmRDb2xvcixcbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlLFxuICAgICAgc3RhdGljUGxvdDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUsXG4gICAgfTtcblxuICAgIHJldHVybiBQbG90bHkubmV3UGxvdChjaGFydE5vZGUsIGRhdGEsIGxheW91dCwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgUGxvdGx5LnB1cmdlKG5vZGUpO1xuICAgIHRoaXMuX2NoYXJ0ID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYXVnZVBsb3RseSBleHRlbmRzIE51bWJlck1vZGVsIHtcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlHYXVnZUFkYXB0ZXI7XG5cbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImdhdWdlXCIsIFwiYnVsbGV0XCJdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRUeXBlcyA9IEdhdWdlUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlciA9IG5ldyBQbG90bHlHYXVnZUFkYXB0ZXIodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5kZXN0cm95KDxIVE1MRWxlbWVudD5jb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY2hhcnROb2RlOiBIVE1MRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm51bWJlclwiLCBHYXVnZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJyYXRpbmdcIiwgR2F1Z2VQbG90bHkpO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9zZWxlY3RCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgYWxsb3dEb21SZW5kZXJpbmcsIERhdGFIZWxwZXIsIERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG52YXIgUGxvdGx5OiBhbnkgPSBudWxsO1xuaWYgKGFsbG93RG9tUmVuZGVyaW5nKCkpIHtcbiAgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBQbG90bHlDaGFydEFkYXB0ZXIge1xuICBwcml2YXRlIF9jaGFydDogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RlbDogU2VsZWN0QmFzZSkge31cblxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxuICAgIGNoYXJ0Tm9kZTogb2JqZWN0LFxuICAgIHRyYWNlczogQXJyYXk8b2JqZWN0PixcbiAgICBsYXlvdXQ6IG9iamVjdCxcbiAgICBjb25maWc6IG9iamVjdFxuICApIHt9XG5cbiAgcHVibGljIGdldCBjaGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgZGF0YXNldHMgPSB0aGlzLm1vZGVsLmdldERhdGEoKTtcbiAgICBsZXQgc2VyaWVzVmFsdWVzID0gdGhpcy5tb2RlbC5nZXRTZXJpZXNWYWx1ZXMoKTtcbiAgICBsZXQgc2VyaWVzTGFiZWxzID0gdGhpcy5tb2RlbC5nZXRTZXJpZXNMYWJlbHMoKTtcbiAgICBsZXQgbGFiZWxzID0gdGhpcy5tb2RlbC5nZXRMYWJlbHMoKTtcbiAgICBsZXQgY29sb3JzID0gdGhpcy5tb2RlbC5nZXRDb2xvcnMoKTtcbiAgICBjb25zdCB0cmFjZXM6IGFueSA9IFtdO1xuICAgIGNvbnN0IGhhc1NlcmllcyA9IGRhdGFzZXRzLmxlbmd0aCA+IDEgJiYgc2VyaWVzVmFsdWVzLmxlbmd0aCA+IDE7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm1vZGVsLm9yZGVyQnlBbnN3ZXJlcyA9PSBcImFzY1wiIHx8XG4gICAgICB0aGlzLm1vZGVsLm9yZGVyQnlBbnN3ZXJlcyA9PSBcImRlc2NcIlxuICAgICkge1xuICAgICAgbGV0IGRpY3QgPSBEYXRhSGVscGVyLnNvcnREaWN0aW9uYXJ5KFxuICAgICAgICBEYXRhSGVscGVyLnppcEFycmF5cyhsYWJlbHMsIGNvbG9ycyksXG4gICAgICAgIGRhdGFzZXRzWzBdLFxuICAgICAgICB0aGlzLm1vZGVsLm9yZGVyQnlBbnN3ZXJlcyA9PSBcImRlc2NcIlxuICAgICAgKTtcbiAgICAgIGxldCBsYWJlbHNBbmRDb2xvcnMgPSBEYXRhSGVscGVyLnVuemlwQXJyYXlzKGRpY3Qua2V5cyk7XG4gICAgICBsYWJlbHMgPSBsYWJlbHNBbmRDb2xvcnMuZmlyc3Q7XG4gICAgICBjb2xvcnMgPSBsYWJlbHNBbmRDb2xvcnMuc2Vjb25kO1xuICAgICAgZGF0YXNldHNbMF0gPSBkaWN0LnZhbHVlcztcbiAgICB9XG4gICAgY29uc3QgdHJhY2VDb25maWc6IGFueSA9IHtcbiAgICAgIHR5cGU6IHRoaXMubW9kZWwuY2hhcnRUeXBlLFxuICAgICAgeTogKGhhc1NlcmllcyA/IHNlcmllc0xhYmVscyA6IGxhYmVscykubWFwKChsKSA9PiB7XG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgcmV0dXJuIGwuc3Vic3RyaW5nKDAsIDI3KSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KSxcbiAgICAgIHRleHQ6IGhhc1NlcmllcyA/IHNlcmllc0xhYmVscyA6IGxhYmVscyxcbiAgICAgIGhvdmVyaW5mbzogXCJ4K3lcIixcbiAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgIG1vZGU6IFwibWFya2Vyc1wiLFxuICAgICAgd2lkdGg6IDAuNSxcbiAgICAgIG1hcmtlcjogPGFueT57fSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcInBpZVwiIHx8IHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCIpIHtcbiAgICAgIHRyYWNlQ29uZmlnLmhvdmVyaW5mbyA9IFwidGV4dCt2YWx1ZStwZXJjZW50XCI7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuY29sb3JzID0gY29sb3JzO1xuICAgICAgdHJhY2VDb25maWcudGV4dHBvc2l0aW9uID0gXCJpbnNpZGVcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImJhclwiKSB7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuY29sb3IgPSBjb2xvcnM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCIpIHtcbiAgICAgIHRyYWNlQ29uZmlnLnR5cGUgPSBcInBpZVwiO1xuICAgICAgdHJhY2VDb25maWcuaG9sZSA9IDAuNDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1Nlcmllcykge1xuICAgICAgdHJhY2VDb25maWcubWFya2VyLnN5bWJvbCA9IFwiY2lyY2xlXCI7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuc2l6ZSA9IDE2O1xuICAgIH1cblxuICAgIGRhdGFzZXRzLmZvckVhY2goKGRhdGFzZXQ6IEFycmF5PG51bWJlcj4pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwicGllXCIgfHxcbiAgICAgICAgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIlxuICAgICAgKSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRyYWNlQ29uZmlnLCB7XG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGFzZXQsXG4gICAgICAgICAgICBsYWJlbHM6IGhhc1NlcmllcyA/IHNlcmllc0xhYmVscyA6IGxhYmVscyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2VzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgdHJhY2VDb25maWcsIHsgeDogZGF0YXNldCB9KSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWlnaHQgPVxuICAgICAgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwicGllXCIgfHwgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIlxuICAgICAgICA/IGxhYmVscy5sZW5ndGggPCAxMFxuICAgICAgICAgID8gbGFiZWxzLmxlbmd0aCAqIDUwICsgMTAwXG4gICAgICAgICAgOiA1NTBcbiAgICAgICAgOiAobGFiZWxzLmxlbmd0aCArIChsYWJlbHMubGVuZ3RoICsgMSkgKiAwLjUpICogMjA7XG5cbiAgICBjb25zdCBsYXlvdXQ6IGFueSA9IHtcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgZmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIHNpemU6IDE0LFxuICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgIGNvbG9yOiBcIiM0MDQwNDBcIixcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0OiAwLFxuICAgICAgICBiOiAwLFxuICAgICAgICByOiAxMCxcbiAgICAgIH0sXG4gICAgICBjb2xvcndheTogY29sb3JzLFxuICAgICAgaG92ZXJtb2RlOiBcImNsb3Nlc3RcIixcbiAgICAgIHlheGlzOiB7XG4gICAgICAgIGF1dG9tYXJnaW46IHRydWUsXG4gICAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgdGlja2xlbjogNSxcbiAgICAgICAgdGlja2NvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgcmFuZ2Vtb2RlOiBcIm5vbm5lZ2F0aXZlXCIsXG4gICAgICAgIGF1dG9tYXJnaW46IHRydWUsXG4gICAgICB9LFxuICAgICAgcGxvdF9iZ2NvbG9yOiB0aGlzLm1vZGVsLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHBhcGVyX2JnY29sb3I6IHRoaXMubW9kZWwuYmFja2dyb3VuZENvbG9yLFxuICAgICAgc2hvd2xlZ2VuZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGxldCBjb25maWc6IGFueSA9IHtcbiAgICAgIGRpc3BsYXlsb2dvOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxuICAgIH07XG4gICAgaWYgKFNlbGVjdEJhc2VQbG90bHkuZGlzcGxheU1vZGVCYXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLmRpc3BsYXlNb2RlQmFyID0gU2VsZWN0QmFzZVBsb3RseS5kaXNwbGF5TW9kZUJhcjtcbiAgICB9XG5cbiAgICBpZiAoaGFzU2VyaWVzKSB7XG4gICAgICBsYXlvdXQuc2hvd2xlZ2VuZCA9IHRydWU7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcInBpZVwiIHx8XG4gICAgICAgIHRoaXMubW9kZWwuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCJcbiAgICAgICkge1xuICAgICAgICBsYXlvdXQuZ3JpZCA9IHsgcm93czogMSwgY29sdW1uczogdHJhY2VzLmxlbmd0aCB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJzdGFja2VkYmFyXCIpIHtcbiAgICAgICAgbGF5b3V0LmhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGF5b3V0LmJhcm1vZGUgPSBcInN0YWNrXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgbGFiZWxzLmZvckVhY2goKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5tb2RlbC5jaGFydFR5cGUgPT09IFwicGllXCIgfHxcbiAgICAgICAgICB0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJkb3VnaG51dFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHRyYWNlc1tpbmRleF0uZG9tYWluID0geyBjb2x1bW46IGluZGV4IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJhY2VzW2luZGV4XS5ob3ZlcmluZm8gPSBcIngrbmFtZVwiO1xuICAgICAgICAgIHRyYWNlc1tpbmRleF0ubWFya2VyLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmNoYXJ0VHlwZSA9PT0gXCJzdGFja2VkYmFyXCIpIHtcbiAgICAgICAgICAgIHRyYWNlc1tpbmRleF0udHlwZSA9IFwiYmFyXCI7XG4gICAgICAgICAgICB0cmFjZXNbaW5kZXhdLm5hbWUgPSBsYWJlbDtcbiAgICAgICAgICAgIHRyYWNlc1tpbmRleF0ud2lkdGggPSAwLjUgLyB0cmFjZXMubGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFjZXNbaW5kZXhdLm5hbWUgPSBsYWJlbDtcbiAgICAgICAgICAgIHRyYWNlc1tpbmRleF0ud2lkdGggPSAwLjUgLyB0cmFjZXMubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXRjaENvbmZpZ1BhcmFtZXRlcnMoY2hhcnROb2RlLCB0cmFjZXMsIGxheW91dCwgY29uZmlnKTtcblxuICAgIGNvbnN0IHBsb3QgPSBQbG90bHkubmV3UGxvdChjaGFydE5vZGUsIHRyYWNlcywgbGF5b3V0LCBjb25maWcpO1xuXG4gICAgKDxhbnk+Y2hhcnROb2RlKVtcIm9uXCJdKFwicGxvdGx5X2NsaWNrXCIsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmIChkYXRhLnBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gaGFzU2VyaWVzXG4gICAgICAgICAgPyBkYXRhLnBvaW50c1swXS5kYXRhLm5hbWVcbiAgICAgICAgICA6IGRhdGEucG9pbnRzWzBdLnRleHQ7XG4gICAgICAgIGNvbnN0IGl0ZW06IEl0ZW1WYWx1ZSA9IHRoaXMubW9kZWwuZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0KTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXRTZWxlY3Rpb24oaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0RHJhZ0xheWVyID0gKCkgPT5cbiAgICAgIDxIVE1MRWxlbWVudD5jaGFydE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5zZXdkcmFnXCIpWzBdO1xuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiKTtcbiAgICB9KTtcbiAgICAoPGFueT5jaGFydE5vZGUpW1wib25cIl0oXCJwbG90bHlfdW5ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwiXCIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY2hhcnQgPSBwbG90O1xuICAgIHJldHVybiBwbG90O1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICBQbG90bHkucHVyZ2Uobm9kZSk7XG4gICAgdGhpcy5fY2hhcnQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhc2VQbG90bHkgZXh0ZW5kcyBTZWxlY3RCYXNlIHtcbiAgcHJpdmF0ZSBfY2hhcnRBZGFwdGVyOiBQbG90bHlDaGFydEFkYXB0ZXI7XG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJiYXJcIiwgXCJwaWVcIiwgXCJkb3VnaG51dFwiLCBcInNjYXR0ZXJcIl07XG4gIHB1YmxpYyBzdGF0aWMgZGlzcGxheU1vZGVCYXI6IGFueSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBTZWxlY3RCYXNlUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlciA9IG5ldyBQbG90bHlDaGFydEFkYXB0ZXIodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX2NoYXJ0QWRhcHRlci5kZXN0cm95KDxIVE1MRWxlbWVudD5jb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY2hhcnROb2RlOiBIVE1MRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fY2hhcnRBZGFwdGVyLmNyZWF0ZShjaGFydE5vZGUpO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnlbXSB7XG4gICAgY29uc3Qgc3RhdGlzdGljcyA9IHN1cGVyLmdldERhdGEoKTtcbiAgICBjb25zdCBzZXJpZXMgPSB0aGlzLmdldFNlcmllc1ZhbHVlcygpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgaWYgKHNlcmllcy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBwcmVwYXJlZERhdGE6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG4gICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsLCB2YWx1ZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlcmllc0RhdGEgPSBzZXJpZXMubWFwKFxuICAgICAgICAgIChzZXJpZXNWYWx1ZSwgc2VyaWVzSW5kZXgpID0+IHN0YXRpc3RpY3Nbc2VyaWVzSW5kZXhdW3ZhbHVlSW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIHByZXBhcmVkRGF0YS5wdXNoKHNlcmllc0RhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJlcGFyZWREYXRhO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGlzdGljcztcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjaGVja2JveFwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInJhZGlvZ3JvdXBcIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJkcm9wZG93blwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImltYWdlcGlja2VyXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uU2VsZWN0QmFzZSwgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyRmFjdG9yeSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhUHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhc2UgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBJdGVtVmFsdWUgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgY2hvaWNlc09yZGVyOiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIG9yZGVyQnlBbnN3ZXJlczogc3RyaW5nID0gXCJkZWZhdWx0XCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcihxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5yZWdpc3RlclRvb2xiYXJJdGVtKFwiY2hhbmdlQ2hhcnRUeXBlXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXG4gICAgICAgICAgdGhpcy5jaGFydFR5cGVzLm1hcCgoY2hhcnRUeXBlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogY2hhcnRUeXBlLFxuICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiY2hhcnRUeXBlX1wiICsgY2hhcnRUeXBlKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgKG9wdGlvbjogYW55KSA9PiB0aGlzLmNoYXJ0VHlwZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgICAgIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2hhcnRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJjaGFuZ2VMYWJlbHNPcmRlclwiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2V0U2VyaWVzVmFsdWVzKCkubGVuZ3RoID09PSAwICYmXG4gICAgICAgIHRoaXMuY2hhcnRUeXBlcy5pbmRleE9mKFwiYmFyXCIpICE9PSAtMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2hvaWNlc09yZGVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVmYXVsdE9yZGVyXCIpLCB2YWx1ZTogXCJkZWZhdWx0XCIgfSxcbiAgICAgICAgICAgIHsgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpLCB2YWx1ZTogXCJhc2NcIiB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpLCB2YWx1ZTogXCJkZXNjXCIgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIChvcHRpb24pID0+IGZhbHNlLFxuICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldExhYmVsc09yZGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSh0aGlzLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy51cGRhdGVPcmRlclNlbGVjdG9yKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jaG9pY2VzT3JkZXI7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIGNoYXJ0VHlwZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJzZWxlY3RCYXNlXCI7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU9yZGVyU2VsZWN0b3IoKSB7XG4gICAgaWYgKCEhdGhpcy5jaG9pY2VzT3JkZXIpIHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PSBcImJhclwiKSB7XG4gICAgICAgIHRoaXMuY2hvaWNlc09yZGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaG9pY2VzT3JkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmNob2ljZXNPcmRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKVswXS52YWx1ZSA9IFwiZGVmYXVsdFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvbkNoYXJ0VHlwZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5zZXRMYWJlbHNPcmRlcihcImRlZmF1bHRcIik7XG4gICAgdGhpcy51cGRhdGVPcmRlclNlbGVjdG9yKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Q2hhcnRUeXBlKGNoYXJ0VHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jaGFydFR5cGVzLmluZGV4T2YoY2hhcnRUeXBlKSAhPT0gLTEgJiZcbiAgICAgIHRoaXMuY2hhcnRUeXBlICE9PSBjaGFydFR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gY2hhcnRUeXBlO1xuICAgICAgdGhpcy5vbkNoYXJ0VHlwZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5jaG9pY2VzLmZpbHRlcihcbiAgICAgIChjaG9pY2U6IEl0ZW1WYWx1ZSkgPT4gY2hvaWNlLnRleHQgPT09IGl0ZW1UZXh0XG4gICAgKVswXTtcbiAgfVxuXG4gIHNldFNlbGVjdGlvbihpdGVtOiBJdGVtVmFsdWUpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIGlmICh0aGlzLm9uRGF0YUl0ZW1TZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMub25EYXRhSXRlbVNlbGVjdGVkKFxuICAgICAgICAgIGl0ZW0gIT09IHVuZGVmaW5lZCA/IGl0ZW0udmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgaXRlbSAhPT0gdW5kZWZpbmVkID8gaXRlbS50ZXh0IDogXCJcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIHNldExhYmVsc09yZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9yZGVyQnlBbnN3ZXJlcyA9IHZhbHVlO1xuICAgIHRoaXMuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gIH1cblxuICBvbkRhdGFJdGVtU2VsZWN0ZWQ6IChzZWxlY3RlZFZhbHVlOiBhbnksIHNlbGVjdGVkVGV4dDogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIHZhbHVlc1NvdXJjZSgpOiBBcnJheTxJdGVtVmFsdWU+IHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IDxRdWVzdGlvblNlbGVjdEJhc2U+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcXVlc3Rpb25bXCJhY3RpdmVDaG9pY2VzXCJdO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IHZhbHVlczogQXJyYXk8YW55PiA9IHRoaXMudmFsdWVzU291cmNlKCkubWFwKFxuICAgICAgKGNob2ljZSkgPT4gY2hvaWNlLnZhbHVlXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSB2YWx1ZXMudW5zaGlmdChcIm90aGVyXCIpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGdldExhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnVzZVZhbHVlc0FzTGFiZWxzKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICB9XG4gICAgY29uc3QgbGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoKGNob2ljZSkgPT5cbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZSh0aGlzLnZhbHVlc1NvdXJjZSgpLCBjaG9pY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSBsYWJlbHMudW5zaGlmdChcIk90aGVyXCIpO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5pbXBvcnQgXCIuL3RleHQuc2Nzc1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dFRhYmxlQWRhcHRlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RlbDogVGV4dCkge31cclxuXHJcbiAgcHVibGljIGNyZWF0ZShjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IGNvbHVtbnNDb3VudCwgZGF0YSB9ID0gdGhpcy5tb2RlbC5nZXREYXRhKCk7XHJcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gPEhUTUxFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiXCIsIHtcclxuICAgICAgaW5uZXJIVE1MOiBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYmxlTm9kZSA9IDxIVE1MVGFibGVFbGVtZW50PihcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIFwic2EtdGV4dC10YWJsZVwiKVxyXG4gICAgKTtcclxuXHJcbiAgICB0YWJsZU5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5tb2RlbC5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKHJvd0RhdGEpID0+IHtcclxuICAgICAgdmFyIHJvdyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zQ291bnQ7IGkrKykge1xyXG4gICAgICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNhLXRleHQtdGFibGVfX2NlbGxcIiwge1xyXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IHJvd0RhdGFbaV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgfVxyXG4gICAgICB0YWJsZU5vZGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVfX2NvbnRhaW5lclwiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveShub2RlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbm9kZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHQgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XHJcbiAgcHJpdmF0ZSBfdGV4dFRhYmxlQWRhcHRlcjogVGV4dFRhYmxlQWRhcHRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5fdGV4dFRhYmxlQWRhcHRlciA9IG5ldyBUZXh0VGFibGVBZGFwdGVyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIFwidGV4dFwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgIGxldCByZXN1bHQ6IEFycmF5PEFycmF5PHN0cmluZz4+ID0gW107XHJcbiAgICBsZXQgY29sdW1uc0NvdW50ID0gMDtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbdGhpcy5xdWVzdGlvbi5uYW1lXTtcclxuICAgICAgY29uc3QgZGF0YVN0cmluZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgaWYgKCEhcm93VmFsdWUpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkpIHtcclxuICAgICAgICAgIGRhdGFTdHJpbmdzLmNvbmNhdChyb3dWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygcm93VmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMocm93VmFsdWUpLmZvckVhY2goKGtleSkgPT5cclxuICAgICAgICAgICAgICBkYXRhU3RyaW5ncy5wdXNoKHJvd1ZhbHVlW2tleV0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhU3RyaW5ncy5wdXNoKHJvd1ZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZGF0YVN0cmluZ3MpO1xyXG4gICAgICAgIGlmIChkYXRhU3RyaW5ncy5sZW5ndGggPiBjb2x1bW5zQ291bnQpIHtcclxuICAgICAgICAgIGNvbHVtbnNDb3VudCA9IGRhdGFTdHJpbmdzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvbHVtbnNDb3VudCwgZGF0YTogcmVzdWx0IH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fdGV4dFRhYmxlQWRhcHRlci5kZXN0cm95KGNvbnRhaW5lcik7XHJcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fdGV4dFRhYmxlQWRhcHRlci5jcmVhdGUoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl90ZXh0VGFibGVBZGFwdGVyLmRlc3Ryb3kodGhpcy5jb250ZW50Q29udGFpbmVyKTtcclxuICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuXHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInRleHRcIiwgVGV4dCk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNvbW1lbnRcIiwgVGV4dCk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm11bHRpcGxldGV4dFwiLCBUZXh0KTtcclxuIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgOiBkZXNjLFxuICAgIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZVxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbiIsImV4cG9ydCBjbGFzcyBEb2N1bWVudEhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTZWxlY3RvcihcclxuICAgIG9wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+LFxyXG4gICAgaXNTZWxlY3RlZDogKG9wdGlvbjogeyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkgPT4gYm9vbGVhbixcclxuICAgIGhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWRcclxuICApIHtcclxuICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VsZWN0V3JhcHBlci5jbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uX19zZWxlY3Qtd3JhcHBlclwiO1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uX19zZWxlY3RcIjtcclxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIGxldCBvcHRpb25FbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XHJcbiAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcclxuICAgICAgICB0ZXh0OiBvcHRpb24udGV4dCxcclxuICAgICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZChvcHRpb24pLFxyXG4gICAgICB9KTtcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxlY3Qub25jaGFuZ2UgPSBoYW5kbGVyO1xyXG4gICAgc2VsZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgcmV0dXJuIHNlbGVjdFdyYXBwZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJ1dHRvbihcclxuICAgIGhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWQsXHJcbiAgICB0ZXh0ID0gXCJcIixcclxuICAgIGNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uXCJcclxuICApIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIGNsYXNzTmFtZSwge1xyXG4gICAgICBpbm5lclRleHQ6IHRleHQsXHJcbiAgICAgIG9uY2xpY2s6IGhhbmRsZXIsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICB0YWdOYW1lOiBzdHJpbmcsXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyA9IFwiXCIsXHJcbiAgICBhdHRycz86IGFueVxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBpZiAoISFhdHRycykge1xyXG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgKDxhbnk+ZWwpW2tleV0gPSBhdHRyc1trZXldO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnRWxlbWVudChwYXRoOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2Z0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJzdmdcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJ1c2VcIlxyXG4gICAgKTtcclxuICAgIHVzZUVsZW0uc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgXCIjc2Etc3ZnLVwiICsgcGF0aFxyXG4gICAgKTtcclxuICAgIHN2Z0VsZW0uYXBwZW5kQ2hpbGQodXNlRWxlbSk7XHJcbiAgICByZXR1cm4gc3ZnRWxlbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnQnV0dG9uKHBhdGg6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IDxIVE1MQnV0dG9uRWxlbWVudD4oXHJcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiKVxyXG4gICAgKTtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHBhdGgpKTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlucHV0KFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgICBkZWZhdWx0VmFsdWUgPSBcIlwiXHJcbiAgKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSA8SFRNTElucHV0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImlucHV0XCIsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBydW5uaW5nSW5Ccm93c2VyOiB0eXBlb2Ygd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIixcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93RG9tUmVuZGVyaW5nKCkge1xyXG4gIHJldHVybiBvcHRpb25zLnJ1bm5pbmdJbkJyb3dzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHppcEFycmF5cyhmaXJzdDogYW55W10sIHNlY29uZDogYW55W10pOiBhbnlbXVtdIHtcclxuICAgIGxldCB6aXBBcnJheTogYW55W10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oZmlyc3QubGVuZ3RoLCBzZWNvbmQubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgIHppcEFycmF5W2ldID0gW2ZpcnN0W2ldLCBzZWNvbmRbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHppcEFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnppcEFycmF5cyhcclxuICAgIHppcEFycmF5OiBhbnlbXVtdXHJcbiAgKTogeyBmaXJzdDogYW55W107IHNlY29uZDogYW55W10gfSB7XHJcbiAgICBsZXQgdHdvQXJyYXlzOiBhbnkgPSB7IGZpcnN0OiBbXSwgc2Vjb25kOiBbXSB9O1xyXG4gICAgemlwQXJyYXkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgdHdvQXJyYXlzLmZpcnN0W2ldID0gdmFsdWVbMF07XHJcbiAgICAgIHR3b0FycmF5cy5zZWNvbmRbaV0gPSB2YWx1ZVsxXTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHR3b0FycmF5cztcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBzb3J0RGljdGlvbmFyeShcclxuICAgIGtleXM6IGFueVtdLFxyXG4gICAgdmFsdWVzOiBhbnlbXSxcclxuICAgIGRlc2M6IGJvb2xlYW5cclxuICApOiB7IGtleXM6IGFueVtdOyB2YWx1ZXM6IGFueVtdIH0ge1xyXG4gICAgbGV0IGRpY3Rpb25hcnkgPSB0aGlzLnppcEFycmF5cyhrZXlzLCB2YWx1ZXMpO1xyXG4gICAgbGV0IGNvbXBhcmF0b3IgPSAoYTogYW55W10sIGI6IGFueVtdLCBhc2M6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhWzFdIDwgYlsxXSA/IDEgOiBhWzFdID09IGJbMV0gPyAwIDogLTE7XHJcbiAgICAgIHJldHVybiBhc2MgPyByZXN1bHQgOiByZXN1bHQgKiAtMTtcclxuICAgIH07XHJcbiAgICBkaWN0aW9uYXJ5LnNvcnQoKGE6IGFueVtdLCBiOiBhbnlbXSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGVzYyA/IGNvbXBhcmF0b3IoYSwgYiwgZmFsc2UpIDogY29tcGFyYXRvcihhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGtleXNBbmRWYWx1ZXMgPSB0aGlzLnVuemlwQXJyYXlzKGRpY3Rpb25hcnkpO1xyXG4gICAgcmV0dXJuIHsga2V5czoga2V5c0FuZFZhbHVlcy5maXJzdCwgdmFsdWVzOiBrZXlzQW5kVmFsdWVzLnNlY29uZCB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAvIG1heFZhbHVlKSAqIDEwMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcblxuZGVjbGFyZSB0eXBlIFZpc3VhbGl6ZXJDb25zdHJ1Y3RvciA9IG5ldyAoXG4gIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgb3B0aW9ucz86IE9iamVjdFxuKSA9PiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uTWFuYWdlciB7XG4gIHN0YXRpYyBhbHRlcm5hdGl2ZXNWaXN1YWxpemVyOiBhbnkgPSB1bmRlZmluZWQ7XG4gIHN0YXRpYyB2aXp1YWxpemVyczogeyBbaW5kZXg6IHN0cmluZ106IEFycmF5PFZpc3VhbGl6ZXJDb25zdHJ1Y3Rvcj4gfSA9IHt9O1xuICAvKipcbiAgICogUmVnaXN0ZXIgdmlzdWFsaXplciAoY29uc3RydWN0b3IpIGZvciBxdWVzdGlvbiB0eXBlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWdpc3RlclZpc3VhbGl6ZXIoXG4gICAgdHlwZU5hbWU6IHN0cmluZyxcbiAgICBjb25zdHJ1Y3RvcjogVmlzdWFsaXplckNvbnN0cnVjdG9yXG4gICkge1xuICAgIGxldCB2aXp1YWxpemVycyA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLnZpenVhbGl6ZXJzW3R5cGVOYW1lXTtcbiAgICBpZiAoIXZpenVhbGl6ZXJzKSB7XG4gICAgICB2aXp1YWxpemVycyA9IFtdO1xuICAgICAgVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdID0gdml6dWFsaXplcnM7XG4gICAgfVxuICAgIHZpenVhbGl6ZXJzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdmlzdWFsaXplcnMgKGNvbnN0cnVjdG9ycykgZm9yIHF1ZXN0aW9uIHR5cGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldFZpc3VhbGl6ZXJzQnlUeXBlKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgdml6dWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV07XG4gICAgaWYgKCF2aXp1YWxpemVycykge1xuICAgICAgcmV0dXJuIFtWaXN1YWxpemVyQmFzZV07XG4gICAgfVxuICAgIHJldHVybiB2aXp1YWxpemVycztcbiAgfVxuICAvKipcbiAgICogR2V0IHZpc3VhbGl6ZXJzIChjb25zdHJ1Y3RvcnMpIGZvciBxdWVzdGlvbiB0eXBlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRBbHRlcm5hdGl2ZXNWaXN1YWxpemVyKCkge1xuICAgIHJldHVybiBWaXN1YWxpemF0aW9uTWFuYWdlci5hbHRlcm5hdGl2ZXNWaXN1YWxpemVyIHx8IFZpc3VhbGl6ZXJCYXNlO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlciB2aXN1YWxpemVyIChjb25zdHJ1Y3RvcikgZm9yIHF1ZXN0aW9uIHR5cGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWx0ZXJuYXRpdmVzVmlzdWFsaXplcihjb25zdHJ1Y3RvcjogYW55KSB7XG4gICAgVmlzdWFsaXphdGlvbk1hbmFnZXIuYWx0ZXJuYXRpdmVzVmlzdWFsaXplciA9IGNvbnN0cnVjdG9yO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwsXG4gIE1hdHJpeERyb3Bkb3duQ29sdW1uLFxuICBJdGVtVmFsdWUsXG59IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhUHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYXRyaXhEcm9wZG93biBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJvdGVjdGVkIF9wYW5lbFZpc3VhbGl6ZXI6IFZpc3VhbGl6YXRpb25QYW5lbCA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgb3B0aW9ucy5kYXRhUHJvdmlkZXIgPSB1bmRlZmluZWQ7XG4gICAgb3B0aW9ucy5hbGxvd0R5bmFtaWNMYXlvdXQgPSBmYWxzZTtcbiAgICBvcHRpb25zLnNlcmllc1ZhbHVlcyA9IHF1ZXN0aW9uLnJvd3MubWFwKChyb3c6IEl0ZW1WYWx1ZSkgPT4gcm93LnZhbHVlKTtcbiAgICBvcHRpb25zLnNlcmllc0xhYmVscyA9IHF1ZXN0aW9uLnJvd3MubWFwKChyb3c6IEl0ZW1WYWx1ZSkgPT4gcm93LnRleHQpO1xuXG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyID0gbmV3IFZpc3VhbGl6YXRpb25QYW5lbChcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCksXG4gICAgICBbXSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIHRoaXMudXBkYXRlRGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJtYXRyaXhEcm9wZG93blwiO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgc3VwZXIudXBkYXRlRGF0YShkYXRhKTtcbiAgICBsZXQgcGFuZWxEYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICBsZXQgcmF3RGF0YUl0ZW0gPSBkYXRhSXRlbVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgaWYgKCEhcmF3RGF0YUl0ZW0pIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmF3RGF0YUl0ZW0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIHZhciBuZXN0ZWREYXRhSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJhd0RhdGFJdGVtW2tleV0pO1xuICAgICAgICAgIG5lc3RlZERhdGFJdGVtW0RhdGFQcm92aWRlci5zZXJpZXNNYXJrZXJLZXldID0ga2V5O1xuICAgICAgICAgIHBhbmVsRGF0YS5wdXNoKG5lc3RlZERhdGFJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLnVwZGF0ZURhdGEocGFuZWxEYXRhKTtcbiAgfVxuXG4gIGdldFF1ZXN0aW9ucygpIHtcbiAgICBjb25zdCBtYXRyaXhkcm9wZG93bjogUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBtYXRyaXhkcm9wZG93bi5jb2x1bW5zLm1hcChcbiAgICAgIChjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKSA9PiBjb2x1bW4udGVtcGxhdGVRdWVzdGlvblxuICAgICk7XG4gIH1cblxuICBkZXN0cm95Q29udGVudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLmNsZWFyKCk7XG4gICAgc3VwZXIuZGVzdHJveUNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3BhbmVsVmlzdWFsaXplci5yZW5kZXIoY29udGFpbmVyKTtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXG4gIFwibWF0cml4ZHJvcGRvd25cIixcbiAgVmlzdWFsaXphdGlvbk1hdHJpeERyb3Bkb3duXG4pO1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcIm1hdHJpeER5bmFtaWNcIjtcbiAgfVxuXG4gIGdldFF1ZXN0aW9ucygpIHtcbiAgICBjb25zdCBtYXRyaXhkeW5hbWljOiBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgY29uc3QgdmlzaWJsZVJvd3MgPSBtYXRyaXhkeW5hbWljLnZpc2libGVSb3dzO1xuXG4gICAgaWYgKHZpc2libGVSb3dzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIHZpc2libGVSb3dzWzBdLmNlbGxzLm1hcChjID0+IGMucXVlc3Rpb24pO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJtYXRyaXhkeW5hbWljXCIsXG4gIFZpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljXG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgRXZlbnQsIFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlIH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQsIEVsZW1lbnRWaXNpYmlsaXR5LCBJU3RhdGUgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IEZpbHRlckluZm8gfSBmcm9tIFwiLi9maWx0ZXJJbmZvXCI7XG5pbXBvcnQgeyBMYXlvdXRFbmdpbmUsIE11dXJpTGF5b3V0RW5naW5lIH0gZnJvbSBcIi4vbGF5b3V0RW5naW5lXCI7XG5cbmltcG9ydCBcIi4vdmlzdWFsaXphdGlvblBhbmVsLnNjc3NcIjtcblxuY29uc3QgcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvblwiO1xuY29uc3QgcXVlc3Rpb25MYXlvdXRlZEVsZW1lbnRDbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uLWxheW91dGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZpc3VhbGl6ZXJQYW5lbFJlbmRlcmVkRWxlbWVudFxuICBleHRlbmRzIElWaXN1YWxpemVyUGFuZWxFbGVtZW50IHtcbiAgcmVuZGVyZWRFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG59XG5cbi8qKlxuICogVmlzdWFsaXphdGlvblBhbmVsIGlzIHJlc3BvbnNpYmxlIGZvciBkaXNwbGF5aW5nIGFuIGFycmF5IG9mIHN1cnZleSBxdWVzdGlvbnNcbiAqXG4gKiBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJzOlxuICogcXVlc3Rpb25zIC0gYW4gYXJyYXkgb2Ygc3VydmV5IHF1ZXN0aW9ucyB0byB2aXN1YWxpemVcbiAqIGRhdGEgLSBhbiBhcnJheSBvZiBhbnN3ZXJzIGluIGZvcm1hdCBvZiBzdXJ2ZXkgcmVzdWx0XG4gKlxuICogb3B0aW9uczpcbiAqIGFsbG93RHluYW1pY0xheW91dCAtIHNldCBpdCB0byBmYWxzZSB0byBkaXNhYmxlIGl0ZW1zIGRyYWcvZHJvcCByZW9yZGVyaW5nIGFuZCBkeW5hbWljIGxheW91dGluZ1xuICogYWxsb3dIaWRlUXVlc3Rpb25zIC0gc2V0IGl0IHRvIGZhbHNlIHRvIGRlbnkgdXNlciB0byBoaWRlL3Nob3cgaW5kaXZpZHVhbCBxdWVzdGlvbnNcbiAqIHNlcmllc1ZhbHVlcyAtIGFuIGFycmF5IG9mIHNlcmllcyB2YWx1ZXMgaW4gZGF0YSB0byBncm91cCBkYXRhIGJ5IHNlcmllc1xuICogc2VyaWVzTGFiZWxzIC0gbGFiZWxzIGZvciBzZXJpZXMgdG8gZGlzcGxheSwgaWYgbm90IHBhc3NlZCB0aGUgc2VyaWVzVmFsdWVzIGFyZSB1c2VkIGFzIGxhYmVsc1xuICogc3VydmV5IC0gcGFzcyBzdXJ2ZXkgaW5zdGFuY2UgdG8gdXNlIGxvY2Fsc2VzIGZyb20gdGhlIHN1cnZleSBKU09OXG4gKiBkYXRhUHJvdmlkZXIgLSBkYXRhUHJvdmlkZXIgZm9yIHRoaXMgdmlzdWFsaXplclxuICpcbiAqIGVsZW1lbnRzIC0gbGlzdCBvZiB2aXN1YWwgZWxlbWVudCBkZXNjcmlwdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25QYW5lbCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcXVlc3Rpb25zOiBBcnJheTxhbnk+LFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge30sXG4gICAgcHJpdmF0ZSBfZWxlbWVudHM6IEFycmF5PElWaXN1YWxpemVyUGFuZWxSZW5kZXJlZEVsZW1lbnQ+ID0gdW5kZWZpbmVkLFxuICAgIHByaXZhdGUgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgc3VwZXIobnVsbCwgZGF0YSwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLl9sYXlvdXRFbmdpbmUgPVxuICAgICAgb3B0aW9ucy5sYXlvdXRFbmdpbmUgfHxcbiAgICAgIG5ldyBNdXVyaUxheW91dEVuZ2luZShcbiAgICAgICAgdGhpcy5hbGxvd0R5bmFtaWNMYXlvdXQsXG4gICAgICAgIFwiLlwiICsgcXVlc3Rpb25MYXlvdXRlZEVsZW1lbnRDbGFzc05hbWVcbiAgICAgICk7XG4gICAgdGhpcy5fbGF5b3V0RW5naW5lLm9uTW92ZUNhbGxiYWNrID0gKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpID0+XG4gICAgICB0aGlzLm1vdmVWaXNpYmxlRWxlbWVudChmcm9tSW5kZXgsIHRvSW5kZXgpO1xuXG4gICAgdGhpcy5zaG93SGVhZGVyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdXJ2ZXkpIHtcbiAgICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdGhpcy5vcHRpb25zLnN1cnZleS5sb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKF9lbGVtZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50cyA9IHRoaXMuYnVpbGRFbGVtZW50cyhxdWVzdGlvbnMpO1xuICAgIH1cblxuICAgIHRoaXMuYnVpbGRWaXN1YWxpemVycyhxdWVzdGlvbnMpO1xuXG4gICAgdGhpcy5yZWdpc3RlclRvb2xiYXJJdGVtKFwicmVzZXRGaWx0ZXJcIiwgKCkgPT4ge1xuICAgICAgcmV0dXJuIERvY3VtZW50SGVscGVyLmNyZWF0ZUJ1dHRvbigoKSA9PiB7XG4gICAgICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlc2V0RmlsdGVyXCIpKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJhZGRFbGVtZW50XCIsICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYWxsb3dIaWRlUXVlc3Rpb25zKSB7XG4gICAgICAgIGxldCBhZGRFbGVtZW50U2VsZWN0b3I6IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyID0gKFxuICAgICAgICAgIHBhbmVsOiBWaXN1YWxpemF0aW9uUGFuZWwsXG4gICAgICAgICAgb3B0aW9uczogYW55XG4gICAgICAgICkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gdGhpcy5oaWRkZW5FbGVtZW50cztcbiAgICAgICAgICBpZiAoaGlkZGVuRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVNlbGVjdG9yKFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgPGFueT57XG4gICAgICAgICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFkZEVsZW1lbnRcIiksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIC5jb25jYXQoaGlkZGVuRWxlbWVudHMpXG4gICAgICAgICAgICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZWxlbWVudC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIChvcHRpb246IGFueSkgPT4gZmFsc2UsXG4gICAgICAgICAgICAgIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFbGVtZW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIChhZGRFbGVtZW50U2VsZWN0b3IgJiZcbiAgICAgICAgICAgICAgdG9vbGJhci5yZXBsYWNlQ2hpbGQoc2VsZWN0V3JhcHBlciwgYWRkRWxlbWVudFNlbGVjdG9yKSkgfHxcbiAgICAgICAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChzZWxlY3RXcmFwcGVyKTtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciA9IHNlbGVjdFdyYXBwZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciAmJiB0b29sYmFyLnJlbW92ZUNoaWxkKGFkZEVsZW1lbnRTZWxlY3Rvcik7XG4gICAgICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyKHRoaXMsIHt9KTtcbiAgICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NoYW5nZWQuYWRkKGFkZEVsZW1lbnRTZWxlY3RvclVwZGF0ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5sb2NhbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJUb29sYmFySXRlbShcImNoYW5nZUxvY2FsZVwiLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudEhlbHBlci5jcmVhdGVTZWxlY3RvcihcbiAgICAgICAgICBbbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYW5nZUxvY2FsZVwiKV1cbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5sb2NhbGVzKVxuICAgICAgICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIHRleHQ6IGVsZW1lbnQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAob3B0aW9uOiBhbnkpID0+IGZhbHNlLFxuICAgICAgICAgIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBuZXdMb2NhbGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbmV3TG9jYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzaG93RWxlbWVudChlbGVtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgY29uc3QgZWxlbWVudEluZGV4ID0gdGhpcy5fZWxlbWVudHMuaW5kZXhPZihlbGVtZW50KTtcbiAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlO1xuICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyUGFuZWxFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkVsZW1lbnQpO1xuICAgIHRoaXMubGF5b3V0RW5naW5lLmFkZChbcXVlc3Rpb25FbGVtZW50XSwgeyBpbmRleDogZWxlbWVudEluZGV4IH0pO1xuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzQ2hhbmdlZChlbGVtZW50LCBcIkFEREVEXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhpZGVFbGVtZW50KGVsZW1lbnROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGU7XG4gICAgaWYgKCEhZWxlbWVudC5yZW5kZXJlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubGF5b3V0RW5naW5lLnJlbW92ZShbZWxlbWVudC5yZW5kZXJlZEVsZW1lbnRdKTtcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50LnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICBlbGVtZW50LnJlbmRlcmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHNDaGFuZ2VkKGVsZW1lbnQsIFwiUkVNT1ZFRFwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBtb3ZlVmlzaWJsZUVsZW1lbnQoXG4gICAgZnJvbVZpc2libGVJbmRleDogbnVtYmVyLFxuICAgIHRvVmlzaWJsZUluZGV4OiBudW1iZXJcbiAgKSB7XG4gICAgbGV0IGZyb21JbmRleCwgdG9JbmRleDtcblxuICAgIGxldCBmcm9tVmlzaWJsZUluZGV4RWxlbWVudCA9IHRoaXMudmlzaWJsZUVsZW1lbnRzW2Zyb21WaXNpYmxlSW5kZXhdO1xuICAgIGxldCB0b1Zpc2libGVJbmRleEVsZW1lbnQgPSB0aGlzLnZpc2libGVFbGVtZW50c1t0b1Zpc2libGVJbmRleF07XG5cbiAgICBmcm9tSW5kZXggPSB0aGlzLl9lbGVtZW50cy5pbmRleE9mKGZyb21WaXNpYmxlSW5kZXhFbGVtZW50KTtcbiAgICB0b0luZGV4ID0gdGhpcy5fZWxlbWVudHMuaW5kZXhPZih0b1Zpc2libGVJbmRleEVsZW1lbnQpO1xuXG4gICAgdGhpcy5tb3ZlRWxlbWVudChmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1vdmVFbGVtZW50KGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpIHtcbiAgICB2YXIgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cy5zcGxpY2UoZnJvbUluZGV4LCAxKTtcbiAgICB0aGlzLl9lbGVtZW50cy5zcGxpY2UodG9JbmRleCwgMCwgZWxlbWVudHNbMF0pO1xuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzQ2hhbmdlZChlbGVtZW50c1swXSwgXCJNT1ZFRFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRWaXN1YWxpemVycyhxdWVzdGlvbnM6IEFycmF5PFF1ZXN0aW9uPikge1xuICAgIHF1ZXN0aW9ucy5mb3JFYWNoKChxdWVzdGlvbikgPT4ge1xuICAgICAgY29uc3QgdmlzdWFsaXplciA9IHRoaXMuY3JlYXRlVmlzdWFsaXplcihxdWVzdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLmFsbG93SGlkZVF1ZXN0aW9ucykge1xuICAgICAgICB2aXN1YWxpemVyLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJyZW1vdmVRdWVzdGlvblwiLCAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIERvY3VtZW50SGVscGVyLmNyZWF0ZUJ1dHRvbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZUVsZW1lbnQocXVlc3Rpb24ubmFtZSksIDApO1xuICAgICAgICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQnV0dG9uXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICBsZXQgZmlsdGVySW5mbyA9IG5ldyBGaWx0ZXJJbmZvKHZpc3VhbGl6ZXIpO1xuXG4gICAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInF1ZXN0aW9uRmlsdGVySW5mb1wiLCAoKSA9PiB7XG4gICAgICAgICAgZmlsdGVySW5mby51cGRhdGUodmlzdWFsaXplci5zZWxlY3Rpb24pO1xuICAgICAgICAgIHJldHVybiBmaWx0ZXJJbmZvLmh0bWxFbGVtZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IChcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBhbnksXG4gICAgICAgICAgc2VsZWN0ZWRUZXh0OiBzdHJpbmdcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgZmlsdGVySW5mby51cGRhdGUoeyB2YWx1ZTogc2VsZWN0ZWRWYWx1ZSwgdGV4dDogc2VsZWN0ZWRUZXh0IH0pO1xuICAgICAgICAgIHRoaXMuc2V0RmlsdGVyKHF1ZXN0aW9uLm5hbWUsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcbiAgICAgIHRoaXMudmlzdWFsaXplcnMucHVzaCh2aXN1YWxpemVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVZpc3VhbGl6ZXJzKCkge1xuICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCgodmlzdWFsaXplcikgPT4ge1xuICAgICAgdmlzdWFsaXplci5vblVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMudmlzdWFsaXplcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgbG9jYWxlIG9mIHRoZSB2aXN1YWxpemF0aW9uIHBhbmVsLlxuICAgKiBJZiBsb2NhbGVzIG1vcmUgdGhhbiBvbmUsIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gZHJvcGRvd24gd2lsbCBiZSBhZGRlZCBpbiB0aGUgdG9vbGJhclxuICAgKiBJbiBvcmRlciB0byB1c2Ugc3VydmV5IGxvY2FsZXMgdGhlIHN1cnZleSBpbnN0YW5jZSBvYmplY3Qgc2hvdWxkIGJlIHBhc3NlZCBhcyAnc3VydmV5JyBvcHRpb24gZm9yIHZpc3VhbGl6ZXJcbiAgICovXG4gIHB1YmxpYyBnZXQgbG9jYWxlKCkge1xuICAgIHZhciBzdXJ2ZXkgPSB0aGlzLm9wdGlvbnMuc3VydmV5O1xuICAgIGlmICghIXN1cnZleSkge1xuICAgICAgcmV0dXJuIHN1cnZleS5sb2NhbGU7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGxvY2FsZSBmb3IgdmlzdWFsaXphdGlvbiBwYW5lbC5cbiAgICovXG4gIHB1YmxpYyBzZXQgbG9jYWxlKG5ld0xvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobmV3TG9jYWxlKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHNldExvY2FsZShuZXdMb2NhbGU6IHN0cmluZykge1xuICAgIHZhciBzdXJ2ZXkgPSB0aGlzLm9wdGlvbnMuc3VydmV5O1xuICAgIGlmICghIXN1cnZleSkge1xuICAgICAgc3VydmV5LmxvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICAgICh0aGlzLnF1ZXN0aW9ucyB8fCBbXSkuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChxdWVzdGlvbi5uYW1lKTtcbiAgICAgICAgaWYgKCEhZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZGlzcGxheU5hbWUgPSBxdWVzdGlvbi50aXRsZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbmFtZSBvZiB0aGUgdmlzdWFsaXplciAtICdwYW5lbCcgZm9yIHRoZSBWaXN1YWxpemF0aW9uUGFuZWwuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwicGFuZWxcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIFZpc3VhbGl6YXRpb25QYW5lbCBhbGxvd3MgZHluYW1pYyBsYXlvdXRpbmcgLSByZWFycmFuZ2UgaXRlbXMgdmlhIGRyYXAvZHJvcC5cbiAgICovXG4gIHB1YmxpYyBnZXQgYWxsb3dEeW5hbWljTGF5b3V0KCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm9wdGlvbnMuYWxsb3dEeW5hbWljTGF5b3V0ID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5hbGxvd0R5bmFtaWNMYXlvdXQgPT09IHRydWVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgVmlzdWFsaXphdGlvblBhbmVsIGFsbG93cyB0byBoaWRlL3Nob3cgaW5kaXZpZHVhbCBpbm5lciB2aXN1YWxpemVycy5cbiAgICovXG4gIHB1YmxpYyBnZXQgYWxsb3dIaWRlUXVlc3Rpb25zKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm9wdGlvbnMuYWxsb3dIaWRlUXVlc3Rpb25zID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5hbGxvd0hpZGVRdWVzdGlvbnMgPT09IHRydWVcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGF5b3V0RW5naW5lOiBMYXlvdXRFbmdpbmU7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXlvdXQgZW5naW5lIGluc3RhbmNlIGlmIGFueS5cbiAgICovXG4gIHB1YmxpYyBnZXQgbGF5b3V0RW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXRFbmdpbmU7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRFbGVtZW50cyhxdWVzdGlvbnM6IGFueVtdKTogSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIChxdWVzdGlvbnMgfHwgW10pLm1hcCgocXVlc3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBxdWVzdGlvbi50aXRsZSxcbiAgICAgICAgdmlzaWJpbGl0eTogRWxlbWVudFZpc2liaWxpdHkuVmlzaWJsZSxcbiAgICAgICAgdHlwZTogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBhbmVsIGVsZW1lbnRzIGRlc2NyaXB0aW9ucyBhcnJheS5cbiAgICogSW5uZXIgdmlzdWFsaXplcnMgYXJlIHJlbmRlcmVkIGluIHRoZSBvcmRlciBvZiB0aGlzIGFycmF5IGFuZCB3aXRoIHRpdGxlcyBmcm9tIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eVxuICAgKi9cbiAgcHVibGljIGdldEVsZW1lbnRzKCk6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50W10ge1xuICAgIHJldHVybiAodGhpcy5fZWxlbWVudHMgfHwgW10pLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogZWxlbWVudC5kaXNwbGF5TmFtZSxcbiAgICAgICAgdmlzaWJpbGl0eTogZWxlbWVudC52aXNpYmlsaXR5LFxuICAgICAgICB0eXBlOiBlbGVtZW50LnR5cGUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGNlcnRhaW4gZWxlbWVudCBpcyB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIGlzVmlzaWJsZSh2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eSkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSAhPT0gRWxlbWVudFZpc2liaWxpdHkuSW52aXNpYmxlKSB8fFxuICAgICAgKCF0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ID09PSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHZpc2libGVFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKChlbCkgPT4gdGhpcy5pc1Zpc2libGUoZWwudmlzaWJpbGl0eSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBoaWRkZW5FbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKChlbCkgPT4gIXRoaXMuaXNWaXNpYmxlKGVsLnZpc2liaWxpdHkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbG9jYWxlcygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnN1cnZleSkgcmV0dXJuIHRoaXMub3B0aW9ucy5zdXJ2ZXkuZ2V0VXNlZExvY2FsZXMoKTtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwYW5lbCBlbGVtZW50IGRlc2NyaXB0aW9uIGJ5IHRoZSBxdWVzdGlvbiBuYW1lLlxuICAgKi9cbiAgcHVibGljIGdldEVsZW1lbnQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmZpbHRlcigoZWwpID0+IGVsLm5hbWUgPT09IG5hbWUpWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcGFuZWwgZWxlbWVudCB2aXN1YWxpemVyIGJ5IHRoZSBxdWVzdGlvbiBuYW1lLlxuICAgKi9cbiAgZ2V0VmlzdWFsaXplcihkYXRhTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsaXplcnMuZmlsdGVyKCh2KSA9PiB2LmRhdGFOYW1lID09PSBkYXRhTmFtZSlbMF07XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBlbGVtZW50IHZpc2liaWxpdHkgaGFzIGJlZW4gY2hhbmdlZC5cbiAgICogb3B0aW9uczpcbiAgICogZWxlbWVudHMgLSBwYW5lbCBlbGVtZW50cyBhcnJheVxuICAgKiBjaGFuZ2VkIC0gY2hhbmdlZCBlbGVtZW50XG4gICAqIHJlYXNvbiAtIHJlYXNvbiAoc3RyaW5nKSB3aHkgZXZlbnQgZmlyZWQ6IFwiQURERURcIiwgXCJNT1ZFRFwiIG9yIFwiUkVNT1ZFRFwiXG4gICAqL1xuICBwdWJsaWMgb25WaXNpYmxlRWxlbWVudHNDaGFuZ2VkID0gbmV3IEV2ZW50PFxuICAgIChzZW5kZXI6IFZpc3VhbGl6YXRpb25QYW5lbCwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4oKTtcblxuICBwcm90ZWN0ZWQgdmlzaWJsZUVsZW1lbnRzQ2hhbmdlZChcbiAgICBlbGVtZW50OiBJVmlzdWFsaXplclBhbmVsRWxlbWVudCxcbiAgICByZWFzb246IHN0cmluZ1xuICApIHtcbiAgICBpZiAoIXRoaXMub25WaXNpYmxlRWxlbWVudHNDaGFuZ2VkLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMub25WaXNpYmxlRWxlbWVudHNDaGFuZ2VkLmZpcmUodGhpcywge1xuICAgICAgICBlbGVtZW50czogdGhpcy5fZWxlbWVudHMsXG4gICAgICAgIGNoYW5nZWQ6IGVsZW1lbnQsXG4gICAgICAgIHJlYXNvbjogcmVhc29uLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgICB0aGlzLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdml6dWFsaXphdGlvbiBwYW5lbCBzdGF0ZSBjaGFuZ2VkLlxuICAgKiBzZW5kZXIgLSB0aGlzIHBhbmVsXG4gICAqIHN0YXRlIC0gbmV3IHN0YXRlIG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgcHVibGljIG9uU3RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50PFxuICAgIChzZW5kZXI6IFZpc3VhbGl6YXRpb25QYW5lbCwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4oKTtcblxuICAvKipcbiAgICogUmVuZGVycyBnaXZlbiBwYW5lbCBlbGVtZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlbmRlclBhbmVsRWxlbWVudChlbGVtZW50OiBJVmlzdWFsaXplclBhbmVsUmVuZGVyZWRFbGVtZW50KSB7XG4gICAgY29uc3QgdmlzdWFsaXplciA9IHRoaXMuZ2V0VmlzdWFsaXplcihlbGVtZW50Lm5hbWUpO1xuXG4gICAgY29uc3QgcXVlc3Rpb25FbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRlbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCB2aXp1YWxpemVyRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudC5kaXNwbGF5TmFtZTtcblxuICAgIHF1ZXN0aW9uRWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmFsbG93RHluYW1pY0xheW91dFxuICAgICAgPyBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgKyBcIiBcIiArIHF1ZXN0aW9uTGF5b3V0ZWRFbGVtZW50Q2xhc3NOYW1lXG4gICAgICA6IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZTtcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lICsgXCJfX3RpdGxlXCI7XG4gICAgcXVlc3Rpb25Db250ZW50LmNsYXNzTmFtZSA9IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiX19jb250ZW50XCI7XG5cbiAgICBxdWVzdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICBxdWVzdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQodml6dWFsaXplckVsZW1lbnQpO1xuICAgIHF1ZXN0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChxdWVzdGlvbkNvbnRlbnQpO1xuXG4gICAgdmlzdWFsaXplci5yZW5kZXIodml6dWFsaXplckVsZW1lbnQpO1xuXG4gICAgZWxlbWVudC5yZW5kZXJlZEVsZW1lbnQgPSBxdWVzdGlvbkVsZW1lbnQ7XG4gICAgcmV0dXJuIHF1ZXN0aW9uRWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJUb29sYmFyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IFwiIHNhLXBhbmVsX19oZWFkZXJcIjtcbiAgICBzdXBlci5yZW5kZXJUb29sYmFyKGNvbnRhaW5lcik7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhbGwgcXVlc3Rpb25zIGludG8gZ2l2ZW4gSFRNTCBjb250YWluZXIgZWxlbWVudC5cbiAgICogY29udGFpbmVyIC0gSFRNTCBlbGVtZW50IHRvIHJlbmRlciB0aGUgcGFuZWxcbiAgICovXG4gIHB1YmxpYyByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IFwiIHNhLXBhbmVsX19jb250ZW50IHNhLWdyaWRcIjtcblxuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBxdWVzdGlvbkVsZW1lbnQgPSB0aGlzLnJlbmRlclBhbmVsRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sYXlvdXRFbmdpbmUuc3RhcnQoY29udGFpbmVyKTtcbiAgICAvLyAhIXdpbmRvdyAmJiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgVUlFdmVudChcInJlc2l6ZVwiKSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdmlzdWFsaXplciBhbmQgYWxsIGlubmVyIGNvbnRlbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMubGF5b3V0RW5naW5lLnN0b3AoKTtcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBmb3IgY2xlYXJpbmcgYWxsIHJlbmRlcmVkIGVsZW1lbnRzIGZyb20gb3V0c2lkZS5cbiAgICovXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICBpZiAoISF0aGlzLnRvb2xiYXJDb250YWluZXIpIHtcbiAgICAgIHRoaXMuZGVzdHJveVRvb2xiYXIodGhpcy50b29sYmFyQ29udGFpbmVyKTtcbiAgICB9XG4gICAgaWYgKCEhdGhpcy5jb250ZW50Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgfVxuICAgIGlmICghIXRoaXMuZm9vdGVyQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lGb290ZXIodGhpcy5mb290ZXJDb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRyYXdzIHZpc3VhbGl6ZXIgdG9vYmFyIGFuZCBhbGwgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyByZWZyZXNoKCkge1xuICAgIGlmICghIXRoaXMudG9vbGJhckNvbnRhaW5lcikge1xuICAgICAgdGhpcy5kZXN0cm95VG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuICAgICAgdGhpcy5yZW5kZXJUb29sYmFyKHRoaXMudG9vbGJhckNvbnRhaW5lcik7XG4gICAgfVxuICAgIHN1cGVyLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGxheW91dCBvZiB2aXN1YWxpemVyIGlubmVyIGNvbnRlbnQuXG4gICAqL1xuICBwdWJsaWMgbGF5b3V0KCkge1xuICAgIHRoaXMubGF5b3V0RW5naW5lLnVwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZmlsdGVyIGJ5IHF1ZXN0aW9uIG5hbWUgYW5kIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHNldEZpbHRlcihxdWVzdGlvbk5hbWU6IHN0cmluZywgc2VsZWN0ZWRWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5kYXRhUHJvdmlkZXIuc2V0RmlsdGVyKHF1ZXN0aW9uTmFtZSwgc2VsZWN0ZWRWYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB2aXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlLlxuICAgKi9cbiAgcHVibGljIGdldCBzdGF0ZSgpOiBJU3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgZWxlbWVudHM6IFtdLmNvbmNhdCh0aGlzLl9lbGVtZW50cyksXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB2aXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHNldCBzdGF0ZShuZXdTdGF0ZTogSVN0YXRlKSB7XG4gICAgdGhpcy5fZWxlbWVudHMgPSBbXS5jb25jYXQobmV3U3RhdGUuZWxlbWVudHMgfHwgW10pO1xuICAgIHRoaXMuc2V0TG9jYWxlKG5ld1N0YXRlLmxvY2FsZSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRlc3Ryb3lWaXN1YWxpemVycygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uUGFuZWwgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsLCBJUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByb3RlY3RlZCBfcGFuZWxWaXN1YWxpemVyOiBWaXN1YWxpemF0aW9uUGFuZWwgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIocXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgb3B0aW9ucy5hbGxvd0R5bmFtaWNMYXlvdXQgPSBmYWxzZTtcbiAgICBvcHRpb25zLmRhdGFQcm92aWRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIgPSBuZXcgVmlzdWFsaXphdGlvblBhbmVsKFxuICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKSxcbiAgICAgIFtdLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gICAgdGhpcy51cGRhdGVEYXRhKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcInBhbmVsRHluYW1pY1wiO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgc3VwZXIudXBkYXRlRGF0YShkYXRhKTtcbiAgICBsZXQgcGFuZWxEYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICBpZiAoZGF0YUl0ZW1bdGhpcy5xdWVzdGlvbi5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhbmVsRGF0YSA9IHBhbmVsRGF0YS5jb25jYXQoZGF0YUl0ZW1bdGhpcy5xdWVzdGlvbi5uYW1lXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fcGFuZWxWaXN1YWxpemVyLnVwZGF0ZURhdGEocGFuZWxEYXRhKTtcbiAgfVxuXG4gIGdldFF1ZXN0aW9ucygpOiBJUXVlc3Rpb25bXSB7XG4gICAgY29uc3QgcGFuZWxkeW5hbWljOiBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBwYW5lbGR5bmFtaWMudGVtcGxhdGUucXVlc3Rpb25zO1xuICB9XG5cbiAgZGVzdHJveUNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3BhbmVsVmlzdWFsaXplci5jbGVhcigpO1xuICAgIHN1cGVyLmRlc3Ryb3lDb250ZW50KHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gIH1cblxuICByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9wYW5lbFZpc3VhbGl6ZXIucmVuZGVyKGNvbnRhaW5lcik7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcInBhbmVsZHluYW1pY1wiLFxuICBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljXG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uQ29tbWVudE1vZGVsLCBzZXR0aW5ncyB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSURhdGFJbmZvLCBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhUHJvdmlkZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJGYWN0b3J5IH0gZnJvbSBcIi4vdmlzdWFsaXplckZhY3RvcnlcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuaW1wb3J0IFwiLi92aXN1YWxpemVyQmFzZS5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemVyQmFzZSBpbXBsZW1lbnRzIElEYXRhSW5mbyB7XG4gIHByaXZhdGUgX3Nob3dIZWFkZXIgPSB0cnVlO1xuICBwcml2YXRlIF9mb290ZXJWaXN1YWxpemVyOiBWaXN1YWxpemVyQmFzZSA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIgPSB1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCByZW5kZXJSZXN1bHQ6IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgdG9vbGJhckNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCBjb250ZW50Q29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIGZvb3RlckNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIC8vIHB1YmxpYyBzdGF0aWMgb3RoZXJDb21tZW50UXVlc3Rpb25UeXBlID0gXCJjb21tZW50XCI7IC8vIFRPRE86IG1ha2UgaXQgY29uZmlndXJlYWJsZSAtIGFsbG93IGNob29zZSB3aGF0IGtpbmQgb2YgcXVlc3Rpb24vdmlzdWFsaXplciB3aWxsIGJlIHVzZWQgZm9yIGNvbW1lbnRzL290aGVyc1xuICBwdWJsaWMgc3RhdGljIG90aGVyQ29tbWVudENvbGxhcHNlZCA9IHRydWU7XG5cbiAgcHJvdGVjdGVkIHRvb2xiYXJJdGVtQ3JlYXRvcnM6IHtcbiAgICBbbmFtZTogc3RyaW5nXTogKHRvb2xiYXI/OiBIVE1MRGl2RWxlbWVudCkgPT4gSFRNTEVsZW1lbnQ7XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9XG4gICkge1xuICAgIHRoaXMuX2RhdGFQcm92aWRlciA9IG9wdGlvbnMuZGF0YVByb3ZpZGVyIHx8IG5ldyBEYXRhUHJvdmlkZXIoZGF0YSk7XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyLm9uRGF0YUNoYW5nZWQuYWRkKCgpID0+IHRoaXMub25EYXRhQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRhdGFDaGFuZ2VkKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IGRhdGFOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb24ubmFtZTtcbiAgfVxuXG4gIGdldCBoYXNGb290ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICEhdGhpcy5xdWVzdGlvbiAmJiAodGhpcy5xdWVzdGlvbi5oYXNDb21tZW50IHx8IHRoaXMucXVlc3Rpb24uaGFzT3RoZXIpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVWaXN1YWxpemVyKHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5kYXRhUHJvdmlkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5kYXRhUHJvdmlkZXIgPSB0aGlzLmRhdGFQcm92aWRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gVmlzdWFsaXplckZhY3RvcnkuY3JlYXRlVmlzdWFsaXplcihxdWVzdGlvbiwgdGhpcy5kYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldCBmb290ZXJWaXN1YWxpemVyKCkge1xuICAgIGlmICghdGhpcy5oYXNGb290ZXIpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghdGhpcy5fZm9vdGVyVmlzdWFsaXplcikge1xuICAgICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgUXVlc3Rpb25Db21tZW50TW9kZWwoXG4gICAgICAgIHRoaXMucXVlc3Rpb24ubmFtZSArIChzZXR0aW5ncyB8fCB7fSkuY29tbWVudFByZWZpeFxuICAgICAgKTtcbiAgICAgIHF1ZXN0aW9uLnRpdGxlID0gdGhpcy5xdWVzdGlvbi50aXRsZTtcblxuICAgICAgdGhpcy5fZm9vdGVyVmlzdWFsaXplciA9IHRoaXMuY3JlYXRlVmlzdWFsaXplcihxdWVzdGlvbik7XG4gICAgICB0aGlzLl9mb290ZXJWaXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZm9vdGVyVmlzdWFsaXplcjtcbiAgfVxuXG4gIGdldFNlcmllc1ZhbHVlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcmllc1ZhbHVlcyB8fCBbXTtcbiAgfVxuXG4gIGdldFNlcmllc0xhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcmllc0xhYmVscyB8fCB0aGlzLmdldFNlcmllc1ZhbHVlcygpO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCk6IEFycmF5PGFueT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlcygpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyVG9vbGJhckl0ZW0oXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGNyZWF0b3I6ICh0b29sYmFyPzogSFRNTERpdkVsZW1lbnQpID0+IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHRoaXMudG9vbGJhckl0ZW1DcmVhdG9yc1tuYW1lXSA9IGNyZWF0b3I7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwidmlzdWFsaXplclwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFQcm92aWRlci5maWx0ZXJlZERhdGE7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGRhdGFQcm92aWRlcigpOiBEYXRhUHJvdmlkZXIge1xuICAgIHJldHVybiB0aGlzLl9kYXRhUHJvdmlkZXI7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB2aXN1YWxpemVyIGRhdGEuXG4gICAqL1xuICB1cGRhdGVEYXRhKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kYXRhUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZGF0YVByb3ZpZGVyLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNGb290ZXIpIHtcbiAgICAgIHRoaXMuZm9vdGVyVmlzdWFsaXplci51cGRhdGVEYXRhKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xuXG4gIGludm9rZU9uVXBkYXRlKCkge1xuICAgIHRoaXMub25VcGRhdGUgJiYgdGhpcy5vblVwZGF0ZSgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAoISF0aGlzLnJlbmRlclJlc3VsdCkge1xuICAgICAgdGhpcy5kZXN0cm95VG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuICAgICAgdGhpcy50b29sYmFyQ29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kZXN0cm95Rm9vdGVyKHRoaXMuZm9vdGVyQ29udGFpbmVyKTtcbiAgICAgIHRoaXMuZm9vdGVyQ29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5yZW5kZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoISF0aGlzLl9mb290ZXJWaXN1YWxpemVyKSB7XG4gICAgICB0aGlzLl9mb290ZXJWaXN1YWxpemVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2Zvb3RlclZpc3VhbGl6ZXIub25VcGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9mb290ZXJWaXN1YWxpemVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVUb29sYmFySXRlbXModG9vbGJhcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnRvb2xiYXJJdGVtQ3JlYXRvcnMgfHwge30pLmZvckVhY2goKHRvb2xiYXJJdGVtTmFtZSkgPT4ge1xuICAgICAgbGV0IHRvb2xiYXJJdGVtID0gdGhpcy50b29sYmFySXRlbUNyZWF0b3JzW3Rvb2xiYXJJdGVtTmFtZV0odG9vbGJhcik7XG4gICAgICBpZiAoISF0b29sYmFySXRlbSkge1xuICAgICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHRvb2xiYXJJdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95VG9vbGJhcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyVG9vbGJhcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuc2hvd0hlYWRlcikge1xuICAgICAgY29uc3QgdG9vbGJhciA9IDxIVE1MRGl2RWxlbWVudD4oXG4gICAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzYS10b29sYmFyXCIpXG4gICAgICApO1xuICAgICAgdGhpcy5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbGJhcik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJUaGlzIHF1ZXN0aW9uIHR5cGUgaXMgbm90IHZpc3VhbGl6ZWQgeWV0XCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveUZvb3Rlcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyRm9vdGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAodGhpcy5oYXNGb290ZXIpIHtcbiAgICAgIGNvbnN0IGZvb3RlclRpdGxlRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaDRcIixcbiAgICAgICAgXCJzYS12aXN1YWxpemVyX19mb290ZXItdGl0bGVcIixcbiAgICAgICAgeyBpbm5lclRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvdGhlckNvbW1lbnRUaXRsZVwiKSB9XG4gICAgICApO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRpdGxlRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGZvb3RlckNvbnRlbnRFbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJzYS12aXN1YWxpemVyX19mb290ZXItY29udGVudFwiXG4gICAgICApO1xuICAgICAgZm9vdGVyQ29udGVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFZpc3VhbGl6ZXJCYXNlLm90aGVyQ29tbWVudENvbGxhcHNlZFxuICAgICAgICA/IFwibm9uZVwiXG4gICAgICAgIDogXCJibG9ja1wiO1xuXG4gICAgICBjb25zdCB2aXNpYmlsaXR5QnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlQnV0dG9uKCgpID0+IHtcbiAgICAgICAgaWYgKGZvb3RlckNvbnRlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgZm9vdGVyQ29udGVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICB2aXNpYmlsaXR5QnV0dG9uLmlubmVyVGV4dCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQnV0dG9uXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvb3RlckNvbnRlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICB2aXNpYmlsaXR5QnV0dG9uLmlubmVyVGV4dCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXG4gICAgICAgICAgICBWaXN1YWxpemVyQmFzZS5vdGhlckNvbW1lbnRDb2xsYXBzZWQgPyBcInNob3dCdXR0b25cIiA6IFwiaGlkZUJ1dHRvblwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvb3RlclZpc3VhbGl6ZXIuaW52b2tlT25VcGRhdGUoKTtcbiAgICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93QnV0dG9uXCIpIC8qLCBcInNhLXRvb2xiYXJfX2J1dHRvbi0tcmlnaHRcIiovKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5QnV0dG9uKTtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnRFbGVtZW50KTtcblxuICAgICAgdGhpcy5mb290ZXJWaXN1YWxpemVyLnJlbmRlcihmb290ZXJDb250ZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB0YXJnZXRFbGVtZW50O1xuXG4gICAgdGhpcy50b29sYmFyQ29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInNhLXZpc3VhbGl6ZXJfX3Rvb2xiYXJcIlxuICAgICk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyVG9vbGJhcih0aGlzLnRvb2xiYXJDb250YWluZXIpO1xuXG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInNhLXZpc3VhbGl6ZXJfX2NvbnRlbnRcIlxuICAgICk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgdGhpcy5mb290ZXJDb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdmlzdWFsaXplcl9fZm9vdGVyXCJcbiAgICApO1xuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5mb290ZXJDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyRm9vdGVyKHRoaXMuZm9vdGVyQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRyYXdzIHZpc3VhbGl6ZXIgYW5kIGFsbCBpbm5lciBjb250ZW50LlxuICAgKi9cbiAgcHVibGljIHJlZnJlc2goKSB7XG4gICAgaWYgKCEhdGhpcy5jb250ZW50Q29udGFpbmVyKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXN0cm95Q29udGVudCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghIXRoaXMuZm9vdGVyQ29udGFpbmVyKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXN0cm95Rm9vdGVyKHRoaXMuZm9vdGVyQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGb290ZXIodGhpcy5mb290ZXJDb250YWluZXIpO1xuICAgICAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuICB9XG5cbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZjdmN2Y3XCI7XG5cbiAgc3RhdGljIGN1c3RvbUNvbG9yczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0aWMgY29sb3JzID0gW1xuICAgIFwiIzg2ZTFmYlwiLFxuICAgIFwiIzM5OTlmYlwiLFxuICAgIFwiI2ZmNjc3MVwiLFxuICAgIFwiIzFlYjQ5NlwiLFxuICAgIFwiI2ZmYzE1MlwiLFxuICAgIFwiI2FiYTFmZlwiLFxuICAgIFwiIzdkOGRhNVwiLFxuICAgIFwiIzRlYzQ2Y1wiLFxuICAgIFwiI2NmMzdhNlwiLFxuICAgIFwiIzRlNjE5OFwiLFxuICBdO1xuXG4gIGdldENvbG9ycyhjb3VudCA9IDEwKSB7XG4gICAgY29uc3QgY29sb3JzID1cbiAgICAgIEFycmF5LmlzQXJyYXkoVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzKSAmJlxuICAgICAgVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnNcbiAgICAgICAgOiBWaXN1YWxpemVyQmFzZS5jb2xvcnM7XG5cbiAgICBsZXQgbWFueUNvbG9yczogYW55ID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIG1hbnlDb2xvcnMgPSBtYW55Q29sb3JzLmNvbmNhdChjb2xvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBtYW55Q29sb3JzO1xuICB9XG5cbiAgZ2V0IHNob3dIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dIZWFkZXI7XG4gIH1cbiAgc2V0IHNob3dIZWFkZXIobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAobmV3VmFsdWUgIT0gdGhpcy5fc2hvd0hlYWRlcikge1xuICAgICAgdGhpcy5fc2hvd0hlYWRlciA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKCEhdGhpcy50b29sYmFyQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveVRvb2xiYXIodGhpcy50b29sYmFyQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb29sYmFyKHRoaXMudG9vbGJhckNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmRhdGFQcm92aWRlci5nZXREYXRhKHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXplckZhY3Rvcnkge1xuICAvKipcbiAgICogQ3JlYXRlIHZpc3VhbGl6ZXIgYnkgcXVlc3Rpb24uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVZpc3VhbGl6ZXIoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfVxuICApOiBWaXN1YWxpemVyQmFzZSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInRleHRcIiAmJiBxdWVzdGlvbi5pbnB1dFR5cGUpIHtcbiAgICAgIHR5cGUgPSBxdWVzdGlvbi5pbnB1dFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgdmFyIGNyZWF0b3JzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIuZ2V0VmlzdWFsaXplcnNCeVR5cGUodHlwZSk7XG4gICAgdmFyIHZpc3VhbGl6ZXJzID0gY3JlYXRvcnMubWFwKFxuICAgICAgKGNyZWF0b3IpID0+IG5ldyBjcmVhdG9yKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKVxuICAgICk7XG4gICAgaWYgKHZpc3VhbGl6ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGFsdGVybmF0aXZlc1Zpc3VhbGl6ZXJDb25zdHJ1Y3RvciA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLmdldEFsdGVybmF0aXZlc1Zpc3VhbGl6ZXIoKTtcbiAgICAgIGxldCB2aXN1YWxpemVyID0gbmV3IGFsdGVybmF0aXZlc1Zpc3VhbGl6ZXJDb25zdHJ1Y3RvcihcbiAgICAgICAgdmlzdWFsaXplcnMsXG4gICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICBkYXRhLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIHZpc3VhbGl6ZXI7XG4gICAgfVxuICAgIHJldHVybiB2aXN1YWxpemVyc1swXTtcbiAgfVxufVxuIiwiZXhwb3J0IHZhciBzdG9wV29yZHMgPSBuZXcgQXJyYXkoXG4gIFwiYVwiLFxuICBcImFib3V0XCIsXG4gIFwiYWJvdmVcIixcbiAgXCJhY3Jvc3NcIixcbiAgXCJhZnRlclwiLFxuICBcImFnYWluXCIsXG4gIFwiYWdhaW5zdFwiLFxuICBcImFsbFwiLFxuICBcImFsbW9zdFwiLFxuICBcImFsb25lXCIsXG4gIFwiYWxvbmdcIixcbiAgXCJhbHJlYWR5XCIsXG4gIFwiYWxzb1wiLFxuICBcImFsdGhvdWdoXCIsXG4gIFwiYWx3YXlzXCIsXG4gIFwiYW1vbmdcIixcbiAgXCJhblwiLFxuICBcImFuZFwiLFxuICBcImFub3RoZXJcIixcbiAgXCJhbnlcIixcbiAgXCJhbnlib2R5XCIsXG4gIFwiYW55b25lXCIsXG4gIFwiYW55dGhpbmdcIixcbiAgXCJhbnl3aGVyZVwiLFxuICBcImFyZVwiLFxuICBcImFyZWFcIixcbiAgXCJhcmVhc1wiLFxuICBcImFyb3VuZFwiLFxuICBcImFzXCIsXG4gIFwiYXNrXCIsXG4gIFwiYXNrZWRcIixcbiAgXCJhc2tpbmdcIixcbiAgXCJhc2tzXCIsXG4gIFwiYXRcIixcbiAgXCJhd2F5XCIsXG4gIFwiYlwiLFxuICBcImJhY2tcIixcbiAgXCJiYWNrZWRcIixcbiAgXCJiYWNraW5nXCIsXG4gIFwiYmFja3NcIixcbiAgXCJiZVwiLFxuICBcImJlY2FtZVwiLFxuICBcImJlY2F1c2VcIixcbiAgXCJiZWNvbWVcIixcbiAgXCJiZWNvbWVzXCIsXG4gIFwiYmVlblwiLFxuICBcImJlZm9yZVwiLFxuICBcImJlZ2FuXCIsXG4gIFwiYmVoaW5kXCIsXG4gIFwiYmVpbmdcIixcbiAgXCJiZWluZ3NcIixcbiAgXCJiZXN0XCIsXG4gIFwiYmV0dGVyXCIsXG4gIFwiYmV0d2VlblwiLFxuICBcImJpZ1wiLFxuICBcImJvdGhcIixcbiAgXCJidXRcIixcbiAgXCJieVwiLFxuICBcImNcIixcbiAgXCJjYW1lXCIsXG4gIFwiY2FuXCIsXG4gIFwiY2Fubm90XCIsXG4gIFwiY2FzZVwiLFxuICBcImNhc2VzXCIsXG4gIFwiY2VydGFpblwiLFxuICBcImNlcnRhaW5seVwiLFxuICBcImNsZWFyXCIsXG4gIFwiY2xlYXJseVwiLFxuICBcImNvbWVcIixcbiAgXCJjb3VsZFwiLFxuICBcImRcIixcbiAgXCJkaWRcIixcbiAgXCJkaWZmZXJcIixcbiAgXCJkaWZmZXJlbnRcIixcbiAgXCJkaWZmZXJlbnRseVwiLFxuICBcImRvXCIsXG4gIFwiZG9lc1wiLFxuICBcImRvbmVcIixcbiAgXCJkb3duXCIsXG4gIFwiZG93blwiLFxuICBcImRvd25lZFwiLFxuICBcImRvd25pbmdcIixcbiAgXCJkb3duc1wiLFxuICBcImR1cmluZ1wiLFxuICBcImVcIixcbiAgXCJlYWNoXCIsXG4gIFwiZWFybHlcIixcbiAgXCJlaXRoZXJcIixcbiAgXCJlbmRcIixcbiAgXCJlbmRlZFwiLFxuICBcImVuZGluZ1wiLFxuICBcImVuZHNcIixcbiAgXCJlbm91Z2hcIixcbiAgXCJldmVuXCIsXG4gIFwiZXZlbmx5XCIsXG4gIFwiZXZlclwiLFxuICBcImV2ZXJ5XCIsXG4gIFwiZXZlcnlib2R5XCIsXG4gIFwiZXZlcnlvbmVcIixcbiAgXCJldmVyeXRoaW5nXCIsXG4gIFwiZXZlcnl3aGVyZVwiLFxuICBcImZcIixcbiAgXCJmYWNlXCIsXG4gIFwiZmFjZXNcIixcbiAgXCJmYWN0XCIsXG4gIFwiZmFjdHNcIixcbiAgXCJmYXJcIixcbiAgXCJmZWx0XCIsXG4gIFwiZmV3XCIsXG4gIFwiZmluZFwiLFxuICBcImZpbmRzXCIsXG4gIFwiZmlyc3RcIixcbiAgXCJmb3JcIixcbiAgXCJmb3VyXCIsXG4gIFwiZnJvbVwiLFxuICBcImZ1bGxcIixcbiAgXCJmdWxseVwiLFxuICBcImZ1cnRoZXJcIixcbiAgXCJmdXJ0aGVyZWRcIixcbiAgXCJmdXJ0aGVyaW5nXCIsXG4gIFwiZnVydGhlcnNcIixcbiAgXCJnXCIsXG4gIFwiZ2F2ZVwiLFxuICBcImdlbmVyYWxcIixcbiAgXCJnZW5lcmFsbHlcIixcbiAgXCJnZXRcIixcbiAgXCJnZXRzXCIsXG4gIFwiZ2l2ZVwiLFxuICBcImdpdmVuXCIsXG4gIFwiZ2l2ZXNcIixcbiAgXCJnb1wiLFxuICBcImdvaW5nXCIsXG4gIFwiZ29vZFwiLFxuICBcImdvb2RzXCIsXG4gIFwiZ290XCIsXG4gIFwiZ3JlYXRcIixcbiAgXCJncmVhdGVyXCIsXG4gIFwiZ3JlYXRlc3RcIixcbiAgXCJncm91cFwiLFxuICBcImdyb3VwZWRcIixcbiAgXCJncm91cGluZ1wiLFxuICBcImdyb3Vwc1wiLFxuICBcImhcIixcbiAgXCJoYWRcIixcbiAgXCJoYXNcIixcbiAgXCJoYXZlXCIsXG4gIFwiaGF2aW5nXCIsXG4gIFwiaGVcIixcbiAgXCJoZXJcIixcbiAgXCJoZXJlXCIsXG4gIFwiaGVyc2VsZlwiLFxuICBcImhpZ2hcIixcbiAgXCJoaWdoXCIsXG4gIFwiaGlnaFwiLFxuICBcImhpZ2hlclwiLFxuICBcImhpZ2hlc3RcIixcbiAgXCJoaW1cIixcbiAgXCJoaW1zZWxmXCIsXG4gIFwiaGlzXCIsXG4gIFwiaG93XCIsXG4gIFwiaG93ZXZlclwiLFxuICBcImlcIixcbiAgXCJpZlwiLFxuICBcImltcG9ydGFudFwiLFxuICBcImluXCIsXG4gIFwiaW50ZXJlc3RcIixcbiAgXCJpbnRlcmVzdGVkXCIsXG4gIFwiaW50ZXJlc3RpbmdcIixcbiAgXCJpbnRlcmVzdHNcIixcbiAgXCJpbnRvXCIsXG4gIFwiaXNcIixcbiAgXCJpdFwiLFxuICBcIml0c1wiLFxuICBcIml0c2VsZlwiLFxuICBcImpcIixcbiAgXCJqdXN0XCIsXG4gIFwia1wiLFxuICBcImtlZXBcIixcbiAgXCJrZWVwc1wiLFxuICBcImtpbmRcIixcbiAgXCJrbmV3XCIsXG4gIFwia25vd1wiLFxuICBcImtub3duXCIsXG4gIFwia25vd3NcIixcbiAgXCJsXCIsXG4gIFwibGFyZ2VcIixcbiAgXCJsYXJnZWx5XCIsXG4gIFwibGFzdFwiLFxuICBcImxhdGVyXCIsXG4gIFwibGF0ZXN0XCIsXG4gIFwibGVhc3RcIixcbiAgXCJsZXNzXCIsXG4gIFwibGV0XCIsXG4gIFwibGV0c1wiLFxuICBcImxpa2VcIixcbiAgXCJsaWtlbHlcIixcbiAgXCJsb25nXCIsXG4gIFwibG9uZ2VyXCIsXG4gIFwibG9uZ2VzdFwiLFxuICBcIm1cIixcbiAgXCJtYWRlXCIsXG4gIFwibWFrZVwiLFxuICBcIm1ha2luZ1wiLFxuICBcIm1hblwiLFxuICBcIm1hbnlcIixcbiAgXCJtYXlcIixcbiAgXCJtZVwiLFxuICBcIm1lbWJlclwiLFxuICBcIm1lbWJlcnNcIixcbiAgXCJtZW5cIixcbiAgXCJtaWdodFwiLFxuICBcIm1vcmVcIixcbiAgXCJtb3N0XCIsXG4gIFwibW9zdGx5XCIsXG4gIFwibXJcIixcbiAgXCJtcnNcIixcbiAgXCJtdWNoXCIsXG4gIFwibXVzdFwiLFxuICBcIm15XCIsXG4gIFwibXlzZWxmXCIsXG4gIFwiblwiLFxuICBcIm5lY2Vzc2FyeVwiLFxuICBcIm5lZWRcIixcbiAgXCJuZWVkZWRcIixcbiAgXCJuZWVkaW5nXCIsXG4gIFwibmVlZHNcIixcbiAgXCJuZXZlclwiLFxuICBcIm5ld1wiLFxuICBcIm5ld1wiLFxuICBcIm5ld2VyXCIsXG4gIFwibmV3ZXN0XCIsXG4gIFwibmV4dFwiLFxuICBcIm5vXCIsXG4gIFwibm9ib2R5XCIsXG4gIFwibm9uXCIsXG4gIFwibm9vbmVcIixcbiAgXCJub3RcIixcbiAgXCJub3RoaW5nXCIsXG4gIFwibm93XCIsXG4gIFwibm93aGVyZVwiLFxuICBcIm51bWJlclwiLFxuICBcIm51bWJlcnNcIixcbiAgXCJvXCIsXG4gIFwib2ZcIixcbiAgXCJvZmZcIixcbiAgXCJvZnRlblwiLFxuICBcIm9sZFwiLFxuICBcIm9sZGVyXCIsXG4gIFwib2xkZXN0XCIsXG4gIFwib25cIixcbiAgXCJvbmNlXCIsXG4gIFwib25lXCIsXG4gIFwib25seVwiLFxuICBcIm9wZW5cIixcbiAgXCJvcGVuZWRcIixcbiAgXCJvcGVuaW5nXCIsXG4gIFwib3BlbnNcIixcbiAgXCJvclwiLFxuICBcIm9yZGVyXCIsXG4gIFwib3JkZXJlZFwiLFxuICBcIm9yZGVyaW5nXCIsXG4gIFwib3JkZXJzXCIsXG4gIFwib3RoZXJcIixcbiAgXCJvdGhlcnNcIixcbiAgXCJvdXJcIixcbiAgXCJvdXRcIixcbiAgXCJvdmVyXCIsXG4gIFwicFwiLFxuICBcInBhcnRcIixcbiAgXCJwYXJ0ZWRcIixcbiAgXCJwYXJ0aW5nXCIsXG4gIFwicGFydHNcIixcbiAgXCJwZXJcIixcbiAgXCJwZXJoYXBzXCIsXG4gIFwicGxhY2VcIixcbiAgXCJwbGFjZXNcIixcbiAgXCJwb2ludFwiLFxuICBcInBvaW50ZWRcIixcbiAgXCJwb2ludGluZ1wiLFxuICBcInBvaW50c1wiLFxuICBcInBvc3NpYmxlXCIsXG4gIFwicHJlc2VudFwiLFxuICBcInByZXNlbnRlZFwiLFxuICBcInByZXNlbnRpbmdcIixcbiAgXCJwcmVzZW50c1wiLFxuICBcInByb2JsZW1cIixcbiAgXCJwcm9ibGVtc1wiLFxuICBcInB1dFwiLFxuICBcInB1dHNcIixcbiAgXCJxXCIsXG4gIFwicXVpdGVcIixcbiAgXCJyXCIsXG4gIFwicmF0aGVyXCIsXG4gIFwicmVhbGx5XCIsXG4gIFwicmlnaHRcIixcbiAgXCJyaWdodFwiLFxuICBcInJvb21cIixcbiAgXCJyb29tc1wiLFxuICBcInNcIixcbiAgXCJzYWlkXCIsXG4gIFwic2FtZVwiLFxuICBcInNhd1wiLFxuICBcInNheVwiLFxuICBcInNheXNcIixcbiAgXCJzZWNvbmRcIixcbiAgXCJzZWNvbmRzXCIsXG4gIFwic2VlXCIsXG4gIFwic2VlbVwiLFxuICBcInNlZW1lZFwiLFxuICBcInNlZW1pbmdcIixcbiAgXCJzZWVtc1wiLFxuICBcInNlZXNcIixcbiAgXCJzZXZlcmFsXCIsXG4gIFwic2hhbGxcIixcbiAgXCJzaGVcIixcbiAgXCJzaG91bGRcIixcbiAgXCJzaG93XCIsXG4gIFwic2hvd2VkXCIsXG4gIFwic2hvd2luZ1wiLFxuICBcInNob3dzXCIsXG4gIFwic2lkZVwiLFxuICBcInNpZGVzXCIsXG4gIFwic2luY2VcIixcbiAgXCJzbWFsbFwiLFxuICBcInNtYWxsZXJcIixcbiAgXCJzbWFsbGVzdFwiLFxuICBcInNvXCIsXG4gIFwic29tZVwiLFxuICBcInNvbWVib2R5XCIsXG4gIFwic29tZW9uZVwiLFxuICBcInNvbWV0aGluZ1wiLFxuICBcInNvbWV3aGVyZVwiLFxuICBcInN0YXRlXCIsXG4gIFwic3RhdGVzXCIsXG4gIFwic3RpbGxcIixcbiAgXCJzdGlsbFwiLFxuICBcInN1Y2hcIixcbiAgXCJzdXJlXCIsXG4gIFwidFwiLFxuICBcInRha2VcIixcbiAgXCJ0YWtlblwiLFxuICBcInRoYW5cIixcbiAgXCJ0aGF0XCIsXG4gIFwidGhlXCIsXG4gIFwidGhlaXJcIixcbiAgXCJ0aGVtXCIsXG4gIFwidGhlblwiLFxuICBcInRoZXJlXCIsXG4gIFwidGhlcmVmb3JlXCIsXG4gIFwidGhlc2VcIixcbiAgXCJ0aGV5XCIsXG4gIFwidGhpbmdcIixcbiAgXCJ0aGluZ3NcIixcbiAgXCJ0aGlua1wiLFxuICBcInRoaW5rc1wiLFxuICBcInRoaXNcIixcbiAgXCJ0aG9zZVwiLFxuICBcInRob3VnaFwiLFxuICBcInRob3VnaHRcIixcbiAgXCJ0aG91Z2h0c1wiLFxuICBcInRocmVlXCIsXG4gIFwidGhyb3VnaFwiLFxuICBcInRodXNcIixcbiAgXCJ0b1wiLFxuICBcInRvZGF5XCIsXG4gIFwidG9nZXRoZXJcIixcbiAgXCJ0b29cIixcbiAgXCJ0b29rXCIsXG4gIFwidG93YXJkXCIsXG4gIFwidHVyblwiLFxuICBcInR1cm5lZFwiLFxuICBcInR1cm5pbmdcIixcbiAgXCJ0dXJuc1wiLFxuICBcInR3b1wiLFxuICBcInVcIixcbiAgXCJ1bmRlclwiLFxuICBcInVudGlsXCIsXG4gIFwidXBcIixcbiAgXCJ1cG9uXCIsXG4gIFwidXNcIixcbiAgXCJ1c2VcIixcbiAgXCJ1c2VkXCIsXG4gIFwidXNlc1wiLFxuICBcInZcIixcbiAgXCJ2ZXJ5XCIsXG4gIFwid1wiLFxuICBcIndhbnRcIixcbiAgXCJ3YW50ZWRcIixcbiAgXCJ3YW50aW5nXCIsXG4gIFwid2FudHNcIixcbiAgXCJ3YXNcIixcbiAgXCJ3YXlcIixcbiAgXCJ3YXlzXCIsXG4gIFwid2VcIixcbiAgXCJ3ZWxsXCIsXG4gIFwid2VsbHNcIixcbiAgXCJ3ZW50XCIsXG4gIFwid2VyZVwiLFxuICBcIndoYXRcIixcbiAgXCJ3aGVuXCIsXG4gIFwid2hlcmVcIixcbiAgXCJ3aGV0aGVyXCIsXG4gIFwid2hpY2hcIixcbiAgXCJ3aGlsZVwiLFxuICBcIndob1wiLFxuICBcIndob2xlXCIsXG4gIFwid2hvc2VcIixcbiAgXCJ3aHlcIixcbiAgXCJ3aWxsXCIsXG4gIFwid2l0aFwiLFxuICBcIndpdGhpblwiLFxuICBcIndpdGhvdXRcIixcbiAgXCJ3b3JrXCIsXG4gIFwid29ya2VkXCIsXG4gIFwid29ya2luZ1wiLFxuICBcIndvcmtzXCIsXG4gIFwid291bGRcIixcbiAgXCJ4XCIsXG4gIFwieVwiLFxuICBcInllYXJcIixcbiAgXCJ5ZWFyc1wiLFxuICBcInlldFwiLFxuICBcInlvdVwiLFxuICBcInlvdW5nXCIsXG4gIFwieW91bmdlclwiLFxuICBcInlvdW5nZXN0XCIsXG4gIFwieW91clwiLFxuICBcInlvdXJzXCIsXG4gIFwielwiXG4pO1xuIiwiaW1wb3J0IHsgc3RvcFdvcmRzIH0gZnJvbSBcIi4vZW5nbGlzaFwiO1xuXG52YXIgc3RvcFdvcmRzRGljdGlvbmFyeTogeyBbaW5kZXg6IHN0cmluZ106IEFycmF5PHN0cmluZz4gfSA9IHt9O1xuc3RvcFdvcmRzRGljdGlvbmFyeVtcImVuXCJdID0gc3RvcFdvcmRzO1xuXG5leHBvcnQgdmFyIHRleHRIZWxwZXIgPSB7XG4gIGdldFN0b3BXb3JkczogKGxvY2FsZTogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIHJldHVybiBzdG9wV29yZHNEaWN0aW9uYXJ5W2xvY2FsZSB8fCBcImVuXCJdIHx8IFtdO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4uL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgdGV4dEhlbHBlciB9IGZyb20gXCIuL3N0b3B3b3Jkcy9pbmRleFwiO1xuaW1wb3J0IFdvcmRDbG91ZExpYiBmcm9tIFwid29yZGNsb3VkXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgV29yZENsb3VkQWRhcHRlciB7XG4gIHByaXZhdGUgX3dvcmRjbG91ZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IFdvcmRDbG91ZCkge31cblxuICBwdWJsaWMgZ2V0IHdvcmRjbG91ZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd29yZGNsb3VkO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShub2RlOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm1vZGVsLmdldERhdGEoKTtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLm1vZGVsLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGNhbnZhc05vZGUgPSA8SFRNTENhbnZhc0VsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCBcIlwiKVxuICAgICk7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IDxIVE1MRWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwicFwiLCBcIlwiLCB7XG4gICAgICBpbm5lckhUTUw6IFwiVGhlcmUgYXJlIG5vIHJlc3VsdHMgeWV0XCIsXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChjYW52YXNOb2RlKTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGxpc3Q6IGRhdGEsXG4gICAgICB3ZWlnaHRGYWN0b3I6IDIwLFxuICAgICAgZm9udEZhbWlseTogXCJTZWdvZSBVSSBCb2xkLCBzYW5zLXNlcmlmXCIsXG4gICAgICBjb2xvcjogKHdvcmQ6IHN0cmluZywgd2VpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICAgIH0sXG4gICAgICByb3RhdGVSYXRpbzogMC41LFxuICAgICAgcm90YXRpb25TdGVwczogMixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5tb2RlbC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBjbGljazogZnVuY3Rpb24gKGl0ZW06IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtWzBdICsgXCI6IFwiICsgaXRlbVsxXSk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLl93b3JkY2xvdWQgPSBXb3JkQ2xvdWRMaWIoY2FudmFzTm9kZSwgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5fd29yZGNsb3VkO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl93b3JkY2xvdWQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmRDbG91ZCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJpdmF0ZSBfd29yZGNsb3VkQWRhcHRlcjogV29yZENsb3VkQWRhcHRlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLl93b3JkY2xvdWRBZGFwdGVyID0gbmV3IFdvcmRDbG91ZEFkYXB0ZXIodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwid29yZGNsb3VkXCI7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIGxldCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcblxuICAgIGxldCBzdG9wV29yZHMgPSB0ZXh0SGVscGVyLmdldFN0b3BXb3JkcygpO1xuICAgIGxldCBzdG9wVGhlV29yZCA9ICh3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChzdG9wV29yZHMuaW5kZXhPZih3b3JkKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gd29yZDtcbiAgICB9O1xuXG4gICAgbGV0IHByb2Nlc3NTdHJpbmcgPSAocm93OiBzdHJpbmcpID0+IHtcbiAgICAgIHJvdyA9IFwiXCIgKyByb3c7XG4gICAgICBpZiAoISFyb3cpIHtcbiAgICAgICAgcm93LnNwbGl0KFwiIFwiKS5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgICAgd29yZCA9IHN0b3BUaGVXb3JkKHdvcmQudG9Mb3dlckNhc2UoKSB8fCBcIlwiKTtcbiAgICAgICAgICBpZiAoISF3b3JkKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdFt3b3JkXSkge1xuICAgICAgICAgICAgICByZXN1bHRbd29yZF0gPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0W3dvcmRdKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgaWYgKCEhcm93VmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93VmFsdWUpKSB7XG4gICAgICAgICAgcm93VmFsdWUuZm9yRWFjaChwcm9jZXNzU3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJvd1ZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb3dWYWx1ZSkuZm9yRWFjaCgoa2V5KSA9PlxuICAgICAgICAgICAgICBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlW2tleV0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXN1bHQpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gW2tleSwgcmVzdWx0W2tleV1dO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl93b3JkY2xvdWRBZGFwdGVyLmRlc3Ryb3koY29udGFpbmVyKTtcbiAgICBzdXBlci5kZXN0cm95Q29udGVudChjb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3dvcmRjbG91ZEFkYXB0ZXIuY3JlYXRlKGNvbnRhaW5lcik7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3dvcmRjbG91ZEFkYXB0ZXIuZGVzdHJveSh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgV29yZENsb3VkKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wbG90bHlfanNfZGlzdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV93b3JkY2xvdWRfXzsiXSwic291cmNlUm9vdCI6IiJ9