/*!
 * surveyjs - SurveyJS Analytics library v1.5.5
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
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase_scss__ = __webpack_require__(21);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_english__ = __webpack_require__(27);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectBase__ = __webpack_require__(10);
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
        var colors = this.getColors();
        var traces = [];
        if (this.orderByAnsweres == "asc" || this.orderByAnsweres == "desc") {
            var dict = this.sortDictionary(this.zipArrays(labels, colors), datasets[0], this.orderByAnsweres == "desc");
            var labelsAndColors = this.unzipArrays(dict.keys);
            labels = labelsAndColors.first;
            colors = labelsAndColors.second;
            datasets[0] = dict.values;
        }
        var traceConfig = {
            type: chartType,
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
        if (this.chartType === "pie" || this.chartType === "doughnut") {
            traceConfig.marker.colors = colors;
        }
        else if (this.chartType === "bar") {
            traceConfig.marker.color = colors;
        }
        if (this.chartType === "doughnut") {
            traceConfig.type = "pie";
            traceConfig.hole = 0.4;
        }
        if (datasets.length === 1) {
            traceConfig.marker.symbol = "circle";
            traceConfig.marker.size = 16;
        }
        datasets.forEach(function (dataset) {
            if (_this.chartType === "pie" || _this.chartType === "doughnut") {
                traces.push(Object.assign({}, traceConfig, {
                    values: dataset,
                    labels: labels
                }));
            }
            else {
                traces.push(Object.assign({}, traceConfig, { x: dataset }));
            }
        });
        var height = chartType === "pie" || this.chartType === "doughnut"
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
    SelectBasePlotly.types = ["bar", "pie", "doughnut", "scatter"];
    return SelectBasePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__selectBase__["a" /* SelectBase */]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alternativeVizualizersWrapper__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectBase__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationPanel; });



var Muuri = __webpack_require__(23);





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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__english__ = __webpack_require__(32);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBase; });





var SelectBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBase, _super);
    function SelectBase(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.selectedItem = undefined;
        _this.orderByAnsweres = "default";
        _this.chartNode = document.createElement("div");
        return _this;
    }
    SelectBase.prototype.onChartTypeChanged = function () { };
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
    SelectBase.prototype.setLabelsOrder = function (value) {
        this.orderByAnsweres = value;
    };
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
            }), function (option) { return _this.chartType === option.value; }, function (e) {
                _this.setChartType(e.target.value);
                _this.onChartTypeChanged();
            });
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
    SelectBase.prototype.zipArrays = function (first, second) {
        var zipArray = [];
        for (var i = 0; i < Math.min(first.length, second.length); i++) {
            zipArray[i] = [first[i], second[i]];
        }
        return zipArray;
    };
    SelectBase.prototype.unzipArrays = function (zipArray) {
        var twoArrays = { first: [], second: [] };
        zipArray.forEach(function (value, i) {
            twoArrays.first[i] = value[0];
            twoArrays.second[i] = value[1];
        });
        return twoArrays;
    };
    SelectBase.prototype.sortDictionary = function (keys, values, desc) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatables_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__datatables_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTables; });





if (!!document) {
    var svgTemplate = __webpack_require__(22);
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.append(templateHolder);
}
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
        this.createSvgElement = function (path) {
            var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
            useElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sa-svg-" + path);
            svgElem.appendChild(useElem);
            return svgElem;
        };
        this.createHideButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.title = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("hideColumn");
            button.className = "sa-datatables__svg-button";
            button.appendChild(_this.createSvgElement("hide"));
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].visibility =
                    __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible;
                datatableApi.columns([colIdx]).visible(false);
                // TODO: Use datatables to update headers (show columns options)
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        this.createAddColumnButton = function (datatableApi) {
            var selector = document.createElement("select");
            selector.className = "sa-datatables__add-column";
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
                datatableApi.column(column.name + ":name").visible(true);
                // TODO: Use datatables to update headers (show columns options)
                self.update();
                self.onColumnsChanged();
            };
            return selector;
        };
        this.createDragButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.className = "sa-datatables__svg-button sa-datatables__drag-button";
            button.appendChild(_this.createSvgElement("drag"));
            button.onclick = function (e) {
                e.stopPropagation();
            };
            return button;
        };
        this.createSortButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            var descTitle = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("descOrder");
            var ascTitle = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("ascOrder");
            button.className = "sa-datatables__svg-button";
            button.title = ascTitle;
            button.appendChild(_this.createSvgElement("sorting"));
            button.onclick = function (e) {
                button.title = button.title == ascTitle ? descTitle : ascTitle;
            };
            button.ondrag = function (e) {
                e.stopPropagation;
            };
            return button;
        };
        this.createMoveToDetailButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.title = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("moveToDetail");
            button.className = "sa-datatables__svg-button";
            button.appendChild(_this.createSvgElement("movetodetails"));
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location =
                    __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Row;
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        this.createShowAsColumnButton = function (columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("showAsColumn");
            button.className = "sa-datatables__button sa-datatables__button--gray";
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location =
                    __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Column;
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        targetNode.className += "sa-datatables";
        this.headerButtonCreators = [
            // this.createGroupingButton,
            this.createSortButton,
            this.createHideButton,
            this.createMoveToDetailButton,
            this.createDragButton
        ];
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
                dataItem[column.name] =
                    typeof displayValue === "string"
                        ? displayValue
                        : JSON.stringify(displayValue) || "";
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
                dataType: question.getType() !== "file"
                    ? __WEBPACK_IMPORTED_MODULE_2__config__["c" /* ColumnDataType */].Text
                    : __WEBPACK_IMPORTED_MODULE_2__config__["c" /* ColumnDataType */].FileLink,
                visibility: question.getType() !== "file"
                    ? __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible
                    : __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible,
                location: __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Column
            };
        });
    };
    DataTables.prototype.isVisible = function (visibility) {
        return ((this.isTrustedAccess && visibility !== __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible) ||
            (!this.isTrustedAccess && visibility === __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible));
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
            __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode)
                .DataTable()
                .destroy();
        }
        this.datatableApi = undefined;
        this.targetNode.innerHTML = "";
    };
    DataTables.prototype.createActionContainer = function () {
        var container = document.createElement("div");
        container.className = "sa-datatables__action-container";
        return container;
    };
    DataTables.prototype.createMinorColumnsButton = function () {
        var button = document.createElement("button");
        button.title = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("showMinorColumns");
        button.className = "sa-datatables__svg-button";
        button.appendChild(this.createSvgElement("detail"));
        return button;
    };
    DataTables.prototype.setMinorColumnsButtonCallback = function (datatableApiRef) {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_0_jquery__("td.sa-datatables__action-column button.sa-datatables__svg-button").on("click", function () {
            var detailTr = __WEBPACK_IMPORTED_MODULE_0_jquery__(this).closest("tr");
            var row = datatableApiRef.row(detailTr);
            if (detailTr.hasClass("sa-datatables__detail-row")) {
                detailTr.nextAll("tr.sa-datatables__detail").remove();
                detailTr.removeClass("sa-datatables__detail-row");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_0_jquery__(self.createDetailMarkup(row.data())).insertAfter(detailTr);
                detailTr.addClass("sa-datatables__detail-row");
            }
        });
    };
    DataTables.prototype.render = function () {
        var _this = this;
        var self = this;
        var tableNode = document.createElement("table");
        var columns = this.getColumns();
        var columnsData = columns.map(function (c) { return c.data; });
        var dtButtonClass = "sa-datatables__button sa-datatables__button--small sa-datatables__button--gray";
        var options = __WEBPACK_IMPORTED_MODULE_0_jquery__["extend"](true, {
            buttons: [
                { extend: "copy", className: dtButtonClass },
                { extend: "csv", className: dtButtonClass },
                { extend: "print", className: dtButtonClass }
            ],
            dom: "Bfplrtip",
            data: this.tableData,
            pageLength: 5,
            lengthMenu: [1, 5, 10, 25, 50, 75, 100],
            responsive: false,
            scrollX: true,
            columns: columns,
            colReorder: {
                fixedColumnsLeft: 1,
                realtime: false
            },
            // orderFixed: [[1, "asc"]],
            rowGroup: {
                dataSrc: columnsData[0],
                endRender: function (rows, group) {
                    return "Count: " + rows.data().count();
                }
            },
            language: {
                sSearch: " ",
                searchPlaceholder: "Search...",
                sLengthMenu: "Show _MENU_ entries",
                paginate: {
                    previous: " ",
                    next: " "
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
                        var container = self.createActionContainer();
                        self.headerButtonCreators.forEach(function (creator) {
                            var element = creator(datatableApi, index, columnsData[index]);
                            if (!!element) {
                                container.appendChild(element);
                            }
                        });
                        var filterContainer = document.createElement("div");
                        filterContainer.className = "sa-datatables__filter-container";
                        filterContainer.innerHTML =
                            "<input type='text' placeholder='Search...' />";
                        var column = datatableApi.column(index);
                        __WEBPACK_IMPORTED_MODULE_0_jquery__("input", __WEBPACK_IMPORTED_MODULE_0_jquery__(filterContainer)).on("click", function (e) {
                            return e.stopPropagation();
                        });
                        __WEBPACK_IMPORTED_MODULE_0_jquery__("input", __WEBPACK_IMPORTED_MODULE_0_jquery__(filterContainer)).on("keyup change", function () {
                            var value = this.value;
                            if (column.search() !== value) {
                                column.search(value).draw();
                            }
                        });
                        $thNode.prepend(filterContainer);
                        $thNode.prepend(container);
                    }
                });
            },
        }, this.options);
        this.targetNode.appendChild(tableNode);
        tableNode.width = "100%";
        tableNode.className = "sa-datatables__table display responsive dataTable";
        var datatableApiRef = (this.datatableApi = __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).DataTable(options));
        this.datatableApi
            .rowGroup()
            .enable(false)
            .draw();
        // this.datatableApi.on("rowgroup-datasrc", (e, dt, val) => {
        //   this.datatableApi.order.fixed({ pre: [[columnsData.indexOf(val), "asc"]] }).draw();
        // });
        var target = __WEBPACK_IMPORTED_MODULE_0_jquery__(this.targetNode).find(".dataTables_filter");
        var button = this.createAddColumnButton(this.datatableApi);
        __WEBPACK_IMPORTED_MODULE_0_jquery__(button).insertAfter(target[0]);
        datatableApiRef.on("column-reorder", function (e, settings, details) {
            if (details.drop) {
                var deletedColumns = _this._columns.splice(details.from - 1, 1);
                _this._columns.splice(details.to - 1, 0, deletedColumns[0]);
                var headerCell = __WEBPACK_IMPORTED_MODULE_0_jquery__(datatableApiRef.column(details.to).header());
                _this.setMinorColumnsButtonCallback(datatableApiRef);
                _this.onColumnsChanged();
            }
        });
        this.setMinorColumnsButtonCallback(datatableApiRef);
    };
    DataTables.prototype.createDetailMarkup = function (data) {
        var _this = this;
        // var table = document.createElement("table");
        // table.cellPadding = "5";
        // table.cellSpacing = "0";
        // table.border = "0";
        // table.className = "sa-datatables__detail";
        var rows = [];
        var self = this;
        var visibleColCount = self.columns.filter(function (column) {
            return column.location === __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Column &&
                _this.isVisible(column.visibility);
        }).length;
        this.columns
            .filter(function (column) {
            return column.location === __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Row &&
                _this.isVisible(column.visibility);
        })
            .forEach(function (column) {
            var row = document.createElement("tr");
            row.className = "sa-datatables__detail";
            var td1 = document.createElement("td");
            td1.textContent = column.displayName;
            td1.colSpan = 2;
            var td2 = document.createElement("td");
            td2.textContent = data[column.name];
            var td3 = document.createElement("td");
            td3.colSpan = Math.max(visibleColCount - 2, 1);
            self.detailButtonCreators.forEach(function (creator) {
                return td3.appendChild(creator(column.name));
            });
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            rows.push(row);
        });
        // if (!!this.datatableApi && this.datatableApi.responsive.hasHidden()) {
        //   var columnsVisibility = this.datatableApi.columns().responsiveHidden();
        //   var columns = this.datatableApi.settings().init().columns;
        //   for (var index = 0; index < columnsVisibility.length; index++) {
        //     if (!columnsVisibility[index]) {
        //       var column = columns[index];
        //       var row = document.createElement("tr");
        //       row.className = "sa-datatables__detail";
        //       var td1 = document.createElement("td");
        //       td1.textContent = column.sTitle;
        //       var td2 = document.createElement("td");
        //       td2.textContent = data[column.mData];
        //       var td3 = document.createElement("td");
        //       //this.detailButtonCreators.forEach(creator => td3.appendChild(creator(column.mData)));
        //       row.appendChild(td1);
        //       row.appendChild(td2);
        //       row.appendChild(td3);
        //       rows.push(row);
        //     }
        //   }
        // }
        if (!!this.renderDetailActions) {
            var row = document.createElement("tr");
            row.className = "sa-datatables__detail";
            var td = document.createElement("td");
            td.colSpan = visibleColCount + 1;
            row.appendChild(td);
            // var td1 = document.createElement("td");
            // row.appendChild(td1);
            // var td2 = document.createElement("td");
            // row.appendChild(td2);
            rows.push(row);
            this.renderDetailActions(td, data);
        }
        return rows;
    };
    DataTables.prototype.doStateSave = function () {
        this.datatableApi.state.save();
    };
    DataTables.prototype.stateSaveCallback = function (settings, data) { };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var availableColumns = this.columns.filter(function (column) {
            return column.location === __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Column &&
                _this.isVisible(column.visibility);
        });
        var columns = availableColumns.map(function (column, index) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                data: column.name,
                sTitle: (question && question.title) || column.displayName,
                visible: column.visibility !== __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible,
                mRender: function (data, type, row) { return row[column.name]; }
            };
        });
        return [
            {
                className: "sa-datatables__action-column",
                orderable: false,
                data: null,
                defaultContent: this.createMinorColumnsButton().outerHTML
            }
        ].concat(columns);
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localizationManager__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return __WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatables_datatables__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return __WEBPACK_IMPORTED_MODULE_6__datatables_datatables__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plotly_index__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "canLoadPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBaseSortablePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordcloud_wordcloud__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return __WEBPACK_IMPORTED_MODULE_8__wordcloud_wordcloud__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordcloud_stopwords_index__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return __WEBPACK_IMPORTED_MODULE_9__wordcloud_stopwords_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__text__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_10__text__["a"]; });













/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectBase__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__matrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__boolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectBaseSortable__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__selectBaseSortable__["a"]; });







/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_scss__ = __webpack_require__(19);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(1);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wordcloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationManager__ = __webpack_require__(1);
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<svg style=\"display:none;\"><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-detail\"><circle class=\"st0\" cx=\"1.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"8.5\" r=\"1.5\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-drag\"><path class=\"st0\" d=\"M13 5l-1 1 1 1H9V3l1 1 1-1-3-3-3 3 1 1 1-1v4H3l1-1-1-1-3 3 3 3 1-1-1-1h4v4l-1-1-1 1 3 3 3-3-1-1-1 1V9h4l-1 1 1 1 3-3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-hide\"><path class=\"st1\" d=\"M12.79 4.2L16 1l-1-1-3.32 3.32C10.57 2.55 9.32 2 8 2 3.63 2 0 7.97 0 7.97s1.27 2.1 3.21 3.82l-3.23 3.23.98.98 3.35-3.34C5.41 13.44 6.67 14 8 14c4.37 0 8-6 8-6s-1.27-2.09-3.21-3.8zM2 7.97c1.07-1.47 3.61-4 6-4 .8 0 1.6.27 2.35.68l-.78.78c-.46-.29-.99-.46-1.57-.46-1.66 0-3 1.34-3 3 0 .58.17 1.11.46 1.57l-.97.97A13.38 13.38 0 0 1 2 7.97zm6 4c-.8 0-1.59-.27-2.33-.67l.78-.77c.45.27.98.44 1.55.44 1.66 0 3-1.34 3-3 0-.57-.17-1.09-.44-1.55l.98-.98c1.11.87 2.01 1.91 2.46 2.52-1.07 1.48-3.61 4.01-6 4.01z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-movetodetails\"><circle class=\"st0\" cx=\"1.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"14.5\" r=\"1.5\"></circle><path class=\"st0\" d=\"M12 1h3v9h-3zM2.02 7.02L1 6 0 7l3 3 3-3-1-1-.94.94C4.33 4.73 6.21 3 8.5 3c.17 0 .33.03.5.05V1.03C8.83 1.01 8.67 1 8.5 1 5.08 1 2.27 3.66 2.02 7.02z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-sorting\"><path class=\"st0\" d=\"M8 3l2 2 1-1-3-3-3 3 1 1zM8 13l-2-2-1 1 3 3 3-3-1-1z\"></path></symbol></svg>";

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(4);
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
    chartType_stackedbar: "Stacked Bar",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Hide",
    resetFilter: "Reset Filter",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns"
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//localization.locales["en"] = englishStrings;
//localization.localeNames["en"] = "English";


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
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
        if (this.chartType === "pie" || this.chartType === "doughnut") {
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
    BooleanPlotly.types = ["pie", "bar", "doughnut"];
    return BooleanPlotly;
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("boolean", BooleanPlotly);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixPlotly; });




var MatrixPlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixPlotly, _super);
    function MatrixPlotly(targetNode, question, data, options) {
        var _this = _super.call(this, targetNode, question, data, options) || this;
        _this.chartTypes = MatrixPlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    MatrixPlotly.prototype.patchConfigParameters = function (chartNode, traces, layout, config) {
        var _this = this;
        var question = this.question;
        //var valueTitles = question.columns.map(column => column.text);
        if (this.chartType === "pie" || this.chartType === "doughnut") {
            layout.grid = { rows: 1, columns: traces.length };
        }
        else if (this.chartType === "stackedbar") {
            layout.height = undefined;
            layout.barmode = 'stack';
        }
        else {
            layout.height = undefined;
        }
        question.columns.forEach(function (column, index) {
            if (_this.chartType === "pie" || _this.chartType === "doughnut") {
                traces[index].domain = { column: index };
            }
            else {
                traces[index].hoverinfo = "x+name";
                traces[index].marker.color = undefined;
                if (_this.chartType === "stackedbar") {
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
    MatrixPlotly.types = ["bar", "stackedbar", "pie", "doughnut"];
    return MatrixPlotly;
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrix", MatrixPlotly);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(4);
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
    GaugePlotly.prototype.toPercentage = function (value, maxValue) {
        return (value / maxValue) * 100;
    };
    GaugePlotly.prototype.createChart = function () {
        var question = this.question;
        var rateValues = question.visibleRateValues;
        var maxValue = rateValues[rateValues.length - 1].value;
        var minValue = rateValues[0].value;
        var colors = this.generateColors(maxValue, minValue, GaugePlotly.stepsCount);
        var level = this.result;
        if (GaugePlotly.showAsPercentage) {
            level = this.toPercentage(level, maxValue);
            minValue = this.toPercentage(minValue, maxValue);
            maxValue = this.toPercentage(maxValue, maxValue);
        }
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
        var height = 400;
        if (this.chartType === "bullet") {
            height = 250;
        }
        var layout = {
            width: 600,
            height: height,
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
                this._result =
                    (questionValues_1 &&
                        questionValues_1.reduce(function (a, b) { return a + b; }, 0) / questionValues_1.length) ||
                        0;
                this._result = Math.ceil(this._result * 100) / 100;
            }
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    GaugePlotly.stepsCount = 5;
    GaugePlotly.types = ["gauge", "bullet"];
    GaugePlotly.showAsPercentage = false;
    return GaugePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("rating", GaugePlotly);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectBase__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBaseSortablePlotly; });




var SelectBaseSortablePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBaseSortablePlotly, _super);
    function SelectBaseSortablePlotly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectBaseSortablePlotly.prototype.onChartTypeChanged = function () {
        this.setLabelsOrder("default");
        this.updateOrderSelector();
    };
    SelectBaseSortablePlotly.prototype.updateOrderSelector = function () {
        if (this.chartType == "bar") {
            this.choicesOrder.style.display = "inline-block";
        }
        else {
            this.choicesOrder.style.display = "none";
            this.choicesOrder.getElementsByTagName("select")[0].value = "default";
        }
    };
    SelectBaseSortablePlotly.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 0) {
            this.choicesOrder = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* ToolbarHelper */].createSelector(toolbar, [
                { text: __WEBPACK_IMPORTED_MODULE_3____["localization"].getString("defaultOrder"), value: "default" },
                { text: __WEBPACK_IMPORTED_MODULE_3____["localization"].getString("ascOrder"), value: "asc" },
                { text: __WEBPACK_IMPORTED_MODULE_3____["localization"].getString("descOrder"), value: "desc" }
            ], function (option) { return false; }, function (e) {
                _this.setLabelsOrder(e.target.value);
                _this.update(_this.data);
            });
            _super.prototype.createToolbarItems.call(this, toolbar);
            toolbar.appendChild(this.choicesOrder);
        }
    };
    return SelectBaseSortablePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_3____["VisualizationManager"].registerVisualizer("checkbox", SelectBaseSortablePlotly);
__WEBPACK_IMPORTED_MODULE_3____["VisualizationManager"].registerVisualizer("radiogroup", SelectBaseSortablePlotly);
__WEBPACK_IMPORTED_MODULE_3____["VisualizationManager"].registerVisualizer("dropdown", SelectBaseSortablePlotly);
__WEBPACK_IMPORTED_MODULE_3____["VisualizationManager"].registerVisualizer("imagepicker", SelectBaseSortablePlotly);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stopWords; });
var stopWords = new Array("a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z");


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlOGE3ODVlZTYyOTFhZGVjODE5OSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6ZXJCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bsb3RseS9zZWxlY3RCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxpemF0aW9uUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBsb3RseVwiLFwiY29tbW9uanMyXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiY29tbW9uanNcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJhbWRcIjpcInBsb3RseS5qcy1kaXN0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JkY2xvdWQvd29yZGNsb3VkLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxpemF0aW9uUGFuZWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXplckJhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vfi9tdXVyaS9kaXN0L211dXJpLmpzIiwid2VicGFjazovLy8uL3NyYy9hbHRlcm5hdGl2ZVZpenVhbGl6ZXJzV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bsb3RseS9ib29sZWFuLnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvcmF0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvc2VsZWN0QmFzZVNvcnRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JkY2xvdWQvc3RvcHdvcmRzL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIldvcmRDbG91ZFwiLFwiY29tbW9uanMyXCI6XCJ3b3JkY2xvdWRcIixcImNvbW1vbmpzXCI6XCJ3b3JkY2xvdWRcIixcImFtZFwiOlwid29yZGNsb3VkXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEVPLElBQUksUUFBUSxHQUNYLE1BQU8sQ0FBQyxRQUFRLENBQUM7SUFDdkIsVUFBUyxNQUFXO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNiLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUVFLFNBQVUsU0FBUyxDQUFDLFNBQWMsRUFBRSxTQUFjO0lBQ3RELEtBQUssSUFBSSxDQUFDLElBQUksU0FBUztRQUNyQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxTQUFTLEVBQUU7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsU0FBUyxDQUFDLFNBQVM7UUFDakIsU0FBUyxLQUFLLElBQUk7WUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBVSxFQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFFTSxJQUFJLE1BQU0sR0FBRyxVQUFTLE1BQVcsRUFBRSxDQUFNO0lBQzlDLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUNyQixLQUFLLElBQUksWUFBWSxJQUFJLE1BQU07UUFDN0IsSUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztZQUMxRCxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFFM0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxJQUNFLE1BQU0sSUFBSSxJQUFJO1FBQ2QsT0FBYSxNQUFPLENBQUMsdUJBQXVCLENBQUMsS0FBSyxVQUFVO1FBRTVELEtBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNQLGVBQWUsR0FBUyxNQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFDbEUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQzFCLENBQUMsRUFBRTtZQUVILElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUlLLElBQUksVUFBVSxHQUFHLFVBQ3RCLFVBQWUsRUFDZixNQUFXLEVBQ1gsR0FBUSxFQUNSLElBQVM7SUFFVCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUN0QixDQUFDLEdBQ0MsQ0FBQyxHQUFHLENBQUM7UUFDSCxDQUFDLENBQUMsTUFBTTtRQUNSLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSTtZQUNmLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxDQUFDO0lBQ0osSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7UUFDdkUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBRXBELEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQ3BFZ0Q7QUFTbEQ7SUFBQTtJQW9CQSxDQUFDO0lBbEJRLHVDQUFrQixHQUF6QixVQUNFLFFBQWdCLEVBQ2hCLFdBQWtDO1FBRWxDLElBQUksV0FBVyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDakIsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUMxRDtRQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNNLG1DQUFjLEdBQXJCLFVBQXNCLFFBQWdCO1FBQ3BDLElBQUksV0FBVyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyx1RUFBYyxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBbEJNLGdDQUFXLEdBQXNELEVBQUUsQ0FBQztJQW1CN0UsMkJBQUM7Q0FBQTtBQXBCZ0M7Ozs7Ozs7Ozs7O0FDUkY7QUFFL0I7SUFJRSx3QkFDWSxhQUEwQixFQUM3QixRQUFrQixFQUNmLElBQXFDLEVBQ3JDLE9BQWdCO1FBSGhCLGtCQUFhLEdBQWIsYUFBYSxDQUFhO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFpQztRQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBTnJCLHdCQUFtQixHQUFpRSxFQUFFLENBQUM7UUFpRTlGLG9CQUFlLEdBQUcsU0FBUyxDQUFDO0lBMUR6QixDQUFDO0lBRUcsNENBQW1CLEdBQTFCLFVBQTJCLElBQVksRUFBRSxPQUFpRDtRQUN4RixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFFRCxzQkFBVyxnQ0FBSTthQUFmO1lBQ0UsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCwrQkFBTSxHQUFOLFVBQU8sSUFBcUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUlELGdDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLHNDQUFhLEdBQXZCLFVBQXdCLFNBQXlCO1FBQy9DLFNBQVMsQ0FBQyxTQUFTLEdBQUcsMENBQTBDLENBQUM7SUFDbkUsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxhQUEyQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRXpELElBQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRCxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO1FBRXRELElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFUywyQ0FBa0IsR0FBNUIsVUFBNkIsT0FBdUI7UUFBcEQsaUJBRUM7UUFEQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMseUJBQWUsSUFBSSxZQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRVMsc0NBQWEsR0FBdkIsVUFBd0IsU0FBeUI7UUFDL0MsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFrQkQsa0NBQVMsR0FBVCxVQUFVLEtBQVU7UUFBVixrQ0FBVTtRQUNsQixJQUFNLE1BQU0sR0FDVixLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDMUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNwQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVk7WUFDN0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFFNUIsSUFBSSxVQUFVLEdBQVEsRUFBRSxDQUFDO1FBRXpCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDMUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBNUJNLDJCQUFZLEdBQWEsRUFBRSxDQUFDO0lBQ3BCLHFCQUFNLEdBQUc7UUFDdEIsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztLQUNWLENBQUM7SUFpQkoscUJBQUM7Q0FBQTtBQWxHMEI7Ozs7Ozs7Ozs7O0FDSjZCO0FBRWpELElBQUksWUFBWSxHQUFHO0lBQ3hCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixPQUFPLEVBQTBCLEVBQUU7SUFDbkMsV0FBVyxFQUEwQixFQUFFO0lBQ3ZDLGdCQUFnQixFQUFjLEVBQUU7SUFDaEMsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLGtCQUFrQjtZQUN4RCxDQUFDLENBQUMsRUFBRTtZQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEdBQVc7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEdBQVc7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsU0FBUyxFQUFFLFVBQVMsT0FBZTtRQUNqQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYTtZQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBRyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQztTQUNqRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEM7U0FDRjthQUFNO1lBQ0wsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7U0FDRjtRQUNELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUM7QUFFSyxJQUFJLGFBQWEsR0FBRyw2RUFBYyxDQUFDO0FBQ3BDLFlBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsNkVBQWMsQ0FBQztBQUM3QyxZQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7Ozs7Ozs7QUNwRGxEO0FBQUE7SUFBQTtJQXlCQSxDQUFDO0lBeEJpQiw0QkFBYyxHQUE1QixVQUE2QixPQUF1QixFQUFFLE9BQTZDLEVBQUUsVUFBOEQsRUFBRSxNQUF3QjtRQUN6TCxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELGFBQWEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQzFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQU07WUFDbEIsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxhQUFhLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDbkMsYUFBYSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2pDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN6QixhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFDYSwwQkFBWSxHQUExQixVQUEyQixPQUF1QixFQUFFLE1BQXdCLEVBQUUsSUFBUyxFQUFFLFFBQWE7UUFBeEIsZ0NBQVM7UUFBRSx3Q0FBYTtRQUNsRyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLEdBQUcsUUFBUSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUN6QkQsK0M7Ozs7Ozs7Ozs7OztBQ0cyQztBQUVyQyxTQUFVLGFBQWE7SUFDM0IsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDdEMsQ0FBQztBQUVELElBQUksTUFBVyxDQUFDO0FBQ2hCLElBQUksYUFBYSxFQUFFLEVBQUU7SUFDbkIsTUFBTSxHQUFRLG1CQUFPLENBQUMsRUFBZ0IsQ0FBQyxDQUFDO0NBQ3pDO0FBRUQ7SUFBc0MsbUZBQVU7SUFDOUMsMEJBQ1ksYUFBMEIsRUFDcEMsUUFBa0IsRUFDbEIsSUFBcUMsRUFDckMsT0FBZ0I7UUFKbEIsWUFNRSxrQkFBTSxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsU0FHOUM7UUFSVyxtQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQVc5QixnQkFBVSxHQUFvQixTQUFTLENBQUM7UUFDeEMsWUFBTSxHQUFtQixTQUFTLENBQUM7UUFOekMsS0FBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDekMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUN0QyxDQUFDO0lBT0QsaUNBQU0sR0FBTixVQUFPLElBQXFDO1FBQzFDLGlCQUFNLE1BQU0sWUFBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVTLGdEQUFxQixHQUEvQixVQUFnQyxRQUFnQjtRQUM5QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDakMsVUFBQyxNQUFpQixJQUFLLGFBQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUF4QixDQUF3QixDQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLGdEQUFxQixHQUEvQixVQUNFLFNBQWlCLEVBQ2pCLE1BQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUFjLElBQ2IsQ0FBQztJQUVJLHlDQUFjLEdBQXRCLFVBQ0UsU0FBc0IsRUFDdEIsU0FBaUI7UUFGbkIsaUJBaUlDO1FBN0hDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsSUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLEVBQUU7WUFDbkUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQzlCLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FDNUMsQ0FBQztZQUNGLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO1lBQy9CLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzNCO1FBQ0QsSUFBTSxXQUFXLEdBQVE7WUFDdkIsSUFBSSxFQUFFLFNBQVM7WUFDZixDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFDO2dCQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7b0JBQ2pCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUNuQztnQkFDRCxPQUFPLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQztZQUNGLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFLEdBQUc7WUFDaEIsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBTyxFQUFFO1NBQ2hCLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQzdELFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDbkMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUNqQyxXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUN6QixXQUFXLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUN4QjtRQUVELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQU87WUFDdEIsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtnQkFDN0QsTUFBTSxDQUFDLElBQUksQ0FDVCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUU7b0JBQzdCLE1BQU0sRUFBRSxPQUFPO29CQUNmLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FDSCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLE1BQU0sR0FDVixTQUFTLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVTtZQUNsRCxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFO2dCQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsR0FBRztnQkFDMUIsQ0FBQyxDQUFDLEdBQUc7WUFDUCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdkQsSUFBTSxNQUFNLEdBQVE7WUFDbEIsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxzQkFBc0I7Z0JBQzlCLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNELE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFO2dCQUNOLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxFQUFFO2FBQ047WUFDRCxRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsU0FBUztZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRSxVQUFVO2dCQUNoQixPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUUsYUFBYTthQUN6QjtZQUNELEtBQUssRUFBRTtnQkFDTCxVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNsQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDcEMsQ0FBQztRQUVGLElBQU0sTUFBTSxHQUFHO1lBQ2IsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU5RCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXpELFNBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsVUFBQyxJQUFTO1lBQy9DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDckQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JDLElBQU0sSUFBSSxHQUFjLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxZQUFZLEdBQUc7WUFDakIsT0FBYSxTQUFTLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQTVELENBQTRELENBQUM7UUFDekQsU0FBVSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUNyQyxJQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUUsQ0FBQztZQUNqQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUNHLFNBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QyxJQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUUsQ0FBQztZQUNqQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQS9KYSxzQkFBSyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFnSzlELHVCQUFDO0NBQUEsQ0EvS3FDLCtEQUFVLEdBK0svQztBQS9LNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkaUM7QUFFa0I7QUFDUDtBQUN6RSxJQUFNLEtBQUssR0FBRyxtQkFBTyxDQUFDLEVBQU8sQ0FBQyxDQUFDO0FBQ0k7QUFDTztBQUNJO0FBQ087QUFDaUI7QUFFdEUsSUFBTSx3QkFBd0IsR0FBRyxjQUFjLENBQUM7QUFFaEQ7O0dBRUc7QUFDSDtJQU9FLDRCQUNZLGFBQTBCLEVBQzFCLFNBQXFCLEVBQ3JCLElBQXFDLEVBQ3JDLE9BQWdCLEVBQ2xCLFNBQThDLEVBQzlDLGVBQXVCO1FBRHZCLDBDQUE4QztRQUM5Qyx5REFBdUI7UUFMckIsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFpQztRQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQXFDO1FBQzlDLG9CQUFlLEdBQWYsZUFBZSxDQUFRO1FBWnpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQW1CLFNBQVMsQ0FBQztRQUV2QyxpQkFBWSxHQUE2QixFQUFFLENBQUM7UUFDNUMsZ0JBQVcsR0FBMEIsRUFBRSxDQUFDO1FBbURsRDs7V0FFRztRQUNJLDZCQUF3QixHQUFHLElBQUksa0RBQUssRUFBMEQsQ0FBQztRQTVDcEcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBRyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBR0Qsc0JBQVksNENBQVk7YUFBeEI7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQUVTLDBDQUFhLEdBQXZCLFVBQXdCLFNBQWdCO1FBQ3RDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFRO1lBQ25DLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUNuQixXQUFXLEVBQUUsUUFBUSxDQUFDLEtBQUs7Z0JBQzNCLFVBQVUsRUFBRSxrRUFBaUIsQ0FBQyxPQUFPO2dCQUNyQyxJQUFJLEVBQUUsU0FBUzthQUNoQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksc0NBQVMsR0FBaEIsVUFBaUIsVUFBNkI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLFVBQVUsS0FBSyxrRUFBaUIsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLFVBQVUsS0FBSyxrRUFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDakosQ0FBQztJQUVELHNCQUFjLCtDQUFlO2FBQTdCO1lBQUEsaUJBRUM7WUFEQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQUUsSUFBSSxZQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7OztPQUFBO0lBRUQsc0JBQWMsOENBQWM7YUFBNUI7WUFBQSxpQkFFQztZQURDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBRSxJQUFJLFFBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUNyRSxDQUFDOzs7T0FBQTtJQUVTLHVDQUFVLEdBQXBCLFVBQXFCLElBQVk7UUFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBT0QsbURBQXNCLEdBQXRCO1FBQ0UsSUFBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUU7WUFDekMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksOENBQWlCLEdBQXhCLFVBQXlCLFVBQTBCO1FBQ2pELElBQUksVUFBVSxZQUFZLCtEQUFVLEVBQUU7WUFDcEMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxVQUFVLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1NBQzNDO1FBQ0QsVUFBVSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDaEMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7T0FFRztJQUNJLDZDQUFnQixHQUF2QixVQUF3QixPQUFnQztRQUF4RCxpQkFzRkM7UUFyRkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RCxZQUFZLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFN0MsZUFBZSxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztRQUNyRCxlQUFlLENBQUMsU0FBUyxHQUFHLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztRQUNuRSxZQUFZLENBQUMsU0FBUyxHQUFHLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztRQUU5RCxlQUFlLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQyxlQUFlLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRTdDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FDdEMsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO1FBRUYsVUFBVSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLFVBQUMsT0FBdUI7WUFDdkUsT0FBTyxtRUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pDLFVBQVUsQ0FBQztvQkFDVCxPQUFPLENBQUMsVUFBVSxHQUFHLGtFQUFpQixDQUFDLFNBQVMsQ0FBQztvQkFDakQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNuQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMvQyxLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQ1QsQ0FBQyxFQUFFLDBFQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFVBQVUsWUFBWSwrREFBVSxFQUFFO1lBQ3BDLElBQUksVUFBVSxHQUFHO2dCQUNmLElBQUksRUFBZSxTQUFTO2dCQUM1QixPQUFPLEVBQWtCLFNBQVM7Z0JBQ2xDLE1BQU0sRUFBRSxVQUFTLFNBQWM7b0JBQzdCLElBQUcsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTt3QkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO3FCQUMxRDt5QkFBTTt3QkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7cUJBQzFCO2dCQUNILENBQUM7YUFDRjtZQUVELFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLE9BQXVCO2dCQUMzRSxVQUFVLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO2dCQUV0RCxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO2dCQUN4RCxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWhELElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELFdBQVcsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7Z0JBQzlDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsMEVBQVksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlELFdBQVcsQ0FBQyxPQUFPLEdBQUc7b0JBQ3BCLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQztnQkFDRixVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXhDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUV4QyxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFFSCxVQUFVLENBQUMsa0JBQWtCLEdBQUcsVUFDOUIsYUFBa0IsRUFDbEIsWUFBb0I7Z0JBRXBCLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDO1NBQ0g7UUFFRCxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsVUFBVSxDQUFDLFFBQVEsR0FBRyxjQUFNLFlBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEMsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQU0sR0FBYjtRQUFBLGlCQWtDQztRQWpDQyxJQUFJLFlBQVksR0FBUSxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFNLG1CQUFZLEVBQVosQ0FBWSxDQUFDO1FBRTFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFFekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsaUJBQU87WUFDbEMsSUFBSSxlQUFlLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztZQUM1QyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWxELElBQUksV0FBVyxHQUFHLFVBQUMsSUFBUztZQUMxQixJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFRCxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxQyxLQUFLLEVBQUUsZUFBZTtZQUN0QixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFDSCxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRVMsK0NBQWtCLEdBQTVCLFVBQTZCLE9BQXVCO1FBQXBELGlCQXdDQztRQXZDQyxJQUFNLGlCQUFpQixHQUFHLG1FQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUM1RCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxvQkFBVTtnQkFDakMsSUFBSSxVQUFVLFlBQVksK0RBQVUsRUFBRTtvQkFDcEMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDcEM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSwwRUFBWSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2QyxJQUFJLGtCQUFrQixHQUFnQixTQUFTLENBQUM7UUFDaEQsSUFBTSx5QkFBeUIsR0FBRyxVQUFDLEtBQXlCLEVBQUUsQ0FBTTtZQUNsRSxJQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO1lBQzNDLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQU0sYUFBYSxHQUFHLG1FQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFDeEQsQ0FBTSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLDBFQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFPO29CQUM1RyxPQUFPO3dCQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSTt3QkFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXO3FCQUMxQixDQUFDO2dCQUNKLENBQUMsQ0FBQyxFQUNGLFVBQUMsTUFBVyxJQUFLLFlBQUssRUFBTCxDQUFLLEVBQ3RCLFVBQUMsQ0FBTTtvQkFDTCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsa0VBQWlCLENBQUMsT0FBTyxDQUFDO29CQUMvQyxJQUFNLGVBQWUsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3ZELEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMvQyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNoQyxDQUFDLENBQ0YsQ0FBQztnQkFDRixrQkFBa0IsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BILGtCQUFrQixHQUFHLGFBQWEsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxrQkFBa0IsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzlELGtCQUFrQixHQUFHLFNBQVMsQ0FBQzthQUNoQztRQUNILENBQUM7UUFDRCx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7T0FFRztJQUNJLG9DQUFPLEdBQWQ7UUFDRSxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEUsSUFBRyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ2pCLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLG9CQUFVO1lBQ2pDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLElBQUksVUFBVSxZQUFZLCtEQUFVLEVBQUU7Z0JBQ3BDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7YUFDM0M7WUFDRCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQ0FBTSxHQUFiLFVBQWMsSUFBcUI7UUFBbkMsaUJBU0M7UUFUYSxtQ0FBcUI7UUFDakMsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxvQkFBVTtnQkFDakMsaUJBQVUsQ0FBQyxjQUFNLGlCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxFQUFFLENBQUM7WUFBMUQsQ0FBMEQsQ0FDM0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQU0sR0FBYjtRQUNFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ2xCLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSx3Q0FBVyxHQUFsQixVQUNFLFlBQW9CLEVBQ3BCLGFBQWtCO1FBRnBCLGlCQW9CQztRQWhCQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQy9CLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLGFBQWEsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLGFBQWEsQ0FBQztTQUNqRDthQUFNO1lBQ0wsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxDQUFDO1lBQzlELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUcsYUFBYSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBSTtnQkFDdkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDekMsYUFBRyxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFwQyxDQUFvQyxDQUM1QyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLDZDQUFnQixHQUF2QixVQUNFLGlCQUE4QixFQUM5QixRQUFrQixFQUNsQixJQUFxQztRQUVyQyxJQUFJLFFBQVEsR0FBRyxtRkFBb0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxJQUFJLFdBQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1FBQzFGLElBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxVQUFVLEdBQUcsSUFBSSxxR0FBNkIsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25HLE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELHNCQUFJLDBDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQWUsUUFBaUI7WUFDOUIsSUFBRyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkI7UUFDSCxDQUFDOzs7T0FOQTtJQU9ILHlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL1dpRDtBQUNZO0FBQ0o7QUFHMUQ7SUFBK0MsNEZBQWM7SUFDM0QsbUNBQ0UsVUFBdUIsRUFDdkIsUUFBa0IsRUFDbEIsSUFBcUMsRUFDckMsT0FBZ0I7UUFKbEIsWUFNRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsU0FPM0M7UUFOQyxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLENBQ1Ysa0JBQVE7WUFDTixRQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFEdkQsQ0FDdUQsQ0FDMUQsQ0FBQzs7SUFDSixDQUFDO0lBRUQsZ0RBQVksR0FBWjtRQUNFLElBQU0sWUFBWSxHQUFtQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25FLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVELDBDQUFNLEdBQU47UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLCtFQUFrQixDQUNuQyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQzNDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDbkIsSUFBSSxDQUFDLElBQUksQ0FDVixDQUFDO1FBQ0YsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFSCxnQ0FBQztBQUFELENBQUMsQ0E5QjhDLHVFQUFjLEdBOEI1RDs7QUFFRCxtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FDckMsY0FBYyxFQUNkLHlCQUF5QixDQUMxQixDQUFDOzs7Ozs7Ozs7O0FDeENvQztBQUV0QyxJQUFJLG1CQUFtQixHQUF1QyxFQUFFLENBQUM7QUFDakUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsMkRBQVMsQ0FBQztBQUUvQixJQUFJLFVBQVUsR0FBRztJQUN0QixZQUFZLEVBQUUsVUFBQyxNQUFtQjtRQUFuQixvQ0FBbUI7UUFDaEMsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVG9FO0FBQ3BCO0FBQ0c7QUFDUDtBQUU5QztJQUFnQyw2RUFBYztJQUc1QyxvQkFDWSxhQUEwQixFQUNwQyxRQUFrQixFQUNsQixJQUFxQyxFQUNyQyxPQUFnQjtRQUpsQixZQU1FLGtCQUFNLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUM5QztRQU5XLG1CQUFhLEdBQWIsYUFBYSxDQUFhO1FBSDlCLGtCQUFZLEdBQWMsU0FBUyxDQUFDO1FBQ2xDLHFCQUFlLEdBQVcsU0FBUyxDQUFDO1FBWXBDLGVBQVMsR0FBNkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFKOUUsQ0FBQztJQUtTLHVDQUFrQixHQUE1QixjQUFnQyxDQUFDO0lBQ3ZCLGlDQUFZLEdBQXRCLFVBQXVCLFNBQWlCO1FBQ3RDLElBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUM1QjtZQUNBLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxjQUFlLENBQUM7SUFFaEIsaUNBQVksR0FBWixVQUFhLElBQWU7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxzQkFBSSxpQ0FBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0QsbUNBQWMsR0FBZCxVQUFlLEtBQWE7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUdTLGtDQUFhLEdBQXZCLFVBQXdCLFNBQXlCO1FBQy9DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRVMsdUNBQWtCLEdBQTVCLFVBQTZCLE9BQXVCO1FBQXBELGlCQWtCQztRQWpCQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QixJQUFNLGFBQWEsR0FBRyxtRUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLG1CQUFTO2dCQUMzQixPQUFPO29CQUNMLEtBQUssRUFBRSxTQUFTO29CQUNoQixJQUFJLEVBQUUsMEVBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztpQkFDdkQsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQUMsTUFBVyxJQUFLLFlBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLEtBQUssRUFBL0IsQ0FBK0IsRUFDaEQsVUFBQyxDQUFNO2dCQUNMLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUNGLENBQUM7WUFDRixPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsaUJBQU0sa0JBQWtCLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDRSxJQUFNLFFBQVEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuRCxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNFLElBQU0sTUFBTSxHQUFlLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsS0FBSyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBRTNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRO1lBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUFBLGlCQVFDO1FBUEMsSUFBTSxNQUFNLEdBQWtCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQU07WUFDMUQsNkRBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUFqRSxDQUFpRSxDQUNsRSxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7WUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQUEsaUJBc0JDO1FBckJDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBRztZQUNuQixJQUFNLFFBQVEsR0FBUSxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUSxFQUFFLEtBQWE7d0JBQ3JDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDaEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7eUJBQ3JCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFRLEVBQUUsS0FBYTt3QkFDckMsSUFBSSxRQUFRLElBQUksR0FBRyxFQUFFOzRCQUNuQixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzt5QkFDckI7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCw4QkFBUyxHQUFULFVBQVUsS0FBWSxFQUFFLE1BQWE7UUFDbkMsSUFBSSxRQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlELFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxnQ0FBVyxHQUFYLFVBQVksUUFBaUI7UUFDM0IsSUFBSSxTQUFTLEdBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMvQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsbUNBQWMsR0FBZCxVQUNFLElBQVcsRUFDWCxNQUFhLEVBQ2IsSUFBYTtRQUViLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksVUFBVSxHQUFHLFVBQUMsQ0FBUSxFQUFFLENBQVEsRUFBRSxHQUFtQjtZQUFuQixnQ0FBbUI7WUFDdkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7UUFDRixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUSxFQUFFLENBQVE7WUFDakMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBL0krQix1RUFBYyxHQStJN0M7Ozs7Ozs7O0FDcEpELGdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQytCO0FBTXpDO0FBQ29DO0FBRTNCO0FBRTNCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNkLElBQUksV0FBVyxHQUFHLG1CQUFPLENBQUMsRUFBc0QsQ0FBQyxDQUFDO0lBQ2xGLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3RDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0NBQ3RDO0FBY0Q7SUFnQkUsb0JBQ1UsVUFBdUIsRUFDdkIsTUFBbUIsRUFDbkIsSUFBbUIsRUFDbkIsT0FBMEIsRUFDMUIsUUFBa0MsRUFDbEMsZUFBdUI7UUFOakMsaUJBcUJDO1FBaEJTLHdDQUFrQztRQUNsQyx5REFBdUI7UUFMdkIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQVE7UUFqQmpDOzs7OztXQUtHO1FBQ0ksbUJBQWMsR0FHakIsSUFBSSxrREFBSyxFQUFrRCxDQUFDO1FBK0ZoRSxZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQXFRckIseUJBQW9CLEdBRXZCLEVBQUUsQ0FBQztRQUVBLHlCQUFvQixHQUFnRCxFQUFFLENBQUM7UUFFOUUsdUJBQWtCLEdBQUcsVUFDbkIsWUFBaUIsRUFDakIsTUFBYyxFQUNkLFVBQWtCO1lBRWxCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDZCxZQUFZLENBQUMsT0FBTyxFQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ25DLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUVGLHlCQUFvQixHQUFHLFVBQ3JCLFlBQWlCLEVBQ2pCLE1BQWMsRUFDZCxVQUFrQjtZQUVsQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxTQUFTLEdBQUcsMEVBQVksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFekQsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFDO2dCQUNoQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBRXBCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsMEVBQVksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQzVEO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxTQUFTLEdBQUcsMEVBQVksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3pELEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDL0I7Z0JBRUQsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzNCLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQU0sS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBQ0YscUJBQWdCLEdBQUcsVUFBQyxJQUFZO1lBQzlCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDNUUsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FDdEMsNEJBQTRCLEVBQzVCLEtBQUssQ0FDTixDQUFDO1lBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FDcEIsOEJBQThCLEVBQzlCLE1BQU0sRUFDTixVQUFVLEdBQUcsSUFBSSxDQUNsQixDQUFDO1lBQ0YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUM7UUFFRixxQkFBZ0IsR0FBRyxVQUNqQixZQUFpQixFQUNqQixNQUFjLEVBQ2QsVUFBa0I7WUFFbEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsS0FBSyxHQUFHLDBFQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLENBQUM7WUFDL0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFFcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3RFLGlFQUFnQixDQUFDLFNBQVMsQ0FBQztnQkFDN0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU5QyxnRUFBZ0U7Z0JBQ2hFLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRiwwQkFBcUIsR0FBRyxVQUFDLFlBQWlCO1lBQ3hDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsUUFBUSxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztZQUNqRCxRQUFRLENBQUMsT0FBTyxHQUFHLFdBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixJQUFJLGFBQWEsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDckMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsVUFBVSxLQUFLLGlFQUFnQixDQUFDLFNBQVMsRUFBaEQsQ0FBZ0QsQ0FDM0QsQ0FBQztZQUVGLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU87YUFDUjtZQUVELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLElBQUksR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN2QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN2QixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTdCLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQU07Z0JBQzFCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7b0JBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ3RDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDM0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQztZQUNoQixRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVMsQ0FBQztnQkFBVixpQkFjbkI7Z0JBYkMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsb0NBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7b0JBQUUsT0FBTztnQkFFM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQy9CLGdCQUFNLElBQUksYUFBTSxDQUFDLElBQUksS0FBSyxvQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUE3QixDQUE2QixDQUN4QyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUVBQWdCLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6RCxnRUFBZ0U7Z0JBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUM7WUFFRixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFDRixxQkFBZ0IsR0FBRyxVQUNqQixZQUFpQixFQUNqQixNQUFXLEVBQ1gsVUFBa0I7WUFFbEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsU0FBUyxHQUFHLHNEQUFzRCxDQUFDO1lBQzFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFDO2dCQUNoQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBQ0YscUJBQWdCLEdBQUcsVUFDakIsWUFBaUIsRUFDakIsTUFBVyxFQUNYLFVBQWtCO1lBRWxCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsSUFBTSxTQUFTLEdBQUcsMEVBQVksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEQsSUFBTSxRQUFRLEdBQUcsMEVBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztZQUMvQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUN4QixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBQztnQkFDaEIsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDakUsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFDO2dCQUNmLENBQUMsQ0FBQyxlQUFlLENBQUM7WUFDcEIsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBQ0YsNkJBQXdCLEdBQUcsVUFDekIsWUFBaUIsRUFDakIsTUFBYyxFQUNkLFVBQWtCO1lBRWxCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLEtBQUssR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO1lBQy9DLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFDO2dCQUNoQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBRXBCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO29CQUNwRSxpRUFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRiw2QkFBd0IsR0FBRyxVQUFDLFVBQW1CO1lBQzdDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRywwRUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsU0FBUyxHQUFHLG1EQUFtRCxDQUFDO1lBQ3ZFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBQztnQkFDaEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUVwQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxJQUFJLGFBQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUExQixDQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtvQkFDcEUsaUVBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRWQsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUIsQ0FBQyxDQUFDO1lBRUYsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBOWlCQSxVQUFVLENBQUMsU0FBUyxJQUFJLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLEdBQUc7WUFDMUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0I7WUFDckIsSUFBSSxDQUFDLGdCQUFnQjtZQUNyQixJQUFJLENBQUMsd0JBQXdCO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0I7U0FDdEIsQ0FBQztRQUNGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU8sa0NBQWEsR0FBckIsVUFBc0IsSUFBZ0I7UUFBdEMsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQUk7WUFDcEMsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtnQkFDMUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVELElBQUksUUFBUSxFQUFFO29CQUNaLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO2lCQUN0QztnQkFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDbkIsT0FBTyxZQUFZLEtBQUssUUFBUTt3QkFDOUIsQ0FBQyxDQUFDLFlBQVk7d0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMscUNBQWdCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFUyxpQ0FBWSxHQUF0QixVQUF1QixNQUFtQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDMUQsT0FBTztnQkFDTCxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7Z0JBQ25CLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksUUFBUSxDQUFDLElBQUk7Z0JBQzNELFFBQVEsRUFDTixRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssTUFBTTtvQkFDM0IsQ0FBQyxDQUFDLCtEQUFjLENBQUMsSUFBSTtvQkFDckIsQ0FBQyxDQUFDLCtEQUFjLENBQUMsUUFBUTtnQkFDN0IsVUFBVSxFQUNSLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxNQUFNO29CQUMzQixDQUFDLENBQUMsaUVBQWdCLENBQUMsT0FBTztvQkFDMUIsQ0FBQyxDQUFDLGlFQUFnQixDQUFDLFNBQVM7Z0JBQ2hDLFFBQVEsRUFBRSxpRUFBZ0IsQ0FBQyxNQUFNO2FBQ2xDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixVQUE0QjtRQUMzQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLFVBQVUsS0FBSyxpRUFBZ0IsQ0FBQyxTQUFTLENBQUM7WUFDbkUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksVUFBVSxLQUFLLGlFQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUVELHNCQUFXLCtCQUFPO2FBQWxCO1lBQ0UsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxDQUFDO2FBQ0QsVUFBbUIsT0FBNEI7WUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7OztPQUpBO0lBTU0sMkJBQU0sR0FBYixVQUFjLElBQXFCO1FBQXJCLG1DQUFxQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7WUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxzQkFBVyxrQ0FBVTthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUlELDRCQUFPLEdBQVA7UUFDRSw4QkFBOEI7UUFDOUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBVSwwQ0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEQsb0NBQUMsQ0FBQyxTQUFTLENBQUM7aUJBQ1QsU0FBUyxFQUFFO2lCQUNYLE9BQU8sRUFBRSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELDBDQUFxQixHQUFyQjtRQUNFLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztRQUV4RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsNkNBQXdCLEdBQXhCO1FBQ0UsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsS0FBSyxHQUFHLDBFQUFZLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztRQUMvQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxrREFBNkIsR0FBN0IsVUFBOEIsZUFBK0I7UUFDM0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG9DQUFDLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxFQUFFLENBQ3RFLE9BQU8sRUFDUDtZQUNFLElBQU0sUUFBUSxHQUFHLG9DQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksR0FBRyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7Z0JBQ2xELFFBQVEsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdEQsUUFBUSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQ25EO2lCQUFNO2dCQUNMLG9DQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDaEQ7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCwyQkFBTSxHQUFOO1FBQUEsaUJBOEhDO1FBN0hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFdBQVcsR0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBTSxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUM7UUFDdkQsSUFBTSxhQUFhLEdBQ2pCLGdGQUFnRixDQUFDO1FBQ25GLElBQU0sT0FBTyxHQUFHLDhDQUFRLENBQ3RCLElBQUksRUFDSjtZQUNFLE9BQU8sRUFBRTtnQkFDUCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRTtnQkFDNUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUU7Z0JBQzNDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFO2FBQzlDO1lBQ0QsR0FBRyxFQUFFLFVBQVU7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDcEIsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDdkMsVUFBVSxFQUFFLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsT0FBTztZQUNoQixVQUFVLEVBQUU7Z0JBQ1YsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDbkIsUUFBUSxFQUFFLEtBQUs7YUFDaEI7WUFDRCw0QkFBNEI7WUFDNUIsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixTQUFTLEVBQUUsVUFBQyxJQUFTLEVBQUUsS0FBVTtvQkFDL0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6QyxDQUFDO2FBQ0Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osaUJBQWlCLEVBQUUsV0FBVztnQkFDOUIsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxHQUFHO29CQUNiLElBQUksRUFBRSxHQUFHO2lCQUNWO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsS0FBSztZQUNiLGNBQWMsRUFBRSxVQUNkLEtBQVUsRUFDVixJQUFTLEVBQ1QsS0FBVSxFQUNWLEdBQVEsRUFDUixPQUFZO2dCQUVaLElBQUksWUFBWSxHQUFHLG9DQUFDLENBQUMsU0FBUyxDQUFDO3FCQUM1QixTQUFTLEVBQUU7cUJBQ1gsR0FBRyxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDO2dCQUNoQixvQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDO3FCQUNkLElBQUksQ0FBQyxVQUFTLEtBQWE7b0JBQzFCLElBQUksT0FBTyxHQUFHLG9DQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQzlELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUM3QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLGlCQUFPOzRCQUN2QyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQ25CLFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUNuQixDQUFDOzRCQUNGLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQ0FDYixTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUNoQzt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFFSCxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwRCxlQUFlLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO3dCQUM5RCxlQUFlLENBQUMsU0FBUzs0QkFDdkIsK0NBQStDLENBQUM7d0JBQ2xELElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hDLG9DQUFDLENBQUMsT0FBTyxFQUFFLG9DQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQUM7NEJBQzFDLFFBQUMsQ0FBQyxlQUFlLEVBQUU7d0JBQW5CLENBQW1CLENBQ3BCLENBQUM7d0JBQ0Ysb0NBQUMsQ0FBQyxPQUFPLEVBQUUsb0NBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7NEJBQ2hELElBQUksS0FBSyxHQUFzQixJQUFLLENBQUMsS0FBSyxDQUFDOzRCQUMzQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxLQUFLLEVBQUU7Z0NBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBQzdCO3dCQUNILENBQUMsQ0FBQyxDQUFDO3dCQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzVCO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNGLEVBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDekIsU0FBUyxDQUFDLFNBQVMsR0FBRyxtREFBbUQsQ0FBQztRQUUxRSxJQUFNLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsb0NBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQ2pFLE9BQU8sQ0FDUixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWTthQUNkLFFBQVEsRUFBRTthQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDYixJQUFJLEVBQUUsQ0FBQztRQUVWLDZEQUE2RDtRQUM3RCx3RkFBd0Y7UUFDeEYsTUFBTTtRQUNOLElBQUksTUFBTSxHQUFHLG9DQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0Qsb0NBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakMsZUFBZSxDQUFDLEVBQUUsQ0FDaEIsZ0JBQWdCLEVBQ2hCLFVBQUMsQ0FBTSxFQUFFLFFBQWEsRUFBRSxPQUFZO1lBQ2xDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDaEIsSUFBSSxjQUFjLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxVQUFVLEdBQUcsb0NBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRSxLQUFJLENBQUMsNkJBQTZCLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsNkJBQTZCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVTLHVDQUFrQixHQUE1QixVQUE2QixJQUFTO1FBQXRDLGlCQTRFQztRQTNFQywrQ0FBK0M7UUFDL0MsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIsNkNBQTZDO1FBQzdDLElBQUksSUFBSSxHQUFrQixFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUN2QyxnQkFBTTtZQUNKLGFBQU0sQ0FBQyxRQUFRLEtBQUssaUVBQWdCLENBQUMsTUFBTTtnQkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRGpDLENBQ2lDLENBQ3BDLENBQUMsTUFBTSxDQUFDO1FBQ1QsSUFBSSxDQUFDLE9BQU87YUFDVCxNQUFNLENBQ0wsZ0JBQU07WUFDSixhQUFNLENBQUMsUUFBUSxLQUFLLGlFQUFnQixDQUFDLEdBQUc7Z0JBQ3hDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQURqQyxDQUNpQyxDQUNwQzthQUNBLE9BQU8sQ0FBQyxnQkFBTTtZQUNiLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsR0FBRyxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztZQUN4QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNyQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsaUJBQU87Z0JBQ3ZDLFVBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFyQyxDQUFxQyxDQUN0QyxDQUFDO1lBQ0YsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVMLHlFQUF5RTtRQUN6RSw0RUFBNEU7UUFDNUUsK0RBQStEO1FBQy9ELHFFQUFxRTtRQUNyRSx1Q0FBdUM7UUFDdkMscUNBQXFDO1FBQ3JDLGdEQUFnRDtRQUNoRCxpREFBaUQ7UUFFakQsZ0RBQWdEO1FBQ2hELHlDQUF5QztRQUN6QyxnREFBZ0Q7UUFDaEQsOENBQThDO1FBQzlDLGdEQUFnRDtRQUNoRCxnR0FBZ0c7UUFDaEcsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsd0JBQXdCO1FBQ3hCLFFBQVE7UUFDUixNQUFNO1FBQ04sSUFBSTtRQUVKLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM5QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7WUFDeEMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsT0FBTyxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQiwwQ0FBMEM7WUFDMUMsd0JBQXdCO1lBQ3hCLDBDQUEwQztZQUMxQyx3QkFBd0I7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxnQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTSxzQ0FBaUIsR0FBeEIsVUFBeUIsUUFBNkIsRUFBRSxJQUFTLElBQUcsQ0FBQztJQTROckUsK0JBQVUsR0FBVjtRQUFBLGlCQXdCQztRQXZCQyxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUMxQyxnQkFBTTtZQUNKLGFBQU0sQ0FBQyxRQUFRLEtBQUssaUVBQWdCLENBQUMsTUFBTTtnQkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRGpDLENBQ2lDLENBQ3BDLENBQUM7UUFDRixJQUFNLE9BQU8sR0FBUSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztZQUN0RCxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxRCxPQUFPO2dCQUNMLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsTUFBTSxFQUFFLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVztnQkFDMUQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEtBQUssaUVBQWdCLENBQUMsU0FBUztnQkFDekQsT0FBTyxFQUFFLFVBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxHQUFRLElBQUssVUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0I7YUFDcEUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMO2dCQUNFLFNBQVMsRUFBRSw4QkFBOEI7Z0JBQ3pDLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsSUFBSTtnQkFDVixjQUFjLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsU0FBUzthQUMxRDtTQUNGLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFJTSwyQkFBTSxHQUFiO1FBQ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0b0JxQztBQUVMO0FBQ007QUFDRjtBQUNPO0FBQ0M7QUFFTDtBQUNUO0FBQ087QUFDTTtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pNO0FBQ0o7QUFDQTtBQUNDO0FBQ1U7Ozs7Ozs7Ozs7Ozs7OztBQ0hjO0FBQ1k7QUFFekM7QUFFckI7SUFBMEIsdUVBQWM7SUFDdEMsY0FDRSxhQUEwQixFQUMxQixRQUFrQixFQUNsQixJQUFxQyxFQUNyQyxPQUFnQjtlQUVoQixrQkFBTSxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7SUFDL0MsQ0FBQztJQUVELHNCQUFXLHNCQUFJO2FBQWY7WUFDRSxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUVELHNCQUFPLEdBQVA7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBRztZQUNuQixJQUFNLFFBQVEsR0FBUSxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFNLFdBQVcsR0FBa0IsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzNCLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCO3FCQUFNO29CQUNMLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO3dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFHLElBQUksa0JBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztxQkFDdkU7eUJBQU07d0JBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0Y7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsSUFBRyxXQUFXLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRTtvQkFDbEMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7aUJBQ3JDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxZQUFZLGdCQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRVMsNEJBQWEsR0FBdkIsVUFBd0IsU0FBeUI7UUFDekMsdUJBQXVDLEVBQXJDLDhCQUFZLEVBQUUsY0FBdUIsQ0FBQztRQUM5QyxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxhQUFhLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1FBRXJELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbkIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1I7UUFFRCxJQUFNLFNBQVMsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRSxTQUFTLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUN0QyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztZQUNoQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLEVBQUUsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7UUFDakQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQU8sR0FBUDtRQUNFLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0EzRXlCLHVFQUFjLEdBMkV2Qzs7QUFFRCxtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEQsbUZBQW9CLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELG1GQUFvQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUVVO0FBRXhFO0lBQWdELDZGQUF5QjtJQUN2RSxvQ0FDRSxhQUEwQixFQUMxQixRQUFrQixFQUNsQixJQUFxQyxFQUNyQyxPQUFnQjtlQUVoQixrQkFBTSxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7SUFDL0MsQ0FBQztJQUVELGlEQUFZLEdBQVo7UUFDRSxJQUFNLGFBQWEsR0FBcUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0RSxJQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBRTlDLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLFFBQVEsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLENBbEIrQyw2RkFBeUIsR0FrQnhFOztBQUVELG1GQUFvQixDQUFDLGtCQUFrQixDQUNyQyxlQUFlLEVBQ2YsMEJBQTBCLENBQzNCLENBQUM7QUFFRixtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FDckMsZ0JBQWdCLEVBQ2hCLDBCQUEwQixDQUMzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JtQztBQUNjO0FBQ1k7QUFDaEI7QUFFL0M7SUFBK0IsNEVBQWM7SUFDM0MsbUJBQ0UsYUFBMEIsRUFDMUIsUUFBa0IsRUFDbEIsSUFBcUMsRUFDckMsT0FBZ0I7ZUFFaEIsa0JBQU0sYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQkFBVywyQkFBSTthQUFmO1lBQ0UsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFJRCwyQkFBTyxHQUFQO1FBQUEsaUJBNkNDO1FBNUNDLElBQUksTUFBTSxHQUE4QixFQUFFLENBQUM7UUFFM0MsSUFBSSxTQUFTLEdBQUcsb0VBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxJQUFJLFdBQVcsR0FBRyxVQUFDLElBQVk7WUFDN0IsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFRixJQUFJLGFBQWEsR0FBRyxVQUFDLEdBQVc7WUFDOUIsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBSTtvQkFDekIsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTt3QkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNsQjs2QkFBTTs0QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt5QkFDaEI7cUJBQ0Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQUc7WUFDbkIsSUFBTSxRQUFRLEdBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDakM7cUJBQU07b0JBQ0wsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7d0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUcsSUFBSSxvQkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7cUJBQ3BFO3lCQUFNO3dCQUNMLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsaUNBQWEsR0FBdkIsVUFBd0IsU0FBeUI7UUFBakQsaUJBOEJDO1FBN0JDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBTSxVQUFVLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsSUFBTSxhQUFhLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsYUFBYSxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztRQUVyRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNSO1FBRUQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsQyxJQUFNLE1BQU0sR0FBRztZQUNiLElBQUksRUFBRSxJQUFJO1lBQ1YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLDJCQUEyQjtZQUN2QyxLQUFLLEVBQUUsVUFBQyxJQUFZLEVBQUUsTUFBYztnQkFDbEMsT0FBTyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDL0IsQ0FBQztZQUNELFdBQVcsRUFBRSxHQUFHO1lBQ2hCLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsVUFBUyxJQUFTO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztTQUNGLENBQUM7UUFFRixJQUFJLENBQUMsS0FBSyxHQUFHLGlEQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0UsaUJBQU0sT0FBTyxXQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0FyRzhCLHVFQUFjLEdBcUc1Qzs7QUFFRCxtRkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0QsbUZBQW9CLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzlELG1GQUFvQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7Ozs7OztBQy9HbkUseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLDRDQUE0QyxnbkQ7Ozs7OztBQ0E1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0JBQW9COztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxFQUFFO0FBQ2YsYUFBYSxFQUFFO0FBQ2YsYUFBYSxFQUFFO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxnQkFBZ0I7O0FBRXBFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHFDQUFxQztBQUNsRCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFh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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHlEQUF5RDtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5REFBeUQ7QUFDbkY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLEtBQUs7QUFDbEIsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsT0FBTztBQUNwQixhQUFhLEtBQUs7QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmLGFBQWEsRUFBRTtBQUNmLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxZQUFZO0FBQ3pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUF3RDtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBd0Q7QUFDL0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0RBQXdEO0FBQ3hGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsWUFBWTtBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sR0FBRyxFQUNILE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsTUFBTSxFQUNOLElBQUksRUFDSixNQUFNLEVBQ04sT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsU0FBUyxFQUNULE9BQU8sRUFDUCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sRUFDUCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEdBQUcsRUFDSCxHQUFHLEVBQ0gsTUFBTSxFQUNOLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxDQUNKLENBQUM7Ozs7Ozs7QUM5YUYsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6Ii4vcGFja2FnZXMvc3VydmV5LmFuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJ3b3JkY2xvdWRcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlBbmFseXRpY3NcIiwgW1wic3VydmV5LWNvcmVcIiwgXCJwbG90bHkuanMtZGlzdFwiLCBcIndvcmRjbG91ZFwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpLCByZXF1aXJlKFwid29yZGNsb3VkXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlBbmFseXRpY3NcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0sIHJvb3RbXCJQbG90bHlcIl0sIHJvb3RbXCJXb3JkQ2xvdWRcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM0X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU4YTc4NWVlNjI5MWFkZWM4MTk5IiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgOiBkZXNjLFxuICAgIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZVxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9oZWxwZXJzLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcblxuZGVjbGFyZSB0eXBlIFZpc3VhbGl6ZXJDb25zdHJ1Y3RvciA9IG5ldyAoXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gIG9wdGlvbnM/OiBPYmplY3RcbikgPT4gYW55O1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvbk1hbmFnZXIge1xuICBzdGF0aWMgdml6dWFsaXplcnM6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxWaXN1YWxpemVyQ29uc3RydWN0b3I+IH0gPSB7fTtcbiAgc3RhdGljIHJlZ2lzdGVyVmlzdWFsaXplcihcbiAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgIGNvbnN0cnVjdG9yOiBWaXN1YWxpemVyQ29uc3RydWN0b3JcbiAgKSB7XG4gICAgbGV0IHZpenVhbGl6ZXJzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdO1xuICAgIGlmICghdml6dWFsaXplcnMpIHtcbiAgICAgIHZpenVhbGl6ZXJzID0gW107XG4gICAgICBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV0gPSB2aXp1YWxpemVycztcbiAgICB9XG4gICAgdml6dWFsaXplcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cbiAgc3RhdGljIGdldFZpc3VhbGl6ZXJzKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgdml6dWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV07XG4gICAgaWYgKCF2aXp1YWxpemVycykge1xuICAgICAgcmV0dXJuIFtWaXN1YWxpemVyQmFzZV07XG4gICAgfVxuICAgIHJldHVybiB2aXp1YWxpemVycztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25NYW5hZ2VyLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcblxuaW1wb3J0IFwiLi92aXN1YWxpemVyQmFzZS5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemVyQmFzZSB7XG5cbiAgcHVibGljIHRvb2xiYXJJdGVtQ3JlYXRvcnM6IHsgW25hbWU6IHN0cmluZ106ICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4gSFRNTEVsZW1lbnQgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIHByb3RlY3RlZCBvcHRpb25zPzogT2JqZWN0XG4gICkge31cblxuICBwdWJsaWMgcmVnaXN0ZXJUb29sYmFySXRlbShuYW1lOiBzdHJpbmcsIGNyZWF0b3I6ICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRvb2xiYXJJdGVtQ3JlYXRvcnNbbmFtZV0gPSBjcmVhdG9yO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcInZpc3VhbGl6ZXJcIjtcbiAgfVxuXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiVGhpcyBxdWVzdGlvbiB0eXBlIGlzIG5vdCB2aXN1YWxpemVkIHlldFwiO1xuICB9XG5cbiAgcmVuZGVyKHRhcmdldEVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQgfHwgdGhpcy50YXJnZXRFbGVtZW50O1xuXG4gICAgY29uc3QgdG9vbGJhck5vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS12aXN1YWxpemVyX19jb250ZW50XCI7XG5cbiAgICB0aGlzLmNyZWF0ZVRvb2xiYXIodG9vbGJhck5vZGVDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudChjb250ZW50Q29udGFpbmVyKTtcblxuICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyTm9kZUNvbnRhaW5lcik7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMudG9vbGJhckl0ZW1DcmVhdG9ycyB8fCB7fSkuZm9yRWFjaCh0b29sYmFySXRlbU5hbWUgPT4gdGhpcy50b29sYmFySXRlbUNyZWF0b3JzW3Rvb2xiYXJJdGVtTmFtZV0odG9vbGJhcikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXIoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvb2xiYXIuY2xhc3NOYW1lID0gXCJzdmEtdG9vbGJhclwiO1xuICAgIHRoaXMuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyKTtcbiAgfVxuXG4gIGludm9rZU9uVXBkYXRlKCkge1xuICAgIHRoaXMub25VcGRhdGUgJiYgdGhpcy5vblVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0UmFuZG9tQ29sb3IoKSB7XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5nZXRDb2xvcnMoKTtcbiAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbiAgfVxuXG4gIGJhY2tncm91bmRDb2xvciA9IFwiI2Y3ZjdmN1wiO1xuXG4gIHN0YXRpYyBjdXN0b21Db2xvcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3RhdGljIGNvbG9ycyA9IFtcbiAgICBcIiM4NmUxZmJcIixcbiAgICBcIiMzOTk5ZmJcIixcbiAgICBcIiNmZjY3NzFcIixcbiAgICBcIiMxZWI0OTZcIixcbiAgICBcIiNmZmMxNTJcIixcbiAgICBcIiNhYmExZmZcIixcbiAgICBcIiM3ZDhkYTVcIixcbiAgICBcIiM0ZWM0NmNcIixcbiAgICBcIiNjZjM3YTZcIixcbiAgICBcIiM0ZTYxOThcIlxuICBdO1xuXG4gIGdldENvbG9ycyhjb3VudCA9IDEwKSB7XG4gICAgY29uc3QgY29sb3JzID1cbiAgICAgIEFycmF5LmlzQXJyYXkoVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzKSAmJlxuICAgICAgVmlzdWFsaXplckJhc2UuY3VzdG9tQ29sb3JzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnNcbiAgICAgICAgOiBWaXN1YWxpemVyQmFzZS5jb2xvcnM7XG5cbiAgICBsZXQgbWFueUNvbG9yczogYW55ID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIG1hbnlDb2xvcnMgPSBtYW55Q29sb3JzLmNvbmNhdChjb2xvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBtYW55Q29sb3JzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFsaXplckJhc2UudHMiLCJpbXBvcnQgeyBlbmdsaXNoU3RyaW5ncyB9IGZyb20gXCIuL2xvY2FsaXphdGlvbi9lbmdsaXNoXCI7XG5cbmV4cG9ydCB2YXIgbG9jYWxpemF0aW9uID0ge1xuICBjdXJyZW50TG9jYWxlVmFsdWU6IFwiXCIsXG4gIGRlZmF1bHRMb2NhbGVWYWx1ZTogXCJlblwiLFxuICBsb2NhbGVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgbG9jYWxlTmFtZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBzdXBwb3J0ZWRMb2NhbGVzOiA8QXJyYXk8YW55Pj5bXSxcbiAgZ2V0IGN1cnJlbnRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID09PSB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZVxuICAgICAgPyBcIlwiXG4gICAgICA6IHRoaXMuY3VycmVudExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgY3VycmVudExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXQgZGVmYXVsdExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBkZWZhdWx0TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldFN0cmluZzogZnVuY3Rpb24oc3RyTmFtZTogc3RyaW5nKSB7XG4gICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2FsZVxuICAgICAgPyB0aGlzLmxvY2FsZXNbdGhpcy5jdXJyZW50TG9jYWxlXVxuICAgICAgOiB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcbiAgICBpZiAoIWxvYyB8fCAhbG9jW3N0ck5hbWVdKSBsb2MgPSB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcbiAgICB2YXIgcmVzdWx0ID0gbG9jW3N0ck5hbWVdO1xuICAgIGlmKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmxvY2FsZXNbXCJlblwiXVtzdHJOYW1lXSB8fCBzdHJOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICBnZXRMb2NhbGVzOiBmdW5jdGlvbigpOiBBcnJheTxzdHJpbmc+IHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgcmVzLnB1c2goXCJcIik7XG4gICAgaWYgKHRoaXMuc3VwcG9ydGVkTG9jYWxlcyAmJiB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzLnB1c2godGhpcy5zdXBwb3J0ZWRMb2NhbGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXMuc29ydCgpO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgc3VydmV5U3RyaW5ncyA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiZW5nbGlzaFwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbk1hbmFnZXIudHMiLCJleHBvcnQgY2xhc3MgVG9vbGJhckhlbHBlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNlbGVjdG9yKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBBcnJheTx7dmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nfT4sIGlzU2VsZWN0ZWQ6IChvcHRpb246IHt2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmd9KSA9PiBib29sZWFuLCBoYW5kZXI6IChlOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uX19zZWxlY3Qtd3JhcHBlclwiO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uX19zZWxlY3RcIjtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBvcHRpb24udGV4dDtcclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5zZWxlY3RlZCA9IGlzU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGVjdC5vbmNoYW5nZSA9IGhhbmRlcjtcclxuICAgICAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdFdyYXBwZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJ1dHRvbih0b29sYmFyOiBIVE1MRGl2RWxlbWVudCwgaGFuZGVyOiAoZTogYW55KSA9PiB2b2lkLCB0ZXh0ID0gXCJcIiwgY3NzQ2xhc3MgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic3ZhLXRvb2xiYXJfX2J1dHRvbiBcIiArIGNzc0NsYXNzO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gaGFuZGVyO1xyXG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vc2VsZWN0QmFzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuTG9hZFBsb3RseSgpIHtcbiAgcmV0dXJuICEhd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkw7XG59XG5cbnZhciBQbG90bHk6IGFueTtcbmlmIChjYW5Mb2FkUGxvdGx5KCkpIHtcbiAgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlUGxvdGx5IGV4dGVuZHMgU2VsZWN0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0VHlwZXMgPSBTZWxlY3RCYXNlUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICB9XG4gIFxuICBwcml2YXRlIGNoYXJ0OiBQcm9taXNlPFBsb3RseS5QbG90bHlIVE1MRWxlbWVudD47XG4gIHByaXZhdGUgZmlsdGVyVGV4dDogSFRNTFNwYW5FbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGZpbHRlcjogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJiYXJcIiwgXCJwaWVcIiwgXCJkb3VnaG51dFwiLCBcInNjYXR0ZXJcIl07XG5cbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICBzdXBlci51cGRhdGUoZGF0YSk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0UGxvdGx5Q2hhcnQodGhpcy5jaGFydE5vZGUsIHRoaXMuY2hhcnRUeXBlKTtcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIFBsb3RseS5wdXJnZSh0aGlzLmNoYXJ0Tm9kZSk7XG4gIH1cblxuICBjcmVhdGVDaGFydCgpIHtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5nZXRQbG90bHlDaGFydCh0aGlzLmNoYXJ0Tm9kZSwgdGhpcy5jaGFydFR5cGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb24uY2hvaWNlcy5maWx0ZXIoXG4gICAgICAoY2hvaWNlOiBJdGVtVmFsdWUpID0+IGNob2ljZS50ZXh0ID09PSBpdGVtVGV4dFxuICAgIClbMF07XG4gIH1cblxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxuICAgIGNoYXJ0Tm9kZTogb2JqZWN0LFxuICAgIHRyYWNlczogQXJyYXk8b2JqZWN0PixcbiAgICBsYXlvdXQ6IG9iamVjdCxcbiAgICBjb25maWc6IG9iamVjdFxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRQbG90bHlDaGFydChcbiAgICBjaGFydE5vZGU6IEhUTUxFbGVtZW50LFxuICAgIGNoYXJ0VHlwZTogc3RyaW5nXG4gICk6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PiB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uO1xuICAgIGxldCBkYXRhc2V0cyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGxldCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpO1xuICAgIGxldCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIGNvbnN0IHRyYWNlczogYW55ID0gW107XG5cbiAgICBpZiAodGhpcy5vcmRlckJ5QW5zd2VyZXMgPT0gXCJhc2NcIiB8fCB0aGlzLm9yZGVyQnlBbnN3ZXJlcyA9PSBcImRlc2NcIikge1xuICAgICAgbGV0IGRpY3QgPSB0aGlzLnNvcnREaWN0aW9uYXJ5KFxuICAgICAgICB0aGlzLnppcEFycmF5cyhsYWJlbHMsIGNvbG9ycyksXG4gICAgICAgIGRhdGFzZXRzWzBdLCB0aGlzLm9yZGVyQnlBbnN3ZXJlcyA9PSBcImRlc2NcIlxuICAgICAgKTtcbiAgICAgIGxldCBsYWJlbHNBbmRDb2xvcnMgPSB0aGlzLnVuemlwQXJyYXlzKGRpY3Qua2V5cyk7XG4gICAgICBsYWJlbHMgPSBsYWJlbHNBbmRDb2xvcnMuZmlyc3Q7XG4gICAgICBjb2xvcnMgPSBsYWJlbHNBbmRDb2xvcnMuc2Vjb25kO1xuICAgICAgZGF0YXNldHNbMF0gPSBkaWN0LnZhbHVlcztcbiAgICB9XG4gICAgY29uc3QgdHJhY2VDb25maWc6IGFueSA9IHtcbiAgICAgIHR5cGU6IGNoYXJ0VHlwZSxcbiAgICAgIHk6IGxhYmVscy5tYXAobCA9PiB7XG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgcmV0dXJuIGwuc3Vic3RyaW5nKDAsIDI3KSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KSxcbiAgICAgIHRleHQ6IGxhYmVscyxcbiAgICAgIGhvdmVyaW5mbzogXCJ4K3lcIixcbiAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgIG1vZGU6IFwibWFya2Vyc1wiLFxuICAgICAgd2lkdGg6IDAuNSxcbiAgICAgIG1hcmtlcjogPGFueT57fVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwicGllXCIgfHwgdGhpcy5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIikge1xuICAgICAgdHJhY2VDb25maWcubWFya2VyLmNvbG9ycyA9IGNvbG9ycztcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2hhcnRUeXBlID09PSBcImJhclwiKSB7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuY29sb3IgPSBjb2xvcnM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCIpIHtcbiAgICAgIHRyYWNlQ29uZmlnLnR5cGUgPSBcInBpZVwiO1xuICAgICAgdHJhY2VDb25maWcuaG9sZSA9IDAuNDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YXNldHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0cmFjZUNvbmZpZy5tYXJrZXIuc3ltYm9sID0gXCJjaXJjbGVcIjtcbiAgICAgIHRyYWNlQ29uZmlnLm1hcmtlci5zaXplID0gMTY7XG4gICAgfVxuXG4gICAgZGF0YXNldHMuZm9yRWFjaChkYXRhc2V0ID0+IHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PT0gXCJwaWVcIiB8fCB0aGlzLmNoYXJ0VHlwZSA9PT0gXCJkb3VnaG51dFwiKSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRyYWNlQ29uZmlnLCB7XG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGFzZXQsXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVsc1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFjZXMucHVzaChPYmplY3QuYXNzaWduKHt9LCB0cmFjZUNvbmZpZywgeyB4OiBkYXRhc2V0IH0pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhlaWdodCA9XG4gICAgICBjaGFydFR5cGUgPT09IFwicGllXCIgfHwgdGhpcy5jaGFydFR5cGUgPT09IFwiZG91Z2hudXRcIlxuICAgICAgICA/IGxhYmVscy5sZW5ndGggPCAxMFxuICAgICAgICAgID8gbGFiZWxzLmxlbmd0aCAqIDUwICsgMTAwXG4gICAgICAgICAgOiA1NTBcbiAgICAgICAgOiAobGFiZWxzLmxlbmd0aCArIChsYWJlbHMubGVuZ3RoICsgMSkgKiAwLjUpICogMjA7XG5cbiAgICBjb25zdCBsYXlvdXQ6IGFueSA9IHtcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgZmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIHNpemU6IDE0LFxuICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgIGNvbG9yOiBcIiM0MDQwNDBcIlxuICAgICAgfSxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHQ6IDAsXG4gICAgICAgIGI6IDAsXG4gICAgICAgIHI6IDEwXG4gICAgICB9LFxuICAgICAgY29sb3J3YXk6IGNvbG9ycyxcbiAgICAgIGhvdmVybW9kZTogXCJjbG9zZXN0XCIsXG4gICAgICB5YXhpczoge1xuICAgICAgICBhdXRvbWFyZ2luOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImNhdGVnb3J5XCIsXG4gICAgICAgIHRpY2tsZW46IDUsXG4gICAgICAgIHRpY2tjb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwYXBlcl9iZ2NvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvclxuICAgIH07XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBkaXNwbGF5bG9nbzogZmFsc2UsXG4gICAgICByZXNwb25zaXZlOiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMucGF0Y2hDb25maWdQYXJhbWV0ZXJzKGNoYXJ0Tm9kZSwgdHJhY2VzLCBsYXlvdXQsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBwbG90ID0gUGxvdGx5Lm5ld1Bsb3QoY2hhcnROb2RlLCB0cmFjZXMsIGxheW91dCwgY29uZmlnKTtcblxuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9jbGlja1wiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoZGF0YS5wb2ludHMubGVuZ3RoID4gMCAmJiB0aGlzLm9uRGF0YUl0ZW1TZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRhdGEucG9pbnRzWzBdLnRleHQ7XG4gICAgICAgIGNvbnN0IGl0ZW06IEl0ZW1WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0KTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24oaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0RHJhZ0xheWVyID0gKCkgPT5cbiAgICAgIDxIVE1MRWxlbWVudD5jaGFydE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5zZXdkcmFnXCIpWzBdO1xuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiKTtcbiAgICB9KTtcbiAgICAoPGFueT5jaGFydE5vZGUpW1wib25cIl0oXCJwbG90bHlfdW5ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwiXCIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBsb3Q7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvc2VsZWN0QmFzZS50cyIsImltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyIH0gZnJvbSBcIi4vYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXJcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuY29uc3QgTXV1cmkgPSByZXF1aXJlKFwibXV1cmlcIik7XG5pbXBvcnQgXCIuL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlIH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBJVmlzdWFsaXplclBhbmVsRWxlbWVudCwgRWxlbWVudFZpc2liaWxpdHkgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuY29uc3QgcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25cIjtcblxuLyoqXG4gKiBWaXN1YWxpemF0aW9uUGFuZWwgaXMgcmVzcG9uc2libGUgZm9yIGRpc3BsYXlpbmcgYW4gYXJyYXkgb2Ygc3VydmV5IHF1ZXN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25QYW5lbCB7XG4gIHByaXZhdGUgX3Nob3dIZWFkZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBwYW5lbENvbnRlbnQ6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgZmlsdGVyZWREYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+O1xuICBwcm90ZWN0ZWQgZmlsdGVyVmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIHF1ZXN0aW9uczogQXJyYXk8YW55PixcbiAgICBwcm90ZWN0ZWQgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBwcm90ZWN0ZWQgb3B0aW9ucz86IE9iamVjdCxcbiAgICBwcml2YXRlIF9lbGVtZW50czogQXJyYXk8SVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQ+ID0gW10sXG4gICAgcHJpdmF0ZSBpc1RydXN0ZWRBY2Nlc3MgPSBmYWxzZVxuICApIHtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gICAgaWYoX2VsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fZWxlbWVudHMgPSB0aGlzLmJ1aWxkRWxlbWVudHMocXVlc3Rpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExheW91dEVuZ2luZTogKCkgPT4gYW55O1xuICBwcml2YXRlIGdldCBsYXlvdXRFbmdpbmUgKCkge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0TGF5b3V0RW5naW5lICYmIHRoaXMuZ2V0TGF5b3V0RW5naW5lKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRFbGVtZW50cyhxdWVzdGlvbnM6IGFueVtdKTogSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIChxdWVzdGlvbnMgfHwgW10pLm1hcChxdWVzdGlvbiA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogcXVlc3Rpb24udGl0bGUsXG4gICAgICAgIHZpc2liaWxpdHk6IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGUsXG4gICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGNlcnRhaW4gZWxlbWVudCBpcyB2aXNpYmxlLlxuICAgKi9cbiAgcHVibGljIGlzVmlzaWJsZSh2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eSkge1xuICAgIHJldHVybiB0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ICE9PSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGUgfHwgIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHZpc2libGVFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKGVsID0+IHRoaXMuaXNWaXNpYmxlKGVsLnZpc2liaWxpdHkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaGlkZGVuRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmZpbHRlcihlbCA9PiAhdGhpcy5pc1Zpc2libGUoZWwudmlzaWJpbGl0eSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVsZW1lbnQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmZpbHRlcihlbCA9PiBlbC5uYW1lID09PSBuYW1lKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGVsZW1lbnQgdmlzaWJpbGl0eSBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKi9cbiAgcHVibGljIG9uVmlzaWJsZUVsZW1lbnRzQ25haGdlZCA9IG5ldyBFdmVudDwoc2VuZGVyOiBWaXN1YWxpemF0aW9uUGFuZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgdmlzaWJsZUVsZW1lbnRzQ25haGdlZCgpIHtcbiAgICBpZighdGhpcy5vblZpc2libGVFbGVtZW50c0NuYWhnZWQuaXNFbXB0eSkge1xuICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NuYWhnZWQuZmlyZSh0aGlzLCB7fSk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgZ2l2ZW4gdmlzdWFsaXplci5cbiAgICovXG4gIHB1YmxpYyBkZXN0cm95VmlzdWFsaXplcih2aXN1YWxpemVyOiBWaXN1YWxpemVyQmFzZSkge1xuICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcbiAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIHZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIHRoaXMudmlzdWFsaXplcnMuc3BsaWNlKHRoaXMudmlzdWFsaXplcnMuaW5kZXhPZih2aXN1YWxpemVyKSwgMSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBnaXZlbiBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIHJlbmRlclZpc3VhbGl6ZXIoZWxlbWVudDogSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQpIHtcbiAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9ucy5maWx0ZXIocSA9PiBxLm5hbWUgPT09IGVsZW1lbnQubmFtZSlbMF07XG4gICAgY29uc3QgcXVlc3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCB2aXp1YWxpemVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudC5kaXNwbGF5TmFtZTtcblxuICAgIHF1ZXN0aW9uRWxlbWVudC5jbGFzc05hbWUgPSBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWU7XG4gICAgcXVlc3Rpb25Db250ZW50LmNsYXNzTmFtZSA9IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiX19jb250ZW50XCI7XG4gICAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9IHF1ZXN0aW9uRWxlbWVudENsYXNzTmFtZSArIFwiX190aXRsZVwiO1xuXG4gICAgcXVlc3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgcXVlc3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHZpenVhbGl6ZXJFbGVtZW50KTtcbiAgICBxdWVzdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25Db250ZW50KTtcblxuICAgIGNvbnN0IHZpc3VhbGl6ZXIgPSB0aGlzLmNyZWF0ZVZpenVhbGl6ZXIoXG4gICAgICB2aXp1YWxpemVyRWxlbWVudCxcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgdGhpcy5maWx0ZXJlZERhdGFcbiAgICApO1xuXG4gICAgdmlzdWFsaXplci5yZWdpc3RlclRvb2xiYXJJdGVtKFwicmVtb3ZlUXVlc3Rpb25cIiwgKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gVG9vbGJhckhlbHBlci5jcmVhdGVCdXR0b24odG9vbGJhciwgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGU7XG4gICAgICAgICAgdGhpcy5kZXN0cm95VmlzdWFsaXplcih2aXN1YWxpemVyKTtcbiAgICAgICAgICB0aGlzLmxheW91dEVuZ2luZS5yZW1vdmUoW3F1ZXN0aW9uRWxlbWVudF0pO1xuICAgICAgICAgIHRoaXMucGFuZWxDb250ZW50LnJlbW92ZUNoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgICAgICAgdGhpcy52aXNpYmxlRWxlbWVudHNDbmFoZ2VkKCk7XG4gICAgICAgIH0sIDAgKTtcbiAgICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQnV0dG9uXCIpKTtcbiAgICB9KTtcblxuICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgdmFyIGZpbHRlckluZm8gPSB7XG4gICAgICAgIHRleHQ6IDxIVE1MRWxlbWVudD51bmRlZmluZWQsXG4gICAgICAgIGVsZW1lbnQ6IDxIVE1MRGl2RWxlbWVudD51bmRlZmluZWQsXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oc2VsZWN0aW9uOiBhbnkpIHtcbiAgICAgICAgICBpZighIXNlbGVjdGlvbiAmJiAhIXNlbGVjdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVySFRNTCA9IFwiRmlsdGVyOiBbXCIgKyBzZWxlY3Rpb24udGV4dCArIFwiXVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInF1ZXN0aW9uRmlsdGVySW5mb1wiLCAodG9vbGJhcjogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICAgICAgZmlsdGVySW5mby5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmlsdGVySW5mby5lbGVtZW50LmNsYXNzTmFtZSA9IFwic3ZhLXF1ZXN0aW9uX19maWx0ZXJcIjtcbiAgICBcbiAgICAgICAgZmlsdGVySW5mby50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGZpbHRlckluZm8udGV4dC5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fZmlsdGVyLXRleHRcIjtcbiAgICAgICAgZmlsdGVySW5mby5lbGVtZW50LmFwcGVuZENoaWxkKGZpbHRlckluZm8udGV4dCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZpbHRlckNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGZpbHRlckNsZWFyLmNsYXNzTmFtZSA9IFwic3ZhLXRvb2xiYXJfX2J1dHRvblwiO1xuICAgICAgICBmaWx0ZXJDbGVhci5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiY2xlYXJCdXR0b25cIik7XG4gICAgICAgIGZpbHRlckNsZWFyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlsdGVySW5mby5lbGVtZW50LmFwcGVuZENoaWxkKGZpbHRlckNsZWFyKTtcbiAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChmaWx0ZXJJbmZvLmVsZW1lbnQpO1xuXG4gICAgICAgIGZpbHRlckluZm8udXBkYXRlKHZpc3VhbGl6ZXIuc2VsZWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZmlsdGVySW5mby5lbGVtZW50O1xuICAgICAgfSk7XG5cbiAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gKFxuICAgICAgICBzZWxlY3RlZFZhbHVlOiBhbnksXG4gICAgICAgIHNlbGVjdGVkVGV4dDogc3RyaW5nXG4gICAgICApID0+IHtcbiAgICAgICAgZmlsdGVySW5mby51cGRhdGUoeyB2YWx1ZTogc2VsZWN0ZWRWYWx1ZSwgdGV4dDogc2VsZWN0ZWRUZXh0IH0pO1xuICAgICAgICB0aGlzLmFwcGx5RmlsdGVyKHF1ZXN0aW9uLm5hbWUsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2aXN1YWxpemVyLnJlbmRlcigpO1xuICAgIHZpc3VhbGl6ZXIub25VcGRhdGUgPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuICAgIHRoaXMudmlzdWFsaXplcnMucHVzaCh2aXN1YWxpemVyKTtcblxuICAgIHJldHVybiBxdWVzdGlvbkVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhbGwgcXVlc3Rpb25zIGludG8gZ2l2ZW4gSFRNTCBjb250YWluZXIgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgbGV0IGxheW91dEVuZ2luZTogYW55ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ2V0TGF5b3V0RW5naW5lID0gKCkgPT4gbGF5b3V0RW5naW5lO1xuXG4gICAgdGhpcy5wYW5lbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMucGFuZWxDb250ZW50LmNsYXNzTmFtZSA9IFwic3ZhLWdyaWRcIjtcblxuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBsZXQgcXVlc3Rpb25FbGVtZW50ID0gdGhpcy5yZW5kZXJWaXN1YWxpemVyKGVsZW1lbnQpO1xuICAgICAgdGhpcy5wYW5lbENvbnRlbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25FbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuc2hvd0hlYWRlcikge1xuICAgICAgY29uc3QgcGFuZWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGFuZWxIZWFkZXIuY2xhc3NOYW1lID0gXCJzdmEtcGFuZWxfX2hlYWRlclwiO1xuICAgICAgY29uc3QgdG9vbG9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9vbG9iYXIuY2xhc3NOYW1lID0gXCJzdmEtdG9vbGJhclwiO1xuICAgICAgdGhpcy5jcmVhdGVUb29sYmFySXRlbXModG9vbG9iYXIpO1xuICAgICAgcGFuZWxIZWFkZXIuYXBwZW5kQ2hpbGQodG9vbG9iYXIpO1xuICAgICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHBhbmVsSGVhZGVyKTtcbiAgICB9XG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucGFuZWxDb250ZW50KTtcblxuICAgIHZhciBtb3ZlSGFuZGxlciA9IChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzLnNwbGljZShkYXRhLmZyb21JbmRleCwgMSk7XG4gICAgICB0aGlzLl9lbGVtZW50cy5zcGxpY2UoZGF0YS50b0luZGV4LCAwLCBlbGVtZW50c1swXSk7XG4gICAgfVxuXG4gICAgbGF5b3V0RW5naW5lID0gbmV3IE11dXJpKHRoaXMucGFuZWxDb250ZW50LCB7XG4gICAgICBpdGVtczogXCIuc3ZhLXF1ZXN0aW9uXCIsXG4gICAgICBkcmFnRW5hYmxlZDogdHJ1ZVxuICAgIH0pO1xuICAgIGxheW91dEVuZ2luZS5vbihcIm1vdmVcIiwgbW92ZUhhbmRsZXIpO1xuICAgICEhd2luZG93ICYmIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBVSUV2ZW50KCdyZXNpemUnKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgcmVzZXRGaWx0ZXJCdXR0b24gPSBUb29sYmFySGVscGVyLmNyZWF0ZUJ1dHRvbih0b29sYmFyLCAoKSA9PiB7XG4gICAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2godmlzdWFsaXplciA9PiB7XG4gICAgICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgICAgIHZpc3VhbGl6ZXIuc2V0U2VsZWN0aW9uKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZXNldEZpbHRlclwiKSk7XG4gICAgdG9vbGJhci5hcHBlbmRDaGlsZChyZXNldEZpbHRlckJ1dHRvbik7XG5cbiAgICBsZXQgYWRkRWxlbWVudFNlbGVjdG9yOiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyID0gKHBhbmVsOiBWaXN1YWxpemF0aW9uUGFuZWwsIF86IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSB0aGlzLmhpZGRlbkVsZW1lbnRzO1xuICAgICAgaWYgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IodG9vbGJhcixcbiAgICAgICAgICBbPGFueT57bmFtZTogdW5kZWZpbmVkLCBkaXNwbGF5TmFtZTogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFkZEVsZW1lbnRcIil9XS5jb25jYXQoaGlkZGVuRWxlbWVudHMpLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBlbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHRleHQ6IGVsZW1lbnQuZGlzcGxheU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgKG9wdGlvbjogYW55KSA9PiBmYWxzZSxcbiAgICAgICAgICAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBlbGVtZW50LnZpc2liaWxpdHkgPSBFbGVtZW50VmlzaWJpbGl0eS5WaXNpYmxlOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25FbGVtZW50ID0gdGhpcy5yZW5kZXJWaXN1YWxpemVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5wYW5lbENvbnRlbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25FbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0RW5naW5lLmFkZChbcXVlc3Rpb25FbGVtZW50XSk7XG4gICAgICAgICAgICB0aGlzLnZpc2libGVFbGVtZW50c0NuYWhnZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciAmJiB0b29sYmFyLnJlcGxhY2VDaGlsZChzZWxlY3RXcmFwcGVyLCBhZGRFbGVtZW50U2VsZWN0b3IpIHx8IHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0V3JhcHBlcik7XG4gICAgICAgIGFkZEVsZW1lbnRTZWxlY3RvciA9IHNlbGVjdFdyYXBwZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgJiYgdG9vbGJhci5yZW1vdmVDaGlsZChhZGRFbGVtZW50U2VsZWN0b3IpO1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZEVsZW1lbnRTZWxlY3RvclVwZGF0ZXIodGhpcywge30pO1xuICAgIHRoaXMub25WaXNpYmxlRWxlbWVudHNDbmFoZ2VkLmFkZChhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB2aXN1YWxpemVyIGFuZCBhbGwgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGxldCBsYXlvdXRFbmdpbmUgPSAhIXRoaXMuZ2V0TGF5b3V0RW5naW5lICYmIHRoaXMuZ2V0TGF5b3V0RW5naW5lKCk7XG4gICAgaWYoISFsYXlvdXRFbmdpbmUpIHtcbiAgICAgIGxheW91dEVuZ2luZS5vZmYoXCJtb3ZlXCIpO1xuICAgICAgbGF5b3V0RW5naW5lLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2V0TGF5b3V0RW5naW5lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnBhbmVsQ29udGVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2godmlzdWFsaXplciA9PiB7XG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHZpc3VhbGl6ZXIgaW5zdGFuY2VvZiBTZWxlY3RCYXNlKSB7XG4gICAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy52aXN1YWxpemVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdmlzdWFsaXplciBhbmQgYWxsIGlubmVyIGNvbnRlbnQuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmKGhhcmQgJiYgdGhpcy52aXN1YWxpemVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCh2aXN1YWxpemVyID0+XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdmlzdWFsaXplci51cGRhdGUodGhpcy5maWx0ZXJlZERhdGEpLCAxMClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgbGF5b3V0IG9mIHZpc3VhbGl6ZXIgaW5uZXIgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgY29uc3QgbGF5b3V0RW5naW5lID0gdGhpcy5sYXlvdXRFbmdpbmU7XG4gICAgaWYgKCEhbGF5b3V0RW5naW5lKSB7XG4gICAgICBsYXlvdXRFbmdpbmUucmVmcmVzaEl0ZW1zKCk7XG4gICAgICBsYXlvdXRFbmdpbmUubGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgZmlsdGVyIGJ5IHF1ZXN0aW9uIG5hbWUgYW5kIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGFwcGx5RmlsdGVyKFxuICAgIHF1ZXN0aW9uTmFtZTogc3RyaW5nLFxuICAgIHNlbGVjdGVkVmFsdWU6IGFueVxuICApIHtcbiAgICB2YXIgZmlsdGVyQ2hhbmdlZCA9IHRydWU7XG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZmlsdGVyQ2hhbmdlZCA9IHRoaXMuZmlsdGVyVmFsdWVzW3F1ZXN0aW9uTmFtZV0gIT09IHNlbGVjdGVkVmFsdWU7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdID0gc2VsZWN0ZWRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyQ2hhbmdlZCA9IHRoaXMuZmlsdGVyVmFsdWVzW3F1ZXN0aW9uTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdO1xuICAgIH1cbiAgICBpZihmaWx0ZXJDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5maWx0ZXJWYWx1ZXMpLnNvbWUoXG4gICAgICAgICAga2V5ID0+IGl0ZW1ba2V5XSAhPT0gdGhpcy5maWx0ZXJWYWx1ZXNba2V5XVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHZpc3V6bGl6ZXIgYnkgcXVlc3Rpb24uXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlVml6dWFsaXplcihcbiAgICB2aXp1YWxpemVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT5cbiAgKTogVmlzdWFsaXplckJhc2Uge1xuICAgIHZhciBjcmVhdG9ycyA9IFZpc3VhbGl6YXRpb25NYW5hZ2VyLmdldFZpc3VhbGl6ZXJzKHF1ZXN0aW9uLmdldFR5cGUoKSk7XG4gICAgdmFyIHZpc3VhbGl6ZXJzID0gY3JlYXRvcnMubWFwKGNyZWF0b3IgPT4gbmV3IGNyZWF0b3Iodml6dWFsaXplckVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhKSk7XG4gICAgaWYodmlzdWFsaXplcnMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHZpc3VhbGl6ZXIgPSBuZXcgQWx0ZXJuYXRpdmVWaXN1YWxpemVyc1dyYXBwZXIodmlzdWFsaXplcnMsIHZpenVhbGl6ZXJFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSk7XG4gICAgICByZXR1cm4gdmlzdWFsaXplcjtcbiAgICB9XG4gICAgcmV0dXJuIHZpc3VhbGl6ZXJzWzBdO1xuICB9XG5cbiAgZ2V0IHNob3dIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dIZWFkZXI7XG4gIH1cbiAgc2V0IHNob3dIZWFkZXIobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZihuZXdWYWx1ZSAhPSB0aGlzLl9zaG93SGVhZGVyKSB7XG4gICAgICB0aGlzLl9zaG93SGVhZGVyID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZSh0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uUGFuZWwudHMiLCJpbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uUGFuZWwgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uUGFuZWxcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldE5vZGUsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goXG4gICAgICBkYXRhSXRlbSA9PlxuICAgICAgICAhIWRhdGFJdGVtW3F1ZXN0aW9uLm5hbWVdICYmXG4gICAgICAgICh0aGlzLmRhdGEgPSB0aGlzLmRhdGEuY29uY2F0KGRhdGFJdGVtW3F1ZXN0aW9uLm5hbWVdKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IHBhbmVsZHluYW1pYzogUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcGFuZWxkeW5hbWljLnBhbmVsc1swXS5xdWVzdGlvbnM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHZpc1BhbmVsID0gbmV3IFZpc3VhbGl6YXRpb25QYW5lbChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VtbWFyeUNvbnRhaW5lclwiKSxcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCksXG4gICAgICB0aGlzLmRhdGFcbiAgICApO1xuICAgIHZpc1BhbmVsLnJlbmRlcigpO1xuICB9XG5cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcInBhbmVsZHluYW1pY1wiLFxuICBWaXN1YWxpemF0aW9uUGFuZWxEeW5hbWljXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMudHMiLCJpbXBvcnQgeyBzdG9wV29yZHMgfSBmcm9tIFwiLi9lbmdsaXNoXCI7XG5cbnZhciBzdG9wV29yZHNEaWN0aW9uYXJ5OiB7IFtpbmRleDogc3RyaW5nXTogQXJyYXk8c3RyaW5nPiB9ID0ge307XG5zdG9wV29yZHNEaWN0aW9uYXJ5W1wiZW5cIl0gPSBzdG9wV29yZHM7XG5cbmV4cG9ydCB2YXIgdGV4dEhlbHBlciA9IHtcbiAgZ2V0U3RvcFdvcmRzOiAobG9jYWxlOiBzdHJpbmcgPSBcIlwiKSA9PiB7XG4gICAgcmV0dXJuIHN0b3BXb3Jkc0RpY3Rpb25hcnlbbG9jYWxlIHx8IFwiZW5cIl0gfHwgW107XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9pbmRleC50cyIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblNlbGVjdEJhc2UsIEl0ZW1WYWx1ZSB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBwcml2YXRlIHNlbGVjdGVkSXRlbTogSXRlbVZhbHVlID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgb3JkZXJCeUFuc3dlcmVzOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNoYXJ0VHlwZXM6IHN0cmluZ1tdO1xuICBwcm90ZWN0ZWQgY2hhcnRUeXBlOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBjaGFydE5vZGU6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb3RlY3RlZCBvbkNoYXJ0VHlwZUNoYW5nZWQoKSB7fVxuICBwcm90ZWN0ZWQgc2V0Q2hhcnRUeXBlKGNoYXJ0VHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jaGFydFR5cGVzLmluZGV4T2YoY2hhcnRUeXBlKSAhPT0gLTEgJiZcbiAgICAgIHRoaXMuY2hhcnRUeXBlICE9PSBjaGFydFR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gY2hhcnRUeXBlO1xuICAgICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICAgICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNoYXJ0KCkge31cblxuICBzZXRTZWxlY3Rpb24oaXRlbTogSXRlbVZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIHRoaXMub25EYXRhSXRlbVNlbGVjdGVkKChpdGVtICYmIGl0ZW0udmFsdWUpIHx8IHVuZGVmaW5lZCwgKGl0ZW0gJiYgaXRlbS50ZXh0KSB8fCBcIlwiKTtcbiAgfVxuICBnZXQgc2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXRMYWJlbHNPcmRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5vcmRlckJ5QW5zd2VyZXMgPSB2YWx1ZTtcbiAgfVxuICBvbkRhdGFJdGVtU2VsZWN0ZWQ6IChzZWxlY3RlZFZhbHVlOiBhbnksIHNlbGVjdGVkVGV4dDogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hhcnROb2RlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVUb29sYmFySXRlbXModG9vbGJhcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5jaGFydFR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBUb29sYmFySGVscGVyLmNyZWF0ZVNlbGVjdG9yKHRvb2xiYXIsXG4gICAgICAgIHRoaXMuY2hhcnRUeXBlcy5tYXAoY2hhcnRUeXBlID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGNoYXJ0VHlwZSxcbiAgICAgICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFydFR5cGVfXCIgKyBjaGFydFR5cGUpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIChvcHRpb246IGFueSkgPT4gdGhpcy5jaGFydFR5cGUgPT09IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgKGU6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q2hhcnRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB0aGlzLm9uQ2hhcnRUeXBlQ2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChzZWxlY3RXcmFwcGVyKTtcbiAgICB9XG4gICAgc3VwZXIuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICB9XG5cbiAgdmFsdWVzU291cmNlKCk6IGFueVtdIHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IDxRdWVzdGlvblNlbGVjdEJhc2U+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcXVlc3Rpb25bXCJhY3RpdmVDaG9pY2VzXCJdO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IHZhbHVlczogQXJyYXk8YW55PiA9IHRoaXMudmFsdWVzU291cmNlKCkubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xuXG4gICAgaWYgKHRoaXMucXVlc3Rpb24uaGFzT3RoZXIpIHZhbHVlcy51bnNoaWZ0KFwib3RoZXJcIik7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIGNvbnN0IGxhYmVsczogQXJyYXk8c3RyaW5nPiA9IHRoaXMudmFsdWVzU291cmNlKCkubWFwKGNob2ljZSA9PlxuICAgICAgSXRlbVZhbHVlLmdldFRleHRPckh0bWxCeVZhbHVlKHRoaXMudmFsdWVzU291cmNlKCksIGNob2ljZS52YWx1ZSlcbiAgICApO1xuXG4gICAgaWYgKHRoaXMucXVlc3Rpb24uaGFzT3RoZXIpIGxhYmVscy51bnNoaWZ0KFwiT3RoZXJcIik7XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnlbXSB7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzID0gdmFsdWVzLm1hcCh2ID0+IDApO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3dWYWx1ZS5pbmRleE9mKHZhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIHN0YXRpc3RpY3NbaW5kZXhdKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocm93VmFsdWUgPT0gdmFsKSB7XG4gICAgICAgICAgICAgIHN0YXRpc3RpY3NbaW5kZXhdKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gW3N0YXRpc3RpY3NdO1xuICB9XG4gIHppcEFycmF5cyhmaXJzdDogYW55W10sIHNlY29uZDogYW55W10pOiBhbnlbXVtdIHtcbiAgICBsZXQgemlwQXJyYXk6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihmaXJzdC5sZW5ndGgsIHNlY29uZC5sZW5ndGgpOyBpKyspIHtcbiAgICAgIHppcEFycmF5W2ldID0gW2ZpcnN0W2ldLCBzZWNvbmRbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gemlwQXJyYXk7XG4gIH1cbiAgdW56aXBBcnJheXMoemlwQXJyYXk6IGFueVtdW10pOiB7IGZpcnN0OiBhbnlbXTsgc2Vjb25kOiBhbnlbXSB9IHtcbiAgICBsZXQgdHdvQXJyYXlzOiBhbnkgPSB7IGZpcnN0OiBbXSwgc2Vjb25kOiBbXSB9O1xuICAgIHppcEFycmF5LmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICB0d29BcnJheXMuZmlyc3RbaV0gPSB2YWx1ZVswXTtcbiAgICAgIHR3b0FycmF5cy5zZWNvbmRbaV0gPSB2YWx1ZVsxXTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHdvQXJyYXlzO1xuICB9XG4gIHNvcnREaWN0aW9uYXJ5KFxuICAgIGtleXM6IGFueVtdLFxuICAgIHZhbHVlczogYW55W10sXG4gICAgZGVzYzogYm9vbGVhblxuICApOiB7IGtleXM6IGFueVtdOyB2YWx1ZXM6IGFueVtdIH0ge1xuICAgIGxldCBkaWN0aW9uYXJ5ID0gdGhpcy56aXBBcnJheXMoa2V5cywgdmFsdWVzKTtcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSBhWzFdIDwgYlsxXSA/IDEgOiBhWzFdID09IGJbMV0gPyAwIDogLTE7XG4gICAgICByZXR1cm4gYXNjID8gcmVzdWx0IDogcmVzdWx0ICogLTE7XG4gICAgfTtcbiAgICBkaWN0aW9uYXJ5LnNvcnQoKGE6IGFueVtdLCBiOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIGRlc2MgPyBjb21wYXJhdG9yKGEsIGIsIGZhbHNlKSA6IGNvbXBhcmF0b3IoYSwgYik7XG4gICAgfSk7XG4gICAgbGV0IGtleXNBbmRWYWx1ZXMgPSB0aGlzLnVuemlwQXJyYXlzKGRpY3Rpb25hcnkpO1xuICAgIHJldHVybiB7IGtleXM6IGtleXNBbmRWYWx1ZXMuZmlyc3QsIHZhbHVlczoga2V5c0FuZFZhbHVlcy5zZWNvbmQgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdEJhc2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQbG90bHlcIixcImNvbW1vbmpzMlwiOlwicGxvdGx5LmpzLWRpc3RcIixcImNvbW1vbmpzXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiYW1kXCI6XCJwbG90bHkuanMtZGlzdFwifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgUXVlc3Rpb24sIEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQge1xuICBJVGFibGVDb2x1bW4sXG4gIENvbHVtblZpc2liaWxpdHksXG4gIFF1ZXN0aW9uTG9jYXRpb24sXG4gIENvbHVtbkRhdGFUeXBlXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuaW1wb3J0IFwiLi9kYXRhdGFibGVzLnNjc3NcIjtcblxuaWYgKCEhZG9jdW1lbnQpIHtcbiAgdmFyIHN2Z1RlbXBsYXRlID0gcmVxdWlyZShcImh0bWwtbG9hZGVyP2ludGVycG9sYXRlIXZhbC1sb2FkZXIhLi4vc3ZnYnVuZGxlLmh0bWxcIik7XG4gIHZhciB0ZW1wbGF0ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGVtcGxhdGVIb2xkZXIuaW5uZXJIVE1MID0gc3ZnVGVtcGxhdGU7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kKHRlbXBsYXRlSG9sZGVyKTtcbn1cblxuaW50ZXJmYWNlIERhdGFUYWJsZXNPcHRpb25zIHtcbiAgYnV0dG9uczogYm9vbGVhbiB8IHN0cmluZ1tdIHwgYW55W10gfCBhbnk7XG5cbiAgZG9tOiBzdHJpbmc7XG5cbiAgb3JkZXJGaXhlZDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IEFycmF5PEFycmF5PG51bWJlciB8IHN0cmluZz4+IHwgb2JqZWN0O1xuXG4gIHJvd0dyb3VwOiBib29sZWFuIHwgYW55O1xuXG4gIGhlYWRlckNhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVzIHtcbiAgcHJpdmF0ZSBzdmdOb2RlOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBkYXRhdGFibGVBcGk6IGFueTtcbiAgcHJpdmF0ZSB0YWJsZURhdGE6IGFueTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGlzIGZpcmVkIGNvbHVtbnMgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKiA8YnIvPiBzZW5kZXIgdGhlIGRhdGF0YWJsZXMgYWRhcHRlclxuICAgKiA8YnIvPiBvcHRpb25zLnN1cnZleSBjdXJyZW50IHN1cnZleVxuICAgKiBAc2VlIGdldENvbHVtbnNcbiAgICovXG4gIHB1YmxpYyBjb2x1bW5zQ2hhbmdlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcbiAgICBwcml2YXRlIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEYXRhVGFibGVzT3B0aW9ucyxcbiAgICBwcml2YXRlIF9jb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+ID0gW10sXG4gICAgcHJpdmF0ZSBpc1RydXN0ZWRBY2Nlc3MgPSBmYWxzZVxuICApIHtcbiAgICB0YXJnZXROb2RlLmNsYXNzTmFtZSArPSBcInNhLWRhdGF0YWJsZXNcIjtcbiAgICB0aGlzLmhlYWRlckJ1dHRvbkNyZWF0b3JzID0gW1xuICAgICAgLy8gdGhpcy5jcmVhdGVHcm91cGluZ0J1dHRvbixcbiAgICAgIHRoaXMuY3JlYXRlU29ydEJ1dHRvbixcbiAgICAgIHRoaXMuY3JlYXRlSGlkZUJ1dHRvbixcbiAgICAgIHRoaXMuY3JlYXRlTW92ZVRvRGV0YWlsQnV0dG9uLFxuICAgICAgdGhpcy5jcmVhdGVEcmFnQnV0dG9uXG4gICAgXTtcbiAgICB0aGlzLmRldGFpbEJ1dHRvbkNyZWF0b3JzID0gW3RoaXMuY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uXTtcbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFibGVEYXRhKGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGFibGVEYXRhKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLnRhYmxlRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoaXRlbSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IGl0ZW1bY29sdW1uLm5hbWVdO1xuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uZGlzcGxheVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFJdGVtW2NvbHVtbi5uYW1lXSA9XG4gICAgICAgICAgdHlwZW9mIGRpc3BsYXlWYWx1ZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkaXNwbGF5VmFsdWVcbiAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkoZGlzcGxheVZhbHVlKSB8fCBcIlwiO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGF0YUl0ZW07XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Db2x1bW5zQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmNvbHVtbnNDaGFuZ2VkLmZpcmUodGhpcywgeyBzdXJ2ZXk6IHRoaXMuc3VydmV5IH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyhzdXJ2ZXk6IFN1cnZleU1vZGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpLm1hcCgocXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkYXRhVHlwZTpcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXG4gICAgICAgICAgICA/IENvbHVtbkRhdGFUeXBlLlRleHRcbiAgICAgICAgICAgIDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6XG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIlxuICAgICAgICAgICAgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGVcbiAgICAgICAgICAgIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtblxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpc1Zpc2libGUodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSAhPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpIHx8XG4gICAgICAoIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cbiAgcHVibGljIHNldCBjb2x1bW5zKGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShoYXJkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICBpZiAoaGFyZCkge1xuICAgICAgICB0aGlzLmluaXRUYWJsZURhdGEodGhpcy5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVuZGVyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ3JvdXBCeTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy9pZighdGhpcy50YXJnZXROb2RlKSByZXR1cm47XG4gICAgY29uc3QgdGFibGVOb2RlID0gdGhpcy50YXJnZXROb2RlLmNoaWxkcmVuWzBdO1xuICAgIGlmICgoPGFueT4kLmZuKS5EYXRhVGFibGUuaXNEYXRhVGFibGUodGFibGVOb2RlKSkge1xuICAgICAgJCh0YWJsZU5vZGUpXG4gICAgICAgIC5EYXRhVGFibGUoKVxuICAgICAgICAuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmRhdGF0YWJsZUFwaSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIGNyZWF0ZUFjdGlvbkNvbnRhaW5lcigpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX19hY3Rpb24tY29udGFpbmVyXCI7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG4gIGNyZWF0ZU1pbm9yQ29sdW1uc0J1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TWlub3JDb2x1bW5zXCIpO1xuXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlc19fc3ZnLWJ1dHRvblwiO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVN2Z0VsZW1lbnQoXCJkZXRhaWxcIikpO1xuICAgIHJldHVybiBidXR0b247XG4gIH1cbiAgc2V0TWlub3JDb2x1bW5zQnV0dG9uQ2FsbGJhY2soZGF0YXRhYmxlQXBpUmVmOiBEYXRhVGFibGVzLkFwaSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAkKFwidGQuc2EtZGF0YXRhYmxlc19fYWN0aW9uLWNvbHVtbiBidXR0b24uc2EtZGF0YXRhYmxlc19fc3ZnLWJ1dHRvblwiKS5vbihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkZXRhaWxUciA9ICQodGhpcykuY2xvc2VzdChcInRyXCIpO1xuICAgICAgICB2YXIgcm93ID0gZGF0YXRhYmxlQXBpUmVmLnJvdyhkZXRhaWxUcik7XG4gICAgICAgIGlmIChkZXRhaWxUci5oYXNDbGFzcyhcInNhLWRhdGF0YWJsZXNfX2RldGFpbC1yb3dcIikpIHtcbiAgICAgICAgICBkZXRhaWxUci5uZXh0QWxsKFwidHIuc2EtZGF0YXRhYmxlc19fZGV0YWlsXCIpLnJlbW92ZSgpO1xuICAgICAgICAgIGRldGFpbFRyLnJlbW92ZUNsYXNzKFwic2EtZGF0YXRhYmxlc19fZGV0YWlsLXJvd1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHNlbGYuY3JlYXRlRGV0YWlsTWFya3VwKHJvdy5kYXRhKCkpKS5pbnNlcnRBZnRlcihkZXRhaWxUcik7XG4gICAgICAgICAgZGV0YWlsVHIuYWRkQ2xhc3MoXCJzYS1kYXRhdGFibGVzX19kZXRhaWwtcm93XCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IHRhYmxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB2YXIgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xuICAgIHZhciBjb2x1bW5zRGF0YTogYW55ID0gY29sdW1ucy5tYXAoKGM6IGFueSkgPT4gYy5kYXRhKTtcbiAgICBjb25zdCBkdEJ1dHRvbkNsYXNzID1cbiAgICAgIFwic2EtZGF0YXRhYmxlc19fYnV0dG9uIHNhLWRhdGF0YWJsZXNfX2J1dHRvbi0tc21hbGwgc2EtZGF0YXRhYmxlc19fYnV0dG9uLS1ncmF5XCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKFxuICAgICAgdHJ1ZSxcbiAgICAgIHtcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHsgZXh0ZW5kOiBcImNvcHlcIiwgY2xhc3NOYW1lOiBkdEJ1dHRvbkNsYXNzIH0sXG4gICAgICAgICAgeyBleHRlbmQ6IFwiY3N2XCIsIGNsYXNzTmFtZTogZHRCdXR0b25DbGFzcyB9LFxuICAgICAgICAgIHsgZXh0ZW5kOiBcInByaW50XCIsIGNsYXNzTmFtZTogZHRCdXR0b25DbGFzcyB9XG4gICAgICAgIF0sXG4gICAgICAgIGRvbTogXCJCZnBscnRpcFwiLFxuICAgICAgICBkYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgICAgcGFnZUxlbmd0aDogNSxcbiAgICAgICAgbGVuZ3RoTWVudTogWzEsIDUsIDEwLCAyNSwgNTAsIDc1LCAxMDBdLFxuICAgICAgICByZXNwb25zaXZlOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcbiAgICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgICAgY29sUmVvcmRlcjoge1xuICAgICAgICAgIGZpeGVkQ29sdW1uc0xlZnQ6IDEsXG4gICAgICAgICAgcmVhbHRpbWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIG9yZGVyRml4ZWQ6IFtbMSwgXCJhc2NcIl1dLFxuICAgICAgICByb3dHcm91cDoge1xuICAgICAgICAgIGRhdGFTcmM6IGNvbHVtbnNEYXRhWzBdLFxuICAgICAgICAgIGVuZFJlbmRlcjogKHJvd3M6IGFueSwgZ3JvdXA6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFwiQ291bnQ6IFwiICsgcm93cy5kYXRhKCkuY291bnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgc1NlYXJjaDogXCIgXCIsXG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgICAgc0xlbmd0aE1lbnU6IFwiU2hvdyBfTUVOVV8gZW50cmllc1wiLFxuICAgICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgICBwcmV2aW91czogXCIgXCIsXG4gICAgICAgICAgICBuZXh0OiBcIiBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiBcImFwaVwiLFxuICAgICAgICBoZWFkZXJDYWxsYmFjazogKFxuICAgICAgICAgIHRoZWFkOiBhbnksXG4gICAgICAgICAgZGF0YTogYW55LFxuICAgICAgICAgIHN0YXJ0OiBhbnksXG4gICAgICAgICAgZW5kOiBhbnksXG4gICAgICAgICAgZGlzcGxheTogYW55XG4gICAgICAgICkgPT4ge1xuICAgICAgICAgIHZhciBkYXRhdGFibGVBcGkgPSAkKHRhYmxlTm9kZSlcbiAgICAgICAgICAgIC5kYXRhVGFibGUoKVxuICAgICAgICAgICAgLmFwaSgpO1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAkKHRoZWFkKVxuICAgICAgICAgICAgLmNoaWxkcmVuKFwidGhcIilcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgdmFyICR0aE5vZGUgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICBpZiAoISFjb2x1bW5zRGF0YVtpbmRleF0gJiYgJHRoTm9kZS5oYXMoXCJidXR0b25cIikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHNlbGYuY3JlYXRlQWN0aW9uQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5oZWFkZXJCdXR0b25DcmVhdG9ycy5mb3JFYWNoKGNyZWF0b3IgPT4ge1xuICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBjcmVhdG9yKFxuICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGVBcGksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zRGF0YVtpbmRleF1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAoISFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGZpbHRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZXNfX2ZpbHRlci1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgICBmaWx0ZXJDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTZWFyY2guLi4nIC8+XCI7XG4gICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IGRhdGF0YWJsZUFwaS5jb2x1bW4oaW5kZXgpO1xuICAgICAgICAgICAgICAgICQoXCJpbnB1dFwiLCAkKGZpbHRlckNvbnRhaW5lcikpLm9uKFwiY2xpY2tcIiwgZSA9PlxuICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgJChcImlucHV0XCIsICQoZmlsdGVyQ29udGFpbmVyKSkub24oXCJrZXl1cCBjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcykudmFsdWU7XG4gICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLnNlYXJjaCgpICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc2VhcmNoKHZhbHVlKS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJHRoTm9kZS5wcmVwZW5kKGZpbHRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgJHRoTm9kZS5wcmVwZW5kKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9uc1xuICAgICk7XG5cbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcbiAgICB0YWJsZU5vZGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX190YWJsZSBkaXNwbGF5IHJlc3BvbnNpdmUgZGF0YVRhYmxlXCI7XG5cbiAgICBjb25zdCBkYXRhdGFibGVBcGlSZWYgPSAodGhpcy5kYXRhdGFibGVBcGkgPSAkKHRhYmxlTm9kZSkuRGF0YVRhYmxlKFxuICAgICAgb3B0aW9uc1xuICAgICkpO1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpXG4gICAgICAucm93R3JvdXAoKVxuICAgICAgLmVuYWJsZShmYWxzZSlcbiAgICAgIC5kcmF3KCk7XG5cbiAgICAvLyB0aGlzLmRhdGF0YWJsZUFwaS5vbihcInJvd2dyb3VwLWRhdGFzcmNcIiwgKGUsIGR0LCB2YWwpID0+IHtcbiAgICAvLyAgIHRoaXMuZGF0YXRhYmxlQXBpLm9yZGVyLmZpeGVkKHsgcHJlOiBbW2NvbHVtbnNEYXRhLmluZGV4T2YodmFsKSwgXCJhc2NcIl1dIH0pLmRyYXcoKTtcbiAgICAvLyB9KTtcbiAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLnRhcmdldE5vZGUpLmZpbmQoXCIuZGF0YVRhYmxlc19maWx0ZXJcIik7XG4gICAgdmFyIGJ1dHRvbiA9IHRoaXMuY3JlYXRlQWRkQ29sdW1uQnV0dG9uKHRoaXMuZGF0YXRhYmxlQXBpKTtcbiAgICAkKGJ1dHRvbikuaW5zZXJ0QWZ0ZXIodGFyZ2V0WzBdKTtcblxuICAgIGRhdGF0YWJsZUFwaVJlZi5vbihcbiAgICAgIFwiY29sdW1uLXJlb3JkZXJcIixcbiAgICAgIChlOiBhbnksIHNldHRpbmdzOiBhbnksIGRldGFpbHM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGV0YWlscy5kcm9wKSB7XG4gICAgICAgICAgdmFyIGRlbGV0ZWRDb2x1bW5zID0gdGhpcy5fY29sdW1ucy5zcGxpY2UoZGV0YWlscy5mcm9tIC0gMSwgMSk7XG4gICAgICAgICAgdGhpcy5fY29sdW1ucy5zcGxpY2UoZGV0YWlscy50byAtIDEsIDAsIGRlbGV0ZWRDb2x1bW5zWzBdKTtcbiAgICAgICAgICB2YXIgaGVhZGVyQ2VsbCA9ICQoZGF0YXRhYmxlQXBpUmVmLmNvbHVtbihkZXRhaWxzLnRvKS5oZWFkZXIoKSk7XG4gICAgICAgICAgdGhpcy5zZXRNaW5vckNvbHVtbnNCdXR0b25DYWxsYmFjayhkYXRhdGFibGVBcGlSZWYpO1xuICAgICAgICAgIHRoaXMub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnNldE1pbm9yQ29sdW1uc0J1dHRvbkNhbGxiYWNrKGRhdGF0YWJsZUFwaVJlZik7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRGV0YWlsTWFya3VwKGRhdGE6IGFueSk6IEhUTUxFbGVtZW50W10ge1xuICAgIC8vIHZhciB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAvLyB0YWJsZS5jZWxsUGFkZGluZyA9IFwiNVwiO1xuICAgIC8vIHRhYmxlLmNlbGxTcGFjaW5nID0gXCIwXCI7XG4gICAgLy8gdGFibGUuYm9yZGVyID0gXCIwXCI7XG4gICAgLy8gdGFibGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX19kZXRhaWxcIjtcbiAgICB2YXIgcm93czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgdmlzaWJsZUNvbENvdW50ID0gc2VsZi5jb2x1bW5zLmZpbHRlcihcbiAgICAgIGNvbHVtbiA9PlxuICAgICAgICBjb2x1bW4ubG9jYXRpb24gPT09IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uICYmXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KVxuICAgICkubGVuZ3RoO1xuICAgIHRoaXMuY29sdW1uc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgY29sdW1uID0+XG4gICAgICAgICAgY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJlxuICAgICAgICAgIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KVxuICAgICAgKVxuICAgICAgLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgcm93LmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlc19fZGV0YWlsXCI7XG4gICAgICAgIHZhciB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMS50ZXh0Q29udGVudCA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgdGQxLmNvbFNwYW4gPSAyO1xuICAgICAgICB2YXIgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZDIudGV4dENvbnRlbnQgPSBkYXRhW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgdmFyIHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQzLmNvbFNwYW4gPSBNYXRoLm1heCh2aXNpYmxlQ29sQ291bnQgLSAyLCAxKTtcbiAgICAgICAgc2VsZi5kZXRhaWxCdXR0b25DcmVhdG9ycy5mb3JFYWNoKGNyZWF0b3IgPT5cbiAgICAgICAgICB0ZDMuYXBwZW5kQ2hpbGQoY3JlYXRvcihjb2x1bW4ubmFtZSkpXG4gICAgICAgICk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgfSk7XG5cbiAgICAvLyBpZiAoISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5yZXNwb25zaXZlLmhhc0hpZGRlbigpKSB7XG4gICAgLy8gICB2YXIgY29sdW1uc1Zpc2liaWxpdHkgPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zKCkucmVzcG9uc2l2ZUhpZGRlbigpO1xuICAgIC8vICAgdmFyIGNvbHVtbnMgPSB0aGlzLmRhdGF0YWJsZUFwaS5zZXR0aW5ncygpLmluaXQoKS5jb2x1bW5zO1xuICAgIC8vICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbnNWaXNpYmlsaXR5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIC8vICAgICBpZiAoIWNvbHVtbnNWaXNpYmlsaXR5W2luZGV4XSkge1xuICAgIC8vICAgICAgIHZhciBjb2x1bW4gPSBjb2x1bW5zW2luZGV4XTtcbiAgICAvLyAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIC8vICAgICAgIHJvdy5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZXNfX2RldGFpbFwiO1xuXG4gICAgLy8gICAgICAgdmFyIHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAvLyAgICAgICB0ZDEudGV4dENvbnRlbnQgPSBjb2x1bW4uc1RpdGxlO1xuICAgIC8vICAgICAgIHZhciB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgLy8gICAgICAgdGQyLnRleHRDb250ZW50ID0gZGF0YVtjb2x1bW4ubURhdGFdO1xuICAgIC8vICAgICAgIHZhciB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgLy8gICAgICAgLy90aGlzLmRldGFpbEJ1dHRvbkNyZWF0b3JzLmZvckVhY2goY3JlYXRvciA9PiB0ZDMuYXBwZW5kQ2hpbGQoY3JlYXRvcihjb2x1bW4ubURhdGEpKSk7XG4gICAgLy8gICAgICAgcm93LmFwcGVuZENoaWxkKHRkMSk7XG4gICAgLy8gICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgLy8gICAgICAgcm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgLy8gICAgICAgcm93cy5wdXNoKHJvdyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBpZiAoISF0aGlzLnJlbmRlckRldGFpbEFjdGlvbnMpIHtcbiAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICByb3cuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX19kZXRhaWxcIjtcbiAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIHRkLmNvbFNwYW4gPSB2aXNpYmxlQ29sQ291bnQgKyAxO1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIC8vIHZhciB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAvLyByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgIC8vIHZhciB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAvLyByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgdGhpcy5yZW5kZXJEZXRhaWxBY3Rpb25zKHRkLCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93cztcbiAgfVxuXG4gIHB1YmxpYyBkb1N0YXRlU2F2ZSgpIHtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5zdGF0ZS5zYXZlKCk7XG4gIH1cbiAgcHVibGljIHN0YXRlU2F2ZUNhbGxiYWNrKHNldHRpbmdzOiBEYXRhVGFibGVzLlNldHRpbmdzLCBkYXRhOiBhbnkpIHt9XG5cbiAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIGRhdGE6IGFueVxuICApID0+IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBoZWFkZXJCdXR0b25DcmVhdG9yczogQXJyYXk8XG4gICAgKGRhdGF0YWJsZUFwaTogYW55LCBjb2xJZHg6IG51bWJlciwgY29sdW1uTmFtZTogc3RyaW5nKSA9PiBIVE1MRWxlbWVudFxuICA+ID0gW107XG5cbiAgcHVibGljIGRldGFpbEJ1dHRvbkNyZWF0b3JzOiBBcnJheTwoY29sdW1uTmFtZT86IHN0cmluZykgPT4gSFRNTEVsZW1lbnQ+ID0gW107XG5cbiAgY3JlYXRlU2VsZWN0QnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNlbGVjdEJ1dHRvblwiKTtcbiAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICg8YW55PmRhdGF0YWJsZUFwaS5jb2x1bW5zKCkpLmRlc2VsZWN0KCk7XG4gICAgICAoPGFueT5kYXRhdGFibGVBcGkuY29sdW1uKGNvbElkeCkpLnNlbGVjdCgpO1xuICAgICAgISF0aGlzLm9uQ29sdW1uU2VsZWN0ZWQgJiYgdGhpcy5vbkNvbHVtblNlbGVjdGVkKGNvbHVtbk5hbWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVHcm91cGluZ0J1dHRvbiA9IChcbiAgICBkYXRhdGFibGVBcGk6IGFueSxcbiAgICBjb2xJZHg6IG51bWJlcixcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcbiAgKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJncm91cEJ1dHRvblwiKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBCeS5pbmRleE9mKGNvbHVtbk5hbWUpO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLmdyb3VwQnkucHVzaChjb2x1bW5OYW1lKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ1bmdyb3VwQnV0dG9uXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJncm91cEJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5ncm91cEJ5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIGRhdGF0YWJsZUFwaS5yb3dHcm91cCgpLmVuYWJsZSh0aGlzLmdyb3VwQnkubGVuZ3RoID4gMCk7XG4gICAgICBpZiAodGhpcy5ncm91cEJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YXRhYmxlQXBpLnJvd0dyb3VwKCkuZGF0YVNyYyg8YW55PnRoaXMuZ3JvdXBCeSk7XG4gICAgICB9XG4gICAgICBkYXRhdGFibGVBcGkuZHJhdygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuICBjcmVhdGVTdmdFbGVtZW50ID0gKHBhdGg6IHN0cmluZyk6IFNWR0VsZW1lbnQgPT4ge1xuICAgIHZhciBzdmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgY29uc3QgdXNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwidXNlXCJcbiAgICApO1xuICAgIHVzZUVsZW0uc2V0QXR0cmlidXRlTlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICAgIFwiaHJlZlwiLFxuICAgICAgXCIjc2Etc3ZnLVwiICsgcGF0aFxuICAgICk7XG4gICAgc3ZnRWxlbS5hcHBlbmRDaGlsZCh1c2VFbGVtKTtcbiAgICByZXR1cm4gc3ZnRWxlbTtcbiAgfTtcblxuICBjcmVhdGVIaWRlQnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUNvbHVtblwiKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX19zdmctYnV0dG9uXCI7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU3ZnRWxlbWVudChcImhpZGVcIikpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdLnZpc2liaWxpdHkgPVxuICAgICAgICBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZTtcbiAgICAgIGRhdGF0YWJsZUFwaS5jb2x1bW5zKFtjb2xJZHhdKS52aXNpYmxlKGZhbHNlKTtcblxuICAgICAgLy8gVE9ETzogVXNlIGRhdGF0YWJsZXMgdG8gdXBkYXRlIGhlYWRlcnMgKHNob3cgY29sdW1ucyBvcHRpb25zKVxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5vbkNvbHVtbnNDaGFuZ2VkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgY3JlYXRlQWRkQ29sdW1uQnV0dG9uID0gKGRhdGF0YWJsZUFwaTogYW55KTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3Rvci5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZXNfX2FkZC1jb2x1bW5cIjtcbiAgICBzZWxlY3Rvci5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoXG4gICAgICBjb2x1bW4gPT4gY29sdW1uLnZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlXG4gICAgKTtcblxuICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dDb2x1bW5cIik7XG4gICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgdmFyIHRleHQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICBpZiAodGV4dC5sZW5ndGggPiAyMCkge1xuICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgIH1cbiAgICAgIG9wdGlvbi50ZXh0ID0gdGV4dDtcbiAgICAgIG9wdGlvbi50aXRsZSA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGNvbHVtbi5uYW1lO1xuICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxlY3Rvci5vbmNoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoISQodGhpcykudmFsKCkpIHJldHVybjtcblxuICAgICAgdmFyIGNvbHVtbiA9IHNlbGYuX2NvbHVtbnMuZmlsdGVyKFxuICAgICAgICBjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09ICQodGhpcykudmFsKClcbiAgICAgIClbMF07XG4gICAgICBjb2x1bW4udmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgICAgIGRhdGF0YWJsZUFwaS5jb2x1bW4oY29sdW1uLm5hbWUgKyBcIjpuYW1lXCIpLnZpc2libGUodHJ1ZSk7XG5cbiAgICAgIC8vIFRPRE86IFVzZSBkYXRhdGFibGVzIHRvIHVwZGF0ZSBoZWFkZXJzIChzaG93IGNvbHVtbnMgb3B0aW9ucylcbiAgICAgIHNlbGYudXBkYXRlKCk7XG5cbiAgICAgIHNlbGYub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG4gIGNyZWF0ZURyYWdCdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBhbnksXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZXNfX3N2Zy1idXR0b24gc2EtZGF0YXRhYmxlc19fZHJhZy1idXR0b25cIjtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTdmdFbGVtZW50KFwiZHJhZ1wiKSk7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuICBjcmVhdGVTb3J0QnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogYW55LFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xuICAgIGNvbnN0IGFzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZXNfX3N2Zy1idXR0b25cIjtcbiAgICBidXR0b24udGl0bGUgPSBhc2NUaXRsZTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTdmdFbGVtZW50KFwic29ydGluZ1wiKSk7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IGJ1dHRvbi50aXRsZSA9PSBhc2NUaXRsZSA/IGRlc2NUaXRsZSA6IGFzY1RpdGxlO1xuICAgIH07XG4gICAgYnV0dG9uLm9uZHJhZyA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb247XG4gICAgfTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuICBjcmVhdGVNb3ZlVG9EZXRhaWxCdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlc19fc3ZnLWJ1dHRvblwiO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtb3ZldG9kZXRhaWxzXCIpKTtcbiAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdGhpcy5fY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXS5sb2NhdGlvbiA9XG4gICAgICAgIFF1ZXN0aW9uTG9jYXRpb24uUm93O1xuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5vbkNvbHVtbnNDaGFuZ2VkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uID0gKGNvbHVtbk5hbWU/OiBzdHJpbmcpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX19idXR0b24gc2EtZGF0YXRhYmxlc19fYnV0dG9uLS1ncmF5XCI7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF0ubG9jYXRpb24gPVxuICAgICAgICBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbjtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIHRoaXMub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuICBnZXRDb2x1bW5zKCk6IEFycmF5PE9iamVjdD4ge1xuICAgIGNvbnN0IGF2YWlsYWJsZUNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgY29sdW1uID0+XG4gICAgICAgIGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4gJiZcbiAgICAgICAgdGhpcy5pc1Zpc2libGUoY29sdW1uLnZpc2liaWxpdHkpXG4gICAgKTtcbiAgICBjb25zdCBjb2x1bW5zOiBhbnkgPSBhdmFpbGFibGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogY29sdW1uLm5hbWUsXG4gICAgICAgIHNUaXRsZTogKHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnRpdGxlKSB8fCBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgIHZpc2libGU6IGNvbHVtbi52aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSxcbiAgICAgICAgbVJlbmRlcjogKGRhdGE6IG9iamVjdCwgdHlwZTogc3RyaW5nLCByb3c6IGFueSkgPT4gcm93W2NvbHVtbi5uYW1lXVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzYS1kYXRhdGFibGVzX19hY3Rpb24tY29sdW1uXCIsXG4gICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIGRlZmF1bHRDb250ZW50OiB0aGlzLmNyZWF0ZU1pbm9yQ29sdW1uc0J1dHRvbigpLm91dGVySFRNTFxuICAgICAgfVxuICAgIF0uY29uY2F0KGNvbHVtbnMpO1xuICB9XG5cbiAgcHVibGljIG9uQ29sdW1uU2VsZWN0ZWQ6IChkYXRhTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zLmFkanVzdCgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YXRhYmxlcy9kYXRhdGFibGVzLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vZGF0YXRhYmxlcy9kYXRhdGFibGVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wbG90bHkvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dvcmRjbG91ZC93b3JkY2xvdWRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RleHRcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3JhdGluZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWF0cml4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ib29sZWFuXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zZWxlY3RCYXNlU29ydGFibGVcIlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvaW5kZXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCBcIi4vdGV4dC5zY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiBcInRleHRcIjtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBBcnJheTxBcnJheTxzdHJpbmc+PiA9IFtdO1xyXG4gICAgbGV0IGNvbHVtbnNDb3VudCA9IDA7XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBjb25zdCBkYXRhU3RyaW5nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xyXG4gICAgICAgICAgZGF0YVN0cmluZ3MuY29uY2F0KHJvd1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiByb3dWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb3dWYWx1ZSkuZm9yRWFjaChrZXkgPT4gZGF0YVN0cmluZ3MucHVzaChyb3dWYWx1ZVtrZXldKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhU3RyaW5ncy5wdXNoKHJvd1ZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZGF0YVN0cmluZ3MpO1xyXG4gICAgICAgIGlmKGRhdGFTdHJpbmdzLmxlbmd0aCA+IGNvbHVtbnNDb3VudCkge1xyXG4gICAgICAgICAgICBjb2x1bW5zQ291bnQgPSBkYXRhU3RyaW5ncy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBjb2x1bW5zQ291bnQsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb2x1bW5zQ291bnQsIGRhdGF9ICA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVtcHR5VGV4dE5vZGUuaW5uZXJIVE1MID0gXCJUaGVyZSBhcmUgbm8gcmVzdWx0cyB5ZXRcIjtcclxuXHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YWJsZU5vZGUgPSA8SFRNTFRhYmxlRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS10ZXh0LXRhYmxlXCI7XHJcbiAgICB0YWJsZU5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2gocm93RGF0YSA9PiB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY29sdW1uc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZC5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVfX2NlbGxcIjtcclxuICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSByb3dEYXRhW2ldO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZU5vZGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVfX2NvbnRhaW5lclwiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFRleHQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFRleHQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgVGV4dCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LnRzIiwiaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IG1hdHJpeGR5bmFtaWM6IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICBjb25zdCB2aXNpYmxlUm93cyA9IG1hdHJpeGR5bmFtaWMudmlzaWJsZVJvd3M7XG5cbiAgICBpZiAodmlzaWJsZVJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gdmlzaWJsZVJvd3NbMF0uY2VsbHMubWFwKGMgPT4gYy5xdWVzdGlvbik7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcIm1hdHJpeGR5bmFtaWNcIixcbiAgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcbik7XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJtYXRyaXhkcm9wZG93blwiLFxuICBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pY1xuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uTWF0cml4RHluYW1pYy50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgV29yZENsb3VkTGliIGZyb20gXCJ3b3JkY2xvdWRcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4uL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgdGV4dEhlbHBlciB9IGZyb20gXCIuL3N0b3B3b3Jkcy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgV29yZENsb3VkIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJ3b3JkY2xvdWRcIjtcbiAgfVxuXG4gIHByaXZhdGUgY2xvdWQ6IGFueTtcblxuICBnZXREYXRhKCkge1xuICAgIGxldCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcblxuICAgIGxldCBzdG9wV29yZHMgPSB0ZXh0SGVscGVyLmdldFN0b3BXb3JkcygpO1xuICAgIGxldCBzdG9wVGhlV29yZCA9ICh3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChzdG9wV29yZHMuaW5kZXhPZih3b3JkKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gd29yZDtcbiAgICB9O1xuXG4gICAgbGV0IHByb2Nlc3NTdHJpbmcgPSAocm93OiBzdHJpbmcpID0+IHtcbiAgICAgIHJvdyA9IFwiXCIgKyByb3c7XG4gICAgICBpZiAoISFyb3cpIHtcbiAgICAgICAgcm93LnNwbGl0KFwiIFwiKS5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgIHdvcmQgPSBzdG9wVGhlV29yZCh3b3JkLnRvTG93ZXJDYXNlKCkgfHwgXCJcIik7XG4gICAgICAgICAgaWYgKCEhd29yZCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHRbd29yZF0pIHtcbiAgICAgICAgICAgICAgcmVzdWx0W3dvcmRdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdFt3b3JkXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkpIHtcbiAgICAgICAgICByb3dWYWx1ZS5mb3JFYWNoKHByb2Nlc3NTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2Ygcm93VmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvd1ZhbHVlKS5mb3JFYWNoKGtleSA9PiBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlW2tleV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc1N0cmluZyhyb3dWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiBba2V5LCByZXN1bHRba2V5XV07XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgY2FudmFzTm9kZSA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW1wdHlUZXh0Tm9kZS5pbm5lckhUTUwgPSBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhc05vZGUpO1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgbGlzdDogZGF0YSxcbiAgICAgIHdlaWdodEZhY3RvcjogMjAsXG4gICAgICBmb250RmFtaWx5OiBcIlNlZ29lIFVJIEJvbGQsIHNhbnMtc2VyaWZcIixcbiAgICAgIGNvbG9yOiAod29yZDogc3RyaW5nLCB3ZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21Db2xvcigpO1xuICAgICAgfSxcbiAgICAgIHJvdGF0ZVJhdGlvOiAwLjUsXG4gICAgICByb3RhdGlvblN0ZXBzOiAyLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGNsaWNrOiBmdW5jdGlvbihpdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSArIFwiOiBcIiArIGl0ZW1bMV0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmNsb3VkID0gV29yZENsb3VkTGliKGNhbnZhc05vZGUsIGNvbmZpZyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICBpZiAoISF0aGlzLmNsb3VkKSB7XG4gICAgICB0aGlzLmNsb3VkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgV29yZENsb3VkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JkY2xvdWQvd29yZGNsb3VkLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXh0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlzdWFsaXplckJhc2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRldGFpbFxcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMS41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRyYWdcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMyA1bC0xIDEgMSAxSDlWM2wxIDEgMS0xLTMtMy0zIDMgMSAxIDEtMXY0SDNsMS0xLTEtMS0zIDMgMyAzIDEtMS0xLTFoNHY0bC0xLTEtMSAxIDMgMyAzLTMtMS0xLTEgMVY5aDRsLTEgMSAxIDEgMy0zelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWhpZGVcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDFcXFwiIGQ9XFxcIk0xMi43OSA0LjJMMTYgMWwtMS0xLTMuMzIgMy4zMkMxMC41NyAyLjU1IDkuMzIgMiA4IDIgMy42MyAyIDAgNy45NyAwIDcuOTdzMS4yNyAyLjEgMy4yMSAzLjgybC0zLjIzIDMuMjMuOTguOTggMy4zNS0zLjM0QzUuNDEgMTMuNDQgNi42NyAxNCA4IDE0YzQuMzcgMCA4LTYgOC02cy0xLjI3LTIuMDktMy4yMS0zLjh6TTIgNy45N2MxLjA3LTEuNDcgMy42MS00IDYtNCAuOCAwIDEuNi4yNyAyLjM1LjY4bC0uNzguNzhjLS40Ni0uMjktLjk5LS40Ni0xLjU3LS40Ni0xLjY2IDAtMyAxLjM0LTMgMyAwIC41OC4xNyAxLjExLjQ2IDEuNTdsLS45Ny45N0ExMy4zOCAxMy4zOCAwIDAgMSAyIDcuOTd6bTYgNGMtLjggMC0xLjU5LS4yNy0yLjMzLS42N2wuNzgtLjc3Yy40NS4yNy45OC40NCAxLjU1LjQ0IDEuNjYgMCAzLTEuMzQgMy0zIDAtLjU3LS4xNy0xLjA5LS40NC0xLjU1bC45OC0uOThjMS4xMS44NyAyLjAxIDEuOTEgMi40NiAyLjUyLTEuMDcgMS40OC0zLjYxIDQuMDEtNiA0LjAxelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1zb3J0aW5nXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCAzbDIgMiAxLTEtMy0zLTMgMyAxIDF6TTggMTNsLTItMi0xIDEgMyAzIDMtMy0xLTF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PC9zdmc+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtbG9hZGVyP2ludGVycG9sYXRlIS4vfi92YWwtbG9hZGVyIS4vc3JjL3N2Z2J1bmRsZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogTXV1cmkgdjAuOC4wXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9oYWx0dS9tdXVyaVxuKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgSGFsdHUgT3lcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9oYWx0dS9tdXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4qIEBsaWNlbnNlIE1JVFxuKlxuKiBNdXVyaSBQYWNrZXJcbiogQ29weXJpZ2h0IChjKSAyMDE2LXByZXNlbnQsIE5pa2xhcyBSw6Rtw7YgPGlucmFtb0BnbWFpbC5jb20+XG4qIEBsaWNlbnNlIE1JVFxuKlxuKiBNdXVyaSBUaWNrZXIgLyBNdXVyaSBFbWl0dGVyIC8gTXV1cmkgUXVldWVcbiogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIE5pa2xhcyBSw6Rtw7YgPGlucmFtb0BnbWFpbC5jb20+XG4qIEBsaWNlbnNlIE1JVFxuKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5NdXVyaSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBuYW1lc3BhY2UgPSAnTXV1cmknO1xuICB2YXIgZ3JpZEluc3RhbmNlcyA9IHt9O1xuXG4gIHZhciBhY3Rpb25Td2FwID0gJ3N3YXAnO1xuICB2YXIgYWN0aW9uTW92ZSA9ICdtb3ZlJztcblxuICB2YXIgZXZlbnRTeW5jaHJvbml6ZSA9ICdzeW5jaHJvbml6ZSc7XG4gIHZhciBldmVudExheW91dFN0YXJ0ID0gJ2xheW91dFN0YXJ0JztcbiAgdmFyIGV2ZW50TGF5b3V0RW5kID0gJ2xheW91dEVuZCc7XG4gIHZhciBldmVudEFkZCA9ICdhZGQnO1xuICB2YXIgZXZlbnRSZW1vdmUgPSAncmVtb3ZlJztcbiAgdmFyIGV2ZW50U2hvd1N0YXJ0ID0gJ3Nob3dTdGFydCc7XG4gIHZhciBldmVudFNob3dFbmQgPSAnc2hvd0VuZCc7XG4gIHZhciBldmVudEhpZGVTdGFydCA9ICdoaWRlU3RhcnQnO1xuICB2YXIgZXZlbnRIaWRlRW5kID0gJ2hpZGVFbmQnO1xuICB2YXIgZXZlbnRGaWx0ZXIgPSAnZmlsdGVyJztcbiAgdmFyIGV2ZW50U29ydCA9ICdzb3J0JztcbiAgdmFyIGV2ZW50TW92ZSA9ICdtb3ZlJztcbiAgdmFyIGV2ZW50U2VuZCA9ICdzZW5kJztcbiAgdmFyIGV2ZW50QmVmb3JlU2VuZCA9ICdiZWZvcmVTZW5kJztcbiAgdmFyIGV2ZW50UmVjZWl2ZSA9ICdyZWNlaXZlJztcbiAgdmFyIGV2ZW50QmVmb3JlUmVjZWl2ZSA9ICdiZWZvcmVSZWNlaXZlJztcbiAgdmFyIGV2ZW50RHJhZ0luaXQgPSAnZHJhZ0luaXQnO1xuICB2YXIgZXZlbnREcmFnU3RhcnQgPSAnZHJhZ1N0YXJ0JztcbiAgdmFyIGV2ZW50RHJhZ01vdmUgPSAnZHJhZ01vdmUnO1xuICB2YXIgZXZlbnREcmFnU2Nyb2xsID0gJ2RyYWdTY3JvbGwnO1xuICB2YXIgZXZlbnREcmFnRW5kID0gJ2RyYWdFbmQnO1xuICB2YXIgZXZlbnREcmFnUmVsZWFzZVN0YXJ0ID0gJ2RyYWdSZWxlYXNlU3RhcnQnO1xuICB2YXIgZXZlbnREcmFnUmVsZWFzZUVuZCA9ICdkcmFnUmVsZWFzZUVuZCc7XG4gIHZhciBldmVudERlc3Ryb3kgPSAnZGVzdHJveSc7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZXIgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQmluZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gR2V0IGxpc3RlbmVycyBxdWV1ZSBhbmQgY3JlYXRlIGl0IGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghbGlzdGVuZXJzKSBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdID0gW107XG5cbiAgICAvLyBBZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBxdWV1ZS5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGFsbCBldmVudCBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGUgcHJvdmlkZWQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbbGlzdGVuZXJdXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIEdldCBsaXN0ZW5lcnMgYW5kIHJldHVybiBpbW1lZGlhdGVseSBpZiBub25lIGlzIGZvdW5kLlxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIC8vIElmIG5vIHNwZWNpZmljIGxpc3RlbmVyIGlzIHByb3ZpZGVkIHJlbW92ZSBhbGwgbGlzdGVuZXJzLlxuICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBtYXRjaGluZyBsaXN0ZW5lcnMuXG4gICAgdmFyIGkgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChsaXN0ZW5lciA9PT0gbGlzdGVuZXJzW2ldKSBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0IGFsbCBsaXN0ZW5lcnMgaW4gYSBzcGVjaWZpZWQgZXZlbnQgd2l0aCB0aGUgcHJvdmlkZWQgYXJndW1lbnRzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHsqfSBbYXJnMV1cbiAgICogQHBhcmFtIHsqfSBbYXJnMl1cbiAgICogQHBhcmFtIHsqfSBbYXJnM11cbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gR2V0IGV2ZW50IGxpc3RlbmVycyBhbmQgcXVpdCBlYXJseSBpZiB0aGVyZSdzIG5vIGxpc3RlbmVycy5cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgcUxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgYUxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgIHZhciBpO1xuXG4gICAgLy8gQWRkIHRoZSBjdXJyZW50IGxpc3RlbmVycyB0byB0aGUgY2FsbGJhY2sgcXVldWUgYmVmb3JlIHdlIHByb2Nlc3MgdGhlbS5cbiAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBndWFyYW50ZWUgdGhhdCBhbGwgb2YgdGhlIGxpc3RlbmVycyBhcmUgY2FsbGVkIGluXG4gICAgLy8gY29ycmVjdCBvcmRlciBldmVuIGlmIG5ldyBldmVudCBsaXN0ZW5lcnMgYXJlIHJlbW92ZWQvYWRkZWQgZHVyaW5nXG4gICAgLy8gcHJvY2Vzc2luZyBhbmQvb3IgZXZlbnRzIGFyZSBlbWl0dGVkIGR1cmluZyBwcm9jZXNzaW5nLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHF1ZXVlLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBJbmNyZW1lbnQgcXVldWUgY291bnRlci4gVGhpcyBpcyBuZWVkZWQgZm9yIHRoZSBzY2VuYXJpb3Mgd2hlcmUgZW1pdCBpc1xuICAgIC8vIHRyaWdnZXJlZCB3aGlsZSB0aGUgcXVldWUgaXMgYWxyZWFkeSBwcm9jZXNzaW5nLiBXZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2ZcbiAgICAvLyBob3cgbWFueSBcInF1ZXVlIHByb2Nlc3NvcnNcIiB0aGVyZSBhcmUgYWN0aXZlIHNvIHRoYXQgd2UgY2FuIHNhZmVseSByZXNldFxuICAgIC8vIHRoZSBxdWV1ZSBpbiB0aGUgZW5kIHdoZW4gdGhlIGxhc3QgcXVldWUgcHJvY2Vzc29yIGlzIGZpbmlzaGVkLlxuICAgICsrdGhpcy5fY291bnRlcjtcblxuICAgIC8vIFByb2Nlc3MgdGhlIHF1ZXVlICh0aGUgc3BlY2lmaWMgcGFydCBvZiBpdCBmb3IgdGhpcyBlbWl0KS5cbiAgICBmb3IgKGkgPSBxTGVuZ3RoLCBxTGVuZ3RoID0gcXVldWUubGVuZ3RoOyBpIDwgcUxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIGFMZW5ndGggPT09IDAgPyBxdWV1ZVtpXSgpIDpcbiAgICAgIGFMZW5ndGggPT09IDEgPyBxdWV1ZVtpXShhcmcxKSA6XG4gICAgICBhTGVuZ3RoID09PSAyID8gcXVldWVbaV0oYXJnMSwgYXJnMikgOlxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldKGFyZzEsIGFyZzIsIGFyZzMpO1xuXG4gICAgICAvLyBTdG9wIHByb2Nlc3NpbmcgaWYgdGhlIGVtaXR0ZXIgaXMgZGVzdHJveWVkLlxuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBEZWNyZW1lbnQgcXVldWUgcHJvY2VzcyBjb3VudGVyLlxuICAgIC0tdGhpcy5fY291bnRlcjtcblxuICAgIC8vIFJlc2V0IHRoZSBxdWV1ZSBpZiB0aGVyZSBhcmUgbm8gbW9yZSBxdWV1ZSBwcm9jZXNzZXMgcnVubmluZy5cbiAgICBpZiAoIXRoaXMuX2NvdW50ZXIpIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBlbWl0dGVyIGluc3RhbmNlLiBCYXNpY2FsbHkganVzdCByZW1vdmVzIGFsbCBib3VuZCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtFbWl0dGVyfVxuICAgKi9cbiAgRW1pdHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgIHZhciBldmVudDtcblxuICAgIC8vIEZsYWcgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIC8vIFJlc2V0IHF1ZXVlIChpZiBxdWV1ZSBpcyBjdXJyZW50bHkgcHJvY2Vzc2luZyB0aGlzIHdpbGwgYWxzbyBzdG9wIHRoYXQpLlxuICAgIHRoaXMuX3F1ZXVlLmxlbmd0aCA9IHRoaXMuX2NvdW50ZXIgPSAwO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMuXG4gICAgZm9yIChldmVudCBpbiBldmVudHMpIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnRdKSB7XG4gICAgICAgIGV2ZW50c1tldmVudF0ubGVuZ3RoID0gMDtcbiAgICAgICAgZXZlbnRzW2V2ZW50XSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBTZXQgdXAgdGhlIGRlZmF1bHQgZXhwb3J0IHZhbHVlcy5cbiAgdmFyIHRyYW5zZm9ybVN0eWxlID0gJ3RyYW5zZm9ybSc7XG4gIHZhciB0cmFuc2Zvcm1Qcm9wID0gJ3RyYW5zZm9ybSc7XG5cbiAgLy8gRmluZCB0aGUgc3VwcG9ydGVkIHRyYW5zZm9ybSBwcm9wIGFuZCBzdHlsZSBuYW1lcy5cbiAgdmFyIGRvY0VsZW1TdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4gIHZhciBzdHlsZSA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgc3R5bGVDYXAgPSAnVHJhbnNmb3JtJztcbiAgdmFyIGZvdW5kID0gZmFsc2U7XG4gIFsnJywgJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcyddLmZvckVhY2goZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgaWYgKGZvdW5kKSByZXR1cm47XG4gICAgdmFyIHByb3BOYW1lID0gcHJlZml4ID8gcHJlZml4ICsgc3R5bGVDYXAgOiBzdHlsZTtcbiAgICBpZiAoZG9jRWxlbVN0eWxlW3Byb3BOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVmaXggPSBwcmVmaXgudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRyYW5zZm9ybVN0eWxlID0gcHJlZml4ID8gJy0nICsgcHJlZml4ICsgJy0nICsgc3R5bGUgOiBzdHlsZTtcbiAgICAgIHRyYW5zZm9ybVByb3AgPSBwcm9wTmFtZTtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBzdHlsZXNDYWNoZSA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gbmV3IFdlYWtNYXAoKSA6IG51bGw7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXB1dGVkIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBzdHlsZSBwcm9wZXJ0eSBhcyBhIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gICAgdmFyIHN0eWxlcyA9IHN0eWxlc0NhY2hlICYmIHN0eWxlc0NhY2hlLmdldChlbGVtZW50KTtcbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gICAgICBpZiAoc3R5bGVzQ2FjaGUpIHN0eWxlc0NhY2hlLnNldChlbGVtZW50LCBzdHlsZXMpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoc3R5bGUgPT09ICd0cmFuc2Zvcm0nID8gdHJhbnNmb3JtU3R5bGUgOiBzdHlsZSk7XG4gIH1cblxuICB2YXIgc3R5bGVOYW1lUmVnRXggPSAvKFtBLVpdKS9nO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGEgY2FtZWwgY2FzZSBzdHlsZSBwcm9wZXJ0eSB0byBrZWJhYiBjYXNlIHN0eWxlIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZU5hbWUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHN0eWxlTmFtZVJlZ0V4LCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHZhciBzdHJGdW5jdGlvbiA9ICdmdW5jdGlvbic7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBzdHJGdW5jdGlvbjtcbiAgfVxuXG4gIHZhciB0cmFuc2Zvcm1TdHlsZSQxID0gJ3RyYW5zZm9ybSc7XG5cbiAgLyoqXG4gICAqIFNldCBpbmxpbmUgc3R5bGVzIHRvIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xuICAgKi9cbiAgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3AgPT09IHRyYW5zZm9ybVN0eWxlJDEgPyB0cmFuc2Zvcm1Qcm9wIDogcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZW0gYW5pbWF0aW9uIGhhbmRsZXIgcG93ZXJlZCBieSBXZWIgQW5pbWF0aW9ucyBBUEkuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBJdGVtQW5pbWF0ZShlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9jYWxsYmFjayA9IG51bGw7XG4gICAgdGhpcy5fcHJvcHMgPSBbXTtcbiAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICB0aGlzLl9rZXlmcmFtZXMgPSBbXTtcbiAgICB0aGlzLl9vcHRpb25zID0ge307XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9vbkZpbmlzaCA9IHRoaXMuX29uRmluaXNoLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgaW5zdGFuY2UncyBhbmltYXRpb24uIEF1dG9tYXRpY2FsbHkgc3RvcHMgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXNcbiAgICogcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc0Zyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzVG9cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZWFzaW5nPSdlYXNlJ11cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25GaW5pc2hdXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihwcm9wc0Zyb20sIHByb3BzVG8sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRpb247XG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHRoaXMuX3Byb3BzO1xuICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBjYW5jZWxBbmltYXRpb24gPSBmYWxzZTtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gZXhpc3RpbmcgYW5pbWF0aW9uIHJ1bm5pbmcsIGxldCdzIGNoZWNrIGlmIGl0IG5lZWRzIHRvIGJlXG4gICAgLy8gY2FuY2VsbGVkIG9yIGlmIGl0IGNhbiBjb250aW51ZSBydW5uaW5nLlxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIHZhciBwcm9wQ291bnQgPSAwO1xuICAgICAgdmFyIHByb3BJbmRleDtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlcXVlc3RlZCBhbmltYXRpb24gdGFyZ2V0IHByb3BzIGFuZCB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGVcbiAgICAgIC8vIGN1cnJlbnQgcHJvcHMgYW5kIHZhbHVlcy5cbiAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzVG8pIHtcbiAgICAgICAgKytwcm9wQ291bnQ7XG4gICAgICAgIHByb3BJbmRleCA9IGN1cnJlbnRQcm9wcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgaWYgKHByb3BJbmRleCA9PT0gLTEgfHwgcHJvcHNUb1twcm9wTmFtZV0gIT09IGN1cnJlbnRWYWx1ZXNbcHJvcEluZGV4XSkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRhcmdldCBwcm9wcyBjb3VudCBtYXRjaGVzIGN1cnJlbnQgcHJvcHMgY291bnQuIFRoaXMgaXNcbiAgICAgIC8vIG5lZWRlZCBmb3IgdGhlIGVkZ2UgY2FzZSBzY2VuYXJpbyB3aGVyZSB0YXJnZXQgcHJvcHMgY29udGFpbiB0aGUgc2FtZVxuICAgICAgLy8gc3R5bGVzIGFzIGN1cnJlbnQgcHJvcHMsIGJ1dCB0aGUgY3VycmVudCBwcm9wcyBoYXZlIHNvbWUgYWRkaXRpb25hbFxuICAgICAgLy8gcHJvcHMuXG4gICAgICBpZiAoIWNhbmNlbEFuaW1hdGlvbiAmJiBwcm9wQ291bnQgIT09IGN1cnJlbnRQcm9wcy5sZW5ndGgpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgYW5pbWF0aW9uIChpZiByZXF1aXJlZCkuXG4gICAgaWYgKGNhbmNlbEFuaW1hdGlvbikgYW5pbWF0aW9uLmNhbmNlbCgpO1xuXG4gICAgLy8gU3RvcmUgYW5pbWF0aW9uIGNhbGxiYWNrLlxuICAgIHRoaXMuX2NhbGxiYWNrID0gaXNGdW5jdGlvbihvcHRzLm9uRmluaXNoKSA/IG9wdHMub25GaW5pc2ggOiBudWxsO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHJ1bm5pbmcgYW5pbWF0aW9uIHRoYXQgZG9lcyBub3QgbmVlZCB0byBiZSBjYW5jZWxsZWQsIGxldCdzXG4gICAgLy8gY2FsbCBpdCBhIGRheSBoZXJlIGFuZCBsZXQgaXQgcnVuLlxuICAgIGlmIChhbmltYXRpb24gJiYgIWNhbmNlbEFuaW1hdGlvbikgcmV0dXJuO1xuXG4gICAgLy8gU3RvcmUgdGFyZ2V0IHByb3BzIGFuZCB2YWx1ZXMgdG8gaW5zdGFuY2UuXG4gICAgY3VycmVudFByb3BzLmxlbmd0aCA9IGN1cnJlbnRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICBmb3IgKHByb3BOYW1lIGluIHByb3BzVG8pIHtcbiAgICAgIGN1cnJlbnRQcm9wcy5wdXNoKHByb3BOYW1lKTtcbiAgICAgIGN1cnJlbnRWYWx1ZXMucHVzaChwcm9wc1RvW3Byb3BOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGtleWZyYW1lcy5cbiAgICB2YXIgYW5pbUtleWZyYW1lcyA9IHRoaXMuX2tleWZyYW1lcztcbiAgICBhbmltS2V5ZnJhbWVzWzBdID0gcHJvcHNGcm9tO1xuICAgIGFuaW1LZXlmcmFtZXNbMV0gPSBwcm9wc1RvO1xuXG4gICAgLy8gU2V0IHVwIG9wdGlvbnMuXG4gICAgdmFyIGFuaW1PcHRpb25zID0gdGhpcy5fb3B0aW9ucztcbiAgICBhbmltT3B0aW9ucy5kdXJhdGlvbiA9IG9wdHMuZHVyYXRpb24gfHwgMzAwO1xuICAgIGFuaW1PcHRpb25zLmVhc2luZyA9IG9wdHMuZWFzaW5nIHx8ICdlYXNlJztcblxuICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb25cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKGFuaW1LZXlmcmFtZXMsIGFuaW1PcHRpb25zKTtcbiAgICBhbmltYXRpb24ub25maW5pc2ggPSB0aGlzLl9vbkZpbmlzaDtcbiAgICB0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb247XG5cbiAgICAvLyBTZXQgdGhlIGVuZCBzdHlsZXMuIFRoaXMgbWFrZXMgc3VyZSB0aGF0IHRoZSBlbGVtZW50IHN0YXlzIGF0IHRoZSBlbmRcbiAgICAvLyB2YWx1ZXMgYWZ0ZXIgYW5pbWF0aW9uIGlzIGZpbmlzaGVkLlxuICAgIHNldFN0eWxlcyhlbGVtZW50LCBwcm9wc1RvKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCBpbnN0YW5jZSdzIGN1cnJlbnQgYW5pbWF0aW9uIGlmIHJ1bm5pbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3N0eWxlc11cbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oc3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9hbmltYXRpb24pIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgY3VycmVudFByb3BzID0gdGhpcy5fcHJvcHM7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIHByb3BOYW1lO1xuICAgIHZhciBwcm9wVmFsdWU7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBDYWxjdWxhdGUgKGlmIG5vdCBwcm92aWRlZCkgYW5kIHNldCBzdHlsZXMuXG4gICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjdXJyZW50UHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvcE5hbWUgPSBjdXJyZW50UHJvcHNbaV07XG4gICAgICAgIHByb3BWYWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIGdldFN0eWxlTmFtZShwcm9wTmFtZSkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BOYW1lID09PSAndHJhbnNmb3JtJyA/IHRyYW5zZm9ybVByb3AgOiBwcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpO1xuICAgIH1cblxuICAgIC8vICBDYW5jZWwgYW5pbWF0aW9uLlxuICAgIHRoaXMuX2FuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB0aGlzLl9hbmltYXRpb24gPSB0aGlzLl9jYWxsYmFjayA9IG51bGw7XG5cbiAgICAvLyBSZXNldCBjdXJyZW50IHByb3BzIGFuZCB2YWx1ZXMuXG4gICAgY3VycmVudFByb3BzLmxlbmd0aCA9IGN1cnJlbnRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGl0ZW0gaXMgYmVpbmcgYW5pbWF0ZWQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5pc0FuaW1hdGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2FuaW1hdGlvbjtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9vcHRpb25zID0gdGhpcy5fa2V5ZnJhbWVzID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQW5pbWF0aW9uIGVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqL1xuICBJdGVtQW5pbWF0ZS5wcm90b3R5cGUuX29uRmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuX3Byb3BzLmxlbmd0aCA9IHRoaXMuX3ZhbHVlcy5sZW5ndGggPSAwO1xuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gIH07XG5cbiAgdmFyIHZlbmRvclByZWZpeGVzID0gWycnLCAnd2Via2l0JywgJ21veicsICdtcycsICdvJywgJ1dlYmtpdCcsICdNb3onLCAnTVMnLCAnTyddO1xuXG4gIC8qKlxuICAgKiBHZXQgcHJlZml4ZWQgQ1NTIHByb3BlcnR5IG5hbWUgd2hlbiBnaXZlbiBhIG5vbi1wcmVmaXhlZCBDU1MgcHJvcGVydHkgbmFtZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1TdHlsZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcE5hbWVcbiAgICogQHJldHVybnMgeyFTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRQcmVmaXhlZFByb3BOYW1lKGVsZW1TdHlsZSwgcHJvcE5hbWUpIHtcbiAgICB2YXIgY2FtZWxQcm9wTmFtZSA9IHByb3BOYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHByZWZpeDtcbiAgICB2YXIgcHJlZml4ZWRQcm9wTmFtZTtcblxuICAgIHdoaWxlIChpIDwgdmVuZG9yUHJlZml4ZXMubGVuZ3RoKSB7XG4gICAgICBwcmVmaXggPSB2ZW5kb3JQcmVmaXhlc1tpXTtcbiAgICAgIHByZWZpeGVkUHJvcE5hbWUgPSBwcmVmaXggPyBwcmVmaXggKyBjYW1lbFByb3BOYW1lIDogcHJvcE5hbWU7XG4gICAgICBpZiAocHJlZml4ZWRQcm9wTmFtZSBpbiBlbGVtU3R5bGUpIHJldHVybiBwcmVmaXhlZFByb3BOYW1lO1xuICAgICAgKytpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGR0ID0gMTAwMCAvIDYwO1xuXG4gIHZhciByYWYgPSAoXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKGR0KTtcbiAgICAgIH0sIGR0KTtcbiAgICB9XG4gICkuYmluZCh3aW5kb3cpO1xuXG4gIC8vIERldGVjdCBzdXBwb3J0IGZvciBwYXNzaXZlIGV2ZW50czpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAgdmFyIGlzUGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBwYXNzaXZlT3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVPcHRzKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlT3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgLy8gRHJhZ2dlciBldmVudHMuXG4gIHZhciBldmVudHMgPSB7XG4gICAgc3RhcnQ6ICdzdGFydCcsXG4gICAgbW92ZTogJ21vdmUnLFxuICAgIGVuZDogJ2VuZCcsXG4gICAgY2FuY2VsOiAnY2FuY2VsJ1xuICB9O1xuXG4gIHZhciBoYXNUb3VjaEV2ZW50cyA9ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuVG91Y2hFdmVudCk7XG4gIHZhciBoYXNQb2ludGVyRXZlbnRzID0gISF3aW5kb3cuUG9pbnRlckV2ZW50O1xuICB2YXIgaGFzTXNQb2ludGVyRXZlbnRzID0gISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG4gIHZhciBpc0FuZHJvaWQgPSAvKGFuZHJvaWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHZhciBsaXN0ZW5lck9wdGlvbnMgPSBpc1Bhc3NpdmVFdmVudHNTdXBwb3J0ZWQgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xuXG4gIHZhciB0YVByb3AgPSAndG91Y2hBY3Rpb24nO1xuICB2YXIgdGFQcm9wUHJlZml4ZWQgPSBnZXRQcmVmaXhlZFByb3BOYW1lKHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsIHRhUHJvcCk7XG4gIHZhciB0YURlZmF1bHRWYWx1ZSA9ICdhdXRvJztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBEcmFnZ2VyIGluc3RhbmNlIGZvciBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3NzUHJvcHNdXG4gICAqL1xuICBmdW5jdGlvbiBEcmFnZ2VyKGVsZW1lbnQsIGNzc1Byb3BzKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jc3NQcm9wcyA9IHt9O1xuICAgIHRoaXMuX3RvdWNoQWN0aW9uID0gJyc7XG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB0aGlzLl9wb2ludGVySWQgPSBudWxsO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5fc3RhcnRYID0gMDtcbiAgICB0aGlzLl9zdGFydFkgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRYID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WSA9IDA7XG5cbiAgICB0aGlzLl9wcmVTdGFydENoZWNrID0gdGhpcy5fcHJlU3RhcnRDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSA9IHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uU3RhcnQgPSB0aGlzLl9vblN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Nb3ZlID0gdGhpcy5fb25Nb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DYW5jZWwgPSB0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRW5kID0gdGhpcy5fb25FbmQuYmluZCh0aGlzKTtcblxuICAgIC8vIEFwcGx5IGluaXRpYWwgY3NzIHByb3BzLlxuICAgIHRoaXMuc2V0Q3NzUHJvcHMoY3NzUHJvcHMpO1xuXG4gICAgLy8gSWYgdG91Y2ggYWN0aW9uIHdhcyBub3QgcHJvdmlkZWQgd2l0aCBpbml0aWFsIGNzcyBwcm9wcyBsZXQncyBhc3N1bWUgaXQnc1xuICAgIC8vIGF1dG8uXG4gICAgaWYgKCF0aGlzLl90b3VjaEFjdGlvbikge1xuICAgICAgdGhpcy5zZXRUb3VjaEFjdGlvbih0YURlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBuYXRpdmUgbGluay9pbWFnZSBkcmFnZ2luZyBmb3IgdGhlIGl0ZW0gYW5kIGl0J3MgYW5jZXN0b3JzLlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcblxuICAgIC8vIExpc3RlbiB0byBzdGFydCBldmVudC5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fZXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSB0b3VjaCBldmVudHMsIGJ1dCBubyBwb2ludGVyIGV2ZW50cyB3ZSBuZWVkIHRvIGFsc28gbGlzdGVuIGZvclxuICAgIC8vIG1vdXNlIGV2ZW50cyBpbiBhZGRpdGlvbiB0byB0b3VjaCBldmVudHMgZm9yIGRldmljZXMgd2hpY2ggc3VwcG9ydCBib3RoXG4gICAgLy8gbW91c2UgYW5kIHRvdWNoIGludGVyYWN0aW9uLlxuICAgIGlmIChoYXNUb3VjaEV2ZW50cyAmJiAhaGFzUG9pbnRlckV2ZW50cyAmJiAhaGFzTXNQb2ludGVyRXZlbnRzKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fbW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3RlY3RlZCBwcm9wZXJ0aWVzXG4gICAqICoqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIERyYWdnZXIuX3BvaW50ZXJFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdwb2ludGVyZG93bicsXG4gICAgbW92ZTogJ3BvaW50ZXJtb3ZlJyxcbiAgICBjYW5jZWw6ICdwb2ludGVyY2FuY2VsJyxcbiAgICBlbmQ6ICdwb2ludGVydXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fbXNQb2ludGVyRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnTVNQb2ludGVyRG93bicsXG4gICAgbW92ZTogJ01TUG9pbnRlck1vdmUnLFxuICAgIGNhbmNlbDogJ01TUG9pbnRlckNhbmNlbCcsXG4gICAgZW5kOiAnTVNQb2ludGVyVXAnXG4gIH07XG5cbiAgRHJhZ2dlci5fdG91Y2hFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBjYW5jZWw6ICd0b3VjaGNhbmNlbCcsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH07XG5cbiAgRHJhZ2dlci5fbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGNhbmNlbDogJycsXG4gICAgZW5kOiAnbW91c2V1cCdcbiAgfTtcblxuICBEcmFnZ2VyLl9ldmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhhc1BvaW50ZXJFdmVudHMpIHJldHVybiBEcmFnZ2VyLl9wb2ludGVyRXZlbnRzO1xuICAgIGlmIChoYXNNc1BvaW50ZXJFdmVudHMpIHJldHVybiBEcmFnZ2VyLl9tc1BvaW50ZXJFdmVudHM7XG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzKSByZXR1cm4gRHJhZ2dlci5fdG91Y2hFdmVudHM7XG4gICAgcmV0dXJuIERyYWdnZXIuX21vdXNlRXZlbnRzO1xuICB9KSgpO1xuXG4gIERyYWdnZXIuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuXG4gIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBQcm90ZWN0ZWQgc3RhdGljIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0ICYmIGUuY2FuY2VsYWJsZSAhPT0gZmFsc2UpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9hY3RpdmF0ZUluc3RhbmNlID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5kZXggPSBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHJldHVybjtcblxuICAgIERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9uKGV2ZW50cy5tb3ZlLCBpbnN0YW5jZS5fb25Nb3ZlKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9uKGV2ZW50cy5jYW5jZWwsIGluc3RhbmNlLl9vbkNhbmNlbCk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vbihldmVudHMuZW5kLCBpbnN0YW5jZS5fb25FbmQpO1xuXG4gICAgaWYgKERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIERyYWdnZXIuX2JpbmRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgRHJhZ2dlci5fZGVhY3RpdmF0ZUluc3RhbmNlID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5kZXggPSBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vZmYoZXZlbnRzLm1vdmUsIGluc3RhbmNlLl9vbk1vdmUpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub2ZmKGV2ZW50cy5jYW5jZWwsIGluc3RhbmNlLl9vbkNhbmNlbCk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vZmYoZXZlbnRzLmVuZCwgaW5zdGFuY2UuX29uRW5kKTtcblxuICAgIGlmICghRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCkge1xuICAgICAgRHJhZ2dlci5fdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIERyYWdnZXIuX2JpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnRzID0gRHJhZ2dlci5fZXZlbnRzO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3ZlLCBEcmFnZ2VyLl9vbk1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLmVuZCwgRHJhZ2dlci5fb25FbmQsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZXZlbnRzLmNhbmNlbCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuY2FuY2VsLCBEcmFnZ2VyLl9vbkNhbmNlbCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgfTtcblxuICBEcmFnZ2VyLl91bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnRzID0gRHJhZ2dlci5fZXZlbnRzO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5tb3ZlLCBEcmFnZ2VyLl9vbk1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLmVuZCwgRHJhZ2dlci5fb25FbmQsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZXZlbnRzLmNhbmNlbCAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMuY2FuY2VsLCBEcmFnZ2VyLl9vbkNhbmNlbCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9nZXRFdmVudFBvaW50ZXJJZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBwb2ludGVyIGlkIGF2YWlsYWJsZSBsZXQncyB1c2UgaXQuXG4gICAgaWYgKHR5cGVvZiBldmVudC5wb2ludGVySWQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZXZlbnQucG9pbnRlcklkO1xuICAgIH1cblxuICAgIC8vIEZvciB0b3VjaCBldmVudHMgbGV0J3MgZ2V0IHRoZSBmaXJzdCBjaGFuZ2VkIHRvdWNoJ3MgaWRlbnRpZmllci5cbiAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgIHJldHVybiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXIgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciBtb3VzZS9vdGhlciBldmVudHMgbGV0J3MgcHJvdmlkZSBhIHN0YXRpYyBpZC5cbiAgICByZXR1cm4gMTtcbiAgfTtcblxuICBEcmFnZ2VyLl9nZXRUb3VjaEJ5SWQgPSBmdW5jdGlvbihldmVudCwgaWQpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgcG9pbnRlciBldmVudCByZXR1cm4gdGhlIHdob2xlIGV2ZW50IGlmIHRoZXJlJ3MgYSBtYXRjaCwgYW5kXG4gICAgLy8gbnVsbCBvdGhlcndpc2UuXG4gICAgaWYgKHR5cGVvZiBldmVudC5wb2ludGVySWQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZXZlbnQucG9pbnRlcklkID09PSBpZCA/IGV2ZW50IDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgdG91Y2ggZXZlbnRzIGxldCdzIGNoZWNrIGlmIHRoZXJlJ3MgYSBjaGFuZ2VkIHRvdWNoIG9iamVjdCB0aGF0IG1hdGNoZXNcbiAgICAvLyB0aGUgcG9pbnRlcklkIGluIHdoaWNoIGNhc2UgcmV0dXJuIHRoZSB0b3VjaCBvYmplY3QuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yIG1vdXNlL290aGVyIGV2ZW50cyBsZXQncyBhc3N1bWUgdGhlcmUncyBvbmx5IG9uZSBwb2ludGVyIGFuZCBqdXN0XG4gICAgLy8gcmV0dXJuIHRoZSBldmVudC5cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH07XG5cbiAgRHJhZ2dlci5fb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMubW92ZSwgZSk7XG4gIH07XG5cbiAgRHJhZ2dlci5fb25DYW5jZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5lbWl0KGV2ZW50cy5jYW5jZWwsIGUpO1xuICB9O1xuXG4gIERyYWdnZXIuX29uRW5kID0gZnVuY3Rpb24oZSkge1xuICAgIERyYWdnZXIuX2VtaXR0ZXIuZW1pdChldmVudHMuZW5kLCBlKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZXNldCBjdXJyZW50IGRyYWcgb3BlcmF0aW9uIChpZiBhbnkpLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcG9pbnRlcklkID0gbnVsbDtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xuICAgIHRoaXMuX3N0YXJ0WCA9IDA7XG4gICAgdGhpcy5fc3RhcnRZID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFkgPSAwO1xuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUsXG4gICAgICBsaXN0ZW5lck9wdGlvbnNcbiAgICApO1xuXG4gICAgRHJhZ2dlci5fZGVhY3RpdmF0ZUluc3RhbmNlKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjdXN0b20gZHJhZ2dlciBldmVudCBmcm9tIGEgcmF3IGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICogQHJldHVybnMge0RyYWdnZXJFdmVudH1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9jcmVhdGVFdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGUpIHtcbiAgICB2YXIgdG91Y2ggPSB0aGlzLl9nZXRUcmFja2VkVG91Y2goZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIEhhbW1lci5qcyBjb21wYXRpYmlsaXR5IGludGVyZmFjZS5cbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBzcmNFdmVudDogZSxcbiAgICAgIGRpc3RhbmNlOiB0aGlzLmdldERpc3RhbmNlKCksXG4gICAgICBkZWx0YVg6IHRoaXMuZ2V0RGVsdGFYKCksXG4gICAgICBkZWx0YVk6IHRoaXMuZ2V0RGVsdGFZKCksXG4gICAgICBkZWx0YVRpbWU6IHR5cGUgPT09IGV2ZW50cy5zdGFydCA/IDAgOiB0aGlzLmdldERlbHRhVGltZSgpLFxuICAgICAgaXNGaXJzdDogdHlwZSA9PT0gZXZlbnRzLnN0YXJ0LFxuICAgICAgaXNGaW5hbDogdHlwZSA9PT0gZXZlbnRzLmVuZCB8fCB0eXBlID09PSBldmVudHMuY2FuY2VsLFxuICAgICAgLy8gUGFydGlhbCBUb3VjaCBBUEkgaW50ZXJmYWNlLlxuICAgICAgaWRlbnRpZmllcjogdGhpcy5fcG9pbnRlcklkLFxuICAgICAgc2NyZWVuWDogdG91Y2guc2NyZWVuWCxcbiAgICAgIHNjcmVlblk6IHRvdWNoLnNjcmVlblksXG4gICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcbiAgICAgIHBhZ2VYOiB0b3VjaC5wYWdlWCxcbiAgICAgIHBhZ2VZOiB0b3VjaC5wYWdlWSxcbiAgICAgIHRhcmdldDogdG91Y2gudGFyZ2V0XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogRW1pdCBhIHJhdyBldmVudCBhcyBkcmFnZ2VyIGV2ZW50IGludGVybmFsbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2VtaXQgPSBmdW5jdGlvbih0eXBlLCBlKSB7XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KHR5cGUsIHRoaXMuX2NyZWF0ZUV2ZW50KHR5cGUsIGUpKTtcbiAgfTtcblxuICAvKipcbiAgICogSWYgdGhlIHByb3ZpZGVkIGV2ZW50IGlzIGEgUG9pbnRlckV2ZW50IHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGl0IGlmIGl0IGhhc1xuICAgKiB0aGUgc2FtZSBwb2ludGVySWQgYXMgdGhlIGluc3RhbmNlLiBJZiB0aGUgcHJvdmlkZWQgZXZlbnQgaXMgYSBUb3VjaEV2ZW50XG4gICAqIHRoaXMgbWV0aG9kIHdpbGwgdHJ5IHRvIGxvb2sgZm9yIGEgVG91Y2ggaW5zdGFuY2UgaW4gdGhlIGNoYW5nZWRUb3VjaGVzIHRoYXRcbiAgICogaGFzIGFuIGlkZW50aWZpZXIgbWF0Y2hpbmcgdGhpcyBpbnN0YW5jZSdzIHBvaW50ZXJJZC4gSWYgdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAqIGlzIGEgTW91c2VFdmVudCAob3IganVzdCBhbnkgb3RoZXIgZXZlbnQgdGhhbiBQb2ludGVyRXZlbnQgb3IgVG91Y2hFdmVudClcbiAgICogaXQgd2lsbCBiZSByZXR1cm5lZCBpbW1lZGlhdGVseS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfVxuICAgKiBAcmV0dXJucyB7PyhUb3VjaHxQb2ludGVyRXZlbnR8TW91c2VFdmVudCl9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fZ2V0VHJhY2tlZFRvdWNoID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLl9wb2ludGVySWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHJhZ2dlci5fZ2V0VG91Y2hCeUlkKGUsIHRoaXMuX3BvaW50ZXJJZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBIHByZS1oYW5kbGVyIGZvciBzdGFydCBldmVudCB0aGF0IGNoZWNrcyBpZiB3ZSBjYW4gc3RhcnQgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX3ByZVN0YXJ0Q2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgbm90IGJlaW5nIGRyYWdnZWQgY3VycmVudGx5LlxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSkgcmV0dXJuO1xuXG4gICAgLy8gU3BlY2lhbCBjYW5jZWxhYmxlIGNoZWNrIGZvciBBbmRyb2lkIHRvIHByZXZlbnQgZHJhZyBwcm9jZWR1cmUgZnJvbVxuICAgIC8vIHN0YXJ0aW5nIGlmIG5hdGl2ZSBzY3JvbGxpbmcgaXMgaW4gcHJvZ3Jlc3MuIFBhcnQgMS5cbiAgICBpZiAoaXNBbmRyb2lkICYmIGUuY2FuY2VsYWJsZSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIC8vIE1ha2Ugc3VyZSBsZWZ0IGJ1dHRvbiBpcyBwcmVzc2VkIG9uIG1vdXNlLlxuICAgIGlmIChlLmJ1dHRvbikgcmV0dXJuO1xuXG4gICAgLy8gR2V0IChhbmQgc2V0KSBwb2ludGVyIGlkLlxuICAgIHRoaXMuX3BvaW50ZXJJZCA9IERyYWdnZXIuX2dldEV2ZW50UG9pbnRlcklkKGUpO1xuICAgIGlmICh0aGlzLl9wb2ludGVySWQgPT09IG51bGwpIHJldHVybjtcblxuICAgIC8vIFN0b3JlIHRoZSBzdGFydCBldmVudCBhbmQgdHJpZ2dlciBzdGFydCAoYXN5bmMgb3Igc3luYykuIFBvaW50ZXIgZXZlbnRzXG4gICAgLy8gYXJlIGVtaXR0ZWQgYmVmb3JlIHRvdWNoIGV2ZW50cyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBib3RoIG9mIHRoZW0uIEFuZFxuICAgIC8vIGlmIHlvdSB0cnkgdG8gbW92ZSBhbiBlbGVtZW50IGJlZm9yZSBgdG91Y2hzdGFydGAgaXMgZW1pdHRlZCB0aGUgcG9pbnRlclxuICAgIC8vIGV2ZW50cyBmb3IgdGhhdCBlbGVtZW50IHdpbGwgYmUgY2FuY2VsZWQuIFRoZSBmaXggaXMgdG8gZGVsYXkgdGhlIGVtaXR0ZWRcbiAgICAvLyBwb2ludGVyIGV2ZW50cyBpbiBzdWNoIGEgc2NlbmFyaW8gYnkgb25lIGZyYW1lIHNvIHRoYXQgYHRvdWNoc3RhcnRgIGhhc1xuICAgIC8vIHRpbWUgdG8gYmUgZW1pdHRlZCBiZWZvcmUgdGhlIGVsZW1lbnQgaXMgKHBvdGVudGlhbGx5KSBtb3ZlZC5cbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gZTtcbiAgICBpZiAoaGFzVG91Y2hFdmVudHMgJiYgKGhhc1BvaW50ZXJFdmVudHMgfHwgaGFzTXNQb2ludGVyRXZlbnRzKSkge1xuICAgICAgLy8gU3BlY2lhbCBjYW5jZWxhYmxlIGNoZWNrIGZvciBBbmRyb2lkIHRvIHByZXZlbnQgZHJhZyBwcm9jZWR1cmUgZnJvbVxuICAgICAgLy8gc3RhcnRpbmcgaWYgbmF0aXZlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy4gUGFydCAyLlxuICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsXG4gICAgICAgICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLFxuICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmFmKHRoaXMuX29uU3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblN0YXJ0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBYm9ydCBzdGFydCBldmVudCBpZiBpdCB0dXJucyBvdXQgdG8gYmUgbm9uLWNhbmNlbGFibGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2Fib3J0Tm9uQ2FuY2VsYWJsZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCxcbiAgICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSxcbiAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAodGhpcy5fc3RhcnRFdmVudCAmJiBlLmNhbmNlbGFibGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9wb2ludGVySWQgPSBudWxsO1xuICAgICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgZHJhZyBwcm9jZWR1cmUgaWYgcG9zc2libGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuX3N0YXJ0RXZlbnQ7XG4gICAgaWYgKCFlKSByZXR1cm47XG5cbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHZhciB0b3VjaCA9IHRoaXMuX2dldFRyYWNrZWRUb3VjaChlKTtcbiAgICBpZiAoIXRvdWNoKSByZXR1cm47XG5cbiAgICAvLyBTZXQgdXAgaW5pdCBkYXRhIGFuZCBlbWl0IHN0YXJ0IGV2ZW50LlxuICAgIHRoaXMuX3N0YXJ0WCA9IHRoaXMuX2N1cnJlbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLl9zdGFydFkgPSB0aGlzLl9jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5zdGFydCwgZSk7XG4gICAgRHJhZ2dlci5fYWN0aXZhdGVJbnN0YW5jZSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgbW92ZSBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0b3VjaCA9IHRoaXMuX2dldFRyYWNrZWRUb3VjaChlKTtcbiAgICBpZiAoIXRvdWNoKSByZXR1cm47XG5cbiAgICB0aGlzLl9jdXJyZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy5fY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuX2VtaXQoZXZlbnRzLm1vdmUsIGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBtb3ZlIGNhbmNlbCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25DYW5jZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLl9nZXRUcmFja2VkVG91Y2goZSkpIHJldHVybjtcblxuICAgIHRoaXMuX2VtaXQoZXZlbnRzLmNhbmNlbCwgZSk7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgZW5kIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vbkVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIXRoaXMuX2dldFRyYWNrZWRUb3VjaChlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fZW1pdChldmVudHMuZW5kLCBlKTtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkIGF0IHRoZSBtb21lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2ludGVySWQgIT09IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBlbGVtZW50J3MgdG91Y2gtYWN0aW9uIENTUyBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5zZXRUb3VjaEFjdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gU3RvcmUgdW5tb2RpZmllZCB0b3VjaCBhY3Rpb24gdmFsdWUgKHdlIHRydXN0IHVzZXIgaW5wdXQgaGVyZSkuXG4gICAgdGhpcy5fdG91Y2hBY3Rpb24gPSB2YWx1ZTtcblxuICAgIC8vIFNldCB0b3VjaC1hY3Rpb24gc3R5bGUuXG4gICAgaWYgKHRhUHJvcFByZWZpeGVkKSB7XG4gICAgICB0aGlzLl9jc3NQcm9wc1t0YVByb3BQcmVmaXhlZF0gPSAnJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbdGFQcm9wUHJlZml4ZWRdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBhbiB1bnN1cHBvcnRlZCB0b3VjaC1hY3Rpb24gdmFsdWUgbGV0J3MgYWRkIGEgc3BlY2lhbCBsaXN0ZW5lclxuICAgIC8vIHRoYXQgcHJldmVudHMgZGVmYXVsdCBhY3Rpb24gb24gdG91Y2ggc3RhcnQgZXZlbnQuIEEgZGlydHkgaGFjaywgYnV0IGJlc3RcbiAgICAvLyB3ZSBjYW4gZG8gZm9yIG5vdy4gVGhlIG90aGVyIG9wdGlvbnMgd291bGQgYmUgdG8gc29tZWhvdyBwb2x5ZmlsbCB0aGVcbiAgICAvLyB1bnN1cHBvcnRlZCB0b3VjaCBhY3Rpb24gYmVoYXZpb3Igd2l0aCBjdXN0b20gaGV1cmlzdGljcyB3aGljaCBzb3VuZHMgbGlrZVxuICAgIC8vIGEgY2FuIG9mIHdvcm1zLlxuICAgIGlmIChoYXNUb3VjaEV2ZW50cykge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGVbdGFQcm9wUHJlZml4ZWRdICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgZWxlbWVudCdzIENTUyBwcm9wZXJ0aWVzLiBBY2NlcHRzIGFuIG9iamVjdCB3aXRoIGNhbWVsIGNhc2VkIHN0eWxlXG4gICAqIHByb3BzIHdpdGggdmFsdWUgcGFpcnMgYXMgaXQncyBmaXJzdCBhcmd1bWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtuZXdQcm9wc11cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLnNldENzc1Byb3BzID0gZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICBpZiAoIW5ld1Byb3BzKSByZXR1cm47XG5cbiAgICB2YXIgY3VycmVudFByb3BzID0gdGhpcy5fY3NzUHJvcHM7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBwcm9wO1xuICAgIHZhciBwcmVmaXhlZFByb3A7XG5cbiAgICAvLyBSZXNldCBjdXJyZW50IHByb3BzLlxuICAgIGZvciAocHJvcCBpbiBjdXJyZW50UHJvcHMpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBjdXJyZW50UHJvcHNbcHJvcF07XG4gICAgICBkZWxldGUgY3VycmVudFByb3BzW3Byb3BdO1xuICAgIH1cblxuICAgIC8vIFNldCBuZXcgcHJvcHMuXG4gICAgZm9yIChwcm9wIGluIG5ld1Byb3BzKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbHVlIGZvciB0aGUgcHJvcC5cbiAgICAgIGlmICghbmV3UHJvcHNbcHJvcF0pIGNvbnRpbnVlO1xuXG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0b3VjaC1hY3Rpb24uXG4gICAgICBpZiAocHJvcCA9PT0gdGFQcm9wKSB7XG4gICAgICAgIHRoaXMuc2V0VG91Y2hBY3Rpb24obmV3UHJvcHNbcHJvcF0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHByZWZpeGVkIHByb3AgYW5kIHNraXAgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgICBwcmVmaXhlZFByb3AgPSBnZXRQcmVmaXhlZFByb3BOYW1lKGVsZW1lbnQuc3R5bGUsIHByb3ApO1xuICAgICAgaWYgKCFwcmVmaXhlZFByb3ApIGNvbnRpbnVlO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgcHJvcCBhbmQgYWRkIHRoZSBzdHlsZS5cbiAgICAgIGN1cnJlbnRQcm9wc1twcmVmaXhlZFByb3BdID0gJyc7XG4gICAgICBlbGVtZW50LnN0eWxlW3ByZWZpeGVkUHJvcF0gPSBuZXdQcm9wc1twcm9wXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRoZSBwb2ludGVyIGhhcyBtb3ZlZCBvbiB4LWF4aXMgZnJvbSBzdGFydCBwb3NpdGlvbiwgaW4gcGl4ZWxzLlxuICAgKiBQb3NpdGl2ZSB2YWx1ZSBpbmRpY2F0ZXMgbW92ZW1lbnQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGVsdGFYID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRYIC0gdGhpcy5fc3RhcnRYO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgcG9pbnRlciBoYXMgbW92ZWQgb24geS1heGlzIGZyb20gc3RhcnQgcG9zaXRpb24sIGluIHBpeGVscy5cbiAgICogUG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIG1vdmVtZW50IGZyb20gdG9wIHRvIGJvdHRvbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhWSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50WSAtIHRoaXMuX3N0YXJ0WTtcbiAgfTtcblxuICAvKipcbiAgICogSG93IGZhciAoaW4gcGl4ZWxzKSBoYXMgcG9pbnRlciBtb3ZlZCBmcm9tIHN0YXJ0IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgeCA9IHRoaXMuZ2V0RGVsdGFYKCk7XG4gICAgdmFyIHkgPSB0aGlzLmdldERlbHRhWSgpO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBsb25nIGhhcyBwb2ludGVyIGJlZW4gZHJhZ2dlZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmdldERlbHRhVGltZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUgPyBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRUaW1lIDogMDtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBkcmFnIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgKiAgIC0gJ3N0YXJ0JywgJ21vdmUnLCAnY2FuY2VsJyBvciAnZW5kJy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBkcmFnIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgKiAgIC0gJ3N0YXJ0JywgJ21vdmUnLCAnY2FuY2VsJyBvciAnZW5kJy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50cywgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHVuYmluZCBhbGwgZHJhZyBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGV2ZW50cyA9IERyYWdnZXIuX2V2ZW50cztcblxuICAgIC8vIFJlc2V0IGRhdGEgYW5kIGRlYWN0aXZhdGUgdGhlIGluc3RhbmNlLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBEZXN0cm95IGVtaXR0ZXIuXG4gICAgdGhpcy5fZW1pdHRlci5kZXN0cm95KCk7XG5cbiAgICAvLyBVbmJpbmQgZXZlbnQgaGFuZGxlcnMuXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fbW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCwgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcblxuICAgIC8vIFJlc2V0IHN0eWxlcy5cbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuX2Nzc1Byb3BzKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdGhpcy5fY3NzUHJvcHNbcHJvcF07XG4gICAgICBkZWxldGUgdGhpcy5fY3NzUHJvcHNbcHJvcF07XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgZGF0YS5cbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIE1hcmsgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQSB0aWNrZXIgc3lzdGVtIGZvciBoYW5kbGluZyBET00gcmVhZHMgYW5kIHdyaXRlcyBpbiBhbiBlZmZpY2llbnQgd2F5LlxuICAgKiBDb250YWlucyBhIHJlYWQgcXVldWUgYW5kIGEgd3JpdGUgcXVldWUgdGhhdCBhcmUgcHJvY2Vzc2VkIG9uIHRoZSBuZXh0XG4gICAqIGFuaW1hdGlvbiBmcmFtZSB3aGVuIG5lZWRlZC5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBUaWNrZXIoKSB7XG4gICAgdGhpcy5fbmV4dFN0ZXAgPSBudWxsO1xuXG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9yZWFkcyA9IHt9O1xuICAgIHRoaXMuX3dyaXRlcyA9IHt9O1xuXG4gICAgdGhpcy5fYmF0Y2ggPSBbXTtcbiAgICB0aGlzLl9iYXRjaFJlYWRzID0ge307XG4gICAgdGhpcy5fYmF0Y2hXcml0ZXMgPSB7fTtcblxuICAgIHRoaXMuX3N0ZXAgPSB0aGlzLl9zdGVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBUaWNrZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGlkLCByZWFkT3BlcmF0aW9uLCB3cml0ZU9wZXJhdGlvbiwgaXNQcmlvcml0aXplZCkge1xuICAgIC8vIEZpcnN0LCBsZXQncyBjaGVjayBpZiBhbiBpdGVtIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBxdWV1ZXMgd2l0aCB0aGUgc2FtZSBpZFxuICAgIC8vIGFuZCBpZiBzbyAtPiByZW1vdmUgaXQuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuX3F1ZXVlLmluZGV4T2YoaWQpO1xuICAgIGlmIChjdXJyZW50SW5kZXggPiAtMSkgdGhpcy5fcXVldWVbY3VycmVudEluZGV4XSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEFkZCBlbnRyeS5cbiAgICBpc1ByaW9yaXRpemVkID8gdGhpcy5fcXVldWUudW5zaGlmdChpZCkgOiB0aGlzLl9xdWV1ZS5wdXNoKGlkKTtcbiAgICB0aGlzLl9yZWFkc1tpZF0gPSByZWFkT3BlcmF0aW9uO1xuICAgIHRoaXMuX3dyaXRlc1tpZF0gPSB3cml0ZU9wZXJhdGlvbjtcblxuICAgIC8vIEZpbmFsbHksIGxldCdzIGtpY2stc3RhcnQgdGhlIG5leHQgdGljayBpZiBpdCBpcyBub3QgcnVubmluZyB5ZXQuXG4gICAgaWYgKCF0aGlzLl9uZXh0U3RlcCkgdGhpcy5fbmV4dFN0ZXAgPSByYWYodGhpcy5fc3RlcCk7XG4gIH07XG5cbiAgVGlja2VyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbihpZCkge1xuICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLl9xdWV1ZS5pbmRleE9mKGlkKTtcbiAgICBpZiAoY3VycmVudEluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3F1ZXVlW2N1cnJlbnRJbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fcmVhZHNbaWRdO1xuICAgICAgZGVsZXRlIHRoaXMuX3dyaXRlc1tpZF07XG4gICAgfVxuICB9O1xuXG4gIFRpY2tlci5wcm90b3R5cGUuX3N0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgcmVhZHMgPSB0aGlzLl9yZWFkcztcbiAgICB2YXIgd3JpdGVzID0gdGhpcy5fd3JpdGVzO1xuICAgIHZhciBiYXRjaCA9IHRoaXMuX2JhdGNoO1xuICAgIHZhciBiYXRjaFJlYWRzID0gdGhpcy5fYmF0Y2hSZWFkcztcbiAgICB2YXIgYmF0Y2hXcml0ZXMgPSB0aGlzLl9iYXRjaFdyaXRlcztcbiAgICB2YXIgbGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICAgIHZhciBpZDtcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlc2V0IHRpY2tlci5cbiAgICB0aGlzLl9uZXh0U3RlcCA9IG51bGw7XG5cbiAgICAvLyBTZXR1cCBxdWV1ZXMgYW5kIGNhbGxiYWNrIHBsYWNlaG9sZGVycy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkID0gcXVldWVbaV07XG4gICAgICBpZiAoIWlkKSBjb250aW51ZTtcblxuICAgICAgYmF0Y2gucHVzaChpZCk7XG5cbiAgICAgIGJhdGNoUmVhZHNbaWRdID0gcmVhZHNbaWRdO1xuICAgICAgZGVsZXRlIHJlYWRzW2lkXTtcblxuICAgICAgYmF0Y2hXcml0ZXNbaWRdID0gd3JpdGVzW2lkXTtcbiAgICAgIGRlbGV0ZSB3cml0ZXNbaWRdO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHF1ZXVlLlxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBQcm9jZXNzIHJlYWQgY2FsbGJhY2tzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWQgPSBiYXRjaFtpXTtcbiAgICAgIGlmIChiYXRjaFJlYWRzW2lkXSkge1xuICAgICAgICBiYXRjaFJlYWRzW2lkXSgpO1xuICAgICAgICBkZWxldGUgYmF0Y2hSZWFkc1tpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvY2VzcyB3cml0ZSBjYWxsYmFja3MuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZCA9IGJhdGNoW2ldO1xuICAgICAgaWYgKGJhdGNoV3JpdGVzW2lkXSkge1xuICAgICAgICBiYXRjaFdyaXRlc1tpZF0oKTtcbiAgICAgICAgZGVsZXRlIGJhdGNoV3JpdGVzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXNldCBiYXRjaC5cbiAgICBiYXRjaC5sZW5ndGggPSAwO1xuXG4gICAgLy8gUmVzdGFydCB0aGUgdGlja2VyIGlmIG5lZWRlZC5cbiAgICBpZiAoIXRoaXMuX25leHRTdGVwICYmIHF1ZXVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5fbmV4dFN0ZXAgPSByYWYodGhpcy5fc3RlcCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB0aWNrZXIgPSBuZXcgVGlja2VyKCk7XG5cbiAgdmFyIGxheW91dFRpY2sgPSAnbGF5b3V0JztcbiAgdmFyIHZpc2liaWxpdHlUaWNrID0gJ3Zpc2liaWxpdHknO1xuICB2YXIgbW92ZVRpY2sgPSAnbW92ZSc7XG4gIHZhciBzY3JvbGxUaWNrID0gJ3Njcm9sbCc7XG4gIHZhciBwbGFjZWhvbGRlclRpY2sgPSAncGxhY2Vob2xkZXInO1xuXG4gIGZ1bmN0aW9uIGFkZExheW91dFRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBsYXlvdXRUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsTGF5b3V0VGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBsYXlvdXRUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFZpc2liaWxpdHlUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgdmlzaWJpbGl0eVRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxWaXNpYmlsaXR5VGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyB2aXNpYmlsaXR5VGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNb3ZlVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIG1vdmVUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2ssIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsTW92ZVRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgbW92ZVRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2Nyb2xsVGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIHNjcm9sbFRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxTY3JvbGxUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIHNjcm9sbFRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUGxhY2Vob2xkZXJUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgcGxhY2Vob2xkZXJUaWNrLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIHBsYWNlaG9sZGVyVGljayk7XG4gIH1cblxuICB2YXIgRWxQcm90byA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZTtcbiAgdmFyIG1hdGNoZXNGbiA9XG4gICAgRWxQcm90by5tYXRjaGVzIHx8XG4gICAgRWxQcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGVsZW1lbnQgbWF0Y2hlcyBhIENTUyBzZWxlY3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBlbGVtZW50TWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbWF0Y2hlc0ZuLmNhbGwoZWwsIHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2xhc3MgdG8gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXRjaGVzKGVsZW1lbnQsICcuJyArIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciB0ZW1wQXJyYXkgPSBbXTtcbiAgdmFyIG51bWJlclR5cGUgPSAnbnVtYmVyJztcblxuICAvKipcbiAgICogSW5zZXJ0IGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgdG8gYXJyYXkgdG8gYSBzcGVjaWZpZWQgaW5kZXguIE11dGF0ZXNcbiAgICogdGhlIGFycmF5LiBUaGUgaW5kZXggY2FuIGJlIG5lZ2F0aXZlIGluIHdoaWNoIGNhc2UgdGhlIGl0ZW1zIHdpbGwgYmUgYWRkZWRcbiAgICogdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleD0tMV1cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5SW5zZXJ0KGFycmF5LCBpdGVtcywgaW5kZXgpIHtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gbnVtYmVyVHlwZSA/IGluZGV4IDogLTE7XG4gICAgaWYgKHN0YXJ0SW5kZXggPCAwKSBzdGFydEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gc3RhcnRJbmRleCArIDE7XG5cbiAgICBhcnJheS5zcGxpY2UuYXBwbHkoYXJyYXksIHRlbXBBcnJheS5jb25jYXQoc3RhcnRJbmRleCwgMCwgaXRlbXMpKTtcbiAgICB0ZW1wQXJyYXkubGVuZ3RoID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgYXJyYXkgaW5kZXguIEJhc2ljYWxseSB0aGlzIGZ1bmN0aW9uIG1ha2VzIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWRcbiAgICogYXJyYXkgaW5kZXggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBhbHNvIHRyYW5zZm9ybXNcbiAgICogbmVnYXRpdmUgaW5kZXggdG8gdGhlIG1hdGNoaW5nIHBvc2l0aXZlIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtCb29sZWFufSBpc01pZ3JhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgaW5kZXgsIGlzTWlncmF0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgbWF4SW5kZXggPSBNYXRoLm1heCgwLCBpc01pZ3JhdGlvbiA/IGxlbmd0aCA6IGxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBpbmRleCA+IG1heEluZGV4ID8gbWF4SW5kZXggOiBpbmRleCA8IDAgPyBNYXRoLm1heChtYXhJbmRleCArIGluZGV4ICsgMSwgMCkgOiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGFycmF5IGl0ZW0gdG8gYW5vdGhlciBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgKiAgIC0gSW5kZXggKHBvc2l0aXZlIG9yIG5lZ2F0aXZlKSBvZiB0aGUgaXRlbSB0aGF0IHdpbGwgYmUgbW92ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIHdoZXJlIHRoZSBpdGVtIHNob3VsZCBiZSBtb3ZlZCB0by5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5TW92ZShhcnJheSwgZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBhcnJheSBoYXMgdHdvIG9yIG1vcmUgaXRlbXMuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybjtcblxuICAgIC8vIE5vcm1hbGl6ZSB0aGUgaW5kaWNlcy5cbiAgICB2YXIgZnJvbSA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIGZyb21JbmRleCk7XG4gICAgdmFyIHRvID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgdG9JbmRleCk7XG5cbiAgICAvLyBBZGQgdGFyZ2V0IGl0ZW0gdG8gdGhlIG5ldyBwb3NpdGlvbi5cbiAgICBpZiAoZnJvbSAhPT0gdG8pIHtcbiAgICAgIGFycmF5LnNwbGljZSh0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dhcCBhcnJheSBpdGVtcy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIG9mIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBzd2FwcGVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gd2l0aEluZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIG9mIHRoZSBvdGhlciBpdGVtIHRoYXQgd2lsbCBiZSBzd2FwcGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlTd2FwKGFycmF5LCBpbmRleCwgd2l0aEluZGV4KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBhcnJheSBoYXMgdHdvIG9yIG1vcmUgaXRlbXMuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybjtcblxuICAgIC8vIE5vcm1hbGl6ZSB0aGUgaW5kaWNlcy5cbiAgICB2YXIgaW5kZXhBID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgaW5kZXgpO1xuICAgIHZhciBpbmRleEIgPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCB3aXRoSW5kZXgpO1xuICAgIHZhciB0ZW1wO1xuXG4gICAgLy8gU3dhcCB0aGUgaXRlbXMuXG4gICAgaWYgKGluZGV4QSAhPT0gaW5kZXhCKSB7XG4gICAgICB0ZW1wID0gYXJyYXlbaW5kZXhBXTtcbiAgICAgIGFycmF5W2luZGV4QV0gPSBhcnJheVtpbmRleEJdO1xuICAgICAgYXJyYXlbaW5kZXhCXSA9IHRlbXA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFjdGlvbkNhbmNlbCA9ICdjYW5jZWwnO1xuICB2YXIgYWN0aW9uRmluaXNoID0gJ2ZpbmlzaCc7XG4gIHZhciBkZWJvdW5jZVRpY2sgPSAnZGVib3VuY2UnO1xuICB2YXIgZGVib3VuY2VJZCA9IDA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgICogYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAgKiBOIG1pbGxpc2Vjb25kcy4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIGFjY2VwdHMgb25lIGFyZ3VtZW50IHdoaWNoLCB3aGVuXG4gICAqIGJlaW5nIFwiZmluaXNoXCIsIGNhbGxzIHRoZSBkZWJvdW5jZSBmdW5jdGlvbiBpbW1lZGlhdGVseSBpZiBpdCBpcyBjdXJyZW50bHlcbiAgICogd2FpdGluZyB0byBiZSBjYWxsZWQsIGFuZCB3aGVuIGJlaW5nIFwiY2FuY2VsXCIgY2FuY2VscyB0aGUgY3VycmVudGx5IHF1ZXVlZFxuICAgKiBmdW5jdGlvbiBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge051bWJlcn0gd2FpdFxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBkZWJvdW5jZShmbiwgd2FpdCkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHZhciB0aWNrZXJJZCA9ICsrZGVib3VuY2VJZCArIGRlYm91bmNlVGljaztcblxuICAgIGlmICh3YWl0ID4gMCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICBpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGlja2VyLmNhbmNlbCh0aWNrZXJJZCk7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gYWN0aW9uRmluaXNoKSBmbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gYWN0aW9uQ2FuY2VsICYmIGFjdGlvbiAhPT0gYWN0aW9uRmluaXNoKSB7XG4gICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRpY2tlci5hZGQodGlja2VySWQsIGZuLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICB9LCB3YWl0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICBpZiAoYWN0aW9uICE9PSBhY3Rpb25DYW5jZWwpIGZuKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZWxlbWVudCBpcyB0cmFuc2Zvcm1lZCwgZmFsc2UgaWYgbm90LiBJbiBwcmFjdGljZSB0aGVcbiAgICogZWxlbWVudCdzIGRpc3BsYXkgdmFsdWUgbXVzdCBiZSBhbnl0aGluZyBlbHNlIHRoYW4gXCJub25lXCIgb3IgXCJpbmxpbmVcIiBhc1xuICAgKiB3ZWxsIGFzIGhhdmUgYSB2YWxpZCB0cmFuc2Zvcm0gdmFsdWUgYXBwbGllZCBpbiBvcmRlciB0byBiZSBjb3VudGVkIGFzIGFcbiAgICogdHJhbnNmb3JtZWQgZWxlbWVudC5cbiAgICpcbiAgICogQm9ycm93ZWQgZnJvbSBNZXpyICh2MC42LjEpOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzcmFtby9tZXpyL2Jsb2IvMC42LjEvbWV6ci5qcyNMNjYxXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1RyYW5zZm9ybWVkKGVsZW1lbnQpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gZ2V0U3R5bGUoZWxlbWVudCwgJ3RyYW5zZm9ybScpO1xuICAgIGlmICghdHJhbnNmb3JtIHx8IHRyYW5zZm9ybSA9PT0gJ25vbmUnKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgZGlzcGxheSA9IGdldFN0eWxlKGVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgaWYgKGRpc3BsYXkgPT09ICdpbmxpbmUnIHx8IGRpc3BsYXkgPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhYnNvbHV0ZSBwb3NpdGlvbmVkIGVsZW1lbnQncyBjb250YWluaW5nIGJsb2NrLCB3aGljaCBpc1xuICAgKiBjb25zaWRlcmVkIHRvIGJlIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGVsZW1lbnQgdGhhdCB0aGUgdGFyZ2V0IGVsZW1lbnQnc1xuICAgKiBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0by4gRGlzY2xhaW1lcjogdGhpcyBvbmx5IHdvcmtzIGFzIGludGVuZGVkIGZvclxuICAgKiBhYnNvbHV0ZSBwb3NpdGlvbmVkIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luY2x1ZGVTZWxmPWZhbHNlXVxuICAgKiAgIC0gV2hlbiB0aGlzIGlzIHNldCB0byB0cnVlIHRoZSBjb250YWluaW5nIGJsb2NrIGNoZWNraW5nIGlzIHN0YXJ0ZWQgZnJvbVxuICAgKiAgICAgdGhlIHByb3ZpZGVkIGVsZW1lbnQuIE90aGVyd2lzZSB0aGUgY2hlY2tpbmcgaXMgc3RhcnRlZCBmcm9tIHRoZVxuICAgKiAgICAgcHJvdmlkZWQgZWxlbWVudCdzIHBhcmVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7KERvY3VtZW50fEVsZW1lbnQpfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQsIGluY2x1ZGVTZWxmKSB7XG4gICAgLy8gQXMgbG9uZyBhcyB0aGUgY29udGFpbmluZyBibG9jayBpcyBhbiBlbGVtZW50LCBzdGF0aWMgYW5kIG5vdFxuICAgIC8vIHRyYW5zZm9ybWVkLCB0cnkgdG8gZ2V0IHRoZSBlbGVtZW50J3MgcGFyZW50IGVsZW1lbnQgYW5kIGZhbGxiYWNrIHRvXG4gICAgLy8gZG9jdW1lbnQuIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXNyYW1vL21lenIvYmxvYi8wLjYuMS9tZXpyLmpzI0wzMzlcbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgdmFyIHJldCA9IChpbmNsdWRlU2VsZiA/IGVsZW1lbnQgOiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHx8IGRvY3VtZW50O1xuICAgIHdoaWxlIChyZXQgJiYgcmV0ICE9PSBkb2N1bWVudCAmJiBnZXRTdHlsZShyZXQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJyAmJiAhaXNUcmFuc2Zvcm1lZChyZXQpKSB7XG4gICAgICByZXQgPSByZXQucGFyZW50RWxlbWVudCB8fCBkb2N1bWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiBhbiBlbGVtZW50J3Mgc3R5bGUgcHJvcGVydHkgdHJhbnNmb3JtZWQgaW50b1xuICAgKiBhIGZsb2F0IHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlQXNGbG9hdChlbCwgc3R5bGUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChnZXRTdHlsZShlbCwgc3R5bGUpKSB8fCAwO1xuICB9XG5cbiAgdmFyIG9mZnNldEEgPSB7fTtcbiAgdmFyIG9mZnNldEIgPSB7fTtcbiAgdmFyIG9mZnNldERpZmYgPSB7fTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCdzIGRvY3VtZW50IG9mZnNldCwgd2hpY2ggaW4gcHJhY3RpY2UgbWVhbnMgdGhlIHZlcnRpY2FsXG4gICAqIGFuZCBob3Jpem9udGFsIGRpc3RhbmNlIGJldHdlZW4gdGhlIGVsZW1lbnQncyBub3J0aHdlc3QgY29ybmVyIGFuZCB0aGVcbiAgICogZG9jdW1lbnQncyBub3J0aHdlc3QgY29ybmVyLiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBhbHdheXMgcmV0dXJucyB0aGUgc2FtZVxuICAgKiBvYmplY3Qgc28gYmUgc3VyZSB0byByZWFkIHRoZSBkYXRhIGZyb20gaXQgaW5zdGVhZCB1c2luZyBpdCBhcyBhIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHsoRG9jdW1lbnR8RWxlbWVudHxXaW5kb3cpfSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb2Zmc2V0RGF0YV1cbiAgICogICAtIE9wdGlvbmFsIGRhdGEgb2JqZWN0IHdoZXJlIHRoZSBvZmZzZXQgZGF0YSB3aWxsIGJlIGluc2VydGVkIHRvLiBJZiBub3RcbiAgICogICAgIHByb3ZpZGVkIGEgbmV3IG9iamVjdCB3aWxsIGJlIGNyZWF0ZWQgZm9yIHRoZSByZXR1cm4gZGF0YS5cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldE9mZnNldChlbGVtZW50LCBvZmZzZXREYXRhKSB7XG4gICAgdmFyIHJldCA9IG9mZnNldERhdGEgfHwge307XG4gICAgdmFyIHJlY3Q7XG5cbiAgICAvLyBTZXQgdXAgcmV0dXJuIGRhdGEuXG4gICAgcmV0LmxlZnQgPSAwO1xuICAgIHJldC50b3AgPSAwO1xuXG4gICAgLy8gRG9jdW1lbnQncyBvZmZzZXRzIGFyZSBhbHdheXMgMC5cbiAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQpIHJldHVybiByZXQ7XG5cbiAgICAvLyBBZGQgdmlld3BvcnQgc2Nyb2xsIGxlZnQvdG9wIHRvIHRoZSByZXNwZWN0aXZlIG9mZnNldHMuXG4gICAgcmV0LmxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgMDtcbiAgICByZXQudG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IDA7XG5cbiAgICAvLyBXaW5kb3cncyBvZmZzZXRzIGFyZSB0aGUgdmlld3BvcnQgc2Nyb2xsIGxlZnQvdG9wIHZhbHVlcy5cbiAgICBpZiAoZWxlbWVudC5zZWxmID09PSB3aW5kb3cuc2VsZikgcmV0dXJuIHJldDtcblxuICAgIC8vIEFkZCBlbGVtZW50J3MgY2xpZW50IHJlY3RzIHRvIHRoZSBvZmZzZXRzLlxuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldC5sZWZ0ICs9IHJlY3QubGVmdDtcbiAgICByZXQudG9wICs9IHJlY3QudG9wO1xuXG4gICAgLy8gRXhjbHVkZSBlbGVtZW50J3MgYm9yZGVycyBmcm9tIHRoZSBvZmZzZXQuXG4gICAgcmV0LmxlZnQgKz0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItbGVmdC13aWR0aCcpO1xuICAgIHJldC50b3AgKz0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItdG9wLXdpZHRoJyk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgb2Zmc2V0IGRpZmZlcmVuY2UgdHdvIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtQVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtQlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjb21wYXJlQ29udGFpbmluZ0Jsb2Nrcz1mYWxzZV1cbiAgICogICAtIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSB0aGUgY29udGFpbmluZyBibG9ja3Mgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRzXG4gICAqICAgICB3aWxsIGJlIHVzZWQgZm9yIGNhbGN1bGF0aW5nIHRoZSBkaWZmZXJlbmNlLiBPdGhlcndpc2UgdGhlIHByb3ZpZGVkXG4gICAqICAgICBlbGVtZW50cyB3aWxsIGJlIGNvbXBhcmVkIGRpcmVjdGx5LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0RGlmZihlbGVtQSwgZWxlbUIsIGNvbXBhcmVDb250YWluaW5nQmxvY2tzKSB7XG4gICAgb2Zmc2V0RGlmZi5sZWZ0ID0gMDtcbiAgICBvZmZzZXREaWZmLnRvcCA9IDA7XG5cbiAgICAvLyBJZiBlbGVtZW50cyBhcmUgc2FtZSBsZXQncyByZXR1cm4gZWFybHkuXG4gICAgaWYgKGVsZW1BID09PSBlbGVtQikgcmV0dXJuIG9mZnNldERpZmY7XG5cbiAgICAvLyBDb21wYXJlIGNvbnRhaW5pbmcgYmxvY2tzIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoY29tcGFyZUNvbnRhaW5pbmdCbG9ja3MpIHtcbiAgICAgIGVsZW1BID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1BLCB0cnVlKTtcbiAgICAgIGVsZW1CID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1CLCB0cnVlKTtcblxuICAgICAgLy8gSWYgY29udGFpbmluZyBibG9ja3MgYXJlIGlkZW50aWNhbCwgbGV0J3MgcmV0dXJuIGVhcmx5LlxuICAgICAgaWYgKGVsZW1BID09PSBlbGVtQikgcmV0dXJuIG9mZnNldERpZmY7XG4gICAgfVxuXG4gICAgLy8gRmluYWxseSwgbGV0J3MgY2FsY3VsYXRlIHRoZSBvZmZzZXQgZGlmZi5cbiAgICBnZXRPZmZzZXQoZWxlbUEsIG9mZnNldEEpO1xuICAgIGdldE9mZnNldChlbGVtQiwgb2Zmc2V0Qik7XG4gICAgb2Zmc2V0RGlmZi5sZWZ0ID0gb2Zmc2V0Qi5sZWZ0IC0gb2Zmc2V0QS5sZWZ0O1xuICAgIG9mZnNldERpZmYudG9wID0gb2Zmc2V0Qi50b3AgLSBvZmZzZXRBLnRvcDtcblxuICAgIHJldHVybiBvZmZzZXREaWZmO1xuICB9XG5cbiAgdmFyIHN0eWxlT3ZlcmZsb3cgPSAnb3ZlcmZsb3cnO1xuICB2YXIgc3R5bGVPdmVyZmxvd1ggPSAnb3ZlcmZsb3cteCc7XG4gIHZhciBzdHlsZU92ZXJmbG93WSA9ICdvdmVyZmxvdy15JztcbiAgdmFyIG92ZXJmbG93QXV0byA9ICdhdXRvJztcbiAgdmFyIG92ZXJmbG93U2Nyb2xsID0gJ3Njcm9sbCc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtZW50KSB7XG4gICAgdmFyIG92ZXJmbG93ID0gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVPdmVyZmxvdyk7XG4gICAgaWYgKG92ZXJmbG93ID09PSBvdmVyZmxvd0F1dG8gfHwgb3ZlcmZsb3cgPT09IG92ZXJmbG93U2Nyb2xsKSByZXR1cm4gdHJ1ZTtcblxuICAgIG92ZXJmbG93ID0gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVPdmVyZmxvd1gpO1xuICAgIGlmIChvdmVyZmxvdyA9PT0gb3ZlcmZsb3dBdXRvIHx8IG92ZXJmbG93ID09PSBvdmVyZmxvd1Njcm9sbCkgcmV0dXJuIHRydWU7XG5cbiAgICBvdmVyZmxvdyA9IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlT3ZlcmZsb3dZKTtcbiAgICBpZiAob3ZlcmZsb3cgPT09IG92ZXJmbG93QXV0byB8fCBvdmVyZmxvdyA9PT0gb3ZlcmZsb3dTY3JvbGwpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3QgZWxlbWVudCdzIGFuY2VzdG9ycyB0aGF0IGFyZSBwb3RlbnRpYWxseSBzY3JvbGxhYmxlIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luY2x1ZGVTZWxmPWZhbHNlXVxuICAgKiBAcGFyYW0ge0FycmF5fSBbZGF0YV1cbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyhlbGVtZW50LCBpbmNsdWRlU2VsZiwgZGF0YSkge1xuICAgIHZhciByZXQgPSBkYXRhIHx8IFtdO1xuICAgIHZhciBwYXJlbnQgPSBpbmNsdWRlU2VsZiA/IGVsZW1lbnQgOiBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAvLyBGaW5kIHNjcm9sbCBwYXJlbnRzLlxuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgLy8gSWYgZWxlbWVudCBpcyBpbnNpZGUgU2hhZG93RE9NIGxldCdzIGdldCBpdCdzIGhvc3Qgbm9kZSBmcm9tIHRoZSByZWFsXG4gICAgICAvLyBET00gYW5kIGNvbnRpbnVlIGxvb3BpbmcuXG4gICAgICBpZiAocGFyZW50LmdldFJvb3ROb2RlICYmIHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LmdldFJvb3ROb2RlKCkuaG9zdDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSBsZXQncyBhZGQgaXQgdG8gdGhlIHNjcm9sbGFibGUgbGlzdC5cbiAgICAgIGlmIChpc1Njcm9sbGFibGUocGFyZW50KSkge1xuICAgICAgICByZXQucHVzaChwYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgYWRkIHdpbmRvdyB0byB0aGUgcmVzdWx0cy5cbiAgICByZXQucHVzaCh3aW5kb3cpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGVWYWx1ZSA9IHt9O1xuICB2YXIgdHJhbnNmb3JtU3R5bGUkMiA9ICd0cmFuc2Zvcm0nO1xuICB2YXIgdHJhbnNmb3JtTm9uZSA9ICdub25lJztcbiAgdmFyIHJ4TWF0M2QgPSAvXm1hdHJpeDNkLztcbiAgdmFyIHJ4TWF0VHggPSAvKFteLF0qLCl7NH0vO1xuICB2YXIgcnhNYXQzZFR4ID0gLyhbXixdKiwpezEyfS87XG4gIHZhciByeE5leHRJdGVtID0gL1teLF0qLC87XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQncyBjb21wdXRlZCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHZhbHVlcyBhcyBhIGZsb2F0cy5cbiAgICogVGhlIHJldHVybmVkIG9iamVjdCBpcyBhbHdheXMgdGhlIHNhbWUgb2JqZWN0IGFuZCB1cGRhdGVkIGV2ZXJ5IHRpbWUgdGhpc1xuICAgKiBmdW5jdGlvbiBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbGVtZW50KSB7XG4gICAgdHJhbnNsYXRlVmFsdWUueCA9IDA7XG4gICAgdHJhbnNsYXRlVmFsdWUueSA9IDA7XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gZ2V0U3R5bGUoZWxlbWVudCwgdHJhbnNmb3JtU3R5bGUkMik7XG4gICAgaWYgKCF0cmFuc2Zvcm0gfHwgdHJhbnNmb3JtID09PSB0cmFuc2Zvcm1Ob25lKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIHN0eWxlIGNhbiBiZSBpbiBlaXRoZXIgbWF0cml4M2QoLi4uKSBvciBtYXRyaXgoLi4uKS5cbiAgICB2YXIgaXNNYXQzZCA9IHJ4TWF0M2QudGVzdCh0cmFuc2Zvcm0pO1xuICAgIHZhciB0WCA9IHRyYW5zZm9ybS5yZXBsYWNlKGlzTWF0M2QgPyByeE1hdDNkVHggOiByeE1hdFR4LCAnJyk7XG4gICAgdmFyIHRZID0gdFgucmVwbGFjZShyeE5leHRJdGVtLCAnJyk7XG5cbiAgICB0cmFuc2xhdGVWYWx1ZS54ID0gcGFyc2VGbG9hdCh0WCkgfHwgMDtcbiAgICB0cmFuc2xhdGVWYWx1ZS55ID0gcGFyc2VGbG9hdCh0WSkgfHwgMDtcblxuICAgIHJldHVybiB0cmFuc2xhdGVWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSB2YWx1ZSBpbnRvIENTUyB0cmFuc2Zvcm0gc3R5bGVcbiAgICogcHJvcGVydHkncyB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFRyYW5zbGF0ZVN0cmluZyh4LCB5KSB7XG4gICAgcmV0dXJuICd0cmFuc2xhdGVYKCcgKyB4ICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB5ICsgJ3B4KSc7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNsYXNzIGZyb20gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudE1hdGNoZXMoZWxlbWVudCwgJy4nICsgY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJylcbiAgICAgICAgICAucmVwbGFjZSgnICcgKyBjbGFzc05hbWUgKyAnICcsICcgJylcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERyYWcgc3RhcnQgcHJlZGljYXRlIHN0YXRlcy5cbiAgdmFyIHN0YXJ0UHJlZGljYXRlSW5hY3RpdmUgPSAwO1xuICB2YXIgc3RhcnRQcmVkaWNhdGVQZW5kaW5nID0gMTtcbiAgdmFyIHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQgPSAyO1xuICB2YXIgc3RhcnRQcmVkaWNhdGVSZWplY3RlZCA9IDM7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG91Y2ggaW50ZXJhY3Rpb24gdG8gYW4gaXRlbS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbURyYWcoaXRlbSkge1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fZ3JpZElkID0gZ3JpZC5faWQ7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGZhbHNlO1xuXG4gICAgLy8gU3RhcnQgcHJlZGljYXRlIGRhdGEuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGUgPSBpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTdGFydFByZWRpY2F0ZSlcbiAgICAgID8gc2V0dGluZ3MuZHJhZ1N0YXJ0UHJlZGljYXRlXG4gICAgICA6IEl0ZW1EcmFnLmRlZmF1bHRTdGFydFByZWRpY2F0ZTtcbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZTtcbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIERhdGEgZm9yIGRyYWcgc29ydCBwcmVkaWNhdGUgaGV1cmlzdGljcy5cbiAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9oWDEgPSAwO1xuICAgIHRoaXMuX2hYMiA9IDA7XG4gICAgdGhpcy5faFkxID0gMDtcbiAgICB0aGlzLl9oWTIgPSAwO1xuXG4gICAgLy8gU2V0dXAgaXRlbSdzIGluaXRpYWwgZHJhZyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBCaW5kIHRoZSBtZXRob2RzIHRoYXQgbmVlZHMgYmluZGluZy5cbiAgICB0aGlzLl9wcmVTdGFydENoZWNrID0gdGhpcy5fcHJlU3RhcnRDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZUVuZENoZWNrID0gdGhpcy5fcHJlRW5kQ2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblNjcm9sbCA9IHRoaXMuX29uU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcHJlcGFyZU1vdmUgPSB0aGlzLl9wcmVwYXJlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2FwcGx5TW92ZSA9IHRoaXMuX2FwcGx5TW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZXBhcmVTY3JvbGwgPSB0aGlzLl9wcmVwYXJlU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYXBwbHlTY3JvbGwgPSB0aGlzLl9hcHBseVNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2NoZWNrT3ZlcmxhcCA9IHRoaXMuX2NoZWNrT3ZlcmxhcC5iaW5kKHRoaXMpO1xuXG4gICAgLy8gQ3JlYXRlIGRlYm91bmNlIG92ZXJsYXAgY2hlY2tlciBmdW5jdGlvbi5cbiAgICB2YXIgc29ydEludGVydmFsID0gc2V0dGluZ3MuZHJhZ1NvcnRIZXVyaXN0aWNzLnNvcnRJbnRlcnZhbDtcbiAgICB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSA9IGRlYm91bmNlKHRoaXMuX2NoZWNrT3ZlcmxhcCwgc29ydEludGVydmFsKTtcblxuICAgIC8vIEluaXQgZHJhZ2dlci5cbiAgICB0aGlzLl9kcmFnZ2VyID0gbmV3IERyYWdnZXIoZWxlbWVudCwgc2V0dGluZ3MuZHJhZ0Nzc1Byb3BzKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdzdGFydCcsIHRoaXMuX3ByZVN0YXJ0Q2hlY2spO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ21vdmUnLCB0aGlzLl9wcmVTdGFydENoZWNrKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdjYW5jZWwnLCB0aGlzLl9wcmVFbmRDaGVjayk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignZW5kJywgdGhpcy5fcHJlRW5kQ2hlY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBzdGF0aWMgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZHJhZyBzdGFydCBwcmVkaWNhdGUgaGFuZGxlciB0aGF0IGhhbmRsZXMgYW5jaG9yIGVsZW1lbnRzXG4gICAqIGdyYWNlZnVsbHkuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpcyBmdW5jdGlvbiBkZWZpbmVzIGlmIHRoZSBkcmFnIGlzXG4gICAqIHN0YXJ0ZWQsIHJlamVjdGVkIG9yIHBlbmRpbmcuIFdoZW4gdHJ1ZSBpcyByZXR1cm5lZCB0aGUgZHJhZ2dpbmcgaXMgc3RhcnRlZFxuICAgKiBhbmQgd2hlbiBmYWxzZSBpcyByZXR1cm5lZCB0aGUgZHJhZ2dpbmcgaXMgcmVqZWN0ZWQuIElmIG5vdGhpbmcgaXMgcmV0dXJuZWRcbiAgICogdGhlIHByZWRpY2F0ZSB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBvbiB0aGUgbmV4dCBkcmFnIG1vdmVtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogICAtIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIHRvIHBhc3MgdGhlIHByZWRpY2F0ZVxuICAgKiAgICAgaXQncyBvcHRpb25zIG1hbnVhbGx5LiBCeSBkZWZhdWx0IHRoZSBwcmVkaWNhdGUgcmV0cmlldmVzIHRoZSBvcHRpb25zXG4gICAqICAgICBmcm9tIHRoZSBncmlkJ3Mgc2V0dGluZ3MuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbURyYWcuZGVmYXVsdFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oaXRlbSwgZXZlbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgZHJhZyA9IGl0ZW0uX2RyYWc7XG4gICAgdmFyIHByZWRpY2F0ZSA9IGRyYWcuX3N0YXJ0UHJlZGljYXRlRGF0YSB8fCBkcmFnLl9zZXR1cFN0YXJ0UHJlZGljYXRlKG9wdGlvbnMpO1xuXG4gICAgLy8gRmluYWwgZXZlbnQgbG9naWMuIEF0IHRoaXMgc3RhZ2UgcmV0dXJuIHZhbHVlIGRvZXMgbm90IG1hdHRlciBhbnltb3JlLFxuICAgIC8vIHRoZSBwcmVkaWNhdGUgaXMgZWl0aGVyIHJlc29sdmVkIG9yIGl0J3Mgbm90IGFuZCB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cbiAgICAvLyBhYm91dCBpdC4gSGVyZSB3ZSBqdXN0IHJlc2V0IGRhdGEgYW5kIGlmIHRoZSBpdGVtIGVsZW1lbnQgaXMgYSBsaW5rXG4gICAgLy8gd2UgZm9sbG93IGl0IChpZiB0aGVyZSBoYXMgb25seSBiZWVuIHNsaWdodCBtb3ZlbWVudCkuXG4gICAgaWYgKGV2ZW50LmlzRmluYWwpIHtcbiAgICAgIGRyYWcuX2ZpbmlzaFN0YXJ0UHJlZGljYXRlKGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGFuZCBzdG9yZSB0aGUgaGFuZGxlIGVsZW1lbnQgc28gd2UgY2FuIGNoZWNrIGxhdGVyIG9uIGlmIHRoZVxuICAgIC8vIGN1cnNvciBpcyB3aXRoaW4gdGhlIGhhbmRsZS4gSWYgd2UgaGF2ZSBhIGhhbmRsZSBzZWxlY3RvciBsZXQncyBmaW5kXG4gICAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudC4gT3RoZXJ3aXNlIGxldCdzIHVzZSB0aGUgaXRlbSBlbGVtZW50IGFzIHRoZVxuICAgIC8vIGhhbmRsZS5cbiAgICBpZiAoIXByZWRpY2F0ZS5oYW5kbGVFbGVtZW50KSB7XG4gICAgICBwcmVkaWNhdGUuaGFuZGxlRWxlbWVudCA9IGRyYWcuX2dldFN0YXJ0UHJlZGljYXRlSGFuZGxlKGV2ZW50KTtcbiAgICAgIGlmICghcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiBkZWxheSBpcyBkZWZpbmVkIGxldCdzIGtlZXAgdHJhY2sgb2YgdGhlIGxhdGVzdCBldmVudCBhbmQgaW5pdGlhdGVcbiAgICAvLyBkZWxheSBpZiBpdCBoYXMgbm90IGJlZW4gZG9uZSB5ZXQuXG4gICAgaWYgKHByZWRpY2F0ZS5kZWxheSkge1xuICAgICAgcHJlZGljYXRlLmV2ZW50ID0gZXZlbnQ7XG4gICAgICBpZiAoIXByZWRpY2F0ZS5kZWxheVRpbWVyKSB7XG4gICAgICAgIHByZWRpY2F0ZS5kZWxheVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcHJlZGljYXRlLmRlbGF5ID0gMDtcbiAgICAgICAgICBpZiAoZHJhZy5fcmVzb2x2ZVN0YXJ0UHJlZGljYXRlKHByZWRpY2F0ZS5ldmVudCkpIHtcbiAgICAgICAgICAgIGRyYWcuX2ZvcmNlUmVzb2x2ZVN0YXJ0UHJlZGljYXRlKHByZWRpY2F0ZS5ldmVudCk7XG4gICAgICAgICAgICBkcmFnLl9yZXNldFN0YXJ0UHJlZGljYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBwcmVkaWNhdGUuZGVsYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcmFnLl9yZXNvbHZlU3RhcnRQcmVkaWNhdGUoZXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRyYWcgc29ydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy50aHJlc2hvbGQ9NTBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5hY3Rpb249J21vdmUnXVxuICAgKiBAcmV0dXJucyB7KEJvb2xlYW58RHJhZ1NvcnRDb21tYW5kKX1cbiAgICogICAtIFJldHVybnMgZmFsc2UgaWYgbm8gdmFsaWQgaW5kZXggd2FzIGZvdW5kLiBPdGhlcndpc2UgcmV0dXJucyBkcmFnIHNvcnRcbiAgICogICAgIGNvbW1hbmQuXG4gICAqL1xuICBJdGVtRHJhZy5kZWZhdWx0U29ydFByZWRpY2F0ZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbVJlY3QgPSB7fTtcbiAgICB2YXIgdGFyZ2V0UmVjdCA9IHt9O1xuICAgIHZhciByZXR1cm5EYXRhID0ge307XG4gICAgdmFyIHJvb3RHcmlkQXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGdldFRhcmdldEdyaWQoaXRlbSwgcm9vdEdyaWQsIHRocmVzaG9sZCkge1xuICAgICAgdmFyIHRhcmdldCA9IG51bGw7XG4gICAgICB2YXIgZHJhZ1NvcnQgPSByb290R3JpZC5fc2V0dGluZ3MuZHJhZ1NvcnQ7XG4gICAgICB2YXIgYmVzdFNjb3JlID0gLTE7XG4gICAgICB2YXIgZ3JpZFNjb3JlO1xuICAgICAgdmFyIGdyaWRzO1xuICAgICAgdmFyIGdyaWQ7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gR2V0IHBvdGVudGlhbCB0YXJnZXQgZ3JpZHMuXG4gICAgICBpZiAoZHJhZ1NvcnQgPT09IHRydWUpIHtcbiAgICAgICAgcm9vdEdyaWRBcnJheVswXSA9IHJvb3RHcmlkO1xuICAgICAgICBncmlkcyA9IHJvb3RHcmlkQXJyYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkcyA9IGRyYWdTb3J0LmNhbGwocm9vdEdyaWQsIGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIGdyaWRzLlxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGdyaWRzKSkgcmV0dXJuIHRhcmdldDtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBncmlkcyBhbmQgZ2V0IHRoZSBiZXN0IG1hdGNoLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdyaWQgPSBncmlkc1tpXTtcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IGFsbCBkZXN0cm95ZWQgZ3JpZHMuXG4gICAgICAgIGlmIChncmlkLl9pc0Rlc3Ryb3llZCkgY29udGludWU7XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgdGhlIGdyaWQncyBvZmZzZXRzIGFuZCBkaW1lbnNpb25zIHNpbmNlIHRoZXkgbWlnaHRcbiAgICAgICAgLy8gaGF2ZSBjaGFuZ2VkIChlLmcgZHVyaW5nIHNjcm9sbGluZykuXG4gICAgICAgIGdyaWQuX3VwZGF0ZUJvdW5kaW5nUmVjdCgpO1xuXG4gICAgICAgIC8vIENoZWNrIGhvdyBtdWNoIGRyYWdnZWQgZWxlbWVudCBvdmVybGFwcyB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAgICAgIHRhcmdldFJlY3Qud2lkdGggPSBncmlkLl93aWR0aDtcbiAgICAgICAgdGFyZ2V0UmVjdC5oZWlnaHQgPSBncmlkLl9oZWlnaHQ7XG4gICAgICAgIHRhcmdldFJlY3QubGVmdCA9IGdyaWQuX2xlZnQ7XG4gICAgICAgIHRhcmdldFJlY3QudG9wID0gZ3JpZC5fdG9wO1xuICAgICAgICBncmlkU2NvcmUgPSBnZXRSZWN0T3ZlcmxhcFNjb3JlKGl0ZW1SZWN0LCB0YXJnZXRSZWN0KTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGdyaWQgaXMgdGhlIGJlc3QgbWF0Y2ggc28gZmFyLlxuICAgICAgICBpZiAoZ3JpZFNjb3JlID4gdGhyZXNob2xkICYmIGdyaWRTY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgIGJlc3RTY29yZSA9IGdyaWRTY29yZTtcbiAgICAgICAgICB0YXJnZXQgPSBncmlkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFsd2F5cyByZXNldCByb290IGdyaWQgYXJyYXkuXG4gICAgICByb290R3JpZEFycmF5Lmxlbmd0aCA9IDA7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0sIG9wdGlvbnMpIHtcbiAgICAgIHZhciBkcmFnID0gaXRlbS5fZHJhZztcbiAgICAgIHZhciByb290R3JpZCA9IGRyYWcuX2dldEdyaWQoKTtcblxuICAgICAgLy8gR2V0IGRyYWcgc29ydCBwcmVkaWNhdGUgc2V0dGluZ3MuXG4gICAgICB2YXIgc29ydFRocmVzaG9sZCA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMudGhyZXNob2xkID09PSAnbnVtYmVyJyA/IG9wdGlvbnMudGhyZXNob2xkIDogNTA7XG4gICAgICB2YXIgc29ydEFjdGlvbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5hY3Rpb24gPT09IGFjdGlvblN3YXAgPyBhY3Rpb25Td2FwIDogYWN0aW9uTW92ZTtcblxuICAgICAgLy8gUG9wdWxhdGUgaXRlbSByZWN0IGRhdGEuXG4gICAgICBpdGVtUmVjdC53aWR0aCA9IGl0ZW0uX3dpZHRoO1xuICAgICAgaXRlbVJlY3QuaGVpZ2h0ID0gaXRlbS5faGVpZ2h0O1xuICAgICAgaXRlbVJlY3QubGVmdCA9IGRyYWcuX2VsZW1lbnRDbGllbnRYO1xuICAgICAgaXRlbVJlY3QudG9wID0gZHJhZy5fZWxlbWVudENsaWVudFk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdGFyZ2V0IGdyaWQuXG4gICAgICB2YXIgZ3JpZCA9IGdldFRhcmdldEdyaWQoaXRlbSwgcm9vdEdyaWQsIHNvcnRUaHJlc2hvbGQpO1xuXG4gICAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UgZm91bmQgbm8gZ3JpZCBjb250YWluZXIgZWxlbWVudCB0aGF0IG92ZXJsYXBzIHRoZVxuICAgICAgLy8gZHJhZ2dlZCBpdGVtIGVub3VnaC5cbiAgICAgIGlmICghZ3JpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB2YXIgZ3JpZE9mZnNldExlZnQgPSAwO1xuICAgICAgdmFyIGdyaWRPZmZzZXRUb3AgPSAwO1xuICAgICAgdmFyIG1hdGNoU2NvcmUgPSAtMTtcbiAgICAgIHZhciBtYXRjaEluZGV4O1xuICAgICAgdmFyIGhhc1ZhbGlkVGFyZ2V0cztcbiAgICAgIHZhciB0YXJnZXQ7XG4gICAgICB2YXIgc2NvcmU7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gSWYgaXRlbSBpcyBtb3ZlZCB3aXRoaW4gaXQncyBvcmlnaW5hdGluZyBncmlkIGFkanVzdCBpdGVtJ3MgbGVmdCBhbmRcbiAgICAgIC8vIHRvcCBwcm9wcy4gT3RoZXJ3aXNlIGlmIGl0ZW0gaXMgbW92ZWQgdG8vd2l0aGluIGFub3RoZXIgZ3JpZCBnZXQgdGhlXG4gICAgICAvLyBjb250YWluZXIgZWxlbWVudCdzIG9mZnNldCAoZnJvbSB0aGUgZWxlbWVudCdzIGNvbnRlbnQgZWRnZSkuXG4gICAgICBpZiAoZ3JpZCA9PT0gcm9vdEdyaWQpIHtcbiAgICAgICAgaXRlbVJlY3QubGVmdCA9IGRyYWcuX2dyaWRYICsgaXRlbS5fbWFyZ2luTGVmdDtcbiAgICAgICAgaXRlbVJlY3QudG9wID0gZHJhZy5fZ3JpZFkgKyBpdGVtLl9tYXJnaW5Ub3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkLl91cGRhdGVCb3JkZXJzKDEsIDAsIDEsIDApO1xuICAgICAgICBncmlkT2Zmc2V0TGVmdCA9IGdyaWQuX2xlZnQgKyBncmlkLl9ib3JkZXJMZWZ0O1xuICAgICAgICBncmlkT2Zmc2V0VG9wID0gZ3JpZC5fdG9wICsgZ3JpZC5fYm9yZGVyVG9wO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHRhcmdldCBncmlkIGl0ZW1zIGFuZCB0cnkgdG8gZmluZCB0aGUgYmVzdCBtYXRjaC5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YXJnZXQgPSBncmlkLl9pdGVtc1tpXTtcblxuICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGl0ZW0gaXMgbm90IGFjdGl2ZSBvciB0aGUgdGFyZ2V0IGl0ZW0gaXMgdGhlIGRyYWdnZWRcbiAgICAgICAgLy8gaXRlbSBsZXQncyBza2lwIHRvIHRoZSBuZXh0IGl0ZW0uXG4gICAgICAgIGlmICghdGFyZ2V0Ll9pc0FjdGl2ZSB8fCB0YXJnZXQgPT09IGl0ZW0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1hcmsgdGhlIGdyaWQgYXMgaGF2aW5nIHZhbGlkIHRhcmdldCBpdGVtcy5cbiAgICAgICAgaGFzVmFsaWRUYXJnZXRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHRhcmdldCdzIG92ZXJsYXAgc2NvcmUgd2l0aCB0aGUgZHJhZ2dlZCBpdGVtLlxuICAgICAgICB0YXJnZXRSZWN0LndpZHRoID0gdGFyZ2V0Ll93aWR0aDtcbiAgICAgICAgdGFyZ2V0UmVjdC5oZWlnaHQgPSB0YXJnZXQuX2hlaWdodDtcbiAgICAgICAgdGFyZ2V0UmVjdC5sZWZ0ID0gdGFyZ2V0Ll9sZWZ0ICsgdGFyZ2V0Ll9tYXJnaW5MZWZ0ICsgZ3JpZE9mZnNldExlZnQ7XG4gICAgICAgIHRhcmdldFJlY3QudG9wID0gdGFyZ2V0Ll90b3AgKyB0YXJnZXQuX21hcmdpblRvcCArIGdyaWRPZmZzZXRUb3A7XG4gICAgICAgIHNjb3JlID0gZ2V0UmVjdE92ZXJsYXBTY29yZShpdGVtUmVjdCwgdGFyZ2V0UmVjdCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGJlc3QgbWF0Y2ggaW5kZXggYW5kIHNjb3JlIGlmIHRoZSB0YXJnZXQncyBvdmVybGFwIHNjb3JlIHdpdGhcbiAgICAgICAgLy8gdGhlIGRyYWdnZWQgaXRlbSBpcyBoaWdoZXIgdGhhbiB0aGUgY3VycmVudCBiZXN0IG1hdGNoIHNjb3JlLlxuICAgICAgICBpZiAoc2NvcmUgPiBtYXRjaFNjb3JlKSB7XG4gICAgICAgICAgbWF0Y2hJbmRleCA9IGk7XG4gICAgICAgICAgbWF0Y2hTY29yZSA9IHNjb3JlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHZhbGlkIG1hdGNoIGFuZCB0aGUgaXRlbSBpcyBiZWluZyBtb3ZlZCBpbnRvIGFub3RoZXJcbiAgICAgIC8vIGdyaWQuXG4gICAgICBpZiAobWF0Y2hTY29yZSA8IHNvcnRUaHJlc2hvbGQgJiYgaXRlbS5nZXRHcmlkKCkgIT09IGdyaWQpIHtcbiAgICAgICAgbWF0Y2hJbmRleCA9IGhhc1ZhbGlkVGFyZ2V0cyA/IC0xIDogMDtcbiAgICAgICAgbWF0Y2hTY29yZSA9IEluZmluaXR5O1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgYmVzdCBtYXRjaCBvdmVybGFwcyBlbm91Z2ggdG8ganVzdGlmeSBhIHBsYWNlbWVudCBzd2l0Y2guXG4gICAgICBpZiAobWF0Y2hTY29yZSA+PSBzb3J0VGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybkRhdGEuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHJldHVybkRhdGEuaW5kZXggPSBtYXRjaEluZGV4O1xuICAgICAgICByZXR1cm5EYXRhLmFjdGlvbiA9IHNvcnRBY3Rpb247XG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQWJvcnQgZHJhZ2dpbmcgYW5kIHJlc2V0IGRyYWcgZGF0YS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtRHJhZ31cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcblxuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgYmVpbmcgZHJvcHBlZCBpbnRvIGFub3RoZXIgZ3JpZCwgZmluaXNoIGl0IHVwIGFuZCByZXR1cm5cbiAgICAvLyBpbW1lZGlhdGVseS5cbiAgICBpZiAodGhpcy5faXNNaWdyYXRpbmcpIHtcbiAgICAgIHRoaXMuX2ZpbmlzaE1pZ3JhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCBtb3ZlIGFuZCBzY3JvbGwgdGlja3MuXG4gICAgY2FuY2VsTW92ZVRpY2soaXRlbS5faWQpO1xuICAgIGNhbmNlbFNjcm9sbFRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gUmVtb3ZlIHNjcm9sbCBsaXN0ZW5lcnMuXG4gICAgdGhpcy5fdW5iaW5kU2Nyb2xsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBDYW5jZWwgb3ZlcmxhcCBjaGVjay5cbiAgICB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgnY2FuY2VsJyk7XG5cbiAgICAvLyBBcHBlbmQgaXRlbSBlbGVtZW50IHRvIHRoZSBjb250YWluZXIgaWYgaXQncyBub3QgaXQncyBjaGlsZC4gQWxzbyBtYWtlXG4gICAgLy8gc3VyZSB0aGUgdHJhbnNsYXRlIHZhbHVlcyBhcmUgYWRqdXN0ZWQgdG8gYWNjb3VudCBmb3IgdGhlIERPTSBzaGlmdC5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBncmlkLl9lbGVtZW50KSB7XG4gICAgICBncmlkLl9lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9ncmlkWCwgdGhpcy5fZ3JpZFkpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBncmlkLl9zZXR0aW5ncy5pdGVtRHJhZ2dpbmdDbGFzcyk7XG5cbiAgICAvLyBSZXNldCBkcmFnIGRhdGEuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1EcmFnfVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2RyYWdnZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7P0dyaWR9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2dldEdyaWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ3JpZEluc3RhbmNlc1t0aGlzLl9ncmlkSWRdIHx8IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwL3Jlc2V0IGRyYWcgZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIElzIGl0ZW0gYmVpbmcgZHJhZ2dlZD9cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLy8gVGhlIGRyYWdnZWQgaXRlbSdzIGNvbnRhaW5lciBlbGVtZW50LlxuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG5cbiAgICAvLyBUaGUgZHJhZ2dlZCBpdGVtJ3MgY29udGFpbmluZyBibG9jay5cbiAgICB0aGlzLl9jb250YWluaW5nQmxvY2sgPSBudWxsO1xuXG4gICAgLy8gRHJhZy9zY3JvbGwgZXZlbnQgZGF0YS5cbiAgICB0aGlzLl9kcmFnRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX3Njcm9sbEV2ZW50ID0gbnVsbDtcblxuICAgIC8vIEFsbCB0aGUgZWxlbWVudHMgd2hpY2ggbmVlZCB0byBiZSBsaXN0ZW5lZCBmb3Igc2Nyb2xsIGV2ZW50cyBkdXJpbmdcbiAgICAvLyBkcmFnZ2luZy5cbiAgICB0aGlzLl9zY3JvbGxlcnMgPSBbXTtcblxuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZVgvdHJhbnNsYXRlWSBwb3NpdGlvbi5cbiAgICB0aGlzLl9sZWZ0ID0gMDtcbiAgICB0aGlzLl90b3AgPSAwO1xuXG4gICAgLy8gRHJhZ2dlZCBlbGVtZW50J3MgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gdGhlIGdyaWQuXG4gICAgdGhpcy5fZ3JpZFggPSAwO1xuICAgIHRoaXMuX2dyaWRZID0gMDtcblxuICAgIC8vIERyYWdnZWQgZWxlbWVudCdzIGN1cnJlbnQgb2Zmc2V0IGZyb20gd2luZG93J3Mgbm9ydGh3ZXN0IGNvcm5lci4gRG9lc1xuICAgIC8vIG5vdCBhY2NvdW50IGZvciBlbGVtZW50J3MgbWFyZ2lucy5cbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WCA9IDA7XG4gICAgdGhpcy5fZWxlbWVudENsaWVudFkgPSAwO1xuXG4gICAgLy8gT2Zmc2V0IGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZHJhZ2dlZCBlbGVtZW50J3MgdGVtcG9yYXJ5IGRyYWdcbiAgICAvLyBjb250YWluZXIgYW5kIGl0J3Mgb3JpZ2luYWwgY29udGFpbmVyLlxuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgdG8gYWxsIHNjcm9sbGFibGUgYW5jZXN0b3IgZWxlbWVudHMgb2YgdGhlXG4gICAqIGRyYWdnZWQgZWxlbWVudCBhbmQgdGhlIGRyYWcgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fYmluZFNjcm9sbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gdGhpcy5fZ2V0R3JpZCgpLl9lbGVtZW50O1xuICAgIHZhciBkcmFnQ29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xuICAgIHZhciBzY3JvbGxlcnMgPSB0aGlzLl9zY3JvbGxlcnM7XG4gICAgdmFyIGdyaWRTY3JvbGxlcnM7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBHZXQgZHJhZ2dlZCBlbGVtZW50J3Mgc2Nyb2xsaW5nIHBhcmVudHMuXG4gICAgc2Nyb2xsZXJzLmxlbmd0aCA9IDA7XG4gICAgZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyh0aGlzLl9pdGVtLl9lbGVtZW50LCBmYWxzZSwgc2Nyb2xsZXJzKTtcblxuICAgIC8vIElmIGRyYWcgY29udGFpbmVyIGlzIGRlZmluZWQgYW5kIGl0J3Mgbm90IHRoZSBzYW1lIGVsZW1lbnQgYXMgZ3JpZFxuICAgIC8vIGNvbnRhaW5lciB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZSBncmlkIGNvbnRhaW5lciBhbmQgaXQncyBzY3JvbGwgcGFyZW50c1xuICAgIC8vIHRvIHRoZSBlbGVtZW50cyB3aGljaCBhcmUgZ29pbmcgdG8gYmUgbGlzdGVuZXIgZm9yIHNjcm9sbCBldmVudHMuXG4gICAgaWYgKGRyYWdDb250YWluZXIgIT09IGdyaWRDb250YWluZXIpIHtcbiAgICAgIGdyaWRTY3JvbGxlcnMgPSBbXTtcbiAgICAgIGdldFNjcm9sbGFibGVBbmNlc3RvcnMoZ3JpZENvbnRhaW5lciwgdHJ1ZSwgZ3JpZFNjcm9sbGVycyk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZFNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2Nyb2xsZXJzLmluZGV4T2YoZ3JpZFNjcm9sbGVyc1tpXSkgPCAwKSB7XG4gICAgICAgICAgc2Nyb2xsZXJzLnB1c2goZ3JpZFNjcm9sbGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCaW5kIHNjcm9sbCBsaXN0ZW5lcnMuXG4gICAgZm9yIChpID0gMDsgaSA8IHNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgc2Nyb2xsZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBjdXJyZW50bHkgYm91bmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgZnJvbSBhbGwgc2Nyb2xsYWJsZSBhbmNlc3RvclxuICAgKiBlbGVtZW50cyBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IGFuZCB0aGUgZHJhZyBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl91bmJpbmRTY3JvbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsZXJzID0gdGhpcy5fc2Nyb2xsZXJzO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgc2Nyb2xsZXJzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBzY3JvbGxlcnMubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAgZGVmYXVsdCBzdGFydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9zZXR1cFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBjb25maWcgPSBvcHRpb25zIHx8IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1N0YXJ0UHJlZGljYXRlIHx8IDA7XG4gICAgcmV0dXJuICh0aGlzLl9zdGFydFByZWRpY2F0ZURhdGEgPSB7XG4gICAgICBkaXN0YW5jZTogTWF0aC5hYnMoY29uZmlnLmRpc3RhbmNlKSB8fCAwLFxuICAgICAgZGVsYXk6IE1hdGgubWF4KGNvbmZpZy5kZWxheSwgMCkgfHwgMCxcbiAgICAgIGhhbmRsZTogdHlwZW9mIGNvbmZpZy5oYW5kbGUgPT09ICdzdHJpbmcnID8gY29uZmlnLmhhbmRsZSA6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGRlZmF1bHQgc3RhcnQgcHJlZGljYXRlIGhhbmRsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMgez9IVE1MRWxlbWVudH1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZ2V0U3RhcnRQcmVkaWNhdGVIYW5kbGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBwcmVkaWNhdGUgPSB0aGlzLl9zdGFydFByZWRpY2F0ZURhdGE7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9pdGVtLl9lbGVtZW50O1xuICAgIHZhciBoYW5kbGVFbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIE5vIGhhbmRsZSwgbm8gaGFzc2xlIC0+IGxldCdzIHVzZSB0aGUgaXRlbSBlbGVtZW50IGFzIHRoZSBoYW5kbGUuXG4gICAgaWYgKCFwcmVkaWNhdGUuaGFuZGxlKSByZXR1cm4gaGFuZGxlRWxlbWVudDtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc3BlY2lmaWMgcHJlZGljYXRlIGhhbmRsZSBkZWZpbmVkLCBsZXQncyB0cnkgdG8gZ2V0IGl0LlxuICAgIGhhbmRsZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgd2hpbGUgKGhhbmRsZUVsZW1lbnQgJiYgIWVsZW1lbnRNYXRjaGVzKGhhbmRsZUVsZW1lbnQsIHByZWRpY2F0ZS5oYW5kbGUpKSB7XG4gICAgICBoYW5kbGVFbGVtZW50ID0gaGFuZGxlRWxlbWVudCAhPT0gZWxlbWVudCA/IGhhbmRsZUVsZW1lbnQucGFyZW50RWxlbWVudCA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVFbGVtZW50IHx8IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBjdXJyZW50bHkgYm91bmQgZHJhZyBzY3JvbGwgaGFuZGxlcnMgZnJvbSBhbGwgc2Nyb2xsYWJsZSBhbmNlc3RvclxuICAgKiBlbGVtZW50cyBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IGFuZCB0aGUgZHJhZyBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc29sdmVTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHByZWRpY2F0ZSA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YTtcblxuICAgIC8vIElmIHRoZSBtb3ZlZCBkaXN0YW5jZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHRocmVzaG9sZCBkaXN0YW5jZSBvciB0aGVyZSBpc1xuICAgIC8vIHNvbWUgZGVsYXkgbGVmdCwgaWdub3JlIHRoaXMgcHJlZGljYXRlIGN5Y2xlLlxuICAgIGlmIChldmVudC5kaXN0YW5jZSA8IHByZWRpY2F0ZS5kaXN0YW5jZSB8fCBwcmVkaWNhdGUuZGVsYXkpIHJldHVybjtcblxuICAgIC8vIEdldCBoYW5kbGUgcmVjdCBkYXRhLlxuICAgIHZhciBoYW5kbGVSZWN0ID0gcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGhhbmRsZUxlZnQgPSBoYW5kbGVSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IDApO1xuICAgIHZhciBoYW5kbGVUb3AgPSBoYW5kbGVSZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgMCk7XG4gICAgdmFyIGhhbmRsZVdpZHRoID0gaGFuZGxlUmVjdC53aWR0aDtcbiAgICB2YXIgaGFuZGxlSGVpZ2h0ID0gaGFuZGxlUmVjdC5oZWlnaHQ7XG5cbiAgICAvLyBSZXNldCBwcmVkaWNhdGUgZGF0YS5cbiAgICB0aGlzLl9yZXNldFN0YXJ0UHJlZGljYXRlKCk7XG5cbiAgICAvLyBJZiB0aGUgY3Vyc29yIGlzIHN0aWxsIHdpdGhpbiB0aGUgaGFuZGxlIGxldCdzIHN0YXJ0IHRoZSBkcmFnLlxuICAgIHJldHVybiAoXG4gICAgICBoYW5kbGVXaWR0aCAmJlxuICAgICAgaGFuZGxlSGVpZ2h0ICYmXG4gICAgICBldmVudC5wYWdlWCA+PSBoYW5kbGVMZWZ0ICYmXG4gICAgICBldmVudC5wYWdlWCA8IGhhbmRsZUxlZnQgKyBoYW5kbGVXaWR0aCAmJlxuICAgICAgZXZlbnQucGFnZVkgPj0gaGFuZGxlVG9wICYmXG4gICAgICBldmVudC5wYWdlWSA8IGhhbmRsZVRvcCArIGhhbmRsZUhlaWdodFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZvcmNlZnVsbHkgcmVzb2x2ZSBkcmFnIHN0YXJ0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZm9yY2VSZXNvbHZlU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5faXNEZXN0cm95ZWQgJiYgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcbiAgICAgIHRoaXMuX29uU3RhcnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmluYWxpemUgc3RhcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9maW5pc2hTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9pdGVtLl9lbGVtZW50O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIGNsaWNrICh2ZXJ5IHN1YmplY3RpdmUgaGV1cmlzdGljcykuXG4gICAgdmFyIGlzQ2xpY2sgPSBNYXRoLmFicyhldmVudC5kZWx0YVgpIDwgMiAmJiBNYXRoLmFicyhldmVudC5kZWx0YVkpIDwgMiAmJiBldmVudC5kZWx0YVRpbWUgPCAyMDA7XG5cbiAgICAvLyBSZXNldCBwcmVkaWNhdGUuXG4gICAgdGhpcy5fcmVzZXRTdGFydFByZWRpY2F0ZSgpO1xuXG4gICAgLy8gSWYgdGhlIGdlc3R1cmUgY2FuIGJlIGludGVycHJldGVkIGFzIGNsaWNrIGxldCdzIHRyeSB0byBvcGVuIHRoZSBlbGVtZW50J3NcbiAgICAvLyBocmVmIHVybCAoaWYgaXQgaXMgYW4gYW5jaG9yIGVsZW1lbnQpLlxuICAgIGlmIChpc0NsaWNrKSBvcGVuQW5jaG9ySHJlZihlbGVtZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzZXQgZHJhZyBzb3J0IGhldXJpc3RpY3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc2V0SGV1cmlzdGljcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgdGhpcy5faFgxID0gdGhpcy5faFgyID0gZXZlbnQuY2xpZW50WDtcbiAgICB0aGlzLl9oWTEgPSB0aGlzLl9oWTIgPSBldmVudC5jbGllbnRZO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSdW4gaGV1cmlzdGljcyBhbmQgcmV0dXJuIHRydWUgaWYgb3ZlcmxhcCBjaGVjayBjYW4gYmUgcGVyZm9ybWVkLCBhbmQgZmFsc2VcbiAgICogaWYgaXQgY2FuIG5vdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2NoZWNrSGV1cmlzdGljcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnU29ydEhldXJpc3RpY3M7XG4gICAgdmFyIG1pbkRpc3QgPSBzZXR0aW5ncy5taW5EcmFnRGlzdGFuY2U7XG5cbiAgICAvLyBTa2lwIGhldXJpc3RpY3MgaWYgbm90IG5lZWRlZC5cbiAgICBpZiAobWluRGlzdCA8PSAwKSB7XG4gICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciB4ID0gZXZlbnQuY2xpZW50WDtcbiAgICB2YXIgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgdmFyIGRpZmZYID0geCAtIHRoaXMuX2hYMjtcbiAgICB2YXIgZGlmZlkgPSB5IC0gdGhpcy5faFkyO1xuXG4gICAgLy8gSWYgd2UgY2FuJ3QgZG8gcHJvcGVyIGJvdW5jZSBiYWNrIGNoZWNrIG1ha2Ugc3VyZSB0aGF0IHRoZSBibG9ja2VkIGluZGV4XG4gICAgLy8gaXMgbm90IHNldC5cbiAgICB2YXIgY2FuQ2hlY2tCb3VuY2VCYWNrID0gbWluRGlzdCA+IDMgJiYgc2V0dGluZ3MubWluQm91bmNlQmFja0FuZ2xlID4gMDtcbiAgICBpZiAoIWNhbkNoZWNrQm91bmNlQmFjaykge1xuICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IG1pbkRpc3QgfHwgTWF0aC5hYnMoZGlmZlkpID4gbWluRGlzdCkge1xuICAgICAgLy8gUmVzZXQgYmxvY2tlZCBpbmRleCBpZiBhbmdsZSBjaGFuZ2VkIGVub3VnaC4gVGhpcyBjaGVjayByZXF1aXJlcyBhXG4gICAgICAvLyBtaW5pbXVtIHZhbHVlIG9mIDMgZm9yIG1pbkRyYWdEaXN0YW5jZSB0byBmdW5jdGlvbiBwcm9wZXJseS5cbiAgICAgIGlmIChjYW5DaGVja0JvdW5jZUJhY2spIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkaWZmWCwgZGlmZlkpO1xuICAgICAgICB2YXIgcHJldkFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLl9oWDIgLSB0aGlzLl9oWDEsIHRoaXMuX2hZMiAtIHRoaXMuX2hZMSk7XG4gICAgICAgIHZhciBkZWx0YUFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLnNpbihhbmdsZSAtIHByZXZBbmdsZSksIE1hdGguY29zKGFuZ2xlIC0gcHJldkFuZ2xlKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhkZWx0YUFuZ2xlKSA+IHNldHRpbmdzLm1pbkJvdW5jZUJhY2tBbmdsZSkge1xuICAgICAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBwb2ludHMuXG4gICAgICB0aGlzLl9oWDEgPSB0aGlzLl9oWDI7XG4gICAgICB0aGlzLl9oWTEgPSB0aGlzLl9oWTI7XG4gICAgICB0aGlzLl9oWDIgPSB4O1xuICAgICAgdGhpcy5faFkyID0geTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCBmb3IgZGVmYXVsdCBkcmFnIHN0YXJ0IHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9yZXNldFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByZWRpY2F0ZSA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YTtcbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICBpZiAocHJlZGljYXRlLmRlbGF5VGltZXIpIHtcbiAgICAgICAgcHJlZGljYXRlLmRlbGF5VGltZXIgPSB3aW5kb3cuY2xlYXJUaW1lb3V0KHByZWRpY2F0ZS5kZWxheVRpbWVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayAoZHVyaW5nIGRyYWcpIGlmIGFuIGl0ZW0gaXMgb3ZlcmxhcHBpbmcgb3RoZXIgaXRlbXMgYW5kIGJhc2VkIG9uXG4gICAqIHRoZSBjb25maWd1cmF0aW9uIGxheW91dCB0aGUgaXRlbXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fY2hlY2tPdmVybGFwID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgY3VycmVudEdyaWQ7XG4gICAgdmFyIGN1cnJlbnRJbmRleDtcbiAgICB2YXIgdGFyZ2V0R3JpZDtcbiAgICB2YXIgdGFyZ2V0SW5kZXg7XG4gICAgdmFyIHNvcnRBY3Rpb247XG4gICAgdmFyIGlzTWlncmF0aW9uO1xuXG4gICAgLy8gR2V0IG92ZXJsYXAgY2hlY2sgcmVzdWx0LlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTb3J0UHJlZGljYXRlKSkge1xuICAgICAgcmVzdWx0ID0gc2V0dGluZ3MuZHJhZ1NvcnRQcmVkaWNhdGUoaXRlbSwgdGhpcy5fZHJhZ0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gSXRlbURyYWcuZGVmYXVsdFNvcnRQcmVkaWNhdGUoaXRlbSwgc2V0dGluZ3MuZHJhZ1NvcnRQcmVkaWNhdGUpO1xuICAgIH1cblxuICAgIC8vIExldCdzIG1ha2Ugc3VyZSB0aGUgcmVzdWx0IG9iamVjdCBoYXMgYSB2YWxpZCBpbmRleCBiZWZvcmUgZ29pbmcgZnVydGhlci5cbiAgICBpZiAoIXJlc3VsdCB8fCB0eXBlb2YgcmVzdWx0LmluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuO1xuXG4gICAgY3VycmVudEdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB0YXJnZXRHcmlkID0gcmVzdWx0LmdyaWQgfHwgY3VycmVudEdyaWQ7XG4gICAgaXNNaWdyYXRpb24gPSBjdXJyZW50R3JpZCAhPT0gdGFyZ2V0R3JpZDtcbiAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50R3JpZC5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB0YXJnZXRJbmRleCA9IG5vcm1hbGl6ZUFycmF5SW5kZXgodGFyZ2V0R3JpZC5faXRlbXMsIHJlc3VsdC5pbmRleCwgaXNNaWdyYXRpb24pO1xuICAgIHNvcnRBY3Rpb24gPSByZXN1bHQuYWN0aW9uID09PSBhY3Rpb25Td2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG5cbiAgICAvLyBQcmV2ZW50IHBvc2l0aW9uIGJvdW5jZS5cbiAgICBpZiAoIWlzTWlncmF0aW9uICYmIHRhcmdldEluZGV4ID09PSB0aGlzLl9oQmxvY2tlZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gd2FzIG1vdmVkIHdpdGhpbiBpdCdzIGN1cnJlbnQgZ3JpZC5cbiAgICBpZiAoIWlzTWlncmF0aW9uKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHRhcmdldCBpbmRleCBpcyBub3QgdGhlIGN1cnJlbnQgaW5kZXguXG4gICAgICBpZiAoY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gY3VycmVudEluZGV4O1xuXG4gICAgICAgIC8vIERvIHRoZSBzb3J0LlxuICAgICAgICAoc29ydEFjdGlvbiA9PT0gYWN0aW9uU3dhcCA/IGFycmF5U3dhcCA6IGFycmF5TW92ZSkoXG4gICAgICAgICAgY3VycmVudEdyaWQuX2l0ZW1zLFxuICAgICAgICAgIGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0YXJnZXRJbmRleFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEVtaXQgbW92ZSBldmVudC5cbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRNb3ZlKSkge1xuICAgICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50TW92ZSwge1xuICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXgsXG4gICAgICAgICAgICBhY3Rpb246IHNvcnRBY3Rpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExheW91dCB0aGUgZ3JpZC5cbiAgICAgICAgY3VycmVudEdyaWQubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gd2FzIG1vdmVkIHRvIGFub3RoZXIgZ3JpZC5cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuXG4gICAgICAvLyBFbWl0IGJlZm9yZVNlbmQgZXZlbnQuXG4gICAgICBpZiAoY3VycmVudEdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVNlbmQpKSB7XG4gICAgICAgIGN1cnJlbnRHcmlkLl9lbWl0KGV2ZW50QmVmb3JlU2VuZCwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBiZWZvcmVSZWNlaXZlIGV2ZW50LlxuICAgICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVJlY2VpdmUpKSB7XG4gICAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRCZWZvcmVSZWNlaXZlLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgaXRlbSdzIGdyaWQgaWQgcmVmZXJlbmNlLlxuICAgICAgaXRlbS5fZ3JpZElkID0gdGFyZ2V0R3JpZC5faWQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBkcmFnIGluc3RhbmNlJ3MgbWlncmF0aW5nIGluZGljYXRvci5cbiAgICAgIHRoaXMuX2lzTWlncmF0aW5nID0gaXRlbS5fZ3JpZElkICE9PSB0aGlzLl9ncmlkSWQ7XG5cbiAgICAgIC8vIE1vdmUgaXRlbSBpbnN0YW5jZSBmcm9tIGN1cnJlbnQgZ3JpZCB0byB0YXJnZXQgZ3JpZC5cbiAgICAgIGN1cnJlbnRHcmlkLl9pdGVtcy5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcbiAgICAgIGFycmF5SW5zZXJ0KHRhcmdldEdyaWQuX2l0ZW1zLCBpdGVtLCB0YXJnZXRJbmRleCk7XG5cbiAgICAgIC8vIFNldCBzb3J0IGRhdGEgYXMgbnVsbCwgd2hpY2ggaXMgYW4gaW5kaWNhdG9yIGZvciB0aGUgaXRlbSBjb21wYXJpc29uXG4gICAgICAvLyBmdW5jdGlvbiB0aGF0IHRoZSBzb3J0IGRhdGEgb2YgdGhpcyBzcGVjaWZpYyBpdGVtIHNob3VsZCBiZSBmZXRjaGVkXG4gICAgICAvLyBsYXppbHkuXG4gICAgICBpdGVtLl9zb3J0RGF0YSA9IG51bGw7XG5cbiAgICAgIC8vIEVtaXQgc2VuZCBldmVudC5cbiAgICAgIGlmIChjdXJyZW50R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50U2VuZCkpIHtcbiAgICAgICAgY3VycmVudEdyaWQuX2VtaXQoZXZlbnRTZW5kLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IHJlY2VpdmUgZXZlbnQuXG4gICAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50UmVjZWl2ZSkpIHtcbiAgICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudFJlY2VpdmUsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExheW91dCBib3RoIGdyaWRzLlxuICAgICAgY3VycmVudEdyaWQubGF5b3V0KCk7XG4gICAgICB0YXJnZXRHcmlkLmxheW91dCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSWYgaXRlbSBpcyBkcmFnZ2VkIGludG8gYW5vdGhlciBncmlkLCBmaW5pc2ggdGhlIG1pZ3JhdGlvbiBwcm9jZXNzXG4gICAqIGdyYWNlZnVsbHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZmluaXNoTWlncmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGlzQWN0aXZlID0gaXRlbS5faXNBY3RpdmU7XG4gICAgdmFyIHRhcmdldEdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgdGFyZ2V0R3JpZEVsZW1lbnQgPSB0YXJnZXRHcmlkLl9lbGVtZW50O1xuICAgIHZhciB0YXJnZXRTZXR0aW5ncyA9IHRhcmdldEdyaWQuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRDb250YWluZXIgPSB0YXJnZXRTZXR0aW5ncy5kcmFnQ29udGFpbmVyIHx8IHRhcmdldEdyaWRFbGVtZW50O1xuICAgIHZhciBjdXJyZW50U2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBjdXJyZW50Q29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIHZhciB0cmFuc2xhdGU7XG4gICAgdmFyIG9mZnNldERpZmY7XG5cbiAgICAvLyBEZXN0cm95IGN1cnJlbnQgZHJhZy4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gc2V0IHRoZSBtaWdyYXRpbmcgZmxhZyB0b1xuICAgIC8vIGZhbHNlIGZpcnN0LCBiZWNhdXNlIG90aGVyd2lzZSB3ZSBjcmVhdGUgYW4gaW5maW5pdGUgbG9vcCBiZXR3ZWVuIHRoaXNcbiAgICAvLyBhbmQgdGhlIGRyYWcuc3RvcCgpIG1ldGhvZC5cbiAgICB0aGlzLl9pc01pZ3JhdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIGN1cnJlbnQgY2xhc3NuYW1lcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjdXJyZW50U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjdXJyZW50U2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3VycmVudFNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBBZGQgbmV3IGNsYXNzbmFtZXMuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgdGFyZ2V0U2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCBpc0FjdGl2ZSA/IHRhcmdldFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiB0YXJnZXRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gTW92ZSB0aGUgaXRlbSBpbnNpZGUgdGhlIHRhcmdldCBjb250YWluZXIgaWYgaXQncyBkaWZmZXJlbnQgdGhhbiB0aGVcbiAgICAvLyBjdXJyZW50IGNvbnRhaW5lci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZihjdXJyZW50Q29udGFpbmVyLCB0YXJnZXRDb250YWluZXIsIHRydWUpO1xuICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgdHJhbnNsYXRlLnggLT0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdHJhbnNsYXRlLnkgLT0gb2Zmc2V0RGlmZi50b3A7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGl0ZW0ncyBjYWNoZWQgZGltZW5zaW9ucyBhbmQgc29ydCBkYXRhLlxuICAgIGl0ZW0uX3JlZnJlc2hEaW1lbnNpb25zKCk7XG4gICAgaXRlbS5fcmVmcmVzaFNvcnREYXRhKCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIG9mZnNldCBkaWZmZXJlbmNlIGJldHdlZW4gdGFyZ2V0J3MgZHJhZyBjb250YWluZXIgKGlmIGFueSlcbiAgICAvLyBhbmQgYWN0dWFsIGdyaWQgY29udGFpbmVyIGVsZW1lbnQuIFdlIHNhdmUgaXQgbGF0ZXIgZm9yIHRoZSByZWxlYXNlXG4gICAgLy8gcHJvY2Vzcy5cbiAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZih0YXJnZXRDb250YWluZXIsIHRhcmdldEdyaWRFbGVtZW50LCB0cnVlKTtcbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWCA9IG9mZnNldERpZmYubGVmdDtcbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWSA9IG9mZnNldERpZmYudG9wO1xuXG4gICAgLy8gUmVjcmVhdGUgaXRlbSdzIGRyYWcgaGFuZGxlci5cbiAgICBpdGVtLl9kcmFnID0gdGFyZ2V0U2V0dGluZ3MuZHJhZ0VuYWJsZWQgPyBuZXcgSXRlbURyYWcoaXRlbSkgOiBudWxsO1xuXG4gICAgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSBlbGVtZW50IGlmIGl0IHdhcyBtb3ZlZCBmcm9tIGEgY29udGFpbmVyXG4gICAgLy8gdG8gYW5vdGhlci5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVyICE9PSBjdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZS54LCB0cmFuc2xhdGUueSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNoaWxkIGVsZW1lbnQncyBzdHlsZXMgdG8gcmVmbGVjdCB0aGUgY3VycmVudCB2aXNpYmlsaXR5IHN0YXRlLlxuICAgIGl0ZW0uX2NoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIGlzQWN0aXZlID8gdGFyZ2V0U2V0dGluZ3MudmlzaWJsZVN0eWxlcyA6IHRhcmdldFNldHRpbmdzLmhpZGRlblN0eWxlcyk7XG5cbiAgICAvLyBTdGFydCB0aGUgcmVsZWFzZS5cbiAgICByZWxlYXNlLnN0YXJ0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgcHJlLXN0YXJ0IGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3ByZVN0YXJ0Q2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIExldCdzIGFjdGl2YXRlIGRyYWcgc3RhcnQgcHJlZGljYXRlIHN0YXRlLlxuICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZUluYWN0aXZlKSB7XG4gICAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVQZW5kaW5nO1xuICAgIH1cblxuICAgIC8vIElmIHByZWRpY2F0ZSBpcyBwZW5kaW5nIHRyeSB0byByZXNvbHZlIGl0LlxuICAgIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVBlbmRpbmcpIHtcbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID0gdGhpcy5fc3RhcnRQcmVkaWNhdGUodGhpcy5faXRlbSwgZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVJlc29sdmVkO1xuICAgICAgICB0aGlzLl9vblN0YXJ0KGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVJlamVjdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBpZiBwcmVkaWNhdGUgaXMgcmVzb2x2ZWQgYW5kIGRyYWcgaXMgYWN0aXZlLCBtb3ZlIHRoZSBpdGVtLlxuICAgIGVsc2UgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQgJiYgdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuX29uTW92ZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHByZS1lbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlRW5kQ2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBzdGFydCBwcmVkaWNhdGUgd2FzIHJlc29sdmVkIGR1cmluZyBkcmFnLlxuICAgIHZhciBpc1Jlc29sdmVkID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZDtcblxuICAgIC8vIERvIGZpbmFsIHByZWRpY2F0ZSBjaGVjayB0byBhbGxvdyB1c2VyIHRvIHVuYmluZCBzdHVmZiBmb3IgdGhlIGN1cnJlbnRcbiAgICAvLyBkcmFnIHByb2NlZHVyZSB3aXRoaW4gdGhlIHByZWRpY2F0ZSBjYWxsYmFjay4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzXG4gICAgLy8gY2hlY2sgd2lsbCBoYXZlIG5vIGVmZmVjdCB0byB0aGUgc3RhdGUgb2YgdGhlIHByZWRpY2F0ZS5cbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZSh0aGlzLl9pdGVtLCBldmVudCk7XG5cbiAgICAvLyBSZXNldCBzdGFydCBwcmVkaWNhdGUgc3RhdGUuXG4gICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlSW5hY3RpdmU7XG5cbiAgICAvLyBJZiBwcmVkaWNhdGUgaXMgcmVzb2x2ZWQgYW5kIGRyYWdnaW5nIGlzIGFjdGl2ZSwgY2FsbCB0aGUgZW5kIGhhbmRsZXIuXG4gICAgaWYgKGlzUmVzb2x2ZWQgJiYgdGhpcy5faXNBY3RpdmUpIHRoaXMuX29uRW5kKGV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBzdGFydCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vblN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIGRvbid0IHN0YXJ0IHRoZSBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgZHJhZ0NvbnRhaW5lciA9IHNldHRpbmdzLmRyYWdDb250YWluZXIgfHwgZ3JpZENvbnRhaW5lcjtcbiAgICB2YXIgY29udGFpbmluZ0Jsb2NrID0gZ2V0Q29udGFpbmluZ0Jsb2NrKGRyYWdDb250YWluZXIsIHRydWUpO1xuICAgIHZhciB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgdmFyIGN1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdmFyIGN1cnJlbnRUb3AgPSB0cmFuc2xhdGUueTtcbiAgICB2YXIgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBoYXNEcmFnQ29udGFpbmVyID0gZHJhZ0NvbnRhaW5lciAhPT0gZ3JpZENvbnRhaW5lcjtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcblxuICAgIC8vIFJlc2V0IGhldXJpc3RpY3MgZGF0YS5cbiAgICB0aGlzLl9yZXNldEhldXJpc3RpY3MoZXZlbnQpO1xuXG4gICAgLy8gSWYgZ3JpZCBjb250YWluZXIgaXMgbm90IHRoZSBkcmFnIGNvbnRhaW5lciwgd2UgbmVlZCB0byBjYWxjdWxhdGUgdGhlXG4gICAgLy8gb2Zmc2V0IGRpZmZlcmVuY2UgYmV0d2VlbiBncmlkIGNvbnRhaW5lciBhbmQgZHJhZyBjb250YWluZXIncyBjb250YWluaW5nXG4gICAgLy8gZWxlbWVudC5cbiAgICBpZiAoaGFzRHJhZ0NvbnRhaW5lcikge1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYoY29udGFpbmluZ0Jsb2NrLCBncmlkQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGN1cnJlbnQgcG9zaXRpb25pbmcgYW5pbWF0aW9uLlxuICAgIGlmIChpdGVtLmlzUG9zaXRpb25pbmcoKSkge1xuICAgICAgaXRlbS5fbGF5b3V0LnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBjdXJyZW50IG1pZ3JhdGlvbiBhbmltYXRpb24uXG4gICAgaWYgKG1pZ3JhdGUuX2lzQWN0aXZlKSB7XG4gICAgICBjdXJyZW50TGVmdCAtPSBtaWdyYXRlLl9jb250YWluZXJEaWZmWDtcbiAgICAgIGN1cnJlbnRUb3AgLT0gbWlncmF0ZS5fY29udGFpbmVyRGlmZlk7XG4gICAgICBtaWdyYXRlLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhjdXJyZW50TGVmdCwgY3VycmVudFRvcCkgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBiZWluZyByZWxlYXNlZCByZXNldCByZWxlYXNlIGRhdGEuXG4gICAgaWYgKGl0ZW0uaXNSZWxlYXNpbmcoKSkgcmVsZWFzZS5fcmVzZXQoKTtcblxuICAgIC8vIFNldHVwIGRyYWcgZGF0YS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZHJhZ0NvbnRhaW5lcjtcbiAgICB0aGlzLl9jb250YWluaW5nQmxvY2sgPSBjb250YWluaW5nQmxvY2s7XG4gICAgdGhpcy5fZWxlbWVudENsaWVudFggPSBlbGVtZW50UmVjdC5sZWZ0O1xuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRZID0gZWxlbWVudFJlY3QudG9wO1xuICAgIHRoaXMuX2xlZnQgPSB0aGlzLl9ncmlkWCA9IGN1cnJlbnRMZWZ0O1xuICAgIHRoaXMuX3RvcCA9IHRoaXMuX2dyaWRZID0gY3VycmVudFRvcDtcblxuICAgIC8vIENyZWF0ZSBwbGFjZWhvbGRlciAoaWYgbmVjZXNzYXJ5KS5cbiAgICBpZiAoc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmVuYWJsZWQpIHtcbiAgICAgIGl0ZW0uX2RyYWdQbGFjZWhvbGRlci5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGRyYWdJbml0IGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnSW5pdCwgaXRlbSwgZXZlbnQpO1xuXG4gICAgLy8gSWYgYSBzcGVjaWZpYyBkcmFnIGNvbnRhaW5lciBpcyBzZXQgYW5kIGl0IGlzIGRpZmZlcmVudCBmcm9tIHRoZVxuICAgIC8vIGdyaWQncyBjb250YWluZXIgZWxlbWVudCB3ZSBuZWVkIHRvIGNhc3Qgc29tZSBleHRyYSBzcGVsbHMuXG4gICAgaWYgKGhhc0RyYWdDb250YWluZXIpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBjb250YWluZXIgb2Zmc2V0IGRpZmZzIHRvIGRyYWcgZGF0YS5cbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcblxuICAgICAgLy8gSWYgdGhlIGRyYWdnZWQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHRoZSBkcmFnIGNvbnRhaW5lciBhbGwgd2UgbmVlZCB0b1xuICAgICAgLy8gZG8gaXMgc2V0dXAgdGhlIHJlbGF0aXZlIGRyYWcgcG9zaXRpb24gZGF0YS5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgPT09IGRyYWdDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fZ3JpZFggPSBjdXJyZW50TGVmdCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgICB0aGlzLl9ncmlkWSA9IGN1cnJlbnRUb3AgLSB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gYXBwZW5kIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgY29ycmVjdCBjb250YWluZXIsXG4gICAgICAvLyBzZXR1cCB0aGUgYWN0dWFsIGRyYWcgcG9zaXRpb24gZGF0YSBhbmQgYWRqdXN0IHRoZSBlbGVtZW50J3MgdHJhbnNsYXRlXG4gICAgICAvLyB2YWx1ZXMgdG8gYWNjb3VudCBmb3IgdGhlIERPTSBwb3NpdGlvbiBzaGlmdC5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9sZWZ0ID0gY3VycmVudExlZnQgKyB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgICAgdGhpcy5fdG9wID0gY3VycmVudFRvcCArIHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgICBkcmFnQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2xlZnQsIHRoaXMuX3RvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGRyYWcgY2xhc3MgYW5kIGJpbmQgc2Nyb2xsZXJzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1EcmFnZ2luZ0NsYXNzKTtcbiAgICB0aGlzLl9iaW5kU2Nyb2xsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBFbWl0IGRyYWdTdGFydCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ1N0YXJ0LCBpdGVtLCBldmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgbW92ZSBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vbk1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBheGlzID0gc2V0dGluZ3MuZHJhZ0F4aXM7XG5cbiAgICAvLyBVcGRhdGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneScpIHtcbiAgICAgIHZhciB4RGlmZiA9IGV2ZW50LmNsaWVudFggLSB0aGlzLl9kcmFnRXZlbnQuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xlZnQgKz0geERpZmY7XG4gICAgICB0aGlzLl9ncmlkWCArPSB4RGlmZjtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGllbnRYICs9IHhEaWZmO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB2ZXJ0aWNhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneCcpIHtcbiAgICAgIHZhciB5RGlmZiA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLl9kcmFnRXZlbnQuY2xpZW50WTtcbiAgICAgIHRoaXMuX3RvcCArPSB5RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRZICs9IHlEaWZmO1xuICAgICAgdGhpcy5fZWxlbWVudENsaWVudFkgKz0geURpZmY7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGV2ZW50IGRhdGEuXG4gICAgdGhpcy5fZHJhZ0V2ZW50ID0gZXZlbnQ7XG5cbiAgICAvLyBEbyBtb3ZlIHByZXBhcmUvYXBwbHkgaGFuZGxpbmcgaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRNb3ZlVGljayhpdGVtLl9pZCwgdGhpcy5fcHJlcGFyZU1vdmUsIHRoaXMuX2FwcGx5TW92ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZHJhZ2dlZCBpdGVtIGZvciBtb3ZpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlcGFyZU1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0ZW0gaXMgbm90IGFjdGl2ZS5cbiAgICBpZiAoIXRoaXMuX2l0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBJZiBkcmFnIHNvcnQgaXMgZW5hYmxlZCAtPiBjaGVjayBvdmVybGFwLlxuICAgIGlmICh0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdTb3J0KSB7XG4gICAgICBpZiAodGhpcy5fY2hlY2tIZXVyaXN0aWNzKHRoaXMuX2RyYWdFdmVudCkpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGx5IG1vdmVtZW50IHRvIGRyYWdnZWQgaXRlbS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9hcHBseU1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0ZW0gaXMgbm90IGFjdGl2ZS5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGUgZWxlbWVudCdzIHRyYW5zbGF0ZVgvWSB2YWx1ZXMuXG4gICAgaXRlbS5fZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9sZWZ0LCB0aGlzLl90b3ApO1xuXG4gICAgLy8gRW1pdCBkcmFnTW92ZSBldmVudC5cbiAgICB0aGlzLl9nZXRHcmlkKCkuX2VtaXQoZXZlbnREcmFnTW92ZSwgaXRlbSwgdGhpcy5fZHJhZ0V2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBzY3JvbGwgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9vblNjcm9sbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCByZXNldCBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBsYXN0IHNjcm9sbCBldmVudC5cbiAgICB0aGlzLl9zY3JvbGxFdmVudCA9IGV2ZW50O1xuXG4gICAgLy8gRG8gc2Nyb2xsIHByZXBhcmUvYXBwbHkgaGFuZGxpbmcgaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRTY3JvbGxUaWNrKGl0ZW0uX2lkLCB0aGlzLl9wcmVwYXJlU2Nyb2xsLCB0aGlzLl9hcHBseVNjcm9sbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZHJhZ2dlZCBpdGVtIGZvciBzY3JvbGxpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlcGFyZVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSBkbyBub3RoaW5nLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2dldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgYXhpcyA9IHNldHRpbmdzLmRyYWdBeGlzO1xuICAgIHZhciBncmlkQ29udGFpbmVyID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcblxuICAgIC8vIENhbGN1bGF0ZSBlbGVtZW50J3MgcmVjdCBhbmQgeC95IGRpZmYuXG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB4RGlmZiA9IHRoaXMuX2VsZW1lbnRDbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgIHZhciB5RGlmZiA9IHRoaXMuX2VsZW1lbnRDbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICAvLyBVcGRhdGUgY29udGFpbmVyIGRpZmYuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gZ3JpZENvbnRhaW5lcikge1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYodGhpcy5fY29udGFpbmluZ0Jsb2NrLCBncmlkQ29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSBvZmZzZXREaWZmLnRvcDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneScpIHtcbiAgICAgIHRoaXMuX2xlZnQgKz0geERpZmY7XG4gICAgICB0aGlzLl9ncmlkWCA9IHRoaXMuX2xlZnQgLSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdmVydGljYWwgcG9zaXRpb24gZGF0YS5cbiAgICBpZiAoYXhpcyAhPT0gJ3gnKSB7XG4gICAgICB0aGlzLl90b3AgKz0geURpZmY7XG4gICAgICB0aGlzLl9ncmlkWSA9IHRoaXMuX3RvcCAtIHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgIH1cblxuICAgIC8vIE92ZXJsYXAgaGFuZGxpbmcuXG4gICAgaWYgKHNldHRpbmdzLmRyYWdTb3J0KSB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBseSBzY3JvbGwgdG8gZHJhZ2dlZCBpdGVtLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2FwcGx5U2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlIGRvIG5vdGhpbmcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVXBkYXRlIGVsZW1lbnQncyB0cmFuc2xhdGVYL1kgdmFsdWVzLlxuICAgIGl0ZW0uX2VsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fbGVmdCwgdGhpcy5fdG9wKTtcblxuICAgIC8vIEVtaXQgZHJhZ1Njcm9sbCBldmVudC5cbiAgICB0aGlzLl9nZXRHcmlkKCkuX2VtaXQoZXZlbnREcmFnU2Nyb2xsLCBpdGVtLCB0aGlzLl9zY3JvbGxFdmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgcmVzZXQgZHJhZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgcXVldWVkIG1vdmUgYW5kIHNjcm9sbCB0aWNrcy5cbiAgICBjYW5jZWxNb3ZlVGljayhpdGVtLl9pZCk7XG4gICAgY2FuY2VsU2Nyb2xsVGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBGaW5pc2ggY3VycmVudGx5IHF1ZXVlZCBvdmVybGFwIGNoZWNrLlxuICAgIHNldHRpbmdzLmRyYWdTb3J0ICYmIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCdmaW5pc2gnKTtcblxuICAgIC8vIFJlbW92ZSBzY3JvbGwgbGlzdGVuZXJzLlxuICAgIHRoaXMuX3VuYmluZFNjcm9sbExpc3RlbmVycygpO1xuXG4gICAgLy8gU2V0dXAgcmVsZWFzZSBkYXRhLlxuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZYID0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlkgPSB0aGlzLl9jb250YWluZXJEaWZmWTtcblxuICAgIC8vIFJlc2V0IGRyYWcgZGF0YS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gUmVtb3ZlIGRyYWcgY2xhc3MgbmFtZSBmcm9tIGVsZW1lbnQuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbURyYWdnaW5nQ2xhc3MpO1xuXG4gICAgLy8gRW1pdCBkcmFnRW5kIGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnRW5kLCBpdGVtLCBldmVudCk7XG5cbiAgICAvLyBGaW5pc2ggdXAgdGhlIG1pZ3JhdGlvbiBwcm9jZXNzIG9yIHN0YXJ0IHRoZSByZWxlYXNlIHByb2Nlc3MuXG4gICAgdGhpcy5faXNNaWdyYXRpbmcgPyB0aGlzLl9maW5pc2hNaWdyYXRpb24oKSA6IHJlbGVhc2Uuc3RhcnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBoZWxwZXJzXG4gICAqICoqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGhvdyBtYW55IHBlcmNlbnQgdGhlIGludGVyc2VjdGlvbiBhcmVhIG9mIHR3byByZWN0YW5nbGVzIGlzIGZyb21cbiAgICogdGhlIG1heGltdW0gcG90ZW50aWFsIGludGVyc2VjdGlvbiBhcmVhIGJldHdlZW4gdGhlIHJlY3RhbmdsZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqICAgLSBBIG51bWJlciBiZXR3ZWVuIDAtMTAwLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UmVjdE92ZXJsYXBTY29yZShhLCBiKSB7XG4gICAgLy8gUmV0dXJuIDAgaW1tZWRpYXRlbHkgaWYgdGhlIHJlY3RhbmdsZXMgZG8gbm90IG92ZXJsYXAuXG4gICAgaWYgKFxuICAgICAgYS5sZWZ0ICsgYS53aWR0aCA8PSBiLmxlZnQgfHxcbiAgICAgIGIubGVmdCArIGIud2lkdGggPD0gYS5sZWZ0IHx8XG4gICAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wIHx8XG4gICAgICBiLnRvcCArIGIuaGVpZ2h0IDw9IGEudG9wXG4gICAgKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIGFyZWEncyB3aWR0aCwgaGVpZ2h0LCBtYXggaGVpZ2h0IGFuZCBtYXggd2lkdGguXG4gICAgdmFyIHdpZHRoID0gTWF0aC5taW4oYS5sZWZ0ICsgYS53aWR0aCwgYi5sZWZ0ICsgYi53aWR0aCkgLSBNYXRoLm1heChhLmxlZnQsIGIubGVmdCk7XG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWluKGEudG9wICsgYS5oZWlnaHQsIGIudG9wICsgYi5oZWlnaHQpIC0gTWF0aC5tYXgoYS50b3AsIGIudG9wKTtcbiAgICB2YXIgbWF4V2lkdGggPSBNYXRoLm1pbihhLndpZHRoLCBiLndpZHRoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5taW4oYS5oZWlnaHQsIGIuaGVpZ2h0KTtcblxuICAgIHJldHVybiAoKHdpZHRoICogaGVpZ2h0KSAvIChtYXhXaWR0aCAqIG1heEhlaWdodCkpICogMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYW4gYW5jaG9yIGVsZW1lbnQgYW5kIG9wZW4gdGhlIGhyZWYgdXJsIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBvcGVuQW5jaG9ySHJlZihlbGVtZW50KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIGFuY2hvciBlbGVtZW50LlxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2EnKSByZXR1cm47XG5cbiAgICAvLyBHZXQgaHJlZiBhbmQgbWFrZSBzdXJlIGl0IGV4aXN0cy5cbiAgICB2YXIgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgaWYgKCFocmVmKSByZXR1cm47XG5cbiAgICAvLyBGaW5hbGx5IGxldCdzIG5hdmlnYXRlIHRvIHRoZSBsaW5rIGhyZWYuXG4gICAgdmFyIHRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKTtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykge1xuICAgICAgd2luZG93Lm9wZW4oaHJlZiwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHBsYWNlaG9sZGVyLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtRHJhZ1BsYWNlaG9sZGVyKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9hbmltYXRlID0gbmV3IEl0ZW1BbmltYXRlKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gJyc7XG4gICAgdGhpcy5fZGlkTWlncmF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IDA7XG4gICAgdGhpcy5fbmV4dExlZnQgPSAwO1xuICAgIHRoaXMuX25leHRUb3AgPSAwO1xuXG4gICAgLy8gQmluZCBhbmltYXRpb24gaGFuZGxlcnMuXG4gICAgdGhpcy5fc2V0dXBBbmltYXRpb24gPSB0aGlzLl9zZXR1cEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uID0gdGhpcy5fc3RhcnRBbmltYXRpb24uYmluZCh0aGlzKTtcblxuICAgIC8vIEJpbmQgZXZlbnQgaGFuZGxlcnMuXG4gICAgdGhpcy5fb25MYXlvdXRTdGFydCA9IHRoaXMuX29uTGF5b3V0U3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkxheW91dEVuZCA9IHRoaXMuX29uTGF5b3V0RW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25SZWxlYXNlRW5kID0gdGhpcy5fb25SZWxlYXNlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25NaWdyYXRlID0gdGhpcy5fb25NaWdyYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBNb3ZlIHBsYWNlaG9sZGVyIHRvIGEgbmV3IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vbkxheW91dFN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG5cbiAgICAvLyBGaW5kIG91dCB0aGUgaXRlbSdzIG5ldyAodW5hcHBsaWVkKSBsZWZ0IGFuZCB0b3AgcG9zaXRpb24uXG4gICAgdmFyIGl0ZW1JbmRleCA9IGdyaWQuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdmFyIG5leHRMZWZ0ID0gZ3JpZC5fbGF5b3V0LnNsb3RzW2l0ZW1JbmRleCAqIDJdO1xuICAgIHZhciBuZXh0VG9wID0gZ3JpZC5fbGF5b3V0LnNsb3RzW2l0ZW1JbmRleCAqIDIgKyAxXTtcblxuICAgIC8vIElmIGl0ZW0ncyBwb3NpdGlvbiBkaWQgbm90IGNoYW5nZSBhbmQgdGhlIGl0ZW0gZGlkIG5vdCBtaWdyYXRlIHdlIGNhblxuICAgIC8vIHNhZmVseSBza2lwIGxheW91dC5cbiAgICBpZiAoIXRoaXMuX2RpZE1pZ3JhdGUgJiYgaXRlbS5fbGVmdCA9PT0gbmV4dExlZnQgJiYgaXRlbS5fdG9wID09PSBuZXh0VG9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2xvdHMgZGF0YSBpcyBjYWxjdWxhdGVkIHdpdGggaXRlbSBtYXJnaW5zIGFkZGVkIHRvIHRoZW0gc28gd2UgbmVlZCB0byBhZGRcbiAgICAvLyBpdGVtJ3MgbGVmdCBhbmQgdG9wIG1hcmdpbiB0byB0aGUgc2xvdCBkYXRhIHRvIGdldCB0aGUgcGxhY2Vob2xkZXInc1xuICAgIC8vIG5leHQgcG9zaXRpb24uXG4gICAgbmV4dExlZnQgKz0gaXRlbS5fbWFyZ2luTGVmdDtcbiAgICBuZXh0VG9wICs9IGl0ZW0uX21hcmdpblRvcDtcblxuICAgIC8vIEp1c3Qgc25hcCB0byBuZXcgcG9zaXRpb24gd2l0aG91dCBhbnkgYW5pbWF0aW9ucyBpZiBubyBhbmltYXRpb24gaXNcbiAgICAvLyByZXF1aXJlZCBvciBpZiBwbGFjZWhvbGRlciBtb3ZlcyBiZXR3ZWVuIGdyaWRzLlxuICAgIHZhciBhbmltRW5hYmxlZCA9IGdyaWQuX3NldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5kdXJhdGlvbiA+IDA7XG4gICAgaWYgKCFhbmltRW5hYmxlZCB8fCB0aGlzLl9kaWRNaWdyYXRlKSB7XG4gICAgICAvLyBDYW5jZWwgcG90ZW50aWFsIChxdWV1ZWQpIGxheW91dCB0aWNrLlxuICAgICAgY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkKTtcblxuICAgICAgLy8gU25hcCBwbGFjZWhvbGRlciB0byBjb3JyZWN0IHBvc2l0aW9uLlxuICAgICAgdmFyIHRhcmdldFN0eWxlcyA9IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcobmV4dExlZnQsIG5leHRUb3ApIH07XG4gICAgICBpZiAodGhpcy5fYW5pbWF0ZS5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGUuc3RvcCh0YXJnZXRTdHlsZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3R5bGVzKHRoaXMuX2VsZW1lbnQsIHRhcmdldFN0eWxlcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgcGxhY2Vob2xkZXIgaW5zaWRlIGNvcnJlY3QgY29udGFpbmVyIGFmdGVyIG1pZ3JhdGlvbi5cbiAgICAgIGlmICh0aGlzLl9kaWRNaWdyYXRlKSB7XG4gICAgICAgIGdyaWQuZ2V0RWxlbWVudCgpLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kaWRNaWdyYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0aGUgcGxhY2Vob2xkZXIncyBsYXlvdXQgYW5pbWF0aW9uIGluIHRoZSBuZXh0IHRpY2suIFdlIGRvIHRoaXMgdG9cbiAgICAvLyBhdm9pZCBsYXlvdXQgdGhyYXNoaW5nLlxuICAgIHRoaXMuX25leHRMZWZ0ID0gbmV4dExlZnQ7XG4gICAgdGhpcy5fbmV4dFRvcCA9IG5leHRUb3A7XG4gICAgYWRkUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkLCB0aGlzLl9zZXR1cEFuaW1hdGlvbiwgdGhpcy5fc3RhcnRBbmltYXRpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHBsYWNlaG9sZGVyIGZvciBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9zZXR1cEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKHRoaXMuX2VsZW1lbnQpO1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gdHJhbnNsYXRlLng7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IHRyYW5zbGF0ZS55O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0ZTtcbiAgICB2YXIgY3VycmVudExlZnQgPSB0aGlzLl9jdXJyZW50TGVmdDtcbiAgICB2YXIgY3VycmVudFRvcCA9IHRoaXMuX2N1cnJlbnRUb3A7XG4gICAgdmFyIG5leHRMZWZ0ID0gdGhpcy5fbmV4dExlZnQ7XG4gICAgdmFyIG5leHRUb3AgPSB0aGlzLl9uZXh0VG9wO1xuICAgIHZhciB0YXJnZXRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKG5leHRMZWZ0LCBuZXh0VG9wKSB9O1xuXG4gICAgLy8gSWYgcGxhY2Vob2xkZXIgaXMgYWxyZWFkeSBpbiBjb3JyZWN0IHBvc2l0aW9uIGxldCdzIGp1c3Qgc3RvcCBhbmltYXRpb25cbiAgICAvLyBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmIChjdXJyZW50TGVmdCA9PT0gbmV4dExlZnQgJiYgY3VycmVudFRvcCA9PT0gbmV4dFRvcCkge1xuICAgICAgaWYgKGFuaW1hdGlvbi5pc0FuaW1hdGluZygpKSBhbmltYXRpb24uc3RvcCh0YXJnZXRTdHlsZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBsZXQncyBzdGFydCB0aGUgYW5pbWF0aW9uLlxuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2l0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXI7XG4gICAgdmFyIGN1cnJlbnRTdHlsZXMgPSB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGN1cnJlbnRMZWZ0LCBjdXJyZW50VG9wKSB9O1xuICAgIGFuaW1hdGlvbi5zdGFydChjdXJyZW50U3R5bGVzLCB0YXJnZXRTdHlsZXMsIHtcbiAgICAgIGR1cmF0aW9uOiBzZXR0aW5ncy5kdXJhdGlvbixcbiAgICAgIGVhc2luZzogc2V0dGluZ3MuZWFzaW5nLFxuICAgICAgb25GaW5pc2g6IHRoaXMuX29uTGF5b3V0RW5kXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExheW91dCBlbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25MYXlvdXRFbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcmVzZXRBZnRlckxheW91dCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBlbmQgaGFuZGxlci4gVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCB3aGVuIGRyYWdSZWxlYXNlRW5kIGV2ZW50IGlzXG4gICAqIGVtaXR0ZWQgYW5kIHJlY2VpdmVzIHRoZSBldmVudCBkYXRhIGFzIGl0J3MgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vblJlbGVhc2VFbmQgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0uX2lkID09PSB0aGlzLl9pdGVtLl9pZCkge1xuICAgICAgLy8gSWYgdGhlIHBsYWNlaG9sZGVyIGlzIG5vdCBhbmltYXRpbmcgYW55bW9yZSB3ZSBjYW4gc2FmZWx5IHJlc2V0IGl0LlxuICAgICAgaWYgKCF0aGlzLl9hbmltYXRlLmlzQW5pbWF0aW5nKCkpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBwbGFjZWhvbGRlciBpdGVtIGlzIHN0aWxsIGFuaW1hdGluZyBoZXJlLCBsZXQncyB3YWl0IGZvciBpdCB0b1xuICAgICAgLy8gZmluaXNoIGl0J3MgYW5pbWF0aW9uLlxuICAgICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBNaWdyYXRpb24gc3RhcnQgaGFuZGxlci4gVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCB3aGVuIGJlZm9yZVNlbmQgZXZlbnQgaXNcbiAgICogZW1pdHRlZCBhbmQgcmVjZWl2ZXMgdGhlIGV2ZW50IGRhdGEgYXMgaXQncyBhcmd1bWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqIEBwYXJhbSB7SXRlbX0gZGF0YS5pdGVtXG4gICAqIEBwYXJhbSB7R3JpZH0gZGF0YS5mcm9tR3JpZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5mcm9tSW5kZXhcbiAgICogQHBhcmFtIHtHcmlkfSBkYXRhLnRvR3JpZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS50b0luZGV4XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5fb25NaWdyYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgbWF0Y2hpbmcgaXRlbS5cbiAgICBpZiAoZGF0YS5pdGVtICE9PSB0aGlzLl9pdGVtKSByZXR1cm47XG5cbiAgICB2YXIgZ3JpZCA9IHRoaXMuX2l0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBuZXh0R3JpZCA9IGRhdGEudG9HcmlkO1xuXG4gICAgLy8gVW5iaW5kIGxpc3RlbmVycyBmcm9tIGN1cnJlbnQgZ3JpZC5cbiAgICBncmlkLm9mZihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIGdyaWQub2ZmKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIGdyaWQub2ZmKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIEJpbmQgbGlzdGVuZXJzIHRvIHRoZSBuZXh0IGdyaWQuXG4gICAgbmV4dEdyaWQub24oZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBuZXh0R3JpZC5vbihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBuZXh0R3JpZC5vbihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBNYXJrIHRoZSBpdGVtIGFzIG1pZ3JhdGVkLlxuICAgIHRoaXMuX2RpZE1pZ3JhdGUgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGxhY2Vob2xkZXIuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBvbmx5IHdyaXRlcyB0byBET00gYW5kIGRvZXMgbm90XG4gICAqIHJlYWQgYW55dGhpbmcgZnJvbSBET00gc28gaXQgc2hvdWxkIG5vdCBjYXVzZSBhbnkgYWRkaXRpb25hbCBsYXlvdXRcbiAgICogdGhyYXNoaW5nIHdoZW4gaXQncyBjYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgZHJhZyBzdGFydCBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgcGxhY2Vob2xkZXIgc2V0IHVwIHdlIGNhbiBza2lwIHRoZSBpbml0aWF0aW9uIGxvZ2ljLlxuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0ZTtcblxuICAgIC8vIENyZWF0ZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIHZhciBlbGVtZW50O1xuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50KSkge1xuICAgICAgZWxlbWVudCA9IHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIFVwZGF0ZSBlbGVtZW50IHRvIGFuaW1hdGlvbiBpbnN0YW5jZS5cbiAgICBhbmltYXRpb24uX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgLy8gQWRkIHBsYWNlaG9sZGVyIGNsYXNzIHRvIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHNldHRpbmdzLml0ZW1QbGFjZWhvbGRlckNsYXNzIHx8ICcnO1xuICAgIGlmICh0aGlzLl9jbGFzc05hbWUpIHtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgLy8gUG9zaXRpb24gdGhlIHBsYWNlaG9sZGVyIGl0ZW0gY29ycmVjdGx5LlxuICAgIHZhciBsZWZ0ID0gaXRlbS5fbGVmdCArIGl0ZW0uX21hcmdpbkxlZnQ7XG4gICAgdmFyIHRvcCA9IGl0ZW0uX3RvcCArIGl0ZW0uX21hcmdpblRvcDtcbiAgICBzZXRTdHlsZXMoZWxlbWVudCwge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICB3aWR0aDogaXRlbS5fd2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBpdGVtLl9oZWlnaHQgKyAncHgnLFxuICAgICAgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcobGVmdCwgdG9wKVxuICAgIH0pO1xuXG4gICAgLy8gQmluZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgZ3JpZC5vbihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBncmlkLm9uKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgZ3JpZC5vbihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBvbkNyZWF0ZSBob29rLlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vbkNyZWF0ZSkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vbkNyZWF0ZShpdGVtLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnQgdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQgdG8gdGhlIGdyaWQuXG4gICAgZ3JpZC5nZXRFbGVtZW50KCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IHBsYWNlaG9sZGVyIGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGU7XG5cbiAgICAvLyBSZXNldCBmbGFnLlxuICAgIHRoaXMuX3Jlc2V0QWZ0ZXJMYXlvdXQgPSBmYWxzZTtcblxuICAgIC8vIENhbmNlbCBwb3RlbnRpYWwgKHF1ZXVlZCkgbGF5b3V0IHRpY2suXG4gICAgY2FuY2VsUGxhY2Vob2xkZXJUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFJlc2V0IGFuaW1hdGlvbiBpbnN0YW5jZS5cbiAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIGFuaW1hdGlvbi5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBVbmJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGdyaWQub2ZmKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gUmVtb3ZlIHBsYWNlaG9sZGVyIGNsYXNzIGZyb20gdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQuXG4gICAgaWYgKHRoaXMuX2NsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBlbGVtZW50LlxuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIG9uUmVtb3ZlIGhvb2suIE5vdGUgdGhhdCBoZXJlIHdlIHVzZSB0aGUgY3VycmVudCBncmlkJ3Mgb25SZW1vdmUgY2FsbGJhY2tcbiAgICAvLyBzbyBpZiB0aGUgaXRlbSBoYXMgbWlncmF0ZWQgZHVyaW5nIGRyYWcgdGhlIG9uUmVtb3ZlIG1ldGhvZCB3aWxsIG5vdCBiZVxuICAgIC8vIHRoZSBvcmlnaW5hdGluZyBncmlkJ3MgbWV0aG9kLlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZSkpIHtcbiAgICAgIHNldHRpbmdzLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZShpdGVtLCBlbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBwbGFjZWhvbGRlcidzIGRpbWVuc2lvbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge2hlaWdodH0gaGVpZ2h0XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS51cGRhdGVEaW1lbnNpb25zID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCArICdweCcsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBwbGFjZWhvbGRlciBpcyBjdXJyZW50bHkgYWN0aXZlICh2aXNpYmxlKS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgcGxhY2Vob2xkZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuX2FuaW1hdGUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2l0ZW0gPSB0aGlzLl9hbmltYXRlID0gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogUXVldWUgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUXVldWUoKSB7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEFkZCBjYWxsYmFjayB0byB0aGUgcXVldWUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFF1ZXVlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3F1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHF1ZXVlIGNhbGxiYWNrcyBhbmQgcmVzZXQgdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBRdWV1ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsqfSBhcmcxXG4gICAqIEBwYXJhbSB7Kn0gYXJnMlxuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbihhcmcxLCBhcmcyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBsZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBRdWl0IGVhcmx5IGlmIHRoZSBxdWV1ZSBpcyBlbXB0eS5cbiAgICBpZiAoIWxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgc2luZ2xlQ2FsbGJhY2sgPSBsZW5ndGggPT09IDE7XG4gICAgdmFyIHNuYXBzaG90ID0gc2luZ2xlQ2FsbGJhY2sgPyBxdWV1ZVswXSA6IHF1ZXVlLnNsaWNlKDApO1xuXG4gICAgLy8gUmVzZXQgcXVldWUuXG4gICAgcXVldWUubGVuZ3RoID0gMDtcblxuICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSBjYWxsYmFjayBsZXQncyBqdXN0IGNhbGwgaXQuXG4gICAgaWYgKHNpbmdsZUNhbGxiYWNrKSB7XG4gICAgICBzbmFwc2hvdChhcmcxLCBhcmcyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgbXVsdGlwbGUgY2FsbGJhY2tzLCBsZXQncyBwcm9jZXNzIHRoZW0uXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzbmFwc2hvdFtpXShhcmcxLCBhcmcyKTtcbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgUXVldWUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFF1ZXVlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7UXVldWV9XG4gICAqL1xuICBRdWV1ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5fcXVldWUubGVuZ3RoID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMYXlvdXQgbWFuYWdlciBmb3IgSXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbUxheW91dChpdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzSW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50U3R5bGVzID0ge307XG4gICAgdGhpcy5fdGFyZ2V0U3R5bGVzID0ge307XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSAwO1xuICAgIHRoaXMuX29mZnNldExlZnQgPSAwO1xuICAgIHRoaXMuX29mZnNldFRvcCA9IDA7XG4gICAgdGhpcy5fc2tpcE5leHRBbmltYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLl9hbmltYXRlT3B0aW9ucyA9IHtcbiAgICAgIG9uRmluaXNoOiB0aGlzLl9maW5pc2guYmluZCh0aGlzKVxuICAgIH07XG4gICAgdGhpcy5fcXVldWUgPSBuZXcgUXVldWUoKTtcblxuICAgIC8vIEJpbmQgYW5pbWF0aW9uIGhhbmRsZXJzIGFuZCBmaW5pc2ggbWV0aG9kLlxuICAgIHRoaXMuX3NldHVwQW5pbWF0aW9uID0gdGhpcy5fc2V0dXBBbmltYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbiA9IHRoaXMuX3N0YXJ0QW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgaXRlbSBsYXlvdXQgYmFzZWQgb24gaXQncyBjdXJyZW50IGRhdGEuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1MYXlvdXR9XG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcbiAgICB2YXIgZ3JpZFNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciBpc1Bvc2l0aW9uaW5nID0gdGhpcy5faXNBY3RpdmU7XG4gICAgdmFyIGlzSnVzdFJlbGVhc2VkID0gcmVsZWFzZS5faXNBY3RpdmUgJiYgcmVsZWFzZS5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPT09IGZhbHNlO1xuICAgIHZhciBhbmltRHVyYXRpb24gPSBpc0p1c3RSZWxlYXNlZFxuICAgICAgPyBncmlkU2V0dGluZ3MuZHJhZ1JlbGVhc2VEdXJhdGlvblxuICAgICAgOiBncmlkU2V0dGluZ3MubGF5b3V0RHVyYXRpb247XG4gICAgdmFyIGFuaW1FYXNpbmcgPSBpc0p1c3RSZWxlYXNlZCA/IGdyaWRTZXR0aW5ncy5kcmFnUmVsZWFzZUVhc2luZyA6IGdyaWRTZXR0aW5ncy5sYXlvdXRFYXNpbmc7XG4gICAgdmFyIGFuaW1FbmFibGVkID0gIWluc3RhbnQgJiYgIXRoaXMuX3NraXBOZXh0QW5pbWF0aW9uICYmIGFuaW1EdXJhdGlvbiA+IDA7XG4gICAgdmFyIGlzQW5pbWF0aW5nO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgY3VycmVudGx5IHBvc2l0aW9uaW5nIHByb2Nlc3MgY3VycmVudCBsYXlvdXQgY2FsbGJhY2tcbiAgICAvLyBxdWV1ZSB3aXRoIGludGVycnVwdGVkIGZsYWcgb24uXG4gICAgaWYgKGlzUG9zaXRpb25pbmcpIHRoaXMuX3F1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuXG4gICAgLy8gTWFyayByZWxlYXNlIHBvc2l0aW9uaW5nIGFzIHN0YXJ0ZWQuXG4gICAgaWYgKGlzSnVzdFJlbGVhc2VkKSByZWxlYXNlLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9IHRydWU7XG5cbiAgICAvLyBQdXNoIHRoZSBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgaWYgKGlzRnVuY3Rpb24ob25GaW5pc2gpKSB0aGlzLl9xdWV1ZS5hZGQob25GaW5pc2gpO1xuXG4gICAgLy8gSWYgbm8gYW5pbWF0aW9ucyBhcmUgbmVlZGVkLCBlYXN5IHBlYXN5IVxuICAgIGlmICghYW5pbUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9mZnNldHMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRhcmdldFN0eWxlcygpO1xuICAgICAgaXNBbmltYXRpbmcgPSBpdGVtLl9hbmltYXRlLmlzQW5pbWF0aW5nKCk7XG4gICAgICB0aGlzLnN0b3AoZmFsc2UsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICAhaXNBbmltYXRpbmcgJiYgc2V0U3R5bGVzKGVsZW1lbnQsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICB0aGlzLl9za2lwTmV4dEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpbmlzaCgpO1xuICAgIH1cblxuICAgIC8vIFNldCBpdGVtIGFjdGl2ZSBhbmQgc3RvcmUgc29tZSBkYXRhIGZvciB0aGUgYW5pbWF0aW9uIHRoYXQgaXMgYWJvdXQgdG8gYmVcbiAgICAvLyB0cmlnZ2VyZWQuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2FuaW1hdGVPcHRpb25zLmVhc2luZyA9IGFuaW1FYXNpbmc7XG4gICAgdGhpcy5fYW5pbWF0ZU9wdGlvbnMuZHVyYXRpb24gPSBhbmltRHVyYXRpb247XG4gICAgdGhpcy5faXNJbnRlcnJ1cHRlZCA9IGlzUG9zaXRpb25pbmc7XG5cbiAgICAvLyBTdGFydCB0aGUgaXRlbSdzIGxheW91dCBhbmltYXRpb24gaW4gdGhlIG5leHQgdGljay5cbiAgICBhZGRMYXlvdXRUaWNrKGl0ZW0uX2lkLCB0aGlzLl9zZXR1cEFuaW1hdGlvbiwgdGhpcy5fc3RhcnRBbmltYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgaXRlbSdzIHBvc2l0aW9uIGFuaW1hdGlvbiBpZiBpdCBpcyBjdXJyZW50bHkgYW5pbWF0aW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcm9jZXNzQ2FsbGJhY2tRdWV1ZT1mYWxzZV1cbiAgICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRTdHlsZXNdXG4gICAqIEByZXR1cm5zIHtJdGVtTGF5b3V0fVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKHByb2Nlc3NDYWxsYmFja1F1ZXVlLCB0YXJnZXRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIENhbmNlbCBhbmltYXRpb24gaW5pdC5cbiAgICBjYW5jZWxMYXlvdXRUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIFN0b3AgYW5pbWF0aW9uLlxuICAgIGl0ZW0uX2FuaW1hdGUuc3RvcCh0YXJnZXRTdHlsZXMpO1xuXG4gICAgLy8gUmVtb3ZlIHBvc2l0aW9uaW5nIGNsYXNzLlxuICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG5cbiAgICAvLyBSZXNldCBhY3RpdmUgc3RhdGUuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIC8vIFByb2Nlc3MgY2FsbGJhY2sgcXVldWUgaWYgbmVlZGVkLlxuICAgIGlmIChwcm9jZXNzQ2FsbGJhY2tRdWV1ZSkgdGhpcy5fcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1MYXlvdXR9XG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSwge30pO1xuICAgIHRoaXMuX3F1ZXVlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9pdGVtID0gdGhpcy5fY3VycmVudFN0eWxlcyA9IHRoaXMuX3RhcmdldFN0eWxlcyA9IHRoaXMuX2FuaW1hdGVPcHRpb25zID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCB1cGRhdGUgaXRlbSdzIGN1cnJlbnQgbGF5b3V0IG9mZnNldCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl91cGRhdGVPZmZzZXRzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIG1pZ3JhdGUgPSBpdGVtLl9taWdyYXRlO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcblxuICAgIHRoaXMuX29mZnNldExlZnQgPSByZWxlYXNlLl9pc0FjdGl2ZVxuICAgICAgPyByZWxlYXNlLl9jb250YWluZXJEaWZmWFxuICAgICAgOiBtaWdyYXRlLl9pc0FjdGl2ZVxuICAgICAgPyBtaWdyYXRlLl9jb250YWluZXJEaWZmWFxuICAgICAgOiAwO1xuXG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gcmVsZWFzZS5faXNBY3RpdmVcbiAgICAgID8gcmVsZWFzZS5fY29udGFpbmVyRGlmZllcbiAgICAgIDogbWlncmF0ZS5faXNBY3RpdmVcbiAgICAgID8gbWlncmF0ZS5fY29udGFpbmVyRGlmZllcbiAgICAgIDogMDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCB1cGRhdGUgaXRlbSdzIGxheW91dCB0YXJnZXQgc3R5bGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl91cGRhdGVUYXJnZXRTdHlsZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB0aGlzLl90YXJnZXRTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgdGhpcy5faXRlbS5fbGVmdCArIHRoaXMuX29mZnNldExlZnQsXG4gICAgICB0aGlzLl9pdGVtLl90b3AgKyB0aGlzLl9vZmZzZXRUb3BcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5pc2ggaXRlbSBsYXlvdXQgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgbWlncmF0ZSA9IGl0ZW0uX21pZ3JhdGU7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuXG4gICAgLy8gTWFyayB0aGUgaXRlbSBhcyBpbmFjdGl2ZSBhbmQgcmVtb3ZlIHBvc2l0aW9uaW5nIGNsYXNzZXMuXG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgcmVtb3ZlQ2xhc3MoaXRlbS5fZWxlbWVudCwgaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLml0ZW1Qb3NpdGlvbmluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBGaW5pc2ggdXAgcmVsZWFzZSBhbmQgbWlncmF0aW9uLlxuICAgIGlmIChyZWxlYXNlLl9pc0FjdGl2ZSkgcmVsZWFzZS5zdG9wKCk7XG4gICAgaWYgKG1pZ3JhdGUuX2lzQWN0aXZlKSBtaWdyYXRlLnN0b3AoKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCBpdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBpdGVtIGZvciBsYXlvdXQgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLl9zZXR1cEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUodGhpcy5faXRlbS5fZWxlbWVudCk7XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSB0cmFuc2xhdGUueDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gdHJhbnNsYXRlLnk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3N0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBzZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcblxuICAgIC8vIExldCdzIHVwZGF0ZSB0aGUgb2Zmc2V0IGRhdGEgYW5kIHRhcmdldCBzdHlsZXMuXG4gICAgdGhpcy5fdXBkYXRlT2Zmc2V0cygpO1xuICAgIHRoaXMuX3VwZGF0ZVRhcmdldFN0eWxlcygpO1xuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgYWxyZWFkeSBpbiBjb3JyZWN0IHBvc2l0aW9uIGxldCdzIHF1aXQgZWFybHkuXG4gICAgaWYgKFxuICAgICAgaXRlbS5fbGVmdCA9PT0gdGhpcy5fY3VycmVudExlZnQgLSB0aGlzLl9vZmZzZXRMZWZ0ICYmXG4gICAgICBpdGVtLl90b3AgPT09IHRoaXMuX2N1cnJlbnRUb3AgLSB0aGlzLl9vZmZzZXRUb3BcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLl9pc0ludGVycnVwdGVkKSB0aGlzLnN0b3AoZmFsc2UsIHRoaXMuX3RhcmdldFN0eWxlcyk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fZmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IGl0ZW0ncyBwb3NpdGlvbmluZyBjbGFzcyBpZiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9pc0ludGVycnVwdGVkKSB7XG4gICAgICBhZGRDbGFzcyhpdGVtLl9lbGVtZW50LCBzZXR0aW5ncy5pdGVtUG9zaXRpb25pbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGN1cnJlbnQgc3R5bGVzIGZvciBhbmltYXRpb24uXG4gICAgdGhpcy5fY3VycmVudFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fY3VycmVudExlZnQsIHRoaXMuX2N1cnJlbnRUb3ApO1xuXG4gICAgLy8gQW5pbWF0ZS5cbiAgICBpdGVtLl9hbmltYXRlLnN0YXJ0KHRoaXMuX2N1cnJlbnRTdHlsZXMsIHRoaXMuX3RhcmdldFN0eWxlcywgdGhpcy5fYW5pbWF0ZU9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciB0ZW1wU3R5bGVzID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBtaWdyYXRlIHByb2Nlc3MgaGFuZGxlciBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbU1pZ3JhdGUoaXRlbSkge1xuICAgIC8vIFByaXZhdGUgcHJvcHMuXG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgdGhlIG1pZ3JhdGUgcHJvY2VzcyBvZiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkfSB0YXJnZXRHcmlkXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gcG9zaXRpb25cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2NvbnRhaW5lcl1cbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24odGFyZ2V0R3JpZCwgcG9zaXRpb24sIGNvbnRhaW5lcikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBpc1Zpc2libGUgPSBpdGVtLmlzVmlzaWJsZSgpO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldFNldHRpbmdzID0gdGFyZ2V0R3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRHcmlkLl9lbGVtZW50O1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRhcmdldEdyaWQuX2l0ZW1zO1xuICAgIHZhciBjdXJyZW50SW5kZXggPSBncmlkLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIHZhciB0YXJnZXRDb250YWluZXIgPSBjb250YWluZXIgfHwgd2luZG93LmRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldEluZGV4O1xuICAgIHZhciB0YXJnZXRJdGVtO1xuICAgIHZhciBjdXJyZW50Q29udGFpbmVyO1xuICAgIHZhciBvZmZzZXREaWZmO1xuICAgIHZhciBjb250YWluZXJEaWZmO1xuICAgIHZhciB0cmFuc2xhdGU7XG4gICAgdmFyIHRyYW5zbGF0ZVg7XG4gICAgdmFyIHRyYW5zbGF0ZVk7XG5cbiAgICAvLyBHZXQgdGFyZ2V0IGluZGV4LlxuICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICB0YXJnZXRJbmRleCA9IG5vcm1hbGl6ZUFycmF5SW5kZXgodGFyZ2V0SXRlbXMsIHBvc2l0aW9uLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0SXRlbSA9IHRhcmdldEdyaWQuX2dldEl0ZW0ocG9zaXRpb24pO1xuICAgICAgLyoqIEB0b2RvIENvbnNpZGVyIHRocm93aW5nIGFuIGVycm9yIGhlcmUgaW5zdGVhZCBvZiBzaWxlbnRseSBmYWlsaW5nLiAqL1xuICAgICAgaWYgKCF0YXJnZXRJdGVtKSByZXR1cm4gdGhpcztcbiAgICAgIHRhcmdldEluZGV4ID0gdGFyZ2V0SXRlbXMuaW5kZXhPZih0YXJnZXRJdGVtKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHZhbHVlcyBpZiBuZWVkZWQuXG4gICAgaWYgKGl0ZW0uaXNQb3NpdGlvbmluZygpIHx8IHRoaXMuX2lzQWN0aXZlIHx8IGl0ZW0uaXNSZWxlYXNpbmcoKSkge1xuICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZS54O1xuICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZS55O1xuICAgIH1cblxuICAgIC8vIEFib3J0IGN1cnJlbnQgcG9zaXRpb25pbmcuXG4gICAgaWYgKGl0ZW0uaXNQb3NpdGlvbmluZygpKSB7XG4gICAgICBpdGVtLl9sYXlvdXQuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpIH0pO1xuICAgIH1cblxuICAgIC8vIEFib3J0IGN1cnJlbnQgbWlncmF0aW9uLlxuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgdHJhbnNsYXRlWCAtPSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICAgIHRyYW5zbGF0ZVkgLT0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgICB0aGlzLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBjdXJyZW50IHJlbGVhc2UuXG4gICAgaWYgKGl0ZW0uaXNSZWxlYXNpbmcoKSkge1xuICAgICAgdHJhbnNsYXRlWCAtPSBpdGVtLl9yZWxlYXNlLl9jb250YWluZXJEaWZmWDtcbiAgICAgIHRyYW5zbGF0ZVkgLT0gaXRlbS5fcmVsZWFzZS5fY29udGFpbmVyRGlmZlk7XG4gICAgICBpdGVtLl9yZWxlYXNlLnN0b3AodHJ1ZSwgeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKSB9KTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGN1cnJlbnQgdmlzaWJpbGl0eSBhbmltYXRpb25zLlxuICAgIGl0ZW0uX3Zpc2liaWxpdHkuX3N0b3BBbmltYXRpb24oKTtcblxuICAgIC8vIERlc3Ryb3kgY3VycmVudCBkcmFnLlxuICAgIGlmIChpdGVtLl9kcmFnKSBpdGVtLl9kcmFnLmRlc3Ryb3koKTtcblxuICAgIC8vIFByb2Nlc3MgY3VycmVudCB2aXNpYmlsaXR5IGFuaW1hdGlvbiBxdWV1ZS5cbiAgICBpdGVtLl92aXNpYmlsaXR5Ll9xdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcblxuICAgIC8vIEVtaXQgYmVmb3JlU2VuZCBldmVudC5cbiAgICBpZiAoZ3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlU2VuZCkpIHtcbiAgICAgIGdyaWQuX2VtaXQoZXZlbnRCZWZvcmVTZW5kLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBiZWZvcmVSZWNlaXZlIGV2ZW50LlxuICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVSZWNlaXZlKSkge1xuICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudEJlZm9yZVJlY2VpdmUsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgY3VycmVudCBjbGFzc25hbWVzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIEFkZCBuZXcgY2xhc3NuYW1lcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCB0YXJnZXRTZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIGFkZENsYXNzKGVsZW1lbnQsIGlzVmlzaWJsZSA/IHRhcmdldFNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MgOiB0YXJnZXRTZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gTW92ZSBpdGVtIGluc3RhbmNlIGZyb20gY3VycmVudCBncmlkIHRvIHRhcmdldCBncmlkLlxuICAgIGdyaWQuX2l0ZW1zLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuICAgIGFycmF5SW5zZXJ0KHRhcmdldEl0ZW1zLCBpdGVtLCB0YXJnZXRJbmRleCk7XG5cbiAgICAvLyBVcGRhdGUgaXRlbSdzIGdyaWQgaWQgcmVmZXJlbmNlLlxuICAgIGl0ZW0uX2dyaWRJZCA9IHRhcmdldEdyaWQuX2lkO1xuXG4gICAgLy8gR2V0IGN1cnJlbnQgY29udGFpbmVyLlxuICAgIGN1cnJlbnRDb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAvLyBNb3ZlIHRoZSBpdGVtIGluc2lkZSB0aGUgdGFyZ2V0IGNvbnRhaW5lciBpZiBpdCdzIGRpZmZlcmVudCB0aGFuIHRoZVxuICAgIC8vIGN1cnJlbnQgY29udGFpbmVyLlxuICAgIGlmICh0YXJnZXRDb250YWluZXIgIT09IGN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKHRhcmdldENvbnRhaW5lciwgY3VycmVudENvbnRhaW5lciwgdHJ1ZSk7XG4gICAgICBpZiAoIXRyYW5zbGF0ZSkge1xuICAgICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGUueDtcbiAgICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZS55O1xuICAgICAgfVxuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgdHJhbnNsYXRlWCArIG9mZnNldERpZmYubGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWSArIG9mZnNldERpZmYudG9wXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjaGlsZCBlbGVtZW50J3Mgc3R5bGVzIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBzdGF0ZS5cbiAgICBpdGVtLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCBpc1Zpc2libGUgPyB0YXJnZXRTZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogdGFyZ2V0U2V0dGluZ3MuaGlkZGVuU3R5bGVzKTtcblxuICAgIC8vIFVwZGF0ZSBkaXNwbGF5IHN0eWxlLlxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdibG9jaycgOiAnaGlkZGVuJztcblxuICAgIC8vIEdldCBvZmZzZXQgZGlmZiBmb3IgdGhlIG1pZ3JhdGlvbiBkYXRhLlxuICAgIGNvbnRhaW5lckRpZmYgPSBnZXRPZmZzZXREaWZmKHRhcmdldENvbnRhaW5lciwgdGFyZ2V0RWxlbWVudCwgdHJ1ZSk7XG5cbiAgICAvLyBVcGRhdGUgaXRlbSdzIGNhY2hlZCBkaW1lbnNpb25zIGFuZCBzb3J0IGRhdGEuXG4gICAgaXRlbS5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICBpdGVtLl9yZWZyZXNoU29ydERhdGEoKTtcblxuICAgIC8vIENyZWF0ZSBuZXcgZHJhZyBoYW5kbGVyLlxuICAgIGl0ZW0uX2RyYWcgPSB0YXJnZXRTZXR0aW5ncy5kcmFnRW5hYmxlZCA/IG5ldyBJdGVtRHJhZyhpdGVtKSA6IG51bGw7XG5cbiAgICAvLyBTZXR1cCBtaWdyYXRpb24gZGF0YS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fY29udGFpbmVyID0gdGFyZ2V0Q29udGFpbmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gY29udGFpbmVyRGlmZi5sZWZ0O1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gY29udGFpbmVyRGlmZi50b3A7XG5cbiAgICAvLyBFbWl0IHNlbmQgZXZlbnQuXG4gICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhldmVudFNlbmQpKSB7XG4gICAgICBncmlkLl9lbWl0KGV2ZW50U2VuZCwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEVtaXQgcmVjZWl2ZSBldmVudC5cbiAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50UmVjZWl2ZSkpIHtcbiAgICAgIHRhcmdldEdyaWQuX2VtaXQoZXZlbnRSZWNlaXZlLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuZCB0aGUgbWlncmF0ZSBwcm9jZXNzIG9mIGFuIGl0ZW0uIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGFib3J0IGFuXG4gICAqIG9uZ29pbmcgbWlncmF0ZSBwcm9jZXNzIChhbmltYXRpb24pIG9yIGZpbmlzaCB0aGUgbWlncmF0ZSBwcm9jZXNzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbYWJvcnQ9ZmFsc2VdXG4gICAqICAtIFNob3VsZCB0aGUgbWlncmF0aW9uIGJlIGFib3J0ZWQ/XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3VycmVudFN0eWxlc11cbiAgICogIC0gT3B0aW9uYWwgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHN0eWxlcy5cbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihhYm9ydCwgY3VycmVudFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBncmlkRWxlbWVudCA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRyYW5zbGF0ZTtcblxuICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IGdyaWRFbGVtZW50KSB7XG4gICAgICBpZiAoIWN1cnJlbnRTdHlsZXMpIHtcbiAgICAgICAgaWYgKGFib3J0KSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRlbXBTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgICAgICAgdHJhbnNsYXRlLnggLSB0aGlzLl9jb250YWluZXJEaWZmWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZS55IC0gdGhpcy5fY29udGFpbmVyRGlmZllcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKGl0ZW0uX2xlZnQsIGl0ZW0uX3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFN0eWxlcyA9IHRlbXBTdHlsZXM7XG4gICAgICB9XG4gICAgICBncmlkRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBjdXJyZW50U3R5bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTWlncmF0ZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1NaWdyYXRlfVxuICAgKi9cbiAgSXRlbU1pZ3JhdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCh0cnVlKTtcbiAgICB0aGlzLl9pdGVtID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIHRlbXBTdHlsZXMkMSA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVsZWFzZSBwcm9jZXNzIGhhbmRsZXIgY29uc3RydWN0b3IuIEFsdGhvdWdoIHRoaXMgbWlnaHQgc2VlbSBhcyBwcm9wZXJcbiAgICogZml0IGZvciB0aGUgZHJhZyBwcm9jZXNzIHRoaXMgbmVlZHMgdG8gYmUgc2VwYXJhdGVkIGludG8gaXQncyBvd24gbG9naWNcbiAgICogYmVjYXVzZSB0aGVyZSBtaWdodCBiZSBhIHNjZW5hcmlvIHdoZXJlIGRyYWcgaXMgZGlzYWJsZWQsIGJ1dCB0aGUgcmVsZWFzZVxuICAgKiBwcm9jZXNzIHN0aWxsIG5lZWRzIHRvIGJlIGltcGxlbWVudGVkIChkcmFnZ2luZyBmcm9tIGEgZ3JpZCB0byBhbm90aGVyKS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbVJlbGVhc2UoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHJlbGVhc2UgcHJvY2VzcyBvZiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1SZWxlYXNlfVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2lzQWN0aXZlKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuXG4gICAgLy8gRmxhZyByZWxlYXNlIGFzIGFjdGl2ZS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICAvLyBBZGQgcmVsZWFzZSBjbGFzcyBuYW1lIHRvIHRoZSByZWxlYXNlZCBlbGVtZW50LlxuICAgIGFkZENsYXNzKGl0ZW0uX2VsZW1lbnQsIGdyaWQuX3NldHRpbmdzLml0ZW1SZWxlYXNpbmdDbGFzcyk7XG5cbiAgICAvLyBFbWl0IGRyYWdSZWxlYXNlU3RhcnQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdSZWxlYXNlU3RhcnQsIGl0ZW0pO1xuXG4gICAgLy8gUG9zaXRpb24gdGhlIHJlbGVhc2VkIGl0ZW0uXG4gICAgaXRlbS5fbGF5b3V0LnN0YXJ0KGZhbHNlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgdGhlIHJlbGVhc2UgcHJvY2VzcyBvZiBhbiBpdGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBhYm9ydCBhblxuICAgKiBvbmdvaW5nIHJlbGVhc2UgcHJvY2VzcyAoYW5pbWF0aW9uKSBvciBmaW5pc2ggdGhlIHJlbGVhc2UgcHJvY2Vzcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Fib3J0PWZhbHNlXVxuICAgKiAgLSBTaG91bGQgdGhlIHJlbGVhc2UgYmUgYWJvcnRlZD8gV2hlbiB0cnVlLCB0aGUgcmVsZWFzZSBlbmQgZXZlbnQgd29uJ3QgYmVcbiAgICogICAgZW1pdHRlZC4gU2V0IHRvIHRydWUgb25seSB3aGVuIHlvdSBuZWVkIHRvIGFib3J0IHRoZSByZWxlYXNlIHByb2Nlc3NcbiAgICogICAgd2hpbGUgdGhlIGl0ZW0gaXMgYW5pbWF0aW5nIHRvIGl0J3MgcG9zaXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3VycmVudFN0eWxlc11cbiAgICogIC0gT3B0aW9uYWwgY3VycmVudCB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHN0eWxlcy5cbiAgICogQHJldHVybnMge0l0ZW1SZWxlYXNlfVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihhYm9ydCwgY3VycmVudFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBjb250YWluZXIgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciB0cmFuc2xhdGU7XG5cbiAgICAvLyBSZXNldCBkYXRhIGFuZCByZW1vdmUgcmVsZWFzaW5nIGNsYXNzIG5hbWUgZnJvbSB0aGUgZWxlbWVudC5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgLy8gSWYgdGhlIHJlbGVhc2VkIGVsZW1lbnQgaXMgb3V0c2lkZSB0aGUgZ3JpZCdzIGNvbnRhaW5lciBlbGVtZW50IHB1dCBpdFxuICAgIC8vIGJhY2sgdGhlcmUgYW5kIGFkanVzdCBwb3NpdGlvbiBhY2NvcmRpbmdseS5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBjb250YWluZXIpIHtcbiAgICAgIGlmICghY3VycmVudFN0eWxlcykge1xuICAgICAgICBpZiAoYWJvcnQpIHtcbiAgICAgICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgICAgdGVtcFN0eWxlcyQxLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyhcbiAgICAgICAgICAgIHRyYW5zbGF0ZS54IC0gdGhpcy5fY29udGFpbmVyRGlmZlgsXG4gICAgICAgICAgICB0cmFuc2xhdGUueSAtIHRoaXMuX2NvbnRhaW5lckRpZmZZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wU3R5bGVzJDEudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKGl0ZW0uX2xlZnQsIGl0ZW0uX3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFN0eWxlcyA9IHRlbXBTdHlsZXMkMTtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIHNldFN0eWxlcyhlbGVtZW50LCBjdXJyZW50U3R5bGVzKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGRyYWdSZWxlYXNlRW5kIGV2ZW50LlxuICAgIGlmICghYWJvcnQpIGdyaWQuX2VtaXQoZXZlbnREcmFnUmVsZWFzZUVuZCwgaXRlbSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtUmVsZWFzZX1cbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnN0b3AodHJ1ZSk7XG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFJlc2V0IHB1YmxpYyBkYXRhIGFuZCByZW1vdmUgcmVsZWFzaW5nIGNsYXNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVJlbGVhc2UucHJvdG90eXBlXG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNQb3NpdGlvbmluZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuICAgIHJlbW92ZUNsYXNzKGl0ZW0uX2VsZW1lbnQsIGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncy5pdGVtUmVsZWFzaW5nQ2xhc3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCB2YWx1ZXMgb2YgdGhlIHByb3ZpZGVkIHN0eWxlcyBkZWZpbml0aW9uIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB7fTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlcykge1xuICAgICAgY3VycmVudFtwcm9wXSA9IGdldFN0eWxlKGVsZW1lbnQsIGdldFN0eWxlTmFtZShwcm9wKSk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFZpc2liaWxpdHkgbWFuYWdlciBmb3IgSXRlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgZnVuY3Rpb24gSXRlbVZpc2liaWxpdHkoaXRlbSkge1xuICAgIHZhciBpc0FjdGl2ZSA9IGl0ZW0uX2lzQWN0aXZlO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgc2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG5cbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gU2V0IHVwIHZpc2liaWxpdHkgc3RhdGVzLlxuICAgIHRoaXMuX2lzSGlkZGVuID0gIWlzQWN0aXZlO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG5cbiAgICAvLyBDYWxsYmFjayBxdWV1ZS5cbiAgICB0aGlzLl9xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuXG4gICAgLy8gQmluZCBzaG93L2hpZGUgZmluaXNoZXJzLlxuICAgIHRoaXMuX2ZpbmlzaFNob3cgPSB0aGlzLl9maW5pc2hTaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZmluaXNoSGlkZSA9IHRoaXMuX2ZpbmlzaEhpZGUuYmluZCh0aGlzKTtcblxuICAgIC8vIEZvcmNlIGl0ZW0gdG8gYmUgZWl0aGVyIHZpc2libGUgb3IgaGlkZGVuIG9uIGluaXQuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNBY3RpdmUgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgLy8gU2V0IHZpc2libGUvaGlkZGVuIGNsYXNzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGlzQWN0aXZlID8gc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyA6IHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdHlsZXMgZm9yIHRoZSBjaGlsZCBlbGVtZW50LlxuICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgaXNBY3RpdmUgPyBzZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogc2V0dGluZ3MuaGlkZGVuU3R5bGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTaG93IGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluc3RhbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7SXRlbVZpc2liaWxpdHl9XG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGNhbGxiYWNrID0gaXNGdW5jdGlvbihvbkZpbmlzaCkgPyBvbkZpbmlzaCA6IG51bGw7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIElmIGl0ZW0gaXMgdmlzaWJsZSBjYWxsIHRoZSBjYWxsYmFjayBhbmQgYmUgZG9uZSB3aXRoIGl0LlxuICAgIGlmICghdGhpcy5faXNTaG93aW5nICYmICF0aGlzLl9pc0hpZGRlbikge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZmFsc2UsIGl0ZW0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBzaG93aW5nIGFuZCBkb2VzIG5vdCBuZWVkIHRvIGJlIHNob3duIGluc3RhbnRseSwgbGV0J3MganVzdFxuICAgIC8vIHB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKHRoaXMuX2lzU2hvd2luZyAmJiAhaW5zdGFudCkge1xuICAgICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBpdGVtIGlzIGhpZGluZyBvciBoaWRkZW4gcHJvY2VzcyB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGNhbGxiYWNrXG4gICAgLy8gcXVldWUgd2l0aCB0aGUgaW50ZXJydXB0ZWQgZmxhZyBhY3RpdmUsIHVwZGF0ZSBjbGFzc2VzIGFuZCBzZXQgZGlzcGxheVxuICAgIC8vIHRvIGJsb2NrIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd2luZykge1xuICAgICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgICBpZiAoIXRoaXMuX2lzSGlkaW5nKSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIC8vIFB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlLlxuICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG5cbiAgICAvLyBVcGRhdGUgdmlzaWJpbGl0eSBzdGF0ZXMuXG4gICAgaXRlbS5faXNBY3RpdmUgPSB0aGlzLl9pc1Nob3dpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2lzSGlkaW5nID0gdGhpcy5faXNIaWRkZW4gPSBmYWxzZTtcblxuICAgIC8vIEZpbmFsbHkgbGV0J3Mgc3RhcnQgc2hvdyBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24odHJ1ZSwgaW5zdGFudCwgdGhpcy5fZmluaXNoU2hvdyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSGlkZSBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbnN0YW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0l0ZW1WaXNpYmlsaXR5fVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24ob25GaW5pc2gpID8gb25GaW5pc2ggOiBudWxsO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBJZiBpdGVtIGlzIGFscmVhZHkgaGlkZGVuIGNhbGwgdGhlIGNhbGxiYWNrIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKCF0aGlzLl9pc0hpZGluZyAmJiB0aGlzLl9pc0hpZGRlbikge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZmFsc2UsIGl0ZW0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgaXRlbSBpcyBoaWRpbmcgYW5kIGRvZXMgbm90IG5lZWQgdG8gYmUgaGlkZGVuIGluc3RhbnRseSwgbGV0J3MganVzdFxuICAgIC8vIHB1c2ggY2FsbGJhY2sgdG8gdGhlIGNhbGxiYWNrIHF1ZXVlIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKHRoaXMuX2lzSGlkaW5nICYmICFpbnN0YW50KSB7XG4gICAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgc2hvd2luZyBvciB2aXNpYmxlIHByb2Nlc3MgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBjYWxsYmFja1xuICAgIC8vIHF1ZXVlIHdpdGggdGhlIGludGVycnVwdGVkIGZsYWcgYWN0aXZlLCB1cGRhdGUgY2xhc3NlcyBhbmQgc2V0IGRpc3BsYXlcbiAgICAvLyB0byBibG9jayBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKCF0aGlzLl9pc0hpZGluZykge1xuICAgICAgcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gUHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcblxuICAgIC8vIFVwZGF0ZSB2aXNpYmlsaXR5IHN0YXRlcy5cbiAgICB0aGlzLl9pc0hpZGRlbiA9IHRoaXMuX2lzSGlkaW5nID0gdHJ1ZTtcbiAgICBpdGVtLl9pc0FjdGl2ZSA9IHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgLy8gRmluYWxseSBsZXQncyBzdGFydCBoaWRlIGFuaW1hdGlvbi5cbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbihmYWxzZSwgaW5zdGFudCwgdGhpcy5fZmluaXNoSGlkZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIHN0b3AgY3VycmVudCBhbmltYXRpb24gaWYgaXQgaXMgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtJdGVtVmlzaWJpbGl0eX1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIFN0b3AgdmlzaWJpbGl0eSBhbmltYXRpb24uXG4gICAgdGhpcy5fc3RvcEFuaW1hdGlvbih7fSk7XG5cbiAgICAvLyBGaXJlIGFsbCB1bmNvbXBsZXRlZCBjYWxsYmFja3Mgd2l0aCBpbnRlcnJ1cHRlZCBmbGFnIGFuZCBkZXN0cm95IHRoZSBxdWV1ZS5cbiAgICBxdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKS5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgdmlzaWJsZS9oaWRkZW4gY2xhc3Nlcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gUmVzZXQgc3RhdGUuXG4gICAgdGhpcy5faXRlbSA9IG51bGw7XG4gICAgdGhpcy5faXNIaWRpbmcgPSB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRoaXMuX2lzSGlkZGVuID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFN0YXJ0IHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9WaXNpYmxlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc3RhbnRdXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZpbmlzaF1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbih0b1Zpc2libGUsIGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuICAgIHZhciB0YXJnZXRTdHlsZXMgPSB0b1Zpc2libGUgPyBzZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogc2V0dGluZ3MuaGlkZGVuU3R5bGVzO1xuICAgIHZhciBkdXJhdGlvbiA9IHBhcnNlSW50KHRvVmlzaWJsZSA/IHNldHRpbmdzLnNob3dEdXJhdGlvbiA6IHNldHRpbmdzLmhpZGVEdXJhdGlvbikgfHwgMDtcbiAgICB2YXIgZWFzaW5nID0gKHRvVmlzaWJsZSA/IHNldHRpbmdzLnNob3dFYXNpbmcgOiBzZXR0aW5ncy5oaWRlRWFzaW5nKSB8fCAnZWFzZSc7XG4gICAgdmFyIGlzSW5zdGFudCA9IGluc3RhbnQgfHwgZHVyYXRpb24gPD0gMDtcbiAgICB2YXIgY3VycmVudFN0eWxlcztcblxuICAgIC8vIE5vIHRhcmdldCBzdHlsZXM/IExldCdzIHF1aXQgZWFybHkuXG4gICAgaWYgKCF0YXJnZXRTdHlsZXMpIHtcbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHF1ZXVlZCB2aXNpYmlsaXR5IHRpY2suXG4gICAgY2FuY2VsVmlzaWJpbGl0eVRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gSWYgd2UgbmVlZCB0byBhcHBseSB0aGUgc3R5bGVzIGluc3RhbnRseSB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICBpZiAoaXNJbnN0YW50KSB7XG4gICAgICBpZiAoaXRlbS5fYW5pbWF0ZUNoaWxkLmlzQW5pbWF0aW5nKCkpIHtcbiAgICAgICAgaXRlbS5fYW5pbWF0ZUNoaWxkLnN0b3AodGFyZ2V0U3R5bGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgdGFyZ2V0U3R5bGVzKTtcbiAgICAgIH1cbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvbiBpbiB0aGUgbmV4dCB0aWNrICh0byBhdm9pZCBsYXlvdXQgdGhyYXNoaW5nKS5cbiAgICBhZGRWaXNpYmlsaXR5VGljayhcbiAgICAgIGl0ZW0uX2lkLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSBnZXRDdXJyZW50U3R5bGVzKGl0ZW0uX2NoaWxkLCB0YXJnZXRTdHlsZXMpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpdGVtLl9hbmltYXRlQ2hpbGQuc3RhcnQoY3VycmVudFN0eWxlcywgdGFyZ2V0U3R5bGVzLCB7XG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogZWFzaW5nLFxuICAgICAgICAgIG9uRmluaXNoOiBvbkZpbmlzaFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIHZpc2liaWxpdHkgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0U3R5bGVzXVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9zdG9wQW5pbWF0aW9uID0gZnVuY3Rpb24odGFyZ2V0U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIGNhbmNlbFZpc2liaWxpdHlUaWNrKGl0ZW0uX2lkKTtcbiAgICBpdGVtLl9hbmltYXRlQ2hpbGQuc3RvcCh0YXJnZXRTdHlsZXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5pc2ggc2hvdyBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fZmluaXNoU2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0hpZGRlbikgcmV0dXJuO1xuICAgIHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCB0aGlzLl9pdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogRmluaXNoIGhpZGUgcHJvY2VkdXJlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqL1xuICB2YXIgZmluaXNoU3R5bGVzID0ge307XG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5fZmluaXNoSGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5faXNIaWRkZW4pIHJldHVybjtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdGhpcy5faXNIaWRpbmcgPSBmYWxzZTtcbiAgICBmaW5pc2hTdHlsZXMudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKDAsIDApO1xuICAgIGl0ZW0uX2xheW91dC5zdG9wKHRydWUsIGZpbmlzaFN0eWxlcyk7XG4gICAgaXRlbS5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuX3F1ZXVlLmZsdXNoKGZhbHNlLCBpdGVtKTtcbiAgfTtcblxuICB2YXIgaWQgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdW5pcXVlIG51bWVyaWMgaWQgKGluY3JlbWVudHMgYSBiYXNlIHZhbHVlIG9uIGV2ZXJ5IGNhbGwpLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlVWlkKCkge1xuICAgIHJldHVybiArK2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgSXRlbSBpbnN0YW5jZSBmb3IgYSBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaXNBY3RpdmVdXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtKGdyaWQsIGVsZW1lbnQsIGlzQWN0aXZlKSB7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2UgaWQuXG4gICAgdGhpcy5faWQgPSBjcmVhdGVVaWQoKTtcblxuICAgIC8vIFJlZmVyZW5jZSB0byBjb25uZWN0ZWQgR3JpZCBpbnN0YW5jZSdzIGlkLlxuICAgIHRoaXMuX2dyaWRJZCA9IGdyaWQuX2lkO1xuXG4gICAgLy8gRGVzdHJveWVkIGZsYWcuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNldCB1cCBpbml0aWFsIHBvc2l0aW9ucy5cbiAgICB0aGlzLl9sZWZ0ID0gMDtcbiAgICB0aGlzLl90b3AgPSAwO1xuXG4gICAgLy8gVGhlIGVsZW1lbnRzLlxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2NoaWxkID0gZWxlbWVudC5jaGlsZHJlblswXTtcblxuICAgIC8vIElmIHRoZSBwcm92aWRlZCBpdGVtIGVsZW1lbnQgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBncmlkIGNvbnRhaW5lclxuICAgIC8vIGVsZW1lbnQsIGFwcGVuZCBpdCB0byB0aGUgZ3JpZCBjb250YWluZXIuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gZ3JpZC5fZWxlbWVudCkge1xuICAgICAgZ3JpZC5fZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaXRlbSBjbGFzcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuXG4gICAgLy8gSWYgaXNBY3RpdmUgaXMgbm90IGRlZmluZWQsIGxldCdzIHRyeSB0byBhdXRvLWRldGVjdCBpdC5cbiAgICBpZiAodHlwZW9mIGlzQWN0aXZlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIGlzQWN0aXZlID0gZ2V0U3R5bGUoZWxlbWVudCwgJ2Rpc3BsYXknKSAhPT0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBhY3RpdmUgc3RhdGUgKGRlZmluZXMgaWYgdGhlIGl0ZW0gaXMgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBsYXlvdXRcbiAgICAvLyBvciBub3QpLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG5cbiAgICAvLyBTZXQgZWxlbWVudCdzIGluaXRpYWwgcG9zaXRpb24gc3R5bGVzLlxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKDAsIDApO1xuXG4gICAgLy8gSW5pdGlhdGUgaXRlbSdzIGFuaW1hdGlvbiBjb250cm9sbGVycy5cbiAgICB0aGlzLl9hbmltYXRlID0gbmV3IEl0ZW1BbmltYXRlKGVsZW1lbnQpO1xuICAgIHRoaXMuX2FuaW1hdGVDaGlsZCA9IG5ldyBJdGVtQW5pbWF0ZSh0aGlzLl9jaGlsZCk7XG5cbiAgICAvLyBTZXR1cCB2aXNpYmlsaXR5IGhhbmRsZXIuXG4gICAgdGhpcy5fdmlzaWJpbGl0eSA9IG5ldyBJdGVtVmlzaWJpbGl0eSh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBsYXlvdXQgaGFuZGxlci5cbiAgICB0aGlzLl9sYXlvdXQgPSBuZXcgSXRlbUxheW91dCh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBtaWdyYXRpb24gaGFuZGxlciBkYXRhLlxuICAgIHRoaXMuX21pZ3JhdGUgPSBuZXcgSXRlbU1pZ3JhdGUodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgcmVsZWFzZSBoYW5kbGVyLiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBpcyBmdWxseSBsaW5rZWQgdG8gZHJhZ2dpbmdcbiAgICAvLyB0aGlzIHN0aWxsIG5lZWRzIHRvIGJlIGFsd2F5cyBpbnN0YW50aWF0ZWQgdG8gaGFuZGxlIG1pZ3JhdGlvbiBzY2VuYXJpb3NcbiAgICAvLyBjb3JyZWN0bHkuXG4gICAgdGhpcy5fcmVsZWFzZSA9IG5ldyBJdGVtUmVsZWFzZSh0aGlzKTtcblxuICAgIC8vIFNldCB1cCBkcmFnIHBsYWNlaG9sZGVyIGhhbmRsZXIuIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGlzIGZ1bGx5IGxpbmtlZCB0b1xuICAgIC8vIGRyYWdnaW5nIHRoaXMgc3RpbGwgbmVlZHMgdG8gYmUgYWx3YXlzIGluc3RhbnRpYXRlZCB0byBoYW5kbGUgbWlncmF0aW9uXG4gICAgLy8gc2NlbmFyaW9zIGNvcnJlY3RseS5cbiAgICB0aGlzLl9kcmFnUGxhY2Vob2xkZXIgPSBuZXcgSXRlbURyYWdQbGFjZWhvbGRlcih0aGlzKTtcblxuICAgIC8vIFNldCB1cCBkcmFnIGhhbmRsZXIuXG4gICAgdGhpcy5fZHJhZyA9IHNldHRpbmdzLmRyYWdFbmFibGVkID8gbmV3IEl0ZW1EcmFnKHRoaXMpIDogbnVsbDtcblxuICAgIC8vIFNldCB1cCB0aGUgaW5pdGlhbCBkaW1lbnNpb25zIGFuZCBzb3J0IGRhdGEuXG4gICAgdGhpcy5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICB0aGlzLl9yZWZyZXNoU29ydERhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluc3RhbmNlIGdyaWQgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEdyaWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ3JpZEluc3RhbmNlc1t0aGlzLl9ncmlkSWRdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluc3RhbmNlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgd2lkdGguXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgaGVpZ2h0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgbWFyZ2lucy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogICAtIFRoZSByZXR1cm5lZCBvYmplY3QgY29udGFpbnMgbGVmdCwgcmlnaHQsIHRvcCBhbmQgYm90dG9tIHByb3BlcnRpZXNcbiAgICogICAgIHdoaWNoIGluZGljYXRlIHRoZSBpdGVtIGVsZW1lbnQncyBjYWNoZWQgbWFyZ2lucy5cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldE1hcmdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiB0aGlzLl9tYXJnaW5MZWZ0LFxuICAgICAgcmlnaHQ6IHRoaXMuX21hcmdpblJpZ2h0LFxuICAgICAgdG9wOiB0aGlzLl9tYXJnaW5Ub3AsXG4gICAgICBib3R0b206IHRoaXMuX21hcmdpbkJvdHRvbVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSBlbGVtZW50J3MgY2FjaGVkIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiAgIC0gVGhlIHJldHVybmVkIG9iamVjdCBjb250YWlucyBsZWZ0IGFuZCB0b3AgcHJvcGVydGllcyB3aGljaCBpbmRpY2F0ZSB0aGVcbiAgICogICAgIGl0ZW0gZWxlbWVudCdzIGNhY2hlZCBwb3NpdGlvbiBpbiB0aGUgZ3JpZC5cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IHRoaXMuX2xlZnQsXG4gICAgICB0b3A6IHRoaXMuX3RvcFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGFjdGl2ZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gdmlzaWJsZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl92aXNpYmlsaXR5ICYmICF0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGRlbjtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgYW5pbWF0ZWQgdG8gdmlzaWJsZT9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc1Nob3dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fdmlzaWJpbGl0eSAmJiB0aGlzLl92aXNpYmlsaXR5Ll9pc1Nob3dpbmcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyBhbmltYXRlZCB0byBoaWRkZW4/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNIaWRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fdmlzaWJpbGl0eSAmJiB0aGlzLl92aXNpYmlsaXR5Ll9pc0hpZGluZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIHBvc2l0aW9uaW5nP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzUG9zaXRpb25pbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fbGF5b3V0ICYmIHRoaXMuX2xheW91dC5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyBkcmFnZ2VkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fZHJhZyAmJiB0aGlzLl9kcmFnLl9pc0FjdGl2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIHJlbGVhc2VkP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzUmVsZWFzaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuX3JlbGVhc2UgJiYgdGhpcy5fcmVsZWFzZS5faXNBY3RpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBkZXN0cm95ZWQ/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNEZXN0cm95ZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEZXN0cm95ZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGUgaXRlbSdzIGRpbWVuc2lvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuX3JlZnJlc2hEaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX3Zpc2liaWxpdHkuX2lzSGlkZGVuKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGRyYWdQbGFjZWhvbGRlciA9IHRoaXMuX2RyYWdQbGFjZWhvbGRlcjtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgd2lkdGggYW5kIGhlaWdodC5cbiAgICB0aGlzLl93aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG5cbiAgICAvLyBDYWxjdWxhdGUgbWFyZ2lucyAoaWdub3JlIG5lZ2F0aXZlIG1hcmdpbnMpLlxuICAgIHRoaXMuX21hcmdpbkxlZnQgPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi1sZWZ0JykpO1xuICAgIHRoaXMuX21hcmdpblJpZ2h0ID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tcmlnaHQnKSk7XG4gICAgdGhpcy5fbWFyZ2luVG9wID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tdG9wJykpO1xuICAgIHRoaXMuX21hcmdpbkJvdHRvbSA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLWJvdHRvbScpKTtcblxuICAgIC8vIEtlZXAgZHJhZyBwbGFjZWhvbGRlcidzIGRpbWVuc2lvbnMgc3luY2VkIHdpdGggdGhlIGl0ZW0ncy5cbiAgICBpZiAoZHJhZ1BsYWNlaG9sZGVyKSB7XG4gICAgICBkcmFnUGxhY2Vob2xkZXIudXBkYXRlRGltZW5zaW9ucyh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoIGFuZCBzdG9yZSBpdGVtJ3Mgc29ydCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9yZWZyZXNoU29ydERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBkYXRhID0gKHRoaXMuX3NvcnREYXRhID0ge30pO1xuICAgIHZhciBnZXR0ZXJzID0gdGhpcy5nZXRHcmlkKCkuX3NldHRpbmdzLnNvcnREYXRhO1xuICAgIHZhciBwcm9wO1xuXG4gICAgZm9yIChwcm9wIGluIGdldHRlcnMpIHtcbiAgICAgIGRhdGFbcHJvcF0gPSBnZXR0ZXJzW3Byb3BdKHRoaXMsIHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBpdGVtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlRWxlbWVudD1mYWxzZV1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24ocmVtb3ZlRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIGluZGV4ID0gZ3JpZC5faXRlbXMuaW5kZXhPZih0aGlzKTtcblxuICAgIC8vIERlc3Ryb3kgaGFuZGxlcnMuXG4gICAgdGhpcy5fcmVsZWFzZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fbWlncmF0ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fbGF5b3V0LmRlc3Ryb3koKTtcbiAgICB0aGlzLl92aXNpYmlsaXR5LmRlc3Ryb3koKTtcbiAgICB0aGlzLl9hbmltYXRlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9hbmltYXRlQ2hpbGQuZGVzdHJveSgpO1xuICAgIHRoaXMuX2RyYWdQbGFjZWhvbGRlci5kZXN0cm95KCk7XG4gICAgdGhpcy5fZHJhZyAmJiB0aGlzLl9kcmFnLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgaW5saW5lIHN0eWxlcy5cbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB0aGlzLl9jaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAvLyBSZW1vdmUgaXRlbSBjbGFzcy5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtQ2xhc3MpO1xuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSBHcmlkIGluc3RhbmNlIGlmIGl0IHN0aWxsIGV4aXN0cyB0aGVyZS5cbiAgICBpbmRleCA+IC0xICYmIGdyaWQuX2l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBSZW1vdmUgZWxlbWVudCBmcm9tIERPTS5cbiAgICByZW1vdmVFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgIC8vIFJlc2V0IHN0YXRlLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxheW91dCBhbGdvcml0aG0gZm9yIE11dXJpLiBCYXNlZCBvbiBNQVhSRUNUUyBhcHByb2FjaFxuICAgKiBhcyBkZXNjcmliZWQgYnkgSnVra2EgSnlsw6Rua2kgaW4gaGlzIHN1cnZleTogXCJBIFRob3VzYW5kIFdheXMgdG8gUGFjayB0aGVcbiAgICogQmluIC0gQSBQcmFjdGljYWwgQXBwcm9hY2ggdG8gVHdvLURpbWVuc2lvbmFsIFJlY3RhbmdsZSBCaW4gUGFja2luZy5cIi5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBQYWNrZXIoKSB7XG4gICAgdGhpcy5fc2xvdHMgPSBbXTtcbiAgICB0aGlzLl9zbG90U2l6ZXMgPSBbXTtcbiAgICB0aGlzLl9mcmVlU2xvdHMgPSBbXTtcbiAgICB0aGlzLl9uZXdTbG90cyA9IFtdO1xuICAgIHRoaXMuX3JlY3RJdGVtID0ge307XG4gICAgdGhpcy5fcmVjdFN0b3JlID0gW107XG4gICAgdGhpcy5fcmVjdElkID0gMDtcblxuICAgIC8vIFRoZSBsYXlvdXQgcmV0dXJuIGRhdGEsIHdoaWNoIHdpbGwgYmUgcG9wdWxhdGVkIGluIGdldExheW91dC5cbiAgICB0aGlzLl9sYXlvdXQgPSB7XG4gICAgICBzbG90czogbnVsbCxcbiAgICAgIHNldFdpZHRoOiBmYWxzZSxcbiAgICAgIHNldEhlaWdodDogZmFsc2UsXG4gICAgICB3aWR0aDogZmFsc2UsXG4gICAgICBoZWlnaHQ6IGZhbHNlXG4gICAgfTtcblxuICAgIC8vIEJpbmQgc29ydCBoYW5kbGVycy5cbiAgICB0aGlzLl9zb3J0UmVjdHNMZWZ0VG9wID0gdGhpcy5fc29ydFJlY3RzTGVmdFRvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NvcnRSZWN0c1RvcExlZnQgPSB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0LmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0l0ZW1bXX0gaXRlbXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICogQHBhcmFtIHtOdW1iZXJbXX0gW3Nsb3RzXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZmlsbEdhcHM9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaG9yaXpvbnRhbD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGlnblJpZ2h0PWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsaWduQm90dG9tPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7TGF5b3V0RGF0YX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24oaXRlbXMsIHdpZHRoLCBoZWlnaHQsIHNsb3RzLCBvcHRpb25zKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICB2YXIgZmlsbEdhcHMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuZmlsbEdhcHMpO1xuICAgIHZhciBpc0hvcml6b250YWwgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuaG9yaXpvbnRhbCk7XG4gICAgdmFyIGFsaWduUmlnaHQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuYWxpZ25SaWdodCk7XG4gICAgdmFyIGFsaWduQm90dG9tID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmFsaWduQm90dG9tKTtcbiAgICB2YXIgcm91bmRpbmcgPSAhIShvcHRpb25zICYmIG9wdGlvbnMucm91bmRpbmcpO1xuICAgIHZhciBzbG90U2l6ZXMgPSB0aGlzLl9zbG90U2l6ZXM7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZXNldCBsYXlvdXQgZGF0YS5cbiAgICBsYXlvdXQuc2xvdHMgPSBzbG90cyA/IHNsb3RzIDogdGhpcy5fc2xvdHM7XG4gICAgbGF5b3V0LndpZHRoID0gaXNIb3Jpem9udGFsID8gMCA6IHJvdW5kaW5nID8gTWF0aC5yb3VuZCh3aWR0aCkgOiB3aWR0aDtcbiAgICBsYXlvdXQuaGVpZ2h0ID0gIWlzSG9yaXpvbnRhbCA/IDAgOiByb3VuZGluZyA/IE1hdGgucm91bmQoaGVpZ2h0KSA6IGhlaWdodDtcbiAgICBsYXlvdXQuc2V0V2lkdGggPSBpc0hvcml6b250YWw7XG4gICAgbGF5b3V0LnNldEhlaWdodCA9ICFpc0hvcml6b250YWw7XG5cbiAgICAvLyBNYWtlIHN1cmUgc2xvdHMgYW5kIHNsb3Qgc2l6ZSBhcnJheXMgYXJlIHJlc2V0LlxuICAgIGxheW91dC5zbG90cy5sZW5ndGggPSAwO1xuICAgIHNsb3RTaXplcy5sZW5ndGggPSAwO1xuXG4gICAgLy8gTm8gbmVlZCB0byBnbyBmdXJ0aGVyIGlmIGl0ZW1zIGRvIG5vdCBleGlzdC5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuIGxheW91dDtcblxuICAgIC8vIEZpbmQgc2xvdHMgZm9yIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fYWRkU2xvdChpdGVtc1tpXSwgaXNIb3Jpem9udGFsLCBmaWxsR2Fwcywgcm91bmRpbmcsIGFsaWduUmlnaHQgfHwgYWxpZ25Cb3R0b20pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBhbGlnbm1lbnQgaXMgc2V0IHRvIHJpZ2h0IHdlIG5lZWQgdG8gYWRqdXN0IHRoZSByZXN1bHRzLlxuICAgIGlmIChhbGlnblJpZ2h0KSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGF5b3V0LnNsb3RzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgIGxheW91dC5zbG90c1tpXSA9IGxheW91dC53aWR0aCAtIChsYXlvdXQuc2xvdHNbaV0gKyBzbG90U2l6ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBhbGlnbm1lbnQgaXMgc2V0IHRvIGJvdHRvbSB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgcmVzdWx0cy5cbiAgICBpZiAoYWxpZ25Cb3R0b20pIHtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBsYXlvdXQuc2xvdHMubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgbGF5b3V0LnNsb3RzW2ldID0gbGF5b3V0LmhlaWdodCAtIChsYXlvdXQuc2xvdHNbaV0gKyBzbG90U2l6ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IHNsb3RzIGFycmF5cyBhbmQgcmVjdCBpZC5cbiAgICBzbG90U2l6ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcmVlU2xvdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9uZXdTbG90cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX3JlY3RJZCA9IDA7XG5cbiAgICByZXR1cm4gbGF5b3V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcG9zaXRpb24gZm9yIHRoZSBsYXlvdXQgaXRlbS4gUmV0dXJucyB0aGUgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAqIG9mIHRoZSBpdGVtIGluIHBpeGVscy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNIb3Jpem9udGFsXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmlsbEdhcHNcbiAgICogQHBhcmFtIHtCb29sZWFufSByb3VuZGluZ1xuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9hZGRTbG90ID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlcHMgPSAwLjAwMTtcbiAgICB2YXIgaXRlbVNsb3QgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSwgaXNIb3Jpem9udGFsLCBmaWxsR2Fwcywgcm91bmRpbmcsIHRyYWNrU2l6ZSkge1xuICAgICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICAgIHZhciBmcmVlU2xvdHMgPSB0aGlzLl9mcmVlU2xvdHM7XG4gICAgICB2YXIgbmV3U2xvdHMgPSB0aGlzLl9uZXdTbG90cztcbiAgICAgIHZhciByZWN0O1xuICAgICAgdmFyIHJlY3RJZDtcbiAgICAgIHZhciBwb3RlbnRpYWxTbG90cztcbiAgICAgIHZhciBpZ25vcmVDdXJyZW50U2xvdHM7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBpaTtcblxuICAgICAgLy8gUmVzZXQgbmV3IHNsb3RzLlxuICAgICAgbmV3U2xvdHMubGVuZ3RoID0gMDtcblxuICAgICAgLy8gU2V0IGl0ZW0gc2xvdCBpbml0aWFsIGRhdGEuXG4gICAgICBpdGVtU2xvdC5sZWZ0ID0gbnVsbDtcbiAgICAgIGl0ZW1TbG90LnRvcCA9IG51bGw7XG4gICAgICBpdGVtU2xvdC53aWR0aCA9IGl0ZW0uX3dpZHRoICsgaXRlbS5fbWFyZ2luTGVmdCArIGl0ZW0uX21hcmdpblJpZ2h0O1xuICAgICAgaXRlbVNsb3QuaGVpZ2h0ID0gaXRlbS5faGVpZ2h0ICsgaXRlbS5fbWFyZ2luVG9wICsgaXRlbS5fbWFyZ2luQm90dG9tO1xuXG4gICAgICAvLyBSb3VuZCBpdGVtIHNsb3Qgd2lkdGggYW5kIGhlaWdodCBpZiBuZWVkZWQuXG4gICAgICBpZiAocm91bmRpbmcpIHtcbiAgICAgICAgaXRlbVNsb3Qud2lkdGggPSBNYXRoLnJvdW5kKGl0ZW1TbG90LndpZHRoKTtcbiAgICAgICAgaXRlbVNsb3QuaGVpZ2h0ID0gTWF0aC5yb3VuZChpdGVtU2xvdC5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcnkgdG8gZmluZCBhIHNsb3QgZm9yIHRoZSBpdGVtLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGZyZWVTbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZWN0SWQgPSBmcmVlU2xvdHNbaV07XG4gICAgICAgIGlmICghcmVjdElkKSBjb250aW51ZTtcbiAgICAgICAgcmVjdCA9IHRoaXMuX2dldFJlY3QocmVjdElkKTtcbiAgICAgICAgaWYgKGl0ZW1TbG90LndpZHRoIDw9IHJlY3Qud2lkdGggKyBlcHMgJiYgaXRlbVNsb3QuaGVpZ2h0IDw9IHJlY3QuaGVpZ2h0ICsgZXBzKSB7XG4gICAgICAgICAgaXRlbVNsb3QubGVmdCA9IHJlY3QubGVmdDtcbiAgICAgICAgICBpdGVtU2xvdC50b3AgPSByZWN0LnRvcDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBzbG90IHdhcyBmb3VuZCBmb3IgdGhlIGl0ZW0uXG4gICAgICBpZiAoaXRlbVNsb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgaXRlbSBpbiB0byB0aGUgYm90dG9tIGxlZnQgKHZlcnRpY2FsIG1vZGUpIG9yIHRvcCByaWdodFxuICAgICAgICAvLyAoaG9yaXpvbnRhbCBtb2RlKSBvZiB0aGUgZ3JpZC5cbiAgICAgICAgaXRlbVNsb3QubGVmdCA9ICFpc0hvcml6b250YWwgPyAwIDogbGF5b3V0LndpZHRoO1xuICAgICAgICBpdGVtU2xvdC50b3AgPSAhaXNIb3Jpem9udGFsID8gbGF5b3V0LmhlaWdodCA6IDA7XG5cbiAgICAgICAgLy8gSWYgZ2FwcyBkb24ndCBuZWVkIGZpbGxpbmcgZG8gbm90IGFkZCBhbnkgY3VycmVudCBzbG90cyB0byB0aGUgbmV3XG4gICAgICAgIC8vIHNsb3RzIGFycmF5LlxuICAgICAgICBpZiAoIWZpbGxHYXBzKSB7XG4gICAgICAgICAgaWdub3JlQ3VycmVudFNsb3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJbiB2ZXJ0aWNhbCBtb2RlLCBpZiB0aGUgaXRlbSdzIGJvdHRvbSBvdmVybGFwcyB0aGUgZ3JpZCdzIGJvdHRvbS5cbiAgICAgIGlmICghaXNIb3Jpem9udGFsICYmIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCA+IGxheW91dC5oZWlnaHQpIHtcbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgbGVmdCBlZGdlLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgPiAwKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaCh0aGlzLl9hZGRSZWN0KDAsIGxheW91dC5oZWlnaHQsIGl0ZW1TbG90LmxlZnQsIEluZmluaXR5KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSByaWdodCBlZGdlLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCA8IGxheW91dC53aWR0aCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgICBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGgsXG4gICAgICAgICAgICAgIGxheW91dC5oZWlnaHQsXG4gICAgICAgICAgICAgIGxheW91dC53aWR0aCAtIGl0ZW1TbG90LmxlZnQgLSBpdGVtU2xvdC53aWR0aCxcbiAgICAgICAgICAgICAgSW5maW5pdHlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGdyaWQgaGVpZ2h0LlxuICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICAvLyBJbiBob3Jpem9udGFsIG1vZGUsIGlmIHRoZSBpdGVtJ3MgcmlnaHQgb3ZlcmxhcHMgdGhlIGdyaWQncyByaWdodCBlZGdlLlxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCAmJiBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGggPiBsYXlvdXQud2lkdGgpIHtcbiAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgYWxpZ25lZCB0byB0aGUgdG9wLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgICAgaWYgKGl0ZW1TbG90LnRvcCA+IDApIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKHRoaXMuX2FkZFJlY3QobGF5b3V0LndpZHRoLCAwLCBJbmZpbml0eSwgaXRlbVNsb3QudG9wKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSBib3R0b20sIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0IDwgbGF5b3V0LmhlaWdodCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgICBsYXlvdXQud2lkdGgsXG4gICAgICAgICAgICAgIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCxcbiAgICAgICAgICAgICAgSW5maW5pdHksXG4gICAgICAgICAgICAgIGxheW91dC5oZWlnaHQgLSBpdGVtU2xvdC50b3AgLSBpdGVtU2xvdC5oZWlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGdyaWQgd2lkdGguXG4gICAgICAgIGxheW91dC53aWR0aCA9IGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aDtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYW4gdXAgdGhlIGN1cnJlbnQgc2xvdHMgbWFraW5nIHN1cmUgdGhlcmUgYXJlIG5vIG9sZCBzbG90cyB0aGF0XG4gICAgICAvLyBvdmVybGFwIHdpdGggdGhlIGl0ZW0uIElmIGFuIG9sZCBzbG90IG92ZXJsYXBzIHdpdGggdGhlIGl0ZW0sIHNwbGl0IGl0XG4gICAgICAvLyBpbnRvIHNtYWxsZXIgc2xvdHMgaWYgbmVjZXNzYXJ5LlxuICAgICAgZm9yIChpID0gZmlsbEdhcHMgPyAwIDogaWdub3JlQ3VycmVudFNsb3RzID8gZnJlZVNsb3RzLmxlbmd0aCA6IGk7IGkgPCBmcmVlU2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVjdElkID0gZnJlZVNsb3RzW2ldO1xuICAgICAgICBpZiAoIXJlY3RJZCkgY29udGludWU7XG4gICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgIHBvdGVudGlhbFNsb3RzID0gdGhpcy5fc3BsaXRSZWN0KHJlY3QsIGl0ZW1TbG90KTtcbiAgICAgICAgZm9yIChpaSA9IDA7IGlpIDwgcG90ZW50aWFsU2xvdHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgcmVjdElkID0gcG90ZW50aWFsU2xvdHNbaWldO1xuICAgICAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICAgICAgLy8gTGV0J3MgbWFrZSBzdXJlIGhlcmUgdGhhdCB3ZSBoYXZlIGEgYmlnIGVub3VnaCBzbG90XG4gICAgICAgICAgLy8gKHdpZHRoL2hlaWdodCA+IDAuNDlweCkgYW5kIGFsc28gbGV0J3MgbWFrZSBzdXJlIHRoYXQgdGhlIHNsb3QgaXNcbiAgICAgICAgICAvLyB3aXRoaW4gdGhlIGJvdW5kYXJpZXMgb2YgdGhlIGdyaWQuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVjdC53aWR0aCA+IDAuNDkgJiZcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ID4gMC40OSAmJlxuICAgICAgICAgICAgKCghaXNIb3Jpem9udGFsICYmIHJlY3QudG9wIDwgbGF5b3V0LmhlaWdodCkgfHxcbiAgICAgICAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPCBsYXlvdXQud2lkdGgpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbmV3U2xvdHMucHVzaChyZWN0SWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTYW5pdGl6ZSBuZXcgc2xvdHMuXG4gICAgICBpZiAobmV3U2xvdHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3B1cmdlUmVjdHMobmV3U2xvdHMpLnNvcnQoXG4gICAgICAgICAgaXNIb3Jpem9udGFsID8gdGhpcy5fc29ydFJlY3RzTGVmdFRvcCA6IHRoaXMuX3NvcnRSZWN0c1RvcExlZnRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGxheW91dCB3aWR0aC9oZWlnaHQuXG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIGxheW91dC53aWR0aCA9IE1hdGgubWF4KGxheW91dC53aWR0aCwgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxheW91dC5oZWlnaHQgPSBNYXRoLm1heChsYXlvdXQuaGVpZ2h0LCBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgaXRlbSBzbG90IGRhdGEgdG8gbGF5b3V0IHNsb3RzIChhbmQgc3RvcmUgdGhlIHNsb3Qgc2l6ZSBmb3IgbGF0ZXJcbiAgICAgIC8vIHVzYWdlIHRvbyBpZiBuZWNlc3NhcnkpLlxuICAgICAgbGF5b3V0LnNsb3RzLnB1c2goaXRlbVNsb3QubGVmdCwgaXRlbVNsb3QudG9wKTtcbiAgICAgIGlmICh0cmFja1NpemUpIHRoaXMuX3Nsb3RTaXplcy5wdXNoKGl0ZW1TbG90LndpZHRoLCBpdGVtU2xvdC5oZWlnaHQpO1xuXG4gICAgICAvLyBGcmVlL25ldyBzbG90cyBzd2l0Y2hlcm9vIVxuICAgICAgdGhpcy5fZnJlZVNsb3RzID0gbmV3U2xvdHM7XG4gICAgICB0aGlzLl9uZXdTbG90cyA9IGZyZWVTbG90cztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgcmVjdGFuZ2xlIHRvIHRoZSByZWN0YW5nbGUgc3RvcmUuIFJldHVybnMgdGhlIGlkIG9mIHRoZSBuZXdcbiAgICogcmVjdGFuZ2xlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVmdFxuICAgKiBAcGFyYW0ge051bWJlcn0gdG9wXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEByZXR1cm5zIHtSZWN0SWR9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9hZGRSZWN0ID0gZnVuY3Rpb24obGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIHJlY3RJZCA9ICsrdGhpcy5fcmVjdElkO1xuICAgIHZhciByZWN0U3RvcmUgPSB0aGlzLl9yZWN0U3RvcmU7XG5cbiAgICByZWN0U3RvcmVbcmVjdElkXSA9IGxlZnQgfHwgMDtcbiAgICByZWN0U3RvcmVbKyt0aGlzLl9yZWN0SWRdID0gdG9wIHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IHdpZHRoIHx8IDA7XG4gICAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IGhlaWdodCB8fCAwO1xuXG4gICAgcmV0dXJuIHJlY3RJZDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHJlY3RhbmdsZSBkYXRhIGZyb20gdGhlIHJlY3RhbmdsZSBzdG9yZSBieSBpZC4gT3B0aW9uYWxseSB5b3UgY2FuXG4gICAqIHByb3ZpZGUgYSB0YXJnZXQgb2JqZWN0IHdoZXJlIHRoZSByZWN0YW5nbGUgZGF0YSB3aWxsIGJlIHdyaXR0ZW4gaW4uIEJ5XG4gICAqIGRlZmF1bHQgYW4gaW50ZXJuYWwgb2JqZWN0IGlzIHJldXNlZCBhcyBhIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkfSBpZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldF1cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2dldFJlY3QgPSBmdW5jdGlvbihpZCwgdGFyZ2V0KSB7XG4gICAgdmFyIHJlY3RJdGVtID0gdGFyZ2V0ID8gdGFyZ2V0IDogdGhpcy5fcmVjdEl0ZW07XG4gICAgdmFyIHJlY3RTdG9yZSA9IHRoaXMuX3JlY3RTdG9yZTtcblxuICAgIHJlY3RJdGVtLmxlZnQgPSByZWN0U3RvcmVbaWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0udG9wID0gcmVjdFN0b3JlWysraWRdIHx8IDA7XG4gICAgcmVjdEl0ZW0ud2lkdGggPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcbiAgICByZWN0SXRlbS5oZWlnaHQgPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcblxuICAgIHJldHVybiByZWN0SXRlbTtcbiAgfTtcblxuICAvKipcbiAgICogUHVuY2ggYSBob2xlIGludG8gYSByZWN0YW5nbGUgYW5kIHNwbGl0IHRoZSByZW1haW5pbmcgYXJlYSBpbnRvIHNtYWxsZXJcbiAgICogcmVjdGFuZ2xlcyAoNCBhdCBtYXgpLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gcmVjdFxuICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gaG9sZVxuICAgKiBAcmV0dXJucyB7UmVjdElkW119XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9zcGxpdFJlY3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdCwgaG9sZSkge1xuICAgICAgLy8gUmVzZXQgb2xkIHJlc3VsdHMuXG4gICAgICByZXN1bHRzLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIElmIHRoZSByZWN0IGRvZXMgbm90IG92ZXJsYXAgd2l0aCB0aGUgaG9sZSBhZGQgcmVjdCB0byB0aGUgcmV0dXJuIGRhdGFcbiAgICAgIC8vIGFzIGlzLlxuICAgICAgaWYgKCF0aGlzLl9kb1JlY3RzT3ZlcmxhcChyZWN0LCBob2xlKSkge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cblxuICAgICAgLy8gTGVmdCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LmxlZnQgPCBob2xlLmxlZnQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgaG9sZS5sZWZ0IC0gcmVjdC5sZWZ0LCByZWN0LmhlaWdodCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSaWdodCBzcGxpdC5cbiAgICAgIGlmIChyZWN0LmxlZnQgKyByZWN0LndpZHRoID4gaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCkge1xuICAgICAgICByZXN1bHRzLnB1c2goXG4gICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgIGhvbGUubGVmdCArIGhvbGUud2lkdGgsXG4gICAgICAgICAgICByZWN0LnRvcCxcbiAgICAgICAgICAgIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLSAoaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCksXG4gICAgICAgICAgICByZWN0LmhlaWdodFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9wIHNwbGl0LlxuICAgICAgaWYgKHJlY3QudG9wIDwgaG9sZS50b3ApIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX2FkZFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgaG9sZS50b3AgLSByZWN0LnRvcCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBCb3R0b20gc3BsaXQuXG4gICAgICBpZiAocmVjdC50b3AgKyByZWN0LmhlaWdodCA+IGhvbGUudG9wICsgaG9sZS5oZWlnaHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICByZWN0LmxlZnQsXG4gICAgICAgICAgICBob2xlLnRvcCArIGhvbGUuaGVpZ2h0LFxuICAgICAgICAgICAgcmVjdC53aWR0aCxcbiAgICAgICAgICAgIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLSAoaG9sZS50b3AgKyBob2xlLmhlaWdodClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byByZWN0YW5nbGVzIG92ZXJsYXAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fZG9SZWN0c092ZXJsYXAgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuICEoXG4gICAgICBhLmxlZnQgKyBhLndpZHRoIDw9IGIubGVmdCB8fFxuICAgICAgYi5sZWZ0ICsgYi53aWR0aCA8PSBhLmxlZnQgfHxcbiAgICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgfHxcbiAgICAgIGIudG9wICsgYi5oZWlnaHQgPD0gYS50b3BcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHJlY3RhbmdsZSBpcyBmdWxseSB3aXRoaW4gYW5vdGhlciByZWN0YW5nbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBhXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5faXNSZWN0V2l0aGluUmVjdCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5sZWZ0ID49IGIubGVmdCAmJlxuICAgICAgYS50b3AgPj0gYi50b3AgJiZcbiAgICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0ICsgYi53aWR0aCAmJlxuICAgICAgYS50b3AgKyBhLmhlaWdodCA8PSBiLnRvcCArIGIuaGVpZ2h0XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogTG9vcHMgdGhyb3VnaCBhbiBhcnJheSBvZiByZWN0YW5nbGUgaWRzIGFuZCByZXNldHMgYWxsIHRoYXQgYXJlIGZ1bGx5XG4gICAqIHdpdGhpbiBhbm90aGVyIHJlY3RhbmdsZSBpbiB0aGUgYXJyYXkuIFJlc2V0dGluZyBpbiB0aGlzIGNhc2UgbWVhbnMgdGhhdFxuICAgKiB0aGUgcmVjdGFuZ2xlIGlkIHZhbHVlIGlzIHJlcGxhY2VkIHdpdGggemVyby5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWRbXX0gcmVjdElkc1xuICAgKiBAcmV0dXJucyB7UmVjdElkW119XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9wdXJnZVJlY3RzID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWN0QSA9IHt9O1xuICAgIHZhciByZWN0QiA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihyZWN0SWRzKSB7XG4gICAgICB2YXIgaSA9IHJlY3RJZHMubGVuZ3RoO1xuICAgICAgdmFyIGlpO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlpID0gcmVjdElkcy5sZW5ndGg7XG4gICAgICAgIGlmICghcmVjdElkc1tpXSkgY29udGludWU7XG4gICAgICAgIHRoaXMuX2dldFJlY3QocmVjdElkc1tpXSwgcmVjdEEpO1xuICAgICAgICB3aGlsZSAoaWktLSkge1xuICAgICAgICAgIGlmICghcmVjdElkc1tpaV0gfHwgaSA9PT0gaWkpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1JlY3RXaXRoaW5SZWN0KHJlY3RBLCB0aGlzLl9nZXRSZWN0KHJlY3RJZHNbaWldLCByZWN0QikpKSB7XG4gICAgICAgICAgICByZWN0SWRzW2ldID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdElkcztcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBTb3J0IHJlY3RhbmdsZXMgd2l0aCB0b3AtbGVmdCBncmF2aXR5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYUlkXG4gICAqIEBwYXJhbSB7UmVjdElkfSBiSWRcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3NvcnRSZWN0c1RvcExlZnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY3RBID0ge307XG4gICAgdmFyIHJlY3RCID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFJZCwgYklkKSB7XG4gICAgICB0aGlzLl9nZXRSZWN0KGFJZCwgcmVjdEEpO1xuICAgICAgdGhpcy5fZ2V0UmVjdChiSWQsIHJlY3RCKTtcbiAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgcmV0dXJuIHJlY3RBLnRvcCA8IHJlY3RCLnRvcCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS50b3AgPiByZWN0Qi50b3AgPyAxIDpcbiAgICAgICAgICAgICByZWN0QS5sZWZ0IDwgcmVjdEIubGVmdCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS5sZWZ0ID4gcmVjdEIubGVmdCA/IDEgOiAwO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIFNvcnQgcmVjdGFuZ2xlcyB3aXRoIGxlZnQtdG9wIGdyYXZpdHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkfSBhSWRcbiAgICogQHBhcmFtIHtSZWN0SWR9IGJJZFxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fc29ydFJlY3RzTGVmdFRvcCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjdEEgPSB7fTtcbiAgICB2YXIgcmVjdEIgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24oYUlkLCBiSWQpIHtcbiAgICAgIHRoaXMuX2dldFJlY3QoYUlkLCByZWN0QSk7XG4gICAgICB0aGlzLl9nZXRSZWN0KGJJZCwgcmVjdEIpO1xuICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICByZXR1cm4gcmVjdEEubGVmdCA8IHJlY3RCLmxlZnQgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEubGVmdCA+IHJlY3RCLmxlZnQgPyAxIDpcbiAgICAgICAgICAgICByZWN0QS50b3AgPCByZWN0Qi50b3AgPyAtMSA6XG4gICAgICAgICAgICAgcmVjdEEudG9wID4gcmVjdEIudG9wID8gMSA6IDA7XG4gICAgfTtcbiAgfSkoKTtcblxuICB2YXIgaHRtbENvbGxlY3Rpb25UeXBlID0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJztcbiAgdmFyIG5vZGVMaXN0VHlwZSA9ICdbb2JqZWN0IE5vZGVMaXN0XSc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBub2RlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc05vZGVMaXN0KHZhbCkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgcmV0dXJuIHR5cGUgPT09IGh0bWxDb2xsZWN0aW9uVHlwZSB8fCB0eXBlID09PSBub2RlTGlzdFR5cGU7XG4gIH1cblxuICB2YXIgb2JqZWN0VHlwZSA9ICdvYmplY3QnO1xuICB2YXIgb2JqZWN0VG9TdHJpbmdUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gb2JqZWN0VHlwZSAmJiB0b1N0cmluZy5jYWxsKHZhbCkgPT09IG9iamVjdFRvU3RyaW5nVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGFuIGFycmF5IG9yIGNsb25lcyBhbiBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB0YXJnZXRcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gdG9BcnJheSh0YXJnZXQpIHtcbiAgICByZXR1cm4gaXNOb2RlTGlzdCh0YXJnZXQpID8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0KSA6IEFycmF5LnByb3RvdHlwZS5jb25jYXQodGFyZ2V0KTtcbiAgfVxuXG4gIHZhciBwYWNrZXIgPSBuZXcgUGFja2VyKCk7XG4gIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuICB2YXIgbnVtYmVyVHlwZSQxID0gJ251bWJlcic7XG4gIHZhciBzdHJpbmdUeXBlID0gJ3N0cmluZyc7XG4gIHZhciBpbnN0YW50TGF5b3V0ID0gJ2luc3RhbnQnO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxTdHJpbmcpfSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHs/KEhUTUxFbGVtZW50W118Tm9kZUxpc3R8U3RyaW5nKX0gW29wdGlvbnMuaXRlbXNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zaG93RHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc2hvd0Vhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnZpc2libGVTdHlsZXNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5oaWRlRHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaGlkZUVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmhpZGRlblN0eWxlc11cbiAgICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gW29wdGlvbnMubGF5b3V0XVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5maWxsR2Fwcz1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuaG9yaXpvbnRhbD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuYWxpZ25SaWdodD1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQuYWxpZ25Cb3R0b209ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LnJvdW5kaW5nPXRydWVdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TnVtYmVyKX0gW29wdGlvbnMubGF5b3V0T25SZXNpemU9MTAwXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dE9uSW5pdD10cnVlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubGF5b3V0RHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubGF5b3V0RWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zLnNvcnREYXRhPW51bGxdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZHJhZ0VuYWJsZWQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7P0h0bWxFbGVtZW50fSBbb3B0aW9ucy5kcmFnQ29udGFpbmVyPW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGVdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU3RhcnRQcmVkaWNhdGUuZGlzdGFuY2U9MF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZS5kZWxheT0wXVxuICAgKiBAcGFyYW0geyhCb29sZWFufFN0cmluZyl9IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZS5oYW5kbGU9ZmFsc2VdXG4gICAqIEBwYXJhbSB7P1N0cmluZ30gW29wdGlvbnMuZHJhZ0F4aXNdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58RnVuY3Rpb24pfSBbb3B0aW9ucy5kcmFnU29ydD10cnVlXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLnNvcnRJbnRlcnZhbD0xMDBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3MubWluRHJhZ0Rpc3RhbmNlPTEwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRIZXVyaXN0aWNzLm1pbkJvdW5jZUJhY2tBbmdsZT0xXVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxPYmplY3QpfSBbb3B0aW9ucy5kcmFnU29ydFByZWRpY2F0ZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0UHJlZGljYXRlLnRocmVzaG9sZD01MF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRyYWdTb3J0UHJlZGljYXRlLmFjdGlvbj1cIm1vdmVcIl1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdSZWxlYXNlRHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZHJhZ1JlbGVhc2VFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kcmFnQ3NzUHJvcHNdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXJdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmVuYWJsZWQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuZHVyYXRpb249MzAwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5jcmVhdGVFbGVtZW50PW51bGxdXG4gICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIub25DcmVhdGU9bnVsbF1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5vblJlbW92ZT1udWxsXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY29udGFpbmVyQ2xhc3M9XCJtdXVyaVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbUNsYXNzPVwibXV1cmktaXRlbVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVZpc2libGVDbGFzcz1cIm11dXJpLWl0ZW0tdmlzaWJsZVwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbUhpZGRlbkNsYXNzPVwibXV1cmktaXRlbS1oaWRkZW5cIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1Qb3NpdGlvbmluZ0NsYXNzPVwibXV1cmktaXRlbS1wb3NpdGlvbmluZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbURyYWdnaW5nQ2xhc3M9XCJtdXVyaS1pdGVtLWRyYWdnaW5nXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtUmVsZWFzaW5nQ2xhc3M9XCJtdXVyaS1pdGVtLXJlbGVhc2luZ1wiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVBsYWNlaG9sZGVyQ2xhc3M9XCJtdXVyaS1pdGVtLXBsYWNlaG9sZGVyXCJdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEdyaWQoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciBpbnN0ID0gdGhpcztcbiAgICB2YXIgc2V0dGluZ3M7XG4gICAgdmFyIGl0ZW1zO1xuICAgIHZhciBsYXlvdXRPblJlc2l6ZTtcblxuICAgIC8vIEFsbG93IHBhc3NpbmcgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmcuIFN0b3JlIGVsZW1lbnQgZm9yIGluc3RhbmNlLlxuICAgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID1cbiAgICAgIHR5cGVvZiBlbGVtZW50ID09PSBzdHJpbmdUeXBlID8gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIGNvbnRhaW5lciBlbGVtZW50IGlzIG5vdCBib2R5IGVsZW1lbnQgb3IgZG9lcyBub3RcbiAgICAvLyBleGlzdCB3aXRoaW4gdGhlIGJvZHkgZWxlbWVudC5cbiAgICB2YXIgaXNFbGVtZW50SW5Eb20gPSBlbGVtZW50LmdldFJvb3ROb2RlXG4gICAgICA/IGVsZW1lbnQuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA9PT0gZG9jdW1lbnRcbiAgICAgIDogd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnMoZWxlbWVudCk7XG4gICAgaWYgKCFpc0VsZW1lbnRJbkRvbSB8fCBlbGVtZW50ID09PSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRhaW5lciBlbGVtZW50IG11c3QgYmUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2Ugc2V0dGluZ3MgYnkgbWVyZ2luZyB0aGUgb3B0aW9ucyB3aXRoIGRlZmF1bHQgb3B0aW9ucy5cbiAgICBzZXR0aW5ncyA9IHRoaXMuX3NldHRpbmdzID0gbWVyZ2VTZXR0aW5ncyhHcmlkLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIC8vIFNhbml0aXplIGRyYWdTb3J0IHNldHRpbmcuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHNldHRpbmdzLmRyYWdTb3J0KSkge1xuICAgICAgc2V0dGluZ3MuZHJhZ1NvcnQgPSAhIXNldHRpbmdzLmRyYWdTb3J0O1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBpbnN0YW5jZSBpZCBhbmQgc3RvcmUgaXQgdG8gdGhlIGdyaWQgaW5zdGFuY2VzIGNvbGxlY3Rpb24uXG4gICAgdGhpcy5faWQgPSBjcmVhdGVVaWQoKTtcbiAgICBncmlkSW5zdGFuY2VzW3RoaXMuX2lkXSA9IGluc3Q7XG5cbiAgICAvLyBEZXN0cm95ZWQgZmxhZy5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gVGhlIGxheW91dCBvYmplY3QgKG11dGF0ZWQgb24gZXZlcnkgbGF5b3V0KS5cbiAgICB0aGlzLl9sYXlvdXQgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIHNsb3RzOiBbXSxcbiAgICAgIHNldFdpZHRoOiBmYWxzZSxcbiAgICAgIHNldEhlaWdodDogZmFsc2UsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgcHJpdmF0ZSBFbWl0dGVyIGluc3RhbmNlLlxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuXG4gICAgLy8gQWRkIGNvbnRhaW5lciBlbGVtZW50J3MgY2xhc3MgbmFtZS5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5jb250YWluZXJDbGFzcyk7XG5cbiAgICAvLyBDcmVhdGUgaW5pdGlhbCBpdGVtcy5cbiAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgIGl0ZW1zID0gc2V0dGluZ3MuaXRlbXM7XG4gICAgaWYgKHR5cGVvZiBpdGVtcyA9PT0gc3RyaW5nVHlwZSkge1xuICAgICAgdG9BcnJheShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW1FbGVtZW50KSB7XG4gICAgICAgIGlmIChpdGVtcyA9PT0gJyonIHx8IGVsZW1lbnRNYXRjaGVzKGl0ZW1FbGVtZW50LCBpdGVtcykpIHtcbiAgICAgICAgICBpbnN0Ll9pdGVtcy5wdXNoKG5ldyBJdGVtKGluc3QsIGl0ZW1FbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgfHwgaXNOb2RlTGlzdChpdGVtcykpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdG9BcnJheShpdGVtcykubWFwKGZ1bmN0aW9uKGl0ZW1FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgSXRlbShpbnN0LCBpdGVtRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXRPblJlc2l6ZSBvcHRpb24gaXMgYSB2YWxpZCBudW1iZXIgc2FuaXRpemUgaXQgYW5kIGJpbmQgdGhlIHJlc2l6ZVxuICAgIC8vIGhhbmRsZXIuXG4gICAgbGF5b3V0T25SZXNpemUgPSBzZXR0aW5ncy5sYXlvdXRPblJlc2l6ZTtcbiAgICBpZiAodHlwZW9mIGxheW91dE9uUmVzaXplICE9PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgIGxheW91dE9uUmVzaXplID0gbGF5b3V0T25SZXNpemUgPT09IHRydWUgPyAwIDogLTE7XG4gICAgfVxuICAgIGlmIChsYXlvdXRPblJlc2l6ZSA+PSAwKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIChpbnN0Ll9yZXNpemVIYW5kbGVyID0gZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaW5zdC5yZWZyZXNoSXRlbXMoKS5sYXlvdXQoKTtcbiAgICAgICAgfSwgbGF5b3V0T25SZXNpemUpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBMYXlvdXQgb24gaW5pdCBpZiBuZWNlc3NhcnkuXG4gICAgaWYgKHNldHRpbmdzLmxheW91dE9uSW5pdCkge1xuICAgICAgdGhpcy5sYXlvdXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm9wZXJ0aWVzXG4gICAqICoqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1cbiAgICovXG4gIEdyaWQuSXRlbSA9IEl0ZW07XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbUxheW91dFxuICAgKi9cbiAgR3JpZC5JdGVtTGF5b3V0ID0gSXRlbUxheW91dDtcblxuICAvKipcbiAgICogQHNlZSBJdGVtVmlzaWJpbGl0eVxuICAgKi9cbiAgR3JpZC5JdGVtVmlzaWJpbGl0eSA9IEl0ZW1WaXNpYmlsaXR5O1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1NaWdyYXRlXG4gICAqL1xuICBHcmlkLkl0ZW1NaWdyYXRlID0gSXRlbU1pZ3JhdGU7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbUFuaW1hdGVcbiAgICovXG4gIEdyaWQuSXRlbUFuaW1hdGUgPSBJdGVtQW5pbWF0ZTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtRHJhZ1xuICAgKi9cbiAgR3JpZC5JdGVtRHJhZyA9IEl0ZW1EcmFnO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1SZWxlYXNlXG4gICAqL1xuICBHcmlkLkl0ZW1SZWxlYXNlID0gSXRlbVJlbGVhc2U7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbURyYWdQbGFjZWhvbGRlclxuICAgKi9cbiAgR3JpZC5JdGVtRHJhZ1BsYWNlaG9sZGVyID0gSXRlbURyYWdQbGFjZWhvbGRlcjtcblxuICAvKipcbiAgICogQHNlZSBFbWl0dGVyXG4gICAqL1xuICBHcmlkLkVtaXR0ZXIgPSBFbWl0dGVyO1xuXG4gIC8qKlxuICAgKiBAc2VlIERyYWdnZXJcbiAgICovXG4gIEdyaWQuRHJhZ2dlciA9IERyYWdnZXI7XG5cbiAgLyoqXG4gICAqIEBzZWUgUGFja2VyXG4gICAqL1xuICBHcmlkLlBhY2tlciA9IFBhY2tlcjtcblxuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zIGZvciBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkXG4gICAqL1xuICBHcmlkLmRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIEl0ZW0gZWxlbWVudHNcbiAgICBpdGVtczogJyonLFxuXG4gICAgLy8gRGVmYXVsdCBzaG93IGFuaW1hdGlvblxuICAgIHNob3dEdXJhdGlvbjogMzAwLFxuICAgIHNob3dFYXNpbmc6ICdlYXNlJyxcblxuICAgIC8vIERlZmF1bHQgaGlkZSBhbmltYXRpb25cbiAgICBoaWRlRHVyYXRpb246IDMwMCxcbiAgICBoaWRlRWFzaW5nOiAnZWFzZScsXG5cbiAgICAvLyBJdGVtJ3MgdmlzaWJsZS9oaWRkZW4gc3RhdGUgc3R5bGVzXG4gICAgdmlzaWJsZVN0eWxlczoge1xuICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgfSxcbiAgICBoaWRkZW5TdHlsZXM6IHtcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuNSknXG4gICAgfSxcblxuICAgIC8vIExheW91dFxuICAgIGxheW91dDoge1xuICAgICAgZmlsbEdhcHM6IGZhbHNlLFxuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICBhbGlnblJpZ2h0OiBmYWxzZSxcbiAgICAgIGFsaWduQm90dG9tOiBmYWxzZSxcbiAgICAgIHJvdW5kaW5nOiB0cnVlXG4gICAgfSxcbiAgICBsYXlvdXRPblJlc2l6ZTogMTAwLFxuICAgIGxheW91dE9uSW5pdDogdHJ1ZSxcbiAgICBsYXlvdXREdXJhdGlvbjogMzAwLFxuICAgIGxheW91dEVhc2luZzogJ2Vhc2UnLFxuXG4gICAgLy8gU29ydGluZ1xuICAgIHNvcnREYXRhOiBudWxsLFxuXG4gICAgLy8gRHJhZyAmIERyb3BcbiAgICBkcmFnRW5hYmxlZDogZmFsc2UsXG4gICAgZHJhZ0NvbnRhaW5lcjogbnVsbCxcbiAgICBkcmFnU3RhcnRQcmVkaWNhdGU6IHtcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBoYW5kbGU6IGZhbHNlXG4gICAgfSxcbiAgICBkcmFnQXhpczogbnVsbCxcbiAgICBkcmFnU29ydDogdHJ1ZSxcbiAgICBkcmFnU29ydEhldXJpc3RpY3M6IHtcbiAgICAgIHNvcnRJbnRlcnZhbDogMTAwLFxuICAgICAgbWluRHJhZ0Rpc3RhbmNlOiAxMCxcbiAgICAgIG1pbkJvdW5jZUJhY2tBbmdsZTogMVxuICAgIH0sXG4gICAgZHJhZ1NvcnRQcmVkaWNhdGU6IHtcbiAgICAgIHRocmVzaG9sZDogNTAsXG4gICAgICBhY3Rpb246IGFjdGlvbk1vdmVcbiAgICB9LFxuICAgIGRyYWdSZWxlYXNlRHVyYXRpb246IDMwMCxcbiAgICBkcmFnUmVsZWFzZUVhc2luZzogJ2Vhc2UnLFxuICAgIGRyYWdDc3NQcm9wczoge1xuICAgICAgdG91Y2hBY3Rpb246ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHVzZXJEcmFnOiAnbm9uZScsXG4gICAgICB0YXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgdG91Y2hDYWxsb3V0OiAnbm9uZScsXG4gICAgICBjb250ZW50Wm9vbWluZzogJ25vbmUnXG4gICAgfSxcbiAgICBkcmFnUGxhY2Vob2xkZXI6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2UnLFxuICAgICAgY3JlYXRlRWxlbWVudDogbnVsbCxcbiAgICAgIG9uQ3JlYXRlOiBudWxsLFxuICAgICAgb25SZW1vdmU6IG51bGxcbiAgICB9LFxuXG4gICAgLy8gQ2xhc3NuYW1lc1xuICAgIGNvbnRhaW5lckNsYXNzOiAnbXV1cmknLFxuICAgIGl0ZW1DbGFzczogJ211dXJpLWl0ZW0nLFxuICAgIGl0ZW1WaXNpYmxlQ2xhc3M6ICdtdXVyaS1pdGVtLXNob3duJyxcbiAgICBpdGVtSGlkZGVuQ2xhc3M6ICdtdXVyaS1pdGVtLWhpZGRlbicsXG4gICAgaXRlbVBvc2l0aW9uaW5nQ2xhc3M6ICdtdXVyaS1pdGVtLXBvc2l0aW9uaW5nJyxcbiAgICBpdGVtRHJhZ2dpbmdDbGFzczogJ211dXJpLWl0ZW0tZHJhZ2dpbmcnLFxuICAgIGl0ZW1SZWxlYXNpbmdDbGFzczogJ211dXJpLWl0ZW0tcmVsZWFzaW5nJyxcbiAgICBpdGVtUGxhY2Vob2xkZXJDbGFzczogJ211dXJpLWl0ZW0tcGxhY2Vob2xkZXInXG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGFsbCBpdGVtcy4gT3B0aW9uYWxseSB5b3UgY2FuIHByb3ZpZGUgc3BlY2lmaWMgdGFyZ2V0cyAoZWxlbWVudHMgYW5kXG4gICAqIGluZGljZXMpLiBOb3RlIHRoYXQgdGhlIHJldHVybmVkIGFycmF5IGlzIG5vdCB0aGUgc2FtZSBvYmplY3QgdXNlZCBieSB0aGVcbiAgICogaW5zdGFuY2Ugc28gbW9kaWZ5aW5nIGl0IHdpbGwgbm90IGFmZmVjdCBpbnN0YW5jZSdzIGl0ZW1zLiBBbGwgaXRlbXMgdGhhdFxuICAgKiBhcmUgbm90IGZvdW5kIGFyZSBvbWl0dGVkIGZyb20gdGhlIHJldHVybmVkIGFycmF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW3RhcmdldHNdXG4gICAqIEByZXR1cm5zIHtJdGVtW119XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5nZXRJdGVtcyA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICAvLyBSZXR1cm4gYWxsIGl0ZW1zIGltbWVkaWF0ZWx5IGlmIG5vIHRhcmdldHMgd2VyZSBwcm92aWRlZCBvciBpZiB0aGVcbiAgICAvLyBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICghdGFyZ2V0cyAmJiB0YXJnZXRzICE9PSAwKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKDApO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBbXTtcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0b0FycmF5KHRhcmdldHMpO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gSWYgdGFyZ2V0IGl0ZW1zIGFyZSBkZWZpbmVkIHJldHVybiBmaWx0ZXJlZCByZXN1bHRzLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IHRoaXMuX2dldEl0ZW0odGFyZ2V0SXRlbXNbaV0pO1xuICAgICAgaXRlbSAmJiByZXQucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNhY2hlZCBkaW1lbnNpb25zIG9mIHRoZSBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gW2l0ZW1zXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlZnJlc2hJdGVtcyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciB0YXJnZXRzID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0c1tpXS5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzb3J0IGRhdGEgb2YgdGhlIGluc3RhbmNlJ3MgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBbaXRlbXNdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUucmVmcmVzaFNvcnREYXRhID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldEl0ZW1zW2ldLl9yZWZyZXNoU29ydERhdGEoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU3luY2hyb25pemUgdGhlIGl0ZW0gZWxlbWVudHMgdG8gbWF0Y2ggdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgRE9NLlxuICAgKiBUaGlzIGNvbWVzIGhhbmR5IGlmIHlvdSBuZWVkIHRvIGtlZXAgdGhlIERPTSBzdHJ1Y3R1cmUgbWF0Y2hlZCB3aXRoIHRoZVxuICAgKiBvcmRlciBvZiB0aGUgaXRlbXMuIE5vdGUgdGhhdCBpZiBhbiBpdGVtJ3MgZWxlbWVudCBpcyBub3QgY3VycmVudGx5IGEgY2hpbGRcbiAgICogb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50IChpZiBpdCBpcyBkcmFnZ2VkIGZvciBleGFtcGxlKSBpdCBpcyBpZ25vcmVkIGFuZFxuICAgKiBsZWZ0IHVudG91Y2hlZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zeW5jaHJvbml6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB2YXIgZnJhZ21lbnQ7XG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIGluIG9yZGVyIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudCA9IGl0ZW1zW2ldLl9lbGVtZW50O1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlID09PSBjb250YWluZXIpIHtcbiAgICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZyYWdtZW50KSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgc3luY2hyb25pemUgZXZlbnQuXG4gICAgdGhpcy5fZW1pdChldmVudFN5bmNocm9uaXplKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIGFwcGx5IGl0ZW0gcG9zaXRpb25zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0xheW91dENhbGxiYWNrfSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGluc3QgPSB0aGlzO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5fdXBkYXRlTGF5b3V0KCk7XG4gICAgdmFyIGxheW91dElkID0gbGF5b3V0LmlkO1xuICAgIHZhciBpdGVtc0xlbmd0aCA9IGxheW91dC5pdGVtcy5sZW5ndGg7XG4gICAgdmFyIGNvdW50ZXIgPSBpdGVtc0xlbmd0aDtcbiAgICB2YXIgaXNCb3JkZXJCb3g7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBUaGUgZmluaXNoIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGNoZWNraW5nIGlmIGFsbCB0aGUgaXRlbXNcbiAgICAvLyBoYXZlIGxhaWQgb3V0IHlldC4gQWZ0ZXIgYWxsIGl0ZW1zIGhhdmUgZmluaXNoZWQgdGhlaXIgYW5pbWF0aW9ucyBjYWxsXG4gICAgLy8gY2FsbGJhY2sgYW5kIGVtaXQgbGF5b3V0RW5kIGV2ZW50LiBPbmx5IGVtaXQgbGF5b3V0RW5kIGV2ZW50IGlmIHRoZXJlXG4gICAgLy8gaGFzbid0IGJlZW4gYSBuZXcgbGF5b3V0IGNhbGwgZHVyaW5nIHRoaXMgbGF5b3V0LlxuICAgIGZ1bmN0aW9uIHRyeUZpbmlzaCgpIHtcbiAgICAgIGlmICgtLWNvdW50ZXIgPiAwKSByZXR1cm47XG5cbiAgICAgIHZhciBoYXNMYXlvdXRDaGFuZ2VkID0gaW5zdC5fbGF5b3V0LmlkICE9PSBsYXlvdXRJZDtcbiAgICAgIHZhciBjYWxsYmFjayA9IGlzRnVuY3Rpb24oaW5zdGFudCkgPyBpbnN0YW50IDogb25GaW5pc2g7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICBjYWxsYmFjayhoYXNMYXlvdXRDaGFuZ2VkLCBsYXlvdXQuaXRlbXMuc2xpY2UoMCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc0xheW91dENoYW5nZWQgJiYgaW5zdC5faGFzTGlzdGVuZXJzKGV2ZW50TGF5b3V0RW5kKSkge1xuICAgICAgICBpbnN0Ll9lbWl0KGV2ZW50TGF5b3V0RW5kLCBsYXlvdXQuaXRlbXMuc2xpY2UoMCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGdyaWQncyB3aWR0aCBvciBoZWlnaHQgd2FzIG1vZGlmaWVkLCB3ZSBuZWVkIHRvIHVwZGF0ZSBpdCdzIGNhY2hlZFxuICAgIC8vIGRpbWVuc2lvbnMuIEFsc28ga2VlcCBpbiBtaW5kIHRoYXQgZ3JpZCdzIGNhY2hlZCB3aWR0aC9oZWlnaHQgc2hvdWxkXG4gICAgLy8gYWx3YXlzIGVxdWFsIHRvIHdoYXQgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB3b3VsZCByZXR1cm4sIHNvXG4gICAgLy8gdGhlcmVmb3JlIHdlIG5lZWQgdG8gYWRkIHRoZSBncmlkIGVsZW1lbnQncyBib3JkZXJzIHRvIHRoZSBkaW1lbnNpb25zIGlmXG4gICAgLy8gaXQncyBib3gtc2l6aW5nIGlzIGJvcmRlci1ib3guIE5vdGUgdGhhdCB3ZSBzdXBwb3J0IHByb3ZpZGluZyB0aGVcbiAgICAvLyBkaW1lbnNpb25zIGFzIGEgc3RyaW5nIGhlcmUgdG9vIHNvIHRoYXQgb25lIGNhbiBkZWZpbmUgdGhlIHVuaXQgb2YgdGhlXG4gICAgLy8gZGltZW5zaW9ucywgaW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBkbyB0aGUgYm9yZGVyLWJveCBjaGVjay5cbiAgICBpZiAoXG4gICAgICAobGF5b3V0LnNldEhlaWdodCAmJiB0eXBlb2YgbGF5b3V0LmhlaWdodCA9PT0gbnVtYmVyVHlwZSQxKSB8fFxuICAgICAgKGxheW91dC5zZXRXaWR0aCAmJiB0eXBlb2YgbGF5b3V0LndpZHRoID09PSBudW1iZXJUeXBlJDEpXG4gICAgKSB7XG4gICAgICBpc0JvcmRlckJveCA9IGdldFN0eWxlKGVsZW1lbnQsICdib3gtc2l6aW5nJykgPT09ICdib3JkZXItYm94JztcbiAgICB9XG4gICAgaWYgKGxheW91dC5zZXRIZWlnaHQpIHtcbiAgICAgIGlmICh0eXBlb2YgbGF5b3V0LmhlaWdodCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cbiAgICAgICAgICAoaXNCb3JkZXJCb3ggPyBsYXlvdXQuaGVpZ2h0ICsgdGhpcy5fYm9yZGVyVG9wICsgdGhpcy5fYm9yZGVyQm90dG9tIDogbGF5b3V0LmhlaWdodCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBsYXlvdXQuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGF5b3V0LnNldFdpZHRoKSB7XG4gICAgICBpZiAodHlwZW9mIGxheW91dC53aWR0aCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPVxuICAgICAgICAgIChpc0JvcmRlckJveCA/IGxheW91dC53aWR0aCArIHRoaXMuX2JvcmRlckxlZnQgKyB0aGlzLl9ib3JkZXJSaWdodCA6IGxheW91dC53aWR0aCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGxheW91dC53aWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbWl0IGxheW91dFN0YXJ0IGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBpcyBpbnRlbnRpb25hbGx5IGVtaXR0ZWQgYWZ0ZXIgdGhlXG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnQncyBkaW1lbnNpb25zIGFyZSBzZXQsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZXJlIHdvdWxkIGJlXG4gICAgLy8gbm8gaG9vayBmb3IgcmVhY3RpbmcgdG8gY29udGFpbmVyIGRpbWVuc2lvbiBjaGFuZ2VzLlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRMYXlvdXRTdGFydCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRMYXlvdXRTdGFydCwgbGF5b3V0Lml0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaXRlbXMgbGV0J3MgZmluaXNoIHF1aWNrbHkuXG4gICAgaWYgKCFpdGVtc0xlbmd0aCkge1xuICAgICAgdHJ5RmluaXNoKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgaXRlbXMgbGV0J3MgcG9zaXRpb24gdGhlbS5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXNMZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IGxheW91dC5pdGVtc1tpXTtcbiAgICAgIGlmICghaXRlbSkgY29udGludWU7XG5cbiAgICAgIC8vIFVwZGF0ZSBpdGVtJ3MgcG9zaXRpb24uXG4gICAgICBpdGVtLl9sZWZ0ID0gbGF5b3V0LnNsb3RzW2kgKiAyXTtcbiAgICAgIGl0ZW0uX3RvcCA9IGxheW91dC5zbG90c1tpICogMiArIDFdO1xuXG4gICAgICAvLyBMYXlvdXQgaXRlbSBpZiBpdCBpcyBub3QgZHJhZ2dlZC5cbiAgICAgIGl0ZW0uaXNEcmFnZ2luZygpID8gdHJ5RmluaXNoKCkgOiBpdGVtLl9sYXlvdXQuc3RhcnQoaW5zdGFudCA9PT0gdHJ1ZSwgdHJ5RmluaXNoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQWRkIG5ldyBpdGVtcyBieSBwcm92aWRpbmcgdGhlIGVsZW1lbnRzIHlvdSB3aXNoIHRvIGFkZCB0byB0aGUgaW5zdGFuY2UgYW5kXG4gICAqIG9wdGlvbmFsbHkgcHJvdmlkZSB0aGUgaW5kZXggd2hlcmUgeW91IHdhbnQgdGhlIGl0ZW1zIHRvIGJlIGluc2VydGVkIGludG8uXG4gICAqIEFsbCBlbGVtZW50cyB0aGF0IGFyZSBub3QgYWxyZWFkeSBjaGlsZHJlbiBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgd2lsbCBiZVxuICAgKiBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC4gSWYgYW4gZWxlbWVudCBoYXMgaXQncyBDU1NcbiAgICogZGlzcGxheSBwcm9wZXJ0eSBzZXQgdG8gXCJub25lXCIgaXQgd2lsbCBiZSBtYXJrZWQgYXMgaW5hY3RpdmUgZHVyaW5nIHRoZVxuICAgKiBpbml0aWF0aW9uIHByb2Nlc3MuIEFzIGxvbmcgYXMgdGhlIGl0ZW0gaXMgaW5hY3RpdmUgaXQgd2lsbCBub3QgYmUgcGFydCBvZlxuICAgKiB0aGUgbGF5b3V0LCBidXQgaXQgd2lsbCByZXRhaW4gaXQncyBpbmRleC4gWW91IGNhbiBhY3RpdmF0ZSBpdGVtcyBhdCBhbnlcbiAgICogcG9pbnQgd2l0aCBncmlkLnNob3coKSBtZXRob2QuIFRoaXMgbWV0aG9kIHdpbGwgYXV0b21hdGljYWxseSBjYWxsXG4gICAqIGdyaWQubGF5b3V0KCkgaWYgb25lIG9yIG1vcmUgb2YgdGhlIGFkZGVkIGVsZW1lbnRzIGFyZSB2aXNpYmxlLiBJZiBvbmx5XG4gICAqIGhpZGRlbiBpdGVtcyBhcmUgYWRkZWQgbm8gbGF5b3V0IHdpbGwgYmUgY2FsbGVkLiBBbGwgdGhlIG5ldyB2aXNpYmxlIGl0ZW1zXG4gICAqIGFyZSBwb3NpdGlvbmVkIHdpdGhvdXQgYW5pbWF0aW9uIGR1cmluZyB0aGVpciBmaXJzdCBsYXlvdXQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fEhUTUxFbGVtZW50W10pfSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5pbmRleD0tMV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pc0FjdGl2ZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0l0ZW1bXX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICFlbGVtZW50cykgcmV0dXJuIFtdO1xuXG4gICAgdmFyIG5ld0l0ZW1zID0gdG9BcnJheShlbGVtZW50cyk7XG4gICAgaWYgKCFuZXdJdGVtcy5sZW5ndGgpIHJldHVybiBuZXdJdGVtcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIE1hcCBwcm92aWRlZCBlbGVtZW50cyBpbnRvIG5ldyBncmlkIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCBuZXdJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IG5ldyBJdGVtKHRoaXMsIG5ld0l0ZW1zW2ldLCBvcHRzLmlzQWN0aXZlKTtcbiAgICAgIG5ld0l0ZW1zW2ldID0gaXRlbTtcblxuICAgICAgLy8gSWYgdGhlIGl0ZW0gdG8gYmUgYWRkZWQgaXMgYWN0aXZlLCB3ZSBuZWVkIHRvIGRvIGEgbGF5b3V0LiBBbHNvLCB3ZVxuICAgICAgLy8gbmVlZCB0byBtYXJrIHRoZSBpdGVtIHdpdGggdGhlIHNraXBOZXh0QW5pbWF0aW9uIGZsYWcgdG8gbWFrZSBpdFxuICAgICAgLy8gcG9zaXRpb24gaW5zdGFudGx5ICh3aXRob3V0IGFuaW1hdGlvbikgZHVyaW5nIHRoZSBuZXh0IGxheW91dC4gV2l0aG91dFxuICAgICAgLy8gdGhlIGhhY2sgdGhlIGl0ZW0gd291bGQgYW5pbWF0ZSB0byBpdCdzIG5ldyBwb3NpdGlvbiBmcm9tIHRoZSBub3J0aHdlc3RcbiAgICAgIC8vIGNvcm5lciBvZiB0aGUgZ3JpZCwgd2hpY2ggZmVlbHMgYSBiaXQgYnVnZ3kgKGltaG8pLlxuICAgICAgaWYgKGl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICAgIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5fbGF5b3V0Ll9za2lwTmV4dEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBuZXcgaXRlbXMgdG8gdGhlIGl0ZW1zIGNvbGxlY3Rpb24gdG8gY29ycmVjdCBpbmRleC5cbiAgICBhcnJheUluc2VydChpdGVtcywgbmV3SXRlbXMsIG9wdHMuaW5kZXgpO1xuXG4gICAgLy8gRW1pdCBhZGQgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudEFkZCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnRBZGQsIG5ld0l0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgIGlmIChuZWVkc0xheW91dCAmJiBsYXlvdXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3SXRlbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpdGVtcyBmcm9tIHRoZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZW1vdmVFbGVtZW50cz1mYWxzZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0l0ZW1bXX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgYWxsSXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcyhpdGVtcyk7XG4gICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlbW92ZSB0aGUgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSB0YXJnZXRJdGVtc1tpXTtcbiAgICAgIGluZGljZXMucHVzaChhbGxJdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICAgIGlmIChpdGVtLl9pc0FjdGl2ZSkgbmVlZHNMYXlvdXQgPSB0cnVlO1xuICAgICAgaXRlbS5fZGVzdHJveShvcHRzLnJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHJlbW92ZSBldmVudC5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50UmVtb3ZlKSkge1xuICAgICAgdGhpcy5fZW1pdChldmVudFJlbW92ZSwgdGFyZ2V0SXRlbXMuc2xpY2UoMCksIGluZGljZXMpO1xuICAgIH1cblxuICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgaWYgKG5lZWRzTGF5b3V0ICYmIGxheW91dCkge1xuICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRJdGVtcztcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBpbnN0YW5jZSBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge1Nob3dDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9zZXRJdGVtc1Zpc2liaWxpdHkoaXRlbXMsIHRydWUsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlIGluc3RhbmNlIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7SGlkZUNhbGxiYWNrfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oaXRlbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3NldEl0ZW1zVmlzaWJpbGl0eShpdGVtcywgZmFsc2UsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgaXRlbXMuIEV4cGVjdHMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LCBhIHByZWRpY2F0ZSwgd2hpY2ggc2hvdWxkIGJlXG4gICAqIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nLiBUaGUgcHJlZGljYXRlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGZvciBldmVyeVxuICAgKiBpdGVtIGluIHRoZSBpbnN0YW5jZS4gSWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJlZGljYXRlIGlzIHRydXRoeSB0aGVcbiAgICogaXRlbSBpbiBxdWVzdGlvbiB3aWxsIGJlIHNob3duIGFuZCBvdGhlcndpc2UgaGlkZGVuLiBUaGUgcHJlZGljYXRlIGNhbGxiYWNrXG4gICAqIHJlY2VpdmVzIHRoZSBpdGVtIGluc3RhbmNlIGFzIGl0J3MgYXJndW1lbnQuIElmIHRoZSBwcmVkaWNhdGUgaXMgYSBzdHJpbmdcbiAgICogaXQgaXMgY29uc2lkZXJlZCB0byBiZSBhIHNlbGVjdG9yIGFuZCBpdCBpcyBjaGVja2VkIGFnYWluc3QgZXZlcnkgaXRlbVxuICAgKiBlbGVtZW50IGluIHRoZSBpbnN0YW5jZSB3aXRoIHRoZSBuYXRpdmUgZWxlbWVudC5tYXRjaGVzKCkgbWV0aG9kLiBBbGwgdGhlXG4gICAqIG1hdGNoaW5nIGl0ZW1zIHdpbGwgYmUgc2hvd24gYW5kIG90aGVycyBoaWRkZW4uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufFN0cmluZyl9IHByZWRpY2F0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtGaWx0ZXJDYWxsYmFja30gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24ocHJlZGljYXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pdGVtcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW1zVG9TaG93ID0gW107XG4gICAgdmFyIGl0ZW1zVG9IaWRlID0gW107XG4gICAgdmFyIGlzUHJlZGljYXRlU3RyaW5nID0gdHlwZW9mIHByZWRpY2F0ZSA9PT0gc3RyaW5nVHlwZTtcbiAgICB2YXIgaXNQcmVkaWNhdGVGbiA9IGlzRnVuY3Rpb24ocHJlZGljYXRlKTtcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgaXNJbnN0YW50ID0gb3B0cy5pbnN0YW50ID09PSB0cnVlO1xuICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgb25GaW5pc2ggPSBpc0Z1bmN0aW9uKG9wdHMub25GaW5pc2gpID8gb3B0cy5vbkZpbmlzaCA6IG51bGw7XG4gICAgdmFyIHRyeUZpbmlzaENvdW50ZXIgPSAtMTtcbiAgICB2YXIgdHJ5RmluaXNoID0gbm9vcDtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHdlIGhhdmUgb25GaW5pc2ggY2FsbGJhY2ssIGxldCdzIGNyZWF0ZSBwcm9wZXIgdHJ5RmluaXNoIGNhbGxiYWNrLlxuICAgIGlmIChvbkZpbmlzaCkge1xuICAgICAgdHJ5RmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICsrdHJ5RmluaXNoQ291bnRlciAmJiBvbkZpbmlzaChpdGVtc1RvU2hvdy5zbGljZSgwKSwgaXRlbXNUb0hpZGUuc2xpY2UoMCkpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB3aGljaCBpdGVtcyBuZWVkIHRvIGJlIHNob3duIGFuZCB3aGljaCBoaWRkZW4uXG4gICAgaWYgKGlzUHJlZGljYXRlRm4gfHwgaXNQcmVkaWNhdGVTdHJpbmcpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtID0gdGhpcy5faXRlbXNbaV07XG4gICAgICAgIGlmIChpc1ByZWRpY2F0ZUZuID8gcHJlZGljYXRlKGl0ZW0pIDogZWxlbWVudE1hdGNoZXMoaXRlbS5fZWxlbWVudCwgcHJlZGljYXRlKSkge1xuICAgICAgICAgIGl0ZW1zVG9TaG93LnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbXNUb0hpZGUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgaXRlbXMgdGhhdCBuZWVkIHRvIGJlIHNob3duLlxuICAgIGlmIChpdGVtc1RvU2hvdy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hvdyhpdGVtc1RvU2hvdywge1xuICAgICAgICBpbnN0YW50OiBpc0luc3RhbnQsXG4gICAgICAgIG9uRmluaXNoOiB0cnlGaW5pc2gsXG4gICAgICAgIGxheW91dDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnlGaW5pc2goKTtcbiAgICB9XG5cbiAgICAvLyBIaWRlIGl0ZW1zIHRoYXQgbmVlZCB0byBiZSBoaWRkZW4uXG4gICAgaWYgKGl0ZW1zVG9IaWRlLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaWRlKGl0ZW1zVG9IaWRlLCB7XG4gICAgICAgIGluc3RhbnQ6IGlzSW5zdGFudCxcbiAgICAgICAgb25GaW5pc2g6IHRyeUZpbmlzaCxcbiAgICAgICAgbGF5b3V0OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeUZpbmlzaCgpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgaXRlbXMgdG8gZmlsdGVyLlxuICAgIGlmIChpdGVtc1RvU2hvdy5sZW5ndGggfHwgaXRlbXNUb0hpZGUubGVuZ3RoKSB7XG4gICAgICAvLyBFbWl0IGZpbHRlciBldmVudC5cbiAgICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRGaWx0ZXIpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoZXZlbnRGaWx0ZXIsIGl0ZW1zVG9TaG93LnNsaWNlKDApLCBpdGVtc1RvSGlkZS5zbGljZSgwKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU29ydCBpdGVtcy4gVGhlcmUgYXJlIHRocmVlIHdheXMgdG8gc29ydCB0aGUgaXRlbXMuIFRoZSBmaXJzdCBpcyBzaW1wbHkgYnlcbiAgICogcHJvdmlkaW5nIGEgZnVuY3Rpb24gYXMgdGhlIGNvbXBhcmVyIHdoaWNoIHdvcmtzIGlkZW50aWNhbGx5IHRvIG5hdGl2ZVxuICAgKiBhcnJheSBzb3J0LiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc29ydCBieSB0aGUgc29ydCBkYXRhIHlvdSBoYXZlIHByb3ZpZGVkXG4gICAqIGluIHRoZSBpbnN0YW5jZSdzIG9wdGlvbnMuIEp1c3QgcHJvdmlkZSB0aGUgc29ydCBkYXRhIGtleShzKSBhcyBhIHN0cmluZ1xuICAgKiAoc2VwYXJhdGVkIGJ5IHNwYWNlKSBhbmQgdGhlIGl0ZW1zIHdpbGwgYmUgc29ydGVkIGJhc2VkIG9uIHRoZSBwcm92aWRlZFxuICAgKiBzb3J0IGRhdGEga2V5cy4gTGFzdGx5IHlvdSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byBwcm92aWRlIGEgcHJlc29ydGVkXG4gICAqIGFycmF5IG9mIGl0ZW1zIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBzeW5jIHRoZSBpbnRlcm5hbCBpdGVtcyBhcnJheSBpbiB0aGVcbiAgICogc2FtZSBvcmRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoRnVuY3Rpb258SXRlbVtdfFN0cmluZ3xTdHJpbmdbXSl9IGNvbXBhcmVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kZXNjZW5kaW5nPWZhbHNlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNvcnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvcnRDb21wYXJlcjtcbiAgICB2YXIgaXNEZXNjZW5kaW5nO1xuICAgIHZhciBvcmlnSXRlbXM7XG4gICAgdmFyIGluZGV4TWFwO1xuXG4gICAgZnVuY3Rpb24gcGFyc2VDcml0ZXJpYShkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbC5zcGxpdCgnOicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbmRleE1hcChpdGVtcykge1xuICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXRbaXRlbXNbaV0uX2lkXSA9IGk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBhcmVJbmRpY2VzKGl0ZW1BLCBpdGVtQikge1xuICAgICAgdmFyIGluZGV4QSA9IGluZGV4TWFwW2l0ZW1BLl9pZF07XG4gICAgICB2YXIgaW5kZXhCID0gaW5kZXhNYXBbaXRlbUIuX2lkXTtcbiAgICAgIHJldHVybiBpc0Rlc2NlbmRpbmcgPyBpbmRleEIgLSBpbmRleEEgOiBpbmRleEEgLSBpbmRleEI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdENvbXBhcmVyKGEsIGIpIHtcbiAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgdmFyIGNyaXRlcmlhTmFtZTtcbiAgICAgIHZhciBjcml0ZXJpYU9yZGVyO1xuICAgICAgdmFyIHZhbEE7XG4gICAgICB2YXIgdmFsQjtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsaXN0IG9mIHNvcnQgY3JpdGVyaWEuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRDb21wYXJlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIGNyaXRlcmlhIG5hbWUsIHdoaWNoIHNob3VsZCBtYXRjaCBhbiBpdGVtJ3Mgc29ydCBkYXRhIGtleS5cbiAgICAgICAgY3JpdGVyaWFOYW1lID0gc29ydENvbXBhcmVyW2ldWzBdO1xuICAgICAgICBjcml0ZXJpYU9yZGVyID0gc29ydENvbXBhcmVyW2ldWzFdO1xuXG4gICAgICAgIC8vIEdldCBpdGVtcycgY2FjaGVkIHNvcnQgdmFsdWVzIGZvciB0aGUgY3JpdGVyaWEuIElmIHRoZSBpdGVtIGhhcyBubyBzb3J0XG4gICAgICAgIC8vIGRhdGEgbGV0J3MgdXBkYXRlIHRoZSBpdGVtcyBzb3J0IGRhdGEgKHRoaXMgaXMgYSBsYXp5IGxvYWQgbWVjaGFuaXNtKS5cbiAgICAgICAgdmFsQSA9IChhLl9zb3J0RGF0YSA/IGEgOiBhLl9yZWZyZXNoU29ydERhdGEoKSkuX3NvcnREYXRhW2NyaXRlcmlhTmFtZV07XG4gICAgICAgIHZhbEIgPSAoYi5fc29ydERhdGEgPyBiIDogYi5fcmVmcmVzaFNvcnREYXRhKCkpLl9zb3J0RGF0YVtjcml0ZXJpYU5hbWVdO1xuXG4gICAgICAgIC8vIFNvcnQgdGhlIGl0ZW1zIGluIGRlc2NlbmRpbmcgb3JkZXIgaWYgZGVmaW5lZCBzbyBleHBsaWNpdGx5LiBPdGhlcndpc2VcbiAgICAgICAgLy8gc29ydCBpdGVtcyBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gICAgICAgIGlmIChjcml0ZXJpYU9yZGVyID09PSAnZGVzYycgfHwgKCFjcml0ZXJpYU9yZGVyICYmIGlzRGVzY2VuZGluZykpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWxCIDwgdmFsQSA/IC0xIDogdmFsQiA+IHZhbEEgPyAxIDogMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWxBIDwgdmFsQiA/IC0xIDogdmFsQSA+IHZhbEIgPyAxIDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgLTEgb3IgMSBhcyB0aGUgcmV0dXJuIHZhbHVlLCBsZXQncyByZXR1cm4gaXQgaW1tZWRpYXRlbHkuXG4gICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHZhbHVlcyBhcmUgZXF1YWwgbGV0J3MgY29tcGFyZSB0aGUgaXRlbSBpbmRpY2VzIHRvIG1ha2Ugc3VyZSB3ZVxuICAgICAgLy8gaGF2ZSBhIHN0YWJsZSBzb3J0LlxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgaWYgKCFpbmRleE1hcCkgaW5kZXhNYXAgPSBnZXRJbmRleE1hcChvcmlnSXRlbXMpO1xuICAgICAgICByZXN1bHQgPSBjb21wYXJlSW5kaWNlcyhhLCBiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3VzdG9tQ29tcGFyZXIoYSwgYikge1xuICAgICAgdmFyIHJlc3VsdCA9IHNvcnRDb21wYXJlcihhLCBiKTtcbiAgICAgIC8vIElmIGRlc2NlbmRpbmcgbGV0J3MgaW52ZXJ0IHRoZSByZXN1bHQgdmFsdWUuXG4gICAgICBpZiAoaXNEZXNjZW5kaW5nICYmIHJlc3VsdCkgcmVzdWx0ID0gLXJlc3VsdDtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCByZXN1bHQgKG5vdCB6ZXJvKSBsZXQncyByZXR1cm4gaXQgcmlnaHQgYXdheS5cbiAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAvLyBJZiByZXN1bHQgaXMgemVybyBsZXQncyBjb21wYXJlIHRoZSBpdGVtIGluZGljZXMgdG8gbWFrZSBzdXJlIHdlIGhhdmUgYVxuICAgICAgLy8gc3RhYmxlIHNvcnQuXG4gICAgICBpZiAoIWluZGV4TWFwKSBpbmRleE1hcCA9IGdldEluZGV4TWFwKG9yaWdJdGVtcyk7XG4gICAgICByZXR1cm4gY29tcGFyZUluZGljZXMoYSwgYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbXBhcmVyLCBvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5faXRlbXMubGVuZ3RoIDwgMikgcmV0dXJuIHRoaXM7XG5cbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgaTtcblxuICAgICAgLy8gU2V0dXAgcGFyZW50IHNjb3BlIGRhdGEuXG4gICAgICBzb3J0Q29tcGFyZXIgPSBjb21wYXJlcjtcbiAgICAgIGlzRGVzY2VuZGluZyA9ICEhb3B0cy5kZXNjZW5kaW5nO1xuICAgICAgb3JpZ0l0ZW1zID0gaXRlbXMuc2xpY2UoMCk7XG4gICAgICBpbmRleE1hcCA9IG51bGw7XG5cbiAgICAgIC8vIElmIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGRvIGEgbmF0aXZlIGFycmF5IHNvcnQuXG4gICAgICBpZiAoaXNGdW5jdGlvbihzb3J0Q29tcGFyZXIpKSB7XG4gICAgICAgIGl0ZW1zLnNvcnQoY3VzdG9tQ29tcGFyZXIpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGlmIHdlIGdvdCBhIHN0cmluZywgbGV0J3Mgc29ydCBieSB0aGUgc29ydCBkYXRhIGFzIHByb3ZpZGVkIGluXG4gICAgICAvLyB0aGUgaW5zdGFuY2UncyBvcHRpb25zLlxuICAgICAgZWxzZSBpZiAodHlwZW9mIHNvcnRDb21wYXJlciA9PT0gc3RyaW5nVHlwZSkge1xuICAgICAgICBzb3J0Q29tcGFyZXIgPSBwYXJzZUNyaXRlcmlhKGNvbXBhcmVyKTtcbiAgICAgICAgaXRlbXMuc29ydChkZWZhdWx0Q29tcGFyZXIpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGlmIHdlIGdvdCBhbiBhcnJheSwgbGV0J3MgYXNzdW1lIGl0J3MgYSBwcmVzb3J0ZWQgYXJyYXkgb2YgdGhlXG4gICAgICAvLyBpdGVtcyBhbmQgb3JkZXIgdGhlIGl0ZW1zIGJhc2VkIG9uIGl0LlxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3J0Q29tcGFyZXIpKSB7XG4gICAgICAgIGlmIChzb3J0Q29tcGFyZXIubGVuZ3RoICE9PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1snICsgbmFtZXNwYWNlICsgJ10gc29ydCByZWZlcmVuY2UgaXRlbXMgZG8gbm90IG1hdGNoIHdpdGggZ3JpZCBpdGVtcy4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc29ydENvbXBhcmVyLmluZGV4T2YoaXRlbXNbaV0pIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbJyArIG5hbWVzcGFjZSArICddIHNvcnQgcmVmZXJlbmNlIGl0ZW1zIGRvIG5vdCBtYXRjaCB3aXRoIGdyaWQgaXRlbXMuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1zW2ldID0gc29ydENvbXBhcmVyW2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rlc2NlbmRpbmcpIGl0ZW1zLnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBsZXQncyBqdXN0IHNraXAgaXQsIG5vdGhpbmcgd2UgY2FuIGRvIGhlcmUuXG4gICAgICBlbHNlIHtcbiAgICAgICAgLyoqIEB0b2RvIE1heWJlIHRocm93IGFuIGVycm9yIGhlcmU/ICovXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IHNvcnQgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50U29ydCkpIHtcbiAgICAgICAgdGhpcy5fZW1pdChldmVudFNvcnQsIGl0ZW1zLnNsaWNlKDApLCBvcmlnSXRlbXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBsYXlvdXQgaXMgbmVlZGVkLlxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIE1vdmUgaXRlbSB0byBhbm90aGVyIGluZGV4IG9yIGluIHBsYWNlIG9mIGFub3RoZXIgaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBpdGVtXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gcG9zaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuYWN0aW9uPVwibW92ZVwiXVxuICAgKiAgIC0gQWNjZXB0cyBlaXRoZXIgXCJtb3ZlXCIgb3IgXCJzd2FwXCIuXG4gICAqICAgLSBcIm1vdmVcIiBtb3ZlcyB0aGUgaXRlbSBpbiBwbGFjZSBvZiB0aGUgb3RoZXIgaXRlbS5cbiAgICogICAtIFwic3dhcFwiIHN3YXBzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbXMuXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGl0ZW0sIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IHRoaXMuX2l0ZW1zLmxlbmd0aCA8IDIpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBpc1N3YXAgPSBvcHRzLmFjdGlvbiA9PT0gYWN0aW9uU3dhcDtcbiAgICB2YXIgYWN0aW9uID0gaXNTd2FwID8gYWN0aW9uU3dhcCA6IGFjdGlvbk1vdmU7XG4gICAgdmFyIGZyb21JdGVtID0gdGhpcy5fZ2V0SXRlbShpdGVtKTtcbiAgICB2YXIgdG9JdGVtID0gdGhpcy5fZ2V0SXRlbShwb3NpdGlvbik7XG4gICAgdmFyIGZyb21JbmRleDtcbiAgICB2YXIgdG9JbmRleDtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgaXRlbXMgZXhpc3QgYW5kIGFyZSBub3QgdGhlIHNhbWUuXG4gICAgaWYgKGZyb21JdGVtICYmIHRvSXRlbSAmJiBmcm9tSXRlbSAhPT0gdG9JdGVtKSB7XG4gICAgICAvLyBHZXQgdGhlIGluZGljZXMgb2YgdGhlIGl0ZW1zLlxuICAgICAgZnJvbUluZGV4ID0gaXRlbXMuaW5kZXhPZihmcm9tSXRlbSk7XG4gICAgICB0b0luZGV4ID0gaXRlbXMuaW5kZXhPZih0b0l0ZW0pO1xuXG4gICAgICAvLyBEbyB0aGUgbW92ZS9zd2FwLlxuICAgICAgaWYgKGlzU3dhcCkge1xuICAgICAgICBhcnJheVN3YXAoaXRlbXMsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheU1vdmUoaXRlbXMsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgbW92ZSBldmVudC5cbiAgICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRNb3ZlKSkge1xuICAgICAgICB0aGlzLl9lbWl0KGV2ZW50TW92ZSwge1xuICAgICAgICAgIGl0ZW06IGZyb21JdGVtLFxuICAgICAgICAgIGZyb21JbmRleDogZnJvbUluZGV4LFxuICAgICAgICAgIHRvSW5kZXg6IHRvSW5kZXgsXG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU2VuZCBpdGVtIHRvIGFub3RoZXIgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBpdGVtXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW29wdGlvbnMuYXBwZW5kVG89ZG9jdW1lbnQuYm9keV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXRTZW5kZXI9dHJ1ZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXRSZWNlaXZlcj10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihpdGVtLCBncmlkLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCBncmlkLl9pc0Rlc3Ryb3llZCB8fCB0aGlzID09PSBncmlkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgdGFyZ2V0IGl0ZW0uXG4gICAgaXRlbSA9IHRoaXMuX2dldEl0ZW0oaXRlbSk7XG4gICAgaWYgKCFpdGVtKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBjb250YWluZXIgPSBvcHRzLmFwcGVuZFRvIHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICAgIHZhciBsYXlvdXRTZW5kZXIgPSBvcHRzLmxheW91dFNlbmRlciA/IG9wdHMubGF5b3V0U2VuZGVyIDogb3B0cy5sYXlvdXRTZW5kZXIgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbGF5b3V0UmVjZWl2ZXIgPSBvcHRzLmxheW91dFJlY2VpdmVyXG4gICAgICA/IG9wdHMubGF5b3V0UmVjZWl2ZXJcbiAgICAgIDogb3B0cy5sYXlvdXRSZWNlaXZlciA9PT0gdW5kZWZpbmVkO1xuXG4gICAgLy8gU3RhcnQgdGhlIG1pZ3JhdGlvbiBwcm9jZXNzLlxuICAgIGl0ZW0uX21pZ3JhdGUuc3RhcnQoZ3JpZCwgcG9zaXRpb24sIGNvbnRhaW5lcik7XG5cbiAgICAvLyBJZiBtaWdyYXRpb24gd2FzIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5IGFuZCB0aGUgaXRlbSBpcyBhY3RpdmUsIGxldCdzIGxheW91dFxuICAgIC8vIHRoZSBncmlkcy5cbiAgICBpZiAoaXRlbS5fbWlncmF0ZS5faXNBY3RpdmUgJiYgaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIGlmIChsYXlvdXRTZW5kZXIpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQoXG4gICAgICAgICAgbGF5b3V0U2VuZGVyID09PSBpbnN0YW50TGF5b3V0LFxuICAgICAgICAgIGlzRnVuY3Rpb24obGF5b3V0U2VuZGVyKSA/IGxheW91dFNlbmRlciA6IHVuZGVmaW5lZFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGxheW91dFJlY2VpdmVyKSB7XG4gICAgICAgIGdyaWQubGF5b3V0KFxuICAgICAgICAgIGxheW91dFJlY2VpdmVyID09PSBpbnN0YW50TGF5b3V0LFxuICAgICAgICAgIGlzRnVuY3Rpb24obGF5b3V0UmVjZWl2ZXIpID8gbGF5b3V0UmVjZWl2ZXIgOiB1bmRlZmluZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbW92ZUVsZW1lbnRzPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZW1vdmVFbGVtZW50cykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcy5zbGljZSgwKTtcbiAgICB2YXIgaTtcblxuICAgIC8vIFVuYmluZCB3aW5kb3cgcmVzaXplIGV2ZW50IGxpc3RlbmVyLlxuICAgIGlmICh0aGlzLl9yZXNpemVIYW5kbGVyKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplSGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gRGVzdHJveSBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW1zW2ldLl9kZXN0cm95KHJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBSZXN0b3JlIGNvbnRhaW5lci5cbiAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIHRoaXMuX3NldHRpbmdzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJyc7XG5cbiAgICAvLyBFbWl0IGRlc3Ryb3kgZXZlbnQgYW5kIHVuYmluZCBhbGwgZXZlbnRzLlxuICAgIHRoaXMuX2VtaXQoZXZlbnREZXN0cm95KTtcbiAgICB0aGlzLl9lbWl0dGVyLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSByZWZlcmVuY2UgZnJvbSB0aGUgZ3JpZCBpbnN0YW5jZXMgY29sbGVjdGlvbi5cbiAgICBncmlkSW5zdGFuY2VzW3RoaXMuX2lkXSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEZsYWcgaW5zdGFuY2UgYXMgZGVzdHJveWVkLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSdzIGl0ZW0gYnkgZWxlbWVudCBvciBieSBpbmRleC4gVGFyZ2V0IGNhbiBhbHNvIGJlIGFuIEl0ZW1cbiAgICogaW5zdGFuY2UgaW4gd2hpY2ggY2FzZSB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgaXRlbSBpZiBpdCBleGlzdHMgd2l0aGluXG4gICAqIHJlbGF0ZWQgR3JpZCBpbnN0YW5jZS4gSWYgbm90aGluZyBpcyBmb3VuZCB3aXRoIHRoZSBwcm92aWRlZCB0YXJnZXQsIG51bGxcbiAgICogaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IFt0YXJnZXRdXG4gICAqIEByZXR1cm5zIHs/SXRlbX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9nZXRJdGVtID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgLy8gSWYgbm8gdGFyZ2V0IGlzIHNwZWNpZmllZCBvciB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLCByZXR1cm4gbnVsbC5cbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgKCF0YXJnZXQgJiYgdGFyZ2V0ICE9PSAwKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGFyZ2V0IGlzIG51bWJlciByZXR1cm4gdGhlIGl0ZW0gaW4gdGhhdCBpbmRleC4gSWYgdGhlIG51bWJlciBpcyBsb3dlclxuICAgIC8vIHRoYW4gemVybyBsb29rIGZvciB0aGUgaXRlbSBzdGFydGluZyBmcm9tIHRoZSBlbmQgb2YgdGhlIGl0ZW1zIGFycmF5LiBGb3JcbiAgICAvLyBleGFtcGxlIC0xIGZvciB0aGUgbGFzdCBpdGVtLCAtMiBmb3IgdGhlIHNlY29uZCBsYXN0IGl0ZW0sIGV0Yy5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gbnVtYmVyVHlwZSQxKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXNbdGFyZ2V0ID4gLTEgPyB0YXJnZXQgOiB0aGlzLl9pdGVtcy5sZW5ndGggKyB0YXJnZXRdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhbiBpbnN0YW5jZSBvZiBJdGVtIHJldHVybiBpdCBpZiBpdCBpcyBhdHRhY2hlZCB0byB0aGlzXG4gICAgLy8gR3JpZCBpbnN0YW5jZSwgb3RoZXJ3aXNlIHJldHVybiBudWxsLlxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJdGVtKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0Ll9ncmlkSWQgPT09IHRoaXMuX2lkID8gdGFyZ2V0IDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBJbiBvdGhlciBjYXNlcyBsZXQncyBhc3N1bWUgdGhhdCB0aGUgdGFyZ2V0IGlzIGFuIGVsZW1lbnQsIHNvIGxldCdzIHRyeVxuICAgIC8vIHRvIGZpbmQgYW4gaXRlbSB0aGF0IG1hdGNoZXMgdGhlIGVsZW1lbnQgYW5kIHJldHVybiBpdC4gSWYgaXRlbSBpcyBub3RcbiAgICAvLyBmb3VuZCByZXR1cm4gbnVsbC5cbiAgICAvKiogQHRvZG8gVGhpcyBjb3VsZCBiZSBtYWRlIGEgbG90IGZhc3RlciBieSB1c2luZyBNYXAvV2Vha01hcCBvZiBlbGVtZW50cy4gKi9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXRlbXNbaV0uX2VsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlcyBhbmQgdXBkYXRlcyBpbnN0YW5jZSdzIGxheW91dCBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0xheW91dERhdGF9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9zZXR0aW5ncy5sYXlvdXQ7XG4gICAgdmFyIHdpZHRoO1xuICAgIHZhciBoZWlnaHQ7XG4gICAgdmFyIG5ld0xheW91dDtcbiAgICB2YXIgaTtcblxuICAgIC8vIExldCdzIGluY3JlbWVudCBsYXlvdXQgaWQuXG4gICAgKytsYXlvdXQuaWQ7XG5cbiAgICAvLyBMZXQncyB1cGRhdGUgbGF5b3V0IGl0ZW1zXG4gICAgbGF5b3V0Lml0ZW1zLmxlbmd0aCA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXRlbXNbaV0uX2lzQWN0aXZlKSBsYXlvdXQuaXRlbXMucHVzaCh0aGlzLl9pdGVtc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gTGV0J3MgbWFrZSBzdXJlIHdlIGhhdmUgdGhlIGNvcnJlY3QgY29udGFpbmVyIGRpbWVuc2lvbnMuXG4gICAgdGhpcy5fcmVmcmVzaERpbWVuc2lvbnMoKTtcblxuICAgIC8vIENhbGN1bGF0ZSBjb250YWluZXIgd2lkdGggYW5kIGhlaWdodCAod2l0aG91dCBib3JkZXJzKS5cbiAgICB3aWR0aCA9IHRoaXMuX3dpZHRoIC0gdGhpcy5fYm9yZGVyTGVmdCAtIHRoaXMuX2JvcmRlclJpZ2h0O1xuICAgIGhlaWdodCA9IHRoaXMuX2hlaWdodCAtIHRoaXMuX2JvcmRlclRvcCAtIHRoaXMuX2JvcmRlckJvdHRvbTtcblxuICAgIC8vIENhbGN1bGF0ZSBuZXcgbGF5b3V0LlxuICAgIGlmIChpc0Z1bmN0aW9uKHNldHRpbmdzKSkge1xuICAgICAgbmV3TGF5b3V0ID0gc2V0dGluZ3MobGF5b3V0Lml0ZW1zLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TGF5b3V0ID0gcGFja2VyLmdldExheW91dChsYXlvdXQuaXRlbXMsIHdpZHRoLCBoZWlnaHQsIGxheW91dC5zbG90cywgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIExldCdzIHVwZGF0ZSB0aGUgZ3JpZCdzIGxheW91dC5cbiAgICBsYXlvdXQuc2xvdHMgPSBuZXdMYXlvdXQuc2xvdHM7XG4gICAgbGF5b3V0LnNldFdpZHRoID0gQm9vbGVhbihuZXdMYXlvdXQuc2V0V2lkdGgpO1xuICAgIGxheW91dC5zZXRIZWlnaHQgPSBCb29sZWFuKG5ld0xheW91dC5zZXRIZWlnaHQpO1xuICAgIGxheW91dC53aWR0aCA9IG5ld0xheW91dC53aWR0aDtcbiAgICBsYXlvdXQuaGVpZ2h0ID0gbmV3TGF5b3V0LmhlaWdodDtcblxuICAgIHJldHVybiBsYXlvdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtaXQgYSBncmlkIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7Li4uKn0gW2FyZ11cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9lbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0LmFwcGx5KHRoaXMuX2VtaXR0ZXIsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgZXZlbnRzIGxpc3RlbmVycyBmb3IgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5faGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZW1pdHRlci5fZXZlbnRzW2V2ZW50XTtcbiAgICByZXR1cm4gISEobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29udGFpbmVyJ3Mgd2lkdGgsIGhlaWdodCBhbmQgb2Zmc2V0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlQm91bmRpbmdSZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLl93aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgdGhpcy5fbGVmdCA9IHJlY3QubGVmdDtcbiAgICB0aGlzLl90b3AgPSByZWN0LnRvcDtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGNvbnRhaW5lcidzIGJvcmRlciBzaXplcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbGVmdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJpZ2h0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9wXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYm90dG9tXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fdXBkYXRlQm9yZGVycyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICBpZiAobGVmdCkgdGhpcy5fYm9yZGVyTGVmdCA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLWxlZnQtd2lkdGgnKTtcbiAgICBpZiAocmlnaHQpIHRoaXMuX2JvcmRlclJpZ2h0ID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItcmlnaHQtd2lkdGgnKTtcbiAgICBpZiAodG9wKSB0aGlzLl9ib3JkZXJUb3AgPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci10b3Atd2lkdGgnKTtcbiAgICBpZiAoYm90dG9tKSB0aGlzLl9ib3JkZXJCb3R0b20gPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1ib3R0b20td2lkdGgnKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVmcmVzaCBhbGwgb2YgY29udGFpbmVyJ3MgaW50ZXJuYWwgZGltZW5zaW9ucyBhbmQgb2Zmc2V0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fcmVmcmVzaERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLl91cGRhdGVCb3JkZXJzKDEsIDEsIDEsIDEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93IG9yIGhpZGUgR3JpZCBpbnN0YW5jZSdzIGl0ZW1zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IGl0ZW1zXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9WaXNpYmxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0geyhTaG93Q2FsbGJhY2t8SGlkZUNhbGxiYWNrKX0gW29wdGlvbnMub25GaW5pc2hdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5fc2V0SXRlbXNWaXNpYmlsaXR5ID0gZnVuY3Rpb24oaXRlbXMsIHRvVmlzaWJsZSwgb3B0aW9ucykge1xuICAgIHZhciBncmlkID0gdGhpcztcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgaXNJbnN0YW50ID0gb3B0cy5pbnN0YW50ID09PSB0cnVlO1xuICAgIHZhciBjYWxsYmFjayA9IG9wdHMub25GaW5pc2g7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBjb3VudGVyID0gdGFyZ2V0SXRlbXMubGVuZ3RoO1xuICAgIHZhciBzdGFydEV2ZW50ID0gdG9WaXNpYmxlID8gZXZlbnRTaG93U3RhcnQgOiBldmVudEhpZGVTdGFydDtcbiAgICB2YXIgZW5kRXZlbnQgPSB0b1Zpc2libGUgPyBldmVudFNob3dFbmQgOiBldmVudEhpZGVFbmQ7XG4gICAgdmFyIG1ldGhvZCA9IHRvVmlzaWJsZSA/ICdzaG93JyA6ICdoaWRlJztcbiAgICB2YXIgbmVlZHNMYXlvdXQgPSBmYWxzZTtcbiAgICB2YXIgY29tcGxldGVkSXRlbXMgPSBbXTtcbiAgICB2YXIgaGlkZGVuSXRlbXMgPSBbXTtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBpdGVtcyBjYWxsIHRoZSBjYWxsYmFjaywgYnV0IGRvbid0IGVtaXQgYW55IGV2ZW50cy5cbiAgICBpZiAoIWNvdW50ZXIpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkgY2FsbGJhY2sodGFyZ2V0SXRlbXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEVtaXQgc2hvd1N0YXJ0L2hpZGVTdGFydCBldmVudC5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKHN0YXJ0RXZlbnQpKSB7XG4gICAgICB0aGlzLl9lbWl0KHN0YXJ0RXZlbnQsIHRhcmdldEl0ZW1zLnNsaWNlKDApKTtcbiAgICB9XG5cbiAgICAvLyBTaG93L2hpZGUgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gdGFyZ2V0SXRlbXNbaV07XG5cbiAgICAgIC8vIElmIGluYWN0aXZlIGl0ZW0gaXMgc2hvd24gb3IgYWN0aXZlIGl0ZW0gaXMgaGlkZGVuIHdlIG5lZWQgdG8gZG9cbiAgICAgIC8vIGxheW91dC5cbiAgICAgIGlmICgodG9WaXNpYmxlICYmICFpdGVtLl9pc0FjdGl2ZSkgfHwgKCF0b1Zpc2libGUgJiYgaXRlbS5faXNBY3RpdmUpKSB7XG4gICAgICAgIG5lZWRzTGF5b3V0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaW5hY3RpdmUgaXRlbSBpcyBzaG93biB3ZSBhbHNvIG5lZWQgdG8gZG8gYSBsaXR0bGUgaGFjayB0byBtYWtlIHRoZVxuICAgICAgLy8gaXRlbSBub3QgYW5pbWF0ZSBpdCdzIG5leHQgcG9zaXRpb25pbmcgKGxheW91dCkuXG4gICAgICBpZiAodG9WaXNpYmxlICYmICFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgICBpdGVtLl9sYXlvdXQuX3NraXBOZXh0QW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYSBoaWRkZW4gaXRlbSBpcyBiZWluZyBzaG93biB3ZSBuZWVkIHRvIHJlZnJlc2ggdGhlIGl0ZW0nc1xuICAgICAgLy8gZGltZW5zaW9ucy5cbiAgICAgIGlmICh0b1Zpc2libGUgJiYgaXRlbS5fdmlzaWJpbGl0eS5faXNIaWRkZW4pIHtcbiAgICAgICAgaGlkZGVuSXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2hvdy9oaWRlIHRoZSBpdGVtLlxuICAgICAgaXRlbS5fdmlzaWJpbGl0eVttZXRob2RdKGlzSW5zdGFudCwgZnVuY3Rpb24oaW50ZXJydXB0ZWQsIGl0ZW0pIHtcbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgaXRlbSdzIGFuaW1hdGlvbiB3YXMgbm90IGludGVycnVwdGVkIGFkZCBpdCB0byB0aGVcbiAgICAgICAgLy8gY29tcGxldGVkSXRlbXMgYXJyYXkuXG4gICAgICAgIGlmICghaW50ZXJydXB0ZWQpIGNvbXBsZXRlZEl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgLy8gSWYgYWxsIGl0ZW1zIGhhdmUgZmluaXNoZWQgdGhlaXIgYW5pbWF0aW9ucyBjYWxsIHRoZSBjYWxsYmFja1xuICAgICAgICAvLyBhbmQgZW1pdCBzaG93RW5kL2hpZGVFbmQgZXZlbnQuXG4gICAgICAgIGlmICgtLWNvdW50ZXIgPCAxKSB7XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSBjYWxsYmFjayhjb21wbGV0ZWRJdGVtcy5zbGljZSgwKSk7XG4gICAgICAgICAgaWYgKGdyaWQuX2hhc0xpc3RlbmVycyhlbmRFdmVudCkpIGdyaWQuX2VtaXQoZW5kRXZlbnQsIGNvbXBsZXRlZEl0ZW1zLnNsaWNlKDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVmcmVzaCBoaWRkZW4gaXRlbXMuXG4gICAgaWYgKGhpZGRlbkl0ZW1zLmxlbmd0aCkgdGhpcy5yZWZyZXNoSXRlbXMoaGlkZGVuSXRlbXMpO1xuXG4gICAgLy8gTGF5b3V0IGlmIG5lZWRlZC5cbiAgICBpZiAobmVlZHNMYXlvdXQgJiYgbGF5b3V0KSB7XG4gICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIGhlbHBlcnNcbiAgICogKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBNZXJnZSBkZWZhdWx0IHNldHRpbmdzIHdpdGggdXNlciBzZXR0aW5ncy4gVGhlIHJldHVybmVkIG9iamVjdCBpcyBhIG5ld1xuICAgKiBvYmplY3Qgd2l0aCBtZXJnZWQgdmFsdWVzLiBUaGUgbWVyZ2luZyBpcyBhIGRlZXAgbWVyZ2UgbWVhbmluZyB0aGF0IGFsbFxuICAgKiBvYmplY3RzIGFuZCBhcnJheXMgd2l0aGluIHRoZSBwcm92aWRlZCBzZXR0aW5ncyBvYmplY3RzIHdpbGwgYmUgYWxzbyBtZXJnZWRcbiAgICogc28gdGhhdCBtb2RpZnlpbmcgdGhlIHZhbHVlcyBvZiB0aGUgc2V0dGluZ3Mgb2JqZWN0IHdpbGwgaGF2ZSBubyBlZmZlY3Qgb25cbiAgICogdGhlIHJldHVybmVkIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRTZXR0aW5nc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW3VzZXJTZXR0aW5nc11cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhIG5ldyBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZVNldHRpbmdzKGRlZmF1bHRTZXR0aW5ncywgdXNlclNldHRpbmdzKSB7XG4gICAgLy8gQ3JlYXRlIGEgZnJlc2ggY29weSBvZiBkZWZhdWx0IHNldHRpbmdzLlxuICAgIHZhciByZXQgPSBtZXJnZU9iamVjdHMoe30sIGRlZmF1bHRTZXR0aW5ncyk7XG5cbiAgICAvLyBNZXJnZSB1c2VyIHNldHRpbmdzIHRvIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAgaWYgKHVzZXJTZXR0aW5ncykge1xuICAgICAgcmV0ID0gbWVyZ2VPYmplY3RzKHJldCwgdXNlclNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdmlzaWJsZS9oaWRkZW4gc3R5bGVzIG1hbnVhbGx5IHNvIHRoYXQgdGhlIHdob2xlIG9iamVjdCBpc1xuICAgIC8vIG92ZXJyaWRkZW4gaW5zdGVhZCBvZiB0aGUgcHJvcHMuXG4gICAgcmV0LnZpc2libGVTdHlsZXMgPSAodXNlclNldHRpbmdzIHx8IDApLnZpc2libGVTdHlsZXMgfHwgKGRlZmF1bHRTZXR0aW5ncyB8fCAwKS52aXNpYmxlU3R5bGVzO1xuICAgIHJldC5oaWRkZW5TdHlsZXMgPSAodXNlclNldHRpbmdzIHx8IDApLmhpZGRlblN0eWxlcyB8fCAoZGVmYXVsdFNldHRpbmdzIHx8IDApLmhpZGRlblN0eWxlcztcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgdHdvIG9iamVjdHMgcmVjdXJzaXZlbHkgKGRlZXAgbWVyZ2UpLiBUaGUgc291cmNlIG9iamVjdCdzIHByb3BlcnRpZXNcbiAgICogYXJlIG1lcmdlZCB0byB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICAgKiAgIC0gVGhlIHRhcmdldCBvYmplY3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VcbiAgICogICAtIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VPYmplY3RzKHRhcmdldCwgc291cmNlKSB7XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBsZW5ndGggPSBzb3VyY2VLZXlzLmxlbmd0aDtcbiAgICB2YXIgaXNTb3VyY2VPYmplY3Q7XG4gICAgdmFyIHByb3BOYW1lO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9wTmFtZSA9IHNvdXJjZUtleXNbaV07XG4gICAgICBpc1NvdXJjZU9iamVjdCA9IGlzUGxhaW5PYmplY3Qoc291cmNlW3Byb3BOYW1lXSk7XG5cbiAgICAgIC8vIElmIHRhcmdldCBhbmQgc291cmNlIHZhbHVlcyBhcmUgYm90aCBvYmplY3RzLCBtZXJnZSB0aGUgb2JqZWN0cyBhbmRcbiAgICAgIC8vIGFzc2lnbiB0aGUgbWVyZ2VkIHZhbHVlIHRvIHRoZSB0YXJnZXQgcHJvcGVydHkuXG4gICAgICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXRbcHJvcE5hbWVdKSAmJiBpc1NvdXJjZU9iamVjdCkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gbWVyZ2VPYmplY3RzKG1lcmdlT2JqZWN0cyh7fSwgdGFyZ2V0W3Byb3BOYW1lXSksIHNvdXJjZVtwcm9wTmFtZV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgc291cmNlJ3MgdmFsdWUgaXMgb2JqZWN0IGFuZCB0YXJnZXQncyBpcyBub3QgbGV0J3MgY2xvbmUgdGhlIG9iamVjdCBhc1xuICAgICAgLy8gdGhlIHRhcmdldCdzIHZhbHVlLlxuICAgICAgaWYgKGlzU291cmNlT2JqZWN0KSB7XG4gICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBtZXJnZU9iamVjdHMoe30sIHNvdXJjZVtwcm9wTmFtZV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgc291cmNlJ3MgdmFsdWUgaXMgYW4gYXJyYXkgbGV0J3MgY2xvbmUgdGhlIGFycmF5IGFzIHRoZSB0YXJnZXQnc1xuICAgICAgLy8gdmFsdWUuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2VbcHJvcE5hbWVdKSkge1xuICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXS5zbGljZSgwKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluIGFsbCBvdGhlciBjYXNlcyBsZXQncyBqdXN0IGRpcmVjdGx5IGFzc2lnbiB0aGUgc291cmNlJ3MgdmFsdWUgYXMgdGhlXG4gICAgICAvLyB0YXJnZXQncyB2YWx1ZS5cbiAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICByZXR1cm4gR3JpZDtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L211dXJpL2Rpc3QvbXV1cmkuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb29sYmFySGVscGVyIH0gZnJvbSBcIi4vdXRpbHMvaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4sXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgaWYoIXZpc3VhbGl6ZXJzIHx8IHZpc3VhbGl6ZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlZpc3VhbGl6ZXJBcnJheVdyYXBwZXIgd29ya3Mgd2l0aCB2aXN1YWxpemVycyBjb2xsZWN0aW9uIG9ubHkuXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSB2aXN1YWxpemVyc1swXTtcbiAgfVxuXG4gIHByb3RlY3RlZCB2aXN1YWxpemVyQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICBwcml2YXRlIHZpc3VhbGl6ZXI6IFZpc3VhbGl6ZXJCYXNlO1xuXG4gIHByaXZhdGUgc2V0VmlzdWFsaXplcihuYW1lOiBzdHJpbmcpIHtcbiAgICBpZighIXRoaXMudmlzdWFsaXplcikge1xuICAgICAgdGhpcy52aXN1YWxpemVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy52aXN1YWxpemVyID0gdGhpcy52aXN1YWxpemVycy5maWx0ZXIodiA9PiB2Lm5hbWUgPT09IG5hbWUpWzBdO1xuICAgIHRoaXMudmlzdWFsaXplci5yZW5kZXIodGhpcy52aXN1YWxpemVyQ29udGFpbmVyKTtcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9Pikge1xuICAgIHRoaXMudmlzdWFsaXplci51cGRhdGUoZGF0YSk7XG4gIH1cblxuICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMudmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMudmlzdWFsaXplckNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnZpc3VhbGl6ZXIucmVuZGVyKHRoaXMudmlzdWFsaXplckNvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IodG9vbGJhcixcbiAgICAgIHRoaXMudmlzdWFsaXplcnMubWFwKHZpc3VhbGl6ZXIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB2aXN1YWxpemVyLm5hbWUsXG4gICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInZpc3VhbGl6ZXJfXCIgKyB2aXN1YWxpemVyLm5hbWUpXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIChvcHRpb246IGFueSkgPT4gdGhpcy52aXN1YWxpemVyLm5hbWUgPT09IG9wdGlvbi52YWx1ZSxcbiAgICAgIChlOiBhbnkpID0+IHRoaXMuc2V0VmlzdWFsaXplcihlLnRhcmdldC52YWx1ZSlcbiAgICApO1xuICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0V3JhcHBlcik7XG4gICAgc3VwZXIuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXIudHMiLCJleHBvcnQgZW51bSBFbGVtZW50VmlzaWJpbGl0eSB7IFZpc2libGUgPSBcIlZpc2libGVcIiwgSW52aXNpYmxlID0gXCJJbnZpc2libGVcIiwgUHVibGljSW52aXNpYmxlID0gXCJQdWJsaWNJbnZpc2libGVcIiB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWaXN1YWxpemVyUGFuZWxFbGVtZW50IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICB2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eTtcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy50cyIsImV4cG9ydCBlbnVtIENvbHVtblZpc2liaWxpdHkgeyBWaXNpYmxlID0gXCJWaXNpYmxlXCIsIEludmlzaWJsZSA9IFwiSW52aXNpYmxlXCIsIFB1YmxpY0ludmlzaWJsZSA9IFwiUHVibGljSW52aXNpYmxlXCIgfVxyXG5leHBvcnQgZW51bSBRdWVzdGlvbkxvY2F0aW9uIHsgQ29sdW1uID0gXCJDb2x1bW5cIiwgUm93ID0gXCJSb3dcIiB9XHJcbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHsgVGV4dCA9IFwiVGV4dFwiLCBGaWxlTGluayA9IFwiRmlsZUxpbmtcIiwgSW1hZ2UgPSBcIkltYWdlXCIgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIGRhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcclxuICAgIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHk7XHJcbiAgICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW5zIHtcclxuLy8gICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj47XHJcbi8vIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RhdGF0YWJsZXMvY29uZmlnLnRzIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGVuZ2xpc2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHRcIiwgXG4gIGFzY09yZGVyOiBcIkFzY2VuZGluZ1wiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiXG59O1xuXG4vL1VuY29tbWVudCB0aGVzZSB0d28gbGluZXMgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlLiBZb3Ugc2hvdWxkIHJlcGxhY2UgXCJlblwiIGFuZCBlblN0cmluZ3Mgd2l0aCB5b3VyIGxvY2FsZSAoXCJmclwiLCBcImRlXCIgYW5kIHNvIG9uKSBhbmQgeW91ciB2YXJpYWJsZS5cbi8vbG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuLy9sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiRW5nbGlzaFwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uQm9vbGVhbk1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBJdGVtVmFsdWUgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlUGxvdGx5IH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQm9vbGVhblBsb3RseSBleHRlbmRzIFNlbGVjdEJhc2VQbG90bHkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydFR5cGVzID0gQm9vbGVhblBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYm9vbGVhblF1ZXN0aW9uKCkge1xuICAgIHJldHVybiA8UXVlc3Rpb25Cb29sZWFuTW9kZWw+dGhpcy5xdWVzdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHJ1ZUNvbG9yID0gXCJcIjtcbiAgcHVibGljIHN0YXRpYyBmYWxzZUNvbG9yID0gXCJcIjtcblxuICBwcm90ZWN0ZWQgcGF0Y2hDb25maWdQYXJhbWV0ZXJzKFxuICAgIGNoYXJ0Tm9kZTogb2JqZWN0LFxuICAgIHRyYWNlczogQXJyYXk8b2JqZWN0PixcbiAgICBsYXlvdXQ6IG9iamVjdCxcbiAgICBjb25maWc6IG9iamVjdFxuICApIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIGNvbnN0IGJvb2xDb2xvcnMgPSBbXG4gICAgICBCb29sZWFuUGxvdGx5LnRydWVDb2xvciB8fCBjb2xvcnNbMF0sXG4gICAgICBCb29sZWFuUGxvdGx5LmZhbHNlQ29sb3IgfHwgY29sb3JzWzFdXG4gICAgXTtcblxuICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PT0gXCJwaWVcIiB8fCB0aGlzLmNoYXJ0VHlwZSA9PT0gXCJkb3VnaG51dFwiKSB7XG4gICAgICB0cmFjZXMuZm9yRWFjaCgodHJhY2U6IGFueSkgPT4ge1xuICAgICAgICB0cmFjZS5tYXJrZXIuY29sb3JzID0gYm9vbENvbG9ycztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwiYmFyXCIpIHtcbiAgICAgIHRyYWNlcy5mb3JFYWNoKCh0cmFjZTogYW55KSA9PiB7XG4gICAgICAgIHRyYWNlLm1hcmtlci5jb2xvciA9IGJvb2xDb2xvcnM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHR5cGVzID0gW1wicGllXCIsIFwiYmFyXCIsIFwiZG91Z2hudXRcIl07XG5cbiAgcHJvdGVjdGVkIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIHJldHVybiBuZXcgSXRlbVZhbHVlKHZhbHVlc1tsYWJlbHMuaW5kZXhPZihpdGVtVGV4dCldLCBpdGVtVGV4dCk7XG4gIH1cblxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlVHJ1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5ib29sZWFuUXVlc3Rpb24udmFsdWVUcnVlXG4gICAgICAgIDogdHJ1ZSxcbiAgICAgIHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2UgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2VcbiAgICAgICAgOiBmYWxzZVxuICAgIF07XG4gIH1cblxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIGxhYmVscyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgaWYgKHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsVHJ1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsYWJlbHNbMF0gPSB0aGlzLmJvb2xlYW5RdWVzdGlvbi5sYWJlbFRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvb2xlYW5RdWVzdGlvbi5sYWJlbEZhbHNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxhYmVsc1sxXSA9IHRoaXMuYm9vbGVhblF1ZXN0aW9uLmxhYmVsRmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIHZhciB0cnVlQ291bnQgPSAwO1xuICAgIHZhciBmYWxzZUNvdW50ID0gMDtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgaWYgKHJvd1ZhbHVlID09PSB2YWx1ZXNbMF0pIHtcbiAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICB9XG4gICAgICBpZiAocm93VmFsdWUgPT09IHZhbHVlc1sxXSkge1xuICAgICAgICBmYWxzZUNvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtbdHJ1ZUNvdW50LCBmYWxzZUNvdW50XV07XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiYm9vbGVhblwiLCBCb29sZWFuUGxvdGx5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvYm9vbGVhbi50cyIsImltcG9ydCB7IEl0ZW1WYWx1ZSwgUXVlc3Rpb25NYXRyaXhNb2RlbCwgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlUGxvdGx5IH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTWF0cml4UGxvdGx5IGV4dGVuZHMgU2VsZWN0QmFzZVBsb3RseSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0Tm9kZSwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRUeXBlcyA9IE1hdHJpeFBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBbXCJiYXJcIiwgXCJzdGFja2VkYmFyXCIsIFwicGllXCIsIFwiZG91Z2hudXRcIl07XG5cbiAgcHJvdGVjdGVkIHBhdGNoQ29uZmlnUGFyYW1ldGVycyhcbiAgICBjaGFydE5vZGU6IEhUTUxEaXZFbGVtZW50LFxuICAgIHRyYWNlczogQXJyYXk8YW55PixcbiAgICBsYXlvdXQ6IGFueSxcbiAgICBjb25maWc6IGFueVxuICApIHtcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICAvL3ZhciB2YWx1ZVRpdGxlcyA9IHF1ZXN0aW9uLmNvbHVtbnMubWFwKGNvbHVtbiA9PiBjb2x1bW4udGV4dCk7XG4gICAgaWYgKHRoaXMuY2hhcnRUeXBlID09PSBcInBpZVwiIHx8IHRoaXMuY2hhcnRUeXBlID09PSBcImRvdWdobnV0XCIpIHtcbiAgICAgIGxheW91dC5ncmlkID0ge3Jvd3M6IDEsIGNvbHVtbnM6IHRyYWNlcy5sZW5ndGh9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwic3RhY2tlZGJhclwiKSB7XG4gICAgICBsYXlvdXQuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgbGF5b3V0LmJhcm1vZGUgPSAnc3RhY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXlvdXQuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBxdWVzdGlvbi5jb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PT0gXCJwaWVcIiB8fCB0aGlzLmNoYXJ0VHlwZSA9PT0gXCJkb3VnaG51dFwiKSB7XG4gICAgICAgIHRyYWNlc1tpbmRleF0uZG9tYWluID0geyBjb2x1bW46IGluZGV4IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFjZXNbaW5kZXhdLmhvdmVyaW5mbyA9IFwieCtuYW1lXCI7XG4gICAgICAgIHRyYWNlc1tpbmRleF0ubWFya2VyLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwic3RhY2tlZGJhclwiKSB7XG4gICAgICAgICAgdHJhY2VzW2luZGV4XS50eXBlID0gXCJiYXJcIjtcbiAgICAgICAgICB0cmFjZXNbaW5kZXhdLm5hbWUgPSBjb2x1bW4udGV4dDtcbiAgICAgICAgICB0cmFjZXNbaW5kZXhdLndpZHRoID0gMC41IC8gdHJhY2VzLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmFjZXNbaW5kZXhdLm5hbWUgPSBjb2x1bW4udGV4dDtcbiAgICAgICAgICB0cmFjZXNbaW5kZXhdLndpZHRoID0gMC41IC8gdHJhY2VzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFsdWVzU291cmNlKCk6IGFueVtdIHtcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcXVlc3Rpb24uY29sdW1ucztcbiAgfVxuXG4gIGdldExhYmVscygpOiBhbnlbXSB7XG4gICAgY29uc3QgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4TW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgcmV0dXJuIHF1ZXN0aW9uLnJvd3MubWFwKChyb3c6IGFueSkgPT5cbiAgICAgIEl0ZW1WYWx1ZS5nZXRUZXh0T3JIdG1sQnlWYWx1ZShxdWVzdGlvbi5yb3dzLCByb3cudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldERhdGEoKTogYW55W10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIGNvbnN0IGRhdGFzZXRzOiBBcnJheTxhbnk+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+IHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5yb3dzLm1hcCgodjogYW55KSA9PiAwKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvd0RhdGEgPT4ge1xuICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZTogYW55ID0gcm93RGF0YVt0aGlzLnF1ZXN0aW9uLm5hbWVdO1xuICAgICAgaWYgKCEhcXVlc3Rpb25WYWx1ZSkge1xuICAgICAgICBxdWVzdGlvbi5yb3dzLmZvckVhY2goKHJvdzogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRWYWx1ZXMoKS5mb3JFYWNoKCh2YWw6IGFueSwgZHNJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlc3Rpb25WYWx1ZVtyb3cudmFsdWVdID09IHZhbCkge1xuICAgICAgICAgICAgICBkYXRhc2V0c1tkc0luZGV4XVtpbmRleF0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGFzZXRzO1xuICB9XG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcIm1hdHJpeFwiLCBNYXRyaXhQbG90bHkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9tYXRyaXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xudmFyIFBsb3RseSA9IDxhbnk+cmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpO1xuaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgR2F1Z2VQbG90bHkgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIHByaXZhdGUgX3Jlc3VsdDogYW55O1xuICBwcml2YXRlIGNoYXJ0OiBQcm9taXNlPFBsb3RseS5QbG90bHlIVE1MRWxlbWVudD47XG5cbiAgcHVibGljIHN0YXRpYyBzdGVwc0NvdW50ID0gNTtcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZVRleHRzQ2FsbGJhY2s6IChcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgbWF4VmFsdWU6IG51bWJlcixcbiAgICBtaW5WYWx1ZTogbnVtYmVyLFxuICAgIHN0ZXBzQ291bnQ6IG51bWJlcixcbiAgICB0ZXh0czogc3RyaW5nW11cbiAgKSA9PiBzdHJpbmdbXTtcblxuICBwdWJsaWMgc3RhdGljIHR5cGVzID0gW1wiZ2F1Z2VcIiwgXCJidWxsZXRcIl07XG4gIHByb3RlY3RlZCBjaGFydFR5cGVzOiBBcnJheTxzdHJpbmc+O1xuICBjaGFydFR5cGU6IFN0cmluZztcbiAgY2hhcnROb2RlID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcHVibGljIHN0YXRpYyBzaG93QXNQZXJjZW50YWdlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRUeXBlcyA9IEdhdWdlUGxvdGx5LnR5cGVzO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVzWzBdO1xuICB9XG5cbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShkYXRhKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b29sYmFyQ2hhbmdlSGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5jaGFydFR5cGUgIT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IoXG4gICAgICAgIHRvb2xiYXIsXG4gICAgICAgIHRoaXMuY2hhcnRUeXBlcy5tYXAoY2hhcnRUeXBlID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGNoYXJ0VHlwZSxcbiAgICAgICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFydFR5cGVfXCIgKyBjaGFydFR5cGUpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIChvcHRpb246IGFueSkgPT4gdGhpcy5jaGFydFR5cGUgPT09IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgdGhpcy50b29sYmFyQ2hhbmdlSGFuZGxlclxuICAgICAgKTtcbiAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0V3JhcHBlcik7XG4gICAgfVxuICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgUGxvdGx5LnB1cmdlKHRoaXMuY2hhcnROb2RlKTtcbiAgICB0aGlzLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBnZW5lcmF0ZVRleHQobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgbGV0IHRleHRzOiBhbnkgPSBbXTtcblxuICAgIGlmIChzdGVwc0NvdW50ID09PSA1KSB7XG4gICAgICB0ZXh0cyA9IFtcbiAgICAgICAgXCJ2ZXJ5IGhpZ2ggKFwiICsgbWF4VmFsdWUgKyBcIilcIixcbiAgICAgICAgXCJoaWdoXCIsXG4gICAgICAgIFwibWVkaXVtXCIsXG4gICAgICAgIFwibG93XCIsXG4gICAgICAgIFwidmVyeSBsb3cgKFwiICsgbWluVmFsdWUgKyBcIilcIlxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dHMucHVzaChtYXhWYWx1ZSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQgLSAyOyBpKyspIHtcbiAgICAgICAgdGV4dHMucHVzaChcIlwiKTtcbiAgICAgIH1cbiAgICAgIHRleHRzLnB1c2gobWluVmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghIUdhdWdlUGxvdGx5LmdlbmVyYXRlVGV4dHNDYWxsYmFjaykge1xuICAgICAgcmV0dXJuIEdhdWdlUGxvdGx5LmdlbmVyYXRlVGV4dHNDYWxsYmFjayhcbiAgICAgICAgdGhpcy5xdWVzdGlvbixcbiAgICAgICAgbWF4VmFsdWUsXG4gICAgICAgIG1pblZhbHVlLFxuICAgICAgICBzdGVwc0NvdW50LFxuICAgICAgICB0ZXh0c1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHM7XG4gIH1cblxuICBnZW5lcmF0ZVZhbHVlcyhtYXhWYWx1ZTogbnVtYmVyLCBzdGVwc0NvdW50OiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHNDb3VudDsgaSsrKSB7XG4gICAgICB2YWx1ZXMucHVzaChtYXhWYWx1ZSAvIHN0ZXBzQ291bnQpO1xuICAgIH1cblxuICAgIHZhbHVlcy5wdXNoKG1heFZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBnZW5lcmF0ZUNvbG9ycyhtYXhWYWx1ZTogbnVtYmVyLCBtaW5WYWx1ZTogbnVtYmVyLCBzdGVwc0NvdW50OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYWxldHRlID0gdGhpcy5nZXRDb2xvcnMoKTtcbiAgICBjb25zdCBjb2xvcnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHNDb3VudDsgaSsrKSB7XG4gICAgICBjb2xvcnMucHVzaChwYWxldHRlW2ldKTtcbiAgICB9XG5cbiAgICBjb2xvcnMucHVzaChcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIik7XG5cbiAgICByZXR1cm4gY29sb3JzO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoYXJ0KCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcblxuICAgIGNvbnN0IHJhdGVWYWx1ZXMgPSBxdWVzdGlvbi52aXNpYmxlUmF0ZVZhbHVlcztcbiAgICBsZXQgbWF4VmFsdWUgPSByYXRlVmFsdWVzW3JhdGVWYWx1ZXMubGVuZ3RoIC0gMV0udmFsdWU7XG4gICAgbGV0IG1pblZhbHVlID0gcmF0ZVZhbHVlc1swXS52YWx1ZTtcblxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2VuZXJhdGVDb2xvcnMoXG4gICAgICBtYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlLFxuICAgICAgR2F1Z2VQbG90bHkuc3RlcHNDb3VudFxuICAgICk7XG5cbiAgICB2YXIgbGV2ZWwgPSB0aGlzLnJlc3VsdDtcblxuICAgIGlmIChHYXVnZVBsb3RseS5zaG93QXNQZXJjZW50YWdlKSB7XG4gICAgICBsZXZlbCA9IHRoaXMudG9QZXJjZW50YWdlKGxldmVsLCBtYXhWYWx1ZSk7XG4gICAgICBtaW5WYWx1ZSA9IHRoaXMudG9QZXJjZW50YWdlKG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgICBtYXhWYWx1ZSA9IHRoaXMudG9QZXJjZW50YWdlKG1heFZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgfVxuXG4gICAgdmFyIGRhdGE6IGFueSA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJpbmRpY2F0b3JcIixcbiAgICAgICAgbW9kZTogXCJnYXVnZStudW1iZXJcIixcbiAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICBheGlzOiB7IHJhbmdlOiBbbWluVmFsdWUsIG1heFZhbHVlXSB9LFxuICAgICAgICAgIHNoYXBlOiB0aGlzLmNoYXJ0VHlwZSxcbiAgICAgICAgICBiZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgYmFyOiB7IGNvbG9yOiBjb2xvcnNbMF0gfVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogbGV2ZWwsXG4gICAgICAgIHRleHQ6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRvbWFpbjogeyB4OiBbMCwgMV0sIHk6IFswLCAxXSB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIHZhciBoZWlnaHQgPSA0MDA7XG5cbiAgICBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwiYnVsbGV0XCIpIHtcbiAgICAgIGhlaWdodCA9IDI1MDtcbiAgICB9XG5cbiAgICB2YXIgbGF5b3V0ID0ge1xuICAgICAgd2lkdGg6IDYwMCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcGxvdF9iZ2NvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHBhcGVyX2JnY29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGRpc3BsYXlNb2RlQmFyOiBmYWxzZSxcbiAgICAgIHN0YXRpY1Bsb3Q6IHRydWVcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFydCA9IFBsb3RseS5uZXdQbG90KHRoaXMuY2hhcnROb2RlLCBkYXRhLCBsYXlvdXQsIGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoYXJ0Tm9kZSk7XG4gIH1cblxuICBnZXQgcmVzdWx0KCkge1xuICAgIGlmICh0aGlzLl9yZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZXM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgICAgdGhpcy5kYXRhLmZvckVhY2gocm93RGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWU6IGFueSA9ICtyb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICAgIGlmICghIXF1ZXN0aW9uVmFsdWUpIHtcbiAgICAgICAgICBxdWVzdGlvblZhbHVlcy5wdXNoKHF1ZXN0aW9uVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fcmVzdWx0ID1cbiAgICAgICAgKHF1ZXN0aW9uVmFsdWVzICYmXG4gICAgICAgICAgcXVlc3Rpb25WYWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyBxdWVzdGlvblZhbHVlcy5sZW5ndGgpIHx8XG4gICAgICAgIDA7XG4gICAgICB0aGlzLl9yZXN1bHQgPSBNYXRoLmNlaWwodGhpcy5fcmVzdWx0ICogMTAwKSAvIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJyYXRpbmdcIiwgR2F1Z2VQbG90bHkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9yYXRpbmcudHMiLCJpbXBvcnQgeyBTZWxlY3RCYXNlUGxvdGx5IH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uLCBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLlwiO1xuZXhwb3J0IGNsYXNzIFNlbGVjdEJhc2VTb3J0YWJsZVBsb3RseSBleHRlbmRzIFNlbGVjdEJhc2VQbG90bHkge1xuICBwcm90ZWN0ZWQgb25DaGFydFR5cGVDaGFuZ2VkKCkge1xuICAgIHRoaXMuc2V0TGFiZWxzT3JkZXIoXCJkZWZhdWx0XCIpO1xuICAgIHRoaXMudXBkYXRlT3JkZXJTZWxlY3RvcigpO1xuICB9XG4gIHByaXZhdGUgY2hvaWNlc09yZGVyOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSB1cGRhdGVPcmRlclNlbGVjdG9yKCkge1xuICAgIGlmICh0aGlzLmNoYXJ0VHlwZSA9PSBcImJhclwiKSB7XG4gICAgICB0aGlzLmNob2ljZXNPcmRlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaG9pY2VzT3JkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGhpcy5jaG9pY2VzT3JkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF0udmFsdWUgPSBcImRlZmF1bHRcIjtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jaG9pY2VzT3JkZXIgPSBUb29sYmFySGVscGVyLmNyZWF0ZVNlbGVjdG9yKFxuICAgICAgICA8SFRNTERpdkVsZW1lbnQ+dG9vbGJhcixcbiAgICAgICAgW1xuICAgICAgICAgIHsgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImRlZmF1bHRPcmRlclwiKSwgdmFsdWU6IFwiZGVmYXVsdFwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYXNjT3JkZXJcIiksIHZhbHVlOiBcImFzY1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpLCB2YWx1ZTogXCJkZXNjXCIgfVxuICAgICAgICBdLFxuICAgICAgICBvcHRpb24gPT4gZmFsc2UsXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TGFiZWxzT3JkZXIoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBzdXBlci5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHRoaXMuY2hvaWNlc09yZGVyKTtcbiAgICB9XG4gIH1cbn1cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcImNoZWNrYm94XCIsIFNlbGVjdEJhc2VTb3J0YWJsZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJyYWRpb2dyb3VwXCIsIFNlbGVjdEJhc2VTb3J0YWJsZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJkcm9wZG93blwiLCBTZWxlY3RCYXNlU29ydGFibGVQbG90bHkpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiaW1hZ2VwaWNrZXJcIiwgU2VsZWN0QmFzZVNvcnRhYmxlUGxvdGx5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvc2VsZWN0QmFzZVNvcnRhYmxlLnRzIiwiZXhwb3J0IHZhciBzdG9wV29yZHMgPSBuZXcgQXJyYXkoXG4gIFwiYVwiLFxuICBcImFib3V0XCIsXG4gIFwiYWJvdmVcIixcbiAgXCJhY3Jvc3NcIixcbiAgXCJhZnRlclwiLFxuICBcImFnYWluXCIsXG4gIFwiYWdhaW5zdFwiLFxuICBcImFsbFwiLFxuICBcImFsbW9zdFwiLFxuICBcImFsb25lXCIsXG4gIFwiYWxvbmdcIixcbiAgXCJhbHJlYWR5XCIsXG4gIFwiYWxzb1wiLFxuICBcImFsdGhvdWdoXCIsXG4gIFwiYWx3YXlzXCIsXG4gIFwiYW1vbmdcIixcbiAgXCJhblwiLFxuICBcImFuZFwiLFxuICBcImFub3RoZXJcIixcbiAgXCJhbnlcIixcbiAgXCJhbnlib2R5XCIsXG4gIFwiYW55b25lXCIsXG4gIFwiYW55dGhpbmdcIixcbiAgXCJhbnl3aGVyZVwiLFxuICBcImFyZVwiLFxuICBcImFyZWFcIixcbiAgXCJhcmVhc1wiLFxuICBcImFyb3VuZFwiLFxuICBcImFzXCIsXG4gIFwiYXNrXCIsXG4gIFwiYXNrZWRcIixcbiAgXCJhc2tpbmdcIixcbiAgXCJhc2tzXCIsXG4gIFwiYXRcIixcbiAgXCJhd2F5XCIsXG4gIFwiYlwiLFxuICBcImJhY2tcIixcbiAgXCJiYWNrZWRcIixcbiAgXCJiYWNraW5nXCIsXG4gIFwiYmFja3NcIixcbiAgXCJiZVwiLFxuICBcImJlY2FtZVwiLFxuICBcImJlY2F1c2VcIixcbiAgXCJiZWNvbWVcIixcbiAgXCJiZWNvbWVzXCIsXG4gIFwiYmVlblwiLFxuICBcImJlZm9yZVwiLFxuICBcImJlZ2FuXCIsXG4gIFwiYmVoaW5kXCIsXG4gIFwiYmVpbmdcIixcbiAgXCJiZWluZ3NcIixcbiAgXCJiZXN0XCIsXG4gIFwiYmV0dGVyXCIsXG4gIFwiYmV0d2VlblwiLFxuICBcImJpZ1wiLFxuICBcImJvdGhcIixcbiAgXCJidXRcIixcbiAgXCJieVwiLFxuICBcImNcIixcbiAgXCJjYW1lXCIsXG4gIFwiY2FuXCIsXG4gIFwiY2Fubm90XCIsXG4gIFwiY2FzZVwiLFxuICBcImNhc2VzXCIsXG4gIFwiY2VydGFpblwiLFxuICBcImNlcnRhaW5seVwiLFxuICBcImNsZWFyXCIsXG4gIFwiY2xlYXJseVwiLFxuICBcImNvbWVcIixcbiAgXCJjb3VsZFwiLFxuICBcImRcIixcbiAgXCJkaWRcIixcbiAgXCJkaWZmZXJcIixcbiAgXCJkaWZmZXJlbnRcIixcbiAgXCJkaWZmZXJlbnRseVwiLFxuICBcImRvXCIsXG4gIFwiZG9lc1wiLFxuICBcImRvbmVcIixcbiAgXCJkb3duXCIsXG4gIFwiZG93blwiLFxuICBcImRvd25lZFwiLFxuICBcImRvd25pbmdcIixcbiAgXCJkb3duc1wiLFxuICBcImR1cmluZ1wiLFxuICBcImVcIixcbiAgXCJlYWNoXCIsXG4gIFwiZWFybHlcIixcbiAgXCJlaXRoZXJcIixcbiAgXCJlbmRcIixcbiAgXCJlbmRlZFwiLFxuICBcImVuZGluZ1wiLFxuICBcImVuZHNcIixcbiAgXCJlbm91Z2hcIixcbiAgXCJldmVuXCIsXG4gIFwiZXZlbmx5XCIsXG4gIFwiZXZlclwiLFxuICBcImV2ZXJ5XCIsXG4gIFwiZXZlcnlib2R5XCIsXG4gIFwiZXZlcnlvbmVcIixcbiAgXCJldmVyeXRoaW5nXCIsXG4gIFwiZXZlcnl3aGVyZVwiLFxuICBcImZcIixcbiAgXCJmYWNlXCIsXG4gIFwiZmFjZXNcIixcbiAgXCJmYWN0XCIsXG4gIFwiZmFjdHNcIixcbiAgXCJmYXJcIixcbiAgXCJmZWx0XCIsXG4gIFwiZmV3XCIsXG4gIFwiZmluZFwiLFxuICBcImZpbmRzXCIsXG4gIFwiZmlyc3RcIixcbiAgXCJmb3JcIixcbiAgXCJmb3VyXCIsXG4gIFwiZnJvbVwiLFxuICBcImZ1bGxcIixcbiAgXCJmdWxseVwiLFxuICBcImZ1cnRoZXJcIixcbiAgXCJmdXJ0aGVyZWRcIixcbiAgXCJmdXJ0aGVyaW5nXCIsXG4gIFwiZnVydGhlcnNcIixcbiAgXCJnXCIsXG4gIFwiZ2F2ZVwiLFxuICBcImdlbmVyYWxcIixcbiAgXCJnZW5lcmFsbHlcIixcbiAgXCJnZXRcIixcbiAgXCJnZXRzXCIsXG4gIFwiZ2l2ZVwiLFxuICBcImdpdmVuXCIsXG4gIFwiZ2l2ZXNcIixcbiAgXCJnb1wiLFxuICBcImdvaW5nXCIsXG4gIFwiZ29vZFwiLFxuICBcImdvb2RzXCIsXG4gIFwiZ290XCIsXG4gIFwiZ3JlYXRcIixcbiAgXCJncmVhdGVyXCIsXG4gIFwiZ3JlYXRlc3RcIixcbiAgXCJncm91cFwiLFxuICBcImdyb3VwZWRcIixcbiAgXCJncm91cGluZ1wiLFxuICBcImdyb3Vwc1wiLFxuICBcImhcIixcbiAgXCJoYWRcIixcbiAgXCJoYXNcIixcbiAgXCJoYXZlXCIsXG4gIFwiaGF2aW5nXCIsXG4gIFwiaGVcIixcbiAgXCJoZXJcIixcbiAgXCJoZXJlXCIsXG4gIFwiaGVyc2VsZlwiLFxuICBcImhpZ2hcIixcbiAgXCJoaWdoXCIsXG4gIFwiaGlnaFwiLFxuICBcImhpZ2hlclwiLFxuICBcImhpZ2hlc3RcIixcbiAgXCJoaW1cIixcbiAgXCJoaW1zZWxmXCIsXG4gIFwiaGlzXCIsXG4gIFwiaG93XCIsXG4gIFwiaG93ZXZlclwiLFxuICBcImlcIixcbiAgXCJpZlwiLFxuICBcImltcG9ydGFudFwiLFxuICBcImluXCIsXG4gIFwiaW50ZXJlc3RcIixcbiAgXCJpbnRlcmVzdGVkXCIsXG4gIFwiaW50ZXJlc3RpbmdcIixcbiAgXCJpbnRlcmVzdHNcIixcbiAgXCJpbnRvXCIsXG4gIFwiaXNcIixcbiAgXCJpdFwiLFxuICBcIml0c1wiLFxuICBcIml0c2VsZlwiLFxuICBcImpcIixcbiAgXCJqdXN0XCIsXG4gIFwia1wiLFxuICBcImtlZXBcIixcbiAgXCJrZWVwc1wiLFxuICBcImtpbmRcIixcbiAgXCJrbmV3XCIsXG4gIFwia25vd1wiLFxuICBcImtub3duXCIsXG4gIFwia25vd3NcIixcbiAgXCJsXCIsXG4gIFwibGFyZ2VcIixcbiAgXCJsYXJnZWx5XCIsXG4gIFwibGFzdFwiLFxuICBcImxhdGVyXCIsXG4gIFwibGF0ZXN0XCIsXG4gIFwibGVhc3RcIixcbiAgXCJsZXNzXCIsXG4gIFwibGV0XCIsXG4gIFwibGV0c1wiLFxuICBcImxpa2VcIixcbiAgXCJsaWtlbHlcIixcbiAgXCJsb25nXCIsXG4gIFwibG9uZ2VyXCIsXG4gIFwibG9uZ2VzdFwiLFxuICBcIm1cIixcbiAgXCJtYWRlXCIsXG4gIFwibWFrZVwiLFxuICBcIm1ha2luZ1wiLFxuICBcIm1hblwiLFxuICBcIm1hbnlcIixcbiAgXCJtYXlcIixcbiAgXCJtZVwiLFxuICBcIm1lbWJlclwiLFxuICBcIm1lbWJlcnNcIixcbiAgXCJtZW5cIixcbiAgXCJtaWdodFwiLFxuICBcIm1vcmVcIixcbiAgXCJtb3N0XCIsXG4gIFwibW9zdGx5XCIsXG4gIFwibXJcIixcbiAgXCJtcnNcIixcbiAgXCJtdWNoXCIsXG4gIFwibXVzdFwiLFxuICBcIm15XCIsXG4gIFwibXlzZWxmXCIsXG4gIFwiblwiLFxuICBcIm5lY2Vzc2FyeVwiLFxuICBcIm5lZWRcIixcbiAgXCJuZWVkZWRcIixcbiAgXCJuZWVkaW5nXCIsXG4gIFwibmVlZHNcIixcbiAgXCJuZXZlclwiLFxuICBcIm5ld1wiLFxuICBcIm5ld1wiLFxuICBcIm5ld2VyXCIsXG4gIFwibmV3ZXN0XCIsXG4gIFwibmV4dFwiLFxuICBcIm5vXCIsXG4gIFwibm9ib2R5XCIsXG4gIFwibm9uXCIsXG4gIFwibm9vbmVcIixcbiAgXCJub3RcIixcbiAgXCJub3RoaW5nXCIsXG4gIFwibm93XCIsXG4gIFwibm93aGVyZVwiLFxuICBcIm51bWJlclwiLFxuICBcIm51bWJlcnNcIixcbiAgXCJvXCIsXG4gIFwib2ZcIixcbiAgXCJvZmZcIixcbiAgXCJvZnRlblwiLFxuICBcIm9sZFwiLFxuICBcIm9sZGVyXCIsXG4gIFwib2xkZXN0XCIsXG4gIFwib25cIixcbiAgXCJvbmNlXCIsXG4gIFwib25lXCIsXG4gIFwib25seVwiLFxuICBcIm9wZW5cIixcbiAgXCJvcGVuZWRcIixcbiAgXCJvcGVuaW5nXCIsXG4gIFwib3BlbnNcIixcbiAgXCJvclwiLFxuICBcIm9yZGVyXCIsXG4gIFwib3JkZXJlZFwiLFxuICBcIm9yZGVyaW5nXCIsXG4gIFwib3JkZXJzXCIsXG4gIFwib3RoZXJcIixcbiAgXCJvdGhlcnNcIixcbiAgXCJvdXJcIixcbiAgXCJvdXRcIixcbiAgXCJvdmVyXCIsXG4gIFwicFwiLFxuICBcInBhcnRcIixcbiAgXCJwYXJ0ZWRcIixcbiAgXCJwYXJ0aW5nXCIsXG4gIFwicGFydHNcIixcbiAgXCJwZXJcIixcbiAgXCJwZXJoYXBzXCIsXG4gIFwicGxhY2VcIixcbiAgXCJwbGFjZXNcIixcbiAgXCJwb2ludFwiLFxuICBcInBvaW50ZWRcIixcbiAgXCJwb2ludGluZ1wiLFxuICBcInBvaW50c1wiLFxuICBcInBvc3NpYmxlXCIsXG4gIFwicHJlc2VudFwiLFxuICBcInByZXNlbnRlZFwiLFxuICBcInByZXNlbnRpbmdcIixcbiAgXCJwcmVzZW50c1wiLFxuICBcInByb2JsZW1cIixcbiAgXCJwcm9ibGVtc1wiLFxuICBcInB1dFwiLFxuICBcInB1dHNcIixcbiAgXCJxXCIsXG4gIFwicXVpdGVcIixcbiAgXCJyXCIsXG4gIFwicmF0aGVyXCIsXG4gIFwicmVhbGx5XCIsXG4gIFwicmlnaHRcIixcbiAgXCJyaWdodFwiLFxuICBcInJvb21cIixcbiAgXCJyb29tc1wiLFxuICBcInNcIixcbiAgXCJzYWlkXCIsXG4gIFwic2FtZVwiLFxuICBcInNhd1wiLFxuICBcInNheVwiLFxuICBcInNheXNcIixcbiAgXCJzZWNvbmRcIixcbiAgXCJzZWNvbmRzXCIsXG4gIFwic2VlXCIsXG4gIFwic2VlbVwiLFxuICBcInNlZW1lZFwiLFxuICBcInNlZW1pbmdcIixcbiAgXCJzZWVtc1wiLFxuICBcInNlZXNcIixcbiAgXCJzZXZlcmFsXCIsXG4gIFwic2hhbGxcIixcbiAgXCJzaGVcIixcbiAgXCJzaG91bGRcIixcbiAgXCJzaG93XCIsXG4gIFwic2hvd2VkXCIsXG4gIFwic2hvd2luZ1wiLFxuICBcInNob3dzXCIsXG4gIFwic2lkZVwiLFxuICBcInNpZGVzXCIsXG4gIFwic2luY2VcIixcbiAgXCJzbWFsbFwiLFxuICBcInNtYWxsZXJcIixcbiAgXCJzbWFsbGVzdFwiLFxuICBcInNvXCIsXG4gIFwic29tZVwiLFxuICBcInNvbWVib2R5XCIsXG4gIFwic29tZW9uZVwiLFxuICBcInNvbWV0aGluZ1wiLFxuICBcInNvbWV3aGVyZVwiLFxuICBcInN0YXRlXCIsXG4gIFwic3RhdGVzXCIsXG4gIFwic3RpbGxcIixcbiAgXCJzdGlsbFwiLFxuICBcInN1Y2hcIixcbiAgXCJzdXJlXCIsXG4gIFwidFwiLFxuICBcInRha2VcIixcbiAgXCJ0YWtlblwiLFxuICBcInRoYW5cIixcbiAgXCJ0aGF0XCIsXG4gIFwidGhlXCIsXG4gIFwidGhlaXJcIixcbiAgXCJ0aGVtXCIsXG4gIFwidGhlblwiLFxuICBcInRoZXJlXCIsXG4gIFwidGhlcmVmb3JlXCIsXG4gIFwidGhlc2VcIixcbiAgXCJ0aGV5XCIsXG4gIFwidGhpbmdcIixcbiAgXCJ0aGluZ3NcIixcbiAgXCJ0aGlua1wiLFxuICBcInRoaW5rc1wiLFxuICBcInRoaXNcIixcbiAgXCJ0aG9zZVwiLFxuICBcInRob3VnaFwiLFxuICBcInRob3VnaHRcIixcbiAgXCJ0aG91Z2h0c1wiLFxuICBcInRocmVlXCIsXG4gIFwidGhyb3VnaFwiLFxuICBcInRodXNcIixcbiAgXCJ0b1wiLFxuICBcInRvZGF5XCIsXG4gIFwidG9nZXRoZXJcIixcbiAgXCJ0b29cIixcbiAgXCJ0b29rXCIsXG4gIFwidG93YXJkXCIsXG4gIFwidHVyblwiLFxuICBcInR1cm5lZFwiLFxuICBcInR1cm5pbmdcIixcbiAgXCJ0dXJuc1wiLFxuICBcInR3b1wiLFxuICBcInVcIixcbiAgXCJ1bmRlclwiLFxuICBcInVudGlsXCIsXG4gIFwidXBcIixcbiAgXCJ1cG9uXCIsXG4gIFwidXNcIixcbiAgXCJ1c2VcIixcbiAgXCJ1c2VkXCIsXG4gIFwidXNlc1wiLFxuICBcInZcIixcbiAgXCJ2ZXJ5XCIsXG4gIFwid1wiLFxuICBcIndhbnRcIixcbiAgXCJ3YW50ZWRcIixcbiAgXCJ3YW50aW5nXCIsXG4gIFwid2FudHNcIixcbiAgXCJ3YXNcIixcbiAgXCJ3YXlcIixcbiAgXCJ3YXlzXCIsXG4gIFwid2VcIixcbiAgXCJ3ZWxsXCIsXG4gIFwid2VsbHNcIixcbiAgXCJ3ZW50XCIsXG4gIFwid2VyZVwiLFxuICBcIndoYXRcIixcbiAgXCJ3aGVuXCIsXG4gIFwid2hlcmVcIixcbiAgXCJ3aGV0aGVyXCIsXG4gIFwid2hpY2hcIixcbiAgXCJ3aGlsZVwiLFxuICBcIndob1wiLFxuICBcIndob2xlXCIsXG4gIFwid2hvc2VcIixcbiAgXCJ3aHlcIixcbiAgXCJ3aWxsXCIsXG4gIFwid2l0aFwiLFxuICBcIndpdGhpblwiLFxuICBcIndpdGhvdXRcIixcbiAgXCJ3b3JrXCIsXG4gIFwid29ya2VkXCIsXG4gIFwid29ya2luZ1wiLFxuICBcIndvcmtzXCIsXG4gIFwid291bGRcIixcbiAgXCJ4XCIsXG4gIFwieVwiLFxuICBcInllYXJcIixcbiAgXCJ5ZWFyc1wiLFxuICBcInlldFwiLFxuICBcInlvdVwiLFxuICBcInlvdW5nXCIsXG4gIFwieW91bmdlclwiLFxuICBcInlvdW5nZXN0XCIsXG4gIFwieW91clwiLFxuICBcInlvdXJzXCIsXG4gIFwielwiXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvZW5nbGlzaC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIldvcmRDbG91ZFwiLFwiY29tbW9uanMyXCI6XCJ3b3JkY2xvdWRcIixcImNvbW1vbmpzXCI6XCJ3b3JkY2xvdWRcIixcImFtZFwiOlwid29yZGNsb3VkXCJ9XG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==