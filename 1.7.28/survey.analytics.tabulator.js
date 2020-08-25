/*!
 * surveyjs - SurveyJS Analytics library v1.7.28
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
/*! exports provided: localization, surveyStrings, defaultOptions, Tabulator, TabulatorRow, TableExtensions, DocumentHelper */
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
/* harmony import */ var _tables_tabulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tables/tabulator */ "./src/tables/tabulator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_7__["defaultOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_7__["Tabulator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabulatorRow", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_7__["TabulatorRow"]; });

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
        this.onStateChanged.fire(this, this.state);
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
        this.getColumnByName(columnName).location = location;
        this.onColumnsLocationChanged.fire(this, {
            columnName: columnName,
            location: location,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.getColumnByName = function (columnName) {
        return this._columns.filter(function (column) { return column.name === columnName; })[0];
    };
    Table.prototype.setColumnVisibility = function (columnName, visibility) {
        var column = this.getColumnByName(columnName);
        column.visibility = visibility;
        this.onColumnsVisibilityChanged.fire(this, {
            columnName: columnName,
            columnVisibility: visibility,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.setColumnWidth = function (columnName, width) {
        var column = this.getColumnByName(columnName);
        column.width = width;
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
                pageSize: this.currentPageSize,
            };
        },
        /**
         * Vizualization panel state setter.
         */
        set: function (newState) {
            if (typeof newState.locale !== "undefined")
                _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = newState.locale;
            if (typeof newState.elements !== "undefined")
                this._columns = newState.elements;
            if (typeof newState.pageSize !== "undefined")
                this.currentPageSize = newState.pageSize;
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
            this.onPermissionsChangedCallback &&
                this.onPermissionsChangedCallback(this);
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
/*! exports provided: defaultOptions, Tabulator, TabulatorRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return Tabulator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabulatorRow", function() { return TabulatorRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _tabulator_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabulator.scss */ "./src/tables/tabulator.scss");
/* harmony import */ var _tabulator_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabulator_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");





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
    actionsColumnWidth: 60,
};
var Tabulator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Tabulator, _super);
    function Tabulator(survey, data, options, _columns, isTrustedAccess) {
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        var _this = _super.call(this, survey, data, options, _columns, isTrustedAccess) || this;
        _this.COLUMN_MIN_WIDTH = 155;
        _this.tabulatorTables = null;
        _this.tableContainer = null;
        _this.destroy = function () {
            _this.tabulatorTables.destroy();
            _super.prototype.destroy.call(_this);
        };
        _this.columnMovedCallback = function (column, columns) {
            var from = _this._columns.indexOf(_this.getColumnByName(column.getField()));
            var to = columns.indexOf(column) - 1;
            _this.moveColumn(from, to);
            _this.disableColumnReorder();
        };
        _this.columnResizedCallback = function (column) {
            _this.setColumnWidth(column.getField(), column.getWidth());
            _this.layout();
        };
        _this.rowFormatter = function (row) {
            var tableRow = new TabulatorRow(_this, row.getCells()[0].getElement(), row.getElement(), row);
            tableRow.onToggleDetails.add(function () {
                row.normalizeHeight();
                _this.layout();
            });
            tableRow.render();
            _this._rows.push(tableRow);
        };
        var self = _this;
        var patchedOptions = {};
        Object.assign(patchedOptions, defaultOptions, options);
        _this.options = patchedOptions;
        return _this;
    }
    Tabulator.prototype.render = function (targetNode) {
        targetNode.className += " sa-table sa-tabulator";
        targetNode.innerHTML = "";
        var columns = this.getColumns();
        var data = this.tableData;
        var header = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-tabulator__header");
        var paginationElement = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-tabulator__pagination-container");
        this.tableContainer = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        targetNode.appendChild(header);
        targetNode.appendChild(this.tableContainer);
        this.tabulatorTables = new TabulatorTables(this.tableContainer, {
            data: data,
            layout: "fitColumns",
            pagination: "local",
            paginationSize: this.currentPageSize,
            movableColumns: true,
            maxHeight: "100%",
            columns: columns,
            rowFormatter: this.rowFormatter,
            paginationButtonCount: this.options.paginationButtonCount,
            paginationElement: paginationElement,
            columnMoved: this.columnMovedCallback,
            columnResized: this.columnResizedCallback,
            tooltipsHeader: true,
            tooltips: function (cell) { return cell.getValue(); },
        });
        var extensionsContainer = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-table__header-extensions");
        header.appendChild(this.createDownloadsBar());
        header.appendChild(extensionsContainer);
        header.appendChild(paginationElement);
        this.extensions.render(extensionsContainer, "header");
        this.renderResult = targetNode;
    };
    Tabulator.prototype.createDownloadsBar = function () {
        var _this = this;
        var createDownloadButton = function (type, caption) {
            var btn = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--small sa-table__btn--gray", {
                innerHTML: caption,
                onclick: function () {
                    _this.download(type);
                },
            });
            return btn;
        };
        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-tabulator__downloads-bar");
        if (this.options.downloadOptions.xlsx.isVisible) {
            container.appendChild(createDownloadButton("xlsx", "Excel"));
        }
        if (this.options.downloadOptions.pdf.isVisible) {
            container.appendChild(createDownloadButton("pdf", "PDF"));
        }
        container.appendChild(createDownloadButton("csv", "CSV"));
        return container;
    };
    Tabulator.prototype.getTitleFormatter = function (cell, formatterParams, onRendered, columnName) {
        var _this = this;
        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        var title = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("span", "", {
            innerHTML: cell.getValue(),
        });
        var actions = this.getHeaderActions(columnName);
        container.appendChild(actions);
        container.appendChild(title);
        container.onmousedown = function (e) {
            if (!_this.isColumnReorderEnabled) {
                e.stopPropagation();
            }
            else {
                _this.disableColumnReorder();
            }
        };
        return container;
    };
    Tabulator.prototype.getHeaderActions = function (columnName) {
        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-table__action-container");
        this.extensions.render(container, "column", { columnName: columnName });
        return container;
    };
    Tabulator.prototype.getColumns = function () {
        var _this = this;
        var minColumnWidth = this.COLUMN_MIN_WIDTH > this.options.columnMinWidth
            ? this.COLUMN_MIN_WIDTH
            : this.options.columnMinWidth;
        var columns = this.getAvailableColumns().map(function (column, index) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                field: column.name,
                title: (question && question.title) || column.displayName,
                minWidth: minColumnWidth,
                width: column.width,
                widthShrink: !column.width ? 1 : 0,
                visible: _this.isColumnVisible(column),
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
            width: this.options.actionsColumnWidth,
        });
        return columns;
    };
    Tabulator.prototype.setColumnVisibility = function (columnName, visibility) {
        _super.prototype.setColumnVisibility.call(this, columnName, visibility);
        if (this.isRendered) {
            if (visibility == _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Invisible)
                this.tabulatorTables.hideColumn(columnName);
            else
                this.tabulatorTables.showColumn(columnName);
            this.layout();
        }
    };
    Tabulator.prototype.setColumnLocation = function (columnName, location) {
        _super.prototype.setColumnLocation.call(this, columnName, location);
        if (this.isRendered) {
            if (location == _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Row)
                this.tabulatorTables.hideColumn(columnName);
            else
                this.tabulatorTables.showColumn(columnName);
            this.layout();
        }
    };
    Tabulator.prototype.setColumnWidth = function (columnName, width) {
        _super.prototype.setColumnWidth.call(this, columnName, width);
        if (this.isRendered) {
            var definition = this.tabulatorTables
                .getColumn(columnName)
                .getDefinition();
            definition.width = width;
            definition.widthShrink = 0;
            this.layout();
        }
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
    Tabulator.prototype.getPageNumber = function () {
        if (!this.isRendered) {
            return 1;
        }
        return this.tabulatorTables.getPage();
    };
    Tabulator.prototype.setPageNumber = function (value) {
        _super.prototype.setPageNumber.call(this, value);
        if (this.isRendered) {
            this.tabulatorTables.setPage(value);
        }
    };
    Tabulator.prototype.setPageSize = function (value) {
        _super.prototype.setPageSize.call(this, value);
        if (this.isRendered) {
            this.tabulatorTables.setPageSize(value);
        }
    };
    Tabulator.prototype.download = function (type) {
        this.tabulatorTables.download(type, "results." + type, this.options.downloadOptions[type]);
    };
    Tabulator.prototype.layout = function (hard) {
        if (hard === void 0) { hard = false; }
        this.tabulatorTables.redraw(hard);
    };
    return Tabulator;
}(_table__WEBPACK_IMPORTED_MODULE_1__["Table"]));

var TabulatorRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TabulatorRow, _super);
    function TabulatorRow(table, extensionsContainer, detailsContainer, innerRow) {
        var _this = _super.call(this, table, extensionsContainer, detailsContainer) || this;
        _this.table = table;
        _this.extensionsContainer = extensionsContainer;
        _this.detailsContainer = detailsContainer;
        _this.innerRow = innerRow;
        return _this;
    }
    TabulatorRow.prototype.getElement = function () {
        return this.innerRow.getElement();
    };
    TabulatorRow.prototype.getRowData = function () {
        return this.innerRow.getData();
    };
    TabulatorRow.prototype.getDataPosition = function () {
        return this.innerRow.getPosition();
    };
    TabulatorRow.prototype.remove = function () {
        this.innerRow.delete();
        _super.prototype.remove.call(this);
    };
    return TabulatorRow;
}(_table__WEBPACK_IMPORTED_MODULE_1__["TableRow"]));



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZhcnNpLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvY29uZmlnLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9jb2x1bW5leHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9kZXRhaWxzZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvaGVhZGVyZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvcm93ZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy90YWJ1bGF0b3Iuc2Nzcz80ZmU3Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlRhYnVsYXRvclwiLFwiY29tbW9uanMyXCI6XCJ0YWJ1bGF0b3ItdGFibGVzXCIsXCJjb21tb25qc1wiOlwidGFidWxhdG9yLXRhYmxlc1wiLFwiYW1kXCI6XCJ0YWJ1bGF0b3ItdGFibGVzXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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O0FDdExELHlEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6InN1cnZleS5hbmFseXRpY3MudGFidWxhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIiksIHJlcXVpcmUoXCJ0YWJ1bGF0b3ItdGFibGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzVGFidWxhdG9yXCIsIFtcInN1cnZleS1jb3JlXCIsIFwidGFidWxhdG9yLXRhYmxlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NUYWJ1bGF0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcInRhYnVsYXRvci10YWJsZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc1RhYnVsYXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlN1cnZleVwiXSwgcm9vdFtcIlRhYnVsYXRvclwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90YWJ1bGF0b3JfdGFibGVzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL3RhYnVsYXRvci50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1kZXRhaWxcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI3LjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMTMuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1kcmFnXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTMgNWwtMSAxIDEgMUg5VjNsMSAxIDEtMS0zLTMtMyAzIDEgMSAxLTF2NEgzbDEtMS0xLTEtMyAzIDMgMyAxLTEtMS0xaDR2NGwtMS0xLTEgMSAzIDMgMy0zLTEtMS0xIDFWOWg0bC0xIDEgMSAxIDMtM3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1oaWRlXFxcIj48cGF0aCBjbGFzcz1cXFwic3QxXFxcIiBkPVxcXCJNMTIuNzkgNC4yTDE2IDFsLTEtMS0zLjMyIDMuMzJDMTAuNTcgMi41NSA5LjMyIDIgOCAyIDMuNjMgMiAwIDcuOTcgMCA3Ljk3czEuMjcgMi4xIDMuMjEgMy44MmwtMy4yMyAzLjIzLjk4Ljk4IDMuMzUtMy4zNEM1LjQxIDEzLjQ0IDYuNjcgMTQgOCAxNGM0LjM3IDAgOC02IDgtNnMtMS4yNy0yLjA5LTMuMjEtMy44ek0yIDcuOTdjMS4wNy0xLjQ3IDMuNjEtNCA2LTQgLjggMCAxLjYuMjcgMi4zNS42OGwtLjc4Ljc4Yy0uNDYtLjI5LS45OS0uNDYtMS41Ny0uNDYtMS42NiAwLTMgMS4zNC0zIDMgMCAuNTguMTcgMS4xMS40NiAxLjU3bC0uOTcuOTdBMTMuMzggMTMuMzggMCAwIDEgMiA3Ljk3em02IDRjLS44IDAtMS41OS0uMjctMi4zMy0uNjdsLjc4LS43N2MuNDUuMjcuOTguNDQgMS41NS40NCAxLjY2IDAgMy0xLjM0IDMtMyAwLS41Ny0uMTctMS4wOS0uNDQtMS41NWwuOTgtLjk4YzEuMTEuODcgMi4wMSAxLjkxIDIuNDYgMi41Mi0xLjA3IDEuNDgtMy42MSA0LjAxLTYgNC4wMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tYWtlcHJpdmF0ZVxcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiOFxcXCIgY3k9XFxcIjRcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk04IDhjLTMuMzEgMC02IDIuNzMtNiA0LjY3UzUuMjcgMTUgOCAxNXM2LS40IDYtMi4zM1MxMS4zMSA4IDggOHpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tYWtlcHVibGljXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI2XFxcIiBjeT1cXFwiNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEwIDVjMCAuMzQtLjA2LjY3LS4xNC45OS4wNSAwIC4wOS4wMS4xNC4wMSAxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtM0M4Ljk3IDAgOC4wNy41MiA3LjUzIDEuMyA4Ljk4IDEuOTEgMTAgMy4zMyAxMCA1ek02IDljLTMuMzEgMC02IDIuNzMtNiA0LjY3UzMuMjcgMTYgNiAxNnM2LS40IDYtMi4zM1M5LjMxIDkgNiA5ek0xMCA3Yy0uMTkgMC0uMzguMDEtLjU3LjAzYTQuMTQgNC4xNCAwIDAgMS0xLjM3IDEuMzljMyAuODMgNS4yMyAzLjMxIDUuNDIgNS4yOCAxLjQ0LS4zMSAyLjUyLS45MiAyLjUyLTIuMDNDMTYgOS43NCAxMy4zMSA3IDEwIDd6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbW92ZXRvZGV0YWlsc1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMS41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI3LjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMiAxaDN2OWgtM3pNMi4wMiA3LjAyTDEgNiAwIDdsMyAzIDMtMy0xLTEtLjk0Ljk0QzQuMzMgNC43MyA2LjIxIDMgOC41IDNjLjE3IDAgLjMzLjAzLjUuMDVWMS4wM0M4LjgzIDEuMDEgOC42NyAxIDguNSAxIDUuMDggMSAyLjI3IDMuNjYgMi4wMiA3LjAyelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLXNvcnRpbmdcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk04IDNsMiAyIDEtMS0zLTMtMyAzIDEgMXpNOCAxM2wtMi0yLTEgMSAzIDMgMy0zLTEtMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48L3N2Zz5cIjsiLCJleHBvcnQgKiBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG4vL2xvY2FsaXphdGlvblxuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZhcnNpXCI7XG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZnJlbmNoXCI7XG5cbi8vZXh0ZW5zaW9uc1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvcm93ZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvaGVhZGVyZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL3RhYmxlcy90YWJ1bGF0b3JcIjtcbmV4cG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy90YWJsZWV4dGVuc2lvbnNcIjtcbmV4cG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XG4iLCIvL1VuY29tbWVudCB0aGlzIGxpbmUgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlXG4vL2ltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZW5nbGlzaFN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0IE1lXCIsXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJNYWtlIGNvbHVtbiBwcml2YXRlXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHVibGljXCIsXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gIHJlbW92ZVJvd3M6IFwiUmVtb3ZlIHJvd3NcIixcbiAgc2hvd0xhYmVsOiBcIlNob3dcIixcbiAgZW50cmllc0xhYmVsOiBcImVudHJpZXNcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG91Z2hudXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJQaWVcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCJIaWRlXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIk1ha2UgcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQnV0dG9uOiBcIk1ha2UgcHVibGljXCIsXG4gIHNob3dCdXR0b246IFwiU2hvd1wiLFxuICByZXNldEZpbHRlcjogXCJSZXNldCBGaWx0ZXJcIixcbiAgY2hhbmdlTG9jYWxlOiBcIkNoYW5nZSBMb2NhbGVcIixcbiAgY2xlYXJCdXR0b246IFwiQ2xlYXJcIixcbiAgYWRkRWxlbWVudDogXCJDaG9vc2UgcXVlc3Rpb24gdG8gc2hvdy4uLlwiLFxuICBkZWZhdWx0T3JkZXI6IFwiRGVmYXVsdFwiLFxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJTaG93IG1pbm9yIGNvbHVtbnNcIixcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCIsXG4gIHNob3dQZXJjZW50YWdlczogXCJTaG93IHBlcmNlbnRhZ2VzXCIsXG4gIGhpZGVQZXJjZW50YWdlczogXCJIaWRlIHBlcmNlbnRhZ2VzXCIsXG59O1xuXG4vL1VuY29tbWVudCB0aGVzZSB0d28gbGluZXMgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlLiBZb3Ugc2hvdWxkIHJlcGxhY2UgXCJlblwiIGFuZCBlblN0cmluZ3Mgd2l0aCB5b3VyIGxvY2FsZSAoXCJmclwiLCBcImRlXCIgYW5kIHNvIG9uKSBhbmQgeW91ciB2YXJpYWJsZS5cbi8vbG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuLy9sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiRW5nbGlzaFwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBmYXJzaVN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcItqv2LHZiNmHINio2YbYr9uMINio2KdcIixcbiAgdW5ncm91cEJ1dHRvbjogXCLYrdiw2YEg2q/YsdmI2YdcIixcbiAgc2VsZWN0QnV0dG9uOiBcItin2YbYqtiu2KfYqFwiLFxuICBoaWRlQ29sdW1uOiBcItmF2K7ZgduMINqp2LHYr9mGINiz2KrZiNmGXCIsXG4gIHNob3dDb2x1bW46IFwi2YbZhdin24zYtCDYs9iq2YjZhlwiLFxuICBtb3ZlVG9EZXRhaWw6IFwi2KfZhtiq2YLYp9mEINio2Ycg2KzYstim24zYp9iqXCIsXG4gIHNob3dBc0NvbHVtbjogXCLZhtmF2KfbjNi0INio2Ycg2LnZhtmI2KfZhiDYs9iq2YjZhlwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwi2YXYqtmI2YYg2K/YsSDYrNiv2YjZhFwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCLYp9io2LEg2qnZhNmF2KfYqlwiLFxuICBjaGFydFR5cGVfYmFyOiBcItmF24zZhNmHINin24xcIixcbiAgY2hhcnRUeXBlX3BpZTogXCLYr9in2KjYsdmHINin24wocGllKVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCLZvtix2KfaqdmG2K/ar9uMKFNjYXR0ZXIpXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCLYudmC2LHYqNmHINin24xcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCLZhdiu2YHbjFwiLFxuICByZXNldEZpbHRlcjogXCLYqNin2LLZhti02KfZhtuMINmB24zZhNiq2LHZh9inXCIsXG4gIGNsZWFyQnV0dG9uOiBcItm+2KfaqSDaqdix2K/ZhlwiLFxuICBhZGRFbGVtZW50OiBcItin2YbYqtiu2KfYqCDYs9mI2KfZhCDYqNix2KfbjCDZhtmF2KfbjNi0Li4uXCJcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmFcIl0gPSBmYXJzaVN0cmluZ3M7XG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmYVwiXSA9IFwiRmFyc2koUGVyc2lhbilcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIGZyZW5jaFN0cmluZ3MgPSB7XHJcbiAgICBncm91cEJ1dHRvbjogXCJHcm91cGVyXCIsXHJcbiAgICB1bmdyb3VwQnV0dG9uOiBcIkRpc3NvY2llclwiLFxyXG4gICAgc2VsZWN0QnV0dG9uOiBcIlPDqWxlY3Rpb25uZXJcIixcclxuICAgIGhpZGVDb2x1bW46IFwiTWFzcXVlciBjb2xvbm5lXCIsXHJcbiAgICBzaG93Q29sdW1uOiBcIkFmZmljaGVyIGNvbG9ubmVcIixcclxuICAgIG1ha2VQcml2YXRlQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHByaXbDqVwiLFxyXG4gICAgbWFrZVB1YmxpY0NvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwdWJsaWNcIixcclxuICAgIG1vdmVUb0RldGFpbDogXCJEw6lwbGFjZXIgdmVycyBkw6l0YWlsc1wiLFxyXG4gICAgc2hvd0FzQ29sdW1uOiBcIkFmZmljaGVyIGVuIGNvbG9ubmVcIixcclxuICAgIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0ZXMgZW4gdGFibGVcIixcclxuICAgIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk51YWdlcyBkZSBtb3RzXCIsXHJcbiAgICBjaGFydFR5cGVfYmFyOiBcIkJhcnJlc1wiLFxyXG4gICAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiQmFycmVzIGVtcGlsw6llc1wiLFxyXG4gICAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkFubmVhdVwiLFxyXG4gICAgY2hhcnRUeXBlX3BpZTogXCJTZWN0ZXVyc1wiLFxyXG4gICAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiTnVhZ2VzIGRlIHBvaW50c1wiLFxyXG4gICAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXHJcbiAgICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxlc1wiLFxyXG4gICAgaGlkZUJ1dHRvbjogXCJNYXNxdWVyXCIsXHJcbiAgICByZXNldEZpbHRlcjogXCJSYWZyYWljaGlyIEZpbHRyZXNcIixcclxuICAgIGNsZWFyQnV0dG9uOiBcIlJhZnJhaWNoaXJcIixcclxuICAgIGFkZEVsZW1lbnQ6IFwiQ2hvaXNpciBsYSBxdWVzdGlvbiDDoCBhZmZpY2hlci4uLlwiLFxyXG4gICAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1dFwiLFxyXG4gICAgYXNjT3JkZXI6IFwiQXNjZW5kYW50XCIsXHJcbiAgICBkZXNjT3JkZXI6IFwiRGVzY2VuZGFudFwiLFxyXG4gICAgc2hvd01pbm9yQ29sdW1uczogXCJBZmZpY2hlciBsZXMgY29sb25uZXMgbWluZXVyZXNcIlxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN0cmluZ3M7XHJcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZyXCJdID0gXCJGcmVuY2hcIjsiLCJpbXBvcnQgeyBlbmdsaXNoU3RyaW5ncyB9IGZyb20gXCIuL2xvY2FsaXphdGlvbi9lbmdsaXNoXCI7XG5cbmV4cG9ydCB2YXIgbG9jYWxpemF0aW9uID0ge1xuICBjdXJyZW50TG9jYWxlVmFsdWU6IFwiXCIsXG4gIGRlZmF1bHRMb2NhbGVWYWx1ZTogXCJlblwiLFxuICBsb2NhbGVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgbG9jYWxlTmFtZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBzdXBwb3J0ZWRMb2NhbGVzOiA8QXJyYXk8YW55Pj5bXSxcbiAgZ2V0IGN1cnJlbnRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID09PSB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZVxuICAgICAgPyBcIlwiXG4gICAgICA6IHRoaXMuY3VycmVudExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgY3VycmVudExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXQgZGVmYXVsdExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBkZWZhdWx0TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldFN0cmluZzogZnVuY3Rpb24oc3RyTmFtZTogc3RyaW5nKSB7XG4gICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2FsZVxuICAgICAgPyB0aGlzLmxvY2FsZXNbdGhpcy5jdXJyZW50TG9jYWxlXVxuICAgICAgOiB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcbiAgICBpZiAoIWxvYyB8fCAhbG9jW3N0ck5hbWVdKSBsb2MgPSB0aGlzLmxvY2FsZXNbdGhpcy5kZWZhdWx0TG9jYWxlXTtcbiAgICB2YXIgcmVzdWx0ID0gbG9jW3N0ck5hbWVdO1xuICAgIGlmKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmxvY2FsZXNbXCJlblwiXVtzdHJOYW1lXSB8fCBzdHJOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICBnZXRMb2NhbGVzOiBmdW5jdGlvbigpOiBBcnJheTxzdHJpbmc+IHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgcmVzLnB1c2goXCJcIik7XG4gICAgaWYgKHRoaXMuc3VwcG9ydGVkTG9jYWxlcyAmJiB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzLnB1c2godGhpcy5zdXBwb3J0ZWRMb2NhbGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXMuc29ydCgpO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgc3VydmV5U3RyaW5ncyA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiZW5nbGlzaFwiO1xuIiwiZXhwb3J0IGVudW0gQ29sdW1uVmlzaWJpbGl0eSB7XG4gIFZpc2libGUsXG4gIEludmlzaWJsZSxcbiAgUHVibGljSW52aXNpYmxlLFxufVxuZXhwb3J0IGVudW0gUXVlc3Rpb25Mb2NhdGlvbiB7XG4gIENvbHVtbixcbiAgUm93LFxufVxuZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUge1xuICBUZXh0LFxuICBGaWxlTGluayxcbiAgSW1hZ2UsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBkYXRhVHlwZTogQ29sdW1uRGF0YVR5cGU7XG4gIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHk7XG4gIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTdGF0ZSB7XG4gIGxvY2FsZT86IHN0cmluZztcbiAgZWxlbWVudHM/OiBJVGFibGVDb2x1bW5bXTtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImRyYWdcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIlxuICAgICk7XG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJkcmFnXCIpKTtcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGFibGUuZW5hYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJzb3J0XCIsXG4gIHZpc2libGVJbmRleDogMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xuICAgIGNvbnN0IGFzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpO1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJzb3J0aW5nXCIpO1xuICAgIGJ0bi50aXRsZSA9IFwiXCI7XG4gICAgdmFyIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcbiAgICAgICAgYnRuLnRpdGxlID0gZGVzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGFzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgICAgfVxuICAgICAgdGFibGUuc29ydEJ5Q29sdW1uKG9wdGlvbnMuY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiaGlkZVwiLFxuICB2aXNpYmxlSW5kZXg6IDIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XG4gICAgYnRuLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVDb2x1bW5cIik7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtb3ZldG9kZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJtb3ZldG9kZXRhaWxzXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRhYmxlLnNldENvbHVtbkxvY2F0aW9uKG9wdGlvbnMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiA0LFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIHZhciBlbCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZmlsdGVyXCIsXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcbiAgICApO1xuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlbC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUNvbHVtbkZpbHRlcihvcHRpb25zLmNvbHVtbk5hbWUsIGVsLnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBlbDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtYWtlcHVibGljXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWtlUHJpdmF0ZVN2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHJpdmF0ZVwiKTtcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XG4gICAgdmFyIGN1cnJlbnRWaXNpYmlsaXR5ID0gdGFibGUuZ2V0Q29sdW1uVmlzaWJpbGl0eShvcHRpb25zLmNvbHVtbk5hbWUpO1xuICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVByaXZhdGVTdmcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHVibGljU3ZnKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGN1cnJlbnRWaXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZSkge1xuICAgICAgICBjdXJyZW50VmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRWaXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICB9XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgY3VycmVudFZpc2liaWxpdHkpO1xuICAgICAgdGFibGUub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJiB0YWJsZS5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrKHRhYmxlKTtcbiAgICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgICAgY29uc3QgaXNQcml2YXRlID0gdmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICBpZiAoaXNQcml2YXRlKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uIHNhLXRhYmxlX19zdmctYnV0dG9uLS1hY3RpdmVcIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQcml2YXRlQ29sdW1uXCIpO1xuICAgICAgICBtYWtlUHJpdmF0ZVN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIERldGFpbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgcm93OiBUYWJsZVJvdyxcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdmFyIGRldGFpbHNUYWJsZSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxuICAgICk7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUgPSBkZXRhaWxzVGFibGU7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGRldGFpbHNUYWJsZTogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBsb2NhdGlvbiA9IFwiZGV0YWlsc1wiO1xuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICB0aGlzLnRhYmxlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiBjb2x1bW4pXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgICAgICB2YXIgdGQxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHtcbiAgICAgICAgICBpbm5lckhUTUw6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0ZDIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldFJvd0RhdGEoKVtjb2x1bW4ubmFtZV07XG4gICAgICAgIHZhciB0ZDMgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbihjb2x1bW4ubmFtZSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgIH0pO1xuICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7IGNvbFNwYW46IDMgfSk7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRoaXMudGFibGUpO1xuICAgIGV4dGVuc2lvbnMucmVuZGVyKHRkLCBcImRldGFpbHNcIiwgeyByb3c6IHRoaXMucm93IH0pO1xuICAgIGlmICh0ZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uID0gKGNvbHVtbk5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKSB9XG4gICAgKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbik7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGlmICghIXRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcbiAgICAgIFwic2EtdGFibGVfX2dsb2JhbC1maWx0ZXIgc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIixcbiAgICAgIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJQbGFjZWhvbGRlclwiKVxuICAgICk7XG4gICAgaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGFibGUuYXBwbHlGaWx0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJzaG93Y29sdW1uXCIsXG4gIHZpc2libGVJbmRleDogMixcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBkcm9wZG93biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNlbGVjdFwiLFxuICAgICAgXCJzYS10YWJsZV9fc2hvdy1jb2x1bW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRhYmxlLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAoY29sdW1uOiBhbnkpID0+IGNvbHVtbi52aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZVxuICAgICAgKTtcbiAgICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBkcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKSxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgIHZhciB0ZXh0ID0gY29sdW1uLmRpc3BsYXlOYW1lO1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAyMCkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgIHRpdGxlOiBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgICAgdmFsdWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyb3Bkb3duLm9uY2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF2YWwpIHJldHVybjtcbiAgICAgIHRhYmxlLnNldENvbHVtblZpc2liaWxpdHkodmFsLCBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHZhciBvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuYWRkKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG5cbiAgICB0aGlzLm9uRGVzdHJveSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLnJlbW92ZShvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIGRyb3Bkb3duO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3dlbnRyaWVzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGZ1bmN0aW9uIGdldEVudHJpZXNEcm9wZG93bih0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgICBjb25zdCBlbCA9IDxIVE1MU2VsZWN0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCIsIFwiMjVcIiwgXCI1MFwiLCBcIjc1XCIsIFwiMTAwXCJdO1xuICAgICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgdGV4dDogdmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgZWwudmFsdWUgPSBTdHJpbmcodGFibGUuZ2V0UGFnZVNpemUoKSk7XG5cbiAgICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0YWJsZS5zZXRQYWdlU2l6ZShOdW1iZXIoZWwudmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3JDb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXNcIlxuICAgICk7XG4gICAgY29uc3Qgc2hvd1NwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1yaWdodFwiLFxuICAgICAge1xuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLWxlZnRcIixcbiAgICAgIHtcbiAgICAgICAgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZW50cmllc0xhYmVsXCIpLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93U3Bhbik7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlKSk7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cmllc1NwYW4pO1xuICAgIHJldHVybiBzZWxlY3RvckNvbnRhaW5lcjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJyZW1vdmVyb3dzXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyZWVuIHNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uIFwiLFxuICAgICAgeyBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZW1vdmVSb3dzXCIpIH1cbiAgICApO1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGFibGUuZ2V0Q3JlYXRlZFJvd3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKHJvdy5nZXRJc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICByb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJjaGFuZ2Vsb2NhbGVcIixcbiAgdmlzaWJsZUluZGV4OiAxLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZSkge1xuICAgIHZhciBsb2NhbGVzID0gdGFibGUuZ2V0TG9jYWxlcygpO1xuICAgIGlmIChsb2NhbGVzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsID0gPEhUTUxTZWxlY3RFbGVtZW50PihcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLCB7fSlcbiAgICApO1xuICAgIHZhciBvcHRpb25zVmFsdWVzID0gW2xvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFuZ2VMb2NhbGVcIildLmNvbmNhdChcbiAgICAgIGxvY2FsZXNcbiAgICApO1xuICAgIG9wdGlvbnNWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIHRleHQ6IHZhbCxcbiAgICAgIH0pO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBlbC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLmxvY2FsZSA9IGVsLnZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIGVsO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwiZGV0YWlsc1wiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogKF90YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImRldGFpbFwiKTtcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd01pbm9yQ29sdW1uc1wiKTtcbiAgICBidG4uY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvcHRpb25zLnJvdy50b2dnbGVEZXRhaWxzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcInJvd1wiLFxuICBuYW1lOiBcInNlbGVjdFwiLFxuICB2aXNpYmxlSW5kZXg6IC0xLFxuICByZW5kZXI6IGZ1bmN0aW9uIChfdGFibGUsIG9wdCkge1xuICAgIHZhciByb3cgPSBvcHQucm93O1xuICAgIHZhciBjaGVja2JveCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImlucHV0XCIsXG4gICAgICBcInNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCIsXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSByb3cuZ2V0SXNTZWxlY3RlZCgpO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LnRvZ2dsZVNlbGVjdCgpO1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuXG5pbnRlcmZhY2UgSVRhYmxlRXh0ZW5zaW9uIHtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2aXNpYmxlSW5kZXg6IG51bWJlcjtcbiAgcmVuZGVyOiAodGFibGU6IFRhYmxlLCBvcHQ6IGFueSkgPT4gSFRNTEVsZW1lbnQ7XG4gIGRlc3Ryb3k/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVFeHRlbnNpb25zIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZTogVGFibGUpIHt9XG4gIHByaXZhdGUgc3RhdGljIGV4dGVuc2lvbnM6IHtcbiAgICBbbG9jYXRpb246IHN0cmluZ106IEFycmF5PElUYWJsZUV4dGVuc2lvbj47XG4gIH0gPSB7fTtcbiAgcHJpdmF0ZSByZW5kZXJlZEV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gPSBbXTtcblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LCBsb2NhdGlvbjogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tsb2NhdGlvbl07XG4gICAgaWYgKCEhZXh0ZW5zaW9ucykge1xuICAgICAgZXh0ZW5zaW9ucyA9IHRoaXMuc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9ucyk7XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgICBpZiAoISFleHRlbnNpb24ucmVuZGVyKSB7XG4gICAgICAgICAgdmFyIGFjdGlvbiA9IGV4dGVuc2lvbi5yZW5kZXIodGhpcy50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKCEhYWN0aW9uKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5mb3JFYWNoKChleHRlbnNpb24pID0+IHtcbiAgICAgIGlmICghIWV4dGVuc2lvbi5kZXN0cm95KSBleHRlbnNpb24uZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zID0gW107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXh0ZW5zaW9uKGV4dGVuc2lvbjogSVRhYmxlRXh0ZW5zaW9uKSB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXSlcbiAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dID0gW107XG4gICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0ucHVzaChleHRlbnNpb24pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmaW5kRXh0ZW5zaW9uKFxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nXG4gICk6IElUYWJsZUV4dGVuc2lvbiB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbbG9jYXRpb25dKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgZXh0ZW5zaW9uID0gdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXS5maWx0ZXIoZnVuY3Rpb24gKFxuICAgICAgZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb25cbiAgICApIHtcbiAgICAgIHJldHVybiBleHRlbnNpb24ubmFtZSA9PSBhY3Rpb25OYW1lO1xuICAgIH0pWzBdO1xuICAgIHJldHVybiBleHRlbnNpb24gfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9uczogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRlbnNpb25zKSkgcmV0dXJuO1xuICAgIHJldHVybiBbXVxuICAgICAgLmNvbmNhdChleHRlbnNpb25zLmZpbHRlcigoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24udmlzaWJsZUluZGV4ID49IDApKVxuICAgICAgLnNvcnQoKGZpcnN0RXh0ZW5zaW9uLCBzZWNvbmRFeHRlbnNpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGZpcnN0RXh0ZW5zaW9uLnZpc2libGVJbmRleCAtIHNlY29uZEV4dGVuc2lvbi52aXNpYmxlSW5kZXg7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHtcbiAgQ29sdW1uVmlzaWJpbGl0eSxcbiAgUXVlc3Rpb25Mb2NhdGlvbixcbiAgQ29sdW1uRGF0YVR5cGUsXG4gIElUYWJsZVN0YXRlLFxuICBJVGFibGVDb2x1bW4sXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgSVBlcm1pc3Npb24gfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZSB7XG4gIHByb3RlY3RlZCB0YWJsZURhdGE6IGFueTtcbiAgcHJvdGVjdGVkIGV4dGVuc2lvbnM6IFRhYmxlRXh0ZW5zaW9ucztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IGFueSxcbiAgICBwcm90ZWN0ZWQgX2NvbHVtbnM6IEFycmF5PGFueT4gPSBbXSxcbiAgICBwdWJsaWMgaXNUcnVzdGVkQWNjZXNzOiBib29sZWFuXG4gICkge1xuICAgIGlmIChfY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1ucyhzdXJ2ZXkpO1xuICAgIH1cbiAgICB0aGlzLmluaXRUYWJsZURhdGEoZGF0YSk7XG4gICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSB0aGlzLnN1cnZleS5sb2NhbGU7XG5cbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG5cbiAgICB0aGlzLmV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRoaXMpO1xuICB9XG4gIHByb3RlY3RlZCByZW5kZXJSZXN1bHQ6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VTaXplOiBudW1iZXIgPSA1O1xuICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF9yb3dzOiBUYWJsZVJvd1tdID0gW107XG4gIHByb3RlY3RlZCBpc0NvbHVtblJlb3JkZXJFbmFibGVkOiBib29sZWFuO1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Sb3dSZW1vdmVkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHJvdzogVGFibGVSb3dcbiAgKSA9PiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHJlbmRlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IGFwcGx5Q29sdW1uRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBzb3J0QnlDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQ7XG5cbiAgcHVibGljIGVuYWJsZUNvbHVtblJlb3JkZXIoKSB7XG4gICAgdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlQ29sdW1uUmVvcmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYWdlTnVtYmVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VOdW1iZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VTaXplO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDcmVhdGVkUm93cygpOiBUYWJsZVJvd1tdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3Jvd3MpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ3JlYXRlZFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcm93cyA9IFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpLm1hcCgocXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkYXRhVHlwZTpcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXG4gICAgICAgICAgICA/IENvbHVtbkRhdGFUeXBlLlRleHRcbiAgICAgICAgICAgIDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6XG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIlxuICAgICAgICAgICAgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGVcbiAgICAgICAgICAgIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbixcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGlzQ29sdW1uVmlzaWJsZShjb2x1bW46IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICBjb2x1bW4ubG9jYXRpb24gPT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4gJiZcbiAgICAgIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNWaXNpYmxlID0gKHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlKSB8fFxuICAgICAgKCF0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUpXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgaXNBdmFpbGFibGUgPSAodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzVHJ1c3RlZEFjY2VzcyB8fCB2aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZVxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIGdldEF2YWlsYWJsZUNvbHVtbnMgPSAoKTogQXJyYXk8SVRhYmxlQ29sdW1uPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0F2YWlsYWJsZShjb2x1bW4udmlzaWJpbGl0eSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvbHVtbnMoY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPikge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gaXRlbVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi5kaXNwbGF5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID1cbiAgICAgICAgICB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQ29sdW1uKGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xuICAgIHZhciBkZWxldGVkQ29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGZyb20sIDEpO1xuICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKHRvLCAwLCBkZWxldGVkQ29sdW1uc1swXSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcbiAgICB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmZpcmUodGhpcywge1xuICAgICAgY29sdW1uTmFtZTogY29sdW1uTmFtZSxcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICB9KTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWU6IHN0cmluZyk6IElUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKTtcbiAgICBjb2x1bW4udmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG4gICAgdGhpcy5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBjb2x1bW5WaXNpYmlsaXR5OiB2aXNpYmlsaXR5LFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5XaWR0aChjb2x1bW5OYW1lOiBzdHJpbmcsIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5nZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZSk7XG4gICAgY29sdW1uLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nKTogQ29sdW1uVmlzaWJpbGl0eSB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdO1xuICAgIHJldHVybiBjb2x1bW4udmlzaWJpbGl0eTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVSb3cocm93OiBUYWJsZVJvdyk6IHZvaWQge1xuICAgIHZhciBpbmRleCA9IHRoaXMuX3Jvd3MuaW5kZXhPZihyb3cpO1xuICAgIHRoaXMuX3Jvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLm9uUm93UmVtb3ZlZC5maXJlKHRoaXMsIHsgcm93OiByb3cgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IGxvY2FsZSBvZiB0aGUgdGFibGUuXG4gICAqIElmIGxvY2FsZXMgbW9yZSB0aGFuIG9uZSwgdGhlIGxhbmd1YWdlIHNlbGVjdGlvbiBkcm9wZG93biB3aWxsIGJlIGFkZGVkIGluIHRoZSB0b29sYmFyXG4gICAqL1xuICBwdWJsaWMgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBsb2NhbGUgZm9yIHRhYmxlLlxuICAgKi9cbiAgcHVibGljIHNldCBsb2NhbGUobmV3TG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN1cnZleS5sb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMb2NhbGVzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5zdXJ2ZXkuZ2V0VXNlZExvY2FsZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaChoYXJkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICBpZiAoaGFyZCkge1xuICAgICAgICB0aGlzLmluaXRUYWJsZURhdGEodGhpcy5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHZhciB0YXJnZXROb2RlID0gdGhpcy5yZW5kZXJSZXN1bHQ7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVuZGVyKHRhcmdldE5vZGUpO1xuICAgICAgdGhpcy5zZXRQYWdlU2l6ZSh0aGlzLmN1cnJlbnRQYWdlU2l6ZSk7XG4gICAgICB0aGlzLnNldFBhZ2VOdW1iZXIodGhpcy5jdXJyZW50UGFnZU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhckNyZWF0ZWRSb3dzKCk7XG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcbiAgICB0aGlzLnJlbmRlclJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1JlbmRlcmVkKCkge1xuICAgIHJldHVybiAhIXRoaXMucmVuZGVyUmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUgZ2V0dGVyLlxuICAgKi9cbiAgcHVibGljIGdldCBzdGF0ZSgpOiBJVGFibGVTdGF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsZTogbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUsXG4gICAgICBlbGVtZW50czogW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpLFxuICAgICAgcGFnZVNpemU6IHRoaXMuY3VycmVudFBhZ2VTaXplLFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUgc2V0dGVyLlxuICAgKi9cbiAgcHVibGljIHNldCBzdGF0ZShuZXdTdGF0ZTogSVRhYmxlU3RhdGUpIHtcbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlLmxvY2FsZSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3U3RhdGUubG9jYWxlO1xuXG4gICAgaWYgKHR5cGVvZiBuZXdTdGF0ZS5lbGVtZW50cyAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBuZXdTdGF0ZS5lbGVtZW50cztcblxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUucGFnZVNpemUgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IG5ld1N0YXRlLnBhZ2VTaXplO1xuICB9XG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRhYmxlIHN0YXRlIGNoYW5nZWQuXG4gICAqL1xuICBwdWJsaWMgb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+KCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdGFibGUgcGVybWlzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCk6IElQZXJtaXNzaW9uW10ge1xuICAgIHJldHVybiA8YW55PnRoaXMuX2NvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICB2aXNpYmlsaXR5OiBjb2x1bW4udmlzaWJpbGl0eSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGFibGUgcGVybWlzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgc2V0IHBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBJUGVybWlzc2lvbltdKSB7XG4gICAgY29uc3QgdXBkYXRlZEVsZW1lbnRzID0gdGhpcy5fY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgcGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICBpZiAocGVybWlzc2lvbi5uYW1lID09PSBjb2x1bW4ubmFtZSlcbiAgICAgICAgICBjb2x1bW4udmlzaWJpbGl0eSA9IHBlcm1pc3Npb24udmlzaWJpbGl0eTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyAuLi5jb2x1bW4gfTtcbiAgICB9KTtcbiAgICB0aGlzLl9jb2x1bW5zID0gW10uY29uY2F0KHVwZGF0ZWRFbGVtZW50cyk7XG4gICAgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrICYmXG4gICAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBwZXJtaXNzaW9ucyBjaGFuZ2VkXG4gICAqL1xuICBwdWJsaWMgb25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjazogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGVSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByb3RlY3RlZCBleHRlbnNpb25zQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHModGFibGUsIHRoaXMsIGRldGFpbHNDb250YWluZXIpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGFibGUpO1xuICAgIHRhYmxlLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5hZGQodGhpcy5vbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgcHVibGljIGV4dGVuc2lvbnM6IFRhYmxlRXh0ZW5zaW9ucztcbiAgcHJpdmF0ZSBkZXRhaWxlZFJvd0NsYXNzID0gXCJzYS10YWJsZV9fZGV0YWlsLXJvd1wiO1xuICBwcml2YXRlIGlzRGV0YWlsc0V4cGFuZGVkID0gZmFsc2U7XG4gIHB1YmxpYyBvblRvZ2dsZURldGFpbHM6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICAvKipcbiAgICogUmV0dXJucyByb3cncyBodG1sIGVsZW1lbnRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGRhdGEsIHdoaWNoIGlzIGRpc3BsYXllZCBpbiB0aGUgcm93LlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldFJvd0RhdGEoKTogYW55O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBvc2l0aW9uIG9mIHJvdyBpbiB0aGUgdGFibGUncyBkYXRhLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldERhdGFQb3NpdGlvbigpOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKHRoaXMuZXh0ZW5zaW9uc0NvbnRhaW5lciwgXCJyb3dcIiwgeyByb3c6IHRoaXMgfSk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLm9wZW4oKTtcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLmRldGFpbGVkUm93Q2xhc3M7XG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEZXRhaWxzKCkge1xuICAgIHRoaXMuZGV0YWlscy5jbG9zZSgpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kZXRhaWxlZFJvd0NsYXNzKTtcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURldGFpbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gICAgfSBlbHNlIHRoaXMub3BlbkRldGFpbHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9ICF0aGlzLmlzU2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUucmVtb3ZlUm93KHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gIH07XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQucmVtb3ZlKFxuICAgICAgdGhpcy5vbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrXG4gICAgKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMuZGVzdHJveSgpO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBUYWJsZSwgVGFibGVSb3cgfSBmcm9tIFwiLi90YWJsZVwiO1xuaW1wb3J0IHsgU3VydmV5TW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IENvbHVtblZpc2liaWxpdHksIFF1ZXN0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi9jb25maWdcIjtcblxuaW1wb3J0IFwiLi90YWJ1bGF0b3Iuc2Nzc1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmNvbnN0IFRhYnVsYXRvclRhYmxlcyA9IHJlcXVpcmUoXCJ0YWJ1bGF0b3ItdGFibGVzXCIpO1xuXG5pZiAoISFkb2N1bWVudCkge1xuICBjb25zdCBzdmdUZW1wbGF0ZSA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4uL3N2Z2J1bmRsZS5odG1sXCIpO1xuICBjb25zdCB0ZW1wbGF0ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGVtcGxhdGVIb2xkZXIuaW5uZXJIVE1MID0gc3ZnVGVtcGxhdGU7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGVIb2xkZXIpO1xufVxuXG5pbnRlcmZhY2UgSURvd25sb2FkT3B0aW9ucyB7XG4gIHBkZj86IGFueTtcbiAgY3N2PzogYW55O1xuICB4bHN4PzogYW55O1xufVxuXG5pbnRlcmZhY2UgSU9wdGlvbnMge1xuICBjb2x1bW5NaW5XaWR0aDogbnVtYmVyO1xuICBhY3Rpb25zQ29sdW1uV2lkdGg6IG51bWJlcjtcbiAgcGFnaW5hdGlvbkJ1dHRvbkNvdW50OiBudW1iZXI7XG4gIGRvd25sb2FkT3B0aW9uczogSURvd25sb2FkT3B0aW9ucztcbn1cblxudmFyIGRlZmF1bHREb3dubG9hZE9wdGlvbnM6IElEb3dubG9hZE9wdGlvbnMgPSB7XG4gIHBkZjoge1xuICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLCAvL3NldCBwYWdlIG9yaWVudGF0aW9uIHRvIHBvcnRyYWl0XG4gICAgYXV0b1RhYmxlOiB7XG4gICAgICAvL2FkdmFuY2VkIHRhYmxlIHN0eWxpbmdcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNiwgMTc5LCAxNDhdLFxuICAgICAgfSxcbiAgICAgIGNvbHVtblN0eWxlczoge1xuICAgICAgICBpZDogeyBmaWxsQ29sb3I6IDI1NSB9LFxuICAgICAgfSxcbiAgICAgIG1hcmdpbjogeyB0b3A6IDYwIH0sXG4gICAgfSxcbiAgfSxcbiAgY3N2OiB7IGlzVmlzaWJsZTogdHJ1ZSwgZGVsaW1pdGVyOiBcIixcIiB9LFxuICB4bHN4OiB7IGlzVmlzaWJsZTogdHJ1ZSwgc2hlZXROYW1lOiBcInJlc3VsdHNcIiB9LFxufTtcblxuZXhwb3J0IHZhciBkZWZhdWx0T3B0aW9uczogSU9wdGlvbnMgPSB7XG4gIGNvbHVtbk1pbldpZHRoOiAyNDgsXG4gIGRvd25sb2FkT3B0aW9uczogZGVmYXVsdERvd25sb2FkT3B0aW9ucyxcbiAgcGFnaW5hdGlvbkJ1dHRvbkNvdW50OiAzLFxuICBhY3Rpb25zQ29sdW1uV2lkdGg6IDYwLFxufTtcblxuZXhwb3J0IGNsYXNzIFRhYnVsYXRvciBleHRlbmRzIFRhYmxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcbiAgICBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIG9wdGlvbnM6IElPcHRpb25zLFxuICAgIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW10sXG4gICAgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgc3VwZXIoc3VydmV5LCBkYXRhLCBvcHRpb25zLCBfY29sdW1ucywgaXNUcnVzdGVkQWNjZXNzKTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB2YXIgcGF0Y2hlZE9wdGlvbnMgPSB7fTtcbiAgICBPYmplY3QuYXNzaWduKHBhdGNoZWRPcHRpb25zLCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zID0gcGF0Y2hlZE9wdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IENPTFVNTl9NSU5fV0lEVEggPSAxNTU7XG4gIHB1YmxpYyB0YWJ1bGF0b3JUYWJsZXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgdGFibGVDb250YWluZXI6IEhUTUxFbGVtZW50ID0gbnVsbDtcblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdGFyZ2V0Tm9kZS5jbGFzc05hbWUgKz0gXCIgc2EtdGFibGUgc2EtdGFidWxhdG9yXCI7XG4gICAgdGFyZ2V0Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRhYmxlRGF0YTtcblxuICAgIHZhciBoZWFkZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2EtdGFidWxhdG9yX19oZWFkZXJcIik7XG4gICAgdmFyIHBhZ2luYXRpb25FbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInNhLXRhYnVsYXRvcl9fcGFnaW5hdGlvbi1jb250YWluZXJcIlxuICAgICk7XG4gICAgdGhpcy50YWJsZUNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLnRhYmxlQ29udGFpbmVyKTtcblxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzID0gbmV3IFRhYnVsYXRvclRhYmxlcyh0aGlzLnRhYmxlQ29udGFpbmVyLCB7XG4gICAgICBkYXRhLFxuICAgICAgbGF5b3V0OiBcImZpdENvbHVtbnNcIixcbiAgICAgIHBhZ2luYXRpb246IFwibG9jYWxcIixcbiAgICAgIHBhZ2luYXRpb25TaXplOiB0aGlzLmN1cnJlbnRQYWdlU2l6ZSxcbiAgICAgIG1vdmFibGVDb2x1bW5zOiB0cnVlLFxuICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGNvbHVtbnMsXG4gICAgICByb3dGb3JtYXR0ZXI6IHRoaXMucm93Rm9ybWF0dGVyLFxuICAgICAgcGFnaW5hdGlvbkJ1dHRvbkNvdW50OiB0aGlzLm9wdGlvbnMucGFnaW5hdGlvbkJ1dHRvbkNvdW50LFxuICAgICAgcGFnaW5hdGlvbkVsZW1lbnQ6IHBhZ2luYXRpb25FbGVtZW50LFxuICAgICAgY29sdW1uTW92ZWQ6IHRoaXMuY29sdW1uTW92ZWRDYWxsYmFjayxcbiAgICAgIGNvbHVtblJlc2l6ZWQ6IHRoaXMuY29sdW1uUmVzaXplZENhbGxiYWNrLFxuICAgICAgdG9vbHRpcHNIZWFkZXI6IHRydWUsXG4gICAgICB0b29sdGlwczogKGNlbGw6IGFueSkgPT4gY2VsbC5nZXRWYWx1ZSgpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZXh0ZW5zaW9uc0NvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvbnNcIlxuICAgICk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRG93bmxvYWRzQmFyKCkpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChleHRlbnNpb25zQ29udGFpbmVyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnaW5hdGlvbkVsZW1lbnQpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIoZXh0ZW5zaW9uc0NvbnRhaW5lciwgXCJoZWFkZXJcIik7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB0YXJnZXROb2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEb3dubG9hZHNCYXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHZhciBjcmVhdGVEb3dubG9hZEJ1dHRvbiA9ICh0eXBlOiBzdHJpbmcsIGNhcHRpb246IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1zbWFsbCBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBpbm5lckhUTUw6IGNhcHRpb24sXG4gICAgICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb3dubG9hZCh0eXBlKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS10YWJ1bGF0b3JfX2Rvd25sb2Fkcy1iYXJcIlxuICAgICk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kb3dubG9hZE9wdGlvbnMueGxzeC5pc1Zpc2libGUpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihcInhsc3hcIiwgXCJFeGNlbFwiKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuZG93bmxvYWRPcHRpb25zLnBkZi5pc1Zpc2libGUpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihcInBkZlwiLCBcIlBERlwiKSk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihcImNzdlwiLCBcIkNTVlwiKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmRlc3Ryb3koKTtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBjb2x1bW5Nb3ZlZENhbGxiYWNrID0gKGNvbHVtbjogYW55LCBjb2x1bW5zOiBhbnlbXSkgPT4ge1xuICAgIHZhciBmcm9tID0gdGhpcy5fY29sdW1ucy5pbmRleE9mKHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbi5nZXRGaWVsZCgpKSk7XG4gICAgdmFyIHRvID0gY29sdW1ucy5pbmRleE9mKGNvbHVtbikgLSAxO1xuICAgIHRoaXMubW92ZUNvbHVtbihmcm9tLCB0byk7XG4gICAgdGhpcy5kaXNhYmxlQ29sdW1uUmVvcmRlcigpO1xuICB9O1xuXG4gIHByaXZhdGUgY29sdW1uUmVzaXplZENhbGxiYWNrID0gKGNvbHVtbjogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aChjb2x1bW4uZ2V0RmllbGQoKSwgY29sdW1uLmdldFdpZHRoKCkpO1xuICAgIHRoaXMubGF5b3V0KCk7XG4gIH07XG5cbiAgcHJpdmF0ZSByb3dGb3JtYXR0ZXIgPSAocm93OiBhbnkpOiB2b2lkID0+IHtcbiAgICB2YXIgdGFibGVSb3cgPSBuZXcgVGFidWxhdG9yUm93KFxuICAgICAgdGhpcyxcbiAgICAgIHJvdy5nZXRDZWxscygpWzBdLmdldEVsZW1lbnQoKSxcbiAgICAgIHJvdy5nZXRFbGVtZW50KCksXG4gICAgICByb3dcbiAgICApO1xuICAgIHRhYmxlUm93Lm9uVG9nZ2xlRGV0YWlscy5hZGQoKCkgPT4ge1xuICAgICAgcm93Lm5vcm1hbGl6ZUhlaWdodCgpO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICB9KTtcbiAgICB0YWJsZVJvdy5yZW5kZXIoKTtcblxuICAgIHRoaXMuX3Jvd3MucHVzaCh0YWJsZVJvdyk7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRUaXRsZUZvcm1hdHRlcihcbiAgICBjZWxsOiBhbnksXG4gICAgZm9ybWF0dGVyUGFyYW1zOiBhbnksXG4gICAgb25SZW5kZXJlZDogYW55LFxuICAgIGNvbHVtbk5hbWU6IGFueVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgdmFyIGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFyIHRpdGxlID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJcIiwge1xuICAgICAgaW5uZXJIVE1MOiBjZWxsLmdldFZhbHVlKCksXG4gICAgfSk7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLmdldEhlYWRlckFjdGlvbnMoY29sdW1uTmFtZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLm9ubW91c2Vkb3duID0gKGU6IGFueSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBwcml2YXRlIGdldEhlYWRlckFjdGlvbnMoY29sdW1uTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS10YWJsZV9fYWN0aW9uLWNvbnRhaW5lclwiXG4gICAgKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKGNvbnRhaW5lciwgXCJjb2x1bW5cIiwgeyBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lIH0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29sdW1ucygpOiBBcnJheTxhbnk+IHtcbiAgICB2YXIgbWluQ29sdW1uV2lkdGggPVxuICAgICAgdGhpcy5DT0xVTU5fTUlOX1dJRFRIID4gdGhpcy5vcHRpb25zLmNvbHVtbk1pbldpZHRoXG4gICAgICAgID8gdGhpcy5DT0xVTU5fTUlOX1dJRFRIXG4gICAgICAgIDogdGhpcy5vcHRpb25zLmNvbHVtbk1pbldpZHRoO1xuICAgIGNvbnN0IGNvbHVtbnM6IGFueSA9IHRoaXMuZ2V0QXZhaWxhYmxlQ29sdW1ucygpLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGQ6IGNvbHVtbi5uYW1lLFxuICAgICAgICB0aXRsZTogKHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnRpdGxlKSB8fCBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgIG1pbldpZHRoOiBtaW5Db2x1bW5XaWR0aCxcbiAgICAgICAgd2lkdGg6IGNvbHVtbi53aWR0aCxcbiAgICAgICAgd2lkdGhTaHJpbms6ICFjb2x1bW4ud2lkdGggPyAxIDogMCxcbiAgICAgICAgdmlzaWJsZTogdGhpcy5pc0NvbHVtblZpc2libGUoY29sdW1uKSxcbiAgICAgICAgaGVhZGVyU29ydDogZmFsc2UsXG4gICAgICAgIHRpdGxlRm9ybWF0dGVyOiAoY2VsbDogYW55LCBmb3JtYXR0ZXJQYXJhbXM6IGFueSwgb25SZW5kZXJlZDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGVGb3JtYXR0ZXIoXG4gICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgZm9ybWF0dGVyUGFyYW1zLFxuICAgICAgICAgICAgb25SZW5kZXJlZCxcbiAgICAgICAgICAgIGNvbHVtbi5uYW1lXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgLy8gYWRkIHNwZWNpYWwgY29sdW1uIChjb2xsYXBzZS9leHBhbmQpXG4gICAgY29sdW1ucy51bnNoaWZ0KHtcbiAgICAgIGZpZWxkOiBcIlwiLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBkb3dubG9hZDogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgd2lkdGg6IHRoaXMub3B0aW9ucy5hY3Rpb25zQ29sdW1uV2lkdGgsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgIHN1cGVyLnNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZSwgdmlzaWJpbGl0eSk7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgaWYgKHZpc2liaWxpdHkgPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpXG4gICAgICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmhpZGVDb2x1bW4oY29sdW1uTmFtZSk7XG4gICAgICBlbHNlIHRoaXMudGFidWxhdG9yVGFibGVzLnNob3dDb2x1bW4oY29sdW1uTmFtZSk7XG4gICAgICB0aGlzLmxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgc3VwZXIuc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZSwgbG9jYXRpb24pO1xuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcbiAgICAgIGlmIChsb2NhdGlvbiA9PSBRdWVzdGlvbkxvY2F0aW9uLlJvdylcbiAgICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuaGlkZUNvbHVtbihjb2x1bW5OYW1lKTtcbiAgICAgIGVsc2UgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2hvd0NvbHVtbihjb2x1bW5OYW1lKTtcbiAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldENvbHVtbldpZHRoKGNvbHVtbk5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciB8IHN0cmluZykge1xuICAgIHN1cGVyLnNldENvbHVtbldpZHRoKGNvbHVtbk5hbWUsIHdpZHRoKTtcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICB2YXIgZGVmaW5pdGlvbiA9IHRoaXMudGFidWxhdG9yVGFibGVzXG4gICAgICAgIC5nZXRDb2x1bW4oY29sdW1uTmFtZSlcbiAgICAgICAgLmdldERlZmluaXRpb24oKTtcbiAgICAgIGRlZmluaXRpb24ud2lkdGggPSB3aWR0aDtcbiAgICAgIGRlZmluaXRpb24ud2lkdGhTaHJpbmsgPSAwO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRTb3J0KGNvbHVtbk5hbWUsIGRpcmVjdGlvbik7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0RmlsdGVyKGNvbHVtbk5hbWUsIFwibGlrZVwiLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHZhciBjdXN0b21GaWx0ZXIgPSAoZGF0YTogYW55LCBmaWx0ZXJQYXJhbXM6IGFueSkgPT4ge1xuICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRhdGFba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclBhcmFtcy52YWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0RmlsdGVyKGN1c3RvbUZpbHRlciwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRhYnVsYXRvclRhYmxlcy5nZXRQYWdlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0UGFnZU51bWJlcih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0UGFnZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRQYWdlU2l6ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0UGFnZVNpemUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkb3dubG9hZCh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5kb3dubG9hZChcbiAgICAgIHR5cGUsXG4gICAgICBgcmVzdWx0cy4ke3R5cGV9YCxcbiAgICAgICg8YW55PnRoaXMub3B0aW9ucy5kb3dubG9hZE9wdGlvbnMpW3R5cGVdXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBsYXlvdXQoaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMucmVkcmF3KGhhcmQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJ1bGF0b3JSb3cgZXh0ZW5kcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgaW5uZXJSb3c6IGFueVxuICApIHtcbiAgICBzdXBlcih0YWJsZSwgZXh0ZW5zaW9uc0NvbnRhaW5lciwgZGV0YWlsc0NvbnRhaW5lcik7XG4gIH1cblxuICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSb3cuZ2V0RWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIGdldFJvd0RhdGEoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldERhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lclJvdy5nZXRQb3NpdGlvbigpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLmlubmVyUm93LmRlbGV0ZSgpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG59XG4iLCJleHBvcnQgdmFyIF9fYXNzaWduID1cbiAgKDxhbnk+T2JqZWN0KVtcImFzc2lnblwiXSB8fFxuICBmdW5jdGlvbih0YXJnZXQ6IGFueSkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIHAgaW4gcylcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdGFyZ2V0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyh0aGlzQ2xhc3M6IGFueSwgYmFzZUNsYXNzOiBhbnkpIHtcbiAgZm9yICh2YXIgcCBpbiBiYXNlQ2xhc3MpXG4gICAgaWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShwKSkgdGhpc0NsYXNzW3BdID0gYmFzZUNsYXNzW3BdO1xuICBmdW5jdGlvbiBfXygpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gdGhpc0NsYXNzO1xuICB9XG4gIHRoaXNDbGFzcy5wcm90b3R5cGUgPVxuICAgIGJhc2VDbGFzcyA9PT0gbnVsbFxuICAgICAgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcylcbiAgICAgIDogKChfXy5wcm90b3R5cGUgPSBiYXNlQ2xhc3MucHJvdG90eXBlKSwgbmV3ICg8YW55Pl9fKSgpKTtcbn1cblxuZXhwb3J0IHZhciBfX3Jlc3QgPSBmdW5jdGlvbihzb3VyY2U6IGFueSwgZTogYW55KSB7XG4gIHZhciByZXN1bHQ6IGFueSA9IHt9O1xuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gc291cmNlKVxuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIHByb3BlcnR5TmFtZSkgJiZcbiAgICAgIGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpIDwgMFxuICAgIClcbiAgICAgIHJlc3VsdFtwcm9wZXJ0eU5hbWVdID0gc291cmNlW3Byb3BlcnR5TmFtZV07XG4gIGlmIChcbiAgICBzb3VyY2UgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdID09PSBcImZ1bmN0aW9uXCJcbiAgKVxuICAgIGZvciAoXG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgIHByb3BlcnR5U3ltYm9scyA9ICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0oc291cmNlKTtcbiAgICAgIGkgPCBwcm9wZXJ0eVN5bWJvbHMubGVuZ3RoO1xuICAgICAgaSsrXG4gICAgKVxuICAgICAgaWYgKGUuaW5kZXhPZihwcm9wZXJ0eVN5bWJvbHNbaV0pIDwgMClcbiAgICAgICAgcmVzdWx0W3Byb3BlcnR5U3ltYm9sc1tpXV0gPSBzb3VyY2VbcHJvcGVydHlTeW1ib2xzW2ldXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmRlY2xhcmUgdmFyIFJlZmxlY3Q6IGFueTtcblxuZXhwb3J0IHZhciBfX2RlY29yYXRlID0gZnVuY3Rpb24oXG4gIGRlY29yYXRvcnM6IGFueSxcbiAgdGFyZ2V0OiBhbnksXG4gIGtleTogYW55LFxuICBkZXNjOiBhbnlcbikge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgciA9XG4gICAgICBjIDwgM1xuICAgICAgICA/IHRhcmdldFxuICAgICAgICA6IGRlc2MgPT09IG51bGxcbiAgICAgICAgPyAoZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpKVxuICAgICAgICA6IGRlc2MsXG4gICAgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAgICBpZiAoKGQgPSBkZWNvcmF0b3JzW2ldKSlcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuIiwiZXhwb3J0IGNsYXNzIERvY3VtZW50SGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT4sXHJcbiAgICBpc1NlbGVjdGVkOiAob3B0aW9uOiB7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSA9PiBib29sZWFuLFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxyXG4gICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKG9wdGlvbiksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdC5vbmNoYW5nZSA9IGhhbmRsZXI7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnV0dG9uKFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZCxcclxuICAgIHRleHQgPSBcIlwiLFxyXG4gICAgY2xhc3NOYW1lID0gXCJzYS10b29sYmFyX19idXR0b25cIlxyXG4gICkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgY2xhc3NOYW1lLCB7XHJcbiAgICAgIGlubmVyVGV4dDogdGV4dCxcclxuICAgICAgb25jbGljazogaGFuZGxlcixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChcclxuICAgIHRhZ05hbWU6IHN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nID0gXCJcIixcclxuICAgIGF0dHJzPzogYW55XHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmICghIWF0dHJzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAoPGFueT5lbClba2V5XSA9IGF0dHJzW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdFbGVtZW50KHBhdGg6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInN2Z1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInVzZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWxlbS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXHJcbiAgICAgIFwiaHJlZlwiLFxyXG4gICAgICBcIiNzYS1zdmctXCIgKyBwYXRoXHJcbiAgICApO1xyXG4gICAgc3ZnRWxlbS5hcHBlbmRDaGlsZCh1c2VFbGVtKTtcclxuICAgIHJldHVybiBzdmdFbGVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdCdXR0b24ocGF0aDogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgY29uc3QgYnRuID0gPEhUTUxCdXR0b25FbGVtZW50PihcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNhLXRhYmxlX19zdmctYnV0dG9uXCIpXHJcbiAgICApO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQocGF0aCkpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnVG9nZ2xlQnV0dG9uKFxyXG4gICAgc3ZnUGF0aDE6IHN0cmluZyxcclxuICAgIHN2UHBhdGgyOiBzdHJpbmcsXHJcbiAgICB0ZXh0MTogc3RyaW5nLFxyXG4gICAgdGV4dDI6IHN0cmluZyxcclxuICAgIGhhbmRsZXIxOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBoYW5kbGVyMjogKGU6IGFueSkgPT4gYW55LFxyXG4gICAgc3RhdGUgPSBcImZpcnN0XCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvbiBzYS10b29sYmFyX19zdmctYnV0dG9uXCJcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmcxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdmdQYXRoMSk7XHJcbiAgICBjb25zdCBzdmcyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdlBwYXRoMik7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICAgIHN0YXRlID0gXCJzZWNvbmRcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMSk7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGhhbmRsZXIyKGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcInNlY29uZFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcImZpcnN0XCI7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gdGV4dDE7XHJcbiAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzdmcxKTtcclxuICAgICAgICBoYW5kbGVyMShlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgfSBlbHNlIGlmICgoc3RhdGUgPSBcInNlY29uZFwiKSkge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gdG9nZ2xlO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlucHV0KFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgICBkZWZhdWx0VmFsdWUgPSBcIlwiXHJcbiAgKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSA8SFRNTElucHV0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImlucHV0XCIsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBydW5uaW5nSW5Ccm93c2VyOiB0eXBlb2Ygd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIixcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93RG9tUmVuZGVyaW5nKCkge1xyXG4gIHJldHVybiBvcHRpb25zLnJ1bm5pbmdJbkJyb3dzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHppcEFycmF5cyhmaXJzdDogYW55W10sIHNlY29uZDogYW55W10pOiBhbnlbXVtdIHtcclxuICAgIGxldCB6aXBBcnJheTogYW55W10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oZmlyc3QubGVuZ3RoLCBzZWNvbmQubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgIHppcEFycmF5W2ldID0gW2ZpcnN0W2ldLCBzZWNvbmRbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHppcEFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnppcEFycmF5cyhcclxuICAgIHppcEFycmF5OiBhbnlbXVtdXHJcbiAgKTogeyBmaXJzdDogYW55W107IHNlY29uZDogYW55W10gfSB7XHJcbiAgICBsZXQgdHdvQXJyYXlzOiBhbnkgPSB7IGZpcnN0OiBbXSwgc2Vjb25kOiBbXSB9O1xyXG4gICAgemlwQXJyYXkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgdHdvQXJyYXlzLmZpcnN0W2ldID0gdmFsdWVbMF07XHJcbiAgICAgIHR3b0FycmF5cy5zZWNvbmRbaV0gPSB2YWx1ZVsxXTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHR3b0FycmF5cztcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBzb3J0RGljdGlvbmFyeShcclxuICAgIGtleXM6IGFueVtdLFxyXG4gICAgdmFsdWVzOiBhbnlbXSxcclxuICAgIGRlc2M6IGJvb2xlYW5cclxuICApOiB7IGtleXM6IGFueVtdOyB2YWx1ZXM6IGFueVtdIH0ge1xyXG4gICAgbGV0IGRpY3Rpb25hcnkgPSB0aGlzLnppcEFycmF5cyhrZXlzLCB2YWx1ZXMpO1xyXG4gICAgbGV0IGNvbXBhcmF0b3IgPSAoYTogYW55W10sIGI6IGFueVtdLCBhc2M6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhWzFdIDwgYlsxXSA/IDEgOiBhWzFdID09IGJbMV0gPyAwIDogLTE7XHJcbiAgICAgIHJldHVybiBhc2MgPyByZXN1bHQgOiByZXN1bHQgKiAtMTtcclxuICAgIH07XHJcbiAgICBkaWN0aW9uYXJ5LnNvcnQoKGE6IGFueVtdLCBiOiBhbnlbXSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGVzYyA/IGNvbXBhcmF0b3IoYSwgYiwgZmFsc2UpIDogY29tcGFyYXRvcihhLCBiKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGtleXNBbmRWYWx1ZXMgPSB0aGlzLnVuemlwQXJyYXlzKGRpY3Rpb25hcnkpO1xyXG4gICAgcmV0dXJuIHsga2V5czoga2V5c0FuZFZhbHVlcy5maXJzdCwgdmFsdWVzOiBrZXlzQW5kVmFsdWVzLnNlY29uZCB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAvIG1heFZhbHVlKSAqIDEwMDtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RhYnVsYXRvcl90YWJsZXNfXzsiXSwic291cmNlUm9vdCI6IiJ9