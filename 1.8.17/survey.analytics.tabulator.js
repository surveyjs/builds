/*!
 * surveyjs - SurveyJS Analytics library v1.8.17
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

module.exports = "<svg style=\"display:none;\"><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-detail\"><circle class=\"st0\" cx=\"1.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"8.5\" r=\"1.5\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-drag\"><path class=\"st0\" d=\"M13 5l-1 1 1 1H9V3l1 1 1-1-3-3-3 3 1 1 1-1v4H3l1-1-1-1-3 3 3 3 1-1-1-1h4v4l-1-1-1 1 3 3 3-3-1-1-1 1V9h4l-1 1 1 1 3-3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-hide\"><path class=\"st1\" d=\"M12.79 4.2L16 1l-1-1-3.32 3.32C10.57 2.55 9.32 2 8 2 3.63 2 0 7.97 0 7.97s1.27 2.1 3.21 3.82l-3.23 3.23.98.98 3.35-3.34C5.41 13.44 6.67 14 8 14c4.37 0 8-6 8-6s-1.27-2.09-3.21-3.8zM2 7.97c1.07-1.47 3.61-4 6-4 .8 0 1.6.27 2.35.68l-.78.78c-.46-.29-.99-.46-1.57-.46-1.66 0-3 1.34-3 3 0 .58.17 1.11.46 1.57l-.97.97A13.38 13.38 0 0 1 2 7.97zm6 4c-.8 0-1.59-.27-2.33-.67l.78-.77c.45.27.98.44 1.55.44 1.66 0 3-1.34 3-3 0-.57-.17-1.09-.44-1.55l.98-.98c1.11.87 2.01 1.91 2.46 2.52-1.07 1.48-3.61 4.01-6 4.01z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makeprivate\"><circle class=\"st0\" cx=\"8\" cy=\"4\" r=\"3\"></circle><path class=\"st0\" d=\"M8 8c-3.31 0-6 2.73-6 4.67S5.27 15 8 15s6-.4 6-2.33S11.31 8 8 8z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makepublic\"><circle class=\"st0\" cx=\"6\" cy=\"5\" r=\"3\"></circle><path class=\"st0\" d=\"M10 5c0 .34-.06.67-.14.99.05 0 .09.01.14.01 1.66 0 3-1.34 3-3s-1.34-3-3-3C8.97 0 8.07.52 7.53 1.3 8.98 1.91 10 3.33 10 5zM6 9c-3.31 0-6 2.73-6 4.67S3.27 16 6 16s6-.4 6-2.33S9.31 9 6 9zM10 7c-.19 0-.38.01-.57.03a4.14 4.14 0 0 1-1.37 1.39c3 .83 5.23 3.31 5.42 5.28 1.44-.31 2.52-.92 2.52-2.03C16 9.74 13.31 7 10 7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-movetodetails\"><circle class=\"st0\" cx=\"1.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"14.5\" r=\"1.5\"></circle><path class=\"st0\" d=\"M12 1h3v9h-3zM2.02 7.02L1 6 0 7l3 3 3-3-1-1-.94.94C4.33 4.73 6.21 3 8.5 3c.17 0 .33.03.5.05V1.03C8.83 1.01 8.67 1 8.5 1 5.08 1 2.27 3.66 2.02 7.02z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-noncommercial\"><path d=\"M8 0L0 15h16L8 0zm1 13H7v-2h2v2zm-2-3V5h2v5H7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-sorting\"><path class=\"st0\" d=\"M8 3l2 2 1-1-3-3-3 3 1 1zM8 13l-2-2-1 1 3 3 3-3-1-1z\"></path></symbol></svg>";

/***/ }),

/***/ "./src/entries/tabulator.ts":
/*!**********************************!*\
  !*** ./src/entries/tabulator.ts ***!
  \**********************************/
/*! exports provided: localization, surveyStrings, Tabulator, TabulatorRow, TableExtensions, DocumentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });

/* harmony import */ var _localization_farsi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localization/farsi */ "./src/localization/farsi.ts");
/* harmony import */ var _localization_french__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localization/french */ "./src/localization/french.ts");
/* harmony import */ var _localization_norwegian__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localization/norwegian */ "./src/localization/norwegian.ts");
/* harmony import */ var _localization_russian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localization/russian */ "./src/localization/russian.ts");
/* harmony import */ var _tables_extensions_rowextensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/extensions/rowextensions */ "./src/tables/extensions/rowextensions.ts");
/* harmony import */ var _tables_extensions_headerextensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tables/extensions/headerextensions */ "./src/tables/extensions/headerextensions.ts");
/* harmony import */ var _tables_extensions_columnextensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tables/extensions/columnextensions */ "./src/tables/extensions/columnextensions.ts");
/* harmony import */ var _tables_extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tables/extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _tables_tabulator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/tabulator */ "./src/tables/tabulator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_9__["Tabulator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabulatorRow", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_9__["TabulatorRow"]; });

/* harmony import */ var _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tables/extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableExtensions", function() { return _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_10__["TableExtensions"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_11__["DocumentHelper"]; });


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
    defaultOrder: "Default Order",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Other items and comments",
    showPercentages: "Show percentages",
    hidePercentages: "Hide percentages",
    pdfDownloadCaption: "PDF",
    xlsxDownloadCaption: "Excel",
    csvDownloadCaption: "CSV",
    saveDiagramAsPNG: "Download plot as a png",
    hideEmptyAnswers: "Hide empty answers",
    showEmptyAnswers: "Show empty answers",
    "topNValueText-1": "All answers",
    "topNValueText5": "Top 5 answers",
    "topNValueText10": "Top 10 answers",
    "topNValueText20": "Top 20 answers",
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

/***/ "./src/localization/norwegian.ts":
/*!***************************************!*\
  !*** ./src/localization/norwegian.ts ***!
  \***************************************/
/*! exports provided: norwegianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norwegianStrings", function() { return norwegianStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var norwegianStrings = {
    groupButton: "Grupper",
    ungroupButton: "Opphev gruppering",
    selectButton: "Velg",
    hideColumn: "Skjul kolonne",
    showColumn: "Vis kolonne",
    makePrivateColumn: "Gjør kolonne privat",
    makePublicColumn: "Gjør kolonne offentlig",
    moveToDetail: "Flytt til detaljert visning",
    showAsColumn: "Vis som kolonne",
    filterPlaceholder: "Søk...",
    removeRows: "Fjern rader",
    showLabel: "Vis",
    entriesLabel: "oppføringer",
    visualizer_text: "Tabellvisning",
    visualizer_wordcloud: "Ordsky",
    chartType_bar: "Stolpediagram",
    chartType_stackedbar: "Stablet stolpediagram",
    chartType_doughnut: "Hjuldiagram",
    chartType_pie: "Sektordiagram",
    chartType_scatter: "Punktdiagram",
    chartType_gauge: "Målediagram",
    chartType_bullet: "Kulediagram",
    hideButton: "Skjul",
    makePrivateButton: "Gjør privat",
    makePublicButton: "Gjør offentlig",
    showButton: "Vis",
    resetFilter: "Nullstill filter",
    changeLocale: "Bytt språk",
    clearButton: "Tøm",
    addElement: "Velg spørsmål...",
    defaultOrder: "Standard",
    ascOrder: "Stigende",
    descOrder: "Synkende",
    showMinorColumns: "Vis mindre kolonner",
    otherCommentTitle: "Annet og kommentarer",
    showPercentages: "Vis prosenter",
    hidePercentages: "Skjul prosenter",
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["no"] = norwegianStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["no"] = "Norwegian";


/***/ }),

/***/ "./src/localization/russian.ts":
/*!*************************************!*\
  !*** ./src/localization/russian.ts ***!
  \*************************************/
/*! exports provided: russianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russianStrings", function() { return russianStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var russianStrings = {
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
    hideButton: "Скрыть",
    showButton: "Показать",
    resetFilter: "Очистить фильтр",
    changeLocale: "Сменить язык",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Other items and comments",
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["ru"] = russianStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["ru"] = "Russian";


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
/*! exports provided: QuestionLocation, ColumnDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionLocation", function() { return QuestionLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnDataType", function() { return ColumnDataType; });
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
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");




_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
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
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
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
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "hide",
    visibleIndex: 2,
    render: function (table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("hide");
        btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("hideColumn");
        btn.onclick = function () {
            table.setColumnVisibility(options.columnName, false);
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "movetodetails",
    visibleIndex: 3,
    render: function (table, options) {
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("movetodetails");
        button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("moveToDetail");
        button.onclick = function (e) {
            e.stopPropagation();
            table.setColumnLocation(options.columnName, _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Row);
        };
        return button;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
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
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "makepublic",
    visibleIndex: -1,
    render: function (table, options) {
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button");
        var makePrivateSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makeprivate");
        var makePublicSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makepublic");
        var column = table.getColumnByName(options.columnName);
        updateState(column);
        button.appendChild(makePrivateSvg);
        button.appendChild(makePublicSvg);
        button.onclick = function (e) {
            e.stopPropagation();
            column.isPublic = !column.isPublic;
            updateState(column);
            table.onPermissionsChangedCallback &&
                table.onPermissionsChangedCallback(table);
        };
        function updateState(column) {
            if (column.isPublic) {
                button.className = "sa-table__svg-button";
                button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("makePrivateColumn");
                makePrivateSvg.style.display = "none";
                makePublicSvg.style.display = "block";
            }
            else {
                button.className = "sa-table__svg-button sa-table__svg-button--active";
                button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("makePublicColumn");
                makePrivateSvg.style.display = "block";
                makePublicSvg.style.display = "none";
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");



_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "filter",
    visibleIndex: 0,
    render: function (table) {
        var input = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createInput("sa-table__global-filter sa-table__header-extension", _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("filterPlaceholder"));
        input.onchange = function (event) {
            table.applyFilter(event.target.value);
        };
        return input;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "showcolumn",
    visibleIndex: 2,
    destroy: function () {
        this.onDestroy();
    },
    render: function (table) {
        var dropdown = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select", "sa-table__show-column sa-table__header-extension");
        function update() {
            var hiddenColumns = table.columns.filter(function (column) { return !column.isVisible; });
            if (hiddenColumns.length == 0) {
                dropdown.style.display = "none";
                return;
            }
            dropdown.style.display = "inline-block";
            dropdown.innerHTML = "";
            var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
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
                var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
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
            table.setColumnVisibility(val, true);
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
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "showentries",
    visibleIndex: 3,
    render: function (table) {
        function getEntriesDropdown(table) {
            var el = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select");
            var optionsValues = ["1", "5", "10", "25", "50", "75", "100"];
            optionsValues.forEach(function (val) {
                var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
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
        var selectorContainer = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("div", "sa-table__entries");
        var showSpan = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("span", "sa-table__entries-label sa-table__entries-label--right", {
            innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showLabel"),
        });
        var entriesSpan = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("span", "sa-table__entries-label sa-table__entries-label--left", {
            innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("entriesLabel"),
        });
        selectorContainer.appendChild(showSpan);
        selectorContainer.appendChild(getEntriesDropdown(table));
        selectorContainer.appendChild(entriesSpan);
        return selectorContainer;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "removerows",
    visibleIndex: -1,
    render: function (table) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--green sa-table__header-extension ", { innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("removeRows") });
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
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "changelocale",
    visibleIndex: 1,
    render: function (table) {
        var locales = table.getLocales();
        if (locales.length < 2)
            return null;
        var el = (_utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select", "sa-table__header-extension", {}));
        var optionsValues = [_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("changeLocale")].concat(locales);
        optionsValues.forEach(function (val) {
            var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");







var Table = /** @class */ (function () {
    function Table(survey, data, options, _columns) {
        var _this = this;
        if (_columns === void 0) { _columns = []; }
        this.survey = survey;
        this.data = data;
        this.options = options;
        this._columns = _columns;
        this.haveCommercialLicense = false;
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
                    isVisible: question.getType() !== "file",
                    isPublic: true,
                    location: _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Column,
                };
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
        this.haveCommercialLicense =
            Table.haveCommercialLicense ||
                (!!options &&
                    (typeof options.haveCommercialLicense !== "undefined"
                        ? options.haveCommercialLicense
                        : false));
    }
    Table.prototype.getData = function () {
        return this.data;
    };
    Table.prototype.render = function (targetNode) {
        targetNode.innerHTML = "";
        if (!this.haveCommercialLicense) {
            targetNode.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createCommercialLicenseLink"])());
        }
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
        if (column.location !== _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Column)
            return false;
        return column.isVisible;
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
    Table.prototype.setColumnVisibility = function (columnName, isVisible) {
        var column = this.getColumnByName(columnName);
        column.isVisible = isVisible;
        this.onColumnsVisibilityChanged.fire(this, {
            columnName: columnName,
            columnVisibility: isVisible,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.setColumnWidth = function (columnName, width) {
        var column = this.getColumnByName(columnName);
        column.width = width;
        this.onStateChanged.fire(this, this.state);
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
            if (!newState)
                return;
            if (typeof newState.locale !== "undefined") {
                _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = newState.locale;
                this.survey.locale = newState.locale;
                this.initTableData(this.data);
            }
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
                    isPublic: column.isPublic,
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
                        column.isPublic = permission.isPublic;
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
    Table.haveCommercialLicense = false;
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
/*! exports provided: Tabulator, TabulatorRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return Tabulator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabulatorRow", function() { return TabulatorRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _tabulator_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabulator.scss */ "./src/tables/tabulator.scss");
/* harmony import */ var _tabulator_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabulator_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tabulator-tables */ "tabulator-tables");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tabulator_tables__WEBPACK_IMPORTED_MODULE_6__);







if (!!document) {
    var svgTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!../svgbundle.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html");
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
var defaultDownloadOptions = {
    pdf: {
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
    csv: { delimiter: "," },
    xlsx: { sheetName: "results" },
};
var defaultOptions = {
    tabulatorOptions: {},
    actionsColumnWidth: 60,
    downloadHiddenColumns: false,
    downloadButtons: ["pdf", "xlsx", "csv"],
    downloadOptions: defaultDownloadOptions,
};
var Tabulator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Tabulator, _super);
    function Tabulator(survey, data, options, _columns) {
        if (_columns === void 0) { _columns = []; }
        var _this = _super.call(this, survey, data, options, _columns) || this;
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
        var patchedOptions = {};
        Object.assign(patchedOptions, defaultOptions, options);
        _this.options = patchedOptions;
        return _this;
    }
    Object.defineProperty(Tabulator, "haveCommercialLicense", {
        set: function (val) {
            _table__WEBPACK_IMPORTED_MODULE_1__["Table"].haveCommercialLicense = val;
        },
        enumerable: false,
        configurable: true
    });
    Tabulator.prototype.render = function (targetNode) {
        _super.prototype.render.call(this, targetNode);
        targetNode.className += " sa-table sa-tabulator";
        var columns = this.getColumns();
        var data = this.tableData;
        var header = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-tabulator__header");
        var paginationElement = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-tabulator__pagination-container");
        this.tableContainer = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        targetNode.appendChild(header);
        targetNode.appendChild(this.tableContainer);
        var config = {};
        Object.assign(config, {
            data: data,
            layout: "fitColumns",
            pagination: "local",
            paginationSize: this.currentPageSize,
            movableColumns: true,
            maxHeight: "100%",
            columns: columns,
            rowFormatter: this.rowFormatter,
            paginationElement: paginationElement,
            columnMoved: this.columnMovedCallback,
            columnResized: this.columnResizedCallback,
            tooltipsHeader: true,
            tooltips: function (cell) { return cell.getValue(); },
            downloadRowRange: "all",
            columnMinWidth: 248,
            paginationButtonCount: 3,
        }, this.options.tabulatorOptions);
        this.tabulatorTables = new tabulator_tables__WEBPACK_IMPORTED_MODULE_6___default.a(this.tableContainer, config);
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
        this.options.downloadButtons.forEach(function (type) {
            container.appendChild(createDownloadButton(type, _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString(type + "DownloadCaption")));
        });
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
        var columns = this.columns.map(function (column, index) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                field: column.name,
                title: (question && question.title) || column.displayName,
                width: column.width,
                widthShrink: !column.width ? 1 : 0,
                visible: _this.isColumnVisible(column),
                headerSort: false,
                download: _this.options.downloadHiddenColumns ? true : undefined,
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
            minWidth: this.options.actionsColumnWidth,
            width: this.options.actionsColumnWidth,
        });
        return columns;
    };
    Tabulator.prototype.setColumnVisibility = function (columnName, isVisible) {
        _super.prototype.setColumnVisibility.call(this, columnName, isVisible);
        if (this.isRendered) {
            if (isVisible) {
                this.tabulatorTables.showColumn(columnName);
            }
            else {
                this.tabulatorTables.hideColumn(columnName);
            }
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
        this.tabulatorTables.download(type, "results." + type, this.options.downloadOptions[type] || defaultOptions.downloadOptions[type]);
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
/*! exports provided: DocumentHelper, options, allowDomRendering, createCommercialLicenseLink, DataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return DocumentHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowDomRendering", function() { return allowDomRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommercialLicenseLink", function() { return createCommercialLicenseLink; });
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
function createCommercialLicenseLink() {
    var container = DocumentHelper.createElement("div", "sa-commercial");
    var link = DocumentHelper.createElement("a", "sa-commercial__text", {
        href: "https://www.surveyjs.io/Buy",
        target: "_blank",
    });
    var containerSpan = DocumentHelper.createElement("span", "");
    var icon = DocumentHelper.createSvgElement("noncommercial");
    var textSpan = DocumentHelper.createElement("span", "sa-commercial__product", {
        innerHTML: "Please purchase a SurveyJS Analytics developer license\n        to\n        use it in your\n        app.",
    });
    container.appendChild(link).appendChild(containerSpan);
    containerSpan.appendChild(icon);
    containerSpan.appendChild(textSpan);
    return container;
}
var DataHelper = /** @class */ (function () {
    function DataHelper() {
    }
    DataHelper.zipArrays = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        var zipArray = [];
        var _loop_1 = function (i) {
            zipArray[i] = [];
            arrays.forEach(function (arr) {
                zipArray[i].push(arr[i]);
            });
        };
        for (var i = 0; i < arrays[0].length; i++) {
            _loop_1(i);
        }
        return zipArray;
    };
    DataHelper.unzipArrays = function (zipArray) {
        var arrays = [];
        zipArray.forEach(function (value, i) {
            value.forEach(function (val, j) {
                if (!arrays[j])
                    arrays[j] = [];
                arrays[j][i] = val;
            });
        });
        return arrays;
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
        return { keys: keysAndValues[0], values: keysAndValues[1] };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZhcnNpLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vbm9yd2VnaWFuLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vcnVzc2lhbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYmxlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFidWxhdG9yLnNjc3M/NGZlNyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYnVsYXRvci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXktY29yZVwiLFwiY29tbW9uanNcIjpcInN1cnZleS1jb3JlXCIsXCJhbWRcIjpcInN1cnZleS1jb3JlXCJ9Iiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJUYWJ1bGF0b3JcIixcImNvbW1vbmpzMlwiOlwidGFidWxhdG9yLXRhYmxlc1wiLFwiY29tbW9uanNcIjpcInRhYnVsYXRvci10YWJsZXNcIixcImFtZFwiOlwidGFidWxhdG9yLXRhYmxlc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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TSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFRLEVBQUUsQ0FBUTtZQUNqQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRWEsdUJBQVksR0FBMUIsVUFBMkIsS0FBYSxFQUFFLFFBQWdCO1FBQ3hELE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsTkQseUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoic3VydmV5LmFuYWx5dGljcy50YWJ1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcInRhYnVsYXRvci10YWJsZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlBbmFseXRpY3NUYWJ1bGF0b3JcIiwgW1wic3VydmV5LWNvcmVcIiwgXCJ0YWJ1bGF0b3ItdGFibGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc1RhYnVsYXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwidGFidWxhdG9yLXRhYmxlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5QW5hbHl0aWNzVGFidWxhdG9yXCJdID0gZmFjdG9yeShyb290W1wiU3VydmV5XCJdLCByb290W1wiVGFidWxhdG9yXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RhYnVsYXRvcl90YWJsZXNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJpZXMvdGFidWxhdG9yLnRzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRldGFpbFxcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMS41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWRyYWdcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMyA1bC0xIDEgMSAxSDlWM2wxIDEgMS0xLTMtMy0zIDMgMSAxIDEtMXY0SDNsMS0xLTEtMS0zIDMgMyAzIDEtMS0xLTFoNHY0bC0xLTEtMSAxIDMgMyAzLTMtMS0xLTEgMVY5aDRsLTEgMSAxIDEgMy0zelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLWhpZGVcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDFcXFwiIGQ9XFxcIk0xMi43OSA0LjJMMTYgMWwtMS0xLTMuMzIgMy4zMkMxMC41NyAyLjU1IDkuMzIgMiA4IDIgMy42MyAyIDAgNy45NyAwIDcuOTdzMS4yNyAyLjEgMy4yMSAzLjgybC0zLjIzIDMuMjMuOTguOTggMy4zNS0zLjM0QzUuNDEgMTMuNDQgNi42NyAxNCA4IDE0YzQuMzcgMCA4LTYgOC02cy0xLjI3LTIuMDktMy4yMS0zLjh6TTIgNy45N2MxLjA3LTEuNDcgMy42MS00IDYtNCAuOCAwIDEuNi4yNyAyLjM1LjY4bC0uNzguNzhjLS40Ni0uMjktLjk5LS40Ni0xLjU3LS40Ni0xLjY2IDAtMyAxLjM0LTMgMyAwIC41OC4xNyAxLjExLjQ2IDEuNTdsLS45Ny45N0ExMy4zOCAxMy4zOCAwIDAgMSAyIDcuOTd6bTYgNGMtLjggMC0xLjU5LS4yNy0yLjMzLS42N2wuNzgtLjc3Yy40NS4yNy45OC40NCAxLjU1LjQ0IDEuNjYgMCAzLTEuMzQgMy0zIDAtLjU3LS4xNy0xLjA5LS40NC0xLjU1bC45OC0uOThjMS4xMS44NyAyLjAxIDEuOTEgMi40NiAyLjUyLTEuMDcgMS40OC0zLjYxIDQuMDEtNiA0LjAxelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1ha2Vwcml2YXRlXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI4XFxcIiBjeT1cXFwiNFxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTggOGMtMy4zMSAwLTYgMi43My02IDQuNjdTNS4yNyAxNSA4IDE1czYtLjQgNi0yLjMzUzExLjMxIDggOCA4elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1ha2VwdWJsaWNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjZcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTAgNWMwIC4zNC0uMDYuNjctLjE0Ljk5LjA1IDAgLjA5LjAxLjE0LjAxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zQzguOTcgMCA4LjA3LjUyIDcuNTMgMS4zIDguOTggMS45MSAxMCAzLjMzIDEwIDV6TTYgOWMtMy4zMSAwLTYgMi43My02IDQuNjdTMy4yNyAxNiA2IDE2czYtLjQgNi0yLjMzUzkuMzEgOSA2IDl6TTEwIDdjLS4xOSAwLS4zOC4wMS0uNTcuMDNhNC4xNCA0LjE0IDAgMCAxLTEuMzcgMS4zOWMzIC44MyA1LjIzIDMuMzEgNS40MiA1LjI4IDEuNDQtLjMxIDIuNTItLjkyIDIuNTItMi4wM0MxNiA5Ljc0IDEzLjMxIDcgMTAgN3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tb3ZldG9kZXRhaWxzXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjcuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMTMuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEyIDFoM3Y5aC0zek0yLjAyIDcuMDJMMSA2IDAgN2wzIDMgMy0zLTEtMS0uOTQuOTRDNC4zMyA0LjczIDYuMjEgMyA4LjUgM2MuMTcgMCAuMzMuMDMuNS4wNVYxLjAzQzguODMgMS4wMSA4LjY3IDEgOC41IDEgNS4wOCAxIDIuMjcgMy42NiAyLjAyIDcuMDJ6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbm9uY29tbWVyY2lhbFxcXCI+PHBhdGggZD1cXFwiTTggMEwwIDE1aDE2TDggMHptMSAxM0g3di0yaDJ2MnptLTItM1Y1aDJ2NUg3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLXNvcnRpbmdcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk04IDNsMiAyIDEtMS0zLTMtMyAzIDEgMXpNOCAxM2wtMi0yLTEgMSAzIDMgMy0zLTEtMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48L3N2Zz5cIjsiLCJleHBvcnQgKiBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuLy9sb2NhbGl6YXRpb25cclxuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZhcnNpXCI7XHJcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mcmVuY2hcIjtcclxuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL25vcndlZ2lhblwiO1xyXG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vcnVzc2lhblwiO1xyXG5cclxuLy9leHRlbnNpb25zXHJcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnNcIjtcclxuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvaGVhZGVyZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9jb2x1bW5leHRlbnNpb25zXCI7XHJcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2RldGFpbHNleHRlbnNpb25zXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi4vdGFibGVzL3RhYnVsYXRvclwiO1xyXG5leHBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zXCI7XHJcbmV4cG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XHJcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcclxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcclxuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxyXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxyXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcclxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXHJcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxyXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcclxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxyXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxyXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxyXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxyXG4gIHJlbW92ZVJvd3M6IFwiUmVtb3ZlIHJvd3NcIixcclxuICBzaG93TGFiZWw6IFwiU2hvd1wiLFxyXG4gIGVudHJpZXNMYWJlbDogXCJlbnRyaWVzXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXHJcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXHJcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcclxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxyXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxyXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXHJcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxyXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXHJcbiAgaGlkZUJ1dHRvbjogXCJIaWRlXCIsXHJcbiAgbWFrZVByaXZhdGVCdXR0b246IFwiTWFrZSBwcml2YXRlXCIsXHJcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJNYWtlIHB1YmxpY1wiLFxyXG4gIHNob3dCdXR0b246IFwiU2hvd1wiLFxyXG4gIHJlc2V0RmlsdGVyOiBcIlJlc2V0IEZpbHRlclwiLFxyXG4gIGNoYW5nZUxvY2FsZTogXCJDaGFuZ2UgTG9jYWxlXCIsXHJcbiAgY2xlYXJCdXR0b246IFwiQ2xlYXJcIixcclxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXHJcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHQgT3JkZXJcIixcclxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcclxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxyXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXHJcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCIsXHJcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIlNob3cgcGVyY2VudGFnZXNcIixcclxuICBoaWRlUGVyY2VudGFnZXM6IFwiSGlkZSBwZXJjZW50YWdlc1wiLFxyXG4gIHBkZkRvd25sb2FkQ2FwdGlvbjogXCJQREZcIixcclxuICB4bHN4RG93bmxvYWRDYXB0aW9uOiBcIkV4Y2VsXCIsXHJcbiAgY3N2RG93bmxvYWRDYXB0aW9uOiBcIkNTVlwiLFxyXG4gIHNhdmVEaWFncmFtQXNQTkc6IFwiRG93bmxvYWQgcGxvdCBhcyBhIHBuZ1wiLFxyXG4gIGhpZGVFbXB0eUFuc3dlcnM6IFwiSGlkZSBlbXB0eSBhbnN3ZXJzXCIsXHJcbiAgc2hvd0VtcHR5QW5zd2VyczogXCJTaG93IGVtcHR5IGFuc3dlcnNcIixcclxuICBcInRvcE5WYWx1ZVRleHQtMVwiOiBcIkFsbCBhbnN3ZXJzXCIsXHJcbiAgXCJ0b3BOVmFsdWVUZXh0NVwiOiBcIlRvcCA1IGFuc3dlcnNcIixcclxuICBcInRvcE5WYWx1ZVRleHQxMFwiOiBcIlRvcCAxMCBhbnN3ZXJzXCIsXHJcbiAgXCJ0b3BOVmFsdWVUZXh0MjBcIjogXCJUb3AgMjAgYW5zd2Vyc1wiLFxyXG59O1xyXG5cclxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXHJcbi8vbG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xyXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJFbmdsaXNoXCI7XHJcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIGZhcnNpU3RyaW5ncyA9IHtcclxuICBncm91cEJ1dHRvbjogXCLar9ix2YjZhyDYqNmG2K/bjCDYqNinXCIsXHJcbiAgdW5ncm91cEJ1dHRvbjogXCLYrdiw2YEg2q/YsdmI2YdcIixcclxuICBzZWxlY3RCdXR0b246IFwi2KfZhtiq2K7Yp9ioXCIsXHJcbiAgaGlkZUNvbHVtbjogXCLZhdiu2YHbjCDaqdix2K/ZhiDYs9iq2YjZhlwiLFxyXG4gIHNob3dDb2x1bW46IFwi2YbZhdin24zYtCDYs9iq2YjZhlwiLFxyXG4gIG1vdmVUb0RldGFpbDogXCLYp9mG2KrZgtin2YQg2KjZhyDYrNiy2KbbjNin2KpcIixcclxuICBzaG93QXNDb2x1bW46IFwi2YbZhdin24zYtCDYqNmHINi52YbZiNin2YYg2LPYqtmI2YZcIixcclxuICB2aXN1YWxpemVyX3RleHQ6IFwi2YXYqtmI2YYg2K/YsSDYrNiv2YjZhFwiLFxyXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcItin2KjYsSDaqdmE2YXYp9iqXCIsXHJcbiAgY2hhcnRUeXBlX2JhcjogXCLZhduM2YTZhyDYp9uMXCIsXHJcbiAgY2hhcnRUeXBlX3BpZTogXCLYr9in2KjYsdmHINin24wocGllKVwiLFxyXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcItm+2LHYp9qp2YbYr9qv24woU2NhdHRlcilcIixcclxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi2LnZgtix2KjZhyDYp9uMXCIsXHJcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcclxuICBoaWRlQnV0dG9uOiBcItmF2K7ZgduMXCIsXHJcbiAgcmVzZXRGaWx0ZXI6IFwi2KjYp9iy2YbYtNin2YbbjCDZgduM2YTYqtix2YfYp1wiLFxyXG4gIGNsZWFyQnV0dG9uOiBcItm+2KfaqSDaqdix2K/ZhlwiLFxyXG4gIGFkZEVsZW1lbnQ6IFwi2KfZhtiq2K7Yp9ioINiz2YjYp9mEINio2LHYp9uMINmG2YXYp9uM2LQuLi5cIlxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmYVwiXSA9IGZhcnNpU3RyaW5ncztcclxubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZmFcIl0gPSBcIkZhcnNpKFBlcnNpYW4pXCI7XHJcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIGZyZW5jaFN0cmluZ3MgPSB7XHJcbiAgICBncm91cEJ1dHRvbjogXCJHcm91cGVyXCIsXHJcbiAgICB1bmdyb3VwQnV0dG9uOiBcIkRpc3NvY2llclwiLFxyXG4gICAgc2VsZWN0QnV0dG9uOiBcIlPDqWxlY3Rpb25uZXJcIixcclxuICAgIGhpZGVDb2x1bW46IFwiTWFzcXVlciBjb2xvbm5lXCIsXHJcbiAgICBzaG93Q29sdW1uOiBcIkFmZmljaGVyIGNvbG9ubmVcIixcclxuICAgIG1ha2VQcml2YXRlQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHByaXbDqVwiLFxyXG4gICAgbWFrZVB1YmxpY0NvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwdWJsaWNcIixcclxuICAgIG1vdmVUb0RldGFpbDogXCJEw6lwbGFjZXIgdmVycyBkw6l0YWlsc1wiLFxyXG4gICAgc2hvd0FzQ29sdW1uOiBcIkFmZmljaGVyIGVuIGNvbG9ubmVcIixcclxuICAgIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0ZXMgZW4gdGFibGVcIixcclxuICAgIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk51YWdlcyBkZSBtb3RzXCIsXHJcbiAgICBjaGFydFR5cGVfYmFyOiBcIkJhcnJlc1wiLFxyXG4gICAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiQmFycmVzIGVtcGlsw6llc1wiLFxyXG4gICAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkFubmVhdVwiLFxyXG4gICAgY2hhcnRUeXBlX3BpZTogXCJTZWN0ZXVyc1wiLFxyXG4gICAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiTnVhZ2VzIGRlIHBvaW50c1wiLFxyXG4gICAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXHJcbiAgICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxlc1wiLFxyXG4gICAgaGlkZUJ1dHRvbjogXCJNYXNxdWVyXCIsXHJcbiAgICByZXNldEZpbHRlcjogXCJSYWZyYWljaGlyIEZpbHRyZXNcIixcclxuICAgIGNsZWFyQnV0dG9uOiBcIlJhZnJhaWNoaXJcIixcclxuICAgIGFkZEVsZW1lbnQ6IFwiQ2hvaXNpciBsYSBxdWVzdGlvbiDDoCBhZmZpY2hlci4uLlwiLFxyXG4gICAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1dFwiLFxyXG4gICAgYXNjT3JkZXI6IFwiQXNjZW5kYW50XCIsXHJcbiAgICBkZXNjT3JkZXI6IFwiRGVzY2VuZGFudFwiLFxyXG4gICAgc2hvd01pbm9yQ29sdW1uczogXCJBZmZpY2hlciBsZXMgY29sb25uZXMgbWluZXVyZXNcIlxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN0cmluZ3M7XHJcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZyXCJdID0gXCJGcmVuY2hcIjsiLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBub3J3ZWdpYW5TdHJpbmdzID0ge1xyXG4gIGdyb3VwQnV0dG9uOiBcIkdydXBwZXJcIixcclxuICB1bmdyb3VwQnV0dG9uOiBcIk9wcGhldiBncnVwcGVyaW5nXCIsXHJcbiAgc2VsZWN0QnV0dG9uOiBcIlZlbGdcIixcclxuICBoaWRlQ29sdW1uOiBcIlNranVsIGtvbG9ubmVcIixcclxuICBzaG93Q29sdW1uOiBcIlZpcyBrb2xvbm5lXCIsXHJcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiR2rDuHIga29sb25uZSBwcml2YXRcIixcclxuICBtYWtlUHVibGljQ29sdW1uOiBcIkdqw7hyIGtvbG9ubmUgb2ZmZW50bGlnXCIsXHJcbiAgbW92ZVRvRGV0YWlsOiBcIkZseXR0IHRpbCBkZXRhbGplcnQgdmlzbmluZ1wiLFxyXG4gIHNob3dBc0NvbHVtbjogXCJWaXMgc29tIGtvbG9ubmVcIixcclxuICBmaWx0ZXJQbGFjZWhvbGRlcjogXCJTw7hrLi4uXCIsXHJcbiAgcmVtb3ZlUm93czogXCJGamVybiByYWRlclwiLFxyXG4gIHNob3dMYWJlbDogXCJWaXNcIixcclxuICBlbnRyaWVzTGFiZWw6IFwib3BwZsO4cmluZ2VyXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRhYmVsbHZpc25pbmdcIixcclxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJPcmRza3lcIixcclxuICBjaGFydFR5cGVfYmFyOiBcIlN0b2xwZWRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFibGV0IHN0b2xwZWRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiSGp1bGRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfcGllOiBcIlNla3RvcmRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJQdW5rdGRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiTcOlbGVkaWFncmFtXCIsXHJcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJLdWxlZGlhZ3JhbVwiLFxyXG4gIGhpZGVCdXR0b246IFwiU2tqdWxcIixcclxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJHasO4ciBwcml2YXRcIixcclxuICBtYWtlUHVibGljQnV0dG9uOiBcIkdqw7hyIG9mZmVudGxpZ1wiLFxyXG4gIHNob3dCdXR0b246IFwiVmlzXCIsXHJcbiAgcmVzZXRGaWx0ZXI6IFwiTnVsbHN0aWxsIGZpbHRlclwiLFxyXG4gIGNoYW5nZUxvY2FsZTogXCJCeXR0IHNwcsOla1wiLFxyXG4gIGNsZWFyQnV0dG9uOiBcIlTDuG1cIixcclxuICBhZGRFbGVtZW50OiBcIlZlbGcgc3DDuHJzbcOlbC4uLlwiLFxyXG4gIGRlZmF1bHRPcmRlcjogXCJTdGFuZGFyZFwiLFxyXG4gIGFzY09yZGVyOiBcIlN0aWdlbmRlXCIsXHJcbiAgZGVzY09yZGVyOiBcIlN5bmtlbmRlXCIsXHJcbiAgc2hvd01pbm9yQ29sdW1uczogXCJWaXMgbWluZHJlIGtvbG9ubmVyXCIsXHJcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiQW5uZXQgb2cga29tbWVudGFyZXJcIixcclxuICBzaG93UGVyY2VudGFnZXM6IFwiVmlzIHByb3NlbnRlclwiLFxyXG4gIGhpZGVQZXJjZW50YWdlczogXCJTa2p1bCBwcm9zZW50ZXJcIixcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wibm9cIl0gPSBub3J3ZWdpYW5TdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJub1wiXSA9IFwiTm9yd2VnaWFuXCI7XHJcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIHJ1c3NpYW5TdHJpbmdzID0ge1xyXG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXHJcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXHJcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxyXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcclxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXHJcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxyXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHVibGljXCIsXHJcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXHJcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXHJcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXHJcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcclxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxyXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxyXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXHJcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxyXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXHJcbiAgaGlkZUJ1dHRvbjogXCLQodC60YDRi9GC0YxcIixcclxuICBzaG93QnV0dG9uOiBcItCf0L7QutCw0LfQsNGC0YxcIixcclxuICByZXNldEZpbHRlcjogXCLQntGH0LjRgdGC0LjRgtGMINGE0LjQu9GM0YLRgFwiLFxyXG4gIGNoYW5nZUxvY2FsZTogXCLQodC80LXQvdC40YLRjCDRj9C30YvQulwiLFxyXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXHJcbiAgYWRkRWxlbWVudDogXCJDaG9vc2UgcXVlc3Rpb24gdG8gc2hvdy4uLlwiLFxyXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0XCIsXHJcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXHJcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcclxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxyXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk90aGVyIGl0ZW1zIGFuZCBjb21tZW50c1wiLFxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJydVwiXSA9IHJ1c3NpYW5TdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJydVwiXSA9IFwiUnVzc2lhblwiO1xyXG4iLCJpbXBvcnQgeyBlbmdsaXNoU3RyaW5ncyB9IGZyb20gXCIuL2xvY2FsaXphdGlvbi9lbmdsaXNoXCI7XHJcblxyXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcclxuICBjdXJyZW50TG9jYWxlVmFsdWU6IFwiXCIsXHJcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXHJcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXHJcbiAgbG9jYWxlTmFtZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxyXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxyXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID09PSB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZVxyXG4gICAgICA/IFwiXCJcclxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcclxuICB9LFxyXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcclxuICB9LFxyXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xyXG4gIH0sXHJcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xyXG4gIH0sXHJcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcclxuICAgICAgPyB0aGlzLmxvY2FsZXNbdGhpcy5jdXJyZW50TG9jYWxlXVxyXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xyXG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XHJcbiAgICB2YXIgcmVzdWx0ID0gbG9jW3N0ck5hbWVdO1xyXG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSxcclxuICBnZXRMb2NhbGVzOiBmdW5jdGlvbigpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHZhciByZXMgPSBbXTtcclxuICAgIHJlcy5wdXNoKFwiXCIpO1xyXG4gICAgaWYgKHRoaXMuc3VwcG9ydGVkTG9jYWxlcyAmJiB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcclxuICAgICAgICByZXMucHVzaChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXMuc29ydCgpO1xyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcclxuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcclxuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XHJcbiIsImV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24ge1xyXG4gIENvbHVtbixcclxuICBSb3csXHJcbn1cclxuZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUge1xyXG4gIFRleHQsXHJcbiAgRmlsZUxpbmssXHJcbiAgSW1hZ2UsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBkYXRhVHlwZTogQ29sdW1uRGF0YVR5cGU7XHJcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGlzUHVibGljOiBib29sZWFuO1xyXG4gIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uO1xyXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcclxuICBsb2NhbGU/OiBzdHJpbmc7XHJcbiAgZWxlbWVudHM/OiBJVGFibGVDb2x1bW5bXTtcclxuICBwYWdlU2l6ZT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGVybWlzc2lvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGlzUHVibGljOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XHJcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkxvY2F0aW9uLCBJVGFibGVDb2x1bW4gfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxyXG4gIG5hbWU6IFwiZHJhZ1wiLFxyXG4gIHZpc2libGVJbmRleDogMCxcclxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJidXR0b25cIixcclxuICAgICAgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIlxyXG4gICAgKTtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwiZHJhZ1wiKSk7XHJcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICB0YWJsZS5lbmFibGVDb2x1bW5SZW9yZGVyKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9LFxyXG59KTtcclxuXHJcblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XHJcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXHJcbiAgbmFtZTogXCJzb3J0XCIsXHJcbiAgdmlzaWJsZUluZGV4OiAxLFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xyXG4gICAgY29uc3QgYXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYXNjT3JkZXJcIik7XHJcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwic29ydGluZ1wiKTtcclxuICAgIGJ0bi50aXRsZSA9IFwiXCI7XHJcbiAgICB2YXIgZGlyZWN0aW9uID0gXCJhc2NcIjtcclxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcclxuICAgICAgICBidG4udGl0bGUgPSBkZXNjVGl0bGU7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkZXNjXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnRuLnRpdGxlID0gYXNjVGl0bGU7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhc2NcIjtcclxuICAgICAgfVxyXG4gICAgICB0YWJsZS5zb3J0QnlDb2x1bW4ob3B0aW9ucy5jb2x1bW5OYW1lLCBkaXJlY3Rpb24pO1xyXG4gICAgfTtcclxuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxyXG4gIG5hbWU6IFwiaGlkZVwiLFxyXG4gIHZpc2libGVJbmRleDogMixcclxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xyXG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XHJcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUNvbHVtblwiKTtcclxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxyXG4gIG5hbWU6IFwibW92ZXRvZGV0YWlsc1wiLFxyXG4gIHZpc2libGVJbmRleDogMyxcclxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwibW92ZXRvZGV0YWlsc1wiKTtcclxuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XHJcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRhYmxlLnNldENvbHVtbkxvY2F0aW9uKG9wdGlvbnMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxyXG4gIG5hbWU6IFwiZmlsdGVyXCIsXHJcbiAgdmlzaWJsZUluZGV4OiA0LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XHJcbiAgICB2YXIgZWwgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcclxuICAgICAgXCJzYS10YWJsZV9fZmlsdGVyXCIsXHJcbiAgICAgIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJQbGFjZWhvbGRlclwiKVxyXG4gICAgKTtcclxuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGVsLm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgdGFibGUuYXBwbHlDb2x1bW5GaWx0ZXIob3B0aW9ucy5jb2x1bW5OYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcclxuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcclxuICBuYW1lOiBcIm1ha2VwdWJsaWNcIixcclxuICB2aXNpYmxlSW5kZXg6IC0xLFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgbWFrZVByaXZhdGVTdmcgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwibWFrZXByaXZhdGVcIik7XHJcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XHJcbiAgICBjb25zdCBjb2x1bW4gPSB0YWJsZS5nZXRDb2x1bW5CeU5hbWUob3B0aW9ucy5jb2x1bW5OYW1lKTtcclxuXHJcbiAgICB1cGRhdGVTdGF0ZShjb2x1bW4pO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKG1ha2VQcml2YXRlU3ZnKTtcclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHVibGljU3ZnKTtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29sdW1uLmlzUHVibGljID0gIWNvbHVtbi5pc1B1YmxpYztcclxuICAgICAgdXBkYXRlU3RhdGUoY29sdW1uKTtcclxuICAgICAgdGFibGUub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJlxyXG4gICAgICAgIHRhYmxlLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGFibGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShjb2x1bW46IElUYWJsZUNvbHVtbikge1xyXG4gICAgICBpZiAoY29sdW1uLmlzUHVibGljKSB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVByaXZhdGVDb2x1bW5cIik7XHJcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fc3ZnLWJ1dHRvbi0tYWN0aXZlXCI7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNDb2x1bW5cIik7XHJcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBtYWtlUHVibGljU3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi4vdGFibGVcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlscyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxyXG4gICAgcHJpdmF0ZSByb3c6IFRhYmxlUm93LFxyXG4gICAgcHJvdGVjdGVkIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICB2YXIgZGV0YWlsc1RhYmxlID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJ0YWJsZVwiLFxyXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxyXG4gICAgKTtcclxuICAgIHRoaXMuZGV0YWlsc1RhYmxlID0gZGV0YWlsc1RhYmxlO1xyXG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgZGV0YWlsc1RhYmxlOiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgbG9jYXRpb24gPSBcImRldGFpbHNcIjtcclxuXHJcbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmRldGFpbHNUYWJsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgIHRoaXMudGFibGUuY29sdW1uc1xyXG4gICAgICAuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3cgJiYgY29sdW1uKVxyXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgICAgdmFyIHJvdyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNhLXRhYmxlX19kZXRhaWxcIik7XHJcbiAgICAgICAgdmFyIHRkMSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7XHJcbiAgICAgICAgICBpbm5lckhUTUw6IGNvbHVtbi5kaXNwbGF5TmFtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdGQyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldFJvd0RhdGEoKVtjb2x1bW4ubmFtZV07XHJcbiAgICAgICAgdmFyIHRkMyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZDMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTaG93QXNDb2x1bW5CdXR0b24oY29sdW1uLm5hbWUpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQzKTtcclxuICAgICAgICByb3dzLnB1c2gocm93KTtcclxuICAgICAgfSk7XHJcbiAgICB2YXIgcm93ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2EtdGFibGVfX2RldGFpbFwiKTtcclxuICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7IGNvbFNwYW46IDMgfSk7XHJcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGhpcy50YWJsZSk7XHJcbiAgICBleHRlbnNpb25zLnJlbmRlcih0ZCwgXCJkZXRhaWxzXCIsIHsgcm93OiB0aGlzLnJvdyB9KTtcclxuICAgIGlmICh0ZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xyXG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICByb3dzLnB1c2gocm93KTtcclxuICAgIH1cclxuXHJcbiAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbiA9IChjb2x1bW5OYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImJ1dHRvblwiLFxyXG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JheVwiLFxyXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKSB9XHJcbiAgICApO1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLnRhYmxlLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICBpZiAoISF0aGlzLmRldGFpbHNUYWJsZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xyXG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcclxuXHJcblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XHJcbiAgbG9jYXRpb246IFwiaGVhZGVyXCIsXHJcbiAgbmFtZTogXCJmaWx0ZXJcIixcclxuICB2aXNpYmxlSW5kZXg6IDAsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgaW5wdXQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcclxuICAgICAgXCJzYS10YWJsZV9fZ2xvYmFsLWZpbHRlciBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLFxyXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcclxuICAgICk7XHJcbiAgICBpbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIHRhYmxlLmFwcGx5RmlsdGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcclxuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcclxuICBuYW1lOiBcInNob3djb2x1bW5cIixcclxuICB2aXNpYmxlSW5kZXg6IDIsXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGRyb3Bkb3duID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJzZWxlY3RcIixcclxuICAgICAgXCJzYS10YWJsZV9fc2hvdy1jb2x1bW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIlxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gdGFibGUuY29sdW1ucy5maWx0ZXIoXHJcbiAgICAgICAgKGNvbHVtbjogYW55KSA9PiAhY29sdW1uLmlzVmlzaWJsZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaGlkZGVuQ29sdW1ucy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgIGRyb3Bkb3duLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKSxcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblxyXG4gICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XHJcbiAgICAgICAgdmFyIHRleHQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XHJcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgdGl0bGU6IGNvbHVtbi5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBjb2x1bW4ubmFtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wZG93bi5vbmNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICghdmFsKSByZXR1cm47XHJcbiAgICAgIHRhYmxlLnNldENvbHVtblZpc2liaWxpdHkodmFsLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlKCk7XHJcblxyXG4gICAgdmFyIG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdXBkYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRhYmxlLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLmFkZChvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xyXG5cclxuICAgIHRoaXMub25EZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICB0YWJsZS5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5yZW1vdmUob25WaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZHJvcGRvd247XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxyXG4gIG5hbWU6IFwic2hvd2VudHJpZXNcIixcclxuICB2aXNpYmxlSW5kZXg6IDMsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xyXG4gICAgZnVuY3Rpb24gZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZWwgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCIsIFwiMjVcIiwgXCI1MFwiLCBcIjc1XCIsIFwiMTAwXCJdO1xyXG4gICAgICBvcHRpb25zVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICAgIHZhbHVlOiB2YWwsXHJcbiAgICAgICAgICB0ZXh0OiB2YWwsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGVsLnZhbHVlID0gU3RyaW5nKHRhYmxlLmdldFBhZ2VTaXplKCkpO1xyXG5cclxuICAgICAgZWwub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGFibGUuc2V0UGFnZVNpemUoTnVtYmVyKGVsLnZhbHVlKSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RvckNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXNcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNob3dTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJzcGFuXCIsXHJcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLXJpZ2h0XCIsXHJcbiAgICAgIHtcclxuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TGFiZWxcIiksXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwic3BhblwiLFxyXG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1sZWZ0XCIsXHJcbiAgICAgIHtcclxuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJlbnRyaWVzTGFiZWxcIiksXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd1NwYW4pO1xyXG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlKSk7XHJcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyaWVzU3Bhbik7XHJcbiAgICByZXR1cm4gc2VsZWN0b3JDb250YWluZXI7XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxyXG4gIG5hbWU6IFwicmVtb3Zlcm93c1wiLFxyXG4gIHZpc2libGVJbmRleDogLTEsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGUpIHtcclxuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImJ1dHRvblwiLFxyXG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JlZW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb24gXCIsXHJcbiAgICAgIHsgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicmVtb3ZlUm93c1wiKSB9XHJcbiAgICApO1xyXG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRhYmxlLmdldENyZWF0ZWRSb3dzKCkuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgaWYgKHJvdy5nZXRJc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxyXG4gIG5hbWU6IFwiY2hhbmdlbG9jYWxlXCIsXHJcbiAgdmlzaWJsZUluZGV4OiAxLFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XHJcbiAgICB2YXIgbG9jYWxlcyA9IHRhYmxlLmdldExvY2FsZXMoKTtcclxuICAgIGlmIChsb2NhbGVzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgZWwgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIFwic2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIiwge30pXHJcbiAgICApO1xyXG4gICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYW5nZUxvY2FsZVwiKV0uY29uY2F0KFxyXG4gICAgICBsb2NhbGVzXHJcbiAgICApO1xyXG4gICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xyXG4gICAgICAgIHZhbHVlOiB2YWwsXHJcbiAgICAgICAgdGV4dDogdmFsLFxyXG4gICAgICB9KTtcclxuICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gICAgZWwub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHRhYmxlLmxvY2FsZSA9IGVsLnZhbHVlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlbDtcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcclxuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcInJvd1wiLFxyXG4gIG5hbWU6IFwiZGV0YWlsc1wiLFxyXG4gIHZpc2libGVJbmRleDogMCxcclxuICByZW5kZXI6IChfdGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImRldGFpbFwiKTtcclxuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TWlub3JDb2x1bW5zXCIpO1xyXG4gICAgYnRuLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZV9fcm93LWV4dGVuc2lvblwiO1xyXG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIG9wdGlvbnMucm93LnRvZ2dsZURldGFpbHMoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcclxuICBsb2NhdGlvbjogXCJyb3dcIixcclxuICBuYW1lOiBcInNlbGVjdFwiLFxyXG4gIHZpc2libGVJbmRleDogLTEsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoX3RhYmxlLCBvcHQpIHtcclxuICAgIHZhciByb3cgPSBvcHQucm93O1xyXG4gICAgdmFyIGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJpbnB1dFwiLFxyXG4gICAgICBcInNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCIsXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gcm93LmdldElzU2VsZWN0ZWQoKTtcclxuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByb3cudG9nZ2xlU2VsZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNoZWNrYm94O1xyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xyXG5cclxuaW50ZXJmYWNlIElUYWJsZUV4dGVuc2lvbiB7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmlzaWJsZUluZGV4OiBudW1iZXI7XHJcbiAgcmVuZGVyOiAodGFibGU6IFRhYmxlLCBvcHQ6IGFueSkgPT4gSFRNTEVsZW1lbnQ7XHJcbiAgZGVzdHJveT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUV4dGVuc2lvbnMge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGU6IFRhYmxlKSB7fVxyXG4gIHByaXZhdGUgc3RhdGljIGV4dGVuc2lvbnM6IHtcclxuICAgIFtsb2NhdGlvbjogc3RyaW5nXTogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPjtcclxuICB9ID0ge307XHJcbiAgcHJpdmF0ZSByZW5kZXJlZEV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gPSBbXTtcclxuXHJcbiAgcHVibGljIHJlbmRlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCwgbG9jYXRpb246IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xyXG4gICAgdmFyIGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tsb2NhdGlvbl07XHJcbiAgICBpZiAoISFleHRlbnNpb25zKSB7XHJcbiAgICAgIGV4dGVuc2lvbnMgPSB0aGlzLnNvcnRFeHRlbnNpb25zKGV4dGVuc2lvbnMpO1xyXG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgIGlmICghIWV4dGVuc2lvbi5yZW5kZXIpIHtcclxuICAgICAgICAgIHZhciBhY3Rpb24gPSBleHRlbnNpb24ucmVuZGVyKHRoaXMudGFibGUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgaWYgKCEhYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEV4dGVuc2lvbnMucHVzaChleHRlbnNpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICBpZiAoISFleHRlbnNpb24uZGVzdHJveSkgZXh0ZW5zaW9uLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZW5kZXJlZEV4dGVuc2lvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFeHRlbnNpb24oZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb24pIHtcclxuICAgIGlmICghdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0pXHJcbiAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dID0gW107XHJcbiAgICB0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXS5wdXNoKGV4dGVuc2lvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZpbmRFeHRlbnNpb24oXHJcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxyXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nXHJcbiAgKTogSVRhYmxlRXh0ZW5zaW9uIHtcclxuICAgIGlmICghdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXSkgcmV0dXJuIG51bGw7XHJcbiAgICB2YXIgZXh0ZW5zaW9uID0gdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXS5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICBleHRlbnNpb246IElUYWJsZUV4dGVuc2lvblxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBleHRlbnNpb24ubmFtZSA9PSBhY3Rpb25OYW1lO1xyXG4gICAgfSlbMF07XHJcbiAgICByZXR1cm4gZXh0ZW5zaW9uIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNvcnRFeHRlbnNpb25zKGV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4pIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRlbnNpb25zKSkgcmV0dXJuO1xyXG4gICAgcmV0dXJuIFtdXHJcbiAgICAgIC5jb25jYXQoZXh0ZW5zaW9ucy5maWx0ZXIoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLnZpc2libGVJbmRleCA+PSAwKSlcclxuICAgICAgLnNvcnQoKGZpcnN0RXh0ZW5zaW9uLCBzZWNvbmRFeHRlbnNpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gZmlyc3RFeHRlbnNpb24udmlzaWJsZUluZGV4IC0gc2Vjb25kRXh0ZW5zaW9uLnZpc2libGVJbmRleDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN1cnZleU1vZGVsLCBRdWVzdGlvbiwgRXZlbnQgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHtcclxuICBJUGVybWlzc2lvbixcclxuICBRdWVzdGlvbkxvY2F0aW9uLFxyXG4gIENvbHVtbkRhdGFUeXBlLFxyXG4gIElUYWJsZVN0YXRlLFxyXG4gIElUYWJsZUNvbHVtbixcclxufSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vZXh0ZW5zaW9ucy90YWJsZWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgaGF2ZUNvbW1lcmNpYWxMaWNlbnNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIHRhYmxlRGF0YTogYW55O1xyXG4gIHByb3RlY3RlZCBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XHJcbiAgcHJpdmF0ZSBoYXZlQ29tbWVyY2lhbExpY2Vuc2UgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxyXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXHJcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogYW55LFxyXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW11cclxuICApIHtcclxuICAgIGlmIChfY29sdW1ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXRUYWJsZURhdGEoZGF0YSk7XHJcbiAgICBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSA9IHRoaXMuc3VydmV5LmxvY2FsZTtcclxuXHJcbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1ucyhzdXJ2ZXkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmhhdmVDb21tZXJjaWFsTGljZW5zZSA9XHJcbiAgICAgIFRhYmxlLmhhdmVDb21tZXJjaWFsTGljZW5zZSB8fFxyXG4gICAgICAoISFvcHRpb25zICYmXHJcbiAgICAgICAgKHR5cGVvZiBvcHRpb25zLmhhdmVDb21tZXJjaWFsTGljZW5zZSAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgPyBvcHRpb25zLmhhdmVDb21tZXJjaWFsTGljZW5zZVxyXG4gICAgICAgICAgOiBmYWxzZSkpO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VTaXplOiBudW1iZXIgPSA1O1xyXG4gIHByb3RlY3RlZCBjdXJyZW50UGFnZU51bWJlcjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfcm93czogVGFibGVSb3dbXSA9IFtdO1xyXG4gIHByb3RlY3RlZCBpc0NvbHVtblJlb3JkZXJFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50PFxyXG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxyXG4gICAgYW55XHJcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuXHJcbiAgcHVibGljIG9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZDogRXZlbnQ8XHJcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXHJcbiAgICBhbnlcclxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xyXG5cclxuICBwdWJsaWMgb25Sb3dSZW1vdmVkOiBFdmVudDxcclxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcclxuICAgIGFueVxyXG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXHJcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgcm93OiBUYWJsZVJvd1xyXG4gICkgPT4gSFRNTEVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3Qgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0YXJnZXROb2RlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpZiAoIXRoaXMuaGF2ZUNvbW1lcmNpYWxMaWNlbnNlKSB7XHJcbiAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGVuYWJsZUNvbHVtblJlb3JkZXIoKSB7XHJcbiAgICB0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2FibGVDb2x1bW5SZW9yZGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFnZVNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlU2l6ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENyZWF0ZWRSb3dzKCk6IFRhYmxlUm93W10ge1xyXG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9yb3dzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckNyZWF0ZWRSb3dzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgcm93LmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcm93cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCkubWFwKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAocXVlc3Rpb24udGl0bGUgfHwgXCJcIikudHJpbSgpIHx8IHF1ZXN0aW9uLm5hbWUsXHJcbiAgICAgICAgZGF0YVR5cGU6XHJcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXHJcbiAgICAgICAgICAgID8gQ29sdW1uRGF0YVR5cGUuVGV4dFxyXG4gICAgICAgICAgICA6IENvbHVtbkRhdGFUeXBlLkZpbGVMaW5rLFxyXG4gICAgICAgIGlzVmlzaWJsZTogcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIixcclxuICAgICAgICBpc1B1YmxpYzogdHJ1ZSxcclxuICAgICAgICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgaXNDb2x1bW5WaXNpYmxlKGNvbHVtbjogSVRhYmxlQ29sdW1uKSB7XHJcbiAgICBpZiAoY29sdW1uLmxvY2F0aW9uICE9PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbikgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIGNvbHVtbi5pc1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBjb2x1bW5zKGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4pIHtcclxuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgdGhpcy5yZWZyZXNoKHRydWUpO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRUYWJsZURhdGEoZGF0YTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIHZhciBkYXRhSXRlbTogYW55ID0ge307XHJcbiAgICAgIHRoaXMuc3VydmV5LmRhdGEgPSBpdGVtO1xyXG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSBpdGVtW2NvbHVtbi5uYW1lXTtcclxuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcclxuICAgICAgICBpZiAocXVlc3Rpb24pIHtcclxuICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IHF1ZXN0aW9uLmRpc3BsYXlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID1cclxuICAgICAgICAgIHR5cGVvZiBkaXNwbGF5VmFsdWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyBkaXNwbGF5VmFsdWVcclxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YUl0ZW07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlQ29sdW1uKGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xyXG4gICAgdmFyIGRlbGV0ZWRDb2x1bW5zID0gdGhpcy5fY29sdW1ucy5zcGxpY2UoZnJvbSwgMSk7XHJcbiAgICB0aGlzLl9jb2x1bW5zLnNwbGljZSh0bywgMCwgZGVsZXRlZENvbHVtbnNbMF0pO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcclxuICAgIHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWUpLmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB0aGlzLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIHtcclxuICAgICAgY29sdW1uTmFtZTogY29sdW1uTmFtZSxcclxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWU6IHN0cmluZyk6IElUYWJsZUNvbHVtbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCBpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKTtcclxuICAgIGNvbHVtbi5pc1Zpc2libGUgPSBpc1Zpc2libGU7XHJcbiAgICB0aGlzLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLmZpcmUodGhpcywge1xyXG4gICAgICBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLFxyXG4gICAgICBjb2x1bW5WaXNpYmlsaXR5OiBpc1Zpc2libGUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDb2x1bW5XaWR0aChjb2x1bW5OYW1lOiBzdHJpbmcsIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKTtcclxuICAgIGNvbHVtbi53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhyb3c6IFRhYmxlUm93KTogdm9pZCB7XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9yb3dzLmluZGV4T2Yocm93KTtcclxuICAgIHRoaXMuX3Jvd3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMub25Sb3dSZW1vdmVkLmZpcmUodGhpcywgeyByb3c6IHJvdyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgY3VycmVudCBsb2NhbGUgb2YgdGhlIHRhYmxlLlxyXG4gICAqIElmIGxvY2FsZXMgbW9yZSB0aGFuIG9uZSwgdGhlIGxhbmd1YWdlIHNlbGVjdGlvbiBkcm9wZG93biB3aWxsIGJlIGFkZGVkIGluIHRoZSB0b29sYmFyXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBsb2NhbGUoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGxvY2FsZSBmb3IgdGFibGUuXHJcbiAgICovXHJcbiAgcHVibGljIHNldCBsb2NhbGUobmV3TG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3VydmV5LmxvY2FsZSA9IG5ld0xvY2FsZTtcclxuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xyXG4gICAgdGhpcy5yZWZyZXNoKHRydWUpO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvY2FsZXMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuc3VydmV5LmdldFVzZWRMb2NhbGVzKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZnJlc2goaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLmdldFBhZ2VOdW1iZXIoKTtcclxuICAgICAgaWYgKGhhcmQpIHtcclxuICAgICAgICB0aGlzLmluaXRUYWJsZURhdGEodGhpcy5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0O1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5yZW5kZXIodGFyZ2V0Tm9kZSk7XHJcbiAgICAgIHRoaXMuc2V0UGFnZVNpemUodGhpcy5jdXJyZW50UGFnZVNpemUpO1xyXG4gICAgICB0aGlzLnNldFBhZ2VOdW1iZXIodGhpcy5jdXJyZW50UGFnZU51bWJlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2xlYXJDcmVhdGVkUm93cygpO1xyXG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcclxuICAgIHRoaXMucmVuZGVyUmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcclxuICAgIHJldHVybiAhIXRoaXMucmVuZGVyUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVml6dWFsaXphdGlvbiBwYW5lbCBzdGF0ZSBnZXR0ZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBzdGF0ZSgpOiBJVGFibGVTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxyXG4gICAgICBlbGVtZW50czogW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpLFxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5jdXJyZW50UGFnZVNpemUsXHJcbiAgICB9O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIHNldHRlci5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0IHN0YXRlKG5ld1N0YXRlOiBJVGFibGVTdGF0ZSkge1xyXG4gICAgaWYgKCFuZXdTdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUubG9jYWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3U3RhdGUubG9jYWxlO1xyXG4gICAgICB0aGlzLnN1cnZleS5sb2NhbGUgPSBuZXdTdGF0ZS5sb2NhbGU7XHJcbiAgICAgIHRoaXMuaW5pdFRhYmxlRGF0YSh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUuZWxlbWVudHMgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBuZXdTdGF0ZS5lbGVtZW50cztcclxuXHJcbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlLnBhZ2VTaXplICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IG5ld1N0YXRlLnBhZ2VTaXplO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIHRhYmxlIHN0YXRlIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgcHVibGljIG9uU3RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50PFxyXG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxyXG4gICAgYW55XHJcbiAgPigpO1xyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRhYmxlIHBlcm1pc3Npb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKTogSVBlcm1pc3Npb25bXSB7XHJcbiAgICByZXR1cm4gPGFueT50aGlzLl9jb2x1bW5zLm1hcCgoY29sdW1uOiBJVGFibGVDb2x1bW4pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcclxuICAgICAgICBpc1B1YmxpYzogY29sdW1uLmlzUHVibGljLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGFibGUgcGVybWlzc2lvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIHNldCBwZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogSVBlcm1pc3Npb25bXSkge1xyXG4gICAgY29uc3QgdXBkYXRlZEVsZW1lbnRzID0gdGhpcy5fY29sdW1ucy5tYXAoKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XHJcbiAgICAgIHBlcm1pc3Npb25zLmZvckVhY2goKHBlcm1pc3Npb24pID0+IHtcclxuICAgICAgICBpZiAocGVybWlzc2lvbi5uYW1lID09PSBjb2x1bW4ubmFtZSlcclxuICAgICAgICAgIGNvbHVtbi5pc1B1YmxpYyA9IHBlcm1pc3Npb24uaXNQdWJsaWM7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgLi4uY29sdW1uIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2NvbHVtbnMgPSBbXS5jb25jYXQodXBkYXRlZEVsZW1lbnRzKTtcclxuICAgIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJlxyXG4gICAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIHBlcm1pc3Npb25zIGNoYW5nZWRcclxuICAgKi9cclxuICBwdWJsaWMgb25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjazogYW55O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGVSb3cge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcclxuICAgIHByb3RlY3RlZCBleHRlbnNpb25zQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcclxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudFxyXG4gICkge1xyXG4gICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHModGFibGUsIHRoaXMsIGRldGFpbHNDb250YWluZXIpO1xyXG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0YWJsZSk7XHJcbiAgICB0YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKHRoaXMub25Db2x1bW5Mb2NhdGlvbkNoYW5nZWRDYWxsYmFjayk7XHJcbiAgfVxyXG4gIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xyXG4gIHB1YmxpYyBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XHJcbiAgcHJpdmF0ZSBkZXRhaWxlZFJvd0NsYXNzID0gXCJzYS10YWJsZV9fZGV0YWlsLXJvd1wiO1xyXG4gIHByaXZhdGUgaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgb25Ub2dnbGVEZXRhaWxzOiBFdmVudDxcclxuICAgIChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSxcclxuICAgIGFueVxyXG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgcm93J3MgaHRtbCBlbGVtZW50XHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgZGF0YSwgd2hpY2ggaXMgZGlzcGxheWVkIGluIHRoZSByb3cuXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFJvd0RhdGEoKTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHBvc2l0aW9uIG9mIHJvdyBpbiB0aGUgdGFibGUncyBkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyO1xyXG5cclxuICBwcm90ZWN0ZWQgaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIodGhpcy5leHRlbnNpb25zQ29udGFpbmVyLCBcInJvd1wiLCB7IHJvdzogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuRGV0YWlscygpIHtcclxuICAgIHRoaXMuZGV0YWlscy5vcGVuKCk7XHJcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLmRldGFpbGVkUm93Q2xhc3M7XHJcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogdHJ1ZSB9KTtcclxuICAgIHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlRGV0YWlscygpIHtcclxuICAgIHRoaXMuZGV0YWlscy5jbG9zZSgpO1xyXG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRldGFpbGVkUm93Q2xhc3MpO1xyXG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IGZhbHNlIH0pO1xyXG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURldGFpbHMoKSB7XHJcbiAgICBpZiAodGhpcy5pc0RldGFpbHNFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmNsb3NlRGV0YWlscygpO1xyXG4gICAgfSBlbHNlIHRoaXMub3BlbkRldGFpbHMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSAhdGhpcy5pc1NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFibGUucmVtb3ZlUm93KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbG9zZURldGFpbHMoKTtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLnJlbW92ZShcclxuICAgICAgdGhpcy5vbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrXHJcbiAgICApO1xyXG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgVGFibGUsIFRhYmxlUm93IH0gZnJvbSBcIi4vdGFibGVcIjtcclxuaW1wb3J0IHsgU3VydmV5TW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IFwiLi90YWJ1bGF0b3Iuc2Nzc1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgVGFidWxhdG9yVGFibGVzIGZyb20gXCJ0YWJ1bGF0b3ItdGFibGVzXCI7XHJcblxyXG5pZiAoISFkb2N1bWVudCkge1xyXG4gIGNvbnN0IHN2Z1RlbXBsYXRlID0gcmVxdWlyZShcImh0bWwtbG9hZGVyP2ludGVycG9sYXRlIXZhbC1sb2FkZXIhLi4vc3ZnYnVuZGxlLmh0bWxcIik7XHJcbiAgY29uc3QgdGVtcGxhdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB0ZW1wbGF0ZUhvbGRlci5pbm5lckhUTUwgPSBzdmdUZW1wbGF0ZTtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlSG9sZGVyKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElPcHRpb25zIHtcclxuICB0YWJ1bGF0b3JPcHRpb25zPzogYW55O1xyXG4gIGRvd25sb2FkSGlkZGVuQ29sdW1ucz86IGJvb2xlYW47XHJcbiAgYWN0aW9uc0NvbHVtbldpZHRoPzogbnVtYmVyO1xyXG4gIGRvd25sb2FkQnV0dG9uczogQXJyYXk8c3RyaW5nPjtcclxuICBkb3dubG9hZE9wdGlvbnM/OiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdERvd25sb2FkT3B0aW9ucyA9IHtcclxuICBwZGY6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsIC8vc2V0IHBhZ2Ugb3JpZW50YXRpb24gdG8gcG9ydHJhaXRcclxuICAgIGF1dG9UYWJsZToge1xyXG4gICAgICAvL2FkdmFuY2VkIHRhYmxlIHN0eWxpbmdcclxuICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgZmlsbENvbG9yOiBbMjYsIDE3OSwgMTQ4XSxcclxuICAgICAgfSxcclxuICAgICAgY29sdW1uU3R5bGVzOiB7XHJcbiAgICAgICAgaWQ6IHsgZmlsbENvbG9yOiAyNTUgfSxcclxuICAgICAgfSxcclxuICAgICAgbWFyZ2luOiB7IHRvcDogNjAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3Y6IHsgZGVsaW1pdGVyOiBcIixcIiB9LFxyXG4gIHhsc3g6IHsgc2hlZXROYW1lOiBcInJlc3VsdHNcIiB9LFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdE9wdGlvbnM6IElPcHRpb25zID0ge1xyXG4gIHRhYnVsYXRvck9wdGlvbnM6IHt9LFxyXG4gIGFjdGlvbnNDb2x1bW5XaWR0aDogNjAsXHJcbiAgZG93bmxvYWRIaWRkZW5Db2x1bW5zOiBmYWxzZSxcclxuICBkb3dubG9hZEJ1dHRvbnM6IFtcInBkZlwiLCBcInhsc3hcIiwgXCJjc3ZcIl0sXHJcbiAgZG93bmxvYWRPcHRpb25zOiBkZWZhdWx0RG93bmxvYWRPcHRpb25zLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnVsYXRvciBleHRlbmRzIFRhYmxlIHtcclxuICBwdWJsaWMgc3RhdGljIHNldCBoYXZlQ29tbWVyY2lhbExpY2Vuc2UodmFsOiBib29sZWFuKSB7XHJcbiAgICBUYWJsZS5oYXZlQ29tbWVyY2lhbExpY2Vuc2UgPSB2YWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHN1cnZleTogU3VydmV5TW9kZWwsXHJcbiAgICBkYXRhOiBBcnJheTxPYmplY3Q+LFxyXG4gICAgb3B0aW9uczogSU9wdGlvbnMsXHJcbiAgICBfY29sdW1uczogQXJyYXk8YW55PiA9IFtdXHJcbiAgKSB7XHJcbiAgICBzdXBlcihzdXJ2ZXksIGRhdGEsIG9wdGlvbnMsIF9jb2x1bW5zKTtcclxuICAgIHZhciBwYXRjaGVkT3B0aW9ucyA9IHt9O1xyXG4gICAgT2JqZWN0LmFzc2lnbihwYXRjaGVkT3B0aW9ucywgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gcGF0Y2hlZE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IENPTFVNTl9NSU5fV0lEVEggPSAxNTU7XHJcbiAgcHVibGljIHRhYnVsYXRvclRhYmxlczogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIHRhYmxlQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHN1cGVyLnJlbmRlcih0YXJnZXROb2RlKTtcclxuICAgIHRhcmdldE5vZGUuY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlIHNhLXRhYnVsYXRvclwiO1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnMoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRhYmxlRGF0YTtcclxuXHJcbiAgICB2YXIgaGVhZGVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNhLXRhYnVsYXRvcl9faGVhZGVyXCIpO1xyXG4gICAgdmFyIHBhZ2luYXRpb25FbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJkaXZcIixcclxuICAgICAgXCJzYS10YWJ1bGF0b3JfX3BhZ2luYXRpb24tY29udGFpbmVyXCJcclxuICAgICk7XHJcbiAgICB0aGlzLnRhYmxlQ29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMudGFibGVDb250YWluZXIpO1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7fTtcclxuICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIGNvbmZpZyxcclxuICAgICAge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgbGF5b3V0OiBcImZpdENvbHVtbnNcIixcclxuICAgICAgICBwYWdpbmF0aW9uOiBcImxvY2FsXCIsXHJcbiAgICAgICAgcGFnaW5hdGlvblNpemU6IHRoaXMuY3VycmVudFBhZ2VTaXplLFxyXG4gICAgICAgIG1vdmFibGVDb2x1bW5zOiB0cnVlLFxyXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgY29sdW1ucyxcclxuICAgICAgICByb3dGb3JtYXR0ZXI6IHRoaXMucm93Rm9ybWF0dGVyLFxyXG4gICAgICAgIHBhZ2luYXRpb25FbGVtZW50OiBwYWdpbmF0aW9uRWxlbWVudCxcclxuICAgICAgICBjb2x1bW5Nb3ZlZDogdGhpcy5jb2x1bW5Nb3ZlZENhbGxiYWNrLFxyXG4gICAgICAgIGNvbHVtblJlc2l6ZWQ6IHRoaXMuY29sdW1uUmVzaXplZENhbGxiYWNrLFxyXG4gICAgICAgIHRvb2x0aXBzSGVhZGVyOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiAoY2VsbDogYW55KSA9PiBjZWxsLmdldFZhbHVlKCksXHJcbiAgICAgICAgZG93bmxvYWRSb3dSYW5nZTogXCJhbGxcIixcclxuICAgICAgICBjb2x1bW5NaW5XaWR0aDogMjQ4LFxyXG4gICAgICAgIHBhZ2luYXRpb25CdXR0b25Db3VudDogMyxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5vcHRpb25zLnRhYnVsYXRvck9wdGlvbnNcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMgPSBuZXcgVGFidWxhdG9yVGFibGVzKHRoaXMudGFibGVDb250YWluZXIsIGNvbmZpZyk7XHJcblxyXG4gICAgY29uc3QgZXh0ZW5zaW9uc0NvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwic2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25zXCJcclxuICAgICk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb3dubG9hZHNCYXIoKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZXh0ZW5zaW9uc0NvbnRhaW5lcik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnaW5hdGlvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5leHRlbnNpb25zLnJlbmRlcihleHRlbnNpb25zQ29udGFpbmVyLCBcImhlYWRlclwiKTtcclxuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0Tm9kZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRG93bmxvYWRzQmFyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHZhciBjcmVhdGVEb3dubG9hZEJ1dHRvbiA9ICh0eXBlOiBzdHJpbmcsIGNhcHRpb246IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcclxuICAgICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1zbWFsbCBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW5uZXJIVE1MOiBjYXB0aW9uLFxyXG4gICAgICAgICAgb25jbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkKHR5cGUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBidG47XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImRpdlwiLFxyXG4gICAgICBcInNhLXRhYnVsYXRvcl9fZG93bmxvYWRzLWJhclwiXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucy5kb3dubG9hZEJ1dHRvbnMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVEb3dubG9hZEJ1dHRvbihcclxuICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKGAke3R5cGV9RG93bmxvYWRDYXB0aW9uYClcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSA9ICgpID0+IHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmRlc3Ryb3koKTtcclxuICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNvbHVtbk1vdmVkQ2FsbGJhY2sgPSAoY29sdW1uOiBhbnksIGNvbHVtbnM6IGFueVtdKSA9PiB7XHJcbiAgICB2YXIgZnJvbSA9IHRoaXMuX2NvbHVtbnMuaW5kZXhPZih0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW4uZ2V0RmllbGQoKSkpO1xyXG4gICAgdmFyIHRvID0gY29sdW1ucy5pbmRleE9mKGNvbHVtbikgLSAxO1xyXG4gICAgdGhpcy5tb3ZlQ29sdW1uKGZyb20sIHRvKTtcclxuICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNvbHVtblJlc2l6ZWRDYWxsYmFjayA9IChjb2x1bW46IGFueSkgPT4ge1xyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aChjb2x1bW4uZ2V0RmllbGQoKSwgY29sdW1uLmdldFdpZHRoKCkpO1xyXG4gICAgdGhpcy5sYXlvdXQoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJvd0Zvcm1hdHRlciA9IChyb3c6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgdmFyIHRhYmxlUm93ID0gbmV3IFRhYnVsYXRvclJvdyhcclxuICAgICAgdGhpcyxcclxuICAgICAgcm93LmdldENlbGxzKClbMF0uZ2V0RWxlbWVudCgpLFxyXG4gICAgICByb3cuZ2V0RWxlbWVudCgpLFxyXG4gICAgICByb3dcclxuICAgICk7XHJcbiAgICB0YWJsZVJvdy5vblRvZ2dsZURldGFpbHMuYWRkKCgpID0+IHtcclxuICAgICAgcm93Lm5vcm1hbGl6ZUhlaWdodCgpO1xyXG4gICAgICB0aGlzLmxheW91dCgpO1xyXG4gICAgfSk7XHJcbiAgICB0YWJsZVJvdy5yZW5kZXIoKTtcclxuXHJcbiAgICB0aGlzLl9yb3dzLnB1c2godGFibGVSb3cpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0VGl0bGVGb3JtYXR0ZXIoXHJcbiAgICBjZWxsOiBhbnksXHJcbiAgICBmb3JtYXR0ZXJQYXJhbXM6IGFueSxcclxuICAgIG9uUmVuZGVyZWQ6IGFueSxcclxuICAgIGNvbHVtbk5hbWU6IGFueVxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIHZhciBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdmFyIHRpdGxlID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJcIiwge1xyXG4gICAgICBpbm5lckhUTUw6IGNlbGwuZ2V0VmFsdWUoKSxcclxuICAgIH0pO1xyXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLmdldEhlYWRlckFjdGlvbnMoY29sdW1uTmFtZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyLm9ubW91c2Vkb3duID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlQ29sdW1uUmVvcmRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyQWN0aW9ucyhjb2x1bW5OYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImRpdlwiLFxyXG4gICAgICBcInNhLXRhYmxlX19hY3Rpb24tY29udGFpbmVyXCJcclxuICAgICk7XHJcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKGNvbnRhaW5lciwgXCJjb2x1bW5cIiwgeyBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lIH0pO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb2x1bW5zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgY29uc3QgY29sdW1uczogYW55ID0gdGhpcy5jb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xyXG4gICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShjb2x1bW4ubmFtZSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGQ6IGNvbHVtbi5uYW1lLFxyXG4gICAgICAgIHRpdGxlOiAocXVlc3Rpb24gJiYgcXVlc3Rpb24udGl0bGUpIHx8IGNvbHVtbi5kaXNwbGF5TmFtZSxcclxuICAgICAgICB3aWR0aDogY29sdW1uLndpZHRoLFxyXG4gICAgICAgIHdpZHRoU2hyaW5rOiAhY29sdW1uLndpZHRoID8gMSA6IDAsXHJcbiAgICAgICAgdmlzaWJsZTogdGhpcy5pc0NvbHVtblZpc2libGUoY29sdW1uKSxcclxuICAgICAgICBoZWFkZXJTb3J0OiBmYWxzZSxcclxuICAgICAgICBkb3dubG9hZDogdGhpcy5vcHRpb25zLmRvd25sb2FkSGlkZGVuQ29sdW1ucyA/IHRydWUgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGl0bGVGb3JtYXR0ZXI6IChjZWxsOiBhbnksIGZvcm1hdHRlclBhcmFtczogYW55LCBvblJlbmRlcmVkOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpdGxlRm9ybWF0dGVyKFxyXG4gICAgICAgICAgICBjZWxsLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZXJQYXJhbXMsXHJcbiAgICAgICAgICAgIG9uUmVuZGVyZWQsXHJcbiAgICAgICAgICAgIGNvbHVtbi5uYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCBzcGVjaWFsIGNvbHVtbiAoY29sbGFwc2UvZXhwYW5kKVxyXG4gICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgZmllbGQ6IFwiXCIsXHJcbiAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICBkb3dubG9hZDogZmFsc2UsXHJcbiAgICAgIHJlc2l6YWJsZTogZmFsc2UsXHJcbiAgICAgIG1pbldpZHRoOiB0aGlzLm9wdGlvbnMuYWN0aW9uc0NvbHVtbldpZHRoLFxyXG4gICAgICB3aWR0aDogdGhpcy5vcHRpb25zLmFjdGlvbnNDb2x1bW5XaWR0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCBpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyLnNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZSwgaXNWaXNpYmxlKTtcclxuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcclxuICAgICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNob3dDb2x1bW4oY29sdW1uTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuaGlkZUNvbHVtbihjb2x1bW5OYW1lKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxheW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcclxuICAgIHN1cGVyLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIGxvY2F0aW9uKTtcclxuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcclxuICAgICAgaWYgKGxvY2F0aW9uID09IFF1ZXN0aW9uTG9jYXRpb24uUm93KVxyXG4gICAgICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmhpZGVDb2x1bW4oY29sdW1uTmFtZSk7XHJcbiAgICAgIGVsc2UgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2hvd0NvbHVtbihjb2x1bW5OYW1lKTtcclxuICAgICAgdGhpcy5sYXlvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDb2x1bW5XaWR0aChjb2x1bW5OYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnNldENvbHVtbldpZHRoKGNvbHVtbk5hbWUsIHdpZHRoKTtcclxuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcclxuICAgICAgdmFyIGRlZmluaXRpb24gPSB0aGlzLnRhYnVsYXRvclRhYmxlc1xyXG4gICAgICAgIC5nZXRDb2x1bW4oY29sdW1uTmFtZSlcclxuICAgICAgICAuZ2V0RGVmaW5pdGlvbigpO1xyXG4gICAgICBkZWZpbml0aW9uLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIGRlZmluaXRpb24ud2lkdGhTaHJpbmsgPSAwO1xyXG4gICAgICB0aGlzLmxheW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNvcnRCeUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRTb3J0KGNvbHVtbk5hbWUsIGRpcmVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRGaWx0ZXIoY29sdW1uTmFtZSwgXCJsaWtlXCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB2YXIgY3VzdG9tRmlsdGVyID0gKGRhdGE6IGFueSwgZmlsdGVyUGFyYW1zOiBhbnkpID0+IHtcclxuICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBkYXRhW2tleV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJQYXJhbXMudmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0RmlsdGVyKGN1c3RvbUZpbHRlciwge1xyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQYWdlTnVtYmVyKCk6IG51bWJlciB7XHJcbiAgICBpZiAoIXRoaXMuaXNSZW5kZXJlZCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRhYnVsYXRvclRhYmxlcy5nZXRQYWdlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBzdXBlci5zZXRQYWdlTnVtYmVyKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcclxuICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuc2V0UGFnZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZVNpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgc3VwZXIuc2V0UGFnZVNpemUodmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xyXG4gICAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRQYWdlU2l6ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZG93bmxvYWQodHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5kb3dubG9hZChcclxuICAgICAgdHlwZSxcclxuICAgICAgYHJlc3VsdHMuJHt0eXBlfWAsXHJcbiAgICAgIHRoaXMub3B0aW9ucy5kb3dubG9hZE9wdGlvbnNbdHlwZV0gfHwgZGVmYXVsdE9wdGlvbnMuZG93bmxvYWRPcHRpb25zW3R5cGVdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxheW91dChoYXJkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnJlZHJhdyhoYXJkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJ1bGF0b3JSb3cgZXh0ZW5kcyBUYWJsZVJvdyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxyXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgcHJvdGVjdGVkIGlubmVyUm93OiBhbnlcclxuICApIHtcclxuICAgIHN1cGVyKHRhYmxlLCBleHRlbnNpb25zQ29udGFpbmVyLCBkZXRhaWxzQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldEVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSb3dEYXRhKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldERhdGEoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldFBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5pbm5lclJvdy5kZWxldGUoKTtcclxuICAgIHN1cGVyLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIF9fYXNzaWduID1cclxuICAoPGFueT5PYmplY3QpW1wiYXNzaWduXCJdIHx8XHJcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICBmb3IgKHZhciBwIGluIHMpXHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdGFyZ2V0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XHJcbiAgZm9yICh2YXIgcCBpbiBiYXNlQ2xhc3MpXHJcbiAgICBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XHJcbiAgZnVuY3Rpb24gX18oKSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gdGhpc0NsYXNzO1xyXG4gIH1cclxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cclxuICAgIGJhc2VDbGFzcyA9PT0gbnVsbFxyXG4gICAgICA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKVxyXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xyXG4gIHZhciByZXN1bHQ6IGFueSA9IHt9O1xyXG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBzb3VyY2UpXHJcbiAgICBpZiAoXHJcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIHByb3BlcnR5TmFtZSkgJiZcclxuICAgICAgZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPCAwXHJcbiAgICApXHJcbiAgICAgIHJlc3VsdFtwcm9wZXJ0eU5hbWVdID0gc291cmNlW3Byb3BlcnR5TmFtZV07XHJcbiAgaWYgKFxyXG4gICAgc291cmNlICE9IG51bGwgJiZcclxuICAgIHR5cGVvZiAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdID09PSBcImZ1bmN0aW9uXCJcclxuICApXHJcbiAgICBmb3IgKFxyXG4gICAgICB2YXIgaSA9IDAsXHJcbiAgICAgICAgcHJvcGVydHlTeW1ib2xzID0gKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXShzb3VyY2UpO1xyXG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcclxuICAgICAgaSsrXHJcbiAgICApXHJcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXHJcbiAgICAgICAgcmVzdWx0W3Byb3BlcnR5U3ltYm9sc1tpXV0gPSBzb3VyY2VbcHJvcGVydHlTeW1ib2xzW2ldXTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xyXG5cclxuZXhwb3J0IHZhciBfX2RlY29yYXRlID0gZnVuY3Rpb24oXHJcbiAgZGVjb3JhdG9yczogYW55LFxyXG4gIHRhcmdldDogYW55LFxyXG4gIGtleTogYW55LFxyXG4gIGRlc2M6IGFueVxyXG4pIHtcclxuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsXHJcbiAgICByID1cclxuICAgICAgYyA8IDNcclxuICAgICAgICA/IHRhcmdldFxyXG4gICAgICAgIDogZGVzYyA9PT0gbnVsbFxyXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcclxuICAgICAgICA6IGRlc2MsXHJcbiAgICBkO1xyXG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gIGVsc2VcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICBpZiAoKGQgPSBkZWNvcmF0b3JzW2ldKSlcclxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG4iLCJleHBvcnQgY2xhc3MgRG9jdW1lbnRIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9PixcclxuICAgIGlzU2VsZWN0ZWQ6IChvcHRpb246IHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0pID0+IGJvb2xlYW4sXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlbGVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0LXdyYXBwZXJcIjtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJzYS1xdWVzdGlvbl9fc2VsZWN0XCI7XHJcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xyXG4gICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgdGV4dDogb3B0aW9uLnRleHQsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQob3B0aW9uKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gaGFuZGxlcjtcclxuICAgIHNlbGVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgIHJldHVybiBzZWxlY3RXcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24oXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkLFxyXG4gICAgdGV4dCA9IFwiXCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvblwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBjbGFzc05hbWUsIHtcclxuICAgICAgaW5uZXJUZXh0OiB0ZXh0LFxyXG4gICAgICBvbmNsaWNrOiBoYW5kbGVyLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KFxyXG4gICAgdGFnTmFtZTogc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgYXR0cnM/OiBhbnlcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKCEhYXR0cnMpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICg8YW55PmVsKVtrZXldID0gYXR0cnNba2V5XTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0VsZW1lbnQocGF0aDogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwic3ZnXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB1c2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwidXNlXCJcclxuICAgICk7XHJcbiAgICB1c2VFbGVtLnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgIFwiI3NhLXN2Zy1cIiArIHBhdGhcclxuICAgICk7XHJcbiAgICBzdmdFbGVtLmFwcGVuZENoaWxkKHVzZUVsZW0pO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z0J1dHRvbihwYXRoOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG4gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic2EtdGFibGVfX3N2Zy1idXR0b25cIilcclxuICAgICk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChwYXRoKSk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdUb2dnbGVCdXR0b24oXHJcbiAgICBzdmdQYXRoMTogc3RyaW5nLFxyXG4gICAgc3ZQcGF0aDI6IHN0cmluZyxcclxuICAgIHRleHQxOiBzdHJpbmcsXHJcbiAgICB0ZXh0Mjogc3RyaW5nLFxyXG4gICAgaGFuZGxlcjE6IChlOiBhbnkpID0+IGFueSxcclxuICAgIGhhbmRsZXIyOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBzdGF0ZSA9IFwiZmlyc3RcIixcclxuICAgIGNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uIHNhLXRvb2xiYXJfX3N2Zy1idXR0b25cIlxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2ZzEgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2Z1BhdGgxKTtcclxuICAgIGNvbnN0IHN2ZzIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHN2UHBhdGgyKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgY2xhc3NOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcInNlY29uZFwiO1xyXG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChzdmcxKTtcclxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgaGFuZGxlcjIoZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFwic2Vjb25kXCIpIHtcclxuICAgICAgICBzdGF0ZSA9IFwiZmlyc3RcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMik7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgICAgIGhhbmRsZXIxKGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQxO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMSk7XHJcbiAgICB9IGVsc2UgaWYgKChzdGF0ZSA9IFwic2Vjb25kXCIpKSB7XHJcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQyO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMik7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSB0b2dnbGU7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5wdXQoXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyID0gXCJcIixcclxuICAgIGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxuICApOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiaW5wdXRcIixcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIHJ1bm5pbmdJbkJyb3dzZXI6IHR5cGVvZiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93RG9tUmVuZGVyaW5nKCkge1xyXG4gIHJldHVybiBvcHRpb25zLnJ1bm5pbmdJbkJyb3dzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21tZXJjaWFsTGljZW5zZUxpbmsoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNhLWNvbW1lcmNpYWxcIik7XHJcbiAgY29uc3QgbGluayA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwic2EtY29tbWVyY2lhbF9fdGV4dFwiLCB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LnN1cnZleWpzLmlvL0J1eVwiLFxyXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRhaW5lclNwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIlwiKTtcclxuICBjb25zdCBpY29uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm5vbmNvbW1lcmNpYWxcIik7XHJcbiAgY29uc3QgdGV4dFNwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgXCJzcGFuXCIsXHJcbiAgICBcInNhLWNvbW1lcmNpYWxfX3Byb2R1Y3RcIixcclxuICAgIHtcclxuICAgICAgaW5uZXJIVE1MOiBgUGxlYXNlIHB1cmNoYXNlIGEgU3VydmV5SlMgQW5hbHl0aWNzIGRldmVsb3BlciBsaWNlbnNlXHJcbiAgICAgICAgdG9cclxuICAgICAgICB1c2UgaXQgaW4geW91clxyXG4gICAgICAgIGFwcC5gLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmspLmFwcGVuZENoaWxkKGNvbnRhaW5lclNwYW4pO1xyXG4gIGNvbnRhaW5lclNwYW4uYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgY29udGFpbmVyU3Bhbi5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgemlwQXJyYXlzKC4uLmFycmF5czogYW55W10pOiBhbnlbXVtdIHtcclxuICAgIGxldCB6aXBBcnJheTogYW55W10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHppcEFycmF5W2ldID0gW107XHJcbiAgICAgIGFycmF5cy5mb3JFYWNoKChhcnIpID0+IHtcclxuICAgICAgICB6aXBBcnJheVtpXS5wdXNoKGFycltpXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHppcEFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnppcEFycmF5cyh6aXBBcnJheTogYW55W11bXSk6IGFueVtdW10ge1xyXG4gICAgbGV0IGFycmF5czogYW55W11bXSA9IFtdO1xyXG4gICAgemlwQXJyYXkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgdmFsdWUuZm9yRWFjaCgodmFsLCBqKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhcnJheXNbal0pIGFycmF5c1tqXSA9IFtdO1xyXG4gICAgICAgIGFycmF5c1tqXVtpXSA9IHZhbDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcnJheXM7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgc29ydERpY3Rpb25hcnkoXHJcbiAgICBrZXlzOiBhbnlbXSxcclxuICAgIHZhbHVlczogYW55W10sXHJcbiAgICBkZXNjOiBib29sZWFuXHJcbiAgKTogeyBrZXlzOiBhbnlbXTsgdmFsdWVzOiBhbnlbXSB9IHtcclxuICAgIGxldCBkaWN0aW9uYXJ5ID0gdGhpcy56aXBBcnJheXMoa2V5cywgdmFsdWVzKTtcclxuICAgIGxldCBjb21wYXJhdG9yID0gKGE6IGFueVtdLCBiOiBhbnlbXSwgYXNjOiBib29sZWFuID0gdHJ1ZSkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYVsxXSA8IGJbMV0gPyAxIDogYVsxXSA9PSBiWzFdID8gMCA6IC0xO1xyXG4gICAgICByZXR1cm4gYXNjID8gcmVzdWx0IDogcmVzdWx0ICogLTE7XHJcbiAgICB9O1xyXG4gICAgZGljdGlvbmFyeS5zb3J0KChhOiBhbnlbXSwgYjogYW55W10pID0+IHtcclxuICAgICAgcmV0dXJuIGRlc2MgPyBjb21wYXJhdG9yKGEsIGIsIGZhbHNlKSA6IGNvbXBhcmF0b3IoYSwgYik7XHJcbiAgICB9KTtcclxuICAgIGxldCBrZXlzQW5kVmFsdWVzID0gdGhpcy51bnppcEFycmF5cyhkaWN0aW9uYXJ5KTtcclxuICAgIHJldHVybiB7IGtleXM6IGtleXNBbmRWYWx1ZXNbMF0sIHZhbHVlczoga2V5c0FuZFZhbHVlc1sxXSB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAvIG1heFZhbHVlKSAqIDEwMDtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RhYnVsYXRvcl90YWJsZXNfXzsiXSwic291cmNlUm9vdCI6IiJ9