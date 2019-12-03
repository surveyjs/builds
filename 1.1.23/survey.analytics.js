/*!
 * surveyjs - SurveyJS Analytics library v1.1.23
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"), require("plotly.js-dist"), require("wordcloud"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalytics", ["survey-core", "plotly.js-dist", "wordcloud", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalytics"] = factory(require("survey-core"), require("plotly.js-dist"), require("wordcloud"), require("jquery"));
	else
		root["SurveyAnalytics"] = factory(root["Survey"], root["Plotly"], root["WordCloud"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__visualizerBase_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizerBase; });

var VisualizerBase = /** @class */ (function () {
    function VisualizerBase(targetElement, question, data, options) {
        this.targetElement = targetElement;
        this.question = question;
        this.data = data;
        this.options = options;
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
    VisualizerBase.prototype.destroy = function () {
        this.targetElement.innerHTML = "";
    };
    VisualizerBase.prototype.renderContent = function (container) {
        container.innerHTML = "This question type is not visualized yet";
    };
    VisualizerBase.prototype.render = function (targetElement) {
        this.targetElement = targetElement || this.targetElement;
        var toolbarNodeContainer = document.createElement("div");
        var contentContainer = document.createElement("div");
        contentContainer.className = "sa-visualizer__content";
        this.createToolbar(toolbarNodeContainer);
        this.renderContent(contentContainer);
        this.targetElement.appendChild(toolbarNodeContainer);
        this.targetElement.appendChild(contentContainer);
    };
    VisualizerBase.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        Object.keys(this.toolbarItemCreators || {}).forEach(function (toolbarItemName) { return _this.toolbarItemCreators[toolbarItemName](toolbar); });
    };
    VisualizerBase.prototype.createToolbar = function (container) {
        var toolbar = document.createElement("div");
        toolbar.className = "sva-toolbar";
        this.createToolbarItems(toolbar);
        container.appendChild(toolbar);
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
var surveyStrings = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* englishStrings */];
localization.locales["en"] = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* englishStrings */];
localization.localeNames["en"] = "english";


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarHelper; });
var ToolbarHelper = /** @class */ (function () {
    function ToolbarHelper() {
    }
    ToolbarHelper.createSelector = function (toolbar, options, isSelected, hander) {
        var selectWrapper = document.createElement("div");
        selectWrapper.className = "sva-question__select-wrapper";
        var select = document.createElement("select");
        select.className = "sva-question__select";
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
    ToolbarHelper.createButton = function (toolbar, hander, text, cssClass) {
        if (text === void 0) { text = ""; }
        if (cssClass === void 0) { cssClass = ""; }
        var button = document.createElement("span");
        button.className = "sva-toolbar__button " + cssClass;
        button.innerText = text;
        button.onclick = hander;
        toolbar.appendChild(button);
        return button;
    };
    return ToolbarHelper;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectBase__ = __webpack_require__(10);
/* harmony export (immutable) */ __webpack_exports__["a"] = canLoadPlotly;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectBasePlotly; });



function canLoadPlotly() {
    return !!window.URL.createObjectURL;
}
var Plotly;
if (canLoadPlotly()) {
    Plotly = __webpack_require__(11);
}
var SelectBasePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBasePlotly, _super);
    function SelectBasePlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
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
    SelectBasePlotly.prototype.getSelectedItemByText = function (itemText) {
        return this.question.choices.filter(function (choice) { return choice.text === itemText; })[0];
    };
    SelectBasePlotly.prototype.patchConfigParameters = function (chartNode, traces, layout, config) { };
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
            traceConfig["marker"] = {
                color: colors,
                symbol: "circle",
                size: 16
            };
        }
        datasets.forEach(function (dataset) {
            if (_this.chartType === "pie") {
                traces.push(Object.assign({}, traceConfig, {
                    values: dataset,
                    labels: labels
                }));
            }
            else {
                traces.push(Object.assign({}, traceConfig, { x: dataset }));
            }
        });
        var height = chartType === "pie"
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
        this.patchConfigParameters(chartNode, traces, layout, config);
        var plot = Plotly.newPlot(chartNode, traces, layout, config);
        chartNode["on"]("plotly_click", function (data) {
            if (data.points.length > 0 && _this.onDataItemSelected) {
                var itemText = data.points[0].text;
                var item = _this.getSelectedItemByText(itemText);
                _this.setSelection(item);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alternativeVizualizersWrapper__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectBase__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationPanel; });



var Muuri = __webpack_require__(21);





var questionElementClassName = "sva-question";
/**
 * VisualizationPanel is responsible for displaying an array of survey questions.
 */
var VisualizationPanel = /** @class */ (function () {
    function VisualizationPanel(targetElement, questions, data, options, _elements, isTrustedAccess) {
        if (_elements === void 0) { _elements = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        this.targetElement = targetElement;
        this.questions = questions;
        this.data = data;
        this.options = options;
        this._elements = _elements;
        this.isTrustedAccess = isTrustedAccess;
        this._showHeader = false;
        this.panelContent = undefined;
        this.filterValues = {};
        this.visualizers = [];
        /**
         * Fires when element visibility has been changed.
         */
        this.onVisibleElementsCnahged = new __WEBPACK_IMPORTED_MODULE_2_survey_core__["Event"]();
        this.filteredData = data;
        if (_elements.length === 0) {
            this._elements = this.buildElements(questions);
        }
    }
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
                visibility: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible,
                type: undefined
            };
        });
    };
    /**
     * Checks whether certain element is visible.
     */
    VisualizationPanel.prototype.isVisible = function (visibility) {
        return this.isTrustedAccess && visibility !== __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Invisible || !this.isTrustedAccess && visibility === __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible;
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
    VisualizationPanel.prototype.visibleElementsCnahged = function () {
        if (!this.onVisibleElementsCnahged.isEmpty) {
            this.onVisibleElementsCnahged.fire(this, {});
        }
        this.layout();
    };
    /**
     * Destroys given visualizer.
     */
    VisualizationPanel.prototype.destroyVisualizer = function (visualizer) {
        if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
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
        questionElement.className = questionElementClassName;
        questionContent.className = questionElementClassName + "__content";
        titleElement.className = questionElementClassName + "__title";
        questionContent.appendChild(titleElement);
        questionContent.appendChild(vizualizerElement);
        questionElement.appendChild(questionContent);
        var visualizer = this.createVizualizer(vizualizerElement, question, this.filteredData);
        visualizer.registerToolbarItem("removeQuestion", function (toolbar) {
            return __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createButton(toolbar, function () {
                setTimeout(function () {
                    element.visibility = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Invisible;
                    _this.destroyVisualizer(visualizer);
                    _this.layoutEngine.remove([questionElement]);
                    _this.panelContent.removeChild(questionElement);
                    _this.visibleElementsCnahged();
                }, 0);
            }, __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("hideButton"));
        });
        if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
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
                }
            };
            visualizer.registerToolbarItem("questionFilterInfo", function (toolbar) {
                filterInfo.element = document.createElement("div");
                filterInfo.element.className = "sva-question__filter";
                filterInfo.text = document.createElement("span");
                filterInfo.text.className = "sva-question__filter-text";
                filterInfo.element.appendChild(filterInfo.text);
                var filterClear = document.createElement("span");
                filterClear.className = "sva-toolbar__button";
                filterClear.innerHTML = __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("clearButton");
                filterClear.onclick = function () {
                    visualizer.setSelection(undefined);
                };
                filterInfo.element.appendChild(filterClear);
                toolbar.appendChild(filterInfo.element);
                filterInfo.update(visualizer.selection);
                return filterInfo.element;
            });
            visualizer.onDataItemSelected = function (selectedValue, selectedText) {
                filterInfo.update({ value: selectedValue, text: selectedText });
                _this.applyFilter(question.name, selectedValue);
            };
        }
        visualizer.render();
        visualizer.onUpdate = function () { return _this.layout(); };
        this.visualizers.push(visualizer);
        return questionElement;
    };
    /**
     * Renders all questions into given HTML container element.
     */
    VisualizationPanel.prototype.render = function () {
        var _this = this;
        var layoutEngine = undefined;
        this.getLayoutEngine = function () { return layoutEngine; };
        this.panelContent = document.createElement("div");
        this.panelContent.className = "sva-grid";
        this.visibleElements.forEach(function (element) {
            var questionElement = _this.renderVisualizer(element);
            _this.panelContent.appendChild(questionElement);
        });
        if (this.showHeader) {
            var panelHeader = document.createElement("div");
            panelHeader.className = "sva-panel__header";
            var toolobar = document.createElement("div");
            toolobar.className = "sva-toolbar";
            this.createToolbarItems(toolobar);
            panelHeader.appendChild(toolobar);
            this.targetElement.appendChild(panelHeader);
        }
        this.targetElement.appendChild(this.panelContent);
        var moveHandler = function (data) {
            var elements = _this._elements.splice(data.fromIndex, 1);
            _this._elements.splice(data.toIndex, 0, elements[0]);
        };
        layoutEngine = new Muuri(this.panelContent, {
            items: ".sva-question",
            dragEnabled: true
        });
        layoutEngine.on("move", moveHandler);
        !!window && window.dispatchEvent(new UIEvent('resize'));
    };
    VisualizationPanel.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        var resetFilterButton = __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createButton(toolbar, function () {
            _this.visualizers.forEach(function (visualizer) {
                if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
                    visualizer.setSelection(undefined);
                }
            });
        }, __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("resetFilter"));
        toolbar.appendChild(resetFilterButton);
        var addElementSelector = undefined;
        var addElementSelectorUpdater = function (panel, _) {
            var hiddenElements = _this.hiddenElements;
            if (hiddenElements.length > 0) {
                var selectWrapper = __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, [{ name: undefined, displayName: __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("addElement") }].concat(hiddenElements).map(function (element) {
                    return {
                        value: element.name,
                        text: element.displayName
                    };
                }), function (option) { return false; }, function (e) {
                    var element = _this.getElement(e.target.value);
                    element.visibility = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible;
                    var questionElement = _this.renderVisualizer(element);
                    _this.panelContent.appendChild(questionElement);
                    _this.layoutEngine.add([questionElement]);
                    _this.visibleElementsCnahged();
                });
                addElementSelector && toolbar.replaceChild(selectWrapper, addElementSelector) || toolbar.appendChild(selectWrapper);
                addElementSelector = selectWrapper;
            }
            else {
                addElementSelector && toolbar.removeChild(addElementSelector);
                addElementSelector = undefined;
            }
        };
        addElementSelectorUpdater(this, {});
        this.onVisibleElementsCnahged.add(addElementSelectorUpdater);
    };
    /**
     * Destroys visualizer and all inner content.
     */
    VisualizationPanel.prototype.destroy = function () {
        var layoutEngine = !!this.getLayoutEngine && this.getLayoutEngine();
        if (!!layoutEngine) {
            layoutEngine.off("move");
            layoutEngine.destroy();
            this.getLayoutEngine = undefined;
        }
        this.targetElement.innerHTML = "";
        this.panelContent = undefined;
        this.visualizers.forEach(function (visualizer) {
            visualizer.onUpdate = undefined;
            if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
                visualizer.onDataItemSelected = undefined;
            }
            visualizer.destroy();
        });
        this.visualizers = [];
    };
    /**
     * Updates visualizer and all inner content.
     */
    VisualizationPanel.prototype.update = function (hard) {
        var _this = this;
        if (hard === void 0) { hard = false; }
        if (hard && this.visualizers.length > 0) {
            this.destroy();
            this.render();
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
     * Applies filter by question name and value.
     */
    VisualizationPanel.prototype.applyFilter = function (questionName, selectedValue) {
        var _this = this;
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
            this.filteredData = this.data.filter(function (item) {
                return !Object.keys(_this.filterValues).some(function (key) { return item[key] !== _this.filterValues[key]; });
            });
            this.update();
        }
    };
    /**
     * Creates visuzlizer by question.
     */
    VisualizationPanel.prototype.createVizualizer = function (vizualizerElement, question, data) {
        var creators = __WEBPACK_IMPORTED_MODULE_0__visualizationManager__["a" /* VisualizationManager */].getVisualizers(question.getType());
        var visualizers = creators.map(function (creator) { return new creator(vizualizerElement, question, data); });
        if (visualizers.length > 1) {
            var visualizer = new __WEBPACK_IMPORTED_MODULE_1__alternativeVizualizersWrapper__["a" /* AlternativeVisualizersWrapper */](visualizers, vizualizerElement, question, data);
            return visualizer;
        }
        return visualizers[0];
    };
    Object.defineProperty(VisualizationPanel.prototype, "showHeader", {
        get: function () {
            return this._showHeader;
        },
        set: function (newValue) {
            if (newValue != this._showHeader) {
                this._showHeader = newValue;
                this.update(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    return VisualizationPanel;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(7);
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
    return VisualizationPanelDynamic;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("paneldynamic", VisualizationPanelDynamic);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__english__ = __webpack_require__(29);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBase; });





var SelectBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBase, _super);
    function SelectBase(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.selectedItem = undefined;
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
    SelectBase.prototype.renderContent = function (container) {
        this.createChart();
        container.appendChild(this.chartNode);
    };
    SelectBase.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 0) {
            var selectWrapper = __WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.chartTypes.map(function (chartType) {
                return {
                    value: chartType,
                    text: __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("chartType_" + chartType)
                };
            }), function (option) { return _this.chartType === option.value; }, function (e) { return _this.setChartType(e.target.value); });
            toolbar.appendChild(selectWrapper);
        }
        _super.prototype.createToolbarItems.call(this, toolbar);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatables_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__datatables_scss__);
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
        /**
         * The event is fired columns configuration has been changed.
         * <br/> sender the datatables adapter
         * <br/> options.survey current survey
         * @see getColumns
         */
        this.columnsChanged = new __WEBPACK_IMPORTED_MODULE_1_survey_core__["Event"]();
        this.groupBy = [];
        this.headerButtonCreators = [];
        this.detailButtonCreators = [];
        this.createSelectButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("selectButton");
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
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("groupButton");
            button.onclick = function (e) {
                e.stopPropagation();
                var index = _this.groupBy.indexOf(columnName);
                if (index === -1) {
                    _this.groupBy.push(columnName);
                    button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("ungroupButton");
                }
                else {
                    button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("groupButton");
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
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("hideColumn");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].visibility = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible;
                datatableApi.columns([colIdx]).visible(false);
                // TODO: Use datatables to update headers (show columns options)
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        this.createAddColumnButton = function (datatableApi, colIdx, columnName) {
            var selector = document.createElement("select");
            selector.onclick = function (e) {
                e.stopPropagation();
            };
            var hiddenColumns = _this.columns.filter(function (column) { return column.visibility === __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible; });
            if (hiddenColumns.length === 0) {
                return;
            }
            var option = document.createElement("option");
            option.text = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("showColumn");
            option.disabled = true;
            option.selected = true;
            selector.appendChild(option);
            hiddenColumns.forEach(function (column) {
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
                column.visibility = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible;
                datatableApi.columns([self._columns.indexOf(column)]).visible(true);
                // TODO: Use datatables to update headers (show columns options)
                self.update();
                self.onColumnsChanged();
            };
            return selector;
        };
        this.createMoveToDetailButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("moveToDetail");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Row;
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        this.createShowAsColumnButton = function (columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("showAsColumn");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Row;
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        this.headerButtonCreators = [this.createGroupingButton, this.createHideButton, this.createAddColumnButton, this.createMoveToDetailButton];
        this.detailButtonCreators = [this.createShowAsColumnButton];
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.initTableData(data);
    }
    DataTables.prototype.initTableData = function (data) {
        var _this = this;
        this.tableData = (data || []).map(function (item) {
            var dataItem = {};
            _this.survey.data = item;
            _this._columns.forEach(function (column) {
                var displayValue = item[column.name];
                var question = _this.survey.getQuestionByName(column.name);
                if (question) {
                    displayValue = question.displayValue;
                }
                dataItem[column.name] = typeof displayValue === "string" ? displayValue : JSON.stringify(displayValue) || "";
            });
            return dataItem;
        });
    };
    DataTables.prototype.onColumnsChanged = function () {
        this.columnsChanged.fire(this, { survey: this.survey });
    };
    DataTables.prototype.buildColumns = function (survey) {
        return this.survey.getAllQuestions().map(function (question) {
            return {
                name: question.name,
                displayName: (question.title || "").trim() || question.name,
                dataType: question.getType() !== "file" ? __WEBPACK_IMPORTED_MODULE_2__config__["c" /* ColumnDataType */].Text : __WEBPACK_IMPORTED_MODULE_2__config__["c" /* ColumnDataType */].FileLink,
                visibility: question.getType() !== "file" ? __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible : __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible,
                location: __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Column
            };
        });
    };
    DataTables.prototype.isVisible = function (visibility) {
        return this.isTrustedAccess && visibility !== __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible || !this.isTrustedAccess && visibility === __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible;
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
    DataTables.prototype.update = function (hard) {
        if (hard === void 0) { hard = false; }
        if (this.isRendered) {
            if (hard) {
                this.initTableData(this.data);
            }
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
        this.datatableApi = undefined;
        this.targetNode.innerHTML = "";
    };
    DataTables.prototype.render = function () {
        var _this = this;
        var tableNode = document.createElement("table");
        var columns = this.getColumns();
        var columnsData = columns.map(function (c) { return c.data; });
        var self = this;
        var options = __WEBPACK_IMPORTED_MODULE_0_jquery__["extend"](true, {
            buttons: ["copy", "csv", "print"],
            dom: "Blfrtip",
            data: this.tableData,
            responsive: {
                details: false
            },
            columns: columns,
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
                var self = _this;
                __WEBPACK_IMPORTED_MODULE_0_jquery__(thead)
                    .children("th")
                    .each(function (index) {
                    var $thNode = __WEBPACK_IMPORTED_MODULE_0_jquery__(this);
                    if (!!columnsData[index] && $thNode.has("button").length === 0) {
                        var container = document.createElement("div");
                        container.className = "sa-datatable-action-container";
                        self.headerButtonCreators.forEach(function (creator) {
                            var element = creator(datatableApi, index, columnsData[index]);
                            if (!!element) {
                                container.appendChild(element);
                            }
                        });
                        $thNode.prepend(container);
                        var filterContainer = document.createElement("div");
                        filterContainer.className = "sa-datatable-filter-container";
                        filterContainer.innerHTML = "<input type='text' placeholder='Search...' />";
                        var column = datatableApi.column(index);
                        __WEBPACK_IMPORTED_MODULE_0_jquery__('input', __WEBPACK_IMPORTED_MODULE_0_jquery__(filterContainer)).on('click', function (e) { return e.stopPropagation(); });
                        __WEBPACK_IMPORTED_MODULE_0_jquery__('input', __WEBPACK_IMPORTED_MODULE_0_jquery__(filterContainer)).on('keyup change', function () {
                            var value = this.value;
                            if (column.search() !== value) {
                                column.search(value).draw();
                            }
                        });
                        $thNode.append(filterContainer);
                    }
                });
            }
        }, this.options);
        this.targetNode.appendChild(tableNode);
        tableNode.width = "100%";
        tableNode.className = "sa-datatable display responsive dataTable";
        var datatableApiRef = this.datatableApi = __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).DataTable(options);
        this.datatableApi
            .rowGroup()
            .enable(false)
            .draw();
        // this.datatableApi.on("rowgroup-datasrc", (e, dt, val) => {
        //   this.datatableApi.order.fixed({ pre: [[columnsData.indexOf(val), "asc"]] }).draw();
        // });
        this.datatableApi.on('column-reorder', function (e, settings, details) {
            var columns = _this._columns.splice(details.from, 1);
            _this._columns.splice(details.to, 0, columns[0]);
            //console.log(this._columns);
            _this.onColumnsChanged();
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).find('tbody').on('click', 'td.sa-datatable-action-column', function () {
            var tr = __WEBPACK_IMPORTED_MODULE_0_jquery__(this).closest('tr');
            var row = datatableApiRef.row(tr);
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
            .filter(function (column) { return column.location === __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Row && _this.isVisible(column.visibility); })
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
        if (!!this.datatableApi && this.datatableApi.responsive.hasHidden()) {
            var columnsVisibility = this.datatableApi.columns().responsiveHidden();
            var columns = this.datatableApi.settings().init().columns;
            for (var index = 0; index < columnsVisibility.length; index++) {
                if (!columnsVisibility[index]) {
                    var column = columns[index];
                    var row = document.createElement("tr");
                    var td1 = document.createElement("td");
                    td1.textContent = column.sTitle;
                    var td2 = document.createElement("td");
                    td2.textContent = data[column.mData];
                    var td3 = document.createElement("td");
                    //this.detailButtonCreators.forEach(creator => td3.appendChild(creator(column.mData)));
                    row.appendChild(td1);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    table.appendChild(row);
                }
            }
        }
        if (!!this.renderDetailActions) {
            var row = document.createElement("tr");
            var td = document.createElement("td");
            row.appendChild(td);
            var td1 = document.createElement("td");
            row.appendChild(td1);
            var td2 = document.createElement("td");
            row.appendChild(td2);
            table.appendChild(row);
            this.renderDetailActions(td, data);
        }
        return table;
    };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var availableColumns = this.columns.filter(function (column) { return column.location === __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Column && _this.isVisible(column.visibility); });
        var columns = availableColumns.map(function (column, index) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                data: column.name,
                sTitle: question && question.title || column.displayName,
                visible: column.visibility !== __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible,
                mRender: function (data, type, row) { return row[column.name]; }
            };
        });
        return [{
                "className": 'sa-datatable-action-column',
                "orderable": false,
                "data": null,
                "defaultContent": '',
            }].concat(columns);
    };
    DataTables.prototype.layout = function () {
        !!this.datatableApi && this.datatableApi.columns.adjust();
    };
    return DataTables;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectBase__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__matrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__boolean__["a"]; });






/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__text_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });




var Text = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Text, _super);
    function Text(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
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
    Text.prototype.renderContent = function (container) {
        var _a = this.getData(), columnsCount = _a.columnsCount, data = _a.data;
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There are no results yet";
        if (data.length === 0) {
            container.appendChild(emptyTextNode);
            return;
        }
        var tableNode = document.createElement("table");
        tableNode.className = "sa-text-table";
        tableNode.style.backgroundColor = this.backgroundColor;
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
    Text.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.targetElement.className = "";
    };
    return Text;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("text", Text);
__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("comment", Text);
__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("multipletext", Text);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationPanelDynamic__ = __webpack_require__(8);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wordcloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stopwords_index__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordCloud; });





var WordCloud = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](WordCloud, _super);
    function WordCloud(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
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
    WordCloud.prototype.renderContent = function (container) {
        var _this = this;
        var data = this.getData();
        var colors = this.getColors();
        var canvasNode = document.createElement("canvas");
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There are no results yet";
        if (data.length === 0) {
            container.appendChild(emptyTextNode);
            return;
        }
        container.appendChild(canvasNode);
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
        _super.prototype.destroy.call(this);
        if (!!this.cloud) {
            this.cloud = undefined;
        }
    };
    return WordCloud;
}(__WEBPACK_IMPORTED_MODULE_2__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("text", WordCloud);
__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("comment", WordCloud);
__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("multipletext", WordCloud);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
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
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Muuri = factory());
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativeVisualizersWrapper; });




var AlternativeVisualizersWrapper = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AlternativeVisualizersWrapper, _super);
    function AlternativeVisualizersWrapper(visualizers, targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.visualizers = visualizers;
        if (!visualizers || visualizers.length < 2) {
            throw new Error("VisualizerArrayWrapper works with visualizers collection only.");
        }
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
    AlternativeVisualizersWrapper.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        var selectWrapper = __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.visualizers.map(function (visualizer) {
            return {
                value: visualizer.name,
                text: __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("visualizer_" + visualizer.name)
            };
        }), function (option) { return _this.visualizer.name === option.value; }, function (e) { return _this.setVisualizer(e.target.value); });
        toolbar.appendChild(selectWrapper);
        _super.prototype.createToolbarItems.call(this, toolbar);
    };
    return AlternativeVisualizersWrapper;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementVisibility; });
var ElementVisibility;
(function (ElementVisibility) {
    ElementVisibility["Visible"] = "Visible";
    ElementVisibility["Invisible"] = "Invisible";
    ElementVisibility["PublicInvisible"] = "PublicInvisible";
})(ElementVisibility || (ElementVisibility = {}));


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
//import { localization } from "../localizationManager";
var englishStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    moveToDetail: "Move to Detail",
    showAsColumn: "Show as Column",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Hide",
    resetFilter: "Reset Filter",
    clearButton: "Clear",
    addElement: "Choose question to show..."
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//localization.locales["en"] = englishStrings;
//localization.localeNames["en"] = "English";


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanPlotly; });




var BooleanPlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](BooleanPlotly, _super);
    function BooleanPlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.chartTypes = BooleanPlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    Object.defineProperty(BooleanPlotly.prototype, "booleanQuestion", {
        get: function () {
            return this.question;
        },
        enumerable: true,
        configurable: true
    });
    BooleanPlotly.prototype.patchConfigParameters = function (chartNode, traces, layout, config) {
        var colors = this.getColors();
        var boolColors = [
            BooleanPlotly.trueColor || colors[0],
            BooleanPlotly.falseColor || colors[1]
        ];
        if (this.chartType === "pie") {
            traces.forEach(function (trace) {
                trace.marker.colors = boolColors;
            });
        }
        else if (this.chartType === "bar") {
            traces.forEach(function (trace) {
                trace.marker.color = boolColors;
            });
        }
    };
    BooleanPlotly.prototype.getSelectedItemByText = function (itemText) {
        var labels = this.getLabels();
        var values = this.getValues();
        return new __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"](values[labels.indexOf(itemText)], itemText);
    };
    BooleanPlotly.prototype.getValues = function () {
        return [
            this.booleanQuestion.valueTrue !== undefined
                ? this.booleanQuestion.valueTrue
                : true,
            this.booleanQuestion.valueFalse !== undefined
                ? this.booleanQuestion.valueFalse
                : false
        ];
    };
    BooleanPlotly.prototype.getLabels = function () {
        var labels = this.getValues();
        if (this.booleanQuestion.labelTrue !== undefined) {
            labels[0] = this.booleanQuestion.labelTrue;
        }
        if (this.booleanQuestion.labelFalse !== undefined) {
            labels[1] = this.booleanQuestion.labelFalse;
        }
        return labels;
    };
    BooleanPlotly.prototype.getData = function () {
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
    BooleanPlotly.trueColor = "";
    BooleanPlotly.falseColor = "";
    BooleanPlotly.types = ["pie", "bar"];
    return BooleanPlotly;
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("boolean", BooleanPlotly);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(6);
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
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrix", MatrixPlotly);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugePlotly; });

var Plotly = __webpack_require__(11);




var GaugePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GaugePlotly, _super);
    function GaugePlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.chartNode = document.createElement("div");
        _this.toolbarChangeHandler = function (e) {
            if (_this.chartType !== e.target.value) {
                _this.chartType = e.target.value;
                _this.update(_this.data);
            }
        };
        _this.chartTypes = GaugePlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    GaugePlotly.prototype.update = function (data) {
        if (data !== undefined) {
            this._result = undefined;
        }
        _super.prototype.update.call(this, data);
        this.destroy();
        this.createChart();
        this.invokeOnUpdate();
    };
    GaugePlotly.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 1) {
            var selectWrapper = __WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.chartTypes.map(function (chartType) {
                return {
                    value: chartType,
                    text: __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("chartType_" + chartType)
                };
            }), function (option) { return _this.chartType === option.value; }, this.toolbarChangeHandler);
            toolbar.appendChild(selectWrapper);
        }
        _super.prototype.createToolbarItems.call(this, toolbar);
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
    GaugePlotly.prototype.renderContent = function (container) {
        this.createChart();
        container.appendChild(this.chartNode);
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
                this._result = questionValues_1 && (questionValues_1.reduce(function (a, b) { return a + b; }, 0) / questionValues_1.length) || 0;
                this._result = Math.ceil(this._result * 100) / 100;
            }
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    GaugePlotly.stepsCount = 5;
    GaugePlotly.types = ["gauge", "bullet"];
    return GaugePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("rating", GaugePlotly);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stopWords; });
var stopWords = new Array("a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z");


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localizationManager__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return __WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatables_datatables__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return __WEBPACK_IMPORTED_MODULE_6__datatables_datatables__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plotly_index__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "canLoadPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordcloud_wordcloud__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return __WEBPACK_IMPORTED_MODULE_8__wordcloud_wordcloud__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordcloud_stopwords_index__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return __WEBPACK_IMPORTED_MODULE_9__wordcloud_stopwords_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__text__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_10__text__["a"]; });













/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwODZkZmQ2ZmY0ODMyZTUxYTYzZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6ZXJCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWNvcmVcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXktY29yZVwiLFwiYW1kXCI6XCJzdXJ2ZXktY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bsb3RseS9zZWxlY3RCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxpemF0aW9uUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBsb3RseVwiLFwiY29tbW9uanMyXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiY29tbW9uanNcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJhbWRcIjpcInBsb3RseS5qcy1kaXN0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bsb3RseS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmRjbG91ZC93b3JkY2xvdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGF0YWJsZXMvZGF0YXRhYmxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxpemVyQmFzZS5zY3NzIiwid2VicGFjazovLy8uL34vbXV1cmkvZGlzdC9tdXVyaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXRhYmxlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvYm9vbGVhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9lbmdsaXNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwid29yZGNsb3VkXCIsXCJjb21tb25qc1wiOlwid29yZGNsb3VkXCIsXCJhbWRcIjpcIndvcmRjbG91ZFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEscUNBQXFDO0FBQ2xELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IseURBQXlEO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUF5RDtBQUNuRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLEtBQUs7QUFDbEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsYUFBYSxFQUFFO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFlBQVk7QUFDekIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUF3RDtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3REFBd0Q7QUFDeEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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Q0gsT0FBTyxFQUNQLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sRUFDUCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsT0FBTyxFQUNQLFNBQVMsRUFDVCxNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsRUFDUixPQUFPLEVBQ1AsSUFBSSxFQUNKLEtBQUssRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsSUFBSSxFQUNKLEtBQUssRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxPQUFPLEVBQ1AsSUFBSSxFQUNKLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxJQUFJLEVBQ0osR0FBRyxFQUNILE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQ1AsU0FBUyxFQUNULFdBQVcsRUFDWCxPQUFPLEVBQ1AsU0FBUyxFQUNULE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILEtBQUssRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGFBQWEsRUFDYixJQUFJLEVBQ0osTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixHQUFHLEVBQ0gsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsS0FBSyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQ1AsV0FBVyxFQUNYLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEdBQUcsRUFDSCxNQUFNLEVBQ04sT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsS0FBSyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBQ1YsR0FBRyxFQUNILE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsSUFBSSxFQUNKLE9BQU8sRUFDUCxNQUFNLEVBQ04sT0FBTyxFQUNQLEtBQUssRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsR0FBRyxFQUNILEtBQUssRUFDTCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxLQUFLLEVBQ0wsU0FBUyxFQUNULEdBQUcsRUFDSCxJQUFJLEVBQ0osV0FBVyxFQUNYLElBQUksRUFDSixVQUFVLEVBQ1YsWUFBWSxFQUNaLGFBQWEsRUFDYixXQUFXLEVBQ1gsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixHQUFHLEVBQ0gsTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04sT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsR0FBRyxFQUNILE9BQU8sRUFDUCxTQUFTLEVBQ1QsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsR0FBRyxFQUNILE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsU0FBUyxFQUNULEtBQUssRUFDTCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLElBQUksRUFDSixRQUFRLEVBQ1IsR0FBRyxFQUNILFdBQVcsRUFDWCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLElBQUksRUFDSixPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUNQLFFBQVEsRUFDUixLQUFLLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILE9BQU8sRUFDUCxHQUFHLEVBQ0gsUUFBUSxFQUNSLFFBQVEsRUFDUixPQUFPLEVBQ1AsT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILE1BQU0sRUFDTixNQUFNLEVBQ04sS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLE1BQU0sRUFDTixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNYLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04sT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04sS0FBSyxFQUNMLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxXQUFXLEVBQ1gsT0FBTyxFQUNQLE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixPQUFPLEVBQ1AsU0FBUyxFQUNULE1BQU0sRUFDTixJQUFJLEVBQ0osT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEdBQUcsRUFDSCxPQUFPLEVBQ1AsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04sR0FBRyxFQUNILE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFDTixJQUFJLEVBQ0osTUFBTSxFQUNOLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sT0FBTyxFQUNQLFNBQVMsRUFDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxHQUFHLEVBQ0gsR0FBRyxFQUNILE1BQU0sRUFDTixPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsQ0FDSixDQUFDOzs7Ozs7O0FDOWFGLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFFTDtBQUNNO0FBQ0Y7QUFDTztBQUNDO0FBRUw7QUFDVDtBQUNPO0FBQ007QUFDckIiLCJmaWxlIjoiLi9wYWNrYWdlcy9zdXJ2ZXkuYW5hbHl0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIiksIHJlcXVpcmUoXCJwbG90bHkuanMtZGlzdFwiKSwgcmVxdWlyZShcIndvcmRjbG91ZFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUFuYWx5dGljc1wiLCBbXCJzdXJ2ZXktY29yZVwiLCBcInBsb3RseS5qcy1kaXN0XCIsIFwid29yZGNsb3VkXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJ3b3JkY2xvdWRcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlN1cnZleVwiXSwgcm9vdFtcIlBsb3RseVwiXSwgcm9vdFtcIldvcmRDbG91ZFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDg2ZGZkNmZmNDgzMmU1MWE2M2UiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuXG5kZWNsYXJlIHR5cGUgVmlzdWFsaXplckNvbnN0cnVjdG9yID0gbmV3IChcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgb3B0aW9ucz86IE9iamVjdFxuKSA9PiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uTWFuYWdlciB7XG4gIHN0YXRpYyB2aXp1YWxpemVyczogeyBbaW5kZXg6IHN0cmluZ106IEFycmF5PFZpc3VhbGl6ZXJDb25zdHJ1Y3Rvcj4gfSA9IHt9O1xuICBzdGF0aWMgcmVnaXN0ZXJWaXN1YWxpemVyKFxuICAgIHR5cGVOYW1lOiBzdHJpbmcsXG4gICAgY29uc3RydWN0b3I6IFZpc3VhbGl6ZXJDb25zdHJ1Y3RvclxuICApIHtcbiAgICBsZXQgdml6dWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV07XG4gICAgaWYgKCF2aXp1YWxpemVycykge1xuICAgICAgdml6dWFsaXplcnMgPSBbXTtcbiAgICAgIFZpc3VhbGl6YXRpb25NYW5hZ2VyLnZpenVhbGl6ZXJzW3R5cGVOYW1lXSA9IHZpenVhbGl6ZXJzO1xuICAgIH1cbiAgICB2aXp1YWxpemVycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuICBzdGF0aWMgZ2V0VmlzdWFsaXplcnModHlwZU5hbWU6IHN0cmluZykge1xuICAgIGxldCB2aXp1YWxpemVycyA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLnZpenVhbGl6ZXJzW3R5cGVOYW1lXTtcbiAgICBpZiAoIXZpenVhbGl6ZXJzKSB7XG4gICAgICByZXR1cm4gW1Zpc3VhbGl6ZXJCYXNlXTtcbiAgICB9XG4gICAgcmV0dXJuIHZpenVhbGl6ZXJzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJleHBvcnQgdmFyIF9fYXNzaWduID1cbiAgKDxhbnk+T2JqZWN0KVtcImFzc2lnblwiXSB8fFxuICBmdW5jdGlvbih0YXJnZXQ6IGFueSkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIHAgaW4gcylcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdGFyZ2V0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyh0aGlzQ2xhc3M6IGFueSwgYmFzZUNsYXNzOiBhbnkpIHtcbiAgZm9yICh2YXIgcCBpbiBiYXNlQ2xhc3MpXG4gICAgaWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShwKSkgdGhpc0NsYXNzW3BdID0gYmFzZUNsYXNzW3BdO1xuICBmdW5jdGlvbiBfXygpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gdGhpc0NsYXNzO1xuICB9XG4gIHRoaXNDbGFzcy5wcm90b3R5cGUgPVxuICAgIGJhc2VDbGFzcyA9PT0gbnVsbFxuICAgICAgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcylcbiAgICAgIDogKChfXy5wcm90b3R5cGUgPSBiYXNlQ2xhc3MucHJvdG90eXBlKSwgbmV3ICg8YW55Pl9fKSgpKTtcbn1cblxuZXhwb3J0IHZhciBfX3Jlc3QgPSBmdW5jdGlvbihzb3VyY2U6IGFueSwgZTogYW55KSB7XG4gIHZhciByZXN1bHQ6IGFueSA9IHt9O1xuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gc291cmNlKVxuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIHByb3BlcnR5TmFtZSkgJiZcbiAgICAgIGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpIDwgMFxuICAgIClcbiAgICAgIHJlc3VsdFtwcm9wZXJ0eU5hbWVdID0gc291cmNlW3Byb3BlcnR5TmFtZV07XG4gIGlmIChcbiAgICBzb3VyY2UgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdID09PSBcImZ1bmN0aW9uXCJcbiAgKVxuICAgIGZvciAoXG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgIHByb3BlcnR5U3ltYm9scyA9ICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0oc291cmNlKTtcbiAgICAgIGkgPCBwcm9wZXJ0eVN5bWJvbHMubGVuZ3RoO1xuICAgICAgaSsrXG4gICAgKVxuICAgICAgaWYgKGUuaW5kZXhPZihwcm9wZXJ0eVN5bWJvbHNbaV0pIDwgMClcbiAgICAgICAgcmVzdWx0W3Byb3BlcnR5U3ltYm9sc1tpXV0gPSBzb3VyY2VbcHJvcGVydHlTeW1ib2xzW2ldXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmRlY2xhcmUgdmFyIFJlZmxlY3Q6IGFueTtcblxuZXhwb3J0IHZhciBfX2RlY29yYXRlID0gZnVuY3Rpb24oXG4gIGRlY29yYXRvcnM6IGFueSxcbiAgdGFyZ2V0OiBhbnksXG4gIGtleTogYW55LFxuICBkZXNjOiBhbnlcbikge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgciA9XG4gICAgICBjIDwgM1xuICAgICAgICA/IHRhcmdldFxuICAgICAgICA6IGRlc2MgPT09IG51bGxcbiAgICAgICAgPyAoZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpKVxuICAgICAgICA6IGRlc2MsXG4gICAgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAgICBpZiAoKGQgPSBkZWNvcmF0b3JzW2ldKSlcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuXG5pbXBvcnQgXCIuL3Zpc3VhbGl6ZXJCYXNlLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6ZXJCYXNlIHtcblxuICBwdWJsaWMgdG9vbGJhckl0ZW1DcmVhdG9yczogeyBbbmFtZTogc3RyaW5nXTogKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiBIVE1MRWxlbWVudCB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7fVxuXG4gIHB1YmxpYyByZWdpc3RlclRvb2xiYXJJdGVtKG5hbWU6IHN0cmluZywgY3JlYXRvcjogKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudG9vbGJhckl0ZW1DcmVhdG9yc1tuYW1lXSA9IGNyZWF0b3I7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwidmlzdWFsaXplclwiO1xuICB9XG5cbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgb25VcGRhdGU6ICgpID0+IHZvaWQ7XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJUaGlzIHF1ZXN0aW9uIHR5cGUgaXMgbm90IHZpc3VhbGl6ZWQgeWV0XCI7XG4gIH1cblxuICByZW5kZXIodGFyZ2V0RWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudCB8fCB0aGlzLnRhcmdldEVsZW1lbnQ7XG5cbiAgICBjb25zdCB0b29sYmFyTm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXZpc3VhbGl6ZXJfX2NvbnRlbnRcIjtcblxuICAgIHRoaXMuY3JlYXRlVG9vbGJhcih0b29sYmFyTm9kZUNvbnRhaW5lcik7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KGNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRvb2xiYXJOb2RlQ29udGFpbmVyKTtcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgT2JqZWN0LmtleXModGhpcy50b29sYmFySXRlbUNyZWF0b3JzIHx8IHt9KS5mb3JFYWNoKHRvb2xiYXJJdGVtTmFtZSA9PiB0aGlzLnRvb2xiYXJJdGVtQ3JlYXRvcnNbdG9vbGJhckl0ZW1OYW1lXSh0b29sYmFyKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhcihjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9vbGJhci5jbGFzc05hbWUgPSBcInN2YS10b29sYmFyXCI7XG4gICAgdGhpcy5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2xiYXIpO1xuICB9XG5cbiAgaW52b2tlT25VcGRhdGUoKSB7XG4gICAgdGhpcy5vblVwZGF0ZSAmJiB0aGlzLm9uVXBkYXRlKCk7XG4gIH1cblxuICBnZXRSYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuICB9XG5cbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZjdmN2Y3XCI7XG5cbiAgc3RhdGljIGN1c3RvbUNvbG9yczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0aWMgY29sb3JzID0gW1xuICAgIFwiIzg2ZTFmYlwiLFxuICAgIFwiIzM5OTlmYlwiLFxuICAgIFwiI2ZmNjc3MVwiLFxuICAgIFwiIzFlYjQ5NlwiLFxuICAgIFwiI2ZmYzE1MlwiLFxuICAgIFwiI2FiYTFmZlwiLFxuICAgIFwiIzdkOGRhNVwiLFxuICAgIFwiIzRlYzQ2Y1wiLFxuICAgIFwiI2NmMzdhNlwiLFxuICAgIFwiIzRlNjE5OFwiXG4gIF07XG5cbiAgZ2V0Q29sb3JzKGNvdW50ID0gMTApIHtcbiAgICBjb25zdCBjb2xvcnMgPVxuICAgICAgQXJyYXkuaXNBcnJheShWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnMpICYmXG4gICAgICBWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnMubGVuZ3RoID4gMFxuICAgICAgICA/IFZpc3VhbGl6ZXJCYXNlLmN1c3RvbUNvbG9yc1xuICAgICAgICA6IFZpc3VhbGl6ZXJCYXNlLmNvbG9ycztcblxuICAgIGxldCBtYW55Q29sb3JzOiBhbnkgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgbWFueUNvbG9ycyA9IG1hbnlDb2xvcnMuY29uY2F0KGNvbG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbnlDb2xvcnM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemVyQmFzZS50cyIsImltcG9ydCB7IGVuZ2xpc2hTdHJpbmdzIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uL2VuZ2xpc2hcIjtcblxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XG4gIGN1cnJlbnRMb2NhbGVWYWx1ZTogXCJcIixcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXG4gIGxvY2FsZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBsb2NhbGVOYW1lczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxuICBnZXQgY3VycmVudExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPT09IHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlXG4gICAgICA/IFwiXCJcbiAgICAgIDogdGhpcy5jdXJyZW50TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlXG4gICAgICA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIGlmICghbG9jIHx8ICFsb2Nbc3RyTmFtZV0pIGxvYyA9IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIHZhciByZXN1bHQgPSBsb2Nbc3RyTmFtZV07XG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICByZXMucHVzaChcIlwiKTtcbiAgICBpZiAodGhpcy5zdXBwb3J0ZWRMb2NhbGVzICYmIHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5zb3J0KCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFRvb2xiYXJIZWxwZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTZWxlY3Rvcih0b29sYmFyOiBIVE1MRGl2RWxlbWVudCwgb3B0aW9uczogQXJyYXk8e3ZhbHVlOiBzdHJpbmcsIHRleHQ6IHN0cmluZ30+LCBpc1NlbGVjdGVkOiAob3B0aW9uOiB7dmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nfSkgPT4gYm9vbGVhbiwgaGFuZGVyOiAoZTogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2VsZWN0V3JhcHBlci5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fc2VsZWN0LXdyYXBwZXJcIjtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fc2VsZWN0XCI7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0ID0gb3B0aW9uLnRleHQ7XHJcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxlY3Qub25jaGFuZ2UgPSBoYW5kZXI7XHJcbiAgICAgICAgc2VsZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RXcmFwcGVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24odG9vbGJhcjogSFRNTERpdkVsZW1lbnQsIGhhbmRlcjogKGU6IGFueSkgPT4gdm9pZCwgdGV4dCA9IFwiXCIsIGNzc0NsYXNzID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInN2YS10b29sYmFyX19idXR0b24gXCIgKyBjc3NDbGFzcztcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IGhhbmRlcjtcclxuICAgICAgICB0b29sYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9zZWxlY3RCYXNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5Mb2FkUGxvdGx5KCkge1xuICByZXR1cm4gISF3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTDtcbn1cblxudmFyIFBsb3RseTogYW55O1xuaWYgKGNhbkxvYWRQbG90bHkoKSkge1xuICBQbG90bHkgPSA8YW55PnJlcXVpcmUoXCJwbG90bHkuanMtZGlzdFwiKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhc2VQbG90bHkgZXh0ZW5kcyBTZWxlY3RCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRUeXBlcyA9IFNlbGVjdEJhc2VQbG90bHkudHlwZXM7XG4gICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLmNoYXJ0VHlwZXNbMF07XG4gIH1cblxuICBwcml2YXRlIGNoYXJ0OiBQcm9taXNlPFBsb3RseS5QbG90bHlIVE1MRWxlbWVudD47XG4gIHByaXZhdGUgZmlsdGVyVGV4dDogSFRNTFNwYW5FbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGZpbHRlcjogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJiYXJcIiwgXCJwaWVcIiwgXCJzY2F0dGVyXCJdO1xuXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgc3VwZXIudXBkYXRlKGRhdGEpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuY2hhcnQgPSB0aGlzLmdldFBsb3RseUNoYXJ0KHRoaXMuY2hhcnROb2RlLCB0aGlzLmNoYXJ0VHlwZSk7XG4gICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBQbG90bHkucHVyZ2UodGhpcy5jaGFydE5vZGUpO1xuICB9XG5cbiAgY3JlYXRlQ2hhcnQoKSB7XG4gICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0UGxvdGx5Q2hhcnQodGhpcy5jaGFydE5vZGUsIHRoaXMuY2hhcnRUeXBlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTZWxlY3RlZEl0ZW1CeVRleHQoaXRlbVRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uLmNob2ljZXMuZmlsdGVyKFxuICAgICAgKGNob2ljZTogSXRlbVZhbHVlKSA9PiBjaG9pY2UudGV4dCA9PT0gaXRlbVRleHRcbiAgICApWzBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBhdGNoQ29uZmlnUGFyYW1ldGVycyhcbiAgICBjaGFydE5vZGU6IG9iamVjdCxcbiAgICB0cmFjZXM6IEFycmF5PG9iamVjdD4sXG4gICAgbGF5b3V0OiBvYmplY3QsXG4gICAgY29uZmlnOiBvYmplY3RcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0UGxvdGx5Q2hhcnQoXG4gICAgY2hhcnROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBjaGFydFR5cGU6IHN0cmluZ1xuICApOiBQcm9taXNlPFBsb3RseS5QbG90bHlIVE1MRWxlbWVudD4ge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcbiAgICBjb25zdCBkYXRhc2V0cyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCk7XG4gICAgY29uc3QgdHJhY2VzOiBhbnkgPSBbXTtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuXG4gICAgY29uc3QgdHJhY2VDb25maWc6IGFueSA9IHtcbiAgICAgIHR5cGU6IGNoYXJ0VHlwZSxcbiAgICAgIHk6IGxhYmVscy5tYXAobCA9PiB7XG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgcmV0dXJuIGwuc3Vic3RyaW5nKDAsIDI3KSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KSxcbiAgICAgIHRleHQ6IGxhYmVscyxcbiAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgIG1vZGU6IFwibWFya2Vyc1wiLFxuICAgICAgd2lkdGg6IDAuNVxuICAgIH07XG5cbiAgICBpZiAoZGF0YXNldHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0cmFjZUNvbmZpZ1tcIm1hcmtlclwiXSA9IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycyxcbiAgICAgICAgc3ltYm9sOiBcImNpcmNsZVwiLFxuICAgICAgICBzaXplOiAxNlxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkYXRhc2V0cy5mb3JFYWNoKGRhdGFzZXQgPT4ge1xuICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlID09PSBcInBpZVwiKSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRyYWNlQ29uZmlnLCB7XG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGFzZXQsXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVsc1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFjZXMucHVzaChPYmplY3QuYXNzaWduKHt9LCB0cmFjZUNvbmZpZywgeyB4OiBkYXRhc2V0IH0pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhlaWdodCA9XG4gICAgICBjaGFydFR5cGUgPT09IFwicGllXCJcbiAgICAgICAgPyBsYWJlbHMubGVuZ3RoIDwgMTBcbiAgICAgICAgICA/IGxhYmVscy5sZW5ndGggKiA1MCArIDEwMFxuICAgICAgICAgIDogNTUwXG4gICAgICAgIDogKGxhYmVscy5sZW5ndGggKyAobGFiZWxzLmxlbmd0aCArIDEpICogMC41KSAqIDIwO1xuXG4gICAgY29uc3QgbGF5b3V0OiBhbnkgPSB7XG4gICAgICBmb250OiB7XG4gICAgICAgIGZhbWlseTogXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBzaXplOiAxNCxcbiAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICBjb2xvcjogXCIjNDA0MDQwXCJcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0OiAwLFxuICAgICAgICBiOiAwLFxuICAgICAgICByOiAxMFxuICAgICAgfSxcbiAgICAgIGNvbG9yd2F5OiBjb2xvcnMsXG4gICAgICB5YXhpczoge1xuICAgICAgICBhdXRvbWFyZ2luOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImNhdGVnb3J5XCIsXG4gICAgICAgIHRpY2tsZW46IDUsXG4gICAgICAgIHRpY2tjb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvclxuICAgIH07XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBkaXNwbGF5bG9nbzogZmFsc2UsXG4gICAgICByZXNwb25zaXZlOiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMucGF0Y2hDb25maWdQYXJhbWV0ZXJzKGNoYXJ0Tm9kZSwgdHJhY2VzLCBsYXlvdXQsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBwbG90ID0gUGxvdGx5Lm5ld1Bsb3QoY2hhcnROb2RlLCB0cmFjZXMsIGxheW91dCwgY29uZmlnKTtcblxuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9jbGlja1wiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoZGF0YS5wb2ludHMubGVuZ3RoID4gMCAmJiB0aGlzLm9uRGF0YUl0ZW1TZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRhdGEucG9pbnRzWzBdLnRleHQ7XG4gICAgICAgIGNvbnN0IGl0ZW06IEl0ZW1WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0KTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24oaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0RHJhZ0xheWVyID0gKCkgPT5cbiAgICAgIDxIVE1MRWxlbWVudD5jaGFydE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5zZXdkcmFnXCIpWzBdO1xuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiKTtcbiAgICB9KTtcbiAgICAoPGFueT5jaGFydE5vZGUpW1wib25cIl0oXCJwbG90bHlfdW5ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwiXCIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBsb3Q7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY2hlY2tib3hcIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJyYWRpb2dyb3VwXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiZHJvcGRvd25cIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJpbWFnZXBpY2tlclwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvc2VsZWN0QmFzZS50cyIsImltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyIH0gZnJvbSBcIi4vYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXJcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuY29uc3QgTXV1cmkgPSByZXF1aXJlKFwibXV1cmlcIik7XG5pbXBvcnQgXCIuL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlIH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBJVmlzdWFsaXplclBhbmVsRWxlbWVudCwgRWxlbWVudFZpc2liaWxpdHkgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuY29uc3QgcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25cIjtcblxuLyoqXG4gKiBWaXN1YWxpemF0aW9uUGFuZWwgaXMgcmVzcG9uc2libGUgZm9yIGRpc3BsYXlpbmcgYW4gYXJyYXkgb2Ygc3VydmV5IHF1ZXN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25QYW5lbCB7XG4gIHByaXZhdGUgX3Nob3dIZWFkZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBwYW5lbENvbnRlbnQ6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgZmlsdGVyZWREYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+O1xuICBwcm90ZWN0ZWQgZmlsdGVyVmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIHF1ZXN0aW9uczogQXJyYXk8YW55PixcbiAgICBwcm90ZWN0ZWQgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBwcm90ZWN0ZWQgb3B0aW9ucz86IE9iamVjdCxcbiAgICBwcml2YXRlIF9lbGVtZW50czogQXJyYXk8SVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQ+ID0gW10sXG4gICAgcHJpdmF0ZSBpc1RydXN0ZWRBY2Nlc3MgPSBmYWxzZVxuICApIHtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gICAgaWYoX2VsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fZWxlbWVudHMgPSB0aGlzLmJ1aWxkRWxlbWVudHMocXVlc3Rpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExheW91dEVuZ2luZTogKCkgPT4gYW55O1xuICBwcml2YXRlIGdldCBsYXlvdXRFbmdpbmUgKCkge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0TGF5b3V0RW5naW5lICYmIHRoaXMuZ2V0TGF5b3V0RW5naW5lKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRFbGVtZW50cyhxdWVzdGlvbnM6IGFueVtdKTogSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIChxdWVzdGlvbnMgfHwgW10pLm1hcChxdWVzdGlvbiA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogcXVlc3Rpb24udGl0bGUsXG4gICAgICAgIHZpc2liaWxpdHk6IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGUsXG4gICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGNlcnRhaW4gZWxlbWVudCBpcyB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIGlzVmlzaWJsZSh2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eSkge1xuICAgIHJldHVybiB0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ICE9PSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGUgfHwgIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHZpc2libGVFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKGVsID0+IHRoaXMuaXNWaXNpYmxlKGVsLnZpc2liaWxpdHkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaGlkZGVuRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmZpbHRlcihlbCA9PiAhdGhpcy5pc1Zpc2libGUoZWwudmlzaWJpbGl0eSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVsZW1lbnQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmZpbHRlcihlbCA9PiBlbC5uYW1lID09PSBuYW1lKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGVsZW1lbnQgdmlzaWJpbGl0eSBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKi9cbiAgcHVibGljIG9uVmlzaWJsZUVsZW1lbnRzQ25haGdlZCA9IG5ldyBFdmVudDwoc2VuZGVyOiBWaXN1YWxpemF0aW9uUGFuZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgdmlzaWJsZUVsZW1lbnRzQ25haGdlZCgpIHtcbiAgICBpZighdGhpcy5vblZpc2libGVFbGVtZW50c0NuYWhnZWQuaXNFbXB0eSkge1xuICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NuYWhnZWQuZmlyZSh0aGlzLCB7fSk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgZ2l2ZW4gdmlzdWFsaXplci5cbiAgICovXG4gIHB1YmxpYyBkZXN0cm95VmlzdWFsaXplcih2aXN1YWxpemVyOiBWaXN1YWxpemVyQmFzZSkge1xuICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcbiAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIHZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIHRoaXMudmlzdWFsaXplcnMuc3BsaWNlKHRoaXMudmlzdWFsaXplcnMuaW5kZXhPZih2aXN1YWxpemVyKSwgMSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBnaXZlbiBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIHJlbmRlclZpc3VhbGl6ZXIoZWxlbWVudDogSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQpIHtcbiAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9ucy5maWx0ZXIocSA9PiBxLm5hbWUgPT09IGVsZW1lbnQubmFtZSlbMF07XG4gICAgY29uc3QgcXVlc3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCB2aXp1YWxpemVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudC5kaXNwbGF5TmFtZTtcblxuICAgIHF1ZXN0aW9uRWxlbWVudC5jbGFzc05hbWUgPSBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWU7XG4gICAgcXVlc3Rpb25Db250ZW50LmNsYXNzTmFtZSA9IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiX19jb250ZW50XCI7XG4gICAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiX190aXRsZVwiO1xuXG4gICAgcXVlc3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgcXVlc3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHZpenVhbGl6ZXJFbGVtZW50KTtcbiAgICBxdWVzdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25Db250ZW50KTtcblxuICAgIGNvbnN0IHZpc3VhbGl6ZXIgPSB0aGlzLmNyZWF0ZVZpenVhbGl6ZXIoXG4gICAgICB2aXp1YWxpemVyRWxlbWVudCxcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgdGhpcy5maWx0ZXJlZERhdGFcbiAgICApO1xuXG4gICAgdmlzdWFsaXplci5yZWdpc3RlclRvb2xiYXJJdGVtKFwicmVtb3ZlUXVlc3Rpb25cIiwgKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gVG9vbGJhckhlbHBlci5jcmVhdGVCdXR0b24odG9vbGJhciwgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGU7XG4gICAgICAgICAgdGhpcy5kZXN0cm95VmlzdWFsaXplcih2aXN1YWxpemVyKTtcbiAgICAgICAgICB0aGlzLmxheW91dEVuZ2luZS5yZW1vdmUoW3F1ZXN0aW9uRWxlbWVudF0pO1xuICAgICAgICAgIHRoaXMucGFuZWxDb250ZW50LnJlbW92ZUNoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgICAgICAgdGhpcy52aXNpYmxlRWxlbWVudHNDbmFoZ2VkKCk7XG4gICAgICAgIH0sIDAgKTtcbiAgICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQnV0dG9uXCIpKTtcbiAgICB9KTtcblxuICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgdmFyIGZpbHRlckluZm8gPSB7XG4gICAgICAgIHRleHQ6IDxIVE1MRWxlbWVudD51bmRlZmluZWQsXG4gICAgICAgIGVsZW1lbnQ6IDxIVE1MRGl2RWxlbWVudD51bmRlZmluZWQsXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oc2VsZWN0aW9uOiBhbnkpIHtcbiAgICAgICAgICBpZighIXNlbGVjdGlvbiAmJiAhIXNlbGVjdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVySFRNTCA9IFwiRmlsdGVyOiBbXCIgKyBzZWxlY3Rpb24udGV4dCArIFwiXVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInF1ZXN0aW9uRmlsdGVySW5mb1wiLCAodG9vbGJhcjogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICAgICAgZmlsdGVySW5mby5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmlsdGVySW5mby5lbGVtZW50LmNsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uX19maWx0ZXJcIjtcbiAgICBcbiAgICAgICAgZmlsdGVySW5mby50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGZpbHRlckluZm8udGV4dC5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fZmlsdGVyLXRleHRcIjtcbiAgICAgICAgZmlsdGVySW5mby5lbGVtZW50LmFwcGVuZENoaWxkKGZpbHRlckluZm8udGV4dCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZpbHRlckNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGZpbHRlckNsZWFyLmNsYXNzTmFtZSA9IFwic3ZhLXRvb2xiYXJfX2J1dHRvblwiO1xuICAgICAgICBmaWx0ZXJDbGVhci5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiY2xlYXJCdXR0b25cIik7XG4gICAgICAgIGZpbHRlckNsZWFyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlsdGVySW5mby5lbGVtZW50LmFwcGVuZENoaWxkKGZpbHRlckNsZWFyKTtcbiAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChmaWx0ZXJJbmZvLmVsZW1lbnQpO1xuXG4gICAgICAgIGZpbHRlckluZm8udXBkYXRlKHZpc3VhbGl6ZXIuc2VsZWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZmlsdGVySW5mby5lbGVtZW50O1xuICAgICAgfSk7XG5cbiAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gKFxuICAgICAgICBzZWxlY3RlZFZhbHVlOiBhbnksXG4gICAgICAgIHNlbGVjdGVkVGV4dDogc3RyaW5nXG4gICAgICApID0+IHtcbiAgICAgICAgZmlsdGVySW5mby51cGRhdGUoeyB2YWx1ZTogc2VsZWN0ZWRWYWx1ZSwgdGV4dDogc2VsZWN0ZWRUZXh0IH0pO1xuICAgICAgICB0aGlzLmFwcGx5RmlsdGVyKHF1ZXN0aW9uLm5hbWUsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2aXN1YWxpemVyLnJlbmRlcigpO1xuICAgIHZpc3VhbGl6ZXIub25VcGRhdGUgPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuICAgIHRoaXMudmlzdWFsaXplcnMucHVzaCh2aXN1YWxpemVyKTtcblxuICAgIHJldHVybiBxdWVzdGlvbkVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhbGwgcXVlc3Rpb25zIGludG8gZ2l2ZW4gSFRNTCBjb250YWluZXIgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgbGV0IGxheW91dEVuZ2luZTogYW55ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ2V0TGF5b3V0RW5naW5lID0gKCkgPT4gbGF5b3V0RW5naW5lO1xuXG4gICAgdGhpcy5wYW5lbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMucGFuZWxDb250ZW50LmNsYXNzTmFtZSA9IFwic3ZhLWdyaWRcIjtcblxuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBsZXQgcXVlc3Rpb25FbGVtZW50ID0gdGhpcy5yZW5kZXJWaXN1YWxpemVyKGVsZW1lbnQpO1xuICAgICAgdGhpcy5wYW5lbENvbnRlbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25FbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuc2hvd0hlYWRlcikge1xuICAgICAgY29uc3QgcGFuZWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGFuZWxIZWFkZXIuY2xhc3NOYW1lID0gXCJzdmEtcGFuZWxfX2hlYWRlclwiO1xuICAgICAgY29uc3QgdG9vbG9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9vbG9iYXIuY2xhc3NOYW1lID0gXCJzdmEtdG9vbGJhclwiO1xuICAgICAgdGhpcy5jcmVhdGVUb29sYmFySXRlbXModG9vbG9iYXIpO1xuICAgICAgcGFuZWxIZWFkZXIuYXBwZW5kQ2hpbGQodG9vbG9iYXIpO1xuICAgICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHBhbmVsSGVhZGVyKTtcbiAgICB9XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucGFuZWxDb250ZW50KTtcblxuICAgIHZhciBtb3ZlSGFuZGxlciA9IChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzLnNwbGljZShkYXRhLmZyb21JbmRleCwgMSk7XG4gICAgICB0aGlzLl9lbGVtZW50cy5zcGxpY2UoZGF0YS50b0luZGV4LCAwLCBlbGVtZW50c1swXSk7XG4gICAgfVxuXG4gICAgbGF5b3V0RW5naW5lID0gbmV3IE11dXJpKHRoaXMucGFuZWxDb250ZW50LCB7XG4gICAgICBpdGVtczogXCIuc3ZhLXF1ZXN0aW9uXCIsXG4gICAgICBkcmFnRW5hYmxlZDogdHJ1ZVxuICAgIH0pO1xuICAgIGxheW91dEVuZ2luZS5vbihcIm1vdmVcIiwgbW92ZUhhbmRsZXIpO1xuICAgICEhd2luZG93ICYmIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBVSUV2ZW50KCdyZXNpemUnKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgcmVzZXRGaWx0ZXJCdXR0b24gPSBUb29sYmFySGVscGVyLmNyZWF0ZUJ1dHRvbih0b29sYmFyLCAoKSA9PiB7XG4gICAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2godmlzdWFsaXplciA9PiB7XG4gICAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICAgIHZpc3VhbGl6ZXIuc2V0U2VsZWN0aW9uKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZXNldEZpbHRlclwiKSk7XG4gICAgdG9vbGJhci5hcHBlbmRDaGlsZChyZXNldEZpbHRlckJ1dHRvbik7XG5cbiAgICBsZXQgYWRkRWxlbWVudFNlbGVjdG9yOiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyID0gKHBhbmVsOiBWaXN1YWxpemF0aW9uUGFuZWwsIF86IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSB0aGlzLmhpZGRlbkVsZW1lbnRzO1xuICAgICAgaWYgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IodG9vbGJhcixcbiAgICAgICAgICBbPGFueT57bmFtZTogdW5kZWZpbmVkLCBkaXNwbGF5TmFtZTogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFkZEVsZW1lbnRcIil9XS5jb25jYXQoaGlkZGVuRWxlbWVudHMpLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBlbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHRleHQ6IGVsZW1lbnQuZGlzcGxheU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgKG9wdGlvbjogYW55KSA9PiBmYWxzZSxcbiAgICAgICAgICAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25FbGVtZW50ID0gdGhpcy5yZW5kZXJWaXN1YWxpemVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5wYW5lbENvbnRlbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25FbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0RW5naW5lLmFkZChbcXVlc3Rpb25FbGVtZW50XSk7XG4gICAgICAgICAgICB0aGlzLnZpc2libGVFbGVtZW50c0NuYWhnZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciAmJiB0b29sYmFyLnJlcGxhY2VDaGlsZChzZWxlY3RXcmFwcGVyLCBhZGRFbGVtZW50U2VsZWN0b3IpIHx8IHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0V3JhcHBlcik7XG4gICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciA9IHNlbGVjdFdyYXBwZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgJiYgdG9vbGJhci5yZW1vdmVDaGlsZChhZGRFbGVtZW50U2VsZWN0b3IpO1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZEVsZW1lbnRTZWxlY3RvclVwZGF0ZXIodGhpcywge30pO1xuICAgIHRoaXMub25WaXNpYmxlRWxlbWVudHNDbmFoZ2VkLmFkZChhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB2aXN1YWxpemVyIGFuZCBhbGwgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGxldCBsYXlvdXRFbmdpbmUgPSAhIXRoaXMuZ2V0TGF5b3V0RW5naW5lICYmIHRoaXMuZ2V0TGF5b3V0RW5naW5lKCk7XG4gICAgaWYoISFsYXlvdXRFbmdpbmUpIHtcbiAgICAgIGxheW91dEVuZ2luZS5vZmYoXCJtb3ZlXCIpO1xuICAgICAgbGF5b3V0RW5naW5lLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2V0TGF5b3V0RW5naW5lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnBhbmVsQ29udGVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2godmlzdWFsaXplciA9PiB7XG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHZpc3VhbGl6ZXIgaW5zdGFuY2VvZiBTZWxlY3RCYXNlKSB7XG4gICAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy52aXN1YWxpemVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdmlzdWFsaXplciBhbmQgYWxsIGlubmVyIGNvbnRlbnQuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmKGhhcmQgJiYgdGhpcy52aXN1YWxpemVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCh2aXN1YWxpemVyID0+XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdmlzdWFsaXplci51cGRhdGUodGhpcy5maWx0ZXJlZERhdGEpLCAxMClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgbGF5b3V0IG9mIHZpc3VhbGl6ZXIgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgY29uc3QgbGF5b3V0RW5naW5lID0gdGhpcy5sYXlvdXRFbmdpbmU7XG4gICAgaWYgKCEhbGF5b3V0RW5naW5lKSB7XG4gICAgICBsYXlvdXRFbmdpbmUucmVmcmVzaEl0ZW1zKCk7XG4gICAgICBsYXlvdXRFbmdpbmUubGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgZmlsdGVyIGJ5IHF1ZXN0aW9uIG5hbWUgYW5kIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGFwcGx5RmlsdGVyKFxuICAgIHF1ZXN0aW9uTmFtZTogc3RyaW5nLFxuICAgIHNlbGVjdGVkVmFsdWU6IGFueVxuICApIHtcbiAgICB2YXIgZmlsdGVyQ2hhbmdlZCA9IHRydWU7XG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZmlsdGVyQ2hhbmdlZCA9IHRoaXMuZmlsdGVyVmFsdWVzW3F1ZXN0aW9uTmFtZV0gIT09IHNlbGVjdGVkVmFsdWU7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdID0gc2VsZWN0ZWRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyQ2hhbmdlZCA9IHRoaXMuZmlsdGVyVmFsdWVzW3F1ZXN0aW9uTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdO1xuICAgIH1cbiAgICBpZihmaWx0ZXJDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5maWx0ZXJWYWx1ZXMpLnNvbWUoXG4gICAgICAgICAga2V5ID0+IGl0ZW1ba2V5XSAhPT0gdGhpcy5maWx0ZXJWYWx1ZXNba2V5XVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHZpc3V6bGl6ZXIgYnkgcXVlc3Rpb24uXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlVml6dWFsaXplcihcbiAgICB2aXp1YWxpemVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT5cbiAgKTogVmlzdWFsaXplckJhc2Uge1xuICAgIHZhciBjcmVhdG9ycyA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLmdldFZpc3VhbGl6ZXJzKHF1ZXN0aW9uLmdldFR5cGUoKSk7XG4gICAgdmFyIHZpc3VhbGl6ZXJzID0gY3JlYXRvcnMubWFwKGNyZWF0b3IgPT4gbmV3IGNyZWF0b3Iodml6dWFsaXplckVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhKSk7XG4gICAgaWYodmlzdWFsaXplcnMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHZpc3VhbGl6ZXIgPSBuZXcgQWx0ZXJuYXRpdmVWaXN1YWxpemVyc1dyYXBwZXIodmlzdWFsaXplcnMsIHZpenVhbGl6ZXJFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSk7XG4gICAgICByZXR1cm4gdmlzdWFsaXplcjtcbiAgICB9XG4gICAgcmV0dXJuIHZpc3VhbGl6ZXJzWzBdO1xuICB9XG5cbiAgZ2V0IHNob3dIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dIZWFkZXI7XG4gIH1cbiAgc2V0IHNob3dIZWFkZXIobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZihuZXdWYWx1ZSAhPSB0aGlzLl9zaG93SGVhZGVyKSB7XG4gICAgICB0aGlzLl9zaG93SGVhZGVyID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZSh0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uUGFuZWwudHMiLCJpbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uUGFuZWwgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldE5vZGUsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goXG4gICAgICBkYXRhSXRlbSA9PlxuICAgICAgICAhIWRhdGFJdGVtW3F1ZXN0aW9uLm5hbWVdICYmXG4gICAgICAgICh0aGlzLmRhdGEgPSB0aGlzLmRhdGEuY29uY2F0KGRhdGFJdGVtW3F1ZXN0aW9uLm5hbWVdKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IHBhbmVsZHluYW1pYzogUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcGFuZWxkeW5hbWljLnBhbmVsc1swXS5xdWVzdGlvbnM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHZpc1BhbmVsID0gbmV3IFZpc3VhbGl6YXRpb25QYW5lbChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VtbWFyeUNvbnRhaW5lclwiKSxcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCksXG4gICAgICB0aGlzLmRhdGFcbiAgICApO1xuICAgIHZpc1BhbmVsLnJlbmRlcigpO1xuICB9XG5cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcInBhbmVsZHluYW1pY1wiLFxuICBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMudHMiLCJpbXBvcnQgeyBzdG9wV29yZHMgfSBmcm9tIFwiLi9lbmdsaXNoXCI7XG5cbnZhciBzdG9wV29yZHNEaWN0aW9uYXJ5OiB7IFtpbmRleDogc3RyaW5nXTogQXJyYXk8c3RyaW5nPiB9ID0ge307XG5zdG9wV29yZHNEaWN0aW9uYXJ5W1wiZW5cIl0gPSBzdG9wV29yZHM7XG5cbmV4cG9ydCB2YXIgdGV4dEhlbHBlciA9IHtcbiAgZ2V0U3RvcFdvcmRzOiAobG9jYWxlOiBzdHJpbmcgPSBcIlwiKSA9PiB7XG4gICAgcmV0dXJuIHN0b3BXb3Jkc0RpY3Rpb25hcnlbbG9jYWxlIHx8IFwiZW5cIl0gfHwgW107XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9pbmRleC50cyIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblNlbGVjdEJhc2UsIEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBwcml2YXRlIHNlbGVjdGVkSXRlbTogSXRlbVZhbHVlID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGFydFR5cGVzOiBzdHJpbmdbXTtcbiAgcHJvdGVjdGVkIGNoYXJ0VHlwZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY2hhcnROb2RlOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHByb3RlY3RlZCBzZXRDaGFydFR5cGUoY2hhcnRUeXBlOiBzdHJpbmcpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNoYXJ0VHlwZXMuaW5kZXhPZihjaGFydFR5cGUpICE9PSAtMSAmJlxuICAgICAgdGhpcy5jaGFydFR5cGUgIT09IGNoYXJ0VHlwZVxuICAgICkge1xuICAgICAgdGhpcy5jaGFydFR5cGUgPSBjaGFydFR5cGU7XG4gICAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gICAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ2hhcnQoKSB7fVxuXG4gIHNldFNlbGVjdGlvbihpdGVtOiBJdGVtVmFsdWUpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5vbkRhdGFJdGVtU2VsZWN0ZWQoKGl0ZW0gJiYgaXRlbS52YWx1ZSkgfHwgdW5kZWZpbmVkLCAoaXRlbSAmJiBpdGVtLnRleHQpIHx8IFwiXCIpO1xuICB9XG4gIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtO1xuICB9XG5cbiAgb25EYXRhSXRlbVNlbGVjdGVkOiAoc2VsZWN0ZWRWYWx1ZTogYW55LCBzZWxlY3RlZFRleHQ6IHN0cmluZykgPT4gdm9pZDtcblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoYXJ0Tm9kZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuY2hhcnRUeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gVG9vbGJhckhlbHBlci5jcmVhdGVTZWxlY3Rvcih0b29sYmFyLFxuICAgICAgICB0aGlzLmNoYXJ0VHlwZXMubWFwKGNoYXJ0VHlwZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBjaGFydFR5cGUsXG4gICAgICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiY2hhcnRUeXBlX1wiICsgY2hhcnRUeXBlKVxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMuY2hhcnRUeXBlID09PSBvcHRpb24udmFsdWUsXG4gICAgICAgIChlOiBhbnkpID0+IHRoaXMuc2V0Q2hhcnRUeXBlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgKTtcbiAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0V3JhcHBlcik7XG4gICAgfVxuICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyKTtcbiAgfVxuXG4gIHZhbHVlc1NvdXJjZSgpOiBhbnlbXSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSA8UXVlc3Rpb25TZWxlY3RCYXNlPnRoaXMucXVlc3Rpb247XG4gICAgcmV0dXJuIHF1ZXN0aW9uW1wiYWN0aXZlQ2hvaWNlc1wiXTtcbiAgfVxuXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+IHtcbiAgICBjb25zdCB2YWx1ZXM6IEFycmF5PGFueT4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSB2YWx1ZXMudW5zaGlmdChcIm90aGVyXCIpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGdldExhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBjb25zdCBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT5cbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZSh0aGlzLnZhbHVlc1NvdXJjZSgpLCBjaG9pY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uLmhhc090aGVyKSBsYWJlbHMudW5zaGlmdChcIk90aGVyXCIpO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldERhdGEoKTogYW55W10ge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3Qgc3RhdGlzdGljcyA9IHZhbHVlcy5tYXAodiA9PiAwKTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgaWYgKCEhcm93VmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93VmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocm93VmFsdWUuaW5kZXhPZih2YWwpICE9PSAtMSkge1xuICAgICAgICAgICAgICBzdGF0aXN0aWNzW2luZGV4XSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHJvd1ZhbHVlID09IHZhbCkge1xuICAgICAgICAgICAgICBzdGF0aXN0aWNzW2luZGV4XSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtzdGF0aXN0aWNzXTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdEJhc2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQbG90bHlcIixcImNvbW1vbmpzMlwiOlwicGxvdGx5LmpzLWRpc3RcIixcImNvbW1vbmpzXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiYW1kXCI6XCJwbG90bHkuanMtZGlzdFwifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgUXVlc3Rpb24sIEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4sIENvbHVtblZpc2liaWxpdHksIFF1ZXN0aW9uTG9jYXRpb24sIENvbHVtbkRhdGFUeXBlIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5pbXBvcnQgXCIuL2RhdGF0YWJsZXMuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgRGF0YVRhYmxlc09wdGlvbnMge1xuICBidXR0b25zOlxuICAgIHwgYm9vbGVhblxuICAgIHwgc3RyaW5nW11cbiAgICB8IGFueVtdXG4gICAgfCBhbnk7XG5cbiAgZG9tOiBzdHJpbmc7XG5cbiAgb3JkZXJGaXhlZDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IEFycmF5PEFycmF5PG51bWJlciB8IHN0cmluZz4+IHwgb2JqZWN0O1xuXG4gIHJvd0dyb3VwOiBib29sZWFuIHwgYW55O1xuXG4gIGhlYWRlckNhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVzIHtcbiAgcHJpdmF0ZSBkYXRhdGFibGVBcGk6IGFueTtcbiAgcHJpdmF0ZSB0YWJsZURhdGE6IGFueTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGlzIGZpcmVkIGNvbHVtbnMgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKiA8YnIvPiBzZW5kZXIgdGhlIGRhdGF0YWJsZXMgYWRhcHRlclxuICAgKiA8YnIvPiBvcHRpb25zLnN1cnZleSBjdXJyZW50IHN1cnZleVxuICAgKiBAc2VlIGdldENvbHVtbnNcbiAgICovXG4gIHB1YmxpYyBjb2x1bW5zQ2hhbmdlZDogRXZlbnQ8KHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcbiAgICBwcml2YXRlIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEYXRhVGFibGVzT3B0aW9ucyxcbiAgICBwcml2YXRlIF9jb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+ID0gW10sXG4gICAgcHJpdmF0ZSBpc1RydXN0ZWRBY2Nlc3MgPSBmYWxzZVxuICApIHtcbiAgICB0aGlzLmhlYWRlckJ1dHRvbkNyZWF0b3JzID0gWyB0aGlzLmNyZWF0ZUdyb3VwaW5nQnV0dG9uLCB0aGlzLmNyZWF0ZUhpZGVCdXR0b24sIHRoaXMuY3JlYXRlQWRkQ29sdW1uQnV0dG9uLCB0aGlzLmNyZWF0ZU1vdmVUb0RldGFpbEJ1dHRvbiBdO1xuICAgIHRoaXMuZGV0YWlsQnV0dG9uQ3JlYXRvcnMgPSBbIHRoaXMuY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uIF07XG4gICAgaWYoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFibGVEYXRhKGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGFibGVEYXRhKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLnRhYmxlRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoaXRlbSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IGl0ZW1bY29sdW1uLm5hbWVdO1xuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgaWYocXVlc3Rpb24pIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi5kaXNwbGF5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID0gdHlwZW9mIGRpc3BsYXlWYWx1ZSA9PT0gXCJzdHJpbmdcIiA/IGRpc3BsYXlWYWx1ZSA6IEpTT04uc3RyaW5naWZ5KGRpc3BsYXlWYWx1ZSkgfHwgXCJcIjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRhdGFJdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uQ29sdW1uc0NoYW5nZWQoKSB7XG4gICAgdGhpcy5jb2x1bW5zQ2hhbmdlZC5maXJlKHRoaXMsIHsgc3VydmV5OiB0aGlzLnN1cnZleSB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENvbHVtbnMoc3VydmV5OiBTdXJ2ZXlNb2RlbCkge1xuICAgIHJldHVybiB0aGlzLnN1cnZleS5nZXRBbGxRdWVzdGlvbnMoKS5tYXAoKHF1ZXN0aW9uOiBRdWVzdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6IChxdWVzdGlvbi50aXRsZSB8fCBcIlwiKS50cmltKCkgfHwgcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGF0YVR5cGU6IHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJmaWxlXCIgPyBDb2x1bW5EYXRhVHlwZS5UZXh0IDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6IHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJmaWxlXCIgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUgOiBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSxcbiAgICAgICAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNWaXNpYmxlKHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpIHtcbiAgICByZXR1cm4gdGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSAhPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUgfHwgIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sdW1ucygpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29sdW1ucyhjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+KSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICBpZihoYXJkKSB7XG4gICAgICAgIHRoaXMuaW5pdFRhYmxlRGF0YSh0aGlzLmRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICBncm91cEJ5OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvL2lmKCF0aGlzLnRhcmdldE5vZGUpIHJldHVybjtcbiAgICBjb25zdCB0YWJsZU5vZGUgPSB0aGlzLnRhcmdldE5vZGUuY2hpbGRyZW5bMF07XG4gICAgaWYgKCg8YW55PiQuZm4pLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSh0YWJsZU5vZGUpICkge1xuICAgICAgJCh0YWJsZU5vZGUpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhdGFibGVBcGkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50YXJnZXROb2RlLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGFibGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIHZhciBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XG4gICAgdmFyIGNvbHVtbnNEYXRhOiBhbnkgPSBjb2x1bW5zLm1hcCgoYzogYW55KSA9PiBjLmRhdGEpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGNvbnN0IG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7XG4gICAgICBidXR0b25zOiBbXCJjb3B5XCIsIFwiY3N2XCIsIFwicHJpbnRcIl0sXG4gICAgICBkb206IFwiQmxmcnRpcFwiLFxuICAgICAgZGF0YTogdGhpcy50YWJsZURhdGEsXG4gICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgIGRldGFpbHM6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgIC8vIG9yZGVyRml4ZWQ6IFtbMSwgXCJhc2NcIl1dLFxuICAgICAgcm93R3JvdXA6IHtcbiAgICAgICAgZGF0YVNyYzogY29sdW1uc0RhdGFbMF0sXG4gICAgICAgIGVuZFJlbmRlcjogKHJvd3M6IGFueSwgZ3JvdXA6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBcIkNvdW50OiBcIiArIHJvd3MuZGF0YSgpLmNvdW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IFwiYXBpXCIsXG4gICAgICBoZWFkZXJDYWxsYmFjazogKHRoZWFkOiBhbnksIGRhdGE6IGFueSwgc3RhcnQ6IGFueSwgZW5kOiBhbnksIGRpc3BsYXk6IGFueSkgPT4ge1xuICAgICAgICB2YXIgZGF0YXRhYmxlQXBpID0gJCh0YWJsZU5vZGUpXG4gICAgICAgICAgLmRhdGFUYWJsZSgpXG4gICAgICAgICAgLmFwaSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICQodGhlYWQpXG4gICAgICAgIC5jaGlsZHJlbihcInRoXCIpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgICB2YXIgJHRoTm9kZSA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCEhY29sdW1uc0RhdGFbaW5kZXhdICYmICR0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGUtYWN0aW9uLWNvbnRhaW5lclwiO1xuICAgICAgICAgICAgc2VsZi5oZWFkZXJCdXR0b25DcmVhdG9ycy5mb3JFYWNoKGNyZWF0b3IgPT4ge1xuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGNyZWF0b3IoZGF0YXRhYmxlQXBpLCBpbmRleCwgY29sdW1uc0RhdGFbaW5kZXhdKTtcbiAgICAgICAgICAgICAgaWYoISFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICR0aE5vZGUucHJlcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgICAgICB2YXIgZmlsdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGZpbHRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZS1maWx0ZXItY29udGFpbmVyXCI7XG4gICAgICAgICAgICBmaWx0ZXJDb250YWluZXIuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1NlYXJjaC4uLicgLz5cIjtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSBkYXRhdGFibGVBcGkuY29sdW1uKGluZGV4KTtcbiAgICAgICAgICAgICQoJ2lucHV0JywgJChmaWx0ZXJDb250YWluZXIpKS5vbignY2xpY2snLCBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICAgICAgICAgICAgJCgnaW5wdXQnLCAkKGZpbHRlckNvbnRhaW5lcikpLm9uKCdrZXl1cCBjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9ICg8SFRNTElucHV0RWxlbWVudD50aGlzKS52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGNvbHVtbi5zZWFyY2goKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uc2VhcmNoKHZhbHVlKS5kcmF3KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJHRoTm9kZS5hcHBlbmQoZmlsdGVyQ29udGFpbmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcbiAgICB0YWJsZU5vZGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGUgZGlzcGxheSByZXNwb25zaXZlIGRhdGFUYWJsZVwiO1xuXG4gICAgY29uc3QgZGF0YXRhYmxlQXBpUmVmID0gdGhpcy5kYXRhdGFibGVBcGkgPSAkKHRhYmxlTm9kZSkuRGF0YVRhYmxlKG9wdGlvbnMpO1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpXG4gICAgICAucm93R3JvdXAoKVxuICAgICAgLmVuYWJsZShmYWxzZSlcbiAgICAgIC5kcmF3KCk7XG5cbiAgICAvLyB0aGlzLmRhdGF0YWJsZUFwaS5vbihcInJvd2dyb3VwLWRhdGFzcmNcIiwgKGUsIGR0LCB2YWwpID0+IHtcbiAgICAvLyAgIHRoaXMuZGF0YXRhYmxlQXBpLm9yZGVyLmZpeGVkKHsgcHJlOiBbW2NvbHVtbnNEYXRhLmluZGV4T2YodmFsKSwgXCJhc2NcIl1dIH0pLmRyYXcoKTtcbiAgICAvLyB9KTtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5vbignY29sdW1uLXJlb3JkZXInLCAoZTogYW55LCBzZXR0aW5nczogYW55LCBkZXRhaWxzOiBhbnkpID0+IHtcbiAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5fY29sdW1ucy5zcGxpY2UoZGV0YWlscy5mcm9tLCAxKTtcbiAgICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKGRldGFpbHMudG8sIDAsIGNvbHVtbnNbMF0pO1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9jb2x1bW5zKTtcbiAgICAgIHRoaXMub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgIH0pO1xuICAgICQodGFibGVOb2RlKS5maW5kKCd0Ym9keScpLm9uKCdjbGljaycsICd0ZC5zYS1kYXRhdGFibGUtYWN0aW9uLWNvbHVtbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0ciA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcbiAgICAgIHZhciByb3cgPSBkYXRhdGFibGVBcGlSZWYucm93KHRyKTtcblxuICAgICAgaWYgKHJvdy5jaGlsZC5pc1Nob3duKCkpIHtcbiAgICAgICAgICByb3cuY2hpbGQuaGlkZSgpO1xuICAgICAgICAgIHRyLnJlbW92ZUNsYXNzKCdzYS1kYXRhdGFibGUtZGV0YWlsLXJvdycpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgcm93LmNoaWxkKHNlbGYuY3JlYXRlRGV0YWlsTWFya3VwKHJvdy5kYXRhKCkpKS5zaG93KCk7XG4gICAgICAgICAgdHIuYWRkQ2xhc3MoJ3NhLWRhdGF0YWJsZS1kZXRhaWwtcm93Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRGV0YWlsTWFya3VwKGRhdGE6IGFueSkge1xuICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0YWJsZS5jZWxsUGFkZGluZyA9IFwiNVwiO1xuICAgIHRhYmxlLmNlbGxTcGFjaW5nID0gXCIwXCI7XG4gICAgdGFibGUuYm9yZGVyID0gXCIwXCI7XG4gICAgdGFibGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGUtZGV0YWlsXCI7XG5cbiAgICB0aGlzLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3cgJiYgdGhpcy5pc1Zpc2libGUoY29sdW1uLnZpc2liaWxpdHkpKVxuICAgICAgLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgdmFyIHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQxLnRleHRDb250ZW50ID0gY29sdW1uLmRpc3BsYXlOYW1lO1xuICAgICAgICB2YXIgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZDIudGV4dENvbnRlbnQgPSBkYXRhW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgdmFyIHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGhpcy5kZXRhaWxCdXR0b25DcmVhdG9ycy5mb3JFYWNoKGNyZWF0b3IgPT4gdGQzLmFwcGVuZENoaWxkKGNyZWF0b3IoY29sdW1uLm5hbWUpKSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfSk7XG5cbiAgICBpZighIXRoaXMuZGF0YXRhYmxlQXBpICYmIHRoaXMuZGF0YXRhYmxlQXBpLnJlc3BvbnNpdmUuaGFzSGlkZGVuKCkpIHtcbiAgICAgIHZhciBjb2x1bW5zVmlzaWJpbGl0eSA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbnMoKS5yZXNwb25zaXZlSGlkZGVuKCk7XG4gICAgICB2YXIgY29sdW1ucyA9IHRoaXMuZGF0YXRhYmxlQXBpLnNldHRpbmdzKCkuaW5pdCgpLmNvbHVtbnM7XG4gICAgICBmb3IodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjb2x1bW5zVmlzaWJpbGl0eS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgaWYoIWNvbHVtbnNWaXNpYmlsaXR5W2luZGV4XSkge1xuICAgICAgICAgIHZhciBjb2x1bW4gPSBjb2x1bW5zW2luZGV4XTtcbiAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgIHZhciB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgdGQxLnRleHRDb250ZW50ID0gY29sdW1uLnNUaXRsZTtcbiAgICAgICAgICB2YXIgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgIHRkMi50ZXh0Q29udGVudCA9IGRhdGFbY29sdW1uLm1EYXRhXTtcbiAgICAgICAgICB2YXIgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgIC8vdGhpcy5kZXRhaWxCdXR0b25DcmVhdG9ycy5mb3JFYWNoKGNyZWF0b3IgPT4gdGQzLmFwcGVuZENoaWxkKGNyZWF0b3IoY29sdW1uLm1EYXRhKSkpO1xuICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighIXRoaXMucmVuZGVyRGV0YWlsQWN0aW9ucykge1xuICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICB2YXIgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkMSk7XG4gICAgICB2YXIgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgdGhpcy5yZW5kZXJEZXRhaWxBY3Rpb25zKHRkLCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFibGU7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyRGV0YWlsQWN0aW9uczogKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGRhdGE6IGFueSkgPT4gSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGhlYWRlckJ1dHRvbkNyZWF0b3JzOiBBcnJheTwoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICkgPT4gSFRNTEVsZW1lbnQ+ID0gW107XG5cbiAgcHVibGljIGRldGFpbEJ1dHRvbkNyZWF0b3JzOiBBcnJheTwoXG4gICAgY29sdW1uTmFtZT86IHN0cmluZ1xuICApID0+IEhUTUxFbGVtZW50PiA9IFtdO1xuXG4gIGNyZWF0ZVNlbGVjdEJ1dHRvbiA9IChcbiAgICBkYXRhdGFibGVBcGk6IGFueSxcbiAgICBjb2xJZHg6IG51bWJlcixcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcbiAgKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzZWxlY3RCdXR0b25cIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAoPGFueT5kYXRhdGFibGVBcGkuY29sdW1ucygpKS5kZXNlbGVjdCgpO1xuICAgICAgKDxhbnk+ZGF0YXRhYmxlQXBpLmNvbHVtbihjb2xJZHgpKS5zZWxlY3QoKTtcbiAgICAgICEhdGhpcy5vbkNvbHVtblNlbGVjdGVkICYmIHRoaXMub25Db2x1bW5TZWxlY3RlZChjb2x1bW5OYW1lKTtcbiAgICB9O1xuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgY3JlYXRlR3JvdXBpbmdCdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZ3JvdXBCdXR0b25cIik7XG5cbiAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdyb3VwQnkuaW5kZXhPZihjb2x1bW5OYW1lKTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5ncm91cEJ5LnB1c2goY29sdW1uTmFtZSk7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidW5ncm91cEJ1dHRvblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZ3JvdXBCdXR0b25cIik7XG4gICAgICAgIHRoaXMuZ3JvdXBCeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBkYXRhdGFibGVBcGkucm93R3JvdXAoKS5lbmFibGUodGhpcy5ncm91cEJ5Lmxlbmd0aCA+IDApO1xuICAgICAgaWYgKHRoaXMuZ3JvdXBCeS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRhdGF0YWJsZUFwaS5yb3dHcm91cCgpLmRhdGFTcmMoPGFueT50aGlzLmdyb3VwQnkpO1xuICAgICAgfVxuICAgICAgZGF0YXRhYmxlQXBpLmRyYXcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVIaWRlQnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVDb2x1bW5cIik7XG5cbiAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdGhpcy5fY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXS52aXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGU7XG4gICAgICBkYXRhdGFibGVBcGkuY29sdW1ucyhbY29sSWR4XSkudmlzaWJsZShmYWxzZSk7XG5cbiAgICAgIC8vIFRPRE86IFVzZSBkYXRhdGFibGVzIHRvIHVwZGF0ZSBoZWFkZXJzIChzaG93IGNvbHVtbnMgb3B0aW9ucylcbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIHRoaXMub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNyZWF0ZUFkZENvbHVtbkJ1dHRvbiA9IChcbiAgICBkYXRhdGFibGVBcGk6IGFueSxcbiAgICBjb2xJZHg6IG51bWJlcixcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcbiAgKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3Rvci5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHZhciBoaWRkZW5Db2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLnZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlKTtcblxuICAgIGlmKGhpZGRlbkNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnRleHQgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKTtcbiAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgIGhpZGRlbkNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgdmFyIHRleHQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIGlmKHRleHQubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24udGV4dCA9IHRleHQ7XG4gICAgICAgIG9wdGlvbi50aXRsZSA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gY29sdW1uLm5hbWU7XG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxlY3Rvci5vbmNoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZighJCh0aGlzKS52YWwoKSkgcmV0dXJuO1xuXG4gICAgICB2YXIgY29sdW1uID0gc2VsZi5fY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5uYW1lID09PSAkKHRoaXMpLnZhbCgpKVswXTtcbiAgICAgIGNvbHVtbi52aXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlO1xuICAgICAgZGF0YXRhYmxlQXBpLmNvbHVtbnMoW3NlbGYuX2NvbHVtbnMuaW5kZXhPZihjb2x1bW4pXSkudmlzaWJsZSh0cnVlKTtcblxuICAgICAgLy8gVE9ETzogVXNlIGRhdGF0YWJsZXMgdG8gdXBkYXRlIGhlYWRlcnMgKHNob3cgY29sdW1ucyBvcHRpb25zKVxuICAgICAgc2VsZi51cGRhdGUoKTtcblxuICAgICAgc2VsZi5vbkNvbHVtbnNDaGFuZ2VkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTtcblxuICBjcmVhdGVNb3ZlVG9EZXRhaWxCdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibW92ZVRvRGV0YWlsXCIpO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF0ubG9jYXRpb24gPSBRdWVzdGlvbkxvY2F0aW9uLlJvdztcbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIHRoaXMub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbiA9IChcbiAgICBjb2x1bW5OYW1lPzogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0FzQ29sdW1uXCIpO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF0ubG9jYXRpb24gPSBRdWVzdGlvbkxvY2F0aW9uLlJvdztcbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIHRoaXMub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGdldENvbHVtbnMoKTogQXJyYXk8T2JqZWN0PiB7XG4gICAgY29uc3QgYXZhaWxhYmxlQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4gJiYgdGhpcy5pc1Zpc2libGUoY29sdW1uLnZpc2liaWxpdHkpKTtcbiAgICBjb25zdCBjb2x1bW5zOiBhbnkgPSBhdmFpbGFibGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogY29sdW1uLm5hbWUsXG4gICAgICAgIHNUaXRsZTogcXVlc3Rpb24gJiYgcXVlc3Rpb24udGl0bGUgfHwgY29sdW1uLmRpc3BsYXlOYW1lLFxuICAgICAgICB2aXNpYmxlOiBjb2x1bW4udmlzaWJpbGl0eSAhPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIG1SZW5kZXI6IChkYXRhOiBvYmplY3QsIHR5cGU6IHN0cmluZywgcm93OiBhbnkpID0+IHJvd1tjb2x1bW4ubmFtZV1cbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW3tcbiAgICAgIFwiY2xhc3NOYW1lXCI6ICdzYS1kYXRhdGFibGUtYWN0aW9uLWNvbHVtbicsXG4gICAgICBcIm9yZGVyYWJsZVwiOiBmYWxzZSxcbiAgICAgIFwiZGF0YVwiOiBudWxsLFxuICAgICAgXCJkZWZhdWx0Q29udGVudFwiOiAnJyxcbiAgICB9XS5jb25jYXQoY29sdW1ucyk7XG4gIH1cblxuICBwdWJsaWMgb25Db2x1bW5TZWxlY3RlZDogKGRhdGFOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgcHVibGljIGxheW91dCgpIHtcbiAgICAhIXRoaXMuZGF0YXRhYmxlQXBpICYmIHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbnMuYWRqdXN0KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yYXRpbmdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hdHJpeFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vYm9vbGVhblwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9pbmRleC50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcclxuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IFwiLi90ZXh0LnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0IGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxyXG4gICAgb3B0aW9ucz86IE9iamVjdFxyXG4gICkge1xyXG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIFwidGV4dFwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgIGxldCByZXN1bHQ6IEFycmF5PEFycmF5PHN0cmluZz4+ID0gW107XHJcbiAgICBsZXQgY29sdW1uc0NvdW50ID0gMDtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XHJcbiAgICAgIGNvbnN0IGRhdGFTdHJpbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgIGlmICghIXJvd1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93VmFsdWUpKSB7XHJcbiAgICAgICAgICBkYXRhU3RyaW5ncy5jb25jYXQocm93VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHJvd1ZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvd1ZhbHVlKS5mb3JFYWNoKGtleSA9PiBkYXRhU3RyaW5ncy5wdXNoKHJvd1ZhbHVlW2tleV0pKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGFTdHJpbmdzLnB1c2gocm93VmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaChkYXRhU3RyaW5ncyk7XHJcbiAgICAgICAgaWYoZGF0YVN0cmluZ3MubGVuZ3RoID4gY29sdW1uc0NvdW50KSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnNDb3VudCA9IGRhdGFTdHJpbmdzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvbHVtbnNDb3VudCwgZGF0YTogcmVzdWx0IH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IGNvbHVtbnNDb3VudCwgZGF0YX0gID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZW1wdHlUZXh0Tm9kZS5pbm5lckhUTUwgPSBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiO1xyXG5cclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYmxlTm9kZSA9IDxIVE1MVGFibGVFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRhYmxlTm9kZS5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVcIjtcclxuICAgIHRhYmxlTm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZU5vZGUpO1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChyb3dEYXRhID0+IHtcclxuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjb2x1bW5zQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkLmNsYXNzTmFtZSA9IFwic2EtdGV4dC10YWJsZV9fY2VsbFwiO1xyXG4gICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9IHJvd0RhdGFbaV07XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlTm9kZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2EtdGV4dC10YWJsZV9fY29udGFpbmVyXCI7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInRleHRcIiwgVGV4dCk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNvbW1lbnRcIiwgVGV4dCk7XHJcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm11bHRpcGxldGV4dFwiLCBUZXh0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHQudHMiLCJpbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1wiO1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWMgZXh0ZW5kcyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXRRdWVzdGlvbnMoKSB7XG4gICAgY29uc3QgbWF0cml4ZHluYW1pYzogUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIGNvbnN0IHZpc2libGVSb3dzID0gbWF0cml4ZHluYW1pYy52aXNpYmxlUm93cztcblxuICAgIGlmICh2aXNpYmxlUm93cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIHJldHVybiB2aXNpYmxlUm93c1swXS5jZWxscy5tYXAoYyA9PiBjLnF1ZXN0aW9uKTtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXG4gIFwibWF0cml4ZHluYW1pY1wiLFxuICBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pY1xuKTtcblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcIm1hdHJpeGRyb3Bkb3duXCIsXG4gIFZpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCBXb3JkQ2xvdWRMaWIgZnJvbSBcIndvcmRjbG91ZFwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyB0ZXh0SGVscGVyIH0gZnJvbSBcIi4vc3RvcHdvcmRzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBXb3JkQ2xvdWQgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcIndvcmRjbG91ZFwiO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG91ZDogYW55O1xuXG4gIGdldERhdGEoKSB7XG4gICAgbGV0IHJlc3VsdDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gICAgbGV0IHN0b3BXb3JkcyA9IHRleHRIZWxwZXIuZ2V0U3RvcFdvcmRzKCk7XG4gICAgbGV0IHN0b3BUaGVXb3JkID0gKHdvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHN0b3BXb3Jkcy5pbmRleE9mKHdvcmQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3b3JkO1xuICAgIH07XG5cbiAgICBsZXQgcHJvY2Vzc1N0cmluZyA9IChyb3c6IHN0cmluZykgPT4ge1xuICAgICAgcm93ID0gXCJcIiArIHJvdztcbiAgICAgIGlmICghIXJvdykge1xuICAgICAgICByb3cuc3BsaXQoXCIgXCIpLmZvckVhY2god29yZCA9PiB7XG4gICAgICAgICAgd29yZCA9IHN0b3BUaGVXb3JkKHdvcmQudG9Mb3dlckNhc2UoKSB8fCBcIlwiKTtcbiAgICAgICAgICBpZiAoISF3b3JkKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdFt3b3JkXSkge1xuICAgICAgICAgICAgICByZXN1bHRbd29yZF0gPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0W3dvcmRdKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbdGhpcy5xdWVzdGlvbi5uYW1lXTtcbiAgICAgIGlmICghIXJvd1ZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xuICAgICAgICAgIHJvd1ZhbHVlLmZvckVhY2gocHJvY2Vzc1N0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByb3dWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocm93VmFsdWUpLmZvckVhY2goa2V5ID0+IHByb2Nlc3NTdHJpbmcocm93VmFsdWVba2V5XSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXN1bHQpLm1hcChrZXkgPT4ge1xuICAgICAgcmV0dXJuIFtrZXksIHJlc3VsdFtrZXldXTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5nZXRDb2xvcnMoKTtcbiAgICBjb25zdCBjYW52YXNOb2RlID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbXB0eVRleHROb2RlLmlubmVySFRNTCA9IFwiVGhlcmUgYXJlIG5vIHJlc3VsdHMgeWV0XCI7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzTm9kZSk7XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBsaXN0OiBkYXRhLFxuICAgICAgd2VpZ2h0RmFjdG9yOiAyMCxcbiAgICAgIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUkgQm9sZCwgc2Fucy1zZXJpZlwiLFxuICAgICAgY29sb3I6ICh3b3JkOiBzdHJpbmcsIHdlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUNvbG9yKCk7XG4gICAgICB9LFxuICAgICAgcm90YXRlUmF0aW86IDAuNSxcbiAgICAgIHJvdGF0aW9uU3RlcHM6IDIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uKGl0ZW06IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtWzBdICsgXCI6IFwiICsgaXRlbVsxXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuY2xvdWQgPSBXb3JkQ2xvdWRMaWIoY2FudmFzTm9kZSwgY29uZmlnKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIGlmICghIXRoaXMuY2xvdWQpIHtcbiAgICAgIHRoaXMuY2xvdWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInRleHRcIiwgV29yZENsb3VkKTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNvbW1lbnRcIiwgV29yZENsb3VkKTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm11bHRpcGxldGV4dFwiLCBXb3JkQ2xvdWQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC93b3JkY2xvdWQudHMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGF0YWJsZXMvZGF0YXRhYmxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RleHQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uUGFuZWwuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aXN1YWxpemVyQmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogTXV1cmkgdjAuOC4wXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9oYWx0dS9tdXVyaVxuKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgSGFsdHUgT3lcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9oYWx0dS9tdXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4qIEBsaWNlbnNlIE1JVFxuKlxuKiBNdXVyaSBQYWNrZXJcbiogQ29weXJpZ2h0IChjKSAyMDE2LXByZXNlbnQsIE5pa2xhcyBSw6Rtw7YgPGlucmFtb0BnbWFpbC5jb20+XG4qIEBsaWNlbnNlIE1JVFxuKlxuKiBNdXVyaSBUaWNrZXIgLyBNdXVyaSBFbWl0dGVyIC8gTXV1cmkgUXVldWVcbiogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIE5pa2xhcyBSw6Rtw7YgPGlucmFtb0BnbWFpbC5jb20+XG4qIEBsaWNlbnNlIE1JVFxuKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5NdXVyaSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBuYW1lc3BhY2UgPSAnTXV1cmknO1xuICB2YXIgZ3JpZEluc3RhbmNlcyA9IHt9O1xuXG4gIHZhciBhY3Rpb25Td2FwID0gJ3N3YXAnO1xuICB2YXIgYWN0aW9uTW92ZSA9ICdtb3ZlJztcblxuICB2YXIgZXZlbnRTeW5jaHJvbml6ZSA9ICdzeW5jaHJvbml6ZSc7XG4gIHZhciBldmVudExheW91dFN0YXJ0ID0gJ2xheW91dFN0YXJ0JztcbiAgdmFyIGV2ZW50TGF5b3V0RW5kID0gJ2xheW91dEVuZCc7XG4gIHZhciBldmVudEFkZCA9ICdhZGQnO1xuICB2YXIgZXZlbnRSZW1vdmUgPSAncmVtb3ZlJztcbiAgdmFyIGV2ZW50U2hvd1N0YXJ0ID0gJ3Nob3dTdGFydCc7XG4gIHZhciBldmVudFNob3dFbmQgPSAnc2hvd0VuZCc7XG4gIHZhciBldmVudEhpZGVTdGFydCA9ICdoaWRlU3RhcnQnO1xuICB2YXIgZXZlbnRIaWRlRW5kID0gJ2hpZGVFbmQnO1xuICB2YXIgZXZlbnRGaWx0ZXIgPSAnZmlsdGVyJztcbiAgdmFyIGV2ZW50U29ydCA9ICdzb3J0JztcbiAgdmFyIGV2ZW50TW92ZSA9ICdtb3ZlJztcbiAgdmFyIGV2ZW50U2VuZCA9ICdzZW5kJztcbiAgdmFyIGV2ZW50QmVmb3JlU2VuZCA9ICdiZWZvcmVTZW5kJztcbiAgdmFyIGV2ZW50UmVjZWl2ZSA9ICdyZWNlaXZlJztcbiAgdmFyIGV2ZW50QmVmb3JlUmVjZWl2ZSA9ICdiZWZvcmVSZWNlaXZlJztcbiAgdmFyIGV2ZW50RHJhZ0luaXQgPSAnZHJhZ0luaXQnO1xuICB2YXIgZXZlbnREcmFnU3RhcnQgPSAnZHJhZ1N0YXJ0JztcbiAgdmFyIGV2ZW50RHJhZ01vdmUgPSAnZHJhZ01vdmUnO1xuICB2YXIgZXZlbnREcmFnU2Nyb2xsID0gJ2RyYWdTY3JvbGwnO1xuICB2YXIgZXZlbnREcmFnRW5kID0gJ2RyYWdFbmQnO1xuICB2YXIgZXZlbnREcmFnUmVsZWFzZVN0YXJ0ID0gJ2RyYWdSZWxlYXNlU3RhcnQnO1xuICB2YXIgZXZlbnREcmFnUmVsZWFzZUVuZCA9ICdkcmFnUmVsZWFzZUVuZCc7XG4gIHZhciBldmVudERlc3Ryb3kgPSAnZGVzdHJveSc7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZXIgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQmluZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gR2V0IGxpc3RlbmVycyBxdWV1ZSBhbmQgY3JlYXRlIGl0IGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghbGlzdGVuZXJzKSBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdID0gW107XG5cbiAgICAvLyBBZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBxdWV1ZS5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGFsbCBldmVudCBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGUgcHJvdmlkZWQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbbGlzdGVuZXJdXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBsaXN0ZW5lcnMgYW5kIHJldHVybiBpbW1lZGlhdGVseSBpZiBub25lIGlzIGZvdW5kLlxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIC8vIElmIG5vIHNwZWNpZmljIGxpc3RlbmVyIGlzIHByb3ZpZGVkIHJlbW92ZSBhbGwgbGlzdGVuZXJzLlxuICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBtYXRjaGluZyBsaXN0ZW5lcnMuXG4gICAgdmFyIGkgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChsaXN0ZW5lciA9PT0gbGlzdGVuZXJzW2ldKSBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0IGFsbCBsaXN0ZW5lcnMgaW4gYSBzcGVjaWZpZWQgZXZlbnQgd2l0aCB0aGUgcHJvdmlkZWQgYXJndW1lbnRzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHsqfSBbYXJnMV1cbiAgICogQHBhcmFtIHsqfSBbYXJnMl1cbiAgICogQHBhcmFtIHsqfSBbYXJnM11cbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gR2V0IGV2ZW50IGxpc3RlbmVycyBhbmQgcXVpdCBlYXJseSBpZiB0aGVyZSdzIG5vIGxpc3RlbmVycy5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgcUxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgYUxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgIHZhciBpO1xuXG4gICAgLy8gQWRkIHRoZSBjdXJyZW50IGxpc3RlbmVycyB0byB0aGUgY2FsbGJhY2sgcXVldWUgYmVmb3JlIHdlIHByb2Nlc3MgdGhlbS5cbiAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBndWFyYW50ZWUgdGhhdCBhbGwgb2YgdGhlIGxpc3RlbmVycyBhcmUgY2FsbGVkIGluXG4gICAgLy8gY29ycmVjdCBvcmRlciBldmVuIGlmIG5ldyBldmVudCBsaXN0ZW5lcnMgYXJlIHJlbW92ZWQvYWRkZWQgZHVyaW5nXG4gICAgLy8gcHJvY2Vzc2luZyBhbmQvb3IgZXZlbnRzIGFyZSBlbWl0dGVkIGR1cmluZyBwcm9jZXNzaW5nLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHF1ZXVlLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBJbmNyZW1lbnQgcXVldWUgY291bnRlci4gVGhpcyBpcyBuZWVkZWQgZm9yIHRoZSBzY2VuYXJpb3Mgd2hlcmUgZW1pdCBpc1xuICAgIC8vIHRyaWdnZXJlZCB3aGlsZSB0aGUgcXVldWUgaXMgYWxyZWFkeSBwcm9jZXNzaW5nLiBXZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2ZcbiAgICAvLyBob3cgbWFueSBcInF1ZXVlIHByb2Nlc3NvcnNcIiB0aGVyZSBhcmUgYWN0aXZlIHNvIHRoYXQgd2UgY2FuIHNhZmVseSByZXNldFxuICAgIC8vIHRoZSBxdWV1ZSBpbiB0aGUgZW5kIHdoZW4gdGhlIGxhc3QgcXVldWUgcHJvY2Vzc29yIGlzIGZpbmlzaGVkLlxuICAgICsrdGhpcy5fY291bnRlcjtcblxuICAgIC8vIFByb2Nlc3MgdGhlIHF1ZXVlICh0aGUgc3BlY2lmaWMgcGFydCBvZiBpdCBmb3IgdGhpcyBlbWl0KS5cbiAgICBmb3IgKGkgPSBxTGVuZ3RoLCBxTGVuZ3RoID0gcXVldWUubGVuZ3RoOyBpIDwgcUxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIGFMZW5ndGggPT09IDAgPyBxdWV1ZVtpXSgpIDpcbiAgICAgIGFMZW5ndGggPT09IDEgPyBxdWV1ZVtpXShhcmcxKSA6XG4gICAgICBhTGVuZ3RoID09PSAyID8gcXVldWVbaV0oYXJnMSwgYXJnMikgOlxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldKGFyZzEsIGFyZzIsIGFyZzMpO1xuXG4gICAgICAvLyBTdG9wIHByb2Nlc3NpbmcgaWYgdGhlIGVtaXR0ZXIgaXMgZGVzdHJveWVkLlxuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBEZWNyZW1lbnQgcXVldWUgcHJvY2VzcyBjb3VudGVyLlxuICAgIC0tdGhpcy5fY291bnRlcjtcblxuICAgIC8vIFJlc2V0IHRoZSBxdWV1ZSBpZiB0aGVyZSBhcmUgbm8gbW9yZSBxdWV1ZSBwcm9jZXNzZXMgcnVubmluZy5cbiAgICBpZiAoIXRoaXMuX2NvdW50ZXIpIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBlbWl0dGVyIGluc3RhbmNlLiBCYXNpY2FsbHkganVzdCByZW1vdmVzIGFsbCBib3VuZCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgIHZhciBldmVudDtcblxuICAgIC8vIEZsYWcgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIC8vIFJlc2V0IHF1ZXVlIChpZiBxdWV1ZSBpcyBjdXJyZW50bHkgcHJvY2Vzc2luZyB0aGlzIHdpbGwgYWxzbyBzdG9wIHRoYXQpLlxuICAgIHRoaXMuX3F1ZXVlLmxlbmd0aCA9IHRoaXMuX2NvdW50ZXIgPSAwO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMuXG4gICAgZm9yIChldmVudCBpbiBldmVudHMpIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnRdKSB7XG4gICAgICAgIGV2ZW50c1tldmVudF0ubGVuZ3RoID0gMDtcbiAgICAgICAgZXZlbnRzW2V2ZW50XSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBTZXQgdXAgdGhlIGRlZmF1bHQgZXhwb3J0IHZhbHVlcy5cbiAgdmFyIHRyYW5zZm9ybVN0eWxlID0gJ3RyYW5zZm9ybSc7XG4gIHZhciB0cmFuc2Zvcm1Qcm9wID0gJ3RyYW5zZm9ybSc7XG5cbiAgLy8gRmluZCB0aGUgc3VwcG9ydGVkIHRyYW5zZm9ybSBwcm9wIGFuZCBzdHlsZSBuYW1lcy5cbiAgdmFyIGRvY0VsZW1TdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4gIHZhciBzdHlsZSA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgc3R5bGVDYXAgPSAnVHJhbnNmb3JtJztcbiAgdmFyIGZvdW5kID0gZmFsc2U7XG4gIFsnJywgJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcyddLmZvckVhY2goZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgaWYgKGZvdW5kKSByZXR1cm47XG4gICAgdmFyIHByb3BOYW1lID0gcHJlZml4ID8gcHJlZml4ICsgc3R5bGVDYXAgOiBzdHlsZTtcbiAgICBpZiAoZG9jRWxlbVN0eWxlW3Byb3BOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVmaXggPSBwcmVmaXgudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRyYW5zZm9ybVN0eWxlID0gcHJlZml4ID8gJy0nICsgcHJlZml4ICsgJy0nICsgc3R5bGUgOiBzdHlsZTtcbiAgICAgIHRyYW5zZm9ybVByb3AgPSBwcm9wTmFtZTtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBzdHlsZXNDYWNoZSA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gbmV3IFdlYWtNYXAoKSA6IG51bGw7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXB1dGVkIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBzdHlsZSBwcm9wZXJ0eSBhcyBhIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gICAgdmFyIHN0eWxlcyA9IHN0eWxlc0NhY2hlICYmIHN0eWxlc0NhY2hlLmdldChlbGVtZW50KTtcbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gICAgICBpZiAoc3R5bGVzQ2FjaGUpIHN0eWxlc0NhY2hlLnNldChlbGVtZW50LCBzdHlsZXMpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoc3R5bGUgPT09ICd0cmFuc2Zvcm0nID8gdHJhbnNmb3JtU3R5bGUgOiBzdHlsZSk7XG4gIH1cblxuICB2YXIgc3R5bGVOYW1lUmVnRXggPSAvKFtBLVpdKS9nO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGEgY2FtZWwgY2FzZSBzdHlsZSBwcm9wZXJ0eSB0byBrZWJhYiBjYXNlIHN0eWxlIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZU5hbWUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHN0eWxlTmFtZVJlZ0V4LCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHZhciBzdHJGdW5jdGlvbiA9ICdmdW5jdGlvbic7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBzdHJGdW5jdGlvbjtcbiAgfVxuXG4gIHZhciB0cmFuc2Zvcm1TdHlsZSQxID0gJ3RyYW5zZm9ybSc7XG5cbiAgLyoqXG4gICAqIFNldCBpbmxpbmUgc3R5bGVzIHRvIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xuICAgKi9cbiAgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3AgPT09IHRyYW5zZm9ybVN0eWxlJDEgPyB0cmFuc2Zvcm1Qcm9wIDogcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZW0gYW5pbWF0aW9uIGhhbmRsZXIgcG93ZXJlZCBieSBXZWIgQW5pbWF0aW9ucyBBUEkuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBJdGVtQW5pbWF0ZShlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9jYWxsYmFjayA9IG51bGw7XG4gICAgdGhpcy5fcHJvcHMgPSBbXTtcbiAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICB0aGlzLl9rZXlmcmFtZXMgPSBbXTtcbiAgICB0aGlzLl9vcHRpb25zID0ge307XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9vbkZpbmlzaCA9IHRoaXMuX29uRmluaXNoLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgaW5zdGFuY2UncyBhbmltYXRpb24uIEF1dG9tYXRpY2FsbHkgc3RvcHMgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXNcbiAgICogcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc0Zyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzVG9cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZWFzaW5nPSdlYXNlJ11cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25GaW5pc2hdXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihwcm9wc0Zyb20sIHByb3BzVG8sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRpb247XG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX3Byb3BzO1xuICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBjYW5jZWxBbmltYXRpb24gPSBmYWxzZTtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gZXhpc3RpbmcgYW5pbWF0aW9uIHJ1bm5pbmcsIGxldCdzIGNoZWNrIGlmIGl0IG5lZWRzIHRvIGJlXG4gICAgLy8gY2FuY2VsbGVkIG9yIGlmIGl0IGNhbiBjb250aW51ZSBydW5uaW5nLlxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIHZhciBwcm9wQ291bnQgPSAwO1xuICAgICAgdmFyIHByb3BJbmRleDtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlcXVlc3RlZCBhbmltYXRpb24gdGFyZ2V0IHByb3BzIGFuZCB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGVcbiAgICAgIC8vIGN1cnJlbnQgcHJvcHMgYW5kIHZhbHVlcy5cbiAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzVG8pIHtcbiAgICAgICAgKytwcm9wQ291bnQ7XG4gICAgICAgIHByb3BJbmRleCA9IGN1cnJlbnRQcm9wcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgaWYgKHByb3BJbmRleCA9PT0gLTEgfHwgcHJvcHNUb1twcm9wTmFtZV0gIT09IGN1cnJlbnRWYWx1ZXNbcHJvcEluZGV4XSkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRhcmdldCBwcm9wcyBjb3VudCBtYXRjaGVzIGN1cnJlbnQgcHJvcHMgY291bnQuIFRoaXMgaXNcbiAgICAgIC8vIG5lZWRlZCBmb3IgdGhlIGVkZ2UgY2FzZSBzY2VuYXJpbyB3aGVyZSB0YXJnZXQgcHJvcHMgY29udGFpbiB0aGUgc2FtZVxuICAgICAgLy8gc3R5bGVzIGFzIGN1cnJlbnQgcHJvcHMsIGJ1dCB0aGUgY3VycmVudCBwcm9wcyBoYXZlIHNvbWUgYWRkaXRpb25hbFxuICAgICAgLy8gcHJvcHMuXG4gICAgICBpZiAoIWNhbmNlbEFuaW1hdGlvbiAmJiBwcm9wQ291bnQgIT09IGN1cnJlbnRQcm9wcy5sZW5ndGgpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgYW5pbWF0aW9uIChpZiByZXF1aXJlZCkuXG4gICAgaWYgKGNhbmNlbEFuaW1hdGlvbikgYW5pbWF0aW9uLmNhbmNlbCgpO1xuXG4gICAgLy8gU3RvcmUgYW5pbWF0aW9uIGNhbGxiYWNrLlxuICAgIHRoaXMuX2NhbGxiYWNrID0gaXNGdW5jdGlvbihvcHRzLm9uRmluaXNoKSA/IG9wdHMub25GaW5pc2ggOiBudWxsO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHJ1bm5pbmcgYW5pbWF0aW9uIHRoYXQgZG9lcyBub3QgbmVlZCB0byBiZSBjYW5jZWxsZWQsIGxldCdzXG4gICAgLy8gY2FsbCBpdCBhIGRheSBoZXJlIGFuZCBsZXQgaXQgcnVuLlxuICAgIGlmIChhbmltYXRpb24gJiYgIWNhbmNlbEFuaW1hdGlvbikgcmV0dXJuO1xuXG4gICAgLy8gU3RvcmUgdGFyZ2V0IHByb3BzIGFuZCB2YWx1ZXMgdG8gaW5zdGFuY2UuXG4gICAgY3VycmVudFByb3BzLmxlbmd0aCA9IGN1cnJlbnRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICBmb3IgKHByb3BOYW1lIGluIHByb3BzVG8pIHtcbiAgICAgIGN1cnJlbnRQcm9wcy5wdXNoKHByb3BOYW1lKTtcbiAgICAgIGN1cnJlbnRWYWx1ZXMucHVzaChwcm9wc1RvW3Byb3BOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGtleWZyYW1lcy5cbiAgICB2YXIgYW5pbUtleWZyYW1lcyA9IHRoaXMuX2tleWZyYW1lcztcbiAgICBhbmltS2V5ZnJhbWVzWzBdID0gcHJvcHNGcm9tO1xuICAgIGFuaW1LZXlmcmFtZXNbMV0gPSBwcm9wc1RvO1xuXG4gICAgLy8gU2V0IHVwIG9wdGlvbnMuXG4gICAgdmFyIGFuaW1PcHRpb25zID0gdGhpcy5fb3B0aW9ucztcbiAgICBhbmltT3B0aW9ucy5kdXJhdGlvbiA9IG9wdHMuZHVyYXRpb24gfHwgMzAwO1xuICAgIGFuaW1PcHRpb25zLmVhc2luZyA9IG9wdHMuZWFzaW5nIHx8ICdlYXNlJztcblxuICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb25cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKGFuaW1LZXlmcmFtZXMsIGFuaW1PcHRpb25zKTtcbiAgICBhbmltYXRpb24ub25maW5pc2ggPSB0aGlzLl9vbkZpbmlzaDtcbiAgICB0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb247XG5cbiAgICAvLyBTZXQgdGhlIGVuZCBzdHlsZXMuIFRoaXMgbWFrZXMgc3VyZSB0aGF0IHRoZSBlbGVtZW50IHN0YXlzIGF0IHRoZSBlbmRcbiAgICAvLyB2YWx1ZXMgYWZ0ZXIgYW5pbWF0aW9uIGlzIGZpbmlzaGVkLlxuICAgIHNldFN0eWxlcyhlbGVtZW50LCBwcm9wc1RvKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCBpbnN0YW5jZSdzIGN1cnJlbnQgYW5pbWF0aW9uIGlmIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3N0eWxlc11cbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oc3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9hbmltYXRpb24pIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgY3VycmVudFByb3BzID0gdGhpcy5fcHJvcHM7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIHByb3BOYW1lO1xuICAgIHZhciBwcm9wVmFsdWU7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBDYWxjdWxhdGUgKGlmIG5vdCBwcm92aWRlZCkgYW5kIHNldCBzdHlsZXMuXG4gICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjdXJyZW50UHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvcE5hbWUgPSBjdXJyZW50UHJvcHNbaV07XG4gICAgICAgIHByb3BWYWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIGdldFN0eWxlTmFtZShwcm9wTmFtZSkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BOYW1lID09PSAndHJhbnNmb3JtJyA/IHRyYW5zZm9ybVByb3AgOiBwcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpO1xuICAgIH1cblxuICAgIC8vICBDYW5jZWwgYW5pbWF0aW9uLlxuICAgIHRoaXMuX2FuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB0aGlzLl9hbmltYXRpb24gPSB0aGlzLl9jYWxsYmFjayA9IG51bGw7XG5cbiAgICAvLyBSZXNldCBjdXJyZW50IHByb3BzIGFuZCB2YWx1ZXMuXG4gICAgY3VycmVudFByb3BzLmxlbmd0aCA9IGN1cnJlbnRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGl0ZW0gaXMgYmVpbmcgYW5pbWF0ZWQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5pc0FuaW1hdGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2FuaW1hdGlvbjtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9vcHRpb25zID0gdGhpcy5fa2V5ZnJhbWVzID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQW5pbWF0aW9uIGVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuX29uRmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuX3Byb3BzLmxlbmd0aCA9IHRoaXMuX3ZhbHVlcy5sZW5ndGggPSAwO1xuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gIH07XG5cbiAgdmFyIHZlbmRvclByZWZpeGVzID0gWycnLCAnd2Via2l0JywgJ21veicsICdtcycsICdvJywgJ1dlYmtpdCcsICdNb3onLCAnTVMnLCAnTyddO1xuXG4gIC8qKlxuICAgKiBHZXQgcHJlZml4ZWQgQ1NTIHByb3BlcnR5IG5hbWUgd2hlbiBnaXZlbiBhIG5vbi1wcmVmaXhlZCBDU1MgcHJvcGVydHkgbmFtZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1TdHlsZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcE5hbWVcbiAgICogQHJldHVybnMgeyFTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRQcmVmaXhlZFByb3BOYW1lKGVsZW1TdHlsZSwgcHJvcE5hbWUpIHtcbiAgICB2YXIgY2FtZWxQcm9wTmFtZSA9IHByb3BOYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHByZWZpeDtcbiAgICB2YXIgcHJlZml4ZWRQcm9wTmFtZTtcblxuICAgIHdoaWxlIChpIDwgdmVuZG9yUHJlZml4ZXMubGVuZ3RoKSB7XG4gICAgICBwcmVmaXggPSB2ZW5kb3JQcmVmaXhlc1tpXTtcbiAgICAgIHByZWZpeGVkUHJvcE5hbWUgPSBwcmVmaXggPyBwcmVmaXggKyBjYW1lbFByb3BOYW1lIDogcHJvcE5hbWU7XG4gICAgICBpZiAocHJlZml4ZWRQcm9wTmFtZSBpbiBlbGVtU3R5bGUpIHJldHVybiBwcmVmaXhlZFByb3BOYW1lO1xuICAgICAgKytpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGR0ID0gMTAwMCAvIDYwO1xuXG4gIHZhciByYWYgPSAoXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKGR0KTtcbiAgICAgIH0sIGR0KTtcbiAgICB9XG4gICkuYmluZCh3aW5kb3cpO1xuXG4gIC8vIERldGVjdCBzdXBwb3J0IGZvciBwYXNzaXZlIGV2ZW50czpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAgdmFyIGlzUGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBwYXNzaXZlT3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVPcHRzKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlT3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgLy8gRHJhZ2dlciBldmVudHMuXG4gIHZhciBldmVudHMgPSB7XG4gICAgc3RhcnQ6ICdzdGFydCcsXG4gICAgbW92ZTogJ21vdmUnLFxuICAgIGVuZDogJ2VuZCcsXG4gICAgY2FuY2VsOiAnY2FuY2VsJ1xuICB9O1xuXG4gIHZhciBoYXNUb3VjaEV2ZW50cyA9ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuVG91Y2hFdmVudCk7XG4gIHZhciBoYXNQb2ludGVyRXZlbnRzID0gISF3aW5kb3cuUG9pbnRlckV2ZW50O1xuICB2YXIgaGFzTXNQb2ludGVyRXZlbnRzID0gISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG4gIHZhciBpc0FuZHJvaWQgPSAvKGFuZHJvaWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHZhciBsaXN0ZW5lck9wdGlvbnMgPSBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xuXG4gIHZhciB0YVByb3AgPSAndG91Y2hBY3Rpb24nO1xuICB2YXIgdGFQcm9wUHJlZml4ZWQgPSBnZXRQcmVmaXhlZFByb3BOYW1lKHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsIHRhUHJvcCk7XG4gIHZhciB0YURlZmF1bHRWYWx1ZSA9ICdhdXRvJztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBEcmFnZ2VyIGluc3RhbmNlIGZvciBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3NzUHJvcHNdXG4gICAqL1xuICBmdW5jdGlvbiBEcmFnZ2VyKGVsZW1lbnQsIGNzc1Byb3BzKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jc3NQcm9wcyA9IHt9O1xuICAgIHRoaXMuX3RvdWNoQWN0aW9uID0gJyc7XG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB0aGlzLl9wb2ludGVySWQgPSBudWxsO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5fc3RhcnRYID0gMDtcbiAgICB0aGlzLl9zdGFydFkgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRYID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WSA9IDA7XG5cbiAgICB0aGlzLl9wcmVTdGFydENoZWNrID0gdGhpcy5fcHJlU3RhcnRDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSA9IHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uU3RhcnQgPSB0aGlzLl9vblN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Nb3ZlID0gdGhpcy5fb25Nb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DYW5jZWwgPSB0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRW5kID0gdGhpcy5fb25FbmQuYmluZCh0aGlzKTtcblxuICAgIC8vIEFwcGx5IGluaXRpYWwgY3NzIHByb3BzLlxuICAgIHRoaXMuc2V0Q3NzUHJvcHMoY3NzUHJvcHMpO1xuXG4gICAgLy8gSWYgdG91Y2ggYWN0aW9uIHdhcyBub3QgcHJvdmlkZWQgd2l0aCBpbml0aWFsIGNzcyBwcm9wcyBsZXQncyBhc3N1bWUgaXQnc1xuICAgIC8vIGF1dG8uXG4gICAgaWYgKCF0aGlzLl90b3VjaEFjdGlvbikge1xuICAgICAgdGhpcy5zZXRUb3VjaEFjdGlvbih0YURlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBuYXRpdmUgbGluay9pbWFnZSBkcmFnZ2luZyBmb3IgdGhlIGl0ZW0gYW5kIGl0J3MgYW5jZXN0b3JzLlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcblxuICAgIC8vIExpc3RlbiB0byBzdGFydCBldmVudC5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fZXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSB0b3VjaCBldmVudHMsIGJ1dCBubyBwb2ludGVyIGV2ZW50cyB3ZSBuZWVkIHRvIGFsc28gbGlzdGVuIGZvclxuICAgIC8vIG1vdXNlIGV2ZW50cyBpbiBhZGRpdGlvbiB0byB0b3VjaCBldmVudHMgZm9yIGRldmljZXMgd2hpY2ggc3VwcG9ydCBib3RoXG4gICAgLy8gbW91c2UgYW5kIHRvdWNoIGludGVyYWN0aW9uLlxuICAgIGlmIChoYXNUb3VjaEV2ZW50cyAmJiAhaGFzUG9pbnRlckV2ZW50cyAmJiAhaGFzTXNQb2ludGVyRXZlbnRzKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fbW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3RlY3RlZCBwcm9wZXJ0aWVzXG4gICAqICoqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIERyYWdnZXIuX3BvaW50ZXJFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdwb2ludGVyZG93bicsXG4gICAgbW92ZTogJ3BvaW50ZXJtb3ZlJyxcbiAgICBjYW5jZWw6ICdwb2ludGVyY2FuY2VsJyxcbiAgICBlbmQ6ICdwb2ludGVydXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fbXNQb2ludGVyRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnTVNQb2ludGVyRG93bicsXG4gICAgbW92ZTogJ01TUG9pbnRlck1vdmUnLFxuICAgIGNhbmNlbDogJ01TUG9pbnRlckNhbmNlbCcsXG4gICAgZW5kOiAnTVNQb2ludGVyVXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fdG91Y2hFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBjYW5jZWw6ICd0b3VjaGNhbmNlbCcsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH07XG5cbiAgRHJhZ2dlci5fbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGNhbmNlbDogJycsXG4gICAgZW5kOiAnbW91c2V1cCdcbiAgfTtcblxuICBEcmFnZ2VyLl9ldmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhhc1BvaW50ZXJFdmVudHMpIHJldHVybiBEcmFnZ2VyLl9wb2ludGVyRXZlbnRzO1xuICAgIGlmIChoYXNNc1BvaW50ZXJFdmVudHMpIHJldHVybiBEcmFnZ2VyLl9tc1BvaW50ZXJFdmVudHM7XG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fdG91Y2hFdmVudHM7XG4gICAgcmV0dXJuIERyYWdnZXIuX21vdXNlRXZlbnRzO1xuICB9KSgpO1xuXG4gIERyYWdnZXIuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuXG4gIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBQcm90ZWN0ZWQgc3RhdGljIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0ICYmIGUuY2FuY2VsYWJsZSAhPT0gZmFsc2UpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9hY3RpdmF0ZUluc3RhbmNlID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5kZXggPSBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHJldHVybjtcblxuICAgIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9uKGV2ZW50cy5tb3ZlLCBpbnN0YW5jZS5fb25Nb3ZlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9uKGV2ZW50cy5jYW5jZWwsIGluc3RhbmNlLl9vbkNhbmNlbCk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMuZW5kLCBpbnN0YW5jZS5fb25FbmQpO1xuXG4gICAgaWYgKERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIERyYWdnZXIuX2JpbmRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgRHJhZ2dlci5fZGVhY3RpdmF0ZUluc3RhbmNlID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5kZXggPSBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vZmYoZXZlbnRzLm1vdmUsIGluc3RhbmNlLl9vbk1vdmUpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5jYW5jZWwsIGluc3RhbmNlLl9vbkNhbmNlbCk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vZmYoZXZlbnRzLmVuZCwgaW5zdGFuY2UuX29uRW5kKTtcblxuICAgIGlmICghRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCkge1xuICAgICAgRHJhZ2dlci5fdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIERyYWdnZXIuX2JpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnRzID0gRHJhZ2dlci5fZXZlbnRzO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3ZlLCBEcmFnZ2VyLl9vbk1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLmVuZCwgRHJhZ2dlci5fb25FbmQsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZXZlbnRzLmNhbmNlbCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuY2FuY2VsLCBEcmFnZ2VyLl9vbkNhbmNlbCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgfTtcblxuICBEcmFnZ2VyLl91bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnRzID0gRHJhZ2dlci5fZXZlbnRzO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5tb3ZlLCBEcmFnZ2VyLl9vbk1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLmVuZCwgRHJhZ2dlci5fb25FbmQsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZXZlbnRzLmNhbmNlbCAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMuY2FuY2VsLCBEcmFnZ2VyLl9vbkNhbmNlbCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9nZXRFdmVudFBvaW50ZXJJZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBwb2ludGVyIGlkIGF2YWlsYWJsZSBsZXQncyB1c2UgaXQuXG4gICAgaWYgKHR5cGVvZiBldmVudC5wb2ludGVySWQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZXZlbnQucG9pbnRlcklkO1xuICAgIH1cblxuICAgIC8vIEZvciB0b3VjaCBldmVudHMgbGV0J3MgZ2V0IHRoZSBmaXJzdCBjaGFuZ2VkIHRvdWNoJ3MgaWRlbnRpZmllci5cbiAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgIHJldHVybiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXIgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciBtb3VzZS9vdGhlciBldmVudHMgbGV0J3MgcHJvdmlkZSBhIHN0YXRpYyBpZC5cbiAgICByZXR1cm4gMTtcbiAgfTtcblxuICBEcmFnZ2VyLl9nZXRUb3VjaEJ5SWQgPSBmdW5jdGlvbihldmVudCwgaWQpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgcG9pbnRlciBldmVudCByZXR1cm4gdGhlIHdob2xlIGV2ZW50IGlmIHRoZXJlJ3MgYSBtYXRjaCwgYW5kXG4gICAgLy8gbnVsbCBvdGhlcndpc2UuXG4gICAgaWYgKHR5cGVvZiBldmVudC5wb2ludGVySWQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZXZlbnQucG9pbnRlcklkID09PSBpZCA/IGV2ZW50IDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgdG91Y2ggZXZlbnRzIGxldCdzIGNoZWNrIGlmIHRoZXJlJ3MgYSBjaGFuZ2VkIHRvdWNoIG9iamVjdCB0aGF0IG1hdGNoZXNcbiAgICAvLyB0aGUgcG9pbnRlcklkIGluIHdoaWNoIGNhc2UgcmV0dXJuIHRoZSB0b3VjaCBvYmplY3QuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yIG1vdXNlL290aGVyIGV2ZW50cyBsZXQncyBhc3N1bWUgdGhlcmUncyBvbmx5IG9uZSBwb2ludGVyIGFuZCBqdXN0XG4gICAgLy8gcmV0dXJuIHRoZSBldmVudC5cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH07XG5cbiAgRHJhZ2dlci5fb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMubW92ZSwgZSk7XG4gIH07XG5cbiAgRHJhZ2dlci5fb25DYW5jZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5lbWl0KGV2ZW50cy5jYW5jZWwsIGUpO1xuICB9O1xuXG4gIERyYWdnZXIuX29uRW5kID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMuZW5kLCBlKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZXNldCBjdXJyZW50IGRyYWcgb3BlcmF0aW9uIChpZiBhbnkpLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xuICAgIHRoaXMuX3N0YXJ0WCA9IDA7XG4gICAgdGhpcy5fc3RhcnRZID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFkgPSAwO1xuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUsXG4gICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICApO1xuXG4gICAgRHJhZ2dlci5fZGVhY3RpdmF0ZUluc3RhbmNlKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjdXN0b20gZHJhZ2dlciBldmVudCBmcm9tIGEgcmF3IGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICogQHJldHVybnMge0RyYWdnZXJFdmVudH1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9jcmVhdGVFdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGUpIHtcbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIEhhbW1lci5qcyBjb21wYXRpYmlsaXR5IGludGVyZmFjZS5cbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBzcmNFdmVudDogZSxcbiAgICAgIGRpc3RhbmNlOiB0aGlzLmdldERpc3RhbmNlKCksXG4gICAgICBkZWx0YVg6IHRoaXMuZ2V0RGVsdGFYKCksXG4gICAgICBkZWx0YVk6IHRoaXMuZ2V0RGVsdGFZKCksXG4gICAgICBkZWx0YVRpbWU6IHR5cGUgPT09IGV2ZW50cy5zdGFydCA/IDAgOiB0aGlzLmdldERlbHRhVGltZSgpLFxuICAgICAgaXNGaXJzdDogdHlwZSA9PT0gZXZlbnRzLnN0YXJ0LFxuICAgICAgaXNGaW5hbDogdHlwZSA9PT0gZXZlbnRzLmVuZCB8fCB0eXBlID09PSBldmVudHMuY2FuY2VsLFxuICAgICAgLy8gUGFydGlhbCBUb3VjaCBBUEkgaW50ZXJmYWNlLlxuICAgICAgaWRlbnRpZmllcjogdGhpcy5fcG9pbnRlcklkLFxuICAgICAgc2NyZWVuWDogdG91Y2guc2NyZWVuWCxcbiAgICAgIHNjcmVlblk6IHRvdWNoLnNjcmVlblksXG4gICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcbiAgICAgIHBhZ2VYOiB0b3VjaC5wYWdlWCxcbiAgICAgIHBhZ2VZOiB0b3VjaC5wYWdlWSxcbiAgICAgIHRhcmdldDogdG91Y2gudGFyZ2V0XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogRW1pdCBhIHJhdyBldmVudCBhcyBkcmFnZ2VyIGV2ZW50IGludGVybmFsbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2VtaXQgPSBmdW5jdGlvbih0eXBlLCBlKSB7XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KHR5cGUsIHRoaXMuX2NyZWF0ZUV2ZW50KHR5cGUsIGUpKTtcbiAgfTtcblxuICAvKipcbiAgICogSWYgdGhlIHByb3ZpZGVkIGV2ZW50IGlzIGEgUG9pbnRlckV2ZW50IHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGl0IGlmIGl0IGhhc1xuICAgKiB0aGUgc2FtZSBwb2ludGVySWQgYXMgdGhlIGluc3RhbmNlLiBJZiB0aGUgcHJvdmlkZWQgZXZlbnQgaXMgYSBUb3VjaEV2ZW50XG4gICAqIHRoaXMgbWV0aG9kIHdpbGwgdHJ5IHRvIGxvb2sgZm9yIGEgVG91Y2ggaW5zdGFuY2UgaW4gdGhlIGNoYW5nZWRUb3VjaGVzIHRoYXRcbiAgICogaGFzIGFuIGlkZW50aWZpZXIgbWF0Y2hpbmcgdGhpcyBpbnN0YW5jZSdzIHBvaW50ZXJJZC4gSWYgdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAqIGlzIGEgTW91c2VFdmVudCAob3IganVzdCBhbnkgb3RoZXIgZXZlbnQgdGhhbiBQb2ludGVyRXZlbnQgb3IgVG91Y2hFdmVudClcbiAgICogaXQgd2lsbCBiZSByZXR1cm5lZCBpbW1lZGlhdGVseS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfVxuICAgKiBAcmV0dXJucyB7PyhUb3VjaHxQb2ludGVyRXZlbnR8TW91c2VFdmVudCl9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fZ2V0VHJhY2tlZFRvdWNoID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLl9wb2ludGVySWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHJhZ2dlci5fZ2V0VG91Y2hCeUlkKGUsIHRoaXMuX3BvaW50ZXJJZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBIHByZS1oYW5kbGVyIGZvciBzdGFydCBldmVudCB0aGF0IGNoZWNrcyBpZiB3ZSBjYW4gc3RhcnQgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX3ByZVN0YXJ0Q2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgbm90IGJlaW5nIGRyYWdnZWQgY3VycmVudGx5LlxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSkgcmV0dXJuO1xuXG4gICAgLy8gU3BlY2lhbCBjYW5jZWxhYmxlIGNoZWNrIGZvciBBbmRyb2lkIHRvIHByZXZlbnQgZHJhZyBwcm9jZWR1cmUgZnJvbVxuICAgIC8vIHN0YXJ0aW5nIGlmIG5hdGl2ZSBzY3JvbGxpbmcgaXMgaW4gcHJvZ3Jlc3MuIFBhcnQgMS5cbiAgICBpZiAoaXNBbmRyb2lkICYmIGUuY2FuY2VsYWJsZSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIC8vIE1ha2Ugc3VyZSBsZWZ0IGJ1dHRvbiBpcyBwcmVzc2VkIG9uIG1vdXNlLlxuICAgIGlmIChlLmJ1dHRvbikgcmV0dXJuO1xuXG4gICAgLy8gR2V0IChhbmQgc2V0KSBwb2ludGVyIGlkLlxuICAgIHRoaXMuX3BvaW50ZXJJZCA9IERyYWdnZXIuX2dldEV2ZW50UG9pbnRlcklkKGUpO1xuICAgIGlmICh0aGlzLl9wb2ludGVySWQgPT09IG51bGwpIHJldHVybjtcblxuICAgIC8vIFN0b3JlIHRoZSBzdGFydCBldmVudCBhbmQgdHJpZ2dlciBzdGFydCAoYXN5bmMgb3Igc3luYykuIFBvaW50ZXIgZXZlbnRzXG4gICAgLy8gYXJlIGVtaXR0ZWQgYmVmb3JlIHRvdWNoIGV2ZW50cyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBib3RoIG9mIHRoZW0uIEFuZFxuICAgIC8vIGlmIHlvdSB0cnkgdG8gbW92ZSBhbiBlbGVtZW50IGJlZm9yZSBgdG91Y2hzdGFydGAgaXMgZW1pdHRlZCB0aGUgcG9pbnRlclxuICAgIC8vIGV2ZW50cyBmb3IgdGhhdCBlbGVtZW50IHdpbGwgYmUgY2FuY2VsZWQuIFRoZSBmaXggaXMgdG8gZGVsYXkgdGhlIGVtaXR0ZWRcbiAgICAvLyBwb2ludGVyIGV2ZW50cyBpbiBzdWNoIGEgc2NlbmFyaW8gYnkgb25lIGZyYW1lIHNvIHRoYXQgYHRvdWNoc3RhcnRgIGhhc1xuICAgIC8vIHRpbWUgdG8gYmUgZW1pdHRlZCBiZWZvcmUgdGhlIGVsZW1lbnQgaXMgKHBvdGVudGlhbGx5KSBtb3ZlZC5cbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gZTtcbiAgICBpZiAoaGFzVG91Y2hFdmVudHMgJiYgKGhhc1BvaW50ZXJFdmVudHMgfHwgaGFzTXNQb2ludGVyRXZlbnRzKSkge1xuICAgICAgLy8gU3BlY2lhbCBjYW5jZWxhYmxlIGNoZWNrIGZvciBBbmRyb2lkIHRvIHByZXZlbnQgZHJhZyBwcm9jZWR1cmUgZnJvbVxuICAgICAgLy8gc3RhcnRpbmcgaWYgbmF0aXZlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy4gUGFydCAyLlxuICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICAgICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLFxuICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmFmKHRoaXMuX29uU3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblN0YXJ0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBYm9ydCBzdGFydCBldmVudCBpZiBpdCB0dXJucyBvdXQgdG8gYmUgbm9uLWNhbmNlbGFibGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2Fib3J0Tm9uQ2FuY2VsYWJsZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCxcbiAgICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSxcbiAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAodGhpcy5fc3RhcnRFdmVudCAmJiBlLmNhbmNlbGFibGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9wb2ludGVySWQgPSBudWxsO1xuICAgICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgZHJhZyBwcm9jZWR1cmUgaWYgcG9zc2libGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuX3N0YXJ0RXZlbnQ7XG4gICAgaWYgKCFlKSByZXR1cm47XG5cbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHZhciB0b3VjaCA9IHRoaXMuX2dldFRyYWNrZWRUb3VjaChlKTtcbiAgICBpZiAoIXRvdWNoKSByZXR1cm47XG5cbiAgICAvLyBTZXQgdXAgaW5pdCBkYXRhIGFuZCBlbWl0IHN0YXJ0IGV2ZW50LlxuICAgIHRoaXMuX3N0YXJ0WCA9IHRoaXMuX2N1cnJlbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLl9zdGFydFkgPSB0aGlzLl9jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5zdGFydCwgZSk7XG4gICAgRHJhZ2dlci5fYWN0aXZhdGVJbnN0YW5jZSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgbW92ZSBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0b3VjaCA9IHRoaXMuX2dldFRyYWNrZWRUb3VjaChlKTtcbiAgICBpZiAoIXRvdWNoKSByZXR1cm47XG5cbiAgICB0aGlzLl9jdXJyZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy5fY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuX2VtaXQoZXZlbnRzLm1vdmUsIGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBtb3ZlIGNhbmNlbCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25DYW5jZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLl9nZXRUcmFja2VkVG91Y2goZSkpIHJldHVybjtcblxuICAgIHRoaXMuX2VtaXQoZXZlbnRzLmNhbmNlbCwgZSk7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgZW5kIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vbkVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIXRoaXMuX2dldFRyYWNrZWRUb3VjaChlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fZW1pdChldmVudHMuZW5kLCBlKTtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkIGF0IHRoZSBtb21lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2ludGVySWQgIT09IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBlbGVtZW50J3MgdG91Y2gtYWN0aW9uIENTUyBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5zZXRUb3VjaEFjdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gU3RvcmUgdW5tb2RpZmllZCB0b3VjaCBhY3Rpb24gdmFsdWUgKHdlIHRydXN0IHVzZXIgaW5wdXQgaGVyZSkuXG4gICAgdGhpcy5fdG91Y2hBY3Rpb24gPSB2YWx1ZTtcblxuICAgIC8vIFNldCB0b3VjaC1hY3Rpb24gc3R5bGUuXG4gICAgaWYgKHRhUHJvcFByZWZpeGVkKSB7XG4gICAgICB0aGlzLl9jc3NQcm9wc1t0YVByb3BQcmVmaXhlZF0gPSAnJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbdGFQcm9wUHJlZml4ZWRdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBhbiB1bnN1cHBvcnRlZCB0b3VjaC1hY3Rpb24gdmFsdWUgbGV0J3MgYWRkIGEgc3BlY2lhbCBsaXN0ZW5lclxuICAgIC8vIHRoYXQgcHJldmVudHMgZGVmYXVsdCBhY3Rpb24gb24gdG91Y2ggc3RhcnQgZXZlbnQuIEEgZGlydHkgaGFjaywgYnV0IGJlc3RcbiAgICAvLyB3ZSBjYW4gZG8gZm9yIG5vdy4gVGhlIG90aGVyIG9wdGlvbnMgd291bGQgYmUgdG8gc29tZWhvdyBwb2x5ZmlsbCB0aGVcbiAgICAvLyB1bnN1cHBvcnRlZCB0b3VjaCBhY3Rpb24gYmVoYXZpb3Igd2l0aCBjdXN0b20gaGV1cmlzdGljcyB3aGljaCBzb3VuZHMgbGlrZVxuICAgIC8vIGEgY2FuIG9mIHdvcm1zLlxuICAgIGlmIChoYXNUb3VjaEV2ZW50cykge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGVbdGFQcm9wUHJlZml4ZWRdICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgZWxlbWVudCdzIENTUyBwcm9wZXJ0aWVzLiBBY2NlcHRzIGFuIG9iamVjdCB3aXRoIGNhbWVsIGNhc2VkIHN0eWxlXG4gICAqIHByb3BzIHdpdGggdmFsdWUgcGFpcnMgYXMgaXQncyBmaXJzdCBhcmd1bWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtuZXdQcm9wc11cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLnNldENzc1Byb3BzID0gZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICBpZiAoIW5ld1Byb3BzKSByZXR1cm47XG5cbiAgICB2YXIgY3VycmVudFByb3BzID0gdGhpcy5fY3NzUHJvcHM7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBwcm9wO1xuICAgIHZhciBwcmVmaXhlZFByb3A7XG5cbiAgICAvLyBSZXNldCBjdXJyZW50IHByb3BzLlxuICAgIGZvciAocHJvcCBpbiBjdXJyZW50UHJvcHMpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBjdXJyZW50UHJvcHNbcHJvcF07XG4gICAgICBkZWxldGUgY3VycmVudFByb3BzW3Byb3BdO1xuICAgIH1cblxuICAgIC8vIFNldCBuZXcgcHJvcHMuXG4gICAgZm9yIChwcm9wIGluIG5ld1Byb3BzKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbHVlIGZvciB0aGUgcHJvcC5cbiAgICAgIGlmICghbmV3UHJvcHNbcHJvcF0pIGNvbnRpbnVlO1xuXG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0b3VjaC1hY3Rpb24uXG4gICAgICBpZiAocHJvcCA9PT0gdGFQcm9wKSB7XG4gICAgICAgIHRoaXMuc2V0VG91Y2hBY3Rpb24obmV3UHJvcHNbcHJvcF0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHByZWZpeGVkIHByb3AgYW5kIHNraXAgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgICBwcmVmaXhlZFByb3AgPSBnZXRQcmVmaXhlZFByb3BOYW1lKGVsZW1lbnQuc3R5bGUsIHByb3ApO1xuICAgICAgaWYgKCFwcmVmaXhlZFByb3ApIGNvbnRpbnVlO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgcHJvcCBhbmQgYWRkIHRoZSBzdHlsZS5cbiAgICAgIGN1cnJlbnRQcm9wc1twcmVmaXhlZFByb3BdID0gJyc7XG4gICAgICBlbGVtZW50LnN0eWxlW3ByZWZpeGVkUHJvcF0gPSBuZXdQcm9wc1twcm9wXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRoZSBwb2ludGVyIGhhcyBtb3ZlZCBvbiB4LWF4aXMgZnJvbSBzdGFydCBwb3NpdGlvbiwgaW4gcGl4ZWxzLlxuICAgKiBQb3NpdGl2ZSB2YWx1ZSBpbmRpY2F0ZXMgbW92ZW1lbnQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGVsdGFYID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRYIC0gdGhpcy5fc3RhcnRYO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgcG9pbnRlciBoYXMgbW92ZWQgb24geS1heGlzIGZyb20gc3RhcnQgcG9zaXRpb24sIGluIHBpeGVscy5cbiAgICogUG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIG1vdmVtZW50IGZyb20gdG9wIHRvIGJvdHRvbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhWSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50WSAtIHRoaXMuX3N0YXJ0WTtcbiAgfTtcblxuICAvKipcbiAgICogSG93IGZhciAoaW4gcGl4ZWxzKSBoYXMgcG9pbnRlciBtb3ZlZCBmcm9tIHN0YXJ0IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgeCA9IHRoaXMuZ2V0RGVsdGFYKCk7XG4gICAgdmFyIHkgPSB0aGlzLmdldERlbHRhWSgpO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBsb25nIGhhcyBwb2ludGVyIGJlZW4gZHJhZ2dlZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhVGltZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUgPyBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRUaW1lIDogMDtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBkcmFnIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgKiAgIC0gJ3N0YXJ0JywgJ21vdmUnLCAnY2FuY2VsJyBvciAnZW5kJy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBkcmFnIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgKiAgIC0gJ3N0YXJ0JywgJ21vdmUnLCAnY2FuY2VsJyBvciAnZW5kJy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50cywgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHVuYmluZCBhbGwgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcblxuICAgIC8vIFJlc2V0IGRhdGEgYW5kIGRlYWN0aXZhdGUgdGhlIGluc3RhbmNlLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBEZXN0cm95IGVtaXR0ZXIuXG4gICAgdGhpcy5fZW1pdHRlci5kZXN0cm95KCk7XG5cbiAgICAvLyBVbmJpbmQgZXZlbnQgaGFuZGxlcnMuXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fbW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCwgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcblxuICAgIC8vIFJlc2V0IHN0eWxlcy5cbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuX2Nzc1Byb3BzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdGhpcy5fY3NzUHJvcHNbcHJvcF07XG4gICAgICBkZWxldGUgdGhpcy5fY3NzUHJvcHNbcHJvcF07XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgZGF0YS5cbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIE1hcmsgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQSB0aWNrZXIgc3lzdGVtIGZvciBoYW5kbGluZyBET00gcmVhZHMgYW5kIHdyaXRlcyBpbiBhbiBlZmZpY2llbnQgd2F5LlxuICAgKiBDb250YWlucyBhIHJlYWQgcXVldWUgYW5kIGEgd3JpdGUgcXVldWUgdGhhdCBhcmUgcHJvY2Vzc2VkIG9uIHRoZSBuZXh0XG4gICAqIGFuaW1hdGlvbiBmcmFtZSB3aGVuIG5lZWRlZC5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBUaWNrZXIoKSB7XG4gICAgdGhpcy5fbmV4dFN0ZXAgPSBudWxsO1xuXG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9yZWFkcyA9IHt9O1xuICAgIHRoaXMuX3dyaXRlcyA9IHt9O1xuXG4gICAgdGhpcy5fYmF0Y2ggPSBbXTtcbiAgICB0aGlzLl9iYXRjaFJlYWRzID0ge307XG4gICAgdGhpcy5fYmF0Y2hXcml0ZXMgPSB7fTtcblxuICAgIHRoaXMuX3N0ZXAgPSB0aGlzLl9zdGVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBUaWNrZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGlkLCByZWFkT3BlcmF0aW9uLCB3cml0ZU9wZXJhdGlvbiwgaXNQcmlvcml0aXplZCkge1xuICAgIC8vIEZpcnN0LCBsZXQncyBjaGVjayBpZiBhbiBpdGVtIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBxdWV1ZXMgd2l0aCB0aGUgc2FtZSBpZFxuICAgIC8vIGFuZCBpZiBzbyAtPiByZW1vdmUgaXQuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuX3F1ZXVlLmluZGV4T2YoaWQpO1xuICAgIGlmIChjdXJyZW50SW5kZXggPiAtMSkgdGhpcy5fcXVldWVbY3VycmVudEluZGV4XSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEFkZCBlbnRyeS5cbiAgICBpc1ByaW9yaXRpemVkID8gdGhpcy5fcXVldWUudW5zaGlmdChpZCkgOiB0aGlzLl9xdWV1ZS5wdXNoKGlkKTtcbiAgICB0aGlzLl9yZWFkc1tpZF0gPSByZWFkT3BlcmF0aW9uO1xuICAgIHRoaXMuX3dyaXRlc1tpZF0gPSB3cml0ZU9wZXJhdGlvbjtcblxuICAgIC8vIEZpbmFsbHksIGxldCdzIGtpY2stc3RhcnQgdGhlIG5leHQgdGljayBpZiBpdCBpcyBub3QgcnVubmluZyB5ZXQuXG4gICAgaWYgKCF0aGlzLl9uZXh0U3RlcCkgdGhpcy5fbmV4dFN0ZXAgPSByYWYodGhpcy5fc3RlcCk7XG4gIH07XG5cbiAgVGlja2VyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbihpZCkge1xuICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLl9xdWV1ZS5pbmRleE9mKGlkKTtcbiAgICBpZiAoY3VycmVudEluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3F1ZXVlW2N1cnJlbnRJbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fcmVhZHNbaWRdO1xuICAgICAgZGVsZXRlIHRoaXMuX3dyaXRlc1tpZF07XG4gICAgfVxuICB9O1xuXG4gIFRpY2tlci5wcm90b3R5cGUuX3N0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgcmVhZHMgPSB0aGlzLl9yZWFkcztcbiAgICB2YXIgd3JpdGVzID0gdGhpcy5fd3JpdGVzO1xuICAgIHZhciBiYXRjaCA9IHRoaXMuX2JhdGNoO1xuICAgIHZhciBiYXRjaFJlYWRzID0gdGhpcy5fYmF0Y2hSZWFkcztcbiAgICB2YXIgYmF0Y2hXcml0ZXMgPSB0aGlzLl9iYXRjaFdyaXRlcztcbiAgICB2YXIgbGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICAgIHZhciBpZDtcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlc2V0IHRpY2tlci5cbiAgICB0aGlzLl9uZXh0U3RlcCA9IG51bGw7XG5cbiAgICAvLyBTZXR1cCBxdWV1ZXMgYW5kIGNhbGxiYWNrIHBsYWNlaG9sZGVycy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkID0gcXVldWVbaV07XG4gICAgICBpZiAoIWlkKSBjb250aW51ZTtcblxuICAgICAgYmF0Y2gucHVzaChpZCk7XG5cbiAgICAgIGJhdGNoUmVhZHNbaWRdID0gcmVhZHNbaWRdO1xuICAgICAgZGVsZXRlIHJlYWRzW2lkXTtcblxuICAgICAgYmF0Y2hXcml0ZXNbaWRdID0gd3JpdGVzW2lkXTtcbiAgICAgIGRlbGV0ZSB3cml0ZXNbaWRdO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHF1ZXVlLlxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBQcm9jZXNzIHJlYWQgY2FsbGJhY2tzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWQgPSBiYXRjaFtpXTtcbiAgICAgIGlmIChiYXRjaFJlYWRzW2lkXSkge1xuICAgICAgICBiYXRjaFJlYWRzW2lkXSgpO1xuICAgICAgICBkZWxldGUgYmF0Y2hSZWFkc1tpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvY2VzcyB3cml0ZSBjYWxsYmFja3MuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZCA9IGJhdGNoW2ldO1xuICAgICAgaWYgKGJhdGNoV3JpdGVzW2lkXSkge1xuICAgICAgICBiYXRjaFdyaXRlc1tpZF0oKTtcbiAgICAgICAgZGVsZXRlIGJhdGNoV3JpdGVzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXNldCBiYXRjaC5cbiAgICBiYXRjaC5sZW5ndGggPSAwO1xuXG4gICAgLy8gUmVzdGFydCB0aGUgdGlja2VyIGlmIG5lZWRlZC5cbiAgICBpZiAoIXRoaXMuX25leHRTdGVwICYmIHF1ZXVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5fbmV4dFN0ZXAgPSByYWYodGhpcy5fc3RlcCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB0aWNrZXIgPSBuZXcgVGlja2VyKCk7XG5cbiAgdmFyIGxheW91dFRpY2sgPSAnbGF5b3V0JztcbiAgdmFyIHZpc2liaWxpdHlUaWNrID0gJ3Zpc2liaWxpdHknO1xuICB2YXIgbW92ZVRpY2sgPSAnbW92ZSc7XG4gIHZhciBzY3JvbGxUaWNrID0gJ3Njcm9sbCc7XG4gIHZhciBwbGFjZWhvbGRlclRpY2sgPSAncGxhY2Vob2xkZXInO1xuXG4gIGZ1bmN0aW9uIGFkZExheW91dFRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBsYXlvdXRUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsTGF5b3V0VGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBsYXlvdXRUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFZpc2liaWxpdHlUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgdmlzaWJpbGl0eVRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxWaXNpYmlsaXR5VGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyB2aXNpYmlsaXR5VGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNb3ZlVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIG1vdmVUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2ssIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsTW92ZVRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgbW92ZVRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2Nyb2xsVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHNjcm9sbFRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxTY3JvbGxUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIHNjcm9sbFRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUGxhY2Vob2xkZXJUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgcGxhY2Vob2xkZXJUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIHBsYWNlaG9sZGVyVGljayk7XG4gIH1cblxuICB2YXIgRWxQcm90byA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZTtcbiAgdmFyIG1hdGNoZXNGbiA9XG4gICAgRWxQcm90by5tYXRjaGVzIHx8XG4gICAgRWxQcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGVsZW1lbnQgbWF0Y2hlcyBhIENTUyBzZWxlY3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBlbGVtZW50TWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbWF0Y2hlc0ZuLmNhbGwoZWwsIHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2xhc3MgdG8gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXRjaGVzKGVsZW1lbnQsICcuJyArIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciB0ZW1wQXJyYXkgPSBbXTtcbiAgdmFyIG51bWJlclR5cGUgPSAnbnVtYmVyJztcblxuICAvKipcbiAgICogSW5zZXJ0IGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgdG8gYXJyYXkgdG8gYSBzcGVjaWZpZWQgaW5kZXguIE11dGF0ZXNcbiAgICogdGhlIGFycmF5LiBUaGUgaW5kZXggY2FuIGJlIG5lZ2F0aXZlIGluIHdoaWNoIGNhc2UgdGhlIGl0ZW1zIHdpbGwgYmUgYWRkZWRcbiAgICogdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleD0tMV1cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5SW5zZXJ0KGFycmF5LCBpdGVtcywgaW5kZXgpIHtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gbnVtYmVyVHlwZSA/IGluZGV4IDogLTE7XG4gICAgaWYgKHN0YXJ0SW5kZXggPCAwKSBzdGFydEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gc3RhcnRJbmRleCArIDE7XG5cbiAgICBhcnJheS5zcGxpY2UuYXBwbHkoYXJyYXksIHRlbXBBcnJheS5jb25jYXQoc3RhcnRJbmRleCwgMCwgaXRlbXMpKTtcbiAgICB0ZW1wQXJyYXkubGVuZ3RoID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgYXJyYXkgaW5kZXguIEJhc2ljYWxseSB0aGlzIGZ1bmN0aW9uIG1ha2VzIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWRcbiAgICogYXJyYXkgaW5kZXggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBhbHNvIHRyYW5zZm9ybXNcbiAgICogbmVnYXRpdmUgaW5kZXggdG8gdGhlIG1hdGNoaW5nIHBvc2l0aXZlIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtCb29sZWFufSBpc01pZ3JhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgaW5kZXgsIGlzTWlncmF0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgbWF4SW5kZXggPSBNYXRoLm1heCgwLCBpc01pZ3JhdGlvbiA/IGxlbmd0aCA6IGxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBpbmRleCA+IG1heEluZGV4ID8gbWF4SW5kZXggOiBpbmRleCA8IDAgPyBNYXRoLm1heChtYXhJbmRleCArIGluZGV4ICsgMSwgMCkgOiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGFycmF5IGl0ZW0gdG8gYW5vdGhlciBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgaXRlbSB0aGF0IHdpbGwgYmUgbW92ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIHdoZXJlIHRoZSBpdGVtIHNob3VsZCBiZSBtb3ZlZCB0by5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5TW92ZShhcnJheSwgZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBhcnJheSBoYXMgdHdvIG9yIG1vcmUgaXRlbXMuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybjtcblxuICAgIC8vIE5vcm1hbGl6ZSB0aGUgaW5kaWNlcy5cbiAgICB2YXIgZnJvbSA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGZyb21JbmRleCk7XG4gICAgdmFyIHRvID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgdG9JbmRleCk7XG5cbiAgICAvLyBBZGQgdGFyZ2V0IGl0ZW0gdG8gdGhlIG5ldyBwb3NpdGlvbi5cbiAgICBpZiAoZnJvbSAhPT0gdG8pIHtcbiAgICAgIGFycmF5LnNwbGljZSh0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dhcCBhcnJheSBpdGVtcy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIG9mIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBzd2FwcGVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gd2l0aEluZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIG9mIHRoZSBvdGhlciBpdGVtIHRoYXQgd2lsbCBiZSBzd2FwcGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlTd2FwKGFycmF5LCBpbmRleCwgd2l0aEluZGV4KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBhcnJheSBoYXMgdHdvIG9yIG1vcmUgaXRlbXMuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybjtcblxuICAgIC8vIE5vcm1hbGl6ZSB0aGUgaW5kaWNlcy5cbiAgICB2YXIgaW5kZXhBID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgaW5kZXgpO1xuICAgIHZhciBpbmRleEIgPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCB3aXRoSW5kZXgpO1xuICAgIHZhciB0ZW1wO1xuXG4gICAgLy8gU3dhcCB0aGUgaXRlbXMuXG4gICAgaWYgKGluZGV4QSAhPT0gaW5kZXhCKSB7XG4gICAgICB0ZW1wID0gYXJyYXlbaW5kZXhBXTtcbiAgICAgIGFycmF5W2luZGV4QV0gPSBhcnJheVtpbmRleEJdO1xuICAgICAgYXJyYXlbaW5kZXhCXSA9IHRlbXA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFjdGlvbkNhbmNlbCA9ICdjYW5jZWwnO1xuICB2YXIgYWN0aW9uRmluaXNoID0gJ2ZpbmlzaCc7XG4gIHZhciBkZWJvdW5jZVRpY2sgPSAnZGVib3VuY2UnO1xuICB2YXIgZGVib3VuY2VJZCA9IDA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgICogYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAgKiBOIG1pbGxpc2Vjb25kcy4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIGFjY2VwdHMgb25lIGFyZ3VtZW50IHdoaWNoLCB3aGVuXG4gICAqIGJlaW5nIFwiZmluaXNoXCIsIGNhbGxzIHRoZSBkZWJvdW5jZSBmdW5jdGlvbiBpbW1lZGlhdGVseSBpZiBpdCBpcyBjdXJyZW50bHlcbiAgICogd2FpdGluZyB0byBiZSBjYWxsZWQsIGFuZCB3aGVuIGJlaW5nIFwiY2FuY2VsXCIgY2FuY2VscyB0aGUgY3VycmVudGx5IHF1ZXVlZFxuICAgKiBmdW5jdGlvbiBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge051bWJlcn0gd2FpdFxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBkZWJvdW5jZShmbiwgd2FpdCkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHZhciB0aWNrZXJJZCA9ICsrZGVib3VuY2VJZCArIGRlYm91bmNlVGljaztcblxuICAgIGlmICh3YWl0ID4gMCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICBpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGlja2VyLmNhbmNlbCh0aWNrZXJJZCk7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gYWN0aW9uRmluaXNoKSBmbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gYWN0aW9uQ2FuY2VsICYmIGFjdGlvbiAhPT0gYWN0aW9uRmluaXNoKSB7XG4gICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRpY2tlci5hZGQodGlja2VySWQsIGZuLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICB9LCB3YWl0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICBpZiAoYWN0aW9uICE9PSBhY3Rpb25DYW5jZWwpIGZuKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZWxlbWVudCBpcyB0cmFuc2Zvcm1lZCwgZmFsc2UgaWYgbm90LiBJbiBwcmFjdGljZSB0aGVcbiAgICogZWxlbWVudCdzIGRpc3BsYXkgdmFsdWUgbXVzdCBiZSBhbnl0aGluZyBlbHNlIHRoYW4gXCJub25lXCIgb3IgXCJpbmxpbmVcIiBhc1xuICAgKiB3ZWxsIGFzIGhhdmUgYSB2YWxpZCB0cmFuc2Zvcm0gdmFsdWUgYXBwbGllZCBpbiBvcmRlciB0byBiZSBjb3VudGVkIGFzIGFcbiAgICogdHJhbnNmb3JtZWQgZWxlbWVudC5cbiAgICpcbiAgICogQm9ycm93ZWQgZnJvbSBNZXpyICh2MC42LjEpOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzcmFtby9tZXpyL2Jsb2IvMC42LjEvbWV6ci5qcyNMNjYxXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1RyYW5zZm9ybWVkKGVsZW1lbnQpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gZ2V0U3R5bGUoZWxlbWVudCwgJ3RyYW5zZm9ybScpO1xuICAgIGlmICghdHJhbnNmb3JtIHx8IHRyYW5zZm9ybSA9PT0gJ25vbmUnKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgZGlzcGxheSA9IGdldFN0eWxlKGVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgaWYgKGRpc3BsYXkgPT09ICdpbmxpbmUnIHx8IGRpc3BsYXkgPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhYnNvbHV0ZSBwb3NpdGlvbmVkIGVsZW1lbnQncyBjb250YWluaW5nIGJsb2NrLCB3aGljaCBpc1xuICAgKiBjb25zaWRlcmVkIHRvIGJlIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGVsZW1lbnQgdGhhdCB0aGUgdGFyZ2V0IGVsZW1lbnQnc1xuICAgKiBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0by4gRGlzY2xhaW1lcjogdGhpcyBvbmx5IHdvcmtzIGFzIGludGVuZGVkIGZvclxuICAgKiBhYnNvbHV0ZSBwb3NpdGlvbmVkIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luY2x1ZGVTZWxmPWZhbHNlXVxuICAgKiAgIC0gV2hlbiB0aGlzIGlzIHNldCB0byB0cnVlIHRoZSBjb250YWluaW5nIGJsb2NrIGNoZWNraW5nIGlzIHN0YXJ0ZWQgZnJvbVxuICAgKiAgICAgdGhlIHByb3ZpZGVkIGVsZW1lbnQuIE90aGVyd2lzZSB0aGUgY2hlY2tpbmcgaXMgc3RhcnRlZCBmcm9tIHRoZVxuICAgKiAgICAgcHJvdmlkZWQgZWxlbWVudCdzIHBhcmVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7KERvY3VtZW50fEVsZW1lbnQpfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQsIGluY2x1ZGVTZWxmKSB7XG4gICAgLy8gQXMgbG9uZyBhcyB0aGUgY29udGFpbmluZyBibG9jayBpcyBhbiBlbGVtZW50LCBzdGF0aWMgYW5kIG5vdFxuICAgIC8vIHRyYW5zZm9ybWVkLCB0cnkgdG8gZ2V0IHRoZSBlbGVtZW50J3MgcGFyZW50IGVsZW1lbnQgYW5kIGZhbGxiYWNrIHRvXG4gICAgLy8gZG9jdW1lbnQuIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXNyYW1vL21lenIvYmxvYi8wLjYuMS9tZXpyLmpzI0wzMzlcbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgdmFyIHJldCA9IChpbmNsdWRlU2VsZiA/IGVsZW1lbnQgOiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHx8IGRvY3VtZW50O1xuICAgIHdoaWxlIChyZXQgJiYgcmV0ICE9PSBkb2N1bWVudCAmJiBnZXRTdHlsZShyZXQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJyAmJiAhaXNUcmFuc2Zvcm1lZChyZXQpKSB7XG4gICAgICByZXQgPSByZXQucGFyZW50RWxlbWVudCB8fCBkb2N1bWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiBhbiBlbGVtZW50J3Mgc3R5bGUgcHJvcGVydHkgdHJhbnNmb3JtZWQgaW50b1xuICAgKiBhIGZsb2F0IHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlQXNGbG9hdChlbCwgc3R5bGUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChnZXRTdHlsZShlbCwgc3R5bGUpKSB8fCAwO1xuICB9XG5cbiAgdmFyIG9mZnNldEEgPSB7fTtcbiAgdmFyIG9mZnNldEIgPSB7fTtcbiAgdmFyIG9mZnNldERpZmYgPSB7fTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCdzIGRvY3VtZW50IG9mZnNldCwgd2hpY2ggaW4gcHJhY3RpY2UgbWVhbnMgdGhlIHZlcnRpY2FsXG4gICAqIGFuZCBob3Jpem9udGFsIGRpc3RhbmNlIGJldHdlZW4gdGhlIGVsZW1lbnQncyBub3J0aHdlc3QgY29ybmVyIGFuZCB0aGVcbiAgICogZG9jdW1lbnQncyBub3J0aHdlc3QgY29ybmVyLiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBhbHdheXMgcmV0dXJucyB0aGUgc2FtZVxuICAgKiBvYmplY3Qgc28gYmUgc3VyZSB0byByZWFkIHRoZSBkYXRhIGZyb20gaXQgaW5zdGVhZCB1c2luZyBpdCBhcyBhIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHsoRG9jdW1lbnR8RWxlbWVudHxXaW5kb3cpfSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb2Zmc2V0RGF0YV1cbiAgICogICAtIE9wdGlvbmFsIGRhdGEgb2JqZWN0IHdoZXJlIHRoZSBvZmZzZXQgZGF0YSB3aWxsIGJlIGluc2VydGVkIHRvLiBJZiBub3RcbiAgICogICAgIHByb3ZpZGVkIGEgbmV3IG9iamVjdCB3aWxsIGJlIGNyZWF0ZWQgZm9yIHRoZSByZXR1cm4gZGF0YS5cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldE9mZnNldChlbGVtZW50LCBvZmZzZXREYXRhKSB7XG4gICAgdmFyIHJldCA9IG9mZnNldERhdGEgfHwge307XG4gICAgdmFyIHJlY3Q7XG5cbiAgICAvLyBTZXQgdXAgcmV0dXJuIGRhdGEuXG4gICAgcmV0LmxlZnQgPSAwO1xuICAgIHJldC50b3AgPSAwO1xuXG4gICAgLy8gRG9jdW1lbnQncyBvZmZzZXRzIGFyZSBhbHdheXMgMC5cbiAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQpIHJldHVybiByZXQ7XG5cbiAgICAvLyBBZGQgdmlld3BvcnQgc2Nyb2xsIGxlZnQvdG9wIHRvIHRoZSByZXNwZWN0aXZlIG9mZnNldHMuXG4gICAgcmV0LmxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgMDtcbiAgICByZXQudG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IDA7XG5cbiAgICAvLyBXaW5kb3cncyBvZmZzZXRzIGFyZSB0aGUgdmlld3BvcnQgc2Nyb2xsIGxlZnQvdG9wIHZhbHVlcy5cbiAgICBpZiAoZWxlbWVudC5zZWxmID09PSB3aW5kb3cuc2VsZikgcmV0dXJuIHJldDtcblxuICAgIC8vIEFkZCBlbGVtZW50J3MgY2xpZW50IHJlY3RzIHRvIHRoZSBvZmZzZXRzLlxuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldC5sZWZ0ICs9IHJlY3QubGVmdDtcbiAgICByZXQudG9wICs9IHJlY3QudG9wO1xuXG4gICAgLy8gRXhjbHVkZSBlbGVtZW50J3MgYm9yZGVycyBmcm9tIHRoZSBvZmZzZXQuXG4gICAgcmV0LmxlZnQgKz0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItbGVmdC13aWR0aCcpO1xuICAgIHJldC50b3AgKz0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItdG9wLXdpZHRoJyk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgb2Zmc2V0IGRpZmZlcmVuY2UgdHdvIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtQVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtQlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjb21wYXJlQ29udGFpbmluZ0Jsb2Nrcz1mYWxzZV1cbiAgICogICAtIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSB0aGUgY29udGFpbmluZyBibG9ja3Mgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRzXG4gICAqICAgICB3aWxsIGJlIHVzZWQgZm9yIGNhbGN1bGF0aW5nIHRoZSBkaWZmZXJlbmNlLiBPdGhlcndpc2UgdGhlIHByb3ZpZGVkXG4gICAqICAgICBlbGVtZW50cyB3aWxsIGJlIGNvbXBhcmVkIGRpcmVjdGx5LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0RGlmZihlbGVtQSwgZWxlbUIsIGNvbXBhcmVDb250YWluaW5nQmxvY2tzKSB7XG4gICAgb2Zmc2V0RGlmZi5sZWZ0ID0gMDtcbiAgICBvZmZzZXREaWZmLnRvcCA9IDA7XG5cbiAgICAvLyBJZiBlbGVtZW50cyBhcmUgc2FtZSBsZXQncyByZXR1cm4gZWFybHkuXG4gICAgaWYgKGVsZW1BID09PSBlbGVtQikgcmV0dXJuIG9mZnNldERpZmY7XG5cbiAgICAvLyBDb21wYXJlIGNvbnRhaW5pbmcgYmxvY2tzIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoY29tcGFyZUNvbnRhaW5pbmdCbG9ja3MpIHtcbiAgICAgIGVsZW1BID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1BLCB0cnVlKTtcbiAgICAgIGVsZW1CID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1CLCB0cnVlKTtcblxuICAgICAgLy8gSWYgY29udGFpbmluZyBibG9ja3MgYXJlIGlkZW50aWNhbCwgbGV0J3MgcmV0dXJuIGVhcmx5LlxuICAgICAgaWYgKGVsZW1BID09PSBlbGVtQikgcmV0dXJuIG9mZnNldERpZmY7XG4gICAgfVxuXG4gICAgLy8gRmluYWxseSwgbGV0J3MgY2FsY3VsYXRlIHRoZSBvZmZzZXQgZGlmZi5cbiAgICBnZXRPZmZzZXQoZWxlbUEsIG9mZnNldEEpO1xuICAgIGdldE9mZnNldChlbGVtQiwgb2Zmc2V0Qik7XG4gICAgb2Zmc2V0RGlmZi5sZWZ0ID0gb2Zmc2V0Qi5sZWZ0IC0gb2Zmc2V0QS5sZWZ0O1xuICAgIG9mZnNldERpZmYudG9wID0gb2Zmc2V0Qi50b3AgLSBvZmZzZXRBLnRvcDtcblxuICAgIHJldHVybiBvZmZzZXREaWZmO1xuICB9XG5cbiAgdmFyIHN0eWxlT3ZlcmZsb3cgPSAnb3ZlcmZsb3cnO1xuICB2YXIgc3R5bGVPdmVyZmxvd1ggPSAnb3ZlcmZsb3cteCc7XG4gIHZhciBzdHlsZU92ZXJmbG93WSA9ICdvdmVyZmxvdy15JztcbiAgdmFyIG92ZXJmbG93QXV0byA9ICdhdXRvJztcbiAgdmFyIG92ZXJmbG93U2Nyb2xsID0gJ3Njcm9sbCc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtZW50KSB7XG4gICAgdmFyIG92ZXJmbG93ID0gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVPdmVyZmxvdyk7XG4gICAgaWYgKG92ZXJmbG93ID09PSBvdmVyZmxvd0F1dG8gfHwgb3ZlcmZsb3cgPT09IG92ZXJmbG93U2Nyb2xsKSByZXR1cm4gdHJ1ZTtcblxuICAgIG92ZXJmbG93ID0gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVPdmVyZmxvd1gpO1xuICAgIGlmIChvdmVyZmxvdyA9PT0gb3ZlcmZsb3dBdXRvIHx8IG92ZXJmbG93ID09PSBvdmVyZmxvd1Njcm9sbCkgcmV0dXJuIHRydWU7XG5cbiAgICBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3dZKTtcbiAgICBpZiAob3ZlcmZsb3cgPT09IG92ZXJmbG93QXV0byB8fCBvdmVyZmxvdyA9PT0gb3ZlcmZsb3dTY3JvbGwpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3QgZWxlbWVudCdzIGFuY2VzdG9ycyB0aGF0IGFyZSBwb3RlbnRpYWxseSBzY3JvbGxhYmxlIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luY2x1ZGVTZWxmPWZhbHNlXVxuICAgKiBAcGFyYW0ge0FycmF5fSBbZGF0YV1cbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyhlbGVtZW50LCBpbmNsdWRlU2VsZiwgZGF0YSkge1xuICAgIHZhciByZXQgPSBkYXRhIHx8IFtdO1xuICAgIHZhciBwYXJlbnQgPSBpbmNsdWRlU2VsZiA/IGVsZW1lbnQgOiBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAvLyBGaW5kIHNjcm9sbCBwYXJlbnRzLlxuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgLy8gSWYgZWxlbWVudCBpcyBpbnNpZGUgU2hhZG93RE9NIGxldCdzIGdldCBpdCdzIGhvc3Qgbm9kZSBmcm9tIHRoZSByZWFsXG4gICAgICAvLyBET00gYW5kIGNvbnRpbnVlIGxvb3BpbmcuXG4gICAgICBpZiAocGFyZW50LmdldFJvb3ROb2RlICYmIHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LmdldFJvb3ROb2RlKCkuaG9zdDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSBsZXQncyBhZGQgaXQgdG8gdGhlIHNjcm9sbGFibGUgbGlzdC5cbiAgICAgIGlmIChpc1Njcm9sbGFibGUocGFyZW50KSkge1xuICAgICAgICByZXQucHVzaChwYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgYWRkIHdpbmRvdyB0byB0aGUgcmVzdWx0cy5cbiAgICByZXQucHVzaCh3aW5kb3cpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGVWYWx1ZSA9IHt9O1xuICB2YXIgdHJhbnNmb3JtU3R5bGUkMiA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgdHJhbnNmb3JtTm9uZSA9ICdub25lJztcbiAgdmFyIHJ4TWF0M2QgPSAvXm1hdHJpeDNkLztcbiAgdmFyIHJ4TWF0VHggPSAvKFteLF0qLCl7NH0vO1xuICB2YXIgcnhNYXQzZFR4ID0gLyhbXixdKiwpezEyfS87XG4gIHZhciByeE5leHRJdGVtID0gL1teLF0qLC87XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQncyBjb21wdXRlZCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHZhbHVlcyBhcyBhIGZsb2F0cy5cbiAgICogVGhlIHJldHVybmVkIG9iamVjdCBpcyBhbHdheXMgdGhlIHNhbWUgb2JqZWN0IGFuZCB1cGRhdGVkIGV2ZXJ5IHRpbWUgdGhpc1xuICAgKiBmdW5jdGlvbiBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbGVtZW50KSB7XG4gICAgdHJhbnNsYXRlVmFsdWUueCA9IDA7XG4gICAgdHJhbnNsYXRlVmFsdWUueSA9IDA7XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gZ2V0U3R5bGUoZWxlbWVudCwgdHJhbnNmb3JtU3R5bGUkMik7XG4gICAgaWYgKCF0cmFuc2Zvcm0gfHwgdHJhbnNmb3JtID09PSB0cmFuc2Zvcm1Ob25lKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIHN0eWxlIGNhbiBiZSBpbiBlaXRoZXIgbWF0cml4M2QoLi4uKSBvciBtYXRyaXgoLi4uKS5cbiAgICB2YXIgaXNNYXQzZCA9IHJ4TWF0M2QudGVzdCh0cmFuc2Zvcm0pO1xuICAgIHZhciB0WCA9IHRyYW5zZm9ybS5yZXBsYWNlKGlzTWF0M2QgPyByeE1hdDNkVHggOiByeE1hdFR4LCAnJyk7XG4gICAgdmFyIHRZID0gdFgucmVwbGFjZShyeE5leHRJdGVtLCAnJyk7XG5cbiAgICB0cmFuc2xhdGVWYWx1ZS54ID0gcGFyc2VGbG9hdCh0WCkgfHwgMDtcbiAgICB0cmFuc2xhdGVWYWx1ZS55ID0gcGFyc2VGbG9hdCh0WSkgfHwgMDtcblxuICAgIHJldHVybiB0cmFuc2xhdGVWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZSBpbnRvIENTUyB0cmFuc2Zvcm0gc3R5bGVcbiAgICogcHJvcGVydHkncyB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFRyYW5zbGF0ZVN0cmluZyh4LCB5KSB7XG4gICAgcmV0dXJuICd0cmFuc2xhdGVYKCcgKyB4ICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB5ICsgJ3B4KSc7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNsYXNzIGZyb20gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudE1hdGNoZXMoZWxlbWVudCwgJy4nICsgY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJylcbiAgICAgICAgICAucmVwbGFjZSgnICcgKyBjbGFzc05hbWUgKyAnICcsICcgJylcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERyYWcgc3RhcnQgcHJlZGljYXRlIHN0YXRlcy5cbiAgdmFyIHN0YXJ0UHJlZGljYXRlSW5hY3RpdmUgPSAwO1xuICB2YXIgc3RhcnRQcmVkaWNhdGVQZW5kaW5nID0gMTtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQgPSAyO1xuICB2YXIgc3RhcnRQcmVkaWNhdGVSZWplY3RlZCA9IDM7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG91Y2ggaW50ZXJhY3Rpb24gdG8gYW4gaXRlbS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbURyYWcoaXRlbSkge1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fZ3JpZElkID0gZ3JpZC5faWQ7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGZhbHNlO1xuXG4gICAgLy8gU3RhcnQgcHJlZGljYXRlIGRhdGEuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGUgPSBpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZSlcbiAgICAgID8gc2V0dGluZ3MuZHJhZ1N0YXJ0UHJlZGljYXRlXG4gICAgICA6IEl0ZW1EcmFnLmRlZmF1bHRTdGFydFByZWRpY2F0ZTtcbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZTtcbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIERhdGEgZm9yIGRyYWcgc29ydCBwcmVkaWNhdGUgaGV1cmlzdGljcy5cbiAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9oWDEgPSAwO1xuICAgIHRoaXMuX2hYMiA9IDA7XG4gICAgdGhpcy5faFkxID0gMDtcbiAgICB0aGlzLl9oWTIgPSAwO1xuXG4gICAgLy8gU2V0dXAgaXRlbSdzIGluaXRpYWwgZHJhZyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBCaW5kIHRoZSBtZXRob2RzIHRoYXQgbmVlZHMgYmluZGluZy5cbiAgICB0aGlzLl9wcmVTdGFydENoZWNrID0gdGhpcy5fcHJlU3RhcnRDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZUVuZENoZWNrID0gdGhpcy5fcHJlRW5kQ2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblNjcm9sbCA9IHRoaXMuX29uU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcHJlcGFyZU1vdmUgPSB0aGlzLl9wcmVwYXJlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2FwcGx5TW92ZSA9IHRoaXMuX2FwcGx5TW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZXBhcmVTY3JvbGwgPSB0aGlzLl9wcmVwYXJlU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYXBwbHlTY3JvbGwgPSB0aGlzLl9hcHBseVNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2NoZWNrT3ZlcmxhcCA9IHRoaXMuX2NoZWNrT3ZlcmxhcC5iaW5kKHRoaXMpO1xuXG4gICAgLy8gQ3JlYXRlIGRlYm91bmNlIG92ZXJsYXAgY2hlY2tlciBmdW5jdGlvbi5cbiAgICB2YXIgc29ydEludGVydmFsID0gc2V0dGluZ3MuZHJhZ1NvcnRIZXVyaXN0aWNzLnNvcnRJbnRlcnZhbDtcbiAgICB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSA9IGRlYm91bmNlKHRoaXMuX2NoZWNrT3ZlcmxhcCwgc29ydEludGVydmFsKTtcblxuICAgIC8vIEluaXQgZHJhZ2dlci5cbiAgICB0aGlzLl9kcmFnZ2VyID0gbmV3IERyYWdnZXIoZWxlbWVudCwgc2V0dGluZ3MuZHJhZ0Nzc1Byb3BzKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdzdGFydCcsIHRoaXMuX3ByZVN0YXJ0Q2hlY2spO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ21vdmUnLCB0aGlzLl9wcmVTdGFydENoZWNrKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdjYW5jZWwnLCB0aGlzLl9wcmVFbmRDaGVjayk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignZW5kJywgdGhpcy5fcHJlRW5kQ2hlY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBzdGF0aWMgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZHJhZyBzdGFydCBwcmVkaWNhdGUgaGFuZGxlciB0aGF0IGhhbmRsZXMgYW5jaG9yIGVsZW1lbnRzXG4gICAqIGdyYWNlZnVsbHkuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpcyBmdW5jdGlvbiBkZWZpbmVzIGlmIHRoZSBkcmFnIGlzXG4gICAqIHN0YXJ0ZWQsIHJlamVjdGVkIG9yIHBlbmRpbmcuIFdoZW4gdHJ1ZSBpcyByZXR1cm5lZCB0aGUgZHJhZ2dpbmcgaXMgc3RhcnRlZFxuICAgKiBhbmQgd2hlbiBmYWxzZSBpcyByZXR1cm5lZCB0aGUgZHJhZ2dpbmcgaXMgcmVqZWN0ZWQuIElmIG5vdGhpbmcgaXMgcmV0dXJuZWRcbiAgICogdGhlIHByZWRpY2F0ZSB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBvbiB0aGUgbmV4dCBkcmFnIG1vdmVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogICAtIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIHRvIHBhc3MgdGhlIHByZWRpY2F0ZVxuICAgKiAgICAgaXQncyBvcHRpb25zIG1hbnVhbGx5LiBCeSBkZWZhdWx0IHRoZSBwcmVkaWNhdGUgcmV0cmlldmVzIHRoZSBvcHRpb25zXG4gICAqICAgICBmcm9tIHRoZSBncmlkJ3Mgc2V0dGluZ3MuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcuZGVmYXVsdFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oaXRlbSwgZXZlbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgZHJhZyA9IGl0ZW0uX2RyYWc7XG4gICAgdmFyIHByZWRpY2F0ZSA9IGRyYWcuX3N0YXJ0UHJlZGljYXRlRGF0YSB8fCBkcmFnLl9zZXR1cFN0YXJ0UHJlZGljYXRlKG9wdGlvbnMpO1xuXG4gICAgLy8gRmluYWwgZXZlbnQgbG9naWMuIEF0IHRoaXMgc3RhZ2UgcmV0dXJuIHZhbHVlIGRvZXMgbm90IG1hdHRlciBhbnltb3JlLFxuICAgIC8vIHRoZSBwcmVkaWNhdGUgaXMgZWl0aGVyIHJlc29sdmVkIG9yIGl0J3Mgbm90IGFuZCB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cbiAgICAvLyBhYm91dCBpdC4gSGVyZSB3ZSBqdXN0IHJlc2V0IGRhdGEgYW5kIGlmIHRoZSBpdGVtIGVsZW1lbnQgaXMgYSBsaW5rXG4gICAgLy8gd2UgZm9sbG93IGl0IChpZiB0aGVyZSBoYXMgb25seSBiZWVuIHNsaWdodCBtb3ZlbWVudCkuXG4gICAgaWYgKGV2ZW50LmlzRmluYWwpIHtcbiAgICAgIGRyYWcuX2ZpbmlzaFN0YXJ0UHJlZGljYXRlKGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGFuZCBzdG9yZSB0aGUgaGFuZGxlIGVsZW1lbnQgc28gd2UgY2FuIGNoZWNrIGxhdGVyIG9uIGlmIHRoZVxuICAgIC8vIGN1cnNvciBpcyB3aXRoaW4gdGhlIGhhbmRsZS4gSWYgd2UgaGF2ZSBhIGhhbmRsZSBzZWxlY3RvciBsZXQncyBmaW5kXG4gICAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudC4gT3RoZXJ3aXNlIGxldCdzIHVzZSB0aGUgaXRlbSBlbGVtZW50IGFzIHRoZVxuICAgIC8vIGhhbmRsZS5cbiAgICBpZiAoIXByZWRpY2F0ZS5oYW5kbGVFbGVtZW50KSB7XG4gICAgICBwcmVkaWNhdGUuaGFuZGxlRWxlbWVudCA9IGRyYWcuX2dldFN0YXJ0UHJlZGljYXRlSGFuZGxlKGV2ZW50KTtcbiAgICAgIGlmICghcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiBkZWxheSBpcyBkZWZpbmVkIGxldCdzIGtlZXAgdHJhY2sgb2YgdGhlIGxhdGVzdCBldmVudCBhbmQgaW5pdGlhdGVcbiAgICAvLyBkZWxheSBpZiBpdCBoYXMgbm90IGJlZW4gZG9uZSB5ZXQuXG4gICAgaWYgKHByZWRpY2F0ZS5kZWxheSkge1xuICAgICAgcHJlZGljYXRlLmV2ZW50ID0gZXZlbnQ7XG4gICAgICBpZiAoIXByZWRpY2F0ZS5kZWxheVRpbWVyKSB7XG4gICAgICAgIHByZWRpY2F0ZS5kZWxheVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcHJlZGljYXRlLmRlbGF5ID0gMDtcbiAgICAgICAgICBpZiAoZHJhZy5fcmVzb2x2ZVN0YXJ0UHJlZGljYXRlKHByZWRpY2F0ZS5ldmVudCkpIHtcbiAgICAgICAgICAgIGRyYWcuX2ZvcmNlUmVzb2x2ZVN0YXJ0UHJlZGljYXRlKHByZWRpY2F0ZS5ldmVudCk7XG4gICAgICAgICAgICBkcmFnLl9yZXNldFN0YXJ0UHJlZGljYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBwcmVkaWNhdGUuZGVsYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcmFnLl9yZXNvbHZlU3RhcnRQcmVkaWNhdGUoZXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRyYWcgc29ydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy50aHJlc2hvbGQ9NTBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5hY3Rpb249J21vdmUnXVxuICAgKiBAcmV0dXJucyB7KEJvb2xlYW58RHJhZ1NvcnRDb21tYW5kKX1cbiAgICogICAtIFJldHVybnMgZmFsc2UgaWYgbm8gdmFsaWQgaW5kZXggd2FzIGZvdW5kLiBPdGhlcndpc2UgcmV0dXJucyBkcmFnIHNvcnRcbiAgICogICAgIGNvbW1hbmQuXG4gICAqL1xuICBJdGVtRHJhZy5kZWZhdWx0U29ydFByZWRpY2F0ZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbVJlY3QgPSB7fTtcbiAgICB2YXIgdGFyZ2V0UmVjdCA9IHt9O1xuICAgIHZhciByZXR1cm5EYXRhID0ge307XG4gICAgdmFyIHJvb3RHcmlkQXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGdldFRhcmdldEdyaWQoaXRlbSwgcm9vdEdyaWQsIHRocmVzaG9sZCkge1xuICAgICAgdmFyIHRhcmdldCA9IG51bGw7XG4gICAgICB2YXIgZHJhZ1NvcnQgPSByb290R3JpZC5fc2V0dGluZ3MuZHJhZ1NvcnQ7XG4gICAgICB2YXIgYmVzdFNjb3JlID0gLTE7XG4gICAgICB2YXIgZ3JpZFNjb3JlO1xuICAgICAgdmFyIGdyaWRzO1xuICAgICAgdmFyIGdyaWQ7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gR2V0IHBvdGVudGlhbCB0YXJnZXQgZ3JpZHMuXG4gICAgICBpZiAoZHJhZ1NvcnQgPT09IHRydWUpIHtcbiAgICAgICAgcm9vdEdyaWRBcnJheVswXSA9IHJvb3RHcmlkO1xuICAgICAgICBncmlkcyA9IHJvb3RHcmlkQXJyYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkcyA9IGRyYWdTb3J0LmNhbGwocm9vdEdyaWQsIGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIGdyaWRzLlxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGdyaWRzKSkgcmV0dXJuIHRhcmdldDtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBncmlkcyBhbmQgZ2V0IHRoZSBiZXN0IG1hdGNoLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdyaWQgPSBncmlkc1tpXTtcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IGFsbCBkZXN0cm95ZWQgZ3JpZHMuXG4gICAgICAgIGlmIChncmlkLl9pc0Rlc3Ryb3llZCkgY29udGludWU7XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgdGhlIGdyaWQncyBvZmZzZXRzIGFuZCBkaW1lbnNpb25zIHNpbmNlIHRoZXkgbWlnaHRcbiAgICAgICAgLy8gaGF2ZSBjaGFuZ2VkIChlLmcgZHVyaW5nIHNjcm9sbGluZykuXG4gICAgICAgIGdyaWQuX3VwZGF0ZUJvdW5kaW5nUmVjdCgpO1xuXG4gICAgICAgIC8vIENoZWNrIGhvdyBtdWNoIGRyYWdnZWQgZWxlbWVudCBvdmVybGFwcyB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAgICAgIHRhcmdldFJlY3Qud2lkdGggPSBncmlkLl93aWR0aDtcbiAgICAgICAgdGFyZ2V0UmVjdC5oZWlnaHQgPSBncmlkLl9oZWlnaHQ7XG4gICAgICAgIHRhcmdldFJlY3QubGVmdCA9IGdyaWQuX2xlZnQ7XG4gICAgICAgIHRhcmdldFJlY3QudG9wID0gZ3JpZC5fdG9wO1xuICAgICAgICBncmlkU2NvcmUgPSBnZXRSZWN0T3ZlcmxhcFNjb3JlKGl0ZW1SZWN0LCB0YXJnZXRSZWN0KTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGdyaWQgaXMgdGhlIGJlc3QgbWF0Y2ggc28gZmFyLlxuICAgICAgICBpZiAoZ3JpZFNjb3JlID4gdGhyZXNob2xkICYmIGdyaWRTY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgIGJlc3RTY29yZSA9IGdyaWRTY29yZTtcbiAgICAgICAgICB0YXJnZXQgPSBncmlkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFsd2F5cyByZXNldCByb290IGdyaWQgYXJyYXkuXG4gICAgICByb290R3JpZEFycmF5Lmxlbmd0aCA9IDA7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0sIG9wdGlvbnMpIHtcbiAgICAgIHZhciBkcmFnID0gaXRlbS5fZHJhZztcbiAgICAgIHZhciByb290R3JpZCA9IGRyYWcuX2dldEdyaWQoKTtcblxuICAgICAgLy8gR2V0IGRyYWcgc29ydCBwcmVkaWNhdGUgc2V0dGluZ3MuXG4gICAgICB2YXIgc29ydFRocmVzaG9sZCA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMudGhyZXNob2xkID09PSAnbnVtYmVyJyA/IG9wdGlvbnMudGhyZXNob2xkIDogNTA7XG4gICAgICB2YXIgc29ydEFjdGlvbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5hY3Rpb24gPT09IGFjdGlvblN3YXAgPyBhY3Rpb25Td2FwIDogYWN0aW9uTW92ZTtcblxuICAgICAgLy8gUG9wdWxhdGUgaXRlbSByZWN0IGRhdGEuXG4gICAgICBpdGVtUmVjdC53aWR0aCA9IGl0ZW0uX3dpZHRoO1xuICAgICAgaXRlbVJlY3QuaGVpZ2h0ID0gaXRlbS5faGVpZ2h0O1xuICAgICAgaXRlbVJlY3QubGVmdCA9IGRyYWcuX2VsZW1lbnRDbGllbnRYO1xuICAgICAgaXRlbVJlY3QudG9wID0gZHJhZy5fZWxlbWVudENsaWVudFk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdGFyZ2V0IGdyaWQuXG4gICAgICB2YXIgZ3JpZCA9IGdldFRhcmdldEdyaWQoaXRlbSwgcm9vdEdyaWQsIHNvcnRUaHJlc2hvbGQpO1xuXG4gICAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UgZm91bmQgbm8gZ3JpZCBjb250YWluZXIgZWxlbWVudCB0aGF0IG92ZXJsYXBzIHRoZVxuICAgICAgLy8gZHJhZ2dlZCBpdGVtIGVub3VnaC5cbiAgICAgIGlmICghZ3JpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB2YXIgZ3JpZE9mZnNldExlZnQgPSAwO1xuICAgICAgdmFyIGdyaWRPZmZzZXRUb3AgPSAwO1xuICAgICAgdmFyIG1hdGNoU2NvcmUgPSAtMTtcbiAgICAgIHZhciBtYXRjaEluZGV4O1xuICAgICAgdmFyIGhhc1ZhbGlkVGFyZ2V0cztcbiAgICAgIHZhciB0YXJnZXQ7XG4gICAgICB2YXIgc2NvcmU7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gSWYgaXRlbSBpcyBtb3ZlZCB3aXRoaW4gaXQncyBvcmlnaW5hdGluZyBncmlkIGFkanVzdCBpdGVtJ3MgbGVmdCBhbmRcbiAgICAgIC8vIHRvcCBwcm9wcy4gT3RoZXJ3aXNlIGlmIGl0ZW0gaXMgbW92ZWQgdG8vd2l0aGluIGFub3RoZXIgZ3JpZCBnZXQgdGhlXG4gICAgICAvLyBjb250YWluZXIgZWxlbWVudCdzIG9mZnNldCAoZnJvbSB0aGUgZWxlbWVudCdzIGNvbnRlbnQgZWRnZSkuXG4gICAgICBpZiAoZ3JpZCA9PT0gcm9vdEdyaWQpIHtcbiAgICAgICAgaXRlbVJlY3QubGVmdCA9IGRyYWcuX2dyaWRYICsgaXRlbS5fbWFyZ2luTGVmdDtcbiAgICAgICAgaXRlbVJlY3QudG9wID0gZHJhZy5fZ3JpZFkgKyBpdGVtLl9tYXJnaW5Ub3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkLl91cGRhdGVCb3JkZXJzKDEsIDAsIDEsIDApO1xuICAgICAgICBncmlkT2Zmc2V0TGVmdCA9IGdyaWQuX2xlZnQgKyBncmlkLl9ib3JkZXJMZWZ0O1xuICAgICAgICBncmlkT2Zmc2V0VG9wID0gZ3JpZC5fdG9wICsgZ3JpZC5fYm9yZGVyVG9wO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHRhcmdldCBncmlkIGl0ZW1zIGFuZCB0cnkgdG8gZmluZCB0aGUgYmVzdCBtYXRjaC5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YXJnZXQgPSBncmlkLl9pdGVtc1tpXTtcblxuICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGl0ZW0gaXMgbm90IGFjdGl2ZSBvciB0aGUgdGFyZ2V0IGl0ZW0gaXMgdGhlIGRyYWdnZWRcbiAgICAgICAgLy8gaXRlbSBsZXQncyBza2lwIHRvIHRoZSBuZXh0IGl0ZW0uXG4gICAgICAgIGlmICghdGFyZ2V0Ll9pc0FjdGl2ZSB8fCB0YXJnZXQgPT09IGl0ZW0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1hcmsgdGhlIGdyaWQgYXMgaGF2aW5nIHZhbGlkIHRhcmdldCBpdGVtcy5cbiAgICAgICAgaGFzVmFsaWRUYXJnZXRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHRhcmdldCdzIG92ZXJsYXAgc2NvcmUgd2l0aCB0aGUgZHJhZ2dlZCBpdGVtLlxuICAgICAgICB0YXJnZXRSZWN0LndpZHRoID0gdGFyZ2V0Ll93aWR0aDtcbiAgICAgICAgdGFyZ2V0UmVjdC5oZWlnaHQgPSB0YXJnZXQuX2hlaWdodDtcbiAgICAgICAgdGFyZ2V0UmVjdC5sZWZ0ID0gdGFyZ2V0Ll9sZWZ0ICsgdGFyZ2V0Ll9tYXJnaW5MZWZ0ICsgZ3JpZE9mZnNldExlZnQ7XG4gICAgICAgIHRhcmdldFJlY3QudG9wID0gdGFyZ2V0Ll90b3AgKyB0YXJnZXQuX21hcmdpblRvcCArIGdyaWRPZmZzZXRUb3A7XG4gICAgICAgIHNjb3JlID0gZ2V0UmVjdE92ZXJsYXBTY29yZShpdGVtUmVjdCwgdGFyZ2V0UmVjdCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGJlc3QgbWF0Y2ggaW5kZXggYW5kIHNjb3JlIGlmIHRoZSB0YXJnZXQncyBvdmVybGFwIHNjb3JlIHdpdGhcbiAgICAgICAgLy8gdGhlIGRyYWdnZWQgaXRlbSBpcyBoaWdoZXIgdGhhbiB0aGUgY3VycmVudCBiZXN0IG1hdGNoIHNjb3JlLlxuICAgICAgICBpZiAoc2NvcmUgPiBtYXRjaFNjb3JlKSB7XG4gICAgICAgICAgbWF0Y2hJbmRleCA9IGk7XG4gICAgICAgICAgbWF0Y2hTY29yZSA9IHNjb3JlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHZhbGlkIG1hdGNoIGFuZCB0aGUgaXRlbSBpcyBiZWluZyBtb3ZlZCBpbnRvIGFub3RoZXJcbiAgICAgIC8vIGdyaWQuXG4gICAgICBpZiAobWF0Y2hTY29yZSA8IHNvcnRUaHJlc2hvbGQgJiYgaXRlbS5nZXRHcmlkKCkgIT09IGdyaWQpIHtcbiAgICAgICAgbWF0Y2hJbmRleCA9IGhhc1ZhbGlkVGFyZ2V0cyA/IC0xIDogMDtcbiAgICAgICAgbWF0Y2hTY29yZSA9IEluZmluaXR5O1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgYmVzdCBtYXRjaCBvdmVybGFwcyBlbm91Z2ggdG8ganVzdGlmeSBhIHBsYWNlbWVudCBzd2l0Y2guXG4gICAgICBpZiAobWF0Y2hTY29yZSA+PSBzb3J0VGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybkRhdGEuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHJldHVybkRhdGEuaW5kZXggPSBtYXRjaEluZGV4O1xuICAgICAgICByZXR1cm5EYXRhLmFjdGlvbiA9IHNvcnRBY3Rpb247XG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQWJvcnQgZHJhZ2dpbmcgYW5kIHJlc2V0IGRyYWcgZGF0YS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtRHJhZ31cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcblxuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgYmVpbmcgZHJvcHBlZCBpbnRvIGFub3RoZXIgZ3JpZCwgZmluaXNoIGl0IHVwIGFuZCByZXR1cm5cbiAgICAvLyBpbW1lZGlhdGVseS5cbiAgICBpZiAodGhpcy5faXNNaWdyYXRpbmcpIHtcbiAgICAgIHRoaXMuX2ZpbmlzaE1pZ3JhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCBtb3ZlIGFuZCBzY3JvbGwgdGlja3MuXG4gICAgY2FuY2VsTW92ZVRpY2soaXRlbS5faWQpO1xuICAgIGNhbmNlbFNjcm9sbFRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gUmVtb3ZlIHNjcm9sbCBsaXN0ZW5lcnMuXG4gICAgdGhpcy5fdW5iaW5kU2Nyb2xsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBDYW5jZWwgb3ZlcmxhcCBjaGVjay5cbiAgICB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgnY2FuY2VsJyk7XG5cbiAgICAvLyBBcHBlbmQgaXRlbSBlbGVtZW50IHRvIHRoZSBjb250YWluZXIgaWYgaXQncyBub3QgaXQncyBjaGlsZC4gQWxzbyBtYWtlXG4gICAgLy8gc3VyZSB0aGUgdHJhbnNsYXRlIHZhbHVlcyBhcmUgYWRqdXN0ZWQgdG8gYWNjb3VudCBmb3IgdGhlIERPTSBzaGlmdC5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBncmlkLl9lbGVtZW50KSB7XG4gICAgICBncmlkLl9lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9ncmlkWCwgdGhpcy5fZ3JpZFkpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBncmlkLl9zZXR0aW5ncy5pdGVtRHJhZ2dpbmdDbGFzcyk7XG5cbiAgICAvLyBSZXNldCBkcmFnIGRhdGEuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1EcmFnfVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2RyYWdnZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7P0dyaWR9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2dldEdyaWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ3JpZEluc3RhbmNlc1t0aGlzLl9ncmlkSWRdIHx8IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwL3Jlc2V0IGRyYWcgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIElzIGl0ZW0gYmVpbmcgZHJhZ2dlZD9cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLy8gVGhlIGRyYWdnZWQgaXRlbSdzIGNvbnRhaW5lciBlbGVtZW50LlxuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG5cbiAgICAvLyBUaGUgZHJhZ2dlZCBpdGVtJ3MgY29udGFpbmluZyBibG9jay5cbiAgICB0aGlzLl9jb250YWluaW5nQmxvY2sgPSBudWxsO1xuXG4gICAgLy8gRHJhZy9zY3JvbGwgZXZlbnQgZGF0YS5cbiAgICB0aGlzLl9kcmFnRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX3Njcm9sbEV2ZW50ID0gbnVsbDtcblxuICAgIC8vIEFsbCB0aGUgZWxlbWVudHMgd2hpY2ggbmVlZCB0byBiZSBsaXN0ZW5lZCBmb3Igc2Nyb2xsIGV2ZW50cyBkdXJpbmdcbiAgICAvLyBkcmFnZ2luZy5cbiAgICB0aGlzLl9zY3JvbGxlcnMgPSBbXTtcblxuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZVgvdHJhbnNsYXRlWSBwb3NpdGlvbi5cbiAgICB0aGlzLl9sZWZ0ID0gMDtcbiAgICB0aGlzLl90b3AgPSAwO1xuXG4gICAgLy8gRHJhZ2dlZCBlbGVtZW50J3MgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gdGhlIGdyaWQuXG4gICAgdGhpcy5fZ3JpZFggPSAwO1xuICAgIHRoaXMuX2dyaWRZID0gMDtcblxuICAgIC8vIERyYWdnZWQgZWxlbWVudCdzIGN1cnJlbnQgb2Zmc2V0IGZyb20gd2luZG93J3Mgbm9ydGh3ZXN0IGNvcm5lci4gRG9lc1xuICAgIC8vIG5vdCBhY2NvdW50IGZvciBlbGVtZW50J3MgbWFyZ2lucy5cbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WCA9IDA7XG4gICAgdGhpcy5fZWxlbWVudENsaWVudFkgPSAwO1xuXG4gICAgLy8gT2Zmc2V0IGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZHJhZ2dlZCBlbGVtZW50J3MgdGVtcG9yYXJ5IGRyYWdcbiAgICAvLyBjb250YWluZXIgYW5kIGl0J3Mgb3JpZ2luYWwgY29udGFpbmVyLlxuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgdG8gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3IgZWxlbWVudHMgb2YgdGhlXG4gICAqIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fYmluZFNjcm9sbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gdGhpcy5fZ2V0R3JpZCgpLl9lbGVtZW50O1xuICAgIHZhciBkcmFnQ29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xuICAgIHZhciBzY3JvbGxlcnMgPSB0aGlzLl9zY3JvbGxlcnM7XG4gICAgdmFyIGdyaWRTY3JvbGxlcnM7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBHZXQgZHJhZ2dlZCBlbGVtZW50J3Mgc2Nyb2xsaW5nIHBhcmVudHMuXG4gICAgc2Nyb2xsZXJzLmxlbmd0aCA9IDA7XG4gICAgZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyh0aGlzLl9pdGVtLl9lbGVtZW50LCBmYWxzZSwgc2Nyb2xsZXJzKTtcblxuICAgIC8vIElmIGRyYWcgY29udGFpbmVyIGlzIGRlZmluZWQgYW5kIGl0J3Mgbm90IHRoZSBzYW1lIGVsZW1lbnQgYXMgZ3JpZFxuICAgIC8vIGNvbnRhaW5lciB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZSBncmlkIGNvbnRhaW5lciBhbmQgaXQncyBzY3JvbGwgcGFyZW50c1xuICAgIC8vIHRvIHRoZSBlbGVtZW50cyB3aGljaCBhcmUgZ29pbmcgdG8gYmUgbGlzdGVuZXIgZm9yIHNjcm9sbCBldmVudHMuXG4gICAgaWYgKGRyYWdDb250YWluZXIgIT09IGdyaWRDb250YWluZXIpIHtcbiAgICAgIGdyaWRTY3JvbGxlcnMgPSBbXTtcbiAgICAgIGdldFNjcm9sbGFibGVBbmNlc3RvcnMoZ3JpZENvbnRhaW5lciwgdHJ1ZSwgZ3JpZFNjcm9sbGVycyk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZFNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2Nyb2xsZXJzLmluZGV4T2YoZ3JpZFNjcm9sbGVyc1tpXSkgPCAwKSB7XG4gICAgICAgICAgc2Nyb2xsZXJzLnB1c2goZ3JpZFNjcm9sbGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCaW5kIHNjcm9sbCBsaXN0ZW5lcnMuXG4gICAgZm9yIChpID0gMDsgaSA8IHNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgc2Nyb2xsZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBjdXJyZW50bHkgYm91bmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgZnJvbSBhbGwgc2Nyb2xsYWJsZSBhbmNlc3RvclxuICAgKiBlbGVtZW50cyBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IGFuZCB0aGUgZHJhZyBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl91bmJpbmRTY3JvbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsZXJzID0gdGhpcy5fc2Nyb2xsZXJzO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgc2Nyb2xsZXJzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBzY3JvbGxlcnMubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAgZGVmYXVsdCBzdGFydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9zZXR1cFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBjb25maWcgPSBvcHRpb25zIHx8IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1N0YXJ0UHJlZGljYXRlIHx8IDA7XG4gICAgcmV0dXJuICh0aGlzLl9zdGFydFByZWRpY2F0ZURhdGEgPSB7XG4gICAgICBkaXN0YW5jZTogTWF0aC5hYnMoY29uZmlnLmRpc3RhbmNlKSB8fCAwLFxuICAgICAgZGVsYXk6IE1hdGgubWF4KGNvbmZpZy5kZWxheSwgMCkgfHwgMCxcbiAgICAgIGhhbmRsZTogdHlwZW9mIGNvbmZpZy5oYW5kbGUgPT09ICdzdHJpbmcnID8gY29uZmlnLmhhbmRsZSA6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGRlZmF1bHQgc3RhcnQgcHJlZGljYXRlIGhhbmRsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMgez9IVE1MRWxlbWVudH1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZ2V0U3RhcnRQcmVkaWNhdGVIYW5kbGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9pdGVtLl9lbGVtZW50O1xuICAgIHZhciBoYW5kbGVFbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIE5vIGhhbmRsZSwgbm8gaGFzc2xlIC0+IGxldCdzIHVzZSB0aGUgaXRlbSBlbGVtZW50IGFzIHRoZSBoYW5kbGUuXG4gICAgaWYgKCFwcmVkaWNhdGUuaGFuZGxlKSByZXR1cm4gaGFuZGxlRWxlbWVudDtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc3BlY2lmaWMgcHJlZGljYXRlIGhhbmRsZSBkZWZpbmVkLCBsZXQncyB0cnkgdG8gZ2V0IGl0LlxuICAgIGhhbmRsZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgd2hpbGUgKGhhbmRsZUVsZW1lbnQgJiYgIWVsZW1lbnRNYXRjaGVzKGhhbmRsZUVsZW1lbnQsIHByZWRpY2F0ZS5oYW5kbGUpKSB7XG4gICAgICBoYW5kbGVFbGVtZW50ID0gaGFuZGxlRWxlbWVudCAhPT0gZWxlbWVudCA/IGhhbmRsZUVsZW1lbnQucGFyZW50RWxlbWVudCA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVFbGVtZW50IHx8IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBjdXJyZW50bHkgYm91bmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgZnJvbSBhbGwgc2Nyb2xsYWJsZSBhbmNlc3RvclxuICAgKiBlbGVtZW50cyBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IGFuZCB0aGUgZHJhZyBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc29sdmVTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHByZWRpY2F0ZSA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YTtcblxuICAgIC8vIElmIHRoZSBtb3ZlZCBkaXN0YW5jZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHRocmVzaG9sZCBkaXN0YW5jZSBvciB0aGVyZSBpc1xuICAgIC8vIHNvbWUgZGVsYXkgbGVmdCwgaWdub3JlIHRoaXMgcHJlZGljYXRlIGN5Y2xlLlxuICAgIGlmIChldmVudC5kaXN0YW5jZSA8IHByZWRpY2F0ZS5kaXN0YW5jZSB8fCBwcmVkaWNhdGUuZGVsYXkpIHJldHVybjtcblxuICAgIC8vIEdldCBoYW5kbGUgcmVjdCBkYXRhLlxuICAgIHZhciBoYW5kbGVSZWN0ID0gcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGhhbmRsZUxlZnQgPSBoYW5kbGVSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IDApO1xuICAgIHZhciBoYW5kbGVUb3AgPSBoYW5kbGVSZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgMCk7XG4gICAgdmFyIGhhbmRsZVdpZHRoID0gaGFuZGxlUmVjdC53aWR0aDtcbiAgICB2YXIgaGFuZGxlSGVpZ2h0ID0gaGFuZGxlUmVjdC5oZWlnaHQ7XG5cbiAgICAvLyBSZXNldCBwcmVkaWNhdGUgZGF0YS5cbiAgICB0aGlzLl9yZXNldFN0YXJ0UHJlZGljYXRlKCk7XG5cbiAgICAvLyBJZiB0aGUgY3Vyc29yIGlzIHN0aWxsIHdpdGhpbiB0aGUgaGFuZGxlIGxldCdzIHN0YXJ0IHRoZSBkcmFnLlxuICAgIHJldHVybiAoXG4gICAgICBoYW5kbGVXaWR0aCAmJlxuICAgICAgaGFuZGxlSGVpZ2h0ICYmXG4gICAgICBldmVudC5wYWdlWCA+PSBoYW5kbGVMZWZ0ICYmXG4gICAgICBldmVudC5wYWdlWCA8IGhhbmRsZUxlZnQgKyBoYW5kbGVXaWR0aCAmJlxuICAgICAgZXZlbnQucGFnZVkgPj0gaGFuZGxlVG9wICYmXG4gICAgICBldmVudC5wYWdlWSA8IGhhbmRsZVRvcCArIGhhbmRsZUhlaWdodFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZvcmNlZnVsbHkgcmVzb2x2ZSBkcmFnIHN0YXJ0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZm9yY2VSZXNvbHZlU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5faXNEZXN0cm95ZWQgJiYgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcbiAgICAgIHRoaXMuX29uU3RhcnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmluYWxpemUgc3RhcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9maW5pc2hTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9pdGVtLl9lbGVtZW50O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIGNsaWNrICh2ZXJ5IHN1YmplY3RpdmUgaGV1cmlzdGljcykuXG4gICAgdmFyIGlzQ2xpY2sgPSBNYXRoLmFicyhldmVudC5kZWx0YVgpIDwgMiAmJiBNYXRoLmFicyhldmVudC5kZWx0YVkpIDwgMiAmJiBldmVudC5kZWx0YVRpbWUgPCAyMDA7XG5cbiAgICAvLyBSZXNldCBwcmVkaWNhdGUuXG4gICAgdGhpcy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuXG4gICAgLy8gSWYgdGhlIGdlc3R1cmUgY2FuIGJlIGludGVycHJldGVkIGFzIGNsaWNrIGxldCdzIHRyeSB0byBvcGVuIHRoZSBlbGVtZW50J3NcbiAgICAvLyBocmVmIHVybCAoaWYgaXQgaXMgYW4gYW5jaG9yIGVsZW1lbnQpLlxuICAgIGlmIChpc0NsaWNrKSBvcGVuQW5jaG9ySHJlZihlbGVtZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzZXQgZHJhZyBzb3J0IGhldXJpc3RpY3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc2V0SGV1cmlzdGljcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgdGhpcy5faFgxID0gdGhpcy5faFgyID0gZXZlbnQuY2xpZW50WDtcbiAgICB0aGlzLl9oWTEgPSB0aGlzLl9oWTIgPSBldmVudC5jbGllbnRZO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSdW4gaGV1cmlzdGljcyBhbmQgcmV0dXJuIHRydWUgaWYgb3ZlcmxhcCBjaGVjayBjYW4gYmUgcGVyZm9ybWVkLCBhbmQgZmFsc2VcbiAgICogaWYgaXQgY2FuIG5vdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2NoZWNrSGV1cmlzdGljcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnU29ydEhldXJpc3RpY3M7XG4gICAgdmFyIG1pbkRpc3QgPSBzZXR0aW5ncy5taW5EcmFnRGlzdGFuY2U7XG5cbiAgICAvLyBTa2lwIGhldXJpc3RpY3MgaWYgbm90IG5lZWRlZC5cbiAgICBpZiAobWluRGlzdCA8PSAwKSB7XG4gICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciB4ID0gZXZlbnQuY2xpZW50WDtcbiAgICB2YXIgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgdmFyIGRpZmZYID0geCAtIHRoaXMuX2hYMjtcbiAgICB2YXIgZGlmZlkgPSB5IC0gdGhpcy5faFkyO1xuXG4gICAgLy8gSWYgd2UgY2FuJ3QgZG8gcHJvcGVyIGJvdW5jZSBiYWNrIGNoZWNrIG1ha2Ugc3VyZSB0aGF0IHRoZSBibG9ja2VkIGluZGV4XG4gICAgLy8gaXMgbm90IHNldC5cbiAgICB2YXIgY2FuQ2hlY2tCb3VuY2VCYWNrID0gbWluRGlzdCA+IDMgJiYgc2V0dGluZ3MubWluQm91bmNlQmFja0FuZ2xlID4gMDtcbiAgICBpZiAoIWNhbkNoZWNrQm91bmNlQmFjaykge1xuICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IG1pbkRpc3QgfHwgTWF0aC5hYnMoZGlmZlkpID4gbWluRGlzdCkge1xuICAgICAgLy8gUmVzZXQgYmxvY2tlZCBpbmRleCBpZiBhbmdsZSBjaGFuZ2VkIGVub3VnaC4gVGhpcyBjaGVjayByZXF1aXJlcyBhXG4gICAgICAvLyBtaW5pbXVtIHZhbHVlIG9mIDMgZm9yIG1pbkRyYWdEaXN0YW5jZSB0byBmdW5jdGlvbiBwcm9wZXJseS5cbiAgICAgIGlmIChjYW5DaGVja0JvdW5jZUJhY2spIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkaWZmWCwgZGlmZlkpO1xuICAgICAgICB2YXIgcHJldkFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLl9oWDIgLSB0aGlzLl9oWDEsIHRoaXMuX2hZMiAtIHRoaXMuX2hZMSk7XG4gICAgICAgIHZhciBkZWx0YUFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLnNpbihhbmdsZSAtIHByZXZBbmdsZSksIE1hdGguY29zKGFuZ2xlIC0gcHJldkFuZ2xlKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhkZWx0YUFuZ2xlKSA+IHNldHRpbmdzLm1pbkJvdW5jZUJhY2tBbmdsZSkge1xuICAgICAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBwb2ludHMuXG4gICAgICB0aGlzLl9oWDEgPSB0aGlzLl9oWDI7XG4gICAgICB0aGlzLl9oWTEgPSB0aGlzLl9oWTI7XG4gICAgICB0aGlzLl9oWDIgPSB4O1xuICAgICAgdGhpcy5faFkyID0geTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCBmb3IgZGVmYXVsdCBkcmFnIHN0YXJ0IHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByZWRpY2F0ZSA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YTtcbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICBpZiAocHJlZGljYXRlLmRlbGF5VGltZXIpIHtcbiAgICAgICAgcHJlZGljYXRlLmRlbGF5VGltZXIgPSB3aW5kb3cuY2xlYXJUaW1lb3V0KHByZWRpY2F0ZS5kZWxheVRpbWVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayAoZHVyaW5nIGRyYWcpIGlmIGFuIGl0ZW0gaXMgb3ZlcmxhcHBpbmcgb3RoZXIgaXRlbXMgYW5kIGJhc2VkIG9uXG4gICAqIHRoZSBjb25maWd1cmF0aW9uIGxheW91dCB0aGUgaXRlbXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fY2hlY2tPdmVybGFwID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgY3VycmVudEdyaWQ7XG4gICAgdmFyIGN1cnJlbnRJbmRleDtcbiAgICB2YXIgdGFyZ2V0R3JpZDtcbiAgICB2YXIgdGFyZ2V0SW5kZXg7XG4gICAgdmFyIHNvcnRBY3Rpb247XG4gICAgdmFyIGlzTWlncmF0aW9uO1xuXG4gICAgLy8gR2V0IG92ZXJsYXAgY2hlY2sgcmVzdWx0LlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKSkge1xuICAgICAgcmVzdWx0ID0gc2V0dGluZ3MuZHJhZ1NvcnRQcmVkaWNhdGUoaXRlbSwgdGhpcy5fZHJhZ0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gSXRlbURyYWcuZGVmYXVsdFNvcnRQcmVkaWNhdGUoaXRlbSwgc2V0dGluZ3MuZHJhZ1NvcnRQcmVkaWNhdGUpO1xuICAgIH1cblxuICAgIC8vIExldCdzIG1ha2Ugc3VyZSB0aGUgcmVzdWx0IG9iamVjdCBoYXMgYSB2YWxpZCBpbmRleCBiZWZvcmUgZ29pbmcgZnVydGhlci5cbiAgICBpZiAoIXJlc3VsdCB8fCB0eXBlb2YgcmVzdWx0LmluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuO1xuXG4gICAgY3VycmVudEdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB0YXJnZXRHcmlkID0gcmVzdWx0LmdyaWQgfHwgY3VycmVudEdyaWQ7XG4gICAgaXNNaWdyYXRpb24gPSBjdXJyZW50R3JpZCAhPT0gdGFyZ2V0R3JpZDtcbiAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50R3JpZC5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB0YXJnZXRJbmRleCA9IG5vcm1hbGl6ZUFycmF5SW5kZXgodGFyZ2V0R3JpZC5faXRlbXMsIHJlc3VsdC5pbmRleCwgaXNNaWdyYXRpb24pO1xuICAgIHNvcnRBY3Rpb24gPSByZXN1bHQuYWN0aW9uID09PSBhY3Rpb25Td2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG5cbiAgICAvLyBQcmV2ZW50IHBvc2l0aW9uIGJvdW5jZS5cbiAgICBpZiAoIWlzTWlncmF0aW9uICYmIHRhcmdldEluZGV4ID09PSB0aGlzLl9oQmxvY2tlZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gd2FzIG1vdmVkIHdpdGhpbiBpdCdzIGN1cnJlbnQgZ3JpZC5cbiAgICBpZiAoIWlzTWlncmF0aW9uKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHRhcmdldCBpbmRleCBpcyBub3QgdGhlIGN1cnJlbnQgaW5kZXguXG4gICAgICBpZiAoY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gY3VycmVudEluZGV4O1xuXG4gICAgICAgIC8vIERvIHRoZSBzb3J0LlxuICAgICAgICAoc29ydEFjdGlvbiA9PT0gYWN0aW9uU3dhcCA/IGFycmF5U3dhcCA6IGFycmF5TW92ZSkoXG4gICAgICAgICAgY3VycmVudEdyaWQuX2l0ZW1zLFxuICAgICAgICAgIGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0YXJnZXRJbmRleFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEVtaXQgbW92ZSBldmVudC5cbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRNb3ZlKSkge1xuICAgICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50TW92ZSwge1xuICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXgsXG4gICAgICAgICAgICBhY3Rpb246IHNvcnRBY3Rpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExheW91dCB0aGUgZ3JpZC5cbiAgICAgICAgY3VycmVudEdyaWQubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gd2FzIG1vdmVkIHRvIGFub3RoZXIgZ3JpZC5cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuXG4gICAgICAvLyBFbWl0IGJlZm9yZVNlbmQgZXZlbnQuXG4gICAgICBpZiAoY3VycmVudEdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVNlbmQpKSB7XG4gICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50QmVmb3JlU2VuZCwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBiZWZvcmVSZWNlaXZlIGV2ZW50LlxuICAgICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVJlY2VpdmUpKSB7XG4gICAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRCZWZvcmVSZWNlaXZlLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgaXRlbSdzIGdyaWQgaWQgcmVmZXJlbmNlLlxuICAgICAgaXRlbS5fZ3JpZElkID0gdGFyZ2V0R3JpZC5faWQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBkcmFnIGluc3RhbmNlJ3MgbWlncmF0aW5nIGluZGljYXRvci5cbiAgICAgIHRoaXMuX2lzTWlncmF0aW5nID0gaXRlbS5fZ3JpZElkICE9PSB0aGlzLl9ncmlkSWQ7XG5cbiAgICAgIC8vIE1vdmUgaXRlbSBpbnN0YW5jZSBmcm9tIGN1cnJlbnQgZ3JpZCB0byB0YXJnZXQgZ3JpZC5cbiAgICAgIGN1cnJlbnRHcmlkLl9pdGVtcy5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcbiAgICAgIGFycmF5SW5zZXJ0KHRhcmdldEdyaWQuX2l0ZW1zLCBpdGVtLCB0YXJnZXRJbmRleCk7XG5cbiAgICAgIC8vIFNldCBzb3J0IGRhdGEgYXMgbnVsbCwgd2hpY2ggaXMgYW4gaW5kaWNhdG9yIGZvciB0aGUgaXRlbSBjb21wYXJpc29uXG4gICAgICAvLyBmdW5jdGlvbiB0aGF0IHRoZSBzb3J0IGRhdGEgb2YgdGhpcyBzcGVjaWZpYyBpdGVtIHNob3VsZCBiZSBmZXRjaGVkXG4gICAgICAvLyBsYXppbHkuXG4gICAgICBpdGVtLl9zb3J0RGF0YSA9IG51bGw7XG5cbiAgICAgIC8vIEVtaXQgc2VuZCBldmVudC5cbiAgICAgIGlmIChjdXJyZW50R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50U2VuZCkpIHtcbiAgICAgICAgY3VycmVudEdyaWQuX2VtaXQoZXZlbnRTZW5kLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IHJlY2VpdmUgZXZlbnQuXG4gICAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50UmVjZWl2ZSkpIHtcbiAgICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudFJlY2VpdmUsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExheW91dCBib3RoIGdyaWRzLlxuICAgICAgY3VycmVudEdyaWQubGF5b3V0KCk7XG4gICAgICB0YXJnZXRHcmlkLmxheW91dCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSWYgaXRlbSBpcyBkcmFnZ2VkIGludG8gYW5vdGhlciBncmlkLCBmaW5pc2ggdGhlIG1pZ3JhdGlvbiBwcm9jZXNzXG4gICAqIGdyYWNlZnVsbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZmluaXNoTWlncmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGlzQWN0aXZlID0gaXRlbS5faXNBY3RpdmU7XG4gICAgdmFyIHRhcmdldEdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgdGFyZ2V0R3JpZEVsZW1lbnQgPSB0YXJnZXRHcmlkLl9lbGVtZW50O1xuICAgIHZhciB0YXJnZXRTZXR0aW5ncyA9IHRhcmdldEdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRDb250YWluZXIgPSB0YXJnZXRTZXR0aW5ncy5kcmFnQ29udGFpbmVyIHx8IHRhcmdldEdyaWRFbGVtZW50O1xuICAgIHZhciBjdXJyZW50U2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBjdXJyZW50Q29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIHZhciB0cmFuc2xhdGU7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBEZXN0cm95IGN1cnJlbnQgZHJhZy4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gc2V0IHRoZSBtaWdyYXRpbmcgZmxhZyB0b1xuICAgIC8vIGZhbHNlIGZpcnN0LCBiZWNhdXNlIG90aGVyd2lzZSB3ZSBjcmVhdGUgYW4gaW5maW5pdGUgbG9vcCBiZXR3ZWVuIHRoaXNcbiAgICAvLyBhbmQgdGhlIGRyYWcuc3RvcCgpIG1ldGhvZC5cbiAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIGN1cnJlbnQgY2xhc3NuYW1lcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjdXJyZW50U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjdXJyZW50U2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBBZGQgbmV3IGNsYXNzbmFtZXMuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgdGFyZ2V0U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc0FjdGl2ZSA/IHRhcmdldFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiB0YXJnZXRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gTW92ZSB0aGUgaXRlbSBpbnNpZGUgdGhlIHRhcmdldCBjb250YWluZXIgaWYgaXQncyBkaWZmZXJlbnQgdGhhbiB0aGVcbiAgICAvLyBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZihjdXJyZW50Q29udGFpbmVyLCB0YXJnZXRDb250YWluZXIsIHRydWUpO1xuICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgdHJhbnNsYXRlLnggLT0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdHJhbnNsYXRlLnkgLT0gb2Zmc2V0RGlmZi50b3A7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBjYWNoZWQgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIGl0ZW0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgaXRlbS5fcmVmcmVzaFNvcnREYXRhKCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIG9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gdGFyZ2V0J3MgZHJhZyBjb250YWluZXIgKGlmIGFueSlcbiAgICAvLyBhbmQgYWN0dWFsIGdyaWQgY29udGFpbmVyIGVsZW1lbnQuIFdlIHNhdmUgaXQgbGF0ZXIgZm9yIHRoZSByZWxlYXNlXG4gICAgLy8gcHJvY2Vzcy5cbiAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIHRhcmdldEdyaWRFbGVtZW50LCB0cnVlKTtcbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWSA9IG9mZnNldERpZmYudG9wO1xuXG4gICAgLy8gUmVjcmVhdGUgaXRlbSdzIGRyYWcgaGFuZGxlci5cbiAgICBpdGVtLl9kcmFnID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0VuYWJsZWQgPyBuZXcgSXRlbURyYWcoaXRlbSkgOiBudWxsO1xuXG4gICAgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSBlbGVtZW50IGlmIGl0IHdhcyBtb3ZlZCBmcm9tIGEgY29udGFpbmVyXG4gICAgLy8gdG8gYW5vdGhlci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZS54LCB0cmFuc2xhdGUueSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNoaWxkIGVsZW1lbnQncyBzdHlsZXMgdG8gcmVmbGVjdCB0aGUgY3VycmVudCB2aXNpYmlsaXR5IHN0YXRlLlxuICAgIGl0ZW0uX2NoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIGlzQWN0aXZlID8gdGFyZ2V0U2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHRhcmdldFNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG5cbiAgICAvLyBTdGFydCB0aGUgcmVsZWFzZS5cbiAgICByZWxlYXNlLnN0YXJ0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgcHJlLXN0YXJ0IGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZVN0YXJ0Q2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIExldCdzIGFjdGl2YXRlIGRyYWcgc3RhcnQgcHJlZGljYXRlIHN0YXRlLlxuICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZUluYWN0aXZlKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nO1xuICAgIH1cblxuICAgIC8vIElmIHByZWRpY2F0ZSBpcyBwZW5kaW5nIHRyeSB0byByZXNvbHZlIGl0LlxuICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVBlbmRpbmcpIHtcbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID0gdGhpcy5fc3RhcnRQcmVkaWNhdGUodGhpcy5faXRlbSwgZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVJlc29sdmVkO1xuICAgICAgICB0aGlzLl9vblN0YXJ0KGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVJlamVjdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBpZiBwcmVkaWNhdGUgaXMgcmVzb2x2ZWQgYW5kIGRyYWcgaXMgYWN0aXZlLCBtb3ZlIHRoZSBpdGVtLlxuICAgIGVsc2UgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQgJiYgdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuX29uTW92ZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHByZS1lbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlRW5kQ2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBzdGFydCBwcmVkaWNhdGUgd2FzIHJlc29sdmVkIGR1cmluZyBkcmFnLlxuICAgIHZhciBpc1Jlc29sdmVkID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcblxuICAgIC8vIERvIGZpbmFsIHByZWRpY2F0ZSBjaGVjayB0byBhbGxvdyB1c2VyIHRvIHVuYmluZCBzdHVmZiBmb3IgdGhlIGN1cnJlbnRcbiAgICAvLyBkcmFnIHByb2NlZHVyZSB3aXRoaW4gdGhlIHByZWRpY2F0ZSBjYWxsYmFjay4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzXG4gICAgLy8gY2hlY2sgd2lsbCBoYXZlIG5vIGVmZmVjdCB0byB0aGUgc3RhdGUgb2YgdGhlIHByZWRpY2F0ZS5cbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZSh0aGlzLl9pdGVtLCBldmVudCk7XG5cbiAgICAvLyBSZXNldCBzdGFydCBwcmVkaWNhdGUgc3RhdGUuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlSW5hY3RpdmU7XG5cbiAgICAvLyBJZiBwcmVkaWNhdGUgaXMgcmVzb2x2ZWQgYW5kIGRyYWdnaW5nIGlzIGFjdGl2ZSwgY2FsbCB0aGUgZW5kIGhhbmRsZXIuXG4gICAgaWYgKGlzUmVzb2x2ZWQgJiYgdGhpcy5faXNBY3RpdmUpIHRoaXMuX29uRW5kKGV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBzdGFydCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vblN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIGRvbid0IHN0YXJ0IHRoZSBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgZHJhZ0NvbnRhaW5lciA9IHNldHRpbmdzLmRyYWdDb250YWluZXIgfHwgZ3JpZENvbnRhaW5lcjtcbiAgICB2YXIgY29udGFpbmluZ0Jsb2NrID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGRyYWdDb250YWluZXIsIHRydWUpO1xuICAgIHZhciB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgdmFyIGN1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdmFyIGN1cnJlbnRUb3AgPSB0cmFuc2xhdGUueTtcbiAgICB2YXIgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBoYXNEcmFnQ29udGFpbmVyID0gZHJhZ0NvbnRhaW5lciAhPT0gZ3JpZENvbnRhaW5lcjtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcblxuICAgIC8vIFJlc2V0IGhldXJpc3RpY3MgZGF0YS5cbiAgICB0aGlzLl9yZXNldEhldXJpc3RpY3MoZXZlbnQpO1xuXG4gICAgLy8gSWYgZ3JpZCBjb250YWluZXIgaXMgbm90IHRoZSBkcmFnIGNvbnRhaW5lciwgd2UgbmVlZCB0byBjYWxjdWxhdGUgdGhlXG4gICAgLy8gb2Zmc2V0IGRpZmZlcmVuY2UgYmV0d2VlbiBncmlkIGNvbnRhaW5lciBhbmQgZHJhZyBjb250YWluZXIncyBjb250YWluaW5nXG4gICAgLy8gZWxlbWVudC5cbiAgICBpZiAoaGFzRHJhZ0NvbnRhaW5lcikge1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYoY29udGFpbmluZ0Jsb2NrLCBncmlkQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGN1cnJlbnQgcG9zaXRpb25pbmcgYW5pbWF0aW9uLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSkge1xuICAgICAgaXRlbS5fbGF5b3V0LnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IG1pZ3JhdGlvbiBhbmltYXRpb24uXG4gICAgaWYgKG1pZ3JhdGUuX2lzQWN0aXZlKSB7XG4gICAgICBjdXJyZW50TGVmdCAtPSBtaWdyYXRlLl9jb250YWluZXJEaWZmWDtcbiAgICAgIGN1cnJlbnRUb3AgLT0gbWlncmF0ZS5fY29udGFpbmVyRGlmZlk7XG4gICAgICBtaWdyYXRlLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBiZWluZyByZWxlYXNlZCByZXNldCByZWxlYXNlIGRhdGEuXG4gICAgaWYgKGl0ZW0uaXNSZWxlYXNpbmcoKSkgcmVsZWFzZS5fcmVzZXQoKTtcblxuICAgIC8vIFNldHVwIGRyYWcgZGF0YS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZHJhZ0NvbnRhaW5lcjtcbiAgICB0aGlzLl9jb250YWluaW5nQmxvY2sgPSBjb250YWluaW5nQmxvY2s7XG4gICAgdGhpcy5fZWxlbWVudENsaWVudFggPSBlbGVtZW50UmVjdC5sZWZ0O1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZID0gZWxlbWVudFJlY3QudG9wO1xuICAgIHRoaXMuX2xlZnQgPSB0aGlzLl9ncmlkWCA9IGN1cnJlbnRMZWZ0O1xuICAgIHRoaXMuX3RvcCA9IHRoaXMuX2dyaWRZID0gY3VycmVudFRvcDtcblxuICAgIC8vIENyZWF0ZSBwbGFjZWhvbGRlciAoaWYgbmVjZXNzYXJ5KS5cbiAgICBpZiAoc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmVuYWJsZWQpIHtcbiAgICAgIGl0ZW0uX2RyYWdQbGFjZWhvbGRlci5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGRyYWdJbml0IGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnSW5pdCwgaXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gSWYgYSBzcGVjaWZpYyBkcmFnIGNvbnRhaW5lciBpcyBzZXQgYW5kIGl0IGlzIGRpZmZlcmVudCBmcm9tIHRoZVxuICAgIC8vIGdyaWQncyBjb250YWluZXIgZWxlbWVudCB3ZSBuZWVkIHRvIGNhc3Qgc29tZSBleHRyYSBzcGVsbHMuXG4gICAgaWYgKGhhc0RyYWdDb250YWluZXIpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBjb250YWluZXIgb2Zmc2V0IGRpZmZzIHRvIGRyYWcgZGF0YS5cbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcblxuICAgICAgLy8gSWYgdGhlIGRyYWdnZWQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHRoZSBkcmFnIGNvbnRhaW5lciBhbGwgd2UgbmVlZCB0b1xuICAgICAgLy8gZG8gaXMgc2V0dXAgdGhlIHJlbGF0aXZlIGRyYWcgcG9zaXRpb24gZGF0YS5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgPT09IGRyYWdDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fZ3JpZFggPSBjdXJyZW50TGVmdCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgICB0aGlzLl9ncmlkWSA9IGN1cnJlbnRUb3AgLSB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gYXBwZW5kIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgY29ycmVjdCBjb250YWluZXIsXG4gICAgICAvLyBzZXR1cCB0aGUgYWN0dWFsIGRyYWcgcG9zaXRpb24gZGF0YSBhbmQgYWRqdXN0IHRoZSBlbGVtZW50J3MgdHJhbnNsYXRlXG4gICAgICAvLyB2YWx1ZXMgdG8gYWNjb3VudCBmb3IgdGhlIERPTSBwb3NpdGlvbiBzaGlmdC5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9sZWZ0ID0gY3VycmVudExlZnQgKyB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgICAgdGhpcy5fdG9wID0gY3VycmVudFRvcCArIHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgICBkcmFnQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2xlZnQsIHRoaXMuX3RvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGRyYWcgY2xhc3MgYW5kIGJpbmQgc2Nyb2xsZXJzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1EcmFnZ2luZ0NsYXNzKTtcbiAgICB0aGlzLl9iaW5kU2Nyb2xsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBFbWl0IGRyYWdTdGFydCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ1N0YXJ0LCBpdGVtLCBldmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgbW92ZSBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vbk1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBheGlzID0gc2V0dGluZ3MuZHJhZ0F4aXM7XG5cbiAgICAvLyBVcGRhdGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneScpIHtcbiAgICAgIHZhciB4RGlmZiA9IGV2ZW50LmNsaWVudFggLSB0aGlzLl9kcmFnRXZlbnQuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xlZnQgKz0geERpZmY7XG4gICAgICB0aGlzLl9ncmlkWCArPSB4RGlmZjtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGllbnRYICs9IHhEaWZmO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB2ZXJ0aWNhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneCcpIHtcbiAgICAgIHZhciB5RGlmZiA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLl9kcmFnRXZlbnQuY2xpZW50WTtcbiAgICAgIHRoaXMuX3RvcCArPSB5RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRZICs9IHlEaWZmO1xuICAgICAgdGhpcy5fZWxlbWVudENsaWVudFkgKz0geURpZmY7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGV2ZW50IGRhdGEuXG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gZXZlbnQ7XG5cbiAgICAvLyBEbyBtb3ZlIHByZXBhcmUvYXBwbHkgaGFuZGxpbmcgaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRNb3ZlVGljayhpdGVtLl9pZCwgdGhpcy5fcHJlcGFyZU1vdmUsIHRoaXMuX2FwcGx5TW92ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZHJhZ2dlZCBpdGVtIGZvciBtb3ZpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlcGFyZU1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0ZW0gaXMgbm90IGFjdGl2ZS5cbiAgICBpZiAoIXRoaXMuX2l0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBJZiBkcmFnIHNvcnQgaXMgZW5hYmxlZCAtPiBjaGVjayBvdmVybGFwLlxuICAgIGlmICh0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdTb3J0KSB7XG4gICAgICBpZiAodGhpcy5fY2hlY2tIZXVyaXN0aWNzKHRoaXMuX2RyYWdFdmVudCkpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGx5IG1vdmVtZW50IHRvIGRyYWdnZWQgaXRlbS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9hcHBseU1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0ZW0gaXMgbm90IGFjdGl2ZS5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGUgZWxlbWVudCdzIHRyYW5zbGF0ZVgvWSB2YWx1ZXMuXG4gICAgaXRlbS5fZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9sZWZ0LCB0aGlzLl90b3ApO1xuXG4gICAgLy8gRW1pdCBkcmFnTW92ZSBldmVudC5cbiAgICB0aGlzLl9nZXRHcmlkKCkuX2VtaXQoZXZlbnREcmFnTW92ZSwgaXRlbSwgdGhpcy5fZHJhZ0V2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBzY3JvbGwgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vblNjcm9sbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCByZXNldCBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBsYXN0IHNjcm9sbCBldmVudC5cbiAgICB0aGlzLl9zY3JvbGxFdmVudCA9IGV2ZW50O1xuXG4gICAgLy8gRG8gc2Nyb2xsIHByZXBhcmUvYXBwbHkgaGFuZGxpbmcgaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRTY3JvbGxUaWNrKGl0ZW0uX2lkLCB0aGlzLl9wcmVwYXJlU2Nyb2xsLCB0aGlzLl9hcHBseVNjcm9sbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZHJhZ2dlZCBpdGVtIGZvciBzY3JvbGxpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlcGFyZVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSBkbyBub3RoaW5nLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgYXhpcyA9IHNldHRpbmdzLmRyYWdBeGlzO1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcblxuICAgIC8vIENhbGN1bGF0ZSBlbGVtZW50J3MgcmVjdCBhbmQgeC95IGRpZmYuXG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB4RGlmZiA9IHRoaXMuX2VsZW1lbnRDbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgIHZhciB5RGlmZiA9IHRoaXMuX2VsZW1lbnRDbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICAvLyBVcGRhdGUgY29udGFpbmVyIGRpZmYuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gZ3JpZENvbnRhaW5lcikge1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYodGhpcy5fY29udGFpbmluZ0Jsb2NrLCBncmlkQ29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneScpIHtcbiAgICAgIHRoaXMuX2xlZnQgKz0geERpZmY7XG4gICAgICB0aGlzLl9ncmlkWCA9IHRoaXMuX2xlZnQgLSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdmVydGljYWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3gnKSB7XG4gICAgICB0aGlzLl90b3AgKz0geURpZmY7XG4gICAgICB0aGlzLl9ncmlkWSA9IHRoaXMuX3RvcCAtIHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgIH1cblxuICAgIC8vIE92ZXJsYXAgaGFuZGxpbmcuXG4gICAgaWYgKHNldHRpbmdzLmRyYWdTb3J0KSB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBseSBzY3JvbGwgdG8gZHJhZ2dlZCBpdGVtLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2FwcGx5U2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlIGRvIG5vdGhpbmcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVXBkYXRlIGVsZW1lbnQncyB0cmFuc2xhdGVYL1kgdmFsdWVzLlxuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fbGVmdCwgdGhpcy5fdG9wKTtcblxuICAgIC8vIEVtaXQgZHJhZ1Njcm9sbCBldmVudC5cbiAgICB0aGlzLl9nZXRHcmlkKCkuX2VtaXQoZXZlbnREcmFnU2Nyb2xsLCBpdGVtLCB0aGlzLl9zY3JvbGxFdmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgcXVldWVkIG1vdmUgYW5kIHNjcm9sbCB0aWNrcy5cbiAgICBjYW5jZWxNb3ZlVGljayhpdGVtLl9pZCk7XG4gICAgY2FuY2VsU2Nyb2xsVGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBGaW5pc2ggY3VycmVudGx5IHF1ZXVlZCBvdmVybGFwIGNoZWNrLlxuICAgIHNldHRpbmdzLmRyYWdTb3J0ICYmIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCdmaW5pc2gnKTtcblxuICAgIC8vIFJlbW92ZSBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIHRoaXMuX3VuYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gU2V0dXAgcmVsZWFzZSBkYXRhLlxuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZYID0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlkgPSB0aGlzLl9jb250YWluZXJEaWZmWTtcblxuICAgIC8vIFJlc2V0IGRyYWcgZGF0YS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gUmVtb3ZlIGRyYWcgY2xhc3MgbmFtZSBmcm9tIGVsZW1lbnQuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbURyYWdnaW5nQ2xhc3MpO1xuXG4gICAgLy8gRW1pdCBkcmFnRW5kIGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnRW5kLCBpdGVtLCBldmVudCk7XG5cbiAgICAvLyBGaW5pc2ggdXAgdGhlIG1pZ3JhdGlvbiBwcm9jZXNzIG9yIHN0YXJ0IHRoZSByZWxlYXNlIHByb2Nlc3MuXG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPyB0aGlzLl9maW5pc2hNaWdyYXRpb24oKSA6IHJlbGVhc2Uuc3RhcnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBoZWxwZXJzXG4gICAqICoqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGhvdyBtYW55IHBlcmNlbnQgdGhlIGludGVyc2VjdGlvbiBhcmVhIG9mIHR3byByZWN0YW5nbGVzIGlzIGZyb21cbiAgICogdGhlIG1heGltdW0gcG90ZW50aWFsIGludGVyc2VjdGlvbiBhcmVhIGJldHdlZW4gdGhlIHJlY3RhbmdsZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqICAgLSBBIG51bWJlciBiZXR3ZWVuIDAtMTAwLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UmVjdE92ZXJsYXBTY29yZShhLCBiKSB7XG4gICAgLy8gUmV0dXJuIDAgaW1tZWRpYXRlbHkgaWYgdGhlIHJlY3RhbmdsZXMgZG8gbm90IG92ZXJsYXAuXG4gICAgaWYgKFxuICAgICAgYS5sZWZ0ICsgYS53aWR0aCA8PSBiLmxlZnQgfHxcbiAgICAgIGIubGVmdCArIGIud2lkdGggPD0gYS5sZWZ0IHx8XG4gICAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wIHx8XG4gICAgICBiLnRvcCArIGIuaGVpZ2h0IDw9IGEudG9wXG4gICAgKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIGFyZWEncyB3aWR0aCwgaGVpZ2h0LCBtYXggaGVpZ2h0IGFuZCBtYXggd2lkdGguXG4gICAgdmFyIHdpZHRoID0gTWF0aC5taW4oYS5sZWZ0ICsgYS53aWR0aCwgYi5sZWZ0ICsgYi53aWR0aCkgLSBNYXRoLm1heChhLmxlZnQsIGIubGVmdCk7XG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWluKGEudG9wICsgYS5oZWlnaHQsIGIudG9wICsgYi5oZWlnaHQpIC0gTWF0aC5tYXgoYS50b3AsIGIudG9wKTtcbiAgICB2YXIgbWF4V2lkdGggPSBNYXRoLm1pbihhLndpZHRoLCBiLndpZHRoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5taW4oYS5oZWlnaHQsIGIuaGVpZ2h0KTtcblxuICAgIHJldHVybiAoKHdpZHRoICogaGVpZ2h0KSAvIChtYXhXaWR0aCAqIG1heEhlaWdodCkpICogMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYW4gYW5jaG9yIGVsZW1lbnQgYW5kIG9wZW4gdGhlIGhyZWYgdXJsIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBvcGVuQW5jaG9ySHJlZihlbGVtZW50KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIGFuY2hvciBlbGVtZW50LlxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2EnKSByZXR1cm47XG5cbiAgICAvLyBHZXQgaHJlZiBhbmQgbWFrZSBzdXJlIGl0IGV4aXN0cy5cbiAgICB2YXIgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgaWYgKCFocmVmKSByZXR1cm47XG5cbiAgICAvLyBGaW5hbGx5IGxldCdzIG5hdmlnYXRlIHRvIHRoZSBsaW5rIGhyZWYuXG4gICAgdmFyIHRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKTtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykge1xuICAgICAgd2luZG93Lm9wZW4oaHJlZiwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHBsYWNlaG9sZGVyLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtRHJhZ1BsYWNlaG9sZGVyKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9hbmltYXRlID0gbmV3IEl0ZW1BbmltYXRlKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gJyc7XG4gICAgdGhpcy5fZGlkTWlncmF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IDA7XG4gICAgdGhpcy5fbmV4dExlZnQgPSAwO1xuICAgIHRoaXMuX25leHRUb3AgPSAwO1xuXG4gICAgLy8gQmluZCBhbmltYXRpb24gaGFuZGxlcnMuXG4gICAgdGhpcy5fc2V0dXBBbmltYXRpb24gPSB0aGlzLl9zZXR1cEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uID0gdGhpcy5fc3RhcnRBbmltYXRpb24uYmluZCh0aGlzKTtcblxuICAgIC8vIEJpbmQgZXZlbnQgaGFuZGxlcnMuXG4gICAgdGhpcy5fb25MYXlvdXRTdGFydCA9IHRoaXMuX29uTGF5b3V0U3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkxheW91dEVuZCA9IHRoaXMuX29uTGF5b3V0RW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25SZWxlYXNlRW5kID0gdGhpcy5fb25SZWxlYXNlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25NaWdyYXRlID0gdGhpcy5fb25NaWdyYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBNb3ZlIHBsYWNlaG9sZGVyIHRvIGEgbmV3IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vbkxheW91dFN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG5cbiAgICAvLyBGaW5kIG91dCB0aGUgaXRlbSdzIG5ldyAodW5hcHBsaWVkKSBsZWZ0IGFuZCB0b3AgcG9zaXRpb24uXG4gICAgdmFyIGl0ZW1JbmRleCA9IGdyaWQuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdmFyIG5leHRMZWZ0ID0gZ3JpZC5fbGF5b3V0LnNsb3RzW2l0ZW1JbmRleCAqIDJdO1xuICAgIHZhciBuZXh0VG9wID0gZ3JpZC5fbGF5b3V0LnNsb3RzW2l0ZW1JbmRleCAqIDIgKyAxXTtcblxuICAgIC8vIElmIGl0ZW0ncyBwb3NpdGlvbiBkaWQgbm90IGNoYW5nZSBhbmQgdGhlIGl0ZW0gZGlkIG5vdCBtaWdyYXRlIHdlIGNhblxuICAgIC8vIHNhZmVseSBza2lwIGxheW91dC5cbiAgICBpZiAoIXRoaXMuX2RpZE1pZ3JhdGUgJiYgaXRlbS5fbGVmdCA9PT0gbmV4dExlZnQgJiYgaXRlbS5fdG9wID09PSBuZXh0VG9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2xvdHMgZGF0YSBpcyBjYWxjdWxhdGVkIHdpdGggaXRlbSBtYXJnaW5zIGFkZGVkIHRvIHRoZW0gc28gd2UgbmVlZCB0byBhZGRcbiAgICAvLyBpdGVtJ3MgbGVmdCBhbmQgdG9wIG1hcmdpbiB0byB0aGUgc2xvdCBkYXRhIHRvIGdldCB0aGUgcGxhY2Vob2xkZXInc1xuICAgIC8vIG5leHQgcG9zaXRpb24uXG4gICAgbmV4dExlZnQgKz0gaXRlbS5fbWFyZ2luTGVmdDtcbiAgICBuZXh0VG9wICs9IGl0ZW0uX21hcmdpblRvcDtcblxuICAgIC8vIEp1c3Qgc25hcCB0byBuZXcgcG9zaXRpb24gd2l0aG91dCBhbnkgYW5pbWF0aW9ucyBpZiBubyBhbmltYXRpb24gaXNcbiAgICAvLyByZXF1aXJlZCBvciBpZiBwbGFjZWhvbGRlciBtb3ZlcyBiZXR3ZWVuIGdyaWRzLlxuICAgIHZhciBhbmltRW5hYmxlZCA9IGdyaWQuX3NldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5kdXJhdGlvbiA+IDA7XG4gICAgaWYgKCFhbmltRW5hYmxlZCB8fCB0aGlzLl9kaWRNaWdyYXRlKSB7XG4gICAgICAvLyBDYW5jZWwgcG90ZW50aWFsIChxdWV1ZWQpIGxheW91dCB0aWNrLlxuICAgICAgY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkKTtcblxuICAgICAgLy8gU25hcCBwbGFjZWhvbGRlciB0byBjb3JyZWN0IHBvc2l0aW9uLlxuICAgICAgdmFyIHRhcmdldFN0eWxlcyA9IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcobmV4dExlZnQsIG5leHRUb3ApIH07XG4gICAgICBpZiAodGhpcy5fYW5pbWF0ZS5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGUuc3RvcCh0YXJnZXRTdHlsZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3R5bGVzKHRoaXMuX2VsZW1lbnQsIHRhcmdldFN0eWxlcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgcGxhY2Vob2xkZXIgaW5zaWRlIGNvcnJlY3QgY29udGFpbmVyIGFmdGVyIG1pZ3JhdGlvbi5cbiAgICAgIGlmICh0aGlzLl9kaWRNaWdyYXRlKSB7XG4gICAgICAgIGdyaWQuZ2V0RWxlbWVudCgpLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kaWRNaWdyYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0aGUgcGxhY2Vob2xkZXIncyBsYXlvdXQgYW5pbWF0aW9uIGluIHRoZSBuZXh0IHRpY2suIFdlIGRvIHRoaXMgdG9cbiAgICAvLyBhdm9pZCBsYXlvdXQgdGhyYXNoaW5nLlxuICAgIHRoaXMuX25leHRMZWZ0ID0gbmV4dExlZnQ7XG4gICAgdGhpcy5fbmV4dFRvcCA9IG5leHRUb3A7XG4gICAgYWRkUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkLCB0aGlzLl9zZXR1cEFuaW1hdGlvbiwgdGhpcy5fc3RhcnRBbmltYXRpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHBsYWNlaG9sZGVyIGZvciBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9zZXR1cEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKHRoaXMuX2VsZW1lbnQpO1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IHRyYW5zbGF0ZS55O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0ZTtcbiAgICB2YXIgY3VycmVudExlZnQgPSB0aGlzLl9jdXJyZW50TGVmdDtcbiAgICB2YXIgY3VycmVudFRvcCA9IHRoaXMuX2N1cnJlbnRUb3A7XG4gICAgdmFyIG5leHRMZWZ0ID0gdGhpcy5fbmV4dExlZnQ7XG4gICAgdmFyIG5leHRUb3AgPSB0aGlzLl9uZXh0VG9wO1xuICAgIHZhciB0YXJnZXRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKG5leHRMZWZ0LCBuZXh0VG9wKSB9O1xuXG4gICAgLy8gSWYgcGxhY2Vob2xkZXIgaXMgYWxyZWFkeSBpbiBjb3JyZWN0IHBvc2l0aW9uIGxldCdzIGp1c3Qgc3RvcCBhbmltYXRpb25cbiAgICAvLyBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmIChjdXJyZW50TGVmdCA9PT0gbmV4dExlZnQgJiYgY3VycmVudFRvcCA9PT0gbmV4dFRvcCkge1xuICAgICAgaWYgKGFuaW1hdGlvbi5pc0FuaW1hdGluZygpKSBhbmltYXRpb24uc3RvcCh0YXJnZXRTdHlsZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBsZXQncyBzdGFydCB0aGUgYW5pbWF0aW9uLlxuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2l0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXI7XG4gICAgdmFyIGN1cnJlbnRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGN1cnJlbnRMZWZ0LCBjdXJyZW50VG9wKSB9O1xuICAgIGFuaW1hdGlvbi5zdGFydChjdXJyZW50U3R5bGVzLCB0YXJnZXRTdHlsZXMsIHtcbiAgICAgIGR1cmF0aW9uOiBzZXR0aW5ncy5kdXJhdGlvbixcbiAgICAgIGVhc2luZzogc2V0dGluZ3MuZWFzaW5nLFxuICAgICAgb25GaW5pc2g6IHRoaXMuX29uTGF5b3V0RW5kXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExheW91dCBlbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25MYXlvdXRFbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcmVzZXRBZnRlckxheW91dCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBlbmQgaGFuZGxlci4gVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCB3aGVuIGRyYWdSZWxlYXNlRW5kIGV2ZW50IGlzXG4gICAqIGVtaXR0ZWQgYW5kIHJlY2VpdmVzIHRoZSBldmVudCBkYXRhIGFzIGl0J3MgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vblJlbGVhc2VFbmQgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0uX2lkID09PSB0aGlzLl9pdGVtLl9pZCkge1xuICAgICAgLy8gSWYgdGhlIHBsYWNlaG9sZGVyIGlzIG5vdCBhbmltYXRpbmcgYW55bW9yZSB3ZSBjYW4gc2FmZWx5IHJlc2V0IGl0LlxuICAgICAgaWYgKCF0aGlzLl9hbmltYXRlLmlzQW5pbWF0aW5nKCkpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBwbGFjZWhvbGRlciBpdGVtIGlzIHN0aWxsIGFuaW1hdGluZyBoZXJlLCBsZXQncyB3YWl0IGZvciBpdCB0b1xuICAgICAgLy8gZmluaXNoIGl0J3MgYW5pbWF0aW9uLlxuICAgICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBNaWdyYXRpb24gc3RhcnQgaGFuZGxlci4gVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCB3aGVuIGJlZm9yZVNlbmQgZXZlbnQgaXNcbiAgICogZW1pdHRlZCBhbmQgcmVjZWl2ZXMgdGhlIGV2ZW50IGRhdGEgYXMgaXQncyBhcmd1bWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqIEBwYXJhbSB7SXRlbX0gZGF0YS5pdGVtXG4gICAqIEBwYXJhbSB7R3JpZH0gZGF0YS5mcm9tR3JpZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5mcm9tSW5kZXhcbiAgICogQHBhcmFtIHtHcmlkfSBkYXRhLnRvR3JpZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS50b0luZGV4XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25NaWdyYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgbWF0Y2hpbmcgaXRlbS5cbiAgICBpZiAoZGF0YS5pdGVtICE9PSB0aGlzLl9pdGVtKSByZXR1cm47XG5cbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2l0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBuZXh0R3JpZCA9IGRhdGEudG9HcmlkO1xuXG4gICAgLy8gVW5iaW5kIGxpc3RlbmVycyBmcm9tIGN1cnJlbnQgZ3JpZC5cbiAgICBncmlkLm9mZihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub2ZmKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIGdyaWQub2ZmKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIEJpbmQgbGlzdGVuZXJzIHRvIHRoZSBuZXh0IGdyaWQuXG4gICAgbmV4dEdyaWQub24oZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBuZXh0R3JpZC5vbihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBuZXh0R3JpZC5vbihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBNYXJrIHRoZSBpdGVtIGFzIG1pZ3JhdGVkLlxuICAgIHRoaXMuX2RpZE1pZ3JhdGUgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGxhY2Vob2xkZXIuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBvbmx5IHdyaXRlcyB0byBET00gYW5kIGRvZXMgbm90XG4gICAqIHJlYWQgYW55dGhpbmcgZnJvbSBET00gc28gaXQgc2hvdWxkIG5vdCBjYXVzZSBhbnkgYWRkaXRpb25hbCBsYXlvdXRcbiAgICogdGhyYXNoaW5nIHdoZW4gaXQncyBjYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgZHJhZyBzdGFydCBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgcGxhY2Vob2xkZXIgc2V0IHVwIHdlIGNhbiBza2lwIHRoZSBpbml0aWF0aW9uIGxvZ2ljLlxuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0ZTtcblxuICAgIC8vIENyZWF0ZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIHZhciBlbGVtZW50O1xuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50KSkge1xuICAgICAgZWxlbWVudCA9IHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIFVwZGF0ZSBlbGVtZW50IHRvIGFuaW1hdGlvbiBpbnN0YW5jZS5cbiAgICBhbmltYXRpb24uX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgLy8gQWRkIHBsYWNlaG9sZGVyIGNsYXNzIHRvIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHNldHRpbmdzLml0ZW1QbGFjZWhvbGRlckNsYXNzIHx8ICcnO1xuICAgIGlmICh0aGlzLl9jbGFzc05hbWUpIHtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgLy8gUG9zaXRpb24gdGhlIHBsYWNlaG9sZGVyIGl0ZW0gY29ycmVjdGx5LlxuICAgIHZhciBsZWZ0ID0gaXRlbS5fbGVmdCArIGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgdmFyIHRvcCA9IGl0ZW0uX3RvcCArIGl0ZW0uX21hcmdpblRvcDtcbiAgICBzZXRTdHlsZXMoZWxlbWVudCwge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICB3aWR0aDogaXRlbS5fd2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBpdGVtLl9oZWlnaHQgKyAncHgnLFxuICAgICAgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcobGVmdCwgdG9wKVxuICAgIH0pO1xuXG4gICAgLy8gQmluZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgZ3JpZC5vbihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBncmlkLm9uKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgZ3JpZC5vbihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBvbkNyZWF0ZSBob29rLlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vbkNyZWF0ZSkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vbkNyZWF0ZShpdGVtLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnQgdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQgdG8gdGhlIGdyaWQuXG4gICAgZ3JpZC5nZXRFbGVtZW50KCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IHBsYWNlaG9sZGVyIGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG5cbiAgICAvLyBSZXNldCBmbGFnLlxuICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcblxuICAgIC8vIENhbmNlbCBwb3RlbnRpYWwgKHF1ZXVlZCkgbGF5b3V0IHRpY2suXG4gICAgY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFJlc2V0IGFuaW1hdGlvbiBpbnN0YW5jZS5cbiAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIGFuaW1hdGlvbi5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBVbmJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGdyaWQub2ZmKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gUmVtb3ZlIHBsYWNlaG9sZGVyIGNsYXNzIGZyb20gdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQuXG4gICAgaWYgKHRoaXMuX2NsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBlbGVtZW50LlxuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIG9uUmVtb3ZlIGhvb2suIE5vdGUgdGhhdCBoZXJlIHdlIHVzZSB0aGUgY3VycmVudCBncmlkJ3Mgb25SZW1vdmUgY2FsbGJhY2tcbiAgICAvLyBzbyBpZiB0aGUgaXRlbSBoYXMgbWlncmF0ZWQgZHVyaW5nIGRyYWcgdGhlIG9uUmVtb3ZlIG1ldGhvZCB3aWxsIG5vdCBiZVxuICAgIC8vIHRoZSBvcmlnaW5hdGluZyBncmlkJ3MgbWV0aG9kLlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZSkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZShpdGVtLCBlbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBwbGFjZWhvbGRlcidzIGRpbWVuc2lvbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge2hlaWdodH0gaGVpZ2h0XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS51cGRhdGVEaW1lbnNpb25zID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCArICdweCcsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBwbGFjZWhvbGRlciBpcyBjdXJyZW50bHkgYWN0aXZlICh2aXNpYmxlKS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgcGxhY2Vob2xkZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuX2FuaW1hdGUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2l0ZW0gPSB0aGlzLl9hbmltYXRlID0gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogUXVldWUgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUXVldWUoKSB7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFkZCBjYWxsYmFjayB0byB0aGUgcXVldWUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFF1ZXVlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3F1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHF1ZXVlIGNhbGxiYWNrcyBhbmQgcmVzZXQgdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsqfSBhcmcxXG4gICAqIEBwYXJhbSB7Kn0gYXJnMlxuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbihhcmcxLCBhcmcyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBsZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBRdWl0IGVhcmx5IGlmIHRoZSBxdWV1ZSBpcyBlbXB0eS5cbiAgICBpZiAoIWxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgc2luZ2xlQ2FsbGJhY2sgPSBsZW5ndGggPT09IDE7XG4gICAgdmFyIHNuYXBzaG90ID0gc2luZ2xlQ2FsbGJhY2sgPyBxdWV1ZVswXSA6IHF1ZXVlLnNsaWNlKDApO1xuXG4gICAgLy8gUmVzZXQgcXVldWUuXG4gICAgcXVldWUubGVuZ3RoID0gMDtcblxuICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSBjYWxsYmFjayBsZXQncyBqdXN0IGNhbGwgaXQuXG4gICAgaWYgKHNpbmdsZUNhbGxiYWNrKSB7XG4gICAgICBzbmFwc2hvdChhcmcxLCBhcmcyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgbXVsdGlwbGUgY2FsbGJhY2tzLCBsZXQncyBwcm9jZXNzIHRoZW0uXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzbmFwc2hvdFtpXShhcmcxLCBhcmcyKTtcbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgUXVldWUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFF1ZXVlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5fcXVldWUubGVuZ3RoID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMYXlvdXQgbWFuYWdlciBmb3IgSXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbUxheW91dChpdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzSW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50U3R5bGVzID0ge307XG4gICAgdGhpcy5fdGFyZ2V0U3R5bGVzID0ge307XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSAwO1xuICAgIHRoaXMuX29mZnNldExlZnQgPSAwO1xuICAgIHRoaXMuX29mZnNldFRvcCA9IDA7XG4gICAgdGhpcy5fc2tpcE5leHRBbmltYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLl9hbmltYXRlT3B0aW9ucyA9IHtcbiAgICAgIG9uRmluaXNoOiB0aGlzLl9maW5pc2guYmluZCh0aGlzKVxuICAgIH07XG4gICAgdGhpcy5fcXVldWUgPSBuZXcgUXVldWUoKTtcblxuICAgIC8vIEJpbmQgYW5pbWF0aW9uIGhhbmRsZXJzIGFuZCBmaW5pc2ggbWV0aG9kLlxuICAgIHRoaXMuX3NldHVwQW5pbWF0aW9uID0gdGhpcy5fc2V0dXBBbmltYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbiA9IHRoaXMuX3N0YXJ0QW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgaXRlbSBsYXlvdXQgYmFzZWQgb24gaXQncyBjdXJyZW50IGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1MYXlvdXR9XG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcbiAgICB2YXIgZ3JpZFNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBpc1Bvc2l0aW9uaW5nID0gdGhpcy5faXNBY3RpdmU7XG4gICAgdmFyIGlzSnVzdFJlbGVhc2VkID0gcmVsZWFzZS5faXNBY3RpdmUgJiYgcmVsZWFzZS5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPT09IGZhbHNlO1xuICAgIHZhciBhbmltRHVyYXRpb24gPSBpc0p1c3RSZWxlYXNlZFxuICAgICAgPyBncmlkU2V0dGluZ3MuZHJhZ1JlbGVhc2VEdXJhdGlvblxuICAgICAgOiBncmlkU2V0dGluZ3MubGF5b3V0RHVyYXRpb247XG4gICAgdmFyIGFuaW1FYXNpbmcgPSBpc0p1c3RSZWxlYXNlZCA/IGdyaWRTZXR0aW5ncy5kcmFnUmVsZWFzZUVhc2luZyA6IGdyaWRTZXR0aW5ncy5sYXlvdXRFYXNpbmc7XG4gICAgdmFyIGFuaW1FbmFibGVkID0gIWluc3RhbnQgJiYgIXRoaXMuX3NraXBOZXh0QW5pbWF0aW9uICYmIGFuaW1EdXJhdGlvbiA+IDA7XG4gICAgdmFyIGlzQW5pbWF0aW5nO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgY3VycmVudGx5IHBvc2l0aW9uaW5nIHByb2Nlc3MgY3VycmVudCBsYXlvdXQgY2FsbGJhY2tcbiAgICAvLyBxdWV1ZSB3aXRoIGludGVycnVwdGVkIGZsYWcgb24uXG4gICAgaWYgKGlzUG9zaXRpb25pbmcpIHRoaXMuX3F1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuXG4gICAgLy8gTWFyayByZWxlYXNlIHBvc2l0aW9uaW5nIGFzIHN0YXJ0ZWQuXG4gICAgaWYgKGlzSnVzdFJlbGVhc2VkKSByZWxlYXNlLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9IHRydWU7XG5cbiAgICAvLyBQdXNoIHRoZSBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgaWYgKGlzRnVuY3Rpb24ob25GaW5pc2gpKSB0aGlzLl9xdWV1ZS5hZGQob25GaW5pc2gpO1xuXG4gICAgLy8gSWYgbm8gYW5pbWF0aW9ucyBhcmUgbmVlZGVkLCBlYXN5IHBlYXN5IVxuICAgIGlmICghYW5pbUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9mZnNldHMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRhcmdldFN0eWxlcygpO1xuICAgICAgaXNBbmltYXRpbmcgPSBpdGVtLl9hbmltYXRlLmlzQW5pbWF0aW5nKCk7XG4gICAgICB0aGlzLnN0b3AoZmFsc2UsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICAhaXNBbmltYXRpbmcgJiYgc2V0U3R5bGVzKGVsZW1lbnQsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICB0aGlzLl9za2lwTmV4dEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpbmlzaCgpO1xuICAgIH1cblxuICAgIC8vIFNldCBpdGVtIGFjdGl2ZSBhbmQgc3RvcmUgc29tZSBkYXRhIGZvciB0aGUgYW5pbWF0aW9uIHRoYXQgaXMgYWJvdXQgdG8gYmVcbiAgICAvLyB0cmlnZ2VyZWQuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2FuaW1hdGVPcHRpb25zLmVhc2luZyA9IGFuaW1FYXNpbmc7XG4gICAgdGhpcy5fYW5pbWF0ZU9wdGlvbnMuZHVyYXRpb24gPSBhbmltRHVyYXRpb247XG4gICAgdGhpcy5faXNJbnRlcnJ1cHRlZCA9IGlzUG9zaXRpb25pbmc7XG5cbiAgICAvLyBTdGFydCB0aGUgaXRlbSdzIGxheW91dCBhbmltYXRpb24gaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRMYXlvdXRUaWNrKGl0ZW0uX2lkLCB0aGlzLl9zZXR1cEFuaW1hdGlvbiwgdGhpcy5fc3RhcnRBbmltYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgaXRlbSdzIHBvc2l0aW9uIGFuaW1hdGlvbiBpZiBpdCBpcyBjdXJyZW50bHkgYW5pbWF0aW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcm9jZXNzQ2FsbGJhY2tRdWV1ZT1mYWxzZV1cbiAgICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRTdHlsZXNdXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKHByb2Nlc3NDYWxsYmFja1F1ZXVlLCB0YXJnZXRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIENhbmNlbCBhbmltYXRpb24gaW5pdC5cbiAgICBjYW5jZWxMYXlvdXRUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFN0b3AgYW5pbWF0aW9uLlxuICAgIGl0ZW0uX2FuaW1hdGUuc3RvcCh0YXJnZXRTdHlsZXMpO1xuXG4gICAgLy8gUmVtb3ZlIHBvc2l0aW9uaW5nIGNsYXNzLlxuICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG5cbiAgICAvLyBSZXNldCBhY3RpdmUgc3RhdGUuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIC8vIFByb2Nlc3MgY2FsbGJhY2sgcXVldWUgaWYgbmVlZGVkLlxuICAgIGlmIChwcm9jZXNzQ2FsbGJhY2tRdWV1ZSkgdGhpcy5fcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1MYXlvdXR9XG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSwge30pO1xuICAgIHRoaXMuX3F1ZXVlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pdGVtID0gdGhpcy5fY3VycmVudFN0eWxlcyA9IHRoaXMuX3RhcmdldFN0eWxlcyA9IHRoaXMuX2FuaW1hdGVPcHRpb25zID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCB1cGRhdGUgaXRlbSdzIGN1cnJlbnQgbGF5b3V0IG9mZnNldCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl91cGRhdGVPZmZzZXRzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIHRoaXMuX29mZnNldExlZnQgPSByZWxlYXNlLl9pc0FjdGl2ZVxuICAgICAgPyByZWxlYXNlLl9jb250YWluZXJEaWZmWFxuICAgICAgOiBtaWdyYXRlLl9pc0FjdGl2ZVxuICAgICAgPyBtaWdyYXRlLl9jb250YWluZXJEaWZmWFxuICAgICAgOiAwO1xuXG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gcmVsZWFzZS5faXNBY3RpdmVcbiAgICAgID8gcmVsZWFzZS5fY29udGFpbmVyRGlmZllcbiAgICAgIDogbWlncmF0ZS5faXNBY3RpdmVcbiAgICAgID8gbWlncmF0ZS5fY29udGFpbmVyRGlmZllcbiAgICAgIDogMDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCB1cGRhdGUgaXRlbSdzIGxheW91dCB0YXJnZXQgc3R5bGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl91cGRhdGVUYXJnZXRTdHlsZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB0aGlzLl90YXJnZXRTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgdGhpcy5faXRlbS5fbGVmdCArIHRoaXMuX29mZnNldExlZnQsXG4gICAgICB0aGlzLl9pdGVtLl90b3AgKyB0aGlzLl9vZmZzZXRUb3BcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5pc2ggaXRlbSBsYXlvdXQgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgbWlncmF0ZSA9IGl0ZW0uX21pZ3JhdGU7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuXG4gICAgLy8gTWFyayB0aGUgaXRlbSBhcyBpbmFjdGl2ZSBhbmQgcmVtb3ZlIHBvc2l0aW9uaW5nIGNsYXNzZXMuXG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgcmVtb3ZlQ2xhc3MoaXRlbS5fZWxlbWVudCwgaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLml0ZW1Qb3NpdGlvbmluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBGaW5pc2ggdXAgcmVsZWFzZSBhbmQgbWlncmF0aW9uLlxuICAgIGlmIChyZWxlYXNlLl9pc0FjdGl2ZSkgcmVsZWFzZS5zdG9wKCk7XG4gICAgaWYgKG1pZ3JhdGUuX2lzQWN0aXZlKSBtaWdyYXRlLnN0b3AoKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCBpdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBpdGVtIGZvciBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9zZXR1cEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUodGhpcy5faXRlbS5fZWxlbWVudCk7XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSB0cmFuc2xhdGUueDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gdHJhbnNsYXRlLnk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3N0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcblxuICAgIC8vIExldCdzIHVwZGF0ZSB0aGUgb2Zmc2V0IGRhdGEgYW5kIHRhcmdldCBzdHlsZXMuXG4gICAgdGhpcy5fdXBkYXRlT2Zmc2V0cygpO1xuICAgIHRoaXMuX3VwZGF0ZVRhcmdldFN0eWxlcygpO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgYWxyZWFkeSBpbiBjb3JyZWN0IHBvc2l0aW9uIGxldCdzIHF1aXQgZWFybHkuXG4gICAgaWYgKFxuICAgICAgaXRlbS5fbGVmdCA9PT0gdGhpcy5fY3VycmVudExlZnQgLSB0aGlzLl9vZmZzZXRMZWZ0ICYmXG4gICAgICBpdGVtLl90b3AgPT09IHRoaXMuX2N1cnJlbnRUb3AgLSB0aGlzLl9vZmZzZXRUb3BcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLl9pc0ludGVycnVwdGVkKSB0aGlzLnN0b3AoZmFsc2UsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fZmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IGl0ZW0ncyBwb3NpdGlvbmluZyBjbGFzcyBpZiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9pc0ludGVycnVwdGVkKSB7XG4gICAgICBhZGRDbGFzcyhpdGVtLl9lbGVtZW50LCBzZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGN1cnJlbnQgc3R5bGVzIGZvciBhbmltYXRpb24uXG4gICAgdGhpcy5fY3VycmVudFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fY3VycmVudExlZnQsIHRoaXMuX2N1cnJlbnRUb3ApO1xuXG4gICAgLy8gQW5pbWF0ZS5cbiAgICBpdGVtLl9hbmltYXRlLnN0YXJ0KHRoaXMuX2N1cnJlbnRTdHlsZXMsIHRoaXMuX3RhcmdldFN0eWxlcywgdGhpcy5fYW5pbWF0ZU9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciB0ZW1wU3R5bGVzID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBtaWdyYXRlIHByb2Nlc3MgaGFuZGxlciBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbU1pZ3JhdGUoaXRlbSkge1xuICAgIC8vIFByaXZhdGUgcHJvcHMuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgdGhlIG1pZ3JhdGUgcHJvY2VzcyBvZiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkfSB0YXJnZXRHcmlkXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gcG9zaXRpb25cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2NvbnRhaW5lcl1cbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24odGFyZ2V0R3JpZCwgcG9zaXRpb24sIGNvbnRhaW5lcikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBpc1Zpc2libGUgPSBpdGVtLmlzVmlzaWJsZSgpO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldFNldHRpbmdzID0gdGFyZ2V0R3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRHcmlkLl9lbGVtZW50O1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRhcmdldEdyaWQuX2l0ZW1zO1xuICAgIHZhciBjdXJyZW50SW5kZXggPSBncmlkLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIHZhciB0YXJnZXRDb250YWluZXIgPSBjb250YWluZXIgfHwgd2luZG93LmRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldEluZGV4O1xuICAgIHZhciB0YXJnZXRJdGVtO1xuICAgIHZhciBjdXJyZW50Q29udGFpbmVyO1xuICAgIHZhciBvZmZzZXREaWZmO1xuICAgIHZhciBjb250YWluZXJEaWZmO1xuICAgIHZhciB0cmFuc2xhdGU7XG4gICAgdmFyIHRyYW5zbGF0ZVg7XG4gICAgdmFyIHRyYW5zbGF0ZVk7XG5cbiAgICAvLyBHZXQgdGFyZ2V0IGluZGV4LlxuICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICB0YXJnZXRJbmRleCA9IG5vcm1hbGl6ZUFycmF5SW5kZXgodGFyZ2V0SXRlbXMsIHBvc2l0aW9uLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0SXRlbSA9IHRhcmdldEdyaWQuX2dldEl0ZW0ocG9zaXRpb24pO1xuICAgICAgLyoqIEB0b2RvIENvbnNpZGVyIHRocm93aW5nIGFuIGVycm9yIGhlcmUgaW5zdGVhZCBvZiBzaWxlbnRseSBmYWlsaW5nLiAqL1xuICAgICAgaWYgKCF0YXJnZXRJdGVtKSByZXR1cm4gdGhpcztcbiAgICAgIHRhcmdldEluZGV4ID0gdGFyZ2V0SXRlbXMuaW5kZXhPZih0YXJnZXRJdGVtKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHZhbHVlcyBpZiBuZWVkZWQuXG4gICAgaWYgKGl0ZW0uaXNQb3NpdGlvbmluZygpIHx8IHRoaXMuX2lzQWN0aXZlIHx8IGl0ZW0uaXNSZWxlYXNpbmcoKSkge1xuICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZS54O1xuICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZS55O1xuICAgIH1cblxuICAgIC8vIEFib3J0IGN1cnJlbnQgcG9zaXRpb25pbmcuXG4gICAgaWYgKGl0ZW0uaXNQb3NpdGlvbmluZygpKSB7XG4gICAgICBpdGVtLl9sYXlvdXQuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpIH0pO1xuICAgIH1cblxuICAgIC8vIEFib3J0IGN1cnJlbnQgbWlncmF0aW9uLlxuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgdHJhbnNsYXRlWCAtPSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgIHRyYW5zbGF0ZVkgLT0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgICB0aGlzLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IHJlbGVhc2UuXG4gICAgaWYgKGl0ZW0uaXNSZWxlYXNpbmcoKSkge1xuICAgICAgdHJhbnNsYXRlWCAtPSBpdGVtLl9yZWxlYXNlLl9jb250YWluZXJEaWZmWDtcbiAgICAgIHRyYW5zbGF0ZVkgLT0gaXRlbS5fcmVsZWFzZS5fY29udGFpbmVyRGlmZlk7XG4gICAgICBpdGVtLl9yZWxlYXNlLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGN1cnJlbnQgdmlzaWJpbGl0eSBhbmltYXRpb25zLlxuICAgIGl0ZW0uX3Zpc2liaWxpdHkuX3N0b3BBbmltYXRpb24oKTtcblxuICAgIC8vIERlc3Ryb3kgY3VycmVudCBkcmFnLlxuICAgIGlmIChpdGVtLl9kcmFnKSBpdGVtLl9kcmFnLmRlc3Ryb3koKTtcblxuICAgIC8vIFByb2Nlc3MgY3VycmVudCB2aXNpYmlsaXR5IGFuaW1hdGlvbiBxdWV1ZS5cbiAgICBpdGVtLl92aXNpYmlsaXR5Ll9xdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcblxuICAgIC8vIEVtaXQgYmVmb3JlU2VuZCBldmVudC5cbiAgICBpZiAoZ3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlU2VuZCkpIHtcbiAgICAgIGdyaWQuX2VtaXQoZXZlbnRCZWZvcmVTZW5kLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBiZWZvcmVSZWNlaXZlIGV2ZW50LlxuICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVSZWNlaXZlKSkge1xuICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudEJlZm9yZVJlY2VpdmUsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgY3VycmVudCBjbGFzc25hbWVzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIEFkZCBuZXcgY2xhc3NuYW1lcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCB0YXJnZXRTZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIGFkZENsYXNzKGVsZW1lbnQsIGlzVmlzaWJsZSA/IHRhcmdldFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiB0YXJnZXRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gTW92ZSBpdGVtIGluc3RhbmNlIGZyb20gY3VycmVudCBncmlkIHRvIHRhcmdldCBncmlkLlxuICAgIGdyaWQuX2l0ZW1zLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuICAgIGFycmF5SW5zZXJ0KHRhcmdldEl0ZW1zLCBpdGVtLCB0YXJnZXRJbmRleCk7XG5cbiAgICAvLyBVcGRhdGUgaXRlbSdzIGdyaWQgaWQgcmVmZXJlbmNlLlxuICAgIGl0ZW0uX2dyaWRJZCA9IHRhcmdldEdyaWQuX2lkO1xuXG4gICAgLy8gR2V0IGN1cnJlbnQgY29udGFpbmVyLlxuICAgIGN1cnJlbnRDb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAvLyBNb3ZlIHRoZSBpdGVtIGluc2lkZSB0aGUgdGFyZ2V0IGNvbnRhaW5lciBpZiBpdCdzIGRpZmZlcmVudCB0aGFuIHRoZVxuICAgIC8vIGN1cnJlbnQgY29udGFpbmVyLlxuICAgIGlmICh0YXJnZXRDb250YWluZXIgIT09IGN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKHRhcmdldENvbnRhaW5lciwgY3VycmVudENvbnRhaW5lciwgdHJ1ZSk7XG4gICAgICBpZiAoIXRyYW5zbGF0ZSkge1xuICAgICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGUueDtcbiAgICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZS55O1xuICAgICAgfVxuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgdHJhbnNsYXRlWCArIG9mZnNldERpZmYubGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWSArIG9mZnNldERpZmYudG9wXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjaGlsZCBlbGVtZW50J3Mgc3R5bGVzIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBzdGF0ZS5cbiAgICBpdGVtLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCBpc1Zpc2libGUgPyB0YXJnZXRTZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogdGFyZ2V0U2V0dGluZ3MuaGlkZGVuU3R5bGVzKTtcblxuICAgIC8vIFVwZGF0ZSBkaXNwbGF5IHN0eWxlLlxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdibG9jaycgOiAnaGlkZGVuJztcblxuICAgIC8vIEdldCBvZmZzZXQgZGlmZiBmb3IgdGhlIG1pZ3JhdGlvbiBkYXRhLlxuICAgIGNvbnRhaW5lckRpZmYgPSBnZXRPZmZzZXREaWZmKHRhcmdldENvbnRhaW5lciwgdGFyZ2V0RWxlbWVudCwgdHJ1ZSk7XG5cbiAgICAvLyBVcGRhdGUgaXRlbSdzIGNhY2hlZCBkaW1lbnNpb25zIGFuZCBzb3J0IGRhdGEuXG4gICAgaXRlbS5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICBpdGVtLl9yZWZyZXNoU29ydERhdGEoKTtcblxuICAgIC8vIENyZWF0ZSBuZXcgZHJhZyBoYW5kbGVyLlxuICAgIGl0ZW0uX2RyYWcgPSB0YXJnZXRTZXR0aW5ncy5kcmFnRW5hYmxlZCA/IG5ldyBJdGVtRHJhZyhpdGVtKSA6IG51bGw7XG5cbiAgICAvLyBTZXR1cCBtaWdyYXRpb24gZGF0YS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fY29udGFpbmVyID0gdGFyZ2V0Q29udGFpbmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gY29udGFpbmVyRGlmZi5sZWZ0O1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gY29udGFpbmVyRGlmZi50b3A7XG5cbiAgICAvLyBFbWl0IHNlbmQgZXZlbnQuXG4gICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhldmVudFNlbmQpKSB7XG4gICAgICBncmlkLl9lbWl0KGV2ZW50U2VuZCwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEVtaXQgcmVjZWl2ZSBldmVudC5cbiAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50UmVjZWl2ZSkpIHtcbiAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRSZWNlaXZlLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuZCB0aGUgbWlncmF0ZSBwcm9jZXNzIG9mIGFuIGl0ZW0uIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGFib3J0IGFuXG4gICAqIG9uZ29pbmcgbWlncmF0ZSBwcm9jZXNzIChhbmltYXRpb24pIG9yIGZpbmlzaCB0aGUgbWlncmF0ZSBwcm9jZXNzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbYWJvcnQ9ZmFsc2VdXG4gICAqICAtIFNob3VsZCB0aGUgbWlncmF0aW9uIGJlIGFib3J0ZWQ/XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3VycmVudFN0eWxlc11cbiAgICogIC0gT3B0aW9uYWwgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHN0eWxlcy5cbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihhYm9ydCwgY3VycmVudFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBncmlkRWxlbWVudCA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRyYW5zbGF0ZTtcblxuICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IGdyaWRFbGVtZW50KSB7XG4gICAgICBpZiAoIWN1cnJlbnRTdHlsZXMpIHtcbiAgICAgICAgaWYgKGFib3J0KSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRlbXBTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgICAgICAgdHJhbnNsYXRlLnggLSB0aGlzLl9jb250YWluZXJEaWZmWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZS55IC0gdGhpcy5fY29udGFpbmVyRGlmZllcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKGl0ZW0uX2xlZnQsIGl0ZW0uX3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFN0eWxlcyA9IHRlbXBTdHlsZXM7XG4gICAgICB9XG4gICAgICBncmlkRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBjdXJyZW50U3R5bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCh0cnVlKTtcbiAgICB0aGlzLl9pdGVtID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIHRlbXBTdHlsZXMkMSA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVsZWFzZSBwcm9jZXNzIGhhbmRsZXIgY29uc3RydWN0b3IuIEFsdGhvdWdoIHRoaXMgbWlnaHQgc2VlbSBhcyBwcm9wZXJcbiAgICogZml0IGZvciB0aGUgZHJhZyBwcm9jZXNzIHRoaXMgbmVlZHMgdG8gYmUgc2VwYXJhdGVkIGludG8gaXQncyBvd24gbG9naWNcbiAgICogYmVjYXVzZSB0aGVyZSBtaWdodCBiZSBhIHNjZW5hcmlvIHdoZXJlIGRyYWcgaXMgZGlzYWJsZWQsIGJ1dCB0aGUgcmVsZWFzZVxuICAgKiBwcm9jZXNzIHN0aWxsIG5lZWRzIHRvIGJlIGltcGxlbWVudGVkIChkcmFnZ2luZyBmcm9tIGEgZ3JpZCB0byBhbm90aGVyKS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbVJlbGVhc2UoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHJlbGVhc2UgcHJvY2VzcyBvZiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1SZWxlYXNlfVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuXG4gICAgLy8gRmxhZyByZWxlYXNlIGFzIGFjdGl2ZS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICAvLyBBZGQgcmVsZWFzZSBjbGFzcyBuYW1lIHRvIHRoZSByZWxlYXNlZCBlbGVtZW50LlxuICAgIGFkZENsYXNzKGl0ZW0uX2VsZW1lbnQsIGdyaWQuX3NldHRpbmdzLml0ZW1SZWxlYXNpbmdDbGFzcyk7XG5cbiAgICAvLyBFbWl0IGRyYWdSZWxlYXNlU3RhcnQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdSZWxlYXNlU3RhcnQsIGl0ZW0pO1xuXG4gICAgLy8gUG9zaXRpb24gdGhlIHJlbGVhc2VkIGl0ZW0uXG4gICAgaXRlbS5fbGF5b3V0LnN0YXJ0KGZhbHNlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgdGhlIHJlbGVhc2UgcHJvY2VzcyBvZiBhbiBpdGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBhYm9ydCBhblxuICAgKiBvbmdvaW5nIHJlbGVhc2UgcHJvY2VzcyAoYW5pbWF0aW9uKSBvciBmaW5pc2ggdGhlIHJlbGVhc2UgcHJvY2Vzcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Fib3J0PWZhbHNlXVxuICAgKiAgLSBTaG91bGQgdGhlIHJlbGVhc2UgYmUgYWJvcnRlZD8gV2hlbiB0cnVlLCB0aGUgcmVsZWFzZSBlbmQgZXZlbnQgd29uJ3QgYmVcbiAgICogICAgZW1pdHRlZC4gU2V0IHRvIHRydWUgb25seSB3aGVuIHlvdSBuZWVkIHRvIGFib3J0IHRoZSByZWxlYXNlIHByb2Nlc3NcbiAgICogICAgd2hpbGUgdGhlIGl0ZW0gaXMgYW5pbWF0aW5nIHRvIGl0J3MgcG9zaXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3VycmVudFN0eWxlc11cbiAgICogIC0gT3B0aW9uYWwgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHN0eWxlcy5cbiAgICogQHJldHVybnMge0l0ZW1SZWxlYXNlfVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihhYm9ydCwgY3VycmVudFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBjb250YWluZXIgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciB0cmFuc2xhdGU7XG5cbiAgICAvLyBSZXNldCBkYXRhIGFuZCByZW1vdmUgcmVsZWFzaW5nIGNsYXNzIG5hbWUgZnJvbSB0aGUgZWxlbWVudC5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gSWYgdGhlIHJlbGVhc2VkIGVsZW1lbnQgaXMgb3V0c2lkZSB0aGUgZ3JpZCdzIGNvbnRhaW5lciBlbGVtZW50IHB1dCBpdFxuICAgIC8vIGJhY2sgdGhlcmUgYW5kIGFkanVzdCBwb3NpdGlvbiBhY2NvcmRpbmdseS5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBjb250YWluZXIpIHtcbiAgICAgIGlmICghY3VycmVudFN0eWxlcykge1xuICAgICAgICBpZiAoYWJvcnQpIHtcbiAgICAgICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgICAgdGVtcFN0eWxlcyQxLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgICAgIHRyYW5zbGF0ZS54IC0gdGhpcy5fY29udGFpbmVyRGlmZlgsXG4gICAgICAgICAgICB0cmFuc2xhdGUueSAtIHRoaXMuX2NvbnRhaW5lckRpZmZZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wU3R5bGVzJDEudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKGl0ZW0uX2xlZnQsIGl0ZW0uX3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFN0eWxlcyA9IHRlbXBTdHlsZXMkMTtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBjdXJyZW50U3R5bGVzKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGRyYWdSZWxlYXNlRW5kIGV2ZW50LlxuICAgIGlmICghYWJvcnQpIGdyaWQuX2VtaXQoZXZlbnREcmFnUmVsZWFzZUVuZCwgaXRlbSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSk7XG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFJlc2V0IHB1YmxpYyBkYXRhIGFuZCByZW1vdmUgcmVsZWFzaW5nIGNsYXNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUmVsZWFzaW5nQ2xhc3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCB2YWx1ZXMgb2YgdGhlIHByb3ZpZGVkIHN0eWxlcyBkZWZpbml0aW9uIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB7fTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlcykge1xuICAgICAgY3VycmVudFtwcm9wXSA9IGdldFN0eWxlKGVsZW1lbnQsIGdldFN0eWxlTmFtZShwcm9wKSk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFZpc2liaWxpdHkgbWFuYWdlciBmb3IgSXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbVZpc2liaWxpdHkoaXRlbSkge1xuICAgIHZhciBpc0FjdGl2ZSA9IGl0ZW0uX2lzQWN0aXZlO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgc2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG5cbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gU2V0IHVwIHZpc2liaWxpdHkgc3RhdGVzLlxuICAgIHRoaXMuX2lzSGlkZGVuID0gIWlzQWN0aXZlO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG5cbiAgICAvLyBDYWxsYmFjayBxdWV1ZS5cbiAgICB0aGlzLl9xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuXG4gICAgLy8gQmluZCBzaG93L2hpZGUgZmluaXNoZXJzLlxuICAgIHRoaXMuX2ZpbmlzaFNob3cgPSB0aGlzLl9maW5pc2hTaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZmluaXNoSGlkZSA9IHRoaXMuX2ZpbmlzaEhpZGUuYmluZCh0aGlzKTtcblxuICAgIC8vIEZvcmNlIGl0ZW0gdG8gYmUgZWl0aGVyIHZpc2libGUgb3IgaGlkZGVuIG9uIGluaXQuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNBY3RpdmUgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgLy8gU2V0IHZpc2libGUvaGlkZGVuIGNsYXNzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGlzQWN0aXZlID8gc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyA6IHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdHlsZXMgZm9yIHRoZSBjaGlsZCBlbGVtZW50LlxuICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgaXNBY3RpdmUgPyBzZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogc2V0dGluZ3MuaGlkZGVuU3R5bGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTaG93IGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluc3RhbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7SXRlbVZpc2liaWxpdHl9XG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGNhbGxiYWNrID0gaXNGdW5jdGlvbihvbkZpbmlzaCkgPyBvbkZpbmlzaCA6IG51bGw7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIElmIGl0ZW0gaXMgdmlzaWJsZSBjYWxsIHRoZSBjYWxsYmFjayBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICghdGhpcy5faXNTaG93aW5nICYmICF0aGlzLl9pc0hpZGRlbikge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZmFsc2UsIGl0ZW0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBzaG93aW5nIGFuZCBkb2VzIG5vdCBuZWVkIHRvIGJlIHNob3duIGluc3RhbnRseSwgbGV0J3MganVzdFxuICAgIC8vIHB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKHRoaXMuX2lzU2hvd2luZyAmJiAhaW5zdGFudCkge1xuICAgICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGhpZGluZyBvciBoaWRkZW4gcHJvY2VzcyB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGNhbGxiYWNrXG4gICAgLy8gcXVldWUgd2l0aCB0aGUgaW50ZXJydXB0ZWQgZmxhZyBhY3RpdmUsIHVwZGF0ZSBjbGFzc2VzIGFuZCBzZXQgZGlzcGxheVxuICAgIC8vIHRvIGJsb2NrIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd2luZykge1xuICAgICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgICBpZiAoIXRoaXMuX2lzSGlkaW5nKSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIC8vIFB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG5cbiAgICAvLyBVcGRhdGUgdmlzaWJpbGl0eSBzdGF0ZXMuXG4gICAgaXRlbS5faXNBY3RpdmUgPSB0aGlzLl9pc1Nob3dpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gdGhpcy5faXNIaWRkZW4gPSBmYWxzZTtcblxuICAgIC8vIEZpbmFsbHkgbGV0J3Mgc3RhcnQgc2hvdyBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24odHJ1ZSwgaW5zdGFudCwgdGhpcy5fZmluaXNoU2hvdyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSGlkZSBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbnN0YW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1WaXNpYmlsaXR5fVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24ob25GaW5pc2gpID8gb25GaW5pc2ggOiBudWxsO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBJZiBpdGVtIGlzIGFscmVhZHkgaGlkZGVuIGNhbGwgdGhlIGNhbGxiYWNrIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKCF0aGlzLl9pc0hpZGluZyAmJiB0aGlzLl9pc0hpZGRlbikge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZmFsc2UsIGl0ZW0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBoaWRpbmcgYW5kIGRvZXMgbm90IG5lZWQgdG8gYmUgaGlkZGVuIGluc3RhbnRseSwgbGV0J3MganVzdFxuICAgIC8vIHB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKHRoaXMuX2lzSGlkaW5nICYmICFpbnN0YW50KSB7XG4gICAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgc2hvd2luZyBvciB2aXNpYmxlIHByb2Nlc3MgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBjYWxsYmFja1xuICAgIC8vIHF1ZXVlIHdpdGggdGhlIGludGVycnVwdGVkIGZsYWcgYWN0aXZlLCB1cGRhdGUgY2xhc3NlcyBhbmQgc2V0IGRpc3BsYXlcbiAgICAvLyB0byBibG9jayBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKCF0aGlzLl9pc0hpZGluZykge1xuICAgICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gUHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcblxuICAgIC8vIFVwZGF0ZSB2aXNpYmlsaXR5IHN0YXRlcy5cbiAgICB0aGlzLl9pc0hpZGRlbiA9IHRoaXMuX2lzSGlkaW5nID0gdHJ1ZTtcbiAgICBpdGVtLl9pc0FjdGl2ZSA9IHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgLy8gRmluYWxseSBsZXQncyBzdGFydCBoaWRlIGFuaW1hdGlvbi5cbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbihmYWxzZSwgaW5zdGFudCwgdGhpcy5fZmluaXNoSGlkZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtVmlzaWJpbGl0eX1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIFN0b3AgdmlzaWJpbGl0eSBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RvcEFuaW1hdGlvbih7fSk7XG5cbiAgICAvLyBGaXJlIGFsbCB1bmNvbXBsZXRlZCBjYWxsYmFja3Mgd2l0aCBpbnRlcnJ1cHRlZCBmbGFnIGFuZCBkZXN0cm95IHRoZSBxdWV1ZS5cbiAgICBxdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKS5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgdmlzaWJsZS9oaWRkZW4gY2xhc3Nlcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgc3RhdGUuXG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNIaWRpbmcgPSB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRoaXMuX2lzSGlkZGVuID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9WaXNpYmxlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc3RhbnRdXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbih0b1Zpc2libGUsIGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRTdHlsZXMgPSB0b1Zpc2libGUgPyBzZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogc2V0dGluZ3MuaGlkZGVuU3R5bGVzO1xuICAgIHZhciBkdXJhdGlvbiA9IHBhcnNlSW50KHRvVmlzaWJsZSA/IHNldHRpbmdzLnNob3dEdXJhdGlvbiA6IHNldHRpbmdzLmhpZGVEdXJhdGlvbikgfHwgMDtcbiAgICB2YXIgZWFzaW5nID0gKHRvVmlzaWJsZSA/IHNldHRpbmdzLnNob3dFYXNpbmcgOiBzZXR0aW5ncy5oaWRlRWFzaW5nKSB8fCAnZWFzZSc7XG4gICAgdmFyIGlzSW5zdGFudCA9IGluc3RhbnQgfHwgZHVyYXRpb24gPD0gMDtcbiAgICB2YXIgY3VycmVudFN0eWxlcztcblxuICAgIC8vIE5vIHRhcmdldCBzdHlsZXM/IExldCdzIHF1aXQgZWFybHkuXG4gICAgaWYgKCF0YXJnZXRTdHlsZXMpIHtcbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCB2aXNpYmlsaXR5IHRpY2suXG4gICAgY2FuY2VsVmlzaWJpbGl0eVRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gSWYgd2UgbmVlZCB0byBhcHBseSB0aGUgc3R5bGVzIGluc3RhbnRseSB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICBpZiAoaXNJbnN0YW50KSB7XG4gICAgICBpZiAoaXRlbS5fYW5pbWF0ZUNoaWxkLmlzQW5pbWF0aW5nKCkpIHtcbiAgICAgICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgdGFyZ2V0U3R5bGVzKTtcbiAgICAgIH1cbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvbiBpbiB0aGUgbmV4dCB0aWNrICh0byBhdm9pZCBsYXlvdXQgdGhyYXNoaW5nKS5cbiAgICBhZGRWaXNpYmlsaXR5VGljayhcbiAgICAgIGl0ZW0uX2lkLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSBnZXRDdXJyZW50U3R5bGVzKGl0ZW0uX2NoaWxkLCB0YXJnZXRTdHlsZXMpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpdGVtLl9hbmltYXRlQ2hpbGQuc3RhcnQoY3VycmVudFN0eWxlcywgdGFyZ2V0U3R5bGVzLCB7XG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogZWFzaW5nLFxuICAgICAgICAgIG9uRmluaXNoOiBvbkZpbmlzaFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0U3R5bGVzXVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9zdG9wQW5pbWF0aW9uID0gZnVuY3Rpb24odGFyZ2V0U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIGNhbmNlbFZpc2liaWxpdHlUaWNrKGl0ZW0uX2lkKTtcbiAgICBpdGVtLl9hbmltYXRlQ2hpbGQuc3RvcCh0YXJnZXRTdHlsZXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5pc2ggc2hvdyBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fZmluaXNoU2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0hpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCB0aGlzLl9pdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIGhpZGUgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqL1xuICB2YXIgZmluaXNoU3R5bGVzID0ge307XG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fZmluaXNoSGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5faXNIaWRkZW4pIHJldHVybjtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdGhpcy5faXNIaWRpbmcgPSBmYWxzZTtcbiAgICBmaW5pc2hTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKDAsIDApO1xuICAgIGl0ZW0uX2xheW91dC5zdG9wKHRydWUsIGZpbmlzaFN0eWxlcyk7XG4gICAgaXRlbS5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCBpdGVtKTtcbiAgfTtcblxuICB2YXIgaWQgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdW5pcXVlIG51bWVyaWMgaWQgKGluY3JlbWVudHMgYSBiYXNlIHZhbHVlIG9uIGV2ZXJ5IGNhbGwpLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlVWlkKCkge1xuICAgIHJldHVybiArK2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgSXRlbSBpbnN0YW5jZSBmb3IgYSBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaXNBY3RpdmVdXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtKGdyaWQsIGVsZW1lbnQsIGlzQWN0aXZlKSB7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2UgaWQuXG4gICAgdGhpcy5faWQgPSBjcmVhdGVVaWQoKTtcblxuICAgIC8vIFJlZmVyZW5jZSB0byBjb25uZWN0ZWQgR3JpZCBpbnN0YW5jZSdzIGlkLlxuICAgIHRoaXMuX2dyaWRJZCA9IGdyaWQuX2lkO1xuXG4gICAgLy8gRGVzdHJveWVkIGZsYWcuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNldCB1cCBpbml0aWFsIHBvc2l0aW9ucy5cbiAgICB0aGlzLl9sZWZ0ID0gMDtcbiAgICB0aGlzLl90b3AgPSAwO1xuXG4gICAgLy8gVGhlIGVsZW1lbnRzLlxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2NoaWxkID0gZWxlbWVudC5jaGlsZHJlblswXTtcblxuICAgIC8vIElmIHRoZSBwcm92aWRlZCBpdGVtIGVsZW1lbnQgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBncmlkIGNvbnRhaW5lclxuICAgIC8vIGVsZW1lbnQsIGFwcGVuZCBpdCB0byB0aGUgZ3JpZCBjb250YWluZXIuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gZ3JpZC5fZWxlbWVudCkge1xuICAgICAgZ3JpZC5fZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaXRlbSBjbGFzcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuXG4gICAgLy8gSWYgaXNBY3RpdmUgaXMgbm90IGRlZmluZWQsIGxldCdzIHRyeSB0byBhdXRvLWRldGVjdCBpdC5cbiAgICBpZiAodHlwZW9mIGlzQWN0aXZlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIGlzQWN0aXZlID0gZ2V0U3R5bGUoZWxlbWVudCwgJ2Rpc3BsYXknKSAhPT0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBhY3RpdmUgc3RhdGUgKGRlZmluZXMgaWYgdGhlIGl0ZW0gaXMgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBsYXlvdXRcbiAgICAvLyBvciBub3QpLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG5cbiAgICAvLyBTZXQgZWxlbWVudCdzIGluaXRpYWwgcG9zaXRpb24gc3R5bGVzLlxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKDAsIDApO1xuXG4gICAgLy8gSW5pdGlhdGUgaXRlbSdzIGFuaW1hdGlvbiBjb250cm9sbGVycy5cbiAgICB0aGlzLl9hbmltYXRlID0gbmV3IEl0ZW1BbmltYXRlKGVsZW1lbnQpO1xuICAgIHRoaXMuX2FuaW1hdGVDaGlsZCA9IG5ldyBJdGVtQW5pbWF0ZSh0aGlzLl9jaGlsZCk7XG5cbiAgICAvLyBTZXR1cCB2aXNpYmlsaXR5IGhhbmRsZXIuXG4gICAgdGhpcy5fdmlzaWJpbGl0eSA9IG5ldyBJdGVtVmlzaWJpbGl0eSh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBsYXlvdXQgaGFuZGxlci5cbiAgICB0aGlzLl9sYXlvdXQgPSBuZXcgSXRlbUxheW91dCh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBtaWdyYXRpb24gaGFuZGxlciBkYXRhLlxuICAgIHRoaXMuX21pZ3JhdGUgPSBuZXcgSXRlbU1pZ3JhdGUodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgcmVsZWFzZSBoYW5kbGVyLiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBpcyBmdWxseSBsaW5rZWQgdG8gZHJhZ2dpbmdcbiAgICAvLyB0aGlzIHN0aWxsIG5lZWRzIHRvIGJlIGFsd2F5cyBpbnN0YW50aWF0ZWQgdG8gaGFuZGxlIG1pZ3JhdGlvbiBzY2VuYXJpb3NcbiAgICAvLyBjb3JyZWN0bHkuXG4gICAgdGhpcy5fcmVsZWFzZSA9IG5ldyBJdGVtUmVsZWFzZSh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBkcmFnIHBsYWNlaG9sZGVyIGhhbmRsZXIuIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGlzIGZ1bGx5IGxpbmtlZCB0b1xuICAgIC8vIGRyYWdnaW5nIHRoaXMgc3RpbGwgbmVlZHMgdG8gYmUgYWx3YXlzIGluc3RhbnRpYXRlZCB0byBoYW5kbGUgbWlncmF0aW9uXG4gICAgLy8gc2NlbmFyaW9zIGNvcnJlY3RseS5cbiAgICB0aGlzLl9kcmFnUGxhY2Vob2xkZXIgPSBuZXcgSXRlbURyYWdQbGFjZWhvbGRlcih0aGlzKTtcblxuICAgIC8vIFNldCB1cCBkcmFnIGhhbmRsZXIuXG4gICAgdGhpcy5fZHJhZyA9IHNldHRpbmdzLmRyYWdFbmFibGVkID8gbmV3IEl0ZW1EcmFnKHRoaXMpIDogbnVsbDtcblxuICAgIC8vIFNldCB1cCB0aGUgaW5pdGlhbCBkaW1lbnNpb25zIGFuZCBzb3J0IGRhdGEuXG4gICAgdGhpcy5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICB0aGlzLl9yZWZyZXNoU29ydERhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluc3RhbmNlIGdyaWQgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEdyaWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ3JpZEluc3RhbmNlc1t0aGlzLl9ncmlkSWRdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluc3RhbmNlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgd2lkdGguXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgaGVpZ2h0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgbWFyZ2lucy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogICAtIFRoZSByZXR1cm5lZCBvYmplY3QgY29udGFpbnMgbGVmdCwgcmlnaHQsIHRvcCBhbmQgYm90dG9tIHByb3BlcnRpZXNcbiAgICogICAgIHdoaWNoIGluZGljYXRlIHRoZSBpdGVtIGVsZW1lbnQncyBjYWNoZWQgbWFyZ2lucy5cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldE1hcmdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiB0aGlzLl9tYXJnaW5MZWZ0LFxuICAgICAgcmlnaHQ6IHRoaXMuX21hcmdpblJpZ2h0LFxuICAgICAgdG9wOiB0aGlzLl9tYXJnaW5Ub3AsXG4gICAgICBib3R0b206IHRoaXMuX21hcmdpbkJvdHRvbVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiAgIC0gVGhlIHJldHVybmVkIG9iamVjdCBjb250YWlucyBsZWZ0IGFuZCB0b3AgcHJvcGVydGllcyB3aGljaCBpbmRpY2F0ZSB0aGVcbiAgICogICAgIGl0ZW0gZWxlbWVudCdzIGNhY2hlZCBwb3NpdGlvbiBpbiB0aGUgZ3JpZC5cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IHRoaXMuX2xlZnQsXG4gICAgICB0b3A6IHRoaXMuX3RvcFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGFjdGl2ZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gdmlzaWJsZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl92aXNpYmlsaXR5ICYmICF0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGRlbjtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgYW5pbWF0ZWQgdG8gdmlzaWJsZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Nob3dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fdmlzaWJpbGl0eSAmJiB0aGlzLl92aXNpYmlsaXR5Ll9pc1Nob3dpbmcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyBhbmltYXRlZCB0byBoaWRkZW4/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNIaWRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fdmlzaWJpbGl0eSAmJiB0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGluZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIHBvc2l0aW9uaW5nP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzUG9zaXRpb25pbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fbGF5b3V0ICYmIHRoaXMuX2xheW91dC5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyBkcmFnZ2VkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fZHJhZyAmJiB0aGlzLl9kcmFnLl9pc0FjdGl2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIHJlbGVhc2VkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzUmVsZWFzaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3JlbGVhc2UgJiYgdGhpcy5fcmVsZWFzZS5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBkZXN0cm95ZWQ/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNEZXN0cm95ZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEZXN0cm95ZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGUgaXRlbSdzIGRpbWVuc2lvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuX3JlZnJlc2hEaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX3Zpc2liaWxpdHkuX2lzSGlkZGVuKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGRyYWdQbGFjZWhvbGRlciA9IHRoaXMuX2RyYWdQbGFjZWhvbGRlcjtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgd2lkdGggYW5kIGhlaWdodC5cbiAgICB0aGlzLl93aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG5cbiAgICAvLyBDYWxjdWxhdGUgbWFyZ2lucyAoaWdub3JlIG5lZ2F0aXZlIG1hcmdpbnMpLlxuICAgIHRoaXMuX21hcmdpbkxlZnQgPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi1sZWZ0JykpO1xuICAgIHRoaXMuX21hcmdpblJpZ2h0ID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tcmlnaHQnKSk7XG4gICAgdGhpcy5fbWFyZ2luVG9wID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tdG9wJykpO1xuICAgIHRoaXMuX21hcmdpbkJvdHRvbSA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLWJvdHRvbScpKTtcblxuICAgIC8vIEtlZXAgZHJhZyBwbGFjZWhvbGRlcidzIGRpbWVuc2lvbnMgc3luY2VkIHdpdGggdGhlIGl0ZW0ncy5cbiAgICBpZiAoZHJhZ1BsYWNlaG9sZGVyKSB7XG4gICAgICBkcmFnUGxhY2Vob2xkZXIudXBkYXRlRGltZW5zaW9ucyh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoIGFuZCBzdG9yZSBpdGVtJ3Mgc29ydCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9yZWZyZXNoU29ydERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBkYXRhID0gKHRoaXMuX3NvcnREYXRhID0ge30pO1xuICAgIHZhciBnZXR0ZXJzID0gdGhpcy5nZXRHcmlkKCkuX3NldHRpbmdzLnNvcnREYXRhO1xuICAgIHZhciBwcm9wO1xuXG4gICAgZm9yIChwcm9wIGluIGdldHRlcnMpIHtcbiAgICAgIGRhdGFbcHJvcF0gPSBnZXR0ZXJzW3Byb3BdKHRoaXMsIHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpdGVtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlRWxlbWVudD1mYWxzZV1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24ocmVtb3ZlRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGluZGV4ID0gZ3JpZC5faXRlbXMuaW5kZXhPZih0aGlzKTtcblxuICAgIC8vIERlc3Ryb3kgaGFuZGxlcnMuXG4gICAgdGhpcy5fcmVsZWFzZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fbWlncmF0ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fbGF5b3V0LmRlc3Ryb3koKTtcbiAgICB0aGlzLl92aXNpYmlsaXR5LmRlc3Ryb3koKTtcbiAgICB0aGlzLl9hbmltYXRlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9hbmltYXRlQ2hpbGQuZGVzdHJveSgpO1xuICAgIHRoaXMuX2RyYWdQbGFjZWhvbGRlci5kZXN0cm95KCk7XG4gICAgdGhpcy5fZHJhZyAmJiB0aGlzLl9kcmFnLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgaW5saW5lIHN0eWxlcy5cbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB0aGlzLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAvLyBSZW1vdmUgaXRlbSBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSBHcmlkIGluc3RhbmNlIGlmIGl0IHN0aWxsIGV4aXN0cyB0aGVyZS5cbiAgICBpbmRleCA+IC0xICYmIGdyaWQuX2l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBSZW1vdmUgZWxlbWVudCBmcm9tIERPTS5cbiAgICByZW1vdmVFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgIC8vIFJlc2V0IHN0YXRlLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxheW91dCBhbGdvcml0aG0gZm9yIE11dXJpLiBCYXNlZCBvbiBNQVhSRUNUUyBhcHByb2FjaFxuICAgKiBhcyBkZXNjcmliZWQgYnkgSnVra2EgSnlsw6Rua2kgaW4gaGlzIHN1cnZleTogXCJBIFRob3VzYW5kIFdheXMgdG8gUGFjayB0aGVcbiAgICogQmluIC0gQSBQcmFjdGljYWwgQXBwcm9hY2ggdG8gVHdvLURpbWVuc2lvbmFsIFJlY3RhbmdsZSBCaW4gUGFja2luZy5cIi5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBQYWNrZXIoKSB7XG4gICAgdGhpcy5fc2xvdHMgPSBbXTtcbiAgICB0aGlzLl9zbG90U2l6ZXMgPSBbXTtcbiAgICB0aGlzLl9mcmVlU2xvdHMgPSBbXTtcbiAgICB0aGlzLl9uZXdTbG90cyA9IFtdO1xuICAgIHRoaXMuX3JlY3RJdGVtID0ge307XG4gICAgdGhpcy5fcmVjdFN0b3JlID0gW107XG4gICAgdGhpcy5fcmVjdElkID0gMDtcblxuICAgIC8vIFRoZSBsYXlvdXQgcmV0dXJuIGRhdGEsIHdoaWNoIHdpbGwgYmUgcG9wdWxhdGVkIGluIGdldExheW91dC5cbiAgICB0aGlzLl9sYXlvdXQgPSB7XG4gICAgICBzbG90czogbnVsbCxcbiAgICAgIHNldFdpZHRoOiBmYWxzZSxcbiAgICAgIHNldEhlaWdodDogZmFsc2UsXG4gICAgICB3aWR0aDogZmFsc2UsXG4gICAgICBoZWlnaHQ6IGZhbHNlXG4gICAgfTtcblxuICAgIC8vIEJpbmQgc29ydCBoYW5kbGVycy5cbiAgICB0aGlzLl9zb3J0UmVjdHNMZWZ0VG9wID0gdGhpcy5fc29ydFJlY3RzTGVmdFRvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NvcnRSZWN0c1RvcExlZnQgPSB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0LmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0l0ZW1bXX0gaXRlbXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICogQHBhcmFtIHtOdW1iZXJbXX0gW3Nsb3RzXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZmlsbEdhcHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaG9yaXpvbnRhbD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGlnblJpZ2h0PWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsaWduQm90dG9tPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7TGF5b3V0RGF0YX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24oaXRlbXMsIHdpZHRoLCBoZWlnaHQsIHNsb3RzLCBvcHRpb25zKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICB2YXIgZmlsbEdhcHMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuZmlsbEdhcHMpO1xuICAgIHZhciBpc0hvcml6b250YWwgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuaG9yaXpvbnRhbCk7XG4gICAgdmFyIGFsaWduUmlnaHQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuYWxpZ25SaWdodCk7XG4gICAgdmFyIGFsaWduQm90dG9tID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmFsaWduQm90dG9tKTtcbiAgICB2YXIgcm91bmRpbmcgPSAhIShvcHRpb25zICYmIG9wdGlvbnMucm91bmRpbmcpO1xuICAgIHZhciBzbG90U2l6ZXMgPSB0aGlzLl9zbG90U2l6ZXM7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZXNldCBsYXlvdXQgZGF0YS5cbiAgICBsYXlvdXQuc2xvdHMgPSBzbG90cyA/IHNsb3RzIDogdGhpcy5fc2xvdHM7XG4gICAgbGF5b3V0LndpZHRoID0gaXNIb3Jpem9udGFsID8gMCA6IHJvdW5kaW5nID8gTWF0aC5yb3VuZCh3aWR0aCkgOiB3aWR0aDtcbiAgICBsYXlvdXQuaGVpZ2h0ID0gIWlzSG9yaXpvbnRhbCA/IDAgOiByb3VuZGluZyA/IE1hdGgucm91bmQoaGVpZ2h0KSA6IGhlaWdodDtcbiAgICBsYXlvdXQuc2V0V2lkdGggPSBpc0hvcml6b250YWw7XG4gICAgbGF5b3V0LnNldEhlaWdodCA9ICFpc0hvcml6b250YWw7XG5cbiAgICAvLyBNYWtlIHN1cmUgc2xvdHMgYW5kIHNsb3Qgc2l6ZSBhcnJheXMgYXJlIHJlc2V0LlxuICAgIGxheW91dC5zbG90cy5sZW5ndGggPSAwO1xuICAgIHNsb3RTaXplcy5sZW5ndGggPSAwO1xuXG4gICAgLy8gTm8gbmVlZCB0byBnbyBmdXJ0aGVyIGlmIGl0ZW1zIGRvIG5vdCBleGlzdC5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuIGxheW91dDtcblxuICAgIC8vIEZpbmQgc2xvdHMgZm9yIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fYWRkU2xvdChpdGVtc1tpXSwgaXNIb3Jpem9udGFsLCBmaWxsR2Fwcywgcm91bmRpbmcsIGFsaWduUmlnaHQgfHwgYWxpZ25Cb3R0b20pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBhbGlnbm1lbnQgaXMgc2V0IHRvIHJpZ2h0IHdlIG5lZWQgdG8gYWRqdXN0IHRoZSByZXN1bHRzLlxuICAgIGlmIChhbGlnblJpZ2h0KSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGF5b3V0LnNsb3RzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgIGxheW91dC5zbG90c1tpXSA9IGxheW91dC53aWR0aCAtIChsYXlvdXQuc2xvdHNbaV0gKyBzbG90U2l6ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBhbGlnbm1lbnQgaXMgc2V0IHRvIGJvdHRvbSB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgcmVzdWx0cy5cbiAgICBpZiAoYWxpZ25Cb3R0b20pIHtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBsYXlvdXQuc2xvdHMubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgbGF5b3V0LnNsb3RzW2ldID0gbGF5b3V0LmhlaWdodCAtIChsYXlvdXQuc2xvdHNbaV0gKyBzbG90U2l6ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IHNsb3RzIGFycmF5cyBhbmQgcmVjdCBpZC5cbiAgICBzbG90U2l6ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcmVlU2xvdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9uZXdTbG90cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX3JlY3RJZCA9IDA7XG5cbiAgICByZXR1cm4gbGF5b3V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcG9zaXRpb24gZm9yIHRoZSBsYXlvdXQgaXRlbS4gUmV0dXJucyB0aGUgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAqIG9mIHRoZSBpdGVtIGluIHBpeGVscy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNIb3Jpem9udGFsXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmlsbEdhcHNcbiAgICogQHBhcmFtIHtCb29sZWFufSByb3VuZGluZ1xuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9hZGRTbG90ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlcHMgPSAwLjAwMTtcbiAgICB2YXIgaXRlbVNsb3QgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSwgaXNIb3Jpem9udGFsLCBmaWxsR2Fwcywgcm91bmRpbmcsIHRyYWNrU2l6ZSkge1xuICAgICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICAgIHZhciBmcmVlU2xvdHMgPSB0aGlzLl9mcmVlU2xvdHM7XG4gICAgICB2YXIgbmV3U2xvdHMgPSB0aGlzLl9uZXdTbG90cztcbiAgICAgIHZhciByZWN0O1xuICAgICAgdmFyIHJlY3RJZDtcbiAgICAgIHZhciBwb3RlbnRpYWxTbG90cztcbiAgICAgIHZhciBpZ25vcmVDdXJyZW50U2xvdHM7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBpaTtcblxuICAgICAgLy8gUmVzZXQgbmV3IHNsb3RzLlxuICAgICAgbmV3U2xvdHMubGVuZ3RoID0gMDtcblxuICAgICAgLy8gU2V0IGl0ZW0gc2xvdCBpbml0aWFsIGRhdGEuXG4gICAgICBpdGVtU2xvdC5sZWZ0ID0gbnVsbDtcbiAgICAgIGl0ZW1TbG90LnRvcCA9IG51bGw7XG4gICAgICBpdGVtU2xvdC53aWR0aCA9IGl0ZW0uX3dpZHRoICsgaXRlbS5fbWFyZ2luTGVmdCArIGl0ZW0uX21hcmdpblJpZ2h0O1xuICAgICAgaXRlbVNsb3QuaGVpZ2h0ID0gaXRlbS5faGVpZ2h0ICsgaXRlbS5fbWFyZ2luVG9wICsgaXRlbS5fbWFyZ2luQm90dG9tO1xuXG4gICAgICAvLyBSb3VuZCBpdGVtIHNsb3Qgd2lkdGggYW5kIGhlaWdodCBpZiBuZWVkZWQuXG4gICAgICBpZiAocm91bmRpbmcpIHtcbiAgICAgICAgaXRlbVNsb3Qud2lkdGggPSBNYXRoLnJvdW5kKGl0ZW1TbG90LndpZHRoKTtcbiAgICAgICAgaXRlbVNsb3QuaGVpZ2h0ID0gTWF0aC5yb3VuZChpdGVtU2xvdC5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcnkgdG8gZmluZCBhIHNsb3QgZm9yIHRoZSBpdGVtLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGZyZWVTbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZWN0SWQgPSBmcmVlU2xvdHNbaV07XG4gICAgICAgIGlmICghcmVjdElkKSBjb250aW51ZTtcbiAgICAgICAgcmVjdCA9IHRoaXMuX2dldFJlY3QocmVjdElkKTtcbiAgICAgICAgaWYgKGl0ZW1TbG90LndpZHRoIDw9IHJlY3Qud2lkdGggKyBlcHMgJiYgaXRlbVNsb3QuaGVpZ2h0IDw9IHJlY3QuaGVpZ2h0ICsgZXBzKSB7XG4gICAgICAgICAgaXRlbVNsb3QubGVmdCA9IHJlY3QubGVmdDtcbiAgICAgICAgICBpdGVtU2xvdC50b3AgPSByZWN0LnRvcDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBzbG90IHdhcyBmb3VuZCBmb3IgdGhlIGl0ZW0uXG4gICAgICBpZiAoaXRlbVNsb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgaXRlbSBpbiB0byB0aGUgYm90dG9tIGxlZnQgKHZlcnRpY2FsIG1vZGUpIG9yIHRvcCByaWdodFxuICAgICAgICAvLyAoaG9yaXpvbnRhbCBtb2RlKSBvZiB0aGUgZ3JpZC5cbiAgICAgICAgaXRlbVNsb3QubGVmdCA9ICFpc0hvcml6b250YWwgPyAwIDogbGF5b3V0LndpZHRoO1xuICAgICAgICBpdGVtU2xvdC50b3AgPSAhaXNIb3Jpem9udGFsID8gbGF5b3V0LmhlaWdodCA6IDA7XG5cbiAgICAgICAgLy8gSWYgZ2FwcyBkb24ndCBuZWVkIGZpbGxpbmcgZG8gbm90IGFkZCBhbnkgY3VycmVudCBzbG90cyB0byB0aGUgbmV3XG4gICAgICAgIC8vIHNsb3RzIGFycmF5LlxuICAgICAgICBpZiAoIWZpbGxHYXBzKSB7XG4gICAgICAgICAgaWdub3JlQ3VycmVudFNsb3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJbiB2ZXJ0aWNhbCBtb2RlLCBpZiB0aGUgaXRlbSdzIGJvdHRvbSBvdmVybGFwcyB0aGUgZ3JpZCdzIGJvdHRvbS5cbiAgICAgIGlmICghaXNIb3Jpem9udGFsICYmIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCA+IGxheW91dC5oZWlnaHQpIHtcbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgbGVmdCBlZGdlLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgPiAwKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaCh0aGlzLl9hZGRSZWN0KDAsIGxheW91dC5oZWlnaHQsIGl0ZW1TbG90LmxlZnQsIEluZmluaXR5KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSByaWdodCBlZGdlLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCA8IGxheW91dC53aWR0aCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgICBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGgsXG4gICAgICAgICAgICAgIGxheW91dC5oZWlnaHQsXG4gICAgICAgICAgICAgIGxheW91dC53aWR0aCAtIGl0ZW1TbG90LmxlZnQgLSBpdGVtU2xvdC53aWR0aCxcbiAgICAgICAgICAgICAgSW5maW5pdHlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGdyaWQgaGVpZ2h0LlxuICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICAvLyBJbiBob3Jpem9udGFsIG1vZGUsIGlmIHRoZSBpdGVtJ3MgcmlnaHQgb3ZlcmxhcHMgdGhlIGdyaWQncyByaWdodCBlZGdlLlxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCAmJiBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGggPiBsYXlvdXQud2lkdGgpIHtcbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgdG9wLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LnRvcCA+IDApIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKHRoaXMuX2FkZFJlY3QobGF5b3V0LndpZHRoLCAwLCBJbmZpbml0eSwgaXRlbVNsb3QudG9wKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSBib3R0b20sIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0IDwgbGF5b3V0LmhlaWdodCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgICBsYXlvdXQud2lkdGgsXG4gICAgICAgICAgICAgIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCxcbiAgICAgICAgICAgICAgSW5maW5pdHksXG4gICAgICAgICAgICAgIGxheW91dC5oZWlnaHQgLSBpdGVtU2xvdC50b3AgLSBpdGVtU2xvdC5oZWlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGdyaWQgd2lkdGguXG4gICAgICAgIGxheW91dC53aWR0aCA9IGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aDtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYW4gdXAgdGhlIGN1cnJlbnQgc2xvdHMgbWFraW5nIHN1cmUgdGhlcmUgYXJlIG5vIG9sZCBzbG90cyB0aGF0XG4gICAgICAvLyBvdmVybGFwIHdpdGggdGhlIGl0ZW0uIElmIGFuIG9sZCBzbG90IG92ZXJsYXBzIHdpdGggdGhlIGl0ZW0sIHNwbGl0IGl0XG4gICAgICAvLyBpbnRvIHNtYWxsZXIgc2xvdHMgaWYgbmVjZXNzYXJ5LlxuICAgICAgZm9yIChpID0gZmlsbEdhcHMgPyAwIDogaWdub3JlQ3VycmVudFNsb3RzID8gZnJlZVNsb3RzLmxlbmd0aCA6IGk7IGkgPCBmcmVlU2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVjdElkID0gZnJlZVNsb3RzW2ldO1xuICAgICAgICBpZiAoIXJlY3RJZCkgY29udGludWU7XG4gICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgIHBvdGVudGlhbFNsb3RzID0gdGhpcy5fc3BsaXRSZWN0KHJlY3QsIGl0ZW1TbG90KTtcbiAgICAgICAgZm9yIChpaSA9IDA7IGlpIDwgcG90ZW50aWFsU2xvdHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgcmVjdElkID0gcG90ZW50aWFsU2xvdHNbaWldO1xuICAgICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgICAgLy8gTGV0J3MgbWFrZSBzdXJlIGhlcmUgdGhhdCB3ZSBoYXZlIGEgYmlnIGVub3VnaCBzbG90XG4gICAgICAgICAgLy8gKHdpZHRoL2hlaWdodCA+IDAuNDlweCkgYW5kIGFsc28gbGV0J3MgbWFrZSBzdXJlIHRoYXQgdGhlIHNsb3QgaXNcbiAgICAgICAgICAvLyB3aXRoaW4gdGhlIGJvdW5kYXJpZXMgb2YgdGhlIGdyaWQuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVjdC53aWR0aCA+IDAuNDkgJiZcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ID4gMC40OSAmJlxuICAgICAgICAgICAgKCghaXNIb3Jpem9udGFsICYmIHJlY3QudG9wIDwgbGF5b3V0LmhlaWdodCkgfHxcbiAgICAgICAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPCBsYXlvdXQud2lkdGgpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbmV3U2xvdHMucHVzaChyZWN0SWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTYW5pdGl6ZSBuZXcgc2xvdHMuXG4gICAgICBpZiAobmV3U2xvdHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3B1cmdlUmVjdHMobmV3U2xvdHMpLnNvcnQoXG4gICAgICAgICAgaXNIb3Jpem9udGFsID8gdGhpcy5fc29ydFJlY3RzTGVmdFRvcCA6IHRoaXMuX3NvcnRSZWN0c1RvcExlZnRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGxheW91dCB3aWR0aC9oZWlnaHQuXG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIGxheW91dC53aWR0aCA9IE1hdGgubWF4KGxheW91dC53aWR0aCwgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxheW91dC5oZWlnaHQgPSBNYXRoLm1heChsYXlvdXQuaGVpZ2h0LCBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgaXRlbSBzbG90IGRhdGEgdG8gbGF5b3V0IHNsb3RzIChhbmQgc3RvcmUgdGhlIHNsb3Qgc2l6ZSBmb3IgbGF0ZXJcbiAgICAgIC8vIHVzYWdlIHRvbyBpZiBuZWNlc3NhcnkpLlxuICAgICAgbGF5b3V0LnNsb3RzLnB1c2goaXRlbVNsb3QubGVmdCwgaXRlbVNsb3QudG9wKTtcbiAgICAgIGlmICh0cmFja1NpemUpIHRoaXMuX3Nsb3RTaXplcy5wdXNoKGl0ZW1TbG90LndpZHRoLCBpdGVtU2xvdC5oZWlnaHQpO1xuXG4gICAgICAvLyBGcmVlL25ldyBzbG90cyBzd2l0Y2hlcm9vIVxuICAgICAgdGhpcy5fZnJlZVNsb3RzID0gbmV3U2xvdHM7XG4gICAgICB0aGlzLl9uZXdTbG90cyA9IGZyZWVTbG90cztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgcmVjdGFuZ2xlIHRvIHRoZSByZWN0YW5nbGUgc3RvcmUuIFJldHVybnMgdGhlIGlkIG9mIHRoZSBuZXdcbiAgICogcmVjdGFuZ2xlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVmdFxuICAgKiBAcGFyYW0ge051bWJlcn0gdG9wXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEByZXR1cm5zIHtSZWN0SWR9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9hZGRSZWN0ID0gZnVuY3Rpb24obGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIHJlY3RJZCA9ICsrdGhpcy5fcmVjdElkO1xuICAgIHZhciByZWN0U3RvcmUgPSB0aGlzLl9yZWN0U3RvcmU7XG5cbiAgICByZWN0U3RvcmVbcmVjdElkXSA9IGxlZnQgfHwgMDtcbiAgICByZWN0U3RvcmVbKyt0aGlzLl9yZWN0SWRdID0gdG9wIHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IHdpZHRoIHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IGhlaWdodCB8fCAwO1xuXG4gICAgcmV0dXJuIHJlY3RJZDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHJlY3RhbmdsZSBkYXRhIGZyb20gdGhlIHJlY3RhbmdsZSBzdG9yZSBieSBpZC4gT3B0aW9uYWxseSB5b3UgY2FuXG4gICAqIHByb3ZpZGUgYSB0YXJnZXQgb2JqZWN0IHdoZXJlIHRoZSByZWN0YW5nbGUgZGF0YSB3aWxsIGJlIHdyaXR0ZW4gaW4uIEJ5XG4gICAqIGRlZmF1bHQgYW4gaW50ZXJuYWwgb2JqZWN0IGlzIHJldXNlZCBhcyBhIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkfSBpZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldF1cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2dldFJlY3QgPSBmdW5jdGlvbihpZCwgdGFyZ2V0KSB7XG4gICAgdmFyIHJlY3RJdGVtID0gdGFyZ2V0ID8gdGFyZ2V0IDogdGhpcy5fcmVjdEl0ZW07XG4gICAgdmFyIHJlY3RTdG9yZSA9IHRoaXMuX3JlY3RTdG9yZTtcblxuICAgIHJlY3RJdGVtLmxlZnQgPSByZWN0U3RvcmVbaWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0udG9wID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0ud2lkdGggPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcbiAgICByZWN0SXRlbS5oZWlnaHQgPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcblxuICAgIHJldHVybiByZWN0SXRlbTtcbiAgfTtcblxuICAvKipcbiAgICogUHVuY2ggYSBob2xlIGludG8gYSByZWN0YW5nbGUgYW5kIHNwbGl0IHRoZSByZW1haW5pbmcgYXJlYSBpbnRvIHNtYWxsZXJcbiAgICogcmVjdGFuZ2xlcyAoNCBhdCBtYXgpLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gcmVjdFxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gaG9sZVxuICAgKiBAcmV0dXJucyB7UmVjdElkW119XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9zcGxpdFJlY3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdCwgaG9sZSkge1xuICAgICAgLy8gUmVzZXQgb2xkIHJlc3VsdHMuXG4gICAgICByZXN1bHRzLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIElmIHRoZSByZWN0IGRvZXMgbm90IG92ZXJsYXAgd2l0aCB0aGUgaG9sZSBhZGQgcmVjdCB0byB0aGUgcmV0dXJuIGRhdGFcbiAgICAgIC8vIGFzIGlzLlxuICAgICAgaWYgKCF0aGlzLl9kb1JlY3RzT3ZlcmxhcChyZWN0LCBob2xlKSkge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cblxuICAgICAgLy8gTGVmdCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LmxlZnQgPCBob2xlLmxlZnQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgaG9sZS5sZWZ0IC0gcmVjdC5sZWZ0LCByZWN0LmhlaWdodCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSaWdodCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LmxlZnQgKyByZWN0LndpZHRoID4gaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCkge1xuICAgICAgICByZXN1bHRzLnB1c2goXG4gICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgIGhvbGUubGVmdCArIGhvbGUud2lkdGgsXG4gICAgICAgICAgICByZWN0LnRvcCxcbiAgICAgICAgICAgIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLSAoaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCksXG4gICAgICAgICAgICByZWN0LmhlaWdodFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9wIHNwbGl0LlxuICAgICAgaWYgKHJlY3QudG9wIDwgaG9sZS50b3ApIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgaG9sZS50b3AgLSByZWN0LnRvcCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBCb3R0b20gc3BsaXQuXG4gICAgICBpZiAocmVjdC50b3AgKyByZWN0LmhlaWdodCA+IGhvbGUudG9wICsgaG9sZS5oZWlnaHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICByZWN0LmxlZnQsXG4gICAgICAgICAgICBob2xlLnRvcCArIGhvbGUuaGVpZ2h0LFxuICAgICAgICAgICAgcmVjdC53aWR0aCxcbiAgICAgICAgICAgIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLSAoaG9sZS50b3AgKyBob2xlLmhlaWdodClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byByZWN0YW5nbGVzIG92ZXJsYXAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fZG9SZWN0c092ZXJsYXAgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuICEoXG4gICAgICBhLmxlZnQgKyBhLndpZHRoIDw9IGIubGVmdCB8fFxuICAgICAgYi5sZWZ0ICsgYi53aWR0aCA8PSBhLmxlZnQgfHxcbiAgICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgfHxcbiAgICAgIGIudG9wICsgYi5oZWlnaHQgPD0gYS50b3BcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHJlY3RhbmdsZSBpcyBmdWxseSB3aXRoaW4gYW5vdGhlciByZWN0YW5nbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5faXNSZWN0V2l0aGluUmVjdCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5sZWZ0ID49IGIubGVmdCAmJlxuICAgICAgYS50b3AgPj0gYi50b3AgJiZcbiAgICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0ICsgYi53aWR0aCAmJlxuICAgICAgYS50b3AgKyBhLmhlaWdodCA8PSBiLnRvcCArIGIuaGVpZ2h0XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogTG9vcHMgdGhyb3VnaCBhbiBhcnJheSBvZiByZWN0YW5nbGUgaWRzIGFuZCByZXNldHMgYWxsIHRoYXQgYXJlIGZ1bGx5XG4gICAqIHdpdGhpbiBhbm90aGVyIHJlY3RhbmdsZSBpbiB0aGUgYXJyYXkuIFJlc2V0dGluZyBpbiB0aGlzIGNhc2UgbWVhbnMgdGhhdFxuICAgKiB0aGUgcmVjdGFuZ2xlIGlkIHZhbHVlIGlzIHJlcGxhY2VkIHdpdGggemVyby5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWRbXX0gcmVjdElkc1xuICAgKiBAcmV0dXJucyB7UmVjdElkW119XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9wdXJnZVJlY3RzID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWN0QSA9IHt9O1xuICAgIHZhciByZWN0QiA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihyZWN0SWRzKSB7XG4gICAgICB2YXIgaSA9IHJlY3RJZHMubGVuZ3RoO1xuICAgICAgdmFyIGlpO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlpID0gcmVjdElkcy5sZW5ndGg7XG4gICAgICAgIGlmICghcmVjdElkc1tpXSkgY29udGludWU7XG4gICAgICAgIHRoaXMuX2dldFJlY3QocmVjdElkc1tpXSwgcmVjdEEpO1xuICAgICAgICB3aGlsZSAoaWktLSkge1xuICAgICAgICAgIGlmICghcmVjdElkc1tpaV0gfHwgaSA9PT0gaWkpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1JlY3RXaXRoaW5SZWN0KHJlY3RBLCB0aGlzLl9nZXRSZWN0KHJlY3RJZHNbaWldLCByZWN0QikpKSB7XG4gICAgICAgICAgICByZWN0SWRzW2ldID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdElkcztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBTb3J0IHJlY3RhbmdsZXMgd2l0aCB0b3AtbGVmdCBncmF2aXR5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYUlkXG4gICAqIEBwYXJhbSB7UmVjdElkfSBiSWRcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3NvcnRSZWN0c1RvcExlZnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY3RBID0ge307XG4gICAgdmFyIHJlY3RCID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFJZCwgYklkKSB7XG4gICAgICB0aGlzLl9nZXRSZWN0KGFJZCwgcmVjdEEpO1xuICAgICAgdGhpcy5fZ2V0UmVjdChiSWQsIHJlY3RCKTtcbiAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgcmV0dXJuIHJlY3RBLnRvcCA8IHJlY3RCLnRvcCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS50b3AgPiByZWN0Qi50b3AgPyAxIDpcbiAgICAgICAgICAgICByZWN0QS5sZWZ0IDwgcmVjdEIubGVmdCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS5sZWZ0ID4gcmVjdEIubGVmdCA/IDEgOiAwO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIFNvcnQgcmVjdGFuZ2xlcyB3aXRoIGxlZnQtdG9wIGdyYXZpdHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkfSBhSWRcbiAgICogQHBhcmFtIHtSZWN0SWR9IGJJZFxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fc29ydFJlY3RzTGVmdFRvcCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjdEEgPSB7fTtcbiAgICB2YXIgcmVjdEIgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24oYUlkLCBiSWQpIHtcbiAgICAgIHRoaXMuX2dldFJlY3QoYUlkLCByZWN0QSk7XG4gICAgICB0aGlzLl9nZXRSZWN0KGJJZCwgcmVjdEIpO1xuICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICByZXR1cm4gcmVjdEEubGVmdCA8IHJlY3RCLmxlZnQgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA+IHJlY3RCLmxlZnQgPyAxIDpcbiAgICAgICAgICAgICByZWN0QS50b3AgPCByZWN0Qi50b3AgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wID4gcmVjdEIudG9wID8gMSA6IDA7XG4gICAgfTtcbiAgfSkoKTtcblxuICB2YXIgaHRtbENvbGxlY3Rpb25UeXBlID0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJztcbiAgdmFyIG5vZGVMaXN0VHlwZSA9ICdbb2JqZWN0IE5vZGVMaXN0XSc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBub2RlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc05vZGVMaXN0KHZhbCkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgcmV0dXJuIHR5cGUgPT09IGh0bWxDb2xsZWN0aW9uVHlwZSB8fCB0eXBlID09PSBub2RlTGlzdFR5cGU7XG4gIH1cblxuICB2YXIgb2JqZWN0VHlwZSA9ICdvYmplY3QnO1xuICB2YXIgb2JqZWN0VG9TdHJpbmdUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gb2JqZWN0VHlwZSAmJiB0b1N0cmluZy5jYWxsKHZhbCkgPT09IG9iamVjdFRvU3RyaW5nVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGFuIGFycmF5IG9yIGNsb25lcyBhbiBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB0YXJnZXRcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gdG9BcnJheSh0YXJnZXQpIHtcbiAgICByZXR1cm4gaXNOb2RlTGlzdCh0YXJnZXQpID8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0KSA6IEFycmF5LnByb3RvdHlwZS5jb25jYXQodGFyZ2V0KTtcbiAgfVxuXG4gIHZhciBwYWNrZXIgPSBuZXcgUGFja2VyKCk7XG4gIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuICB2YXIgbnVtYmVyVHlwZSQxID0gJ251bWJlcic7XG4gIHZhciBzdHJpbmdUeXBlID0gJ3N0cmluZyc7XG4gIHZhciBpbnN0YW50TGF5b3V0ID0gJ2luc3RhbnQnO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxTdHJpbmcpfSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHs/KEhUTUxFbGVtZW50W118Tm9kZUxpc3R8U3RyaW5nKX0gW29wdGlvbnMuaXRlbXNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zaG93RHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc2hvd0Vhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnZpc2libGVTdHlsZXNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5oaWRlRHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaGlkZUVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmhpZGRlblN0eWxlc11cbiAgICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gW29wdGlvbnMubGF5b3V0XVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5maWxsR2Fwcz1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuaG9yaXpvbnRhbD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuYWxpZ25SaWdodD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuYWxpZ25Cb3R0b209ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LnJvdW5kaW5nPXRydWVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TnVtYmVyKX0gW29wdGlvbnMubGF5b3V0T25SZXNpemU9MTAwXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dE9uSW5pdD10cnVlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubGF5b3V0RHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubGF5b3V0RWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zLnNvcnREYXRhPW51bGxdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZHJhZ0VuYWJsZWQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7P0h0bWxFbGVtZW50fSBbb3B0aW9ucy5kcmFnQ29udGFpbmVyPW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGVdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuZGlzdGFuY2U9MF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZS5kZWxheT0wXVxuICAgKiBAcGFyYW0geyhCb29sZWFufFN0cmluZyl9IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZS5oYW5kbGU9ZmFsc2VdXG4gICAqIEBwYXJhbSB7P1N0cmluZ30gW29wdGlvbnMuZHJhZ0F4aXNdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58RnVuY3Rpb24pfSBbb3B0aW9ucy5kcmFnU29ydD10cnVlXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLnNvcnRJbnRlcnZhbD0xMDBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3MubWluRHJhZ0Rpc3RhbmNlPTEwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLm1pbkJvdW5jZUJhY2tBbmdsZT0xXVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxPYmplY3QpfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0UHJlZGljYXRlLnRocmVzaG9sZD01MF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdTb3J0UHJlZGljYXRlLmFjdGlvbj1cIm1vdmVcIl1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdSZWxlYXNlRHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZHJhZ1JlbGVhc2VFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kcmFnQ3NzUHJvcHNdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXJdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmVuYWJsZWQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuZHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50PW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGU9bnVsbF1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZT1udWxsXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY29udGFpbmVyQ2xhc3M9XCJtdXVyaVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbUNsYXNzPVwibXV1cmktaXRlbVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVZpc2libGVDbGFzcz1cIm11dXJpLWl0ZW0tdmlzaWJsZVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbUhpZGRlbkNsYXNzPVwibXV1cmktaXRlbS1oaWRkZW5cIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1Qb3NpdGlvbmluZ0NsYXNzPVwibXV1cmktaXRlbS1wb3NpdGlvbmluZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbURyYWdnaW5nQ2xhc3M9XCJtdXVyaS1pdGVtLWRyYWdnaW5nXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtUmVsZWFzaW5nQ2xhc3M9XCJtdXVyaS1pdGVtLXJlbGVhc2luZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVBsYWNlaG9sZGVyQ2xhc3M9XCJtdXVyaS1pdGVtLXBsYWNlaG9sZGVyXCJdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEdyaWQoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciBpbnN0ID0gdGhpcztcbiAgICB2YXIgc2V0dGluZ3M7XG4gICAgdmFyIGl0ZW1zO1xuICAgIHZhciBsYXlvdXRPblJlc2l6ZTtcblxuICAgIC8vIEFsbG93IHBhc3NpbmcgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmcuIFN0b3JlIGVsZW1lbnQgZm9yIGluc3RhbmNlLlxuICAgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID1cbiAgICAgIHR5cGVvZiBlbGVtZW50ID09PSBzdHJpbmdUeXBlID8gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIGNvbnRhaW5lciBlbGVtZW50IGlzIG5vdCBib2R5IGVsZW1lbnQgb3IgZG9lcyBub3RcbiAgICAvLyBleGlzdCB3aXRoaW4gdGhlIGJvZHkgZWxlbWVudC5cbiAgICB2YXIgaXNFbGVtZW50SW5Eb20gPSBlbGVtZW50LmdldFJvb3ROb2RlXG4gICAgICA/IGVsZW1lbnQuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA9PT0gZG9jdW1lbnRcbiAgICAgIDogd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnMoZWxlbWVudCk7XG4gICAgaWYgKCFpc0VsZW1lbnRJbkRvbSB8fCBlbGVtZW50ID09PSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRhaW5lciBlbGVtZW50IG11c3QgYmUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2Ugc2V0dGluZ3MgYnkgbWVyZ2luZyB0aGUgb3B0aW9ucyB3aXRoIGRlZmF1bHQgb3B0aW9ucy5cbiAgICBzZXR0aW5ncyA9IHRoaXMuX3NldHRpbmdzID0gbWVyZ2VTZXR0aW5ncyhHcmlkLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIC8vIFNhbml0aXplIGRyYWdTb3J0IHNldHRpbmcuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTb3J0KSkge1xuICAgICAgc2V0dGluZ3MuZHJhZ1NvcnQgPSAhIXNldHRpbmdzLmRyYWdTb3J0O1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBpbnN0YW5jZSBpZCBhbmQgc3RvcmUgaXQgdG8gdGhlIGdyaWQgaW5zdGFuY2VzIGNvbGxlY3Rpb24uXG4gICAgdGhpcy5faWQgPSBjcmVhdGVVaWQoKTtcbiAgICBncmlkSW5zdGFuY2VzW3RoaXMuX2lkXSA9IGluc3Q7XG5cbiAgICAvLyBEZXN0cm95ZWQgZmxhZy5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gVGhlIGxheW91dCBvYmplY3QgKG11dGF0ZWQgb24gZXZlcnkgbGF5b3V0KS5cbiAgICB0aGlzLl9sYXlvdXQgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIHNsb3RzOiBbXSxcbiAgICAgIHNldFdpZHRoOiBmYWxzZSxcbiAgICAgIHNldEhlaWdodDogZmFsc2UsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgcHJpdmF0ZSBFbWl0dGVyIGluc3RhbmNlLlxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuXG4gICAgLy8gQWRkIGNvbnRhaW5lciBlbGVtZW50J3MgY2xhc3MgbmFtZS5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5jb250YWluZXJDbGFzcyk7XG5cbiAgICAvLyBDcmVhdGUgaW5pdGlhbCBpdGVtcy5cbiAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgIGl0ZW1zID0gc2V0dGluZ3MuaXRlbXM7XG4gICAgaWYgKHR5cGVvZiBpdGVtcyA9PT0gc3RyaW5nVHlwZSkge1xuICAgICAgdG9BcnJheShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW1FbGVtZW50KSB7XG4gICAgICAgIGlmIChpdGVtcyA9PT0gJyonIHx8IGVsZW1lbnRNYXRjaGVzKGl0ZW1FbGVtZW50LCBpdGVtcykpIHtcbiAgICAgICAgICBpbnN0Ll9pdGVtcy5wdXNoKG5ldyBJdGVtKGluc3QsIGl0ZW1FbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgfHwgaXNOb2RlTGlzdChpdGVtcykpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdG9BcnJheShpdGVtcykubWFwKGZ1bmN0aW9uKGl0ZW1FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgSXRlbShpbnN0LCBpdGVtRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXRPblJlc2l6ZSBvcHRpb24gaXMgYSB2YWxpZCBudW1iZXIgc2FuaXRpemUgaXQgYW5kIGJpbmQgdGhlIHJlc2l6ZVxuICAgIC8vIGhhbmRsZXIuXG4gICAgbGF5b3V0T25SZXNpemUgPSBzZXR0aW5ncy5sYXlvdXRPblJlc2l6ZTtcbiAgICBpZiAodHlwZW9mIGxheW91dE9uUmVzaXplICE9PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgIGxheW91dE9uUmVzaXplID0gbGF5b3V0T25SZXNpemUgPT09IHRydWUgPyAwIDogLTE7XG4gICAgfVxuICAgIGlmIChsYXlvdXRPblJlc2l6ZSA+PSAwKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIChpbnN0Ll9yZXNpemVIYW5kbGVyID0gZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaW5zdC5yZWZyZXNoSXRlbXMoKS5sYXlvdXQoKTtcbiAgICAgICAgfSwgbGF5b3V0T25SZXNpemUpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBMYXlvdXQgb24gaW5pdCBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKHNldHRpbmdzLmxheW91dE9uSW5pdCkge1xuICAgICAgdGhpcy5sYXlvdXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm9wZXJ0aWVzXG4gICAqICoqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1cbiAgICovXG4gIEdyaWQuSXRlbSA9IEl0ZW07XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbUxheW91dFxuICAgKi9cbiAgR3JpZC5JdGVtTGF5b3V0ID0gSXRlbUxheW91dDtcblxuICAvKipcbiAgICogQHNlZSBJdGVtVmlzaWJpbGl0eVxuICAgKi9cbiAgR3JpZC5JdGVtVmlzaWJpbGl0eSA9IEl0ZW1WaXNpYmlsaXR5O1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1NaWdyYXRlXG4gICAqL1xuICBHcmlkLkl0ZW1NaWdyYXRlID0gSXRlbU1pZ3JhdGU7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbUFuaW1hdGVcbiAgICovXG4gIEdyaWQuSXRlbUFuaW1hdGUgPSBJdGVtQW5pbWF0ZTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtRHJhZ1xuICAgKi9cbiAgR3JpZC5JdGVtRHJhZyA9IEl0ZW1EcmFnO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1SZWxlYXNlXG4gICAqL1xuICBHcmlkLkl0ZW1SZWxlYXNlID0gSXRlbVJlbGVhc2U7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbURyYWdQbGFjZWhvbGRlclxuICAgKi9cbiAgR3JpZC5JdGVtRHJhZ1BsYWNlaG9sZGVyID0gSXRlbURyYWdQbGFjZWhvbGRlcjtcblxuICAvKipcbiAgICogQHNlZSBFbWl0dGVyXG4gICAqL1xuICBHcmlkLkVtaXR0ZXIgPSBFbWl0dGVyO1xuXG4gIC8qKlxuICAgKiBAc2VlIERyYWdnZXJcbiAgICovXG4gIEdyaWQuRHJhZ2dlciA9IERyYWdnZXI7XG5cbiAgLyoqXG4gICAqIEBzZWUgUGFja2VyXG4gICAqL1xuICBHcmlkLlBhY2tlciA9IFBhY2tlcjtcblxuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zIGZvciBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkXG4gICAqL1xuICBHcmlkLmRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIEl0ZW0gZWxlbWVudHNcbiAgICBpdGVtczogJyonLFxuXG4gICAgLy8gRGVmYXVsdCBzaG93IGFuaW1hdGlvblxuICAgIHNob3dEdXJhdGlvbjogMzAwLFxuICAgIHNob3dFYXNpbmc6ICdlYXNlJyxcblxuICAgIC8vIERlZmF1bHQgaGlkZSBhbmltYXRpb25cbiAgICBoaWRlRHVyYXRpb246IDMwMCxcbiAgICBoaWRlRWFzaW5nOiAnZWFzZScsXG5cbiAgICAvLyBJdGVtJ3MgdmlzaWJsZS9oaWRkZW4gc3RhdGUgc3R5bGVzXG4gICAgdmlzaWJsZVN0eWxlczoge1xuICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgfSxcbiAgICBoaWRkZW5TdHlsZXM6IHtcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuNSknXG4gICAgfSxcblxuICAgIC8vIExheW91dFxuICAgIGxheW91dDoge1xuICAgICAgZmlsbEdhcHM6IGZhbHNlLFxuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICBhbGlnblJpZ2h0OiBmYWxzZSxcbiAgICAgIGFsaWduQm90dG9tOiBmYWxzZSxcbiAgICAgIHJvdW5kaW5nOiB0cnVlXG4gICAgfSxcbiAgICBsYXlvdXRPblJlc2l6ZTogMTAwLFxuICAgIGxheW91dE9uSW5pdDogdHJ1ZSxcbiAgICBsYXlvdXREdXJhdGlvbjogMzAwLFxuICAgIGxheW91dEVhc2luZzogJ2Vhc2UnLFxuXG4gICAgLy8gU29ydGluZ1xuICAgIHNvcnREYXRhOiBudWxsLFxuXG4gICAgLy8gRHJhZyAmIERyb3BcbiAgICBkcmFnRW5hYmxlZDogZmFsc2UsXG4gICAgZHJhZ0NvbnRhaW5lcjogbnVsbCxcbiAgICBkcmFnU3RhcnRQcmVkaWNhdGU6IHtcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBoYW5kbGU6IGZhbHNlXG4gICAgfSxcbiAgICBkcmFnQXhpczogbnVsbCxcbiAgICBkcmFnU29ydDogdHJ1ZSxcbiAgICBkcmFnU29ydEhldXJpc3RpY3M6IHtcbiAgICAgIHNvcnRJbnRlcnZhbDogMTAwLFxuICAgICAgbWluRHJhZ0Rpc3RhbmNlOiAxMCxcbiAgICAgIG1pbkJvdW5jZUJhY2tBbmdsZTogMVxuICAgIH0sXG4gICAgZHJhZ1NvcnRQcmVkaWNhdGU6IHtcbiAgICAgIHRocmVzaG9sZDogNTAsXG4gICAgICBhY3Rpb246IGFjdGlvbk1vdmVcbiAgICB9LFxuICAgIGRyYWdSZWxlYXNlRHVyYXRpb246IDMwMCxcbiAgICBkcmFnUmVsZWFzZUVhc2luZzogJ2Vhc2UnLFxuICAgIGRyYWdDc3NQcm9wczoge1xuICAgICAgdG91Y2hBY3Rpb246ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHVzZXJEcmFnOiAnbm9uZScsXG4gICAgICB0YXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgdG91Y2hDYWxsb3V0OiAnbm9uZScsXG4gICAgICBjb250ZW50Wm9vbWluZzogJ25vbmUnXG4gICAgfSxcbiAgICBkcmFnUGxhY2Vob2xkZXI6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2UnLFxuICAgICAgY3JlYXRlRWxlbWVudDogbnVsbCxcbiAgICAgIG9uQ3JlYXRlOiBudWxsLFxuICAgICAgb25SZW1vdmU6IG51bGxcbiAgICB9LFxuXG4gICAgLy8gQ2xhc3NuYW1lc1xuICAgIGNvbnRhaW5lckNsYXNzOiAnbXV1cmknLFxuICAgIGl0ZW1DbGFzczogJ211dXJpLWl0ZW0nLFxuICAgIGl0ZW1WaXNpYmxlQ2xhc3M6ICdtdXVyaS1pdGVtLXNob3duJyxcbiAgICBpdGVtSGlkZGVuQ2xhc3M6ICdtdXVyaS1pdGVtLWhpZGRlbicsXG4gICAgaXRlbVBvc2l0aW9uaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLXBvc2l0aW9uaW5nJyxcbiAgICBpdGVtRHJhZ2dpbmdDbGFzczogJ211dXJpLWl0ZW0tZHJhZ2dpbmcnLFxuICAgIGl0ZW1SZWxlYXNpbmdDbGFzczogJ211dXJpLWl0ZW0tcmVsZWFzaW5nJyxcbiAgICBpdGVtUGxhY2Vob2xkZXJDbGFzczogJ211dXJpLWl0ZW0tcGxhY2Vob2xkZXInXG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGFsbCBpdGVtcy4gT3B0aW9uYWxseSB5b3UgY2FuIHByb3ZpZGUgc3BlY2lmaWMgdGFyZ2V0cyAoZWxlbWVudHMgYW5kXG4gICAqIGluZGljZXMpLiBOb3RlIHRoYXQgdGhlIHJldHVybmVkIGFycmF5IGlzIG5vdCB0aGUgc2FtZSBvYmplY3QgdXNlZCBieSB0aGVcbiAgICogaW5zdGFuY2Ugc28gbW9kaWZ5aW5nIGl0IHdpbGwgbm90IGFmZmVjdCBpbnN0YW5jZSdzIGl0ZW1zLiBBbGwgaXRlbXMgdGhhdFxuICAgKiBhcmUgbm90IGZvdW5kIGFyZSBvbWl0dGVkIGZyb20gdGhlIHJldHVybmVkIGFycmF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW3RhcmdldHNdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5nZXRJdGVtcyA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICAvLyBSZXR1cm4gYWxsIGl0ZW1zIGltbWVkaWF0ZWx5IGlmIG5vIHRhcmdldHMgd2VyZSBwcm92aWRlZCBvciBpZiB0aGVcbiAgICAvLyBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICghdGFyZ2V0cyAmJiB0YXJnZXRzICE9PSAwKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKDApO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBbXTtcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0b0FycmF5KHRhcmdldHMpO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gSWYgdGFyZ2V0IGl0ZW1zIGFyZSBkZWZpbmVkIHJldHVybiBmaWx0ZXJlZCByZXN1bHRzLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IHRoaXMuX2dldEl0ZW0odGFyZ2V0SXRlbXNbaV0pO1xuICAgICAgaXRlbSAmJiByZXQucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNhY2hlZCBkaW1lbnNpb25zIG9mIHRoZSBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW2l0ZW1zXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlZnJlc2hJdGVtcyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciB0YXJnZXRzID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0c1tpXS5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzb3J0IGRhdGEgb2YgdGhlIGluc3RhbmNlJ3MgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBbaXRlbXNdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUucmVmcmVzaFNvcnREYXRhID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldEl0ZW1zW2ldLl9yZWZyZXNoU29ydERhdGEoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU3luY2hyb25pemUgdGhlIGl0ZW0gZWxlbWVudHMgdG8gbWF0Y2ggdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgRE9NLlxuICAgKiBUaGlzIGNvbWVzIGhhbmR5IGlmIHlvdSBuZWVkIHRvIGtlZXAgdGhlIERPTSBzdHJ1Y3R1cmUgbWF0Y2hlZCB3aXRoIHRoZVxuICAgKiBvcmRlciBvZiB0aGUgaXRlbXMuIE5vdGUgdGhhdCBpZiBhbiBpdGVtJ3MgZWxlbWVudCBpcyBub3QgY3VycmVudGx5IGEgY2hpbGRcbiAgICogb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50IChpZiBpdCBpcyBkcmFnZ2VkIGZvciBleGFtcGxlKSBpdCBpcyBpZ25vcmVkIGFuZFxuICAgKiBsZWZ0IHVudG91Y2hlZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zeW5jaHJvbml6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB2YXIgZnJhZ21lbnQ7XG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIGluIG9yZGVyIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudCA9IGl0ZW1zW2ldLl9lbGVtZW50O1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlID09PSBjb250YWluZXIpIHtcbiAgICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZyYWdtZW50KSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgc3luY2hyb25pemUgZXZlbnQuXG4gICAgdGhpcy5fZW1pdChldmVudFN5bmNocm9uaXplKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIGFwcGx5IGl0ZW0gcG9zaXRpb25zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0xheW91dENhbGxiYWNrfSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGluc3QgPSB0aGlzO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5fdXBkYXRlTGF5b3V0KCk7XG4gICAgdmFyIGxheW91dElkID0gbGF5b3V0LmlkO1xuICAgIHZhciBpdGVtc0xlbmd0aCA9IGxheW91dC5pdGVtcy5sZW5ndGg7XG4gICAgdmFyIGNvdW50ZXIgPSBpdGVtc0xlbmd0aDtcbiAgICB2YXIgaXNCb3JkZXJCb3g7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBUaGUgZmluaXNoIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGNoZWNraW5nIGlmIGFsbCB0aGUgaXRlbXNcbiAgICAvLyBoYXZlIGxhaWQgb3V0IHlldC4gQWZ0ZXIgYWxsIGl0ZW1zIGhhdmUgZmluaXNoZWQgdGhlaXIgYW5pbWF0aW9ucyBjYWxsXG4gICAgLy8gY2FsbGJhY2sgYW5kIGVtaXQgbGF5b3V0RW5kIGV2ZW50LiBPbmx5IGVtaXQgbGF5b3V0RW5kIGV2ZW50IGlmIHRoZXJlXG4gICAgLy8gaGFzbid0IGJlZW4gYSBuZXcgbGF5b3V0IGNhbGwgZHVyaW5nIHRoaXMgbGF5b3V0LlxuICAgIGZ1bmN0aW9uIHRyeUZpbmlzaCgpIHtcbiAgICAgIGlmICgtLWNvdW50ZXIgPiAwKSByZXR1cm47XG5cbiAgICAgIHZhciBoYXNMYXlvdXRDaGFuZ2VkID0gaW5zdC5fbGF5b3V0LmlkICE9PSBsYXlvdXRJZDtcbiAgICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24oaW5zdGFudCkgPyBpbnN0YW50IDogb25GaW5pc2g7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICBjYWxsYmFjayhoYXNMYXlvdXRDaGFuZ2VkLCBsYXlvdXQuaXRlbXMuc2xpY2UoMCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc0xheW91dENoYW5nZWQgJiYgaW5zdC5faGFzTGlzdGVuZXJzKGV2ZW50TGF5b3V0RW5kKSkge1xuICAgICAgICBpbnN0Ll9lbWl0KGV2ZW50TGF5b3V0RW5kLCBsYXlvdXQuaXRlbXMuc2xpY2UoMCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGdyaWQncyB3aWR0aCBvciBoZWlnaHQgd2FzIG1vZGlmaWVkLCB3ZSBuZWVkIHRvIHVwZGF0ZSBpdCdzIGNhY2hlZFxuICAgIC8vIGRpbWVuc2lvbnMuIEFsc28ga2VlcCBpbiBtaW5kIHRoYXQgZ3JpZCdzIGNhY2hlZCB3aWR0aC9oZWlnaHQgc2hvdWxkXG4gICAgLy8gYWx3YXlzIGVxdWFsIHRvIHdoYXQgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB3b3VsZCByZXR1cm4sIHNvXG4gICAgLy8gdGhlcmVmb3JlIHdlIG5lZWQgdG8gYWRkIHRoZSBncmlkIGVsZW1lbnQncyBib3JkZXJzIHRvIHRoZSBkaW1lbnNpb25zIGlmXG4gICAgLy8gaXQncyBib3gtc2l6aW5nIGlzIGJvcmRlci1ib3guIE5vdGUgdGhhdCB3ZSBzdXBwb3J0IHByb3ZpZGluZyB0aGVcbiAgICAvLyBkaW1lbnNpb25zIGFzIGEgc3RyaW5nIGhlcmUgdG9vIHNvIHRoYXQgb25lIGNhbiBkZWZpbmUgdGhlIHVuaXQgb2YgdGhlXG4gICAgLy8gZGltZW5zaW9ucywgaW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBkbyB0aGUgYm9yZGVyLWJveCBjaGVjay5cbiAgICBpZiAoXG4gICAgICAobGF5b3V0LnNldEhlaWdodCAmJiB0eXBlb2YgbGF5b3V0LmhlaWdodCA9PT0gbnVtYmVyVHlwZSQxKSB8fFxuICAgICAgKGxheW91dC5zZXRXaWR0aCAmJiB0eXBlb2YgbGF5b3V0LndpZHRoID09PSBudW1iZXJUeXBlJDEpXG4gICAgKSB7XG4gICAgICBpc0JvcmRlckJveCA9IGdldFN0eWxlKGVsZW1lbnQsICdib3gtc2l6aW5nJykgPT09ICdib3JkZXItYm94JztcbiAgICB9XG4gICAgaWYgKGxheW91dC5zZXRIZWlnaHQpIHtcbiAgICAgIGlmICh0eXBlb2YgbGF5b3V0LmhlaWdodCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cbiAgICAgICAgICAoaXNCb3JkZXJCb3ggPyBsYXlvdXQuaGVpZ2h0ICsgdGhpcy5fYm9yZGVyVG9wICsgdGhpcy5fYm9yZGVyQm90dG9tIDogbGF5b3V0LmhlaWdodCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBsYXlvdXQuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGF5b3V0LnNldFdpZHRoKSB7XG4gICAgICBpZiAodHlwZW9mIGxheW91dC53aWR0aCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPVxuICAgICAgICAgIChpc0JvcmRlckJveCA/IGxheW91dC53aWR0aCArIHRoaXMuX2JvcmRlckxlZnQgKyB0aGlzLl9ib3JkZXJSaWdodCA6IGxheW91dC53aWR0aCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGxheW91dC53aWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbWl0IGxheW91dFN0YXJ0IGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBpcyBpbnRlbnRpb25hbGx5IGVtaXR0ZWQgYWZ0ZXIgdGhlXG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnQncyBkaW1lbnNpb25zIGFyZSBzZXQsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZXJlIHdvdWxkIGJlXG4gICAgLy8gbm8gaG9vayBmb3IgcmVhY3RpbmcgdG8gY29udGFpbmVyIGRpbWVuc2lvbiBjaGFuZ2VzLlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRMYXlvdXRTdGFydCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRMYXlvdXRTdGFydCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaXRlbXMgbGV0J3MgZmluaXNoIHF1aWNrbHkuXG4gICAgaWYgKCFpdGVtc0xlbmd0aCkge1xuICAgICAgdHJ5RmluaXNoKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgaXRlbXMgbGV0J3MgcG9zaXRpb24gdGhlbS5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXNMZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IGxheW91dC5pdGVtc1tpXTtcbiAgICAgIGlmICghaXRlbSkgY29udGludWU7XG5cbiAgICAgIC8vIFVwZGF0ZSBpdGVtJ3MgcG9zaXRpb24uXG4gICAgICBpdGVtLl9sZWZ0ID0gbGF5b3V0LnNsb3RzW2kgKiAyXTtcbiAgICAgIGl0ZW0uX3RvcCA9IGxheW91dC5zbG90c1tpICogMiArIDFdO1xuXG4gICAgICAvLyBMYXlvdXQgaXRlbSBpZiBpdCBpcyBub3QgZHJhZ2dlZC5cbiAgICAgIGl0ZW0uaXNEcmFnZ2luZygpID8gdHJ5RmluaXNoKCkgOiBpdGVtLl9sYXlvdXQuc3RhcnQoaW5zdGFudCA9PT0gdHJ1ZSwgdHJ5RmluaXNoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQWRkIG5ldyBpdGVtcyBieSBwcm92aWRpbmcgdGhlIGVsZW1lbnRzIHlvdSB3aXNoIHRvIGFkZCB0byB0aGUgaW5zdGFuY2UgYW5kXG4gICAqIG9wdGlvbmFsbHkgcHJvdmlkZSB0aGUgaW5kZXggd2hlcmUgeW91IHdhbnQgdGhlIGl0ZW1zIHRvIGJlIGluc2VydGVkIGludG8uXG4gICAqIEFsbCBlbGVtZW50cyB0aGF0IGFyZSBub3QgYWxyZWFkeSBjaGlsZHJlbiBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgd2lsbCBiZVxuICAgKiBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC4gSWYgYW4gZWxlbWVudCBoYXMgaXQncyBDU1NcbiAgICogZGlzcGxheSBwcm9wZXJ0eSBzZXQgdG8gXCJub25lXCIgaXQgd2lsbCBiZSBtYXJrZWQgYXMgaW5hY3RpdmUgZHVyaW5nIHRoZVxuICAgKiBpbml0aWF0aW9uIHByb2Nlc3MuIEFzIGxvbmcgYXMgdGhlIGl0ZW0gaXMgaW5hY3RpdmUgaXQgd2lsbCBub3QgYmUgcGFydCBvZlxuICAgKiB0aGUgbGF5b3V0LCBidXQgaXQgd2lsbCByZXRhaW4gaXQncyBpbmRleC4gWW91IGNhbiBhY3RpdmF0ZSBpdGVtcyBhdCBhbnlcbiAgICogcG9pbnQgd2l0aCBncmlkLnNob3coKSBtZXRob2QuIFRoaXMgbWV0aG9kIHdpbGwgYXV0b21hdGljYWxseSBjYWxsXG4gICAqIGdyaWQubGF5b3V0KCkgaWYgb25lIG9yIG1vcmUgb2YgdGhlIGFkZGVkIGVsZW1lbnRzIGFyZSB2aXNpYmxlLiBJZiBvbmx5XG4gICAqIGhpZGRlbiBpdGVtcyBhcmUgYWRkZWQgbm8gbGF5b3V0IHdpbGwgYmUgY2FsbGVkLiBBbGwgdGhlIG5ldyB2aXNpYmxlIGl0ZW1zXG4gICAqIGFyZSBwb3NpdGlvbmVkIHdpdGhvdXQgYW5pbWF0aW9uIGR1cmluZyB0aGVpciBmaXJzdCBsYXlvdXQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fEhUTUxFbGVtZW50W10pfSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5pbmRleD0tMV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pc0FjdGl2ZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0l0ZW1bXX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICFlbGVtZW50cykgcmV0dXJuIFtdO1xuXG4gICAgdmFyIG5ld0l0ZW1zID0gdG9BcnJheShlbGVtZW50cyk7XG4gICAgaWYgKCFuZXdJdGVtcy5sZW5ndGgpIHJldHVybiBuZXdJdGVtcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIE1hcCBwcm92aWRlZCBlbGVtZW50cyBpbnRvIG5ldyBncmlkIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCBuZXdJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IG5ldyBJdGVtKHRoaXMsIG5ld0l0ZW1zW2ldLCBvcHRzLmlzQWN0aXZlKTtcbiAgICAgIG5ld0l0ZW1zW2ldID0gaXRlbTtcblxuICAgICAgLy8gSWYgdGhlIGl0ZW0gdG8gYmUgYWRkZWQgaXMgYWN0aXZlLCB3ZSBuZWVkIHRvIGRvIGEgbGF5b3V0LiBBbHNvLCB3ZVxuICAgICAgLy8gbmVlZCB0byBtYXJrIHRoZSBpdGVtIHdpdGggdGhlIHNraXBOZXh0QW5pbWF0aW9uIGZsYWcgdG8gbWFrZSBpdFxuICAgICAgLy8gcG9zaXRpb24gaW5zdGFudGx5ICh3aXRob3V0IGFuaW1hdGlvbikgZHVyaW5nIHRoZSBuZXh0IGxheW91dC4gV2l0aG91dFxuICAgICAgLy8gdGhlIGhhY2sgdGhlIGl0ZW0gd291bGQgYW5pbWF0ZSB0byBpdCdzIG5ldyBwb3NpdGlvbiBmcm9tIHRoZSBub3J0aHdlc3RcbiAgICAgIC8vIGNvcm5lciBvZiB0aGUgZ3JpZCwgd2hpY2ggZmVlbHMgYSBiaXQgYnVnZ3kgKGltaG8pLlxuICAgICAgaWYgKGl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICAgIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5fbGF5b3V0Ll9za2lwTmV4dEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBuZXcgaXRlbXMgdG8gdGhlIGl0ZW1zIGNvbGxlY3Rpb24gdG8gY29ycmVjdCBpbmRleC5cbiAgICBhcnJheUluc2VydChpdGVtcywgbmV3SXRlbXMsIG9wdHMuaW5kZXgpO1xuXG4gICAgLy8gRW1pdCBhZGQgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudEFkZCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRBZGQsIG5ld0l0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgIGlmIChuZWVkc0xheW91dCAmJiBsYXlvdXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3SXRlbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpdGVtcyBmcm9tIHRoZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZW1vdmVFbGVtZW50cz1mYWxzZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0l0ZW1bXX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgYWxsSXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlbW92ZSB0aGUgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSB0YXJnZXRJdGVtc1tpXTtcbiAgICAgIGluZGljZXMucHVzaChhbGxJdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICAgIGlmIChpdGVtLl9pc0FjdGl2ZSkgbmVlZHNMYXlvdXQgPSB0cnVlO1xuICAgICAgaXRlbS5fZGVzdHJveShvcHRzLnJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHJlbW92ZSBldmVudC5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50UmVtb3ZlKSkge1xuICAgICAgdGhpcy5fZW1pdChldmVudFJlbW92ZSwgdGFyZ2V0SXRlbXMuc2xpY2UoMCksIGluZGljZXMpO1xuICAgIH1cblxuICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgaWYgKG5lZWRzTGF5b3V0ICYmIGxheW91dCkge1xuICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRJdGVtcztcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBpbnN0YW5jZSBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge1Nob3dDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9zZXRJdGVtc1Zpc2liaWxpdHkoaXRlbXMsIHRydWUsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlIGluc3RhbmNlIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7SGlkZUNhbGxiYWNrfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oaXRlbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3NldEl0ZW1zVmlzaWJpbGl0eShpdGVtcywgZmFsc2UsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgaXRlbXMuIEV4cGVjdHMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LCBhIHByZWRpY2F0ZSwgd2hpY2ggc2hvdWxkIGJlXG4gICAqIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nLiBUaGUgcHJlZGljYXRlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGZvciBldmVyeVxuICAgKiBpdGVtIGluIHRoZSBpbnN0YW5jZS4gSWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJlZGljYXRlIGlzIHRydXRoeSB0aGVcbiAgICogaXRlbSBpbiBxdWVzdGlvbiB3aWxsIGJlIHNob3duIGFuZCBvdGhlcndpc2UgaGlkZGVuLiBUaGUgcHJlZGljYXRlIGNhbGxiYWNrXG4gICAqIHJlY2VpdmVzIHRoZSBpdGVtIGluc3RhbmNlIGFzIGl0J3MgYXJndW1lbnQuIElmIHRoZSBwcmVkaWNhdGUgaXMgYSBzdHJpbmdcbiAgICogaXQgaXMgY29uc2lkZXJlZCB0byBiZSBhIHNlbGVjdG9yIGFuZCBpdCBpcyBjaGVja2VkIGFnYWluc3QgZXZlcnkgaXRlbVxuICAgKiBlbGVtZW50IGluIHRoZSBpbnN0YW5jZSB3aXRoIHRoZSBuYXRpdmUgZWxlbWVudC5tYXRjaGVzKCkgbWV0aG9kLiBBbGwgdGhlXG4gICAqIG1hdGNoaW5nIGl0ZW1zIHdpbGwgYmUgc2hvd24gYW5kIG90aGVycyBoaWRkZW4uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufFN0cmluZyl9IHByZWRpY2F0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtGaWx0ZXJDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24ocHJlZGljYXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pdGVtcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW1zVG9TaG93ID0gW107XG4gICAgdmFyIGl0ZW1zVG9IaWRlID0gW107XG4gICAgdmFyIGlzUHJlZGljYXRlU3RyaW5nID0gdHlwZW9mIHByZWRpY2F0ZSA9PT0gc3RyaW5nVHlwZTtcbiAgICB2YXIgaXNQcmVkaWNhdGVGbiA9IGlzRnVuY3Rpb24ocHJlZGljYXRlKTtcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgaXNJbnN0YW50ID0gb3B0cy5pbnN0YW50ID09PSB0cnVlO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgb25GaW5pc2ggPSBpc0Z1bmN0aW9uKG9wdHMub25GaW5pc2gpID8gb3B0cy5vbkZpbmlzaCA6IG51bGw7XG4gICAgdmFyIHRyeUZpbmlzaENvdW50ZXIgPSAtMTtcbiAgICB2YXIgdHJ5RmluaXNoID0gbm9vcDtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHdlIGhhdmUgb25GaW5pc2ggY2FsbGJhY2ssIGxldCdzIGNyZWF0ZSBwcm9wZXIgdHJ5RmluaXNoIGNhbGxiYWNrLlxuICAgIGlmIChvbkZpbmlzaCkge1xuICAgICAgdHJ5RmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICsrdHJ5RmluaXNoQ291bnRlciAmJiBvbkZpbmlzaChpdGVtc1RvU2hvdy5zbGljZSgwKSwgaXRlbXNUb0hpZGUuc2xpY2UoMCkpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB3aGljaCBpdGVtcyBuZWVkIHRvIGJlIHNob3duIGFuZCB3aGljaCBoaWRkZW4uXG4gICAgaWYgKGlzUHJlZGljYXRlRm4gfHwgaXNQcmVkaWNhdGVTdHJpbmcpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtID0gdGhpcy5faXRlbXNbaV07XG4gICAgICAgIGlmIChpc1ByZWRpY2F0ZUZuID8gcHJlZGljYXRlKGl0ZW0pIDogZWxlbWVudE1hdGNoZXMoaXRlbS5fZWxlbWVudCwgcHJlZGljYXRlKSkge1xuICAgICAgICAgIGl0ZW1zVG9TaG93LnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbXNUb0hpZGUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgaXRlbXMgdGhhdCBuZWVkIHRvIGJlIHNob3duLlxuICAgIGlmIChpdGVtc1RvU2hvdy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hvdyhpdGVtc1RvU2hvdywge1xuICAgICAgICBpbnN0YW50OiBpc0luc3RhbnQsXG4gICAgICAgIG9uRmluaXNoOiB0cnlGaW5pc2gsXG4gICAgICAgIGxheW91dDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnlGaW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBIaWRlIGl0ZW1zIHRoYXQgbmVlZCB0byBiZSBoaWRkZW4uXG4gICAgaWYgKGl0ZW1zVG9IaWRlLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaWRlKGl0ZW1zVG9IaWRlLCB7XG4gICAgICAgIGluc3RhbnQ6IGlzSW5zdGFudCxcbiAgICAgICAgb25GaW5pc2g6IHRyeUZpbmlzaCxcbiAgICAgICAgbGF5b3V0OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeUZpbmlzaCgpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgaXRlbXMgdG8gZmlsdGVyLlxuICAgIGlmIChpdGVtc1RvU2hvdy5sZW5ndGggfHwgaXRlbXNUb0hpZGUubGVuZ3RoKSB7XG4gICAgICAvLyBFbWl0IGZpbHRlciBldmVudC5cbiAgICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRGaWx0ZXIpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoZXZlbnRGaWx0ZXIsIGl0ZW1zVG9TaG93LnNsaWNlKDApLCBpdGVtc1RvSGlkZS5zbGljZSgwKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU29ydCBpdGVtcy4gVGhlcmUgYXJlIHRocmVlIHdheXMgdG8gc29ydCB0aGUgaXRlbXMuIFRoZSBmaXJzdCBpcyBzaW1wbHkgYnlcbiAgICogcHJvdmlkaW5nIGEgZnVuY3Rpb24gYXMgdGhlIGNvbXBhcmVyIHdoaWNoIHdvcmtzIGlkZW50aWNhbGx5IHRvIG5hdGl2ZVxuICAgKiBhcnJheSBzb3J0LiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc29ydCBieSB0aGUgc29ydCBkYXRhIHlvdSBoYXZlIHByb3ZpZGVkXG4gICAqIGluIHRoZSBpbnN0YW5jZSdzIG9wdGlvbnMuIEp1c3QgcHJvdmlkZSB0aGUgc29ydCBkYXRhIGtleShzKSBhcyBhIHN0cmluZ1xuICAgKiAoc2VwYXJhdGVkIGJ5IHNwYWNlKSBhbmQgdGhlIGl0ZW1zIHdpbGwgYmUgc29ydGVkIGJhc2VkIG9uIHRoZSBwcm92aWRlZFxuICAgKiBzb3J0IGRhdGEga2V5cy4gTGFzdGx5IHlvdSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byBwcm92aWRlIGEgcHJlc29ydGVkXG4gICAqIGFycmF5IG9mIGl0ZW1zIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBzeW5jIHRoZSBpbnRlcm5hbCBpdGVtcyBhcnJheSBpbiB0aGVcbiAgICogc2FtZSBvcmRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoRnVuY3Rpb258SXRlbVtdfFN0cmluZ3xTdHJpbmdbXSl9IGNvbXBhcmVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kZXNjZW5kaW5nPWZhbHNlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNvcnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvcnRDb21wYXJlcjtcbiAgICB2YXIgaXNEZXNjZW5kaW5nO1xuICAgIHZhciBvcmlnSXRlbXM7XG4gICAgdmFyIGluZGV4TWFwO1xuXG4gICAgZnVuY3Rpb24gcGFyc2VDcml0ZXJpYShkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbC5zcGxpdCgnOicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbmRleE1hcChpdGVtcykge1xuICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXRbaXRlbXNbaV0uX2lkXSA9IGk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBhcmVJbmRpY2VzKGl0ZW1BLCBpdGVtQikge1xuICAgICAgdmFyIGluZGV4QSA9IGluZGV4TWFwW2l0ZW1BLl9pZF07XG4gICAgICB2YXIgaW5kZXhCID0gaW5kZXhNYXBbaXRlbUIuX2lkXTtcbiAgICAgIHJldHVybiBpc0Rlc2NlbmRpbmcgPyBpbmRleEIgLSBpbmRleEEgOiBpbmRleEEgLSBpbmRleEI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdENvbXBhcmVyKGEsIGIpIHtcbiAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgdmFyIGNyaXRlcmlhTmFtZTtcbiAgICAgIHZhciBjcml0ZXJpYU9yZGVyO1xuICAgICAgdmFyIHZhbEE7XG4gICAgICB2YXIgdmFsQjtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsaXN0IG9mIHNvcnQgY3JpdGVyaWEuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRDb21wYXJlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIGNyaXRlcmlhIG5hbWUsIHdoaWNoIHNob3VsZCBtYXRjaCBhbiBpdGVtJ3Mgc29ydCBkYXRhIGtleS5cbiAgICAgICAgY3JpdGVyaWFOYW1lID0gc29ydENvbXBhcmVyW2ldWzBdO1xuICAgICAgICBjcml0ZXJpYU9yZGVyID0gc29ydENvbXBhcmVyW2ldWzFdO1xuXG4gICAgICAgIC8vIEdldCBpdGVtcycgY2FjaGVkIHNvcnQgdmFsdWVzIGZvciB0aGUgY3JpdGVyaWEuIElmIHRoZSBpdGVtIGhhcyBubyBzb3J0XG4gICAgICAgIC8vIGRhdGEgbGV0J3MgdXBkYXRlIHRoZSBpdGVtcyBzb3J0IGRhdGEgKHRoaXMgaXMgYSBsYXp5IGxvYWQgbWVjaGFuaXNtKS5cbiAgICAgICAgdmFsQSA9IChhLl9zb3J0RGF0YSA/IGEgOiBhLl9yZWZyZXNoU29ydERhdGEoKSkuX3NvcnREYXRhW2NyaXRlcmlhTmFtZV07XG4gICAgICAgIHZhbEIgPSAoYi5fc29ydERhdGEgPyBiIDogYi5fcmVmcmVzaFNvcnREYXRhKCkpLl9zb3J0RGF0YVtjcml0ZXJpYU5hbWVdO1xuXG4gICAgICAgIC8vIFNvcnQgdGhlIGl0ZW1zIGluIGRlc2NlbmRpbmcgb3JkZXIgaWYgZGVmaW5lZCBzbyBleHBsaWNpdGx5LiBPdGhlcndpc2VcbiAgICAgICAgLy8gc29ydCBpdGVtcyBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gICAgICAgIGlmIChjcml0ZXJpYU9yZGVyID09PSAnZGVzYycgfHwgKCFjcml0ZXJpYU9yZGVyICYmIGlzRGVzY2VuZGluZykpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWxCIDwgdmFsQSA/IC0xIDogdmFsQiA+IHZhbEEgPyAxIDogMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWxBIDwgdmFsQiA/IC0xIDogdmFsQSA+IHZhbEIgPyAxIDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgLTEgb3IgMSBhcyB0aGUgcmV0dXJuIHZhbHVlLCBsZXQncyByZXR1cm4gaXQgaW1tZWRpYXRlbHkuXG4gICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHZhbHVlcyBhcmUgZXF1YWwgbGV0J3MgY29tcGFyZSB0aGUgaXRlbSBpbmRpY2VzIHRvIG1ha2Ugc3VyZSB3ZVxuICAgICAgLy8gaGF2ZSBhIHN0YWJsZSBzb3J0LlxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgaWYgKCFpbmRleE1hcCkgaW5kZXhNYXAgPSBnZXRJbmRleE1hcChvcmlnSXRlbXMpO1xuICAgICAgICByZXN1bHQgPSBjb21wYXJlSW5kaWNlcyhhLCBiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3VzdG9tQ29tcGFyZXIoYSwgYikge1xuICAgICAgdmFyIHJlc3VsdCA9IHNvcnRDb21wYXJlcihhLCBiKTtcbiAgICAgIC8vIElmIGRlc2NlbmRpbmcgbGV0J3MgaW52ZXJ0IHRoZSByZXN1bHQgdmFsdWUuXG4gICAgICBpZiAoaXNEZXNjZW5kaW5nICYmIHJlc3VsdCkgcmVzdWx0ID0gLXJlc3VsdDtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCByZXN1bHQgKG5vdCB6ZXJvKSBsZXQncyByZXR1cm4gaXQgcmlnaHQgYXdheS5cbiAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAvLyBJZiByZXN1bHQgaXMgemVybyBsZXQncyBjb21wYXJlIHRoZSBpdGVtIGluZGljZXMgdG8gbWFrZSBzdXJlIHdlIGhhdmUgYVxuICAgICAgLy8gc3RhYmxlIHNvcnQuXG4gICAgICBpZiAoIWluZGV4TWFwKSBpbmRleE1hcCA9IGdldEluZGV4TWFwKG9yaWdJdGVtcyk7XG4gICAgICByZXR1cm4gY29tcGFyZUluZGljZXMoYSwgYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbXBhcmVyLCBvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5faXRlbXMubGVuZ3RoIDwgMikgcmV0dXJuIHRoaXM7XG5cbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gU2V0dXAgcGFyZW50IHNjb3BlIGRhdGEuXG4gICAgICBzb3J0Q29tcGFyZXIgPSBjb21wYXJlcjtcbiAgICAgIGlzRGVzY2VuZGluZyA9ICEhb3B0cy5kZXNjZW5kaW5nO1xuICAgICAgb3JpZ0l0ZW1zID0gaXRlbXMuc2xpY2UoMCk7XG4gICAgICBpbmRleE1hcCA9IG51bGw7XG5cbiAgICAgIC8vIElmIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGRvIGEgbmF0aXZlIGFycmF5IHNvcnQuXG4gICAgICBpZiAoaXNGdW5jdGlvbihzb3J0Q29tcGFyZXIpKSB7XG4gICAgICAgIGl0ZW1zLnNvcnQoY3VzdG9tQ29tcGFyZXIpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGlmIHdlIGdvdCBhIHN0cmluZywgbGV0J3Mgc29ydCBieSB0aGUgc29ydCBkYXRhIGFzIHByb3ZpZGVkIGluXG4gICAgICAvLyB0aGUgaW5zdGFuY2UncyBvcHRpb25zLlxuICAgICAgZWxzZSBpZiAodHlwZW9mIHNvcnRDb21wYXJlciA9PT0gc3RyaW5nVHlwZSkge1xuICAgICAgICBzb3J0Q29tcGFyZXIgPSBwYXJzZUNyaXRlcmlhKGNvbXBhcmVyKTtcbiAgICAgICAgaXRlbXMuc29ydChkZWZhdWx0Q29tcGFyZXIpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGlmIHdlIGdvdCBhbiBhcnJheSwgbGV0J3MgYXNzdW1lIGl0J3MgYSBwcmVzb3J0ZWQgYXJyYXkgb2YgdGhlXG4gICAgICAvLyBpdGVtcyBhbmQgb3JkZXIgdGhlIGl0ZW1zIGJhc2VkIG9uIGl0LlxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3J0Q29tcGFyZXIpKSB7XG4gICAgICAgIGlmIChzb3J0Q29tcGFyZXIubGVuZ3RoICE9PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1snICsgbmFtZXNwYWNlICsgJ10gc29ydCByZWZlcmVuY2UgaXRlbXMgZG8gbm90IG1hdGNoIHdpdGggZ3JpZCBpdGVtcy4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc29ydENvbXBhcmVyLmluZGV4T2YoaXRlbXNbaV0pIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbJyArIG5hbWVzcGFjZSArICddIHNvcnQgcmVmZXJlbmNlIGl0ZW1zIGRvIG5vdCBtYXRjaCB3aXRoIGdyaWQgaXRlbXMuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1zW2ldID0gc29ydENvbXBhcmVyW2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rlc2NlbmRpbmcpIGl0ZW1zLnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBsZXQncyBqdXN0IHNraXAgaXQsIG5vdGhpbmcgd2UgY2FuIGRvIGhlcmUuXG4gICAgICBlbHNlIHtcbiAgICAgICAgLyoqIEB0b2RvIE1heWJlIHRocm93IGFuIGVycm9yIGhlcmU/ICovXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IHNvcnQgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50U29ydCkpIHtcbiAgICAgICAgdGhpcy5fZW1pdChldmVudFNvcnQsIGl0ZW1zLnNsaWNlKDApLCBvcmlnSXRlbXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIE1vdmUgaXRlbSB0byBhbm90aGVyIGluZGV4IG9yIGluIHBsYWNlIG9mIGFub3RoZXIgaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBpdGVtXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gcG9zaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuYWN0aW9uPVwibW92ZVwiXVxuICAgKiAgIC0gQWNjZXB0cyBlaXRoZXIgXCJtb3ZlXCIgb3IgXCJzd2FwXCIuXG4gICAqICAgLSBcIm1vdmVcIiBtb3ZlcyB0aGUgaXRlbSBpbiBwbGFjZSBvZiB0aGUgb3RoZXIgaXRlbS5cbiAgICogICAtIFwic3dhcFwiIHN3YXBzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbXMuXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGl0ZW0sIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2l0ZW1zLmxlbmd0aCA8IDIpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBpc1N3YXAgPSBvcHRzLmFjdGlvbiA9PT0gYWN0aW9uU3dhcDtcbiAgICB2YXIgYWN0aW9uID0gaXNTd2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG4gICAgdmFyIGZyb21JdGVtID0gdGhpcy5fZ2V0SXRlbShpdGVtKTtcbiAgICB2YXIgdG9JdGVtID0gdGhpcy5fZ2V0SXRlbShwb3NpdGlvbik7XG4gICAgdmFyIGZyb21JbmRleDtcbiAgICB2YXIgdG9JbmRleDtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgaXRlbXMgZXhpc3QgYW5kIGFyZSBub3QgdGhlIHNhbWUuXG4gICAgaWYgKGZyb21JdGVtICYmIHRvSXRlbSAmJiBmcm9tSXRlbSAhPT0gdG9JdGVtKSB7XG4gICAgICAvLyBHZXQgdGhlIGluZGljZXMgb2YgdGhlIGl0ZW1zLlxuICAgICAgZnJvbUluZGV4ID0gaXRlbXMuaW5kZXhPZihmcm9tSXRlbSk7XG4gICAgICB0b0luZGV4ID0gaXRlbXMuaW5kZXhPZih0b0l0ZW0pO1xuXG4gICAgICAvLyBEbyB0aGUgbW92ZS9zd2FwLlxuICAgICAgaWYgKGlzU3dhcCkge1xuICAgICAgICBhcnJheVN3YXAoaXRlbXMsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheU1vdmUoaXRlbXMsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgbW92ZSBldmVudC5cbiAgICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRNb3ZlKSkge1xuICAgICAgICB0aGlzLl9lbWl0KGV2ZW50TW92ZSwge1xuICAgICAgICAgIGl0ZW06IGZyb21JdGVtLFxuICAgICAgICAgIGZyb21JbmRleDogZnJvbUluZGV4LFxuICAgICAgICAgIHRvSW5kZXg6IHRvSW5kZXgsXG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU2VuZCBpdGVtIHRvIGFub3RoZXIgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBpdGVtXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW29wdGlvbnMuYXBwZW5kVG89ZG9jdW1lbnQuYm9keV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXRTZW5kZXI9dHJ1ZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXRSZWNlaXZlcj10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihpdGVtLCBncmlkLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCBncmlkLl9pc0Rlc3Ryb3llZCB8fCB0aGlzID09PSBncmlkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgdGFyZ2V0IGl0ZW0uXG4gICAgaXRlbSA9IHRoaXMuX2dldEl0ZW0oaXRlbSk7XG4gICAgaWYgKCFpdGVtKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBjb250YWluZXIgPSBvcHRzLmFwcGVuZFRvIHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICAgIHZhciBsYXlvdXRTZW5kZXIgPSBvcHRzLmxheW91dFNlbmRlciA/IG9wdHMubGF5b3V0U2VuZGVyIDogb3B0cy5sYXlvdXRTZW5kZXIgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbGF5b3V0UmVjZWl2ZXIgPSBvcHRzLmxheW91dFJlY2VpdmVyXG4gICAgICA/IG9wdHMubGF5b3V0UmVjZWl2ZXJcbiAgICAgIDogb3B0cy5sYXlvdXRSZWNlaXZlciA9PT0gdW5kZWZpbmVkO1xuXG4gICAgLy8gU3RhcnQgdGhlIG1pZ3JhdGlvbiBwcm9jZXNzLlxuICAgIGl0ZW0uX21pZ3JhdGUuc3RhcnQoZ3JpZCwgcG9zaXRpb24sIGNvbnRhaW5lcik7XG5cbiAgICAvLyBJZiBtaWdyYXRpb24gd2FzIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5IGFuZCB0aGUgaXRlbSBpcyBhY3RpdmUsIGxldCdzIGxheW91dFxuICAgIC8vIHRoZSBncmlkcy5cbiAgICBpZiAoaXRlbS5fbWlncmF0ZS5faXNBY3RpdmUgJiYgaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIGlmIChsYXlvdXRTZW5kZXIpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQoXG4gICAgICAgICAgbGF5b3V0U2VuZGVyID09PSBpbnN0YW50TGF5b3V0LFxuICAgICAgICAgIGlzRnVuY3Rpb24obGF5b3V0U2VuZGVyKSA/IGxheW91dFNlbmRlciA6IHVuZGVmaW5lZFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGxheW91dFJlY2VpdmVyKSB7XG4gICAgICAgIGdyaWQubGF5b3V0KFxuICAgICAgICAgIGxheW91dFJlY2VpdmVyID09PSBpbnN0YW50TGF5b3V0LFxuICAgICAgICAgIGlzRnVuY3Rpb24obGF5b3V0UmVjZWl2ZXIpID8gbGF5b3V0UmVjZWl2ZXIgOiB1bmRlZmluZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbW92ZUVsZW1lbnRzPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZW1vdmVFbGVtZW50cykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcy5zbGljZSgwKTtcbiAgICB2YXIgaTtcblxuICAgIC8vIFVuYmluZCB3aW5kb3cgcmVzaXplIGV2ZW50IGxpc3RlbmVyLlxuICAgIGlmICh0aGlzLl9yZXNpemVIYW5kbGVyKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplSGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gRGVzdHJveSBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW1zW2ldLl9kZXN0cm95KHJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBSZXN0b3JlIGNvbnRhaW5lci5cbiAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIHRoaXMuX3NldHRpbmdzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJyc7XG5cbiAgICAvLyBFbWl0IGRlc3Ryb3kgZXZlbnQgYW5kIHVuYmluZCBhbGwgZXZlbnRzLlxuICAgIHRoaXMuX2VtaXQoZXZlbnREZXN0cm95KTtcbiAgICB0aGlzLl9lbWl0dGVyLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSByZWZlcmVuY2UgZnJvbSB0aGUgZ3JpZCBpbnN0YW5jZXMgY29sbGVjdGlvbi5cbiAgICBncmlkSW5zdGFuY2VzW3RoaXMuX2lkXSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEZsYWcgaW5zdGFuY2UgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSdzIGl0ZW0gYnkgZWxlbWVudCBvciBieSBpbmRleC4gVGFyZ2V0IGNhbiBhbHNvIGJlIGFuIEl0ZW1cbiAgICogaW5zdGFuY2UgaW4gd2hpY2ggY2FzZSB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgaXRlbSBpZiBpdCBleGlzdHMgd2l0aGluXG4gICAqIHJlbGF0ZWQgR3JpZCBpbnN0YW5jZS4gSWYgbm90aGluZyBpcyBmb3VuZCB3aXRoIHRoZSBwcm92aWRlZCB0YXJnZXQsIG51bGxcbiAgICogaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IFt0YXJnZXRdXG4gICAqIEByZXR1cm5zIHs/SXRlbX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9nZXRJdGVtID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgLy8gSWYgbm8gdGFyZ2V0IGlzIHNwZWNpZmllZCBvciB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLCByZXR1cm4gbnVsbC5cbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgKCF0YXJnZXQgJiYgdGFyZ2V0ICE9PSAwKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGFyZ2V0IGlzIG51bWJlciByZXR1cm4gdGhlIGl0ZW0gaW4gdGhhdCBpbmRleC4gSWYgdGhlIG51bWJlciBpcyBsb3dlclxuICAgIC8vIHRoYW4gemVybyBsb29rIGZvciB0aGUgaXRlbSBzdGFydGluZyBmcm9tIHRoZSBlbmQgb2YgdGhlIGl0ZW1zIGFycmF5LiBGb3JcbiAgICAvLyBleGFtcGxlIC0xIGZvciB0aGUgbGFzdCBpdGVtLCAtMiBmb3IgdGhlIHNlY29uZCBsYXN0IGl0ZW0sIGV0Yy5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXNbdGFyZ2V0ID4gLTEgPyB0YXJnZXQgOiB0aGlzLl9pdGVtcy5sZW5ndGggKyB0YXJnZXRdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhbiBpbnN0YW5jZSBvZiBJdGVtIHJldHVybiBpdCBpZiBpdCBpcyBhdHRhY2hlZCB0byB0aGlzXG4gICAgLy8gR3JpZCBpbnN0YW5jZSwgb3RoZXJ3aXNlIHJldHVybiBudWxsLlxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJdGVtKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0Ll9ncmlkSWQgPT09IHRoaXMuX2lkID8gdGFyZ2V0IDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBJbiBvdGhlciBjYXNlcyBsZXQncyBhc3N1bWUgdGhhdCB0aGUgdGFyZ2V0IGlzIGFuIGVsZW1lbnQsIHNvIGxldCdzIHRyeVxuICAgIC8vIHRvIGZpbmQgYW4gaXRlbSB0aGF0IG1hdGNoZXMgdGhlIGVsZW1lbnQgYW5kIHJldHVybiBpdC4gSWYgaXRlbSBpcyBub3RcbiAgICAvLyBmb3VuZCByZXR1cm4gbnVsbC5cbiAgICAvKiogQHRvZG8gVGhpcyBjb3VsZCBiZSBtYWRlIGEgbG90IGZhc3RlciBieSB1c2luZyBNYXAvV2Vha01hcCBvZiBlbGVtZW50cy4gKi9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXRlbXNbaV0uX2VsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlcyBhbmQgdXBkYXRlcyBpbnN0YW5jZSdzIGxheW91dCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0xheW91dERhdGF9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9zZXR0aW5ncy5sYXlvdXQ7XG4gICAgdmFyIHdpZHRoO1xuICAgIHZhciBoZWlnaHQ7XG4gICAgdmFyIG5ld0xheW91dDtcbiAgICB2YXIgaTtcblxuICAgIC8vIExldCdzIGluY3JlbWVudCBsYXlvdXQgaWQuXG4gICAgKytsYXlvdXQuaWQ7XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgbGF5b3V0IGl0ZW1zXG4gICAgbGF5b3V0Lml0ZW1zLmxlbmd0aCA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXRlbXNbaV0uX2lzQWN0aXZlKSBsYXlvdXQuaXRlbXMucHVzaCh0aGlzLl9pdGVtc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gTGV0J3MgbWFrZSBzdXJlIHdlIGhhdmUgdGhlIGNvcnJlY3QgY29udGFpbmVyIGRpbWVuc2lvbnMuXG4gICAgdGhpcy5fcmVmcmVzaERpbWVuc2lvbnMoKTtcblxuICAgIC8vIENhbGN1bGF0ZSBjb250YWluZXIgd2lkdGggYW5kIGhlaWdodCAod2l0aG91dCBib3JkZXJzKS5cbiAgICB3aWR0aCA9IHRoaXMuX3dpZHRoIC0gdGhpcy5fYm9yZGVyTGVmdCAtIHRoaXMuX2JvcmRlclJpZ2h0O1xuICAgIGhlaWdodCA9IHRoaXMuX2hlaWdodCAtIHRoaXMuX2JvcmRlclRvcCAtIHRoaXMuX2JvcmRlckJvdHRvbTtcblxuICAgIC8vIENhbGN1bGF0ZSBuZXcgbGF5b3V0LlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzKSkge1xuICAgICAgbmV3TGF5b3V0ID0gc2V0dGluZ3MobGF5b3V0Lml0ZW1zLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TGF5b3V0ID0gcGFja2VyLmdldExheW91dChsYXlvdXQuaXRlbXMsIHdpZHRoLCBoZWlnaHQsIGxheW91dC5zbG90cywgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIExldCdzIHVwZGF0ZSB0aGUgZ3JpZCdzIGxheW91dC5cbiAgICBsYXlvdXQuc2xvdHMgPSBuZXdMYXlvdXQuc2xvdHM7XG4gICAgbGF5b3V0LnNldFdpZHRoID0gQm9vbGVhbihuZXdMYXlvdXQuc2V0V2lkdGgpO1xuICAgIGxheW91dC5zZXRIZWlnaHQgPSBCb29sZWFuKG5ld0xheW91dC5zZXRIZWlnaHQpO1xuICAgIGxheW91dC53aWR0aCA9IG5ld0xheW91dC53aWR0aDtcbiAgICBsYXlvdXQuaGVpZ2h0ID0gbmV3TGF5b3V0LmhlaWdodDtcblxuICAgIHJldHVybiBsYXlvdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtaXQgYSBncmlkIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7Li4uKn0gW2FyZ11cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9lbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0LmFwcGx5KHRoaXMuX2VtaXR0ZXIsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgZXZlbnRzIGxpc3RlbmVycyBmb3IgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5faGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZW1pdHRlci5fZXZlbnRzW2V2ZW50XTtcbiAgICByZXR1cm4gISEobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29udGFpbmVyJ3Mgd2lkdGgsIGhlaWdodCBhbmQgb2Zmc2V0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlQm91bmRpbmdSZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLl93aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgdGhpcy5fbGVmdCA9IHJlY3QubGVmdDtcbiAgICB0aGlzLl90b3AgPSByZWN0LnRvcDtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGNvbnRhaW5lcidzIGJvcmRlciBzaXplcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbGVmdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJpZ2h0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9wXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYm90dG9tXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlQm9yZGVycyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICBpZiAobGVmdCkgdGhpcy5fYm9yZGVyTGVmdCA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLWxlZnQtd2lkdGgnKTtcbiAgICBpZiAocmlnaHQpIHRoaXMuX2JvcmRlclJpZ2h0ID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItcmlnaHQtd2lkdGgnKTtcbiAgICBpZiAodG9wKSB0aGlzLl9ib3JkZXJUb3AgPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci10b3Atd2lkdGgnKTtcbiAgICBpZiAoYm90dG9tKSB0aGlzLl9ib3JkZXJCb3R0b20gPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1ib3R0b20td2lkdGgnKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVmcmVzaCBhbGwgb2YgY29udGFpbmVyJ3MgaW50ZXJuYWwgZGltZW5zaW9ucyBhbmQgb2Zmc2V0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fcmVmcmVzaERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLl91cGRhdGVCb3JkZXJzKDEsIDEsIDEsIDEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93IG9yIGhpZGUgR3JpZCBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9WaXNpYmxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0geyhTaG93Q2FsbGJhY2t8SGlkZUNhbGxiYWNrKX0gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fc2V0SXRlbXNWaXNpYmlsaXR5ID0gZnVuY3Rpb24oaXRlbXMsIHRvVmlzaWJsZSwgb3B0aW9ucykge1xuICAgIHZhciBncmlkID0gdGhpcztcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgaXNJbnN0YW50ID0gb3B0cy5pbnN0YW50ID09PSB0cnVlO1xuICAgIHZhciBjYWxsYmFjayA9IG9wdHMub25GaW5pc2g7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBjb3VudGVyID0gdGFyZ2V0SXRlbXMubGVuZ3RoO1xuICAgIHZhciBzdGFydEV2ZW50ID0gdG9WaXNpYmxlID8gZXZlbnRTaG93U3RhcnQgOiBldmVudEhpZGVTdGFydDtcbiAgICB2YXIgZW5kRXZlbnQgPSB0b1Zpc2libGUgPyBldmVudFNob3dFbmQgOiBldmVudEhpZGVFbmQ7XG4gICAgdmFyIG1ldGhvZCA9IHRvVmlzaWJsZSA/ICdzaG93JyA6ICdoaWRlJztcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgY29tcGxldGVkSXRlbXMgPSBbXTtcbiAgICB2YXIgaGlkZGVuSXRlbXMgPSBbXTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBpdGVtcyBjYWxsIHRoZSBjYWxsYmFjaywgYnV0IGRvbid0IGVtaXQgYW55IGV2ZW50cy5cbiAgICBpZiAoIWNvdW50ZXIpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkgY2FsbGJhY2sodGFyZ2V0SXRlbXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEVtaXQgc2hvd1N0YXJ0L2hpZGVTdGFydCBldmVudC5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKHN0YXJ0RXZlbnQpKSB7XG4gICAgICB0aGlzLl9lbWl0KHN0YXJ0RXZlbnQsIHRhcmdldEl0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBTaG93L2hpZGUgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gdGFyZ2V0SXRlbXNbaV07XG5cbiAgICAgIC8vIElmIGluYWN0aXZlIGl0ZW0gaXMgc2hvd24gb3IgYWN0aXZlIGl0ZW0gaXMgaGlkZGVuIHdlIG5lZWQgdG8gZG9cbiAgICAgIC8vIGxheW91dC5cbiAgICAgIGlmICgodG9WaXNpYmxlICYmICFpdGVtLl9pc0FjdGl2ZSkgfHwgKCF0b1Zpc2libGUgJiYgaXRlbS5faXNBY3RpdmUpKSB7XG4gICAgICAgIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaW5hY3RpdmUgaXRlbSBpcyBzaG93biB3ZSBhbHNvIG5lZWQgdG8gZG8gYSBsaXR0bGUgaGFjayB0byBtYWtlIHRoZVxuICAgICAgLy8gaXRlbSBub3QgYW5pbWF0ZSBpdCdzIG5leHQgcG9zaXRpb25pbmcgKGxheW91dCkuXG4gICAgICBpZiAodG9WaXNpYmxlICYmICFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgICBpdGVtLl9sYXlvdXQuX3NraXBOZXh0QW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYSBoaWRkZW4gaXRlbSBpcyBiZWluZyBzaG93biB3ZSBuZWVkIHRvIHJlZnJlc2ggdGhlIGl0ZW0nc1xuICAgICAgLy8gZGltZW5zaW9ucy5cbiAgICAgIGlmICh0b1Zpc2libGUgJiYgaXRlbS5fdmlzaWJpbGl0eS5faXNIaWRkZW4pIHtcbiAgICAgICAgaGlkZGVuSXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2hvdy9oaWRlIHRoZSBpdGVtLlxuICAgICAgaXRlbS5fdmlzaWJpbGl0eVttZXRob2RdKGlzSW5zdGFudCwgZnVuY3Rpb24oaW50ZXJydXB0ZWQsIGl0ZW0pIHtcbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgaXRlbSdzIGFuaW1hdGlvbiB3YXMgbm90IGludGVycnVwdGVkIGFkZCBpdCB0byB0aGVcbiAgICAgICAgLy8gY29tcGxldGVkSXRlbXMgYXJyYXkuXG4gICAgICAgIGlmICghaW50ZXJydXB0ZWQpIGNvbXBsZXRlZEl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgLy8gSWYgYWxsIGl0ZW1zIGhhdmUgZmluaXNoZWQgdGhlaXIgYW5pbWF0aW9ucyBjYWxsIHRoZSBjYWxsYmFja1xuICAgICAgICAvLyBhbmQgZW1pdCBzaG93RW5kL2hpZGVFbmQgZXZlbnQuXG4gICAgICAgIGlmICgtLWNvdW50ZXIgPCAxKSB7XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSBjYWxsYmFjayhjb21wbGV0ZWRJdGVtcy5zbGljZSgwKSk7XG4gICAgICAgICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhlbmRFdmVudCkpIGdyaWQuX2VtaXQoZW5kRXZlbnQsIGNvbXBsZXRlZEl0ZW1zLnNsaWNlKDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVmcmVzaCBoaWRkZW4gaXRlbXMuXG4gICAgaWYgKGhpZGRlbkl0ZW1zLmxlbmd0aCkgdGhpcy5yZWZyZXNoSXRlbXMoaGlkZGVuSXRlbXMpO1xuXG4gICAgLy8gTGF5b3V0IGlmIG5lZWRlZC5cbiAgICBpZiAobmVlZHNMYXlvdXQgJiYgbGF5b3V0KSB7XG4gICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIGhlbHBlcnNcbiAgICogKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBNZXJnZSBkZWZhdWx0IHNldHRpbmdzIHdpdGggdXNlciBzZXR0aW5ncy4gVGhlIHJldHVybmVkIG9iamVjdCBpcyBhIG5ld1xuICAgKiBvYmplY3Qgd2l0aCBtZXJnZWQgdmFsdWVzLiBUaGUgbWVyZ2luZyBpcyBhIGRlZXAgbWVyZ2UgbWVhbmluZyB0aGF0IGFsbFxuICAgKiBvYmplY3RzIGFuZCBhcnJheXMgd2l0aGluIHRoZSBwcm92aWRlZCBzZXR0aW5ncyBvYmplY3RzIHdpbGwgYmUgYWxzbyBtZXJnZWRcbiAgICogc28gdGhhdCBtb2RpZnlpbmcgdGhlIHZhbHVlcyBvZiB0aGUgc2V0dGluZ3Mgb2JqZWN0IHdpbGwgaGF2ZSBubyBlZmZlY3Qgb25cbiAgICogdGhlIHJldHVybmVkIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRTZXR0aW5nc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW3VzZXJTZXR0aW5nc11cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhIG5ldyBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZVNldHRpbmdzKGRlZmF1bHRTZXR0aW5ncywgdXNlclNldHRpbmdzKSB7XG4gICAgLy8gQ3JlYXRlIGEgZnJlc2ggY29weSBvZiBkZWZhdWx0IHNldHRpbmdzLlxuICAgIHZhciByZXQgPSBtZXJnZU9iamVjdHMoe30sIGRlZmF1bHRTZXR0aW5ncyk7XG5cbiAgICAvLyBNZXJnZSB1c2VyIHNldHRpbmdzIHRvIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAgaWYgKHVzZXJTZXR0aW5ncykge1xuICAgICAgcmV0ID0gbWVyZ2VPYmplY3RzKHJldCwgdXNlclNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdmlzaWJsZS9oaWRkZW4gc3R5bGVzIG1hbnVhbGx5IHNvIHRoYXQgdGhlIHdob2xlIG9iamVjdCBpc1xuICAgIC8vIG92ZXJyaWRkZW4gaW5zdGVhZCBvZiB0aGUgcHJvcHMuXG4gICAgcmV0LnZpc2libGVTdHlsZXMgPSAodXNlclNldHRpbmdzIHx8IDApLnZpc2libGVTdHlsZXMgfHwgKGRlZmF1bHRTZXR0aW5ncyB8fCAwKS52aXNpYmxlU3R5bGVzO1xuICAgIHJldC5oaWRkZW5TdHlsZXMgPSAodXNlclNldHRpbmdzIHx8IDApLmhpZGRlblN0eWxlcyB8fCAoZGVmYXVsdFNldHRpbmdzIHx8IDApLmhpZGRlblN0eWxlcztcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgdHdvIG9iamVjdHMgcmVjdXJzaXZlbHkgKGRlZXAgbWVyZ2UpLiBUaGUgc291cmNlIG9iamVjdCdzIHByb3BlcnRpZXNcbiAgICogYXJlIG1lcmdlZCB0byB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICAgKiAgIC0gVGhlIHRhcmdldCBvYmplY3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VcbiAgICogICAtIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VPYmplY3RzKHRhcmdldCwgc291cmNlKSB7XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBsZW5ndGggPSBzb3VyY2VLZXlzLmxlbmd0aDtcbiAgICB2YXIgaXNTb3VyY2VPYmplY3Q7XG4gICAgdmFyIHByb3BOYW1lO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9wTmFtZSA9IHNvdXJjZUtleXNbaV07XG4gICAgICBpc1NvdXJjZU9iamVjdCA9IGlzUGxhaW5PYmplY3Qoc291cmNlW3Byb3BOYW1lXSk7XG5cbiAgICAgIC8vIElmIHRhcmdldCBhbmQgc291cmNlIHZhbHVlcyBhcmUgYm90aCBvYmplY3RzLCBtZXJnZSB0aGUgb2JqZWN0cyBhbmRcbiAgICAgIC8vIGFzc2lnbiB0aGUgbWVyZ2VkIHZhbHVlIHRvIHRoZSB0YXJnZXQgcHJvcGVydHkuXG4gICAgICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXRbcHJvcE5hbWVdKSAmJiBpc1NvdXJjZU9iamVjdCkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gbWVyZ2VPYmplY3RzKG1lcmdlT2JqZWN0cyh7fSwgdGFyZ2V0W3Byb3BOYW1lXSksIHNvdXJjZVtwcm9wTmFtZV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgc291cmNlJ3MgdmFsdWUgaXMgb2JqZWN0IGFuZCB0YXJnZXQncyBpcyBub3QgbGV0J3MgY2xvbmUgdGhlIG9iamVjdCBhc1xuICAgICAgLy8gdGhlIHRhcmdldCdzIHZhbHVlLlxuICAgICAgaWYgKGlzU291cmNlT2JqZWN0KSB7XG4gICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBtZXJnZU9iamVjdHMoe30sIHNvdXJjZVtwcm9wTmFtZV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgc291cmNlJ3MgdmFsdWUgaXMgYW4gYXJyYXkgbGV0J3MgY2xvbmUgdGhlIGFycmF5IGFzIHRoZSB0YXJnZXQnc1xuICAgICAgLy8gdmFsdWUuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2VbcHJvcE5hbWVdKSkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXS5zbGljZSgwKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluIGFsbCBvdGhlciBjYXNlcyBsZXQncyBqdXN0IGRpcmVjdGx5IGFzc2lnbiB0aGUgc291cmNlJ3MgdmFsdWUgYXMgdGhlXG4gICAgICAvLyB0YXJnZXQncyB2YWx1ZS5cbiAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICByZXR1cm4gR3JpZDtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L211dXJpL2Rpc3QvbXV1cmkuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb29sYmFySGVscGVyIH0gZnJvbSBcIi4vdXRpbHMvaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4sXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgaWYoIXZpc3VhbGl6ZXJzIHx8IHZpc3VhbGl6ZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlZpc3VhbGl6ZXJBcnJheVdyYXBwZXIgd29ya3Mgd2l0aCB2aXN1YWxpemVycyBjb2xsZWN0aW9uIG9ubHkuXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSB2aXN1YWxpemVyc1swXTtcbiAgfVxuXG4gIHByb3RlY3RlZCB2aXN1YWxpemVyQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICBwcml2YXRlIHZpc3VhbGl6ZXI6IFZpc3VhbGl6ZXJCYXNlO1xuXG4gIHByaXZhdGUgc2V0VmlzdWFsaXplcihuYW1lOiBzdHJpbmcpIHtcbiAgICBpZighIXRoaXMudmlzdWFsaXplcikge1xuICAgICAgdGhpcy52aXN1YWxpemVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy52aXN1YWxpemVyID0gdGhpcy52aXN1YWxpemVycy5maWx0ZXIodiA9PiB2Lm5hbWUgPT09IG5hbWUpWzBdO1xuICAgIHRoaXMudmlzdWFsaXplci5yZW5kZXIodGhpcy52aXN1YWxpemVyQ29udGFpbmVyKTtcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xuICAgIHRoaXMudmlzdWFsaXplci51cGRhdGUoZGF0YSk7XG4gIH1cblxuICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMudmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMudmlzdWFsaXplckNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnZpc3VhbGl6ZXIucmVuZGVyKHRoaXMudmlzdWFsaXplckNvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IodG9vbGJhcixcbiAgICAgIHRoaXMudmlzdWFsaXplcnMubWFwKHZpc3VhbGl6ZXIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB2aXN1YWxpemVyLm5hbWUsXG4gICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInZpc3VhbGl6ZXJfXCIgKyB2aXN1YWxpemVyLm5hbWUpXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIChvcHRpb246IGFueSkgPT4gdGhpcy52aXN1YWxpemVyLm5hbWUgPT09IG9wdGlvbi52YWx1ZSxcbiAgICAgIChlOiBhbnkpID0+IHRoaXMuc2V0VmlzdWFsaXplcihlLnRhcmdldC52YWx1ZSlcbiAgICApO1xuICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0V3JhcHBlcik7XG4gICAgc3VwZXIuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXIudHMiLCJleHBvcnQgZW51bSBFbGVtZW50VmlzaWJpbGl0eSB7IFZpc2libGUgPSBcIlZpc2libGVcIiwgSW52aXNpYmxlID0gXCJJbnZpc2libGVcIiwgUHVibGljSW52aXNpYmxlID0gXCJQdWJsaWNJbnZpc2libGVcIiB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWaXN1YWxpemVyUGFuZWxFbGVtZW50IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eTtcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy50cyIsImV4cG9ydCBlbnVtIENvbHVtblZpc2liaWxpdHkgeyBWaXNpYmxlID0gXCJWaXNpYmxlXCIsIEludmlzaWJsZSA9IFwiSW52aXNpYmxlXCIsIFB1YmxpY0ludmlzaWJsZSA9IFwiUHVibGljSW52aXNpYmxlXCIgfVxyXG5leHBvcnQgZW51bSBRdWVzdGlvbkxvY2F0aW9uIHsgQ29sdW1uID0gXCJDb2x1bW5cIiwgUm93ID0gXCJSb3dcIiB9XHJcbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHsgVGV4dCA9IFwiVGV4dFwiLCBGaWxlTGluayA9IFwiRmlsZUxpbmtcIiwgSW1hZ2UgPSBcIkltYWdlXCIgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIGRhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcclxuICAgIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHk7XHJcbiAgICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW5zIHtcclxuLy8gICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj47XHJcbi8vIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RhdGF0YWJsZXMvY29uZmlnLnRzIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGVuZ2xpc2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwiSGlkZVwiLFxuICByZXNldEZpbHRlcjogXCJSZXNldCBGaWx0ZXJcIixcbiAgY2xlYXJCdXR0b246IFwiQ2xlYXJcIixcbiAgYWRkRWxlbWVudDogXCJDaG9vc2UgcXVlc3Rpb24gdG8gc2hvdy4uLlwiXG59O1xuXG4vL1VuY29tbWVudCB0aGVzZSB0d28gbGluZXMgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlLiBZb3Ugc2hvdWxkIHJlcGxhY2UgXCJlblwiIGFuZCBlblN0cmluZ3Mgd2l0aCB5b3VyIGxvY2FsZSAoXCJmclwiLCBcImRlXCIgYW5kIHNvIG9uKSBhbmQgeW91ciB2YXJpYWJsZS5cbi8vbG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuLy9sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiRW5nbGlzaFwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uQm9vbGVhbk1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBJdGVtVmFsdWUgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlUGxvdGx5IH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQm9vbGVhblBsb3RseSBleHRlbmRzIFNlbGVjdEJhc2VQbG90bHkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydFR5cGVzID0gQm9vbGVhblBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYm9vbGVhblF1ZXN0aW9uKCkge1xuICAgIHJldHVybiA8UXVlc3Rpb25Cb29sZWFuTW9kZWw+dGhpcy5xdWVzdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHJ1ZUNvbG9yID0gXCJcIjtcbiAgcHVibGljIHN0YXRpYyBmYWxzZUNvbG9yID0gXCJcIjtcblxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxuICAgIGNoYXJ0Tm9kZTogb2JqZWN0LFxuICAgIHRyYWNlczogQXJyYXk8b2JqZWN0PixcbiAgICBsYXlvdXQ6IG9iamVjdCxcbiAgICBjb25maWc6IG9iamVjdFxuICApIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGJvb2xDb2xvcnMgPSBbXG4gICAgICBCb29sZWFuUGxvdGx5LnRydWVDb2xvciB8fCBjb2xvcnNbMF0sXG4gICAgICBCb29sZWFuUGxvdGx5LmZhbHNlQ29sb3IgfHwgY29sb3JzWzFdXG4gICAgXTtcblxuICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PT0gXCJwaWVcIikge1xuICAgICAgdHJhY2VzLmZvckVhY2goKHRyYWNlOiBhbnkpID0+IHtcbiAgICAgICAgdHJhY2UubWFya2VyLmNvbG9ycyA9IGJvb2xDb2xvcnM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2hhcnRUeXBlID09PSBcImJhclwiKSB7XG4gICAgICB0cmFjZXMuZm9yRWFjaCgodHJhY2U6IGFueSkgPT4ge1xuICAgICAgICB0cmFjZS5tYXJrZXIuY29sb3IgPSBib29sQ29sb3JzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcInBpZVwiLCBcImJhclwiXTtcblxuICBwcm90ZWN0ZWQgZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgcmV0dXJuIG5ldyBJdGVtVmFsdWUodmFsdWVzW2xhYmVscy5pbmRleE9mKGl0ZW1UZXh0KV0sIGl0ZW1UZXh0KTtcbiAgfVxuXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVUcnVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyB0aGlzLmJvb2xlYW5RdWVzdGlvbi52YWx1ZVRydWVcbiAgICAgICAgOiB0cnVlLFxuICAgICAgdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVGYWxzZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVGYWxzZVxuICAgICAgICA6IGZhbHNlXG4gICAgXTtcbiAgfVxuXG4gIGdldExhYmVscygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICB2YXIgbGFiZWxzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICBpZiAodGhpcy5ib29sZWFuUXVlc3Rpb24ubGFiZWxUcnVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxhYmVsc1swXSA9IHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsVHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsRmFsc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGFiZWxzWzFdID0gdGhpcy5ib29sZWFuUXVlc3Rpb24ubGFiZWxGYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldERhdGEoKTogYW55W10ge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgdmFyIHRydWVDb3VudCA9IDA7XG4gICAgdmFyIGZhbHNlQ291bnQgPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAocm93VmFsdWUgPT09IHZhbHVlc1swXSkge1xuICAgICAgICB0cnVlQ291bnQrKztcbiAgICAgIH1cbiAgICAgIGlmIChyb3dWYWx1ZSA9PT0gdmFsdWVzWzFdKSB7XG4gICAgICAgIGZhbHNlQ291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gW1t0cnVlQ291bnQsIGZhbHNlQ291bnRdXTtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJib29sZWFuXCIsIEJvb2xlYW5QbG90bHkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9ib29sZWFuLnRzIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2VQbG90bHkgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhQbG90bHkgZXh0ZW5kcyBTZWxlY3RCYXNlUGxvdGx5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXROb2RlLCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICB2YWx1ZXNTb3VyY2UoKTogYW55W10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBxdWVzdGlvbi5jb2x1bW5zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCk6IGFueVtdIHtcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcXVlc3Rpb24ucm93cy5tYXAoKHJvdzogYW55KSA9PlxuICAgICAgSXRlbVZhbHVlLmdldFRleHRPckh0bWxCeVZhbHVlKHF1ZXN0aW9uLnJvd3MsIHJvdy52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnlbXSB7XG4gICAgY29uc3QgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4TW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgY29uc3QgZGF0YXNldHM6IEFycmF5PGFueT4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT4ge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLnJvd3MubWFwKCh2OiBhbnkpID0+IDApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93RGF0YSA9PiB7XG4gICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSByb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XG4gICAgICAgIHF1ZXN0aW9uLnJvd3MuZm9yRWFjaCgocm93OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICB0aGlzLmdldFZhbHVlcygpLmZvckVhY2goKHZhbDogYW55LCBkc0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvblZhbHVlW3Jvdy52YWx1ZV0gPT0gdmFsKSB7XG4gICAgICAgICAgICAgIGRhdGFzZXRzW2RzSW5kZXhdW2luZGV4XSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YXNldHM7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibWF0cml4XCIsIE1hdHJpeFBsb3RseSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG52YXIgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb29sYmFySGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBHYXVnZVBsb3RseSBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJpdmF0ZSBfcmVzdWx0OiBhbnk7XG4gIHByaXZhdGUgY2hhcnQ6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PjtcblxuICBwdWJsaWMgc3RhdGljIHN0ZXBzQ291bnQgPSA1O1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlVGV4dHNDYWxsYmFjazogKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBtYXhWYWx1ZTogbnVtYmVyLFxuICAgIG1pblZhbHVlOiBudW1iZXIsXG4gICAgc3RlcHNDb3VudDogbnVtYmVyLFxuICAgIHRleHRzOiBzdHJpbmdbXVxuICApID0+IHN0cmluZ1tdO1xuXG5cbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImdhdWdlXCIsIFwiYnVsbGV0XCJdO1xuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogQXJyYXk8c3RyaW5nPjtcbiAgY2hhcnRUeXBlOiBTdHJpbmc7XG4gIGNoYXJ0Tm9kZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBHYXVnZVBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgfVxuXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgaWYoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShkYXRhKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b29sYmFyQ2hhbmdlSGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5jaGFydFR5cGUgIT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IodG9vbGJhcixcbiAgICAgICAgdGhpcy5jaGFydFR5cGVzLm1hcChjaGFydFR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogY2hhcnRUeXBlLFxuICAgICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYXJ0VHlwZV9cIiArIGNoYXJ0VHlwZSlcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgKG9wdGlvbjogYW55KSA9PiB0aGlzLmNoYXJ0VHlwZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgICB0aGlzLnRvb2xiYXJDaGFuZ2VIYW5kbGVyXG4gICAgICApO1xuICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChzZWxlY3RXcmFwcGVyKTtcbiAgICB9XG4gICAgc3VwZXIuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBQbG90bHkucHVyZ2UodGhpcy5jaGFydE5vZGUpO1xuICAgIHRoaXMuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdlbmVyYXRlVGV4dChtYXhWYWx1ZTogbnVtYmVyLCBtaW5WYWx1ZTogbnVtYmVyLCBzdGVwc0NvdW50OiBudW1iZXIpIHtcbiAgICBsZXQgdGV4dHM6IGFueSA9IFtdO1xuXG4gICAgaWYgKHN0ZXBzQ291bnQgPT09IDUpIHtcbiAgICAgIHRleHRzID0gW1xuICAgICAgICBcInZlcnkgaGlnaCAoXCIgKyBtYXhWYWx1ZSArIFwiKVwiLFxuICAgICAgICBcImhpZ2hcIixcbiAgICAgICAgXCJtZWRpdW1cIixcbiAgICAgICAgXCJsb3dcIixcbiAgICAgICAgXCJ2ZXJ5IGxvdyAoXCIgKyBtaW5WYWx1ZSArIFwiKVwiXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0cy5wdXNoKG1heFZhbHVlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHNDb3VudCAtIDI7IGkrKykge1xuICAgICAgICB0ZXh0cy5wdXNoKFwiXCIpO1xuICAgICAgfVxuICAgICAgdGV4dHMucHVzaChtaW5WYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCEhR2F1Z2VQbG90bHkuZ2VuZXJhdGVUZXh0c0NhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gR2F1Z2VQbG90bHkuZ2VuZXJhdGVUZXh0c0NhbGxiYWNrKFxuICAgICAgICB0aGlzLnF1ZXN0aW9uLFxuICAgICAgICBtYXhWYWx1ZSxcbiAgICAgICAgbWluVmFsdWUsXG4gICAgICAgIHN0ZXBzQ291bnQsXG4gICAgICAgIHRleHRzXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0cztcbiAgfVxuXG4gIGdlbmVyYXRlVmFsdWVzKG1heFZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50OyBpKyspIHtcbiAgICAgIHZhbHVlcy5wdXNoKG1heFZhbHVlIC8gc3RlcHNDb3VudCk7XG4gICAgfVxuXG4gICAgdmFsdWVzLnB1c2gobWF4VmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGdlbmVyYXRlQ29sb3JzKG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50OyBpKyspIHtcbiAgICAgIGNvbG9ycy5wdXNoKHBhbGV0dGVbaV0pO1xuICAgIH1cblxuICAgIGNvbG9ycy5wdXNoKFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiKTtcblxuICAgIHJldHVybiBjb2xvcnM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoYXJ0KCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcblxuICAgIGNvbnN0IHJhdGVWYWx1ZXMgPSBxdWVzdGlvbi52aXNpYmxlUmF0ZVZhbHVlcztcbiAgICBjb25zdCBtYXhWYWx1ZSA9IHJhdGVWYWx1ZXNbcmF0ZVZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZTtcbiAgICBjb25zdCBtaW5WYWx1ZSA9IHJhdGVWYWx1ZXNbMF0udmFsdWU7XG5cbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdlbmVyYXRlQ29sb3JzKFxuICAgICAgbWF4VmFsdWUsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIEdhdWdlUGxvdGx5LnN0ZXBzQ291bnRcbiAgICApO1xuXG4gICAgdmFyIGxldmVsID0gdGhpcy5yZXN1bHQ7XG5cbiAgICB2YXIgZGF0YTogYW55ID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcImluZGljYXRvclwiLFxuICAgICAgICBtb2RlOiBcImdhdWdlK251bWJlclwiLFxuICAgICAgICBnYXVnZToge1xuICAgICAgICAgIGF4aXM6IHsgcmFuZ2U6IFttaW5WYWx1ZSwgbWF4VmFsdWVdIH0sXG4gICAgICAgICAgc2hhcGU6IHRoaXMuY2hhcnRUeXBlLFxuICAgICAgICAgIGJnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBiYXI6IHsgY29sb3I6IGNvbG9yc1swXSB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBsZXZlbCxcbiAgICAgICAgdGV4dDogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZG9tYWluOiB7IHg6IFswLCAxXSwgeTogWzAsIDFdIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgdmFyIGxheW91dCA9IHtcbiAgICAgIHdpZHRoOiA2MDAsXG4gICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvclxuICAgIH07XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UsXG4gICAgICBzdGF0aWNQbG90OiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMuY2hhcnQgPSBQbG90bHkubmV3UGxvdCh0aGlzLmNoYXJ0Tm9kZSwgZGF0YSwgbGF5b3V0LCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuY3JlYXRlQ2hhcnQoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGFydE5vZGUpO1xuICB9XG5cbiAgZ2V0IHJlc3VsdCgpIHtcbiAgICBpZiAodGhpcy5fcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvd0RhdGEgPT4ge1xuICAgICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSArcm93RGF0YVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XG4gICAgICAgICAgcXVlc3Rpb25WYWx1ZXMucHVzaChxdWVzdGlvblZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHF1ZXN0aW9uVmFsdWVzICYmIChxdWVzdGlvblZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIHF1ZXN0aW9uVmFsdWVzLmxlbmd0aCkgfHwgMDtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IE1hdGguY2VpbCh0aGlzLl9yZXN1bHQgKiAxMDApIC8gMTAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInJhdGluZ1wiLCBHYXVnZVBsb3RseSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsImV4cG9ydCB2YXIgc3RvcFdvcmRzID0gbmV3IEFycmF5KFxuICBcImFcIixcbiAgXCJhYm91dFwiLFxuICBcImFib3ZlXCIsXG4gIFwiYWNyb3NzXCIsXG4gIFwiYWZ0ZXJcIixcbiAgXCJhZ2FpblwiLFxuICBcImFnYWluc3RcIixcbiAgXCJhbGxcIixcbiAgXCJhbG1vc3RcIixcbiAgXCJhbG9uZVwiLFxuICBcImFsb25nXCIsXG4gIFwiYWxyZWFkeVwiLFxuICBcImFsc29cIixcbiAgXCJhbHRob3VnaFwiLFxuICBcImFsd2F5c1wiLFxuICBcImFtb25nXCIsXG4gIFwiYW5cIixcbiAgXCJhbmRcIixcbiAgXCJhbm90aGVyXCIsXG4gIFwiYW55XCIsXG4gIFwiYW55Ym9keVwiLFxuICBcImFueW9uZVwiLFxuICBcImFueXRoaW5nXCIsXG4gIFwiYW55d2hlcmVcIixcbiAgXCJhcmVcIixcbiAgXCJhcmVhXCIsXG4gIFwiYXJlYXNcIixcbiAgXCJhcm91bmRcIixcbiAgXCJhc1wiLFxuICBcImFza1wiLFxuICBcImFza2VkXCIsXG4gIFwiYXNraW5nXCIsXG4gIFwiYXNrc1wiLFxuICBcImF0XCIsXG4gIFwiYXdheVwiLFxuICBcImJcIixcbiAgXCJiYWNrXCIsXG4gIFwiYmFja2VkXCIsXG4gIFwiYmFja2luZ1wiLFxuICBcImJhY2tzXCIsXG4gIFwiYmVcIixcbiAgXCJiZWNhbWVcIixcbiAgXCJiZWNhdXNlXCIsXG4gIFwiYmVjb21lXCIsXG4gIFwiYmVjb21lc1wiLFxuICBcImJlZW5cIixcbiAgXCJiZWZvcmVcIixcbiAgXCJiZWdhblwiLFxuICBcImJlaGluZFwiLFxuICBcImJlaW5nXCIsXG4gIFwiYmVpbmdzXCIsXG4gIFwiYmVzdFwiLFxuICBcImJldHRlclwiLFxuICBcImJldHdlZW5cIixcbiAgXCJiaWdcIixcbiAgXCJib3RoXCIsXG4gIFwiYnV0XCIsXG4gIFwiYnlcIixcbiAgXCJjXCIsXG4gIFwiY2FtZVwiLFxuICBcImNhblwiLFxuICBcImNhbm5vdFwiLFxuICBcImNhc2VcIixcbiAgXCJjYXNlc1wiLFxuICBcImNlcnRhaW5cIixcbiAgXCJjZXJ0YWlubHlcIixcbiAgXCJjbGVhclwiLFxuICBcImNsZWFybHlcIixcbiAgXCJjb21lXCIsXG4gIFwiY291bGRcIixcbiAgXCJkXCIsXG4gIFwiZGlkXCIsXG4gIFwiZGlmZmVyXCIsXG4gIFwiZGlmZmVyZW50XCIsXG4gIFwiZGlmZmVyZW50bHlcIixcbiAgXCJkb1wiLFxuICBcImRvZXNcIixcbiAgXCJkb25lXCIsXG4gIFwiZG93blwiLFxuICBcImRvd25cIixcbiAgXCJkb3duZWRcIixcbiAgXCJkb3duaW5nXCIsXG4gIFwiZG93bnNcIixcbiAgXCJkdXJpbmdcIixcbiAgXCJlXCIsXG4gIFwiZWFjaFwiLFxuICBcImVhcmx5XCIsXG4gIFwiZWl0aGVyXCIsXG4gIFwiZW5kXCIsXG4gIFwiZW5kZWRcIixcbiAgXCJlbmRpbmdcIixcbiAgXCJlbmRzXCIsXG4gIFwiZW5vdWdoXCIsXG4gIFwiZXZlblwiLFxuICBcImV2ZW5seVwiLFxuICBcImV2ZXJcIixcbiAgXCJldmVyeVwiLFxuICBcImV2ZXJ5Ym9keVwiLFxuICBcImV2ZXJ5b25lXCIsXG4gIFwiZXZlcnl0aGluZ1wiLFxuICBcImV2ZXJ5d2hlcmVcIixcbiAgXCJmXCIsXG4gIFwiZmFjZVwiLFxuICBcImZhY2VzXCIsXG4gIFwiZmFjdFwiLFxuICBcImZhY3RzXCIsXG4gIFwiZmFyXCIsXG4gIFwiZmVsdFwiLFxuICBcImZld1wiLFxuICBcImZpbmRcIixcbiAgXCJmaW5kc1wiLFxuICBcImZpcnN0XCIsXG4gIFwiZm9yXCIsXG4gIFwiZm91clwiLFxuICBcImZyb21cIixcbiAgXCJmdWxsXCIsXG4gIFwiZnVsbHlcIixcbiAgXCJmdXJ0aGVyXCIsXG4gIFwiZnVydGhlcmVkXCIsXG4gIFwiZnVydGhlcmluZ1wiLFxuICBcImZ1cnRoZXJzXCIsXG4gIFwiZ1wiLFxuICBcImdhdmVcIixcbiAgXCJnZW5lcmFsXCIsXG4gIFwiZ2VuZXJhbGx5XCIsXG4gIFwiZ2V0XCIsXG4gIFwiZ2V0c1wiLFxuICBcImdpdmVcIixcbiAgXCJnaXZlblwiLFxuICBcImdpdmVzXCIsXG4gIFwiZ29cIixcbiAgXCJnb2luZ1wiLFxuICBcImdvb2RcIixcbiAgXCJnb29kc1wiLFxuICBcImdvdFwiLFxuICBcImdyZWF0XCIsXG4gIFwiZ3JlYXRlclwiLFxuICBcImdyZWF0ZXN0XCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJncm91cGVkXCIsXG4gIFwiZ3JvdXBpbmdcIixcbiAgXCJncm91cHNcIixcbiAgXCJoXCIsXG4gIFwiaGFkXCIsXG4gIFwiaGFzXCIsXG4gIFwiaGF2ZVwiLFxuICBcImhhdmluZ1wiLFxuICBcImhlXCIsXG4gIFwiaGVyXCIsXG4gIFwiaGVyZVwiLFxuICBcImhlcnNlbGZcIixcbiAgXCJoaWdoXCIsXG4gIFwiaGlnaFwiLFxuICBcImhpZ2hcIixcbiAgXCJoaWdoZXJcIixcbiAgXCJoaWdoZXN0XCIsXG4gIFwiaGltXCIsXG4gIFwiaGltc2VsZlwiLFxuICBcImhpc1wiLFxuICBcImhvd1wiLFxuICBcImhvd2V2ZXJcIixcbiAgXCJpXCIsXG4gIFwiaWZcIixcbiAgXCJpbXBvcnRhbnRcIixcbiAgXCJpblwiLFxuICBcImludGVyZXN0XCIsXG4gIFwiaW50ZXJlc3RlZFwiLFxuICBcImludGVyZXN0aW5nXCIsXG4gIFwiaW50ZXJlc3RzXCIsXG4gIFwiaW50b1wiLFxuICBcImlzXCIsXG4gIFwiaXRcIixcbiAgXCJpdHNcIixcbiAgXCJpdHNlbGZcIixcbiAgXCJqXCIsXG4gIFwianVzdFwiLFxuICBcImtcIixcbiAgXCJrZWVwXCIsXG4gIFwia2VlcHNcIixcbiAgXCJraW5kXCIsXG4gIFwia25ld1wiLFxuICBcImtub3dcIixcbiAgXCJrbm93blwiLFxuICBcImtub3dzXCIsXG4gIFwibFwiLFxuICBcImxhcmdlXCIsXG4gIFwibGFyZ2VseVwiLFxuICBcImxhc3RcIixcbiAgXCJsYXRlclwiLFxuICBcImxhdGVzdFwiLFxuICBcImxlYXN0XCIsXG4gIFwibGVzc1wiLFxuICBcImxldFwiLFxuICBcImxldHNcIixcbiAgXCJsaWtlXCIsXG4gIFwibGlrZWx5XCIsXG4gIFwibG9uZ1wiLFxuICBcImxvbmdlclwiLFxuICBcImxvbmdlc3RcIixcbiAgXCJtXCIsXG4gIFwibWFkZVwiLFxuICBcIm1ha2VcIixcbiAgXCJtYWtpbmdcIixcbiAgXCJtYW5cIixcbiAgXCJtYW55XCIsXG4gIFwibWF5XCIsXG4gIFwibWVcIixcbiAgXCJtZW1iZXJcIixcbiAgXCJtZW1iZXJzXCIsXG4gIFwibWVuXCIsXG4gIFwibWlnaHRcIixcbiAgXCJtb3JlXCIsXG4gIFwibW9zdFwiLFxuICBcIm1vc3RseVwiLFxuICBcIm1yXCIsXG4gIFwibXJzXCIsXG4gIFwibXVjaFwiLFxuICBcIm11c3RcIixcbiAgXCJteVwiLFxuICBcIm15c2VsZlwiLFxuICBcIm5cIixcbiAgXCJuZWNlc3NhcnlcIixcbiAgXCJuZWVkXCIsXG4gIFwibmVlZGVkXCIsXG4gIFwibmVlZGluZ1wiLFxuICBcIm5lZWRzXCIsXG4gIFwibmV2ZXJcIixcbiAgXCJuZXdcIixcbiAgXCJuZXdcIixcbiAgXCJuZXdlclwiLFxuICBcIm5ld2VzdFwiLFxuICBcIm5leHRcIixcbiAgXCJub1wiLFxuICBcIm5vYm9keVwiLFxuICBcIm5vblwiLFxuICBcIm5vb25lXCIsXG4gIFwibm90XCIsXG4gIFwibm90aGluZ1wiLFxuICBcIm5vd1wiLFxuICBcIm5vd2hlcmVcIixcbiAgXCJudW1iZXJcIixcbiAgXCJudW1iZXJzXCIsXG4gIFwib1wiLFxuICBcIm9mXCIsXG4gIFwib2ZmXCIsXG4gIFwib2Z0ZW5cIixcbiAgXCJvbGRcIixcbiAgXCJvbGRlclwiLFxuICBcIm9sZGVzdFwiLFxuICBcIm9uXCIsXG4gIFwib25jZVwiLFxuICBcIm9uZVwiLFxuICBcIm9ubHlcIixcbiAgXCJvcGVuXCIsXG4gIFwib3BlbmVkXCIsXG4gIFwib3BlbmluZ1wiLFxuICBcIm9wZW5zXCIsXG4gIFwib3JcIixcbiAgXCJvcmRlclwiLFxuICBcIm9yZGVyZWRcIixcbiAgXCJvcmRlcmluZ1wiLFxuICBcIm9yZGVyc1wiLFxuICBcIm90aGVyXCIsXG4gIFwib3RoZXJzXCIsXG4gIFwib3VyXCIsXG4gIFwib3V0XCIsXG4gIFwib3ZlclwiLFxuICBcInBcIixcbiAgXCJwYXJ0XCIsXG4gIFwicGFydGVkXCIsXG4gIFwicGFydGluZ1wiLFxuICBcInBhcnRzXCIsXG4gIFwicGVyXCIsXG4gIFwicGVyaGFwc1wiLFxuICBcInBsYWNlXCIsXG4gIFwicGxhY2VzXCIsXG4gIFwicG9pbnRcIixcbiAgXCJwb2ludGVkXCIsXG4gIFwicG9pbnRpbmdcIixcbiAgXCJwb2ludHNcIixcbiAgXCJwb3NzaWJsZVwiLFxuICBcInByZXNlbnRcIixcbiAgXCJwcmVzZW50ZWRcIixcbiAgXCJwcmVzZW50aW5nXCIsXG4gIFwicHJlc2VudHNcIixcbiAgXCJwcm9ibGVtXCIsXG4gIFwicHJvYmxlbXNcIixcbiAgXCJwdXRcIixcbiAgXCJwdXRzXCIsXG4gIFwicVwiLFxuICBcInF1aXRlXCIsXG4gIFwiclwiLFxuICBcInJhdGhlclwiLFxuICBcInJlYWxseVwiLFxuICBcInJpZ2h0XCIsXG4gIFwicmlnaHRcIixcbiAgXCJyb29tXCIsXG4gIFwicm9vbXNcIixcbiAgXCJzXCIsXG4gIFwic2FpZFwiLFxuICBcInNhbWVcIixcbiAgXCJzYXdcIixcbiAgXCJzYXlcIixcbiAgXCJzYXlzXCIsXG4gIFwic2Vjb25kXCIsXG4gIFwic2Vjb25kc1wiLFxuICBcInNlZVwiLFxuICBcInNlZW1cIixcbiAgXCJzZWVtZWRcIixcbiAgXCJzZWVtaW5nXCIsXG4gIFwic2VlbXNcIixcbiAgXCJzZWVzXCIsXG4gIFwic2V2ZXJhbFwiLFxuICBcInNoYWxsXCIsXG4gIFwic2hlXCIsXG4gIFwic2hvdWxkXCIsXG4gIFwic2hvd1wiLFxuICBcInNob3dlZFwiLFxuICBcInNob3dpbmdcIixcbiAgXCJzaG93c1wiLFxuICBcInNpZGVcIixcbiAgXCJzaWRlc1wiLFxuICBcInNpbmNlXCIsXG4gIFwic21hbGxcIixcbiAgXCJzbWFsbGVyXCIsXG4gIFwic21hbGxlc3RcIixcbiAgXCJzb1wiLFxuICBcInNvbWVcIixcbiAgXCJzb21lYm9keVwiLFxuICBcInNvbWVvbmVcIixcbiAgXCJzb21ldGhpbmdcIixcbiAgXCJzb21ld2hlcmVcIixcbiAgXCJzdGF0ZVwiLFxuICBcInN0YXRlc1wiLFxuICBcInN0aWxsXCIsXG4gIFwic3RpbGxcIixcbiAgXCJzdWNoXCIsXG4gIFwic3VyZVwiLFxuICBcInRcIixcbiAgXCJ0YWtlXCIsXG4gIFwidGFrZW5cIixcbiAgXCJ0aGFuXCIsXG4gIFwidGhhdFwiLFxuICBcInRoZVwiLFxuICBcInRoZWlyXCIsXG4gIFwidGhlbVwiLFxuICBcInRoZW5cIixcbiAgXCJ0aGVyZVwiLFxuICBcInRoZXJlZm9yZVwiLFxuICBcInRoZXNlXCIsXG4gIFwidGhleVwiLFxuICBcInRoaW5nXCIsXG4gIFwidGhpbmdzXCIsXG4gIFwidGhpbmtcIixcbiAgXCJ0aGlua3NcIixcbiAgXCJ0aGlzXCIsXG4gIFwidGhvc2VcIixcbiAgXCJ0aG91Z2hcIixcbiAgXCJ0aG91Z2h0XCIsXG4gIFwidGhvdWdodHNcIixcbiAgXCJ0aHJlZVwiLFxuICBcInRocm91Z2hcIixcbiAgXCJ0aHVzXCIsXG4gIFwidG9cIixcbiAgXCJ0b2RheVwiLFxuICBcInRvZ2V0aGVyXCIsXG4gIFwidG9vXCIsXG4gIFwidG9va1wiLFxuICBcInRvd2FyZFwiLFxuICBcInR1cm5cIixcbiAgXCJ0dXJuZWRcIixcbiAgXCJ0dXJuaW5nXCIsXG4gIFwidHVybnNcIixcbiAgXCJ0d29cIixcbiAgXCJ1XCIsXG4gIFwidW5kZXJcIixcbiAgXCJ1bnRpbFwiLFxuICBcInVwXCIsXG4gIFwidXBvblwiLFxuICBcInVzXCIsXG4gIFwidXNlXCIsXG4gIFwidXNlZFwiLFxuICBcInVzZXNcIixcbiAgXCJ2XCIsXG4gIFwidmVyeVwiLFxuICBcIndcIixcbiAgXCJ3YW50XCIsXG4gIFwid2FudGVkXCIsXG4gIFwid2FudGluZ1wiLFxuICBcIndhbnRzXCIsXG4gIFwid2FzXCIsXG4gIFwid2F5XCIsXG4gIFwid2F5c1wiLFxuICBcIndlXCIsXG4gIFwid2VsbFwiLFxuICBcIndlbGxzXCIsXG4gIFwid2VudFwiLFxuICBcIndlcmVcIixcbiAgXCJ3aGF0XCIsXG4gIFwid2hlblwiLFxuICBcIndoZXJlXCIsXG4gIFwid2hldGhlclwiLFxuICBcIndoaWNoXCIsXG4gIFwid2hpbGVcIixcbiAgXCJ3aG9cIixcbiAgXCJ3aG9sZVwiLFxuICBcIndob3NlXCIsXG4gIFwid2h5XCIsXG4gIFwid2lsbFwiLFxuICBcIndpdGhcIixcbiAgXCJ3aXRoaW5cIixcbiAgXCJ3aXRob3V0XCIsXG4gIFwid29ya1wiLFxuICBcIndvcmtlZFwiLFxuICBcIndvcmtpbmdcIixcbiAgXCJ3b3Jrc1wiLFxuICBcIndvdWxkXCIsXG4gIFwieFwiLFxuICBcInlcIixcbiAgXCJ5ZWFyXCIsXG4gIFwieWVhcnNcIixcbiAgXCJ5ZXRcIixcbiAgXCJ5b3VcIixcbiAgXCJ5b3VuZ1wiLFxuICBcInlvdW5nZXJcIixcbiAgXCJ5b3VuZ2VzdFwiLFxuICBcInlvdXJcIixcbiAgXCJ5b3Vyc1wiLFxuICBcInpcIlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JkY2xvdWQvc3RvcHdvcmRzL2VuZ2xpc2gudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwid29yZGNsb3VkXCIsXCJjb21tb25qc1wiOlwid29yZGNsb3VkXCIsXCJhbWRcIjpcIndvcmRjbG91ZFwifVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL2RhdGF0YWJsZXMvZGF0YXRhYmxlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGxvdGx5L2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi93b3JkY2xvdWQvd29yZGNsb3VkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93b3JkY2xvdWQvc3RvcHdvcmRzL2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90ZXh0XCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9