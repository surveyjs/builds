/*!
 * surveyjs - SurveyJS Analytics library v1.7.22
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalytics", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalytics"] = factory(require("survey-core"));
	else
		root["SurveyAnalytics"] = factory(root["Survey"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_survey_core__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/datatables.ts");
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

/***/ "./src/entries/datatables.ts":
/*!***********************************!*\
  !*** ./src/entries/datatables.ts ***!
  \***********************************/
/*! exports provided: localization, surveyStrings, DataTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });

/* harmony import */ var _localization_farsi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localization/farsi */ "./src/localization/farsi.ts");
/* harmony import */ var _localization_french__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localization/french */ "./src/localization/french.ts");
/* harmony import */ var _tables_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tables/datatables */ "./src/tables/datatables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTables"]; });


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

/***/ "./src/tables/datatables.scss":
/*!************************************!*\
  !*** ./src/tables/datatables.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/tables/datatables.ts":
/*!**********************************!*\
  !*** ./src/tables/datatables.ts ***!
  \**********************************/
/*! exports provided: DataTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return DataTables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _datatables_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatables.scss */ "./src/tables/datatables.scss");
/* harmony import */ var _datatables_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_datatables_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tools_rowtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/rowtools */ "./src/tables/tools/rowtools.ts");
/* harmony import */ var _tools_columntools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/columntools */ "./src/tables/tools/columntools.ts");
/* harmony import */ var _tools_tabletools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/tabletools */ "./src/tables/tools/tabletools.ts");








if (!!document) {
    var svgTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!../svgbundle.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html");
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
var jQuery = window["jQuery"];
var DataTables = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataTables, _super);
    function DataTables(survey, data, options, _columns, isTrustedAccess) {
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        var _this = _super.call(this, survey, data, options, _columns, isTrustedAccess) || this;
        _this.currentPageNumber = 0;
        /**
         * The event is fired columns configuration has been changed.
         * <br/> sender the datatables adapter
         * <br/> options.survey current survey
         * @see getColumns
         */
        _this.columnsChanged = new survey_core__WEBPACK_IMPORTED_MODULE_2__["Event"]();
        _this.groupBy = [];
        _this.detailButtonCreators = [];
        if (_columns.length === 0) {
            _this._columns = _this.buildColumns(survey);
        }
        return _this;
    }
    DataTables.initJQuery = function ($) {
        jQuery = $;
    };
    DataTables.prototype.onColumnsChanged = function () {
        this.columnsChanged.fire(this, { survey: this.survey });
    };
    Object.defineProperty(DataTables.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        set: function (columns) {
            this._columns = columns;
            this.update(true);
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
            this.currentPageNumber = this.datatableApi.page.info().page;
            this.destroy();
            this.render(this.renderResult);
        }
    };
    Object.defineProperty(DataTables.prototype, "isRendered", {
        get: function () {
            return !!this.renderResult;
        },
        enumerable: true,
        configurable: true
    });
    DataTables.prototype.destroy = function () {
        //if(!this.targetNode) return;
        var tableNode = this.renderResult.children[0];
        if (jQuery.fn.DataTable.isDataTable(tableNode)) {
            jQuery(tableNode).DataTable().destroy();
        }
        this.datatableApi = undefined;
        this.renderResult.innerHTML = "";
        this.renderResult = undefined;
    };
    DataTables.prototype.setColumnVisibility = function (columnName, visibility) {
        _super.prototype.setColumnVisibility.call(this, columnName, visibility);
        var isInvisible = visibility == _config__WEBPACK_IMPORTED_MODULE_3__["ColumnVisibility"].Invisible;
        this.datatableApi.column(columnName + ":name").visible(!isInvisible);
    };
    DataTables.prototype.setColumnLocation = function (columnName, location) {
        _super.prototype.setColumnLocation.call(this, columnName, location);
        var column = this.datatableApi.column(columnName + ":name");
        var isColumnLocation = location == _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Column;
        column.visible(isColumnLocation);
    };
    DataTables.prototype.createActionContainer = function () {
        var container = document.createElement("div");
        container.className = "sa-table__action-container";
        return container;
    };
    DataTables.prototype.applyFilter = function (value) {
        this.datatableApi.search(value).draw(false);
    };
    DataTables.prototype.applyColumnFilter = function (columnName, value) {
        var column = this.datatableApi.column(columnName + ":name");
        if (column.search() !== value) {
            column.search(value).draw(false);
        }
    };
    DataTables.prototype.sortByColumn = function (columnName, direction) {
        var column = this.datatableApi.column(columnName + ":name");
        column.order(direction).draw(false);
    };
    DataTables.prototype.setPageSize = function (value) {
        this.datatableApi.page.len(value).draw(false);
    };
    DataTables.prototype.render = function (targetNode) {
        var _this = this;
        var self = this;
        targetNode.className += " sa-table sa-datatables";
        targetNode.innerHTML = "";
        var tableNode = document.createElement("table");
        var columns = this.getColumns();
        var columnsData = columns.map(function (c) { return c.data; });
        var dtButtonClass = "sa-table__btn sa-table__btn--small sa-table__btn--gray";
        var options = jQuery.extend(true, {
            buttons: [
                { extend: "copy", className: dtButtonClass },
                { extend: "csv", className: dtButtonClass },
                { extend: "print", className: dtButtonClass },
            ],
            dom: 'B<"sa-datatables__tools">prtip',
            // ordering: false,
            data: this.tableData,
            pageLength: 5,
            responsive: false,
            scrollX: true,
            columns: columns,
            colReorder: {
                fixedColumnsLeft: 1,
                realtime: false,
            },
            //orderFixed: [[1, "asc"]],
            language: {
                sSearch: " ",
                searchPlaceholder: "Search...",
                sLengthMenu: "Show _MENU_ entries",
                paginate: {
                    previous: " ",
                    next: " ",
                },
            },
            select: "api",
            headerCallback: function (thead, data, start, end, display) {
                var datatableApi = jQuery(tableNode).dataTable().api();
                var self = _this;
                jQuery(thead)
                    .children("th")
                    .each(function (index) {
                    var $thNode = jQuery(this);
                    $thNode.unbind("click.DT");
                    if (!!columnsData[index] && $thNode.has("button").length === 0) {
                        var container = self.createActionContainer();
                        var columnTools = new _tools_columntools__WEBPACK_IMPORTED_MODULE_6__["ColumnTools"](container, self, columnsData[index], self.isTrustedAccess);
                        self.onColumnToolsCreated.fire(this, { tools: columnTools });
                        columnTools.render();
                    }
                    $thNode.prepend(container);
                });
            },
        }, this.options);
        targetNode.appendChild(tableNode);
        tableNode.width = "100%";
        tableNode.className = "sa-datatables__table display responsive dataTable";
        var datatableApiRef = (this.datatableApi = jQuery(tableNode).DataTable(options));
        var toolsContainer = jQuery("div.sa-datatables__tools")[0];
        var tools = new _tools_tabletools__WEBPACK_IMPORTED_MODULE_7__["TableTools"](toolsContainer, this);
        this.onTableToolsCreated.fire(this, { tools: tools });
        tools.render();
        datatableApiRef.page(self.currentPageNumber);
        this.datatableApi.rowGroup().enable(false).draw(false);
        datatableApiRef.on("column-reorder", function (e, settings, details) {
            var deletedColumns = _this._columns.splice(details.from - 1, 1);
            _this._columns.splice(details.to - 1, 0, deletedColumns[0]);
            _this.onColumnsChanged();
        });
        datatableApiRef
            .rows()
            .eq(0)
            .each(function (index) {
            var row = datatableApiRef.row(index);
            var detailsTr = document.createElement("tr");
            var detailsTd = document.createElement("td");
            detailsTd.className = "sa-datatables__details-container";
            detailsTr.appendChild(detailsTd);
            var rowElement = row.node();
            var firstCell = row.cell(row.index(), 0).node();
            var tableRow = new _tools_rowtools__WEBPACK_IMPORTED_MODULE_5__["DatatablesRow"](_this, firstCell, detailsTd, row, _this.renderDetailActions);
            tableRow.onToggleDetails.add(function (sender, options) {
                if (options.isExpanded) {
                    detailsTd.colSpan = rowElement.childElementCount;
                    rowElement.parentNode.insertBefore(detailsTr, rowElement.nextSibling);
                }
                else {
                    detailsTr.remove();
                }
            });
            _this.onRowCreated.fire(_this, { row: tableRow });
            _this._rows.push(tableRow);
            tableRow.render();
        });
        datatableApiRef.draw(false);
        this.renderResult = targetNode;
    };
    DataTables.prototype.doStateSave = function () {
        this.datatableApi.state.save();
    };
    DataTables.prototype.stateSaveCallback = function (settings, data) { };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var availableColumns = this.getAvailableColumns();
        var columns = availableColumns.map(function (column, index) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                name: column.name,
                data: column.name,
                sTitle: (question && question.title) || column.displayName,
                visible: column.visibility !== _config__WEBPACK_IMPORTED_MODULE_3__["ColumnVisibility"].Invisible,
                mRender: function (_data, _type, row) {
                    var value = row[column.name];
                    return typeof value === "string"
                        ? jQuery("<div>").text(value).html()
                        : JSON.stringify(value);
                },
            };
        });
        return [
            {
                orderable: false,
                data: null,
                defaultContent: "",
            },
        ].concat(columns);
    };
    DataTables.prototype.layout = function () {
        !!this.datatableApi && this.datatableApi.columns.adjust();
    };
    return DataTables;
}(_table__WEBPACK_IMPORTED_MODULE_1__["Table"]));



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
        var _this = this;
        var input = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createInput("sa-table__global-filter", "Search...");
        input.onchange = function (event) {
            _this.table.applyFilter(event.target.value);
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1N1cnZleUFuYWx5dGljcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3MvLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vU3VydmV5QW5hbHl0aWNzLy4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3MvLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vU3VydmV5QW5hbHl0aWNzLy4vc3JjL2xvY2FsaXphdGlvbi9mYXJzaS50cyIsIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3MvLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3MvLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3MvLi9zcmMvdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3MvLi9zcmMvdGFibGVzL2RhdGF0YWJsZXMuc2Nzcz85M2U1Iiwid2VicGFjazovL1N1cnZleUFuYWx5dGljcy8uL3NyYy90YWJsZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3MvLi9zcmMvdGFibGVzL3RhYmxlLnRzIiwid2VicGFjazovL1N1cnZleUFuYWx5dGljcy8uL3NyYy90YWJsZXMvdG9vbHMvY29sdW1udG9vbHMudHMiLCJ3ZWJwYWNrOi8vU3VydmV5QW5hbHl0aWNzLy4vc3JjL3RhYmxlcy90b29scy9yb3d0b29scy50cyIsIndlYnBhY2s6Ly9TdXJ2ZXlBbmFseXRpY3MvLi9zcmMvdGFibGVzL3Rvb2xzL3RhYmxldG9vbHMudHMiLCJ3ZWJwYWNrOi8vU3VydmV5QW5hbHl0aWNzLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vU3VydmV5QW5hbHl0aWNzLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL1N1cnZleUFuYWx5dGljcy9leHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWNvcmVcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXktY29yZVwiLFwiYW1kXCI6XCJzdXJ2ZXktY29yZVwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsNENBQTRDLCt4RTs7Ozs7Ozs7Ozs7O0FDQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFFdkMsY0FBYztBQUNpQjtBQUNDO0FB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Y3MuZGF0YXRhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzXCIsIFtcInN1cnZleS1jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlBbmFseXRpY3NcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL2RhdGF0YWJsZXMudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZGV0YWlsXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZHJhZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEzIDVsLTEgMSAxIDFIOVYzbDEgMSAxLTEtMy0zLTMgMyAxIDEgMS0xdjRIM2wxLTEtMS0xLTMgMyAzIDMgMS0xLTEtMWg0djRsLTEtMS0xIDEgMyAzIDMtMy0xLTEtMSAxVjloNGwtMSAxIDEgMSAzLTN6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctaGlkZVxcXCI+PHBhdGggY2xhc3M9XFxcInN0MVxcXCIgZD1cXFwiTTEyLjc5IDQuMkwxNiAxbC0xLTEtMy4zMiAzLjMyQzEwLjU3IDIuNTUgOS4zMiAyIDggMiAzLjYzIDIgMCA3Ljk3IDAgNy45N3MxLjI3IDIuMSAzLjIxIDMuODJsLTMuMjMgMy4yMy45OC45OCAzLjM1LTMuMzRDNS40MSAxMy40NCA2LjY3IDE0IDggMTRjNC4zNyAwIDgtNiA4LTZzLTEuMjctMi4wOS0zLjIxLTMuOHpNMiA3Ljk3YzEuMDctMS40NyAzLjYxLTQgNi00IC44IDAgMS42LjI3IDIuMzUuNjhsLS43OC43OGMtLjQ2LS4yOS0uOTktLjQ2LTEuNTctLjQ2LTEuNjYgMC0zIDEuMzQtMyAzIDAgLjU4LjE3IDEuMTEuNDYgMS41N2wtLjk3Ljk3QTEzLjM4IDEzLjM4IDAgMCAxIDIgNy45N3ptNiA0Yy0uOCAwLTEuNTktLjI3LTIuMzMtLjY3bC43OC0uNzdjLjQ1LjI3Ljk4LjQ0IDEuNTUuNDQgMS42NiAwIDMtMS4zNCAzLTMgMC0uNTctLjE3LTEuMDktLjQ0LTEuNTVsLjk4LS45OGMxLjExLjg3IDIuMDEgMS45MSAyLjQ2IDIuNTItMS4wNyAxLjQ4LTMuNjEgNC4wMS02IDQuMDF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXByaXZhdGVcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCI0XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCA4Yy0zLjMxIDAtNiAyLjczLTYgNC42N1M1LjI3IDE1IDggMTVzNi0uNCA2LTIuMzNTMTEuMzEgOCA4IDh6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXB1YmxpY1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMCA1YzAgLjM0LS4wNi42Ny0uMTQuOTkuMDUgMCAuMDkuMDEuMTQuMDEgMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTNDOC45NyAwIDguMDcuNTIgNy41MyAxLjMgOC45OCAxLjkxIDEwIDMuMzMgMTAgNXpNNiA5Yy0zLjMxIDAtNiAyLjczLTYgNC42N1MzLjI3IDE2IDYgMTZzNi0uNCA2LTIuMzNTOS4zMSA5IDYgOXpNMTAgN2MtLjE5IDAtLjM4LjAxLS41Ny4wM2E0LjE0IDQuMTQgMCAwIDEtMS4zNyAxLjM5YzMgLjgzIDUuMjMgMy4zMSA1LjQyIDUuMjggMS40NC0uMzEgMi41Mi0uOTIgMi41Mi0yLjAzQzE2IDkuNzQgMTMuMzEgNyAxMCA3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1zb3J0aW5nXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCAzbDIgMiAxLTEtMy0zLTMgMyAxIDF6TTggMTNsLTItMi0xIDEgMyAzIDMtMy0xLTF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PC9zdmc+XCI7IiwiZXhwb3J0ICogZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuLy9sb2NhbGl6YXRpb25cbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mYXJzaVwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZyZW5jaFwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi4vdGFibGVzL2RhdGF0YWJsZXNcIjtcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcbi8vaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJNYWtlIGNvbHVtbiBwdWJsaWNcIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcbiAgc2hvd0J1dHRvbjogXCJTaG93XCIsXG4gIHJlc2V0RmlsdGVyOiBcIlJlc2V0IEZpbHRlclwiLFxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0XCIsIFxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJTaG93IG1pbm9yIGNvbHVtbnNcIixcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCJcbn07XG5cbi8vVW5jb21tZW50IHRoZXNlIHR3byBsaW5lcyBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGUuIFlvdSBzaG91bGQgcmVwbGFjZSBcImVuXCIgYW5kIGVuU3RyaW5ncyB3aXRoIHlvdXIgbG9jYWxlIChcImZyXCIsIFwiZGVcIiBhbmQgc28gb24pIGFuZCB5b3VyIHZhcmlhYmxlLlxuLy9sb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4vL2xvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJFbmdsaXNoXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGZhcnNpU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwi2q/YsdmI2Ycg2KjZhtiv24wg2KjYp1wiLFxuICB1bmdyb3VwQnV0dG9uOiBcItit2LDZgSDar9ix2YjZh1wiLFxuICBzZWxlY3RCdXR0b246IFwi2KfZhtiq2K7Yp9ioXCIsXG4gIGhpZGVDb2x1bW46IFwi2YXYrtmB24wg2qnYsdiv2YYg2LPYqtmI2YZcIixcbiAgc2hvd0NvbHVtbjogXCLZhtmF2KfbjNi0INiz2KrZiNmGXCIsXG4gIG1vdmVUb0RldGFpbDogXCLYp9mG2KrZgtin2YQg2KjZhyDYrNiy2KbbjNin2KpcIixcbiAgc2hvd0FzQ29sdW1uOiBcItmG2YXYp9uM2LQg2KjZhyDYudmG2YjYp9mGINiz2KrZiNmGXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCLZhdiq2YjZhiDYr9ixINis2K/ZiNmEXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcItin2KjYsSDaqdmE2YXYp9iqXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwi2YXbjNmE2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfcGllOiBcItiv2KfYqNix2Ycg2KfbjChwaWUpXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcItm+2LHYp9qp2YbYr9qv24woU2NhdHRlcilcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIti52YLYsdio2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcItmF2K7ZgduMXCIsXG4gIHJlc2V0RmlsdGVyOiBcItio2KfYstmG2LTYp9mG24wg2YHbjNmE2KrYsdmH2KdcIixcbiAgY2xlYXJCdXR0b246IFwi2b7Yp9qpINqp2LHYr9mGXCIsXG4gIGFkZEVsZW1lbnQ6IFwi2KfZhtiq2K7Yp9ioINiz2YjYp9mEINio2LHYp9uMINmG2YXYp9uM2LQuLi5cIlxufTtcblxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmYVwiXSA9IGZhcnNpU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZhXCJdID0gXCJGYXJzaShQZXJzaWFuKVwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCB2YXIgZnJlbmNoU3RyaW5ncyA9IHtcclxuICAgIGdyb3VwQnV0dG9uOiBcIkdyb3VwZXJcIixcclxuICAgIHVuZ3JvdXBCdXR0b246IFwiRGlzc29jaWVyXCIsXHJcbiAgICBzZWxlY3RCdXR0b246IFwiU8OpbGVjdGlvbm5lclwiLFxyXG4gICAgaGlkZUNvbHVtbjogXCJNYXNxdWVyIGNvbG9ubmVcIixcclxuICAgIHNob3dDb2x1bW46IFwiQWZmaWNoZXIgY29sb25uZVwiLFxyXG4gICAgbWFrZVByaXZhdGVDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHJpdsOpXCIsXHJcbiAgICBtYWtlUHVibGljQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHB1YmxpY1wiLFxyXG4gICAgbW92ZVRvRGV0YWlsOiBcIkTDqXBsYWNlciB2ZXJzIGTDqXRhaWxzXCIsXHJcbiAgICBzaG93QXNDb2x1bW46IFwiQWZmaWNoZXIgZW4gY29sb25uZVwiLFxyXG4gICAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRlcyBlbiB0YWJsZVwiLFxyXG4gICAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiTnVhZ2VzIGRlIG1vdHNcIixcclxuICAgIGNoYXJ0VHlwZV9iYXI6IFwiQmFycmVzXCIsXHJcbiAgICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJCYXJyZXMgZW1waWzDqWVzXCIsXHJcbiAgICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiQW5uZWF1XCIsXHJcbiAgICBjaGFydFR5cGVfcGllOiBcIlNlY3RldXJzXCIsXHJcbiAgICBjaGFydFR5cGVfc2NhdHRlcjogXCJOdWFnZXMgZGUgcG9pbnRzXCIsXHJcbiAgICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcclxuICAgIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGVzXCIsXHJcbiAgICBoaWRlQnV0dG9uOiBcIk1hc3F1ZXJcIixcclxuICAgIHJlc2V0RmlsdGVyOiBcIlJhZnJhaWNoaXIgRmlsdHJlc1wiLFxyXG4gICAgY2xlYXJCdXR0b246IFwiUmFmcmFpY2hpclwiLFxyXG4gICAgYWRkRWxlbWVudDogXCJDaG9pc2lyIGxhIHF1ZXN0aW9uIMOgIGFmZmljaGVyLi4uXCIsXHJcbiAgICBkZWZhdWx0T3JkZXI6IFwiRGVmYXV0XCIsXHJcbiAgICBhc2NPcmRlcjogXCJBc2NlbmRhbnRcIixcclxuICAgIGRlc2NPcmRlcjogXCJEZXNjZW5kYW50XCIsXHJcbiAgICBzaG93TWlub3JDb2x1bW5zOiBcIkFmZmljaGVyIGxlcyBjb2xvbm5lcyBtaW5ldXJlc1wiXHJcbn07XHJcblxyXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZyXCJdID0gZnJlbmNoU3RyaW5ncztcclxubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZnJcIl0gPSBcIkZyZW5jaFwiOyIsImltcG9ydCB7IGVuZ2xpc2hTdHJpbmdzIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uL2VuZ2xpc2hcIjtcblxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XG4gIGN1cnJlbnRMb2NhbGVWYWx1ZTogXCJcIixcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXG4gIGxvY2FsZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBsb2NhbGVOYW1lczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxuICBnZXQgY3VycmVudExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPT09IHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlXG4gICAgICA/IFwiXCJcbiAgICAgIDogdGhpcy5jdXJyZW50TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlXG4gICAgICA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIGlmICghbG9jIHx8ICFsb2Nbc3RyTmFtZV0pIGxvYyA9IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIHZhciByZXN1bHQgPSBsb2Nbc3RyTmFtZV07XG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICByZXMucHVzaChcIlwiKTtcbiAgICBpZiAodGhpcy5zdXBwb3J0ZWRMb2NhbGVzICYmIHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5zb3J0KCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XG4iLCJleHBvcnQgZW51bSBDb2x1bW5WaXNpYmlsaXR5IHtcbiAgVmlzaWJsZSxcbiAgSW52aXNpYmxlLFxuICBQdWJsaWNJbnZpc2libGUsXG59XG5leHBvcnQgZW51bSBRdWVzdGlvbkxvY2F0aW9uIHtcbiAgQ29sdW1uLFxuICBSb3csXG59XG5leHBvcnQgZW51bSBDb2x1bW5EYXRhVHlwZSB7XG4gIFRleHQsXG4gIEZpbGVMaW5rLFxuICBJbWFnZSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGRhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcbiAgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eTtcbiAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb247XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL3RhYmxlXCI7XG5pbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgRXZlbnQgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiwgQ29sdW1uVmlzaWJpbGl0eSwgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5pbXBvcnQgXCIuL2RhdGF0YWJsZXMuc2Nzc1wiO1xuaW1wb3J0IHsgVGFibGVSb3csIERhdGF0YWJsZXNSb3cgfSBmcm9tIFwiLi90b29scy9yb3d0b29sc1wiO1xuaW1wb3J0IHsgQ29sdW1uVG9vbHMgfSBmcm9tIFwiLi90b29scy9jb2x1bW50b29sc1wiO1xuaW1wb3J0IHsgVGFibGVUb29scyB9IGZyb20gXCIuL3Rvb2xzL3RhYmxldG9vbHNcIjtcblxuaWYgKCEhZG9jdW1lbnQpIHtcbiAgdmFyIHN2Z1RlbXBsYXRlID0gcmVxdWlyZShcImh0bWwtbG9hZGVyP2ludGVycG9sYXRlIXZhbC1sb2FkZXIhLi4vc3ZnYnVuZGxlLmh0bWxcIik7XG4gIHZhciB0ZW1wbGF0ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGVtcGxhdGVIb2xkZXIuaW5uZXJIVE1MID0gc3ZnVGVtcGxhdGU7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGVIb2xkZXIpO1xufVxuXG52YXIgalF1ZXJ5ID0gKDxhbnk+d2luZG93KVtcImpRdWVyeVwiXTtcblxuaW50ZXJmYWNlIERhdGFUYWJsZXNPcHRpb25zIHtcbiAgYnV0dG9uczogYm9vbGVhbiB8IHN0cmluZ1tdIHwgYW55W10gfCBhbnk7XG5cbiAgZG9tOiBzdHJpbmc7XG5cbiAgb3JkZXJGaXhlZDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IEFycmF5PEFycmF5PG51bWJlciB8IHN0cmluZz4+IHwgb2JqZWN0O1xuXG4gIHJvd0dyb3VwOiBib29sZWFuIHwgYW55O1xuXG4gIGhlYWRlckNhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVzIGV4dGVuZHMgVGFibGUge1xuICBwcml2YXRlIGRhdGF0YWJsZUFwaTogYW55O1xuXG4gIHB1YmxpYyBjdXJyZW50UGFnZU51bWJlcjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGlzIGZpcmVkIGNvbHVtbnMgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKiA8YnIvPiBzZW5kZXIgdGhlIGRhdGF0YWJsZXMgYWRhcHRlclxuICAgKiA8YnIvPiBvcHRpb25zLnN1cnZleSBjdXJyZW50IHN1cnZleVxuICAgKiBAc2VlIGdldENvbHVtbnNcbiAgICovXG4gIHB1YmxpYyBjb2x1bW5zQ2hhbmdlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgc3RhdGljIGluaXRKUXVlcnkoJDogYW55KSB7XG4gICAgalF1ZXJ5ID0gJDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgZGF0YTogQXJyYXk8T2JqZWN0PixcbiAgICBvcHRpb25zOiBEYXRhVGFibGVzT3B0aW9ucyxcbiAgICBfY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPiA9IFtdLFxuICAgIGlzVHJ1c3RlZEFjY2VzcyA9IGZhbHNlXG4gICkge1xuICAgIHN1cGVyKHN1cnZleSwgZGF0YSwgb3B0aW9ucywgX2NvbHVtbnMsIGlzVHJ1c3RlZEFjY2Vzcyk7XG5cbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclJlc3VsdDogSFRNTEVsZW1lbnQ7XG5cbiAgcHJvdGVjdGVkIG9uQ29sdW1uc0NoYW5nZWQoKSB7XG4gICAgdGhpcy5jb2x1bW5zQ2hhbmdlZC5maXJlKHRoaXMsIHsgc3VydmV5OiB0aGlzLnN1cnZleSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sdW1ucygpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29sdW1ucyhjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+KSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy51cGRhdGUodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcbiAgICAgIGlmIChoYXJkKSB7XG4gICAgICAgIHRoaXMuaW5pdFRhYmxlRGF0YSh0aGlzLmRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuZGF0YXRhYmxlQXBpLnBhZ2UuaW5mbygpLnBhZ2U7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVuZGVyKHRoaXMucmVuZGVyUmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVuZGVyZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5yZW5kZXJSZXN1bHQ7XG4gIH1cblxuICBncm91cEJ5OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvL2lmKCF0aGlzLnRhcmdldE5vZGUpIHJldHVybjtcbiAgICBjb25zdCB0YWJsZU5vZGUgPSB0aGlzLnJlbmRlclJlc3VsdC5jaGlsZHJlblswXTtcbiAgICBpZiAoalF1ZXJ5LmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSh0YWJsZU5vZGUpKSB7XG4gICAgICBqUXVlcnkodGFibGVOb2RlKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YXRhYmxlQXBpID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcsIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpIHtcbiAgICBzdXBlci5zZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWUsIHZpc2liaWxpdHkpO1xuICAgIHZhciBpc0ludmlzaWJsZSA9IHZpc2liaWxpdHkgPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGU7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpLnZpc2libGUoIWlzSW52aXNpYmxlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgc3VwZXIuc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZSwgbG9jYXRpb24pO1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sdW1uTmFtZSArIFwiOm5hbWVcIik7XG4gICAgdmFyIGlzQ29sdW1uTG9jYXRpb24gPSBsb2NhdGlvbiA9PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbjtcbiAgICBjb2x1bW4udmlzaWJsZShpc0NvbHVtbkxvY2F0aW9uKTtcbiAgfVxuXG4gIGNyZWF0ZUFjdGlvbkNvbnRhaW5lcigpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fYWN0aW9uLWNvbnRhaW5lclwiO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLnNlYXJjaCh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKTtcbiAgICBpZiAoY29sdW1uLnNlYXJjaCgpICE9PSB2YWx1ZSkge1xuICAgICAgY29sdW1uLnNlYXJjaCh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnRCeUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKTtcbiAgICBjb2x1bW4ub3JkZXIoZGlyZWN0aW9uKS5kcmF3KGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkucGFnZS5sZW4odmFsdWUpLmRyYXcoZmFsc2UpO1xuICB9XG5cbiAgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRhcmdldE5vZGUuY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlIHNhLWRhdGF0YWJsZXNcIjtcbiAgICB0YXJnZXROb2RlLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCB0YWJsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdmFyIGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnMoKTtcbiAgICB2YXIgY29sdW1uc0RhdGE6IGFueSA9IGNvbHVtbnMubWFwKChjOiBhbnkpID0+IGMuZGF0YSk7XG4gICAgY29uc3QgZHRCdXR0b25DbGFzcyA9XG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tc21hbGwgc2EtdGFibGVfX2J0bi0tZ3JheVwiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKFxuICAgICAgdHJ1ZSxcbiAgICAgIHtcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHsgZXh0ZW5kOiBcImNvcHlcIiwgY2xhc3NOYW1lOiBkdEJ1dHRvbkNsYXNzIH0sXG4gICAgICAgICAgeyBleHRlbmQ6IFwiY3N2XCIsIGNsYXNzTmFtZTogZHRCdXR0b25DbGFzcyB9LFxuICAgICAgICAgIHsgZXh0ZW5kOiBcInByaW50XCIsIGNsYXNzTmFtZTogZHRCdXR0b25DbGFzcyB9LFxuICAgICAgICBdLFxuICAgICAgICBkb206ICdCPFwic2EtZGF0YXRhYmxlc19fdG9vbHNcIj5wcnRpcCcsXG4gICAgICAgIC8vIG9yZGVyaW5nOiBmYWxzZSxcbiAgICAgICAgZGF0YTogdGhpcy50YWJsZURhdGEsXG4gICAgICAgIHBhZ2VMZW5ndGg6IDUsXG4gICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICBjb2xSZW9yZGVyOiB7XG4gICAgICAgICAgZml4ZWRDb2x1bW5zTGVmdDogMSxcbiAgICAgICAgICByZWFsdGltZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8vb3JkZXJGaXhlZDogW1sxLCBcImFzY1wiXV0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgc1NlYXJjaDogXCIgXCIsXG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgICAgc0xlbmd0aE1lbnU6IFwiU2hvdyBfTUVOVV8gZW50cmllc1wiLFxuICAgICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgICBwcmV2aW91czogXCIgXCIsXG4gICAgICAgICAgICBuZXh0OiBcIiBcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IFwiYXBpXCIsXG4gICAgICAgIGhlYWRlckNhbGxiYWNrOiAoXG4gICAgICAgICAgdGhlYWQ6IGFueSxcbiAgICAgICAgICBkYXRhOiBhbnksXG4gICAgICAgICAgc3RhcnQ6IGFueSxcbiAgICAgICAgICBlbmQ6IGFueSxcbiAgICAgICAgICBkaXNwbGF5OiBhbnlcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgdmFyIGRhdGF0YWJsZUFwaSA9IGpRdWVyeSh0YWJsZU5vZGUpLmRhdGFUYWJsZSgpLmFwaSgpO1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBqUXVlcnkodGhlYWQpXG4gICAgICAgICAgICAuY2hpbGRyZW4oXCJ0aFwiKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgdmFyICR0aE5vZGUgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgICAgICAgICR0aE5vZGUudW5iaW5kKFwiY2xpY2suRFRcIik7XG4gICAgICAgICAgICAgIGlmICghIWNvbHVtbnNEYXRhW2luZGV4XSAmJiAkdGhOb2RlLmhhcyhcImJ1dHRvblwiKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gc2VsZi5jcmVhdGVBY3Rpb25Db250YWluZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgY29sdW1uVG9vbHMgPSBuZXcgQ29sdW1uVG9vbHMoXG4gICAgICAgICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgICBzZWxmLFxuICAgICAgICAgICAgICAgICAgY29sdW1uc0RhdGFbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc2VsZi5pc1RydXN0ZWRBY2Nlc3NcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNlbGYub25Db2x1bW5Ub29sc0NyZWF0ZWQuZmlyZSh0aGlzLCB7IHRvb2xzOiBjb2x1bW5Ub29scyB9KTtcbiAgICAgICAgICAgICAgICBjb2x1bW5Ub29scy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhOb2RlLnByZXBlbmQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9uc1xuICAgICk7XG5cbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XG4gICAgdGFibGVOb2RlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgdGFibGVOb2RlLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlc19fdGFibGUgZGlzcGxheSByZXNwb25zaXZlIGRhdGFUYWJsZVwiO1xuXG4gICAgY29uc3QgZGF0YXRhYmxlQXBpUmVmID0gKHRoaXMuZGF0YXRhYmxlQXBpID0galF1ZXJ5KHRhYmxlTm9kZSkuRGF0YVRhYmxlKFxuICAgICAgb3B0aW9uc1xuICAgICkpO1xuICAgIHZhciB0b29sc0NvbnRhaW5lciA9IGpRdWVyeShcImRpdi5zYS1kYXRhdGFibGVzX190b29sc1wiKVswXTtcblxuICAgIHZhciB0b29scyA9IG5ldyBUYWJsZVRvb2xzKHRvb2xzQ29udGFpbmVyLCB0aGlzKTtcbiAgICB0aGlzLm9uVGFibGVUb29sc0NyZWF0ZWQuZmlyZSh0aGlzLCB7IHRvb2xzOiB0b29scyB9KTtcbiAgICB0b29scy5yZW5kZXIoKTtcblxuICAgIGRhdGF0YWJsZUFwaVJlZi5wYWdlKHNlbGYuY3VycmVudFBhZ2VOdW1iZXIpO1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLnJvd0dyb3VwKCkuZW5hYmxlKGZhbHNlKS5kcmF3KGZhbHNlKTtcblxuICAgIGRhdGF0YWJsZUFwaVJlZi5vbihcbiAgICAgIFwiY29sdW1uLXJlb3JkZXJcIixcbiAgICAgIChlOiBhbnksIHNldHRpbmdzOiBhbnksIGRldGFpbHM6IGFueSkgPT4ge1xuICAgICAgICB2YXIgZGVsZXRlZENvbHVtbnMgPSB0aGlzLl9jb2x1bW5zLnNwbGljZShkZXRhaWxzLmZyb20gLSAxLCAxKTtcbiAgICAgICAgdGhpcy5fY29sdW1ucy5zcGxpY2UoZGV0YWlscy50byAtIDEsIDAsIGRlbGV0ZWRDb2x1bW5zWzBdKTtcbiAgICAgICAgdGhpcy5vbkNvbHVtbnNDaGFuZ2VkKCk7XG4gICAgICB9XG4gICAgKTtcbiAgICBkYXRhdGFibGVBcGlSZWZcbiAgICAgIC5yb3dzKClcbiAgICAgIC5lcSgwKVxuICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdmFyIHJvdyA9IGRhdGF0YWJsZUFwaVJlZi5yb3coaW5kZXgpO1xuICAgICAgICB2YXIgZGV0YWlsc1RyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICB2YXIgZGV0YWlsc1RkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBkZXRhaWxzVGQuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX19kZXRhaWxzLWNvbnRhaW5lclwiO1xuICAgICAgICBkZXRhaWxzVHIuYXBwZW5kQ2hpbGQoZGV0YWlsc1RkKTtcbiAgICAgICAgdmFyIHJvd0VsZW1lbnQgPSByb3cubm9kZSgpO1xuICAgICAgICB2YXIgZmlyc3RDZWxsID0gcm93LmNlbGwocm93LmluZGV4KCksIDApLm5vZGUoKTtcbiAgICAgICAgdmFyIHRhYmxlUm93ID0gbmV3IERhdGF0YWJsZXNSb3coXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBmaXJzdENlbGwsXG4gICAgICAgICAgZGV0YWlsc1RkLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICB0aGlzLnJlbmRlckRldGFpbEFjdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgdGFibGVSb3cub25Ub2dnbGVEZXRhaWxzLmFkZCgoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgZGV0YWlsc1RkLmNvbFNwYW4gPSByb3dFbGVtZW50LmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICAgICAgcm93RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgZGV0YWlsc1RyLFxuICAgICAgICAgICAgICByb3dFbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRhaWxzVHIucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vblJvd0NyZWF0ZWQuZmlyZSh0aGlzLCB7IHJvdzogdGFibGVSb3cgfSk7XG4gICAgICAgIHRoaXMuX3Jvd3MucHVzaCh0YWJsZVJvdyk7XG4gICAgICAgIHRhYmxlUm93LnJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgZGF0YXRhYmxlQXBpUmVmLmRyYXcoZmFsc2UpO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIHB1YmxpYyBkb1N0YXRlU2F2ZSgpIHtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5zdGF0ZS5zYXZlKCk7XG4gIH1cbiAgcHVibGljIHN0YXRlU2F2ZUNhbGxiYWNrKHNldHRpbmdzOiBhbnksIGRhdGE6IGFueSkge31cblxuICBwdWJsaWMgZGV0YWlsQnV0dG9uQ3JlYXRvcnM6IEFycmF5PChjb2x1bW5OYW1lPzogc3RyaW5nKSA9PiBIVE1MRWxlbWVudD4gPSBbXTtcblxuICBnZXRDb2x1bW5zKCk6IEFycmF5PE9iamVjdD4ge1xuICAgIGNvbnN0IGF2YWlsYWJsZUNvbHVtbnMgPSB0aGlzLmdldEF2YWlsYWJsZUNvbHVtbnMoKTtcbiAgICBjb25zdCBjb2x1bW5zOiBhbnkgPSBhdmFpbGFibGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgIGRhdGE6IGNvbHVtbi5uYW1lLFxuICAgICAgICBzVGl0bGU6IChxdWVzdGlvbiAmJiBxdWVzdGlvbi50aXRsZSkgfHwgY29sdW1uLmRpc3BsYXlOYW1lLFxuICAgICAgICB2aXNpYmxlOiBjb2x1bW4udmlzaWJpbGl0eSAhPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIG1SZW5kZXI6IChfZGF0YTogb2JqZWN0LCBfdHlwZTogc3RyaW5nLCByb3c6IGFueSkgPT4ge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHJvd1tjb2x1bW4ubmFtZV07XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBqUXVlcnkoXCI8ZGl2PlwiKS50ZXh0KHZhbHVlKS5odG1sKClcbiAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIGRlZmF1bHRDb250ZW50OiBcIlwiLFxuICAgICAgfSxcbiAgICBdLmNvbmNhdChjb2x1bW5zKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNvbHVtblNlbGVjdGVkOiAoZGF0YU5hbWU6IHN0cmluZykgPT4gdm9pZDtcblxuICBwdWJsaWMgbGF5b3V0KCkge1xuICAgICEhdGhpcy5kYXRhdGFibGVBcGkgJiYgdGhpcy5kYXRhdGFibGVBcGkuY29sdW1ucy5hZGp1c3QoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgQ29sdW1uVmlzaWJpbGl0eSwgUXVlc3Rpb25Mb2NhdGlvbiwgQ29sdW1uRGF0YVR5cGUgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IERldGFpbHMsIFRhYmxlUm93IH0gZnJvbSBcIi4vdG9vbHMvcm93dG9vbHNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhYmxlIHtcbiAgcHJvdGVjdGVkIHRhYmxlRGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIHByb3RlY3RlZCBvcHRpb25zOiBhbnksXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW10sXG4gICAgcHJvdGVjdGVkIGlzVHJ1c3RlZEFjY2VzcyA9IGZhbHNlXG4gICkge1xuICAgIGlmIChfY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1ucyhzdXJ2ZXkpO1xuICAgIH1cbiAgICB0aGlzLmluaXRUYWJsZURhdGEoZGF0YSk7XG4gIH1cbiAgcHJvdGVjdGVkIF9yb3dzOiBUYWJsZVJvd1tdID0gW107XG5cbiAgcHJvdGVjdGVkIHJvd0RldGFpbHM6IHsgW3Jvd05hbWU6IHN0cmluZ106IERldGFpbHMgfTtcblxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uUm93Q3JlYXRlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBvblRhYmxlVG9vbHNDcmVhdGVkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uQ29sdW1uVG9vbHNDcmVhdGVkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHJvdzogVGFibGVSb3dcbiAgKSA9PiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHJlbmRlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IGFwcGx5Q29sdW1uRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBzb3J0QnlDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgZ2V0Q3JlYXRlZFJvd3MoKTogVGFibGVSb3dbXSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9yb3dzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENvbHVtbnMgPSAoc3VydmV5OiBTdXJ2ZXlNb2RlbCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN1cnZleS5nZXRBbGxRdWVzdGlvbnMoKS5tYXAoKHF1ZXN0aW9uOiBRdWVzdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6IChxdWVzdGlvbi50aXRsZSB8fCBcIlwiKS50cmltKCkgfHwgcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGF0YVR5cGU6XG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIlxuICAgICAgICAgICAgPyBDb2x1bW5EYXRhVHlwZS5UZXh0XG4gICAgICAgICAgICA6IENvbHVtbkRhdGFUeXBlLkZpbGVMaW5rLFxuICAgICAgICB2aXNpYmlsaXR5OlxuICAgICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJmaWxlXCJcbiAgICAgICAgICAgID8gQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlXG4gICAgICAgICAgICA6IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlLFxuICAgICAgICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4sXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBpc1Zpc2libGUgPSAodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSAhPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpIHx8XG4gICAgICAoIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZSlcbiAgICApO1xuICB9O1xuXG4gIHB1YmxpYyBnZXQgY29sdW1ucygpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEF2YWlsYWJsZUNvbHVtbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucy5maWx0ZXIoXG4gICAgICAoY29sdW1uKSA9PlxuICAgICAgICBjb2x1bW4ubG9jYXRpb24gPT09IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uICYmXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KVxuICAgICk7XG4gIH07XG5cbiAgcHJvdGVjdGVkIGluaXRUYWJsZURhdGEoZGF0YTogQXJyYXk8YW55Pikge1xuICAgIHRoaXMudGFibGVEYXRhID0gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgdmFyIGRhdGFJdGVtOiBhbnkgPSB7fTtcbiAgICAgIHRoaXMuc3VydmV5LmRhdGEgPSBpdGVtO1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IGl0ZW1bY29sdW1uLm5hbWVdO1xuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uZGlzcGxheVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFJdGVtW2NvbHVtbi5uYW1lXSA9XG4gICAgICAgICAgdHlwZW9mIGRpc3BsYXlWYWx1ZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkaXNwbGF5VmFsdWVcbiAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkoZGlzcGxheVZhbHVlKSB8fCBcIlwiO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGF0YUl0ZW07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZTogc3RyaW5nLCBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbikge1xuICAgIHRoaXMuY29sdW1ucy5maWx0ZXIoXG4gICAgICAoY29sdW1uKSA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZVxuICAgIClbMF0ubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIG51bGwpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdO1xuICAgIGNvbHVtbi52aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcbiAgICB0aGlzLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLmZpcmUodGhpcywgbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcpOiBDb2x1bW5WaXNpYmlsaXR5IHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF07XG4gICAgcmV0dXJuIGNvbHVtbi52aXNpYmlsaXR5O1xuICB9XG5cbiAgcHVibGljIGRvU3RhdGVTYXZlKCkge1xuICAgIHRoaXMuc3RhdGVTYXZlQ2FsbGJhY2soeyBjb2x1bW5zOiB0aGlzLmNvbHVtbnMgfSwgdGhpcy5kYXRhKTtcbiAgfVxuICBwdWJsaWMgc3RhdGVTYXZlQ2FsbGJhY2soc2V0dGluZ3M6IGFueSwgZGF0YTogYW55KSB7fVxufVxuIiwiaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcblxuZXhwb3J0IGNsYXNzIENvbHVtblRvb2xzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIHRhYmxlOiBUYWJsZSxcbiAgICBwcml2YXRlIGNvbHVtbk5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIGlzVHJ1c3RlZEFjY2VzczogYm9vbGVhblxuICApIHt9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEcmFnQnRuKCkpO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNvcnRCdG4oKSk7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGlkZUJ0bigpKTtcbiAgICBpZiAodGhpcy5pc1RydXN0ZWRBY2Nlc3MpXG4gICAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb2x1bW5Qcml2YXRlQnV0dG9uKCkpO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU1vdmVUb0RldGFpbHNCdG4oKSk7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRmlsdGVySW5wdXQoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRHJhZ0J0bigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIjtcbiAgICBidG4uYXBwZW5kQ2hpbGQoRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcImRyYWdcIikpO1xuICAgIGJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVNvcnRCdG4oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xuICAgIGNvbnN0IGRlc2NUaXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJkZXNjT3JkZXJcIik7XG4gICAgY29uc3QgYXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYXNjT3JkZXJcIik7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcInNvcnRpbmdcIik7XG4gICAgYnRuLnRpdGxlID0gXCJcIjtcbiAgICB2YXIgZGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICBidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcbiAgICAgICAgYnRuLnRpdGxlID0gZGVzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGFzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgICAgfVxuICAgICAgdGhpcy50YWJsZS5zb3J0QnlDb2x1bW4odGhpcy5jb2x1bW5OYW1lLCBkaXJlY3Rpb24pO1xuICAgIH07XG4gICAgYnRuLm9uZHJhZyA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVIaWRlQnRuKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwiaGlkZVwiKTtcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUNvbHVtblwiKTtcbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMudGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eShcbiAgICAgICAgdGhpcy5jb2x1bW5OYW1lLFxuICAgICAgICBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZVxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlTW92ZVRvRGV0YWlsc0J0bigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwibW92ZXRvZGV0YWlsc1wiKTtcbiAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibW92ZVRvRGV0YWlsXCIpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnRhYmxlLnNldENvbHVtbkxvY2F0aW9uKHRoaXMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVGaWx0ZXJJbnB1dCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICB2YXIgZWwgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcInNhLXRhYmxlX19maWx0ZXJcIiwgXCJTZWFyY2guLi5cIik7XG4gICAgZWwub25jbGljayA9IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGVsLm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgIHRoaXMudGFibGUuYXBwbHlDb2x1bW5GaWx0ZXIodGhpcy5jb2x1bW5OYW1lLCBlbC52YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlQ29sdW1uUHJpdmF0ZUJ1dHRvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWtlUHJpdmF0ZVN2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHJpdmF0ZVwiKTtcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XG4gICAgdmFyIGN1cnJlbnRWaXNpYmlsaXR5ID0gdGhpcy50YWJsZS5nZXRDb2x1bW5WaXNpYmlsaXR5KHRoaXMuY29sdW1uTmFtZSk7XG4gICAgdXBkYXRlU3RhdGUoY3VycmVudFZpc2liaWxpdHkpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHJpdmF0ZVN2Zyk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKG1ha2VQdWJsaWNTdmcpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoY3VycmVudFZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuUHVibGljSW52aXNpYmxlKSB7XG4gICAgICAgIGN1cnJlbnRWaXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFZpc2liaWxpdHkgPSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eSh0aGlzLmNvbHVtbk5hbWUsIGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgICAgY29uc3QgaXNQcml2YXRlID0gdmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICBpZiAoaXNQcml2YXRlKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uIHNhLXRhYmxlX19zdmctYnV0dG9uLS1hY3RpdmVcIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQcml2YXRlQ29sdW1uXCIpO1xuICAgICAgICBtYWtlUHJpdmF0ZVN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhYmxlUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcbiAgICBwcm90ZWN0ZWQgdG9vbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwdWJsaWMgcmVuZGVyRGV0YWlsQWN0aW9uczogKFxuICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAgIGRhdGE6IGFueSxcbiAgICAgIHRhYmxlUm93OiBUYWJsZVJvd1xuICAgICkgPT4gSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHMoXG4gICAgICB0YWJsZSxcbiAgICAgIHRoaXMsXG4gICAgICBkZXRhaWxzQ29udGFpbmVyLFxuICAgICAgcmVuZGVyRGV0YWlsQWN0aW9uc1xuICAgICk7XG4gICAgdGhpcy50b29scyA9IG5ldyBSb3dUb29scyh0b29sc0NvbnRhaW5lciwgdGFibGUsIHRoaXMpO1xuICAgIHRhYmxlLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5hZGQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZURldGFpbHMoKTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgcHVibGljIHRvb2xzOiBSb3dUb29scztcbiAgcHJpdmF0ZSBkZXRhaWxlZFJvd0NsYXNzID0gXCJzYS10YWJsZV9fZGV0YWlsLXJvd1wiO1xuICBwcml2YXRlIGlzRGV0YWlsc0V4cGFuZGVkID0gZmFsc2U7XG4gIHB1YmxpYyBvblRvZ2dsZURldGFpbHM6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcbiAgcHVibGljIGFic3RyYWN0IGdldERhdGEoKTogYW55O1xuXG4gIHB1YmxpYyBnZXRJc0RldGFpbHNFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHRoaXMudG9vbHMucmVuZGVyKCk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLm9wZW4oKTtcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLmRldGFpbGVkUm93Q2xhc3M7XG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEZXRhaWxzKCkge1xuICAgIHRoaXMuZGV0YWlscy5jbG9zZSgpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kZXRhaWxlZFJvd0NsYXNzKTtcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURldGFpbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gICAgfSBlbHNlIHRoaXMub3BlbkRldGFpbHMoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFidWxhdG9yUm93IGV4dGVuZHMgVGFibGVSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByb3RlY3RlZCB0b29sc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBpbm5lclJvdzogYW55LFxuICAgIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXG4gICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgICAgdGFibGVSb3c6IGFueVxuICAgICkgPT4gSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgc3VwZXIodGFibGUsIHRvb2xzQ29udGFpbmVyLCBkZXRhaWxzQ29udGFpbmVyLCByZW5kZXJEZXRhaWxBY3Rpb25zKTtcbiAgfVxuICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSb3cuZ2V0RWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIGdldERhdGEoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldERhdGEoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlc1JvdyBleHRlbmRzIFRhYmxlUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcbiAgICBwcm90ZWN0ZWQgdG9vbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF9pbm5lclJvdzogYW55LFxuICAgIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXG4gICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgICAgdGFibGVSb3c6IGFueVxuICAgICkgPT4gSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgc3VwZXIodGFibGUsIHRvb2xzQ29udGFpbmVyLCBkZXRhaWxzQ29udGFpbmVyLCByZW5kZXJEZXRhaWxBY3Rpb25zKTtcbiAgICB0aGlzLnJvd0VsZW1lbnQgPSBfaW5uZXJSb3cubm9kZSgpO1xuICAgIHRoaXMucm93RGF0YSA9IF9pbm5lclJvdy5kYXRhKCk7XG4gICAgdGhpcy5faW5uZXJSb3cgPSB0aGlzLl9pbm5lclJvdy5yb3codGhpcy5yb3dFbGVtZW50KTtcbiAgfVxuICBwcml2YXRlIHJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHJvd0RhdGE6IGFueTtcblxuICBwdWJsaWMgZ2V0IGlubmVyUm93KCkge1xuICAgIHJldHVybiB0aGlzLl9pbm5lclJvdy5yb3codGhpcy5yb3dFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5yb3dFbGVtZW50O1xuICB9XG5cbiAgcHVibGljIGdldERhdGEoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnJvd0RhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvd1Rvb2xzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIHRhYmxlOiBUYWJsZSxcbiAgICBwcml2YXRlIHJvdzogVGFibGVSb3dcbiAgKSB7XG4gICAgdGhpcy5hY3Rpb25zID0gW3RoaXMuY3JlYXRlRGV0YWlsc0J0bl07XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uczogKChyb3c6IFRhYmxlUm93LCB0YWJsZTogVGFibGUpID0+IEhUTUxFbGVtZW50KVtdO1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKGFjdGlvbih0aGlzLnJvdywgdGhpcy50YWJsZSkpO1xuICAgIH0pO1xuICB9XG4gIHByb3RlY3RlZCBjcmVhdGVEZXRhaWxzQnRuID0gKHJvdzogVGFibGVSb3cpID0+IHtcbiAgICBjb25zdCBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJkZXRhaWxcIik7XG4gICAgYnRuLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dNaW5vckNvbHVtbnNcIik7XG5cbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHJvdy50b2dnbGVEZXRhaWxzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlscyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgcm93OiBUYWJsZVJvdyxcbiAgICBwcml2YXRlIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgcmVuZGVyQWN0aW9uczogYW55XG4gICkge1xuICAgIHZhciBkZXRhaWxzVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgZGV0YWlsc1RhYmxlLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX2RldGFpbC10YWJsZVwiO1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlID0gZGV0YWlsc1RhYmxlO1xuICAgIHRoaXMudGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmFkZCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBkZXRhaWxzVGFibGU6IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBzZXRDb250YWluZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXROb2RlO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB2YXIgcm93czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICAgIHRoaXMudGFibGUuY29sdW1uc1xuICAgICAgLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubG9jYXRpb24gPT09IFF1ZXN0aW9uTG9jYXRpb24uUm93ICYmIGNvbHVtbilcbiAgICAgIC5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgcm93LmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX2RldGFpbFwiO1xuICAgICAgICB2YXIgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZDEudGV4dENvbnRlbnQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIHZhciB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldERhdGEoKVtjb2x1bW4ubmFtZV07XG4gICAgICAgIHZhciB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbihjb2x1bW4ubmFtZSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgIH0pO1xuICAgIGlmICghIXRoaXMucmVuZGVyQWN0aW9ucykge1xuICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgIHJvdy5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19kZXRhaWxcIjtcbiAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIHRkLmNvbFNwYW4gPSAzO1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgdGhpcy5yZW5kZXJBY3Rpb25zKHRkLCB0aGlzLnJvdyk7XG4gICAgfVxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uID0gKGNvbHVtbk5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0FzQ29sdW1uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JheVwiO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnRhYmxlLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgQ29sdW1uVmlzaWJpbGl0eSB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVRvb2xzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCwgcHJpdmF0ZSB0YWJsZTogVGFibGUpIHtcbiAgICB0aGlzLmFjdGlvbnMgPSBbXG4gICAgICB0aGlzLmNyZWF0ZUZpbHRlcklucHV0LFxuICAgICAgdGhpcy5jcmVhdGVTaG93Q29sdW1uRHJvcGRvd24sXG4gICAgICB0aGlzLmNyZWF0ZUVudHJpZXNTZWxlY3RvcixcbiAgICBdO1xuICB9XG5cbiAgcHVibGljIGFjdGlvbnM6ICgodGFibGU6IFRhYmxlKSA9PiBIVE1MRWxlbWVudClbXTtcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChhY3Rpb24odGhpcy50YWJsZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUZpbHRlcklucHV0KHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBpbnB1dCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZ2xvYmFsLWZpbHRlclwiLFxuICAgICAgXCJTZWFyY2guLi5cIlxuICAgICk7XG4gICAgaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy50YWJsZS5hcHBseUZpbHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVNob3dDb2x1bW5Ecm9wZG93biA9ICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJzYS10YWJsZV9fc2hvdy1jb2x1bW5cIik7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRhYmxlLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAoY29sdW1uOiBhbnkpID0+IGNvbHVtbi52aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZVxuICAgICAgKTtcbiAgICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICAgICAgZHJvcGRvd24uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnRleHQgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKTtcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIFxuICAgICAgaGlkZGVuQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IGFueSkgPT4ge1xuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgdmFyIHRleHQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICAgICAgICBvcHRpb24udGl0bGUgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGNvbHVtbi5uYW1lO1xuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJvcGRvd24ub25jaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuICAgICAgdGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eSh2YWwsIENvbHVtblZpc2liaWxpdHkuVmlzaWJsZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRyb3Bkb3duO1xuICB9O1xuXG4gIGNyZWF0ZUVudHJpZXNTZWxlY3Rvcih0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgZnVuY3Rpb24gZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIHZhciBvcHRpb25zVmFsdWVzID0gW1wiMVwiLCBcIjVcIiwgXCIxMFwiLCBcIjI1XCIsIFwiNTBcIiwgXCI3NVwiLCBcIjEwMFwiXTtcbiAgICAgIG9wdGlvbnNWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gdmFsO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBlbC52YWx1ZSA9IFwiNVwiO1xuXG4gICAgICBlbC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGFibGUuc2V0UGFnZVNpemUoTnVtYmVyKGVsLnZhbHVlKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19lbnRyaWVzXCI7XG4gICAgY29uc3Qgc2hvd1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzaG93U3Bhbi5pbm5lckhUTUwgPSBcIlNob3dcIjtcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVudHJpZXNTcGFuLmlubmVySFRNTCA9IFwiZW50cmllc1wiO1xuICAgIGVudHJpZXNTcGFuLmNsYXNzTmFtZSA9XG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1sZWZ0XCI7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd1NwYW4pO1xuICAgIHNob3dTcGFuLmNsYXNzTmFtZSA9XG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1yaWdodFwiO1xuICAgIHNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGdldEVudHJpZXNEcm9wZG93bih0YWJsZSkpO1xuICAgIHNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJpZXNTcGFuKTtcbiAgICByZXR1cm4gc2VsZWN0b3JDb250YWluZXI7XG4gIH1cbn1cbiIsImV4cG9ydCB2YXIgX19hc3NpZ24gPVxuICAoPGFueT5PYmplY3QpW1wiYXNzaWduXCJdIHx8XG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgcCBpbiBzKVxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xuICBmb3IgKHZhciBwIGluIGJhc2VDbGFzcylcbiAgICBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XG4gIGZ1bmN0aW9uIF9fKCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSB0aGlzQ2xhc3M7XG4gIH1cbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XG4gICAgYmFzZUNsYXNzID09PSBudWxsXG4gICAgICA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKVxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcbiAgdmFyIHJlc3VsdDogYW55ID0ge307XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBzb3VyY2UpXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgcHJvcGVydHlOYW1lKSAmJlxuICAgICAgZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPCAwXG4gICAgKVxuICAgICAgcmVzdWx0W3Byb3BlcnR5TmFtZV0gPSBzb3VyY2VbcHJvcGVydHlOYW1lXTtcbiAgaWYgKFxuICAgIHNvdXJjZSAhPSBudWxsICYmXG4gICAgdHlwZW9mICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0gPT09IFwiZnVuY3Rpb25cIlxuICApXG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgcHJvcGVydHlTeW1ib2xzID0gKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXShzb3VyY2UpO1xuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XG4gICAgICBpKytcbiAgICApXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxuICAgICAgICByZXN1bHRbcHJvcGVydHlTeW1ib2xzW2ldXSA9IHNvdXJjZVtwcm9wZXJ0eVN5bWJvbHNbaV1dO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xuXG5leHBvcnQgdmFyIF9fZGVjb3JhdGUgPSBmdW5jdGlvbihcbiAgZGVjb3JhdG9yczogYW55LFxuICB0YXJnZXQ6IGFueSxcbiAga2V5OiBhbnksXG4gIGRlc2M6IGFueVxuKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICByID1cbiAgICAgIGMgPCAzXG4gICAgICAgID8gdGFyZ2V0XG4gICAgICAgIDogZGVzYyA9PT0gbnVsbFxuICAgICAgICA/IChkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXG4gICAgICAgIDogZGVzYyxcbiAgICBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2VcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgIGlmICgoZCA9IGRlY29yYXRvcnNbaV0pKVxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG4iLCJleHBvcnQgY2xhc3MgVG9vbGJhckhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTZWxlY3RvcihcclxuICAgIG9wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+LFxyXG4gICAgaXNTZWxlY3RlZDogKG9wdGlvbjogeyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkgPT4gYm9vbGVhbixcclxuICAgIGhhbmRlcjogKGU6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBvcHRpb24udGV4dDtcclxuICAgICAgb3B0aW9uRWxlbWVudC5zZWxlY3RlZCA9IGlzU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxlY3Qub25jaGFuZ2UgPSBoYW5kZXI7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24oXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkLFxyXG4gICAgdGV4dCA9IFwiXCIsXHJcbiAgICBjc3NDbGFzcyA9IFwiXCJcclxuICApIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uIFwiICsgY3NzQ2xhc3M7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gaGFuZGxlcjtcclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnRWxlbWVudChwYXRoOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2Z0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJzdmdcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJ1c2VcIlxyXG4gICAgKTtcclxuICAgIHVzZUVsZW0uc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgXCIjc2Etc3ZnLVwiICsgcGF0aFxyXG4gICAgKTtcclxuICAgIHN2Z0VsZW0uYXBwZW5kQ2hpbGQodXNlRWxlbSk7XHJcbiAgICByZXR1cm4gc3ZnRWxlbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnQnV0dG9uKHBhdGg6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQocGF0aCkpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnRuKGNhcHRpb246IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLXNtYWxsIHNhLXRhYmxlX19idG4tLWdyYXlcIjtcclxuICAgIGJ0bi5pbm5lckhUTUwgPSBjYXB0aW9uO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5wdXQoXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyID0gXCJcIixcclxuICAgIGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxuICApOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGVsLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XHJcbiAgICBlbC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIG9wdGlvbnMgPSB7XHJcbiAgcnVubmluZ0luQnJvd3NlcjogdHlwZW9mIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIsXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd0RvbVJlbmRlcmluZygpIHtcclxuICByZXR1cm4gb3B0aW9ucy5ydW5uaW5nSW5Ccm93c2VyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyB6aXBBcnJheXMoZmlyc3Q6IGFueVtdLCBzZWNvbmQ6IGFueVtdKTogYW55W11bXSB7XHJcbiAgICBsZXQgemlwQXJyYXk6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKGZpcnN0Lmxlbmd0aCwgc2Vjb25kLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICB6aXBBcnJheVtpXSA9IFtmaXJzdFtpXSwgc2Vjb25kW2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiB6aXBBcnJheTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW56aXBBcnJheXMoXHJcbiAgICB6aXBBcnJheTogYW55W11bXVxyXG4gICk6IHsgZmlyc3Q6IGFueVtdOyBzZWNvbmQ6IGFueVtdIH0ge1xyXG4gICAgbGV0IHR3b0FycmF5czogYW55ID0geyBmaXJzdDogW10sIHNlY29uZDogW10gfTtcclxuICAgIHppcEFycmF5LmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgIHR3b0FycmF5cy5maXJzdFtpXSA9IHZhbHVlWzBdO1xyXG4gICAgICB0d29BcnJheXMuc2Vjb25kW2ldID0gdmFsdWVbMV07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0d29BcnJheXM7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgc29ydERpY3Rpb25hcnkoXHJcbiAgICBrZXlzOiBhbnlbXSxcclxuICAgIHZhbHVlczogYW55W10sXHJcbiAgICBkZXNjOiBib29sZWFuXHJcbiAgKTogeyBrZXlzOiBhbnlbXTsgdmFsdWVzOiBhbnlbXSB9IHtcclxuICAgIGxldCBkaWN0aW9uYXJ5ID0gdGhpcy56aXBBcnJheXMoa2V5cywgdmFsdWVzKTtcclxuICAgIGxldCBjb21wYXJhdG9yID0gKGE6IGFueVtdLCBiOiBhbnlbXSwgYXNjOiBib29sZWFuID0gdHJ1ZSkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYVsxXSA8IGJbMV0gPyAxIDogYVsxXSA9PSBiWzFdID8gMCA6IC0xO1xyXG4gICAgICByZXR1cm4gYXNjID8gcmVzdWx0IDogcmVzdWx0ICogLTE7XHJcbiAgICB9O1xyXG4gICAgZGljdGlvbmFyeS5zb3J0KChhOiBhbnlbXSwgYjogYW55W10pID0+IHtcclxuICAgICAgcmV0dXJuIGRlc2MgPyBjb21wYXJhdG9yKGEsIGIsIGZhbHNlKSA6IGNvbXBhcmF0b3IoYSwgYik7XHJcbiAgICB9KTtcclxuICAgIGxldCBrZXlzQW5kVmFsdWVzID0gdGhpcy51bnppcEFycmF5cyhkaWN0aW9uYXJ5KTtcclxuICAgIHJldHVybiB7IGtleXM6IGtleXNBbmRWYWx1ZXMuZmlyc3QsIHZhbHVlczoga2V5c0FuZFZhbHVlcy5zZWNvbmQgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9QZXJjZW50YWdlKHZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=