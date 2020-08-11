/*!
 * surveyjs - SurveyJS Analytics library v1.7.26
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
            var from = _this._columns.indexOf(_this._columns.filter(function (col) { return col.name == column.getField(); })[0]);
            var to = columns.indexOf(column) - 1;
            _this.moveColumn(from, to);
            _this.disableColumnReorder();
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
        if (!_this.options)
            _this.options = defaultOptions;
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
            paginationSize: 5,
            movableColumns: true,
            maxHeight: "100%",
            columns: columns,
            rowFormatter: this.rowFormatter,
            paginationButtonCount: this.options.paginationButtonCount,
            paginationElement: paginationElement,
            columnMoved: this.columnMovedCallback,
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
                    _this.tabulatorTables.download(type);
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
                widthShrink: 1,
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
        if (visibility == _config__WEBPACK_IMPORTED_MODULE_2__["ColumnVisibility"].Invisible)
            this.tabulatorTables.hideColumn(columnName);
        else
            this.tabulatorTables.showColumn(columnName);
        this.layout();
    };
    Tabulator.prototype.setColumnLocation = function (columnName, location) {
        _super.prototype.setColumnLocation.call(this, columnName, location);
        if (location == _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Row)
            this.tabulatorTables.hideColumn(columnName);
        else
            this.tabulatorTables.showColumn(columnName);
        this.layout();
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
        if (!this.tabulatorTables)
            return 1;
        return this.tabulatorTables.getPage();
    };
    Tabulator.prototype.setPageNumber = function (value) {
        this.tabulatorTables.setPage(value);
        _super.prototype.setPageNumber.call(this, value);
    };
    Tabulator.prototype.setPageSize = function (value) {
        _super.prototype.setPageSize.call(this, value);
        this.tabulatorTables.setPageSize(value);
    };
    Tabulator.prototype.download = function (type) {
        this.tabulatorTables.download(type, "results." + type, this.options.downloadOptions[type]);
    };
    Tabulator.prototype.layout = function () {
        this.tabulatorTables.redraw();
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
    TabulatorRow.prototype.getData = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZhcnNpLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvY29uZmlnLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9jb2x1bW5leHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9kZXRhaWxzZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvaGVhZGVyZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvcm93ZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy90YWJ1bGF0b3Iuc2Nzcz80ZmU3Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlRhYnVsYXRvclwiLFwiY29tbW9uanMyXCI6XCJ0YWJ1bGF0b3ItdGFibGVzXCIsXCJjb21tb25qc1wiOlwidGFidWxhdG9yLXRhYmxlc1wiLFwiYW1kXCI6XCJ0YWJ1bGF0b3ItdGFibGVzXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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Q0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFRLEVBQUUsQ0FBUTtZQUNqQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFFYSx1QkFBWSxHQUExQixVQUEyQixLQUFhLEVBQUUsUUFBZ0I7UUFDeEQsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNJRCx5RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJzdXJ2ZXkuYW5hbHl0aWNzLnRhYnVsYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwidGFidWxhdG9yLXRhYmxlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUFuYWx5dGljc1RhYnVsYXRvclwiLCBbXCJzdXJ2ZXktY29yZVwiLCBcInRhYnVsYXRvci10YWJsZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3VydmV5QW5hbHl0aWNzVGFidWxhdG9yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIiksIHJlcXVpcmUoXCJ0YWJ1bGF0b3ItdGFibGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlBbmFseXRpY3NUYWJ1bGF0b3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0sIHJvb3RbXCJUYWJ1bGF0b3JcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGFidWxhdG9yX3RhYmxlc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cmllcy90YWJ1bGF0b3IudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZGV0YWlsXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZHJhZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEzIDVsLTEgMSAxIDFIOVYzbDEgMSAxLTEtMy0zLTMgMyAxIDEgMS0xdjRIM2wxLTEtMS0xLTMgMyAzIDMgMS0xLTEtMWg0djRsLTEtMS0xIDEgMyAzIDMtMy0xLTEtMSAxVjloNGwtMSAxIDEgMSAzLTN6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctaGlkZVxcXCI+PHBhdGggY2xhc3M9XFxcInN0MVxcXCIgZD1cXFwiTTEyLjc5IDQuMkwxNiAxbC0xLTEtMy4zMiAzLjMyQzEwLjU3IDIuNTUgOS4zMiAyIDggMiAzLjYzIDIgMCA3Ljk3IDAgNy45N3MxLjI3IDIuMSAzLjIxIDMuODJsLTMuMjMgMy4yMy45OC45OCAzLjM1LTMuMzRDNS40MSAxMy40NCA2LjY3IDE0IDggMTRjNC4zNyAwIDgtNiA4LTZzLTEuMjctMi4wOS0zLjIxLTMuOHpNMiA3Ljk3YzEuMDctMS40NyAzLjYxLTQgNi00IC44IDAgMS42LjI3IDIuMzUuNjhsLS43OC43OGMtLjQ2LS4yOS0uOTktLjQ2LTEuNTctLjQ2LTEuNjYgMC0zIDEuMzQtMyAzIDAgLjU4LjE3IDEuMTEuNDYgMS41N2wtLjk3Ljk3QTEzLjM4IDEzLjM4IDAgMCAxIDIgNy45N3ptNiA0Yy0uOCAwLTEuNTktLjI3LTIuMzMtLjY3bC43OC0uNzdjLjQ1LjI3Ljk4LjQ0IDEuNTUuNDQgMS42NiAwIDMtMS4zNCAzLTMgMC0uNTctLjE3LTEuMDktLjQ0LTEuNTVsLjk4LS45OGMxLjExLjg3IDIuMDEgMS45MSAyLjQ2IDIuNTItMS4wNyAxLjQ4LTMuNjEgNC4wMS02IDQuMDF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXByaXZhdGVcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCI0XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCA4Yy0zLjMxIDAtNiAyLjczLTYgNC42N1M1LjI3IDE1IDggMTVzNi0uNCA2LTIuMzNTMTEuMzEgOCA4IDh6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXB1YmxpY1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMCA1YzAgLjM0LS4wNi42Ny0uMTQuOTkuMDUgMCAuMDkuMDEuMTQuMDEgMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTNDOC45NyAwIDguMDcuNTIgNy41MyAxLjMgOC45OCAxLjkxIDEwIDMuMzMgMTAgNXpNNiA5Yy0zLjMxIDAtNiAyLjczLTYgNC42N1MzLjI3IDE2IDYgMTZzNi0uNCA2LTIuMzNTOS4zMSA5IDYgOXpNMTAgN2MtLjE5IDAtLjM4LjAxLS41Ny4wM2E0LjE0IDQuMTQgMCAwIDEtMS4zNyAxLjM5YzMgLjgzIDUuMjMgMy4zMSA1LjQyIDUuMjggMS40NC0uMzEgMi41Mi0uOTIgMi41Mi0yLjAzQzE2IDkuNzQgMTMuMzEgNyAxMCA3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1zb3J0aW5nXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCAzbDIgMiAxLTEtMy0zLTMgMyAxIDF6TTggMTNsLTItMi0xIDEgMyAzIDMtMy0xLTF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PC9zdmc+XCI7IiwiZXhwb3J0ICogZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuLy9sb2NhbGl6YXRpb25cbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mYXJzaVwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZyZW5jaFwiO1xuXG4vL2V4dGVuc2lvbnNcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2NvbHVtbmV4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2RldGFpbHNleHRlbnNpb25zXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuLi90YWJsZXMvdGFidWxhdG9yXCI7XG5leHBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zXCI7XG5leHBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGVuZ2xpc2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICByZW1vdmVSb3dzOiBcIlJlbW92ZSByb3dzXCIsXG4gIHNob3dMYWJlbDogXCJTaG93XCIsXG4gIGVudHJpZXNMYWJlbDogXCJlbnRyaWVzXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0cyBpbiB0YWJsZVwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhY2tlZCBCYXJcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwiSGlkZVwiLFxuICBzaG93QnV0dG9uOiBcIlNob3dcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNoYW5nZUxvY2FsZTogXCJDaGFuZ2UgTG9jYWxlXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHRcIixcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXG4gIGRlc2NPcmRlcjogXCJEZXNjZW5kaW5nXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk90aGVyIGl0ZW1zIGFuZCBjb21tZW50c1wiLFxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vbG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcIkVuZ2xpc2hcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZmFyc2lTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCLar9ix2YjZhyDYqNmG2K/bjCDYqNinXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwi2K3YsNmBINqv2LHZiNmHXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCLYp9mG2KrYrtin2KhcIixcbiAgaGlkZUNvbHVtbjogXCLZhdiu2YHbjCDaqdix2K/ZhiDYs9iq2YjZhlwiLFxuICBzaG93Q29sdW1uOiBcItmG2YXYp9uM2LQg2LPYqtmI2YZcIixcbiAgbW92ZVRvRGV0YWlsOiBcItin2YbYqtmC2KfZhCDYqNmHINis2LLYptuM2KfYqlwiLFxuICBzaG93QXNDb2x1bW46IFwi2YbZhdin24zYtCDYqNmHINi52YbZiNin2YYg2LPYqtmI2YZcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcItmF2KrZiNmGINiv2LEg2KzYr9mI2YRcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwi2KfYqNixINqp2YTZhdin2KpcIixcbiAgY2hhcnRUeXBlX2JhcjogXCLZhduM2YTZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwi2K/Yp9io2LHZhyDYp9uMKHBpZSlcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwi2b7Ysdin2qnZhtiv2q/bjChTY2F0dGVyKVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi2LnZgtix2KjZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwi2YXYrtmB24xcIixcbiAgcmVzZXRGaWx0ZXI6IFwi2KjYp9iy2YbYtNin2YbbjCDZgduM2YTYqtix2YfYp1wiLFxuICBjbGVhckJ1dHRvbjogXCLZvtin2qkg2qnYsdiv2YZcIixcbiAgYWRkRWxlbWVudDogXCLYp9mG2KrYrtin2Kgg2LPZiNin2YQg2KjYsdin24wg2YbZhdin24zYtC4uLlwiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZhXCJdID0gZmFyc2lTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZmFcIl0gPSBcIkZhcnNpKFBlcnNpYW4pXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBmcmVuY2hTdHJpbmdzID0ge1xyXG4gICAgZ3JvdXBCdXR0b246IFwiR3JvdXBlclwiLFxyXG4gICAgdW5ncm91cEJ1dHRvbjogXCJEaXNzb2NpZXJcIixcclxuICAgIHNlbGVjdEJ1dHRvbjogXCJTw6lsZWN0aW9ubmVyXCIsXHJcbiAgICBoaWRlQ29sdW1uOiBcIk1hc3F1ZXIgY29sb25uZVwiLFxyXG4gICAgc2hvd0NvbHVtbjogXCJBZmZpY2hlciBjb2xvbm5lXCIsXHJcbiAgICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwcml2w6lcIixcclxuICAgIG1ha2VQdWJsaWNDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHVibGljXCIsXHJcbiAgICBtb3ZlVG9EZXRhaWw6IFwiRMOpcGxhY2VyIHZlcnMgZMOpdGFpbHNcIixcclxuICAgIHNob3dBc0NvbHVtbjogXCJBZmZpY2hlciBlbiBjb2xvbm5lXCIsXHJcbiAgICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dGVzIGVuIHRhYmxlXCIsXHJcbiAgICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJOdWFnZXMgZGUgbW90c1wiLFxyXG4gICAgY2hhcnRUeXBlX2JhcjogXCJCYXJyZXNcIixcclxuICAgIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIkJhcnJlcyBlbXBpbMOpZXNcIixcclxuICAgIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJBbm5lYXVcIixcclxuICAgIGNoYXJ0VHlwZV9waWU6IFwiU2VjdGV1cnNcIixcclxuICAgIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIk51YWdlcyBkZSBwb2ludHNcIixcclxuICAgIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gICAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXNcIixcclxuICAgIGhpZGVCdXR0b246IFwiTWFzcXVlclwiLFxyXG4gICAgcmVzZXRGaWx0ZXI6IFwiUmFmcmFpY2hpciBGaWx0cmVzXCIsXHJcbiAgICBjbGVhckJ1dHRvbjogXCJSYWZyYWljaGlyXCIsXHJcbiAgICBhZGRFbGVtZW50OiBcIkNob2lzaXIgbGEgcXVlc3Rpb24gw6AgYWZmaWNoZXIuLi5cIixcclxuICAgIGRlZmF1bHRPcmRlcjogXCJEZWZhdXRcIixcclxuICAgIGFzY09yZGVyOiBcIkFzY2VuZGFudFwiLFxyXG4gICAgZGVzY09yZGVyOiBcIkRlc2NlbmRhbnRcIixcclxuICAgIHNob3dNaW5vckNvbHVtbnM6IFwiQWZmaWNoZXIgbGVzIGNvbG9ubmVzIG1pbmV1cmVzXCJcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hTdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmclwiXSA9IFwiRnJlbmNoXCI7IiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xuXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxuICBkZWZhdWx0TG9jYWxlVmFsdWU6IFwiZW5cIixcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgc3VwcG9ydGVkTG9jYWxlczogPEFycmF5PGFueT4+W10sXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcbiAgICAgID8gXCJcIlxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGN1cnJlbnRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgZGVmYXVsdExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgZ2V0TG9jYWxlczogZnVuY3Rpb24oKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZExvY2FsZXMgJiYgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzLnNvcnQoKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcImVuZ2xpc2hcIjtcbiIsImV4cG9ydCBlbnVtIENvbHVtblZpc2liaWxpdHkge1xuICBWaXNpYmxlLFxuICBJbnZpc2libGUsXG4gIFB1YmxpY0ludmlzaWJsZSxcbn1cbmV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24ge1xuICBDb2x1bW4sXG4gIFJvdyxcbn1cbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHtcbiAgVGV4dCxcbiAgRmlsZUxpbmssXG4gIEltYWdlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xuICB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5O1xuICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTdGF0ZSB7XG4gIGxvY2FsZTogc3RyaW5nO1xuICBlbGVtZW50czogSVRhYmxlQ29sdW1uW107XG59XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImRyYWdcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIlxuICAgICk7XG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJkcmFnXCIpKTtcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGFibGUuZW5hYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJzb3J0XCIsXG4gIHZpc2libGVJbmRleDogMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xuICAgIGNvbnN0IGFzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpO1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJzb3J0aW5nXCIpO1xuICAgIGJ0bi50aXRsZSA9IFwiXCI7XG4gICAgdmFyIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcbiAgICAgICAgYnRuLnRpdGxlID0gZGVzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGFzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgICAgfVxuICAgICAgdGFibGUuc29ydEJ5Q29sdW1uKG9wdGlvbnMuY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiaGlkZVwiLFxuICB2aXNpYmxlSW5kZXg6IDIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XG4gICAgYnRuLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVDb2x1bW5cIik7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtb3ZldG9kZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJtb3ZldG9kZXRhaWxzXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRhYmxlLnNldENvbHVtbkxvY2F0aW9uKG9wdGlvbnMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiA0LFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIHZhciBlbCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZmlsdGVyXCIsXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcbiAgICApO1xuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlbC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUNvbHVtbkZpbHRlcihvcHRpb25zLmNvbHVtbk5hbWUsIGVsLnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBlbDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtYWtlcHVibGljXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWtlUHJpdmF0ZVN2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHJpdmF0ZVwiKTtcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XG4gICAgdmFyIGN1cnJlbnRWaXNpYmlsaXR5ID0gdGFibGUuZ2V0Q29sdW1uVmlzaWJpbGl0eShvcHRpb25zLmNvbHVtbk5hbWUpO1xuICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVByaXZhdGVTdmcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHVibGljU3ZnKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGN1cnJlbnRWaXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZSkge1xuICAgICAgICBjdXJyZW50VmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRWaXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICB9XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgY3VycmVudFZpc2liaWxpdHkpO1xuICAgICAgdXBkYXRlU3RhdGUoY3VycmVudFZpc2liaWxpdHkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZSh2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSB7XG4gICAgICBjb25zdCBpc1ByaXZhdGUgPSB2aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZTtcbiAgICAgIGlmIChpc1ByaXZhdGUpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b24gc2EtdGFibGVfX3N2Zy1idXR0b24tLWFjdGl2ZVwiO1xuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVB1YmxpY0NvbHVtblwiKTtcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbWFrZVB1YmxpY1N2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiO1xuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVByaXZhdGVDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbWFrZVB1YmxpY1N2Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZVJvdyB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgRGV0YWlscyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJpdmF0ZSByb3c6IFRhYmxlUm93LFxuICAgIHByb3RlY3RlZCB0YXJnZXROb2RlOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB2YXIgZGV0YWlsc1RhYmxlID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwidGFibGVcIixcbiAgICAgIFwic2EtdGFibGVfX2RldGFpbC10YWJsZVwiXG4gICAgKTtcbiAgICB0aGlzLmRldGFpbHNUYWJsZSA9IGRldGFpbHNUYWJsZTtcbiAgICB0aGlzLnRhYmxlLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5hZGQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgZGV0YWlsc1RhYmxlOiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGxvY2F0aW9uID0gXCJkZXRhaWxzXCI7XG5cbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB2YXIgcm93czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICAgIHRoaXMudGFibGUuY29sdW1uc1xuICAgICAgLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubG9jYXRpb24gPT09IFF1ZXN0aW9uTG9jYXRpb24uUm93ICYmIGNvbHVtbilcbiAgICAgIC5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgdmFyIHJvdyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNhLXRhYmxlX19kZXRhaWxcIik7XG4gICAgICAgIHZhciB0ZDEgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIiwgXCJcIiwge1xuICAgICAgICAgIGlubmVySFRNTDogY29sdW1uLmRpc3BsYXlOYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRkMiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQyLnRleHRDb250ZW50ID0gdGhpcy5yb3cuZ2V0RGF0YSgpW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgdmFyIHRkMyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uKGNvbHVtbi5uYW1lKSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgfSk7XG4gICAgdmFyIHJvdyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNhLXRhYmxlX19kZXRhaWxcIik7XG4gICAgdmFyIHRkID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHsgY29sU3BhbjogMyB9KTtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGhpcy50YWJsZSk7XG4gICAgZXh0ZW5zaW9ucy5yZW5kZXIodGQsIFwiZGV0YWlsc1wiLCB7IHJvdzogdGhpcy5yb3cgfSk7XG4gICAgaWYgKHRkLmNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgcm93cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuZGV0YWlsc1RhYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTaG93QXNDb2x1bW5CdXR0b24gPSAoY29sdW1uTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyYXlcIixcbiAgICAgIHsgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0FzQ29sdW1uXCIpIH1cbiAgICApO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnRhYmxlLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgaWYgKCEhdGhpcy5kZXRhaWxzVGFibGUucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5kZXRhaWxzVGFibGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IENvbHVtblZpc2liaWxpdHkgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcImZpbHRlclwiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBpbnB1dCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZ2xvYmFsLWZpbHRlciBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLFxuICAgICAgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlclBsYWNlaG9sZGVyXCIpXG4gICAgKTtcbiAgICBpbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUZpbHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGlucHV0O1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3djb2x1bW5cIixcbiAgdmlzaWJsZUluZGV4OiAyLFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic2VsZWN0XCIsXG4gICAgICBcInNhLXRhYmxlX19zaG93LWNvbHVtbiBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gdGFibGUuY29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChjb2x1bW46IGFueSkgPT4gY29sdW1uLnZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlXG4gICAgICApO1xuICAgICAgaWYgKGhpZGRlbkNvbHVtbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIGRyb3Bkb3duLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgIHRleHQ6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93Q29sdW1uXCIpLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICAgIGhpZGRlbkNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBhbnkpID0+IHtcbiAgICAgICAgdmFyIHRleHQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgdGl0bGU6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLm5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJvcGRvd24ub25jaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuICAgICAgdGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eSh2YWwsIENvbHVtblZpc2liaWxpdHkuVmlzaWJsZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgdmFyIG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICB0YWJsZS5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5hZGQob25WaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKTtcblxuICAgIHRoaXMub25EZXN0cm95ID0gKCkgPT4ge1xuICAgICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQucmVtb3ZlKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gZHJvcGRvd247XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiaGVhZGVyXCIsXG4gIG5hbWU6IFwic2hvd2VudHJpZXNcIixcbiAgdmlzaWJsZUluZGV4OiAzLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgZnVuY3Rpb24gZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgIGNvbnN0IGVsID0gPEhUTUxTZWxlY3RFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICB2YXIgb3B0aW9uc1ZhbHVlcyA9IFtcIjFcIiwgXCI1XCIsIFwiMTBcIiwgXCIyNVwiLCBcIjUwXCIsIFwiNzVcIiwgXCIxMDBcIl07XG4gICAgICBvcHRpb25zVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICB0ZXh0OiB2YWwsXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBlbC52YWx1ZSA9IFN0cmluZyh0YWJsZS5nZXRQYWdlU2l6ZSgpKTtcblxuICAgICAgZWwub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHRhYmxlLnNldFBhZ2VTaXplKE51bWJlcihlbC52YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvckNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS10YWJsZV9fZW50cmllc1wiXG4gICAgKTtcbiAgICBjb25zdCBzaG93U3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLXJpZ2h0XCIsXG4gICAgICB7XG4gICAgICAgIGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dMYWJlbFwiKSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGVudHJpZXNTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3BhblwiLFxuICAgICAgXCJzYS10YWJsZV9fZW50cmllcy1sYWJlbCBzYS10YWJsZV9fZW50cmllcy1sYWJlbC0tbGVmdFwiLFxuICAgICAge1xuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJlbnRyaWVzTGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcblxuICAgIHNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dTcGFuKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRFbnRyaWVzRHJvcGRvd24odGFibGUpKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyaWVzU3Bhbik7XG4gICAgcmV0dXJuIHNlbGVjdG9yQ29udGFpbmVyO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInJlbW92ZXJvd3NcIixcbiAgdmlzaWJsZUluZGV4OiAtMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGUpIHtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JlZW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb24gXCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlbW92ZVJvd3NcIikgfVxuICAgICk7XG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0YWJsZS5nZXRDcmVhdGVkUm93cygpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICBpZiAocm93LmdldElzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcImNoYW5nZWxvY2FsZVwiLFxuICB2aXNpYmxlSW5kZXg6IDEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGxvY2FsZXMgPSB0YWJsZS5nZXRMb2NhbGVzKCk7XG4gICAgaWYgKGxvY2FsZXMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZWwgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcInNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uXCIsIHt9KVxuICAgICk7XG4gICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYW5nZUxvY2FsZVwiKV0uY29uY2F0KFxuICAgICAgbG9jYWxlc1xuICAgICk7XG4gICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgdGV4dDogdmFsLFxuICAgICAgfSk7XG4gICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGFibGUubG9jYWxlID0gZWwudmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJyb3dcIixcbiAgbmFtZTogXCJkZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMCxcbiAgcmVuZGVyOiAoX3RhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiB7XG4gICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwiZGV0YWlsXCIpO1xuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TWlub3JDb2x1bW5zXCIpO1xuICAgIGJ0bi5jbGFzc05hbWUgKz0gXCIgc2EtdGFibGVfX3Jvdy1leHRlbnNpb25cIjtcbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG9wdGlvbnMucm93LnRvZ2dsZURldGFpbHMoKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwic2VsZWN0XCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKF90YWJsZSwgb3B0KSB7XG4gICAgdmFyIHJvdyA9IG9wdC5yb3c7XG4gICAgdmFyIGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIFwic2EtdGFibGVfX3Jvdy1leHRlbnNpb25cIixcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgfVxuICAgICk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHJvdy5nZXRJc1NlbGVjdGVkKCk7XG4gICAgY2hlY2tib3gub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByb3cudG9nZ2xlU2VsZWN0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5cbmludGVyZmFjZSBJVGFibGVFeHRlbnNpb24ge1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZpc2libGVJbmRleDogbnVtYmVyO1xuICByZW5kZXI6ICh0YWJsZTogVGFibGUsIG9wdDogYW55KSA9PiBIVE1MRWxlbWVudDtcbiAgZGVzdHJveT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUV4dGVuc2lvbnMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlOiBUYWJsZSkge31cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0ZW5zaW9uczoge1xuICAgIFtsb2NhdGlvbjogc3RyaW5nXTogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPjtcbiAgfSA9IHt9O1xuICBwcml2YXRlIHJlbmRlcmVkRXh0ZW5zaW9uczogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPiA9IFtdO1xuXG4gIHB1YmxpYyByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsIGxvY2F0aW9uOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IFRhYmxlRXh0ZW5zaW9ucy5leHRlbnNpb25zW2xvY2F0aW9uXTtcbiAgICBpZiAoISFleHRlbnNpb25zKSB7XG4gICAgICBleHRlbnNpb25zID0gdGhpcy5zb3J0RXh0ZW5zaW9ucyhleHRlbnNpb25zKTtcbiAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiB7XG4gICAgICAgIGlmICghIWV4dGVuc2lvbi5yZW5kZXIpIHtcbiAgICAgICAgICB2YXIgYWN0aW9uID0gZXh0ZW5zaW9uLnJlbmRlcih0aGlzLnRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICBpZiAoISFhY3Rpb24pIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLnB1c2goZXh0ZW5zaW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgaWYgKCEhZXh0ZW5zaW9uLmRlc3Ryb3kpIGV4dGVuc2lvbi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlZEV4dGVuc2lvbnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFeHRlbnNpb24oZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb24pIHtcbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dKVxuICAgICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0gPSBbXTtcbiAgICB0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXS5wdXNoKGV4dGVuc2lvbik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZpbmRFeHRlbnNpb24oXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBhY3Rpb25OYW1lOiBzdHJpbmdcbiAgKTogSVRhYmxlRXh0ZW5zaW9uIHtcbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uc1tsb2NhdGlvbl0pIHJldHVybiBudWxsO1xuICAgIHZhciBleHRlbnNpb24gPSB0aGlzLmV4dGVuc2lvbnNbbG9jYXRpb25dLmZpbHRlcihmdW5jdGlvbiAoXG4gICAgICBleHRlbnNpb246IElUYWJsZUV4dGVuc2lvblxuICAgICkge1xuICAgICAgcmV0dXJuIGV4dGVuc2lvbi5uYW1lID09IGFjdGlvbk5hbWU7XG4gICAgfSlbMF07XG4gICAgcmV0dXJuIGV4dGVuc2lvbiB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0RXh0ZW5zaW9ucyhleHRlbnNpb25zOiBBcnJheTxJVGFibGVFeHRlbnNpb24+KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dGVuc2lvbnMpKSByZXR1cm47XG4gICAgcmV0dXJuIFtdXG4gICAgICAuY29uY2F0KGV4dGVuc2lvbnMuZmlsdGVyKChleHRlbnNpb24pID0+IGV4dGVuc2lvbi52aXNpYmxlSW5kZXggPj0gMCkpXG4gICAgICAuc29ydCgoZmlyc3RFeHRlbnNpb24sIHNlY29uZEV4dGVuc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gZmlyc3RFeHRlbnNpb24udmlzaWJsZUluZGV4IC0gc2Vjb25kRXh0ZW5zaW9uLnZpc2libGVJbmRleDtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgUXVlc3Rpb24sIEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQge1xuICBDb2x1bW5WaXNpYmlsaXR5LFxuICBRdWVzdGlvbkxvY2F0aW9uLFxuICBDb2x1bW5EYXRhVHlwZSxcbiAgSVRhYmxlU3RhdGUsXG4gIElUYWJsZUNvbHVtbixcbn0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBEZXRhaWxzIH0gZnJvbSBcIi4vZXh0ZW5zaW9ucy9kZXRhaWxzZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZSB7XG4gIHByb3RlY3RlZCB0YWJsZURhdGE6IGFueTtcbiAgcHJvdGVjdGVkIGV4dGVuc2lvbnM6IFRhYmxlRXh0ZW5zaW9ucztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IGFueSxcbiAgICBwcm90ZWN0ZWQgX2NvbHVtbnM6IEFycmF5PGFueT4gPSBbXSxcbiAgICBwdWJsaWMgaXNUcnVzdGVkQWNjZXNzOiBib29sZWFuXG4gICkge1xuICAgIGlmIChfY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1ucyhzdXJ2ZXkpO1xuICAgIH1cbiAgICB0aGlzLmluaXRUYWJsZURhdGEoZGF0YSk7XG4gICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSB0aGlzLnN1cnZleS5sb2NhbGU7XG5cbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG5cbiAgICB0aGlzLmV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRoaXMpO1xuICB9XG4gIHByb3RlY3RlZCByZW5kZXJSZXN1bHQ6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VTaXplOiBudW1iZXIgPSA1O1xuICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF9yb3dzOiBUYWJsZVJvd1tdID0gW107XG4gIHByb3RlY3RlZCBpc0NvbHVtblJlb3JkZXJFbmFibGVkOiBib29sZWFuO1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Sb3dSZW1vdmVkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHJvdzogVGFibGVSb3dcbiAgKSA9PiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHJlbmRlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IGFwcGx5Q29sdW1uRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBzb3J0QnlDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQ7XG5cbiAgcHVibGljIGVuYWJsZUNvbHVtblJlb3JkZXIoKSB7XG4gICAgdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlQ29sdW1uUmVvcmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYWdlTnVtYmVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VOdW1iZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VTaXplO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldENyZWF0ZWRSb3dzKCk6IFRhYmxlUm93W10ge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fcm93cyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDcmVhdGVkUm93cygpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICB0aGlzLl9yb3dzID0gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDb2x1bW5zID0gKHN1cnZleTogU3VydmV5TW9kZWwpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCkubWFwKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAocXVlc3Rpb24udGl0bGUgfHwgXCJcIikudHJpbSgpIHx8IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRhdGFUeXBlOlxuICAgICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJmaWxlXCJcbiAgICAgICAgICAgID8gQ29sdW1uRGF0YVR5cGUuVGV4dFxuICAgICAgICAgICAgOiBDb2x1bW5EYXRhVHlwZS5GaWxlTGluayxcbiAgICAgICAgdmlzaWJpbGl0eTpcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXG4gICAgICAgICAgICA/IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZVxuICAgICAgICAgICAgOiBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSxcbiAgICAgICAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgaXNDb2x1bW5WaXNpYmxlKGNvbHVtbjogYW55KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbHVtbi5sb2NhdGlvbiA9PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbiAmJlxuICAgICAgdGhpcy5pc1Zpc2libGUoY29sdW1uLnZpc2liaWxpdHkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1Zpc2libGUgPSAodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSAhPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpIHx8XG4gICAgICAoIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZSlcbiAgICApO1xuICB9O1xuXG4gIHB1YmxpYyBpc0F2YWlsYWJsZSA9ICh2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaXNUcnVzdGVkQWNjZXNzIHx8IHZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuUHVibGljSW52aXNpYmxlXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgZ2V0QXZhaWxhYmxlQ29sdW1ucyA9ICgpOiBBcnJheTxJVGFibGVDb2x1bW4+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uOiBJVGFibGVDb2x1bW4pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmlzQXZhaWxhYmxlKGNvbHVtbi52aXNpYmlsaXR5KTtcbiAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29sdW1ucyhjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+KSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0VGFibGVEYXRhKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLnRhYmxlRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHZhciBkYXRhSXRlbTogYW55ID0ge307XG4gICAgICB0aGlzLnN1cnZleS5kYXRhID0gaXRlbTtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSBpdGVtW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShjb2x1bW4ubmFtZSk7XG4gICAgICAgIGlmIChxdWVzdGlvbikge1xuICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IHF1ZXN0aW9uLmRpc3BsYXlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhSXRlbVtjb2x1bW4ubmFtZV0gPVxuICAgICAgICAgIHR5cGVvZiBkaXNwbGF5VmFsdWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGlzcGxheVZhbHVlXG4gICAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KGRpc3BsYXlWYWx1ZSkgfHwgXCJcIjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRhdGFJdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG1vdmVDb2x1bW4oZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XG4gICAgdmFyIGRlbGV0ZWRDb2x1bW5zID0gdGhpcy5fY29sdW1ucy5zcGxpY2UoZnJvbSwgMSk7XG4gICAgdGhpcy5fY29sdW1ucy5zcGxpY2UodG8sIDAsIGRlbGV0ZWRDb2x1bW5zWzBdKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZTogc3RyaW5nLCBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbikge1xuICAgIHRoaXMuY29sdW1ucy5maWx0ZXIoXG4gICAgICAoY29sdW1uKSA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZVxuICAgIClbMF0ubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgfSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdO1xuICAgIGNvbHVtbi52aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcbiAgICB0aGlzLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLmZpcmUodGhpcywge1xuICAgICAgY29sdW1uTmFtZTogY29sdW1uTmFtZSxcbiAgICAgIGNvbHVtblZpc2liaWxpdHk6IHZpc2liaWxpdHksXG4gICAgfSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nKTogQ29sdW1uVmlzaWJpbGl0eSB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdO1xuICAgIHJldHVybiBjb2x1bW4udmlzaWJpbGl0eTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVSb3cocm93OiBUYWJsZVJvdyk6IHZvaWQge1xuICAgIHZhciBpbmRleCA9IHRoaXMuX3Jvd3MuaW5kZXhPZihyb3cpO1xuICAgIHRoaXMuX3Jvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLm9uUm93UmVtb3ZlZC5maXJlKHRoaXMsIHsgcm93OiByb3cgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IGxvY2FsZSBvZiB0aGUgdGFibGUuXG4gICAqIElmIGxvY2FsZXMgbW9yZSB0aGFuIG9uZSwgdGhlIGxhbmd1YWdlIHNlbGVjdGlvbiBkcm9wZG93biB3aWxsIGJlIGFkZGVkIGluIHRoZSB0b29sYmFyXG4gICAqL1xuICBwdWJsaWMgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBsb2NhbGUgZm9yIHRhYmxlLlxuICAgKi9cbiAgcHVibGljIHNldCBsb2NhbGUobmV3TG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN1cnZleS5sb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMb2NhbGVzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5zdXJ2ZXkuZ2V0VXNlZExvY2FsZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaChoYXJkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICBpZiAoaGFyZCkge1xuICAgICAgICB0aGlzLmluaXRUYWJsZURhdGEodGhpcy5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHZhciB0YXJnZXROb2RlID0gdGhpcy5yZW5kZXJSZXN1bHQ7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVuZGVyKHRhcmdldE5vZGUpO1xuICAgICAgdGhpcy5zZXRQYWdlU2l6ZSh0aGlzLmN1cnJlbnRQYWdlU2l6ZSk7XG4gICAgICB0aGlzLnNldFBhZ2VOdW1iZXIodGhpcy5jdXJyZW50UGFnZU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhckNyZWF0ZWRSb3dzKCk7XG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcbiAgICB0aGlzLnJlbmRlclJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1JlbmRlcmVkKCkge1xuICAgIHJldHVybiAhIXRoaXMucmVuZGVyUmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUgZ2V0dGVyLlxuICAgKi9cbiAgcHVibGljIGdldCBzdGF0ZSgpOiBJVGFibGVTdGF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsZTogbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUsXG4gICAgICBlbGVtZW50czogW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpLFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUgc2V0dGVyLlxuICAgKi9cbiAgcHVibGljIHNldCBzdGF0ZShuZXdTdGF0ZTogSVRhYmxlU3RhdGUpIHtcbiAgICBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSA9IG5ld1N0YXRlLmxvY2FsZTtcbiAgICB0aGlzLl9jb2x1bW5zID0gbmV3U3RhdGUuZWxlbWVudHM7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHZpenVhbGl6YXRpb24gcGFuZWwgc3RhdGUgY2hhbmdlZC5cbiAgICovXG4gIHB1YmxpYyBvblN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4oKTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhYmxlUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcbiAgICBwcm90ZWN0ZWQgZXh0ZW5zaW9uc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKHRhYmxlLCB0aGlzLCBkZXRhaWxzQ29udGFpbmVyKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRhYmxlKTtcbiAgICB0YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKHRoaXMub25Db2x1bW5Mb2NhdGlvbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cbiAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gIHB1YmxpYyBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XG4gIHByaXZhdGUgZGV0YWlsZWRSb3dDbGFzcyA9IFwic2EtdGFibGVfX2RldGFpbC1yb3dcIjtcbiAgcHJpdmF0ZSBpc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xuICBwdWJsaWMgb25Ub2dnbGVEZXRhaWxzOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBnZXREYXRhKCk6IGFueTtcbiAgcHVibGljIGFic3RyYWN0IGdldERhdGFQb3NpdGlvbigpOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKHRoaXMuZXh0ZW5zaW9uc0NvbnRhaW5lciwgXCJyb3dcIiwgeyByb3c6IHRoaXMgfSk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLm9wZW4oKTtcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLmRldGFpbGVkUm93Q2xhc3M7XG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEZXRhaWxzKCkge1xuICAgIHRoaXMuZGV0YWlscy5jbG9zZSgpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kZXRhaWxlZFJvd0NsYXNzKTtcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURldGFpbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gICAgfSBlbHNlIHRoaXMub3BlbkRldGFpbHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9ICF0aGlzLmlzU2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUucmVtb3ZlUm93KHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gIH07XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQucmVtb3ZlKFxuICAgICAgdGhpcy5vbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrXG4gICAgKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMuZGVzdHJveSgpO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBUYWJsZSwgVGFibGVSb3cgfSBmcm9tIFwiLi90YWJsZVwiO1xyXG5pbXBvcnQgeyBTdXJ2ZXlNb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgXCIuL3RhYnVsYXRvci5zY3NzXCI7XHJcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmNvbnN0IFRhYnVsYXRvclRhYmxlcyA9IHJlcXVpcmUoXCJ0YWJ1bGF0b3ItdGFibGVzXCIpO1xyXG5cclxuaWYgKCEhZG9jdW1lbnQpIHtcclxuICBjb25zdCBzdmdUZW1wbGF0ZSA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4uL3N2Z2J1bmRsZS5odG1sXCIpO1xyXG4gIGNvbnN0IHRlbXBsYXRlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZW1wbGF0ZUhvbGRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgdGVtcGxhdGVIb2xkZXIuaW5uZXJIVE1MID0gc3ZnVGVtcGxhdGU7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUhvbGRlcik7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRG93bmxvYWRPcHRpb25zIHtcclxuICBwZGY/OiBhbnk7XHJcbiAgY3N2PzogYW55O1xyXG4gIHhsc3g/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJT3B0aW9ucyB7XHJcbiAgY29sdW1uTWluV2lkdGg6IG51bWJlcjtcclxuICBhY3Rpb25zQ29sdW1uV2lkdGg6IG51bWJlcjtcclxuICBwYWdpbmF0aW9uQnV0dG9uQ291bnQ6IG51bWJlcjtcclxuICBkb3dubG9hZE9wdGlvbnM6IElEb3dubG9hZE9wdGlvbnM7XHJcbn1cclxuXHJcbnZhciBkZWZhdWx0RG93bmxvYWRPcHRpb25zOiBJRG93bmxvYWRPcHRpb25zID0ge1xyXG4gIHBkZjoge1xyXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIiwgLy9zZXQgcGFnZSBvcmllbnRhdGlvbiB0byBwb3J0cmFpdFxyXG4gICAgYXV0b1RhYmxlOiB7XHJcbiAgICAgIC8vYWR2YW5jZWQgdGFibGUgc3R5bGluZ1xyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBmaWxsQ29sb3I6IFsyNiwgMTc5LCAxNDhdLFxyXG4gICAgICB9LFxyXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcclxuICAgICAgICBpZDogeyBmaWxsQ29sb3I6IDI1NSB9LFxyXG4gICAgICB9LFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiA2MCB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzdjogeyBpc1Zpc2libGU6IHRydWUsIGRlbGltaXRlcjogXCIsXCIgfSxcclxuICB4bHN4OiB7IGlzVmlzaWJsZTogdHJ1ZSwgc2hlZXROYW1lOiBcInJlc3VsdHNcIiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBkZWZhdWx0T3B0aW9uczogSU9wdGlvbnMgPSB7XHJcbiAgY29sdW1uTWluV2lkdGg6IDI0OCxcclxuICBkb3dubG9hZE9wdGlvbnM6IGRlZmF1bHREb3dubG9hZE9wdGlvbnMsXHJcbiAgcGFnaW5hdGlvbkJ1dHRvbkNvdW50OiAzLFxyXG4gIGFjdGlvbnNDb2x1bW5XaWR0aDogNjAsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVGFidWxhdG9yIGV4dGVuZHMgVGFibGUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcclxuICAgIGRhdGE6IEFycmF5PE9iamVjdD4sXHJcbiAgICBvcHRpb25zOiBJT3B0aW9ucyxcclxuICAgIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW10sXHJcbiAgICBpc1RydXN0ZWRBY2Nlc3MgPSBmYWxzZVxyXG4gICkge1xyXG4gICAgc3VwZXIoc3VydmV5LCBkYXRhLCBvcHRpb25zLCBfY29sdW1ucywgaXNUcnVzdGVkQWNjZXNzKTtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHRoaXMub3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBDT0xVTU5fTUlOX1dJRFRIID0gMTU1O1xyXG4gIHB1YmxpYyB0YWJ1bGF0b3JUYWJsZXM6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSB0YWJsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0YXJnZXROb2RlLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZSBzYS10YWJ1bGF0b3JcIjtcclxuICAgIHRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy50YWJsZURhdGE7XHJcblxyXG4gICAgdmFyIGhlYWRlciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzYS10YWJ1bGF0b3JfX2hlYWRlclwiKTtcclxuICAgIHZhciBwYWdpbmF0aW9uRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwic2EtdGFidWxhdG9yX19wYWdpbmF0aW9uLWNvbnRhaW5lclwiXHJcbiAgICApO1xyXG4gICAgdGhpcy50YWJsZUNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLnRhYmxlQ29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcyA9IG5ldyBUYWJ1bGF0b3JUYWJsZXModGhpcy50YWJsZUNvbnRhaW5lciwge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBsYXlvdXQ6IFwiZml0Q29sdW1uc1wiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBcImxvY2FsXCIsXHJcbiAgICAgIHBhZ2luYXRpb25TaXplOiA1LFxyXG4gICAgICBtb3ZhYmxlQ29sdW1uczogdHJ1ZSxcclxuICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgcm93Rm9ybWF0dGVyOiB0aGlzLnJvd0Zvcm1hdHRlcixcclxuICAgICAgcGFnaW5hdGlvbkJ1dHRvbkNvdW50OiB0aGlzLm9wdGlvbnMucGFnaW5hdGlvbkJ1dHRvbkNvdW50LFxyXG4gICAgICBwYWdpbmF0aW9uRWxlbWVudDogcGFnaW5hdGlvbkVsZW1lbnQsXHJcbiAgICAgIGNvbHVtbk1vdmVkOiB0aGlzLmNvbHVtbk1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgIHRvb2x0aXBzSGVhZGVyOiB0cnVlLFxyXG4gICAgICB0b29sdGlwczogKGNlbGw6IGFueSkgPT4gY2VsbC5nZXRWYWx1ZSgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZXh0ZW5zaW9uc0NvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwic2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25zXCJcclxuICAgICk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb3dubG9hZHNCYXIoKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZXh0ZW5zaW9uc0NvbnRhaW5lcik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnaW5hdGlvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5leHRlbnNpb25zLnJlbmRlcihleHRlbnNpb25zQ29udGFpbmVyLCBcImhlYWRlclwiKTtcclxuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0Tm9kZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRG93bmxvYWRzQmFyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHZhciBjcmVhdGVEb3dubG9hZEJ1dHRvbiA9ICh0eXBlOiBzdHJpbmcsIGNhcHRpb246IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcclxuICAgICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1zbWFsbCBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW5uZXJIVE1MOiBjYXB0aW9uLFxyXG4gICAgICAgICAgb25jbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5kb3dubG9hZCh0eXBlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gYnRuO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJkaXZcIixcclxuICAgICAgXCJzYS10YWJ1bGF0b3JfX2Rvd25sb2Fkcy1iYXJcIlxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZG93bmxvYWRPcHRpb25zLnhsc3guaXNWaXNpYmxlKSB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihcInhsc3hcIiwgXCJFeGNlbFwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRvd25sb2FkT3B0aW9ucy5wZGYuaXNWaXNpYmxlKSB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihcInBkZlwiLCBcIlBERlwiKSk7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRG93bmxvYWRCdXR0b24oXCJjc3ZcIiwgXCJDU1ZcIikpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuZGVzdHJveSgpO1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY29sdW1uTW92ZWRDYWxsYmFjayA9IChjb2x1bW46IGFueSwgY29sdW1uczogYW55W10pID0+IHtcclxuICAgIHZhciBmcm9tID0gdGhpcy5fY29sdW1ucy5pbmRleE9mKFxyXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcigoY29sKSA9PiBjb2wubmFtZSA9PSBjb2x1bW4uZ2V0RmllbGQoKSlbMF1cclxuICAgICk7XHJcbiAgICB2YXIgdG8gPSBjb2x1bW5zLmluZGV4T2YoY29sdW1uKSAtIDE7XHJcbiAgICB0aGlzLm1vdmVDb2x1bW4oZnJvbSwgdG8pO1xyXG4gICAgdGhpcy5kaXNhYmxlQ29sdW1uUmVvcmRlcigpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcm93Rm9ybWF0dGVyID0gKHJvdzogYW55KTogdm9pZCA9PiB7XHJcbiAgICB2YXIgdGFibGVSb3cgPSBuZXcgVGFidWxhdG9yUm93KFxyXG4gICAgICB0aGlzLFxyXG4gICAgICByb3cuZ2V0Q2VsbHMoKVswXS5nZXRFbGVtZW50KCksXHJcbiAgICAgIHJvdy5nZXRFbGVtZW50KCksXHJcbiAgICAgIHJvd1xyXG4gICAgKTtcclxuICAgIHRhYmxlUm93Lm9uVG9nZ2xlRGV0YWlscy5hZGQoKCkgPT4ge1xyXG4gICAgICByb3cubm9ybWFsaXplSGVpZ2h0KCk7XHJcbiAgICAgIHRoaXMubGF5b3V0KCk7XHJcbiAgICB9KTtcclxuICAgIHRhYmxlUm93LnJlbmRlcigpO1xyXG5cclxuICAgIHRoaXMuX3Jvd3MucHVzaCh0YWJsZVJvdyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXRUaXRsZUZvcm1hdHRlcihcclxuICAgIGNlbGw6IGFueSxcclxuICAgIGZvcm1hdHRlclBhcmFtczogYW55LFxyXG4gICAgb25SZW5kZXJlZDogYW55LFxyXG4gICAgY29sdW1uTmFtZTogYW55XHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB2YXIgdGl0bGUgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIlwiLCB7XHJcbiAgICAgIGlubmVySFRNTDogY2VsbC5nZXRWYWx1ZSgpLFxyXG4gICAgfSk7XHJcbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMuZ2V0SGVhZGVyQWN0aW9ucyhjb2x1bW5OYW1lKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb250YWluZXIub25tb3VzZWRvd24gPSAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVDb2x1bW5SZW9yZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRIZWFkZXJBY3Rpb25zKGNvbHVtbk5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwic2EtdGFibGVfX2FjdGlvbi1jb250YWluZXJcIlxyXG4gICAgKTtcclxuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIoY29udGFpbmVyLCBcImNvbHVtblwiLCB7IGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUgfSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbHVtbnMoKTogQXJyYXk8T2JqZWN0PiB7XHJcbiAgICB2YXIgbWluQ29sdW1uV2lkdGggPVxyXG4gICAgICB0aGlzLkNPTFVNTl9NSU5fV0lEVEggPiB0aGlzLm9wdGlvbnMuY29sdW1uTWluV2lkdGhcclxuICAgICAgICA/IHRoaXMuQ09MVU1OX01JTl9XSURUSFxyXG4gICAgICAgIDogdGhpcy5vcHRpb25zLmNvbHVtbk1pbldpZHRoO1xyXG4gICAgY29uc3QgY29sdW1uczogYW55ID0gdGhpcy5nZXRBdmFpbGFibGVDb2x1bW5zKCkubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaWVsZDogY29sdW1uLm5hbWUsXHJcbiAgICAgICAgdGl0bGU6IChxdWVzdGlvbiAmJiBxdWVzdGlvbi50aXRsZSkgfHwgY29sdW1uLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgIG1pbldpZHRoOiBtaW5Db2x1bW5XaWR0aCxcclxuICAgICAgICB3aWR0aFNocmluazogMSxcclxuICAgICAgICB2aXNpYmxlOiB0aGlzLmlzQ29sdW1uVmlzaWJsZShjb2x1bW4pLFxyXG4gICAgICAgIGhlYWRlclNvcnQ6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlRm9ybWF0dGVyOiAoY2VsbDogYW55LCBmb3JtYXR0ZXJQYXJhbXM6IGFueSwgb25SZW5kZXJlZDogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaXRsZUZvcm1hdHRlcihcclxuICAgICAgICAgICAgY2VsbCxcclxuICAgICAgICAgICAgZm9ybWF0dGVyUGFyYW1zLFxyXG4gICAgICAgICAgICBvblJlbmRlcmVkLFxyXG4gICAgICAgICAgICBjb2x1bW4ubmFtZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICAvLyBhZGQgc3BlY2lhbCBjb2x1bW4gKGNvbGxhcHNlL2V4cGFuZClcclxuICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgIGZpZWxkOiBcIlwiLFxyXG4gICAgICB0aXRsZTogXCJcIixcclxuICAgICAgZG93bmxvYWQ6IGZhbHNlLFxyXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxyXG4gICAgICB3aWR0aDogdGhpcy5vcHRpb25zLmFjdGlvbnNDb2x1bW5XaWR0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSB7XHJcbiAgICBzdXBlci5zZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWUsIHZpc2liaWxpdHkpO1xyXG4gICAgaWYgKHZpc2liaWxpdHkgPT0gQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpXHJcbiAgICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmhpZGVDb2x1bW4oY29sdW1uTmFtZSk7XHJcbiAgICBlbHNlIHRoaXMudGFidWxhdG9yVGFibGVzLnNob3dDb2x1bW4oY29sdW1uTmFtZSk7XHJcbiAgICB0aGlzLmxheW91dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcclxuICAgIHN1cGVyLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIGxvY2F0aW9uKTtcclxuICAgIGlmIChsb2NhdGlvbiA9PSBRdWVzdGlvbkxvY2F0aW9uLlJvdylcclxuICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuaGlkZUNvbHVtbihjb2x1bW5OYW1lKTtcclxuICAgIGVsc2UgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2hvd0NvbHVtbihjb2x1bW5OYW1lKTtcclxuICAgIHRoaXMubGF5b3V0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNldFNvcnQoY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNldEZpbHRlcihjb2x1bW5OYW1lLCBcImxpa2VcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGx5RmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBjdXN0b21GaWx0ZXIgPSAoZGF0YTogYW55LCBmaWx0ZXJQYXJhbXM6IGFueSkgPT4ge1xyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGRhdGFba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclBhcmFtcy52YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRGaWx0ZXIoY3VzdG9tRmlsdGVyLCB7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBhZ2VOdW1iZXIoKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy50YWJ1bGF0b3JUYWJsZXMpIHJldHVybiAxO1xyXG4gICAgcmV0dXJuIHRoaXMudGFidWxhdG9yVGFibGVzLmdldFBhZ2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdlTnVtYmVyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNldFBhZ2UodmFsdWUpO1xyXG4gICAgc3VwZXIuc2V0UGFnZU51bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZVNpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgc3VwZXIuc2V0UGFnZVNpemUodmFsdWUpO1xyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0UGFnZVNpemUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRvd25sb2FkKHR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuZG93bmxvYWQoXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGByZXN1bHRzLiR7dHlwZX1gLFxyXG4gICAgICAoPGFueT50aGlzLm9wdGlvbnMuZG93bmxvYWRPcHRpb25zKVt0eXBlXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsYXlvdXQoKSB7XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5yZWRyYXcoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJ1bGF0b3JSb3cgZXh0ZW5kcyBUYWJsZVJvdyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxyXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgcHJvdGVjdGVkIGlubmVyUm93OiBhbnlcclxuICApIHtcclxuICAgIHN1cGVyKHRhYmxlLCBleHRlbnNpb25zQ29udGFpbmVyLCBkZXRhaWxzQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldEVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldERhdGEoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldFBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5pbm5lclJvdy5kZWxldGUoKTtcclxuICAgIHN1cGVyLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIF9fYXNzaWduID1cbiAgKDxhbnk+T2JqZWN0KVtcImFzc2lnblwiXSB8fFxuICBmdW5jdGlvbih0YXJnZXQ6IGFueSkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIHAgaW4gcylcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdGFyZ2V0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyh0aGlzQ2xhc3M6IGFueSwgYmFzZUNsYXNzOiBhbnkpIHtcbiAgZm9yICh2YXIgcCBpbiBiYXNlQ2xhc3MpXG4gICAgaWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShwKSkgdGhpc0NsYXNzW3BdID0gYmFzZUNsYXNzW3BdO1xuICBmdW5jdGlvbiBfXygpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gdGhpc0NsYXNzO1xuICB9XG4gIHRoaXNDbGFzcy5wcm90b3R5cGUgPVxuICAgIGJhc2VDbGFzcyA9PT0gbnVsbFxuICAgICAgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcylcbiAgICAgIDogKChfXy5wcm90b3R5cGUgPSBiYXNlQ2xhc3MucHJvdG90eXBlKSwgbmV3ICg8YW55Pl9fKSgpKTtcbn1cblxuZXhwb3J0IHZhciBfX3Jlc3QgPSBmdW5jdGlvbihzb3VyY2U6IGFueSwgZTogYW55KSB7XG4gIHZhciByZXN1bHQ6IGFueSA9IHt9O1xuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gc291cmNlKVxuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIHByb3BlcnR5TmFtZSkgJiZcbiAgICAgIGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpIDwgMFxuICAgIClcbiAgICAgIHJlc3VsdFtwcm9wZXJ0eU5hbWVdID0gc291cmNlW3Byb3BlcnR5TmFtZV07XG4gIGlmIChcbiAgICBzb3VyY2UgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdID09PSBcImZ1bmN0aW9uXCJcbiAgKVxuICAgIGZvciAoXG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgIHByb3BlcnR5U3ltYm9scyA9ICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0oc291cmNlKTtcbiAgICAgIGkgPCBwcm9wZXJ0eVN5bWJvbHMubGVuZ3RoO1xuICAgICAgaSsrXG4gICAgKVxuICAgICAgaWYgKGUuaW5kZXhPZihwcm9wZXJ0eVN5bWJvbHNbaV0pIDwgMClcbiAgICAgICAgcmVzdWx0W3Byb3BlcnR5U3ltYm9sc1tpXV0gPSBzb3VyY2VbcHJvcGVydHlTeW1ib2xzW2ldXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmRlY2xhcmUgdmFyIFJlZmxlY3Q6IGFueTtcblxuZXhwb3J0IHZhciBfX2RlY29yYXRlID0gZnVuY3Rpb24oXG4gIGRlY29yYXRvcnM6IGFueSxcbiAgdGFyZ2V0OiBhbnksXG4gIGtleTogYW55LFxuICBkZXNjOiBhbnlcbikge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgciA9XG4gICAgICBjIDwgM1xuICAgICAgICA/IHRhcmdldFxuICAgICAgICA6IGRlc2MgPT09IG51bGxcbiAgICAgICAgPyAoZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpKVxuICAgICAgICA6IGRlc2MsXG4gICAgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAgICBpZiAoKGQgPSBkZWNvcmF0b3JzW2ldKSlcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuIiwiZXhwb3J0IGNsYXNzIERvY3VtZW50SGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT4sXHJcbiAgICBpc1NlbGVjdGVkOiAob3B0aW9uOiB7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSA9PiBib29sZWFuLFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxyXG4gICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKG9wdGlvbiksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdC5vbmNoYW5nZSA9IGhhbmRsZXI7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnV0dG9uKFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZCxcclxuICAgIHRleHQgPSBcIlwiLFxyXG4gICAgY2xhc3NOYW1lID0gXCJzYS10b29sYmFyX19idXR0b25cIlxyXG4gICkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgY2xhc3NOYW1lLCB7XHJcbiAgICAgIGlubmVyVGV4dDogdGV4dCxcclxuICAgICAgb25jbGljazogaGFuZGxlcixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChcclxuICAgIHRhZ05hbWU6IHN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nID0gXCJcIixcclxuICAgIGF0dHJzPzogYW55XHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmICghIWF0dHJzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAoPGFueT5lbClba2V5XSA9IGF0dHJzW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdFbGVtZW50KHBhdGg6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInN2Z1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInVzZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWxlbS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXHJcbiAgICAgIFwiaHJlZlwiLFxyXG4gICAgICBcIiNzYS1zdmctXCIgKyBwYXRoXHJcbiAgICApO1xyXG4gICAgc3ZnRWxlbS5hcHBlbmRDaGlsZCh1c2VFbGVtKTtcclxuICAgIHJldHVybiBzdmdFbGVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdCdXR0b24ocGF0aDogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgY29uc3QgYnRuID0gPEhUTUxCdXR0b25FbGVtZW50PihcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNhLXRhYmxlX19zdmctYnV0dG9uXCIpXHJcbiAgICApO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQocGF0aCkpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5wdXQoXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyID0gXCJcIixcclxuICAgIGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxuICApOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiaW5wdXRcIixcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIHJ1bm5pbmdJbkJyb3dzZXI6IHR5cGVvZiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiLFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEb21SZW5kZXJpbmcoKSB7XHJcbiAgcmV0dXJuIG9wdGlvbnMucnVubmluZ0luQnJvd3NlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgemlwQXJyYXlzKGZpcnN0OiBhbnlbXSwgc2Vjb25kOiBhbnlbXSk6IGFueVtdW10ge1xyXG4gICAgbGV0IHppcEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihmaXJzdC5sZW5ndGgsIHNlY29uZC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgemlwQXJyYXlbaV0gPSBbZmlyc3RbaV0sIHNlY29uZFtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gemlwQXJyYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuemlwQXJyYXlzKFxyXG4gICAgemlwQXJyYXk6IGFueVtdW11cclxuICApOiB7IGZpcnN0OiBhbnlbXTsgc2Vjb25kOiBhbnlbXSB9IHtcclxuICAgIGxldCB0d29BcnJheXM6IGFueSA9IHsgZmlyc3Q6IFtdLCBzZWNvbmQ6IFtdIH07XHJcbiAgICB6aXBBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICB0d29BcnJheXMuZmlyc3RbaV0gPSB2YWx1ZVswXTtcclxuICAgICAgdHdvQXJyYXlzLnNlY29uZFtpXSA9IHZhbHVlWzFdO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHdvQXJyYXlzO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNvcnREaWN0aW9uYXJ5KFxyXG4gICAga2V5czogYW55W10sXHJcbiAgICB2YWx1ZXM6IGFueVtdLFxyXG4gICAgZGVzYzogYm9vbGVhblxyXG4gICk6IHsga2V5czogYW55W107IHZhbHVlczogYW55W10gfSB7XHJcbiAgICBsZXQgZGljdGlvbmFyeSA9IHRoaXMuemlwQXJyYXlzKGtleXMsIHZhbHVlcyk7XHJcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFbMV0gPCBiWzFdID8gMSA6IGFbMV0gPT0gYlsxXSA/IDAgOiAtMTtcclxuICAgICAgcmV0dXJuIGFzYyA/IHJlc3VsdCA6IHJlc3VsdCAqIC0xO1xyXG4gICAgfTtcclxuICAgIGRpY3Rpb25hcnkuc29ydCgoYTogYW55W10sIGI6IGFueVtdKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZXNjID8gY29tcGFyYXRvcihhLCBiLCBmYWxzZSkgOiBjb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQga2V5c0FuZFZhbHVlcyA9IHRoaXMudW56aXBBcnJheXMoZGljdGlvbmFyeSk7XHJcbiAgICByZXR1cm4geyBrZXlzOiBrZXlzQW5kVmFsdWVzLmZpcnN0LCB2YWx1ZXM6IGtleXNBbmRWYWx1ZXMuc2Vjb25kIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlIC8gbWF4VmFsdWUpICogMTAwO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGFidWxhdG9yX3RhYmxlc19fOyJdLCJzb3VyY2VSb290IjoiIn0=