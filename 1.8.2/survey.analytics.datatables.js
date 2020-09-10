/*!
 * surveyjs - SurveyJS Analytics library v1.8.2
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
/* harmony import */ var _tables_extensions_rowextensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tables/extensions/rowextensions */ "./src/tables/extensions/rowextensions.ts");
/* harmony import */ var _tables_extensions_headerextensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/extensions/headerextensions */ "./src/tables/extensions/headerextensions.ts");
/* harmony import */ var _tables_extensions_columnextensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tables/extensions/columnextensions */ "./src/tables/extensions/columnextensions.ts");
/* harmony import */ var _tables_extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tables/extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _tables_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tables/datatables */ "./src/tables/datatables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_8__["DatatablesRow"]; });

/* harmony import */ var _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableExtensions", function() { return _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_9__["TableExtensions"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_10__["DocumentHelper"]; });


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
            !!options &&
                (typeof options.haveCommercialLicense !== "undefined"
                    ? options.haveCommercialLicense
                    : false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mYXJzaS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL25vcndlZ2lhbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2RhdGF0YWJsZXMuc2Nzcz85M2U1Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYmxlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZB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QUMsTUFBTSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVhLHVCQUFZLEdBQTFCLFVBQTJCLEtBQWEsRUFBRSxRQUFnQjtRQUN4RCxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL01ELHlEIiwiZmlsZSI6InN1cnZleS5hbmFseXRpY3MuZGF0YXRhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzRGF0YXRhYmxlc1wiLCBbXCJzdXJ2ZXktY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NEYXRhdGFibGVzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc0RhdGF0YWJsZXNcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL2RhdGF0YWJsZXMudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZGV0YWlsXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZHJhZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEzIDVsLTEgMSAxIDFIOVYzbDEgMSAxLTEtMy0zLTMgMyAxIDEgMS0xdjRIM2wxLTEtMS0xLTMgMyAzIDMgMS0xLTEtMWg0djRsLTEtMS0xIDEgMyAzIDMtMy0xLTEtMSAxVjloNGwtMSAxIDEgMSAzLTN6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctaGlkZVxcXCI+PHBhdGggY2xhc3M9XFxcInN0MVxcXCIgZD1cXFwiTTEyLjc5IDQuMkwxNiAxbC0xLTEtMy4zMiAzLjMyQzEwLjU3IDIuNTUgOS4zMiAyIDggMiAzLjYzIDIgMCA3Ljk3IDAgNy45N3MxLjI3IDIuMSAzLjIxIDMuODJsLTMuMjMgMy4yMy45OC45OCAzLjM1LTMuMzRDNS40MSAxMy40NCA2LjY3IDE0IDggMTRjNC4zNyAwIDgtNiA4LTZzLTEuMjctMi4wOS0zLjIxLTMuOHpNMiA3Ljk3YzEuMDctMS40NyAzLjYxLTQgNi00IC44IDAgMS42LjI3IDIuMzUuNjhsLS43OC43OGMtLjQ2LS4yOS0uOTktLjQ2LTEuNTctLjQ2LTEuNjYgMC0zIDEuMzQtMyAzIDAgLjU4LjE3IDEuMTEuNDYgMS41N2wtLjk3Ljk3QTEzLjM4IDEzLjM4IDAgMCAxIDIgNy45N3ptNiA0Yy0uOCAwLTEuNTktLjI3LTIuMzMtLjY3bC43OC0uNzdjLjQ1LjI3Ljk4LjQ0IDEuNTUuNDQgMS42NiAwIDMtMS4zNCAzLTMgMC0uNTctLjE3LTEuMDktLjQ0LTEuNTVsLjk4LS45OGMxLjExLjg3IDIuMDEgMS45MSAyLjQ2IDIuNTItMS4wNyAxLjQ4LTMuNjEgNC4wMS02IDQuMDF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXByaXZhdGVcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCI0XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNOCA4Yy0zLjMxIDAtNiAyLjczLTYgNC42N1M1LjI3IDE1IDggMTVzNi0uNCA2LTIuMzNTMTEuMzEgOCA4IDh6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXB1YmxpY1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMCA1YzAgLjM0LS4wNi42Ny0uMTQuOTkuMDUgMCAuMDkuMDEuMTQuMDEgMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTNDOC45NyAwIDguMDcuNTIgNy41MyAxLjMgOC45OCAxLjkxIDEwIDMuMzMgMTAgNXpNNiA5Yy0zLjMxIDAtNiAyLjczLTYgNC42N1MzLjI3IDE2IDYgMTZzNi0uNCA2LTIuMzNTOS4zMSA5IDYgOXpNMTAgN2MtLjE5IDAtLjM4LjAxLS41Ny4wM2E0LjE0IDQuMTQgMCAwIDEtMS4zNyAxLjM5YzMgLjgzIDUuMjMgMy4zMSA1LjQyIDUuMjggMS40NC0uMzEgMi41Mi0uOTIgMi41Mi0yLjAzQzE2IDkuNzQgMTMuMzEgNyAxMCA3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1ub25jb21tZXJjaWFsXFxcIj48cGF0aCBkPVxcXCJNOCAwTDAgMTVoMTZMOCAwem0xIDEzSDd2LTJoMnYyem0tMi0zVjVoMnY1SDd6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctc29ydGluZ1xcXCI+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTggM2wyIDIgMS0xLTMtMy0zIDMgMSAxek04IDEzbC0yLTItMSAxIDMgMyAzLTMtMS0xelxcXCI+PC9wYXRoPjwvc3ltYm9sPjwvc3ZnPlwiOyIsImV4cG9ydCAqIGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbi8vbG9jYWxpemF0aW9uXG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZmFyc2lcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mcmVuY2hcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9ub3J3ZWdpYW5cIjtcblxuLy9leHRlbnNpb25zXG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9yb3dleHRlbnNpb25zXCI7XG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9oZWFkZXJleHRlbnNpb25zXCI7XG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9jb2x1bW5leHRlbnNpb25zXCI7XG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9kZXRhaWxzZXh0ZW5zaW9uc1wiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi4vdGFibGVzL2RhdGF0YWJsZXNcIjtcbmV4cG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy90YWJsZWV4dGVuc2lvbnNcIjtcbmV4cG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XG4iLCIvL1VuY29tbWVudCB0aGlzIGxpbmUgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlXG4vL2ltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZW5nbGlzaFN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0IE1lXCIsXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJNYWtlIGNvbHVtbiBwcml2YXRlXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHVibGljXCIsXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gIHJlbW92ZVJvd3M6IFwiUmVtb3ZlIHJvd3NcIixcbiAgc2hvd0xhYmVsOiBcIlNob3dcIixcbiAgZW50cmllc0xhYmVsOiBcImVudHJpZXNcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG91Z2hudXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJQaWVcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCJIaWRlXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIk1ha2UgcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQnV0dG9uOiBcIk1ha2UgcHVibGljXCIsXG4gIHNob3dCdXR0b246IFwiU2hvd1wiLFxuICByZXNldEZpbHRlcjogXCJSZXNldCBGaWx0ZXJcIixcbiAgY2hhbmdlTG9jYWxlOiBcIkNoYW5nZSBMb2NhbGVcIixcbiAgY2xlYXJCdXR0b246IFwiQ2xlYXJcIixcbiAgYWRkRWxlbWVudDogXCJDaG9vc2UgcXVlc3Rpb24gdG8gc2hvdy4uLlwiLFxuICBkZWZhdWx0T3JkZXI6IFwiRGVmYXVsdFwiLFxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJTaG93IG1pbm9yIGNvbHVtbnNcIixcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3RoZXIgaXRlbXMgYW5kIGNvbW1lbnRzXCIsXG4gIHNob3dQZXJjZW50YWdlczogXCJTaG93IHBlcmNlbnRhZ2VzXCIsXG4gIGhpZGVQZXJjZW50YWdlczogXCJIaWRlIHBlcmNlbnRhZ2VzXCIsXG59O1xuXG4vL1VuY29tbWVudCB0aGVzZSB0d28gbGluZXMgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlLiBZb3Ugc2hvdWxkIHJlcGxhY2UgXCJlblwiIGFuZCBlblN0cmluZ3Mgd2l0aCB5b3VyIGxvY2FsZSAoXCJmclwiLCBcImRlXCIgYW5kIHNvIG9uKSBhbmQgeW91ciB2YXJpYWJsZS5cbi8vbG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuLy9sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiRW5nbGlzaFwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBmYXJzaVN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcItqv2LHZiNmHINio2YbYr9uMINio2KdcIixcbiAgdW5ncm91cEJ1dHRvbjogXCLYrdiw2YEg2q/YsdmI2YdcIixcbiAgc2VsZWN0QnV0dG9uOiBcItin2YbYqtiu2KfYqFwiLFxuICBoaWRlQ29sdW1uOiBcItmF2K7ZgduMINqp2LHYr9mGINiz2KrZiNmGXCIsXG4gIHNob3dDb2x1bW46IFwi2YbZhdin24zYtCDYs9iq2YjZhlwiLFxuICBtb3ZlVG9EZXRhaWw6IFwi2KfZhtiq2YLYp9mEINio2Ycg2KzYstim24zYp9iqXCIsXG4gIHNob3dBc0NvbHVtbjogXCLZhtmF2KfbjNi0INio2Ycg2LnZhtmI2KfZhiDYs9iq2YjZhlwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwi2YXYqtmI2YYg2K/YsSDYrNiv2YjZhFwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCLYp9io2LEg2qnZhNmF2KfYqlwiLFxuICBjaGFydFR5cGVfYmFyOiBcItmF24zZhNmHINin24xcIixcbiAgY2hhcnRUeXBlX3BpZTogXCLYr9in2KjYsdmHINin24wocGllKVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCLZvtix2KfaqdmG2K/ar9uMKFNjYXR0ZXIpXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCLYudmC2LHYqNmHINin24xcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCLZhdiu2YHbjFwiLFxuICByZXNldEZpbHRlcjogXCLYqNin2LLZhti02KfZhtuMINmB24zZhNiq2LHZh9inXCIsXG4gIGNsZWFyQnV0dG9uOiBcItm+2KfaqSDaqdix2K/ZhlwiLFxuICBhZGRFbGVtZW50OiBcItin2YbYqtiu2KfYqCDYs9mI2KfZhCDYqNix2KfbjCDZhtmF2KfbjNi0Li4uXCJcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmFcIl0gPSBmYXJzaVN0cmluZ3M7XG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmYVwiXSA9IFwiRmFyc2koUGVyc2lhbilcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIGZyZW5jaFN0cmluZ3MgPSB7XHJcbiAgICBncm91cEJ1dHRvbjogXCJHcm91cGVyXCIsXHJcbiAgICB1bmdyb3VwQnV0dG9uOiBcIkRpc3NvY2llclwiLFxyXG4gICAgc2VsZWN0QnV0dG9uOiBcIlPDqWxlY3Rpb25uZXJcIixcclxuICAgIGhpZGVDb2x1bW46IFwiTWFzcXVlciBjb2xvbm5lXCIsXHJcbiAgICBzaG93Q29sdW1uOiBcIkFmZmljaGVyIGNvbG9ubmVcIixcclxuICAgIG1ha2VQcml2YXRlQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHByaXbDqVwiLFxyXG4gICAgbWFrZVB1YmxpY0NvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwdWJsaWNcIixcclxuICAgIG1vdmVUb0RldGFpbDogXCJEw6lwbGFjZXIgdmVycyBkw6l0YWlsc1wiLFxyXG4gICAgc2hvd0FzQ29sdW1uOiBcIkFmZmljaGVyIGVuIGNvbG9ubmVcIixcclxuICAgIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0ZXMgZW4gdGFibGVcIixcclxuICAgIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk51YWdlcyBkZSBtb3RzXCIsXHJcbiAgICBjaGFydFR5cGVfYmFyOiBcIkJhcnJlc1wiLFxyXG4gICAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiQmFycmVzIGVtcGlsw6llc1wiLFxyXG4gICAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkFubmVhdVwiLFxyXG4gICAgY2hhcnRUeXBlX3BpZTogXCJTZWN0ZXVyc1wiLFxyXG4gICAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiTnVhZ2VzIGRlIHBvaW50c1wiLFxyXG4gICAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXHJcbiAgICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxlc1wiLFxyXG4gICAgaGlkZUJ1dHRvbjogXCJNYXNxdWVyXCIsXHJcbiAgICByZXNldEZpbHRlcjogXCJSYWZyYWljaGlyIEZpbHRyZXNcIixcclxuICAgIGNsZWFyQnV0dG9uOiBcIlJhZnJhaWNoaXJcIixcclxuICAgIGFkZEVsZW1lbnQ6IFwiQ2hvaXNpciBsYSBxdWVzdGlvbiDDoCBhZmZpY2hlci4uLlwiLFxyXG4gICAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1dFwiLFxyXG4gICAgYXNjT3JkZXI6IFwiQXNjZW5kYW50XCIsXHJcbiAgICBkZXNjT3JkZXI6IFwiRGVzY2VuZGFudFwiLFxyXG4gICAgc2hvd01pbm9yQ29sdW1uczogXCJBZmZpY2hlciBsZXMgY29sb25uZXMgbWluZXVyZXNcIlxyXG59O1xyXG5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN0cmluZ3M7XHJcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImZyXCJdID0gXCJGcmVuY2hcIjsiLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIG5vcndlZ2lhblN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdydXBwZXJcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJPcHBoZXYgZ3J1cHBlcmluZ1wiLFxuICBzZWxlY3RCdXR0b246IFwiVmVsZ1wiLFxuICBoaWRlQ29sdW1uOiBcIlNranVsIGtvbG9ubmVcIixcbiAgc2hvd0NvbHVtbjogXCJWaXMga29sb25uZVwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJHasO4ciBrb2xvbm5lIHByaXZhdFwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIkdqw7hyIGtvbG9ubmUgb2ZmZW50bGlnXCIsXG4gIG1vdmVUb0RldGFpbDogXCJGbHl0dCB0aWwgZGV0YWxqZXJ0IHZpc25pbmdcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlZpcyBzb20ga29sb25uZVwiLFxuICBmaWx0ZXJQbGFjZWhvbGRlcjogXCJTw7hrLi4uXCIsXG4gIHJlbW92ZVJvd3M6IFwiRmplcm4gcmFkZXJcIixcbiAgc2hvd0xhYmVsOiBcIlZpc1wiLFxuICBlbnRyaWVzTGFiZWw6IFwib3BwZsO4cmluZ2VyXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUYWJlbGx2aXNuaW5nXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk9yZHNreVwiLFxuICBjaGFydFR5cGVfYmFyOiBcIlN0b2xwZWRpYWdyYW1cIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhYmxldCBzdG9scGVkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJIanVsZGlhZ3JhbVwiLFxuICBjaGFydFR5cGVfcGllOiBcIlNla3RvcmRpYWdyYW1cIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiUHVua3RkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJNw6VsZWRpYWdyYW1cIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJLdWxlZGlhZ3JhbVwiLFxuICBoaWRlQnV0dG9uOiBcIlNranVsXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIkdqw7hyIHByaXZhdFwiLFxuICBtYWtlUHVibGljQnV0dG9uOiBcIkdqw7hyIG9mZmVudGxpZ1wiLFxuICBzaG93QnV0dG9uOiBcIlZpc1wiLFxuICByZXNldEZpbHRlcjogXCJOdWxsc3RpbGwgZmlsdGVyXCIsXG4gIGNoYW5nZUxvY2FsZTogXCJCeXR0IHNwcsOla1wiLFxuICBjbGVhckJ1dHRvbjogXCJUw7htXCIsXG4gIGFkZEVsZW1lbnQ6IFwiVmVsZyBzcMO4cnNtw6VsLi4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJTdGFuZGFyZFwiLFxuICBhc2NPcmRlcjogXCJTdGlnZW5kZVwiLFxuICBkZXNjT3JkZXI6IFwiU3lua2VuZGVcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJWaXMgbWluZHJlIGtvbG9ubmVyXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIkFubmV0IG9nIGtvbW1lbnRhcmVyXCIsXG4gIHNob3dQZXJjZW50YWdlczogXCJWaXMgcHJvc2VudGVyXCIsXG4gIGhpZGVQZXJjZW50YWdlczogXCJTa2p1bCBwcm9zZW50ZXJcIixcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wibm9cIl0gPSBub3J3ZWdpYW5TdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wibm9cIl0gPSBcIk5vcndlZ2lhblwiO1xuIiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xuXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxuICBkZWZhdWx0TG9jYWxlVmFsdWU6IFwiZW5cIixcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgc3VwcG9ydGVkTG9jYWxlczogPEFycmF5PGFueT4+W10sXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcbiAgICAgID8gXCJcIlxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGN1cnJlbnRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgZGVmYXVsdExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgZ2V0TG9jYWxlczogZnVuY3Rpb24oKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZExvY2FsZXMgJiYgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzLnNvcnQoKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcImVuZ2xpc2hcIjtcbiIsImV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24ge1xuICBDb2x1bW4sXG4gIFJvdyxcbn1cbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHtcbiAgVGV4dCxcbiAgRmlsZUxpbmssXG4gIEltYWdlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG4gIGlzUHVibGljOiBib29sZWFuO1xuICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3RhdGUge1xuICBsb2NhbGU/OiBzdHJpbmc7XG4gIGVsZW1lbnRzPzogSVRhYmxlQ29sdW1uW107XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQZXJtaXNzaW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpc1B1YmxpYzogYm9vbGVhbjtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFRhYmxlLCBUYWJsZVJvdyB9IGZyb20gXCIuL3RhYmxlXCI7XG5pbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgRXZlbnQgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiwgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuaW1wb3J0IFwiLi9kYXRhdGFibGVzLnNjc3NcIjtcblxuaWYgKCEhZG9jdW1lbnQpIHtcbiAgdmFyIHN2Z1RlbXBsYXRlID0gcmVxdWlyZShcImh0bWwtbG9hZGVyP2ludGVycG9sYXRlIXZhbC1sb2FkZXIhLi4vc3ZnYnVuZGxlLmh0bWxcIik7XG4gIHZhciB0ZW1wbGF0ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGVtcGxhdGVIb2xkZXIuaW5uZXJIVE1MID0gc3ZnVGVtcGxhdGU7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGVIb2xkZXIpO1xufVxuXG52YXIgalF1ZXJ5ID0gKDxhbnk+d2luZG93KVtcImpRdWVyeVwiXTtcblxuaW50ZXJmYWNlIERhdGFUYWJsZXNPcHRpb25zIHtcbiAgYnV0dG9uczogYm9vbGVhbiB8IHN0cmluZ1tdIHwgYW55W10gfCBhbnk7XG5cbiAgZG9tOiBzdHJpbmc7XG5cbiAgb3JkZXJGaXhlZDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IEFycmF5PEFycmF5PG51bWJlciB8IHN0cmluZz4+IHwgb2JqZWN0O1xuXG4gIHJvd0dyb3VwOiBib29sZWFuIHwgYW55O1xuXG4gIGhlYWRlckNhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVzIGV4dGVuZHMgVGFibGUge1xuICBwdWJsaWMgZGF0YXRhYmxlQXBpOiBhbnk7XG5cbiAgcHVibGljIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgaXMgZmlyZWQgY29sdW1ucyBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGNoYW5nZWQuXG4gICAqIDxici8+IHNlbmRlciB0aGUgZGF0YXRhYmxlcyBhZGFwdGVyXG4gICAqIDxici8+IG9wdGlvbnMuc3VydmV5IGN1cnJlbnQgc3VydmV5XG4gICAqIEBzZWUgZ2V0Q29sdW1uc1xuICAgKi9cbiAgcHVibGljIG9uQ29sdW1uc1Jlb3JkZXI6IEV2ZW50PFxuICAgIChzZW5kZXI6IERhdGFUYWJsZXMsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IERhdGFUYWJsZXMsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIHN0YXRpYyBpbml0SlF1ZXJ5KCQ6IGFueSkge1xuICAgIGpRdWVyeSA9ICQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxuICAgIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgb3B0aW9uczogRGF0YVRhYmxlc09wdGlvbnMsXG4gICAgX2NvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4gPSBbXVxuICApIHtcbiAgICBzdXBlcihzdXJ2ZXksIGRhdGEsIG9wdGlvbnMsIF9jb2x1bW5zKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICghdGhpcy5yZW5kZXJSZXN1bHQpIHJldHVybjtcbiAgICBjb25zdCB0YWJsZU5vZGUgPSB0aGlzLnJlbmRlclJlc3VsdC5jaGlsZHJlblswXTtcbiAgICBpZiAoalF1ZXJ5LmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSh0YWJsZU5vZGUpKSB7XG4gICAgICBqUXVlcnkodGFibGVOb2RlKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YXRhYmxlQXBpID0gdW5kZWZpbmVkO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgc3VwZXIuc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lLCBpc1Zpc2libGUpO1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKS52aXNpYmxlKGlzVmlzaWJsZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZTogc3RyaW5nLCBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbikge1xuICAgIHN1cGVyLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIGxvY2F0aW9uKTtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xuICAgIHZhciBpc0NvbHVtbkxvY2F0aW9uID0gbG9jYXRpb24gPT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW47XG4gICAgY29sdW1uLnZpc2libGUoaXNDb2x1bW5Mb2NhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLnNlYXJjaCh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKTtcbiAgICBpZiAoY29sdW1uLnNlYXJjaCgpICE9PSB2YWx1ZSkge1xuICAgICAgY29sdW1uLnNlYXJjaCh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnRCeUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKTtcbiAgICBjb2x1bW4ub3JkZXIoZGlyZWN0aW9uKS5kcmF3KGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0UGFnZVNpemUodmFsdWUpO1xuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcbiAgICAgIHRoaXMuZGF0YXRhYmxlQXBpLnBhZ2UubGVuKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0UGFnZU51bWJlcih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy5kYXRhdGFibGVBcGkucGFnZSh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFBhZ2VOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhdGF0YWJsZUFwaS5wYWdlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgc3VwZXIucmVuZGVyKHRhcmdldE5vZGUpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0YXJnZXROb2RlLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZSBzYS1kYXRhdGFibGVzXCI7XG5cbiAgICBjb25zdCB0YWJsZU5vZGUgPSA8SFRNTFRhYmxlRWxlbWVudD4oXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgXCJcIilcbiAgICApO1xuICAgIHZhciBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XG4gICAgdmFyIGNvbHVtbnNEYXRhOiBhbnkgPSBjb2x1bW5zLm1hcCgoYzogYW55KSA9PiBjLmRhdGEpO1xuICAgIGNvbnN0IGR0QnV0dG9uQ2xhc3MgPVxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLXNtYWxsIHNhLXRhYmxlX19idG4tLWdyYXlcIjtcbiAgICBjb25zdCBvcHRpb25zID0galF1ZXJ5LmV4dGVuZChcbiAgICAgIHRydWUsXG4gICAgICB7XG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7IGV4dGVuZDogXCJjb3B5XCIsIGNsYXNzTmFtZTogZHRCdXR0b25DbGFzcyB9LFxuICAgICAgICAgIHsgZXh0ZW5kOiBcImNzdlwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgICB7IGV4dGVuZDogXCJwcmludFwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZG9tOiAnQjxcInNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uc1wiPnBydGlwJyxcbiAgICAgICAgLy8gb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgICAgcGFnZUxlbmd0aDogdGhpcy5jdXJyZW50UGFnZVNpemUsXG4gICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICBjb2xSZW9yZGVyOiB7XG4gICAgICAgICAgZml4ZWRDb2x1bW5zTGVmdDogMSxcbiAgICAgICAgICByZWFsdGltZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8vb3JkZXJGaXhlZDogW1sxLCBcImFzY1wiXV0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgc1NlYXJjaDogXCIgXCIsXG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgICAgc0xlbmd0aE1lbnU6IFwiU2hvdyBfTUVOVV8gZW50cmllc1wiLFxuICAgICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgICBwcmV2aW91czogXCIgXCIsXG4gICAgICAgICAgICBuZXh0OiBcIiBcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IFwiYXBpXCIsXG4gICAgICAgIGhlYWRlckNhbGxiYWNrOiAoXG4gICAgICAgICAgdGhlYWQ6IGFueSxcbiAgICAgICAgICBkYXRhOiBhbnksXG4gICAgICAgICAgc3RhcnQ6IGFueSxcbiAgICAgICAgICBlbmQ6IGFueSxcbiAgICAgICAgICBkaXNwbGF5OiBhbnlcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgdmFyIGRhdGF0YWJsZUFwaSA9IGpRdWVyeSh0YWJsZU5vZGUpLmRhdGFUYWJsZSgpLmFwaSgpO1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBkYXRhdGFibGVBcGlcbiAgICAgICAgICAgIC5jb2x1bW5zKClcbiAgICAgICAgICAgIC5lcSgwKVxuICAgICAgICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgdmFyICR0aE5vZGUgPSBqUXVlcnkoZGF0YXRhYmxlQXBpLmNvbHVtbnMoaW5kZXgpLmhlYWRlcigpKTtcbiAgICAgICAgICAgICAgJHRoTm9kZS51bmJpbmQoXCJjbGljay5EVFwiKTtcbiAgICAgICAgICAgICAgaWYgKCEhY29sdW1uc0RhdGFbaW5kZXhdICYmICR0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwic2EtdGFibGVfX2FjdGlvbi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2VsZi5leHRlbnNpb25zLnJlbmRlcihjb250YWluZXIsIFwiY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbnNEYXRhW2luZGV4XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICR0aE5vZGUucHJlcGVuZChjb250YWluZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgKTtcblxuICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX190YWJsZSBkaXNwbGF5IHJlc3BvbnNpdmUgZGF0YVRhYmxlXCI7XG5cbiAgICBjb25zdCBkYXRhdGFibGVBcGlSZWYgPSAodGhpcy5kYXRhdGFibGVBcGkgPSBqUXVlcnkodGFibGVOb2RlKS5EYXRhVGFibGUoXG4gICAgICBvcHRpb25zXG4gICAgKSk7XG4gICAgdmFyIGV4dGVuc2lvbnNDb250YWluZXIgPSBqUXVlcnkoXCJkaXYuc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25zXCIpWzBdO1xuXG4gICAgLy8gdGhpcy5vblRhYmxlVG9vbHNDcmVhdGVkLmZpcmUodGhpcywgeyBleHRlbnNpb25zOiBleHRlbnNpb25zIH0pO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIoZXh0ZW5zaW9uc0NvbnRhaW5lciwgXCJoZWFkZXJcIik7XG5cbiAgICBkYXRhdGFibGVBcGlSZWYucGFnZShzZWxmLmN1cnJlbnRQYWdlTnVtYmVyKTtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5yb3dHcm91cCgpLmVuYWJsZShmYWxzZSkuZHJhdyhmYWxzZSk7XG5cbiAgICBkYXRhdGFibGVBcGlSZWYub24oXG4gICAgICBcImNvbHVtbi1yZW9yZGVyXCIsXG4gICAgICAoZTogYW55LCBzZXR0aW5nczogYW55LCBkZXRhaWxzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5tb3ZlQ29sdW1uKGRldGFpbHMuZnJvbSAtIDEsIGRldGFpbHMudG8gLSAxKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgICAgICB0aGlzLm9uQ29sdW1uc1Jlb3JkZXIuZmlyZSh0aGlzLCB7IGNvbHVtbnM6IHRoaXMuY29sdW1ucyB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZGF0YXRhYmxlQXBpUmVmXG4gICAgICAucm93cygpXG4gICAgICAuZXEoMClcbiAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBkYXRhdGFibGVBcGlSZWYucm93KGluZGV4KTtcbiAgICAgICAgdmFyIGRldGFpbHNUciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgdmFyIGRldGFpbHNUZCA9IDxIVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQ+KFxuICAgICAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNhLWRhdGF0YWJsZXNfX2RldGFpbHMtY29udGFpbmVyXCIpXG4gICAgICAgICk7XG4gICAgICAgIGRldGFpbHNUci5hcHBlbmRDaGlsZChkZXRhaWxzVGQpO1xuICAgICAgICB2YXIgcm93RWxlbWVudCA9IHJvdy5ub2RlKCk7XG4gICAgICAgIHZhciBmaXJzdENlbGwgPSByb3cuY2VsbChyb3cuaW5kZXgoKSwgMCkubm9kZSgpO1xuICAgICAgICB2YXIgdGFibGVSb3cgPSBuZXcgRGF0YXRhYmxlc1Jvdyh0aGlzLCBmaXJzdENlbGwsIGRldGFpbHNUZCwgcm93KTtcbiAgICAgICAgdGFibGVSb3cub25Ub2dnbGVEZXRhaWxzLmFkZCgoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgZGV0YWlsc1RkLmNvbFNwYW4gPSByb3dFbGVtZW50LmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICAgICAgcm93RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgZGV0YWlsc1RyLFxuICAgICAgICAgICAgICByb3dFbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoISFkZXRhaWxzVHIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICBkZXRhaWxzVHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkZXRhaWxzVHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Jvd3MucHVzaCh0YWJsZVJvdyk7XG4gICAgICAgIHRhYmxlUm93LnJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgZGF0YXRhYmxlQXBpUmVmLmRyYXcoZmFsc2UpO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zKCk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IGNvbHVtbnM6IGFueSA9IHRoaXMuY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgIGRhdGE6IGNvbHVtbi5uYW1lLFxuICAgICAgICBzVGl0bGU6IChxdWVzdGlvbiAmJiBxdWVzdGlvbi50aXRsZSkgfHwgY29sdW1uLmRpc3BsYXlOYW1lLFxuICAgICAgICB2aXNpYmxlOiB0aGlzLmlzQ29sdW1uVmlzaWJsZShjb2x1bW4pLFxuICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxuICAgICAgICB3aWR0aDpcbiAgICAgICAgICB0eXBlb2YgY29sdW1uLndpZHRoID09IFwibnVtYmVyXCIgPyBjb2x1bW4ud2lkdGggKyBcInB4XCIgOiBjb2x1bW4ud2lkdGgsXG4gICAgICAgIG1SZW5kZXI6IChfZGF0YTogb2JqZWN0LCBfdHlwZTogc3RyaW5nLCByb3c6IGFueSkgPT4ge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHJvd1tjb2x1bW4ubmFtZV07XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBqUXVlcnkoXCI8ZGl2PlwiKS50ZXh0KHZhbHVlKS5odG1sKClcbiAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIGRlZmF1bHRDb250ZW50OiBcIlwiLFxuICAgICAgfSxcbiAgICBdLmNvbmNhdChjb2x1bW5zKTtcbiAgfVxuXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zLmFkanVzdCgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhdGFibGVzUm93IGV4dGVuZHMgVGFibGVSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByb3RlY3RlZCBleHRlbnNpb25zQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfaW5uZXJSb3c6IGFueVxuICApIHtcbiAgICBzdXBlcih0YWJsZSwgZXh0ZW5zaW9uc0NvbnRhaW5lciwgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgdGhpcy5yb3dFbGVtZW50ID0gX2lubmVyUm93Lm5vZGUoKTtcbiAgICB0aGlzLnJvd0RhdGEgPSBfaW5uZXJSb3cuZGF0YSgpO1xuICAgIHRoaXMuX2lubmVyUm93ID0gdGhpcy5faW5uZXJSb3cucm93KHRoaXMucm93RWxlbWVudCk7XG4gICAgKDxEYXRhVGFibGVzPnRhYmxlKS5vbkNvbHVtbnNSZW9yZGVyLmFkZCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgcm93RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcm93RGF0YTogYW55O1xuXG4gIHB1YmxpYyBnZXQgaW5uZXJSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lubmVyUm93LnJvdyh0aGlzLnJvd0VsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnJvd0VsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Um93RGF0YSgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucm93RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lclJvdy5pbmRleCgpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlubmVyUm93LnJlbW92ZSgpLmRyYXcoKTtcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5pbXBvcnQgeyBRdWVzdGlvbkxvY2F0aW9uLCBJVGFibGVDb2x1bW4gfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImRyYWdcIixcbiAgdmlzaWJsZUluZGV4OiAwLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fZHJhZy1idXR0b25cIlxuICAgICk7XG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJkcmFnXCIpKTtcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGFibGUuZW5hYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJzb3J0XCIsXG4gIHZpc2libGVJbmRleDogMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBkZXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZGVzY09yZGVyXCIpO1xuICAgIGNvbnN0IGFzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFzY09yZGVyXCIpO1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJzb3J0aW5nXCIpO1xuICAgIGJ0bi50aXRsZSA9IFwiXCI7XG4gICAgdmFyIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiYXNjXCIpIHtcbiAgICAgICAgYnRuLnRpdGxlID0gZGVzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGFzY1RpdGxlO1xuICAgICAgICBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgICAgfVxuICAgICAgdGFibGUuc29ydEJ5Q29sdW1uKG9wdGlvbnMuY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIGJ0bi5vbmRyYWcgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiaGlkZVwiLFxuICB2aXNpYmxlSW5kZXg6IDIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImhpZGVcIik7XG4gICAgYnRuLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImhpZGVDb2x1bW5cIik7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KG9wdGlvbnMuY29sdW1uTmFtZSwgZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtb3ZldG9kZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJtb3ZldG9kZXRhaWxzXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRhYmxlLnNldENvbHVtbkxvY2F0aW9uKG9wdGlvbnMuY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Sb3cpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJmaWx0ZXJcIixcbiAgdmlzaWJsZUluZGV4OiA0LFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIHZhciBlbCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZmlsdGVyXCIsXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcbiAgICApO1xuICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlbC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUNvbHVtbkZpbHRlcihvcHRpb25zLmNvbHVtbk5hbWUsIGVsLnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBlbDtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJtYWtlcHVibGljXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWtlUHJpdmF0ZVN2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHJpdmF0ZVwiKTtcbiAgICBjb25zdCBtYWtlUHVibGljU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2VwdWJsaWNcIik7XG4gICAgY29uc3QgY29sdW1uID0gdGFibGUuZ2V0Q29sdW1uQnlOYW1lKG9wdGlvbnMuY29sdW1uTmFtZSk7XG5cbiAgICB1cGRhdGVTdGF0ZShjb2x1bW4pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHJpdmF0ZVN2Zyk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKG1ha2VQdWJsaWNTdmcpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb2x1bW4uaXNQdWJsaWMgPSAhY29sdW1uLmlzUHVibGljO1xuICAgICAgdXBkYXRlU3RhdGUoY29sdW1uKTtcbiAgICAgIHRhYmxlLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sgJiZcbiAgICAgICAgdGFibGUub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayh0YWJsZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKGNvbHVtbjogSVRhYmxlQ29sdW1uKSB7XG4gICAgICBpZiAoY29sdW1uLmlzUHVibGljKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uXCI7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtYWtlUHJpdmF0ZUNvbHVtblwiKTtcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtYWtlUHVibGljU3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvbiBzYS10YWJsZV9fc3ZnLWJ1dHRvbi0tYWN0aXZlXCI7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtYWtlUHVibGljQ29sdW1uXCIpO1xuICAgICAgICBtYWtlUHJpdmF0ZVN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBtYWtlUHVibGljU3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIERldGFpbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgcm93OiBUYWJsZVJvdyxcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdmFyIGRldGFpbHNUYWJsZSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxuICAgICk7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUgPSBkZXRhaWxzVGFibGU7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGRldGFpbHNUYWJsZTogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBsb2NhdGlvbiA9IFwiZGV0YWlsc1wiO1xuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICB0aGlzLnRhYmxlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiBjb2x1bW4pXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgICAgICB2YXIgdGQxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHtcbiAgICAgICAgICBpbm5lckhUTUw6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0ZDIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldFJvd0RhdGEoKVtjb2x1bW4ubmFtZV07XG4gICAgICAgIHZhciB0ZDMgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbihjb2x1bW4ubmFtZSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgIH0pO1xuICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7IGNvbFNwYW46IDMgfSk7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRoaXMudGFibGUpO1xuICAgIGV4dGVuc2lvbnMucmVuZGVyKHRkLCBcImRldGFpbHNcIiwgeyByb3c6IHRoaXMucm93IH0pO1xuICAgIGlmICh0ZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uID0gKGNvbHVtbk5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKSB9XG4gICAgKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbik7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGlmICghIXRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcImZpbHRlclwiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBpbnB1dCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZ2xvYmFsLWZpbHRlciBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLFxuICAgICAgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlclBsYWNlaG9sZGVyXCIpXG4gICAgKTtcbiAgICBpbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUZpbHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGlucHV0O1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3djb2x1bW5cIixcbiAgdmlzaWJsZUluZGV4OiAyLFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic2VsZWN0XCIsXG4gICAgICBcInNhLXRhYmxlX19zaG93LWNvbHVtbiBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gdGFibGUuY29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChjb2x1bW46IGFueSkgPT4gIWNvbHVtbi5pc1Zpc2libGVcbiAgICAgICk7XG4gICAgICBpZiAoaGlkZGVuQ29sdW1ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgZHJvcGRvd24uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dDb2x1bW5cIiksXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgICAgaGlkZGVuQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IGFueSkgPT4ge1xuICAgICAgICB2YXIgdGV4dCA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICB0aXRsZTogY29sdW1uLmRpc3BsYXlOYW1lLFxuICAgICAgICAgIHZhbHVlOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkcm9wZG93bi5vbmNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdmFsKSByZXR1cm47XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KHZhbCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgdmFyIG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICB0YWJsZS5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5hZGQob25WaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKTtcblxuICAgIHRoaXMub25EZXN0cm95ID0gKCkgPT4ge1xuICAgICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQucmVtb3ZlKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gZHJvcGRvd247XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiaGVhZGVyXCIsXG4gIG5hbWU6IFwic2hvd2VudHJpZXNcIixcbiAgdmlzaWJsZUluZGV4OiAzLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgZnVuY3Rpb24gZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgIGNvbnN0IGVsID0gPEhUTUxTZWxlY3RFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICB2YXIgb3B0aW9uc1ZhbHVlcyA9IFtcIjFcIiwgXCI1XCIsIFwiMTBcIiwgXCIyNVwiLCBcIjUwXCIsIFwiNzVcIiwgXCIxMDBcIl07XG4gICAgICBvcHRpb25zVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICB0ZXh0OiB2YWwsXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBlbC52YWx1ZSA9IFN0cmluZyh0YWJsZS5nZXRQYWdlU2l6ZSgpKTtcblxuICAgICAgZWwub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHRhYmxlLnNldFBhZ2VTaXplKE51bWJlcihlbC52YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvckNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS10YWJsZV9fZW50cmllc1wiXG4gICAgKTtcbiAgICBjb25zdCBzaG93U3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLXJpZ2h0XCIsXG4gICAgICB7XG4gICAgICAgIGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dMYWJlbFwiKSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGVudHJpZXNTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3BhblwiLFxuICAgICAgXCJzYS10YWJsZV9fZW50cmllcy1sYWJlbCBzYS10YWJsZV9fZW50cmllcy1sYWJlbC0tbGVmdFwiLFxuICAgICAge1xuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJlbnRyaWVzTGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcblxuICAgIHNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dTcGFuKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRFbnRyaWVzRHJvcGRvd24odGFibGUpKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyaWVzU3Bhbik7XG4gICAgcmV0dXJuIHNlbGVjdG9yQ29udGFpbmVyO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInJlbW92ZXJvd3NcIixcbiAgdmlzaWJsZUluZGV4OiAtMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGUpIHtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JlZW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb24gXCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlbW92ZVJvd3NcIikgfVxuICAgICk7XG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0YWJsZS5nZXRDcmVhdGVkUm93cygpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICBpZiAocm93LmdldElzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcImNoYW5nZWxvY2FsZVwiLFxuICB2aXNpYmxlSW5kZXg6IDEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGxvY2FsZXMgPSB0YWJsZS5nZXRMb2NhbGVzKCk7XG4gICAgaWYgKGxvY2FsZXMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZWwgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcInNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uXCIsIHt9KVxuICAgICk7XG4gICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYW5nZUxvY2FsZVwiKV0uY29uY2F0KFxuICAgICAgbG9jYWxlc1xuICAgICk7XG4gICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgdGV4dDogdmFsLFxuICAgICAgfSk7XG4gICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGFibGUubG9jYWxlID0gZWwudmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJyb3dcIixcbiAgbmFtZTogXCJkZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMCxcbiAgcmVuZGVyOiAoX3RhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiB7XG4gICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwiZGV0YWlsXCIpO1xuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TWlub3JDb2x1bW5zXCIpO1xuICAgIGJ0bi5jbGFzc05hbWUgKz0gXCIgc2EtdGFibGVfX3Jvdy1leHRlbnNpb25cIjtcbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG9wdGlvbnMucm93LnRvZ2dsZURldGFpbHMoKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwic2VsZWN0XCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKF90YWJsZSwgb3B0KSB7XG4gICAgdmFyIHJvdyA9IG9wdC5yb3c7XG4gICAgdmFyIGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIFwic2EtdGFibGVfX3Jvdy1leHRlbnNpb25cIixcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgfVxuICAgICk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHJvdy5nZXRJc1NlbGVjdGVkKCk7XG4gICAgY2hlY2tib3gub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByb3cudG9nZ2xlU2VsZWN0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5cbmludGVyZmFjZSBJVGFibGVFeHRlbnNpb24ge1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZpc2libGVJbmRleDogbnVtYmVyO1xuICByZW5kZXI6ICh0YWJsZTogVGFibGUsIG9wdDogYW55KSA9PiBIVE1MRWxlbWVudDtcbiAgZGVzdHJveT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUV4dGVuc2lvbnMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlOiBUYWJsZSkge31cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0ZW5zaW9uczoge1xuICAgIFtsb2NhdGlvbjogc3RyaW5nXTogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPjtcbiAgfSA9IHt9O1xuICBwcml2YXRlIHJlbmRlcmVkRXh0ZW5zaW9uczogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPiA9IFtdO1xuXG4gIHB1YmxpYyByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsIGxvY2F0aW9uOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IFRhYmxlRXh0ZW5zaW9ucy5leHRlbnNpb25zW2xvY2F0aW9uXTtcbiAgICBpZiAoISFleHRlbnNpb25zKSB7XG4gICAgICBleHRlbnNpb25zID0gdGhpcy5zb3J0RXh0ZW5zaW9ucyhleHRlbnNpb25zKTtcbiAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiB7XG4gICAgICAgIGlmICghIWV4dGVuc2lvbi5yZW5kZXIpIHtcbiAgICAgICAgICB2YXIgYWN0aW9uID0gZXh0ZW5zaW9uLnJlbmRlcih0aGlzLnRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICBpZiAoISFhY3Rpb24pIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLnB1c2goZXh0ZW5zaW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgaWYgKCEhZXh0ZW5zaW9uLmRlc3Ryb3kpIGV4dGVuc2lvbi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlZEV4dGVuc2lvbnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFeHRlbnNpb24oZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb24pIHtcbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dKVxuICAgICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0gPSBbXTtcbiAgICB0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXS5wdXNoKGV4dGVuc2lvbik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZpbmRFeHRlbnNpb24oXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBhY3Rpb25OYW1lOiBzdHJpbmdcbiAgKTogSVRhYmxlRXh0ZW5zaW9uIHtcbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uc1tsb2NhdGlvbl0pIHJldHVybiBudWxsO1xuICAgIHZhciBleHRlbnNpb24gPSB0aGlzLmV4dGVuc2lvbnNbbG9jYXRpb25dLmZpbHRlcihmdW5jdGlvbiAoXG4gICAgICBleHRlbnNpb246IElUYWJsZUV4dGVuc2lvblxuICAgICkge1xuICAgICAgcmV0dXJuIGV4dGVuc2lvbi5uYW1lID09IGFjdGlvbk5hbWU7XG4gICAgfSlbMF07XG4gICAgcmV0dXJuIGV4dGVuc2lvbiB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0RXh0ZW5zaW9ucyhleHRlbnNpb25zOiBBcnJheTxJVGFibGVFeHRlbnNpb24+KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dGVuc2lvbnMpKSByZXR1cm47XG4gICAgcmV0dXJuIFtdXG4gICAgICAuY29uY2F0KGV4dGVuc2lvbnMuZmlsdGVyKChleHRlbnNpb24pID0+IGV4dGVuc2lvbi52aXNpYmxlSW5kZXggPj0gMCkpXG4gICAgICAuc29ydCgoZmlyc3RFeHRlbnNpb24sIHNlY29uZEV4dGVuc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gZmlyc3RFeHRlbnNpb24udmlzaWJsZUluZGV4IC0gc2Vjb25kRXh0ZW5zaW9uLnZpc2libGVJbmRleDtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgUXVlc3Rpb24sIEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQge1xuICBJUGVybWlzc2lvbixcbiAgUXVlc3Rpb25Mb2NhdGlvbixcbiAgQ29sdW1uRGF0YVR5cGUsXG4gIElUYWJsZVN0YXRlLFxuICBJVGFibGVDb2x1bW4sXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZSB7XG4gIHByb3RlY3RlZCB0YWJsZURhdGE6IGFueTtcbiAgcHJvdGVjdGVkIGV4dGVuc2lvbnM6IFRhYmxlRXh0ZW5zaW9ucztcbiAgcHJpdmF0ZSBoYXZlQ29tbWVyY2lhbExpY2Vuc2UgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IGFueSxcbiAgICBwcm90ZWN0ZWQgX2NvbHVtbnM6IEFycmF5PGFueT4gPSBbXVxuICApIHtcbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFibGVEYXRhKGRhdGEpO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdGhpcy5zdXJ2ZXkubG9jYWxlO1xuXG4gICAgaWYgKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuICAgIHRoaXMuZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGhpcyk7XG5cbiAgICB0aGlzLmhhdmVDb21tZXJjaWFsTGljZW5zZSA9XG4gICAgICAhIW9wdGlvbnMgJiZcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5oYXZlQ29tbWVyY2lhbExpY2Vuc2UgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgPyBvcHRpb25zLmhhdmVDb21tZXJjaWFsTGljZW5zZVxuICAgICAgICA6IGZhbHNlKTtcbiAgfVxuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2l6ZTogbnVtYmVyID0gNTtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfcm93czogVGFibGVSb3dbXSA9IFtdO1xuICBwcm90ZWN0ZWQgaXNDb2x1bW5SZW9yZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uUm93UmVtb3ZlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICByb3c6IFRhYmxlUm93XG4gICkgPT4gSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IGFwcGx5Q29sdW1uRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBzb3J0QnlDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQ7XG5cbiAgcHVibGljIHJlbmRlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAoIXRoaXMuaGF2ZUNvbW1lcmNpYWxMaWNlbnNlKSB7XG4gICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUNvbW1lcmNpYWxMaWNlbnNlTGluaygpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlQ29sdW1uUmVvcmRlcigpIHtcbiAgICB0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGVDb2x1bW5SZW9yZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VOdW1iZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZU51bWJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZVNpemU7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZVNpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFBhZ2VTaXplID0gdmFsdWU7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldENyZWF0ZWRSb3dzKCk6IFRhYmxlUm93W10ge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fcm93cyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDcmVhdGVkUm93cygpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICB0aGlzLl9yb3dzID0gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDb2x1bW5zID0gKHN1cnZleTogU3VydmV5TW9kZWwpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCkubWFwKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAocXVlc3Rpb24udGl0bGUgfHwgXCJcIikudHJpbSgpIHx8IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRhdGFUeXBlOlxuICAgICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJmaWxlXCJcbiAgICAgICAgICAgID8gQ29sdW1uRGF0YVR5cGUuVGV4dFxuICAgICAgICAgICAgOiBDb2x1bW5EYXRhVHlwZS5GaWxlTGluayxcbiAgICAgICAgaXNWaXNpYmxlOiBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiLFxuICAgICAgICBpc1B1YmxpYzogdHJ1ZSxcbiAgICAgICAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgaXNDb2x1bW5WaXNpYmxlKGNvbHVtbjogSVRhYmxlQ29sdW1uKSB7XG4gICAgaWYgKGNvbHVtbi5sb2NhdGlvbiAhPT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4pIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gY29sdW1uLmlzVmlzaWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sdW1ucygpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX2NvbHVtbnMpO1xuICB9XG5cbiAgcHVibGljIHNldCBjb2x1bW5zKGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLnJlZnJlc2godHJ1ZSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRUYWJsZURhdGEoZGF0YTogQXJyYXk8YW55Pikge1xuICAgIHRoaXMudGFibGVEYXRhID0gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgdmFyIGRhdGFJdGVtOiBhbnkgPSB7fTtcbiAgICAgIHRoaXMuc3VydmV5LmRhdGEgPSBpdGVtO1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IGl0ZW1bY29sdW1uLm5hbWVdO1xuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uZGlzcGxheVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFJdGVtW2NvbHVtbi5uYW1lXSA9XG4gICAgICAgICAgdHlwZW9mIGRpc3BsYXlWYWx1ZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkaXNwbGF5VmFsdWVcbiAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkoZGlzcGxheVZhbHVlKSB8fCBcIlwiO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGF0YUl0ZW07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZUNvbHVtbihmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcbiAgICB2YXIgZGVsZXRlZENvbHVtbnMgPSB0aGlzLl9jb2x1bW5zLnNwbGljZShmcm9tLCAxKTtcbiAgICB0aGlzLl9jb2x1bW5zLnNwbGljZSh0bywgMCwgZGVsZXRlZENvbHVtbnNbMF0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgdGhpcy5nZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZSkubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgfSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lOiBzdHJpbmcpOiBJVGFibGVDb2x1bW4ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF07XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcsIGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKTtcbiAgICBjb2x1bW4uaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgIHRoaXMub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuZmlyZSh0aGlzLCB7XG4gICAgICBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLFxuICAgICAgY29sdW1uVmlzaWJpbGl0eTogaXNWaXNpYmxlLFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5XaWR0aChjb2x1bW5OYW1lOiBzdHJpbmcsIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5nZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZSk7XG4gICAgY29sdW1uLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVJvdyhyb3c6IFRhYmxlUm93KTogdm9pZCB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fcm93cy5pbmRleE9mKHJvdyk7XG4gICAgdGhpcy5fcm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMub25Sb3dSZW1vdmVkLmZpcmUodGhpcywgeyByb3c6IHJvdyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgbG9jYWxlIG9mIHRoZSB0YWJsZS5cbiAgICogSWYgbG9jYWxlcyBtb3JlIHRoYW4gb25lLCB0aGUgbGFuZ3VhZ2Ugc2VsZWN0aW9uIGRyb3Bkb3duIHdpbGwgYmUgYWRkZWQgaW4gdGhlIHRvb2xiYXJcbiAgICovXG4gIHB1YmxpYyBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGxvY2FsZSBmb3IgdGFibGUuXG4gICAqL1xuICBwdWJsaWMgc2V0IGxvY2FsZShuZXdMb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMuc3VydmV5LmxvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICB0aGlzLnJlZnJlc2godHJ1ZSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldExvY2FsZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLnN1cnZleS5nZXRVc2VkTG9jYWxlcygpKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLmdldFBhZ2VOdW1iZXIoKTtcbiAgICAgIGlmIChoYXJkKSB7XG4gICAgICAgIHRoaXMuaW5pdFRhYmxlRGF0YSh0aGlzLmRhdGEpO1xuICAgICAgfVxuICAgICAgdmFyIHRhcmdldE5vZGUgPSB0aGlzLnJlbmRlclJlc3VsdDtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5yZW5kZXIodGFyZ2V0Tm9kZSk7XG4gICAgICB0aGlzLnNldFBhZ2VTaXplKHRoaXMuY3VycmVudFBhZ2VTaXplKTtcbiAgICAgIHRoaXMuc2V0UGFnZU51bWJlcih0aGlzLmN1cnJlbnRQYWdlTnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNsZWFyQ3JlYXRlZFJvd3MoKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMuZGVzdHJveSgpO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVuZGVyZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5yZW5kZXJSZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogVml6dWFsaXphdGlvbiBwYW5lbCBzdGF0ZSBnZXR0ZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IElUYWJsZVN0YXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9jYWxlOiBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSxcbiAgICAgIGVsZW1lbnRzOiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyksXG4gICAgICBwYWdlU2l6ZTogdGhpcy5jdXJyZW50UGFnZVNpemUsXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVml6dWFsaXphdGlvbiBwYW5lbCBzdGF0ZSBzZXR0ZXIuXG4gICAqL1xuICBwdWJsaWMgc2V0IHN0YXRlKG5ld1N0YXRlOiBJVGFibGVTdGF0ZSkge1xuICAgIGlmICghbmV3U3RhdGUpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUubG9jYWxlICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSBuZXdTdGF0ZS5sb2NhbGU7XG5cbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlLmVsZW1lbnRzICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgdGhpcy5fY29sdW1ucyA9IG5ld1N0YXRlLmVsZW1lbnRzO1xuXG4gICAgaWYgKHR5cGVvZiBuZXdTdGF0ZS5wYWdlU2l6ZSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHRoaXMuY3VycmVudFBhZ2VTaXplID0gbmV3U3RhdGUucGFnZVNpemU7XG4gIH1cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGFibGUgc3RhdGUgY2hhbmdlZC5cbiAgICovXG4gIHB1YmxpYyBvblN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4oKTtcblxuICAvKipcbiAgICogR2V0cyB0YWJsZSBwZXJtaXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKTogSVBlcm1pc3Npb25bXSB7XG4gICAgcmV0dXJuIDxhbnk+dGhpcy5fY29sdW1ucy5tYXAoKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgaXNQdWJsaWM6IGNvbHVtbi5pc1B1YmxpYyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGFibGUgcGVybWlzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgc2V0IHBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBJUGVybWlzc2lvbltdKSB7XG4gICAgY29uc3QgdXBkYXRlZEVsZW1lbnRzID0gdGhpcy5fY29sdW1ucy5tYXAoKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtaXNzaW9uLm5hbWUgPT09IGNvbHVtbi5uYW1lKVxuICAgICAgICAgIGNvbHVtbi5pc1B1YmxpYyA9IHBlcm1pc3Npb24uaXNQdWJsaWM7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHsgLi4uY29sdW1uIH07XG4gICAgfSk7XG4gICAgdGhpcy5fY29sdW1ucyA9IFtdLmNvbmNhdCh1cGRhdGVkRWxlbWVudHMpO1xuICAgIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJlxuICAgICAgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gcGVybWlzc2lvbnMgY2hhbmdlZFxuICAgKi9cbiAgcHVibGljIG9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2s6IGFueTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhYmxlUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcbiAgICBwcm90ZWN0ZWQgZXh0ZW5zaW9uc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKHRhYmxlLCB0aGlzLCBkZXRhaWxzQ29udGFpbmVyKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRhYmxlKTtcbiAgICB0YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKHRoaXMub25Db2x1bW5Mb2NhdGlvbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cbiAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gIHB1YmxpYyBleHRlbnNpb25zOiBUYWJsZUV4dGVuc2lvbnM7XG4gIHByaXZhdGUgZGV0YWlsZWRSb3dDbGFzcyA9IFwic2EtdGFibGVfX2RldGFpbC1yb3dcIjtcbiAgcHJpdmF0ZSBpc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xuICBwdWJsaWMgb25Ub2dnbGVEZXRhaWxzOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcm93J3MgaHRtbCBlbGVtZW50XG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogUmV0dXJucyBkYXRhLCB3aGljaCBpcyBkaXNwbGF5ZWQgaW4gdGhlIHJvdy5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRSb3dEYXRhKCk6IGFueTtcblxuICAvKipcbiAgICogUmV0dXJucyBwb3NpdGlvbiBvZiByb3cgaW4gdGhlIHRhYmxlJ3MgZGF0YS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXREYXRhUG9zaXRpb24oKTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBpc1NlbGVjdGVkOiBib29sZWFuO1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgdGhpcy5leHRlbnNpb25zLnJlbmRlcih0aGlzLmV4dGVuc2lvbnNDb250YWluZXIsIFwicm93XCIsIHsgcm93OiB0aGlzIH0pO1xuICB9XG5cbiAgcHVibGljIG9wZW5EZXRhaWxzKCkge1xuICAgIHRoaXMuZGV0YWlscy5vcGVuKCk7XG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5kZXRhaWxlZFJvd0NsYXNzO1xuICAgIHRoaXMub25Ub2dnbGVEZXRhaWxzLmZpcmUodGhpcywgeyBpc0V4cGFuZGVkOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGV0YWlscygpIHtcbiAgICB0aGlzLmRldGFpbHMuY2xvc2UoKTtcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGV0YWlsZWRSb3dDbGFzcyk7XG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEZXRhaWxzKCkge1xuICAgIGlmICh0aGlzLmlzRGV0YWlsc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLmNsb3NlRGV0YWlscygpO1xuICAgIH0gZWxzZSB0aGlzLm9wZW5EZXRhaWxzKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNlbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSAhdGhpcy5pc1NlbGVjdGVkO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLnJlbW92ZVJvdyh0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Db2x1bW5Mb2NhdGlvbkNoYW5nZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICB0aGlzLmNsb3NlRGV0YWlscygpO1xuICB9O1xuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLnJlbW92ZShcbiAgICAgIHRoaXMub25Db2x1bW5Mb2NhdGlvbkNoYW5nZWRDYWxsYmFja1xuICAgICk7XG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgOiBkZXNjLFxuICAgIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZVxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbiIsImV4cG9ydCBjbGFzcyBEb2N1bWVudEhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTZWxlY3RvcihcclxuICAgIG9wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+LFxyXG4gICAgaXNTZWxlY3RlZDogKG9wdGlvbjogeyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkgPT4gYm9vbGVhbixcclxuICAgIGhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWRcclxuICApIHtcclxuICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VsZWN0V3JhcHBlci5jbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uX19zZWxlY3Qtd3JhcHBlclwiO1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcInNhLXF1ZXN0aW9uX19zZWxlY3RcIjtcclxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIGxldCBvcHRpb25FbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XHJcbiAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcclxuICAgICAgICB0ZXh0OiBvcHRpb24udGV4dCxcclxuICAgICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZChvcHRpb24pLFxyXG4gICAgICB9KTtcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxlY3Qub25jaGFuZ2UgPSBoYW5kbGVyO1xyXG4gICAgc2VsZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgcmV0dXJuIHNlbGVjdFdyYXBwZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJ1dHRvbihcclxuICAgIGhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWQsXHJcbiAgICB0ZXh0ID0gXCJcIixcclxuICAgIGNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uXCJcclxuICApIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIGNsYXNzTmFtZSwge1xyXG4gICAgICBpbm5lclRleHQ6IHRleHQsXHJcbiAgICAgIG9uY2xpY2s6IGhhbmRsZXIsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICB0YWdOYW1lOiBzdHJpbmcsXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyA9IFwiXCIsXHJcbiAgICBhdHRycz86IGFueVxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBpZiAoISFhdHRycykge1xyXG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgKDxhbnk+ZWwpW2tleV0gPSBhdHRyc1trZXldO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnRWxlbWVudChwYXRoOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2Z0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJzdmdcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJ1c2VcIlxyXG4gICAgKTtcclxuICAgIHVzZUVsZW0uc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgXCIjc2Etc3ZnLVwiICsgcGF0aFxyXG4gICAgKTtcclxuICAgIHN2Z0VsZW0uYXBwZW5kQ2hpbGQodXNlRWxlbSk7XHJcbiAgICByZXR1cm4gc3ZnRWxlbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnQnV0dG9uKHBhdGg6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IDxIVE1MQnV0dG9uRWxlbWVudD4oXHJcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiKVxyXG4gICAgKTtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KHBhdGgpKTtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN2Z1RvZ2dsZUJ1dHRvbihcclxuICAgIHN2Z1BhdGgxOiBzdHJpbmcsXHJcbiAgICBzdlBwYXRoMjogc3RyaW5nLFxyXG4gICAgdGV4dDE6IHN0cmluZyxcclxuICAgIHRleHQyOiBzdHJpbmcsXHJcbiAgICBoYW5kbGVyMTogKGU6IGFueSkgPT4gYW55LFxyXG4gICAgaGFuZGxlcjI6IChlOiBhbnkpID0+IGFueSxcclxuICAgIHN0YXRlID0gXCJmaXJzdFwiLFxyXG4gICAgY2xhc3NOYW1lID0gXCJzYS10b29sYmFyX19idXR0b24gc2EtdG9vbGJhcl9fc3ZnLWJ1dHRvblwiXHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnMSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoc3ZnUGF0aDEpO1xyXG4gICAgY29uc3Qgc3ZnMiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoc3ZQcGF0aDIpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBjbGFzc05hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9IChlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHN0YXRlID09PSBcImZpcnN0XCIpIHtcclxuICAgICAgICBzdGF0ZSA9IFwic2Vjb25kXCI7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gdGV4dDI7XHJcbiAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKHN2ZzEpO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzdmcyKTtcclxuICAgICAgICBoYW5kbGVyMihlKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJzZWNvbmRcIikge1xyXG4gICAgICAgIHN0YXRlID0gXCJmaXJzdFwiO1xyXG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IHRleHQxO1xyXG4gICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChzdmcyKTtcclxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnMSk7XHJcbiAgICAgICAgaGFuZGxlcjEoZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHN0YXRlID09PSBcImZpcnN0XCIpIHtcclxuICAgICAgYnV0dG9uLnRpdGxlID0gdGV4dDE7XHJcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzdmcxKTtcclxuICAgIH0gZWxzZSBpZiAoKHN0YXRlID0gXCJzZWNvbmRcIikpIHtcclxuICAgICAgYnV0dG9uLnRpdGxlID0gdGV4dDI7XHJcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzdmcyKTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ub25jbGljayA9IHRvZ2dsZTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVJbnB1dChcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXIgPSBcIlwiLFxyXG4gICAgZGVmYXVsdFZhbHVlID0gXCJcIlxyXG4gICk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gPEhUTUxJbnB1dEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJpbnB1dFwiLFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgIHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIG9wdGlvbnMgPSB7XHJcbiAgcnVubmluZ0luQnJvd3NlcjogdHlwZW9mIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEb21SZW5kZXJpbmcoKSB7XHJcbiAgcmV0dXJuIG9wdGlvbnMucnVubmluZ0luQnJvd3NlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbW1lcmNpYWxMaWNlbnNlTGluaygpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2EtY29tbWVyY2lhbFwiKTtcclxuICBjb25zdCBsaW5rID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgXCJzYS1jb21tZXJjaWFsX190ZXh0XCIsIHtcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuc3VydmV5anMuaW8vQnV5XCIsXHJcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgY29udGFpbmVyU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiXCIpO1xyXG4gIGNvbnN0IGljb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwibm9uY29tbWVyY2lhbFwiKTtcclxuICBjb25zdCB0ZXh0U3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICBcInNwYW5cIixcclxuICAgIFwic2EtY29tbWVyY2lhbF9fcHJvZHVjdFwiLFxyXG4gICAge1xyXG4gICAgICBpbm5lckhUTUw6IGBQbGVhc2UgcHVyY2hhc2UgYSBTdXJ2ZXlKUyBBbmFseXRpY3MgZGV2ZWxvcGVyIGxpY2Vuc2VcclxuICAgICAgICB0b1xyXG4gICAgICAgIHVzZSBpdCBpbiB5b3VyXHJcbiAgICAgICAgYXBwLmAsXHJcbiAgICB9XHJcbiAgKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGluaykuYXBwZW5kQ2hpbGQoY29udGFpbmVyU3Bhbik7XHJcbiAgY29udGFpbmVyU3Bhbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICBjb250YWluZXJTcGFuLmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyB6aXBBcnJheXMoZmlyc3Q6IGFueVtdLCBzZWNvbmQ6IGFueVtdKTogYW55W11bXSB7XHJcbiAgICBsZXQgemlwQXJyYXk6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKGZpcnN0Lmxlbmd0aCwgc2Vjb25kLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICB6aXBBcnJheVtpXSA9IFtmaXJzdFtpXSwgc2Vjb25kW2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiB6aXBBcnJheTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW56aXBBcnJheXMoXHJcbiAgICB6aXBBcnJheTogYW55W11bXVxyXG4gICk6IHsgZmlyc3Q6IGFueVtdOyBzZWNvbmQ6IGFueVtdIH0ge1xyXG4gICAgbGV0IHR3b0FycmF5czogYW55ID0geyBmaXJzdDogW10sIHNlY29uZDogW10gfTtcclxuICAgIHppcEFycmF5LmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgIHR3b0FycmF5cy5maXJzdFtpXSA9IHZhbHVlWzBdO1xyXG4gICAgICB0d29BcnJheXMuc2Vjb25kW2ldID0gdmFsdWVbMV07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0d29BcnJheXM7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgc29ydERpY3Rpb25hcnkoXHJcbiAgICBrZXlzOiBhbnlbXSxcclxuICAgIHZhbHVlczogYW55W10sXHJcbiAgICBkZXNjOiBib29sZWFuXHJcbiAgKTogeyBrZXlzOiBhbnlbXTsgdmFsdWVzOiBhbnlbXSB9IHtcclxuICAgIGxldCBkaWN0aW9uYXJ5ID0gdGhpcy56aXBBcnJheXMoa2V5cywgdmFsdWVzKTtcclxuICAgIGxldCBjb21wYXJhdG9yID0gKGE6IGFueVtdLCBiOiBhbnlbXSwgYXNjOiBib29sZWFuID0gdHJ1ZSkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYVsxXSA8IGJbMV0gPyAxIDogYVsxXSA9PSBiWzFdID8gMCA6IC0xO1xyXG4gICAgICByZXR1cm4gYXNjID8gcmVzdWx0IDogcmVzdWx0ICogLTE7XHJcbiAgICB9O1xyXG4gICAgZGljdGlvbmFyeS5zb3J0KChhOiBhbnlbXSwgYjogYW55W10pID0+IHtcclxuICAgICAgcmV0dXJuIGRlc2MgPyBjb21wYXJhdG9yKGEsIGIsIGZhbHNlKSA6IGNvbXBhcmF0b3IoYSwgYik7XHJcbiAgICB9KTtcclxuICAgIGxldCBrZXlzQW5kVmFsdWVzID0gdGhpcy51bnppcEFycmF5cyhkaWN0aW9uYXJ5KTtcclxuICAgIHJldHVybiB7IGtleXM6IGtleXNBbmRWYWx1ZXMuZmlyc3QsIHZhbHVlczoga2V5c0FuZFZhbHVlcy5zZWNvbmQgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9QZXJjZW50YWdlKHZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=