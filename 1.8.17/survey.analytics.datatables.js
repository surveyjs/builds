/*!
 * surveyjs - SurveyJS Analytics library v1.8.17
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

module.exports = "<svg style=\"display:none;\"><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-detail\"><circle class=\"st0\" cx=\"1.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"8.5\" r=\"1.5\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-drag\"><path class=\"st0\" d=\"M13 5l-1 1 1 1H9V3l1 1 1-1-3-3-3 3 1 1 1-1v4H3l1-1-1-1-3 3 3 3 1-1-1-1h4v4l-1-1-1 1 3 3 3-3-1-1-1 1V9h4l-1 1 1 1 3-3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-hide\"><path class=\"st1\" d=\"M12.79 4.2L16 1l-1-1-3.32 3.32C10.57 2.55 9.32 2 8 2 3.63 2 0 7.97 0 7.97s1.27 2.1 3.21 3.82l-3.23 3.23.98.98 3.35-3.34C5.41 13.44 6.67 14 8 14c4.37 0 8-6 8-6s-1.27-2.09-3.21-3.8zM2 7.97c1.07-1.47 3.61-4 6-4 .8 0 1.6.27 2.35.68l-.78.78c-.46-.29-.99-.46-1.57-.46-1.66 0-3 1.34-3 3 0 .58.17 1.11.46 1.57l-.97.97A13.38 13.38 0 0 1 2 7.97zm6 4c-.8 0-1.59-.27-2.33-.67l.78-.77c.45.27.98.44 1.55.44 1.66 0 3-1.34 3-3 0-.57-.17-1.09-.44-1.55l.98-.98c1.11.87 2.01 1.91 2.46 2.52-1.07 1.48-3.61 4.01-6 4.01z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makeprivate\"><circle class=\"st0\" cx=\"8\" cy=\"4\" r=\"3\"></circle><path class=\"st0\" d=\"M8 8c-3.31 0-6 2.73-6 4.67S5.27 15 8 15s6-.4 6-2.33S11.31 8 8 8z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makepublic\"><circle class=\"st0\" cx=\"6\" cy=\"5\" r=\"3\"></circle><path class=\"st0\" d=\"M10 5c0 .34-.06.67-.14.99.05 0 .09.01.14.01 1.66 0 3-1.34 3-3s-1.34-3-3-3C8.97 0 8.07.52 7.53 1.3 8.98 1.91 10 3.33 10 5zM6 9c-3.31 0-6 2.73-6 4.67S3.27 16 6 16s6-.4 6-2.33S9.31 9 6 9zM10 7c-.19 0-.38.01-.57.03a4.14 4.14 0 0 1-1.37 1.39c3 .83 5.23 3.31 5.42 5.28 1.44-.31 2.52-.92 2.52-2.03C16 9.74 13.31 7 10 7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-movetodetails\"><circle class=\"st0\" cx=\"1.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"14.5\" r=\"1.5\"></circle><path class=\"st0\" d=\"M12 1h3v9h-3zM2.02 7.02L1 6 0 7l3 3 3-3-1-1-.94.94C4.33 4.73 6.21 3 8.5 3c.17 0 .33.03.5.05V1.03C8.83 1.01 8.67 1 8.5 1 5.08 1 2.27 3.66 2.02 7.02z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-noncommercial\"><path d=\"M8 0L0 15h16L8 0zm1 13H7v-2h2v2zm-2-3V5h2v5H7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-sorting\"><path class=\"st0\" d=\"M8 3l2 2 1-1-3-3-3 3 1 1zM8 13l-2-2-1 1 3 3 3-3-1-1z\"></path></symbol></svg>";

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
/* harmony import */ var _localization_norwegian__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localization/norwegian */ "./src/localization/norwegian.ts");
/* harmony import */ var _localization_russian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localization/russian */ "./src/localization/russian.ts");
/* harmony import */ var _tables_extensions_rowextensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/extensions/rowextensions */ "./src/tables/extensions/rowextensions.ts");
/* harmony import */ var _tables_extensions_headerextensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tables/extensions/headerextensions */ "./src/tables/extensions/headerextensions.ts");
/* harmony import */ var _tables_extensions_columnextensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tables/extensions/columnextensions */ "./src/tables/extensions/columnextensions.ts");
/* harmony import */ var _tables_extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tables/extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _tables_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/datatables */ "./src/tables/datatables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_9__["DatatablesRow"]; });

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
    function DataTables(survey, data, options, _columns) {
        if (_columns === void 0) { _columns = []; }
        var _this = _super.call(this, survey, data, options, _columns) || this;
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
    Object.defineProperty(DataTables, "haveCommercialLicense", {
        set: function (val) {
            _table__WEBPACK_IMPORTED_MODULE_1__["Table"].haveCommercialLicense = val;
        },
        enumerable: false,
        configurable: true
    });
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
    DataTables.prototype.setColumnVisibility = function (columnName, isVisible) {
        _super.prototype.setColumnVisibility.call(this, columnName, isVisible);
        this.datatableApi.column(columnName + ":name").visible(isVisible);
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
        if (this.isRendered) {
            this.datatableApi.page.len(value).draw(false);
        }
    };
    DataTables.prototype.setPageNumber = function (value) {
        _super.prototype.setPageNumber.call(this, value);
        if (this.isRendered) {
            this.datatableApi.page(value).draw(false);
        }
    };
    DataTables.prototype.getPageNumber = function () {
        if (!this.isRendered) {
            return 0;
        }
        return this.datatableApi.page();
    };
    DataTables.prototype.render = function (targetNode) {
        var _this = this;
        _super.prototype.render.call(this, targetNode);
        var self = this;
        targetNode.className += " sa-table sa-datatables";
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
            pageLength: this.currentPageSize,
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
        var columns = this.columns.map(function (column) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                name: column.name,
                data: column.name,
                sTitle: (question && question.title) || column.displayName,
                visible: _this.isColumnVisible(column),
                orderable: false,
                width: typeof column.width == "number" ? column.width + "px" : column.width,
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mYXJzaS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL25vcndlZ2lhbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL3J1c3NpYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9kYXRhdGFibGVzLnNjc3M/OTNlNSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2RhdGF0YWJsZXMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2NvbHVtbmV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2RldGFpbHNleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9oZWFkZXJleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9yb3dleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy90YWJsZWV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy90YWJsZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXktY29yZVwiLFwiY29tbW9uanNcIjpcInN1cnZleS1jb3JlXCIsXCJhbWRcIjpcInN1cnZleS1jb3JlXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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LFVBQUMsQ0FBUSxFQUFFLENBQVEsRUFBRSxHQUFtQjtZQUFuQixnQ0FBbUI7WUFDdkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7UUFDRixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUSxFQUFFLENBQVE7WUFDakMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVhLHVCQUFZLEdBQTFCLFVBQTJCLEtBQWEsRUFBRSxRQUFnQjtRQUN4RCxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbE5ELHlEIiwiZmlsZSI6InN1cnZleS5hbmFseXRpY3MuZGF0YXRhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzRGF0YXRhYmxlc1wiLCBbXCJzdXJ2ZXktY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NEYXRhdGFibGVzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc0RhdGF0YWJsZXNcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL2RhdGF0YWJsZXMudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZGV0YWlsXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZHJhZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEzIDVsLTEgMSAxIDFIOVYzbDEgMSAxLTEtMy0zLTMgMyAxIDEgMS0xdjRIM2wxLTEtMS0xLTMgMyAzIDMgMS0xLTEtMWg0djRsLTEtMS0xIDEgMyAzIDMtMy0xLTEtMSAxVjloNGwtMSAxIDEgMSAzLTN6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctaGlkZVxcXCI+PHBhdGggY2xhc3M9XFxcInN0MVxcXCIgZD1cXFwiTTEyLjc5IDQuMkwxNiAxbC0xLTEtMy4zMiAzLjMyQzEwLjU3IDIuNTUgOS4zMiAyIDggMiAzLjYzIDIgMCA3Ljk3IDAgNy45N3MxLjI3IDIuMSAzLjIxIDMuODJsLTMuMjMgMy4yMy45OC45OCAzLjM1LTMuMzRDNS40MSAxMy40NCA2LjY3IDE0IDggMTRjNC4zNyAwIDgtNiA4LTZzLTEuMjctMi4wOS0zLjIxLTMuOHpNMiA3Ljk3YzEuMDctMS40NyAzLjYxLTQgNi00IC44IDAgMS42LjI3IDIuMzUuNjhsLS43OC43OGMtLjQ2LS4yOS0uOTktLjQ2LTEuNTctLjQ2LTEuNjYgMC0zIDEuMzQtMyAzIDAgLjU4LjE3IDEuMTEuNDYgMS41N2wtLjk3Ljk3QTEzLjM4IDEzLjM4IDAgMCAxIDIgNy45N3ptNiA0Yy0uOCAwLTEuNTktLjI3LTIuMzMtLjY3bC43OC0uNzdjLjQ1LjI3Ljk4LjQ0IDEuNTUuNDQgMS42NiAwIDMtMS4zNCAzLTMgMC0uNTctLjE3LTEuMDktLjQ0LTEuNTVsLjk4LS45OGMxLjExLjg3IDIuMDEgMS45MSAyLjQ2IDIuNTItMS4wNyAxLjQ4LTMuNjEgNC4wMS02IDQuMDF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXByaXZhdGVcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCI0XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCA4Yy0zLjMxIDAtNiAyLjczLTYgNC42N1M1LjI3IDE1IDggMTVzNi0uNCA2LTIuMzNTMTEuMzEgOCA4IDh6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXB1YmxpY1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMCA1YzAgLjM0LS4wNi42Ny0uMTQuOTkuMDUgMCAuMDkuMDEuMTQuMDEgMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTNDOC45NyAwIDguMDcuNTIgNy41MyAxLjMgOC45OCAxLjkxIDEwIDMuMzMgMTAgNXpNNiA5Yy0zLjMxIDAtNiAyLjczLTYgNC42N1MzLjI3IDE2IDYgMTZzNi0uNCA2LTIuMzNTOS4zMSA5IDYgOXpNMTAgN2MtLjE5IDAtLjM4LjAxLS41Ny4wM2E0LjE0IDQuMTQgMCAwIDEtMS4zNyAxLjM5YzMgLjgzIDUuMjMgMy4zMSA1LjQyIDUuMjggMS40NC0uMzEgMi41Mi0uOTIgMi41Mi0yLjAzQzE2IDkuNzQgMTMuMzEgNyAxMCA3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1ub25jb21tZXJjaWFsXFxcIj48cGF0aCBkPVxcXCJNOCAwTDAgMTVoMTZMOCAwem0xIDEzSDd2LTJoMnYyem0tMi0zVjVoMnY1SDd6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctc29ydGluZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTggM2wyIDIgMS0xLTMtMy0zIDMgMSAxek04IDEzbC0yLTItMSAxIDMgMyAzLTMtMS0xelxcXCI+PC9wYXRoPjwvc3ltYm9sPjwvc3ZnPlwiOyIsImV4cG9ydCAqIGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG4vL2xvY2FsaXphdGlvblxyXG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZmFyc2lcIjtcclxuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZyZW5jaFwiO1xyXG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vbm9yd2VnaWFuXCI7XHJcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9ydXNzaWFuXCI7XHJcblxyXG4vL2V4dGVuc2lvbnNcclxuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvcm93ZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9oZWFkZXJleHRlbnNpb25zXCI7XHJcbmltcG9ydCBcIi4uL3RhYmxlcy9leHRlbnNpb25zL2NvbHVtbmV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuLi90YWJsZXMvZGF0YXRhYmxlc1wiO1xyXG5leHBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zXCI7XHJcbmV4cG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XHJcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcclxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcclxuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxyXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxyXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcclxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXHJcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxyXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcclxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxyXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxyXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxyXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxyXG4gIHJlbW92ZVJvd3M6IFwiUmVtb3ZlIHJvd3NcIixcclxuICBzaG93TGFiZWw6IFwiU2hvd1wiLFxyXG4gIGVudHJpZXNMYWJlbDogXCJlbnRyaWVzXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXHJcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXHJcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcclxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxyXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxyXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXHJcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxyXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXHJcbiAgaGlkZUJ1dHRvbjogXCJIaWRlXCIsXHJcbiAgbWFrZVByaXZhdGVCdXR0b246IFwiTWFrZSBwcml2YXRlXCIsXHJcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJNYWtlIHB1YmxpY1wiLFxyXG4gIHNob3dCdXR0b246IFwiU2hvd1wiLFxyXG4gIHJlc2V0RmlsdGVyOiBcIlJlc2V0IEZpbHRlclwiLFxyXG4gIGNoYW5nZUxvY2FsZTogXCJDaGFuZ2UgTG9jYWxlXCIsXHJcbiAgY2xlYXJCdXR0b246IFwiQ2xlYXJcIixcclxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXHJcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHQgT3JkZXJcIixcclxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcclxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxyXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXHJcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCIsXHJcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIlNob3cgcGVyY2VudGFnZXNcIixcclxuICBoaWRlUGVyY2VudGFnZXM6IFwiSGlkZSBwZXJjZW50YWdlc1wiLFxyXG4gIHBkZkRvd25sb2FkQ2FwdGlvbjogXCJQREZcIixcclxuICB4bHN4RG93bmxvYWRDYXB0aW9uOiBcIkV4Y2VsXCIsXHJcbiAgY3N2RG93bmxvYWRDYXB0aW9uOiBcIkNTVlwiLFxyXG4gIHNhdmVEaWFncmFtQXNQTkc6IFwiRG93bmxvYWQgcGxvdCBhcyBhIHBuZ1wiLFxyXG4gIGhpZGVFbXB0eUFuc3dlcnM6IFwiSGlkZSBlbXB0eSBhbnN3ZXJzXCIsXHJcbiAgc2hvd0VtcHR5QW5zd2VyczogXCJTaG93IGVtcHR5IGFuc3dlcnNcIixcclxuICBcInRvcE5WYWx1ZVRleHQtMVwiOiBcIkFsbCBhbnN3ZXJzXCIsXHJcbiAgXCJ0b3BOVmFsdWVUZXh0NVwiOiBcIlRvcCA1IGFuc3dlcnNcIixcclxuICBcInRvcE5WYWx1ZVRleHQxMFwiOiBcIlRvcCAxMCBhbnN3ZXJzXCIsXHJcbiAgXCJ0b3BOVmFsdWVUZXh0MjBcIjogXCJUb3AgMjAgYW5zd2Vyc1wiLFxyXG59O1xyXG5cclxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXHJcbi8vbG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xyXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJFbmdsaXNoXCI7XHJcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIGZhcnNpU3RyaW5ncyA9IHtcclxuICBncm91cEJ1dHRvbjogXCLar9ix2YjZhyDYqNmG2K/bjCDYqNinXCIsXHJcbiAgdW5ncm91cEJ1dHRvbjogXCLYrdiw2YEg2q/YsdmI2YdcIixcclxuICBzZWxlY3RCdXR0b246IFwi2KfZhtiq2K7Yp9ioXCIsXHJcbiAgaGlkZUNvbHVtbjogXCLZhdiu2YHbjCDaqdix2K/ZhiDYs9iq2YjZhlwiLFxyXG4gIHNob3dDb2x1bW46IFwi2YbZhdin24zYtCDYs9iq2YjZhlwiLFxyXG4gIG1vdmVUb0RldGFpbDogXCLYp9mG2KrZgtin2YQg2KjZhyDYrNiy2KbbjNin2KpcIixcclxuICBzaG93QXNDb2x1bW46IFwi2YbZhdin24zYtCDYqNmHINi52YbZiNin2YYg2LPYqtmI2YZcIixcclxuICB2aXN1YWxpemVyX3RleHQ6IFwi2YXYqtmI2YYg2K/YsSDYrNiv2YjZhFwiLFxyXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcItin2KjYsSDaqdmE2YXYp9iqXCIsXHJcbiAgY2hhcnRUeXBlX2JhcjogXCLZhduM2YTZhyDYp9uMXCIsXHJcbiAgY2hhcnRUeXBlX3BpZTogXCLYr9in2KjYsdmHINin24wocGllKVwiLFxyXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcItm+2LHYp9qp2YbYr9qv24woU2NhdHRlcilcIixcclxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi2LnZgtix2KjZhyDYp9uMXCIsXHJcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcclxuICBoaWRlQnV0dG9uOiBcItmF2K7ZgduMXCIsXHJcbiAgcmVzZXRGaWx0ZXI6IFwi2KjYp9iy2YbYtNin2YbbjCDZgduM2YTYqtix2YfYp1wiLFxyXG4gIGNsZWFyQnV0dG9uOiBcItm+2KfaqSDaqdix2K/ZhlwiLFxyXG4gIGFkZEVsZW1lbnQ6IFwi2KfZhtiq2K7Yp9ioINiz2YjYp9mEINio2LHYp9uMINmG2YXYp9uM2LQuLi5cIlxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmYVwiXSA9IGZhcnNpU3RyaW5ncztcclxubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZmFcIl0gPSBcIkZhcnNpKFBlcnNpYW4pXCI7XHJcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIGZyZW5jaFN0cmluZ3MgPSB7XHJcbiAgICBncm91cEJ1dHRvbjogXCJHcm91cGVyXCIsXHJcbiAgICB1bmdyb3VwQnV0dG9uOiBcIkRpc3NvY2llclwiLFxyXG4gICAgc2VsZWN0QnV0dG9uOiBcIlPDqWxlY3Rpb25uZXJcIixcclxuICAgIGhpZGVDb2x1bW46IFwiTWFzcXVlciBjb2xvbm5lXCIsXHJcbiAgICBzaG93Q29sdW1uOiBcIkFmZmljaGVyIGNvbG9ubmVcIixcclxuICAgIG1ha2VQcml2YXRlQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHByaXbDqVwiLFxyXG4gICAgbWFrZVB1YmxpY0NvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwdWJsaWNcIixcclxuICAgIG1vdmVUb0RldGFpbDogXCJEw6lwbGFjZXIgdmVycyBkw6l0YWlsc1wiLFxyXG4gICAgc2hvd0FzQ29sdW1uOiBcIkFmZmljaGVyIGVuIGNvbG9ubmVcIixcclxuICAgIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0ZXMgZW4gdGFibGVcIixcclxuICAgIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk51YWdlcyBkZSBtb3RzXCIsXHJcbiAgICBjaGFydFR5cGVfYmFyOiBcIkJhcnJlc1wiLFxyXG4gICAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiQmFycmVzIGVtcGlsw6llc1wiLFxyXG4gICAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkFubmVhdVwiLFxyXG4gICAgY2hhcnRUeXBlX3BpZTogXCJTZWN0ZXVyc1wiLFxyXG4gICAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiTnVhZ2VzIGRlIHBvaW50c1wiLFxyXG4gICAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXHJcbiAgICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxlc1wiLFxyXG4gICAgaGlkZUJ1dHRvbjogXCJNYXNxdWVyXCIsXHJcbiAgICByZXNldEZpbHRlcjogXCJSYWZyYWljaGlyIEZpbHRyZXNcIixcclxuICAgIGNsZWFyQnV0dG9uOiBcIlJhZnJhaWNoaXJcIixcclxuICAgIGFkZEVsZW1lbnQ6IFwiQ2hvaXNpciBsYSBxdWVzdGlvbiDDoCBhZmZpY2hlci4uLlwiLFxyXG4gICAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1dFwiLFxyXG4gICAgYXNjT3JkZXI6IFwiQXNjZW5kYW50XCIsXHJcbiAgICBkZXNjT3JkZXI6IFwiRGVzY2VuZGFudFwiLFxyXG4gICAgc2hvd01pbm9yQ29sdW1uczogXCJBZmZpY2hlciBsZXMgY29sb25uZXMgbWluZXVyZXNcIlxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN0cmluZ3M7XHJcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZyXCJdID0gXCJGcmVuY2hcIjsiLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBub3J3ZWdpYW5TdHJpbmdzID0ge1xyXG4gIGdyb3VwQnV0dG9uOiBcIkdydXBwZXJcIixcclxuICB1bmdyb3VwQnV0dG9uOiBcIk9wcGhldiBncnVwcGVyaW5nXCIsXHJcbiAgc2VsZWN0QnV0dG9uOiBcIlZlbGdcIixcclxuICBoaWRlQ29sdW1uOiBcIlNranVsIGtvbG9ubmVcIixcclxuICBzaG93Q29sdW1uOiBcIlZpcyBrb2xvbm5lXCIsXHJcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiR2rDuHIga29sb25uZSBwcml2YXRcIixcclxuICBtYWtlUHVibGljQ29sdW1uOiBcIkdqw7hyIGtvbG9ubmUgb2ZmZW50bGlnXCIsXHJcbiAgbW92ZVRvRGV0YWlsOiBcIkZseXR0IHRpbCBkZXRhbGplcnQgdmlzbmluZ1wiLFxyXG4gIHNob3dBc0NvbHVtbjogXCJWaXMgc29tIGtvbG9ubmVcIixcclxuICBmaWx0ZXJQbGFjZWhvbGRlcjogXCJTw7hrLi4uXCIsXHJcbiAgcmVtb3ZlUm93czogXCJGamVybiByYWRlclwiLFxyXG4gIHNob3dMYWJlbDogXCJWaXNcIixcclxuICBlbnRyaWVzTGFiZWw6IFwib3BwZsO4cmluZ2VyXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRhYmVsbHZpc25pbmdcIixcclxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJPcmRza3lcIixcclxuICBjaGFydFR5cGVfYmFyOiBcIlN0b2xwZWRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFibGV0IHN0b2xwZWRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiSGp1bGRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfcGllOiBcIlNla3RvcmRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJQdW5rdGRpYWdyYW1cIixcclxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiTcOlbGVkaWFncmFtXCIsXHJcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJLdWxlZGlhZ3JhbVwiLFxyXG4gIGhpZGVCdXR0b246IFwiU2tqdWxcIixcclxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJHasO4ciBwcml2YXRcIixcclxuICBtYWtlUHVibGljQnV0dG9uOiBcIkdqw7hyIG9mZmVudGxpZ1wiLFxyXG4gIHNob3dCdXR0b246IFwiVmlzXCIsXHJcbiAgcmVzZXRGaWx0ZXI6IFwiTnVsbHN0aWxsIGZpbHRlclwiLFxyXG4gIGNoYW5nZUxvY2FsZTogXCJCeXR0IHNwcsOla1wiLFxyXG4gIGNsZWFyQnV0dG9uOiBcIlTDuG1cIixcclxuICBhZGRFbGVtZW50OiBcIlZlbGcgc3DDuHJzbcOlbC4uLlwiLFxyXG4gIGRlZmF1bHRPcmRlcjogXCJTdGFuZGFyZFwiLFxyXG4gIGFzY09yZGVyOiBcIlN0aWdlbmRlXCIsXHJcbiAgZGVzY09yZGVyOiBcIlN5bmtlbmRlXCIsXHJcbiAgc2hvd01pbm9yQ29sdW1uczogXCJWaXMgbWluZHJlIGtvbG9ubmVyXCIsXHJcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiQW5uZXQgb2cga29tbWVudGFyZXJcIixcclxuICBzaG93UGVyY2VudGFnZXM6IFwiVmlzIHByb3NlbnRlclwiLFxyXG4gIGhpZGVQZXJjZW50YWdlczogXCJTa2p1bCBwcm9zZW50ZXJcIixcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wibm9cIl0gPSBub3J3ZWdpYW5TdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJub1wiXSA9IFwiTm9yd2VnaWFuXCI7XHJcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIHJ1c3NpYW5TdHJpbmdzID0ge1xyXG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXHJcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXHJcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxyXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcclxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXHJcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxyXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHVibGljXCIsXHJcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXHJcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXHJcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXHJcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcclxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxyXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxyXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXHJcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxyXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXHJcbiAgaGlkZUJ1dHRvbjogXCLQodC60YDRi9GC0YxcIixcclxuICBzaG93QnV0dG9uOiBcItCf0L7QutCw0LfQsNGC0YxcIixcclxuICByZXNldEZpbHRlcjogXCLQntGH0LjRgdGC0LjRgtGMINGE0LjQu9GM0YLRgFwiLFxyXG4gIGNoYW5nZUxvY2FsZTogXCLQodC80LXQvdC40YLRjCDRj9C30YvQulwiLFxyXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXHJcbiAgYWRkRWxlbWVudDogXCJDaG9vc2UgcXVlc3Rpb24gdG8gc2hvdy4uLlwiLFxyXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0XCIsXHJcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXHJcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcclxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxyXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk90aGVyIGl0ZW1zIGFuZCBjb21tZW50c1wiLFxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJydVwiXSA9IHJ1c3NpYW5TdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJydVwiXSA9IFwiUnVzc2lhblwiO1xyXG4iLCJpbXBvcnQgeyBlbmdsaXNoU3RyaW5ncyB9IGZyb20gXCIuL2xvY2FsaXphdGlvbi9lbmdsaXNoXCI7XHJcblxyXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcclxuICBjdXJyZW50TG9jYWxlVmFsdWU6IFwiXCIsXHJcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXHJcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXHJcbiAgbG9jYWxlTmFtZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxyXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxyXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZVZhbHVlID09PSB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZVxyXG4gICAgICA/IFwiXCJcclxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcclxuICB9LFxyXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcclxuICB9LFxyXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xyXG4gIH0sXHJcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xyXG4gIH0sXHJcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcclxuICAgICAgPyB0aGlzLmxvY2FsZXNbdGhpcy5jdXJyZW50TG9jYWxlXVxyXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xyXG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XHJcbiAgICB2YXIgcmVzdWx0ID0gbG9jW3N0ck5hbWVdO1xyXG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSxcclxuICBnZXRMb2NhbGVzOiBmdW5jdGlvbigpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHZhciByZXMgPSBbXTtcclxuICAgIHJlcy5wdXNoKFwiXCIpO1xyXG4gICAgaWYgKHRoaXMuc3VwcG9ydGVkTG9jYWxlcyAmJiB0aGlzLnN1cHBvcnRlZExvY2FsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcclxuICAgICAgICByZXMucHVzaChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXMuc29ydCgpO1xyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcclxuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcclxuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XHJcbiIsImV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24ge1xyXG4gIENvbHVtbixcclxuICBSb3csXHJcbn1cclxuZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUge1xyXG4gIFRleHQsXHJcbiAgRmlsZUxpbmssXHJcbiAgSW1hZ2UsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBkYXRhVHlwZTogQ29sdW1uRGF0YVR5cGU7XHJcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGlzUHVibGljOiBib29sZWFuO1xyXG4gIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uO1xyXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcclxuICBsb2NhbGU/OiBzdHJpbmc7XHJcbiAgZWxlbWVudHM/OiBJVGFibGVDb2x1bW5bXTtcclxuICBwYWdlU2l6ZT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGVybWlzc2lvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGlzUHVibGljOiBib29sZWFuO1xyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFRhYmxlLCBUYWJsZVJvdyB9IGZyb20gXCIuL3RhYmxlXCI7XHJcbmltcG9ydCB7IFN1cnZleU1vZGVsLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBJVGFibGVDb2x1bW4sIFF1ZXN0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmltcG9ydCBcIi4vZGF0YXRhYmxlcy5zY3NzXCI7XHJcblxyXG5pZiAoISFkb2N1bWVudCkge1xyXG4gIHZhciBzdmdUZW1wbGF0ZSA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4uL3N2Z2J1bmRsZS5odG1sXCIpO1xyXG4gIHZhciB0ZW1wbGF0ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGVtcGxhdGVIb2xkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHRlbXBsYXRlSG9sZGVyLmlubmVySFRNTCA9IHN2Z1RlbXBsYXRlO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGVIb2xkZXIpO1xyXG59XHJcblxyXG52YXIgalF1ZXJ5ID0gKDxhbnk+d2luZG93KVtcImpRdWVyeVwiXTtcclxuXHJcbmludGVyZmFjZSBEYXRhVGFibGVzT3B0aW9ucyB7XHJcbiAgYnV0dG9uczogYm9vbGVhbiB8IHN0cmluZ1tdIHwgYW55W10gfCBhbnk7XHJcblxyXG4gIGRvbTogc3RyaW5nO1xyXG5cclxuICBvcmRlckZpeGVkOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHwgQXJyYXk8QXJyYXk8bnVtYmVyIHwgc3RyaW5nPj4gfCBvYmplY3Q7XHJcblxyXG4gIHJvd0dyb3VwOiBib29sZWFuIHwgYW55O1xyXG5cclxuICBoZWFkZXJDYWxsYmFjazogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlcyBleHRlbmRzIFRhYmxlIHtcclxuICBwdWJsaWMgZGF0YXRhYmxlQXBpOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50UGFnZU51bWJlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGV2ZW50IGlzIGZpcmVkIGNvbHVtbnMgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLlxyXG4gICAqIDxici8+IHNlbmRlciB0aGUgZGF0YXRhYmxlcyBhZGFwdGVyXHJcbiAgICogPGJyLz4gb3B0aW9ucy5zdXJ2ZXkgY3VycmVudCBzdXJ2ZXlcclxuICAgKiBAc2VlIGdldENvbHVtbnNcclxuICAgKi9cclxuICBwdWJsaWMgb25Db2x1bW5zUmVvcmRlcjogRXZlbnQ8XHJcbiAgICAoc2VuZGVyOiBEYXRhVGFibGVzLCBvcHRpb25zOiBhbnkpID0+IGFueSxcclxuICAgIGFueVxyXG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBpbml0SlF1ZXJ5KCQ6IGFueSkge1xyXG4gICAgalF1ZXJ5ID0gJDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0IGhhdmVDb21tZXJjaWFsTGljZW5zZSh2YWw6IGJvb2xlYW4pIHtcclxuICAgIFRhYmxlLmhhdmVDb21tZXJjaWFsTGljZW5zZSA9IHZhbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcclxuICAgIGRhdGE6IEFycmF5PE9iamVjdD4sXHJcbiAgICBvcHRpb25zOiBEYXRhVGFibGVzT3B0aW9ucyxcclxuICAgIF9jb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+ID0gW11cclxuICApIHtcclxuICAgIHN1cGVyKHN1cnZleSwgZGF0YSwgb3B0aW9ucywgX2NvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAoIXRoaXMucmVuZGVyUmVzdWx0KSByZXR1cm47XHJcbiAgICBjb25zdCB0YWJsZU5vZGUgPSB0aGlzLnJlbmRlclJlc3VsdC5jaGlsZHJlblswXTtcclxuICAgIGlmIChqUXVlcnkuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKHRhYmxlTm9kZSkpIHtcclxuICAgICAgalF1ZXJ5KHRhYmxlTm9kZSkuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhdGFibGVBcGkgPSB1bmRlZmluZWQ7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcsIGlzVmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgc3VwZXIuc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lLCBpc1Zpc2libGUpO1xyXG4gICAgdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpLnZpc2libGUoaXNWaXNpYmxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XHJcbiAgICBzdXBlci5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBsb2NhdGlvbik7XHJcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xyXG4gICAgdmFyIGlzQ29sdW1uTG9jYXRpb24gPSBsb2NhdGlvbiA9PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbjtcclxuICAgIGNvbHVtbi52aXNpYmxlKGlzQ29sdW1uTG9jYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGx5RmlsdGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGF0YXRhYmxlQXBpLnNlYXJjaCh2YWx1ZSkuZHJhdyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xyXG4gICAgaWYgKGNvbHVtbi5zZWFyY2goKSAhPT0gdmFsdWUpIHtcclxuICAgICAgY29sdW1uLnNlYXJjaCh2YWx1ZSkuZHJhdyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBjb2x1bW4gPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sdW1uTmFtZSArIFwiOm5hbWVcIik7XHJcbiAgICBjb2x1bW4ub3JkZXIoZGlyZWN0aW9uKS5kcmF3KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBzdXBlci5zZXRQYWdlU2l6ZSh2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YXRhYmxlQXBpLnBhZ2UubGVuKHZhbHVlKS5kcmF3KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdlTnVtYmVyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHN1cGVyLnNldFBhZ2VOdW1iZXIodmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xyXG4gICAgICB0aGlzLmRhdGF0YWJsZUFwaS5wYWdlKHZhbHVlKS5kcmF3KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQYWdlTnVtYmVyKCk6IG51bWJlciB7XHJcbiAgICBpZiAoIXRoaXMuaXNSZW5kZXJlZCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmRhdGF0YWJsZUFwaS5wYWdlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIodGFyZ2V0Tm9kZSk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0YXJnZXROb2RlLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZSBzYS1kYXRhdGFibGVzXCI7XHJcblxyXG4gICAgY29uc3QgdGFibGVOb2RlID0gPEhUTUxUYWJsZUVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgXCJcIilcclxuICAgICk7XHJcbiAgICB2YXIgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xyXG4gICAgdmFyIGNvbHVtbnNEYXRhOiBhbnkgPSBjb2x1bW5zLm1hcCgoYzogYW55KSA9PiBjLmRhdGEpO1xyXG4gICAgY29uc3QgZHRCdXR0b25DbGFzcyA9XHJcbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1zbWFsbCBzYS10YWJsZV9fYnRuLS1ncmF5XCI7XHJcbiAgICBjb25zdCBvcHRpb25zID0galF1ZXJ5LmV4dGVuZChcclxuICAgICAgdHJ1ZSxcclxuICAgICAge1xyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgIHsgZXh0ZW5kOiBcImNvcHlcIiwgY2xhc3NOYW1lOiBkdEJ1dHRvbkNsYXNzIH0sXHJcbiAgICAgICAgICB7IGV4dGVuZDogXCJjc3ZcIiwgY2xhc3NOYW1lOiBkdEJ1dHRvbkNsYXNzIH0sXHJcbiAgICAgICAgICB7IGV4dGVuZDogXCJwcmludFwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRvbTogJ0I8XCJzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvbnNcIj5wcnRpcCcsXHJcbiAgICAgICAgLy8gb3JkZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHRoaXMudGFibGVEYXRhLFxyXG4gICAgICAgIHBhZ2VMZW5ndGg6IHRoaXMuY3VycmVudFBhZ2VTaXplLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgICBjb2xSZW9yZGVyOiB7XHJcbiAgICAgICAgICBmaXhlZENvbHVtbnNMZWZ0OiAxLFxyXG4gICAgICAgICAgcmVhbHRpbWU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9vcmRlckZpeGVkOiBbWzEsIFwiYXNjXCJdXSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgc1NlYXJjaDogXCIgXCIsXHJcbiAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcjogXCJTZWFyY2guLi5cIixcclxuICAgICAgICAgIHNMZW5ndGhNZW51OiBcIlNob3cgX01FTlVfIGVudHJpZXNcIixcclxuICAgICAgICAgIHBhZ2luYXRlOiB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzOiBcIiBcIixcclxuICAgICAgICAgICAgbmV4dDogXCIgXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0OiBcImFwaVwiLFxyXG4gICAgICAgIGhlYWRlckNhbGxiYWNrOiAoXHJcbiAgICAgICAgICB0aGVhZDogYW55LFxyXG4gICAgICAgICAgZGF0YTogYW55LFxyXG4gICAgICAgICAgc3RhcnQ6IGFueSxcclxuICAgICAgICAgIGVuZDogYW55LFxyXG4gICAgICAgICAgZGlzcGxheTogYW55XHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICB2YXIgZGF0YXRhYmxlQXBpID0galF1ZXJ5KHRhYmxlTm9kZSkuZGF0YVRhYmxlKCkuYXBpKCk7XHJcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICBkYXRhdGFibGVBcGlcclxuICAgICAgICAgICAgLmNvbHVtbnMoKVxyXG4gICAgICAgICAgICAuZXEoMClcclxuICAgICAgICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICB2YXIgJHRoTm9kZSA9IGpRdWVyeShkYXRhdGFibGVBcGkuY29sdW1ucyhpbmRleCkuaGVhZGVyKCkpO1xyXG4gICAgICAgICAgICAgICR0aE5vZGUudW5iaW5kKFwiY2xpY2suRFRcIik7XHJcbiAgICAgICAgICAgICAgaWYgKCEhY29sdW1uc0RhdGFbaW5kZXhdICYmICR0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic2EtdGFibGVfX2FjdGlvbi1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZXh0ZW5zaW9ucy5yZW5kZXIoY29udGFpbmVyLCBcImNvbHVtblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbnNEYXRhW2luZGV4XSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9ubW91c2Vkb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoTm9kZS5wcmVwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMub3B0aW9uc1xyXG4gICAgKTtcclxuXHJcbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX190YWJsZSBkaXNwbGF5IHJlc3BvbnNpdmUgZGF0YVRhYmxlXCI7XHJcblxyXG4gICAgY29uc3QgZGF0YXRhYmxlQXBpUmVmID0gKHRoaXMuZGF0YXRhYmxlQXBpID0galF1ZXJ5KHRhYmxlTm9kZSkuRGF0YVRhYmxlKFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApKTtcclxuICAgIHZhciBleHRlbnNpb25zQ29udGFpbmVyID0galF1ZXJ5KFwiZGl2LnNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uc1wiKVswXTtcclxuXHJcbiAgICAvLyB0aGlzLm9uVGFibGVUb29sc0NyZWF0ZWQuZmlyZSh0aGlzLCB7IGV4dGVuc2lvbnM6IGV4dGVuc2lvbnMgfSk7XHJcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKGV4dGVuc2lvbnNDb250YWluZXIsIFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGRhdGF0YWJsZUFwaVJlZi5wYWdlKHNlbGYuY3VycmVudFBhZ2VOdW1iZXIpO1xyXG4gICAgdGhpcy5kYXRhdGFibGVBcGkucm93R3JvdXAoKS5lbmFibGUoZmFsc2UpLmRyYXcoZmFsc2UpO1xyXG5cclxuICAgIGRhdGF0YWJsZUFwaVJlZi5vbihcclxuICAgICAgXCJjb2x1bW4tcmVvcmRlclwiLFxyXG4gICAgICAoZTogYW55LCBzZXR0aW5nczogYW55LCBkZXRhaWxzOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm1vdmVDb2x1bW4oZGV0YWlscy5mcm9tIC0gMSwgZGV0YWlscy50byAtIDEpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcclxuICAgICAgICB0aGlzLm9uQ29sdW1uc1Jlb3JkZXIuZmlyZSh0aGlzLCB7IGNvbHVtbnM6IHRoaXMuY29sdW1ucyB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBkYXRhdGFibGVBcGlSZWZcclxuICAgICAgLnJvd3MoKVxyXG4gICAgICAuZXEoMClcclxuICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB2YXIgcm93ID0gZGF0YXRhYmxlQXBpUmVmLnJvdyhpbmRleCk7XHJcbiAgICAgICAgdmFyIGRldGFpbHNUciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICB2YXIgZGV0YWlsc1RkID0gPEhUTUxUYWJsZURhdGFDZWxsRWxlbWVudD4oXHJcbiAgICAgICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzYS1kYXRhdGFibGVzX19kZXRhaWxzLWNvbnRhaW5lclwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGV0YWlsc1RyLmFwcGVuZENoaWxkKGRldGFpbHNUZCk7XHJcbiAgICAgICAgdmFyIHJvd0VsZW1lbnQgPSByb3cubm9kZSgpO1xyXG4gICAgICAgIHZhciBmaXJzdENlbGwgPSByb3cuY2VsbChyb3cuaW5kZXgoKSwgMCkubm9kZSgpO1xyXG4gICAgICAgIHZhciB0YWJsZVJvdyA9IG5ldyBEYXRhdGFibGVzUm93KHRoaXMsIGZpcnN0Q2VsbCwgZGV0YWlsc1RkLCByb3cpO1xyXG4gICAgICAgIHRhYmxlUm93Lm9uVG9nZ2xlRGV0YWlscy5hZGQoKHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbnMuaXNFeHBhbmRlZCkge1xyXG4gICAgICAgICAgICBkZXRhaWxzVGQuY29sU3BhbiA9IHJvd0VsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICAgICAgICAgIHJvd0VsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgICAgZGV0YWlsc1RyLFxyXG4gICAgICAgICAgICAgIHJvd0VsZW1lbnQubmV4dFNpYmxpbmdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghIWRldGFpbHNUci5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgZGV0YWlsc1RyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGV0YWlsc1RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Jvd3MucHVzaCh0YWJsZVJvdyk7XHJcbiAgICAgICAgdGFibGVSb3cucmVuZGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgZGF0YXRhYmxlQXBpUmVmLmRyYXcoZmFsc2UpO1xyXG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB0YXJnZXROb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbHVtbnMoKTogQXJyYXk8YW55PiB7XHJcbiAgICBjb25zdCBjb2x1bW5zOiBhbnkgPSB0aGlzLmNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcclxuICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxyXG4gICAgICAgIGRhdGE6IGNvbHVtbi5uYW1lLFxyXG4gICAgICAgIHNUaXRsZTogKHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnRpdGxlKSB8fCBjb2x1bW4uZGlzcGxheU5hbWUsXHJcbiAgICAgICAgdmlzaWJsZTogdGhpcy5pc0NvbHVtblZpc2libGUoY29sdW1uKSxcclxuICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdpZHRoOlxyXG4gICAgICAgICAgdHlwZW9mIGNvbHVtbi53aWR0aCA9PSBcIm51bWJlclwiID8gY29sdW1uLndpZHRoICsgXCJweFwiIDogY29sdW1uLndpZHRoLFxyXG4gICAgICAgIG1SZW5kZXI6IChfZGF0YTogb2JqZWN0LCBfdHlwZTogc3RyaW5nLCByb3c6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdmFyIHZhbHVlID0gcm93W2NvbHVtbi5uYW1lXTtcclxuICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyBqUXVlcnkoXCI8ZGl2PlwiKS50ZXh0KHZhbHVlKS5odG1sKClcclxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLmNvbmNhdChjb2x1bW5zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsYXlvdXQoKSB7XHJcbiAgICAhIXRoaXMuZGF0YXRhYmxlQXBpICYmIHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbnMuYWRqdXN0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlc1JvdyBleHRlbmRzIFRhYmxlUm93IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXHJcbiAgICBwcm90ZWN0ZWQgZXh0ZW5zaW9uc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXHJcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXHJcbiAgICBwcml2YXRlIF9pbm5lclJvdzogYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcih0YWJsZSwgZXh0ZW5zaW9uc0NvbnRhaW5lciwgZGV0YWlsc0NvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJvd0VsZW1lbnQgPSBfaW5uZXJSb3cubm9kZSgpO1xyXG4gICAgdGhpcy5yb3dEYXRhID0gX2lubmVyUm93LmRhdGEoKTtcclxuICAgIHRoaXMuX2lubmVyUm93ID0gdGhpcy5faW5uZXJSb3cucm93KHRoaXMucm93RWxlbWVudCk7XHJcbiAgICAoPERhdGFUYWJsZXM+dGFibGUpLm9uQ29sdW1uc1Jlb3JkZXIuYWRkKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIHJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcm93RGF0YTogYW55O1xyXG5cclxuICBwdWJsaWMgZ2V0IGlubmVyUm93KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lubmVyUm93LnJvdyh0aGlzLnJvd0VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMucm93RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSb3dEYXRhKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLnJvd0RhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0YVBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbm5lclJvdy5pbmRleCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5uZXJSb3cucmVtb3ZlKCkuZHJhdygpO1xyXG4gICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XHJcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkxvY2F0aW9uLCBJVGFibGVDb2x1bW4gfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxyXG4gIG5hbWU6IFwiZHJhZ1wiLFxyXG4gIHZpc2libGVJbmRleDogMCxcclxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJidXR0b25cIixcclxuICAgICAgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIlxyXG4gICAgKTtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwiZHJhZ1wiKSk7XHJcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICB0YWJsZS5lbmFibGVDb2x1bW5SZW9yZGVyKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9LFxyXG59KTtcclxuXHJcblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XHJcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXHJcbiAgbmFtZTogXCJzb3J0XCIsXHJcbiAgdmlzaWJsZUluZGV4OiAxLFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xyXG4gICAgY29uc3QgYXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYXNjT3JkZXJcIik7XHJcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwic29ydGluZ1wiKTtcclxuICAgIGJ0bi50aXRsZSA9IFwiXCI7XHJcbiAgICB2YXIgZGlyZWN0aW9uID0gXCJhc2NcIjtcclxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcclxuICAgICAgICBidG4udGl0bGUgPSBkZXNjVGl0bGU7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkZXNjXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnRuLnRpdGxlID0gYXNjVGl0bGU7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhc2NcIjtcclxuICAgICAgfVxyXG4gICAgICB0YWJsZS5zb3J0QnlDb2x1bW4ob3B0aW9ucy5jb2x1bW5OYW1lLCBkaXJlY3Rpb24pO1xyXG4gICAgfTtcclxuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxyXG4gIG5hbWU6IFwiaGlkZVwiLFxyXG4gIHZpc2libGVJbmRleDogMixcclxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xyXG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XHJcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUNvbHVtblwiKTtcclxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxyXG4gIG5hbWU6IFwibW92ZXRvZGV0YWlsc1wiLFxyXG4gIHZpc2libGVJbmRleDogMyxcclxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwibW92ZXRvZGV0YWlsc1wiKTtcclxuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XHJcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRhYmxlLnNldENvbHVtbkxvY2F0aW9uKG9wdGlvbnMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxyXG4gIG5hbWU6IFwiZmlsdGVyXCIsXHJcbiAgdmlzaWJsZUluZGV4OiA0LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XHJcbiAgICB2YXIgZWwgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcclxuICAgICAgXCJzYS10YWJsZV9fZmlsdGVyXCIsXHJcbiAgICAgIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJQbGFjZWhvbGRlclwiKVxyXG4gICAgKTtcclxuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGVsLm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgdGFibGUuYXBwbHlDb2x1bW5GaWx0ZXIob3B0aW9ucy5jb2x1bW5OYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcclxuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcclxuICBuYW1lOiBcIm1ha2VwdWJsaWNcIixcclxuICB2aXNpYmxlSW5kZXg6IC0xLFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgbWFrZVByaXZhdGVTdmcgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwibWFrZXByaXZhdGVcIik7XHJcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XHJcbiAgICBjb25zdCBjb2x1bW4gPSB0YWJsZS5nZXRDb2x1bW5CeU5hbWUob3B0aW9ucy5jb2x1bW5OYW1lKTtcclxuXHJcbiAgICB1cGRhdGVTdGF0ZShjb2x1bW4pO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKG1ha2VQcml2YXRlU3ZnKTtcclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHVibGljU3ZnKTtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29sdW1uLmlzUHVibGljID0gIWNvbHVtbi5pc1B1YmxpYztcclxuICAgICAgdXBkYXRlU3RhdGUoY29sdW1uKTtcclxuICAgICAgdGFibGUub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJlxyXG4gICAgICAgIHRhYmxlLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGFibGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShjb2x1bW46IElUYWJsZUNvbHVtbikge1xyXG4gICAgICBpZiAoY29sdW1uLmlzUHVibGljKSB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVByaXZhdGVDb2x1bW5cIik7XHJcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fc3ZnLWJ1dHRvbi0tYWN0aXZlXCI7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNDb2x1bW5cIik7XHJcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBtYWtlUHVibGljU3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi4vdGFibGVcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlscyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxyXG4gICAgcHJpdmF0ZSByb3c6IFRhYmxlUm93LFxyXG4gICAgcHJvdGVjdGVkIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICB2YXIgZGV0YWlsc1RhYmxlID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJ0YWJsZVwiLFxyXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxyXG4gICAgKTtcclxuICAgIHRoaXMuZGV0YWlsc1RhYmxlID0gZGV0YWlsc1RhYmxlO1xyXG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgZGV0YWlsc1RhYmxlOiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgbG9jYXRpb24gPSBcImRldGFpbHNcIjtcclxuXHJcbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmRldGFpbHNUYWJsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgIHRoaXMudGFibGUuY29sdW1uc1xyXG4gICAgICAuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3cgJiYgY29sdW1uKVxyXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgICAgdmFyIHJvdyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNhLXRhYmxlX19kZXRhaWxcIik7XHJcbiAgICAgICAgdmFyIHRkMSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7XHJcbiAgICAgICAgICBpbm5lckhUTUw6IGNvbHVtbi5kaXNwbGF5TmFtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdGQyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldFJvd0RhdGEoKVtjb2x1bW4ubmFtZV07XHJcbiAgICAgICAgdmFyIHRkMyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZDMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTaG93QXNDb2x1bW5CdXR0b24oY29sdW1uLm5hbWUpKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQzKTtcclxuICAgICAgICByb3dzLnB1c2gocm93KTtcclxuICAgICAgfSk7XHJcbiAgICB2YXIgcm93ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2EtdGFibGVfX2RldGFpbFwiKTtcclxuICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7IGNvbFNwYW46IDMgfSk7XHJcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGhpcy50YWJsZSk7XHJcbiAgICBleHRlbnNpb25zLnJlbmRlcih0ZCwgXCJkZXRhaWxzXCIsIHsgcm93OiB0aGlzLnJvdyB9KTtcclxuICAgIGlmICh0ZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xyXG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICByb3dzLnB1c2gocm93KTtcclxuICAgIH1cclxuXHJcbiAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbiA9IChjb2x1bW5OYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImJ1dHRvblwiLFxyXG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JheVwiLFxyXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKSB9XHJcbiAgICApO1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLnRhYmxlLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICBpZiAoISF0aGlzLmRldGFpbHNUYWJsZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xyXG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcclxuXHJcblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XHJcbiAgbG9jYXRpb246IFwiaGVhZGVyXCIsXHJcbiAgbmFtZTogXCJmaWx0ZXJcIixcclxuICB2aXNpYmxlSW5kZXg6IDAsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgaW5wdXQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcclxuICAgICAgXCJzYS10YWJsZV9fZ2xvYmFsLWZpbHRlciBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLFxyXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcclxuICAgICk7XHJcbiAgICBpbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIHRhYmxlLmFwcGx5RmlsdGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcclxuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcclxuICBuYW1lOiBcInNob3djb2x1bW5cIixcclxuICB2aXNpYmxlSW5kZXg6IDIsXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGRyb3Bkb3duID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJzZWxlY3RcIixcclxuICAgICAgXCJzYS10YWJsZV9fc2hvdy1jb2x1bW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIlxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gdGFibGUuY29sdW1ucy5maWx0ZXIoXHJcbiAgICAgICAgKGNvbHVtbjogYW55KSA9PiAhY29sdW1uLmlzVmlzaWJsZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaGlkZGVuQ29sdW1ucy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgIGRyb3Bkb3duLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKSxcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblxyXG4gICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XHJcbiAgICAgICAgdmFyIHRleHQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XHJcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgdGl0bGU6IGNvbHVtbi5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBjb2x1bW4ubmFtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wZG93bi5vbmNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICghdmFsKSByZXR1cm47XHJcbiAgICAgIHRhYmxlLnNldENvbHVtblZpc2liaWxpdHkodmFsLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlKCk7XHJcblxyXG4gICAgdmFyIG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdXBkYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRhYmxlLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLmFkZChvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xyXG5cclxuICAgIHRoaXMub25EZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICB0YWJsZS5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5yZW1vdmUob25WaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZHJvcGRvd247XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxyXG4gIG5hbWU6IFwic2hvd2VudHJpZXNcIixcclxuICB2aXNpYmxlSW5kZXg6IDMsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xyXG4gICAgZnVuY3Rpb24gZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZWwgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCIsIFwiMjVcIiwgXCI1MFwiLCBcIjc1XCIsIFwiMTAwXCJdO1xyXG4gICAgICBvcHRpb25zVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICAgIHZhbHVlOiB2YWwsXHJcbiAgICAgICAgICB0ZXh0OiB2YWwsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGVsLnZhbHVlID0gU3RyaW5nKHRhYmxlLmdldFBhZ2VTaXplKCkpO1xyXG5cclxuICAgICAgZWwub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGFibGUuc2V0UGFnZVNpemUoTnVtYmVyKGVsLnZhbHVlKSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RvckNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXNcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNob3dTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJzcGFuXCIsXHJcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLXJpZ2h0XCIsXHJcbiAgICAgIHtcclxuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TGFiZWxcIiksXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwic3BhblwiLFxyXG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1sZWZ0XCIsXHJcbiAgICAgIHtcclxuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJlbnRyaWVzTGFiZWxcIiksXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd1NwYW4pO1xyXG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlKSk7XHJcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyaWVzU3Bhbik7XHJcbiAgICByZXR1cm4gc2VsZWN0b3JDb250YWluZXI7XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxyXG4gIG5hbWU6IFwicmVtb3Zlcm93c1wiLFxyXG4gIHZpc2libGVJbmRleDogLTEsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGUpIHtcclxuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImJ1dHRvblwiLFxyXG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JlZW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb24gXCIsXHJcbiAgICAgIHsgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicmVtb3ZlUm93c1wiKSB9XHJcbiAgICApO1xyXG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRhYmxlLmdldENyZWF0ZWRSb3dzKCkuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgaWYgKHJvdy5nZXRJc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfSxcclxufSk7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxyXG4gIG5hbWU6IFwiY2hhbmdlbG9jYWxlXCIsXHJcbiAgdmlzaWJsZUluZGV4OiAxLFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XHJcbiAgICB2YXIgbG9jYWxlcyA9IHRhYmxlLmdldExvY2FsZXMoKTtcclxuICAgIGlmIChsb2NhbGVzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgZWwgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+KFxyXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIFwic2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25cIiwge30pXHJcbiAgICApO1xyXG4gICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYW5nZUxvY2FsZVwiKV0uY29uY2F0KFxyXG4gICAgICBsb2NhbGVzXHJcbiAgICApO1xyXG4gICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xyXG4gICAgICAgIHZhbHVlOiB2YWwsXHJcbiAgICAgICAgdGV4dDogdmFsLFxyXG4gICAgICB9KTtcclxuICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gICAgZWwub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHRhYmxlLmxvY2FsZSA9IGVsLnZhbHVlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlbDtcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcclxuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XHJcblxyXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xyXG4gIGxvY2F0aW9uOiBcInJvd1wiLFxyXG4gIG5hbWU6IFwiZGV0YWlsc1wiLFxyXG4gIHZpc2libGVJbmRleDogMCxcclxuICByZW5kZXI6IChfdGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImRldGFpbFwiKTtcclxuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TWlub3JDb2x1bW5zXCIpO1xyXG4gICAgYnRuLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZV9fcm93LWV4dGVuc2lvblwiO1xyXG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIG9wdGlvbnMucm93LnRvZ2dsZURldGFpbHMoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcclxuICBsb2NhdGlvbjogXCJyb3dcIixcclxuICBuYW1lOiBcInNlbGVjdFwiLFxyXG4gIHZpc2libGVJbmRleDogLTEsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoX3RhYmxlLCBvcHQpIHtcclxuICAgIHZhciByb3cgPSBvcHQucm93O1xyXG4gICAgdmFyIGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJpbnB1dFwiLFxyXG4gICAgICBcInNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCIsXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gcm93LmdldElzU2VsZWN0ZWQoKTtcclxuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByb3cudG9nZ2xlU2VsZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNoZWNrYm94O1xyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xyXG5cclxuaW50ZXJmYWNlIElUYWJsZUV4dGVuc2lvbiB7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmlzaWJsZUluZGV4OiBudW1iZXI7XHJcbiAgcmVuZGVyOiAodGFibGU6IFRhYmxlLCBvcHQ6IGFueSkgPT4gSFRNTEVsZW1lbnQ7XHJcbiAgZGVzdHJveT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUV4dGVuc2lvbnMge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGU6IFRhYmxlKSB7fVxyXG4gIHByaXZhdGUgc3RhdGljIGV4dGVuc2lvbnM6IHtcclxuICAgIFtsb2NhdGlvbjogc3RyaW5nXTogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPjtcclxuICB9ID0ge307XHJcbiAgcHJpdmF0ZSByZW5kZXJlZEV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gPSBbXTtcclxuXHJcbiAgcHVibGljIHJlbmRlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCwgbG9jYXRpb246IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xyXG4gICAgdmFyIGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tsb2NhdGlvbl07XHJcbiAgICBpZiAoISFleHRlbnNpb25zKSB7XHJcbiAgICAgIGV4dGVuc2lvbnMgPSB0aGlzLnNvcnRFeHRlbnNpb25zKGV4dGVuc2lvbnMpO1xyXG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgIGlmICghIWV4dGVuc2lvbi5yZW5kZXIpIHtcclxuICAgICAgICAgIHZhciBhY3Rpb24gPSBleHRlbnNpb24ucmVuZGVyKHRoaXMudGFibGUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgaWYgKCEhYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEV4dGVuc2lvbnMucHVzaChleHRlbnNpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICBpZiAoISFleHRlbnNpb24uZGVzdHJveSkgZXh0ZW5zaW9uLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZW5kZXJlZEV4dGVuc2lvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFeHRlbnNpb24oZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb24pIHtcclxuICAgIGlmICghdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0pXHJcbiAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dID0gW107XHJcbiAgICB0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXS5wdXNoKGV4dGVuc2lvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZpbmRFeHRlbnNpb24oXHJcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxyXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nXHJcbiAgKTogSVRhYmxlRXh0ZW5zaW9uIHtcclxuICAgIGlmICghdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXSkgcmV0dXJuIG51bGw7XHJcbiAgICB2YXIgZXh0ZW5zaW9uID0gdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXS5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICBleHRlbnNpb246IElUYWJsZUV4dGVuc2lvblxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBleHRlbnNpb24ubmFtZSA9PSBhY3Rpb25OYW1lO1xyXG4gICAgfSlbMF07XHJcbiAgICByZXR1cm4gZXh0ZW5zaW9uIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNvcnRFeHRlbnNpb25zKGV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4pIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRlbnNpb25zKSkgcmV0dXJuO1xyXG4gICAgcmV0dXJuIFtdXHJcbiAgICAgIC5jb25jYXQoZXh0ZW5zaW9ucy5maWx0ZXIoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLnZpc2libGVJbmRleCA+PSAwKSlcclxuICAgICAgLnNvcnQoKGZpcnN0RXh0ZW5zaW9uLCBzZWNvbmRFeHRlbnNpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gZmlyc3RFeHRlbnNpb24udmlzaWJsZUluZGV4IC0gc2Vjb25kRXh0ZW5zaW9uLnZpc2libGVJbmRleDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN1cnZleU1vZGVsLCBRdWVzdGlvbiwgRXZlbnQgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcclxuaW1wb3J0IHtcclxuICBJUGVybWlzc2lvbixcclxuICBRdWVzdGlvbkxvY2F0aW9uLFxyXG4gIENvbHVtbkRhdGFUeXBlLFxyXG4gIElUYWJsZVN0YXRlLFxyXG4gIElUYWJsZUNvbHVtbixcclxufSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vZXh0ZW5zaW9ucy90YWJsZWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgaGF2ZUNvbW1lcmNpYWxMaWNlbnNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIHRhYmxlRGF0YTogYW55O1xyXG4gIHByb3RlY3RlZCBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XHJcbiAgcHJpdmF0ZSBoYXZlQ29tbWVyY2lhbExpY2Vuc2UgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxyXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXHJcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogYW55LFxyXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW11cclxuICApIHtcclxuICAgIGlmIChfY29sdW1ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXRUYWJsZURhdGEoZGF0YSk7XHJcbiAgICBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSA9IHRoaXMuc3VydmV5LmxvY2FsZTtcclxuXHJcbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1ucyhzdXJ2ZXkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmhhdmVDb21tZXJjaWFsTGljZW5zZSA9XHJcbiAgICAgIFRhYmxlLmhhdmVDb21tZXJjaWFsTGljZW5zZSB8fFxyXG4gICAgICAoISFvcHRpb25zICYmXHJcbiAgICAgICAgKHR5cGVvZiBvcHRpb25zLmhhdmVDb21tZXJjaWFsTGljZW5zZSAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgPyBvcHRpb25zLmhhdmVDb21tZXJjaWFsTGljZW5zZVxyXG4gICAgICAgICAgOiBmYWxzZSkpO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VTaXplOiBudW1iZXIgPSA1O1xyXG4gIHByb3RlY3RlZCBjdXJyZW50UGFnZU51bWJlcjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfcm93czogVGFibGVSb3dbXSA9IFtdO1xyXG4gIHByb3RlY3RlZCBpc0NvbHVtblJlb3JkZXJFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50PFxyXG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxyXG4gICAgYW55XHJcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuXHJcbiAgcHVibGljIG9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZDogRXZlbnQ8XHJcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXHJcbiAgICBhbnlcclxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xyXG5cclxuICBwdWJsaWMgb25Sb3dSZW1vdmVkOiBFdmVudDxcclxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcclxuICAgIGFueVxyXG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXHJcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgcm93OiBUYWJsZVJvd1xyXG4gICkgPT4gSFRNTEVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3Qgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0YXJnZXROb2RlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpZiAoIXRoaXMuaGF2ZUNvbW1lcmNpYWxMaWNlbnNlKSB7XHJcbiAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGVuYWJsZUNvbHVtblJlb3JkZXIoKSB7XHJcbiAgICB0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2FibGVDb2x1bW5SZW9yZGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFnZVNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlU2l6ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENyZWF0ZWRSb3dzKCk6IFRhYmxlUm93W10ge1xyXG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9yb3dzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckNyZWF0ZWRSb3dzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgcm93LmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcm93cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCkubWFwKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAocXVlc3Rpb24udGl0bGUgfHwgXCJcIikudHJpbSgpIHx8IHF1ZXN0aW9uLm5hbWUsXHJcbiAgICAgICAgZGF0YVR5cGU6XHJcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXHJcbiAgICAgICAgICAgID8gQ29sdW1uRGF0YVR5cGUuVGV4dFxyXG4gICAgICAgICAgICA6IENvbHVtbkRhdGFUeXBlLkZpbGVMaW5rLFxyXG4gICAgICAgIGlzVmlzaWJsZTogcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIixcclxuICAgICAgICBpc1B1YmxpYzogdHJ1ZSxcclxuICAgICAgICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgaXNDb2x1bW5WaXNpYmxlKGNvbHVtbjogSVRhYmxlQ29sdW1uKSB7XHJcbiAgICBpZiAoY29sdW1uLmxvY2F0aW9uICE9PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbikgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIGNvbHVtbi5pc1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBjb2x1bW5zKGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4pIHtcclxuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgdGhpcy5yZWZyZXNoKHRydWUpO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRUYWJsZURhdGEoZGF0YTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIHZhciBkYXRhSXRlbTogYW55ID0ge307XHJcbiAgICAgIHRoaXMuc3VydmV5LmRhdGEgPSBpdGVtO1xyXG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSBpdGVtW2NvbHVtbi5uYW1lXTtcclxuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcclxuICAgICAgICBpZiAocXVlc3Rpb24pIHtcclxuICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IHF1ZXN0aW9uLmRpc3BsYXlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID1cclxuICAgICAgICAgIHR5cGVvZiBkaXNwbGF5VmFsdWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyBkaXNwbGF5VmFsdWVcclxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YUl0ZW07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlQ29sdW1uKGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xyXG4gICAgdmFyIGRlbGV0ZWRDb2x1bW5zID0gdGhpcy5fY29sdW1ucy5zcGxpY2UoZnJvbSwgMSk7XHJcbiAgICB0aGlzLl9jb2x1bW5zLnNwbGljZSh0bywgMCwgZGVsZXRlZENvbHVtbnNbMF0pO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcclxuICAgIHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWUpLmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB0aGlzLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIHtcclxuICAgICAgY29sdW1uTmFtZTogY29sdW1uTmFtZSxcclxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWU6IHN0cmluZyk6IElUYWJsZUNvbHVtbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCBpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKTtcclxuICAgIGNvbHVtbi5pc1Zpc2libGUgPSBpc1Zpc2libGU7XHJcbiAgICB0aGlzLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLmZpcmUodGhpcywge1xyXG4gICAgICBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLFxyXG4gICAgICBjb2x1bW5WaXNpYmlsaXR5OiBpc1Zpc2libGUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDb2x1bW5XaWR0aChjb2x1bW5OYW1lOiBzdHJpbmcsIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKTtcclxuICAgIGNvbHVtbi53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhyb3c6IFRhYmxlUm93KTogdm9pZCB7XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9yb3dzLmluZGV4T2Yocm93KTtcclxuICAgIHRoaXMuX3Jvd3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMub25Sb3dSZW1vdmVkLmZpcmUodGhpcywgeyByb3c6IHJvdyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgY3VycmVudCBsb2NhbGUgb2YgdGhlIHRhYmxlLlxyXG4gICAqIElmIGxvY2FsZXMgbW9yZSB0aGFuIG9uZSwgdGhlIGxhbmd1YWdlIHNlbGVjdGlvbiBkcm9wZG93biB3aWxsIGJlIGFkZGVkIGluIHRoZSB0b29sYmFyXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBsb2NhbGUoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGxvY2FsZSBmb3IgdGFibGUuXHJcbiAgICovXHJcbiAgcHVibGljIHNldCBsb2NhbGUobmV3TG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3VydmV5LmxvY2FsZSA9IG5ld0xvY2FsZTtcclxuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xyXG4gICAgdGhpcy5yZWZyZXNoKHRydWUpO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvY2FsZXMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuc3VydmV5LmdldFVzZWRMb2NhbGVzKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZnJlc2goaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLmdldFBhZ2VOdW1iZXIoKTtcclxuICAgICAgaWYgKGhhcmQpIHtcclxuICAgICAgICB0aGlzLmluaXRUYWJsZURhdGEodGhpcy5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0O1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5yZW5kZXIodGFyZ2V0Tm9kZSk7XHJcbiAgICAgIHRoaXMuc2V0UGFnZVNpemUodGhpcy5jdXJyZW50UGFnZVNpemUpO1xyXG4gICAgICB0aGlzLnNldFBhZ2VOdW1iZXIodGhpcy5jdXJyZW50UGFnZU51bWJlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2xlYXJDcmVhdGVkUm93cygpO1xyXG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcclxuICAgIHRoaXMucmVuZGVyUmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcclxuICAgIHJldHVybiAhIXRoaXMucmVuZGVyUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVml6dWFsaXphdGlvbiBwYW5lbCBzdGF0ZSBnZXR0ZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBzdGF0ZSgpOiBJVGFibGVTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxyXG4gICAgICBlbGVtZW50czogW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpLFxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5jdXJyZW50UGFnZVNpemUsXHJcbiAgICB9O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIHNldHRlci5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0IHN0YXRlKG5ld1N0YXRlOiBJVGFibGVTdGF0ZSkge1xyXG4gICAgaWYgKCFuZXdTdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUubG9jYWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3U3RhdGUubG9jYWxlO1xyXG4gICAgICB0aGlzLnN1cnZleS5sb2NhbGUgPSBuZXdTdGF0ZS5sb2NhbGU7XHJcbiAgICAgIHRoaXMuaW5pdFRhYmxlRGF0YSh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUuZWxlbWVudHMgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBuZXdTdGF0ZS5lbGVtZW50cztcclxuXHJcbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlLnBhZ2VTaXplICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IG5ld1N0YXRlLnBhZ2VTaXplO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIHRhYmxlIHN0YXRlIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgcHVibGljIG9uU3RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50PFxyXG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxyXG4gICAgYW55XHJcbiAgPigpO1xyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRhYmxlIHBlcm1pc3Npb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKTogSVBlcm1pc3Npb25bXSB7XHJcbiAgICByZXR1cm4gPGFueT50aGlzLl9jb2x1bW5zLm1hcCgoY29sdW1uOiBJVGFibGVDb2x1bW4pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcclxuICAgICAgICBpc1B1YmxpYzogY29sdW1uLmlzUHVibGljLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGFibGUgcGVybWlzc2lvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIHNldCBwZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogSVBlcm1pc3Npb25bXSkge1xyXG4gICAgY29uc3QgdXBkYXRlZEVsZW1lbnRzID0gdGhpcy5fY29sdW1ucy5tYXAoKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XHJcbiAgICAgIHBlcm1pc3Npb25zLmZvckVhY2goKHBlcm1pc3Npb24pID0+IHtcclxuICAgICAgICBpZiAocGVybWlzc2lvbi5uYW1lID09PSBjb2x1bW4ubmFtZSlcclxuICAgICAgICAgIGNvbHVtbi5pc1B1YmxpYyA9IHBlcm1pc3Npb24uaXNQdWJsaWM7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgLi4uY29sdW1uIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2NvbHVtbnMgPSBbXS5jb25jYXQodXBkYXRlZEVsZW1lbnRzKTtcclxuICAgIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJlxyXG4gICAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIHBlcm1pc3Npb25zIGNoYW5nZWRcclxuICAgKi9cclxuICBwdWJsaWMgb25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjazogYW55O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGVSb3cge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcclxuICAgIHByb3RlY3RlZCBleHRlbnNpb25zQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcclxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudFxyXG4gICkge1xyXG4gICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHModGFibGUsIHRoaXMsIGRldGFpbHNDb250YWluZXIpO1xyXG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0YWJsZSk7XHJcbiAgICB0YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKHRoaXMub25Db2x1bW5Mb2NhdGlvbkNoYW5nZWRDYWxsYmFjayk7XHJcbiAgfVxyXG4gIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xyXG4gIHB1YmxpYyBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XHJcbiAgcHJpdmF0ZSBkZXRhaWxlZFJvd0NsYXNzID0gXCJzYS10YWJsZV9fZGV0YWlsLXJvd1wiO1xyXG4gIHByaXZhdGUgaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgb25Ub2dnbGVEZXRhaWxzOiBFdmVudDxcclxuICAgIChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSxcclxuICAgIGFueVxyXG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgcm93J3MgaHRtbCBlbGVtZW50XHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgZGF0YSwgd2hpY2ggaXMgZGlzcGxheWVkIGluIHRoZSByb3cuXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFJvd0RhdGEoKTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHBvc2l0aW9uIG9mIHJvdyBpbiB0aGUgdGFibGUncyBkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyO1xyXG5cclxuICBwcm90ZWN0ZWQgaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIodGhpcy5leHRlbnNpb25zQ29udGFpbmVyLCBcInJvd1wiLCB7IHJvdzogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuRGV0YWlscygpIHtcclxuICAgIHRoaXMuZGV0YWlscy5vcGVuKCk7XHJcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLmRldGFpbGVkUm93Q2xhc3M7XHJcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogdHJ1ZSB9KTtcclxuICAgIHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlRGV0YWlscygpIHtcclxuICAgIHRoaXMuZGV0YWlscy5jbG9zZSgpO1xyXG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRldGFpbGVkUm93Q2xhc3MpO1xyXG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IGZhbHNlIH0pO1xyXG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURldGFpbHMoKSB7XHJcbiAgICBpZiAodGhpcy5pc0RldGFpbHNFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmNsb3NlRGV0YWlscygpO1xyXG4gICAgfSBlbHNlIHRoaXMub3BlbkRldGFpbHMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSAhdGhpcy5pc1NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFibGUucmVtb3ZlUm93KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbG9zZURldGFpbHMoKTtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLnJlbW92ZShcclxuICAgICAgdGhpcy5vbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrXHJcbiAgICApO1xyXG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XHJcbiAgKDxhbnk+T2JqZWN0KVtcImFzc2lnblwiXSB8fFxyXG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgZm9yICh2YXIgcCBpbiBzKVxyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xyXG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxyXG4gICAgaWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShwKSkgdGhpc0NsYXNzW3BdID0gYmFzZUNsYXNzW3BdO1xyXG4gIGZ1bmN0aW9uIF9fKCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcclxuICB9XHJcbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XHJcbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcclxuICAgICAgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcylcclxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcclxuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcclxuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gc291cmNlKVxyXG4gICAgaWYgKFxyXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXHJcbiAgICAgIGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpIDwgMFxyXG4gICAgKVxyXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xyXG4gIGlmIChcclxuICAgIHNvdXJjZSAhPSBudWxsICYmXHJcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXHJcbiAgKVxyXG4gICAgZm9yIChcclxuICAgICAgdmFyIGkgPSAwLFxyXG4gICAgICAgIHByb3BlcnR5U3ltYm9scyA9ICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0oc291cmNlKTtcclxuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XHJcbiAgICAgIGkrK1xyXG4gICAgKVxyXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxyXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmRlY2xhcmUgdmFyIFJlZmxlY3Q6IGFueTtcclxuXHJcbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxyXG4gIGRlY29yYXRvcnM6IGFueSxcclxuICB0YXJnZXQ6IGFueSxcclxuICBrZXk6IGFueSxcclxuICBkZXNjOiBhbnlcclxuKSB7XHJcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxyXG4gICAgciA9XHJcbiAgICAgIGMgPCAzXHJcbiAgICAgICAgPyB0YXJnZXRcclxuICAgICAgICA6IGRlc2MgPT09IG51bGxcclxuICAgICAgICA/IChkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXHJcbiAgICAgICAgOiBkZXNjLFxyXG4gICAgZDtcclxuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICBlbHNlXHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXHJcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIERvY3VtZW50SGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT4sXHJcbiAgICBpc1NlbGVjdGVkOiAob3B0aW9uOiB7IHZhbHVlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSA9PiBib29sZWFuLFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxyXG4gICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKG9wdGlvbiksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdC5vbmNoYW5nZSA9IGhhbmRsZXI7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnV0dG9uKFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZCxcclxuICAgIHRleHQgPSBcIlwiLFxyXG4gICAgY2xhc3NOYW1lID0gXCJzYS10b29sYmFyX19idXR0b25cIlxyXG4gICkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgY2xhc3NOYW1lLCB7XHJcbiAgICAgIGlubmVyVGV4dDogdGV4dCxcclxuICAgICAgb25jbGljazogaGFuZGxlcixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChcclxuICAgIHRhZ05hbWU6IHN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nID0gXCJcIixcclxuICAgIGF0dHJzPzogYW55XHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmICghIWF0dHJzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAoPGFueT5lbClba2V5XSA9IGF0dHJzW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdFbGVtZW50KHBhdGg6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInN2Z1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInVzZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWxlbS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXHJcbiAgICAgIFwiaHJlZlwiLFxyXG4gICAgICBcIiNzYS1zdmctXCIgKyBwYXRoXHJcbiAgICApO1xyXG4gICAgc3ZnRWxlbS5hcHBlbmRDaGlsZCh1c2VFbGVtKTtcclxuICAgIHJldHVybiBzdmdFbGVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdCdXR0b24ocGF0aDogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgY29uc3QgYnRuID0gPEhUTUxCdXR0b25FbGVtZW50PihcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNhLXRhYmxlX19zdmctYnV0dG9uXCIpXHJcbiAgICApO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQocGF0aCkpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnVG9nZ2xlQnV0dG9uKFxyXG4gICAgc3ZnUGF0aDE6IHN0cmluZyxcclxuICAgIHN2UHBhdGgyOiBzdHJpbmcsXHJcbiAgICB0ZXh0MTogc3RyaW5nLFxyXG4gICAgdGV4dDI6IHN0cmluZyxcclxuICAgIGhhbmRsZXIxOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBoYW5kbGVyMjogKGU6IGFueSkgPT4gYW55LFxyXG4gICAgc3RhdGUgPSBcImZpcnN0XCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvbiBzYS10b29sYmFyX19zdmctYnV0dG9uXCJcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmcxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdmdQYXRoMSk7XHJcbiAgICBjb25zdCBzdmcyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdlBwYXRoMik7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICAgIHN0YXRlID0gXCJzZWNvbmRcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMSk7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGhhbmRsZXIyKGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcInNlY29uZFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcImZpcnN0XCI7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gdGV4dDE7XHJcbiAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzdmcxKTtcclxuICAgICAgICBoYW5kbGVyMShlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgfSBlbHNlIGlmICgoc3RhdGUgPSBcInNlY29uZFwiKSkge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gdG9nZ2xlO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlucHV0KFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgICBkZWZhdWx0VmFsdWUgPSBcIlwiXHJcbiAgKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSA8SFRNTElucHV0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImlucHV0XCIsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBydW5uaW5nSW5Ccm93c2VyOiB0eXBlb2Ygd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIixcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd0RvbVJlbmRlcmluZygpIHtcclxuICByZXR1cm4gb3B0aW9ucy5ydW5uaW5nSW5Ccm93c2VyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzYS1jb21tZXJjaWFsXCIpO1xyXG4gIGNvbnN0IGxpbmsgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBcInNhLWNvbW1lcmNpYWxfX3RleHRcIiwge1xyXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5zdXJ2ZXlqcy5pby9CdXlcIixcclxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcclxuICB9KTtcclxuICBjb25zdCBjb250YWluZXJTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJcIik7XHJcbiAgY29uc3QgaWNvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJub25jb21tZXJjaWFsXCIpO1xyXG4gIGNvbnN0IHRleHRTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgIFwic3BhblwiLFxyXG4gICAgXCJzYS1jb21tZXJjaWFsX19wcm9kdWN0XCIsXHJcbiAgICB7XHJcbiAgICAgIGlubmVySFRNTDogYFBsZWFzZSBwdXJjaGFzZSBhIFN1cnZleUpTIEFuYWx5dGljcyBkZXZlbG9wZXIgbGljZW5zZVxyXG4gICAgICAgIHRvXHJcbiAgICAgICAgdXNlIGl0IGluIHlvdXJcclxuICAgICAgICBhcHAuYCxcclxuICAgIH1cclxuICApO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKS5hcHBlbmRDaGlsZChjb250YWluZXJTcGFuKTtcclxuICBjb250YWluZXJTcGFuLmFwcGVuZENoaWxkKGljb24pO1xyXG4gIGNvbnRhaW5lclNwYW4uYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHppcEFycmF5cyguLi5hcnJheXM6IGFueVtdKTogYW55W11bXSB7XHJcbiAgICBsZXQgemlwQXJyYXk6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5c1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB6aXBBcnJheVtpXSA9IFtdO1xyXG4gICAgICBhcnJheXMuZm9yRWFjaCgoYXJyKSA9PiB7XHJcbiAgICAgICAgemlwQXJyYXlbaV0ucHVzaChhcnJbaV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB6aXBBcnJheTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW56aXBBcnJheXMoemlwQXJyYXk6IGFueVtdW10pOiBhbnlbXVtdIHtcclxuICAgIGxldCBhcnJheXM6IGFueVtdW10gPSBbXTtcclxuICAgIHppcEFycmF5LmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaikgPT4ge1xyXG4gICAgICAgIGlmICghYXJyYXlzW2pdKSBhcnJheXNbal0gPSBbXTtcclxuICAgICAgICBhcnJheXNbal1baV0gPSB2YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyYXlzO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNvcnREaWN0aW9uYXJ5KFxyXG4gICAga2V5czogYW55W10sXHJcbiAgICB2YWx1ZXM6IGFueVtdLFxyXG4gICAgZGVzYzogYm9vbGVhblxyXG4gICk6IHsga2V5czogYW55W107IHZhbHVlczogYW55W10gfSB7XHJcbiAgICBsZXQgZGljdGlvbmFyeSA9IHRoaXMuemlwQXJyYXlzKGtleXMsIHZhbHVlcyk7XHJcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFbMV0gPCBiWzFdID8gMSA6IGFbMV0gPT0gYlsxXSA/IDAgOiAtMTtcclxuICAgICAgcmV0dXJuIGFzYyA/IHJlc3VsdCA6IHJlc3VsdCAqIC0xO1xyXG4gICAgfTtcclxuICAgIGRpY3Rpb25hcnkuc29ydCgoYTogYW55W10sIGI6IGFueVtdKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZXNjID8gY29tcGFyYXRvcihhLCBiLCBmYWxzZSkgOiBjb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQga2V5c0FuZFZhbHVlcyA9IHRoaXMudW56aXBBcnJheXMoZGljdGlvbmFyeSk7XHJcbiAgICByZXR1cm4geyBrZXlzOiBrZXlzQW5kVmFsdWVzWzBdLCB2YWx1ZXM6IGtleXNBbmRWYWx1ZXNbMV0gfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9QZXJjZW50YWdlKHZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=