/*!
 * surveyjs - SurveyJS Analytics library v1.1.22
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
        if (this.chartTypes.length > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYzZhZmNlYmIyMjU2ZjQ0ZjVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6ZXJCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWNvcmVcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXktY29yZVwiLFwiYW1kXCI6XCJzdXJ2ZXktY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bsb3RseS9zZWxlY3RCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxpemF0aW9uUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBsb3RseVwiLFwiY29tbW9uanMyXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiY29tbW9uanNcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJhbWRcIjpcInBsb3RseS5qcy1kaXN0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bsb3RseS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmRjbG91ZC93b3JkY2xvdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGF0YWJsZXMvZGF0YXRhYmxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxpemVyQmFzZS5zY3NzIiwid2VicGFjazovLy8uL34vbXV1cmkvZGlzdC9tdXVyaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXRhYmxlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvYm9vbGVhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9lbmdsaXNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwid29yZGNsb3VkXCIsXCJjb21tb25qc1wiOlwid29yZGNsb3VkXCIsXCJhbWRcIjpcIndvcmRjbG91ZFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDL0RrRDtBQVNsRDtJQUFBO0lBb0JBLENBQUM7SUFsQlEsdUNBQWtCLEdBQXpCLFVBQ0UsUUFBZ0IsRUFDaEIsV0FBa0M7UUFFbEMsSUFBSSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNqQixvQkFBb0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDO1NBQzFEO1FBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ00sbUNBQWMsR0FBckIsVUFBc0IsUUFBZ0I7UUFDcEMsSUFBSSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTyxDQUFDLHVFQUFjLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFsQk0sZ0NBQVcsR0FBc0QsRUFBRSxDQUFDO0lBbUI3RSwyQkFBQztDQUFBO0FBcEJnQzs7Ozs7Ozs7Ozs7O0FDVjFCLElBQUksUUFBUSxHQUNYLE1BQU8sQ0FBQyxRQUFRLENBQUM7SUFDdkIsVUFBUyxNQUFXO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNiLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUVFLFNBQVUsU0FBUyxDQUFDLFNBQWMsRUFBRSxTQUFjO0lBQ3RELEtBQUssSUFBSSxDQUFDLElBQUksU0FBUztRQUNyQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxTQUFTLEVBQUU7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsU0FBUyxDQUFDLFNBQVM7UUFDakIsU0FBUyxLQUFLLElBQUk7WUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBVSxFQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFFTSxJQUFJLE1BQU0sR0FBRyxVQUFTLE1BQVcsRUFBRSxDQUFNO0lBQzlDLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUNyQixLQUFLLElBQUksWUFBWSxJQUFJLE1BQU07UUFDN0IsSUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztZQUMxRCxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFFM0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxJQUNFLE1BQU0sSUFBSSxJQUFJO1FBQ2QsT0FBYSxNQUFPLENBQUMsdUJBQXVCLENBQUMsS0FBSyxVQUFVO1FBRTVELEtBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNQLGVBQWUsR0FBUyxNQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFDbEUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQzFCLENBQUMsRUFBRTtZQUVILElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUlLLElBQUksVUFBVSxHQUFHLFVBQ3RCLFVBQWUsRUFDZixNQUFXLEVBQ1gsR0FBUSxFQUNSLElBQVM7SUFFVCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUN0QixDQUFDLEdBQ0MsQ0FBQyxHQUFHLENBQUM7UUFDSCxDQUFDLENBQUMsTUFBTTtRQUNSLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSTtZQUNmLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxDQUFDO0lBQ0osSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7UUFDdkUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBRXBELEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNuRTZCO0FBRS9CO0lBSUUsd0JBQ1ksYUFBMEIsRUFDN0IsUUFBa0IsRUFDZixJQUFxQyxFQUNyQyxPQUFnQjtRQUhoQixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBaUM7UUFDckMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQU5yQix3QkFBbUIsR0FBaUUsRUFBRSxDQUFDO1FBaUU5RixvQkFBZSxHQUFHLFNBQVMsQ0FBQztJQTFEekIsQ0FBQztJQUVHLDRDQUFtQixHQUExQixVQUEyQixJQUFZLEVBQUUsT0FBaUQ7UUFDeEYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0JBQVcsZ0NBQUk7YUFBZjtZQUNFLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsK0JBQU0sR0FBTixVQUFPLElBQXFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFJRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFUyxzQ0FBYSxHQUF2QixVQUF3QixTQUF5QjtRQUMvQyxTQUFTLENBQUMsU0FBUyxHQUFHLDBDQUEwQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sYUFBMkI7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV6RCxJQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztRQUV0RCxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRVMsMkNBQWtCLEdBQTVCLFVBQTZCLE9BQXVCO1FBQXBELGlCQUVDO1FBREMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHlCQUFlLElBQUksWUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7SUFDN0gsQ0FBQztJQUVTLHNDQUFhLEdBQXZCLFVBQXdCLFNBQXlCO1FBQy9DLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBa0JELGtDQUFTLEdBQVQsVUFBVSxLQUFVO1FBQVYsa0NBQVU7UUFDbEIsSUFBTSxNQUFNLEdBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1lBQzFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDcEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZO1lBQzdCLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRTVCLElBQUksVUFBVSxHQUFRLEVBQUUsQ0FBQztRQUV6QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzFDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQTVCTSwyQkFBWSxHQUFhLEVBQUUsQ0FBQztJQUNwQixxQkFBTSxHQUFHO1FBQ3RCLFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7S0FDVixDQUFDO0lBaUJKLHFCQUFDO0NBQUE7QUFsRzBCOzs7Ozs7Ozs7OztBQ0o2QjtBQUVqRCxJQUFJLFlBQVksR0FBRztJQUN4QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsT0FBTyxFQUEwQixFQUFFO0lBQ25DLFdBQVcsRUFBMEIsRUFBRTtJQUN2QyxnQkFBZ0IsRUFBYyxFQUFFO0lBQ2hDLElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixLQUFLLElBQUksQ0FBQyxrQkFBa0I7WUFDeEQsQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxHQUFXO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxHQUFXO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7SUFDaEMsQ0FBQztJQUNELFNBQVMsRUFBRSxVQUFTLE9BQWU7UUFDakMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEUsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUcsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUM7U0FDakQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNyRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7YUFBTTtZQUNMLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO1NBQ0Y7UUFDRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFDO0FBRUssSUFBSSxhQUFhLEdBQUcsNkVBQWMsQ0FBQztBQUNwQyxZQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLDZFQUFjLENBQUM7QUFDN0MsWUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7Ozs7Ozs7QUNwRGxELCtDOzs7Ozs7O0FDQUE7QUFBQTtJQUFBO0lBeUJBLENBQUM7SUF4QmlCLDRCQUFjLEdBQTVCLFVBQTZCLE9BQXVCLEVBQUUsT0FBNkMsRUFBRSxVQUE4RCxFQUFFLE1BQXdCO1FBQ3pMLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsYUFBYSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDMUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtZQUNsQixJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELGFBQWEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNuQyxhQUFhLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDakMsYUFBYSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUNhLDBCQUFZLEdBQTFCLFVBQTJCLE9BQXVCLEVBQUUsTUFBd0IsRUFBRSxJQUFTLEVBQUUsUUFBYTtRQUF4QixnQ0FBUztRQUFFLHdDQUFhO1FBQ2xHLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsR0FBRyxRQUFRLENBQUM7UUFDckQsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2QjhEO0FBQ3BCO0FBRXJDLFNBQVUsYUFBYTtJQUMzQixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUN0QyxDQUFDO0FBRUQsSUFBSSxNQUFXLENBQUM7QUFDaEIsSUFBSSxhQUFhLEVBQUUsRUFBRTtJQUNuQixNQUFNLEdBQVEsbUJBQU8sQ0FBQyxFQUFnQixDQUFDLENBQUM7Q0FDekM7QUFFRDtJQUFzQyxtRkFBVTtJQUM5QywwQkFDWSxhQUEwQixFQUNwQyxRQUFrQixFQUNsQixJQUFxQyxFQUNyQyxPQUFnQjtRQUpsQixZQU1FLGtCQUFNLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUc5QztRQVJXLG1CQUFhLEdBQWIsYUFBYSxDQUFhO1FBVzlCLGdCQUFVLEdBQW9CLFNBQVMsQ0FBQztRQUN4QyxZQUFNLEdBQW1CLFNBQVMsQ0FBQztRQU56QyxLQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUN6QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQ3RDLENBQUM7SUFPRCxpQ0FBTSxHQUFOLFVBQU8sSUFBcUM7UUFDMUMsaUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRVMsZ0RBQXFCLEdBQS9CLFVBQWdDLFFBQWdCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNqQyxVQUFDLE1BQWlCLElBQUssYUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQXhCLENBQXdCLENBQ2hELENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsZ0RBQXFCLEdBQS9CLFVBQ0UsU0FBaUIsRUFDakIsTUFBcUIsRUFDckIsTUFBYyxFQUNkLE1BQWMsSUFDYixDQUFDO0lBRUkseUNBQWMsR0FBdEIsVUFDRSxTQUFzQixFQUN0QixTQUFpQjtRQUZuQixpQkE0R0M7UUF4R0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUN2QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEMsSUFBTSxXQUFXLEdBQVE7WUFDdkIsSUFBSSxFQUFFLFNBQVM7WUFDZixDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFDO2dCQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7b0JBQ2pCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUNuQztnQkFDRCxPQUFPLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQztZQUNGLElBQUksRUFBRSxNQUFNO1lBQ1osV0FBVyxFQUFFLEdBQUc7WUFDaEIsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYLENBQUM7UUFFRixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDdEIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLElBQUksRUFBRSxFQUFFO2FBQ1QsQ0FBQztTQUNIO1FBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztZQUN0QixJQUFJLEtBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO2dCQUM1QixNQUFNLENBQUMsSUFBSSxDQUNULE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRTtvQkFDN0IsTUFBTSxFQUFFLE9BQU87b0JBQ2YsTUFBTSxFQUFFLE1BQU07aUJBQ2YsQ0FBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQU0sTUFBTSxHQUNWLFNBQVMsS0FBSyxLQUFLO1lBQ2pCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUU7Z0JBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxHQUFHO2dCQUMxQixDQUFDLENBQUMsR0FBRztZQUNQLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV2RCxJQUFNLE1BQU0sR0FBUTtZQUNsQixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLHNCQUFzQjtnQkFDOUIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0QsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUU7Z0JBQ04sQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLEVBQUU7YUFDTjtZQUNELFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRTtnQkFDTCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFNBQVMsRUFBRSxhQUFhO2FBQ3pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ2xDLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUNwQyxDQUFDO1FBRUYsSUFBTSxNQUFNLEdBQUc7WUFDYixXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBRUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTlELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFekQsU0FBVSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxVQUFDLElBQVM7WUFDL0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUNyRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDckMsSUFBTSxJQUFJLEdBQWMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3RCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksR0FBRztZQUNqQixPQUFhLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBNUQsQ0FBNEQsQ0FBQztRQUN6RCxTQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFO1lBQ3JDLElBQU0sU0FBUyxHQUFHLFlBQVksRUFBRSxDQUFDO1lBQ2pDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBQ0csU0FBVSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZDLElBQU0sU0FBUyxHQUFHLFlBQVksRUFBRSxDQUFDO1lBQ2pDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBMUlhLHNCQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBMklsRCx1QkFBQztDQUFBLENBMUpxQywrREFBVSxHQTBKL0M7QUExSjRCO0FBNEo3QixtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN0RSxtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN4RSxtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN0RSxtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLWDtBQUVrQjtBQUNQO0FBQ3pFLElBQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsRUFBTyxDQUFDLENBQUM7QUFDSTtBQUNPO0FBQ0k7QUFDTztBQUNpQjtBQUV0RSxJQUFNLHdCQUF3QixHQUFHLGNBQWMsQ0FBQztBQUVoRDs7R0FFRztBQUNIO0lBT0UsNEJBQ1ksYUFBMEIsRUFDMUIsU0FBcUIsRUFDckIsSUFBcUMsRUFDckMsT0FBZ0IsRUFDbEIsU0FBOEMsRUFDOUMsZUFBdUI7UUFEdkIsMENBQThDO1FBQzlDLHlEQUF1QjtRQUxyQixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQWlDO1FBQ3JDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBcUM7UUFDOUMsb0JBQWUsR0FBZixlQUFlLENBQVE7UUFaekIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBbUIsU0FBUyxDQUFDO1FBRXZDLGlCQUFZLEdBQTZCLEVBQUUsQ0FBQztRQUM1QyxnQkFBVyxHQUEwQixFQUFFLENBQUM7UUFtRGxEOztXQUVHO1FBQ0ksNkJBQXdCLEdBQUcsSUFBSSxrREFBSyxFQUEwRCxDQUFDO1FBNUNwRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFHRCxzQkFBWSw0Q0FBWTthQUF4QjtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFELENBQUM7OztPQUFBO0lBRVMsMENBQWEsR0FBdkIsVUFBd0IsU0FBZ0I7UUFDdEMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQVE7WUFDbkMsT0FBTztnQkFDTCxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7Z0JBQ25CLFdBQVcsRUFBRSxRQUFRLENBQUMsS0FBSztnQkFDM0IsVUFBVSxFQUFFLGtFQUFpQixDQUFDLE9BQU87Z0JBQ3JDLElBQUksRUFBRSxTQUFTO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxzQ0FBUyxHQUFoQixVQUFpQixVQUE2QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksVUFBVSxLQUFLLGtFQUFpQixDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksVUFBVSxLQUFLLGtFQUFpQixDQUFDLE9BQU8sQ0FBQztJQUNqSixDQUFDO0lBRUQsc0JBQWMsK0NBQWU7YUFBN0I7WUFBQSxpQkFFQztZQURDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBRSxJQUFJLFlBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7UUFDcEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyw4Q0FBYzthQUE1QjtZQUFBLGlCQUVDO1lBREMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFFLElBQUksUUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7OztPQUFBO0lBRVMsdUNBQVUsR0FBcEIsVUFBcUIsSUFBWTtRQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQUUsSUFBSSxTQUFFLENBQUMsSUFBSSxLQUFLLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFPRCxtREFBc0IsR0FBdEI7UUFDRSxJQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRTtZQUN6QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSSw4Q0FBaUIsR0FBeEIsVUFBeUIsVUFBMEI7UUFDakQsSUFBSSxVQUFVLFlBQVksK0RBQVUsRUFBRTtZQUNwQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7U0FDM0M7UUFDRCxVQUFVLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNoQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNkNBQWdCLEdBQXZCLFVBQXdCLE9BQWdDO1FBQXhELGlCQXNGQztRQXJGQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxFQUF2QixDQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhELFlBQVksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUU3QyxlQUFlLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO1FBQ3JELGVBQWUsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLEdBQUcsV0FBVyxDQUFDO1FBQ25FLFlBQVksQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO1FBRTlELGVBQWUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9DLGVBQWUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0MsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUN0QyxpQkFBaUIsRUFDakIsUUFBUSxFQUNSLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7UUFFRixVQUFVLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxPQUF1QjtZQUN2RSxPQUFPLG1FQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDekMsVUFBVSxDQUFDO29CQUNULE9BQU8sQ0FBQyxVQUFVLEdBQUcsa0VBQWlCLENBQUMsU0FBUyxDQUFDO29CQUNqRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztvQkFDNUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQy9DLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNoQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDVCxDQUFDLEVBQUUsMEVBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksVUFBVSxZQUFZLCtEQUFVLEVBQUU7WUFDcEMsSUFBSSxVQUFVLEdBQUc7Z0JBQ2YsSUFBSSxFQUFlLFNBQVM7Z0JBQzVCLE9BQU8sRUFBa0IsU0FBUztnQkFDbEMsTUFBTSxFQUFFLFVBQVMsU0FBYztvQkFDN0IsSUFBRyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO3dCQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7cUJBQzFEO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztxQkFDMUI7Z0JBQ0gsQ0FBQzthQUNGO1lBRUQsVUFBVSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLFVBQUMsT0FBdUI7Z0JBQzNFLFVBQVUsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7Z0JBRXRELFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakQsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLENBQUM7Z0JBQ3hELFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFaEQsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsV0FBVyxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztnQkFDOUMsV0FBVyxDQUFDLFNBQVMsR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDOUQsV0FBVyxDQUFDLE9BQU8sR0FBRztvQkFDcEIsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDO2dCQUNGLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFeEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXhDLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUVILFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxVQUM5QixhQUFrQixFQUNsQixZQUFvQjtnQkFFcEIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQ2hFLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUM7U0FDSDtRQUVELFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixVQUFVLENBQUMsUUFBUSxHQUFHLGNBQU0sWUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsQyxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQ0FBTSxHQUFiO1FBQUEsaUJBa0NDO1FBakNDLElBQUksWUFBWSxHQUFRLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQU0sbUJBQVksRUFBWixDQUFZLENBQUM7UUFFMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUV6QyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztZQUNsQyxJQUFJLGVBQWUsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRCxXQUFXLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1lBQzVDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEQsSUFBSSxXQUFXLEdBQUcsVUFBQyxJQUFTO1lBQzFCLElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFDLEtBQUssRUFBRSxlQUFlO1lBQ3RCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFUywrQ0FBa0IsR0FBNUIsVUFBNkIsT0FBdUI7UUFBcEQsaUJBd0NDO1FBdkNDLElBQU0saUJBQWlCLEdBQUcsbUVBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQzVELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLG9CQUFVO2dCQUNqQyxJQUFJLFVBQVUsWUFBWSwrREFBVSxFQUFFO29CQUNwQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNwQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLDBFQUFZLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZDLElBQUksa0JBQWtCLEdBQWdCLFNBQVMsQ0FBQztRQUNoRCxJQUFNLHlCQUF5QixHQUFHLFVBQUMsS0FBeUIsRUFBRSxDQUFNO1lBQ2xFLElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7WUFDM0MsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDN0IsSUFBTSxhQUFhLEdBQUcsbUVBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUN4RCxDQUFNLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsMEVBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsaUJBQU87b0JBQzVHLE9BQU87d0JBQ0wsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJO3dCQUNuQixJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVc7cUJBQzFCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBQyxNQUFXLElBQUssWUFBSyxFQUFMLENBQUssRUFDdEIsVUFBQyxDQUFNO29CQUNMLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxrRUFBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQy9DLElBQU0sZUFBZSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkQsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQy9DLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztvQkFDekMsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQ2hDLENBQUMsQ0FDRixDQUFDO2dCQUNGLGtCQUFrQixJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEgsa0JBQWtCLEdBQUcsYUFBYSxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLGtCQUFrQixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDOUQsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQztRQUNELHlCQUF5QixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0NBQU8sR0FBZDtRQUNFLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwRSxJQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDakIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsb0JBQVU7WUFDakMsVUFBVSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxVQUFVLFlBQVksK0RBQVUsRUFBRTtnQkFDcEMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQzthQUMzQztZQUNELFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNJLG1DQUFNLEdBQWIsVUFBYyxJQUFxQjtRQUFuQyxpQkFTQztRQVRhLG1DQUFxQjtRQUNqQyxJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLG9CQUFVO2dCQUNqQyxpQkFBVSxDQUFDLGNBQU0saUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFwQyxDQUFvQyxFQUFFLEVBQUUsQ0FBQztZQUExRCxDQUEwRCxDQUMzRCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQ0FBTSxHQUFiO1FBQ0UsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDbEIsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVCLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLHdDQUFXLEdBQWxCLFVBQ0UsWUFBb0IsRUFDcEIsYUFBa0I7UUFGcEIsaUJBb0JDO1FBaEJDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDL0IsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssYUFBYSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsYUFBYSxDQUFDO1NBQ2pEO2FBQU07WUFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxTQUFTLENBQUM7WUFDOUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBRyxhQUFhLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFJO2dCQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUN6QyxhQUFHLElBQUksV0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQXBDLENBQW9DLENBQzVDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNkNBQWdCLEdBQXZCLFVBQ0UsaUJBQThCLEVBQzlCLFFBQWtCLEVBQ2xCLElBQXFDO1FBRXJDLElBQUksUUFBUSxHQUFHLG1GQUFvQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFPLElBQUksV0FBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7UUFDMUYsSUFBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLFVBQVUsR0FBRyxJQUFJLHFHQUE2QixDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkcsT0FBTyxVQUFVLENBQUM7U0FDbkI7UUFDRCxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUksMENBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBZSxRQUFpQjtZQUM5QixJQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtRQUNILENBQUM7OztPQU5BO0lBT0gseUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvV2lEO0FBQ1k7QUFDSjtBQUcxRDtJQUErQyw0RkFBYztJQUMzRCxtQ0FDRSxVQUF1QixFQUN2QixRQUFrQixFQUNsQixJQUFxQyxFQUNyQyxPQUFnQjtRQUpsQixZQU1FLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQU8zQztRQU5DLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FDVixrQkFBUTtZQUNOLFFBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDekIsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUR2RCxDQUN1RCxDQUMxRCxDQUFDOztJQUNKLENBQUM7SUFFRCxnREFBWSxHQUFaO1FBQ0UsSUFBTSxZQUFZLEdBQW1DLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkUsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsMENBQU0sR0FBTjtRQUNFLElBQUksUUFBUSxHQUFHLElBQUksK0VBQWtCLENBQ25DLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsRUFDM0MsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUNuQixJQUFJLENBQUMsSUFBSSxDQUNWLENBQUM7UUFDRixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVILGdDQUFDO0FBQUQsQ0FBQyxDQTlCOEMsdUVBQWMsR0E4QjVEOztBQUVELG1GQUFvQixDQUFDLGtCQUFrQixDQUNyQyxjQUFjLEVBQ2QseUJBQXlCLENBQzFCLENBQUM7Ozs7Ozs7Ozs7QUN4Q29DO0FBRXRDLElBQUksbUJBQW1CLEdBQXVDLEVBQUUsQ0FBQztBQUNqRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRywyREFBUyxDQUFDO0FBRS9CLElBQUksVUFBVSxHQUFHO0lBQ3RCLFlBQVksRUFBRSxVQUFDLE1BQW1CO1FBQW5CLG9DQUFtQjtRQUNoQyxPQUFPLG1CQUFtQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUb0U7QUFDcEI7QUFDRztBQUNQO0FBRTlDO0lBQWdDLDZFQUFjO0lBRzVDLG9CQUNZLGFBQTBCLEVBQ3BDLFFBQWtCLEVBQ2xCLElBQXFDLEVBQ3JDLE9BQWdCO1FBSmxCLFlBTUUsa0JBQU0sYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQzlDO1FBTlcsbUJBQWEsR0FBYixhQUFhLENBQWE7UUFIOUIsa0JBQVksR0FBYyxTQUFTLENBQUM7UUFhbEMsZUFBUyxHQUE2QixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUo5RSxDQUFDO0lBTVMsaUNBQVksR0FBdEIsVUFBdUIsU0FBaUI7UUFDdEMsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQzVCO1lBQ0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxnQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQUVoQixpQ0FBWSxHQUFaLFVBQWEsSUFBZTtRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUNELHNCQUFJLGlDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFJUyxrQ0FBYSxHQUF2QixVQUF3QixTQUF5QjtRQUMvQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVTLHVDQUFrQixHQUE1QixVQUE2QixPQUF1QjtRQUFwRCxpQkFlQztRQWRDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLElBQU0sYUFBYSxHQUFHLG1FQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQVM7Z0JBQzNCLE9BQU87b0JBQ0wsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLElBQUksRUFBRSwwRUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO2lCQUN2RCxDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBQyxNQUFXLElBQUssWUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUEvQixDQUErQixFQUNoRCxVQUFDLENBQU0sSUFBSyxZQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWpDLENBQWlDLENBQzlDLENBQUM7WUFDRixPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsaUJBQU0sa0JBQWtCLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDRSxJQUFNLFFBQVEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuRCxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNFLElBQU0sTUFBTSxHQUFlLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsS0FBSyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBRTNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUFBLGlCQVFDO1FBUEMsSUFBTSxNQUFNLEdBQWtCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQU07WUFDMUQsNkRBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUFqRSxDQUFpRSxDQUNsRSxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQUEsaUJBc0JDO1FBckJDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBRztZQUNuQixJQUFNLFFBQVEsR0FBUSxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUSxFQUFFLEtBQWE7d0JBQ3JDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDaEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7eUJBQ3JCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFRLEVBQUUsS0FBYTt3QkFDckMsSUFBSSxRQUFRLElBQUksR0FBRyxFQUFFOzRCQUNuQixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzt5QkFDckI7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQ0EzRytCLHVFQUFjLEdBMkc3Qzs7Ozs7Ozs7QUNoSEQsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDK0I7QUFDaUM7QUFDdEM7QUFFM0I7QUFrQjNCO0lBWUUsb0JBQ1UsVUFBdUIsRUFDdkIsTUFBbUIsRUFDbkIsSUFBbUIsRUFDbkIsT0FBMEIsRUFDMUIsUUFBa0MsRUFDbEMsZUFBdUI7UUFOakMsaUJBY0M7UUFUUyx3Q0FBa0M7UUFDbEMseURBQXVCO1FBTHZCLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFRO1FBZGpDOzs7OztXQUtHO1FBQ0ksbUJBQWMsR0FBMEQsSUFBSSxrREFBSyxFQUFrRCxDQUFDO1FBNEUzSSxZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQXNLckIseUJBQW9CLEdBSVAsRUFBRSxDQUFDO1FBRWhCLHlCQUFvQixHQUVQLEVBQUUsQ0FBQztRQUV2Qix1QkFBa0IsR0FBRyxVQUNuQixZQUFpQixFQUNqQixNQUFjLEVBQ2QsVUFBa0I7WUFFbEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsU0FBUyxHQUFHLDBFQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBQztnQkFDaEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbkMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUYseUJBQW9CLEdBQUcsVUFDckIsWUFBaUIsRUFDakIsTUFBYyxFQUNkLFVBQWtCO1lBRWxCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUV6RCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFFcEIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLFNBQVMsR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDNUQ7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLFNBQVMsR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDekQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMvQjtnQkFFRCxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDM0IsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBTSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRixxQkFBZ0IsR0FBRyxVQUNqQixZQUFpQixFQUNqQixNQUFjLEVBQ2QsVUFBa0I7WUFFbEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsU0FBUyxHQUFHLDBFQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXhELE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBQztnQkFDaEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUVwQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxJQUFJLGFBQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUExQixDQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLGlFQUFnQixDQUFDLFNBQVMsQ0FBQztnQkFDdEcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU5QyxnRUFBZ0U7Z0JBQ2hFLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRiwwQkFBcUIsR0FBRyxVQUN0QixZQUFpQixFQUNqQixNQUFjLEVBQ2QsVUFBa0I7WUFFbEIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxRQUFRLENBQUMsT0FBTyxHQUFHLFdBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN0QixDQUFDO1lBRUQsSUFBSSxhQUFhLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsVUFBVSxLQUFLLGlFQUFnQixDQUFDLFNBQVMsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO1lBRXBHLElBQUcsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU87YUFDUjtZQUVELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLElBQUksR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN2QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN2QixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTdCLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQU07Z0JBQ3hCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQzlCLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7b0JBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ3RDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDM0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVMLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQztZQUNoQixRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVMsQ0FBQztnQkFBVixpQkFZbkI7Z0JBWEMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixJQUFHLENBQUMsb0NBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7b0JBQUUsT0FBTztnQkFFMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsSUFBSSxLQUFLLG9DQUFDLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQTdCLENBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxpRUFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVwRSxnRUFBZ0U7Z0JBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUM7WUFFRixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFFRiw2QkFBd0IsR0FBRyxVQUN6QixZQUFpQixFQUNqQixNQUFjLEVBQ2QsVUFBa0I7WUFFbEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsU0FBUyxHQUFHLDBFQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTFELE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBQztnQkFDaEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUVwQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxJQUFJLGFBQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUExQixDQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLGlFQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDOUYsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVkLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQztZQUVGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUVGLDZCQUF3QixHQUFHLFVBQ3pCLFVBQW1CO1lBRW5CLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUxRCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFFcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxpRUFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQzlGLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUEvWUEsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFFLENBQUM7UUFDNUksSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFFLENBQUM7UUFDOUQsSUFBRyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyxrQ0FBYSxHQUFyQixVQUFzQixJQUFnQjtRQUF0QyxpQkFjQztRQWJDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQUk7WUFDcEMsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtnQkFDMUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVELElBQUcsUUFBUSxFQUFFO29CQUNYLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO2lCQUN0QztnQkFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sWUFBWSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvRyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLHFDQUFnQixHQUExQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRVMsaUNBQVksR0FBdEIsVUFBdUIsTUFBbUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCO1lBQzFELE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUNuQixXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLFFBQVEsQ0FBQyxJQUFJO2dCQUMzRCxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsK0RBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLCtEQUFjLENBQUMsUUFBUTtnQkFDdkYsVUFBVSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlFQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUVBQWdCLENBQUMsU0FBUztnQkFDakcsUUFBUSxFQUFFLGlFQUFnQixDQUFDLE1BQU07YUFDbEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixVQUE0QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksVUFBVSxLQUFLLGlFQUFnQixDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksVUFBVSxLQUFLLGlFQUFnQixDQUFDLE9BQU8sQ0FBQztJQUMvSSxDQUFDO0lBRUQsc0JBQVcsK0JBQU87YUFBbEI7WUFDRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7YUFDRCxVQUFtQixPQUE0QjtZQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BSkE7SUFNTSwyQkFBTSxHQUFiLFVBQWMsSUFBcUI7UUFBckIsbUNBQXFCO1FBQ2pDLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFHLElBQUksRUFBRTtnQkFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELHNCQUFXLGtDQUFVO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBSUQsNEJBQU8sR0FBUDtRQUNFLDhCQUE4QjtRQUM5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFVLDBDQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRztZQUNqRCxvQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQUEsaUJBMkZDO1FBMUZDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQUksV0FBVyxHQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFNLElBQUssUUFBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBTSxPQUFPLEdBQUcsOENBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDakMsR0FBRyxFQUFFLFNBQVM7WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDcEIsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxPQUFPLEVBQUUsT0FBTztZQUNoQiw0QkFBNEI7WUFDNUIsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixTQUFTLEVBQUUsVUFBQyxJQUFTLEVBQUUsS0FBVTtvQkFDL0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6QyxDQUFDO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsS0FBSztZQUNiLGNBQWMsRUFBRSxVQUFDLEtBQVUsRUFBRSxJQUFTLEVBQUUsS0FBVSxFQUFFLEdBQVEsRUFBRSxPQUFZO2dCQUN4RSxJQUFJLFlBQVksR0FBRyxvQ0FBQyxDQUFDLFNBQVMsQ0FBQztxQkFDNUIsU0FBUyxFQUFFO3FCQUNYLEdBQUcsRUFBRSxDQUFDO2dCQUNULElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQztnQkFDaEIsb0NBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQ1AsUUFBUSxDQUFDLElBQUksQ0FBQztxQkFDZCxJQUFJLENBQUMsVUFBUyxLQUFhO29CQUMxQixJQUFJLE9BQU8sR0FBRyxvQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUM5RCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM5QyxTQUFTLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFDO3dCQUN0RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLGlCQUFPOzRCQUN2QyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDL0QsSUFBRyxDQUFDLENBQUMsT0FBTyxFQUFFO2dDQUNaLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7NkJBQ2hDO3dCQUNILENBQUMsQ0FBQyxDQUFDO3dCQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBRTNCLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3BELGVBQWUsQ0FBQyxTQUFTLEdBQUcsK0JBQStCLENBQUM7d0JBQzVELGVBQWUsQ0FBQyxTQUFTLEdBQUcsK0NBQStDLENBQUM7d0JBQzVFLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hDLG9DQUFDLENBQUMsT0FBTyxFQUFFLG9DQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsZUFBZSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQzt3QkFDckUsb0NBQUMsQ0FBQyxPQUFPLEVBQUUsb0NBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7NEJBQ2hELElBQUksS0FBSyxHQUFzQixJQUFLLENBQUMsS0FBSyxDQUFDOzRCQUMzQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxLQUFLLEVBQUU7Z0NBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBQzdCO3dCQUNILENBQUMsQ0FBQyxDQUFDO3dCQUNILE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ2pDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsMkNBQTJDLENBQUM7UUFFbEUsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxvQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWTthQUNkLFFBQVEsRUFBRTthQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDYixJQUFJLEVBQUUsQ0FBQztRQUVWLDZEQUE2RDtRQUM3RCx3RkFBd0Y7UUFDeEYsTUFBTTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsQ0FBTSxFQUFFLFFBQWEsRUFBRSxPQUFZO1lBQ3pFLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsNkJBQTZCO1lBQzdCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsb0NBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRTtZQUN0RSxJQUFJLEVBQUUsR0FBRyxvQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLEdBQUcsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWxDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsRUFBRSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2FBQzdDO2lCQUNJO2dCQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUMxQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLHVDQUFrQixHQUE1QixVQUE2QixJQUFTO1FBQXRDLGlCQXlEQztRQXhEQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25CLEtBQUssQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7UUFFeEMsSUFBSSxDQUFDLE9BQU87YUFDVCxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsUUFBUSxLQUFLLGlFQUFnQixDQUFDLEdBQUcsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBN0UsQ0FBNkUsQ0FBQzthQUMvRixPQUFPLENBQUMsZ0JBQU07WUFDYixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3JDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxpQkFBTyxJQUFJLFVBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7WUFDcEYsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbEUsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDdkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDMUQsS0FBSSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDNUQsSUFBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM1QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2Qyx1RkFBdUY7b0JBQ3ZGLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0Y7U0FDRjtRQUVELElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNwQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQTZLRCwrQkFBVSxHQUFWO1FBQUEsaUJBa0JDO1FBakJDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsUUFBUSxLQUFLLGlFQUFnQixDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBaEYsQ0FBZ0YsQ0FBQyxDQUFDO1FBQ3pJLElBQU0sT0FBTyxHQUFRLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1lBQ3RELElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFELE9BQU87Z0JBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixNQUFNLEVBQUUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLFdBQVc7Z0JBQ3hELE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVSxLQUFLLGlFQUFnQixDQUFDLFNBQVM7Z0JBQ3pELE9BQU8sRUFBRSxVQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBUSxJQUFLLFVBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQWhCLENBQWdCO2FBQ3BFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQztnQkFDTixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxXQUFXLEVBQUUsS0FBSztnQkFDbEIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osZ0JBQWdCLEVBQUUsRUFBRTthQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFJTSwyQkFBTSxHQUFiO1FBQ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmQ0QjtBQUNKO0FBQ0E7QUFDQzs7Ozs7Ozs7Ozs7Ozs7O0FDRndCO0FBQ1k7QUFFekM7QUFFckI7SUFBMEIsdUVBQWM7SUFDdEMsY0FDRSxhQUEwQixFQUMxQixRQUFrQixFQUNsQixJQUFxQyxFQUNyQyxPQUFnQjtlQUVoQixrQkFBTSxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7SUFDL0MsQ0FBQztJQUVELHNCQUFXLHNCQUFJO2FBQWY7WUFDRSxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUVELHNCQUFPLEdBQVA7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBRztZQUNuQixJQUFNLFFBQVEsR0FBUSxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFNLFdBQVcsR0FBa0IsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzNCLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCO3FCQUFNO29CQUNMLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO3dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFHLElBQUksa0JBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztxQkFDdkU7eUJBQU07d0JBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0Y7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsSUFBRyxXQUFXLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRTtvQkFDbEMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7aUJBQ3JDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxZQUFZLGdCQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRVMsNEJBQWEsR0FBdkIsVUFBd0IsU0FBeUI7UUFDekMsdUJBQXVDLEVBQXJDLDhCQUFZLEVBQUUsY0FBdUIsQ0FBQztRQUM5QyxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxhQUFhLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1FBRXJELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbkIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1I7UUFFRCxJQUFNLFNBQVMsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRSxTQUFTLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUN0QyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztZQUNoQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLEVBQUUsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7UUFDakQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQU8sR0FBUDtRQUNFLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0EzRXlCLHVFQUFjLEdBMkV2Qzs7QUFFRCxtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEQsbUZBQW9CLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELG1GQUFvQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUVVO0FBRXhFO0lBQWdELDZGQUF5QjtJQUN2RSxvQ0FDRSxhQUEwQixFQUMxQixRQUFrQixFQUNsQixJQUFxQyxFQUNyQyxPQUFnQjtlQUVoQixrQkFBTSxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7SUFDL0MsQ0FBQztJQUVELGlEQUFZLEdBQVo7UUFDRSxJQUFNLGFBQWEsR0FBcUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0RSxJQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBRTlDLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLFFBQVEsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLENBbEIrQyw2RkFBeUIsR0FrQnhFOztBQUVELG1GQUFvQixDQUFDLGtCQUFrQixDQUNyQyxlQUFlLEVBQ2YsMEJBQTBCLENBQzNCLENBQUM7QUFFRixtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FDckMsZ0JBQWdCLEVBQ2hCLDBCQUEwQixDQUMzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JtQztBQUNjO0FBQ1k7QUFDaEI7QUFFL0M7SUFBK0IsNEVBQWM7SUFDM0MsbUJBQ0UsYUFBMEIsRUFDMUIsUUFBa0IsRUFDbEIsSUFBcUMsRUFDckMsT0FBZ0I7ZUFFaEIsa0JBQU0sYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQkFBVywyQkFBSTthQUFmO1lBQ0UsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFJRCwyQkFBTyxHQUFQO1FBQUEsaUJBNkNDO1FBNUNDLElBQUksTUFBTSxHQUE4QixFQUFFLENBQUM7UUFFM0MsSUFBSSxTQUFTLEdBQUcsb0VBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxJQUFJLFdBQVcsR0FBRyxVQUFDLElBQVk7WUFDN0IsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFRixJQUFJLGFBQWEsR0FBRyxVQUFDLEdBQVc7WUFDOUIsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBSTtvQkFDekIsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTt3QkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNsQjs2QkFBTTs0QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt5QkFDaEI7cUJBQ0Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQUc7WUFDbkIsSUFBTSxRQUFRLEdBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDakM7cUJBQU07b0JBQ0wsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7d0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUcsSUFBSSxvQkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7cUJBQ3BFO3lCQUFNO3dCQUNMLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsaUNBQWEsR0FBdkIsVUFBd0IsU0FBeUI7UUFBakQsaUJBOEJDO1FBN0JDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBTSxVQUFVLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsSUFBTSxhQUFhLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsYUFBYSxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztRQUVyRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNSO1FBRUQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsQyxJQUFNLE1BQU0sR0FBRztZQUNiLElBQUksRUFBRSxJQUFJO1lBQ1YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLDJCQUEyQjtZQUN2QyxLQUFLLEVBQUUsVUFBQyxJQUFZLEVBQUUsTUFBYztnQkFDbEMsT0FBTyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDL0IsQ0FBQztZQUNELFdBQVcsRUFBRSxHQUFHO1lBQ2hCLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsVUFBUyxJQUFTO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztTQUNGLENBQUM7UUFFRixJQUFJLENBQUMsS0FBSyxHQUFHLGlEQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0UsaUJBQU0sT0FBTyxXQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0FyRzhCLHVFQUFjLEdBcUc1Qzs7QUFFRCxtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0QsbUZBQW9CLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzlELG1GQUFvQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7Ozs7OztBQy9HbkUseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQkFBb0I7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLEVBQUU7QUFDZixhQUFhLEVBQUU7QUFDZixhQUFhLEVBQUU7QUFDZixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjs7QUFFcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEscUNBQXFDO0FBQ2xELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IseURBQXlEO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUF5RDtBQUNuRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLEtBQUs7QUFDbEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsYUFBYSxFQUFFO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFlBQVk7QUFDekIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUF3RDtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3REFBd0Q7QUFDeEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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Q1IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxHQUFHLEVBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDUCxJQUFJLEVBQ0osTUFBTSxFQUNOLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sRUFDTixPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxPQUFPLEVBQ1AsR0FBRyxFQUNILEdBQUcsRUFDSCxNQUFNLEVBQ04sT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxHQUFHLENBQ0osQ0FBQzs7Ozs7OztBQzlhRixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBRUw7QUFDTTtBQUNGO0FBQ087QUFDQztBQUVMO0FBQ1Q7QUFDTztBQUNNO0FBQ3JCIiwiZmlsZSI6Ii4vcGFja2FnZXMvc3VydmV5LmFuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJ3b3JkY2xvdWRcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlBbmFseXRpY3NcIiwgW1wic3VydmV5LWNvcmVcIiwgXCJwbG90bHkuanMtZGlzdFwiLCBcIndvcmRjbG91ZFwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpLCByZXF1aXJlKFwid29yZGNsb3VkXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlBbmFseXRpY3NcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0sIHJvb3RbXCJQbG90bHlcIl0sIHJvb3RbXCJXb3JkQ2xvdWRcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZjNmFmY2ViYjIyNTZmNDRmNWE4IiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcblxuZGVjbGFyZSB0eXBlIFZpc3VhbGl6ZXJDb25zdHJ1Y3RvciA9IG5ldyAoXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gIG9wdGlvbnM/OiBPYmplY3RcbikgPT4gYW55O1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvbk1hbmFnZXIge1xuICBzdGF0aWMgdml6dWFsaXplcnM6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxWaXN1YWxpemVyQ29uc3RydWN0b3I+IH0gPSB7fTtcbiAgc3RhdGljIHJlZ2lzdGVyVmlzdWFsaXplcihcbiAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgIGNvbnN0cnVjdG9yOiBWaXN1YWxpemVyQ29uc3RydWN0b3JcbiAgKSB7XG4gICAgbGV0IHZpenVhbGl6ZXJzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdO1xuICAgIGlmICghdml6dWFsaXplcnMpIHtcbiAgICAgIHZpenVhbGl6ZXJzID0gW107XG4gICAgICBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV0gPSB2aXp1YWxpemVycztcbiAgICB9XG4gICAgdml6dWFsaXplcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cbiAgc3RhdGljIGdldFZpc3VhbGl6ZXJzKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgdml6dWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV07XG4gICAgaWYgKCF2aXp1YWxpemVycykge1xuICAgICAgcmV0dXJuIFtWaXN1YWxpemVyQmFzZV07XG4gICAgfVxuICAgIHJldHVybiB2aXp1YWxpemVycztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25NYW5hZ2VyLnRzIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgOiBkZXNjLFxuICAgIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZVxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9oZWxwZXJzLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcblxuaW1wb3J0IFwiLi92aXN1YWxpemVyQmFzZS5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemVyQmFzZSB7XG5cbiAgcHVibGljIHRvb2xiYXJJdGVtQ3JlYXRvcnM6IHsgW25hbWU6IHN0cmluZ106ICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4gSFRNTEVsZW1lbnQgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIHByb3RlY3RlZCBvcHRpb25zPzogT2JqZWN0XG4gICkge31cblxuICBwdWJsaWMgcmVnaXN0ZXJUb29sYmFySXRlbShuYW1lOiBzdHJpbmcsIGNyZWF0b3I6ICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRvb2xiYXJJdGVtQ3JlYXRvcnNbbmFtZV0gPSBjcmVhdG9yO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcInZpc3VhbGl6ZXJcIjtcbiAgfVxuXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiVGhpcyBxdWVzdGlvbiB0eXBlIGlzIG5vdCB2aXN1YWxpemVkIHlldFwiO1xuICB9XG5cbiAgcmVuZGVyKHRhcmdldEVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQgfHwgdGhpcy50YXJnZXRFbGVtZW50O1xuXG4gICAgY29uc3QgdG9vbGJhck5vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS12aXN1YWxpemVyX19jb250ZW50XCI7XG5cbiAgICB0aGlzLmNyZWF0ZVRvb2xiYXIodG9vbGJhck5vZGVDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudChjb250ZW50Q29udGFpbmVyKTtcblxuICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyTm9kZUNvbnRhaW5lcik7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMudG9vbGJhckl0ZW1DcmVhdG9ycyB8fCB7fSkuZm9yRWFjaCh0b29sYmFySXRlbU5hbWUgPT4gdGhpcy50b29sYmFySXRlbUNyZWF0b3JzW3Rvb2xiYXJJdGVtTmFtZV0odG9vbGJhcikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXIoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvb2xiYXIuY2xhc3NOYW1lID0gXCJzdmEtdG9vbGJhclwiO1xuICAgIHRoaXMuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyKTtcbiAgfVxuXG4gIGludm9rZU9uVXBkYXRlKCkge1xuICAgIHRoaXMub25VcGRhdGUgJiYgdGhpcy5vblVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0UmFuZG9tQ29sb3IoKSB7XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5nZXRDb2xvcnMoKTtcbiAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbiAgfVxuXG4gIGJhY2tncm91bmRDb2xvciA9IFwiI2Y3ZjdmN1wiO1xuXG4gIHN0YXRpYyBjdXN0b21Db2xvcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3RhdGljIGNvbG9ycyA9IFtcbiAgICBcIiM4NmUxZmJcIixcbiAgICBcIiMzOTk5ZmJcIixcbiAgICBcIiNmZjY3NzFcIixcbiAgICBcIiMxZWI0OTZcIixcbiAgICBcIiNmZmMxNTJcIixcbiAgICBcIiNhYmExZmZcIixcbiAgICBcIiM3ZDhkYTVcIixcbiAgICBcIiM0ZWM0NmNcIixcbiAgICBcIiNjZjM3YTZcIixcbiAgICBcIiM0ZTYxOThcIlxuICBdO1xuXG4gIGdldENvbG9ycyhjb3VudCA9IDEwKSB7XG4gICAgY29uc3QgY29sb3JzID1cbiAgICAgIEFycmF5LmlzQXJyYXkoVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzKSAmJlxuICAgICAgVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnNcbiAgICAgICAgOiBWaXN1YWxpemVyQmFzZS5jb2xvcnM7XG5cbiAgICBsZXQgbWFueUNvbG9yczogYW55ID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIG1hbnlDb2xvcnMgPSBtYW55Q29sb3JzLmNvbmNhdChjb2xvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBtYW55Q29sb3JzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFsaXplckJhc2UudHMiLCJpbXBvcnQgeyBlbmdsaXNoU3RyaW5ncyB9IGZyb20gXCIuL2xvY2FsaXphdGlvbi9lbmdsaXNoXCI7XG5cbmV4cG9ydCB2YXIgbG9jYWxpemF0aW9uID0ge1xuICBjdXJyZW50TG9jYWxlVmFsdWU6IFwiXCIsXG4gIGRlZmF1bHRMb2NhbGVWYWx1ZTogXCJlblwiLFxuICBsb2NhbGVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgbG9jYWxlTmFtZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBzdXBwb3J0ZWRMb2NhbGVzOiA8QXJyYXk8YW55Pj5bXSxcbiAgZ2V0IGN1cnJlbnRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID09PSB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZVxuICAgICAgPyBcIlwiXG4gICAgICA6IHRoaXMuY3VycmVudExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgY3VycmVudExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXQgZGVmYXVsdExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBkZWZhdWx0TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldFN0cmluZzogZnVuY3Rpb24oc3RyTmFtZTogc3RyaW5nKSB7XG4gICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2FsZVxuICAgICAgPyB0aGlzLmxvY2FsZXNbdGhpcy5jdXJyZW50TG9jYWxlXVxuICAgICAgOiB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcbiAgICBpZiAoIWxvYyB8fCAhbG9jW3N0ck5hbWVdKSBsb2MgPSB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcbiAgICB2YXIgcmVzdWx0ID0gbG9jW3N0ck5hbWVdO1xuICAgIGlmKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmxvY2FsZXNbXCJlblwiXVtzdHJOYW1lXSB8fCBzdHJOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICBnZXRMb2NhbGVzOiBmdW5jdGlvbigpOiBBcnJheTxzdHJpbmc+IHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgcmVzLnB1c2goXCJcIik7XG4gICAgaWYgKHRoaXMuc3VwcG9ydGVkTG9jYWxlcyAmJiB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzLnB1c2godGhpcy5zdXBwb3J0ZWRMb2NhbGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXMuc29ydCgpO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgc3VydmV5U3RyaW5ncyA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiZW5nbGlzaFwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbk1hbmFnZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXktY29yZVwiLFwiY29tbW9uanNcIjpcInN1cnZleS1jb3JlXCIsXCJhbWRcIjpcInN1cnZleS1jb3JlXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBUb29sYmFySGVscGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2VsZWN0b3IodG9vbGJhcjogSFRNTERpdkVsZW1lbnQsIG9wdGlvbnM6IEFycmF5PHt2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmd9PiwgaXNTZWxlY3RlZDogKG9wdGlvbjoge3ZhbHVlOiBzdHJpbmcsIHRleHQ6IHN0cmluZ30pID0+IGJvb2xlYW4sIGhhbmRlcjogKGU6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dCA9IG9wdGlvbi50ZXh0O1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LnNlbGVjdGVkID0gaXNTZWxlY3RlZChvcHRpb24pO1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZWN0Lm9uY2hhbmdlID0gaGFuZGVyO1xyXG4gICAgICAgIHNlbGVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgICAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnV0dG9uKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50LCBoYW5kZXI6IChlOiBhbnkpID0+IHZvaWQsIHRleHQgPSBcIlwiLCBjc3NDbGFzcyA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzdmEtdG9vbGJhcl9fYnV0dG9uIFwiICsgY3NzQ2xhc3M7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBoYW5kZXI7XHJcbiAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vc2VsZWN0QmFzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuTG9hZFBsb3RseSgpIHtcbiAgcmV0dXJuICEhd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkw7XG59XG5cbnZhciBQbG90bHk6IGFueTtcbmlmIChjYW5Mb2FkUGxvdGx5KCkpIHtcbiAgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlUGxvdGx5IGV4dGVuZHMgU2VsZWN0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBTZWxlY3RCYXNlUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFydDogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+O1xuICBwcml2YXRlIGZpbHRlclRleHQ6IEhUTUxTcGFuRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBmaWx0ZXI6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgc3RhdGljIHR5cGVzID0gW1wiYmFyXCIsIFwicGllXCIsIFwic2NhdHRlclwiXTtcblxuICB1cGRhdGUoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xuICAgIHN1cGVyLnVwZGF0ZShkYXRhKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5nZXRQbG90bHlDaGFydCh0aGlzLmNoYXJ0Tm9kZSwgdGhpcy5jaGFydFR5cGUpO1xuICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgUGxvdGx5LnB1cmdlKHRoaXMuY2hhcnROb2RlKTtcbiAgfVxuXG4gIGNyZWF0ZUNoYXJ0KCkge1xuICAgIHRoaXMuY2hhcnQgPSB0aGlzLmdldFBsb3RseUNoYXJ0KHRoaXMuY2hhcnROb2RlLCB0aGlzLmNoYXJ0VHlwZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5jaG9pY2VzLmZpbHRlcihcbiAgICAgIChjaG9pY2U6IEl0ZW1WYWx1ZSkgPT4gY2hvaWNlLnRleHQgPT09IGl0ZW1UZXh0XG4gICAgKVswXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXRjaENvbmZpZ1BhcmFtZXRlcnMoXG4gICAgY2hhcnROb2RlOiBvYmplY3QsXG4gICAgdHJhY2VzOiBBcnJheTxvYmplY3Q+LFxuICAgIGxheW91dDogb2JqZWN0LFxuICAgIGNvbmZpZzogb2JqZWN0XG4gICkge31cblxuICBwcml2YXRlIGdldFBsb3RseUNoYXJ0KFxuICAgIGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgY2hhcnRUeXBlOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+IHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVlc3Rpb247XG4gICAgY29uc3QgZGF0YXNldHMgPSB0aGlzLmdldERhdGEoKTtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpO1xuICAgIGNvbnN0IHRyYWNlczogYW55ID0gW107XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5nZXRDb2xvcnMoKTtcblxuICAgIGNvbnN0IHRyYWNlQ29uZmlnOiBhbnkgPSB7XG4gICAgICB0eXBlOiBjaGFydFR5cGUsXG4gICAgICB5OiBsYWJlbHMubWFwKGwgPT4ge1xuICAgICAgICBpZiAobC5sZW5ndGggPiAzMCkge1xuICAgICAgICAgIHJldHVybiBsLnN1YnN0cmluZygwLCAyNykgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsO1xuICAgICAgfSksXG4gICAgICB0ZXh0OiBsYWJlbHMsXG4gICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICBtb2RlOiBcIm1hcmtlcnNcIixcbiAgICAgIHdpZHRoOiAwLjVcbiAgICB9O1xuXG4gICAgaWYgKGRhdGFzZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdHJhY2VDb25maWdbXCJtYXJrZXJcIl0gPSB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMsXG4gICAgICAgIHN5bWJvbDogXCJjaXJjbGVcIixcbiAgICAgICAgc2l6ZTogMTZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGF0YXNldHMuZm9yRWFjaChkYXRhc2V0ID0+IHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PT0gXCJwaWVcIikge1xuICAgICAgICB0cmFjZXMucHVzaChcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0cmFjZUNvbmZpZywge1xuICAgICAgICAgICAgdmFsdWVzOiBkYXRhc2V0LFxuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHNcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2VzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgdHJhY2VDb25maWcsIHsgeDogZGF0YXNldCB9KSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWlnaHQgPVxuICAgICAgY2hhcnRUeXBlID09PSBcInBpZVwiXG4gICAgICAgID8gbGFiZWxzLmxlbmd0aCA8IDEwXG4gICAgICAgICAgPyBsYWJlbHMubGVuZ3RoICogNTAgKyAxMDBcbiAgICAgICAgICA6IDU1MFxuICAgICAgICA6IChsYWJlbHMubGVuZ3RoICsgKGxhYmVscy5sZW5ndGggKyAxKSAqIDAuNSkgKiAyMDtcblxuICAgIGNvbnN0IGxheW91dDogYW55ID0ge1xuICAgICAgZm9udDoge1xuICAgICAgICBmYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgc2l6ZTogMTQsXG4gICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgY29sb3I6IFwiIzQwNDA0MFwiXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdDogMCxcbiAgICAgICAgYjogMCxcbiAgICAgICAgcjogMTBcbiAgICAgIH0sXG4gICAgICBjb2xvcndheTogY29sb3JzLFxuICAgICAgeWF4aXM6IHtcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJjYXRlZ29yeVwiLFxuICAgICAgICB0aWNrbGVuOiA1LFxuICAgICAgICB0aWNrY29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIGF1dG9tYXJnaW46IHRydWVcbiAgICAgIH0sXG4gICAgICBwbG90X2JnY29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgcGFwZXJfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZGlzcGxheWxvZ286IGZhbHNlLFxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxuICAgIH07XG5cbiAgICB0aGlzLnBhdGNoQ29uZmlnUGFyYW1ldGVycyhjaGFydE5vZGUsIHRyYWNlcywgbGF5b3V0LCBjb25maWcpO1xuXG4gICAgY29uc3QgcGxvdCA9IFBsb3RseS5uZXdQbG90KGNoYXJ0Tm9kZSwgdHJhY2VzLCBsYXlvdXQsIGNvbmZpZyk7XG5cbiAgICAoPGFueT5jaGFydE5vZGUpW1wib25cIl0oXCJwbG90bHlfY2xpY2tcIiwgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGRhdGEucG9pbnRzLmxlbmd0aCA+IDAgJiYgdGhpcy5vbkRhdGFJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgaXRlbVRleHQgPSBkYXRhLnBvaW50c1swXS50ZXh0O1xuICAgICAgICBjb25zdCBpdGVtOiBJdGVtVmFsdWUgPSB0aGlzLmdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dCk7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGdldERyYWdMYXllciA9ICgpID0+XG4gICAgICA8SFRNTEVsZW1lbnQ+Y2hhcnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuc2V3ZHJhZ1wiKVswXTtcbiAgICAoPGFueT5jaGFydE5vZGUpW1wib25cIl0oXCJwbG90bHlfaG92ZXJcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0xheWVyID0gZ2V0RHJhZ0xheWVyKCk7XG4gICAgICBkcmFnTGF5ZXIgJiYgKGRyYWdMYXllci5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIik7XG4gICAgfSk7XG4gICAgKDxhbnk+Y2hhcnROb2RlKVtcIm9uXCJdKFwicGxvdGx5X3VuaG92ZXJcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0xheWVyID0gZ2V0RHJhZ0xheWVyKCk7XG4gICAgICBkcmFnTGF5ZXIgJiYgKGRyYWdMYXllci5zdHlsZS5jdXJzb3IgPSBcIlwiKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwbG90O1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNoZWNrYm94XCIsIFNlbGVjdEJhc2VQbG90bHkpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwicmFkaW9ncm91cFwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImRyb3Bkb3duXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiaW1hZ2VwaWNrZXJcIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxvdGx5L3NlbGVjdEJhc2UudHMiLCJpbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVZpc3VhbGl6ZXJzV3JhcHBlciB9IGZyb20gXCIuL2FsdGVybmF0aXZlVml6dWFsaXplcnNXcmFwcGVyXCI7XG5pbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCwgRXZlbnQgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmNvbnN0IE11dXJpID0gcmVxdWlyZShcIm11dXJpXCIpO1xuaW1wb3J0IFwiLi92aXN1YWxpemF0aW9uUGFuZWwuc2Nzc1wiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmltcG9ydCB7IFRvb2xiYXJIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQsIEVsZW1lbnRWaXNpYmlsaXR5IH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmNvbnN0IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uXCI7XG5cbi8qKlxuICogVmlzdWFsaXphdGlvblBhbmVsIGlzIHJlc3BvbnNpYmxlIGZvciBkaXNwbGF5aW5nIGFuIGFycmF5IG9mIHN1cnZleSBxdWVzdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uUGFuZWwge1xuICBwcml2YXRlIF9zaG93SGVhZGVyID0gZmFsc2U7XG4gIHByaXZhdGUgcGFuZWxDb250ZW50OiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIGZpbHRlcmVkRGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PjtcbiAgcHJvdGVjdGVkIGZpbHRlclZhbHVlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gIHByb3RlY3RlZCB2aXN1YWxpemVyczogQXJyYXk8VmlzdWFsaXplckJhc2U+ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBxdWVzdGlvbnM6IEFycmF5PGFueT4sXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM/OiBPYmplY3QsXG4gICAgcHJpdmF0ZSBfZWxlbWVudHM6IEFycmF5PElWaXN1YWxpemVyUGFuZWxFbGVtZW50PiA9IFtdLFxuICAgIHByaXZhdGUgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSBkYXRhO1xuICAgIGlmKF9lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRzID0gdGhpcy5idWlsZEVsZW1lbnRzKHF1ZXN0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYXlvdXRFbmdpbmU6ICgpID0+IGFueTtcbiAgcHJpdmF0ZSBnZXQgbGF5b3V0RW5naW5lICgpIHtcbiAgICByZXR1cm4gISF0aGlzLmdldExheW91dEVuZ2luZSAmJiB0aGlzLmdldExheW91dEVuZ2luZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkRWxlbWVudHMocXVlc3Rpb25zOiBhbnlbXSk6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50W10ge1xuICAgIHJldHVybiAocXVlc3Rpb25zIHx8IFtdKS5tYXAocXVlc3Rpb24gPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6IHF1ZXN0aW9uLnRpdGxlLFxuICAgICAgICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlLFxuICAgICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBjZXJ0YWluIGVsZW1lbnQgaXMgdmlzaWJsZS5cbiAgICovXG4gIHB1YmxpYyBpc1Zpc2libGUodmlzaWJpbGl0eTogRWxlbWVudFZpc2liaWxpdHkpIHtcbiAgICByZXR1cm4gdGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSAhPT0gRWxlbWVudFZpc2liaWxpdHkuSW52aXNpYmxlIHx8ICF0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ID09PSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB2aXNpYmxlRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmZpbHRlcihlbCA9PiB0aGlzLmlzVmlzaWJsZShlbC52aXNpYmlsaXR5KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGhpZGRlbkVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5maWx0ZXIoZWwgPT4gIXRoaXMuaXNWaXNpYmxlKGVsLnZpc2liaWxpdHkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFbGVtZW50KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5maWx0ZXIoZWwgPT4gZWwubmFtZSA9PT0gbmFtZSlbMF07XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBlbGVtZW50IHZpc2liaWxpdHkgaGFzIGJlZW4gY2hhbmdlZC5cbiAgICovXG4gIHB1YmxpYyBvblZpc2libGVFbGVtZW50c0NuYWhnZWQgPSBuZXcgRXZlbnQ8KHNlbmRlcjogVmlzdWFsaXphdGlvblBhbmVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHZpc2libGVFbGVtZW50c0NuYWhnZWQoKSB7XG4gICAgaWYoIXRoaXMub25WaXNpYmxlRWxlbWVudHNDbmFoZ2VkLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMub25WaXNpYmxlRWxlbWVudHNDbmFoZ2VkLmZpcmUodGhpcywge30pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGdpdmVuIHZpc3VhbGl6ZXIuXG4gICAqL1xuICBwdWJsaWMgZGVzdHJveVZpc3VhbGl6ZXIodmlzdWFsaXplcjogVmlzdWFsaXplckJhc2UpIHtcbiAgICBpZiAodmlzdWFsaXplciBpbnN0YW5jZW9mIFNlbGVjdEJhc2UpIHtcbiAgICAgIHZpc3VhbGl6ZXIuc2V0U2VsZWN0aW9uKHVuZGVmaW5lZCk7XG4gICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmlzdWFsaXplci5vblVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB2aXN1YWxpemVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLnNwbGljZSh0aGlzLnZpc3VhbGl6ZXJzLmluZGV4T2YodmlzdWFsaXplciksIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgZ2l2ZW4gZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyByZW5kZXJWaXN1YWxpemVyKGVsZW1lbnQ6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50KSB7XG4gICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnMuZmlsdGVyKHEgPT4gcS5uYW1lID09PSBlbGVtZW50Lm5hbWUpWzBdO1xuICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcXVlc3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3Qgdml6dWFsaXplckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IGVsZW1lbnQuZGlzcGxheU5hbWU7XG5cbiAgICBxdWVzdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lO1xuICAgIHF1ZXN0aW9uQ29udGVudC5jbGFzc05hbWUgPSBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgKyBcIl9fY29udGVudFwiO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgKyBcIl9fdGl0bGVcIjtcblxuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh2aXp1YWxpemVyRWxlbWVudCk7XG4gICAgcXVlc3Rpb25FbGVtZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uQ29udGVudCk7XG5cbiAgICBjb25zdCB2aXN1YWxpemVyID0gdGhpcy5jcmVhdGVWaXp1YWxpemVyKFxuICAgICAgdml6dWFsaXplckVsZW1lbnQsXG4gICAgICBxdWVzdGlvbixcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhXG4gICAgKTtcblxuICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInJlbW92ZVF1ZXN0aW9uXCIsICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIFRvb2xiYXJIZWxwZXIuY3JlYXRlQnV0dG9uKHRvb2xiYXIsICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC52aXNpYmlsaXR5ID0gRWxlbWVudFZpc2liaWxpdHkuSW52aXNpYmxlO1xuICAgICAgICAgIHRoaXMuZGVzdHJveVZpc3VhbGl6ZXIodmlzdWFsaXplcik7XG4gICAgICAgICAgdGhpcy5sYXlvdXRFbmdpbmUucmVtb3ZlKFtxdWVzdGlvbkVsZW1lbnRdKTtcbiAgICAgICAgICB0aGlzLnBhbmVsQ29udGVudC5yZW1vdmVDaGlsZChxdWVzdGlvbkVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzQ25haGdlZCgpO1xuICAgICAgICB9LCAwICk7XG4gICAgICB9LCBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUJ1dHRvblwiKSk7XG4gICAgfSk7XG5cbiAgICBpZiAodmlzdWFsaXplciBpbnN0YW5jZW9mIFNlbGVjdEJhc2UpIHtcbiAgICAgIHZhciBmaWx0ZXJJbmZvID0ge1xuICAgICAgICB0ZXh0OiA8SFRNTEVsZW1lbnQ+dW5kZWZpbmVkLFxuICAgICAgICBlbGVtZW50OiA8SFRNTERpdkVsZW1lbnQ+dW5kZWZpbmVkLFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKHNlbGVjdGlvbjogYW55KSB7XG4gICAgICAgICAgaWYoISFzZWxlY3Rpb24gJiYgISFzZWxlY3Rpb24udmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lckhUTUwgPSBcIkZpbHRlcjogW1wiICsgc2VsZWN0aW9uLnRleHQgKyBcIl1cIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2aXN1YWxpemVyLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJxdWVzdGlvbkZpbHRlckluZm9cIiwgKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICAgIGZpbHRlckluZm8uZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpbHRlckluZm8uZWxlbWVudC5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fZmlsdGVyXCI7XG4gICAgXG4gICAgICAgIGZpbHRlckluZm8udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBmaWx0ZXJJbmZvLnRleHQuY2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25fX2ZpbHRlci10ZXh0XCI7XG4gICAgICAgIGZpbHRlckluZm8uZWxlbWVudC5hcHBlbmRDaGlsZChmaWx0ZXJJbmZvLnRleHQpO1xuICAgIFxuICAgICAgICBjb25zdCBmaWx0ZXJDbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBmaWx0ZXJDbGVhci5jbGFzc05hbWUgPSBcInN2YS10b29sYmFyX19idXR0b25cIjtcbiAgICAgICAgZmlsdGVyQ2xlYXIuaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNsZWFyQnV0dG9uXCIpO1xuICAgICAgICBmaWx0ZXJDbGVhci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIHZpc3VhbGl6ZXIuc2V0U2VsZWN0aW9uKHVuZGVmaW5lZCk7XG4gICAgICAgIH07XG4gICAgICAgIGZpbHRlckluZm8uZWxlbWVudC5hcHBlbmRDaGlsZChmaWx0ZXJDbGVhcik7XG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoZmlsdGVySW5mby5lbGVtZW50KTtcblxuICAgICAgICBmaWx0ZXJJbmZvLnVwZGF0ZSh2aXN1YWxpemVyLnNlbGVjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlckluZm8uZWxlbWVudDtcbiAgICAgIH0pO1xuXG4gICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IChcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZTogYW55LFxuICAgICAgICBzZWxlY3RlZFRleHQ6IHN0cmluZ1xuICAgICAgKSA9PiB7XG4gICAgICAgIGZpbHRlckluZm8udXBkYXRlKHsgdmFsdWU6IHNlbGVjdGVkVmFsdWUsIHRleHQ6IHNlbGVjdGVkVGV4dCB9KTtcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcihxdWVzdGlvbi5uYW1lLCBzZWxlY3RlZFZhbHVlKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmlzdWFsaXplci5yZW5kZXIoKTtcbiAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLnB1c2godmlzdWFsaXplcik7XG5cbiAgICByZXR1cm4gcXVlc3Rpb25FbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgYWxsIHF1ZXN0aW9ucyBpbnRvIGdpdmVuIEhUTUwgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGxldCBsYXlvdXRFbmdpbmU6IGFueSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdldExheW91dEVuZ2luZSA9ICgpID0+IGxheW91dEVuZ2luZTtcblxuICAgIHRoaXMucGFuZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnBhbmVsQ29udGVudC5jbGFzc05hbWUgPSBcInN2YS1ncmlkXCI7XG5cbiAgICB0aGlzLnZpc2libGVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgbGV0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyVmlzdWFsaXplcihlbGVtZW50KTtcbiAgICAgIHRoaXMucGFuZWxDb250ZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLnNob3dIZWFkZXIpIHtcbiAgICAgIGNvbnN0IHBhbmVsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBhbmVsSGVhZGVyLmNsYXNzTmFtZSA9IFwic3ZhLXBhbmVsX19oZWFkZXJcIjtcbiAgICAgIGNvbnN0IHRvb2xvYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvb2xvYmFyLmNsYXNzTmFtZSA9IFwic3ZhLXRvb2xiYXJcIjtcbiAgICAgIHRoaXMuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xvYmFyKTtcbiAgICAgIHBhbmVsSGVhZGVyLmFwcGVuZENoaWxkKHRvb2xvYmFyKTtcbiAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChwYW5lbEhlYWRlcik7XG4gICAgfVxuICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnBhbmVsQ29udGVudCk7XG5cbiAgICB2YXIgbW92ZUhhbmRsZXIgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgICB2YXIgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cy5zcGxpY2UoZGF0YS5mcm9tSW5kZXgsIDEpO1xuICAgICAgdGhpcy5fZWxlbWVudHMuc3BsaWNlKGRhdGEudG9JbmRleCwgMCwgZWxlbWVudHNbMF0pO1xuICAgIH1cblxuICAgIGxheW91dEVuZ2luZSA9IG5ldyBNdXVyaSh0aGlzLnBhbmVsQ29udGVudCwge1xuICAgICAgaXRlbXM6IFwiLnN2YS1xdWVzdGlvblwiLFxuICAgICAgZHJhZ0VuYWJsZWQ6IHRydWVcbiAgICB9KTtcbiAgICBsYXlvdXRFbmdpbmUub24oXCJtb3ZlXCIsIG1vdmVIYW5kbGVyKTtcbiAgICAhIXdpbmRvdyAmJiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgVUlFdmVudCgncmVzaXplJykpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGNvbnN0IHJlc2V0RmlsdGVyQnV0dG9uID0gVG9vbGJhckhlbHBlci5jcmVhdGVCdXR0b24odG9vbGJhciwgKCkgPT4ge1xuICAgICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKHZpc3VhbGl6ZXIgPT4ge1xuICAgICAgICBpZiAodmlzdWFsaXplciBpbnN0YW5jZW9mIFNlbGVjdEJhc2UpIHtcbiAgICAgICAgICB2aXN1YWxpemVyLnNldFNlbGVjdGlvbih1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicmVzZXRGaWx0ZXJcIikpO1xuICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQocmVzZXRGaWx0ZXJCdXR0b24pO1xuXG4gICAgbGV0IGFkZEVsZW1lbnRTZWxlY3RvcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgYWRkRWxlbWVudFNlbGVjdG9yVXBkYXRlciA9IChwYW5lbDogVmlzdWFsaXphdGlvblBhbmVsLCBfOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gdGhpcy5oaWRkZW5FbGVtZW50cztcbiAgICAgIGlmIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBUb29sYmFySGVscGVyLmNyZWF0ZVNlbGVjdG9yKHRvb2xiYXIsXG4gICAgICAgICAgWzxhbnk+e25hbWU6IHVuZGVmaW5lZCwgZGlzcGxheU5hbWU6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJhZGRFbGVtZW50XCIpfV0uY29uY2F0KGhpZGRlbkVsZW1lbnRzKS5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogZWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICB0ZXh0OiBlbGVtZW50LmRpc3BsYXlOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIChvcHRpb246IGFueSkgPT4gZmFsc2UsXG4gICAgICAgICAgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgZWxlbWVudC52aXNpYmlsaXR5ID0gRWxlbWVudFZpc2liaWxpdHkuVmlzaWJsZTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyVmlzdWFsaXplcihlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMucGFuZWxDb250ZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmxheW91dEVuZ2luZS5hZGQoW3F1ZXN0aW9uRWxlbWVudF0pO1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlRWxlbWVudHNDbmFoZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgJiYgdG9vbGJhci5yZXBsYWNlQ2hpbGQoc2VsZWN0V3JhcHBlciwgYWRkRWxlbWVudFNlbGVjdG9yKSB8fCB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgPSBzZWxlY3RXcmFwcGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkRWxlbWVudFNlbGVjdG9yICYmIHRvb2xiYXIucmVtb3ZlQ2hpbGQoYWRkRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgYWRkRWxlbWVudFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyKHRoaXMsIHt9KTtcbiAgICB0aGlzLm9uVmlzaWJsZUVsZW1lbnRzQ25haGdlZC5hZGQoYWRkRWxlbWVudFNlbGVjdG9yVXBkYXRlcik7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdmlzdWFsaXplciBhbmQgYWxsIGlubmVyIGNvbnRlbnQuXG4gICAqL1xuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBsZXQgbGF5b3V0RW5naW5lID0gISF0aGlzLmdldExheW91dEVuZ2luZSAmJiB0aGlzLmdldExheW91dEVuZ2luZSgpO1xuICAgIGlmKCEhbGF5b3V0RW5naW5lKSB7XG4gICAgICBsYXlvdXRFbmdpbmUub2ZmKFwibW92ZVwiKTtcbiAgICAgIGxheW91dEVuZ2luZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdldExheW91dEVuZ2luZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhpcy5wYW5lbENvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKHZpc3VhbGl6ZXIgPT4ge1xuICAgICAgdmlzdWFsaXplci5vblVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMudmlzdWFsaXplcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHZpc3VhbGl6ZXIgYW5kIGFsbCBpbm5lciBjb250ZW50LlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShoYXJkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZihoYXJkICYmIHRoaXMudmlzdWFsaXplcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2godmlzdWFsaXplciA9PlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHZpc3VhbGl6ZXIudXBkYXRlKHRoaXMuZmlsdGVyZWREYXRhKSwgMTApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGxheW91dCBvZiB2aXN1YWxpemVyIGlubmVyIGNvbnRlbnQuXG4gICAqL1xuICBwdWJsaWMgbGF5b3V0KCkge1xuICAgIGNvbnN0IGxheW91dEVuZ2luZSA9IHRoaXMubGF5b3V0RW5naW5lO1xuICAgIGlmICghIWxheW91dEVuZ2luZSkge1xuICAgICAgbGF5b3V0RW5naW5lLnJlZnJlc2hJdGVtcygpO1xuICAgICAgbGF5b3V0RW5naW5lLmxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGZpbHRlciBieSBxdWVzdGlvbiBuYW1lIGFuZCB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBhcHBseUZpbHRlcihcbiAgICBxdWVzdGlvbk5hbWU6IHN0cmluZyxcbiAgICBzZWxlY3RlZFZhbHVlOiBhbnlcbiAgKSB7XG4gICAgdmFyIGZpbHRlckNoYW5nZWQgPSB0cnVlO1xuICAgIGlmIChzZWxlY3RlZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZpbHRlckNoYW5nZWQgPSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdICE9PSBzZWxlY3RlZFZhbHVlO1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXSA9IHNlbGVjdGVkVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlckNoYW5nZWQgPSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdICE9PSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5maWx0ZXJWYWx1ZXNbcXVlc3Rpb25OYW1lXTtcbiAgICB9XG4gICAgaWYoZmlsdGVyQ2hhbmdlZCkge1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuZmlsdGVyVmFsdWVzKS5zb21lKFxuICAgICAgICAgIGtleSA9PiBpdGVtW2tleV0gIT09IHRoaXMuZmlsdGVyVmFsdWVzW2tleV1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB2aXN1emxpemVyIGJ5IHF1ZXN0aW9uLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVZpenVhbGl6ZXIoXG4gICAgdml6dWFsaXplckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+XG4gICk6IFZpc3VhbGl6ZXJCYXNlIHtcbiAgICB2YXIgY3JlYXRvcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci5nZXRWaXN1YWxpemVycyhxdWVzdGlvbi5nZXRUeXBlKCkpO1xuICAgIHZhciB2aXN1YWxpemVycyA9IGNyZWF0b3JzLm1hcChjcmVhdG9yID0+IG5ldyBjcmVhdG9yKHZpenVhbGl6ZXJFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSkpO1xuICAgIGlmKHZpc3VhbGl6ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCB2aXN1YWxpemVyID0gbmV3IEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyKHZpc3VhbGl6ZXJzLCB2aXp1YWxpemVyRWxlbWVudCwgcXVlc3Rpb24sIGRhdGEpO1xuICAgICAgcmV0dXJuIHZpc3VhbGl6ZXI7XG4gICAgfVxuICAgIHJldHVybiB2aXN1YWxpemVyc1swXTtcbiAgfVxuXG4gIGdldCBzaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93SGVhZGVyO1xuICB9XG4gIHNldCBzaG93SGVhZGVyKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYobmV3VmFsdWUgIT0gdGhpcy5fc2hvd0hlYWRlcikge1xuICAgICAgdGhpcy5fc2hvd0hlYWRlciA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUodHJ1ZSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsLnRzIiwiaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XG5pbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXROb2RlLCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgZGF0YS5mb3JFYWNoKFxuICAgICAgZGF0YUl0ZW0gPT5cbiAgICAgICAgISFkYXRhSXRlbVtxdWVzdGlvbi5uYW1lXSAmJlxuICAgICAgICAodGhpcy5kYXRhID0gdGhpcy5kYXRhLmNvbmNhdChkYXRhSXRlbVtxdWVzdGlvbi5uYW1lXSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXN0aW9ucygpIHtcbiAgICBjb25zdCBwYW5lbGR5bmFtaWM6IFF1ZXN0aW9uUGFuZWxEeW5hbWljTW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgcmV0dXJuIHBhbmVsZHluYW1pYy5wYW5lbHNbMF0ucXVlc3Rpb25zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB2aXNQYW5lbCA9IG5ldyBWaXN1YWxpemF0aW9uUGFuZWwoXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bW1hcnlDb250YWluZXJcIiksXG4gICAgICB0aGlzLmdldFF1ZXN0aW9ucygpLFxuICAgICAgdGhpcy5kYXRhXG4gICAgKTtcbiAgICB2aXNQYW5lbC5yZW5kZXIoKTtcbiAgfVxuXG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJwYW5lbGR5bmFtaWNcIixcbiAgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1xuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uUGFuZWxEeW5hbWljLnRzIiwiaW1wb3J0IHsgc3RvcFdvcmRzIH0gZnJvbSBcIi4vZW5nbGlzaFwiO1xuXG52YXIgc3RvcFdvcmRzRGljdGlvbmFyeTogeyBbaW5kZXg6IHN0cmluZ106IEFycmF5PHN0cmluZz4gfSA9IHt9O1xuc3RvcFdvcmRzRGljdGlvbmFyeVtcImVuXCJdID0gc3RvcFdvcmRzO1xuXG5leHBvcnQgdmFyIHRleHRIZWxwZXIgPSB7XG4gIGdldFN0b3BXb3JkczogKGxvY2FsZTogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIHJldHVybiBzdG9wV29yZHNEaWN0aW9uYXJ5W2xvY2FsZSB8fCBcImVuXCJdIHx8IFtdO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25TZWxlY3RCYXNlLCBJdGVtVmFsdWUgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRvb2xiYXJIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFzZSBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IEl0ZW1WYWx1ZSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogc3RyaW5nW107XG4gIHByb3RlY3RlZCBjaGFydFR5cGU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwcm90ZWN0ZWQgc2V0Q2hhcnRUeXBlKGNoYXJ0VHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jaGFydFR5cGVzLmluZGV4T2YoY2hhcnRUeXBlKSAhPT0gLTEgJiZcbiAgICAgIHRoaXMuY2hhcnRUeXBlICE9PSBjaGFydFR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gY2hhcnRUeXBlO1xuICAgICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICAgICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNoYXJ0KCkge31cblxuICBzZXRTZWxlY3Rpb24oaXRlbTogSXRlbVZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIHRoaXMub25EYXRhSXRlbVNlbGVjdGVkKChpdGVtICYmIGl0ZW0udmFsdWUpIHx8IHVuZGVmaW5lZCwgKGl0ZW0gJiYgaXRlbS50ZXh0KSB8fCBcIlwiKTtcbiAgfVxuICBnZXQgc2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIG9uRGF0YUl0ZW1TZWxlY3RlZDogKHNlbGVjdGVkVmFsdWU6IGFueSwgc2VsZWN0ZWRUZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuY3JlYXRlQ2hhcnQoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGFydE5vZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IodG9vbGJhcixcbiAgICAgICAgdGhpcy5jaGFydFR5cGVzLm1hcChjaGFydFR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogY2hhcnRUeXBlLFxuICAgICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYXJ0VHlwZV9cIiArIGNoYXJ0VHlwZSlcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgKG9wdGlvbjogYW55KSA9PiB0aGlzLmNoYXJ0VHlwZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgICAoZTogYW55KSA9PiB0aGlzLnNldENoYXJ0VHlwZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICk7XG4gICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xuICAgIH1cbiAgICBzdXBlci5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gIH1cblxuICB2YWx1ZXNTb3VyY2UoKTogYW55W10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gPFF1ZXN0aW9uU2VsZWN0QmFzZT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBxdWVzdGlvbltcImFjdGl2ZUNob2ljZXNcIl07XG4gIH1cblxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgdmFsdWVzOiBBcnJheTxhbnk+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5xdWVzdGlvbi5oYXNPdGhlcikgdmFsdWVzLnVuc2hpZnQoXCJvdGhlclwiKTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgbGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+XG4gICAgICBJdGVtVmFsdWUuZ2V0VGV4dE9ySHRtbEJ5VmFsdWUodGhpcy52YWx1ZXNTb3VyY2UoKSwgY2hvaWNlLnZhbHVlKVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5xdWVzdGlvbi5oYXNPdGhlcikgbGFiZWxzLnVuc2hpZnQoXCJPdGhlclwiKTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3MgPSB2YWx1ZXMubWFwKHYgPT4gMCk7XG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbdGhpcy5xdWVzdGlvbi5uYW1lXTtcbiAgICAgIGlmICghIXJvd1ZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHJvd1ZhbHVlLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgc3RhdGlzdGljc1tpbmRleF0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3dWYWx1ZSA9PSB2YWwpIHtcbiAgICAgICAgICAgICAgc3RhdGlzdGljc1tpbmRleF0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbc3RhdGlzdGljc107XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3RCYXNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUGxvdGx5XCIsXCJjb21tb25qczJcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJjb21tb25qc1wiOlwicGxvdGx5LmpzLWRpc3RcIixcImFtZFwiOlwicGxvdGx5LmpzLWRpc3RcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uLCBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uLCBDb2x1bW5EYXRhVHlwZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuaW1wb3J0IFwiLi9kYXRhdGFibGVzLnNjc3NcIjtcblxuaW50ZXJmYWNlIERhdGFUYWJsZXNPcHRpb25zIHtcbiAgYnV0dG9uczpcbiAgICB8IGJvb2xlYW5cbiAgICB8IHN0cmluZ1tdXG4gICAgfCBhbnlbXVxuICAgIHwgYW55O1xuXG4gIGRvbTogc3RyaW5nO1xuXG4gIG9yZGVyRml4ZWQ6IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBBcnJheTxBcnJheTxudW1iZXIgfCBzdHJpbmc+PiB8IG9iamVjdDtcblxuICByb3dHcm91cDogYm9vbGVhbiB8IGFueTtcblxuICBoZWFkZXJDYWxsYmFjazogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlcyB7XG4gIHByaXZhdGUgZGF0YXRhYmxlQXBpOiBhbnk7XG4gIHByaXZhdGUgdGFibGVEYXRhOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBpcyBmaXJlZCBjb2x1bW5zIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gY2hhbmdlZC5cbiAgICogPGJyLz4gc2VuZGVyIHRoZSBkYXRhdGFibGVzIGFkYXB0ZXJcbiAgICogPGJyLz4gb3B0aW9ucy5zdXJ2ZXkgY3VycmVudCBzdXJ2ZXlcbiAgICogQHNlZSBnZXRDb2x1bW5zXG4gICAqL1xuICBwdWJsaWMgY29sdW1uc0NoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IERhdGFUYWJsZXMsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IERhdGFUYWJsZXMsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJpdmF0ZSBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIHByaXZhdGUgb3B0aW9uczogRGF0YVRhYmxlc09wdGlvbnMsXG4gICAgcHJpdmF0ZSBfY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPiA9IFtdLFxuICAgIHByaXZhdGUgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgdGhpcy5oZWFkZXJCdXR0b25DcmVhdG9ycyA9IFsgdGhpcy5jcmVhdGVHcm91cGluZ0J1dHRvbiwgdGhpcy5jcmVhdGVIaWRlQnV0dG9uLCB0aGlzLmNyZWF0ZUFkZENvbHVtbkJ1dHRvbiwgdGhpcy5jcmVhdGVNb3ZlVG9EZXRhaWxCdXR0b24gXTtcbiAgICB0aGlzLmRldGFpbEJ1dHRvbkNyZWF0b3JzID0gWyB0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbiBdO1xuICAgIGlmKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdFRhYmxlRGF0YShkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgdmFyIGRhdGFJdGVtOiBhbnkgPSB7fTtcbiAgICAgIHRoaXMuc3VydmV5LmRhdGEgPSBpdGVtO1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSBpdGVtW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShjb2x1bW4ubmFtZSk7XG4gICAgICAgIGlmKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uZGlzcGxheVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFJdGVtW2NvbHVtbi5uYW1lXSA9IHR5cGVvZiBkaXNwbGF5VmFsdWUgPT09IFwic3RyaW5nXCIgPyBkaXNwbGF5VmFsdWUgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkNvbHVtbnNDaGFuZ2VkKCkge1xuICAgIHRoaXMuY29sdW1uc0NoYW5nZWQuZmlyZSh0aGlzLCB7IHN1cnZleTogdGhpcy5zdXJ2ZXkgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDb2x1bW5zKHN1cnZleTogU3VydmV5TW9kZWwpIHtcbiAgICByZXR1cm4gdGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCkubWFwKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAocXVlc3Rpb24udGl0bGUgfHwgXCJcIikudHJpbSgpIHx8IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRhdGFUeXBlOiBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiID8gQ29sdW1uRGF0YVR5cGUuVGV4dCA6IENvbHVtbkRhdGFUeXBlLkZpbGVMaW5rLFxuICAgICAgICB2aXNpYmlsaXR5OiBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiID8gQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGlzVmlzaWJsZSh2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlIHx8ICF0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbHVtbnMoY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPikge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgaWYoaGFyZCkge1xuICAgICAgICB0aGlzLmluaXRUYWJsZURhdGEodGhpcy5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVuZGVyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ3JvdXBCeTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy9pZighdGhpcy50YXJnZXROb2RlKSByZXR1cm47XG4gICAgY29uc3QgdGFibGVOb2RlID0gdGhpcy50YXJnZXROb2RlLmNoaWxkcmVuWzBdO1xuICAgIGlmICgoPGFueT4kLmZuKS5EYXRhVGFibGUuaXNEYXRhVGFibGUodGFibGVOb2RlKSApIHtcbiAgICAgICQodGFibGVOb2RlKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YXRhYmxlQXBpID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRhYmxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB2YXIgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xuICAgIHZhciBjb2x1bW5zRGF0YTogYW55ID0gY29sdW1ucy5tYXAoKGM6IGFueSkgPT4gYy5kYXRhKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge1xuICAgICAgYnV0dG9uczogW1wiY29weVwiLCBcImNzdlwiLCBcInByaW50XCJdLFxuICAgICAgZG9tOiBcIkJsZnJ0aXBcIixcbiAgICAgIGRhdGE6IHRoaXMudGFibGVEYXRhLFxuICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICBkZXRhaWxzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAvLyBvcmRlckZpeGVkOiBbWzEsIFwiYXNjXCJdXSxcbiAgICAgIHJvd0dyb3VwOiB7XG4gICAgICAgIGRhdGFTcmM6IGNvbHVtbnNEYXRhWzBdLFxuICAgICAgICBlbmRSZW5kZXI6IChyb3dzOiBhbnksIGdyb3VwOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gXCJDb3VudDogXCIgKyByb3dzLmRhdGEoKS5jb3VudCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VsZWN0OiBcImFwaVwiLFxuICAgICAgaGVhZGVyQ2FsbGJhY2s6ICh0aGVhZDogYW55LCBkYXRhOiBhbnksIHN0YXJ0OiBhbnksIGVuZDogYW55LCBkaXNwbGF5OiBhbnkpID0+IHtcbiAgICAgICAgdmFyIGRhdGF0YWJsZUFwaSA9ICQodGFibGVOb2RlKVxuICAgICAgICAgIC5kYXRhVGFibGUoKVxuICAgICAgICAgIC5hcGkoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAkKHRoZWFkKVxuICAgICAgICAuY2hpbGRyZW4oXCJ0aFwiKVxuICAgICAgICAuZWFjaChmdW5jdGlvbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgICAgdmFyICR0aE5vZGUgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICghIWNvbHVtbnNEYXRhW2luZGV4XSAmJiAkdGhOb2RlLmhhcyhcImJ1dHRvblwiKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlLWFjdGlvbi1jb250YWluZXJcIjtcbiAgICAgICAgICAgIHNlbGYuaGVhZGVyQnV0dG9uQ3JlYXRvcnMuZm9yRWFjaChjcmVhdG9yID0+IHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBjcmVhdG9yKGRhdGF0YWJsZUFwaSwgaW5kZXgsIGNvbHVtbnNEYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgIGlmKCEhZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkdGhOb2RlLnByZXBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgdmFyIGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBmaWx0ZXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGUtZmlsdGVyLWNvbnRhaW5lclwiO1xuICAgICAgICAgICAgZmlsdGVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTZWFyY2guLi4nIC8+XCI7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gZGF0YXRhYmxlQXBpLmNvbHVtbihpbmRleCk7XG4gICAgICAgICAgICAkKCdpbnB1dCcsICQoZmlsdGVyQ29udGFpbmVyKSkub24oJ2NsaWNrJywgZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgICAgICAgICAgICQoJ2lucHV0JywgJChmaWx0ZXJDb250YWluZXIpKS5vbigna2V5dXAgY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcykudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChjb2x1bW4uc2VhcmNoKCkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLnNlYXJjaCh2YWx1ZSkuZHJhdygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICR0aE5vZGUuYXBwZW5kKGZpbHRlckNvbnRhaW5lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XG4gICAgdGFibGVOb2RlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgdGFibGVOb2RlLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlIGRpc3BsYXkgcmVzcG9uc2l2ZSBkYXRhVGFibGVcIjtcblxuICAgIGNvbnN0IGRhdGF0YWJsZUFwaVJlZiA9IHRoaXMuZGF0YXRhYmxlQXBpID0gJCh0YWJsZU5vZGUpLkRhdGFUYWJsZShvcHRpb25zKTtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaVxuICAgICAgLnJvd0dyb3VwKClcbiAgICAgIC5lbmFibGUoZmFsc2UpXG4gICAgICAuZHJhdygpO1xuXG4gICAgLy8gdGhpcy5kYXRhdGFibGVBcGkub24oXCJyb3dncm91cC1kYXRhc3JjXCIsIChlLCBkdCwgdmFsKSA9PiB7XG4gICAgLy8gICB0aGlzLmRhdGF0YWJsZUFwaS5vcmRlci5maXhlZCh7IHByZTogW1tjb2x1bW5zRGF0YS5pbmRleE9mKHZhbCksIFwiYXNjXCJdXSB9KS5kcmF3KCk7XG4gICAgLy8gfSk7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkub24oJ2NvbHVtbi1yZW9yZGVyJywgKGU6IGFueSwgc2V0dGluZ3M6IGFueSwgZGV0YWlsczogYW55KSA9PiB7XG4gICAgICB2YXIgY29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGRldGFpbHMuZnJvbSwgMSk7XG4gICAgICB0aGlzLl9jb2x1bW5zLnNwbGljZShkZXRhaWxzLnRvLCAwLCBjb2x1bW5zWzBdKTtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5fY29sdW1ucyk7XG4gICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICB9KTtcbiAgICAkKHRhYmxlTm9kZSkuZmluZCgndGJvZHknKS5vbignY2xpY2snLCAndGQuc2EtZGF0YXRhYmxlLWFjdGlvbi1jb2x1bW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdHIgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG4gICAgICB2YXIgcm93ID0gZGF0YXRhYmxlQXBpUmVmLnJvdyh0cik7XG5cbiAgICAgIGlmIChyb3cuY2hpbGQuaXNTaG93bigpKSB7XG4gICAgICAgICAgcm93LmNoaWxkLmhpZGUoKTtcbiAgICAgICAgICB0ci5yZW1vdmVDbGFzcygnc2EtZGF0YXRhYmxlLWRldGFpbC1yb3cnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHJvdy5jaGlsZChzZWxmLmNyZWF0ZURldGFpbE1hcmt1cChyb3cuZGF0YSgpKSkuc2hvdygpO1xuICAgICAgICAgIHRyLmFkZENsYXNzKCdzYS1kYXRhdGFibGUtZGV0YWlsLXJvdycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZURldGFpbE1hcmt1cChkYXRhOiBhbnkpIHtcbiAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGFibGUuY2VsbFBhZGRpbmcgPSBcIjVcIjtcbiAgICB0YWJsZS5jZWxsU3BhY2luZyA9IFwiMFwiO1xuICAgIHRhYmxlLmJvcmRlciA9IFwiMFwiO1xuICAgIHRhYmxlLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlLWRldGFpbFwiO1xuXG4gICAgdGhpcy5jb2x1bW5zXG4gICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubG9jYXRpb24gPT09IFF1ZXN0aW9uTG9jYXRpb24uUm93ICYmIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KSlcbiAgICAgIC5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHZhciB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMS50ZXh0Q29udGVudCA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgdmFyIHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQyLnRleHRDb250ZW50ID0gZGF0YVtjb2x1bW4ubmFtZV07XG4gICAgICAgIHZhciB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRoaXMuZGV0YWlsQnV0dG9uQ3JlYXRvcnMuZm9yRWFjaChjcmVhdG9yID0+IHRkMy5hcHBlbmRDaGlsZChjcmVhdG9yKGNvbHVtbi5uYW1lKSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuXG4gICAgaWYoISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5yZXNwb25zaXZlLmhhc0hpZGRlbigpKSB7XG4gICAgICB2YXIgY29sdW1uc1Zpc2liaWxpdHkgPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zKCkucmVzcG9uc2l2ZUhpZGRlbigpO1xuICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLmRhdGF0YWJsZUFwaS5zZXR0aW5ncygpLmluaXQoKS5jb2x1bW5zO1xuICAgICAgZm9yKHZhciBpbmRleCA9IDA7IGluZGV4IDwgY29sdW1uc1Zpc2liaWxpdHkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmKCFjb2x1bW5zVmlzaWJpbGl0eVtpbmRleF0pIHtcbiAgICAgICAgICB2YXIgY29sdW1uID0gY29sdW1uc1tpbmRleF07XG4gICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICB2YXIgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgIHRkMS50ZXh0Q29udGVudCA9IGNvbHVtbi5zVGl0bGU7XG4gICAgICAgICAgdmFyIHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICB0ZDIudGV4dENvbnRlbnQgPSBkYXRhW2NvbHVtbi5tRGF0YV07XG4gICAgICAgICAgdmFyIHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAvL3RoaXMuZGV0YWlsQnV0dG9uQ3JlYXRvcnMuZm9yRWFjaChjcmVhdG9yID0+IHRkMy5hcHBlbmRDaGlsZChjcmVhdG9yKGNvbHVtbi5tRGF0YSkpKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoISF0aGlzLnJlbmRlckRldGFpbEFjdGlvbnMpIHtcbiAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgdmFyIHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgdmFyIHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgIHRoaXMucmVuZGVyRGV0YWlsQWN0aW9ucyh0ZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG5cbiAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChjb250YWluZXI6IEhUTUxFbGVtZW50LCBkYXRhOiBhbnkpID0+IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBoZWFkZXJCdXR0b25DcmVhdG9yczogQXJyYXk8KFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApID0+IEhUTUxFbGVtZW50PiA9IFtdO1xuXG4gIHB1YmxpYyBkZXRhaWxCdXR0b25DcmVhdG9yczogQXJyYXk8KFxuICAgIGNvbHVtbk5hbWU/OiBzdHJpbmdcbiAgKSA9PiBIVE1MRWxlbWVudD4gPSBbXTtcblxuICBjcmVhdGVTZWxlY3RCdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2VsZWN0QnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgKDxhbnk+ZGF0YXRhYmxlQXBpLmNvbHVtbnMoKSkuZGVzZWxlY3QoKTtcbiAgICAgICg8YW55PmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sSWR4KSkuc2VsZWN0KCk7XG4gICAgICAhIXRoaXMub25Db2x1bW5TZWxlY3RlZCAmJiB0aGlzLm9uQ29sdW1uU2VsZWN0ZWQoY29sdW1uTmFtZSk7XG4gICAgfTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNyZWF0ZUdyb3VwaW5nQnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImdyb3VwQnV0dG9uXCIpO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cEJ5LmluZGV4T2YoY29sdW1uTmFtZSk7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBCeS5wdXNoKGNvbHVtbk5hbWUpO1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInVuZ3JvdXBCdXR0b25cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImdyb3VwQnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmdyb3VwQnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgZGF0YXRhYmxlQXBpLnJvd0dyb3VwKCkuZW5hYmxlKHRoaXMuZ3JvdXBCeS5sZW5ndGggPiAwKTtcbiAgICAgIGlmICh0aGlzLmdyb3VwQnkubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXRhdGFibGVBcGkucm93R3JvdXAoKS5kYXRhU3JjKDxhbnk+dGhpcy5ncm91cEJ5KTtcbiAgICAgIH1cbiAgICAgIGRhdGF0YWJsZUFwaS5kcmF3KCk7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgY3JlYXRlSGlkZUJ1dHRvbiA9IChcbiAgICBkYXRhdGFibGVBcGk6IGFueSxcbiAgICBjb2xJZHg6IG51bWJlcixcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcbiAgKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQ29sdW1uXCIpO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF0udmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlO1xuICAgICAgZGF0YXRhYmxlQXBpLmNvbHVtbnMoW2NvbElkeF0pLnZpc2libGUoZmFsc2UpO1xuXG4gICAgICAvLyBUT0RPOiBVc2UgZGF0YXRhYmxlcyB0byB1cGRhdGUgaGVhZGVycyAoc2hvdyBjb2x1bW5zIG9wdGlvbnMpXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVBZGRDb2x1bW5CdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0b3Iub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi52aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSk7XG5cbiAgICBpZihoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dDb2x1bW5cIik7XG4gICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHZhciB0ZXh0ID0gY29sdW1uLmRpc3BsYXlOYW1lO1xuICAgICAgICBpZih0ZXh0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICAgICAgICBvcHRpb24udGl0bGUgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGNvbHVtbi5uYW1lO1xuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZWN0b3Iub25jaGFuZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYoISQodGhpcykudmFsKCkpIHJldHVybjtcblxuICAgICAgdmFyIGNvbHVtbiA9IHNlbGYuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gJCh0aGlzKS52YWwoKSlbMF07XG4gICAgICBjb2x1bW4udmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgICAgIGRhdGF0YWJsZUFwaS5jb2x1bW5zKFtzZWxmLl9jb2x1bW5zLmluZGV4T2YoY29sdW1uKV0pLnZpc2libGUodHJ1ZSk7XG5cbiAgICAgIC8vIFRPRE86IFVzZSBkYXRhdGFibGVzIHRvIHVwZGF0ZSBoZWFkZXJzIChzaG93IGNvbHVtbnMgb3B0aW9ucylcbiAgICAgIHNlbGYudXBkYXRlKCk7XG5cbiAgICAgIHNlbGYub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG5cbiAgY3JlYXRlTW92ZVRvRGV0YWlsQnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1vdmVUb0RldGFpbFwiKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdLmxvY2F0aW9uID0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3c7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVTaG93QXNDb2x1bW5CdXR0b24gPSAoXG4gICAgY29sdW1uTmFtZT86IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdLmxvY2F0aW9uID0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3c7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBnZXRDb2x1bW5zKCk6IEFycmF5PE9iamVjdD4ge1xuICAgIGNvbnN0IGF2YWlsYWJsZUNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubG9jYXRpb24gPT09IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uICYmIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KSk7XG4gICAgY29uc3QgY29sdW1uczogYW55ID0gYXZhaWxhYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGNvbHVtbi5uYW1lLFxuICAgICAgICBzVGl0bGU6IHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnRpdGxlIHx8IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgdmlzaWJsZTogY29sdW1uLnZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlLFxuICAgICAgICBtUmVuZGVyOiAoZGF0YTogb2JqZWN0LCB0eXBlOiBzdHJpbmcsIHJvdzogYW55KSA9PiByb3dbY29sdW1uLm5hbWVdXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFt7XG4gICAgICBcImNsYXNzTmFtZVwiOiAnc2EtZGF0YXRhYmxlLWFjdGlvbi1jb2x1bW4nLFxuICAgICAgXCJvcmRlcmFibGVcIjogZmFsc2UsXG4gICAgICBcImRhdGFcIjogbnVsbCxcbiAgICAgIFwiZGVmYXVsdENvbnRlbnRcIjogJycsXG4gICAgfV0uY29uY2F0KGNvbHVtbnMpO1xuICB9XG5cbiAgcHVibGljIG9uQ29sdW1uU2VsZWN0ZWQ6IChkYXRhTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zLmFkanVzdCgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YXRhYmxlcy9kYXRhdGFibGVzLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcmF0aW5nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXRyaXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Jvb2xlYW5cIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvaW5kZXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCBcIi4vdGV4dC5zY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiBcInRleHRcIjtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBBcnJheTxBcnJheTxzdHJpbmc+PiA9IFtdO1xyXG4gICAgbGV0IGNvbHVtbnNDb3VudCA9IDA7XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBjb25zdCBkYXRhU3RyaW5nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xyXG4gICAgICAgICAgZGF0YVN0cmluZ3MuY29uY2F0KHJvd1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiByb3dWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb3dWYWx1ZSkuZm9yRWFjaChrZXkgPT4gZGF0YVN0cmluZ3MucHVzaChyb3dWYWx1ZVtrZXldKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhU3RyaW5ncy5wdXNoKHJvd1ZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZGF0YVN0cmluZ3MpO1xyXG4gICAgICAgIGlmKGRhdGFTdHJpbmdzLmxlbmd0aCA+IGNvbHVtbnNDb3VudCkge1xyXG4gICAgICAgICAgICBjb2x1bW5zQ291bnQgPSBkYXRhU3RyaW5ncy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBjb2x1bW5zQ291bnQsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb2x1bW5zQ291bnQsIGRhdGF9ICA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVtcHR5VGV4dE5vZGUuaW5uZXJIVE1MID0gXCJUaGVyZSBhcmUgbm8gcmVzdWx0cyB5ZXRcIjtcclxuXHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YWJsZU5vZGUgPSA8SFRNTFRhYmxlRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS10ZXh0LXRhYmxlXCI7XHJcbiAgICB0YWJsZU5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2gocm93RGF0YSA9PiB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY29sdW1uc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZC5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVfX2NlbGxcIjtcclxuICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSByb3dEYXRhW2ldO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZU5vZGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVfX2NvbnRhaW5lclwiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFRleHQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFRleHQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgVGV4dCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LnRzIiwiaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IG1hdHJpeGR5bmFtaWM6IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICBjb25zdCB2aXNpYmxlUm93cyA9IG1hdHJpeGR5bmFtaWMudmlzaWJsZVJvd3M7XG5cbiAgICBpZiAodmlzaWJsZVJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gdmlzaWJsZVJvd3NbMF0uY2VsbHMubWFwKGMgPT4gYy5xdWVzdGlvbik7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcIm1hdHJpeGR5bmFtaWNcIixcbiAgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcbik7XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJtYXRyaXhkcm9wZG93blwiLFxuICBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pY1xuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uTWF0cml4RHluYW1pYy50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgV29yZENsb3VkTGliIGZyb20gXCJ3b3JkY2xvdWRcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4uL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgdGV4dEhlbHBlciB9IGZyb20gXCIuL3N0b3B3b3Jkcy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgV29yZENsb3VkIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJ3b3JkY2xvdWRcIjtcbiAgfVxuXG4gIHByaXZhdGUgY2xvdWQ6IGFueTtcblxuICBnZXREYXRhKCkge1xuICAgIGxldCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcblxuICAgIGxldCBzdG9wV29yZHMgPSB0ZXh0SGVscGVyLmdldFN0b3BXb3JkcygpO1xuICAgIGxldCBzdG9wVGhlV29yZCA9ICh3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChzdG9wV29yZHMuaW5kZXhPZih3b3JkKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gd29yZDtcbiAgICB9O1xuXG4gICAgbGV0IHByb2Nlc3NTdHJpbmcgPSAocm93OiBzdHJpbmcpID0+IHtcbiAgICAgIHJvdyA9IFwiXCIgKyByb3c7XG4gICAgICBpZiAoISFyb3cpIHtcbiAgICAgICAgcm93LnNwbGl0KFwiIFwiKS5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgIHdvcmQgPSBzdG9wVGhlV29yZCh3b3JkLnRvTG93ZXJDYXNlKCkgfHwgXCJcIik7XG4gICAgICAgICAgaWYgKCEhd29yZCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHRbd29yZF0pIHtcbiAgICAgICAgICAgICAgcmVzdWx0W3dvcmRdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdFt3b3JkXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkpIHtcbiAgICAgICAgICByb3dWYWx1ZS5mb3JFYWNoKHByb2Nlc3NTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2Ygcm93VmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvd1ZhbHVlKS5mb3JFYWNoKGtleSA9PiBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlW2tleV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc1N0cmluZyhyb3dWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiBba2V5LCByZXN1bHRba2V5XV07XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgY2FudmFzTm9kZSA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW1wdHlUZXh0Tm9kZS5pbm5lckhUTUwgPSBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhc05vZGUpO1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgbGlzdDogZGF0YSxcbiAgICAgIHdlaWdodEZhY3RvcjogMjAsXG4gICAgICBmb250RmFtaWx5OiBcIlNlZ29lIFVJIEJvbGQsIHNhbnMtc2VyaWZcIixcbiAgICAgIGNvbG9yOiAod29yZDogc3RyaW5nLCB3ZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21Db2xvcigpO1xuICAgICAgfSxcbiAgICAgIHJvdGF0ZVJhdGlvOiAwLjUsXG4gICAgICByb3RhdGlvblN0ZXBzOiAyLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGNsaWNrOiBmdW5jdGlvbihpdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSArIFwiOiBcIiArIGl0ZW1bMV0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmNsb3VkID0gV29yZENsb3VkTGliKGNhbnZhc05vZGUsIGNvbmZpZyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICBpZiAoISF0aGlzLmNsb3VkKSB7XG4gICAgICB0aGlzLmNsb3VkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgV29yZENsb3VkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JkY2xvdWQvd29yZGNsb3VkLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXh0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlzdWFsaXplckJhc2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIE11dXJpIHYwLjguMFxuKiBodHRwczovL2dpdGh1Yi5jb20vaGFsdHUvbXV1cmlcbiogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEhhbHR1IE95XG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuKiBodHRwczovL2dpdGh1Yi5jb20vaGFsdHUvbXV1cmkvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuKiBAbGljZW5zZSBNSVRcbipcbiogTXV1cmkgUGFja2VyXG4qIENvcHlyaWdodCAoYykgMjAxNi1wcmVzZW50LCBOaWtsYXMgUsOkbcO2IDxpbnJhbW9AZ21haWwuY29tPlxuKiBAbGljZW5zZSBNSVRcbipcbiogTXV1cmkgVGlja2VyIC8gTXV1cmkgRW1pdHRlciAvIE11dXJpIFF1ZXVlXG4qIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBOaWtsYXMgUsOkbcO2IDxpbnJhbW9AZ21haWwuY29tPlxuKiBAbGljZW5zZSBNSVRcbiovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuTXV1cmkgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgbmFtZXNwYWNlID0gJ011dXJpJztcbiAgdmFyIGdyaWRJbnN0YW5jZXMgPSB7fTtcblxuICB2YXIgYWN0aW9uU3dhcCA9ICdzd2FwJztcbiAgdmFyIGFjdGlvbk1vdmUgPSAnbW92ZSc7XG5cbiAgdmFyIGV2ZW50U3luY2hyb25pemUgPSAnc3luY2hyb25pemUnO1xuICB2YXIgZXZlbnRMYXlvdXRTdGFydCA9ICdsYXlvdXRTdGFydCc7XG4gIHZhciBldmVudExheW91dEVuZCA9ICdsYXlvdXRFbmQnO1xuICB2YXIgZXZlbnRBZGQgPSAnYWRkJztcbiAgdmFyIGV2ZW50UmVtb3ZlID0gJ3JlbW92ZSc7XG4gIHZhciBldmVudFNob3dTdGFydCA9ICdzaG93U3RhcnQnO1xuICB2YXIgZXZlbnRTaG93RW5kID0gJ3Nob3dFbmQnO1xuICB2YXIgZXZlbnRIaWRlU3RhcnQgPSAnaGlkZVN0YXJ0JztcbiAgdmFyIGV2ZW50SGlkZUVuZCA9ICdoaWRlRW5kJztcbiAgdmFyIGV2ZW50RmlsdGVyID0gJ2ZpbHRlcic7XG4gIHZhciBldmVudFNvcnQgPSAnc29ydCc7XG4gIHZhciBldmVudE1vdmUgPSAnbW92ZSc7XG4gIHZhciBldmVudFNlbmQgPSAnc2VuZCc7XG4gIHZhciBldmVudEJlZm9yZVNlbmQgPSAnYmVmb3JlU2VuZCc7XG4gIHZhciBldmVudFJlY2VpdmUgPSAncmVjZWl2ZSc7XG4gIHZhciBldmVudEJlZm9yZVJlY2VpdmUgPSAnYmVmb3JlUmVjZWl2ZSc7XG4gIHZhciBldmVudERyYWdJbml0ID0gJ2RyYWdJbml0JztcbiAgdmFyIGV2ZW50RHJhZ1N0YXJ0ID0gJ2RyYWdTdGFydCc7XG4gIHZhciBldmVudERyYWdNb3ZlID0gJ2RyYWdNb3ZlJztcbiAgdmFyIGV2ZW50RHJhZ1Njcm9sbCA9ICdkcmFnU2Nyb2xsJztcbiAgdmFyIGV2ZW50RHJhZ0VuZCA9ICdkcmFnRW5kJztcbiAgdmFyIGV2ZW50RHJhZ1JlbGVhc2VTdGFydCA9ICdkcmFnUmVsZWFzZVN0YXJ0JztcbiAgdmFyIGV2ZW50RHJhZ1JlbGVhc2VFbmQgPSAnZHJhZ1JlbGVhc2VFbmQnO1xuICB2YXIgZXZlbnREZXN0cm95ID0gJ2Rlc3Ryb3knO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVyIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9jb3VudGVyID0gMDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBsaXN0ZW5lcnMgcXVldWUgYW5kIGNyZWF0ZSBpdCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycykgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XSA9IFtdO1xuXG4gICAgLy8gQWRkIHRoZSBsaXN0ZW5lciB0byB0aGUgcXVldWUuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbGwgZXZlbnQgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhlIHByb3ZpZGVkIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2xpc3RlbmVyXVxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBHZXQgbGlzdGVuZXJzIGFuZCByZXR1cm4gaW1tZWRpYXRlbHkgaWYgbm9uZSBpcyBmb3VuZC5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBJZiBubyBzcGVjaWZpYyBsaXN0ZW5lciBpcyBwcm92aWRlZCByZW1vdmUgYWxsIGxpc3RlbmVycy5cbiAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgIHZhciBpID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAobGlzdGVuZXIgPT09IGxpc3RlbmVyc1tpXSkgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRW1pdCBhbGwgbGlzdGVuZXJzIGluIGEgc3BlY2lmaWVkIGV2ZW50IHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7Kn0gW2FyZzFdXG4gICAqIEBwYXJhbSB7Kn0gW2FyZzJdXG4gICAqIEBwYXJhbSB7Kn0gW2FyZzNdXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50LCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBldmVudCBsaXN0ZW5lcnMgYW5kIHF1aXQgZWFybHkgaWYgdGhlcmUncyBubyBsaXN0ZW5lcnMuXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHFMZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gICAgdmFyIGFMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICB2YXIgaTtcblxuICAgIC8vIEFkZCB0aGUgY3VycmVudCBsaXN0ZW5lcnMgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGJlZm9yZSB3ZSBwcm9jZXNzIHRoZW0uXG4gICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gZ3VhcmFudGVlIHRoYXQgYWxsIG9mIHRoZSBsaXN0ZW5lcnMgYXJlIGNhbGxlZCBpblxuICAgIC8vIGNvcnJlY3Qgb3JkZXIgZXZlbiBpZiBuZXcgZXZlbnQgbGlzdGVuZXJzIGFyZSByZW1vdmVkL2FkZGVkIGR1cmluZ1xuICAgIC8vIHByb2Nlc3NpbmcgYW5kL29yIGV2ZW50cyBhcmUgZW1pdHRlZCBkdXJpbmcgcHJvY2Vzc2luZy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBxdWV1ZS5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gSW5jcmVtZW50IHF1ZXVlIGNvdW50ZXIuIFRoaXMgaXMgbmVlZGVkIGZvciB0aGUgc2NlbmFyaW9zIHdoZXJlIGVtaXQgaXNcbiAgICAvLyB0cmlnZ2VyZWQgd2hpbGUgdGhlIHF1ZXVlIGlzIGFscmVhZHkgcHJvY2Vzc2luZy4gV2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mXG4gICAgLy8gaG93IG1hbnkgXCJxdWV1ZSBwcm9jZXNzb3JzXCIgdGhlcmUgYXJlIGFjdGl2ZSBzbyB0aGF0IHdlIGNhbiBzYWZlbHkgcmVzZXRcbiAgICAvLyB0aGUgcXVldWUgaW4gdGhlIGVuZCB3aGVuIHRoZSBsYXN0IHF1ZXVlIHByb2Nlc3NvciBpcyBmaW5pc2hlZC5cbiAgICArK3RoaXMuX2NvdW50ZXI7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBxdWV1ZSAodGhlIHNwZWNpZmljIHBhcnQgb2YgaXQgZm9yIHRoaXMgZW1pdCkuXG4gICAgZm9yIChpID0gcUxlbmd0aCwgcUxlbmd0aCA9IHF1ZXVlLmxlbmd0aDsgaSA8IHFMZW5ndGg7IGkrKykge1xuICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICBhTGVuZ3RoID09PSAwID8gcXVldWVbaV0oKSA6XG4gICAgICBhTGVuZ3RoID09PSAxID8gcXVldWVbaV0oYXJnMSkgOlxuICAgICAgYUxlbmd0aCA9PT0gMiA/IHF1ZXVlW2ldKGFyZzEsIGFyZzIpIDpcbiAgICAgICAgICAgICAgICAgICAgICBxdWV1ZVtpXShhcmcxLCBhcmcyLCBhcmczKTtcblxuICAgICAgLy8gU3RvcCBwcm9jZXNzaW5nIGlmIHRoZSBlbWl0dGVyIGlzIGRlc3Ryb3llZC5cbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRGVjcmVtZW50IHF1ZXVlIHByb2Nlc3MgY291bnRlci5cbiAgICAtLXRoaXMuX2NvdW50ZXI7XG5cbiAgICAvLyBSZXNldCB0aGUgcXVldWUgaWYgdGhlcmUgYXJlIG5vIG1vcmUgcXVldWUgcHJvY2Vzc2VzIHJ1bm5pbmcuXG4gICAgaWYgKCF0aGlzLl9jb3VudGVyKSBxdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgZW1pdHRlciBpbnN0YW5jZS4gQmFzaWNhbGx5IGp1c3QgcmVtb3ZlcyBhbGwgYm91bmQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICAvLyBGbGFnIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICAvLyBSZXNldCBxdWV1ZSAoaWYgcXVldWUgaXMgY3VycmVudGx5IHByb2Nlc3NpbmcgdGhpcyB3aWxsIGFsc28gc3RvcCB0aGF0KS5cbiAgICB0aGlzLl9xdWV1ZS5sZW5ndGggPSB0aGlzLl9jb3VudGVyID0gMDtcblxuICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzLlxuICAgIGZvciAoZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICBpZiAoZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICBldmVudHNbZXZlbnRdLmxlbmd0aCA9IDA7XG4gICAgICAgIGV2ZW50c1tldmVudF0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gU2V0IHVwIHRoZSBkZWZhdWx0IGV4cG9ydCB2YWx1ZXMuXG4gIHZhciB0cmFuc2Zvcm1TdHlsZSA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xuXG4gIC8vIEZpbmQgdGhlIHN1cHBvcnRlZCB0cmFuc2Zvcm0gcHJvcCBhbmQgc3R5bGUgbmFtZXMuXG4gIHZhciBkb2NFbGVtU3R5bGUgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuICB2YXIgc3R5bGUgPSAndHJhbnNmb3JtJztcbiAgdmFyIHN0eWxlQ2FwID0gJ1RyYW5zZm9ybSc7XG4gIHZhciBmb3VuZCA9IGZhbHNlO1xuICBbJycsICdXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnXS5mb3JFYWNoKGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuICAgIHZhciBwcm9wTmFtZSA9IHByZWZpeCA/IHByZWZpeCArIHN0eWxlQ2FwIDogc3R5bGU7XG4gICAgaWYgKGRvY0VsZW1TdHlsZVtwcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlZml4ID0gcHJlZml4LnRvTG93ZXJDYXNlKCk7XG4gICAgICB0cmFuc2Zvcm1TdHlsZSA9IHByZWZpeCA/ICctJyArIHByZWZpeCArICctJyArIHN0eWxlIDogc3R5bGU7XG4gICAgICB0cmFuc2Zvcm1Qcm9wID0gcHJvcE5hbWU7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICB2YXIgc3R5bGVzQ2FjaGUgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBXZWFrTWFwKCkgOiBudWxsO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiBhbiBlbGVtZW50J3Mgc3R5bGUgcHJvcGVydHkgYXMgYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICAgIHZhciBzdHlsZXMgPSBzdHlsZXNDYWNoZSAmJiBzdHlsZXNDYWNoZS5nZXQoZWxlbWVudCk7XG4gICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICAgICAgaWYgKHN0eWxlc0NhY2hlKSBzdHlsZXNDYWNoZS5zZXQoZWxlbWVudCwgc3R5bGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlID09PSAndHJhbnNmb3JtJyA/IHRyYW5zZm9ybVN0eWxlIDogc3R5bGUpO1xuICB9XG5cbiAgdmFyIHN0eWxlTmFtZVJlZ0V4ID0gLyhbQS1aXSkvZztcblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBhIGNhbWVsIGNhc2Ugc3R5bGUgcHJvcGVydHkgdG8ga2ViYWIgY2FzZSBzdHlsZSBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3R5bGVOYW1lKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShzdHlsZU5hbWVSZWdFeCwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICB2YXIgc3RyRnVuY3Rpb24gPSAnZnVuY3Rpb24nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gc3RyRnVuY3Rpb247XG4gIH1cblxuICB2YXIgdHJhbnNmb3JtU3R5bGUkMSA9ICd0cmFuc2Zvcm0nO1xuXG4gIC8qKlxuICAgKiBTZXQgaW5saW5lIHN0eWxlcyB0byBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcbiAgICovXG4gIGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlcykge1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wID09PSB0cmFuc2Zvcm1TdHlsZSQxID8gdHJhbnNmb3JtUHJvcCA6IHByb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVtIGFuaW1hdGlvbiBoYW5kbGVyIHBvd2VyZWQgYnkgV2ViIEFuaW1hdGlvbnMgQVBJLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbUFuaW1hdGUoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuX3Byb3BzID0gW107XG4gICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgdGhpcy5fa2V5ZnJhbWVzID0gW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fb25GaW5pc2ggPSB0aGlzLl9vbkZpbmlzaC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGluc3RhbmNlJ3MgYW5pbWF0aW9uLiBBdXRvbWF0aWNhbGx5IHN0b3BzIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzXG4gICAqIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNGcm9tXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1RvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmVhc2luZz0nZWFzZSddXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24ocHJvcHNGcm9tLCBwcm9wc1RvLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uO1xuICAgIHZhciBjdXJyZW50UHJvcHMgPSB0aGlzLl9wcm9wcztcbiAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgY2FuY2VsQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGV4aXN0aW5nIGFuaW1hdGlvbiBydW5uaW5nLCBsZXQncyBjaGVjayBpZiBpdCBuZWVkcyB0byBiZVxuICAgIC8vIGNhbmNlbGxlZCBvciBpZiBpdCBjYW4gY29udGludWUgcnVubmluZy5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICB2YXIgcHJvcENvdW50ID0gMDtcbiAgICAgIHZhciBwcm9wSW5kZXg7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSByZXF1ZXN0ZWQgYW5pbWF0aW9uIHRhcmdldCBwcm9wcyBhbmQgdmFsdWVzIG1hdGNoIHdpdGggdGhlXG4gICAgICAvLyBjdXJyZW50IHByb3BzIGFuZCB2YWx1ZXMuXG4gICAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wc1RvKSB7XG4gICAgICAgICsrcHJvcENvdW50O1xuICAgICAgICBwcm9wSW5kZXggPSBjdXJyZW50UHJvcHMuaW5kZXhPZihwcm9wTmFtZSk7XG4gICAgICAgIGlmIChwcm9wSW5kZXggPT09IC0xIHx8IHByb3BzVG9bcHJvcE5hbWVdICE9PSBjdXJyZW50VmFsdWVzW3Byb3BJbmRleF0pIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB0YXJnZXQgcHJvcHMgY291bnQgbWF0Y2hlcyBjdXJyZW50IHByb3BzIGNvdW50LiBUaGlzIGlzXG4gICAgICAvLyBuZWVkZWQgZm9yIHRoZSBlZGdlIGNhc2Ugc2NlbmFyaW8gd2hlcmUgdGFyZ2V0IHByb3BzIGNvbnRhaW4gdGhlIHNhbWVcbiAgICAgIC8vIHN0eWxlcyBhcyBjdXJyZW50IHByb3BzLCBidXQgdGhlIGN1cnJlbnQgcHJvcHMgaGF2ZSBzb21lIGFkZGl0aW9uYWxcbiAgICAgIC8vIHByb3BzLlxuICAgICAgaWYgKCFjYW5jZWxBbmltYXRpb24gJiYgcHJvcENvdW50ICE9PSBjdXJyZW50UHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIGFuaW1hdGlvbiAoaWYgcmVxdWlyZWQpLlxuICAgIGlmIChjYW5jZWxBbmltYXRpb24pIGFuaW1hdGlvbi5jYW5jZWwoKTtcblxuICAgIC8vIFN0b3JlIGFuaW1hdGlvbiBjYWxsYmFjay5cbiAgICB0aGlzLl9jYWxsYmFjayA9IGlzRnVuY3Rpb24ob3B0cy5vbkZpbmlzaCkgPyBvcHRzLm9uRmluaXNoIDogbnVsbDtcblxuICAgIC8vIElmIHdlIGhhdmUgYSBydW5uaW5nIGFuaW1hdGlvbiB0aGF0IGRvZXMgbm90IG5lZWQgdG8gYmUgY2FuY2VsbGVkLCBsZXQnc1xuICAgIC8vIGNhbGwgaXQgYSBkYXkgaGVyZSBhbmQgbGV0IGl0IHJ1bi5cbiAgICBpZiAoYW5pbWF0aW9uICYmICFjYW5jZWxBbmltYXRpb24pIHJldHVybjtcblxuICAgIC8vIFN0b3JlIHRhcmdldCBwcm9wcyBhbmQgdmFsdWVzIHRvIGluc3RhbmNlLlxuICAgIGN1cnJlbnRQcm9wcy5sZW5ndGggPSBjdXJyZW50VmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBwcm9wc1RvKSB7XG4gICAgICBjdXJyZW50UHJvcHMucHVzaChwcm9wTmFtZSk7XG4gICAgICBjdXJyZW50VmFsdWVzLnB1c2gocHJvcHNUb1twcm9wTmFtZV0pO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBrZXlmcmFtZXMuXG4gICAgdmFyIGFuaW1LZXlmcmFtZXMgPSB0aGlzLl9rZXlmcmFtZXM7XG4gICAgYW5pbUtleWZyYW1lc1swXSA9IHByb3BzRnJvbTtcbiAgICBhbmltS2V5ZnJhbWVzWzFdID0gcHJvcHNUbztcblxuICAgIC8vIFNldCB1cCBvcHRpb25zLlxuICAgIHZhciBhbmltT3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gICAgYW5pbU9wdGlvbnMuZHVyYXRpb24gPSBvcHRzLmR1cmF0aW9uIHx8IDMwMDtcbiAgICBhbmltT3B0aW9ucy5lYXNpbmcgPSBvcHRzLmVhc2luZyB8fCAnZWFzZSc7XG5cbiAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIGFuaW1hdGlvbiA9IGVsZW1lbnQuYW5pbWF0ZShhbmltS2V5ZnJhbWVzLCBhbmltT3B0aW9ucyk7XG4gICAgYW5pbWF0aW9uLm9uZmluaXNoID0gdGhpcy5fb25GaW5pc2g7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXG4gICAgLy8gU2V0IHRoZSBlbmQgc3R5bGVzLiBUaGlzIG1ha2VzIHN1cmUgdGhhdCB0aGUgZWxlbWVudCBzdGF5cyBhdCB0aGUgZW5kXG4gICAgLy8gdmFsdWVzIGFmdGVyIGFuaW1hdGlvbiBpcyBmaW5pc2hlZC5cbiAgICBzZXRTdHlsZXMoZWxlbWVudCwgcHJvcHNUbyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgaW5zdGFuY2UncyBjdXJyZW50IGFuaW1hdGlvbiBpZiBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdHlsZXNdXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKHN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5fYW5pbWF0aW9uKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX3Byb3BzO1xuICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHZhciBwcm9wTmFtZTtcbiAgICB2YXIgcHJvcFZhbHVlO1xuICAgIHZhciBpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIChpZiBub3QgcHJvdmlkZWQpIGFuZCBzZXQgc3R5bGVzLlxuICAgIGlmICghc3R5bGVzKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY3VycmVudFByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb3BOYW1lID0gY3VycmVudFByb3BzW2ldO1xuICAgICAgICBwcm9wVmFsdWUgPSBnZXRTdHlsZShlbGVtZW50LCBnZXRTdHlsZU5hbWUocHJvcE5hbWUpKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wTmFtZSA9PT0gJ3RyYW5zZm9ybScgPyB0cmFuc2Zvcm1Qcm9wIDogcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKTtcbiAgICB9XG5cbiAgICAvLyAgQ2FuY2VsIGFuaW1hdGlvbi5cbiAgICB0aGlzLl9hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgLy8gUmVzZXQgY3VycmVudCBwcm9wcyBhbmQgdmFsdWVzLlxuICAgIGN1cnJlbnRQcm9wcy5sZW5ndGggPSBjdXJyZW50VmFsdWVzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBpdGVtIGlzIGJlaW5nIGFuaW1hdGVkIGN1cnJlbnRseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuaXNBbmltYXRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl9hbmltYXRpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fb3B0aW9ucyA9IHRoaXMuX2tleWZyYW1lcyA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBlbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLl9vbkZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrO1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLl9wcm9wcy5sZW5ndGggPSB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICB9O1xuXG4gIHZhciB2ZW5kb3JQcmVmaXhlcyA9IFsnJywgJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycsICdXZWJraXQnLCAnTW96JywgJ01TJywgJ08nXTtcblxuICAvKipcbiAgICogR2V0IHByZWZpeGVkIENTUyBwcm9wZXJ0eSBuYW1lIHdoZW4gZ2l2ZW4gYSBub24tcHJlZml4ZWQgQ1NTIHByb3BlcnR5IG5hbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtU3R5bGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gICAqIEByZXR1cm5zIHshU3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UHJlZml4ZWRQcm9wTmFtZShlbGVtU3R5bGUsIHByb3BOYW1lKSB7XG4gICAgdmFyIGNhbWVsUHJvcE5hbWUgPSBwcm9wTmFtZVswXS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwcmVmaXg7XG4gICAgdmFyIHByZWZpeGVkUHJvcE5hbWU7XG5cbiAgICB3aGlsZSAoaSA8IHZlbmRvclByZWZpeGVzLmxlbmd0aCkge1xuICAgICAgcHJlZml4ID0gdmVuZG9yUHJlZml4ZXNbaV07XG4gICAgICBwcmVmaXhlZFByb3BOYW1lID0gcHJlZml4ID8gcHJlZml4ICsgY2FtZWxQcm9wTmFtZSA6IHByb3BOYW1lO1xuICAgICAgaWYgKHByZWZpeGVkUHJvcE5hbWUgaW4gZWxlbVN0eWxlKSByZXR1cm4gcHJlZml4ZWRQcm9wTmFtZTtcbiAgICAgICsraTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBkdCA9IDEwMDAgLyA2MDtcblxuICB2YXIgcmFmID0gKFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjayhkdCk7XG4gICAgICB9LCBkdCk7XG4gICAgfVxuICApLmJpbmQod2luZG93KTtcblxuICAvLyBEZXRlY3Qgc3VwcG9ydCBmb3IgcGFzc2l2ZSBldmVudHM6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kI2ZlYXR1cmUtZGV0ZWN0aW9uXG4gIHZhciBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgcGFzc2l2ZU9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNQYXNzaXZlRXZlbnRzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlT3B0cyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZU9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIC8vIERyYWdnZXIgZXZlbnRzLlxuICB2YXIgZXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnc3RhcnQnLFxuICAgIG1vdmU6ICdtb3ZlJyxcbiAgICBlbmQ6ICdlbmQnLFxuICAgIGNhbmNlbDogJ2NhbmNlbCdcbiAgfTtcblxuICB2YXIgaGFzVG91Y2hFdmVudHMgPSAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LlRvdWNoRXZlbnQpO1xuICB2YXIgaGFzUG9pbnRlckV2ZW50cyA9ICEhd2luZG93LlBvaW50ZXJFdmVudDtcbiAgdmFyIGhhc01zUG9pbnRlckV2ZW50cyA9ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkO1xuICB2YXIgaXNBbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgbGlzdGVuZXJPcHRpb25zID0gaXNQYXNzaXZlRXZlbnRzU3VwcG9ydGVkID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcblxuICB2YXIgdGFQcm9wID0gJ3RvdWNoQWN0aW9uJztcbiAgdmFyIHRhUHJvcFByZWZpeGVkID0gZ2V0UHJlZml4ZWRQcm9wTmFtZSh3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLCB0YVByb3ApO1xuICB2YXIgdGFEZWZhdWx0VmFsdWUgPSAnYXV0byc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRHJhZ2dlciBpbnN0YW5jZSBmb3IgYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2Nzc1Byb3BzXVxuICAgKi9cbiAgZnVuY3Rpb24gRHJhZ2dlcihlbGVtZW50LCBjc3NQcm9wcykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fY3NzUHJvcHMgPSB7fTtcbiAgICB0aGlzLl90b3VjaEFjdGlvbiA9ICcnO1xuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xuICAgIHRoaXMuX3N0YXJ0WCA9IDA7XG4gICAgdGhpcy5fc3RhcnRZID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFkgPSAwO1xuXG4gICAgdGhpcy5fcHJlU3RhcnRDaGVjayA9IHRoaXMuX3ByZVN0YXJ0Q2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUgPSB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblN0YXJ0ID0gdGhpcy5fb25TdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTW92ZSA9IHRoaXMuX29uTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2FuY2VsID0gdGhpcy5fb25DYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkVuZCA9IHRoaXMuX29uRW5kLmJpbmQodGhpcyk7XG5cbiAgICAvLyBBcHBseSBpbml0aWFsIGNzcyBwcm9wcy5cbiAgICB0aGlzLnNldENzc1Byb3BzKGNzc1Byb3BzKTtcblxuICAgIC8vIElmIHRvdWNoIGFjdGlvbiB3YXMgbm90IHByb3ZpZGVkIHdpdGggaW5pdGlhbCBjc3MgcHJvcHMgbGV0J3MgYXNzdW1lIGl0J3NcbiAgICAvLyBhdXRvLlxuICAgIGlmICghdGhpcy5fdG91Y2hBY3Rpb24pIHtcbiAgICAgIHRoaXMuc2V0VG91Y2hBY3Rpb24odGFEZWZhdWx0VmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgbmF0aXZlIGxpbmsvaW1hZ2UgZHJhZ2dpbmcgZm9yIHRoZSBpdGVtIGFuZCBpdCdzIGFuY2VzdG9ycy5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG5cbiAgICAvLyBMaXN0ZW4gdG8gc3RhcnQgZXZlbnQuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX2V2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcblxuICAgIC8vIElmIHdlIGhhdmUgdG91Y2ggZXZlbnRzLCBidXQgbm8gcG9pbnRlciBldmVudHMgd2UgbmVlZCB0byBhbHNvIGxpc3RlbiBmb3JcbiAgICAvLyBtb3VzZSBldmVudHMgaW4gYWRkaXRpb24gdG8gdG91Y2ggZXZlbnRzIGZvciBkZXZpY2VzIHdoaWNoIHN1cHBvcnQgYm90aFxuICAgIC8vIG1vdXNlIGFuZCB0b3VjaCBpbnRlcmFjdGlvbi5cbiAgICBpZiAoaGFzVG91Y2hFdmVudHMgJiYgIWhhc1BvaW50ZXJFdmVudHMgJiYgIWhhc01zUG9pbnRlckV2ZW50cykge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX21vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90ZWN0ZWQgcHJvcGVydGllc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBEcmFnZ2VyLl9wb2ludGVyRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAncG9pbnRlcmRvd24nLFxuICAgIG1vdmU6ICdwb2ludGVybW92ZScsXG4gICAgY2FuY2VsOiAncG9pbnRlcmNhbmNlbCcsXG4gICAgZW5kOiAncG9pbnRlcnVwJ1xuICB9O1xuXG4gIERyYWdnZXIuX21zUG9pbnRlckV2ZW50cyA9IHtcbiAgICBzdGFydDogJ01TUG9pbnRlckRvd24nLFxuICAgIG1vdmU6ICdNU1BvaW50ZXJNb3ZlJyxcbiAgICBjYW5jZWw6ICdNU1BvaW50ZXJDYW5jZWwnLFxuICAgIGVuZDogJ01TUG9pbnRlclVwJ1xuICB9O1xuXG4gIERyYWdnZXIuX3RvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgY2FuY2VsOiAndG91Y2hjYW5jZWwnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9O1xuXG4gIERyYWdnZXIuX21vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBjYW5jZWw6ICcnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fZXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChoYXNQb2ludGVyRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fcG9pbnRlckV2ZW50cztcbiAgICBpZiAoaGFzTXNQb2ludGVyRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fbXNQb2ludGVyRXZlbnRzO1xuICAgIGlmIChoYXNUb3VjaEV2ZW50cykgcmV0dXJuIERyYWdnZXIuX3RvdWNoRXZlbnRzO1xuICAgIHJldHVybiBEcmFnZ2VyLl9tb3VzZUV2ZW50cztcbiAgfSkoKTtcblxuICBEcmFnZ2VyLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuICBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMgPSBbXTtcblxuICAvKipcbiAgICogUHJvdGVjdGVkIHN0YXRpYyBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCAmJiBlLmNhbmNlbGFibGUgIT09IGZhbHNlKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgRHJhZ2dlci5fYWN0aXZhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIGluZGV4ID0gRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA+IC0xKSByZXR1cm47XG5cbiAgICBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMubW92ZSwgaW5zdGFuY2UuX29uTW92ZSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMuY2FuY2VsLCBpbnN0YW5jZS5fb25DYW5jZWwpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub24oZXZlbnRzLmVuZCwgaW5zdGFuY2UuX29uRW5kKTtcblxuICAgIGlmIChEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBEcmFnZ2VyLl9iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIERyYWdnZXIuX2RlYWN0aXZhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIGluZGV4ID0gRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5tb3ZlLCBpbnN0YW5jZS5fb25Nb3ZlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9mZihldmVudHMuY2FuY2VsLCBpbnN0YW5jZS5fb25DYW5jZWwpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5lbmQsIGluc3RhbmNlLl9vbkVuZCk7XG5cbiAgICBpZiAoIURyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5sZW5ndGgpIHtcbiAgICAgIERyYWdnZXIuX3VuYmluZExpc3RlbmVycygpO1xuICAgIH1cbiAgfTtcblxuICBEcmFnZ2VyLl9iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZSwgRHJhZ2dlci5fb25Nb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5lbmQsIERyYWdnZXIuX29uRW5kLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGV2ZW50cy5jYW5jZWwgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLmNhbmNlbCwgRHJhZ2dlci5fb25DYW5jZWwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gIH07XG5cbiAgRHJhZ2dlci5fdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZSwgRHJhZ2dlci5fb25Nb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5lbmQsIERyYWdnZXIuX29uRW5kLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGV2ZW50cy5jYW5jZWwgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLmNhbmNlbCwgRHJhZ2dlci5fb25DYW5jZWwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gIH07XG5cbiAgRHJhZ2dlci5fZ2V0RXZlbnRQb2ludGVySWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIElmIHdlIGhhdmUgcG9pbnRlciBpZCBhdmFpbGFibGUgbGV0J3MgdXNlIGl0LlxuICAgIGlmICh0eXBlb2YgZXZlbnQucG9pbnRlcklkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGV2ZW50LnBvaW50ZXJJZDtcbiAgICB9XG5cbiAgICAvLyBGb3IgdG91Y2ggZXZlbnRzIGxldCdzIGdldCB0aGUgZmlyc3QgY2hhbmdlZCB0b3VjaCdzIGlkZW50aWZpZXIuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyIDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgbW91c2Uvb3RoZXIgZXZlbnRzIGxldCdzIHByb3ZpZGUgYSBzdGF0aWMgaWQuXG4gICAgcmV0dXJuIDE7XG4gIH07XG5cbiAgRHJhZ2dlci5fZ2V0VG91Y2hCeUlkID0gZnVuY3Rpb24oZXZlbnQsIGlkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIHBvaW50ZXIgZXZlbnQgcmV0dXJuIHRoZSB3aG9sZSBldmVudCBpZiB0aGVyZSdzIGEgbWF0Y2gsIGFuZFxuICAgIC8vIG51bGwgb3RoZXJ3aXNlLlxuICAgIGlmICh0eXBlb2YgZXZlbnQucG9pbnRlcklkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGV2ZW50LnBvaW50ZXJJZCA9PT0gaWQgPyBldmVudCA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yIHRvdWNoIGV2ZW50cyBsZXQncyBjaGVjayBpZiB0aGVyZSdzIGEgY2hhbmdlZCB0b3VjaCBvYmplY3QgdGhhdCBtYXRjaGVzXG4gICAgLy8gdGhlIHBvaW50ZXJJZCBpbiB3aGljaCBjYXNlIHJldHVybiB0aGUgdG91Y2ggb2JqZWN0LlxuICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciBtb3VzZS9vdGhlciBldmVudHMgbGV0J3MgYXNzdW1lIHRoZXJlJ3Mgb25seSBvbmUgcG9pbnRlciBhbmQganVzdFxuICAgIC8vIHJldHVybiB0aGUgZXZlbnQuXG4gICAgcmV0dXJuIGV2ZW50O1xuICB9O1xuXG4gIERyYWdnZXIuX29uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLmVtaXQoZXZlbnRzLm1vdmUsIGUpO1xuICB9O1xuXG4gIERyYWdnZXIuX29uQ2FuY2VsID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMuY2FuY2VsLCBlKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9vbkVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLmVtaXQoZXZlbnRzLmVuZCwgZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogUmVzZXQgY3VycmVudCBkcmFnIG9wZXJhdGlvbiAoaWYgYW55KS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHRoaXMuX3BvaW50ZXJJZCA9IG51bGw7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gMDtcbiAgICB0aGlzLl9zdGFydFggPSAwO1xuICAgIHRoaXMuX3N0YXJ0WSA9IDA7XG4gICAgdGhpcy5fY3VycmVudFggPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gMDtcbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LFxuICAgICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLFxuICAgICAgbGlzdGVuZXJPcHRpb25zXG4gICAgKTtcblxuICAgIERyYWdnZXIuX2RlYWN0aXZhdGVJbnN0YW5jZSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY3VzdG9tIGRyYWdnZXIgZXZlbnQgZnJvbSBhIHJhdyBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqIEByZXR1cm5zIHtEcmFnZ2VyRXZlbnR9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fY3JlYXRlRXZlbnQgPSBmdW5jdGlvbih0eXBlLCBlKSB7XG4gICAgdmFyIHRvdWNoID0gdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpO1xuICAgIHJldHVybiB7XG4gICAgICAvLyBIYW1tZXIuanMgY29tcGF0aWJpbGl0eSBpbnRlcmZhY2UuXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgc3JjRXZlbnQ6IGUsXG4gICAgICBkaXN0YW5jZTogdGhpcy5nZXREaXN0YW5jZSgpLFxuICAgICAgZGVsdGFYOiB0aGlzLmdldERlbHRhWCgpLFxuICAgICAgZGVsdGFZOiB0aGlzLmdldERlbHRhWSgpLFxuICAgICAgZGVsdGFUaW1lOiB0eXBlID09PSBldmVudHMuc3RhcnQgPyAwIDogdGhpcy5nZXREZWx0YVRpbWUoKSxcbiAgICAgIGlzRmlyc3Q6IHR5cGUgPT09IGV2ZW50cy5zdGFydCxcbiAgICAgIGlzRmluYWw6IHR5cGUgPT09IGV2ZW50cy5lbmQgfHwgdHlwZSA9PT0gZXZlbnRzLmNhbmNlbCxcbiAgICAgIC8vIFBhcnRpYWwgVG91Y2ggQVBJIGludGVyZmFjZS5cbiAgICAgIGlkZW50aWZpZXI6IHRoaXMuX3BvaW50ZXJJZCxcbiAgICAgIHNjcmVlblg6IHRvdWNoLnNjcmVlblgsXG4gICAgICBzY3JlZW5ZOiB0b3VjaC5zY3JlZW5ZLFxuICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXG4gICAgICBwYWdlWDogdG91Y2gucGFnZVgsXG4gICAgICBwYWdlWTogdG91Y2gucGFnZVksXG4gICAgICB0YXJnZXQ6IHRvdWNoLnRhcmdldFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtaXQgYSByYXcgZXZlbnQgYXMgZHJhZ2dlciBldmVudCBpbnRlcm5hbGx5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9lbWl0ID0gZnVuY3Rpb24odHlwZSwgZSkge1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCh0eXBlLCB0aGlzLl9jcmVhdGVFdmVudCh0eXBlLCBlKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIHRoZSBwcm92aWRlZCBldmVudCBpcyBhIFBvaW50ZXJFdmVudCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiBpdCBpZiBpdCBoYXNcbiAgICogdGhlIHNhbWUgcG9pbnRlcklkIGFzIHRoZSBpbnN0YW5jZS4gSWYgdGhlIHByb3ZpZGVkIGV2ZW50IGlzIGEgVG91Y2hFdmVudFxuICAgKiB0aGlzIG1ldGhvZCB3aWxsIHRyeSB0byBsb29rIGZvciBhIFRvdWNoIGluc3RhbmNlIGluIHRoZSBjaGFuZ2VkVG91Y2hlcyB0aGF0XG4gICAqIGhhcyBhbiBpZGVudGlmaWVyIG1hdGNoaW5nIHRoaXMgaW5zdGFuY2UncyBwb2ludGVySWQuIElmIHRoZSBwcm92aWRlZCBldmVudFxuICAgKiBpcyBhIE1vdXNlRXZlbnQgKG9yIGp1c3QgYW55IG90aGVyIGV2ZW50IHRoYW4gUG9pbnRlckV2ZW50IG9yIFRvdWNoRXZlbnQpXG4gICAqIGl0IHdpbGwgYmUgcmV0dXJuZWQgaW1tZWRpYXRlbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX1cbiAgICogQHJldHVybnMgez8oVG91Y2h8UG9pbnRlckV2ZW50fE1vdXNlRXZlbnQpfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2dldFRyYWNrZWRUb3VjaCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5fcG9pbnRlcklkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERyYWdnZXIuX2dldFRvdWNoQnlJZChlLCB0aGlzLl9wb2ludGVySWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQSBwcmUtaGFuZGxlciBmb3Igc3RhcnQgZXZlbnQgdGhhdCBjaGVja3MgaWYgd2UgY2FuIHN0YXJ0IGRyYWdnaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9wcmVTdGFydENoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIG5vdCBiZWluZyBkcmFnZ2VkIGN1cnJlbnRseS5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKCkpIHJldHVybjtcblxuICAgIC8vIFNwZWNpYWwgY2FuY2VsYWJsZSBjaGVjayBmb3IgQW5kcm9pZCB0byBwcmV2ZW50IGRyYWcgcHJvY2VkdXJlIGZyb21cbiAgICAvLyBzdGFydGluZyBpZiBuYXRpdmUgc2Nyb2xsaW5nIGlzIGluIHByb2dyZXNzLiBQYXJ0IDEuXG4gICAgaWYgKGlzQW5kcm9pZCAmJiBlLmNhbmNlbGFibGUgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAvLyBNYWtlIHN1cmUgbGVmdCBidXR0b24gaXMgcHJlc3NlZCBvbiBtb3VzZS5cbiAgICBpZiAoZS5idXR0b24pIHJldHVybjtcblxuICAgIC8vIEdldCAoYW5kIHNldCkgcG9pbnRlciBpZC5cbiAgICB0aGlzLl9wb2ludGVySWQgPSBEcmFnZ2VyLl9nZXRFdmVudFBvaW50ZXJJZChlKTtcbiAgICBpZiAodGhpcy5fcG9pbnRlcklkID09PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyBTdG9yZSB0aGUgc3RhcnQgZXZlbnQgYW5kIHRyaWdnZXIgc3RhcnQgKGFzeW5jIG9yIHN5bmMpLiBQb2ludGVyIGV2ZW50c1xuICAgIC8vIGFyZSBlbWl0dGVkIGJlZm9yZSB0b3VjaCBldmVudHMgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYm90aCBvZiB0aGVtLiBBbmRcbiAgICAvLyBpZiB5b3UgdHJ5IHRvIG1vdmUgYW4gZWxlbWVudCBiZWZvcmUgYHRvdWNoc3RhcnRgIGlzIGVtaXR0ZWQgdGhlIHBvaW50ZXJcbiAgICAvLyBldmVudHMgZm9yIHRoYXQgZWxlbWVudCB3aWxsIGJlIGNhbmNlbGVkLiBUaGUgZml4IGlzIHRvIGRlbGF5IHRoZSBlbWl0dGVkXG4gICAgLy8gcG9pbnRlciBldmVudHMgaW4gc3VjaCBhIHNjZW5hcmlvIGJ5IG9uZSBmcmFtZSBzbyB0aGF0IGB0b3VjaHN0YXJ0YCBoYXNcbiAgICAvLyB0aW1lIHRvIGJlIGVtaXR0ZWQgYmVmb3JlIHRoZSBlbGVtZW50IGlzIChwb3RlbnRpYWxseSkgbW92ZWQuXG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IGU7XG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzICYmIChoYXNQb2ludGVyRXZlbnRzIHx8IGhhc01zUG9pbnRlckV2ZW50cykpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FuY2VsYWJsZSBjaGVjayBmb3IgQW5kcm9pZCB0byBwcmV2ZW50IGRyYWcgcHJvY2VkdXJlIGZyb21cbiAgICAgIC8vIHN0YXJ0aW5nIGlmIG5hdGl2ZSBzY3JvbGxpbmcgaXMgaW4gcHJvZ3Jlc3MuIFBhcnQgMi5cbiAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LFxuICAgICAgICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSxcbiAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJhZih0aGlzLl9vblN0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25TdGFydCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWJvcnQgc3RhcnQgZXZlbnQgaWYgaXQgdHVybnMgb3V0IHRvIGJlIG5vbi1jYW5jZWxhYmxlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9hYm9ydE5vbkNhbmNlbGFibGUgPSBmdW5jdGlvbihlKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUsXG4gICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuX3N0YXJ0RXZlbnQgJiYgZS5jYW5jZWxhYmxlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIGRyYWcgcHJvY2VkdXJlIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vblN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9zdGFydEV2ZW50O1xuICAgIGlmICghZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuXG4gICAgLy8gU2V0IHVwIGluaXQgZGF0YSBhbmQgZW1pdCBzdGFydCBldmVudC5cbiAgICB0aGlzLl9zdGFydFggPSB0aGlzLl9jdXJyZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy5fc3RhcnRZID0gdGhpcy5fY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fZW1pdChldmVudHMuc3RhcnQsIGUpO1xuICAgIERyYWdnZXIuX2FjdGl2YXRlSW5zdGFuY2UodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIG1vdmUgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY3VycmVudFggPSB0b3VjaC5jbGllbnRYO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5tb3ZlLCBlKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgbW92ZSBjYW5jZWwgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uQ2FuY2VsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICghdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpKSByZXR1cm47XG5cbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5jYW5jZWwsIGUpO1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIGVuZCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25FbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLl9nZXRUcmFja2VkVG91Y2goZSkpIHJldHVybjtcblxuICAgIHRoaXMuX2VtaXQoZXZlbnRzLmVuZCwgZSk7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgYmVpbmcgZHJhZ2dlZCBhdCB0aGUgbW9tZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRlcklkICE9PSBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgZWxlbWVudCdzIHRvdWNoLWFjdGlvbiBDU1MgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuc2V0VG91Y2hBY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIFN0b3JlIHVubW9kaWZpZWQgdG91Y2ggYWN0aW9uIHZhbHVlICh3ZSB0cnVzdCB1c2VyIGlucHV0IGhlcmUpLlxuICAgIHRoaXMuX3RvdWNoQWN0aW9uID0gdmFsdWU7XG5cbiAgICAvLyBTZXQgdG91Y2gtYWN0aW9uIHN0eWxlLlxuICAgIGlmICh0YVByb3BQcmVmaXhlZCkge1xuICAgICAgdGhpcy5fY3NzUHJvcHNbdGFQcm9wUHJlZml4ZWRdID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3RhUHJvcFByZWZpeGVkXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgYW4gdW5zdXBwb3J0ZWQgdG91Y2gtYWN0aW9uIHZhbHVlIGxldCdzIGFkZCBhIHNwZWNpYWwgbGlzdGVuZXJcbiAgICAvLyB0aGF0IHByZXZlbnRzIGRlZmF1bHQgYWN0aW9uIG9uIHRvdWNoIHN0YXJ0IGV2ZW50LiBBIGRpcnR5IGhhY2ssIGJ1dCBiZXN0XG4gICAgLy8gd2UgY2FuIGRvIGZvciBub3cuIFRoZSBvdGhlciBvcHRpb25zIHdvdWxkIGJlIHRvIHNvbWVob3cgcG9seWZpbGwgdGhlXG4gICAgLy8gdW5zdXBwb3J0ZWQgdG91Y2ggYWN0aW9uIGJlaGF2aW9yIHdpdGggY3VzdG9tIGhldXJpc3RpY3Mgd2hpY2ggc291bmRzIGxpa2VcbiAgICAvLyBhIGNhbiBvZiB3b3Jtcy5cbiAgICBpZiAoaGFzVG91Y2hFdmVudHMpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCwgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlW3RhUHJvcFByZWZpeGVkXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGVsZW1lbnQncyBDU1MgcHJvcGVydGllcy4gQWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBjYW1lbCBjYXNlZCBzdHlsZVxuICAgKiBwcm9wcyB3aXRoIHZhbHVlIHBhaXJzIGFzIGl0J3MgZmlyc3QgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbbmV3UHJvcHNdXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5zZXRDc3NQcm9wcyA9IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgaWYgKCFuZXdQcm9wcykgcmV0dXJuO1xuXG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX2Nzc1Byb3BzO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgcHJvcDtcbiAgICB2YXIgcHJlZml4ZWRQcm9wO1xuXG4gICAgLy8gUmVzZXQgY3VycmVudCBwcm9wcy5cbiAgICBmb3IgKHByb3AgaW4gY3VycmVudFByb3BzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gY3VycmVudFByb3BzW3Byb3BdO1xuICAgICAgZGVsZXRlIGN1cnJlbnRQcm9wc1twcm9wXTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbmV3IHByb3BzLlxuICAgIGZvciAocHJvcCBpbiBuZXdQcm9wcykge1xuICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSB2YWx1ZSBmb3IgdGhlIHByb3AuXG4gICAgICBpZiAoIW5ld1Byb3BzW3Byb3BdKSBjb250aW51ZTtcblxuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdG91Y2gtYWN0aW9uLlxuICAgICAgaWYgKHByb3AgPT09IHRhUHJvcCkge1xuICAgICAgICB0aGlzLnNldFRvdWNoQWN0aW9uKG5ld1Byb3BzW3Byb3BdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBwcmVmaXhlZCBwcm9wIGFuZCBza2lwIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAgcHJlZml4ZWRQcm9wID0gZ2V0UHJlZml4ZWRQcm9wTmFtZShlbGVtZW50LnN0eWxlLCBwcm9wKTtcbiAgICAgIGlmICghcHJlZml4ZWRQcm9wKSBjb250aW51ZTtcblxuICAgICAgLy8gU3RvcmUgdGhlIHByb3AgYW5kIGFkZCB0aGUgc3R5bGUuXG4gICAgICBjdXJyZW50UHJvcHNbcHJlZml4ZWRQcm9wXSA9ICcnO1xuICAgICAgZWxlbWVudC5zdHlsZVtwcmVmaXhlZFByb3BdID0gbmV3UHJvcHNbcHJvcF07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgcG9pbnRlciBoYXMgbW92ZWQgb24geC1heGlzIGZyb20gc3RhcnQgcG9zaXRpb24sIGluIHBpeGVscy5cbiAgICogUG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIG1vdmVtZW50IGZyb20gbGVmdCB0byByaWdodC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhWCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50WCAtIHRoaXMuX3N0YXJ0WDtcbiAgfTtcblxuICAvKipcbiAgICogSG93IG11Y2ggdGhlIHBvaW50ZXIgaGFzIG1vdmVkIG9uIHktYXhpcyBmcm9tIHN0YXJ0IHBvc2l0aW9uLCBpbiBwaXhlbHMuXG4gICAqIFBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBtb3ZlbWVudCBmcm9tIHRvcCB0byBib3R0b20uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREZWx0YVkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFkgLSB0aGlzLl9zdGFydFk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgKGluIHBpeGVscykgaGFzIHBvaW50ZXIgbW92ZWQgZnJvbSBzdGFydCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHggPSB0aGlzLmdldERlbHRhWCgpO1xuICAgIHZhciB5ID0gdGhpcy5nZXREZWx0YVkoKTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbG9uZyBoYXMgcG9pbnRlciBiZWVuIGRyYWdnZWQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREZWx0YVRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lID8gRGF0ZS5ub3coKSAtIHRoaXMuX3N0YXJ0VGltZSA6IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICogICAtICdzdGFydCcsICdtb3ZlJywgJ2NhbmNlbCcgb3IgJ2VuZCcuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICogICAtICdzdGFydCcsICdtb3ZlJywgJ2NhbmNlbCcgb3IgJ2VuZCcuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudHMsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCB1bmJpbmQgYWxsIGRyYWcgZXZlbnQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBldmVudHMgPSBEcmFnZ2VyLl9ldmVudHM7XG5cbiAgICAvLyBSZXNldCBkYXRhIGFuZCBkZWFjdGl2YXRlIHRoZSBpbnN0YW5jZS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gRGVzdHJveSBlbWl0dGVyLlxuICAgIHRoaXMuX2VtaXR0ZXIuZGVzdHJveSgpO1xuXG4gICAgLy8gVW5iaW5kIGV2ZW50IGhhbmRsZXJzLlxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERyYWdnZXIuX21vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG5cbiAgICAvLyBSZXNldCBzdHlsZXMuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLl9jc3NQcm9wcykge1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHRoaXMuX2Nzc1Byb3BzW3Byb3BdO1xuICAgICAgZGVsZXRlIHRoaXMuX2Nzc1Byb3BzW3Byb3BdO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGRhdGEuXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBNYXJrIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgdGlja2VyIHN5c3RlbSBmb3IgaGFuZGxpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXMgaW4gYW4gZWZmaWNpZW50IHdheS5cbiAgICogQ29udGFpbnMgYSByZWFkIHF1ZXVlIGFuZCBhIHdyaXRlIHF1ZXVlIHRoYXQgYXJlIHByb2Nlc3NlZCBvbiB0aGUgbmV4dFxuICAgKiBhbmltYXRpb24gZnJhbWUgd2hlbiBuZWVkZWQuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gVGlja2VyKCkge1xuICAgIHRoaXMuX25leHRTdGVwID0gbnVsbDtcblxuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5fcmVhZHMgPSB7fTtcbiAgICB0aGlzLl93cml0ZXMgPSB7fTtcblxuICAgIHRoaXMuX2JhdGNoID0gW107XG4gICAgdGhpcy5fYmF0Y2hSZWFkcyA9IHt9O1xuICAgIHRoaXMuX2JhdGNoV3JpdGVzID0ge307XG5cbiAgICB0aGlzLl9zdGVwID0gdGhpcy5fc3RlcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVGlja2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihpZCwgcmVhZE9wZXJhdGlvbiwgd3JpdGVPcGVyYXRpb24sIGlzUHJpb3JpdGl6ZWQpIHtcbiAgICAvLyBGaXJzdCwgbGV0J3MgY2hlY2sgaWYgYW4gaXRlbSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgcXVldWVzIHdpdGggdGhlIHNhbWUgaWRcbiAgICAvLyBhbmQgaWYgc28gLT4gcmVtb3ZlIGl0LlxuICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLl9xdWV1ZS5pbmRleE9mKGlkKTtcbiAgICBpZiAoY3VycmVudEluZGV4ID4gLTEpIHRoaXMuX3F1ZXVlW2N1cnJlbnRJbmRleF0gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBBZGQgZW50cnkuXG4gICAgaXNQcmlvcml0aXplZCA/IHRoaXMuX3F1ZXVlLnVuc2hpZnQoaWQpIDogdGhpcy5fcXVldWUucHVzaChpZCk7XG4gICAgdGhpcy5fcmVhZHNbaWRdID0gcmVhZE9wZXJhdGlvbjtcbiAgICB0aGlzLl93cml0ZXNbaWRdID0gd3JpdGVPcGVyYXRpb247XG5cbiAgICAvLyBGaW5hbGx5LCBsZXQncyBraWNrLXN0YXJ0IHRoZSBuZXh0IHRpY2sgaWYgaXQgaXMgbm90IHJ1bm5pbmcgeWV0LlxuICAgIGlmICghdGhpcy5fbmV4dFN0ZXApIHRoaXMuX25leHRTdGVwID0gcmFmKHRoaXMuX3N0ZXApO1xuICB9O1xuXG4gIFRpY2tlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5fcXVldWUuaW5kZXhPZihpZCk7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9xdWV1ZVtjdXJyZW50SW5kZXhdID0gdW5kZWZpbmVkO1xuICAgICAgZGVsZXRlIHRoaXMuX3JlYWRzW2lkXTtcbiAgICAgIGRlbGV0ZSB0aGlzLl93cml0ZXNbaWRdO1xuICAgIH1cbiAgfTtcblxuICBUaWNrZXIucHJvdG90eXBlLl9zdGVwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHJlYWRzID0gdGhpcy5fcmVhZHM7XG4gICAgdmFyIHdyaXRlcyA9IHRoaXMuX3dyaXRlcztcbiAgICB2YXIgYmF0Y2ggPSB0aGlzLl9iYXRjaDtcbiAgICB2YXIgYmF0Y2hSZWFkcyA9IHRoaXMuX2JhdGNoUmVhZHM7XG4gICAgdmFyIGJhdGNoV3JpdGVzID0gdGhpcy5fYmF0Y2hXcml0ZXM7XG4gICAgdmFyIGxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgaWQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZXNldCB0aWNrZXIuXG4gICAgdGhpcy5fbmV4dFN0ZXAgPSBudWxsO1xuXG4gICAgLy8gU2V0dXAgcXVldWVzIGFuZCBjYWxsYmFjayBwbGFjZWhvbGRlcnMuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZCA9IHF1ZXVlW2ldO1xuICAgICAgaWYgKCFpZCkgY29udGludWU7XG5cbiAgICAgIGJhdGNoLnB1c2goaWQpO1xuXG4gICAgICBiYXRjaFJlYWRzW2lkXSA9IHJlYWRzW2lkXTtcbiAgICAgIGRlbGV0ZSByZWFkc1tpZF07XG5cbiAgICAgIGJhdGNoV3JpdGVzW2lkXSA9IHdyaXRlc1tpZF07XG4gICAgICBkZWxldGUgd3JpdGVzW2lkXTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBxdWV1ZS5cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgLy8gUHJvY2VzcyByZWFkIGNhbGxiYWNrcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkID0gYmF0Y2hbaV07XG4gICAgICBpZiAoYmF0Y2hSZWFkc1tpZF0pIHtcbiAgICAgICAgYmF0Y2hSZWFkc1tpZF0oKTtcbiAgICAgICAgZGVsZXRlIGJhdGNoUmVhZHNbaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb2Nlc3Mgd3JpdGUgY2FsbGJhY2tzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWQgPSBiYXRjaFtpXTtcbiAgICAgIGlmIChiYXRjaFdyaXRlc1tpZF0pIHtcbiAgICAgICAgYmF0Y2hXcml0ZXNbaWRdKCk7XG4gICAgICAgIGRlbGV0ZSBiYXRjaFdyaXRlc1tpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgYmF0Y2guXG4gICAgYmF0Y2gubGVuZ3RoID0gMDtcblxuICAgIC8vIFJlc3RhcnQgdGhlIHRpY2tlciBpZiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9uZXh0U3RlcCAmJiBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX25leHRTdGVwID0gcmFmKHRoaXMuX3N0ZXApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdGlja2VyID0gbmV3IFRpY2tlcigpO1xuXG4gIHZhciBsYXlvdXRUaWNrID0gJ2xheW91dCc7XG4gIHZhciB2aXNpYmlsaXR5VGljayA9ICd2aXNpYmlsaXR5JztcbiAgdmFyIG1vdmVUaWNrID0gJ21vdmUnO1xuICB2YXIgc2Nyb2xsVGljayA9ICdzY3JvbGwnO1xuICB2YXIgcGxhY2Vob2xkZXJUaWNrID0gJ3BsYWNlaG9sZGVyJztcblxuICBmdW5jdGlvbiBhZGRMYXlvdXRUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgbGF5b3V0VGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbExheW91dFRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgbGF5b3V0VGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRWaXNpYmlsaXR5VGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHZpc2liaWxpdHlUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsVmlzaWJpbGl0eVRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgdmlzaWJpbGl0eVRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTW92ZVRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBtb3ZlVGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbE1vdmVUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIG1vdmVUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbFRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBzY3JvbGxUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2ssIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsU2Nyb2xsVGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBzY3JvbGxUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFBsYWNlaG9sZGVyVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHBsYWNlaG9sZGVyVGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBwbGFjZWhvbGRlclRpY2spO1xuICB9XG5cbiAgdmFyIEVsUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gIHZhciBtYXRjaGVzRm4gPVxuICAgIEVsUHJvdG8ubWF0Y2hlcyB8fFxuICAgIEVsUHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBlbGVtZW50IG1hdGNoZXMgYSBDU1Mgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gZWxlbWVudE1hdGNoZXMoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNGbi5jYWxsKGVsLCBzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNsYXNzIHRvIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFlbGVtZW50TWF0Y2hlcyhlbGVtZW50LCAnLicgKyBjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcEFycmF5ID0gW107XG4gIHZhciBudW1iZXJUeXBlID0gJ251bWJlcic7XG5cbiAgLyoqXG4gICAqIEluc2VydCBhbiBpdGVtIG9yIGFuIGFycmF5IG9mIGl0ZW1zIHRvIGFycmF5IHRvIGEgc3BlY2lmaWVkIGluZGV4LiBNdXRhdGVzXG4gICAqIHRoZSBhcnJheS4gVGhlIGluZGV4IGNhbiBiZSBuZWdhdGl2ZSBpbiB3aGljaCBjYXNlIHRoZSBpdGVtcyB3aWxsIGJlIGFkZGVkXG4gICAqIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXg9LTFdXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheUluc2VydChhcnJheSwgaXRlbXMsIGluZGV4KSB7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSB0eXBlb2YgaW5kZXggPT09IG51bWJlclR5cGUgPyBpbmRleCA6IC0xO1xuICAgIGlmIChzdGFydEluZGV4IDwgMCkgc3RhcnRJbmRleCA9IGFycmF5Lmxlbmd0aCAtIHN0YXJ0SW5kZXggKyAxO1xuXG4gICAgYXJyYXkuc3BsaWNlLmFwcGx5KGFycmF5LCB0ZW1wQXJyYXkuY29uY2F0KHN0YXJ0SW5kZXgsIDAsIGl0ZW1zKSk7XG4gICAgdGVtcEFycmF5Lmxlbmd0aCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIGFycmF5IGluZGV4LiBCYXNpY2FsbHkgdGhpcyBmdW5jdGlvbiBtYWtlcyBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkXG4gICAqIGFycmF5IGluZGV4IGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgYWxzbyB0cmFuc2Zvcm1zXG4gICAqIG5lZ2F0aXZlIGluZGV4IHRvIHRoZSBtYXRjaGluZyBwb3NpdGl2ZSBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNNaWdyYXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGluZGV4LCBpc01pZ3JhdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIG1heEluZGV4ID0gTWF0aC5tYXgoMCwgaXNNaWdyYXRpb24gPyBsZW5ndGggOiBsZW5ndGggLSAxKTtcbiAgICByZXR1cm4gaW5kZXggPiBtYXhJbmRleCA/IG1heEluZGV4IDogaW5kZXggPCAwID8gTWF0aC5tYXgobWF4SW5kZXggKyBpbmRleCArIDEsIDApIDogaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhcnJheSBpdGVtIHRvIGFub3RoZXIgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgb2YgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIG1vdmVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSB3aGVyZSB0aGUgaXRlbSBzaG91bGQgYmUgbW92ZWQgdG8uXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheU1vdmUoYXJyYXksIGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXJyYXkgaGFzIHR3byBvciBtb3JlIGl0ZW1zLlxuICAgIGlmIChhcnJheS5sZW5ndGggPCAyKSByZXR1cm47XG5cbiAgICAvLyBOb3JtYWxpemUgdGhlIGluZGljZXMuXG4gICAgdmFyIGZyb20gPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCBmcm9tSW5kZXgpO1xuICAgIHZhciB0byA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIHRvSW5kZXgpO1xuXG4gICAgLy8gQWRkIHRhcmdldCBpdGVtIHRvIHRoZSBuZXcgcG9zaXRpb24uXG4gICAgaWYgKGZyb20gIT09IHRvKSB7XG4gICAgICBhcnJheS5zcGxpY2UodG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN3YXAgYXJyYXkgaXRlbXMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgaXRlbSB0aGF0IHdpbGwgYmUgc3dhcHBlZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpdGhJbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgb3RoZXIgaXRlbSB0aGF0IHdpbGwgYmUgc3dhcHBlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5U3dhcChhcnJheSwgaW5kZXgsIHdpdGhJbmRleCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXJyYXkgaGFzIHR3byBvciBtb3JlIGl0ZW1zLlxuICAgIGlmIChhcnJheS5sZW5ndGggPCAyKSByZXR1cm47XG5cbiAgICAvLyBOb3JtYWxpemUgdGhlIGluZGljZXMuXG4gICAgdmFyIGluZGV4QSA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGluZGV4KTtcbiAgICB2YXIgaW5kZXhCID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgd2l0aEluZGV4KTtcbiAgICB2YXIgdGVtcDtcblxuICAgIC8vIFN3YXAgdGhlIGl0ZW1zLlxuICAgIGlmIChpbmRleEEgIT09IGluZGV4Qikge1xuICAgICAgdGVtcCA9IGFycmF5W2luZGV4QV07XG4gICAgICBhcnJheVtpbmRleEFdID0gYXJyYXlbaW5kZXhCXTtcbiAgICAgIGFycmF5W2luZGV4Ql0gPSB0ZW1wO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhY3Rpb25DYW5jZWwgPSAnY2FuY2VsJztcbiAgdmFyIGFjdGlvbkZpbmlzaCA9ICdmaW5pc2gnO1xuICB2YXIgZGVib3VuY2VUaWNrID0gJ2RlYm91bmNlJztcbiAgdmFyIGRlYm91bmNlSWQgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gICAqIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgICogTiBtaWxsaXNlY29uZHMuIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBhY2NlcHRzIG9uZSBhcmd1bWVudCB3aGljaCwgd2hlblxuICAgKiBiZWluZyBcImZpbmlzaFwiLCBjYWxscyB0aGUgZGVib3VuY2UgZnVuY3Rpb24gaW1tZWRpYXRlbHkgaWYgaXQgaXMgY3VycmVudGx5XG4gICAqIHdhaXRpbmcgdG8gYmUgY2FsbGVkLCBhbmQgd2hlbiBiZWluZyBcImNhbmNlbFwiIGNhbmNlbHMgdGhlIGN1cnJlbnRseSBxdWV1ZWRcbiAgICogZnVuY3Rpb24gY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZGVib3VuY2UoZm4sIHdhaXQpIHtcbiAgICB2YXIgdGltZW91dDtcbiAgICB2YXIgdGlja2VySWQgPSArK2RlYm91bmNlSWQgKyBkZWJvdW5jZVRpY2s7XG5cbiAgICBpZiAod2FpdCA+IDApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpY2tlci5jYW5jZWwodGlja2VySWQpO1xuICAgICAgICAgIGlmIChhY3Rpb24gPT09IGFjdGlvbkZpbmlzaCkgZm4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24gIT09IGFjdGlvbkNhbmNlbCAmJiBhY3Rpb24gIT09IGFjdGlvbkZpbmlzaCkge1xuICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aWNrZXIuYWRkKHRpY2tlcklkLCBmbiwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgd2FpdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgaWYgKGFjdGlvbiAhPT0gYWN0aW9uQ2FuY2VsKSBmbigpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGVsZW1lbnQgaXMgdHJhbnNmb3JtZWQsIGZhbHNlIGlmIG5vdC4gSW4gcHJhY3RpY2UgdGhlXG4gICAqIGVsZW1lbnQncyBkaXNwbGF5IHZhbHVlIG11c3QgYmUgYW55dGhpbmcgZWxzZSB0aGFuIFwibm9uZVwiIG9yIFwiaW5saW5lXCIgYXNcbiAgICogd2VsbCBhcyBoYXZlIGEgdmFsaWQgdHJhbnNmb3JtIHZhbHVlIGFwcGxpZWQgaW4gb3JkZXIgdG8gYmUgY291bnRlZCBhcyBhXG4gICAqIHRyYW5zZm9ybWVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEJvcnJvd2VkIGZyb20gTWV6ciAodjAuNi4xKTpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3JhbW8vbWV6ci9ibG9iLzAuNi4xL21lenIuanMjTDY2MVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNUcmFuc2Zvcm1lZChlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IGdldFN0eWxlKGVsZW1lbnQsICd0cmFuc2Zvcm0nKTtcbiAgICBpZiAoIXRyYW5zZm9ybSB8fCB0cmFuc2Zvcm0gPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGRpc3BsYXkgPSBnZXRTdHlsZShlbGVtZW50LCAnZGlzcGxheScpO1xuICAgIGlmIChkaXNwbGF5ID09PSAnaW5saW5lJyB8fCBkaXNwbGF5ID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYWJzb2x1dGUgcG9zaXRpb25lZCBlbGVtZW50J3MgY29udGFpbmluZyBibG9jaywgd2hpY2ggaXNcbiAgICogY29uc2lkZXJlZCB0byBiZSB0aGUgY2xvc2VzdCBhbmNlc3RvciBlbGVtZW50IHRoYXQgdGhlIHRhcmdldCBlbGVtZW50J3NcbiAgICogcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8uIERpc2NsYWltZXI6IHRoaXMgb25seSB3b3JrcyBhcyBpbnRlbmRlZCBmb3JcbiAgICogYWJzb2x1dGUgcG9zaXRpb25lZCBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbmNsdWRlU2VsZj1mYWxzZV1cbiAgICogICAtIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSB0aGUgY29udGFpbmluZyBibG9jayBjaGVja2luZyBpcyBzdGFydGVkIGZyb21cbiAgICogICAgIHRoZSBwcm92aWRlZCBlbGVtZW50LiBPdGhlcndpc2UgdGhlIGNoZWNraW5nIGlzIHN0YXJ0ZWQgZnJvbSB0aGVcbiAgICogICAgIHByb3ZpZGVkIGVsZW1lbnQncyBwYXJlbnQgZWxlbWVudC5cbiAgICogQHJldHVybnMgeyhEb2N1bWVudHxFbGVtZW50KX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50LCBpbmNsdWRlU2VsZikge1xuICAgIC8vIEFzIGxvbmcgYXMgdGhlIGNvbnRhaW5pbmcgYmxvY2sgaXMgYW4gZWxlbWVudCwgc3RhdGljIGFuZCBub3RcbiAgICAvLyB0cmFuc2Zvcm1lZCwgdHJ5IHRvIGdldCB0aGUgZWxlbWVudCdzIHBhcmVudCBlbGVtZW50IGFuZCBmYWxsYmFjayB0b1xuICAgIC8vIGRvY3VtZW50LiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzcmFtby9tZXpyL2Jsb2IvMC42LjEvbWV6ci5qcyNMMzM5XG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciByZXQgPSAoaW5jbHVkZVNlbGYgPyBlbGVtZW50IDogZWxlbWVudC5wYXJlbnRFbGVtZW50KSB8fCBkb2N1bWVudDtcbiAgICB3aGlsZSAocmV0ICYmIHJldCAhPT0gZG9jdW1lbnQgJiYgZ2V0U3R5bGUocmV0LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiYgIWlzVHJhbnNmb3JtZWQocmV0KSkge1xuICAgICAgcmV0ID0gcmV0LnBhcmVudEVsZW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29tcHV0ZWQgdmFsdWUgb2YgYW4gZWxlbWVudCdzIHN0eWxlIHByb3BlcnR5IHRyYW5zZm9ybWVkIGludG9cbiAgICogYSBmbG9hdCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZUFzRmxvYXQoZWwsIHN0eWxlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZ2V0U3R5bGUoZWwsIHN0eWxlKSkgfHwgMDtcbiAgfVxuXG4gIHZhciBvZmZzZXRBID0ge307XG4gIHZhciBvZmZzZXRCID0ge307XG4gIHZhciBvZmZzZXREaWZmID0ge307XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQncyBkb2N1bWVudCBvZmZzZXQsIHdoaWNoIGluIHByYWN0aWNlIG1lYW5zIHRoZSB2ZXJ0aWNhbFxuICAgKiBhbmQgaG9yaXpvbnRhbCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBlbGVtZW50J3Mgbm9ydGh3ZXN0IGNvcm5lciBhbmQgdGhlXG4gICAqIGRvY3VtZW50J3Mgbm9ydGh3ZXN0IGNvcm5lci4gTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gYWx3YXlzIHJldHVybnMgdGhlIHNhbWVcbiAgICogb2JqZWN0IHNvIGJlIHN1cmUgdG8gcmVhZCB0aGUgZGF0YSBmcm9tIGl0IGluc3RlYWQgdXNpbmcgaXQgYXMgYSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7KERvY3VtZW50fEVsZW1lbnR8V2luZG93KX0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29mZnNldERhdGFdXG4gICAqICAgLSBPcHRpb25hbCBkYXRhIG9iamVjdCB3aGVyZSB0aGUgb2Zmc2V0IGRhdGEgd2lsbCBiZSBpbnNlcnRlZCB0by4gSWYgbm90XG4gICAqICAgICBwcm92aWRlZCBhIG5ldyBvYmplY3Qgd2lsbCBiZSBjcmVhdGVkIGZvciB0aGUgcmV0dXJuIGRhdGEuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXQoZWxlbWVudCwgb2Zmc2V0RGF0YSkge1xuICAgIHZhciByZXQgPSBvZmZzZXREYXRhIHx8IHt9O1xuICAgIHZhciByZWN0O1xuXG4gICAgLy8gU2V0IHVwIHJldHVybiBkYXRhLlxuICAgIHJldC5sZWZ0ID0gMDtcbiAgICByZXQudG9wID0gMDtcblxuICAgIC8vIERvY3VtZW50J3Mgb2Zmc2V0cyBhcmUgYWx3YXlzIDAuXG4gICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50KSByZXR1cm4gcmV0O1xuXG4gICAgLy8gQWRkIHZpZXdwb3J0IHNjcm9sbCBsZWZ0L3RvcCB0byB0aGUgcmVzcGVjdGl2ZSBvZmZzZXRzLlxuICAgIHJldC5sZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IDA7XG4gICAgcmV0LnRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCAwO1xuXG4gICAgLy8gV2luZG93J3Mgb2Zmc2V0cyBhcmUgdGhlIHZpZXdwb3J0IHNjcm9sbCBsZWZ0L3RvcCB2YWx1ZXMuXG4gICAgaWYgKGVsZW1lbnQuc2VsZiA9PT0gd2luZG93LnNlbGYpIHJldHVybiByZXQ7XG5cbiAgICAvLyBBZGQgZWxlbWVudCdzIGNsaWVudCByZWN0cyB0byB0aGUgb2Zmc2V0cy5cbiAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXQubGVmdCArPSByZWN0LmxlZnQ7XG4gICAgcmV0LnRvcCArPSByZWN0LnRvcDtcblxuICAgIC8vIEV4Y2x1ZGUgZWxlbWVudCdzIGJvcmRlcnMgZnJvbSB0aGUgb2Zmc2V0LlxuICAgIHJldC5sZWZ0ICs9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLWxlZnQtd2lkdGgnKTtcbiAgICByZXQudG9wICs9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIG9mZnNldCBkaWZmZXJlbmNlIHR3byBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbUFcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbUJcbiAgICogQHBhcmFtIHtCb29sZWFufSBbY29tcGFyZUNvbnRhaW5pbmdCbG9ja3M9ZmFsc2VdXG4gICAqICAgLSBXaGVuIHRoaXMgaXMgc2V0IHRvIHRydWUgdGhlIGNvbnRhaW5pbmcgYmxvY2tzIG9mIHRoZSBwcm92aWRlZCBlbGVtZW50c1xuICAgKiAgICAgd2lsbCBiZSB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgZGlmZmVyZW5jZS4gT3RoZXJ3aXNlIHRoZSBwcm92aWRlZFxuICAgKiAgICAgZWxlbWVudHMgd2lsbCBiZSBjb21wYXJlZCBkaXJlY3RseS5cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldE9mZnNldERpZmYoZWxlbUEsIGVsZW1CLCBjb21wYXJlQ29udGFpbmluZ0Jsb2Nrcykge1xuICAgIG9mZnNldERpZmYubGVmdCA9IDA7XG4gICAgb2Zmc2V0RGlmZi50b3AgPSAwO1xuXG4gICAgLy8gSWYgZWxlbWVudHMgYXJlIHNhbWUgbGV0J3MgcmV0dXJuIGVhcmx5LlxuICAgIGlmIChlbGVtQSA9PT0gZWxlbUIpIHJldHVybiBvZmZzZXREaWZmO1xuXG4gICAgLy8gQ29tcGFyZSBjb250YWluaW5nIGJsb2NrcyBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKGNvbXBhcmVDb250YWluaW5nQmxvY2tzKSB7XG4gICAgICBlbGVtQSA9IGdldENvbnRhaW5pbmdCbG9jayhlbGVtQSwgdHJ1ZSk7XG4gICAgICBlbGVtQiA9IGdldENvbnRhaW5pbmdCbG9jayhlbGVtQiwgdHJ1ZSk7XG5cbiAgICAgIC8vIElmIGNvbnRhaW5pbmcgYmxvY2tzIGFyZSBpZGVudGljYWwsIGxldCdzIHJldHVybiBlYXJseS5cbiAgICAgIGlmIChlbGVtQSA9PT0gZWxlbUIpIHJldHVybiBvZmZzZXREaWZmO1xuICAgIH1cblxuICAgIC8vIEZpbmFsbHksIGxldCdzIGNhbGN1bGF0ZSB0aGUgb2Zmc2V0IGRpZmYuXG4gICAgZ2V0T2Zmc2V0KGVsZW1BLCBvZmZzZXRBKTtcbiAgICBnZXRPZmZzZXQoZWxlbUIsIG9mZnNldEIpO1xuICAgIG9mZnNldERpZmYubGVmdCA9IG9mZnNldEIubGVmdCAtIG9mZnNldEEubGVmdDtcbiAgICBvZmZzZXREaWZmLnRvcCA9IG9mZnNldEIudG9wIC0gb2Zmc2V0QS50b3A7XG5cbiAgICByZXR1cm4gb2Zmc2V0RGlmZjtcbiAgfVxuXG4gIHZhciBzdHlsZU92ZXJmbG93ID0gJ292ZXJmbG93JztcbiAgdmFyIHN0eWxlT3ZlcmZsb3dYID0gJ292ZXJmbG93LXgnO1xuICB2YXIgc3R5bGVPdmVyZmxvd1kgPSAnb3ZlcmZsb3cteSc7XG4gIHZhciBvdmVyZmxvd0F1dG8gPSAnYXV0byc7XG4gIHZhciBvdmVyZmxvd1Njcm9sbCA9ICdzY3JvbGwnO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIHNjcm9sbGFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWxlbWVudCkge1xuICAgIHZhciBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3cpO1xuICAgIGlmIChvdmVyZmxvdyA9PT0gb3ZlcmZsb3dBdXRvIHx8IG92ZXJmbG93ID09PSBvdmVyZmxvd1Njcm9sbCkgcmV0dXJuIHRydWU7XG5cbiAgICBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3dYKTtcbiAgICBpZiAob3ZlcmZsb3cgPT09IG92ZXJmbG93QXV0byB8fCBvdmVyZmxvdyA9PT0gb3ZlcmZsb3dTY3JvbGwpIHJldHVybiB0cnVlO1xuXG4gICAgb3ZlcmZsb3cgPSBnZXRTdHlsZShlbGVtZW50LCBzdHlsZU92ZXJmbG93WSk7XG4gICAgaWYgKG92ZXJmbG93ID09PSBvdmVyZmxvd0F1dG8gfHwgb3ZlcmZsb3cgPT09IG92ZXJmbG93U2Nyb2xsKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0IGVsZW1lbnQncyBhbmNlc3RvcnMgdGhhdCBhcmUgcG90ZW50aWFsbHkgc2Nyb2xsYWJsZSBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbmNsdWRlU2VsZj1mYWxzZV1cbiAgICogQHBhcmFtIHtBcnJheX0gW2RhdGFdXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFNjcm9sbGFibGVBbmNlc3RvcnMoZWxlbWVudCwgaW5jbHVkZVNlbGYsIGRhdGEpIHtcbiAgICB2YXIgcmV0ID0gZGF0YSB8fCBbXTtcbiAgICB2YXIgcGFyZW50ID0gaW5jbHVkZVNlbGYgPyBlbGVtZW50IDogZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgLy8gRmluZCBzY3JvbGwgcGFyZW50cy5cbiAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgIC8vIElmIGVsZW1lbnQgaXMgaW5zaWRlIFNoYWRvd0RPTSBsZXQncyBnZXQgaXQncyBob3N0IG5vZGUgZnJvbSB0aGUgcmVhbFxuICAgICAgLy8gRE9NIGFuZCBjb250aW51ZSBsb29waW5nLlxuICAgICAgaWYgKHBhcmVudC5nZXRSb290Tm9kZSAmJiBwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5nZXRSb290Tm9kZSgpLmhvc3Q7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBlbGVtZW50IGlzIHNjcm9sbGFibGUgbGV0J3MgYWRkIGl0IHRvIHRoZSBzY3JvbGxhYmxlIGxpc3QuXG4gICAgICBpZiAoaXNTY3JvbGxhYmxlKHBhcmVudCkpIHtcbiAgICAgICAgcmV0LnB1c2gocGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGFkZCB3aW5kb3cgdG8gdGhlIHJlc3VsdHMuXG4gICAgcmV0LnB1c2god2luZG93KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlVmFsdWUgPSB7fTtcbiAgdmFyIHRyYW5zZm9ybVN0eWxlJDIgPSAndHJhbnNmb3JtJztcbiAgdmFyIHRyYW5zZm9ybU5vbmUgPSAnbm9uZSc7XG4gIHZhciByeE1hdDNkID0gL15tYXRyaXgzZC87XG4gIHZhciByeE1hdFR4ID0gLyhbXixdKiwpezR9LztcbiAgdmFyIHJ4TWF0M2RUeCA9IC8oW14sXSosKXsxMn0vO1xuICB2YXIgcnhOZXh0SXRlbSA9IC9bXixdKiwvO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50J3MgY29tcHV0ZWQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZXMgYXMgYSBmbG9hdHMuXG4gICAqIFRoZSByZXR1cm5lZCBvYmplY3QgaXMgYWx3YXlzIHRoZSBzYW1lIG9iamVjdCBhbmQgdXBkYXRlZCBldmVyeSB0aW1lIHRoaXNcbiAgICogZnVuY3Rpb24gaXMgY2FsbGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWxlbWVudCkge1xuICAgIHRyYW5zbGF0ZVZhbHVlLnggPSAwO1xuICAgIHRyYW5zbGF0ZVZhbHVlLnkgPSAwO1xuXG4gICAgdmFyIHRyYW5zZm9ybSA9IGdldFN0eWxlKGVsZW1lbnQsIHRyYW5zZm9ybVN0eWxlJDIpO1xuICAgIGlmICghdHJhbnNmb3JtIHx8IHRyYW5zZm9ybSA9PT0gdHJhbnNmb3JtTm9uZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZVZhbHVlO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBzdHlsZSBjYW4gYmUgaW4gZWl0aGVyIG1hdHJpeDNkKC4uLikgb3IgbWF0cml4KC4uLikuXG4gICAgdmFyIGlzTWF0M2QgPSByeE1hdDNkLnRlc3QodHJhbnNmb3JtKTtcbiAgICB2YXIgdFggPSB0cmFuc2Zvcm0ucmVwbGFjZShpc01hdDNkID8gcnhNYXQzZFR4IDogcnhNYXRUeCwgJycpO1xuICAgIHZhciB0WSA9IHRYLnJlcGxhY2UocnhOZXh0SXRlbSwgJycpO1xuXG4gICAgdHJhbnNsYXRlVmFsdWUueCA9IHBhcnNlRmxvYXQodFgpIHx8IDA7XG4gICAgdHJhbnNsYXRlVmFsdWUueSA9IHBhcnNlRmxvYXQodFkpIHx8IDA7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRlVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgdmFsdWUgaW50byBDU1MgdHJhbnNmb3JtIHN0eWxlXG4gICAqIHByb3BlcnR5J3MgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUcmFuc2xhdGVTdHJpbmcoeCwgeSkge1xuICAgIHJldHVybiAndHJhbnNsYXRlWCgnICsgeCArICdweCkgdHJhbnNsYXRlWSgnICsgeSArICdweCknO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjbGFzcyBmcm9tIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnRNYXRjaGVzKGVsZW1lbnQsICcuJyArIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoJyAnICsgZWxlbWVudC5jbGFzc05hbWUgKyAnICcpXG4gICAgICAgICAgLnJlcGxhY2UoJyAnICsgY2xhc3NOYW1lICsgJyAnLCAnICcpXG4gICAgICAgICAgLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEcmFnIHN0YXJ0IHByZWRpY2F0ZSBzdGF0ZXMuXG4gIHZhciBzdGFydFByZWRpY2F0ZUluYWN0aXZlID0gMDtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUGVuZGluZyA9IDE7XG4gIHZhciBzdGFydFByZWRpY2F0ZVJlc29sdmVkID0gMjtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUmVqZWN0ZWQgPSAzO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvdWNoIGludGVyYWN0aW9uIHRvIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1EcmFnKGl0ZW0pIHtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2dyaWRJZCA9IGdyaWQuX2lkO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPSBmYWxzZTtcblxuICAgIC8vIFN0YXJ0IHByZWRpY2F0ZSBkYXRhLlxuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlID0gaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU3RhcnRQcmVkaWNhdGUpXG4gICAgICA/IHNldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZVxuICAgICAgOiBJdGVtRHJhZy5kZWZhdWx0U3RhcnRQcmVkaWNhdGU7XG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlSW5hY3RpdmU7XG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEYXRhIGZvciBkcmFnIHNvcnQgcHJlZGljYXRlIGhldXJpc3RpY3MuXG4gICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgdGhpcy5faFgxID0gMDtcbiAgICB0aGlzLl9oWDIgPSAwO1xuICAgIHRoaXMuX2hZMSA9IDA7XG4gICAgdGhpcy5faFkyID0gMDtcblxuICAgIC8vIFNldHVwIGl0ZW0ncyBpbml0aWFsIGRyYWcgZGF0YS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gQmluZCB0aGUgbWV0aG9kcyB0aGF0IG5lZWRzIGJpbmRpbmcuXG4gICAgdGhpcy5fcHJlU3RhcnRDaGVjayA9IHRoaXMuX3ByZVN0YXJ0Q2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVFbmRDaGVjayA9IHRoaXMuX3ByZUVuZENoZWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25TY3JvbGwgPSB0aGlzLl9vblNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZXBhcmVNb3ZlID0gdGhpcy5fcHJlcGFyZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9hcHBseU1vdmUgPSB0aGlzLl9hcHBseU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVwYXJlU2Nyb2xsID0gdGhpcy5fcHJlcGFyZVNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2FwcGx5U2Nyb2xsID0gdGhpcy5fYXBwbHlTY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9jaGVja092ZXJsYXAgPSB0aGlzLl9jaGVja092ZXJsYXAuYmluZCh0aGlzKTtcblxuICAgIC8vIENyZWF0ZSBkZWJvdW5jZSBvdmVybGFwIGNoZWNrZXIgZnVuY3Rpb24uXG4gICAgdmFyIHNvcnRJbnRlcnZhbCA9IHNldHRpbmdzLmRyYWdTb3J0SGV1cmlzdGljcy5zb3J0SW50ZXJ2YWw7XG4gICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UgPSBkZWJvdW5jZSh0aGlzLl9jaGVja092ZXJsYXAsIHNvcnRJbnRlcnZhbCk7XG5cbiAgICAvLyBJbml0IGRyYWdnZXIuXG4gICAgdGhpcy5fZHJhZ2dlciA9IG5ldyBEcmFnZ2VyKGVsZW1lbnQsIHNldHRpbmdzLmRyYWdDc3NQcm9wcyk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignc3RhcnQnLCB0aGlzLl9wcmVTdGFydENoZWNrKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdtb3ZlJywgdGhpcy5fcHJlU3RhcnRDaGVjayk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignY2FuY2VsJywgdGhpcy5fcHJlRW5kQ2hlY2spO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ2VuZCcsIHRoaXMuX3ByZUVuZENoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgc3RhdGljIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRyYWcgc3RhcnQgcHJlZGljYXRlIGhhbmRsZXIgdGhhdCBoYW5kbGVzIGFuY2hvciBlbGVtZW50c1xuICAgKiBncmFjZWZ1bGx5LiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoaXMgZnVuY3Rpb24gZGVmaW5lcyBpZiB0aGUgZHJhZyBpc1xuICAgKiBzdGFydGVkLCByZWplY3RlZCBvciBwZW5kaW5nLiBXaGVuIHRydWUgaXMgcmV0dXJuZWQgdGhlIGRyYWdnaW5nIGlzIHN0YXJ0ZWRcbiAgICogYW5kIHdoZW4gZmFsc2UgaXMgcmV0dXJuZWQgdGhlIGRyYWdnaW5nIGlzIHJlamVjdGVkLiBJZiBub3RoaW5nIGlzIHJldHVybmVkXG4gICAqIHRoZSBwcmVkaWNhdGUgd2lsbCBiZSBjYWxsZWQgYWdhaW4gb24gdGhlIG5leHQgZHJhZyBtb3ZlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqICAgLSBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCB3aGljaCBjYW4gYmUgdXNlZCB0byBwYXNzIHRoZSBwcmVkaWNhdGVcbiAgICogICAgIGl0J3Mgb3B0aW9ucyBtYW51YWxseS4gQnkgZGVmYXVsdCB0aGUgcHJlZGljYXRlIHJldHJpZXZlcyB0aGUgb3B0aW9uc1xuICAgKiAgICAgZnJvbSB0aGUgZ3JpZCdzIHNldHRpbmdzLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnLmRlZmF1bHRTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGl0ZW0sIGV2ZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGRyYWcgPSBpdGVtLl9kcmFnO1xuICAgIHZhciBwcmVkaWNhdGUgPSBkcmFnLl9zdGFydFByZWRpY2F0ZURhdGEgfHwgZHJhZy5fc2V0dXBTdGFydFByZWRpY2F0ZShvcHRpb25zKTtcblxuICAgIC8vIEZpbmFsIGV2ZW50IGxvZ2ljLiBBdCB0aGlzIHN0YWdlIHJldHVybiB2YWx1ZSBkb2VzIG5vdCBtYXR0ZXIgYW55bW9yZSxcbiAgICAvLyB0aGUgcHJlZGljYXRlIGlzIGVpdGhlciByZXNvbHZlZCBvciBpdCdzIG5vdCBhbmQgdGhlcmUncyBub3RoaW5nIHRvIGRvXG4gICAgLy8gYWJvdXQgaXQuIEhlcmUgd2UganVzdCByZXNldCBkYXRhIGFuZCBpZiB0aGUgaXRlbSBlbGVtZW50IGlzIGEgbGlua1xuICAgIC8vIHdlIGZvbGxvdyBpdCAoaWYgdGhlcmUgaGFzIG9ubHkgYmVlbiBzbGlnaHQgbW92ZW1lbnQpLlxuICAgIGlmIChldmVudC5pc0ZpbmFsKSB7XG4gICAgICBkcmFnLl9maW5pc2hTdGFydFByZWRpY2F0ZShldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmluZCBhbmQgc3RvcmUgdGhlIGhhbmRsZSBlbGVtZW50IHNvIHdlIGNhbiBjaGVjayBsYXRlciBvbiBpZiB0aGVcbiAgICAvLyBjdXJzb3IgaXMgd2l0aGluIHRoZSBoYW5kbGUuIElmIHdlIGhhdmUgYSBoYW5kbGUgc2VsZWN0b3IgbGV0J3MgZmluZFxuICAgIC8vIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnQuIE90aGVyd2lzZSBsZXQncyB1c2UgdGhlIGl0ZW0gZWxlbWVudCBhcyB0aGVcbiAgICAvLyBoYW5kbGUuXG4gICAgaWYgKCFwcmVkaWNhdGUuaGFuZGxlRWxlbWVudCkge1xuICAgICAgcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQgPSBkcmFnLl9nZXRTdGFydFByZWRpY2F0ZUhhbmRsZShldmVudCk7XG4gICAgICBpZiAoIXByZWRpY2F0ZS5oYW5kbGVFbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgZGVsYXkgaXMgZGVmaW5lZCBsZXQncyBrZWVwIHRyYWNrIG9mIHRoZSBsYXRlc3QgZXZlbnQgYW5kIGluaXRpYXRlXG4gICAgLy8gZGVsYXkgaWYgaXQgaGFzIG5vdCBiZWVuIGRvbmUgeWV0LlxuICAgIGlmIChwcmVkaWNhdGUuZGVsYXkpIHtcbiAgICAgIHByZWRpY2F0ZS5ldmVudCA9IGV2ZW50O1xuICAgICAgaWYgKCFwcmVkaWNhdGUuZGVsYXlUaW1lcikge1xuICAgICAgICBwcmVkaWNhdGUuZGVsYXlUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHByZWRpY2F0ZS5kZWxheSA9IDA7XG4gICAgICAgICAgaWYgKGRyYWcuX3Jlc29sdmVTdGFydFByZWRpY2F0ZShwcmVkaWNhdGUuZXZlbnQpKSB7XG4gICAgICAgICAgICBkcmFnLl9mb3JjZVJlc29sdmVTdGFydFByZWRpY2F0ZShwcmVkaWNhdGUuZXZlbnQpO1xuICAgICAgICAgICAgZHJhZy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgcHJlZGljYXRlLmRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZHJhZy5fcmVzb2x2ZVN0YXJ0UHJlZGljYXRlKGV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRGVmYXVsdCBkcmFnIHNvcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudGhyZXNob2xkPTUwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuYWN0aW9uPSdtb3ZlJ11cbiAgICogQHJldHVybnMgeyhCb29sZWFufERyYWdTb3J0Q29tbWFuZCl9XG4gICAqICAgLSBSZXR1cm5zIGZhbHNlIGlmIG5vIHZhbGlkIGluZGV4IHdhcyBmb3VuZC4gT3RoZXJ3aXNlIHJldHVybnMgZHJhZyBzb3J0XG4gICAqICAgICBjb21tYW5kLlxuICAgKi9cbiAgSXRlbURyYWcuZGVmYXVsdFNvcnRQcmVkaWNhdGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1SZWN0ID0ge307XG4gICAgdmFyIHRhcmdldFJlY3QgPSB7fTtcbiAgICB2YXIgcmV0dXJuRGF0YSA9IHt9O1xuICAgIHZhciByb290R3JpZEFycmF5ID0gW107XG5cbiAgICBmdW5jdGlvbiBnZXRUYXJnZXRHcmlkKGl0ZW0sIHJvb3RHcmlkLCB0aHJlc2hvbGQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBudWxsO1xuICAgICAgdmFyIGRyYWdTb3J0ID0gcm9vdEdyaWQuX3NldHRpbmdzLmRyYWdTb3J0O1xuICAgICAgdmFyIGJlc3RTY29yZSA9IC0xO1xuICAgICAgdmFyIGdyaWRTY29yZTtcbiAgICAgIHZhciBncmlkcztcbiAgICAgIHZhciBncmlkO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIEdldCBwb3RlbnRpYWwgdGFyZ2V0IGdyaWRzLlxuICAgICAgaWYgKGRyYWdTb3J0ID09PSB0cnVlKSB7XG4gICAgICAgIHJvb3RHcmlkQXJyYXlbMF0gPSByb290R3JpZDtcbiAgICAgICAgZ3JpZHMgPSByb290R3JpZEFycmF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZHMgPSBkcmFnU29ydC5jYWxsKHJvb3RHcmlkLCBpdGVtKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGFyZSBubyBncmlkcy5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShncmlkcykpIHJldHVybiB0YXJnZXQ7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgZ3JpZHMgYW5kIGdldCB0aGUgYmVzdCBtYXRjaC5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBncmlkID0gZ3JpZHNbaV07XG5cbiAgICAgICAgLy8gRmlsdGVyIG91dCBhbGwgZGVzdHJveWVkIGdyaWRzLlxuICAgICAgICBpZiAoZ3JpZC5faXNEZXN0cm95ZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIHRoZSBncmlkJ3Mgb2Zmc2V0cyBhbmQgZGltZW5zaW9ucyBzaW5jZSB0aGV5IG1pZ2h0XG4gICAgICAgIC8vIGhhdmUgY2hhbmdlZCAoZS5nIGR1cmluZyBzY3JvbGxpbmcpLlxuICAgICAgICBncmlkLl91cGRhdGVCb3VuZGluZ1JlY3QoKTtcblxuICAgICAgICAvLyBDaGVjayBob3cgbXVjaCBkcmFnZ2VkIGVsZW1lbnQgb3ZlcmxhcHMgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgICAgICB0YXJnZXRSZWN0LndpZHRoID0gZ3JpZC5fd2lkdGg7XG4gICAgICAgIHRhcmdldFJlY3QuaGVpZ2h0ID0gZ3JpZC5faGVpZ2h0O1xuICAgICAgICB0YXJnZXRSZWN0LmxlZnQgPSBncmlkLl9sZWZ0O1xuICAgICAgICB0YXJnZXRSZWN0LnRvcCA9IGdyaWQuX3RvcDtcbiAgICAgICAgZ3JpZFNjb3JlID0gZ2V0UmVjdE92ZXJsYXBTY29yZShpdGVtUmVjdCwgdGFyZ2V0UmVjdCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBncmlkIGlzIHRoZSBiZXN0IG1hdGNoIHNvIGZhci5cbiAgICAgICAgaWYgKGdyaWRTY29yZSA+IHRocmVzaG9sZCAmJiBncmlkU2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBncmlkU2NvcmU7XG4gICAgICAgICAgdGFyZ2V0ID0gZ3JpZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBbHdheXMgcmVzZXQgcm9vdCBncmlkIGFycmF5LlxuICAgICAgcm9vdEdyaWRBcnJheS5sZW5ndGggPSAwO1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihpdGVtLCBvcHRpb25zKSB7XG4gICAgICB2YXIgZHJhZyA9IGl0ZW0uX2RyYWc7XG4gICAgICB2YXIgcm9vdEdyaWQgPSBkcmFnLl9nZXRHcmlkKCk7XG5cbiAgICAgIC8vIEdldCBkcmFnIHNvcnQgcHJlZGljYXRlIHNldHRpbmdzLlxuICAgICAgdmFyIHNvcnRUaHJlc2hvbGQgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLnRocmVzaG9sZCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnRocmVzaG9sZCA6IDUwO1xuICAgICAgdmFyIHNvcnRBY3Rpb24gPSBvcHRpb25zICYmIG9wdGlvbnMuYWN0aW9uID09PSBhY3Rpb25Td2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG5cbiAgICAgIC8vIFBvcHVsYXRlIGl0ZW0gcmVjdCBkYXRhLlxuICAgICAgaXRlbVJlY3Qud2lkdGggPSBpdGVtLl93aWR0aDtcbiAgICAgIGl0ZW1SZWN0LmhlaWdodCA9IGl0ZW0uX2hlaWdodDtcbiAgICAgIGl0ZW1SZWN0LmxlZnQgPSBkcmFnLl9lbGVtZW50Q2xpZW50WDtcbiAgICAgIGl0ZW1SZWN0LnRvcCA9IGRyYWcuX2VsZW1lbnRDbGllbnRZO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHRhcmdldCBncmlkLlxuICAgICAgdmFyIGdyaWQgPSBnZXRUYXJnZXRHcmlkKGl0ZW0sIHJvb3RHcmlkLCBzb3J0VGhyZXNob2xkKTtcblxuICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlIGZvdW5kIG5vIGdyaWQgY29udGFpbmVyIGVsZW1lbnQgdGhhdCBvdmVybGFwcyB0aGVcbiAgICAgIC8vIGRyYWdnZWQgaXRlbSBlbm91Z2guXG4gICAgICBpZiAoIWdyaWQpIHJldHVybiBmYWxzZTtcblxuICAgICAgdmFyIGdyaWRPZmZzZXRMZWZ0ID0gMDtcbiAgICAgIHZhciBncmlkT2Zmc2V0VG9wID0gMDtcbiAgICAgIHZhciBtYXRjaFNjb3JlID0gLTE7XG4gICAgICB2YXIgbWF0Y2hJbmRleDtcbiAgICAgIHZhciBoYXNWYWxpZFRhcmdldHM7XG4gICAgICB2YXIgdGFyZ2V0O1xuICAgICAgdmFyIHNjb3JlO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIElmIGl0ZW0gaXMgbW92ZWQgd2l0aGluIGl0J3Mgb3JpZ2luYXRpbmcgZ3JpZCBhZGp1c3QgaXRlbSdzIGxlZnQgYW5kXG4gICAgICAvLyB0b3AgcHJvcHMuIE90aGVyd2lzZSBpZiBpdGVtIGlzIG1vdmVkIHRvL3dpdGhpbiBhbm90aGVyIGdyaWQgZ2V0IHRoZVxuICAgICAgLy8gY29udGFpbmVyIGVsZW1lbnQncyBvZmZzZXQgKGZyb20gdGhlIGVsZW1lbnQncyBjb250ZW50IGVkZ2UpLlxuICAgICAgaWYgKGdyaWQgPT09IHJvb3RHcmlkKSB7XG4gICAgICAgIGl0ZW1SZWN0LmxlZnQgPSBkcmFnLl9ncmlkWCArIGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgICAgIGl0ZW1SZWN0LnRvcCA9IGRyYWcuX2dyaWRZICsgaXRlbS5fbWFyZ2luVG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZC5fdXBkYXRlQm9yZGVycygxLCAwLCAxLCAwKTtcbiAgICAgICAgZ3JpZE9mZnNldExlZnQgPSBncmlkLl9sZWZ0ICsgZ3JpZC5fYm9yZGVyTGVmdDtcbiAgICAgICAgZ3JpZE9mZnNldFRvcCA9IGdyaWQuX3RvcCArIGdyaWQuX2JvcmRlclRvcDtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSB0YXJnZXQgZ3JpZCBpdGVtcyBhbmQgdHJ5IHRvIGZpbmQgdGhlIGJlc3QgbWF0Y2guXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZC5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0ID0gZ3JpZC5faXRlbXNbaV07XG5cbiAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpdGVtIGlzIG5vdCBhY3RpdmUgb3IgdGhlIHRhcmdldCBpdGVtIGlzIHRoZSBkcmFnZ2VkXG4gICAgICAgIC8vIGl0ZW0gbGV0J3Mgc2tpcCB0byB0aGUgbmV4dCBpdGVtLlxuICAgICAgICBpZiAoIXRhcmdldC5faXNBY3RpdmUgfHwgdGFyZ2V0ID09PSBpdGVtKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYXJrIHRoZSBncmlkIGFzIGhhdmluZyB2YWxpZCB0YXJnZXQgaXRlbXMuXG4gICAgICAgIGhhc1ZhbGlkVGFyZ2V0cyA9IHRydWU7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0YXJnZXQncyBvdmVybGFwIHNjb3JlIHdpdGggdGhlIGRyYWdnZWQgaXRlbS5cbiAgICAgICAgdGFyZ2V0UmVjdC53aWR0aCA9IHRhcmdldC5fd2lkdGg7XG4gICAgICAgIHRhcmdldFJlY3QuaGVpZ2h0ID0gdGFyZ2V0Ll9oZWlnaHQ7XG4gICAgICAgIHRhcmdldFJlY3QubGVmdCA9IHRhcmdldC5fbGVmdCArIHRhcmdldC5fbWFyZ2luTGVmdCArIGdyaWRPZmZzZXRMZWZ0O1xuICAgICAgICB0YXJnZXRSZWN0LnRvcCA9IHRhcmdldC5fdG9wICsgdGFyZ2V0Ll9tYXJnaW5Ub3AgKyBncmlkT2Zmc2V0VG9wO1xuICAgICAgICBzY29yZSA9IGdldFJlY3RPdmVybGFwU2NvcmUoaXRlbVJlY3QsIHRhcmdldFJlY3QpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBiZXN0IG1hdGNoIGluZGV4IGFuZCBzY29yZSBpZiB0aGUgdGFyZ2V0J3Mgb3ZlcmxhcCBzY29yZSB3aXRoXG4gICAgICAgIC8vIHRoZSBkcmFnZ2VkIGl0ZW0gaXMgaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgYmVzdCBtYXRjaCBzY29yZS5cbiAgICAgICAgaWYgKHNjb3JlID4gbWF0Y2hTY29yZSkge1xuICAgICAgICAgIG1hdGNoSW5kZXggPSBpO1xuICAgICAgICAgIG1hdGNoU2NvcmUgPSBzY29yZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyB2YWxpZCBtYXRjaCBhbmQgdGhlIGl0ZW0gaXMgYmVpbmcgbW92ZWQgaW50byBhbm90aGVyXG4gICAgICAvLyBncmlkLlxuICAgICAgaWYgKG1hdGNoU2NvcmUgPCBzb3J0VGhyZXNob2xkICYmIGl0ZW0uZ2V0R3JpZCgpICE9PSBncmlkKSB7XG4gICAgICAgIG1hdGNoSW5kZXggPSBoYXNWYWxpZFRhcmdldHMgPyAtMSA6IDA7XG4gICAgICAgIG1hdGNoU2NvcmUgPSBJbmZpbml0eTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGJlc3QgbWF0Y2ggb3ZlcmxhcHMgZW5vdWdoIHRvIGp1c3RpZnkgYSBwbGFjZW1lbnQgc3dpdGNoLlxuICAgICAgaWYgKG1hdGNoU2NvcmUgPj0gc29ydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5EYXRhLmdyaWQgPSBncmlkO1xuICAgICAgICByZXR1cm5EYXRhLmluZGV4ID0gbWF0Y2hJbmRleDtcbiAgICAgICAgcmV0dXJuRGF0YS5hY3Rpb24gPSBzb3J0QWN0aW9uO1xuICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFib3J0IGRyYWdnaW5nIGFuZCByZXNldCBkcmFnIGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbURyYWd9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG5cbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGJlaW5nIGRyb3BwZWQgaW50byBhbm90aGVyIGdyaWQsIGZpbmlzaCBpdCB1cCBhbmQgcmV0dXJuXG4gICAgLy8gaW1tZWRpYXRlbHkuXG4gICAgaWYgKHRoaXMuX2lzTWlncmF0aW5nKSB7XG4gICAgICB0aGlzLl9maW5pc2hNaWdyYXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBxdWV1ZWQgbW92ZSBhbmQgc2Nyb2xsIHRpY2tzLlxuICAgIGNhbmNlbE1vdmVUaWNrKGl0ZW0uX2lkKTtcbiAgICBjYW5jZWxTY3JvbGxUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFJlbW92ZSBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIHRoaXMuX3VuYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gQ2FuY2VsIG92ZXJsYXAgY2hlY2suXG4gICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoJ2NhbmNlbCcpO1xuXG4gICAgLy8gQXBwZW5kIGl0ZW0gZWxlbWVudCB0byB0aGUgY29udGFpbmVyIGlmIGl0J3Mgbm90IGl0J3MgY2hpbGQuIEFsc28gbWFrZVxuICAgIC8vIHN1cmUgdGhlIHRyYW5zbGF0ZSB2YWx1ZXMgYXJlIGFkanVzdGVkIHRvIGFjY291bnQgZm9yIHRoZSBET00gc2hpZnQuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gZ3JpZC5fZWxlbWVudCkge1xuICAgICAgZ3JpZC5fZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fZ3JpZFgsIHRoaXMuX2dyaWRZKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgZ3JpZC5fc2V0dGluZ3MuaXRlbURyYWdnaW5nQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgZHJhZyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtRHJhZ31cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9kcmFnZ2VyLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogR2V0IEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHJldHVybnMgez9HcmlkfVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9nZXRHcmlkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdyaWRJbnN0YW5jZXNbdGhpcy5fZ3JpZElkXSB8fCBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cC9yZXNldCBkcmFnIGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJcyBpdGVtIGJlaW5nIGRyYWdnZWQ/XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIC8vIFRoZSBkcmFnZ2VkIGl0ZW0ncyBjb250YWluZXIgZWxlbWVudC5cbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuXG4gICAgLy8gVGhlIGRyYWdnZWQgaXRlbSdzIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgdGhpcy5fY29udGFpbmluZ0Jsb2NrID0gbnVsbDtcblxuICAgIC8vIERyYWcvc2Nyb2xsIGV2ZW50IGRhdGEuXG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9zY3JvbGxFdmVudCA9IG51bGw7XG5cbiAgICAvLyBBbGwgdGhlIGVsZW1lbnRzIHdoaWNoIG5lZWQgdG8gYmUgbGlzdGVuZWQgZm9yIHNjcm9sbCBldmVudHMgZHVyaW5nXG4gICAgLy8gZHJhZ2dpbmcuXG4gICAgdGhpcy5fc2Nyb2xsZXJzID0gW107XG5cbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGVYL3RyYW5zbGF0ZVkgcG9zaXRpb24uXG4gICAgdGhpcy5fbGVmdCA9IDA7XG4gICAgdGhpcy5fdG9wID0gMDtcblxuICAgIC8vIERyYWdnZWQgZWxlbWVudCdzIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIHRoZSBncmlkLlxuICAgIHRoaXMuX2dyaWRYID0gMDtcbiAgICB0aGlzLl9ncmlkWSA9IDA7XG5cbiAgICAvLyBEcmFnZ2VkIGVsZW1lbnQncyBjdXJyZW50IG9mZnNldCBmcm9tIHdpbmRvdydzIG5vcnRod2VzdCBjb3JuZXIuIERvZXNcbiAgICAvLyBub3QgYWNjb3VudCBmb3IgZWxlbWVudCdzIG1hcmdpbnMuXG4gICAgdGhpcy5fZWxlbWVudENsaWVudFggPSAwO1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZID0gMDtcblxuICAgIC8vIE9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGRyYWdnZWQgZWxlbWVudCdzIHRlbXBvcmFyeSBkcmFnXG4gICAgLy8gY29udGFpbmVyIGFuZCBpdCdzIG9yaWdpbmFsIGNvbnRhaW5lci5cbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIHRvIGFsbCBzY3JvbGxhYmxlIGFuY2VzdG9yIGVsZW1lbnRzIG9mIHRoZVxuICAgKiBkcmFnZ2VkIGVsZW1lbnQgYW5kIHRoZSBkcmFnIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2JpbmRTY3JvbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IHRoaXMuX2dldEdyaWQoKS5fZWxlbWVudDtcbiAgICB2YXIgZHJhZ0NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB2YXIgc2Nyb2xsZXJzID0gdGhpcy5fc2Nyb2xsZXJzO1xuICAgIHZhciBncmlkU2Nyb2xsZXJzO1xuICAgIHZhciBpO1xuXG4gICAgLy8gR2V0IGRyYWdnZWQgZWxlbWVudCdzIHNjcm9sbGluZyBwYXJlbnRzLlxuICAgIHNjcm9sbGVycy5sZW5ndGggPSAwO1xuICAgIGdldFNjcm9sbGFibGVBbmNlc3RvcnModGhpcy5faXRlbS5fZWxlbWVudCwgZmFsc2UsIHNjcm9sbGVycyk7XG5cbiAgICAvLyBJZiBkcmFnIGNvbnRhaW5lciBpcyBkZWZpbmVkIGFuZCBpdCdzIG5vdCB0aGUgc2FtZSBlbGVtZW50IGFzIGdyaWRcbiAgICAvLyBjb250YWluZXIgdGhlbiB3ZSBuZWVkIHRvIGFkZCB0aGUgZ3JpZCBjb250YWluZXIgYW5kIGl0J3Mgc2Nyb2xsIHBhcmVudHNcbiAgICAvLyB0byB0aGUgZWxlbWVudHMgd2hpY2ggYXJlIGdvaW5nIHRvIGJlIGxpc3RlbmVyIGZvciBzY3JvbGwgZXZlbnRzLlxuICAgIGlmIChkcmFnQ29udGFpbmVyICE9PSBncmlkQ29udGFpbmVyKSB7XG4gICAgICBncmlkU2Nyb2xsZXJzID0gW107XG4gICAgICBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKGdyaWRDb250YWluZXIsIHRydWUsIGdyaWRTY3JvbGxlcnMpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRTY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjcm9sbGVycy5pbmRleE9mKGdyaWRTY3JvbGxlcnNbaV0pIDwgMCkge1xuICAgICAgICAgIHNjcm9sbGVycy5wdXNoKGdyaWRTY3JvbGxlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmluZCBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNjcm9sbGVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgY3VycmVudGx5IGJvdW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIGZyb20gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3JcbiAgICogZWxlbWVudHMgb2YgdGhlIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fdW5iaW5kU2Nyb2xsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcm9sbGVycyA9IHRoaXMuX3Njcm9sbGVycztcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNjcm9sbGVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsZXJzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGRlZmF1bHQgc3RhcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fc2V0dXBTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgY29uZmlnID0gb3B0aW9ucyB8fCB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZSB8fCAwO1xuICAgIHJldHVybiAodGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhID0ge1xuICAgICAgZGlzdGFuY2U6IE1hdGguYWJzKGNvbmZpZy5kaXN0YW5jZSkgfHwgMCxcbiAgICAgIGRlbGF5OiBNYXRoLm1heChjb25maWcuZGVsYXksIDApIHx8IDAsXG4gICAgICBoYW5kbGU6IHR5cGVvZiBjb25maWcuaGFuZGxlID09PSAnc3RyaW5nJyA/IGNvbmZpZy5oYW5kbGUgOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCBkZWZhdWx0IHN0YXJ0IHByZWRpY2F0ZSBoYW5kbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHs/SFRNTEVsZW1lbnR9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2dldFN0YXJ0UHJlZGljYXRlSGFuZGxlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcHJlZGljYXRlID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5faXRlbS5fZWxlbWVudDtcbiAgICB2YXIgaGFuZGxlRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBObyBoYW5kbGUsIG5vIGhhc3NsZSAtPiBsZXQncyB1c2UgdGhlIGl0ZW0gZWxlbWVudCBhcyB0aGUgaGFuZGxlLlxuICAgIGlmICghcHJlZGljYXRlLmhhbmRsZSkgcmV0dXJuIGhhbmRsZUVsZW1lbnQ7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNwZWNpZmljIHByZWRpY2F0ZSBoYW5kbGUgZGVmaW5lZCwgbGV0J3MgdHJ5IHRvIGdldCBpdC5cbiAgICBoYW5kbGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIHdoaWxlIChoYW5kbGVFbGVtZW50ICYmICFlbGVtZW50TWF0Y2hlcyhoYW5kbGVFbGVtZW50LCBwcmVkaWNhdGUuaGFuZGxlKSkge1xuICAgICAgaGFuZGxlRWxlbWVudCA9IGhhbmRsZUVsZW1lbnQgIT09IGVsZW1lbnQgPyBoYW5kbGVFbGVtZW50LnBhcmVudEVsZW1lbnQgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlRWxlbWVudCB8fCBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgY3VycmVudGx5IGJvdW5kIGRyYWcgc2Nyb2xsIGhhbmRsZXJzIGZyb20gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3JcbiAgICogZWxlbWVudHMgb2YgdGhlIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNvbHZlU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG5cbiAgICAvLyBJZiB0aGUgbW92ZWQgZGlzdGFuY2UgaXMgc21hbGxlciB0aGFuIHRoZSB0aHJlc2hvbGQgZGlzdGFuY2Ugb3IgdGhlcmUgaXNcbiAgICAvLyBzb21lIGRlbGF5IGxlZnQsIGlnbm9yZSB0aGlzIHByZWRpY2F0ZSBjeWNsZS5cbiAgICBpZiAoZXZlbnQuZGlzdGFuY2UgPCBwcmVkaWNhdGUuZGlzdGFuY2UgfHwgcHJlZGljYXRlLmRlbGF5KSByZXR1cm47XG5cbiAgICAvLyBHZXQgaGFuZGxlIHJlY3QgZGF0YS5cbiAgICB2YXIgaGFuZGxlUmVjdCA9IHByZWRpY2F0ZS5oYW5kbGVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBoYW5kbGVMZWZ0ID0gaGFuZGxlUmVjdC5sZWZ0ICsgKHdpbmRvdy5wYWdlWE9mZnNldCB8fCAwKTtcbiAgICB2YXIgaGFuZGxlVG9wID0gaGFuZGxlUmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IDApO1xuICAgIHZhciBoYW5kbGVXaWR0aCA9IGhhbmRsZVJlY3Qud2lkdGg7XG4gICAgdmFyIGhhbmRsZUhlaWdodCA9IGhhbmRsZVJlY3QuaGVpZ2h0O1xuXG4gICAgLy8gUmVzZXQgcHJlZGljYXRlIGRhdGEuXG4gICAgdGhpcy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuXG4gICAgLy8gSWYgdGhlIGN1cnNvciBpcyBzdGlsbCB3aXRoaW4gdGhlIGhhbmRsZSBsZXQncyBzdGFydCB0aGUgZHJhZy5cbiAgICByZXR1cm4gKFxuICAgICAgaGFuZGxlV2lkdGggJiZcbiAgICAgIGhhbmRsZUhlaWdodCAmJlxuICAgICAgZXZlbnQucGFnZVggPj0gaGFuZGxlTGVmdCAmJlxuICAgICAgZXZlbnQucGFnZVggPCBoYW5kbGVMZWZ0ICsgaGFuZGxlV2lkdGggJiZcbiAgICAgIGV2ZW50LnBhZ2VZID49IGhhbmRsZVRvcCAmJlxuICAgICAgZXZlbnQucGFnZVkgPCBoYW5kbGVUb3AgKyBoYW5kbGVIZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JjZWZ1bGx5IHJlc29sdmUgZHJhZyBzdGFydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2ZvcmNlUmVzb2x2ZVN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRGVzdHJveWVkICYmIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUGVuZGluZykge1xuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQ7XG4gICAgICB0aGlzLl9vblN0YXJ0KGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmFsaXplIHN0YXJ0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZmluaXNoU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5faXRlbS5fZWxlbWVudDtcblxuICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSBjbGljayAodmVyeSBzdWJqZWN0aXZlIGhldXJpc3RpY3MpLlxuICAgIHZhciBpc0NsaWNrID0gTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA8IDIgJiYgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSA8IDIgJiYgZXZlbnQuZGVsdGFUaW1lIDwgMjAwO1xuXG4gICAgLy8gUmVzZXQgcHJlZGljYXRlLlxuICAgIHRoaXMuX3Jlc2V0U3RhcnRQcmVkaWNhdGUoKTtcblxuICAgIC8vIElmIHRoZSBnZXN0dXJlIGNhbiBiZSBpbnRlcnByZXRlZCBhcyBjbGljayBsZXQncyB0cnkgdG8gb3BlbiB0aGUgZWxlbWVudCdzXG4gICAgLy8gaHJlZiB1cmwgKGlmIGl0IGlzIGFuIGFuY2hvciBlbGVtZW50KS5cbiAgICBpZiAoaXNDbGljaykgb3BlbkFuY2hvckhyZWYoZWxlbWVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IGRyYWcgc29ydCBoZXVyaXN0aWNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldEhldXJpc3RpY3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgIHRoaXMuX2hYMSA9IHRoaXMuX2hYMiA9IGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy5faFkxID0gdGhpcy5faFkyID0gZXZlbnQuY2xpZW50WTtcbiAgfTtcblxuICAvKipcbiAgICogUnVuIGhldXJpc3RpY3MgYW5kIHJldHVybiB0cnVlIGlmIG92ZXJsYXAgY2hlY2sgY2FuIGJlIHBlcmZvcm1lZCwgYW5kIGZhbHNlXG4gICAqIGlmIGl0IGNhbiBub3QuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9jaGVja0hldXJpc3RpY3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1NvcnRIZXVyaXN0aWNzO1xuICAgIHZhciBtaW5EaXN0ID0gc2V0dGluZ3MubWluRHJhZ0Rpc3RhbmNlO1xuXG4gICAgLy8gU2tpcCBoZXVyaXN0aWNzIGlmIG5vdCBuZWVkZWQuXG4gICAgaWYgKG1pbkRpc3QgPD0gMCkge1xuICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgeCA9IGV2ZW50LmNsaWVudFg7XG4gICAgdmFyIHkgPSBldmVudC5jbGllbnRZO1xuICAgIHZhciBkaWZmWCA9IHggLSB0aGlzLl9oWDI7XG4gICAgdmFyIGRpZmZZID0geSAtIHRoaXMuX2hZMjtcblxuICAgIC8vIElmIHdlIGNhbid0IGRvIHByb3BlciBib3VuY2UgYmFjayBjaGVjayBtYWtlIHN1cmUgdGhhdCB0aGUgYmxvY2tlZCBpbmRleFxuICAgIC8vIGlzIG5vdCBzZXQuXG4gICAgdmFyIGNhbkNoZWNrQm91bmNlQmFjayA9IG1pbkRpc3QgPiAzICYmIHNldHRpbmdzLm1pbkJvdW5jZUJhY2tBbmdsZSA+IDA7XG4gICAgaWYgKCFjYW5DaGVja0JvdW5jZUJhY2spIHtcbiAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiBtaW5EaXN0IHx8IE1hdGguYWJzKGRpZmZZKSA+IG1pbkRpc3QpIHtcbiAgICAgIC8vIFJlc2V0IGJsb2NrZWQgaW5kZXggaWYgYW5nbGUgY2hhbmdlZCBlbm91Z2guIFRoaXMgY2hlY2sgcmVxdWlyZXMgYVxuICAgICAgLy8gbWluaW11bSB2YWx1ZSBvZiAzIGZvciBtaW5EcmFnRGlzdGFuY2UgdG8gZnVuY3Rpb24gcHJvcGVybHkuXG4gICAgICBpZiAoY2FuQ2hlY2tCb3VuY2VCYWNrKSB7XG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoZGlmZlgsIGRpZmZZKTtcbiAgICAgICAgdmFyIHByZXZBbmdsZSA9IE1hdGguYXRhbjIodGhpcy5faFgyIC0gdGhpcy5faFgxLCB0aGlzLl9oWTIgLSB0aGlzLl9oWTEpO1xuICAgICAgICB2YXIgZGVsdGFBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5zaW4oYW5nbGUgLSBwcmV2QW5nbGUpLCBNYXRoLmNvcyhhbmdsZSAtIHByZXZBbmdsZSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFBbmdsZSkgPiBzZXR0aW5ncy5taW5Cb3VuY2VCYWNrQW5nbGUpIHtcbiAgICAgICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgcG9pbnRzLlxuICAgICAgdGhpcy5faFgxID0gdGhpcy5faFgyO1xuICAgICAgdGhpcy5faFkxID0gdGhpcy5faFkyO1xuICAgICAgdGhpcy5faFgyID0geDtcbiAgICAgIHRoaXMuX2hZMiA9IHk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzZXQgZm9yIGRlZmF1bHQgZHJhZyBzdGFydCBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzZXRTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG4gICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5kZWxheVRpbWVyKSB7XG4gICAgICAgIHByZWRpY2F0ZS5kZWxheVRpbWVyID0gd2luZG93LmNsZWFyVGltZW91dChwcmVkaWNhdGUuZGVsYXlUaW1lcik7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGEgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgKGR1cmluZyBkcmFnKSBpZiBhbiBpdGVtIGlzIG92ZXJsYXBwaW5nIG90aGVyIGl0ZW1zIGFuZCBiYXNlZCBvblxuICAgKiB0aGUgY29uZmlndXJhdGlvbiBsYXlvdXQgdGhlIGl0ZW1zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2NoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGN1cnJlbnRHcmlkO1xuICAgIHZhciBjdXJyZW50SW5kZXg7XG4gICAgdmFyIHRhcmdldEdyaWQ7XG4gICAgdmFyIHRhcmdldEluZGV4O1xuICAgIHZhciBzb3J0QWN0aW9uO1xuICAgIHZhciBpc01pZ3JhdGlvbjtcblxuICAgIC8vIEdldCBvdmVybGFwIGNoZWNrIHJlc3VsdC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU29ydFByZWRpY2F0ZSkpIHtcbiAgICAgIHJlc3VsdCA9IHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKGl0ZW0sIHRoaXMuX2RyYWdFdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IEl0ZW1EcmFnLmRlZmF1bHRTb3J0UHJlZGljYXRlKGl0ZW0sIHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKTtcbiAgICB9XG5cbiAgICAvLyBMZXQncyBtYWtlIHN1cmUgdGhlIHJlc3VsdCBvYmplY3QgaGFzIGEgdmFsaWQgaW5kZXggYmVmb3JlIGdvaW5nIGZ1cnRoZXIuXG4gICAgaWYgKCFyZXN1bHQgfHwgdHlwZW9mIHJlc3VsdC5pbmRleCAhPT0gJ251bWJlcicpIHJldHVybjtcblxuICAgIGN1cnJlbnRHcmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdGFyZ2V0R3JpZCA9IHJlc3VsdC5ncmlkIHx8IGN1cnJlbnRHcmlkO1xuICAgIGlzTWlncmF0aW9uID0gY3VycmVudEdyaWQgIT09IHRhcmdldEdyaWQ7XG4gICAgY3VycmVudEluZGV4ID0gY3VycmVudEdyaWQuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdGFyZ2V0SW5kZXggPSBub3JtYWxpemVBcnJheUluZGV4KHRhcmdldEdyaWQuX2l0ZW1zLCByZXN1bHQuaW5kZXgsIGlzTWlncmF0aW9uKTtcbiAgICBzb3J0QWN0aW9uID0gcmVzdWx0LmFjdGlvbiA9PT0gYWN0aW9uU3dhcCA/IGFjdGlvblN3YXAgOiBhY3Rpb25Nb3ZlO1xuXG4gICAgLy8gUHJldmVudCBwb3NpdGlvbiBib3VuY2UuXG4gICAgaWYgKCFpc01pZ3JhdGlvbiAmJiB0YXJnZXRJbmRleCA9PT0gdGhpcy5faEJsb2NrZWRJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIHdhcyBtb3ZlZCB3aXRoaW4gaXQncyBjdXJyZW50IGdyaWQuXG4gICAgaWYgKCFpc01pZ3JhdGlvbikge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSB0YXJnZXQgaW5kZXggaXMgbm90IHRoZSBjdXJyZW50IGluZGV4LlxuICAgICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IGN1cnJlbnRJbmRleDtcblxuICAgICAgICAvLyBEbyB0aGUgc29ydC5cbiAgICAgICAgKHNvcnRBY3Rpb24gPT09IGFjdGlvblN3YXAgPyBhcnJheVN3YXAgOiBhcnJheU1vdmUpKFxuICAgICAgICAgIGN1cnJlbnRHcmlkLl9pdGVtcyxcbiAgICAgICAgICBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdGFyZ2V0SW5kZXhcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBFbWl0IG1vdmUgZXZlbnQuXG4gICAgICAgIGlmIChjdXJyZW50R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50TW92ZSkpIHtcbiAgICAgICAgICBjdXJyZW50R3JpZC5fZW1pdChldmVudE1vdmUsIHtcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4LFxuICAgICAgICAgICAgYWN0aW9uOiBzb3J0QWN0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXlvdXQgdGhlIGdyaWQuXG4gICAgICAgIGN1cnJlbnRHcmlkLmxheW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIHdhcyBtb3ZlZCB0byBhbm90aGVyIGdyaWQuXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcblxuICAgICAgLy8gRW1pdCBiZWZvcmVTZW5kIGV2ZW50LlxuICAgICAgaWYgKGN1cnJlbnRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVTZW5kKSkge1xuICAgICAgICBjdXJyZW50R3JpZC5fZW1pdChldmVudEJlZm9yZVNlbmQsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgYmVmb3JlUmVjZWl2ZSBldmVudC5cbiAgICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVSZWNlaXZlKSkge1xuICAgICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50QmVmb3JlUmVjZWl2ZSwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGl0ZW0ncyBncmlkIGlkIHJlZmVyZW5jZS5cbiAgICAgIGl0ZW0uX2dyaWRJZCA9IHRhcmdldEdyaWQuX2lkO1xuXG4gICAgICAvLyBVcGRhdGUgZHJhZyBpbnN0YW5jZSdzIG1pZ3JhdGluZyBpbmRpY2F0b3IuXG4gICAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGl0ZW0uX2dyaWRJZCAhPT0gdGhpcy5fZ3JpZElkO1xuXG4gICAgICAvLyBNb3ZlIGl0ZW0gaW5zdGFuY2UgZnJvbSBjdXJyZW50IGdyaWQgdG8gdGFyZ2V0IGdyaWQuXG4gICAgICBjdXJyZW50R3JpZC5faXRlbXMuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XG4gICAgICBhcnJheUluc2VydCh0YXJnZXRHcmlkLl9pdGVtcywgaXRlbSwgdGFyZ2V0SW5kZXgpO1xuXG4gICAgICAvLyBTZXQgc29ydCBkYXRhIGFzIG51bGwsIHdoaWNoIGlzIGFuIGluZGljYXRvciBmb3IgdGhlIGl0ZW0gY29tcGFyaXNvblxuICAgICAgLy8gZnVuY3Rpb24gdGhhdCB0aGUgc29ydCBkYXRhIG9mIHRoaXMgc3BlY2lmaWMgaXRlbSBzaG91bGQgYmUgZmV0Y2hlZFxuICAgICAgLy8gbGF6aWx5LlxuICAgICAgaXRlbS5fc29ydERhdGEgPSBudWxsO1xuXG4gICAgICAvLyBFbWl0IHNlbmQgZXZlbnQuXG4gICAgICBpZiAoY3VycmVudEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFNlbmQpKSB7XG4gICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50U2VuZCwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCByZWNlaXZlIGV2ZW50LlxuICAgICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFJlY2VpdmUpKSB7XG4gICAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRSZWNlaXZlLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBMYXlvdXQgYm90aCBncmlkcy5cbiAgICAgIGN1cnJlbnRHcmlkLmxheW91dCgpO1xuICAgICAgdGFyZ2V0R3JpZC5sYXlvdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIGl0ZW0gaXMgZHJhZ2dlZCBpbnRvIGFub3RoZXIgZ3JpZCwgZmluaXNoIHRoZSBtaWdyYXRpb24gcHJvY2Vzc1xuICAgKiBncmFjZWZ1bGx5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2ZpbmlzaE1pZ3JhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBpc0FjdGl2ZSA9IGl0ZW0uX2lzQWN0aXZlO1xuICAgIHZhciB0YXJnZXRHcmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHRhcmdldEdyaWRFbGVtZW50ID0gdGFyZ2V0R3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdGFyZ2V0U2V0dGluZ3MgPSB0YXJnZXRHcmlkLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVyID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0NvbnRhaW5lciB8fCB0YXJnZXRHcmlkRWxlbWVudDtcbiAgICB2YXIgY3VycmVudFNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgY3VycmVudENvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB2YXIgdHJhbnNsYXRlO1xuICAgIHZhciBvZmZzZXREaWZmO1xuXG4gICAgLy8gRGVzdHJveSBjdXJyZW50IGRyYWcuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIHNldCB0aGUgbWlncmF0aW5nIGZsYWcgdG9cbiAgICAvLyBmYWxzZSBmaXJzdCwgYmVjYXVzZSBvdGhlcndpc2Ugd2UgY3JlYXRlIGFuIGluZmluaXRlIGxvb3AgYmV0d2VlbiB0aGlzXG4gICAgLy8gYW5kIHRoZSBkcmFnLnN0b3AoKSBtZXRob2QuXG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSBjdXJyZW50IGNsYXNzbmFtZXMuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGN1cnJlbnRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gQWRkIG5ldyBjbGFzc25hbWVzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHRhcmdldFNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgaXNBY3RpdmUgPyB0YXJnZXRTZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzIDogdGFyZ2V0U2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIE1vdmUgdGhlIGl0ZW0gaW5zaWRlIHRoZSB0YXJnZXQgY29udGFpbmVyIGlmIGl0J3MgZGlmZmVyZW50IHRoYW4gdGhlXG4gICAgLy8gY3VycmVudCBjb250YWluZXIuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYoY3VycmVudENvbnRhaW5lciwgdGFyZ2V0Q29udGFpbmVyLCB0cnVlKTtcbiAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgIHRyYW5zbGF0ZS54IC09IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRyYW5zbGF0ZS55IC09IG9mZnNldERpZmYudG9wO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpdGVtJ3MgY2FjaGVkIGRpbWVuc2lvbnMgYW5kIHNvcnQgZGF0YS5cbiAgICBpdGVtLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIGl0ZW0uX3JlZnJlc2hTb3J0RGF0YSgpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBvZmZzZXQgZGlmZmVyZW5jZSBiZXR3ZWVuIHRhcmdldCdzIGRyYWcgY29udGFpbmVyIChpZiBhbnkpXG4gICAgLy8gYW5kIGFjdHVhbCBncmlkIGNvbnRhaW5lciBlbGVtZW50LiBXZSBzYXZlIGl0IGxhdGVyIGZvciB0aGUgcmVsZWFzZVxuICAgIC8vIHByb2Nlc3MuXG4gICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYodGFyZ2V0Q29udGFpbmVyLCB0YXJnZXRHcmlkRWxlbWVudCwgdHJ1ZSk7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlggPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcblxuICAgIC8vIFJlY3JlYXRlIGl0ZW0ncyBkcmFnIGhhbmRsZXIuXG4gICAgaXRlbS5fZHJhZyA9IHRhcmdldFNldHRpbmdzLmRyYWdFbmFibGVkID8gbmV3IEl0ZW1EcmFnKGl0ZW0pIDogbnVsbDtcblxuICAgIC8vIEFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gZWxlbWVudCBpZiBpdCB3YXMgbW92ZWQgZnJvbSBhIGNvbnRhaW5lclxuICAgIC8vIHRvIGFub3RoZXIuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGUueCwgdHJhbnNsYXRlLnkpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjaGlsZCBlbGVtZW50J3Mgc3R5bGVzIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBzdGF0ZS5cbiAgICBpdGVtLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCBpc0FjdGl2ZSA/IHRhcmdldFNldHRpbmdzLnZpc2libGVTdHlsZXMgOiB0YXJnZXRTZXR0aW5ncy5oaWRkZW5TdHlsZXMpO1xuXG4gICAgLy8gU3RhcnQgdGhlIHJlbGVhc2UuXG4gICAgcmVsZWFzZS5zdGFydCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHByZS1zdGFydCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVTdGFydENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBMZXQncyBhY3RpdmF0ZSBkcmFnIHN0YXJ0IHByZWRpY2F0ZSBzdGF0ZS5cbiAgICBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZSkge1xuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUGVuZGluZztcbiAgICB9XG5cbiAgICAvLyBJZiBwcmVkaWNhdGUgaXMgcGVuZGluZyB0cnkgdG8gcmVzb2x2ZSBpdC5cbiAgICBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlKHRoaXMuX2l0ZW0sIGV2ZW50KTtcbiAgICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcbiAgICAgICAgdGhpcy5fb25TdGFydChldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZWplY3RlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgaWYgcHJlZGljYXRlIGlzIHJlc29sdmVkIGFuZCBkcmFnIGlzIGFjdGl2ZSwgbW92ZSB0aGUgaXRlbS5cbiAgICBlbHNlIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVJlc29sdmVkICYmIHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLl9vbk1vdmUoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBwcmUtZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZUVuZENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgc3RhcnQgcHJlZGljYXRlIHdhcyByZXNvbHZlZCBkdXJpbmcgZHJhZy5cbiAgICB2YXIgaXNSZXNvbHZlZCA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQ7XG5cbiAgICAvLyBEbyBmaW5hbCBwcmVkaWNhdGUgY2hlY2sgdG8gYWxsb3cgdXNlciB0byB1bmJpbmQgc3R1ZmYgZm9yIHRoZSBjdXJyZW50XG4gICAgLy8gZHJhZyBwcm9jZWR1cmUgd2l0aGluIHRoZSBwcmVkaWNhdGUgY2FsbGJhY2suIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpc1xuICAgIC8vIGNoZWNrIHdpbGwgaGF2ZSBubyBlZmZlY3QgdG8gdGhlIHN0YXRlIG9mIHRoZSBwcmVkaWNhdGUuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGUodGhpcy5faXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gUmVzZXQgc3RhcnQgcHJlZGljYXRlIHN0YXRlLlxuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZUluYWN0aXZlO1xuXG4gICAgLy8gSWYgcHJlZGljYXRlIGlzIHJlc29sdmVkIGFuZCBkcmFnZ2luZyBpcyBhY3RpdmUsIGNhbGwgdGhlIGVuZCBoYW5kbGVyLlxuICAgIGlmIChpc1Jlc29sdmVkICYmIHRoaXMuX2lzQWN0aXZlKSB0aGlzLl9vbkVuZChldmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgc3RhcnQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25TdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCBkb24ndCBzdGFydCB0aGUgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuICAgIHZhciBtaWdyYXRlID0gaXRlbS5fbWlncmF0ZTtcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIGRyYWdDb250YWluZXIgPSBzZXR0aW5ncy5kcmFnQ29udGFpbmVyIHx8IGdyaWRDb250YWluZXI7XG4gICAgdmFyIGNvbnRhaW5pbmdCbG9jayA9IGdldENvbnRhaW5pbmdCbG9jayhkcmFnQ29udGFpbmVyLCB0cnVlKTtcbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgIHZhciBjdXJyZW50TGVmdCA9IHRyYW5zbGF0ZS54O1xuICAgIHZhciBjdXJyZW50VG9wID0gdHJhbnNsYXRlLnk7XG4gICAgdmFyIGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgaGFzRHJhZ0NvbnRhaW5lciA9IGRyYWdDb250YWluZXIgIT09IGdyaWRDb250YWluZXI7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBSZXNldCBoZXVyaXN0aWNzIGRhdGEuXG4gICAgdGhpcy5fcmVzZXRIZXVyaXN0aWNzKGV2ZW50KTtcblxuICAgIC8vIElmIGdyaWQgY29udGFpbmVyIGlzIG5vdCB0aGUgZHJhZyBjb250YWluZXIsIHdlIG5lZWQgdG8gY2FsY3VsYXRlIHRoZVxuICAgIC8vIG9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gZ3JpZCBjb250YWluZXIgYW5kIGRyYWcgY29udGFpbmVyJ3MgY29udGFpbmluZ1xuICAgIC8vIGVsZW1lbnQuXG4gICAgaWYgKGhhc0RyYWdDb250YWluZXIpIHtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKGNvbnRhaW5pbmdCbG9jaywgZ3JpZENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IHBvc2l0aW9uaW5nIGFuaW1hdGlvbi5cbiAgICBpZiAoaXRlbS5pc1Bvc2l0aW9uaW5nKCkpIHtcbiAgICAgIGl0ZW0uX2xheW91dC5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcoY3VycmVudExlZnQsIGN1cnJlbnRUb3ApIH0pO1xuICAgIH1cblxuICAgIC8vIFN0b3AgY3VycmVudCBtaWdyYXRpb24gYW5pbWF0aW9uLlxuICAgIGlmIChtaWdyYXRlLl9pc0FjdGl2ZSkge1xuICAgICAgY3VycmVudExlZnQgLT0gbWlncmF0ZS5fY29udGFpbmVyRGlmZlg7XG4gICAgICBjdXJyZW50VG9wIC09IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgbWlncmF0ZS5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcoY3VycmVudExlZnQsIGN1cnJlbnRUb3ApIH0pO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgYmVpbmcgcmVsZWFzZWQgcmVzZXQgcmVsZWFzZSBkYXRhLlxuICAgIGlmIChpdGVtLmlzUmVsZWFzaW5nKCkpIHJlbGVhc2UuX3Jlc2V0KCk7XG5cbiAgICAvLyBTZXR1cCBkcmFnIGRhdGEuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2RyYWdFdmVudCA9IGV2ZW50O1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRyYWdDb250YWluZXI7XG4gICAgdGhpcy5fY29udGFpbmluZ0Jsb2NrID0gY29udGFpbmluZ0Jsb2NrO1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRYID0gZWxlbWVudFJlY3QubGVmdDtcbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WSA9IGVsZW1lbnRSZWN0LnRvcDtcbiAgICB0aGlzLl9sZWZ0ID0gdGhpcy5fZ3JpZFggPSBjdXJyZW50TGVmdDtcbiAgICB0aGlzLl90b3AgPSB0aGlzLl9ncmlkWSA9IGN1cnJlbnRUb3A7XG5cbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgKGlmIG5lY2Vzc2FyeSkuXG4gICAgaWYgKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5lbmFibGVkKSB7XG4gICAgICBpdGVtLl9kcmFnUGxhY2Vob2xkZXIuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBkcmFnSW5pdCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ0luaXQsIGl0ZW0sIGV2ZW50KTtcblxuICAgIC8vIElmIGEgc3BlY2lmaWMgZHJhZyBjb250YWluZXIgaXMgc2V0IGFuZCBpdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGVcbiAgICAvLyBncmlkJ3MgY29udGFpbmVyIGVsZW1lbnQgd2UgbmVlZCB0byBjYXN0IHNvbWUgZXh0cmEgc3BlbGxzLlxuICAgIGlmIChoYXNEcmFnQ29udGFpbmVyKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgY29udGFpbmVyIG9mZnNldCBkaWZmcyB0byBkcmFnIGRhdGEuXG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gb2Zmc2V0RGlmZi50b3A7XG5cbiAgICAgIC8vIElmIHRoZSBkcmFnZ2VkIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgZHJhZyBjb250YWluZXIgYWxsIHdlIG5lZWQgdG9cbiAgICAgIC8vIGRvIGlzIHNldHVwIHRoZSByZWxhdGl2ZSBkcmFnIHBvc2l0aW9uIGRhdGEuXG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlID09PSBkcmFnQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2dyaWRYID0gY3VycmVudExlZnQgLSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgICAgdGhpcy5fZ3JpZFkgPSBjdXJyZW50VG9wIC0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGFwcGVuZCB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGNvcnJlY3QgY29udGFpbmVyLFxuICAgICAgLy8gc2V0dXAgdGhlIGFjdHVhbCBkcmFnIHBvc2l0aW9uIGRhdGEgYW5kIGFkanVzdCB0aGUgZWxlbWVudCdzIHRyYW5zbGF0ZVxuICAgICAgLy8gdmFsdWVzIHRvIGFjY291bnQgZm9yIHRoZSBET00gcG9zaXRpb24gc2hpZnQuXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGVmdCA9IGN1cnJlbnRMZWZ0ICsgdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgICAgIHRoaXMuX3RvcCA9IGN1cnJlbnRUb3AgKyB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICAgICAgZHJhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9sZWZ0LCB0aGlzLl90b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBkcmFnIGNsYXNzIGFuZCBiaW5kIHNjcm9sbGVycy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtRHJhZ2dpbmdDbGFzcyk7XG4gICAgdGhpcy5fYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gRW1pdCBkcmFnU3RhcnQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdTdGFydCwgaXRlbSwgZXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIG1vdmUgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25Nb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIHJlc2V0IGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgYXhpcyA9IHNldHRpbmdzLmRyYWdBeGlzO1xuXG4gICAgLy8gVXBkYXRlIGhvcml6b250YWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3knKSB7XG4gICAgICB2YXIgeERpZmYgPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZHJhZ0V2ZW50LmNsaWVudFg7XG4gICAgICB0aGlzLl9sZWZ0ICs9IHhEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFggKz0geERpZmY7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xpZW50WCArPSB4RGlmZjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdmVydGljYWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3gnKSB7XG4gICAgICB2YXIgeURpZmYgPSBldmVudC5jbGllbnRZIC0gdGhpcy5fZHJhZ0V2ZW50LmNsaWVudFk7XG4gICAgICB0aGlzLl90b3AgKz0geURpZmY7XG4gICAgICB0aGlzLl9ncmlkWSArPSB5RGlmZjtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZICs9IHlEaWZmO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBldmVudCBkYXRhLlxuICAgIHRoaXMuX2RyYWdFdmVudCA9IGV2ZW50O1xuXG4gICAgLy8gRG8gbW92ZSBwcmVwYXJlL2FwcGx5IGhhbmRsaW5nIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkTW92ZVRpY2soaXRlbS5faWQsIHRoaXMuX3ByZXBhcmVNb3ZlLCB0aGlzLl9hcHBseU1vdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRyYWdnZWQgaXRlbSBmb3IgbW92aW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZXBhcmVNb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gRG8gbm90aGluZyBpZiBpdGVtIGlzIG5vdCBhY3RpdmUuXG4gICAgaWYgKCF0aGlzLl9pdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gSWYgZHJhZyBzb3J0IGlzIGVuYWJsZWQgLT4gY2hlY2sgb3ZlcmxhcC5cbiAgICBpZiAodGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnU29ydCkge1xuICAgICAgaWYgKHRoaXMuX2NoZWNrSGV1cmlzdGljcyh0aGlzLl9kcmFnRXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBseSBtb3ZlbWVudCB0byBkcmFnZ2VkIGl0ZW0uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fYXBwbHlNb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gRG8gbm90aGluZyBpZiBpdGVtIGlzIG5vdCBhY3RpdmUuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVXBkYXRlIGVsZW1lbnQncyB0cmFuc2xhdGVYL1kgdmFsdWVzLlxuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fbGVmdCwgdGhpcy5fdG9wKTtcblxuICAgIC8vIEVtaXQgZHJhZ01vdmUgZXZlbnQuXG4gICAgdGhpcy5fZ2V0R3JpZCgpLl9lbWl0KGV2ZW50RHJhZ01vdmUsIGl0ZW0sIHRoaXMuX2RyYWdFdmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgc2Nyb2xsIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25TY3JvbGwgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgbGFzdCBzY3JvbGwgZXZlbnQuXG4gICAgdGhpcy5fc2Nyb2xsRXZlbnQgPSBldmVudDtcblxuICAgIC8vIERvIHNjcm9sbCBwcmVwYXJlL2FwcGx5IGhhbmRsaW5nIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkU2Nyb2xsVGljayhpdGVtLl9pZCwgdGhpcy5fcHJlcGFyZVNjcm9sbCwgdGhpcy5fYXBwbHlTY3JvbGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRyYWdnZWQgaXRlbSBmb3Igc2Nyb2xsaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZXBhcmVTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUgZG8gbm90aGluZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGF4aXMgPSBzZXR0aW5ncy5kcmFnQXhpcztcbiAgICB2YXIgZ3JpZENvbnRhaW5lciA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBDYWxjdWxhdGUgZWxlbWVudCdzIHJlY3QgYW5kIHgveSBkaWZmLlxuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgeERpZmYgPSB0aGlzLl9lbGVtZW50Q2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICB2YXIgeURpZmYgPSB0aGlzLl9lbGVtZW50Q2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgLy8gVXBkYXRlIGNvbnRhaW5lciBkaWZmLlxuICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IGdyaWRDb250YWluZXIpIHtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKHRoaXMuX2NvbnRhaW5pbmdCbG9jaywgZ3JpZENvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gb2Zmc2V0RGlmZi50b3A7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGhvcml6b250YWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3knKSB7XG4gICAgICB0aGlzLl9sZWZ0ICs9IHhEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFggPSB0aGlzLl9sZWZ0IC0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHZlcnRpY2FsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd4Jykge1xuICAgICAgdGhpcy5fdG9wICs9IHlEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFkgPSB0aGlzLl90b3AgLSB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICB9XG5cbiAgICAvLyBPdmVybGFwIGhhbmRsaW5nLlxuICAgIGlmIChzZXR0aW5ncy5kcmFnU29ydCkgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogQXBwbHkgc2Nyb2xsIHRvIGRyYWdnZWQgaXRlbS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9hcHBseVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSBkbyBub3RoaW5nLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFVwZGF0ZSBlbGVtZW50J3MgdHJhbnNsYXRlWC9ZIHZhbHVlcy5cbiAgICBpdGVtLl9lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2xlZnQsIHRoaXMuX3RvcCk7XG5cbiAgICAvLyBFbWl0IGRyYWdTY3JvbGwgZXZlbnQuXG4gICAgdGhpcy5fZ2V0R3JpZCgpLl9lbWl0KGV2ZW50RHJhZ1Njcm9sbCwgaXRlbSwgdGhpcy5fc2Nyb2xsRXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIGVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vbkVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIHJlc2V0IGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCBtb3ZlIGFuZCBzY3JvbGwgdGlja3MuXG4gICAgY2FuY2VsTW92ZVRpY2soaXRlbS5faWQpO1xuICAgIGNhbmNlbFNjcm9sbFRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gRmluaXNoIGN1cnJlbnRseSBxdWV1ZWQgb3ZlcmxhcCBjaGVjay5cbiAgICBzZXR0aW5ncy5kcmFnU29ydCAmJiB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgnZmluaXNoJyk7XG5cbiAgICAvLyBSZW1vdmUgc2Nyb2xsIGxpc3RlbmVycy5cbiAgICB0aGlzLl91bmJpbmRTY3JvbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIFNldHVwIHJlbGVhc2UgZGF0YS5cbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWCA9IHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZZID0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG5cbiAgICAvLyBSZXNldCBkcmFnIGRhdGEuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIFJlbW92ZSBkcmFnIGNsYXNzIG5hbWUgZnJvbSBlbGVtZW50LlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1EcmFnZ2luZ0NsYXNzKTtcblxuICAgIC8vIEVtaXQgZHJhZ0VuZCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ0VuZCwgaXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gRmluaXNoIHVwIHRoZSBtaWdyYXRpb24gcHJvY2VzcyBvciBzdGFydCB0aGUgcmVsZWFzZSBwcm9jZXNzLlxuICAgIHRoaXMuX2lzTWlncmF0aW5nID8gdGhpcy5fZmluaXNoTWlncmF0aW9uKCkgOiByZWxlYXNlLnN0YXJ0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgaGVscGVyc1xuICAgKiAqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBob3cgbWFueSBwZXJjZW50IHRoZSBpbnRlcnNlY3Rpb24gYXJlYSBvZiB0d28gcmVjdGFuZ2xlcyBpcyBmcm9tXG4gICAqIHRoZSBtYXhpbXVtIHBvdGVudGlhbCBpbnRlcnNlY3Rpb24gYXJlYSBiZXR3ZWVuIHRoZSByZWN0YW5nbGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKiAgIC0gQSBudW1iZXIgYmV0d2VlbiAwLTEwMC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFJlY3RPdmVybGFwU2NvcmUoYSwgYikge1xuICAgIC8vIFJldHVybiAwIGltbWVkaWF0ZWx5IGlmIHRoZSByZWN0YW5nbGVzIGRvIG5vdCBvdmVybGFwLlxuICAgIGlmIChcbiAgICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0IHx8XG4gICAgICBiLmxlZnQgKyBiLndpZHRoIDw9IGEubGVmdCB8fFxuICAgICAgYS50b3AgKyBhLmhlaWdodCA8PSBiLnRvcCB8fFxuICAgICAgYi50b3AgKyBiLmhlaWdodCA8PSBhLnRvcFxuICAgICkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBhcmVhJ3Mgd2lkdGgsIGhlaWdodCwgbWF4IGhlaWdodCBhbmQgbWF4IHdpZHRoLlxuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKGEubGVmdCArIGEud2lkdGgsIGIubGVmdCArIGIud2lkdGgpIC0gTWF0aC5tYXgoYS5sZWZ0LCBiLmxlZnQpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbihhLnRvcCArIGEuaGVpZ2h0LCBiLnRvcCArIGIuaGVpZ2h0KSAtIE1hdGgubWF4KGEudG9wLCBiLnRvcCk7XG4gICAgdmFyIG1heFdpZHRoID0gTWF0aC5taW4oYS53aWR0aCwgYi53aWR0aCk7XG4gICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWluKGEuaGVpZ2h0LCBiLmhlaWdodCk7XG5cbiAgICByZXR1cm4gKCh3aWR0aCAqIGhlaWdodCkgLyAobWF4V2lkdGggKiBtYXhIZWlnaHQpKSAqIDEwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGFuIGFuY2hvciBlbGVtZW50IGFuZCBvcGVuIHRoZSBocmVmIHVybCBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gb3BlbkFuY2hvckhyZWYoZWxlbWVudCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBhbmNob3IgZWxlbWVudC5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdhJykgcmV0dXJuO1xuXG4gICAgLy8gR2V0IGhyZWYgYW5kIG1ha2Ugc3VyZSBpdCBleGlzdHMuXG4gICAgdmFyIGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmICghaHJlZikgcmV0dXJuO1xuXG4gICAgLy8gRmluYWxseSBsZXQncyBuYXZpZ2F0ZSB0byB0aGUgbGluayBocmVmLlxuICAgIHZhciB0YXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFyZ2V0Jyk7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGhyZWYsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBwbGFjZWhvbGRlci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbURyYWdQbGFjZWhvbGRlcihpdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fYW5pbWF0ZSA9IG5ldyBJdGVtQW5pbWF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9ICcnO1xuICAgIHRoaXMuX2RpZE1pZ3JhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSAwO1xuICAgIHRoaXMuX25leHRMZWZ0ID0gMDtcbiAgICB0aGlzLl9uZXh0VG9wID0gMDtcblxuICAgIC8vIEJpbmQgYW5pbWF0aW9uIGhhbmRsZXJzLlxuICAgIHRoaXMuX3NldHVwQW5pbWF0aW9uID0gdGhpcy5fc2V0dXBBbmltYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbiA9IHRoaXMuX3N0YXJ0QW5pbWF0aW9uLmJpbmQodGhpcyk7XG5cbiAgICAvLyBCaW5kIGV2ZW50IGhhbmRsZXJzLlxuICAgIHRoaXMuX29uTGF5b3V0U3RhcnQgPSB0aGlzLl9vbkxheW91dFN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25MYXlvdXRFbmQgPSB0aGlzLl9vbkxheW91dEVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uUmVsZWFzZUVuZCA9IHRoaXMuX29uUmVsZWFzZUVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTWlncmF0ZSA9IHRoaXMuX29uTWlncmF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogTW92ZSBwbGFjZWhvbGRlciB0byBhIG5ldyBwb3NpdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25MYXlvdXRTdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuXG4gICAgLy8gRmluZCBvdXQgdGhlIGl0ZW0ncyBuZXcgKHVuYXBwbGllZCkgbGVmdCBhbmQgdG9wIHBvc2l0aW9uLlxuICAgIHZhciBpdGVtSW5kZXggPSBncmlkLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIHZhciBuZXh0TGVmdCA9IGdyaWQuX2xheW91dC5zbG90c1tpdGVtSW5kZXggKiAyXTtcbiAgICB2YXIgbmV4dFRvcCA9IGdyaWQuX2xheW91dC5zbG90c1tpdGVtSW5kZXggKiAyICsgMV07XG5cbiAgICAvLyBJZiBpdGVtJ3MgcG9zaXRpb24gZGlkIG5vdCBjaGFuZ2UgYW5kIHRoZSBpdGVtIGRpZCBub3QgbWlncmF0ZSB3ZSBjYW5cbiAgICAvLyBzYWZlbHkgc2tpcCBsYXlvdXQuXG4gICAgaWYgKCF0aGlzLl9kaWRNaWdyYXRlICYmIGl0ZW0uX2xlZnQgPT09IG5leHRMZWZ0ICYmIGl0ZW0uX3RvcCA9PT0gbmV4dFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNsb3RzIGRhdGEgaXMgY2FsY3VsYXRlZCB3aXRoIGl0ZW0gbWFyZ2lucyBhZGRlZCB0byB0aGVtIHNvIHdlIG5lZWQgdG8gYWRkXG4gICAgLy8gaXRlbSdzIGxlZnQgYW5kIHRvcCBtYXJnaW4gdG8gdGhlIHNsb3QgZGF0YSB0byBnZXQgdGhlIHBsYWNlaG9sZGVyJ3NcbiAgICAvLyBuZXh0IHBvc2l0aW9uLlxuICAgIG5leHRMZWZ0ICs9IGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgbmV4dFRvcCArPSBpdGVtLl9tYXJnaW5Ub3A7XG5cbiAgICAvLyBKdXN0IHNuYXAgdG8gbmV3IHBvc2l0aW9uIHdpdGhvdXQgYW55IGFuaW1hdGlvbnMgaWYgbm8gYW5pbWF0aW9uIGlzXG4gICAgLy8gcmVxdWlyZWQgb3IgaWYgcGxhY2Vob2xkZXIgbW92ZXMgYmV0d2VlbiBncmlkcy5cbiAgICB2YXIgYW5pbUVuYWJsZWQgPSBncmlkLl9zZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuZHVyYXRpb24gPiAwO1xuICAgIGlmICghYW5pbUVuYWJsZWQgfHwgdGhpcy5fZGlkTWlncmF0ZSkge1xuICAgICAgLy8gQ2FuY2VsIHBvdGVudGlhbCAocXVldWVkKSBsYXlvdXQgdGljay5cbiAgICAgIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCk7XG5cbiAgICAgIC8vIFNuYXAgcGxhY2Vob2xkZXIgdG8gY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgIHZhciB0YXJnZXRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKG5leHRMZWZ0LCBuZXh0VG9wKSB9O1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGUuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICB0aGlzLl9hbmltYXRlLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB0YXJnZXRTdHlsZXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBNb3ZlIHBsYWNlaG9sZGVyIGluc2lkZSBjb3JyZWN0IGNvbnRhaW5lciBhZnRlciBtaWdyYXRpb24uXG4gICAgICBpZiAodGhpcy5fZGlkTWlncmF0ZSkge1xuICAgICAgICBncmlkLmdldEVsZW1lbnQoKS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgdGhpcy5fZGlkTWlncmF0ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdGhlIHBsYWNlaG9sZGVyJ3MgbGF5b3V0IGFuaW1hdGlvbiBpbiB0aGUgbmV4dCB0aWNrLiBXZSBkbyB0aGlzIHRvXG4gICAgLy8gYXZvaWQgbGF5b3V0IHRocmFzaGluZy5cbiAgICB0aGlzLl9uZXh0TGVmdCA9IG5leHRMZWZ0O1xuICAgIHRoaXMuX25leHRUb3AgPSBuZXh0VG9wO1xuICAgIGFkZFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCwgdGhpcy5fc2V0dXBBbmltYXRpb24sIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBwbGFjZWhvbGRlciBmb3IgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fc2V0dXBBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSh0aGlzLl9lbGVtZW50KTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IHRyYW5zbGF0ZS54O1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSB0cmFuc2xhdGUueTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG4gICAgdmFyIGN1cnJlbnRMZWZ0ID0gdGhpcy5fY3VycmVudExlZnQ7XG4gICAgdmFyIGN1cnJlbnRUb3AgPSB0aGlzLl9jdXJyZW50VG9wO1xuICAgIHZhciBuZXh0TGVmdCA9IHRoaXMuX25leHRMZWZ0O1xuICAgIHZhciBuZXh0VG9wID0gdGhpcy5fbmV4dFRvcDtcbiAgICB2YXIgdGFyZ2V0U3R5bGVzID0geyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhuZXh0TGVmdCwgbmV4dFRvcCkgfTtcblxuICAgIC8vIElmIHBsYWNlaG9sZGVyIGlzIGFscmVhZHkgaW4gY29ycmVjdCBwb3NpdGlvbiBsZXQncyBqdXN0IHN0b3AgYW5pbWF0aW9uXG4gICAgLy8gYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAoY3VycmVudExlZnQgPT09IG5leHRMZWZ0ICYmIGN1cnJlbnRUb3AgPT09IG5leHRUb3ApIHtcbiAgICAgIGlmIChhbmltYXRpb24uaXNBbmltYXRpbmcoKSkgYW5pbWF0aW9uLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgbGV0J3Mgc3RhcnQgdGhlIGFuaW1hdGlvbi5cbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9pdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyO1xuICAgIHZhciBjdXJyZW50U3R5bGVzID0geyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfTtcbiAgICBhbmltYXRpb24uc3RhcnQoY3VycmVudFN0eWxlcywgdGFyZ2V0U3R5bGVzLCB7XG4gICAgICBkdXJhdGlvbjogc2V0dGluZ3MuZHVyYXRpb24sXG4gICAgICBlYXNpbmc6IHNldHRpbmdzLmVhc2luZyxcbiAgICAgIG9uRmluaXNoOiB0aGlzLl9vbkxheW91dEVuZFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMYXlvdXQgZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uTGF5b3V0RW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgZW5kIGhhbmRsZXIuIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbiBkcmFnUmVsZWFzZUVuZCBldmVudCBpc1xuICAgKiBlbWl0dGVkIGFuZCByZWNlaXZlcyB0aGUgZXZlbnQgZGF0YSBhcyBpdCdzIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25SZWxlYXNlRW5kID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLl9pZCA9PT0gdGhpcy5faXRlbS5faWQpIHtcbiAgICAgIC8vIElmIHRoZSBwbGFjZWhvbGRlciBpcyBub3QgYW5pbWF0aW5nIGFueW1vcmUgd2UgY2FuIHNhZmVseSByZXNldCBpdC5cbiAgICAgIGlmICghdGhpcy5fYW5pbWF0ZS5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgcGxhY2Vob2xkZXIgaXRlbSBpcyBzdGlsbCBhbmltYXRpbmcgaGVyZSwgbGV0J3Mgd2FpdCBmb3IgaXQgdG9cbiAgICAgIC8vIGZpbmlzaCBpdCdzIGFuaW1hdGlvbi5cbiAgICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogTWlncmF0aW9uIHN0YXJ0IGhhbmRsZXIuIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbiBiZWZvcmVTZW5kIGV2ZW50IGlzXG4gICAqIGVtaXR0ZWQgYW5kIHJlY2VpdmVzIHRoZSBldmVudCBkYXRhIGFzIGl0J3MgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge0l0ZW19IGRhdGEuaXRlbVxuICAgKiBAcGFyYW0ge0dyaWR9IGRhdGEuZnJvbUdyaWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuZnJvbUluZGV4XG4gICAqIEBwYXJhbSB7R3JpZH0gZGF0YS50b0dyaWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudG9JbmRleFxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uTWlncmF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIG1hdGNoaW5nIGl0ZW0uXG4gICAgaWYgKGRhdGEuaXRlbSAhPT0gdGhpcy5faXRlbSkgcmV0dXJuO1xuXG4gICAgdmFyIGdyaWQgPSB0aGlzLl9pdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgbmV4dEdyaWQgPSBkYXRhLnRvR3JpZDtcblxuICAgIC8vIFVuYmluZCBsaXN0ZW5lcnMgZnJvbSBjdXJyZW50IGdyaWQuXG4gICAgZ3JpZC5vZmYoZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBncmlkLm9mZihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBncmlkLm9mZihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBCaW5kIGxpc3RlbmVycyB0byB0aGUgbmV4dCBncmlkLlxuICAgIG5leHRHcmlkLm9uKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgbmV4dEdyaWQub24oZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgbmV4dEdyaWQub24oZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gTWFyayB0aGUgaXRlbSBhcyBtaWdyYXRlZC5cbiAgICB0aGlzLl9kaWRNaWdyYXRlID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ3JlYXRlIHBsYWNlaG9sZGVyLiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgb25seSB3cml0ZXMgdG8gRE9NIGFuZCBkb2VzIG5vdFxuICAgKiByZWFkIGFueXRoaW5nIGZyb20gRE9NIHNvIGl0IHNob3VsZCBub3QgY2F1c2UgYW55IGFkZGl0aW9uYWwgbGF5b3V0XG4gICAqIHRocmFzaGluZyB3aGVuIGl0J3MgY2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIGRyYWcgc3RhcnQgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHBsYWNlaG9sZGVyIHNldCB1cCB3ZSBjYW4gc2tpcCB0aGUgaW5pdGlhdGlvbiBsb2dpYy5cbiAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG5cbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICB2YXIgZWxlbWVudDtcbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnQgPSBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBVcGRhdGUgZWxlbWVudCB0byBhbmltYXRpb24gaW5zdGFuY2UuXG4gICAgYW5pbWF0aW9uLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIEFkZCBwbGFjZWhvbGRlciBjbGFzcyB0byB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBzZXR0aW5ncy5pdGVtUGxhY2Vob2xkZXJDbGFzcyB8fCAnJztcbiAgICBpZiAodGhpcy5fY2xhc3NOYW1lKSB7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIH1cblxuICAgIC8vIFBvc2l0aW9uIHRoZSBwbGFjZWhvbGRlciBpdGVtIGNvcnJlY3RseS5cbiAgICB2YXIgbGVmdCA9IGl0ZW0uX2xlZnQgKyBpdGVtLl9tYXJnaW5MZWZ0O1xuICAgIHZhciB0b3AgPSBpdGVtLl90b3AgKyBpdGVtLl9tYXJnaW5Ub3A7XG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgd2lkdGg6IGl0ZW0uX3dpZHRoICsgJ3B4JyxcbiAgICAgIGhlaWdodDogaXRlbS5faGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGxlZnQsIHRvcClcbiAgICB9KTtcblxuICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGdyaWQub24oZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgZ3JpZC5vbihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub24oZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gb25DcmVhdGUgaG9vay5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGUpKSB7XG4gICAgICBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGUoaXRlbSwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IHRoZSBwbGFjZWhvbGRlciBlbGVtZW50IHRvIHRoZSBncmlkLlxuICAgIGdyaWQuZ2V0RWxlbWVudCgpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCBwbGFjZWhvbGRlciBkYXRhLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRlO1xuXG4gICAgLy8gUmVzZXQgZmxhZy5cbiAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gZmFsc2U7XG5cbiAgICAvLyBDYW5jZWwgcG90ZW50aWFsIChxdWV1ZWQpIGxheW91dCB0aWNrLlxuICAgIGNhbmNlbFBsYWNlaG9sZGVyVGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBSZXNldCBhbmltYXRpb24gaW5zdGFuY2UuXG4gICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICBhbmltYXRpb24uX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gVW5iaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICBncmlkLm9mZihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub2ZmKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIGdyaWQub2ZmKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIFJlbW92ZSBwbGFjZWhvbGRlciBjbGFzcyBmcm9tIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIGlmICh0aGlzLl9jbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgICB0aGlzLl9jbGFzc05hbWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZWxlbWVudC5cbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBvblJlbW92ZSBob29rLiBOb3RlIHRoYXQgaGVyZSB3ZSB1c2UgdGhlIGN1cnJlbnQgZ3JpZCdzIG9uUmVtb3ZlIGNhbGxiYWNrXG4gICAgLy8gc28gaWYgdGhlIGl0ZW0gaGFzIG1pZ3JhdGVkIGR1cmluZyBkcmFnIHRoZSBvblJlbW92ZSBtZXRob2Qgd2lsbCBub3QgYmVcbiAgICAvLyB0aGUgb3JpZ2luYXRpbmcgZ3JpZCdzIG1ldGhvZC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmUpKSB7XG4gICAgICBzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmUoaXRlbSwgZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgcGxhY2Vob2xkZXIncyBkaW1lbnNpb25zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtoZWlnaHR9IGhlaWdodFxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUudXBkYXRlRGltZW5zaW9ucyA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICBzZXRTdHlsZXModGhpcy5fZWxlbWVudCwge1xuICAgICAgICB3aWR0aDogd2lkdGggKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGxhY2Vob2xkZXIgaXMgY3VycmVudGx5IGFjdGl2ZSAodmlzaWJsZSkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl9lbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHBsYWNlaG9sZGVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLl9hbmltYXRlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pdGVtID0gdGhpcy5fYW5pbWF0ZSA9IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFF1ZXVlIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFF1ZXVlKCkge1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBZGQgY2FsbGJhY2sgdG8gdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJvY2VzcyBxdWV1ZSBjYWxsYmFja3MgYW5kIHJlc2V0IHRoZSBxdWV1ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUXVldWUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Kn0gYXJnMVxuICAgKiBAcGFyYW0geyp9IGFyZzJcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgbGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUXVpdCBlYXJseSBpZiB0aGUgcXVldWUgaXMgZW1wdHkuXG4gICAgaWYgKCFsZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHNpbmdsZUNhbGxiYWNrID0gbGVuZ3RoID09PSAxO1xuICAgIHZhciBzbmFwc2hvdCA9IHNpbmdsZUNhbGxiYWNrID8gcXVldWVbMF0gOiBxdWV1ZS5zbGljZSgwKTtcblxuICAgIC8vIFJlc2V0IHF1ZXVlLlxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgY2FsbGJhY2sgbGV0J3MganVzdCBjYWxsIGl0LlxuICAgIGlmIChzaW5nbGVDYWxsYmFjaykge1xuICAgICAgc25hcHNob3QoYXJnMSwgYXJnMik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG11bHRpcGxlIGNhbGxiYWNrcywgbGV0J3MgcHJvY2VzcyB0aGVtLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc25hcHNob3RbaV0oYXJnMSwgYXJnMik7XG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IFF1ZXVlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge1F1ZXVlfVxuICAgKi9cbiAgUXVldWUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3F1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogTGF5b3V0IG1hbmFnZXIgZm9yIEl0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1MYXlvdXQoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0ludGVycnVwdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY3VycmVudFN0eWxlcyA9IHt9O1xuICAgIHRoaXMuX3RhcmdldFN0eWxlcyA9IHt9O1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gMDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gMDtcbiAgICB0aGlzLl9vZmZzZXRMZWZ0ID0gMDtcbiAgICB0aGlzLl9vZmZzZXRUb3AgPSAwO1xuICAgIHRoaXMuX3NraXBOZXh0QW5pbWF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5fYW5pbWF0ZU9wdGlvbnMgPSB7XG4gICAgICBvbkZpbmlzaDogdGhpcy5fZmluaXNoLmJpbmQodGhpcylcbiAgICB9O1xuICAgIHRoaXMuX3F1ZXVlID0gbmV3IFF1ZXVlKCk7XG5cbiAgICAvLyBCaW5kIGFuaW1hdGlvbiBoYW5kbGVycyBhbmQgZmluaXNoIG1ldGhvZC5cbiAgICB0aGlzLl9zZXR1cEFuaW1hdGlvbiA9IHRoaXMuX3NldHVwQW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24gPSB0aGlzLl9zdGFydEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGl0ZW0gbGF5b3V0IGJhc2VkIG9uIGl0J3MgY3VycmVudCBkYXRhLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIGdyaWRTZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgaXNQb3NpdGlvbmluZyA9IHRoaXMuX2lzQWN0aXZlO1xuICAgIHZhciBpc0p1c3RSZWxlYXNlZCA9IHJlbGVhc2UuX2lzQWN0aXZlICYmIHJlbGVhc2UuX2lzUG9zaXRpb25pbmdTdGFydGVkID09PSBmYWxzZTtcbiAgICB2YXIgYW5pbUR1cmF0aW9uID0gaXNKdXN0UmVsZWFzZWRcbiAgICAgID8gZ3JpZFNldHRpbmdzLmRyYWdSZWxlYXNlRHVyYXRpb25cbiAgICAgIDogZ3JpZFNldHRpbmdzLmxheW91dER1cmF0aW9uO1xuICAgIHZhciBhbmltRWFzaW5nID0gaXNKdXN0UmVsZWFzZWQgPyBncmlkU2V0dGluZ3MuZHJhZ1JlbGVhc2VFYXNpbmcgOiBncmlkU2V0dGluZ3MubGF5b3V0RWFzaW5nO1xuICAgIHZhciBhbmltRW5hYmxlZCA9ICFpbnN0YW50ICYmICF0aGlzLl9za2lwTmV4dEFuaW1hdGlvbiAmJiBhbmltRHVyYXRpb24gPiAwO1xuICAgIHZhciBpc0FuaW1hdGluZztcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGN1cnJlbnRseSBwb3NpdGlvbmluZyBwcm9jZXNzIGN1cnJlbnQgbGF5b3V0IGNhbGxiYWNrXG4gICAgLy8gcXVldWUgd2l0aCBpbnRlcnJ1cHRlZCBmbGFnIG9uLlxuICAgIGlmIChpc1Bvc2l0aW9uaW5nKSB0aGlzLl9xdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcblxuICAgIC8vIE1hcmsgcmVsZWFzZSBwb3NpdGlvbmluZyBhcyBzdGFydGVkLlxuICAgIGlmIChpc0p1c3RSZWxlYXNlZCkgcmVsZWFzZS5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgLy8gUHVzaCB0aGUgY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGlmIChpc0Z1bmN0aW9uKG9uRmluaXNoKSkgdGhpcy5fcXVldWUuYWRkKG9uRmluaXNoKTtcblxuICAgIC8vIElmIG5vIGFuaW1hdGlvbnMgYXJlIG5lZWRlZCwgZWFzeSBwZWFzeSFcbiAgICBpZiAoIWFuaW1FbmFibGVkKSB7XG4gICAgICB0aGlzLl91cGRhdGVPZmZzZXRzKCk7XG4gICAgICB0aGlzLl91cGRhdGVUYXJnZXRTdHlsZXMoKTtcbiAgICAgIGlzQW5pbWF0aW5nID0gaXRlbS5fYW5pbWF0ZS5pc0FuaW1hdGluZygpO1xuICAgICAgdGhpcy5zdG9wKGZhbHNlLCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgIWlzQW5pbWF0aW5nICYmIHNldFN0eWxlcyhlbGVtZW50LCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgdGhpcy5fc2tpcE5leHRBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLl9maW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaXRlbSBhY3RpdmUgYW5kIHN0b3JlIHNvbWUgZGF0YSBmb3IgdGhlIGFuaW1hdGlvbiB0aGF0IGlzIGFib3V0IHRvIGJlXG4gICAgLy8gdHJpZ2dlcmVkLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9hbmltYXRlT3B0aW9ucy5lYXNpbmcgPSBhbmltRWFzaW5nO1xuICAgIHRoaXMuX2FuaW1hdGVPcHRpb25zLmR1cmF0aW9uID0gYW5pbUR1cmF0aW9uO1xuICAgIHRoaXMuX2lzSW50ZXJydXB0ZWQgPSBpc1Bvc2l0aW9uaW5nO1xuXG4gICAgLy8gU3RhcnQgdGhlIGl0ZW0ncyBsYXlvdXQgYW5pbWF0aW9uIGluIHRoZSBuZXh0IHRpY2suXG4gICAgYWRkTGF5b3V0VGljayhpdGVtLl9pZCwgdGhpcy5fc2V0dXBBbmltYXRpb24sIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIGl0ZW0ncyBwb3NpdGlvbiBhbmltYXRpb24gaWYgaXQgaXMgY3VycmVudGx5IGFuaW1hdGluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcHJvY2Vzc0NhbGxiYWNrUXVldWU9ZmFsc2VdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0U3R5bGVzXVxuICAgKiBAcmV0dXJucyB7SXRlbUxheW91dH1cbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihwcm9jZXNzQ2FsbGJhY2tRdWV1ZSwgdGFyZ2V0U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBDYW5jZWwgYW5pbWF0aW9uIGluaXQuXG4gICAgY2FuY2VsTGF5b3V0VGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBTdG9wIGFuaW1hdGlvbi5cbiAgICBpdGVtLl9hbmltYXRlLnN0b3AodGFyZ2V0U3R5bGVzKTtcblxuICAgIC8vIFJlbW92ZSBwb3NpdGlvbmluZyBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhpdGVtLl9lbGVtZW50LCBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuaXRlbVBvc2l0aW9uaW5nQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgYWN0aXZlIHN0YXRlLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAvLyBQcm9jZXNzIGNhbGxiYWNrIHF1ZXVlIGlmIG5lZWRlZC5cbiAgICBpZiAocHJvY2Vzc0NhbGxiYWNrUXVldWUpIHRoaXMuX3F1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKHRydWUsIHt9KTtcbiAgICB0aGlzLl9xdWV1ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5faXRlbSA9IHRoaXMuX2N1cnJlbnRTdHlsZXMgPSB0aGlzLl90YXJnZXRTdHlsZXMgPSB0aGlzLl9hbmltYXRlT3B0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgdXBkYXRlIGl0ZW0ncyBjdXJyZW50IGxheW91dCBvZmZzZXQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fdXBkYXRlT2Zmc2V0cyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBtaWdyYXRlID0gaXRlbS5fbWlncmF0ZTtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG5cbiAgICB0aGlzLl9vZmZzZXRMZWZ0ID0gcmVsZWFzZS5faXNBY3RpdmVcbiAgICAgID8gcmVsZWFzZS5fY29udGFpbmVyRGlmZlhcbiAgICAgIDogbWlncmF0ZS5faXNBY3RpdmVcbiAgICAgID8gbWlncmF0ZS5fY29udGFpbmVyRGlmZlhcbiAgICAgIDogMDtcblxuICAgIHRoaXMuX29mZnNldFRvcCA9IHJlbGVhc2UuX2lzQWN0aXZlXG4gICAgICA/IHJlbGVhc2UuX2NvbnRhaW5lckRpZmZZXG4gICAgICA6IG1pZ3JhdGUuX2lzQWN0aXZlXG4gICAgICA/IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZZXG4gICAgICA6IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgdXBkYXRlIGl0ZW0ncyBsYXlvdXQgdGFyZ2V0IHN0eWxlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fdXBkYXRlVGFyZ2V0U3R5bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdGhpcy5fdGFyZ2V0U3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgIHRoaXMuX2l0ZW0uX2xlZnQgKyB0aGlzLl9vZmZzZXRMZWZ0LFxuICAgICAgdGhpcy5faXRlbS5fdG9wICsgdGhpcy5fb2Zmc2V0VG9wXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIGl0ZW0gbGF5b3V0IHByb2NlZHVyZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIC8vIE1hcmsgdGhlIGl0ZW0gYXMgaW5hY3RpdmUgYW5kIHJlbW92ZSBwb3NpdGlvbmluZyBjbGFzc2VzLlxuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gRmluaXNoIHVwIHJlbGVhc2UgYW5kIG1pZ3JhdGlvbi5cbiAgICBpZiAocmVsZWFzZS5faXNBY3RpdmUpIHJlbGVhc2Uuc3RvcCgpO1xuICAgIGlmIChtaWdyYXRlLl9pc0FjdGl2ZSkgbWlncmF0ZS5zdG9wKCk7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgaXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgaXRlbSBmb3IgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fc2V0dXBBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKHRoaXMuX2l0ZW0uX2VsZW1lbnQpO1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IHRyYW5zbGF0ZS55O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgc2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgdGhlIG9mZnNldCBkYXRhIGFuZCB0YXJnZXQgc3R5bGVzLlxuICAgIHRoaXMuX3VwZGF0ZU9mZnNldHMoKTtcbiAgICB0aGlzLl91cGRhdGVUYXJnZXRTdHlsZXMoKTtcblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGFscmVhZHkgaW4gY29ycmVjdCBwb3NpdGlvbiBsZXQncyBxdWl0IGVhcmx5LlxuICAgIGlmIChcbiAgICAgIGl0ZW0uX2xlZnQgPT09IHRoaXMuX2N1cnJlbnRMZWZ0IC0gdGhpcy5fb2Zmc2V0TGVmdCAmJlxuICAgICAgaXRlbS5fdG9wID09PSB0aGlzLl9jdXJyZW50VG9wIC0gdGhpcy5fb2Zmc2V0VG9wXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5faXNJbnRlcnJ1cHRlZCkgdGhpcy5zdG9wKGZhbHNlLCB0aGlzLl90YXJnZXRTdHlsZXMpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNldCBpdGVtJ3MgcG9zaXRpb25pbmcgY2xhc3MgaWYgbmVlZGVkLlxuICAgIGlmICghdGhpcy5faXNJbnRlcnJ1cHRlZCkge1xuICAgICAgYWRkQ2xhc3MoaXRlbS5fZWxlbWVudCwgc2V0dGluZ3MuaXRlbVBvc2l0aW9uaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHN0eWxlcyBmb3IgYW5pbWF0aW9uLlxuICAgIHRoaXMuX2N1cnJlbnRTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2N1cnJlbnRMZWZ0LCB0aGlzLl9jdXJyZW50VG9wKTtcblxuICAgIC8vIEFuaW1hdGUuXG4gICAgaXRlbS5fYW5pbWF0ZS5zdGFydCh0aGlzLl9jdXJyZW50U3R5bGVzLCB0aGlzLl90YXJnZXRTdHlsZXMsIHRoaXMuX2FuaW1hdGVPcHRpb25zKTtcbiAgfTtcblxuICB2YXIgdGVtcFN0eWxlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgbWlncmF0ZSBwcm9jZXNzIGhhbmRsZXIgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1NaWdyYXRlKGl0ZW0pIHtcbiAgICAvLyBQcml2YXRlIHByb3BzLlxuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBtaWdyYXRlIHByb2Nlc3Mgb2YgYW4gaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZH0gdGFyZ2V0R3JpZFxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtjb250YWluZXJdXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKHRhcmdldEdyaWQsIHBvc2l0aW9uLCBjb250YWluZXIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgaXNWaXNpYmxlID0gaXRlbS5pc1Zpc2libGUoKTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRTZXR0aW5ncyA9IHRhcmdldEdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0R3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0YXJnZXRHcmlkLl9pdGVtcztcbiAgICB2YXIgY3VycmVudEluZGV4ID0gZ3JpZC5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVyID0gY29udGFpbmVyIHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICAgIHZhciB0YXJnZXRJbmRleDtcbiAgICB2YXIgdGFyZ2V0SXRlbTtcbiAgICB2YXIgY3VycmVudENvbnRhaW5lcjtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcbiAgICB2YXIgY29udGFpbmVyRGlmZjtcbiAgICB2YXIgdHJhbnNsYXRlO1xuICAgIHZhciB0cmFuc2xhdGVYO1xuICAgIHZhciB0cmFuc2xhdGVZO1xuXG4gICAgLy8gR2V0IHRhcmdldCBpbmRleC5cbiAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgdGFyZ2V0SW5kZXggPSBub3JtYWxpemVBcnJheUluZGV4KHRhcmdldEl0ZW1zLCBwb3NpdGlvbiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEl0ZW0gPSB0YXJnZXRHcmlkLl9nZXRJdGVtKHBvc2l0aW9uKTtcbiAgICAgIC8qKiBAdG9kbyBDb25zaWRlciB0aHJvd2luZyBhbiBlcnJvciBoZXJlIGluc3RlYWQgb2Ygc2lsZW50bHkgZmFpbGluZy4gKi9cbiAgICAgIGlmICghdGFyZ2V0SXRlbSkgcmV0dXJuIHRoaXM7XG4gICAgICB0YXJnZXRJbmRleCA9IHRhcmdldEl0ZW1zLmluZGV4T2YodGFyZ2V0SXRlbSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZXMgaWYgbmVlZGVkLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSB8fCB0aGlzLl9pc0FjdGl2ZSB8fCBpdGVtLmlzUmVsZWFzaW5nKCkpIHtcbiAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGUueDtcbiAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUueTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IHBvc2l0aW9uaW5nLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSkge1xuICAgICAgaXRlbS5fbGF5b3V0LnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IG1pZ3JhdGlvbi5cbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRyYW5zbGF0ZVggLT0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgICB0cmFuc2xhdGVZIC09IHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgdGhpcy5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkgfSk7XG4gICAgfVxuXG4gICAgLy8gQWJvcnQgY3VycmVudCByZWxlYXNlLlxuICAgIGlmIChpdGVtLmlzUmVsZWFzaW5nKCkpIHtcbiAgICAgIHRyYW5zbGF0ZVggLT0gaXRlbS5fcmVsZWFzZS5fY29udGFpbmVyRGlmZlg7XG4gICAgICB0cmFuc2xhdGVZIC09IGl0ZW0uX3JlbGVhc2UuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgaXRlbS5fcmVsZWFzZS5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IHZpc2liaWxpdHkgYW5pbWF0aW9ucy5cbiAgICBpdGVtLl92aXNpYmlsaXR5Ll9zdG9wQW5pbWF0aW9uKCk7XG5cbiAgICAvLyBEZXN0cm95IGN1cnJlbnQgZHJhZy5cbiAgICBpZiAoaXRlbS5fZHJhZykgaXRlbS5fZHJhZy5kZXN0cm95KCk7XG5cbiAgICAvLyBQcm9jZXNzIGN1cnJlbnQgdmlzaWJpbGl0eSBhbmltYXRpb24gcXVldWUuXG4gICAgaXRlbS5fdmlzaWJpbGl0eS5fcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG5cbiAgICAvLyBFbWl0IGJlZm9yZVNlbmQgZXZlbnQuXG4gICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVNlbmQpKSB7XG4gICAgICBncmlkLl9lbWl0KGV2ZW50QmVmb3JlU2VuZCwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEVtaXQgYmVmb3JlUmVjZWl2ZSBldmVudC5cbiAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlUmVjZWl2ZSkpIHtcbiAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRCZWZvcmVSZWNlaXZlLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGN1cnJlbnQgY2xhc3NuYW1lcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBBZGQgbmV3IGNsYXNzbmFtZXMuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgdGFyZ2V0U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc1Zpc2libGUgPyB0YXJnZXRTZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzIDogdGFyZ2V0U2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIE1vdmUgaXRlbSBpbnN0YW5jZSBmcm9tIGN1cnJlbnQgZ3JpZCB0byB0YXJnZXQgZ3JpZC5cbiAgICBncmlkLl9pdGVtcy5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcbiAgICBhcnJheUluc2VydCh0YXJnZXRJdGVtcywgaXRlbSwgdGFyZ2V0SW5kZXgpO1xuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBncmlkIGlkIHJlZmVyZW5jZS5cbiAgICBpdGVtLl9ncmlkSWQgPSB0YXJnZXRHcmlkLl9pZDtcblxuICAgIC8vIEdldCBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBjdXJyZW50Q29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgLy8gTW92ZSB0aGUgaXRlbSBpbnNpZGUgdGhlIHRhcmdldCBjb250YWluZXIgaWYgaXQncyBkaWZmZXJlbnQgdGhhbiB0aGVcbiAgICAvLyBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIGN1cnJlbnRDb250YWluZXIsIHRydWUpO1xuICAgICAgaWYgKCF0cmFuc2xhdGUpIHtcbiAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlLng7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUueTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICAgIHRyYW5zbGF0ZVggKyBvZmZzZXREaWZmLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVkgKyBvZmZzZXREaWZmLnRvcFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY2hpbGQgZWxlbWVudCdzIHN0eWxlcyB0byByZWZsZWN0IHRoZSBjdXJyZW50IHZpc2liaWxpdHkgc3RhdGUuXG4gICAgaXRlbS5fY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgaXNWaXNpYmxlID8gdGFyZ2V0U2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHRhcmdldFNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG5cbiAgICAvLyBVcGRhdGUgZGlzcGxheSBzdHlsZS5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyAnYmxvY2snIDogJ2hpZGRlbic7XG5cbiAgICAvLyBHZXQgb2Zmc2V0IGRpZmYgZm9yIHRoZSBtaWdyYXRpb24gZGF0YS5cbiAgICBjb250YWluZXJEaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIHRhcmdldEVsZW1lbnQsIHRydWUpO1xuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBjYWNoZWQgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIGl0ZW0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgaXRlbS5fcmVmcmVzaFNvcnREYXRhKCk7XG5cbiAgICAvLyBDcmVhdGUgbmV3IGRyYWcgaGFuZGxlci5cbiAgICBpdGVtLl9kcmFnID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0VuYWJsZWQgPyBuZXcgSXRlbURyYWcoaXRlbSkgOiBudWxsO1xuXG4gICAgLy8gU2V0dXAgbWlncmF0aW9uIGRhdGEuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRhcmdldENvbnRhaW5lcjtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IGNvbnRhaW5lckRpZmYubGVmdDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IGNvbnRhaW5lckRpZmYudG9wO1xuXG4gICAgLy8gRW1pdCBzZW5kIGV2ZW50LlxuICAgIGlmIChncmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRTZW5kKSkge1xuICAgICAgZ3JpZC5fZW1pdChldmVudFNlbmQsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHJlY2VpdmUgZXZlbnQuXG4gICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudFJlY2VpdmUpKSB7XG4gICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50UmVjZWl2ZSwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgdGhlIG1pZ3JhdGUgcHJvY2VzcyBvZiBhbiBpdGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBhYm9ydCBhblxuICAgKiBvbmdvaW5nIG1pZ3JhdGUgcHJvY2VzcyAoYW5pbWF0aW9uKSBvciBmaW5pc2ggdGhlIG1pZ3JhdGUgcHJvY2Vzcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Fib3J0PWZhbHNlXVxuICAgKiAgLSBTaG91bGQgdGhlIG1pZ3JhdGlvbiBiZSBhYm9ydGVkP1xuICAgKiBAcGFyYW0ge09iamVjdH0gW2N1cnJlbnRTdHlsZXNdXG4gICAqICAtIE9wdGlvbmFsIGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSBzdHlsZXMuXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oYWJvcnQsIGN1cnJlbnRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgZ3JpZEVsZW1lbnQgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciB0cmFuc2xhdGU7XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBncmlkRWxlbWVudCkge1xuICAgICAgaWYgKCFjdXJyZW50U3R5bGVzKSB7XG4gICAgICAgIGlmIChhYm9ydCkge1xuICAgICAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICB0ZW1wU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgICAgIHRyYW5zbGF0ZS54IC0gdGhpcy5fY29udGFpbmVyRGlmZlgsXG4gICAgICAgICAgICB0cmFuc2xhdGUueSAtIHRoaXMuX2NvbnRhaW5lckRpZmZZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhpdGVtLl9sZWZ0LCBpdGVtLl90b3ApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSB0ZW1wU3R5bGVzO1xuICAgICAgfVxuICAgICAgZ3JpZEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgY3VycmVudFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbU1pZ3JhdGUucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtTWlncmF0ZX1cbiAgICovXG4gIEl0ZW1NaWdyYXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSk7XG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciB0ZW1wU3R5bGVzJDEgPSB7fTtcblxuICAvKipcbiAgICogVGhlIHJlbGVhc2UgcHJvY2VzcyBoYW5kbGVyIGNvbnN0cnVjdG9yLiBBbHRob3VnaCB0aGlzIG1pZ2h0IHNlZW0gYXMgcHJvcGVyXG4gICAqIGZpdCBmb3IgdGhlIGRyYWcgcHJvY2VzcyB0aGlzIG5lZWRzIHRvIGJlIHNlcGFyYXRlZCBpbnRvIGl0J3Mgb3duIGxvZ2ljXG4gICAqIGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgYSBzY2VuYXJpbyB3aGVyZSBkcmFnIGlzIGRpc2FibGVkLCBidXQgdGhlIHJlbGVhc2VcbiAgICogcHJvY2VzcyBzdGlsbCBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZCAoZHJhZ2dpbmcgZnJvbSBhIGdyaWQgdG8gYW5vdGhlcikuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1SZWxlYXNlKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSByZWxlYXNlIHByb2Nlc3Mgb2YgYW4gaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcblxuICAgIC8vIEZsYWcgcmVsZWFzZSBhcyBhY3RpdmUuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gQWRkIHJlbGVhc2UgY2xhc3MgbmFtZSB0byB0aGUgcmVsZWFzZWQgZWxlbWVudC5cbiAgICBhZGRDbGFzcyhpdGVtLl9lbGVtZW50LCBncmlkLl9zZXR0aW5ncy5pdGVtUmVsZWFzaW5nQ2xhc3MpO1xuXG4gICAgLy8gRW1pdCBkcmFnUmVsZWFzZVN0YXJ0IGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnUmVsZWFzZVN0YXJ0LCBpdGVtKTtcblxuICAgIC8vIFBvc2l0aW9uIHRoZSByZWxlYXNlZCBpdGVtLlxuICAgIGl0ZW0uX2xheW91dC5zdGFydChmYWxzZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRW5kIHRoZSByZWxlYXNlIHByb2Nlc3Mgb2YgYW4gaXRlbS4gVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gYWJvcnQgYW5cbiAgICogb25nb2luZyByZWxlYXNlIHByb2Nlc3MgKGFuaW1hdGlvbikgb3IgZmluaXNoIHRoZSByZWxlYXNlIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFthYm9ydD1mYWxzZV1cbiAgICogIC0gU2hvdWxkIHRoZSByZWxlYXNlIGJlIGFib3J0ZWQ/IFdoZW4gdHJ1ZSwgdGhlIHJlbGVhc2UgZW5kIGV2ZW50IHdvbid0IGJlXG4gICAqICAgIGVtaXR0ZWQuIFNldCB0byB0cnVlIG9ubHkgd2hlbiB5b3UgbmVlZCB0byBhYm9ydCB0aGUgcmVsZWFzZSBwcm9jZXNzXG4gICAqICAgIHdoaWxlIHRoZSBpdGVtIGlzIGFuaW1hdGluZyB0byBpdCdzIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2N1cnJlbnRTdHlsZXNdXG4gICAqICAtIE9wdGlvbmFsIGN1cnJlbnQgdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSBzdHlsZXMuXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oYWJvcnQsIGN1cnJlbnRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgY29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdHJhbnNsYXRlO1xuXG4gICAgLy8gUmVzZXQgZGF0YSBhbmQgcmVtb3ZlIHJlbGVhc2luZyBjbGFzcyBuYW1lIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIElmIHRoZSByZWxlYXNlZCBlbGVtZW50IGlzIG91dHNpZGUgdGhlIGdyaWQncyBjb250YWluZXIgZWxlbWVudCBwdXQgaXRcbiAgICAvLyBiYWNrIHRoZXJlIGFuZCBhZGp1c3QgcG9zaXRpb24gYWNjb3JkaW5nbHkuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gY29udGFpbmVyKSB7XG4gICAgICBpZiAoIWN1cnJlbnRTdHlsZXMpIHtcbiAgICAgICAgaWYgKGFib3J0KSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRlbXBTdHlsZXMkMS50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICAgICAgICB0cmFuc2xhdGUueCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYLFxuICAgICAgICAgICAgdHJhbnNsYXRlLnkgLSB0aGlzLl9jb250YWluZXJEaWZmWVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFN0eWxlcyQxLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhpdGVtLl9sZWZ0LCBpdGVtLl90b3ApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSB0ZW1wU3R5bGVzJDE7XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBzZXRTdHlsZXMoZWxlbWVudCwgY3VycmVudFN0eWxlcyk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBkcmFnUmVsZWFzZUVuZCBldmVudC5cbiAgICBpZiAoIWFib3J0KSBncmlkLl9lbWl0KGV2ZW50RHJhZ1JlbGVhc2VFbmQsIGl0ZW0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbVJlbGVhc2V9XG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKHRydWUpO1xuICAgIHRoaXMuX2l0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZXNldCBwdWJsaWMgZGF0YSBhbmQgcmVtb3ZlIHJlbGVhc2luZyBjbGFzcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzUG9zaXRpb25pbmdTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgICByZW1vdmVDbGFzcyhpdGVtLl9lbGVtZW50LCBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuaXRlbVJlbGVhc2luZ0NsYXNzKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgdmFsdWVzIG9mIHRoZSBwcm92aWRlZCBzdHlsZXMgZGVmaW5pdGlvbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDdXJyZW50U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIHZhciBjdXJyZW50ID0ge307XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIGN1cnJlbnRbcHJvcF0gPSBnZXRTdHlsZShlbGVtZW50LCBnZXRTdHlsZU5hbWUocHJvcCkpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXNpYmlsaXR5IG1hbmFnZXIgZm9yIEl0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1WaXNpYmlsaXR5KGl0ZW0pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSBpdGVtLl9pc0FjdGl2ZTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNldCB1cCB2aXNpYmlsaXR5IHN0YXRlcy5cbiAgICB0aGlzLl9pc0hpZGRlbiA9ICFpc0FjdGl2ZTtcbiAgICB0aGlzLl9pc0hpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgLy8gQ2FsbGJhY2sgcXVldWUuXG4gICAgdGhpcy5fcXVldWUgPSBuZXcgUXVldWUoKTtcblxuICAgIC8vIEJpbmQgc2hvdy9oaWRlIGZpbmlzaGVycy5cbiAgICB0aGlzLl9maW5pc2hTaG93ID0gdGhpcy5fZmluaXNoU2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2ZpbmlzaEhpZGUgPSB0aGlzLl9maW5pc2hIaWRlLmJpbmQodGhpcyk7XG5cbiAgICAvLyBGb3JjZSBpdGVtIHRvIGJlIGVpdGhlciB2aXNpYmxlIG9yIGhpZGRlbiBvbiBpbml0LlxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzQWN0aXZlID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgIC8vIFNldCB2aXNpYmxlL2hpZGRlbiBjbGFzcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc0FjdGl2ZSA/IHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgc3R5bGVzIGZvciB0aGUgY2hpbGQgZWxlbWVudC5cbiAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIGlzQWN0aXZlID8gc2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU2hvdyBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbnN0YW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1WaXNpYmlsaXR5fVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24ob25GaW5pc2gpID8gb25GaW5pc2ggOiBudWxsO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBJZiBpdGVtIGlzIHZpc2libGUgY2FsbCB0aGUgY2FsbGJhY2sgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd2luZyAmJiAhdGhpcy5faXNIaWRkZW4pIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGZhbHNlLCBpdGVtKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgc2hvd2luZyBhbmQgZG9lcyBub3QgbmVlZCB0byBiZSBzaG93biBpbnN0YW50bHksIGxldCdzIGp1c3RcbiAgICAvLyBwdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZSBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICh0aGlzLl9pc1Nob3dpbmcgJiYgIWluc3RhbnQpIHtcbiAgICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBoaWRpbmcgb3IgaGlkZGVuIHByb2Nlc3MgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBjYWxsYmFja1xuICAgIC8vIHF1ZXVlIHdpdGggdGhlIGludGVycnVwdGVkIGZsYWcgYWN0aXZlLCB1cGRhdGUgY2xhc3NlcyBhbmQgc2V0IGRpc3BsYXlcbiAgICAvLyB0byBibG9jayBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3dpbmcpIHtcbiAgICAgIHF1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgICAgaWYgKCF0aGlzLl9pc0hpZGluZykgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICAvLyBQdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuXG4gICAgLy8gVXBkYXRlIHZpc2liaWxpdHkgc3RhdGVzLlxuICAgIGl0ZW0uX2lzQWN0aXZlID0gdGhpcy5faXNTaG93aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9pc0hpZGluZyA9IHRoaXMuX2lzSGlkZGVuID0gZmFsc2U7XG5cbiAgICAvLyBGaW5hbGx5IGxldCdzIHN0YXJ0IHNob3cgYW5pbWF0aW9uLlxuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKHRydWUsIGluc3RhbnQsIHRoaXMuX2ZpbmlzaFNob3cpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGUgaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zdGFudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtJdGVtVmlzaWJpbGl0eX1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKG9uRmluaXNoKSA/IG9uRmluaXNoIDogbnVsbDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBhbHJlYWR5IGhpZGRlbiBjYWxsIHRoZSBjYWxsYmFjayBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICghdGhpcy5faXNIaWRpbmcgJiYgdGhpcy5faXNIaWRkZW4pIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGZhbHNlLCBpdGVtKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIGl0ZW0gaXMgaGlkaW5nIGFuZCBkb2VzIG5vdCBuZWVkIHRvIGJlIGhpZGRlbiBpbnN0YW50bHksIGxldCdzIGp1c3RcbiAgICAvLyBwdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZSBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICh0aGlzLl9pc0hpZGluZyAmJiAhaW5zdGFudCkge1xuICAgICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIHNob3dpbmcgb3IgdmlzaWJsZSBwcm9jZXNzIHRoZSBjdXJyZW50IHZpc2liaWxpdHkgY2FsbGJhY2tcbiAgICAvLyBxdWV1ZSB3aXRoIHRoZSBpbnRlcnJ1cHRlZCBmbGFnIGFjdGl2ZSwgdXBkYXRlIGNsYXNzZXMgYW5kIHNldCBkaXNwbGF5XG4gICAgLy8gdG8gYmxvY2sgaWYgbmVjZXNzYXJ5LlxuICAgIGlmICghdGhpcy5faXNIaWRpbmcpIHtcbiAgICAgIHF1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIFB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG5cbiAgICAvLyBVcGRhdGUgdmlzaWJpbGl0eSBzdGF0ZXMuXG4gICAgdGhpcy5faXNIaWRkZW4gPSB0aGlzLl9pc0hpZGluZyA9IHRydWU7XG4gICAgaXRlbS5faXNBY3RpdmUgPSB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcblxuICAgIC8vIEZpbmFsbHkgbGV0J3Mgc3RhcnQgaGlkZSBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24oZmFsc2UsIGluc3RhbnQsIHRoaXMuX2ZpbmlzaEhpZGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbVZpc2liaWxpdHl9XG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBTdG9wIHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgIHRoaXMuX3N0b3BBbmltYXRpb24oe30pO1xuXG4gICAgLy8gRmlyZSBhbGwgdW5jb21wbGV0ZWQgY2FsbGJhY2tzIHdpdGggaW50ZXJydXB0ZWQgZmxhZyBhbmQgZGVzdHJveSB0aGUgcXVldWUuXG4gICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSkuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIHZpc2libGUvaGlkZGVuIGNsYXNzZXMuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIFJlc2V0IHN0YXRlLlxuICAgIHRoaXMuX2l0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0aGlzLl9pc0hpZGRlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCB2aXNpYmlsaXR5IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvVmlzaWJsZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50XVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX3N0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24odG9WaXNpYmxlLCBpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0U3R5bGVzID0gdG9WaXNpYmxlID8gc2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHNldHRpbmdzLmhpZGRlblN0eWxlcztcbiAgICB2YXIgZHVyYXRpb24gPSBwYXJzZUludCh0b1Zpc2libGUgPyBzZXR0aW5ncy5zaG93RHVyYXRpb24gOiBzZXR0aW5ncy5oaWRlRHVyYXRpb24pIHx8IDA7XG4gICAgdmFyIGVhc2luZyA9ICh0b1Zpc2libGUgPyBzZXR0aW5ncy5zaG93RWFzaW5nIDogc2V0dGluZ3MuaGlkZUVhc2luZykgfHwgJ2Vhc2UnO1xuICAgIHZhciBpc0luc3RhbnQgPSBpbnN0YW50IHx8IGR1cmF0aW9uIDw9IDA7XG4gICAgdmFyIGN1cnJlbnRTdHlsZXM7XG5cbiAgICAvLyBObyB0YXJnZXQgc3R5bGVzPyBMZXQncyBxdWl0IGVhcmx5LlxuICAgIGlmICghdGFyZ2V0U3R5bGVzKSB7XG4gICAgICBvbkZpbmlzaCAmJiBvbkZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBxdWV1ZWQgdmlzaWJpbGl0eSB0aWNrLlxuICAgIGNhbmNlbFZpc2liaWxpdHlUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIElmIHdlIG5lZWQgdG8gYXBwbHkgdGhlIHN0eWxlcyBpbnN0YW50bHkgd2l0aG91dCBhbmltYXRpb24uXG4gICAgaWYgKGlzSW5zdGFudCkge1xuICAgICAgaWYgKGl0ZW0uX2FuaW1hdGVDaGlsZC5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIGl0ZW0uX2FuaW1hdGVDaGlsZC5zdG9wKHRhcmdldFN0eWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIHRhcmdldFN0eWxlcyk7XG4gICAgICB9XG4gICAgICBvbkZpbmlzaCAmJiBvbkZpbmlzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb24gaW4gdGhlIG5leHQgdGljayAodG8gYXZvaWQgbGF5b3V0IHRocmFzaGluZykuXG4gICAgYWRkVmlzaWJpbGl0eVRpY2soXG4gICAgICBpdGVtLl9pZCxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjdXJyZW50U3R5bGVzID0gZ2V0Q3VycmVudFN0eWxlcyhpdGVtLl9jaGlsZCwgdGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0YXJ0KGN1cnJlbnRTdHlsZXMsIHRhcmdldFN0eWxlcywge1xuICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6IGVhc2luZyxcbiAgICAgICAgICBvbkZpbmlzaDogb25GaW5pc2hcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCB2aXNpYmlsaXR5IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldFN0eWxlc11cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fc3RvcEFuaW1hdGlvbiA9IGZ1bmN0aW9uKHRhcmdldFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICBjYW5jZWxWaXNpYmlsaXR5VGljayhpdGVtLl9pZCk7XG4gICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIHNob3cgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX2ZpbmlzaFNob3cgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNIaWRkZW4pIHJldHVybjtcbiAgICB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgdGhpcy5faXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmlzaCBoaWRlIHByb2NlZHVyZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKi9cbiAgdmFyIGZpbmlzaFN0eWxlcyA9IHt9O1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX2ZpbmlzaEhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzSGlkZGVuKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gZmFsc2U7XG4gICAgZmluaXNoU3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZygwLCAwKTtcbiAgICBpdGVtLl9sYXlvdXQuc3RvcCh0cnVlLCBmaW5pc2hTdHlsZXMpO1xuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLl9xdWV1ZS5mbHVzaChmYWxzZSwgaXRlbSk7XG4gIH07XG5cbiAgdmFyIGlkID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHVuaXF1ZSBudW1lcmljIGlkIChpbmNyZW1lbnRzIGEgYmFzZSB2YWx1ZSBvbiBldmVyeSBjYWxsKS5cbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZVVpZCgpIHtcbiAgICByZXR1cm4gKytpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEl0ZW0gaW5zdGFuY2UgZm9yIGEgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzQWN0aXZlXVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbShncmlkLCBlbGVtZW50LCBpc0FjdGl2ZSkge1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIGlkLlxuICAgIHRoaXMuX2lkID0gY3JlYXRlVWlkKCk7XG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gY29ubmVjdGVkIEdyaWQgaW5zdGFuY2UncyBpZC5cbiAgICB0aGlzLl9ncmlkSWQgPSBncmlkLl9pZDtcblxuICAgIC8vIERlc3Ryb3llZCBmbGFnLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBwb3NpdGlvbnMuXG4gICAgdGhpcy5fbGVmdCA9IDA7XG4gICAgdGhpcy5fdG9wID0gMDtcblxuICAgIC8vIFRoZSBlbGVtZW50cy5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9jaGlsZCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG5cbiAgICAvLyBJZiB0aGUgcHJvdmlkZWQgaXRlbSBlbGVtZW50IGlzIG5vdCBhIGRpcmVjdCBjaGlsZCBvZiB0aGUgZ3JpZCBjb250YWluZXJcbiAgICAvLyBlbGVtZW50LCBhcHBlbmQgaXQgdG8gdGhlIGdyaWQgY29udGFpbmVyLlxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IGdyaWQuX2VsZW1lbnQpIHtcbiAgICAgIGdyaWQuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGl0ZW0gY2xhc3MuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUNsYXNzKTtcblxuICAgIC8vIElmIGlzQWN0aXZlIGlzIG5vdCBkZWZpbmVkLCBsZXQncyB0cnkgdG8gYXV0by1kZXRlY3QgaXQuXG4gICAgaWYgKHR5cGVvZiBpc0FjdGl2ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpc0FjdGl2ZSA9IGdldFN0eWxlKGVsZW1lbnQsICdkaXNwbGF5JykgIT09ICdub25lJztcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgYWN0aXZlIHN0YXRlIChkZWZpbmVzIGlmIHRoZSBpdGVtIGlzIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgbGF5b3V0XG4gICAgLy8gb3Igbm90KS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuXG4gICAgLy8gU2V0IGVsZW1lbnQncyBpbml0aWFsIHBvc2l0aW9uIHN0eWxlcy5cbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZygwLCAwKTtcblxuICAgIC8vIEluaXRpYXRlIGl0ZW0ncyBhbmltYXRpb24gY29udHJvbGxlcnMuXG4gICAgdGhpcy5fYW5pbWF0ZSA9IG5ldyBJdGVtQW5pbWF0ZShlbGVtZW50KTtcbiAgICB0aGlzLl9hbmltYXRlQ2hpbGQgPSBuZXcgSXRlbUFuaW1hdGUodGhpcy5fY2hpbGQpO1xuXG4gICAgLy8gU2V0dXAgdmlzaWJpbGl0eSBoYW5kbGVyLlxuICAgIHRoaXMuX3Zpc2liaWxpdHkgPSBuZXcgSXRlbVZpc2liaWxpdHkodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgbGF5b3V0IGhhbmRsZXIuXG4gICAgdGhpcy5fbGF5b3V0ID0gbmV3IEl0ZW1MYXlvdXQodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgbWlncmF0aW9uIGhhbmRsZXIgZGF0YS5cbiAgICB0aGlzLl9taWdyYXRlID0gbmV3IEl0ZW1NaWdyYXRlKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIHJlbGVhc2UgaGFuZGxlci4gTm90ZSB0aGF0IGFsdGhvdWdoIHRoaXMgaXMgZnVsbHkgbGlua2VkIHRvIGRyYWdnaW5nXG4gICAgLy8gdGhpcyBzdGlsbCBuZWVkcyB0byBiZSBhbHdheXMgaW5zdGFudGlhdGVkIHRvIGhhbmRsZSBtaWdyYXRpb24gc2NlbmFyaW9zXG4gICAgLy8gY29ycmVjdGx5LlxuICAgIHRoaXMuX3JlbGVhc2UgPSBuZXcgSXRlbVJlbGVhc2UodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgZHJhZyBwbGFjZWhvbGRlciBoYW5kbGVyLiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBpcyBmdWxseSBsaW5rZWQgdG9cbiAgICAvLyBkcmFnZ2luZyB0aGlzIHN0aWxsIG5lZWRzIHRvIGJlIGFsd2F5cyBpbnN0YW50aWF0ZWQgdG8gaGFuZGxlIG1pZ3JhdGlvblxuICAgIC8vIHNjZW5hcmlvcyBjb3JyZWN0bHkuXG4gICAgdGhpcy5fZHJhZ1BsYWNlaG9sZGVyID0gbmV3IEl0ZW1EcmFnUGxhY2Vob2xkZXIodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgZHJhZyBoYW5kbGVyLlxuICAgIHRoaXMuX2RyYWcgPSBzZXR0aW5ncy5kcmFnRW5hYmxlZCA/IG5ldyBJdGVtRHJhZyh0aGlzKSA6IG51bGw7XG5cbiAgICAvLyBTZXQgdXAgdGhlIGluaXRpYWwgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIHRoaXMuX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgdGhpcy5fcmVmcmVzaFNvcnREYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBncmlkIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRHcmlkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdyaWRJbnN0YW5jZXNbdGhpcy5fZ3JpZElkXTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIHdpZHRoLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIGhlaWdodC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIG1hcmdpbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqICAgLSBUaGUgcmV0dXJuZWQgb2JqZWN0IGNvbnRhaW5zIGxlZnQsIHJpZ2h0LCB0b3AgYW5kIGJvdHRvbSBwcm9wZXJ0aWVzXG4gICAqICAgICB3aGljaCBpbmRpY2F0ZSB0aGUgaXRlbSBlbGVtZW50J3MgY2FjaGVkIG1hcmdpbnMuXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRNYXJnaW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogdGhpcy5fbWFyZ2luTGVmdCxcbiAgICAgIHJpZ2h0OiB0aGlzLl9tYXJnaW5SaWdodCxcbiAgICAgIHRvcDogdGhpcy5fbWFyZ2luVG9wLFxuICAgICAgYm90dG9tOiB0aGlzLl9tYXJnaW5Cb3R0b21cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogICAtIFRoZSByZXR1cm5lZCBvYmplY3QgY29udGFpbnMgbGVmdCBhbmQgdG9wIHByb3BlcnRpZXMgd2hpY2ggaW5kaWNhdGUgdGhlXG4gICAqICAgICBpdGVtIGVsZW1lbnQncyBjYWNoZWQgcG9zaXRpb24gaW4gdGhlIGdyaWQuXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiB0aGlzLl9sZWZ0LFxuICAgICAgdG9wOiB0aGlzLl90b3BcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBhY3RpdmU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIHZpc2libGU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fdmlzaWJpbGl0eSAmJiAhdGhpcy5fdmlzaWJpbGl0eS5faXNIaWRkZW47XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIGFuaW1hdGVkIHRvIHZpc2libGU/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNTaG93aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3Zpc2liaWxpdHkgJiYgdGhpcy5fdmlzaWJpbGl0eS5faXNTaG93aW5nKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgYW5pbWF0ZWQgdG8gaGlkZGVuP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzSGlkaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3Zpc2liaWxpdHkgJiYgdGhpcy5fdmlzaWJpbGl0eS5faXNIaWRpbmcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBwb3NpdGlvbmluZz9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Bvc2l0aW9uaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX2xheW91dCAmJiB0aGlzLl9sYXlvdXQuX2lzQWN0aXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgZHJhZ2dlZD9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX2RyYWcgJiYgdGhpcy5fZHJhZy5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyByZWxlYXNlZD9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1JlbGVhc2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl9yZWxlYXNlICYmIHRoaXMuX3JlbGVhc2UuX2lzQWN0aXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gZGVzdHJveWVkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzRGVzdHJveWVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGVzdHJveWVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlIGl0ZW0ncyBkaW1lbnNpb25zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9yZWZyZXNoRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGRlbikgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBkcmFnUGxhY2Vob2xkZXIgPSB0aGlzLl9kcmFnUGxhY2Vob2xkZXI7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAgdGhpcy5fd2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IHJlY3QuaGVpZ2h0O1xuXG4gICAgLy8gQ2FsY3VsYXRlIG1hcmdpbnMgKGlnbm9yZSBuZWdhdGl2ZSBtYXJnaW5zKS5cbiAgICB0aGlzLl9tYXJnaW5MZWZ0ID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tbGVmdCcpKTtcbiAgICB0aGlzLl9tYXJnaW5SaWdodCA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLXJpZ2h0JykpO1xuICAgIHRoaXMuX21hcmdpblRvcCA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLXRvcCcpKTtcbiAgICB0aGlzLl9tYXJnaW5Cb3R0b20gPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi1ib3R0b20nKSk7XG5cbiAgICAvLyBLZWVwIGRyYWcgcGxhY2Vob2xkZXIncyBkaW1lbnNpb25zIHN5bmNlZCB3aXRoIHRoZSBpdGVtJ3MuXG4gICAgaWYgKGRyYWdQbGFjZWhvbGRlcikge1xuICAgICAgZHJhZ1BsYWNlaG9sZGVyLnVwZGF0ZURpbWVuc2lvbnModGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaCBhbmQgc3RvcmUgaXRlbSdzIHNvcnQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5fcmVmcmVzaFNvcnREYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgZGF0YSA9ICh0aGlzLl9zb3J0RGF0YSA9IHt9KTtcbiAgICB2YXIgZ2V0dGVycyA9IHRoaXMuZ2V0R3JpZCgpLl9zZXR0aW5ncy5zb3J0RGF0YTtcbiAgICB2YXIgcHJvcDtcblxuICAgIGZvciAocHJvcCBpbiBnZXR0ZXJzKSB7XG4gICAgICBkYXRhW3Byb3BdID0gZ2V0dGVyc1twcm9wXSh0aGlzLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbW92ZUVsZW1lbnQ9ZmFsc2VdXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uKHJlbW92ZUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBpbmRleCA9IGdyaWQuX2l0ZW1zLmluZGV4T2YodGhpcyk7XG5cbiAgICAvLyBEZXN0cm95IGhhbmRsZXJzLlxuICAgIHRoaXMuX3JlbGVhc2UuZGVzdHJveSgpO1xuICAgIHRoaXMuX21pZ3JhdGUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2xheW91dC5kZXN0cm95KCk7XG4gICAgdGhpcy5fdmlzaWJpbGl0eS5kZXN0cm95KCk7XG4gICAgdGhpcy5fYW5pbWF0ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fYW5pbWF0ZUNoaWxkLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9kcmFnUGxhY2Vob2xkZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuX2RyYWcgJiYgdGhpcy5fZHJhZy5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgYWxsIGlubGluZSBzdHlsZXMuXG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgdGhpcy5fY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gY2xhc3MuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUNsYXNzKTtcblxuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gR3JpZCBpbnN0YW5jZSBpZiBpdCBzdGlsbCBleGlzdHMgdGhlcmUuXG4gICAgaW5kZXggPiAtMSAmJiBncmlkLl9pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gUmVtb3ZlIGVsZW1lbnQgZnJvbSBET00uXG4gICAgcmVtb3ZlRWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAvLyBSZXNldCBzdGF0ZS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZGVmYXVsdCBsYXlvdXQgYWxnb3JpdGhtIGZvciBNdXVyaS4gQmFzZWQgb24gTUFYUkVDVFMgYXBwcm9hY2hcbiAgICogYXMgZGVzY3JpYmVkIGJ5IEp1a2thIEp5bMOkbmtpIGluIGhpcyBzdXJ2ZXk6IFwiQSBUaG91c2FuZCBXYXlzIHRvIFBhY2sgdGhlXG4gICAqIEJpbiAtIEEgUHJhY3RpY2FsIEFwcHJvYWNoIHRvIFR3by1EaW1lbnNpb25hbCBSZWN0YW5nbGUgQmluIFBhY2tpbmcuXCIuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUGFja2VyKCkge1xuICAgIHRoaXMuX3Nsb3RzID0gW107XG4gICAgdGhpcy5fc2xvdFNpemVzID0gW107XG4gICAgdGhpcy5fZnJlZVNsb3RzID0gW107XG4gICAgdGhpcy5fbmV3U2xvdHMgPSBbXTtcbiAgICB0aGlzLl9yZWN0SXRlbSA9IHt9O1xuICAgIHRoaXMuX3JlY3RTdG9yZSA9IFtdO1xuICAgIHRoaXMuX3JlY3RJZCA9IDA7XG5cbiAgICAvLyBUaGUgbGF5b3V0IHJldHVybiBkYXRhLCB3aGljaCB3aWxsIGJlIHBvcHVsYXRlZCBpbiBnZXRMYXlvdXQuXG4gICAgdGhpcy5fbGF5b3V0ID0ge1xuICAgICAgc2xvdHM6IG51bGwsXG4gICAgICBzZXRXaWR0aDogZmFsc2UsXG4gICAgICBzZXRIZWlnaHQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IGZhbHNlLFxuICAgICAgaGVpZ2h0OiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBCaW5kIHNvcnQgaGFuZGxlcnMuXG4gICAgdGhpcy5fc29ydFJlY3RzTGVmdFRvcCA9IHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0ID0gdGhpcy5fc29ydFJlY3RzVG9wTGVmdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtW119IGl0ZW1zXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEBwYXJhbSB7TnVtYmVyW119IFtzbG90c11cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbGxHYXBzPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmhvcml6b250YWw9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxpZ25SaWdodD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGlnbkJvdHRvbT1mYWxzZV1cbiAgICogQHJldHVybnMge0xheW91dERhdGF9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLmdldExheW91dCA9IGZ1bmN0aW9uKGl0ZW1zLCB3aWR0aCwgaGVpZ2h0LCBzbG90cywgb3B0aW9ucykge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgdmFyIGZpbGxHYXBzID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmZpbGxHYXBzKTtcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmhvcml6b250YWwpO1xuICAgIHZhciBhbGlnblJpZ2h0ID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmFsaWduUmlnaHQpO1xuICAgIHZhciBhbGlnbkJvdHRvbSA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGlnbkJvdHRvbSk7XG4gICAgdmFyIHJvdW5kaW5nID0gISEob3B0aW9ucyAmJiBvcHRpb25zLnJvdW5kaW5nKTtcbiAgICB2YXIgc2xvdFNpemVzID0gdGhpcy5fc2xvdFNpemVzO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUmVzZXQgbGF5b3V0IGRhdGEuXG4gICAgbGF5b3V0LnNsb3RzID0gc2xvdHMgPyBzbG90cyA6IHRoaXMuX3Nsb3RzO1xuICAgIGxheW91dC53aWR0aCA9IGlzSG9yaXpvbnRhbCA/IDAgOiByb3VuZGluZyA/IE1hdGgucm91bmQod2lkdGgpIDogd2lkdGg7XG4gICAgbGF5b3V0LmhlaWdodCA9ICFpc0hvcml6b250YWwgPyAwIDogcm91bmRpbmcgPyBNYXRoLnJvdW5kKGhlaWdodCkgOiBoZWlnaHQ7XG4gICAgbGF5b3V0LnNldFdpZHRoID0gaXNIb3Jpem9udGFsO1xuICAgIGxheW91dC5zZXRIZWlnaHQgPSAhaXNIb3Jpem9udGFsO1xuXG4gICAgLy8gTWFrZSBzdXJlIHNsb3RzIGFuZCBzbG90IHNpemUgYXJyYXlzIGFyZSByZXNldC5cbiAgICBsYXlvdXQuc2xvdHMubGVuZ3RoID0gMDtcbiAgICBzbG90U2l6ZXMubGVuZ3RoID0gMDtcblxuICAgIC8vIE5vIG5lZWQgdG8gZ28gZnVydGhlciBpZiBpdGVtcyBkbyBub3QgZXhpc3QuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHJldHVybiBsYXlvdXQ7XG5cbiAgICAvLyBGaW5kIHNsb3RzIGZvciBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX2FkZFNsb3QoaXRlbXNbaV0sIGlzSG9yaXpvbnRhbCwgZmlsbEdhcHMsIHJvdW5kaW5nLCBhbGlnblJpZ2h0IHx8IGFsaWduQm90dG9tKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYWxpZ25tZW50IGlzIHNldCB0byByaWdodCB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgcmVzdWx0cy5cbiAgICBpZiAoYWxpZ25SaWdodCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxheW91dC5zbG90cy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgICBsYXlvdXQuc2xvdHNbaV0gPSBsYXlvdXQud2lkdGggLSAobGF5b3V0LnNsb3RzW2ldICsgc2xvdFNpemVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYWxpZ25tZW50IGlzIHNldCB0byBib3R0b20gd2UgbmVlZCB0byBhZGp1c3QgdGhlIHJlc3VsdHMuXG4gICAgaWYgKGFsaWduQm90dG9tKSB7XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbGF5b3V0LnNsb3RzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgIGxheW91dC5zbG90c1tpXSA9IGxheW91dC5oZWlnaHQgLSAobGF5b3V0LnNsb3RzW2ldICsgc2xvdFNpemVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXNldCBzbG90cyBhcnJheXMgYW5kIHJlY3QgaWQuXG4gICAgc2xvdFNpemVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJlZVNsb3RzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fbmV3U2xvdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9yZWN0SWQgPSAwO1xuXG4gICAgcmV0dXJuIGxheW91dDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHBvc2l0aW9uIGZvciB0aGUgbGF5b3V0IGl0ZW0uIFJldHVybnMgdGhlIGxlZnQgYW5kIHRvcCBwb3NpdGlvblxuICAgKiBvZiB0aGUgaXRlbSBpbiBwaXhlbHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzSG9yaXpvbnRhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbGxHYXBzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcm91bmRpbmdcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fYWRkU2xvdCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgZXBzID0gMC4wMDE7XG4gICAgdmFyIGl0ZW1TbG90ID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0sIGlzSG9yaXpvbnRhbCwgZmlsbEdhcHMsIHJvdW5kaW5nLCB0cmFja1NpemUpIHtcbiAgICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgICB2YXIgZnJlZVNsb3RzID0gdGhpcy5fZnJlZVNsb3RzO1xuICAgICAgdmFyIG5ld1Nsb3RzID0gdGhpcy5fbmV3U2xvdHM7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIHZhciByZWN0SWQ7XG4gICAgICB2YXIgcG90ZW50aWFsU2xvdHM7XG4gICAgICB2YXIgaWdub3JlQ3VycmVudFNsb3RzO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgaWk7XG5cbiAgICAgIC8vIFJlc2V0IG5ldyBzbG90cy5cbiAgICAgIG5ld1Nsb3RzLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIFNldCBpdGVtIHNsb3QgaW5pdGlhbCBkYXRhLlxuICAgICAgaXRlbVNsb3QubGVmdCA9IG51bGw7XG4gICAgICBpdGVtU2xvdC50b3AgPSBudWxsO1xuICAgICAgaXRlbVNsb3Qud2lkdGggPSBpdGVtLl93aWR0aCArIGl0ZW0uX21hcmdpbkxlZnQgKyBpdGVtLl9tYXJnaW5SaWdodDtcbiAgICAgIGl0ZW1TbG90LmhlaWdodCA9IGl0ZW0uX2hlaWdodCArIGl0ZW0uX21hcmdpblRvcCArIGl0ZW0uX21hcmdpbkJvdHRvbTtcblxuICAgICAgLy8gUm91bmQgaXRlbSBzbG90IHdpZHRoIGFuZCBoZWlnaHQgaWYgbmVlZGVkLlxuICAgICAgaWYgKHJvdW5kaW5nKSB7XG4gICAgICAgIGl0ZW1TbG90LndpZHRoID0gTWF0aC5yb3VuZChpdGVtU2xvdC53aWR0aCk7XG4gICAgICAgIGl0ZW1TbG90LmhlaWdodCA9IE1hdGgucm91bmQoaXRlbVNsb3QuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBzbG90IGZvciB0aGUgaXRlbS5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmcmVlU2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVjdElkID0gZnJlZVNsb3RzW2ldO1xuICAgICAgICBpZiAoIXJlY3RJZCkgY29udGludWU7XG4gICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgIGlmIChpdGVtU2xvdC53aWR0aCA8PSByZWN0LndpZHRoICsgZXBzICYmIGl0ZW1TbG90LmhlaWdodCA8PSByZWN0LmhlaWdodCArIGVwcykge1xuICAgICAgICAgIGl0ZW1TbG90LmxlZnQgPSByZWN0LmxlZnQ7XG4gICAgICAgICAgaXRlbVNsb3QudG9wID0gcmVjdC50b3A7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gc2xvdCB3YXMgZm91bmQgZm9yIHRoZSBpdGVtLlxuICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIGl0ZW0gaW4gdG8gdGhlIGJvdHRvbSBsZWZ0ICh2ZXJ0aWNhbCBtb2RlKSBvciB0b3AgcmlnaHRcbiAgICAgICAgLy8gKGhvcml6b250YWwgbW9kZSkgb2YgdGhlIGdyaWQuXG4gICAgICAgIGl0ZW1TbG90LmxlZnQgPSAhaXNIb3Jpem9udGFsID8gMCA6IGxheW91dC53aWR0aDtcbiAgICAgICAgaXRlbVNsb3QudG9wID0gIWlzSG9yaXpvbnRhbCA/IGxheW91dC5oZWlnaHQgOiAwO1xuXG4gICAgICAgIC8vIElmIGdhcHMgZG9uJ3QgbmVlZCBmaWxsaW5nIGRvIG5vdCBhZGQgYW55IGN1cnJlbnQgc2xvdHMgdG8gdGhlIG5ld1xuICAgICAgICAvLyBzbG90cyBhcnJheS5cbiAgICAgICAgaWYgKCFmaWxsR2Fwcykge1xuICAgICAgICAgIGlnbm9yZUN1cnJlbnRTbG90cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSW4gdmVydGljYWwgbW9kZSwgaWYgdGhlIGl0ZW0ncyBib3R0b20gb3ZlcmxhcHMgdGhlIGdyaWQncyBib3R0b20uXG4gICAgICBpZiAoIWlzSG9yaXpvbnRhbCAmJiBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQgPiBsYXlvdXQuaGVpZ2h0KSB7XG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIGxlZnQgZWRnZSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ID4gMCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2godGhpcy5fYWRkUmVjdCgwLCBsYXlvdXQuaGVpZ2h0LCBpdGVtU2xvdC5sZWZ0LCBJbmZpbml0eSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgcmlnaHQgZWRnZSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGggPCBsYXlvdXQud2lkdGgpIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgICAgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoLFxuICAgICAgICAgICAgICBsYXlvdXQuaGVpZ2h0LFxuICAgICAgICAgICAgICBsYXlvdXQud2lkdGggLSBpdGVtU2xvdC5sZWZ0IC0gaXRlbVNsb3Qud2lkdGgsXG4gICAgICAgICAgICAgIEluZmluaXR5XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBncmlkIGhlaWdodC5cbiAgICAgICAgbGF5b3V0LmhlaWdodCA9IGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gaG9yaXpvbnRhbCBtb2RlLCBpZiB0aGUgaXRlbSdzIHJpZ2h0IG92ZXJsYXBzIHRoZSBncmlkJ3MgcmlnaHQgZWRnZS5cbiAgICAgIGlmIChpc0hvcml6b250YWwgJiYgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoID4gbGF5b3V0LndpZHRoKSB7XG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIHRvcCwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC50b3AgPiAwKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaCh0aGlzLl9hZGRSZWN0KGxheW91dC53aWR0aCwgMCwgSW5maW5pdHksIGl0ZW1TbG90LnRvcCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgYm90dG9tLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCA8IGxheW91dC5oZWlnaHQpIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgICAgbGF5b3V0LndpZHRoLFxuICAgICAgICAgICAgICBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQsXG4gICAgICAgICAgICAgIEluZmluaXR5LFxuICAgICAgICAgICAgICBsYXlvdXQuaGVpZ2h0IC0gaXRlbVNsb3QudG9wIC0gaXRlbVNsb3QuaGVpZ2h0XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBncmlkIHdpZHRoLlxuICAgICAgICBsYXlvdXQud2lkdGggPSBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFuIHVwIHRoZSBjdXJyZW50IHNsb3RzIG1ha2luZyBzdXJlIHRoZXJlIGFyZSBubyBvbGQgc2xvdHMgdGhhdFxuICAgICAgLy8gb3ZlcmxhcCB3aXRoIHRoZSBpdGVtLiBJZiBhbiBvbGQgc2xvdCBvdmVybGFwcyB3aXRoIHRoZSBpdGVtLCBzcGxpdCBpdFxuICAgICAgLy8gaW50byBzbWFsbGVyIHNsb3RzIGlmIG5lY2Vzc2FyeS5cbiAgICAgIGZvciAoaSA9IGZpbGxHYXBzID8gMCA6IGlnbm9yZUN1cnJlbnRTbG90cyA/IGZyZWVTbG90cy5sZW5ndGggOiBpOyBpIDwgZnJlZVNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlY3RJZCA9IGZyZWVTbG90c1tpXTtcbiAgICAgICAgaWYgKCFyZWN0SWQpIGNvbnRpbnVlO1xuICAgICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgICBwb3RlbnRpYWxTbG90cyA9IHRoaXMuX3NwbGl0UmVjdChyZWN0LCBpdGVtU2xvdCk7XG4gICAgICAgIGZvciAoaWkgPSAwOyBpaSA8IHBvdGVudGlhbFNsb3RzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIHJlY3RJZCA9IHBvdGVudGlhbFNsb3RzW2lpXTtcbiAgICAgICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgICAgIC8vIExldCdzIG1ha2Ugc3VyZSBoZXJlIHRoYXQgd2UgaGF2ZSBhIGJpZyBlbm91Z2ggc2xvdFxuICAgICAgICAgIC8vICh3aWR0aC9oZWlnaHQgPiAwLjQ5cHgpIGFuZCBhbHNvIGxldCdzIG1ha2Ugc3VyZSB0aGF0IHRoZSBzbG90IGlzXG4gICAgICAgICAgLy8gd2l0aGluIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBncmlkLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlY3Qud2lkdGggPiAwLjQ5ICYmXG4gICAgICAgICAgICByZWN0LmhlaWdodCA+IDAuNDkgJiZcbiAgICAgICAgICAgICgoIWlzSG9yaXpvbnRhbCAmJiByZWN0LnRvcCA8IGxheW91dC5oZWlnaHQpIHx8XG4gICAgICAgICAgICAgIChpc0hvcml6b250YWwgJiYgcmVjdC5sZWZ0IDwgbGF5b3V0LndpZHRoKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5ld1Nsb3RzLnB1c2gocmVjdElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2FuaXRpemUgbmV3IHNsb3RzLlxuICAgICAgaWYgKG5ld1Nsb3RzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9wdXJnZVJlY3RzKG5ld1Nsb3RzKS5zb3J0KFxuICAgICAgICAgIGlzSG9yaXpvbnRhbCA/IHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AgOiB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBsYXlvdXQgd2lkdGgvaGVpZ2h0LlxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICBsYXlvdXQud2lkdGggPSBNYXRoLm1heChsYXlvdXQud2lkdGgsIGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gTWF0aC5tYXgobGF5b3V0LmhlaWdodCwgaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGl0ZW0gc2xvdCBkYXRhIHRvIGxheW91dCBzbG90cyAoYW5kIHN0b3JlIHRoZSBzbG90IHNpemUgZm9yIGxhdGVyXG4gICAgICAvLyB1c2FnZSB0b28gaWYgbmVjZXNzYXJ5KS5cbiAgICAgIGxheW91dC5zbG90cy5wdXNoKGl0ZW1TbG90LmxlZnQsIGl0ZW1TbG90LnRvcCk7XG4gICAgICBpZiAodHJhY2tTaXplKSB0aGlzLl9zbG90U2l6ZXMucHVzaChpdGVtU2xvdC53aWR0aCwgaXRlbVNsb3QuaGVpZ2h0KTtcblxuICAgICAgLy8gRnJlZS9uZXcgc2xvdHMgc3dpdGNoZXJvbyFcbiAgICAgIHRoaXMuX2ZyZWVTbG90cyA9IG5ld1Nsb3RzO1xuICAgICAgdGhpcy5fbmV3U2xvdHMgPSBmcmVlU2xvdHM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQWRkIGEgbmV3IHJlY3RhbmdsZSB0byB0aGUgcmVjdGFuZ2xlIHN0b3JlLiBSZXR1cm5zIHRoZSBpZCBvZiB0aGUgbmV3XG4gICAqIHJlY3RhbmdsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlZnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvcFxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgKiBAcmV0dXJucyB7UmVjdElkfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fYWRkUmVjdCA9IGZ1bmN0aW9uKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICAgIHZhciByZWN0SWQgPSArK3RoaXMuX3JlY3RJZDtcbiAgICB2YXIgcmVjdFN0b3JlID0gdGhpcy5fcmVjdFN0b3JlO1xuXG4gICAgcmVjdFN0b3JlW3JlY3RJZF0gPSBsZWZ0IHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IHRvcCB8fCAwO1xuICAgIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSB3aWR0aCB8fCAwO1xuICAgIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSBoZWlnaHQgfHwgMDtcblxuICAgIHJldHVybiByZWN0SWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCByZWN0YW5nbGUgZGF0YSBmcm9tIHRoZSByZWN0YW5nbGUgc3RvcmUgYnkgaWQuIE9wdGlvbmFsbHkgeW91IGNhblxuICAgKiBwcm92aWRlIGEgdGFyZ2V0IG9iamVjdCB3aGVyZSB0aGUgcmVjdGFuZ2xlIGRhdGEgd2lsbCBiZSB3cml0dGVuIGluLiBCeVxuICAgKiBkZWZhdWx0IGFuIGludGVybmFsIG9iamVjdCBpcyByZXVzZWQgYXMgYSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gaWRcbiAgICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRdXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9nZXRSZWN0ID0gZnVuY3Rpb24oaWQsIHRhcmdldCkge1xuICAgIHZhciByZWN0SXRlbSA9IHRhcmdldCA/IHRhcmdldCA6IHRoaXMuX3JlY3RJdGVtO1xuICAgIHZhciByZWN0U3RvcmUgPSB0aGlzLl9yZWN0U3RvcmU7XG5cbiAgICByZWN0SXRlbS5sZWZ0ID0gcmVjdFN0b3JlW2lkXSB8fCAwO1xuICAgIHJlY3RJdGVtLnRvcCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuICAgIHJlY3RJdGVtLndpZHRoID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0uaGVpZ2h0ID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG5cbiAgICByZXR1cm4gcmVjdEl0ZW07XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1bmNoIGEgaG9sZSBpbnRvIGEgcmVjdGFuZ2xlIGFuZCBzcGxpdCB0aGUgcmVtYWluaW5nIGFyZWEgaW50byBzbWFsbGVyXG4gICAqIHJlY3RhbmdsZXMgKDQgYXQgbWF4KS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IHJlY3RcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGhvbGVcbiAgICogQHJldHVybnMge1JlY3RJZFtdfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fc3BsaXRSZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3QsIGhvbGUpIHtcbiAgICAgIC8vIFJlc2V0IG9sZCByZXN1bHRzLlxuICAgICAgcmVzdWx0cy5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBJZiB0aGUgcmVjdCBkb2VzIG5vdCBvdmVybGFwIHdpdGggdGhlIGhvbGUgYWRkIHJlY3QgdG8gdGhlIHJldHVybiBkYXRhXG4gICAgICAvLyBhcyBpcy5cbiAgICAgIGlmICghdGhpcy5fZG9SZWN0c092ZXJsYXAocmVjdCwgaG9sZSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG5cbiAgICAgIC8vIExlZnQgc3BsaXQuXG4gICAgICBpZiAocmVjdC5sZWZ0IDwgaG9sZS5sZWZ0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9hZGRSZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIGhvbGUubGVmdCAtIHJlY3QubGVmdCwgcmVjdC5oZWlnaHQpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmlnaHQgc3BsaXQuXG4gICAgICBpZiAocmVjdC5sZWZ0ICsgcmVjdC53aWR0aCA+IGhvbGUubGVmdCArIGhvbGUud2lkdGgpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICBob2xlLmxlZnQgKyBob2xlLndpZHRoLFxuICAgICAgICAgICAgcmVjdC50b3AsXG4gICAgICAgICAgICByZWN0LmxlZnQgKyByZWN0LndpZHRoIC0gKGhvbGUubGVmdCArIGhvbGUud2lkdGgpLFxuICAgICAgICAgICAgcmVjdC5oZWlnaHRcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvcCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LnRvcCA8IGhvbGUudG9wKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9hZGRSZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIHJlY3Qud2lkdGgsIGhvbGUudG9wIC0gcmVjdC50b3ApKTtcbiAgICAgIH1cblxuICAgICAgLy8gQm90dG9tIHNwbGl0LlxuICAgICAgaWYgKHJlY3QudG9wICsgcmVjdC5oZWlnaHQgPiBob2xlLnRvcCArIGhvbGUuaGVpZ2h0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChcbiAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgcmVjdC5sZWZ0LFxuICAgICAgICAgICAgaG9sZS50b3AgKyBob2xlLmhlaWdodCxcbiAgICAgICAgICAgIHJlY3Qud2lkdGgsXG4gICAgICAgICAgICByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC0gKGhvbGUudG9wICsgaG9sZS5oZWlnaHQpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcmVjdGFuZ2xlcyBvdmVybGFwLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2RvUmVjdHNPdmVybGFwID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiAhKFxuICAgICAgYS5sZWZ0ICsgYS53aWR0aCA8PSBiLmxlZnQgfHxcbiAgICAgIGIubGVmdCArIGIud2lkdGggPD0gYS5sZWZ0IHx8XG4gICAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wIHx8XG4gICAgICBiLnRvcCArIGIuaGVpZ2h0IDw9IGEudG9wXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSByZWN0YW5nbGUgaXMgZnVsbHkgd2l0aGluIGFub3RoZXIgcmVjdGFuZ2xlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gYlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2lzUmVjdFdpdGhpblJlY3QgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubGVmdCA+PSBiLmxlZnQgJiZcbiAgICAgIGEudG9wID49IGIudG9wICYmXG4gICAgICBhLmxlZnQgKyBhLndpZHRoIDw9IGIubGVmdCArIGIud2lkdGggJiZcbiAgICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgKyBiLmhlaWdodFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgb2YgcmVjdGFuZ2xlIGlkcyBhbmQgcmVzZXRzIGFsbCB0aGF0IGFyZSBmdWxseVxuICAgKiB3aXRoaW4gYW5vdGhlciByZWN0YW5nbGUgaW4gdGhlIGFycmF5LiBSZXNldHRpbmcgaW4gdGhpcyBjYXNlIG1lYW5zIHRoYXRcbiAgICogdGhlIHJlY3RhbmdsZSBpZCB2YWx1ZSBpcyByZXBsYWNlZCB3aXRoIHplcm8uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkW119IHJlY3RJZHNcbiAgICogQHJldHVybnMge1JlY3RJZFtdfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fcHVyZ2VSZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjdEEgPSB7fTtcbiAgICB2YXIgcmVjdEIgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdElkcykge1xuICAgICAgdmFyIGkgPSByZWN0SWRzLmxlbmd0aDtcbiAgICAgIHZhciBpaTtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpaSA9IHJlY3RJZHMubGVuZ3RoO1xuICAgICAgICBpZiAoIXJlY3RJZHNbaV0pIGNvbnRpbnVlO1xuICAgICAgICB0aGlzLl9nZXRSZWN0KHJlY3RJZHNbaV0sIHJlY3RBKTtcbiAgICAgICAgd2hpbGUgKGlpLS0pIHtcbiAgICAgICAgICBpZiAoIXJlY3RJZHNbaWldIHx8IGkgPT09IGlpKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodGhpcy5faXNSZWN0V2l0aGluUmVjdChyZWN0QSwgdGhpcy5fZ2V0UmVjdChyZWN0SWRzW2lpXSwgcmVjdEIpKSkge1xuICAgICAgICAgICAgcmVjdElkc1tpXSA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlY3RJZHM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogU29ydCByZWN0YW5nbGVzIHdpdGggdG9wLWxlZnQgZ3Jhdml0eS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWR9IGFJZFxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYklkXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9zb3J0UmVjdHNUb3BMZWZ0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWN0QSA9IHt9O1xuICAgIHZhciByZWN0QiA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihhSWQsIGJJZCkge1xuICAgICAgdGhpcy5fZ2V0UmVjdChhSWQsIHJlY3RBKTtcbiAgICAgIHRoaXMuX2dldFJlY3QoYklkLCByZWN0Qik7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIHJldHVybiByZWN0QS50b3AgPCByZWN0Qi50b3AgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wID4gcmVjdEIudG9wID8gMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA8IHJlY3RCLmxlZnQgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA+IHJlY3RCLmxlZnQgPyAxIDogMDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBTb3J0IHJlY3RhbmdsZXMgd2l0aCBsZWZ0LXRvcCBncmF2aXR5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYUlkXG4gICAqIEBwYXJhbSB7UmVjdElkfSBiSWRcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3NvcnRSZWN0c0xlZnRUb3AgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY3RBID0ge307XG4gICAgdmFyIHJlY3RCID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFJZCwgYklkKSB7XG4gICAgICB0aGlzLl9nZXRSZWN0KGFJZCwgcmVjdEEpO1xuICAgICAgdGhpcy5fZ2V0UmVjdChiSWQsIHJlY3RCKTtcbiAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgcmV0dXJuIHJlY3RBLmxlZnQgPCByZWN0Qi5sZWZ0ID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLmxlZnQgPiByZWN0Qi5sZWZ0ID8gMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wIDwgcmVjdEIudG9wID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLnRvcCA+IHJlY3RCLnRvcCA/IDEgOiAwO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgdmFyIGh0bWxDb2xsZWN0aW9uVHlwZSA9ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXSc7XG4gIHZhciBub2RlTGlzdFR5cGUgPSAnW29iamVjdCBOb2RlTGlzdF0nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbm9kZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNOb2RlTGlzdCh2YWwpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpO1xuICAgIHJldHVybiB0eXBlID09PSBodG1sQ29sbGVjdGlvblR5cGUgfHwgdHlwZSA9PT0gbm9kZUxpc3RUeXBlO1xuICB9XG5cbiAgdmFyIG9iamVjdFR5cGUgPSAnb2JqZWN0JztcbiAgdmFyIG9iamVjdFRvU3RyaW5nVHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IG9iamVjdFR5cGUgJiYgdG9TdHJpbmcuY2FsbCh2YWwpID09PSBvYmplY3RUb1N0cmluZ1R5cGU7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSB2YWx1ZSB0byBhbiBhcnJheSBvciBjbG9uZXMgYW4gYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdGFyZ2V0XG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGlzTm9kZUxpc3QodGFyZ2V0KSA/IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCkgOiBBcnJheS5wcm90b3R5cGUuY29uY2F0KHRhcmdldCk7XG4gIH1cblxuICB2YXIgcGFja2VyID0gbmV3IFBhY2tlcigpO1xuICB2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbiAgdmFyIG51bWJlclR5cGUkMSA9ICdudW1iZXInO1xuICB2YXIgc3RyaW5nVHlwZSA9ICdzdHJpbmcnO1xuICB2YXIgaW5zdGFudExheW91dCA9ICdpbnN0YW50JztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U3RyaW5nKX0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7PyhIVE1MRWxlbWVudFtdfE5vZGVMaXN0fFN0cmluZyl9IFtvcHRpb25zLml0ZW1zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2hvd0R1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNob3dFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52aXNpYmxlU3R5bGVzXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaGlkZUR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmhpZGVFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5oaWRkZW5TdHlsZXNdXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IFtvcHRpb25zLmxheW91dF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuZmlsbEdhcHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0Lmhvcml6b250YWw9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LmFsaWduUmlnaHQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LmFsaWduQm90dG9tPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5yb3VuZGluZz10cnVlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufE51bWJlcil9IFtvcHRpb25zLmxheW91dE9uUmVzaXplPTEwMF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXRPbkluaXQ9dHJ1ZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmxheW91dER1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmxheW91dEVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHs/T2JqZWN0fSBbb3B0aW9ucy5zb3J0RGF0YT1udWxsXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRyYWdFbmFibGVkPWZhbHNlXVxuICAgKiBAcGFyYW0gez9IdG1sRWxlbWVudH0gW29wdGlvbnMuZHJhZ0NvbnRhaW5lcj1udWxsXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlLmRpc3RhbmNlPTBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuZGVsYXk9MF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxTdHJpbmcpfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuaGFuZGxlPWZhbHNlXVxuICAgKiBAcGFyYW0gez9TdHJpbmd9IFtvcHRpb25zLmRyYWdBeGlzXVxuICAgKiBAcGFyYW0geyhCb29sZWFufEZ1bmN0aW9uKX0gW29wdGlvbnMuZHJhZ1NvcnQ9dHJ1ZV1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljcy5zb3J0SW50ZXJ2YWw9MTAwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLm1pbkRyYWdEaXN0YW5jZT0xMF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljcy5taW5Cb3VuY2VCYWNrQW5nbGU9MV1cbiAgICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gW29wdGlvbnMuZHJhZ1NvcnRQcmVkaWNhdGVdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZS50aHJlc2hvbGQ9NTBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZS5hY3Rpb249XCJtb3ZlXCJdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnUmVsZWFzZUR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdSZWxlYXNlRWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ0Nzc1Byb3BzXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5lbmFibGVkPWZhbHNlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmR1cmF0aW9uPTMwMF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5lYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuY3JlYXRlRWxlbWVudD1udWxsXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLm9uQ3JlYXRlPW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIub25SZW1vdmU9bnVsbF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbnRhaW5lckNsYXNzPVwibXV1cmlcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1DbGFzcz1cIm11dXJpLWl0ZW1cIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1WaXNpYmxlQ2xhc3M9XCJtdXVyaS1pdGVtLXZpc2libGVcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1IaWRkZW5DbGFzcz1cIm11dXJpLWl0ZW0taGlkZGVuXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtUG9zaXRpb25pbmdDbGFzcz1cIm11dXJpLWl0ZW0tcG9zaXRpb25pbmdcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1EcmFnZ2luZ0NsYXNzPVwibXV1cmktaXRlbS1kcmFnZ2luZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVJlbGVhc2luZ0NsYXNzPVwibXV1cmktaXRlbS1yZWxlYXNpbmdcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1QbGFjZWhvbGRlckNsYXNzPVwibXV1cmktaXRlbS1wbGFjZWhvbGRlclwiXVxuICAgKi9cblxuICBmdW5jdGlvbiBHcmlkKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW5zdCA9IHRoaXM7XG4gICAgdmFyIHNldHRpbmdzO1xuICAgIHZhciBpdGVtcztcbiAgICB2YXIgbGF5b3V0T25SZXNpemU7XG5cbiAgICAvLyBBbGxvdyBwYXNzaW5nIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nLiBTdG9yZSBlbGVtZW50IGZvciBpbnN0YW5jZS5cbiAgICBlbGVtZW50ID0gdGhpcy5fZWxlbWVudCA9XG4gICAgICB0eXBlb2YgZWxlbWVudCA9PT0gc3RyaW5nVHlwZSA/IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBjb250YWluZXIgZWxlbWVudCBpcyBub3QgYm9keSBlbGVtZW50IG9yIGRvZXMgbm90XG4gICAgLy8gZXhpc3Qgd2l0aGluIHRoZSBib2R5IGVsZW1lbnQuXG4gICAgdmFyIGlzRWxlbWVudEluRG9tID0gZWxlbWVudC5nZXRSb290Tm9kZVxuICAgICAgPyBlbGVtZW50LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkgPT09IGRvY3VtZW50XG4gICAgICA6IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsZW1lbnQpO1xuICAgIGlmICghaXNFbGVtZW50SW5Eb20gfHwgZWxlbWVudCA9PT0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgZWxlbWVudCBtdXN0IGJlIGFuIGV4aXN0aW5nIERPTSBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIHNldHRpbmdzIGJ5IG1lcmdpbmcgdGhlIG9wdGlvbnMgd2l0aCBkZWZhdWx0IG9wdGlvbnMuXG4gICAgc2V0dGluZ3MgPSB0aGlzLl9zZXR0aW5ncyA9IG1lcmdlU2V0dGluZ3MoR3JpZC5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAvLyBTYW5pdGl6ZSBkcmFnU29ydCBzZXR0aW5nLlxuICAgIGlmICghaXNGdW5jdGlvbihzZXR0aW5ncy5kcmFnU29ydCkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdTb3J0ID0gISFzZXR0aW5ncy5kcmFnU29ydDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2UgaWQgYW5kIHN0b3JlIGl0IHRvIHRoZSBncmlkIGluc3RhbmNlcyBjb2xsZWN0aW9uLlxuICAgIHRoaXMuX2lkID0gY3JlYXRlVWlkKCk7XG4gICAgZ3JpZEluc3RhbmNlc1t0aGlzLl9pZF0gPSBpbnN0O1xuXG4gICAgLy8gRGVzdHJveWVkIGZsYWcuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFRoZSBsYXlvdXQgb2JqZWN0IChtdXRhdGVkIG9uIGV2ZXJ5IGxheW91dCkuXG4gICAgdGhpcy5fbGF5b3V0ID0ge1xuICAgICAgaWQ6IDAsXG4gICAgICBpdGVtczogW10sXG4gICAgICBzbG90czogW10sXG4gICAgICBzZXRXaWR0aDogZmFsc2UsXG4gICAgICBzZXRIZWlnaHQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIHByaXZhdGUgRW1pdHRlciBpbnN0YW5jZS5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuICAgIC8vIEFkZCBjb250YWluZXIgZWxlbWVudCdzIGNsYXNzIG5hbWUuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuY29udGFpbmVyQ2xhc3MpO1xuXG4gICAgLy8gQ3JlYXRlIGluaXRpYWwgaXRlbXMuXG4gICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICBpdGVtcyA9IHNldHRpbmdzLml0ZW1zO1xuICAgIGlmICh0eXBlb2YgaXRlbXMgPT09IHN0cmluZ1R5cGUpIHtcbiAgICAgIHRvQXJyYXkoZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihpdGVtRWxlbWVudCkge1xuICAgICAgICBpZiAoaXRlbXMgPT09ICcqJyB8fCBlbGVtZW50TWF0Y2hlcyhpdGVtRWxlbWVudCwgaXRlbXMpKSB7XG4gICAgICAgICAgaW5zdC5faXRlbXMucHVzaChuZXcgSXRlbShpbnN0LCBpdGVtRWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpIHx8IGlzTm9kZUxpc3QoaXRlbXMpKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IHRvQXJyYXkoaXRlbXMpLm1hcChmdW5jdGlvbihpdGVtRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IEl0ZW0oaW5zdCwgaXRlbUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGF5b3V0T25SZXNpemUgb3B0aW9uIGlzIGEgdmFsaWQgbnVtYmVyIHNhbml0aXplIGl0IGFuZCBiaW5kIHRoZSByZXNpemVcbiAgICAvLyBoYW5kbGVyLlxuICAgIGxheW91dE9uUmVzaXplID0gc2V0dGluZ3MubGF5b3V0T25SZXNpemU7XG4gICAgaWYgKHR5cGVvZiBsYXlvdXRPblJlc2l6ZSAhPT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICBsYXlvdXRPblJlc2l6ZSA9IGxheW91dE9uUmVzaXplID09PSB0cnVlID8gMCA6IC0xO1xuICAgIH1cbiAgICBpZiAobGF5b3V0T25SZXNpemUgPj0gMCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICAoaW5zdC5fcmVzaXplSGFuZGxlciA9IGRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGluc3QucmVmcmVzaEl0ZW1zKCkubGF5b3V0KCk7XG4gICAgICAgIH0sIGxheW91dE9uUmVzaXplKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTGF5b3V0IG9uIGluaXQgaWYgbmVjZXNzYXJ5LlxuICAgIGlmIChzZXR0aW5ncy5sYXlvdXRPbkluaXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvcGVydGllc1xuICAgKiAqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQHNlZSBJdGVtXG4gICAqL1xuICBHcmlkLkl0ZW0gPSBJdGVtO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1MYXlvdXRcbiAgICovXG4gIEdyaWQuSXRlbUxheW91dCA9IEl0ZW1MYXlvdXQ7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbVZpc2liaWxpdHlcbiAgICovXG4gIEdyaWQuSXRlbVZpc2liaWxpdHkgPSBJdGVtVmlzaWJpbGl0eTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtTWlncmF0ZVxuICAgKi9cbiAgR3JpZC5JdGVtTWlncmF0ZSA9IEl0ZW1NaWdyYXRlO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1BbmltYXRlXG4gICAqL1xuICBHcmlkLkl0ZW1BbmltYXRlID0gSXRlbUFuaW1hdGU7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbURyYWdcbiAgICovXG4gIEdyaWQuSXRlbURyYWcgPSBJdGVtRHJhZztcblxuICAvKipcbiAgICogQHNlZSBJdGVtUmVsZWFzZVxuICAgKi9cbiAgR3JpZC5JdGVtUmVsZWFzZSA9IEl0ZW1SZWxlYXNlO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1EcmFnUGxhY2Vob2xkZXJcbiAgICovXG4gIEdyaWQuSXRlbURyYWdQbGFjZWhvbGRlciA9IEl0ZW1EcmFnUGxhY2Vob2xkZXI7XG5cbiAgLyoqXG4gICAqIEBzZWUgRW1pdHRlclxuICAgKi9cbiAgR3JpZC5FbWl0dGVyID0gRW1pdHRlcjtcblxuICAvKipcbiAgICogQHNlZSBEcmFnZ2VyXG4gICAqL1xuICBHcmlkLkRyYWdnZXIgPSBEcmFnZ2VyO1xuXG4gIC8qKlxuICAgKiBAc2VlIFBhY2tlclxuICAgKi9cbiAgR3JpZC5QYWNrZXIgPSBQYWNrZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9ucyBmb3IgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZFxuICAgKi9cbiAgR3JpZC5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyBJdGVtIGVsZW1lbnRzXG4gICAgaXRlbXM6ICcqJyxcblxuICAgIC8vIERlZmF1bHQgc2hvdyBhbmltYXRpb25cbiAgICBzaG93RHVyYXRpb246IDMwMCxcbiAgICBzaG93RWFzaW5nOiAnZWFzZScsXG5cbiAgICAvLyBEZWZhdWx0IGhpZGUgYW5pbWF0aW9uXG4gICAgaGlkZUR1cmF0aW9uOiAzMDAsXG4gICAgaGlkZUVhc2luZzogJ2Vhc2UnLFxuXG4gICAgLy8gSXRlbSdzIHZpc2libGUvaGlkZGVuIHN0YXRlIHN0eWxlc1xuICAgIHZpc2libGVTdHlsZXM6IHtcbiAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgIH0sXG4gICAgaGlkZGVuU3R5bGVzOiB7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJ1xuICAgIH0sXG5cbiAgICAvLyBMYXlvdXRcbiAgICBsYXlvdXQ6IHtcbiAgICAgIGZpbGxHYXBzOiBmYWxzZSxcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgYWxpZ25SaWdodDogZmFsc2UsXG4gICAgICBhbGlnbkJvdHRvbTogZmFsc2UsXG4gICAgICByb3VuZGluZzogdHJ1ZVxuICAgIH0sXG4gICAgbGF5b3V0T25SZXNpemU6IDEwMCxcbiAgICBsYXlvdXRPbkluaXQ6IHRydWUsXG4gICAgbGF5b3V0RHVyYXRpb246IDMwMCxcbiAgICBsYXlvdXRFYXNpbmc6ICdlYXNlJyxcblxuICAgIC8vIFNvcnRpbmdcbiAgICBzb3J0RGF0YTogbnVsbCxcblxuICAgIC8vIERyYWcgJiBEcm9wXG4gICAgZHJhZ0VuYWJsZWQ6IGZhbHNlLFxuICAgIGRyYWdDb250YWluZXI6IG51bGwsXG4gICAgZHJhZ1N0YXJ0UHJlZGljYXRlOiB7XG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgaGFuZGxlOiBmYWxzZVxuICAgIH0sXG4gICAgZHJhZ0F4aXM6IG51bGwsXG4gICAgZHJhZ1NvcnQ6IHRydWUsXG4gICAgZHJhZ1NvcnRIZXVyaXN0aWNzOiB7XG4gICAgICBzb3J0SW50ZXJ2YWw6IDEwMCxcbiAgICAgIG1pbkRyYWdEaXN0YW5jZTogMTAsXG4gICAgICBtaW5Cb3VuY2VCYWNrQW5nbGU6IDFcbiAgICB9LFxuICAgIGRyYWdTb3J0UHJlZGljYXRlOiB7XG4gICAgICB0aHJlc2hvbGQ6IDUwLFxuICAgICAgYWN0aW9uOiBhY3Rpb25Nb3ZlXG4gICAgfSxcbiAgICBkcmFnUmVsZWFzZUR1cmF0aW9uOiAzMDAsXG4gICAgZHJhZ1JlbGVhc2VFYXNpbmc6ICdlYXNlJyxcbiAgICBkcmFnQ3NzUHJvcHM6IHtcbiAgICAgIHRvdWNoQWN0aW9uOiAnbm9uZScsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB1c2VyRHJhZzogJ25vbmUnLFxuICAgICAgdGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgIHRvdWNoQ2FsbG91dDogJ25vbmUnLFxuICAgICAgY29udGVudFpvb21pbmc6ICdub25lJ1xuICAgIH0sXG4gICAgZHJhZ1BsYWNlaG9sZGVyOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBlYXNpbmc6ICdlYXNlJyxcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IG51bGwsXG4gICAgICBvbkNyZWF0ZTogbnVsbCxcbiAgICAgIG9uUmVtb3ZlOiBudWxsXG4gICAgfSxcblxuICAgIC8vIENsYXNzbmFtZXNcbiAgICBjb250YWluZXJDbGFzczogJ211dXJpJyxcbiAgICBpdGVtQ2xhc3M6ICdtdXVyaS1pdGVtJyxcbiAgICBpdGVtVmlzaWJsZUNsYXNzOiAnbXV1cmktaXRlbS1zaG93bicsXG4gICAgaXRlbUhpZGRlbkNsYXNzOiAnbXV1cmktaXRlbS1oaWRkZW4nLFxuICAgIGl0ZW1Qb3NpdGlvbmluZ0NsYXNzOiAnbXV1cmktaXRlbS1wb3NpdGlvbmluZycsXG4gICAgaXRlbURyYWdnaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLWRyYWdnaW5nJyxcbiAgICBpdGVtUmVsZWFzaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLXJlbGVhc2luZycsXG4gICAgaXRlbVBsYWNlaG9sZGVyQ2xhc3M6ICdtdXVyaS1pdGVtLXBsYWNlaG9sZGVyJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBCaW5kIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaXRlbXMuIE9wdGlvbmFsbHkgeW91IGNhbiBwcm92aWRlIHNwZWNpZmljIHRhcmdldHMgKGVsZW1lbnRzIGFuZFxuICAgKiBpbmRpY2VzKS4gTm90ZSB0aGF0IHRoZSByZXR1cm5lZCBhcnJheSBpcyBub3QgdGhlIHNhbWUgb2JqZWN0IHVzZWQgYnkgdGhlXG4gICAqIGluc3RhbmNlIHNvIG1vZGlmeWluZyBpdCB3aWxsIG5vdCBhZmZlY3QgaW5zdGFuY2UncyBpdGVtcy4gQWxsIGl0ZW1zIHRoYXRcbiAgICogYXJlIG5vdCBmb3VuZCBhcmUgb21pdHRlZCBmcm9tIHRoZSByZXR1cm5lZCBhcnJheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IFt0YXJnZXRzXVxuICAgKiBAcmV0dXJucyB7SXRlbVtdfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZ2V0SXRlbXMgPSBmdW5jdGlvbih0YXJnZXRzKSB7XG4gICAgLy8gUmV0dXJuIGFsbCBpdGVtcyBpbW1lZGlhdGVseSBpZiBubyB0YXJnZXRzIHdlcmUgcHJvdmlkZWQgb3IgaWYgdGhlXG4gICAgLy8gaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAoIXRhcmdldHMgJiYgdGFyZ2V0cyAhPT0gMCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gW107XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdG9BcnJheSh0YXJnZXRzKTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHRhcmdldCBpdGVtcyBhcmUgZGVmaW5lZCByZXR1cm4gZmlsdGVyZWQgcmVzdWx0cy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSB0aGlzLl9nZXRJdGVtKHRhcmdldEl0ZW1zW2ldKTtcbiAgICAgIGl0ZW0gJiYgcmV0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjYWNoZWQgZGltZW5zaW9ucyBvZiB0aGUgaW5zdGFuY2UncyBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IFtpdGVtc11cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5yZWZyZXNoSXRlbXMgPSBmdW5jdGlvbihpdGVtcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0cyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldHNbaV0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgc29ydCBkYXRhIG9mIHRoZSBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW2l0ZW1zXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlZnJlc2hTb3J0RGF0YSA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXRJdGVtc1tpXS5fcmVmcmVzaFNvcnREYXRhKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplIHRoZSBpdGVtIGVsZW1lbnRzIHRvIG1hdGNoIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIERPTS5cbiAgICogVGhpcyBjb21lcyBoYW5keSBpZiB5b3UgbmVlZCB0byBrZWVwIHRoZSBET00gc3RydWN0dXJlIG1hdGNoZWQgd2l0aCB0aGVcbiAgICogb3JkZXIgb2YgdGhlIGl0ZW1zLiBOb3RlIHRoYXQgaWYgYW4gaXRlbSdzIGVsZW1lbnQgaXMgbm90IGN1cnJlbnRseSBhIGNoaWxkXG4gICAqIG9mIHRoZSBjb250YWluZXIgZWxlbWVudCAoaWYgaXQgaXMgZHJhZ2dlZCBmb3IgZXhhbXBsZSkgaXQgaXMgaWdub3JlZCBhbmRcbiAgICogbGVmdCB1bnRvdWNoZWQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc3luY2hyb25pemUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIGZyYWdtZW50O1xuICAgIHZhciBlbGVtZW50O1xuICAgIHZhciBpO1xuXG4gICAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyBpbiBvcmRlciB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnQgPSBpdGVtc1tpXS5fZWxlbWVudDtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSA9PT0gY29udGFpbmVyKSB7XG4gICAgICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudCB8fCB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFnbWVudCkgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHN5bmNocm9uaXplIGV2ZW50LlxuICAgIHRoaXMuX2VtaXQoZXZlbnRTeW5jaHJvbml6ZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCBhcHBseSBpdGVtIHBvc2l0aW9ucy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtMYXlvdXRDYWxsYmFja30gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpbnN0ID0gdGhpcztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX3VwZGF0ZUxheW91dCgpO1xuICAgIHZhciBsYXlvdXRJZCA9IGxheW91dC5pZDtcbiAgICB2YXIgaXRlbXNMZW5ndGggPSBsYXlvdXQuaXRlbXMubGVuZ3RoO1xuICAgIHZhciBjb3VudGVyID0gaXRlbXNMZW5ndGg7XG4gICAgdmFyIGlzQm9yZGVyQm94O1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gVGhlIGZpbmlzaCBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBjaGVja2luZyBpZiBhbGwgdGhlIGl0ZW1zXG4gICAgLy8gaGF2ZSBsYWlkIG91dCB5ZXQuIEFmdGVyIGFsbCBpdGVtcyBoYXZlIGZpbmlzaGVkIHRoZWlyIGFuaW1hdGlvbnMgY2FsbFxuICAgIC8vIGNhbGxiYWNrIGFuZCBlbWl0IGxheW91dEVuZCBldmVudC4gT25seSBlbWl0IGxheW91dEVuZCBldmVudCBpZiB0aGVyZVxuICAgIC8vIGhhc24ndCBiZWVuIGEgbmV3IGxheW91dCBjYWxsIGR1cmluZyB0aGlzIGxheW91dC5cbiAgICBmdW5jdGlvbiB0cnlGaW5pc2goKSB7XG4gICAgICBpZiAoLS1jb3VudGVyID4gMCkgcmV0dXJuO1xuXG4gICAgICB2YXIgaGFzTGF5b3V0Q2hhbmdlZCA9IGluc3QuX2xheW91dC5pZCAhPT0gbGF5b3V0SWQ7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKGluc3RhbnQpID8gaW5zdGFudCA6IG9uRmluaXNoO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgY2FsbGJhY2soaGFzTGF5b3V0Q2hhbmdlZCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXNMYXlvdXRDaGFuZ2VkICYmIGluc3QuX2hhc0xpc3RlbmVycyhldmVudExheW91dEVuZCkpIHtcbiAgICAgICAgaW5zdC5fZW1pdChldmVudExheW91dEVuZCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBncmlkJ3Mgd2lkdGggb3IgaGVpZ2h0IHdhcyBtb2RpZmllZCwgd2UgbmVlZCB0byB1cGRhdGUgaXQncyBjYWNoZWRcbiAgICAvLyBkaW1lbnNpb25zLiBBbHNvIGtlZXAgaW4gbWluZCB0aGF0IGdyaWQncyBjYWNoZWQgd2lkdGgvaGVpZ2h0IHNob3VsZFxuICAgIC8vIGFsd2F5cyBlcXVhbCB0byB3aGF0IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgd291bGQgcmV0dXJuLCBzb1xuICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIGFkZCB0aGUgZ3JpZCBlbGVtZW50J3MgYm9yZGVycyB0byB0aGUgZGltZW5zaW9ucyBpZlxuICAgIC8vIGl0J3MgYm94LXNpemluZyBpcyBib3JkZXItYm94LiBOb3RlIHRoYXQgd2Ugc3VwcG9ydCBwcm92aWRpbmcgdGhlXG4gICAgLy8gZGltZW5zaW9ucyBhcyBhIHN0cmluZyBoZXJlIHRvbyBzbyB0aGF0IG9uZSBjYW4gZGVmaW5lIHRoZSB1bml0IG9mIHRoZVxuICAgIC8vIGRpbWVuc2lvbnMsIGluIHdoaWNoIGNhc2Ugd2UgZG9uJ3QgZG8gdGhlIGJvcmRlci1ib3ggY2hlY2suXG4gICAgaWYgKFxuICAgICAgKGxheW91dC5zZXRIZWlnaHQgJiYgdHlwZW9mIGxheW91dC5oZWlnaHQgPT09IG51bWJlclR5cGUkMSkgfHxcbiAgICAgIChsYXlvdXQuc2V0V2lkdGggJiYgdHlwZW9mIGxheW91dC53aWR0aCA9PT0gbnVtYmVyVHlwZSQxKVxuICAgICkge1xuICAgICAgaXNCb3JkZXJCb3ggPSBnZXRTdHlsZShlbGVtZW50LCAnYm94LXNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG4gICAgfVxuICAgIGlmIChsYXlvdXQuc2V0SGVpZ2h0KSB7XG4gICAgICBpZiAodHlwZW9mIGxheW91dC5oZWlnaHQgPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9XG4gICAgICAgICAgKGlzQm9yZGVyQm94ID8gbGF5b3V0LmhlaWdodCArIHRoaXMuX2JvcmRlclRvcCArIHRoaXMuX2JvcmRlckJvdHRvbSA6IGxheW91dC5oZWlnaHQpICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbGF5b3V0LmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxheW91dC5zZXRXaWR0aCkge1xuICAgICAgaWYgKHR5cGVvZiBsYXlvdXQud2lkdGggPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID1cbiAgICAgICAgICAoaXNCb3JkZXJCb3ggPyBsYXlvdXQud2lkdGggKyB0aGlzLl9ib3JkZXJMZWZ0ICsgdGhpcy5fYm9yZGVyUmlnaHQgOiBsYXlvdXQud2lkdGgpICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBsYXlvdXQud2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsYXlvdXRTdGFydCBldmVudC4gTm90ZSB0aGF0IHRoaXMgaXMgaW50ZW50aW9uYWxseSBlbWl0dGVkIGFmdGVyIHRoZVxuICAgIC8vIGNvbnRhaW5lciBlbGVtZW50J3MgZGltZW5zaW9ucyBhcmUgc2V0LCBiZWNhdXNlIG90aGVyd2lzZSB0aGVyZSB3b3VsZCBiZVxuICAgIC8vIG5vIGhvb2sgZm9yIHJlYWN0aW5nIHRvIGNvbnRhaW5lciBkaW1lbnNpb24gY2hhbmdlcy5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50TGF5b3V0U3RhcnQpKSB7XG4gICAgICB0aGlzLl9lbWl0KGV2ZW50TGF5b3V0U3RhcnQsIGxheW91dC5pdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGl0ZW1zIGxldCdzIGZpbmlzaCBxdWlja2x5LlxuICAgIGlmICghaXRlbXNMZW5ndGgpIHtcbiAgICAgIHRyeUZpbmlzaCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGl0ZW1zIGxldCdzIHBvc2l0aW9uIHRoZW0uXG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zTGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBsYXlvdXQuaXRlbXNbaV07XG4gICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlO1xuXG4gICAgICAvLyBVcGRhdGUgaXRlbSdzIHBvc2l0aW9uLlxuICAgICAgaXRlbS5fbGVmdCA9IGxheW91dC5zbG90c1tpICogMl07XG4gICAgICBpdGVtLl90b3AgPSBsYXlvdXQuc2xvdHNbaSAqIDIgKyAxXTtcblxuICAgICAgLy8gTGF5b3V0IGl0ZW0gaWYgaXQgaXMgbm90IGRyYWdnZWQuXG4gICAgICBpdGVtLmlzRHJhZ2dpbmcoKSA/IHRyeUZpbmlzaCgpIDogaXRlbS5fbGF5b3V0LnN0YXJ0KGluc3RhbnQgPT09IHRydWUsIHRyeUZpbmlzaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgaXRlbXMgYnkgcHJvdmlkaW5nIHRoZSBlbGVtZW50cyB5b3Ugd2lzaCB0byBhZGQgdG8gdGhlIGluc3RhbmNlIGFuZFxuICAgKiBvcHRpb25hbGx5IHByb3ZpZGUgdGhlIGluZGV4IHdoZXJlIHlvdSB3YW50IHRoZSBpdGVtcyB0byBiZSBpbnNlcnRlZCBpbnRvLlxuICAgKiBBbGwgZWxlbWVudHMgdGhhdCBhcmUgbm90IGFscmVhZHkgY2hpbGRyZW4gb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50IHdpbGwgYmVcbiAgICogYXV0b21hdGljYWxseSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuIElmIGFuIGVsZW1lbnQgaGFzIGl0J3MgQ1NTXG4gICAqIGRpc3BsYXkgcHJvcGVydHkgc2V0IHRvIFwibm9uZVwiIGl0IHdpbGwgYmUgbWFya2VkIGFzIGluYWN0aXZlIGR1cmluZyB0aGVcbiAgICogaW5pdGlhdGlvbiBwcm9jZXNzLiBBcyBsb25nIGFzIHRoZSBpdGVtIGlzIGluYWN0aXZlIGl0IHdpbGwgbm90IGJlIHBhcnQgb2ZcbiAgICogdGhlIGxheW91dCwgYnV0IGl0IHdpbGwgcmV0YWluIGl0J3MgaW5kZXguIFlvdSBjYW4gYWN0aXZhdGUgaXRlbXMgYXQgYW55XG4gICAqIHBvaW50IHdpdGggZ3JpZC5zaG93KCkgbWV0aG9kLiBUaGlzIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbFxuICAgKiBncmlkLmxheW91dCgpIGlmIG9uZSBvciBtb3JlIG9mIHRoZSBhZGRlZCBlbGVtZW50cyBhcmUgdmlzaWJsZS4gSWYgb25seVxuICAgKiBoaWRkZW4gaXRlbXMgYXJlIGFkZGVkIG5vIGxheW91dCB3aWxsIGJlIGNhbGxlZC4gQWxsIHRoZSBuZXcgdmlzaWJsZSBpdGVtc1xuICAgKiBhcmUgcG9zaXRpb25lZCB3aXRob3V0IGFuaW1hdGlvbiBkdXJpbmcgdGhlaXIgZmlyc3QgbGF5b3V0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxIVE1MRWxlbWVudFtdKX0gZWxlbWVudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaW5kZXg9LTFdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaXNBY3RpdmVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihlbGVtZW50cywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhZWxlbWVudHMpIHJldHVybiBbXTtcblxuICAgIHZhciBuZXdJdGVtcyA9IHRvQXJyYXkoZWxlbWVudHMpO1xuICAgIGlmICghbmV3SXRlbXMubGVuZ3RoKSByZXR1cm4gbmV3SXRlbXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBNYXAgcHJvdmlkZWQgZWxlbWVudHMgaW50byBuZXcgZ3JpZCBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBuZXcgSXRlbSh0aGlzLCBuZXdJdGVtc1tpXSwgb3B0cy5pc0FjdGl2ZSk7XG4gICAgICBuZXdJdGVtc1tpXSA9IGl0ZW07XG5cbiAgICAgIC8vIElmIHRoZSBpdGVtIHRvIGJlIGFkZGVkIGlzIGFjdGl2ZSwgd2UgbmVlZCB0byBkbyBhIGxheW91dC4gQWxzbywgd2VcbiAgICAgIC8vIG5lZWQgdG8gbWFyayB0aGUgaXRlbSB3aXRoIHRoZSBza2lwTmV4dEFuaW1hdGlvbiBmbGFnIHRvIG1ha2UgaXRcbiAgICAgIC8vIHBvc2l0aW9uIGluc3RhbnRseSAod2l0aG91dCBhbmltYXRpb24pIGR1cmluZyB0aGUgbmV4dCBsYXlvdXQuIFdpdGhvdXRcbiAgICAgIC8vIHRoZSBoYWNrIHRoZSBpdGVtIHdvdWxkIGFuaW1hdGUgdG8gaXQncyBuZXcgcG9zaXRpb24gZnJvbSB0aGUgbm9ydGh3ZXN0XG4gICAgICAvLyBjb3JuZXIgb2YgdGhlIGdyaWQsIHdoaWNoIGZlZWxzIGEgYml0IGJ1Z2d5IChpbWhvKS5cbiAgICAgIGlmIChpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgICBuZWVkc0xheW91dCA9IHRydWU7XG4gICAgICAgIGl0ZW0uX2xheW91dC5fc2tpcE5leHRBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgbmV3IGl0ZW1zIHRvIHRoZSBpdGVtcyBjb2xsZWN0aW9uIHRvIGNvcnJlY3QgaW5kZXguXG4gICAgYXJyYXlJbnNlcnQoaXRlbXMsIG5ld0l0ZW1zLCBvcHRzLmluZGV4KTtcblxuICAgIC8vIEVtaXQgYWRkIGV2ZW50LlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRBZGQpKSB7XG4gICAgICB0aGlzLl9lbWl0KGV2ZW50QWRkLCBuZXdJdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICBpZiAobmVlZHNMYXlvdXQgJiYgbGF5b3V0KSB7XG4gICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0l0ZW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgaXRlbXMgZnJvbSB0aGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucmVtb3ZlRWxlbWVudHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGFsbEl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gdGFyZ2V0SXRlbXNbaV07XG4gICAgICBpbmRpY2VzLnB1c2goYWxsSXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgICBpZiAoaXRlbS5faXNBY3RpdmUpIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgIGl0ZW0uX2Rlc3Ryb3kob3B0cy5yZW1vdmVFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCByZW1vdmUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudFJlbW92ZSkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRSZW1vdmUsIHRhcmdldEl0ZW1zLnNsaWNlKDApLCBpbmRpY2VzKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgIGlmIChuZWVkc0xheW91dCAmJiBsYXlvdXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0SXRlbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgaW5zdGFuY2UgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtTaG93Q2FsbGJhY2t9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fc2V0SXRlbXNWaXNpYmlsaXR5KGl0ZW1zLCB0cnVlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSGlkZSBpbnN0YW5jZSBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0hpZGVDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9zZXRJdGVtc1Zpc2liaWxpdHkoaXRlbXMsIGZhbHNlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVyIGl0ZW1zLiBFeHBlY3RzIGF0IGxlYXN0IG9uZSBhcmd1bWVudCwgYSBwcmVkaWNhdGUsIHdoaWNoIHNob3VsZCBiZVxuICAgKiBlaXRoZXIgYSBmdW5jdGlvbiBvciBhIHN0cmluZy4gVGhlIHByZWRpY2F0ZSBjYWxsYmFjayBpcyBleGVjdXRlZCBmb3IgZXZlcnlcbiAgICogaXRlbSBpbiB0aGUgaW5zdGFuY2UuIElmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZWRpY2F0ZSBpcyB0cnV0aHkgdGhlXG4gICAqIGl0ZW0gaW4gcXVlc3Rpb24gd2lsbCBiZSBzaG93biBhbmQgb3RoZXJ3aXNlIGhpZGRlbi4gVGhlIHByZWRpY2F0ZSBjYWxsYmFja1xuICAgKiByZWNlaXZlcyB0aGUgaXRlbSBpbnN0YW5jZSBhcyBpdCdzIGFyZ3VtZW50LiBJZiB0aGUgcHJlZGljYXRlIGlzIGEgc3RyaW5nXG4gICAqIGl0IGlzIGNvbnNpZGVyZWQgdG8gYmUgYSBzZWxlY3RvciBhbmQgaXQgaXMgY2hlY2tlZCBhZ2FpbnN0IGV2ZXJ5IGl0ZW1cbiAgICogZWxlbWVudCBpbiB0aGUgaW5zdGFuY2Ugd2l0aCB0aGUgbmF0aXZlIGVsZW1lbnQubWF0Y2hlcygpIG1ldGhvZC4gQWxsIHRoZVxuICAgKiBtYXRjaGluZyBpdGVtcyB3aWxsIGJlIHNob3duIGFuZCBvdGhlcnMgaGlkZGVuLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxTdHJpbmcpfSBwcmVkaWNhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7RmlsdGVyQ2FsbGJhY2t9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXRlbXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtc1RvU2hvdyA9IFtdO1xuICAgIHZhciBpdGVtc1RvSGlkZSA9IFtdO1xuICAgIHZhciBpc1ByZWRpY2F0ZVN0cmluZyA9IHR5cGVvZiBwcmVkaWNhdGUgPT09IHN0cmluZ1R5cGU7XG4gICAgdmFyIGlzUHJlZGljYXRlRm4gPSBpc0Z1bmN0aW9uKHByZWRpY2F0ZSk7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGlzSW5zdGFudCA9IG9wdHMuaW5zdGFudCA9PT0gdHJ1ZTtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIG9uRmluaXNoID0gaXNGdW5jdGlvbihvcHRzLm9uRmluaXNoKSA/IG9wdHMub25GaW5pc2ggOiBudWxsO1xuICAgIHZhciB0cnlGaW5pc2hDb3VudGVyID0gLTE7XG4gICAgdmFyIHRyeUZpbmlzaCA9IG5vb3A7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG9uRmluaXNoIGNhbGxiYWNrLCBsZXQncyBjcmVhdGUgcHJvcGVyIHRyeUZpbmlzaCBjYWxsYmFjay5cbiAgICBpZiAob25GaW5pc2gpIHtcbiAgICAgIHRyeUZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICArK3RyeUZpbmlzaENvdW50ZXIgJiYgb25GaW5pc2goaXRlbXNUb1Nob3cuc2xpY2UoMCksIGl0ZW1zVG9IaWRlLnNsaWNlKDApKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgd2hpY2ggaXRlbXMgbmVlZCB0byBiZSBzaG93biBhbmQgd2hpY2ggaGlkZGVuLlxuICAgIGlmIChpc1ByZWRpY2F0ZUZuIHx8IGlzUHJlZGljYXRlU3RyaW5nKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IHRoaXMuX2l0ZW1zW2ldO1xuICAgICAgICBpZiAoaXNQcmVkaWNhdGVGbiA/IHByZWRpY2F0ZShpdGVtKSA6IGVsZW1lbnRNYXRjaGVzKGl0ZW0uX2VsZW1lbnQsIHByZWRpY2F0ZSkpIHtcbiAgICAgICAgICBpdGVtc1RvU2hvdy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1zVG9IaWRlLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IGl0ZW1zIHRoYXQgbmVlZCB0byBiZSBzaG93bi5cbiAgICBpZiAoaXRlbXNUb1Nob3cubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNob3coaXRlbXNUb1Nob3csIHtcbiAgICAgICAgaW5zdGFudDogaXNJbnN0YW50LFxuICAgICAgICBvbkZpbmlzaDogdHJ5RmluaXNoLFxuICAgICAgICBsYXlvdXQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5RmluaXNoKCk7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBpdGVtcyB0aGF0IG5lZWQgdG8gYmUgaGlkZGVuLlxuICAgIGlmIChpdGVtc1RvSGlkZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaGlkZShpdGVtc1RvSGlkZSwge1xuICAgICAgICBpbnN0YW50OiBpc0luc3RhbnQsXG4gICAgICAgIG9uRmluaXNoOiB0cnlGaW5pc2gsXG4gICAgICAgIGxheW91dDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnlGaW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgYW55IGl0ZW1zIHRvIGZpbHRlci5cbiAgICBpZiAoaXRlbXNUb1Nob3cubGVuZ3RoIHx8IGl0ZW1zVG9IaWRlLmxlbmd0aCkge1xuICAgICAgLy8gRW1pdCBmaWx0ZXIgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50RmlsdGVyKSkge1xuICAgICAgICB0aGlzLl9lbWl0KGV2ZW50RmlsdGVyLCBpdGVtc1RvU2hvdy5zbGljZSgwKSwgaXRlbXNUb0hpZGUuc2xpY2UoMCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNvcnQgaXRlbXMuIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIHNvcnQgdGhlIGl0ZW1zLiBUaGUgZmlyc3QgaXMgc2ltcGx5IGJ5XG4gICAqIHByb3ZpZGluZyBhIGZ1bmN0aW9uIGFzIHRoZSBjb21wYXJlciB3aGljaCB3b3JrcyBpZGVudGljYWxseSB0byBuYXRpdmVcbiAgICogYXJyYXkgc29ydC4gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHNvcnQgYnkgdGhlIHNvcnQgZGF0YSB5b3UgaGF2ZSBwcm92aWRlZFxuICAgKiBpbiB0aGUgaW5zdGFuY2UncyBvcHRpb25zLiBKdXN0IHByb3ZpZGUgdGhlIHNvcnQgZGF0YSBrZXkocykgYXMgYSBzdHJpbmdcbiAgICogKHNlcGFyYXRlZCBieSBzcGFjZSkgYW5kIHRoZSBpdGVtcyB3aWxsIGJlIHNvcnRlZCBiYXNlZCBvbiB0aGUgcHJvdmlkZWRcbiAgICogc29ydCBkYXRhIGtleXMuIExhc3RseSB5b3UgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcHJvdmlkZSBhIHByZXNvcnRlZFxuICAgKiBhcnJheSBvZiBpdGVtcyB3aGljaCB3aWxsIGJlIHVzZWQgdG8gc3luYyB0aGUgaW50ZXJuYWwgaXRlbXMgYXJyYXkgaW4gdGhlXG4gICAqIHNhbWUgb3JkZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufEl0ZW1bXXxTdHJpbmd8U3RyaW5nW10pfSBjb21wYXJlclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGVzY2VuZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zb3J0ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzb3J0Q29tcGFyZXI7XG4gICAgdmFyIGlzRGVzY2VuZGluZztcbiAgICB2YXIgb3JpZ0l0ZW1zO1xuICAgIHZhciBpbmRleE1hcDtcblxuICAgIGZ1bmN0aW9uIHBhcnNlQ3JpdGVyaWEoZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgIHJldHVybiB2YWwuc3BsaXQoJzonKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5kZXhNYXAoaXRlbXMpIHtcbiAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmV0W2l0ZW1zW2ldLl9pZF0gPSBpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wYXJlSW5kaWNlcyhpdGVtQSwgaXRlbUIpIHtcbiAgICAgIHZhciBpbmRleEEgPSBpbmRleE1hcFtpdGVtQS5faWRdO1xuICAgICAgdmFyIGluZGV4QiA9IGluZGV4TWFwW2l0ZW1CLl9pZF07XG4gICAgICByZXR1cm4gaXNEZXNjZW5kaW5nID8gaW5kZXhCIC0gaW5kZXhBIDogaW5kZXhBIC0gaW5kZXhCO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgIHZhciBjcml0ZXJpYU5hbWU7XG4gICAgICB2YXIgY3JpdGVyaWFPcmRlcjtcbiAgICAgIHZhciB2YWxBO1xuICAgICAgdmFyIHZhbEI7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGlzdCBvZiBzb3J0IGNyaXRlcmlhLlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3J0Q29tcGFyZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRoZSBjcml0ZXJpYSBuYW1lLCB3aGljaCBzaG91bGQgbWF0Y2ggYW4gaXRlbSdzIHNvcnQgZGF0YSBrZXkuXG4gICAgICAgIGNyaXRlcmlhTmFtZSA9IHNvcnRDb21wYXJlcltpXVswXTtcbiAgICAgICAgY3JpdGVyaWFPcmRlciA9IHNvcnRDb21wYXJlcltpXVsxXTtcblxuICAgICAgICAvLyBHZXQgaXRlbXMnIGNhY2hlZCBzb3J0IHZhbHVlcyBmb3IgdGhlIGNyaXRlcmlhLiBJZiB0aGUgaXRlbSBoYXMgbm8gc29ydFxuICAgICAgICAvLyBkYXRhIGxldCdzIHVwZGF0ZSB0aGUgaXRlbXMgc29ydCBkYXRhICh0aGlzIGlzIGEgbGF6eSBsb2FkIG1lY2hhbmlzbSkuXG4gICAgICAgIHZhbEEgPSAoYS5fc29ydERhdGEgPyBhIDogYS5fcmVmcmVzaFNvcnREYXRhKCkpLl9zb3J0RGF0YVtjcml0ZXJpYU5hbWVdO1xuICAgICAgICB2YWxCID0gKGIuX3NvcnREYXRhID8gYiA6IGIuX3JlZnJlc2hTb3J0RGF0YSgpKS5fc29ydERhdGFbY3JpdGVyaWFOYW1lXTtcblxuICAgICAgICAvLyBTb3J0IHRoZSBpdGVtcyBpbiBkZXNjZW5kaW5nIG9yZGVyIGlmIGRlZmluZWQgc28gZXhwbGljaXRseS4gT3RoZXJ3aXNlXG4gICAgICAgIC8vIHNvcnQgaXRlbXMgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICAgICAgICBpZiAoY3JpdGVyaWFPcmRlciA9PT0gJ2Rlc2MnIHx8ICghY3JpdGVyaWFPcmRlciAmJiBpc0Rlc2NlbmRpbmcpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsQiA8IHZhbEEgPyAtMSA6IHZhbEIgPiB2YWxBID8gMSA6IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsQSA8IHZhbEIgPyAtMSA6IHZhbEEgPiB2YWxCID8gMSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIC0xIG9yIDEgYXMgdGhlIHJldHVybiB2YWx1ZSwgbGV0J3MgcmV0dXJuIGl0IGltbWVkaWF0ZWx5LlxuICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB2YWx1ZXMgYXJlIGVxdWFsIGxldCdzIGNvbXBhcmUgdGhlIGl0ZW0gaW5kaWNlcyB0byBtYWtlIHN1cmUgd2VcbiAgICAgIC8vIGhhdmUgYSBzdGFibGUgc29ydC5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGlmICghaW5kZXhNYXApIGluZGV4TWFwID0gZ2V0SW5kZXhNYXAob3JpZ0l0ZW1zKTtcbiAgICAgICAgcmVzdWx0ID0gY29tcGFyZUluZGljZXMoYSwgYik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXBhcmVyKGEsIGIpIHtcbiAgICAgIHZhciByZXN1bHQgPSBzb3J0Q29tcGFyZXIoYSwgYik7XG4gICAgICAvLyBJZiBkZXNjZW5kaW5nIGxldCdzIGludmVydCB0aGUgcmVzdWx0IHZhbHVlLlxuICAgICAgaWYgKGlzRGVzY2VuZGluZyAmJiByZXN1bHQpIHJlc3VsdCA9IC1yZXN1bHQ7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgcmVzdWx0IChub3QgemVybykgbGV0J3MgcmV0dXJuIGl0IHJpZ2h0IGF3YXkuXG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgLy8gSWYgcmVzdWx0IGlzIHplcm8gbGV0J3MgY29tcGFyZSB0aGUgaXRlbSBpbmRpY2VzIHRvIG1ha2Ugc3VyZSB3ZSBoYXZlIGFcbiAgICAgIC8vIHN0YWJsZSBzb3J0LlxuICAgICAgaWYgKCFpbmRleE1hcCkgaW5kZXhNYXAgPSBnZXRJbmRleE1hcChvcmlnSXRlbXMpO1xuICAgICAgcmV0dXJuIGNvbXBhcmVJbmRpY2VzKGEsIGIpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihjb21wYXJlciwgb3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2l0ZW1zLmxlbmd0aCA8IDIpIHJldHVybiB0aGlzO1xuXG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIC8vIFNldHVwIHBhcmVudCBzY29wZSBkYXRhLlxuICAgICAgc29ydENvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgICBpc0Rlc2NlbmRpbmcgPSAhIW9wdHMuZGVzY2VuZGluZztcbiAgICAgIG9yaWdJdGVtcyA9IGl0ZW1zLnNsaWNlKDApO1xuICAgICAgaW5kZXhNYXAgPSBudWxsO1xuXG4gICAgICAvLyBJZiBmdW5jdGlvbiBpcyBwcm92aWRlZCBkbyBhIG5hdGl2ZSBhcnJheSBzb3J0LlxuICAgICAgaWYgKGlzRnVuY3Rpb24oc29ydENvbXBhcmVyKSkge1xuICAgICAgICBpdGVtcy5zb3J0KGN1c3RvbUNvbXBhcmVyKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBpZiB3ZSBnb3QgYSBzdHJpbmcsIGxldCdzIHNvcnQgYnkgdGhlIHNvcnQgZGF0YSBhcyBwcm92aWRlZCBpblxuICAgICAgLy8gdGhlIGluc3RhbmNlJ3Mgb3B0aW9ucy5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBzb3J0Q29tcGFyZXIgPT09IHN0cmluZ1R5cGUpIHtcbiAgICAgICAgc29ydENvbXBhcmVyID0gcGFyc2VDcml0ZXJpYShjb21wYXJlcik7XG4gICAgICAgIGl0ZW1zLnNvcnQoZGVmYXVsdENvbXBhcmVyKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBpZiB3ZSBnb3QgYW4gYXJyYXksIGxldCdzIGFzc3VtZSBpdCdzIGEgcHJlc29ydGVkIGFycmF5IG9mIHRoZVxuICAgICAgLy8gaXRlbXMgYW5kIG9yZGVyIHRoZSBpdGVtcyBiYXNlZCBvbiBpdC5cbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc29ydENvbXBhcmVyKSkge1xuICAgICAgICBpZiAoc29ydENvbXBhcmVyLmxlbmd0aCAhPT0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbJyArIG5hbWVzcGFjZSArICddIHNvcnQgcmVmZXJlbmNlIGl0ZW1zIGRvIG5vdCBtYXRjaCB3aXRoIGdyaWQgaXRlbXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHNvcnRDb21wYXJlci5pbmRleE9mKGl0ZW1zW2ldKSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWycgKyBuYW1lc3BhY2UgKyAnXSBzb3J0IHJlZmVyZW5jZSBpdGVtcyBkbyBub3QgbWF0Y2ggd2l0aCBncmlkIGl0ZW1zLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtc1tpXSA9IHNvcnRDb21wYXJlcltpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEZXNjZW5kaW5nKSBpdGVtcy5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UgbGV0J3MganVzdCBza2lwIGl0LCBub3RoaW5nIHdlIGNhbiBkbyBoZXJlLlxuICAgICAgZWxzZSB7XG4gICAgICAgIC8qKiBAdG9kbyBNYXliZSB0aHJvdyBhbiBlcnJvciBoZXJlPyAqL1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBzb3J0IGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudFNvcnQpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoZXZlbnRTb3J0LCBpdGVtcy5zbGljZSgwKSwgb3JpZ0l0ZW1zKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBNb3ZlIGl0ZW0gdG8gYW5vdGhlciBpbmRleCBvciBpbiBwbGFjZSBvZiBhbm90aGVyIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gaXRlbVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmFjdGlvbj1cIm1vdmVcIl1cbiAgICogICAtIEFjY2VwdHMgZWl0aGVyIFwibW92ZVwiIG9yIFwic3dhcFwiLlxuICAgKiAgIC0gXCJtb3ZlXCIgbW92ZXMgdGhlIGl0ZW0gaW4gcGxhY2Ugb2YgdGhlIG90aGVyIGl0ZW0uXG4gICAqICAgLSBcInN3YXBcIiBzd2FwcyB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW1zLlxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihpdGVtLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pdGVtcy5sZW5ndGggPCAyKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXNTd2FwID0gb3B0cy5hY3Rpb24gPT09IGFjdGlvblN3YXA7XG4gICAgdmFyIGFjdGlvbiA9IGlzU3dhcCA/IGFjdGlvblN3YXAgOiBhY3Rpb25Nb3ZlO1xuICAgIHZhciBmcm9tSXRlbSA9IHRoaXMuX2dldEl0ZW0oaXRlbSk7XG4gICAgdmFyIHRvSXRlbSA9IHRoaXMuX2dldEl0ZW0ocG9zaXRpb24pO1xuICAgIHZhciBmcm9tSW5kZXg7XG4gICAgdmFyIHRvSW5kZXg7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGl0ZW1zIGV4aXN0IGFuZCBhcmUgbm90IHRoZSBzYW1lLlxuICAgIGlmIChmcm9tSXRlbSAmJiB0b0l0ZW0gJiYgZnJvbUl0ZW0gIT09IHRvSXRlbSkge1xuICAgICAgLy8gR2V0IHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcy5cbiAgICAgIGZyb21JbmRleCA9IGl0ZW1zLmluZGV4T2YoZnJvbUl0ZW0pO1xuICAgICAgdG9JbmRleCA9IGl0ZW1zLmluZGV4T2YodG9JdGVtKTtcblxuICAgICAgLy8gRG8gdGhlIG1vdmUvc3dhcC5cbiAgICAgIGlmIChpc1N3YXApIHtcbiAgICAgICAgYXJyYXlTd2FwKGl0ZW1zLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlNb3ZlKGl0ZW1zLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IG1vdmUgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50TW92ZSkpIHtcbiAgICAgICAgdGhpcy5fZW1pdChldmVudE1vdmUsIHtcbiAgICAgICAgICBpdGVtOiBmcm9tSXRlbSxcbiAgICAgICAgICBmcm9tSW5kZXg6IGZyb21JbmRleCxcbiAgICAgICAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlbmQgaXRlbSB0byBhbm90aGVyIEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gaXRlbVxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLmFwcGVuZFRvPWRvY3VtZW50LmJvZHldXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0U2VuZGVyPXRydWVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0UmVjZWl2ZXI9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oaXRlbSwgZ3JpZCwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgZ3JpZC5faXNEZXN0cm95ZWQgfHwgdGhpcyA9PT0gZ3JpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIHRhcmdldCBpdGVtLlxuICAgIGl0ZW0gPSB0aGlzLl9nZXRJdGVtKGl0ZW0pO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgY29udGFpbmVyID0gb3B0cy5hcHBlbmRUbyB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgbGF5b3V0U2VuZGVyID0gb3B0cy5sYXlvdXRTZW5kZXIgPyBvcHRzLmxheW91dFNlbmRlciA6IG9wdHMubGF5b3V0U2VuZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGxheW91dFJlY2VpdmVyID0gb3B0cy5sYXlvdXRSZWNlaXZlclxuICAgICAgPyBvcHRzLmxheW91dFJlY2VpdmVyXG4gICAgICA6IG9wdHMubGF5b3V0UmVjZWl2ZXIgPT09IHVuZGVmaW5lZDtcblxuICAgIC8vIFN0YXJ0IHRoZSBtaWdyYXRpb24gcHJvY2Vzcy5cbiAgICBpdGVtLl9taWdyYXRlLnN0YXJ0KGdyaWQsIHBvc2l0aW9uLCBjb250YWluZXIpO1xuXG4gICAgLy8gSWYgbWlncmF0aW9uIHdhcyBzdGFydGVkIHN1Y2Nlc3NmdWxseSBhbmQgdGhlIGl0ZW0gaXMgYWN0aXZlLCBsZXQncyBsYXlvdXRcbiAgICAvLyB0aGUgZ3JpZHMuXG4gICAgaWYgKGl0ZW0uX21pZ3JhdGUuX2lzQWN0aXZlICYmIGl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICBpZiAobGF5b3V0U2VuZGVyKSB7XG4gICAgICAgIHRoaXMubGF5b3V0KFxuICAgICAgICAgIGxheW91dFNlbmRlciA9PT0gaW5zdGFudExheW91dCxcbiAgICAgICAgICBpc0Z1bmN0aW9uKGxheW91dFNlbmRlcikgPyBsYXlvdXRTZW5kZXIgOiB1bmRlZmluZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXlvdXRSZWNlaXZlcikge1xuICAgICAgICBncmlkLmxheW91dChcbiAgICAgICAgICBsYXlvdXRSZWNlaXZlciA9PT0gaW5zdGFudExheW91dCxcbiAgICAgICAgICBpc0Z1bmN0aW9uKGxheW91dFJlY2VpdmVyKSA/IGxheW91dFJlY2VpdmVyIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZW1vdmVFbGVtZW50cz1mYWxzZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXMuc2xpY2UoMCk7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBVbmJpbmQgd2luZG93IHJlc2l6ZSBldmVudCBsaXN0ZW5lci5cbiAgICBpZiAodGhpcy5fcmVzaXplSGFuZGxlcikge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3kgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtc1tpXS5fZGVzdHJveShyZW1vdmVFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gUmVzdG9yZSBjb250YWluZXIuXG4gICAgcmVtb3ZlQ2xhc3MoY29udGFpbmVyLCB0aGlzLl9zZXR0aW5ncy5jb250YWluZXJDbGFzcyk7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcnO1xuXG4gICAgLy8gRW1pdCBkZXN0cm95IGV2ZW50IGFuZCB1bmJpbmQgYWxsIGV2ZW50cy5cbiAgICB0aGlzLl9lbWl0KGV2ZW50RGVzdHJveSk7XG4gICAgdGhpcy5fZW1pdHRlci5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgcmVmZXJlbmNlIGZyb20gdGhlIGdyaWQgaW5zdGFuY2VzIGNvbGxlY3Rpb24uXG4gICAgZ3JpZEluc3RhbmNlc1t0aGlzLl9pZF0gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGbGFnIGluc3RhbmNlIGFzIGRlc3Ryb3llZC5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UncyBpdGVtIGJ5IGVsZW1lbnQgb3IgYnkgaW5kZXguIFRhcmdldCBjYW4gYWxzbyBiZSBhbiBJdGVtXG4gICAqIGluc3RhbmNlIGluIHdoaWNoIGNhc2UgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIGl0ZW0gaWYgaXQgZXhpc3RzIHdpdGhpblxuICAgKiByZWxhdGVkIEdyaWQgaW5zdGFuY2UuIElmIG5vdGhpbmcgaXMgZm91bmQgd2l0aCB0aGUgcHJvdmlkZWQgdGFyZ2V0LCBudWxsXG4gICAqIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBbdGFyZ2V0XVxuICAgKiBAcmV0dXJucyB7P0l0ZW19XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fZ2V0SXRlbSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIC8vIElmIG5vIHRhcmdldCBpcyBzcGVjaWZpZWQgb3IgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZCwgcmV0dXJuIG51bGwuXG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICghdGFyZ2V0ICYmIHRhcmdldCAhPT0gMCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRhcmdldCBpcyBudW1iZXIgcmV0dXJuIHRoZSBpdGVtIGluIHRoYXQgaW5kZXguIElmIHRoZSBudW1iZXIgaXMgbG93ZXJcbiAgICAvLyB0aGFuIHplcm8gbG9vayBmb3IgdGhlIGl0ZW0gc3RhcnRpbmcgZnJvbSB0aGUgZW5kIG9mIHRoZSBpdGVtcyBhcnJheS4gRm9yXG4gICAgLy8gZXhhbXBsZSAtMSBmb3IgdGhlIGxhc3QgaXRlbSwgLTIgZm9yIHRoZSBzZWNvbmQgbGFzdCBpdGVtLCBldGMuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IG51bWJlclR5cGUkMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3RhcmdldCA+IC0xID8gdGFyZ2V0IDogdGhpcy5faXRlbXMubGVuZ3RoICsgdGFyZ2V0XSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYW4gaW5zdGFuY2Ugb2YgSXRlbSByZXR1cm4gaXQgaWYgaXQgaXMgYXR0YWNoZWQgdG8gdGhpc1xuICAgIC8vIEdyaWQgaW5zdGFuY2UsIG90aGVyd2lzZSByZXR1cm4gbnVsbC5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSXRlbSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5fZ3JpZElkID09PSB0aGlzLl9pZCA/IHRhcmdldCA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSW4gb3RoZXIgY2FzZXMgbGV0J3MgYXNzdW1lIHRoYXQgdGhlIHRhcmdldCBpcyBhbiBlbGVtZW50LCBzbyBsZXQncyB0cnlcbiAgICAvLyB0byBmaW5kIGFuIGl0ZW0gdGhhdCBtYXRjaGVzIHRoZSBlbGVtZW50IGFuZCByZXR1cm4gaXQuIElmIGl0ZW0gaXMgbm90XG4gICAgLy8gZm91bmQgcmV0dXJuIG51bGwuXG4gICAgLyoqIEB0b2RvIFRoaXMgY291bGQgYmUgbWFkZSBhIGxvdCBmYXN0ZXIgYnkgdXNpbmcgTWFwL1dlYWtNYXAgb2YgZWxlbWVudHMuICovXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zW2ldLl9lbGVtZW50ID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZXMgYW5kIHVwZGF0ZXMgaW5zdGFuY2UncyBsYXlvdXQgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtMYXlvdXREYXRhfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLl9sYXlvdXQ7XG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fc2V0dGluZ3MubGF5b3V0O1xuICAgIHZhciB3aWR0aDtcbiAgICB2YXIgaGVpZ2h0O1xuICAgIHZhciBuZXdMYXlvdXQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBMZXQncyBpbmNyZW1lbnQgbGF5b3V0IGlkLlxuICAgICsrbGF5b3V0LmlkO1xuXG4gICAgLy8gTGV0J3MgdXBkYXRlIGxheW91dCBpdGVtc1xuICAgIGxheW91dC5pdGVtcy5sZW5ndGggPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zW2ldLl9pc0FjdGl2ZSkgbGF5b3V0Lml0ZW1zLnB1c2godGhpcy5faXRlbXNbaV0pO1xuICAgIH1cblxuICAgIC8vIExldCdzIG1ha2Ugc3VyZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IGNvbnRhaW5lciBkaW1lbnNpb25zLlxuICAgIHRoaXMuX3JlZnJlc2hEaW1lbnNpb25zKCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgY29udGFpbmVyIHdpZHRoIGFuZCBoZWlnaHQgKHdpdGhvdXQgYm9yZGVycykuXG4gICAgd2lkdGggPSB0aGlzLl93aWR0aCAtIHRoaXMuX2JvcmRlckxlZnQgLSB0aGlzLl9ib3JkZXJSaWdodDtcbiAgICBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgLSB0aGlzLl9ib3JkZXJUb3AgLSB0aGlzLl9ib3JkZXJCb3R0b207XG5cbiAgICAvLyBDYWxjdWxhdGUgbmV3IGxheW91dC5cbiAgICBpZiAoaXNGdW5jdGlvbihzZXR0aW5ncykpIHtcbiAgICAgIG5ld0xheW91dCA9IHNldHRpbmdzKGxheW91dC5pdGVtcywgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0xheW91dCA9IHBhY2tlci5nZXRMYXlvdXQobGF5b3V0Lml0ZW1zLCB3aWR0aCwgaGVpZ2h0LCBsYXlvdXQuc2xvdHMsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgdGhlIGdyaWQncyBsYXlvdXQuXG4gICAgbGF5b3V0LnNsb3RzID0gbmV3TGF5b3V0LnNsb3RzO1xuICAgIGxheW91dC5zZXRXaWR0aCA9IEJvb2xlYW4obmV3TGF5b3V0LnNldFdpZHRoKTtcbiAgICBsYXlvdXQuc2V0SGVpZ2h0ID0gQm9vbGVhbihuZXdMYXlvdXQuc2V0SGVpZ2h0KTtcbiAgICBsYXlvdXQud2lkdGggPSBuZXdMYXlvdXQud2lkdGg7XG4gICAgbGF5b3V0LmhlaWdodCA9IG5ld0xheW91dC5oZWlnaHQ7XG5cbiAgICByZXR1cm4gbGF5b3V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0IGEgZ3JpZCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0gey4uLip9IFthcmddXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fZW1pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdC5hcHBseSh0aGlzLl9lbWl0dGVyLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBhcmUgYW55IGV2ZW50cyBsaXN0ZW5lcnMgZm9yIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX2hhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2VtaXR0ZXIuX2V2ZW50c1tldmVudF07XG4gICAgcmV0dXJuICEhKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoKTtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGNvbnRhaW5lcidzIHdpZHRoLCBoZWlnaHQgYW5kIG9mZnNldHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUJvdW5kaW5nUmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5fd2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgIHRoaXMuX2xlZnQgPSByZWN0LmxlZnQ7XG4gICAgdGhpcy5fdG9wID0gcmVjdC50b3A7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb250YWluZXIncyBib3JkZXIgc2l6ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGxlZnRcbiAgICogQHBhcmFtIHtCb29sZWFufSByaWdodFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvcFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGJvdHRvbVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3VwZGF0ZUJvcmRlcnMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCwgdG9wLCBib3R0b20pIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgaWYgKGxlZnQpIHRoaXMuX2JvcmRlckxlZnQgPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1sZWZ0LXdpZHRoJyk7XG4gICAgaWYgKHJpZ2h0KSB0aGlzLl9ib3JkZXJSaWdodCA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLXJpZ2h0LXdpZHRoJyk7XG4gICAgaWYgKHRvcCkgdGhpcy5fYm9yZGVyVG9wID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItdG9wLXdpZHRoJyk7XG4gICAgaWYgKGJvdHRvbSkgdGhpcy5fYm9yZGVyQm90dG9tID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItYm90dG9tLXdpZHRoJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggYWxsIG9mIGNvbnRhaW5lcidzIGludGVybmFsIGRpbWVuc2lvbnMgYW5kIG9mZnNldHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3JlZnJlc2hEaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5fdXBkYXRlQm9yZGVycygxLCAxLCAxLCAxKTtcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBvciBoaWRlIEdyaWQgaW5zdGFuY2UncyBpdGVtcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvVmlzaWJsZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHsoU2hvd0NhbGxiYWNrfEhpZGVDYWxsYmFjayl9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX3NldEl0ZW1zVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKGl0ZW1zLCB0b1Zpc2libGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZ3JpZCA9IHRoaXM7XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGlzSW5zdGFudCA9IG9wdHMuaW5zdGFudCA9PT0gdHJ1ZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBvcHRzLm9uRmluaXNoO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgY291bnRlciA9IHRhcmdldEl0ZW1zLmxlbmd0aDtcbiAgICB2YXIgc3RhcnRFdmVudCA9IHRvVmlzaWJsZSA/IGV2ZW50U2hvd1N0YXJ0IDogZXZlbnRIaWRlU3RhcnQ7XG4gICAgdmFyIGVuZEV2ZW50ID0gdG9WaXNpYmxlID8gZXZlbnRTaG93RW5kIDogZXZlbnRIaWRlRW5kO1xuICAgIHZhciBtZXRob2QgPSB0b1Zpc2libGUgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgdmFyIG5lZWRzTGF5b3V0ID0gZmFsc2U7XG4gICAgdmFyIGNvbXBsZXRlZEl0ZW1zID0gW107XG4gICAgdmFyIGhpZGRlbkl0ZW1zID0gW107XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaXRlbXMgY2FsbCB0aGUgY2FsbGJhY2ssIGJ1dCBkb24ndCBlbWl0IGFueSBldmVudHMuXG4gICAgaWYgKCFjb3VudGVyKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIGNhbGxiYWNrKHRhcmdldEl0ZW1zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHNob3dTdGFydC9oaWRlU3RhcnQgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhzdGFydEV2ZW50KSkge1xuICAgICAgdGhpcy5fZW1pdChzdGFydEV2ZW50LCB0YXJnZXRJdGVtcy5zbGljZSgwKSk7XG4gICAgfVxuXG4gICAgLy8gU2hvdy9oaWRlIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IHRhcmdldEl0ZW1zW2ldO1xuXG4gICAgICAvLyBJZiBpbmFjdGl2ZSBpdGVtIGlzIHNob3duIG9yIGFjdGl2ZSBpdGVtIGlzIGhpZGRlbiB3ZSBuZWVkIHRvIGRvXG4gICAgICAvLyBsYXlvdXQuXG4gICAgICBpZiAoKHRvVmlzaWJsZSAmJiAhaXRlbS5faXNBY3RpdmUpIHx8ICghdG9WaXNpYmxlICYmIGl0ZW0uX2lzQWN0aXZlKSkge1xuICAgICAgICBuZWVkc0xheW91dCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGluYWN0aXZlIGl0ZW0gaXMgc2hvd24gd2UgYWxzbyBuZWVkIHRvIGRvIGEgbGl0dGxlIGhhY2sgdG8gbWFrZSB0aGVcbiAgICAgIC8vIGl0ZW0gbm90IGFuaW1hdGUgaXQncyBuZXh0IHBvc2l0aW9uaW5nIChsYXlvdXQpLlxuICAgICAgaWYgKHRvVmlzaWJsZSAmJiAhaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgICAgaXRlbS5fbGF5b3V0Ll9za2lwTmV4dEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGEgaGlkZGVuIGl0ZW0gaXMgYmVpbmcgc2hvd24gd2UgbmVlZCB0byByZWZyZXNoIHRoZSBpdGVtJ3NcbiAgICAgIC8vIGRpbWVuc2lvbnMuXG4gICAgICBpZiAodG9WaXNpYmxlICYmIGl0ZW0uX3Zpc2liaWxpdHkuX2lzSGlkZGVuKSB7XG4gICAgICAgIGhpZGRlbkl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cvaGlkZSB0aGUgaXRlbS5cbiAgICAgIGl0ZW0uX3Zpc2liaWxpdHlbbWV0aG9kXShpc0luc3RhbnQsIGZ1bmN0aW9uKGludGVycnVwdGVkLCBpdGVtKSB7XG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGl0ZW0ncyBhbmltYXRpb24gd2FzIG5vdCBpbnRlcnJ1cHRlZCBhZGQgaXQgdG8gdGhlXG4gICAgICAgIC8vIGNvbXBsZXRlZEl0ZW1zIGFycmF5LlxuICAgICAgICBpZiAoIWludGVycnVwdGVkKSBjb21wbGV0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIC8vIElmIGFsbCBpdGVtcyBoYXZlIGZpbmlzaGVkIHRoZWlyIGFuaW1hdGlvbnMgY2FsbCB0aGUgY2FsbGJhY2tcbiAgICAgICAgLy8gYW5kIGVtaXQgc2hvd0VuZC9oaWRlRW5kIGV2ZW50LlxuICAgICAgICBpZiAoLS1jb3VudGVyIDwgMSkge1xuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkgY2FsbGJhY2soY29tcGxldGVkSXRlbXMuc2xpY2UoMCkpO1xuICAgICAgICAgIGlmIChncmlkLl9oYXNMaXN0ZW5lcnMoZW5kRXZlbnQpKSBncmlkLl9lbWl0KGVuZEV2ZW50LCBjb21wbGV0ZWRJdGVtcy5zbGljZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlZnJlc2ggaGlkZGVuIGl0ZW1zLlxuICAgIGlmIChoaWRkZW5JdGVtcy5sZW5ndGgpIHRoaXMucmVmcmVzaEl0ZW1zKGhpZGRlbkl0ZW1zKTtcblxuICAgIC8vIExheW91dCBpZiBuZWVkZWQuXG4gICAgaWYgKG5lZWRzTGF5b3V0ICYmIGxheW91dCkge1xuICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBoZWxwZXJzXG4gICAqICoqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogTWVyZ2UgZGVmYXVsdCBzZXR0aW5ncyB3aXRoIHVzZXIgc2V0dGluZ3MuIFRoZSByZXR1cm5lZCBvYmplY3QgaXMgYSBuZXdcbiAgICogb2JqZWN0IHdpdGggbWVyZ2VkIHZhbHVlcy4gVGhlIG1lcmdpbmcgaXMgYSBkZWVwIG1lcmdlIG1lYW5pbmcgdGhhdCBhbGxcbiAgICogb2JqZWN0cyBhbmQgYXJyYXlzIHdpdGhpbiB0aGUgcHJvdmlkZWQgc2V0dGluZ3Mgb2JqZWN0cyB3aWxsIGJlIGFsc28gbWVyZ2VkXG4gICAqIHNvIHRoYXQgbW9kaWZ5aW5nIHRoZSB2YWx1ZXMgb2YgdGhlIHNldHRpbmdzIG9iamVjdCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uXG4gICAqIHRoZSByZXR1cm5lZCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0U2V0dGluZ3NcbiAgICogQHBhcmFtIHtPYmplY3R9IFt1c2VyU2V0dGluZ3NdXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYSBuZXcgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VTZXR0aW5ncyhkZWZhdWx0U2V0dGluZ3MsIHVzZXJTZXR0aW5ncykge1xuICAgIC8vIENyZWF0ZSBhIGZyZXNoIGNvcHkgb2YgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICB2YXIgcmV0ID0gbWVyZ2VPYmplY3RzKHt9LCBkZWZhdWx0U2V0dGluZ3MpO1xuXG4gICAgLy8gTWVyZ2UgdXNlciBzZXR0aW5ncyB0byBkZWZhdWx0IHNldHRpbmdzLlxuICAgIGlmICh1c2VyU2V0dGluZ3MpIHtcbiAgICAgIHJldCA9IG1lcmdlT2JqZWN0cyhyZXQsIHVzZXJTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHZpc2libGUvaGlkZGVuIHN0eWxlcyBtYW51YWxseSBzbyB0aGF0IHRoZSB3aG9sZSBvYmplY3QgaXNcbiAgICAvLyBvdmVycmlkZGVuIGluc3RlYWQgb2YgdGhlIHByb3BzLlxuICAgIHJldC52aXNpYmxlU3R5bGVzID0gKHVzZXJTZXR0aW5ncyB8fCAwKS52aXNpYmxlU3R5bGVzIHx8IChkZWZhdWx0U2V0dGluZ3MgfHwgMCkudmlzaWJsZVN0eWxlcztcbiAgICByZXQuaGlkZGVuU3R5bGVzID0gKHVzZXJTZXR0aW5ncyB8fCAwKS5oaWRkZW5TdHlsZXMgfHwgKGRlZmF1bHRTZXR0aW5ncyB8fCAwKS5oaWRkZW5TdHlsZXM7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHR3byBvYmplY3RzIHJlY3Vyc2l2ZWx5IChkZWVwIG1lcmdlKS4gVGhlIHNvdXJjZSBvYmplY3QncyBwcm9wZXJ0aWVzXG4gICAqIGFyZSBtZXJnZWQgdG8gdGhlIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAgICogICAtIFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gICAqICAgLSBUaGUgc291cmNlIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlT2JqZWN0cyh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIgbGVuZ3RoID0gc291cmNlS2V5cy5sZW5ndGg7XG4gICAgdmFyIGlzU291cmNlT2JqZWN0O1xuICAgIHZhciBwcm9wTmFtZTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcHJvcE5hbWUgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgaXNTb3VyY2VPYmplY3QgPSBpc1BsYWluT2JqZWN0KHNvdXJjZVtwcm9wTmFtZV0pO1xuXG4gICAgICAvLyBJZiB0YXJnZXQgYW5kIHNvdXJjZSB2YWx1ZXMgYXJlIGJvdGggb2JqZWN0cywgbWVyZ2UgdGhlIG9iamVjdHMgYW5kXG4gICAgICAvLyBhc3NpZ24gdGhlIG1lcmdlZCB2YWx1ZSB0byB0aGUgdGFyZ2V0IHByb3BlcnR5LlxuICAgICAgaWYgKGlzUGxhaW5PYmplY3QodGFyZ2V0W3Byb3BOYW1lXSkgJiYgaXNTb3VyY2VPYmplY3QpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IG1lcmdlT2JqZWN0cyhtZXJnZU9iamVjdHMoe30sIHRhcmdldFtwcm9wTmFtZV0pLCBzb3VyY2VbcHJvcE5hbWVdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHNvdXJjZSdzIHZhbHVlIGlzIG9iamVjdCBhbmQgdGFyZ2V0J3MgaXMgbm90IGxldCdzIGNsb25lIHRoZSBvYmplY3QgYXNcbiAgICAgIC8vIHRoZSB0YXJnZXQncyB2YWx1ZS5cbiAgICAgIGlmIChpc1NvdXJjZU9iamVjdCkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gbWVyZ2VPYmplY3RzKHt9LCBzb3VyY2VbcHJvcE5hbWVdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHNvdXJjZSdzIHZhbHVlIGlzIGFuIGFycmF5IGxldCdzIGNsb25lIHRoZSBhcnJheSBhcyB0aGUgdGFyZ2V0J3NcbiAgICAgIC8vIHZhbHVlLlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV0uc2xpY2UoMCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbiBhbGwgb3RoZXIgY2FzZXMgbGV0J3MganVzdCBkaXJlY3RseSBhc3NpZ24gdGhlIHNvdXJjZSdzIHZhbHVlIGFzIHRoZVxuICAgICAgLy8gdGFyZ2V0J3MgdmFsdWUuXG4gICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIEdyaWQ7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tdXVyaS9kaXN0L211dXJpLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBBbHRlcm5hdGl2ZVZpc3VhbGl6ZXJzV3JhcHBlciBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aXN1YWxpemVyczogQXJyYXk8VmlzdWFsaXplckJhc2U+LFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIGlmKCF2aXN1YWxpemVycyB8fCB2aXN1YWxpemVycy5sZW5ndGggPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWaXN1YWxpemVyQXJyYXlXcmFwcGVyIHdvcmtzIHdpdGggdmlzdWFsaXplcnMgY29sbGVjdGlvbiBvbmx5LlwiKTtcbiAgICB9XG4gICAgdGhpcy52aXN1YWxpemVyID0gdmlzdWFsaXplcnNbMF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdmlzdWFsaXplckNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgcHJpdmF0ZSB2aXN1YWxpemVyOiBWaXN1YWxpemVyQmFzZTtcblxuICBwcml2YXRlIHNldFZpc3VhbGl6ZXIobmFtZTogc3RyaW5nKSB7XG4gICAgaWYoISF0aGlzLnZpc3VhbGl6ZXIpIHtcbiAgICAgIHRoaXMudmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMudmlzdWFsaXplciA9IHRoaXMudmlzdWFsaXplcnMuZmlsdGVyKHYgPT4gdi5uYW1lID09PSBuYW1lKVswXTtcbiAgICB0aGlzLnZpc3VhbGl6ZXIucmVuZGVyKHRoaXMudmlzdWFsaXplckNvbnRhaW5lcik7XG4gICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICB0aGlzLnZpc3VhbGl6ZXIudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgb25VcGRhdGU6ICgpID0+IHZvaWQ7XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLnZpc3VhbGl6ZXJDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy52aXN1YWxpemVyLnJlbmRlcih0aGlzLnZpc3VhbGl6ZXJDb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBUb29sYmFySGVscGVyLmNyZWF0ZVNlbGVjdG9yKHRvb2xiYXIsXG4gICAgICB0aGlzLnZpc3VhbGl6ZXJzLm1hcCh2aXN1YWxpemVyID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmlzdWFsaXplci5uYW1lLFxuICAgICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ2aXN1YWxpemVyX1wiICsgdmlzdWFsaXplci5uYW1lKVxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMudmlzdWFsaXplci5uYW1lID09PSBvcHRpb24udmFsdWUsXG4gICAgICAoZTogYW55KSA9PiB0aGlzLnNldFZpc3VhbGl6ZXIoZS50YXJnZXQudmFsdWUpXG4gICAgKTtcbiAgICB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xuICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FsdGVybmF0aXZlVml6dWFsaXplcnNXcmFwcGVyLnRzIiwiZXhwb3J0IGVudW0gRWxlbWVudFZpc2liaWxpdHkgeyBWaXNpYmxlID0gXCJWaXNpYmxlXCIsIEludmlzaWJsZSA9IFwiSW52aXNpYmxlXCIsIFB1YmxpY0ludmlzaWJsZSA9IFwiUHVibGljSW52aXNpYmxlXCIgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmlzdWFsaXplclBhbmVsRWxlbWVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgdmlzaWJpbGl0eTogRWxlbWVudFZpc2liaWxpdHk7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWcudHMiLCJleHBvcnQgZW51bSBDb2x1bW5WaXNpYmlsaXR5IHsgVmlzaWJsZSA9IFwiVmlzaWJsZVwiLCBJbnZpc2libGUgPSBcIkludmlzaWJsZVwiLCBQdWJsaWNJbnZpc2libGUgPSBcIlB1YmxpY0ludmlzaWJsZVwiIH1cclxuZXhwb3J0IGVudW0gUXVlc3Rpb25Mb2NhdGlvbiB7IENvbHVtbiA9IFwiQ29sdW1uXCIsIFJvdyA9IFwiUm93XCIgfVxyXG5leHBvcnQgZW51bSBDb2x1bW5EYXRhVHlwZSB7IFRleHQgPSBcIlRleHRcIiwgRmlsZUxpbmsgPSBcIkZpbGVMaW5rXCIsIEltYWdlID0gXCJJbWFnZVwiIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBkYXRhVHlwZTogQ29sdW1uRGF0YVR5cGU7XHJcbiAgICB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5O1xyXG4gICAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb247XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1ucyB7XHJcbi8vICAgICBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+O1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRhdGFibGVzL2NvbmZpZy50cyIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcbi8vaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIlxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vbG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcIkVuZ2xpc2hcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvbkJvb2xlYW5Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZVBsb3RseSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5QbG90bHkgZXh0ZW5kcyBTZWxlY3RCYXNlUGxvdGx5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRUeXBlcyA9IEJvb2xlYW5QbG90bHkudHlwZXM7XG4gICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLmNoYXJ0VHlwZXNbMF07XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJvb2xlYW5RdWVzdGlvbigpIHtcbiAgICByZXR1cm4gPFF1ZXN0aW9uQm9vbGVhbk1vZGVsPnRoaXMucXVlc3Rpb247XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRydWVDb2xvciA9IFwiXCI7XG4gIHB1YmxpYyBzdGF0aWMgZmFsc2VDb2xvciA9IFwiXCI7XG5cbiAgcHJvdGVjdGVkIHBhdGNoQ29uZmlnUGFyYW1ldGVycyhcbiAgICBjaGFydE5vZGU6IG9iamVjdCxcbiAgICB0cmFjZXM6IEFycmF5PG9iamVjdD4sXG4gICAgbGF5b3V0OiBvYmplY3QsXG4gICAgY29uZmlnOiBvYmplY3RcbiAgKSB7XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5nZXRDb2xvcnMoKTtcbiAgICBjb25zdCBib29sQ29sb3JzID0gW1xuICAgICAgQm9vbGVhblBsb3RseS50cnVlQ29sb3IgfHwgY29sb3JzWzBdLFxuICAgICAgQm9vbGVhblBsb3RseS5mYWxzZUNvbG9yIHx8IGNvbG9yc1sxXVxuICAgIF07XG5cbiAgICBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwicGllXCIpIHtcbiAgICAgIHRyYWNlcy5mb3JFYWNoKCh0cmFjZTogYW55KSA9PiB7XG4gICAgICAgIHRyYWNlLm1hcmtlci5jb2xvcnMgPSBib29sQ29sb3JzO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNoYXJ0VHlwZSA9PT0gXCJiYXJcIikge1xuICAgICAgdHJhY2VzLmZvckVhY2goKHRyYWNlOiBhbnkpID0+IHtcbiAgICAgICAgdHJhY2UubWFya2VyLmNvbG9yID0gYm9vbENvbG9ycztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJwaWVcIiwgXCJiYXJcIl07XG5cbiAgcHJvdGVjdGVkIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIHJldHVybiBuZXcgSXRlbVZhbHVlKHZhbHVlc1tsYWJlbHMuaW5kZXhPZihpdGVtVGV4dCldLCBpdGVtVGV4dCk7XG4gIH1cblxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlVHJ1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVUcnVlXG4gICAgICAgIDogdHJ1ZSxcbiAgICAgIHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2UgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2VcbiAgICAgICAgOiBmYWxzZVxuICAgIF07XG4gIH1cblxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIGxhYmVscyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgaWYgKHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsVHJ1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsYWJlbHNbMF0gPSB0aGlzLmJvb2xlYW5RdWVzdGlvbi5sYWJlbFRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvb2xlYW5RdWVzdGlvbi5sYWJlbEZhbHNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxhYmVsc1sxXSA9IHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsRmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIHZhciB0cnVlQ291bnQgPSAwO1xuICAgIHZhciBmYWxzZUNvdW50ID0gMDtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgaWYgKHJvd1ZhbHVlID09PSB2YWx1ZXNbMF0pIHtcbiAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICB9XG4gICAgICBpZiAocm93VmFsdWUgPT09IHZhbHVlc1sxXSkge1xuICAgICAgICBmYWxzZUNvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtbdHJ1ZUNvdW50LCBmYWxzZUNvdW50XV07XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiYm9vbGVhblwiLCBCb29sZWFuUGxvdGx5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvYm9vbGVhbi50cyIsImltcG9ydCB7IEl0ZW1WYWx1ZSwgUXVlc3Rpb25NYXRyaXhNb2RlbCwgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlUGxvdGx5IH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTWF0cml4UGxvdGx5IGV4dGVuZHMgU2VsZWN0QmFzZVBsb3RseSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0Tm9kZSwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgdmFsdWVzU291cmNlKCk6IGFueVtdIHtcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcXVlc3Rpb24uY29sdW1ucztcbiAgfVxuXG4gIGdldExhYmVscygpOiBhbnlbXSB7XG4gICAgY29uc3QgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4TW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgcmV0dXJuIHF1ZXN0aW9uLnJvd3MubWFwKChyb3c6IGFueSkgPT5cbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZShxdWVzdGlvbi5yb3dzLCByb3cudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldERhdGEoKTogYW55W10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIGNvbnN0IGRhdGFzZXRzOiBBcnJheTxhbnk+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+IHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5yb3dzLm1hcCgodjogYW55KSA9PiAwKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvd0RhdGEgPT4ge1xuICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZTogYW55ID0gcm93RGF0YVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgaWYgKCEhcXVlc3Rpb25WYWx1ZSkge1xuICAgICAgICBxdWVzdGlvbi5yb3dzLmZvckVhY2goKHJvdzogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRWYWx1ZXMoKS5mb3JFYWNoKCh2YWw6IGFueSwgZHNJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlc3Rpb25WYWx1ZVtyb3cudmFsdWVdID09IHZhbCkge1xuICAgICAgICAgICAgICBkYXRhc2V0c1tkc0luZGV4XVtpbmRleF0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGFzZXRzO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm1hdHJpeFwiLCBNYXRyaXhQbG90bHkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9tYXRyaXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xudmFyIFBsb3RseSA9IDxhbnk+cmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgR2F1Z2VQbG90bHkgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByaXZhdGUgX3Jlc3VsdDogYW55O1xuICBwcml2YXRlIGNoYXJ0OiBQcm9taXNlPFBsb3RseS5QbG90bHlIVE1MRWxlbWVudD47XG5cbiAgcHVibGljIHN0YXRpYyBzdGVwc0NvdW50ID0gNTtcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZVRleHRzQ2FsbGJhY2s6IChcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgbWF4VmFsdWU6IG51bWJlcixcbiAgICBtaW5WYWx1ZTogbnVtYmVyLFxuICAgIHN0ZXBzQ291bnQ6IG51bWJlcixcbiAgICB0ZXh0czogc3RyaW5nW11cbiAgKSA9PiBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlcyA9IFtcImdhdWdlXCIsIFwiYnVsbGV0XCJdO1xuICBjaGFydFR5cGUgPSBcImdhdWdlXCI7XG4gIGNoYXJ0Tm9kZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgaWYoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShkYXRhKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b29sYmFyQ2hhbmdlSGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5jaGFydFR5cGUgIT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IodG9vbGJhcixcbiAgICAgICAgdGhpcy5jaGFydFR5cGVzLm1hcChjaGFydFR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogY2hhcnRUeXBlLFxuICAgICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYXJ0VHlwZV9cIiArIGNoYXJ0VHlwZSlcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgKG9wdGlvbjogYW55KSA9PiB0aGlzLmNoYXJ0VHlwZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgICB0aGlzLnRvb2xiYXJDaGFuZ2VIYW5kbGVyXG4gICAgICApO1xuICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChzZWxlY3RXcmFwcGVyKTtcbiAgICB9XG4gICAgc3VwZXIuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBQbG90bHkucHVyZ2UodGhpcy5jaGFydE5vZGUpO1xuICAgIHRoaXMuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdlbmVyYXRlVGV4dChtYXhWYWx1ZTogbnVtYmVyLCBtaW5WYWx1ZTogbnVtYmVyLCBzdGVwc0NvdW50OiBudW1iZXIpIHtcbiAgICBsZXQgdGV4dHM6IGFueSA9IFtdO1xuXG4gICAgaWYgKHN0ZXBzQ291bnQgPT09IDUpIHtcbiAgICAgIHRleHRzID0gW1xuICAgICAgICBcInZlcnkgaGlnaCAoXCIgKyBtYXhWYWx1ZSArIFwiKVwiLFxuICAgICAgICBcImhpZ2hcIixcbiAgICAgICAgXCJtZWRpdW1cIixcbiAgICAgICAgXCJsb3dcIixcbiAgICAgICAgXCJ2ZXJ5IGxvdyAoXCIgKyBtaW5WYWx1ZSArIFwiKVwiXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0cy5wdXNoKG1heFZhbHVlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHNDb3VudCAtIDI7IGkrKykge1xuICAgICAgICB0ZXh0cy5wdXNoKFwiXCIpO1xuICAgICAgfVxuICAgICAgdGV4dHMucHVzaChtaW5WYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCEhR2F1Z2VQbG90bHkuZ2VuZXJhdGVUZXh0c0NhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gR2F1Z2VQbG90bHkuZ2VuZXJhdGVUZXh0c0NhbGxiYWNrKFxuICAgICAgICB0aGlzLnF1ZXN0aW9uLFxuICAgICAgICBtYXhWYWx1ZSxcbiAgICAgICAgbWluVmFsdWUsXG4gICAgICAgIHN0ZXBzQ291bnQsXG4gICAgICAgIHRleHRzXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0cztcbiAgfVxuXG4gIGdlbmVyYXRlVmFsdWVzKG1heFZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50OyBpKyspIHtcbiAgICAgIHZhbHVlcy5wdXNoKG1heFZhbHVlIC8gc3RlcHNDb3VudCk7XG4gICAgfVxuXG4gICAgdmFsdWVzLnB1c2gobWF4VmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGdlbmVyYXRlQ29sb3JzKG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50OyBpKyspIHtcbiAgICAgIGNvbG9ycy5wdXNoKHBhbGV0dGVbaV0pO1xuICAgIH1cblxuICAgIGNvbG9ycy5wdXNoKFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiKTtcblxuICAgIHJldHVybiBjb2xvcnM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoYXJ0KCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcblxuICAgIGNvbnN0IHJhdGVWYWx1ZXMgPSBxdWVzdGlvbi52aXNpYmxlUmF0ZVZhbHVlcztcbiAgICBjb25zdCBtYXhWYWx1ZSA9IHJhdGVWYWx1ZXNbcmF0ZVZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZTtcbiAgICBjb25zdCBtaW5WYWx1ZSA9IHJhdGVWYWx1ZXNbMF0udmFsdWU7XG5cbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdlbmVyYXRlQ29sb3JzKFxuICAgICAgbWF4VmFsdWUsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIEdhdWdlUGxvdGx5LnN0ZXBzQ291bnRcbiAgICApO1xuXG4gICAgdmFyIGxldmVsID0gdGhpcy5yZXN1bHQ7XG5cbiAgICB2YXIgZGF0YTogYW55ID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcImluZGljYXRvclwiLFxuICAgICAgICBtb2RlOiBcImdhdWdlK251bWJlclwiLFxuICAgICAgICBnYXVnZToge1xuICAgICAgICAgIGF4aXM6IHsgcmFuZ2U6IFttaW5WYWx1ZSwgbWF4VmFsdWVdIH0sXG4gICAgICAgICAgc2hhcGU6IHRoaXMuY2hhcnRUeXBlLFxuICAgICAgICAgIGJnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBiYXI6IHsgY29sb3I6IGNvbG9yc1swXSB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBsZXZlbCxcbiAgICAgICAgdGV4dDogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZG9tYWluOiB7IHg6IFswLCAxXSwgeTogWzAsIDFdIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgdmFyIGxheW91dCA9IHtcbiAgICAgIHdpZHRoOiA2MDAsXG4gICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvclxuICAgIH07XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UsXG4gICAgICBzdGF0aWNQbG90OiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMuY2hhcnQgPSBQbG90bHkubmV3UGxvdCh0aGlzLmNoYXJ0Tm9kZSwgZGF0YSwgbGF5b3V0LCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuY3JlYXRlQ2hhcnQoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGFydE5vZGUpO1xuICB9XG5cbiAgZ2V0IHJlc3VsdCgpIHtcbiAgICBpZiAodGhpcy5fcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvd0RhdGEgPT4ge1xuICAgICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSArcm93RGF0YVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XG4gICAgICAgICAgcXVlc3Rpb25WYWx1ZXMucHVzaChxdWVzdGlvblZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHF1ZXN0aW9uVmFsdWVzICYmIChxdWVzdGlvblZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIHF1ZXN0aW9uVmFsdWVzLmxlbmd0aCkgfHwgMDtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IE1hdGguY2VpbCh0aGlzLl9yZXN1bHQgKiAxMDApIC8gMTAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcInJhdGluZ1wiLCBHYXVnZVBsb3RseSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsImV4cG9ydCB2YXIgc3RvcFdvcmRzID0gbmV3IEFycmF5KFxuICBcImFcIixcbiAgXCJhYm91dFwiLFxuICBcImFib3ZlXCIsXG4gIFwiYWNyb3NzXCIsXG4gIFwiYWZ0ZXJcIixcbiAgXCJhZ2FpblwiLFxuICBcImFnYWluc3RcIixcbiAgXCJhbGxcIixcbiAgXCJhbG1vc3RcIixcbiAgXCJhbG9uZVwiLFxuICBcImFsb25nXCIsXG4gIFwiYWxyZWFkeVwiLFxuICBcImFsc29cIixcbiAgXCJhbHRob3VnaFwiLFxuICBcImFsd2F5c1wiLFxuICBcImFtb25nXCIsXG4gIFwiYW5cIixcbiAgXCJhbmRcIixcbiAgXCJhbm90aGVyXCIsXG4gIFwiYW55XCIsXG4gIFwiYW55Ym9keVwiLFxuICBcImFueW9uZVwiLFxuICBcImFueXRoaW5nXCIsXG4gIFwiYW55d2hlcmVcIixcbiAgXCJhcmVcIixcbiAgXCJhcmVhXCIsXG4gIFwiYXJlYXNcIixcbiAgXCJhcm91bmRcIixcbiAgXCJhc1wiLFxuICBcImFza1wiLFxuICBcImFza2VkXCIsXG4gIFwiYXNraW5nXCIsXG4gIFwiYXNrc1wiLFxuICBcImF0XCIsXG4gIFwiYXdheVwiLFxuICBcImJcIixcbiAgXCJiYWNrXCIsXG4gIFwiYmFja2VkXCIsXG4gIFwiYmFja2luZ1wiLFxuICBcImJhY2tzXCIsXG4gIFwiYmVcIixcbiAgXCJiZWNhbWVcIixcbiAgXCJiZWNhdXNlXCIsXG4gIFwiYmVjb21lXCIsXG4gIFwiYmVjb21lc1wiLFxuICBcImJlZW5cIixcbiAgXCJiZWZvcmVcIixcbiAgXCJiZWdhblwiLFxuICBcImJlaGluZFwiLFxuICBcImJlaW5nXCIsXG4gIFwiYmVpbmdzXCIsXG4gIFwiYmVzdFwiLFxuICBcImJldHRlclwiLFxuICBcImJldHdlZW5cIixcbiAgXCJiaWdcIixcbiAgXCJib3RoXCIsXG4gIFwiYnV0XCIsXG4gIFwiYnlcIixcbiAgXCJjXCIsXG4gIFwiY2FtZVwiLFxuICBcImNhblwiLFxuICBcImNhbm5vdFwiLFxuICBcImNhc2VcIixcbiAgXCJjYXNlc1wiLFxuICBcImNlcnRhaW5cIixcbiAgXCJjZXJ0YWlubHlcIixcbiAgXCJjbGVhclwiLFxuICBcImNsZWFybHlcIixcbiAgXCJjb21lXCIsXG4gIFwiY291bGRcIixcbiAgXCJkXCIsXG4gIFwiZGlkXCIsXG4gIFwiZGlmZmVyXCIsXG4gIFwiZGlmZmVyZW50XCIsXG4gIFwiZGlmZmVyZW50bHlcIixcbiAgXCJkb1wiLFxuICBcImRvZXNcIixcbiAgXCJkb25lXCIsXG4gIFwiZG93blwiLFxuICBcImRvd25cIixcbiAgXCJkb3duZWRcIixcbiAgXCJkb3duaW5nXCIsXG4gIFwiZG93bnNcIixcbiAgXCJkdXJpbmdcIixcbiAgXCJlXCIsXG4gIFwiZWFjaFwiLFxuICBcImVhcmx5XCIsXG4gIFwiZWl0aGVyXCIsXG4gIFwiZW5kXCIsXG4gIFwiZW5kZWRcIixcbiAgXCJlbmRpbmdcIixcbiAgXCJlbmRzXCIsXG4gIFwiZW5vdWdoXCIsXG4gIFwiZXZlblwiLFxuICBcImV2ZW5seVwiLFxuICBcImV2ZXJcIixcbiAgXCJldmVyeVwiLFxuICBcImV2ZXJ5Ym9keVwiLFxuICBcImV2ZXJ5b25lXCIsXG4gIFwiZXZlcnl0aGluZ1wiLFxuICBcImV2ZXJ5d2hlcmVcIixcbiAgXCJmXCIsXG4gIFwiZmFjZVwiLFxuICBcImZhY2VzXCIsXG4gIFwiZmFjdFwiLFxuICBcImZhY3RzXCIsXG4gIFwiZmFyXCIsXG4gIFwiZmVsdFwiLFxuICBcImZld1wiLFxuICBcImZpbmRcIixcbiAgXCJmaW5kc1wiLFxuICBcImZpcnN0XCIsXG4gIFwiZm9yXCIsXG4gIFwiZm91clwiLFxuICBcImZyb21cIixcbiAgXCJmdWxsXCIsXG4gIFwiZnVsbHlcIixcbiAgXCJmdXJ0aGVyXCIsXG4gIFwiZnVydGhlcmVkXCIsXG4gIFwiZnVydGhlcmluZ1wiLFxuICBcImZ1cnRoZXJzXCIsXG4gIFwiZ1wiLFxuICBcImdhdmVcIixcbiAgXCJnZW5lcmFsXCIsXG4gIFwiZ2VuZXJhbGx5XCIsXG4gIFwiZ2V0XCIsXG4gIFwiZ2V0c1wiLFxuICBcImdpdmVcIixcbiAgXCJnaXZlblwiLFxuICBcImdpdmVzXCIsXG4gIFwiZ29cIixcbiAgXCJnb2luZ1wiLFxuICBcImdvb2RcIixcbiAgXCJnb29kc1wiLFxuICBcImdvdFwiLFxuICBcImdyZWF0XCIsXG4gIFwiZ3JlYXRlclwiLFxuICBcImdyZWF0ZXN0XCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJncm91cGVkXCIsXG4gIFwiZ3JvdXBpbmdcIixcbiAgXCJncm91cHNcIixcbiAgXCJoXCIsXG4gIFwiaGFkXCIsXG4gIFwiaGFzXCIsXG4gIFwiaGF2ZVwiLFxuICBcImhhdmluZ1wiLFxuICBcImhlXCIsXG4gIFwiaGVyXCIsXG4gIFwiaGVyZVwiLFxuICBcImhlcnNlbGZcIixcbiAgXCJoaWdoXCIsXG4gIFwiaGlnaFwiLFxuICBcImhpZ2hcIixcbiAgXCJoaWdoZXJcIixcbiAgXCJoaWdoZXN0XCIsXG4gIFwiaGltXCIsXG4gIFwiaGltc2VsZlwiLFxuICBcImhpc1wiLFxuICBcImhvd1wiLFxuICBcImhvd2V2ZXJcIixcbiAgXCJpXCIsXG4gIFwiaWZcIixcbiAgXCJpbXBvcnRhbnRcIixcbiAgXCJpblwiLFxuICBcImludGVyZXN0XCIsXG4gIFwiaW50ZXJlc3RlZFwiLFxuICBcImludGVyZXN0aW5nXCIsXG4gIFwiaW50ZXJlc3RzXCIsXG4gIFwiaW50b1wiLFxuICBcImlzXCIsXG4gIFwiaXRcIixcbiAgXCJpdHNcIixcbiAgXCJpdHNlbGZcIixcbiAgXCJqXCIsXG4gIFwianVzdFwiLFxuICBcImtcIixcbiAgXCJrZWVwXCIsXG4gIFwia2VlcHNcIixcbiAgXCJraW5kXCIsXG4gIFwia25ld1wiLFxuICBcImtub3dcIixcbiAgXCJrbm93blwiLFxuICBcImtub3dzXCIsXG4gIFwibFwiLFxuICBcImxhcmdlXCIsXG4gIFwibGFyZ2VseVwiLFxuICBcImxhc3RcIixcbiAgXCJsYXRlclwiLFxuICBcImxhdGVzdFwiLFxuICBcImxlYXN0XCIsXG4gIFwibGVzc1wiLFxuICBcImxldFwiLFxuICBcImxldHNcIixcbiAgXCJsaWtlXCIsXG4gIFwibGlrZWx5XCIsXG4gIFwibG9uZ1wiLFxuICBcImxvbmdlclwiLFxuICBcImxvbmdlc3RcIixcbiAgXCJtXCIsXG4gIFwibWFkZVwiLFxuICBcIm1ha2VcIixcbiAgXCJtYWtpbmdcIixcbiAgXCJtYW5cIixcbiAgXCJtYW55XCIsXG4gIFwibWF5XCIsXG4gIFwibWVcIixcbiAgXCJtZW1iZXJcIixcbiAgXCJtZW1iZXJzXCIsXG4gIFwibWVuXCIsXG4gIFwibWlnaHRcIixcbiAgXCJtb3JlXCIsXG4gIFwibW9zdFwiLFxuICBcIm1vc3RseVwiLFxuICBcIm1yXCIsXG4gIFwibXJzXCIsXG4gIFwibXVjaFwiLFxuICBcIm11c3RcIixcbiAgXCJteVwiLFxuICBcIm15c2VsZlwiLFxuICBcIm5cIixcbiAgXCJuZWNlc3NhcnlcIixcbiAgXCJuZWVkXCIsXG4gIFwibmVlZGVkXCIsXG4gIFwibmVlZGluZ1wiLFxuICBcIm5lZWRzXCIsXG4gIFwibmV2ZXJcIixcbiAgXCJuZXdcIixcbiAgXCJuZXdcIixcbiAgXCJuZXdlclwiLFxuICBcIm5ld2VzdFwiLFxuICBcIm5leHRcIixcbiAgXCJub1wiLFxuICBcIm5vYm9keVwiLFxuICBcIm5vblwiLFxuICBcIm5vb25lXCIsXG4gIFwibm90XCIsXG4gIFwibm90aGluZ1wiLFxuICBcIm5vd1wiLFxuICBcIm5vd2hlcmVcIixcbiAgXCJudW1iZXJcIixcbiAgXCJudW1iZXJzXCIsXG4gIFwib1wiLFxuICBcIm9mXCIsXG4gIFwib2ZmXCIsXG4gIFwib2Z0ZW5cIixcbiAgXCJvbGRcIixcbiAgXCJvbGRlclwiLFxuICBcIm9sZGVzdFwiLFxuICBcIm9uXCIsXG4gIFwib25jZVwiLFxuICBcIm9uZVwiLFxuICBcIm9ubHlcIixcbiAgXCJvcGVuXCIsXG4gIFwib3BlbmVkXCIsXG4gIFwib3BlbmluZ1wiLFxuICBcIm9wZW5zXCIsXG4gIFwib3JcIixcbiAgXCJvcmRlclwiLFxuICBcIm9yZGVyZWRcIixcbiAgXCJvcmRlcmluZ1wiLFxuICBcIm9yZGVyc1wiLFxuICBcIm90aGVyXCIsXG4gIFwib3RoZXJzXCIsXG4gIFwib3VyXCIsXG4gIFwib3V0XCIsXG4gIFwib3ZlclwiLFxuICBcInBcIixcbiAgXCJwYXJ0XCIsXG4gIFwicGFydGVkXCIsXG4gIFwicGFydGluZ1wiLFxuICBcInBhcnRzXCIsXG4gIFwicGVyXCIsXG4gIFwicGVyaGFwc1wiLFxuICBcInBsYWNlXCIsXG4gIFwicGxhY2VzXCIsXG4gIFwicG9pbnRcIixcbiAgXCJwb2ludGVkXCIsXG4gIFwicG9pbnRpbmdcIixcbiAgXCJwb2ludHNcIixcbiAgXCJwb3NzaWJsZVwiLFxuICBcInByZXNlbnRcIixcbiAgXCJwcmVzZW50ZWRcIixcbiAgXCJwcmVzZW50aW5nXCIsXG4gIFwicHJlc2VudHNcIixcbiAgXCJwcm9ibGVtXCIsXG4gIFwicHJvYmxlbXNcIixcbiAgXCJwdXRcIixcbiAgXCJwdXRzXCIsXG4gIFwicVwiLFxuICBcInF1aXRlXCIsXG4gIFwiclwiLFxuICBcInJhdGhlclwiLFxuICBcInJlYWxseVwiLFxuICBcInJpZ2h0XCIsXG4gIFwicmlnaHRcIixcbiAgXCJyb29tXCIsXG4gIFwicm9vbXNcIixcbiAgXCJzXCIsXG4gIFwic2FpZFwiLFxuICBcInNhbWVcIixcbiAgXCJzYXdcIixcbiAgXCJzYXlcIixcbiAgXCJzYXlzXCIsXG4gIFwic2Vjb25kXCIsXG4gIFwic2Vjb25kc1wiLFxuICBcInNlZVwiLFxuICBcInNlZW1cIixcbiAgXCJzZWVtZWRcIixcbiAgXCJzZWVtaW5nXCIsXG4gIFwic2VlbXNcIixcbiAgXCJzZWVzXCIsXG4gIFwic2V2ZXJhbFwiLFxuICBcInNoYWxsXCIsXG4gIFwic2hlXCIsXG4gIFwic2hvdWxkXCIsXG4gIFwic2hvd1wiLFxuICBcInNob3dlZFwiLFxuICBcInNob3dpbmdcIixcbiAgXCJzaG93c1wiLFxuICBcInNpZGVcIixcbiAgXCJzaWRlc1wiLFxuICBcInNpbmNlXCIsXG4gIFwic21hbGxcIixcbiAgXCJzbWFsbGVyXCIsXG4gIFwic21hbGxlc3RcIixcbiAgXCJzb1wiLFxuICBcInNvbWVcIixcbiAgXCJzb21lYm9keVwiLFxuICBcInNvbWVvbmVcIixcbiAgXCJzb21ldGhpbmdcIixcbiAgXCJzb21ld2hlcmVcIixcbiAgXCJzdGF0ZVwiLFxuICBcInN0YXRlc1wiLFxuICBcInN0aWxsXCIsXG4gIFwic3RpbGxcIixcbiAgXCJzdWNoXCIsXG4gIFwic3VyZVwiLFxuICBcInRcIixcbiAgXCJ0YWtlXCIsXG4gIFwidGFrZW5cIixcbiAgXCJ0aGFuXCIsXG4gIFwidGhhdFwiLFxuICBcInRoZVwiLFxuICBcInRoZWlyXCIsXG4gIFwidGhlbVwiLFxuICBcInRoZW5cIixcbiAgXCJ0aGVyZVwiLFxuICBcInRoZXJlZm9yZVwiLFxuICBcInRoZXNlXCIsXG4gIFwidGhleVwiLFxuICBcInRoaW5nXCIsXG4gIFwidGhpbmdzXCIsXG4gIFwidGhpbmtcIixcbiAgXCJ0aGlua3NcIixcbiAgXCJ0aGlzXCIsXG4gIFwidGhvc2VcIixcbiAgXCJ0aG91Z2hcIixcbiAgXCJ0aG91Z2h0XCIsXG4gIFwidGhvdWdodHNcIixcbiAgXCJ0aHJlZVwiLFxuICBcInRocm91Z2hcIixcbiAgXCJ0aHVzXCIsXG4gIFwidG9cIixcbiAgXCJ0b2RheVwiLFxuICBcInRvZ2V0aGVyXCIsXG4gIFwidG9vXCIsXG4gIFwidG9va1wiLFxuICBcInRvd2FyZFwiLFxuICBcInR1cm5cIixcbiAgXCJ0dXJuZWRcIixcbiAgXCJ0dXJuaW5nXCIsXG4gIFwidHVybnNcIixcbiAgXCJ0d29cIixcbiAgXCJ1XCIsXG4gIFwidW5kZXJcIixcbiAgXCJ1bnRpbFwiLFxuICBcInVwXCIsXG4gIFwidXBvblwiLFxuICBcInVzXCIsXG4gIFwidXNlXCIsXG4gIFwidXNlZFwiLFxuICBcInVzZXNcIixcbiAgXCJ2XCIsXG4gIFwidmVyeVwiLFxuICBcIndcIixcbiAgXCJ3YW50XCIsXG4gIFwid2FudGVkXCIsXG4gIFwid2FudGluZ1wiLFxuICBcIndhbnRzXCIsXG4gIFwid2FzXCIsXG4gIFwid2F5XCIsXG4gIFwid2F5c1wiLFxuICBcIndlXCIsXG4gIFwid2VsbFwiLFxuICBcIndlbGxzXCIsXG4gIFwid2VudFwiLFxuICBcIndlcmVcIixcbiAgXCJ3aGF0XCIsXG4gIFwid2hlblwiLFxuICBcIndoZXJlXCIsXG4gIFwid2hldGhlclwiLFxuICBcIndoaWNoXCIsXG4gIFwid2hpbGVcIixcbiAgXCJ3aG9cIixcbiAgXCJ3aG9sZVwiLFxuICBcIndob3NlXCIsXG4gIFwid2h5XCIsXG4gIFwid2lsbFwiLFxuICBcIndpdGhcIixcbiAgXCJ3aXRoaW5cIixcbiAgXCJ3aXRob3V0XCIsXG4gIFwid29ya1wiLFxuICBcIndvcmtlZFwiLFxuICBcIndvcmtpbmdcIixcbiAgXCJ3b3Jrc1wiLFxuICBcIndvdWxkXCIsXG4gIFwieFwiLFxuICBcInlcIixcbiAgXCJ5ZWFyXCIsXG4gIFwieWVhcnNcIixcbiAgXCJ5ZXRcIixcbiAgXCJ5b3VcIixcbiAgXCJ5b3VuZ1wiLFxuICBcInlvdW5nZXJcIixcbiAgXCJ5b3VuZ2VzdFwiLFxuICBcInlvdXJcIixcbiAgXCJ5b3Vyc1wiLFxuICBcInpcIlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JkY2xvdWQvc3RvcHdvcmRzL2VuZ2xpc2gudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwid29yZGNsb3VkXCIsXCJjb21tb25qc1wiOlwid29yZGNsb3VkXCIsXCJhbWRcIjpcIndvcmRjbG91ZFwifVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL2RhdGF0YWJsZXMvZGF0YXRhYmxlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGxvdGx5L2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi93b3JkY2xvdWQvd29yZGNsb3VkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93b3JkY2xvdWQvc3RvcHdvcmRzL2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90ZXh0XCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9