/*!
 * surveyjs - SurveyJS Analytics library v1.1.1
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("Survey"), require("Plotly"), require("c3"), require("Chart"), require("WordCloud"), require("jquery"));
    else if (typeof define === 'function' && define.amd)
        define("SurveyAnalytics", ["Survey", "Plotly", "c3", "Chart", "WordCloud", "jquery"], factory);
    else if (typeof exports === 'object')
        exports["SurveyAnalytics"] = factory(require("Survey"), require("Plotly"), require("c3"), require("Chart"), require("WordCloud"), require("jquery"));
    else
        root["SurveyAnalytics"] = factory(root["Survey"], root["Plotly"], root["c3"], root["Chart"], root["WordCloud"], root["jQuery"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__) {
    return /******/ (function (modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if (installedModules[moduleId])
                /******/ 			return installedModules[moduleId].exports;
            /******/
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/
            };
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// identity function for calling harmony imports with the correct context
        /******/ 	__webpack_require__.i = function (value) { return value; };
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function (exports, name, getter) {
            /******/ 		if (!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, {
                    /******/ 				configurable: false,
                    /******/ 				enumerable: true,
                    /******/ 				get: getter
                    /******/
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function (module) {
            /******/ 		var getter = module && module.__esModule ?
            /******/ 			function getDefault() { return module['default']; } :
            /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/
        };
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 38);
        /******/
    })
    /************************************************************************/
    /******/([
    /* 0 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

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
                for (var i = 0, propertySymbols = Object["getOwnPropertySymbols"](source) ; i < propertySymbols.length; i++)
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


        /***/
    }),
    /* 1 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase__ = __webpack_require__(2);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return VisualizationManager; });

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



        /***/
    }),
    /* 2 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return VisualizerBase; });
        var VisualizerBase = /** @class */ (function () {
            function VisualizerBase(targetElement, question, data, options) {
                this.targetElement = targetElement;
                this.question = question;
                this.data = data;
                this.options = options;
                this.backgroundColor = "#f7f7f7";
            }
            VisualizerBase.prototype.destroy = function () { };
            VisualizerBase.prototype.render = function () {
                this.targetElement.innerHTML = "This question type is not visualized yet";
            };
            VisualizerBase.prototype.invokeOnUpdate = function () {
                this.onUpdate && this.onUpdate();
            };
            VisualizerBase.prototype.getRandomColor = function () {
                var color = [];
                for (var i = 0; i < 3; i++) {
                    color[i] = Math.floor(Math.random() * 255);
                }
                return "rgba(" + color.join(", ") + ", 0.4)";
                var colors = this.getColors();
                return "#" + colors[Math.floor(Math.random() * colors.length)];
            };
            VisualizerBase.prototype.getColors = function () {
                var colors = [
                    "86e1fb",
                    "3999fb",
                    "ff6771",
                    "1eb496",
                    "ffc152",
                    "aba1ff",
                    "7d8da5",
                    "4ec46c",
                    "cf37a6",
                    "4e6198"
                ];
                var manyColors = [];
                for (var index = 0; index < 10; index++) {
                    manyColors = manyColors.concat(colors);
                }
                return manyColors;
            };
            return VisualizerBase;
        }());



        /***/
    }),
    /* 3 */
    /***/ (function (module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

        /***/
    }),
    /* 4 */
    /***/ (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

        /* jshint browser: true, strict: true, undef: true, unused: true */
        /* globals console: false */

        (function (window, factory) {
            /* jshint strict: false */ /* globals define, module */
            if (true) {
                // AMD
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
                            __WEBPACK_AMD_DEFINE_FACTORY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module == 'object' && module.exports) {
                // CommonJS
                module.exports = factory();
            } else {
                // browser global
                window.getSize = factory();
            }

        })(window, function factory() {
            'use strict';

            // -------------------------- helpers -------------------------- //

            // get a number from a string, not a percentage
            function getStyleSize(value) {
                var num = parseFloat(value);
                // not a percent like '100%', and a number
                var isValid = value.indexOf('%') == -1 && !isNaN(num);
                return isValid && num;
            }

            function noop() { }

            var logError = typeof console == 'undefined' ? noop :
              function (message) {
                  console.error(message);
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
                for (var i = 0; i < measurementsLength; i++) {
                    var measurement = measurements[i];
                    size[measurement] = 0;
                }
                return size;
            }

            // -------------------------- getStyle -------------------------- //

            /**
             * getStyle, get style of element, check for Firefox bug
             * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
             */
            function getStyle(elem) {
                var style = getComputedStyle(elem);
                if (!style) {
                    logError('Style returned ' + style +
                      '. Are you running this code in a hidden iframe on Firefox? ' +
                      'See https://bit.ly/getsizebug1');
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
                if (isSetup) {
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
                body.appendChild(div);
                var style = getStyle(div);
                // round value for browser zoom. desandro/masonry#928
                isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
                getSize.isBoxSizeOuter = isBoxSizeOuter;

                body.removeChild(div);
            }

            // -------------------------- getSize -------------------------- //

            function getSize(elem) {
                setup();

                // use querySeletor if elem is string
                if (typeof elem == 'string') {
                    elem = document.querySelector(elem);
                }

                // do not proceed on non-objects
                if (!elem || typeof elem != 'object' || !elem.nodeType) {
                    return;
                }

                var style = getStyle(elem);

                // if hidden, everything is 0
                if (style.display == 'none') {
                    return getZeroSize();
                }

                var size = {};
                size.width = elem.offsetWidth;
                size.height = elem.offsetHeight;

                var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

                // get all measurements
                for (var i = 0; i < measurementsLength; i++) {
                    var measurement = measurements[i];
                    var value = style[measurement];
                    var num = parseFloat(value);
                    // any 'auto', 'medium' value will be 0
                    size[measurement] = !isNaN(num) ? num : 0;
                }

                var paddingWidth = size.paddingLeft + size.paddingRight;
                var paddingHeight = size.paddingTop + size.paddingBottom;
                var marginWidth = size.marginLeft + size.marginRight;
                var marginHeight = size.marginTop + size.marginBottom;
                var borderWidth = size.borderLeftWidth + size.borderRightWidth;
                var borderHeight = size.borderTopWidth + size.borderBottomWidth;

                var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

                // overwrite width and height if we can get it from style
                var styleWidth = getStyleSize(style.width);
                if (styleWidth !== false) {
                    size.width = styleWidth +
                      // add padding and border unless it's already including it
                      (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
                }

                var styleHeight = getStyleSize(style.height);
                if (styleHeight !== false) {
                    size.height = styleHeight +
                      // add padding and border unless it's already including it
                      (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
                }

                size.innerWidth = size.width - (paddingWidth + borderWidth);
                size.innerHeight = size.height - (paddingHeight + borderHeight);

                size.outerWidth = size.width + marginWidth;
                size.outerHeight = size.height + marginHeight;

                return size;
            }

            return getSize;

        });


        /***/
    }),
    /* 5 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(35);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectBase__ = __webpack_require__(6);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return SelectBaseChartJS; });



        var SelectBaseChartJS = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBaseChartJS, _super);
            function SelectBaseChartJS(targetElement, question, data, options) {
                var _this = _super.call(this, targetElement, question, data, options) || this;
                _this.chartTypes = ["bar", "horizontalBar", "line", "pie", "doughnut"];
                _this.chartType = "horizontalBar";
                _this.chartNode = document.createElement("canvas");
                _this.toolbarChangeHandler = function (e) {
                    if (_this.chartType !== e.target.value) {
                        _this.chartType = e.target.value;
                        _this.chart.destroy();
                        _this.chart = _this.getChartJs(_this.chartNode, _this.chartType);
                    }
                };
                return _this;
            }
            SelectBaseChartJS.prototype.destroy = function () {
                if (!!this.chart) {
                    this.chart.destroy();
                    this.chart = undefined;
                    this.targetElement.innerHTML = "";
                }
            };
            SelectBaseChartJS.prototype.createChart = function () {
                this.chart = this.getChartJs(this.chartNode, this.chartType);
            };
            SelectBaseChartJS.prototype.getChartJs = function (chartNode, chartType) {
                var ctx = chartNode.getContext("2d");
                return new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, {
                    type: chartType,
                    data: {
                        labels: this.getLabels(),
                        datasets: this.getDatasets()
                    },
                    options: this.getOptions()
                });
            };
            SelectBaseChartJS.prototype.getOptions = function () {
                return {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: ["pie", "doughnut"].indexOf(this.chartType) !== -1
                        ? undefined
                        : {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                };
            };
            SelectBaseChartJS.prototype.getDatasets = function () {
                var _this = this;
                var question = this.question;
                return [
                    {
                        label: question.title,
                        data: this.getData()[0],
                        backgroundColor: this.getValues().map(function (_) { return _this.getRandomColor(); })
                    }
                ];
            };
            return SelectBaseChartJS;
        }(__WEBPACK_IMPORTED_MODULE_2__selectBase__["a" /* SelectBase */]));

        // VisualizationManager.registerVisualizer("checkbox", SelectBaseChartJS);
        // VisualizationManager.registerVisualizer("radiogroup", SelectBaseChartJS);
        // VisualizationManager.registerVisualizer("dropdown", SelectBaseChartJS);
        // VisualizationManager.registerVisualizer("imagepicker", SelectBaseChartJS);


        /***/
    }),
    /* 6 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return SelectBase; });



        var SelectBase = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBase, _super);
            function SelectBase(targetElement, question, data, options) {
                var _this = _super.call(this, targetElement, question, data, options) || this;
                _this.targetElement = targetElement;
                return _this;
            }
            SelectBase.prototype.toolbarChangeHandler = function (e) { };
            SelectBase.prototype.createChart = function () { };
            SelectBase.prototype.render = function () {
                var chartNodeContainer = document.createElement("div");
                var toolbarNodeContainer = document.createElement("div");
                chartNodeContainer.appendChild(toolbarNodeContainer);
                chartNodeContainer.appendChild(this.chartNode);
                this.targetElement.appendChild(chartNodeContainer);
                this.createToolbar(toolbarNodeContainer, this.toolbarChangeHandler);
                this.createChart();
            };
            SelectBase.prototype.createToolbar = function (container, changeHandler) {
                var _this = this;
                if (this.chartTypes.length > 0) {
                    var toolbar_1 = document.createElement("div");
                    toolbar_1.className = "sva-question__toolbar";
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
                    toolbar_1.appendChild(select_1);
                    container.appendChild(toolbar_1);
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



        /***/
    }),
    /* 7 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizationManager__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_masonry_layout__ = __webpack_require__(25);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_masonry_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_masonry_layout__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(23);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return VisualizationPanel; });



        var VisualizationPanel = /** @class */ (function () {
            function VisualizationPanel(targetElement, questions, data, options) {
                this.targetElement = targetElement;
                this.questions = questions;
                this.data = data;
                this.options = options;
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
                    var visualizer = _this.renderQuestionVisualication(vizualizerElement, question, _this.data);
                    visualizer.onUpdate = function () {
                        if (getMasonry()) {
                            getMasonry().layout();
                        }
                    };
                });
                msnry = new __WEBPACK_IMPORTED_MODULE_1_masonry_layout___default.a(this.targetElement, {
                    columnWidth: "." + gridSizerClassName,
                    itemSelector: "." + questionElementClassName
                });
            };
            VisualizationPanel.prototype.destroy = function () {
                this.targetElement.innerHTML = "";
            };
            VisualizationPanel.prototype.renderQuestionVisualication = function (vizualizerElement, question, data) {
                var visualizers = __WEBPACK_IMPORTED_MODULE_0__visualizationManager__["a" /* VisualizationManager */].getVisualizers(question.getType());
                var visualizer = new visualizers[0](vizualizerElement, question, data);
                visualizer.render();
                return visualizer;
            };
            return VisualizationPanel;
        }());



        /***/
    }),
    /* 8 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(7);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return VisualizationPanelDynamic; });




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


        /***/
    }),
    /* 9 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__english__ = __webpack_require__(34);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return textHelper; });

        var stopWordsDictionary = {};
        stopWordsDictionary["en"] = __WEBPACK_IMPORTED_MODULE_0__english__["a" /* stopWords */];
        var textHelper = {
            getStopWords: function (locale) {
                if (locale === void 0) { locale = ""; }
                return stopWordsDictionary[locale || "en"] || [];
            }
        };


        /***/
    }),
    /* 10 */
    /***/ (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

        /* jshint unused: true, undef: true, strict: true */

        (function (global, factory) {
            // universal module definition
            /* jshint strict: false */ /* globals define, module, window */
            if (true) {
                // AMD - RequireJS
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
                            __WEBPACK_AMD_DEFINE_FACTORY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module == 'object' && module.exports) {
                // CommonJS - Browserify, Webpack
                module.exports = factory();
            } else {
                // Browser globals
                global.EvEmitter = factory();
            }

        }(typeof window != 'undefined' ? window : this, function () {

            "use strict";

            function EvEmitter() { }

            var proto = EvEmitter.prototype;

            proto.on = function (eventName, listener) {
                if (!eventName || !listener) {
                    return;
                }
                // set events hash
                var events = this._events = this._events || {};
                // set listeners array
                var listeners = events[eventName] = events[eventName] || [];
                // only add once
                if (listeners.indexOf(listener) == -1) {
                    listeners.push(listener);
                }

                return this;
            };

            proto.once = function (eventName, listener) {
                if (!eventName || !listener) {
                    return;
                }
                // add event
                this.on(eventName, listener);
                // set once flag
                // set onceEvents hash
                var onceEvents = this._onceEvents = this._onceEvents || {};
                // set onceListeners object
                var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
                // set flag
                onceListeners[listener] = true;

                return this;
            };

            proto.off = function (eventName, listener) {
                var listeners = this._events && this._events[eventName];
                if (!listeners || !listeners.length) {
                    return;
                }
                var index = listeners.indexOf(listener);
                if (index != -1) {
                    listeners.splice(index, 1);
                }

                return this;
            };

            proto.emitEvent = function (eventName, args) {
                var listeners = this._events && this._events[eventName];
                if (!listeners || !listeners.length) {
                    return;
                }
                // copy over to avoid interference if .off() in listener
                listeners = listeners.slice(0);
                args = args || [];
                // once stuff
                var onceListeners = this._onceEvents && this._onceEvents[eventName];

                for (var i = 0; i < listeners.length; i++) {
                    var listener = listeners[i]
                    var isOnce = onceListeners && onceListeners[listener];
                    if (isOnce) {
                        // remove listener
                        // remove before trigger to prevent recursion
                        this.off(eventName, listener);
                        // unset once flag
                        delete onceListeners[listener];
                    }
                    // trigger listener
                    listener.apply(this, args);
                }

                return this;
            };

            proto.allOff = function () {
                delete this._events;
                delete this._onceEvents;
            };

            return EvEmitter;

        }));


        /***/
    }),
    /* 11 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c3__ = __webpack_require__(14);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_c3__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectBase__ = __webpack_require__(6);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return SelectBaseC3; });



        var SelectBaseC3 = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBaseC3, _super);
            function SelectBaseC3(targetElement, question, data, options) {
                var _this = _super.call(this, targetElement, question, data, options) || this;
                _this.targetElement = targetElement;
                _this.chartTypes = ["bar", "line", "pie", "donut"];
                _this.chartType = "bar";
                _this.chartNode = document.createElement("div");
                _this.toolbarChangeHandler = function (e) {
                    if (_this.chartType !== e.target.value) {
                        _this.chartType = e.target.value;
                        _this.chart.destroy();
                        _this.chart = _this.getChartC3(_this.chartNode, _this.chartType);
                    }
                };
                return _this;
            }
            SelectBaseC3.prototype.destroy = function () {
                if (!this.chart)
                    return;
                this.chart.destroy();
            };
            SelectBaseC3.prototype.createChart = function () {
                this.chart = this.getChartC3(this.chartNode, this.chartType);
            };
            SelectBaseC3.prototype.getChartC3 = function (chartNode, chartType) {
                var data = this.getData();
                var statistics = data[0];
                var columns = [["x"].concat(this.getLabels())];
                data.forEach(function (dataset, index) {
                    columns.push(["" + index].concat(dataset));
                });
                return __WEBPACK_IMPORTED_MODULE_1_c3___default.a.generate({
                    bindto: chartNode,
                    data: {
                        x: "x",
                        columns: columns,
                        type: this.chartType
                    },
                    color: {
                        pattern: this.getColors()
                    },
                    bar: {
                        width: {
                            ratio: 0.5 // this makes bar width 50% of length between ticks
                        }
                    },
                    axis: {
                        x: {
                            type: "category"
                        },
                        y: {
                            tick: {
                                values: statistics
                            }
                        }
                    },
                    tooltip: {
                        show: true
                    },
                    legend: {
                        show: false
                    }
                });
            };
            return SelectBaseC3;
        }(__WEBPACK_IMPORTED_MODULE_2__selectBase__["a" /* SelectBase */]));

        // VisualizationManager.registerVisualizer("checkbox", SelectBaseC3);
        // VisualizationManager.registerVisualizer("radiogroup", SelectBaseC3);
        // VisualizationManager.registerVisualizer("dropdown", SelectBaseC3);
        // VisualizationManager.registerVisualizer("imagepicker", SelectBaseC3);


        /***/
    }),
    /* 12 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js__ = __webpack_require__(13);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plotly_js__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(6);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return SelectBasePlotly; });




        var SelectBasePlotly = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBasePlotly, _super);
            function SelectBasePlotly(targetElement, question, data, options) {
                var _this = _super.call(this, targetElement, question, data, options) || this;
                _this.targetElement = targetElement;
                _this.chartTypes = ["bar", "pie", "scatter"];
                _this.chartType = "bar";
                _this.chartNode = document.createElement("div");
                _this.toolbarChangeHandler = function (e) {
                    if (_this.chartType !== e.target.value) {
                        _this.chartType = e.target.value;
                        _this.destroy();
                        _this.chart = _this.getPlotlyChart(_this.chartNode, _this.chartType);
                        _this.invokeOnUpdate();
                    }
                };
                return _this;
            }
            SelectBasePlotly.prototype.destroy = function () {
                __WEBPACK_IMPORTED_MODULE_1_plotly_js___default.a.purge(this.chartNode);
            };
            SelectBasePlotly.prototype.createChart = function () {
                this.chart = this.getPlotlyChart(this.chartNode, this.chartType);
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
                    y: labels,
                    labels: labels,
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
                    // title: question.name,
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
                return __WEBPACK_IMPORTED_MODULE_1_plotly_js___default.a.newPlot(chartNode, traces, layout, config);
            };
            return SelectBasePlotly;
        }(__WEBPACK_IMPORTED_MODULE_3__selectBase__["a" /* SelectBase */]));

        __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("checkbox", SelectBasePlotly);
        __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("radiogroup", SelectBasePlotly);
        __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("dropdown", SelectBasePlotly);
        __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("imagepicker", SelectBasePlotly);


        /***/
    }),
    /* 13 */
    /***/ (function (module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

        /***/
    }),
    /* 14 */
    /***/ (function (module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

        /***/
    }),
    /* 15 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix__ = __webpack_require__(28);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function () { return __WEBPACK_IMPORTED_MODULE_0__matrix__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectBase__ = __webpack_require__(11);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function () { return __WEBPACK_IMPORTED_MODULE_1__selectBase__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating__ = __webpack_require__(29);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function () { return __WEBPACK_IMPORTED_MODULE_2__rating__["a"]; });





        /***/
    }),
    /* 16 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix__ = __webpack_require__(30);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function () { return __WEBPACK_IMPORTED_MODULE_0__matrix__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectBase__ = __webpack_require__(5);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function () { return __WEBPACK_IMPORTED_MODULE_1__selectBase__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating__ = __webpack_require__(31);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function () { return __WEBPACK_IMPORTED_MODULE_2__rating__["a"]; });





        /***/
    }),
    /* 17 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(37);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datatables_scss__ = __webpack_require__(22);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datatables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__datatables_scss__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return DataTables; });


        var DataTables = /** @class */ (function () {
            function DataTables(targetNode, survey, data, options) {
                var _this = this;
                this.targetNode = targetNode;
                this.survey = survey;
                this.data = data;
                this.options = options;
                this.groupBy = [];
                this.createSelectButton = function (datatableApi, colIdx, columnName) {
                    var button = document.createElement("button");
                    button.innerHTML = "Select Me";
                    button.onclick = function (e) {
                        e.stopPropagation();
                        datatableApi.columns().deselect();
                        datatableApi.column(colIdx).select();
                        !!_this.onColumnSelected && _this.onColumnSelected(columnName);
                    };
                    return button;
                };
                this.createGroupingButton = function (datatableApi, columnName) {
                    var button = document.createElement("button");
                    button.innerHTML = "Group By Me";
                    button.onclick = function (e) {
                        e.stopPropagation();
                        var index = _this.groupBy.indexOf(columnName);
                        if (index === -1) {
                            _this.groupBy.push(columnName);
                            button.innerHTML = "Ungroup By Me";
                        }
                        else {
                            button.innerHTML = "Group By Me";
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
            }
            DataTables.prototype.render = function () {
                var tableNode = document.createElement("table");
                var createGroupingButton = this.createGroupingButton;
                var createSelectButton = this.createSelectButton;
                var columnsData = this.getColumns().map(function (c) { return c.data; });
                var options = this.options || {
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
                                var thNode = __WEBPACK_IMPORTED_MODULE_0_jquery__(this);
                                if (thNode.has("button").length === 0) {
                                    thNode.prepend(createGroupingButton(datatableApi, columnsData[index]));
                                    thNode.prepend(createSelectButton(datatableApi, index, columnsData[index]));
                                }
                            });
                    }
                };
                this.targetNode.appendChild(tableNode);
                tableNode.className = "sa-datatable display dataTable";
                var datatableApi = __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).DataTable(options);
                datatableApi
                    .rowGroup()
                    .enable(false)
                    .draw();
                // datatableApi.on("rowgroup-datasrc", function(e, dt, val) {
                // datatableApi.order.fixed({ pre: [[columnsData.indexOf(val), "asc"]] }).draw();
                // });
            };
            DataTables.prototype.getColumns = function () {
                var _this = this;
                var columns = this.survey.getAllQuestions().map(function (question) {
                    var q = question;
                    return {
                        data: q.name,
                        sTitle: (q.title || "").trim() || q.name,
                        mRender: function (data, type, row) {
                            _this.survey.data = row;
                            var displayValue = q.displayValue;
                            return ((typeof displayValue === "string"
                                ? displayValue
                                : JSON.stringify(displayValue)) || "");
                        }
                    };
                });
                return columns;
            };
            return DataTables;
        }());



        /***/
    }),
    /* 18 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectBase__ = __webpack_require__(12);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function () { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating__ = __webpack_require__(33);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function () { return __WEBPACK_IMPORTED_MODULE_1__rating__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(32);
        /* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function () { return __WEBPACK_IMPORTED_MODULE_2__matrix__["a"]; });





        /***/
    }),
    /* 19 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationPanelDynamic__ = __webpack_require__(8);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return VisualizationMatrixDynamic; });



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


        /***/
    }),
    /* 20 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud__ = __webpack_require__(36);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wordcloud__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationManager__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stopwords_index__ = __webpack_require__(9);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return WordCloud; });





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


        /***/
    }),
    /* 21 */
    /***/ (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

        /*jshint browser: true, strict: true, undef: true, unused: true */

        (function (window, factory) {
            /*global define: false, module: false */
            'use strict';
            // universal module definition
            if (true) {
                // AMD
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
                            __WEBPACK_AMD_DEFINE_FACTORY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module == 'object' && module.exports) {
                // CommonJS
                module.exports = factory();
            } else {
                // browser global
                window.matchesSelector = factory();
            }

        }(window, function factory() {
            'use strict';

            var matchesMethod = (function () {
                var ElemProto = window.Element.prototype;
                // check for the standard method name first
                if (ElemProto.matches) {
                    return 'matches';
                }
                // check un-prefixed
                if (ElemProto.matchesSelector) {
                    return 'matchesSelector';
                }
                // check vendor prefixes
                var prefixes = ['webkit', 'moz', 'ms', 'o'];

                for (var i = 0; i < prefixes.length; i++) {
                    var prefix = prefixes[i];
                    var method = prefix + 'MatchesSelector';
                    if (ElemProto[method]) {
                        return method;
                    }
                }
            })();

            return function matchesSelector(elem, selector) {
                return elem[matchesMethod](selector);
            };

        }));


        /***/
    }),
    /* 22 */
    /***/ (function (module, exports) {

        // removed by extract-text-webpack-plugin

        /***/
    }),
    /* 23 */
    /***/ (function (module, exports) {

        // removed by extract-text-webpack-plugin

        /***/
    }),
    /* 24 */
    /***/ (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

        /*jshint browser: true, undef: true, unused: true, strict: true */

        (function (window, factory) {
            // universal module definition
            /*jshint strict: false */ /*globals define, module, require */

            if (true) {
                // AMD
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                  __webpack_require__(21)
                ], __WEBPACK_AMD_DEFINE_RESULT__ = function (matchesSelector) {
                    return factory(window, matchesSelector);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module == 'object' && module.exports) {
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

        }(window, function factory(window, matchesSelector) {

            'use strict';

            var utils = {};

            // ----- extend ----- //

            // extends objects
            utils.extend = function (a, b) {
                for (var prop in b) {
                    a[prop] = b[prop];
                }
                return a;
            };

            // ----- modulo ----- //

            utils.modulo = function (num, div) {
                return ((num % div) + div) % div;
            };

            // ----- makeArray ----- //

            var arraySlice = Array.prototype.slice;

            // turn element or nodeList into an array
            utils.makeArray = function (obj) {
                if (Array.isArray(obj)) {
                    // use object if already an array
                    return obj;
                }
                // return empty array if undefined or null. #6
                if (obj === null || obj === undefined) {
                    return [];
                }

                var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
                if (isArrayLike) {
                    // convert nodeList to array
                    return arraySlice.call(obj);
                }

                // array of single index
                return [obj];
            };

            // ----- removeFrom ----- //

            utils.removeFrom = function (ary, obj) {
                var index = ary.indexOf(obj);
                if (index != -1) {
                    ary.splice(index, 1);
                }
            };

            // ----- getParent ----- //

            utils.getParent = function (elem, selector) {
                while (elem.parentNode && elem != document.body) {
                    elem = elem.parentNode;
                    if (matchesSelector(elem, selector)) {
                        return elem;
                    }
                }
            };

            // ----- getQueryElement ----- //

            // use element as selector string
            utils.getQueryElement = function (elem) {
                if (typeof elem == 'string') {
                    return document.querySelector(elem);
                }
                return elem;
            };

            // ----- handleEvent ----- //

            // enable .ontype to trigger from .addEventListener( elem, 'type' )
            utils.handleEvent = function (event) {
                var method = 'on' + event.type;
                if (this[method]) {
                    this[method](event);
                }
            };

            // ----- filterFindElements ----- //

            utils.filterFindElements = function (elems, selector) {
                // make array of elems
                elems = utils.makeArray(elems);
                var ffElems = [];

                elems.forEach(function (elem) {
                    // check that elem is an actual element
                    if (!(elem instanceof HTMLElement)) {
                        return;
                    }
                    // add elem if no selector
                    if (!selector) {
                        ffElems.push(elem);
                        return;
                    }
                    // filter & find items if we have a selector
                    // filter
                    if (matchesSelector(elem, selector)) {
                        ffElems.push(elem);
                    }
                    // find children
                    var childElems = elem.querySelectorAll(selector);
                    // concat childElems to filterFound array
                    for (var i = 0; i < childElems.length; i++) {
                        ffElems.push(childElems[i]);
                    }
                });

                return ffElems;
            };

            // ----- debounceMethod ----- //

            utils.debounceMethod = function (_class, methodName, threshold) {
                threshold = threshold || 100;
                // original method
                var method = _class.prototype[methodName];
                var timeoutName = methodName + 'Timeout';

                _class.prototype[methodName] = function () {
                    var timeout = this[timeoutName];
                    clearTimeout(timeout);

                    var args = arguments;
                    var _this = this;
                    this[timeoutName] = setTimeout(function () {
                        method.apply(_this, args);
                        delete _this[timeoutName];
                    }, threshold);
                };
            };

            // ----- docReady ----- //

            utils.docReady = function (callback) {
                var readyState = document.readyState;
                if (readyState == 'complete' || readyState == 'interactive') {
                    // do async to allow for other scripts to run. metafizzy/flickity#441
                    setTimeout(callback);
                } else {
                    document.addEventListener('DOMContentLoaded', callback);
                }
            };

            // ----- htmlInit ----- //

            // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
            utils.toDashed = function (str) {
                return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
                    return $1 + '-' + $2;
                }).toLowerCase();
            };

            var console = window.console;
            /**
             * allow user to initialize classes via [data-namespace] or .js-namespace class
             * htmlInit( Widget, 'widgetName' )
             * options are parsed from data-namespace-options
             */
            utils.htmlInit = function (WidgetClass, namespace) {
                utils.docReady(function () {
                    var dashedNamespace = utils.toDashed(namespace);
                    var dataAttr = 'data-' + dashedNamespace;
                    var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
                    var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
                    var elems = utils.makeArray(dataAttrElems)
                      .concat(utils.makeArray(jsDashElems));
                    var dataOptionsAttr = dataAttr + '-options';
                    var jQuery = window.jQuery;

                    elems.forEach(function (elem) {
                        var attr = elem.getAttribute(dataAttr) ||
                          elem.getAttribute(dataOptionsAttr);
                        var options;
                        try {
                            options = attr && JSON.parse(attr);
                        } catch (error) {
                            // log error, do not initialize
                            if (console) {
                                console.error('Error parsing ' + dataAttr + ' on ' + elem.className +
                                ': ' + error);
                            }
                            return;
                        }
                        // initialize
                        var instance = new WidgetClass(elem, options);
                        // make available via $().data('namespace')
                        if (jQuery) {
                            jQuery.data(elem, namespace, instance);
                        }
                    });

                });
            };

            // -----  ----- //

            return utils;

        }));


        /***/
    }),
    /* 25 */
    /***/ (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

        (function (window, factory) {
            // universal module definition
            /* jshint strict: false */ /*globals define, module, require */
            if (true) {
                // AMD
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                    __webpack_require__(27),
                    __webpack_require__(4)
                ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module == 'object' && module.exports) {
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

        }(window, function factory(Outlayer, getSize) {

            'use strict';

            // -------------------------- masonryDefinition -------------------------- //

            // create an Outlayer layout class
            var Masonry = Outlayer.create('masonry');
            // isFitWidth -> fitWidth
            Masonry.compatOptions.fitWidth = 'isFitWidth';

            var proto = Masonry.prototype;

            proto._resetLayout = function () {
                this.getSize();
                this._getMeasurement('columnWidth', 'outerWidth');
                this._getMeasurement('gutter', 'outerWidth');
                this.measureColumns();

                // reset column Y
                this.colYs = [];
                for (var i = 0; i < this.cols; i++) {
                    this.colYs.push(0);
                }

                this.maxY = 0;
                this.horizontalColIndex = 0;
            };

            proto.measureColumns = function () {
                this.getContainerWidth();
                // if columnWidth is 0, default to outerWidth of first item
                if (!this.columnWidth) {
                    var firstItem = this.items[0];
                    var firstItemElem = firstItem && firstItem.element;
                    // columnWidth fall back to item of first element
                    this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
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
                cols = Math[mathMethod](cols);
                this.cols = Math.max(cols, 1);
            };

            proto.getContainerWidth = function () {
                // container is parent if fit width
                var isFitWidth = this._getOption('fitWidth');
                var container = isFitWidth ? this.element.parentNode : this.element;
                // check that this.size and size are there
                // IE8 triggers resize on body size change, so they might not be
                var size = getSize(container);
                this.containerWidth = size && size.innerWidth;
            };

            proto._getItemLayoutPosition = function (item) {
                item.getSize();
                // how many columns does this brick span
                var remainder = item.size.outerWidth % this.columnWidth;
                var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
                // round if off by 1 pixel, otherwise use ceil
                var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
                colSpan = Math.min(colSpan, this.cols);
                // use horizontal or top column position
                var colPosMethod = this.options.horizontalOrder ?
                  '_getHorizontalColPosition' : '_getTopColPosition';
                var colPosition = this[colPosMethod](colSpan, item);
                // position the brick
                var position = {
                    x: this.columnWidth * colPosition.col,
                    y: colPosition.y
                };
                // apply setHeight to necessary columns
                var setHeight = colPosition.y + item.size.outerHeight;
                var setMax = colSpan + colPosition.col;
                for (var i = colPosition.col; i < setMax; i++) {
                    this.colYs[i] = setHeight;
                }

                return position;
            };

            proto._getTopColPosition = function (colSpan) {
                var colGroup = this._getTopColGroup(colSpan);
                // get the minimum Y value from the columns
                var minimumY = Math.min.apply(Math, colGroup);

                return {
                    col: colGroup.indexOf(minimumY),
                    y: minimumY,
                };
            };

            /**
             * @param {Number} colSpan - number of columns the element spans
             * @returns {Array} colGroup
             */
            proto._getTopColGroup = function (colSpan) {
                if (colSpan < 2) {
                    // if brick spans only one column, use all the column Ys
                    return this.colYs;
                }

                var colGroup = [];
                // how many different places could this brick fit horizontally
                var groupCount = this.cols + 1 - colSpan;
                // for each group potential horizontal position
                for (var i = 0; i < groupCount; i++) {
                    colGroup[i] = this._getColGroupY(i, colSpan);
                }
                return colGroup;
            };

            proto._getColGroupY = function (col, colSpan) {
                if (colSpan < 2) {
                    return this.colYs[col];
                }
                // make an array of colY values for that one group
                var groupColYs = this.colYs.slice(col, col + colSpan);
                // and get the max value of the array
                return Math.max.apply(Math, groupColYs);
            };

            // get column position based on horizontal index. #873
            proto._getHorizontalColPosition = function (colSpan, item) {
                var col = this.horizontalColIndex % this.cols;
                var isOver = colSpan > 1 && col + colSpan > this.cols;
                // shift to next row if item can't fit on current row
                col = isOver ? 0 : col;
                // don't let zero-size items take up space
                var hasSize = item.size.outerWidth && item.size.outerHeight;
                this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

                return {
                    col: col,
                    y: this._getColGroupY(col, colSpan),
                };
            };

            proto._manageStamp = function (stamp) {
                var stampSize = getSize(stamp);
                var offset = this._getElementOffset(stamp);
                // get the columns that this stamp affects
                var isOriginLeft = this._getOption('originLeft');
                var firstX = isOriginLeft ? offset.left : offset.right;
                var lastX = firstX + stampSize.outerWidth;
                var firstCol = Math.floor(firstX / this.columnWidth);
                firstCol = Math.max(0, firstCol);
                var lastCol = Math.floor(lastX / this.columnWidth);
                // lastCol should not go over if multiple of columnWidth #425
                lastCol -= lastX % this.columnWidth ? 0 : 1;
                lastCol = Math.min(this.cols - 1, lastCol);
                // set colYs to bottom of the stamp

                var isOriginTop = this._getOption('originTop');
                var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
                  stampSize.outerHeight;
                for (var i = firstCol; i <= lastCol; i++) {
                    this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
                }
            };

            proto._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var size = {
                    height: this.maxY
                };

                if (this._getOption('fitWidth')) {
                    size.width = this._getContainerFitWidth();
                }

                return size;
            };

            proto._getContainerFitWidth = function () {
                var unusedCols = 0;
                // count unused columns
                var i = this.cols;
                while (--i) {
                    if (this.colYs[i] !== 0) {
                        break;
                    }
                    unusedCols++;
                }
                // fit container to columns that have been used
                return (this.cols - unusedCols) * this.columnWidth - this.gutter;
            };

            proto.needsResizeLayout = function () {
                var previousWidth = this.containerWidth;
                this.getContainerWidth();
                return previousWidth != this.containerWidth;
            };

            return Masonry;

        }));


        /***/
    }),
    /* 26 */
    /***/ (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

        (function (window, factory) {
            // universal module definition
            /* jshint strict: false */ /* globals define, module, require */
            if (true) {
                // AMD - RequireJS
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                    __webpack_require__(10),
                    __webpack_require__(4)
                ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module == 'object' && module.exports) {
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

        }(window, function factory(EvEmitter, getSize) {
            'use strict';

            // ----- helpers ----- //

            function isEmptyObj(obj) {
                for (var prop in obj) {
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
            }[transitionProperty];

            // cache all vendor properties that could have vendor prefix
            var vendorProperties = {
                transform: transformProperty,
                transition: transitionProperty,
                transitionDuration: transitionProperty + 'Duration',
                transitionProperty: transitionProperty + 'Property',
                transitionDelay: transitionProperty + 'Delay'
            };

            // -------------------------- Item -------------------------- //

            function Item(element, layout) {
                if (!element) {
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
            var proto = Item.prototype = Object.create(EvEmitter.prototype);
            proto.constructor = Item;

            proto._create = function () {
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
            proto.handleEvent = function (event) {
                var method = 'on' + event.type;
                if (this[method]) {
                    this[method](event);
                }
            };

            proto.getSize = function () {
                this.size = getSize(this.element);
            };

            /**
             * apply CSS styles to element
             * @param {Object} style
             */
            proto.css = function (style) {
                var elemStyle = this.element.style;

                for (var prop in style) {
                    // use vendor property if available
                    var supportedProp = vendorProperties[prop] || prop;
                    elemStyle[supportedProp] = style[prop];
                }
            };

            // measure position, and sets it
            proto.getPosition = function () {
                var style = getComputedStyle(this.element);
                var isOriginLeft = this.layout._getOption('originLeft');
                var isOriginTop = this.layout._getOption('originTop');
                var xValue = style[isOriginLeft ? 'left' : 'right'];
                var yValue = style[isOriginTop ? 'top' : 'bottom'];
                var x = parseFloat(xValue);
                var y = parseFloat(yValue);
                // convert percent to pixels
                var layoutSize = this.layout.size;
                if (xValue.indexOf('%') != -1) {
                    x = (x / 100) * layoutSize.width;
                }
                if (yValue.indexOf('%') != -1) {
                    y = (y / 100) * layoutSize.height;
                }
                // clean up 'auto' or other non-integer values
                x = isNaN(x) ? 0 : x;
                y = isNaN(y) ? 0 : y;
                // remove padding from measurement
                x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
                y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

                this.position.x = x;
                this.position.y = y;
            };

            // set settled position, apply padding
            proto.layoutPosition = function () {
                var layoutSize = this.layout.size;
                var style = {};
                var isOriginLeft = this.layout._getOption('originLeft');
                var isOriginTop = this.layout._getOption('originTop');

                // x
                var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
                var xProperty = isOriginLeft ? 'left' : 'right';
                var xResetProperty = isOriginLeft ? 'right' : 'left';

                var x = this.position.x + layoutSize[xPadding];
                // set in percentage or pixels
                style[xProperty] = this.getXValue(x);
                // reset other property
                style[xResetProperty] = '';

                // y
                var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
                var yProperty = isOriginTop ? 'top' : 'bottom';
                var yResetProperty = isOriginTop ? 'bottom' : 'top';

                var y = this.position.y + layoutSize[yPadding];
                // set in percentage or pixels
                style[yProperty] = this.getYValue(y);
                // reset other property
                style[yResetProperty] = '';

                this.css(style);
                this.emitEvent('layout', [this]);
            };

            proto.getXValue = function (x) {
                var isHorizontal = this.layout._getOption('horizontal');
                return this.layout.options.percentPosition && !isHorizontal ?
                  ((x / this.layout.size.width) * 100) + '%' : x + 'px';
            };

            proto.getYValue = function (y) {
                var isHorizontal = this.layout._getOption('horizontal');
                return this.layout.options.percentPosition && isHorizontal ?
                  ((y / this.layout.size.height) * 100) + '%' : y + 'px';
            };

            proto._transitionTo = function (x, y) {
                this.getPosition();
                // get current x & y from top/left
                var curX = this.position.x;
                var curY = this.position.y;

                var didNotMove = x == this.position.x && y == this.position.y;

                // save end position
                this.setPosition(x, y);

                // if did not move and not transitioning, just go to layout
                if (didNotMove && !this.isTransitioning) {
                    this.layoutPosition();
                    return;
                }

                var transX = x - curX;
                var transY = y - curY;
                var transitionStyle = {};
                transitionStyle.transform = this.getTranslate(transX, transY);

                this.transition({
                    to: transitionStyle,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: true
                });
            };

            proto.getTranslate = function (x, y) {
                // flip cooridinates if origin on right or bottom
                var isOriginLeft = this.layout._getOption('originLeft');
                var isOriginTop = this.layout._getOption('originTop');
                x = isOriginLeft ? x : -x;
                y = isOriginTop ? y : -y;
                return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            };

            // non transition + transform support
            proto.goTo = function (x, y) {
                this.setPosition(x, y);
                this.layoutPosition();
            };

            proto.moveTo = proto._transitionTo;

            proto.setPosition = function (x, y) {
                this.position.x = parseFloat(x);
                this.position.y = parseFloat(y);
            };

            // ----- transition ----- //

            /**
             * @param {Object} style - CSS
             * @param {Function} onTransitionEnd
             */

            // non transition, just trigger callback
            proto._nonTransition = function (args) {
                this.css(args.to);
                if (args.isCleaning) {
                    this._removeStyles(args.to);
                }
                for (var prop in args.onTransitionEnd) {
                    args.onTransitionEnd[prop].call(this);
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
            proto.transition = function (args) {
                // redirect to nonTransition if no transition duration
                if (!parseFloat(this.layout.options.transitionDuration)) {
                    this._nonTransition(args);
                    return;
                }

                var _transition = this._transn;
                // keep track of onTransitionEnd callback by css property
                for (var prop in args.onTransitionEnd) {
                    _transition.onEnd[prop] = args.onTransitionEnd[prop];
                }
                // keep track of properties that are transitioning
                for (prop in args.to) {
                    _transition.ingProperties[prop] = true;
                    // keep track of properties to clean up when transition is done
                    if (args.isCleaning) {
                        _transition.clean[prop] = true;
                    }
                }

                // set from styles
                if (args.from) {
                    this.css(args.from);
                    // force redraw. http://blog.alexmaccaw.com/css-transitions
                    var h = this.element.offsetHeight;
                    // hack for JSHint to hush about unused var
                    h = null;
                }
                // enable transition
                this.enableTransition(args.to);
                // set styles that are transitioning
                this.css(args.to);

                this.isTransitioning = true;

            };

            // dash before all cap letters, including first for
            // WebkitTransform => -webkit-transform
            function toDashedAll(str) {
                return str.replace(/([A-Z])/g, function ($1) {
                    return '-' + $1.toLowerCase();
                });
            }

            var transitionProps = 'opacity,' + toDashedAll(transformProperty);

            proto.enableTransition = function (/* style */) {
                // HACK changing transitionProperty during a transition
                // will cause transition to jump
                if (this.isTransitioning) {
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
                this.element.addEventListener(transitionEndEvent, this, false);
            };

            // ----- events ----- //

            proto.onwebkitTransitionEnd = function (event) {
                this.ontransitionend(event);
            };

            proto.onotransitionend = function (event) {
                this.ontransitionend(event);
            };

            // properties that I munge to make my life easier
            var dashedVendorProperties = {
                '-webkit-transform': 'transform'
            };

            proto.ontransitionend = function (event) {
                // disregard bubbled events from children
                if (event.target !== this.element) {
                    return;
                }
                var _transition = this._transn;
                // get property name of transitioned property, convert to prefix-free
                var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;

                // remove property that has completed transitioning
                delete _transition.ingProperties[propertyName];
                // check if any properties are still transitioning
                if (isEmptyObj(_transition.ingProperties)) {
                    // all properties have completed transitioning
                    this.disableTransition();
                }
                // clean style
                if (propertyName in _transition.clean) {
                    // clean up style
                    this.element.style[event.propertyName] = '';
                    delete _transition.clean[propertyName];
                }
                // trigger onTransitionEnd callback
                if (propertyName in _transition.onEnd) {
                    var onTransitionEnd = _transition.onEnd[propertyName];
                    onTransitionEnd.call(this);
                    delete _transition.onEnd[propertyName];
                }

                this.emitEvent('transitionEnd', [this]);
            };

            proto.disableTransition = function () {
                this.removeTransitionStyles();
                this.element.removeEventListener(transitionEndEvent, this, false);
                this.isTransitioning = false;
            };

            /**
             * removes style property from element
             * @param {Object} style
            **/
            proto._removeStyles = function (style) {
                // clean up transition styles
                var cleanStyle = {};
                for (var prop in style) {
                    cleanStyle[prop] = '';
                }
                this.css(cleanStyle);
            };

            var cleanTransitionStyle = {
                transitionProperty: '',
                transitionDuration: '',
                transitionDelay: ''
            };

            proto.removeTransitionStyles = function () {
                // remove transition
                this.css(cleanTransitionStyle);
            };

            // ----- stagger ----- //

            proto.stagger = function (delay) {
                delay = isNaN(delay) ? 0 : delay;
                this.staggerDelay = delay + 'ms';
            };

            // ----- show/hide/remove ----- //

            // remove element from DOM
            proto.removeElem = function () {
                this.element.parentNode.removeChild(this.element);
                // remove display: none
                this.css({ display: '' });
                this.emitEvent('remove', [this]);
            };

            proto.remove = function () {
                // just remove element if no transition support or no transition
                if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
                    this.removeElem();
                    return;
                }

                // start transition
                this.once('transitionEnd', function () {
                    this.removeElem();
                });
                this.hide();
            };

            proto.reveal = function () {
                delete this.isHidden;
                // remove display: none
                this.css({ display: '' });

                var options = this.layout.options;

                var onTransitionEnd = {};
                var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
                onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;

                this.transition({
                    from: options.hiddenStyle,
                    to: options.visibleStyle,
                    isCleaning: true,
                    onTransitionEnd: onTransitionEnd
                });
            };

            proto.onRevealTransitionEnd = function () {
                // check if still visible
                // during transition, item may have been hidden
                if (!this.isHidden) {
                    this.emitEvent('reveal');
                }
            };

            /**
             * get style property use for hide/reveal transition end
             * @param {String} styleProperty - hiddenStyle/visibleStyle
             * @returns {String}
             */
            proto.getHideRevealTransitionEndProperty = function (styleProperty) {
                var optionStyle = this.layout.options[styleProperty];
                // use opacity
                if (optionStyle.opacity) {
                    return 'opacity';
                }
                // get first property
                for (var prop in optionStyle) {
                    return prop;
                }
            };

            proto.hide = function () {
                // set flag
                this.isHidden = true;
                // remove display: none
                this.css({ display: '' });

                var options = this.layout.options;

                var onTransitionEnd = {};
                var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
                onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;

                this.transition({
                    from: options.visibleStyle,
                    to: options.hiddenStyle,
                    // keep hidden stuff hidden
                    isCleaning: true,
                    onTransitionEnd: onTransitionEnd
                });
            };

            proto.onHideTransitionEnd = function () {
                // check if still hidden
                // during transition, item may have been un-hidden
                if (this.isHidden) {
                    this.css({ display: 'none' });
                    this.emitEvent('hide');
                }
            };

            proto.destroy = function () {
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


        /***/
    }),
    /* 27 */
    /***/ (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

        (function (window, factory) {
            'use strict';
            // universal module definition
            /* jshint strict: false */ /* globals define, module, require */
            if (true) {
                // AMD - RequireJS
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                    __webpack_require__(10),
                    __webpack_require__(4),
                    __webpack_require__(24),
                    __webpack_require__(26)
                ], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter, getSize, utils, Item) {
                    return factory(window, EvEmitter, getSize, utils, Item);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module == 'object' && module.exports) {
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

        }(window, function factory(window, EvEmitter, getSize, utils, Item) {
            'use strict';

            // ----- vars ----- //

            var console = window.console;
            var jQuery = window.jQuery;
            var noop = function () { };

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
            function Outlayer(element, options) {
                var queryElement = utils.getQueryElement(element);
                if (!queryElement) {
                    if (console) {
                        console.error('Bad element for ' + this.constructor.namespace +
                          ': ' + (queryElement || element));
                    }
                    return;
                }
                this.element = queryElement;
                // add jQuery
                if (jQuery) {
                    this.$element = jQuery(this.element);
                }

                // options
                this.options = utils.extend({}, this.constructor.defaults);
                this.option(options);

                // add id for Outlayer.getFromElement
                var id = ++GUID;
                this.element.outlayerGUID = id; // expando
                instances[id] = this; // associate via id

                // kick it off
                this._create();

                var isInitLayout = this._getOption('initLayout');
                if (isInitLayout) {
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
            utils.extend(proto, EvEmitter.prototype);

            /**
             * set options
             * @param {Object} opts
             */
            proto.option = function (opts) {
                utils.extend(this.options, opts);
            };

            /**
             * get backwards compatible option value, check old name
             */
            proto._getOption = function (option) {
                var oldOption = this.constructor.compatOptions[option];
                return oldOption && this.options[oldOption] !== undefined ?
                  this.options[oldOption] : this.options[option];
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

            proto._create = function () {
                // get items from children
                this.reloadItems();
                // elements that affect layout, but are not laid out
                this.stamps = [];
                this.stamp(this.options.stamp);
                // set container style
                utils.extend(this.element.style, this.options.containerStyle);

                // bind resize method
                var canBindResize = this._getOption('resize');
                if (canBindResize) {
                    this.bindResize();
                }
            };

            // goes through all children again and gets bricks in proper order
            proto.reloadItems = function () {
                // collection of item elements
                this.items = this._itemize(this.element.children);
            };


            /**
             * turn elements into Outlayer.Items to be used in layout
             * @param {Array or NodeList or HTMLElement} elems
             * @returns {Array} items - collection of new Outlayer Items
             */
            proto._itemize = function (elems) {

                var itemElems = this._filterFindItemElements(elems);
                var Item = this.constructor.Item;

                // create new Outlayer Items for collection
                var items = [];
                for (var i = 0; i < itemElems.length; i++) {
                    var elem = itemElems[i];
                    var item = new Item(elem, this);
                    items.push(item);
                }

                return items;
            };

            /**
             * get item elements to be used in layout
             * @param {Array or NodeList or HTMLElement} elems
             * @returns {Array} items - item elements
             */
            proto._filterFindItemElements = function (elems) {
                return utils.filterFindElements(elems, this.options.itemSelector);
            };

            /**
             * getter method for getting item elements
             * @returns {Array} elems - collection of item elements
             */
            proto.getItemElements = function () {
                return this.items.map(function (item) {
                    return item.element;
                });
            };

            // ----- init & layout ----- //

            /**
             * lays out all items
             */
            proto.layout = function () {
                this._resetLayout();
                this._manageStamps();

                // don't animate first layout
                var layoutInstant = this._getOption('layoutInstant');
                var isInstant = layoutInstant !== undefined ?
                    layoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, isInstant);

                // flag for initalized
                this._isLayoutInited = true;
            };

            // _init is alias for layout
            proto._init = proto.layout;

            /**
             * logic before any new layout
             */
            proto._resetLayout = function () {
                this.getSize();
            };


            proto.getSize = function () {
                this.size = getSize(this.element);
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
            proto._getMeasurement = function (measurement, size) {
                var option = this.options[measurement];
                var elem;
                if (!option) {
                    // default to 0
                    this[measurement] = 0;
                } else {
                    // use option as an element
                    if (typeof option == 'string') {
                        elem = this.element.querySelector(option);
                    } else if (option instanceof HTMLElement) {
                        elem = option;
                    }
                    // use size of element, if element
                    this[measurement] = elem ? getSize(elem)[size] : option;
                }
            };

            /**
             * layout a collection of item elements
             * @api public
             */
            proto.layoutItems = function (items, isInstant) {
                items = this._getItemsForLayout(items);

                this._layoutItems(items, isInstant);

                this._postLayout();
            };

            /**
             * get the items to be laid out
             * you may want to skip over some items
             * @param {Array} items
             * @returns {Array} items
             */
            proto._getItemsForLayout = function (items) {
                return items.filter(function (item) {
                    return !item.isIgnored;
                });
            };

            /**
             * layout items
             * @param {Array} items
             * @param {Boolean} isInstant
             */
            proto._layoutItems = function (items, isInstant) {
                this._emitCompleteOnItems('layout', items);

                if (!items || !items.length) {
                    // no items, emit event with empty array
                    return;
                }

                var queue = [];

                items.forEach(function (item) {
                    // get x/y object from method
                    var position = this._getItemLayoutPosition(item);
                    // enqueue
                    position.item = item;
                    position.isInstant = isInstant || item.isLayoutInstant;
                    queue.push(position);
                }, this);

                this._processLayoutQueue(queue);
            };

            /**
             * get item layout position
             * @param {Outlayer.Item} item
             * @returns {Object} x and y position
             */
            proto._getItemLayoutPosition = function ( /* item */) {
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
            proto._processLayoutQueue = function (queue) {
                this.updateStagger();
                queue.forEach(function (obj, i) {
                    this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
                }, this);
            };

            // set stagger from option in milliseconds number
            proto.updateStagger = function () {
                var stagger = this.options.stagger;
                if (stagger === null || stagger === undefined) {
                    this.stagger = 0;
                    return;
                }
                this.stagger = getMilliseconds(stagger);
                return this.stagger;
            };

            /**
             * Sets position of item in DOM
             * @param {Outlayer.Item} item
             * @param {Number} x - horizontal position
             * @param {Number} y - vertical position
             * @param {Boolean} isInstant - disables transitions
             */
            proto._positionItem = function (item, x, y, isInstant, i) {
                if (isInstant) {
                    // if not transition, just set CSS
                    item.goTo(x, y);
                } else {
                    item.stagger(i * this.stagger);
                    item.moveTo(x, y);
                }
            };

            /**
             * Any logic you want to do after each layout,
             * i.e. size the container
             */
            proto._postLayout = function () {
                this.resizeContainer();
            };

            proto.resizeContainer = function () {
                var isResizingContainer = this._getOption('resizeContainer');
                if (!isResizingContainer) {
                    return;
                }
                var size = this._getContainerSize();
                if (size) {
                    this._setContainerMeasure(size.width, true);
                    this._setContainerMeasure(size.height, false);
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
            proto._setContainerMeasure = function (measure, isWidth) {
                if (measure === undefined) {
                    return;
                }

                var elemSize = this.size;
                // add padding and border width if border box
                if (elemSize.isBorderBox) {
                    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                      elemSize.borderLeftWidth + elemSize.borderRightWidth :
                      elemSize.paddingBottom + elemSize.paddingTop +
                      elemSize.borderTopWidth + elemSize.borderBottomWidth;
                }

                measure = Math.max(measure, 0);
                this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
            };

            /**
             * emit eventComplete on a collection of items events
             * @param {String} eventName
             * @param {Array} items - Outlayer.Items
             */
            proto._emitCompleteOnItems = function (eventName, items) {
                var _this = this;
                function onComplete() {
                    _this.dispatchEvent(eventName + 'Complete', null, [items]);
                }

                var count = items.length;
                if (!items || !count) {
                    onComplete();
                    return;
                }

                var doneCount = 0;
                function tick() {
                    doneCount++;
                    if (doneCount == count) {
                        onComplete();
                    }
                }

                // bind callback
                items.forEach(function (item) {
                    item.once(eventName, tick);
                });
            };

            /**
             * emits events via EvEmitter and jQuery events
             * @param {String} type - name of event
             * @param {Event} event - original event
             * @param {Array} args - extra arguments
             */
            proto.dispatchEvent = function (type, event, args) {
                // add original event to arguments
                var emitArgs = event ? [event].concat(args) : args;
                this.emitEvent(type, emitArgs);

                if (jQuery) {
                    // set this.$element
                    this.$element = this.$element || jQuery(this.element);
                    if (event) {
                        // create jQuery event
                        var $event = jQuery.Event(event);
                        $event.type = type;
                        this.$element.trigger($event, args);
                    } else {
                        // just trigger with type if no event available
                        this.$element.trigger(type, args);
                    }
                }
            };

            // -------------------------- ignore & stamps -------------------------- //


            /**
             * keep item in collection, but do not lay it out
             * ignored items do not get skipped in layout
             * @param {Element} elem
             */
            proto.ignore = function (elem) {
                var item = this.getItem(elem);
                if (item) {
                    item.isIgnored = true;
                }
            };

            /**
             * return item to layout collection
             * @param {Element} elem
             */
            proto.unignore = function (elem) {
                var item = this.getItem(elem);
                if (item) {
                    delete item.isIgnored;
                }
            };

            /**
             * adds elements to stamps
             * @param {NodeList, Array, Element, or String} elems
             */
            proto.stamp = function (elems) {
                elems = this._find(elems);
                if (!elems) {
                    return;
                }

                this.stamps = this.stamps.concat(elems);
                // ignore
                elems.forEach(this.ignore, this);
            };

            /**
             * removes elements to stamps
             * @param {NodeList, Array, or Element} elems
             */
            proto.unstamp = function (elems) {
                elems = this._find(elems);
                if (!elems) {
                    return;
                }

                elems.forEach(function (elem) {
                    // filter out removed stamp elements
                    utils.removeFrom(this.stamps, elem);
                    this.unignore(elem);
                }, this);
            };

            /**
             * finds child elements
             * @param {NodeList, Array, Element, or String} elems
             * @returns {Array} elems
             */
            proto._find = function (elems) {
                if (!elems) {
                    return;
                }
                // if string, use argument as selector string
                if (typeof elems == 'string') {
                    elems = this.element.querySelectorAll(elems);
                }
                elems = utils.makeArray(elems);
                return elems;
            };

            proto._manageStamps = function () {
                if (!this.stamps || !this.stamps.length) {
                    return;
                }

                this._getBoundingRect();

                this.stamps.forEach(this._manageStamp, this);
            };

            // update boundingLeft / Top
            proto._getBoundingRect = function () {
                // get bounding rect for container element
                var boundingRect = this.element.getBoundingClientRect();
                var size = this.size;
                this._boundingRect = {
                    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
                    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
                    right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
                    bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
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
            proto._getElementOffset = function (elem) {
                var boundingRect = elem.getBoundingClientRect();
                var thisRect = this._boundingRect;
                var size = getSize(elem);
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
            proto.bindResize = function () {
                window.addEventListener('resize', this);
                this.isResizeBound = true;
            };

            /**
             * Unbind layout to window resizing
             */
            proto.unbindResize = function () {
                window.removeEventListener('resize', this);
                this.isResizeBound = false;
            };

            proto.onresize = function () {
                this.resize();
            };

            utils.debounceMethod(Outlayer, 'onresize', 100);

            proto.resize = function () {
                // don't trigger if size did not change
                // or if resize was unbound. See #9
                if (!this.isResizeBound || !this.needsResizeLayout()) {
                    return;
                }

                this.layout();
            };

            /**
             * check if layout is needed post layout
             * @returns Boolean
             */
            proto.needsResizeLayout = function () {
                var size = getSize(this.element);
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
            proto.addItems = function (elems) {
                var items = this._itemize(elems);
                // add items to collection
                if (items.length) {
                    this.items = this.items.concat(items);
                }
                return items;
            };

            /**
             * Layout newly-appended item elements
             * @param {Array or NodeList or Element} elems
             */
            proto.appended = function (elems) {
                var items = this.addItems(elems);
                if (!items.length) {
                    return;
                }
                // layout and reveal just the new items
                this.layoutItems(items, true);
                this.reveal(items);
            };

            /**
             * Layout prepended elements
             * @param {Array or NodeList or Element} elems
             */
            proto.prepended = function (elems) {
                var items = this._itemize(elems);
                if (!items.length) {
                    return;
                }
                // add items to beginning of collection
                var previousItems = this.items.slice(0);
                this.items = items.concat(previousItems);
                // start new layout
                this._resetLayout();
                this._manageStamps();
                // layout new stuff without transition
                this.layoutItems(items, true);
                this.reveal(items);
                // layout previous items
                this.layoutItems(previousItems);
            };

            /**
             * reveal a collection of items
             * @param {Array of Outlayer.Items} items
             */
            proto.reveal = function (items) {
                this._emitCompleteOnItems('reveal', items);
                if (!items || !items.length) {
                    return;
                }
                var stagger = this.updateStagger();
                items.forEach(function (item, i) {
                    item.stagger(i * stagger);
                    item.reveal();
                });
            };

            /**
             * hide a collection of items
             * @param {Array of Outlayer.Items} items
             */
            proto.hide = function (items) {
                this._emitCompleteOnItems('hide', items);
                if (!items || !items.length) {
                    return;
                }
                var stagger = this.updateStagger();
                items.forEach(function (item, i) {
                    item.stagger(i * stagger);
                    item.hide();
                });
            };

            /**
             * reveal item elements
             * @param {Array}, {Element}, {NodeList} items
             */
            proto.revealItemElements = function (elems) {
                var items = this.getItems(elems);
                this.reveal(items);
            };

            /**
             * hide item elements
             * @param {Array}, {Element}, {NodeList} items
             */
            proto.hideItemElements = function (elems) {
                var items = this.getItems(elems);
                this.hide(items);
            };

            /**
             * get Outlayer.Item, given an Element
             * @param {Element} elem
             * @param {Function} callback
             * @returns {Outlayer.Item} item
             */
            proto.getItem = function (elem) {
                // loop through items to get the one that matches
                for (var i = 0; i < this.items.length; i++) {
                    var item = this.items[i];
                    if (item.element == elem) {
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
            proto.getItems = function (elems) {
                elems = utils.makeArray(elems);
                var items = [];
                elems.forEach(function (elem) {
                    var item = this.getItem(elem);
                    if (item) {
                        items.push(item);
                    }
                }, this);

                return items;
            };

            /**
             * remove element(s) from instance and DOM
             * @param {Array or NodeList or Element} elems
             */
            proto.remove = function (elems) {
                var removeItems = this.getItems(elems);

                this._emitCompleteOnItems('remove', removeItems);

                // bail if no items to remove
                if (!removeItems || !removeItems.length) {
                    return;
                }

                removeItems.forEach(function (item) {
                    item.remove();
                    // remove item from collection
                    utils.removeFrom(this.items, item);
                }, this);
            };

            // ----- destroy ----- //

            // remove and disable Outlayer instance
            proto.destroy = function () {
                // clean up dynamic styles
                var style = this.element.style;
                style.height = '';
                style.position = '';
                style.width = '';
                // destroy items
                this.items.forEach(function (item) {
                    item.destroy();
                });

                this.unbindResize();

                var id = this.element.outlayerGUID;
                delete instances[id]; // remove reference to instance by id
                delete this.element.outlayerGUID;
                // remove data for jQuery
                if (jQuery) {
                    jQuery.removeData(this.element, this.constructor.namespace);
                }

            };

            // -------------------------- data -------------------------- //

            /**
             * get Outlayer instance from element
             * @param {Element} elem
             * @returns {Outlayer}
             */
            Outlayer.data = function (elem) {
                elem = utils.getQueryElement(elem);
                var id = elem && elem.outlayerGUID;
                return id && instances[id];
            };


            // -------------------------- create Outlayer class -------------------------- //

            /**
             * create a layout class
             * @param {String} namespace
             */
            Outlayer.create = function (namespace, options) {
                // sub-class Outlayer
                var Layout = subclass(Outlayer);
                // apply new options and compatOptions
                Layout.defaults = utils.extend({}, Outlayer.defaults);
                utils.extend(Layout.defaults, options);
                Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);

                Layout.namespace = namespace;

                Layout.data = Outlayer.data;

                // sub-class Item
                Layout.Item = subclass(Item);

                // -------------------------- declarative -------------------------- //

                utils.htmlInit(Layout, namespace);

                // -------------------------- jQuery bridge -------------------------- //

                // make into jQuery plugin
                if (jQuery && jQuery.bridget) {
                    jQuery.bridget(namespace, Layout);
                }

                return Layout;
            };

            function subclass(Parent) {
                function SubClass() {
                    Parent.apply(this, arguments);
                }

                SubClass.prototype = Object.create(Parent.prototype);
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
            function getMilliseconds(time) {
                if (typeof time == 'number') {
                    return time;
                }
                var matches = time.match(/(^\d*\.?\d*)(\w*)/);
                var num = matches && matches[1];
                var unit = matches && matches[2];
                if (!num.length) {
                    return 0;
                }
                num = parseFloat(num);
                var mult = msUnits[unit] || 1;
                return num * mult;
            }

            // ----- fin ----- //

            // back in global
            Outlayer.Item = Item;

            return Outlayer;

        }));


        /***/
    }),
    /* 28 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectBase__ = __webpack_require__(11);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return MatrixС3; });



        var MatrixС3 = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixС3, _super);
            function MatrixС3(targetNode, question, data, options) {
                var _this = _super.call(this, targetNode, question, data, options) || this;
                _this.chartType = "bar";
                return _this;
            }
            MatrixС3.prototype.valuesSource = function () {
                var question = this.question;
                return question.columns;
            };
            MatrixС3.prototype.getLabels = function () {
                var question = this.question;
                return question.rows.map(function (row) {
                    return __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(question.rows, row.value);
                });
            };
            MatrixС3.prototype.getData = function () {
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
            return MatrixС3;
        }(__WEBPACK_IMPORTED_MODULE_2__selectBase__["a" /* SelectBaseC3 */]));

        // VisualizationManager.registerVisualizer("matrix", MatrixС3);


        /***/
    }),
    /* 29 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__(14);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_c3__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return GaugeC3; });



        var GaugeC3 = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GaugeC3, _super);
            function GaugeC3(targetNode, question, data, options) {
                var _this = _super.call(this, targetNode, question, data, options) || this;
                _this.targetNode = targetNode;
                return _this;
            }
            GaugeC3.prototype.destroy = function () {
                if (!this.chart)
                    return;
                this.chart.destroy();
            };
            GaugeC3.prototype.render = function () {
                this.chart = __WEBPACK_IMPORTED_MODULE_2_c3___default.a.generate({
                    bindto: this.targetNode,
                    data: {
                        columns: [[this.question.title, this.result]],
                        type: "gauge"
                    },
                    gauge: {
                        min: this.question.rateMin,
                        max: this.question.rateMax,
                        label: {
                            format: function (value, ratio) {
                                return value;
                            }
                        }
                    },
                    color: {
                        pattern: [this.getRandomColor()]
                    }
                });
            };
            Object.defineProperty(GaugeC3.prototype, "result", {
                get: function () {
                    var _this = this;
                    if (this._result === undefined) {
                        var questionValues_1 = [];
                        this.data.forEach(function (rowData) {
                            var questionValue = rowData[_this.question.name];
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
            return GaugeC3;
        }(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

        // VisualizationManager.registerVisualizer("rating", GaugeC3);


        /***/
    }),
    /* 30 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectBase__ = __webpack_require__(5);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return MatrixChartJS; });



        var MatrixChartJS = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixChartJS, _super);
            function MatrixChartJS(targetNode, question, data, options) {
                var _this = _super.call(this, targetNode, question, data, options) || this;
                _this.chartType = "bar";
                return _this;
            }
            MatrixChartJS.prototype.valuesSource = function () {
                var question = this.question;
                return question.columns;
            };
            MatrixChartJS.prototype.getLabels = function () {
                var question = this.question;
                return question.rows.map(function (row) {
                    return __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(question.rows, row.value);
                });
            };
            MatrixChartJS.prototype.getOptions = function () {
                var options = _super.prototype.getOptions.call(this);
                options.scales = undefined;
                // options.scales = {
                //   xAxes: [{ stacked: true }],
                //   yAxes: [{ stacked: true }]
                // }
                return options;
            };
            MatrixChartJS.prototype.getData = function () {
                return undefined;
            };
            MatrixChartJS.prototype.getDatasets = function () {
                var _this = this;
                var question = this.question;
                var datasets = this.valuesSource().map(function (choice) {
                    return {
                        label: __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(_this.valuesSource(), choice.value),
                        data: question.rows.map(function () { return 0; }),
                        backgroundColor: _this.getRandomColor()
                    };
                });
                this.data.forEach(function (rowData) {
                    var questionValue = rowData[_this.question.name];
                    if (!!questionValue) {
                        question.rows.forEach(function (row, index) {
                            _this.getValues().forEach(function (val, dsIndex) {
                                if (questionValue[row.value] == val) {
                                    datasets[dsIndex].data[index]++;
                                }
                            });
                        });
                    }
                });
                return datasets;
            };
            return MatrixChartJS;
        }(__WEBPACK_IMPORTED_MODULE_2__selectBase__["a" /* SelectBaseChartJS */]));

        // VisualizationManager.registerVisualizer("matrix", MatrixChartJS);


        /***/
    }),
    /* 31 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectBase__ = __webpack_require__(5);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return RadialGaugeChartJS; });


        var RadialGaugeChartJS = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RadialGaugeChartJS, _super);
            function RadialGaugeChartJS(targetNode, question, data, options) {
                var _this = _super.call(this, targetNode, question, data, options) || this;
                _this.chartTypes = ["doughnut", "pie"];
                _this.chartType = "doughnut";
                return _this;
            }
            Object.defineProperty(RadialGaugeChartJS.prototype, "result", {
                get: function () {
                    var _this = this;
                    if (this._result === undefined) {
                        var questionValues_1 = [];
                        this.data.forEach(function (rowData) {
                            var questionValue = rowData[_this.question.name];
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
            RadialGaugeChartJS.prototype.getLabels = function () {
                return [];
            };
            RadialGaugeChartJS.prototype.getOptions = function () {
                var options = {
                    responsive: true,
                    maintainAspectRatio: false,
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI
                };
                return options;
            };
            RadialGaugeChartJS.prototype.getData = function () {
                return undefined;
            };
            RadialGaugeChartJS.prototype.getValues = function () {
                return null;
            };
            RadialGaugeChartJS.prototype.getDatasets = function () {
                return [
                    {
                        data: [
                            this.result - this.question.rateMin,
                            this.question.rateMax - this.question.rateMin - this.result
                        ],
                        backgroundColor: [this.getRandomColor(), this.getRandomColor()]
                    }
                ];
            };
            return RadialGaugeChartJS;
        }(__WEBPACK_IMPORTED_MODULE_1__selectBase__["a" /* SelectBaseChartJS */]));

        // VisualizationManager.registerVisualizer("rating", RadialGaugeChartJS);


        /***/
    }),
    /* 32 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(12);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return MatrixPlotly; });




        var MatrixPlotly = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixPlotly, _super);
            function MatrixPlotly(targetNode, question, data, options) {
                var _this = _super.call(this, targetNode, question, data, options) || this;
                _this.chartType = "bar";
                return _this;
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


        /***/
    }),
    /* 33 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js__ = __webpack_require__(13);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plotly_js__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationManager__ = __webpack_require__(1);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return GaugePlotly; });




        var GaugePlotly = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GaugePlotly, _super);
            function GaugePlotly(chartNode, question, data, options) {
                var _this = _super.call(this, chartNode, question, data, options) || this;
                _this.chartNode = chartNode;
                return _this;
            }
            GaugePlotly.prototype.destroy = function () {
                __WEBPACK_IMPORTED_MODULE_1_plotly_js___default.a.purge(this.chartNode);
            };
            GaugePlotly.prototype.generateText = function (maxValue, minValue, stepsCount) {
                var text = [];
                //"21-25", "16-20", "11-15", "6-10", "0-5"
                // text.push(maxValue);
                // for (let i = 0; i < stepsCount - 2; i++) {
                //   text.push("");
                // }
                // text.push(minValue);
                return [
                    "very hight (" + maxValue + ")",
                    "hight",
                    "medium",
                    "low",
                    "very low (" + minValue + ")"
                ];
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
            GaugePlotly.prototype.render = function () {
                var question = this.question;
                var arrowColor = "#4e6198";
                var maxValue = question.rateMax;
                var minValue = question.rateMin;
                var stepsCount = 5;
                var values = this.generateValues(maxValue, stepsCount);
                var text = this.generateText(maxValue, minValue, stepsCount);
                var colors = this.generateColors(maxValue, minValue, stepsCount);
                // Enter a speed between 0 and 180
                var level = this.result;
                // Trig to calc meter point
                var degrees = maxValue - level, radius = 0.5;
                var radians = (degrees * Math.PI) / maxValue;
                var x = radius * Math.cos(radians);
                var y = radius * Math.sin(radians);
                // Path: may have to change to create a better triangle
                var mainPath = "M -.0 -0.025 L .0 0.025 L ", pathX = String(x), space = " ", pathY = String(y), pathEnd = " Z";
                var path = mainPath.concat(pathX, space, pathY, pathEnd);
                var data = [
                    {
                        type: "scatter",
                        x: [0],
                        y: [0],
                        marker: {
                            size: 28,
                            color: arrowColor
                        },
                        name: question.name,
                        text: level,
                        showlegend: false,
                        hoverinfo: "text+name"
                    },
                    {
                        values: values,
                        rotation: 90,
                        text: text,
                        textinfo: "text",
                        textposition: "inside",
                        // textfont: {
                        //   size: 20
                        // },
                        marker: {
                            colors: colors
                        },
                        hoverinfo: "skip",
                        hole: 0.5,
                        type: "pie",
                        showlegend: false
                    }
                ];
                var layout = {
                    shapes: [
                        {
                            type: "path",
                            path: path,
                            fillcolor: arrowColor,
                            line: {
                                color: arrowColor
                            }
                        }
                    ],
                    title: level,
                    height: 600,
                    width: 600,
                    xaxis: {
                        zeroline: false,
                        showticklabels: false,
                        showgrid: false,
                        range: [-1, 1]
                    },
                    yaxis: {
                        zeroline: false,
                        showticklabels: false,
                        showgrid: false,
                        range: [-1, 1]
                    },
                    plot_bgcolor: this.backgroundColor,
                    paper_bgcolor: this.backgroundColor
                };
                this.chartNode.style.maxHeight = "400px"; // fixed chart height
                this.chartNode.style.overflow = "hidden";
                var config = {
                    displayModeBar: false,
                    staticPlot: true
                };
                this.chart = __WEBPACK_IMPORTED_MODULE_1_plotly_js___default.a.newPlot(this.chartNode, data, layout, config);
            };
            Object.defineProperty(GaugePlotly.prototype, "result", {
                get: function () {
                    var _this = this;
                    if (this._result === undefined) {
                        var questionValues_1 = [];
                        this.data.forEach(function (rowData) {
                            var questionValue = rowData[_this.question.name];
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
            return GaugePlotly;
        }(__WEBPACK_IMPORTED_MODULE_2__visualizerBase__["a" /* VisualizerBase */]));

        __WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("rating", GaugePlotly);


        /***/
    }),
    /* 34 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return stopWords; });
        var stopWords = new Array("a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z");


        /***/
    }),
    /* 35 */
    /***/ (function (module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

        /***/
    }),
    /* 36 */
    /***/ (function (module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

        /***/
    }),
    /* 37 */
    /***/ (function (module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

        /***/
    }),
    /* 38 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase__ = __webpack_require__(2);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function () { return __WEBPACK_IMPORTED_MODULE_0__visualizerBase__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(1);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function () { return __WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationPanel__ = __webpack_require__(7);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function () { return __WEBPACK_IMPORTED_MODULE_2__visualizationPanel__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanelDynamic__ = __webpack_require__(8);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function () { return __WEBPACK_IMPORTED_MODULE_3__visualizationPanelDynamic__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizationMatrixDynamic__ = __webpack_require__(19);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function () { return __WEBPACK_IMPORTED_MODULE_4__visualizationMatrixDynamic__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datatables_datatables__ = __webpack_require__(17);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataTables", function () { return __WEBPACK_IMPORTED_MODULE_5__datatables_datatables__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chartjs_index__ = __webpack_require__(16);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixChartJS", function () { return __WEBPACK_IMPORTED_MODULE_6__chartjs_index__["a"]; });
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBaseChartJS", function () { return __WEBPACK_IMPORTED_MODULE_6__chartjs_index__["b"]; });
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RadialGaugeChartJS", function () { return __WEBPACK_IMPORTED_MODULE_6__chartjs_index__["c"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__c3_index__ = __webpack_require__(15);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixС3", function () { return __WEBPACK_IMPORTED_MODULE_7__c3_index__["a"]; });
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBaseC3", function () { return __WEBPACK_IMPORTED_MODULE_7__c3_index__["b"]; });
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GaugeC3", function () { return __WEBPACK_IMPORTED_MODULE_7__c3_index__["c"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plotly_index__ = __webpack_require__(18);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function () { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["a"]; });
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function () { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["b"]; });
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function () { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["c"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordcloud_wordcloud__ = __webpack_require__(20);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function () { return __WEBPACK_IMPORTED_MODULE_9__wordcloud_wordcloud__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wordcloud_stopwords_index__ = __webpack_require__(9);
        /* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "textHelper", function () { return __WEBPACK_IMPORTED_MODULE_10__wordcloud_stopwords_index__["a"]; });













        /***/
    })
    /******/]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMGExNDZhNTRmMmM5YmFlOTE0ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6ZXJCYXNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwiU3VydmV5XCIsXCJjb21tb25qc1wiOlwiU3VydmV5XCIsXCJhbWRcIjpcIlN1cnZleVwifSIsIndlYnBhY2s6Ly8vLi9+L2dldC1zaXplL2dldC1zaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFydGpzL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsRHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9+L2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYzMvc2VsZWN0QmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBsb3RseVwiLFwiY29tbW9uanMyXCI6XCJQbG90bHlcIixcImNvbW1vbmpzXCI6XCJQbG90bHlcIixcImFtZFwiOlwiUGxvdGx5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjM1wiLFwiY29tbW9uanMyXCI6XCJjM1wiLFwiY29tbW9uanNcIjpcImMzXCIsXCJhbWRcIjpcImMzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9jMy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcnRqcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXRhYmxlcy9kYXRhdGFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JkY2xvdWQvd29yZGNsb3VkLnRzIiwid2VicGFjazovLy8uL34vZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vbWFzb25yeS1sYXlvdXQvbWFzb25yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L291dGxheWVyL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9vdXRsYXllci9vdXRsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYzMvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9jMy9yYXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0anMvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9jaGFydGpzL3JhdGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9lbmdsaXNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJDaGFydFwiLFwiY29tbW9uanMyXCI6XCJDaGFydFwiLFwiY29tbW9uanNcIjpcIkNoYXJ0XCIsXCJhbWRcIjpcIkNoYXJ0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwiV29yZENsb3VkXCIsXCJjb21tb25qc1wiOlwiV29yZENsb3VkXCIsXCJhbWRcIjpcIldvcmRDbG91ZFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoRU8sSUFBSSxRQUFRLEdBQ1gsTUFBTyxDQUFDLFFBQVEsQ0FBQztJQUN2QixVQUFTLE1BQVc7UUFDbEIsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsQ0FB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QUFDOzs7Ozs7O0FDcERELHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7QUNoUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7OztBQzlPRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUNBO0FBQUE7QUFBQTtBQUFBLG9HQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsNkJBQTZCO0FBQ3hDLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFX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LE9BQU8sRUFDUCxRQUFRLEVBQ1IsS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxLQUFLLEVBQ0wsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxNQUFNLEVBQ04sU0FBUyxFQUNULE9BQU8sRUFDUCxLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxNQUFNLEVBQ04sT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWCxPQUFPLEVBQ1AsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsV0FBVyxFQUNYLE9BQU8sRUFDUCxNQUFNLEVBQ04sT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFNBQVMsRUFDVCxNQUFNLEVBQ04sSUFBSSxFQUNKLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxHQUFHLEVBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDUCxJQUFJLEVBQ0osTUFBTSxFQUNOLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sRUFDTixPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxPQUFPLEVBQ1AsR0FBRyxFQUNILEdBQUcsRUFDSCxNQUFNLEVBQ04sT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxHQUFHLENBQ0osQ0FBQzs7Ozs7OztBQzlhRixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDTTtBQUNGO0FBQ087QUFDQztBQUVMO0FBQ1I7QUFDTDtBQUNJO0FBQ087QUFDTSIsImZpbGUiOiIuL3BhY2thZ2VzL3N1cnZleS5hbmFseXRpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJTdXJ2ZXlcIiksIHJlcXVpcmUoXCJQbG90bHlcIiksIHJlcXVpcmUoXCJjM1wiKSwgcmVxdWlyZShcIkNoYXJ0XCIpLCByZXF1aXJlKFwiV29yZENsb3VkXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzXCIsIFtcIlN1cnZleVwiLCBcIlBsb3RseVwiLCBcImMzXCIsIFwiQ2hhcnRcIiwgXCJXb3JkQ2xvdWRcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3VydmV5QW5hbHl0aWNzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiU3VydmV5XCIpLCByZXF1aXJlKFwiUGxvdGx5XCIpLCByZXF1aXJlKFwiYzNcIiksIHJlcXVpcmUoXCJDaGFydFwiKSwgcmVxdWlyZShcIldvcmRDbG91ZFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5QW5hbHl0aWNzXCJdID0gZmFjdG9yeShyb290W1wiU3VydmV5XCJdLCByb290W1wiUGxvdGx5XCJdLCByb290W1wiYzNcIl0sIHJvb3RbXCJDaGFydFwiXSwgcm9vdFtcIldvcmRDbG91ZFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIwYTE0NmE1NGYyYzliYWU5MTRkIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XHJcbiAgKDxhbnk+T2JqZWN0KVtcImFzc2lnblwiXSB8fFxyXG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgZm9yICh2YXIgcCBpbiBzKVxyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xyXG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxyXG4gICAgaWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShwKSkgdGhpc0NsYXNzW3BdID0gYmFzZUNsYXNzW3BdO1xyXG4gIGZ1bmN0aW9uIF9fKCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcclxuICB9XHJcbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XHJcbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcclxuICAgICAgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcylcclxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcclxuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcclxuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gc291cmNlKVxyXG4gICAgaWYgKFxyXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXHJcbiAgICAgIGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpIDwgMFxyXG4gICAgKVxyXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xyXG4gIGlmIChcclxuICAgIHNvdXJjZSAhPSBudWxsICYmXHJcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXHJcbiAgKVxyXG4gICAgZm9yIChcclxuICAgICAgdmFyIGkgPSAwLFxyXG4gICAgICAgIHByb3BlcnR5U3ltYm9scyA9ICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0oc291cmNlKTtcclxuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XHJcbiAgICAgIGkrK1xyXG4gICAgKVxyXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxyXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmRlY2xhcmUgdmFyIFJlZmxlY3Q6IGFueTtcclxuXHJcbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxyXG4gIGRlY29yYXRvcnM6IGFueSxcclxuICB0YXJnZXQ6IGFueSxcclxuICBrZXk6IGFueSxcclxuICBkZXNjOiBhbnlcclxuKSB7XHJcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxyXG4gICAgciA9XHJcbiAgICAgIGMgPCAzXHJcbiAgICAgICAgPyB0YXJnZXRcclxuICAgICAgICA6IGRlc2MgPT09IG51bGxcclxuICAgICAgICA/IChkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXHJcbiAgICAgICAgOiBkZXNjLFxyXG4gICAgZDtcclxuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICBlbHNlXHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXHJcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XHJcblxyXG5kZWNsYXJlIHR5cGUgVmlzdWFsaXplckNvbnN0cnVjdG9yID0gbmV3IChcclxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICBvcHRpb25zPzogT2JqZWN0XHJcbikgPT4gYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYW5hZ2VyIHtcclxuICBzdGF0aWMgdml6dWFsaXplcnM6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxWaXN1YWxpemVyQ29uc3RydWN0b3I+IH0gPSB7fTtcclxuICBzdGF0aWMgcmVnaXN0ZXJWaXN1YWxpemVyKFxyXG4gICAgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgIGNvbnN0cnVjdG9yOiBWaXN1YWxpemVyQ29uc3RydWN0b3JcclxuICApIHtcclxuICAgIGxldCB2aXp1YWxpemVycyA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLnZpenVhbGl6ZXJzW3R5cGVOYW1lXTtcclxuICAgIGlmICghdml6dWFsaXplcnMpIHtcclxuICAgICAgdml6dWFsaXplcnMgPSBbXTtcclxuICAgICAgVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdID0gdml6dWFsaXplcnM7XHJcbiAgICB9XHJcbiAgICB2aXp1YWxpemVycy5wdXNoKGNvbnN0cnVjdG9yKTtcclxuICB9XHJcbiAgc3RhdGljIGdldFZpc3VhbGl6ZXJzKHR5cGVOYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCB2aXp1YWxpemVycyA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLnZpenVhbGl6ZXJzW3R5cGVOYW1lXTtcclxuICAgIGlmICghdml6dWFsaXplcnMpIHtcclxuICAgICAgcmV0dXJuIFtWaXN1YWxpemVyQmFzZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdml6dWFsaXplcnM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uTWFuYWdlci50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsaXplckJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHt9XHJcblxyXG4gIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICBkZXN0cm95KCkge31cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IFwiVGhpcyBxdWVzdGlvbiB0eXBlIGlzIG5vdCB2aXN1YWxpemVkIHlldFwiO1xyXG4gIH1cclxuXHJcbiAgaW52b2tlT25VcGRhdGUoKSB7XHJcbiAgICB0aGlzLm9uVXBkYXRlICYmIHRoaXMub25VcGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldFJhbmRvbUNvbG9yKCkge1xyXG4gICAgbGV0IGNvbG9yID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBjb2xvcltpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgY29sb3Iuam9pbihcIiwgXCIpICsgXCIsIDAuNClcIjtcclxuXHJcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xyXG5cclxuICAgIHJldHVybiBcIiNcIiArIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XHJcbiAgfVxyXG5cclxuICBiYWNrZ3JvdW5kQ29sb3IgPSBcIiNmN2Y3ZjdcIjtcclxuXHJcbiAgZ2V0Q29sb3JzKCkge1xyXG4gICAgY29uc3QgY29sb3JzID0gW1xyXG4gICAgICBcIjg2ZTFmYlwiLFxyXG4gICAgICBcIjM5OTlmYlwiLFxyXG4gICAgICBcImZmNjc3MVwiLFxyXG4gICAgICBcIjFlYjQ5NlwiLFxyXG4gICAgICBcImZmYzE1MlwiLFxyXG4gICAgICBcImFiYTFmZlwiLFxyXG4gICAgICBcIjdkOGRhNVwiLFxyXG4gICAgICBcIjRlYzQ2Y1wiLFxyXG4gICAgICBcImNmMzdhNlwiLFxyXG4gICAgICBcIjRlNjE5OFwiXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBtYW55Q29sb3JzOiBhbnkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcclxuICAgICAgbWFueUNvbG9ycyA9IG1hbnlDb2xvcnMuY29uY2F0KGNvbG9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hbnlDb2xvcnM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemVyQmFzZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcIlN1cnZleVwiLFwiY29tbW9uanNcIjpcIlN1cnZleVwiLFwiYW1kXCI6XCJTdXJ2ZXlcIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBnZXRTaXplIHYyLjAuM1xuICogbWVhc3VyZSBzaXplIG9mIGVsZW1lbnRzXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qIGpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cbi8qIGdsb2JhbHMgY29uc29sZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5nZXRTaXplID0gZmFjdG9yeSgpO1xuICB9XG5cbn0pKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2V0IGEgbnVtYmVyIGZyb20gYSBzdHJpbmcsIG5vdCBhIHBlcmNlbnRhZ2VcbmZ1bmN0aW9uIGdldFN0eWxlU2l6ZSggdmFsdWUgKSB7XG4gIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAvLyBub3QgYSBwZXJjZW50IGxpa2UgJzEwMCUnLCBhbmQgYSBudW1iZXJcbiAgdmFyIGlzVmFsaWQgPSB2YWx1ZS5pbmRleE9mKCclJykgPT0gLTEgJiYgIWlzTmFOKCBudW0gKTtcbiAgcmV0dXJuIGlzVmFsaWQgJiYgbnVtO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIGxvZ0Vycm9yID0gdHlwZW9mIGNvbnNvbGUgPT0gJ3VuZGVmaW5lZCcgPyBub29wIDpcbiAgZnVuY3Rpb24oIG1lc3NhZ2UgKSB7XG4gICAgY29uc29sZS5lcnJvciggbWVzc2FnZSApO1xuICB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZWFzdXJlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIG1lYXN1cmVtZW50cyA9IFtcbiAgJ3BhZGRpbmdMZWZ0JyxcbiAgJ3BhZGRpbmdSaWdodCcsXG4gICdwYWRkaW5nVG9wJyxcbiAgJ3BhZGRpbmdCb3R0b20nLFxuICAnbWFyZ2luTGVmdCcsXG4gICdtYXJnaW5SaWdodCcsXG4gICdtYXJnaW5Ub3AnLFxuICAnbWFyZ2luQm90dG9tJyxcbiAgJ2JvcmRlckxlZnRXaWR0aCcsXG4gICdib3JkZXJSaWdodFdpZHRoJyxcbiAgJ2JvcmRlclRvcFdpZHRoJyxcbiAgJ2JvcmRlckJvdHRvbVdpZHRoJ1xuXTtcblxudmFyIG1lYXN1cmVtZW50c0xlbmd0aCA9IG1lYXN1cmVtZW50cy5sZW5ndGg7XG5cbmZ1bmN0aW9uIGdldFplcm9TaXplKCkge1xuICB2YXIgc2l6ZSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgaW5uZXJXaWR0aDogMCxcbiAgICBpbm5lckhlaWdodDogMCxcbiAgICBvdXRlcldpZHRoOiAwLFxuICAgIG91dGVySGVpZ2h0OiAwXG4gIH07XG4gIGZvciAoIHZhciBpPTA7IGkgPCBtZWFzdXJlbWVudHNMZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudHNbaV07XG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9IDA7XG4gIH1cbiAgcmV0dXJuIHNpemU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0U3R5bGUsIGdldCBzdHlsZSBvZiBlbGVtZW50LCBjaGVjayBmb3IgRmlyZWZveCBidWdcbiAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICovXG5mdW5jdGlvbiBnZXRTdHlsZSggZWxlbSApIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSApO1xuICBpZiAoICFzdHlsZSApIHtcbiAgICBsb2dFcnJvciggJ1N0eWxlIHJldHVybmVkICcgKyBzdHlsZSArXG4gICAgICAnLiBBcmUgeW91IHJ1bm5pbmcgdGhpcyBjb2RlIGluIGEgaGlkZGVuIGlmcmFtZSBvbiBGaXJlZm94PyAnICtcbiAgICAgICdTZWUgaHR0cHM6Ly9iaXQubHkvZ2V0c2l6ZWJ1ZzEnICk7XG4gIH1cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgaXNTZXR1cCA9IGZhbHNlO1xuXG52YXIgaXNCb3hTaXplT3V0ZXI7XG5cbi8qKlxuICogc2V0dXBcbiAqIGNoZWNrIGlzQm94U2l6ZXJPdXRlclxuICogZG8gb24gZmlyc3QgZ2V0U2l6ZSgpIHJhdGhlciB0aGFuIG9uIHBhZ2UgbG9hZCBmb3IgRmlyZWZveCBidWdcbiAqL1xuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIC8vIHNldHVwIG9uY2VcbiAgaWYgKCBpc1NldHVwICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc1NldHVwID0gdHJ1ZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBib3ggc2l6aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLyoqXG4gICAqIENocm9tZSAmIFNhZmFyaSBtZWFzdXJlIHRoZSBvdXRlci13aWR0aCBvbiBzdHlsZS53aWR0aCBvbiBib3JkZXItYm94IGVsZW1zXG4gICAqIElFMTEgJiBGaXJlZm94PDI5IG1lYXN1cmVzIHRoZSBpbm5lci13aWR0aFxuICAgKi9cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICBkaXYuc3R5bGUucGFkZGluZyA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICBkaXYuc3R5bGUuYm9yZGVyV2lkdGggPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGRpdiApO1xuICAvLyByb3VuZCB2YWx1ZSBmb3IgYnJvd3NlciB6b29tLiBkZXNhbmRyby9tYXNvbnJ5IzkyOFxuICBpc0JveFNpemVPdXRlciA9IE1hdGgucm91bmQoIGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKSApID09IDIwMDtcbiAgZ2V0U2l6ZS5pc0JveFNpemVPdXRlciA9IGlzQm94U2l6ZU91dGVyO1xuXG4gIGJvZHkucmVtb3ZlQ2hpbGQoIGRpdiApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGdldFNpemUoIGVsZW0gKSB7XG4gIHNldHVwKCk7XG5cbiAgLy8gdXNlIHF1ZXJ5U2VsZXRvciBpZiBlbGVtIGlzIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cblxuICAvLyBkbyBub3QgcHJvY2VlZCBvbiBub24tb2JqZWN0c1xuICBpZiAoICFlbGVtIHx8IHR5cGVvZiBlbGVtICE9ICdvYmplY3QnIHx8ICFlbGVtLm5vZGVUeXBlICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBlbGVtICk7XG5cbiAgLy8gaWYgaGlkZGVuLCBldmVyeXRoaW5nIGlzIDBcbiAgaWYgKCBzdHlsZS5kaXNwbGF5ID09ICdub25lJyApIHtcbiAgICByZXR1cm4gZ2V0WmVyb1NpemUoKTtcbiAgfVxuXG4gIHZhciBzaXplID0ge307XG4gIHNpemUud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICBzaXplLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gIHZhciBpc0JvcmRlckJveCA9IHNpemUuaXNCb3JkZXJCb3ggPSBzdHlsZS5ib3hTaXppbmcgPT0gJ2JvcmRlci1ib3gnO1xuXG4gIC8vIGdldCBhbGwgbWVhc3VyZW1lbnRzXG4gIGZvciAoIHZhciBpPTA7IGkgPCBtZWFzdXJlbWVudHNMZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudHNbaV07XG4gICAgdmFyIHZhbHVlID0gc3R5bGVbIG1lYXN1cmVtZW50IF07XG4gICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gICAgLy8gYW55ICdhdXRvJywgJ21lZGl1bScgdmFsdWUgd2lsbCBiZSAwXG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9ICFpc05hTiggbnVtICkgPyBudW0gOiAwO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdXaWR0aCA9IHNpemUucGFkZGluZ0xlZnQgKyBzaXplLnBhZGRpbmdSaWdodDtcbiAgdmFyIHBhZGRpbmdIZWlnaHQgPSBzaXplLnBhZGRpbmdUb3AgKyBzaXplLnBhZGRpbmdCb3R0b207XG4gIHZhciBtYXJnaW5XaWR0aCA9IHNpemUubWFyZ2luTGVmdCArIHNpemUubWFyZ2luUmlnaHQ7XG4gIHZhciBtYXJnaW5IZWlnaHQgPSBzaXplLm1hcmdpblRvcCArIHNpemUubWFyZ2luQm90dG9tO1xuICB2YXIgYm9yZGVyV2lkdGggPSBzaXplLmJvcmRlckxlZnRXaWR0aCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgdmFyIGJvcmRlckhlaWdodCA9IHNpemUuYm9yZGVyVG9wV2lkdGggKyBzaXplLmJvcmRlckJvdHRvbVdpZHRoO1xuXG4gIHZhciBpc0JvcmRlckJveFNpemVPdXRlciA9IGlzQm9yZGVyQm94ICYmIGlzQm94U2l6ZU91dGVyO1xuXG4gIC8vIG92ZXJ3cml0ZSB3aWR0aCBhbmQgaGVpZ2h0IGlmIHdlIGNhbiBnZXQgaXQgZnJvbSBzdHlsZVxuICB2YXIgc3R5bGVXaWR0aCA9IGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKTtcbiAgaWYgKCBzdHlsZVdpZHRoICE9PSBmYWxzZSApIHtcbiAgICBzaXplLndpZHRoID0gc3R5bGVXaWR0aCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIH1cblxuICB2YXIgc3R5bGVIZWlnaHQgPSBnZXRTdHlsZVNpemUoIHN0eWxlLmhlaWdodCApO1xuICBpZiAoIHN0eWxlSGVpZ2h0ICE9PSBmYWxzZSApIHtcbiAgICBzaXplLmhlaWdodCA9IHN0eWxlSGVpZ2h0ICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuICB9XG5cbiAgc2l6ZS5pbm5lcldpZHRoID0gc2l6ZS53aWR0aCAtICggcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgc2l6ZS5pbm5lckhlaWdodCA9IHNpemUuaGVpZ2h0IC0gKCBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG5cbiAgc2l6ZS5vdXRlcldpZHRoID0gc2l6ZS53aWR0aCArIG1hcmdpbldpZHRoO1xuICBzaXplLm91dGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBtYXJnaW5IZWlnaHQ7XG5cbiAgcmV0dXJuIHNpemU7XG59XG5cbnJldHVybiBnZXRTaXplO1xuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nZXQtc2l6ZS9nZXQtc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25TZWxlY3RCYXNlLCBRdWVzdGlvbk1hdHJpeE1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9zZWxlY3RCYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFzZUNoYXJ0SlMgZXh0ZW5kcyBTZWxlY3RCYXNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IENoYXJ0O1xyXG5cclxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlcyA9IFtcImJhclwiLCBcImhvcml6b250YWxCYXJcIiwgXCJsaW5lXCIsIFwicGllXCIsIFwiZG91Z2hudXRcIl07XHJcbiAgY2hhcnRUeXBlID0gXCJob3Jpem9udGFsQmFyXCI7XHJcbiAgY2hhcnROb2RlID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAoISF0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNoYXJ0ID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvb2xiYXJDaGFuZ2VIYW5kbGVyID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2hhcnRUeXBlICE9PSBlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0Q2hhcnRKcyh0aGlzLmNoYXJ0Tm9kZSwgdGhpcy5jaGFydFR5cGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNyZWF0ZUNoYXJ0KCkge1xyXG4gICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0Q2hhcnRKcyh0aGlzLmNoYXJ0Tm9kZSwgdGhpcy5jaGFydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDaGFydEpzKGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQsIGNoYXJ0VHlwZTogc3RyaW5nKTogQ2hhcnQge1xyXG4gICAgY29uc3QgY3R4ID0gKDxhbnk+Y2hhcnROb2RlKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogY2hhcnRUeXBlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiB0aGlzLmdldExhYmVscygpLFxyXG4gICAgICAgIGRhdGFzZXRzOiB0aGlzLmdldERhdGFzZXRzKClcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczogdGhpcy5nZXRPcHRpb25zKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9ucygpOiBDaGFydC5DaGFydE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgIHNjYWxlczpcclxuICAgICAgICBbXCJwaWVcIiwgXCJkb3VnaG51dFwiXS5pbmRleE9mKHRoaXMuY2hhcnRUeXBlKSAhPT0gLTFcclxuICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXREYXRhc2V0cygpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogcXVlc3Rpb24udGl0bGUsXHJcbiAgICAgICAgZGF0YTogdGhpcy5nZXREYXRhKClbMF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmdldFZhbHVlcygpLm1hcChfID0+IHRoaXMuZ2V0UmFuZG9tQ29sb3IoKSlcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNoZWNrYm94XCIsIFNlbGVjdEJhc2VDaGFydEpTKTtcclxuLy8gVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwicmFkaW9ncm91cFwiLCBTZWxlY3RCYXNlQ2hhcnRKUyk7XHJcbi8vIFZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImRyb3Bkb3duXCIsIFNlbGVjdEJhc2VDaGFydEpTKTtcclxuLy8gVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiaW1hZ2VwaWNrZXJcIiwgU2VsZWN0QmFzZUNoYXJ0SlMpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcnRqcy9zZWxlY3RCYXNlLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uU2VsZWN0QmFzZSwgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFydFR5cGVzOiBzdHJpbmdbXTtcclxuICBjaGFydFR5cGU6IHN0cmluZztcclxuICBjaGFydE5vZGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICB0b29sYmFyQ2hhbmdlSGFuZGxlcihlOiBhbnkpIHt9XHJcblxyXG4gIGNyZWF0ZUNoYXJ0KCkge31cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2hhcnROb2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRvb2xiYXJOb2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjaGFydE5vZGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbGJhck5vZGVDb250YWluZXIpO1xyXG4gICAgY2hhcnROb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hhcnROb2RlKTtcclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjaGFydE5vZGVDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVG9vbGJhcih0b29sYmFyTm9kZUNvbnRhaW5lciwgdGhpcy50b29sYmFyQ2hhbmdlSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVDaGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVUb29sYmFyKFxyXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcclxuICAgIGNoYW5nZUhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWRcclxuICApIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdG9vbGJhci5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fdG9vbGJhclwiO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uX19zZWxlY3RcIjtcclxuICAgICAgdGhpcy5jaGFydFR5cGVzLmZvckVhY2goY2hhcnRUeXBlID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBjaGFydFR5cGU7XHJcbiAgICAgICAgb3B0aW9uLnRleHQgPSBjaGFydFR5cGU7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdGhpcy5jaGFydFR5cGUgPT09IGNoYXJ0VHlwZTtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGVjdC5vbmNoYW5nZSA9IGNoYW5nZUhhbmRsZXI7XHJcblxyXG4gICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbHVlc1NvdXJjZSgpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IDxRdWVzdGlvblNlbGVjdEJhc2U+dGhpcy5xdWVzdGlvbjtcclxuICAgIHJldHVybiBxdWVzdGlvbltcImFjdGl2ZUNob2ljZXNcIl07XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICBjb25zdCB2YWx1ZXM6IEFycmF5PGFueT4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcclxuXHJcbiAgICBpZiAodGhpcy5xdWVzdGlvbi5oYXNPdGhlcikgdmFsdWVzLnVuc2hpZnQoXCJvdGhlclwiKTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgY29uc3QgbGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+XHJcbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZSh0aGlzLnZhbHVlc1NvdXJjZSgpLCBjaG9pY2UudmFsdWUpXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSBsYWJlbHMudW5zaGlmdChcIk90aGVyXCIpO1xyXG5cclxuICAgIHJldHVybiBsYWJlbHM7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XHJcbiAgICBjb25zdCBzdGF0aXN0aWNzID0gdmFsdWVzLm1hcCh2ID0+IDApO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xyXG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3dWYWx1ZS5pbmRleE9mKHZhbCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgc3RhdGlzdGljc1tpbmRleF0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93VmFsdWUgPT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgc3RhdGlzdGljc1tpbmRleF0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbc3RhdGlzdGljc107XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3RCYXNlLnRzIiwiaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgTWFzb25yeSBmcm9tIFwibWFzb25yeS1sYXlvdXRcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvblBhbmVsIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIHByb3RlY3RlZCBxdWVzdGlvbnM6IEFycmF5PFF1ZXN0aW9uPixcclxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHt9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGdyaWRTaXplckNsYXNzTmFtZSA9IFwic3ZhLWdyaWRfX2dyaWQtc2l6ZXJcIjtcclxuICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uXCI7XHJcbiAgICBsZXQgbXNucnk6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIGxldCBnZXRNYXNvbnJ5ID0gKCkgPT4gbXNucnk7XHJcblxyXG4gICAgY29uc3QgZ3JpZFNpemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9NYXNvbnJ5IGdyaWRTaXplciBlbXB0eSBlbGVtZW50LCBvbmx5IHVzZWQgZm9yIGVsZW1lbnQgc2l6aW5nXHJcblxyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmNsYXNzTmFtZSA9IFwic3ZhLWdyaWRcIjtcclxuICAgIGdyaWRTaXplci5jbGFzc05hbWUgPSBncmlkU2l6ZXJDbGFzc05hbWU7XHJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ3JpZFNpemVyKTtcclxuXHJcbiAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcclxuICAgICAgY29uc3QgcXVlc3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgcXVlc3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICBjb25zdCB2aXp1YWxpemVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gKDxhbnk+cXVlc3Rpb24pW1widGl0bGVcIl07XHJcblxyXG4gICAgICBxdWVzdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lO1xyXG4gICAgICBxdWVzdGlvbkNvbnRlbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lICsgXCJfX2NvbnRlbnRcIjtcclxuICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiX190aXRsZVwiO1xyXG5cclxuICAgICAgcXVlc3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XHJcbiAgICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh2aXp1YWxpemVyRWxlbWVudCk7XHJcbiAgICAgIHF1ZXN0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChxdWVzdGlvbkNvbnRlbnQpO1xyXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25FbGVtZW50KTtcclxuXHJcbiAgICAgIGNvbnN0IHZpc3VhbGl6ZXIgPSB0aGlzLnJlbmRlclF1ZXN0aW9uVmlzdWFsaWNhdGlvbihcclxuICAgICAgICB2aXp1YWxpemVyRWxlbWVudCxcclxuICAgICAgICBxdWVzdGlvbixcclxuICAgICAgICB0aGlzLmRhdGFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHZpc3VhbGl6ZXIub25VcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdldE1hc29ucnkoKSkge1xyXG4gICAgICAgICAgZ2V0TWFzb25yeSgpLmxheW91dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1zbnJ5ID0gbmV3IE1hc29ucnkodGhpcy50YXJnZXRFbGVtZW50LCB7XHJcbiAgICAgIGNvbHVtbldpZHRoOiBcIi5cIiArIGdyaWRTaXplckNsYXNzTmFtZSxcclxuICAgICAgaXRlbVNlbGVjdG9yOiBcIi5cIiArIHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICByZW5kZXJRdWVzdGlvblZpc3VhbGljYXRpb24oXHJcbiAgICB2aXp1YWxpemVyRWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+XHJcbiAgKSB7XHJcbiAgICB2YXIgdmlzdWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci5nZXRWaXN1YWxpemVycyhxdWVzdGlvbi5nZXRUeXBlKCkpO1xyXG4gICAgdmFyIHZpc3VhbGl6ZXIgPSBuZXcgdmlzdWFsaXplcnNbMF0odml6dWFsaXplckVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhKTtcclxuICAgIHZpc3VhbGl6ZXIucmVuZGVyKCk7XHJcbiAgICByZXR1cm4gdmlzdWFsaXplcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC50cyIsImltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uUGFuZWwgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uUGFuZWxEeW5hbWljTW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIodGFyZ2V0Tm9kZSwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5kYXRhID0gW107XHJcbiAgICBkYXRhLmZvckVhY2goXHJcbiAgICAgIGRhdGFJdGVtID0+XHJcbiAgICAgICAgISFkYXRhSXRlbVtxdWVzdGlvbi5uYW1lXSAmJlxyXG4gICAgICAgICh0aGlzLmRhdGEgPSB0aGlzLmRhdGEuY29uY2F0KGRhdGFJdGVtW3F1ZXN0aW9uLm5hbWVdKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRRdWVzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBwYW5lbGR5bmFtaWM6IFF1ZXN0aW9uUGFuZWxEeW5hbWljTW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XHJcbiAgICByZXR1cm4gcGFuZWxkeW5hbWljLnBhbmVsc1swXS5xdWVzdGlvbnM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgdmlzUGFuZWwgPSBuZXcgVmlzdWFsaXphdGlvblBhbmVsKFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bW1hcnlDb250YWluZXJcIiksXHJcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCksXHJcbiAgICAgIHRoaXMuZGF0YVxyXG4gICAgKTtcclxuICAgIHZpc1BhbmVsLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxyXG4gIFwicGFuZWxkeW5hbWljXCIsXHJcbiAgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1xyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsRHluYW1pYy50cyIsImltcG9ydCB7IHN0b3BXb3JkcyB9IGZyb20gXCIuL2VuZ2xpc2hcIjtcclxuXHJcbnZhciBzdG9wV29yZHNEaWN0aW9uYXJ5OiB7IFtpbmRleDogc3RyaW5nXTogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbnN0b3BXb3Jkc0RpY3Rpb25hcnlbXCJlblwiXSA9IHN0b3BXb3JkcztcclxuXHJcbmV4cG9ydCB2YXIgdGV4dEhlbHBlciA9IHtcclxuICBnZXRTdG9wV29yZHM6IChsb2NhbGU6IHN0cmluZyA9IFwiXCIpID0+IHtcclxuICAgIHJldHVybiBzdG9wV29yZHNEaWN0aW9uYXJ5W2xvY2FsZSB8fCBcImVuXCJdIHx8IFtdO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXgudHMiLCIvKipcbiAqIEV2RW1pdHRlciB2MS4xLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICkgPT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIHZhciBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICB2YXIgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICB2YXIgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggdmFyIGk9MDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cbiAgICB2YXIgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IGMzIGZyb20gXCJjM1wiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTZWxlY3RCYXNlIH0gZnJvbSBcIi4uL3NlbGVjdEJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlQzMgZXh0ZW5kcyBTZWxlY3RCYXNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYXJ0OiBjMy5DaGFydEFQSTtcclxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlcyA9IFtcImJhclwiLCBcImxpbmVcIiwgXCJwaWVcIiwgXCJkb251dFwiXTtcclxuICBjaGFydFR5cGUgPSBcImJhclwiO1xyXG4gIGNoYXJ0Tm9kZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKCF0aGlzLmNoYXJ0KSByZXR1cm47XHJcbiAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHRvb2xiYXJDaGFuZ2VIYW5kbGVyID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2hhcnRUeXBlICE9PSBlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0Q2hhcnRDMyh0aGlzLmNoYXJ0Tm9kZSwgdGhpcy5jaGFydFR5cGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNyZWF0ZUNoYXJ0KCkge1xyXG4gICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0Q2hhcnRDMyh0aGlzLmNoYXJ0Tm9kZSwgdGhpcy5jaGFydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDaGFydEMzKGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQsIGNoYXJ0VHlwZTogc3RyaW5nKTogYzMuQ2hhcnRBUEkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgIHZhciBzdGF0aXN0aWNzID0gZGF0YVswXTtcclxuICAgIHZhciBjb2x1bW5zID0gW1tcInhcIl0uY29uY2F0KHRoaXMuZ2V0TGFiZWxzKCkpXTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKGRhdGFzZXQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbHVtbnMucHVzaChbXCJcIiArIGluZGV4XS5jb25jYXQoZGF0YXNldCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGMzLmdlbmVyYXRlKHtcclxuICAgICAgYmluZHRvOiBjaGFydE5vZGUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB4OiBcInhcIixcclxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxyXG4gICAgICAgIHR5cGU6IHRoaXMuY2hhcnRUeXBlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgcGF0dGVybjogdGhpcy5nZXRDb2xvcnMoKVxyXG4gICAgICB9LFxyXG4gICAgICBiYXI6IHtcclxuICAgICAgICB3aWR0aDoge1xyXG4gICAgICAgICAgcmF0aW86IDAuNSAvLyB0aGlzIG1ha2VzIGJhciB3aWR0aCA1MCUgb2YgbGVuZ3RoIGJldHdlZW4gdGlja3NcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGF4aXM6IHtcclxuICAgICAgICB4OiB7XHJcbiAgICAgICAgICB0eXBlOiBcImNhdGVnb3J5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHk6IHtcclxuICAgICAgICAgIHRpY2s6IHtcclxuICAgICAgICAgICAgdmFsdWVzOiBzdGF0aXN0aWNzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBsZWdlbmQ6IHtcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNoZWNrYm94XCIsIFNlbGVjdEJhc2VDMyk7XHJcbi8vIFZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInJhZGlvZ3JvdXBcIiwgU2VsZWN0QmFzZUMzKTtcclxuLy8gVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiZHJvcGRvd25cIiwgU2VsZWN0QmFzZUMzKTtcclxuLy8gVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiaW1hZ2VwaWNrZXJcIiwgU2VsZWN0QmFzZUMzKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2MzL3NlbGVjdEJhc2UudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgUGxvdGx5IGZyb20gXCJwbG90bHkuanNcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9zZWxlY3RCYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFzZVBsb3RseSBleHRlbmRzIFNlbGVjdEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PjtcclxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlcyA9IFtcImJhclwiLCBcInBpZVwiLCBcInNjYXR0ZXJcIl07XHJcbiAgY2hhcnRUeXBlID0gXCJiYXJcIjtcclxuICBjaGFydE5vZGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIFBsb3RseS5wdXJnZSh0aGlzLmNoYXJ0Tm9kZSk7XHJcbiAgfVxyXG5cclxuICB0b29sYmFyQ2hhbmdlSGFuZGxlciA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmICh0aGlzLmNoYXJ0VHlwZSAhPT0gZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgdGhpcy5jaGFydFR5cGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY2hhcnQgPSB0aGlzLmdldFBsb3RseUNoYXJ0KHRoaXMuY2hhcnROb2RlLCB0aGlzLmNoYXJ0VHlwZSk7XHJcbiAgICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjcmVhdGVDaGFydCgpIHtcclxuICAgIHRoaXMuY2hhcnQgPSB0aGlzLmdldFBsb3RseUNoYXJ0KHRoaXMuY2hhcnROb2RlLCB0aGlzLmNoYXJ0VHlwZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBsb3RseUNoYXJ0KFxyXG4gICAgY2hhcnROb2RlOiBIVE1MRWxlbWVudCxcclxuICAgIGNoYXJ0VHlwZTogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+IHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcclxuICAgIGNvbnN0IGRhdGFzZXRzID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpO1xyXG4gICAgY29uc3QgdHJhY2VzOiBhbnkgPSBbXTtcclxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKCk7XHJcblxyXG4gICAgY29uc3QgdHJhY2VDb25maWc6IGFueSA9IHtcclxuICAgICAgdHlwZTogY2hhcnRUeXBlLFxyXG4gICAgICB5OiBsYWJlbHMsXHJcbiAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICBvcmllbnRhdGlvbjogXCJoXCIsXHJcbiAgICAgIG1vZGU6IFwibWFya2Vyc1wiLFxyXG4gICAgICB3aWR0aDogMC41XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChkYXRhc2V0cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdHJhY2VDb25maWdbXCJtYXJrZXJcIl0gPSB7IGNvbG9yOiBjb2xvcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhc2V0cy5mb3JFYWNoKGRhdGFzZXQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwicGllXCIpIHtcclxuICAgICAgICB0cmFjZXMucHVzaChPYmplY3QuYXNzaWduKHt9LCB0cmFjZUNvbmZpZywgeyB2YWx1ZXM6IGRhdGFzZXQgfSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyYWNlcy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHRyYWNlQ29uZmlnLCB7IHg6IGRhdGFzZXQgfSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoZWlnaHQgPVxyXG4gICAgICBjaGFydFR5cGUgPT09IFwicGllXCJcclxuICAgICAgICA/IDQ1MFxyXG4gICAgICAgIDogKGxhYmVscy5sZW5ndGggKyAobGFiZWxzLmxlbmd0aCArIDEpICogMC41KSAqIDIwO1xyXG5cclxuICAgIGNvbnN0IGxheW91dDogYW55ID0ge1xyXG4gICAgICAvLyB0aXRsZTogcXVlc3Rpb24ubmFtZSxcclxuICAgICAgZm9udDoge1xyXG4gICAgICAgIGZhbWlseTogXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgIHNpemU6IDE0LFxyXG4gICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgICBjb2xvcjogXCIjNDA0MDQwXCJcclxuICAgICAgfSxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgIHQ6IDAsXHJcbiAgICAgICAgYjogMCxcclxuICAgICAgICByOiAxMFxyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcndheTogY29sb3JzLFxyXG4gICAgICB5YXhpczoge1xyXG4gICAgICAgIGF1dG9tYXJnaW46IHRydWUsXHJcbiAgICAgICAgdHlwZTogXCJjYXRlZ29yeVwiLFxyXG4gICAgICAgIHRpY2tsZW46IDUsXHJcbiAgICAgICAgdGlja2NvbG9yOiBcInRyYW5zcGFyZW50XCJcclxuICAgICAgfSxcclxuICAgICAgeGF4aXM6IHtcclxuICAgICAgICBhdXRvbWFyZ2luOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIHBhcGVyX2JnY29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgZGlzcGxheWxvZ286IGZhbHNlLFxyXG4gICAgICByZXNwb25zaXZlOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBQbG90bHkubmV3UGxvdChjaGFydE5vZGUsIHRyYWNlcywgbGF5b3V0LCBjb25maWcpO1xyXG4gIH1cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY2hlY2tib3hcIiwgU2VsZWN0QmFzZVBsb3RseSk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInJhZGlvZ3JvdXBcIiwgU2VsZWN0QmFzZVBsb3RseSk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImRyb3Bkb3duXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJpbWFnZXBpY2tlclwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9zZWxlY3RCYXNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUGxvdGx5XCIsXCJjb21tb25qczJcIjpcIlBsb3RseVwiLFwiY29tbW9uanNcIjpcIlBsb3RseVwiLFwiYW1kXCI6XCJQbG90bHlcIn1cbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImMzXCIsXCJjb21tb25qczJcIjpcImMzXCIsXCJjb21tb25qc1wiOlwiYzNcIixcImFtZFwiOlwiYzNcIn1cbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gXCIuL21hdHJpeFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JhdGluZ1wiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYzMvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9tYXRyaXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYXRpbmdcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoYXJ0anMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCBcIi4vZGF0YXRhYmxlcy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgRGF0YVRhYmxlc09wdGlvbnMge1xyXG4gIGJ1dHRvbnM6XHJcbiAgICB8IGJvb2xlYW5cclxuICAgIHwgc3RyaW5nW11cclxuICAgIHwgRGF0YVRhYmxlcy5CdXR0b25zU2V0dGluZ3NcclxuICAgIHwgRGF0YVRhYmxlcy5CdXR0b25TZXR0aW5nc1tdO1xyXG5cclxuICBkb206IHN0cmluZztcclxuXHJcbiAgb3JkZXJGaXhlZDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IEFycmF5PEFycmF5PG51bWJlciB8IHN0cmluZz4+IHwgb2JqZWN0O1xyXG5cclxuICByb3dHcm91cDogYm9vbGVhbiB8IERhdGFUYWJsZXMuUm93R3JvdXBTZXR0aW5ncztcclxuXHJcbiAgaGVhZGVyQ2FsbGJhY2s6IERhdGFUYWJsZXMuRnVuY3Rpb25IZWFkZXJDYWxsYmFjaztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZXMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcclxuICAgIHByaXZhdGUgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcclxuICAgIHByaXZhdGUgZGF0YTogQXJyYXk8T2JqZWN0PixcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGF0YVRhYmxlc09wdGlvbnNcclxuICApIHt9XHJcblxyXG4gIGdyb3VwQnk6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdGFibGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgY29uc3QgY3JlYXRlR3JvdXBpbmdCdXR0b24gPSB0aGlzLmNyZWF0ZUdyb3VwaW5nQnV0dG9uO1xyXG4gICAgY29uc3QgY3JlYXRlU2VsZWN0QnV0dG9uID0gdGhpcy5jcmVhdGVTZWxlY3RCdXR0b247XHJcblxyXG4gICAgdmFyIGNvbHVtbnNEYXRhOiBhbnkgPSB0aGlzLmdldENvbHVtbnMoKS5tYXAoKGM6IGFueSkgPT4gYy5kYXRhKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHtcclxuICAgICAgYnV0dG9uczogW1wiY29weVwiLCBcImNzdlwiLCBcInByaW50XCJdLFxyXG4gICAgICBkb206IFwiQmxmcnRpcFwiLFxyXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgIGNvbHVtbnM6IHRoaXMuZ2V0Q29sdW1ucygpLFxyXG4gICAgICAvLyBvcmRlckZpeGVkOiBbWzEsIFwiYXNjXCJdXSxcclxuICAgICAgcm93R3JvdXA6IHtcclxuICAgICAgICBkYXRhU3JjOiBjb2x1bW5zRGF0YVswXSxcclxuICAgICAgICBlbmRSZW5kZXI6IGZ1bmN0aW9uKHJvd3MsIGdyb3VwKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJDb3VudDogXCIgKyByb3dzLmRhdGEoKS5jb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiBcImFwaVwiLFxyXG4gICAgICBoZWFkZXJDYWxsYmFjazogKHRoZWFkLCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSA9PiB7XHJcbiAgICAgICAgdmFyIGRhdGF0YWJsZUFwaSA9ICQodGFibGVOb2RlKVxyXG4gICAgICAgICAgLmRhdGFUYWJsZSgpXHJcbiAgICAgICAgICAuYXBpKCk7XHJcbiAgICAgICAgJCh0aGVhZClcclxuICAgICAgICAgIC5jaGlsZHJlbihcInRoXCIpXHJcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbihpbmRleCwgbm9kZSkge1xyXG4gICAgICAgICAgICB2YXIgdGhOb2RlID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoTm9kZS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlR3JvdXBpbmdCdXR0b24oZGF0YXRhYmxlQXBpLCBjb2x1bW5zRGF0YVtpbmRleF0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aE5vZGUucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNlbGVjdEJ1dHRvbihkYXRhdGFibGVBcGksIGluZGV4LCBjb2x1bW5zRGF0YVtpbmRleF0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGUgZGlzcGxheSBkYXRhVGFibGVcIjtcclxuXHJcbiAgICBjb25zdCBkYXRhdGFibGVBcGkgPSAkKHRhYmxlTm9kZSkuRGF0YVRhYmxlKG9wdGlvbnMpO1xyXG4gICAgZGF0YXRhYmxlQXBpXHJcbiAgICAgIC5yb3dHcm91cCgpXHJcbiAgICAgIC5lbmFibGUoZmFsc2UpXHJcbiAgICAgIC5kcmF3KCk7XHJcblxyXG4gICAgLy8gZGF0YXRhYmxlQXBpLm9uKFwicm93Z3JvdXAtZGF0YXNyY1wiLCBmdW5jdGlvbihlLCBkdCwgdmFsKSB7XHJcbiAgICAvLyBkYXRhdGFibGVBcGkub3JkZXIuZml4ZWQoeyBwcmU6IFtbY29sdW1uc0RhdGEuaW5kZXhPZih2YWwpLCBcImFzY1wiXV0gfSkuZHJhdygpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTZWxlY3RCdXR0b24gPSAoXHJcbiAgICBkYXRhdGFibGVBcGk6IERhdGFUYWJsZXMuQXBpLFxyXG4gICAgY29sSWR4OiBudW1iZXIsXHJcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcclxuICApOiBIVE1MQnV0dG9uRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU2VsZWN0IE1lXCI7XHJcbiAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAoPGFueT5kYXRhdGFibGVBcGkuY29sdW1ucygpKS5kZXNlbGVjdCgpO1xyXG4gICAgICAoPGFueT5kYXRhdGFibGVBcGkuY29sdW1uKGNvbElkeCkpLnNlbGVjdCgpO1xyXG4gICAgICAhIXRoaXMub25Db2x1bW5TZWxlY3RlZCAmJiB0aGlzLm9uQ29sdW1uU2VsZWN0ZWQoY29sdW1uTmFtZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9O1xyXG5cclxuICBjcmVhdGVHcm91cGluZ0J1dHRvbiA9IChcclxuICAgIGRhdGF0YWJsZUFwaTogRGF0YVRhYmxlcy5BcGksXHJcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcclxuICApOiBIVE1MQnV0dG9uRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiR3JvdXAgQnkgTWVcIjtcclxuXHJcbiAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdyb3VwQnkuaW5kZXhPZihjb2x1bW5OYW1lKTtcclxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBCeS5wdXNoKGNvbHVtbk5hbWUpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlVuZ3JvdXAgQnkgTWVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJHcm91cCBCeSBNZVwiO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBCeS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhdGFibGVBcGkucm93R3JvdXAoKS5lbmFibGUodGhpcy5ncm91cEJ5Lmxlbmd0aCA+IDApO1xyXG4gICAgICBpZiAodGhpcy5ncm91cEJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBkYXRhdGFibGVBcGkucm93R3JvdXAoKS5kYXRhU3JjKDxhbnk+dGhpcy5ncm91cEJ5KTtcclxuICAgICAgfVxyXG4gICAgICBkYXRhdGFibGVBcGkuZHJhdygpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH07XHJcblxyXG4gIGdldENvbHVtbnMoKTogQXJyYXk8T2JqZWN0PiB7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCkubWFwKHF1ZXN0aW9uID0+IHtcclxuICAgICAgY29uc3QgcSA9IDxRdWVzdGlvbj5xdWVzdGlvbjtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YTogcS5uYW1lLFxyXG4gICAgICAgIHNUaXRsZTogKHEudGl0bGUgfHwgXCJcIikudHJpbSgpIHx8IHEubmFtZSxcclxuICAgICAgICBtUmVuZGVyOiAoZGF0YTogb2JqZWN0LCB0eXBlOiBzdHJpbmcsIHJvdzogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN1cnZleS5kYXRhID0gcm93O1xyXG4gICAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IHEuZGlzcGxheVZhbHVlO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKHR5cGVvZiBkaXNwbGF5VmFsdWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICA/IGRpc3BsYXlWYWx1ZVxyXG4gICAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkoZGlzcGxheVZhbHVlKSkgfHwgXCJcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29sdW1ucztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNvbHVtblNlbGVjdGVkOiAoZGF0YU5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YXRhYmxlcy9kYXRhdGFibGVzLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYXRpbmdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0cml4XCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvaW5kZXgudHMiLCJpbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pYyBleHRlbmRzIFZpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgY29uc3QgbWF0cml4ZHluYW1pYzogUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xyXG4gICAgY29uc3QgdmlzaWJsZVJvd3MgPSBtYXRyaXhkeW5hbWljLnZpc2libGVSb3dzO1xyXG5cclxuICAgIGlmICh2aXNpYmxlUm93cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcclxuXHJcbiAgICByZXR1cm4gdmlzaWJsZVJvd3NbMF0uY2VsbHMubWFwKGMgPT4gYy5xdWVzdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXHJcbiAgXCJtYXRyaXhkeW5hbWljXCIsXHJcbiAgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcclxuKTtcclxuXHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcclxuICBcIm1hdHJpeGRyb3Bkb3duXCIsXHJcbiAgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IFdvcmRDbG91ZExpYiBmcm9tIFwid29yZGNsb3VkXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4uL3Zpc3VhbGl6ZXJCYXNlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHRleHRIZWxwZXIgfSBmcm9tIFwiLi9zdG9wd29yZHMvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JkQ2xvdWQgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3VkOiBhbnk7XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBsZXQgcmVzdWx0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcblxyXG4gICAgbGV0IHN0b3BXb3JkcyA9IHRleHRIZWxwZXIuZ2V0U3RvcFdvcmRzKCk7XHJcbiAgICBsZXQgc3RvcFRoZVdvcmQgPSAod29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmIChzdG9wV29yZHMuaW5kZXhPZih3b3JkKSAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gd29yZDtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHByb2Nlc3NTdHJpbmcgPSAocm93OiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKCEhcm93KSB7XHJcbiAgICAgICAgcm93LnNwbGl0KFwiIFwiKS5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICAgICAgd29yZCA9IHN0b3BUaGVXb3JkKHdvcmQudG9Mb3dlckNhc2UoKSB8fCBcIlwiKTtcclxuICAgICAgICAgIGlmICghIXdvcmQpIHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHRbd29yZF0pIHtcclxuICAgICAgICAgICAgICByZXN1bHRbd29yZF0gPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc3VsdFt3b3JkXSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xyXG4gICAgICAgICAgcm93VmFsdWUuZm9yRWFjaChwcm9jZXNzU3RyaW5nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiByb3dWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb3dWYWx1ZSkuZm9yRWFjaChrZXkgPT4gcHJvY2Vzc1N0cmluZyhyb3dWYWx1ZVtrZXldKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXN1bHQpLm1hcChrZXkgPT4ge1xyXG4gICAgICByZXR1cm4gW2tleSwgcmVzdWx0W2tleV1dO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xyXG4gICAgY29uc3QgY2FudmFzTm9kZSA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVtcHR5VGV4dE5vZGUuaW5uZXJIVE1MID0gXCJUaGVyZSBpcyBubyByZXN1bHRzIHlldFwiO1xyXG5cclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzTm9kZSk7XHJcblxyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICBsaXN0OiBkYXRhLFxyXG4gICAgICB3ZWlnaHRGYWN0b3I6IDIwLFxyXG4gICAgICBmb250RmFtaWx5OiBcIlNlZ29lIFVJIEJvbGQsIHNhbnMtc2VyaWZcIixcclxuICAgICAgY29sb3I6ICh3b3JkOiBzdHJpbmcsIHdlaWdodDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tQ29sb3IoKTtcclxuICAgICAgfSxcclxuICAgICAgcm90YXRlUmF0aW86IDAuNSxcclxuICAgICAgcm90YXRpb25TdGVwczogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgY2xpY2s6IGZ1bmN0aW9uKGl0ZW06IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1bMF0gKyBcIjogXCIgKyBpdGVtWzFdKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNsb3VkID0gV29yZENsb3VkTGliKGNhbnZhc05vZGUsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKCEhdGhpcy5jbG91ZCkge1xyXG4gICAgICB0aGlzLmNsb3VkID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInRleHRcIiwgV29yZENsb3VkKTtcclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY29tbWVudFwiLCBXb3JkQ2xvdWQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgV29yZENsb3VkKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC93b3JkY2xvdWQudHMiLCIvKipcbiAqIG1hdGNoZXNTZWxlY3RvciB2Mi4wLjJcbiAqIG1hdGNoZXNTZWxlY3RvciggZWxlbWVudCwgJy5zZWxlY3RvcicgKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1hdGNoZXNNZXRob2QgPSAoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFbGVtUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBzdGFuZGFyZCBtZXRob2QgbmFtZSBmaXJzdFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXMgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXMnO1xuICAgIH1cbiAgICAvLyBjaGVjayB1bi1wcmVmaXhlZFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlc1NlbGVjdG9yJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdmVuZG9yIHByZWZpeGVzXG4gICAgdmFyIHByZWZpeGVzID0gWyAnd2Via2l0JywgJ21veicsICdtcycsICdvJyBdO1xuXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHByZWZpeCArICdNYXRjaGVzU2VsZWN0b3InO1xuICAgICAgaWYgKCBFbGVtUHJvdG9bIG1ldGhvZCBdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgICByZXR1cm4gZWxlbVsgbWF0Y2hlc01ldGhvZCBdKCBzZWxlY3RvciApO1xuICB9O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGF0YWJsZXMvZGF0YXRhYmxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjIuMC43XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yJ1xuICAgIF0sIGZ1bmN0aW9uKCBtYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3InKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZml6enlVSVV0aWxzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3JcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xuICAgIGFbIHByb3AgXSA9IGJbIHByb3AgXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG52YXIgYXJyYXlTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG4gICAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICAvLyByZXR1cm4gZW1wdHkgYXJyYXkgaWYgdW5kZWZpbmVkIG9yIG51bGwuICM2XG4gIGlmICggb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBpc0FycmF5TGlrZSA9IHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcic7XG4gIGlmICggaXNBcnJheUxpa2UgKSB7XG4gICAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICAgIHJldHVybiBhcnJheVNsaWNlLmNhbGwoIG9iaiApO1xuICB9XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufTtcblxuLy8gLS0tLS0gcmVtb3ZlRnJvbSAtLS0tLSAvL1xuXG51dGlscy5yZW1vdmVGcm9tID0gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICB2YXIgaW5kZXggPSBhcnkuaW5kZXhPZiggb2JqICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgYXJ5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UGFyZW50IC0tLS0tIC8vXG5cbnV0aWxzLmdldFBhcmVudCA9IGZ1bmN0aW9uKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgd2hpbGUgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGZmRWxlbXMgPSBbXTtcblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICBpZiAoICEoIGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgLy8gZmlsdGVyXG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICB9XG4gICAgLy8gZmluZCBjaGlsZHJlblxuICAgIHZhciBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGNoaWxkRWxlbXNbaV0gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmZkVsZW1zO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxMDA7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICB2YXIgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpc1sgdGltZW91dE5hbWUgXSA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgbWV0aG9kLmFwcGx5KCBfdGhpcywgYXJncyApO1xuICAgICAgZGVsZXRlIF90aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIH0sIHRocmVzaG9sZCApO1xuICB9O1xufTtcblxuLy8gLS0tLS0gZG9jUmVhZHkgLS0tLS0gLy9cblxudXRpbHMuZG9jUmVhZHkgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gIHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgaWYgKCByZWFkeVN0YXRlID09ICdjb21wbGV0ZScgfHwgcmVhZHlTdGF0ZSA9PSAnaW50ZXJhY3RpdmUnICkge1xuICAgIC8vIGRvIGFzeW5jIHRvIGFsbG93IGZvciBvdGhlciBzY3JpcHRzIHRvIHJ1bi4gbWV0YWZpenp5L2ZsaWNraXR5IzQ0MVxuICAgIHNldFRpbWVvdXQoIGNhbGxiYWNrICk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vamFtZXNyb2JlcnRzLm5hbWUvYmxvZy8yMDEwLzAyLzIyL3N0cmluZy1mdW5jdGlvbnMtZm9yLWphdmFzY3JpcHQtdHJpbS10by1jYW1lbC1jYXNlLXRvLWRhc2hlZC1hbmQtdG8tdW5kZXJzY29yZS9cbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG4vKipcbiAqIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSBbZGF0YS1uYW1lc3BhY2VdIG9yIC5qcy1uYW1lc3BhY2UgY2xhc3NcbiAqIGh0bWxJbml0KCBXaWRnZXQsICd3aWRnZXROYW1lJyApXG4gKiBvcHRpb25zIGFyZSBwYXJzZWQgZnJvbSBkYXRhLW5hbWVzcGFjZS1vcHRpb25zXG4gKi9cbnV0aWxzLmh0bWxJbml0ID0gZnVuY3Rpb24oIFdpZGdldENsYXNzLCBuYW1lc3BhY2UgKSB7XG4gIHV0aWxzLmRvY1JlYWR5KCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGFzaGVkTmFtZXNwYWNlID0gdXRpbHMudG9EYXNoZWQoIG5hbWVzcGFjZSApO1xuICAgIHZhciBkYXRhQXR0ciA9ICdkYXRhLScgKyBkYXNoZWROYW1lc3BhY2U7XG4gICAgdmFyIGRhdGFBdHRyRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnWycgKyBkYXRhQXR0ciArICddJyApO1xuICAgIHZhciBqc0Rhc2hFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuanMtJyArIGRhc2hlZE5hbWVzcGFjZSApO1xuICAgIHZhciBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZGF0YUF0dHJFbGVtcyApXG4gICAgICAuY29uY2F0KCB1dGlscy5tYWtlQXJyYXkoIGpzRGFzaEVsZW1zICkgKTtcbiAgICB2YXIgZGF0YU9wdGlvbnNBdHRyID0gZGF0YUF0dHIgKyAnLW9wdGlvbnMnO1xuICAgIHZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuXG4gICAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICB2YXIgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhQXR0ciApIHx8XG4gICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhT3B0aW9uc0F0dHIgKTtcbiAgICAgIHZhciBvcHRpb25zO1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucyA9IGF0dHIgJiYgSlNPTi5wYXJzZSggYXR0ciApO1xuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICAvLyBsb2cgZXJyb3IsIGRvIG5vdCBpbml0aWFsaXplXG4gICAgICAgIGlmICggY29uc29sZSApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCAnRXJyb3IgcGFyc2luZyAnICsgZGF0YUF0dHIgKyAnIG9uICcgKyBlbGVtLmNsYXNzTmFtZSArXG4gICAgICAgICAgJzogJyArIGVycm9yICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ25hbWVzcGFjZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9KTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maXp6eS11aS11dGlscy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBNYXNvbnJ5IHY0LjIuMlxuICogQ2FzY2FkaW5nIGdyaWQgbGF5b3V0IGxpYnJhcnlcbiAqIGh0dHBzOi8vbWFzb25yeS5kZXNhbmRyby5jb21cbiAqIE1JVCBMaWNlbnNlXG4gKiBieSBEYXZpZCBEZVNhbmRyb1xuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk1hc29ucnkgPSBmYWN0b3J5KFxuICAgICAgd2luZG93Lk91dGxheWVyLFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggT3V0bGF5ZXIsIGdldFNpemUgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWFzb25yeURlZmluaXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBjcmVhdGUgYW4gT3V0bGF5ZXIgbGF5b3V0IGNsYXNzXG4gIHZhciBNYXNvbnJ5ID0gT3V0bGF5ZXIuY3JlYXRlKCdtYXNvbnJ5Jyk7XG4gIC8vIGlzRml0V2lkdGggLT4gZml0V2lkdGhcbiAgTWFzb25yeS5jb21wYXRPcHRpb25zLmZpdFdpZHRoID0gJ2lzRml0V2lkdGgnO1xuXG4gIHZhciBwcm90byA9IE1hc29ucnkucHJvdG90eXBlO1xuXG4gIHByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSgpO1xuICAgIHRoaXMuX2dldE1lYXN1cmVtZW50KCAnY29sdW1uV2lkdGgnLCAnb3V0ZXJXaWR0aCcgKTtcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2d1dHRlcicsICdvdXRlcldpZHRoJyApO1xuICAgIHRoaXMubWVhc3VyZUNvbHVtbnMoKTtcblxuICAgIC8vIHJlc2V0IGNvbHVtbiBZXG4gICAgdGhpcy5jb2xZcyA9IFtdO1xuICAgIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLmNvbHM7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXMucHVzaCggMCApO1xuICAgIH1cblxuICAgIHRoaXMubWF4WSA9IDA7XG4gICAgdGhpcy5ob3Jpem9udGFsQ29sSW5kZXggPSAwO1xuICB9O1xuXG4gIHByb3RvLm1lYXN1cmVDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRDb250YWluZXJXaWR0aCgpO1xuICAgIC8vIGlmIGNvbHVtbldpZHRoIGlzIDAsIGRlZmF1bHQgdG8gb3V0ZXJXaWR0aCBvZiBmaXJzdCBpdGVtXG4gICAgaWYgKCAhdGhpcy5jb2x1bW5XaWR0aCApIHtcbiAgICAgIHZhciBmaXJzdEl0ZW0gPSB0aGlzLml0ZW1zWzBdO1xuICAgICAgdmFyIGZpcnN0SXRlbUVsZW0gPSBmaXJzdEl0ZW0gJiYgZmlyc3RJdGVtLmVsZW1lbnQ7XG4gICAgICAvLyBjb2x1bW5XaWR0aCBmYWxsIGJhY2sgdG8gaXRlbSBvZiBmaXJzdCBlbGVtZW50XG4gICAgICB0aGlzLmNvbHVtbldpZHRoID0gZmlyc3RJdGVtRWxlbSAmJiBnZXRTaXplKCBmaXJzdEl0ZW1FbGVtICkub3V0ZXJXaWR0aCB8fFxuICAgICAgICAvLyBpZiBmaXJzdCBlbGVtIGhhcyBubyB3aWR0aCwgZGVmYXVsdCB0byBzaXplIG9mIGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5XaWR0aCA9IHRoaXMuY29sdW1uV2lkdGggKz0gdGhpcy5ndXR0ZXI7XG5cbiAgICAvLyBjYWxjdWxhdGUgY29sdW1uc1xuICAgIHZhciBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyV2lkdGggKyB0aGlzLmd1dHRlcjtcbiAgICB2YXIgY29scyA9IGNvbnRhaW5lcldpZHRoIC8gY29sdW1uV2lkdGg7XG4gICAgLy8gZml4IHJvdW5kaW5nIGVycm9ycywgdHlwaWNhbGx5IHdpdGggZ3V0dGVyc1xuICAgIHZhciBleGNlc3MgPSBjb2x1bW5XaWR0aCAtIGNvbnRhaW5lcldpZHRoICUgY29sdW1uV2lkdGg7XG4gICAgLy8gaWYgb3ZlcnNob290IGlzIGxlc3MgdGhhbiBhIHBpeGVsLCByb3VuZCB1cCwgb3RoZXJ3aXNlIGZsb29yIGl0XG4gICAgdmFyIG1hdGhNZXRob2QgPSBleGNlc3MgJiYgZXhjZXNzIDwgMSA/ICdyb3VuZCcgOiAnZmxvb3InO1xuICAgIGNvbHMgPSBNYXRoWyBtYXRoTWV0aG9kIF0oIGNvbHMgKTtcbiAgICB0aGlzLmNvbHMgPSBNYXRoLm1heCggY29scywgMSApO1xuICB9O1xuXG4gIHByb3RvLmdldENvbnRhaW5lcldpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gY29udGFpbmVyIGlzIHBhcmVudCBpZiBmaXQgd2lkdGhcbiAgICB2YXIgaXNGaXRXaWR0aCA9IHRoaXMuX2dldE9wdGlvbignZml0V2lkdGgnKTtcbiAgICB2YXIgY29udGFpbmVyID0gaXNGaXRXaWR0aCA/IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIDogdGhpcy5lbGVtZW50O1xuICAgIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAgIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgICB2YXIgc2l6ZSA9IGdldFNpemUoIGNvbnRhaW5lciApO1xuICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBzaXplICYmIHNpemUuaW5uZXJXaWR0aDtcbiAgfTtcblxuICBwcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5nZXRTaXplKCk7XG4gICAgLy8gaG93IG1hbnkgY29sdW1ucyBkb2VzIHRoaXMgYnJpY2sgc3BhblxuICAgIHZhciByZW1haW5kZXIgPSBpdGVtLnNpemUub3V0ZXJXaWR0aCAlIHRoaXMuY29sdW1uV2lkdGg7XG4gICAgdmFyIG1hdGhNZXRob2QgPSByZW1haW5kZXIgJiYgcmVtYWluZGVyIDwgMSA/ICdyb3VuZCcgOiAnY2VpbCc7XG4gICAgLy8gcm91bmQgaWYgb2ZmIGJ5IDEgcGl4ZWwsIG90aGVyd2lzZSB1c2UgY2VpbFxuICAgIHZhciBjb2xTcGFuID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBpdGVtLnNpemUub3V0ZXJXaWR0aCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICBjb2xTcGFuID0gTWF0aC5taW4oIGNvbFNwYW4sIHRoaXMuY29scyApO1xuICAgIC8vIHVzZSBob3Jpem9udGFsIG9yIHRvcCBjb2x1bW4gcG9zaXRpb25cbiAgICB2YXIgY29sUG9zTWV0aG9kID0gdGhpcy5vcHRpb25zLmhvcml6b250YWxPcmRlciA/XG4gICAgICAnX2dldEhvcml6b250YWxDb2xQb3NpdGlvbicgOiAnX2dldFRvcENvbFBvc2l0aW9uJztcbiAgICB2YXIgY29sUG9zaXRpb24gPSB0aGlzWyBjb2xQb3NNZXRob2QgXSggY29sU3BhbiwgaXRlbSApO1xuICAgIC8vIHBvc2l0aW9uIHRoZSBicmlja1xuICAgIHZhciBwb3NpdGlvbiA9IHtcbiAgICAgIHg6IHRoaXMuY29sdW1uV2lkdGggKiBjb2xQb3NpdGlvbi5jb2wsXG4gICAgICB5OiBjb2xQb3NpdGlvbi55XG4gICAgfTtcbiAgICAvLyBhcHBseSBzZXRIZWlnaHQgdG8gbmVjZXNzYXJ5IGNvbHVtbnNcbiAgICB2YXIgc2V0SGVpZ2h0ID0gY29sUG9zaXRpb24ueSArIGl0ZW0uc2l6ZS5vdXRlckhlaWdodDtcbiAgICB2YXIgc2V0TWF4ID0gY29sU3BhbiArIGNvbFBvc2l0aW9uLmNvbDtcbiAgICBmb3IgKCB2YXIgaSA9IGNvbFBvc2l0aW9uLmNvbDsgaSA8IHNldE1heDsgaSsrICkge1xuICAgICAgdGhpcy5jb2xZc1tpXSA9IHNldEhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgcHJvdG8uX2dldFRvcENvbFBvc2l0aW9uID0gZnVuY3Rpb24oIGNvbFNwYW4gKSB7XG4gICAgdmFyIGNvbEdyb3VwID0gdGhpcy5fZ2V0VG9wQ29sR3JvdXAoIGNvbFNwYW4gKTtcbiAgICAvLyBnZXQgdGhlIG1pbmltdW0gWSB2YWx1ZSBmcm9tIHRoZSBjb2x1bW5zXG4gICAgdmFyIG1pbmltdW1ZID0gTWF0aC5taW4uYXBwbHkoIE1hdGgsIGNvbEdyb3VwICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29sOiBjb2xHcm91cC5pbmRleE9mKCBtaW5pbXVtWSApLFxuICAgICAgeTogbWluaW11bVksXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbFNwYW4gLSBudW1iZXIgb2YgY29sdW1ucyB0aGUgZWxlbWVudCBzcGFuc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IGNvbEdyb3VwXG4gICAqL1xuICBwcm90by5fZ2V0VG9wQ29sR3JvdXAgPSBmdW5jdGlvbiggY29sU3BhbiApIHtcbiAgICBpZiAoIGNvbFNwYW4gPCAyICkge1xuICAgICAgLy8gaWYgYnJpY2sgc3BhbnMgb25seSBvbmUgY29sdW1uLCB1c2UgYWxsIHRoZSBjb2x1bW4gWXNcbiAgICAgIHJldHVybiB0aGlzLmNvbFlzO1xuICAgIH1cblxuICAgIHZhciBjb2xHcm91cCA9IFtdO1xuICAgIC8vIGhvdyBtYW55IGRpZmZlcmVudCBwbGFjZXMgY291bGQgdGhpcyBicmljayBmaXQgaG9yaXpvbnRhbGx5XG4gICAgdmFyIGdyb3VwQ291bnQgPSB0aGlzLmNvbHMgKyAxIC0gY29sU3BhbjtcbiAgICAvLyBmb3IgZWFjaCBncm91cCBwb3RlbnRpYWwgaG9yaXpvbnRhbCBwb3NpdGlvblxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGdyb3VwQ291bnQ7IGkrKyApIHtcbiAgICAgIGNvbEdyb3VwW2ldID0gdGhpcy5fZ2V0Q29sR3JvdXBZKCBpLCBjb2xTcGFuICk7XG4gICAgfVxuICAgIHJldHVybiBjb2xHcm91cDtcbiAgfTtcblxuICBwcm90by5fZ2V0Q29sR3JvdXBZID0gZnVuY3Rpb24oIGNvbCwgY29sU3BhbiApIHtcbiAgICBpZiAoIGNvbFNwYW4gPCAyICkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sWXNbIGNvbCBdO1xuICAgIH1cbiAgICAvLyBtYWtlIGFuIGFycmF5IG9mIGNvbFkgdmFsdWVzIGZvciB0aGF0IG9uZSBncm91cFxuICAgIHZhciBncm91cENvbFlzID0gdGhpcy5jb2xZcy5zbGljZSggY29sLCBjb2wgKyBjb2xTcGFuICk7XG4gICAgLy8gYW5kIGdldCB0aGUgbWF4IHZhbHVlIG9mIHRoZSBhcnJheVxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseSggTWF0aCwgZ3JvdXBDb2xZcyApO1xuICB9O1xuXG4gIC8vIGdldCBjb2x1bW4gcG9zaXRpb24gYmFzZWQgb24gaG9yaXpvbnRhbCBpbmRleC4gIzg3M1xuICBwcm90by5fZ2V0SG9yaXpvbnRhbENvbFBvc2l0aW9uID0gZnVuY3Rpb24oIGNvbFNwYW4sIGl0ZW0gKSB7XG4gICAgdmFyIGNvbCA9IHRoaXMuaG9yaXpvbnRhbENvbEluZGV4ICUgdGhpcy5jb2xzO1xuICAgIHZhciBpc092ZXIgPSBjb2xTcGFuID4gMSAmJiBjb2wgKyBjb2xTcGFuID4gdGhpcy5jb2xzO1xuICAgIC8vIHNoaWZ0IHRvIG5leHQgcm93IGlmIGl0ZW0gY2FuJ3QgZml0IG9uIGN1cnJlbnQgcm93XG4gICAgY29sID0gaXNPdmVyID8gMCA6IGNvbDtcbiAgICAvLyBkb24ndCBsZXQgemVyby1zaXplIGl0ZW1zIHRha2UgdXAgc3BhY2VcbiAgICB2YXIgaGFzU2l6ZSA9IGl0ZW0uc2l6ZS5vdXRlcldpZHRoICYmIGl0ZW0uc2l6ZS5vdXRlckhlaWdodDtcbiAgICB0aGlzLmhvcml6b250YWxDb2xJbmRleCA9IGhhc1NpemUgPyBjb2wgKyBjb2xTcGFuIDogdGhpcy5ob3Jpem9udGFsQ29sSW5kZXg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29sOiBjb2wsXG4gICAgICB5OiB0aGlzLl9nZXRDb2xHcm91cFkoIGNvbCwgY29sU3BhbiApLFxuICAgIH07XG4gIH07XG5cbiAgcHJvdG8uX21hbmFnZVN0YW1wID0gZnVuY3Rpb24oIHN0YW1wICkge1xuICAgIHZhciBzdGFtcFNpemUgPSBnZXRTaXplKCBzdGFtcCApO1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLl9nZXRFbGVtZW50T2Zmc2V0KCBzdGFtcCApO1xuICAgIC8vIGdldCB0aGUgY29sdW1ucyB0aGF0IHRoaXMgc3RhbXAgYWZmZWN0c1xuICAgIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLl9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgICB2YXIgZmlyc3RYID0gaXNPcmlnaW5MZWZ0ID8gb2Zmc2V0LmxlZnQgOiBvZmZzZXQucmlnaHQ7XG4gICAgdmFyIGxhc3RYID0gZmlyc3RYICsgc3RhbXBTaXplLm91dGVyV2lkdGg7XG4gICAgdmFyIGZpcnN0Q29sID0gTWF0aC5mbG9vciggZmlyc3RYIC8gdGhpcy5jb2x1bW5XaWR0aCApO1xuICAgIGZpcnN0Q29sID0gTWF0aC5tYXgoIDAsIGZpcnN0Q29sICk7XG4gICAgdmFyIGxhc3RDb2wgPSBNYXRoLmZsb29yKCBsYXN0WCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICAvLyBsYXN0Q29sIHNob3VsZCBub3QgZ28gb3ZlciBpZiBtdWx0aXBsZSBvZiBjb2x1bW5XaWR0aCAjNDI1XG4gICAgbGFzdENvbCAtPSBsYXN0WCAlIHRoaXMuY29sdW1uV2lkdGggPyAwIDogMTtcbiAgICBsYXN0Q29sID0gTWF0aC5taW4oIHRoaXMuY29scyAtIDEsIGxhc3RDb2wgKTtcbiAgICAvLyBzZXQgY29sWXMgdG8gYm90dG9tIG9mIHRoZSBzdGFtcFxuXG4gICAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcbiAgICB2YXIgc3RhbXBNYXhZID0gKCBpc09yaWdpblRvcCA/IG9mZnNldC50b3AgOiBvZmZzZXQuYm90dG9tICkgK1xuICAgICAgc3RhbXBTaXplLm91dGVySGVpZ2h0O1xuICAgIGZvciAoIHZhciBpID0gZmlyc3RDb2w7IGkgPD0gbGFzdENvbDsgaSsrICkge1xuICAgICAgdGhpcy5jb2xZc1tpXSA9IE1hdGgubWF4KCBzdGFtcE1heFksIHRoaXMuY29sWXNbaV0gKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbnRhaW5lclNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1heFkgPSBNYXRoLm1heC5hcHBseSggTWF0aCwgdGhpcy5jb2xZcyApO1xuICAgIHZhciBzaXplID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLm1heFlcbiAgICB9O1xuXG4gICAgaWYgKCB0aGlzLl9nZXRPcHRpb24oJ2ZpdFdpZHRoJykgKSB7XG4gICAgICBzaXplLndpZHRoID0gdGhpcy5fZ2V0Q29udGFpbmVyRml0V2lkdGgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZTtcbiAgfTtcblxuICBwcm90by5fZ2V0Q29udGFpbmVyRml0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdW51c2VkQ29scyA9IDA7XG4gICAgLy8gY291bnQgdW51c2VkIGNvbHVtbnNcbiAgICB2YXIgaSA9IHRoaXMuY29scztcbiAgICB3aGlsZSAoIC0taSApIHtcbiAgICAgIGlmICggdGhpcy5jb2xZc1tpXSAhPT0gMCApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB1bnVzZWRDb2xzKys7XG4gICAgfVxuICAgIC8vIGZpdCBjb250YWluZXIgdG8gY29sdW1ucyB0aGF0IGhhdmUgYmVlbiB1c2VkXG4gICAgcmV0dXJuICggdGhpcy5jb2xzIC0gdW51c2VkQ29scyApICogdGhpcy5jb2x1bW5XaWR0aCAtIHRoaXMuZ3V0dGVyO1xuICB9O1xuXG4gIHByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByZXZpb3VzV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKTtcbiAgICByZXR1cm4gcHJldmlvdXNXaWR0aCAhPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICB9O1xuXG4gIHJldHVybiBNYXNvbnJ5O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWFzb25yeS1sYXlvdXQvbWFzb25yeS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBPdXRsYXllciBJdGVtXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnlcbiAgICApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk91dGxheWVyID0ge307XG4gICAgd2luZG93Lk91dGxheWVyLkl0ZW0gPSBmYWN0b3J5KFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEV2RW1pdHRlciwgZ2V0U2l6ZSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gaGVscGVycyAtLS0tLSAvL1xuXG5mdW5jdGlvbiBpc0VtcHR5T2JqKCBvYmogKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIG9iaiApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJvcCA9IG51bGw7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDU1MzIHN1cHBvcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG52YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2l0aW9uID09ICdzdHJpbmcnID9cbiAgJ3RyYW5zaXRpb24nIDogJ1dlYmtpdFRyYW5zaXRpb24nO1xudmFyIHRyYW5zZm9ybVByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2Zvcm0gPT0gJ3N0cmluZycgP1xuICAndHJhbnNmb3JtJyA6ICdXZWJraXRUcmFuc2Zvcm0nO1xuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xufVsgdHJhbnNpdGlvblByb3BlcnR5IF07XG5cbi8vIGNhY2hlIGFsbCB2ZW5kb3IgcHJvcGVydGllcyB0aGF0IGNvdWxkIGhhdmUgdmVuZG9yIHByZWZpeFxudmFyIHZlbmRvclByb3BlcnRpZXMgPSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUHJvcGVydHksXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnRHVyYXRpb24nLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdQcm9wZXJ0eScsXG4gIHRyYW5zaXRpb25EZWxheTogdHJhbnNpdGlvblByb3BlcnR5ICsgJ0RlbGF5J1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBJdGVtKCBlbGVtZW50LCBsYXlvdXQgKSB7XG4gIGlmICggIWVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgLy8gcGFyZW50IGxheW91dCBjbGFzcywgaS5lLiBNYXNvbnJ5LCBJc290b3BlLCBvciBQYWNrZXJ5XG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuICB0aGlzLnBvc2l0aW9uID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG4vLyBpbmhlcml0IEV2RW1pdHRlclxudmFyIHByb3RvID0gSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5wcm90by5jb25zdHJ1Y3RvciA9IEl0ZW07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gdHJhbnNpdGlvbiBvYmplY3RzXG4gIHRoaXMuX3RyYW5zbiA9IHtcbiAgICBpbmdQcm9wZXJ0aWVzOiB7fSxcbiAgICBjbGVhbjoge30sXG4gICAgb25FbmQ6IHt9XG4gIH07XG5cbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xufTtcblxuLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxucHJvdG8uaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogYXBwbHkgQ1NTIHN0eWxlcyB0byBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAqL1xucHJvdG8uY3NzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICB2YXIgZWxlbVN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuXG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIC8vIHVzZSB2ZW5kb3IgcHJvcGVydHkgaWYgYXZhaWxhYmxlXG4gICAgdmFyIHN1cHBvcnRlZFByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgICBlbGVtU3R5bGVbIHN1cHBvcnRlZFByb3AgXSA9IHN0eWxlWyBwcm9wIF07XG4gIH1cbn07XG5cbiAvLyBtZWFzdXJlIHBvc2l0aW9uLCBhbmQgc2V0cyBpdFxucHJvdG8uZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50ICk7XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICB2YXIgeFZhbHVlID0gc3R5bGVbIGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCcgXTtcbiAgdmFyIHlWYWx1ZSA9IHN0eWxlWyBpc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbScgXTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KCB4VmFsdWUgKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KCB5VmFsdWUgKTtcbiAgLy8gY29udmVydCBwZXJjZW50IHRvIHBpeGVsc1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIGlmICggeFZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSApIHtcbiAgICB4ID0gKCB4IC8gMTAwICkgKiBsYXlvdXRTaXplLndpZHRoO1xuICB9XG4gIGlmICggeVZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSApIHtcbiAgICB5ID0gKCB5IC8gMTAwICkgKiBsYXlvdXRTaXplLmhlaWdodDtcbiAgfVxuICAvLyBjbGVhbiB1cCAnYXV0bycgb3Igb3RoZXIgbm9uLWludGVnZXIgdmFsdWVzXG4gIHggPSBpc05hTiggeCApID8gMCA6IHg7XG4gIHkgPSBpc05hTiggeSApID8gMCA6IHk7XG4gIC8vIHJlbW92ZSBwYWRkaW5nIGZyb20gbWVhc3VyZW1lbnRcbiAgeCAtPSBpc09yaWdpbkxlZnQgPyBsYXlvdXRTaXplLnBhZGRpbmdMZWZ0IDogbGF5b3V0U2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHkgLT0gaXNPcmlnaW5Ub3AgPyBsYXlvdXRTaXplLnBhZGRpbmdUb3AgOiBsYXlvdXRTaXplLnBhZGRpbmdCb3R0b207XG5cbiAgdGhpcy5wb3NpdGlvbi54ID0geDtcbiAgdGhpcy5wb3NpdGlvbi55ID0geTtcbn07XG5cbi8vIHNldCBzZXR0bGVkIHBvc2l0aW9uLCBhcHBseSBwYWRkaW5nXG5wcm90by5sYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIHZhciBzdHlsZSA9IHt9O1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcblxuICAvLyB4XG4gIHZhciB4UGFkZGluZyA9IGlzT3JpZ2luTGVmdCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgdmFyIHhQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gIHZhciB4UmVzZXRQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLnggKyBsYXlvdXRTaXplWyB4UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHhQcm9wZXJ0eSBdID0gdGhpcy5nZXRYVmFsdWUoIHggKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHhSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICAvLyB5XG4gIHZhciB5UGFkZGluZyA9IGlzT3JpZ2luVG9wID8gJ3BhZGRpbmdUb3AnIDogJ3BhZGRpbmdCb3R0b20nO1xuICB2YXIgeVByb3BlcnR5ID0gaXNPcmlnaW5Ub3AgPyAndG9wJyA6ICdib3R0b20nO1xuICB2YXIgeVJlc2V0UHJvcGVydHkgPSBpc09yaWdpblRvcCA/ICdib3R0b20nIDogJ3RvcCc7XG5cbiAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnkgKyBsYXlvdXRTaXplWyB5UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHlQcm9wZXJ0eSBdID0gdGhpcy5nZXRZVmFsdWUoIHkgKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHlSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICB0aGlzLmNzcyggc3R5bGUgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdsYXlvdXQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZ2V0WFZhbHVlID0gZnVuY3Rpb24oIHggKSB7XG4gIHZhciBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdob3Jpem9udGFsJyk7XG4gIHJldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiAhaXNIb3Jpem9udGFsID9cbiAgICAoICggeCAvIHRoaXMubGF5b3V0LnNpemUud2lkdGggKSAqIDEwMCApICsgJyUnIDogeCArICdweCc7XG59O1xuXG5wcm90by5nZXRZVmFsdWUgPSBmdW5jdGlvbiggeSApIHtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgcmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICYmIGlzSG9yaXpvbnRhbCA/XG4gICAgKCAoIHkgLyB0aGlzLmxheW91dC5zaXplLmhlaWdodCApICogMTAwICkgKyAnJScgOiB5ICsgJ3B4Jztcbn07XG5cbnByb3RvLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAvLyBnZXQgY3VycmVudCB4ICYgeSBmcm9tIHRvcC9sZWZ0XG4gIHZhciBjdXJYID0gdGhpcy5wb3NpdGlvbi54O1xuICB2YXIgY3VyWSA9IHRoaXMucG9zaXRpb24ueTtcblxuICB2YXIgZGlkTm90TW92ZSA9IHggPT0gdGhpcy5wb3NpdGlvbi54ICYmIHkgPT0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIC8vIHNhdmUgZW5kIHBvc2l0aW9uXG4gIHRoaXMuc2V0UG9zaXRpb24oIHgsIHkgKTtcblxuICAvLyBpZiBkaWQgbm90IG1vdmUgYW5kIG5vdCB0cmFuc2l0aW9uaW5nLCBqdXN0IGdvIHRvIGxheW91dFxuICBpZiAoIGRpZE5vdE1vdmUgJiYgIXRoaXMuaXNUcmFuc2l0aW9uaW5nICkge1xuICAgIHRoaXMubGF5b3V0UG9zaXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJhbnNYID0geCAtIGN1clg7XG4gIHZhciB0cmFuc1kgPSB5IC0gY3VyWTtcbiAgdmFyIHRyYW5zaXRpb25TdHlsZSA9IHt9O1xuICB0cmFuc2l0aW9uU3R5bGUudHJhbnNmb3JtID0gdGhpcy5nZXRUcmFuc2xhdGUoIHRyYW5zWCwgdHJhbnNZICk7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICB0bzogdHJhbnNpdGlvblN0eWxlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDoge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLmxheW91dFBvc2l0aW9uXG4gICAgfSxcbiAgICBpc0NsZWFuaW5nOiB0cnVlXG4gIH0pO1xufTtcblxucHJvdG8uZ2V0VHJhbnNsYXRlID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIC8vIGZsaXAgY29vcmlkaW5hdGVzIGlmIG9yaWdpbiBvbiByaWdodCBvciBib3R0b21cbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHggPSBpc09yaWdpbkxlZnQgPyB4IDogLXg7XG4gIHkgPSBpc09yaWdpblRvcCA/IHkgOiAteTtcbiAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApJztcbn07XG5cbi8vIG5vbiB0cmFuc2l0aW9uICsgdHJhbnNmb3JtIHN1cHBvcnRcbnByb3RvLmdvVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuICB0aGlzLmxheW91dFBvc2l0aW9uKCk7XG59O1xuXG5wcm90by5tb3ZlVG8gPSBwcm90by5fdHJhbnNpdGlvblRvO1xuXG5wcm90by5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnBvc2l0aW9uLnggPSBwYXJzZUZsb2F0KCB4ICk7XG4gIHRoaXMucG9zaXRpb24ueSA9IHBhcnNlRmxvYXQoIHkgKTtcbn07XG5cbi8vIC0tLS0tIHRyYW5zaXRpb24gLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGUgLSBDU1NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJhbnNpdGlvbkVuZFxuICovXG5cbi8vIG5vbiB0cmFuc2l0aW9uLCBqdXN0IHRyaWdnZXIgY2FsbGJhY2tcbnByb3RvLl9ub25UcmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIHRoaXMuY3NzKCBhcmdzLnRvICk7XG4gIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgIHRoaXMuX3JlbW92ZVN0eWxlcyggYXJncy50byApO1xuICB9XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIGFyZ3Mub25UcmFuc2l0aW9uRW5kWyBwcm9wIF0uY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG4vKipcbiAqIHByb3BlciB0cmFuc2l0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIGFyZ3VtZW50c1xuICogICBAcGFyYW0ge09iamVjdH0gdG8gLSBzdHlsZSB0byB0cmFuc2l0aW9uIHRvXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gc3R5bGUgdG8gc3RhcnQgdHJhbnNpdGlvbiBmcm9tXG4gKiAgIEBwYXJhbSB7Qm9vbGVhbn0gaXNDbGVhbmluZyAtIHJlbW92ZXMgdHJhbnNpdGlvbiBzdHlsZXMgYWZ0ZXIgdHJhbnNpdGlvblxuICogICBAcGFyYW0ge0Z1bmN0aW9ufSBvblRyYW5zaXRpb25FbmQgLSBjYWxsYmFja1xuICovXG5wcm90by50cmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIC8vIHJlZGlyZWN0IHRvIG5vblRyYW5zaXRpb24gaWYgbm8gdHJhbnNpdGlvbiBkdXJhdGlvblxuICBpZiAoICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMuX25vblRyYW5zaXRpb24oIGFyZ3MgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX3RyYW5zaXRpb24gPSB0aGlzLl90cmFuc247XG4gIC8vIGtlZXAgdHJhY2sgb2Ygb25UcmFuc2l0aW9uRW5kIGNhbGxiYWNrIGJ5IGNzcyBwcm9wZXJ0eVxuICBmb3IgKCB2YXIgcHJvcCBpbiBhcmdzLm9uVHJhbnNpdGlvbkVuZCApIHtcbiAgICBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcCBdID0gYXJncy5vblRyYW5zaXRpb25FbmRbIHByb3AgXTtcbiAgfVxuICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICBmb3IgKCBwcm9wIGluIGFyZ3MudG8gKSB7XG4gICAgX3RyYW5zaXRpb24uaW5nUHJvcGVydGllc1sgcHJvcCBdID0gdHJ1ZTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdG8gY2xlYW4gdXAgd2hlbiB0cmFuc2l0aW9uIGlzIGRvbmVcbiAgICBpZiAoIGFyZ3MuaXNDbGVhbmluZyApIHtcbiAgICAgIF90cmFuc2l0aW9uLmNsZWFuWyBwcm9wIF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBmcm9tIHN0eWxlc1xuICBpZiAoIGFyZ3MuZnJvbSApIHtcbiAgICB0aGlzLmNzcyggYXJncy5mcm9tICk7XG4gICAgLy8gZm9yY2UgcmVkcmF3LiBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgICB2YXIgaCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gaGFjayBmb3IgSlNIaW50IHRvIGh1c2ggYWJvdXQgdW51c2VkIHZhclxuICAgIGggPSBudWxsO1xuICB9XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uXG4gIHRoaXMuZW5hYmxlVHJhbnNpdGlvbiggYXJncy50byApO1xuICAvLyBzZXQgc3R5bGVzIHRoYXQgYXJlIHRyYW5zaXRpb25pbmdcbiAgdGhpcy5jc3MoIGFyZ3MudG8gKTtcblxuICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbn07XG5cbi8vIGRhc2ggYmVmb3JlIGFsbCBjYXAgbGV0dGVycywgaW5jbHVkaW5nIGZpcnN0IGZvclxuLy8gV2Via2l0VHJhbnNmb3JtID0+IC13ZWJraXQtdHJhbnNmb3JtXG5mdW5jdGlvbiB0b0Rhc2hlZEFsbCggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oW0EtWl0pL2csIGZ1bmN0aW9uKCAkMSApIHtcbiAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSAnb3BhY2l0eSwnICsgdG9EYXNoZWRBbGwoIHRyYW5zZm9ybVByb3BlcnR5ICk7XG5cbnByb3RvLmVuYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigvKiBzdHlsZSAqLykge1xuICAvLyBIQUNLIGNoYW5naW5nIHRyYW5zaXRpb25Qcm9wZXJ0eSBkdXJpbmcgYSB0cmFuc2l0aW9uXG4gIC8vIHdpbGwgY2F1c2UgdHJhbnNpdGlvbiB0byBqdW1wXG4gIGlmICggdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbWFrZSBgdHJhbnNpdGlvbjogZm9vLCBiYXIsIGJhemAgZnJvbSBzdHlsZSBvYmplY3RcbiAgLy8gSEFDSyB1bi1jb21tZW50IHRoaXMgd2hlbiBlbmFibGVUcmFuc2l0aW9uIGNhbiB3b3JrXG4gIC8vIHdoaWxlIGEgdHJhbnNpdGlvbiBpcyBoYXBwZW5pbmdcbiAgLy8gdmFyIHRyYW5zaXRpb25WYWx1ZXMgPSBbXTtcbiAgLy8gZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gIC8vICAgLy8gZGFzaC1pZnkgY2FtZWxDYXNlZCBwcm9wZXJ0aWVzIGxpa2UgV2Via2l0VHJhbnNpdGlvblxuICAvLyAgIHByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgLy8gICB0cmFuc2l0aW9uVmFsdWVzLnB1c2goIHRvRGFzaGVkQWxsKCBwcm9wICkgKTtcbiAgLy8gfVxuICAvLyBtdW5nZSBudW1iZXIgdG8gbWlsbGlzZWNvbmQsIHRvIG1hdGNoIHN0YWdnZXJcbiAgdmFyIGR1cmF0aW9uID0gdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb247XG4gIGR1cmF0aW9uID0gdHlwZW9mIGR1cmF0aW9uID09ICdudW1iZXInID8gZHVyYXRpb24gKyAnbXMnIDogZHVyYXRpb247XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uIHN0eWxlc1xuICB0aGlzLmNzcyh7XG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcHMsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICB0cmFuc2l0aW9uRGVsYXk6IHRoaXMuc3RhZ2dlckRlbGF5IHx8IDBcbiAgfSk7XG4gIC8vIGxpc3RlbiBmb3IgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcywgZmFsc2UgKTtcbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG5wcm90by5vbndlYmtpdFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMub250cmFuc2l0aW9uZW5kKCBldmVudCApO1xufTtcblxucHJvdG8ub25vdHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5vbnRyYW5zaXRpb25lbmQoIGV2ZW50ICk7XG59O1xuXG4vLyBwcm9wZXJ0aWVzIHRoYXQgSSBtdW5nZSB0byBtYWtlIG15IGxpZmUgZWFzaWVyXG52YXIgZGFzaGVkVmVuZG9yUHJvcGVydGllcyA9IHtcbiAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zZm9ybSdcbn07XG5cbnByb3RvLm9udHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gZGlzcmVnYXJkIGJ1YmJsZWQgZXZlbnRzIGZyb20gY2hpbGRyZW5cbiAgaWYgKCBldmVudC50YXJnZXQgIT09IHRoaXMuZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIF90cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNuO1xuICAvLyBnZXQgcHJvcGVydHkgbmFtZSBvZiB0cmFuc2l0aW9uZWQgcHJvcGVydHksIGNvbnZlcnQgdG8gcHJlZml4LWZyZWVcbiAgdmFyIHByb3BlcnR5TmFtZSA9IGRhc2hlZFZlbmRvclByb3BlcnRpZXNbIGV2ZW50LnByb3BlcnR5TmFtZSBdIHx8IGV2ZW50LnByb3BlcnR5TmFtZTtcblxuICAvLyByZW1vdmUgcHJvcGVydHkgdGhhdCBoYXMgY29tcGxldGVkIHRyYW5zaXRpb25pbmdcbiAgZGVsZXRlIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXNbIHByb3BlcnR5TmFtZSBdO1xuICAvLyBjaGVjayBpZiBhbnkgcHJvcGVydGllcyBhcmUgc3RpbGwgdHJhbnNpdGlvbmluZ1xuICBpZiAoIGlzRW1wdHlPYmooIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXMgKSApIHtcbiAgICAvLyBhbGwgcHJvcGVydGllcyBoYXZlIGNvbXBsZXRlZCB0cmFuc2l0aW9uaW5nXG4gICAgdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuICB9XG4gIC8vIGNsZWFuIHN0eWxlXG4gIGlmICggcHJvcGVydHlOYW1lIGluIF90cmFuc2l0aW9uLmNsZWFuICkge1xuICAgIC8vIGNsZWFuIHVwIHN0eWxlXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlWyBldmVudC5wcm9wZXJ0eU5hbWUgXSA9ICcnO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5jbGVhblsgcHJvcGVydHlOYW1lIF07XG4gIH1cbiAgLy8gdHJpZ2dlciBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2tcbiAgaWYgKCBwcm9wZXJ0eU5hbWUgaW4gX3RyYW5zaXRpb24ub25FbmQgKSB7XG4gICAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wZXJ0eU5hbWUgXTtcbiAgICBvblRyYW5zaXRpb25FbmQuY2FsbCggdGhpcyApO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcGVydHlOYW1lIF07XG4gIH1cblxuICB0aGlzLmVtaXRFdmVudCggJ3RyYW5zaXRpb25FbmQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMsIGZhbHNlICk7XG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgc3R5bGUgcHJvcGVydHkgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbioqL1xucHJvdG8uX3JlbW92ZVN0eWxlcyA9IGZ1bmN0aW9uKCBzdHlsZSApIHtcbiAgLy8gY2xlYW4gdXAgdHJhbnNpdGlvbiBzdHlsZXNcbiAgdmFyIGNsZWFuU3R5bGUgPSB7fTtcbiAgZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gICAgY2xlYW5TdHlsZVsgcHJvcCBdID0gJyc7XG4gIH1cbiAgdGhpcy5jc3MoIGNsZWFuU3R5bGUgKTtcbn07XG5cbnZhciBjbGVhblRyYW5zaXRpb25TdHlsZSA9IHtcbiAgdHJhbnNpdGlvblByb3BlcnR5OiAnJyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnJyxcbiAgdHJhbnNpdGlvbkRlbGF5OiAnJ1xufTtcblxucHJvdG8ucmVtb3ZlVHJhbnNpdGlvblN0eWxlcyA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgdHJhbnNpdGlvblxuICB0aGlzLmNzcyggY2xlYW5UcmFuc2l0aW9uU3R5bGUgKTtcbn07XG5cbi8vIC0tLS0tIHN0YWdnZXIgLS0tLS0gLy9cblxucHJvdG8uc3RhZ2dlciA9IGZ1bmN0aW9uKCBkZWxheSApIHtcbiAgZGVsYXkgPSBpc05hTiggZGVsYXkgKSA/IDAgOiBkZWxheTtcbiAgdGhpcy5zdGFnZ2VyRGVsYXkgPSBkZWxheSArICdtcyc7XG59O1xuXG4vLyAtLS0tLSBzaG93L2hpZGUvcmVtb3ZlIC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBlbGVtZW50IGZyb20gRE9NXG5wcm90by5yZW1vdmVFbGVtID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5lbWl0RXZlbnQoICdyZW1vdmUnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGp1c3QgcmVtb3ZlIGVsZW1lbnQgaWYgbm8gdHJhbnNpdGlvbiBzdXBwb3J0IG9yIG5vIHRyYW5zaXRpb25cbiAgaWYgKCAhdHJhbnNpdGlvblByb3BlcnR5IHx8ICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgdGhpcy5vbmNlKCAndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICB9KTtcbiAgdGhpcy5oaWRlKCk7XG59O1xuXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuaXNIaWRkZW47XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgndmlzaWJsZVN0eWxlJyk7XG4gIG9uVHJhbnNpdGlvbkVuZFsgdHJhbnNpdGlvbkVuZFByb3BlcnR5IF0gPSB0aGlzLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMuaGlkZGVuU3R5bGUsXG4gICAgdG86IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vblJldmVhbFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgaWYgc3RpbGwgdmlzaWJsZVxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIGhpZGRlblxuICBpZiAoICF0aGlzLmlzSGlkZGVuICkge1xuICAgIHRoaXMuZW1pdEV2ZW50KCdyZXZlYWwnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgc3R5bGUgcHJvcGVydHkgdXNlIGZvciBoaWRlL3JldmVhbCB0cmFuc2l0aW9uIGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlUHJvcGVydHkgLSBoaWRkZW5TdHlsZS92aXNpYmxlU3R5bGVcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbnByb3RvLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkgPSBmdW5jdGlvbiggc3R5bGVQcm9wZXJ0eSApIHtcbiAgdmFyIG9wdGlvblN0eWxlID0gdGhpcy5sYXlvdXQub3B0aW9uc1sgc3R5bGVQcm9wZXJ0eSBdO1xuICAvLyB1c2Ugb3BhY2l0eVxuICBpZiAoIG9wdGlvblN0eWxlLm9wYWNpdHkgKSB7XG4gICAgcmV0dXJuICdvcGFjaXR5JztcbiAgfVxuICAvLyBnZXQgZmlyc3QgcHJvcGVydHlcbiAgZm9yICggdmFyIHByb3AgaW4gb3B0aW9uU3R5bGUgKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnByb3RvLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gc2V0IGZsYWdcbiAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgnaGlkZGVuU3R5bGUnKTtcbiAgb25UcmFuc2l0aW9uRW5kWyB0cmFuc2l0aW9uRW5kUHJvcGVydHkgXSA9IHRoaXMub25IaWRlVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIHRvOiBvcHRpb25zLmhpZGRlblN0eWxlLFxuICAgIC8vIGtlZXAgaGlkZGVuIHN0dWZmIGhpZGRlblxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vbkhpZGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGlmIHN0aWxsIGhpZGRlblxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIHVuLWhpZGRlblxuICBpZiAoIHRoaXMuaXNIaWRkZW4gKSB7XG4gICAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ2hpZGUnKTtcbiAgfVxufTtcblxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNzcyh7XG4gICAgcG9zaXRpb246ICcnLFxuICAgIGxlZnQ6ICcnLFxuICAgIHJpZ2h0OiAnJyxcbiAgICB0b3A6ICcnLFxuICAgIGJvdHRvbTogJycsXG4gICAgdHJhbnNpdGlvbjogJycsXG4gICAgdHJhbnNmb3JtOiAnJ1xuICB9KTtcbn07XG5cbnJldHVybiBJdGVtO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb3V0bGF5ZXIvaXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBPdXRsYXllciB2Mi4xLjFcbiAqIHRoZSBicmFpbnMgYW5kIGd1dHMgb2YgYSBsYXlvdXQgbGlicmFyeVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdmaXp6eS11aS11dGlscy91dGlscycsXG4gICAgICAgICcuL2l0ZW0nXG4gICAgICBdLFxuICAgICAgZnVuY3Rpb24oIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIEl0ZW0gKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIEl0ZW0pO1xuICAgICAgfVxuICAgICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgICByZXF1aXJlKCcuL2l0ZW0nKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuT3V0bGF5ZXIgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICAgIHdpbmRvdy5PdXRsYXllci5JdGVtXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gdmFycyAtLS0tLSAvL1xuXG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xudmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG52YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE91dGxheWVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyc1xudmFyIEdVSUQgPSAwO1xuLy8gaW50ZXJuYWwgc3RvcmUgb2YgYWxsIE91dGxheWVyIGludGFuY2VzXG52YXIgaW5zdGFuY2VzID0ge307XG5cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQsIFN0cmluZ30gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBPdXRsYXllciggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgdmFyIHF1ZXJ5RWxlbWVudCA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuICBpZiAoICFxdWVyeUVsZW1lbnQgKSB7XG4gICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgY29uc29sZS5lcnJvciggJ0JhZCBlbGVtZW50IGZvciAnICsgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UgK1xuICAgICAgICAnOiAnICsgKCBxdWVyeUVsZW1lbnQgfHwgZWxlbWVudCApICk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQgPSBxdWVyeUVsZW1lbnQ7XG4gIC8vIGFkZCBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gIH1cblxuICAvLyBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxzLmV4dGVuZCgge30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdHMgKTtcbiAgdGhpcy5vcHRpb24oIG9wdGlvbnMgKTtcblxuICAvLyBhZGQgaWQgZm9yIE91dGxheWVyLmdldEZyb21FbGVtZW50XG4gIHZhciBpZCA9ICsrR1VJRDtcbiAgdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRCA9IGlkOyAvLyBleHBhbmRvXG4gIGluc3RhbmNlc1sgaWQgXSA9IHRoaXM7IC8vIGFzc29jaWF0ZSB2aWEgaWRcblxuICAvLyBraWNrIGl0IG9mZlxuICB0aGlzLl9jcmVhdGUoKTtcblxuICB2YXIgaXNJbml0TGF5b3V0ID0gdGhpcy5fZ2V0T3B0aW9uKCdpbml0TGF5b3V0Jyk7XG4gIGlmICggaXNJbml0TGF5b3V0ICkge1xuICAgIHRoaXMubGF5b3V0KCk7XG4gIH1cbn1cblxuLy8gc2V0dGluZ3MgYXJlIGZvciBpbnRlcm5hbCB1c2Ugb25seVxuT3V0bGF5ZXIubmFtZXNwYWNlID0gJ291dGxheWVyJztcbk91dGxheWVyLkl0ZW0gPSBJdGVtO1xuXG4vLyBkZWZhdWx0IG9wdGlvbnNcbk91dGxheWVyLmRlZmF1bHRzID0ge1xuICBjb250YWluZXJTdHlsZToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIGluaXRMYXlvdXQ6IHRydWUsXG4gIG9yaWdpbkxlZnQ6IHRydWUsXG4gIG9yaWdpblRvcDogdHJ1ZSxcbiAgcmVzaXplOiB0cnVlLFxuICByZXNpemVDb250YWluZXI6IHRydWUsXG4gIC8vIGl0ZW0gb3B0aW9uc1xuICB0cmFuc2l0aW9uRHVyYXRpb246ICcwLjRzJyxcbiAgaGlkZGVuU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuMDAxKSdcbiAgfSxcbiAgdmlzaWJsZVN0eWxlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufTtcblxudmFyIHByb3RvID0gT3V0bGF5ZXIucHJvdG90eXBlO1xuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbnV0aWxzLmV4dGVuZCggcHJvdG8sIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBzZXQgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqL1xucHJvdG8ub3B0aW9uID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gIHV0aWxzLmV4dGVuZCggdGhpcy5vcHRpb25zLCBvcHRzICk7XG59O1xuXG4vKipcbiAqIGdldCBiYWNrd2FyZHMgY29tcGF0aWJsZSBvcHRpb24gdmFsdWUsIGNoZWNrIG9sZCBuYW1lXG4gKi9cbnByb3RvLl9nZXRPcHRpb24gPSBmdW5jdGlvbiggb3B0aW9uICkge1xuICB2YXIgb2xkT3B0aW9uID0gdGhpcy5jb25zdHJ1Y3Rvci5jb21wYXRPcHRpb25zWyBvcHRpb24gXTtcbiAgcmV0dXJuIG9sZE9wdGlvbiAmJiB0aGlzLm9wdGlvbnNbIG9sZE9wdGlvbiBdICE9PSB1bmRlZmluZWQgP1xuICAgIHRoaXMub3B0aW9uc1sgb2xkT3B0aW9uIF0gOiB0aGlzLm9wdGlvbnNbIG9wdGlvbiBdO1xufTtcblxuT3V0bGF5ZXIuY29tcGF0T3B0aW9ucyA9IHtcbiAgLy8gY3VycmVudE5hbWU6IG9sZE5hbWVcbiAgaW5pdExheW91dDogJ2lzSW5pdExheW91dCcsXG4gIGhvcml6b250YWw6ICdpc0hvcml6b250YWwnLFxuICBsYXlvdXRJbnN0YW50OiAnaXNMYXlvdXRJbnN0YW50JyxcbiAgb3JpZ2luTGVmdDogJ2lzT3JpZ2luTGVmdCcsXG4gIG9yaWdpblRvcDogJ2lzT3JpZ2luVG9wJyxcbiAgcmVzaXplOiAnaXNSZXNpemVCb3VuZCcsXG4gIHJlc2l6ZUNvbnRhaW5lcjogJ2lzUmVzaXppbmdDb250YWluZXInXG59O1xuXG5wcm90by5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBpdGVtcyBmcm9tIGNoaWxkcmVuXG4gIHRoaXMucmVsb2FkSXRlbXMoKTtcbiAgLy8gZWxlbWVudHMgdGhhdCBhZmZlY3QgbGF5b3V0LCBidXQgYXJlIG5vdCBsYWlkIG91dFxuICB0aGlzLnN0YW1wcyA9IFtdO1xuICB0aGlzLnN0YW1wKCB0aGlzLm9wdGlvbnMuc3RhbXAgKTtcbiAgLy8gc2V0IGNvbnRhaW5lciBzdHlsZVxuICB1dGlscy5leHRlbmQoIHRoaXMuZWxlbWVudC5zdHlsZSwgdGhpcy5vcHRpb25zLmNvbnRhaW5lclN0eWxlICk7XG5cbiAgLy8gYmluZCByZXNpemUgbWV0aG9kXG4gIHZhciBjYW5CaW5kUmVzaXplID0gdGhpcy5fZ2V0T3B0aW9uKCdyZXNpemUnKTtcbiAgaWYgKCBjYW5CaW5kUmVzaXplICkge1xuICAgIHRoaXMuYmluZFJlc2l6ZSgpO1xuICB9XG59O1xuXG4vLyBnb2VzIHRocm91Z2ggYWxsIGNoaWxkcmVuIGFnYWluIGFuZCBnZXRzIGJyaWNrcyBpbiBwcm9wZXIgb3JkZXJcbnByb3RvLnJlbG9hZEl0ZW1zID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICB0aGlzLml0ZW1zID0gdGhpcy5faXRlbWl6ZSggdGhpcy5lbGVtZW50LmNoaWxkcmVuICk7XG59O1xuXG5cbi8qKlxuICogdHVybiBlbGVtZW50cyBpbnRvIE91dGxheWVyLkl0ZW1zIHRvIGJlIHVzZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEhUTUxFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIGNvbGxlY3Rpb24gb2YgbmV3IE91dGxheWVyIEl0ZW1zXG4gKi9cbnByb3RvLl9pdGVtaXplID0gZnVuY3Rpb24oIGVsZW1zICkge1xuXG4gIHZhciBpdGVtRWxlbXMgPSB0aGlzLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzKCBlbGVtcyApO1xuICB2YXIgSXRlbSA9IHRoaXMuY29uc3RydWN0b3IuSXRlbTtcblxuICAvLyBjcmVhdGUgbmV3IE91dGxheWVyIEl0ZW1zIGZvciBjb2xsZWN0aW9uXG4gIHZhciBpdGVtcyA9IFtdO1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgaXRlbUVsZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBlbGVtID0gaXRlbUVsZW1zW2ldO1xuICAgIHZhciBpdGVtID0gbmV3IEl0ZW0oIGVsZW0sIHRoaXMgKTtcbiAgICBpdGVtcy5wdXNoKCBpdGVtICk7XG4gIH1cblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIGdldCBpdGVtIGVsZW1lbnRzIHRvIGJlIHVzZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEhUTUxFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIGl0ZW0gZWxlbWVudHNcbiAqL1xucHJvdG8uX2ZpbHRlckZpbmRJdGVtRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHJldHVybiB1dGlscy5maWx0ZXJGaW5kRWxlbWVudHMoIGVsZW1zLCB0aGlzLm9wdGlvbnMuaXRlbVNlbGVjdG9yICk7XG59O1xuXG4vKipcbiAqIGdldHRlciBtZXRob2QgZm9yIGdldHRpbmcgaXRlbSBlbGVtZW50c1xuICogQHJldHVybnMge0FycmF5fSBlbGVtcyAtIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICovXG5wcm90by5nZXRJdGVtRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICByZXR1cm4gaXRlbS5lbGVtZW50O1xuICB9KTtcbn07XG5cbi8vIC0tLS0tIGluaXQgJiBsYXlvdXQgLS0tLS0gLy9cblxuLyoqXG4gKiBsYXlzIG91dCBhbGwgaXRlbXNcbiAqL1xucHJvdG8ubGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3Jlc2V0TGF5b3V0KCk7XG4gIHRoaXMuX21hbmFnZVN0YW1wcygpO1xuXG4gIC8vIGRvbid0IGFuaW1hdGUgZmlyc3QgbGF5b3V0XG4gIHZhciBsYXlvdXRJbnN0YW50ID0gdGhpcy5fZ2V0T3B0aW9uKCdsYXlvdXRJbnN0YW50Jyk7XG4gIHZhciBpc0luc3RhbnQgPSBsYXlvdXRJbnN0YW50ICE9PSB1bmRlZmluZWQgP1xuICAgIGxheW91dEluc3RhbnQgOiAhdGhpcy5faXNMYXlvdXRJbml0ZWQ7XG4gIHRoaXMubGF5b3V0SXRlbXMoIHRoaXMuaXRlbXMsIGlzSW5zdGFudCApO1xuXG4gIC8vIGZsYWcgZm9yIGluaXRhbGl6ZWRcbiAgdGhpcy5faXNMYXlvdXRJbml0ZWQgPSB0cnVlO1xufTtcblxuLy8gX2luaXQgaXMgYWxpYXMgZm9yIGxheW91dFxucHJvdG8uX2luaXQgPSBwcm90by5sYXlvdXQ7XG5cbi8qKlxuICogbG9naWMgYmVmb3JlIGFueSBuZXcgbGF5b3V0XG4gKi9cbnByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdldFNpemUoKTtcbn07XG5cblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogZ2V0IG1lYXN1cmVtZW50IGZyb20gb3B0aW9uLCBmb3IgY29sdW1uV2lkdGgsIHJvd0hlaWdodCwgZ3V0dGVyXG4gKiBpZiBvcHRpb24gaXMgU3RyaW5nIC0+IGdldCBlbGVtZW50IGZyb20gc2VsZWN0b3Igc3RyaW5nLCAmIGdldCBzaXplIG9mIGVsZW1lbnRcbiAqIGlmIG9wdGlvbiBpcyBFbGVtZW50IC0+IGdldCBzaXplIG9mIGVsZW1lbnRcbiAqIGVsc2UgdXNlIG9wdGlvbiBhcyBhIG51bWJlclxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZWFzdXJlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSB3aWR0aCBvciBoZWlnaHRcbiAqIEBwcml2YXRlXG4gKi9cbnByb3RvLl9nZXRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uKCBtZWFzdXJlbWVudCwgc2l6ZSApIHtcbiAgdmFyIG9wdGlvbiA9IHRoaXMub3B0aW9uc1sgbWVhc3VyZW1lbnQgXTtcbiAgdmFyIGVsZW07XG4gIGlmICggIW9wdGlvbiApIHtcbiAgICAvLyBkZWZhdWx0IHRvIDBcbiAgICB0aGlzWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2Ugb3B0aW9uIGFzIGFuIGVsZW1lbnRcbiAgICBpZiAoIHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycgKSB7XG4gICAgICBlbGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoIG9wdGlvbiApO1xuICAgIH0gZWxzZSBpZiAoIG9wdGlvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkge1xuICAgICAgZWxlbSA9IG9wdGlvbjtcbiAgICB9XG4gICAgLy8gdXNlIHNpemUgb2YgZWxlbWVudCwgaWYgZWxlbWVudFxuICAgIHRoaXNbIG1lYXN1cmVtZW50IF0gPSBlbGVtID8gZ2V0U2l6ZSggZWxlbSApWyBzaXplIF0gOiBvcHRpb247XG4gIH1cbn07XG5cbi8qKlxuICogbGF5b3V0IGEgY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5wcm90by5sYXlvdXRJdGVtcyA9IGZ1bmN0aW9uKCBpdGVtcywgaXNJbnN0YW50ICkge1xuICBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zRm9yTGF5b3V0KCBpdGVtcyApO1xuXG4gIHRoaXMuX2xheW91dEl0ZW1zKCBpdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgdGhpcy5fcG9zdExheW91dCgpO1xufTtcblxuLyoqXG4gKiBnZXQgdGhlIGl0ZW1zIHRvIGJlIGxhaWQgb3V0XG4gKiB5b3UgbWF5IHdhbnQgdG8gc2tpcCBvdmVyIHNvbWUgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zXG4gKi9cbnByb3RvLl9nZXRJdGVtc0ZvckxheW91dCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgcmV0dXJuIGl0ZW1zLmZpbHRlciggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgcmV0dXJuICFpdGVtLmlzSWdub3JlZDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGxheW91dCBpdGVtc1xuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNJbnN0YW50XG4gKi9cbnByb3RvLl9sYXlvdXRJdGVtcyA9IGZ1bmN0aW9uKCBpdGVtcywgaXNJbnN0YW50ICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAnbGF5b3V0JywgaXRlbXMgKTtcblxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIC8vIG5vIGl0ZW1zLCBlbWl0IGV2ZW50IHdpdGggZW1wdHkgYXJyYXlcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcXVldWUgPSBbXTtcblxuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICAvLyBnZXQgeC95IG9iamVjdCBmcm9tIG1ldGhvZFxuICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiggaXRlbSApO1xuICAgIC8vIGVucXVldWVcbiAgICBwb3NpdGlvbi5pdGVtID0gaXRlbTtcbiAgICBwb3NpdGlvbi5pc0luc3RhbnQgPSBpc0luc3RhbnQgfHwgaXRlbS5pc0xheW91dEluc3RhbnQ7XG4gICAgcXVldWUucHVzaCggcG9zaXRpb24gKTtcbiAgfSwgdGhpcyApO1xuXG4gIHRoaXMuX3Byb2Nlc3NMYXlvdXRRdWV1ZSggcXVldWUgKTtcbn07XG5cbi8qKlxuICogZ2V0IGl0ZW0gbGF5b3V0IHBvc2l0aW9uXG4gKiBAcGFyYW0ge091dGxheWVyLkl0ZW19IGl0ZW1cbiAqIEByZXR1cm5zIHtPYmplY3R9IHggYW5kIHkgcG9zaXRpb25cbiAqL1xucHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCAvKiBpdGVtICovICkge1xuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufTtcblxuLyoqXG4gKiBpdGVyYXRlIG92ZXIgYXJyYXkgYW5kIHBvc2l0aW9uIGVhY2ggaXRlbVxuICogUmVhc29uIGJlaW5nIC0gc2VwYXJhdGluZyB0aGlzIGxvZ2ljIHByZXZlbnRzICdsYXlvdXQgaW52YWxpZGF0aW9uJ1xuICogdGh4IEBwYXVsX2lyaXNoXG4gKiBAcGFyYW0ge0FycmF5fSBxdWV1ZVxuICovXG5wcm90by5fcHJvY2Vzc0xheW91dFF1ZXVlID0gZnVuY3Rpb24oIHF1ZXVlICkge1xuICB0aGlzLnVwZGF0ZVN0YWdnZXIoKTtcbiAgcXVldWUuZm9yRWFjaCggZnVuY3Rpb24oIG9iaiwgaSApIHtcbiAgICB0aGlzLl9wb3NpdGlvbkl0ZW0oIG9iai5pdGVtLCBvYmoueCwgb2JqLnksIG9iai5pc0luc3RhbnQsIGkgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLy8gc2V0IHN0YWdnZXIgZnJvbSBvcHRpb24gaW4gbWlsbGlzZWNvbmRzIG51bWJlclxucHJvdG8udXBkYXRlU3RhZ2dlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RhZ2dlciA9IHRoaXMub3B0aW9ucy5zdGFnZ2VyO1xuICBpZiAoIHN0YWdnZXIgPT09IG51bGwgfHwgc3RhZ2dlciA9PT0gdW5kZWZpbmVkICkge1xuICAgIHRoaXMuc3RhZ2dlciA9IDA7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuc3RhZ2dlciA9IGdldE1pbGxpc2Vjb25kcyggc3RhZ2dlciApO1xuICByZXR1cm4gdGhpcy5zdGFnZ2VyO1xufTtcblxuLyoqXG4gKiBTZXRzIHBvc2l0aW9uIG9mIGl0ZW0gaW4gRE9NXG4gKiBAcGFyYW0ge091dGxheWVyLkl0ZW19IGl0ZW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IC0gaG9yaXpvbnRhbCBwb3NpdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB2ZXJ0aWNhbCBwb3NpdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnQgLSBkaXNhYmxlcyB0cmFuc2l0aW9uc1xuICovXG5wcm90by5fcG9zaXRpb25JdGVtID0gZnVuY3Rpb24oIGl0ZW0sIHgsIHksIGlzSW5zdGFudCwgaSApIHtcbiAgaWYgKCBpc0luc3RhbnQgKSB7XG4gICAgLy8gaWYgbm90IHRyYW5zaXRpb24sIGp1c3Qgc2V0IENTU1xuICAgIGl0ZW0uZ29UbyggeCwgeSApO1xuICB9IGVsc2Uge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHRoaXMuc3RhZ2dlciApO1xuICAgIGl0ZW0ubW92ZVRvKCB4LCB5ICk7XG4gIH1cbn07XG5cbi8qKlxuICogQW55IGxvZ2ljIHlvdSB3YW50IHRvIGRvIGFmdGVyIGVhY2ggbGF5b3V0LFxuICogaS5lLiBzaXplIHRoZSBjb250YWluZXJcbiAqL1xucHJvdG8uX3Bvc3RMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZXNpemVDb250YWluZXIoKTtcbn07XG5cbnByb3RvLnJlc2l6ZUNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXNSZXNpemluZ0NvbnRhaW5lciA9IHRoaXMuX2dldE9wdGlvbigncmVzaXplQ29udGFpbmVyJyk7XG4gIGlmICggIWlzUmVzaXppbmdDb250YWluZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzaXplID0gdGhpcy5fZ2V0Q29udGFpbmVyU2l6ZSgpO1xuICBpZiAoIHNpemUgKSB7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZSggc2l6ZS53aWR0aCwgdHJ1ZSApO1xuICAgIHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoIHNpemUuaGVpZ2h0LCBmYWxzZSApO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgd2lkdGggb3IgaGVpZ2h0IG9mIGNvbnRhaW5lciBpZiByZXR1cm5lZFxuICogQHJldHVybnMge09iamVjdH0gc2l6ZVxuICogICBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAqICAgQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICovXG5wcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IG5vb3A7XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1lYXN1cmUgLSBzaXplIG9mIHdpZHRoIG9yIGhlaWdodFxuICogQHBhcmFtIHtCb29sZWFufSBpc1dpZHRoXG4gKi9cbnByb3RvLl9zZXRDb250YWluZXJNZWFzdXJlID0gZnVuY3Rpb24oIG1lYXN1cmUsIGlzV2lkdGggKSB7XG4gIGlmICggbWVhc3VyZSA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlbGVtU2l6ZSA9IHRoaXMuc2l6ZTtcbiAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB3aWR0aCBpZiBib3JkZXIgYm94XG4gIGlmICggZWxlbVNpemUuaXNCb3JkZXJCb3ggKSB7XG4gICAgbWVhc3VyZSArPSBpc1dpZHRoID8gZWxlbVNpemUucGFkZGluZ0xlZnQgKyBlbGVtU2l6ZS5wYWRkaW5nUmlnaHQgK1xuICAgICAgZWxlbVNpemUuYm9yZGVyTGVmdFdpZHRoICsgZWxlbVNpemUuYm9yZGVyUmlnaHRXaWR0aCA6XG4gICAgICBlbGVtU2l6ZS5wYWRkaW5nQm90dG9tICsgZWxlbVNpemUucGFkZGluZ1RvcCArXG4gICAgICBlbGVtU2l6ZS5ib3JkZXJUb3BXaWR0aCArIGVsZW1TaXplLmJvcmRlckJvdHRvbVdpZHRoO1xuICB9XG5cbiAgbWVhc3VyZSA9IE1hdGgubWF4KCBtZWFzdXJlLCAwICk7XG4gIHRoaXMuZWxlbWVudC5zdHlsZVsgaXNXaWR0aCA/ICd3aWR0aCcgOiAnaGVpZ2h0JyBdID0gbWVhc3VyZSArICdweCc7XG59O1xuXG4vKipcbiAqIGVtaXQgZXZlbnRDb21wbGV0ZSBvbiBhIGNvbGxlY3Rpb24gb2YgaXRlbXMgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4gKi9cbnByb3RvLl9lbWl0Q29tcGxldGVPbkl0ZW1zID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgaXRlbXMgKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIGZ1bmN0aW9uIG9uQ29tcGxldGUoKSB7XG4gICAgX3RoaXMuZGlzcGF0Y2hFdmVudCggZXZlbnROYW1lICsgJ0NvbXBsZXRlJywgbnVsbCwgWyBpdGVtcyBdICk7XG4gIH1cblxuICB2YXIgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gIGlmICggIWl0ZW1zIHx8ICFjb3VudCApIHtcbiAgICBvbkNvbXBsZXRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRvbmVDb3VudCA9IDA7XG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgZG9uZUNvdW50Kys7XG4gICAgaWYgKCBkb25lQ291bnQgPT0gY291bnQgKSB7XG4gICAgICBvbkNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gYmluZCBjYWxsYmFja1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLm9uY2UoIGV2ZW50TmFtZSwgdGljayApO1xuICB9KTtcbn07XG5cbi8qKlxuICogZW1pdHMgZXZlbnRzIHZpYSBFdkVtaXR0ZXIgYW5kIGpRdWVyeSBldmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gbmFtZSBvZiBldmVudFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBvcmlnaW5hbCBldmVudFxuICogQHBhcmFtIHtBcnJheX0gYXJncyAtIGV4dHJhIGFyZ3VtZW50c1xuICovXG5wcm90by5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24oIHR5cGUsIGV2ZW50LCBhcmdzICkge1xuICAvLyBhZGQgb3JpZ2luYWwgZXZlbnQgdG8gYXJndW1lbnRzXG4gIHZhciBlbWl0QXJncyA9IGV2ZW50ID8gWyBldmVudCBdLmNvbmNhdCggYXJncyApIDogYXJncztcbiAgdGhpcy5lbWl0RXZlbnQoIHR5cGUsIGVtaXRBcmdzICk7XG5cbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgLy8gc2V0IHRoaXMuJGVsZW1lbnRcbiAgICB0aGlzLiRlbGVtZW50ID0gdGhpcy4kZWxlbWVudCB8fCBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICAgIGlmICggZXZlbnQgKSB7XG4gICAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgICB2YXIgJGV2ZW50ID0galF1ZXJ5LkV2ZW50KCBldmVudCApO1xuICAgICAgJGV2ZW50LnR5cGUgPSB0eXBlO1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCAkZXZlbnQsIGFyZ3MgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8ganVzdCB0cmlnZ2VyIHdpdGggdHlwZSBpZiBubyBldmVudCBhdmFpbGFibGVcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggdHlwZSwgYXJncyApO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaWdub3JlICYgc3RhbXBzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxuLyoqXG4gKiBrZWVwIGl0ZW0gaW4gY29sbGVjdGlvbiwgYnV0IGRvIG5vdCBsYXkgaXQgb3V0XG4gKiBpZ25vcmVkIGl0ZW1zIGRvIG5vdCBnZXQgc2tpcHBlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5wcm90by5pZ25vcmUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCBpdGVtICkge1xuICAgIGl0ZW0uaXNJZ25vcmVkID0gdHJ1ZTtcbiAgfVxufTtcblxuLyoqXG4gKiByZXR1cm4gaXRlbSB0byBsYXlvdXQgY29sbGVjdGlvblxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKi9cbnByb3RvLnVuaWdub3JlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggaXRlbSApIHtcbiAgICBkZWxldGUgaXRlbS5pc0lnbm9yZWQ7XG4gIH1cbn07XG5cbi8qKlxuICogYWRkcyBlbGVtZW50cyB0byBzdGFtcHNcbiAqIEBwYXJhbSB7Tm9kZUxpc3QsIEFycmF5LCBFbGVtZW50LCBvciBTdHJpbmd9IGVsZW1zXG4gKi9cbnByb3RvLnN0YW1wID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHRoaXMuX2ZpbmQoIGVsZW1zICk7XG4gIGlmICggIWVsZW1zICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3RhbXBzID0gdGhpcy5zdGFtcHMuY29uY2F0KCBlbGVtcyApO1xuICAvLyBpZ25vcmVcbiAgZWxlbXMuZm9yRWFjaCggdGhpcy5pZ25vcmUsIHRoaXMgKTtcbn07XG5cbi8qKlxuICogcmVtb3ZlcyBlbGVtZW50cyB0byBzdGFtcHNcbiAqIEBwYXJhbSB7Tm9kZUxpc3QsIEFycmF5LCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by51bnN0YW1wID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHRoaXMuX2ZpbmQoIGVsZW1zICk7XG4gIGlmICggIWVsZW1zICl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgLy8gZmlsdGVyIG91dCByZW1vdmVkIHN0YW1wIGVsZW1lbnRzXG4gICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5zdGFtcHMsIGVsZW0gKTtcbiAgICB0aGlzLnVuaWdub3JlKCBlbGVtICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8qKlxuICogZmluZHMgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7Tm9kZUxpc3QsIEFycmF5LCBFbGVtZW50LCBvciBTdHJpbmd9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zXG4gKi9cbnByb3RvLl9maW5kID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBpZiAoICFlbGVtcyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgc3RyaW5nLCB1c2UgYXJndW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG4gIGlmICggdHlwZW9mIGVsZW1zID09ICdzdHJpbmcnICkge1xuICAgIGVsZW1zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGVsZW1zICk7XG4gIH1cbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHJldHVybiBlbGVtcztcbn07XG5cbnByb3RvLl9tYW5hZ2VTdGFtcHMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5zdGFtcHMgfHwgIXRoaXMuc3RhbXBzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9nZXRCb3VuZGluZ1JlY3QoKTtcblxuICB0aGlzLnN0YW1wcy5mb3JFYWNoKCB0aGlzLl9tYW5hZ2VTdGFtcCwgdGhpcyApO1xufTtcblxuLy8gdXBkYXRlIGJvdW5kaW5nTGVmdCAvIFRvcFxucHJvdG8uX2dldEJvdW5kaW5nUmVjdCA9IGZ1bmN0aW9uKCkge1xuICAvLyBnZXQgYm91bmRpbmcgcmVjdCBmb3IgY29udGFpbmVyIGVsZW1lbnRcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gIHRoaXMuX2JvdW5kaW5nUmVjdCA9IHtcbiAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArIHNpemUucGFkZGluZ0xlZnQgKyBzaXplLmJvcmRlckxlZnRXaWR0aCxcbiAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgKyBzaXplLnBhZGRpbmdUb3AgKyBzaXplLmJvcmRlclRvcFdpZHRoLFxuICAgIHJpZ2h0OiBib3VuZGluZ1JlY3QucmlnaHQgLSAoIHNpemUucGFkZGluZ1JpZ2h0ICsgc2l6ZS5ib3JkZXJSaWdodFdpZHRoICksXG4gICAgYm90dG9tOiBib3VuZGluZ1JlY3QuYm90dG9tIC0gKCBzaXplLnBhZGRpbmdCb3R0b20gKyBzaXplLmJvcmRlckJvdHRvbVdpZHRoIClcbiAgfTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBzdGFtcFxuKiovXG5wcm90by5fbWFuYWdlU3RhbXAgPSBub29wO1xuXG4vKipcbiAqIGdldCB4L3kgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byBjb250YWluZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvZmZzZXQgLSBoYXMgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tXG4gKi9cbnByb3RvLl9nZXRFbGVtZW50T2Zmc2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdGhpc1JlY3QgPSB0aGlzLl9ib3VuZGluZ1JlY3Q7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggZWxlbSApO1xuICB2YXIgb2Zmc2V0ID0ge1xuICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0IC0gdGhpc1JlY3QubGVmdCAtIHNpemUubWFyZ2luTGVmdCxcbiAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgLSB0aGlzUmVjdC50b3AgLSBzaXplLm1hcmdpblRvcCxcbiAgICByaWdodDogdGhpc1JlY3QucmlnaHQgLSBib3VuZGluZ1JlY3QucmlnaHQgLSBzaXplLm1hcmdpblJpZ2h0LFxuICAgIGJvdHRvbTogdGhpc1JlY3QuYm90dG9tIC0gYm91bmRpbmdSZWN0LmJvdHRvbSAtIHNpemUubWFyZ2luQm90dG9tXG4gIH07XG4gIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZW5hYmxlIGV2ZW50IGhhbmRsZXJzIGZvciBsaXN0ZW5lcnNcbi8vIGkuZS4gcmVzaXplIC0+IG9ucmVzaXplXG5wcm90by5oYW5kbGVFdmVudCA9IHV0aWxzLmhhbmRsZUV2ZW50O1xuXG4vKipcbiAqIEJpbmQgbGF5b3V0IHRvIHdpbmRvdyByZXNpemluZ1xuICovXG5wcm90by5iaW5kUmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcyApO1xuICB0aGlzLmlzUmVzaXplQm91bmQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBVbmJpbmQgbGF5b3V0IHRvIHdpbmRvdyByZXNpemluZ1xuICovXG5wcm90by51bmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIHRoaXMuaXNSZXNpemVCb3VuZCA9IGZhbHNlO1xufTtcblxucHJvdG8ub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZXNpemUoKTtcbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBPdXRsYXllciwgJ29ucmVzaXplJywgMTAwICk7XG5cbnByb3RvLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBkb24ndCB0cmlnZ2VyIGlmIHNpemUgZGlkIG5vdCBjaGFuZ2VcbiAgLy8gb3IgaWYgcmVzaXplIHdhcyB1bmJvdW5kLiBTZWUgIzlcbiAgaWYgKCAhdGhpcy5pc1Jlc2l6ZUJvdW5kIHx8ICF0aGlzLm5lZWRzUmVzaXplTGF5b3V0KCkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5sYXlvdXQoKTtcbn07XG5cbi8qKlxuICogY2hlY2sgaWYgbGF5b3V0IGlzIG5lZWRlZCBwb3N0IGxheW91dFxuICogQHJldHVybnMgQm9vbGVhblxuICovXG5wcm90by5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xuICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgLy8gSUU4IHRyaWdnZXJzIHJlc2l6ZSBvbiBib2R5IHNpemUgY2hhbmdlLCBzbyB0aGV5IG1pZ2h0IG5vdCBiZVxuICB2YXIgaGFzU2l6ZXMgPSB0aGlzLnNpemUgJiYgc2l6ZTtcbiAgcmV0dXJuIGhhc1NpemVzICYmIHNpemUuaW5uZXJXaWR0aCAhPT0gdGhpcy5zaXplLmlubmVyV2lkdGg7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogYWRkIGl0ZW1zIHRvIE91dGxheWVyIGluc3RhbmNlXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbioqL1xucHJvdG8uYWRkSXRlbXMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1pemUoIGVsZW1zICk7XG4gIC8vIGFkZCBpdGVtcyB0byBjb2xsZWN0aW9uXG4gIGlmICggaXRlbXMubGVuZ3RoICkge1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdCggaXRlbXMgKTtcbiAgfVxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIExheW91dCBuZXdseS1hcHBlbmRlZCBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLmFwcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmFkZEl0ZW1zKCBlbGVtcyApO1xuICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGxheW91dCBhbmQgcmV2ZWFsIGp1c3QgdGhlIG5ldyBpdGVtc1xuICB0aGlzLmxheW91dEl0ZW1zKCBpdGVtcywgdHJ1ZSApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogTGF5b3V0IHByZXBlbmRlZCBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5wcmVwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1pemUoIGVsZW1zICk7XG4gIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGl0ZW1zIHRvIGJlZ2lubmluZyBvZiBjb2xsZWN0aW9uXG4gIHZhciBwcmV2aW91c0l0ZW1zID0gdGhpcy5pdGVtcy5zbGljZSgwKTtcbiAgdGhpcy5pdGVtcyA9IGl0ZW1zLmNvbmNhdCggcHJldmlvdXNJdGVtcyApO1xuICAvLyBzdGFydCBuZXcgbGF5b3V0XG4gIHRoaXMuX3Jlc2V0TGF5b3V0KCk7XG4gIHRoaXMuX21hbmFnZVN0YW1wcygpO1xuICAvLyBsYXlvdXQgbmV3IHN0dWZmIHdpdGhvdXQgdHJhbnNpdGlvblxuICB0aGlzLmxheW91dEl0ZW1zKCBpdGVtcywgdHJ1ZSApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbiAgLy8gbGF5b3V0IHByZXZpb3VzIGl0ZW1zXG4gIHRoaXMubGF5b3V0SXRlbXMoIHByZXZpb3VzSXRlbXMgKTtcbn07XG5cbi8qKlxuICogcmV2ZWFsIGEgY29sbGVjdGlvbiBvZiBpdGVtc1xuICogQHBhcmFtIHtBcnJheSBvZiBPdXRsYXllci5JdGVtc30gaXRlbXNcbiAqL1xucHJvdG8ucmV2ZWFsID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAncmV2ZWFsJywgaXRlbXMgKTtcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHN0YWdnZXIgPSB0aGlzLnVwZGF0ZVN0YWdnZXIoKTtcbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0sIGkgKSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogc3RhZ2dlciApO1xuICAgIGl0ZW0ucmV2ZWFsKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBoaWRlIGEgY29sbGVjdGlvbiBvZiBpdGVtc1xuICogQHBhcmFtIHtBcnJheSBvZiBPdXRsYXllci5JdGVtc30gaXRlbXNcbiAqL1xucHJvdG8uaGlkZSA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ2hpZGUnLCBpdGVtcyApO1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc3RhZ2dlciA9IHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSwgaSApIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiBzdGFnZ2VyICk7XG4gICAgaXRlbS5oaWRlKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiByZXZlYWwgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0sIHtFbGVtZW50fSwge05vZGVMaXN0fSBpdGVtc1xuICovXG5wcm90by5yZXZlYWxJdGVtRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBoaWRlIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXl9LCB7RWxlbWVudH0sIHtOb2RlTGlzdH0gaXRlbXNcbiAqL1xucHJvdG8uaGlkZUl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgdGhpcy5oaWRlKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBnZXQgT3V0bGF5ZXIuSXRlbSwgZ2l2ZW4gYW4gRWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge091dGxheWVyLkl0ZW19IGl0ZW1cbiAqL1xucHJvdG8uZ2V0SXRlbSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAvLyBsb29wIHRocm91Z2ggaXRlbXMgdG8gZ2V0IHRoZSBvbmUgdGhhdCBtYXRjaGVzXG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICBpZiAoIGl0ZW0uZWxlbWVudCA9PSBlbGVtICkge1xuICAgICAgLy8gcmV0dXJuIGl0ZW1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgY29sbGVjdGlvbiBvZiBPdXRsYXllci5JdGVtcywgZ2l2ZW4gRWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXl9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbiAqL1xucHJvdG8uZ2V0SXRlbXMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgaXRlbXMgPSBbXTtcbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgICBpZiAoIGl0ZW0gKSB7XG4gICAgICBpdGVtcy5wdXNoKCBpdGVtICk7XG4gICAgfVxuICB9LCB0aGlzICk7XG5cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiByZW1vdmUgZWxlbWVudChzKSBmcm9tIGluc3RhbmNlIGFuZCBET01cbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgcmVtb3ZlSXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuXG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdyZW1vdmUnLCByZW1vdmVJdGVtcyApO1xuXG4gIC8vIGJhaWwgaWYgbm8gaXRlbXMgdG8gcmVtb3ZlXG4gIGlmICggIXJlbW92ZUl0ZW1zIHx8ICFyZW1vdmVJdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlSXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNvbGxlY3Rpb25cbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLml0ZW1zLCBpdGVtICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tIGRlc3Ryb3kgLS0tLS0gLy9cblxuLy8gcmVtb3ZlIGFuZCBkaXNhYmxlIE91dGxheWVyIGluc3RhbmNlXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNsZWFuIHVwIGR5bmFtaWMgc3R5bGVzXG4gIHZhciBzdHlsZSA9IHRoaXMuZWxlbWVudC5zdHlsZTtcbiAgc3R5bGUuaGVpZ2h0ID0gJyc7XG4gIHN0eWxlLnBvc2l0aW9uID0gJyc7XG4gIHN0eWxlLndpZHRoID0gJyc7XG4gIC8vIGRlc3Ryb3kgaXRlbXNcbiAgdGhpcy5pdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgdGhpcy51bmJpbmRSZXNpemUoKTtcblxuICB2YXIgaWQgPSB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEO1xuICBkZWxldGUgaW5zdGFuY2VzWyBpZCBdOyAvLyByZW1vdmUgcmVmZXJlbmNlIHRvIGluc3RhbmNlIGJ5IGlkXG4gIGRlbGV0ZSB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEO1xuICAvLyByZW1vdmUgZGF0YSBmb3IgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIGpRdWVyeS5yZW1vdmVEYXRhKCB0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlICk7XG4gIH1cblxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGF0YSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldCBPdXRsYXllciBpbnN0YW5jZSBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge091dGxheWVyfVxuICovXG5PdXRsYXllci5kYXRhID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW0gKTtcbiAgdmFyIGlkID0gZWxlbSAmJiBlbGVtLm91dGxheWVyR1VJRDtcbiAgcmV0dXJuIGlkICYmIGluc3RhbmNlc1sgaWQgXTtcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY3JlYXRlIE91dGxheWVyIGNsYXNzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogY3JlYXRlIGEgbGF5b3V0IGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKi9cbk91dGxheWVyLmNyZWF0ZSA9IGZ1bmN0aW9uKCBuYW1lc3BhY2UsIG9wdGlvbnMgKSB7XG4gIC8vIHN1Yi1jbGFzcyBPdXRsYXllclxuICB2YXIgTGF5b3V0ID0gc3ViY2xhc3MoIE91dGxheWVyICk7XG4gIC8vIGFwcGx5IG5ldyBvcHRpb25zIGFuZCBjb21wYXRPcHRpb25zXG4gIExheW91dC5kZWZhdWx0cyA9IHV0aWxzLmV4dGVuZCgge30sIE91dGxheWVyLmRlZmF1bHRzICk7XG4gIHV0aWxzLmV4dGVuZCggTGF5b3V0LmRlZmF1bHRzLCBvcHRpb25zICk7XG4gIExheW91dC5jb21wYXRPcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgT3V0bGF5ZXIuY29tcGF0T3B0aW9ucyAgKTtcblxuICBMYXlvdXQubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXG4gIExheW91dC5kYXRhID0gT3V0bGF5ZXIuZGF0YTtcblxuICAvLyBzdWItY2xhc3MgSXRlbVxuICBMYXlvdXQuSXRlbSA9IHN1YmNsYXNzKCBJdGVtICk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVjbGFyYXRpdmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICB1dGlscy5odG1sSW5pdCggTGF5b3V0LCBuYW1lc3BhY2UgKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBqUXVlcnkgYnJpZGdlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gbWFrZSBpbnRvIGpRdWVyeSBwbHVnaW5cbiAgaWYgKCBqUXVlcnkgJiYgalF1ZXJ5LmJyaWRnZXQgKSB7XG4gICAgalF1ZXJ5LmJyaWRnZXQoIG5hbWVzcGFjZSwgTGF5b3V0ICk7XG4gIH1cblxuICByZXR1cm4gTGF5b3V0O1xufTtcblxuZnVuY3Rpb24gc3ViY2xhc3MoIFBhcmVudCApIHtcbiAgZnVuY3Rpb24gU3ViQ2xhc3MoKSB7XG4gICAgUGFyZW50LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgfVxuXG4gIFN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFBhcmVudC5wcm90b3R5cGUgKTtcbiAgU3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViQ2xhc3M7XG5cbiAgcmV0dXJuIFN1YkNsYXNzO1xufVxuXG4vLyAtLS0tLSBoZWxwZXJzIC0tLS0tIC8vXG5cbi8vIGhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgaW4gZWFjaCB1bml0XG52YXIgbXNVbml0cyA9IHtcbiAgbXM6IDEsXG4gIHM6IDEwMDBcbn07XG5cbi8vIG11bmdlIHRpbWUtbGlrZSBwYXJhbWV0ZXIgaW50byBtaWxsaXNlY29uZCBudW1iZXJcbi8vICcwLjRzJyAtPiA0MFxuZnVuY3Rpb24gZ2V0TWlsbGlzZWNvbmRzKCB0aW1lICkge1xuICBpZiAoIHR5cGVvZiB0aW1lID09ICdudW1iZXInICkge1xuICAgIHJldHVybiB0aW1lO1xuICB9XG4gIHZhciBtYXRjaGVzID0gdGltZS5tYXRjaCggLyheXFxkKlxcLj9cXGQqKShcXHcqKS8gKTtcbiAgdmFyIG51bSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1sxXTtcbiAgdmFyIHVuaXQgPSBtYXRjaGVzICYmIG1hdGNoZXNbMl07XG4gIGlmICggIW51bS5sZW5ndGggKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgbnVtID0gcGFyc2VGbG9hdCggbnVtICk7XG4gIHZhciBtdWx0ID0gbXNVbml0c1sgdW5pdCBdIHx8IDE7XG4gIHJldHVybiBudW0gKiBtdWx0O1xufVxuXG4vLyAtLS0tLSBmaW4gLS0tLS0gLy9cblxuLy8gYmFjayBpbiBnbG9iYWxcbk91dGxheWVyLkl0ZW0gPSBJdGVtO1xuXG5yZXR1cm4gT3V0bGF5ZXI7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vdXRsYXllci9vdXRsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2VsZWN0QmFzZUMzIH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeNChMyBleHRlbmRzIFNlbGVjdEJhc2VDMyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcih0YXJnZXROb2RlLCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IFwiYmFyXCI7XHJcbiAgfVxyXG5cclxuICB2YWx1ZXNTb3VyY2UoKTogYW55W10ge1xyXG4gICAgY29uc3QgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4TW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XHJcbiAgICByZXR1cm4gcXVlc3Rpb24uY29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldExhYmVscygpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIHJldHVybiBxdWVzdGlvbi5yb3dzLm1hcChyb3cgPT5cclxuICAgICAgSXRlbVZhbHVlLmdldFRleHRPckh0bWxCeVZhbHVlKHF1ZXN0aW9uLnJvd3MsIHJvdy52YWx1ZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xyXG4gICAgY29uc3QgZGF0YXNldHM6IEFycmF5PGFueT4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT4ge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24ucm93cy5tYXAodiA9PiAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvd0RhdGEgPT4ge1xyXG4gICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSByb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XHJcbiAgICAgIGlmICghIXF1ZXN0aW9uVmFsdWUpIHtcclxuICAgICAgICBxdWVzdGlvbi5yb3dzLmZvckVhY2goKHJvdzogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdldFZhbHVlcygpLmZvckVhY2goKHZhbDogYW55LCBkc0luZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uVmFsdWVbcm93LnZhbHVlXSA9PSB2YWwpIHtcclxuICAgICAgICAgICAgICBkYXRhc2V0c1tkc0luZGV4XVtpbmRleF0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGFzZXRzO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibWF0cml4XCIsIE1hdHJpeNChMyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jMy9tYXRyaXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IGMzIGZyb20gXCJjM1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhdWdlQzMgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XHJcbiAgcHJpdmF0ZSBfcmVzdWx0OiBhbnk7XHJcbiAgcHJpdmF0ZSBjaGFydDogYzMuQ2hhcnRBUEk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHRhcmdldE5vZGUsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hhcnQpIHJldHVybjtcclxuICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5jaGFydCA9IGMzLmdlbmVyYXRlKHtcclxuICAgICAgYmluZHRvOiB0aGlzLnRhcmdldE5vZGUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjb2x1bW5zOiBbW3RoaXMucXVlc3Rpb24udGl0bGUsIHRoaXMucmVzdWx0XV0sXHJcbiAgICAgICAgdHlwZTogXCJnYXVnZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGdhdWdlOiB7XHJcbiAgICAgICAgbWluOiB0aGlzLnF1ZXN0aW9uLnJhdGVNaW4sXHJcbiAgICAgICAgbWF4OiB0aGlzLnF1ZXN0aW9uLnJhdGVNYXgsXHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIHJhdGlvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgcGF0dGVybjogW3RoaXMuZ2V0UmFuZG9tQ29sb3IoKV1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVzdWx0KCkge1xyXG4gICAgaWYgKHRoaXMuX3Jlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3dEYXRhID0+IHtcclxuICAgICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSByb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XHJcbiAgICAgICAgaWYgKCEhcXVlc3Rpb25WYWx1ZSkge1xyXG4gICAgICAgICAgcXVlc3Rpb25WYWx1ZXMucHVzaChxdWVzdGlvblZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fcmVzdWx0ID1cclxuICAgICAgICBxdWVzdGlvblZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBhICsgYjtcclxuICAgICAgICB9KSAvIHF1ZXN0aW9uVmFsdWVzLmxlbmd0aDtcclxuICAgICAgdGhpcy5fcmVzdWx0ID0gTWF0aC5jZWlsKHRoaXMuX3Jlc3VsdCAqIDEwMCkgLyAxMDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuLy8gVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwicmF0aW5nXCIsIEdhdWdlQzMpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYzMvcmF0aW5nLnRzIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2VsZWN0QmFzZUNoYXJ0SlMgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4Q2hhcnRKUyBleHRlbmRzIFNlbGVjdEJhc2VDaGFydEpTIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHRhcmdldE5vZGUsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICAgIHRoaXMuY2hhcnRUeXBlID0gXCJiYXJcIjtcclxuICB9XHJcblxyXG4gIHZhbHVlc1NvdXJjZSgpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIHJldHVybiBxdWVzdGlvbi5jb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uLnJvd3MubWFwKHJvdyA9PlxyXG4gICAgICBJdGVtVmFsdWUuZ2V0VGV4dE9ySHRtbEJ5VmFsdWUocXVlc3Rpb24ucm93cywgcm93LnZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbnMoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHN1cGVyLmdldE9wdGlvbnMoKTtcclxuICAgIG9wdGlvbnMuc2NhbGVzID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gb3B0aW9ucy5zY2FsZXMgPSB7XHJcbiAgICAvLyAgIHhBeGVzOiBbeyBzdGFja2VkOiB0cnVlIH1dLFxyXG4gICAgLy8gICB5QXhlczogW3sgc3RhY2tlZDogdHJ1ZSB9XVxyXG4gICAgLy8gfVxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCk6IGFueVtdIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhc2V0cygpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIGNvbnN0IGRhdGFzZXRzOiBBcnJheTxhbnk+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbDogSXRlbVZhbHVlLmdldFRleHRPckh0bWxCeVZhbHVlKFxyXG4gICAgICAgICAgdGhpcy52YWx1ZXNTb3VyY2UoKSxcclxuICAgICAgICAgIGNob2ljZS52YWx1ZVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YTogcXVlc3Rpb24ucm93cy5tYXAoKCkgPT4gMCksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmdldFJhbmRvbUNvbG9yKClcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvd0RhdGEgPT4ge1xyXG4gICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSByb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XHJcbiAgICAgIGlmICghIXF1ZXN0aW9uVmFsdWUpIHtcclxuICAgICAgICBxdWVzdGlvbi5yb3dzLmZvckVhY2goKHJvdzogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdldFZhbHVlcygpLmZvckVhY2goKHZhbDogYW55LCBkc0luZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uVmFsdWVbcm93LnZhbHVlXSA9PSB2YWwpIHtcclxuICAgICAgICAgICAgICBkYXRhc2V0c1tkc0luZGV4XS5kYXRhW2luZGV4XSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YXNldHM7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBWaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtYXRyaXhcIiwgTWF0cml4Q2hhcnRKUyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jaGFydGpzL21hdHJpeC50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTZWxlY3RCYXNlQ2hhcnRKUyB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYWRpYWxHYXVnZUNoYXJ0SlMgZXh0ZW5kcyBTZWxlY3RCYXNlQ2hhcnRKUyB7XHJcbiAgcHJpdmF0ZSBfcmVzdWx0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIodGFyZ2V0Tm9kZSwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jaGFydFR5cGVzID0gW1wiZG91Z2hudXRcIiwgXCJwaWVcIl07XHJcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IFwiZG91Z2hudXRcIjtcclxuICB9XHJcblxyXG4gIGdldCByZXN1bHQoKSB7XHJcbiAgICBpZiAodGhpcy5fcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvd0RhdGEgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWU6IGFueSA9IHJvd0RhdGFbdGhpcy5xdWVzdGlvbi5uYW1lXTtcclxuICAgICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICBxdWVzdGlvblZhbHVlcy5wdXNoKHF1ZXN0aW9uVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9yZXN1bHQgPVxyXG4gICAgICAgIHF1ZXN0aW9uVmFsdWVzLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgICAgIH0pIC8gcXVlc3Rpb25WYWx1ZXMubGVuZ3RoO1xyXG4gICAgICB0aGlzLl9yZXN1bHQgPSBNYXRoLmNlaWwodGhpcy5fcmVzdWx0ICogMTAwKSAvIDEwMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9yZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbHMoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9ucygpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgcm90YXRpb246IDEgKiBNYXRoLlBJLFxyXG4gICAgICBjaXJjdW1mZXJlbmNlOiAxICogTWF0aC5QSVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWVzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhc2V0cygpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHQgLSB0aGlzLnF1ZXN0aW9uLnJhdGVNaW4sXHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uLnJhdGVNYXggLSB0aGlzLnF1ZXN0aW9uLnJhdGVNaW4gLSB0aGlzLnJlc3VsdFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbdGhpcy5nZXRSYW5kb21Db2xvcigpLCB0aGlzLmdldFJhbmRvbUNvbG9yKCldXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBWaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJyYXRpbmdcIiwgUmFkaWFsR2F1Z2VDaGFydEpTKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoYXJ0anMvcmF0aW5nLnRzIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTZWxlY3RCYXNlUGxvdGx5IH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeFBsb3RseSBleHRlbmRzIFNlbGVjdEJhc2VQbG90bHkge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIodGFyZ2V0Tm9kZSwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jaGFydFR5cGUgPSBcImJhclwiO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVzU291cmNlKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uLmNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbHMoKTogYW55W10ge1xyXG4gICAgY29uc3QgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4TW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XHJcbiAgICByZXR1cm4gcXVlc3Rpb24ucm93cy5tYXAocm93ID0+XHJcbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZShxdWVzdGlvbi5yb3dzLCByb3cudmFsdWUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcclxuICAgIGNvbnN0IGRhdGFzZXRzOiBBcnJheTxhbnk+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+IHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLnJvd3MubWFwKHYgPT4gMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3dEYXRhID0+IHtcclxuICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZTogYW55ID0gcm93RGF0YVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XHJcbiAgICAgICAgcXVlc3Rpb24ucm93cy5mb3JFYWNoKChyb3c6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nZXRWYWx1ZXMoKS5mb3JFYWNoKCh2YWw6IGFueSwgZHNJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvblZhbHVlW3Jvdy52YWx1ZV0gPT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgZGF0YXNldHNbZHNJbmRleF1baW5kZXhdKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhc2V0cztcclxuICB9XHJcbn1cclxuXHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm1hdHJpeFwiLCBNYXRyaXhQbG90bHkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCBQbG90bHkgZnJvbSBcInBsb3RseS5qc1wiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IGMzIGZyb20gXCJjM1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhdWdlUGxvdGx5IGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xyXG4gIHByaXZhdGUgX3Jlc3VsdDogYW55O1xyXG4gIHByaXZhdGUgY2hhcnQ6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2hhcnROb2RlOiBIVE1MRWxlbWVudCxcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcclxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXHJcbiAgICBvcHRpb25zPzogT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBzdXBlcihjaGFydE5vZGUsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBQbG90bHkucHVyZ2UodGhpcy5jaGFydE5vZGUpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVUZXh0KG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgdGV4dDogYW55ID0gW107XHJcbiAgICAvL1wiMjEtMjVcIiwgXCIxNi0yMFwiLCBcIjExLTE1XCIsIFwiNi0xMFwiLCBcIjAtNVwiXHJcblxyXG4gICAgLy8gdGV4dC5wdXNoKG1heFZhbHVlKTtcclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHNDb3VudCAtIDI7IGkrKykge1xyXG4gICAgLy8gICB0ZXh0LnB1c2goXCJcIik7XHJcbiAgICAvLyB9XHJcbiAgICAvLyB0ZXh0LnB1c2gobWluVmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIFwidmVyeSBoaWdodCAoXCIgKyBtYXhWYWx1ZSArIFwiKVwiLFxyXG4gICAgICBcImhpZ2h0XCIsXHJcbiAgICAgIFwibWVkaXVtXCIsXHJcbiAgICAgIFwibG93XCIsXHJcbiAgICAgIFwidmVyeSBsb3cgKFwiICsgbWluVmFsdWUgKyBcIilcIlxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlVmFsdWVzKG1heFZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgdmFsdWVzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50OyBpKyspIHtcclxuICAgICAgdmFsdWVzLnB1c2gobWF4VmFsdWUgLyBzdGVwc0NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZXMucHVzaChtYXhWYWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ29sb3JzKG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMuZ2V0Q29sb3JzKCk7XHJcbiAgICBjb25zdCBjb2xvcnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xyXG4gICAgICBjb2xvcnMucHVzaChwYWxldHRlW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xvcnMucHVzaChcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIik7XHJcblxyXG4gICAgcmV0dXJuIGNvbG9ycztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcclxuICAgIGNvbnN0IGFycm93Q29sb3IgPSBcIiM0ZTYxOThcIjtcclxuXHJcbiAgICBjb25zdCBtYXhWYWx1ZSA9IHF1ZXN0aW9uLnJhdGVNYXg7XHJcbiAgICBjb25zdCBtaW5WYWx1ZSA9IHF1ZXN0aW9uLnJhdGVNaW47XHJcbiAgICBjb25zdCBzdGVwc0NvdW50ID0gNTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2VuZXJhdGVWYWx1ZXMobWF4VmFsdWUsIHN0ZXBzQ291bnQpO1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuZ2VuZXJhdGVUZXh0KG1heFZhbHVlLCBtaW5WYWx1ZSwgc3RlcHNDb3VudCk7XHJcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdlbmVyYXRlQ29sb3JzKG1heFZhbHVlLCBtaW5WYWx1ZSwgc3RlcHNDb3VudCk7XHJcblxyXG4gICAgLy8gRW50ZXIgYSBzcGVlZCBiZXR3ZWVuIDAgYW5kIDE4MFxyXG4gICAgdmFyIGxldmVsID0gdGhpcy5yZXN1bHQ7XHJcblxyXG4gICAgLy8gVHJpZyB0byBjYWxjIG1ldGVyIHBvaW50XHJcbiAgICB2YXIgZGVncmVlcyA9IG1heFZhbHVlIC0gbGV2ZWwsXHJcbiAgICAgIHJhZGl1cyA9IDAuNTtcclxuICAgIHZhciByYWRpYW5zID0gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIG1heFZhbHVlO1xyXG4gICAgdmFyIHggPSByYWRpdXMgKiBNYXRoLmNvcyhyYWRpYW5zKTtcclxuICAgIHZhciB5ID0gcmFkaXVzICogTWF0aC5zaW4ocmFkaWFucyk7XHJcblxyXG4gICAgLy8gUGF0aDogbWF5IGhhdmUgdG8gY2hhbmdlIHRvIGNyZWF0ZSBhIGJldHRlciB0cmlhbmdsZVxyXG4gICAgdmFyIG1haW5QYXRoID0gXCJNIC0uMCAtMC4wMjUgTCAuMCAwLjAyNSBMIFwiLFxyXG4gICAgICBwYXRoWCA9IFN0cmluZyh4KSxcclxuICAgICAgc3BhY2UgPSBcIiBcIixcclxuICAgICAgcGF0aFkgPSBTdHJpbmcoeSksXHJcbiAgICAgIHBhdGhFbmQgPSBcIiBaXCI7XHJcbiAgICB2YXIgcGF0aCA9IG1haW5QYXRoLmNvbmNhdChwYXRoWCwgc3BhY2UsIHBhdGhZLCBwYXRoRW5kKTtcclxuXHJcbiAgICB2YXIgZGF0YTogYW55ID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJzY2F0dGVyXCIsXHJcbiAgICAgICAgeDogWzBdLFxyXG4gICAgICAgIHk6IFswXSxcclxuICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgIHNpemU6IDI4LFxyXG4gICAgICAgICAgY29sb3I6IGFycm93Q29sb3JcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWU6IHF1ZXN0aW9uLm5hbWUsXHJcbiAgICAgICAgdGV4dDogbGV2ZWwsXHJcbiAgICAgICAgc2hvd2xlZ2VuZDogZmFsc2UsXHJcbiAgICAgICAgaG92ZXJpbmZvOiBcInRleHQrbmFtZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcclxuICAgICAgICByb3RhdGlvbjogOTAsXHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICB0ZXh0aW5mbzogXCJ0ZXh0XCIsXHJcbiAgICAgICAgdGV4dHBvc2l0aW9uOiBcImluc2lkZVwiLFxyXG4gICAgICAgIC8vIHRleHRmb250OiB7XHJcbiAgICAgICAgLy8gICBzaXplOiAyMFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICBjb2xvcnM6IGNvbG9yc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaG92ZXJpbmZvOiBcInNraXBcIixcclxuICAgICAgICBob2xlOiAwLjUsXHJcbiAgICAgICAgdHlwZTogXCJwaWVcIixcclxuICAgICAgICBzaG93bGVnZW5kOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBsYXlvdXQ6IGFueSA9IHtcclxuICAgICAgc2hhcGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogXCJwYXRoXCIsXHJcbiAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgZmlsbGNvbG9yOiBhcnJvd0NvbG9yLFxyXG4gICAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICBjb2xvcjogYXJyb3dDb2xvclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgdGl0bGU6IGxldmVsLFxyXG4gICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgd2lkdGg6IDYwMCxcclxuICAgICAgeGF4aXM6IHtcclxuICAgICAgICB6ZXJvbGluZTogZmFsc2UsXHJcbiAgICAgICAgc2hvd3RpY2tsYWJlbHM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dncmlkOiBmYWxzZSxcclxuICAgICAgICByYW5nZTogWy0xLCAxXVxyXG4gICAgICB9LFxyXG4gICAgICB5YXhpczoge1xyXG4gICAgICAgIHplcm9saW5lOiBmYWxzZSxcclxuICAgICAgICBzaG93dGlja2xhYmVsczogZmFsc2UsXHJcbiAgICAgICAgc2hvd2dyaWQ6IGZhbHNlLFxyXG4gICAgICAgIHJhbmdlOiBbLTEsIDFdXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIHBhcGVyX2JnY29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2hhcnROb2RlLnN0eWxlLm1heEhlaWdodCA9IFwiNDAwcHhcIjsgLy8gZml4ZWQgY2hhcnQgaGVpZ2h0XHJcbiAgICB0aGlzLmNoYXJ0Tm9kZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UsXHJcbiAgICAgIHN0YXRpY1Bsb3Q6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IFBsb3RseS5uZXdQbG90KHRoaXMuY2hhcnROb2RlLCBkYXRhLCBsYXlvdXQsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVzdWx0KCkge1xyXG4gICAgaWYgKHRoaXMuX3Jlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3dEYXRhID0+IHtcclxuICAgICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSByb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XHJcbiAgICAgICAgaWYgKCEhcXVlc3Rpb25WYWx1ZSkge1xyXG4gICAgICAgICAgcXVlc3Rpb25WYWx1ZXMucHVzaChxdWVzdGlvblZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fcmVzdWx0ID1cclxuICAgICAgICBxdWVzdGlvblZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBhICsgYjtcclxuICAgICAgICB9KSAvIHF1ZXN0aW9uVmFsdWVzLmxlbmd0aDtcclxuICAgICAgdGhpcy5fcmVzdWx0ID0gTWF0aC5jZWlsKHRoaXMuX3Jlc3VsdCAqIDEwMCkgLyAxMDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwicmF0aW5nXCIsIEdhdWdlUGxvdGx5KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9yYXRpbmcudHMiLCJleHBvcnQgdmFyIHN0b3BXb3JkcyA9IG5ldyBBcnJheShcclxuICBcImFcIixcclxuICBcImFib3V0XCIsXHJcbiAgXCJhYm92ZVwiLFxyXG4gIFwiYWNyb3NzXCIsXHJcbiAgXCJhZnRlclwiLFxyXG4gIFwiYWdhaW5cIixcclxuICBcImFnYWluc3RcIixcclxuICBcImFsbFwiLFxyXG4gIFwiYWxtb3N0XCIsXHJcbiAgXCJhbG9uZVwiLFxyXG4gIFwiYWxvbmdcIixcclxuICBcImFscmVhZHlcIixcclxuICBcImFsc29cIixcclxuICBcImFsdGhvdWdoXCIsXHJcbiAgXCJhbHdheXNcIixcclxuICBcImFtb25nXCIsXHJcbiAgXCJhblwiLFxyXG4gIFwiYW5kXCIsXHJcbiAgXCJhbm90aGVyXCIsXHJcbiAgXCJhbnlcIixcclxuICBcImFueWJvZHlcIixcclxuICBcImFueW9uZVwiLFxyXG4gIFwiYW55dGhpbmdcIixcclxuICBcImFueXdoZXJlXCIsXHJcbiAgXCJhcmVcIixcclxuICBcImFyZWFcIixcclxuICBcImFyZWFzXCIsXHJcbiAgXCJhcm91bmRcIixcclxuICBcImFzXCIsXHJcbiAgXCJhc2tcIixcclxuICBcImFza2VkXCIsXHJcbiAgXCJhc2tpbmdcIixcclxuICBcImFza3NcIixcclxuICBcImF0XCIsXHJcbiAgXCJhd2F5XCIsXHJcbiAgXCJiXCIsXHJcbiAgXCJiYWNrXCIsXHJcbiAgXCJiYWNrZWRcIixcclxuICBcImJhY2tpbmdcIixcclxuICBcImJhY2tzXCIsXHJcbiAgXCJiZVwiLFxyXG4gIFwiYmVjYW1lXCIsXHJcbiAgXCJiZWNhdXNlXCIsXHJcbiAgXCJiZWNvbWVcIixcclxuICBcImJlY29tZXNcIixcclxuICBcImJlZW5cIixcclxuICBcImJlZm9yZVwiLFxyXG4gIFwiYmVnYW5cIixcclxuICBcImJlaGluZFwiLFxyXG4gIFwiYmVpbmdcIixcclxuICBcImJlaW5nc1wiLFxyXG4gIFwiYmVzdFwiLFxyXG4gIFwiYmV0dGVyXCIsXHJcbiAgXCJiZXR3ZWVuXCIsXHJcbiAgXCJiaWdcIixcclxuICBcImJvdGhcIixcclxuICBcImJ1dFwiLFxyXG4gIFwiYnlcIixcclxuICBcImNcIixcclxuICBcImNhbWVcIixcclxuICBcImNhblwiLFxyXG4gIFwiY2Fubm90XCIsXHJcbiAgXCJjYXNlXCIsXHJcbiAgXCJjYXNlc1wiLFxyXG4gIFwiY2VydGFpblwiLFxyXG4gIFwiY2VydGFpbmx5XCIsXHJcbiAgXCJjbGVhclwiLFxyXG4gIFwiY2xlYXJseVwiLFxyXG4gIFwiY29tZVwiLFxyXG4gIFwiY291bGRcIixcclxuICBcImRcIixcclxuICBcImRpZFwiLFxyXG4gIFwiZGlmZmVyXCIsXHJcbiAgXCJkaWZmZXJlbnRcIixcclxuICBcImRpZmZlcmVudGx5XCIsXHJcbiAgXCJkb1wiLFxyXG4gIFwiZG9lc1wiLFxyXG4gIFwiZG9uZVwiLFxyXG4gIFwiZG93blwiLFxyXG4gIFwiZG93blwiLFxyXG4gIFwiZG93bmVkXCIsXHJcbiAgXCJkb3duaW5nXCIsXHJcbiAgXCJkb3duc1wiLFxyXG4gIFwiZHVyaW5nXCIsXHJcbiAgXCJlXCIsXHJcbiAgXCJlYWNoXCIsXHJcbiAgXCJlYXJseVwiLFxyXG4gIFwiZWl0aGVyXCIsXHJcbiAgXCJlbmRcIixcclxuICBcImVuZGVkXCIsXHJcbiAgXCJlbmRpbmdcIixcclxuICBcImVuZHNcIixcclxuICBcImVub3VnaFwiLFxyXG4gIFwiZXZlblwiLFxyXG4gIFwiZXZlbmx5XCIsXHJcbiAgXCJldmVyXCIsXHJcbiAgXCJldmVyeVwiLFxyXG4gIFwiZXZlcnlib2R5XCIsXHJcbiAgXCJldmVyeW9uZVwiLFxyXG4gIFwiZXZlcnl0aGluZ1wiLFxyXG4gIFwiZXZlcnl3aGVyZVwiLFxyXG4gIFwiZlwiLFxyXG4gIFwiZmFjZVwiLFxyXG4gIFwiZmFjZXNcIixcclxuICBcImZhY3RcIixcclxuICBcImZhY3RzXCIsXHJcbiAgXCJmYXJcIixcclxuICBcImZlbHRcIixcclxuICBcImZld1wiLFxyXG4gIFwiZmluZFwiLFxyXG4gIFwiZmluZHNcIixcclxuICBcImZpcnN0XCIsXHJcbiAgXCJmb3JcIixcclxuICBcImZvdXJcIixcclxuICBcImZyb21cIixcclxuICBcImZ1bGxcIixcclxuICBcImZ1bGx5XCIsXHJcbiAgXCJmdXJ0aGVyXCIsXHJcbiAgXCJmdXJ0aGVyZWRcIixcclxuICBcImZ1cnRoZXJpbmdcIixcclxuICBcImZ1cnRoZXJzXCIsXHJcbiAgXCJnXCIsXHJcbiAgXCJnYXZlXCIsXHJcbiAgXCJnZW5lcmFsXCIsXHJcbiAgXCJnZW5lcmFsbHlcIixcclxuICBcImdldFwiLFxyXG4gIFwiZ2V0c1wiLFxyXG4gIFwiZ2l2ZVwiLFxyXG4gIFwiZ2l2ZW5cIixcclxuICBcImdpdmVzXCIsXHJcbiAgXCJnb1wiLFxyXG4gIFwiZ29pbmdcIixcclxuICBcImdvb2RcIixcclxuICBcImdvb2RzXCIsXHJcbiAgXCJnb3RcIixcclxuICBcImdyZWF0XCIsXHJcbiAgXCJncmVhdGVyXCIsXHJcbiAgXCJncmVhdGVzdFwiLFxyXG4gIFwiZ3JvdXBcIixcclxuICBcImdyb3VwZWRcIixcclxuICBcImdyb3VwaW5nXCIsXHJcbiAgXCJncm91cHNcIixcclxuICBcImhcIixcclxuICBcImhhZFwiLFxyXG4gIFwiaGFzXCIsXHJcbiAgXCJoYXZlXCIsXHJcbiAgXCJoYXZpbmdcIixcclxuICBcImhlXCIsXHJcbiAgXCJoZXJcIixcclxuICBcImhlcmVcIixcclxuICBcImhlcnNlbGZcIixcclxuICBcImhpZ2hcIixcclxuICBcImhpZ2hcIixcclxuICBcImhpZ2hcIixcclxuICBcImhpZ2hlclwiLFxyXG4gIFwiaGlnaGVzdFwiLFxyXG4gIFwiaGltXCIsXHJcbiAgXCJoaW1zZWxmXCIsXHJcbiAgXCJoaXNcIixcclxuICBcImhvd1wiLFxyXG4gIFwiaG93ZXZlclwiLFxyXG4gIFwiaVwiLFxyXG4gIFwiaWZcIixcclxuICBcImltcG9ydGFudFwiLFxyXG4gIFwiaW5cIixcclxuICBcImludGVyZXN0XCIsXHJcbiAgXCJpbnRlcmVzdGVkXCIsXHJcbiAgXCJpbnRlcmVzdGluZ1wiLFxyXG4gIFwiaW50ZXJlc3RzXCIsXHJcbiAgXCJpbnRvXCIsXHJcbiAgXCJpc1wiLFxyXG4gIFwiaXRcIixcclxuICBcIml0c1wiLFxyXG4gIFwiaXRzZWxmXCIsXHJcbiAgXCJqXCIsXHJcbiAgXCJqdXN0XCIsXHJcbiAgXCJrXCIsXHJcbiAgXCJrZWVwXCIsXHJcbiAgXCJrZWVwc1wiLFxyXG4gIFwia2luZFwiLFxyXG4gIFwia25ld1wiLFxyXG4gIFwia25vd1wiLFxyXG4gIFwia25vd25cIixcclxuICBcImtub3dzXCIsXHJcbiAgXCJsXCIsXHJcbiAgXCJsYXJnZVwiLFxyXG4gIFwibGFyZ2VseVwiLFxyXG4gIFwibGFzdFwiLFxyXG4gIFwibGF0ZXJcIixcclxuICBcImxhdGVzdFwiLFxyXG4gIFwibGVhc3RcIixcclxuICBcImxlc3NcIixcclxuICBcImxldFwiLFxyXG4gIFwibGV0c1wiLFxyXG4gIFwibGlrZVwiLFxyXG4gIFwibGlrZWx5XCIsXHJcbiAgXCJsb25nXCIsXHJcbiAgXCJsb25nZXJcIixcclxuICBcImxvbmdlc3RcIixcclxuICBcIm1cIixcclxuICBcIm1hZGVcIixcclxuICBcIm1ha2VcIixcclxuICBcIm1ha2luZ1wiLFxyXG4gIFwibWFuXCIsXHJcbiAgXCJtYW55XCIsXHJcbiAgXCJtYXlcIixcclxuICBcIm1lXCIsXHJcbiAgXCJtZW1iZXJcIixcclxuICBcIm1lbWJlcnNcIixcclxuICBcIm1lblwiLFxyXG4gIFwibWlnaHRcIixcclxuICBcIm1vcmVcIixcclxuICBcIm1vc3RcIixcclxuICBcIm1vc3RseVwiLFxyXG4gIFwibXJcIixcclxuICBcIm1yc1wiLFxyXG4gIFwibXVjaFwiLFxyXG4gIFwibXVzdFwiLFxyXG4gIFwibXlcIixcclxuICBcIm15c2VsZlwiLFxyXG4gIFwiblwiLFxyXG4gIFwibmVjZXNzYXJ5XCIsXHJcbiAgXCJuZWVkXCIsXHJcbiAgXCJuZWVkZWRcIixcclxuICBcIm5lZWRpbmdcIixcclxuICBcIm5lZWRzXCIsXHJcbiAgXCJuZXZlclwiLFxyXG4gIFwibmV3XCIsXHJcbiAgXCJuZXdcIixcclxuICBcIm5ld2VyXCIsXHJcbiAgXCJuZXdlc3RcIixcclxuICBcIm5leHRcIixcclxuICBcIm5vXCIsXHJcbiAgXCJub2JvZHlcIixcclxuICBcIm5vblwiLFxyXG4gIFwibm9vbmVcIixcclxuICBcIm5vdFwiLFxyXG4gIFwibm90aGluZ1wiLFxyXG4gIFwibm93XCIsXHJcbiAgXCJub3doZXJlXCIsXHJcbiAgXCJudW1iZXJcIixcclxuICBcIm51bWJlcnNcIixcclxuICBcIm9cIixcclxuICBcIm9mXCIsXHJcbiAgXCJvZmZcIixcclxuICBcIm9mdGVuXCIsXHJcbiAgXCJvbGRcIixcclxuICBcIm9sZGVyXCIsXHJcbiAgXCJvbGRlc3RcIixcclxuICBcIm9uXCIsXHJcbiAgXCJvbmNlXCIsXHJcbiAgXCJvbmVcIixcclxuICBcIm9ubHlcIixcclxuICBcIm9wZW5cIixcclxuICBcIm9wZW5lZFwiLFxyXG4gIFwib3BlbmluZ1wiLFxyXG4gIFwib3BlbnNcIixcclxuICBcIm9yXCIsXHJcbiAgXCJvcmRlclwiLFxyXG4gIFwib3JkZXJlZFwiLFxyXG4gIFwib3JkZXJpbmdcIixcclxuICBcIm9yZGVyc1wiLFxyXG4gIFwib3RoZXJcIixcclxuICBcIm90aGVyc1wiLFxyXG4gIFwib3VyXCIsXHJcbiAgXCJvdXRcIixcclxuICBcIm92ZXJcIixcclxuICBcInBcIixcclxuICBcInBhcnRcIixcclxuICBcInBhcnRlZFwiLFxyXG4gIFwicGFydGluZ1wiLFxyXG4gIFwicGFydHNcIixcclxuICBcInBlclwiLFxyXG4gIFwicGVyaGFwc1wiLFxyXG4gIFwicGxhY2VcIixcclxuICBcInBsYWNlc1wiLFxyXG4gIFwicG9pbnRcIixcclxuICBcInBvaW50ZWRcIixcclxuICBcInBvaW50aW5nXCIsXHJcbiAgXCJwb2ludHNcIixcclxuICBcInBvc3NpYmxlXCIsXHJcbiAgXCJwcmVzZW50XCIsXHJcbiAgXCJwcmVzZW50ZWRcIixcclxuICBcInByZXNlbnRpbmdcIixcclxuICBcInByZXNlbnRzXCIsXHJcbiAgXCJwcm9ibGVtXCIsXHJcbiAgXCJwcm9ibGVtc1wiLFxyXG4gIFwicHV0XCIsXHJcbiAgXCJwdXRzXCIsXHJcbiAgXCJxXCIsXHJcbiAgXCJxdWl0ZVwiLFxyXG4gIFwiclwiLFxyXG4gIFwicmF0aGVyXCIsXHJcbiAgXCJyZWFsbHlcIixcclxuICBcInJpZ2h0XCIsXHJcbiAgXCJyaWdodFwiLFxyXG4gIFwicm9vbVwiLFxyXG4gIFwicm9vbXNcIixcclxuICBcInNcIixcclxuICBcInNhaWRcIixcclxuICBcInNhbWVcIixcclxuICBcInNhd1wiLFxyXG4gIFwic2F5XCIsXHJcbiAgXCJzYXlzXCIsXHJcbiAgXCJzZWNvbmRcIixcclxuICBcInNlY29uZHNcIixcclxuICBcInNlZVwiLFxyXG4gIFwic2VlbVwiLFxyXG4gIFwic2VlbWVkXCIsXHJcbiAgXCJzZWVtaW5nXCIsXHJcbiAgXCJzZWVtc1wiLFxyXG4gIFwic2Vlc1wiLFxyXG4gIFwic2V2ZXJhbFwiLFxyXG4gIFwic2hhbGxcIixcclxuICBcInNoZVwiLFxyXG4gIFwic2hvdWxkXCIsXHJcbiAgXCJzaG93XCIsXHJcbiAgXCJzaG93ZWRcIixcclxuICBcInNob3dpbmdcIixcclxuICBcInNob3dzXCIsXHJcbiAgXCJzaWRlXCIsXHJcbiAgXCJzaWRlc1wiLFxyXG4gIFwic2luY2VcIixcclxuICBcInNtYWxsXCIsXHJcbiAgXCJzbWFsbGVyXCIsXHJcbiAgXCJzbWFsbGVzdFwiLFxyXG4gIFwic29cIixcclxuICBcInNvbWVcIixcclxuICBcInNvbWVib2R5XCIsXHJcbiAgXCJzb21lb25lXCIsXHJcbiAgXCJzb21ldGhpbmdcIixcclxuICBcInNvbWV3aGVyZVwiLFxyXG4gIFwic3RhdGVcIixcclxuICBcInN0YXRlc1wiLFxyXG4gIFwic3RpbGxcIixcclxuICBcInN0aWxsXCIsXHJcbiAgXCJzdWNoXCIsXHJcbiAgXCJzdXJlXCIsXHJcbiAgXCJ0XCIsXHJcbiAgXCJ0YWtlXCIsXHJcbiAgXCJ0YWtlblwiLFxyXG4gIFwidGhhblwiLFxyXG4gIFwidGhhdFwiLFxyXG4gIFwidGhlXCIsXHJcbiAgXCJ0aGVpclwiLFxyXG4gIFwidGhlbVwiLFxyXG4gIFwidGhlblwiLFxyXG4gIFwidGhlcmVcIixcclxuICBcInRoZXJlZm9yZVwiLFxyXG4gIFwidGhlc2VcIixcclxuICBcInRoZXlcIixcclxuICBcInRoaW5nXCIsXHJcbiAgXCJ0aGluZ3NcIixcclxuICBcInRoaW5rXCIsXHJcbiAgXCJ0aGlua3NcIixcclxuICBcInRoaXNcIixcclxuICBcInRob3NlXCIsXHJcbiAgXCJ0aG91Z2hcIixcclxuICBcInRob3VnaHRcIixcclxuICBcInRob3VnaHRzXCIsXHJcbiAgXCJ0aHJlZVwiLFxyXG4gIFwidGhyb3VnaFwiLFxyXG4gIFwidGh1c1wiLFxyXG4gIFwidG9cIixcclxuICBcInRvZGF5XCIsXHJcbiAgXCJ0b2dldGhlclwiLFxyXG4gIFwidG9vXCIsXHJcbiAgXCJ0b29rXCIsXHJcbiAgXCJ0b3dhcmRcIixcclxuICBcInR1cm5cIixcclxuICBcInR1cm5lZFwiLFxyXG4gIFwidHVybmluZ1wiLFxyXG4gIFwidHVybnNcIixcclxuICBcInR3b1wiLFxyXG4gIFwidVwiLFxyXG4gIFwidW5kZXJcIixcclxuICBcInVudGlsXCIsXHJcbiAgXCJ1cFwiLFxyXG4gIFwidXBvblwiLFxyXG4gIFwidXNcIixcclxuICBcInVzZVwiLFxyXG4gIFwidXNlZFwiLFxyXG4gIFwidXNlc1wiLFxyXG4gIFwidlwiLFxyXG4gIFwidmVyeVwiLFxyXG4gIFwid1wiLFxyXG4gIFwid2FudFwiLFxyXG4gIFwid2FudGVkXCIsXHJcbiAgXCJ3YW50aW5nXCIsXHJcbiAgXCJ3YW50c1wiLFxyXG4gIFwid2FzXCIsXHJcbiAgXCJ3YXlcIixcclxuICBcIndheXNcIixcclxuICBcIndlXCIsXHJcbiAgXCJ3ZWxsXCIsXHJcbiAgXCJ3ZWxsc1wiLFxyXG4gIFwid2VudFwiLFxyXG4gIFwid2VyZVwiLFxyXG4gIFwid2hhdFwiLFxyXG4gIFwid2hlblwiLFxyXG4gIFwid2hlcmVcIixcclxuICBcIndoZXRoZXJcIixcclxuICBcIndoaWNoXCIsXHJcbiAgXCJ3aGlsZVwiLFxyXG4gIFwid2hvXCIsXHJcbiAgXCJ3aG9sZVwiLFxyXG4gIFwid2hvc2VcIixcclxuICBcIndoeVwiLFxyXG4gIFwid2lsbFwiLFxyXG4gIFwid2l0aFwiLFxyXG4gIFwid2l0aGluXCIsXHJcbiAgXCJ3aXRob3V0XCIsXHJcbiAgXCJ3b3JrXCIsXHJcbiAgXCJ3b3JrZWRcIixcclxuICBcIndvcmtpbmdcIixcclxuICBcIndvcmtzXCIsXHJcbiAgXCJ3b3VsZFwiLFxyXG4gIFwieFwiLFxyXG4gIFwieVwiLFxyXG4gIFwieWVhclwiLFxyXG4gIFwieWVhcnNcIixcclxuICBcInlldFwiLFxyXG4gIFwieW91XCIsXHJcbiAgXCJ5b3VuZ1wiLFxyXG4gIFwieW91bmdlclwiLFxyXG4gIFwieW91bmdlc3RcIixcclxuICBcInlvdXJcIixcclxuICBcInlvdXJzXCIsXHJcbiAgXCJ6XCJcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvZW5nbGlzaC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIkNoYXJ0XCIsXCJjb21tb25qczJcIjpcIkNoYXJ0XCIsXCJjb21tb25qc1wiOlwiQ2hhcnRcIixcImFtZFwiOlwiQ2hhcnRcIn1cbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIldvcmRDbG91ZFwiLFwiY29tbW9uanMyXCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzXCI6XCJXb3JkQ2xvdWRcIixcImFtZFwiOlwiV29yZENsb3VkXCJ9XG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2RhdGF0YWJsZXMvZGF0YXRhYmxlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jaGFydGpzL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2MzL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Bsb3RseS9pbmRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93b3JkY2xvdWQvd29yZGNsb3VkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXhcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==