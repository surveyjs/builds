/*!
 * surveyjs - SurveyJS Analytics library v1.7.26
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
    DatatablesRow.prototype.getData = function () {
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
            td2.textContent = _this.row.getData()[column.name];
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
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");





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
        this.onColumnsVisibilityChanged = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        this.onColumnsLocationChanged = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        this.onRowRemoved = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
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
        this.isAvailable = function (visibility) {
            return (_this.isTrustedAccess || visibility !== _config__WEBPACK_IMPORTED_MODULE_1__["ColumnVisibility"].PublicInvisible);
        };
        this.getAvailableColumns = function () {
            return _this.columns.filter(function (column) {
                return _this.isAvailable(column.visibility);
            });
        };
        /**
         * Fires when vizualization panel state changed.
         */
        this.onStateChanged = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.initTableData(data);
        _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].currentLocale = this.survey.locale;
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.extensions = new _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_4__["TableExtensions"](this);
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
        return (column.location == _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Column &&
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
            return _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].currentLocale;
        },
        /**
         * Sets locale for table.
         */
        set: function (newLocale) {
            this.survey.locale = newLocale;
            _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].currentLocale = newLocale;
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
                locale: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].currentLocale,
                elements: [].concat(this._columns),
            };
        },
        /**
         * Vizualization panel state setter.
         */
        set: function (newState) {
            _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].currentLocale = newState.locale;
            this._columns = newState.elements;
            this.onStateChanged.fire(this, this.state);
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
        this.onToggleDetails = new survey_core__WEBPACK_IMPORTED_MODULE_0__["Event"]();
        this.onColumnLocationChangedCallback = function () {
            _this.closeDetails();
        };
        this.details = new _extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_2__["Details"](table, this, detailsContainer);
        this.extensions = new _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_4__["TableExtensions"](table);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mYXJzaS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2RhdGF0YWJsZXMuc2Nzcz85M2U1Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYmxlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDRDQUE0QywreEU7Ozs7Ozs7Ozs7OztBQ0E1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFRO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsT0FBTyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVhLHVCQUFZLEdBQTFCLFVBQTJCLEtBQWEsRUFBRSxRQUFnQjtRQUN4RCxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDM0lELHlEIiwiZmlsZSI6InN1cnZleS5hbmFseXRpY3MuZGF0YXRhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzRGF0YXRhYmxlc1wiLCBbXCJzdXJ2ZXktY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NEYXRhdGFibGVzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc0RhdGF0YWJsZXNcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL2RhdGF0YWJsZXMudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZGV0YWlsXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZHJhZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEzIDVsLTEgMSAxIDFIOVYzbDEgMSAxLTEtMy0zLTMgMyAxIDEgMS0xdjRIM2wxLTEtMS0xLTMgMyAzIDMgMS0xLTEtMWg0djRsLTEtMS0xIDEgMyAzIDMtMy0xLTEtMSAxVjloNGwtMSAxIDEgMSAzLTN6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctaGlkZVxcXCI+PHBhdGggY2xhc3M9XFxcInN0MVxcXCIgZD1cXFwiTTEyLjc5IDQuMkwxNiAxbC0xLTEtMy4zMiAzLjMyQzEwLjU3IDIuNTUgOS4zMiAyIDggMiAzLjYzIDIgMCA3Ljk3IDAgNy45N3MxLjI3IDIuMSAzLjIxIDMuODJsLTMuMjMgMy4yMy45OC45OCAzLjM1LTMuMzRDNS40MSAxMy40NCA2LjY3IDE0IDggMTRjNC4zNyAwIDgtNiA4LTZzLTEuMjctMi4wOS0zLjIxLTMuOHpNMiA3Ljk3YzEuMDctMS40NyAzLjYxLTQgNi00IC44IDAgMS42LjI3IDIuMzUuNjhsLS43OC43OGMtLjQ2LS4yOS0uOTktLjQ2LTEuNTctLjQ2LTEuNjYgMC0zIDEuMzQtMyAzIDAgLjU4LjE3IDEuMTEuNDYgMS41N2wtLjk3Ljk3QTEzLjM4IDEzLjM4IDAgMCAxIDIgNy45N3ptNiA0Yy0uOCAwLTEuNTktLjI3LTIuMzMtLjY3bC43OC0uNzdjLjQ1LjI3Ljk4LjQ0IDEuNTUuNDQgMS42NiAwIDMtMS4zNCAzLTMgMC0uNTctLjE3LTEuMDktLjQ0LTEuNTVsLjk4LS45OGMxLjExLjg3IDIuMDEgMS45MSAyLjQ2IDIuNTItMS4wNyAxLjQ4LTMuNjEgNC4wMS02IDQuMDF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXByaXZhdGVcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCI0XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCA4Yy0zLjMxIDAtNiAyLjczLTYgNC42N1M1LjI3IDE1IDggMTVzNi0uNCA2LTIuMzNTMTEuMzEgOCA4IDh6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXB1YmxpY1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMCA1YzAgLjM0LS4wNi42Ny0uMTQuOTkuMDUgMCAuMDkuMDEuMTQuMDEgMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTNDOC45NyAwIDguMDcuNTIgNy41MyAxLjMgOC45OCAxLjkxIDEwIDMuMzMgMTAgNXpNNiA5Yy0zLjMxIDAtNiAyLjczLTYgNC42N1MzLjI3IDE2IDYgMTZzNi0uNCA2LTIuMzNTOS4zMSA5IDYgOXpNMTAgN2MtLjE5IDAtLjM4LjAxLS41Ny4wM2E0LjE0IDQuMTQgMCAwIDEtMS4zNyAxLjM5YzMgLjgzIDUuMjMgMy4zMSA1LjQyIDUuMjggMS40NC0uMzEgMi41Mi0uOTIgMi41Mi0yLjAzQzE2IDkuNzQgMTMuMzEgNyAxMCA3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1zb3J0aW5nXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCAzbDIgMiAxLTEtMy0zLTMgMyAxIDF6TTggMTNsLTItMi0xIDEgMyAzIDMtMy0xLTF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PC9zdmc+XCI7IiwiZXhwb3J0ICogZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuLy9sb2NhbGl6YXRpb25cbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mYXJzaVwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZyZW5jaFwiO1xuXG4vL2V4dGVuc2lvbnNcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2NvbHVtbmV4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2RldGFpbHNleHRlbnNpb25zXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuLi90YWJsZXMvZGF0YXRhYmxlc1wiO1xuZXhwb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4uL3RhYmxlcy9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9uc1wiO1xuZXhwb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHMvaW5kZXhcIjtcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcbi8vaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJNYWtlIGNvbHVtbiBwdWJsaWNcIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICBmaWx0ZXJQbGFjZWhvbGRlcjogXCJTZWFyY2guLi5cIixcbiAgcmVtb3ZlUm93czogXCJSZW1vdmUgcm93c1wiLFxuICBzaG93TGFiZWw6IFwiU2hvd1wiLFxuICBlbnRyaWVzTGFiZWw6IFwiZW50cmllc1wiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcbiAgc2hvd0J1dHRvbjogXCJTaG93XCIsXG4gIHJlc2V0RmlsdGVyOiBcIlJlc2V0IEZpbHRlclwiLFxuICBjaGFuZ2VMb2NhbGU6IFwiQ2hhbmdlIExvY2FsZVwiLFxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0XCIsXG4gIGFzY09yZGVyOiBcIkFzY2VuZGluZ1wiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJPdGhlciBpdGVtcyBhbmQgY29tbWVudHNcIixcbn07XG5cbi8vVW5jb21tZW50IHRoZXNlIHR3byBsaW5lcyBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGUuIFlvdSBzaG91bGQgcmVwbGFjZSBcImVuXCIgYW5kIGVuU3RyaW5ncyB3aXRoIHlvdXIgbG9jYWxlIChcImZyXCIsIFwiZGVcIiBhbmQgc28gb24pIGFuZCB5b3VyIHZhcmlhYmxlLlxuLy9sb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4vL2xvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJFbmdsaXNoXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGZhcnNpU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwi2q/YsdmI2Ycg2KjZhtiv24wg2KjYp1wiLFxuICB1bmdyb3VwQnV0dG9uOiBcItit2LDZgSDar9ix2YjZh1wiLFxuICBzZWxlY3RCdXR0b246IFwi2KfZhtiq2K7Yp9ioXCIsXG4gIGhpZGVDb2x1bW46IFwi2YXYrtmB24wg2qnYsdiv2YYg2LPYqtmI2YZcIixcbiAgc2hvd0NvbHVtbjogXCLZhtmF2KfbjNi0INiz2KrZiNmGXCIsXG4gIG1vdmVUb0RldGFpbDogXCLYp9mG2KrZgtin2YQg2KjZhyDYrNiy2KbbjNin2KpcIixcbiAgc2hvd0FzQ29sdW1uOiBcItmG2YXYp9uM2LQg2KjZhyDYudmG2YjYp9mGINiz2KrZiNmGXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCLZhdiq2YjZhiDYr9ixINis2K/ZiNmEXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcItin2KjYsSDaqdmE2YXYp9iqXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwi2YXbjNmE2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfcGllOiBcItiv2KfYqNix2Ycg2KfbjChwaWUpXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcItm+2LHYp9qp2YbYr9qv24woU2NhdHRlcilcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIti52YLYsdio2Ycg2KfbjFwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcItmF2K7ZgduMXCIsXG4gIHJlc2V0RmlsdGVyOiBcItio2KfYstmG2LTYp9mG24wg2YHbjNmE2KrYsdmH2KdcIixcbiAgY2xlYXJCdXR0b246IFwi2b7Yp9qpINqp2LHYr9mGXCIsXG4gIGFkZEVsZW1lbnQ6IFwi2KfZhtiq2K7Yp9ioINiz2YjYp9mEINio2LHYp9uMINmG2YXYp9uM2LQuLi5cIlxufTtcblxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmYVwiXSA9IGZhcnNpU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZhXCJdID0gXCJGYXJzaShQZXJzaWFuKVwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCB2YXIgZnJlbmNoU3RyaW5ncyA9IHtcclxuICAgIGdyb3VwQnV0dG9uOiBcIkdyb3VwZXJcIixcclxuICAgIHVuZ3JvdXBCdXR0b246IFwiRGlzc29jaWVyXCIsXHJcbiAgICBzZWxlY3RCdXR0b246IFwiU8OpbGVjdGlvbm5lclwiLFxyXG4gICAgaGlkZUNvbHVtbjogXCJNYXNxdWVyIGNvbG9ubmVcIixcclxuICAgIHNob3dDb2x1bW46IFwiQWZmaWNoZXIgY29sb25uZVwiLFxyXG4gICAgbWFrZVByaXZhdGVDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHJpdsOpXCIsXHJcbiAgICBtYWtlUHVibGljQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHB1YmxpY1wiLFxyXG4gICAgbW92ZVRvRGV0YWlsOiBcIkTDqXBsYWNlciB2ZXJzIGTDqXRhaWxzXCIsXHJcbiAgICBzaG93QXNDb2x1bW46IFwiQWZmaWNoZXIgZW4gY29sb25uZVwiLFxyXG4gICAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRlcyBlbiB0YWJsZVwiLFxyXG4gICAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiTnVhZ2VzIGRlIG1vdHNcIixcclxuICAgIGNoYXJ0VHlwZV9iYXI6IFwiQmFycmVzXCIsXHJcbiAgICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJCYXJyZXMgZW1waWzDqWVzXCIsXHJcbiAgICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiQW5uZWF1XCIsXHJcbiAgICBjaGFydFR5cGVfcGllOiBcIlNlY3RldXJzXCIsXHJcbiAgICBjaGFydFR5cGVfc2NhdHRlcjogXCJOdWFnZXMgZGUgcG9pbnRzXCIsXHJcbiAgICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcclxuICAgIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGVzXCIsXHJcbiAgICBoaWRlQnV0dG9uOiBcIk1hc3F1ZXJcIixcclxuICAgIHJlc2V0RmlsdGVyOiBcIlJhZnJhaWNoaXIgRmlsdHJlc1wiLFxyXG4gICAgY2xlYXJCdXR0b246IFwiUmFmcmFpY2hpclwiLFxyXG4gICAgYWRkRWxlbWVudDogXCJDaG9pc2lyIGxhIHF1ZXN0aW9uIMOgIGFmZmljaGVyLi4uXCIsXHJcbiAgICBkZWZhdWx0T3JkZXI6IFwiRGVmYXV0XCIsXHJcbiAgICBhc2NPcmRlcjogXCJBc2NlbmRhbnRcIixcclxuICAgIGRlc2NPcmRlcjogXCJEZXNjZW5kYW50XCIsXHJcbiAgICBzaG93TWlub3JDb2x1bW5zOiBcIkFmZmljaGVyIGxlcyBjb2xvbm5lcyBtaW5ldXJlc1wiXHJcbn07XHJcblxyXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZyXCJdID0gZnJlbmNoU3RyaW5ncztcclxubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZnJcIl0gPSBcIkZyZW5jaFwiOyIsImltcG9ydCB7IGVuZ2xpc2hTdHJpbmdzIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uL2VuZ2xpc2hcIjtcblxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XG4gIGN1cnJlbnRMb2NhbGVWYWx1ZTogXCJcIixcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXG4gIGxvY2FsZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBsb2NhbGVOYW1lczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxuICBnZXQgY3VycmVudExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPT09IHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlXG4gICAgICA/IFwiXCJcbiAgICAgIDogdGhpcy5jdXJyZW50TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlXG4gICAgICA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIGlmICghbG9jIHx8ICFsb2Nbc3RyTmFtZV0pIGxvYyA9IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIHZhciByZXN1bHQgPSBsb2Nbc3RyTmFtZV07XG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICByZXMucHVzaChcIlwiKTtcbiAgICBpZiAodGhpcy5zdXBwb3J0ZWRMb2NhbGVzICYmIHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5zb3J0KCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XG4iLCJleHBvcnQgZW51bSBDb2x1bW5WaXNpYmlsaXR5IHtcbiAgVmlzaWJsZSxcbiAgSW52aXNpYmxlLFxuICBQdWJsaWNJbnZpc2libGUsXG59XG5leHBvcnQgZW51bSBRdWVzdGlvbkxvY2F0aW9uIHtcbiAgQ29sdW1uLFxuICBSb3csXG59XG5leHBvcnQgZW51bSBDb2x1bW5EYXRhVHlwZSB7XG4gIFRleHQsXG4gIEZpbGVMaW5rLFxuICBJbWFnZSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGRhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcbiAgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eTtcbiAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3RhdGUge1xuICBsb2NhbGU6IHN0cmluZztcbiAgZWxlbWVudHM6IElUYWJsZUNvbHVtbltdO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgVGFibGUsIFRhYmxlUm93IH0gZnJvbSBcIi4vdGFibGVcIjtcbmltcG9ydCB7IFN1cnZleU1vZGVsLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uLCBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5pbXBvcnQgXCIuL2RhdGF0YWJsZXMuc2Nzc1wiO1xuXG5pZiAoISFkb2N1bWVudCkge1xuICB2YXIgc3ZnVGVtcGxhdGUgPSByZXF1aXJlKFwiaHRtbC1sb2FkZXI/aW50ZXJwb2xhdGUhdmFsLWxvYWRlciEuLi9zdmdidW5kbGUuaHRtbFwiKTtcbiAgdmFyIHRlbXBsYXRlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcGxhdGVIb2xkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0ZW1wbGF0ZUhvbGRlci5pbm5lckhUTUwgPSBzdmdUZW1wbGF0ZTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUhvbGRlcik7XG59XG5cbnZhciBqUXVlcnkgPSAoPGFueT53aW5kb3cpW1wialF1ZXJ5XCJdO1xuXG5pbnRlcmZhY2UgRGF0YVRhYmxlc09wdGlvbnMge1xuICBidXR0b25zOiBib29sZWFuIHwgc3RyaW5nW10gfCBhbnlbXSB8IGFueTtcblxuICBkb206IHN0cmluZztcblxuICBvcmRlckZpeGVkOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHwgQXJyYXk8QXJyYXk8bnVtYmVyIHwgc3RyaW5nPj4gfCBvYmplY3Q7XG5cbiAgcm93R3JvdXA6IGJvb2xlYW4gfCBhbnk7XG5cbiAgaGVhZGVyQ2FsbGJhY2s6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZXMgZXh0ZW5kcyBUYWJsZSB7XG4gIHB1YmxpYyBkYXRhdGFibGVBcGk6IGFueTtcblxuICBwdWJsaWMgY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBpcyBmaXJlZCBjb2x1bW5zIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gY2hhbmdlZC5cbiAgICogPGJyLz4gc2VuZGVyIHRoZSBkYXRhdGFibGVzIGFkYXB0ZXJcbiAgICogPGJyLz4gb3B0aW9ucy5zdXJ2ZXkgY3VycmVudCBzdXJ2ZXlcbiAgICogQHNlZSBnZXRDb2x1bW5zXG4gICAqL1xuICBwdWJsaWMgb25Db2x1bW5zUmVvcmRlcjogRXZlbnQ8XG4gICAgKHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgc3RhdGljIGluaXRKUXVlcnkoJDogYW55KSB7XG4gICAgalF1ZXJ5ID0gJDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgZGF0YTogQXJyYXk8T2JqZWN0PixcbiAgICBvcHRpb25zOiBEYXRhVGFibGVzT3B0aW9ucyxcbiAgICBfY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPiA9IFtdLFxuICAgIGlzVHJ1c3RlZEFjY2VzcyA9IGZhbHNlXG4gICkge1xuICAgIHN1cGVyKHN1cnZleSwgZGF0YSwgb3B0aW9ucywgX2NvbHVtbnMsIGlzVHJ1c3RlZEFjY2Vzcyk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAoIXRoaXMucmVuZGVyUmVzdWx0KSByZXR1cm47XG4gICAgY29uc3QgdGFibGVOb2RlID0gdGhpcy5yZW5kZXJSZXN1bHQuY2hpbGRyZW5bMF07XG4gICAgaWYgKGpRdWVyeS5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUodGFibGVOb2RlKSkge1xuICAgICAgalF1ZXJ5KHRhYmxlTm9kZSkuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmRhdGF0YWJsZUFwaSA9IHVuZGVmaW5lZDtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcsIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpIHtcbiAgICBzdXBlci5zZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWUsIHZpc2liaWxpdHkpO1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKS52aXNpYmxlKCFpc0ludmlzaWJsZSk7XG4gICAgdmFyIGlzSW52aXNpYmxlID0gdmlzaWJpbGl0eSA9PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgc3VwZXIuc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZSwgbG9jYXRpb24pO1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sdW1uTmFtZSArIFwiOm5hbWVcIik7XG4gICAgdmFyIGlzQ29sdW1uTG9jYXRpb24gPSBsb2NhdGlvbiA9PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbjtcbiAgICBjb2x1bW4udmlzaWJsZShpc0NvbHVtbkxvY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkuc2VhcmNoKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xuICAgIGlmIChjb2x1bW4uc2VhcmNoKCkgIT09IHZhbHVlKSB7XG4gICAgICBjb2x1bW4uc2VhcmNoKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xuICAgIGNvbHVtbi5vcmRlcihkaXJlY3Rpb24pLmRyYXcoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRQYWdlU2l6ZSh2YWx1ZSk7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkucGFnZS5sZW4odmFsdWUpLmRyYXcoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VOdW1iZXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHN1cGVyLnNldFBhZ2VOdW1iZXIodmFsdWUpO1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLnBhZ2UodmFsdWUpLmRyYXcoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VOdW1iZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhdGFibGVBcGkucGFnZSgpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0YXJnZXROb2RlLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZSBzYS1kYXRhdGFibGVzXCI7XG4gICAgdGFyZ2V0Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgdGFibGVOb2RlID0gPEhUTUxUYWJsZUVsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIFwiXCIpXG4gICAgKTtcbiAgICB2YXIgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xuICAgIHZhciBjb2x1bW5zRGF0YTogYW55ID0gY29sdW1ucy5tYXAoKGM6IGFueSkgPT4gYy5kYXRhKTtcbiAgICBjb25zdCBkdEJ1dHRvbkNsYXNzID1cbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1zbWFsbCBzYS10YWJsZV9fYnRuLS1ncmF5XCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoXG4gICAgICB0cnVlLFxuICAgICAge1xuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgeyBleHRlbmQ6IFwiY29weVwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgICB7IGV4dGVuZDogXCJjc3ZcIiwgY2xhc3NOYW1lOiBkdEJ1dHRvbkNsYXNzIH0sXG4gICAgICAgICAgeyBleHRlbmQ6IFwicHJpbnRcIiwgY2xhc3NOYW1lOiBkdEJ1dHRvbkNsYXNzIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGRvbTogJ0I8XCJzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvbnNcIj5wcnRpcCcsXG4gICAgICAgIC8vIG9yZGVyaW5nOiBmYWxzZSxcbiAgICAgICAgZGF0YTogdGhpcy50YWJsZURhdGEsXG4gICAgICAgIHBhZ2VMZW5ndGg6IDUsXG4gICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICBjb2xSZW9yZGVyOiB7XG4gICAgICAgICAgZml4ZWRDb2x1bW5zTGVmdDogMSxcbiAgICAgICAgICByZWFsdGltZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8vb3JkZXJGaXhlZDogW1sxLCBcImFzY1wiXV0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgc1NlYXJjaDogXCIgXCIsXG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgICAgc0xlbmd0aE1lbnU6IFwiU2hvdyBfTUVOVV8gZW50cmllc1wiLFxuICAgICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgICBwcmV2aW91czogXCIgXCIsXG4gICAgICAgICAgICBuZXh0OiBcIiBcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IFwiYXBpXCIsXG4gICAgICAgIGhlYWRlckNhbGxiYWNrOiAoXG4gICAgICAgICAgdGhlYWQ6IGFueSxcbiAgICAgICAgICBkYXRhOiBhbnksXG4gICAgICAgICAgc3RhcnQ6IGFueSxcbiAgICAgICAgICBlbmQ6IGFueSxcbiAgICAgICAgICBkaXNwbGF5OiBhbnlcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgdmFyIGRhdGF0YWJsZUFwaSA9IGpRdWVyeSh0YWJsZU5vZGUpLmRhdGFUYWJsZSgpLmFwaSgpO1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBkYXRhdGFibGVBcGlcbiAgICAgICAgICAgIC5jb2x1bW5zKClcbiAgICAgICAgICAgIC5lcSgwKVxuICAgICAgICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgdmFyICR0aE5vZGUgPSBqUXVlcnkoZGF0YXRhYmxlQXBpLmNvbHVtbnMoaW5kZXgpLmhlYWRlcigpKTtcbiAgICAgICAgICAgICAgJHRoTm9kZS51bmJpbmQoXCJjbGljay5EVFwiKTtcbiAgICAgICAgICAgICAgaWYgKCEhY29sdW1uc0RhdGFbaW5kZXhdICYmICR0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwic2EtdGFibGVfX2FjdGlvbi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2VsZi5leHRlbnNpb25zLnJlbmRlcihjb250YWluZXIsIFwiY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbnNEYXRhW2luZGV4XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICR0aE5vZGUucHJlcGVuZChjb250YWluZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgKTtcblxuICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcbiAgICB0YWJsZU5vZGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX190YWJsZSBkaXNwbGF5IHJlc3BvbnNpdmUgZGF0YVRhYmxlXCI7XG5cbiAgICBjb25zdCBkYXRhdGFibGVBcGlSZWYgPSAodGhpcy5kYXRhdGFibGVBcGkgPSBqUXVlcnkodGFibGVOb2RlKS5EYXRhVGFibGUoXG4gICAgICBvcHRpb25zXG4gICAgKSk7XG4gICAgdmFyIGV4dGVuc2lvbnNDb250YWluZXIgPSBqUXVlcnkoXCJkaXYuc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25zXCIpWzBdO1xuXG4gICAgLy8gdGhpcy5vblRhYmxlVG9vbHNDcmVhdGVkLmZpcmUodGhpcywgeyBleHRlbnNpb25zOiBleHRlbnNpb25zIH0pO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIoZXh0ZW5zaW9uc0NvbnRhaW5lciwgXCJoZWFkZXJcIik7XG5cbiAgICBkYXRhdGFibGVBcGlSZWYucGFnZShzZWxmLmN1cnJlbnRQYWdlTnVtYmVyKTtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5yb3dHcm91cCgpLmVuYWJsZShmYWxzZSkuZHJhdyhmYWxzZSk7XG5cbiAgICBkYXRhdGFibGVBcGlSZWYub24oXG4gICAgICBcImNvbHVtbi1yZW9yZGVyXCIsXG4gICAgICAoZTogYW55LCBzZXR0aW5nczogYW55LCBkZXRhaWxzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5tb3ZlQ29sdW1uKGRldGFpbHMuZnJvbSAtIDEsIGRldGFpbHMudG8gLSAxKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgICAgICB0aGlzLm9uQ29sdW1uc1Jlb3JkZXIuZmlyZSh0aGlzLCB7IGNvbHVtbnM6IHRoaXMuY29sdW1ucyB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZGF0YXRhYmxlQXBpUmVmXG4gICAgICAucm93cygpXG4gICAgICAuZXEoMClcbiAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBkYXRhdGFibGVBcGlSZWYucm93KGluZGV4KTtcbiAgICAgICAgdmFyIGRldGFpbHNUciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgdmFyIGRldGFpbHNUZCA9IDxIVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQ+KFxuICAgICAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNhLWRhdGF0YWJsZXNfX2RldGFpbHMtY29udGFpbmVyXCIpXG4gICAgICAgICk7XG4gICAgICAgIGRldGFpbHNUci5hcHBlbmRDaGlsZChkZXRhaWxzVGQpO1xuICAgICAgICB2YXIgcm93RWxlbWVudCA9IHJvdy5ub2RlKCk7XG4gICAgICAgIHZhciBmaXJzdENlbGwgPSByb3cuY2VsbChyb3cuaW5kZXgoKSwgMCkubm9kZSgpO1xuICAgICAgICB2YXIgdGFibGVSb3cgPSBuZXcgRGF0YXRhYmxlc1Jvdyh0aGlzLCBmaXJzdENlbGwsIGRldGFpbHNUZCwgcm93KTtcbiAgICAgICAgdGFibGVSb3cub25Ub2dnbGVEZXRhaWxzLmFkZCgoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgZGV0YWlsc1RkLmNvbFNwYW4gPSByb3dFbGVtZW50LmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICAgICAgcm93RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgZGV0YWlsc1RyLFxuICAgICAgICAgICAgICByb3dFbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoISFkZXRhaWxzVHIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICBkZXRhaWxzVHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkZXRhaWxzVHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Jvd3MucHVzaCh0YWJsZVJvdyk7XG4gICAgICAgIHRhYmxlUm93LnJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgZGF0YXRhYmxlQXBpUmVmLmRyYXcoZmFsc2UpO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zKCk6IEFycmF5PE9iamVjdD4ge1xuICAgIGNvbnN0IGNvbHVtbnM6IGFueSA9IHRoaXMuZ2V0QXZhaWxhYmxlQ29sdW1ucygpLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShjb2x1bW4ubmFtZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgZGF0YTogY29sdW1uLm5hbWUsXG4gICAgICAgIHNUaXRsZTogKHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnRpdGxlKSB8fCBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgIHZpc2libGU6IHRoaXMuaXNDb2x1bW5WaXNpYmxlKGNvbHVtbiksXG4gICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXG4gICAgICAgIG1SZW5kZXI6IChfZGF0YTogb2JqZWN0LCBfdHlwZTogc3RyaW5nLCByb3c6IGFueSkgPT4ge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHJvd1tjb2x1bW4ubmFtZV07XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBqUXVlcnkoXCI8ZGl2PlwiKS50ZXh0KHZhbHVlKS5odG1sKClcbiAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIGRlZmF1bHRDb250ZW50OiBcIlwiLFxuICAgICAgfSxcbiAgICBdLmNvbmNhdChjb2x1bW5zKTtcbiAgfVxuXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zLmFkanVzdCgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhdGFibGVzUm93IGV4dGVuZHMgVGFibGVSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByb3RlY3RlZCBleHRlbnNpb25zQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfaW5uZXJSb3c6IGFueVxuICApIHtcbiAgICBzdXBlcih0YWJsZSwgZXh0ZW5zaW9uc0NvbnRhaW5lciwgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgdGhpcy5yb3dFbGVtZW50ID0gX2lubmVyUm93Lm5vZGUoKTtcbiAgICB0aGlzLnJvd0RhdGEgPSBfaW5uZXJSb3cuZGF0YSgpO1xuICAgIHRoaXMuX2lubmVyUm93ID0gdGhpcy5faW5uZXJSb3cucm93KHRoaXMucm93RWxlbWVudCk7XG4gICAgKDxEYXRhVGFibGVzPnRhYmxlKS5vbkNvbHVtbnNSZW9yZGVyLmFkZCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgcm93RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcm93RGF0YTogYW55O1xuXG4gIHB1YmxpYyBnZXQgaW5uZXJSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lubmVyUm93LnJvdyh0aGlzLnJvd0VsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnJvd0VsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YSgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucm93RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lclJvdy5pbmRleCgpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlubmVyUm93LnJlbW92ZSgpLmRyYXcoKTtcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgQ29sdW1uVmlzaWJpbGl0eSwgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJkcmFnXCIsXG4gIHZpc2libGVJbmRleDogMCxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2EtdGFibGVfX3N2Zy1idXR0b24gc2EtdGFibGVfX2RyYWctYnV0dG9uXCJcbiAgICApO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwiZHJhZ1wiKSk7XG4gICAgYnRuLm9ubW91c2Vkb3duID0gKGUpID0+IHtcbiAgICAgIHRhYmxlLmVuYWJsZUNvbHVtblJlb3JkZXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwic29ydFwiLFxuICB2aXNpYmxlSW5kZXg6IDEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgZGVzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImRlc2NPcmRlclwiKTtcbiAgICBjb25zdCBhc2NUaXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJhc2NPcmRlclwiKTtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwic29ydGluZ1wiKTtcbiAgICBidG4udGl0bGUgPSBcIlwiO1xuICAgIHZhciBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImFzY1wiKSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGRlc2NUaXRsZTtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkZXNjXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4udGl0bGUgPSBhc2NUaXRsZTtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICAgIH1cbiAgICAgIHRhYmxlLnNvcnRCeUNvbHVtbihvcHRpb25zLmNvbHVtbk5hbWUsIGRpcmVjdGlvbik7XG4gICAgfTtcbiAgICBidG4ub25kcmFnID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImhpZGVcIixcbiAgdmlzaWJsZUluZGV4OiAyLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJoaWRlXCIpO1xuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQ29sdW1uXCIpO1xuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eShvcHRpb25zLmNvbHVtbk5hbWUsIENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwibW92ZXRvZGV0YWlsc1wiLFxuICB2aXNpYmxlSW5kZXg6IDMsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwibW92ZXRvZGV0YWlsc1wiKTtcbiAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibW92ZVRvRGV0YWlsXCIpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihvcHRpb25zLmNvbHVtbk5hbWUsIFF1ZXN0aW9uTG9jYXRpb24uUm93KTtcbiAgICB9O1xuICAgIHJldHVybiBidXR0b247XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiZmlsdGVyXCIsXG4gIHZpc2libGVJbmRleDogNCxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICB2YXIgZWwgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcbiAgICAgIFwic2EtdGFibGVfX2ZpbHRlclwiLFxuICAgICAgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlclBsYWNlaG9sZGVyXCIpXG4gICAgKTtcbiAgICBlbC5vbmNsaWNrID0gKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZWwub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgdGFibGUuYXBwbHlDb2x1bW5GaWx0ZXIob3B0aW9ucy5jb2x1bW5OYW1lLCBlbC52YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwibWFrZXB1YmxpY1wiLFxuICB2aXNpYmxlSW5kZXg6IC0xLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbWFrZVByaXZhdGVTdmcgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwibWFrZXByaXZhdGVcIik7XG4gICAgY29uc3QgbWFrZVB1YmxpY1N2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHVibGljXCIpO1xuICAgIHZhciBjdXJyZW50VmlzaWJpbGl0eSA9IHRhYmxlLmdldENvbHVtblZpc2liaWxpdHkob3B0aW9ucy5jb2x1bW5OYW1lKTtcbiAgICB1cGRhdGVTdGF0ZShjdXJyZW50VmlzaWJpbGl0eSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKG1ha2VQcml2YXRlU3ZnKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVB1YmxpY1N2Zyk7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChjdXJyZW50VmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGUpIHtcbiAgICAgICAgY3VycmVudFZpc2liaWxpdHkgPSBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuUHVibGljSW52aXNpYmxlO1xuICAgICAgfVxuICAgICAgdGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eShvcHRpb25zLmNvbHVtbk5hbWUsIGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgICAgY29uc3QgaXNQcml2YXRlID0gdmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICBpZiAoaXNQcml2YXRlKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uIHNhLXRhYmxlX19zdmctYnV0dG9uLS1hY3RpdmVcIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQcml2YXRlQ29sdW1uXCIpO1xuICAgICAgICBtYWtlUHJpdmF0ZVN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIERldGFpbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgcm93OiBUYWJsZVJvdyxcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdmFyIGRldGFpbHNUYWJsZSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxuICAgICk7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUgPSBkZXRhaWxzVGFibGU7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGRldGFpbHNUYWJsZTogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBsb2NhdGlvbiA9IFwiZGV0YWlsc1wiO1xuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICB0aGlzLnRhYmxlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiBjb2x1bW4pXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgICAgICB2YXIgdGQxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHtcbiAgICAgICAgICBpbm5lckhUTUw6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0ZDIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldERhdGEoKVtjb2x1bW4ubmFtZV07XG4gICAgICAgIHZhciB0ZDMgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbihjb2x1bW4ubmFtZSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgIH0pO1xuICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7IGNvbFNwYW46IDMgfSk7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRoaXMudGFibGUpO1xuICAgIGV4dGVuc2lvbnMucmVuZGVyKHRkLCBcImRldGFpbHNcIiwgeyByb3c6IHRoaXMucm93IH0pO1xuICAgIGlmICh0ZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uID0gKGNvbHVtbk5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKSB9XG4gICAgKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbik7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGlmICghIXRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcbiAgICAgIFwic2EtdGFibGVfX2dsb2JhbC1maWx0ZXIgc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIixcbiAgICAgIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJQbGFjZWhvbGRlclwiKVxuICAgICk7XG4gICAgaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGFibGUuYXBwbHlGaWx0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJzaG93Y29sdW1uXCIsXG4gIHZpc2libGVJbmRleDogMixcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBkcm9wZG93biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNlbGVjdFwiLFxuICAgICAgXCJzYS10YWJsZV9fc2hvdy1jb2x1bW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRhYmxlLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAoY29sdW1uOiBhbnkpID0+IGNvbHVtbi52aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZVxuICAgICAgKTtcbiAgICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBkcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKSxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgIHZhciB0ZXh0ID0gY29sdW1uLmRpc3BsYXlOYW1lO1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAyMCkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgIHRpdGxlOiBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgICAgdmFsdWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyb3Bkb3duLm9uY2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF2YWwpIHJldHVybjtcbiAgICAgIHRhYmxlLnNldENvbHVtblZpc2liaWxpdHkodmFsLCBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHZhciBvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuYWRkKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG5cbiAgICB0aGlzLm9uRGVzdHJveSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLnJlbW92ZShvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIGRyb3Bkb3duO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3dlbnRyaWVzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGZ1bmN0aW9uIGdldEVudHJpZXNEcm9wZG93bih0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgICBjb25zdCBlbCA9IDxIVE1MU2VsZWN0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCIsIFwiMjVcIiwgXCI1MFwiLCBcIjc1XCIsIFwiMTAwXCJdO1xuICAgICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgdGV4dDogdmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgZWwudmFsdWUgPSBTdHJpbmcodGFibGUuZ2V0UGFnZVNpemUoKSk7XG5cbiAgICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0YWJsZS5zZXRQYWdlU2l6ZShOdW1iZXIoZWwudmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3JDb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXNcIlxuICAgICk7XG4gICAgY29uc3Qgc2hvd1NwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1yaWdodFwiLFxuICAgICAge1xuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLWxlZnRcIixcbiAgICAgIHtcbiAgICAgICAgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZW50cmllc0xhYmVsXCIpLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93U3Bhbik7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlKSk7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cmllc1NwYW4pO1xuICAgIHJldHVybiBzZWxlY3RvckNvbnRhaW5lcjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJyZW1vdmVyb3dzXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyZWVuIHNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uIFwiLFxuICAgICAgeyBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZW1vdmVSb3dzXCIpIH1cbiAgICApO1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGFibGUuZ2V0Q3JlYXRlZFJvd3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKHJvdy5nZXRJc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICByb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJjaGFuZ2Vsb2NhbGVcIixcbiAgdmlzaWJsZUluZGV4OiAxLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZSkge1xuICAgIHZhciBsb2NhbGVzID0gdGFibGUuZ2V0TG9jYWxlcygpO1xuICAgIGlmIChsb2NhbGVzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsID0gPEhUTUxTZWxlY3RFbGVtZW50PihcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLCB7fSlcbiAgICApO1xuICAgIHZhciBvcHRpb25zVmFsdWVzID0gW2xvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFuZ2VMb2NhbGVcIildLmNvbmNhdChcbiAgICAgIGxvY2FsZXNcbiAgICApO1xuICAgIG9wdGlvbnNWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIHRleHQ6IHZhbCxcbiAgICAgIH0pO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBlbC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLmxvY2FsZSA9IGVsLnZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIGVsO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwiZGV0YWlsc1wiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogKF90YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImRldGFpbFwiKTtcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd01pbm9yQ29sdW1uc1wiKTtcbiAgICBidG4uY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvcHRpb25zLnJvdy50b2dnbGVEZXRhaWxzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcInJvd1wiLFxuICBuYW1lOiBcInNlbGVjdFwiLFxuICB2aXNpYmxlSW5kZXg6IC0xLFxuICByZW5kZXI6IGZ1bmN0aW9uIChfdGFibGUsIG9wdCkge1xuICAgIHZhciByb3cgPSBvcHQucm93O1xuICAgIHZhciBjaGVja2JveCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImlucHV0XCIsXG4gICAgICBcInNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCIsXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSByb3cuZ2V0SXNTZWxlY3RlZCgpO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LnRvZ2dsZVNlbGVjdCgpO1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuXG5pbnRlcmZhY2UgSVRhYmxlRXh0ZW5zaW9uIHtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2aXNpYmxlSW5kZXg6IG51bWJlcjtcbiAgcmVuZGVyOiAodGFibGU6IFRhYmxlLCBvcHQ6IGFueSkgPT4gSFRNTEVsZW1lbnQ7XG4gIGRlc3Ryb3k/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVFeHRlbnNpb25zIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZTogVGFibGUpIHt9XG4gIHByaXZhdGUgc3RhdGljIGV4dGVuc2lvbnM6IHtcbiAgICBbbG9jYXRpb246IHN0cmluZ106IEFycmF5PElUYWJsZUV4dGVuc2lvbj47XG4gIH0gPSB7fTtcbiAgcHJpdmF0ZSByZW5kZXJlZEV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gPSBbXTtcblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LCBsb2NhdGlvbjogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tsb2NhdGlvbl07XG4gICAgaWYgKCEhZXh0ZW5zaW9ucykge1xuICAgICAgZXh0ZW5zaW9ucyA9IHRoaXMuc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9ucyk7XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgICBpZiAoISFleHRlbnNpb24ucmVuZGVyKSB7XG4gICAgICAgICAgdmFyIGFjdGlvbiA9IGV4dGVuc2lvbi5yZW5kZXIodGhpcy50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKCEhYWN0aW9uKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5mb3JFYWNoKChleHRlbnNpb24pID0+IHtcbiAgICAgIGlmICghIWV4dGVuc2lvbi5kZXN0cm95KSBleHRlbnNpb24uZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zID0gW107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXh0ZW5zaW9uKGV4dGVuc2lvbjogSVRhYmxlRXh0ZW5zaW9uKSB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXSlcbiAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dID0gW107XG4gICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0ucHVzaChleHRlbnNpb24pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmaW5kRXh0ZW5zaW9uKFxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nXG4gICk6IElUYWJsZUV4dGVuc2lvbiB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbbG9jYXRpb25dKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgZXh0ZW5zaW9uID0gdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXS5maWx0ZXIoZnVuY3Rpb24gKFxuICAgICAgZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb25cbiAgICApIHtcbiAgICAgIHJldHVybiBleHRlbnNpb24ubmFtZSA9PSBhY3Rpb25OYW1lO1xuICAgIH0pWzBdO1xuICAgIHJldHVybiBleHRlbnNpb24gfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9uczogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRlbnNpb25zKSkgcmV0dXJuO1xuICAgIHJldHVybiBbXVxuICAgICAgLmNvbmNhdChleHRlbnNpb25zLmZpbHRlcigoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24udmlzaWJsZUluZGV4ID49IDApKVxuICAgICAgLnNvcnQoKGZpcnN0RXh0ZW5zaW9uLCBzZWNvbmRFeHRlbnNpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGZpcnN0RXh0ZW5zaW9uLnZpc2libGVJbmRleCAtIHNlY29uZEV4dGVuc2lvbi52aXNpYmxlSW5kZXg7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHtcbiAgQ29sdW1uVmlzaWJpbGl0eSxcbiAgUXVlc3Rpb25Mb2NhdGlvbixcbiAgQ29sdW1uRGF0YVR5cGUsXG4gIElUYWJsZVN0YXRlLFxuICBJVGFibGVDb2x1bW4sXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGUge1xuICBwcm90ZWN0ZWQgdGFibGVEYXRhOiBhbnk7XG4gIHByb3RlY3RlZCBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIHByb3RlY3RlZCBvcHRpb25zOiBhbnksXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW10sXG4gICAgcHVibGljIGlzVHJ1c3RlZEFjY2VzczogYm9vbGVhblxuICApIHtcbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFibGVEYXRhKGRhdGEpO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdGhpcy5zdXJ2ZXkubG9jYWxlO1xuXG4gICAgaWYgKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuXG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0aGlzKTtcbiAgfVxuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2l6ZTogbnVtYmVyID0gNTtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfcm93czogVGFibGVSb3dbXSA9IFtdO1xuICBwcm90ZWN0ZWQgaXNDb2x1bW5SZW9yZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uUm93UmVtb3ZlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICByb3c6IFRhYmxlUm93XG4gICkgPT4gSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3Qgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHB1YmxpYyBlbmFibGVDb2x1bW5SZW9yZGVyKCkge1xuICAgIHRoaXMuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZUNvbHVtblJlb3JkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlU2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50UGFnZVNpemUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDcmVhdGVkUm93cygpOiBUYWJsZVJvd1tdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3Jvd3MpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ3JlYXRlZFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcm93cyA9IFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpLm1hcCgocXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkYXRhVHlwZTpcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXG4gICAgICAgICAgICA/IENvbHVtbkRhdGFUeXBlLlRleHRcbiAgICAgICAgICAgIDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6XG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIlxuICAgICAgICAgICAgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGVcbiAgICAgICAgICAgIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbixcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGlzQ29sdW1uVmlzaWJsZShjb2x1bW46IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICBjb2x1bW4ubG9jYXRpb24gPT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4gJiZcbiAgICAgIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNWaXNpYmxlID0gKHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlKSB8fFxuICAgICAgKCF0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUpXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgaXNBdmFpbGFibGUgPSAodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzVHJ1c3RlZEFjY2VzcyB8fCB2aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZVxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIGdldEF2YWlsYWJsZUNvbHVtbnMgPSAoKTogQXJyYXk8SVRhYmxlQ29sdW1uPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0F2YWlsYWJsZShjb2x1bW4udmlzaWJpbGl0eSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvbHVtbnMoY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPikge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gaXRlbVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi5kaXNwbGF5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID1cbiAgICAgICAgICB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQ29sdW1uKGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xuICAgIHZhciBkZWxldGVkQ29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGZyb20sIDEpO1xuICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKHRvLCAwLCBkZWxldGVkQ29sdW1uc1swXSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcbiAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWVcbiAgICApWzBdLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuZmlyZSh0aGlzLCB7XG4gICAgICBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLFxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgICBjb2x1bW4udmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG4gICAgdGhpcy5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBjb2x1bW5WaXNpYmlsaXR5OiB2aXNpYmlsaXR5LFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZyk6IENvbHVtblZpc2liaWxpdHkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgICByZXR1cm4gY29sdW1uLnZpc2liaWxpdHk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlUm93KHJvdzogVGFibGVSb3cpOiB2b2lkIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9yb3dzLmluZGV4T2Yocm93KTtcbiAgICB0aGlzLl9yb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5vblJvd1JlbW92ZWQuZmlyZSh0aGlzLCB7IHJvdzogcm93IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBsb2NhbGUgb2YgdGhlIHRhYmxlLlxuICAgKiBJZiBsb2NhbGVzIG1vcmUgdGhhbiBvbmUsIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gZHJvcGRvd24gd2lsbCBiZSBhZGRlZCBpbiB0aGUgdG9vbGJhclxuICAgKi9cbiAgcHVibGljIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbG9jYWxlIGZvciB0YWJsZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgbG9jYWxlKG5ld0xvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdXJ2ZXkubG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuc3VydmV5LmdldFVzZWRMb2NhbGVzKCkpO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2goaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuZ2V0UGFnZU51bWJlcigpO1xuICAgICAgaWYgKGhhcmQpIHtcbiAgICAgICAgdGhpcy5pbml0VGFibGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0O1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJlbmRlcih0YXJnZXROb2RlKTtcbiAgICAgIHRoaXMuc2V0UGFnZVNpemUodGhpcy5jdXJyZW50UGFnZVNpemUpO1xuICAgICAgdGhpcy5zZXRQYWdlTnVtYmVyKHRoaXMuY3VycmVudFBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJDcmVhdGVkUm93cygpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnJlbmRlclJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIGdldHRlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogSVRhYmxlU3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxuICAgICAgZWxlbWVudHM6IFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIHNldHRlci5cbiAgICovXG4gIHB1YmxpYyBzZXQgc3RhdGUobmV3U3RhdGU6IElUYWJsZVN0YXRlKSB7XG4gICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSBuZXdTdGF0ZS5sb2NhbGU7XG4gICAgdGhpcy5fY29sdW1ucyA9IG5ld1N0YXRlLmVsZW1lbnRzO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuICAvKipcbiAgICogRmlyZXMgd2hlbiB2aXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIGNoYW5nZWQuXG4gICAqL1xuICBwdWJsaWMgb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+KCk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyh0YWJsZSwgdGhpcywgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0YWJsZSk7XG4gICAgdGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmFkZCh0aGlzLm9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG4gIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICBwdWJsaWMgZXh0ZW5zaW9uczogVGFibGVFeHRlbnNpb25zO1xuICBwcml2YXRlIGRldGFpbGVkUm93Q2xhc3MgPSBcInNhLXRhYmxlX19kZXRhaWwtcm93XCI7XG4gIHByaXZhdGUgaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgcHVibGljIG9uVG9nZ2xlRGV0YWlsczogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0RGF0YSgpOiBhbnk7XG4gIHB1YmxpYyBhYnN0cmFjdCBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBpc1NlbGVjdGVkOiBib29sZWFuO1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgdGhpcy5leHRlbnNpb25zLnJlbmRlcih0aGlzLmV4dGVuc2lvbnNDb250YWluZXIsIFwicm93XCIsIHsgcm93OiB0aGlzIH0pO1xuICB9XG5cbiAgcHVibGljIG9wZW5EZXRhaWxzKCkge1xuICAgIHRoaXMuZGV0YWlscy5vcGVuKCk7XG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5kZXRhaWxlZFJvd0NsYXNzO1xuICAgIHRoaXMub25Ub2dnbGVEZXRhaWxzLmZpcmUodGhpcywgeyBpc0V4cGFuZGVkOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGV0YWlscygpIHtcbiAgICB0aGlzLmRldGFpbHMuY2xvc2UoKTtcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGV0YWlsZWRSb3dDbGFzcyk7XG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEZXRhaWxzKCkge1xuICAgIGlmICh0aGlzLmlzRGV0YWlsc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLmNsb3NlRGV0YWlscygpO1xuICAgIH0gZWxzZSB0aGlzLm9wZW5EZXRhaWxzKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNlbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSAhdGhpcy5pc1NlbGVjdGVkO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLnJlbW92ZVJvdyh0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Db2x1bW5Mb2NhdGlvbkNoYW5nZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICB0aGlzLmNsb3NlRGV0YWlscygpO1xuICB9O1xuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLnJlbW92ZShcbiAgICAgIHRoaXMub25Db2x1bW5Mb2NhdGlvbkNoYW5nZWRDYWxsYmFja1xuICAgICk7XG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgOiBkZXNjLFxuICAgIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZVxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbiIsImV4cG9ydCBjbGFzcyBEb2N1bWVudEhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTZWxlY3RvcihcclxuICAgIG9wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+LFxyXG4gICAgaXNTZWxlY3RlZDogKG9wdGlvbjogeyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkgPT4gYm9vbGVhbixcclxuICAgIGhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWRcclxuICApIHtcclxuICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VsZWN0V3JhcHBlci5jbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uX19zZWxlY3Qtd3JhcHBlclwiO1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uX19zZWxlY3RcIjtcclxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIGxldCBvcHRpb25FbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XHJcbiAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcclxuICAgICAgICB0ZXh0OiBvcHRpb24udGV4dCxcclxuICAgICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZChvcHRpb24pLFxyXG4gICAgICB9KTtcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxlY3Qub25jaGFuZ2UgPSBoYW5kbGVyO1xyXG4gICAgc2VsZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgcmV0dXJuIHNlbGVjdFdyYXBwZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJ1dHRvbihcclxuICAgIGhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWQsXHJcbiAgICB0ZXh0ID0gXCJcIixcclxuICAgIGNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uXCJcclxuICApIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIGNsYXNzTmFtZSwge1xyXG4gICAgICBpbm5lclRleHQ6IHRleHQsXHJcbiAgICAgIG9uY2xpY2s6IGhhbmRsZXIsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICB0YWdOYW1lOiBzdHJpbmcsXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyA9IFwiXCIsXHJcbiAgICBhdHRycz86IGFueVxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBpZiAoISFhdHRycykge1xyXG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgKDxhbnk+ZWwpW2tleV0gPSBhdHRyc1trZXldO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnRWxlbWVudChwYXRoOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2Z0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJzdmdcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJ1c2VcIlxyXG4gICAgKTtcclxuICAgIHVzZUVsZW0uc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgXCIjc2Etc3ZnLVwiICsgcGF0aFxyXG4gICAgKTtcclxuICAgIHN2Z0VsZW0uYXBwZW5kQ2hpbGQodXNlRWxlbSk7XHJcbiAgICByZXR1cm4gc3ZnRWxlbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnQnV0dG9uKHBhdGg6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IDxIVE1MQnV0dG9uRWxlbWVudD4oXHJcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiKVxyXG4gICAgKTtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHBhdGgpKTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlucHV0KFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgICBkZWZhdWx0VmFsdWUgPSBcIlwiXHJcbiAgKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSA8SFRNTElucHV0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImlucHV0XCIsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBydW5uaW5nSW5Ccm93c2VyOiB0eXBlb2Ygd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIixcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93RG9tUmVuZGVyaW5nKCkge1xyXG4gIHJldHVybiBvcHRpb25zLnJ1bm5pbmdJbkJyb3dzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHppcEFycmF5cyhmaXJzdDogYW55W10sIHNlY29uZDogYW55W10pOiBhbnlbXVtdIHtcclxuICAgIGxldCB6aXBBcnJheTogYW55W10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oZmlyc3QubGVuZ3RoLCBzZWNvbmQubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgIHppcEFycmF5W2ldID0gW2ZpcnN0W2ldLCBzZWNvbmRbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHppcEFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnppcEFycmF5cyhcclxuICAgIHppcEFycmF5OiBhbnlbXVtdXHJcbiAgKTogeyBmaXJzdDogYW55W107IHNlY29uZDogYW55W10gfSB7XHJcbiAgICBsZXQgdHdvQXJyYXlzOiBhbnkgPSB7IGZpcnN0OiBbXSwgc2Vjb25kOiBbXSB9O1xyXG4gICAgemlwQXJyYXkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgdHdvQXJyYXlzLmZpcnN0W2ldID0gdmFsdWVbMF07XHJcbiAgICAgIHR3b0FycmF5cy5zZWNvbmRbaV0gPSB2YWx1ZVsxXTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHR3b0FycmF5cztcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBzb3J0RGljdGlvbmFyeShcclxuICAgIGtleXM6IGFueVtdLFxyXG4gICAgdmFsdWVzOiBhbnlbXSxcclxuICAgIGRlc2M6IGJvb2xlYW5cclxuICApOiB7IGtleXM6IGFueVtdOyB2YWx1ZXM6IGFueVtdIH0ge1xyXG4gICAgbGV0IGRpY3Rpb25hcnkgPSB0aGlzLnppcEFycmF5cyhrZXlzLCB2YWx1ZXMpO1xyXG4gICAgbGV0IGNvbXBhcmF0b3IgPSAoYTogYW55W10sIGI6IGFueVtdLCBhc2M6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhWzFdIDwgYlsxXSA/IDEgOiBhWzFdID09IGJbMV0gPyAwIDogLTE7XHJcbiAgICAgIHJldHVybiBhc2MgPyByZXN1bHQgOiByZXN1bHQgKiAtMTtcclxuICAgIH07XHJcbiAgICBkaWN0aW9uYXJ5LnNvcnQoKGE6IGFueVtdLCBiOiBhbnlbXSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGVzYyA/IGNvbXBhcmF0b3IoYSwgYiwgZmFsc2UpIDogY29tcGFyYXRvcihhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGtleXNBbmRWYWx1ZXMgPSB0aGlzLnVuemlwQXJyYXlzKGRpY3Rpb25hcnkpO1xyXG4gICAgcmV0dXJuIHsga2V5czoga2V5c0FuZFZhbHVlcy5maXJzdCwgdmFsdWVzOiBrZXlzQW5kVmFsdWVzLnNlY29uZCB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAvIG1heFZhbHVlKSAqIDEwMDtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX187Il0sInNvdXJjZVJvb3QiOiIifQ==