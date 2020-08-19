/*!
 * surveyjs - SurveyJS Analytics library v1.7.27
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZhcnNpLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvY29uZmlnLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9jb2x1bW5leHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9kZXRhaWxzZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvaGVhZGVyZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvcm93ZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy90YWJ1bGF0b3Iuc2Nzcz80ZmU3Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlRhYnVsYXRvclwiLFwiY29tbW9uanMyXCI6XCJ0YWJ1bGF0b3ItdGFibGVzXCIsXCJjb21tb25qc1wiOlwidGFidWxhdG9yLXRhYmxlc1wiLFwiYW1kXCI6XCJ0YWJ1bGF0b3ItdGFibGVzXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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QyxDQUFDLENBQUM7WUFDckQsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFRLEVBQUUsQ0FBUTtZQUNqQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFFYSx1QkFBWSxHQUExQixVQUEyQixLQUFhLEVBQUUsUUFBZ0I7UUFDeEQsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RMRCx5RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJzdXJ2ZXkuYW5hbHl0aWNzLnRhYnVsYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwidGFidWxhdG9yLXRhYmxlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUFuYWx5dGljc1RhYnVsYXRvclwiLCBbXCJzdXJ2ZXktY29yZVwiLCBcInRhYnVsYXRvci10YWJsZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3VydmV5QW5hbHl0aWNzVGFidWxhdG9yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIiksIHJlcXVpcmUoXCJ0YWJ1bGF0b3ItdGFibGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlBbmFseXRpY3NUYWJ1bGF0b3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0sIHJvb3RbXCJUYWJ1bGF0b3JcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGFidWxhdG9yX3RhYmxlc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cmllcy90YWJ1bGF0b3IudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZGV0YWlsXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZHJhZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEzIDVsLTEgMSAxIDFIOVYzbDEgMSAxLTEtMy0zLTMgMyAxIDEgMS0xdjRIM2wxLTEtMS0xLTMgMyAzIDMgMS0xLTEtMWg0djRsLTEtMS0xIDEgMyAzIDMtMy0xLTEtMSAxVjloNGwtMSAxIDEgMSAzLTN6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctaGlkZVxcXCI+PHBhdGggY2xhc3M9XFxcInN0MVxcXCIgZD1cXFwiTTEyLjc5IDQuMkwxNiAxbC0xLTEtMy4zMiAzLjMyQzEwLjU3IDIuNTUgOS4zMiAyIDggMiAzLjYzIDIgMCA3Ljk3IDAgNy45N3MxLjI3IDIuMSAzLjIxIDMuODJsLTMuMjMgMy4yMy45OC45OCAzLjM1LTMuMzRDNS40MSAxMy40NCA2LjY3IDE0IDggMTRjNC4zNyAwIDgtNiA4LTZzLTEuMjctMi4wOS0zLjIxLTMuOHpNMiA3Ljk3YzEuMDctMS40NyAzLjYxLTQgNi00IC44IDAgMS42LjI3IDIuMzUuNjhsLS43OC43OGMtLjQ2LS4yOS0uOTktLjQ2LTEuNTctLjQ2LTEuNjYgMC0zIDEuMzQtMyAzIDAgLjU4LjE3IDEuMTEuNDYgMS41N2wtLjk3Ljk3QTEzLjM4IDEzLjM4IDAgMCAxIDIgNy45N3ptNiA0Yy0uOCAwLTEuNTktLjI3LTIuMzMtLjY3bC43OC0uNzdjLjQ1LjI3Ljk4LjQ0IDEuNTUuNDQgMS42NiAwIDMtMS4zNCAzLTMgMC0uNTctLjE3LTEuMDktLjQ0LTEuNTVsLjk4LS45OGMxLjExLjg3IDIuMDEgMS45MSAyLjQ2IDIuNTItMS4wNyAxLjQ4LTMuNjEgNC4wMS02IDQuMDF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXByaXZhdGVcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCI0XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCA4Yy0zLjMxIDAtNiAyLjczLTYgNC42N1M1LjI3IDE1IDggMTVzNi0uNCA2LTIuMzNTMTEuMzEgOCA4IDh6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXB1YmxpY1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMCA1YzAgLjM0LS4wNi42Ny0uMTQuOTkuMDUgMCAuMDkuMDEuMTQuMDEgMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTNDOC45NyAwIDguMDcuNTIgNy41MyAxLjMgOC45OCAxLjkxIDEwIDMuMzMgMTAgNXpNNiA5Yy0zLjMxIDAtNiAyLjczLTYgNC42N1MzLjI3IDE2IDYgMTZzNi0uNCA2LTIuMzNTOS4zMSA5IDYgOXpNMTAgN2MtLjE5IDAtLjM4LjAxLS41Ny4wM2E0LjE0IDQuMTQgMCAwIDEtMS4zNyAxLjM5YzMgLjgzIDUuMjMgMy4zMSA1LjQyIDUuMjggMS40NC0uMzEgMi41Mi0uOTIgMi41Mi0yLjAzQzE2IDkuNzQgMTMuMzEgNyAxMCA3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1zb3J0aW5nXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCAzbDIgMiAxLTEtMy0zLTMgMyAxIDF6TTggMTNsLTItMi0xIDEgMyAzIDMtMy0xLTF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PC9zdmc+XCI7IiwiZXhwb3J0ICogZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuLy9sb2NhbGl6YXRpb25cbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mYXJzaVwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZyZW5jaFwiO1xuXG4vL2V4dGVuc2lvbnNcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2NvbHVtbmV4dGVuc2lvbnNcIjtcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2RldGFpbHNleHRlbnNpb25zXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuLi90YWJsZXMvdGFidWxhdG9yXCI7XG5leHBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zXCI7XG5leHBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGVuZ2xpc2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICByZW1vdmVSb3dzOiBcIlJlbW92ZSByb3dzXCIsXG4gIHNob3dMYWJlbDogXCJTaG93XCIsXG4gIGVudHJpZXNMYWJlbDogXCJlbnRyaWVzXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0cyBpbiB0YWJsZVwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhY2tlZCBCYXJcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwiSGlkZVwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJNYWtlIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJNYWtlIHB1YmxpY1wiLFxuICBzaG93QnV0dG9uOiBcIlNob3dcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNoYW5nZUxvY2FsZTogXCJDaGFuZ2UgTG9jYWxlXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHRcIixcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXG4gIGRlc2NPcmRlcjogXCJEZXNjZW5kaW5nXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk90aGVyIGl0ZW1zIGFuZCBjb21tZW50c1wiLFxuICBzaG93UGVyY2VudGFnZXM6IFwiU2hvdyBwZXJjZW50YWdlc1wiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwiSGlkZSBwZXJjZW50YWdlc1wiLFxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vbG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcIkVuZ2xpc2hcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZmFyc2lTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCLar9ix2YjZhyDYqNmG2K/bjCDYqNinXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwi2K3YsNmBINqv2LHZiNmHXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCLYp9mG2KrYrtin2KhcIixcbiAgaGlkZUNvbHVtbjogXCLZhdiu2YHbjCDaqdix2K/ZhiDYs9iq2YjZhlwiLFxuICBzaG93Q29sdW1uOiBcItmG2YXYp9uM2LQg2LPYqtmI2YZcIixcbiAgbW92ZVRvRGV0YWlsOiBcItin2YbYqtmC2KfZhCDYqNmHINis2LLYptuM2KfYqlwiLFxuICBzaG93QXNDb2x1bW46IFwi2YbZhdin24zYtCDYqNmHINi52YbZiNin2YYg2LPYqtmI2YZcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcItmF2KrZiNmGINiv2LEg2KzYr9mI2YRcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwi2KfYqNixINqp2YTZhdin2KpcIixcbiAgY2hhcnRUeXBlX2JhcjogXCLZhduM2YTZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwi2K/Yp9io2LHZhyDYp9uMKHBpZSlcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwi2b7Ysdin2qnZhtiv2q/bjChTY2F0dGVyKVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi2LnZgtix2KjZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwi2YXYrtmB24xcIixcbiAgcmVzZXRGaWx0ZXI6IFwi2KjYp9iy2YbYtNin2YbbjCDZgduM2YTYqtix2YfYp1wiLFxuICBjbGVhckJ1dHRvbjogXCLZvtin2qkg2qnYsdiv2YZcIixcbiAgYWRkRWxlbWVudDogXCLYp9mG2KrYrtin2Kgg2LPZiNin2YQg2KjYsdin24wg2YbZhdin24zYtC4uLlwiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZhXCJdID0gZmFyc2lTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZmFcIl0gPSBcIkZhcnNpKFBlcnNpYW4pXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBmcmVuY2hTdHJpbmdzID0ge1xyXG4gICAgZ3JvdXBCdXR0b246IFwiR3JvdXBlclwiLFxyXG4gICAgdW5ncm91cEJ1dHRvbjogXCJEaXNzb2NpZXJcIixcclxuICAgIHNlbGVjdEJ1dHRvbjogXCJTw6lsZWN0aW9ubmVyXCIsXHJcbiAgICBoaWRlQ29sdW1uOiBcIk1hc3F1ZXIgY29sb25uZVwiLFxyXG4gICAgc2hvd0NvbHVtbjogXCJBZmZpY2hlciBjb2xvbm5lXCIsXHJcbiAgICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwcml2w6lcIixcclxuICAgIG1ha2VQdWJsaWNDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHVibGljXCIsXHJcbiAgICBtb3ZlVG9EZXRhaWw6IFwiRMOpcGxhY2VyIHZlcnMgZMOpdGFpbHNcIixcclxuICAgIHNob3dBc0NvbHVtbjogXCJBZmZpY2hlciBlbiBjb2xvbm5lXCIsXHJcbiAgICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dGVzIGVuIHRhYmxlXCIsXHJcbiAgICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJOdWFnZXMgZGUgbW90c1wiLFxyXG4gICAgY2hhcnRUeXBlX2JhcjogXCJCYXJyZXNcIixcclxuICAgIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIkJhcnJlcyBlbXBpbMOpZXNcIixcclxuICAgIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJBbm5lYXVcIixcclxuICAgIGNoYXJ0VHlwZV9waWU6IFwiU2VjdGV1cnNcIixcclxuICAgIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIk51YWdlcyBkZSBwb2ludHNcIixcclxuICAgIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gICAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXNcIixcclxuICAgIGhpZGVCdXR0b246IFwiTWFzcXVlclwiLFxyXG4gICAgcmVzZXRGaWx0ZXI6IFwiUmFmcmFpY2hpciBGaWx0cmVzXCIsXHJcbiAgICBjbGVhckJ1dHRvbjogXCJSYWZyYWljaGlyXCIsXHJcbiAgICBhZGRFbGVtZW50OiBcIkNob2lzaXIgbGEgcXVlc3Rpb24gw6AgYWZmaWNoZXIuLi5cIixcclxuICAgIGRlZmF1bHRPcmRlcjogXCJEZWZhdXRcIixcclxuICAgIGFzY09yZGVyOiBcIkFzY2VuZGFudFwiLFxyXG4gICAgZGVzY09yZGVyOiBcIkRlc2NlbmRhbnRcIixcclxuICAgIHNob3dNaW5vckNvbHVtbnM6IFwiQWZmaWNoZXIgbGVzIGNvbG9ubmVzIG1pbmV1cmVzXCJcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hTdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmclwiXSA9IFwiRnJlbmNoXCI7IiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xuXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxuICBkZWZhdWx0TG9jYWxlVmFsdWU6IFwiZW5cIixcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgc3VwcG9ydGVkTG9jYWxlczogPEFycmF5PGFueT4+W10sXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcbiAgICAgID8gXCJcIlxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGN1cnJlbnRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgZGVmYXVsdExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgZ2V0TG9jYWxlczogZnVuY3Rpb24oKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZExvY2FsZXMgJiYgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzLnNvcnQoKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcImVuZ2xpc2hcIjtcbiIsImV4cG9ydCBlbnVtIENvbHVtblZpc2liaWxpdHkge1xuICBWaXNpYmxlLFxuICBJbnZpc2libGUsXG4gIFB1YmxpY0ludmlzaWJsZSxcbn1cbmV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24ge1xuICBDb2x1bW4sXG4gIFJvdyxcbn1cbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHtcbiAgVGV4dCxcbiAgRmlsZUxpbmssXG4gIEltYWdlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xuICB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5O1xuICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTdGF0ZSB7XG4gIGxvY2FsZTogc3RyaW5nO1xuICBlbGVtZW50czogSVRhYmxlQ29sdW1uW107XG59XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImRyYWdcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIlxuICAgICk7XG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJkcmFnXCIpKTtcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGFibGUuZW5hYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJzb3J0XCIsXG4gIHZpc2libGVJbmRleDogMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xuICAgIGNvbnN0IGFzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpO1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJzb3J0aW5nXCIpO1xuICAgIGJ0bi50aXRsZSA9IFwiXCI7XG4gICAgdmFyIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcbiAgICAgICAgYnRuLnRpdGxlID0gZGVzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGFzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgICAgfVxuICAgICAgdGFibGUuc29ydEJ5Q29sdW1uKG9wdGlvbnMuY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiaGlkZVwiLFxuICB2aXNpYmxlSW5kZXg6IDIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XG4gICAgYnRuLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVDb2x1bW5cIik7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtb3ZldG9kZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJtb3ZldG9kZXRhaWxzXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRhYmxlLnNldENvbHVtbkxvY2F0aW9uKG9wdGlvbnMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiA0LFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIHZhciBlbCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZmlsdGVyXCIsXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcbiAgICApO1xuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlbC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUNvbHVtbkZpbHRlcihvcHRpb25zLmNvbHVtbk5hbWUsIGVsLnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBlbDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtYWtlcHVibGljXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWtlUHJpdmF0ZVN2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHJpdmF0ZVwiKTtcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XG4gICAgdmFyIGN1cnJlbnRWaXNpYmlsaXR5ID0gdGFibGUuZ2V0Q29sdW1uVmlzaWJpbGl0eShvcHRpb25zLmNvbHVtbk5hbWUpO1xuICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVByaXZhdGVTdmcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHVibGljU3ZnKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGN1cnJlbnRWaXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZSkge1xuICAgICAgICBjdXJyZW50VmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRWaXNpYmlsaXR5ID0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICB9XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgY3VycmVudFZpc2liaWxpdHkpO1xuICAgICAgdGFibGUub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJiB0YWJsZS5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrKHRhYmxlKTtcbiAgICAgIHVwZGF0ZVN0YXRlKGN1cnJlbnRWaXNpYmlsaXR5KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgICAgY29uc3QgaXNQcml2YXRlID0gdmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGU7XG4gICAgICBpZiAoaXNQcml2YXRlKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uIHNhLXRhYmxlX19zdmctYnV0dG9uLS1hY3RpdmVcIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQcml2YXRlQ29sdW1uXCIpO1xuICAgICAgICBtYWtlUHJpdmF0ZVN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIERldGFpbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgcm93OiBUYWJsZVJvdyxcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdmFyIGRldGFpbHNUYWJsZSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxuICAgICk7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUgPSBkZXRhaWxzVGFibGU7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGRldGFpbHNUYWJsZTogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBsb2NhdGlvbiA9IFwiZGV0YWlsc1wiO1xuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICB0aGlzLnRhYmxlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiBjb2x1bW4pXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgICAgICB2YXIgdGQxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHtcbiAgICAgICAgICBpbm5lckhUTUw6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0ZDIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldFJvd0RhdGEoKVtjb2x1bW4ubmFtZV07XG4gICAgICAgIHZhciB0ZDMgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbihjb2x1bW4ubmFtZSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgIH0pO1xuICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7IGNvbFNwYW46IDMgfSk7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRoaXMudGFibGUpO1xuICAgIGV4dGVuc2lvbnMucmVuZGVyKHRkLCBcImRldGFpbHNcIiwgeyByb3c6IHRoaXMucm93IH0pO1xuICAgIGlmICh0ZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uID0gKGNvbHVtbk5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKSB9XG4gICAgKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbik7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGlmICghIXRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcbiAgICAgIFwic2EtdGFibGVfX2dsb2JhbC1maWx0ZXIgc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIixcbiAgICAgIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJQbGFjZWhvbGRlclwiKVxuICAgICk7XG4gICAgaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGFibGUuYXBwbHlGaWx0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJzaG93Y29sdW1uXCIsXG4gIHZpc2libGVJbmRleDogMixcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBkcm9wZG93biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNlbGVjdFwiLFxuICAgICAgXCJzYS10YWJsZV9fc2hvdy1jb2x1bW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRhYmxlLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAoY29sdW1uOiBhbnkpID0+IGNvbHVtbi52aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZVxuICAgICAgKTtcbiAgICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBkcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKSxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgIHZhciB0ZXh0ID0gY29sdW1uLmRpc3BsYXlOYW1lO1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAyMCkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgIHRpdGxlOiBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgICAgdmFsdWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyb3Bkb3duLm9uY2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF2YWwpIHJldHVybjtcbiAgICAgIHRhYmxlLnNldENvbHVtblZpc2liaWxpdHkodmFsLCBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHZhciBvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuYWRkKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG5cbiAgICB0aGlzLm9uRGVzdHJveSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLnJlbW92ZShvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIGRyb3Bkb3duO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3dlbnRyaWVzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGZ1bmN0aW9uIGdldEVudHJpZXNEcm9wZG93bih0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgICBjb25zdCBlbCA9IDxIVE1MU2VsZWN0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCIsIFwiMjVcIiwgXCI1MFwiLCBcIjc1XCIsIFwiMTAwXCJdO1xuICAgICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgdGV4dDogdmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgZWwudmFsdWUgPSBTdHJpbmcodGFibGUuZ2V0UGFnZVNpemUoKSk7XG5cbiAgICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0YWJsZS5zZXRQYWdlU2l6ZShOdW1iZXIoZWwudmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3JDb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXNcIlxuICAgICk7XG4gICAgY29uc3Qgc2hvd1NwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1yaWdodFwiLFxuICAgICAge1xuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLWxlZnRcIixcbiAgICAgIHtcbiAgICAgICAgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZW50cmllc0xhYmVsXCIpLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93U3Bhbik7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlKSk7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cmllc1NwYW4pO1xuICAgIHJldHVybiBzZWxlY3RvckNvbnRhaW5lcjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJyZW1vdmVyb3dzXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyZWVuIHNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uIFwiLFxuICAgICAgeyBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZW1vdmVSb3dzXCIpIH1cbiAgICApO1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGFibGUuZ2V0Q3JlYXRlZFJvd3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKHJvdy5nZXRJc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICByb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJjaGFuZ2Vsb2NhbGVcIixcbiAgdmlzaWJsZUluZGV4OiAxLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZSkge1xuICAgIHZhciBsb2NhbGVzID0gdGFibGUuZ2V0TG9jYWxlcygpO1xuICAgIGlmIChsb2NhbGVzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsID0gPEhUTUxTZWxlY3RFbGVtZW50PihcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLCB7fSlcbiAgICApO1xuICAgIHZhciBvcHRpb25zVmFsdWVzID0gW2xvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFuZ2VMb2NhbGVcIildLmNvbmNhdChcbiAgICAgIGxvY2FsZXNcbiAgICApO1xuICAgIG9wdGlvbnNWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIHRleHQ6IHZhbCxcbiAgICAgIH0pO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBlbC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLmxvY2FsZSA9IGVsLnZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIGVsO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwiZGV0YWlsc1wiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogKF90YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImRldGFpbFwiKTtcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd01pbm9yQ29sdW1uc1wiKTtcbiAgICBidG4uY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvcHRpb25zLnJvdy50b2dnbGVEZXRhaWxzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcInJvd1wiLFxuICBuYW1lOiBcInNlbGVjdFwiLFxuICB2aXNpYmxlSW5kZXg6IC0xLFxuICByZW5kZXI6IGZ1bmN0aW9uIChfdGFibGUsIG9wdCkge1xuICAgIHZhciByb3cgPSBvcHQucm93O1xuICAgIHZhciBjaGVja2JveCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImlucHV0XCIsXG4gICAgICBcInNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCIsXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSByb3cuZ2V0SXNTZWxlY3RlZCgpO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LnRvZ2dsZVNlbGVjdCgpO1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuXG5pbnRlcmZhY2UgSVRhYmxlRXh0ZW5zaW9uIHtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2aXNpYmxlSW5kZXg6IG51bWJlcjtcbiAgcmVuZGVyOiAodGFibGU6IFRhYmxlLCBvcHQ6IGFueSkgPT4gSFRNTEVsZW1lbnQ7XG4gIGRlc3Ryb3k/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVFeHRlbnNpb25zIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZTogVGFibGUpIHt9XG4gIHByaXZhdGUgc3RhdGljIGV4dGVuc2lvbnM6IHtcbiAgICBbbG9jYXRpb246IHN0cmluZ106IEFycmF5PElUYWJsZUV4dGVuc2lvbj47XG4gIH0gPSB7fTtcbiAgcHJpdmF0ZSByZW5kZXJlZEV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gPSBbXTtcblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LCBsb2NhdGlvbjogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tsb2NhdGlvbl07XG4gICAgaWYgKCEhZXh0ZW5zaW9ucykge1xuICAgICAgZXh0ZW5zaW9ucyA9IHRoaXMuc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9ucyk7XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgICBpZiAoISFleHRlbnNpb24ucmVuZGVyKSB7XG4gICAgICAgICAgdmFyIGFjdGlvbiA9IGV4dGVuc2lvbi5yZW5kZXIodGhpcy50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKCEhYWN0aW9uKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5mb3JFYWNoKChleHRlbnNpb24pID0+IHtcbiAgICAgIGlmICghIWV4dGVuc2lvbi5kZXN0cm95KSBleHRlbnNpb24uZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zID0gW107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXh0ZW5zaW9uKGV4dGVuc2lvbjogSVRhYmxlRXh0ZW5zaW9uKSB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXSlcbiAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dID0gW107XG4gICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0ucHVzaChleHRlbnNpb24pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmaW5kRXh0ZW5zaW9uKFxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nXG4gICk6IElUYWJsZUV4dGVuc2lvbiB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbbG9jYXRpb25dKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgZXh0ZW5zaW9uID0gdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXS5maWx0ZXIoZnVuY3Rpb24gKFxuICAgICAgZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb25cbiAgICApIHtcbiAgICAgIHJldHVybiBleHRlbnNpb24ubmFtZSA9PSBhY3Rpb25OYW1lO1xuICAgIH0pWzBdO1xuICAgIHJldHVybiBleHRlbnNpb24gfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9uczogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRlbnNpb25zKSkgcmV0dXJuO1xuICAgIHJldHVybiBbXVxuICAgICAgLmNvbmNhdChleHRlbnNpb25zLmZpbHRlcigoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24udmlzaWJsZUluZGV4ID49IDApKVxuICAgICAgLnNvcnQoKGZpcnN0RXh0ZW5zaW9uLCBzZWNvbmRFeHRlbnNpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGZpcnN0RXh0ZW5zaW9uLnZpc2libGVJbmRleCAtIHNlY29uZEV4dGVuc2lvbi52aXNpYmxlSW5kZXg7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHtcbiAgQ29sdW1uVmlzaWJpbGl0eSxcbiAgUXVlc3Rpb25Mb2NhdGlvbixcbiAgQ29sdW1uRGF0YVR5cGUsXG4gIElUYWJsZVN0YXRlLFxuICBJVGFibGVDb2x1bW4sXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgSVBlcm1pc3Npb24gfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGUge1xuICBwcm90ZWN0ZWQgdGFibGVEYXRhOiBhbnk7XG4gIHByb3RlY3RlZCBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxuICAgIHByb3RlY3RlZCBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIHByb3RlY3RlZCBvcHRpb25zOiBhbnksXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW10sXG4gICAgcHVibGljIGlzVHJ1c3RlZEFjY2VzczogYm9vbGVhblxuICApIHtcbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFibGVEYXRhKGRhdGEpO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdGhpcy5zdXJ2ZXkubG9jYWxlO1xuXG4gICAgaWYgKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuXG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0aGlzKTtcbiAgfVxuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2l6ZTogbnVtYmVyID0gNTtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfcm93czogVGFibGVSb3dbXSA9IFtdO1xuICBwcm90ZWN0ZWQgaXNDb2x1bW5SZW9yZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uUm93UmVtb3ZlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICByb3c6IFRhYmxlUm93XG4gICkgPT4gSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3Qgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHB1YmxpYyBlbmFibGVDb2x1bW5SZW9yZGVyKCkge1xuICAgIHRoaXMuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZUNvbHVtblJlb3JkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlU2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50UGFnZVNpemUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDcmVhdGVkUm93cygpOiBUYWJsZVJvd1tdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3Jvd3MpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ3JlYXRlZFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcm93cyA9IFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpLm1hcCgocXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkYXRhVHlwZTpcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXG4gICAgICAgICAgICA/IENvbHVtbkRhdGFUeXBlLlRleHRcbiAgICAgICAgICAgIDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6XG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIlxuICAgICAgICAgICAgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGVcbiAgICAgICAgICAgIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbixcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGlzQ29sdW1uVmlzaWJsZShjb2x1bW46IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICBjb2x1bW4ubG9jYXRpb24gPT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4gJiZcbiAgICAgIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNWaXNpYmxlID0gKHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlKSB8fFxuICAgICAgKCF0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGUpXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgaXNBdmFpbGFibGUgPSAodmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzVHJ1c3RlZEFjY2VzcyB8fCB2aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZVxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIGdldEF2YWlsYWJsZUNvbHVtbnMgPSAoKTogQXJyYXk8SVRhYmxlQ29sdW1uPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0F2YWlsYWJsZShjb2x1bW4udmlzaWJpbGl0eSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvbHVtbnMoY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPikge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gaXRlbVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi5kaXNwbGF5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID1cbiAgICAgICAgICB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQ29sdW1uKGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xuICAgIHZhciBkZWxldGVkQ29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGZyb20sIDEpO1xuICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKHRvLCAwLCBkZWxldGVkQ29sdW1uc1swXSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcbiAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWVcbiAgICApWzBdLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuZmlyZSh0aGlzLCB7XG4gICAgICBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLFxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgICBjb2x1bW4udmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG4gICAgdGhpcy5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBjb2x1bW5WaXNpYmlsaXR5OiB2aXNpYmlsaXR5LFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZyk6IENvbHVtblZpc2liaWxpdHkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgICByZXR1cm4gY29sdW1uLnZpc2liaWxpdHk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlUm93KHJvdzogVGFibGVSb3cpOiB2b2lkIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9yb3dzLmluZGV4T2Yocm93KTtcbiAgICB0aGlzLl9yb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5vblJvd1JlbW92ZWQuZmlyZSh0aGlzLCB7IHJvdzogcm93IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBsb2NhbGUgb2YgdGhlIHRhYmxlLlxuICAgKiBJZiBsb2NhbGVzIG1vcmUgdGhhbiBvbmUsIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gZHJvcGRvd24gd2lsbCBiZSBhZGRlZCBpbiB0aGUgdG9vbGJhclxuICAgKi9cbiAgcHVibGljIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbG9jYWxlIGZvciB0YWJsZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgbG9jYWxlKG5ld0xvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdXJ2ZXkubG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuc3VydmV5LmdldFVzZWRMb2NhbGVzKCkpO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2goaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuZ2V0UGFnZU51bWJlcigpO1xuICAgICAgaWYgKGhhcmQpIHtcbiAgICAgICAgdGhpcy5pbml0VGFibGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0O1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJlbmRlcih0YXJnZXROb2RlKTtcbiAgICAgIHRoaXMuc2V0UGFnZVNpemUodGhpcy5jdXJyZW50UGFnZVNpemUpO1xuICAgICAgdGhpcy5zZXRQYWdlTnVtYmVyKHRoaXMuY3VycmVudFBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJDcmVhdGVkUm93cygpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnJlbmRlclJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIGdldHRlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogSVRhYmxlU3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxuICAgICAgZWxlbWVudHM6IFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIHNldHRlci5cbiAgICovXG4gIHB1YmxpYyBzZXQgc3RhdGUobmV3U3RhdGU6IElUYWJsZVN0YXRlKSB7XG4gICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSBuZXdTdGF0ZS5sb2NhbGU7XG4gICAgdGhpcy5fY29sdW1ucyA9IG5ld1N0YXRlLmVsZW1lbnRzO1xuICB9XG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRhYmxlIHN0YXRlIGNoYW5nZWQuXG4gICAqL1xuICBwdWJsaWMgb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+KCk7XG5cbiAgICAvKipcbiAgICogR2V0cyB0YWJsZSBwZXJtaXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKTogSVBlcm1pc3Npb25bXSB7XG4gICAgcmV0dXJuIDxhbnk+dGhpcy5fY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgIHZpc2liaWxpdHk6IGNvbHVtbi52aXNpYmlsaXR5LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0YWJsZSBwZXJtaXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBzZXQgcGVybWlzc2lvbnMocGVybWlzc2lvbnM6IElQZXJtaXNzaW9uW10pIHtcbiAgICBjb25zdCB1cGRhdGVkRWxlbWVudHMgPSB0aGlzLl9jb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtaXNzaW9uLm5hbWUgPT09IGNvbHVtbi5uYW1lKVxuICAgICAgICBjb2x1bW4udmlzaWJpbGl0eSA9IHBlcm1pc3Npb24udmlzaWJpbGl0eTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyAuLi5jb2x1bW4gfTtcbiAgICB9KTtcbiAgICB0aGlzLl9jb2x1bW5zID0gW10uY29uY2F0KHVwZGF0ZWRFbGVtZW50cyk7XG4gICAgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrICYmIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHBlcm1pc3Npb25zIGNoYW5nZWRcbiAgICovXG4gIHB1YmxpYyBvblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyh0YWJsZSwgdGhpcywgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0YWJsZSk7XG4gICAgdGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmFkZCh0aGlzLm9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG4gIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICBwdWJsaWMgZXh0ZW5zaW9uczogVGFibGVFeHRlbnNpb25zO1xuICBwcml2YXRlIGRldGFpbGVkUm93Q2xhc3MgPSBcInNhLXRhYmxlX19kZXRhaWwtcm93XCI7XG4gIHByaXZhdGUgaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgcHVibGljIG9uVG9nZ2xlRGV0YWlsczogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJvdydzIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGF0YSwgd2hpY2ggaXMgZGlzcGxheWVkIGluIHRoZSByb3cuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0Um93RGF0YSgpOiBhbnk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcG9zaXRpb24gb2Ygcm93IGluIHRoZSB0YWJsZSdzIGRhdGEuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0RGF0YVBvc2l0aW9uKCk6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgaXNTZWxlY3RlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIodGhpcy5leHRlbnNpb25zQ29udGFpbmVyLCBcInJvd1wiLCB7IHJvdzogdGhpcyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGV0YWlscygpIHtcbiAgICB0aGlzLmRldGFpbHMub3BlbigpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMuZGV0YWlsZWRSb3dDbGFzcztcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzRGV0YWlsc0V4cGFuZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLmNsb3NlKCk7XG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRldGFpbGVkUm93Q2xhc3MpO1xuICAgIHRoaXMub25Ub2dnbGVEZXRhaWxzLmZpcmUodGhpcywgeyBpc0V4cGFuZGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLmlzRGV0YWlsc0V4cGFuZGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRGV0YWlscygpIHtcbiAgICBpZiAodGhpcy5pc0RldGFpbHNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5jbG9zZURldGFpbHMoKTtcbiAgICB9IGVsc2UgdGhpcy5vcGVuRGV0YWlscygpO1xuICB9XG5cbiAgcHVibGljIGdldElzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZDtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gIXRoaXMuaXNTZWxlY3RlZDtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5yZW1vdmVSb3codGhpcyk7XG4gIH1cblxuICBwcml2YXRlIG9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG9zZURldGFpbHMoKTtcbiAgfTtcblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5yZW1vdmUoXG4gICAgICB0aGlzLm9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2tcbiAgICApO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFRhYmxlLCBUYWJsZVJvdyB9IGZyb20gXCIuL3RhYmxlXCI7XHJcbmltcG9ydCB7IFN1cnZleU1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XHJcbmltcG9ydCB7IENvbHVtblZpc2liaWxpdHksIFF1ZXN0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBcIi4vdGFidWxhdG9yLnNjc3NcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuY29uc3QgVGFidWxhdG9yVGFibGVzID0gcmVxdWlyZShcInRhYnVsYXRvci10YWJsZXNcIik7XHJcblxyXG5pZiAoISFkb2N1bWVudCkge1xyXG4gIGNvbnN0IHN2Z1RlbXBsYXRlID0gcmVxdWlyZShcImh0bWwtbG9hZGVyP2ludGVycG9sYXRlIXZhbC1sb2FkZXIhLi4vc3ZnYnVuZGxlLmh0bWxcIik7XHJcbiAgY29uc3QgdGVtcGxhdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB0ZW1wbGF0ZUhvbGRlci5pbm5lckhUTUwgPSBzdmdUZW1wbGF0ZTtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlSG9sZGVyKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElEb3dubG9hZE9wdGlvbnMge1xyXG4gIHBkZj86IGFueTtcclxuICBjc3Y/OiBhbnk7XHJcbiAgeGxzeD86IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElPcHRpb25zIHtcclxuICBjb2x1bW5NaW5XaWR0aDogbnVtYmVyO1xyXG4gIGFjdGlvbnNDb2x1bW5XaWR0aDogbnVtYmVyO1xyXG4gIHBhZ2luYXRpb25CdXR0b25Db3VudDogbnVtYmVyO1xyXG4gIGRvd25sb2FkT3B0aW9uczogSURvd25sb2FkT3B0aW9ucztcclxufVxyXG5cclxudmFyIGRlZmF1bHREb3dubG9hZE9wdGlvbnM6IElEb3dubG9hZE9wdGlvbnMgPSB7XHJcbiAgcGRmOiB7XHJcbiAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLCAvL3NldCBwYWdlIG9yaWVudGF0aW9uIHRvIHBvcnRyYWl0XHJcbiAgICBhdXRvVGFibGU6IHtcclxuICAgICAgLy9hZHZhbmNlZCB0YWJsZSBzdHlsaW5nXHJcbiAgICAgIHN0eWxlczoge1xyXG4gICAgICAgIGZpbGxDb2xvcjogWzI2LCAxNzksIDE0OF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbHVtblN0eWxlczoge1xyXG4gICAgICAgIGlkOiB7IGZpbGxDb2xvcjogMjU1IH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcmdpbjogeyB0b3A6IDYwIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3N2OiB7IGlzVmlzaWJsZTogdHJ1ZSwgZGVsaW1pdGVyOiBcIixcIiB9LFxyXG4gIHhsc3g6IHsgaXNWaXNpYmxlOiB0cnVlLCBzaGVldE5hbWU6IFwicmVzdWx0c1wiIH0sXHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGRlZmF1bHRPcHRpb25zOiBJT3B0aW9ucyA9IHtcclxuICBjb2x1bW5NaW5XaWR0aDogMjQ4LFxyXG4gIGRvd25sb2FkT3B0aW9uczogZGVmYXVsdERvd25sb2FkT3B0aW9ucyxcclxuICBwYWdpbmF0aW9uQnV0dG9uQ291bnQ6IDMsXHJcbiAgYWN0aW9uc0NvbHVtbldpZHRoOiA2MCxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJ1bGF0b3IgZXh0ZW5kcyBUYWJsZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxyXG4gICAgZGF0YTogQXJyYXk8T2JqZWN0PixcclxuICAgIG9wdGlvbnM6IElPcHRpb25zLFxyXG4gICAgX2NvbHVtbnM6IEFycmF5PGFueT4gPSBbXSxcclxuICAgIGlzVHJ1c3RlZEFjY2VzcyA9IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihzdXJ2ZXksIGRhdGEsIG9wdGlvbnMsIF9jb2x1bW5zLCBpc1RydXN0ZWRBY2Nlc3MpO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgcGF0Y2hlZE9wdGlvbnMgPSB7fTtcclxuICAgIE9iamVjdC5hc3NpZ24ocGF0Y2hlZE9wdGlvbnMsIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHBhdGNoZWRPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBDT0xVTU5fTUlOX1dJRFRIID0gMTU1O1xyXG4gIHB1YmxpYyB0YWJ1bGF0b3JUYWJsZXM6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSB0YWJsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0YXJnZXROb2RlLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZSBzYS10YWJ1bGF0b3JcIjtcclxuICAgIHRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy50YWJsZURhdGE7XHJcblxyXG4gICAgdmFyIGhlYWRlciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzYS10YWJ1bGF0b3JfX2hlYWRlclwiKTtcclxuICAgIHZhciBwYWdpbmF0aW9uRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwic2EtdGFidWxhdG9yX19wYWdpbmF0aW9uLWNvbnRhaW5lclwiXHJcbiAgICApO1xyXG4gICAgdGhpcy50YWJsZUNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLnRhYmxlQ29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcyA9IG5ldyBUYWJ1bGF0b3JUYWJsZXModGhpcy50YWJsZUNvbnRhaW5lciwge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBsYXlvdXQ6IFwiZml0Q29sdW1uc1wiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBcImxvY2FsXCIsXHJcbiAgICAgIHBhZ2luYXRpb25TaXplOiA1LFxyXG4gICAgICBtb3ZhYmxlQ29sdW1uczogdHJ1ZSxcclxuICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgcm93Rm9ybWF0dGVyOiB0aGlzLnJvd0Zvcm1hdHRlcixcclxuICAgICAgcGFnaW5hdGlvbkJ1dHRvbkNvdW50OiB0aGlzLm9wdGlvbnMucGFnaW5hdGlvbkJ1dHRvbkNvdW50LFxyXG4gICAgICBwYWdpbmF0aW9uRWxlbWVudDogcGFnaW5hdGlvbkVsZW1lbnQsXHJcbiAgICAgIGNvbHVtbk1vdmVkOiB0aGlzLmNvbHVtbk1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgIHRvb2x0aXBzSGVhZGVyOiB0cnVlLFxyXG4gICAgICB0b29sdGlwczogKGNlbGw6IGFueSkgPT4gY2VsbC5nZXRWYWx1ZSgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZXh0ZW5zaW9uc0NvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwic2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25zXCJcclxuICAgICk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb3dubG9hZHNCYXIoKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZXh0ZW5zaW9uc0NvbnRhaW5lcik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnaW5hdGlvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5leHRlbnNpb25zLnJlbmRlcihleHRlbnNpb25zQ29udGFpbmVyLCBcImhlYWRlclwiKTtcclxuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0Tm9kZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRG93bmxvYWRzQmFyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHZhciBjcmVhdGVEb3dubG9hZEJ1dHRvbiA9ICh0eXBlOiBzdHJpbmcsIGNhcHRpb246IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcclxuICAgICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1zbWFsbCBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW5uZXJIVE1MOiBjYXB0aW9uLFxyXG4gICAgICAgICAgb25jbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkKHR5cGUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBidG47XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImRpdlwiLFxyXG4gICAgICBcInNhLXRhYnVsYXRvcl9fZG93bmxvYWRzLWJhclwiXHJcbiAgICApO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kb3dubG9hZE9wdGlvbnMueGxzeC5pc1Zpc2libGUpIHtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKFwieGxzeFwiLCBcIkV4Y2VsXCIpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZG93bmxvYWRPcHRpb25zLnBkZi5pc1Zpc2libGUpIHtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURvd25sb2FkQnV0dG9uKFwicGRmXCIsIFwiUERGXCIpKTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEb3dubG9hZEJ1dHRvbihcImNzdlwiLCBcIkNTVlwiKSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5kZXN0cm95KCk7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjb2x1bW5Nb3ZlZENhbGxiYWNrID0gKGNvbHVtbjogYW55LCBjb2x1bW5zOiBhbnlbXSkgPT4ge1xyXG4gICAgdmFyIGZyb20gPSB0aGlzLl9jb2x1bW5zLmluZGV4T2YoXHJcbiAgICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKChjb2wpID0+IGNvbC5uYW1lID09IGNvbHVtbi5nZXRGaWVsZCgpKVswXVxyXG4gICAgKTtcclxuICAgIHZhciB0byA9IGNvbHVtbnMuaW5kZXhPZihjb2x1bW4pIC0gMTtcclxuICAgIHRoaXMubW92ZUNvbHVtbihmcm9tLCB0byk7XHJcbiAgICB0aGlzLmRpc2FibGVDb2x1bW5SZW9yZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByb3dGb3JtYXR0ZXIgPSAocm93OiBhbnkpOiB2b2lkID0+IHtcclxuICAgIHZhciB0YWJsZVJvdyA9IG5ldyBUYWJ1bGF0b3JSb3coXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHJvdy5nZXRDZWxscygpWzBdLmdldEVsZW1lbnQoKSxcclxuICAgICAgcm93LmdldEVsZW1lbnQoKSxcclxuICAgICAgcm93XHJcbiAgICApO1xyXG4gICAgdGFibGVSb3cub25Ub2dnbGVEZXRhaWxzLmFkZCgoKSA9PiB7XHJcbiAgICAgIHJvdy5ub3JtYWxpemVIZWlnaHQoKTtcclxuICAgICAgdGhpcy5sYXlvdXQoKTtcclxuICAgIH0pO1xyXG4gICAgdGFibGVSb3cucmVuZGVyKCk7XHJcblxyXG4gICAgdGhpcy5fcm93cy5wdXNoKHRhYmxlUm93KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldFRpdGxlRm9ybWF0dGVyKFxyXG4gICAgY2VsbDogYW55LFxyXG4gICAgZm9ybWF0dGVyUGFyYW1zOiBhbnksXHJcbiAgICBvblJlbmRlcmVkOiBhbnksXHJcbiAgICBjb2x1bW5OYW1lOiBhbnlcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHZhciB0aXRsZSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIHtcclxuICAgICAgaW5uZXJIVE1MOiBjZWxsLmdldFZhbHVlKCksXHJcbiAgICB9KTtcclxuICAgIHZhciBhY3Rpb25zID0gdGhpcy5nZXRIZWFkZXJBY3Rpb25zKGNvbHVtbk5hbWUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnRhaW5lci5vbm1vdXNlZG93biA9IChlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEhlYWRlckFjdGlvbnMoY29sdW1uTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJkaXZcIixcclxuICAgICAgXCJzYS10YWJsZV9fYWN0aW9uLWNvbnRhaW5lclwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5leHRlbnNpb25zLnJlbmRlcihjb250YWluZXIsIFwiY29sdW1uXCIsIHsgY29sdW1uTmFtZTogY29sdW1uTmFtZSB9KTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29sdW1ucygpOiBBcnJheTxPYmplY3Q+IHtcclxuICAgIHZhciBtaW5Db2x1bW5XaWR0aCA9XHJcbiAgICAgIHRoaXMuQ09MVU1OX01JTl9XSURUSCA+IHRoaXMub3B0aW9ucy5jb2x1bW5NaW5XaWR0aFxyXG4gICAgICAgID8gdGhpcy5DT0xVTU5fTUlOX1dJRFRIXHJcbiAgICAgICAgOiB0aGlzLm9wdGlvbnMuY29sdW1uTWluV2lkdGg7XHJcbiAgICBjb25zdCBjb2x1bW5zOiBhbnkgPSB0aGlzLmdldEF2YWlsYWJsZUNvbHVtbnMoKS5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcclxuICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpZWxkOiBjb2x1bW4ubmFtZSxcclxuICAgICAgICB0aXRsZTogKHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnRpdGxlKSB8fCBjb2x1bW4uZGlzcGxheU5hbWUsXHJcbiAgICAgICAgbWluV2lkdGg6IG1pbkNvbHVtbldpZHRoLFxyXG4gICAgICAgIHdpZHRoU2hyaW5rOiAxLFxyXG4gICAgICAgIHZpc2libGU6IHRoaXMuaXNDb2x1bW5WaXNpYmxlKGNvbHVtbiksXHJcbiAgICAgICAgaGVhZGVyU29ydDogZmFsc2UsXHJcbiAgICAgICAgdGl0bGVGb3JtYXR0ZXI6IChjZWxsOiBhbnksIGZvcm1hdHRlclBhcmFtczogYW55LCBvblJlbmRlcmVkOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpdGxlRm9ybWF0dGVyKFxyXG4gICAgICAgICAgICBjZWxsLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZXJQYXJhbXMsXHJcbiAgICAgICAgICAgIG9uUmVuZGVyZWQsXHJcbiAgICAgICAgICAgIGNvbHVtbi5uYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCBzcGVjaWFsIGNvbHVtbiAoY29sbGFwc2UvZXhwYW5kKVxyXG4gICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgZmllbGQ6IFwiXCIsXHJcbiAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICBkb3dubG9hZDogZmFsc2UsXHJcbiAgICAgIHJlc2l6YWJsZTogZmFsc2UsXHJcbiAgICAgIHdpZHRoOiB0aGlzLm9wdGlvbnMuYWN0aW9uc0NvbHVtbldpZHRoLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcsIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpIHtcclxuICAgIHN1cGVyLnNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZSwgdmlzaWJpbGl0eSk7XHJcbiAgICBpZiAodmlzaWJpbGl0eSA9PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSlcclxuICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuaGlkZUNvbHVtbihjb2x1bW5OYW1lKTtcclxuICAgIGVsc2UgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2hvd0NvbHVtbihjb2x1bW5OYW1lKTtcclxuICAgIHRoaXMubGF5b3V0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZTogc3RyaW5nLCBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbikge1xyXG4gICAgc3VwZXIuc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZSwgbG9jYXRpb24pO1xyXG4gICAgaWYgKGxvY2F0aW9uID09IFF1ZXN0aW9uTG9jYXRpb24uUm93KVxyXG4gICAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5oaWRlQ29sdW1uKGNvbHVtbk5hbWUpO1xyXG4gICAgZWxzZSB0aGlzLnRhYnVsYXRvclRhYmxlcy5zaG93Q29sdW1uKGNvbHVtbk5hbWUpO1xyXG4gICAgdGhpcy5sYXlvdXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzb3J0QnlDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0U29ydChjb2x1bW5OYW1lLCBkaXJlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGx5Q29sdW1uRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0RmlsdGVyKGNvbHVtbk5hbWUsIFwibGlrZVwiLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdmFyIGN1c3RvbUZpbHRlciA9IChkYXRhOiBhbnksIGZpbHRlclBhcmFtczogYW55KSA9PiB7XHJcbiAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZGF0YVtrZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyUGFyYW1zLnZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNldEZpbHRlcihjdXN0b21GaWx0ZXIsIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLnRhYnVsYXRvclRhYmxlcykgcmV0dXJuIDE7XHJcbiAgICByZXR1cm4gdGhpcy50YWJ1bGF0b3JUYWJsZXMuZ2V0UGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBhZ2VOdW1iZXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0UGFnZSh2YWx1ZSk7XHJcbiAgICBzdXBlci5zZXRQYWdlTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBzdXBlci5zZXRQYWdlU2l6ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRQYWdlU2l6ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZG93bmxvYWQodHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5kb3dubG9hZChcclxuICAgICAgdHlwZSxcclxuICAgICAgYHJlc3VsdHMuJHt0eXBlfWAsXHJcbiAgICAgICg8YW55PnRoaXMub3B0aW9ucy5kb3dubG9hZE9wdGlvbnMpW3R5cGVdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxheW91dCgpIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnJlZHJhdygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnVsYXRvclJvdyBleHRlbmRzIFRhYmxlUm93IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXHJcbiAgICBwcm90ZWN0ZWQgZXh0ZW5zaW9uc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXHJcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXHJcbiAgICBwcm90ZWN0ZWQgaW5uZXJSb3c6IGFueVxyXG4gICkge1xyXG4gICAgc3VwZXIodGFibGUsIGV4dGVuc2lvbnNDb250YWluZXIsIGRldGFpbHNDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSb3cuZ2V0RWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJvd0RhdGEoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSb3cuZ2V0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGFQb3NpdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSb3cuZ2V0UG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoKSB7XHJcbiAgICB0aGlzLmlubmVyUm93LmRlbGV0ZSgpO1xyXG4gICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgX19hc3NpZ24gPVxuICAoPGFueT5PYmplY3QpW1wiYXNzaWduXCJdIHx8XG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgcCBpbiBzKVxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xuICBmb3IgKHZhciBwIGluIGJhc2VDbGFzcylcbiAgICBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XG4gIGZ1bmN0aW9uIF9fKCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSB0aGlzQ2xhc3M7XG4gIH1cbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XG4gICAgYmFzZUNsYXNzID09PSBudWxsXG4gICAgICA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKVxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcbiAgdmFyIHJlc3VsdDogYW55ID0ge307XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBzb3VyY2UpXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgcHJvcGVydHlOYW1lKSAmJlxuICAgICAgZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPCAwXG4gICAgKVxuICAgICAgcmVzdWx0W3Byb3BlcnR5TmFtZV0gPSBzb3VyY2VbcHJvcGVydHlOYW1lXTtcbiAgaWYgKFxuICAgIHNvdXJjZSAhPSBudWxsICYmXG4gICAgdHlwZW9mICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0gPT09IFwiZnVuY3Rpb25cIlxuICApXG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgcHJvcGVydHlTeW1ib2xzID0gKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXShzb3VyY2UpO1xuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XG4gICAgICBpKytcbiAgICApXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxuICAgICAgICByZXN1bHRbcHJvcGVydHlTeW1ib2xzW2ldXSA9IHNvdXJjZVtwcm9wZXJ0eVN5bWJvbHNbaV1dO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xuXG5leHBvcnQgdmFyIF9fZGVjb3JhdGUgPSBmdW5jdGlvbihcbiAgZGVjb3JhdG9yczogYW55LFxuICB0YXJnZXQ6IGFueSxcbiAga2V5OiBhbnksXG4gIGRlc2M6IGFueVxuKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICByID1cbiAgICAgIGMgPCAzXG4gICAgICAgID8gdGFyZ2V0XG4gICAgICAgIDogZGVzYyA9PT0gbnVsbFxuICAgICAgICA/IChkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXG4gICAgICAgIDogZGVzYyxcbiAgICBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2VcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgIGlmICgoZCA9IGRlY29yYXRvcnNbaV0pKVxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG4iLCJleHBvcnQgY2xhc3MgRG9jdW1lbnRIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9PixcclxuICAgIGlzU2VsZWN0ZWQ6IChvcHRpb246IHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0pID0+IGJvb2xlYW4sXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0LXdyYXBwZXJcIjtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0XCI7XHJcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xyXG4gICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgdGV4dDogb3B0aW9uLnRleHQsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQob3B0aW9uKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gaGFuZGxlcjtcclxuICAgIHNlbGVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgIHJldHVybiBzZWxlY3RXcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24oXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkLFxyXG4gICAgdGV4dCA9IFwiXCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvblwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBjbGFzc05hbWUsIHtcclxuICAgICAgaW5uZXJUZXh0OiB0ZXh0LFxyXG4gICAgICBvbmNsaWNrOiBoYW5kbGVyLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KFxyXG4gICAgdGFnTmFtZTogc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgYXR0cnM/OiBhbnlcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKCEhYXR0cnMpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICg8YW55PmVsKVtrZXldID0gYXR0cnNba2V5XTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0VsZW1lbnQocGF0aDogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwic3ZnXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB1c2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwidXNlXCJcclxuICAgICk7XHJcbiAgICB1c2VFbGVtLnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgIFwiI3NhLXN2Zy1cIiArIHBhdGhcclxuICAgICk7XHJcbiAgICBzdmdFbGVtLmFwcGVuZENoaWxkKHVzZUVsZW0pO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0J1dHRvbihwYXRoOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG4gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic2EtdGFibGVfX3N2Zy1idXR0b25cIilcclxuICAgICk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChwYXRoKSk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdUb2dnbGVCdXR0b24oXHJcbiAgICBzdmdQYXRoMTogc3RyaW5nLFxyXG4gICAgc3ZQcGF0aDI6IHN0cmluZyxcclxuICAgIHRleHQxOiBzdHJpbmcsXHJcbiAgICB0ZXh0Mjogc3RyaW5nLFxyXG4gICAgaGFuZGxlcjE6IChlOiBhbnkpID0+IGFueSxcclxuICAgIGhhbmRsZXIyOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBzdGF0ZSA9IFwiZmlyc3RcIixcclxuICAgIGNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uIHNhLXRvb2xiYXJfX3N2Zy1idXR0b25cIlxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2ZzEgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2Z1BhdGgxKTtcclxuICAgIGNvbnN0IHN2ZzIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2UHBhdGgyKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgY2xhc3NOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcInNlY29uZFwiO1xyXG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChzdmcxKTtcclxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgaGFuZGxlcjIoZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFwic2Vjb25kXCIpIHtcclxuICAgICAgICBzdGF0ZSA9IFwiZmlyc3RcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgICAgIGhhbmRsZXIxKGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQxO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMSk7XHJcbiAgICB9IGVsc2UgaWYgKChzdGF0ZSA9IFwic2Vjb25kXCIpKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSB0b2dnbGU7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5wdXQoXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyID0gXCJcIixcclxuICAgIGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxuICApOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiaW5wdXRcIixcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIHJ1bm5pbmdJbkJyb3dzZXI6IHR5cGVvZiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiLFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEb21SZW5kZXJpbmcoKSB7XHJcbiAgcmV0dXJuIG9wdGlvbnMucnVubmluZ0luQnJvd3NlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgemlwQXJyYXlzKGZpcnN0OiBhbnlbXSwgc2Vjb25kOiBhbnlbXSk6IGFueVtdW10ge1xyXG4gICAgbGV0IHppcEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihmaXJzdC5sZW5ndGgsIHNlY29uZC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgemlwQXJyYXlbaV0gPSBbZmlyc3RbaV0sIHNlY29uZFtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gemlwQXJyYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuemlwQXJyYXlzKFxyXG4gICAgemlwQXJyYXk6IGFueVtdW11cclxuICApOiB7IGZpcnN0OiBhbnlbXTsgc2Vjb25kOiBhbnlbXSB9IHtcclxuICAgIGxldCB0d29BcnJheXM6IGFueSA9IHsgZmlyc3Q6IFtdLCBzZWNvbmQ6IFtdIH07XHJcbiAgICB6aXBBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICB0d29BcnJheXMuZmlyc3RbaV0gPSB2YWx1ZVswXTtcclxuICAgICAgdHdvQXJyYXlzLnNlY29uZFtpXSA9IHZhbHVlWzFdO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHdvQXJyYXlzO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNvcnREaWN0aW9uYXJ5KFxyXG4gICAga2V5czogYW55W10sXHJcbiAgICB2YWx1ZXM6IGFueVtdLFxyXG4gICAgZGVzYzogYm9vbGVhblxyXG4gICk6IHsga2V5czogYW55W107IHZhbHVlczogYW55W10gfSB7XHJcbiAgICBsZXQgZGljdGlvbmFyeSA9IHRoaXMuemlwQXJyYXlzKGtleXMsIHZhbHVlcyk7XHJcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFbMV0gPCBiWzFdID8gMSA6IGFbMV0gPT0gYlsxXSA/IDAgOiAtMTtcclxuICAgICAgcmV0dXJuIGFzYyA/IHJlc3VsdCA6IHJlc3VsdCAqIC0xO1xyXG4gICAgfTtcclxuICAgIGRpY3Rpb25hcnkuc29ydCgoYTogYW55W10sIGI6IGFueVtdKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZXNjID8gY29tcGFyYXRvcihhLCBiLCBmYWxzZSkgOiBjb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQga2V5c0FuZFZhbHVlcyA9IHRoaXMudW56aXBBcnJheXMoZGljdGlvbmFyeSk7XHJcbiAgICByZXR1cm4geyBrZXlzOiBrZXlzQW5kVmFsdWVzLmZpcnN0LCB2YWx1ZXM6IGtleXNBbmRWYWx1ZXMuc2Vjb25kIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlIC8gbWF4VmFsdWUpICogMTAwO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGFidWxhdG9yX3RhYmxlc19fOyJdLCJzb3VyY2VSb290IjoiIn0=