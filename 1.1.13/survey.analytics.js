/*!
 * surveyjs - SurveyJS Analytics library v1.1.13
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("plotly.js-dist"), require("survey-core"), require("wordcloud"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalytics", ["plotly.js-dist", "survey-core", "wordcloud", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalytics"] = factory(require("plotly.js-dist"), require("survey-core"), require("wordcloud"), require("jquery"));
	else
		root["SurveyAnalytics"] = factory(root["Plotly"], root["Survey"], root["WordCloud"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationManager; });

var VisualizationManager = /** @class */ (function () {
    function VisualizationManager() {
    }
    VisualizationManager.registerVisualizer = function (typeName, constructor) {
        var vizualizers = VisualizationManager.vizualizers[typeName];
        if (!vizualizers) {
            vizualizers = [];
            VisualizationManager.vizualizers[typeName] = vizualizers;
        }
        vizualizers.push(constructor);
    };
    VisualizationManager.getVisualizers = function (typeName) {
        var vizualizers = VisualizationManager.vizualizers[typeName];
        if (!vizualizers) {
            return [__WEBPACK_IMPORTED_MODULE_0__visualizerBase__["a" /* VisualizerBase */]];
        }
        return vizualizers;
    };
    VisualizationManager.vizualizers = {};
    return VisualizationManager;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __assign */
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* unused harmony export __rest */
/* unused harmony export __decorate */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizerBase; });
var VisualizerBase = /** @class */ (function () {
    function VisualizerBase(targetElement, question, data, options) {
        this.targetElement = targetElement;
        this.question = question;
        this.data = data;
        this.options = options;
        this.backgroundColor = "#f7f7f7";
    }
    VisualizerBase.prototype.update = function (data) {
        this.data = data;
    };
    VisualizerBase.prototype.destroy = function () {
        this.targetElement.innerHTML = "";
    };
    VisualizerBase.prototype.render = function () {
        this.targetElement.innerHTML = "This question type is not visualized yet";
    };
    VisualizerBase.prototype.invokeOnUpdate = function () {
        this.onUpdate && this.onUpdate();
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_english__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyStrings; });

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
            result = this.locales["en"][strName];
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
var surveyStrings = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* englishStrings */];
localization.locales["en"] = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* englishStrings */];
localization.localeNames["en"] = "english";


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_masonry_layout__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_masonry_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_masonry_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationPanel; });




var VisualizationPanel = /** @class */ (function () {
    function VisualizationPanel(targetElement, questions, data, options) {
        this.targetElement = targetElement;
        this.questions = questions;
        this.data = data;
        this.options = options;
        this.visualizers = [];
        this.filteredData = data;
    }
    VisualizationPanel.prototype.render = function () {
        var _this = this;
        var gridSizerClassName = "sva-grid__grid-sizer";
        var questionElementClassName = "sva-question";
        var msnry = undefined;
        var getMasonry = function () { return msnry; };
        var gridSizer = document.createElement("div"); //Masonry gridSizer empty element, only used for element sizing
        this.targetElement.className = "sva-grid";
        gridSizer.className = gridSizerClassName;
        this.targetElement.appendChild(gridSizer);
        this.questions.forEach(function (question) {
            var questionElement = document.createElement("div");
            var questionContent = document.createElement("div");
            var titleElement = document.createElement("h3");
            var vizualizerElement = document.createElement("div");
            titleElement.innerText = question["title"];
            questionElement.className = questionElementClassName;
            questionContent.className = questionElementClassName + "__content";
            titleElement.className = questionElementClassName + "__title";
            questionContent.appendChild(titleElement);
            questionContent.appendChild(vizualizerElement);
            questionElement.appendChild(questionContent);
            _this.targetElement.appendChild(questionElement);
            var visualizer = _this.renderQuestion(vizualizerElement, question, _this.filteredData);
            visualizer.onUpdate = function () {
                if (getMasonry()) {
                    getMasonry().layout();
                }
            };
            if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_3__selectBase__["a" /* SelectBase */]) {
                visualizer.onDataItemSelected = function (selectedValue, clearSelection) {
                    _this.applyFilter(question.name, selectedValue, clearSelection);
                    _this.update();
                };
            }
            _this.visualizers.push(visualizer);
        });
        msnry = new __WEBPACK_IMPORTED_MODULE_1_masonry_layout___default.a(this.targetElement, {
            columnWidth: "." + gridSizerClassName,
            itemSelector: "." + questionElementClassName
        });
    };
    VisualizationPanel.prototype.destroy = function () {
        this.targetElement.innerHTML = "";
        this.visualizers.forEach(function (visualizer) {
            visualizer.onUpdate = undefined;
            if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_3__selectBase__["a" /* SelectBase */]) {
                visualizer.onDataItemSelected = undefined;
            }
            visualizer.destroy();
        });
        this.visualizers = [];
    };
    VisualizationPanel.prototype.update = function () {
        var _this = this;
        this.visualizers.forEach(function (visualizer) {
            return setTimeout(function () { return visualizer.update(_this.filteredData); }, 10);
        });
    };
    VisualizationPanel.prototype.applyFilter = function (questionName, selectedValue, clearSelection) {
        var _this = this;
        if (clearSelection === void 0) { clearSelection = true; }
        if (clearSelection) {
            this.filterValues = {};
        }
        if (selectedValue !== undefined) {
            this.filterValues[questionName] = selectedValue;
        }
        else {
            delete this.filterValues[questionName];
        }
        this.filteredData = this.data.filter(function (item) {
            return !Object.keys(_this.filterValues).some(function (key) { return item[key] !== _this.filterValues[key]; });
        });
    };
    VisualizationPanel.prototype.renderQuestion = function (vizualizerElement, question, data) {
        var visualizers = __WEBPACK_IMPORTED_MODULE_0__visualizationManager__["a" /* VisualizationManager */].getVisualizers(question.getType());
        var visualizer = new visualizers[0](vizualizerElement, question, data);
        visualizer.render();
        return visualizer;
    };
    return VisualizationPanel;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationPanelDynamic; });




var VisualizationPanelDynamic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VisualizationPanelDynamic, _super);
    function VisualizationPanelDynamic(targetNode, question, data, options) {
        var _this = _super.call(this, targetNode, question, data, options) || this;
        _this.data = [];
        data.forEach(function (dataItem) {
            return !!dataItem[question.name] &&
                (_this.data = _this.data.concat(dataItem[question.name]));
        });
        return _this;
    }
    VisualizationPanelDynamic.prototype.getQuestions = function () {
        var paneldynamic = this.question;
        return paneldynamic.panels[0].questions;
    };
    VisualizationPanelDynamic.prototype.render = function () {
        var visPanel = new __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__["a" /* VisualizationPanel */](document.getElementById("summaryContainer"), this.getQuestions(), this.data);
        visPanel.render();
    };
    VisualizationPanelDynamic.prototype.destroy = function () {
        this.targetElement.innerHTML = "";
    };
    return VisualizationPanelDynamic;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("paneldynamic", VisualizationPanelDynamic);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__english__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return textHelper; });

var stopWordsDictionary = {};
stopWordsDictionary["en"] = __WEBPACK_IMPORTED_MODULE_0__english__["a" /* stopWords */];
var textHelper = {
    getStopWords: function (locale) {
        if (locale === void 0) { locale = ""; }
        return stopWordsDictionary[locale || "en"] || [];
    }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectBase__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBasePlotly; });

var Plotly = __webpack_require__(11);


var SelectBasePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBasePlotly, _super);
    function SelectBasePlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.selectedItem = undefined;
        _this.filterText = undefined;
        _this.filter = undefined;
        _this.chartTypes = SelectBasePlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    SelectBasePlotly.prototype.update = function (data) {
        _super.prototype.update.call(this, data);
        this.destroy();
        this.chart = this.getPlotlyChart(this.chartNode, this.chartType);
        this.invokeOnUpdate();
    };
    SelectBasePlotly.prototype.destroy = function () {
        Plotly.purge(this.chartNode);
    };
    SelectBasePlotly.prototype.createChart = function () {
        this.chart = this.getPlotlyChart(this.chartNode, this.chartType);
    };
    SelectBasePlotly.prototype.setSelection = function (item, clearSelection) {
        if (clearSelection === void 0) { clearSelection = false; }
        this.selectedItem = item;
        this.updateFilter();
        this.onDataItemSelected((item && item.value) || undefined, clearSelection);
    };
    SelectBasePlotly.prototype.updateFilter = function () {
        this.filter.style.display = !!this.selectedItem ? "inline-block" : "none";
        this.filterText.innerHTML = !!this.selectedItem
            ? "Filter: [" + this.selectedItem.text + "]"
            : "";
    };
    SelectBasePlotly.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        _super.prototype.createToolbarItems.call(this, toolbar);
        this.filter = document.createElement("div");
        this.filter.className = "sva-question__filter";
        this.filterText = document.createElement("span");
        this.filterText.className = "sva-question__filter-text";
        this.filter.appendChild(this.filterText);
        var filterClear = document.createElement("span");
        filterClear.className = "sva-question__filter-clear";
        filterClear.innerHTML = "Clear";
        filterClear.onclick = function () {
            _this.setSelection(undefined);
        };
        this.filter.appendChild(filterClear);
        // const filterClearAll = document.createElement("span");
        // filterClearAll.className = "sva-question__filter-clear";
        // filterClearAll.innerHTML = "Clear All";
        // filterClearAll.onclick = () => {
        //   this.setSelection(undefined, true);
        // };
        // this.filter.appendChild(filterClearAll);
        toolbar.appendChild(this.filter);
        this.updateFilter();
    };
    SelectBasePlotly.prototype.getPlotlyChart = function (chartNode, chartType) {
        var _this = this;
        var question = this.question;
        var datasets = this.getData();
        var labels = this.getLabels();
        var traces = [];
        var colors = this.getColors();
        var traceConfig = {
            type: chartType,
            y: labels.map(function (l) {
                if (l.length > 30) {
                    return l.substring(0, 27) + "...";
                }
                return l;
            }),
            text: labels,
            orientation: "h",
            mode: "markers",
            width: 0.5
        };
        if (datasets.length === 1) {
            traceConfig["marker"] = { color: colors };
        }
        datasets.forEach(function (dataset) {
            if (_this.chartType === "pie") {
                traces.push(Object.assign({}, traceConfig, { values: dataset }));
            }
            else {
                traces.push(Object.assign({}, traceConfig, { x: dataset }));
            }
        });
        var height = chartType === "pie"
            ? 450
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
            yaxis: {
                automargin: true,
                type: "category",
                ticklen: 5,
                tickcolor: "transparent"
            },
            xaxis: {
                automargin: true
            },
            plot_bgcolor: this.backgroundColor,
            paper_bgcolor: this.backgroundColor
        };
        var config = {
            displaylogo: false,
            responsive: true
        };
        var plot = Plotly.newPlot(chartNode, traces, layout, config);
        chartNode["on"]("plotly_click", function (data) {
            if (data.points.length > 0 && _this.onDataItemSelected) {
                var itemText_1 = data.points[0].text;
                var item = _this.question.choices.filter(function (choice) { return choice.text === itemText_1; })[0];
                _this.setSelection(item, !data.event.ctrlKey);
            }
        });
        var dragLayer = (chartNode.getElementsByClassName("nsewdrag")[0]);
        chartNode["on"]("plotly_hover", function () {
            dragLayer.style.cursor = "pointer";
        });
        chartNode["on"]("plotly_unhover", function () {
            dragLayer.style.cursor = "";
        });
        return plot;
    };
    SelectBasePlotly.types = ["bar", "pie", "scatter"];
    return SelectBasePlotly;
}(__WEBPACK_IMPORTED_MODULE_2__selectBase__["a" /* SelectBase */]));

__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("checkbox", SelectBasePlotly);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("radiogroup", SelectBasePlotly);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("dropdown", SelectBasePlotly);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("imagepicker", SelectBasePlotly);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBase; });



var SelectBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBase, _super);
    function SelectBase(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.chartNode = document.createElement("div");
        return _this;
    }
    SelectBase.prototype.setChartType = function (chartType) {
        if (this.chartTypes.indexOf(chartType) !== -1 &&
            this.chartType !== chartType) {
            this.chartType = chartType;
            this.createChart();
            this.invokeOnUpdate();
        }
    };
    SelectBase.prototype.createChart = function () { };
    SelectBase.prototype.render = function () {
        var chartNodeContainer = document.createElement("div");
        var toolbarNodeContainer = document.createElement("div");
        chartNodeContainer.appendChild(toolbarNodeContainer);
        chartNodeContainer.appendChild(this.chartNode);
        this.targetElement.appendChild(chartNodeContainer);
        this.createToolbar(toolbarNodeContainer);
        this.createChart();
    };
    SelectBase.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 0) {
            var selectWrapper = document.createElement("div");
            selectWrapper.className = "sva-question__select-wrapper";
            var select_1 = document.createElement("select");
            select_1.className = "sva-question__select";
            this.chartTypes.forEach(function (chartType) {
                var option = document.createElement("option");
                option.value = chartType;
                option.text = chartType;
                option.selected = _this.chartType === chartType;
                select_1.appendChild(option);
            });
            select_1.onchange = function (e) {
                _this.setChartType(e.target.value);
            };
            selectWrapper.appendChild(select_1);
            toolbar.appendChild(selectWrapper);
        }
    };
    SelectBase.prototype.createToolbar = function (container) {
        var toolbar = document.createElement("div");
        toolbar.className = "sva-question__toolbar";
        this.createToolbarItems(toolbar);
        container.appendChild(toolbar);
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
            return __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(_this.valuesSource(), choice.value);
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
    return SelectBase;
}(__WEBPACK_IMPORTED_MODULE_2__visualizerBase__["a" /* VisualizerBase */]));



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizationManager__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatables_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__datatables_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTables; });




var DataTables = /** @class */ (function () {
    function DataTables(targetNode, survey, data, options, _columns, isTrustedAccess) {
        var _this = this;
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        this.targetNode = targetNode;
        this.survey = survey;
        this.data = data;
        this.options = options;
        this._columns = _columns;
        this.isTrustedAccess = isTrustedAccess;
        this.groupBy = [];
        this.headerButtonCreators = [];
        this.detailButtonCreators = [];
        this.createSelectButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("selectButton");
            button.onclick = function (e) {
                e.stopPropagation();
                datatableApi.columns().deselect();
                datatableApi.column(colIdx).select();
                !!_this.onColumnSelected && _this.onColumnSelected(columnName);
            };
            return button;
        };
        this.createGroupingButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("groupButton");
            button.onclick = function (e) {
                e.stopPropagation();
                var index = _this.groupBy.indexOf(columnName);
                if (index === -1) {
                    _this.groupBy.push(columnName);
                    button.innerHTML = __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("ungroupButton");
                }
                else {
                    button.innerHTML = __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("groupButton");
                    _this.groupBy.splice(index, 1);
                }
                datatableApi.rowGroup().enable(_this.groupBy.length > 0);
                if (_this.groupBy.length > 0) {
                    datatableApi.rowGroup().dataSrc(_this.groupBy);
                }
                datatableApi.draw();
            };
            return button;
        };
        this.createHideButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("hideColumn");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].visibility = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ColumnVisibility */].Invisible;
                datatableApi.columns([colIdx]).visible(false);
                // TODO: Use datatables to update headers (show columns options)
                _this.update();
            };
            return button;
        };
        this.createAddColumnButton = function (datatableApi, colIdx, columnName) {
            var selector = document.createElement("select");
            selector.onclick = function (e) {
                e.stopPropagation();
            };
            var option = document.createElement("option");
            option.text = __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("showColumn");
            option.disabled = true;
            option.selected = true;
            selector.appendChild(option);
            _this.columns
                .filter(function (column) { return column.visibility === __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ColumnVisibility */].Invisible; })
                .forEach(function (column) {
                var option = document.createElement("option");
                var text = column.displayName;
                if (text.length > 20) {
                    text = text.substring(0, 20) + "...";
                }
                option.text = text;
                option.title = column.displayName;
                option.value = column.name;
                selector.appendChild(option);
            });
            var self = _this;
            selector.onchange = function (e) {
                var _this = this;
                e.stopPropagation();
                if (!__WEBPACK_IMPORTED_MODULE_0_jquery__(this).val())
                    return;
                var column = self._columns.filter(function (column) { return column.name === __WEBPACK_IMPORTED_MODULE_0_jquery__(_this).val(); })[0];
                column.visibility = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ColumnVisibility */].Visible;
                datatableApi.columns([self._columns.indexOf(column)]).visible(true);
                // TODO: Use datatables to update headers (show columns options)
                self.update();
            };
            return selector;
        };
        this.createMoveToDetailButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("moveToDetail");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location = __WEBPACK_IMPORTED_MODULE_1__config__["b" /* QuestionLocation */].Row;
                _this.update();
            };
            return button;
        };
        this.createShowAsColumnButton = function (columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("showAsColumn");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location = __WEBPACK_IMPORTED_MODULE_1__config__["b" /* QuestionLocation */].Row;
                _this.update();
            };
            return button;
        };
        this.headerButtonCreators = [this.createGroupingButton, this.createSelectButton, this.createHideButton, this.createAddColumnButton, this.createMoveToDetailButton];
        this.detailButtonCreators = [this.createShowAsColumnButton];
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
    }
    DataTables.prototype.buildColumns = function (survey) {
        return this.survey.getAllQuestions().map(function (question) {
            return {
                name: question.name,
                displayName: (question.title || "").trim() || question.name,
                dataType: question.getType() !== "file" ? __WEBPACK_IMPORTED_MODULE_1__config__["c" /* ColumnDataType */].Text : __WEBPACK_IMPORTED_MODULE_1__config__["c" /* ColumnDataType */].FileLink,
                visibility: question.getType() !== "file" ? __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ColumnVisibility */].Visible : __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ColumnVisibility */].Invisible,
                location: __WEBPACK_IMPORTED_MODULE_1__config__["b" /* QuestionLocation */].Column
            };
        });
    };
    DataTables.prototype.isVisible = function (visibility) {
        return this.isTrustedAccess && visibility !== __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ColumnVisibility */].Invisible || !this.isTrustedAccess && visibility === __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ColumnVisibility */].Visible;
    };
    Object.defineProperty(DataTables.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        set: function (columns) {
            this._columns = columns;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    DataTables.prototype.update = function () {
        if (this.isRendered) {
            this.destroy();
            this.render();
        }
    };
    Object.defineProperty(DataTables.prototype, "isRendered", {
        get: function () {
            return this.targetNode.children.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    DataTables.prototype.destroy = function () {
        //if(!this.targetNode) return;
        var tableNode = this.targetNode.children[0];
        if (__WEBPACK_IMPORTED_MODULE_0_jquery__["fn"].DataTable.isDataTable(tableNode)) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).DataTable().destroy();
        }
        this.targetNode.innerHTML = "";
    };
    DataTables.prototype.render = function () {
        var _this = this;
        var tableNode = document.createElement("table");
        var columnsData = this.getColumns().map(function (c) { return c.data; });
        var self = this;
        var options = __WEBPACK_IMPORTED_MODULE_0_jquery__["extend"](true, {
            buttons: ["copy", "csv", "print"],
            dom: "Blfrtip",
            data: this.data,
            columns: this.getColumns(),
            // orderFixed: [[1, "asc"]],
            rowGroup: {
                dataSrc: columnsData[0],
                endRender: function (rows, group) {
                    return "Count: " + rows.data().count();
                }
            },
            select: "api",
            headerCallback: function (thead, data, start, end, display) {
                var datatableApi = __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode)
                    .dataTable()
                    .api();
                __WEBPACK_IMPORTED_MODULE_0_jquery__(thead)
                    .children("th")
                    .each(function (index, node) {
                    var $thNode = __WEBPACK_IMPORTED_MODULE_0_jquery__(this);
                    if ($thNode.has("button").length === 0) {
                        var container = document.createElement("div");
                        container.className = "sa-datatable-action-container";
                        self.headerButtonCreators.forEach(function (creator) { return container.appendChild(creator(datatableApi, index, columnsData[index])); });
                        $thNode.prepend(container);
                    }
                });
            }
        }, this.options);
        this.targetNode.appendChild(tableNode);
        tableNode.className = "sa-datatable display dataTable";
        var datatableApi = __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).DataTable(options);
        datatableApi
            .rowGroup()
            .enable(false)
            .draw();
        // datatableApi.on("rowgroup-datasrc", (e, dt, val) => {
        //   datatableApi.order.fixed({ pre: [[columnsData.indexOf(val), "asc"]] }).draw();
        // });
        datatableApi.on('column-reorder', function (e, settings, details) {
            var columns = _this._columns.splice(details.from, 1);
            _this._columns.splice(details.to, 0, columns[0]);
            //console.log(this._columns);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).find('tbody').on('click', 'td.sa-datatable-action-column', function () {
            var tr = __WEBPACK_IMPORTED_MODULE_0_jquery__(this).closest('tr');
            var row = datatableApi.row(tr);
            if (row.child.isShown()) {
                row.child.hide();
                tr.removeClass('sa-datatable-detail-row');
            }
            else {
                row.child(self.createDetailMarkup(row.data())).show();
                tr.addClass('sa-datatable-detail-row');
            }
        });
    };
    DataTables.prototype.createDetailMarkup = function (data) {
        var _this = this;
        var table = document.createElement("table");
        table.cellPadding = "5";
        table.cellSpacing = "0";
        table.border = "0";
        table.className = "sa-datatable-detail";
        this.columns
            .filter(function (column) { return column.location === __WEBPACK_IMPORTED_MODULE_1__config__["b" /* QuestionLocation */].Row && _this.isVisible(column.visibility); })
            .forEach(function (column) {
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.textContent = column.displayName;
            var td2 = document.createElement("td");
            td2.textContent = data[column.name];
            var td3 = document.createElement("td");
            _this.detailButtonCreators.forEach(function (creator) { return td3.appendChild(creator(column.name)); });
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            table.appendChild(row);
        });
        if (!!this.renderDetailActions) {
            var row = document.createElement("tr");
            var td = document.createElement("td");
            this.renderDetailActions(td, data);
            row.appendChild(td);
            table.appendChild(row);
        }
        return table;
    };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var columns = this.columns
            .filter(function (column) { return column.location === __WEBPACK_IMPORTED_MODULE_1__config__["b" /* QuestionLocation */].Column && _this.isVisible(column.visibility); })
            .map(function (column) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                data: column.name,
                sTitle: column.displayName,
                visible: column.visibility !== __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ColumnVisibility */].Invisible,
                mRender: function (data, type, row) {
                    var displayValue = row[column.name];
                    if (question) {
                        _this.survey.data = row;
                        displayValue = question.displayValue;
                    }
                    return ((typeof displayValue === "string"
                        ? displayValue
                        : JSON.stringify(displayValue)) || "");
                }
            };
        });
        return [{
                "className": 'sa-datatable-action-column',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            }].concat(columns);
    };
    return DataTables;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectBase__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__matrix__["a"]; });





/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationPanelDynamic__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationMatrixDynamic; });



var VisualizationMatrixDynamic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VisualizationMatrixDynamic, _super);
    function VisualizationMatrixDynamic(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
    }
    VisualizationMatrixDynamic.prototype.getQuestions = function () {
        var matrixdynamic = this.question;
        var visibleRows = matrixdynamic.visibleRows;
        if (visibleRows.length === 0)
            return [];
        return visibleRows[0].cells.map(function (c) { return c.question; });
    };
    return VisualizationMatrixDynamic;
}(__WEBPACK_IMPORTED_MODULE_2__visualizationPanelDynamic__["a" /* VisualizationPanelDynamic */]));

__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrixdynamic", VisualizationMatrixDynamic);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrixdropdown", VisualizationMatrixDynamic);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wordcloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stopwords_index__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordCloud; });





var WordCloud = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](WordCloud, _super);
    function WordCloud(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
    }
    WordCloud.prototype.getData = function () {
        var _this = this;
        var result = {};
        var stopWords = __WEBPACK_IMPORTED_MODULE_4__stopwords_index__["a" /* textHelper */].getStopWords();
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
    WordCloud.prototype.render = function () {
        var _this = this;
        var data = this.getData();
        var colors = this.getColors();
        var canvasNode = document.createElement("canvas");
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There is no results yet";
        if (data.length === 0) {
            this.targetElement.appendChild(emptyTextNode);
            return;
        }
        this.targetElement.appendChild(canvasNode);
        var config = {
            list: data,
            weightFactor: 20,
            fontFamily: "Segoe UI Bold, sans-serif",
            color: function (word, weight) {
                return _this.getRandomColor();
            },
            rotateRatio: 0.5,
            rotationSteps: 2,
            backgroundColor: this.backgroundColor,
            click: function (item) {
                console.log(item[0] + ": " + item[1]);
            }
        };
        this.cloud = __WEBPACK_IMPORTED_MODULE_1_wordcloud___default()(canvasNode, config);
    };
    WordCloud.prototype.destroy = function () {
        if (!!this.cloud) {
            this.cloud = undefined;
            this.targetElement.innerHTML = "";
        }
    };
    return WordCloud;
}(__WEBPACK_IMPORTED_MODULE_2__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("text", WordCloud);
__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("comment", WordCloud);
__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("multipletext", WordCloud);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(17)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( matchesSelector ) {
      return factory( window, matchesSelector );
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(23),
        __webpack_require__(3)
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(8),
        __webpack_require__(3)
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(8),
        __webpack_require__(3),
        __webpack_require__(20),
        __webpack_require__(22)
      ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ColumnDataType; });
var ColumnVisibility;
(function (ColumnVisibility) {
    ColumnVisibility["Visible"] = "Visible";
    ColumnVisibility["Invisible"] = "Invisible";
    ColumnVisibility["PublicInvisible"] = "PublicInvisible";
})(ColumnVisibility || (ColumnVisibility = {}));
var QuestionLocation;
(function (QuestionLocation) {
    QuestionLocation["Column"] = "Column";
    QuestionLocation["Row"] = "Row";
})(QuestionLocation || (QuestionLocation = {}));
var ColumnDataType;
(function (ColumnDataType) {
    ColumnDataType["Text"] = "Text";
    ColumnDataType["FileLink"] = "FileLink";
    ColumnDataType["Image"] = "Image";
})(ColumnDataType || (ColumnDataType = {}));
// export interface ITableColumns {
//     columns: Array<ITableColumn>;
// }


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return englishStrings; });
//Uncomment this line on creating a translation file
//import { localization } from "../localization";
var englishStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    moveToDetail: "Move to Detail",
    showAsColumn: "Show as Column"
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//localization.locales["en"] = englishStrings;
//localization.localeNames["en"] = "English";


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixPlotly; });




var MatrixPlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixPlotly, _super);
    function MatrixPlotly(targetNode, question, data, options) {
        return _super.call(this, targetNode, question, data, options) || this;
    }
    MatrixPlotly.prototype.valuesSource = function () {
        var question = this.question;
        return question.columns;
    };
    MatrixPlotly.prototype.getLabels = function () {
        var question = this.question;
        return question.rows.map(function (row) {
            return __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(question.rows, row.value);
        });
    };
    MatrixPlotly.prototype.getData = function () {
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
    return MatrixPlotly;
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["a" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrix", MatrixPlotly);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugePlotly; });

var Plotly = __webpack_require__(11);


var GaugePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GaugePlotly, _super);
    function GaugePlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.chartTypes = ["gauge", "bullet"];
        _this.chartType = "gauge";
        _this.chartNode = document.createElement("div");
        _this.toolbarChangeHandler = function (e) {
            if (_this.chartType !== e.target.value) {
                _this.chartType = e.target.value;
                _this.update(_this.data);
            }
        };
        return _this;
    }
    GaugePlotly.prototype.update = function (data) {
        _super.prototype.update.call(this, data);
        this.destroy();
        this.createChart();
        this.invokeOnUpdate();
    };
    GaugePlotly.prototype.createToolbar = function (container, changeHandler) {
        var _this = this;
        if (this.chartTypes.length > 0) {
            var toolbar_1 = document.createElement("div");
            toolbar_1.className = "sva-question__toolbar";
            var selectWrapper = document.createElement("div");
            selectWrapper.className = "sva-question__select-wrapper";
            var select_1 = document.createElement("select");
            select_1.className = "sva-question__select";
            this.chartTypes.forEach(function (chartType) {
                var option = document.createElement("option");
                option.value = chartType;
                option.text = chartType;
                option.selected = _this.chartType === chartType;
                select_1.appendChild(option);
            });
            select_1.onchange = changeHandler;
            selectWrapper.appendChild(select_1);
            toolbar_1.appendChild(selectWrapper);
            container.appendChild(toolbar_1);
        }
    };
    GaugePlotly.prototype.destroy = function () {
        Plotly.purge(this.chartNode);
        this._result = undefined;
    };
    GaugePlotly.prototype.generateText = function (maxValue, minValue, stepsCount) {
        var texts = [];
        if (stepsCount === 5) {
            texts = [
                "very high (" + maxValue + ")",
                "high",
                "medium",
                "low",
                "very low (" + minValue + ")"
            ];
        }
        else {
            texts.push(maxValue);
            for (var i = 0; i < stepsCount - 2; i++) {
                texts.push("");
            }
            texts.push(minValue);
        }
        if (!!GaugePlotly.generateTextsCallback) {
            return GaugePlotly.generateTextsCallback(this.question, maxValue, minValue, stepsCount, texts);
        }
        return texts;
    };
    GaugePlotly.prototype.generateValues = function (maxValue, stepsCount) {
        var values = [];
        for (var i = 0; i < stepsCount; i++) {
            values.push(maxValue / stepsCount);
        }
        values.push(maxValue);
        return values;
    };
    GaugePlotly.prototype.generateColors = function (maxValue, minValue, stepsCount) {
        var palette = this.getColors();
        var colors = [];
        for (var i = 0; i < stepsCount; i++) {
            colors.push(palette[i]);
        }
        colors.push("rgba(255, 255, 255, 0)");
        return colors;
    };
    GaugePlotly.prototype.createToolbarContainer = function () {
        var chartNodeContainer = document.createElement("div");
        var toolbarNodeContainer = document.createElement("div");
        chartNodeContainer.appendChild(toolbarNodeContainer);
        chartNodeContainer.appendChild(this.chartNode);
        this.targetElement.appendChild(chartNodeContainer);
        this.createToolbar(toolbarNodeContainer, this.toolbarChangeHandler);
    };
    GaugePlotly.prototype.createChart = function () {
        var question = this.question;
        var rateValues = question.visibleRateValues;
        var maxValue = rateValues[rateValues.length - 1].value;
        var minValue = rateValues[0].value;
        var colors = this.generateColors(maxValue, minValue, GaugePlotly.stepsCount);
        var level = this.result;
        var data = [
            {
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { range: [minValue, maxValue] },
                    shape: this.chartType,
                    bgcolor: "white",
                    bar: { color: colors[0] }
                },
                value: level,
                text: question.name,
                domain: { x: [0, 1], y: [0, 1] }
            }
        ];
        var layout = {
            width: 600,
            height: 400,
            plot_bgcolor: this.backgroundColor,
            paper_bgcolor: this.backgroundColor
        };
        var config = {
            displayModeBar: false,
            staticPlot: true
        };
        this.chart = Plotly.newPlot(this.chartNode, data, layout, config);
    };
    GaugePlotly.prototype.render = function () {
        this.createToolbarContainer();
        this.createChart();
    };
    Object.defineProperty(GaugePlotly.prototype, "result", {
        get: function () {
            var _this = this;
            if (this._result === undefined) {
                var questionValues_1 = [];
                this.data.forEach(function (rowData) {
                    var questionValue = +rowData[_this.question.name];
                    if (!!questionValue) {
                        questionValues_1.push(questionValue);
                    }
                });
                this._result =
                    questionValues_1.reduce(function (a, b) {
                        return a + b;
                    }) / questionValues_1.length;
                this._result = Math.ceil(this._result * 100) / 100;
            }
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    GaugePlotly.stepsCount = 5;
    return GaugePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("rating", GaugePlotly);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stopWords; });
var stopWords = new Array("a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z");


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localizationManager__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return __WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatables_datatables__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return __WEBPACK_IMPORTED_MODULE_6__datatables_datatables__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plotly_index__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordcloud_wordcloud__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return __WEBPACK_IMPORTED_MODULE_8__wordcloud_wordcloud__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordcloud_stopwords_index__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return __WEBPACK_IMPORTED_MODULE_9__wordcloud_stopwords_index__["a"]; });







// export * from "./chartjs/index";
// export * from "./c3/index";





/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZDdhNmE0ZjhlOGU1MWI3OGM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6ZXJCYXNlLnRzIiwid2VicGFjazovLy8uL34vZ2V0LXNpemUvZ2V0LXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsRHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9+L2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBsb3RseVwiLFwiY29tbW9uanMyXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiY29tbW9uanNcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJhbWRcIjpcInBsb3RseS5qcy1kaXN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWNvcmVcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXktY29yZVwiLFwiYW1kXCI6XCJzdXJ2ZXktY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXRhYmxlcy9kYXRhdGFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JkY2xvdWQvd29yZGNsb3VkLnRzIiwid2VicGFjazovLy8uL34vZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vbWFzb25yeS1sYXlvdXQvbWFzb25yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L291dGxheWVyL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9vdXRsYXllci9vdXRsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXRhYmxlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvcmF0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JkY2xvdWQvc3RvcHdvcmRzL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIldvcmRDbG91ZFwiLFwiY29tbW9uanMyXCI6XCJ3b3JkY2xvdWRcIixcImNvbW1vbmpzXCI6XCJ3b3JkY2xvdWRcIixcImFtZFwiOlwid29yZGNsb3VkXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFB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U0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztLQUNWLENBQUM7SUFpQkoscUJBQUM7Q0FBQTtBQTlEMEI7Ozs7Ozs7QUNGM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUE7QUFBQTtBQUFBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7O0FDcERELHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7QUNoUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7OztBQzlPRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUNBO0FBQUE7QUFBQTtBQUFBLG9HQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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S0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEdBQUcsRUFDSCxHQUFHLEVBQ0gsTUFBTSxFQUNOLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxDQUNKLENBQUM7Ozs7Ozs7QUM5YUYsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBRUw7QUFDTTtBQUNGO0FBQ087QUFDQztBQUVMO0FBQ3hDLG1DQUFtQztBQUNuQyw4QkFBOEI7QUFDQztBQUNPO0FBQ00iLCJmaWxlIjoiLi9wYWNrYWdlcy9zdXJ2ZXkuYW5hbHl0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcIndvcmRjbG91ZFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUFuYWx5dGljc1wiLCBbXCJwbG90bHkuanMtZGlzdFwiLCBcInN1cnZleS1jb3JlXCIsIFwid29yZGNsb3VkXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpLCByZXF1aXJlKFwic3VydmV5LWNvcmVcIiksIHJlcXVpcmUoXCJ3b3JkY2xvdWRcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBsb3RseVwiXSwgcm9vdFtcIlN1cnZleVwiXSwgcm9vdFtcIldvcmRDbG91ZFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNkN2E2YTRmOGU4ZTUxYjc4YzlkIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcblxuZGVjbGFyZSB0eXBlIFZpc3VhbGl6ZXJDb25zdHJ1Y3RvciA9IG5ldyAoXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gIG9wdGlvbnM/OiBPYmplY3RcbikgPT4gYW55O1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvbk1hbmFnZXIge1xuICBzdGF0aWMgdml6dWFsaXplcnM6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxWaXN1YWxpemVyQ29uc3RydWN0b3I+IH0gPSB7fTtcbiAgc3RhdGljIHJlZ2lzdGVyVmlzdWFsaXplcihcbiAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgIGNvbnN0cnVjdG9yOiBWaXN1YWxpemVyQ29uc3RydWN0b3JcbiAgKSB7XG4gICAgbGV0IHZpenVhbGl6ZXJzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdO1xuICAgIGlmICghdml6dWFsaXplcnMpIHtcbiAgICAgIHZpenVhbGl6ZXJzID0gW107XG4gICAgICBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV0gPSB2aXp1YWxpemVycztcbiAgICB9XG4gICAgdml6dWFsaXplcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cbiAgc3RhdGljIGdldFZpc3VhbGl6ZXJzKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgdml6dWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV07XG4gICAgaWYgKCF2aXp1YWxpemVycykge1xuICAgICAgcmV0dXJuIFtWaXN1YWxpemVyQmFzZV07XG4gICAgfVxuICAgIHJldHVybiB2aXp1YWxpemVycztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25NYW5hZ2VyLnRzIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgOiBkZXNjLFxuICAgIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZVxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9oZWxwZXJzLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7fVxuXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IFwiVGhpcyBxdWVzdGlvbiB0eXBlIGlzIG5vdCB2aXN1YWxpemVkIHlldFwiO1xuICB9XG5cbiAgaW52b2tlT25VcGRhdGUoKSB7XG4gICAgdGhpcy5vblVwZGF0ZSAmJiB0aGlzLm9uVXBkYXRlKCk7XG4gIH1cblxuICBnZXRSYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuICB9XG5cbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZjdmN2Y3XCI7XG5cbiAgc3RhdGljIGN1c3RvbUNvbG9yczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0aWMgY29sb3JzID0gW1xuICAgIFwiIzg2ZTFmYlwiLFxuICAgIFwiIzM5OTlmYlwiLFxuICAgIFwiI2ZmNjc3MVwiLFxuICAgIFwiIzFlYjQ5NlwiLFxuICAgIFwiI2ZmYzE1MlwiLFxuICAgIFwiI2FiYTFmZlwiLFxuICAgIFwiIzdkOGRhNVwiLFxuICAgIFwiIzRlYzQ2Y1wiLFxuICAgIFwiI2NmMzdhNlwiLFxuICAgIFwiIzRlNjE5OFwiXG4gIF07XG5cbiAgZ2V0Q29sb3JzKGNvdW50ID0gMTApIHtcbiAgICBjb25zdCBjb2xvcnMgPVxuICAgICAgQXJyYXkuaXNBcnJheShWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnMpICYmXG4gICAgICBWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnMubGVuZ3RoID4gMFxuICAgICAgICA/IFZpc3VhbGl6ZXJCYXNlLmN1c3RvbUNvbG9yc1xuICAgICAgICA6IFZpc3VhbGl6ZXJCYXNlLmNvbG9ycztcblxuICAgIGxldCBtYW55Q29sb3JzOiBhbnkgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgbWFueUNvbG9ycyA9IG1hbnlDb2xvcnMuY29uY2F0KGNvbG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbnlDb2xvcnM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemVyQmFzZS50cyIsIi8qIVxuICogZ2V0U2l6ZSB2Mi4wLjNcbiAqIG1lYXN1cmUgc2l6ZSBvZiBlbGVtZW50c1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG4vKiBnbG9iYWxzIGNvbnNvbGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZ2V0U2l6ZSA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdldCBhIG51bWJlciBmcm9tIGEgc3RyaW5nLCBub3QgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBnZXRTdHlsZVNpemUoIHZhbHVlICkge1xuICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgLy8gbm90IGEgcGVyY2VudCBsaWtlICcxMDAlJywgYW5kIGEgbnVtYmVyXG4gIHZhciBpc1ZhbGlkID0gdmFsdWUuaW5kZXhPZignJScpID09IC0xICYmICFpc05hTiggbnVtICk7XG4gIHJldHVybiBpc1ZhbGlkICYmIG51bTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBsb2dFcnJvciA9IHR5cGVvZiBjb25zb2xlID09ICd1bmRlZmluZWQnID8gbm9vcCA6XG4gIGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuICAgIGNvbnNvbGUuZXJyb3IoIG1lc3NhZ2UgKTtcbiAgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVhc3VyZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBtZWFzdXJlbWVudHMgPSBbXG4gICdwYWRkaW5nTGVmdCcsXG4gICdwYWRkaW5nUmlnaHQnLFxuICAncGFkZGluZ1RvcCcsXG4gICdwYWRkaW5nQm90dG9tJyxcbiAgJ21hcmdpbkxlZnQnLFxuICAnbWFyZ2luUmlnaHQnLFxuICAnbWFyZ2luVG9wJyxcbiAgJ21hcmdpbkJvdHRvbScsXG4gICdib3JkZXJMZWZ0V2lkdGgnLFxuICAnYm9yZGVyUmlnaHRXaWR0aCcsXG4gICdib3JkZXJUb3BXaWR0aCcsXG4gICdib3JkZXJCb3R0b21XaWR0aCdcbl07XG5cbnZhciBtZWFzdXJlbWVudHNMZW5ndGggPSBtZWFzdXJlbWVudHMubGVuZ3RoO1xuXG5mdW5jdGlvbiBnZXRaZXJvU2l6ZSgpIHtcbiAgdmFyIHNpemUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGlubmVyV2lkdGg6IDAsXG4gICAgaW5uZXJIZWlnaHQ6IDAsXG4gICAgb3V0ZXJXaWR0aDogMCxcbiAgICBvdXRlckhlaWdodDogMFxuICB9O1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9XG4gIHJldHVybiBzaXplO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTdHlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldFN0eWxlLCBnZXQgc3R5bGUgb2YgZWxlbWVudCwgY2hlY2sgZm9yIEZpcmVmb3ggYnVnXG4gKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUoIGVsZW0gKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgaWYgKCAhc3R5bGUgKSB7XG4gICAgbG9nRXJyb3IoICdTdHlsZSByZXR1cm5lZCAnICsgc3R5bGUgK1xuICAgICAgJy4gQXJlIHlvdSBydW5uaW5nIHRoaXMgY29kZSBpbiBhIGhpZGRlbiBpZnJhbWUgb24gRmlyZWZveD8gJyArXG4gICAgICAnU2VlIGh0dHBzOi8vYml0Lmx5L2dldHNpemVidWcxJyApO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzU2V0dXAgPSBmYWxzZTtcblxudmFyIGlzQm94U2l6ZU91dGVyO1xuXG4vKipcbiAqIHNldHVwXG4gKiBjaGVjayBpc0JveFNpemVyT3V0ZXJcbiAqIGRvIG9uIGZpcnN0IGdldFNpemUoKSByYXRoZXIgdGhhbiBvbiBwYWdlIGxvYWQgZm9yIEZpcmVmb3ggYnVnXG4gKi9cbmZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyBzZXR1cCBvbmNlXG4gIGlmICggaXNTZXR1cCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaXNTZXR1cCA9IHRydWU7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYm94IHNpemluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8qKlxuICAgKiBDaHJvbWUgJiBTYWZhcmkgbWVhc3VyZSB0aGUgb3V0ZXItd2lkdGggb24gc3R5bGUud2lkdGggb24gYm9yZGVyLWJveCBlbGVtc1xuICAgKiBJRTExICYgRmlyZWZveDwyOSBtZWFzdXJlcyB0aGUgaW5uZXItd2lkdGhcbiAgICovXG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgZGl2LnN0eWxlLnBhZGRpbmcgPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgZGl2LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgYm9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBkaXYgKTtcbiAgLy8gcm91bmQgdmFsdWUgZm9yIGJyb3dzZXIgem9vbS4gZGVzYW5kcm8vbWFzb25yeSM5MjhcbiAgaXNCb3hTaXplT3V0ZXIgPSBNYXRoLnJvdW5kKCBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICkgKSA9PSAyMDA7XG4gIGdldFNpemUuaXNCb3hTaXplT3V0ZXIgPSBpc0JveFNpemVPdXRlcjtcblxuICBib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBnZXRTaXplKCBlbGVtICkge1xuICBzZXR1cCgpO1xuXG4gIC8vIHVzZSBxdWVyeVNlbGV0b3IgaWYgZWxlbSBpcyBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG5cbiAgLy8gZG8gbm90IHByb2NlZWQgb24gbm9uLW9iamVjdHNcbiAgaWYgKCAhZWxlbSB8fCB0eXBlb2YgZWxlbSAhPSAnb2JqZWN0JyB8fCAhZWxlbS5ub2RlVHlwZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZWxlbSApO1xuXG4gIC8vIGlmIGhpZGRlbiwgZXZlcnl0aGluZyBpcyAwXG4gIGlmICggc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XG4gICAgcmV0dXJuIGdldFplcm9TaXplKCk7XG4gIH1cblxuICB2YXIgc2l6ZSA9IHt9O1xuICBzaXplLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgc2l6ZS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICB2YXIgaXNCb3JkZXJCb3ggPSBzaXplLmlzQm9yZGVyQm94ID0gc3R5bGUuYm94U2l6aW5nID09ICdib3JkZXItYm94JztcblxuICAvLyBnZXQgYWxsIG1lYXN1cmVtZW50c1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlWyBtZWFzdXJlbWVudCBdO1xuICAgIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAgIC8vIGFueSAnYXV0bycsICdtZWRpdW0nIHZhbHVlIHdpbGwgYmUgMFxuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAhaXNOYU4oIG51bSApID8gbnVtIDogMDtcbiAgfVxuXG4gIHZhciBwYWRkaW5nV2lkdGggPSBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHZhciBwYWRkaW5nSGVpZ2h0ID0gc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5wYWRkaW5nQm90dG9tO1xuICB2YXIgbWFyZ2luV2lkdGggPSBzaXplLm1hcmdpbkxlZnQgKyBzaXplLm1hcmdpblJpZ2h0O1xuICB2YXIgbWFyZ2luSGVpZ2h0ID0gc2l6ZS5tYXJnaW5Ub3AgKyBzaXplLm1hcmdpbkJvdHRvbTtcbiAgdmFyIGJvcmRlcldpZHRoID0gc2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBzaXplLmJvcmRlclJpZ2h0V2lkdGg7XG4gIHZhciBib3JkZXJIZWlnaHQgPSBzaXplLmJvcmRlclRvcFdpZHRoICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aDtcblxuICB2YXIgaXNCb3JkZXJCb3hTaXplT3V0ZXIgPSBpc0JvcmRlckJveCAmJiBpc0JveFNpemVPdXRlcjtcblxuICAvLyBvdmVyd3JpdGUgd2lkdGggYW5kIGhlaWdodCBpZiB3ZSBjYW4gZ2V0IGl0IGZyb20gc3R5bGVcbiAgdmFyIHN0eWxlV2lkdGggPSBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICk7XG4gIGlmICggc3R5bGVXaWR0aCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS53aWR0aCA9IHN0eWxlV2lkdGggK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICB9XG5cbiAgdmFyIHN0eWxlSGVpZ2h0ID0gZ2V0U3R5bGVTaXplKCBzdHlsZS5oZWlnaHQgKTtcbiAgaWYgKCBzdHlsZUhlaWdodCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS5oZWlnaHQgPSBzdHlsZUhlaWdodCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcbiAgfVxuXG4gIHNpemUuaW5uZXJXaWR0aCA9IHNpemUud2lkdGggLSAoIHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIHNpemUuaW5uZXJIZWlnaHQgPSBzaXplLmhlaWdodCAtICggcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuXG4gIHNpemUub3V0ZXJXaWR0aCA9IHNpemUud2lkdGggKyBtYXJnaW5XaWR0aDtcbiAgc2l6ZS5vdXRlckhlaWdodCA9IHNpemUuaGVpZ2h0ICsgbWFyZ2luSGVpZ2h0O1xuXG4gIHJldHVybiBzaXplO1xufVxuXG5yZXR1cm4gZ2V0U2l6ZTtcblxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2V0LXNpemUvZ2V0LXNpemUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xuXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxuICBkZWZhdWx0TG9jYWxlVmFsdWU6IFwiZW5cIixcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgc3VwcG9ydGVkTG9jYWxlczogPEFycmF5PGFueT4+W10sXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcbiAgICAgID8gXCJcIlxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGN1cnJlbnRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgZGVmYXVsdExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICByZXMucHVzaChcIlwiKTtcbiAgICBpZiAodGhpcy5zdXBwb3J0ZWRMb2NhbGVzICYmIHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5zb3J0KCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsImltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgTWFzb25yeSBmcm9tIFwibWFzb25yeS1sYXlvdXRcIjtcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25QYW5lbCB7XG4gIHByb3RlY3RlZCBmaWx0ZXJlZERhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT47XG4gIHByb3RlY3RlZCBmaWx0ZXJWYWx1ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIHF1ZXN0aW9uczogQXJyYXk8YW55PixcbiAgICBwcm90ZWN0ZWQgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBwcm90ZWN0ZWQgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZ3JpZFNpemVyQ2xhc3NOYW1lID0gXCJzdmEtZ3JpZF9fZ3JpZC1zaXplclwiO1xuICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uXCI7XG4gICAgbGV0IG1zbnJ5OiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgbGV0IGdldE1hc29ucnkgPSAoKSA9PiBtc25yeTtcblxuICAgIGNvbnN0IGdyaWRTaXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vTWFzb25yeSBncmlkU2l6ZXIgZW1wdHkgZWxlbWVudCwgb25seSB1c2VkIGZvciBlbGVtZW50IHNpemluZ1xuXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmNsYXNzTmFtZSA9IFwic3ZhLWdyaWRcIjtcbiAgICBncmlkU2l6ZXIuY2xhc3NOYW1lID0gZ3JpZFNpemVyQ2xhc3NOYW1lO1xuICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChncmlkU2l6ZXIpO1xuXG4gICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaChxdWVzdGlvbiA9PiB7XG4gICAgICBjb25zdCBxdWVzdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcXVlc3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIGNvbnN0IHZpenVhbGl6ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9ICg8YW55PnF1ZXN0aW9uKVtcInRpdGxlXCJdO1xuXG4gICAgICBxdWVzdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lO1xuICAgICAgcXVlc3Rpb25Db250ZW50LmNsYXNzTmFtZSA9IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiX19jb250ZW50XCI7XG4gICAgICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lICsgXCJfX3RpdGxlXCI7XG5cbiAgICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgcXVlc3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHZpenVhbGl6ZXJFbGVtZW50KTtcbiAgICAgIHF1ZXN0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChxdWVzdGlvbkNvbnRlbnQpO1xuICAgICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IHZpc3VhbGl6ZXIgPSB0aGlzLnJlbmRlclF1ZXN0aW9uKFxuICAgICAgICB2aXp1YWxpemVyRWxlbWVudCxcbiAgICAgICAgcXVlc3Rpb24sXG4gICAgICAgIHRoaXMuZmlsdGVyZWREYXRhXG4gICAgICApO1xuXG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0TWFzb25yeSgpKSB7XG4gICAgICAgICAgZ2V0TWFzb25yeSgpLmxheW91dCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKHZpc3VhbGl6ZXIgaW5zdGFuY2VvZiBTZWxlY3RCYXNlKSB7XG4gICAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gKFxuICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IGFueSxcbiAgICAgICAgICBjbGVhclNlbGVjdGlvbjogYm9vbGVhblxuICAgICAgICApID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyKHF1ZXN0aW9uLm5hbWUsIHNlbGVjdGVkVmFsdWUsIGNsZWFyU2VsZWN0aW9uKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy52aXN1YWxpemVycy5wdXNoKHZpc3VhbGl6ZXIpO1xuICAgIH0pO1xuXG4gICAgbXNucnkgPSBuZXcgTWFzb25yeSh0aGlzLnRhcmdldEVsZW1lbnQsIHtcbiAgICAgIGNvbHVtbldpZHRoOiBcIi5cIiArIGdyaWRTaXplckNsYXNzTmFtZSxcbiAgICAgIGl0ZW1TZWxlY3RvcjogXCIuXCIgKyBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWVcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKHZpc3VhbGl6ZXIgPT4ge1xuICAgICAgdmlzdWFsaXplci5vblVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMudmlzdWFsaXplcnMgPSBbXTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2godmlzdWFsaXplciA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB2aXN1YWxpemVyLnVwZGF0ZSh0aGlzLmZpbHRlcmVkRGF0YSksIDEwKVxuICAgICk7XG4gIH1cblxuICBhcHBseUZpbHRlcihcbiAgICBxdWVzdGlvbk5hbWU6IHN0cmluZyxcbiAgICBzZWxlY3RlZFZhbHVlOiBhbnksXG4gICAgY2xlYXJTZWxlY3Rpb246IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGlmIChjbGVhclNlbGVjdGlvbikge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZXMgPSA8YW55Pnt9O1xuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdID0gc2VsZWN0ZWRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyVmFsdWVzW3F1ZXN0aW9uTmFtZV07XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5maWx0ZXJWYWx1ZXMpLnNvbWUoXG4gICAgICAgIGtleSA9PiBpdGVtW2tleV0gIT09IHRoaXMuZmlsdGVyVmFsdWVzW2tleV1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJRdWVzdGlvbihcbiAgICB2aXp1YWxpemVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT5cbiAgKSB7XG4gICAgdmFyIHZpc3VhbGl6ZXJzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIuZ2V0VmlzdWFsaXplcnMocXVlc3Rpb24uZ2V0VHlwZSgpKTtcbiAgICB2YXIgdmlzdWFsaXplciA9IG5ldyB2aXN1YWxpemVyc1swXSh2aXp1YWxpemVyRWxlbWVudCwgcXVlc3Rpb24sIGRhdGEpO1xuICAgIHZpc3VhbGl6ZXIucmVuZGVyKCk7XG4gICAgcmV0dXJuIHZpc3VhbGl6ZXI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uUGFuZWwudHMiLCJpbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uUGFuZWwgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldE5vZGUsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goXG4gICAgICBkYXRhSXRlbSA9PlxuICAgICAgICAhIWRhdGFJdGVtW3F1ZXN0aW9uLm5hbWVdICYmXG4gICAgICAgICh0aGlzLmRhdGEgPSB0aGlzLmRhdGEuY29uY2F0KGRhdGFJdGVtW3F1ZXN0aW9uLm5hbWVdKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IHBhbmVsZHluYW1pYzogUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcGFuZWxkeW5hbWljLnBhbmVsc1swXS5xdWVzdGlvbnM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHZpc1BhbmVsID0gbmV3IFZpc3VhbGl6YXRpb25QYW5lbChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VtbWFyeUNvbnRhaW5lclwiKSxcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCksXG4gICAgICB0aGlzLmRhdGFcbiAgICApO1xuICAgIHZpc1BhbmVsLnJlbmRlcigpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXG4gIFwicGFuZWxkeW5hbWljXCIsXG4gIFZpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsRHluYW1pYy50cyIsImltcG9ydCB7IHN0b3BXb3JkcyB9IGZyb20gXCIuL2VuZ2xpc2hcIjtcblxudmFyIHN0b3BXb3Jkc0RpY3Rpb25hcnk6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxzdHJpbmc+IH0gPSB7fTtcbnN0b3BXb3Jkc0RpY3Rpb25hcnlbXCJlblwiXSA9IHN0b3BXb3JkcztcblxuZXhwb3J0IHZhciB0ZXh0SGVscGVyID0ge1xuICBnZXRTdG9wV29yZHM6IChsb2NhbGU6IHN0cmluZyA9IFwiXCIpID0+IHtcbiAgICByZXR1cm4gc3RvcFdvcmRzRGljdGlvbmFyeVtsb2NhbGUgfHwgXCJlblwiXSB8fCBbXTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JkY2xvdWQvc3RvcHdvcmRzL2luZGV4LnRzIiwiLyoqXG4gKiBFdkVtaXR0ZXIgdjEuMS4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoganNoaW50IHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCB3aW5kb3cgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbnZhciBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBldmVudHMgaGFzaFxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIHZhciBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoIGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApID09IC0xICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICB2YXIgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIHZhciBpPTA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXG4gICAgdmFyIGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xudmFyIFBsb3RseSA9IDxhbnk+cmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vc2VsZWN0QmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFzZVBsb3RseSBleHRlbmRzIFNlbGVjdEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydFR5cGVzID0gU2VsZWN0QmFzZVBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhcnQ6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PjtcbiAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IEl0ZW1WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBmaWx0ZXJUZXh0OiBIVE1MU3BhbkVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgZmlsdGVyOiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImJhclwiLCBcInBpZVwiLCBcInNjYXR0ZXJcIl07XG5cbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICBzdXBlci51cGRhdGUoZGF0YSk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0UGxvdGx5Q2hhcnQodGhpcy5jaGFydE5vZGUsIHRoaXMuY2hhcnRUeXBlKTtcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIFBsb3RseS5wdXJnZSh0aGlzLmNoYXJ0Tm9kZSk7XG4gIH1cblxuICBjcmVhdGVDaGFydCgpIHtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5nZXRQbG90bHlDaGFydCh0aGlzLmNoYXJ0Tm9kZSwgdGhpcy5jaGFydFR5cGUpO1xuICB9XG5cbiAgc2V0U2VsZWN0aW9uKGl0ZW06IEl0ZW1WYWx1ZSwgY2xlYXJTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcigpO1xuICAgIHRoaXMub25EYXRhSXRlbVNlbGVjdGVkKChpdGVtICYmIGl0ZW0udmFsdWUpIHx8IHVuZGVmaW5lZCwgY2xlYXJTZWxlY3Rpb24pO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVyKCkge1xuICAgIHRoaXMuZmlsdGVyLnN0eWxlLmRpc3BsYXkgPSAhIXRoaXMuc2VsZWN0ZWRJdGVtID8gXCJpbmxpbmUtYmxvY2tcIiA6IFwibm9uZVwiO1xuICAgIHRoaXMuZmlsdGVyVGV4dC5pbm5lckhUTUwgPSAhIXRoaXMuc2VsZWN0ZWRJdGVtXG4gICAgICA/IFwiRmlsdGVyOiBbXCIgKyB0aGlzLnNlbGVjdGVkSXRlbS50ZXh0ICsgXCJdXCJcbiAgICAgIDogXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVUb29sYmFySXRlbXModG9vbGJhcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBzdXBlci5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gICAgdGhpcy5maWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZmlsdGVyLmNsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uX19maWx0ZXJcIjtcblxuICAgIHRoaXMuZmlsdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRoaXMuZmlsdGVyVGV4dC5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fZmlsdGVyLXRleHRcIjtcbiAgICB0aGlzLmZpbHRlci5hcHBlbmRDaGlsZCh0aGlzLmZpbHRlclRleHQpO1xuXG4gICAgY29uc3QgZmlsdGVyQ2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBmaWx0ZXJDbGVhci5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fZmlsdGVyLWNsZWFyXCI7XG4gICAgZmlsdGVyQ2xlYXIuaW5uZXJIVE1MID0gXCJDbGVhclwiO1xuICAgIGZpbHRlckNsZWFyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFNlbGVjdGlvbih1bmRlZmluZWQpO1xuICAgIH07XG4gICAgdGhpcy5maWx0ZXIuYXBwZW5kQ2hpbGQoZmlsdGVyQ2xlYXIpO1xuXG4gICAgLy8gY29uc3QgZmlsdGVyQ2xlYXJBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAvLyBmaWx0ZXJDbGVhckFsbC5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fZmlsdGVyLWNsZWFyXCI7XG4gICAgLy8gZmlsdGVyQ2xlYXJBbGwuaW5uZXJIVE1MID0gXCJDbGVhciBBbGxcIjtcbiAgICAvLyBmaWx0ZXJDbGVhckFsbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIC8vICAgdGhpcy5zZXRTZWxlY3Rpb24odW5kZWZpbmVkLCB0cnVlKTtcbiAgICAvLyB9O1xuICAgIC8vIHRoaXMuZmlsdGVyLmFwcGVuZENoaWxkKGZpbHRlckNsZWFyQWxsKTtcblxuICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXIpO1xuXG4gICAgdGhpcy51cGRhdGVGaWx0ZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxvdGx5Q2hhcnQoXG4gICAgY2hhcnROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBjaGFydFR5cGU6IHN0cmluZ1xuICApOiBQcm9taXNlPFBsb3RseS5QbG90bHlIVE1MRWxlbWVudD4ge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcbiAgICBjb25zdCBkYXRhc2V0cyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCk7XG4gICAgY29uc3QgdHJhY2VzOiBhbnkgPSBbXTtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuXG4gICAgY29uc3QgdHJhY2VDb25maWc6IGFueSA9IHtcbiAgICAgIHR5cGU6IGNoYXJ0VHlwZSxcbiAgICAgIHk6IGxhYmVscy5tYXAobCA9PiB7XG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgcmV0dXJuIGwuc3Vic3RyaW5nKDAsIDI3KSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KSxcbiAgICAgIHRleHQ6IGxhYmVscyxcbiAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgIG1vZGU6IFwibWFya2Vyc1wiLFxuICAgICAgd2lkdGg6IDAuNVxuICAgIH07XG5cbiAgICBpZiAoZGF0YXNldHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0cmFjZUNvbmZpZ1tcIm1hcmtlclwiXSA9IHsgY29sb3I6IGNvbG9ycyB9O1xuICAgIH1cblxuICAgIGRhdGFzZXRzLmZvckVhY2goZGF0YXNldCA9PiB7XG4gICAgICBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwicGllXCIpIHtcbiAgICAgICAgdHJhY2VzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgdHJhY2VDb25maWcsIHsgdmFsdWVzOiBkYXRhc2V0IH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHRyYWNlQ29uZmlnLCB7IHg6IGRhdGFzZXQgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVpZ2h0ID1cbiAgICAgIGNoYXJ0VHlwZSA9PT0gXCJwaWVcIlxuICAgICAgICA/IDQ1MFxuICAgICAgICA6IChsYWJlbHMubGVuZ3RoICsgKGxhYmVscy5sZW5ndGggKyAxKSAqIDAuNSkgKiAyMDtcblxuICAgIGNvbnN0IGxheW91dDogYW55ID0ge1xuICAgICAgZm9udDoge1xuICAgICAgICBmYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgc2l6ZTogMTQsXG4gICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgY29sb3I6IFwiIzQwNDA0MFwiXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdDogMCxcbiAgICAgICAgYjogMCxcbiAgICAgICAgcjogMTBcbiAgICAgIH0sXG4gICAgICBjb2xvcndheTogY29sb3JzLFxuICAgICAgeWF4aXM6IHtcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJjYXRlZ29yeVwiLFxuICAgICAgICB0aWNrbGVuOiA1LFxuICAgICAgICB0aWNrY29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIGF1dG9tYXJnaW46IHRydWVcbiAgICAgIH0sXG4gICAgICBwbG90X2JnY29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgcGFwZXJfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZGlzcGxheWxvZ286IGZhbHNlLFxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdCBwbG90ID0gUGxvdGx5Lm5ld1Bsb3QoY2hhcnROb2RlLCB0cmFjZXMsIGxheW91dCwgY29uZmlnKTtcblxuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9jbGlja1wiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoZGF0YS5wb2ludHMubGVuZ3RoID4gMCAmJiB0aGlzLm9uRGF0YUl0ZW1TZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRhdGEucG9pbnRzWzBdLnRleHQ7XG4gICAgICAgIGNvbnN0IGl0ZW06IEl0ZW1WYWx1ZSA9IHRoaXMucXVlc3Rpb24uY2hvaWNlcy5maWx0ZXIoXG4gICAgICAgICAgKGNob2ljZTogSXRlbVZhbHVlKSA9PiBjaG9pY2UudGV4dCA9PT0gaXRlbVRleHRcbiAgICAgICAgKVswXTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24oaXRlbSwgIWRhdGEuZXZlbnQuY3RybEtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgZHJhZ0xheWVyID0gPEhUTUxFbGVtZW50PihcbiAgICAgIGNoYXJ0Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibnNld2RyYWdcIilbMF1cbiAgICApO1xuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBkcmFnTGF5ZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfSk7XG4gICAgKDxhbnk+Y2hhcnROb2RlKVtcIm9uXCJdKFwicGxvdGx5X3VuaG92ZXJcIiwgKCkgPT4ge1xuICAgICAgZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGxvdDtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjaGVja2JveFwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInJhZGlvZ3JvdXBcIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJkcm9wZG93blwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImltYWdlcGlja2VyXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9zZWxlY3RCYXNlLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uU2VsZWN0QmFzZSwgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogc3RyaW5nW107XG4gIHByb3RlY3RlZCBjaGFydFR5cGU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwcm90ZWN0ZWQgc2V0Q2hhcnRUeXBlKGNoYXJ0VHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jaGFydFR5cGVzLmluZGV4T2YoY2hhcnRUeXBlKSAhPT0gLTEgJiZcbiAgICAgIHRoaXMuY2hhcnRUeXBlICE9PSBjaGFydFR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gY2hhcnRUeXBlO1xuICAgICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICAgICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNoYXJ0KCkge31cblxuICBvbkRhdGFJdGVtU2VsZWN0ZWQ6IChzZWxlY3RlZFZhbHVlOiBhbnksIGNsZWFyU2VsZWN0aW9uOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjaGFydE5vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvb2xiYXJOb2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNoYXJ0Tm9kZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyTm9kZUNvbnRhaW5lcik7XG4gICAgY2hhcnROb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hhcnROb2RlKTtcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhcnROb2RlQ29udGFpbmVyKTtcblxuICAgIHRoaXMuY3JlYXRlVG9vbGJhcih0b29sYmFyTm9kZUNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuY2hhcnRUeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uX19zZWxlY3RcIjtcbiAgICAgIHRoaXMuY2hhcnRUeXBlcy5mb3JFYWNoKGNoYXJ0VHlwZSA9PiB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBjaGFydFR5cGU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gY2hhcnRUeXBlO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0aGlzLmNoYXJ0VHlwZSA9PT0gY2hhcnRUeXBlO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgc2VsZWN0Lm9uY2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNldENoYXJ0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgc2VsZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChzZWxlY3RXcmFwcGVyKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhcihjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9vbGJhci5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fdG9vbGJhclwiO1xuICAgIHRoaXMuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyKTtcbiAgfVxuXG4gIHZhbHVlc1NvdXJjZSgpOiBhbnlbXSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSA8UXVlc3Rpb25TZWxlY3RCYXNlPnRoaXMucXVlc3Rpb247XG4gICAgcmV0dXJuIHF1ZXN0aW9uW1wiYWN0aXZlQ2hvaWNlc1wiXTtcbiAgfVxuXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+IHtcbiAgICBjb25zdCB2YWx1ZXM6IEFycmF5PGFueT4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSB2YWx1ZXMudW5zaGlmdChcIm90aGVyXCIpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGdldExhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBjb25zdCBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT5cbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZSh0aGlzLnZhbHVlc1NvdXJjZSgpLCBjaG9pY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSBsYWJlbHMudW5zaGlmdChcIk90aGVyXCIpO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldERhdGEoKTogYW55W10ge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3Qgc3RhdGlzdGljcyA9IHZhbHVlcy5tYXAodiA9PiAwKTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgaWYgKCEhcm93VmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93VmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocm93VmFsdWUuaW5kZXhPZih2YWwpICE9PSAtMSkge1xuICAgICAgICAgICAgICBzdGF0aXN0aWNzW2luZGV4XSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHJvd1ZhbHVlID09IHZhbCkge1xuICAgICAgICAgICAgICBzdGF0aXN0aWNzW2luZGV4XSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtzdGF0aXN0aWNzXTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdEJhc2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQbG90bHlcIixcImNvbW1vbmpzMlwiOlwicGxvdGx5LmpzLWRpc3RcIixcImNvbW1vbmpzXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiYW1kXCI6XCJwbG90bHkuanMtZGlzdFwifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4sIENvbHVtblZpc2liaWxpdHksIFF1ZXN0aW9uTG9jYXRpb24sIENvbHVtbkRhdGFUeXBlIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5pbXBvcnQgXCIuL2RhdGF0YWJsZXMuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgRGF0YVRhYmxlc09wdGlvbnMge1xuICBidXR0b25zOlxuICAgIHwgYm9vbGVhblxuICAgIHwgc3RyaW5nW11cbiAgICB8IGFueVxuICAgIHwgYW55W107XG5cbiAgZG9tOiBzdHJpbmc7XG5cbiAgb3JkZXJGaXhlZDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IEFycmF5PEFycmF5PG51bWJlciB8IHN0cmluZz4+IHwgb2JqZWN0O1xuXG4gIHJvd0dyb3VwOiBib29sZWFuIHwgYW55O1xuXG4gIGhlYWRlckNhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJpdmF0ZSBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIHByaXZhdGUgb3B0aW9uczogRGF0YVRhYmxlc09wdGlvbnMsXG4gICAgcHJpdmF0ZSBfY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPiA9IFtdLFxuICAgIHByaXZhdGUgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgdGhpcy5oZWFkZXJCdXR0b25DcmVhdG9ycyA9IFsgdGhpcy5jcmVhdGVHcm91cGluZ0J1dHRvbiwgdGhpcy5jcmVhdGVTZWxlY3RCdXR0b24sIHRoaXMuY3JlYXRlSGlkZUJ1dHRvbiwgdGhpcy5jcmVhdGVBZGRDb2x1bW5CdXR0b24sIHRoaXMuY3JlYXRlTW92ZVRvRGV0YWlsQnV0dG9uIF07XG4gICAgdGhpcy5kZXRhaWxCdXR0b25DcmVhdG9ycyA9IFsgdGhpcy5jcmVhdGVTaG93QXNDb2x1bW5CdXR0b24gXTtcbiAgICBpZihfY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1ucyhzdXJ2ZXkpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENvbHVtbnMoc3VydmV5OiBTdXJ2ZXlNb2RlbCkge1xuICAgIHJldHVybiB0aGlzLnN1cnZleS5nZXRBbGxRdWVzdGlvbnMoKS5tYXAoKHF1ZXN0aW9uOiBRdWVzdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6IChxdWVzdGlvbi50aXRsZSB8fCBcIlwiKS50cmltKCkgfHwgcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGF0YVR5cGU6IHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJmaWxlXCIgPyBDb2x1bW5EYXRhVHlwZS5UZXh0IDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6IHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJmaWxlXCIgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUgOiBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSxcbiAgICAgICAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNWaXNpYmxlKHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpIHtcbiAgICByZXR1cm4gdGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSAhPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUgfHwgIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sdW1ucygpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29sdW1ucyhjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+KSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgaWYodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpc1JlbmRlcmVkKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdyb3VwQnk6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBkZXN0cm95KCkge1xuICAgIC8vaWYoIXRoaXMudGFyZ2V0Tm9kZSkgcmV0dXJuO1xuICAgIGNvbnN0IHRhYmxlTm9kZSA9IHRoaXMudGFyZ2V0Tm9kZS5jaGlsZHJlblswXTtcbiAgICBpZiAoKDxhbnk+JC5mbikuRGF0YVRhYmxlLmlzRGF0YVRhYmxlKHRhYmxlTm9kZSkgKSB7XG4gICAgICAkKHRhYmxlTm9kZSkuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0YWJsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdmFyIGNvbHVtbnNEYXRhOiBhbnkgPSB0aGlzLmdldENvbHVtbnMoKS5tYXAoKGM6IGFueSkgPT4gYy5kYXRhKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge1xuICAgICAgYnV0dG9uczogW1wiY29weVwiLCBcImNzdlwiLCBcInByaW50XCJdLFxuICAgICAgZG9tOiBcIkJsZnJ0aXBcIixcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGNvbHVtbnM6IHRoaXMuZ2V0Q29sdW1ucygpLFxuICAgICAgLy8gb3JkZXJGaXhlZDogW1sxLCBcImFzY1wiXV0sXG4gICAgICByb3dHcm91cDoge1xuICAgICAgICBkYXRhU3JjOiBjb2x1bW5zRGF0YVswXSxcbiAgICAgICAgZW5kUmVuZGVyOiAocm93czogYW55LCBncm91cDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFwiQ291bnQ6IFwiICsgcm93cy5kYXRhKCkuY291bnQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNlbGVjdDogXCJhcGlcIixcbiAgICAgIGhlYWRlckNhbGxiYWNrOiAodGhlYWQ6IGFueSwgZGF0YTogYW55LCBzdGFydDogYW55LCBlbmQ6IGFueSwgZGlzcGxheTogYW55KSA9PiB7XG4gICAgICAgIHZhciBkYXRhdGFibGVBcGkgPSAkKHRhYmxlTm9kZSlcbiAgICAgICAgICAuZGF0YVRhYmxlKClcbiAgICAgICAgICAuYXBpKCk7XG4gICAgICAgICQodGhlYWQpXG4gICAgICAgICAgLmNoaWxkcmVuKFwidGhcIilcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbihpbmRleCwgbm9kZSkge1xuICAgICAgICAgICAgdmFyICR0aE5vZGUgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCR0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlLWFjdGlvbi1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgc2VsZi5oZWFkZXJCdXR0b25DcmVhdG9ycy5mb3JFYWNoKGNyZWF0b3IgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0b3IoZGF0YXRhYmxlQXBpLCBpbmRleCwgY29sdW1uc0RhdGFbaW5kZXhdKSkpO1xuICAgICAgICAgICAgICAkdGhOb2RlLnByZXBlbmQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XG4gICAgdGFibGVOb2RlLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlIGRpc3BsYXkgZGF0YVRhYmxlXCI7XG5cbiAgICBjb25zdCBkYXRhdGFibGVBcGkgPSAkKHRhYmxlTm9kZSkuRGF0YVRhYmxlKG9wdGlvbnMpO1xuICAgIGRhdGF0YWJsZUFwaVxuICAgICAgLnJvd0dyb3VwKClcbiAgICAgIC5lbmFibGUoZmFsc2UpXG4gICAgICAuZHJhdygpO1xuXG4gICAgLy8gZGF0YXRhYmxlQXBpLm9uKFwicm93Z3JvdXAtZGF0YXNyY1wiLCAoZSwgZHQsIHZhbCkgPT4ge1xuICAgIC8vICAgZGF0YXRhYmxlQXBpLm9yZGVyLmZpeGVkKHsgcHJlOiBbW2NvbHVtbnNEYXRhLmluZGV4T2YodmFsKSwgXCJhc2NcIl1dIH0pLmRyYXcoKTtcbiAgICAvLyB9KTtcbiAgICBkYXRhdGFibGVBcGkub24oJ2NvbHVtbi1yZW9yZGVyJywgKGUsIHNldHRpbmdzLCBkZXRhaWxzKSA9PiB7XG4gICAgICB2YXIgY29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGRldGFpbHMuZnJvbSwgMSk7XG4gICAgICB0aGlzLl9jb2x1bW5zLnNwbGljZShkZXRhaWxzLnRvLCAwLCBjb2x1bW5zWzBdKTtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5fY29sdW1ucyk7XG4gICAgfSk7XG4gICAgJCh0YWJsZU5vZGUpLmZpbmQoJ3Rib2R5Jykub24oJ2NsaWNrJywgJ3RkLnNhLWRhdGF0YWJsZS1hY3Rpb24tY29sdW1uJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRyID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuICAgICAgdmFyIHJvdyA9IGRhdGF0YWJsZUFwaS5yb3codHIpO1xuXG4gICAgICBpZiAocm93LmNoaWxkLmlzU2hvd24oKSkge1xuICAgICAgICAgIHJvdy5jaGlsZC5oaWRlKCk7XG4gICAgICAgICAgdHIucmVtb3ZlQ2xhc3MoJ3NhLWRhdGF0YWJsZS1kZXRhaWwtcm93Jyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICByb3cuY2hpbGQoc2VsZi5jcmVhdGVEZXRhaWxNYXJrdXAocm93LmRhdGEoKSkpLnNob3coKTtcbiAgICAgICAgICB0ci5hZGRDbGFzcygnc2EtZGF0YXRhYmxlLWRldGFpbC1yb3cnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVEZXRhaWxNYXJrdXAoZGF0YTogYW55KSB7XG4gICAgdmFyIHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIHRhYmxlLmNlbGxQYWRkaW5nID0gXCI1XCI7XG4gICAgdGFibGUuY2VsbFNwYWNpbmcgPSBcIjBcIjtcbiAgICB0YWJsZS5ib3JkZXIgPSBcIjBcIjtcbiAgICB0YWJsZS5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZS1kZXRhaWxcIjtcblxuICAgIHRoaXMuY29sdW1uc1xuICAgICAgLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiB0aGlzLmlzVmlzaWJsZShjb2x1bW4udmlzaWJpbGl0eSkpXG4gICAgICAuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICB2YXIgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZDEudGV4dENvbnRlbnQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIHZhciB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IGRhdGFbY29sdW1uLm5hbWVdO1xuICAgICAgICB2YXIgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0aGlzLmRldGFpbEJ1dHRvbkNyZWF0b3JzLmZvckVhY2goY3JlYXRvciA9PiB0ZDMuYXBwZW5kQ2hpbGQoY3JlYXRvcihjb2x1bW4ubmFtZSkpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9KTtcblxuICAgIGlmKCEhdGhpcy5yZW5kZXJEZXRhaWxBY3Rpb25zKSB7XG4gICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgdGhpcy5yZW5kZXJEZXRhaWxBY3Rpb25zKHRkLCBkYXRhKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgZGF0YTogYW55KSA9PiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgaGVhZGVyQnV0dG9uQ3JlYXRvcnM6IEFycmF5PChcbiAgICBkYXRhdGFibGVBcGk6IGFueSxcbiAgICBjb2xJZHg6IG51bWJlcixcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcbiAgKSA9PiBIVE1MRWxlbWVudD4gPSBbXTtcblxuICBwdWJsaWMgZGV0YWlsQnV0dG9uQ3JlYXRvcnM6IEFycmF5PChcbiAgICBjb2x1bW5OYW1lPzogc3RyaW5nXG4gICkgPT4gSFRNTEVsZW1lbnQ+ID0gW107XG5cbiAgY3JlYXRlU2VsZWN0QnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNlbGVjdEJ1dHRvblwiKTtcbiAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICg8YW55PmRhdGF0YWJsZUFwaS5jb2x1bW5zKCkpLmRlc2VsZWN0KCk7XG4gICAgICAoPGFueT5kYXRhdGFibGVBcGkuY29sdW1uKGNvbElkeCkpLnNlbGVjdCgpO1xuICAgICAgISF0aGlzLm9uQ29sdW1uU2VsZWN0ZWQgJiYgdGhpcy5vbkNvbHVtblNlbGVjdGVkKGNvbHVtbk5hbWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVHcm91cGluZ0J1dHRvbiA9IChcbiAgICBkYXRhdGFibGVBcGk6IGFueSxcbiAgICBjb2xJZHg6IG51bWJlcixcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcbiAgKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJncm91cEJ1dHRvblwiKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBCeS5pbmRleE9mKGNvbHVtbk5hbWUpO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLmdyb3VwQnkucHVzaChjb2x1bW5OYW1lKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ1bmdyb3VwQnV0dG9uXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJncm91cEJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5ncm91cEJ5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIGRhdGF0YWJsZUFwaS5yb3dHcm91cCgpLmVuYWJsZSh0aGlzLmdyb3VwQnkubGVuZ3RoID4gMCk7XG4gICAgICBpZiAodGhpcy5ncm91cEJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YXRhYmxlQXBpLnJvd0dyb3VwKCkuZGF0YVNyYyg8YW55PnRoaXMuZ3JvdXBCeSk7XG4gICAgICB9XG4gICAgICBkYXRhdGFibGVBcGkuZHJhdygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNyZWF0ZUhpZGVCdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUNvbHVtblwiKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdLnZpc2liaWxpdHkgPSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZTtcbiAgICAgIGRhdGF0YWJsZUFwaS5jb2x1bW5zKFtjb2xJZHhdKS52aXNpYmxlKGZhbHNlKTtcblxuICAgICAgLy8gVE9ETzogVXNlIGRhdGF0YWJsZXMgdG8gdXBkYXRlIGhlYWRlcnMgKHNob3cgY29sdW1ucyBvcHRpb25zKVxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVBZGRDb2x1bW5CdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0b3Iub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udGV4dCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93Q29sdW1uXCIpO1xuICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgdGhpcy5jb2x1bW5zXG4gICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4udmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpXG4gICAgICAuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgdmFyIHRleHQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIGlmKHRleHQubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24udGV4dCA9IHRleHQ7XG4gICAgICAgIG9wdGlvbi50aXRsZSA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gY29sdW1uLm5hbWU7XG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxlY3Rvci5vbmNoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZighJCh0aGlzKS52YWwoKSkgcmV0dXJuO1xuXG4gICAgICB2YXIgY29sdW1uID0gc2VsZi5fY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5uYW1lID09PSAkKHRoaXMpLnZhbCgpKVswXTtcbiAgICAgIGNvbHVtbi52aXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlO1xuICAgICAgZGF0YXRhYmxlQXBpLmNvbHVtbnMoW3NlbGYuX2NvbHVtbnMuaW5kZXhPZihjb2x1bW4pXSkudmlzaWJsZSh0cnVlKTtcblxuICAgICAgLy8gVE9ETzogVXNlIGRhdGF0YWJsZXMgdG8gdXBkYXRlIGhlYWRlcnMgKHNob3cgY29sdW1ucyBvcHRpb25zKVxuICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xuXG4gIGNyZWF0ZU1vdmVUb0RldGFpbEJ1dHRvbiA9IChcbiAgICBkYXRhdGFibGVBcGk6IGFueSxcbiAgICBjb2xJZHg6IG51bWJlcixcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcbiAgKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG5cbiAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdGhpcy5fY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXS5sb2NhdGlvbiA9IFF1ZXN0aW9uTG9jYXRpb24uUm93O1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVTaG93QXNDb2x1bW5CdXR0b24gPSAoXG4gICAgY29sdW1uTmFtZT86IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdLmxvY2F0aW9uID0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3c7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGdldENvbHVtbnMoKTogQXJyYXk8T2JqZWN0PiB7XG4gICAgY29uc3QgY29sdW1uczogYW55ID0gdGhpcy5jb2x1bW5zXG4gICAgLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbiAmJiB0aGlzLmlzVmlzaWJsZShjb2x1bW4udmlzaWJpbGl0eSkpXG4gICAgLm1hcChjb2x1bW4gPT4ge1xuICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShjb2x1bW4ubmFtZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgc1RpdGxlOiBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgIHZpc2libGU6IGNvbHVtbi52aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSxcbiAgICAgICAgbVJlbmRlcjogKGRhdGE6IG9iamVjdCwgdHlwZTogc3RyaW5nLCByb3c6IGFueSkgPT4ge1xuICAgICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSByb3dbY29sdW1uLm5hbWVdO1xuICAgICAgICAgIGlmKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5kYXRhID0gcm93O1xuICAgICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uZGlzcGxheVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHR5cGVvZiBkaXNwbGF5VmFsdWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgPyBkaXNwbGF5VmFsdWVcbiAgICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpKSB8fCBcIlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbe1xuICAgICAgXCJjbGFzc05hbWVcIjogJ3NhLWRhdGF0YWJsZS1hY3Rpb24tY29sdW1uJyxcbiAgICAgIFwib3JkZXJhYmxlXCI6IGZhbHNlLFxuICAgICAgXCJkYXRhXCI6IG51bGwsXG4gICAgICBcImRlZmF1bHRDb250ZW50XCI6ICcnXG4gICAgfV0uY29uY2F0KGNvbHVtbnMpO1xuICB9XG5cbiAgcHVibGljIG9uQ29sdW1uU2VsZWN0ZWQ6IChkYXRhTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RhdGF0YWJsZXMvZGF0YXRhYmxlcy50cyIsImV4cG9ydCAqIGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3JhdGluZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWF0cml4XCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxvdGx5L2luZGV4LnRzIiwiaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IG1hdHJpeGR5bmFtaWM6IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICBjb25zdCB2aXNpYmxlUm93cyA9IG1hdHJpeGR5bmFtaWMudmlzaWJsZVJvd3M7XG5cbiAgICBpZiAodmlzaWJsZVJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gdmlzaWJsZVJvd3NbMF0uY2VsbHMubWFwKGMgPT4gYy5xdWVzdGlvbik7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcIm1hdHJpeGR5bmFtaWNcIixcbiAgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcbik7XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJtYXRyaXhkcm9wZG93blwiLFxuICBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pY1xuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uTWF0cml4RHluYW1pYy50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgV29yZENsb3VkTGliIGZyb20gXCJ3b3JkY2xvdWRcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4uL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgdGV4dEhlbHBlciB9IGZyb20gXCIuL3N0b3B3b3Jkcy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgV29yZENsb3VkIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvdWQ6IGFueTtcblxuICBnZXREYXRhKCkge1xuICAgIGxldCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcblxuICAgIGxldCBzdG9wV29yZHMgPSB0ZXh0SGVscGVyLmdldFN0b3BXb3JkcygpO1xuICAgIGxldCBzdG9wVGhlV29yZCA9ICh3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChzdG9wV29yZHMuaW5kZXhPZih3b3JkKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gd29yZDtcbiAgICB9O1xuXG4gICAgbGV0IHByb2Nlc3NTdHJpbmcgPSAocm93OiBzdHJpbmcpID0+IHtcbiAgICAgIHJvdyA9IFwiXCIgKyByb3c7XG4gICAgICBpZiAoISFyb3cpIHtcbiAgICAgICAgcm93LnNwbGl0KFwiIFwiKS5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgIHdvcmQgPSBzdG9wVGhlV29yZCh3b3JkLnRvTG93ZXJDYXNlKCkgfHwgXCJcIik7XG4gICAgICAgICAgaWYgKCEhd29yZCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHRbd29yZF0pIHtcbiAgICAgICAgICAgICAgcmVzdWx0W3dvcmRdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdFt3b3JkXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkpIHtcbiAgICAgICAgICByb3dWYWx1ZS5mb3JFYWNoKHByb2Nlc3NTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2Ygcm93VmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvd1ZhbHVlKS5mb3JFYWNoKGtleSA9PiBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlW2tleV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc1N0cmluZyhyb3dWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiBba2V5LCByZXN1bHRba2V5XV07XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgY2FudmFzTm9kZSA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW1wdHlUZXh0Tm9kZS5pbm5lckhUTUwgPSBcIlRoZXJlIGlzIG5vIHJlc3VsdHMgeWV0XCI7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzTm9kZSk7XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBsaXN0OiBkYXRhLFxuICAgICAgd2VpZ2h0RmFjdG9yOiAyMCxcbiAgICAgIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUkgQm9sZCwgc2Fucy1zZXJpZlwiLFxuICAgICAgY29sb3I6ICh3b3JkOiBzdHJpbmcsIHdlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUNvbG9yKCk7XG4gICAgICB9LFxuICAgICAgcm90YXRlUmF0aW86IDAuNSxcbiAgICAgIHJvdGF0aW9uU3RlcHM6IDIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uKGl0ZW06IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtWzBdICsgXCI6IFwiICsgaXRlbVsxXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuY2xvdWQgPSBXb3JkQ2xvdWRMaWIoY2FudmFzTm9kZSwgY29uZmlnKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKCEhdGhpcy5jbG91ZCkge1xuICAgICAgdGhpcy5jbG91ZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgV29yZENsb3VkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JkY2xvdWQvd29yZGNsb3VkLnRzIiwiLyoqXG4gKiBtYXRjaGVzU2VsZWN0b3IgdjIuMC4yXG4gKiBtYXRjaGVzU2VsZWN0b3IoIGVsZW1lbnQsICcuc2VsZWN0b3InIClcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaGVzTWV0aG9kID0gKCBmdW5jdGlvbigpIHtcbiAgICB2YXIgRWxlbVByb3RvID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuICAgIC8vIGNoZWNrIGZvciB0aGUgc3RhbmRhcmQgbWV0aG9kIG5hbWUgZmlyc3RcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdW4tcHJlZml4ZWRcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXNTZWxlY3Rvcic7XG4gICAgfVxuICAgIC8vIGNoZWNrIHZlbmRvciBwcmVmaXhlc1xuICAgIHZhciBwcmVmaXhlcyA9IFsgJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycgXTtcblxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSBwcmVmaXggKyAnTWF0Y2hlc1NlbGVjdG9yJztcbiAgICAgIGlmICggRWxlbVByb3RvWyBtZXRob2QgXSApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSB7XG4gICAgcmV0dXJuIGVsZW1bIG1hdGNoZXNNZXRob2QgXSggc2VsZWN0b3IgKTtcbiAgfTtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEZpenp5IFVJIHV0aWxzIHYyLjAuN1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLypqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvcidcbiAgICBdLCBmdW5jdGlvbiggbWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmZpenp5VUlVdGlscyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHt9O1xuXG4vLyAtLS0tLSBleHRlbmQgLS0tLS0gLy9cblxuLy8gZXh0ZW5kcyBvYmplY3RzXG51dGlscy5leHRlbmQgPSBmdW5jdGlvbiggYSwgYiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gYiApIHtcbiAgICBhWyBwcm9wIF0gPSBiWyBwcm9wIF07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG4vLyAtLS0tLSBtb2R1bG8gLS0tLS0gLy9cblxudXRpbHMubW9kdWxvID0gZnVuY3Rpb24oIG51bSwgZGl2ICkge1xuICByZXR1cm4gKCAoIG51bSAlIGRpdiApICsgZGl2ICkgJSBkaXY7XG59O1xuXG4vLyAtLS0tLSBtYWtlQXJyYXkgLS0tLS0gLy9cblxudmFyIGFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8vIHR1cm4gZWxlbWVudCBvciBub2RlTGlzdCBpbnRvIGFuIGFycmF5XG51dGlscy5tYWtlQXJyYXkgPSBmdW5jdGlvbiggb2JqICkge1xuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuICAgIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgLy8gcmV0dXJuIGVtcHR5IGFycmF5IGlmIHVuZGVmaW5lZCBvciBudWxsLiAjNlxuICBpZiAoIG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgaXNBcnJheUxpa2UgPSB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInO1xuICBpZiAoIGlzQXJyYXlMaWtlICkge1xuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgICByZXR1cm4gYXJyYXlTbGljZS5jYWxsKCBvYmogKTtcbiAgfVxuXG4gIC8vIGFycmF5IG9mIHNpbmdsZSBpbmRleFxuICByZXR1cm4gWyBvYmogXTtcbn07XG5cbi8vIC0tLS0tIHJlbW92ZUZyb20gLS0tLS0gLy9cblxudXRpbHMucmVtb3ZlRnJvbSA9IGZ1bmN0aW9uKCBhcnksIG9iaiApIHtcbiAgdmFyIGluZGV4ID0gYXJ5LmluZGV4T2YoIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFBhcmVudCAtLS0tLSAvL1xuXG51dGlscy5nZXRQYXJlbnQgPSBmdW5jdGlvbiggZWxlbSwgc2VsZWN0b3IgKSB7XG4gIHdoaWxlICggZWxlbS5wYXJlbnROb2RlICYmIGVsZW0gIT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRRdWVyeUVsZW1lbnQgLS0tLS0gLy9cblxuLy8gdXNlIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG51dGlscy5nZXRRdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuLy8gLS0tLS0gaGFuZGxlRXZlbnQgLS0tLS0gLy9cblxuLy8gZW5hYmxlIC5vbnR5cGUgdG8gdHJpZ2dlciBmcm9tIC5hZGRFdmVudExpc3RlbmVyKCBlbGVtLCAndHlwZScgKVxudXRpbHMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZmlsdGVyRmluZEVsZW1lbnRzIC0tLS0tIC8vXG5cbnV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcywgc2VsZWN0b3IgKSB7XG4gIC8vIG1ha2UgYXJyYXkgb2YgZWxlbXNcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBmZkVsZW1zID0gW107XG5cbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgLy8gY2hlY2sgdGhhdCBlbGVtIGlzIGFuIGFjdHVhbCBlbGVtZW50XG4gICAgaWYgKCAhKCBlbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYWRkIGVsZW0gaWYgbm8gc2VsZWN0b3JcbiAgICBpZiAoICFzZWxlY3RvciApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYSBzZWxlY3RvclxuICAgIC8vIGZpbHRlclxuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgfVxuICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICB2YXIgY2hpbGRFbGVtcyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcbiAgICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBjaGlsZEVsZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBjaGlsZEVsZW1zW2ldICk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmZFbGVtcztcbn07XG5cbi8vIC0tLS0tIGRlYm91bmNlTWV0aG9kIC0tLS0tIC8vXG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kID0gZnVuY3Rpb24oIF9jbGFzcywgbWV0aG9kTmFtZSwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMTAwO1xuICAvLyBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG1ldGhvZCA9IF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXTtcbiAgdmFyIHRpbWVvdXROYW1lID0gbWV0aG9kTmFtZSArICdUaW1lb3V0JztcblxuICBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIG1ldGhvZC5hcHBseSggX3RoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSBfdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgKTtcbiAgfTtcbn07XG5cbi8vIC0tLS0tIGRvY1JlYWR5IC0tLS0tIC8vXG5cbnV0aWxzLmRvY1JlYWR5ID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICB2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gIGlmICggcmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnIHx8IHJlYWR5U3RhdGUgPT0gJ2ludGVyYWN0aXZlJyApIHtcbiAgICAvLyBkbyBhc3luYyB0byBhbGxvdyBmb3Igb3RoZXIgc2NyaXB0cyB0byBydW4uIG1ldGFmaXp6eS9mbGlja2l0eSM0NDFcbiAgICBzZXRUaW1lb3V0KCBjYWxsYmFjayApO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2sgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gaHRtbEluaXQgLS0tLS0gLy9cblxuLy8gaHR0cDovL2phbWVzcm9iZXJ0cy5uYW1lL2Jsb2cvMjAxMC8wMi8yMi9zdHJpbmctZnVuY3Rpb25zLWZvci1qYXZhc2NyaXB0LXRyaW0tdG8tY2FtZWwtY2FzZS10by1kYXNoZWQtYW5kLXRvLXVuZGVyc2NvcmUvXG51dGlscy50b0Rhc2hlZCA9IGZ1bmN0aW9uKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyguKShbQS1aXSkvZywgZnVuY3Rpb24oIG1hdGNoLCAkMSwgJDIgKSB7XG4gICAgcmV0dXJuICQxICsgJy0nICsgJDI7XG4gIH0pLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuLyoqXG4gKiBhbGxvdyB1c2VyIHRvIGluaXRpYWxpemUgY2xhc3NlcyB2aWEgW2RhdGEtbmFtZXNwYWNlXSBvciAuanMtbmFtZXNwYWNlIGNsYXNzXG4gKiBodG1sSW5pdCggV2lkZ2V0LCAnd2lkZ2V0TmFtZScgKVxuICogb3B0aW9ucyBhcmUgcGFyc2VkIGZyb20gZGF0YS1uYW1lc3BhY2Utb3B0aW9uc1xuICovXG51dGlscy5odG1sSW5pdCA9IGZ1bmN0aW9uKCBXaWRnZXRDbGFzcywgbmFtZXNwYWNlICkge1xuICB1dGlscy5kb2NSZWFkeSggZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhc2hlZE5hbWVzcGFjZSA9IHV0aWxzLnRvRGFzaGVkKCBuYW1lc3BhY2UgKTtcbiAgICB2YXIgZGF0YUF0dHIgPSAnZGF0YS0nICsgZGFzaGVkTmFtZXNwYWNlO1xuICAgIHZhciBkYXRhQXR0ckVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ1snICsgZGF0YUF0dHIgKyAnXScgKTtcbiAgICB2YXIganNEYXNoRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmpzLScgKyBkYXNoZWROYW1lc3BhY2UgKTtcbiAgICB2YXIgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGRhdGFBdHRyRWxlbXMgKVxuICAgICAgLmNvbmNhdCggdXRpbHMubWFrZUFycmF5KCBqc0Rhc2hFbGVtcyApICk7XG4gICAgdmFyIGRhdGFPcHRpb25zQXR0ciA9IGRhdGFBdHRyICsgJy1vcHRpb25zJztcbiAgICB2YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcblxuICAgIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgdmFyIGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YUF0dHIgKSB8fFxuICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YU9wdGlvbnNBdHRyICk7XG4gICAgICB2YXIgb3B0aW9ucztcbiAgICAgIHRyeSB7XG4gICAgICAgIG9wdGlvbnMgPSBhdHRyICYmIEpTT04ucGFyc2UoIGF0dHIgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgLy8gbG9nIGVycm9yLCBkbyBub3QgaW5pdGlhbGl6ZVxuICAgICAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvciggJ0Vycm9yIHBhcnNpbmcgJyArIGRhdGFBdHRyICsgJyBvbiAnICsgZWxlbS5jbGFzc05hbWUgK1xuICAgICAgICAgICc6ICcgKyBlcnJvciApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBXaWRnZXRDbGFzcyggZWxlbSwgb3B0aW9ucyApO1xuICAgICAgLy8gbWFrZSBhdmFpbGFibGUgdmlhICQoKS5kYXRhKCduYW1lc3BhY2UnKVxuICAgICAgaWYgKCBqUXVlcnkgKSB7XG4gICAgICAgIGpRdWVyeS5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIHV0aWxzO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZml6enktdWktdXRpbHMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogTWFzb25yeSB2NC4yLjJcbiAqIENhc2NhZGluZyBncmlkIGxheW91dCBsaWJyYXJ5XG4gKiBodHRwczovL21hc29ucnkuZGVzYW5kcm8uY29tXG4gKiBNSVQgTGljZW5zZVxuICogYnkgRGF2aWQgRGVTYW5kcm9cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5NYXNvbnJ5ID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5PdXRsYXllcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIE91dGxheWVyLCBnZXRTaXplICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hc29ucnlEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeSA9IE91dGxheWVyLmNyZWF0ZSgnbWFzb25yeScpO1xuICAvLyBpc0ZpdFdpZHRoIC0+IGZpdFdpZHRoXG4gIE1hc29ucnkuY29tcGF0T3B0aW9ucy5maXRXaWR0aCA9ICdpc0ZpdFdpZHRoJztcblxuICB2YXIgcHJvdG8gPSBNYXNvbnJ5LnByb3RvdHlwZTtcblxuICBwcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldFNpemUoKTtcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2NvbHVtbldpZHRoJywgJ291dGVyV2lkdGgnICk7XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbiAgICB0aGlzLm1lYXN1cmVDb2x1bW5zKCk7XG5cbiAgICAvLyByZXNldCBjb2x1bW4gWVxuICAgIHRoaXMuY29sWXMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5jb2xzOyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzLnB1c2goIDAgKTtcbiAgICB9XG5cbiAgICB0aGlzLm1heFkgPSAwO1xuICAgIHRoaXMuaG9yaXpvbnRhbENvbEluZGV4ID0gMDtcbiAgfTtcblxuICBwcm90by5tZWFzdXJlQ29sdW1ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKTtcbiAgICAvLyBpZiBjb2x1bW5XaWR0aCBpcyAwLCBkZWZhdWx0IHRvIG91dGVyV2lkdGggb2YgZmlyc3QgaXRlbVxuICAgIGlmICggIXRoaXMuY29sdW1uV2lkdGggKSB7XG4gICAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICAgIHZhciBmaXJzdEl0ZW1FbGVtID0gZmlyc3RJdGVtICYmIGZpcnN0SXRlbS5lbGVtZW50O1xuICAgICAgLy8gY29sdW1uV2lkdGggZmFsbCBiYWNrIHRvIGl0ZW0gb2YgZmlyc3QgZWxlbWVudFxuICAgICAgdGhpcy5jb2x1bW5XaWR0aCA9IGZpcnN0SXRlbUVsZW0gJiYgZ2V0U2l6ZSggZmlyc3RJdGVtRWxlbSApLm91dGVyV2lkdGggfHxcbiAgICAgICAgLy8gaWYgZmlyc3QgZWxlbSBoYXMgbm8gd2lkdGgsIGRlZmF1bHQgdG8gc2l6ZSBvZiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uV2lkdGggPSB0aGlzLmNvbHVtbldpZHRoICs9IHRoaXMuZ3V0dGVyO1xuXG4gICAgLy8gY2FsY3VsYXRlIGNvbHVtbnNcbiAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gICAgdmFyIGNvbHMgPSBjb250YWluZXJXaWR0aCAvIGNvbHVtbldpZHRoO1xuICAgIC8vIGZpeCByb3VuZGluZyBlcnJvcnMsIHR5cGljYWxseSB3aXRoIGd1dHRlcnNcbiAgICB2YXIgZXhjZXNzID0gY29sdW1uV2lkdGggLSBjb250YWluZXJXaWR0aCAlIGNvbHVtbldpZHRoO1xuICAgIC8vIGlmIG92ZXJzaG9vdCBpcyBsZXNzIHRoYW4gYSBwaXhlbCwgcm91bmQgdXAsIG90aGVyd2lzZSBmbG9vciBpdFxuICAgIHZhciBtYXRoTWV0aG9kID0gZXhjZXNzICYmIGV4Y2VzcyA8IDEgPyAncm91bmQnIDogJ2Zsb29yJztcbiAgICBjb2xzID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBjb2xzICk7XG4gICAgdGhpcy5jb2xzID0gTWF0aC5tYXgoIGNvbHMsIDEgKTtcbiAgfTtcblxuICBwcm90by5nZXRDb250YWluZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnRhaW5lciBpcyBwYXJlbnQgaWYgZml0IHdpZHRoXG4gICAgdmFyIGlzRml0V2lkdGggPSB0aGlzLl9nZXRPcHRpb24oJ2ZpdFdpZHRoJyk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGlzRml0V2lkdGggPyB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSA6IHRoaXMuZWxlbWVudDtcbiAgICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gICAgdmFyIHNpemUgPSBnZXRTaXplKCBjb250YWluZXIgKTtcbiAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gc2l6ZSAmJiBzaXplLmlubmVyV2lkdGg7XG4gIH07XG5cbiAgcHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZ2V0U2l6ZSgpO1xuICAgIC8vIGhvdyBtYW55IGNvbHVtbnMgZG9lcyB0aGlzIGJyaWNrIHNwYW5cbiAgICB2YXIgcmVtYWluZGVyID0gaXRlbS5zaXplLm91dGVyV2lkdGggJSB0aGlzLmNvbHVtbldpZHRoO1xuICAgIHZhciBtYXRoTWV0aG9kID0gcmVtYWluZGVyICYmIHJlbWFpbmRlciA8IDEgPyAncm91bmQnIDogJ2NlaWwnO1xuICAgIC8vIHJvdW5kIGlmIG9mZiBieSAxIHBpeGVsLCBvdGhlcndpc2UgdXNlIGNlaWxcbiAgICB2YXIgY29sU3BhbiA9IE1hdGhbIG1hdGhNZXRob2QgXSggaXRlbS5zaXplLm91dGVyV2lkdGggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgY29sU3BhbiA9IE1hdGgubWluKCBjb2xTcGFuLCB0aGlzLmNvbHMgKTtcbiAgICAvLyB1c2UgaG9yaXpvbnRhbCBvciB0b3AgY29sdW1uIHBvc2l0aW9uXG4gICAgdmFyIGNvbFBvc01ldGhvZCA9IHRoaXMub3B0aW9ucy5ob3Jpem9udGFsT3JkZXIgP1xuICAgICAgJ19nZXRIb3Jpem9udGFsQ29sUG9zaXRpb24nIDogJ19nZXRUb3BDb2xQb3NpdGlvbic7XG4gICAgdmFyIGNvbFBvc2l0aW9uID0gdGhpc1sgY29sUG9zTWV0aG9kIF0oIGNvbFNwYW4sIGl0ZW0gKTtcbiAgICAvLyBwb3NpdGlvbiB0aGUgYnJpY2tcbiAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICB4OiB0aGlzLmNvbHVtbldpZHRoICogY29sUG9zaXRpb24uY29sLFxuICAgICAgeTogY29sUG9zaXRpb24ueVxuICAgIH07XG4gICAgLy8gYXBwbHkgc2V0SGVpZ2h0IHRvIG5lY2Vzc2FyeSBjb2x1bW5zXG4gICAgdmFyIHNldEhlaWdodCA9IGNvbFBvc2l0aW9uLnkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdmFyIHNldE1heCA9IGNvbFNwYW4gKyBjb2xQb3NpdGlvbi5jb2w7XG4gICAgZm9yICggdmFyIGkgPSBjb2xQb3NpdGlvbi5jb2w7IGkgPCBzZXRNYXg7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIHByb3RvLl9nZXRUb3BDb2xQb3NpdGlvbiA9IGZ1bmN0aW9uKCBjb2xTcGFuICkge1xuICAgIHZhciBjb2xHcm91cCA9IHRoaXMuX2dldFRvcENvbEdyb3VwKCBjb2xTcGFuICk7XG4gICAgLy8gZ2V0IHRoZSBtaW5pbXVtIFkgdmFsdWUgZnJvbSB0aGUgY29sdW1uc1xuICAgIHZhciBtaW5pbXVtWSA9IE1hdGgubWluLmFwcGx5KCBNYXRoLCBjb2xHcm91cCApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogY29sR3JvdXAuaW5kZXhPZiggbWluaW11bVkgKSxcbiAgICAgIHk6IG1pbmltdW1ZLFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2xTcGFuIC0gbnVtYmVyIG9mIGNvbHVtbnMgdGhlIGVsZW1lbnQgc3BhbnNcbiAgICogQHJldHVybnMge0FycmF5fSBjb2xHcm91cFxuICAgKi9cbiAgcHJvdG8uX2dldFRvcENvbEdyb3VwID0gZnVuY3Rpb24oIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIC8vIGlmIGJyaWNrIHNwYW5zIG9ubHkgb25lIGNvbHVtbiwgdXNlIGFsbCB0aGUgY29sdW1uIFlzXG4gICAgICByZXR1cm4gdGhpcy5jb2xZcztcbiAgICB9XG5cbiAgICB2YXIgY29sR3JvdXAgPSBbXTtcbiAgICAvLyBob3cgbWFueSBkaWZmZXJlbnQgcGxhY2VzIGNvdWxkIHRoaXMgYnJpY2sgZml0IGhvcml6b250YWxseVxuICAgIHZhciBncm91cENvdW50ID0gdGhpcy5jb2xzICsgMSAtIGNvbFNwYW47XG4gICAgLy8gZm9yIGVhY2ggZ3JvdXAgcG90ZW50aWFsIGhvcml6b250YWwgcG9zaXRpb25cbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBncm91cENvdW50OyBpKysgKSB7XG4gICAgICBjb2xHcm91cFtpXSA9IHRoaXMuX2dldENvbEdyb3VwWSggaSwgY29sU3BhbiApO1xuICAgIH1cbiAgICByZXR1cm4gY29sR3JvdXA7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbEdyb3VwWSA9IGZ1bmN0aW9uKCBjb2wsIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbFlzWyBjb2wgXTtcbiAgICB9XG4gICAgLy8gbWFrZSBhbiBhcnJheSBvZiBjb2xZIHZhbHVlcyBmb3IgdGhhdCBvbmUgZ3JvdXBcbiAgICB2YXIgZ3JvdXBDb2xZcyA9IHRoaXMuY29sWXMuc2xpY2UoIGNvbCwgY29sICsgY29sU3BhbiApO1xuICAgIC8vIGFuZCBnZXQgdGhlIG1heCB2YWx1ZSBvZiB0aGUgYXJyYXlcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoIE1hdGgsIGdyb3VwQ29sWXMgKTtcbiAgfTtcblxuICAvLyBnZXQgY29sdW1uIHBvc2l0aW9uIGJhc2VkIG9uIGhvcml6b250YWwgaW5kZXguICM4NzNcbiAgcHJvdG8uX2dldEhvcml6b250YWxDb2xQb3NpdGlvbiA9IGZ1bmN0aW9uKCBjb2xTcGFuLCBpdGVtICkge1xuICAgIHZhciBjb2wgPSB0aGlzLmhvcml6b250YWxDb2xJbmRleCAlIHRoaXMuY29scztcbiAgICB2YXIgaXNPdmVyID0gY29sU3BhbiA+IDEgJiYgY29sICsgY29sU3BhbiA+IHRoaXMuY29scztcbiAgICAvLyBzaGlmdCB0byBuZXh0IHJvdyBpZiBpdGVtIGNhbid0IGZpdCBvbiBjdXJyZW50IHJvd1xuICAgIGNvbCA9IGlzT3ZlciA/IDAgOiBjb2w7XG4gICAgLy8gZG9uJ3QgbGV0IHplcm8tc2l6ZSBpdGVtcyB0YWtlIHVwIHNwYWNlXG4gICAgdmFyIGhhc1NpemUgPSBpdGVtLnNpemUub3V0ZXJXaWR0aCAmJiBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdGhpcy5ob3Jpem9udGFsQ29sSW5kZXggPSBoYXNTaXplID8gY29sICsgY29sU3BhbiA6IHRoaXMuaG9yaXpvbnRhbENvbEluZGV4O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogY29sLFxuICAgICAgeTogdGhpcy5fZ2V0Q29sR3JvdXBZKCBjb2wsIGNvbFNwYW4gKSxcbiAgICB9O1xuICB9O1xuXG4gIHByb3RvLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB2YXIgc3RhbXBTaXplID0gZ2V0U2l6ZSggc3RhbXAgKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fZ2V0RWxlbWVudE9mZnNldCggc3RhbXAgKTtcbiAgICAvLyBnZXQgdGhlIGNvbHVtbnMgdGhhdCB0aGlzIHN0YW1wIGFmZmVjdHNcbiAgICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gICAgdmFyIGZpcnN0WCA9IGlzT3JpZ2luTGVmdCA/IG9mZnNldC5sZWZ0IDogb2Zmc2V0LnJpZ2h0O1xuICAgIHZhciBsYXN0WCA9IGZpcnN0WCArIHN0YW1wU2l6ZS5vdXRlcldpZHRoO1xuICAgIHZhciBmaXJzdENvbCA9IE1hdGguZmxvb3IoIGZpcnN0WCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICBmaXJzdENvbCA9IE1hdGgubWF4KCAwLCBmaXJzdENvbCApO1xuICAgIHZhciBsYXN0Q29sID0gTWF0aC5mbG9vciggbGFzdFggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgLy8gbGFzdENvbCBzaG91bGQgbm90IGdvIG92ZXIgaWYgbXVsdGlwbGUgb2YgY29sdW1uV2lkdGggIzQyNVxuICAgIGxhc3RDb2wgLT0gbGFzdFggJSB0aGlzLmNvbHVtbldpZHRoID8gMCA6IDE7XG4gICAgbGFzdENvbCA9IE1hdGgubWluKCB0aGlzLmNvbHMgLSAxLCBsYXN0Q29sICk7XG4gICAgLy8gc2V0IGNvbFlzIHRvIGJvdHRvbSBvZiB0aGUgc3RhbXBcblxuICAgIHZhciBpc09yaWdpblRvcCA9IHRoaXMuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gICAgdmFyIHN0YW1wTWF4WSA9ICggaXNPcmlnaW5Ub3AgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmJvdHRvbSApICtcbiAgICAgIHN0YW1wU2l6ZS5vdXRlckhlaWdodDtcbiAgICBmb3IgKCB2YXIgaSA9IGZpcnN0Q29sOyBpIDw9IGxhc3RDb2w7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBNYXRoLm1heCggc3RhbXBNYXhZLCB0aGlzLmNvbFlzW2ldICk7XG4gICAgfVxuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhZID0gTWF0aC5tYXguYXBwbHkoIE1hdGgsIHRoaXMuY29sWXMgKTtcbiAgICB2YXIgc2l6ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5tYXhZXG4gICAgfTtcblxuICAgIGlmICggdGhpcy5fZ2V0T3B0aW9uKCdmaXRXaWR0aCcpICkge1xuICAgICAgc2l6ZS53aWR0aCA9IHRoaXMuX2dldENvbnRhaW5lckZpdFdpZHRoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemU7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbnRhaW5lckZpdFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVudXNlZENvbHMgPSAwO1xuICAgIC8vIGNvdW50IHVudXNlZCBjb2x1bW5zXG4gICAgdmFyIGkgPSB0aGlzLmNvbHM7XG4gICAgd2hpbGUgKCAtLWkgKSB7XG4gICAgICBpZiAoIHRoaXMuY29sWXNbaV0gIT09IDAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdW51c2VkQ29scysrO1xuICAgIH1cbiAgICAvLyBmaXQgY29udGFpbmVyIHRvIGNvbHVtbnMgdGhhdCBoYXZlIGJlZW4gdXNlZFxuICAgIHJldHVybiAoIHRoaXMuY29scyAtIHVudXNlZENvbHMgKSAqIHRoaXMuY29sdW1uV2lkdGggLSB0aGlzLmd1dHRlcjtcbiAgfTtcblxuICBwcm90by5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmV2aW91c1dpZHRoID0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB0aGlzLmdldENvbnRhaW5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHByZXZpb3VzV2lkdGggIT0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgfTtcblxuICByZXR1cm4gTWFzb25yeTtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hc29ucnktbGF5b3V0L21hc29ucnkuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogT3V0bGF5ZXIgSXRlbVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5XG4gICAgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5PdXRsYXllciA9IHt9O1xuICAgIHdpbmRvdy5PdXRsYXllci5JdGVtID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBFdkVtaXR0ZXIsIGdldFNpemUgKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tIGhlbHBlcnMgLS0tLS0gLy9cblxuZnVuY3Rpb24gaXNFbXB0eU9iaiggb2JqICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBvYmogKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByb3AgPSBudWxsO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ1NTMyBzdXBwb3J0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxudmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IHR5cGVvZiBkb2NFbGVtU3R5bGUudHJhbnNpdGlvbiA9PSAnc3RyaW5nJyA/XG4gICd0cmFuc2l0aW9uJyA6ICdXZWJraXRUcmFuc2l0aW9uJztcbnZhciB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IHR5cGVvZiBkb2NFbGVtU3R5bGUudHJhbnNmb3JtID09ICdzdHJpbmcnID9cbiAgJ3RyYW5zZm9ybScgOiAnV2Via2l0VHJhbnNmb3JtJztcblxudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9IHtcbiAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcbn1bIHRyYW5zaXRpb25Qcm9wZXJ0eSBdO1xuXG4vLyBjYWNoZSBhbGwgdmVuZG9yIHByb3BlcnRpZXMgdGhhdCBjb3VsZCBoYXZlIHZlbmRvciBwcmVmaXhcbnZhciB2ZW5kb3JQcm9wZXJ0aWVzID0ge1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVByb3BlcnR5LFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uUHJvcGVydHksXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblByb3BlcnR5ICsgJ0R1cmF0aW9uJyxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnUHJvcGVydHknLFxuICB0cmFuc2l0aW9uRGVsYXk6IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdEZWxheSdcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEl0ZW0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gSXRlbSggZWxlbWVudCwgbGF5b3V0ICkge1xuICBpZiAoICFlbGVtZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIC8vIHBhcmVudCBsYXlvdXQgY2xhc3MsIGkuZS4gTWFzb25yeSwgSXNvdG9wZSwgb3IgUGFja2VyeVxuICB0aGlzLmxheW91dCA9IGxheW91dDtcbiAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICB0aGlzLl9jcmVhdGUoKTtcbn1cblxuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbnZhciBwcm90byA9IEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xucHJvdG8uY29uc3RydWN0b3IgPSBJdGVtO1xuXG5wcm90by5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIHRyYW5zaXRpb24gb2JqZWN0c1xuICB0aGlzLl90cmFuc24gPSB7XG4gICAgaW5nUHJvcGVydGllczoge30sXG4gICAgY2xlYW46IHt9LFxuICAgIG9uRW5kOiB7fVxuICB9O1xuXG4gIHRoaXMuY3NzKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICB9KTtcbn07XG5cbi8vIHRyaWdnZXIgc3BlY2lmaWVkIGhhbmRsZXIgZm9yIGV2ZW50IHR5cGVcbnByb3RvLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG59O1xuXG4vKipcbiAqIGFwcGx5IENTUyBzdHlsZXMgdG8gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlXG4gKi9cbnByb3RvLmNzcyA9IGZ1bmN0aW9uKCBzdHlsZSApIHtcbiAgdmFyIGVsZW1TdHlsZSA9IHRoaXMuZWxlbWVudC5zdHlsZTtcblxuICBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgICAvLyB1c2UgdmVuZG9yIHByb3BlcnR5IGlmIGF2YWlsYWJsZVxuICAgIHZhciBzdXBwb3J0ZWRQcm9wID0gdmVuZG9yUHJvcGVydGllc1sgcHJvcCBdIHx8IHByb3A7XG4gICAgZWxlbVN0eWxlWyBzdXBwb3J0ZWRQcm9wIF0gPSBzdHlsZVsgcHJvcCBdO1xuICB9XG59O1xuXG4gLy8gbWVhc3VyZSBwb3NpdGlvbiwgYW5kIHNldHMgaXRcbnByb3RvLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIHRoaXMuZWxlbWVudCApO1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcbiAgdmFyIHhWYWx1ZSA9IHN0eWxlWyBpc09yaWdpbkxlZnQgPyAnbGVmdCcgOiAncmlnaHQnIF07XG4gIHZhciB5VmFsdWUgPSBzdHlsZVsgaXNPcmlnaW5Ub3AgPyAndG9wJyA6ICdib3R0b20nIF07XG4gIHZhciB4ID0gcGFyc2VGbG9hdCggeFZhbHVlICk7XG4gIHZhciB5ID0gcGFyc2VGbG9hdCggeVZhbHVlICk7XG4gIC8vIGNvbnZlcnQgcGVyY2VudCB0byBwaXhlbHNcbiAgdmFyIGxheW91dFNpemUgPSB0aGlzLmxheW91dC5zaXplO1xuICBpZiAoIHhWYWx1ZS5pbmRleE9mKCclJykgIT0gLTEgKSB7XG4gICAgeCA9ICggeCAvIDEwMCApICogbGF5b3V0U2l6ZS53aWR0aDtcbiAgfVxuICBpZiAoIHlWYWx1ZS5pbmRleE9mKCclJykgIT0gLTEgKSB7XG4gICAgeSA9ICggeSAvIDEwMCApICogbGF5b3V0U2l6ZS5oZWlnaHQ7XG4gIH1cbiAgLy8gY2xlYW4gdXAgJ2F1dG8nIG9yIG90aGVyIG5vbi1pbnRlZ2VyIHZhbHVlc1xuICB4ID0gaXNOYU4oIHggKSA/IDAgOiB4O1xuICB5ID0gaXNOYU4oIHkgKSA/IDAgOiB5O1xuICAvLyByZW1vdmUgcGFkZGluZyBmcm9tIG1lYXN1cmVtZW50XG4gIHggLT0gaXNPcmlnaW5MZWZ0ID8gbGF5b3V0U2l6ZS5wYWRkaW5nTGVmdCA6IGxheW91dFNpemUucGFkZGluZ1JpZ2h0O1xuICB5IC09IGlzT3JpZ2luVG9wID8gbGF5b3V0U2l6ZS5wYWRkaW5nVG9wIDogbGF5b3V0U2l6ZS5wYWRkaW5nQm90dG9tO1xuXG4gIHRoaXMucG9zaXRpb24ueCA9IHg7XG4gIHRoaXMucG9zaXRpb24ueSA9IHk7XG59O1xuXG4vLyBzZXQgc2V0dGxlZCBwb3NpdGlvbiwgYXBwbHkgcGFkZGluZ1xucHJvdG8ubGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGxheW91dFNpemUgPSB0aGlzLmxheW91dC5zaXplO1xuICB2YXIgc3R5bGUgPSB7fTtcbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG5cbiAgLy8geFxuICB2YXIgeFBhZGRpbmcgPSBpc09yaWdpbkxlZnQgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gIHZhciB4UHJvcGVydHkgPSBpc09yaWdpbkxlZnQgPyAnbGVmdCcgOiAncmlnaHQnO1xuICB2YXIgeFJlc2V0UHJvcGVydHkgPSBpc09yaWdpbkxlZnQgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54ICsgbGF5b3V0U2l6ZVsgeFBhZGRpbmcgXTtcbiAgLy8gc2V0IGluIHBlcmNlbnRhZ2Ugb3IgcGl4ZWxzXG4gIHN0eWxlWyB4UHJvcGVydHkgXSA9IHRoaXMuZ2V0WFZhbHVlKCB4ICk7XG4gIC8vIHJlc2V0IG90aGVyIHByb3BlcnR5XG4gIHN0eWxlWyB4UmVzZXRQcm9wZXJ0eSBdID0gJyc7XG5cbiAgLy8geVxuICB2YXIgeVBhZGRpbmcgPSBpc09yaWdpblRvcCA/ICdwYWRkaW5nVG9wJyA6ICdwYWRkaW5nQm90dG9tJztcbiAgdmFyIHlQcm9wZXJ0eSA9IGlzT3JpZ2luVG9wID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgdmFyIHlSZXNldFByb3BlcnR5ID0gaXNPcmlnaW5Ub3AgPyAnYm90dG9tJyA6ICd0b3AnO1xuXG4gIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55ICsgbGF5b3V0U2l6ZVsgeVBhZGRpbmcgXTtcbiAgLy8gc2V0IGluIHBlcmNlbnRhZ2Ugb3IgcGl4ZWxzXG4gIHN0eWxlWyB5UHJvcGVydHkgXSA9IHRoaXMuZ2V0WVZhbHVlKCB5ICk7XG4gIC8vIHJlc2V0IG90aGVyIHByb3BlcnR5XG4gIHN0eWxlWyB5UmVzZXRQcm9wZXJ0eSBdID0gJyc7XG5cbiAgdGhpcy5jc3MoIHN0eWxlICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAnbGF5b3V0JywgWyB0aGlzIF0gKTtcbn07XG5cbnByb3RvLmdldFhWYWx1ZSA9IGZ1bmN0aW9uKCB4ICkge1xuICB2YXIgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpO1xuICByZXR1cm4gdGhpcy5sYXlvdXQub3B0aW9ucy5wZXJjZW50UG9zaXRpb24gJiYgIWlzSG9yaXpvbnRhbCA/XG4gICAgKCAoIHggLyB0aGlzLmxheW91dC5zaXplLndpZHRoICkgKiAxMDAgKSArICclJyA6IHggKyAncHgnO1xufTtcblxucHJvdG8uZ2V0WVZhbHVlID0gZnVuY3Rpb24oIHkgKSB7XG4gIHZhciBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdob3Jpem9udGFsJyk7XG4gIHJldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiBpc0hvcml6b250YWwgP1xuICAgICggKCB5IC8gdGhpcy5sYXlvdXQuc2l6ZS5oZWlnaHQgKSAqIDEwMCApICsgJyUnIDogeSArICdweCc7XG59O1xuXG5wcm90by5fdHJhbnNpdGlvblRvID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgLy8gZ2V0IGN1cnJlbnQgeCAmIHkgZnJvbSB0b3AvbGVmdFxuICB2YXIgY3VyWCA9IHRoaXMucG9zaXRpb24ueDtcbiAgdmFyIGN1clkgPSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgdmFyIGRpZE5vdE1vdmUgPSB4ID09IHRoaXMucG9zaXRpb24ueCAmJiB5ID09IHRoaXMucG9zaXRpb24ueTtcblxuICAvLyBzYXZlIGVuZCBwb3NpdGlvblxuICB0aGlzLnNldFBvc2l0aW9uKCB4LCB5ICk7XG5cbiAgLy8gaWYgZGlkIG5vdCBtb3ZlIGFuZCBub3QgdHJhbnNpdGlvbmluZywganVzdCBnbyB0byBsYXlvdXRcbiAgaWYgKCBkaWROb3RNb3ZlICYmICF0aGlzLmlzVHJhbnNpdGlvbmluZyApIHtcbiAgICB0aGlzLmxheW91dFBvc2l0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRyYW5zWCA9IHggLSBjdXJYO1xuICB2YXIgdHJhbnNZID0geSAtIGN1clk7XG4gIHZhciB0cmFuc2l0aW9uU3R5bGUgPSB7fTtcbiAgdHJhbnNpdGlvblN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuZ2V0VHJhbnNsYXRlKCB0cmFuc1gsIHRyYW5zWSApO1xuXG4gIHRoaXMudHJhbnNpdGlvbih7XG4gICAgdG86IHRyYW5zaXRpb25TdHlsZSxcbiAgICBvblRyYW5zaXRpb25FbmQ6IHtcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5sYXlvdXRQb3NpdGlvblxuICAgIH0sXG4gICAgaXNDbGVhbmluZzogdHJ1ZVxuICB9KTtcbn07XG5cbnByb3RvLmdldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICAvLyBmbGlwIGNvb3JpZGluYXRlcyBpZiBvcmlnaW4gb24gcmlnaHQgb3IgYm90dG9tXG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICB4ID0gaXNPcmlnaW5MZWZ0ID8geCA6IC14O1xuICB5ID0gaXNPcmlnaW5Ub3AgPyB5IDogLXk7XG4gIHJldHVybiAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAwKSc7XG59O1xuXG4vLyBub24gdHJhbnNpdGlvbiArIHRyYW5zZm9ybSBzdXBwb3J0XG5wcm90by5nb1RvID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIHRoaXMuc2V0UG9zaXRpb24oIHgsIHkgKTtcbiAgdGhpcy5sYXlvdXRQb3NpdGlvbigpO1xufTtcblxucHJvdG8ubW92ZVRvID0gcHJvdG8uX3RyYW5zaXRpb25UbztcblxucHJvdG8uc2V0UG9zaXRpb24gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5wb3NpdGlvbi54ID0gcGFyc2VGbG9hdCggeCApO1xuICB0aGlzLnBvc2l0aW9uLnkgPSBwYXJzZUZsb2F0KCB5ICk7XG59O1xuXG4vLyAtLS0tLSB0cmFuc2l0aW9uIC0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIC0gQ1NTXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblRyYW5zaXRpb25FbmRcbiAqL1xuXG4vLyBub24gdHJhbnNpdGlvbiwganVzdCB0cmlnZ2VyIGNhbGxiYWNrXG5wcm90by5fbm9uVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCBhcmdzICkge1xuICB0aGlzLmNzcyggYXJncy50byApO1xuICBpZiAoIGFyZ3MuaXNDbGVhbmluZyApIHtcbiAgICB0aGlzLl9yZW1vdmVTdHlsZXMoIGFyZ3MudG8gKTtcbiAgfVxuICBmb3IgKCB2YXIgcHJvcCBpbiBhcmdzLm9uVHJhbnNpdGlvbkVuZCApIHtcbiAgICBhcmdzLm9uVHJhbnNpdGlvbkVuZFsgcHJvcCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBwcm9wZXIgdHJhbnNpdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3MgLSBhcmd1bWVudHNcbiAqICAgQHBhcmFtIHtPYmplY3R9IHRvIC0gc3R5bGUgdG8gdHJhbnNpdGlvbiB0b1xuICogICBAcGFyYW0ge09iamVjdH0gZnJvbSAtIHN0eWxlIHRvIHN0YXJ0IHRyYW5zaXRpb24gZnJvbVxuICogICBAcGFyYW0ge0Jvb2xlYW59IGlzQ2xlYW5pbmcgLSByZW1vdmVzIHRyYW5zaXRpb24gc3R5bGVzIGFmdGVyIHRyYW5zaXRpb25cbiAqICAgQHBhcmFtIHtGdW5jdGlvbn0gb25UcmFuc2l0aW9uRW5kIC0gY2FsbGJhY2tcbiAqL1xucHJvdG8udHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCBhcmdzICkge1xuICAvLyByZWRpcmVjdCB0byBub25UcmFuc2l0aW9uIGlmIG5vIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgaWYgKCAhcGFyc2VGbG9hdCggdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gKSApIHtcbiAgICB0aGlzLl9ub25UcmFuc2l0aW9uKCBhcmdzICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF90cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNuO1xuICAvLyBrZWVwIHRyYWNrIG9mIG9uVHJhbnNpdGlvbkVuZCBjYWxsYmFjayBieSBjc3MgcHJvcGVydHlcbiAgZm9yICggdmFyIHByb3AgaW4gYXJncy5vblRyYW5zaXRpb25FbmQgKSB7XG4gICAgX3RyYW5zaXRpb24ub25FbmRbIHByb3AgXSA9IGFyZ3Mub25UcmFuc2l0aW9uRW5kWyBwcm9wIF07XG4gIH1cbiAgLy8ga2VlcCB0cmFjayBvZiBwcm9wZXJ0aWVzIHRoYXQgYXJlIHRyYW5zaXRpb25pbmdcbiAgZm9yICggcHJvcCBpbiBhcmdzLnRvICkge1xuICAgIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXNbIHByb3AgXSA9IHRydWU7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBwcm9wZXJ0aWVzIHRvIGNsZWFuIHVwIHdoZW4gdHJhbnNpdGlvbiBpcyBkb25lXG4gICAgaWYgKCBhcmdzLmlzQ2xlYW5pbmcgKSB7XG4gICAgICBfdHJhbnNpdGlvbi5jbGVhblsgcHJvcCBdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZnJvbSBzdHlsZXNcbiAgaWYgKCBhcmdzLmZyb20gKSB7XG4gICAgdGhpcy5jc3MoIGFyZ3MuZnJvbSApO1xuICAgIC8vIGZvcmNlIHJlZHJhdy4gaHR0cDovL2Jsb2cuYWxleG1hY2Nhdy5jb20vY3NzLXRyYW5zaXRpb25zXG4gICAgdmFyIGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIGhhY2sgZm9yIEpTSGludCB0byBodXNoIGFib3V0IHVudXNlZCB2YXJcbiAgICBoID0gbnVsbDtcbiAgfVxuICAvLyBlbmFibGUgdHJhbnNpdGlvblxuICB0aGlzLmVuYWJsZVRyYW5zaXRpb24oIGFyZ3MudG8gKTtcbiAgLy8gc2V0IHN0eWxlcyB0aGF0IGFyZSB0cmFuc2l0aW9uaW5nXG4gIHRoaXMuY3NzKCBhcmdzLnRvICk7XG5cbiAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuXG59O1xuXG4vLyBkYXNoIGJlZm9yZSBhbGwgY2FwIGxldHRlcnMsIGluY2x1ZGluZyBmaXJzdCBmb3Jcbi8vIFdlYmtpdFRyYW5zZm9ybSA9PiAtd2Via2l0LXRyYW5zZm9ybVxuZnVuY3Rpb24gdG9EYXNoZWRBbGwoIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKFtBLVpdKS9nLCBmdW5jdGlvbiggJDEgKSB7XG4gICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG52YXIgdHJhbnNpdGlvblByb3BzID0gJ29wYWNpdHksJyArIHRvRGFzaGVkQWxsKCB0cmFuc2Zvcm1Qcm9wZXJ0eSApO1xuXG5wcm90by5lbmFibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oLyogc3R5bGUgKi8pIHtcbiAgLy8gSEFDSyBjaGFuZ2luZyB0cmFuc2l0aW9uUHJvcGVydHkgZHVyaW5nIGEgdHJhbnNpdGlvblxuICAvLyB3aWxsIGNhdXNlIHRyYW5zaXRpb24gdG8ganVtcFxuICBpZiAoIHRoaXMuaXNUcmFuc2l0aW9uaW5nICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIG1ha2UgYHRyYW5zaXRpb246IGZvbywgYmFyLCBiYXpgIGZyb20gc3R5bGUgb2JqZWN0XG4gIC8vIEhBQ0sgdW4tY29tbWVudCB0aGlzIHdoZW4gZW5hYmxlVHJhbnNpdGlvbiBjYW4gd29ya1xuICAvLyB3aGlsZSBhIHRyYW5zaXRpb24gaXMgaGFwcGVuaW5nXG4gIC8vIHZhciB0cmFuc2l0aW9uVmFsdWVzID0gW107XG4gIC8vIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAvLyAgIC8vIGRhc2gtaWZ5IGNhbWVsQ2FzZWQgcHJvcGVydGllcyBsaWtlIFdlYmtpdFRyYW5zaXRpb25cbiAgLy8gICBwcm9wID0gdmVuZG9yUHJvcGVydGllc1sgcHJvcCBdIHx8IHByb3A7XG4gIC8vICAgdHJhbnNpdGlvblZhbHVlcy5wdXNoKCB0b0Rhc2hlZEFsbCggcHJvcCApICk7XG4gIC8vIH1cbiAgLy8gbXVuZ2UgbnVtYmVyIHRvIG1pbGxpc2Vjb25kLCB0byBtYXRjaCBzdGFnZ2VyXG4gIHZhciBkdXJhdGlvbiA9IHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO1xuICBkdXJhdGlvbiA9IHR5cGVvZiBkdXJhdGlvbiA9PSAnbnVtYmVyJyA/IGR1cmF0aW9uICsgJ21zJyA6IGR1cmF0aW9uO1xuICAvLyBlbmFibGUgdHJhbnNpdGlvbiBzdHlsZXNcbiAgdGhpcy5jc3Moe1xuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJhbnNpdGlvblByb3BzLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogZHVyYXRpb24sXG4gICAgdHJhbnNpdGlvbkRlbGF5OiB0aGlzLnN0YWdnZXJEZWxheSB8fCAwXG4gIH0pO1xuICAvLyBsaXN0ZW4gZm9yIHRyYW5zaXRpb24gZW5kIGV2ZW50XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMsIGZhbHNlICk7XG59O1xuXG4vLyAtLS0tLSBldmVudHMgLS0tLS0gLy9cblxucHJvdG8ub253ZWJraXRUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLm9udHJhbnNpdGlvbmVuZCggZXZlbnQgKTtcbn07XG5cbnByb3RvLm9ub3RyYW5zaXRpb25lbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMub250cmFuc2l0aW9uZW5kKCBldmVudCApO1xufTtcblxuLy8gcHJvcGVydGllcyB0aGF0IEkgbXVuZ2UgdG8gbWFrZSBteSBsaWZlIGVhc2llclxudmFyIGRhc2hlZFZlbmRvclByb3BlcnRpZXMgPSB7XG4gICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2Zvcm0nXG59O1xuXG5wcm90by5vbnRyYW5zaXRpb25lbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIGRpc3JlZ2FyZCBidWJibGVkIGV2ZW50cyBmcm9tIGNoaWxkcmVuXG4gIGlmICggZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBfdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zbjtcbiAgLy8gZ2V0IHByb3BlcnR5IG5hbWUgb2YgdHJhbnNpdGlvbmVkIHByb3BlcnR5LCBjb252ZXJ0IHRvIHByZWZpeC1mcmVlXG4gIHZhciBwcm9wZXJ0eU5hbWUgPSBkYXNoZWRWZW5kb3JQcm9wZXJ0aWVzWyBldmVudC5wcm9wZXJ0eU5hbWUgXSB8fCBldmVudC5wcm9wZXJ0eU5hbWU7XG5cbiAgLy8gcmVtb3ZlIHByb3BlcnR5IHRoYXQgaGFzIGNvbXBsZXRlZCB0cmFuc2l0aW9uaW5nXG4gIGRlbGV0ZSBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzWyBwcm9wZXJ0eU5hbWUgXTtcbiAgLy8gY2hlY2sgaWYgYW55IHByb3BlcnRpZXMgYXJlIHN0aWxsIHRyYW5zaXRpb25pbmdcbiAgaWYgKCBpc0VtcHR5T2JqKCBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzICkgKSB7XG4gICAgLy8gYWxsIHByb3BlcnRpZXMgaGF2ZSBjb21wbGV0ZWQgdHJhbnNpdGlvbmluZ1xuICAgIHRoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTtcbiAgfVxuICAvLyBjbGVhbiBzdHlsZVxuICBpZiAoIHByb3BlcnR5TmFtZSBpbiBfdHJhbnNpdGlvbi5jbGVhbiApIHtcbiAgICAvLyBjbGVhbiB1cCBzdHlsZVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVsgZXZlbnQucHJvcGVydHlOYW1lIF0gPSAnJztcbiAgICBkZWxldGUgX3RyYW5zaXRpb24uY2xlYW5bIHByb3BlcnR5TmFtZSBdO1xuICB9XG4gIC8vIHRyaWdnZXIgb25UcmFuc2l0aW9uRW5kIGNhbGxiYWNrXG4gIGlmICggcHJvcGVydHlOYW1lIGluIF90cmFuc2l0aW9uLm9uRW5kICkge1xuICAgIHZhciBvblRyYW5zaXRpb25FbmQgPSBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcGVydHlOYW1lIF07XG4gICAgb25UcmFuc2l0aW9uRW5kLmNhbGwoIHRoaXMgKTtcbiAgICBkZWxldGUgX3RyYW5zaXRpb24ub25FbmRbIHByb3BlcnR5TmFtZSBdO1xuICB9XG5cbiAgdGhpcy5lbWl0RXZlbnQoICd0cmFuc2l0aW9uRW5kJywgWyB0aGlzIF0gKTtcbn07XG5cbnByb3RvLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVtb3ZlVHJhbnNpdGlvblN0eWxlcygpO1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHJhbnNpdGlvbkVuZEV2ZW50LCB0aGlzLCBmYWxzZSApO1xuICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiByZW1vdmVzIHN0eWxlIHByb3BlcnR5IGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlXG4qKi9cbnByb3RvLl9yZW1vdmVTdHlsZXMgPSBmdW5jdGlvbiggc3R5bGUgKSB7XG4gIC8vIGNsZWFuIHVwIHRyYW5zaXRpb24gc3R5bGVzXG4gIHZhciBjbGVhblN0eWxlID0ge307XG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIGNsZWFuU3R5bGVbIHByb3AgXSA9ICcnO1xuICB9XG4gIHRoaXMuY3NzKCBjbGVhblN0eWxlICk7XG59O1xuXG52YXIgY2xlYW5UcmFuc2l0aW9uU3R5bGUgPSB7XG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogJycsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogJycsXG4gIHRyYW5zaXRpb25EZWxheTogJydcbn07XG5cbnByb3RvLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVtb3ZlIHRyYW5zaXRpb25cbiAgdGhpcy5jc3MoIGNsZWFuVHJhbnNpdGlvblN0eWxlICk7XG59O1xuXG4vLyAtLS0tLSBzdGFnZ2VyIC0tLS0tIC8vXG5cbnByb3RvLnN0YWdnZXIgPSBmdW5jdGlvbiggZGVsYXkgKSB7XG4gIGRlbGF5ID0gaXNOYU4oIGRlbGF5ICkgPyAwIDogZGVsYXk7XG4gIHRoaXMuc3RhZ2dlckRlbGF5ID0gZGVsYXkgKyAnbXMnO1xufTtcblxuLy8gLS0tLS0gc2hvdy9oaWRlL3JlbW92ZSAtLS0tLSAvL1xuXG4vLyByZW1vdmUgZWxlbWVudCBmcm9tIERPTVxucHJvdG8ucmVtb3ZlRWxlbSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncmVtb3ZlJywgWyB0aGlzIF0gKTtcbn07XG5cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBqdXN0IHJlbW92ZSBlbGVtZW50IGlmIG5vIHRyYW5zaXRpb24gc3VwcG9ydCBvciBubyB0cmFuc2l0aW9uXG4gIGlmICggIXRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAhcGFyc2VGbG9hdCggdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gKSApIHtcbiAgICB0aGlzLnJlbW92ZUVsZW0oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBzdGFydCB0cmFuc2l0aW9uXG4gIHRoaXMub25jZSggJ3RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUVsZW0oKTtcbiAgfSk7XG4gIHRoaXMuaGlkZSgpO1xufTtcblxucHJvdG8ucmV2ZWFsID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLmlzSGlkZGVuO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuXG4gIHZhciBvcHRpb25zID0gdGhpcy5sYXlvdXQub3B0aW9ucztcblxuICB2YXIgb25UcmFuc2l0aW9uRW5kID0ge307XG4gIHZhciB0cmFuc2l0aW9uRW5kUHJvcGVydHkgPSB0aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoJ3Zpc2libGVTdHlsZScpO1xuICBvblRyYW5zaXRpb25FbmRbIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSBdID0gdGhpcy5vblJldmVhbFRyYW5zaXRpb25FbmQ7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICBmcm9tOiBvcHRpb25zLmhpZGRlblN0eWxlLFxuICAgIHRvOiBvcHRpb25zLnZpc2libGVTdHlsZSxcbiAgICBpc0NsZWFuaW5nOiB0cnVlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDogb25UcmFuc2l0aW9uRW5kXG4gIH0pO1xufTtcblxucHJvdG8ub25SZXZlYWxUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGlmIHN0aWxsIHZpc2libGVcbiAgLy8gZHVyaW5nIHRyYW5zaXRpb24sIGl0ZW0gbWF5IGhhdmUgYmVlbiBoaWRkZW5cbiAgaWYgKCAhdGhpcy5pc0hpZGRlbiApIHtcbiAgICB0aGlzLmVtaXRFdmVudCgncmV2ZWFsJyk7XG4gIH1cbn07XG5cbi8qKlxuICogZ2V0IHN0eWxlIHByb3BlcnR5IHVzZSBmb3IgaGlkZS9yZXZlYWwgdHJhbnNpdGlvbiBlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVByb3BlcnR5IC0gaGlkZGVuU3R5bGUvdmlzaWJsZVN0eWxlXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5wcm90by5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gZnVuY3Rpb24oIHN0eWxlUHJvcGVydHkgKSB7XG4gIHZhciBvcHRpb25TdHlsZSA9IHRoaXMubGF5b3V0Lm9wdGlvbnNbIHN0eWxlUHJvcGVydHkgXTtcbiAgLy8gdXNlIG9wYWNpdHlcbiAgaWYgKCBvcHRpb25TdHlsZS5vcGFjaXR5ICkge1xuICAgIHJldHVybiAnb3BhY2l0eSc7XG4gIH1cbiAgLy8gZ2V0IGZpcnN0IHByb3BlcnR5XG4gIGZvciAoIHZhciBwcm9wIGluIG9wdGlvblN0eWxlICkge1xuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG5wcm90by5oaWRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIHNldCBmbGFnXG4gIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuXG4gIHZhciBvcHRpb25zID0gdGhpcy5sYXlvdXQub3B0aW9ucztcblxuICB2YXIgb25UcmFuc2l0aW9uRW5kID0ge307XG4gIHZhciB0cmFuc2l0aW9uRW5kUHJvcGVydHkgPSB0aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoJ2hpZGRlblN0eWxlJyk7XG4gIG9uVHJhbnNpdGlvbkVuZFsgdHJhbnNpdGlvbkVuZFByb3BlcnR5IF0gPSB0aGlzLm9uSGlkZVRyYW5zaXRpb25FbmQ7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICBmcm9tOiBvcHRpb25zLnZpc2libGVTdHlsZSxcbiAgICB0bzogb3B0aW9ucy5oaWRkZW5TdHlsZSxcbiAgICAvLyBrZWVwIGhpZGRlbiBzdHVmZiBoaWRkZW5cbiAgICBpc0NsZWFuaW5nOiB0cnVlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDogb25UcmFuc2l0aW9uRW5kXG4gIH0pO1xufTtcblxucHJvdG8ub25IaWRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCkge1xuICAvLyBjaGVjayBpZiBzdGlsbCBoaWRkZW5cbiAgLy8gZHVyaW5nIHRyYW5zaXRpb24sIGl0ZW0gbWF5IGhhdmUgYmVlbiB1bi1oaWRkZW5cbiAgaWYgKCB0aGlzLmlzSGlkZGVuICkge1xuICAgIHRoaXMuY3NzKHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICAgIHRoaXMuZW1pdEV2ZW50KCdoaWRlJyk7XG4gIH1cbn07XG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnJyxcbiAgICBsZWZ0OiAnJyxcbiAgICByaWdodDogJycsXG4gICAgdG9wOiAnJyxcbiAgICBib3R0b206ICcnLFxuICAgIHRyYW5zaXRpb246ICcnLFxuICAgIHRyYW5zZm9ybTogJydcbiAgfSk7XG59O1xuXG5yZXR1cm4gSXRlbTtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L291dGxheWVyL2l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogT3V0bGF5ZXIgdjIuMS4xXG4gKiB0aGUgYnJhaW5zIGFuZCBndXRzIG9mIGEgbGF5b3V0IGxpYnJhcnlcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgICAnLi9pdGVtJ1xuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uKCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9pdGVtJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk91dGxheWVyID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIuSXRlbVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIEl0ZW0gKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tIHZhcnMgLS0tLS0gLy9cblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbnZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xudmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBPdXRsYXllciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllcnNcbnZhciBHVUlEID0gMDtcbi8vIGludGVybmFsIHN0b3JlIG9mIGFsbCBPdXRsYXllciBpbnRhbmNlc1xudmFyIGluc3RhbmNlcyA9IHt9O1xuXG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50LCBTdHJpbmd9IGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gT3V0bGF5ZXIoIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIHZhciBxdWVyeUVsZW1lbnQgPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcbiAgaWYgKCAhcXVlcnlFbGVtZW50ICkge1xuICAgIGlmICggY29uc29sZSApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoICdCYWQgZWxlbWVudCBmb3IgJyArIHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlICtcbiAgICAgICAgJzogJyArICggcXVlcnlFbGVtZW50IHx8IGVsZW1lbnQgKSApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbGVtZW50ID0gcXVlcnlFbGVtZW50O1xuICAvLyBhZGQgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICB9XG5cbiAgLy8gb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzICk7XG4gIHRoaXMub3B0aW9uKCBvcHRpb25zICk7XG5cbiAgLy8gYWRkIGlkIGZvciBPdXRsYXllci5nZXRGcm9tRWxlbWVudFxuICB2YXIgaWQgPSArK0dVSUQ7XG4gIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQgPSBpZDsgLy8gZXhwYW5kb1xuICBpbnN0YW5jZXNbIGlkIF0gPSB0aGlzOyAvLyBhc3NvY2lhdGUgdmlhIGlkXG5cbiAgLy8ga2ljayBpdCBvZmZcbiAgdGhpcy5fY3JlYXRlKCk7XG5cbiAgdmFyIGlzSW5pdExheW91dCA9IHRoaXMuX2dldE9wdGlvbignaW5pdExheW91dCcpO1xuICBpZiAoIGlzSW5pdExheW91dCApIHtcbiAgICB0aGlzLmxheW91dCgpO1xuICB9XG59XG5cbi8vIHNldHRpbmdzIGFyZSBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbk91dGxheWVyLm5hbWVzcGFjZSA9ICdvdXRsYXllcic7XG5PdXRsYXllci5JdGVtID0gSXRlbTtcblxuLy8gZGVmYXVsdCBvcHRpb25zXG5PdXRsYXllci5kZWZhdWx0cyA9IHtcbiAgY29udGFpbmVyU3R5bGU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBpbml0TGF5b3V0OiB0cnVlLFxuICBvcmlnaW5MZWZ0OiB0cnVlLFxuICBvcmlnaW5Ub3A6IHRydWUsXG4gIHJlc2l6ZTogdHJ1ZSxcbiAgcmVzaXplQ29udGFpbmVyOiB0cnVlLFxuICAvLyBpdGVtIG9wdGlvbnNcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC40cycsXG4gIGhpZGRlblN0eWxlOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjAwMSknXG4gIH0sXG4gIHZpc2libGVTdHlsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH1cbn07XG5cbnZhciBwcm90byA9IE91dGxheWVyLnByb3RvdHlwZTtcbi8vIGluaGVyaXQgRXZFbWl0dGVyXG51dGlscy5leHRlbmQoIHByb3RvLCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8qKlxuICogc2V0IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKi9cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICB1dGlscy5leHRlbmQoIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxuLyoqXG4gKiBnZXQgYmFja3dhcmRzIGNvbXBhdGlibGUgb3B0aW9uIHZhbHVlLCBjaGVjayBvbGQgbmFtZVxuICovXG5wcm90by5fZ2V0T3B0aW9uID0gZnVuY3Rpb24oIG9wdGlvbiApIHtcbiAgdmFyIG9sZE9wdGlvbiA9IHRoaXMuY29uc3RydWN0b3IuY29tcGF0T3B0aW9uc1sgb3B0aW9uIF07XG4gIHJldHVybiBvbGRPcHRpb24gJiYgdGhpcy5vcHRpb25zWyBvbGRPcHRpb24gXSAhPT0gdW5kZWZpbmVkID9cbiAgICB0aGlzLm9wdGlvbnNbIG9sZE9wdGlvbiBdIDogdGhpcy5vcHRpb25zWyBvcHRpb24gXTtcbn07XG5cbk91dGxheWVyLmNvbXBhdE9wdGlvbnMgPSB7XG4gIC8vIGN1cnJlbnROYW1lOiBvbGROYW1lXG4gIGluaXRMYXlvdXQ6ICdpc0luaXRMYXlvdXQnLFxuICBob3Jpem9udGFsOiAnaXNIb3Jpem9udGFsJyxcbiAgbGF5b3V0SW5zdGFudDogJ2lzTGF5b3V0SW5zdGFudCcsXG4gIG9yaWdpbkxlZnQ6ICdpc09yaWdpbkxlZnQnLFxuICBvcmlnaW5Ub3A6ICdpc09yaWdpblRvcCcsXG4gIHJlc2l6ZTogJ2lzUmVzaXplQm91bmQnLFxuICByZXNpemVDb250YWluZXI6ICdpc1Jlc2l6aW5nQ29udGFpbmVyJ1xufTtcblxucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBnZXQgaXRlbXMgZnJvbSBjaGlsZHJlblxuICB0aGlzLnJlbG9hZEl0ZW1zKCk7XG4gIC8vIGVsZW1lbnRzIHRoYXQgYWZmZWN0IGxheW91dCwgYnV0IGFyZSBub3QgbGFpZCBvdXRcbiAgdGhpcy5zdGFtcHMgPSBbXTtcbiAgdGhpcy5zdGFtcCggdGhpcy5vcHRpb25zLnN0YW1wICk7XG4gIC8vIHNldCBjb250YWluZXIgc3R5bGVcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLmVsZW1lbnQuc3R5bGUsIHRoaXMub3B0aW9ucy5jb250YWluZXJTdHlsZSApO1xuXG4gIC8vIGJpbmQgcmVzaXplIG1ldGhvZFxuICB2YXIgY2FuQmluZFJlc2l6ZSA9IHRoaXMuX2dldE9wdGlvbigncmVzaXplJyk7XG4gIGlmICggY2FuQmluZFJlc2l6ZSApIHtcbiAgICB0aGlzLmJpbmRSZXNpemUoKTtcbiAgfVxufTtcblxuLy8gZ29lcyB0aHJvdWdoIGFsbCBjaGlsZHJlbiBhZ2FpbiBhbmQgZ2V0cyBicmlja3MgaW4gcHJvcGVyIG9yZGVyXG5wcm90by5yZWxvYWRJdGVtcyA9IGZ1bmN0aW9uKCkge1xuICAvLyBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAgdGhpcy5pdGVtcyA9IHRoaXMuX2l0ZW1pemUoIHRoaXMuZWxlbWVudC5jaGlsZHJlbiApO1xufTtcblxuXG4vKipcbiAqIHR1cm4gZWxlbWVudHMgaW50byBPdXRsYXllci5JdGVtcyB0byBiZSB1c2VkIGluIGxheW91dFxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBjb2xsZWN0aW9uIG9mIG5ldyBPdXRsYXllciBJdGVtc1xuICovXG5wcm90by5faXRlbWl6ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcblxuICB2YXIgaXRlbUVsZW1zID0gdGhpcy5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyggZWxlbXMgKTtcbiAgdmFyIEl0ZW0gPSB0aGlzLmNvbnN0cnVjdG9yLkl0ZW07XG5cbiAgLy8gY3JlYXRlIG5ldyBPdXRsYXllciBJdGVtcyBmb3IgY29sbGVjdGlvblxuICB2YXIgaXRlbXMgPSBbXTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IGl0ZW1FbGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgZWxlbSA9IGl0ZW1FbGVtc1tpXTtcbiAgICB2YXIgaXRlbSA9IG5ldyBJdGVtKCBlbGVtLCB0aGlzICk7XG4gICAgaXRlbXMucHVzaCggaXRlbSApO1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBlbGVtZW50cyB0byBiZSB1c2VkIGluIGxheW91dFxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBpdGVtIGVsZW1lbnRzXG4gKi9cbnByb3RvLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICByZXR1cm4gdXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzKCBlbGVtcywgdGhpcy5vcHRpb25zLml0ZW1TZWxlY3RvciApO1xufTtcblxuLyoqXG4gKiBnZXR0ZXIgbWV0aG9kIGZvciBnZXR0aW5nIGl0ZW0gZWxlbWVudHNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXMgLSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqL1xucHJvdG8uZ2V0SXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLm1hcCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgcmV0dXJuIGl0ZW0uZWxlbWVudDtcbiAgfSk7XG59O1xuXG4vLyAtLS0tLSBpbml0ICYgbGF5b3V0IC0tLS0tIC8vXG5cbi8qKlxuICogbGF5cyBvdXQgYWxsIGl0ZW1zXG4gKi9cbnByb3RvLmxheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZXNldExheW91dCgpO1xuICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcblxuICAvLyBkb24ndCBhbmltYXRlIGZpcnN0IGxheW91dFxuICB2YXIgbGF5b3V0SW5zdGFudCA9IHRoaXMuX2dldE9wdGlvbignbGF5b3V0SW5zdGFudCcpO1xuICB2YXIgaXNJbnN0YW50ID0gbGF5b3V0SW5zdGFudCAhPT0gdW5kZWZpbmVkID9cbiAgICBsYXlvdXRJbnN0YW50IDogIXRoaXMuX2lzTGF5b3V0SW5pdGVkO1xuICB0aGlzLmxheW91dEl0ZW1zKCB0aGlzLml0ZW1zLCBpc0luc3RhbnQgKTtcblxuICAvLyBmbGFnIGZvciBpbml0YWxpemVkXG4gIHRoaXMuX2lzTGF5b3V0SW5pdGVkID0gdHJ1ZTtcbn07XG5cbi8vIF9pbml0IGlzIGFsaWFzIGZvciBsYXlvdXRcbnByb3RvLl9pbml0ID0gcHJvdG8ubGF5b3V0O1xuXG4vKipcbiAqIGxvZ2ljIGJlZm9yZSBhbnkgbmV3IGxheW91dFxuICovXG5wcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nZXRTaXplKCk7XG59O1xuXG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG59O1xuXG4vKipcbiAqIGdldCBtZWFzdXJlbWVudCBmcm9tIG9wdGlvbiwgZm9yIGNvbHVtbldpZHRoLCByb3dIZWlnaHQsIGd1dHRlclxuICogaWYgb3B0aW9uIGlzIFN0cmluZyAtPiBnZXQgZWxlbWVudCBmcm9tIHNlbGVjdG9yIHN0cmluZywgJiBnZXQgc2l6ZSBvZiBlbGVtZW50XG4gKiBpZiBvcHRpb24gaXMgRWxlbWVudCAtPiBnZXQgc2l6ZSBvZiBlbGVtZW50XG4gKiBlbHNlIHVzZSBvcHRpb24gYXMgYSBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVhc3VyZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gd2lkdGggb3IgaGVpZ2h0XG4gKiBAcHJpdmF0ZVxuICovXG5wcm90by5fZ2V0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbiggbWVhc3VyZW1lbnQsIHNpemUgKSB7XG4gIHZhciBvcHRpb24gPSB0aGlzLm9wdGlvbnNbIG1lYXN1cmVtZW50IF07XG4gIHZhciBlbGVtO1xuICBpZiAoICFvcHRpb24gKSB7XG4gICAgLy8gZGVmYXVsdCB0byAwXG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG9wdGlvbiBhcyBhbiBlbGVtZW50XG4gICAgaWYgKCB0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnICkge1xuICAgICAgZWxlbSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCBvcHRpb24gKTtcbiAgICB9IGVsc2UgaWYgKCBvcHRpb24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApIHtcbiAgICAgIGVsZW0gPSBvcHRpb247XG4gICAgfVxuICAgIC8vIHVzZSBzaXplIG9mIGVsZW1lbnQsIGlmIGVsZW1lbnRcbiAgICB0aGlzWyBtZWFzdXJlbWVudCBdID0gZWxlbSA/IGdldFNpemUoIGVsZW0gKVsgc2l6ZSBdIDogb3B0aW9uO1xuICB9XG59O1xuXG4vKipcbiAqIGxheW91dCBhIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICogQGFwaSBwdWJsaWNcbiAqL1xucHJvdG8ubGF5b3V0SXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGlzSW5zdGFudCApIHtcbiAgaXRlbXMgPSB0aGlzLl9nZXRJdGVtc0ZvckxheW91dCggaXRlbXMgKTtcblxuICB0aGlzLl9sYXlvdXRJdGVtcyggaXRlbXMsIGlzSW5zdGFudCApO1xuXG4gIHRoaXMuX3Bvc3RMYXlvdXQoKTtcbn07XG5cbi8qKlxuICogZ2V0IHRoZSBpdGVtcyB0byBiZSBsYWlkIG91dFxuICogeW91IG1heSB3YW50IHRvIHNraXAgb3ZlciBzb21lIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtc1xuICovXG5wcm90by5fZ2V0SXRlbXNGb3JMYXlvdXQgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHJldHVybiBpdGVtcy5maWx0ZXIoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHJldHVybiAhaXRlbS5pc0lnbm9yZWQ7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBsYXlvdXQgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudFxuICovXG5wcm90by5fbGF5b3V0SXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGlzSW5zdGFudCApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ2xheW91dCcsIGl0ZW1zICk7XG5cbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICAvLyBubyBpdGVtcywgZW1pdCBldmVudCB3aXRoIGVtcHR5IGFycmF5XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHF1ZXVlID0gW107XG5cbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgLy8gZ2V0IHgveSBvYmplY3QgZnJvbSBtZXRob2RcbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24oIGl0ZW0gKTtcbiAgICAvLyBlbnF1ZXVlXG4gICAgcG9zaXRpb24uaXRlbSA9IGl0ZW07XG4gICAgcG9zaXRpb24uaXNJbnN0YW50ID0gaXNJbnN0YW50IHx8IGl0ZW0uaXNMYXlvdXRJbnN0YW50O1xuICAgIHF1ZXVlLnB1c2goIHBvc2l0aW9uICk7XG4gIH0sIHRoaXMgKTtcblxuICB0aGlzLl9wcm9jZXNzTGF5b3V0UXVldWUoIHF1ZXVlICk7XG59O1xuXG4vKipcbiAqIGdldCBpdGVtIGxheW91dCBwb3NpdGlvblxuICogQHBhcmFtIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB4IGFuZCB5IHBvc2l0aW9uXG4gKi9cbnByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggLyogaXRlbSAqLyApIHtcbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn07XG5cbi8qKlxuICogaXRlcmF0ZSBvdmVyIGFycmF5IGFuZCBwb3NpdGlvbiBlYWNoIGl0ZW1cbiAqIFJlYXNvbiBiZWluZyAtIHNlcGFyYXRpbmcgdGhpcyBsb2dpYyBwcmV2ZW50cyAnbGF5b3V0IGludmFsaWRhdGlvbidcbiAqIHRoeCBAcGF1bF9pcmlzaFxuICogQHBhcmFtIHtBcnJheX0gcXVldWVcbiAqL1xucHJvdG8uX3Byb2Nlc3NMYXlvdXRRdWV1ZSA9IGZ1bmN0aW9uKCBxdWV1ZSApIHtcbiAgdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIHF1ZXVlLmZvckVhY2goIGZ1bmN0aW9uKCBvYmosIGkgKSB7XG4gICAgdGhpcy5fcG9zaXRpb25JdGVtKCBvYmouaXRlbSwgb2JqLngsIG9iai55LCBvYmouaXNJbnN0YW50LCBpICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8vIHNldCBzdGFnZ2VyIGZyb20gb3B0aW9uIGluIG1pbGxpc2Vjb25kcyBudW1iZXJcbnByb3RvLnVwZGF0ZVN0YWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YWdnZXIgPSB0aGlzLm9wdGlvbnMuc3RhZ2dlcjtcbiAgaWYgKCBzdGFnZ2VyID09PSBudWxsIHx8IHN0YWdnZXIgPT09IHVuZGVmaW5lZCApIHtcbiAgICB0aGlzLnN0YWdnZXIgPSAwO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnN0YWdnZXIgPSBnZXRNaWxsaXNlY29uZHMoIHN0YWdnZXIgKTtcbiAgcmV0dXJuIHRoaXMuc3RhZ2dlcjtcbn07XG5cbi8qKlxuICogU2V0cyBwb3NpdGlvbiBvZiBpdGVtIGluIERPTVxuICogQHBhcmFtIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKiBAcGFyYW0ge051bWJlcn0geCAtIGhvcml6b250YWwgcG9zaXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB5IC0gdmVydGljYWwgcG9zaXRpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNJbnN0YW50IC0gZGlzYWJsZXMgdHJhbnNpdGlvbnNcbiAqL1xucHJvdG8uX3Bvc2l0aW9uSXRlbSA9IGZ1bmN0aW9uKCBpdGVtLCB4LCB5LCBpc0luc3RhbnQsIGkgKSB7XG4gIGlmICggaXNJbnN0YW50ICkge1xuICAgIC8vIGlmIG5vdCB0cmFuc2l0aW9uLCBqdXN0IHNldCBDU1NcbiAgICBpdGVtLmdvVG8oIHgsIHkgKTtcbiAgfSBlbHNlIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiB0aGlzLnN0YWdnZXIgKTtcbiAgICBpdGVtLm1vdmVUbyggeCwgeSApO1xuICB9XG59O1xuXG4vKipcbiAqIEFueSBsb2dpYyB5b3Ugd2FudCB0byBkbyBhZnRlciBlYWNoIGxheW91dCxcbiAqIGkuZS4gc2l6ZSB0aGUgY29udGFpbmVyXG4gKi9cbnByb3RvLl9wb3N0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzaXplQ29udGFpbmVyKCk7XG59O1xuXG5wcm90by5yZXNpemVDb250YWluZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGlzUmVzaXppbmdDb250YWluZXIgPSB0aGlzLl9nZXRPcHRpb24oJ3Jlc2l6ZUNvbnRhaW5lcicpO1xuICBpZiAoICFpc1Jlc2l6aW5nQ29udGFpbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc2l6ZSA9IHRoaXMuX2dldENvbnRhaW5lclNpemUoKTtcbiAgaWYgKCBzaXplICkge1xuICAgIHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoIHNpemUud2lkdGgsIHRydWUgKTtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLmhlaWdodCwgZmFsc2UgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHdpZHRoIG9yIGhlaWdodCBvZiBjb250YWluZXIgaWYgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IHNpemVcbiAqICAgQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAqL1xucHJvdG8uX2dldENvbnRhaW5lclNpemUgPSBub29wO1xuXG4vKipcbiAqIEBwYXJhbSB7TnVtYmVyfSBtZWFzdXJlIC0gc2l6ZSBvZiB3aWR0aCBvciBoZWlnaHRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNXaWR0aFxuICovXG5wcm90by5fc2V0Q29udGFpbmVyTWVhc3VyZSA9IGZ1bmN0aW9uKCBtZWFzdXJlLCBpc1dpZHRoICkge1xuICBpZiAoIG1lYXN1cmUgPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZWxlbVNpemUgPSB0aGlzLnNpemU7XG4gIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgd2lkdGggaWYgYm9yZGVyIGJveFxuICBpZiAoIGVsZW1TaXplLmlzQm9yZGVyQm94ICkge1xuICAgIG1lYXN1cmUgKz0gaXNXaWR0aCA/IGVsZW1TaXplLnBhZGRpbmdMZWZ0ICsgZWxlbVNpemUucGFkZGluZ1JpZ2h0ICtcbiAgICAgIGVsZW1TaXplLmJvcmRlckxlZnRXaWR0aCArIGVsZW1TaXplLmJvcmRlclJpZ2h0V2lkdGggOlxuICAgICAgZWxlbVNpemUucGFkZGluZ0JvdHRvbSArIGVsZW1TaXplLnBhZGRpbmdUb3AgK1xuICAgICAgZWxlbVNpemUuYm9yZGVyVG9wV2lkdGggKyBlbGVtU2l6ZS5ib3JkZXJCb3R0b21XaWR0aDtcbiAgfVxuXG4gIG1lYXN1cmUgPSBNYXRoLm1heCggbWVhc3VyZSwgMCApO1xuICB0aGlzLmVsZW1lbnQuc3R5bGVbIGlzV2lkdGggPyAnd2lkdGgnIDogJ2hlaWdodCcgXSA9IG1lYXN1cmUgKyAncHgnO1xufTtcblxuLyoqXG4gKiBlbWl0IGV2ZW50Q29tcGxldGUgb24gYSBjb2xsZWN0aW9uIG9mIGl0ZW1zIGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICogQHBhcmFtIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuICovXG5wcm90by5fZW1pdENvbXBsZXRlT25JdGVtcyA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGl0ZW1zICkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgIF90aGlzLmRpc3BhdGNoRXZlbnQoIGV2ZW50TmFtZSArICdDb21wbGV0ZScsIG51bGwsIFsgaXRlbXMgXSApO1xuICB9XG5cbiAgdmFyIGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICBpZiAoICFpdGVtcyB8fCAhY291bnQgKSB7XG4gICAgb25Db21wbGV0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkb25lQ291bnQgPSAwO1xuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGRvbmVDb3VudCsrO1xuICAgIGlmICggZG9uZUNvdW50ID09IGNvdW50ICkge1xuICAgICAgb25Db21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJpbmQgY2FsbGJhY2tcbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5vbmNlKCBldmVudE5hbWUsIHRpY2sgKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGVtaXRzIGV2ZW50cyB2aWEgRXZFbWl0dGVyIGFuZCBqUXVlcnkgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIG5hbWUgb2YgZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gb3JpZ2luYWwgZXZlbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgLSBleHRyYSBhcmd1bWVudHNcbiAqL1xucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgLy8gYWRkIG9yaWdpbmFsIGV2ZW50IHRvIGFyZ3VtZW50c1xuICB2YXIgZW1pdEFyZ3MgPSBldmVudCA/IFsgZXZlbnQgXS5jb25jYXQoIGFyZ3MgKSA6IGFyZ3M7XG4gIHRoaXMuZW1pdEV2ZW50KCB0eXBlLCBlbWl0QXJncyApO1xuXG4gIGlmICggalF1ZXJ5ICkge1xuICAgIC8vIHNldCB0aGlzLiRlbGVtZW50XG4gICAgdGhpcy4kZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQgfHwgalF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgICBpZiAoIGV2ZW50ICkge1xuICAgICAgLy8gY3JlYXRlIGpRdWVyeSBldmVudFxuICAgICAgdmFyICRldmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICAgICRldmVudC50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggJGV2ZW50LCBhcmdzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGp1c3QgdHJpZ2dlciB3aXRoIHR5cGUgaWYgbm8gZXZlbnQgYXZhaWxhYmxlXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoIHR5cGUsIGFyZ3MgKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGlnbm9yZSAmIHN0YW1wcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cbi8qKlxuICoga2VlcCBpdGVtIGluIGNvbGxlY3Rpb24sIGJ1dCBkbyBub3QgbGF5IGl0IG91dFxuICogaWdub3JlZCBpdGVtcyBkbyBub3QgZ2V0IHNraXBwZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8uaWdub3JlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggaXRlbSApIHtcbiAgICBpdGVtLmlzSWdub3JlZCA9IHRydWU7XG4gIH1cbn07XG5cbi8qKlxuICogcmV0dXJuIGl0ZW0gdG8gbGF5b3V0IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5wcm90by51bmlnbm9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgZGVsZXRlIGl0ZW0uaXNJZ25vcmVkO1xuICB9XG59O1xuXG4vKipcbiAqIGFkZHMgZWxlbWVudHMgdG8gc3RhbXBzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgRWxlbWVudCwgb3IgU3RyaW5nfSBlbGVtc1xuICovXG5wcm90by5zdGFtcCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB0aGlzLl9maW5kKCBlbGVtcyApO1xuICBpZiAoICFlbGVtcyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnN0YW1wcyA9IHRoaXMuc3RhbXBzLmNvbmNhdCggZWxlbXMgKTtcbiAgLy8gaWdub3JlXG4gIGVsZW1zLmZvckVhY2goIHRoaXMuaWdub3JlLCB0aGlzICk7XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgZWxlbWVudHMgdG8gc3RhbXBzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8udW5zdGFtcCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB0aGlzLl9maW5kKCBlbGVtcyApO1xuICBpZiAoICFlbGVtcyApe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIC8vIGZpbHRlciBvdXQgcmVtb3ZlZCBzdGFtcCBlbGVtZW50c1xuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuc3RhbXBzLCBlbGVtICk7XG4gICAgdGhpcy51bmlnbm9yZSggZWxlbSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vKipcbiAqIGZpbmRzIGNoaWxkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgRWxlbWVudCwgb3IgU3RyaW5nfSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBlbGVtc1xuICovXG5wcm90by5fZmluZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHN0cmluZywgdXNlIGFyZ3VtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtcyA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCBlbGVtcyApO1xuICB9XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICByZXR1cm4gZWxlbXM7XG59O1xuXG5wcm90by5fbWFuYWdlU3RhbXBzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuc3RhbXBzIHx8ICF0aGlzLnN0YW1wcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fZ2V0Qm91bmRpbmdSZWN0KCk7XG5cbiAgdGhpcy5zdGFtcHMuZm9yRWFjaCggdGhpcy5fbWFuYWdlU3RhbXAsIHRoaXMgKTtcbn07XG5cbi8vIHVwZGF0ZSBib3VuZGluZ0xlZnQgLyBUb3BcbnByb3RvLl9nZXRCb3VuZGluZ1JlY3QgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGJvdW5kaW5nIHJlY3QgZm9yIGNvbnRhaW5lciBlbGVtZW50XG4gIHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xuICB0aGlzLl9ib3VuZGluZ1JlY3QgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5ib3JkZXJMZWZ0V2lkdGgsXG4gICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5ib3JkZXJUb3BXaWR0aCxcbiAgICByaWdodDogYm91bmRpbmdSZWN0LnJpZ2h0IC0gKCBzaXplLnBhZGRpbmdSaWdodCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aCApLFxuICAgIGJvdHRvbTogYm91bmRpbmdSZWN0LmJvdHRvbSAtICggc2l6ZS5wYWRkaW5nQm90dG9tICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aCApXG4gIH07XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3RhbXBcbioqL1xucHJvdG8uX21hbmFnZVN0YW1wID0gbm9vcDtcblxuLyoqXG4gKiBnZXQgeC95IHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gY29udGFpbmVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge09iamVjdH0gb2Zmc2V0IC0gaGFzIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbVxuICovXG5wcm90by5fZ2V0RWxlbWVudE9mZnNldCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHRoaXNSZWN0ID0gdGhpcy5fYm91bmRpbmdSZWN0O1xuICB2YXIgc2l6ZSA9IGdldFNpemUoIGVsZW0gKTtcbiAgdmFyIG9mZnNldCA9IHtcbiAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCAtIHRoaXNSZWN0LmxlZnQgLSBzaXplLm1hcmdpbkxlZnQsXG4gICAgdG9wOiBib3VuZGluZ1JlY3QudG9wIC0gdGhpc1JlY3QudG9wIC0gc2l6ZS5tYXJnaW5Ub3AsXG4gICAgcmlnaHQ6IHRoaXNSZWN0LnJpZ2h0IC0gYm91bmRpbmdSZWN0LnJpZ2h0IC0gc2l6ZS5tYXJnaW5SaWdodCxcbiAgICBib3R0b206IHRoaXNSZWN0LmJvdHRvbSAtIGJvdW5kaW5nUmVjdC5ib3R0b20gLSBzaXplLm1hcmdpbkJvdHRvbVxuICB9O1xuICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVzaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGVuYWJsZSBldmVudCBoYW5kbGVycyBmb3IgbGlzdGVuZXJzXG4vLyBpLmUuIHJlc2l6ZSAtPiBvbnJlc2l6ZVxucHJvdG8uaGFuZGxlRXZlbnQgPSB1dGlscy5oYW5kbGVFdmVudDtcblxuLyoqXG4gKiBCaW5kIGxheW91dCB0byB3aW5kb3cgcmVzaXppbmdcbiAqL1xucHJvdG8uYmluZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5pc1Jlc2l6ZUJvdW5kID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVW5iaW5kIGxheW91dCB0byB3aW5kb3cgcmVzaXppbmdcbiAqL1xucHJvdG8udW5iaW5kUmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcyApO1xuICB0aGlzLmlzUmVzaXplQm91bmQgPSBmYWxzZTtcbn07XG5cbnByb3RvLm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzaXplKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggT3V0bGF5ZXIsICdvbnJlc2l6ZScsIDEwMCApO1xuXG5wcm90by5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZG9uJ3QgdHJpZ2dlciBpZiBzaXplIGRpZCBub3QgY2hhbmdlXG4gIC8vIG9yIGlmIHJlc2l6ZSB3YXMgdW5ib3VuZC4gU2VlICM5XG4gIGlmICggIXRoaXMuaXNSZXNpemVCb3VuZCB8fCAhdGhpcy5uZWVkc1Jlc2l6ZUxheW91dCgpICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMubGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGNoZWNrIGlmIGxheW91dCBpcyBuZWVkZWQgcG9zdCBsYXlvdXRcbiAqIEByZXR1cm5zIEJvb2xlYW5cbiAqL1xucHJvdG8ubmVlZHNSZXNpemVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gY2hlY2sgdGhhdCB0aGlzLnNpemUgYW5kIHNpemUgYXJlIHRoZXJlXG4gIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgdmFyIGhhc1NpemVzID0gdGhpcy5zaXplICYmIHNpemU7XG4gIHJldHVybiBoYXNTaXplcyAmJiBzaXplLmlubmVyV2lkdGggIT09IHRoaXMuc2l6ZS5pbm5lcldpZHRoO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGFkZCBpdGVtcyB0byBPdXRsYXllciBpbnN0YW5jZVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4qKi9cbnByb3RvLmFkZEl0ZW1zID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtaXplKCBlbGVtcyApO1xuICAvLyBhZGQgaXRlbXMgdG8gY29sbGVjdGlvblxuICBpZiAoIGl0ZW1zLmxlbmd0aCApIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5jb25jYXQoIGl0ZW1zICk7XG4gIH1cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiBMYXlvdXQgbmV3bHktYXBwZW5kZWQgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5hcHBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5hZGRJdGVtcyggZWxlbXMgKTtcbiAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBsYXlvdXQgYW5kIHJldmVhbCBqdXN0IHRoZSBuZXcgaXRlbXNcbiAgdGhpcy5sYXlvdXRJdGVtcyggaXRlbXMsIHRydWUgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIExheW91dCBwcmVwZW5kZWQgZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8ucHJlcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtaXplKCBlbGVtcyApO1xuICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBpdGVtcyB0byBiZWdpbm5pbmcgb2YgY29sbGVjdGlvblxuICB2YXIgcHJldmlvdXNJdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2UoMCk7XG4gIHRoaXMuaXRlbXMgPSBpdGVtcy5jb25jYXQoIHByZXZpb3VzSXRlbXMgKTtcbiAgLy8gc3RhcnQgbmV3IGxheW91dFxuICB0aGlzLl9yZXNldExheW91dCgpO1xuICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcbiAgLy8gbGF5b3V0IG5ldyBzdHVmZiB3aXRob3V0IHRyYW5zaXRpb25cbiAgdGhpcy5sYXlvdXRJdGVtcyggaXRlbXMsIHRydWUgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG4gIC8vIGxheW91dCBwcmV2aW91cyBpdGVtc1xuICB0aGlzLmxheW91dEl0ZW1zKCBwcmV2aW91c0l0ZW1zICk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBhIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXkgb2YgT3V0bGF5ZXIuSXRlbXN9IGl0ZW1zXG4gKi9cbnByb3RvLnJldmVhbCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ3JldmVhbCcsIGl0ZW1zICk7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzdGFnZ2VyID0gdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtLCBpICkge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHN0YWdnZXIgKTtcbiAgICBpdGVtLnJldmVhbCgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogaGlkZSBhIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXkgb2YgT3V0bGF5ZXIuSXRlbXN9IGl0ZW1zXG4gKi9cbnByb3RvLmhpZGUgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdoaWRlJywgaXRlbXMgKTtcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHN0YWdnZXIgPSB0aGlzLnVwZGF0ZVN0YWdnZXIoKTtcbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0sIGkgKSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogc3RhZ2dlciApO1xuICAgIGl0ZW0uaGlkZSgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogcmV2ZWFsIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXl9LCB7RWxlbWVudH0sIHtOb2RlTGlzdH0gaXRlbXNcbiAqL1xucHJvdG8ucmV2ZWFsSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogaGlkZSBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbnByb3RvLmhpZGVJdGVtRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gIHRoaXMuaGlkZSggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogZ2V0IE91dGxheWVyLkl0ZW0sIGdpdmVuIGFuIEVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKi9cbnByb3RvLmdldEl0ZW0gPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gbG9vcCB0aHJvdWdoIGl0ZW1zIHRvIGdldCB0aGUgb25lIHRoYXQgbWF0Y2hlc1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgaWYgKCBpdGVtLmVsZW1lbnQgPT0gZWxlbSApIHtcbiAgICAgIC8vIHJldHVybiBpdGVtXG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogZ2V0IGNvbGxlY3Rpb24gb2YgT3V0bGF5ZXIuSXRlbXMsIGdpdmVuIEVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4gKi9cbnByb3RvLmdldEl0ZW1zID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGl0ZW1zID0gW107XG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gICAgaWYgKCBpdGVtICkge1xuICAgICAgaXRlbXMucHVzaCggaXRlbSApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogcmVtb3ZlIGVsZW1lbnQocykgZnJvbSBpbnN0YW5jZSBhbmQgRE9NXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIHJlbW92ZUl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcblxuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAncmVtb3ZlJywgcmVtb3ZlSXRlbXMgKTtcblxuICAvLyBiYWlsIGlmIG5vIGl0ZW1zIHRvIHJlbW92ZVxuICBpZiAoICFyZW1vdmVJdGVtcyB8fCAhcmVtb3ZlSXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbW92ZUl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjb2xsZWN0aW9uXG4gICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5pdGVtcywgaXRlbSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vLyAtLS0tLSBkZXN0cm95IC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBhbmQgZGlzYWJsZSBPdXRsYXllciBpbnN0YW5jZVxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjbGVhbiB1cCBkeW5hbWljIHN0eWxlc1xuICB2YXIgc3R5bGUgPSB0aGlzLmVsZW1lbnQuc3R5bGU7XG4gIHN0eWxlLmhlaWdodCA9ICcnO1xuICBzdHlsZS5wb3NpdGlvbiA9ICcnO1xuICBzdHlsZS53aWR0aCA9ICcnO1xuICAvLyBkZXN0cm95IGl0ZW1zXG4gIHRoaXMuaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5kZXN0cm95KCk7XG4gIH0pO1xuXG4gIHRoaXMudW5iaW5kUmVzaXplKCk7XG5cbiAgdmFyIGlkID0gdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRDtcbiAgZGVsZXRlIGluc3RhbmNlc1sgaWQgXTsgLy8gcmVtb3ZlIHJlZmVyZW5jZSB0byBpbnN0YW5jZSBieSBpZFxuICBkZWxldGUgdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRDtcbiAgLy8gcmVtb3ZlIGRhdGEgZm9yIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSApO1xuICB9XG5cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhdGEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXQgT3V0bGF5ZXIgaW5zdGFuY2UgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPdXRsYXllcn1cbiAqL1xuT3V0bGF5ZXIuZGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBlbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtICk7XG4gIHZhciBpZCA9IGVsZW0gJiYgZWxlbS5vdXRsYXllckdVSUQ7XG4gIHJldHVybiBpZCAmJiBpbnN0YW5jZXNbIGlkIF07XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNyZWF0ZSBPdXRsYXllciBjbGFzcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGNyZWF0ZSBhIGxheW91dCBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICovXG5PdXRsYXllci5jcmVhdGUgPSBmdW5jdGlvbiggbmFtZXNwYWNlLCBvcHRpb25zICkge1xuICAvLyBzdWItY2xhc3MgT3V0bGF5ZXJcbiAgdmFyIExheW91dCA9IHN1YmNsYXNzKCBPdXRsYXllciApO1xuICAvLyBhcHBseSBuZXcgb3B0aW9ucyBhbmQgY29tcGF0T3B0aW9uc1xuICBMYXlvdXQuZGVmYXVsdHMgPSB1dGlscy5leHRlbmQoIHt9LCBPdXRsYXllci5kZWZhdWx0cyApO1xuICB1dGlscy5leHRlbmQoIExheW91dC5kZWZhdWx0cywgb3B0aW9ucyApO1xuICBMYXlvdXQuY29tcGF0T3B0aW9ucyA9IHV0aWxzLmV4dGVuZCgge30sIE91dGxheWVyLmNvbXBhdE9wdGlvbnMgICk7XG5cbiAgTGF5b3V0Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblxuICBMYXlvdXQuZGF0YSA9IE91dGxheWVyLmRhdGE7XG5cbiAgLy8gc3ViLWNsYXNzIEl0ZW1cbiAgTGF5b3V0Lkl0ZW0gPSBzdWJjbGFzcyggSXRlbSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlY2xhcmF0aXZlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgdXRpbHMuaHRtbEluaXQoIExheW91dCwgbmFtZXNwYWNlICk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0galF1ZXJ5IGJyaWRnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIG1ha2UgaW50byBqUXVlcnkgcGx1Z2luXG4gIGlmICggalF1ZXJ5ICYmIGpRdWVyeS5icmlkZ2V0ICkge1xuICAgIGpRdWVyeS5icmlkZ2V0KCBuYW1lc3BhY2UsIExheW91dCApO1xuICB9XG5cbiAgcmV0dXJuIExheW91dDtcbn07XG5cbmZ1bmN0aW9uIHN1YmNsYXNzKCBQYXJlbnQgKSB7XG4gIGZ1bmN0aW9uIFN1YkNsYXNzKCkge1xuICAgIFBhcmVudC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gIH1cblxuICBTdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBQYXJlbnQucHJvdG90eXBlICk7XG4gIFN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YkNsYXNzO1xuXG4gIHJldHVybiBTdWJDbGFzcztcbn1cblxuLy8gLS0tLS0gaGVscGVycyAtLS0tLSAvL1xuXG4vLyBob3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGluIGVhY2ggdW5pdFxudmFyIG1zVW5pdHMgPSB7XG4gIG1zOiAxLFxuICBzOiAxMDAwXG59O1xuXG4vLyBtdW5nZSB0aW1lLWxpa2UgcGFyYW1ldGVyIGludG8gbWlsbGlzZWNvbmQgbnVtYmVyXG4vLyAnMC40cycgLT4gNDBcbmZ1bmN0aW9uIGdldE1pbGxpc2Vjb25kcyggdGltZSApIHtcbiAgaWYgKCB0eXBlb2YgdGltZSA9PSAnbnVtYmVyJyApIHtcbiAgICByZXR1cm4gdGltZTtcbiAgfVxuICB2YXIgbWF0Y2hlcyA9IHRpbWUubWF0Y2goIC8oXlxcZCpcXC4/XFxkKikoXFx3KikvICk7XG4gIHZhciBudW0gPSBtYXRjaGVzICYmIG1hdGNoZXNbMV07XG4gIHZhciB1bml0ID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzJdO1xuICBpZiAoICFudW0ubGVuZ3RoICkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIG51bSA9IHBhcnNlRmxvYXQoIG51bSApO1xuICB2YXIgbXVsdCA9IG1zVW5pdHNbIHVuaXQgXSB8fCAxO1xuICByZXR1cm4gbnVtICogbXVsdDtcbn1cblxuLy8gLS0tLS0gZmluIC0tLS0tIC8vXG5cbi8vIGJhY2sgaW4gZ2xvYmFsXG5PdXRsYXllci5JdGVtID0gSXRlbTtcblxucmV0dXJuIE91dGxheWVyO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb3V0bGF5ZXIvb3V0bGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBlbnVtIENvbHVtblZpc2liaWxpdHkgeyBWaXNpYmxlID0gXCJWaXNpYmxlXCIsIEludmlzaWJsZSA9IFwiSW52aXNpYmxlXCIsIFB1YmxpY0ludmlzaWJsZSA9IFwiUHVibGljSW52aXNpYmxlXCIgfVxyXG5leHBvcnQgZW51bSBRdWVzdGlvbkxvY2F0aW9uIHsgQ29sdW1uID0gXCJDb2x1bW5cIiwgUm93ID0gXCJSb3dcIiB9XHJcbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHsgVGV4dCA9IFwiVGV4dFwiLCBGaWxlTGluayA9IFwiRmlsZUxpbmtcIiwgSW1hZ2UgPSBcIkltYWdlXCIgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIGRhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcclxuICAgIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHk7XHJcbiAgICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW5zIHtcclxuLy8gICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj47XHJcbi8vIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RhdGF0YWJsZXMvY29uZmlnLnRzIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uXCI7XG5cbmV4cG9ydCB2YXIgZW5nbGlzaFN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0IE1lXCIsXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCJcbn07XG5cbi8vVW5jb21tZW50IHRoZXNlIHR3byBsaW5lcyBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGUuIFlvdSBzaG91bGQgcmVwbGFjZSBcImVuXCIgYW5kIGVuU3RyaW5ncyB3aXRoIHlvdXIgbG9jYWxlIChcImZyXCIsIFwiZGVcIiBhbmQgc28gb24pIGFuZCB5b3VyIHZhcmlhYmxlLlxuLy9sb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4vL2xvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJFbmdsaXNoXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJpbXBvcnQgeyBJdGVtVmFsdWUsIFF1ZXN0aW9uTWF0cml4TW9kZWwsIFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZVBsb3RseSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE1hdHJpeFBsb3RseSBleHRlbmRzIFNlbGVjdEJhc2VQbG90bHkge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldE5vZGUsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHZhbHVlc1NvdXJjZSgpOiBhbnlbXSB7XG4gICAgY29uc3QgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4TW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgcmV0dXJuIHF1ZXN0aW9uLmNvbHVtbnM7XG4gIH1cblxuICBnZXRMYWJlbHMoKTogYW55W10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBxdWVzdGlvbi5yb3dzLm1hcChyb3cgPT5cbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZShxdWVzdGlvbi5yb3dzLCByb3cudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldERhdGEoKTogYW55W10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIGNvbnN0IGRhdGFzZXRzOiBBcnJheTxhbnk+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+IHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5yb3dzLm1hcCh2ID0+IDApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93RGF0YSA9PiB7XG4gICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSByb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XG4gICAgICAgIHF1ZXN0aW9uLnJvd3MuZm9yRWFjaCgocm93OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICB0aGlzLmdldFZhbHVlcygpLmZvckVhY2goKHZhbDogYW55LCBkc0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvblZhbHVlW3Jvdy52YWx1ZV0gPT0gdmFsKSB7XG4gICAgICAgICAgICAgIGRhdGFzZXRzW2RzSW5kZXhdW2luZGV4XSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YXNldHM7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibWF0cml4XCIsIE1hdHJpeFBsb3RseSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG52YXIgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhdWdlUGxvdGx5IGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBwcml2YXRlIF9yZXN1bHQ6IGFueTtcbiAgcHJpdmF0ZSBjaGFydDogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+O1xuXG4gIHB1YmxpYyBzdGF0aWMgc3RlcHNDb3VudCA9IDU7XG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVUZXh0c0NhbGxiYWNrOiAoXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIG1heFZhbHVlOiBudW1iZXIsXG4gICAgbWluVmFsdWU6IG51bWJlcixcbiAgICBzdGVwc0NvdW50OiBudW1iZXIsXG4gICAgdGV4dHM6IHN0cmluZ1tdXG4gICkgPT4gc3RyaW5nW107XG5cbiAgcHJvdGVjdGVkIGNoYXJ0VHlwZXMgPSBbXCJnYXVnZVwiLCBcImJ1bGxldFwiXTtcbiAgY2hhcnRUeXBlID0gXCJnYXVnZVwiO1xuICBjaGFydE5vZGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICB1cGRhdGUoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xuICAgIHN1cGVyLnVwZGF0ZShkYXRhKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b29sYmFyQ2hhbmdlSGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5jaGFydFR5cGUgIT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBjcmVhdGVUb29sYmFyKFxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXG4gICAgY2hhbmdlSGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZFxuICApIHtcbiAgICBpZiAodGhpcy5jaGFydFR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9vbGJhci5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fdG9vbGJhclwiO1xuXG4gICAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uX19zZWxlY3RcIjtcbiAgICAgIHRoaXMuY2hhcnRUeXBlcy5mb3JFYWNoKGNoYXJ0VHlwZSA9PiB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBjaGFydFR5cGU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gY2hhcnRUeXBlO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0aGlzLmNoYXJ0VHlwZSA9PT0gY2hhcnRUeXBlO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgc2VsZWN0Lm9uY2hhbmdlID0gY2hhbmdlSGFuZGxlcjtcbiAgICAgIHNlbGVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0V3JhcHBlcik7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIFBsb3RseS5wdXJnZSh0aGlzLmNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2VuZXJhdGVUZXh0KG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGxldCB0ZXh0czogYW55ID0gW107XG5cbiAgICBpZiAoc3RlcHNDb3VudCA9PT0gNSkge1xuICAgICAgdGV4dHMgPSBbXG4gICAgICAgIFwidmVyeSBoaWdoIChcIiArIG1heFZhbHVlICsgXCIpXCIsXG4gICAgICAgIFwiaGlnaFwiLFxuICAgICAgICBcIm1lZGl1bVwiLFxuICAgICAgICBcImxvd1wiLFxuICAgICAgICBcInZlcnkgbG93IChcIiArIG1pblZhbHVlICsgXCIpXCJcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRzLnB1c2gobWF4VmFsdWUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50IC0gMjsgaSsrKSB7XG4gICAgICAgIHRleHRzLnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgICB0ZXh0cy5wdXNoKG1pblZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoISFHYXVnZVBsb3RseS5nZW5lcmF0ZVRleHRzQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBHYXVnZVBsb3RseS5nZW5lcmF0ZVRleHRzQ2FsbGJhY2soXG4gICAgICAgIHRoaXMucXVlc3Rpb24sXG4gICAgICAgIG1heFZhbHVlLFxuICAgICAgICBtaW5WYWx1ZSxcbiAgICAgICAgc3RlcHNDb3VudCxcbiAgICAgICAgdGV4dHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRzO1xuICB9XG5cbiAgZ2VuZXJhdGVWYWx1ZXMobWF4VmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xuICAgICAgdmFsdWVzLnB1c2gobWF4VmFsdWUgLyBzdGVwc0NvdW50KTtcbiAgICB9XG5cbiAgICB2YWx1ZXMucHVzaChtYXhWYWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgZ2VuZXJhdGVDb2xvcnMobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgY29sb3JzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xuICAgICAgY29sb3JzLnB1c2gocGFsZXR0ZVtpXSk7XG4gICAgfVxuXG4gICAgY29sb3JzLnB1c2goXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIpO1xuXG4gICAgcmV0dXJuIGNvbG9ycztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVG9vbGJhckNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjaGFydE5vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvb2xiYXJOb2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNoYXJ0Tm9kZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyTm9kZUNvbnRhaW5lcik7XG4gICAgY2hhcnROb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hhcnROb2RlKTtcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhcnROb2RlQ29udGFpbmVyKTtcblxuICAgIHRoaXMuY3JlYXRlVG9vbGJhcih0b29sYmFyTm9kZUNvbnRhaW5lciwgdGhpcy50b29sYmFyQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoYXJ0KCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcblxuICAgIGNvbnN0IHJhdGVWYWx1ZXMgPSBxdWVzdGlvbi52aXNpYmxlUmF0ZVZhbHVlcztcbiAgICBjb25zdCBtYXhWYWx1ZSA9IHJhdGVWYWx1ZXNbcmF0ZVZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZTtcbiAgICBjb25zdCBtaW5WYWx1ZSA9IHJhdGVWYWx1ZXNbMF0udmFsdWU7XG5cbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdlbmVyYXRlQ29sb3JzKFxuICAgICAgbWF4VmFsdWUsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIEdhdWdlUGxvdGx5LnN0ZXBzQ291bnRcbiAgICApO1xuXG4gICAgdmFyIGxldmVsID0gdGhpcy5yZXN1bHQ7XG5cbiAgICB2YXIgZGF0YTogYW55ID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcImluZGljYXRvclwiLFxuICAgICAgICBtb2RlOiBcImdhdWdlK251bWJlclwiLFxuICAgICAgICBnYXVnZToge1xuICAgICAgICAgIGF4aXM6IHsgcmFuZ2U6IFttaW5WYWx1ZSwgbWF4VmFsdWVdIH0sXG4gICAgICAgICAgc2hhcGU6IHRoaXMuY2hhcnRUeXBlLFxuICAgICAgICAgIGJnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBiYXI6IHsgY29sb3I6IGNvbG9yc1swXSB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBsZXZlbCxcbiAgICAgICAgdGV4dDogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZG9tYWluOiB7IHg6IFswLCAxXSwgeTogWzAsIDFdIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgdmFyIGxheW91dCA9IHtcbiAgICAgIHdpZHRoOiA2MDAsXG4gICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvclxuICAgIH07XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UsXG4gICAgICBzdGF0aWNQbG90OiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMuY2hhcnQgPSBQbG90bHkubmV3UGxvdCh0aGlzLmNoYXJ0Tm9kZSwgZGF0YSwgbGF5b3V0LCBjb25maWcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY3JlYXRlVG9vbGJhckNvbnRhaW5lcigpO1xuICAgIHRoaXMuY3JlYXRlQ2hhcnQoKTtcbiAgfVxuXG4gIGdldCByZXN1bHQoKSB7XG4gICAgaWYgKHRoaXMuX3Jlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBxdWVzdGlvblZhbHVlczogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3dEYXRhID0+IHtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZTogYW55ID0gK3Jvd0RhdGFbdGhpcy5xdWVzdGlvbi5uYW1lXTtcbiAgICAgICAgaWYgKCEhcXVlc3Rpb25WYWx1ZSkge1xuICAgICAgICAgIHF1ZXN0aW9uVmFsdWVzLnB1c2gocXVlc3Rpb25WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9yZXN1bHQgPVxuICAgICAgICBxdWVzdGlvblZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0pIC8gcXVlc3Rpb25WYWx1ZXMubGVuZ3RoO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gTWF0aC5jZWlsKHRoaXMuX3Jlc3VsdCAqIDEwMCkgLyAxMDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZXN1bHQ7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwicmF0aW5nXCIsIEdhdWdlUGxvdGx5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvcmF0aW5nLnRzIiwiZXhwb3J0IHZhciBzdG9wV29yZHMgPSBuZXcgQXJyYXkoXG4gIFwiYVwiLFxuICBcImFib3V0XCIsXG4gIFwiYWJvdmVcIixcbiAgXCJhY3Jvc3NcIixcbiAgXCJhZnRlclwiLFxuICBcImFnYWluXCIsXG4gIFwiYWdhaW5zdFwiLFxuICBcImFsbFwiLFxuICBcImFsbW9zdFwiLFxuICBcImFsb25lXCIsXG4gIFwiYWxvbmdcIixcbiAgXCJhbHJlYWR5XCIsXG4gIFwiYWxzb1wiLFxuICBcImFsdGhvdWdoXCIsXG4gIFwiYWx3YXlzXCIsXG4gIFwiYW1vbmdcIixcbiAgXCJhblwiLFxuICBcImFuZFwiLFxuICBcImFub3RoZXJcIixcbiAgXCJhbnlcIixcbiAgXCJhbnlib2R5XCIsXG4gIFwiYW55b25lXCIsXG4gIFwiYW55dGhpbmdcIixcbiAgXCJhbnl3aGVyZVwiLFxuICBcImFyZVwiLFxuICBcImFyZWFcIixcbiAgXCJhcmVhc1wiLFxuICBcImFyb3VuZFwiLFxuICBcImFzXCIsXG4gIFwiYXNrXCIsXG4gIFwiYXNrZWRcIixcbiAgXCJhc2tpbmdcIixcbiAgXCJhc2tzXCIsXG4gIFwiYXRcIixcbiAgXCJhd2F5XCIsXG4gIFwiYlwiLFxuICBcImJhY2tcIixcbiAgXCJiYWNrZWRcIixcbiAgXCJiYWNraW5nXCIsXG4gIFwiYmFja3NcIixcbiAgXCJiZVwiLFxuICBcImJlY2FtZVwiLFxuICBcImJlY2F1c2VcIixcbiAgXCJiZWNvbWVcIixcbiAgXCJiZWNvbWVzXCIsXG4gIFwiYmVlblwiLFxuICBcImJlZm9yZVwiLFxuICBcImJlZ2FuXCIsXG4gIFwiYmVoaW5kXCIsXG4gIFwiYmVpbmdcIixcbiAgXCJiZWluZ3NcIixcbiAgXCJiZXN0XCIsXG4gIFwiYmV0dGVyXCIsXG4gIFwiYmV0d2VlblwiLFxuICBcImJpZ1wiLFxuICBcImJvdGhcIixcbiAgXCJidXRcIixcbiAgXCJieVwiLFxuICBcImNcIixcbiAgXCJjYW1lXCIsXG4gIFwiY2FuXCIsXG4gIFwiY2Fubm90XCIsXG4gIFwiY2FzZVwiLFxuICBcImNhc2VzXCIsXG4gIFwiY2VydGFpblwiLFxuICBcImNlcnRhaW5seVwiLFxuICBcImNsZWFyXCIsXG4gIFwiY2xlYXJseVwiLFxuICBcImNvbWVcIixcbiAgXCJjb3VsZFwiLFxuICBcImRcIixcbiAgXCJkaWRcIixcbiAgXCJkaWZmZXJcIixcbiAgXCJkaWZmZXJlbnRcIixcbiAgXCJkaWZmZXJlbnRseVwiLFxuICBcImRvXCIsXG4gIFwiZG9lc1wiLFxuICBcImRvbmVcIixcbiAgXCJkb3duXCIsXG4gIFwiZG93blwiLFxuICBcImRvd25lZFwiLFxuICBcImRvd25pbmdcIixcbiAgXCJkb3duc1wiLFxuICBcImR1cmluZ1wiLFxuICBcImVcIixcbiAgXCJlYWNoXCIsXG4gIFwiZWFybHlcIixcbiAgXCJlaXRoZXJcIixcbiAgXCJlbmRcIixcbiAgXCJlbmRlZFwiLFxuICBcImVuZGluZ1wiLFxuICBcImVuZHNcIixcbiAgXCJlbm91Z2hcIixcbiAgXCJldmVuXCIsXG4gIFwiZXZlbmx5XCIsXG4gIFwiZXZlclwiLFxuICBcImV2ZXJ5XCIsXG4gIFwiZXZlcnlib2R5XCIsXG4gIFwiZXZlcnlvbmVcIixcbiAgXCJldmVyeXRoaW5nXCIsXG4gIFwiZXZlcnl3aGVyZVwiLFxuICBcImZcIixcbiAgXCJmYWNlXCIsXG4gIFwiZmFjZXNcIixcbiAgXCJmYWN0XCIsXG4gIFwiZmFjdHNcIixcbiAgXCJmYXJcIixcbiAgXCJmZWx0XCIsXG4gIFwiZmV3XCIsXG4gIFwiZmluZFwiLFxuICBcImZpbmRzXCIsXG4gIFwiZmlyc3RcIixcbiAgXCJmb3JcIixcbiAgXCJmb3VyXCIsXG4gIFwiZnJvbVwiLFxuICBcImZ1bGxcIixcbiAgXCJmdWxseVwiLFxuICBcImZ1cnRoZXJcIixcbiAgXCJmdXJ0aGVyZWRcIixcbiAgXCJmdXJ0aGVyaW5nXCIsXG4gIFwiZnVydGhlcnNcIixcbiAgXCJnXCIsXG4gIFwiZ2F2ZVwiLFxuICBcImdlbmVyYWxcIixcbiAgXCJnZW5lcmFsbHlcIixcbiAgXCJnZXRcIixcbiAgXCJnZXRzXCIsXG4gIFwiZ2l2ZVwiLFxuICBcImdpdmVuXCIsXG4gIFwiZ2l2ZXNcIixcbiAgXCJnb1wiLFxuICBcImdvaW5nXCIsXG4gIFwiZ29vZFwiLFxuICBcImdvb2RzXCIsXG4gIFwiZ290XCIsXG4gIFwiZ3JlYXRcIixcbiAgXCJncmVhdGVyXCIsXG4gIFwiZ3JlYXRlc3RcIixcbiAgXCJncm91cFwiLFxuICBcImdyb3VwZWRcIixcbiAgXCJncm91cGluZ1wiLFxuICBcImdyb3Vwc1wiLFxuICBcImhcIixcbiAgXCJoYWRcIixcbiAgXCJoYXNcIixcbiAgXCJoYXZlXCIsXG4gIFwiaGF2aW5nXCIsXG4gIFwiaGVcIixcbiAgXCJoZXJcIixcbiAgXCJoZXJlXCIsXG4gIFwiaGVyc2VsZlwiLFxuICBcImhpZ2hcIixcbiAgXCJoaWdoXCIsXG4gIFwiaGlnaFwiLFxuICBcImhpZ2hlclwiLFxuICBcImhpZ2hlc3RcIixcbiAgXCJoaW1cIixcbiAgXCJoaW1zZWxmXCIsXG4gIFwiaGlzXCIsXG4gIFwiaG93XCIsXG4gIFwiaG93ZXZlclwiLFxuICBcImlcIixcbiAgXCJpZlwiLFxuICBcImltcG9ydGFudFwiLFxuICBcImluXCIsXG4gIFwiaW50ZXJlc3RcIixcbiAgXCJpbnRlcmVzdGVkXCIsXG4gIFwiaW50ZXJlc3RpbmdcIixcbiAgXCJpbnRlcmVzdHNcIixcbiAgXCJpbnRvXCIsXG4gIFwiaXNcIixcbiAgXCJpdFwiLFxuICBcIml0c1wiLFxuICBcIml0c2VsZlwiLFxuICBcImpcIixcbiAgXCJqdXN0XCIsXG4gIFwia1wiLFxuICBcImtlZXBcIixcbiAgXCJrZWVwc1wiLFxuICBcImtpbmRcIixcbiAgXCJrbmV3XCIsXG4gIFwia25vd1wiLFxuICBcImtub3duXCIsXG4gIFwia25vd3NcIixcbiAgXCJsXCIsXG4gIFwibGFyZ2VcIixcbiAgXCJsYXJnZWx5XCIsXG4gIFwibGFzdFwiLFxuICBcImxhdGVyXCIsXG4gIFwibGF0ZXN0XCIsXG4gIFwibGVhc3RcIixcbiAgXCJsZXNzXCIsXG4gIFwibGV0XCIsXG4gIFwibGV0c1wiLFxuICBcImxpa2VcIixcbiAgXCJsaWtlbHlcIixcbiAgXCJsb25nXCIsXG4gIFwibG9uZ2VyXCIsXG4gIFwibG9uZ2VzdFwiLFxuICBcIm1cIixcbiAgXCJtYWRlXCIsXG4gIFwibWFrZVwiLFxuICBcIm1ha2luZ1wiLFxuICBcIm1hblwiLFxuICBcIm1hbnlcIixcbiAgXCJtYXlcIixcbiAgXCJtZVwiLFxuICBcIm1lbWJlclwiLFxuICBcIm1lbWJlcnNcIixcbiAgXCJtZW5cIixcbiAgXCJtaWdodFwiLFxuICBcIm1vcmVcIixcbiAgXCJtb3N0XCIsXG4gIFwibW9zdGx5XCIsXG4gIFwibXJcIixcbiAgXCJtcnNcIixcbiAgXCJtdWNoXCIsXG4gIFwibXVzdFwiLFxuICBcIm15XCIsXG4gIFwibXlzZWxmXCIsXG4gIFwiblwiLFxuICBcIm5lY2Vzc2FyeVwiLFxuICBcIm5lZWRcIixcbiAgXCJuZWVkZWRcIixcbiAgXCJuZWVkaW5nXCIsXG4gIFwibmVlZHNcIixcbiAgXCJuZXZlclwiLFxuICBcIm5ld1wiLFxuICBcIm5ld1wiLFxuICBcIm5ld2VyXCIsXG4gIFwibmV3ZXN0XCIsXG4gIFwibmV4dFwiLFxuICBcIm5vXCIsXG4gIFwibm9ib2R5XCIsXG4gIFwibm9uXCIsXG4gIFwibm9vbmVcIixcbiAgXCJub3RcIixcbiAgXCJub3RoaW5nXCIsXG4gIFwibm93XCIsXG4gIFwibm93aGVyZVwiLFxuICBcIm51bWJlclwiLFxuICBcIm51bWJlcnNcIixcbiAgXCJvXCIsXG4gIFwib2ZcIixcbiAgXCJvZmZcIixcbiAgXCJvZnRlblwiLFxuICBcIm9sZFwiLFxuICBcIm9sZGVyXCIsXG4gIFwib2xkZXN0XCIsXG4gIFwib25cIixcbiAgXCJvbmNlXCIsXG4gIFwib25lXCIsXG4gIFwib25seVwiLFxuICBcIm9wZW5cIixcbiAgXCJvcGVuZWRcIixcbiAgXCJvcGVuaW5nXCIsXG4gIFwib3BlbnNcIixcbiAgXCJvclwiLFxuICBcIm9yZGVyXCIsXG4gIFwib3JkZXJlZFwiLFxuICBcIm9yZGVyaW5nXCIsXG4gIFwib3JkZXJzXCIsXG4gIFwib3RoZXJcIixcbiAgXCJvdGhlcnNcIixcbiAgXCJvdXJcIixcbiAgXCJvdXRcIixcbiAgXCJvdmVyXCIsXG4gIFwicFwiLFxuICBcInBhcnRcIixcbiAgXCJwYXJ0ZWRcIixcbiAgXCJwYXJ0aW5nXCIsXG4gIFwicGFydHNcIixcbiAgXCJwZXJcIixcbiAgXCJwZXJoYXBzXCIsXG4gIFwicGxhY2VcIixcbiAgXCJwbGFjZXNcIixcbiAgXCJwb2ludFwiLFxuICBcInBvaW50ZWRcIixcbiAgXCJwb2ludGluZ1wiLFxuICBcInBvaW50c1wiLFxuICBcInBvc3NpYmxlXCIsXG4gIFwicHJlc2VudFwiLFxuICBcInByZXNlbnRlZFwiLFxuICBcInByZXNlbnRpbmdcIixcbiAgXCJwcmVzZW50c1wiLFxuICBcInByb2JsZW1cIixcbiAgXCJwcm9ibGVtc1wiLFxuICBcInB1dFwiLFxuICBcInB1dHNcIixcbiAgXCJxXCIsXG4gIFwicXVpdGVcIixcbiAgXCJyXCIsXG4gIFwicmF0aGVyXCIsXG4gIFwicmVhbGx5XCIsXG4gIFwicmlnaHRcIixcbiAgXCJyaWdodFwiLFxuICBcInJvb21cIixcbiAgXCJyb29tc1wiLFxuICBcInNcIixcbiAgXCJzYWlkXCIsXG4gIFwic2FtZVwiLFxuICBcInNhd1wiLFxuICBcInNheVwiLFxuICBcInNheXNcIixcbiAgXCJzZWNvbmRcIixcbiAgXCJzZWNvbmRzXCIsXG4gIFwic2VlXCIsXG4gIFwic2VlbVwiLFxuICBcInNlZW1lZFwiLFxuICBcInNlZW1pbmdcIixcbiAgXCJzZWVtc1wiLFxuICBcInNlZXNcIixcbiAgXCJzZXZlcmFsXCIsXG4gIFwic2hhbGxcIixcbiAgXCJzaGVcIixcbiAgXCJzaG91bGRcIixcbiAgXCJzaG93XCIsXG4gIFwic2hvd2VkXCIsXG4gIFwic2hvd2luZ1wiLFxuICBcInNob3dzXCIsXG4gIFwic2lkZVwiLFxuICBcInNpZGVzXCIsXG4gIFwic2luY2VcIixcbiAgXCJzbWFsbFwiLFxuICBcInNtYWxsZXJcIixcbiAgXCJzbWFsbGVzdFwiLFxuICBcInNvXCIsXG4gIFwic29tZVwiLFxuICBcInNvbWVib2R5XCIsXG4gIFwic29tZW9uZVwiLFxuICBcInNvbWV0aGluZ1wiLFxuICBcInNvbWV3aGVyZVwiLFxuICBcInN0YXRlXCIsXG4gIFwic3RhdGVzXCIsXG4gIFwic3RpbGxcIixcbiAgXCJzdGlsbFwiLFxuICBcInN1Y2hcIixcbiAgXCJzdXJlXCIsXG4gIFwidFwiLFxuICBcInRha2VcIixcbiAgXCJ0YWtlblwiLFxuICBcInRoYW5cIixcbiAgXCJ0aGF0XCIsXG4gIFwidGhlXCIsXG4gIFwidGhlaXJcIixcbiAgXCJ0aGVtXCIsXG4gIFwidGhlblwiLFxuICBcInRoZXJlXCIsXG4gIFwidGhlcmVmb3JlXCIsXG4gIFwidGhlc2VcIixcbiAgXCJ0aGV5XCIsXG4gIFwidGhpbmdcIixcbiAgXCJ0aGluZ3NcIixcbiAgXCJ0aGlua1wiLFxuICBcInRoaW5rc1wiLFxuICBcInRoaXNcIixcbiAgXCJ0aG9zZVwiLFxuICBcInRob3VnaFwiLFxuICBcInRob3VnaHRcIixcbiAgXCJ0aG91Z2h0c1wiLFxuICBcInRocmVlXCIsXG4gIFwidGhyb3VnaFwiLFxuICBcInRodXNcIixcbiAgXCJ0b1wiLFxuICBcInRvZGF5XCIsXG4gIFwidG9nZXRoZXJcIixcbiAgXCJ0b29cIixcbiAgXCJ0b29rXCIsXG4gIFwidG93YXJkXCIsXG4gIFwidHVyblwiLFxuICBcInR1cm5lZFwiLFxuICBcInR1cm5pbmdcIixcbiAgXCJ0dXJuc1wiLFxuICBcInR3b1wiLFxuICBcInVcIixcbiAgXCJ1bmRlclwiLFxuICBcInVudGlsXCIsXG4gIFwidXBcIixcbiAgXCJ1cG9uXCIsXG4gIFwidXNcIixcbiAgXCJ1c2VcIixcbiAgXCJ1c2VkXCIsXG4gIFwidXNlc1wiLFxuICBcInZcIixcbiAgXCJ2ZXJ5XCIsXG4gIFwid1wiLFxuICBcIndhbnRcIixcbiAgXCJ3YW50ZWRcIixcbiAgXCJ3YW50aW5nXCIsXG4gIFwid2FudHNcIixcbiAgXCJ3YXNcIixcbiAgXCJ3YXlcIixcbiAgXCJ3YXlzXCIsXG4gIFwid2VcIixcbiAgXCJ3ZWxsXCIsXG4gIFwid2VsbHNcIixcbiAgXCJ3ZW50XCIsXG4gIFwid2VyZVwiLFxuICBcIndoYXRcIixcbiAgXCJ3aGVuXCIsXG4gIFwid2hlcmVcIixcbiAgXCJ3aGV0aGVyXCIsXG4gIFwid2hpY2hcIixcbiAgXCJ3aGlsZVwiLFxuICBcIndob1wiLFxuICBcIndob2xlXCIsXG4gIFwid2hvc2VcIixcbiAgXCJ3aHlcIixcbiAgXCJ3aWxsXCIsXG4gIFwid2l0aFwiLFxuICBcIndpdGhpblwiLFxuICBcIndpdGhvdXRcIixcbiAgXCJ3b3JrXCIsXG4gIFwid29ya2VkXCIsXG4gIFwid29ya2luZ1wiLFxuICBcIndvcmtzXCIsXG4gIFwid291bGRcIixcbiAgXCJ4XCIsXG4gIFwieVwiLFxuICBcInllYXJcIixcbiAgXCJ5ZWFyc1wiLFxuICBcInlldFwiLFxuICBcInlvdVwiLFxuICBcInlvdW5nXCIsXG4gIFwieW91bmdlclwiLFxuICBcInlvdW5nZXN0XCIsXG4gIFwieW91clwiLFxuICBcInlvdXJzXCIsXG4gIFwielwiXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvZW5nbGlzaC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIldvcmRDbG91ZFwiLFwiY29tbW9uanMyXCI6XCJ3b3JkY2xvdWRcIixcImNvbW1vbmpzXCI6XCJ3b3JkY2xvdWRcIixcImFtZFwiOlwid29yZGNsb3VkXCJ9XG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vZGF0YXRhYmxlcy9kYXRhdGFibGVzXCI7XG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jaGFydGpzL2luZGV4XCI7XG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jMy9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGxvdGx5L2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi93b3JkY2xvdWQvd29yZGNsb3VkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93b3JkY2xvdWQvc3RvcHdvcmRzL2luZGV4XCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9