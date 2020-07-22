/*!
 * surveyjs - SurveyJS Analytics library v1.7.23
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"), require("tabulator-tables"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalyticsTabulator", ["survey-core", "tabulator-tables"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalyticsTabulator"] = factory(require("survey-core"), require("tabulator-tables"));
	else
		root["SurveyAnalyticsTabulator"] = factory(root["Survey"], root["Tabulator"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_survey_core__, __WEBPACK_EXTERNAL_MODULE_tabulator_tables__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/tabulator.ts");
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

/***/ "./src/entries/tabulator.ts":
/*!**********************************!*\
  !*** ./src/entries/tabulator.ts ***!
  \**********************************/
/*! exports provided: localization, surveyStrings, defaultOptions, Tabulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });

/* harmony import */ var _localization_farsi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localization/farsi */ "./src/localization/farsi.ts");
/* harmony import */ var _localization_french__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localization/french */ "./src/localization/french.ts");
/* harmony import */ var _tables_tabulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tables/tabulator */ "./src/tables/tabulator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_3__["defaultOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_3__["Tabulator"]; });


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

/***/ "./src/tables/config.ts":
/*!******************************!*\
  !*** ./src/tables/config.ts ***!
  \******************************/
/*! exports provided: ColumnVisibility, QuestionLocation, ColumnDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnVisibility", function() { return ColumnVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionLocation", function() { return QuestionLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnDataType", function() { return ColumnDataType; });
var ColumnVisibility;
(function (ColumnVisibility) {
    ColumnVisibility[ColumnVisibility["Visible"] = 0] = "Visible";
    ColumnVisibility[ColumnVisibility["Invisible"] = 1] = "Invisible";
    ColumnVisibility[ColumnVisibility["PublicInvisible"] = 2] = "PublicInvisible";
})(ColumnVisibility || (ColumnVisibility = {}));
var QuestionLocation;
(function (QuestionLocation) {
    QuestionLocation[QuestionLocation["Column"] = 0] = "Column";
    QuestionLocation[QuestionLocation["Row"] = 1] = "Row";
})(QuestionLocation || (QuestionLocation = {}));
var ColumnDataType;
(function (ColumnDataType) {
    ColumnDataType[ColumnDataType["Text"] = 0] = "Text";
    ColumnDataType[ColumnDataType["FileLink"] = 1] = "FileLink";
    ColumnDataType[ColumnDataType["Image"] = 2] = "Image";
})(ColumnDataType || (ColumnDataType = {}));


/***/ }),

/***/ "./src/tables/table.ts":
/*!*****************************!*\
  !*** ./src/tables/table.ts ***!
  \*****************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");


var Table = /** @class */ (function () {
    function Table(survey, data, options, _columns, isTrustedAccess) {
        var _this = this;
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        this.survey = survey;
        this.data = data;
        this.options = options;
        this._columns = _columns;
        this.isTrustedAccess = isTrustedAccess;
        this._rows = [];
        this.onColumnsVisibilityChanged = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        this.onColumnsLocationChanged = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        this.onRowCreated = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        this.onTableToolsCreated = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        this.onColumnToolsCreated = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        this.buildColumns = function (survey) {
            return _this.survey.getAllQuestions().map(function (question) {
                return {
                    name: question.name,
                    displayName: (question.title || "").trim() || question.name,
                    dataType: question.getType() !== "file"
                        ? _config__WEBPACK_IMPORTED_MODULE_1__["ColumnDataType"].Text
                        : _config__WEBPACK_IMPORTED_MODULE_1__["ColumnDataType"].FileLink,
                    visibility: question.getType() !== "file"
                        ? _config__WEBPACK_IMPORTED_MODULE_1__["ColumnVisibility"].Visible
                        : _config__WEBPACK_IMPORTED_MODULE_1__["ColumnVisibility"].Invisible,
                    location: _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Column,
                };
            });
        };
        this.isVisible = function (visibility) {
            return ((_this.isTrustedAccess && visibility !== _config__WEBPACK_IMPORTED_MODULE_1__["ColumnVisibility"].Invisible) ||
                (!_this.isTrustedAccess && visibility === _config__WEBPACK_IMPORTED_MODULE_1__["ColumnVisibility"].Visible));
        };
        this.getAvailableColumns = function () {
            return _this.columns.filter(function (column) {
                return column.location === _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Column &&
                    _this.isVisible(column.visibility);
            });
        };
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.initTableData(data);
    }
    Table.prototype.getData = function () {
        return this.data;
    };
    Table.prototype.getCreatedRows = function () {
        return [].concat(this._rows);
    };
    Object.defineProperty(Table.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.initTableData = function (data) {
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
    Table.prototype.setColumnLocation = function (columnName, location) {
        this.columns.filter(function (column) { return column.name === columnName; })[0].location = location;
        this.onColumnsLocationChanged.fire(this, null);
    };
    Table.prototype.setColumnVisibility = function (columnName, visibility) {
        var column = this.columns.filter(function (column) { return column.name === columnName; })[0];
        column.visibility = visibility;
        this.onColumnsVisibilityChanged.fire(this, null);
    };
    Table.prototype.getColumnVisibility = function (columnName) {
        var column = this.columns.filter(function (column) { return column.name === columnName; })[0];
        return column.visibility;
    };
    Table.prototype.doStateSave = function () {
        this.stateSaveCallback({ columns: this.columns }, this.data);
    };
    Table.prototype.stateSaveCallback = function (settings, data) { };
    return Table;
}());



/***/ }),

/***/ "./src/tables/tabulator.scss":
/*!***********************************!*\
  !*** ./src/tables/tabulator.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/tables/tabulator.ts":
/*!*********************************!*\
  !*** ./src/tables/tabulator.ts ***!
  \*********************************/
/*! exports provided: defaultOptions, Tabulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return Tabulator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _tabulator_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabulator.scss */ "./src/tables/tabulator.scss");
/* harmony import */ var _tabulator_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabulator_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _tools_rowtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/rowtools */ "./src/tables/tools/rowtools.ts");
/* harmony import */ var _tools_columntools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/columntools */ "./src/tables/tools/columntools.ts");
/* harmony import */ var _tools_tabletools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/tabletools */ "./src/tables/tools/tabletools.ts");








var TabulatorTables = __webpack_require__(/*! tabulator-tables */ "tabulator-tables");
if (!!document) {
    var svgTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!../svgbundle.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html");
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
var defaultDownloadOptions = {
    pdf: {
        isVisible: true,
        orientation: "portrait",
        autoTable: {
            //advanced table styling
            styles: {
                fillColor: [26, 179, 148],
            },
            columnStyles: {
                id: { fillColor: 255 },
            },
            margin: { top: 60 },
        },
    },
    csv: { isVisible: true, delimiter: "," },
    xlsx: { isVisible: true, sheetName: "results" },
};
var defaultOptions = {
    columnMinWidth: 248,
    downloadOptions: defaultDownloadOptions,
    paginationButtonCount: 3,
};
var Tabulator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Tabulator, _super);
    function Tabulator(survey, data, options, _columns, isTrustedAccess) {
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        var _this = _super.call(this, survey, data, options, _columns, isTrustedAccess) || this;
        _this.detailButtonCreators = [];
        _this.COLUMN_MIN_WIDTH = 155;
        _this.tabulatorTables = null;
        _this.tableContainer = null;
        _this.render = function (targetNode) {
            targetNode.className += " sa-table sa-tabulator";
            targetNode.innerHTML = "";
            var columns = _this.getColumns();
            var data = _this.tableData;
            var header = _this.createHeader();
            var paginationElement = _this.createPaginationElement();
            _this.tableContainer = document.createElement("div");
            targetNode.appendChild(header);
            targetNode.appendChild(_this.tableContainer);
            _this.tabulatorTables = new TabulatorTables(_this.tableContainer, {
                data: data,
                layout: "fitColumns",
                pagination: "local",
                paginationSize: 5,
                movableColumns: true,
                maxHeight: "100%",
                columns: columns,
                rowFormatter: _this.rowFormatter,
                paginationButtonCount: _this.options.paginationButtonCount,
                paginationElement: paginationElement,
                columnMoved: _this.columnMovedCallback,
            });
            var toolsContainer = _this.createToolsContainer();
            header.appendChild(_this.createDownloadsBar());
            header.appendChild(toolsContainer);
            header.appendChild(paginationElement);
            _this.tableTools = new _tools_tabletools__WEBPACK_IMPORTED_MODULE_7__["TableTools"](toolsContainer, _this);
            _this.onTableToolsCreated.fire(_this, { tools: _this.tableTools });
            _this.tableTools.render();
            _this.renderResult = targetNode;
        };
        _this.createToolsContainer = function () {
            var el = document.createElement("div");
            el.classList.add("sa-tabulator__tools-container");
            return el;
        };
        _this.createHeader = function () {
            var el = document.createElement("div");
            el.classList.add("sa-tabulator__header");
            return el;
        };
        _this.createPaginationElement = function () {
            var el = document.createElement("div");
            el.classList.add("sa-tabulator__pagination-container");
            return el;
        };
        _this.destroy = function () {
            _this.tabulatorTables.destroy();
            _this.renderResult.innerHTML = "";
            _this.renderResult = undefined;
        };
        _this.columnMovedCallback = function (column, columns) {
            var from = _this._columns.indexOf(_this._columns.filter(function (col) { return col.name == column.getField(); })[0]);
            var to = columns.indexOf(column) - 1;
            var deletedColumns = _this._columns.splice(from, 1);
            _this._columns.splice(to, 0, deletedColumns[0]);
        };
        _this.rowFormatter = function (row) {
            var tableRow = new _tools_rowtools__WEBPACK_IMPORTED_MODULE_5__["TabulatorRow"](_this, row.getCells()[0].getElement(), row.getElement(), row, _this.renderDetailActions);
            tableRow.onToggleDetails.add(function () {
                row.normalizeHeight();
                _this.update();
            });
            _this.onRowCreated.fire(_this, { row: tableRow });
            tableRow.render();
            _this._rows.push(tableRow);
        };
        _this.getTitleFormatter = function (cell, formatterParams, onRendered, columnName) {
            var container = document.createElement("div");
            var title = _this.getColumnTitle(cell.getValue());
            var actions = _this.getHeaderActions(columnName);
            container.appendChild(actions);
            container.appendChild(title);
            return container;
        };
        _this.getColumnTitle = function (titleStr) {
            var title = document.createElement("span");
            title.innerHTML = titleStr;
            return title;
        };
        _this.getHeaderActions = function (columnName) {
            var container = document.createElement("div");
            container.classList.add("sa-table__action-container");
            var columnTools = new _tools_columntools__WEBPACK_IMPORTED_MODULE_6__["ColumnTools"](container, _this, columnName, _this.isTrustedAccess);
            _this.onColumnToolsCreated.fire(_this, { tools: columnTools });
            columnTools.render();
            return container;
        };
        _this.getColumns = function () {
            var availableColumns = _this.getAvailableColumns();
            var minColumnWidth = _this.COLUMN_MIN_WIDTH > _this.options.columnMinWidth
                ? _this.COLUMN_MIN_WIDTH
                : _this.options.columnMinWidth;
            var columns = availableColumns.map(function (column, index) {
                var question = _this.survey.getQuestionByName(column.name);
                return {
                    field: column.name,
                    title: (question && question.title) || column.displayName,
                    minWidth: minColumnWidth,
                    widthShrink: 1,
                    visible: column.visibility !== _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Invisible,
                    // headerFilter: false,
                    headerSort: false,
                    titleFormatter: function (cell, formatterParams, onRendered) {
                        return _this.getTitleFormatter(cell, formatterParams, onRendered, column.name);
                    },
                };
            });
            // add special column (collapse/expand)
            columns.unshift({
                field: "",
                title: "",
                download: false,
                resizable: false,
                width: 60,
            });
            return columns;
        };
        var self = _this;
        if (!_this.options)
            _this.options = defaultOptions;
        if (_columns.length === 0) {
            self._columns = self.buildColumns(survey);
        }
        return _this;
    }
    Tabulator.prototype.createDownloadsBar = function () {
        var _this = this;
        var createDownloadButton = function (type, caption) {
            var btn = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createBtn(caption);
            btn.onclick = function () {
                _this.tabulatorTables.download(type);
            };
            return btn;
        };
        var container = document.createElement("div");
        container.className = "sa-tabulator__downloads-bar";
        if (this.options.downloadOptions.xlsx.isVisible) {
            container.appendChild(createDownloadButton("xlsx", "Excel"));
        }
        if (this.options.downloadOptions.pdf.isVisible) {
            container.appendChild(createDownloadButton("pdf", "PDF"));
        }
        container.appendChild(createDownloadButton("csv", "CSV"));
        return container;
    };
    Tabulator.prototype.setColumnVisibility = function (columnName, visibility) {
        _super.prototype.setColumnVisibility.call(this, columnName, visibility);
        if (visibility == _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Invisible)
            this.tabulatorTables.hideColumn(columnName);
        else
            this.tabulatorTables.showColumn(columnName);
        this.update();
    };
    Tabulator.prototype.setColumnLocation = function (columnName, location) {
        _super.prototype.setColumnLocation.call(this, columnName, location);
        if (location == _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Row)
            this.tabulatorTables.hideColumn(columnName);
        else
            this.tabulatorTables.showColumn(columnName);
        this.update();
    };
    Tabulator.prototype.sortByColumn = function (columnName, direction) {
        this.tabulatorTables.setSort(columnName, direction);
    };
    Tabulator.prototype.applyColumnFilter = function (columnName, value) {
        this.tabulatorTables.setFilter(columnName, "like", value);
    };
    Tabulator.prototype.applyFilter = function (value) {
        var customFilter = function (data, filterParams) {
            for (var key in data) {
                if (data[key].toLowerCase().includes(filterParams.value.toLowerCase())) {
                    return true;
                }
            }
            return false;
        };
        this.tabulatorTables.setFilter(customFilter, {
            value: value,
        });
    };
    Tabulator.prototype.setPageSize = function (value) {
        this.tabulatorTables.setPageSize(value);
    };
    Tabulator.prototype.download = function (type) {
        this.tabulatorTables.download(type, "results." + type, this.options.downloadOptions[type]);
    };
    Tabulator.prototype.update = function () {
        this.tabulatorTables.redraw();
    };
    return Tabulator;
}(_table__WEBPACK_IMPORTED_MODULE_1__["Table"]));



/***/ }),

/***/ "./src/tables/tools/columntools.ts":
/*!*****************************************!*\
  !*** ./src/tables/tools/columntools.ts ***!
  \*****************************************/
/*! exports provided: ColumnTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnTools", function() { return ColumnTools; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");



var ColumnTools = /** @class */ (function () {
    function ColumnTools(targetNode, table, columnName, isTrustedAccess) {
        this.targetNode = targetNode;
        this.table = table;
        this.columnName = columnName;
        this.isTrustedAccess = isTrustedAccess;
    }
    ColumnTools.prototype.render = function () {
        this.targetNode.appendChild(this.createDragBtn());
        this.targetNode.appendChild(this.createSortBtn());
        this.targetNode.appendChild(this.createHideBtn());
        if (this.isTrustedAccess)
            this.targetNode.appendChild(this.createColumnPrivateButton());
        this.targetNode.appendChild(this.createMoveToDetailsBtn());
        this.targetNode.appendChild(this.createFilterInput());
    };
    ColumnTools.prototype.createDragBtn = function () {
        var btn = document.createElement("button");
        btn.className = "sa-table__svg-button sa-table__drag-button";
        btn.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("drag"));
        btn.onclick = function (e) {
            e.stopPropagation();
        };
        return btn;
    };
    ColumnTools.prototype.createSortBtn = function () {
        var _this = this;
        var descTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("descOrder");
        var ascTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("ascOrder");
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("sorting");
        btn.title = "";
        var direction = "asc";
        btn.onclick = function (e) {
            if (direction == "asc") {
                btn.title = descTitle;
                direction = "desc";
            }
            else {
                btn.title = ascTitle;
                direction = "asc";
            }
            _this.table.sortByColumn(_this.columnName, direction);
        };
        btn.ondrag = function (e) {
            e.stopPropagation();
        };
        return btn;
    };
    ColumnTools.prototype.createHideBtn = function () {
        var _this = this;
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("hide");
        btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("hideColumn");
        btn.onclick = function () {
            _this.table.setColumnVisibility(_this.columnName, _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Invisible);
        };
        return btn;
    };
    ColumnTools.prototype.createMoveToDetailsBtn = function () {
        var _this = this;
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("movetodetails");
        button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("moveToDetail");
        button.onclick = function (e) {
            e.stopPropagation();
            _this.table.setColumnLocation(_this.columnName, _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Row);
        };
        return button;
    };
    ColumnTools.prototype.createFilterInput = function () {
        var _this = this;
        var el = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createInput("sa-table__filter", "Search...");
        el.onclick = function (e) { return e.stopPropagation(); };
        el.onchange = function (e) {
            _this.table.applyColumnFilter(_this.columnName, el.value);
        };
        return el;
    };
    ColumnTools.prototype.createColumnPrivateButton = function () {
        var _this = this;
        var button = document.createElement("button");
        var makePrivateSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makeprivate");
        var makePublicSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makepublic");
        var currentVisibility = this.table.getColumnVisibility(this.columnName);
        updateState(currentVisibility);
        button.appendChild(makePrivateSvg);
        button.appendChild(makePublicSvg);
        button.onclick = function (e) {
            e.stopPropagation();
            if (currentVisibility === _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].PublicInvisible) {
                currentVisibility = _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Visible;
            }
            else {
                currentVisibility = _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].PublicInvisible;
            }
            _this.table.setColumnVisibility(_this.columnName, currentVisibility);
            updateState(currentVisibility);
        };
        function updateState(visibility) {
            var isPrivate = visibility === _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].PublicInvisible;
            if (isPrivate) {
                button.className = "sa-table__svg-button sa-table__svg-button--active";
                button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("makePublicColumn");
                makePrivateSvg.style.display = "block";
                makePublicSvg.style.display = "none";
            }
            else {
                button.className = "sa-table__svg-button";
                button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("makePrivateColumn");
                makePrivateSvg.style.display = "none";
                makePublicSvg.style.display = "block";
            }
        }
        return button;
    };
    return ColumnTools;
}());



/***/ }),

/***/ "./src/tables/tools/rowtools.ts":
/*!**************************************!*\
  !*** ./src/tables/tools/rowtools.ts ***!
  \**************************************/
/*! exports provided: TableRow, TabulatorRow, DatatablesRow, RowTools, Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabulatorRow", function() { return TabulatorRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return DatatablesRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowTools", function() { return RowTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");





var TableRow = /** @class */ (function () {
    function TableRow(table, toolsContainer, detailsContainer, renderDetailActions) {
        var _this = this;
        this.table = table;
        this.toolsContainer = toolsContainer;
        this.detailsContainer = detailsContainer;
        this.renderDetailActions = renderDetailActions;
        this.detailedRowClass = "sa-table__detail-row";
        this.isDetailsExpanded = false;
        this.onToggleDetails = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.details = new Details(table, this, detailsContainer, renderDetailActions);
        this.tools = new RowTools(toolsContainer, table, this);
        table.onColumnsLocationChanged.add(function () {
            _this.closeDetails();
        });
    }
    TableRow.prototype.getIsDetailsExpanded = function () {
        return false;
    };
    TableRow.prototype.render = function () {
        this.tools.render();
    };
    TableRow.prototype.openDetails = function () {
        this.details.open();
        this.getElement().className += " " + this.detailedRowClass;
        this.onToggleDetails.fire(this, { isExpanded: true });
        this.isDetailsExpanded = true;
    };
    TableRow.prototype.closeDetails = function () {
        this.details.close();
        this.getElement().classList.remove(this.detailedRowClass);
        this.onToggleDetails.fire(this, { isExpanded: false });
        this.isDetailsExpanded = false;
    };
    TableRow.prototype.toggleDetails = function () {
        if (this.isDetailsExpanded) {
            this.closeDetails();
        }
        else
            this.openDetails();
    };
    return TableRow;
}());

var TabulatorRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TabulatorRow, _super);
    function TabulatorRow(table, toolsContainer, detailsContainer, innerRow, renderDetailActions) {
        var _this = _super.call(this, table, toolsContainer, detailsContainer, renderDetailActions) || this;
        _this.table = table;
        _this.toolsContainer = toolsContainer;
        _this.detailsContainer = detailsContainer;
        _this.innerRow = innerRow;
        _this.renderDetailActions = renderDetailActions;
        return _this;
    }
    TabulatorRow.prototype.getElement = function () {
        return this.innerRow.getElement();
    };
    TabulatorRow.prototype.getData = function () {
        return this.innerRow.getData();
    };
    return TabulatorRow;
}(TableRow));

var DatatablesRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DatatablesRow, _super);
    function DatatablesRow(table, toolsContainer, detailsContainer, _innerRow, renderDetailActions) {
        var _this = _super.call(this, table, toolsContainer, detailsContainer, renderDetailActions) || this;
        _this.table = table;
        _this.toolsContainer = toolsContainer;
        _this.detailsContainer = detailsContainer;
        _this._innerRow = _innerRow;
        _this.renderDetailActions = renderDetailActions;
        _this.rowElement = _innerRow.node();
        _this.rowData = _innerRow.data();
        _this._innerRow = _this._innerRow.row(_this.rowElement);
        return _this;
    }
    Object.defineProperty(DatatablesRow.prototype, "innerRow", {
        get: function () {
            return this._innerRow.row(this.rowElement);
        },
        enumerable: true,
        configurable: true
    });
    DatatablesRow.prototype.getElement = function () {
        return this.rowElement;
    };
    DatatablesRow.prototype.getData = function () {
        return this.rowData;
    };
    return DatatablesRow;
}(TableRow));

var RowTools = /** @class */ (function () {
    function RowTools(targetNode, table, row) {
        this.targetNode = targetNode;
        this.table = table;
        this.row = row;
        this.createDetailsBtn = function (row) {
            var btn = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createSvgButton("detail");
            btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_2__["localization"].getString("showMinorColumns");
            btn.onclick = function () {
                row.toggleDetails();
            };
            return btn;
        };
        this.actions = [this.createDetailsBtn];
    }
    RowTools.prototype.render = function () {
        var _this = this;
        this.actions.forEach(function (action) {
            _this.targetNode.appendChild(action(_this.row, _this.table));
        });
    };
    return RowTools;
}());

var Details = /** @class */ (function () {
    function Details(table, row, targetNode, renderActions) {
        var _this = this;
        this.table = table;
        this.row = row;
        this.targetNode = targetNode;
        this.renderActions = renderActions;
        this.createShowAsColumnButton = function (columnName) {
            var button = document.createElement("button");
            button.innerHTML = _localizationManager__WEBPACK_IMPORTED_MODULE_2__["localization"].getString("showAsColumn");
            button.className = "sa-table__btn sa-table__btn--gray";
            button.onclick = function (e) {
                e.stopPropagation();
                _this.table.setColumnLocation(columnName, _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Column);
            };
            return button;
        };
        var detailsTable = document.createElement("table");
        detailsTable.className = "sa-table__detail-table";
        this.detailsTable = detailsTable;
        this.table.onColumnsLocationChanged.add(function () {
            _this.close();
        });
    }
    Details.prototype.setContainer = function (targetNode) {
        this.targetNode = targetNode;
    };
    Details.prototype.open = function () {
        var _this = this;
        this.detailsTable.innerHTML = "";
        var rows = [];
        this.table.columns
            .filter(function (column) { return column.location === _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Row && column; })
            .forEach(function (column) {
            var row = document.createElement("tr");
            row.className = "sa-table__detail";
            var td1 = document.createElement("td");
            td1.textContent = column.displayName;
            var td2 = document.createElement("td");
            td2.textContent = _this.row.getData()[column.name];
            var td3 = document.createElement("td");
            td3.appendChild(_this.createShowAsColumnButton(column.name));
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            rows.push(row);
        });
        if (!!this.renderActions) {
            var row = document.createElement("tr");
            row.className = "sa-table__detail";
            var td = document.createElement("td");
            td.colSpan = 3;
            row.appendChild(td);
            rows.push(row);
            this.renderActions(td, this.row);
        }
        rows.forEach(function (row) {
            _this.detailsTable.appendChild(row);
        });
        this.targetNode.appendChild(this.detailsTable);
    };
    Details.prototype.close = function () {
        this.detailsTable.remove();
    };
    return Details;
}());



/***/ }),

/***/ "./src/tables/tools/tabletools.ts":
/*!****************************************!*\
  !*** ./src/tables/tools/tabletools.ts ***!
  \****************************************/
/*! exports provided: TableTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableTools", function() { return TableTools; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");



var TableTools = /** @class */ (function () {
    function TableTools(targetNode, table) {
        this.targetNode = targetNode;
        this.table = table;
        this.createShowColumnDropdown = function (table) {
            var dropdown = document.createElement("select");
            dropdown.classList.add("sa-table__show-column");
            function update() {
                var hiddenColumns = table.columns.filter(function (column) { return column.visibility === _config__WEBPACK_IMPORTED_MODULE_1__["ColumnVisibility"].Invisible; });
                if (hiddenColumns.length == 0) {
                    dropdown.style.display = "none";
                    return;
                }
                dropdown.style.display = "initial";
                dropdown.innerHTML = "";
                var option = document.createElement("option");
                option.text = _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showColumn");
                option.disabled = true;
                option.selected = true;
                dropdown.appendChild(option);
                hiddenColumns.forEach(function (column) {
                    var option = document.createElement("option");
                    var text = column.displayName;
                    if (text.length > 20) {
                        text = text.substring(0, 20) + "...";
                    }
                    option.text = text;
                    option.title = column.displayName;
                    option.value = column.name;
                    dropdown.appendChild(option);
                });
            }
            dropdown.onchange = function (e) {
                var val = e.target.value;
                e.stopPropagation();
                if (!val)
                    return;
                table.setColumnVisibility(val, _config__WEBPACK_IMPORTED_MODULE_1__["ColumnVisibility"].Visible);
            };
            update();
            table.onColumnsVisibilityChanged.add(function () {
                update();
            });
            return dropdown;
        };
        this.actions = [
            this.createFilterInput,
            this.createShowColumnDropdown,
            this.createEntriesSelector,
        ];
    }
    TableTools.prototype.render = function () {
        var _this = this;
        this.actions.forEach(function (action) {
            _this.targetNode.appendChild(action(_this.table));
        });
    };
    TableTools.prototype.createFilterInput = function (table) {
        var input = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createInput("sa-table__global-filter", "Search...");
        input.onchange = function (event) {
            table.applyFilter(event.target.value);
        };
        return input;
    };
    TableTools.prototype.createEntriesSelector = function (table) {
        function getEntriesDropdown(table) {
            var el = document.createElement("select");
            var optionsValues = ["1", "5", "10", "25", "50", "75", "100"];
            optionsValues.forEach(function (val) {
                var option = document.createElement("option");
                option.innerHTML = val;
                el.appendChild(option);
            });
            el.value = "5";
            el.onchange = function () {
                table.setPageSize(Number(el.value));
            };
            return el;
        }
        var selectorContainer = document.createElement("div");
        selectorContainer.className = "sa-table__entries";
        var showSpan = document.createElement("span");
        showSpan.innerHTML = "Show";
        var entriesSpan = document.createElement("span");
        entriesSpan.innerHTML = "entries";
        entriesSpan.className =
            "sa-table__entries-label sa-table__entries-label--left";
        selectorContainer.appendChild(showSpan);
        showSpan.className =
            "sa-table__entries-label sa-table__entries-label--right";
        selectorContainer.appendChild(getEntriesDropdown(table));
        selectorContainer.appendChild(entriesSpan);
        return selectorContainer;
    };
    return TableTools;
}());



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

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ }),

/***/ "tabulator-tables":
/*!***************************************************************************************************************************!*\
  !*** external {"root":"Tabulator","commonjs2":"tabulator-tables","commonjs":"tabulator-tables","amd":"tabulator-tables"} ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tabulator_tables__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZhcnNpLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvY29uZmlnLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy90YWJ1bGF0b3Iuc2Nzcz80ZmU3Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdG9vbHMvY29sdW1udG9vbHMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy90b29scy9yb3d0b29scy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3Rvb2xzL3RhYmxldG9vbHMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWNvcmVcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXktY29yZVwiLFwiYW1kXCI6XCJzdXJ2ZXktY29yZVwifSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiVGFidWxhdG9yXCIsXCJjb21tb25qczJcIjpcInRhYnVsYXRvci10YWJsZXNcIixcImNvbW1vbmpzXCI6XCJ0YWJ1bGF0b3ItdGFibGVzXCIsXCJhbWRcIjpcInRhYnVsYXRvci10YWJsZXNcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDRDQUE0QywreEU7Ozs7Ozs7Ozs7OztBQ0E1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Ozs7QUM5SEQseUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoic3VydmV5LmFuYWx5dGljcy50YWJ1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcInRhYnVsYXRvci10YWJsZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlBbmFseXRpY3NUYWJ1bGF0b3JcIiwgW1wic3VydmV5LWNvcmVcIiwgXCJ0YWJ1bGF0b3ItdGFibGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc1RhYnVsYXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwidGFidWxhdG9yLXRhYmxlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5QW5hbHl0aWNzVGFidWxhdG9yXCJdID0gZmFjdG9yeShyb290W1wiU3VydmV5XCJdLCByb290W1wiVGFidWxhdG9yXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RhYnVsYXRvcl90YWJsZXNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJpZXMvdGFidWxhdG9yLnRzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRldGFpbFxcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMS41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRyYWdcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMyA1bC0xIDEgMSAxSDlWM2wxIDEgMS0xLTMtMy0zIDMgMSAxIDEtMXY0SDNsMS0xLTEtMS0zIDMgMyAzIDEtMS0xLTFoNHY0bC0xLTEtMSAxIDMgMyAzLTMtMS0xLTEgMVY5aDRsLTEgMSAxIDEgMy0zelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWhpZGVcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDFcXFwiIGQ9XFxcIk0xMi43OSA0LjJMMTYgMWwtMS0xLTMuMzIgMy4zMkMxMC41NyAyLjU1IDkuMzIgMiA4IDIgMy42MyAyIDAgNy45NyAwIDcuOTdzMS4yNyAyLjEgMy4yMSAzLjgybC0zLjIzIDMuMjMuOTguOTggMy4zNS0zLjM0QzUuNDEgMTMuNDQgNi42NyAxNCA4IDE0YzQuMzcgMCA4LTYgOC02cy0xLjI3LTIuMDktMy4yMS0zLjh6TTIgNy45N2MxLjA3LTEuNDcgMy42MS00IDYtNCAuOCAwIDEuNi4yNyAyLjM1LjY4bC0uNzguNzhjLS40Ni0uMjktLjk5LS40Ni0xLjU3LS40Ni0xLjY2IDAtMyAxLjM0LTMgMyAwIC41OC4xNyAxLjExLjQ2IDEuNTdsLS45Ny45N0ExMy4zOCAxMy4zOCAwIDAgMSAyIDcuOTd6bTYgNGMtLjggMC0xLjU5LS4yNy0yLjMzLS42N2wuNzgtLjc3Yy40NS4yNy45OC40NCAxLjU1LjQ0IDEuNjYgMCAzLTEuMzQgMy0zIDAtLjU3LS4xNy0xLjA5LS40NC0xLjU1bC45OC0uOThjMS4xMS44NyAyLjAxIDEuOTEgMi40NiAyLjUyLTEuMDcgMS40OC0zLjYxIDQuMDEtNiA0LjAxelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1ha2Vwcml2YXRlXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI4XFxcIiBjeT1cXFwiNFxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTggOGMtMy4zMSAwLTYgMi43My02IDQuNjdTNS4yNyAxNSA4IDE1czYtLjQgNi0yLjMzUzExLjMxIDggOCA4elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1ha2VwdWJsaWNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjZcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTAgNWMwIC4zNC0uMDYuNjctLjE0Ljk5LjA1IDAgLjA5LjAxLjE0LjAxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zQzguOTcgMCA4LjA3LjUyIDcuNTMgMS4zIDguOTggMS45MSAxMCAzLjMzIDEwIDV6TTYgOWMtMy4zMSAwLTYgMi43My02IDQuNjdTMy4yNyAxNiA2IDE2czYtLjQgNi0yLjMzUzkuMzEgOSA2IDl6TTEwIDdjLS4xOSAwLS4zOC4wMS0uNTcuMDNhNC4xNCA0LjE0IDAgMCAxLTEuMzcgMS4zOWMzIC44MyA1LjIzIDMuMzEgNS40MiA1LjI4IDEuNDQtLjMxIDIuNTItLjkyIDIuNTItMi4wM0MxNiA5Ljc0IDEzLjMxIDcgMTAgN3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tb3ZldG9kZXRhaWxzXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMTMuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEyIDFoM3Y5aC0zek0yLjAyIDcuMDJMMSA2IDAgN2wzIDMgMy0zLTEtMS0uOTQuOTRDNC4zMyA0LjczIDYuMjEgMyA4LjUgM2MuMTcgMCAuMzMuMDMuNS4wNVYxLjAzQzguODMgMS4wMSA4LjY3IDEgOC41IDEgNS4wOCAxIDIuMjcgMy42NiAyLjAyIDcuMDJ6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctc29ydGluZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTggM2wyIDIgMS0xLTMtMy0zIDMgMSAxek04IDEzbC0yLTItMSAxIDMgMyAzLTMtMS0xelxcXCI+PC9wYXRoPjwvc3ltYm9sPjwvc3ZnPlwiOyIsImV4cG9ydCAqIGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbi8vbG9jYWxpemF0aW9uXG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZmFyc2lcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mcmVuY2hcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL3RhYmxlcy90YWJ1bGF0b3JcIjtcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcbi8vaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJNYWtlIGNvbHVtbiBwdWJsaWNcIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcbiAgc2hvd0J1dHRvbjogXCJTaG93XCIsXG4gIHJlc2V0RmlsdGVyOiBcIlJlc2V0IEZpbHRlclwiLFxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0XCIsIFxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJTaG93IG1pbm9yIGNvbHVtbnNcIixcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCJcbn07XG5cbi8vVW5jb21tZW50IHRoZXNlIHR3byBsaW5lcyBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGUuIFlvdSBzaG91bGQgcmVwbGFjZSBcImVuXCIgYW5kIGVuU3RyaW5ncyB3aXRoIHlvdXIgbG9jYWxlIChcImZyXCIsIFwiZGVcIiBhbmQgc28gb24pIGFuZCB5b3VyIHZhcmlhYmxlLlxuLy9sb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4vL2xvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJFbmdsaXNoXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGZhcnNpU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwi2q/YsdmI2Ycg2KjZhtiv24wg2KjYp1wiLFxuICB1bmdyb3VwQnV0dG9uOiBcItit2LDZgSDar9ix2YjZh1wiLFxuICBzZWxlY3RCdXR0b246IFwi2KfZhtiq2K7Yp9ioXCIsXG4gIGhpZGVDb2x1bW46IFwi2YXYrtmB24wg2qnYsdiv2YYg2LPYqtmI2YZcIixcbiAgc2hvd0NvbHVtbjogXCLZhtmF2KfbjNi0INiz2KrZiNmGXCIsXG4gIG1vdmVUb0RldGFpbDogXCLYp9mG2KrZgtin2YQg2KjZhyDYrNiy2KbbjNin2KpcIixcbiAgc2hvd0FzQ29sdW1uOiBcItmG2YXYp9uM2LQg2KjZhyDYudmG2YjYp9mGINiz2KrZiNmGXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCLZhdiq2YjZhiDYr9ixINis2K/ZiNmEXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcItin2KjYsSDaqdmE2YXYp9iqXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwi2YXbjNmE2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfcGllOiBcItiv2KfYqNix2Ycg2KfbjChwaWUpXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcItm+2LHYp9qp2YbYr9qv24woU2NhdHRlcilcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIti52YLYsdio2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcItmF2K7ZgduMXCIsXG4gIHJlc2V0RmlsdGVyOiBcItio2KfYstmG2LTYp9mG24wg2YHbjNmE2KrYsdmH2KdcIixcbiAgY2xlYXJCdXR0b246IFwi2b7Yp9qpINqp2LHYr9mGXCIsXG4gIGFkZEVsZW1lbnQ6IFwi2KfZhtiq2K7Yp9ioINiz2YjYp9mEINio2LHYp9uMINmG2YXYp9uM2LQuLi5cIlxufTtcblxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmYVwiXSA9IGZhcnNpU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZhXCJdID0gXCJGYXJzaShQZXJzaWFuKVwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCB2YXIgZnJlbmNoU3RyaW5ncyA9IHtcclxuICAgIGdyb3VwQnV0dG9uOiBcIkdyb3VwZXJcIixcclxuICAgIHVuZ3JvdXBCdXR0b246IFwiRGlzc29jaWVyXCIsXHJcbiAgICBzZWxlY3RCdXR0b246IFwiU8OpbGVjdGlvbm5lclwiLFxyXG4gICAgaGlkZUNvbHVtbjogXCJNYXNxdWVyIGNvbG9ubmVcIixcclxuICAgIHNob3dDb2x1bW46IFwiQWZmaWNoZXIgY29sb25uZVwiLFxyXG4gICAgbWFrZVByaXZhdGVDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHJpdsOpXCIsXHJcbiAgICBtYWtlUHVibGljQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHB1YmxpY1wiLFxyXG4gICAgbW92ZVRvRGV0YWlsOiBcIkTDqXBsYWNlciB2ZXJzIGTDqXRhaWxzXCIsXHJcbiAgICBzaG93QXNDb2x1bW46IFwiQWZmaWNoZXIgZW4gY29sb25uZVwiLFxyXG4gICAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRlcyBlbiB0YWJsZVwiLFxyXG4gICAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiTnVhZ2VzIGRlIG1vdHNcIixcclxuICAgIGNoYXJ0VHlwZV9iYXI6IFwiQmFycmVzXCIsXHJcbiAgICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJCYXJyZXMgZW1waWzDqWVzXCIsXHJcbiAgICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiQW5uZWF1XCIsXHJcbiAgICBjaGFydFR5cGVfcGllOiBcIlNlY3RldXJzXCIsXHJcbiAgICBjaGFydFR5cGVfc2NhdHRlcjogXCJOdWFnZXMgZGUgcG9pbnRzXCIsXHJcbiAgICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcclxuICAgIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGVzXCIsXHJcbiAgICBoaWRlQnV0dG9uOiBcIk1hc3F1ZXJcIixcclxuICAgIHJlc2V0RmlsdGVyOiBcIlJhZnJhaWNoaXIgRmlsdHJlc1wiLFxyXG4gICAgY2xlYXJCdXR0b246IFwiUmFmcmFpY2hpclwiLFxyXG4gICAgYWRkRWxlbWVudDogXCJDaG9pc2lyIGxhIHF1ZXN0aW9uIMOgIGFmZmljaGVyLi4uXCIsXHJcbiAgICBkZWZhdWx0T3JkZXI6IFwiRGVmYXV0XCIsXHJcbiAgICBhc2NPcmRlcjogXCJBc2NlbmRhbnRcIixcclxuICAgIGRlc2NPcmRlcjogXCJEZXNjZW5kYW50XCIsXHJcbiAgICBzaG93TWlub3JDb2x1bW5zOiBcIkFmZmljaGVyIGxlcyBjb2xvbm5lcyBtaW5ldXJlc1wiXHJcbn07XHJcblxyXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZyXCJdID0gZnJlbmNoU3RyaW5ncztcclxubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZnJcIl0gPSBcIkZyZW5jaFwiOyIsImltcG9ydCB7IGVuZ2xpc2hTdHJpbmdzIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uL2VuZ2xpc2hcIjtcblxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XG4gIGN1cnJlbnRMb2NhbGVWYWx1ZTogXCJcIixcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXG4gIGxvY2FsZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBsb2NhbGVOYW1lczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxuICBnZXQgY3VycmVudExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPT09IHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlXG4gICAgICA/IFwiXCJcbiAgICAgIDogdGhpcy5jdXJyZW50TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlXG4gICAgICA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIGlmICghbG9jIHx8ICFsb2Nbc3RyTmFtZV0pIGxvYyA9IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIHZhciByZXN1bHQgPSBsb2Nbc3RyTmFtZV07XG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICByZXMucHVzaChcIlwiKTtcbiAgICBpZiAodGhpcy5zdXBwb3J0ZWRMb2NhbGVzICYmIHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5zb3J0KCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XG4iLCJleHBvcnQgZW51bSBDb2x1bW5WaXNpYmlsaXR5IHtcbiAgVmlzaWJsZSxcbiAgSW52aXNpYmxlLFxuICBQdWJsaWNJbnZpc2libGUsXG59XG5leHBvcnQgZW51bSBRdWVzdGlvbkxvY2F0aW9uIHtcbiAgQ29sdW1uLFxuICBSb3csXG59XG5leHBvcnQgZW51bSBDb2x1bW5EYXRhVHlwZSB7XG4gIFRleHQsXG4gIEZpbGVMaW5rLFxuICBJbWFnZSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGRhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcbiAgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eTtcbiAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb247XG59XG4iLCJpbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgUXVlc3Rpb24sIEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uLCBDb2x1bW5EYXRhVHlwZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGV0YWlscywgVGFibGVSb3cgfSBmcm9tIFwiLi90b29scy9yb3d0b29sc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGUge1xuICBwcm90ZWN0ZWQgdGFibGVEYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IGFueSxcbiAgICBwcm90ZWN0ZWQgX2NvbHVtbnM6IEFycmF5PGFueT4gPSBbXSxcbiAgICBwcm90ZWN0ZWQgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgaWYgKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdFRhYmxlRGF0YShkYXRhKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3Jvd3M6IFRhYmxlUm93W10gPSBbXTtcblxuICBwcm90ZWN0ZWQgcm93RGV0YWlsczogeyBbcm93TmFtZTogc3RyaW5nXTogRGV0YWlscyB9O1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Sb3dDcmVhdGVkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uVGFibGVUb29sc0NyZWF0ZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Db2x1bW5Ub29sc0NyZWF0ZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgcmVuZGVyRGV0YWlsQWN0aW9uczogKFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcm93OiBUYWJsZVJvd1xuICApID0+IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IGFwcGx5RmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IHNvcnRCeUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBnZXRDcmVhdGVkUm93cygpOiBUYWJsZVJvd1tdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3Jvd3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpLm1hcCgocXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkYXRhVHlwZTpcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXG4gICAgICAgICAgICA/IENvbHVtbkRhdGFUeXBlLlRleHRcbiAgICAgICAgICAgIDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6XG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIlxuICAgICAgICAgICAgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGVcbiAgICAgICAgICAgIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbixcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGlzVmlzaWJsZSA9ICh2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSkgfHxcbiAgICAgICghdGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlKVxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QXZhaWxhYmxlQ29sdW1ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcihcbiAgICAgIChjb2x1bW4pID0+XG4gICAgICAgIGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4gJiZcbiAgICAgICAgdGhpcy5pc1Zpc2libGUoY29sdW1uLnZpc2liaWxpdHkpXG4gICAgKTtcbiAgfTtcblxuICBwcm90ZWN0ZWQgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gaXRlbVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi5kaXNwbGF5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID1cbiAgICAgICAgICB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgdGhpcy5jb2x1bW5zLmZpbHRlcihcbiAgICAgIChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lXG4gICAgKVswXS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmZpcmUodGhpcywgbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcsIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF07XG4gICAgY29sdW1uLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5O1xuICAgIHRoaXMub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuZmlyZSh0aGlzLCBudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZyk6IENvbHVtblZpc2liaWxpdHkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgICByZXR1cm4gY29sdW1uLnZpc2liaWxpdHk7XG4gIH1cblxuICBwdWJsaWMgZG9TdGF0ZVNhdmUoKSB7XG4gICAgdGhpcy5zdGF0ZVNhdmVDYWxsYmFjayh7IGNvbHVtbnM6IHRoaXMuY29sdW1ucyB9LCB0aGlzLmRhdGEpO1xuICB9XG4gIHB1YmxpYyBzdGF0ZVNhdmVDYWxsYmFjayhzZXR0aW5nczogYW55LCBkYXRhOiBhbnkpIHt9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL3RhYmxlXCI7XHJcbmltcG9ydCB7IFN1cnZleU1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IENvbHVtblZpc2liaWxpdHksIFF1ZXN0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBcIi4vdGFidWxhdG9yLnNjc3NcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgVGFidWxhdG9yUm93IH0gZnJvbSBcIi4vdG9vbHMvcm93dG9vbHNcIjtcclxuaW1wb3J0IHsgQ29sdW1uVG9vbHMgfSBmcm9tIFwiLi90b29scy9jb2x1bW50b29sc1wiO1xyXG5pbXBvcnQgeyBUYWJsZVRvb2xzIH0gZnJvbSBcIi4vdG9vbHMvdGFibGV0b29sc1wiO1xyXG5cclxuY29uc3QgVGFidWxhdG9yVGFibGVzID0gcmVxdWlyZShcInRhYnVsYXRvci10YWJsZXNcIik7XHJcblxyXG5pZiAoISFkb2N1bWVudCkge1xyXG4gIGNvbnN0IHN2Z1RlbXBsYXRlID0gcmVxdWlyZShcImh0bWwtbG9hZGVyP2ludGVycG9sYXRlIXZhbC1sb2FkZXIhLi4vc3ZnYnVuZGxlLmh0bWxcIik7XHJcbiAgY29uc3QgdGVtcGxhdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB0ZW1wbGF0ZUhvbGRlci5pbm5lckhUTUwgPSBzdmdUZW1wbGF0ZTtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlSG9sZGVyKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElEb3dubG9hZE9wdGlvbnMge1xyXG4gIHBkZj86IGFueTtcclxuICBjc3Y/OiBhbnk7XHJcbiAgeGxzeD86IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElPcHRpb25zIHtcclxuICBjb2x1bW5NaW5XaWR0aDogbnVtYmVyO1xyXG4gIHBhZ2luYXRpb25CdXR0b25Db3VudDogbnVtYmVyO1xyXG4gIGRvd25sb2FkT3B0aW9uczogSURvd25sb2FkT3B0aW9ucztcclxufVxyXG5cclxudmFyIGRlZmF1bHREb3dubG9hZE9wdGlvbnM6IElEb3dubG9hZE9wdGlvbnMgPSB7XHJcbiAgcGRmOiB7XHJcbiAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLCAvL3NldCBwYWdlIG9yaWVudGF0aW9uIHRvIHBvcnRyYWl0XHJcbiAgICBhdXRvVGFibGU6IHtcclxuICAgICAgLy9hZHZhbmNlZCB0YWJsZSBzdHlsaW5nXHJcbiAgICAgIHN0eWxlczoge1xyXG4gICAgICAgIGZpbGxDb2xvcjogWzI2LCAxNzksIDE0OF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbHVtblN0eWxlczoge1xyXG4gICAgICAgIGlkOiB7IGZpbGxDb2xvcjogMjU1IH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcmdpbjogeyB0b3A6IDYwIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3N2OiB7IGlzVmlzaWJsZTogdHJ1ZSwgZGVsaW1pdGVyOiBcIixcIiB9LFxyXG4gIHhsc3g6IHsgaXNWaXNpYmxlOiB0cnVlLCBzaGVldE5hbWU6IFwicmVzdWx0c1wiIH0sXHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGRlZmF1bHRPcHRpb25zOiBJT3B0aW9ucyA9IHtcclxuICBjb2x1bW5NaW5XaWR0aDogMjQ4LFxyXG4gIGRvd25sb2FkT3B0aW9uczogZGVmYXVsdERvd25sb2FkT3B0aW9ucyxcclxuICBwYWdpbmF0aW9uQnV0dG9uQ291bnQ6IDMsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVGFidWxhdG9yIGV4dGVuZHMgVGFibGUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcclxuICAgIGRhdGE6IEFycmF5PE9iamVjdD4sXHJcbiAgICBvcHRpb25zOiBJT3B0aW9ucyxcclxuICAgIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW10sXHJcbiAgICBpc1RydXN0ZWRBY2Nlc3MgPSBmYWxzZVxyXG4gICkge1xyXG4gICAgc3VwZXIoc3VydmV5LCBkYXRhLCBvcHRpb25zLCBfY29sdW1ucywgaXNUcnVzdGVkQWNjZXNzKTtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHRoaXMub3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xyXG4gICAgaWYgKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZWxmLl9jb2x1bW5zID0gc2VsZi5idWlsZENvbHVtbnMoc3VydmV5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXRhaWxCdXR0b25DcmVhdG9yczogQXJyYXk8KGNvbHVtbk5hbWU/OiBzdHJpbmcpID0+IEhUTUxFbGVtZW50PiA9IFtdO1xyXG5cclxuICBwcml2YXRlIHJlbmRlclJlc3VsdDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBDT0xVTU5fTUlOX1dJRFRIID0gMTU1O1xyXG4gIHByaXZhdGUgdGFidWxhdG9yVGFibGVzOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgdGFibGVDb250YWluZXI6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuICBwcml2YXRlIHRhYmxlVG9vbHM6IFRhYmxlVG9vbHM7XHJcblxyXG4gIHB1YmxpYyByZW5kZXIgPSAodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIHRhcmdldE5vZGUuY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlIHNhLXRhYnVsYXRvclwiO1xyXG4gICAgdGFyZ2V0Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnMoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRhYmxlRGF0YTtcclxuXHJcbiAgICB2YXIgaGVhZGVyID0gdGhpcy5jcmVhdGVIZWFkZXIoKTtcclxuICAgIHZhciBwYWdpbmF0aW9uRWxlbWVudCA9IHRoaXMuY3JlYXRlUGFnaW5hdGlvbkVsZW1lbnQoKTtcclxuXHJcbiAgICB0aGlzLnRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMudGFibGVDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzID0gbmV3IFRhYnVsYXRvclRhYmxlcyh0aGlzLnRhYmxlQ29udGFpbmVyLCB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGxheW91dDogXCJmaXRDb2x1bW5zXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IFwibG9jYWxcIixcclxuICAgICAgcGFnaW5hdGlvblNpemU6IDUsXHJcbiAgICAgIG1vdmFibGVDb2x1bW5zOiB0cnVlLFxyXG4gICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICBjb2x1bW5zLFxyXG4gICAgICByb3dGb3JtYXR0ZXI6IHRoaXMucm93Rm9ybWF0dGVyLFxyXG4gICAgICBwYWdpbmF0aW9uQnV0dG9uQ291bnQ6IHRoaXMub3B0aW9ucy5wYWdpbmF0aW9uQnV0dG9uQ291bnQsXHJcbiAgICAgIHBhZ2luYXRpb25FbGVtZW50OiBwYWdpbmF0aW9uRWxlbWVudCxcclxuICAgICAgY29sdW1uTW92ZWQ6IHRoaXMuY29sdW1uTW92ZWRDYWxsYmFjayxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvb2xzQ29udGFpbmVyID0gdGhpcy5jcmVhdGVUb29sc0NvbnRhaW5lcigpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRG93bmxvYWRzQmFyKCkpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRvb2xzQ29udGFpbmVyKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwYWdpbmF0aW9uRWxlbWVudCk7XHJcbiAgICB0aGlzLnRhYmxlVG9vbHMgPSBuZXcgVGFibGVUb29scyh0b29sc0NvbnRhaW5lciwgdGhpcyk7XHJcbiAgICB0aGlzLm9uVGFibGVUb29sc0NyZWF0ZWQuZmlyZSh0aGlzLCB7IHRvb2xzOiB0aGlzLnRhYmxlVG9vbHMgfSk7XHJcbiAgICB0aGlzLnRhYmxlVG9vbHMucmVuZGVyKCk7XHJcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHRhcmdldE5vZGU7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVEb3dubG9hZHNCYXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGNyZWF0ZURvd25sb2FkQnV0dG9uID0gKHR5cGU6IHN0cmluZywgY2FwdGlvbjogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zdCBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVCdG4oY2FwdGlvbik7XHJcbiAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmRvd25sb2FkKHR5cGUpO1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gYnRuO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRhYnVsYXRvcl9fZG93bmxvYWRzLWJhclwiO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kb3dubG9hZE9wdGlvbnMueGxzeC5pc1Zpc2libGUpIHtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKFwieGxzeFwiLCBcIkV4Y2VsXCIpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZG93bmxvYWRPcHRpb25zLnBkZi5pc1Zpc2libGUpIHtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKFwicGRmXCIsIFwiUERGXCIpKTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihcImNzdlwiLCBcIkNTVlwiKSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVG9vbHNDb250YWluZXIgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJzYS10YWJ1bGF0b3JfX3Rvb2xzLWNvbnRhaW5lclwiKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9O1xyXG5cclxuICBjcmVhdGVIZWFkZXIgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJzYS10YWJ1bGF0b3JfX2hlYWRlclwiKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9O1xyXG5cclxuICBjcmVhdGVQYWdpbmF0aW9uRWxlbWVudCA9ICgpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChcInNhLXRhYnVsYXRvcl9fcGFnaW5hdGlvbi1jb250YWluZXJcIik7XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnJlbmRlclJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB1bmRlZmluZWQ7XHJcbiAgfTtcclxuXHJcbiAgY29sdW1uTW92ZWRDYWxsYmFjayA9IChjb2x1bW46IGFueSwgY29sdW1uczogYW55W10pID0+IHtcclxuICAgIHZhciBmcm9tID0gdGhpcy5fY29sdW1ucy5pbmRleE9mKFxyXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcigoY29sKSA9PiBjb2wubmFtZSA9PSBjb2x1bW4uZ2V0RmllbGQoKSlbMF1cclxuICAgICk7XHJcbiAgICB2YXIgdG8gPSBjb2x1bW5zLmluZGV4T2YoY29sdW1uKSAtIDE7XHJcbiAgICB2YXIgZGVsZXRlZENvbHVtbnMgPSB0aGlzLl9jb2x1bW5zLnNwbGljZShmcm9tLCAxKTtcclxuICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKHRvLCAwLCBkZWxldGVkQ29sdW1uc1swXSk7XHJcbiAgfTtcclxuXHJcbiAgcm93Rm9ybWF0dGVyID0gKHJvdzogYW55KTogdm9pZCA9PiB7XHJcbiAgICB2YXIgdGFibGVSb3cgPSBuZXcgVGFidWxhdG9yUm93KFxyXG4gICAgICB0aGlzLFxyXG4gICAgICByb3cuZ2V0Q2VsbHMoKVswXS5nZXRFbGVtZW50KCksXHJcbiAgICAgIHJvdy5nZXRFbGVtZW50KCksXHJcbiAgICAgIHJvdyxcclxuICAgICAgdGhpcy5yZW5kZXJEZXRhaWxBY3Rpb25zXHJcbiAgICApO1xyXG4gICAgdGFibGVSb3cub25Ub2dnbGVEZXRhaWxzLmFkZCgoKSA9PiB7XHJcbiAgICAgIHJvdy5ub3JtYWxpemVIZWlnaHQoKTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vblJvd0NyZWF0ZWQuZmlyZSh0aGlzLCB7IHJvdzogdGFibGVSb3cgfSk7XHJcbiAgICB0YWJsZVJvdy5yZW5kZXIoKTtcclxuXHJcbiAgICB0aGlzLl9yb3dzLnB1c2godGFibGVSb3cpO1xyXG4gIH07XHJcblxyXG4gIHByb3RlY3RlZCBnZXRUaXRsZUZvcm1hdHRlciA9IChcclxuICAgIGNlbGw6IGFueSxcclxuICAgIGZvcm1hdHRlclBhcmFtczogYW55LFxyXG4gICAgb25SZW5kZXJlZDogYW55LFxyXG4gICAgY29sdW1uTmFtZTogYW55XHJcbiAgKSA9PiB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHZhciB0aXRsZSA9IHRoaXMuZ2V0Q29sdW1uVGl0bGUoY2VsbC5nZXRWYWx1ZSgpKTtcclxuICAgIHZhciBhY3Rpb25zID0gdGhpcy5nZXRIZWFkZXJBY3Rpb25zKGNvbHVtbk5hbWUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfTtcclxuXHJcbiAgZ2V0Q29sdW1uVGl0bGUgPSAodGl0bGVTdHI6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcclxuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVTdHI7XHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfTtcclxuXHJcbiAgZ2V0SGVhZGVyQWN0aW9ucyA9IChjb2x1bW5OYW1lOiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzYS10YWJsZV9fYWN0aW9uLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGNvbHVtblRvb2xzID0gbmV3IENvbHVtblRvb2xzKFxyXG4gICAgICBjb250YWluZXIsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIGNvbHVtbk5hbWUsXHJcbiAgICAgIHRoaXMuaXNUcnVzdGVkQWNjZXNzXHJcbiAgICApO1xyXG4gICAgdGhpcy5vbkNvbHVtblRvb2xzQ3JlYXRlZC5maXJlKHRoaXMsIHsgdG9vbHM6IGNvbHVtblRvb2xzIH0pO1xyXG4gICAgY29sdW1uVG9vbHMucmVuZGVyKCk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH07XHJcblxyXG4gIHByb3RlY3RlZCBnZXRDb2x1bW5zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQ29sdW1ucyA9IHRoaXMuZ2V0QXZhaWxhYmxlQ29sdW1ucygpO1xyXG4gICAgdmFyIG1pbkNvbHVtbldpZHRoID1cclxuICAgICAgdGhpcy5DT0xVTU5fTUlOX1dJRFRIID4gdGhpcy5vcHRpb25zLmNvbHVtbk1pbldpZHRoXHJcbiAgICAgICAgPyB0aGlzLkNPTFVNTl9NSU5fV0lEVEhcclxuICAgICAgICA6IHRoaXMub3B0aW9ucy5jb2x1bW5NaW5XaWR0aDtcclxuICAgIGNvbnN0IGNvbHVtbnM6IGFueSA9IGF2YWlsYWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaWVsZDogY29sdW1uLm5hbWUsXHJcbiAgICAgICAgdGl0bGU6IChxdWVzdGlvbiAmJiBxdWVzdGlvbi50aXRsZSkgfHwgY29sdW1uLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgIG1pbldpZHRoOiBtaW5Db2x1bW5XaWR0aCxcclxuICAgICAgICB3aWR0aFNocmluazogMSxcclxuICAgICAgICB2aXNpYmxlOiBjb2x1bW4udmlzaWJpbGl0eSAhPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXHJcbiAgICAgICAgLy8gaGVhZGVyRmlsdGVyOiBmYWxzZSxcclxuICAgICAgICBoZWFkZXJTb3J0OiBmYWxzZSxcclxuICAgICAgICB0aXRsZUZvcm1hdHRlcjogKGNlbGw6IGFueSwgZm9ybWF0dGVyUGFyYW1zOiBhbnksIG9uUmVuZGVyZWQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGVGb3JtYXR0ZXIoXHJcbiAgICAgICAgICAgIGNlbGwsXHJcbiAgICAgICAgICAgIGZvcm1hdHRlclBhcmFtcyxcclxuICAgICAgICAgICAgb25SZW5kZXJlZCxcclxuICAgICAgICAgICAgY29sdW1uLm5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgLy8gYWRkIHNwZWNpYWwgY29sdW1uIChjb2xsYXBzZS9leHBhbmQpXHJcbiAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICBmaWVsZDogXCJcIixcclxuICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgIGRvd25sb2FkOiBmYWxzZSxcclxuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcclxuICAgICAgd2lkdGg6IDYwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSB7XHJcbiAgICBzdXBlci5zZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWUsIHZpc2liaWxpdHkpO1xyXG4gICAgaWYgKHZpc2liaWxpdHkgPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpXHJcbiAgICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmhpZGVDb2x1bW4oY29sdW1uTmFtZSk7XHJcbiAgICBlbHNlIHRoaXMudGFidWxhdG9yVGFibGVzLnNob3dDb2x1bW4oY29sdW1uTmFtZSk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcclxuICAgIHN1cGVyLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIGxvY2F0aW9uKTtcclxuICAgIGlmIChsb2NhdGlvbiA9PSBRdWVzdGlvbkxvY2F0aW9uLlJvdylcclxuICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuaGlkZUNvbHVtbihjb2x1bW5OYW1lKTtcclxuICAgIGVsc2UgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2hvd0NvbHVtbihjb2x1bW5OYW1lKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNldFNvcnQoY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNldEZpbHRlcihjb2x1bW5OYW1lLCBcImxpa2VcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGx5RmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBjdXN0b21GaWx0ZXIgPSAoZGF0YTogYW55LCBmaWx0ZXJQYXJhbXM6IGFueSkgPT4ge1xyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGRhdGFba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclBhcmFtcy52YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRGaWx0ZXIoY3VzdG9tRmlsdGVyLCB7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNldFBhZ2VTaXplKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkb3dubG9hZCh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmRvd25sb2FkKFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBgcmVzdWx0cy4ke3R5cGV9YCxcclxuICAgICAgKDxhbnk+dGhpcy5vcHRpb25zLmRvd25sb2FkT3B0aW9ucylbdHlwZV1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMucmVkcmF3KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgQ29sdW1uVmlzaWJpbGl0eSwgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5Ub29scyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSB0YWJsZTogVGFibGUsXG4gICAgcHJpdmF0ZSBjb2x1bW5OYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBpc1RydXN0ZWRBY2Nlc3M6IGJvb2xlYW5cbiAgKSB7fVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRHJhZ0J0bigpKTtcbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTb3J0QnRuKCkpO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUhpZGVCdG4oKSk7XG4gICAgaWYgKHRoaXMuaXNUcnVzdGVkQWNjZXNzKVxuICAgICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29sdW1uUHJpdmF0ZUJ1dHRvbigpKTtcbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVNb3ZlVG9EZXRhaWxzQnRuKCkpO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZpbHRlcklucHV0KCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZURyYWdCdG4oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b24gc2EtdGFibGVfX2RyYWctYnV0dG9uXCI7XG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJkcmFnXCIpKTtcbiAgICBidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTb3J0QnRuKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xuICAgIGNvbnN0IGFzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpO1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJzb3J0aW5nXCIpO1xuICAgIGJ0bi50aXRsZSA9IFwiXCI7XG4gICAgdmFyIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImFzY1wiKSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGRlc2NUaXRsZTtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkZXNjXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4udGl0bGUgPSBhc2NUaXRsZTtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFibGUuc29ydEJ5Q29sdW1uKHRoaXMuY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlSGlkZUJ0bigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XG4gICAgYnRuLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVDb2x1bW5cIik7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlLnNldENvbHVtblZpc2liaWxpdHkoXG4gICAgICAgIHRoaXMuY29sdW1uTmFtZSxcbiAgICAgICAgQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGVcbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU1vdmVUb0RldGFpbHNCdG4oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcIm1vdmV0b2RldGFpbHNcIik7XG4gICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1vdmVUb0RldGFpbFwiKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbih0aGlzLmNvbHVtbk5hbWUsIFF1ZXN0aW9uTG9jYXRpb24uUm93KTtcbiAgICB9O1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRmlsdGVySW5wdXQoKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgdmFyIGVsID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlSW5wdXQoXCJzYS10YWJsZV9fZmlsdGVyXCIsIFwiU2VhcmNoLi4uXCIpO1xuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlbC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlLmFwcGx5Q29sdW1uRmlsdGVyKHRoaXMuY29sdW1uTmFtZSwgZWwudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbHVtblByaXZhdGVCdXR0b24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbWFrZVByaXZhdGVTdmcgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwibWFrZXByaXZhdGVcIik7XG4gICAgY29uc3QgbWFrZVB1YmxpY1N2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHVibGljXCIpO1xuICAgIHZhciBjdXJyZW50VmlzaWJpbGl0eSA9IHRoaXMudGFibGUuZ2V0Q29sdW1uVmlzaWJpbGl0eSh0aGlzLmNvbHVtbk5hbWUpO1xuICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVByaXZhdGVTdmcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHVibGljU3ZnKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGN1cnJlbnRWaXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZSkge1xuICAgICAgICBjdXJyZW50VmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRWaXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICB9XG4gICAgICB0aGlzLnRhYmxlLnNldENvbHVtblZpc2liaWxpdHkodGhpcy5jb2x1bW5OYW1lLCBjdXJyZW50VmlzaWJpbGl0eSk7XG4gICAgICB1cGRhdGVTdGF0ZShjdXJyZW50VmlzaWJpbGl0eSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpIHtcbiAgICAgIGNvbnN0IGlzUHJpdmF0ZSA9IHZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuUHVibGljSW52aXNpYmxlO1xuICAgICAgaWYgKGlzUHJpdmF0ZSkge1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fc3ZnLWJ1dHRvbi0tYWN0aXZlXCI7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtYWtlUHVibGljQ29sdW1uXCIpO1xuICAgICAgICBtYWtlUHJpdmF0ZVN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBtYWtlUHVibGljU3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uXCI7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtYWtlUHJpdmF0ZUNvbHVtblwiKTtcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtYWtlUHVibGljU3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIHRvb2xzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChcbiAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICBkYXRhOiBhbnksXG4gICAgICB0YWJsZVJvdzogVGFibGVSb3dcbiAgICApID0+IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKFxuICAgICAgdGFibGUsXG4gICAgICB0aGlzLFxuICAgICAgZGV0YWlsc0NvbnRhaW5lcixcbiAgICAgIHJlbmRlckRldGFpbEFjdGlvbnNcbiAgICApO1xuICAgIHRoaXMudG9vbHMgPSBuZXcgUm93VG9vbHModG9vbHNDb250YWluZXIsIHRhYmxlLCB0aGlzKTtcbiAgICB0YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gIHB1YmxpYyB0b29sczogUm93VG9vbHM7XG4gIHByaXZhdGUgZGV0YWlsZWRSb3dDbGFzcyA9IFwic2EtdGFibGVfX2RldGFpbC1yb3dcIjtcbiAgcHJpdmF0ZSBpc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xuICBwdWJsaWMgb25Ub2dnbGVEZXRhaWxzOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBnZXREYXRhKCk6IGFueTtcblxuICBwdWJsaWMgZ2V0SXNEZXRhaWxzRXhwYW5kZWQoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICB0aGlzLnRvb2xzLnJlbmRlcigpO1xuICB9XG5cbiAgcHVibGljIG9wZW5EZXRhaWxzKCkge1xuICAgIHRoaXMuZGV0YWlscy5vcGVuKCk7XG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5kZXRhaWxlZFJvd0NsYXNzO1xuICAgIHRoaXMub25Ub2dnbGVEZXRhaWxzLmZpcmUodGhpcywgeyBpc0V4cGFuZGVkOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGV0YWlscygpIHtcbiAgICB0aGlzLmRldGFpbHMuY2xvc2UoKTtcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGV0YWlsZWRSb3dDbGFzcyk7XG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEZXRhaWxzKCkge1xuICAgIGlmICh0aGlzLmlzRGV0YWlsc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLmNsb3NlRGV0YWlscygpO1xuICAgIH0gZWxzZSB0aGlzLm9wZW5EZXRhaWxzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhYnVsYXRvclJvdyBleHRlbmRzIFRhYmxlUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcbiAgICBwcm90ZWN0ZWQgdG9vbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgaW5uZXJSb3c6IGFueSxcbiAgICBwdWJsaWMgcmVuZGVyRGV0YWlsQWN0aW9uczogKFxuICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAgIHRhYmxlUm93OiBhbnlcbiAgICApID0+IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHN1cGVyKHRhYmxlLCB0b29sc0NvbnRhaW5lciwgZGV0YWlsc0NvbnRhaW5lciwgcmVuZGVyRGV0YWlsQWN0aW9ucyk7XG4gIH1cbiAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldEVsZW1lbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5pbm5lclJvdy5nZXREYXRhKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGF0YWJsZXNSb3cgZXh0ZW5kcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIHRvb2xzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfaW5uZXJSb3c6IGFueSxcbiAgICBwdWJsaWMgcmVuZGVyRGV0YWlsQWN0aW9uczogKFxuICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAgIHRhYmxlUm93OiBhbnlcbiAgICApID0+IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHN1cGVyKHRhYmxlLCB0b29sc0NvbnRhaW5lciwgZGV0YWlsc0NvbnRhaW5lciwgcmVuZGVyRGV0YWlsQWN0aW9ucyk7XG4gICAgdGhpcy5yb3dFbGVtZW50ID0gX2lubmVyUm93Lm5vZGUoKTtcbiAgICB0aGlzLnJvd0RhdGEgPSBfaW5uZXJSb3cuZGF0YSgpO1xuICAgIHRoaXMuX2lubmVyUm93ID0gdGhpcy5faW5uZXJSb3cucm93KHRoaXMucm93RWxlbWVudCk7XG4gIH1cbiAgcHJpdmF0ZSByb3dFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSByb3dEYXRhOiBhbnk7XG5cbiAgcHVibGljIGdldCBpbm5lclJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJSb3cucm93KHRoaXMucm93RWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucm93RWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5yb3dEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3dUb29scyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSB0YWJsZTogVGFibGUsXG4gICAgcHJpdmF0ZSByb3c6IFRhYmxlUm93XG4gICkge1xuICAgIHRoaXMuYWN0aW9ucyA9IFt0aGlzLmNyZWF0ZURldGFpbHNCdG5dO1xuICB9XG5cbiAgcHVibGljIGFjdGlvbnM6ICgocm93OiBUYWJsZVJvdywgdGFibGU6IFRhYmxlKSA9PiBIVE1MRWxlbWVudClbXTtcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChhY3Rpb24odGhpcy5yb3csIHRoaXMudGFibGUpKTtcbiAgICB9KTtcbiAgfVxuICBwcm90ZWN0ZWQgY3JlYXRlRGV0YWlsc0J0biA9IChyb3c6IFRhYmxlUm93KSA9PiB7XG4gICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwiZGV0YWlsXCIpO1xuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TWlub3JDb2x1bW5zXCIpO1xuXG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICByb3cudG9nZ2xlRGV0YWlscygpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhYmxlOiBUYWJsZSxcbiAgICBwcml2YXRlIHJvdzogVGFibGVSb3csXG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIHJlbmRlckFjdGlvbnM6IGFueVxuICApIHtcbiAgICB2YXIgZGV0YWlsc1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIGRldGFpbHNUYWJsZS5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIjtcbiAgICB0aGlzLmRldGFpbHNUYWJsZSA9IGRldGFpbHNUYWJsZTtcbiAgICB0aGlzLnRhYmxlLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5hZGQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgZGV0YWlsc1RhYmxlOiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgc2V0Q29udGFpbmVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy50YXJnZXROb2RlID0gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICB0aGlzLnRhYmxlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiBjb2x1bW4pXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19kZXRhaWxcIjtcbiAgICAgICAgdmFyIHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQxLnRleHRDb250ZW50ID0gY29sdW1uLmRpc3BsYXlOYW1lO1xuICAgICAgICB2YXIgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZDIudGV4dENvbnRlbnQgPSB0aGlzLnJvdy5nZXREYXRhKClbY29sdW1uLm5hbWVdO1xuICAgICAgICB2YXIgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZDMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTaG93QXNDb2x1bW5CdXR0b24oY29sdW1uLm5hbWUpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICAgICAgcm93cy5wdXNoKHJvdyk7XG4gICAgICB9KTtcbiAgICBpZiAoISF0aGlzLnJlbmRlckFjdGlvbnMpIHtcbiAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICByb3cuY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fZGV0YWlsXCI7XG4gICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICB0ZC5jb2xTcGFuID0gMztcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgIHRoaXMucmVuZGVyQWN0aW9ucyh0ZCwgdGhpcy5yb3cpO1xuICAgIH1cbiAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgdGhpcy5kZXRhaWxzVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9KTtcbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbiA9IChjb2x1bW5OYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyYXlcIjtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbik7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IENvbHVtblZpc2liaWxpdHkgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgVGFibGVUb29scyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsIHByaXZhdGUgdGFibGU6IFRhYmxlKSB7XG4gICAgdGhpcy5hY3Rpb25zID0gW1xuICAgICAgdGhpcy5jcmVhdGVGaWx0ZXJJbnB1dCxcbiAgICAgIHRoaXMuY3JlYXRlU2hvd0NvbHVtbkRyb3Bkb3duLFxuICAgICAgdGhpcy5jcmVhdGVFbnRyaWVzU2VsZWN0b3IsXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBhY3Rpb25zOiAoKHRhYmxlOiBUYWJsZSkgPT4gSFRNTEVsZW1lbnQpW107XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uKHRoaXMudGFibGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVGaWx0ZXJJbnB1dCh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcbiAgICAgIFwic2EtdGFibGVfX2dsb2JhbC1maWx0ZXJcIixcbiAgICAgIFwiU2VhcmNoLi4uXCJcbiAgICApO1xuICAgIGlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRhYmxlLmFwcGx5RmlsdGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU2hvd0NvbHVtbkRyb3Bkb3duID0gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZChcInNhLXRhYmxlX19zaG93LWNvbHVtblwiKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gdGFibGUuY29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChjb2x1bW46IGFueSkgPT4gY29sdW1uLnZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlXG4gICAgICApO1xuICAgICAgaWYgKGhpZGRlbkNvbHVtbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gICAgICBkcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udGV4dCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93Q29sdW1uXCIpO1xuICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICB2YXIgdGV4dCA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24udGV4dCA9IHRleHQ7XG4gICAgICAgIG9wdGlvbi50aXRsZSA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gY29sdW1uLm5hbWU7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkcm9wZG93bi5vbmNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdmFsKSByZXR1cm47XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KHZhbCwgQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICB0YWJsZS5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZHJvcGRvd247XG4gIH07XG5cbiAgY3JlYXRlRW50cmllc1NlbGVjdG9yKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBmdW5jdGlvbiBnZXRFbnRyaWVzRHJvcGRvd24odGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCIsIFwiMjVcIiwgXCI1MFwiLCBcIjc1XCIsIFwiMTAwXCJdO1xuICAgICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSB2YWw7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIGVsLnZhbHVlID0gXCI1XCI7XG5cbiAgICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0YWJsZS5zZXRQYWdlU2l6ZShOdW1iZXIoZWwudmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdG9yQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX2VudHJpZXNcIjtcbiAgICBjb25zdCBzaG93U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNob3dTcGFuLmlubmVySFRNTCA9IFwiU2hvd1wiO1xuICAgIGNvbnN0IGVudHJpZXNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZW50cmllc1NwYW4uaW5uZXJIVE1MID0gXCJlbnRyaWVzXCI7XG4gICAgZW50cmllc1NwYW4uY2xhc3NOYW1lID1cbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLWxlZnRcIjtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93U3Bhbik7XG4gICAgc2hvd1NwYW4uY2xhc3NOYW1lID1cbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLXJpZ2h0XCI7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlKSk7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cmllc1NwYW4pO1xuICAgIHJldHVybiBzZWxlY3RvckNvbnRhaW5lcjtcbiAgfVxufVxuIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgOiBkZXNjLFxuICAgIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZVxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbiIsImV4cG9ydCBjbGFzcyBUb29sYmFySGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT4sXHJcbiAgICBpc1NlbGVjdGVkOiAob3B0aW9uOiB7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSA9PiBib29sZWFuLFxyXG4gICAgaGFuZGVyOiAoZTogYW55KSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0LXdyYXBwZXJcIjtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0XCI7XHJcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dCA9IG9wdGlvbi50ZXh0O1xyXG4gICAgICBvcHRpb25FbGVtZW50LnNlbGVjdGVkID0gaXNTZWxlY3RlZChvcHRpb24pO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdC5vbmNoYW5nZSA9IGhhbmRlcjtcclxuICAgIHNlbGVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgIHJldHVybiBzZWxlY3RXcmFwcGVyO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJ1dHRvbihcclxuICAgIGhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWQsXHJcbiAgICB0ZXh0ID0gXCJcIixcclxuICAgIGNzc0NsYXNzID0gXCJcIlxyXG4gICkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10b29sYmFyX19idXR0b24gXCIgKyBjc3NDbGFzcztcclxuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBoYW5kbGVyO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudEhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdFbGVtZW50KHBhdGg6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInN2Z1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInVzZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWxlbS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXHJcbiAgICAgIFwiaHJlZlwiLFxyXG4gICAgICBcIiNzYS1zdmctXCIgKyBwYXRoXHJcbiAgICApO1xyXG4gICAgc3ZnRWxlbS5hcHBlbmRDaGlsZCh1c2VFbGVtKTtcclxuICAgIHJldHVybiBzdmdFbGVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdCdXR0b24ocGF0aDogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uXCI7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChwYXRoKSk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVCdG4oY2FwdGlvbjogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tc21hbGwgc2EtdGFibGVfX2J0bi0tZ3JheVwiO1xyXG4gICAgYnRuLmlubmVySFRNTCA9IGNhcHRpb247XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVJbnB1dChcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXIgPSBcIlwiLFxyXG4gICAgZGVmYXVsdFZhbHVlID0gXCJcIlxyXG4gICk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgZWwucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcclxuICAgIGVsLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBydW5uaW5nSW5Ccm93c2VyOiB0eXBlb2Ygd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIixcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93RG9tUmVuZGVyaW5nKCkge1xyXG4gIHJldHVybiBvcHRpb25zLnJ1bm5pbmdJbkJyb3dzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHppcEFycmF5cyhmaXJzdDogYW55W10sIHNlY29uZDogYW55W10pOiBhbnlbXVtdIHtcclxuICAgIGxldCB6aXBBcnJheTogYW55W10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oZmlyc3QubGVuZ3RoLCBzZWNvbmQubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgIHppcEFycmF5W2ldID0gW2ZpcnN0W2ldLCBzZWNvbmRbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHppcEFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnppcEFycmF5cyhcclxuICAgIHppcEFycmF5OiBhbnlbXVtdXHJcbiAgKTogeyBmaXJzdDogYW55W107IHNlY29uZDogYW55W10gfSB7XHJcbiAgICBsZXQgdHdvQXJyYXlzOiBhbnkgPSB7IGZpcnN0OiBbXSwgc2Vjb25kOiBbXSB9O1xyXG4gICAgemlwQXJyYXkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgdHdvQXJyYXlzLmZpcnN0W2ldID0gdmFsdWVbMF07XHJcbiAgICAgIHR3b0FycmF5cy5zZWNvbmRbaV0gPSB2YWx1ZVsxXTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHR3b0FycmF5cztcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBzb3J0RGljdGlvbmFyeShcclxuICAgIGtleXM6IGFueVtdLFxyXG4gICAgdmFsdWVzOiBhbnlbXSxcclxuICAgIGRlc2M6IGJvb2xlYW5cclxuICApOiB7IGtleXM6IGFueVtdOyB2YWx1ZXM6IGFueVtdIH0ge1xyXG4gICAgbGV0IGRpY3Rpb25hcnkgPSB0aGlzLnppcEFycmF5cyhrZXlzLCB2YWx1ZXMpO1xyXG4gICAgbGV0IGNvbXBhcmF0b3IgPSAoYTogYW55W10sIGI6IGFueVtdLCBhc2M6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhWzFdIDwgYlsxXSA/IDEgOiBhWzFdID09IGJbMV0gPyAwIDogLTE7XHJcbiAgICAgIHJldHVybiBhc2MgPyByZXN1bHQgOiByZXN1bHQgKiAtMTtcclxuICAgIH07XHJcbiAgICBkaWN0aW9uYXJ5LnNvcnQoKGE6IGFueVtdLCBiOiBhbnlbXSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGVzYyA/IGNvbXBhcmF0b3IoYSwgYiwgZmFsc2UpIDogY29tcGFyYXRvcihhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGtleXNBbmRWYWx1ZXMgPSB0aGlzLnVuemlwQXJyYXlzKGRpY3Rpb25hcnkpO1xyXG4gICAgcmV0dXJuIHsga2V5czoga2V5c0FuZFZhbHVlcy5maXJzdCwgdmFsdWVzOiBrZXlzQW5kVmFsdWVzLnNlY29uZCB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAvIG1heFZhbHVlKSAqIDEwMDtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RhYnVsYXRvcl90YWJsZXNfXzsiXSwic291cmNlUm9vdCI6IiJ9