/*!
 * surveyjs - SurveyJS Analytics library v1.7.27
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalyticsDatatables", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalyticsDatatables"] = factory(require("survey-core"));
	else
		root["SurveyAnalyticsDatatables"] = factory(root["Survey"]);
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
/*! exports provided: localization, surveyStrings, DataTables, DatatablesRow, TableExtensions, DocumentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });

/* harmony import */ var _localization_farsi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localization/farsi */ "./src/localization/farsi.ts");
/* harmony import */ var _localization_french__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localization/french */ "./src/localization/french.ts");
/* harmony import */ var _tables_extensions_rowextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tables/extensions/rowextensions */ "./src/tables/extensions/rowextensions.ts");
/* harmony import */ var _tables_extensions_headerextensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tables/extensions/headerextensions */ "./src/tables/extensions/headerextensions.ts");
/* harmony import */ var _tables_extensions_columnextensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/extensions/columnextensions */ "./src/tables/extensions/columnextensions.ts");
/* harmony import */ var _tables_extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tables/extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _tables_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tables/datatables */ "./src/tables/datatables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_7__["DatatablesRow"]; });

/* harmony import */ var _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tables/extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableExtensions", function() { return _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_8__["TableExtensions"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_9__["DocumentHelper"]; });


//localization


//extensions









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
    filterPlaceholder: "Search...",
    removeRows: "Remove rows",
    showLabel: "Show",
    entriesLabel: "entries",
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
    makePrivateButton: "Make private",
    makePublicButton: "Make public",
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
    showPercentages: "Show percentages",
    hidePercentages: "Hide percentages",
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
/*! exports provided: DataTables, DatatablesRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return DataTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return DatatablesRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _datatables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatables.scss */ "./src/tables/datatables.scss");
/* harmony import */ var _datatables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_datatables_scss__WEBPACK_IMPORTED_MODULE_5__);






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
        _this.onColumnsReorder = new survey_core__WEBPACK_IMPORTED_MODULE_2__["Event"]();
        return _this;
    }
    DataTables.initJQuery = function ($) {
        jQuery = $;
    };
    DataTables.prototype.destroy = function () {
        if (!this.renderResult)
            return;
        var tableNode = this.renderResult.children[0];
        if (jQuery.fn.DataTable.isDataTable(tableNode)) {
            jQuery(tableNode).DataTable().destroy();
        }
        this.datatableApi = undefined;
        _super.prototype.destroy.call(this);
    };
    DataTables.prototype.setColumnVisibility = function (columnName, visibility) {
        _super.prototype.setColumnVisibility.call(this, columnName, visibility);
        this.datatableApi.column(columnName + ":name").visible(!isInvisible);
        var isInvisible = visibility == _config__WEBPACK_IMPORTED_MODULE_3__["ColumnVisibility"].Invisible;
    };
    DataTables.prototype.setColumnLocation = function (columnName, location) {
        _super.prototype.setColumnLocation.call(this, columnName, location);
        var column = this.datatableApi.column(columnName + ":name");
        var isColumnLocation = location == _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Column;
        column.visible(isColumnLocation);
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
        _super.prototype.setPageSize.call(this, value);
        this.datatableApi.page.len(value).draw(false);
    };
    DataTables.prototype.setPageNumber = function (value) {
        _super.prototype.setPageNumber.call(this, value);
        this.datatableApi.page(value).draw(false);
    };
    DataTables.prototype.getPageNumber = function () {
        return this.datatableApi.page();
    };
    DataTables.prototype.render = function (targetNode) {
        var _this = this;
        var self = this;
        targetNode.className += " sa-table sa-datatables";
        targetNode.innerHTML = "";
        var tableNode = (_utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("table", ""));
        var columns = this.getColumns();
        var columnsData = columns.map(function (c) { return c.data; });
        var dtButtonClass = "sa-table__btn sa-table__btn--small sa-table__btn--gray";
        var options = jQuery.extend(true, {
            buttons: [
                { extend: "copy", className: dtButtonClass },
                { extend: "csv", className: dtButtonClass },
                { extend: "print", className: dtButtonClass },
            ],
            dom: 'B<"sa-table__header-extensions">prtip',
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
                datatableApi
                    .columns()
                    .eq(0)
                    .each(function (index) {
                    var $thNode = jQuery(datatableApi.columns(index).header());
                    $thNode.unbind("click.DT");
                    if (!!columnsData[index] && $thNode.has("button").length === 0) {
                        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-table__action-container");
                        self.extensions.render(container, "column", {
                            columnName: columnsData[index],
                        });
                        container.onmousedown = function (e) {
                            if (!self.isColumnReorderEnabled) {
                                e.stopPropagation();
                            }
                            else {
                                _this.disableColumnReorder();
                            }
                        };
                    }
                    $thNode.prepend(container);
                });
            },
        }, this.options);
        targetNode.appendChild(tableNode);
        tableNode.width = "100%";
        tableNode.className = "sa-datatables__table display responsive dataTable";
        var datatableApiRef = (this.datatableApi = jQuery(tableNode).DataTable(options));
        var extensionsContainer = jQuery("div.sa-table__header-extensions")[0];
        // this.onTableToolsCreated.fire(this, { extensions: extensions });
        this.extensions.render(extensionsContainer, "header");
        datatableApiRef.page(self.currentPageNumber);
        this.datatableApi.rowGroup().enable(false).draw(false);
        datatableApiRef.on("column-reorder", function (e, settings, details) {
            _this.moveColumn(details.from - 1, details.to - 1);
            _this.disableColumnReorder();
            _this.onColumnsReorder.fire(_this, { columns: _this.columns });
        });
        datatableApiRef
            .rows()
            .eq(0)
            .each(function (index) {
            var row = datatableApiRef.row(index);
            var detailsTr = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("tr");
            var detailsTd = (_utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("td", "sa-datatables__details-container"));
            detailsTr.appendChild(detailsTd);
            var rowElement = row.node();
            var firstCell = row.cell(row.index(), 0).node();
            var tableRow = new DatatablesRow(_this, firstCell, detailsTd, row);
            tableRow.onToggleDetails.add(function (sender, options) {
                if (options.isExpanded) {
                    detailsTd.colSpan = rowElement.childElementCount;
                    rowElement.parentNode.insertBefore(detailsTr, rowElement.nextSibling);
                }
                else {
                    if (!!detailsTr.parentNode) {
                        detailsTr.parentNode.removeChild(detailsTr);
                    }
                }
            });
            _this._rows.push(tableRow);
            tableRow.render();
        });
        datatableApiRef.draw(false);
        this.renderResult = targetNode;
    };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var columns = this.getAvailableColumns().map(function (column) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                name: column.name,
                data: column.name,
                sTitle: (question && question.title) || column.displayName,
                visible: _this.isColumnVisible(column),
                orderable: false,
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

var DatatablesRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DatatablesRow, _super);
    function DatatablesRow(table, extensionsContainer, detailsContainer, _innerRow) {
        var _this = _super.call(this, table, extensionsContainer, detailsContainer) || this;
        _this.table = table;
        _this.extensionsContainer = extensionsContainer;
        _this.detailsContainer = detailsContainer;
        _this._innerRow = _innerRow;
        _this.rowElement = _innerRow.node();
        _this.rowData = _innerRow.data();
        _this._innerRow = _this._innerRow.row(_this.rowElement);
        table.onColumnsReorder.add(function () {
            _this.render();
        });
        return _this;
    }
    Object.defineProperty(DatatablesRow.prototype, "innerRow", {
        get: function () {
            return this._innerRow.row(this.rowElement);
        },
        enumerable: false,
        configurable: true
    });
    DatatablesRow.prototype.getElement = function () {
        return this.rowElement;
    };
    DatatablesRow.prototype.getRowData = function () {
        return this.rowData;
    };
    DatatablesRow.prototype.getDataPosition = function () {
        return this.innerRow.index();
    };
    DatatablesRow.prototype.remove = function () {
        this.innerRow.remove().draw();
        _super.prototype.remove.call(this);
    };
    return DatatablesRow;
}(_table__WEBPACK_IMPORTED_MODULE_1__["TableRow"]));



/***/ }),

/***/ "./src/tables/extensions/columnextensions.ts":
/*!***************************************************!*\
  !*** ./src/tables/extensions/columnextensions.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");




_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "column",
    name: "drag",
    visibleIndex: 0,
    render: function (table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button", "sa-table__svg-button sa-table__drag-button");
        btn.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("drag"));
        btn.onmousedown = function (e) {
            table.enableColumnReorder();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "column",
    name: "sort",
    visibleIndex: 1,
    render: function (table, options) {
        var descTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("descOrder");
        var ascTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("ascOrder");
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("sorting");
        btn.title = "";
        var direction = "asc";
        btn.onclick = function () {
            if (direction == "asc") {
                btn.title = descTitle;
                direction = "desc";
            }
            else {
                btn.title = ascTitle;
                direction = "asc";
            }
            table.sortByColumn(options.columnName, direction);
        };
        btn.ondrag = function (e) {
            e.stopPropagation();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "column",
    name: "hide",
    visibleIndex: 2,
    render: function (table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("hide");
        btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("hideColumn");
        btn.onclick = function () {
            table.setColumnVisibility(options.columnName, _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Invisible);
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "column",
    name: "movetodetails",
    visibleIndex: 3,
    render: function (table, options) {
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("movetodetails");
        button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("moveToDetail");
        button.onclick = function (e) {
            e.stopPropagation();
            table.setColumnLocation(options.columnName, _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Row);
        };
        return button;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "column",
    name: "filter",
    visibleIndex: 4,
    render: function (table, options) {
        var el = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createInput("sa-table__filter", _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("filterPlaceholder"));
        el.onclick = function (e) { return e.stopPropagation(); };
        el.onchange = function (e) {
            table.applyColumnFilter(options.columnName, el.value);
        };
        return el;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "column",
    name: "makepublic",
    visibleIndex: -1,
    render: function (table, options) {
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button");
        var makePrivateSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makeprivate");
        var makePublicSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makepublic");
        var currentVisibility = table.getColumnVisibility(options.columnName);
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
            table.setColumnVisibility(options.columnName, currentVisibility);
            table.onPermissionsChangedCallback && table.onPermissionsChangedCallback(table);
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
    },
});


/***/ }),

/***/ "./src/tables/extensions/detailsextensions.ts":
/*!****************************************************!*\
  !*** ./src/tables/extensions/detailsextensions.ts ***!
  \****************************************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");




var Details = /** @class */ (function () {
    function Details(table, row, targetNode) {
        var _this = this;
        this.table = table;
        this.row = row;
        this.targetNode = targetNode;
        this.location = "details";
        this.createShowAsColumnButton = function (columnName) {
            var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--gray", { innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("showAsColumn") });
            button.onclick = function (e) {
                e.stopPropagation();
                _this.table.setColumnLocation(columnName, _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Column);
            };
            return button;
        };
        var detailsTable = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("table", "sa-table__detail-table");
        this.detailsTable = detailsTable;
        this.table.onColumnsLocationChanged.add(function () {
            _this.close();
        });
    }
    Details.prototype.open = function () {
        var _this = this;
        this.detailsTable.innerHTML = "";
        var rows = [];
        this.table.columns
            .filter(function (column) { return column.location === _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Row && column; })
            .forEach(function (column) {
            var row = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("tr", "sa-table__detail");
            var td1 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td", "", {
                innerHTML: column.displayName,
            });
            var td2 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td");
            td2.textContent = _this.row.getRowData()[column.name];
            var td3 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td");
            td3.appendChild(_this.createShowAsColumnButton(column.name));
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            rows.push(row);
        });
        var row = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("tr", "sa-table__detail");
        var td = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td", "", { colSpan: 3 });
        var extensions = new _tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"](this.table);
        extensions.render(td, "details", { row: this.row });
        if (td.children.length != 0) {
            row.appendChild(td);
            rows.push(row);
        }
        rows.forEach(function (row) {
            _this.detailsTable.appendChild(row);
        });
        this.targetNode.appendChild(this.detailsTable);
    };
    Details.prototype.close = function () {
        if (!!this.detailsTable.parentNode) {
            this.detailsTable.parentNode.removeChild(this.detailsTable);
        }
    };
    return Details;
}());



/***/ }),

/***/ "./src/tables/extensions/headerextensions.ts":
/*!***************************************************!*\
  !*** ./src/tables/extensions/headerextensions.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");




_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "header",
    name: "filter",
    visibleIndex: 0,
    render: function (table) {
        var input = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createInput("sa-table__global-filter sa-table__header-extension", _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("filterPlaceholder"));
        input.onchange = function (event) {
            table.applyFilter(event.target.value);
        };
        return input;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "header",
    name: "showcolumn",
    visibleIndex: 2,
    destroy: function () {
        this.onDestroy();
    },
    render: function (table) {
        var dropdown = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("select", "sa-table__show-column sa-table__header-extension");
        function update() {
            var hiddenColumns = table.columns.filter(function (column) { return column.visibility === _config__WEBPACK_IMPORTED_MODULE_1__["ColumnVisibility"].Invisible; });
            if (hiddenColumns.length == 0) {
                dropdown.style.display = "none";
                return;
            }
            dropdown.style.display = "inline-block";
            dropdown.innerHTML = "";
            var option = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("option", "", {
                text: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showColumn"),
                disabled: true,
                selected: true,
            });
            dropdown.appendChild(option);
            hiddenColumns.forEach(function (column) {
                var text = column.displayName;
                if (text.length > 20) {
                    text = text.substring(0, 20) + "...";
                }
                var option = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("option", "", {
                    text: text,
                    title: column.displayName,
                    value: column.name,
                });
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
        var onVisibilityChangedCallback = function () {
            update();
        };
        table.onColumnsVisibilityChanged.add(onVisibilityChangedCallback);
        this.onDestroy = function () {
            table.onColumnsVisibilityChanged.remove(onVisibilityChangedCallback);
        };
        return dropdown;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "header",
    name: "showentries",
    visibleIndex: 3,
    render: function (table) {
        function getEntriesDropdown(table) {
            var el = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("select");
            var optionsValues = ["1", "5", "10", "25", "50", "75", "100"];
            optionsValues.forEach(function (val) {
                var option = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("option", "", {
                    value: val,
                    text: val,
                });
                el.appendChild(option);
            });
            el.value = String(table.getPageSize());
            el.onchange = function () {
                table.setPageSize(Number(el.value));
            };
            return el;
        }
        var selectorContainer = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("div", "sa-table__entries");
        var showSpan = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("span", "sa-table__entries-label sa-table__entries-label--right", {
            innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showLabel"),
        });
        var entriesSpan = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("span", "sa-table__entries-label sa-table__entries-label--left", {
            innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("entriesLabel"),
        });
        selectorContainer.appendChild(showSpan);
        selectorContainer.appendChild(getEntriesDropdown(table));
        selectorContainer.appendChild(entriesSpan);
        return selectorContainer;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "header",
    name: "removerows",
    visibleIndex: -1,
    render: function (table) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--green sa-table__header-extension ", { innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("removeRows") });
        btn.onclick = function () {
            table.getCreatedRows().forEach(function (row) {
                if (row.getIsSelected()) {
                    row.remove();
                }
            });
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_3__["TableExtensions"].registerExtension({
    location: "header",
    name: "changelocale",
    visibleIndex: 1,
    render: function (table) {
        var locales = table.getLocales();
        if (locales.length < 2)
            return null;
        var el = (_utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("select", "sa-table__header-extension", {}));
        var optionsValues = [_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("changeLocale")].concat(locales);
        optionsValues.forEach(function (val) {
            var option = _utils__WEBPACK_IMPORTED_MODULE_2__["DocumentHelper"].createElement("option", "", {
                value: val,
                text: val,
            });
            el.appendChild(option);
        });
        el.onchange = function () {
            table.locale = el.value;
        };
        return el;
    },
});


/***/ }),

/***/ "./src/tables/extensions/rowextensions.ts":
/*!************************************************!*\
  !*** ./src/tables/extensions/rowextensions.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");



_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "row",
    name: "details",
    visibleIndex: 0,
    render: function (_table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createSvgButton("detail");
        btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showMinorColumns");
        btn.className += " sa-table__row-extension";
        btn.onclick = function () {
            options.row.toggleDetails();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "row",
    name: "select",
    visibleIndex: -1,
    render: function (_table, opt) {
        var row = opt.row;
        var checkbox = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("input", "sa-table__row-extension", {
            type: "checkbox",
        });
        checkbox.checked = row.getIsSelected();
        checkbox.onchange = function () {
            row.toggleSelect();
        };
        return checkbox;
    },
});


/***/ }),

/***/ "./src/tables/extensions/tableextensions.ts":
/*!**************************************************!*\
  !*** ./src/tables/extensions/tableextensions.ts ***!
  \**************************************************/
/*! exports provided: TableExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableExtensions", function() { return TableExtensions; });
var TableExtensions = /** @class */ (function () {
    function TableExtensions(table) {
        this.table = table;
        this.renderedExtensions = [];
    }
    TableExtensions.prototype.render = function (targetNode, location, options) {
        var _this = this;
        var extensions = TableExtensions.extensions[location];
        if (!!extensions) {
            extensions = this.sortExtensions(extensions);
            extensions.forEach(function (extension) {
                if (!!extension.render) {
                    var action = extension.render(_this.table, options);
                    if (!!action) {
                        targetNode.appendChild(action);
                        _this.renderedExtensions.push(extension);
                    }
                }
            });
        }
    };
    TableExtensions.prototype.destroy = function () {
        this.renderedExtensions.forEach(function (extension) {
            if (!!extension.destroy)
                extension.destroy();
        });
        this.renderedExtensions = [];
    };
    TableExtensions.registerExtension = function (extension) {
        if (!this.extensions[extension.location])
            this.extensions[extension.location] = [];
        this.extensions[extension.location].push(extension);
    };
    TableExtensions.findExtension = function (location, actionName) {
        if (!this.extensions[location])
            return null;
        var extension = this.extensions[location].filter(function (extension) {
            return extension.name == actionName;
        })[0];
        return extension || null;
    };
    TableExtensions.prototype.sortExtensions = function (extensions) {
        if (!Array.isArray(extensions))
            return;
        return []
            .concat(extensions.filter(function (extension) { return extension.visibleIndex >= 0; }))
            .sort(function (firstExtension, secondExtension) {
            return firstExtension.visibleIndex - secondExtension.visibleIndex;
        });
    };
    TableExtensions.extensions = {};
    return TableExtensions;
}());



/***/ }),

/***/ "./src/tables/table.ts":
/*!*****************************!*\
  !*** ./src/tables/table.ts ***!
  \*****************************/
/*! exports provided: Table, TableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");






var Table = /** @class */ (function () {
    function Table(survey, data, options, _columns, isTrustedAccess) {
        var _this = this;
        if (_columns === void 0) { _columns = []; }
        this.survey = survey;
        this.data = data;
        this.options = options;
        this._columns = _columns;
        this.isTrustedAccess = isTrustedAccess;
        this.currentPageSize = 5;
        this._rows = [];
        this.onColumnsVisibilityChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.onColumnsLocationChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.onRowRemoved = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.buildColumns = function (survey) {
            return _this.survey.getAllQuestions().map(function (question) {
                return {
                    name: question.name,
                    displayName: (question.title || "").trim() || question.name,
                    dataType: question.getType() !== "file"
                        ? _config__WEBPACK_IMPORTED_MODULE_2__["ColumnDataType"].Text
                        : _config__WEBPACK_IMPORTED_MODULE_2__["ColumnDataType"].FileLink,
                    visibility: question.getType() !== "file"
                        ? _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Visible
                        : _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Invisible,
                    location: _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Column,
                };
            });
        };
        this.isVisible = function (visibility) {
            return ((_this.isTrustedAccess && visibility !== _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Invisible) ||
                (!_this.isTrustedAccess && visibility === _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Visible));
        };
        this.isAvailable = function (visibility) {
            return (_this.isTrustedAccess || visibility !== _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].PublicInvisible);
        };
        this.getAvailableColumns = function () {
            return _this.columns.filter(function (column) {
                return _this.isAvailable(column.visibility);
            });
        };
        /**
         * Fires when table state changed.
         */
        this.onStateChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.initTableData(data);
        _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = this.survey.locale;
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.extensions = new _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__["TableExtensions"](this);
    }
    Table.prototype.getData = function () {
        return this.data;
    };
    Table.prototype.enableColumnReorder = function () {
        this.isColumnReorderEnabled = true;
    };
    Table.prototype.disableColumnReorder = function () {
        this.isColumnReorderEnabled = false;
    };
    Table.prototype.getPageNumber = function () {
        return this.currentPageNumber;
    };
    Table.prototype.setPageNumber = function (value) {
        this.currentPageNumber = value;
    };
    Table.prototype.getPageSize = function () {
        return this.currentPageSize;
    };
    Table.prototype.setPageSize = function (value) {
        this.currentPageSize = value;
    };
    Table.prototype.getCreatedRows = function () {
        return [].concat(this._rows);
    };
    Table.prototype.clearCreatedRows = function () {
        this._rows.forEach(function (row) {
            row.destroy();
        });
        this._rows = [];
    };
    Table.prototype.isColumnVisible = function (column) {
        return (column.location == _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Column &&
            this.isVisible(column.visibility));
    };
    Object.defineProperty(Table.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        set: function (columns) {
            this._columns = columns;
            this.refresh(true);
            this.onStateChanged.fire(this, this.state);
        },
        enumerable: false,
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
    Table.prototype.moveColumn = function (from, to) {
        var deletedColumns = this._columns.splice(from, 1);
        this._columns.splice(to, 0, deletedColumns[0]);
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.setColumnLocation = function (columnName, location) {
        this.columns.filter(function (column) { return column.name === columnName; })[0].location = location;
        this.onColumnsLocationChanged.fire(this, {
            columnName: columnName,
            location: location,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.setColumnVisibility = function (columnName, visibility) {
        var column = this.columns.filter(function (column) { return column.name === columnName; })[0];
        column.visibility = visibility;
        this.onColumnsVisibilityChanged.fire(this, {
            columnName: columnName,
            columnVisibility: visibility,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.getColumnVisibility = function (columnName) {
        var column = this.columns.filter(function (column) { return column.name === columnName; })[0];
        return column.visibility;
    };
    Table.prototype.removeRow = function (row) {
        var index = this._rows.indexOf(row);
        this._rows.splice(index, 1);
        this.onRowRemoved.fire(this, { row: row });
    };
    Object.defineProperty(Table.prototype, "locale", {
        /**
         * Returns current locale of the table.
         * If locales more than one, the language selection dropdown will be added in the toolbar
         */
        get: function () {
            return _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale;
        },
        /**
         * Sets locale for table.
         */
        set: function (newLocale) {
            this.survey.locale = newLocale;
            _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = newLocale;
            this.refresh(true);
            this.onStateChanged.fire(this, this.state);
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.getLocales = function () {
        return [].concat(this.survey.getUsedLocales());
    };
    Table.prototype.refresh = function (hard) {
        if (hard === void 0) { hard = false; }
        if (this.isRendered) {
            this.currentPageNumber = this.getPageNumber();
            if (hard) {
                this.initTableData(this.data);
            }
            var targetNode = this.renderResult;
            this.destroy();
            this.render(targetNode);
            this.setPageSize(this.currentPageSize);
            this.setPageNumber(this.currentPageNumber);
        }
    };
    Table.prototype.destroy = function () {
        this.clearCreatedRows();
        this.extensions.destroy();
        this.renderResult.innerHTML = "";
        this.renderResult = undefined;
    };
    Object.defineProperty(Table.prototype, "isRendered", {
        get: function () {
            return !!this.renderResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "state", {
        /**
         * Vizualization panel state getter.
         */
        get: function () {
            return {
                locale: _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale,
                elements: [].concat(this._columns),
            };
        },
        /**
         * Vizualization panel state setter.
         */
        set: function (newState) {
            _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = newState.locale;
            this._columns = newState.elements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "permissions", {
        /**
       * Gets table permissions.
       */
        get: function () {
            return this._columns.map(function (column) {
                return {
                    name: column.name,
                    visibility: column.visibility,
                };
            });
        },
        /**
         * Sets table permissions.
         */
        set: function (permissions) {
            var updatedElements = this._columns.map(function (column) {
                permissions.forEach(function (permission) {
                    if (permission.name === column.name)
                        column.visibility = permission.visibility;
                });
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, column);
            });
            this._columns = [].concat(updatedElements);
            this.onPermissionsChangedCallback && this.onPermissionsChangedCallback(this);
        },
        enumerable: false,
        configurable: true
    });
    return Table;
}());

var TableRow = /** @class */ (function () {
    function TableRow(table, extensionsContainer, detailsContainer) {
        var _this = this;
        this.table = table;
        this.extensionsContainer = extensionsContainer;
        this.detailsContainer = detailsContainer;
        this.detailedRowClass = "sa-table__detail-row";
        this.isDetailsExpanded = false;
        this.onToggleDetails = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.onColumnLocationChangedCallback = function () {
            _this.closeDetails();
        };
        this.details = new _extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_3__["Details"](table, this, detailsContainer);
        this.extensions = new _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__["TableExtensions"](table);
        table.onColumnsLocationChanged.add(this.onColumnLocationChangedCallback);
    }
    TableRow.prototype.render = function () {
        this.extensions.render(this.extensionsContainer, "row", { row: this });
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
    TableRow.prototype.getIsSelected = function () {
        return this.isSelected;
    };
    TableRow.prototype.toggleSelect = function () {
        this.isSelected = !this.isSelected;
    };
    TableRow.prototype.remove = function () {
        this.table.removeRow(this);
    };
    TableRow.prototype.destroy = function () {
        this.table.onColumnsLocationChanged.remove(this.onColumnLocationChangedCallback);
        this.extensions.destroy();
    };
    return TableRow;
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
    DocumentHelper.createSvgToggleButton = function (svgPath1, svPpath2, text1, text2, handler1, handler2, state, className) {
        if (state === void 0) { state = "first"; }
        if (className === void 0) { className = "sa-toolbar__button sa-toolbar__svg-button"; }
        var svg1 = DocumentHelper.createSvgElement(svgPath1);
        var svg2 = DocumentHelper.createSvgElement(svPpath2);
        var button = DocumentHelper.createElement("button", className);
        var toggle = function (e) {
            if (state === "first") {
                state = "second";
                button.title = text2;
                button.removeChild(svg1);
                button.appendChild(svg2);
                handler2(e);
            }
            else if (state === "second") {
                state = "first";
                button.title = text1;
                button.removeChild(svg2);
                button.appendChild(svg1);
                handler1(e);
            }
        };
        if (state === "first") {
            button.title = text1;
            button.appendChild(svg1);
        }
        else if ((state = "second")) {
            button.title = text2;
            button.appendChild(svg2);
        }
        button.onclick = toggle;
        return button;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mYXJzaS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2RhdGF0YWJsZXMuc2Nzcz85M2U1Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYmxlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDRDQUE0QywreEU7Ozs7Ozs7Ozs7OztBQ0E1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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LENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0lBRWEsdUJBQVksR0FBMUIsVUFBMkIsS0FBYSxFQUFFLFFBQWdCO1FBQ3hELE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0TEQseUQiLCJmaWxlIjoic3VydmV5LmFuYWx5dGljcy5kYXRhdGFibGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlBbmFseXRpY3NEYXRhdGFibGVzXCIsIFtcInN1cnZleS1jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc0RhdGF0YWJsZXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5QW5hbHl0aWNzRGF0YXRhYmxlc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlN1cnZleVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1kZXRhaWxcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI3LjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMTMuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1kcmFnXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTMgNWwtMSAxIDEgMUg5VjNsMSAxIDEtMS0zLTMtMyAzIDEgMSAxLTF2NEgzbDEtMS0xLTEtMyAzIDMgMyAxLTEtMS0xaDR2NGwtMS0xLTEgMSAzIDMgMy0zLTEtMS0xIDFWOWg0bC0xIDEgMSAxIDMtM3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1oaWRlXFxcIj48cGF0aCBjbGFzcz1cXFwic3QxXFxcIiBkPVxcXCJNMTIuNzkgNC4yTDE2IDFsLTEtMS0zLjMyIDMuMzJDMTAuNTcgMi41NSA5LjMyIDIgOCAyIDMuNjMgMiAwIDcuOTcgMCA3Ljk3czEuMjcgMi4xIDMuMjEgMy44MmwtMy4yMyAzLjIzLjk4Ljk4IDMuMzUtMy4zNEM1LjQxIDEzLjQ0IDYuNjcgMTQgOCAxNGM0LjM3IDAgOC02IDgtNnMtMS4yNy0yLjA5LTMuMjEtMy44ek0yIDcuOTdjMS4wNy0xLjQ3IDMuNjEtNCA2LTQgLjggMCAxLjYuMjcgMi4zNS42OGwtLjc4Ljc4Yy0uNDYtLjI5LS45OS0uNDYtMS41Ny0uNDYtMS42NiAwLTMgMS4zNC0zIDMgMCAuNTguMTcgMS4xMS40NiAxLjU3bC0uOTcuOTdBMTMuMzggMTMuMzggMCAwIDEgMiA3Ljk3em02IDRjLS44IDAtMS41OS0uMjctMi4zMy0uNjdsLjc4LS43N2MuNDUuMjcuOTguNDQgMS41NS40NCAxLjY2IDAgMy0xLjM0IDMtMyAwLS41Ny0uMTctMS4wOS0uNDQtMS41NWwuOTgtLjk4YzEuMTEuODcgMi4wMSAxLjkxIDIuNDYgMi41Mi0xLjA3IDEuNDgtMy42MSA0LjAxLTYgNC4wMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tYWtlcHJpdmF0ZVxcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiOFxcXCIgY3k9XFxcIjRcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk04IDhjLTMuMzEgMC02IDIuNzMtNiA0LjY3UzUuMjcgMTUgOCAxNXM2LS40IDYtMi4zM1MxMS4zMSA4IDggOHpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tYWtlcHVibGljXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI2XFxcIiBjeT1cXFwiNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEwIDVjMCAuMzQtLjA2LjY3LS4xNC45OS4wNSAwIC4wOS4wMS4xNC4wMSAxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtM0M4Ljk3IDAgOC4wNy41MiA3LjUzIDEuMyA4Ljk4IDEuOTEgMTAgMy4zMyAxMCA1ek02IDljLTMuMzEgMC02IDIuNzMtNiA0LjY3UzMuMjcgMTYgNiAxNnM2LS40IDYtMi4zM1M5LjMxIDkgNiA5ek0xMCA3Yy0uMTkgMC0uMzguMDEtLjU3LjAzYTQuMTQgNC4xNCAwIDAgMS0xLjM3IDEuMzljMyAuODMgNS4yMyAzLjMxIDUuNDIgNS4yOCAxLjQ0LS4zMSAyLjUyLS45MiAyLjUyLTIuMDNDMTYgOS43NCAxMy4zMSA3IDEwIDd6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbW92ZXRvZGV0YWlsc1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMS41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI3LjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMiAxaDN2OWgtM3pNMi4wMiA3LjAyTDEgNiAwIDdsMyAzIDMtMy0xLTEtLjk0Ljk0QzQuMzMgNC43MyA2LjIxIDMgOC41IDNjLjE3IDAgLjMzLjAzLjUuMDVWMS4wM0M4LjgzIDEuMDEgOC42NyAxIDguNSAxIDUuMDggMSAyLjI3IDMuNjYgMi4wMiA3LjAyelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLXNvcnRpbmdcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk04IDNsMiAyIDEtMS0zLTMtMyAzIDEgMXpNOCAxM2wtMi0yLTEgMSAzIDMgMy0zLTEtMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48L3N2Zz5cIjsiLCJleHBvcnQgKiBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG4vL2xvY2FsaXphdGlvblxuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZhcnNpXCI7XG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZnJlbmNoXCI7XG5cbi8vZXh0ZW5zaW9uc1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvcm93ZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvaGVhZGVyZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL3RhYmxlcy9kYXRhdGFibGVzXCI7XG5leHBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zXCI7XG5leHBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGVuZ2xpc2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICByZW1vdmVSb3dzOiBcIlJlbW92ZSByb3dzXCIsXG4gIHNob3dMYWJlbDogXCJTaG93XCIsXG4gIGVudHJpZXNMYWJlbDogXCJlbnRyaWVzXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0cyBpbiB0YWJsZVwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhY2tlZCBCYXJcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwiSGlkZVwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJNYWtlIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJNYWtlIHB1YmxpY1wiLFxuICBzaG93QnV0dG9uOiBcIlNob3dcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNoYW5nZUxvY2FsZTogXCJDaGFuZ2UgTG9jYWxlXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHRcIixcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXG4gIGRlc2NPcmRlcjogXCJEZXNjZW5kaW5nXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk90aGVyIGl0ZW1zIGFuZCBjb21tZW50c1wiLFxuICBzaG93UGVyY2VudGFnZXM6IFwiU2hvdyBwZXJjZW50YWdlc1wiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwiSGlkZSBwZXJjZW50YWdlc1wiLFxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vbG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcIkVuZ2xpc2hcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZmFyc2lTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCLar9ix2YjZhyDYqNmG2K/bjCDYqNinXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwi2K3YsNmBINqv2LHZiNmHXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCLYp9mG2KrYrtin2KhcIixcbiAgaGlkZUNvbHVtbjogXCLZhdiu2YHbjCDaqdix2K/ZhiDYs9iq2YjZhlwiLFxuICBzaG93Q29sdW1uOiBcItmG2YXYp9uM2LQg2LPYqtmI2YZcIixcbiAgbW92ZVRvRGV0YWlsOiBcItin2YbYqtmC2KfZhCDYqNmHINis2LLYptuM2KfYqlwiLFxuICBzaG93QXNDb2x1bW46IFwi2YbZhdin24zYtCDYqNmHINi52YbZiNin2YYg2LPYqtmI2YZcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcItmF2KrZiNmGINiv2LEg2KzYr9mI2YRcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwi2KfYqNixINqp2YTZhdin2KpcIixcbiAgY2hhcnRUeXBlX2JhcjogXCLZhduM2YTZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwi2K/Yp9io2LHZhyDYp9uMKHBpZSlcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwi2b7Ysdin2qnZhtiv2q/bjChTY2F0dGVyKVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi2LnZgtix2KjZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwi2YXYrtmB24xcIixcbiAgcmVzZXRGaWx0ZXI6IFwi2KjYp9iy2YbYtNin2YbbjCDZgduM2YTYqtix2YfYp1wiLFxuICBjbGVhckJ1dHRvbjogXCLZvtin2qkg2qnYsdiv2YZcIixcbiAgYWRkRWxlbWVudDogXCLYp9mG2KrYrtin2Kgg2LPZiNin2YQg2KjYsdin24wg2YbZhdin24zYtC4uLlwiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZhXCJdID0gZmFyc2lTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZmFcIl0gPSBcIkZhcnNpKFBlcnNpYW4pXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBmcmVuY2hTdHJpbmdzID0ge1xyXG4gICAgZ3JvdXBCdXR0b246IFwiR3JvdXBlclwiLFxyXG4gICAgdW5ncm91cEJ1dHRvbjogXCJEaXNzb2NpZXJcIixcclxuICAgIHNlbGVjdEJ1dHRvbjogXCJTw6lsZWN0aW9ubmVyXCIsXHJcbiAgICBoaWRlQ29sdW1uOiBcIk1hc3F1ZXIgY29sb25uZVwiLFxyXG4gICAgc2hvd0NvbHVtbjogXCJBZmZpY2hlciBjb2xvbm5lXCIsXHJcbiAgICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwcml2w6lcIixcclxuICAgIG1ha2VQdWJsaWNDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHVibGljXCIsXHJcbiAgICBtb3ZlVG9EZXRhaWw6IFwiRMOpcGxhY2VyIHZlcnMgZMOpdGFpbHNcIixcclxuICAgIHNob3dBc0NvbHVtbjogXCJBZmZpY2hlciBlbiBjb2xvbm5lXCIsXHJcbiAgICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dGVzIGVuIHRhYmxlXCIsXHJcbiAgICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJOdWFnZXMgZGUgbW90c1wiLFxyXG4gICAgY2hhcnRUeXBlX2JhcjogXCJCYXJyZXNcIixcclxuICAgIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIkJhcnJlcyBlbXBpbMOpZXNcIixcclxuICAgIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJBbm5lYXVcIixcclxuICAgIGNoYXJ0VHlwZV9waWU6IFwiU2VjdGV1cnNcIixcclxuICAgIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIk51YWdlcyBkZSBwb2ludHNcIixcclxuICAgIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gICAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXNcIixcclxuICAgIGhpZGVCdXR0b246IFwiTWFzcXVlclwiLFxyXG4gICAgcmVzZXRGaWx0ZXI6IFwiUmFmcmFpY2hpciBGaWx0cmVzXCIsXHJcbiAgICBjbGVhckJ1dHRvbjogXCJSYWZyYWljaGlyXCIsXHJcbiAgICBhZGRFbGVtZW50OiBcIkNob2lzaXIgbGEgcXVlc3Rpb24gw6AgYWZmaWNoZXIuLi5cIixcclxuICAgIGRlZmF1bHRPcmRlcjogXCJEZWZhdXRcIixcclxuICAgIGFzY09yZGVyOiBcIkFzY2VuZGFudFwiLFxyXG4gICAgZGVzY09yZGVyOiBcIkRlc2NlbmRhbnRcIixcclxuICAgIHNob3dNaW5vckNvbHVtbnM6IFwiQWZmaWNoZXIgbGVzIGNvbG9ubmVzIG1pbmV1cmVzXCJcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hTdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmclwiXSA9IFwiRnJlbmNoXCI7IiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xuXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxuICBkZWZhdWx0TG9jYWxlVmFsdWU6IFwiZW5cIixcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgc3VwcG9ydGVkTG9jYWxlczogPEFycmF5PGFueT4+W10sXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcbiAgICAgID8gXCJcIlxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGN1cnJlbnRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgZGVmYXVsdExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgZ2V0TG9jYWxlczogZnVuY3Rpb24oKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZExvY2FsZXMgJiYgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzLnNvcnQoKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcImVuZ2xpc2hcIjtcbiIsImV4cG9ydCBlbnVtIENvbHVtblZpc2liaWxpdHkge1xuICBWaXNpYmxlLFxuICBJbnZpc2libGUsXG4gIFB1YmxpY0ludmlzaWJsZSxcbn1cbmV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24ge1xuICBDb2x1bW4sXG4gIFJvdyxcbn1cbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHtcbiAgVGV4dCxcbiAgRmlsZUxpbmssXG4gIEltYWdlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xuICB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5O1xuICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTdGF0ZSB7XG4gIGxvY2FsZTogc3RyaW5nO1xuICBlbGVtZW50czogSVRhYmxlQ29sdW1uW107XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBUYWJsZSwgVGFibGVSb3cgfSBmcm9tIFwiLi90YWJsZVwiO1xuaW1wb3J0IHsgU3VydmV5TW9kZWwsIEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4sIENvbHVtblZpc2liaWxpdHksIFF1ZXN0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmltcG9ydCBcIi4vZGF0YXRhYmxlcy5zY3NzXCI7XG5cbmlmICghIWRvY3VtZW50KSB7XG4gIHZhciBzdmdUZW1wbGF0ZSA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4uL3N2Z2J1bmRsZS5odG1sXCIpO1xuICB2YXIgdGVtcGxhdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wbGF0ZUhvbGRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRlbXBsYXRlSG9sZGVyLmlubmVySFRNTCA9IHN2Z1RlbXBsYXRlO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlSG9sZGVyKTtcbn1cblxudmFyIGpRdWVyeSA9ICg8YW55PndpbmRvdylbXCJqUXVlcnlcIl07XG5cbmludGVyZmFjZSBEYXRhVGFibGVzT3B0aW9ucyB7XG4gIGJ1dHRvbnM6IGJvb2xlYW4gfCBzdHJpbmdbXSB8IGFueVtdIHwgYW55O1xuXG4gIGRvbTogc3RyaW5nO1xuXG4gIG9yZGVyRml4ZWQ6IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBBcnJheTxBcnJheTxudW1iZXIgfCBzdHJpbmc+PiB8IG9iamVjdDtcblxuICByb3dHcm91cDogYm9vbGVhbiB8IGFueTtcblxuICBoZWFkZXJDYWxsYmFjazogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlcyBleHRlbmRzIFRhYmxlIHtcbiAgcHVibGljIGRhdGF0YWJsZUFwaTogYW55O1xuXG4gIHB1YmxpYyBjdXJyZW50UGFnZU51bWJlcjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGlzIGZpcmVkIGNvbHVtbnMgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKiA8YnIvPiBzZW5kZXIgdGhlIGRhdGF0YWJsZXMgYWRhcHRlclxuICAgKiA8YnIvPiBvcHRpb25zLnN1cnZleSBjdXJyZW50IHN1cnZleVxuICAgKiBAc2VlIGdldENvbHVtbnNcbiAgICovXG4gIHB1YmxpYyBvbkNvbHVtbnNSZW9yZGVyOiBFdmVudDxcbiAgICAoc2VuZGVyOiBEYXRhVGFibGVzLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBEYXRhVGFibGVzLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEpRdWVyeSgkOiBhbnkpIHtcbiAgICBqUXVlcnkgPSAkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcbiAgICBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIG9wdGlvbnM6IERhdGFUYWJsZXNPcHRpb25zLFxuICAgIF9jb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+ID0gW10sXG4gICAgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgc3VwZXIoc3VydmV5LCBkYXRhLCBvcHRpb25zLCBfY29sdW1ucywgaXNUcnVzdGVkQWNjZXNzKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICghdGhpcy5yZW5kZXJSZXN1bHQpIHJldHVybjtcbiAgICBjb25zdCB0YWJsZU5vZGUgPSB0aGlzLnJlbmRlclJlc3VsdC5jaGlsZHJlblswXTtcbiAgICBpZiAoalF1ZXJ5LmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSh0YWJsZU5vZGUpKSB7XG4gICAgICBqUXVlcnkodGFibGVOb2RlKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YXRhYmxlQXBpID0gdW5kZWZpbmVkO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgIHN1cGVyLnNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZSwgdmlzaWJpbGl0eSk7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpLnZpc2libGUoIWlzSW52aXNpYmxlKTtcbiAgICB2YXIgaXNJbnZpc2libGUgPSB2aXNpYmlsaXR5ID09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcbiAgICBzdXBlci5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBsb2NhdGlvbik7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKTtcbiAgICB2YXIgaXNDb2x1bW5Mb2NhdGlvbiA9IGxvY2F0aW9uID09IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uO1xuICAgIGNvbHVtbi52aXNpYmxlKGlzQ29sdW1uTG9jYXRpb24pO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RmlsdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5zZWFyY2godmFsdWUpLmRyYXcoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5Q29sdW1uRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sdW1uTmFtZSArIFwiOm5hbWVcIik7XG4gICAgaWYgKGNvbHVtbi5zZWFyY2goKSAhPT0gdmFsdWUpIHtcbiAgICAgIGNvbHVtbi5zZWFyY2godmFsdWUpLmRyYXcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0QnlDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sdW1uTmFtZSArIFwiOm5hbWVcIik7XG4gICAgY29sdW1uLm9yZGVyKGRpcmVjdGlvbikuZHJhdyhmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZVNpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHN1cGVyLnNldFBhZ2VTaXplKHZhbHVlKTtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5wYWdlLmxlbih2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0UGFnZU51bWJlcih2YWx1ZSk7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkucGFnZSh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGF0YWJsZUFwaS5wYWdlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRhcmdldE5vZGUuY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlIHNhLWRhdGF0YWJsZXNcIjtcbiAgICB0YXJnZXROb2RlLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCB0YWJsZU5vZGUgPSA8SFRNTFRhYmxlRWxlbWVudD4oXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgXCJcIilcbiAgICApO1xuICAgIHZhciBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XG4gICAgdmFyIGNvbHVtbnNEYXRhOiBhbnkgPSBjb2x1bW5zLm1hcCgoYzogYW55KSA9PiBjLmRhdGEpO1xuICAgIGNvbnN0IGR0QnV0dG9uQ2xhc3MgPVxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLXNtYWxsIHNhLXRhYmxlX19idG4tLWdyYXlcIjtcbiAgICBjb25zdCBvcHRpb25zID0galF1ZXJ5LmV4dGVuZChcbiAgICAgIHRydWUsXG4gICAgICB7XG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7IGV4dGVuZDogXCJjb3B5XCIsIGNsYXNzTmFtZTogZHRCdXR0b25DbGFzcyB9LFxuICAgICAgICAgIHsgZXh0ZW5kOiBcImNzdlwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgICB7IGV4dGVuZDogXCJwcmludFwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZG9tOiAnQjxcInNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uc1wiPnBydGlwJyxcbiAgICAgICAgLy8gb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgICAgcGFnZUxlbmd0aDogNSxcbiAgICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIGNvbFJlb3JkZXI6IHtcbiAgICAgICAgICBmaXhlZENvbHVtbnNMZWZ0OiAxLFxuICAgICAgICAgIHJlYWx0aW1lOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy9vcmRlckZpeGVkOiBbWzEsIFwiYXNjXCJdXSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICBzU2VhcmNoOiBcIiBcIixcbiAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcjogXCJTZWFyY2guLi5cIixcbiAgICAgICAgICBzTGVuZ3RoTWVudTogXCJTaG93IF9NRU5VXyBlbnRyaWVzXCIsXG4gICAgICAgICAgcGFnaW5hdGU6IHtcbiAgICAgICAgICAgIHByZXZpb3VzOiBcIiBcIixcbiAgICAgICAgICAgIG5leHQ6IFwiIFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdDogXCJhcGlcIixcbiAgICAgICAgaGVhZGVyQ2FsbGJhY2s6IChcbiAgICAgICAgICB0aGVhZDogYW55LFxuICAgICAgICAgIGRhdGE6IGFueSxcbiAgICAgICAgICBzdGFydDogYW55LFxuICAgICAgICAgIGVuZDogYW55LFxuICAgICAgICAgIGRpc3BsYXk6IGFueVxuICAgICAgICApID0+IHtcbiAgICAgICAgICB2YXIgZGF0YXRhYmxlQXBpID0galF1ZXJ5KHRhYmxlTm9kZSkuZGF0YVRhYmxlKCkuYXBpKCk7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIGRhdGF0YWJsZUFwaVxuICAgICAgICAgICAgLmNvbHVtbnMoKVxuICAgICAgICAgICAgLmVxKDApXG4gICAgICAgICAgICAuZWFjaCgoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICB2YXIgJHRoTm9kZSA9IGpRdWVyeShkYXRhdGFibGVBcGkuY29sdW1ucyhpbmRleCkuaGVhZGVyKCkpO1xuICAgICAgICAgICAgICAkdGhOb2RlLnVuYmluZChcImNsaWNrLkRUXCIpO1xuICAgICAgICAgICAgICBpZiAoISFjb2x1bW5zRGF0YVtpbmRleF0gJiYgJHRoTm9kZS5oYXMoXCJidXR0b25cIikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJzYS10YWJsZV9fYWN0aW9uLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV4dGVuc2lvbnMucmVuZGVyKGNvbnRhaW5lciwgXCJjb2x1bW5cIiwge1xuICAgICAgICAgICAgICAgICAgY29sdW1uTmFtZTogY29sdW1uc0RhdGFbaW5kZXhdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbm1vdXNlZG93biA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHRoTm9kZS5wcmVwZW5kKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnNcbiAgICApO1xuXG4gICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0YWJsZU5vZGUpO1xuICAgIHRhYmxlTm9kZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIHRhYmxlTm9kZS5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZXNfX3RhYmxlIGRpc3BsYXkgcmVzcG9uc2l2ZSBkYXRhVGFibGVcIjtcblxuICAgIGNvbnN0IGRhdGF0YWJsZUFwaVJlZiA9ICh0aGlzLmRhdGF0YWJsZUFwaSA9IGpRdWVyeSh0YWJsZU5vZGUpLkRhdGFUYWJsZShcbiAgICAgIG9wdGlvbnNcbiAgICApKTtcbiAgICB2YXIgZXh0ZW5zaW9uc0NvbnRhaW5lciA9IGpRdWVyeShcImRpdi5zYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvbnNcIilbMF07XG5cbiAgICAvLyB0aGlzLm9uVGFibGVUb29sc0NyZWF0ZWQuZmlyZSh0aGlzLCB7IGV4dGVuc2lvbnM6IGV4dGVuc2lvbnMgfSk7XG4gICAgdGhpcy5leHRlbnNpb25zLnJlbmRlcihleHRlbnNpb25zQ29udGFpbmVyLCBcImhlYWRlclwiKTtcblxuICAgIGRhdGF0YWJsZUFwaVJlZi5wYWdlKHNlbGYuY3VycmVudFBhZ2VOdW1iZXIpO1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLnJvd0dyb3VwKCkuZW5hYmxlKGZhbHNlKS5kcmF3KGZhbHNlKTtcblxuICAgIGRhdGF0YWJsZUFwaVJlZi5vbihcbiAgICAgIFwiY29sdW1uLXJlb3JkZXJcIixcbiAgICAgIChlOiBhbnksIHNldHRpbmdzOiBhbnksIGRldGFpbHM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm1vdmVDb2x1bW4oZGV0YWlscy5mcm9tIC0gMSwgZGV0YWlscy50byAtIDEpO1xuICAgICAgICB0aGlzLmRpc2FibGVDb2x1bW5SZW9yZGVyKCk7XG4gICAgICAgIHRoaXMub25Db2x1bW5zUmVvcmRlci5maXJlKHRoaXMsIHsgY29sdW1uczogdGhpcy5jb2x1bW5zIH0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBkYXRhdGFibGVBcGlSZWZcbiAgICAgIC5yb3dzKClcbiAgICAgIC5lcSgwKVxuICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdmFyIHJvdyA9IGRhdGF0YWJsZUFwaVJlZi5yb3coaW5kZXgpO1xuICAgICAgICB2YXIgZGV0YWlsc1RyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICB2YXIgZGV0YWlsc1RkID0gPEhUTUxUYWJsZURhdGFDZWxsRWxlbWVudD4oXG4gICAgICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2EtZGF0YXRhYmxlc19fZGV0YWlscy1jb250YWluZXJcIilcbiAgICAgICAgKTtcbiAgICAgICAgZGV0YWlsc1RyLmFwcGVuZENoaWxkKGRldGFpbHNUZCk7XG4gICAgICAgIHZhciByb3dFbGVtZW50ID0gcm93Lm5vZGUoKTtcbiAgICAgICAgdmFyIGZpcnN0Q2VsbCA9IHJvdy5jZWxsKHJvdy5pbmRleCgpLCAwKS5ub2RlKCk7XG4gICAgICAgIHZhciB0YWJsZVJvdyA9IG5ldyBEYXRhdGFibGVzUm93KHRoaXMsIGZpcnN0Q2VsbCwgZGV0YWlsc1RkLCByb3cpO1xuICAgICAgICB0YWJsZVJvdy5vblRvZ2dsZURldGFpbHMuYWRkKChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICBkZXRhaWxzVGQuY29sU3BhbiA9IHJvd0VsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAgICAgICByb3dFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICBkZXRhaWxzVHIsXG4gICAgICAgICAgICAgIHJvd0VsZW1lbnQubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghIWRldGFpbHNUci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgIGRldGFpbHNUci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRldGFpbHNUcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcm93cy5wdXNoKHRhYmxlUm93KTtcbiAgICAgICAgdGFibGVSb3cucmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICBkYXRhdGFibGVBcGlSZWYuZHJhdyhmYWxzZSk7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB0YXJnZXROb2RlO1xuICB9XG5cbiAgcHVibGljIGdldENvbHVtbnMoKTogQXJyYXk8T2JqZWN0PiB7XG4gICAgY29uc3QgY29sdW1uczogYW55ID0gdGhpcy5nZXRBdmFpbGFibGVDb2x1bW5zKCkubWFwKChjb2x1bW4pID0+IHtcbiAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICBkYXRhOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgc1RpdGxlOiAocXVlc3Rpb24gJiYgcXVlc3Rpb24udGl0bGUpIHx8IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgdmlzaWJsZTogdGhpcy5pc0NvbHVtblZpc2libGUoY29sdW1uKSxcbiAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgbVJlbmRlcjogKF9kYXRhOiBvYmplY3QsIF90eXBlOiBzdHJpbmcsIHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcm93W2NvbHVtbi5uYW1lXTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGpRdWVyeShcIjxkaXY+XCIpLnRleHQodmFsdWUpLmh0bWwoKVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiXCIsXG4gICAgICB9LFxuICAgIF0uY29uY2F0KGNvbHVtbnMpO1xuICB9XG5cbiAgcHVibGljIGxheW91dCgpIHtcbiAgICAhIXRoaXMuZGF0YXRhYmxlQXBpICYmIHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbnMuYWRqdXN0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGF0YWJsZXNSb3cgZXh0ZW5kcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF9pbm5lclJvdzogYW55XG4gICkge1xuICAgIHN1cGVyKHRhYmxlLCBleHRlbnNpb25zQ29udGFpbmVyLCBkZXRhaWxzQ29udGFpbmVyKTtcbiAgICB0aGlzLnJvd0VsZW1lbnQgPSBfaW5uZXJSb3cubm9kZSgpO1xuICAgIHRoaXMucm93RGF0YSA9IF9pbm5lclJvdy5kYXRhKCk7XG4gICAgdGhpcy5faW5uZXJSb3cgPSB0aGlzLl9pbm5lclJvdy5yb3codGhpcy5yb3dFbGVtZW50KTtcbiAgICAoPERhdGFUYWJsZXM+dGFibGUpLm9uQ29sdW1uc1Jlb3JkZXIuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSByb3dFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSByb3dEYXRhOiBhbnk7XG5cbiAgcHVibGljIGdldCBpbm5lclJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJSb3cucm93KHRoaXMucm93RWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucm93RWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb3dEYXRhKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5yb3dEYXRhO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmluZGV4KCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5uZXJSb3cucmVtb3ZlKCkuZHJhdygpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImRyYWdcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIlxuICAgICk7XG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJkcmFnXCIpKTtcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGFibGUuZW5hYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJzb3J0XCIsXG4gIHZpc2libGVJbmRleDogMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xuICAgIGNvbnN0IGFzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpO1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJzb3J0aW5nXCIpO1xuICAgIGJ0bi50aXRsZSA9IFwiXCI7XG4gICAgdmFyIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcbiAgICAgICAgYnRuLnRpdGxlID0gZGVzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGFzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgICAgfVxuICAgICAgdGFibGUuc29ydEJ5Q29sdW1uKG9wdGlvbnMuY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiaGlkZVwiLFxuICB2aXNpYmxlSW5kZXg6IDIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XG4gICAgYnRuLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVDb2x1bW5cIik7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtb3ZldG9kZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJtb3ZldG9kZXRhaWxzXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRhYmxlLnNldENvbHVtbkxvY2F0aW9uKG9wdGlvbnMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiA0LFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIHZhciBlbCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZmlsdGVyXCIsXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcbiAgICApO1xuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlbC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUNvbHVtbkZpbHRlcihvcHRpb25zLmNvbHVtbk5hbWUsIGVsLnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBlbDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtYWtlcHVibGljXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWtlUHJpdmF0ZVN2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHJpdmF0ZVwiKTtcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XG4gICAgdmFyIGN1cnJlbnRWaXNpYmlsaXR5ID0gdGFibGUuZ2V0Q29sdW1uVmlzaWJpbGl0eShvcHRpb25zLmNvbHVtbk5hbWUpO1xuICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVByaXZhdGVTdmcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHVibGljU3ZnKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGN1cnJlbnRWaXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZSkge1xuICAgICAgICBjdXJyZW50VmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRWaXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICB9XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgY3VycmVudFZpc2liaWxpdHkpO1xuICAgICAgdGFibGUub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJiB0YWJsZS5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrKHRhYmxlKTtcbiAgICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgICAgY29uc3QgaXNQcml2YXRlID0gdmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICBpZiAoaXNQcml2YXRlKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uIHNhLXRhYmxlX19zdmctYnV0dG9uLS1hY3RpdmVcIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQcml2YXRlQ29sdW1uXCIpO1xuICAgICAgICBtYWtlUHJpdmF0ZVN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIERldGFpbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgcm93OiBUYWJsZVJvdyxcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdmFyIGRldGFpbHNUYWJsZSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxuICAgICk7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUgPSBkZXRhaWxzVGFibGU7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGRldGFpbHNUYWJsZTogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBsb2NhdGlvbiA9IFwiZGV0YWlsc1wiO1xuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICB0aGlzLnRhYmxlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiBjb2x1bW4pXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgICAgICB2YXIgdGQxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHtcbiAgICAgICAgICBpbm5lckhUTUw6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0ZDIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldFJvd0RhdGEoKVtjb2x1bW4ubmFtZV07XG4gICAgICAgIHZhciB0ZDMgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbihjb2x1bW4ubmFtZSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgIH0pO1xuICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7IGNvbFNwYW46IDMgfSk7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRoaXMudGFibGUpO1xuICAgIGV4dGVuc2lvbnMucmVuZGVyKHRkLCBcImRldGFpbHNcIiwgeyByb3c6IHRoaXMucm93IH0pO1xuICAgIGlmICh0ZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uID0gKGNvbHVtbk5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKSB9XG4gICAgKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbik7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGlmICghIXRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcbiAgICAgIFwic2EtdGFibGVfX2dsb2JhbC1maWx0ZXIgc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIixcbiAgICAgIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJQbGFjZWhvbGRlclwiKVxuICAgICk7XG4gICAgaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGFibGUuYXBwbHlGaWx0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJzaG93Y29sdW1uXCIsXG4gIHZpc2libGVJbmRleDogMixcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBkcm9wZG93biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNlbGVjdFwiLFxuICAgICAgXCJzYS10YWJsZV9fc2hvdy1jb2x1bW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRhYmxlLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAoY29sdW1uOiBhbnkpID0+IGNvbHVtbi52aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZVxuICAgICAgKTtcbiAgICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBkcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKSxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgIHZhciB0ZXh0ID0gY29sdW1uLmRpc3BsYXlOYW1lO1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAyMCkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgIHRpdGxlOiBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgICAgdmFsdWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyb3Bkb3duLm9uY2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF2YWwpIHJldHVybjtcbiAgICAgIHRhYmxlLnNldENvbHVtblZpc2liaWxpdHkodmFsLCBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHZhciBvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuYWRkKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG5cbiAgICB0aGlzLm9uRGVzdHJveSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLnJlbW92ZShvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIGRyb3Bkb3duO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3dlbnRyaWVzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGZ1bmN0aW9uIGdldEVudHJpZXNEcm9wZG93bih0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgICBjb25zdCBlbCA9IDxIVE1MU2VsZWN0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCIsIFwiMjVcIiwgXCI1MFwiLCBcIjc1XCIsIFwiMTAwXCJdO1xuICAgICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgdGV4dDogdmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgZWwudmFsdWUgPSBTdHJpbmcodGFibGUuZ2V0UGFnZVNpemUoKSk7XG5cbiAgICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0YWJsZS5zZXRQYWdlU2l6ZShOdW1iZXIoZWwudmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3JDb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXNcIlxuICAgICk7XG4gICAgY29uc3Qgc2hvd1NwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1yaWdodFwiLFxuICAgICAge1xuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLWxlZnRcIixcbiAgICAgIHtcbiAgICAgICAgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZW50cmllc0xhYmVsXCIpLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93U3Bhbik7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlKSk7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cmllc1NwYW4pO1xuICAgIHJldHVybiBzZWxlY3RvckNvbnRhaW5lcjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJyZW1vdmVyb3dzXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyZWVuIHNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uIFwiLFxuICAgICAgeyBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZW1vdmVSb3dzXCIpIH1cbiAgICApO1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGFibGUuZ2V0Q3JlYXRlZFJvd3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKHJvdy5nZXRJc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICByb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJjaGFuZ2Vsb2NhbGVcIixcbiAgdmlzaWJsZUluZGV4OiAxLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZSkge1xuICAgIHZhciBsb2NhbGVzID0gdGFibGUuZ2V0TG9jYWxlcygpO1xuICAgIGlmIChsb2NhbGVzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsID0gPEhUTUxTZWxlY3RFbGVtZW50PihcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLCB7fSlcbiAgICApO1xuICAgIHZhciBvcHRpb25zVmFsdWVzID0gW2xvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFuZ2VMb2NhbGVcIildLmNvbmNhdChcbiAgICAgIGxvY2FsZXNcbiAgICApO1xuICAgIG9wdGlvbnNWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIHRleHQ6IHZhbCxcbiAgICAgIH0pO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBlbC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLmxvY2FsZSA9IGVsLnZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIGVsO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwiZGV0YWlsc1wiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogKF90YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImRldGFpbFwiKTtcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd01pbm9yQ29sdW1uc1wiKTtcbiAgICBidG4uY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvcHRpb25zLnJvdy50b2dnbGVEZXRhaWxzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcInJvd1wiLFxuICBuYW1lOiBcInNlbGVjdFwiLFxuICB2aXNpYmxlSW5kZXg6IC0xLFxuICByZW5kZXI6IGZ1bmN0aW9uIChfdGFibGUsIG9wdCkge1xuICAgIHZhciByb3cgPSBvcHQucm93O1xuICAgIHZhciBjaGVja2JveCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImlucHV0XCIsXG4gICAgICBcInNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCIsXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSByb3cuZ2V0SXNTZWxlY3RlZCgpO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LnRvZ2dsZVNlbGVjdCgpO1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuXG5pbnRlcmZhY2UgSVRhYmxlRXh0ZW5zaW9uIHtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2aXNpYmxlSW5kZXg6IG51bWJlcjtcbiAgcmVuZGVyOiAodGFibGU6IFRhYmxlLCBvcHQ6IGFueSkgPT4gSFRNTEVsZW1lbnQ7XG4gIGRlc3Ryb3k/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVFeHRlbnNpb25zIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZTogVGFibGUpIHt9XG4gIHByaXZhdGUgc3RhdGljIGV4dGVuc2lvbnM6IHtcbiAgICBbbG9jYXRpb246IHN0cmluZ106IEFycmF5PElUYWJsZUV4dGVuc2lvbj47XG4gIH0gPSB7fTtcbiAgcHJpdmF0ZSByZW5kZXJlZEV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gPSBbXTtcblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LCBsb2NhdGlvbjogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tsb2NhdGlvbl07XG4gICAgaWYgKCEhZXh0ZW5zaW9ucykge1xuICAgICAgZXh0ZW5zaW9ucyA9IHRoaXMuc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9ucyk7XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgICBpZiAoISFleHRlbnNpb24ucmVuZGVyKSB7XG4gICAgICAgICAgdmFyIGFjdGlvbiA9IGV4dGVuc2lvbi5yZW5kZXIodGhpcy50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKCEhYWN0aW9uKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5mb3JFYWNoKChleHRlbnNpb24pID0+IHtcbiAgICAgIGlmICghIWV4dGVuc2lvbi5kZXN0cm95KSBleHRlbnNpb24uZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zID0gW107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXh0ZW5zaW9uKGV4dGVuc2lvbjogSVRhYmxlRXh0ZW5zaW9uKSB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXSlcbiAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dID0gW107XG4gICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0ucHVzaChleHRlbnNpb24pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmaW5kRXh0ZW5zaW9uKFxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nXG4gICk6IElUYWJsZUV4dGVuc2lvbiB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbbG9jYXRpb25dKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgZXh0ZW5zaW9uID0gdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXS5maWx0ZXIoZnVuY3Rpb24gKFxuICAgICAgZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb25cbiAgICApIHtcbiAgICAgIHJldHVybiBleHRlbnNpb24ubmFtZSA9PSBhY3Rpb25OYW1lO1xuICAgIH0pWzBdO1xuICAgIHJldHVybiBleHRlbnNpb24gfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9uczogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRlbnNpb25zKSkgcmV0dXJuO1xuICAgIHJldHVybiBbXVxuICAgICAgLmNvbmNhdChleHRlbnNpb25zLmZpbHRlcigoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24udmlzaWJsZUluZGV4ID49IDApKVxuICAgICAgLnNvcnQoKGZpcnN0RXh0ZW5zaW9uLCBzZWNvbmRFeHRlbnNpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGZpcnN0RXh0ZW5zaW9uLnZpc2libGVJbmRleCAtIHNlY29uZEV4dGVuc2lvbi52aXNpYmxlSW5kZXg7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHtcbiAgQ29sdW1uVmlzaWJpbGl0eSxcbiAgUXVlc3Rpb25Mb2NhdGlvbixcbiAgQ29sdW1uRGF0YVR5cGUsXG4gIElUYWJsZVN0YXRlLFxuICBJVGFibGVDb2x1bW4sXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgSVBlcm1pc3Npb24gfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGUge1xuICBwcm90ZWN0ZWQgdGFibGVEYXRhOiBhbnk7XG4gIHByb3RlY3RlZCBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIHByb3RlY3RlZCBvcHRpb25zOiBhbnksXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW10sXG4gICAgcHVibGljIGlzVHJ1c3RlZEFjY2VzczogYm9vbGVhblxuICApIHtcbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFibGVEYXRhKGRhdGEpO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdGhpcy5zdXJ2ZXkubG9jYWxlO1xuXG4gICAgaWYgKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuXG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0aGlzKTtcbiAgfVxuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2l6ZTogbnVtYmVyID0gNTtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfcm93czogVGFibGVSb3dbXSA9IFtdO1xuICBwcm90ZWN0ZWQgaXNDb2x1bW5SZW9yZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uUm93UmVtb3ZlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICByb3c6IFRhYmxlUm93XG4gICkgPT4gSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3Qgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHB1YmxpYyBlbmFibGVDb2x1bW5SZW9yZGVyKCkge1xuICAgIHRoaXMuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZUNvbHVtblJlb3JkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlU2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50UGFnZVNpemUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDcmVhdGVkUm93cygpOiBUYWJsZVJvd1tdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3Jvd3MpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ3JlYXRlZFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcm93cyA9IFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpLm1hcCgocXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkYXRhVHlwZTpcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXG4gICAgICAgICAgICA/IENvbHVtbkRhdGFUeXBlLlRleHRcbiAgICAgICAgICAgIDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6XG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIlxuICAgICAgICAgICAgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGVcbiAgICAgICAgICAgIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbixcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGlzQ29sdW1uVmlzaWJsZShjb2x1bW46IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICBjb2x1bW4ubG9jYXRpb24gPT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4gJiZcbiAgICAgIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNWaXNpYmxlID0gKHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlKSB8fFxuICAgICAgKCF0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUpXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgaXNBdmFpbGFibGUgPSAodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzVHJ1c3RlZEFjY2VzcyB8fCB2aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZVxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIGdldEF2YWlsYWJsZUNvbHVtbnMgPSAoKTogQXJyYXk8SVRhYmxlQ29sdW1uPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0F2YWlsYWJsZShjb2x1bW4udmlzaWJpbGl0eSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvbHVtbnMoY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPikge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gaXRlbVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi5kaXNwbGF5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID1cbiAgICAgICAgICB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQ29sdW1uKGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xuICAgIHZhciBkZWxldGVkQ29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGZyb20sIDEpO1xuICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKHRvLCAwLCBkZWxldGVkQ29sdW1uc1swXSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcbiAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWVcbiAgICApWzBdLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuZmlyZSh0aGlzLCB7XG4gICAgICBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLFxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgICBjb2x1bW4udmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG4gICAgdGhpcy5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBjb2x1bW5WaXNpYmlsaXR5OiB2aXNpYmlsaXR5LFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZyk6IENvbHVtblZpc2liaWxpdHkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgICByZXR1cm4gY29sdW1uLnZpc2liaWxpdHk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlUm93KHJvdzogVGFibGVSb3cpOiB2b2lkIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9yb3dzLmluZGV4T2Yocm93KTtcbiAgICB0aGlzLl9yb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5vblJvd1JlbW92ZWQuZmlyZSh0aGlzLCB7IHJvdzogcm93IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBsb2NhbGUgb2YgdGhlIHRhYmxlLlxuICAgKiBJZiBsb2NhbGVzIG1vcmUgdGhhbiBvbmUsIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gZHJvcGRvd24gd2lsbCBiZSBhZGRlZCBpbiB0aGUgdG9vbGJhclxuICAgKi9cbiAgcHVibGljIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbG9jYWxlIGZvciB0YWJsZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgbG9jYWxlKG5ld0xvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdXJ2ZXkubG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuc3VydmV5LmdldFVzZWRMb2NhbGVzKCkpO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2goaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuZ2V0UGFnZU51bWJlcigpO1xuICAgICAgaWYgKGhhcmQpIHtcbiAgICAgICAgdGhpcy5pbml0VGFibGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0O1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJlbmRlcih0YXJnZXROb2RlKTtcbiAgICAgIHRoaXMuc2V0UGFnZVNpemUodGhpcy5jdXJyZW50UGFnZVNpemUpO1xuICAgICAgdGhpcy5zZXRQYWdlTnVtYmVyKHRoaXMuY3VycmVudFBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJDcmVhdGVkUm93cygpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnJlbmRlclJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIGdldHRlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogSVRhYmxlU3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxuICAgICAgZWxlbWVudHM6IFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIHNldHRlci5cbiAgICovXG4gIHB1YmxpYyBzZXQgc3RhdGUobmV3U3RhdGU6IElUYWJsZVN0YXRlKSB7XG4gICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSBuZXdTdGF0ZS5sb2NhbGU7XG4gICAgdGhpcy5fY29sdW1ucyA9IG5ld1N0YXRlLmVsZW1lbnRzO1xuICB9XG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRhYmxlIHN0YXRlIGNoYW5nZWQuXG4gICAqL1xuICBwdWJsaWMgb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+KCk7XG5cbiAgICAvKipcbiAgICogR2V0cyB0YWJsZSBwZXJtaXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKTogSVBlcm1pc3Npb25bXSB7XG4gICAgcmV0dXJuIDxhbnk+dGhpcy5fY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgIHZpc2liaWxpdHk6IGNvbHVtbi52aXNpYmlsaXR5LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0YWJsZSBwZXJtaXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBzZXQgcGVybWlzc2lvbnMocGVybWlzc2lvbnM6IElQZXJtaXNzaW9uW10pIHtcbiAgICBjb25zdCB1cGRhdGVkRWxlbWVudHMgPSB0aGlzLl9jb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtaXNzaW9uLm5hbWUgPT09IGNvbHVtbi5uYW1lKVxuICAgICAgICBjb2x1bW4udmlzaWJpbGl0eSA9IHBlcm1pc3Npb24udmlzaWJpbGl0eTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyAuLi5jb2x1bW4gfTtcbiAgICB9KTtcbiAgICB0aGlzLl9jb2x1bW5zID0gW10uY29uY2F0KHVwZGF0ZWRFbGVtZW50cyk7XG4gICAgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrICYmIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHBlcm1pc3Npb25zIGNoYW5nZWRcbiAgICovXG4gIHB1YmxpYyBvblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyh0YWJsZSwgdGhpcywgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0YWJsZSk7XG4gICAgdGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmFkZCh0aGlzLm9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG4gIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICBwdWJsaWMgZXh0ZW5zaW9uczogVGFibGVFeHRlbnNpb25zO1xuICBwcml2YXRlIGRldGFpbGVkUm93Q2xhc3MgPSBcInNhLXRhYmxlX19kZXRhaWwtcm93XCI7XG4gIHByaXZhdGUgaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgcHVibGljIG9uVG9nZ2xlRGV0YWlsczogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJvdydzIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGF0YSwgd2hpY2ggaXMgZGlzcGxheWVkIGluIHRoZSByb3cuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0Um93RGF0YSgpOiBhbnk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcG9zaXRpb24gb2Ygcm93IGluIHRoZSB0YWJsZSdzIGRhdGEuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0RGF0YVBvc2l0aW9uKCk6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgaXNTZWxlY3RlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIodGhpcy5leHRlbnNpb25zQ29udGFpbmVyLCBcInJvd1wiLCB7IHJvdzogdGhpcyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGV0YWlscygpIHtcbiAgICB0aGlzLmRldGFpbHMub3BlbigpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMuZGV0YWlsZWRSb3dDbGFzcztcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzRGV0YWlsc0V4cGFuZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLmNsb3NlKCk7XG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRldGFpbGVkUm93Q2xhc3MpO1xuICAgIHRoaXMub25Ub2dnbGVEZXRhaWxzLmZpcmUodGhpcywgeyBpc0V4cGFuZGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLmlzRGV0YWlsc0V4cGFuZGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRGV0YWlscygpIHtcbiAgICBpZiAodGhpcy5pc0RldGFpbHNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5jbG9zZURldGFpbHMoKTtcbiAgICB9IGVsc2UgdGhpcy5vcGVuRGV0YWlscygpO1xuICB9XG5cbiAgcHVibGljIGdldElzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZDtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gIXRoaXMuaXNTZWxlY3RlZDtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5yZW1vdmVSb3codGhpcyk7XG4gIH1cblxuICBwcml2YXRlIG9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG9zZURldGFpbHMoKTtcbiAgfTtcblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5yZW1vdmUoXG4gICAgICB0aGlzLm9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2tcbiAgICApO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsImV4cG9ydCB2YXIgX19hc3NpZ24gPVxuICAoPGFueT5PYmplY3QpW1wiYXNzaWduXCJdIHx8XG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgcCBpbiBzKVxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xuICBmb3IgKHZhciBwIGluIGJhc2VDbGFzcylcbiAgICBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XG4gIGZ1bmN0aW9uIF9fKCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSB0aGlzQ2xhc3M7XG4gIH1cbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XG4gICAgYmFzZUNsYXNzID09PSBudWxsXG4gICAgICA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKVxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcbiAgdmFyIHJlc3VsdDogYW55ID0ge307XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBzb3VyY2UpXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgcHJvcGVydHlOYW1lKSAmJlxuICAgICAgZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPCAwXG4gICAgKVxuICAgICAgcmVzdWx0W3Byb3BlcnR5TmFtZV0gPSBzb3VyY2VbcHJvcGVydHlOYW1lXTtcbiAgaWYgKFxuICAgIHNvdXJjZSAhPSBudWxsICYmXG4gICAgdHlwZW9mICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0gPT09IFwiZnVuY3Rpb25cIlxuICApXG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgcHJvcGVydHlTeW1ib2xzID0gKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXShzb3VyY2UpO1xuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XG4gICAgICBpKytcbiAgICApXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxuICAgICAgICByZXN1bHRbcHJvcGVydHlTeW1ib2xzW2ldXSA9IHNvdXJjZVtwcm9wZXJ0eVN5bWJvbHNbaV1dO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xuXG5leHBvcnQgdmFyIF9fZGVjb3JhdGUgPSBmdW5jdGlvbihcbiAgZGVjb3JhdG9yczogYW55LFxuICB0YXJnZXQ6IGFueSxcbiAga2V5OiBhbnksXG4gIGRlc2M6IGFueVxuKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICByID1cbiAgICAgIGMgPCAzXG4gICAgICAgID8gdGFyZ2V0XG4gICAgICAgIDogZGVzYyA9PT0gbnVsbFxuICAgICAgICA/IChkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXG4gICAgICAgIDogZGVzYyxcbiAgICBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2VcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgIGlmICgoZCA9IGRlY29yYXRvcnNbaV0pKVxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG4iLCJleHBvcnQgY2xhc3MgRG9jdW1lbnRIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9PixcclxuICAgIGlzU2VsZWN0ZWQ6IChvcHRpb246IHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0pID0+IGJvb2xlYW4sXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0LXdyYXBwZXJcIjtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0XCI7XHJcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xyXG4gICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgdGV4dDogb3B0aW9uLnRleHQsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQob3B0aW9uKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gaGFuZGxlcjtcclxuICAgIHNlbGVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgIHJldHVybiBzZWxlY3RXcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24oXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkLFxyXG4gICAgdGV4dCA9IFwiXCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvblwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBjbGFzc05hbWUsIHtcclxuICAgICAgaW5uZXJUZXh0OiB0ZXh0LFxyXG4gICAgICBvbmNsaWNrOiBoYW5kbGVyLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KFxyXG4gICAgdGFnTmFtZTogc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgYXR0cnM/OiBhbnlcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKCEhYXR0cnMpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICg8YW55PmVsKVtrZXldID0gYXR0cnNba2V5XTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0VsZW1lbnQocGF0aDogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwic3ZnXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB1c2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwidXNlXCJcclxuICAgICk7XHJcbiAgICB1c2VFbGVtLnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgIFwiI3NhLXN2Zy1cIiArIHBhdGhcclxuICAgICk7XHJcbiAgICBzdmdFbGVtLmFwcGVuZENoaWxkKHVzZUVsZW0pO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0J1dHRvbihwYXRoOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG4gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic2EtdGFibGVfX3N2Zy1idXR0b25cIilcclxuICAgICk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChwYXRoKSk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdUb2dnbGVCdXR0b24oXHJcbiAgICBzdmdQYXRoMTogc3RyaW5nLFxyXG4gICAgc3ZQcGF0aDI6IHN0cmluZyxcclxuICAgIHRleHQxOiBzdHJpbmcsXHJcbiAgICB0ZXh0Mjogc3RyaW5nLFxyXG4gICAgaGFuZGxlcjE6IChlOiBhbnkpID0+IGFueSxcclxuICAgIGhhbmRsZXIyOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBzdGF0ZSA9IFwiZmlyc3RcIixcclxuICAgIGNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uIHNhLXRvb2xiYXJfX3N2Zy1idXR0b25cIlxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2ZzEgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2Z1BhdGgxKTtcclxuICAgIGNvbnN0IHN2ZzIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2UHBhdGgyKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgY2xhc3NOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcInNlY29uZFwiO1xyXG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChzdmcxKTtcclxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgaGFuZGxlcjIoZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFwic2Vjb25kXCIpIHtcclxuICAgICAgICBzdGF0ZSA9IFwiZmlyc3RcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgICAgIGhhbmRsZXIxKGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQxO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMSk7XHJcbiAgICB9IGVsc2UgaWYgKChzdGF0ZSA9IFwic2Vjb25kXCIpKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSB0b2dnbGU7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5wdXQoXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyID0gXCJcIixcclxuICAgIGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxuICApOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiaW5wdXRcIixcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIHJ1bm5pbmdJbkJyb3dzZXI6IHR5cGVvZiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiLFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEb21SZW5kZXJpbmcoKSB7XHJcbiAgcmV0dXJuIG9wdGlvbnMucnVubmluZ0luQnJvd3NlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgemlwQXJyYXlzKGZpcnN0OiBhbnlbXSwgc2Vjb25kOiBhbnlbXSk6IGFueVtdW10ge1xyXG4gICAgbGV0IHppcEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihmaXJzdC5sZW5ndGgsIHNlY29uZC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgemlwQXJyYXlbaV0gPSBbZmlyc3RbaV0sIHNlY29uZFtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gemlwQXJyYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuemlwQXJyYXlzKFxyXG4gICAgemlwQXJyYXk6IGFueVtdW11cclxuICApOiB7IGZpcnN0OiBhbnlbXTsgc2Vjb25kOiBhbnlbXSB9IHtcclxuICAgIGxldCB0d29BcnJheXM6IGFueSA9IHsgZmlyc3Q6IFtdLCBzZWNvbmQ6IFtdIH07XHJcbiAgICB6aXBBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICB0d29BcnJheXMuZmlyc3RbaV0gPSB2YWx1ZVswXTtcclxuICAgICAgdHdvQXJyYXlzLnNlY29uZFtpXSA9IHZhbHVlWzFdO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHdvQXJyYXlzO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNvcnREaWN0aW9uYXJ5KFxyXG4gICAga2V5czogYW55W10sXHJcbiAgICB2YWx1ZXM6IGFueVtdLFxyXG4gICAgZGVzYzogYm9vbGVhblxyXG4gICk6IHsga2V5czogYW55W107IHZhbHVlczogYW55W10gfSB7XHJcbiAgICBsZXQgZGljdGlvbmFyeSA9IHRoaXMuemlwQXJyYXlzKGtleXMsIHZhbHVlcyk7XHJcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFbMV0gPCBiWzFdID8gMSA6IGFbMV0gPT0gYlsxXSA/IDAgOiAtMTtcclxuICAgICAgcmV0dXJuIGFzYyA/IHJlc3VsdCA6IHJlc3VsdCAqIC0xO1xyXG4gICAgfTtcclxuICAgIGRpY3Rpb25hcnkuc29ydCgoYTogYW55W10sIGI6IGFueVtdKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZXNjID8gY29tcGFyYXRvcihhLCBiLCBmYWxzZSkgOiBjb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQga2V5c0FuZFZhbHVlcyA9IHRoaXMudW56aXBBcnJheXMoZGljdGlvbmFyeSk7XHJcbiAgICByZXR1cm4geyBrZXlzOiBrZXlzQW5kVmFsdWVzLmZpcnN0LCB2YWx1ZXM6IGtleXNBbmRWYWx1ZXMuc2Vjb25kIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlIC8gbWF4VmFsdWUpICogMTAwO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9