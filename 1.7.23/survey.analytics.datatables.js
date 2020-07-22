/*!
 * surveyjs - SurveyJS Analytics library v1.7.23
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
            var targetNode = this.renderResult;
            this.destroy();
            this.render(targetNode);
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2VuZ2xpc2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mYXJzaS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2RhdGF0YWJsZXMuc2Nzcz85M2U1Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYmxlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdG9vbHMvY29sdW1udG9vbHMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy90b29scy9yb3d0b29scy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3Rvb2xzL3RhYmxldG9vbHMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWNvcmVcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXktY29yZVwiLFwiYW1kXCI6XCJzdXJ2ZXktY29yZVwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsNENBQTRDLCt4RTs7Ozs7Ozs7Ozs7O0FDQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFFdkMsY0FBYztBQUNpQjtBQUNDO0FBRUs7Ozs7Ozs7Ozs7Ozs7QUNOckM7QUFBQTtBQUFBLG9EQUFvRDtBQUNwRCx3REFBd0Q7QUFFakQsSUFBSSxjQUFjLEdBQUc7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsYUFBYSxFQUFF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USxFQUFFLENBQVEsRUFBRSxHQUFtQjtZQUFuQixnQ0FBbUI7WUFDdkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7UUFDRixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUSxFQUFFLENBQVE7WUFDakMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0lBRWEsdUJBQVksR0FBMUIsVUFBMkIsS0FBYSxFQUFFLFFBQWdCO1FBQ3hELE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUM5SEQseUQiLCJmaWxlIjoic3VydmV5LmFuYWx5dGljcy5kYXRhdGFibGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlBbmFseXRpY3NEYXRhdGFibGVzXCIsIFtcInN1cnZleS1jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUFuYWx5dGljc0RhdGF0YWJsZXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5QW5hbHl0aWNzRGF0YXRhYmxlc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlN1cnZleVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1kZXRhaWxcXFwiPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI3LjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMTMuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1kcmFnXFxcIj48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMTMgNWwtMSAxIDEgMUg5VjNsMSAxIDEtMS0zLTMtMyAzIDEgMSAxLTF2NEgzbDEtMS0xLTEtMyAzIDMgMyAxLTEtMS0xaDR2NGwtMS0xLTEgMSAzIDMgMy0zLTEtMS0xIDFWOWg0bC0xIDEgMSAxIDMtM3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1oaWRlXFxcIj48cGF0aCBjbGFzcz1cXFwic3QxXFxcIiBkPVxcXCJNMTIuNzkgNC4yTDE2IDFsLTEtMS0zLjMyIDMuMzJDMTAuNTcgMi41NSA5LjMyIDIgOCAyIDMuNjMgMiAwIDcuOTcgMCA3Ljk3czEuMjcgMi4xIDMuMjEgMy44MmwtMy4yMyAzLjIzLjk4Ljk4IDMuMzUtMy4zNEM1LjQxIDEzLjQ0IDYuNjcgMTQgOCAxNGM0LjM3IDAgOC02IDgtNnMtMS4yNy0yLjA5LTMuMjEtMy44ek0yIDcuOTdjMS4wNy0xLjQ3IDMuNjEtNCA2LTQgLjggMCAxLjYuMjcgMi4zNS42OGwtLjc4Ljc4Yy0uNDYtLjI5LS45OS0uNDYtMS41Ny0uNDYtMS42NiAwLTMgMS4zNC0zIDMgMCAuNTguMTcgMS4xMS40NiAxLjU3bC0uOTcuOTdBMTMuMzggMTMuMzggMCAwIDEgMiA3Ljk3em02IDRjLS44IDAtMS41OS0uMjctMi4zMy0uNjdsLjc4LS43N2MuNDUuMjcuOTguNDQgMS41NS40NCAxLjY2IDAgMy0xLjM0IDMtMyAwLS41Ny0uMTctMS4wOS0uNDQtMS41NWwuOTgtLjk4YzEuMTEuODcgMi4wMSAxLjkxIDIuNDYgMi41Mi0xLjA3IDEuNDgtMy42MSA0LjAxLTYgNC4wMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tYWtlcHJpdmF0ZVxcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiOFxcXCIgY3k9XFxcIjRcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk04IDhjLTMuMzEgMC02IDIuNzMtNiA0LjY3UzUuMjcgMTUgOCAxNXM2LS40IDYtMi4zM1MxMS4zMSA4IDggOHpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tYWtlcHVibGljXFxcIj48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI2XFxcIiBjeT1cXFwiNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTEwIDVjMCAuMzQtLjA2LjY3LS4xNC45OS4wNSAwIC4wOS4wMS4xNC4wMSAxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtM0M4Ljk3IDAgOC4wNy41MiA3LjUzIDEuMyA4Ljk4IDEuOTEgMTAgMy4zMyAxMCA1ek02IDljLTMuMzEgMC02IDIuNzMtNiA0LjY3UzMuMjcgMTYgNiAxNnM2LS40IDYtMi4zM1M5LjMxIDkgNiA5ek0xMCA3Yy0uMTkgMC0uMzguMDEtLjU3LjAzYTQuMTQgNC4xNCAwIDAgMS0xLjM3IDEuMzljMyAuODMgNS4yMyAzLjMxIDUuNDIgNS4yOCAxLjQ0LS4zMSAyLjUyLS45MiAyLjUyLTIuMDNDMTYgOS43NCAxMy4zMSA3IDEwIDd6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbW92ZXRvZGV0YWlsc1xcXCI+PGNpcmNsZSBjbGFzcz1cXFwic3QwXFxcIiBjeD1cXFwiMS41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVxcXCJzdDBcXFwiIGN4PVxcXCI3LjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XFxcInN0MFxcXCIgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0xMiAxaDN2OWgtM3pNMi4wMiA3LjAyTDEgNiAwIDdsMyAzIDMtMy0xLTEtLjk0Ljk0QzQuMzMgNC43MyA2LjIxIDMgOC41IDNjLjE3IDAgLjMzLjAzLjUuMDVWMS4wM0M4LjgzIDEuMDEgOC42NyAxIDguNSAxIDUuMDggMSAyLjI3IDMuNjYgMi4wMiA3LjAyelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLXNvcnRpbmdcXFwiPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk04IDNsMiAyIDEtMS0zLTMtMyAzIDEgMXpNOCAxM2wtMi0yLTEgMSAzIDMgMy0zLTEtMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48L3N2Zz5cIjsiLCJleHBvcnQgKiBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG4vL2xvY2FsaXphdGlvblxuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZhcnNpXCI7XG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZnJlbmNoXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuLi90YWJsZXMvZGF0YXRhYmxlc1wiO1xuIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuLy9pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIGVuZ2xpc2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0cyBpbiB0YWJsZVwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhY2tlZCBCYXJcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwiSGlkZVwiLFxuICBzaG93QnV0dG9uOiBcIlNob3dcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHRcIiwgXG4gIGFzY09yZGVyOiBcIkFzY2VuZGluZ1wiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJPdGhlciBpdGVtcyBhbmQgY29tbWVudHNcIlxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vbG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcIkVuZ2xpc2hcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZmFyc2lTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCLar9ix2YjZhyDYqNmG2K/bjCDYqNinXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwi2K3YsNmBINqv2LHZiNmHXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCLYp9mG2KrYrtin2KhcIixcbiAgaGlkZUNvbHVtbjogXCLZhdiu2YHbjCDaqdix2K/ZhiDYs9iq2YjZhlwiLFxuICBzaG93Q29sdW1uOiBcItmG2YXYp9uM2LQg2LPYqtmI2YZcIixcbiAgbW92ZVRvRGV0YWlsOiBcItin2YbYqtmC2KfZhCDYqNmHINis2LLYptuM2KfYqlwiLFxuICBzaG93QXNDb2x1bW46IFwi2YbZhdin24zYtCDYqNmHINi52YbZiNin2YYg2LPYqtmI2YZcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcItmF2KrZiNmGINiv2LEg2KzYr9mI2YRcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwi2KfYqNixINqp2YTZhdin2KpcIixcbiAgY2hhcnRUeXBlX2JhcjogXCLZhduM2YTZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwi2K/Yp9io2LHZhyDYp9uMKHBpZSlcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwi2b7Ysdin2qnZhtiv2q/bjChTY2F0dGVyKVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi2LnZgtix2KjZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwi2YXYrtmB24xcIixcbiAgcmVzZXRGaWx0ZXI6IFwi2KjYp9iy2YbYtNin2YbbjCDZgduM2YTYqtix2YfYp1wiLFxuICBjbGVhckJ1dHRvbjogXCLZvtin2qkg2qnYsdiv2YZcIixcbiAgYWRkRWxlbWVudDogXCLYp9mG2KrYrtin2Kgg2LPZiNin2YQg2KjYsdin24wg2YbZhdin24zYtC4uLlwiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZhXCJdID0gZmFyc2lTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZmFcIl0gPSBcIkZhcnNpKFBlcnNpYW4pXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBmcmVuY2hTdHJpbmdzID0ge1xyXG4gICAgZ3JvdXBCdXR0b246IFwiR3JvdXBlclwiLFxyXG4gICAgdW5ncm91cEJ1dHRvbjogXCJEaXNzb2NpZXJcIixcclxuICAgIHNlbGVjdEJ1dHRvbjogXCJTw6lsZWN0aW9ubmVyXCIsXHJcbiAgICBoaWRlQ29sdW1uOiBcIk1hc3F1ZXIgY29sb25uZVwiLFxyXG4gICAgc2hvd0NvbHVtbjogXCJBZmZpY2hlciBjb2xvbm5lXCIsXHJcbiAgICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwcml2w6lcIixcclxuICAgIG1ha2VQdWJsaWNDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHVibGljXCIsXHJcbiAgICBtb3ZlVG9EZXRhaWw6IFwiRMOpcGxhY2VyIHZlcnMgZMOpdGFpbHNcIixcclxuICAgIHNob3dBc0NvbHVtbjogXCJBZmZpY2hlciBlbiBjb2xvbm5lXCIsXHJcbiAgICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dGVzIGVuIHRhYmxlXCIsXHJcbiAgICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJOdWFnZXMgZGUgbW90c1wiLFxyXG4gICAgY2hhcnRUeXBlX2JhcjogXCJCYXJyZXNcIixcclxuICAgIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIkJhcnJlcyBlbXBpbMOpZXNcIixcclxuICAgIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJBbm5lYXVcIixcclxuICAgIGNoYXJ0VHlwZV9waWU6IFwiU2VjdGV1cnNcIixcclxuICAgIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIk51YWdlcyBkZSBwb2ludHNcIixcclxuICAgIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxyXG4gICAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXNcIixcclxuICAgIGhpZGVCdXR0b246IFwiTWFzcXVlclwiLFxyXG4gICAgcmVzZXRGaWx0ZXI6IFwiUmFmcmFpY2hpciBGaWx0cmVzXCIsXHJcbiAgICBjbGVhckJ1dHRvbjogXCJSYWZyYWljaGlyXCIsXHJcbiAgICBhZGRFbGVtZW50OiBcIkNob2lzaXIgbGEgcXVlc3Rpb24gw6AgYWZmaWNoZXIuLi5cIixcclxuICAgIGRlZmF1bHRPcmRlcjogXCJEZWZhdXRcIixcclxuICAgIGFzY09yZGVyOiBcIkFzY2VuZGFudFwiLFxyXG4gICAgZGVzY09yZGVyOiBcIkRlc2NlbmRhbnRcIixcclxuICAgIHNob3dNaW5vckNvbHVtbnM6IFwiQWZmaWNoZXIgbGVzIGNvbG9ubmVzIG1pbmV1cmVzXCJcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hTdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmclwiXSA9IFwiRnJlbmNoXCI7IiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xuXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxuICBkZWZhdWx0TG9jYWxlVmFsdWU6IFwiZW5cIixcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgc3VwcG9ydGVkTG9jYWxlczogPEFycmF5PGFueT4+W10sXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcbiAgICAgID8gXCJcIlxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGN1cnJlbnRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgZGVmYXVsdExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgZ2V0TG9jYWxlczogZnVuY3Rpb24oKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZExvY2FsZXMgJiYgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzLnNvcnQoKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcImVuZ2xpc2hcIjtcbiIsImV4cG9ydCBlbnVtIENvbHVtblZpc2liaWxpdHkge1xuICBWaXNpYmxlLFxuICBJbnZpc2libGUsXG4gIFB1YmxpY0ludmlzaWJsZSxcbn1cbmV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24ge1xuICBDb2x1bW4sXG4gIFJvdyxcbn1cbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHtcbiAgVGV4dCxcbiAgRmlsZUxpbmssXG4gIEltYWdlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xuICB2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5O1xuICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vdGFibGVcIjtcbmltcG9ydCB7IFN1cnZleU1vZGVsLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uLCBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmltcG9ydCBcIi4vZGF0YXRhYmxlcy5zY3NzXCI7XG5pbXBvcnQgeyBUYWJsZVJvdywgRGF0YXRhYmxlc1JvdyB9IGZyb20gXCIuL3Rvb2xzL3Jvd3Rvb2xzXCI7XG5pbXBvcnQgeyBDb2x1bW5Ub29scyB9IGZyb20gXCIuL3Rvb2xzL2NvbHVtbnRvb2xzXCI7XG5pbXBvcnQgeyBUYWJsZVRvb2xzIH0gZnJvbSBcIi4vdG9vbHMvdGFibGV0b29sc1wiO1xuXG5pZiAoISFkb2N1bWVudCkge1xuICB2YXIgc3ZnVGVtcGxhdGUgPSByZXF1aXJlKFwiaHRtbC1sb2FkZXI/aW50ZXJwb2xhdGUhdmFsLWxvYWRlciEuLi9zdmdidW5kbGUuaHRtbFwiKTtcbiAgdmFyIHRlbXBsYXRlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcGxhdGVIb2xkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0ZW1wbGF0ZUhvbGRlci5pbm5lckhUTUwgPSBzdmdUZW1wbGF0ZTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUhvbGRlcik7XG59XG5cbnZhciBqUXVlcnkgPSAoPGFueT53aW5kb3cpW1wialF1ZXJ5XCJdO1xuXG5pbnRlcmZhY2UgRGF0YVRhYmxlc09wdGlvbnMge1xuICBidXR0b25zOiBib29sZWFuIHwgc3RyaW5nW10gfCBhbnlbXSB8IGFueTtcblxuICBkb206IHN0cmluZztcblxuICBvcmRlckZpeGVkOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHwgQXJyYXk8QXJyYXk8bnVtYmVyIHwgc3RyaW5nPj4gfCBvYmplY3Q7XG5cbiAgcm93R3JvdXA6IGJvb2xlYW4gfCBhbnk7XG5cbiAgaGVhZGVyQ2FsbGJhY2s6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZXMgZXh0ZW5kcyBUYWJsZSB7XG4gIHByaXZhdGUgZGF0YXRhYmxlQXBpOiBhbnk7XG5cbiAgcHVibGljIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgaXMgZmlyZWQgY29sdW1ucyBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGNoYW5nZWQuXG4gICAqIDxici8+IHNlbmRlciB0aGUgZGF0YXRhYmxlcyBhZGFwdGVyXG4gICAqIDxici8+IG9wdGlvbnMuc3VydmV5IGN1cnJlbnQgc3VydmV5XG4gICAqIEBzZWUgZ2V0Q29sdW1uc1xuICAgKi9cbiAgcHVibGljIGNvbHVtbnNDaGFuZ2VkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBEYXRhVGFibGVzLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBEYXRhVGFibGVzLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEpRdWVyeSgkOiBhbnkpIHtcbiAgICBqUXVlcnkgPSAkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcbiAgICBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIG9wdGlvbnM6IERhdGFUYWJsZXNPcHRpb25zLFxuICAgIF9jb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+ID0gW10sXG4gICAgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgc3VwZXIoc3VydmV5LCBkYXRhLCBvcHRpb25zLCBfY29sdW1ucywgaXNUcnVzdGVkQWNjZXNzKTtcblxuICAgIGlmIChfY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1ucyhzdXJ2ZXkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcblxuICBwcm90ZWN0ZWQgb25Db2x1bW5zQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmNvbHVtbnNDaGFuZ2VkLmZpcmUodGhpcywgeyBzdXJ2ZXk6IHRoaXMuc3VydmV5IH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cbiAgcHVibGljIHNldCBjb2x1bW5zKGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLnVwZGF0ZSh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgaWYgKGhhcmQpIHtcbiAgICAgICAgdGhpcy5pbml0VGFibGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5kYXRhdGFibGVBcGkucGFnZS5pbmZvKCkucGFnZTtcbiAgICAgIHZhciB0YXJnZXROb2RlID0gdGhpcy5yZW5kZXJSZXN1bHQ7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVuZGVyKHRhcmdldE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnJlbmRlclJlc3VsdDtcbiAgfVxuXG4gIGdyb3VwQnk6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBkZXN0cm95KCkge1xuICAgIC8vaWYoIXRoaXMudGFyZ2V0Tm9kZSkgcmV0dXJuO1xuICAgIGNvbnN0IHRhYmxlTm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0LmNoaWxkcmVuWzBdO1xuICAgIGlmIChqUXVlcnkuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKHRhYmxlTm9kZSkpIHtcbiAgICAgIGpRdWVyeSh0YWJsZU5vZGUpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhdGFibGVBcGkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eSkge1xuICAgIHN1cGVyLnNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZSwgdmlzaWJpbGl0eSk7XG4gICAgdmFyIGlzSW52aXNpYmxlID0gdmlzaWJpbGl0eSA9PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZTtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sdW1uTmFtZSArIFwiOm5hbWVcIikudmlzaWJsZSghaXNJbnZpc2libGUpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcbiAgICBzdXBlci5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBsb2NhdGlvbik7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKTtcbiAgICB2YXIgaXNDb2x1bW5Mb2NhdGlvbiA9IGxvY2F0aW9uID09IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uO1xuICAgIGNvbHVtbi52aXNpYmxlKGlzQ29sdW1uTG9jYXRpb24pO1xuICB9XG5cbiAgY3JlYXRlQWN0aW9uQ29udGFpbmVyKCkge1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19hY3Rpb24tY29udGFpbmVyXCI7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkuc2VhcmNoKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xuICAgIGlmIChjb2x1bW4uc2VhcmNoKCkgIT09IHZhbHVlKSB7XG4gICAgICBjb2x1bW4uc2VhcmNoKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xuICAgIGNvbHVtbi5vcmRlcihkaXJlY3Rpb24pLmRyYXcoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5wYWdlLmxlbih2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gIH1cblxuICByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGFyZ2V0Tm9kZS5jbGFzc05hbWUgKz0gXCIgc2EtdGFibGUgc2EtZGF0YXRhYmxlc1wiO1xuICAgIHRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHRhYmxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB2YXIgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xuICAgIHZhciBjb2x1bW5zRGF0YTogYW55ID0gY29sdW1ucy5tYXAoKGM6IGFueSkgPT4gYy5kYXRhKTtcbiAgICBjb25zdCBkdEJ1dHRvbkNsYXNzID1cbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1zbWFsbCBzYS10YWJsZV9fYnRuLS1ncmF5XCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoXG4gICAgICB0cnVlLFxuICAgICAge1xuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgeyBleHRlbmQ6IFwiY29weVwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgICB7IGV4dGVuZDogXCJjc3ZcIiwgY2xhc3NOYW1lOiBkdEJ1dHRvbkNsYXNzIH0sXG4gICAgICAgICAgeyBleHRlbmQ6IFwicHJpbnRcIiwgY2xhc3NOYW1lOiBkdEJ1dHRvbkNsYXNzIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGRvbTogJ0I8XCJzYS1kYXRhdGFibGVzX190b29sc1wiPnBydGlwJyxcbiAgICAgICAgLy8gb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgICAgcGFnZUxlbmd0aDogNSxcbiAgICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIGNvbFJlb3JkZXI6IHtcbiAgICAgICAgICBmaXhlZENvbHVtbnNMZWZ0OiAxLFxuICAgICAgICAgIHJlYWx0aW1lOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy9vcmRlckZpeGVkOiBbWzEsIFwiYXNjXCJdXSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICBzU2VhcmNoOiBcIiBcIixcbiAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcjogXCJTZWFyY2guLi5cIixcbiAgICAgICAgICBzTGVuZ3RoTWVudTogXCJTaG93IF9NRU5VXyBlbnRyaWVzXCIsXG4gICAgICAgICAgcGFnaW5hdGU6IHtcbiAgICAgICAgICAgIHByZXZpb3VzOiBcIiBcIixcbiAgICAgICAgICAgIG5leHQ6IFwiIFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdDogXCJhcGlcIixcbiAgICAgICAgaGVhZGVyQ2FsbGJhY2s6IChcbiAgICAgICAgICB0aGVhZDogYW55LFxuICAgICAgICAgIGRhdGE6IGFueSxcbiAgICAgICAgICBzdGFydDogYW55LFxuICAgICAgICAgIGVuZDogYW55LFxuICAgICAgICAgIGRpc3BsYXk6IGFueVxuICAgICAgICApID0+IHtcbiAgICAgICAgICB2YXIgZGF0YXRhYmxlQXBpID0galF1ZXJ5KHRhYmxlTm9kZSkuZGF0YVRhYmxlKCkuYXBpKCk7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIGpRdWVyeSh0aGVhZClcbiAgICAgICAgICAgIC5jaGlsZHJlbihcInRoXCIpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICAgICAgICB2YXIgJHRoTm9kZSA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgICAgICAgJHRoTm9kZS51bmJpbmQoXCJjbGljay5EVFwiKTtcbiAgICAgICAgICAgICAgaWYgKCEhY29sdW1uc0RhdGFbaW5kZXhdICYmICR0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBzZWxmLmNyZWF0ZUFjdGlvbkNvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIHZhciBjb2x1bW5Ub29scyA9IG5ldyBDb2x1bW5Ub29scyhcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgICAgICAgICBjb2x1bW5zRGF0YVtpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzZWxmLmlzVHJ1c3RlZEFjY2Vzc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkNvbHVtblRvb2xzQ3JlYXRlZC5maXJlKHRoaXMsIHsgdG9vbHM6IGNvbHVtblRvb2xzIH0pO1xuICAgICAgICAgICAgICAgIGNvbHVtblRvb2xzLnJlbmRlcigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICR0aE5vZGUucHJlcGVuZChjb250YWluZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgKTtcblxuICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcbiAgICB0YWJsZU5vZGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX190YWJsZSBkaXNwbGF5IHJlc3BvbnNpdmUgZGF0YVRhYmxlXCI7XG5cbiAgICBjb25zdCBkYXRhdGFibGVBcGlSZWYgPSAodGhpcy5kYXRhdGFibGVBcGkgPSBqUXVlcnkodGFibGVOb2RlKS5EYXRhVGFibGUoXG4gICAgICBvcHRpb25zXG4gICAgKSk7XG4gICAgdmFyIHRvb2xzQ29udGFpbmVyID0galF1ZXJ5KFwiZGl2LnNhLWRhdGF0YWJsZXNfX3Rvb2xzXCIpWzBdO1xuXG4gICAgdmFyIHRvb2xzID0gbmV3IFRhYmxlVG9vbHModG9vbHNDb250YWluZXIsIHRoaXMpO1xuICAgIHRoaXMub25UYWJsZVRvb2xzQ3JlYXRlZC5maXJlKHRoaXMsIHsgdG9vbHM6IHRvb2xzIH0pO1xuICAgIHRvb2xzLnJlbmRlcigpO1xuXG4gICAgZGF0YXRhYmxlQXBpUmVmLnBhZ2Uoc2VsZi5jdXJyZW50UGFnZU51bWJlcik7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkucm93R3JvdXAoKS5lbmFibGUoZmFsc2UpLmRyYXcoZmFsc2UpO1xuXG4gICAgZGF0YXRhYmxlQXBpUmVmLm9uKFxuICAgICAgXCJjb2x1bW4tcmVvcmRlclwiLFxuICAgICAgKGU6IGFueSwgc2V0dGluZ3M6IGFueSwgZGV0YWlsczogYW55KSA9PiB7XG4gICAgICAgIHZhciBkZWxldGVkQ29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGRldGFpbHMuZnJvbSAtIDEsIDEpO1xuICAgICAgICB0aGlzLl9jb2x1bW5zLnNwbGljZShkZXRhaWxzLnRvIC0gMSwgMCwgZGVsZXRlZENvbHVtbnNbMF0pO1xuICAgICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICAgIH1cbiAgICApO1xuICAgIGRhdGF0YWJsZUFwaVJlZlxuICAgICAgLnJvd3MoKVxuICAgICAgLmVxKDApXG4gICAgICAuZWFjaCgoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICB2YXIgcm93ID0gZGF0YXRhYmxlQXBpUmVmLnJvdyhpbmRleCk7XG4gICAgICAgIHZhciBkZXRhaWxzVHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHZhciBkZXRhaWxzVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGRldGFpbHNUZC5jbGFzc05hbWUgPSBcInNhLWRhdGF0YWJsZXNfX2RldGFpbHMtY29udGFpbmVyXCI7XG4gICAgICAgIGRldGFpbHNUci5hcHBlbmRDaGlsZChkZXRhaWxzVGQpO1xuICAgICAgICB2YXIgcm93RWxlbWVudCA9IHJvdy5ub2RlKCk7XG4gICAgICAgIHZhciBmaXJzdENlbGwgPSByb3cuY2VsbChyb3cuaW5kZXgoKSwgMCkubm9kZSgpO1xuICAgICAgICB2YXIgdGFibGVSb3cgPSBuZXcgRGF0YXRhYmxlc1JvdyhcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGZpcnN0Q2VsbCxcbiAgICAgICAgICBkZXRhaWxzVGQsXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIHRoaXMucmVuZGVyRGV0YWlsQWN0aW9uc1xuICAgICAgICApO1xuICAgICAgICB0YWJsZVJvdy5vblRvZ2dsZURldGFpbHMuYWRkKChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICBkZXRhaWxzVGQuY29sU3BhbiA9IHJvd0VsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAgICAgICByb3dFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICBkZXRhaWxzVHIsXG4gICAgICAgICAgICAgIHJvd0VsZW1lbnQubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGFpbHNUci5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uUm93Q3JlYXRlZC5maXJlKHRoaXMsIHsgcm93OiB0YWJsZVJvdyB9KTtcbiAgICAgICAgdGhpcy5fcm93cy5wdXNoKHRhYmxlUm93KTtcbiAgICAgICAgdGFibGVSb3cucmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICBkYXRhdGFibGVBcGlSZWYuZHJhdyhmYWxzZSk7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB0YXJnZXROb2RlO1xuICB9XG5cbiAgcHVibGljIGRvU3RhdGVTYXZlKCkge1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLnN0YXRlLnNhdmUoKTtcbiAgfVxuICBwdWJsaWMgc3RhdGVTYXZlQ2FsbGJhY2soc2V0dGluZ3M6IGFueSwgZGF0YTogYW55KSB7fVxuXG4gIHB1YmxpYyBkZXRhaWxCdXR0b25DcmVhdG9yczogQXJyYXk8KGNvbHVtbk5hbWU/OiBzdHJpbmcpID0+IEhUTUxFbGVtZW50PiA9IFtdO1xuXG4gIGdldENvbHVtbnMoKTogQXJyYXk8T2JqZWN0PiB7XG4gICAgY29uc3QgYXZhaWxhYmxlQ29sdW1ucyA9IHRoaXMuZ2V0QXZhaWxhYmxlQ29sdW1ucygpO1xuICAgIGNvbnN0IGNvbHVtbnM6IGFueSA9IGF2YWlsYWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShjb2x1bW4ubmFtZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgZGF0YTogY29sdW1uLm5hbWUsXG4gICAgICAgIHNUaXRsZTogKHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnRpdGxlKSB8fCBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgIHZpc2libGU6IGNvbHVtbi52aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSxcbiAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgbVJlbmRlcjogKF9kYXRhOiBvYmplY3QsIF90eXBlOiBzdHJpbmcsIHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcm93W2NvbHVtbi5uYW1lXTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGpRdWVyeShcIjxkaXY+XCIpLnRleHQodmFsdWUpLmh0bWwoKVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiXCIsXG4gICAgICB9LFxuICAgIF0uY29uY2F0KGNvbHVtbnMpO1xuICB9XG5cbiAgcHVibGljIG9uQ29sdW1uU2VsZWN0ZWQ6IChkYXRhTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zLmFkanVzdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgUXVlc3Rpb24sIEV2ZW50IH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uLCBDb2x1bW5EYXRhVHlwZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGV0YWlscywgVGFibGVSb3cgfSBmcm9tIFwiLi90b29scy9yb3d0b29sc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGUge1xuICBwcm90ZWN0ZWQgdGFibGVEYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IGFueSxcbiAgICBwcm90ZWN0ZWQgX2NvbHVtbnM6IEFycmF5PGFueT4gPSBbXSxcbiAgICBwcm90ZWN0ZWQgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgaWYgKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdFRhYmxlRGF0YShkYXRhKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3Jvd3M6IFRhYmxlUm93W10gPSBbXTtcblxuICBwcm90ZWN0ZWQgcm93RGV0YWlsczogeyBbcm93TmFtZTogc3RyaW5nXTogRGV0YWlscyB9O1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBvbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Sb3dDcmVhdGVkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uVGFibGVUb29sc0NyZWF0ZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Db2x1bW5Ub29sc0NyZWF0ZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgcmVuZGVyRGV0YWlsQWN0aW9uczogKFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcm93OiBUYWJsZVJvd1xuICApID0+IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IGFwcGx5RmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IHNvcnRCeUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBnZXRDcmVhdGVkUm93cygpOiBUYWJsZVJvd1tdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3Jvd3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpLm1hcCgocXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkYXRhVHlwZTpcbiAgICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiXG4gICAgICAgICAgICA/IENvbHVtbkRhdGFUeXBlLlRleHRcbiAgICAgICAgICAgIDogQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmssXG4gICAgICAgIHZpc2liaWxpdHk6XG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcImZpbGVcIlxuICAgICAgICAgICAgPyBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGVcbiAgICAgICAgICAgIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbixcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGlzVmlzaWJsZSA9ICh2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ICE9PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSkgfHxcbiAgICAgICghdGhpcy5pc1RydXN0ZWRBY2Nlc3MgJiYgdmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlKVxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QXZhaWxhYmxlQ29sdW1ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcihcbiAgICAgIChjb2x1bW4pID0+XG4gICAgICAgIGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4gJiZcbiAgICAgICAgdGhpcy5pc1Zpc2libGUoY29sdW1uLnZpc2liaWxpdHkpXG4gICAgKTtcbiAgfTtcblxuICBwcm90ZWN0ZWQgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gaXRlbVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi5kaXNwbGF5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID1cbiAgICAgICAgICB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgdGhpcy5jb2x1bW5zLmZpbHRlcihcbiAgICAgIChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lXG4gICAgKVswXS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmZpcmUodGhpcywgbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcsIHZpc2liaWxpdHk6IENvbHVtblZpc2liaWxpdHkpIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF07XG4gICAgY29sdW1uLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5O1xuICAgIHRoaXMub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuZmlyZSh0aGlzLCBudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZyk6IENvbHVtblZpc2liaWxpdHkge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgICByZXR1cm4gY29sdW1uLnZpc2liaWxpdHk7XG4gIH1cblxuICBwdWJsaWMgZG9TdGF0ZVNhdmUoKSB7XG4gICAgdGhpcy5zdGF0ZVNhdmVDYWxsYmFjayh7IGNvbHVtbnM6IHRoaXMuY29sdW1ucyB9LCB0aGlzLmRhdGEpO1xuICB9XG4gIHB1YmxpYyBzdGF0ZVNhdmVDYWxsYmFjayhzZXR0aW5nczogYW55LCBkYXRhOiBhbnkpIHt9XG59XG4iLCJpbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IENvbHVtblZpc2liaWxpdHksIFF1ZXN0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uVG9vbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgY29sdW1uTmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgaXNUcnVzdGVkQWNjZXNzOiBib29sZWFuXG4gICkge31cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURyYWdCdG4oKSk7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU29ydEJ0bigpKTtcbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIaWRlQnRuKCkpO1xuICAgIGlmICh0aGlzLmlzVHJ1c3RlZEFjY2VzcylcbiAgICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNvbHVtblByaXZhdGVCdXR0b24oKSk7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTW92ZVRvRGV0YWlsc0J0bigpKTtcbiAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGaWx0ZXJJbnB1dCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVEcmFnQnRuKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uIHNhLXRhYmxlX19kcmFnLWJ1dHRvblwiO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwiZHJhZ1wiKSk7XG4gICAgYnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU29ydEJ0bigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgY29uc3QgZGVzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImRlc2NPcmRlclwiKTtcbiAgICBjb25zdCBhc2NUaXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJhc2NPcmRlclwiKTtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwic29ydGluZ1wiKTtcbiAgICBidG4udGl0bGUgPSBcIlwiO1xuICAgIHZhciBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgIGJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJhc2NcIikge1xuICAgICAgICBidG4udGl0bGUgPSBkZXNjVGl0bGU7XG4gICAgICAgIGRpcmVjdGlvbiA9IFwiZGVzY1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLnRpdGxlID0gYXNjVGl0bGU7XG4gICAgICAgIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgICB9XG4gICAgICB0aGlzLnRhYmxlLnNvcnRCeUNvbHVtbih0aGlzLmNvbHVtbk5hbWUsIGRpcmVjdGlvbik7XG4gICAgfTtcbiAgICBidG4ub25kcmFnID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUhpZGVCdG4oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJoaWRlXCIpO1xuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQ29sdW1uXCIpO1xuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KFxuICAgICAgICB0aGlzLmNvbHVtbk5hbWUsXG4gICAgICAgIENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlXG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVNb3ZlVG9EZXRhaWxzQnRuKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJtb3ZldG9kZXRhaWxzXCIpO1xuICAgIGJ1dHRvbi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtb3ZlVG9EZXRhaWxcIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMudGFibGUuc2V0Q29sdW1uTG9jYXRpb24odGhpcy5jb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLlJvdyk7XG4gICAgfTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUZpbHRlcklucHV0KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIHZhciBlbCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFwic2EtdGFibGVfX2ZpbHRlclwiLCBcIlNlYXJjaC4uLlwiKTtcbiAgICBlbC5vbmNsaWNrID0gKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZWwub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgdGhpcy50YWJsZS5hcHBseUNvbHVtbkZpbHRlcih0aGlzLmNvbHVtbk5hbWUsIGVsLnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVDb2x1bW5Qcml2YXRlQnV0dG9uKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1ha2VQcml2YXRlU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2Vwcml2YXRlXCIpO1xuICAgIGNvbnN0IG1ha2VQdWJsaWNTdmcgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwibWFrZXB1YmxpY1wiKTtcbiAgICB2YXIgY3VycmVudFZpc2liaWxpdHkgPSB0aGlzLnRhYmxlLmdldENvbHVtblZpc2liaWxpdHkodGhpcy5jb2x1bW5OYW1lKTtcbiAgICB1cGRhdGVTdGF0ZShjdXJyZW50VmlzaWJpbGl0eSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKG1ha2VQcml2YXRlU3ZnKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVB1YmxpY1N2Zyk7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChjdXJyZW50VmlzaWJpbGl0eSA9PT0gQ29sdW1uVmlzaWJpbGl0eS5QdWJsaWNJbnZpc2libGUpIHtcbiAgICAgICAgY3VycmVudFZpc2liaWxpdHkgPSBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuUHVibGljSW52aXNpYmxlO1xuICAgICAgfVxuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KHRoaXMuY29sdW1uTmFtZSwgY3VycmVudFZpc2liaWxpdHkpO1xuICAgICAgdXBkYXRlU3RhdGUoY3VycmVudFZpc2liaWxpdHkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZSh2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSB7XG4gICAgICBjb25zdCBpc1ByaXZhdGUgPSB2aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlB1YmxpY0ludmlzaWJsZTtcbiAgICAgIGlmIChpc1ByaXZhdGUpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b24gc2EtdGFibGVfX3N2Zy1idXR0b24tLWFjdGl2ZVwiO1xuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVB1YmxpY0NvbHVtblwiKTtcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbWFrZVB1YmxpY1N2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiO1xuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVByaXZhdGVDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbWFrZVB1YmxpY1N2Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFF1ZXN0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGVSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByb3RlY3RlZCB0b29sc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXG4gICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgICAgZGF0YTogYW55LFxuICAgICAgdGFibGVSb3c6IFRhYmxlUm93XG4gICAgKSA9PiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyhcbiAgICAgIHRhYmxlLFxuICAgICAgdGhpcyxcbiAgICAgIGRldGFpbHNDb250YWluZXIsXG4gICAgICByZW5kZXJEZXRhaWxBY3Rpb25zXG4gICAgKTtcbiAgICB0aGlzLnRvb2xzID0gbmV3IFJvd1Rvb2xzKHRvb2xzQ29udGFpbmVyLCB0YWJsZSwgdGhpcyk7XG4gICAgdGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmFkZCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlRGV0YWlscygpO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICBwdWJsaWMgdG9vbHM6IFJvd1Rvb2xzO1xuICBwcml2YXRlIGRldGFpbGVkUm93Q2xhc3MgPSBcInNhLXRhYmxlX19kZXRhaWwtcm93XCI7XG4gIHByaXZhdGUgaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgcHVibGljIG9uVG9nZ2xlRGV0YWlsczogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0RGF0YSgpOiBhbnk7XG5cbiAgcHVibGljIGdldElzRGV0YWlsc0V4cGFuZGVkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgdGhpcy50b29scy5yZW5kZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGV0YWlscygpIHtcbiAgICB0aGlzLmRldGFpbHMub3BlbigpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMuZGV0YWlsZWRSb3dDbGFzcztcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzRGV0YWlsc0V4cGFuZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLmNsb3NlKCk7XG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRldGFpbGVkUm93Q2xhc3MpO1xuICAgIHRoaXMub25Ub2dnbGVEZXRhaWxzLmZpcmUodGhpcywgeyBpc0V4cGFuZGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLmlzRGV0YWlsc0V4cGFuZGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRGV0YWlscygpIHtcbiAgICBpZiAodGhpcy5pc0RldGFpbHNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5jbG9zZURldGFpbHMoKTtcbiAgICB9IGVsc2UgdGhpcy5vcGVuRGV0YWlscygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJ1bGF0b3JSb3cgZXh0ZW5kcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIHRvb2xzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGlubmVyUm93OiBhbnksXG4gICAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChcbiAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICB0YWJsZVJvdzogYW55XG4gICAgKSA9PiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBzdXBlcih0YWJsZSwgdG9vbHNDb250YWluZXIsIGRldGFpbHNDb250YWluZXIsIHJlbmRlckRldGFpbEFjdGlvbnMpO1xuICB9XG4gIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5pbm5lclJvdy5nZXRFbGVtZW50KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YSgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSb3cuZ2V0RGF0YSgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhdGFibGVzUm93IGV4dGVuZHMgVGFibGVSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByb3RlY3RlZCB0b29sc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX2lubmVyUm93OiBhbnksXG4gICAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChcbiAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICB0YWJsZVJvdzogYW55XG4gICAgKSA9PiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBzdXBlcih0YWJsZSwgdG9vbHNDb250YWluZXIsIGRldGFpbHNDb250YWluZXIsIHJlbmRlckRldGFpbEFjdGlvbnMpO1xuICAgIHRoaXMucm93RWxlbWVudCA9IF9pbm5lclJvdy5ub2RlKCk7XG4gICAgdGhpcy5yb3dEYXRhID0gX2lubmVyUm93LmRhdGEoKTtcbiAgICB0aGlzLl9pbm5lclJvdyA9IHRoaXMuX2lubmVyUm93LnJvdyh0aGlzLnJvd0VsZW1lbnQpO1xuICB9XG4gIHByaXZhdGUgcm93RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcm93RGF0YTogYW55O1xuXG4gIHB1YmxpYyBnZXQgaW5uZXJSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lubmVyUm93LnJvdyh0aGlzLnJvd0VsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnJvd0VsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YSgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucm93RGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm93VG9vbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgcm93OiBUYWJsZVJvd1xuICApIHtcbiAgICB0aGlzLmFjdGlvbnMgPSBbdGhpcy5jcmVhdGVEZXRhaWxzQnRuXTtcbiAgfVxuXG4gIHB1YmxpYyBhY3Rpb25zOiAoKHJvdzogVGFibGVSb3csIHRhYmxlOiBUYWJsZSkgPT4gSFRNTEVsZW1lbnQpW107XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLnRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uKHRoaXMucm93LCB0aGlzLnRhYmxlKSk7XG4gICAgfSk7XG4gIH1cbiAgcHJvdGVjdGVkIGNyZWF0ZURldGFpbHNCdG4gPSAocm93OiBUYWJsZVJvdykgPT4ge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImRldGFpbFwiKTtcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd01pbm9yQ29sdW1uc1wiKTtcblxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgcm93LnRvZ2dsZURldGFpbHMoKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJsZTogVGFibGUsXG4gICAgcHJpdmF0ZSByb3c6IFRhYmxlUm93LFxuICAgIHByaXZhdGUgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSByZW5kZXJBY3Rpb25zOiBhbnlcbiAgKSB7XG4gICAgdmFyIGRldGFpbHNUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICBkZXRhaWxzVGFibGUuY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fZGV0YWlsLXRhYmxlXCI7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUgPSBkZXRhaWxzVGFibGU7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGRldGFpbHNUYWJsZTogSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIHNldENvbnRhaW5lcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGU7XG4gIH1cblxuICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmRldGFpbHNUYWJsZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHZhciByb3dzOiBIVE1MRWxlbWVudFtdID0gW107XG4gICAgdGhpcy50YWJsZS5jb2x1bW5zXG4gICAgICAuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3cgJiYgY29sdW1uKVxuICAgICAgLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fZGV0YWlsXCI7XG4gICAgICAgIHZhciB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMS50ZXh0Q29udGVudCA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgdmFyIHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQyLnRleHRDb250ZW50ID0gdGhpcy5yb3cuZ2V0RGF0YSgpW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgdmFyIHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uKGNvbHVtbi5uYW1lKSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgfSk7XG4gICAgaWYgKCEhdGhpcy5yZW5kZXJBY3Rpb25zKSB7XG4gICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgcm93LmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX2RldGFpbFwiO1xuICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgdGQuY29sU3BhbiA9IDM7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgcm93cy5wdXNoKHJvdyk7XG4gICAgICB0aGlzLnJlbmRlckFjdGlvbnModGQsIHRoaXMucm93KTtcbiAgICB9XG4gICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuZGV0YWlsc1RhYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTaG93QXNDb2x1bW5CdXR0b24gPSAoY29sdW1uTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93QXNDb2x1bW5cIik7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1ncmF5XCI7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMudGFibGUuc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZSwgUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLmRldGFpbHNUYWJsZS5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBDb2x1bW5WaXNpYmlsaXR5IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFRhYmxlVG9vbHMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LCBwcml2YXRlIHRhYmxlOiBUYWJsZSkge1xuICAgIHRoaXMuYWN0aW9ucyA9IFtcbiAgICAgIHRoaXMuY3JlYXRlRmlsdGVySW5wdXQsXG4gICAgICB0aGlzLmNyZWF0ZVNob3dDb2x1bW5Ecm9wZG93bixcbiAgICAgIHRoaXMuY3JlYXRlRW50cmllc1NlbGVjdG9yLFxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uczogKCh0YWJsZTogVGFibGUpID0+IEhUTUxFbGVtZW50KVtdO1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKGFjdGlvbih0aGlzLnRhYmxlKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRmlsdGVySW5wdXQodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGlucHV0ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlSW5wdXQoXG4gICAgICBcInNhLXRhYmxlX19nbG9iYWwtZmlsdGVyXCIsXG4gICAgICBcIlNlYXJjaC4uLlwiXG4gICAgKTtcbiAgICBpbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUZpbHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVNob3dDb2x1bW5Ecm9wZG93biA9ICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJzYS10YWJsZV9fc2hvdy1jb2x1bW5cIik7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRhYmxlLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAoY29sdW1uOiBhbnkpID0+IGNvbHVtbi52aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZVxuICAgICAgKTtcbiAgICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICAgICAgZHJvcGRvd24uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnRleHQgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKTtcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgICAgaGlkZGVuQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IGFueSkgPT4ge1xuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgdmFyIHRleHQgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICAgICAgICBvcHRpb24udGl0bGUgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGNvbHVtbi5uYW1lO1xuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJvcGRvd24ub25jaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuICAgICAgdGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eSh2YWwsIENvbHVtblZpc2liaWxpdHkuVmlzaWJsZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRyb3Bkb3duO1xuICB9O1xuXG4gIGNyZWF0ZUVudHJpZXNTZWxlY3Rvcih0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgZnVuY3Rpb24gZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIHZhciBvcHRpb25zVmFsdWVzID0gW1wiMVwiLCBcIjVcIiwgXCIxMFwiLCBcIjI1XCIsIFwiNTBcIiwgXCI3NVwiLCBcIjEwMFwiXTtcbiAgICAgIG9wdGlvbnNWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gdmFsO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBlbC52YWx1ZSA9IFwiNVwiO1xuXG4gICAgICBlbC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGFibGUuc2V0UGFnZVNpemUoTnVtYmVyKGVsLnZhbHVlKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19lbnRyaWVzXCI7XG4gICAgY29uc3Qgc2hvd1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzaG93U3Bhbi5pbm5lckhUTUwgPSBcIlNob3dcIjtcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVudHJpZXNTcGFuLmlubmVySFRNTCA9IFwiZW50cmllc1wiO1xuICAgIGVudHJpZXNTcGFuLmNsYXNzTmFtZSA9XG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1sZWZ0XCI7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd1NwYW4pO1xuICAgIHNob3dTcGFuLmNsYXNzTmFtZSA9XG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1yaWdodFwiO1xuICAgIHNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGdldEVudHJpZXNEcm9wZG93bih0YWJsZSkpO1xuICAgIHNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJpZXNTcGFuKTtcbiAgICByZXR1cm4gc2VsZWN0b3JDb250YWluZXI7XG4gIH1cbn1cbiIsImV4cG9ydCB2YXIgX19hc3NpZ24gPVxuICAoPGFueT5PYmplY3QpW1wiYXNzaWduXCJdIHx8XG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgcCBpbiBzKVxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xuICBmb3IgKHZhciBwIGluIGJhc2VDbGFzcylcbiAgICBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XG4gIGZ1bmN0aW9uIF9fKCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSB0aGlzQ2xhc3M7XG4gIH1cbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XG4gICAgYmFzZUNsYXNzID09PSBudWxsXG4gICAgICA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKVxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcbiAgdmFyIHJlc3VsdDogYW55ID0ge307XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBzb3VyY2UpXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgcHJvcGVydHlOYW1lKSAmJlxuICAgICAgZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPCAwXG4gICAgKVxuICAgICAgcmVzdWx0W3Byb3BlcnR5TmFtZV0gPSBzb3VyY2VbcHJvcGVydHlOYW1lXTtcbiAgaWYgKFxuICAgIHNvdXJjZSAhPSBudWxsICYmXG4gICAgdHlwZW9mICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0gPT09IFwiZnVuY3Rpb25cIlxuICApXG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgcHJvcGVydHlTeW1ib2xzID0gKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXShzb3VyY2UpO1xuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XG4gICAgICBpKytcbiAgICApXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxuICAgICAgICByZXN1bHRbcHJvcGVydHlTeW1ib2xzW2ldXSA9IHNvdXJjZVtwcm9wZXJ0eVN5bWJvbHNbaV1dO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xuXG5leHBvcnQgdmFyIF9fZGVjb3JhdGUgPSBmdW5jdGlvbihcbiAgZGVjb3JhdG9yczogYW55LFxuICB0YXJnZXQ6IGFueSxcbiAga2V5OiBhbnksXG4gIGRlc2M6IGFueVxuKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICByID1cbiAgICAgIGMgPCAzXG4gICAgICAgID8gdGFyZ2V0XG4gICAgICAgIDogZGVzYyA9PT0gbnVsbFxuICAgICAgICA/IChkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXG4gICAgICAgIDogZGVzYyxcbiAgICBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2VcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgIGlmICgoZCA9IGRlY29yYXRvcnNbaV0pKVxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG4iLCJleHBvcnQgY2xhc3MgVG9vbGJhckhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTZWxlY3RvcihcclxuICAgIG9wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+LFxyXG4gICAgaXNTZWxlY3RlZDogKG9wdGlvbjogeyB2YWx1ZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkgPT4gYm9vbGVhbixcclxuICAgIGhhbmRlcjogKGU6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBvcHRpb24udGV4dDtcclxuICAgICAgb3B0aW9uRWxlbWVudC5zZWxlY3RlZCA9IGlzU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxlY3Qub25jaGFuZ2UgPSBoYW5kZXI7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24oXHJcbiAgICBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkLFxyXG4gICAgdGV4dCA9IFwiXCIsXHJcbiAgICBjc3NDbGFzcyA9IFwiXCJcclxuICApIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdG9vbGJhcl9fYnV0dG9uIFwiICsgY3NzQ2xhc3M7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gaGFuZGxlcjtcclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRIZWxwZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnRWxlbWVudChwYXRoOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcclxuICAgIGNvbnN0IHN2Z0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJzdmdcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJ1c2VcIlxyXG4gICAgKTtcclxuICAgIHVzZUVsZW0uc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgXCIjc2Etc3ZnLVwiICsgcGF0aFxyXG4gICAgKTtcclxuICAgIHN2Z0VsZW0uYXBwZW5kQ2hpbGQodXNlRWxlbSk7XHJcbiAgICByZXR1cm4gc3ZnRWxlbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnQnV0dG9uKHBhdGg6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQocGF0aCkpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnRuKGNhcHRpb246IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLXNtYWxsIHNhLXRhYmxlX19idG4tLWdyYXlcIjtcclxuICAgIGJ0bi5pbm5lckhUTUwgPSBjYXB0aW9uO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5wdXQoXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyID0gXCJcIixcclxuICAgIGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxuICApOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGVsLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XHJcbiAgICBlbC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIG9wdGlvbnMgPSB7XHJcbiAgcnVubmluZ0luQnJvd3NlcjogdHlwZW9mIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIsXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd0RvbVJlbmRlcmluZygpIHtcclxuICByZXR1cm4gb3B0aW9ucy5ydW5uaW5nSW5Ccm93c2VyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyB6aXBBcnJheXMoZmlyc3Q6IGFueVtdLCBzZWNvbmQ6IGFueVtdKTogYW55W11bXSB7XHJcbiAgICBsZXQgemlwQXJyYXk6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKGZpcnN0Lmxlbmd0aCwgc2Vjb25kLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICB6aXBBcnJheVtpXSA9IFtmaXJzdFtpXSwgc2Vjb25kW2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiB6aXBBcnJheTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW56aXBBcnJheXMoXHJcbiAgICB6aXBBcnJheTogYW55W11bXVxyXG4gICk6IHsgZmlyc3Q6IGFueVtdOyBzZWNvbmQ6IGFueVtdIH0ge1xyXG4gICAgbGV0IHR3b0FycmF5czogYW55ID0geyBmaXJzdDogW10sIHNlY29uZDogW10gfTtcclxuICAgIHppcEFycmF5LmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgIHR3b0FycmF5cy5maXJzdFtpXSA9IHZhbHVlWzBdO1xyXG4gICAgICB0d29BcnJheXMuc2Vjb25kW2ldID0gdmFsdWVbMV07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0d29BcnJheXM7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgc29ydERpY3Rpb25hcnkoXHJcbiAgICBrZXlzOiBhbnlbXSxcclxuICAgIHZhbHVlczogYW55W10sXHJcbiAgICBkZXNjOiBib29sZWFuXHJcbiAgKTogeyBrZXlzOiBhbnlbXTsgdmFsdWVzOiBhbnlbXSB9IHtcclxuICAgIGxldCBkaWN0aW9uYXJ5ID0gdGhpcy56aXBBcnJheXMoa2V5cywgdmFsdWVzKTtcclxuICAgIGxldCBjb21wYXJhdG9yID0gKGE6IGFueVtdLCBiOiBhbnlbXSwgYXNjOiBib29sZWFuID0gdHJ1ZSkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYVsxXSA8IGJbMV0gPyAxIDogYVsxXSA9PSBiWzFdID8gMCA6IC0xO1xyXG4gICAgICByZXR1cm4gYXNjID8gcmVzdWx0IDogcmVzdWx0ICogLTE7XHJcbiAgICB9O1xyXG4gICAgZGljdGlvbmFyeS5zb3J0KChhOiBhbnlbXSwgYjogYW55W10pID0+IHtcclxuICAgICAgcmV0dXJuIGRlc2MgPyBjb21wYXJhdG9yKGEsIGIsIGZhbHNlKSA6IGNvbXBhcmF0b3IoYSwgYik7XHJcbiAgICB9KTtcclxuICAgIGxldCBrZXlzQW5kVmFsdWVzID0gdGhpcy51bnppcEFycmF5cyhkaWN0aW9uYXJ5KTtcclxuICAgIHJldHVybiB7IGtleXM6IGtleXNBbmRWYWx1ZXMuZmlyc3QsIHZhbHVlczoga2V5c0FuZFZhbHVlcy5zZWNvbmQgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9QZXJjZW50YWdlKHZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJ2ZXlfY29yZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=