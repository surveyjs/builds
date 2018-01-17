(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/bootstrap-slider", ["jquery"], factory);
	else if(typeof exports === 'object')
		exports["widgets/bootstrap-slider"] = factory(require("jquery"));
	else
		root["widgets/bootstrap-slider"] = factory(root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Slider = __webpack_require__(19);

function init(Survey) {
  var widget = {
    name: "bootstrap-slider",
    title: "Bootstrap Slider",
    iconName: "icon-bootstrap-slider",
    widgetIsLoaded: function() {
      return typeof Slider != "undefined";
    },
    isFit: function(question) {
      return question.getType() === "bootstrapslider";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("bootstrapslider", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("bootstrapslider", [
        {
          name: "step:number",
          default: 1
        },
        {
          name: "rangeMin:number",
          default: 0
        },
        {
          name: "rangeMax:number",
          default: 100
        }
      ]);
    },
    afterRender: function(question, el) {
      var inputEl = document.createElement("input");
      inputEl.id = question.id;
      inputEl.type = "text";
      inputEl.setAttribute("data-slider-id", question.name + "_" + question.id);
      inputEl.setAttribute("data-slider-min", question.rangeMin);
      inputEl.setAttribute("data-slider-max", question.rangeMax);
      inputEl.setAttribute("data-slider-step", question.step);
      inputEl.setAttribute("data-slider-value", question.value || question.rangeMin);
      el.appendChild(inputEl);
      var slider = new Slider(inputEl, {
        id: question.name + "_" + question.id,
        min: question.rangeMin,
        max: question.rangeMax,
        step: question.step,
        value: question.value || question.rangeMin
      });

      slider.on("change", function(valueObj) {
        question.value = slider.getValue();
      });
      var updateValueHandler = function() {
        slider.setValue(question.value || question.rangeMin);
      };
      question.bootstrapSlider = slider;
      question.valueChangedCallback = updateValueHandler;
    },
    willUnmount: function(question, el) {
      question.bootstrapSlider.destroy();
      question.bootstrapSlider = null;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! =======================================================
                      VERSION  10.0.0              
========================================================= */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *		Kyle Kemp
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * bootstrap-slider is released under the MIT License
 * Copyright (c) 2017 Kyle Kemp, Rohit Kalkur, and contributors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * ========================================================= */

/**
 * Bridget makes jQuery widgets
 * v1.0.1
 * MIT license
 */
var windowIsDefined = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";

(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
		var jQuery;
		try {
			jQuery = require("jquery");
		} catch (err) {
			jQuery = null;
		}
		module.exports = factory(jQuery);
	} else if (window) {
		window.Slider = factory(window.jQuery);
	}
})(function ($) {
	// Constants
	var NAMESPACE_MAIN = 'slider';
	var NAMESPACE_ALTERNATE = 'bootstrapSlider';

	// Polyfill console methods
	if (windowIsDefined && !window.console) {
		window.console = {};
	}
	if (windowIsDefined && !window.console.log) {
		window.console.log = function () {};
	}
	if (windowIsDefined && !window.console.warn) {
		window.console.warn = function () {};
	}

	// Reference to Slider constructor
	var Slider;

	(function ($) {

		'use strict';

		// -------------------------- utils -------------------------- //

		var slice = Array.prototype.slice;

		function noop() {}

		// -------------------------- definition -------------------------- //

		function defineBridget($) {

			// bail if no jQuery
			if (!$) {
				return;
			}

			// -------------------------- addOptionMethod -------------------------- //

			/**
    * adds option method -> $().plugin('option', {...})
    * @param {Function} PluginClass - constructor class
    */
			function addOptionMethod(PluginClass) {
				// don't overwrite original option method
				if (PluginClass.prototype.option) {
					return;
				}

				// option setter
				PluginClass.prototype.option = function (opts) {
					// bail out if not an object
					if (!$.isPlainObject(opts)) {
						return;
					}
					this.options = $.extend(true, this.options, opts);
				};
			}

			// -------------------------- plugin bridge -------------------------- //

			// helper function for logging errors
			// $.error breaks jQuery chaining
			var logError = typeof console === 'undefined' ? noop : function (message) {
				console.error(message);
			};

			/**
    * jQuery plugin bridge, access methods like $elem.plugin('method')
    * @param {String} namespace - plugin name
    * @param {Function} PluginClass - constructor class
    */
			function bridge(namespace, PluginClass) {
				// add to jQuery fn namespace
				$.fn[namespace] = function (options) {
					if (typeof options === 'string') {
						// call plugin method when first argument is a string
						// get arguments for method
						var args = slice.call(arguments, 1);

						for (var i = 0, len = this.length; i < len; i++) {
							var elem = this[i];
							var instance = $.data(elem, namespace);
							if (!instance) {
								logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'");
								continue;
							}
							if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
								logError("no such method '" + options + "' for " + namespace + " instance");
								continue;
							}

							// trigger method with arguments
							var returnValue = instance[options].apply(instance, args);

							// break look and return first value if provided
							if (returnValue !== undefined && returnValue !== instance) {
								return returnValue;
							}
						}
						// return this if no return value
						return this;
					} else {
						var objects = this.map(function () {
							var instance = $.data(this, namespace);
							if (instance) {
								// apply options & init
								instance.option(options);
								instance._init();
							} else {
								// initialize new instance
								instance = new PluginClass(this, options);
								$.data(this, namespace, instance);
							}
							return $(this);
						});

						if (!objects || objects.length > 1) {
							return objects;
						} else {
							return objects[0];
						}
					}
				};
			}

			// -------------------------- bridget -------------------------- //

			/**
    * converts a Prototypical class into a proper jQuery plugin
    *   the class must have a ._init method
    * @param {String} namespace - plugin name, used in $().pluginName
    * @param {Function} PluginClass - constructor class
    */
			$.bridget = function (namespace, PluginClass) {
				addOptionMethod(PluginClass);
				bridge(namespace, PluginClass);
			};

			return $.bridget;
		}

		// get jquery from browser global
		defineBridget($);
	})($);

	/*************************************************
 			BOOTSTRAP-SLIDER SOURCE CODE
 	**************************************************/

	(function ($) {

		var ErrorMsgs = {
			formatInvalidInputErrorMsg: function formatInvalidInputErrorMsg(input) {
				return "Invalid input value '" + input + "' passed in";
			},
			callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
		};

		var SliderScale = {
			linear: {
				toValue: function toValue(percentage) {
					var rawValue = percentage / 100 * (this.options.max - this.options.min);
					var shouldAdjustWithBase = true;
					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 1; i < this.options.ticks_positions.length; i++) {
							if (percentage <= this.options.ticks_positions[i]) {
								minv = this.options.ticks[i - 1];
								minp = this.options.ticks_positions[i - 1];
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						var partialPercentage = (percentage - minp) / (maxp - minp);
						rawValue = minv + partialPercentage * (maxv - minv);
						shouldAdjustWithBase = false;
					}

					var adjustment = shouldAdjustWithBase ? this.options.min : 0;
					var value = adjustment + Math.round(rawValue / this.options.step) * this.options.step;
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					}

					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 0; i < this.options.ticks.length; i++) {
							if (value <= this.options.ticks[i]) {
								minv = i > 0 ? this.options.ticks[i - 1] : 0;
								minp = i > 0 ? this.options.ticks_positions[i - 1] : 0;
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						if (i > 0) {
							var partialPercentage = (value - minv) / (maxv - minv);
							return minp + partialPercentage * (maxp - minp);
						}
					}

					return 100 * (value - this.options.min) / (this.options.max - this.options.min);
				}
			},

			logarithmic: {
				/* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
				toValue: function toValue(percentage) {
					var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
					var max = Math.log(this.options.max);
					var value = Math.exp(min + (max - min) * percentage / 100);
					if (Math.round(value) === this.options.max) {
						return this.options.max;
					}
					value = this.options.min + Math.round((value - this.options.min) / this.options.step) * this.options.step;
					/* Rounding to the nearest step could exceed the min or
      * max, so clip to those values. */
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					} else {
						var max = Math.log(this.options.max);
						var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
						var v = value === 0 ? 0 : Math.log(value);
						return 100 * (v - min) / (max - min);
					}
				}
			}
		};

		/*************************************************
  						CONSTRUCTOR
  	**************************************************/
		Slider = function Slider(element, options) {
			createNewSlider.call(this, element, options);
			return this;
		};

		function createNewSlider(element, options) {

			/*
   	The internal state object is used to store data about the current 'state' of slider.
   	This includes values such as the `value`, `enabled`, etc...
   */
			this._state = {
				value: null,
				enabled: null,
				offset: null,
				size: null,
				percentage: null,
				inDrag: false,
				over: false
			};

			// The objects used to store the reference to the tick methods if ticks_tooltip is on
			this.ticksCallbackMap = {};
			this.handleCallbackMap = {};

			if (typeof element === "string") {
				this.element = document.querySelector(element);
			} else if (element instanceof HTMLElement) {
				this.element = element;
			}

			/*************************************************
   					Process Options
   	**************************************************/
			options = options ? options : {};
			var optionTypes = Object.keys(this.defaultOptions);

			for (var i = 0; i < optionTypes.length; i++) {
				var optName = optionTypes[i];

				// First check if an option was passed in via the constructor
				var val = options[optName];
				// If no data attrib, then check data atrributes
				val = typeof val !== 'undefined' ? val : getDataAttrib(this.element, optName);
				// Finally, if nothing was specified, use the defaults
				val = val !== null ? val : this.defaultOptions[optName];

				// Set all options on the instance of the Slider
				if (!this.options) {
					this.options = {};
				}
				this.options[optName] = val;
			}

			// Check options.rtl
			if (this.options.rtl === 'auto') {
				this.options.rtl = window.getComputedStyle(this.element).direction === 'rtl';
			}

			/*
   	Validate `tooltip_position` against 'orientation`
   	- if `tooltip_position` is incompatible with orientation, swith it to a default compatible with specified `orientation`
   		-- default for "vertical" -> "right", "left" if rtl
   		-- default for "horizontal" -> "top"
   */
			if (this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom")) {
				if (this.options.rtl) {
					this.options.tooltip_position = "left";
				} else {
					this.options.tooltip_position = "right";
				}
			} else if (this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right")) {

				this.options.tooltip_position = "top";
			}

			function getDataAttrib(element, optName) {
				var dataName = "data-slider-" + optName.replace(/_/g, '-');
				var dataValString = element.getAttribute(dataName);

				try {
					return JSON.parse(dataValString);
				} catch (err) {
					return dataValString;
				}
			}

			/*************************************************
   					Create Markup
   	**************************************************/

			var origWidth = this.element.style.width;
			var updateSlider = false;
			var parent = this.element.parentNode;
			var sliderTrackSelection;
			var sliderTrackLow, sliderTrackHigh;
			var sliderMinHandle;
			var sliderMaxHandle;

			if (this.sliderElem) {
				updateSlider = true;
			} else {
				/* Create elements needed for slider */
				this.sliderElem = document.createElement("div");
				this.sliderElem.className = "slider";

				/* Create slider track elements */
				var sliderTrack = document.createElement("div");
				sliderTrack.className = "slider-track";

				sliderTrackLow = document.createElement("div");
				sliderTrackLow.className = "slider-track-low";

				sliderTrackSelection = document.createElement("div");
				sliderTrackSelection.className = "slider-selection";

				sliderTrackHigh = document.createElement("div");
				sliderTrackHigh.className = "slider-track-high";

				sliderMinHandle = document.createElement("div");
				sliderMinHandle.className = "slider-handle min-slider-handle";
				sliderMinHandle.setAttribute('role', 'slider');
				sliderMinHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMinHandle.setAttribute('aria-valuemax', this.options.max);

				sliderMaxHandle = document.createElement("div");
				sliderMaxHandle.className = "slider-handle max-slider-handle";
				sliderMaxHandle.setAttribute('role', 'slider');
				sliderMaxHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMaxHandle.setAttribute('aria-valuemax', this.options.max);

				sliderTrack.appendChild(sliderTrackLow);
				sliderTrack.appendChild(sliderTrackSelection);
				sliderTrack.appendChild(sliderTrackHigh);

				/* Create highlight range elements */
				this.rangeHighlightElements = [];
				var rangeHighlightsOpts = this.options.rangeHighlights;
				if (Array.isArray(rangeHighlightsOpts) && rangeHighlightsOpts.length > 0) {
					for (var j = 0; j < rangeHighlightsOpts.length; j++) {
						var rangeHighlightElement = document.createElement("div");
						var customClassString = rangeHighlightsOpts[j].class || "";
						rangeHighlightElement.className = "slider-rangeHighlight slider-selection " + customClassString;
						this.rangeHighlightElements.push(rangeHighlightElement);
						sliderTrack.appendChild(rangeHighlightElement);
					}
				}

				/* Add aria-labelledby to handle's */
				var isLabelledbyArray = Array.isArray(this.options.labelledby);
				if (isLabelledbyArray && this.options.labelledby[0]) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby[0]);
				}
				if (isLabelledbyArray && this.options.labelledby[1]) {
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby[1]);
				}
				if (!isLabelledbyArray && this.options.labelledby) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby);
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby);
				}

				/* Create ticks */
				this.ticks = [];
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
					this.ticksContainer = document.createElement('div');
					this.ticksContainer.className = 'slider-tick-container';

					for (i = 0; i < this.options.ticks.length; i++) {
						var tick = document.createElement('div');
						tick.className = 'slider-tick';
						if (this.options.ticks_tooltip) {
							var tickListenerReference = this._addTickListener();
							var enterCallback = tickListenerReference.addMouseEnter(this, tick, i);
							var leaveCallback = tickListenerReference.addMouseLeave(this, tick);

							this.ticksCallbackMap[i] = {
								mouseEnter: enterCallback,
								mouseLeave: leaveCallback
							};
						}
						this.ticks.push(tick);
						this.ticksContainer.appendChild(tick);
					}

					sliderTrackSelection.className += " tick-slider-selection";
				}

				this.tickLabels = [];
				if (Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) {
					this.tickLabelContainer = document.createElement('div');
					this.tickLabelContainer.className = 'slider-tick-label-container';

					for (i = 0; i < this.options.ticks_labels.length; i++) {
						var label = document.createElement('div');
						var noTickPositionsSpecified = this.options.ticks_positions.length === 0;
						var tickLabelsIndex = this.options.reversed && noTickPositionsSpecified ? this.options.ticks_labels.length - (i + 1) : i;
						label.className = 'slider-tick-label';
						label.innerHTML = this.options.ticks_labels[tickLabelsIndex];

						this.tickLabels.push(label);
						this.tickLabelContainer.appendChild(label);
					}
				}

				var createAndAppendTooltipSubElements = function createAndAppendTooltipSubElements(tooltipElem) {
					var arrow = document.createElement("div");
					arrow.className = "tooltip-arrow";

					var inner = document.createElement("div");
					inner.className = "tooltip-inner";

					tooltipElem.appendChild(arrow);
					tooltipElem.appendChild(inner);
				};

				/* Create tooltip elements */
				var sliderTooltip = document.createElement("div");
				sliderTooltip.className = "tooltip tooltip-main";
				sliderTooltip.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltip);

				var sliderTooltipMin = document.createElement("div");
				sliderTooltipMin.className = "tooltip tooltip-min";
				sliderTooltipMin.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMin);

				var sliderTooltipMax = document.createElement("div");
				sliderTooltipMax.className = "tooltip tooltip-max";
				sliderTooltipMax.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMax);

				/* Append components to sliderElem */
				this.sliderElem.appendChild(sliderTrack);
				this.sliderElem.appendChild(sliderTooltip);
				this.sliderElem.appendChild(sliderTooltipMin);
				this.sliderElem.appendChild(sliderTooltipMax);

				if (this.tickLabelContainer) {
					this.sliderElem.appendChild(this.tickLabelContainer);
				}
				if (this.ticksContainer) {
					this.sliderElem.appendChild(this.ticksContainer);
				}

				this.sliderElem.appendChild(sliderMinHandle);
				this.sliderElem.appendChild(sliderMaxHandle);

				/* Append slider element to parent container, right before the original <input> element */
				parent.insertBefore(this.sliderElem, this.element);

				/* Hide original <input> element */
				this.element.style.display = "none";
			}
			/* If JQuery exists, cache JQ references */
			if ($) {
				this.$element = $(this.element);
				this.$sliderElem = $(this.sliderElem);
			}

			/*************************************************
   						Setup
   	**************************************************/
			this.eventToCallbackMap = {};
			this.sliderElem.id = this.options.id;

			this.touchCapable = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;

			this.touchX = 0;
			this.touchY = 0;

			this.tooltip = this.sliderElem.querySelector('.tooltip-main');
			this.tooltipInner = this.tooltip.querySelector('.tooltip-inner');

			this.tooltip_min = this.sliderElem.querySelector('.tooltip-min');
			this.tooltipInner_min = this.tooltip_min.querySelector('.tooltip-inner');

			this.tooltip_max = this.sliderElem.querySelector('.tooltip-max');
			this.tooltipInner_max = this.tooltip_max.querySelector('.tooltip-inner');

			if (SliderScale[this.options.scale]) {
				this.options.scale = SliderScale[this.options.scale];
			}

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.sliderElem, 'slider-horizontal');
				this._removeClass(this.sliderElem, 'slider-vertical');
				this._removeClass(this.sliderElem, 'slider-rtl');
				this._removeClass(this.tooltip, 'hide');
				this._removeClass(this.tooltip_min, 'hide');
				this._removeClass(this.tooltip_max, 'hide');

				// Undo existing inline styles for track
				["left", "right", "top", "width", "height"].forEach(function (prop) {
					this._removeProperty(this.trackLow, prop);
					this._removeProperty(this.trackSelection, prop);
					this._removeProperty(this.trackHigh, prop);
				}, this);

				// Undo inline styles on handles
				[this.handle1, this.handle2].forEach(function (handle) {
					this._removeProperty(handle, 'left');
					this._removeProperty(handle, 'right');
					this._removeProperty(handle, 'top');
				}, this);

				// Undo inline styles and classes on tooltips
				[this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (tooltip) {
					this._removeProperty(tooltip, 'left');
					this._removeProperty(tooltip, 'right');
					this._removeProperty(tooltip, 'top');

					this._removeClass(tooltip, 'right');
					this._removeClass(tooltip, 'left');
					this._removeClass(tooltip, 'top');
				}, this);
			}

			if (this.options.orientation === 'vertical') {
				this._addClass(this.sliderElem, 'slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
			} else {
				this._addClass(this.sliderElem, 'slider-horizontal');
				this.sliderElem.style.width = origWidth;
				this.options.orientation = 'horizontal';
				if (this.options.rtl) {
					this.stylePos = 'right';
				} else {
					this.stylePos = 'left';
				}
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
			}
			// specific rtl class
			if (this.options.rtl) {
				this._addClass(this.sliderElem, 'slider-rtl');
			}
			this._setTooltipPosition();
			/* In case ticks are specified, overwrite the min and max bounds */
			if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
				this.options.max = Math.max.apply(Math, this.options.ticks);
				this.options.min = Math.min.apply(Math, this.options.ticks);
			}

			if (Array.isArray(this.options.value)) {
				this.options.range = true;
				this._state.value = this.options.value;
			} else if (this.options.range) {
				// User wants a range, but value is not an array
				this._state.value = [this.options.value, this.options.max];
			} else {
				this._state.value = this.options.value;
			}

			this.trackLow = sliderTrackLow || this.trackLow;
			this.trackSelection = sliderTrackSelection || this.trackSelection;
			this.trackHigh = sliderTrackHigh || this.trackHigh;

			if (this.options.selection === 'none') {
				this._addClass(this.trackLow, 'hide');
				this._addClass(this.trackSelection, 'hide');
				this._addClass(this.trackHigh, 'hide');
			} else if (this.options.selection === 'after' || this.options.selection === 'before') {
				this._removeClass(this.trackLow, 'hide');
				this._removeClass(this.trackSelection, 'hide');
				this._removeClass(this.trackHigh, 'hide');
			}

			this.handle1 = sliderMinHandle || this.handle1;
			this.handle2 = sliderMaxHandle || this.handle2;

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.handle1, 'round triangle');
				this._removeClass(this.handle2, 'round triangle hide');

				for (i = 0; i < this.ticks.length; i++) {
					this._removeClass(this.ticks[i], 'round triangle hide');
				}
			}

			var availableHandleModifiers = ['round', 'triangle', 'custom'];
			var isValidHandleType = availableHandleModifiers.indexOf(this.options.handle) !== -1;
			if (isValidHandleType) {
				this._addClass(this.handle1, this.options.handle);
				this._addClass(this.handle2, this.options.handle);

				for (i = 0; i < this.ticks.length; i++) {
					this._addClass(this.ticks[i], this.options.handle);
				}
			}

			this._state.offset = this._offset(this.sliderElem);
			this._state.size = this.sliderElem[this.sizePos];
			this.setValue(this._state.value);

			/******************************************
   				Bind Event Listeners
   	******************************************/

			// Bind keyboard handlers
			this.handle1Keydown = this._keydown.bind(this, 0);
			this.handle1.addEventListener("keydown", this.handle1Keydown, false);

			this.handle2Keydown = this._keydown.bind(this, 1);
			this.handle2.addEventListener("keydown", this.handle2Keydown, false);

			this.mousedown = this._mousedown.bind(this);
			this.touchstart = this._touchstart.bind(this);
			this.touchmove = this._touchmove.bind(this);

			if (this.touchCapable) {
				// Test for passive event support
				var supportsPassive = false;
				try {
					var opts = Object.defineProperty({}, 'passive', {
						get: function get() {
							supportsPassive = true;
						}
					});
					window.addEventListener("test", null, opts);
				} catch (e) {}
				// Use our detect's results. passive applied if supported, capture will be false either way.
				var eventOptions = supportsPassive ? { passive: true } : false;
				// Bind touch handlers
				this.sliderElem.addEventListener("touchstart", this.touchstart, eventOptions);
				this.sliderElem.addEventListener("touchmove", this.touchmove, eventOptions);
			}
			this.sliderElem.addEventListener("mousedown", this.mousedown, false);

			// Bind window handlers
			this.resize = this._resize.bind(this);
			window.addEventListener("resize", this.resize, false);

			// Bind tooltip-related handlers
			if (this.options.tooltip === 'hide') {
				this._addClass(this.tooltip, 'hide');
				this._addClass(this.tooltip_min, 'hide');
				this._addClass(this.tooltip_max, 'hide');
			} else if (this.options.tooltip === 'always') {
				this._showTooltip();
				this._alwaysShowTooltip = true;
			} else {
				this.showTooltip = this._showTooltip.bind(this);
				this.hideTooltip = this._hideTooltip.bind(this);

				if (this.options.ticks_tooltip) {
					var callbackHandle = this._addTickListener();
					//create handle1 listeners and store references in map
					var mouseEnter = callbackHandle.addMouseEnter(this, this.handle1);
					var mouseLeave = callbackHandle.addMouseLeave(this, this.handle1);
					this.handleCallbackMap.handle1 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
					//create handle2 listeners and store references in map
					mouseEnter = callbackHandle.addMouseEnter(this, this.handle2);
					mouseLeave = callbackHandle.addMouseLeave(this, this.handle2);
					this.handleCallbackMap.handle2 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
				} else {
					this.sliderElem.addEventListener("mouseenter", this.showTooltip, false);
					this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false);
				}

				this.handle1.addEventListener("focus", this.showTooltip, false);
				this.handle1.addEventListener("blur", this.hideTooltip, false);

				this.handle2.addEventListener("focus", this.showTooltip, false);
				this.handle2.addEventListener("blur", this.hideTooltip, false);
			}

			if (this.options.enabled) {
				this.enable();
			} else {
				this.disable();
			}
		}

		/*************************************************
  				INSTANCE PROPERTIES/METHODS
  	- Any methods bound to the prototype are considered
  part of the plugin's `public` interface
  	**************************************************/
		Slider.prototype = {
			_init: function _init() {}, // NOTE: Must exist to support bridget

			constructor: Slider,

			defaultOptions: {
				id: "",
				min: 0,
				max: 10,
				step: 1,
				precision: 0,
				orientation: 'horizontal',
				value: 5,
				range: false,
				selection: 'before',
				tooltip: 'show',
				tooltip_split: false,
				handle: 'round',
				reversed: false,
				rtl: 'auto',
				enabled: true,
				formatter: function formatter(val) {
					if (Array.isArray(val)) {
						return val[0] + " : " + val[1];
					} else {
						return val;
					}
				},
				natural_arrow_keys: false,
				ticks: [],
				ticks_positions: [],
				ticks_labels: [],
				ticks_snap_bounds: 0,
				ticks_tooltip: false,
				scale: 'linear',
				focus: false,
				tooltip_position: null,
				labelledby: null,
				rangeHighlights: []
			},

			getElement: function getElement() {
				return this.sliderElem;
			},

			getValue: function getValue() {
				if (this.options.range) {
					return this._state.value;
				} else {
					return this._state.value[0];
				}
			},

			setValue: function setValue(val, triggerSlideEvent, triggerChangeEvent) {
				if (!val) {
					val = 0;
				}
				var oldValue = this.getValue();
				this._state.value = this._validateInputValue(val);
				var applyPrecision = this._applyPrecision.bind(this);

				if (this.options.range) {
					this._state.value[0] = applyPrecision(this._state.value[0]);
					this._state.value[1] = applyPrecision(this._state.value[1]);

					this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0]));
					this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]));
				} else {
					this._state.value = applyPrecision(this._state.value);
					this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))];
					this._addClass(this.handle2, 'hide');
					if (this.options.selection === 'after') {
						this._state.value[1] = this.options.max;
					} else {
						this._state.value[1] = this.options.min;
					}
				}

				if (this.options.max > this.options.min) {
					this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)];
				} else {
					this._state.percentage = [0, 0, 100];
				}

				this._layout();
				var newValue = this.options.range ? this._state.value : this._state.value[0];

				this._setDataVal(newValue);
				if (triggerSlideEvent === true) {
					this._trigger('slide', newValue);
				}
				if (oldValue !== newValue && triggerChangeEvent === true) {
					this._trigger('change', {
						oldValue: oldValue,
						newValue: newValue
					});
				}

				return this;
			},

			destroy: function destroy() {
				// Remove event handlers on slider elements
				this._removeSliderEventHandlers();

				// Remove the slider from the DOM
				this.sliderElem.parentNode.removeChild(this.sliderElem);
				/* Show original <input> element */
				this.element.style.display = "";

				// Clear out custom event bindings
				this._cleanUpEventCallbacksMap();

				// Remove data values
				this.element.removeAttribute("data");

				// Remove JQuery handlers/data
				if ($) {
					this._unbindJQueryEventHandlers();
					this.$element.removeData('slider');
				}
			},

			disable: function disable() {
				this._state.enabled = false;
				this.handle1.removeAttribute("tabindex");
				this.handle2.removeAttribute("tabindex");
				this._addClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideDisabled');

				return this;
			},

			enable: function enable() {
				this._state.enabled = true;
				this.handle1.setAttribute("tabindex", 0);
				this.handle2.setAttribute("tabindex", 0);
				this._removeClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideEnabled');

				return this;
			},

			toggle: function toggle() {
				if (this._state.enabled) {
					this.disable();
				} else {
					this.enable();
				}
				return this;
			},

			isEnabled: function isEnabled() {
				return this._state.enabled;
			},

			on: function on(evt, callback) {
				this._bindNonQueryEventHandler(evt, callback);
				return this;
			},

			off: function off(evt, callback) {
				if ($) {
					this.$element.off(evt, callback);
					this.$sliderElem.off(evt, callback);
				} else {
					this._unbindNonQueryEventHandler(evt, callback);
				}
			},

			getAttribute: function getAttribute(attribute) {
				if (attribute) {
					return this.options[attribute];
				} else {
					return this.options;
				}
			},

			setAttribute: function setAttribute(attribute, value) {
				this.options[attribute] = value;
				return this;
			},

			refresh: function refresh() {
				this._removeSliderEventHandlers();
				createNewSlider.call(this, this.element, this.options);
				if ($) {
					// Bind new instance of slider to the element
					$.data(this.element, 'slider', this);
				}
				return this;
			},

			relayout: function relayout() {
				this._resize();
				this._layout();
				return this;
			},

			/******************************+
   				HELPERS
   	- Any method that is not part of the public interface.
   - Place it underneath this comment block and write its signature like so:
   		_fnName : function() {...}
   	********************************/
			_removeSliderEventHandlers: function _removeSliderEventHandlers() {
				// Remove keydown event listeners
				this.handle1.removeEventListener("keydown", this.handle1Keydown, false);
				this.handle2.removeEventListener("keydown", this.handle2Keydown, false);

				//remove the listeners from the ticks and handles if they had their own listeners
				if (this.options.ticks_tooltip) {
					var ticks = this.ticksContainer.getElementsByClassName('slider-tick');
					for (var i = 0; i < ticks.length; i++) {
						ticks[i].removeEventListener('mouseenter', this.ticksCallbackMap[i].mouseEnter, false);
						ticks[i].removeEventListener('mouseleave', this.ticksCallbackMap[i].mouseLeave, false);
					}
					this.handle1.removeEventListener('mouseenter', this.handleCallbackMap.handle1.mouseEnter, false);
					this.handle2.removeEventListener('mouseenter', this.handleCallbackMap.handle2.mouseEnter, false);
					this.handle1.removeEventListener('mouseleave', this.handleCallbackMap.handle1.mouseLeave, false);
					this.handle2.removeEventListener('mouseleave', this.handleCallbackMap.handle2.mouseLeave, false);
				}

				this.handleCallbackMap = null;
				this.ticksCallbackMap = null;

				if (this.showTooltip) {
					this.handle1.removeEventListener("focus", this.showTooltip, false);
					this.handle2.removeEventListener("focus", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.handle1.removeEventListener("blur", this.hideTooltip, false);
					this.handle2.removeEventListener("blur", this.hideTooltip, false);
				}

				// Remove event listeners from sliderElem
				if (this.showTooltip) {
					this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false);
				}
				this.sliderElem.removeEventListener("touchstart", this.touchstart, false);
				this.sliderElem.removeEventListener("touchmove", this.touchmove, false);
				this.sliderElem.removeEventListener("mousedown", this.mousedown, false);

				// Remove window event listener
				window.removeEventListener("resize", this.resize, false);
			},
			_bindNonQueryEventHandler: function _bindNonQueryEventHandler(evt, callback) {
				if (this.eventToCallbackMap[evt] === undefined) {
					this.eventToCallbackMap[evt] = [];
				}
				this.eventToCallbackMap[evt].push(callback);
			},
			_unbindNonQueryEventHandler: function _unbindNonQueryEventHandler(evt, callback) {
				var callbacks = this.eventToCallbackMap[evt];
				if (callbacks !== undefined) {
					for (var i = 0; i < callbacks.length; i++) {
						if (callbacks[i] === callback) {
							callbacks.splice(i, 1);
							break;
						}
					}
				}
			},
			_cleanUpEventCallbacksMap: function _cleanUpEventCallbacksMap() {
				var eventNames = Object.keys(this.eventToCallbackMap);
				for (var i = 0; i < eventNames.length; i++) {
					var eventName = eventNames[i];
					delete this.eventToCallbackMap[eventName];
				}
			},
			_showTooltip: function _showTooltip() {
				if (this.options.tooltip_split === false) {
					this._addClass(this.tooltip, 'in');
					this.tooltip_min.style.display = 'none';
					this.tooltip_max.style.display = 'none';
				} else {
					this._addClass(this.tooltip_min, 'in');
					this._addClass(this.tooltip_max, 'in');
					this.tooltip.style.display = 'none';
				}
				this._state.over = true;
			},
			_hideTooltip: function _hideTooltip() {
				if (this._state.inDrag === false && this.alwaysShowTooltip !== true) {
					this._removeClass(this.tooltip, 'in');
					this._removeClass(this.tooltip_min, 'in');
					this._removeClass(this.tooltip_max, 'in');
				}
				this._state.over = false;
			},
			_setToolTipOnMouseOver: function _setToolTipOnMouseOver(tempState) {
				var formattedTooltipVal = this.options.formatter(!tempState ? this._state.value[0] : tempState.value[0]);
				var positionPercentages = !tempState ? getPositionPercentages(this._state, this.options.reversed) : getPositionPercentages(tempState, this.options.reversed);
				this._setText(this.tooltipInner, formattedTooltipVal);

				this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";

				function getPositionPercentages(state, reversed) {
					if (reversed) {
						return [100 - state.percentage[0], this.options.range ? 100 - state.percentage[1] : state.percentage[1]];
					}
					return [state.percentage[0], state.percentage[1]];
				}
			},
			_addTickListener: function _addTickListener() {
				return {
					addMouseEnter: function addMouseEnter(reference, tick, index) {
						var enter = function enter() {
							var tempState = reference._state;
							var idString = index >= 0 ? index : this.attributes['aria-valuenow'].value;
							var hoverIndex = parseInt(idString, 10);
							tempState.value[0] = hoverIndex;
							tempState.percentage[0] = reference.options.ticks_positions[hoverIndex];
							reference._setToolTipOnMouseOver(tempState);
							reference._showTooltip();
						};
						tick.addEventListener("mouseenter", enter, false);
						return enter;
					},
					addMouseLeave: function addMouseLeave(reference, tick) {
						var leave = function leave() {
							reference._hideTooltip();
						};
						tick.addEventListener("mouseleave", leave, false);
						return leave;
					}
				};
			},
			_layout: function _layout() {
				var positionPercentages;

				if (this.options.reversed) {
					positionPercentages = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]];
				} else {
					positionPercentages = [this._state.percentage[0], this._state.percentage[1]];
				}

				this.handle1.style[this.stylePos] = positionPercentages[0] + "%";
				this.handle1.setAttribute('aria-valuenow', this._state.value[0]);
				if (isNaN(this.options.formatter(this._state.value[0]))) {
					this.handle1.setAttribute('aria-valuetext', this.options.formatter(this._state.value[0]));
				}

				this.handle2.style[this.stylePos] = positionPercentages[1] + "%";
				this.handle2.setAttribute('aria-valuenow', this._state.value[1]);
				if (isNaN(this.options.formatter(this._state.value[1]))) {
					this.handle2.setAttribute('aria-valuetext', this.options.formatter(this._state.value[1]));
				}

				/* Position highlight range elements */
				if (this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) {
					for (var _i = 0; _i < this.options.rangeHighlights.length; _i++) {
						var startPercent = this._toPercentage(this.options.rangeHighlights[_i].start);
						var endPercent = this._toPercentage(this.options.rangeHighlights[_i].end);

						if (this.options.reversed) {
							var sp = 100 - endPercent;
							endPercent = 100 - startPercent;
							startPercent = sp;
						}

						var currentRange = this._createHighlightRange(startPercent, endPercent);

						if (currentRange) {
							if (this.options.orientation === 'vertical') {
								this.rangeHighlightElements[_i].style.top = currentRange.start + "%";
								this.rangeHighlightElements[_i].style.height = currentRange.size + "%";
							} else {
								if (this.options.rtl) {
									this.rangeHighlightElements[_i].style.right = currentRange.start + "%";
								} else {
									this.rangeHighlightElements[_i].style.left = currentRange.start + "%";
								}
								this.rangeHighlightElements[_i].style.width = currentRange.size + "%";
							}
						} else {
							this.rangeHighlightElements[_i].style.display = "none";
						}
					}
				}

				/* Position ticks and labels */
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {

					var styleSize = this.options.orientation === 'vertical' ? 'height' : 'width';
					var styleMargin;
					if (this.options.orientation === 'vertical') {
						styleMargin = 'marginTop';
					} else {
						if (this.options.rtl) {
							styleMargin = 'marginRight';
						} else {
							styleMargin = 'marginLeft';
						}
					}
					var labelSize = this._state.size / (this.options.ticks.length - 1);

					if (this.tickLabelContainer) {
						var extraMargin = 0;
						if (this.options.ticks_positions.length === 0) {
							if (this.options.orientation !== 'vertical') {
								this.tickLabelContainer.style[styleMargin] = -labelSize / 2 + "px";
							}

							extraMargin = this.tickLabelContainer.offsetHeight;
						} else {
							/* Chidren are position absolute, calculate height by finding the max offsetHeight of a child */
							for (i = 0; i < this.tickLabelContainer.childNodes.length; i++) {
								if (this.tickLabelContainer.childNodes[i].offsetHeight > extraMargin) {
									extraMargin = this.tickLabelContainer.childNodes[i].offsetHeight;
								}
							}
						}
						if (this.options.orientation === 'horizontal') {
							this.sliderElem.style.marginBottom = extraMargin + "px";
						}
					}
					for (var i = 0; i < this.options.ticks.length; i++) {

						var percentage = this.options.ticks_positions[i] || this._toPercentage(this.options.ticks[i]);

						if (this.options.reversed) {
							percentage = 100 - percentage;
						}

						this.ticks[i].style[this.stylePos] = percentage + "%";

						/* Set class labels to denote whether ticks are in the selection */
						this._removeClass(this.ticks[i], 'in-selection');
						if (!this.options.range) {
							if (this.options.selection === 'after' && percentage >= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							} else if (this.options.selection === 'before' && percentage <= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							}
						} else if (percentage >= positionPercentages[0] && percentage <= positionPercentages[1]) {
							this._addClass(this.ticks[i], 'in-selection');
						}

						if (this.tickLabels[i]) {
							this.tickLabels[i].style[styleSize] = labelSize + "px";

							if (this.options.orientation !== 'vertical' && this.options.ticks_positions[i] !== undefined) {
								this.tickLabels[i].style.position = 'absolute';
								this.tickLabels[i].style[this.stylePos] = percentage + "%";
								this.tickLabels[i].style[styleMargin] = -labelSize / 2 + 'px';
							} else if (this.options.orientation === 'vertical') {
								if (this.options.rtl) {
									this.tickLabels[i].style['marginRight'] = this.sliderElem.offsetWidth + "px";
								} else {
									this.tickLabels[i].style['marginLeft'] = this.sliderElem.offsetWidth + "px";
								}
								this.tickLabelContainer.style[styleMargin] = this.sliderElem.offsetWidth / 2 * -1 + 'px';
							}
						}
					}
				}

				var formattedTooltipVal;

				if (this.options.range) {
					formattedTooltipVal = this.options.formatter(this._state.value);
					this._setText(this.tooltipInner, formattedTooltipVal);
					this.tooltip.style[this.stylePos] = (positionPercentages[1] + positionPercentages[0]) / 2 + "%";

					var innerTooltipMinText = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner_min, innerTooltipMinText);

					var innerTooltipMaxText = this.options.formatter(this._state.value[1]);
					this._setText(this.tooltipInner_max, innerTooltipMaxText);

					this.tooltip_min.style[this.stylePos] = positionPercentages[0] + "%";

					this.tooltip_max.style[this.stylePos] = positionPercentages[1] + "%";
				} else {
					formattedTooltipVal = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner, formattedTooltipVal);

					this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";
				}

				if (this.options.orientation === 'vertical') {
					this.trackLow.style.top = '0';
					this.trackLow.style.height = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					this.trackSelection.style.top = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					this.trackSelection.style.height = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					this.trackHigh.style.bottom = '0';
					this.trackHigh.style.height = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';
				} else {
					if (this.stylePos === 'right') {
						this.trackLow.style.right = '0';
					} else {
						this.trackLow.style.left = '0';
					}
					this.trackLow.style.width = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackSelection.style.right = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					} else {
						this.trackSelection.style.left = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					}
					this.trackSelection.style.width = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackHigh.style.left = '0';
					} else {
						this.trackHigh.style.right = '0';
					}
					this.trackHigh.style.width = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					var offset_min = this.tooltip_min.getBoundingClientRect();
					var offset_max = this.tooltip_max.getBoundingClientRect();

					if (this.options.tooltip_position === 'bottom') {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = '';
							this.tooltip_max.style.bottom = 22 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
							this.tooltip_max.style.bottom = '';
						}
					} else {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = 18 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
						}
					}
				}
			},
			_createHighlightRange: function _createHighlightRange(start, end) {
				if (this._isHighlightRange(start, end)) {
					if (start > end) {
						return { 'start': end, 'size': start - end };
					}
					return { 'start': start, 'size': end - start };
				}
				return null;
			},
			_isHighlightRange: function _isHighlightRange(start, end) {
				if (0 <= start && start <= 100 && 0 <= end && end <= 100) {
					return true;
				} else {
					return false;
				}
			},
			_resize: function _resize(ev) {
				/*jshint unused:false*/
				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];
				this._layout();
			},
			_removeProperty: function _removeProperty(element, prop) {
				if (element.style.removeProperty) {
					element.style.removeProperty(prop);
				} else {
					element.style.removeAttribute(prop);
				}
			},
			_mousedown: function _mousedown(ev) {
				if (!this._state.enabled) {
					return false;
				}

				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];

				var percentage = this._getPercentage(ev);

				if (this.options.range) {
					var diff1 = Math.abs(this._state.percentage[0] - percentage);
					var diff2 = Math.abs(this._state.percentage[1] - percentage);
					this._state.dragged = diff1 < diff2 ? 0 : 1;
					this._adjustPercentageForRangeSliders(percentage);
				} else {
					this._state.dragged = 0;
				}

				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				if (this.touchCapable) {
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}

				if (this.mousemove) {
					document.removeEventListener("mousemove", this.mousemove, false);
				}
				if (this.mouseup) {
					document.removeEventListener("mouseup", this.mouseup, false);
				}

				this.mousemove = this._mousemove.bind(this);
				this.mouseup = this._mouseup.bind(this);

				if (this.touchCapable) {
					// Touch: Bind touch events:
					document.addEventListener("touchmove", this.mousemove, false);
					document.addEventListener("touchend", this.mouseup, false);
				}
				// Bind mouse events:
				document.addEventListener("mousemove", this.mousemove, false);
				document.addEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = true;
				var newValue = this._calculateValue();

				this._trigger('slideStart', newValue);

				this._setDataVal(newValue);
				this.setValue(newValue, false, true);

				ev.returnValue = false;

				if (this.options.focus) {
					this._triggerFocusOnHandle(this._state.dragged);
				}

				return true;
			},
			_touchstart: function _touchstart(ev) {
				if (ev.changedTouches === undefined) {
					this._mousedown(ev);
					return;
				}

				var touch = ev.changedTouches[0];
				this.touchX = touch.pageX;
				this.touchY = touch.pageY;
			},
			_triggerFocusOnHandle: function _triggerFocusOnHandle(handleIdx) {
				if (handleIdx === 0) {
					this.handle1.focus();
				}
				if (handleIdx === 1) {
					this.handle2.focus();
				}
			},
			_keydown: function _keydown(handleIdx, ev) {
				if (!this._state.enabled) {
					return false;
				}

				var dir;
				switch (ev.keyCode) {
					case 37: // left
					case 40:
						// down
						dir = -1;
						break;
					case 39: // right
					case 38:
						// up
						dir = 1;
						break;
				}
				if (!dir) {
					return;
				}

				// use natural arrow keys instead of from min to max
				if (this.options.natural_arrow_keys) {
					var ifVerticalAndNotReversed = this.options.orientation === 'vertical' && !this.options.reversed;
					var ifHorizontalAndReversed = this.options.orientation === 'horizontal' && this.options.reversed; // @todo control with rtl

					if (ifVerticalAndNotReversed || ifHorizontalAndReversed) {
						dir = -dir;
					}
				}

				var val = this._state.value[handleIdx] + dir * this.options.step;
				var percentage = val / this.options.max * 100;
				this._state.keyCtrl = handleIdx;
				if (this.options.range) {
					this._adjustPercentageForRangeSliders(percentage);
					var val1 = !this._state.keyCtrl ? val : this._state.value[0];
					var val2 = this._state.keyCtrl ? val : this._state.value[1];
					val = [val1, val2];
				}

				this._trigger('slideStart', val);
				this._setDataVal(val);
				this.setValue(val, true, true);

				this._setDataVal(val);
				this._trigger('slideStop', val);
				this._layout();

				this._pauseEvent(ev);
				delete this._state.keyCtrl;

				return false;
			},
			_pauseEvent: function _pauseEvent(ev) {
				if (ev.stopPropagation) {
					ev.stopPropagation();
				}
				if (ev.preventDefault) {
					ev.preventDefault();
				}
				ev.cancelBubble = true;
				ev.returnValue = false;
			},
			_mousemove: function _mousemove(ev) {
				if (!this._state.enabled) {
					return false;
				}

				var percentage = this._getPercentage(ev);
				this._adjustPercentageForRangeSliders(percentage);
				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				var val = this._calculateValue(true);
				this.setValue(val, true, true);

				return false;
			},
			_touchmove: function _touchmove(ev) {
				if (ev.changedTouches === undefined) {
					return;
				}

				var touch = ev.changedTouches[0];

				var xDiff = touch.pageX - this.touchX;
				var yDiff = touch.pageY - this.touchY;

				if (!this._state.inDrag) {
					// Vertical Slider
					if (this.options.orientation === 'vertical' && xDiff <= 5 && xDiff >= -5 && (yDiff >= 15 || yDiff <= -15)) {
						this._mousedown(ev);
					}
					// Horizontal slider.
					else if (yDiff <= 5 && yDiff >= -5 && (xDiff >= 15 || xDiff <= -15)) {
							this._mousedown(ev);
						}
				}
			},
			_adjustPercentageForRangeSliders: function _adjustPercentageForRangeSliders(percentage) {
				if (this.options.range) {
					var precision = this._getNumDigitsAfterDecimalPlace(percentage);
					precision = precision ? precision - 1 : 0;
					var percentageWithAdjustedPrecision = this._applyToFixedAndParseFloat(percentage, precision);
					if (this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], precision) < percentageWithAdjustedPrecision) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.dragged = 1;
					} else if (this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], precision) > percentageWithAdjustedPrecision) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.dragged = 0;
					} else if (this._state.keyCtrl === 0 && this._state.value[1] / this.options.max * 100 < percentage) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.keyCtrl = 1;
						this.handle2.focus();
					} else if (this._state.keyCtrl === 1 && this._state.value[0] / this.options.max * 100 > percentage) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.keyCtrl = 0;
						this.handle1.focus();
					}
				}
			},
			_mouseup: function _mouseup() {
				if (!this._state.enabled) {
					return false;
				}
				if (this.touchCapable) {
					// Touch: Unbind touch event handlers:
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}
				// Unbind mouse event handlers:
				document.removeEventListener("mousemove", this.mousemove, false);
				document.removeEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = false;
				if (this._state.over === false) {
					this._hideTooltip();
				}
				var val = this._calculateValue(true);

				this._layout();
				this._setDataVal(val);
				this._trigger('slideStop', val);

				return false;
			},
			_calculateValue: function _calculateValue(snapToClosestTick) {
				var val;
				if (this.options.range) {
					val = [this.options.min, this.options.max];
					if (this._state.percentage[0] !== 0) {
						val[0] = this._toValue(this._state.percentage[0]);
						val[0] = this._applyPrecision(val[0]);
					}
					if (this._state.percentage[1] !== 100) {
						val[1] = this._toValue(this._state.percentage[1]);
						val[1] = this._applyPrecision(val[1]);
					}
				} else {
					val = this._toValue(this._state.percentage[0]);
					val = parseFloat(val);
					val = this._applyPrecision(val);
				}

				if (snapToClosestTick) {
					var min = [val, Infinity];
					for (var i = 0; i < this.options.ticks.length; i++) {
						var diff = Math.abs(this.options.ticks[i] - val);
						if (diff <= min[1]) {
							min = [this.options.ticks[i], diff];
						}
					}
					if (min[1] <= this.options.ticks_snap_bounds) {
						return min[0];
					}
				}

				return val;
			},
			_applyPrecision: function _applyPrecision(val) {
				var precision = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
				return this._applyToFixedAndParseFloat(val, precision);
			},
			_getNumDigitsAfterDecimalPlace: function _getNumDigitsAfterDecimalPlace(num) {
				var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
				if (!match) {
					return 0;
				}
				return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
			},
			_applyToFixedAndParseFloat: function _applyToFixedAndParseFloat(num, toFixedInput) {
				var truncatedNum = num.toFixed(toFixedInput);
				return parseFloat(truncatedNum);
			},
			/*
   	Credits to Mike Samuel for the following method!
   	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
   */
			_getPercentage: function _getPercentage(ev) {
				if (this.touchCapable && (ev.type === 'touchstart' || ev.type === 'touchmove')) {
					ev = ev.touches[0];
				}

				var eventPosition = ev[this.mousePos];
				var sliderOffset = this._state.offset[this.stylePos];
				var distanceToSlide = eventPosition - sliderOffset;
				if (this.stylePos === 'right') {
					distanceToSlide = -distanceToSlide;
				}
				// Calculate what percent of the length the slider handle has slid
				var percentage = distanceToSlide / this._state.size * 100;
				percentage = Math.round(percentage / this._state.percentage[2]) * this._state.percentage[2];
				if (this.options.reversed) {
					percentage = 100 - percentage;
				}

				// Make sure the percent is within the bounds of the slider.
				// 0% corresponds to the 'min' value of the slide
				// 100% corresponds to the 'max' value of the slide
				return Math.max(0, Math.min(100, percentage));
			},
			_validateInputValue: function _validateInputValue(val) {
				if (!isNaN(+val)) {
					return +val;
				} else if (Array.isArray(val)) {
					this._validateArray(val);
					return val;
				} else {
					throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(val));
				}
			},
			_validateArray: function _validateArray(val) {
				for (var i = 0; i < val.length; i++) {
					var input = val[i];
					if (typeof input !== 'number') {
						throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(input));
					}
				}
			},
			_setDataVal: function _setDataVal(val) {
				this.element.setAttribute('data-value', val);
				this.element.setAttribute('value', val);
				this.element.value = val;
			},
			_trigger: function _trigger(evt, val) {
				val = val || val === 0 ? val : undefined;

				var callbackFnArray = this.eventToCallbackMap[evt];
				if (callbackFnArray && callbackFnArray.length) {
					for (var i = 0; i < callbackFnArray.length; i++) {
						var callbackFn = callbackFnArray[i];
						callbackFn(val);
					}
				}

				/* If JQuery exists, trigger JQuery events */
				if ($) {
					this._triggerJQueryEvent(evt, val);
				}
			},
			_triggerJQueryEvent: function _triggerJQueryEvent(evt, val) {
				var eventData = {
					type: evt,
					value: val
				};
				this.$element.trigger(eventData);
				this.$sliderElem.trigger(eventData);
			},
			_unbindJQueryEventHandlers: function _unbindJQueryEventHandlers() {
				this.$element.off();
				this.$sliderElem.off();
			},
			_setText: function _setText(element, text) {
				if (typeof element.textContent !== "undefined") {
					element.textContent = text;
				} else if (typeof element.innerText !== "undefined") {
					element.innerText = text;
				}
			},
			_removeClass: function _removeClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					newClasses = newClasses.replace(regex, " ");
				}

				element.className = newClasses.trim();
			},
			_addClass: function _addClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					var ifClassExists = regex.test(newClasses);

					if (!ifClassExists) {
						newClasses += " " + classTag;
					}
				}

				element.className = newClasses.trim();
			},
			_offsetLeft: function _offsetLeft(obj) {
				return obj.getBoundingClientRect().left;
			},
			_offsetRight: function _offsetRight(obj) {
				return obj.getBoundingClientRect().right;
			},
			_offsetTop: function _offsetTop(obj) {
				var offsetTop = obj.offsetTop;
				while ((obj = obj.offsetParent) && !isNaN(obj.offsetTop)) {
					offsetTop += obj.offsetTop;
					if (obj.tagName !== 'BODY') {
						offsetTop -= obj.scrollTop;
					}
				}
				return offsetTop;
			},
			_offset: function _offset(obj) {
				return {
					left: this._offsetLeft(obj),
					right: this._offsetRight(obj),
					top: this._offsetTop(obj)
				};
			},
			_css: function _css(elementRef, styleName, value) {
				if ($) {
					$.style(elementRef, styleName, value);
				} else {
					var style = styleName.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (all, letter) {
						return letter.toUpperCase();
					});
					elementRef.style[style] = value;
				}
			},
			_toValue: function _toValue(percentage) {
				return this.options.scale.toValue.apply(this, [percentage]);
			},
			_toPercentage: function _toPercentage(value) {
				return this.options.scale.toPercentage.apply(this, [value]);
			},
			_setTooltipPosition: function _setTooltipPosition() {
				var tooltips = [this.tooltip, this.tooltip_min, this.tooltip_max];
				if (this.options.orientation === 'vertical') {
					var tooltipPos;
					if (this.options.tooltip_position) {
						tooltipPos = this.options.tooltip_position;
					} else {
						if (this.options.rtl) {
							tooltipPos = 'left';
						} else {
							tooltipPos = 'right';
						}
					}
					var oppositeSide = tooltipPos === 'left' ? 'right' : 'left';
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, tooltipPos);
						tooltip.style[oppositeSide] = '100%';
					}.bind(this));
				} else if (this.options.tooltip_position === 'bottom') {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'bottom');
						tooltip.style.top = 22 + 'px';
					}.bind(this));
				} else {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'top');
						tooltip.style.top = -this.tooltip.outerHeight - 14 + 'px';
					}.bind(this));
				}
			}
		};

		/*********************************
  		Attach to global namespace
  	*********************************/
		if ($ && $.fn) {
			var autoRegisterNamespace = void 0;

			if (!$.fn.slider) {
				$.bridget(NAMESPACE_MAIN, Slider);
				autoRegisterNamespace = NAMESPACE_MAIN;
			} else {
				if (windowIsDefined) {
					window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead.");
				}
				autoRegisterNamespace = NAMESPACE_ALTERNATE;
			}
			$.bridget(NAMESPACE_ALTERNATE, Slider);

			// Auto-Register data-provide="slider" Elements
			$(function () {
				$("input[data-provide=slider]")[autoRegisterNamespace]();
			});
		}
	})($);

	return Slider;
});


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMWIwZTdhMzllNDI0Y2MyNjBhYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zbGlkZXIvZGlzdC9ib290c3RyYXAtc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBLCtDOzs7Ozs7OztBQ0FBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQ0FBc0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNB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QUFhO0FBQ2I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRzs7QUFFdEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FB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Q0o7QUFDQSxFQUFFOztBQUVGO0FBQ0EsQ0FBQyIsImZpbGUiOiJ3aWRnZXRzL2Jvb3RzdHJhcC1zbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL2Jvb3RzdHJhcC1zbGlkZXJcIiwgW1wianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvYm9vdHN0cmFwLXNsaWRlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9ib290c3RyYXAtc2xpZGVyXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDFiMGU3YTM5ZTQyNGNjMjYwYWMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBTbGlkZXIgPSByZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiYm9vdHN0cmFwLXNsaWRlclwiLFxyXG4gICAgdGl0bGU6IFwiQm9vdHN0cmFwIFNsaWRlclwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1ib290c3RyYXAtc2xpZGVyXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgU2xpZGVyICE9IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiYm9vdHN0cmFwc2xpZGVyXCI7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiYm9vdHN0cmFwc2xpZGVyXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwiYm9vdHN0cmFwc2xpZGVyXCIsIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInN0ZXA6bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWluOm51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJyYW5nZU1heDpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgXSk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgaW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgaW5wdXRFbC5pZCA9IHF1ZXN0aW9uLmlkO1xyXG4gICAgICBpbnB1dEVsLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1pZFwiLCBxdWVzdGlvbi5uYW1lICsgXCJfXCIgKyBxdWVzdGlvbi5pZCk7XHJcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItbWluXCIsIHF1ZXN0aW9uLnJhbmdlTWluKTtcclxuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1tYXhcIiwgcXVlc3Rpb24ucmFuZ2VNYXgpO1xyXG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLXN0ZXBcIiwgcXVlc3Rpb24uc3RlcCk7XHJcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItdmFsdWVcIiwgcXVlc3Rpb24udmFsdWUgfHwgcXVlc3Rpb24ucmFuZ2VNaW4pO1xyXG4gICAgICBlbC5hcHBlbmRDaGlsZChpbnB1dEVsKTtcclxuICAgICAgdmFyIHNsaWRlciA9IG5ldyBTbGlkZXIoaW5wdXRFbCwge1xyXG4gICAgICAgIGlkOiBxdWVzdGlvbi5uYW1lICsgXCJfXCIgKyBxdWVzdGlvbi5pZCxcclxuICAgICAgICBtaW46IHF1ZXN0aW9uLnJhbmdlTWluLFxyXG4gICAgICAgIG1heDogcXVlc3Rpb24ucmFuZ2VNYXgsXHJcbiAgICAgICAgc3RlcDogcXVlc3Rpb24uc3RlcCxcclxuICAgICAgICB2YWx1ZTogcXVlc3Rpb24udmFsdWUgfHwgcXVlc3Rpb24ucmFuZ2VNaW5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzbGlkZXIub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24odmFsdWVPYmopIHtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHNsaWRlci5nZXRWYWx1ZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNsaWRlci5zZXRWYWx1ZShxdWVzdGlvbi52YWx1ZSB8fCBxdWVzdGlvbi5yYW5nZU1pbik7XHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlciA9IHNsaWRlcjtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBxdWVzdGlvbi5ib290c3RyYXBTbGlkZXIuZGVzdHJveSgpO1xyXG4gICAgICBxdWVzdGlvbi5ib290c3RyYXBTbGlkZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jvb3RzdHJhcC1zbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyohID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICBWRVJTSU9OICAxMC4wLjAgICAgICAgICAgICAgIFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKiEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBib290c3RyYXAtc2xpZGVyLmpzXG4gKlxuICogTWFpbnRhaW5lcnM6XG4gKlx0XHRLeWxlIEtlbXBcbiAqXHRcdFx0LSBUd2l0dGVyOiBAc2VpeXJpYVxuICpcdFx0XHQtIEdpdGh1YjogIHNlaXlyaWFcbiAqXHRcdFJvaGl0IEthbGt1clxuICpcdFx0XHQtIFR3aXR0ZXI6IEBSb3ZvbHV0aW9uYXJ5XG4gKlx0XHRcdC0gR2l0aHViOiAgcm92b2x1dGlvblxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIGJvb3RzdHJhcC1zbGlkZXIgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgS3lsZSBLZW1wLCBSb2hpdCBLYWxrdXIsIGFuZCBjb250cmlidXRvcnNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICogY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICogT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEJyaWRnZXQgbWFrZXMgalF1ZXJ5IHdpZGdldHNcbiAqIHYxLjAuMVxuICogTUlUIGxpY2Vuc2VcbiAqL1xudmFyIHdpbmRvd0lzRGVmaW5lZCA9ICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yod2luZG93KSkgPT09IFwib2JqZWN0XCI7XG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICgodHlwZW9mIG1vZHVsZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1vZHVsZSkpID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0dmFyIGpRdWVyeTtcblx0XHR0cnkge1xuXHRcdFx0alF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGpRdWVyeSA9IG51bGw7XG5cdFx0fVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShqUXVlcnkpO1xuXHR9IGVsc2UgaWYgKHdpbmRvdykge1xuXHRcdHdpbmRvdy5TbGlkZXIgPSBmYWN0b3J5KHdpbmRvdy5qUXVlcnkpO1xuXHR9XG59KShmdW5jdGlvbiAoJCkge1xuXHQvLyBDb25zdGFudHNcblx0dmFyIE5BTUVTUEFDRV9NQUlOID0gJ3NsaWRlcic7XG5cdHZhciBOQU1FU1BBQ0VfQUxURVJOQVRFID0gJ2Jvb3RzdHJhcFNsaWRlcic7XG5cblx0Ly8gUG9seWZpbGwgY29uc29sZSBtZXRob2RzXG5cdGlmICh3aW5kb3dJc0RlZmluZWQgJiYgIXdpbmRvdy5jb25zb2xlKSB7XG5cdFx0d2luZG93LmNvbnNvbGUgPSB7fTtcblx0fVxuXHRpZiAod2luZG93SXNEZWZpbmVkICYmICF3aW5kb3cuY29uc29sZS5sb2cpIHtcblx0XHR3aW5kb3cuY29uc29sZS5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcblx0fVxuXHRpZiAod2luZG93SXNEZWZpbmVkICYmICF3aW5kb3cuY29uc29sZS53YXJuKSB7XG5cdFx0d2luZG93LmNvbnNvbGUud2FybiA9IGZ1bmN0aW9uICgpIHt9O1xuXHR9XG5cblx0Ly8gUmVmZXJlbmNlIHRvIFNsaWRlciBjb25zdHJ1Y3RvclxuXHR2YXIgU2xpZGVyO1xuXG5cdChmdW5jdGlvbiAoJCkge1xuXG5cdFx0J3VzZSBzdHJpY3QnO1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRcdHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuXHRcdGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVmaW5pdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdFx0ZnVuY3Rpb24gZGVmaW5lQnJpZGdldCgkKSB7XG5cblx0XHRcdC8vIGJhaWwgaWYgbm8galF1ZXJ5XG5cdFx0XHRpZiAoISQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhZGRPcHRpb25NZXRob2QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRcdFx0LyoqXG4gICAgKiBhZGRzIG9wdGlvbiBtZXRob2QgLT4gJCgpLnBsdWdpbignb3B0aW9uJywgey4uLn0pXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBQbHVnaW5DbGFzcyAtIGNvbnN0cnVjdG9yIGNsYXNzXG4gICAgKi9cblx0XHRcdGZ1bmN0aW9uIGFkZE9wdGlvbk1ldGhvZChQbHVnaW5DbGFzcykge1xuXHRcdFx0XHQvLyBkb24ndCBvdmVyd3JpdGUgb3JpZ2luYWwgb3B0aW9uIG1ldGhvZFxuXHRcdFx0XHRpZiAoUGx1Z2luQ2xhc3MucHJvdG90eXBlLm9wdGlvbikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG9wdGlvbiBzZXR0ZXJcblx0XHRcdFx0UGx1Z2luQ2xhc3MucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uIChvcHRzKSB7XG5cdFx0XHRcdFx0Ly8gYmFpbCBvdXQgaWYgbm90IGFuIG9iamVjdFxuXHRcdFx0XHRcdGlmICghJC5pc1BsYWluT2JqZWN0KG9wdHMpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHRoaXMub3B0aW9ucywgb3B0cyk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsdWdpbiBicmlkZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRcdFx0Ly8gaGVscGVyIGZ1bmN0aW9uIGZvciBsb2dnaW5nIGVycm9yc1xuXHRcdFx0Ly8gJC5lcnJvciBicmVha3MgalF1ZXJ5IGNoYWluaW5nXG5cdFx0XHR2YXIgbG9nRXJyb3IgPSB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgPyBub29wIDogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0XHRcdH07XG5cblx0XHRcdC8qKlxuICAgICogalF1ZXJ5IHBsdWdpbiBicmlkZ2UsIGFjY2VzcyBtZXRob2RzIGxpa2UgJGVsZW0ucGx1Z2luKCdtZXRob2QnKVxuICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIHBsdWdpbiBuYW1lXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBQbHVnaW5DbGFzcyAtIGNvbnN0cnVjdG9yIGNsYXNzXG4gICAgKi9cblx0XHRcdGZ1bmN0aW9uIGJyaWRnZShuYW1lc3BhY2UsIFBsdWdpbkNsYXNzKSB7XG5cdFx0XHRcdC8vIGFkZCB0byBqUXVlcnkgZm4gbmFtZXNwYWNlXG5cdFx0XHRcdCQuZm5bbmFtZXNwYWNlXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0Ly8gY2FsbCBwbHVnaW4gbWV0aG9kIHdoZW4gZmlyc3QgYXJndW1lbnQgaXMgYSBzdHJpbmdcblx0XHRcdFx0XHRcdC8vIGdldCBhcmd1bWVudHMgZm9yIG1ldGhvZFxuXHRcdFx0XHRcdFx0dmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBlbGVtID0gdGhpc1tpXTtcblx0XHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlID0gJC5kYXRhKGVsZW0sIG5hbWVzcGFjZSk7XG5cdFx0XHRcdFx0XHRcdGlmICghaW5zdGFuY2UpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2dFcnJvcihcImNhbm5vdCBjYWxsIG1ldGhvZHMgb24gXCIgKyBuYW1lc3BhY2UgKyBcIiBwcmlvciB0byBpbml0aWFsaXphdGlvbjsgXCIgKyBcImF0dGVtcHRlZCB0byBjYWxsICdcIiArIG9wdGlvbnMgKyBcIidcIik7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCEkLmlzRnVuY3Rpb24oaW5zdGFuY2Vbb3B0aW9uc10pIHx8IG9wdGlvbnMuY2hhckF0KDApID09PSAnXycpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2dFcnJvcihcIm5vIHN1Y2ggbWV0aG9kICdcIiArIG9wdGlvbnMgKyBcIicgZm9yIFwiICsgbmFtZXNwYWNlICsgXCIgaW5zdGFuY2VcIik7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyB0cmlnZ2VyIG1ldGhvZCB3aXRoIGFyZ3VtZW50c1xuXHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuVmFsdWUgPSBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gYnJlYWsgbG9vayBhbmQgcmV0dXJuIGZpcnN0IHZhbHVlIGlmIHByb3ZpZGVkXG5cdFx0XHRcdFx0XHRcdGlmIChyZXR1cm5WYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHJldHVyblZhbHVlICE9PSBpbnN0YW5jZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5WYWx1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gcmV0dXJuIHRoaXMgaWYgbm8gcmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIG9iamVjdHMgPSB0aGlzLm1hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBpbnN0YW5jZSA9ICQuZGF0YSh0aGlzLCBuYW1lc3BhY2UpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBhcHBseSBvcHRpb25zICYgaW5pdFxuXHRcdFx0XHRcdFx0XHRcdGluc3RhbmNlLm9wdGlvbihvcHRpb25zKTtcblx0XHRcdFx0XHRcdFx0XHRpbnN0YW5jZS5faW5pdCgpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGluaXRpYWxpemUgbmV3IGluc3RhbmNlXG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFuY2UgPSBuZXcgUGx1Z2luQ2xhc3ModGhpcywgb3B0aW9ucyk7XG5cdFx0XHRcdFx0XHRcdFx0JC5kYXRhKHRoaXMsIG5hbWVzcGFjZSwgaW5zdGFuY2UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiAkKHRoaXMpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGlmICghb2JqZWN0cyB8fCBvYmplY3RzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG9iamVjdHM7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0c1swXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJyaWRnZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRcdFx0LyoqXG4gICAgKiBjb252ZXJ0cyBhIFByb3RvdHlwaWNhbCBjbGFzcyBpbnRvIGEgcHJvcGVyIGpRdWVyeSBwbHVnaW5cbiAgICAqICAgdGhlIGNsYXNzIG11c3QgaGF2ZSBhIC5faW5pdCBtZXRob2RcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBwbHVnaW4gbmFtZSwgdXNlZCBpbiAkKCkucGx1Z2luTmFtZVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gUGx1Z2luQ2xhc3MgLSBjb25zdHJ1Y3RvciBjbGFzc1xuICAgICovXG5cdFx0XHQkLmJyaWRnZXQgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBQbHVnaW5DbGFzcykge1xuXHRcdFx0XHRhZGRPcHRpb25NZXRob2QoUGx1Z2luQ2xhc3MpO1xuXHRcdFx0XHRicmlkZ2UobmFtZXNwYWNlLCBQbHVnaW5DbGFzcyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gJC5icmlkZ2V0O1xuXHRcdH1cblxuXHRcdC8vIGdldCBqcXVlcnkgZnJvbSBicm93c2VyIGdsb2JhbFxuXHRcdGRlZmluZUJyaWRnZXQoJCk7XG5cdH0pKCQpO1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gXHRcdFx0Qk9PVFNUUkFQLVNMSURFUiBTT1VSQ0UgQ09ERVxuIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0KGZ1bmN0aW9uICgkKSB7XG5cblx0XHR2YXIgRXJyb3JNc2dzID0ge1xuXHRcdFx0Zm9ybWF0SW52YWxpZElucHV0RXJyb3JNc2c6IGZ1bmN0aW9uIGZvcm1hdEludmFsaWRJbnB1dEVycm9yTXNnKGlucHV0KSB7XG5cdFx0XHRcdHJldHVybiBcIkludmFsaWQgaW5wdXQgdmFsdWUgJ1wiICsgaW5wdXQgKyBcIicgcGFzc2VkIGluXCI7XG5cdFx0XHR9LFxuXHRcdFx0Y2FsbGluZ0NvbnRleHROb3RTbGlkZXJJbnN0YW5jZTogXCJDYWxsaW5nIGNvbnRleHQgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGluc3RhbmNlIG9mIFNsaWRlciBib3VuZCB0byBpdC4gQ2hlY2sgeW91ciBjb2RlIHRvIG1ha2Ugc3VyZSB0aGUgSlF1ZXJ5IG9iamVjdCByZXR1cm5lZCBmcm9tIHRoZSBjYWxsIHRvIHRoZSBzbGlkZXIoKSBpbml0aWFsaXplciBpcyBjYWxsaW5nIHRoZSBtZXRob2RcIlxuXHRcdH07XG5cblx0XHR2YXIgU2xpZGVyU2NhbGUgPSB7XG5cdFx0XHRsaW5lYXI6IHtcblx0XHRcdFx0dG9WYWx1ZTogZnVuY3Rpb24gdG9WYWx1ZShwZXJjZW50YWdlKSB7XG5cdFx0XHRcdFx0dmFyIHJhd1ZhbHVlID0gcGVyY2VudGFnZSAvIDEwMCAqICh0aGlzLm9wdGlvbnMubWF4IC0gdGhpcy5vcHRpb25zLm1pbik7XG5cdFx0XHRcdFx0dmFyIHNob3VsZEFkanVzdFdpdGhCYXNlID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHR2YXIgbWludixcblx0XHRcdFx0XHRcdCAgICBtYXh2LFxuXHRcdFx0XHRcdFx0ICAgIG1pbnAsXG5cdFx0XHRcdFx0XHQgICAgbWF4cCA9IDA7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0aWYgKHBlcmNlbnRhZ2UgPD0gdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9uc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdG1pbnYgPSB0aGlzLm9wdGlvbnMudGlja3NbaSAtIDFdO1xuXHRcdFx0XHRcdFx0XHRcdG1pbnAgPSB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zW2kgLSAxXTtcblx0XHRcdFx0XHRcdFx0XHRtYXh2ID0gdGhpcy5vcHRpb25zLnRpY2tzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdG1heHAgPSB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zW2ldO1xuXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBwYXJ0aWFsUGVyY2VudGFnZSA9IChwZXJjZW50YWdlIC0gbWlucCkgLyAobWF4cCAtIG1pbnApO1xuXHRcdFx0XHRcdFx0cmF3VmFsdWUgPSBtaW52ICsgcGFydGlhbFBlcmNlbnRhZ2UgKiAobWF4diAtIG1pbnYpO1xuXHRcdFx0XHRcdFx0c2hvdWxkQWRqdXN0V2l0aEJhc2UgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgYWRqdXN0bWVudCA9IHNob3VsZEFkanVzdFdpdGhCYXNlID8gdGhpcy5vcHRpb25zLm1pbiA6IDA7XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gYWRqdXN0bWVudCArIE1hdGgucm91bmQocmF3VmFsdWUgLyB0aGlzLm9wdGlvbnMuc3RlcCkgKiB0aGlzLm9wdGlvbnMuc3RlcDtcblx0XHRcdFx0XHRpZiAodmFsdWUgPCB0aGlzLm9wdGlvbnMubWluKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1pbjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID4gdGhpcy5vcHRpb25zLm1heCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5tYXg7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRvUGVyY2VudGFnZTogZnVuY3Rpb24gdG9QZXJjZW50YWdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5tYXggPT09IHRoaXMub3B0aW9ucy5taW4pIHtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdHZhciBtaW52LFxuXHRcdFx0XHRcdFx0ICAgIG1heHYsXG5cdFx0XHRcdFx0XHQgICAgbWlucCxcblx0XHRcdFx0XHRcdCAgICBtYXhwID0gMDtcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLnRpY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSA8PSB0aGlzLm9wdGlvbnMudGlja3NbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRtaW52ID0gaSA+IDAgPyB0aGlzLm9wdGlvbnMudGlja3NbaSAtIDFdIDogMDtcblx0XHRcdFx0XHRcdFx0XHRtaW5wID0gaSA+IDAgPyB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zW2kgLSAxXSA6IDA7XG5cdFx0XHRcdFx0XHRcdFx0bWF4diA9IHRoaXMub3B0aW9ucy50aWNrc1tpXTtcblx0XHRcdFx0XHRcdFx0XHRtYXhwID0gdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9uc1tpXTtcblxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHBhcnRpYWxQZXJjZW50YWdlID0gKHZhbHVlIC0gbWludikgLyAobWF4diAtIG1pbnYpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWlucCArIHBhcnRpYWxQZXJjZW50YWdlICogKG1heHAgLSBtaW5wKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gMTAwICogKHZhbHVlIC0gdGhpcy5vcHRpb25zLm1pbikgLyAodGhpcy5vcHRpb25zLm1heCAtIHRoaXMub3B0aW9ucy5taW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRsb2dhcml0aG1pYzoge1xuXHRcdFx0XHQvKiBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg0NjIyMS9sb2dhcml0aG1pYy1zbGlkZXIgKi9cblx0XHRcdFx0dG9WYWx1ZTogZnVuY3Rpb24gdG9WYWx1ZShwZXJjZW50YWdlKSB7XG5cdFx0XHRcdFx0dmFyIG1pbiA9IHRoaXMub3B0aW9ucy5taW4gPT09IDAgPyAwIDogTWF0aC5sb2codGhpcy5vcHRpb25zLm1pbik7XG5cdFx0XHRcdFx0dmFyIG1heCA9IE1hdGgubG9nKHRoaXMub3B0aW9ucy5tYXgpO1xuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IE1hdGguZXhwKG1pbiArIChtYXggLSBtaW4pICogcGVyY2VudGFnZSAvIDEwMCk7XG5cdFx0XHRcdFx0aWYgKE1hdGgucm91bmQodmFsdWUpID09PSB0aGlzLm9wdGlvbnMubWF4KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1heDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFsdWUgPSB0aGlzLm9wdGlvbnMubWluICsgTWF0aC5yb3VuZCgodmFsdWUgLSB0aGlzLm9wdGlvbnMubWluKSAvIHRoaXMub3B0aW9ucy5zdGVwKSAqIHRoaXMub3B0aW9ucy5zdGVwO1xuXHRcdFx0XHRcdC8qIFJvdW5kaW5nIHRvIHRoZSBuZWFyZXN0IHN0ZXAgY291bGQgZXhjZWVkIHRoZSBtaW4gb3JcbiAgICAgICogbWF4LCBzbyBjbGlwIHRvIHRob3NlIHZhbHVlcy4gKi9cblx0XHRcdFx0XHRpZiAodmFsdWUgPCB0aGlzLm9wdGlvbnMubWluKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1pbjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID4gdGhpcy5vcHRpb25zLm1heCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5tYXg7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRvUGVyY2VudGFnZTogZnVuY3Rpb24gdG9QZXJjZW50YWdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5tYXggPT09IHRoaXMub3B0aW9ucy5taW4pIHtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgbWF4ID0gTWF0aC5sb2codGhpcy5vcHRpb25zLm1heCk7XG5cdFx0XHRcdFx0XHR2YXIgbWluID0gdGhpcy5vcHRpb25zLm1pbiA9PT0gMCA/IDAgOiBNYXRoLmxvZyh0aGlzLm9wdGlvbnMubWluKTtcblx0XHRcdFx0XHRcdHZhciB2ID0gdmFsdWUgPT09IDAgPyAwIDogTWF0aC5sb2codmFsdWUpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDEwMCAqICh2IC0gbWluKSAvIChtYXggLSBtaW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBcdFx0XHRcdFx0XHRDT05TVFJVQ1RPUlxuICBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHRcdFNsaWRlciA9IGZ1bmN0aW9uIFNsaWRlcihlbGVtZW50LCBvcHRpb25zKSB7XG5cdFx0XHRjcmVhdGVOZXdTbGlkZXIuY2FsbCh0aGlzLCBlbGVtZW50LCBvcHRpb25zKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBjcmVhdGVOZXdTbGlkZXIoZWxlbWVudCwgb3B0aW9ucykge1xuXG5cdFx0XHQvKlxuICAgXHRUaGUgaW50ZXJuYWwgc3RhdGUgb2JqZWN0IGlzIHVzZWQgdG8gc3RvcmUgZGF0YSBhYm91dCB0aGUgY3VycmVudCAnc3RhdGUnIG9mIHNsaWRlci5cbiAgIFx0VGhpcyBpbmNsdWRlcyB2YWx1ZXMgc3VjaCBhcyB0aGUgYHZhbHVlYCwgYGVuYWJsZWRgLCBldGMuLi5cbiAgICovXG5cdFx0XHR0aGlzLl9zdGF0ZSA9IHtcblx0XHRcdFx0dmFsdWU6IG51bGwsXG5cdFx0XHRcdGVuYWJsZWQ6IG51bGwsXG5cdFx0XHRcdG9mZnNldDogbnVsbCxcblx0XHRcdFx0c2l6ZTogbnVsbCxcblx0XHRcdFx0cGVyY2VudGFnZTogbnVsbCxcblx0XHRcdFx0aW5EcmFnOiBmYWxzZSxcblx0XHRcdFx0b3ZlcjogZmFsc2Vcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoZSBvYmplY3RzIHVzZWQgdG8gc3RvcmUgdGhlIHJlZmVyZW5jZSB0byB0aGUgdGljayBtZXRob2RzIGlmIHRpY2tzX3Rvb2x0aXAgaXMgb25cblx0XHRcdHRoaXMudGlja3NDYWxsYmFja01hcCA9IHt9O1xuXHRcdFx0dGhpcy5oYW5kbGVDYWxsYmFja01hcCA9IHt9O1xuXG5cdFx0XHRpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICBcdFx0XHRcdFx0UHJvY2VzcyBPcHRpb25zXG4gICBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XG5cdFx0XHR2YXIgb3B0aW9uVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRPcHRpb25zKTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25UeXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgb3B0TmFtZSA9IG9wdGlvblR5cGVzW2ldO1xuXG5cdFx0XHRcdC8vIEZpcnN0IGNoZWNrIGlmIGFuIG9wdGlvbiB3YXMgcGFzc2VkIGluIHZpYSB0aGUgY29uc3RydWN0b3Jcblx0XHRcdFx0dmFyIHZhbCA9IG9wdGlvbnNbb3B0TmFtZV07XG5cdFx0XHRcdC8vIElmIG5vIGRhdGEgYXR0cmliLCB0aGVuIGNoZWNrIGRhdGEgYXRycmlidXRlc1xuXHRcdFx0XHR2YWwgPSB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyA/IHZhbCA6IGdldERhdGFBdHRyaWIodGhpcy5lbGVtZW50LCBvcHROYW1lKTtcblx0XHRcdFx0Ly8gRmluYWxseSwgaWYgbm90aGluZyB3YXMgc3BlY2lmaWVkLCB1c2UgdGhlIGRlZmF1bHRzXG5cdFx0XHRcdHZhbCA9IHZhbCAhPT0gbnVsbCA/IHZhbCA6IHRoaXMuZGVmYXVsdE9wdGlvbnNbb3B0TmFtZV07XG5cblx0XHRcdFx0Ly8gU2V0IGFsbCBvcHRpb25zIG9uIHRoZSBpbnN0YW5jZSBvZiB0aGUgU2xpZGVyXG5cdFx0XHRcdGlmICghdGhpcy5vcHRpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vcHRpb25zW29wdE5hbWVdID0gdmFsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDaGVjayBvcHRpb25zLnJ0bFxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5ydGwgPT09ICdhdXRvJykge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMucnRsID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnO1xuXHRcdFx0fVxuXG5cdFx0XHQvKlxuICAgXHRWYWxpZGF0ZSBgdG9vbHRpcF9wb3NpdGlvbmAgYWdhaW5zdCAnb3JpZW50YXRpb25gXG4gICBcdC0gaWYgYHRvb2x0aXBfcG9zaXRpb25gIGlzIGluY29tcGF0aWJsZSB3aXRoIG9yaWVudGF0aW9uLCBzd2l0aCBpdCB0byBhIGRlZmF1bHQgY29tcGF0aWJsZSB3aXRoIHNwZWNpZmllZCBgb3JpZW50YXRpb25gXG4gICBcdFx0LS0gZGVmYXVsdCBmb3IgXCJ2ZXJ0aWNhbFwiIC0+IFwicmlnaHRcIiwgXCJsZWZ0XCIgaWYgcnRsXG4gICBcdFx0LS0gZGVmYXVsdCBmb3IgXCJob3Jpem9udGFsXCIgLT4gXCJ0b3BcIlxuICAgKi9cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiAmJiAodGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPT09IFwidG9wXCIgfHwgdGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPT09IFwiYm90dG9tXCIpKSB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPSBcImxlZnRcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9IFwicmlnaHRcIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmICh0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9PT0gXCJsZWZ0XCIgfHwgdGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPT09IFwicmlnaHRcIikpIHtcblxuXHRcdFx0XHR0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9IFwidG9wXCI7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGdldERhdGFBdHRyaWIoZWxlbWVudCwgb3B0TmFtZSkge1xuXHRcdFx0XHR2YXIgZGF0YU5hbWUgPSBcImRhdGEtc2xpZGVyLVwiICsgb3B0TmFtZS5yZXBsYWNlKC9fL2csICctJyk7XG5cdFx0XHRcdHZhciBkYXRhVmFsU3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoZGF0YU5hbWUpO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoZGF0YVZhbFN0cmluZyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhVmFsU3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICBcdFx0XHRcdFx0Q3JlYXRlIE1hcmt1cFxuICAgXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0dmFyIG9yaWdXaWR0aCA9IHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aDtcblx0XHRcdHZhciB1cGRhdGVTbGlkZXIgPSBmYWxzZTtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRcdHZhciBzbGlkZXJUcmFja1NlbGVjdGlvbjtcblx0XHRcdHZhciBzbGlkZXJUcmFja0xvdywgc2xpZGVyVHJhY2tIaWdoO1xuXHRcdFx0dmFyIHNsaWRlck1pbkhhbmRsZTtcblx0XHRcdHZhciBzbGlkZXJNYXhIYW5kbGU7XG5cblx0XHRcdGlmICh0aGlzLnNsaWRlckVsZW0pIHtcblx0XHRcdFx0dXBkYXRlU2xpZGVyID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8qIENyZWF0ZSBlbGVtZW50cyBuZWVkZWQgZm9yIHNsaWRlciAqL1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uY2xhc3NOYW1lID0gXCJzbGlkZXJcIjtcblxuXHRcdFx0XHQvKiBDcmVhdGUgc2xpZGVyIHRyYWNrIGVsZW1lbnRzICovXG5cdFx0XHRcdHZhciBzbGlkZXJUcmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlclRyYWNrLmNsYXNzTmFtZSA9IFwic2xpZGVyLXRyYWNrXCI7XG5cblx0XHRcdFx0c2xpZGVyVHJhY2tMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJUcmFja0xvdy5jbGFzc05hbWUgPSBcInNsaWRlci10cmFjay1sb3dcIjtcblxuXHRcdFx0XHRzbGlkZXJUcmFja1NlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlclRyYWNrU2VsZWN0aW9uLmNsYXNzTmFtZSA9IFwic2xpZGVyLXNlbGVjdGlvblwiO1xuXG5cdFx0XHRcdHNsaWRlclRyYWNrSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlclRyYWNrSGlnaC5jbGFzc05hbWUgPSBcInNsaWRlci10cmFjay1oaWdoXCI7XG5cblx0XHRcdFx0c2xpZGVyTWluSGFuZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyTWluSGFuZGxlLmNsYXNzTmFtZSA9IFwic2xpZGVyLWhhbmRsZSBtaW4tc2xpZGVyLWhhbmRsZVwiO1xuXHRcdFx0XHRzbGlkZXJNaW5IYW5kbGUuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3NsaWRlcicpO1xuXHRcdFx0XHRzbGlkZXJNaW5IYW5kbGUuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWluJywgdGhpcy5vcHRpb25zLm1pbik7XG5cdFx0XHRcdHNsaWRlck1pbkhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVtYXgnLCB0aGlzLm9wdGlvbnMubWF4KTtcblxuXHRcdFx0XHRzbGlkZXJNYXhIYW5kbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJNYXhIYW5kbGUuY2xhc3NOYW1lID0gXCJzbGlkZXItaGFuZGxlIG1heC1zbGlkZXItaGFuZGxlXCI7XG5cdFx0XHRcdHNsaWRlck1heEhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc2xpZGVyJyk7XG5cdFx0XHRcdHNsaWRlck1heEhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVtaW4nLCB0aGlzLm9wdGlvbnMubWluKTtcblx0XHRcdFx0c2xpZGVyTWF4SGFuZGxlLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW1heCcsIHRoaXMub3B0aW9ucy5tYXgpO1xuXG5cdFx0XHRcdHNsaWRlclRyYWNrLmFwcGVuZENoaWxkKHNsaWRlclRyYWNrTG93KTtcblx0XHRcdFx0c2xpZGVyVHJhY2suYXBwZW5kQ2hpbGQoc2xpZGVyVHJhY2tTZWxlY3Rpb24pO1xuXHRcdFx0XHRzbGlkZXJUcmFjay5hcHBlbmRDaGlsZChzbGlkZXJUcmFja0hpZ2gpO1xuXG5cdFx0XHRcdC8qIENyZWF0ZSBoaWdobGlnaHQgcmFuZ2UgZWxlbWVudHMgKi9cblx0XHRcdFx0dGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzID0gW107XG5cdFx0XHRcdHZhciByYW5nZUhpZ2hsaWdodHNPcHRzID0gdGhpcy5vcHRpb25zLnJhbmdlSGlnaGxpZ2h0cztcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocmFuZ2VIaWdobGlnaHRzT3B0cykgJiYgcmFuZ2VIaWdobGlnaHRzT3B0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCByYW5nZUhpZ2hsaWdodHNPcHRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHR2YXIgcmFuZ2VIaWdobGlnaHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRcdHZhciBjdXN0b21DbGFzc1N0cmluZyA9IHJhbmdlSGlnaGxpZ2h0c09wdHNbal0uY2xhc3MgfHwgXCJcIjtcblx0XHRcdFx0XHRcdHJhbmdlSGlnaGxpZ2h0RWxlbWVudC5jbGFzc05hbWUgPSBcInNsaWRlci1yYW5nZUhpZ2hsaWdodCBzbGlkZXItc2VsZWN0aW9uIFwiICsgY3VzdG9tQ2xhc3NTdHJpbmc7XG5cdFx0XHRcdFx0XHR0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHMucHVzaChyYW5nZUhpZ2hsaWdodEVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0c2xpZGVyVHJhY2suYXBwZW5kQ2hpbGQocmFuZ2VIaWdobGlnaHRFbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBBZGQgYXJpYS1sYWJlbGxlZGJ5IHRvIGhhbmRsZSdzICovXG5cdFx0XHRcdHZhciBpc0xhYmVsbGVkYnlBcnJheSA9IEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLmxhYmVsbGVkYnkpO1xuXHRcdFx0XHRpZiAoaXNMYWJlbGxlZGJ5QXJyYXkgJiYgdGhpcy5vcHRpb25zLmxhYmVsbGVkYnlbMF0pIHtcblx0XHRcdFx0XHRzbGlkZXJNaW5IYW5kbGUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm9wdGlvbnMubGFiZWxsZWRieVswXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzTGFiZWxsZWRieUFycmF5ICYmIHRoaXMub3B0aW9ucy5sYWJlbGxlZGJ5WzFdKSB7XG5cdFx0XHRcdFx0c2xpZGVyTWF4SGFuZGxlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5vcHRpb25zLmxhYmVsbGVkYnlbMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghaXNMYWJlbGxlZGJ5QXJyYXkgJiYgdGhpcy5vcHRpb25zLmxhYmVsbGVkYnkpIHtcblx0XHRcdFx0XHRzbGlkZXJNaW5IYW5kbGUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm9wdGlvbnMubGFiZWxsZWRieSk7XG5cdFx0XHRcdFx0c2xpZGVyTWF4SGFuZGxlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5vcHRpb25zLmxhYmVsbGVkYnkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogQ3JlYXRlIHRpY2tzICovXG5cdFx0XHRcdHRoaXMudGlja3MgPSBbXTtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnRpY2tzKSAmJiB0aGlzLm9wdGlvbnMudGlja3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMudGlja3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHR0aGlzLnRpY2tzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzbGlkZXItdGljay1jb250YWluZXInO1xuXG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMub3B0aW9ucy50aWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIHRpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHRcdHRpY2suY2xhc3NOYW1lID0gJ3NsaWRlci10aWNrJztcblx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudGlja3NfdG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGlja0xpc3RlbmVyUmVmZXJlbmNlID0gdGhpcy5fYWRkVGlja0xpc3RlbmVyKCk7XG5cdFx0XHRcdFx0XHRcdHZhciBlbnRlckNhbGxiYWNrID0gdGlja0xpc3RlbmVyUmVmZXJlbmNlLmFkZE1vdXNlRW50ZXIodGhpcywgdGljaywgaSk7XG5cdFx0XHRcdFx0XHRcdHZhciBsZWF2ZUNhbGxiYWNrID0gdGlja0xpc3RlbmVyUmVmZXJlbmNlLmFkZE1vdXNlTGVhdmUodGhpcywgdGljayk7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy50aWNrc0NhbGxiYWNrTWFwW2ldID0ge1xuXHRcdFx0XHRcdFx0XHRcdG1vdXNlRW50ZXI6IGVudGVyQ2FsbGJhY2ssXG5cdFx0XHRcdFx0XHRcdFx0bW91c2VMZWF2ZTogbGVhdmVDYWxsYmFja1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy50aWNrcy5wdXNoKHRpY2spO1xuXHRcdFx0XHRcdFx0dGhpcy50aWNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWNrKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzbGlkZXJUcmFja1NlbGVjdGlvbi5jbGFzc05hbWUgKz0gXCIgdGljay1zbGlkZXItc2VsZWN0aW9uXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnRpY2tMYWJlbHMgPSBbXTtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnRpY2tzX2xhYmVscykgJiYgdGhpcy5vcHRpb25zLnRpY2tzX2xhYmVscy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbENvbnRhaW5lci5jbGFzc05hbWUgPSAnc2xpZGVyLXRpY2stbGFiZWwtY29udGFpbmVyJztcblxuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMudGlja3NfbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHRcdHZhciBub1RpY2tQb3NpdGlvbnNTcGVjaWZpZWQgPSB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zLmxlbmd0aCA9PT0gMDtcblx0XHRcdFx0XHRcdHZhciB0aWNrTGFiZWxzSW5kZXggPSB0aGlzLm9wdGlvbnMucmV2ZXJzZWQgJiYgbm9UaWNrUG9zaXRpb25zU3BlY2lmaWVkID8gdGhpcy5vcHRpb25zLnRpY2tzX2xhYmVscy5sZW5ndGggLSAoaSArIDEpIDogaTtcblx0XHRcdFx0XHRcdGxhYmVsLmNsYXNzTmFtZSA9ICdzbGlkZXItdGljay1sYWJlbCc7XG5cdFx0XHRcdFx0XHRsYWJlbC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMudGlja3NfbGFiZWxzW3RpY2tMYWJlbHNJbmRleF07XG5cblx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVscy5wdXNoKGxhYmVsKTtcblx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgY3JlYXRlQW5kQXBwZW5kVG9vbHRpcFN1YkVsZW1lbnRzID0gZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kVG9vbHRpcFN1YkVsZW1lbnRzKHRvb2x0aXBFbGVtKSB7XG5cdFx0XHRcdFx0dmFyIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRhcnJvdy5jbGFzc05hbWUgPSBcInRvb2x0aXAtYXJyb3dcIjtcblxuXHRcdFx0XHRcdHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0aW5uZXIuY2xhc3NOYW1lID0gXCJ0b29sdGlwLWlubmVyXCI7XG5cblx0XHRcdFx0XHR0b29sdGlwRWxlbS5hcHBlbmRDaGlsZChhcnJvdyk7XG5cdFx0XHRcdFx0dG9vbHRpcEVsZW0uYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8qIENyZWF0ZSB0b29sdGlwIGVsZW1lbnRzICovXG5cdFx0XHRcdHZhciBzbGlkZXJUb29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyVG9vbHRpcC5jbGFzc05hbWUgPSBcInRvb2x0aXAgdG9vbHRpcC1tYWluXCI7XG5cdFx0XHRcdHNsaWRlclRvb2x0aXAuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xuXHRcdFx0XHRjcmVhdGVBbmRBcHBlbmRUb29sdGlwU3ViRWxlbWVudHMoc2xpZGVyVG9vbHRpcCk7XG5cblx0XHRcdFx0dmFyIHNsaWRlclRvb2x0aXBNaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJUb29sdGlwTWluLmNsYXNzTmFtZSA9IFwidG9vbHRpcCB0b29sdGlwLW1pblwiO1xuXHRcdFx0XHRzbGlkZXJUb29sdGlwTWluLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcblx0XHRcdFx0Y3JlYXRlQW5kQXBwZW5kVG9vbHRpcFN1YkVsZW1lbnRzKHNsaWRlclRvb2x0aXBNaW4pO1xuXG5cdFx0XHRcdHZhciBzbGlkZXJUb29sdGlwTWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyVG9vbHRpcE1heC5jbGFzc05hbWUgPSBcInRvb2x0aXAgdG9vbHRpcC1tYXhcIjtcblx0XHRcdFx0c2xpZGVyVG9vbHRpcE1heC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG5cdFx0XHRcdGNyZWF0ZUFuZEFwcGVuZFRvb2x0aXBTdWJFbGVtZW50cyhzbGlkZXJUb29sdGlwTWF4KTtcblxuXHRcdFx0XHQvKiBBcHBlbmQgY29tcG9uZW50cyB0byBzbGlkZXJFbGVtICovXG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hcHBlbmRDaGlsZChzbGlkZXJUcmFjayk7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hcHBlbmRDaGlsZChzbGlkZXJUb29sdGlwKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFwcGVuZENoaWxkKHNsaWRlclRvb2x0aXBNaW4pO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYXBwZW5kQ2hpbGQoc2xpZGVyVG9vbHRpcE1heCk7XG5cblx0XHRcdFx0aWYgKHRoaXMudGlja0xhYmVsQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFwcGVuZENoaWxkKHRoaXMudGlja0xhYmVsQ29udGFpbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy50aWNrc0NvbnRhaW5lcikge1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRpY2tzQ29udGFpbmVyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hcHBlbmRDaGlsZChzbGlkZXJNaW5IYW5kbGUpO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYXBwZW5kQ2hpbGQoc2xpZGVyTWF4SGFuZGxlKTtcblxuXHRcdFx0XHQvKiBBcHBlbmQgc2xpZGVyIGVsZW1lbnQgdG8gcGFyZW50IGNvbnRhaW5lciwgcmlnaHQgYmVmb3JlIHRoZSBvcmlnaW5hbCA8aW5wdXQ+IGVsZW1lbnQgKi9cblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLnNsaWRlckVsZW0sIHRoaXMuZWxlbWVudCk7XG5cblx0XHRcdFx0LyogSGlkZSBvcmlnaW5hbCA8aW5wdXQ+IGVsZW1lbnQgKi9cblx0XHRcdFx0dGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdH1cblx0XHRcdC8qIElmIEpRdWVyeSBleGlzdHMsIGNhY2hlIEpRIHJlZmVyZW5jZXMgKi9cblx0XHRcdGlmICgkKSB7XG5cdFx0XHRcdHRoaXMuJGVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudCk7XG5cdFx0XHRcdHRoaXMuJHNsaWRlckVsZW0gPSAkKHRoaXMuc2xpZGVyRWxlbSk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICBcdFx0XHRcdFx0XHRTZXR1cFxuICAgXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0XHRcdHRoaXMuZXZlbnRUb0NhbGxiYWNrTWFwID0ge307XG5cdFx0XHR0aGlzLnNsaWRlckVsZW0uaWQgPSB0aGlzLm9wdGlvbnMuaWQ7XG5cblx0XHRcdHRoaXMudG91Y2hDYXBhYmxlID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2g7XG5cblx0XHRcdHRoaXMudG91Y2hYID0gMDtcblx0XHRcdHRoaXMudG91Y2hZID0gMDtcblxuXHRcdFx0dGhpcy50b29sdGlwID0gdGhpcy5zbGlkZXJFbGVtLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLW1haW4nKTtcblx0XHRcdHRoaXMudG9vbHRpcElubmVyID0gdGhpcy50b29sdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLWlubmVyJyk7XG5cblx0XHRcdHRoaXMudG9vbHRpcF9taW4gPSB0aGlzLnNsaWRlckVsZW0ucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtbWluJyk7XG5cdFx0XHR0aGlzLnRvb2x0aXBJbm5lcl9taW4gPSB0aGlzLnRvb2x0aXBfbWluLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLWlubmVyJyk7XG5cblx0XHRcdHRoaXMudG9vbHRpcF9tYXggPSB0aGlzLnNsaWRlckVsZW0ucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtbWF4Jyk7XG5cdFx0XHR0aGlzLnRvb2x0aXBJbm5lcl9tYXggPSB0aGlzLnRvb2x0aXBfbWF4LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLWlubmVyJyk7XG5cblx0XHRcdGlmIChTbGlkZXJTY2FsZVt0aGlzLm9wdGlvbnMuc2NhbGVdKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy5zY2FsZSA9IFNsaWRlclNjYWxlW3RoaXMub3B0aW9ucy5zY2FsZV07XG5cdFx0XHR9XG5cblx0XHRcdGlmICh1cGRhdGVTbGlkZXIgPT09IHRydWUpIHtcblx0XHRcdFx0Ly8gUmVzZXQgY2xhc3Nlc1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnNsaWRlckVsZW0sICdzbGlkZXItaG9yaXpvbnRhbCcpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnNsaWRlckVsZW0sICdzbGlkZXItdmVydGljYWwnKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5zbGlkZXJFbGVtLCAnc2xpZGVyLXJ0bCcpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXAsICdoaWRlJyk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcF9taW4sICdoaWRlJyk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcF9tYXgsICdoaWRlJyk7XG5cblx0XHRcdFx0Ly8gVW5kbyBleGlzdGluZyBpbmxpbmUgc3R5bGVzIGZvciB0cmFja1xuXHRcdFx0XHRbXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJ0b3BcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkodGhpcy50cmFja0xvdywgcHJvcCk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkodGhpcy50cmFja1NlbGVjdGlvbiwgcHJvcCk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkodGhpcy50cmFja0hpZ2gsIHByb3ApO1xuXHRcdFx0XHR9LCB0aGlzKTtcblxuXHRcdFx0XHQvLyBVbmRvIGlubGluZSBzdHlsZXMgb24gaGFuZGxlc1xuXHRcdFx0XHRbdGhpcy5oYW5kbGUxLCB0aGlzLmhhbmRsZTJdLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSkge1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KGhhbmRsZSwgJ2xlZnQnKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eShoYW5kbGUsICdyaWdodCcpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KGhhbmRsZSwgJ3RvcCcpO1xuXHRcdFx0XHR9LCB0aGlzKTtcblxuXHRcdFx0XHQvLyBVbmRvIGlubGluZSBzdHlsZXMgYW5kIGNsYXNzZXMgb24gdG9vbHRpcHNcblx0XHRcdFx0W3RoaXMudG9vbHRpcCwgdGhpcy50b29sdGlwX21pbiwgdGhpcy50b29sdGlwX21heF0uZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KHRvb2x0aXAsICdsZWZ0Jyk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkodG9vbHRpcCwgJ3JpZ2h0Jyk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkodG9vbHRpcCwgJ3RvcCcpO1xuXG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModG9vbHRpcCwgJ3JpZ2h0Jyk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModG9vbHRpcCwgJ2xlZnQnKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0b29sdGlwLCAndG9wJyk7XG5cdFx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMuc2xpZGVyRWxlbSwgJ3NsaWRlci12ZXJ0aWNhbCcpO1xuXHRcdFx0XHR0aGlzLnN0eWxlUG9zID0gJ3RvcCc7XG5cdFx0XHRcdHRoaXMubW91c2VQb3MgPSAncGFnZVknO1xuXHRcdFx0XHR0aGlzLnNpemVQb3MgPSAnb2Zmc2V0SGVpZ2h0Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMuc2xpZGVyRWxlbSwgJ3NsaWRlci1ob3Jpem9udGFsJyk7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5zdHlsZS53aWR0aCA9IG9yaWdXaWR0aDtcblx0XHRcdFx0dGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJ0bCkge1xuXHRcdFx0XHRcdHRoaXMuc3R5bGVQb3MgPSAncmlnaHQnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc3R5bGVQb3MgPSAnbGVmdCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5tb3VzZVBvcyA9ICdwYWdlWCc7XG5cdFx0XHRcdHRoaXMuc2l6ZVBvcyA9ICdvZmZzZXRXaWR0aCc7XG5cdFx0XHR9XG5cdFx0XHQvLyBzcGVjaWZpYyBydGwgY2xhc3Ncblx0XHRcdGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMuc2xpZGVyRWxlbSwgJ3NsaWRlci1ydGwnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3NldFRvb2x0aXBQb3NpdGlvbigpO1xuXHRcdFx0LyogSW4gY2FzZSB0aWNrcyBhcmUgc3BlY2lmaWVkLCBvdmVyd3JpdGUgdGhlIG1pbiBhbmQgbWF4IGJvdW5kcyAqL1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnRpY2tzKSAmJiB0aGlzLm9wdGlvbnMudGlja3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMubWF4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdGhpcy5vcHRpb25zLnRpY2tzKTtcblx0XHRcdFx0dGhpcy5vcHRpb25zLm1pbiA9IE1hdGgubWluLmFwcGx5KE1hdGgsIHRoaXMub3B0aW9ucy50aWNrcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy52YWx1ZSkpIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zLnJhbmdlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWUgPSB0aGlzLm9wdGlvbnMudmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHQvLyBVc2VyIHdhbnRzIGEgcmFuZ2UsIGJ1dCB2YWx1ZSBpcyBub3QgYW4gYXJyYXlcblx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWUgPSBbdGhpcy5vcHRpb25zLnZhbHVlLCB0aGlzLm9wdGlvbnMubWF4XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlID0gdGhpcy5vcHRpb25zLnZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnRyYWNrTG93ID0gc2xpZGVyVHJhY2tMb3cgfHwgdGhpcy50cmFja0xvdztcblx0XHRcdHRoaXMudHJhY2tTZWxlY3Rpb24gPSBzbGlkZXJUcmFja1NlbGVjdGlvbiB8fCB0aGlzLnRyYWNrU2VsZWN0aW9uO1xuXHRcdFx0dGhpcy50cmFja0hpZ2ggPSBzbGlkZXJUcmFja0hpZ2ggfHwgdGhpcy50cmFja0hpZ2g7XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0aW9uID09PSAnbm9uZScpIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50cmFja0xvdywgJ2hpZGUnKTtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50cmFja1NlbGVjdGlvbiwgJ2hpZGUnKTtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50cmFja0hpZ2gsICdoaWRlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3Rpb24gPT09ICdhZnRlcicgfHwgdGhpcy5vcHRpb25zLnNlbGVjdGlvbiA9PT0gJ2JlZm9yZScpIHtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50cmFja0xvdywgJ2hpZGUnKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50cmFja1NlbGVjdGlvbiwgJ2hpZGUnKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50cmFja0hpZ2gsICdoaWRlJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuaGFuZGxlMSA9IHNsaWRlck1pbkhhbmRsZSB8fCB0aGlzLmhhbmRsZTE7XG5cdFx0XHR0aGlzLmhhbmRsZTIgPSBzbGlkZXJNYXhIYW5kbGUgfHwgdGhpcy5oYW5kbGUyO1xuXG5cdFx0XHRpZiAodXBkYXRlU2xpZGVyID09PSB0cnVlKSB7XG5cdFx0XHRcdC8vIFJlc2V0IGNsYXNzZXNcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5oYW5kbGUxLCAncm91bmQgdHJpYW5nbGUnKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5oYW5kbGUyLCAncm91bmQgdHJpYW5nbGUgaGlkZScpO1xuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLnRpY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50aWNrc1tpXSwgJ3JvdW5kIHRyaWFuZ2xlIGhpZGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYXZhaWxhYmxlSGFuZGxlTW9kaWZpZXJzID0gWydyb3VuZCcsICd0cmlhbmdsZScsICdjdXN0b20nXTtcblx0XHRcdHZhciBpc1ZhbGlkSGFuZGxlVHlwZSA9IGF2YWlsYWJsZUhhbmRsZU1vZGlmaWVycy5pbmRleE9mKHRoaXMub3B0aW9ucy5oYW5kbGUpICE9PSAtMTtcblx0XHRcdGlmIChpc1ZhbGlkSGFuZGxlVHlwZSkge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLmhhbmRsZTEsIHRoaXMub3B0aW9ucy5oYW5kbGUpO1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLmhhbmRsZTIsIHRoaXMub3B0aW9ucy5oYW5kbGUpO1xuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLnRpY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50aWNrc1tpXSwgdGhpcy5vcHRpb25zLmhhbmRsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fc3RhdGUub2Zmc2V0ID0gdGhpcy5fb2Zmc2V0KHRoaXMuc2xpZGVyRWxlbSk7XG5cdFx0XHR0aGlzLl9zdGF0ZS5zaXplID0gdGhpcy5zbGlkZXJFbGVtW3RoaXMuc2l6ZVBvc107XG5cdFx0XHR0aGlzLnNldFZhbHVlKHRoaXMuX3N0YXRlLnZhbHVlKTtcblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgXHRcdFx0XHRCaW5kIEV2ZW50IExpc3RlbmVyc1xuICAgXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdC8vIEJpbmQga2V5Ym9hcmQgaGFuZGxlcnNcblx0XHRcdHRoaXMuaGFuZGxlMUtleWRvd24gPSB0aGlzLl9rZXlkb3duLmJpbmQodGhpcywgMCk7XG5cdFx0XHR0aGlzLmhhbmRsZTEuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGUxS2V5ZG93biwgZmFsc2UpO1xuXG5cdFx0XHR0aGlzLmhhbmRsZTJLZXlkb3duID0gdGhpcy5fa2V5ZG93bi5iaW5kKHRoaXMsIDEpO1xuXHRcdFx0dGhpcy5oYW5kbGUyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlMktleWRvd24sIGZhbHNlKTtcblxuXHRcdFx0dGhpcy5tb3VzZWRvd24gPSB0aGlzLl9tb3VzZWRvd24uYmluZCh0aGlzKTtcblx0XHRcdHRoaXMudG91Y2hzdGFydCA9IHRoaXMuX3RvdWNoc3RhcnQuYmluZCh0aGlzKTtcblx0XHRcdHRoaXMudG91Y2htb3ZlID0gdGhpcy5fdG91Y2htb3ZlLmJpbmQodGhpcyk7XG5cblx0XHRcdGlmICh0aGlzLnRvdWNoQ2FwYWJsZSkge1xuXHRcdFx0XHQvLyBUZXN0IGZvciBwYXNzaXZlIGV2ZW50IHN1cHBvcnRcblx0XHRcdFx0dmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdFx0XHRcdFx0XHRzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0Ly8gVXNlIG91ciBkZXRlY3QncyByZXN1bHRzLiBwYXNzaXZlIGFwcGxpZWQgaWYgc3VwcG9ydGVkLCBjYXB0dXJlIHdpbGwgYmUgZmFsc2UgZWl0aGVyIHdheS5cblx0XHRcdFx0dmFyIGV2ZW50T3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cdFx0XHRcdC8vIEJpbmQgdG91Y2ggaGFuZGxlcnNcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMudG91Y2hzdGFydCwgZXZlbnRPcHRpb25zKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaG1vdmUsIGV2ZW50T3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNsaWRlckVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm1vdXNlZG93biwgZmFsc2UpO1xuXG5cdFx0XHQvLyBCaW5kIHdpbmRvdyBoYW5kbGVyc1xuXHRcdFx0dGhpcy5yZXNpemUgPSB0aGlzLl9yZXNpemUuYmluZCh0aGlzKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplLCBmYWxzZSk7XG5cblx0XHRcdC8vIEJpbmQgdG9vbHRpcC1yZWxhdGVkIGhhbmRsZXJzXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnRvb2x0aXAgPT09ICdoaWRlJykge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXAsICdoaWRlJyk7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcF9taW4sICdoaWRlJyk7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcF9tYXgsICdoaWRlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwID09PSAnYWx3YXlzJykge1xuXHRcdFx0XHR0aGlzLl9zaG93VG9vbHRpcCgpO1xuXHRcdFx0XHR0aGlzLl9hbHdheXNTaG93VG9vbHRpcCA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNob3dUb29sdGlwID0gdGhpcy5fc2hvd1Rvb2x0aXAuYmluZCh0aGlzKTtcblx0XHRcdFx0dGhpcy5oaWRlVG9vbHRpcCA9IHRoaXMuX2hpZGVUb29sdGlwLmJpbmQodGhpcyk7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50aWNrc190b29sdGlwKSB7XG5cdFx0XHRcdFx0dmFyIGNhbGxiYWNrSGFuZGxlID0gdGhpcy5fYWRkVGlja0xpc3RlbmVyKCk7XG5cdFx0XHRcdFx0Ly9jcmVhdGUgaGFuZGxlMSBsaXN0ZW5lcnMgYW5kIHN0b3JlIHJlZmVyZW5jZXMgaW4gbWFwXG5cdFx0XHRcdFx0dmFyIG1vdXNlRW50ZXIgPSBjYWxsYmFja0hhbmRsZS5hZGRNb3VzZUVudGVyKHRoaXMsIHRoaXMuaGFuZGxlMSk7XG5cdFx0XHRcdFx0dmFyIG1vdXNlTGVhdmUgPSBjYWxsYmFja0hhbmRsZS5hZGRNb3VzZUxlYXZlKHRoaXMsIHRoaXMuaGFuZGxlMSk7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGVDYWxsYmFja01hcC5oYW5kbGUxID0ge1xuXHRcdFx0XHRcdFx0bW91c2VFbnRlcjogbW91c2VFbnRlcixcblx0XHRcdFx0XHRcdG1vdXNlTGVhdmU6IG1vdXNlTGVhdmVcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdC8vY3JlYXRlIGhhbmRsZTIgbGlzdGVuZXJzIGFuZCBzdG9yZSByZWZlcmVuY2VzIGluIG1hcFxuXHRcdFx0XHRcdG1vdXNlRW50ZXIgPSBjYWxsYmFja0hhbmRsZS5hZGRNb3VzZUVudGVyKHRoaXMsIHRoaXMuaGFuZGxlMik7XG5cdFx0XHRcdFx0bW91c2VMZWF2ZSA9IGNhbGxiYWNrSGFuZGxlLmFkZE1vdXNlTGVhdmUodGhpcywgdGhpcy5oYW5kbGUyKTtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZUNhbGxiYWNrTWFwLmhhbmRsZTIgPSB7XG5cdFx0XHRcdFx0XHRtb3VzZUVudGVyOiBtb3VzZUVudGVyLFxuXHRcdFx0XHRcdFx0bW91c2VMZWF2ZTogbW91c2VMZWF2ZVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuc2hvd1Rvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5oaWRlVG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5oYW5kbGUxLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLnNob3dUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLmhpZGVUb29sdGlwLCBmYWxzZSk7XG5cblx0XHRcdFx0dGhpcy5oYW5kbGUyLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLnNob3dUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMi5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLmhpZGVUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kaXNhYmxlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgXHRcdFx0XHRJTlNUQU5DRSBQUk9QRVJUSUVTL01FVEhPRFNcbiAgXHQtIEFueSBtZXRob2RzIGJvdW5kIHRvIHRoZSBwcm90b3R5cGUgYXJlIGNvbnNpZGVyZWRcbiAgcGFydCBvZiB0aGUgcGx1Z2luJ3MgYHB1YmxpY2AgaW50ZXJmYWNlXG4gIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0U2xpZGVyLnByb3RvdHlwZSA9IHtcblx0XHRcdF9pbml0OiBmdW5jdGlvbiBfaW5pdCgpIHt9LCAvLyBOT1RFOiBNdXN0IGV4aXN0IHRvIHN1cHBvcnQgYnJpZGdldFxuXG5cdFx0XHRjb25zdHJ1Y3RvcjogU2xpZGVyLFxuXG5cdFx0XHRkZWZhdWx0T3B0aW9uczoge1xuXHRcdFx0XHRpZDogXCJcIixcblx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRtYXg6IDEwLFxuXHRcdFx0XHRzdGVwOiAxLFxuXHRcdFx0XHRwcmVjaXNpb246IDAsXG5cdFx0XHRcdG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdHZhbHVlOiA1LFxuXHRcdFx0XHRyYW5nZTogZmFsc2UsXG5cdFx0XHRcdHNlbGVjdGlvbjogJ2JlZm9yZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdzaG93Jyxcblx0XHRcdFx0dG9vbHRpcF9zcGxpdDogZmFsc2UsXG5cdFx0XHRcdGhhbmRsZTogJ3JvdW5kJyxcblx0XHRcdFx0cmV2ZXJzZWQ6IGZhbHNlLFxuXHRcdFx0XHRydGw6ICdhdXRvJyxcblx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdFx0Zm9ybWF0dGVyOiBmdW5jdGlvbiBmb3JtYXR0ZXIodmFsKSB7XG5cdFx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbFswXSArIFwiIDogXCIgKyB2YWxbMV07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRuYXR1cmFsX2Fycm93X2tleXM6IGZhbHNlLFxuXHRcdFx0XHR0aWNrczogW10sXG5cdFx0XHRcdHRpY2tzX3Bvc2l0aW9uczogW10sXG5cdFx0XHRcdHRpY2tzX2xhYmVsczogW10sXG5cdFx0XHRcdHRpY2tzX3NuYXBfYm91bmRzOiAwLFxuXHRcdFx0XHR0aWNrc190b29sdGlwOiBmYWxzZSxcblx0XHRcdFx0c2NhbGU6ICdsaW5lYXInLFxuXHRcdFx0XHRmb2N1czogZmFsc2UsXG5cdFx0XHRcdHRvb2x0aXBfcG9zaXRpb246IG51bGwsXG5cdFx0XHRcdGxhYmVsbGVkYnk6IG51bGwsXG5cdFx0XHRcdHJhbmdlSGlnaGxpZ2h0czogW11cblx0XHRcdH0sXG5cblx0XHRcdGdldEVsZW1lbnQ6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNsaWRlckVsZW07XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRWYWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fc3RhdGUudmFsdWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3N0YXRlLnZhbHVlWzBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRWYWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsLCB0cmlnZ2VyU2xpZGVFdmVudCwgdHJpZ2dlckNoYW5nZUV2ZW50KSB7XG5cdFx0XHRcdGlmICghdmFsKSB7XG5cdFx0XHRcdFx0dmFsID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgb2xkVmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlID0gdGhpcy5fdmFsaWRhdGVJbnB1dFZhbHVlKHZhbCk7XG5cdFx0XHRcdHZhciBhcHBseVByZWNpc2lvbiA9IHRoaXMuX2FwcGx5UHJlY2lzaW9uLmJpbmQodGhpcyk7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlWzBdID0gYXBwbHlQcmVjaXNpb24odGhpcy5fc3RhdGUudmFsdWVbMF0pO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlWzFdID0gYXBwbHlQcmVjaXNpb24odGhpcy5fc3RhdGUudmFsdWVbMV0pO1xuXG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWVbMF0gPSBNYXRoLm1heCh0aGlzLm9wdGlvbnMubWluLCBNYXRoLm1pbih0aGlzLm9wdGlvbnMubWF4LCB0aGlzLl9zdGF0ZS52YWx1ZVswXSkpO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlWzFdID0gTWF0aC5tYXgodGhpcy5vcHRpb25zLm1pbiwgTWF0aC5taW4odGhpcy5vcHRpb25zLm1heCwgdGhpcy5fc3RhdGUudmFsdWVbMV0pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZSA9IGFwcGx5UHJlY2lzaW9uKHRoaXMuX3N0YXRlLnZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZSA9IFtNYXRoLm1heCh0aGlzLm9wdGlvbnMubWluLCBNYXRoLm1pbih0aGlzLm9wdGlvbnMubWF4LCB0aGlzLl9zdGF0ZS52YWx1ZSkpXTtcblx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLmhhbmRsZTIsICdoaWRlJyk7XG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5zZWxlY3Rpb24gPT09ICdhZnRlcicpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlWzFdID0gdGhpcy5vcHRpb25zLm1heDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWVbMV0gPSB0aGlzLm9wdGlvbnMubWluO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMubWF4ID4gdGhpcy5vcHRpb25zLm1pbikge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2UgPSBbdGhpcy5fdG9QZXJjZW50YWdlKHRoaXMuX3N0YXRlLnZhbHVlWzBdKSwgdGhpcy5fdG9QZXJjZW50YWdlKHRoaXMuX3N0YXRlLnZhbHVlWzFdKSwgdGhpcy5vcHRpb25zLnN0ZXAgKiAxMDAgLyAodGhpcy5vcHRpb25zLm1heCAtIHRoaXMub3B0aW9ucy5taW4pXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5wZXJjZW50YWdlID0gWzAsIDAsIDEwMF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9sYXlvdXQoKTtcblx0XHRcdFx0dmFyIG5ld1ZhbHVlID0gdGhpcy5vcHRpb25zLnJhbmdlID8gdGhpcy5fc3RhdGUudmFsdWUgOiB0aGlzLl9zdGF0ZS52YWx1ZVswXTtcblxuXHRcdFx0XHR0aGlzLl9zZXREYXRhVmFsKG5ld1ZhbHVlKTtcblx0XHRcdFx0aWYgKHRyaWdnZXJTbGlkZUV2ZW50ID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignc2xpZGUnLCBuZXdWYWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSAmJiB0cmlnZ2VyQ2hhbmdlRXZlbnQgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogb2xkVmFsdWUsXG5cdFx0XHRcdFx0XHRuZXdWYWx1ZTogbmV3VmFsdWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGV2ZW50IGhhbmRsZXJzIG9uIHNsaWRlciBlbGVtZW50c1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVTbGlkZXJFdmVudEhhbmRsZXJzKCk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBzbGlkZXIgZnJvbSB0aGUgRE9NXG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2xpZGVyRWxlbSk7XG5cdFx0XHRcdC8qIFNob3cgb3JpZ2luYWwgPGlucHV0PiBlbGVtZW50ICovXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblxuXHRcdFx0XHQvLyBDbGVhciBvdXQgY3VzdG9tIGV2ZW50IGJpbmRpbmdzXG5cdFx0XHRcdHRoaXMuX2NsZWFuVXBFdmVudENhbGxiYWNrc01hcCgpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBkYXRhIHZhbHVlc1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YVwiKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgSlF1ZXJ5IGhhbmRsZXJzL2RhdGFcblx0XHRcdFx0aWYgKCQpIHtcblx0XHRcdFx0XHR0aGlzLl91bmJpbmRKUXVlcnlFdmVudEhhbmRsZXJzKCk7XG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudC5yZW1vdmVEYXRhKCdzbGlkZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0ZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRcdFx0dGhpcy5fc3RhdGUuZW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTEucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMi5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy5zbGlkZXJFbGVtLCAnc2xpZGVyLWRpc2FibGVkJyk7XG5cdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ3NsaWRlRGlzYWJsZWQnKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5oYW5kbGUxLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTIuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuc2xpZGVyRWxlbSwgJ3NsaWRlci1kaXNhYmxlZCcpO1xuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdzbGlkZUVuYWJsZWQnKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fc3RhdGUuZW5hYmxlZCkge1xuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZW5hYmxlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRpc0VuYWJsZWQ6IGZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3N0YXRlLmVuYWJsZWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHRvbjogZnVuY3Rpb24gb24oZXZ0LCBjYWxsYmFjaykge1xuXHRcdFx0XHR0aGlzLl9iaW5kTm9uUXVlcnlFdmVudEhhbmRsZXIoZXZ0LCBjYWxsYmFjayk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0b2ZmOiBmdW5jdGlvbiBvZmYoZXZ0LCBjYWxsYmFjaykge1xuXHRcdFx0XHRpZiAoJCkge1xuXHRcdFx0XHRcdHRoaXMuJGVsZW1lbnQub2ZmKGV2dCwgY2FsbGJhY2spO1xuXHRcdFx0XHRcdHRoaXMuJHNsaWRlckVsZW0ub2ZmKGV2dCwgY2FsbGJhY2spO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3VuYmluZE5vblF1ZXJ5RXZlbnRIYW5kbGVyKGV2dCwgY2FsbGJhY2spO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcblx0XHRcdFx0aWYgKGF0dHJpYnV0ZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnNbYXR0cmlidXRlXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9uc1thdHRyaWJ1dGVdID0gdmFsdWU7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0cmVmcmVzaDogZnVuY3Rpb24gcmVmcmVzaCgpIHtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlU2xpZGVyRXZlbnRIYW5kbGVycygpO1xuXHRcdFx0XHRjcmVhdGVOZXdTbGlkZXIuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cdFx0XHRcdGlmICgkKSB7XG5cdFx0XHRcdFx0Ly8gQmluZCBuZXcgaW5zdGFuY2Ugb2Ygc2xpZGVyIHRvIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0JC5kYXRhKHRoaXMuZWxlbWVudCwgJ3NsaWRlcicsIHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0cmVsYXlvdXQ6IGZ1bmN0aW9uIHJlbGF5b3V0KCkge1xuXHRcdFx0XHR0aGlzLl9yZXNpemUoKTtcblx0XHRcdFx0dGhpcy5fbGF5b3V0KCk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKitcbiAgIFx0XHRcdFx0SEVMUEVSU1xuICAgXHQtIEFueSBtZXRob2QgdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAgIC0gUGxhY2UgaXQgdW5kZXJuZWF0aCB0aGlzIGNvbW1lbnQgYmxvY2sgYW5kIHdyaXRlIGl0cyBzaWduYXR1cmUgbGlrZSBzbzpcbiAgIFx0XHRfZm5OYW1lIDogZnVuY3Rpb24oKSB7Li4ufVxuICAgXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0XHRcdF9yZW1vdmVTbGlkZXJFdmVudEhhbmRsZXJzOiBmdW5jdGlvbiBfcmVtb3ZlU2xpZGVyRXZlbnRIYW5kbGVycygpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGtleWRvd24gZXZlbnQgbGlzdGVuZXJzXG5cdFx0XHRcdHRoaXMuaGFuZGxlMS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZTFLZXlkb3duLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMi5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZTJLZXlkb3duLCBmYWxzZSk7XG5cblx0XHRcdFx0Ly9yZW1vdmUgdGhlIGxpc3RlbmVycyBmcm9tIHRoZSB0aWNrcyBhbmQgaGFuZGxlcyBpZiB0aGV5IGhhZCB0aGVpciBvd24gbGlzdGVuZXJzXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudGlja3NfdG9vbHRpcCkge1xuXHRcdFx0XHRcdHZhciB0aWNrcyA9IHRoaXMudGlja3NDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVyLXRpY2snKTtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRpY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aWNrc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy50aWNrc0NhbGxiYWNrTWFwW2ldLm1vdXNlRW50ZXIsIGZhbHNlKTtcblx0XHRcdFx0XHRcdHRpY2tzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnRpY2tzQ2FsbGJhY2tNYXBbaV0ubW91c2VMZWF2ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmhhbmRsZTEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlQ2FsbGJhY2tNYXAuaGFuZGxlMS5tb3VzZUVudGVyLCBmYWxzZSk7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZUNhbGxiYWNrTWFwLmhhbmRsZTIubW91c2VFbnRlciwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVDYWxsYmFja01hcC5oYW5kbGUxLm1vdXNlTGVhdmUsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlQ2FsbGJhY2tNYXAuaGFuZGxlMi5tb3VzZUxlYXZlLCBmYWxzZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmhhbmRsZUNhbGxiYWNrTWFwID0gbnVsbDtcblx0XHRcdFx0dGhpcy50aWNrc0NhbGxiYWNrTWFwID0gbnVsbDtcblxuXHRcdFx0XHRpZiAodGhpcy5zaG93VG9vbHRpcCkge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5zaG93VG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMi5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5zaG93VG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmhpZGVUb29sdGlwKSB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuaGlkZVRvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5oaWRlVG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHNsaWRlckVsZW1cblx0XHRcdFx0aWYgKHRoaXMuc2hvd1Rvb2x0aXApIHtcblx0XHRcdFx0XHR0aGlzLnNsaWRlckVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5zaG93VG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmhpZGVUb29sdGlwKSB7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuaGlkZVRvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy50b3VjaHN0YXJ0LCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMudG91Y2htb3ZlLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2Vkb3duLCBmYWxzZSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHdpbmRvdyBldmVudCBsaXN0ZW5lclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZSwgZmFsc2UpO1xuXHRcdFx0fSxcblx0XHRcdF9iaW5kTm9uUXVlcnlFdmVudEhhbmRsZXI6IGZ1bmN0aW9uIF9iaW5kTm9uUXVlcnlFdmVudEhhbmRsZXIoZXZ0LCBjYWxsYmFjaykge1xuXHRcdFx0XHRpZiAodGhpcy5ldmVudFRvQ2FsbGJhY2tNYXBbZXZ0XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5ldmVudFRvQ2FsbGJhY2tNYXBbZXZ0XSA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZXZlbnRUb0NhbGxiYWNrTWFwW2V2dF0ucHVzaChjYWxsYmFjayk7XG5cdFx0XHR9LFxuXHRcdFx0X3VuYmluZE5vblF1ZXJ5RXZlbnRIYW5kbGVyOiBmdW5jdGlvbiBfdW5iaW5kTm9uUXVlcnlFdmVudEhhbmRsZXIoZXZ0LCBjYWxsYmFjaykge1xuXHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gdGhpcy5ldmVudFRvQ2FsbGJhY2tNYXBbZXZ0XTtcblx0XHRcdFx0aWYgKGNhbGxiYWNrcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3NbaV0gPT09IGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9jbGVhblVwRXZlbnRDYWxsYmFja3NNYXA6IGZ1bmN0aW9uIF9jbGVhblVwRXZlbnRDYWxsYmFja3NNYXAoKSB7XG5cdFx0XHRcdHZhciBldmVudE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5ldmVudFRvQ2FsbGJhY2tNYXApO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lc1tpXTtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5ldmVudFRvQ2FsbGJhY2tNYXBbZXZlbnROYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9zaG93VG9vbHRpcDogZnVuY3Rpb24gX3Nob3dUb29sdGlwKCkge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBfc3BsaXQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwLCAnaW4nKTtcblx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0dGhpcy50b29sdGlwX21heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcF9taW4sICdpbicpO1xuXHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcF9tYXgsICdpbicpO1xuXHRcdFx0XHRcdHRoaXMudG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3N0YXRlLm92ZXIgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdF9oaWRlVG9vbHRpcDogZnVuY3Rpb24gX2hpZGVUb29sdGlwKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fc3RhdGUuaW5EcmFnID09PSBmYWxzZSAmJiB0aGlzLmFsd2F5c1Nob3dUb29sdGlwICE9PSB0cnVlKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwLCAnaW4nKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXBfbWluLCAnaW4nKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAnaW4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9zdGF0ZS5vdmVyID0gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0X3NldFRvb2xUaXBPbk1vdXNlT3ZlcjogZnVuY3Rpb24gX3NldFRvb2xUaXBPbk1vdXNlT3Zlcih0ZW1wU3RhdGUpIHtcblx0XHRcdFx0dmFyIGZvcm1hdHRlZFRvb2x0aXBWYWwgPSB0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKCF0ZW1wU3RhdGUgPyB0aGlzLl9zdGF0ZS52YWx1ZVswXSA6IHRlbXBTdGF0ZS52YWx1ZVswXSk7XG5cdFx0XHRcdHZhciBwb3NpdGlvblBlcmNlbnRhZ2VzID0gIXRlbXBTdGF0ZSA/IGdldFBvc2l0aW9uUGVyY2VudGFnZXModGhpcy5fc3RhdGUsIHRoaXMub3B0aW9ucy5yZXZlcnNlZCkgOiBnZXRQb3NpdGlvblBlcmNlbnRhZ2VzKHRlbXBTdGF0ZSwgdGhpcy5vcHRpb25zLnJldmVyc2VkKTtcblx0XHRcdFx0dGhpcy5fc2V0VGV4dCh0aGlzLnRvb2x0aXBJbm5lciwgZm9ybWF0dGVkVG9vbHRpcFZhbCk7XG5cblx0XHRcdFx0dGhpcy50b29sdGlwLnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gcG9zaXRpb25QZXJjZW50YWdlc1swXSArIFwiJVwiO1xuXG5cdFx0XHRcdGZ1bmN0aW9uIGdldFBvc2l0aW9uUGVyY2VudGFnZXMoc3RhdGUsIHJldmVyc2VkKSB7XG5cdFx0XHRcdFx0aWYgKHJldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWzEwMCAtIHN0YXRlLnBlcmNlbnRhZ2VbMF0sIHRoaXMub3B0aW9ucy5yYW5nZSA/IDEwMCAtIHN0YXRlLnBlcmNlbnRhZ2VbMV0gOiBzdGF0ZS5wZXJjZW50YWdlWzFdXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIFtzdGF0ZS5wZXJjZW50YWdlWzBdLCBzdGF0ZS5wZXJjZW50YWdlWzFdXTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9hZGRUaWNrTGlzdGVuZXI6IGZ1bmN0aW9uIF9hZGRUaWNrTGlzdGVuZXIoKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0YWRkTW91c2VFbnRlcjogZnVuY3Rpb24gYWRkTW91c2VFbnRlcihyZWZlcmVuY2UsIHRpY2ssIGluZGV4KSB7XG5cdFx0XHRcdFx0XHR2YXIgZW50ZXIgPSBmdW5jdGlvbiBlbnRlcigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRlbXBTdGF0ZSA9IHJlZmVyZW5jZS5fc3RhdGU7XG5cdFx0XHRcdFx0XHRcdHZhciBpZFN0cmluZyA9IGluZGV4ID49IDAgPyBpbmRleCA6IHRoaXMuYXR0cmlidXRlc1snYXJpYS12YWx1ZW5vdyddLnZhbHVlO1xuXHRcdFx0XHRcdFx0XHR2YXIgaG92ZXJJbmRleCA9IHBhcnNlSW50KGlkU3RyaW5nLCAxMCk7XG5cdFx0XHRcdFx0XHRcdHRlbXBTdGF0ZS52YWx1ZVswXSA9IGhvdmVySW5kZXg7XG5cdFx0XHRcdFx0XHRcdHRlbXBTdGF0ZS5wZXJjZW50YWdlWzBdID0gcmVmZXJlbmNlLm9wdGlvbnMudGlja3NfcG9zaXRpb25zW2hvdmVySW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRyZWZlcmVuY2UuX3NldFRvb2xUaXBPbk1vdXNlT3Zlcih0ZW1wU3RhdGUpO1xuXHRcdFx0XHRcdFx0XHRyZWZlcmVuY2UuX3Nob3dUb29sdGlwKCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0dGljay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBlbnRlciwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVudGVyO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YWRkTW91c2VMZWF2ZTogZnVuY3Rpb24gYWRkTW91c2VMZWF2ZShyZWZlcmVuY2UsIHRpY2spIHtcblx0XHRcdFx0XHRcdHZhciBsZWF2ZSA9IGZ1bmN0aW9uIGxlYXZlKCkge1xuXHRcdFx0XHRcdFx0XHRyZWZlcmVuY2UuX2hpZGVUb29sdGlwKCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0dGljay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBsZWF2ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxlYXZlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH0sXG5cdFx0XHRfbGF5b3V0OiBmdW5jdGlvbiBfbGF5b3V0KCkge1xuXHRcdFx0XHR2YXIgcG9zaXRpb25QZXJjZW50YWdlcztcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJldmVyc2VkKSB7XG5cdFx0XHRcdFx0cG9zaXRpb25QZXJjZW50YWdlcyA9IFsxMDAgLSB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdLCB0aGlzLm9wdGlvbnMucmFuZ2UgPyAxMDAgLSB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdIDogdGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cG9zaXRpb25QZXJjZW50YWdlcyA9IFt0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdLCB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGFuZGxlMS5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gKyBcIiVcIjtcblx0XHRcdFx0dGhpcy5oYW5kbGUxLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHRoaXMuX3N0YXRlLnZhbHVlWzBdKTtcblx0XHRcdFx0aWYgKGlzTmFOKHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIodGhpcy5fc3RhdGUudmFsdWVbMF0pKSkge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMS5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0JywgdGhpcy5vcHRpb25zLmZvcm1hdHRlcih0aGlzLl9zdGF0ZS52YWx1ZVswXSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5oYW5kbGUyLnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gcG9zaXRpb25QZXJjZW50YWdlc1sxXSArIFwiJVwiO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTIuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgdGhpcy5fc3RhdGUudmFsdWVbMV0pO1xuXHRcdFx0XHRpZiAoaXNOYU4odGhpcy5vcHRpb25zLmZvcm1hdHRlcih0aGlzLl9zdGF0ZS52YWx1ZVsxXSkpKSB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUyLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZXRleHQnLCB0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHRoaXMuX3N0YXRlLnZhbHVlWzFdKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBQb3NpdGlvbiBoaWdobGlnaHQgcmFuZ2UgZWxlbWVudHMgKi9cblx0XHRcdFx0aWYgKHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50cy5sZW5ndGggPiAwICYmIEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnJhbmdlSGlnaGxpZ2h0cykgJiYgdGhpcy5vcHRpb25zLnJhbmdlSGlnaGxpZ2h0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMub3B0aW9ucy5yYW5nZUhpZ2hsaWdodHMubGVuZ3RoOyBfaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgc3RhcnRQZXJjZW50ID0gdGhpcy5fdG9QZXJjZW50YWdlKHRoaXMub3B0aW9ucy5yYW5nZUhpZ2hsaWdodHNbX2ldLnN0YXJ0KTtcblx0XHRcdFx0XHRcdHZhciBlbmRQZXJjZW50ID0gdGhpcy5fdG9QZXJjZW50YWdlKHRoaXMub3B0aW9ucy5yYW5nZUhpZ2hsaWdodHNbX2ldLmVuZCk7XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHNwID0gMTAwIC0gZW5kUGVyY2VudDtcblx0XHRcdFx0XHRcdFx0ZW5kUGVyY2VudCA9IDEwMCAtIHN0YXJ0UGVyY2VudDtcblx0XHRcdFx0XHRcdFx0c3RhcnRQZXJjZW50ID0gc3A7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBjdXJyZW50UmFuZ2UgPSB0aGlzLl9jcmVhdGVIaWdobGlnaHRSYW5nZShzdGFydFBlcmNlbnQsIGVuZFBlcmNlbnQpO1xuXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFJhbmdlKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHNbX2ldLnN0eWxlLnRvcCA9IGN1cnJlbnRSYW5nZS5zdGFydCArIFwiJVwiO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50c1tfaV0uc3R5bGUuaGVpZ2h0ID0gY3VycmVudFJhbmdlLnNpemUgKyBcIiVcIjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJ0bCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzW19pXS5zdHlsZS5yaWdodCA9IGN1cnJlbnRSYW5nZS5zdGFydCArIFwiJVwiO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHNbX2ldLnN0eWxlLmxlZnQgPSBjdXJyZW50UmFuZ2Uuc3RhcnQgKyBcIiVcIjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzW19pXS5zdHlsZS53aWR0aCA9IGN1cnJlbnRSYW5nZS5zaXplICsgXCIlXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50c1tfaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIFBvc2l0aW9uIHRpY2tzIGFuZCBsYWJlbHMgKi9cblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnRpY2tzKSAmJiB0aGlzLm9wdGlvbnMudGlja3MubGVuZ3RoID4gMCkge1xuXG5cdFx0XHRcdFx0dmFyIHN0eWxlU2l6ZSA9IHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblx0XHRcdFx0XHR2YXIgc3R5bGVNYXJnaW47XG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuXHRcdFx0XHRcdFx0c3R5bGVNYXJnaW4gPSAnbWFyZ2luVG9wJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcblx0XHRcdFx0XHRcdFx0c3R5bGVNYXJnaW4gPSAnbWFyZ2luUmlnaHQnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c3R5bGVNYXJnaW4gPSAnbWFyZ2luTGVmdCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBsYWJlbFNpemUgPSB0aGlzLl9zdGF0ZS5zaXplIC8gKHRoaXMub3B0aW9ucy50aWNrcy5sZW5ndGggLSAxKTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLnRpY2tMYWJlbENvbnRhaW5lcikge1xuXHRcdFx0XHRcdFx0dmFyIGV4dHJhTWFyZ2luID0gMDtcblx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxDb250YWluZXIuc3R5bGVbc3R5bGVNYXJnaW5dID0gLWxhYmVsU2l6ZSAvIDIgKyBcInB4XCI7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRleHRyYU1hcmdpbiA9IHRoaXMudGlja0xhYmVsQ29udGFpbmVyLm9mZnNldEhlaWdodDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8qIENoaWRyZW4gYXJlIHBvc2l0aW9uIGFic29sdXRlLCBjYWxjdWxhdGUgaGVpZ2h0IGJ5IGZpbmRpbmcgdGhlIG1heCBvZmZzZXRIZWlnaHQgb2YgYSBjaGlsZCAqL1xuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy50aWNrTGFiZWxDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLnRpY2tMYWJlbENvbnRhaW5lci5jaGlsZE5vZGVzW2ldLm9mZnNldEhlaWdodCA+IGV4dHJhTWFyZ2luKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRleHRyYU1hcmdpbiA9IHRoaXMudGlja0xhYmVsQ29udGFpbmVyLmNoaWxkTm9kZXNbaV0ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSBleHRyYU1hcmdpbiArIFwicHhcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMudGlja3MubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0XHRcdFx0dmFyIHBlcmNlbnRhZ2UgPSB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zW2ldIHx8IHRoaXMuX3RvUGVyY2VudGFnZSh0aGlzLm9wdGlvbnMudGlja3NbaV0pO1xuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHRcdHBlcmNlbnRhZ2UgPSAxMDAgLSBwZXJjZW50YWdlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnRpY2tzW2ldLnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gcGVyY2VudGFnZSArIFwiJVwiO1xuXG5cdFx0XHRcdFx0XHQvKiBTZXQgY2xhc3MgbGFiZWxzIHRvIGRlbm90ZSB3aGV0aGVyIHRpY2tzIGFyZSBpbiB0aGUgc2VsZWN0aW9uICovXG5cdFx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRpY2tzW2ldLCAnaW4tc2VsZWN0aW9uJyk7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnNlbGVjdGlvbiA9PT0gJ2FmdGVyJyAmJiBwZXJjZW50YWdlID49IHBvc2l0aW9uUGVyY2VudGFnZXNbMF0pIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRpY2tzW2ldLCAnaW4tc2VsZWN0aW9uJyk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGlvbiA9PT0gJ2JlZm9yZScgJiYgcGVyY2VudGFnZSA8PSBwb3NpdGlvblBlcmNlbnRhZ2VzWzBdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50aWNrc1tpXSwgJ2luLXNlbGVjdGlvbicpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHBlcmNlbnRhZ2UgPj0gcG9zaXRpb25QZXJjZW50YWdlc1swXSAmJiBwZXJjZW50YWdlIDw9IHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50aWNrc1tpXSwgJ2luLXNlbGVjdGlvbicpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy50aWNrTGFiZWxzW2ldKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsc1tpXS5zdHlsZVtzdHlsZVNpemVdID0gbGFiZWxTaXplICsgXCJweFwiO1xuXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcgJiYgdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9uc1tpXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxzW2ldLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbHNbaV0uc3R5bGVbdGhpcy5zdHlsZVBvc10gPSBwZXJjZW50YWdlICsgXCIlXCI7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxzW2ldLnN0eWxlW3N0eWxlTWFyZ2luXSA9IC1sYWJlbFNpemUgLyAyICsgJ3B4Jztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJ0bCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxzW2ldLnN0eWxlWydtYXJnaW5SaWdodCddID0gdGhpcy5zbGlkZXJFbGVtLm9mZnNldFdpZHRoICsgXCJweFwiO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbHNbaV0uc3R5bGVbJ21hcmdpbkxlZnQnXSA9IHRoaXMuc2xpZGVyRWxlbS5vZmZzZXRXaWR0aCArIFwicHhcIjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxDb250YWluZXIuc3R5bGVbc3R5bGVNYXJnaW5dID0gdGhpcy5zbGlkZXJFbGVtLm9mZnNldFdpZHRoIC8gMiAqIC0xICsgJ3B4Jztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmb3JtYXR0ZWRUb29sdGlwVmFsO1xuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0XHRmb3JtYXR0ZWRUb29sdGlwVmFsID0gdGhpcy5vcHRpb25zLmZvcm1hdHRlcih0aGlzLl9zdGF0ZS52YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy5fc2V0VGV4dCh0aGlzLnRvb2x0aXBJbm5lciwgZm9ybWF0dGVkVG9vbHRpcFZhbCk7XG5cdFx0XHRcdFx0dGhpcy50b29sdGlwLnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gKHBvc2l0aW9uUGVyY2VudGFnZXNbMV0gKyBwb3NpdGlvblBlcmNlbnRhZ2VzWzBdKSAvIDIgKyBcIiVcIjtcblxuXHRcdFx0XHRcdHZhciBpbm5lclRvb2x0aXBNaW5UZXh0ID0gdGhpcy5vcHRpb25zLmZvcm1hdHRlcih0aGlzLl9zdGF0ZS52YWx1ZVswXSk7XG5cdFx0XHRcdFx0dGhpcy5fc2V0VGV4dCh0aGlzLnRvb2x0aXBJbm5lcl9taW4sIGlubmVyVG9vbHRpcE1pblRleHQpO1xuXG5cdFx0XHRcdFx0dmFyIGlubmVyVG9vbHRpcE1heFRleHQgPSB0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHRoaXMuX3N0YXRlLnZhbHVlWzFdKTtcblx0XHRcdFx0XHR0aGlzLl9zZXRUZXh0KHRoaXMudG9vbHRpcElubmVyX21heCwgaW5uZXJUb29sdGlwTWF4VGV4dCk7XG5cblx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWluLnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gcG9zaXRpb25QZXJjZW50YWdlc1swXSArIFwiJVwiO1xuXG5cdFx0XHRcdFx0dGhpcy50b29sdGlwX21heC5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IHBvc2l0aW9uUGVyY2VudGFnZXNbMV0gKyBcIiVcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3JtYXR0ZWRUb29sdGlwVmFsID0gdGhpcy5vcHRpb25zLmZvcm1hdHRlcih0aGlzLl9zdGF0ZS52YWx1ZVswXSk7XG5cdFx0XHRcdFx0dGhpcy5fc2V0VGV4dCh0aGlzLnRvb2x0aXBJbm5lciwgZm9ybWF0dGVkVG9vbHRpcFZhbCk7XG5cblx0XHRcdFx0XHR0aGlzLnRvb2x0aXAuc3R5bGVbdGhpcy5zdHlsZVBvc10gPSBwb3NpdGlvblBlcmNlbnRhZ2VzWzBdICsgXCIlXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG5cdFx0XHRcdFx0dGhpcy50cmFja0xvdy5zdHlsZS50b3AgPSAnMCc7XG5cdFx0XHRcdFx0dGhpcy50cmFja0xvdy5zdHlsZS5oZWlnaHQgPSBNYXRoLm1pbihwb3NpdGlvblBlcmNlbnRhZ2VzWzBdLCBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblxuXHRcdFx0XHRcdHRoaXMudHJhY2tTZWxlY3Rpb24uc3R5bGUudG9wID0gTWF0aC5taW4ocG9zaXRpb25QZXJjZW50YWdlc1swXSwgcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cdFx0XHRcdFx0dGhpcy50cmFja1NlbGVjdGlvbi5zdHlsZS5oZWlnaHQgPSBNYXRoLmFicyhwb3NpdGlvblBlcmNlbnRhZ2VzWzBdIC0gcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cblx0XHRcdFx0XHR0aGlzLnRyYWNrSGlnaC5zdHlsZS5ib3R0b20gPSAnMCc7XG5cdFx0XHRcdFx0dGhpcy50cmFja0hpZ2guc3R5bGUuaGVpZ2h0ID0gMTAwIC0gTWF0aC5taW4ocG9zaXRpb25QZXJjZW50YWdlc1swXSwgcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgLSBNYXRoLmFicyhwb3NpdGlvblBlcmNlbnRhZ2VzWzBdIC0gcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3R5bGVQb3MgPT09ICdyaWdodCcpIHtcblx0XHRcdFx0XHRcdHRoaXMudHJhY2tMb3cuc3R5bGUucmlnaHQgPSAnMCc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudHJhY2tMb3cuc3R5bGUubGVmdCA9ICcwJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy50cmFja0xvdy5zdHlsZS53aWR0aCA9IE1hdGgubWluKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0sIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuc3R5bGVQb3MgPT09ICdyaWdodCcpIHtcblx0XHRcdFx0XHRcdHRoaXMudHJhY2tTZWxlY3Rpb24uc3R5bGUucmlnaHQgPSBNYXRoLm1pbihwb3NpdGlvblBlcmNlbnRhZ2VzWzBdLCBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50cmFja1NlbGVjdGlvbi5zdHlsZS5sZWZ0ID0gTWF0aC5taW4ocG9zaXRpb25QZXJjZW50YWdlc1swXSwgcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMudHJhY2tTZWxlY3Rpb24uc3R5bGUud2lkdGggPSBNYXRoLmFicyhwb3NpdGlvblBlcmNlbnRhZ2VzWzBdIC0gcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5zdHlsZVBvcyA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRcdFx0dGhpcy50cmFja0hpZ2guc3R5bGUubGVmdCA9ICcwJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50cmFja0hpZ2guc3R5bGUucmlnaHQgPSAnMCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMudHJhY2tIaWdoLnN0eWxlLndpZHRoID0gMTAwIC0gTWF0aC5taW4ocG9zaXRpb25QZXJjZW50YWdlc1swXSwgcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgLSBNYXRoLmFicyhwb3NpdGlvblBlcmNlbnRhZ2VzWzBdIC0gcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cblx0XHRcdFx0XHR2YXIgb2Zmc2V0X21pbiA9IHRoaXMudG9vbHRpcF9taW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmFyIG9mZnNldF9tYXggPSB0aGlzLnRvb2x0aXBfbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID09PSAnYm90dG9tJykge1xuXHRcdFx0XHRcdFx0aWYgKG9mZnNldF9taW4ucmlnaHQgPiBvZmZzZXRfbWF4LmxlZnQpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ2JvdHRvbScpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAndG9wJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcF9tYXguc3R5bGUudG9wID0gJyc7XG5cdFx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcF9tYXguc3R5bGUuYm90dG9tID0gMjIgKyAncHgnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ3RvcCcpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAnYm90dG9tJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcF9tYXguc3R5bGUudG9wID0gdGhpcy50b29sdGlwX21pbi5zdHlsZS50b3A7XG5cdFx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcF9tYXguc3R5bGUuYm90dG9tID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvZmZzZXRfbWluLnJpZ2h0ID4gb2Zmc2V0X21heC5sZWZ0KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcF9tYXgsICd0b3AnKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ2JvdHRvbScpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWF4LnN0eWxlLnRvcCA9IDE4ICsgJ3B4Jztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcF9tYXgsICdib3R0b20nKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ3RvcCcpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWF4LnN0eWxlLnRvcCA9IHRoaXMudG9vbHRpcF9taW4uc3R5bGUudG9wO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9jcmVhdGVIaWdobGlnaHRSYW5nZTogZnVuY3Rpb24gX2NyZWF0ZUhpZ2hsaWdodFJhbmdlKHN0YXJ0LCBlbmQpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lzSGlnaGxpZ2h0UmFuZ2Uoc3RhcnQsIGVuZCkpIHtcblx0XHRcdFx0XHRpZiAoc3RhcnQgPiBlbmQpIHtcblx0XHRcdFx0XHRcdHJldHVybiB7ICdzdGFydCc6IGVuZCwgJ3NpemUnOiBzdGFydCAtIGVuZCB9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4geyAnc3RhcnQnOiBzdGFydCwgJ3NpemUnOiBlbmQgLSBzdGFydCB9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHRcdF9pc0hpZ2hsaWdodFJhbmdlOiBmdW5jdGlvbiBfaXNIaWdobGlnaHRSYW5nZShzdGFydCwgZW5kKSB7XG5cdFx0XHRcdGlmICgwIDw9IHN0YXJ0ICYmIHN0YXJ0IDw9IDEwMCAmJiAwIDw9IGVuZCAmJiBlbmQgPD0gMTAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3Jlc2l6ZTogZnVuY3Rpb24gX3Jlc2l6ZShldikge1xuXHRcdFx0XHQvKmpzaGludCB1bnVzZWQ6ZmFsc2UqL1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS5vZmZzZXQgPSB0aGlzLl9vZmZzZXQodGhpcy5zbGlkZXJFbGVtKTtcblx0XHRcdFx0dGhpcy5fc3RhdGUuc2l6ZSA9IHRoaXMuc2xpZGVyRWxlbVt0aGlzLnNpemVQb3NdO1xuXHRcdFx0XHR0aGlzLl9sYXlvdXQoKTtcblx0XHRcdH0sXG5cdFx0XHRfcmVtb3ZlUHJvcGVydHk6IGZ1bmN0aW9uIF9yZW1vdmVQcm9wZXJ0eShlbGVtZW50LCBwcm9wKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9tb3VzZWRvd246IGZ1bmN0aW9uIF9tb3VzZWRvd24oZXYpIHtcblx0XHRcdFx0aWYgKCF0aGlzLl9zdGF0ZS5lbmFibGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fc3RhdGUub2Zmc2V0ID0gdGhpcy5fb2Zmc2V0KHRoaXMuc2xpZGVyRWxlbSk7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLnNpemUgPSB0aGlzLnNsaWRlckVsZW1bdGhpcy5zaXplUG9zXTtcblxuXHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9IHRoaXMuX2dldFBlcmNlbnRhZ2UoZXYpO1xuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0XHR2YXIgZGlmZjEgPSBNYXRoLmFicyh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdIC0gcGVyY2VudGFnZSk7XG5cdFx0XHRcdFx0dmFyIGRpZmYyID0gTWF0aC5hYnModGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXSAtIHBlcmNlbnRhZ2UpO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLmRyYWdnZWQgPSBkaWZmMSA8IGRpZmYyID8gMCA6IDE7XG5cdFx0XHRcdFx0dGhpcy5fYWRqdXN0UGVyY2VudGFnZUZvclJhbmdlU2xpZGVycyhwZXJjZW50YWdlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5kcmFnZ2VkID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbdGhpcy5fc3RhdGUuZHJhZ2dlZF0gPSBwZXJjZW50YWdlO1xuXHRcdFx0XHR0aGlzLl9sYXlvdXQoKTtcblxuXHRcdFx0XHRpZiAodGhpcy50b3VjaENhcGFibGUpIHtcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2Vtb3ZlLCBmYWxzZSk7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMubW91c2V1cCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMubW91c2Vtb3ZlKSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlbW92ZSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLm1vdXNldXApIHtcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNldXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubW91c2Vtb3ZlID0gdGhpcy5fbW91c2Vtb3ZlLmJpbmQodGhpcyk7XG5cdFx0XHRcdHRoaXMubW91c2V1cCA9IHRoaXMuX21vdXNldXAuYmluZCh0aGlzKTtcblxuXHRcdFx0XHRpZiAodGhpcy50b3VjaENhcGFibGUpIHtcblx0XHRcdFx0XHQvLyBUb3VjaDogQmluZCB0b3VjaCBldmVudHM6XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlbW92ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNldXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBCaW5kIG1vdXNlIGV2ZW50czpcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlbW92ZSwgZmFsc2UpO1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNldXAsIGZhbHNlKTtcblxuXHRcdFx0XHR0aGlzLl9zdGF0ZS5pbkRyYWcgPSB0cnVlO1xuXHRcdFx0XHR2YXIgbmV3VmFsdWUgPSB0aGlzLl9jYWxjdWxhdGVWYWx1ZSgpO1xuXG5cdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ3NsaWRlU3RhcnQnLCBuZXdWYWx1ZSk7XG5cblx0XHRcdFx0dGhpcy5fc2V0RGF0YVZhbChuZXdWYWx1ZSk7XG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlLCB0cnVlKTtcblxuXHRcdFx0XHRldi5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZm9jdXMpIHtcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyRm9jdXNPbkhhbmRsZSh0aGlzLl9zdGF0ZS5kcmFnZ2VkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdF90b3VjaHN0YXJ0OiBmdW5jdGlvbiBfdG91Y2hzdGFydChldikge1xuXHRcdFx0XHRpZiAoZXYuY2hhbmdlZFRvdWNoZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuX21vdXNlZG93bihldik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHRvdWNoID0gZXYuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0XHRcdHRoaXMudG91Y2hYID0gdG91Y2gucGFnZVg7XG5cdFx0XHRcdHRoaXMudG91Y2hZID0gdG91Y2gucGFnZVk7XG5cdFx0XHR9LFxuXHRcdFx0X3RyaWdnZXJGb2N1c09uSGFuZGxlOiBmdW5jdGlvbiBfdHJpZ2dlckZvY3VzT25IYW5kbGUoaGFuZGxlSWR4KSB7XG5cdFx0XHRcdGlmIChoYW5kbGVJZHggPT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTEuZm9jdXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFuZGxlSWR4ID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUyLmZvY3VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfa2V5ZG93bjogZnVuY3Rpb24gX2tleWRvd24oaGFuZGxlSWR4LCBldikge1xuXHRcdFx0XHRpZiAoIXRoaXMuX3N0YXRlLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZGlyO1xuXHRcdFx0XHRzd2l0Y2ggKGV2LmtleUNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIDM3OiAvLyBsZWZ0XG5cdFx0XHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0XHRcdC8vIGRvd25cblx0XHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAzOTogLy8gcmlnaHRcblx0XHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdFx0Ly8gdXBcblx0XHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRpcikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHVzZSBuYXR1cmFsIGFycm93IGtleXMgaW5zdGVhZCBvZiBmcm9tIG1pbiB0byBtYXhcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5uYXR1cmFsX2Fycm93X2tleXMpIHtcblx0XHRcdFx0XHR2YXIgaWZWZXJ0aWNhbEFuZE5vdFJldmVyc2VkID0gdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmICF0aGlzLm9wdGlvbnMucmV2ZXJzZWQ7XG5cdFx0XHRcdFx0dmFyIGlmSG9yaXpvbnRhbEFuZFJldmVyc2VkID0gdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgdGhpcy5vcHRpb25zLnJldmVyc2VkOyAvLyBAdG9kbyBjb250cm9sIHdpdGggcnRsXG5cblx0XHRcdFx0XHRpZiAoaWZWZXJ0aWNhbEFuZE5vdFJldmVyc2VkIHx8IGlmSG9yaXpvbnRhbEFuZFJldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHRkaXIgPSAtZGlyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB2YWwgPSB0aGlzLl9zdGF0ZS52YWx1ZVtoYW5kbGVJZHhdICsgZGlyICogdGhpcy5vcHRpb25zLnN0ZXA7XG5cdFx0XHRcdHZhciBwZXJjZW50YWdlID0gdmFsIC8gdGhpcy5vcHRpb25zLm1heCAqIDEwMDtcblx0XHRcdFx0dGhpcy5fc3RhdGUua2V5Q3RybCA9IGhhbmRsZUlkeDtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHRcdHRoaXMuX2FkanVzdFBlcmNlbnRhZ2VGb3JSYW5nZVNsaWRlcnMocGVyY2VudGFnZSk7XG5cdFx0XHRcdFx0dmFyIHZhbDEgPSAhdGhpcy5fc3RhdGUua2V5Q3RybCA/IHZhbCA6IHRoaXMuX3N0YXRlLnZhbHVlWzBdO1xuXHRcdFx0XHRcdHZhciB2YWwyID0gdGhpcy5fc3RhdGUua2V5Q3RybCA/IHZhbCA6IHRoaXMuX3N0YXRlLnZhbHVlWzFdO1xuXHRcdFx0XHRcdHZhbCA9IFt2YWwxLCB2YWwyXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ3NsaWRlU3RhcnQnLCB2YWwpO1xuXHRcdFx0XHR0aGlzLl9zZXREYXRhVmFsKHZhbCk7XG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlLCB0cnVlKTtcblxuXHRcdFx0XHR0aGlzLl9zZXREYXRhVmFsKHZhbCk7XG5cdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ3NsaWRlU3RvcCcsIHZhbCk7XG5cdFx0XHRcdHRoaXMuX2xheW91dCgpO1xuXG5cdFx0XHRcdHRoaXMuX3BhdXNlRXZlbnQoZXYpO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5fc3RhdGUua2V5Q3RybDtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0X3BhdXNlRXZlbnQ6IGZ1bmN0aW9uIF9wYXVzZUV2ZW50KGV2KSB7XG5cdFx0XHRcdGlmIChldi5zdG9wUHJvcGFnYXRpb24pIHtcblx0XHRcdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZXYucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGV2LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0XHRcdGV2LnJldHVyblZhbHVlID0gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0X21vdXNlbW92ZTogZnVuY3Rpb24gX21vdXNlbW92ZShldikge1xuXHRcdFx0XHRpZiAoIXRoaXMuX3N0YXRlLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9IHRoaXMuX2dldFBlcmNlbnRhZ2UoZXYpO1xuXHRcdFx0XHR0aGlzLl9hZGp1c3RQZXJjZW50YWdlRm9yUmFuZ2VTbGlkZXJzKHBlcmNlbnRhZ2UpO1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS5wZXJjZW50YWdlW3RoaXMuX3N0YXRlLmRyYWdnZWRdID0gcGVyY2VudGFnZTtcblx0XHRcdFx0dGhpcy5fbGF5b3V0KCk7XG5cblx0XHRcdFx0dmFyIHZhbCA9IHRoaXMuX2NhbGN1bGF0ZVZhbHVlKHRydWUpO1xuXHRcdFx0XHR0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSwgdHJ1ZSk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdF90b3VjaG1vdmU6IGZ1bmN0aW9uIF90b3VjaG1vdmUoZXYpIHtcblx0XHRcdFx0aWYgKGV2LmNoYW5nZWRUb3VjaGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdG91Y2ggPSBldi5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdFx0XHR2YXIgeERpZmYgPSB0b3VjaC5wYWdlWCAtIHRoaXMudG91Y2hYO1xuXHRcdFx0XHR2YXIgeURpZmYgPSB0b3VjaC5wYWdlWSAtIHRoaXMudG91Y2hZO1xuXG5cdFx0XHRcdGlmICghdGhpcy5fc3RhdGUuaW5EcmFnKSB7XG5cdFx0XHRcdFx0Ly8gVmVydGljYWwgU2xpZGVyXG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiB4RGlmZiA8PSA1ICYmIHhEaWZmID49IC01ICYmICh5RGlmZiA+PSAxNSB8fCB5RGlmZiA8PSAtMTUpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9tb3VzZWRvd24oZXYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBIb3Jpem9udGFsIHNsaWRlci5cblx0XHRcdFx0XHRlbHNlIGlmICh5RGlmZiA8PSA1ICYmIHlEaWZmID49IC01ICYmICh4RGlmZiA+PSAxNSB8fCB4RGlmZiA8PSAtMTUpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX21vdXNlZG93bihldik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfYWRqdXN0UGVyY2VudGFnZUZvclJhbmdlU2xpZGVyczogZnVuY3Rpb24gX2FkanVzdFBlcmNlbnRhZ2VGb3JSYW5nZVNsaWRlcnMocGVyY2VudGFnZSkge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdFx0dmFyIHByZWNpc2lvbiA9IHRoaXMuX2dldE51bURpZ2l0c0FmdGVyRGVjaW1hbFBsYWNlKHBlcmNlbnRhZ2UpO1xuXHRcdFx0XHRcdHByZWNpc2lvbiA9IHByZWNpc2lvbiA/IHByZWNpc2lvbiAtIDEgOiAwO1xuXHRcdFx0XHRcdHZhciBwZXJjZW50YWdlV2l0aEFkanVzdGVkUHJlY2lzaW9uID0gdGhpcy5fYXBwbHlUb0ZpeGVkQW5kUGFyc2VGbG9hdChwZXJjZW50YWdlLCBwcmVjaXNpb24pO1xuXHRcdFx0XHRcdGlmICh0aGlzLl9zdGF0ZS5kcmFnZ2VkID09PSAwICYmIHRoaXMuX2FwcGx5VG9GaXhlZEFuZFBhcnNlRmxvYXQodGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXSwgcHJlY2lzaW9uKSA8IHBlcmNlbnRhZ2VXaXRoQWRqdXN0ZWRQcmVjaXNpb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0gPSB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdO1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUuZHJhZ2dlZCA9IDE7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9zdGF0ZS5kcmFnZ2VkID09PSAxICYmIHRoaXMuX2FwcGx5VG9GaXhlZEFuZFBhcnNlRmxvYXQodGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSwgcHJlY2lzaW9uKSA+IHBlcmNlbnRhZ2VXaXRoQWRqdXN0ZWRQcmVjaXNpb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV0gPSB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdO1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUuZHJhZ2dlZCA9IDA7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9zdGF0ZS5rZXlDdHJsID09PSAwICYmIHRoaXMuX3N0YXRlLnZhbHVlWzFdIC8gdGhpcy5vcHRpb25zLm1heCAqIDEwMCA8IHBlcmNlbnRhZ2UpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0gPSB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdO1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUua2V5Q3RybCA9IDE7XG5cdFx0XHRcdFx0XHR0aGlzLmhhbmRsZTIuZm9jdXMoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3N0YXRlLmtleUN0cmwgPT09IDEgJiYgdGhpcy5fc3RhdGUudmFsdWVbMF0gLyB0aGlzLm9wdGlvbnMubWF4ICogMTAwID4gcGVyY2VudGFnZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXSA9IHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF07XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5rZXlDdHJsID0gMDtcblx0XHRcdFx0XHRcdHRoaXMuaGFuZGxlMS5mb2N1cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9tb3VzZXVwOiBmdW5jdGlvbiBfbW91c2V1cCgpIHtcblx0XHRcdFx0aWYgKCF0aGlzLl9zdGF0ZS5lbmFibGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnRvdWNoQ2FwYWJsZSkge1xuXHRcdFx0XHRcdC8vIFRvdWNoOiBVbmJpbmQgdG91Y2ggZXZlbnQgaGFuZGxlcnM6XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlbW92ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNldXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBVbmJpbmQgbW91c2UgZXZlbnQgaGFuZGxlcnM6XG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZW1vdmUsIGZhbHNlKTtcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZXVwLCBmYWxzZSk7XG5cblx0XHRcdFx0dGhpcy5fc3RhdGUuaW5EcmFnID0gZmFsc2U7XG5cdFx0XHRcdGlmICh0aGlzLl9zdGF0ZS5vdmVyID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuX2hpZGVUb29sdGlwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHZhbCA9IHRoaXMuX2NhbGN1bGF0ZVZhbHVlKHRydWUpO1xuXG5cdFx0XHRcdHRoaXMuX2xheW91dCgpO1xuXHRcdFx0XHR0aGlzLl9zZXREYXRhVmFsKHZhbCk7XG5cdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ3NsaWRlU3RvcCcsIHZhbCk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdF9jYWxjdWxhdGVWYWx1ZTogZnVuY3Rpb24gX2NhbGN1bGF0ZVZhbHVlKHNuYXBUb0Nsb3Nlc3RUaWNrKSB7XG5cdFx0XHRcdHZhciB2YWw7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0XHR2YWwgPSBbdGhpcy5vcHRpb25zLm1pbiwgdGhpcy5vcHRpb25zLm1heF07XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0gIT09IDApIHtcblx0XHRcdFx0XHRcdHZhbFswXSA9IHRoaXMuX3RvVmFsdWUodGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSk7XG5cdFx0XHRcdFx0XHR2YWxbMF0gPSB0aGlzLl9hcHBseVByZWNpc2lvbih2YWxbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXSAhPT0gMTAwKSB7XG5cdFx0XHRcdFx0XHR2YWxbMV0gPSB0aGlzLl90b1ZhbHVlKHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV0pO1xuXHRcdFx0XHRcdFx0dmFsWzFdID0gdGhpcy5fYXBwbHlQcmVjaXNpb24odmFsWzFdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsID0gdGhpcy5fdG9WYWx1ZSh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdKTtcblx0XHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XG5cdFx0XHRcdFx0dmFsID0gdGhpcy5fYXBwbHlQcmVjaXNpb24odmFsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzbmFwVG9DbG9zZXN0VGljaykge1xuXHRcdFx0XHRcdHZhciBtaW4gPSBbdmFsLCBJbmZpbml0eV07XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMudGlja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciBkaWZmID0gTWF0aC5hYnModGhpcy5vcHRpb25zLnRpY2tzW2ldIC0gdmFsKTtcblx0XHRcdFx0XHRcdGlmIChkaWZmIDw9IG1pblsxXSkge1xuXHRcdFx0XHRcdFx0XHRtaW4gPSBbdGhpcy5vcHRpb25zLnRpY2tzW2ldLCBkaWZmXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG1pblsxXSA8PSB0aGlzLm9wdGlvbnMudGlja3Nfc25hcF9ib3VuZHMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBtaW5bMF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH0sXG5cdFx0XHRfYXBwbHlQcmVjaXNpb246IGZ1bmN0aW9uIF9hcHBseVByZWNpc2lvbih2YWwpIHtcblx0XHRcdFx0dmFyIHByZWNpc2lvbiA9IHRoaXMub3B0aW9ucy5wcmVjaXNpb24gfHwgdGhpcy5fZ2V0TnVtRGlnaXRzQWZ0ZXJEZWNpbWFsUGxhY2UodGhpcy5vcHRpb25zLnN0ZXApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fYXBwbHlUb0ZpeGVkQW5kUGFyc2VGbG9hdCh2YWwsIHByZWNpc2lvbik7XG5cdFx0XHR9LFxuXHRcdFx0X2dldE51bURpZ2l0c0FmdGVyRGVjaW1hbFBsYWNlOiBmdW5jdGlvbiBfZ2V0TnVtRGlnaXRzQWZ0ZXJEZWNpbWFsUGxhY2UobnVtKSB7XG5cdFx0XHRcdHZhciBtYXRjaCA9ICgnJyArIG51bSkubWF0Y2goLyg/OlxcLihcXGQrKSk/KD86W2VFXShbKy1dP1xcZCspKT8kLyk7XG5cdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgKG1hdGNoWzFdID8gbWF0Y2hbMV0ubGVuZ3RoIDogMCkgLSAobWF0Y2hbMl0gPyArbWF0Y2hbMl0gOiAwKSk7XG5cdFx0XHR9LFxuXHRcdFx0X2FwcGx5VG9GaXhlZEFuZFBhcnNlRmxvYXQ6IGZ1bmN0aW9uIF9hcHBseVRvRml4ZWRBbmRQYXJzZUZsb2F0KG51bSwgdG9GaXhlZElucHV0KSB7XG5cdFx0XHRcdHZhciB0cnVuY2F0ZWROdW0gPSBudW0udG9GaXhlZCh0b0ZpeGVkSW5wdXQpO1xuXHRcdFx0XHRyZXR1cm4gcGFyc2VGbG9hdCh0cnVuY2F0ZWROdW0pO1xuXHRcdFx0fSxcblx0XHRcdC8qXG4gICBcdENyZWRpdHMgdG8gTWlrZSBTYW11ZWwgZm9yIHRoZSBmb2xsb3dpbmcgbWV0aG9kIVxuICAgXHRTb3VyY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0NTQ1MTgvamF2YXNjcmlwdC1ob3ctdG8tcmV0cmlldmUtdGhlLW51bWJlci1vZi1kZWNpbWFscy1vZi1hLXN0cmluZy1udW1iZXJcbiAgICovXG5cdFx0XHRfZ2V0UGVyY2VudGFnZTogZnVuY3Rpb24gX2dldFBlcmNlbnRhZ2UoZXYpIHtcblx0XHRcdFx0aWYgKHRoaXMudG91Y2hDYXBhYmxlICYmIChldi50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXYudHlwZSA9PT0gJ3RvdWNobW92ZScpKSB7XG5cdFx0XHRcdFx0ZXYgPSBldi50b3VjaGVzWzBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGV2ZW50UG9zaXRpb24gPSBldlt0aGlzLm1vdXNlUG9zXTtcblx0XHRcdFx0dmFyIHNsaWRlck9mZnNldCA9IHRoaXMuX3N0YXRlLm9mZnNldFt0aGlzLnN0eWxlUG9zXTtcblx0XHRcdFx0dmFyIGRpc3RhbmNlVG9TbGlkZSA9IGV2ZW50UG9zaXRpb24gLSBzbGlkZXJPZmZzZXQ7XG5cdFx0XHRcdGlmICh0aGlzLnN0eWxlUG9zID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdFx0ZGlzdGFuY2VUb1NsaWRlID0gLWRpc3RhbmNlVG9TbGlkZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBDYWxjdWxhdGUgd2hhdCBwZXJjZW50IG9mIHRoZSBsZW5ndGggdGhlIHNsaWRlciBoYW5kbGUgaGFzIHNsaWRcblx0XHRcdFx0dmFyIHBlcmNlbnRhZ2UgPSBkaXN0YW5jZVRvU2xpZGUgLyB0aGlzLl9zdGF0ZS5zaXplICogMTAwO1xuXHRcdFx0XHRwZXJjZW50YWdlID0gTWF0aC5yb3VuZChwZXJjZW50YWdlIC8gdGhpcy5fc3RhdGUucGVyY2VudGFnZVsyXSkgKiB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzJdO1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJldmVyc2VkKSB7XG5cdFx0XHRcdFx0cGVyY2VudGFnZSA9IDEwMCAtIHBlcmNlbnRhZ2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhlIHBlcmNlbnQgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHNsaWRlci5cblx0XHRcdFx0Ly8gMCUgY29ycmVzcG9uZHMgdG8gdGhlICdtaW4nIHZhbHVlIG9mIHRoZSBzbGlkZVxuXHRcdFx0XHQvLyAxMDAlIGNvcnJlc3BvbmRzIHRvIHRoZSAnbWF4JyB2YWx1ZSBvZiB0aGUgc2xpZGVcblx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgcGVyY2VudGFnZSkpO1xuXHRcdFx0fSxcblx0XHRcdF92YWxpZGF0ZUlucHV0VmFsdWU6IGZ1bmN0aW9uIF92YWxpZGF0ZUlucHV0VmFsdWUodmFsKSB7XG5cdFx0XHRcdGlmICghaXNOYU4oK3ZhbCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gK3ZhbDtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0XHR0aGlzLl92YWxpZGF0ZUFycmF5KHZhbCk7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoRXJyb3JNc2dzLmZvcm1hdEludmFsaWRJbnB1dEVycm9yTXNnKHZhbCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3ZhbGlkYXRlQXJyYXk6IGZ1bmN0aW9uIF92YWxpZGF0ZUFycmF5KHZhbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBpbnB1dCA9IHZhbFtpXTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGlucHV0ICE9PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKEVycm9yTXNncy5mb3JtYXRJbnZhbGlkSW5wdXRFcnJvck1zZyhpbnB1dCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9zZXREYXRhVmFsOiBmdW5jdGlvbiBfc2V0RGF0YVZhbCh2YWwpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIHZhbCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnZhbHVlID0gdmFsO1xuXHRcdFx0fSxcblx0XHRcdF90cmlnZ2VyOiBmdW5jdGlvbiBfdHJpZ2dlcihldnQsIHZhbCkge1xuXHRcdFx0XHR2YWwgPSB2YWwgfHwgdmFsID09PSAwID8gdmFsIDogdW5kZWZpbmVkO1xuXG5cdFx0XHRcdHZhciBjYWxsYmFja0ZuQXJyYXkgPSB0aGlzLmV2ZW50VG9DYWxsYmFja01hcFtldnRdO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2tGbkFycmF5ICYmIGNhbGxiYWNrRm5BcnJheS5sZW5ndGgpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrRm5BcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrRm4gPSBjYWxsYmFja0ZuQXJyYXlbaV07XG5cdFx0XHRcdFx0XHRjYWxsYmFja0ZuKHZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogSWYgSlF1ZXJ5IGV4aXN0cywgdHJpZ2dlciBKUXVlcnkgZXZlbnRzICovXG5cdFx0XHRcdGlmICgkKSB7XG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlckpRdWVyeUV2ZW50KGV2dCwgdmFsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF90cmlnZ2VySlF1ZXJ5RXZlbnQ6IGZ1bmN0aW9uIF90cmlnZ2VySlF1ZXJ5RXZlbnQoZXZ0LCB2YWwpIHtcblx0XHRcdFx0dmFyIGV2ZW50RGF0YSA9IHtcblx0XHRcdFx0XHR0eXBlOiBldnQsXG5cdFx0XHRcdFx0dmFsdWU6IHZhbFxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLiRlbGVtZW50LnRyaWdnZXIoZXZlbnREYXRhKTtcblx0XHRcdFx0dGhpcy4kc2xpZGVyRWxlbS50cmlnZ2VyKGV2ZW50RGF0YSk7XG5cdFx0XHR9LFxuXHRcdFx0X3VuYmluZEpRdWVyeUV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uIF91bmJpbmRKUXVlcnlFdmVudEhhbmRsZXJzKCkge1xuXHRcdFx0XHR0aGlzLiRlbGVtZW50Lm9mZigpO1xuXHRcdFx0XHR0aGlzLiRzbGlkZXJFbGVtLm9mZigpO1xuXHRcdFx0fSxcblx0XHRcdF9zZXRUZXh0OiBmdW5jdGlvbiBfc2V0VGV4dChlbGVtZW50LCB0ZXh0KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZWxlbWVudC50ZXh0Q29udGVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmlubmVyVGV4dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9yZW1vdmVDbGFzczogZnVuY3Rpb24gX3JlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzU3RyaW5nKSB7XG5cdFx0XHRcdHZhciBjbGFzc2VzID0gY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHR2YXIgbmV3Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBjbGFzc1RhZyA9IGNsYXNzZXNbaV07XG5cdFx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIgKyBjbGFzc1RhZyArIFwiKD86XFxcXHN8JClcIik7XG5cdFx0XHRcdFx0bmV3Q2xhc3NlcyA9IG5ld0NsYXNzZXMucmVwbGFjZShyZWdleCwgXCIgXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBuZXdDbGFzc2VzLnRyaW0oKTtcblx0XHRcdH0sXG5cdFx0XHRfYWRkQ2xhc3M6IGZ1bmN0aW9uIF9hZGRDbGFzcyhlbGVtZW50LCBjbGFzc1N0cmluZykge1xuXHRcdFx0XHR2YXIgY2xhc3NlcyA9IGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0dmFyIG5ld0NsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZTtcblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2xhc3NUYWcgPSBjbGFzc2VzW2ldO1xuXHRcdFx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCIoPzpcXFxcc3xeKVwiICsgY2xhc3NUYWcgKyBcIig/OlxcXFxzfCQpXCIpO1xuXHRcdFx0XHRcdHZhciBpZkNsYXNzRXhpc3RzID0gcmVnZXgudGVzdChuZXdDbGFzc2VzKTtcblxuXHRcdFx0XHRcdGlmICghaWZDbGFzc0V4aXN0cykge1xuXHRcdFx0XHRcdFx0bmV3Q2xhc3NlcyArPSBcIiBcIiArIGNsYXNzVGFnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gbmV3Q2xhc3Nlcy50cmltKCk7XG5cdFx0XHR9LFxuXHRcdFx0X29mZnNldExlZnQ6IGZ1bmN0aW9uIF9vZmZzZXRMZWZ0KG9iaikge1xuXHRcdFx0XHRyZXR1cm4gb2JqLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG5cdFx0XHR9LFxuXHRcdFx0X29mZnNldFJpZ2h0OiBmdW5jdGlvbiBfb2Zmc2V0UmlnaHQob2JqKSB7XG5cdFx0XHRcdHJldHVybiBvYmouZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQ7XG5cdFx0XHR9LFxuXHRcdFx0X29mZnNldFRvcDogZnVuY3Rpb24gX29mZnNldFRvcChvYmopIHtcblx0XHRcdFx0dmFyIG9mZnNldFRvcCA9IG9iai5vZmZzZXRUb3A7XG5cdFx0XHRcdHdoaWxlICgob2JqID0gb2JqLm9mZnNldFBhcmVudCkgJiYgIWlzTmFOKG9iai5vZmZzZXRUb3ApKSB7XG5cdFx0XHRcdFx0b2Zmc2V0VG9wICs9IG9iai5vZmZzZXRUb3A7XG5cdFx0XHRcdFx0aWYgKG9iai50YWdOYW1lICE9PSAnQk9EWScpIHtcblx0XHRcdFx0XHRcdG9mZnNldFRvcCAtPSBvYmouc2Nyb2xsVG9wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2Zmc2V0VG9wO1xuXHRcdFx0fSxcblx0XHRcdF9vZmZzZXQ6IGZ1bmN0aW9uIF9vZmZzZXQob2JqKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0bGVmdDogdGhpcy5fb2Zmc2V0TGVmdChvYmopLFxuXHRcdFx0XHRcdHJpZ2h0OiB0aGlzLl9vZmZzZXRSaWdodChvYmopLFxuXHRcdFx0XHRcdHRvcDogdGhpcy5fb2Zmc2V0VG9wKG9iailcblx0XHRcdFx0fTtcblx0XHRcdH0sXG5cdFx0XHRfY3NzOiBmdW5jdGlvbiBfY3NzKGVsZW1lbnRSZWYsIHN0eWxlTmFtZSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKCQpIHtcblx0XHRcdFx0XHQkLnN0eWxlKGVsZW1lbnRSZWYsIHN0eWxlTmFtZSwgdmFsdWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBzdHlsZSA9IHN0eWxlTmFtZS5yZXBsYWNlKC9eLW1zLS8sIFwibXMtXCIpLnJlcGxhY2UoLy0oW1xcZGEtel0pL2dpLCBmdW5jdGlvbiAoYWxsLCBsZXR0ZXIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRlbGVtZW50UmVmLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3RvVmFsdWU6IGZ1bmN0aW9uIF90b1ZhbHVlKHBlcmNlbnRhZ2UpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5zY2FsZS50b1ZhbHVlLmFwcGx5KHRoaXMsIFtwZXJjZW50YWdlXSk7XG5cdFx0XHR9LFxuXHRcdFx0X3RvUGVyY2VudGFnZTogZnVuY3Rpb24gX3RvUGVyY2VudGFnZSh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLnNjYWxlLnRvUGVyY2VudGFnZS5hcHBseSh0aGlzLCBbdmFsdWVdKTtcblx0XHRcdH0sXG5cdFx0XHRfc2V0VG9vbHRpcFBvc2l0aW9uOiBmdW5jdGlvbiBfc2V0VG9vbHRpcFBvc2l0aW9uKCkge1xuXHRcdFx0XHR2YXIgdG9vbHRpcHMgPSBbdGhpcy50b29sdGlwLCB0aGlzLnRvb2x0aXBfbWluLCB0aGlzLnRvb2x0aXBfbWF4XTtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuXHRcdFx0XHRcdHZhciB0b29sdGlwUG9zO1xuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbikge1xuXHRcdFx0XHRcdFx0dG9vbHRpcFBvcyA9IHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJ0bCkge1xuXHRcdFx0XHRcdFx0XHR0b29sdGlwUG9zID0gJ2xlZnQnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dG9vbHRpcFBvcyA9ICdyaWdodCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBvcHBvc2l0ZVNpZGUgPSB0b29sdGlwUG9zID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0XHRcdHRvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRvb2x0aXAsIHRvb2x0aXBQb3MpO1xuXHRcdFx0XHRcdFx0dG9vbHRpcC5zdHlsZVtvcHBvc2l0ZVNpZGVdID0gJzEwMCUnO1xuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdFx0dG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModG9vbHRpcCwgJ2JvdHRvbScpO1xuXHRcdFx0XHRcdFx0dG9vbHRpcC5zdHlsZS50b3AgPSAyMiArICdweCc7XG5cdFx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0b29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0b29sdGlwLCAndG9wJyk7XG5cdFx0XHRcdFx0XHR0b29sdGlwLnN0eWxlLnRvcCA9IC10aGlzLnRvb2x0aXAub3V0ZXJIZWlnaHQgLSAxNCArICdweCc7XG5cdFx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIFx0XHRBdHRhY2ggdG8gZ2xvYmFsIG5hbWVzcGFjZVxuICBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0XHRpZiAoJCAmJiAkLmZuKSB7XG5cdFx0XHR2YXIgYXV0b1JlZ2lzdGVyTmFtZXNwYWNlID0gdm9pZCAwO1xuXG5cdFx0XHRpZiAoISQuZm4uc2xpZGVyKSB7XG5cdFx0XHRcdCQuYnJpZGdldChOQU1FU1BBQ0VfTUFJTiwgU2xpZGVyKTtcblx0XHRcdFx0YXV0b1JlZ2lzdGVyTmFtZXNwYWNlID0gTkFNRVNQQUNFX01BSU47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAod2luZG93SXNEZWZpbmVkKSB7XG5cdFx0XHRcdFx0d2luZG93LmNvbnNvbGUud2FybihcImJvb3RzdHJhcC1zbGlkZXIuanMgLSBXQVJOSU5HOiAkLmZuLnNsaWRlciBuYW1lc3BhY2UgaXMgYWxyZWFkeSBib3VuZC4gVXNlIHRoZSAkLmZuLmJvb3RzdHJhcFNsaWRlciBuYW1lc3BhY2UgaW5zdGVhZC5cIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXV0b1JlZ2lzdGVyTmFtZXNwYWNlID0gTkFNRVNQQUNFX0FMVEVSTkFURTtcblx0XHRcdH1cblx0XHRcdCQuYnJpZGdldChOQU1FU1BBQ0VfQUxURVJOQVRFLCBTbGlkZXIpO1xuXG5cdFx0XHQvLyBBdXRvLVJlZ2lzdGVyIGRhdGEtcHJvdmlkZT1cInNsaWRlclwiIEVsZW1lbnRzXG5cdFx0XHQkKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JChcImlucHV0W2RhdGEtcHJvdmlkZT1zbGlkZXJdXCIpW2F1dG9SZWdpc3Rlck5hbWVzcGFjZV0oKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSkoJCk7XG5cblx0cmV0dXJuIFNsaWRlcjtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNsaWRlci9kaXN0L2Jvb3RzdHJhcC1zbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sInNvdXJjZVJvb3QiOiIifQ==