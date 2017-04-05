(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("survey-knockout"), require("jquery"), require("bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyEditor", ["knockout", "survey-knockout", "jquery", "bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["SurveyEditor"] = factory(require("knockout"), require("survey-knockout"), require("jquery"), require("bootstrap"));
	else
		root["SurveyEditor"] = factory(root["ko"], root["Survey"], root["jQuery"], root["bootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_34__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editorLocalization; });
/* unused harmony export defaultStrings */
var editorLocalization = {
    currentLocale: "",
    locales: {},
    getString: function (strName, locale) {
        if (locale === void 0) { locale = null; }
        if (!locale)
            locale = this.currentLocale;
        var loc = locale ? this.locales[locale] : defaultStrings;
        if (!loc)
            loc = defaultStrings;
        var path = strName.split('.');
        var obj = loc;
        for (var i = 0; i < path.length; i++) {
            obj = obj[path[i]];
            if (!obj) {
                if (loc === defaultStrings)
                    return path[i];
                return this.getString(strName, "en");
            }
        }
        return obj;
    },
    getPropertyName: function (strName, local) {
        if (local === void 0) { local = null; }
        var obj = this.getProperty(strName, local);
        if (obj["name"])
            return obj["name"];
        return obj;
    },
    getPropertyTitle: function (strName, local) {
        if (local === void 0) { local = null; }
        var obj = this.getProperty(strName, local);
        if (obj["title"])
            return obj["title"];
        return "";
    },
    getProperty: function (strName, local) {
        if (local === void 0) { local = null; }
        var obj = this.getString("p." + strName, local);
        if (obj !== strName)
            return obj;
        var pos = strName.indexOf('_');
        if (pos < -1)
            return obj;
        strName = strName.substr(pos + 1);
        return this.getString("p." + strName, local);
    },
    getLocales: function () {
        var res = [];
        res.push("");
        for (var key in this.locales) {
            res.push(key);
        }
        return res;
    }
};
var defaultStrings = {
    //survey templates
    survey: {
        dropQuestion: "Please drop a question here.",
        copy: "Copy",
        addToToolbox: "Add to toolbox",
        deletePanel: "Delete Panel",
        deleteQuestion: "Delete Question"
    },
    //questionTypes
    qt: {
        checkbox: "Checkbox",
        comment: "Comment",
        dropdown: "Dropdown",
        file: "File",
        html: "Html",
        matrix: "Matrix (single choice)",
        matrixdropdown: "Matrix (multiple choice)",
        matrixdynamic: "Matrix (dynamic rows)",
        multipletext: "Multiple Text",
        panel: "Panel",
        radiogroup: "Radiogroup",
        rating: "Rating",
        text: "Single Input"
    },
    //Strings in Editor
    ed: {
        addNewPage: "Add New Page",
        newPageName: "page",
        newQuestionName: "question",
        newPanelName: "panel",
        testSurvey: "Test Survey",
        testSurveyAgain: "Test Survey Again",
        testSurveyWidth: "Survey width: ",
        embedSurvey: "Embed Survey",
        saveSurvey: "Save Survey",
        designer: "Survey Designer",
        jsonEditor: "JSON Editor",
        undo: "Undo",
        redo: "Redo",
        options: "Options",
        generateValidJSON: "Generate Valid JSON",
        generateReadableJSON: "Generate Readable JSON",
        toolbox: "Toolbox",
        delSelObject: "Delete selected object",
        correctJSON: "Please correct JSON.",
        surveyResults: "Survey Result: "
    },
    //Property Editors
    pe: {
        apply: "Apply",
        ok: "OK",
        cancel: "Cancel",
        reset: "Reset",
        close: "Close",
        delete: "Delete",
        addNew: "Add New",
        removeAll: "Remove All",
        edit: "Edit",
        empty: "<empty>",
        fastEntry: "Fast Entry",
        formEntry: "Form Entry",
        testService: "Test the service",
        expressionHelp: "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
        propertyIsEmpty: "Please enter value into the property",
        value: "Value",
        text: "Text",
        required: "Required?",
        columnEdit: "Edit column: {0}",
        hasOther: "Has other item",
        name: "Name",
        title: "Title",
        cellType: "Cell type",
        colCount: "Column count",
        choicesOrder: "Select choices order",
        visible: "Is visible?",
        isRequired: "Is required?",
        startWithNewLine: "Is start with new line?",
        rows: "Row count",
        placeHolder: "Input place holder",
        showPreview: "Is image preview shown?",
        storeDataAsText: "Store file content in JSON result as text",
        maxSize: "Maximum file size in bytes",
        imageHeight: "Image height",
        imageWidth: "Image width",
        rowCount: "Row count",
        addRowText: "Add row button text",
        removeRowText: "Remove row button text",
        minRateDescription: "Minimum rate description",
        maxRateDescription: "Maximum rate description",
        inputType: "Input type",
        optionsCaption: "Options caption",
        qEditorTitle: "Edit question: {0}",
        tabs: {
            general: "General",
            fileOptions: "Options",
            html: "Html Editor",
            columns: "Columns",
            rows: "Rows",
            choices: "Choices",
            visibleIf: "Visible If",
            rateValues: "Rate Values",
            choicesByUrl: "Choices from Web",
            matrixChoices: "Default Choices",
            multipleTextItems: "Text Inputs"
        },
        editProperty: "Edit property '{0}'",
        items: "[ Items: {0} ]",
        enterNewValue: "Please, enter the value.",
        noquestions: "There is no any question in the survey.",
        createtrigger: "Please create a trigger",
        triggerOn: "On ",
        triggerMakePagesVisible: "Make pages visible:",
        triggerMakeQuestionsVisible: "Make questions visible:",
        triggerCompleteText: "Complete the survey if succeed.",
        triggerNotSet: "The trigger is not set",
        triggerRunIf: "Run if",
        triggerSetToName: "Change value of: ",
        triggerSetValue: "to: ",
        triggerIsVariable: "Do not put the variable into the survey result.",
        verbChangeType: "Change type ",
        verbChangePage: "Change page "
    },
    //Operators
    op: {
        empty: "is empty",
        notempty: "is not empty",
        equal: "equals",
        notequal: "not equals",
        contains: "contains",
        notcontains: "not contains",
        greater: "greater",
        less: "less",
        greaterorequal: "greater or equals",
        lessorequal: "Less or Equals"
    },
    //Embed window
    ew: {
        angular: "Use Angular version",
        jquery: "Use jQuery version",
        knockout: "Use Knockout version",
        react: "Use React version",
        vue: "Use Vue version",
        bootstrap: "For bootstrap framework",
        standard: "No bootstrap",
        showOnPage: "Show survey on a page",
        showInWindow: "Show survey in a window",
        loadFromServer: "Load Survey JSON from server",
        titleScript: "Scripts and styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Properties
    p: {
        name: "name",
        title: { name: "title", title: "Leave it empty, if it is the same as 'Name'" },
        survey_title: { name: "title", title: "It will be shown on every page." },
        page_title: { name: "title", title: "Page title" }
    }
};
editorLocalization.locales["en"] = defaultStrings;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __assign */
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
var __assign = Object["assign"] || function (target) {
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
    function __() { this.constructor = thisClass; }
    thisClass.prototype = baseClass === null ? Object.create(baseClass) : (__.prototype = baseClass.prototype, new __());
}
;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyStringPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyDropdownPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyBooleanPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SurveyNumberPropertyEditor; });

var SurveyPropertyEditorBase = (function () {
    function SurveyPropertyEditorBase() {
        this.value_ = null;
        this.options = null;
    }
    SurveyPropertyEditorBase.registerEditor = function (name, creator) {
        SurveyPropertyEditorBase.editorRegisteredList[name] = creator;
    };
    SurveyPropertyEditorBase.createEditor = function (editorType, func) {
        var creator = SurveyPropertyEditorBase.editorRegisteredList[editorType];
        if (!creator)
            creator = SurveyPropertyEditorBase.editorRegisteredList[SurveyPropertyEditorBase.defaultEditor];
        var propertyEditor = creator();
        propertyEditor.onChanged = func;
        return propertyEditor;
    };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "editorType", {
        get: function () { throw "editorType is not defined"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.getValueText = function (value) { return value; };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "value", {
        get: function () { return this.value_; },
        set: function (value) {
            value = this.getCorrectedValue(value);
            this.setValueCore(value);
            this.onValueChanged();
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.setValueCore = function (value) {
        this.value_ = value;
    };
    SurveyPropertyEditorBase.prototype.setTitle = function (value) { };
    SurveyPropertyEditorBase.prototype.setObject = function (value) { };
    SurveyPropertyEditorBase.prototype.onValueChanged = function () {
    };
    SurveyPropertyEditorBase.prototype.getCorrectedValue = function (value) { return value; };
    return SurveyPropertyEditorBase;
}());

SurveyPropertyEditorBase.defaultEditor = "string";
SurveyPropertyEditorBase.editorRegisteredList = {};
var SurveyStringPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyStringPropertyEditor, _super);
    function SurveyStringPropertyEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyStringPropertyEditor.prototype, "editorType", {
        get: function () { return "string"; },
        enumerable: true,
        configurable: true
    });
    return SurveyStringPropertyEditor;
}(SurveyPropertyEditorBase));

var SurveyDropdownPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyDropdownPropertyEditor, _super);
    function SurveyDropdownPropertyEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyDropdownPropertyEditor.prototype, "editorType", {
        get: function () { return "dropdown"; },
        enumerable: true,
        configurable: true
    });
    return SurveyDropdownPropertyEditor;
}(SurveyPropertyEditorBase));

var SurveyBooleanPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyBooleanPropertyEditor, _super);
    function SurveyBooleanPropertyEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyBooleanPropertyEditor.prototype, "editorType", {
        get: function () { return "boolean"; },
        enumerable: true,
        configurable: true
    });
    return SurveyBooleanPropertyEditor;
}(SurveyPropertyEditorBase));

var SurveyNumberPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyNumberPropertyEditor, _super);
    function SurveyNumberPropertyEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyNumberPropertyEditor.prototype, "editorType", {
        get: function () { return "number"; },
        enumerable: true,
        configurable: true
    });
    return SurveyNumberPropertyEditor;
}(SurveyPropertyEditorBase));

SurveyPropertyEditorBase.registerEditor("string", function () { return new SurveyStringPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("dropdown", function () { return new SurveyDropdownPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("boolean", function () { return new SurveyBooleanPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("number", function () { return new SurveyNumberPropertyEditor(); });


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyItemsEditor; });




var SurveyPropertyItemsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyItemsEditor, _super);
    function SurveyPropertyItemsEditor() {
        var _this = _super.call(this) || this;
        _this.koItems = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.value = [];
        var self = _this;
        self.onDeleteClick = function (item) { self.koItems.remove(item); };
        self.onClearClick = function (item) { self.koItems.removeAll(); };
        self.onAddClick = function () { self.AddItem(); };
        self.onMoveUpClick = function (item) { self.moveUp(item); };
        self.onMoveDownClick = function (item) { self.moveDown(item); };
        return _this;
    }
    SurveyPropertyItemsEditor.prototype.getValueText = function (value) {
        var len = value ? value.length : 0;
        return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("pe.items")["format"](len);
    };
    SurveyPropertyItemsEditor.prototype.getCorrectedValue = function (value) {
        if (value == null || !Array.isArray(value))
            value = [];
        return value;
    };
    SurveyPropertyItemsEditor.prototype.AddItem = function () {
        this.koItems.push(this.createNewEditorItem());
    };
    SurveyPropertyItemsEditor.prototype.moveUp = function (item) {
        var arr = this.koItems();
        var index = arr.indexOf(item);
        if (index < 1)
            return;
        arr[index] = arr[index - 1];
        arr[index - 1] = item;
        this.koItems(arr);
    };
    SurveyPropertyItemsEditor.prototype.moveDown = function (item) {
        var arr = this.koItems();
        var index = arr.indexOf(item);
        if (index < 0 || index >= arr.length - 1)
            return;
        arr[index] = arr[index + 1];
        arr[index + 1] = item;
        this.koItems(arr);
    };
    SurveyPropertyItemsEditor.prototype.onValueChanged = function () {
        this.koItems(this.getItemsFromValue());
    };
    SurveyPropertyItemsEditor.prototype.getItemsFromValue = function (value) {
        if (value === void 0) { value = null; }
        var items = [];
        if (!value)
            value = this.value;
        for (var i = 0; i < value.length; i++) {
            items.push(this.createEditorItem(value[i]));
        }
        return items;
    };
    SurveyPropertyItemsEditor.prototype.onBeforeApply = function () {
        var items = [];
        var internalItems = this.koItems();
        for (var i = 0; i < internalItems.length; i++) {
            items.push(this.createItemFromEditorItem(internalItems[i]));
        }
        this.setValueCore(items);
    };
    SurveyPropertyItemsEditor.prototype.createNewEditorItem = function () { throw "Override 'createNewEditorItem' method"; };
    SurveyPropertyItemsEditor.prototype.createEditorItem = function (item) { return item; };
    SurveyPropertyItemsEditor.prototype.createItemFromEditorItem = function (editorItem) { return editorItem; };
    return SurveyPropertyItemsEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyHelper; });

var ObjType;
(function (ObjType) {
    ObjType[ObjType["Unknown"] = 0] = "Unknown";
    ObjType[ObjType["Survey"] = 1] = "Survey";
    ObjType[ObjType["Page"] = 2] = "Page";
    ObjType[ObjType["Panel"] = 3] = "Panel";
    ObjType[ObjType["Question"] = 4] = "Question";
})(ObjType || (ObjType = {}));
var SurveyHelper = (function () {
    function SurveyHelper() {
    }
    SurveyHelper.getNewPageName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newPageName"));
    };
    SurveyHelper.getNewQuestionName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newQuestionName"));
    };
    SurveyHelper.getNewPanelName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newPanelName"));
    };
    SurveyHelper.getNewName = function (objs, baseName) {
        var hash = {};
        for (var i = 0; i < objs.length; i++) {
            hash[objs[i].name] = true;
        }
        var num = 1;
        while (true) {
            if (!hash[baseName + num.toString()])
                break;
            num++;
        }
        return baseName + num.toString();
    };
    SurveyHelper.getObjectType = function (obj) {
        if (!obj || !obj["getType"])
            return ObjType.Unknown;
        if (obj.getType() == "page")
            return ObjType.Page;
        if (obj.getType() == "panel")
            return ObjType.Panel;
        if (obj.getType() == "survey")
            return ObjType.Survey;
        if (obj["name"])
            return ObjType.Question;
        return ObjType.Unknown;
    };
    SurveyHelper.getObjectName = function (obj) {
        if (obj["name"])
            return obj["name"];
        var objType = SurveyHelper.getObjectType(obj);
        if (objType != ObjType.Page)
            return "";
        var data = obj.data;
        var index = data.pages.indexOf(obj);
        return "[Page " + (index + 1) + "]";
    };
    return SurveyHelper;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objectProperty__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjectEditor; });




var SurveyObjectEditor = (function () {
    function SurveyObjectEditor(propertyEditorOptions) {
        if (propertyEditorOptions === void 0) { propertyEditorOptions = null; }
        this.propertyEditorOptions = null;
        this.onPropertyValueChanged = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        this.setOptions(propertyEditorOptions);
        this.koProperties = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koActiveProperty = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koHasObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
    }
    Object.defineProperty(SurveyObjectEditor.prototype, "selectedObject", {
        get: function () { return this.selectedObjectValue; },
        set: function (value) {
            if (this.selectedObjectValue == value)
                return;
            this.koHasObject(value != null);
            this.selectedObjectValue = value;
            this.updateProperties();
            this.updatePropertiesObject();
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjectEditor.prototype.setOptions = function (propertyEditorOptions) {
        this.propertyEditorOptions = propertyEditorOptions;
    };
    SurveyObjectEditor.prototype.getPropertyEditor = function (name) {
        var properties = this.koProperties();
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == name)
                return properties[i];
        }
        return null;
    };
    SurveyObjectEditor.prototype.changeActiveProperty = function (property) {
        this.koActiveProperty(property);
    };
    SurveyObjectEditor.prototype.ObjectChanged = function () {
        this.updatePropertiesObject();
    };
    SurveyObjectEditor.prototype.updateProperties = function () {
        var _this = this;
        if (!this.selectedObject || !this.selectedObject.getType) {
            this.koProperties([]);
            this.koActiveProperty(null);
            return;
        }
        var properties = __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["JsonObject"].metaData.getProperties(this.selectedObject.getType());
        properties.sort(function (a, b) {
            if (a.name == b.name)
                return 0;
            if (a.name > b.name)
                return 1;
            return -1;
        });
        var objectProperties = [];
        var self = this;
        var propEvent = function (property, newValue) {
            self.onPropertyValueChanged.fire(_this, { property: property.property, object: property.object, newValue: newValue });
        };
        for (var i = 0; i < properties.length; i++) {
            if (!this.canShowProperty(properties[i]))
                continue;
            var objectProperty = new __WEBPACK_IMPORTED_MODULE_1__objectProperty__["a" /* SurveyObjectProperty */](properties[i], propEvent, this.propertyEditorOptions);
            var locName = this.selectedObject.getType() + '_' + properties[i].name;
            objectProperty.displayName = __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getPropertyName(locName);
            var title = __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getPropertyTitle(locName);
            if (!title)
                title = objectProperty.displayName;
            objectProperty.title = title;
            objectProperties.push(objectProperty);
        }
        this.koProperties(objectProperties);
        this.koActiveProperty(this.getPropertyEditor("name"));
    };
    SurveyObjectEditor.prototype.canShowProperty = function (property) {
        if (property["visible"] === false)
            return false;
        if (this.onCanShowPropertyCallback)
            return this.onCanShowPropertyCallback(this.selectedObject, property);
        return true;
    };
    SurveyObjectEditor.prototype.updatePropertiesObject = function () {
        var properties = this.koProperties();
        for (var i = 0; i < properties.length; i++) {
            properties[i].object = this.selectedObject;
        }
    };
    return SurveyObjectEditor;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyModalEditor; });
/* unused harmony export SurveyPropertyTextEditor */
/* unused harmony export SurveyPropertyHtmlEditor */
/* unused harmony export SurveyPropertyExpressionEditor */



var SurveyPropertyModalEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyModalEditor, _super);
    function SurveyPropertyModalEditor() {
        var _this = _super.call(this) || this;
        _this.title = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        var self = _this;
        self.onApplyClick = function () { self.apply(); };
        self.onResetClick = function () { self.reset(); };
        return _this;
    }
    SurveyPropertyModalEditor.prototype.setTitle = function (value) { this.title(value); };
    SurveyPropertyModalEditor.prototype.hasError = function () { return false; };
    SurveyPropertyModalEditor.prototype.onBeforeApply = function () { };
    SurveyPropertyModalEditor.prototype.reset = function () {
        this.value = this.value;
    };
    SurveyPropertyModalEditor.prototype.setObject = function (value) { this.object = value; };
    Object.defineProperty(SurveyPropertyModalEditor.prototype, "isEditable", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyModalEditor.prototype.apply = function () {
        if (this.hasError())
            return;
        this.onBeforeApply();
        if (this.onChanged) {
            this.onChanged(this.value);
        }
    };
    return SurveyPropertyModalEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */]));

var SurveyPropertyTextEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextEditor, _super);
    function SurveyPropertyTextEditor() {
        var _this = _super.call(this) || this;
        _this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        return _this;
    }
    Object.defineProperty(SurveyPropertyTextEditor.prototype, "editorType", {
        get: function () { return "text"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyTextEditor.prototype, "isEditable", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTextEditor.prototype.getValueText = function (value) {
        if (!value)
            return null;
        var str = value;
        if (str.length > 20) {
            str = str.substr(0, 20) + "...";
        }
        return str;
    };
    SurveyPropertyTextEditor.prototype.onValueChanged = function () {
        this.koValue(this.value);
    };
    SurveyPropertyTextEditor.prototype.onBeforeApply = function () {
        this.setValueCore(this.koValue());
    };
    return SurveyPropertyTextEditor;
}(SurveyPropertyModalEditor));

var SurveyPropertyHtmlEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyHtmlEditor, _super);
    function SurveyPropertyHtmlEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyPropertyHtmlEditor.prototype, "editorType", {
        get: function () { return "html"; },
        enumerable: true,
        configurable: true
    });
    return SurveyPropertyHtmlEditor;
}(SurveyPropertyTextEditor));

var SurveyPropertyExpressionEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyExpressionEditor, _super);
    function SurveyPropertyExpressionEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyPropertyExpressionEditor.prototype, "editorType", {
        get: function () { return "expression"; },
        enumerable: true,
        configurable: true
    });
    return SurveyPropertyExpressionEditor;
}(SurveyPropertyTextEditor));

__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("text", function () { return new SurveyPropertyTextEditor(); });
__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("html", function () { return new SurveyPropertyHtmlEditor(); });
__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("expression", function () { return new SurveyPropertyExpressionEditor(); });


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionEditorGeneralProperties__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionEditorDefinition__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyEditorShowWindow; });
/* unused harmony export SurveyQuestionProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionEditor; });
/* unused harmony export SurveyQuestionEditorTabBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyQuestionEditorTabGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyQuestionEditorTabProperty; });








var SurveyPropertyEditorShowWindow = (function () {
    function SurveyPropertyEditorShowWindow() {
        this.koVisible = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        this.koEditor = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
    }
    SurveyPropertyEditorShowWindow.prototype.show = function (questionBase, onChanged) {
        var editor = new SurveyQuestionEditor(questionBase, this.onCanShowPropertyCallback);
        editor.onChanged = onChanged;
        this.koEditor(editor);
        this.koVisible(true);
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#surveyquestioneditorwindow").modal("show");
        editor.onHideWindow = function () { __WEBPACK_IMPORTED_MODULE_2_jquery__("#surveyquestioneditorwindow").modal("hide"); };
    };
    return SurveyPropertyEditorShowWindow;
}());

var SurveyQuestionProperties = (function () {
    function SurveyQuestionProperties(obj, onCanShowPropertyCallback) {
        this.obj = obj;
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.properties = __WEBPACK_IMPORTED_MODULE_7_survey_knockout__["JsonObject"].metaData.getProperties(this.obj.getType());
    }
    SurveyQuestionProperties.prototype.getProperty = function (propertyName) {
        var property = null;
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == propertyName) {
                property = this.properties[i];
                break;
            }
        }
        if (property && property["visible"] === false)
            property = null;
        if (property && this.onCanShowPropertyCallback) {
            if (!this.onCanShowPropertyCallback(this.obj, property))
                property = null;
        }
        return property;
    };
    return SurveyQuestionProperties;
}());

var SurveyQuestionEditor = (function () {
    function SurveyQuestionEditor(obj, onCanShowPropertyCallback, className) {
        if (className === void 0) { className = null; }
        this.obj = obj;
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.className = className;
        var self = this;
        if (!this.className)
            this.className = this.obj.getType();
        this.properties = new SurveyQuestionProperties(obj, onCanShowPropertyCallback);
        self.onApplyClick = function () { self.apply(); };
        self.onOkClick = function () { self.apply(); if (!self.hasError() && self.onHideWindow)
            self.onHideWindow(); };
        self.onResetClick = function () { self.reset(); };
        this.onTabClick = function (tab) { self.koActiveTab(tab.name); };
        var tabs = this.buildTabs();
        this.koActiveTab = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](tabs[0].name);
        this.koTabs = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](tabs);
        this.koTitle = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        if (this.obj["name"]) {
            this.koTitle(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.qEditorTitle")["format"](this.obj["name"]));
        }
    }
    SurveyQuestionEditor.prototype.hasError = function () {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].hasError()) {
                this.koActiveTab(tabs[i].name);
                return true;
            }
        }
        return false;
    };
    SurveyQuestionEditor.prototype.reset = function () {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].reset();
        }
    };
    SurveyQuestionEditor.prototype.apply = function () {
        if (this.hasError())
            return;
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].apply();
        }
        if (this.onChanged) {
            this.onChanged(this.obj);
        }
    };
    SurveyQuestionEditor.prototype.buildTabs = function () {
        var tabs = [];
        var properties = new __WEBPACK_IMPORTED_MODULE_5__questionEditorGeneralProperties__["a" /* SurveyQuestionEditorGeneralProperties */](this.obj, __WEBPACK_IMPORTED_MODULE_6__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(this.className), this.onCanShowPropertyCallback);
        tabs.push(new SurveyQuestionEditorTabGeneral(this.obj, properties));
        this.addPropertiesTabs(tabs);
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onCanShowPropertyCallback = this.onCanShowPropertyCallback;
        }
        return tabs;
    };
    SurveyQuestionEditor.prototype.addPropertiesTabs = function (tabs) {
        var tabNames = __WEBPACK_IMPORTED_MODULE_6__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getTabs(this.className);
        for (var i = 0; i < tabNames.length; i++) {
            var tabItem = tabNames[i];
            var property = this.properties.getProperty(tabItem.name);
            if (!property)
                continue;
            var editorTab = new SurveyQuestionEditorTabProperty(this.obj, property);
            if (tabItem.title)
                editorTab.title = tabItem.title;
            tabs.push(editorTab);
        }
    };
    return SurveyQuestionEditor;
}());

var SurveyQuestionEditorTabBase = (function () {
    function SurveyQuestionEditorTabBase(obj) {
        this.obj = obj;
    }
    Object.defineProperty(SurveyQuestionEditorTabBase.prototype, "name", {
        get: function () { return "name"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabBase.prototype, "title", {
        get: function () {
            if (this.titleValue)
                return this.titleValue;
            var str = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.tabs." + this.name);
            return str ? str : this.name;
        },
        set: function (value) { this.titleValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabBase.prototype, "htmlTemplate", {
        get: function () { return "questioneditortab-" + this.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabBase.prototype, "templateObject", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTabBase.prototype.hasError = function () { return false; };
    SurveyQuestionEditorTabBase.prototype.reset = function () { };
    SurveyQuestionEditorTabBase.prototype.apply = function () { };
    SurveyQuestionEditorTabBase.prototype.getValue = function (property) {
        if (property.hasToUseGetValue)
            return property.getValue(this.obj);
        return this.obj[property.name];
    };
    return SurveyQuestionEditorTabBase;
}());

var SurveyQuestionEditorTabGeneral = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyQuestionEditorTabGeneral, _super);
    function SurveyQuestionEditorTabGeneral(obj, properties) {
        if (properties === void 0) { properties = null; }
        var _this = _super.call(this, obj) || this;
        _this.obj = obj;
        _this.properties = properties;
        _this.properties = properties ? properties : new __WEBPACK_IMPORTED_MODULE_5__questionEditorGeneralProperties__["a" /* SurveyQuestionEditorGeneralProperties */](obj, __WEBPACK_IMPORTED_MODULE_6__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(obj.getType()), null);
        return _this;
    }
    Object.defineProperty(SurveyQuestionEditorTabGeneral.prototype, "name", {
        get: function () { return "general"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabGeneral.prototype, "htmlTemplate", {
        get: function () { return "questioneditortab-general"; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTabGeneral.prototype.hasError = function () { return this.properties.hasError(); };
    SurveyQuestionEditorTabGeneral.prototype.reset = function () {
        this.properties.reset();
    };
    SurveyQuestionEditorTabGeneral.prototype.apply = function () {
        this.properties.apply();
    };
    return SurveyQuestionEditorTabGeneral;
}(SurveyQuestionEditorTabBase));

var SurveyQuestionEditorTabProperty = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyQuestionEditorTabProperty, _super);
    function SurveyQuestionEditorTabProperty(obj, property) {
        var _this = _super.call(this, obj) || this;
        _this.obj = obj;
        _this.property = property;
        _this.propertyEditorValue = __WEBPACK_IMPORTED_MODULE_3__propertyEditors_propertyEditorBase__["a" /* SurveyPropertyEditorBase */].createEditor(_this.property.type, null);
        _this.propertyEditorValue.value = _this.getValue(_this.property);
        return _this;
    }
    Object.defineProperty(SurveyQuestionEditorTabProperty.prototype, "name", {
        get: function () { return this.property.name; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTabProperty.prototype.hasError = function () { return this.propertyEditor.hasError(); };
    Object.defineProperty(SurveyQuestionEditorTabProperty.prototype, "htmlTemplate", {
        get: function () { return "propertyeditorcontent-" + this.property.type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabProperty.prototype, "templateObject", {
        get: function () { return this.propertyEditor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabProperty.prototype, "propertyEditor", {
        get: function () { return this.propertyEditorValue; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTabProperty.prototype.reset = function () {
        this.propertyEditorValue.value = this.getValue(this.property);
    };
    SurveyQuestionEditorTabProperty.prototype.apply = function () {
        this.propertyEditor.apply();
        this.obj[this.property.name] = this.propertyEditorValue.value;
    };
    return SurveyQuestionEditorTabProperty;
}(SurveyQuestionEditorTabBase));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json5__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTextWorker; });


var TextParserPropery = (function () {
    function TextParserPropery() {
    }
    return TextParserPropery;
}());
var SurveyTextWorker = (function () {
    function SurveyTextWorker(text) {
        this.text = text;
        if (!this.text || this.text.trim() == "") {
            this.text = "{}";
        }
        this.errors = [];
        this.process();
    }
    Object.defineProperty(SurveyTextWorker.prototype, "survey", {
        get: function () { return this.surveyValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyTextWorker.prototype, "isJsonCorrect", {
        get: function () { return this.surveyValue != null; },
        enumerable: true,
        configurable: true
    });
    SurveyTextWorker.prototype.process = function () {
        try {
            this.jsonValue = new __WEBPACK_IMPORTED_MODULE_0__json5__["a" /* SurveyJSON5 */](1).parse(this.text);
        }
        catch (error) {
            this.errors.push({ pos: { start: error.at, end: -1 }, text: error.message });
        }
        if (this.jsonValue != null) {
            this.updateJsonPositions(this.jsonValue);
            this.surveyValue = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["Survey"](this.jsonValue);
            if (this.surveyValue.jsonErrors != null) {
                for (var i = 0; i < this.surveyValue.jsonErrors.length; i++) {
                    var error = this.surveyValue.jsonErrors[i];
                    this.errors.push({ pos: { start: error.at, end: -1 }, text: error.getFullDescription() });
                }
            }
        }
        this.surveyObjects = this.createSurveyObjects();
        this.setEditorPositionByChartAt(this.surveyObjects);
        this.setEditorPositionByChartAt(this.errors);
    };
    SurveyTextWorker.prototype.updateJsonPositions = function (jsonObj) {
        jsonObj["pos"]["self"] = jsonObj;
        for (var key in jsonObj) {
            var obj = jsonObj[key];
            if (obj && obj["pos"]) {
                jsonObj["pos"][key] = obj["pos"];
                this.updateJsonPositions(obj);
            }
        }
    };
    SurveyTextWorker.prototype.createSurveyObjects = function () {
        var result = [];
        if (this.surveyValue == null)
            return result;
        this.isSurveyAsPage = false;
        for (var i = 0; i < this.surveyValue.pages.length; i++) {
            var page = this.surveyValue.pages[i];
            if (i == 0 && !page["pos"]) {
                page["pos"] = this.surveyValue["pos"];
                this.isSurveyAsPage = true;
            }
            result.push(page);
            for (var j = 0; j < page.questions.length; j++) {
                result.push(page.questions[j]);
            }
        }
        return result;
    };
    SurveyTextWorker.prototype.setEditorPositionByChartAt = function (objects) {
        if (objects == null || objects.length == 0)
            return;
        var position = { row: 0, column: 0 };
        var atObjectsArray = this.getAtArray(objects);
        var startAt = 0;
        for (var i = 0; i < atObjectsArray.length; i++) {
            var at = atObjectsArray[i].at;
            position = this.getPostionByChartAt(position, startAt, at);
            var obj = atObjectsArray[i].obj;
            if (!obj.position)
                obj.position = {};
            if (at == obj.pos.start) {
                obj.position.start = position;
            }
            else {
                if (at == obj.pos.end) {
                    obj.position.end = position;
                }
            }
            startAt = at;
        }
    };
    SurveyTextWorker.prototype.getPostionByChartAt = function (startPosition, startAt, at) {
        var result = { row: startPosition.row, column: startPosition.column };
        var curChar = startAt;
        while (curChar < at) {
            if (this.text.charAt(curChar) == SurveyTextWorker.newLineChar) {
                result.row++;
                result.column = 0;
            }
            else {
                result.column++;
            }
            curChar++;
        }
        return result;
    };
    SurveyTextWorker.prototype.getAtArray = function (objects) {
        var result = [];
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var pos = obj.pos;
            if (!pos)
                continue;
            result.push({ at: pos.start, obj: obj });
            if (pos.end > 0) {
                result.push({ at: pos.end, obj: obj });
            }
        }
        return result.sort(function (el1, el2) {
            if (el1.at > el2.at)
                return 1;
            if (el1.at < el2.at)
                return -1;
            return 0;
        });
    };
    return SurveyTextWorker;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyJSON5; });
// This file is based on JSON5, http://json5.org/
// The modification for getting object and properties location 'at' were maden.
var SurveyJSON5 = (function () {
    function SurveyJSON5(parseType) {
        if (parseType === void 0) { parseType = 0; }
        this.parseType = parseType;
    }
    SurveyJSON5.prototype.parse = function (source, reviver, startFrom, endAt) {
        if (reviver === void 0) { reviver = null; }
        if (startFrom === void 0) { startFrom = 0; }
        if (endAt === void 0) { endAt = -1; }
        var result;
        this.text = String(source);
        this.at = startFrom;
        this.endAt = endAt;
        this.ch = ' ';
        result = this.value();
        this.white();
        if (this.ch) {
            this.error("Syntax error");
        }
        // If there is a reviver function, we recursively walk the new structure,
        // passing each name/value pair to the reviver function for possible
        // transformation, starting with a temporary root object that holds the result
        // in an empty key. If there is not a reviver function, we simply return the
        // result.
        return typeof reviver === 'function' ? (function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && typeof value === 'object') {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        }
                        else {
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder, key, value);
        }({ '': result }, '')) : result;
    };
    SurveyJSON5.prototype.error = function (m) {
        // Call error when something is wrong.
        var error = new SyntaxError();
        error.message = m;
        error["at"] = this.at;
        throw error;
    };
    SurveyJSON5.prototype.next = function (c) {
        if (c === void 0) { c = null; }
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== this.ch) {
            this.error("Expected '" + c + "' instead of '" + this.ch + "'");
        }
        // Get the this.next character. When there are no more characters,
        // return the empty string.
        this.ch = this.chartAt();
        this.at += 1;
        return this.ch;
    };
    SurveyJSON5.prototype.peek = function () {
        // Get the this.next character without consuming it or
        // assigning it to the this.ch varaible.
        return this.chartAt();
    };
    SurveyJSON5.prototype.chartAt = function () {
        if (this.endAt > -1 && this.at >= this.endAt)
            return '';
        return this.text.charAt(this.at);
    };
    SurveyJSON5.prototype.identifier = function () {
        // Parse an identifier. Normally, reserved words are disallowed here, but we
        // only use this for unquoted object keys, where reserved words are allowed,
        // so we don't check for those here. References:
        // - http://es5.github.com/#x7.6
        // - https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Core_Language_Features#Variables
        // - http://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm
        // TODO Identifiers can have Unicode "letters" in them; add support for those.
        var key = this.ch;
        // Identifiers must start with a letter, _ or $.
        if ((this.ch !== '_' && this.ch !== '$') &&
            (this.ch < 'a' || this.ch > 'z') &&
            (this.ch < 'A' || this.ch > 'Z')) {
            this.error("Bad identifier");
        }
        // Subsequent characters can contain digits.
        while (this.next() && (this.ch === '_' || this.ch === '$' ||
            (this.ch >= 'a' && this.ch <= 'z') ||
            (this.ch >= 'A' && this.ch <= 'Z') ||
            (this.ch >= '0' && this.ch <= '9'))) {
            key += this.ch;
        }
        return key;
    };
    SurveyJSON5.prototype.number = function () {
        // Parse a number value.
        var number, sign = '', string = '', base = 10;
        if (this.ch === '-' || this.ch === '+') {
            sign = this.ch;
            this.next(this.ch);
        }
        // support for Infinity (could tweak to allow other words):
        if (this.ch === 'I') {
            number = this.word();
            if (typeof number !== 'number' || isNaN(number)) {
                this.error('Unexpected word for number');
            }
            return (sign === '-') ? -number : number;
        }
        // support for NaN
        if (this.ch === 'N') {
            number = this.word();
            if (!isNaN(number)) {
                this.error('expected word to be NaN');
            }
            // ignore sign as -NaN also is NaN
            return number;
        }
        if (this.ch === '0') {
            string += this.ch;
            this.next();
            if (this.ch === 'x' || this.ch === 'X') {
                string += this.ch;
                this.next();
                base = 16;
            }
            else if (this.ch >= '0' && this.ch <= '9') {
                this.error('Octal literal');
            }
        }
        switch (base) {
            case 10:
                while (this.ch >= '0' && this.ch <= '9') {
                    string += this.ch;
                    this.next();
                }
                if (this.ch === '.') {
                    string += '.';
                    while (this.next() && this.ch >= '0' && this.ch <= '9') {
                        string += this.ch;
                    }
                }
                if (this.ch === 'e' || this.ch === 'E') {
                    string += this.ch;
                    this.next();
                    if (this.ch === '-' || this.ch === '+') {
                        string += this.ch;
                        this.next();
                    }
                    while (this.ch >= '0' && this.ch <= '9') {
                        string += this.ch;
                        this.next();
                    }
                }
                break;
            case 16:
                while (this.ch >= '0' && this.ch <= '9' || this.ch >= 'A' && this.ch <= 'F' || this.ch >= 'a' && this.ch <= 'f') {
                    string += this.ch;
                    this.next();
                }
                break;
        }
        if (sign === '-') {
            number = -string;
        }
        else {
            number = +string;
        }
        if (!isFinite(number)) {
            this.error("Bad number");
        }
        else {
            return number;
        }
    };
    SurveyJSON5.prototype.string = function () {
        // Parse a string value.
        var hex, i, string = '', delim, // double quote or single quote
        uffff;
        // When parsing for string values, we must look for ' or " and \ characters.
        if (this.ch === '"' || this.ch === "'") {
            delim = this.ch;
            while (this.next()) {
                if (this.ch === delim) {
                    this.next();
                    return string;
                }
                else if (this.ch === '\\') {
                    this.next();
                    if (this.ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(this.next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    }
                    else if (this.ch === '\r') {
                        if (this.peek() === '\n') {
                            this.next();
                        }
                    }
                    else if (typeof SurveyJSON5.escapee[this.ch] === 'string') {
                        string += SurveyJSON5.escapee[this.ch];
                    }
                    else {
                        break;
                    }
                }
                else if (this.ch === '\n') {
                    // unescaped newlines are invalid; see:
                    // https://github.com/aseemk/json5/issues/24
                    // TODO this feels special-cased; are there other
                    // invalid unescaped chars?
                    break;
                }
                else {
                    string += this.ch;
                }
            }
        }
        this.error("Bad string");
    };
    SurveyJSON5.prototype.inlineComment = function () {
        // Skip an inline comment, assuming this is one. The current character should
        // be the second / character in the // pair that begins this inline comment.
        // To finish the inline comment, we look for a newline or the end of the text.
        if (this.ch !== '/') {
            this.error("Not an inline comment");
        }
        do {
            this.next();
            if (this.ch === '\n' || this.ch === '\r') {
                this.next();
                return;
            }
        } while (this.ch);
    };
    SurveyJSON5.prototype.blockComment = function () {
        // Skip a block comment, assuming this is one. The current character should be
        // the * character in the /* pair that begins this block comment.
        // To finish the block comment, we look for an ending */ pair of characters,
        // but we also watch for the end of text before the comment is terminated.
        if (this.ch !== '*') {
            this.error("Not a block comment");
        }
        do {
            this.next();
            while (this.ch === '*') {
                this.next('*');
                if (this.ch === '/') {
                    this.next('/');
                    return;
                }
            }
        } while (this.ch);
        this.error("Unterminated block comment");
    };
    SurveyJSON5.prototype.comment = function () {
        // Skip a comment, whether inline or block-level, assuming this is one.
        // Comments always begin with a / character.
        if (this.ch !== '/') {
            this.error("Not a comment");
        }
        this.next('/');
        if (this.ch === '/') {
            this.inlineComment();
        }
        else if (this.ch === '*') {
            this.blockComment();
        }
        else {
            this.error("Unrecognized comment");
        }
    };
    SurveyJSON5.prototype.white = function () {
        // Skip whitespace and comments.
        // Note that we're detecting comments by only a single / character.
        // This works since regular expressions are not valid JSON(5), but this will
        // break if there are other valid values that begin with a / character!
        while (this.ch) {
            if (this.ch === '/') {
                this.comment();
            }
            else if (SurveyJSON5.ws.indexOf(this.ch) >= 0) {
                this.next();
            }
            else {
                return;
            }
        }
    };
    SurveyJSON5.prototype.word = function () {
        // true, false, or null.
        switch (this.ch) {
            case 't':
                this.next('t');
                this.next('r');
                this.next('u');
                this.next('e');
                return true;
            case 'f':
                this.next('f');
                this.next('a');
                this.next('l');
                this.next('s');
                this.next('e');
                return false;
            case 'n':
                this.next('n');
                this.next('u');
                this.next('l');
                this.next('l');
                return null;
            case 'I':
                this.next('I');
                this.next('n');
                this.next('f');
                this.next('i');
                this.next('n');
                this.next('i');
                this.next('t');
                this.next('y');
                return Infinity;
            case 'N':
                this.next('N');
                this.next('a');
                this.next('N');
                return NaN;
        }
        this.error("Unexpected '" + this.ch + "'");
    };
    SurveyJSON5.prototype.array = function () {
        // Parse an array value.
        var array = [];
        if (this.ch === '[') {
            this.next('[');
            this.white();
            while (this.ch) {
                if (this.ch === ']') {
                    this.next(']');
                    return array; // Potentially empty array
                }
                // ES5 allows omitting elements in arrays, e.g. [,] and
                // [,null]. We don't allow this in JSON5.
                if (this.ch === ',') {
                    this.error("Missing array element");
                }
                else {
                    array.push(this.value());
                }
                this.white();
                // If there's no comma after this value, this needs to
                // be the end of the array.
                if (this.ch !== ',') {
                    this.next(']');
                    return array;
                }
                this.next(',');
                this.white();
            }
        }
        this.error("Bad array");
    };
    SurveyJSON5.prototype.object = function () {
        // Parse an object value.
        var key, start, isFirstProperty = true, object = {};
        if (this.parseType > 0) {
            object[SurveyJSON5.positionName] = { start: this.at - 1 };
        }
        if (this.ch === '{') {
            this.next('{');
            this.white();
            start = this.at - 1;
            while (this.ch) {
                if (this.ch === '}') {
                    if (this.parseType > 0) {
                        object[SurveyJSON5.positionName].end = start;
                    }
                    this.next('}');
                    return object; // Potentially empty object
                }
                // Keys can be unquoted. If they are, they need to be
                // valid JS identifiers.
                if (this.ch === '"' || this.ch === "'") {
                    key = this.string();
                }
                else {
                    key = this.identifier();
                }
                this.white();
                if (this.parseType > 1) {
                    object[SurveyJSON5.positionName][key] = { start: start, valueStart: this.at };
                }
                this.next(':');
                object[key] = this.value();
                if (this.parseType > 1) {
                    start = this.at - 1;
                    object[SurveyJSON5.positionName][key].valueEnd = start;
                    object[SurveyJSON5.positionName][key].end = start;
                }
                this.white();
                // If there's no comma after this pair, this needs to be
                // the end of the object.
                if (this.ch !== ',') {
                    if (this.parseType > 1) {
                        object[SurveyJSON5.positionName][key].valueEnd--;
                        object[SurveyJSON5.positionName][key].end--;
                    }
                    if (this.parseType > 0) {
                        object[SurveyJSON5.positionName].end = this.at - 1;
                    }
                    this.next('}');
                    return object;
                }
                if (this.parseType > 1) {
                    object[SurveyJSON5.positionName][key].valueEnd--;
                    if (!isFirstProperty) {
                        object[SurveyJSON5.positionName][key].end--;
                    }
                }
                this.next(',');
                this.white();
                isFirstProperty = false;
            }
        }
        this.error("Bad object");
    };
    SurveyJSON5.prototype.value = function () {
        // Parse a JSON value. It could be an object, an array, a string, a number,
        // or a word.
        this.white();
        switch (this.ch) {
            case '{':
                return this.object();
            case '[':
                return this.array();
            case '"':
            case "'":
                return this.string();
            case '-':
            case '+':
            case '.':
                return this.number();
            default:
                return this.ch >= '0' && this.ch <= '9' ? this.number() : this.word();
        }
    };
    SurveyJSON5.prototype.stringify = function (obj, replacer, space) {
        if (replacer === void 0) { replacer = null; }
        if (space === void 0) { space = null; }
        if (replacer && (typeof (replacer) !== "function" && !this.isArray(replacer))) {
            throw new Error('Replacer must be a function or an array');
        }
        this.replacer = replacer;
        this.indentStr = this.getIndent(space);
        this.objStack = [];
        // special case...when undefined is used inside of
        // a compound object/array, return null.
        // but when top-level, return undefined
        var topLevelHolder = { "": obj };
        if (obj === undefined) {
            return this.getReplacedValueOrUndefined(topLevelHolder, '', true);
        }
        return this.internalStringify(topLevelHolder, '', true);
    };
    SurveyJSON5.prototype.getIndent = function (space) {
        if (space) {
            if (typeof space === "string") {
                return space;
            }
            else if (typeof space === "number" && space >= 0) {
                return this.makeIndent(" ", space, true);
            }
        }
        return "";
    };
    SurveyJSON5.prototype.getReplacedValueOrUndefined = function (holder, key, isTopLevel) {
        var value = holder[key];
        // Replace the value with its toJSON value first, if possible
        if (value && value.toJSON && typeof value.toJSON === "function") {
            value = value.toJSON();
        }
        // If the user-supplied replacer if a function, call it. If it's an array, check objects' string keys for
        // presence in the array (removing the key/value pair from the resulting JSON if the key is missing).
        if (typeof (this.replacer) === "function") {
            return this.replacer.call(holder, key, value);
        }
        else if (this.replacer) {
            if (isTopLevel || this.isArray(holder) || this.replacer.indexOf(key) >= 0) {
                return value;
            }
            else {
                return undefined;
            }
        }
        else {
            return value;
        }
    };
    SurveyJSON5.prototype.isWordChar = function (char) {
        return (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9') ||
            char === '_' || char === '$';
    };
    SurveyJSON5.prototype.isWordStart = function (char) {
        return (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            char === '_' || char === '$';
    };
    SurveyJSON5.prototype.isWord = function (key) {
        if (typeof key !== 'string') {
            return false;
        }
        if (!this.isWordStart(key[0])) {
            return false;
        }
        var i = 1, length = key.length;
        while (i < length) {
            if (!this.isWordChar(key[i])) {
                return false;
            }
            i++;
        }
        return true;
    };
    // polyfills
    SurveyJSON5.prototype.isArray = function (obj) {
        if (Array.isArray) {
            return Array.isArray(obj);
        }
        else {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }
    };
    SurveyJSON5.prototype.isDate = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
    };
    SurveyJSON5.prototype.isNaN = function (val) {
        return typeof val === 'number' && val !== val;
    };
    SurveyJSON5.prototype.checkForCircular = function (obj) {
        for (var i = 0; i < this.objStack.length; i++) {
            if (this.objStack[i] === obj) {
                throw new TypeError("Converting circular structure to JSON");
            }
        }
    };
    SurveyJSON5.prototype.makeIndent = function (str, num, noNewLine) {
        if (noNewLine === void 0) { noNewLine = false; }
        if (!str) {
            return "";
        }
        // indentation no more than 10 chars
        if (str.length > 10) {
            str = str.substring(0, 10);
        }
        var indent = noNewLine ? "" : "\n";
        for (var i = 0; i < num; i++) {
            indent += str;
        }
        return indent;
    };
    SurveyJSON5.prototype.escapeString = function (str) {
        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.
        SurveyJSON5.escapable.lastIndex = 0;
        return SurveyJSON5.escapable.test(str) ? '"' + str.replace(SurveyJSON5.escapable, function (a) {
            var c = SurveyJSON5.meta[a];
            return typeof c === 'string' ?
                c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + str + '"';
    };
    // End
    SurveyJSON5.prototype.internalStringify = function (holder, key, isTopLevel) {
        var buffer, res;
        // Replace the value, if necessary
        var obj_part = this.getReplacedValueOrUndefined(holder, key, isTopLevel);
        if (obj_part && !this.isDate(obj_part)) {
            // unbox objects
            // don't unbox dates, since will turn it into number
            obj_part = obj_part.valueOf();
        }
        switch (typeof obj_part) {
            case "boolean":
                return obj_part.toString();
            case "number":
                if (isNaN(obj_part) || !isFinite(obj_part)) {
                    return "null";
                }
                return obj_part.toString();
            case "string":
                return this.escapeString(obj_part.toString());
            case "object":
                if (obj_part === null) {
                    return "null";
                }
                else if (this.isArray(obj_part)) {
                    this.checkForCircular(obj_part);
                    buffer = "[";
                    this.objStack.push(obj_part);
                    for (var i = 0; i < obj_part.length; i++) {
                        res = this.internalStringify(obj_part, i, false);
                        buffer += this.makeIndent(this.indentStr, this.objStack.length);
                        if (res === null || typeof res === "undefined") {
                            buffer += "null";
                        }
                        else {
                            buffer += res;
                        }
                        if (i < obj_part.length - 1) {
                            buffer += ",";
                        }
                        else if (this.indentStr) {
                            buffer += "\n";
                        }
                    }
                    this.objStack.pop();
                    buffer += this.makeIndent(this.indentStr, this.objStack.length, true) + "]";
                }
                else {
                    this.checkForCircular(obj_part);
                    buffer = "{";
                    var nonEmpty = false;
                    this.objStack.push(obj_part);
                    for (var prop in obj_part) {
                        if (obj_part.hasOwnProperty(prop)) {
                            var value = this.internalStringify(obj_part, prop, false);
                            isTopLevel = false;
                            if (typeof value !== "undefined" && value !== null) {
                                buffer += this.makeIndent(this.indentStr, this.objStack.length);
                                nonEmpty = true;
                                var propKey = this.isWord(prop) ? prop : this.escapeString(prop);
                                buffer += propKey + ":" + (this.indentStr ? ' ' : '') + value + ",";
                            }
                        }
                    }
                    this.objStack.pop();
                    if (nonEmpty) {
                        buffer = buffer.substring(0, buffer.length - 1) + this.makeIndent(this.indentStr, this.objStack.length) + "}";
                    }
                    else {
                        buffer = '{}';
                    }
                }
                return buffer;
            default:
                // functions and undefined should be ignored
                return undefined;
        }
    };
    return SurveyJSON5;
}());

SurveyJSON5.positionName = "pos";
SurveyJSON5.escapee = {
    "'": "'",
    '"': '"',
    '\\': '\\',
    '/': '/',
    '\n': '',
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t'
};
SurveyJSON5.ws = [
    ' ',
    '\t',
    '\r',
    '\n',
    '\v',
    '\f',
    '\xA0',
    '\uFEFF'
];
// Copied from Crokford's implementation of JSON
// See https://github.com/douglascrockford/JSON-js/blob/e39db4b7e6249f04a195e7dd0840e610cc9e941e/json2.js#L195
// Begin
SurveyJSON5.cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
SurveyJSON5.escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
SurveyJSON5.meta = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\'
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_knockout__);
/* unused harmony export DragDropTargetElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropHelper; });

var DragDropTargetElement = (function () {
    function DragDropTargetElement(page, target, source) {
        this.page = page;
        this.target = target;
        this.source = source;
    }
    DragDropTargetElement.prototype.moveTo = function (destination, isBottom, isEdge) {
        if (isEdge === void 0) { isEdge = false; }
        if (destination === this.target)
            return !this.target.isPanel;
        var destInfo = this.findInfo(destination, isEdge);
        if (!destInfo) {
            this.clear();
            return false;
        }
        var targetInfo = this.findInfo(this.target);
        this.updateInfo(destInfo, isBottom, isEdge);
        if (this.isInfoEquals(targetInfo, destInfo))
            return true;
        this.clearByInfo(targetInfo);
        destInfo = this.findInfo(destination, isEdge);
        if (!destInfo)
            return false;
        this.updateInfo(destInfo, isBottom, isEdge);
        if (!this.canMove(destInfo))
            return false;
        this.addInfo(destInfo);
        return true;
    };
    DragDropTargetElement.prototype.doDrop = function () {
        var destInfo = this.findInfo(this.target);
        if (!destInfo)
            return;
        var index = this.getIndexByInfo(destInfo);
        destInfo.panel.addElement(this.getNewTargetElement(), index);
        if (this.source) {
            var srcInfo = this.findInfo(this.source);
            var panel = srcInfo ? srcInfo.panel : this.page;
            panel.removeElement(this.source);
        }
    };
    DragDropTargetElement.prototype.clear = function () {
        this.clearByInfo(this.findInfo(this.target));
    };
    DragDropTargetElement.prototype.getIndexByInfo = function (info) {
        if (!info)
            return 0;
        var rows = info.panel.koRows();
        var index = 0;
        for (var i = 0; i < info.rIndex; i++) {
            index += rows[i]["koElements"]().length;
        }
        return index + info.elIndex;
    };
    DragDropTargetElement.prototype.canMove = function (destInfo) {
        if (this.target.isPanel && destInfo.element) {
            if (this.target == destInfo.element || this.target.containsElement(destInfo.element))
                return false;
            if (this.source && (this.source == destInfo.element || this.source.containsElement(destInfo.element)))
                return false;
        }
        if (!this.source)
            return true;
        var srcInfo = this.findInfo(this.source);
        if (srcInfo == null || srcInfo.panel != destInfo.panel)
            return true;
        var srcIndex = this.getIndexByInfo(srcInfo);
        var destIndex = this.getIndexByInfo(destInfo);
        var diff = destIndex - srcIndex;
        return diff < 0 || diff > 1;
    };
    DragDropTargetElement.prototype.isLastElementInRow = function (info) {
        return info.elIndex == info.panel["koRows"]()[info.rIndex]["koElements"]().length - 1;
    };
    DragDropTargetElement.prototype.updateInfo = function (info, isBottom, isEdge) {
        if (info.rIndex < 0)
            return;
        if (this.target.startWithNewLine) {
            if (isBottom)
                info.rIndex++;
        }
        else {
            if (isBottom) {
                info.elIndex++;
            }
            else {
                if (info.elIndex == 0 && info.rIndex > 0) {
                    info.rIndex--;
                    info.elIndex = info.panel["koRows"]()[info.rIndex]["koElements"]().length;
                }
            }
        }
    };
    DragDropTargetElement.prototype.addInfo = function (info) {
        if (this.target.startWithNewLine || info.elIndex < 1
            || info.rIndex < 0 || info.rIndex >= info.panel.koRows().length) {
            this.AddInfoAsRow(info);
        }
        else {
            var row = info.panel.koRows()[info.rIndex];
            var elements = row["koElements"]();
            if (info.elIndex < elements.length) {
                elements.splice(info.elIndex, 0, this.target);
            }
            else {
                elements.push(this.target);
            }
            row["koElements"](elements);
            row.updateVisible();
        }
    };
    DragDropTargetElement.prototype.AddInfoAsRow = function (info) {
        var row = new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["QuestionRow"](info.panel);
        if (this.target.isPanel) {
            this.target.parent = info.panel;
        }
        row.addElement(this.target);
        var rows = info.panel.koRows();
        if (info.rIndex >= 0 && info.rIndex < info.panel.koRows().length) {
            rows.splice(info.rIndex, 0, row);
        }
        else {
            rows.push(row);
        }
        info.panel.koRows(rows);
    };
    DragDropTargetElement.prototype.clearByInfo = function (info) {
        if (info == null)
            return;
        var rows = info.panel.koRows();
        if (info.rIndex < 0 || info.rIndex >= rows.length)
            return;
        var row = rows[info.rIndex];
        var elements = row["koElements"]();
        if (row["koElements"]().length > 1) {
            elements.splice(info.elIndex, 1);
            row["koElements"](elements);
            row.updateVisible();
        }
        else {
            rows.splice(info.rIndex, 1);
            info.panel.koRows(rows);
        }
    };
    DragDropTargetElement.prototype.isInfoEquals = function (a, b) {
        if (a == null || b == null)
            return false;
        return a.panel === b.panel && a.rIndex === b.rIndex && a.elIndex === b.elIndex;
    };
    DragDropTargetElement.prototype.findInfo = function (el, isEdge) {
        if (isEdge === void 0) { isEdge = false; }
        return this.findInfoInPanel(this.page, el, isEdge);
    };
    DragDropTargetElement.prototype.findInfoInPanel = function (panel, el, isEdge) {
        if (el == panel) {
            var parent = panel;
            if (this.target.isPanel && panel.parent) {
                parent = panel.parent;
            }
            return { panel: parent, row: null, rIndex: 0, elIndex: 0, element: panel };
        }
        var rows = panel["koRows"]();
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var elements = row["koElements"]();
            for (var j = 0; j < elements.length; j++) {
                if (!isEdge && elements[j].isPanel) {
                    var res = this.findInfoInPanel(elements[j], el, isEdge);
                    if (res) {
                        if (res.element == elements[j]) {
                            res.rIndex = i;
                            res.elIndex = j;
                        }
                        return res;
                    }
                }
                else {
                    if (elements[j] == el)
                        return { panel: panel, row: row, rIndex: i, elIndex: j, element: elements[j] };
                }
            }
        }
        return null;
    };
    DragDropTargetElement.prototype.getNewTargetElement = function () {
        var result = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"].metaData.createClass(this.target.getType());
        var json = new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toJsonObject(this.target);
        new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toObject(json, result);
        return result;
    };
    return DragDropTargetElement;
}());

var DragDropHelper = (function () {
    function DragDropHelper(data, onModifiedCallback, scrollableElName) {
        if (scrollableElName === void 0) { scrollableElName = null; }
        this.data = data;
        this.scrollableElement = null;
        this.ddTarget = null;
        this.id = DragDropHelper.counter++;
        this.isScrollStop = true;
        this.onModifiedCallback = onModifiedCallback;
        this.scrollableElement = document.getElementById((scrollableElName ? scrollableElName : "scrollableDiv"));
    }
    Object.defineProperty(DragDropHelper.prototype, "survey", {
        get: function () { return this.data; },
        enumerable: true,
        configurable: true
    });
    DragDropHelper.prototype.startDragQuestion = function (event, element) {
        var json = new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toJsonObject(element);
        json["type"] = element.getType();
        this.prepareData(event, element.name, json);
        this.ddTarget.source = element;
    };
    DragDropHelper.prototype.startDragToolboxItem = function (event, elementName, elementJson) {
        this.prepareData(event, elementName, elementJson);
    };
    DragDropHelper.prototype.isSurveyDragging = function (event) {
        if (!event)
            return false;
        var data = this.getData(event).text;
        return data && data.indexOf(DragDropHelper.dataStart) == 0;
    };
    DragDropHelper.prototype.doDragDropOver = function (event, element, isEdge) {
        if (isEdge === void 0) { isEdge = false; }
        event = this.getEvent(event);
        this.checkScrollY(event);
        if (!element || !this.isSurveyDragging(event) || this.isSamePlace(event, element))
            return;
        var bottomInfo = this.isBottom(event, element);
        isEdge = isEdge && bottomInfo.isEdge;
        this.ddTarget.moveTo(element, bottomInfo.isBottom, isEdge);
    };
    DragDropHelper.prototype.end = function () {
        if (this.ddTarget) {
            this.ddTarget.clear();
        }
        this.isScrollStop = true;
        this.clearData();
    };
    DragDropHelper.prototype.doDrop = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.isSurveyDragging(event)) {
            this.ddTarget.doDrop();
        }
        this.end();
    };
    DragDropHelper.prototype.doLeavePage = function (event) {
        this.ddTarget.clear();
    };
    DragDropHelper.prototype.scrollToElement = function (el) {
        if (!this.scrollableElement || !el)
            return;
        el.scrollIntoView(false);
    };
    DragDropHelper.prototype.createTargetElement = function (elementName, json) {
        if (!elementName || !json)
            return null;
        var targetElement = null;
        targetElement = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"].metaData.createClass(json["type"]);
        new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toObject(json, targetElement);
        targetElement.name = elementName;
        targetElement.setData(this.survey);
        targetElement.renderWidth = "100%";
        targetElement["koIsDragging"](true);
        return targetElement;
    };
    DragDropHelper.prototype.isBottom = function (event, surveyEl) {
        event = this.getEvent(event);
        var height = event.currentTarget["clientHeight"];
        var y = event.offsetY;
        if (event.hasOwnProperty('layerX')) {
            y = event.layerY - event.currentTarget["offsetTop"];
        }
        return { isBottom: y > height / 2, isEdge: y <= DragDropHelper.edgeHeight || height - y <= DragDropHelper.edgeHeight };
    };
    DragDropHelper.prototype.isSamePlace = function (event, element) {
        var prev = DragDropHelper.prevEvent;
        if (prev.element != element || Math.abs(event.clientX - prev.x) > 5 || Math.abs(event.clientY - prev.y) > 5) {
            prev.element = element;
            prev.x = event.clientX;
            prev.y = event.clientY;
            return false;
        }
        return true;
    };
    DragDropHelper.prototype.checkScrollY = function (e) {
        if (!this.scrollableElement)
            return;
        var y = this.getScrollableElementPosY(e);
        if (y < 0)
            return;
        this.isScrollStop = true;
        var height = this.scrollableElement["clientHeight"];
        if (y < DragDropHelper.ScrollOffset && y >= 0) {
            this.isScrollStop = false;
            this.doScrollY(-1);
        }
        if (height - y < DragDropHelper.ScrollOffset && height >= y) {
            this.isScrollStop = false;
            this.doScrollY(1);
        }
    };
    DragDropHelper.prototype.doScrollY = function (step) {
        var el = this.scrollableElement;
        var scrollY = el.scrollTop + step;
        if (scrollY < 0) {
            this.isScrollStop = true;
            return;
        }
        el.scrollTop = scrollY;
        var self = this;
        if (!this.isScrollStop) {
            setTimeout(function () { self.doScrollY(step); }, DragDropHelper.ScrollDelay);
        }
    };
    DragDropHelper.prototype.getScrollableElementPosY = function (e) {
        if (!this.scrollableElement || !e.currentTarget)
            return -1;
        var el = e.currentTarget;
        var offsetTop = 0;
        while (el && el != this.scrollableElement) {
            offsetTop += el["offsetTop"];
            el = el["offsetParent"];
        }
        return e.offsetY + e.currentTarget["offsetTop"] - this.scrollableElement.offsetTop - this.scrollableElement.scrollTop;
    };
    DragDropHelper.prototype.getEvent = function (event) {
        return event["originalEvent"] ? event["originalEvent"] : event;
    };
    DragDropHelper.prototype.getY = function (element) {
        var result = 0;
        while (element) {
            result += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return result;
    };
    DragDropHelper.prototype.prepareData = function (event, elementName, json) {
        var str = DragDropHelper.dataStart + "questionname:" + elementName;
        this.setData(event, str);
        var targetElement = this.createTargetElement(elementName, json);
        this.ddTarget = new DragDropTargetElement(this.survey.currentPage, targetElement, null);
    };
    DragDropHelper.prototype.setData = function (event, text) {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            event.dataTransfer.setData("Text", text);
            event.dataTransfer.effectAllowed = "copy";
        }
        DragDropHelper.dragData = { text: text };
    };
    DragDropHelper.prototype.getData = function (event) {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            var text = event.dataTransfer.getData("Text");
            if (text) {
                DragDropHelper.dragData.text = text;
            }
        }
        return DragDropHelper.dragData;
    };
    DragDropHelper.prototype.clearData = function () {
        //this.ddTarget = null;
        DragDropHelper.dragData = { text: "", json: null };
        var prev = DragDropHelper.prevEvent;
        prev.element = null;
        prev.x = -1;
        prev.y = -1;
    };
    return DragDropHelper;
}());

DragDropHelper.edgeHeight = 20;
DragDropHelper.dataStart = "surveyjs,";
DragDropHelper.dragData = { text: "", json: null };
DragDropHelper.prevEvent = { element: null, x: -1, y: -1 };
DragDropHelper.counter = 1;
DragDropHelper.ScrollDelay = 30;
DragDropHelper.ScrollOffset = 100;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjectProperty; });



var SurveyObjectProperty = (function () {
    function SurveyObjectProperty(property, onPropertyChanged, propertyEditorOptions) {
        if (onPropertyChanged === void 0) { onPropertyChanged = null; }
        if (propertyEditorOptions === void 0) { propertyEditorOptions = null; }
        this.property = property;
        this.isApplyingNewValue = false;
        this.onPropertyChanged = onPropertyChanged;
        this.name = this.property.name;
        this.disabled = property["readOnly"];
        this.koValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.choices = property.choices;
        var self = this;
        this.editorType = property.type;
        //TODO
        if (this.choices != null) {
            this.editorType = "dropdown";
        }
        var onItemChanged = function (newValue) { self.onApplyEditorValue(newValue); };
        this.editor = __WEBPACK_IMPORTED_MODULE_1__propertyEditors_propertyEditorBase__["a" /* SurveyPropertyEditorBase */].createEditor(this.editorType, onItemChanged);
        this.editor.options = propertyEditorOptions;
        this.editorType = this.editor.editorType;
        this.modalName = "modelEditor" + this.editorType + this.name;
        this.modalNameTarget = "#" + this.modalName;
        this.koValue.subscribe(function (newValue) { self.onkoValueChanged(newValue); });
        this.koText = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.getValueText(self.koValue()); });
        this.koIsDefault = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.property.isDefaultValue(self.koValue()); });
    }
    Object.defineProperty(SurveyObjectProperty.prototype, "object", {
        get: function () { return this.objectValue; },
        set: function (value) {
            this.objectValue = value;
            this.updateValue();
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjectProperty.prototype.updateValue = function () {
        this.isValueUpdating = true;
        this.koValue(this.getValue());
        this.editor.setObject(this.object);
        this.editor.setTitle(__WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("pe.editProperty")["format"](this.property.name));
        this.updateEditorData(this.koValue());
        this.isValueUpdating = false;
    };
    SurveyObjectProperty.prototype.onApplyEditorValue = function (newValue) {
        this.isApplyingNewValue = true;
        this.koValue(newValue);
        this.isApplyingNewValue = false;
    };
    SurveyObjectProperty.prototype.onkoValueChanged = function (newValue) {
        if (!this.isApplyingNewValue) {
            this.updateEditorData(newValue);
        }
        if (this.object == null)
            return;
        if (this.getValue() == newValue)
            return;
        if (this.onPropertyChanged != null && !this.isValueUpdating)
            this.onPropertyChanged(this, newValue);
    };
    SurveyObjectProperty.prototype.updateEditorData = function (newValue) {
        this.editor.value = newValue;
    };
    SurveyObjectProperty.prototype.getValue = function () {
        if (this.property.hasToUseGetValue)
            return this.property.getValue(this.object);
        return this.object[this.name];
    };
    SurveyObjectProperty.prototype.getValueText = function (value) { return this.editor.getValueText(value); };
    return SurveyObjectProperty;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyHelper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyVerbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyVerbItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyVerbChangeTypeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyVerbChangePageItem; });





var SurveyVerbs = (function () {
    function SurveyVerbs(onModifiedCallback) {
        this.onModifiedCallback = onModifiedCallback;
        this.koVerbs = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.koHasVerbs = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        var classes = __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"].metaData.getChildrenClasses("selectbase", true);
        this.choicesClasses = [];
        for (var i = 0; i < classes.length; i++) {
            this.choicesClasses.push(classes[i].name);
        }
    }
    Object.defineProperty(SurveyVerbs.prototype, "survey", {
        get: function () { return this.surveyValue; },
        set: function (value) {
            if (this.survey == value)
                return;
            this.surveyValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyVerbs.prototype, "obj", {
        get: function () { return this.objValue; },
        set: function (value) {
            if (this.objValue == value)
                return;
            this.objValue = value;
            this.buildVerbs();
        },
        enumerable: true,
        configurable: true
    });
    SurveyVerbs.prototype.buildVerbs = function () {
        var array = [];
        var objType = __WEBPACK_IMPORTED_MODULE_3__surveyHelper__["b" /* SurveyHelper */].getObjectType(this.obj);
        if (objType == __WEBPACK_IMPORTED_MODULE_3__surveyHelper__["a" /* ObjType */].Question) {
            var question = this.obj;
            if (this.survey.pages.length > 1) {
                array.push(new SurveyVerbChangePageItem(this.survey, question, this.onModifiedCallback));
            }
            if (this.choicesClasses.indexOf(question.getType()) > -1) {
                array.push(new SurveyVerbChangeTypeItem(this.survey, question, this.onModifiedCallback));
            }
        }
        this.koVerbs(array);
        this.koHasVerbs(array.length > 0);
    };
    return SurveyVerbs;
}());

var SurveyVerbItem = (function () {
    function SurveyVerbItem(survey, question, onModifiedCallback) {
        this.survey = survey;
        this.question = question;
        this.onModifiedCallback = onModifiedCallback;
        this.koItems = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.koSelectedItem = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
    }
    Object.defineProperty(SurveyVerbItem.prototype, "text", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return SurveyVerbItem;
}());

var SurveyVerbChangeTypeItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyVerbChangeTypeItem, _super);
    function SurveyVerbChangeTypeItem(survey, question, onModifiedCallback) {
        var _this = _super.call(this, survey, question, onModifiedCallback) || this;
        _this.survey = survey;
        _this.question = question;
        _this.onModifiedCallback = onModifiedCallback;
        var classes = __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"].metaData.getChildrenClasses("selectbase", true);
        var array = [];
        for (var i = 0; i < classes.length; i++) {
            array.push({ value: classes[i].name, text: __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("qt." + classes[i].name) });
        }
        _this.koItems(array);
        _this.koSelectedItem(question.getType());
        var self = _this;
        _this.koSelectedItem.subscribe(function (newValue) { self.changeType(newValue); });
        return _this;
    }
    Object.defineProperty(SurveyVerbChangeTypeItem.prototype, "text", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("pe.verbChangeType"); },
        enumerable: true,
        configurable: true
    });
    SurveyVerbChangeTypeItem.prototype.changeType = function (questionType) {
        if (questionType == this.question.getType())
            return;
        var page = this.survey.getPageByQuestion(this.question);
        var index = page.questions.indexOf(this.question);
        var newQuestion = __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["QuestionFactory"].Instance.createQuestion(questionType, this.question.name);
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"]();
        var json = jsonObj.toJsonObject(this.question);
        jsonObj.toObject(json, newQuestion);
        page.removeQuestion(this.question);
        page.addQuestion(newQuestion, index);
        if (this.onModifiedCallback)
            this.onModifiedCallback();
    };
    return SurveyVerbChangeTypeItem;
}(SurveyVerbItem));

var SurveyVerbChangePageItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyVerbChangePageItem, _super);
    function SurveyVerbChangePageItem(survey, question, onModifiedCallback) {
        var _this = _super.call(this, survey, question, onModifiedCallback) || this;
        _this.survey = survey;
        _this.question = question;
        _this.onModifiedCallback = onModifiedCallback;
        var array = [];
        for (var i = 0; i < _this.survey.pages.length; i++) {
            var page = _this.survey.pages[i];
            array.push({ value: page, text: __WEBPACK_IMPORTED_MODULE_3__surveyHelper__["b" /* SurveyHelper */].getObjectName(page) });
        }
        _this.koItems(array);
        _this.prevPage = _this.survey.getPageByQuestion(question);
        _this.koSelectedItem(_this.prevPage);
        var self = _this;
        _this.koSelectedItem.subscribe(function (newValue) { self.changePage(newValue); });
        return _this;
    }
    Object.defineProperty(SurveyVerbChangePageItem.prototype, "text", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("pe.verbChangePage"); },
        enumerable: true,
        configurable: true
    });
    SurveyVerbChangePageItem.prototype.changePage = function (newPage) {
        if (newPage == null || newPage == this.prevPage)
            return;
        this.prevPage.removeQuestion(this.question);
        newPage.addQuestion(this.question);
        if (this.onModifiedCallback)
            this.onModifiedCallback();
    };
    return SurveyVerbChangePageItem;
}(SurveyVerbItem));



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPagesEditor; });


var SurveyPagesEditor = (function () {
    function SurveyPagesEditor(onAddNewPageCallback, onSelectPageCallback, onMovePageCallback, onDeletePageCallback) {
        if (onAddNewPageCallback === void 0) { onAddNewPageCallback = null; }
        if (onSelectPageCallback === void 0) { onSelectPageCallback = null; }
        if (onMovePageCallback === void 0) { onMovePageCallback = null; }
        if (onDeletePageCallback === void 0) { onDeletePageCallback = null; }
        this.draggingPage = null;
        this.koPages = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koIsValid = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.onAddNewPageCallback = onAddNewPageCallback;
        this.onSelectPageCallback = onSelectPageCallback;
        this.onMovePageCallback = onMovePageCallback;
        this.onDeletePageCallback = onDeletePageCallback;
        var self = this;
        this.selectPageClick = function (pageItem) {
            if (self.onSelectPageCallback) {
                self.onSelectPageCallback(pageItem.page);
            }
        };
        this.keyDown = function (el, e) { self.onKeyDown(el, e); };
        this.dragStart = function (el) { self.draggingPage = el; };
        this.dragOver = function (el) { };
        this.dragEnd = function () { self.draggingPage = null; };
        this.dragDrop = function (el) { self.moveDraggingPageTo(el); };
    }
    Object.defineProperty(SurveyPagesEditor.prototype, "survey", {
        get: function () { return this.surveyValue; },
        set: function (value) {
            this.surveyValue = value;
            this.koIsValid(this.surveyValue != null);
            this.updatePages();
        },
        enumerable: true,
        configurable: true
    });
    SurveyPagesEditor.prototype.setSelectedPage = function (page) {
        var pages = this.koPages();
        for (var i = 0; i < pages.length; i++) {
            pages[i].koSelected(pages[i].page == page);
        }
    };
    SurveyPagesEditor.prototype.addNewPageClick = function () {
        if (this.onAddNewPageCallback) {
            this.onAddNewPageCallback();
        }
    };
    SurveyPagesEditor.prototype.removePage = function (page) {
        var index = this.getIndexByPage(page);
        if (index > -1) {
            this.koPages.splice(index, 1);
        }
    };
    SurveyPagesEditor.prototype.changeName = function (page) {
        var index = this.getIndexByPage(page);
        if (index > -1) {
            this.koPages()[index].title(__WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(page));
        }
    };
    SurveyPagesEditor.prototype.getIndexByPage = function (page) {
        var pages = this.koPages();
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].page == page)
                return i;
        }
        return -1;
    };
    SurveyPagesEditor.prototype.onKeyDown = function (el, e) {
        if (this.koPages().length <= 1)
            return;
        var pages = this.koPages();
        var pageIndex = -1;
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].page && pages[i].koSelected()) {
                pageIndex = i;
            }
        }
        if (pageIndex < 0)
            return;
        if (e.keyCode == 46 && this.onDeletePageCallback)
            this.onDeletePageCallback(el.page);
        if ((e.keyCode == 37 || e.keyCode == 39) && this.onSelectPageCallback) {
            pageIndex += (e.keyCode == 37 ? -1 : 1);
            if (pageIndex < 0)
                pageIndex = pages.length - 1;
            if (pageIndex >= pages.length)
                pageIndex = 0;
            var page = pages[pageIndex].page;
            this.onSelectPageCallback(page);
            this.setSelectedPage(page);
        }
    };
    SurveyPagesEditor.prototype.updatePages = function () {
        if (this.surveyValue == null) {
            this.koPages([]);
            return;
        }
        var pages = [];
        for (var i = 0; i < this.surveyValue.pages.length; i++) {
            var page = this.surveyValue.pages[i];
            pages.push({
                title: __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](__WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(page)), page: page, koSelected: __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false)
            });
        }
        this.koPages(pages);
    };
    SurveyPagesEditor.prototype.moveDraggingPageTo = function (toPage) {
        if (toPage == null || toPage == this.draggingPage) {
            this.draggingPage = null;
            return;
        }
        if (this.draggingPage == null)
            return;
        var index = this.koPages().indexOf(this.draggingPage);
        var indexTo = this.koPages().indexOf(toPage);
        if (this.onMovePageCallback) {
            this.onMovePageCallback(index, indexTo);
        }
    };
    return SurveyPagesEditor;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyValidatorsEditor; });
/* unused harmony export SurveyPropertyValidatorItem */






var SurveyPropertyValidatorsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyValidatorsEditor, _super);
    function SurveyPropertyValidatorsEditor() {
        var _this = _super.call(this) || this;
        _this.availableValidators = [];
        _this.validatorClasses = [];
        var self = _this;
        _this.selectedObjectEditor = new __WEBPACK_IMPORTED_MODULE_4__objectEditor__["a" /* SurveyObjectEditor */]();
        _this.selectedObjectEditor.onPropertyValueChanged.add(function (sender, options) {
            self.onPropertyValueChanged(options.property, options.object, options.newValue);
        });
        _this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koSelected.subscribe(function (newValue) { self.selectedObjectEditor.selectedObject = newValue != null ? newValue.validator : null; });
        _this.validatorClasses = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.getChildrenClasses("surveyvalidator", true);
        _this.availableValidators = _this.getAvailableValidators();
        _this.onDeleteClick = function () { self.koItems.remove(self.koSelected()); };
        _this.onAddClick = function (validatorType) { self.addItem(validatorType); };
        return _this;
    }
    Object.defineProperty(SurveyPropertyValidatorsEditor.prototype, "editorType", {
        get: function () { return "validators"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyValidatorsEditor.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        if (this.koSelected) {
            this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
        }
    };
    SurveyPropertyValidatorsEditor.prototype.createEditorItem = function (item) {
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"]();
        var validator = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(item.getType());
        jsonObj.toObject(item, validator);
        return new SurveyPropertyValidatorItem(validator);
    };
    SurveyPropertyValidatorsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var item = editorItem;
        return item.validator;
    };
    SurveyPropertyValidatorsEditor.prototype.addItem = function (validatorType) {
        var newValidator = new SurveyPropertyValidatorItem(__WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(validatorType));
        this.koItems.push(newValidator);
        this.koSelected(newValidator);
    };
    SurveyPropertyValidatorsEditor.prototype.getAvailableValidators = function () {
        var result = [];
        for (var i = 0; i < this.validatorClasses.length; i++) {
            result.push(this.validatorClasses[i].name);
        }
        return result;
    };
    SurveyPropertyValidatorsEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
        if (this.koSelected() == null)
            return;
        this.koSelected().validator[property.name] = newValue;
    };
    return SurveyPropertyValidatorsEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyPropertyValidatorItem = (function () {
    function SurveyPropertyValidatorItem(validator) {
        this.validator = validator;
        this.text = validator.getType();
    }
    return SurveyPropertyValidatorItem;
}());

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("validators", function () { return new SurveyPropertyValidatorsEditor(); });


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionEditorDefinition; });

var SurveyQuestionEditorDefinition = (function () {
    function SurveyQuestionEditorDefinition() {
    }
    SurveyQuestionEditorDefinition.getProperties = function (className) {
        var properties = [];
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        for (var i = allDefinitions.length - 1; i >= 0; i--) {
            var def = allDefinitions[i];
            if (def.properties) {
                for (var j = 0; j < def.properties.length; j++) {
                    properties.push(def.properties[j]);
                }
            }
        }
        return properties;
    };
    SurveyQuestionEditorDefinition.getTabs = function (className) {
        var tabs = [];
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        for (var i = allDefinitions.length - 1; i >= 0; i--) {
            var def = allDefinitions[i];
            if (def.tabs) {
                for (var j = 0; j < def.tabs.length; j++) {
                    tabs.push(def.tabs[j]);
                }
            }
        }
        tabs.sort(function (a, b) { return a.index < b.index ? -1 : (a.index > b.index ? 1 : 0); });
        return tabs;
    };
    SurveyQuestionEditorDefinition.getAllDefinitionsByClass = function (className) {
        var result = [];
        if (className.indexOf('@') > -1 && SurveyQuestionEditorDefinition.definition[className]) {
            result.push(SurveyQuestionEditorDefinition.definition[className]);
            return result;
        }
        while (className) {
            var metaClass = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"].metaData["findClass"](className);
            if (!metaClass)
                break;
            if (SurveyQuestionEditorDefinition.definition[metaClass.name]) {
                result.push(SurveyQuestionEditorDefinition.definition[metaClass.name]);
            }
            className = metaClass.parentName;
        }
        return result;
    };
    return SurveyQuestionEditorDefinition;
}());

SurveyQuestionEditorDefinition.definition = {
    "questionbase": {
        properties: ["name", "title", { name: "visible", category: "checks" }, { name: "isRequired", category: "checks" }, { name: "startWithNewLine", category: "checks" }],
        tabs: [{ name: "visibleIf", index: 100 }]
    },
    "comment": {
        properties: ["rows", "placeHolder"]
    },
    "file": {
        properties: [{ name: "showPreview", category: "imageChecks" }, { name: "storeDataAsText", category: "imageChecks" }, "maxSize", "imageHeight", "imageWidth"]
    },
    "html": {
        tabs: [{ name: "html", index: 10 }]
    },
    "matrixdropdownbase": {
        properties: ["cellType"],
        tabs: [{ name: "columns", index: 10 }, { name: "rows", index: 11 }, { name: "choices", index: 12 }]
    },
    "matrixdynamic": {
        properties: ["rowCount", "addRowText", "removeRowText"]
    },
    "matrix": {
        tabs: [{ name: "columns", index: 10 }, { name: "rows", index: 11 }]
    },
    "multipletext": {
        properties: ["colCount"],
        tabs: [{ name: "items", index: 10 }]
    },
    "rating": {
        properties: ["minRateDescription", "maxRateDescription"],
        tabs: [{ name: "rateValues", index: 10 }]
    },
    "selectbase": {
        properties: ["hasOther", "choicesOrder", "colCount"],
        tabs: [{ name: "choices", index: 10 }, { name: "choicesByUrl", index: 11 }]
    },
    "dropdown": {
        properties: ["optionsCaption"]
    },
    "text": {
        properties: ["inputType", "placeHolder"]
    },
    "matrixdropdowncolumn@checkbox": {
        properties: ["hasOther", "choicesOrder", "colCount"],
        tabs: [{ name: "choices", index: 10 }, { name: "choicesByUrl", index: 11 }]
    },
    "matrixdropdowncolumn@radiogroup": {
        properties: ["hasOther", "choicesOrder", "colCount"],
        tabs: [{ name: "choices", index: 10 }, { name: "choicesByUrl", index: 11 }]
    },
    "matrixdropdowncolumn@dropdown": {
        properties: ["hasOther", "choicesOrder", "optionsCaption"],
        tabs: [{ name: "choices", index: 10 }, { name: "choicesByUrl", index: 11 }]
    },
    "matrixdropdowncolumn@text": {
        properties: ["inputType", "placeHolder"]
    },
    "matrixdropdowncolumn@comment": {
        properties: ["placeHolder"]
    },
    "panel": {
        properties: ["name", "title", { name: "visible", category: "checks" }],
        tabs: [{ name: "visibleIf", index: 100 }]
    }
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyQuestionEditorGeneralProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionEditorGeneralRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionEditorGeneralProperties; });



var SurveyQuestionEditorGeneralProperty = (function () {
    function SurveyQuestionEditorGeneralProperty(obj, property, isRequired) {
        if (isRequired === void 0) { isRequired = false; }
        this.obj = obj;
        this.property = property;
        this.isRequired = isRequired;
        this.choices = [];
        this.name = property.name;
        this.disabled = property["readOnly"];
        this.editType = "text";
        if (property.type == "text")
            this.editType = "textarea";
        if (property.type == "boolean")
            this.editType = "check";
        if (property.choices) {
            this.choices = property.choices;
            this.editType = "dropdown";
        }
        this.koValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koErrorText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koHasError = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.title = __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString("pe." + this.name);
        if (!this.title)
            this.title = this.name;
        this.reset();
    }
    SurveyQuestionEditorGeneralProperty.prototype.hasError = function () {
        var isError = this.isRequired && (this.koValue() !== false) && !this.koValue();
        this.koErrorText(isError ? __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString("pe.propertyIsEmpty") : "");
        this.koHasError(isError);
        return isError;
    };
    SurveyQuestionEditorGeneralProperty.prototype.apply = function () {
        this.obj[this.name] = this.koValue();
    };
    SurveyQuestionEditorGeneralProperty.prototype.reset = function () {
        this.koValue(this.getValue());
    };
    SurveyQuestionEditorGeneralProperty.prototype.getValue = function () {
        if (this.property.hasToUseGetValue)
            return this.property.getValue(this.obj);
        return this.obj[this.name];
    };
    return SurveyQuestionEditorGeneralProperty;
}());

var SurveyQuestionEditorGeneralRow = (function () {
    function SurveyQuestionEditorGeneralRow(obj, property, isPropertyRequired) {
        if (isPropertyRequired === void 0) { isPropertyRequired = false; }
        this.obj = obj;
        this.properties = [];
        this.addProperty(property, isPropertyRequired);
    }
    SurveyQuestionEditorGeneralRow.prototype.addProperty = function (property, isPropertyRequired) {
        if (isPropertyRequired === void 0) { isPropertyRequired = false; }
        this.properties.push(new SurveyQuestionEditorGeneralProperty(this.obj, property, isPropertyRequired));
    };
    SurveyQuestionEditorGeneralRow.prototype.hasError = function () {
        var isError = false;
        for (var i = 0; i < this.properties.length; i++) {
            isError = this.properties[i].hasError() || isError;
        }
        return isError;
    };
    return SurveyQuestionEditorGeneralRow;
}());

var SurveyQuestionEditorGeneralProperties = (function () {
    function SurveyQuestionEditorGeneralProperties(obj, properties, onCanShowPropertyCallback) {
        if (onCanShowPropertyCallback === void 0) { onCanShowPropertyCallback = null; }
        this.obj = obj;
        this.rows = [];
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.properties = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.getProperties(this.obj.getType());
        this.buildRows(properties);
    }
    SurveyQuestionEditorGeneralProperties.prototype.apply = function () {
        this.applyOrReset(true);
    };
    SurveyQuestionEditorGeneralProperties.prototype.reset = function () {
        this.applyOrReset(false);
    };
    SurveyQuestionEditorGeneralProperties.prototype.hasError = function () {
        var isError = false;
        for (var i = 0; i < this.rows.length; i++) {
            isError = this.rows[i].hasError() || isError;
        }
        return isError;
    };
    SurveyQuestionEditorGeneralProperties.prototype.applyOrReset = function (isApply) {
        for (var i = 0; i < this.rows.length; i++) {
            for (var j = 0; j < this.rows[i].properties.length; j++) {
                if (isApply)
                    this.rows[i].properties[j].apply();
                else
                    this.rows[i].properties[j].reset();
            }
        }
    };
    SurveyQuestionEditorGeneralProperties.prototype.buildRows = function (properties) {
        var requiredProperties = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.getRequiredProperties(this.obj.getType());
        if (!requiredProperties)
            requiredProperties = [];
        for (var i = 0; i < properties.length; i++) {
            var name = this.getName(properties[i]);
            var jsonProperty = this.getProperty(name);
            if (!jsonProperty)
                continue;
            var isPropertyRequired = requiredProperties.indexOf(name) > -1;
            var row = this.getRowByCategory(properties[i].category);
            if (row)
                row.addProperty(jsonProperty, isPropertyRequired);
            else {
                row = new SurveyQuestionEditorGeneralRow(this.obj, jsonProperty, isPropertyRequired);
                if (properties[i].category)
                    row.category = properties[i].category;
                this.rows.push(row);
            }
            if (properties[i].title) {
                row.properties[row.properties.length - 1].title = properties[i].title;
            }
        }
    };
    SurveyQuestionEditorGeneralProperties.prototype.getName = function (prop) {
        if (!prop)
            return null;
        if (typeof prop === "string")
            return prop;
        if (prop.name)
            return prop.name;
        return null;
    };
    SurveyQuestionEditorGeneralProperties.prototype.getRowByCategory = function (category) {
        if (!category)
            return null;
        for (var i = 0; i < this.rows.length; i++) {
            if (this.rows[i].category == category)
                return this.rows[i];
        }
        return null;
    };
    SurveyQuestionEditorGeneralProperties.prototype.getProperty = function (propertyName) {
        if (!propertyName)
            return null;
        var property = null;
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == propertyName) {
                property = this.properties[i];
                break;
            }
        }
        //TODO code duplication. This code is in 3 places already, do refactoring.
        if (property && property["visible"] === false)
            property = null;
        if (property && this.onCanShowPropertyCallback) {
            if (!this.onCanShowPropertyCallback(this.obj, property))
                property = null;
        }
        return property;
    };
    return SurveyQuestionEditorGeneralProperties;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionToolbox; });



var QuestionToolbox = (function () {
    function QuestionToolbox(supportedQuestions) {
        if (supportedQuestions === void 0) { supportedQuestions = null; }
        this.orderedQuestions = ["text", "checkbox", "radiogroup", "dropdown", "comment", "rating", "html"];
        this.copiedItemMaxCount = 3;
        this.itemsValue = [];
        this.koItems = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.createDefaultItems(supportedQuestions);
    }
    Object.defineProperty(QuestionToolbox.prototype, "jsonText", {
        get: function () {
            return JSON.stringify(this.itemsValue);
        },
        set: function (value) {
            this.itemsValue = (value) ? JSON.parse(value) : [];
            this.onItemsChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "copiedJsonText", {
        get: function () {
            return JSON.stringify(this.copiedItems);
        },
        set: function (value) {
            var newItems = (value) ? JSON.parse(value) : [];
            this.clearCopiedItems();
            for (var i = 0; i < newItems.length; i++) {
                newItems[i].isCopied = true;
                this.addItem(newItems[i]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "items", {
        get: function () { return this.itemsValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "copiedItems", {
        get: function () {
            var result = [];
            for (var i = 0; i < this.itemsValue.length; i++) {
                if (this.itemsValue[i].isCopied)
                    result.push(this.itemsValue[i]);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    QuestionToolbox.prototype.addItems = function (items, clearAll) {
        if (clearAll === void 0) { clearAll = false; }
        if (clearAll) {
            this.clearItems();
        }
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.addCopiedItem = function (question) {
        var item = { name: question.name, title: question.name, isCopied: true, iconName: "icon-default", json: this.getQuestionJSON(question) };
        if (this.replaceItem(item))
            return;
        var copied = this.copiedItems;
        if (this.copiedItemMaxCount > 0 && copied.length == this.copiedItemMaxCount)
            this.removeItem(copied[this.copiedItemMaxCount - 1].name);
        this.addItem(item);
    };
    QuestionToolbox.prototype.addItem = function (item) {
        this.itemsValue.push(item);
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.replaceItem = function (item) {
        var index = this.indexOf(item.name);
        if (index < 0)
            return;
        this.itemsValue[index] = item;
        this.onItemsChanged();
        return true;
    };
    QuestionToolbox.prototype.removeItem = function (name) {
        var index = this.indexOf(name);
        if (index < 0)
            return false;
        this.itemsValue.splice(index, 1);
        this.onItemsChanged();
        return true;
    };
    QuestionToolbox.prototype.clearItems = function () {
        this.itemsValue = [];
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.clearCopiedItems = function () {
        var removedItems = this.copiedItems;
        for (var i = 0; i < removedItems.length; i++) {
            this.removeItem(removedItems[i].name);
        }
    };
    QuestionToolbox.prototype.onItemsChanged = function () {
        this.koItems(this.itemsValue);
    };
    QuestionToolbox.prototype.indexOf = function (name) {
        for (var i = 0; i < this.itemsValue.length; i++) {
            if (this.itemsValue[i].name == name)
                return i;
        }
        return -1;
    };
    QuestionToolbox.prototype.createDefaultItems = function (supportedQuestions) {
        var questions = this.getQuestionTypes(supportedQuestions);
        for (var i = 0; i < questions.length; i++) {
            var name = questions[i];
            var question = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["ElementFactory"].Instance.createElement(name, "q1");
            if (!question) {
                question = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.createClass(name);
            }
            var json = this.getQuestionJSON(question);
            var item = { name: name, iconName: 'icon-' + name, title: __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString('qt.' + name), json: json, isCopied: false };
            this.itemsValue.push(item);
        }
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.getQuestionJSON = function (question) {
        var json = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(question);
        json.type = question.getType();
        return json;
    };
    QuestionToolbox.prototype.getQuestionTypes = function (supportedQuestions) {
        var allTypes = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["ElementFactory"].Instance.getAllTypes();
        if (!supportedQuestions || supportedQuestions.length == 0)
            supportedQuestions = allTypes;
        var questions = [];
        for (var i = 0; i < this.orderedQuestions.length; i++) {
            var name = this.orderedQuestions[i];
            if (supportedQuestions.indexOf(name) > -1 && allTypes.indexOf(name) > -1)
                questions.push(name);
        }
        for (var i = 0; i < supportedQuestions.length; i++) {
            var name = supportedQuestions[i];
            if (questions.indexOf(supportedQuestions[i]) < 0 && allTypes.indexOf(name) > -1)
                questions.push(name);
        }
        return questions;
    };
    return QuestionToolbox;
}());



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json5__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEmbedingWindow; });


var SurveyEmbedingWindow = (function () {
    function SurveyEmbedingWindow() {
        this.surveyId = null;
        this.surveyPostId = null;
        this.generateValidJSON = false;
        this.surveyJSVersion = "0.12.3"; //TODO
        this.surveyCDNPath = "https://surveyjs.azureedge.net/";
        this.platformSurveyJSPrefix = {
            "angular": "angular",
            "jquery": "jquery",
            "knockout": "ko",
            "react": "react",
            "vue": "vue"
        };
        /*
        private platformHeaders = {
            "angular": "",
            "jquery": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>",
            "knockout": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js\"></script>",
            "react": "",
            "vue": "<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js'></script>"
        };*/
        this.platformJSonPage = {
            "angular": "@Component({\n  selector: 'ng-app',\n        template: \n        <div id='surveyElement'></div>\",\n})\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n       Survey.SurveyNG.render(\"surveyElement\", { model: survey });\n    }\n}",
            "jquery": "var survey = new Survey.Model(surveyJSON);\n$(\"#surveyContainer\").Survey({\n    model: survey,\n    onComplete: sendDataToServer\n});",
            "knockout": "var survey = new Survey.Model(surveyJSON, \"surveyContainer\");\nsurvey.onComplete.add(sendDataToServer);",
            "react": "ReactDOM.render(\n    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById(\"surveyContainer\"));",
            "vue": "var survey = new Survey.Model(surveyJSON);\nnew Vue({ el: '#surveyContainer', data: { survey: survey } });"
        };
        this.platformJSonWindow = {
            "angular": "@Component({\n  selector: 'ng-app',\n        template: \n        <div id='surveyElement'></div>\",\n})\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n       Survey.SurveyWindowNG.render(\"surveyElement\", { model: survey });\n    }\n}",
            "jquery": "var survey = new Survey.Model(surveyJSON);\n$(\"#surveyContainer\").SurveyWindow({\n    model: survey,\n    onComplete: sendDataToServer\n});",
            "knockout": "var survey = new Survey.Model(surveyJSON);\nsurveyWindow.show();\nsurvey.onComplete.add(sendDataToServer);",
            "react": "ReactDOM.render(\n    <Survey.SurveyWindow json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById(\"surveyContainer\"));",
            "vue": ""
        };
        this.platformHtmlonPage = {
            "angular": "<ng-app></ng-app>",
            "jquery": "<div id=\"surveyContainer\"></div>",
            "knockout": "<div id=\"surveyContainer\"></div>",
            "react": "<div id=\"surveyContainer\"></div>",
            "vue": "<div id=\"surveyContainer\"><survey :survey=\"survey\"></survey></div>"
        };
        this.platformHtmlonWindow = {
            "angular": "<ng-app></ng-app>",
            "jquery": "<div id=\"surveyContainer\"></div>",
            "knockout": "",
            "react": "<div id=\"surveyContainer\"></div>",
            "vue": "<div id='surveyContainer'><survey-window :survey='survey'></survey-window></div>"
        };
        var self = this;
        this.koLibraryVersion = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("jquery");
        this.koShowAsWindow = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("page");
        this.koScriptUsing = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("bootstrap");
        this.koHasIds = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koLoadSurvey = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koHeadText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koJavaText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koBodyText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koVisibleHtml = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.koShowAsWindow() == "page" || self.platformHtmlonWindow[self.koLibraryVersion()] != ""; });
        this.koLibraryVersion.subscribe(function (newValue) { self.setHeadText(); self.setJavaTest(); self.setBodyText(); });
        this.koShowAsWindow.subscribe(function (newValue) { self.setJavaTest(); self.setBodyText(); });
        this.koScriptUsing.subscribe(function (newValue) { self.setHeadText(); self.setJavaTest(); });
        this.koLoadSurvey.subscribe(function (newValue) { self.setJavaTest(); });
        this.surveyEmbedingHead = null;
    }
    Object.defineProperty(SurveyEmbedingWindow.prototype, "json", {
        get: function () { return this.jsonValue; },
        set: function (value) { this.jsonValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEmbedingWindow.prototype, "hasAceEditor", {
        get: function () { return typeof ace !== "undefined"; },
        enumerable: true,
        configurable: true
    });
    SurveyEmbedingWindow.prototype.show = function () {
        if (this.hasAceEditor && this.surveyEmbedingHead == null) {
            this.surveyEmbedingHead = this.createEditor("surveyEmbedingHead");
            this.surveyEmbedingBody = this.createEditor("surveyEmbedingBody");
            this.surveyEmbedingJava = this.createEditor("surveyEmbedingJava");
        }
        this.koHasIds(this.surveyId && this.surveyPostId);
        this.setBodyText();
        this.setHeadText();
        this.setJavaTest();
    };
    SurveyEmbedingWindow.prototype.setBodyText = function () {
        this.setTextToEditor(this.surveyEmbedingBody, this.koBodyText, this.platformHtmlonPage[this.koLibraryVersion()]);
    };
    Object.defineProperty(SurveyEmbedingWindow.prototype, "getCDNPath", {
        get: function () { return this.surveyCDNPath + this.surveyJSVersion + "/"; },
        enumerable: true,
        configurable: true
    });
    SurveyEmbedingWindow.prototype.setHeadText = function () {
        var str = "<!-- Your platform (" + this.koLibraryVersion() + ") scripts. -->\n";
        if (this.koScriptUsing() != "bootstrap") {
            str += "\n<link href=\"" + this.getCDNPath + "survey.css\" type=\"text/css\" rel=\"stylesheet\" />";
        }
        str += "\n<script src=\"" + this.getCDNPath + "survey." + this.platformSurveyJSPrefix[this.koLibraryVersion()] + " .min.js\"></script>";
        this.setTextToEditor(this.surveyEmbedingHead, this.koHeadText, str);
    };
    SurveyEmbedingWindow.prototype.setJavaTest = function () {
        this.setTextToEditor(this.surveyEmbedingJava, this.koJavaText, this.getJavaText());
    };
    SurveyEmbedingWindow.prototype.createEditor = function (elementName) {
        var editor = ace.edit(elementName);
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/json");
        editor.setShowPrintMargin(false);
        editor.renderer.setShowGutter(false);
        editor.setReadOnly(true);
        return editor;
    };
    SurveyEmbedingWindow.prototype.getJavaText = function () {
        var isOnPage = this.koShowAsWindow() == "page";
        var str = this.getSaveFunc() + "\n\n";
        str += isOnPage ? this.platformJSonPage[this.koLibraryVersion()] : this.platformJSonWindow[this.koLibraryVersion()];
        var jsonText = "var surveyJSON = " + this.getJsonText() + "\n\n";
        return this.getSetCss() + "\n" + jsonText + str;
    };
    SurveyEmbedingWindow.prototype.getSetCss = function () {
        if (this.koScriptUsing() != "bootstrap")
            return "";
        return "Survey.Survey.cssType = \"bootstrap\";\n";
    };
    SurveyEmbedingWindow.prototype.getSaveFunc = function () {
        return "function sendDataToServer(survey) {\n" + this.getSaveFuncCode() + "\n}";
    };
    SurveyEmbedingWindow.prototype.getSaveFuncCode = function () {
        if (this.koHasIds())
            return "    survey.sendResult('" + this.surveyPostId + "');";
        return "    //send Ajax request to your web server.\n    alert(\"The results are:\" + JSON.stringify(s.data));";
    };
    SurveyEmbedingWindow.prototype.getJsonText = function () {
        if (this.koHasIds() && this.koLoadSurvey()) {
            return "{ surveyId: '" + this.surveyId + "'}";
        }
        if (this.generateValidJSON)
            return JSON.stringify(this.json);
        return new __WEBPACK_IMPORTED_MODULE_1__json5__["a" /* SurveyJSON5 */]().stringify(this.json);
    };
    SurveyEmbedingWindow.prototype.setTextToEditor = function (editor, koText, text) {
        if (editor)
            editor.setValue(text);
        if (koText)
            koText(text);
    };
    return SurveyEmbedingWindow;
}());



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(6);
/* unused harmony export SurveyObjectItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjects; });


var SurveyObjectItem = (function () {
    function SurveyObjectItem() {
        this.level = 0;
    }
    return SurveyObjectItem;
}());

var SurveyObjects = (function () {
    function SurveyObjects(koObjects, koSelected) {
        this.koObjects = koObjects;
        this.koSelected = koSelected;
    }
    Object.defineProperty(SurveyObjects.prototype, "survey", {
        get: function () { return this.surveyValue; },
        set: function (value) {
            if (this.survey == value)
                return;
            this.surveyValue = value;
            this.rebuild();
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjects.prototype.addPage = function (page) {
        this.addElement(page, null);
    };
    SurveyObjects.prototype.addElement = function (element, parent) {
        var parentIndex = parent != null ? this.getItemIndex(parent) : 0;
        if (parentIndex < 0)
            return;
        var elements = parent != null ? parent.elements : this.survey.pages;
        var elementIndex = elements.indexOf(element);
        var newIndex = elementIndex + 1 + parentIndex;
        if (elementIndex > 0) {
            var prevElement = elements[elementIndex - 1];
            newIndex = this.getItemIndex(prevElement) + this.getAllElementCount(prevElement) + 1;
        }
        var item = this.createItem(element, this.koObjects()[parentIndex]);
        this.addItem(item, newIndex);
        if (element.elements) {
            var objs = [];
            this.buildElements(objs, element.elements, item);
            for (var i = 0; i < objs.length; i++) {
                this.koObjects.splice(newIndex + 1 + i, 0, objs[i]);
            }
        }
        this.koSelected(item);
    };
    SurveyObjects.prototype.selectObject = function (obj) {
        var objs = this.koObjects();
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].value == obj) {
                this.koSelected(objs[i]);
                return;
            }
        }
    };
    SurveyObjects.prototype.removeObject = function (obj) {
        var index = this.getItemIndex(obj);
        if (index < 0)
            return;
        var countToRemove = 1 + this.getAllElementCount(obj);
        this.koObjects.splice(index, countToRemove);
    };
    SurveyObjects.prototype.nameChanged = function (obj) {
        var index = this.getItemIndex(obj);
        if (index < 0)
            return;
        this.koObjects()[index].text(this.getText(this.koObjects()[index]));
    };
    SurveyObjects.prototype.selectNextQuestion = function (isUp) {
        var question = this.getSelectedQuestion();
        var itemIndex = this.getItemIndex(question);
        if (itemIndex < 0)
            return question;
        var objs = this.koObjects();
        var newItemIndex = itemIndex + (isUp ? -1 : 1);
        if (newItemIndex < objs.length && __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(objs[newItemIndex].value) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question) {
            itemIndex = newItemIndex;
        }
        else {
            newItemIndex = itemIndex;
            while (newItemIndex < objs.length && __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(objs[newItemIndex].value) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question) {
                itemIndex = newItemIndex;
                newItemIndex += (isUp ? 1 : -1);
            }
        }
        this.koSelected(objs[itemIndex]);
    };
    SurveyObjects.prototype.getAllElementCount = function (element) {
        if (!element.elements)
            return 0;
        var res = 0;
        for (var i = 0; i < element.elements.length; i++) {
            res += 1 + this.getAllElementCount(element.elements[i]);
        }
        return res;
    };
    SurveyObjects.prototype.getSelectedQuestion = function () {
        if (!this.koSelected())
            return null;
        var obj = this.koSelected().value;
        if (!obj)
            return null;
        return __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question ? (obj) : null;
    };
    SurveyObjects.prototype.addItem = function (item, index) {
        if (index > this.koObjects().length) {
            this.koObjects.push(item);
        }
        else {
            this.koObjects.splice(index, 0, item);
        }
    };
    SurveyObjects.prototype.rebuild = function () {
        var objs = [];
        if (this.survey == null) {
            this.koObjects(objs);
            this.koSelected(null);
            return;
        }
        var root = this.createItem(this.survey, null);
        objs.push(root);
        for (var i = 0; i < this.survey.pages.length; i++) {
            var page = this.survey.pages[i];
            var pageItem = this.createItem(page, root);
            objs.push(pageItem);
            this.buildElements(objs, page.elements, pageItem);
        }
        this.koObjects(objs);
        this.koSelected(this.survey);
    };
    SurveyObjects.prototype.buildElements = function (objs, elements, parentItem) {
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (el.isPanel) {
                var panelItem = this.createItem(el, parentItem);
                objs.push(panelItem);
                this.buildElements(objs, el.elements, panelItem);
            }
            else {
                objs.push(this.createItem(el, parentItem));
            }
        }
    };
    SurveyObjects.prototype.createItem = function (value, parent) {
        var item = new SurveyObjectItem();
        item.value = value;
        item.level = parent != null ? parent.level + 1 : 0;
        item.text = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.getText(item));
        return item;
    };
    SurveyObjects.prototype.getItemIndex = function (value) {
        var objs = this.koObjects();
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].value == value)
                return i;
        }
        return -1;
    };
    SurveyObjects.prototype.getText = function (item) {
        if (item.level == 0)
            return "Survey";
        var intend = SurveyObjects.intend;
        for (var i = 1; i < item.level; i++) {
            intend += SurveyObjects.intend;
        }
        return intend + __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(item.value);
    };
    return SurveyObjects;
}());

SurveyObjects.intend = ".";


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyForDesigner; });




var SurveyForDesigner = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyForDesigner, _super);
    function SurveyForDesigner(jsonObj, renderedElement, css) {
        if (jsonObj === void 0) { jsonObj = null; }
        if (renderedElement === void 0) { renderedElement = null; }
        if (css === void 0) { css = null; }
        var _this = _super.call(this, jsonObj, renderedElement, css) || this;
        _this.onSelectedElementChanged = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onEditQuestion = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onCopyQuestion = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onFastCopyQuestion = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onDeleteCurrentObject = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        var self = _this;
        _this.setDesignMode(true);
        _this.onAfterRenderPage.add(function (sender, options) { options.page["onAfterRenderPage"](options.htmlElement); });
        _this.onAfterRenderQuestion.add(function (sender, options) { options.question["onAfterRenderQuestion"](options.htmlElement); });
        _this.onAfterRenderPanel.add(function (sender, options) { options.panel["onAfterRenderPanel"](options.htmlElement); });
        _this.editQuestionClick = function () { self.onEditQuestion.fire(self, null); };
        _this.copyQuestionClick = function () { self.onCopyQuestion.fire(self, null); };
        _this.fastCopyQuestionClick = function () { self.onFastCopyQuestion.fire(self, null); };
        _this.deleteCurrentObjectClick = function () { self.onDeleteCurrentObject.fire(self, null); };
        return _this;
    }
    Object.defineProperty(SurveyForDesigner.prototype, "selectedElement", {
        get: function () { return this.selectedElementValue; },
        set: function (value) {
            if (value == this.selectedElementValue)
                return;
            var oldValue = this.selectedElementValue;
            this.selectedElementValue = value;
            if (oldValue != null) {
                oldValue["onSelectedElementChanged"]();
            }
            if (this.selectedElementValue != null) {
                this.selectedElementValue["onSelectedElementChanged"]();
            }
            this.onSelectedElementChanged.fire(this, { 'oldElement': oldValue, 'newElement': value });
        },
        enumerable: true,
        configurable: true
    });
    SurveyForDesigner.prototype.getEditorLocString = function (value) {
        return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString(value);
    };
    return SurveyForDesigner;
}(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Survey"]));

function panelBaseOnCreating(self) {
    self.dragEnterCounter = 0;
    self.emptyElement = null;
    self.koRows.subscribe(function (changes) {
        if (self.emptyElement) {
            self.emptyElement.style.display = self.koRows().length > 0 ? "none" : "";
        }
    });
}
function elementOnCreating(self, className) {
    self.dragDropHelperValue = null;
    self.dragDropHelper = function () {
        if (self.dragDropHelperValue == null) {
            self.dragDropHelperValue = self.data["dragDropHelper"];
        }
        return self.dragDropHelperValue;
    };
    self.renderedElement = null;
    self.addonsElement = null;
    self.koIsDragging = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
    self.koIsSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
    self.koIsDragging.subscribe(function (newValue) {
        if (self.renderedElement) {
            self.renderedElement.style.opacity = newValue ? 0.4 : 1;
        }
    });
    self.koIsSelected.subscribe(function (newValue) {
        if (self.renderedElement) {
            var newClass = className;
            if (newValue)
                newClass += " svd_q_selected ";
            self.renderedElement.className = newClass;
        }
        if (self.addonsElement) {
            self.addonsElement.style.display = newValue ? "" : "none";
        }
    });
}
function addEmptyPanelElement(root, dragDropHelper, self) {
    var eDiv = document.createElement("div");
    eDiv.className = "well";
    eDiv.ondragover = function (e) {
        dragDropHelper.doDragDropOver(e, self);
    };
    var eSpan = document.createElement("span");
    eSpan.textContent = self.data.getEditorLocString('survey.dropQuestion');
    eDiv.appendChild(eSpan);
    root.appendChild(eDiv);
    return eDiv;
}
var question_design_class = "svd_question well well-sm svd_q_design_border";
var panel_design_class = "svd_question well well-sm svd_q_design_border";
function createQuestionDesignItem(onClick, text) {
    var res = document.createElement("li");
    var btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = onClick;
    btn.className = "btn btn-primary btn-xs";
    res.appendChild(btn);
    return res;
}
function createElementAddons(data, isPanel) {
    var main = document.createElement("div");
    main.className = "svd_question_menu btn-group";
    main["role"] = "group";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary  btn-xs";
    btn.onclick = function (e) { data.editQuestionClick(); };
    var span = document.createElement("span");
    span.innerText = "Edit"; //TODO
    btn.appendChild(span);
    main.appendChild(btn);
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary  btn-xs dropdown-toggle";
    btn.setAttribute("data-toggle", "dropdown");
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    span = document.createElement("span");
    span.className = "glyphicon glyphicon-option-horizontal";
    btn.appendChild(span);
    main.appendChild(btn);
    var ul = document.createElement("ul");
    ul.className = "dropdown-menu";
    ul.appendChild(createQuestionDesignItem(data.copyQuestionClick, data.getEditorLocString('survey.addToToolbox')));
    ul.appendChild(createQuestionDesignItem(data.fastCopyQuestionClick, data.getEditorLocString('survey.copy')));
    var deleteLocaleName = isPanel ? 'survey.deletePanel' : 'survey.deleteQuestion';
    ul.appendChild(createQuestionDesignItem(data.deleteCurrentObjectClick, data.getEditorLocString(deleteLocaleName)));
    main.appendChild(ul);
    return main;
}
//var lastElementOnClick: HTMLElement = null;
function elementOnAfterRendering(el, self, className, isPanel, disable) {
    self.renderedElement = el;
    var newClass = className;
    if (self.koIsSelected())
        newClass += " svd_q_selected";
    el.className = newClass;
    el.style.opacity = self.koIsDragging() ? 0.4 : 1;
    el.draggable = true;
    el.ondragover = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().doDragDropOver(e, self, true);
        }
    };
    el.ondrop = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().doDrop(e);
        }
    };
    el.ondragstart = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().startDragQuestion(e, self);
        }
    };
    el.ondragend = function (e) {
        self.dragDropHelper().end();
    };
    el.onclick = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            self.data["selectedElement"] = self;
        }
    };
    el.onkeydown = function (e) {
        if (e.witch == 46)
            self.data.deleteCurrentObjectClick();
        return true;
    };
    if (disable) {
        var childs = el.childNodes;
        for (var i = 0; i < childs.length; i++) {
            if (childs[i].style)
                childs[i].style.pointerEvents = "none";
        }
    }
    self.addonsElement = createElementAddons(self.data, isPanel);
    self.addonsElement.style.display = self.koIsSelected() ? "" : "none";
    el.appendChild(self.addonsElement);
}
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Page"].prototype["onCreating"] = function () {
    panelBaseOnCreating(this);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Page"].prototype["onAfterRenderPage"] = function (el) {
    if (!this.data.isDesignMode)
        return;
    var self = this;
    var dragDropHelper = this.data["dragDropHelper"];
    this.dragEnterCounter = 0;
    el.ondragenter = function (e) {
        e.preventDefault();
        self.dragEnterCounter++;
    };
    el.ondragleave = function (e) {
        self.dragEnterCounter--;
        if (self.dragEnterCounter === 0)
            dragDropHelper.doLeavePage(e);
    };
    el.ondragover = function (e) { return false; };
    el.ondrop = function (e) { dragDropHelper.doDrop(e); };
    if (this.elements.length == 0) {
        this.emptyElement = addEmptyPanelElement(el, dragDropHelper, self);
    }
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onCreating"] = function () {
    panelBaseOnCreating(this);
    elementOnCreating(this, panel_design_class);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onAfterRenderPanel"] = function (el) {
    if (!this.data.isDesignMode)
        return;
    var rows = this.koRows();
    var self = this;
    if (this.elements.length == 0) {
        this.emptyElement = addEmptyPanelElement(el, self.dragDropHelper(), self);
    }
    elementOnAfterRendering(el, this, panel_design_class, true, this.koIsDragging());
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onSelectedElementChanged"] = function () {
    if (this.data == null)
        return;
    this.koIsSelected(this.data["selectedElementValue"] == this);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionBase"].prototype["onCreating"] = function () {
    elementOnCreating(this, question_design_class);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionBase"].prototype["onAfterRenderQuestion"] = function (el) {
    if (!this.data.isDesignMode)
        return;
    elementOnAfterRendering(el, this, question_design_class, false, true);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionBase"].prototype["onSelectedElementChanged"] = function () {
    if (this.data == null)
        return;
    this.koIsSelected(this.data["selectedElementValue"] == this);
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyUndoRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UndoRedoItem; });


var SurveyUndoRedo = (function () {
    function SurveyUndoRedo() {
        this.index = -1;
        this.maximumCount = 10;
        this.items = [];
        this.koCanUndo = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koCanRedo = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
    }
    SurveyUndoRedo.prototype.clear = function () {
        this.items = [];
        this.koCanUndo(false);
        this.koCanRedo(false);
    };
    SurveyUndoRedo.prototype.setCurrent = function (survey, selectedObjName) {
        var item = new UndoRedoItem();
        item.surveyJSON = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(survey);
        item.selectedObjName = selectedObjName;
        if (this.index < this.items.length - 1) {
            this.items.splice(this.index + 1);
        }
        this.items.push(item);
        this.removeOldData();
        this.index = this.items.length - 1;
        this.updateCanUndoRedo();
    };
    SurveyUndoRedo.prototype.undo = function () {
        if (!this.canUndo)
            return null;
        return this.doUndoRedo(-1);
    };
    SurveyUndoRedo.prototype.redo = function () {
        if (!this.canRedo)
            return null;
        return this.doUndoRedo(1);
    };
    SurveyUndoRedo.prototype.updateCanUndoRedo = function () {
        this.koCanUndo(this.canUndo);
        this.koCanRedo(this.canRedo);
    };
    SurveyUndoRedo.prototype.doUndoRedo = function (dIndex) {
        this.index += dIndex;
        this.updateCanUndoRedo();
        return this.index >= 0 && this.index < this.items.length ? this.items[this.index] : null;
    };
    Object.defineProperty(SurveyUndoRedo.prototype, "canUndo", {
        get: function () {
            return this.index >= 1 && this.index < this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyUndoRedo.prototype, "canRedo", {
        get: function () {
            return this.items.length > 1 && this.index < this.items.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    SurveyUndoRedo.prototype.removeOldData = function () {
        if (this.items.length - 1 < this.maximumCount)
            return;
        this.items.splice(0, this.items.length - this.maximumCount - 1);
    };
    return SurveyUndoRedo;
}());

var UndoRedoItem = (function () {
    function UndoRedoItem() {
    }
    return UndoRedoItem;
}());



/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagesEditor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyEmbedingWindow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyObjects__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objectVerbs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionEditors_questionEditor__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__textWorker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__undoredo__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__surveyHelper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionToolbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__json5__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__surveyjsObjects__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEditor; });















var templateEditorHtml = __webpack_require__(59);


var SurveyEditor = (function () {
    function SurveyEditor(renderedElement, options) {
        if (renderedElement === void 0) { renderedElement = null; }
        if (options === void 0) { options = null; }
        this.stateValue = "";
        this.dragDropHelper = null;
        this.surveyId = null;
        this.surveyPostId = null;
        this.alwaySaveTextInPropertyEditors = false;
        this.onCanShowProperty = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onQuestionAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onPanelAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onModified = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.saveNo = 0;
        this.koShowOptions = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koGenerateValidJSON = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koDesignerHeight = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.setOptions(options);
        this.koCanDeleteObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        var self = this;
        this.koState = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koShowSaveButton = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koTestSurveyWidth = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("100%");
        this.saveButtonClick = function () { self.doSave(); };
        this.koObjects = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koSelectedObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koSelectedObject.subscribe(function (newValue) { self.selectedObjectChanged(newValue != null ? newValue.value : null); });
        this.koGenerateValidJSON.subscribe(function (newValue) {
            if (!self.options)
                self.options = {};
            self.options.generateValidJSON = newValue;
            if (self.generateValidJSONChangedCallback)
                self.generateValidJSONChangedCallback(newValue);
        });
        this.surveyObjects = new __WEBPACK_IMPORTED_MODULE_5__surveyObjects__["a" /* SurveyObjects */](this.koObjects, this.koSelectedObject);
        this.undoRedo = new __WEBPACK_IMPORTED_MODULE_10__undoredo__["a" /* SurveyUndoRedo */]();
        this.surveyVerbs = new __WEBPACK_IMPORTED_MODULE_6__objectVerbs__["a" /* SurveyVerbs */](function () { self.setModified(); });
        this.selectedObjectEditor = new __WEBPACK_IMPORTED_MODULE_2__objectEditor__["a" /* SurveyObjectEditor */](this.options);
        this.selectedObjectEditor.onCanShowPropertyCallback = function (object, property) {
            return self.onCanShowObjectProperty(object, property);
        };
        this.selectedObjectEditor.onPropertyValueChanged.add(function (sender, options) {
            self.onPropertyValueChanged(options.property, options.object, options.newValue);
        });
        this.questionEditorWindow = new __WEBPACK_IMPORTED_MODULE_7__questionEditors_questionEditor__["a" /* SurveyPropertyEditorShowWindow */]();
        this.questionEditorWindow.onCanShowPropertyCallback = function (object, property) {
            return self.onCanShowObjectProperty(object, property);
        };
        this.pagesEditor = new __WEBPACK_IMPORTED_MODULE_3__pagesEditor__["a" /* SurveyPagesEditor */](function () { self.addPage(); }, function (page) { self.surveyObjects.selectObject(page); }, function (indexFrom, indexTo) { self.movePage(indexFrom, indexTo); }, function (page) { self.deleteCurrentObject(); });
        this.surveyEmbeding = new __WEBPACK_IMPORTED_MODULE_4__surveyEmbedingWindow__["a" /* SurveyEmbedingWindow */]();
        this.toolboxValue = new __WEBPACK_IMPORTED_MODULE_13__questionToolbox__["a" /* QuestionToolbox */](this.options && this.options.questionTypes ? this.options.questionTypes : null);
        this.koViewType = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("designer");
        this.koIsShowDesigner = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.koViewType() == "designer"; });
        this.selectDesignerClick = function () { self.showDesigner(); };
        this.selectEditorClick = function () { self.showJsonEditor(); };
        this.selectTestClick = function () { self.showTestSurvey(); };
        this.selectEmbedClick = function () { self.showEmbedEditor(); };
        this.generateValidJSONClick = function () { self.koGenerateValidJSON(true); };
        this.generateReadableJSONClick = function () { self.koGenerateValidJSON(false); };
        this.runSurveyClick = function () { self.showLiveSurvey(); };
        this.embedingSurveyClick = function () { self.showSurveyEmbeding(); };
        this.deleteObjectClick = function () { self.deleteCurrentObject(); };
        this.draggingToolboxItem = function (item, e) { self.doDraggingToolboxItem(item.json, e); };
        this.clickToolboxItem = function (item) { self.doClickToolboxItem(item.json); };
        this.dragEnd = function (item, e) { self.dragDropHelper.end(); };
        this.doUndoClick = function () { self.doUndoRedo(self.undoRedo.undo()); };
        this.doRedoClick = function () { self.doUndoRedo(self.undoRedo.redo()); };
        this.jsonEditor = new __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__["a" /* SurveyJSONEditor */]();
        this.text = "";
        if (renderedElement) {
            this.render(renderedElement);
        }
    }
    SurveyEditor.prototype.setOptions = function (options) {
        this.options = options;
        this.showJSONEditorTabValue = options && typeof (options.showJSONEditorTab) !== 'undefined' ? options.showJSONEditorTab : true;
        this.showTestSurveyTabValue = options && typeof (options.showTestSurveyTab) !== 'undefined' ? options.showTestSurveyTab : true;
        this.showEmbededSurveyTabValue = options && typeof (options.showEmbededSurveyTab) !== 'undefined' ? options.showEmbededSurveyTab : false;
        this.koShowOptions(options && typeof (options.showOptions) !== 'undefined' ? options.showOptions : false);
        this.koGenerateValidJSON(this.options && this.options.generateValidJSON);
        if (options && options.designerHeight) {
            this.koDesignerHeight(options.designerHeight);
        }
        if (options && options.objectsIntend) {
            __WEBPACK_IMPORTED_MODULE_5__surveyObjects__["a" /* SurveyObjects */].intend = options.objectsIntend;
        }
        this.koDesignerHeight();
        if (this.selectedObjectEditor)
            this.selectedObjectEditor.setOptions(options);
    };
    Object.defineProperty(SurveyEditor.prototype, "survey", {
        get: function () {
            return this.surveyValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.render = function (element, options) {
        if (element === void 0) { element = null; }
        if (options === void 0) { options = null; }
        if (options)
            this.setOptions(options);
        var self = this;
        if (element && typeof element == "string") {
            element = document.getElementById(element);
        }
        if (element) {
            this.renderedElement = element;
        }
        element = this.renderedElement;
        if (!element)
            return;
        element.innerHTML = templateEditorHtml;
        self.applyBinding();
    };
    SurveyEditor.prototype.loadSurvey = function (surveyId) {
        var self = this;
        new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["dxSurveyService"]().loadSurvey(surveyId, function (success, result, response) {
            if (success && result) {
                self.text = JSON.stringify(result);
            }
        });
    };
    Object.defineProperty(SurveyEditor.prototype, "text", {
        get: function () {
            if (this.koIsShowDesigner())
                return this.getSurveyTextFromDesigner();
            return this.jsonEditor.text;
        },
        set: function (value) {
            var textWorker = new __WEBPACK_IMPORTED_MODULE_9__textWorker__["a" /* SurveyTextWorker */](value);
            if (textWorker.isJsonCorrect) {
                this.initSurvey(new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(textWorker.survey));
                this.showDesigner();
                this.setUndoRedoCurrentState(true);
            }
            else {
                this.setTextValue(value);
                this.koViewType("editor");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "toolbox", {
        get: function () { return this.toolboxValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "customToolboxQuestionMaxCount", {
        get: function () { return this.toolbox.copiedItemMaxCount; },
        set: function (value) { this.toolbox.copiedItemMaxCount = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "state", {
        get: function () { return this.stateValue; },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.setState = function (value) {
        this.stateValue = value;
        this.koState(this.state);
    };
    SurveyEditor.prototype.doSave = function () {
        this.setState("saving");
        if (this.saveSurveyFunc) {
            this.saveNo++;
            var self = this;
            this.saveSurveyFunc(this.saveNo, function doSaveCallback(no, isSuccess) {
                self.setState("saved");
                if (self.saveNo == no) {
                    if (isSuccess)
                        self.setState("saved");
                }
            });
        }
    };
    SurveyEditor.prototype.setModified = function () {
        this.setState("modified");
        this.setUndoRedoCurrentState();
        this.onModified.fire(this, null);
    };
    SurveyEditor.prototype.setUndoRedoCurrentState = function (clearState) {
        if (clearState === void 0) { clearState = false; }
        if (clearState) {
            this.undoRedo.clear();
        }
        var selObj = this.koSelectedObject() ? this.koSelectedObject().value : null;
        this.undoRedo.setCurrent(this.surveyValue, selObj ? selObj.name : null);
    };
    Object.defineProperty(SurveyEditor.prototype, "saveSurveyFunc", {
        get: function () { return this.saveSurveyFuncValue; },
        set: function (value) {
            this.saveSurveyFuncValue = value;
            this.koShowSaveButton(value != null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showOptions", {
        get: function () { return this.koShowOptions(); },
        set: function (value) { this.koShowOptions(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showJSONEditorTab", {
        get: function () { return this.showJSONEditorTabValue; },
        set: function (value) { this.showJSONEditorTabValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showTestSurveyTab", {
        get: function () { return this.showTestSurveyTabValue; },
        set: function (value) { this.showTestSurveyTabValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showEmbededSurveyTab", {
        get: function () { return this.showEmbededSurveyTabValue; },
        set: function (value) { this.showEmbededSurveyTabValue = value; },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.onCanShowObjectProperty = function (object, property) {
        var options = { obj: object, property: property, canShow: true };
        this.onCanShowProperty.fire(this, options);
        return options.canShow;
    };
    SurveyEditor.prototype.setTextValue = function (value) {
        this.jsonEditor.text = value;
    };
    SurveyEditor.prototype.addPage = function () {
        var name = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewPageName(this.survey.pages);
        var page = this.surveyValue.addNewPage(name);
        this.addPageToUI(page);
        this.setModified();
    };
    SurveyEditor.prototype.getLocString = function (str) { return __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString(str); };
    SurveyEditor.prototype.movePage = function (indexFrom, indexTo) {
        var page = this.survey.pages[indexFrom];
        this.survey.pages.splice(indexFrom, 1);
        this.survey.pages.splice(indexTo, 0, page);
        this.pagesEditor.survey = this.survey;
        this.surveyObjects.selectObject(page);
        this.setModified();
    };
    SurveyEditor.prototype.addPageToUI = function (page) {
        this.pagesEditor.survey = this.surveyValue;
        this.surveyObjects.addPage(page);
    };
    SurveyEditor.prototype.doOnQuestionAdded = function (question, parentPanel) {
        var page = this.survey.getPageByElement(question);
        var options = { question: question, page: page };
        this.onQuestionAdded.fire(this, options);
        this.surveyObjects.addElement(question, parentPanel);
        this.survey.render();
    };
    SurveyEditor.prototype.doOnElementRemoved = function (question) {
        this.surveyObjects.removeObject(question);
        this.survey.render();
    };
    SurveyEditor.prototype.doOnPanelAdded = function (panel, parentPanel) {
        var page = this.survey.getPageByElement(panel);
        var options = { panel: panel, page: page };
        this.onPanelAdded.fire(this, options);
        this.surveyObjects.addElement(panel, parentPanel);
        this.survey.render();
    };
    SurveyEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
        var isDefault = property.isDefaultValue(newValue);
        obj[property.name] = newValue;
        if (property.name == "name") {
            this.surveyObjects.nameChanged(obj);
            if (__WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
                this.pagesEditor.changeName(obj);
            }
        }
        this.setModified();
        this.survey.render();
    };
    SurveyEditor.prototype.doUndoRedo = function (item) {
        this.initSurvey(item.surveyJSON);
        if (item.selectedObjName) {
            var selObj = this.findObjByName(item.selectedObjName);
            if (selObj) {
                this.surveyObjects.selectObject(selObj);
            }
        }
        this.setState(this.undoRedo.koCanUndo() ? "modified" : "saved");
    };
    SurveyEditor.prototype.findObjByName = function (name) {
        var page = this.survey.getPageByName(name);
        if (page)
            return page;
        var question = this.survey.getQuestionByName(name);
        if (question)
            return question;
        return null;
    };
    SurveyEditor.prototype.canSwitchViewType = function (newType) {
        if (newType && this.koViewType() == newType)
            return false;
        if (this.koViewType() == "designer") {
            this.jsonEditor.text = this.getSurveyTextFromDesigner();
        }
        if (this.koViewType() != "editor")
            return true;
        if (!this.jsonEditor.isJsonCorrect) {
            alert(this.getLocString("ed.correctJSON"));
            return false;
        }
        this.initSurvey(new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.jsonEditor.survey));
        return true;
    };
    SurveyEditor.prototype.showDesigner = function () {
        if (!this.canSwitchViewType("designer"))
            return;
        this.koViewType("designer");
    };
    SurveyEditor.prototype.showJsonEditor = function () {
        if (this.koViewType() == "editor")
            return;
        this.jsonEditor.show(this.getSurveyTextFromDesigner());
        this.koViewType("editor");
    };
    SurveyEditor.prototype.showTestSurvey = function () {
        if (!this.canSwitchViewType(null))
            return;
        this.showLiveSurvey();
        this.koViewType("test");
    };
    SurveyEditor.prototype.showEmbedEditor = function () {
        if (!this.canSwitchViewType("embed"))
            return;
        this.showSurveyEmbeding();
        this.koViewType("embed");
    };
    SurveyEditor.prototype.getSurveyTextFromDesigner = function () {
        var json = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.survey);
        if (this.options && this.options.generateValidJSON)
            return JSON.stringify(json, null, 1);
        return new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().stringify(json, null, 1);
    };
    SurveyEditor.prototype.selectedObjectChanged = function (obj) {
        var canDeleteObject = false;
        this.selectedObjectEditor.selectedObject = obj;
        this.surveyVerbs.obj = obj;
        var objType = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj);
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
            this.survey.currentPage = obj;
            canDeleteObject = this.survey.pages.length > 1;
        }
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question || objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Panel) {
            this.survey.selectedElement = obj;
            canDeleteObject = true;
            this.survey.currentPage = this.survey.getPageByQuestion(this.survey.selectedElement);
        }
        else {
            this.survey.selectedElement = null;
        }
        this.koCanDeleteObject(canDeleteObject);
    };
    SurveyEditor.prototype.applyBinding = function () {
        if (this.renderedElement == null)
            return;
        __WEBPACK_IMPORTED_MODULE_0_knockout__["cleanNode"](this.renderedElement);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"](this, this.renderedElement);
        this.surveyjs = document.getElementById("surveyjs");
        if (this.surveyjs) {
            var self = this;
            this.surveyjs.onkeydown = function (e) {
                if (!e)
                    return;
                if (e.keyCode == 46)
                    self.deleteQuestion();
                if (e.keyCode == 38 || e.keyCode == 40) {
                    self.selectQuestion(e.keyCode == 38);
                }
            };
        }
        this.surveyjsExample = document.getElementById("surveyjsExample");
        this.initSurvey(new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().parse(SurveyEditor.defaultNewSurveyText));
        this.setUndoRedoCurrentState(true);
        this.jsonEditor.init();
    };
    SurveyEditor.prototype.initSurvey = function (json) {
        var self = this;
        this.surveyValue = new __WEBPACK_IMPORTED_MODULE_16__surveyjsObjects__["a" /* SurveyForDesigner */]();
        this.dragDropHelper = new __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__["a" /* DragDropHelper */](this.survey, function () { self.setModified(); });
        this.surveyValue["setJsonObject"](json); //TODO
        if (this.surveyValue.isEmpty) {
            this.surveyValue["setJsonObject"](new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().parse(SurveyEditor.defaultNewSurveyText)); //TODO
        }
        this.surveyValue["dragDropHelper"] = this.dragDropHelper;
        this.survey.render(this.surveyjs);
        this.surveyObjects.survey = this.survey;
        this.pagesEditor.survey = this.survey;
        this.pagesEditor.setSelectedPage(this.survey.currentPage);
        this.surveyVerbs.survey = this.survey;
        this.surveyValue.onSelectedElementChanged.add(function (sender, options) { self.surveyObjects.selectObject(sender["selectedElement"]); });
        this.surveyValue.onEditQuestion.add(function (sender, options) { self.showQuestionEditor(self.koSelectedObject().value); });
        this.surveyValue.onCopyQuestion.add(function (sender, options) { self.addCustomToolboxQuestion(self.koSelectedObject().value); });
        this.surveyValue.onFastCopyQuestion.add(function (sender, options) { self.fastCopyQuestion(self.koSelectedObject().value); });
        this.surveyValue.onDeleteCurrentObject.add(function (sender, options) { self.deleteCurrentObject(); });
        this.surveyValue.onProcessHtml.add(function (sender, options) { options.html = self.processHtml(options.html); });
        this.surveyValue.onCurrentPageChanged.add(function (sender, options) { self.pagesEditor.setSelectedPage(sender.currentPage); });
        this.surveyValue.onQuestionAdded.add(function (sender, options) { self.doOnQuestionAdded(options.question, options.parentPanel); });
        this.surveyValue.onQuestionRemoved.add(function (sender, options) { self.doOnElementRemoved(options.question); });
        this.surveyValue.onPanelAdded.add(function (sender, options) { self.doOnPanelAdded(options.panel, options.parentPanel); });
        this.surveyValue.onPanelRemoved.add(function (sender, options) { self.doOnElementRemoved(options.panel); });
    };
    SurveyEditor.prototype.processHtml = function (html) {
        if (!html)
            return html;
        var scriptRegEx = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        while (scriptRegEx.test(html)) {
            html = html.replace(scriptRegEx, "");
        }
        return html;
    };
    SurveyEditor.prototype.doDraggingToolboxItem = function (json, e) {
        this.dragDropHelper.startDragToolboxItem(e, this.getNewName(json["type"]), json);
    };
    SurveyEditor.prototype.doClickToolboxItem = function (json) {
        var name = this.getNewName(json["type"]);
        var question = __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"].metaData.createClass(json["type"]);
        new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toObject(json, question);
        question.name = name;
        this.doClickQuestionCore(question);
    };
    SurveyEditor.prototype.getNewName = function (type) {
        return type == "panel" ? this.getNewPanelName() : this.getNewQuestionName();
    };
    SurveyEditor.prototype.getNewQuestionName = function () {
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewQuestionName(this.survey.getAllQuestions());
    };
    SurveyEditor.prototype.getNewPanelName = function () {
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewPanelName(this.getAllPanels());
    };
    SurveyEditor.prototype.getAllPanels = function () {
        var result = [];
        for (var i = 0; i < this.survey.pages.length; i++) {
            this.addPanels(this.survey.pages[i], result);
        }
        return result;
    };
    SurveyEditor.prototype.addPanels = function (panel, result) {
        for (var i = 0; i < panel.elements.length; i++) {
            if (!panel.elements[i].isPanel)
                continue;
            result.push(panel.elements[i]);
            this.addPanels(panel.elements[i], result);
        }
    };
    SurveyEditor.prototype.doClickQuestionCore = function (question) {
        var page = this.survey.currentPage;
        var index = -1;
        if (this.survey.selectedElement != null) {
            index = page.questions.indexOf(this.survey.selectedElement) + 1;
        }
        page.addQuestion(question, index);
        this.dragDropHelper.scrollToElement(document.getElementById(question.id));
        this.setModified();
    };
    SurveyEditor.prototype.deleteQuestion = function () {
        var question = this.getSelectedObjAsQuestion();
        if (question) {
            this.deleteCurrentObject();
        }
    };
    SurveyEditor.prototype.selectQuestion = function (isUp) {
        var question = this.getSelectedObjAsQuestion();
        if (question) {
            this.surveyObjects.selectNextQuestion(isUp);
        }
    };
    SurveyEditor.prototype.getSelectedObjAsQuestion = function () {
        var obj = this.koSelectedObject().value;
        if (!obj)
            return null;
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question ? (obj) : null;
    };
    SurveyEditor.prototype.deleteCurrentObject = function () {
        this.deleteObject(this.koSelectedObject().value);
    };
    SurveyEditor.prototype.showQuestionEditor = function (question) {
        var self = this;
        this.questionEditorWindow.show(question, function (question) { self.onQuestionEditorChanged(question); });
    };
    SurveyEditor.prototype.onQuestionEditorChanged = function (question) {
        this.surveyObjects.nameChanged(question);
        this.selectedObjectEditor.ObjectChanged();
        this.setModified();
        this.survey.render();
    };
    SurveyEditor.prototype.addCustomToolboxQuestion = function (question) {
        this.toolbox.addCopiedItem(question);
    };
    SurveyEditor.prototype.fastCopyQuestion = function (question) {
        var json = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(question);
        json.type = question.getType();
        this.doClickToolboxItem(json);
    };
    SurveyEditor.prototype.deleteObject = function (obj) {
        this.surveyObjects.removeObject(obj);
        var objType = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj);
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
            this.survey.removePage(obj);
            this.pagesEditor.removePage(obj);
        }
        else {
            this.survey.currentPage.removeElement(obj);
            this.survey.selectedElement = null;
            this.surveyObjects.selectObject(this.survey.currentPage);
        }
        this.setModified();
        this.survey.render();
    };
    SurveyEditor.prototype.showLiveSurvey = function () {
        var _this = this;
        if (!this.surveyjsExample)
            return;
        var json = this.getSurveyJSON();
        if (json != null) {
            if (json.cookieName) {
                delete json.cookieName;
            }
            var survey = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"](json);
            var self = this;
            var surveyjsExampleResults = document.getElementById("surveyjsExampleResults");
            var surveyjsExamplereRun = document.getElementById("surveyjsExamplereRun");
            if (surveyjsExampleResults)
                surveyjsExampleResults.innerHTML = "";
            if (surveyjsExamplereRun)
                surveyjsExamplereRun.style.display = "none";
            survey.onComplete.add(function (sender) { if (surveyjsExampleResults)
                surveyjsExampleResults.innerHTML = _this.getLocString("ed.surveyResults") + JSON.stringify(survey.data); if (surveyjsExamplereRun)
                surveyjsExamplereRun.style.display = ""; });
            survey.render(this.surveyjsExample);
        }
        else {
            this.surveyjsExample.innerHTML = this.getLocString("ed.correctJSON");
        }
    };
    SurveyEditor.prototype.showSurveyEmbeding = function () {
        var json = this.getSurveyJSON();
        this.surveyEmbeding.json = json;
        this.surveyEmbeding.surveyId = this.surveyId;
        this.surveyEmbeding.surveyPostId = this.surveyPostId;
        this.surveyEmbeding.generateValidJSON = this.options && this.options.generateValidJSON;
        this.surveyEmbeding.show();
    };
    SurveyEditor.prototype.getSurveyJSON = function () {
        if (this.koIsShowDesigner())
            return new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.survey);
        if (this.jsonEditor.isJsonCorrect)
            return new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.jsonEditor.survey);
        return null;
    };
    SurveyEditor.prototype.createAnnotations = function (text, errors) {
        var annotations = new Array();
        for (var i = 0; i < errors.length; i++) {
            var error = errors[i];
            var annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
            annotations.push(annotation);
        }
        return annotations;
    };
    return SurveyEditor;
}());

SurveyEditor.defaultNewSurveyText = "{ pages: [ { name: 'page1'}] }";
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"].cssType = "bootstrap";


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(2);

var frenchTranslation = {
    //Strings in Editor
    ed: {
        addNewPage: 'Ajouter une page',
        correctJSON: 'SVP corriger le json',
        delSelObject: 'Supprimer l\'objet sélectionné',
        designer: 'Designer de questionnaire',
        embedSurvey: 'Intégrer le questionnaire',
        generateReadableJSON: 'Générer un JSON lisible',
        generateValidJSON: 'Générer un JSON valide',
        jsonEditor: 'Editer JSON',
        newPageName: 'page',
        newQuestionName: 'question',
        options: 'Options',
        redo: 'Rétablir',
        saveSurvey: 'Sauvegarder le questionnaire',
        surveyResults: 'Résultat du questionnaire: ',
        testSurvey: 'Tester le questionnaire',
        testSurveyAgain: 'Tester à nouveau le questionnaire',
        testSurveyWidth: 'Largeur du questionnaire: ',
        toolbox: 'Boite à outils',
        undo: 'Annuler'
    },
    //Embed window
    ew: {
        angular: 'Utiliser la version Angular',
        bootstrap: 'Pour Bootstrap framework',
        jquery: 'Utiliser la version jQuery',
        knockout: 'Utiliser la version Knockout',
        loadFromServer: 'Charger le JSON du questionnaire depuis un serveur',
        react: 'Utiliser la version React',
        showInWindow: 'Afficher le questionnaire dans une fenêtre',
        showOnPage: 'Afficher le questionnaire dans une page',
        standard: 'Pas de bootstrap',
        titleHtml: 'HTML',
        titleJavaScript: 'JavaScript',
        titleScript: 'Scripts et styles',
        vue: 'Utiliser la version Vue'
    },
    //Operators
    op: {
        contains: 'contient',
        empty: 'est vide',
        equal: 'égal',
        greater: 'supérieur',
        greaterorequal: 'supérieur ou égal',
        less: 'plus petit',
        lessorequal: 'plus petit ou égal',
        notcontains: 'ne contient pas',
        notempty: 'n\'est pas vide',
        notequal: 'n\'est pas égal'
    },
    //Properties
    p: {
        addRowText: 'Bouton ajouter une ligne',
        cellType: 'Type de cellule',
        choices: 'Choix',
        choicesByUrl: 'Choix par API',
        choicesOrder: 'Ordre des choix',
        clearInvisibleValues: 'Cacher les valeur invisibles',
        colCount: 'Nombre de colonnes',
        cols: 'Nombre de cols',
        columnColCount: 'Nombre de colonnes',
        columnMinWidth: 'Largeur minimale des colonnes',
        columns: 'Colonnes',
        commentText: 'Description champ commentaire',
        completeText: 'Texte questionnaire finalisé',
        completedHtml: 'Html questionnaire finalisé',
        cookieName: 'Nom du cookie',
        edit: 'Editer',
        focusFirstQuestionAutomatic: 'Focus sur la première question automatiquement',
        goNextPageAutomatic: 'Aller à la page suivante automatiquement',
        hasComment: 'Champs commentaire ?',
        hasOther: 'Choix autre ?',
        horizontalScroll: 'Scroll horizontal',
        imageHeight: 'Hauteur de l \'image',
        imageWidth: 'Largeur de l\'image',
        indent: 'Indentation',
        inputType: 'Type de champs',
        isAllRowRequired: 'Toutes les lignes sont-elle obligatoires ?',
        isRequired: 'Requis ?',
        itemSize: 'Nombre maximum de caractères',
        items: 'Items',
        locale: 'Langue',
        maxRateDescription: 'Description note maximum',
        maxSize: 'Taille maximum',
        minRateDescription: 'Description note minimum',
        minRowCount: 'Nombre de ligne minimal',
        mode: 'Mode d\'affichage',
        name: 'Nom',
        optionsCaption: 'Texte par défaut',
        otherErrorText: 'Texte Erreur champs autre',
        otherText: { name: 'Text autre', title: 'Champ commentaire ou choix autre' },
        pageNextText: 'Bouton page suivante',
        pagePrevText: 'Bouton page précédente',
        page_title: { name: 'titre', title: 'Titre de la page' },
        placeHolder: 'PlaceHolder (indice dans le champs)',
        questionStartIndex: 'Index de numérotation des question',
        questionTitleLocation: 'Emplacement titre question',
        questionTitleTemplate: { name: 'Template d\'affichage des question', title: 'Exemple: {no}) {title} {require}:' },
        rateValues: 'Barème',
        removeRowText: 'Bouton supprimer une ligne',
        requiredText: 'Texte pour les champs requis',
        rowCount: 'Nombre de lignes',
        rows: 'Nombre de ligne',
        sendResultOnPageNext: '',
        showCompletedPage: 'Voir la page formulaire complété ?',
        showNavigationButtons: 'Boutons de navigation',
        showPageNumbers: 'Numérotation des pages',
        showPageTitles: 'Titre des pages',
        showPreview: 'Voir la prévisualisation',
        showProgressBar: 'Barre de progression',
        showQuestionNumbers: 'Numérotation des questions',
        showTitle: 'Afficher le titre',
        size: 'Nombre maximum de caractères',
        startWithNewLine: 'Commencer avec une nouvelle ligne',
        storeDataAsText: 'Stocker les données comme du text',
        storeOthersAsComment: 'Sauvegarder choix autre comme commentaire',
        surveyId: 'Id du questionnaire',
        surveyPostId: 'Id POST questionnaire',
        survey_title: { name: 'titre', title: 'Il sera affiché sur chaque page.' },
        title: { name: 'Titre', title: 'Laissez vide, si meme texte que le "Nom"' },
        triggers: 'Déclencheurs',
        validators: 'Validateurs',
        visibleIf: 'Visible si ',
        width: 'Largeur'
    },
    //Property Editors
    pe: {
        addNew: 'Ajouter un nouveau',
        addRowText: 'Texte bouton ajouter une ligne',
        apply: 'Appliquer',
        cancel: 'Annuler',
        cellType: 'Type de cellule',
        choicesOrder: 'Sélectionner l\'ordre des choix',
        close: 'Fermer',
        colCount: 'Nombre de colonnes',
        columnEdit: 'Editer la colonne: {0}',
        createtrigger: 'Veuillez créer un déclencheur',
        delete: 'Supprimer',
        edit: 'Editer',
        editProperty: 'Editer la propriété "{0}"',
        empty: '<vide>',
        enterNewValue: 'Veuillez saisir la valeur.',
        expressionHelp: 'Veuillez entrer une expression booléenne. Elle doit retourner Vrai(true) pour garder la question/page visible. Par exemple: {question1} = "valeur1" or ({question2} = 3 and {question3} < 5)',
        fastEntry: 'Ajout rapide',
        formEntry: 'Ajout via formulaire',
        hasOther: 'Has other item',
        imageHeight: 'Hauteur de l\'image',
        imageWidth: 'Largeur de l\'image',
        inputType: 'Type de champ',
        isRequired: 'Est requis ?',
        items: '[ Elements: {0} ]',
        maxRateDescription: 'Description note maximum',
        maxSize: 'Taille maximum du fichier en octets',
        minRateDescription: 'Description note minimum',
        name: 'Nom',
        noquestions: 'Il n\'y a aucune question dans le questionnaire.',
        ok: 'OK',
        optionsCaption: 'Texte par défaut',
        placeHolder: 'PlaceHolder (indice dans le champs)',
        propertyIsEmpty: 'Veuillez entrer une valeur pour la propriété',
        qEditorTitle: 'Editer la question: {0}',
        removeAll: 'Tout supprimer',
        removeRowText: 'Texte bouton supprimer une ligne',
        required: 'Requis ?',
        reset: 'Réinitialiser',
        rowCount: 'Nombre de lignes',
        rows: 'Nombre de lignes',
        showPreview: 'L\'aperçu d\'image est-il affiché ?',
        startWithNewLine: 'Commencer avec une nouvelle ligne ?',
        storeDataAsText: 'Stocker le contenu du fichier dans le résultat JSON sous forme de texte',
        tabs: {
            choices: 'Choix',
            choicesByUrl: 'Choix depuis api web',
            columns: 'Colonnes',
            fileOptions: 'Options',
            general: 'Général',
            html: 'Editeur Html',
            matrixChoices: 'Choix par defaut',
            multipleTextItems: 'Text Inputs',
            rateValues: 'Barème',
            rows: 'Lignes',
            visibleIf: 'Visible Si'
        },
        testService: 'Tester le service',
        text: 'Texte',
        title: 'Titre',
        triggerCompleteText: 'Complete the survey if succeed.',
        triggerIsVariable: 'Ne placez pas la variable dans le résultat du questionnaire.',
        triggerMakePagesVisible: 'Rendre les pages visibles:',
        triggerMakeQuestionsVisible: 'Rendre les questions visibles:',
        triggerNotSet: 'Le déclencheur n\'est pas défini',
        triggerOn: 'On ',
        triggerRunIf: 'Exécuster si',
        triggerSetToName: 'Changer la valeur de: ',
        triggerSetValue: 'à: ',
        value: 'Valeur',
        verbChangePage: 'Changer de page ',
        verbChangeType: 'Changer le type ',
        visible: 'Est visible ?'
    },
    //questionTypes
    qt: {
        checkbox: 'Cases à cocher',
        comment: 'Commentaire',
        dropdown: 'Liste déroulante',
        file: 'Fichier',
        html: 'Html',
        matrix: 'Matice (choix unique)',
        matrixdropdown: 'Matrice (choix multiples)',
        matrixdynamic: 'Matrice (Lignes dynamiques)',
        multipletext: 'champ multilignes',
        radiogroup: 'Boutons radio',
        rating: 'Evaluation',
        text: 'Champ simple'
    },
    survey: {
        addToToolbox: 'Ajouter à la boîte à outils',
        copy: 'Copier',
        deleteQuestion: 'Supprimer la question',
        dropQuestion: 'Déposer votre question ici.'
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["fr"] = frenchTranslation;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyItemValuesEditor; });





var SurveyPropertyItemValuesEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyItemValuesEditor, _super);
    function SurveyPropertyItemValuesEditor() {
        var _this = _super.call(this) || this;
        var self = _this;
        _this.koActiveView = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("form");
        _this.koItemsText = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.koActiveView.subscribe(function (newValue) {
            if (newValue == "form")
                self.updateItems(self.koItemsText());
            else
                self.koItemsText(self.getItemsText());
        });
        _this.changeToTextViewClick = function () { self.koActiveView("text"); };
        _this.changeToFormViewClick = function () { self.koActiveView("form"); };
        return _this;
    }
    Object.defineProperty(SurveyPropertyItemValuesEditor.prototype, "editorType", {
        get: function () { return "itemvalues"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyItemValuesEditor.prototype.hasError = function () {
        var result = false;
        for (var i = 0; i < this.koItems().length; i++) {
            var item = this.koItems()[i];
            item.koHasError(this.isValueEmpty(item.koValue()));
            result = result || item.koHasError();
        }
        return result;
    };
    SurveyPropertyItemValuesEditor.prototype.createNewEditorItem = function () { return { koValue: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](), koText: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](), koHasError: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false) }; };
    SurveyPropertyItemValuesEditor.prototype.createEditorItem = function (item) {
        var itemValue = item;
        var itemText = null;
        if (item.value) {
            itemValue = item.value;
            itemText = item.text;
        }
        return { koValue: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](itemValue), koText: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](itemText), koHasError: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false) };
    };
    SurveyPropertyItemValuesEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var alwaySaveTextInPropertyEditors = this.options && this.options.alwaySaveTextInPropertyEditors;
        var text = editorItem.koText();
        if (!alwaySaveTextInPropertyEditors && editorItem.koText() == editorItem.koValue()) {
            text = null;
        }
        return { value: editorItem.koValue(), text: text };
    };
    SurveyPropertyItemValuesEditor.prototype.onBeforeApply = function () {
        if (this.koActiveView() != "form") {
            this.updateItems(this.koItemsText());
        }
        _super.prototype.onBeforeApply.call(this);
    };
    SurveyPropertyItemValuesEditor.prototype.updateItems = function (text) {
        var items = [];
        if (text) {
            var texts = text.split("\n");
            for (var i = 0; i < texts.length; i++) {
                if (!texts[i])
                    continue;
                var valueItem = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"](texts[i]);
                var item = { value: valueItem.value, text: (valueItem.hasText ? valueItem.text : "") };
                items.push(item);
            }
        }
        this.koItems(this.getItemsFromValue(items));
    };
    SurveyPropertyItemValuesEditor.prototype.getItemsText = function () {
        var text = [];
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (this.isValueEmpty(item.koValue()))
                continue;
            var itemText = item.koValue();
            if (item.koText())
                itemText += __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"].Separator + item.koText();
            text.push(itemText);
        }
        return text.join("\n");
    };
    SurveyPropertyItemValuesEditor.prototype.isValueEmpty = function (val) {
        return !val;
    };
    return SurveyPropertyItemValuesEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("itemvalues", function () { return new SurveyPropertyItemValuesEditor(); });


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionEditors_questionEditor__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyDropdownColumnsEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyPropertyMatrixDropdownColumnsItem; });







var SurveyPropertyDropdownColumnsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyDropdownColumnsEditor, _super);
    function SurveyPropertyDropdownColumnsEditor() {
        var _this = _super.call(this) || this;
        var self = _this;
        _this.koEditItem = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koIsList = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        _this.koEditItem.subscribe(function (newValue) {
            if (self.koEditItem() != null) {
                self.columnEditor = new __WEBPACK_IMPORTED_MODULE_4__questionEditors_questionEditor__["b" /* SurveyQuestionEditor */](self.koEditItem().editColumn, null, "matrixdropdowncolumn@" + self.koEditItem().koCellType());
            }
            else {
                if (self.columnEditor)
                    self.columnEditor.apply();
                self.columnEditor = null;
            }
            self.koIsList(self.koEditItem() == null);
        });
        _this.onEditItemClick = function (item) { self.koEditItem(item); };
        _this.onCancelEditItemClick = function () {
            if (self.columnEditor && self.columnEditor.hasError())
                return;
            self.koEditItem(null);
        };
        return _this;
    }
    Object.defineProperty(SurveyPropertyDropdownColumnsEditor.prototype, "editorType", {
        get: function () { return "matrixdropdowncolumns"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyDropdownColumnsEditor.prototype.hasError = function () {
        var result = this.columnEditor != null ? this.columnEditor.hasError() : false;
        for (var i = 0; i < this.koItems().length; i++) {
            result = result || this.koItems()[i].hasError();
        }
        return result;
    };
    SurveyPropertyDropdownColumnsEditor.prototype.onBeforeApply = function () {
        if (this.columnEditor)
            this.columnEditor.apply();
        _super.prototype.onBeforeApply.call(this);
    };
    SurveyPropertyDropdownColumnsEditor.prototype.createNewEditorItem = function () { return new SurveyPropertyMatrixDropdownColumnsItem(new __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["MatrixDropdownColumn"]("", this.options)); };
    SurveyPropertyDropdownColumnsEditor.prototype.createEditorItem = function (item) { return new SurveyPropertyMatrixDropdownColumnsItem(item, this.options); };
    SurveyPropertyDropdownColumnsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var columItem = editorItem;
        columItem.apply();
        return columItem.column;
    };
    return SurveyPropertyDropdownColumnsEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyPropertyMatrixDropdownColumnsItem = (function () {
    function SurveyPropertyMatrixDropdownColumnsItem(column, options) {
        if (options === void 0) { options = null; }
        this.column = column;
        this.options = options;
        this.editColumn = new __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["MatrixDropdownColumn"](column.name, column.title);
        this.copyColumn(this.column, this.editColumn);
        this.cellTypeChoices = this.getPropertyChoices("cellType");
        this.koName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.name);
        this.koCellType = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.cellType);
        this.koTitle = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.name === column.title ? "" : column.title);
        this.koIsRequired = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.column.isRequired);
        this.koHasError = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        var self = this;
        this.koCanEdit = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { return self.koCellType() != "default"; });
        this.koEditorName = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { return __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getString("pe.columnEdit")["format"](self.koName()); });
    }
    SurveyPropertyMatrixDropdownColumnsItem.prototype.hasError = function () {
        this.koHasError(!this.koName());
        return this.koHasError();
    };
    SurveyPropertyMatrixDropdownColumnsItem.prototype.apply = function () {
        this.copyColumn(this.editColumn, this.column);
        this.column.name = this.koName();
        this.column.title = this.koTitle();
        this.column.cellType = this.koCellType();
        this.column.isRequired = this.koIsRequired();
    };
    SurveyPropertyMatrixDropdownColumnsItem.prototype.copyColumn = function (src, dest) {
        dest.hasOther = src.hasOther;
        dest.choices = src.choices;
        dest.colCount = src.colCount;
        dest.optionsCaption = src.optionsCaption;
        //TODO change to properties
        if (src["choicesOrder"])
            dest["choicesOrder"] = src["choicesOrder"];
        if (src["inputType"])
            dest["inputType"] = src["inputType"];
        if (src["placeHolder"])
            dest["placeHolder"] = src["placeHolder"];
        if (src["choicesByUrl"])
            dest["choicesByUrl"].setData(src["choicesByUrl"]);
    };
    SurveyPropertyMatrixDropdownColumnsItem.prototype.getPropertyChoices = function (propetyName) {
        var properties = __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["JsonObject"].metaData.getProperties("matrixdropdowncolumn");
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propetyName)
                return properties[i].choices;
        }
        return [];
    };
    return SurveyPropertyMatrixDropdownColumnsItem;
}());

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("matrixdropdowncolumns", function () { return new SurveyPropertyDropdownColumnsEditor(); });


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyResultfullEditor; });






var SurveyPropertyResultfullEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyResultfullEditor, _super);
    function SurveyPropertyResultfullEditor() {
        var _this = _super.call(this) || this;
        _this.koUrl = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        _this.koPath = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        _this.koValueName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        _this.koTitleName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        _this.createSurvey();
        var self = _this;
        _this.koUrl.subscribe(function (newValue) { self.question.choicesByUrl.url = newValue; self.run(); });
        _this.koPath.subscribe(function (newValue) { self.question.choicesByUrl.path = newValue; self.run(); });
        _this.koValueName.subscribe(function (newValue) { self.question.choicesByUrl.valueName = newValue; self.run(); });
        _this.koTitleName.subscribe(function (newValue) { self.question.choicesByUrl.titleName = newValue; self.run(); });
        return _this;
    }
    Object.defineProperty(SurveyPropertyResultfullEditor.prototype, "editorType", {
        get: function () { return "restfull"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyResultfullEditor.prototype, "restfullValue", {
        get: function () { return this.value; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyResultfullEditor.prototype.getValueText = function (value) {
        if (!value || !value.url)
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.empty");
        var str = value.url;
        if (str.length > 20) {
            str = str.substr(0, 20) + "...";
        }
        return str;
    };
    SurveyPropertyResultfullEditor.prototype.onValueChanged = function () {
        var val = this.restfullValue;
        this.koUrl(val ? val.url : "");
        this.koPath(val ? val.path : "");
        this.koValueName(val ? val.valueName : "");
        this.koTitleName(val ? val.titleName : "");
    };
    SurveyPropertyResultfullEditor.prototype.onBeforeApply = function () {
        var val = new __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["ChoicesRestfull"]();
        val.url = this.koUrl();
        val.path = this.koPath();
        val.valueName = this.koValueName();
        val.titleName = this.koTitleName();
        this.setValueCore(val);
    };
    SurveyPropertyResultfullEditor.prototype.run = function () {
        this.question.choicesByUrl.run();
    };
    SurveyPropertyResultfullEditor.prototype.createSurvey = function () {
        this.survey = new __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["Survey"]();
        this.survey.showNavigationButtons = false;
        this.survey.showQuestionNumbers = "off";
        var page = this.survey.addNewPage("page1");
        this.question = page.addNewQuestion("dropdown", "q1");
        this.question.title = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.testService");
        this.question.choices = [];
    };
    return SurveyPropertyResultfullEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("restfull", function () { return new SurveyPropertyResultfullEditor(); });


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__propertyItemsEditor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyHelper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyValidatorsEditor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyTextItemsEditor; });








var SurveyPropertyTextItemsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextItemsEditor, _super);
    function SurveyPropertyTextItemsEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyPropertyTextItemsEditor.prototype, "editorType", {
        get: function () { return "textitems"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTextItemsEditor.prototype.createNewEditorItem = function () {
        var objs = [];
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            objs.push({ name: items[i].koName() });
        }
        var editItem = { koName: __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](__WEBPACK_IMPORTED_MODULE_3__surveyHelper__["b" /* SurveyHelper */].getNewName(objs, "text")), koTitle: __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](), koIsRequired: __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](false) };
        this.createValidatorsEditor(editItem, []);
        return editItem;
    };
    SurveyPropertyTextItemsEditor.prototype.createEditorItem = function (item) {
        var editItem = { koName: __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](item.name), koTitle: __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](item.title), koIsRequired: __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](item.isRequired) };
        this.createValidatorsEditor(editItem, item.validators);
        return editItem;
    };
    SurveyPropertyTextItemsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var itemText = new __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["MultipleTextItem"](editorItem.koName(), editorItem.koTitle());
        itemText.isRequired = editorItem.koIsRequired();
        itemText.validators = editorItem.validators;
        return itemText;
    };
    SurveyPropertyTextItemsEditor.prototype.createValidatorsEditor = function (item, validators) {
        item.validators = validators.slice();
        var self = this;
        var onItemChanged = function (newValue) { item.validators = newValue; item.koText(self.getText(newValue.length)); };
        var propertyEditor = new __WEBPACK_IMPORTED_MODULE_5__propertyValidatorsEditor__["a" /* SurveyPropertyValidatorsEditor */]();
        item.editor = propertyEditor;
        propertyEditor.onChanged = function (newValue) { onItemChanged(newValue); };
        propertyEditor.object = item;
        propertyEditor.title(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.editProperty")["format"]("Validators"));
        propertyEditor.value = item.validators;
        item.koText = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](this.getText(validators.length));
    };
    SurveyPropertyTextItemsEditor.prototype.getText = function (length) {
        return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.items")["format"](length);
    };
    return SurveyPropertyTextItemsEditor;
}(__WEBPACK_IMPORTED_MODULE_1__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("textitems", function () { return new SurveyPropertyTextItemsEditor(); });


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyTriggersEditor; });
/* unused harmony export SurveyPropertyTrigger */
/* unused harmony export SurveyPropertyVisibleTrigger */
/* unused harmony export SurveyPropertySetValueTrigger */
/* unused harmony export SurveyPropertyTriggerObjects */






var SurveyPropertyTriggersEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTriggersEditor, _super);
    function SurveyPropertyTriggersEditor() {
        var _this = _super.call(this) || this;
        _this.availableTriggers = [];
        _this.triggerClasses = [];
        var self = _this;
        _this.onDeleteClick = function () { self.koItems.remove(self.koSelected()); };
        _this.onAddClick = function (triggerType) { self.addItem(triggerType); };
        _this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koPages = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koQuestions = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.triggerClasses = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.getChildrenClasses("surveytrigger", true);
        _this.availableTriggers = _this.getAvailableTriggers();
        return _this;
    }
    Object.defineProperty(SurveyPropertyTriggersEditor.prototype, "editorType", {
        get: function () { return "triggers"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTriggersEditor.prototype.onValueChanged = function () {
        if (this.object) {
            this.koPages(this.getNames(this.object.pages));
            this.koQuestions(this.getNames(this.object.getAllQuestions()));
        }
        _super.prototype.onValueChanged.call(this);
        if (this.koSelected) {
            this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
        }
    };
    SurveyPropertyTriggersEditor.prototype.addItem = function (triggerType) {
        var trigger = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(triggerType);
        var triggerItem = this.createPropertyTrigger(trigger);
        this.koItems.push(triggerItem);
        this.koSelected(triggerItem);
    };
    SurveyPropertyTriggersEditor.prototype.createEditorItem = function (item) {
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"]();
        var trigger = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(item.getType());
        jsonObj.toObject(item, trigger);
        return this.createPropertyTrigger(trigger);
    };
    SurveyPropertyTriggersEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var editorTrigger = editorItem;
        return editorTrigger.createTrigger();
    };
    SurveyPropertyTriggersEditor.prototype.getAvailableTriggers = function () {
        var result = [];
        for (var i = 0; i < this.triggerClasses.length; i++) {
            result.push(this.triggerClasses[i].name);
        }
        return result;
    };
    SurveyPropertyTriggersEditor.prototype.getNames = function (items) {
        var names = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item["name"]) {
                names.push(item["name"]);
            }
        }
        return names;
    };
    SurveyPropertyTriggersEditor.prototype.createPropertyTrigger = function (trigger) {
        var triggerItem = null;
        if (trigger.getType() == "visibletrigger") {
            triggerItem = new SurveyPropertyVisibleTrigger(trigger, this.koPages, this.koQuestions);
        }
        if (trigger.getType() == "setvaluetrigger") {
            triggerItem = new SurveyPropertySetValueTrigger(trigger, this.koQuestions);
        }
        if (!triggerItem) {
            triggerItem = new SurveyPropertyTrigger(trigger);
        }
        return triggerItem;
    };
    return SurveyPropertyTriggersEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyPropertyTrigger = (function () {
    function SurveyPropertyTrigger(trigger) {
        this.trigger = trigger;
        this.operators = ["empty", "notempty", "equal", "notequal", "contains", "notcontains", "greater", "less", "greaterorequal", "lessorequal"];
        this.availableOperators = [];
        this.createOperators();
        this.triggerType = trigger.getType();
        this.koType = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.triggerType);
        this.koName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.name);
        this.koOperator = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.operator);
        this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.value);
        var self = this;
        this.koRequireValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { return self.koOperator() != "empty" && self.koOperator() != "notempty"; });
        this.koIsValid = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { if (self.koName() && (!self.koRequireValue() || self.koValue()))
            return true; return false; });
        this.koText = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.koName(); self.koOperator(); self.koValue(); return self.getText(); });
    }
    SurveyPropertyTrigger.prototype.createTrigger = function () {
        var trigger = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(this.triggerType);
        trigger.name = this.koName();
        trigger.operator = this.koOperator();
        trigger.value = this.koValue();
        return trigger;
    };
    SurveyPropertyTrigger.prototype.createOperators = function () {
        for (var i = 0; i < this.operators.length; i++) {
            var name = this.operators[i];
            this.availableOperators.push({ name: name, text: __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("op." + name) });
        }
    };
    SurveyPropertyTrigger.prototype.getText = function () {
        if (!this.koIsValid())
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerNotSet");
        return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerRunIf") + " '" + this.koName() + "' " + this.getOperatorText() + this.getValueText();
    };
    SurveyPropertyTrigger.prototype.getOperatorText = function () {
        var op = this.koOperator();
        for (var i = 0; i < this.availableOperators.length; i++) {
            if (this.availableOperators[i].name == op)
                return this.availableOperators[i].text;
        }
        return op;
    };
    SurveyPropertyTrigger.prototype.getValueText = function () {
        if (!this.koRequireValue())
            return "";
        return " " + this.koValue();
    };
    return SurveyPropertyTrigger;
}());

var SurveyPropertyVisibleTrigger = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyVisibleTrigger, _super);
    function SurveyPropertyVisibleTrigger(trigger, koPages, koQuestions) {
        var _this = _super.call(this, trigger) || this;
        _this.trigger = trigger;
        _this.pages = new SurveyPropertyTriggerObjects(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerMakePagesVisible"), koPages(), trigger.pages);
        _this.questions = new SurveyPropertyTriggerObjects(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerMakeQuestionsVisible"), koQuestions(), trigger.questions);
        return _this;
    }
    SurveyPropertyVisibleTrigger.prototype.createTrigger = function () {
        var trigger = _super.prototype.createTrigger.call(this);
        trigger.pages = this.pages.koChoosen();
        trigger.questions = this.questions.koChoosen();
        return trigger;
    };
    return SurveyPropertyVisibleTrigger;
}(SurveyPropertyTrigger));

var SurveyPropertySetValueTrigger = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertySetValueTrigger, _super);
    function SurveyPropertySetValueTrigger(trigger, koQuestions) {
        var _this = _super.call(this, trigger) || this;
        _this.trigger = trigger;
        _this.koQuestions = koQuestions;
        _this.kosetToName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.setToName);
        _this.kosetValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.setValue);
        _this.koisVariable = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.isVariable);
        return _this;
    }
    SurveyPropertySetValueTrigger.prototype.createTrigger = function () {
        var trigger = _super.prototype.createTrigger.call(this);
        trigger.setToName = this.kosetToName();
        trigger.setValue = this.kosetValue();
        trigger.isVariable = this.koisVariable();
        return trigger;
    };
    return SurveyPropertySetValueTrigger;
}(SurveyPropertyTrigger));

var SurveyPropertyTriggerObjects = (function () {
    function SurveyPropertyTriggerObjects(title, allObjects, choosenObjects) {
        this.title = title;
        this.koChoosen = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](choosenObjects);
        var array = [];
        for (var i = 0; i < allObjects.length; i++) {
            var item = allObjects[i];
            if (choosenObjects.indexOf(item) < 0) {
                array.push(item);
            }
        }
        this.koObjects = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](array);
        this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        this.koChoosenSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        var self = this;
        this.onDeleteClick = function () { self.deleteItem(); };
        this.onAddClick = function () { self.addItem(); };
    }
    SurveyPropertyTriggerObjects.prototype.deleteItem = function () {
        this.changeItems(this.koChoosenSelected(), this.koChoosen, this.koObjects);
    };
    SurveyPropertyTriggerObjects.prototype.addItem = function () {
        this.changeItems(this.koSelected(), this.koObjects, this.koChoosen);
    };
    SurveyPropertyTriggerObjects.prototype.changeItems = function (item, removedFrom, addTo) {
        removedFrom.remove(item);
        addTo.push(item);
        removedFrom.sort();
        addTo.sort();
    };
    return SurveyPropertyTriggerObjects;
}());

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("triggers", function () { return new SurveyPropertyTriggersEditor(); });


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd_container\">\n    <ul class=\"navbar-default container-fluid nav nav-tabs svd_menu\">\n        <li data-bind=\"css: {active: koViewType() == 'designer'}\"><a href=\"#\" data-bind=\"click:selectDesignerClick, text: $root.getLocString('ed.designer')\"></a></li>\n        <li data-bind=\"visible: showJSONEditorTab, css: {active: koViewType() == 'editor'}\"><a href=\"#\" data-bind=\"click:selectEditorClick, text: $root.getLocString('ed.jsonEditor')\"></a></li>\n        <li data-bind=\"visible: showTestSurveyTab, css: {active: koViewType() == 'test'}\"><a href=\"#\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurvey')\"></a></li>\n        <li data-bind=\"visible: showEmbededSurveyTab, css: {active: koViewType() == 'embed'}\"><a href=\"#\" data-bind=\"click:selectEmbedClick, text: $root.getLocString('ed.embedSurvey')\"></a></li>\n\n        <li class=\"svd_actions\" data-bind=\"visible: koIsShowDesigner\">\n            <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable:undoRedo.koCanUndo, click: doUndoClick\"><span data-bind=\"text: $root.getLocString('ed.undo')\"></span></button>\n        </li>\n        <li class=\"svd_actions\" data-bind=\"visible: koIsShowDesigner\">\n            <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable:undoRedo.koCanRedo, click: doRedoClick\"><span data-bind=\"text: $root.getLocString('ed.redo')\"></span></button>\n        </li>\n        <li class=\"svd_actions\" data-bind=\"visible: (koIsShowDesigner() && koShowOptions())\">\n            <div class=\"btn-group inline\">\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-bind=\"text: $root.getLocString('ed.options')\">\n                    Options \n                    <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                    <li data-bind=\"css: {active: koGenerateValidJSON}\"><a href=\"#\" data-bind=\"click:generateValidJSONClick, text: $root.getLocString('ed.generateValidJSON')\"></a></li>\n                    <li data-bind=\"css: {active: !koGenerateValidJSON()}\"><a href=\"#\" data-bind=\"click:generateReadableJSONClick, text: $root.getLocString('ed.generateReadableJSON')\"></a></li>\n                </ul>\n            </div>\n        </li>\n        <li class=\"svd_actions\" data-bind=\"visible: koViewType() == 'test'\">\n            <div class=\"btn-group inline\">\n                <button type=\"button\" id=\"surveyTestWidth\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                    <span data-bind=\"text: $root.getLocString('ed.testSurveyWidth') + ' ' + $root.koTestSurveyWidth()\"></span>\n                    <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"surveyTestWidth\">\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '100%')\">100%</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '1200px')\">1200px</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '1000px')\">1000px</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '800px')\">800px</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '600px')\">600px</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '400px')\">400px</a></li>\n                </ul>\n            </div>\n        </li>\n        <li class=\"svd_actions\">\n            <button type=\"button\" class=\"btn btn-primary svd_save_btn\" data-bind=\"click: saveButtonClick, visible: koShowSaveButton\"><span data-bind=\"text: $root.getLocString('ed.saveSurvey')\"></span></button>\n        </li>\n    </ul>\n\n    <div class=\"panel svd_content\">\n        <div class=\"row svd_survey_designer\"  data-bind=\"visible: koViewType() == 'designer'\">\n            <div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-1 panel panel-default svd_toolbox\">\n                <div class=\"btn-group-vertical\" style=\"width:100%;padding-right:2px\">\n                    <!-- ko foreach: toolbox.koItems -->\n                    <div class=\"btn btn-default\" style=\"text-align:left; margin:1px;min-height:37px; width:100%\" draggable=\"true\" data-bind=\"click: $root.clickToolboxItem, event:{dragstart: function(el, e) { $root.draggingToolboxItem($data, e); return true;}, dragend: function(el, e) { $root.dragEnd(); }}\">\n                        <span data-bind=\"css: iconName, attr: {title: title}\"></span>\n                        <span class=\"svd_toolbox_item_text hidden-sm hidden-xs\" data-bind=\"text:title\"></span>\n                    </div>\n                    <!-- /ko  -->\n                </div>\n            </div>\n            <div class=\"col-lg-7 col-md-7 col-sm-8 col-xs-11 svd_editors\">\n                <div class=\"svd_pages_editor\" data-bind=\"template: { name: 'pageeditor', data: pagesEditor }\"></div>\n                <div class=\"svd_questions_editor\" id=\"scrollableDiv\" data-bind=\"style: {height: koDesignerHeight}\">\n                    <div id=\"surveyjs\"></div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs panel panel-default svd_properties\">\n                <div class=\"panel-heading input-group\">\n                    <div class=\"custom-select\">\n                        <select class=\"form-control\" data-bind=\"options: koObjects, optionsText: 'text', value: koSelectedObject\"></select>\n                    </div>\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\" data-bind=\"enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString('ed.delSelObject')}\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                    </div>\n                </div>\n                <div class=\"svd_object_editor\" data-bind=\"style: {height: koDesignerHeight}\">\n                    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n                </div>\n                <div class=\"panel-footer\" data-bind=\"visible:surveyVerbs.koHasVerbs\">\n                    <div data-bind=\"template: { name: 'objectverbs', data: surveyVerbs }\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div data-bind=\"visible: koViewType() == 'editor'\">\n            <div data-bind=\"template: { name: 'jsoneditor', data: jsonEditor }\"></div>\n        </div>\n\n        <div id=\"surveyjsTest\" data-bind=\"visible: koViewType() == 'test', style: {width: koTestSurveyWidth}\">\n            <div id=\"surveyjsExample\"></div>\n            <div id=\"surveyjsExampleResults\"></div>\n            <button id=\"surveyjsExamplereRun\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurveyAgain')\" style=\"display:none\">Test Again</button>\n        </div>\n\n        <div id=\"surveyjsEmbed\" data-bind=\"visible: koViewType() == 'embed'\">\n            <div data-bind=\"template: { name: 'surveyembeding', data: surveyEmbeding }\"></div>\n        </div>\n    </div>\n    <div data-bind=\"template: { name: 'questioneditor', data: questionEditorWindow }\"></div>\n</div>";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"jsoneditor\">\n    <div data-bind=\"visible: !hasAceEditor\">\n        <textarea class=\"svd_json_editor_area\" data-bind=\"textInput:koText\"></textarea>\n        <!-- ko foreach: koErrors -->\n        <div>\n            <span>Error: </span><span data-bind=\"text: text\"></span>\n        </div>\n        <!-- /ko  -->\n    </div>\n    <div id=\"surveyjsJSONEditor\" class=\"svd_json_editor\"></div>\n</script>";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objecteditor\">\n    <table class=\"table svd_table-nowrap\">\n        <tbody data-bind=\"foreach: koProperties\">\n            <tr data-bind=\"click: $parent.changeActiveProperty($data), css: {'active': $parent.koActiveProperty() == $data}\">\n                <td data-bind=\"text: displayName, attr: {title: title}\" width=\"50%\"></td>\n                <td width=\"50%\">\n                    <span data-bind=\"text: koText, visible: $parent.koActiveProperty() != $data || disabled, attr: {title: koText}\" style=\"text-overflow:ellipsis;white-space:nowrap;overflow:hidden\"></span>\n                    <div data-bind=\"visible: $parent.koActiveProperty() == $data && !disabled\">\n                        <!-- ko template: { name: 'propertyeditor-' + editorType, data: $data } -->\n                        <!-- /ko -->\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</script>";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objectverbs\">\n    <!-- ko foreach: koVerbs -->\n        <div class=\"row\">\n            <div class=\"input-group\">\n                <span  class=\"input-group-addon\" data-bind=\"text:text\"></span>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', optionsValue:'value', value: koSelectedItem\"></select>\n            </div>\n        </div>\n    <!-- /ko  -->\n</script>";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"pageeditor\">\n    <ul class=\"nav nav-tabs\" data-bind=\"tabs:true\">\n        <!-- ko foreach: koPages -->\n        <li data-bind=\"css: {active: koSelected()},event:{\n           keydown:function(el, e){ $parent.keyDown(el, e); },\n           dragstart:function(el, e){ $parent.dragStart(el); return true; },\n           dragover:function(el, e){ $parent.dragOver(el);},\n           dragend:function(el, e){ $parent.dragEnd();},\n           drop:function(el, e){ $parent.dragDrop(el);}\n         }\"> \n            <a class=\"svd_page_nav\" href=\"#\" data-bind=\"click:$parent.selectPageClick\">\n                <span data-bind=\"text: title\"></span>\n            </a>\n        </li>\n        <!-- /ko  -->\n        <li><button class=\"btn btn-default svd_add_new_page_btn\" data-bind=\"click:addNewPageClick, attr: {title:  $root.getLocString('ed.addNewPage')}\" ><span class=\"glyphicon glyphicon-plus\"></span></button></li>\n    </ul>\n</script>";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-boolean\">\n    <input class=\"form-control\" type=\"checkbox\" data-bind=\"checked: koValue\" />\n</script>";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-dropdown\">\n    <div class=\"custom-select\">\n        <select class=\"form-control\" data-bind=\"value: koValue, options: choices\"  style=\"width:100%\"></select>\n    </div>\n</script>";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-expression\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-expression\">\n    <div>\n        <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"8\" autofocus=\"autofocus\"></textarea>\n        <span data-bind=\"text:$root.getLocString('pe.expressionHelp')\" style=\"white-space:normal\"></span>\n    </div>\n</script>\n";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-html\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-html\">\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-itemvalues\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" class=\"btn-xs\" id=\"propertyeditorcontent-itemvalues\">\n    <div style=\"margin-bottom:3px\">\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() == 'form', 'btn-link':koActiveView() != 'form'}, click:changeToFormViewClick, text: $root.getLocString('pe.formEntry')\"></button>\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() != 'form', 'btn-link':koActiveView() == 'form'}, click:changeToTextViewClick, text: $root.getLocString('pe.fastEntry')\"></button>\n    </div>\n    <div data-bind=\"visible:koActiveView() == 'form'\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px;min-height:200px\">\n        <table class=\"table\" >\n            <thead>\n                <tr>\n                    <th></th>\n                    <th data-bind=\"text: $root.getLocString('pe.value')\"></th>\n                    <th data-bind=\"text: $root.getLocString('pe.text')\"></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- ko foreach: koItems -->\n                <tr>\n                    <td>\n                        <div class=\"btn-group\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-xs\" data-bind=\"visible: $index() > 0, click: $parent.onMoveUpClick\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span></button>\n                            <button type=\"button\" class=\"btn btn-xs\" style=\"float:none\" data-bind=\"visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick\"><span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span></button>\n                        </div>\n                    </td>\n                    <td>\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value:koValue\" style=\"width:200px\" />\n                        <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\n                    </td>\n                    <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koText\" style=\"width:200px\" /></td>\n                    <td><button type=\"button\" class=\"btn btn-xs\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n                </tr>\n                <!-- /ko -->\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row btn-toolbar\" data-bind=\"visible:koActiveView() == 'form'\">\n        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\" />\n        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n    </div>\n    <div data-bind=\"visible:koActiveView() != 'form'\">\n        <textarea class=\"form-control\" data-bind=\"textInput: koItemsText\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px; min-height:250px; width:100%\"></textarea>\n    </div>\n</script>\n";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-matrixdropdowncolumns\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-matrixdropdowncolumns\">\n    <table class=\"table\" data-bind=\"visible: koIsList\">\n        <thead>\n            <tr>\n                <th data-bind=\"text: $root.getLocString('pe.required')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.cellType')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: koItems -->\n            <tr>\n                <td>\n                    <input type=\"checkbox\" data-bind=\"checked: koIsRequired\" />\n                    <button type=\"button\" class=\"btn\" data-bind=\"visible: koCanEdit, click: $parent.onEditItemClick\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>\n                    </button>\n                </td>\n                <td>\n                    <select class=\"form-control\" data-bind=\"options: cellTypeChoices, value: koCellType\"  style=\"width:110px\"></select>\n                </td>\n                <td>\n                    <input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:100px\" />\n                    <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\n                </td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:120px\" /></td>\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n            <!-- /ko -->\n            <tr>\n                <td colspan=\"3\">\n                    <div class=\"row btn-toolbar\">\n                        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/>\n                        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\"\" />\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n     <!-- ko if: !koIsList() -->\n        <div style=\"padding: 5px\">\n            <button type=\"button\" class=\"btn\" data-bind=\"click: onCancelEditItemClick\">\n                <span class=\"glyphicon glyphicon-list-alt\"></span>\n            </button>\n            <span data-bind=\"text: koEditItem().koEditorName\"></span>\n        </div>\n        <!-- ko template: { name: \"questioneditor-content\", data: columnEditor } -->\n        <!-- /ko -->\n    <!-- /ko -->\n</script>\n";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-modal\">\n    <div class=\"input-group\" data-bind=\"visible:!editor.isEditable\">\n        <a data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\"><span data-bind=\"text: koText\"></span></a>\n        <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" data-toggle=\"modal\" style=\"padding: 2px;\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n    <div class=\"input-group\" data-bind=\"visible:editor.isEditable\" style=\"display:table\">\n        <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"display:table-cell; width:100%\" />\n        <div class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-default\" style=\"display:table-cell; padding: 2px;\"  data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n\n    <div data-bind=\"attr: {id : modalName}\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:editor.title\"></h4>\n                </div>  \n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: 'propertyeditorcontent-' + editorType, data: editor } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: editor.onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-number\">\n    <input class=\"form-control\" type=\"number\" data-bind=\"value: koValue\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-restfull\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-restfull\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"url\">Url:</label>\n            <input id=\"url\" type=\"text\" data-bind=\"value:koUrl\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"path\">Path:</label>\n            <input id=\"path\" type=\"text\" data-bind=\"value:koPath\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"valueName\">valueName:</label>\n            <input id=\"valueName\" type=\"text\" data-bind=\"value:koValueName\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"titleName\">titleName:</label>\n            <input id=\"titleName\" type=\"text\" data-bind=\"value:koTitleName\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"titleName\"><span data-bind=\"text:$root.getLocString('pe.testService')\"></span></label>\n            <select class=\"form-control\" data-bind=\"options: question.koVisibleChoices, optionsText: 'text', optionsValue: 'value', optionsCaption: question.optionsCaption\"></select>\n        </div>\n    </form>\n</script>\n";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-string\">\n    <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-text\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-text\">\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-textitems\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-textitems\">\n<div class=\"panel\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th data-bind=\"text: $root.getLocString('pe.isRequired')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: koItems -->\n            <tr>\n                <td><input type=\"checkbox\" data-bind=\"checked: koIsRequired\" /></td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:180px\" /></td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:180px\" /></td>\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n            <!-- /ko -->\n            <tr>\n                <td colspan=\"4\"><input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/></td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n</script>";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggers\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-triggers\">\n<div class=\"panel\">\n    <div class=\"row\" style=\"margin-bottom:10px\">\n        <div class=\"col-lg-12\">\n            <div class=\"input-group form-inline\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <!-- ko foreach: availableTriggers -->\n                        <li><a data-bind=\"click: $parent.onAddClick($data)\"><span data-bind=\"text:$data\"></span></a></li>\n                        <!-- /ko  -->\n                    </ul>\n                </div>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'koText', value: koSelected\"></select>\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div data-bind=\"visible: koSelected() == null\">\n        <div data-bind=\"visible: koQuestions().length == 0, text: $root.getLocString('pe.noquestions')\"></div>\n        <div data-bind=\"visible: koQuestions().length > 0, text: $root.getLocString('pe.createtrigger')\"></div>\n    </div>\n    <div data-bind=\"visible: koSelected() != null\">\n        <div data-bind=\"with: koSelected\">\n            <div class=\"row\"  style=\"margin-bottom:10px\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group  form-inline\">\n                        <div class=\"form-group\">\n                            <span class=\"input-group\" data-bind=\"text: $root.getLocString('pe.triggerOn')\"></span>\n                        </div>\n                        <div class=\"form-group\">\n                            <select class=\"form-control\" data-bind=\"options:$parent.koQuestions, value: koName\"></select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" data-bind=\"options:availableOperators, optionsValue: 'name', optionsText: 'text', value:koOperator\"></select>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" data-bind=\"visible: koRequireValue, value:koValue\" />\n                    </div>\n                </div>\n            </div>\n            <!-- ko if: koType() == 'visibletrigger' -->\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6\">\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: pages } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"col-lg-6 col-sm-6\">\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: questions } -->\n                    <!-- /ko -->\n                </div>\n            </div>\n            <!-- /ko -->\n            <!-- ko if: koType() == 'completetrigger' -->\n            <div class=\"row\">\n               <div style=\"margin: 10px\" data-bind=\"text: $root.getLocString('pe.triggerCompleteText')\"></div>\n            </div>\n            <!-- /ko -->\n            <!-- ko if: koType() == 'setvaluetrigger' -->\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group form-inline\">\n                        <div>\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetToName')\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetToName\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group form-inline\">\n                        <div>\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetValue')\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetValue\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <input type=\"checkbox\" data-bind=\"checked: koisVariable\" /> <span data-bind=\"text: $root.getLocString('pe.triggerIsVariable')\"></span>\n                    </div>\n                </div>\n                <div class=\"col-lg-8 col-sm-8\">\n                </div>\n            </div>\n            <!-- /ko -->\n        </div>\n    </div>\n</div>\n</script>";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggersitems\">\n    <div class=\"panel no-margins no-padding\">\n        <div data-bind=\"text: title\" style=\"margin-bottom:10px\"></div>\n        <div class=\"input-group\">\n            <select class=\"form-control\" multiple=\"multiple\" data-bind=\"options:koChoosen, value: koChoosenSelected\"></select>\n            <span class=\"input-group-btn\" style=\"vertical-align:top\">\n                <button type=\"button\" data-bind=\"enable: koChoosenSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n            </span>\n        </div>\n        <div class=\"input-group\" style=\"margin-top:5px\">\n            <select class=\"form-control\" data-bind=\"options:koObjects, value: koSelected\"></select>\n            <span class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default\" data-bind=\"enable: koSelected() != null, click: onAddClick\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n            </span>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-validators\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-validators\">\n<div class=\"panel\">\n    <div class=\"panel-heading\">\n        <div class=\"row input-group\">\n            <button type=\"button\" class=\"dropdown-toggle input-group-addon\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n            </button>\n            <ul class=\"dropdown-menu input-group\">\n                <!-- ko foreach: availableValidators -->\n                <li><a href=\"#\" data-bind=\"click: $parent.onAddClick($data)\"><span data-bind=\"text:$data\"></span></a></li>\n                <!-- /ko  -->\n            </ul>\n            <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', value: koSelected\"></select>\n            <span class=\"input-group-btn\">\n                <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n            </span>\n        </div>\n    </div>\n    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n</div>\n</script>";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor-content\">\n    <ul class=\"nav nav-tabs\" data-bind=\"foreach: koTabs\">\n        <li role=\"presentation\" data-bind=\"css: {active: $parent.koActiveTab() == $data.name}, click: $parent.onTabClick\"><a><span data-bind=\"text:$data.title\"></span></a></li>\n    </ul>               \n    <!-- ko foreach: koTabs -->\n    <div data-bind=\"visible:$parent.koActiveTab() == $data.name\" style=\"margin-top:5px\">\n        <!-- ko template: { name: $data.htmlTemplate, data: $data.templateObject } -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko  -->\n</script>";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor\">\n    <div id=\"surveyquestioneditorwindow\" class=\"modal fade\" role=\"dialog\"data-bind=\"with:koEditor\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:koTitle\"></h4>\n                </div>  \n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: \"questioneditor-content\", data: $data } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default\" data-bind=\"click: onOkClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditortab-general\">\n    <div>\n        <!-- ko foreach: properties.rows -->\n        <div class=\"form-group\">\n            <!-- ko foreach: properties -->\n                    <div class=\"alert alert-danger\" role=\"alert\" data-bind=\"visible:koHasError\">\n                        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Error:</span>\n                        <span  data-bind=\"text:koErrorText\"></span>\n                    </div>            \n                    <!-- ko if: editType != 'check' -->\n                        <label data-bind=\"text:title\"></label>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'text' -->\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\" />\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'textarea' -->\n                        <textarea type=\"text\" rows=\"2\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\"></textarea>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'check' -->\n                        <span class=\"checkbox-inline\"><input type=\"checkbox\" data-bind=\"checked: koValue, disable: disabled\"><label data-bind=\"text:title\"></label></span>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'dropdown' -->\n                        <select class=\"form-control\"  data-bind=\"value: koValue, options: choices, disable: disabled\"></select>\n                    <!-- /ko -->\n            <!-- /ko  -->\n        </div>\n        <!-- /ko  -->\n    </div>\n</script>\n";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveyembeding\">\n    <div class=\"row\">\n        <select data-bind=\"value:koLibraryVersion\">\n            <option value=\"angular\" data-bind=\"text: $root.getLocString('ew.angular')\"></option>\n            <option value=\"jquery\" data-bind=\"text: $root.getLocString('ew.jquery')\"></option>\n            <option value=\"knockout\" data-bind=\"text: $root.getLocString('ew.knockout')\"></option>\n            <option value=\"react\" data-bind=\"text: $root.getLocString('ew.react')\"></option>\n            <option value=\"vue\" data-bind=\"text: $root.getLocString('ew.vue')\"></option>\n        </select>\n        <select data-bind=\"value:koScriptUsing\">\n            <option value=\"bootstrap\" data-bind=\"text: $root.getLocString('ew.bootstrap')\"></option>\n            <option value=\"standard\" data-bind=\"text: $root.getLocString('ew.standard')\"></option>\n        </select>\n        <select data-bind=\"value:koShowAsWindow\">\n            <option value=\"page\" data-bind=\"text: $root.getLocString('ew.showOnPage')\"></option>\n            <option value=\"window\" data-bind=\"text: $root.getLocString('ew.showInWindow')\"></option>\n        </select>\n        <label class=\"checkbox-inline\" data-bind=\"visible:koHasIds\">\n            <input type=\"checkbox\" data-bind=\"checked:koLoadSurvey\" />\n            <span data-bind=\"text: $root.getLocString('ew.loadFromServer')\"></span>\n        </label>\n    </div>\n    <div class=\"panel\">\n        <div class=\"panel-heading\" data-bind=\"text: $root.getLocString('ew.titleScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingHead\" style=\"height:70px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koHeadText\" style=\"height:70px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel\" data-bind=\"visible: koVisibleHtml\">\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleHtml')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingBody\" style=\"height:30px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koBodyText\" style=\"height:30px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel\">\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleJavaScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingJava\" style=\"height:300px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koJavaText\" style=\"height:300px;width:100%\"></textarea>\n    </div>\n</script>";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(35) + "\n" + __webpack_require__(36) + "\n" + __webpack_require__(37) + "\n" + __webpack_require__(38) + "\n" + __webpack_require__(39) + "\n" + __webpack_require__(58) + "\n" + __webpack_require__(56) + "\n" + __webpack_require__(55) + "\n" + __webpack_require__(57) + "\n" + __webpack_require__(40) + "\n" + __webpack_require__(41) + "\n" + __webpack_require__(43) + "\n" + __webpack_require__(42) + "\n" + __webpack_require__(44) + "\n" + __webpack_require__(45) + "\n" + __webpack_require__(46) + "\n" + __webpack_require__(47) + "\n" + __webpack_require__(48) + "\n" + __webpack_require__(49) + "\n" + __webpack_require__(50) + "\n" + __webpack_require__(51) + "\n" + __webpack_require__(52) + "\n" + __webpack_require__(53) + "\n" + __webpack_require__(54) + "";

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textWorker__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyJSONEditor; });


var SurveyJSONEditor = (function () {
    function SurveyJSONEditor() {
        this.isProcessingImmediately = false;
        this.timeoutId = -1;
        this.koText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koErrors = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        var self = this;
        this.koText.subscribe(function (newValue) {
            self.onJsonEditorChanged();
        });
    }
    SurveyJSONEditor.prototype.init = function () {
        if (!this.hasAceEditor)
            return;
        this.aceEditor = ace.edit("surveyjsJSONEditor");
        var self = this;
        //TODO add event to change ace theme and mode
        //this.aceEditor.setTheme("ace/theme/monokai");
        //this.aceEditor.session.setMode("ace/mode/json");
        this.aceEditor.setShowPrintMargin(false);
        this.aceEditor.getSession().on("change", function () {
            self.onJsonEditorChanged();
        });
        this.aceEditor.getSession().setUseWorker(true);
        __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */].newLineChar = this.aceEditor.session.doc.getNewLineCharacter();
    };
    Object.defineProperty(SurveyJSONEditor.prototype, "hasAceEditor", {
        get: function () { return typeof ace !== "undefined"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyJSONEditor.prototype, "text", {
        get: function () {
            if (!this.hasAceEditor)
                return this.koText();
            return this.aceEditor.getValue();
        },
        set: function (value) {
            this.isProcessingImmediately = true;
            this.koText(value);
            if (this.aceEditor) {
                this.aceEditor.setValue(value);
                this.aceEditor.renderer.updateFull(true);
            }
            this.processJson(value);
            this.isProcessingImmediately = false;
        },
        enumerable: true,
        configurable: true
    });
    SurveyJSONEditor.prototype.show = function (value) {
        this.text = value;
        if (this.aceEditor) {
            this.aceEditor.focus();
        }
    };
    Object.defineProperty(SurveyJSONEditor.prototype, "isJsonCorrect", {
        get: function () {
            this.textWorker = new __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */](this.text);
            return this.textWorker.isJsonCorrect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyJSONEditor.prototype, "survey", {
        get: function () { return this.textWorker.survey; },
        enumerable: true,
        configurable: true
    });
    SurveyJSONEditor.prototype.onJsonEditorChanged = function () {
        if (this.timeoutId > -1) {
            clearTimeout(this.timeoutId);
        }
        if (this.isProcessingImmediately) {
            this.timeoutId = -1;
        }
        else {
            var self = this;
            this.timeoutId = setTimeout(function () {
                self.timeoutId = -1;
                self.processJson(self.text);
            }, SurveyJSONEditor.updateTextTimeout);
        }
    };
    SurveyJSONEditor.prototype.processJson = function (text) {
        this.textWorker = new __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */](text);
        if (this.aceEditor) {
            this.aceEditor.getSession().setAnnotations(this.createAnnotations(text, this.textWorker.errors));
        }
        else {
            this.koErrors(this.textWorker.errors);
        }
    };
    SurveyJSONEditor.prototype.createAnnotations = function (text, errors) {
        var annotations = new Array();
        for (var i = 0; i < errors.length; i++) {
            var error = errors[i];
            var annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
            annotations.push(annotation);
        }
        return annotations;
    };
    return SurveyJSONEditor;
}());

SurveyJSONEditor.updateTextTimeout = 1000;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dragdrophelper__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return __WEBPACK_IMPORTED_MODULE_3__dragdrophelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorBase", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyStringPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDropdownPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBooleanPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNumberPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyTextItemsEditor__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTextItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyTextItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyItemsEditor__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyItemValuesEditor__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemValuesEditor", function() { return __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyItemValuesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyMatrixDropdownColumnsEditor__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDropdownColumnsEditor", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyMatrixDropdownColumnsEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyMatrixDropdownColumnsItem", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyMatrixDropdownColumnsEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyModalEditor__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyModalEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyModalEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyRestfullEditor__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyResultfullEditor", function() { return __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyRestfullEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyTriggersEditor__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTriggersEditor", function() { return __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyTriggersEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__propertyEditors_propertyValidatorsEditor__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyValidatorsEditor", function() { return __WEBPACK_IMPORTED_MODULE_12__propertyEditors_propertyValidatorsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__surveyObjects__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjects", function() { return __WEBPACK_IMPORTED_MODULE_13__surveyObjects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__editorLocalization__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "editorLocalization", function() { return __WEBPACK_IMPORTED_MODULE_14__editorLocalization__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__questionEditors_questionEditorGeneralProperties__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralProperties", function() { return __WEBPACK_IMPORTED_MODULE_15__questionEditors_questionEditorGeneralProperties__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralRow", function() { return __WEBPACK_IMPORTED_MODULE_15__questionEditors_questionEditorGeneralProperties__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralProperty", function() { return __WEBPACK_IMPORTED_MODULE_15__questionEditors_questionEditorGeneralProperties__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorDefinition__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorDefinition", function() { return __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorDefinition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditor__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorShowWindow", function() { return __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditor", function() { return __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditor__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTabGeneral", function() { return __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditor__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTabProperty", function() { return __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditor__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__questionToolbox__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionToolbox", function() { return __WEBPACK_IMPORTED_MODULE_18__questionToolbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__objectProperty__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectProperty", function() { return __WEBPACK_IMPORTED_MODULE_19__objectProperty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__objectEditor__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectEditor", function() { return __WEBPACK_IMPORTED_MODULE_20__objectEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pagesEditor__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPagesEditor", function() { return __WEBPACK_IMPORTED_MODULE_21__pagesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__textWorker__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTextWorker", function() { return __WEBPACK_IMPORTED_MODULE_22__textWorker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__surveyHelper__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjType", function() { return __WEBPACK_IMPORTED_MODULE_23__surveyHelper__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyHelper", function() { return __WEBPACK_IMPORTED_MODULE_23__surveyHelper__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__surveyEmbedingWindow__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEmbedingWindow", function() { return __WEBPACK_IMPORTED_MODULE_24__surveyEmbedingWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__objectVerbs__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbs", function() { return __WEBPACK_IMPORTED_MODULE_25__objectVerbs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbItem", function() { return __WEBPACK_IMPORTED_MODULE_25__objectVerbs__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbChangeTypeItem", function() { return __WEBPACK_IMPORTED_MODULE_25__objectVerbs__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbChangePageItem", function() { return __WEBPACK_IMPORTED_MODULE_25__objectVerbs__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__undoredo__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyUndoRedo", function() { return __WEBPACK_IMPORTED_MODULE_26__undoredo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoItem", function() { return __WEBPACK_IMPORTED_MODULE_26__undoredo__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__surveyjsObjects__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyForDesigner", function() { return __WEBPACK_IMPORTED_MODULE_27__surveyjsObjects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__editor__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEditor", function() { return __WEBPACK_IMPORTED_MODULE_28__editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__localization_french__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
// styles

var Version;
Version = "" + "0.12.6";

global["jQuery"] = __WEBPACK_IMPORTED_MODULE_1_jquery__;



























//editorLocalization


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(33)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMjdkMDkxNjkwZGJkOWE4NjAzOCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1rbm9ja291dFwiLFwiY29tbW9uanNcIjpcInN1cnZleS1rbm9ja291dFwiLFwiYW1kXCI6XCJzdXJ2ZXkta25vY2tvdXRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvckxvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlJdGVtc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5SGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHRXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzb241LnRzIiwid2VicGFjazovLy8uL3NyYy9kcmFnZHJvcGhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdFZlcmJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uVG9vbGJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5RW1iZWRpbmdXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleU9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleWpzT2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5kb3JlZG8udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy8uL3NyYy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VGV4dEl0ZW1zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJib290c3RyYXBcIixcImNvbW1vbmpzMlwiOlwiYm9vdHN0cmFwXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwXCIsXCJhbWRcIjpcImJvb3RzdHJhcFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9qc29uZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9vYmplY3RlZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL29iamVjdHZlcmJzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wYWdlZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItYm9vbGVhbi5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWRyb3Bkb3duLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZXhwcmVzc2lvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWh0bWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbWF0cml4ZHJvcGRvd25jb2x1bW5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1udW1iZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXN0cmluZy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10ZXh0aXRlbXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci12YWxpZGF0b3JzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3ItY29udGVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc3VydmV5ZW1iZWRpbmcuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2VudHJ5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleUpTT05FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7O0FDQU8sSUFBSSxrQkFBa0IsR0FBRztJQUM1QixhQUFhLEVBQUUsRUFBRTtJQUNqQixPQUFPLEVBQUUsRUFBRTtJQUNYLFNBQVMsRUFBRSxVQUFVLE9BQWUsRUFBRSxNQUFxQjtRQUFyQixzQ0FBcUI7UUFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxjQUFjLENBQUM7UUFDekQsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENB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R0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUks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cUg7QUFDbkY7QUFDNkU7QUFFckg7QUFDSTtBQUNKO0FBQ0Y7QUFDRjtBQUNPO0FBQ087QUFDa0Q7QUFDdEQ7QUFDTDtBQUNiO0FBRXZDLG9CQUFvQjtBQUNZIiwiZmlsZSI6Ii4vcGFja2FnZS9zdXJ2ZXllZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSwgcmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImJvb3RzdHJhcFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUVkaXRvclwiLCBbXCJrbm9ja291dFwiLCBcInN1cnZleS1rbm9ja291dFwiLCBcImpxdWVyeVwiLCBcImJvb3RzdHJhcFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlFZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSwgcmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImJvb3RzdHJhcFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5RWRpdG9yXCJdID0gZmFjdG9yeShyb290W1wia29cIl0sIHJvb3RbXCJTdXJ2ZXlcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJib290c3RyYXBcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjI3ZDA5MTY5MGRiZDlhODYwMzgiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImtvXCIsXCJjb21tb25qczJcIjpcImtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwia25vY2tvdXRcIixcImFtZFwiOlwia25vY2tvdXRcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwic3VydmV5LWtub2Nrb3V0XCIsXCJhbWRcIjpcInN1cnZleS1rbm9ja291dFwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIGVkaXRvckxvY2FsaXphdGlvbiA9IHtcbiAgICBjdXJyZW50TG9jYWxlOiBcIlwiLFxuICAgIGxvY2FsZXM6IHt9LFxuICAgIGdldFN0cmluZzogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmICghbG9jYWxlKSBsb2NhbGUgPSB0aGlzLmN1cnJlbnRMb2NhbGU7XG4gICAgICAgIHZhciBsb2MgPSBsb2NhbGUgPyB0aGlzLmxvY2FsZXNbbG9jYWxlXSA6IGRlZmF1bHRTdHJpbmdzO1xuICAgICAgICBpZiAoIWxvYykgbG9jID0gZGVmYXVsdFN0cmluZ3M7XG4gICAgICAgIHZhciBwYXRoID0gc3RyTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgb2JqID0gbG9jO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYyA9PT0gZGVmYXVsdFN0cmluZ3MpIHJldHVybiBwYXRoW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZyhzdHJOYW1lLCBcImVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eU5hbWU6IGZ1bmN0aW9uIChzdHJOYW1lOiBzdHJpbmcsIGxvY2FsOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmdldFByb3BlcnR5KHN0ck5hbWUsIGxvY2FsKTtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBvYmpbXCJuYW1lXCJdO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgZ2V0UHJvcGVydHlUaXRsZTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0UHJvcGVydHkoc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqW1widGl0bGVcIl0pIHJldHVybiBvYmpbXCJ0aXRsZVwiXTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0U3RyaW5nKFwicC5cIiArIHN0ck5hbWUsIGxvY2FsKTtcbiAgICAgICAgaWYgKG9iaiAhPT0gc3RyTmFtZSkgcmV0dXJuIG9iajtcbiAgICAgICAgdmFyIHBvcyA9IHN0ck5hbWUuaW5kZXhPZignXycpO1xuICAgICAgICBpZiAocG9zIDwgLTEpIHJldHVybiBvYmo7XG4gICAgICAgIHN0ck5hbWUgPSBzdHJOYW1lLnN1YnN0cihwb3MgKyAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKFwicC5cIiArIHN0ck5hbWUsIGxvY2FsKTtcbiAgICB9LFxuICAgIGdldExvY2FsZXM6IGZ1bmN0aW9uICgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICByZXMucHVzaChcIlwiKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbn07XG5cbmV4cG9ydCB2YXIgZGVmYXVsdFN0cmluZ3MgPSB7XG4gICAgLy9zdXJ2ZXkgdGVtcGxhdGVzXG4gICAgc3VydmV5OiB7XG4gICAgICAgIGRyb3BRdWVzdGlvbjogXCJQbGVhc2UgZHJvcCBhIHF1ZXN0aW9uIGhlcmUuXCIsXG4gICAgICAgIGNvcHk6IFwiQ29weVwiLFxuICAgICAgICBhZGRUb1Rvb2xib3g6IFwiQWRkIHRvIHRvb2xib3hcIixcbiAgICAgICAgZGVsZXRlUGFuZWw6IFwiRGVsZXRlIFBhbmVsXCIsXG4gICAgICAgIGRlbGV0ZVF1ZXN0aW9uOiBcIkRlbGV0ZSBRdWVzdGlvblwiXG4gICAgfSxcbiAgICAvL3F1ZXN0aW9uVHlwZXNcbiAgICBxdDoge1xuICAgICAgICBjaGVja2JveDogXCJDaGVja2JveFwiLFxuICAgICAgICBjb21tZW50OiBcIkNvbW1lbnRcIixcbiAgICAgICAgZHJvcGRvd246IFwiRHJvcGRvd25cIixcbiAgICAgICAgZmlsZTogXCJGaWxlXCIsXG4gICAgICAgIGh0bWw6IFwiSHRtbFwiLFxuICAgICAgICBtYXRyaXg6IFwiTWF0cml4IChzaW5nbGUgY2hvaWNlKVwiLFxuICAgICAgICBtYXRyaXhkcm9wZG93bjogXCJNYXRyaXggKG11bHRpcGxlIGNob2ljZSlcIixcbiAgICAgICAgbWF0cml4ZHluYW1pYzogXCJNYXRyaXggKGR5bmFtaWMgcm93cylcIixcbiAgICAgICAgbXVsdGlwbGV0ZXh0OiBcIk11bHRpcGxlIFRleHRcIixcbiAgICAgICAgcGFuZWw6IFwiUGFuZWxcIixcbiAgICAgICAgcmFkaW9ncm91cDogXCJSYWRpb2dyb3VwXCIsXG4gICAgICAgIHJhdGluZzogXCJSYXRpbmdcIixcbiAgICAgICAgdGV4dDogXCJTaW5nbGUgSW5wdXRcIlxuICAgIH0sXG4gICAgLy9TdHJpbmdzIGluIEVkaXRvclxuICAgIGVkOiB7XG4gICAgICAgIGFkZE5ld1BhZ2U6IFwiQWRkIE5ldyBQYWdlXCIsXG4gICAgICAgIG5ld1BhZ2VOYW1lOiBcInBhZ2VcIixcbiAgICAgICAgbmV3UXVlc3Rpb25OYW1lOiBcInF1ZXN0aW9uXCIsXG4gICAgICAgIG5ld1BhbmVsTmFtZTogXCJwYW5lbFwiLFxuICAgICAgICB0ZXN0U3VydmV5OiBcIlRlc3QgU3VydmV5XCIsXG4gICAgICAgIHRlc3RTdXJ2ZXlBZ2FpbjogXCJUZXN0IFN1cnZleSBBZ2FpblwiLFxuICAgICAgICB0ZXN0U3VydmV5V2lkdGg6IFwiU3VydmV5IHdpZHRoOiBcIixcbiAgICAgICAgZW1iZWRTdXJ2ZXk6IFwiRW1iZWQgU3VydmV5XCIsXG4gICAgICAgIHNhdmVTdXJ2ZXk6IFwiU2F2ZSBTdXJ2ZXlcIixcbiAgICAgICAgZGVzaWduZXI6IFwiU3VydmV5IERlc2lnbmVyXCIsXG4gICAgICAgIGpzb25FZGl0b3I6IFwiSlNPTiBFZGl0b3JcIixcbiAgICAgICAgdW5kbzogXCJVbmRvXCIsXG4gICAgICAgIHJlZG86IFwiUmVkb1wiLFxuICAgICAgICBvcHRpb25zOiBcIk9wdGlvbnNcIixcbiAgICAgICAgZ2VuZXJhdGVWYWxpZEpTT046IFwiR2VuZXJhdGUgVmFsaWQgSlNPTlwiLFxuICAgICAgICBnZW5lcmF0ZVJlYWRhYmxlSlNPTjogXCJHZW5lcmF0ZSBSZWFkYWJsZSBKU09OXCIsXG4gICAgICAgIHRvb2xib3g6IFwiVG9vbGJveFwiLFxuICAgICAgICBkZWxTZWxPYmplY3Q6IFwiRGVsZXRlIHNlbGVjdGVkIG9iamVjdFwiLFxuICAgICAgICBjb3JyZWN0SlNPTjogXCJQbGVhc2UgY29ycmVjdCBKU09OLlwiLFxuICAgICAgICBzdXJ2ZXlSZXN1bHRzOiBcIlN1cnZleSBSZXN1bHQ6IFwiXG4gICAgfSxcbiAgICAvL1Byb3BlcnR5IEVkaXRvcnNcbiAgICBwZToge1xuICAgICAgICBhcHBseTogXCJBcHBseVwiLFxuICAgICAgICBvazogXCJPS1wiLFxuICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXG4gICAgICAgIHJlc2V0OiBcIlJlc2V0XCIsXG4gICAgICAgIGNsb3NlOiBcIkNsb3NlXCIsXG4gICAgICAgIGRlbGV0ZTogXCJEZWxldGVcIixcbiAgICAgICAgYWRkTmV3OiBcIkFkZCBOZXdcIixcbiAgICAgICAgcmVtb3ZlQWxsOiBcIlJlbW92ZSBBbGxcIixcbiAgICAgICAgZWRpdDogXCJFZGl0XCIsXG4gICAgICAgIGVtcHR5OiBcIjxlbXB0eT5cIixcbiAgICAgICAgZmFzdEVudHJ5OiBcIkZhc3QgRW50cnlcIixcbiAgICAgICAgZm9ybUVudHJ5OiBcIkZvcm0gRW50cnlcIixcbiAgICAgICAgdGVzdFNlcnZpY2U6IFwiVGVzdCB0aGUgc2VydmljZVwiLFxuICAgICAgICBleHByZXNzaW9uSGVscDogXCJQbGVhc2UgZW50ZXIgYSBib29sZWFuIGV4cHJlc3Npb24uIEl0IHNob3VsZCByZXR1cm4gdHJ1ZSB0byBrZWVwIHRoZSBxdWVzdGlvbi9wYWdlIHZpc2libGUuIEZvciBleGFtcGxlOiB7cXVlc3Rpb24xfSA9ICd2YWx1ZTEnIG9yICh7cXVlc3Rpb24yfSA9IDMgYW5kIHtxdWVzdGlvbjN9IDwgNSlcIixcblxuICAgICAgICBwcm9wZXJ0eUlzRW1wdHk6IFwiUGxlYXNlIGVudGVyIHZhbHVlIGludG8gdGhlIHByb3BlcnR5XCIsXG4gICAgICAgIHZhbHVlOiBcIlZhbHVlXCIsXG4gICAgICAgIHRleHQ6IFwiVGV4dFwiLFxuICAgICAgICByZXF1aXJlZDogXCJSZXF1aXJlZD9cIixcbiAgICAgICAgY29sdW1uRWRpdDogXCJFZGl0IGNvbHVtbjogezB9XCIsXG4gICAgICAgIFxuICAgICAgICBoYXNPdGhlcjogXCJIYXMgb3RoZXIgaXRlbVwiLFxuICAgICAgICBuYW1lOiBcIk5hbWVcIixcbiAgICAgICAgdGl0bGU6IFwiVGl0bGVcIixcbiAgICAgICAgY2VsbFR5cGU6IFwiQ2VsbCB0eXBlXCIsXG4gICAgICAgIGNvbENvdW50OiBcIkNvbHVtbiBjb3VudFwiLFxuICAgICAgICBjaG9pY2VzT3JkZXI6IFwiU2VsZWN0IGNob2ljZXMgb3JkZXJcIixcbiAgICAgICAgdmlzaWJsZTogXCJJcyB2aXNpYmxlP1wiLFxuICAgICAgICBpc1JlcXVpcmVkOiBcIklzIHJlcXVpcmVkP1wiLFxuICAgICAgICBzdGFydFdpdGhOZXdMaW5lOiBcIklzIHN0YXJ0IHdpdGggbmV3IGxpbmU/XCIsXG4gICAgICAgIHJvd3M6IFwiUm93IGNvdW50XCIsXG4gICAgICAgIHBsYWNlSG9sZGVyOiBcIklucHV0IHBsYWNlIGhvbGRlclwiLFxuICAgICAgICBzaG93UHJldmlldzogXCJJcyBpbWFnZSBwcmV2aWV3IHNob3duP1wiLFxuICAgICAgICBzdG9yZURhdGFBc1RleHQ6IFwiU3RvcmUgZmlsZSBjb250ZW50IGluIEpTT04gcmVzdWx0IGFzIHRleHRcIixcbiAgICAgICAgbWF4U2l6ZTogXCJNYXhpbXVtIGZpbGUgc2l6ZSBpbiBieXRlc1wiLFxuICAgICAgICBpbWFnZUhlaWdodDogXCJJbWFnZSBoZWlnaHRcIixcbiAgICAgICAgaW1hZ2VXaWR0aDogXCJJbWFnZSB3aWR0aFwiLFxuICAgICAgICByb3dDb3VudDogXCJSb3cgY291bnRcIiwgXG4gICAgICAgIGFkZFJvd1RleHQ6IFwiQWRkIHJvdyBidXR0b24gdGV4dFwiLCBcbiAgICAgICAgcmVtb3ZlUm93VGV4dDogXCJSZW1vdmUgcm93IGJ1dHRvbiB0ZXh0XCIsXG4gICAgICAgIG1pblJhdGVEZXNjcmlwdGlvbjogXCJNaW5pbXVtIHJhdGUgZGVzY3JpcHRpb25cIiwgXG4gICAgICAgIG1heFJhdGVEZXNjcmlwdGlvbjogXCJNYXhpbXVtIHJhdGUgZGVzY3JpcHRpb25cIixcbiAgICAgICAgaW5wdXRUeXBlOiBcIklucHV0IHR5cGVcIixcbiAgICAgICAgb3B0aW9uc0NhcHRpb246IFwiT3B0aW9ucyBjYXB0aW9uXCIsXG5cbiAgICAgICAgcUVkaXRvclRpdGxlOiBcIkVkaXQgcXVlc3Rpb246IHswfVwiLFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgICBnZW5lcmFsOiBcIkdlbmVyYWxcIixcbiAgICAgICAgICAgIGZpbGVPcHRpb25zOiBcIk9wdGlvbnNcIixcbiAgICAgICAgICAgIGh0bWw6IFwiSHRtbCBFZGl0b3JcIixcbiAgICAgICAgICAgIGNvbHVtbnM6IFwiQ29sdW1uc1wiLFxuICAgICAgICAgICAgcm93czogXCJSb3dzXCIsXG4gICAgICAgICAgICBjaG9pY2VzOiBcIkNob2ljZXNcIixcbiAgICAgICAgICAgIHZpc2libGVJZjogXCJWaXNpYmxlIElmXCIsXG4gICAgICAgICAgICByYXRlVmFsdWVzOiBcIlJhdGUgVmFsdWVzXCIsXG4gICAgICAgICAgICBjaG9pY2VzQnlVcmw6IFwiQ2hvaWNlcyBmcm9tIFdlYlwiLFxuICAgICAgICAgICAgbWF0cml4Q2hvaWNlczogXCJEZWZhdWx0IENob2ljZXNcIixcbiAgICAgICAgICAgIG11bHRpcGxlVGV4dEl0ZW1zOiBcIlRleHQgSW5wdXRzXCJcbiAgICAgICAgfSxcblxuICAgICAgICBlZGl0UHJvcGVydHk6IFwiRWRpdCBwcm9wZXJ0eSAnezB9J1wiLFxuICAgICAgICBpdGVtczogXCJbIEl0ZW1zOiB7MH0gXVwiLFxuXG4gICAgICAgIGVudGVyTmV3VmFsdWU6IFwiUGxlYXNlLCBlbnRlciB0aGUgdmFsdWUuXCIsXG4gICAgICAgIG5vcXVlc3Rpb25zOiBcIlRoZXJlIGlzIG5vIGFueSBxdWVzdGlvbiBpbiB0aGUgc3VydmV5LlwiLFxuICAgICAgICBjcmVhdGV0cmlnZ2VyOiBcIlBsZWFzZSBjcmVhdGUgYSB0cmlnZ2VyXCIsXG4gICAgICAgIHRyaWdnZXJPbjogXCJPbiBcIixcbiAgICAgICAgdHJpZ2dlck1ha2VQYWdlc1Zpc2libGU6IFwiTWFrZSBwYWdlcyB2aXNpYmxlOlwiLFxuICAgICAgICB0cmlnZ2VyTWFrZVF1ZXN0aW9uc1Zpc2libGU6IFwiTWFrZSBxdWVzdGlvbnMgdmlzaWJsZTpcIixcbiAgICAgICAgdHJpZ2dlckNvbXBsZXRlVGV4dDogXCJDb21wbGV0ZSB0aGUgc3VydmV5IGlmIHN1Y2NlZWQuXCIsXG4gICAgICAgIHRyaWdnZXJOb3RTZXQ6IFwiVGhlIHRyaWdnZXIgaXMgbm90IHNldFwiLFxuICAgICAgICB0cmlnZ2VyUnVuSWY6IFwiUnVuIGlmXCIsXG4gICAgICAgIHRyaWdnZXJTZXRUb05hbWU6IFwiQ2hhbmdlIHZhbHVlIG9mOiBcIixcbiAgICAgICAgdHJpZ2dlclNldFZhbHVlOiBcInRvOiBcIixcbiAgICAgICAgdHJpZ2dlcklzVmFyaWFibGU6IFwiRG8gbm90IHB1dCB0aGUgdmFyaWFibGUgaW50byB0aGUgc3VydmV5IHJlc3VsdC5cIixcbiAgICAgICAgdmVyYkNoYW5nZVR5cGU6IFwiQ2hhbmdlIHR5cGUgXCIsXG4gICAgICAgIHZlcmJDaGFuZ2VQYWdlOiBcIkNoYW5nZSBwYWdlIFwiXG4gICAgfSxcbiAgICAvL09wZXJhdG9yc1xuICAgIG9wOiB7XG4gICAgICAgIGVtcHR5OiBcImlzIGVtcHR5XCIsXG4gICAgICAgIG5vdGVtcHR5OiBcImlzIG5vdCBlbXB0eVwiLFxuICAgICAgICBlcXVhbDogXCJlcXVhbHNcIixcbiAgICAgICAgbm90ZXF1YWw6IFwibm90IGVxdWFsc1wiLFxuICAgICAgICBjb250YWluczogXCJjb250YWluc1wiLFxuICAgICAgICBub3Rjb250YWluczogXCJub3QgY29udGFpbnNcIixcbiAgICAgICAgZ3JlYXRlcjogXCJncmVhdGVyXCIsXG4gICAgICAgIGxlc3M6IFwibGVzc1wiLFxuICAgICAgICBncmVhdGVyb3JlcXVhbDogXCJncmVhdGVyIG9yIGVxdWFsc1wiLFxuICAgICAgICBsZXNzb3JlcXVhbDogXCJMZXNzIG9yIEVxdWFsc1wiXG4gICAgfSxcbiAgICAvL0VtYmVkIHdpbmRvd1xuICAgIGV3OiB7XG4gICAgICAgIGFuZ3VsYXI6IFwiVXNlIEFuZ3VsYXIgdmVyc2lvblwiLFxuICAgICAgICBqcXVlcnk6IFwiVXNlIGpRdWVyeSB2ZXJzaW9uXCIsXG4gICAgICAgIGtub2Nrb3V0OiBcIlVzZSBLbm9ja291dCB2ZXJzaW9uXCIsXG4gICAgICAgIHJlYWN0OiBcIlVzZSBSZWFjdCB2ZXJzaW9uXCIsXG4gICAgICAgIHZ1ZTogXCJVc2UgVnVlIHZlcnNpb25cIixcbiAgICAgICAgYm9vdHN0cmFwOiBcIkZvciBib290c3RyYXAgZnJhbWV3b3JrXCIsXG4gICAgICAgIHN0YW5kYXJkOiBcIk5vIGJvb3RzdHJhcFwiLFxuICAgICAgICBzaG93T25QYWdlOiBcIlNob3cgc3VydmV5IG9uIGEgcGFnZVwiLFxuICAgICAgICBzaG93SW5XaW5kb3c6IFwiU2hvdyBzdXJ2ZXkgaW4gYSB3aW5kb3dcIixcbiAgICAgICAgbG9hZEZyb21TZXJ2ZXI6IFwiTG9hZCBTdXJ2ZXkgSlNPTiBmcm9tIHNlcnZlclwiLFxuICAgICAgICB0aXRsZVNjcmlwdDogXCJTY3JpcHRzIGFuZCBzdHlsZXNcIixcbiAgICAgICAgdGl0bGVIdG1sOiBcIkhUTUxcIixcbiAgICAgICAgdGl0bGVKYXZhU2NyaXB0OiBcIkphdmFTY3JpcHRcIlxuICAgIH0sXG4gICAgLy9Qcm9wZXJ0aWVzXG4gICAgcDoge1xuICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgdGl0bGU6IHsgbmFtZTogXCJ0aXRsZVwiLCB0aXRsZTogXCJMZWF2ZSBpdCBlbXB0eSwgaWYgaXQgaXMgdGhlIHNhbWUgYXMgJ05hbWUnXCIgfSxcbiAgICAgICAgc3VydmV5X3RpdGxlOiB7IG5hbWU6IFwidGl0bGVcIiwgdGl0bGU6IFwiSXQgd2lsbCBiZSBzaG93biBvbiBldmVyeSBwYWdlLlwiIH0sXG4gICAgICAgIHBhZ2VfdGl0bGU6IHsgbmFtZTogXCJ0aXRsZVwiLCB0aXRsZTogXCJQYWdlIHRpdGxlXCIgfVxuICAgIH1cbn07XG5cbmVkaXRvckxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBkZWZhdWx0U3RyaW5ncztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yTG9jYWxpemF0aW9uLnRzIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdFtcImFzc2lnblwiXSB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdGFyZ2V0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzLCBiYXNlQ2xhc3MpIHtcbiAgICBmb3IgKHZhciBwIGluIGJhc2VDbGFzcykgaWYgKGJhc2VDbGFzcy5oYXNPd25Qcm9wZXJ0eShwKSkgdGhpc0NsYXNzW3BdID0gYmFzZUNsYXNzW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gdGhpc0NsYXNzOyB9XG4gICAgdGhpc0NsYXNzLnByb3RvdHlwZSA9IGJhc2VDbGFzcyA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKSA6IChfXy5wcm90b3R5cGUgPSBiYXNlQ2xhc3MucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2hlbHBlcnMudHMiLCJleHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRFZGl0b3I6IHN0cmluZyA9IFwic3RyaW5nXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZWRpdG9yUmVnaXN0ZXJlZExpc3QgPSB7fTtcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRWRpdG9yKG5hbWU6IHN0cmluZywgY3JlYXRvcjogKCkgPT4gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlKSB7XG4gICAgICAgIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5lZGl0b3JSZWdpc3RlcmVkTGlzdFtuYW1lXSA9IGNyZWF0b3I7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWRpdG9yKGVkaXRvclR5cGU6IHN0cmluZywgZnVuYzogKG5ld1ZhbHVlOiBhbnkpID0+IGFueSk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgICAgIHZhciBjcmVhdG9yID0gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmVkaXRvclJlZ2lzdGVyZWRMaXN0W2VkaXRvclR5cGVdO1xuICAgICAgICBpZiAoIWNyZWF0b3IpIGNyZWF0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmRlZmF1bHRFZGl0b3JdO1xuICAgICAgICB2YXIgcHJvcGVydHlFZGl0b3IgPSBjcmVhdG9yKCk7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLm9uQ2hhbmdlZCA9IGZ1bmM7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eUVkaXRvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbHVlXzogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgb3B0aW9uczogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgb25DaGFuZ2VkOiAobmV3VmFsdWU6IGFueSkgPT4gYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgdGhyb3cgXCJlZGl0b3JUeXBlIGlzIG5vdCBkZWZpbmVkXCI7IH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcgeyByZXR1cm4gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLnZhbHVlXzsgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0Q29ycmVjdGVkVmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldFZhbHVlQ29yZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMudmFsdWVfID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRUaXRsZSh2YWx1ZTogc3RyaW5nKSB7IH1cbiAgICBwdWJsaWMgc2V0T2JqZWN0KHZhbHVlOiBhbnkpIHsgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENvcnJlY3RlZFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkgeyAgcmV0dXJuIHZhbHVlOyAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVN0cmluZ1Byb3BlcnR5RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInN0cmluZ1wiOyB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5RHJvcGRvd25Qcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJkcm9wZG93blwiOyB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5Qm9vbGVhblByb3BlcnR5RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImJvb2xlYW5cIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleU51bWJlclByb3BlcnR5RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIm51bWJlclwiOyB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInN0cmluZ1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlTdHJpbmdQcm9wZXJ0eUVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImRyb3Bkb3duXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJib29sZWFuXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcIm51bWJlclwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5RWRpdG9yQmFzZS50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3Ige1xuICAgIHB1YmxpYyBrb0l0ZW1zOiBhbnk7XG4gICAgcHVibGljIG9uRGVsZXRlQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25Nb3ZlVXBDbGljazogYW55O1xuICAgIHB1YmxpYyBvbk1vdmVEb3duQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25BZGRDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkNsZWFyQ2xpY2s6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvSXRlbXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYub25EZWxldGVDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoaXRlbSk7IH07XG4gICAgICAgIHNlbGYub25DbGVhckNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZUFsbCgpOyB9O1xuICAgICAgICBzZWxmLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuQWRkSXRlbSgpOyB9O1xuICAgICAgICBzZWxmLm9uTW92ZVVwQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLm1vdmVVcChpdGVtKTsgfTtcbiAgICAgICAgc2VsZi5vbk1vdmVEb3duQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLm1vdmVEb3duKGl0ZW0pOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICB2YXIgbGVuID0gdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLml0ZW1zXCIpW1wiZm9ybWF0XCJdKGxlbik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtdO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBBZGRJdGVtKCkge1xuICAgICAgICB0aGlzLmtvSXRlbXMucHVzaCh0aGlzLmNyZWF0ZU5ld0VkaXRvckl0ZW0oKSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtb3ZlVXAoaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDEpIHJldHVybjtcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCAtIDFdO1xuICAgICAgICBhcnJbaW5kZXggLSAxXSA9IGl0ZW07XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgbW92ZURvd24oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gYXJyLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCArIDFdO1xuICAgICAgICBhcnJbaW5kZXggKyAxXSA9IGl0ZW07XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29JdGVtcyh0aGlzLmdldEl0ZW1zRnJvbVZhbHVlKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRJdGVtc0Zyb21WYWx1ZSh2YWx1ZTogYW55ID0gbnVsbCk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgaWYoIXZhbHVlKSB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVFZGl0b3JJdGVtKHZhbHVlW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHZhciBpbnRlcm5hbEl0ZW1zID0gdGhpcy5rb0l0ZW1zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW50ZXJuYWxJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShpbnRlcm5hbEl0ZW1zW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUoaXRlbXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkgeyB0aHJvdyBcIk92ZXJyaWRlICdjcmVhdGVOZXdFZGl0b3JJdGVtJyBtZXRob2RcIjsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkgeyByZXR1cm4gaXRlbTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7ICByZXR1cm4gZWRpdG9ySXRlbTsgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbXNFZGl0b3IudHMiLCJpbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgZW51bSBPYmpUeXBlIHsgVW5rbm93biwgU3VydmV5LCBQYWdlLCBQYW5lbCwgUXVlc3Rpb24gfVxuZXhwb3J0IGNsYXNzIFN1cnZleUhlbHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdQYWdlTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UGFnZU5hbWVcIikpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE5ld1F1ZXN0aW9uTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UXVlc3Rpb25OYW1lXCIpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdQYW5lbE5hbWUob2JqczogQXJyYXk8YW55Pikge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld05hbWUob2JqcywgZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImVkLm5ld1BhbmVsTmFtZVwiKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmV3TmFtZShvYmpzOiBBcnJheTxhbnk+LCBiYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGhhc2ggPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoW29ianNbaV0ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBudW0gPSAxO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFoYXNoW2Jhc2VOYW1lICsgbnVtLnRvU3RyaW5nKCldKSBicmVhaztcbiAgICAgICAgICAgIG51bSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlTmFtZSArIG51bS50b1N0cmluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE9iamVjdFR5cGUob2JqOiBhbnkpOiBPYmpUeXBlIHtcbiAgICAgICAgaWYgKCFvYmogfHwgIW9ialtcImdldFR5cGVcIl0pIHJldHVybiBPYmpUeXBlLlVua25vd247XG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09IFwicGFnZVwiKSByZXR1cm4gT2JqVHlwZS5QYWdlO1xuICAgICAgICBpZiAob2JqLmdldFR5cGUoKSA9PSBcInBhbmVsXCIpIHJldHVybiBPYmpUeXBlLlBhbmVsO1xuICAgICAgICBpZiAob2JqLmdldFR5cGUoKSA9PSBcInN1cnZleVwiKSByZXR1cm4gT2JqVHlwZS5TdXJ2ZXk7XG4gICAgICAgIGlmIChvYmpbXCJuYW1lXCJdKSByZXR1cm4gT2JqVHlwZS5RdWVzdGlvbjtcbiAgICAgICAgcmV0dXJuIE9ialR5cGUuVW5rbm93bjtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmplY3ROYW1lKG9iajogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBvYmpbXCJuYW1lXCJdO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlICE9IE9ialR5cGUuUGFnZSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciBkYXRhID0gPFN1cnZleS5TdXJ2ZXk+KDxTdXJ2ZXkuUGFnZT5vYmopLmRhdGE7XG4gICAgICAgIHZhciBpbmRleCA9IGRhdGEucGFnZXMuaW5kZXhPZig8U3VydmV5LlBhZ2U+b2JqKTtcbiAgICAgICAgcmV0dXJuIFwiW1BhZ2UgXCIgKyAoaW5kZXggKyAxKSArIFwiXVwiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5SGVscGVyLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleU9iamVjdFByb3BlcnR5fSBmcm9tIFwiLi9vYmplY3RQcm9wZXJ0eVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdEVkaXRvciB7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdFZhbHVlOiBhbnk7XG4gICAgcHVibGljIHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMga29Qcm9wZXJ0aWVzOiBhbnk7XG4gICAgcHVibGljIGtvQWN0aXZlUHJvcGVydHk6IGFueTtcbiAgICBwdWJsaWMga29IYXNPYmplY3Q6IGFueTtcbiAgICBwdWJsaWMgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMocHJvcGVydHlFZGl0b3JPcHRpb25zKTtcbiAgICAgICAgdGhpcy5rb1Byb3BlcnRpZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvSGFzT2JqZWN0ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkT2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkT2JqZWN0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3RWYWx1ZSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvSGFzT2JqZWN0KHZhbHVlICE9IG51bGwpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllc09iamVjdCgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0T3B0aW9ucyhwcm9wZXJ0eUVkaXRvck9wdGlvbnM6IGFueSkge1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yT3B0aW9ucyA9IHByb3BlcnR5RWRpdG9yT3B0aW9ucztcbiAgICB9XG4gICAgcHVibGljIGdldFByb3BlcnR5RWRpdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHRoaXMua29Qcm9wZXJ0aWVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNbaV0ubmFtZSA9PSBuYW1lKSByZXR1cm4gcHJvcGVydGllc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGNoYW5nZUFjdGl2ZVByb3BlcnR5KHByb3BlcnR5OiBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkocHJvcGVydHkpO1xuICAgIH1cbiAgICBwdWJsaWMgT2JqZWN0Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzT2JqZWN0KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9wZXJ0aWVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRPYmplY3QgfHwgIXRoaXMuc2VsZWN0ZWRPYmplY3QuZ2V0VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5rb1Byb3BlcnRpZXMoW10pO1xuICAgICAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5KG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyh0aGlzLnNlbGVjdGVkT2JqZWN0LmdldFR5cGUoKSk7XG4gICAgICAgIHByb3BlcnRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA9PSBiLm5hbWUpIHJldHVybiAwO1xuICAgICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgb2JqZWN0UHJvcGVydGllcyA9IFtdO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9wRXZlbnQgPSAocHJvcGVydHk6IFN1cnZleU9iamVjdFByb3BlcnR5LCBuZXdWYWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzZWxmLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuZmlyZSh0aGlzLCB7IHByb3BlcnR5OiBwcm9wZXJ0eS5wcm9wZXJ0eSwgb2JqZWN0OiBwcm9wZXJ0eS5vYmplY3QsIG5ld1ZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuU2hvd1Byb3BlcnR5KHByb3BlcnRpZXNbaV0pKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBvYmplY3RQcm9wZXJ0eSA9IG5ldyBTdXJ2ZXlPYmplY3RQcm9wZXJ0eShwcm9wZXJ0aWVzW2ldLCBwcm9wRXZlbnQsIHRoaXMucHJvcGVydHlFZGl0b3JPcHRpb25zKTtcbiAgICAgICAgICAgIHZhciBsb2NOYW1lID0gdGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKCkgKyAnXycgKyBwcm9wZXJ0aWVzW2ldLm5hbWU7XG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0eS5kaXNwbGF5TmFtZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRQcm9wZXJ0eU5hbWUobG9jTmFtZSk7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0UHJvcGVydHlUaXRsZShsb2NOYW1lKTtcbiAgICAgICAgICAgIGlmICghdGl0bGUpIHRpdGxlID0gb2JqZWN0UHJvcGVydHkuZGlzcGxheU5hbWU7XG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0eS50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgb2JqZWN0UHJvcGVydGllcy5wdXNoKG9iamVjdFByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvUHJvcGVydGllcyhvYmplY3RQcm9wZXJ0aWVzKTtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5KHRoaXMuZ2V0UHJvcGVydHlFZGl0b3IoXCJuYW1lXCIpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNhblNob3dQcm9wZXJ0eShwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSk6IGJvb2xlYW4ge1xuICAgICAgICBpZihwcm9wZXJ0eVtcInZpc2libGVcIl0gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spIHJldHVybiB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sodGhpcy5zZWxlY3RlZE9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5rb1Byb3BlcnRpZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzW2ldLm9iamVjdCA9IHRoaXMuc2VsZWN0ZWRPYmplY3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdEVkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgcHVibGljIG9iamVjdDogYW55O1xuICAgIHB1YmxpYyB0aXRsZTogYW55O1xuICAgIHB1YmxpYyBvbkFwcGx5Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5vbkFwcGx5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYXBwbHkoKTsgfTtcbiAgICAgICAgc2VsZi5vblJlc2V0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYucmVzZXQoKTsgfTtcbiAgICB9XG4gICAgcHVibGljIHNldFRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy50aXRsZSh2YWx1ZSk7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkgeyB9XG4gICAgcHJpdmF0ZSByZXNldCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRPYmplY3QodmFsdWU6IGFueSkgeyB0aGlzLm9iamVjdCA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBpc0VkaXRhYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5vbkJlZm9yZUFwcGx5KCk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZWQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRleHRFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcbiAgICBwdWJsaWMga29WYWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInRleHRcIjsgfVxuICAgIHB1YmxpYyBnZXQgaXNFZGl0YWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHN0ciA9IHZhbHVlO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZSh0aGlzLmtvVmFsdWUoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlIdG1sRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImh0bWxcIjsgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlFeHByZXNzaW9uRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImV4cHJlc3Npb25cIjsgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0ZXh0XCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VGV4dEVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImh0bWxcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlIdG1sRWRpdG9yKCk7IH0pO1xuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiZXhwcmVzc2lvblwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eUV4cHJlc3Npb25FZGl0b3IoKTsgfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TW9kYWxFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eSwgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzfSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzXCI7XG5pbXBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93IHtcbiAgICBrb1Zpc2libGU6IGFueTtcbiAgICBrb0VkaXRvcjogYW55O1xuICAgIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtvVmlzaWJsZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvRWRpdG9yID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICB9XG4gICAgcHVibGljIHNob3cocXVlc3Rpb25CYXNlOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBvbkNoYW5nZWQ6IChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkgPT4gYW55KSB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3IocXVlc3Rpb25CYXNlLCB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spO1xuICAgICAgICBlZGl0b3Iub25DaGFuZ2VkID0gb25DaGFuZ2VkXG4gICAgICAgIHRoaXMua29FZGl0b3IoZWRpdG9yKTtcbiAgICAgICAgdGhpcy5rb1Zpc2libGUodHJ1ZSk7XG4gICAgICAgIGpRdWVyeShcIiNzdXJ2ZXlxdWVzdGlvbmVkaXRvcndpbmRvd1wiKS5tb2RhbChcInNob3dcIik7XG4gICAgICAgIGVkaXRvci5vbkhpZGVXaW5kb3cgPSBmdW5jdGlvbigpIHtqUXVlcnkoXCIjc3VydmV5cXVlc3Rpb25lZGl0b3J3aW5kb3dcIikubW9kYWwoXCJoaWRlXCIpO307XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25Qcm9wZXJ0aWVzIHtcbiAgICBwcml2YXRlIHByb3BlcnRpZXM6IEFycmF5PFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHk+O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbikge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKHRoaXMub2JqLmdldFR5cGUoKSk7IFxuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5IHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNbaV0ubmFtZSA9PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwcm9wZXJ0eSAmJiBwcm9wZXJ0eVtcInZpc2libGVcIl0gPT09IGZhbHNlKSBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMub2JqLCBwcm9wZXJ0eSkpIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSBcbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yIHtcbiAgICBwcm90ZWN0ZWQgcHJvcGVydGllczogU3VydmV5UXVlc3Rpb25Qcm9wZXJ0aWVzO1xuICAgIHB1YmxpYyBvbkNoYW5nZWQ6IChvYmo6IFN1cnZleS5CYXNlKSA9PiBhbnk7XG4gICAgcHVibGljIG9uSGlkZVdpbmRvdzogKCk9PiBhbnk7XG4gICAgcHVibGljIG9uT2tDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkFwcGx5Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XG4gICAga29UYWJzOiBhbnk7IGtvQWN0aXZlVGFiOiBhbnk7IGtvVGl0bGU6IGFueTtcbiAgICBvblRhYkNsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuLCBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYoIXRoaXMuY2xhc3NOYW1lKSB0aGlzLmNsYXNzTmFtZSA9IHRoaXMub2JqLmdldFR5cGUoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IFN1cnZleVF1ZXN0aW9uUHJvcGVydGllcyhvYmosIG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spO1xuICAgICAgICBzZWxmLm9uQXBwbHlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5hcHBseSgpOyB9O1xuICAgICAgICBzZWxmLm9uT2tDbGljayA9IGZ1bmN0aW9uKCkge3NlbGYuYXBwbHkoKTsgaWYoIXNlbGYuaGFzRXJyb3IoKSAmJiBzZWxmLm9uSGlkZVdpbmRvdykgc2VsZi5vbkhpZGVXaW5kb3coKTsgfTtcbiAgICAgICAgc2VsZi5vblJlc2V0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYucmVzZXQoKTsgfTtcbiAgICAgICAgdGhpcy5vblRhYkNsaWNrID0gZnVuY3Rpb24gKHRhYikgeyBzZWxmLmtvQWN0aXZlVGFiKHRhYi5uYW1lKTsgfTtcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLmJ1aWxkVGFicygpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlVGFiID0ga28ub2JzZXJ2YWJsZSh0YWJzWzBdLm5hbWUpO1xuICAgICAgICB0aGlzLmtvVGFicyA9IGtvLm9ic2VydmFibGVBcnJheSh0YWJzKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICBpZih0aGlzLm9ialtcIm5hbWVcIl0pIHtcbiAgICAgICAgICAgIHRoaXMua29UaXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUucUVkaXRvclRpdGxlXCIpW1wiZm9ybWF0XCJdKHRoaXMub2JqW1wibmFtZVwiXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLmtvVGFicygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YWJzW2ldLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtvQWN0aXZlVGFiKHRhYnNbaV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5rb1RhYnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YWJzW2ldLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcigpKSByZXR1cm47XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5rb1RhYnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YWJzW2ldLmFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlZCh0aGlzLm9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBidWlsZFRhYnMoKTogQXJyYXk8U3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlPiB7XG4gICAgICAgIHZhciB0YWJzID0gW107XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXModGhpcy5vYmosIFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5nZXRQcm9wZXJ0aWVzKHRoaXMuY2xhc3NOYW1lKSwgdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKTtcbiAgICAgICAgdGFicy5wdXNoKG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkdlbmVyYWwodGhpcy5vYmosIHByb3BlcnRpZXMpKTtcbiAgICAgICAgdGhpcy5hZGRQcm9wZXJ0aWVzVGFicyh0YWJzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YWJzW2ldLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhYnM7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkUHJvcGVydGllc1RhYnModGFiczogQXJyYXk8U3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlPikge1xuICAgICAgICB2YXIgdGFiTmFtZXMgPSBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0VGFicyh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFiTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWJJdGVtID0gdGFiTmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXMuZ2V0UHJvcGVydHkodGFiSXRlbS5uYW1lKTtcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIGVkaXRvclRhYiA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYlByb3BlcnR5KHRoaXMub2JqLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICBpZiAodGFiSXRlbS50aXRsZSkgZWRpdG9yVGFiLnRpdGxlID0gdGFiSXRlbS50aXRsZTtcbiAgICAgICAgICAgIHRhYnMucHVzaChlZGl0b3JUYWIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlIHtcbiAgICBwcml2YXRlIHRpdGxlVmFsdWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwibmFtZVwiOyB9XG4gICAgcHVibGljIGdldCB0aXRsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGl0bGVWYWx1ZSkgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZTtcbiAgICAgICAgdmFyIHN0ciA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50YWJzLlwiICsgdGhpcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ciA6IHRoaXMubmFtZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBodG1sVGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicXVlc3Rpb25lZGl0b3J0YWItXCIgKyB0aGlzLm5hbWU7IH1cbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlT2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7IH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0VmFsdWUocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBhbnkge1xuICAgICAgICBpZiAocHJvcGVydHkuaGFzVG9Vc2VHZXRWYWx1ZSkgcmV0dXJuIHByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqW3Byb3BlcnR5Lm5hbWVdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiR2VuZXJhbCBleHRlbmRzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBwcm9wZXJ0aWVzOiBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzID0gbnVsbCkge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzID8gcHJvcGVydGllcyA6IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzKG9iaiwgU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldFByb3BlcnRpZXMob2JqLmdldFR5cGUoKSksIG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZ2VuZXJhbFwiOyB9XG4gICAgcHVibGljIGdldCBodG1sVGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbFwiOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzLmhhc0Vycm9yKCk7IH0gXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMucmVzZXQoKTtcbiAgICB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMuYXBwbHkoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYlByb3BlcnR5IGV4dGVuZHMgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlIHtcbiAgICBwcml2YXRlIHByb3BlcnR5RWRpdG9yVmFsdWU6IFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3I7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWUgPSA8U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcj5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuY3JlYXRlRWRpdG9yKHRoaXMucHJvcGVydHkudHlwZSwgbnVsbCk7XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZS52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUodGhpcy5wcm9wZXJ0eSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eS5uYW1lOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wcm9wZXJ0eUVkaXRvci5oYXNFcnJvcigpOyB9XG4gICAgcHVibGljIGdldCBodG1sVGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicHJvcGVydHllZGl0b3Jjb250ZW50LVwiICsgdGhpcy5wcm9wZXJ0eS50eXBlOyB9XG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZU9iamVjdCgpOiBhbnkgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eUVkaXRvcjsgfVxuICAgIHB1YmxpYyBnZXQgcHJvcGVydHlFZGl0b3IoKTogU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7IHJldHVybiB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWU7IH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZS52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUodGhpcy5wcm9wZXJ0eSk7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvci5hcHBseSgpO1xuICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5Lm5hbWVdID0gdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlLnZhbHVlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlKU09ONX0gZnJvbSBcIi4vanNvbjVcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmNsYXNzIFRleHRQYXJzZXJQcm9wZXJ5IHtcbiAgICBpc0ZvdW5kOiBib29sZWFuO1xuICAgIHByb3BlcnRpZXNDb3VudDogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG4gICAgdmFsdWVTdGFydDogbnVtYmVyO1xuICAgIHZhbHVlRW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUZXh0V29ya2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIG5ld0xpbmVDaGFyOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yczogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIHByaXZhdGUganNvblZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlPYmplY3RzOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgaXNTdXJ2ZXlBc1BhZ2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy50ZXh0IHx8IHRoaXMudGV4dC50cmltKCkgPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJ7fVwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzSnNvbkNvcnJlY3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlICE9IG51bGw7IH1cbiAgICBwcm90ZWN0ZWQgcHJvY2VzcygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuanNvblZhbHVlID0gbmV3IFN1cnZleUpTT041KDEpLnBhcnNlKHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHsgcG9zOiB7IHN0YXJ0OiBlcnJvci5hdCwgZW5kOiAtMSB9LCB0ZXh0OiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmpzb25WYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnModGhpcy5qc29uVmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IG5ldyBTdXJ2ZXkuU3VydmV5KHRoaXMuanNvblZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlLmpzb25FcnJvcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMuc3VydmV5VmFsdWUuanNvbkVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7IHBvczogeyBzdGFydDogZXJyb3IuYXQsIGVuZDogLTEgfSwgdGV4dDogZXJyb3IuZ2V0RnVsbERlc2NyaXB0aW9uKCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cyA9IHRoaXMuY3JlYXRlU3VydmV5T2JqZWN0cygpO1xuICAgICAgICB0aGlzLnNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KHRoaXMuc3VydmV5T2JqZWN0cyk7XG4gICAgICAgIHRoaXMuc2V0RWRpdG9yUG9zaXRpb25CeUNoYXJ0QXQodGhpcy5lcnJvcnMpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUpzb25Qb3NpdGlvbnMoanNvbk9iajogYW55KSB7XG4gICAgICAgIGpzb25PYmpbXCJwb3NcIl1bXCJzZWxmXCJdID0ganNvbk9iajtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb25PYmopIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBqc29uT2JqW2tleV07XG4gICAgICAgICAgICBpZiAob2JqICYmIG9ialtcInBvc1wiXSkge1xuICAgICAgICAgICAgICAgIGpzb25PYmpbXCJwb3NcIl1ba2V5XSA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnMob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVN1cnZleU9iamVjdHMoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUgPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgdGhpcy5pc1N1cnZleUFzUGFnZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5VmFsdWUucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlc1tpXTtcbiAgICAgICAgICAgIGlmIChpID09IDAgJiYgIXBhZ2VbXCJwb3NcIl0pIHtcbiAgICAgICAgICAgICAgICBwYWdlW1wicG9zXCJdID0gdGhpcy5zdXJ2ZXlWYWx1ZVtcInBvc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VydmV5QXNQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UucXVlc3Rpb25zW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIHNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KG9iamVjdHM6IGFueVtdKSB7XG4gICAgICAgIGlmIChvYmplY3RzID09IG51bGwgfHwgb2JqZWN0cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB7IHJvdzogMCwgY29sdW1uOiAwIH07XG4gICAgICAgIHZhciBhdE9iamVjdHNBcnJheSA9IHRoaXMuZ2V0QXRBcnJheShvYmplY3RzKTtcbiAgICAgICAgdmFyIHN0YXJ0QXQ6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXRPYmplY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhdCA9IGF0T2JqZWN0c0FycmF5W2ldLmF0O1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc3Rpb25CeUNoYXJ0QXQocG9zaXRpb24sIHN0YXJ0QXQsIGF0KTtcbiAgICAgICAgICAgIHZhciBvYmogPSBhdE9iamVjdHNBcnJheVtpXS5vYmo7XG4gICAgICAgICAgICBpZiAoIW9iai5wb3NpdGlvbikgb2JqLnBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoYXQgPT0gb2JqLnBvcy5zdGFydCkge1xuICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi5zdGFydCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXQgPT0gb2JqLnBvcy5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBvc2l0aW9uLmVuZCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0QXQgPSBhdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFBvc3Rpb25CeUNoYXJ0QXQoc3RhcnRQb3NpdGlvbjogYW55LCBzdGFydEF0OiBudW1iZXIsIGF0OiBudW1iZXIpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0geyByb3c6IHN0YXJ0UG9zaXRpb24ucm93LCBjb2x1bW46IHN0YXJ0UG9zaXRpb24uY29sdW1uIH07XG4gICAgICAgIHZhciBjdXJDaGFyID0gc3RhcnRBdDtcbiAgICAgICAgd2hpbGUgKGN1ckNoYXIgPCBhdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5jaGFyQXQoY3VyQ2hhcikgPT0gU3VydmV5VGV4dFdvcmtlci5uZXdMaW5lQ2hhcikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5yb3crKztcbiAgICAgICAgICAgICAgICByZXN1bHQuY29sdW1uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbHVtbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VyQ2hhcisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXRBcnJheShvYmplY3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuICAgICAgICAgICAgdmFyIHBvcyA9IG9iai5wb3M7XG4gICAgICAgICAgICBpZiAoIXBvcykgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGF0OiBwb3Muc3RhcnQsIG9iajogb2JqIH0pO1xuICAgICAgICAgICAgaWYgKHBvcy5lbmQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBhdDogcG9zLmVuZCwgb2JqOiBvYmogfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5zb3J0KChlbDEsIGVsMikgPT4ge1xuICAgICAgICAgICAgaWYgKGVsMS5hdCA+IGVsMi5hdCkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoZWwxLmF0IDwgZWwyLmF0KSByZXR1cm4gLTE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0V29ya2VyLnRzIiwiLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIEpTT041LCBodHRwOi8vanNvbjUub3JnL1xuLy8gVGhlIG1vZGlmaWNhdGlvbiBmb3IgZ2V0dGluZyBvYmplY3QgYW5kIHByb3BlcnRpZXMgbG9jYXRpb24gJ2F0JyB3ZXJlIG1hZGVuLlxuXG5leHBvcnQgY2xhc3MgU3VydmV5SlNPTjUge1xuICAgIHB1YmxpYyBzdGF0aWMgcG9zaXRpb25OYW1lID0gXCJwb3NcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGVlID0ge1xuICAgICAgICBcIidcIjogXCInXCIsXG4gICAgICAgICdcIic6ICdcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFwnLFxuICAgICAgICAnLyc6ICcvJyxcbiAgICAgICAgJ1xcbic6ICcnLCAgICAgICAvLyBSZXBsYWNlIGVzY2FwZWQgbmV3bGluZXMgaW4gc3RyaW5ncyB3LyBlbXB0eSBzdHJpbmdcbiAgICAgICAgYjogJ1xcYicsXG4gICAgICAgIGY6ICdcXGYnLFxuICAgICAgICBuOiAnXFxuJyxcbiAgICAgICAgcjogJ1xccicsXG4gICAgICAgIHQ6ICdcXHQnXG4gICAgfTtcbiAgICBwcml2YXRlIHN0YXRpYyB3cyA9IFtcbiAgICAgICAgJyAnLFxuICAgICAgICAnXFx0JyxcbiAgICAgICAgJ1xccicsXG4gICAgICAgICdcXG4nLFxuICAgICAgICAnXFx2JyxcbiAgICAgICAgJ1xcZicsXG4gICAgICAgICdcXHhBMCcsXG4gICAgICAgICdcXHVGRUZGJ1xuICAgIF07XG4gICAgcHJpdmF0ZSBlbmRBdDogbnVtYmVyO1xuICAgIHByaXZhdGUgYXQ6IG51bWJlcjsgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBwcml2YXRlIGNoOiBhbnk7ICAgICAvLyBUaGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBhcnNlVHlwZTogbnVtYmVyOyAvLyAwIC0gc3RhZGFyZCwgMSAtIGdldCBpbmZvcm1hdGlvbiBhYm91dCBvYmplY3RzLCAyIC0gZ2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBwcm9wZXJ0aWVzXG4gICAgY29uc3RydWN0b3IocGFyc2VUeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyc2VUeXBlID0gcGFyc2VUeXBlO1xuICAgIH1cbiAgICBwdWJsaWMgcGFyc2Uoc291cmNlOiBhbnksIHJldml2ZXI6IGFueSA9IG51bGwsIHN0YXJ0RnJvbTogbnVtYmVyID0gMCwgZW5kQXQ6IG51bWJlciA9IC0xKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnRleHQgPSBTdHJpbmcoc291cmNlKTtcbiAgICAgICAgdGhpcy5hdCA9IHN0YXJ0RnJvbTtcbiAgICAgICAgdGhpcy5lbmRBdCA9IGVuZEF0O1xuICAgICAgICB0aGlzLmNoID0gJyAnO1xuICAgICAgICByZXN1bHQgPSB0aGlzLnZhbHVlKCk7XG4gICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJTeW50YXggZXJyb3JcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHJldml2ZXIgZnVuY3Rpb24sIHdlIHJlY3Vyc2l2ZWx5IHdhbGsgdGhlIG5ldyBzdHJ1Y3R1cmUsXG4gICAgICAgIC8vIHBhc3NpbmcgZWFjaCBuYW1lL3ZhbHVlIHBhaXIgdG8gdGhlIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlXG4gICAgICAgIC8vIHRyYW5zZm9ybWF0aW9uLCBzdGFydGluZyB3aXRoIGEgdGVtcG9yYXJ5IHJvb3Qgb2JqZWN0IHRoYXQgaG9sZHMgdGhlIHJlc3VsdFxuICAgICAgICAvLyBpbiBhbiBlbXB0eSBrZXkuIElmIHRoZXJlIGlzIG5vdCBhIHJldml2ZXIgZnVuY3Rpb24sIHdlIHNpbXBseSByZXR1cm4gdGhlXG4gICAgICAgIC8vIHJlc3VsdC5cblxuICAgICAgICByZXR1cm4gdHlwZW9mIHJldml2ZXIgPT09ICdmdW5jdGlvbicgPyAoZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuICAgICAgICAgICAgdmFyIGssIHYsIHZhbHVlID0gaG9sZGVyW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9ICh7ICcnOiByZXN1bHQgfSwgJycpKSA6IHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBlcnJvcihtOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gQ2FsbCBlcnJvciB3aGVuIHNvbWV0aGluZyBpcyB3cm9uZy5cbiAgICAgICAgdmFyIGVycm9yID0gbmV3IFN5bnRheEVycm9yKCk7XG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPSBtO1xuICAgICAgICBlcnJvcltcImF0XCJdID0gdGhpcy5hdDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHByaXZhdGUgbmV4dChjOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIC8vIElmIGEgYyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHZlcmlmeSB0aGF0IGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuICAgICAgICBpZiAoYyAmJiBjICE9PSB0aGlzLmNoKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiRXhwZWN0ZWQgJ1wiICsgYyArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHRoaXMuY2ggKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyLiBXaGVuIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMsXG4gICAgICAgIC8vIHJldHVybiB0aGUgZW1wdHkgc3RyaW5nLlxuICAgICAgICB0aGlzLmNoID0gdGhpcy5jaGFydEF0KCk7XG4gICAgICAgIHRoaXMuYXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2g7XG4gICAgfVxuICAgIHByaXZhdGUgcGVlaygpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyIHdpdGhvdXQgY29uc3VtaW5nIGl0IG9yXG4gICAgICAgIC8vIGFzc2lnbmluZyBpdCB0byB0aGUgdGhpcy5jaCB2YXJhaWJsZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcnRBdCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGNoYXJ0QXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZEF0ID4gLTEgJiYgdGhpcy5hdCA+PSB0aGlzLmVuZEF0KSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQuY2hhckF0KHRoaXMuYXQpO1xuICAgIH1cbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKSB7XG4gICAgICAgIC8vIFBhcnNlIGFuIGlkZW50aWZpZXIuIE5vcm1hbGx5LCByZXNlcnZlZCB3b3JkcyBhcmUgZGlzYWxsb3dlZCBoZXJlLCBidXQgd2VcbiAgICAgICAgLy8gb25seSB1c2UgdGhpcyBmb3IgdW5xdW90ZWQgb2JqZWN0IGtleXMsIHdoZXJlIHJlc2VydmVkIHdvcmRzIGFyZSBhbGxvd2VkLFxuICAgICAgICAvLyBzbyB3ZSBkb24ndCBjaGVjayBmb3IgdGhvc2UgaGVyZS4gUmVmZXJlbmNlczpcbiAgICAgICAgLy8gLSBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3g3LjZcbiAgICAgICAgLy8gLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9Db3JlX0phdmFTY3JpcHRfMS41X0d1aWRlL0NvcmVfTGFuZ3VhZ2VfRmVhdHVyZXMjVmFyaWFibGVzXG4gICAgICAgIC8vIC0gaHR0cDovL2RvY3N0b3JlLm1pay51YS9vcmVsbHkvd2VicHJvZy9qc2NyaXB0L2NoMDJfMDcuaHRtXG4gICAgICAgIC8vIFRPRE8gSWRlbnRpZmllcnMgY2FuIGhhdmUgVW5pY29kZSBcImxldHRlcnNcIiBpbiB0aGVtOyBhZGQgc3VwcG9ydCBmb3IgdGhvc2UuXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmNoO1xuXG4gICAgICAgIC8vIElkZW50aWZpZXJzIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgXyBvciAkLlxuICAgICAgICBpZiAoKHRoaXMuY2ggIT09ICdfJyAmJiB0aGlzLmNoICE9PSAnJCcpICYmXG4gICAgICAgICAgICAodGhpcy5jaCA8ICdhJyB8fCB0aGlzLmNoID4gJ3onKSAmJlxuICAgICAgICAgICAgKHRoaXMuY2ggPCAnQScgfHwgdGhpcy5jaCA+ICdaJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgaWRlbnRpZmllclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1YnNlcXVlbnQgY2hhcmFjdGVycyBjYW4gY29udGFpbiBkaWdpdHMuXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHQoKSAmJiAoXG4gICAgICAgIHRoaXMuY2ggPT09ICdfJyB8fCB0aGlzLmNoID09PSAnJCcgfHxcbiAgICAgICAgKHRoaXMuY2ggPj0gJ2EnICYmIHRoaXMuY2ggPD0gJ3onKSB8fFxuICAgICAgICAodGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnWicpIHx8XG4gICAgICAgICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JykpKSB7XG4gICAgICAgICAgICBrZXkgKz0gdGhpcy5jaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHByaXZhdGUgbnVtYmVyKCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgbnVtYmVyIHZhbHVlLlxuXG4gICAgICAgIHZhciBudW1iZXIsXG4gICAgICAgICAgICBzaWduID0gJycsXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGJhc2UgPSAxMDtcblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy0nIHx8IHRoaXMuY2ggPT09ICcrJykge1xuICAgICAgICAgICAgc2lnbiA9IHRoaXMuY2g7XG4gICAgICAgICAgICB0aGlzLm5leHQodGhpcy5jaCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBJbmZpbml0eSAoY291bGQgdHdlYWsgdG8gYWxsb3cgb3RoZXIgd29yZHMpOlxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ0knKSB7XG4gICAgICAgICAgICBudW1iZXIgPSB0aGlzLndvcmQoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJyB8fCBpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignVW5leHBlY3RlZCB3b3JkIGZvciBudW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoc2lnbiA9PT0gJy0nKSA/IC1udW1iZXIgOiBudW1iZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBOYU5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdOJykge1xuICAgICAgICAgICAgbnVtYmVyID0gdGhpcy53b3JkKCk7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdleHBlY3RlZCB3b3JkIHRvIGJlIE5hTicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWdub3JlIHNpZ24gYXMgLU5hTiBhbHNvIGlzIE5hTlxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnMCcpIHtcbiAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3gnIHx8IHRoaXMuY2ggPT09ICdYJykge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGJhc2UgPSAxNjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdPY3RhbCBsaXRlcmFsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGJhc2UpIHtcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gJy4nO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkgJiYgdGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnZScgfHwgdGhpcy5jaCA9PT0gJ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICctJyB8fCB0aGlzLmNoID09PSAnKycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScgfHwgdGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnRicgfHwgdGhpcy5jaCA+PSAnYScgJiYgdGhpcy5jaCA8PSAnZicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduID09PSAnLScpIHtcbiAgICAgICAgICAgIG51bWJlciA9IC1zdHJpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1iZXIgPSArc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmFkIG51bWJlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzdHJpbmcoKSB7XG5cbiAgICAgICAgLy8gUGFyc2UgYSBzdHJpbmcgdmFsdWUuXG5cbiAgICAgICAgdmFyIGhleCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGRlbGltLCAgICAgIC8vIGRvdWJsZSBxdW90ZSBvciBzaW5nbGUgcXVvdGVcbiAgICAgICAgICAgIHVmZmZmO1xuXG4gICAgICAgIC8vIFdoZW4gcGFyc2luZyBmb3Igc3RyaW5nIHZhbHVlcywgd2UgbXVzdCBsb29rIGZvciAnIG9yIFwiIGFuZCBcXCBjaGFyYWN0ZXJzLlxuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnXCInIHx8IHRoaXMuY2ggPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICBkZWxpbSA9IHRoaXMuY2g7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gZGVsaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVmZmZmID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXggPSBwYXJzZUludCh0aGlzLm5leHQoKSwgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNGaW5pdGUoaGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWZmZmYgPSB1ZmZmZiAqIDE2ICsgaGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodWZmZmYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICdcXHInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIFN1cnZleUpTT041LmVzY2FwZWVbdGhpcy5jaF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3VydmV5SlNPTjUuZXNjYXBlZVt0aGlzLmNoXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmVzY2FwZWQgbmV3bGluZXMgYXJlIGludmFsaWQ7IHNlZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FzZWVtay9qc29uNS9pc3N1ZXMvMjRcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyB0aGlzIGZlZWxzIHNwZWNpYWwtY2FzZWQ7IGFyZSB0aGVyZSBvdGhlclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnZhbGlkIHVuZXNjYXBlZCBjaGFycz9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgc3RyaW5nXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGlubGluZUNvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhbiBpbmxpbmUgY29tbWVudCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuIFRoZSBjdXJyZW50IGNoYXJhY3RlciBzaG91bGRcbiAgICAgICAgLy8gYmUgdGhlIHNlY29uZCAvIGNoYXJhY3RlciBpbiB0aGUgLy8gcGFpciB0aGF0IGJlZ2lucyB0aGlzIGlubGluZSBjb21tZW50LlxuICAgICAgICAvLyBUbyBmaW5pc2ggdGhlIGlubGluZSBjb21tZW50LCB3ZSBsb29rIGZvciBhIG5ld2xpbmUgb3IgdGhlIGVuZCBvZiB0aGUgdGV4dC5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGFuIGlubGluZSBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1xcbicgfHwgdGhpcy5jaCA9PT0gJ1xccicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuY2gpO1xuICAgIH1cbiAgICBwcml2YXRlIGJsb2NrQ29tbWVudCgpIHtcblxuICAgICAgICAvLyBTa2lwIGEgYmxvY2sgY29tbWVudCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuIFRoZSBjdXJyZW50IGNoYXJhY3RlciBzaG91bGQgYmVcbiAgICAgICAgLy8gdGhlICogY2hhcmFjdGVyIGluIHRoZSAvKiBwYWlyIHRoYXQgYmVnaW5zIHRoaXMgYmxvY2sgY29tbWVudC5cbiAgICAgICAgLy8gVG8gZmluaXNoIHRoZSBibG9jayBjb21tZW50LCB3ZSBsb29rIGZvciBhbiBlbmRpbmcgKi8gcGFpciBvZiBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyBidXQgd2UgYWxzbyB3YXRjaCBmb3IgdGhlIGVuZCBvZiB0ZXh0IGJlZm9yZSB0aGUgY29tbWVudCBpcyB0ZXJtaW5hdGVkLlxuXG4gICAgICAgIGlmICh0aGlzLmNoICE9PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJOb3QgYSBibG9jayBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcqJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodGhpcy5jaCk7XG5cbiAgICAgICAgdGhpcy5lcnJvcihcIlVudGVybWluYXRlZCBibG9jayBjb21tZW50XCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhIGNvbW1lbnQsIHdoZXRoZXIgaW5saW5lIG9yIGJsb2NrLWxldmVsLCBhc3N1bWluZyB0aGlzIGlzIG9uZS5cbiAgICAgICAgLy8gQ29tbWVudHMgYWx3YXlzIGJlZ2luIHdpdGggYSAvIGNoYXJhY3Rlci5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGEgY29tbWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmV4dCgnLycpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnLycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5saW5lQ29tbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICcqJykge1xuICAgICAgICAgICAgdGhpcy5ibG9ja0NvbW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJVbnJlY29nbml6ZWQgY29tbWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHdoaXRlKCkge1xuXG4gICAgICAgIC8vIFNraXAgd2hpdGVzcGFjZSBhbmQgY29tbWVudHMuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSdyZSBkZXRlY3RpbmcgY29tbWVudHMgYnkgb25seSBhIHNpbmdsZSAvIGNoYXJhY3Rlci5cbiAgICAgICAgLy8gVGhpcyB3b3JrcyBzaW5jZSByZWd1bGFyIGV4cHJlc3Npb25zIGFyZSBub3QgdmFsaWQgSlNPTig1KSwgYnV0IHRoaXMgd2lsbFxuICAgICAgICAvLyBicmVhayBpZiB0aGVyZSBhcmUgb3RoZXIgdmFsaWQgdmFsdWVzIHRoYXQgYmVnaW4gd2l0aCBhIC8gY2hhcmFjdGVyIVxuXG4gICAgICAgIHdoaWxlICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFN1cnZleUpTT041LndzLmluZGV4T2YodGhpcy5jaCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB3b3JkKCk6IGFueSB7XG5cbiAgICAgICAgLy8gdHJ1ZSwgZmFsc2UsIG9yIG51bGwuXG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2UnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnYScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgncycpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnSSc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdJJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdmJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiVW5leHBlY3RlZCAnXCIgKyB0aGlzLmNoICsgXCInXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGFycmF5KCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGFuIGFycmF5IHZhbHVlLlxuXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnWycpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgnWycpO1xuICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ10nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnXScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgYXJyYXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRVM1IGFsbG93cyBvbWl0dGluZyBlbGVtZW50cyBpbiBhcnJheXMsIGUuZy4gWyxdIGFuZFxuICAgICAgICAgICAgICAgIC8vIFssbnVsbF0uIFdlIGRvbid0IGFsbG93IHRoaXMgaW4gSlNPTjUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiTWlzc2luZyBhcnJheSBlbGVtZW50XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGhpcy52YWx1ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyB2YWx1ZSwgdGhpcyBuZWVkcyB0b1xuICAgICAgICAgICAgICAgIC8vIGJlIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoICE9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgYXJyYXlcIik7XG4gICAgfVxuICAgIHByaXZhdGUgb2JqZWN0KCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGFuIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSB0cnVlLFxuICAgICAgICAgICAgb2JqZWN0ID0ge307XG4gICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDApIHtcbiAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdID0geyBzdGFydDogdGhpcy5hdCAtIDEgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3snKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoJ3snKTtcbiAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV0uZW5kID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd9Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgb2JqZWN0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gS2V5cyBjYW4gYmUgdW5xdW90ZWQuIElmIHRoZXkgYXJlLCB0aGV5IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyB2YWxpZCBKUyBpZGVudGlmaWVycy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1wiJyB8fCB0aGlzLmNoID09PSBcIidcIikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnN0cmluZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0gPSB7IHN0YXJ0OiBzdGFydCwgdmFsdWVTdGFydDogdGhpcy5hdCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJzonKTtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHRoaXMudmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0udmFsdWVFbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyBwYWlyLCB0aGlzIG5lZWRzIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoICE9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXS5lbmQgPSB0aGlzLmF0IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ30nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLnZhbHVlRW5kLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLmVuZC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnLCcpO1xuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiQmFkIG9iamVjdFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB2YWx1ZSgpOiBhbnkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgSlNPTiB2YWx1ZS4gSXQgY291bGQgYmUgYW4gb2JqZWN0LCBhbiBhcnJheSwgYSBzdHJpbmcsIGEgbnVtYmVyLFxuICAgICAgICAvLyBvciBhIHdvcmQuXG5cbiAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdCgpO1xuICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkoKTtcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JyA/IHRoaXMubnVtYmVyKCkgOiB0aGlzLndvcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVwbGFjZXI6IGFueTtcbiAgICBwcml2YXRlIGluZGVudFN0cjogc3RyaW5nO1xuICAgIHByaXZhdGUgb2JqU3RhY2s7XG5cbiAgICBwdWJsaWMgc3RyaW5naWZ5KG9iajogYW55LCByZXBsYWNlcjogYW55ID0gbnVsbCwgc3BhY2U6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcGxhY2VyICYmICh0eXBlb2YgKHJlcGxhY2VyKSAhPT0gXCJmdW5jdGlvblwiICYmICF0aGlzLmlzQXJyYXkocmVwbGFjZXIpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXBsYWNlciBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgICAgIHRoaXMuaW5kZW50U3RyID0gdGhpcy5nZXRJbmRlbnQoc3BhY2UpO1xuICAgICAgICB0aGlzLm9ialN0YWNrID0gW107XG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZS4uLndoZW4gdW5kZWZpbmVkIGlzIHVzZWQgaW5zaWRlIG9mXG4gICAgICAgIC8vIGEgY29tcG91bmQgb2JqZWN0L2FycmF5LCByZXR1cm4gbnVsbC5cbiAgICAgICAgLy8gYnV0IHdoZW4gdG9wLWxldmVsLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIHZhciB0b3BMZXZlbEhvbGRlciA9IHsgXCJcIjogb2JqIH07XG4gICAgICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKHRvcExldmVsSG9sZGVyLCAnJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJpbmdpZnkodG9wTGV2ZWxIb2xkZXIsICcnLCB0cnVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbmRlbnQoc3BhY2U6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzcGFjZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGFjZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcGFjZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSBcIm51bWJlclwiICYmIHNwYWNlID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW5kZW50KFwiIFwiLCBzcGFjZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xuICAgICAgICB2YXIgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSB2YWx1ZSB3aXRoIGl0cyB0b0pTT04gdmFsdWUgZmlyc3QsIGlmIHBvc3NpYmxlXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50b0pTT04gJiYgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHVzZXItc3VwcGxpZWQgcmVwbGFjZXIgaWYgYSBmdW5jdGlvbiwgY2FsbCBpdC4gSWYgaXQncyBhbiBhcnJheSwgY2hlY2sgb2JqZWN0cycgc3RyaW5nIGtleXMgZm9yXG4gICAgICAgIC8vIHByZXNlbmNlIGluIHRoZSBhcnJheSAocmVtb3ZpbmcgdGhlIGtleS92YWx1ZSBwYWlyIGZyb20gdGhlIHJlc3VsdGluZyBKU09OIGlmIHRoZSBrZXkgaXMgbWlzc2luZykuXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucmVwbGFjZXIpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlcGxhY2VyKSB7XG4gICAgICAgICAgICBpZiAoaXNUb3BMZXZlbCB8fCB0aGlzLmlzQXJyYXkoaG9sZGVyKSB8fCB0aGlzLnJlcGxhY2VyLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1dvcmRDaGFyKGNoYXI6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknKSB8fFxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZFN0YXJ0KGNoYXI6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKSB8fFxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZChrZXk6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNXb3JkU3RhcnQoa2V5WzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMSwgbGVuZ3RoID0ga2V5Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dvcmRDaGFyKGtleVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIHBvbHlmaWxsc1xuICAgIHByaXZhdGUgaXNBcnJheShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNEYXRlKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNOYU4odmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmIHZhbCAhPT0gdmFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGb3JDaXJjdWxhcihvYmo6IGFueSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2JqU3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ialN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG1ha2VJbmRlbnQoc3RyOiBzdHJpbmcsIG51bTogbnVtYmVyLCBub05ld0xpbmU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXN0cikge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5kZW50YXRpb24gbm8gbW9yZSB0aGFuIDEwIGNoYXJzXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGVudCA9IG5vTmV3TGluZSA/IFwiXCIgOiBcIlxcblwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBpbmRlbnQgKz0gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGVudDtcbiAgICB9XG5cbiAgICAvLyBDb3BpZWQgZnJvbSBDcm9rZm9yZCdzIGltcGxlbWVudGF0aW9uIG9mIEpTT05cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2RvdWdsYXNjcm9ja2ZvcmQvSlNPTi1qcy9ibG9iL2UzOWRiNGI3ZTYyNDlmMDRhMTk1ZTdkZDA4NDBlNjEwY2M5ZTk0MWUvanNvbjIuanMjTDE5NVxuICAgIC8vIEJlZ2luXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3ggPSAvW1xcdTAwMDBcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nO1xuICAgIHByaXZhdGUgc3RhdGljIG1ldGEgPSB7IC8vIHRhYmxlIG9mIGNoYXJhY3RlciBzdWJzdGl0dXRpb25zXG4gICAgICAgICdcXGInOiAnXFxcXGInLFxuICAgICAgICAnXFx0JzogJ1xcXFx0JyxcbiAgICAgICAgJ1xcbic6ICdcXFxcbicsXG4gICAgICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICAgICAnXFxyJzogJ1xcXFxyJyxcbiAgICAgICAgJ1wiJzogJ1xcXFxcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFxcXFxcJ1xuICAgIH07XG4gICAgcHJpdmF0ZSBlc2NhcGVTdHJpbmcoc3RyOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXG4gICAgICAgIC8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuICAgICAgICAvLyBzZXF1ZW5jZXMuXG4gICAgICAgIFN1cnZleUpTT041LmVzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gU3VydmV5SlNPTjUuZXNjYXBhYmxlLnRlc3Qoc3RyKSA/ICdcIicgKyBzdHIucmVwbGFjZShTdXJ2ZXlKU09ONS5lc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IFN1cnZleUpTT041Lm1ldGFbYV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICBjIDpcbiAgICAgICAgICAgICdcXFxcdScgKyAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICB9KSArICdcIicgOiAnXCInICsgc3RyICsgJ1wiJztcbiAgICB9XG4gICAgLy8gRW5kXG5cbiAgICBwcml2YXRlIGludGVybmFsU3RyaW5naWZ5KGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xuICAgICAgICB2YXIgYnVmZmVyLCByZXM7XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgdmFsdWUsIGlmIG5lY2Vzc2FyeVxuICAgICAgICB2YXIgb2JqX3BhcnQgPSB0aGlzLmdldFJlcGxhY2VkVmFsdWVPclVuZGVmaW5lZChob2xkZXIsIGtleSwgaXNUb3BMZXZlbCk7XG5cbiAgICAgICAgaWYgKG9ial9wYXJ0ICYmICF0aGlzLmlzRGF0ZShvYmpfcGFydCkpIHtcbiAgICAgICAgICAgIC8vIHVuYm94IG9iamVjdHNcbiAgICAgICAgICAgIC8vIGRvbid0IHVuYm94IGRhdGVzLCBzaW5jZSB3aWxsIHR1cm4gaXQgaW50byBudW1iZXJcbiAgICAgICAgICAgIG9ial9wYXJ0ID0gb2JqX3BhcnQudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIG9ial9wYXJ0KSB7XG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpfcGFydC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKG9ial9wYXJ0KSB8fCAhaXNGaW5pdGUob2JqX3BhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ial9wYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lc2NhcGVTdHJpbmcob2JqX3BhcnQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FycmF5KG9ial9wYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yQ2lyY3VsYXIob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBcIltcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wdXNoKG9ial9wYXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ial9wYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzID09PSBudWxsIHx8IHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IG9ial9wYXJ0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZW50U3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgsIHRydWUpICsgXCJdXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvckNpcmN1bGFyKG9ial9wYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gXCJ7XCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub25FbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnB1c2gob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9ial9wYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBwcm9wLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb3BMZXZlbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25FbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wS2V5ID0gdGhpcy5pc1dvcmQocHJvcCkgPyBwcm9wIDogdGhpcy5lc2NhcGVTdHJpbmcocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBwcm9wS2V5ICsgXCI6XCIgKyAodGhpcy5pbmRlbnRTdHIgPyAnICcgOiAnJykgKyB2YWx1ZSArIFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9uRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zdWJzdHJpbmcoMCwgYnVmZmVyLmxlbmd0aCAtIDEpICsgdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCkgKyBcIn1cIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9ICd7fSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gZnVuY3Rpb25zIGFuZCB1bmRlZmluZWQgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc29uNS50cyIsImltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFRhcmdldEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYWdlOiBTdXJ2ZXkuUGFnZSwgcHVibGljIHRhcmdldDogYW55LCBwdWJsaWMgc291cmNlOiBhbnkpIHtcblxuICAgIH1cbiAgICBwdWJsaWMgbW92ZVRvKGRlc3RpbmF0aW9uOiBhbnksIGlzQm90dG9tOiBib29sZWFuLCBpc0VkZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZihkZXN0aW5hdGlvbiA9PT0gdGhpcy50YXJnZXQpIHJldHVybiAhdGhpcy50YXJnZXQuaXNQYW5lbDtcbiAgICAgICAgdmFyIGRlc3RJbmZvID0gdGhpcy5maW5kSW5mbyhkZXN0aW5hdGlvbiwgaXNFZGdlKTtcbiAgICAgICAgaWYoIWRlc3RJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldEluZm8gPSB0aGlzLmZpbmRJbmZvKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvKGRlc3RJbmZvLCBpc0JvdHRvbSwgaXNFZGdlKTtcbiAgICAgICAgaWYodGhpcy5pc0luZm9FcXVhbHModGFyZ2V0SW5mbywgZGVzdEluZm8pKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbGVhckJ5SW5mbyh0YXJnZXRJbmZvKTtcbiAgICAgICAgZGVzdEluZm8gPSB0aGlzLmZpbmRJbmZvKGRlc3RpbmF0aW9uLCBpc0VkZ2UpO1xuICAgICAgICBpZighZGVzdEluZm8pIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvKGRlc3RJbmZvLCBpc0JvdHRvbSwgaXNFZGdlKTtcbiAgICAgICAgaWYoIXRoaXMuY2FuTW92ZShkZXN0SW5mbykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGRJbmZvKGRlc3RJbmZvKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBkb0Ryb3AoKSB7XG4gICAgICAgIHZhciBkZXN0SW5mbyA9IHRoaXMuZmluZEluZm8odGhpcy50YXJnZXQpO1xuICAgICAgICBpZighZGVzdEluZm8pIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5SW5mbyhkZXN0SW5mbyk7XG4gICAgICAgIGRlc3RJbmZvLnBhbmVsLmFkZEVsZW1lbnQodGhpcy5nZXROZXdUYXJnZXRFbGVtZW50KCksIGluZGV4KTsgXG4gICAgICAgIGlmKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICB2YXIgc3JjSW5mbyA9IHRoaXMuZmluZEluZm8odGhpcy5zb3VyY2UpO1xuICAgICAgICAgICAgdmFyIHBhbmVsID0gc3JjSW5mbyA/IHNyY0luZm8ucGFuZWwgOiB0aGlzLnBhZ2U7XG4gICAgICAgICAgICBwYW5lbC5yZW1vdmVFbGVtZW50KHRoaXMuc291cmNlKTsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmNsZWFyQnlJbmZvKHRoaXMuZmluZEluZm8odGhpcy50YXJnZXQpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbmRleEJ5SW5mbyhpbmZvOiBhbnkpIHtcbiAgICAgICAgaWYoIWluZm8pIHJldHVybiAwO1xuICAgICAgICB2YXIgcm93cyA9IGluZm8ucGFuZWwua29Sb3dzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbmZvLnJJbmRleDsgaSArKykge1xuICAgICAgICAgICAgaW5kZXggKz0gcm93c1tpXVtcImtvRWxlbWVudHNcIl0oKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4ICsgaW5mby5lbEluZGV4O1xuICAgIH1cbiAgICBwcml2YXRlIGNhbk1vdmUoZGVzdEluZm86IGFueSkgOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy50YXJnZXQuaXNQYW5lbCAmJiBkZXN0SW5mby5lbGVtZW50KSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldCA9PSBkZXN0SW5mby5lbGVtZW50IHx8IHRoaXMudGFyZ2V0LmNvbnRhaW5zRWxlbWVudChkZXN0SW5mby5lbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5zb3VyY2UgJiYgKHRoaXMuc291cmNlID09IGRlc3RJbmZvLmVsZW1lbnQgfHwgdGhpcy5zb3VyY2UuY29udGFpbnNFbGVtZW50KGRlc3RJbmZvLmVsZW1lbnQpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnNvdXJjZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBzcmNJbmZvID0gdGhpcy5maW5kSW5mbyh0aGlzLnNvdXJjZSk7XG4gICAgICAgIGlmKHNyY0luZm8gPT0gbnVsbCB8fCBzcmNJbmZvLnBhbmVsICE9IGRlc3RJbmZvLnBhbmVsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIHNyY0luZGV4ID0gdGhpcy5nZXRJbmRleEJ5SW5mbyhzcmNJbmZvKTtcbiAgICAgICAgdmFyIGRlc3RJbmRleCA9IHRoaXMuZ2V0SW5kZXhCeUluZm8oZGVzdEluZm8pO1xuICAgICAgICB2YXIgZGlmZiA9IGRlc3RJbmRleCAtIHNyY0luZGV4O1xuICAgICAgICByZXR1cm4gZGlmZiA8IDAgfHwgZGlmZiA+IDE7XG4gICAgfVxuICAgIHByaXZhdGUgaXNMYXN0RWxlbWVudEluUm93KGluZm86IGFueSkge1xuICAgICAgICByZXR1cm4gaW5mby5lbEluZGV4ID09IGluZm8ucGFuZWxbXCJrb1Jvd3NcIl0oKVtpbmZvLnJJbmRleF1bXCJrb0VsZW1lbnRzXCJdKCkubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVJbmZvKGluZm86IGFueSwgaXNCb3R0b206IGJvb2xlYW4sIGlzRWRnZTogYm9vbGVhbikge1xuICAgICAgICBpZihpbmZvLnJJbmRleCA8IDApIHJldHVybjsgXG4gICAgICAgIGlmKHRoaXMudGFyZ2V0LnN0YXJ0V2l0aE5ld0xpbmUpIHtcbiAgICAgICAgICAgIGlmKGlzQm90dG9tKSBpbmZvLnJJbmRleCArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKGlzQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgaW5mby5lbEluZGV4ICsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihpbmZvLmVsSW5kZXggPT0gMCAmJiBpbmZvLnJJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5ySW5kZXggLS07XG4gICAgICAgICAgICAgICAgICAgIGluZm8uZWxJbmRleCA9IGluZm8ucGFuZWxbXCJrb1Jvd3NcIl0oKVtpbmZvLnJJbmRleF1bXCJrb0VsZW1lbnRzXCJdKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGFkZEluZm8oaW5mbzogYW55KSB7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0LnN0YXJ0V2l0aE5ld0xpbmUgfHwgaW5mby5lbEluZGV4IDwgMSBcbiAgICAgICAgICAgIHx8IGluZm8uckluZGV4IDwgMCB8fCBpbmZvLnJJbmRleCA+PSBpbmZvLnBhbmVsLmtvUm93cygpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5BZGRJbmZvQXNSb3coaW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gaW5mby5wYW5lbC5rb1Jvd3MoKVtpbmZvLnJJbmRleF07XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSByb3dbXCJrb0VsZW1lbnRzXCJdKCk7XG4gICAgICAgICAgICBpZihpbmZvLmVsSW5kZXggPCBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5zcGxpY2UoaW5mby5lbEluZGV4LCAwLCB0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2godGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93W1wia29FbGVtZW50c1wiXShlbGVtZW50cyk7XG4gICAgICAgICAgICByb3cudXBkYXRlVmlzaWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgQWRkSW5mb0FzUm93KGluZm86IGFueSkge1xuICAgICAgICB2YXIgcm93ID0gbmV3IFN1cnZleS5RdWVzdGlvblJvdyhpbmZvLnBhbmVsKTtcbiAgICAgICAgaWYodGhpcy50YXJnZXQuaXNQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucGFyZW50ID0gaW5mby5wYW5lbDtcbiAgICAgICAgfVxuICAgICAgICByb3cuYWRkRWxlbWVudCh0aGlzLnRhcmdldCk7XG4gICAgICAgIHZhciByb3dzID0gaW5mby5wYW5lbC5rb1Jvd3MoKTtcbiAgICAgICAgaWYoaW5mby5ySW5kZXggPj0gMCAmJiBpbmZvLnJJbmRleCA8IGluZm8ucGFuZWwua29Sb3dzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICByb3dzLnNwbGljZShpbmZvLnJJbmRleCwgMCwgcm93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgIH1cbiAgICAgICBpbmZvLnBhbmVsLmtvUm93cyhyb3dzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhckJ5SW5mbyhpbmZvOiBhbnkpIHtcbiAgICAgICAgaWYoaW5mbyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciByb3dzID0gaW5mby5wYW5lbC5rb1Jvd3MoKTtcbiAgICAgICAgaWYoaW5mby5ySW5kZXggPCAwIHx8IGluZm8uckluZGV4ID49IHJvd3MubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHZhciByb3cgPSByb3dzW2luZm8uckluZGV4XTtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gcm93W1wia29FbGVtZW50c1wiXSgpOyBcbiAgICAgICAgaWYocm93W1wia29FbGVtZW50c1wiXSgpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnNwbGljZShpbmZvLmVsSW5kZXgsIDEpO1xuICAgICAgICAgICAgcm93W1wia29FbGVtZW50c1wiXShlbGVtZW50cyk7XG4gICAgICAgICAgICByb3cudXBkYXRlVmlzaWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm93cy5zcGxpY2UoaW5mby5ySW5kZXgsIDEpO1xuICAgICAgICAgICAgaW5mby5wYW5lbC5rb1Jvd3Mocm93cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpc0luZm9FcXVhbHMoYTogYW55LCBiOiBhbnkpIDogYm9vbGVhbiB7XG4gICAgICAgIGlmKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGEucGFuZWwgPT09IGIucGFuZWwgJiYgYS5ySW5kZXggPT09IGIuckluZGV4ICYmIGEuZWxJbmRleCA9PT0gYi5lbEluZGV4O1xuICAgIH1cbiAgICBwcml2YXRlIGZpbmRJbmZvKGVsOiBhbnksIGlzRWRnZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEluZm9JblBhbmVsKHRoaXMucGFnZSwgZWwsIGlzRWRnZSk7XG4gICAgfVxuICAgIHByaXZhdGUgZmluZEluZm9JblBhbmVsKHBhbmVsOiBTdXJ2ZXkuUGFuZWxNb2RlbEJhc2UsIGVsOiBhbnksIGlzRWRnZTogYm9vbGVhbik6IGFueSB7XG4gICAgICAgIGlmKGVsID09IHBhbmVsKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gcGFuZWw7XG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldC5pc1BhbmVsICYmIHBhbmVsLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhbmVsLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHBhbmVsOiBwYXJlbnQsIHJvdzogbnVsbCwgckluZGV4OiAwLCBlbEluZGV4OiAwLCBlbGVtZW50OiBwYW5lbCB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciByb3dzID0gcGFuZWxbXCJrb1Jvd3NcIl0oKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHJvd1tcImtvRWxlbWVudHNcIl0oKTtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBlbGVtZW50cy5sZW5ndGg7IGogKyspIHtcbiAgICAgICAgICAgICAgICBpZighaXNFZGdlICYmIGVsZW1lbnRzW2pdLmlzUGFuZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMuZmluZEluZm9JblBhbmVsKGVsZW1lbnRzW2pdLCBlbCwgaXNFZGdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZWxlbWVudCA9PSBlbGVtZW50c1tqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ySW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lbEluZGV4ID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50c1tqXSA9PSBlbCkgcmV0dXJuIHsgcGFuZWw6IHBhbmVsLCByb3c6IHJvdywgckluZGV4OiBpLCBlbEluZGV4OiBqLCBlbGVtZW50OiBlbGVtZW50c1tqXSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXROZXdUYXJnZXRFbGVtZW50KCk6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh0aGlzLnRhcmdldC5nZXRUeXBlKCkpO1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnRhcmdldCk7XG4gICAgICAgIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvT2JqZWN0KGpzb24sIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BIZWxwZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgZWRnZUhlaWdodDogbnVtYmVyID0gMjA7XG4gICAgc3RhdGljIGRhdGFTdGFydDogc3RyaW5nID0gXCJzdXJ2ZXlqcyxcIjtcbiAgICBzdGF0aWMgZHJhZ0RhdGE6IGFueSA9IHt0ZXh0OiBcIlwiLCBqc29uOiBudWxsIH07XG4gICAgc3RhdGljIHByZXZFdmVudCA9IHsgZWxlbWVudDogbnVsbCwgeDogLTEsIHk6IC0xIH07XG4gICAgcHJpdmF0ZSBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueTtcbiAgICBwcml2YXRlIHNjcm9sbGFibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBkZFRhcmdldDogRHJhZ0Ryb3BUYXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICBzdGF0aWMgY291bnRlcjogbnVtYmVyICA9IDE7XG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gRHJhZ0Ryb3BIZWxwZXIuY291bnRlciArKztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogU3VydmV5LklTdXJ2ZXksIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55LCBzY3JvbGxhYmxlRWxOYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMub25Nb2RpZmllZENhbGxiYWNrID0gb25Nb2RpZmllZENhbGxiYWNrO1xuICAgICAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKHNjcm9sbGFibGVFbE5hbWUgPyBzY3JvbGxhYmxlRWxOYW1lIDogXCJzY3JvbGxhYmxlRGl2XCIpKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiA8U3VydmV5LlN1cnZleT50aGlzLmRhdGE7IH1cbiAgICBwdWJsaWMgc3RhcnREcmFnUXVlc3Rpb24oZXZlbnQ6IERyYWdFdmVudCwgZWxlbWVudDogYW55KSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KGVsZW1lbnQpO1xuICAgICAgICBqc29uW1widHlwZVwiXSA9IGVsZW1lbnQuZ2V0VHlwZSgpO1xuICAgICAgICB0aGlzLnByZXBhcmVEYXRhKGV2ZW50LCBlbGVtZW50Lm5hbWUsIGpzb24pO1xuICAgICAgICB0aGlzLmRkVGFyZ2V0LnNvdXJjZSA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIHB1YmxpYyBzdGFydERyYWdUb29sYm94SXRlbShldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50TmFtZTogc3RyaW5nLCBlbGVtZW50SnNvbjogYW55KSB7XG4gICAgICAgIHRoaXMucHJlcGFyZURhdGEoZXZlbnQsICBlbGVtZW50TmFtZSwgZWxlbWVudEpzb24pO1xuICAgIH1cbiAgICBwdWJsaWMgaXNTdXJ2ZXlEcmFnZ2luZyhldmVudDogRHJhZ0V2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldERhdGEoZXZlbnQpLnRleHQ7XG4gICAgICAgIHJldHVybiBkYXRhICYmIGRhdGEuaW5kZXhPZihEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQpID09IDA7XG4gICAgfVxuICAgIHB1YmxpYyBkb0RyYWdEcm9wT3ZlcihldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50OiBhbnksIGlzRWRnZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxZKGV2ZW50KTtcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICF0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpIHx8IHRoaXMuaXNTYW1lUGxhY2UoZXZlbnQsIGVsZW1lbnQpKSByZXR1cm47XG4gICAgICAgIHZhciBib3R0b21JbmZvID0gdGhpcy5pc0JvdHRvbShldmVudCwgZWxlbWVudCk7XG4gICAgICAgIGlzRWRnZSA9IGlzRWRnZSAmJiBib3R0b21JbmZvLmlzRWRnZTtcbiAgICAgICAgdGhpcy5kZFRhcmdldC5tb3ZlVG8oZWxlbWVudCwgYm90dG9tSW5mby5pc0JvdHRvbSwgaXNFZGdlKTtcbiAgICB9XG4gICAgcHVibGljIGVuZCgpIHtcbiAgICAgICAgaWYodGhpcy5kZFRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5kZFRhcmdldC5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgICB9XG4gICAgcHVibGljIGRvRHJvcChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmRkVGFyZ2V0LmRvRHJvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgfVxuICAgIHB1YmxpYyBkb0xlYXZlUGFnZShldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIHRoaXMuZGRUYXJnZXQuY2xlYXIoKTtcbiAgICB9XG4gICAgcHVibGljIHNjcm9sbFRvRWxlbWVudChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50IHx8ICFlbCkgcmV0dXJuO1xuICAgICAgICBlbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVGFyZ2V0RWxlbWVudChlbGVtZW50TmFtZTogc3RyaW5nLCBqc29uOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoIWVsZW1lbnROYW1lIHx8ICFqc29uKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0YXJnZXRFbGVtZW50ID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoanNvbltcInR5cGVcIl0pO1xuICAgICAgICBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b09iamVjdChqc29uLCB0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5uYW1lID0gZWxlbWVudE5hbWU7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuc2V0RGF0YSh0aGlzLnN1cnZleSk7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucmVuZGVyV2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgdGFyZ2V0RWxlbWVudFtcImtvSXNEcmFnZ2luZ1wiXSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldEVsZW1lbnQ7XG4gICAgfVxuICAgIHByaXZhdGUgaXNCb3R0b20oZXZlbnQ6IERyYWdFdmVudCwgc3VydmV5RWw6IGFueSk6IGFueSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIHZhciBoZWlnaHQgPSA8bnVtYmVyPmV2ZW50LmN1cnJlbnRUYXJnZXRbXCJjbGllbnRIZWlnaHRcIl07XG4gICAgICAgIHZhciB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICAgICAgaWYgKGV2ZW50Lmhhc093blByb3BlcnR5KCdsYXllclgnKSkge1xuICAgICAgICAgICAgeSA9IGV2ZW50LmxheWVyWSAtIDxudW1iZXI+ZXZlbnQuY3VycmVudFRhcmdldFtcIm9mZnNldFRvcFwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGlzQm90dG9tOiB5ID4gaGVpZ2h0IC8gMiwgaXNFZGdlOiB5IDw9IERyYWdEcm9wSGVscGVyLmVkZ2VIZWlnaHQgfHwgaGVpZ2h0IC0geSA8PSBEcmFnRHJvcEhlbHBlci5lZGdlSGVpZ2h0fTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1NhbWVQbGFjZShldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHByZXYgPSBEcmFnRHJvcEhlbHBlci5wcmV2RXZlbnQ7XG4gICAgICAgIGlmIChwcmV2LmVsZW1lbnQgIT0gZWxlbWVudCB8fCBNYXRoLmFicyhldmVudC5jbGllbnRYIC0gcHJldi54KSA+IDUgfHwgTWF0aC5hYnMoZXZlbnQuY2xpZW50WSAtIHByZXYueSkgPiA1KSB7XG4gICAgICAgICAgICBwcmV2LmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgcHJldi54ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIHByZXYueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTY3JvbGxTdG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHN0YXRpYyBTY3JvbGxEZWxheTogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgU2Nyb2xsT2Zmc2V0OiBudW1iZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFkoZTogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkgcmV0dXJuO1xuICAgICAgICB2YXIgeSA9IHRoaXMuZ2V0U2Nyb2xsYWJsZUVsZW1lbnRQb3NZKGUpO1xuICAgICAgICBpZiAoeSA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gPG51bWJlcj50aGlzLnNjcm9sbGFibGVFbGVtZW50W1wiY2xpZW50SGVpZ2h0XCJdO1xuICAgICAgICBpZiAoeSA8IERyYWdEcm9wSGVscGVyLlNjcm9sbE9mZnNldCAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvU2Nyb2xsWSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCAtIHkgPCBEcmFnRHJvcEhlbHBlci5TY3JvbGxPZmZzZXQgJiYgaGVpZ2h0ID49IHkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvU2Nyb2xsWSgxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGRvU2Nyb2xsWShzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudDtcbiAgICAgICAgdmFyIHNjcm9sbFkgPSBlbC5zY3JvbGxUb3AgKyBzdGVwO1xuICAgICAgICBpZiAoc2Nyb2xsWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBzY3JvbGxZO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1Njcm9sbFN0b3ApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLmRvU2Nyb2xsWShzdGVwKSB9LCBEcmFnRHJvcEhlbHBlci5TY3JvbGxEZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTY3JvbGxhYmxlRWxlbWVudFBvc1koZTogRHJhZ0V2ZW50KTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50IHx8ICFlLmN1cnJlbnRUYXJnZXQpIHJldHVybiAtMTtcbiAgICAgICAgdmFyIGVsID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICB2YXIgb2Zmc2V0VG9wID0gMDtcbiAgICAgICAgd2hpbGUoZWwgJiYgZWwgIT0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgb2Zmc2V0VG9wICs9IDxudW1iZXI+ZWxbXCJvZmZzZXRUb3BcIl07XG4gICAgICAgICAgICBlbCA9IGVsW1wib2Zmc2V0UGFyZW50XCJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlLm9mZnNldFkgKyA8bnVtYmVyPmUuY3VycmVudFRhcmdldFtcIm9mZnNldFRvcFwiXSAtIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IERyYWdFdmVudCB7XG4gICAgICAgIHJldHVybiBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gPyBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gOiBldmVudDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRZKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAoZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnNjcm9sbFRvcCArIGVsZW1lbnQuY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBwcmVwYXJlRGF0YShldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50TmFtZTogc3RyaW5nLCBqc29uKSB7XG4gICAgICAgIHZhciBzdHIgPSBEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQgKyBcInF1ZXN0aW9ubmFtZTpcIiArIGVsZW1lbnROYW1lO1xuICAgICAgICB0aGlzLnNldERhdGEoZXZlbnQsIHN0cik7XG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID0gdGhpcy5jcmVhdGVUYXJnZXRFbGVtZW50KGVsZW1lbnROYW1lLCBqc29uKTtcbiAgICAgICAgdGhpcy5kZFRhcmdldCA9IG5ldyBEcmFnRHJvcFRhcmdldEVsZW1lbnQoPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLCB0YXJnZXRFbGVtZW50LCBudWxsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXREYXRhKGV2ZW50OiBEcmFnRXZlbnQsIHRleHQ6IHN0cmluZykge1xuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIlRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwiY29weVwiO1xuICAgICAgICB9XG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhID0geyB0ZXh0OiB0ZXh0IH07XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RGF0YShldmVudDogRHJhZ0V2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcIlRleHRcIik7XG4gICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhLnRleHQgPSB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgICAgIC8vdGhpcy5kZFRhcmdldCA9IG51bGw7XG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhID0ge3RleHQ6IFwiXCIsIGpzb246IG51bGx9O1xuICAgICAgICB2YXIgcHJldiA9IERyYWdEcm9wSGVscGVyLnByZXZFdmVudDtcbiAgICAgICAgcHJldi5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgcHJldi54ID0gLTE7XG4gICAgICAgIHByZXYueSA9IC0xO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHJhZ2Ryb3BoZWxwZXIudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleU9uUHJvcGVydHlDaGFuZ2VkQ2FsbGJhY2sgPSAocHJvcGVydHk6IFN1cnZleU9iamVjdFByb3BlcnR5LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0UHJvcGVydHkge1xuICAgIHByaXZhdGUgb2JqZWN0VmFsdWU6IGFueTtcbiAgICBwcml2YXRlIGlzVmFsdWVVcGRhdGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIG9uUHJvcGVydHlDaGFuZ2VkOiBTdXJ2ZXlPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBrb1ZhbHVlOiBhbnk7XG4gICAgcHVibGljIGtvVGV4dDogYW55O1xuICAgIHB1YmxpYyBtb2RhbE5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbW9kYWxOYW1lVGFyZ2V0OiBzdHJpbmc7XG4gICAgcHVibGljIGtvSXNEZWZhdWx0OiBhbnk7XG4gICAgcHVibGljIGVkaXRvcjogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlO1xuICAgIHB1YmxpYyBlZGl0b3JUeXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGJhc2VFZGl0b3JUeXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGNob2ljZXM6IEFycmF5PGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9uUHJvcGVydHlDaGFuZ2VkOiBTdXJ2ZXlPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrID0gbnVsbCwgcHJvcGVydHlFZGl0b3JPcHRpb25zOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQgPSBvblByb3BlcnR5Q2hhbmdlZDtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wcm9wZXJ0eS5uYW1lO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gcHJvcGVydHlbXCJyZWFkT25seVwiXTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNob2ljZXMgPSBwcm9wZXJ0eS5jaG9pY2VzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHByb3BlcnR5LnR5cGU7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IFwiZHJvcGRvd25cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25JdGVtQ2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZTogYW55KSB7IHNlbGYub25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlKTsgfTtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuY3JlYXRlRWRpdG9yKHRoaXMuZWRpdG9yVHlwZSwgb25JdGVtQ2hhbmdlZCk7XG4gICAgICAgIHRoaXMuZWRpdG9yLm9wdGlvbnMgPSBwcm9wZXJ0eUVkaXRvck9wdGlvbnM7XG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHRoaXMuZWRpdG9yLmVkaXRvclR5cGU7XG4gICAgICAgIHRoaXMubW9kYWxOYW1lID0gXCJtb2RlbEVkaXRvclwiICsgdGhpcy5lZGl0b3JUeXBlICsgdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm1vZGFsTmFtZVRhcmdldCA9IFwiI1wiICsgdGhpcy5tb2RhbE5hbWU7XG4gICAgICAgIHRoaXMua29WYWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYub25rb1ZhbHVlQ2hhbmdlZChuZXdWYWx1ZSk7IH0pO1xuICAgICAgICB0aGlzLmtvVGV4dCA9IGtvLmNvbXB1dGVkKCgpID0+IHsgcmV0dXJuIHNlbGYuZ2V0VmFsdWVUZXh0KHNlbGYua29WYWx1ZSgpKTsgfSk7XG4gICAgICAgIHRoaXMua29Jc0RlZmF1bHQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLnByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKHNlbGYua29WYWx1ZSgpKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgb2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLm9iamVjdFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBvYmplY3QodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm9iamVjdFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRPYmplY3QodGhpcy5vYmplY3QpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRUaXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZWRpdFByb3BlcnR5XCIpW1wiZm9ybWF0XCJdKHRoaXMucHJvcGVydHkubmFtZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckRhdGEodGhpcy5rb1ZhbHVlKCkpO1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIGlzQXBwbHlpbmdOZXdWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgb25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0FwcGx5aW5nTmV3VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIG9ua29WYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBcHBseWluZ05ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckRhdGEobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9iamVjdCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmdldFZhbHVlKCkgPT0gbmV3VmFsdWUpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQgIT0gbnVsbCAmJiAhdGhpcy5pc1ZhbHVlVXBkYXRpbmcpIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQodGhpcywgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUVkaXRvckRhdGEobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmVkaXRvci52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0VmFsdWUoKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkuaGFzVG9Vc2VHZXRWYWx1ZSkgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VmFsdWUodGhpcy5vYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5uYW1lXTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZWRpdG9yLmdldFZhbHVlVGV4dCh2YWx1ZSk7IH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJicyB7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBwcml2YXRlIG9ialZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBjaG9pY2VzQ2xhc3NlczogQXJyYXk8c3RyaW5nPjtcbiAgICBrb1ZlcmJzOiBhbnk7XG4gICAga29IYXNWZXJiczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICB0aGlzLmtvVmVyYnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0hhc1ZlcmJzID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInNlbGVjdGJhc2VcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY2hvaWNlc0NsYXNzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXNDbGFzc2VzLnB1c2goY2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHN1cnZleSh2YWx1ZTogU3VydmV5LlN1cnZleSkge1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9iaigpOiBhbnkgeyByZXR1cm4gdGhpcy5vYmpWYWx1ZSB9XG4gICAgcHVibGljIHNldCBvYmoodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5vYmpWYWx1ZSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9ialZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYnVpbGRWZXJicygpO1xuICAgIH1cbiAgICBwcml2YXRlIGJ1aWxkVmVyYnMoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKHRoaXMub2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkJhc2U+dGhpcy5vYmo7XG4gICAgICAgICAgICBpZiAodGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gobmV3IFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbSh0aGlzLnN1cnZleSwgcXVlc3Rpb24sIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VzQ2xhc3Nlcy5pbmRleE9mKHF1ZXN0aW9uLmdldFR5cGUoKSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gobmV3IFN1cnZleVZlcmJDaGFuZ2VUeXBlSXRlbSh0aGlzLnN1cnZleSwgcXVlc3Rpb24sIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1ZlcmJzKGFycmF5KTtcbiAgICAgICAgdGhpcy5rb0hhc1ZlcmJzKGFycmF5Lmxlbmd0aCA+IDApO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJiSXRlbSB7XG4gICAga29JdGVtczogYW55O1xuICAgIGtvU2VsZWN0ZWRJdGVtOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleSwgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0gPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gXCJcIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJDaGFuZ2VUeXBlSXRlbSBleHRlbmRzIFN1cnZleVZlcmJJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICBzdXBlcihzdXJ2ZXksIHF1ZXN0aW9uLCBvbk1vZGlmaWVkQ2FsbGJhY2spO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInNlbGVjdGJhc2VcIiwgdHJ1ZSk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goeyB2YWx1ZTogY2xhc3Nlc1tpXS5uYW1lLCB0ZXh0OiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicXQuXCIgKyBjbGFzc2VzW2ldLm5hbWUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnJheSk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0ocXVlc3Rpb24uZ2V0VHlwZSgpKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5jaGFuZ2VUeXBlKG5ld1ZhbHVlKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnZlcmJDaGFuZ2VUeXBlXCIpOyB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VUeXBlKHF1ZXN0aW9uVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChxdWVzdGlvblR5cGUgPT0gdGhpcy5xdWVzdGlvbi5nZXRUeXBlKCkpIHJldHVybjtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgdmFyIG5ld1F1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGUsIHRoaXMucXVlc3Rpb24ubmFtZSk7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciBqc29uID0ganNvbk9iai50b0pzb25PYmplY3QodGhpcy5xdWVzdGlvbik7XG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoanNvbiwgbmV3UXVlc3Rpb24pO1xuICAgICAgICBwYWdlLnJlbW92ZVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBwYWdlLmFkZFF1ZXN0aW9uKG5ld1F1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgIGlmICh0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2soKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYkNoYW5nZVBhZ2VJdGVtIGV4dGVuZHMgU3VydmV5VmVyYkl0ZW0ge1xuICAgIHByaXZhdGUgcHJldlBhZ2U6IFN1cnZleS5QYWdlO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSwgcHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgICAgIHN1cGVyKHN1cnZleSwgcXVlc3Rpb24sIG9uTW9kaWZpZWRDYWxsYmFjayk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LnBhZ2VzW2ldO1xuICAgICAgICAgICAgYXJyYXkucHVzaCh7IHZhbHVlOiBwYWdlLCB0ZXh0OiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyYXkpO1xuICAgICAgICB0aGlzLnByZXZQYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbSh0aGlzLnByZXZQYWdlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5jaGFuZ2VQYWdlKG5ld1ZhbHVlKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnZlcmJDaGFuZ2VQYWdlXCIpOyB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VQYWdlKG5ld1BhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIGlmIChuZXdQYWdlID09IG51bGwgfHwgbmV3UGFnZSA9PSB0aGlzLnByZXZQYWdlKSByZXR1cm47XG4gICAgICAgIHRoaXMucHJldlBhZ2UucmVtb3ZlUXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIG5ld1BhZ2UuYWRkUXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIGlmICh0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2soKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdFZlcmJzLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleUhlbHBlcn0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleUFkZE5ld1BhZ2VDYWxsYmFjayA9ICgpID0+IHZvaWQ7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4gdm9pZDtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5TW92ZVBhZ2VDYWxsYmFjayA9IChpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UGFnZXNFZGl0b3Ige1xuICAgIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIGtvUGFnZXM6IGFueTtcbiAgICBrb0lzVmFsaWQ6IGFueTtcbiAgICBzZWxlY3RQYWdlQ2xpY2s6IGFueTtcbiAgICBvbkFkZE5ld1BhZ2VDYWxsYmFjazogU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrO1xuICAgIG9uU2VsZWN0UGFnZUNhbGxiYWNrOiBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgb25EZWxldGVQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjaztcbiAgICBvbk1vdmVQYWdlQ2FsbGJhY2s6IFN1cnZleU1vdmVQYWdlQ2FsbGJhY2s7XG4gICAgZHJhZ2dpbmdQYWdlOiBhbnkgPSBudWxsO1xuICAgIGRyYWdTdGFydDogYW55OyBkcmFnT3ZlcjogYW55OyBkcmFnRW5kOiBhbnk7IGRyYWdEcm9wOiBhbnk7IGtleURvd246IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKG9uQWRkTmV3UGFnZUNhbGxiYWNrOiBTdXJ2ZXlBZGROZXdQYWdlQ2FsbGJhY2sgPSBudWxsLCBvblNlbGVjdFBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICAgICAgICBvbk1vdmVQYWdlQ2FsbGJhY2s6IFN1cnZleU1vdmVQYWdlQ2FsbGJhY2sgPSBudWxsLCBvbkRlbGV0ZVBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICB0aGlzLmtvUGFnZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0lzVmFsaWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjayA9IG9uQWRkTmV3UGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uU2VsZWN0UGFnZUNhbGxiYWNrID0gb25TZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrID0gb25Nb3ZlUGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrID0gb25EZWxldGVQYWdlQ2FsbGJhY2s7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxlY3RQYWdlQ2xpY2sgPSBmdW5jdGlvbihwYWdlSXRlbSkge1xuICAgICAgICAgICAgaWYgKHNlbGYub25TZWxlY3RQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uU2VsZWN0UGFnZUNhbGxiYWNrKHBhZ2VJdGVtLnBhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmtleURvd24gPSBmdW5jdGlvbiAoZWw6IGFueSwgZTogS2V5Ym9hcmRFdmVudCkgeyBzZWxmLm9uS2V5RG93bihlbCwgZSk7IH1cbiAgICAgICAgdGhpcy5kcmFnU3RhcnQgPSBmdW5jdGlvbiAoZWw6IGFueSkgeyBzZWxmLmRyYWdnaW5nUGFnZSA9IGVsOyB9O1xuICAgICAgICB0aGlzLmRyYWdPdmVyID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgIH07XG4gICAgICAgIHRoaXMuZHJhZ0VuZCA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kcmFnZ2luZ1BhZ2UgPSBudWxsOyB9O1xuICAgICAgICB0aGlzLmRyYWdEcm9wID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgc2VsZi5tb3ZlRHJhZ2dpbmdQYWdlVG8oZWwpOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHN1cnZleSh2YWx1ZTogU3VydmV5LlN1cnZleSkge1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMua29Jc1ZhbGlkKHRoaXMuc3VydmV5VmFsdWUgIT0gbnVsbCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZXMoKTtcbiAgICB9XG4gICAgcHVibGljIHNldFNlbGVjdGVkUGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB2YXIgcGFnZXMgPSB0aGlzLmtvUGFnZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFnZXNbaV0ua29TZWxlY3RlZChwYWdlc1tpXS5wYWdlID09IHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhZGROZXdQYWdlQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQWRkTmV3UGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uQWRkTmV3UGFnZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlbW92ZVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5UGFnZShwYWdlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBjaGFuZ2VOYW1lKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhZ2UocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXMoKVtpbmRleF0udGl0bGUoU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRJbmRleEJ5UGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSk6IG51bWJlciB7XG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMua29QYWdlcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFnZXNbaV0ucGFnZSA9PSBwYWdlKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbktleURvd24oZWw6IGFueSwgZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5rb1BhZ2VzKCkubGVuZ3RoIDw9IDEpIHJldHVybjtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XG4gICAgICAgIHZhciBwYWdlSW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhZ2VzW2ldLnBhZ2UgJiYgcGFnZXNbaV0ua29TZWxlY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgcGFnZUluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFnZUluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDQ2ICYmIHRoaXMub25EZWxldGVQYWdlQ2FsbGJhY2spIHRoaXMub25EZWxldGVQYWdlQ2FsbGJhY2soZWwucGFnZSk7XG4gICAgICAgIGlmICgoZS5rZXlDb2RlID09IDM3IHx8IGUua2V5Q29kZSA9PSAzOSkgJiYgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgcGFnZUluZGV4ICs9IChlLmtleUNvZGUgPT0gMzcgPyAtMSA6IDEpO1xuICAgICAgICAgICAgaWYgKHBhZ2VJbmRleCA8IDApIHBhZ2VJbmRleCA9IHBhZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAocGFnZUluZGV4ID49IHBhZ2VzLmxlbmd0aCkgcGFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBwYWdlID0gcGFnZXNbcGFnZUluZGV4XS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjayhwYWdlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRQYWdlKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVQYWdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKFtdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5VmFsdWUucGFnZXNbaV07XG4gICAgICAgICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZToga28ub2JzZXJ2YWJsZShTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSksIHBhZ2U6IHBhZ2UsIGtvU2VsZWN0ZWQ6IGtvLm9ic2VydmFibGUoZmFsc2UpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvUGFnZXMocGFnZXMpO1xuICAgIH1cbiAgICBwcml2YXRlIG1vdmVEcmFnZ2luZ1BhZ2VUbyh0b1BhZ2U6IGFueSkge1xuICAgICAgICBpZiAodG9QYWdlID09IG51bGwgfHwgdG9QYWdlID09IHRoaXMuZHJhZ2dpbmdQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUGFnZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdQYWdlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5rb1BhZ2VzKCkuaW5kZXhPZih0aGlzLmRyYWdnaW5nUGFnZSk7XG4gICAgICAgIHZhciBpbmRleFRvID0gdGhpcy5rb1BhZ2VzKCkuaW5kZXhPZih0b1BhZ2UpO1xuICAgICAgICBpZiAodGhpcy5vbk1vdmVQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrKGluZGV4LCBpbmRleFRvKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlPYmplY3RFZGl0b3J9IGZyb20gXCIuLi9vYmplY3RFZGl0b3JcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0RWRpdG9yOiBTdXJ2ZXlPYmplY3RFZGl0b3I7XG4gICAgcHVibGljIGtvU2VsZWN0ZWQ6IGFueTtcbiAgICBwdWJsaWMgYXZhaWxhYmxlVmFsaWRhdG9yczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHByaXZhdGUgdmFsaWRhdG9yQ2xhc3NlczogQXJyYXk8U3VydmV5Lkpzb25NZXRhZGF0YUNsYXNzPiA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IgPSBuZXcgU3VydmV5T2JqZWN0RWRpdG9yKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgc2VsZi5vblByb3BlcnR5VmFsdWVDaGFuZ2VkKG9wdGlvbnMucHJvcGVydHksIG9wdGlvbnMub2JqZWN0LCBvcHRpb25zLm5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCA9IGtvLm9ic2VydmFibGUobnVsbCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2VsZWN0ZWRPYmplY3QgPSBuZXdWYWx1ZSAhPSBudWxsID8gbmV3VmFsdWUudmFsaWRhdG9yIDogbnVsbDsgfSk7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yQ2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInN1cnZleXZhbGlkYXRvclwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVWYWxpZGF0b3JzID0gdGhpcy5nZXRBdmFpbGFibGVWYWxpZGF0b3JzKCk7XG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShzZWxmLmtvU2VsZWN0ZWQoKSk7IH07XG4gICAgICAgIHRoaXMub25BZGRDbGljayA9IGZ1bmN0aW9uICh2YWxpZGF0b3JUeXBlKSB7IHNlbGYuYWRkSXRlbSh2YWxpZGF0b3JUeXBlKTsgfTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInZhbGlkYXRvcnNcIjsgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZWQoKTtcbiAgICAgICAgaWYgKHRoaXMua29TZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRoaXMua29JdGVtcygpLmxlbmd0aCA+IDAgPyB0aGlzLmtvSXRlbXMoKVswXSA6IG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIganNvbk9iaiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpO1xuICAgICAgICB2YXIgdmFsaWRhdG9yID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoaXRlbS5nZXRUeXBlKCkpO1xuICAgICAgICBqc29uT2JqLnRvT2JqZWN0KGl0ZW0sIHZhbGlkYXRvcik7XG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtKHZhbGlkYXRvcik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBpdGVtID0gPFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbT5lZGl0b3JJdGVtO1xuICAgICAgICByZXR1cm4gaXRlbS52YWxpZGF0b3I7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbSh2YWxpZGF0b3JUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIG5ld1ZhbGlkYXRvciA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0oU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3ModmFsaWRhdG9yVHlwZSkpO1xuICAgICAgICB0aGlzLmtvSXRlbXMucHVzaChuZXdWYWxpZGF0b3IpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQobmV3VmFsaWRhdG9yKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRBdmFpbGFibGVWYWxpZGF0b3JzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWxpZGF0b3JDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnZhbGlkYXRvckNsYXNzZXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvYmo6IGFueSwgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKCkgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQoKS52YWxpZGF0b3JbcHJvcGVydHkubmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0ge1xuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHVibGljIHZhbGlkYXRvcjogU3VydmV5LlN1cnZleVZhbGlkYXRvcikge1xuICAgICAgICB0aGlzLnRleHQgPSB2YWxpZGF0b3IuZ2V0VHlwZSgpO1xuICAgIH1cbn1cblxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ2YWxpZGF0b3JzXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9yc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvci50cyIsImltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmaW5pdGlvbjogYW55ID0ge1xuICAgICAgICBcInF1ZXN0aW9uYmFzZVwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wibmFtZVwiLCBcInRpdGxlXCIsIHtuYW1lOiBcInZpc2libGVcIiwgY2F0ZWdvcnk6IFwiY2hlY2tzXCJ9LCB7bmFtZTogXCJpc1JlcXVpcmVkXCIsIGNhdGVnb3J5OiBcImNoZWNrc1wifSwge25hbWU6IFwic3RhcnRXaXRoTmV3TGluZVwiLCBjYXRlZ29yeTogXCJjaGVja3NcIn0gXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJ2aXNpYmxlSWZcIiwgaW5kZXg6IDEwMH1dXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tbWVudFwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJyb3dzXCIsIFwicGxhY2VIb2xkZXJcIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWxlXCI6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFt7bmFtZTogXCJzaG93UHJldmlld1wiLCBjYXRlZ29yeTogXCJpbWFnZUNoZWNrc1wifSwge25hbWU6IFwic3RvcmVEYXRhQXNUZXh0XCIsIGNhdGVnb3J5OiBcImltYWdlQ2hlY2tzXCJ9LCBcIm1heFNpemVcIiwgXCJpbWFnZUhlaWdodFwiLCBcImltYWdlV2lkdGhcIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJodG1sXCI6IHtcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJodG1sXCIsIGluZGV4OiAxMH1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25iYXNlXCI6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImNlbGxUeXBlXCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNvbHVtbnNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwicm93c1wiLCBpbmRleDogMTF9LCB7bmFtZTogXCJjaG9pY2VzXCIsIGluZGV4OiAxMn1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHluYW1pY1wiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJyb3dDb3VudFwiLCBcImFkZFJvd1RleHRcIiwgXCJyZW1vdmVSb3dUZXh0XCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4XCI6IHtcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjb2x1bW5zXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcInJvd3NcIiwgaW5kZXg6IDExfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtdWx0aXBsZXRleHRcIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiY29sQ291bnRcIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiaXRlbXNcIiwgaW5kZXg6IDEwfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyYXRpbmdcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcIm1pblJhdGVEZXNjcmlwdGlvblwiLCBcIm1heFJhdGVEZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJyYXRlVmFsdWVzXCIsIGluZGV4OiAxMH1dXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VsZWN0YmFzZVwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaGFzT3RoZXJcIiwgXCJjaG9pY2VzT3JkZXJcIiwgXCJjb2xDb3VudFwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjaG9pY2VzXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcImNob2ljZXNCeVVybFwiLCBpbmRleDogMTF9XVxuICAgICAgICB9LFxuICAgICAgICBcImRyb3Bkb3duXCI6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcIm9wdGlvbnNDYXB0aW9uXCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwidGV4dFwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaW5wdXRUeXBlXCIsIFwicGxhY2VIb2xkZXJcIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtbkBjaGVja2JveFwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaGFzT3RoZXJcIiwgXCJjaG9pY2VzT3JkZXJcIiwgXCJjb2xDb3VudFwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjaG9pY2VzXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcImNob2ljZXNCeVVybFwiLCBpbmRleDogMTF9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQHJhZGlvZ3JvdXBcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImhhc090aGVyXCIsIFwiY2hvaWNlc09yZGVyXCIsIFwiY29sQ291bnRcIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJjaG9pY2VzQnlVcmxcIiwgaW5kZXg6IDExfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtbkBkcm9wZG93blwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaGFzT3RoZXJcIiwgXCJjaG9pY2VzT3JkZXJcIiwgXCJvcHRpb25zQ2FwdGlvblwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjaG9pY2VzXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcImNob2ljZXNCeVVybFwiLCBpbmRleDogMTF9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQHRleHRcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImlucHV0VHlwZVwiLCBcInBsYWNlSG9sZGVyXCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AY29tbWVudFwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wicGxhY2VIb2xkZXJcIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYW5lbFwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJuYW1lXCIsIFwidGl0bGVcIiwge25hbWU6IFwidmlzaWJsZVwiLCBjYXRlZ29yeTogXCJjaGVja3NcIn0gXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJ2aXNpYmxlSWZcIiwgaW5kZXg6IDEwMH1dXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKGNsYXNzTmFtZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW107XG4gICAgICAgIHZhciBhbGxEZWZpbml0aW9ucyA9IFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5nZXRBbGxEZWZpbml0aW9uc0J5Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgZm9yKHZhciBpID0gYWxsRGVmaW5pdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC0tKSB7XG4gICAgICAgICAgICB2YXIgZGVmID0gYWxsRGVmaW5pdGlvbnNbaV07XG4gICAgICAgICAgICBpZihkZWYucHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBkZWYucHJvcGVydGllcy5sZW5ndGg7IGogKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKGRlZi5wcm9wZXJ0aWVzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VGFicyhjbGFzc05hbWU6IHN0cmluZyk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgdGFicyA9IFtdO1xuICAgICAgICB2YXIgYWxsRGVmaW5pdGlvbnMgPSBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0QWxsRGVmaW5pdGlvbnNCeUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgIGZvcih2YXIgaSA9IGFsbERlZmluaXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtLSkge1xuICAgICAgICAgICAgdmFyIGRlZiA9IGFsbERlZmluaXRpb25zW2ldO1xuICAgICAgICAgICAgaWYoZGVmLnRhYnMpIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgZGVmLnRhYnMubGVuZ3RoOyBqICsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYnMucHVzaChkZWYudGFic1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhYnMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pbmRleCA8IGIuaW5kZXggPyAtMSA6IChhLmluZGV4ID4gYi5pbmRleCA/IDEgOiAwKTsgfSk7XG4gICAgICAgIHJldHVybiB0YWJzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QWxsRGVmaW5pdGlvbnNCeUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKSA6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGlmKGNsYXNzTmFtZS5pbmRleE9mKCdAJykgPiAtMSAmJiBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZGVmaW5pdGlvbltjbGFzc05hbWVdKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZGVmaW5pdGlvbltjbGFzc05hbWVdKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIG1ldGFDbGFzcyA9IDxTdXJ2ZXkuSnNvbk1ldGFkYXRhQ2xhc3M+U3VydmV5Lkpzb25PYmplY3QubWV0YURhdGFbXCJmaW5kQ2xhc3NcIl0oY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGlmICghbWV0YUNsYXNzKSBicmVhaztcbiAgICAgICAgICAgIGlmKFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5kZWZpbml0aW9uW21ldGFDbGFzcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5kZWZpbml0aW9uW21ldGFDbGFzcy5uYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBtZXRhQ2xhc3MucGFyZW50TmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckRlZmluaXRpb24udHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnR5IHtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBlZGl0VHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgY2hvaWNlczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGtvVmFsdWU6IGFueTsga29FcnJvclRleHQ6IGFueTsga29IYXNFcnJvcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIHB1YmxpYyBpc1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcGVydHkubmFtZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHByb3BlcnR5W1wicmVhZE9ubHlcIl07XG4gICAgICAgIHRoaXMuZWRpdFR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgaWYocHJvcGVydHkudHlwZSA9PSBcInRleHRcIikgdGhpcy5lZGl0VHlwZSA9IFwidGV4dGFyZWFcIjtcbiAgICAgICAgaWYocHJvcGVydHkudHlwZSA9PSBcImJvb2xlYW5cIikgdGhpcy5lZGl0VHlwZSA9IFwiY2hlY2tcIjtcbiAgICAgICAgaWYocHJvcGVydHkuY2hvaWNlcykge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzID0gcHJvcGVydHkuY2hvaWNlcztcbiAgICAgICAgICAgIHRoaXMuZWRpdFR5cGUgPSBcImRyb3Bkb3duXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvRXJyb3JUZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuXCIgKyB0aGlzLm5hbWUpO1xuICAgICAgICBpZighdGhpcy50aXRsZSkgdGhpcy50aXRsZSA9IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBpc0Vycm9yID0gdGhpcy5pc1JlcXVpcmVkICYmICh0aGlzLmtvVmFsdWUoKSAhPT0gZmFsc2UpICYmICF0aGlzLmtvVmFsdWUoKTtcbiAgICAgICAgdGhpcy5rb0Vycm9yVGV4dChpc0Vycm9yID8gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnByb3BlcnR5SXNFbXB0eVwiKTogXCJcIik7XG4gICAgICAgIHRoaXMua29IYXNFcnJvcihpc0Vycm9yKTtcbiAgICAgICAgcmV0dXJuIGlzRXJyb3I7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgdGhpcy5vYmpbdGhpcy5uYW1lXSA9IHRoaXMua29WYWx1ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLmdldFZhbHVlKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFZhbHVlKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiB0aGlzLnByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqW3RoaXMubmFtZV07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3cge1xuICAgIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBBcnJheTxTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eT4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYWRkUHJvcGVydHkocHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRQcm9wZXJ0eShwcm9wZXJ0eTogYW55LCBpc1Byb3BlcnR5UmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMucHVzaChuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydHkodGhpcy5vYmosIHByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQpKTtcbiAgICB9XG4gICAgcHVibGljIGhhc0Vycm9yKCkgOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGlzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlzRXJyb3IgPSB0aGlzLnByb3BlcnRpZXNbaV0uaGFzRXJyb3IoKSB8fCBpc0Vycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0Vycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMge1xuICAgIHByaXZhdGUgcHJvcGVydGllczogQXJyYXk8U3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eT47XG4gICAgcHJpdmF0ZSBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuO1xuICAgIHB1YmxpYyByb3dzOiBBcnJheTxTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3c+ID0gW107XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHByb3BlcnRpZXM6IEFycmF5PGFueT4sIG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s6IChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpID0+IGJvb2xlYW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayA9IG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXModGhpcy5vYmouZ2V0VHlwZSgpKTsgXG4gICAgICAgIHRoaXMuYnVpbGRSb3dzKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlPclJlc2V0KHRydWUpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlPclJlc2V0KGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIGhhc0Vycm9yKCkgOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGlzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlzRXJyb3IgPSB0aGlzLnJvd3NbaV0uaGFzRXJyb3IoKSB8fCBpc0Vycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0Vycm9yO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYXBwbHlPclJlc2V0KGlzQXBwbHk6IGJvb2xlYW4pIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCB0aGlzLnJvd3NbaV0ucHJvcGVydGllcy5sZW5ndGg7IGogKyspIHtcbiAgICAgICAgICAgICAgICBpZihpc0FwcGx5KSB0aGlzLnJvd3NbaV0ucHJvcGVydGllc1tqXS5hcHBseSgpO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5yb3dzW2ldLnByb3BlcnRpZXNbal0ucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgYnVpbGRSb3dzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIHJlcXVpcmVkUHJvcGVydGllczogQXJyYXk8c3RyaW5nPiA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldFJlcXVpcmVkUHJvcGVydGllcyh0aGlzLm9iai5nZXRUeXBlKCkpO1xuICAgICAgICBpZighcmVxdWlyZWRQcm9wZXJ0aWVzKSByZXF1aXJlZFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldE5hbWUocHJvcGVydGllc1tpXSk7XG4gICAgICAgICAgICB2YXIganNvblByb3BlcnR5ID0gdGhpcy5nZXRQcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgICAgIGlmKCFqc29uUHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIGlzUHJvcGVydHlSZXF1aXJlZDogYm9vbGVhbiA9IHJlcXVpcmVkUHJvcGVydGllcy5pbmRleE9mKG5hbWUpID4gLTE7XG4gICAgICAgICAgICB2YXIgcm93ID0gdGhpcy5nZXRSb3dCeUNhdGVnb3J5KHByb3BlcnRpZXNbaV0uY2F0ZWdvcnkpO1xuICAgICAgICAgICAgaWYocm93KSByb3cuYWRkUHJvcGVydHkoanNvblByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93ID0gbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFJvdyh0aGlzLm9iaiwganNvblByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZXNbaV0uY2F0ZWdvcnkpIHJvdy5jYXRlZ29yeSA9IHByb3BlcnRpZXNbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb3BlcnRpZXNbaV0udGl0bGUpIHtcbiAgICAgICAgICAgICAgICByb3cucHJvcGVydGllc1tyb3cucHJvcGVydGllcy5sZW5ndGggLSAxXS50aXRsZSA9IHByb3BlcnRpZXNbaV0udGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgIH1cbiAgIHByaXZhdGUgZ2V0TmFtZShwcm9wOiBhbnkpOiBzdHJpbmcge1xuICAgICAgIGlmKCFwcm9wKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYodHlwZW9mIHByb3AgPT09IFwic3RyaW5nXCIpIHJldHVybiBwcm9wO1xuICAgICAgICBpZihwcm9wLm5hbWUpIHJldHVybiBwcm9wLm5hbWU7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgfVxuICAgcHJpdmF0ZSBnZXRSb3dCeUNhdGVnb3J5KGNhdGVnb3J5OiBzdHJpbmcpIHtcbiAgICAgICBpZighY2F0ZWdvcnkpIHJldHVybiBudWxsO1xuICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3MubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgIGlmKHRoaXMucm93c1tpXS5jYXRlZ29yeSA9PSBjYXRlZ29yeSkgcmV0dXJuIHRoaXMucm93c1tpXTtcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIG51bGw7XG4gICB9XG4gICBwcml2YXRlIGdldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSB7XG4gICAgICAgaWYoIXByb3BlcnR5TmFtZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzW2ldLm5hbWUgPT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPIGNvZGUgZHVwbGljYXRpb24uIFRoaXMgY29kZSBpcyBpbiAzIHBsYWNlcyBhbHJlYWR5LCBkbyByZWZhY3RvcmluZy5cbiAgICAgICAgaWYocHJvcGVydHkgJiYgcHJvcGVydHlbXCJ2aXNpYmxlXCJdID09PSBmYWxzZSkgcHJvcGVydHkgPSBudWxsO1xuICAgICAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayh0aGlzLm9iaiwgcHJvcGVydHkpKSBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0gXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0aW9uVG9vbGJveEl0ZW0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpY29uTmFtZTogc3RyaW5nO1xuICAgIGpzb246IGFueTtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGlzQ29waWVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Ub29sYm94IHtcbiAgICBwdWJsaWMgb3JkZXJlZFF1ZXN0aW9ucyA9IFtcInRleHRcIiwgXCJjaGVja2JveFwiLCBcInJhZGlvZ3JvdXBcIiwgXCJkcm9wZG93blwiLCBcImNvbW1lbnRcIiwgXCJyYXRpbmdcIiwgXCJodG1sXCJdO1xuICAgIHB1YmxpYyBjb3BpZWRJdGVtTWF4Q291bnQ6IG51bWJlciA9IDM7XG4gICAgcHJpdmF0ZSBpdGVtc1ZhbHVlOiBBcnJheTxJUXVlc3Rpb25Ub29sYm94SXRlbT4gPSBbXTtcblxuICAgIGtvSXRlbXM6IGFueTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihzdXBwb3J0ZWRRdWVzdGlvbnM6IEFycmF5PHN0cmluZz4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMua29JdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZURlZmF1bHRJdGVtcyhzdXBwb3J0ZWRRdWVzdGlvbnMpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGpzb25UZXh0KCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtc1ZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIHNldCBqc29uVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZSA9ICh2YWx1ZSkgPyBKU09OLnBhcnNlKHZhbHVlKSA6IFtdO1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29waWVkSnNvblRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuY29waWVkSXRlbXMpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNvcGllZEpzb25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIG5ld0l0ZW1zID0gKHZhbHVlKSA/IEpTT04ucGFyc2UodmFsdWUpIDogW107XG4gICAgICAgIHRoaXMuY2xlYXJDb3BpZWRJdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdJdGVtc1tpXS5pc0NvcGllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0obmV3SXRlbXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXRlbXMoKTogQXJyYXk8SVF1ZXN0aW9uVG9vbGJveEl0ZW0+IHsgcmV0dXJuIHRoaXMuaXRlbXNWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgY29waWVkSXRlbXMoKTogQXJyYXk8SVF1ZXN0aW9uVG9vbGJveEl0ZW0+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXNWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNWYWx1ZVtpXS5pc0NvcGllZCkgcmVzdWx0LnB1c2godGhpcy5pdGVtc1ZhbHVlW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgYWRkSXRlbXMoaXRlbXM6IEFycmF5PElRdWVzdGlvblRvb2xib3hJdGVtPiwgY2xlYXJBbGw6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoY2xlYXJBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJJdGVtcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGFkZENvcGllZEl0ZW0ocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB7IG5hbWU6IHF1ZXN0aW9uLm5hbWUsIHRpdGxlOiBxdWVzdGlvbi5uYW1lLCBpc0NvcGllZDogdHJ1ZSwgaWNvbk5hbWU6IFwiaWNvbi1kZWZhdWx0XCIsIGpzb246IHRoaXMuZ2V0UXVlc3Rpb25KU09OKHF1ZXN0aW9uKSB9O1xuICAgICAgICBpZiAodGhpcy5yZXBsYWNlSXRlbShpdGVtKSkgcmV0dXJuO1xuICAgICAgICB2YXIgY29waWVkID0gdGhpcy5jb3BpZWRJdGVtcztcbiAgICAgICAgaWYgKHRoaXMuY29waWVkSXRlbU1heENvdW50ID4gMCAmJiBjb3BpZWQubGVuZ3RoID09IHRoaXMuY29waWVkSXRlbU1heENvdW50KSB0aGlzLnJlbW92ZUl0ZW0oY29waWVkW3RoaXMuY29waWVkSXRlbU1heENvdW50IC0gMV0ubmFtZSk7XG4gICAgICAgIHRoaXMuYWRkSXRlbShpdGVtKTtcbiAgICB9XG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSVF1ZXN0aW9uVG9vbGJveEl0ZW0pIHtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIHJlcGxhY2VJdGVtKGl0ZW06IElRdWVzdGlvblRvb2xib3hJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihpdGVtLm5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZVtpbmRleF0gPSBpdGVtO1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXJJdGVtcygpIHtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlID0gW107XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyQ29waWVkSXRlbXMoKSB7XG4gICAgICAgIHZhciByZW1vdmVkSXRlbXMgPSB0aGlzLmNvcGllZEl0ZW1zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKHJlbW92ZWRJdGVtc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25JdGVtc0NoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29JdGVtcyh0aGlzLml0ZW1zVmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGluZGV4T2YobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtc1ZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1ZhbHVlW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZURlZmF1bHRJdGVtcyhzdXBwb3J0ZWRRdWVzdGlvbnM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25UeXBlcyhzdXBwb3J0ZWRRdWVzdGlvbnMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBxdWVzdGlvbnNbaV07XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBTdXJ2ZXkuRWxlbWVudEZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlRWxlbWVudChuYW1lLCBcInExXCIpO1xuICAgICAgICAgICAgaWYoIXF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRRdWVzdGlvbkpTT04ocXVlc3Rpb24pO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB7IG5hbWU6IG5hbWUsIGljb25OYW1lOiAnaWNvbi0nICsgbmFtZSwgdGl0bGU6IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoJ3F0LicgKyBuYW1lKSwganNvbjoganNvbiwgaXNDb3BpZWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB0aGlzLml0ZW1zVmFsdWUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UXVlc3Rpb25KU09OKHF1ZXN0aW9uOiBhbnkpOiBhbnkge1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChxdWVzdGlvbik7XG4gICAgICAgIGpzb24udHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UXVlc3Rpb25UeXBlcyhzdXBwb3J0ZWRRdWVzdGlvbnM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmdbXSB7XG4gICAgICAgIHZhciBhbGxUeXBlcyA9IFN1cnZleS5FbGVtZW50RmFjdG9yeS5JbnN0YW5jZS5nZXRBbGxUeXBlcygpO1xuICAgICAgICBpZiAoIXN1cHBvcnRlZFF1ZXN0aW9ucyB8fCBzdXBwb3J0ZWRRdWVzdGlvbnMubGVuZ3RoID09IDApIHN1cHBvcnRlZFF1ZXN0aW9ucyA9IGFsbFR5cGVzO1xuICAgICAgICB2YXIgcXVlc3Rpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcmRlcmVkUXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMub3JkZXJlZFF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRRdWVzdGlvbnMuaW5kZXhPZihuYW1lKSA+IC0xICYmIGFsbFR5cGVzLmluZGV4T2YobmFtZSkgPiAtMSkgcXVlc3Rpb25zLnB1c2gobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdXBwb3J0ZWRRdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gc3VwcG9ydGVkUXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9ucy5pbmRleE9mKHN1cHBvcnRlZFF1ZXN0aW9uc1tpXSkgPCAwICYmIGFsbFR5cGVzLmluZGV4T2YobmFtZSkgPiAtMSkgcXVlc3Rpb25zLnB1c2gobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9ucztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25Ub29sYm94LnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleUpTT041fSBmcm9tIFwiLi9qc29uNVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5RW1iZWRpbmdXaW5kb3cge1xuICAgIHByaXZhdGUganNvblZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZ0hlYWQ6IEFjZUFqYXguRWRpdG9yO1xuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdKYXZhOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nQm9keTogQWNlQWpheC5FZGl0b3I7XG4gICAga29IZWFkVGV4dDogYW55O1xuICAgIGtvQm9keVRleHQ6IGFueTtcbiAgICBrb0phdmFUZXh0OiBhbnk7XG4gICAgcHVibGljIHN1cnZleUlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdXJ2ZXlQb3N0SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGdlbmVyYXRlVmFsaWRKU09OOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHN1cnZleUpTVmVyc2lvbjogc3RyaW5nID0gXCIwLjEyLjNcIjsgLy9UT0RPXG4gICAgcHVibGljIHN1cnZleUNETlBhdGg6IHN0cmluZyA9IFwiaHR0cHM6Ly9zdXJ2ZXlqcy5henVyZWVkZ2UubmV0L1wiO1xuICAgIGtvU2hvd0FzV2luZG93OiBhbnk7XG4gICAga29TY3JpcHRVc2luZzogYW55O1xuICAgIGtvSGFzSWRzOiBhbnk7XG4gICAga29Mb2FkU3VydmV5OiBhbnk7XG4gICAga29MaWJyYXJ5VmVyc2lvbjogYW55O1xuICAgIGtvVmlzaWJsZUh0bWw6IGFueTtcbiAgICBwcml2YXRlIHBsYXRmb3JtU3VydmV5SlNQcmVmaXggPSB7XG4gICAgICAgIFwiYW5ndWxhclwiOiBcImFuZ3VsYXJcIixcbiAgICAgICAgXCJqcXVlcnlcIjogXCJqcXVlcnlcIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcImtvXCIsXG4gICAgICAgIFwicmVhY3RcIjogXCJyZWFjdFwiLFxuICAgICAgICBcInZ1ZVwiOiBcInZ1ZVwiXG4gICAgfVxuICAgIC8qXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUhlYWRlcnMgPSB7XG4gICAgICAgIFwiYW5ndWxhclwiOiBcIlwiLFxuICAgICAgICBcImpxdWVyeVwiOiBcIjxzY3JpcHQgc3JjPVxcXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4xLjEvanF1ZXJ5Lm1pbi5qc1xcXCI+PC9zY3JpcHQ+XCIsXG4gICAgICAgIFwia25vY2tvdXRcIjogXCI8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMva25vY2tvdXQvMy4zLjAva25vY2tvdXQtbWluLmpzXFxcIj48L3NjcmlwdD5cIixcbiAgICAgICAgXCJyZWFjdFwiOiBcIlwiLFxuICAgICAgICBcInZ1ZVwiOiBcIjxzY3JpcHQgc3JjPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy92dWUvMi4xLjEwL3Z1ZS5taW4uanMnPjwvc2NyaXB0PlwiXG4gICAgfTsqL1xuICAgIHByaXZhdGUgcGxhdGZvcm1KU29uUGFnZSA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiQENvbXBvbmVudCh7XFxuICBzZWxlY3RvcjogJ25nLWFwcCcsXFxuICAgICAgICB0ZW1wbGF0ZTogXFxuICAgICAgICA8ZGl2IGlkPSdzdXJ2ZXlFbGVtZW50Jz48L2Rpdj5cXFwiLFxcbn0pXFxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XFxuICAgIG5nT25Jbml0KCkge1xcbiAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuICAgICAgICBzdXJ2ZXkub25Db21wbGV0ZS5hZGQoc2VuZERhdGFUb1NlcnZlcik7XFxuICAgICAgIFN1cnZleS5TdXJ2ZXlORy5yZW5kZXIoXFxcInN1cnZleUVsZW1lbnRcXFwiLCB7IG1vZGVsOiBzdXJ2ZXkgfSk7XFxuICAgIH1cXG59XCIsXG4gICAgICAgIFwianF1ZXJ5XCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuJChcXFwiI3N1cnZleUNvbnRhaW5lclxcXCIpLlN1cnZleSh7XFxuICAgIG1vZGVsOiBzdXJ2ZXksXFxuICAgIG9uQ29tcGxldGU6IHNlbmREYXRhVG9TZXJ2ZXJcXG59KTtcIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcInZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04sIFxcXCJzdXJ2ZXlDb250YWluZXJcXFwiKTtcXG5zdXJ2ZXkub25Db21wbGV0ZS5hZGQoc2VuZERhdGFUb1NlcnZlcik7XCIsXG4gICAgICAgIFwicmVhY3RcIjogXCJSZWFjdERPTS5yZW5kZXIoXFxuICAgIDxTdXJ2ZXkuU3VydmV5IGpzb249eyBzdXJ2ZXlKU09OIH0gb25Db21wbGV0ZT17IHNlbmREYXRhVG9TZXJ2ZXIgfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcInN1cnZleUNvbnRhaW5lclxcXCIpKTtcIixcbiAgICAgICAgXCJ2dWVcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG5uZXcgVnVlKHsgZWw6ICcjc3VydmV5Q29udGFpbmVyJywgZGF0YTogeyBzdXJ2ZXk6IHN1cnZleSB9IH0pO1wiXG4gICAgfTtcbiAgICBwcml2YXRlIHBsYXRmb3JtSlNvbldpbmRvdyA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiQENvbXBvbmVudCh7XFxuICBzZWxlY3RvcjogJ25nLWFwcCcsXFxuICAgICAgICB0ZW1wbGF0ZTogXFxuICAgICAgICA8ZGl2IGlkPSdzdXJ2ZXlFbGVtZW50Jz48L2Rpdj5cXFwiLFxcbn0pXFxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XFxuICAgIG5nT25Jbml0KCkge1xcbiAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuICAgICAgICBzdXJ2ZXkub25Db21wbGV0ZS5hZGQoc2VuZERhdGFUb1NlcnZlcik7XFxuICAgICAgIFN1cnZleS5TdXJ2ZXlXaW5kb3dORy5yZW5kZXIoXFxcInN1cnZleUVsZW1lbnRcXFwiLCB7IG1vZGVsOiBzdXJ2ZXkgfSk7XFxuICAgIH1cXG59XCIsXG4gICAgICAgIFwianF1ZXJ5XCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuJChcXFwiI3N1cnZleUNvbnRhaW5lclxcXCIpLlN1cnZleVdpbmRvdyh7XFxuICAgIG1vZGVsOiBzdXJ2ZXksXFxuICAgIG9uQ29tcGxldGU6IHNlbmREYXRhVG9TZXJ2ZXJcXG59KTtcIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcInZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04pO1xcbnN1cnZleVdpbmRvdy5zaG93KCk7XFxuc3VydmV5Lm9uQ29tcGxldGUuYWRkKHNlbmREYXRhVG9TZXJ2ZXIpO1wiLFxuICAgICAgICBcInJlYWN0XCI6IFwiUmVhY3RET00ucmVuZGVyKFxcbiAgICA8U3VydmV5LlN1cnZleVdpbmRvdyBqc29uPXsgc3VydmV5SlNPTiB9IG9uQ29tcGxldGU9eyBzZW5kRGF0YVRvU2VydmVyIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJzdXJ2ZXlDb250YWluZXJcXFwiKSk7XCIsXG4gICAgICAgIFwidnVlXCI6IFwiXCJcbiAgICB9O1xuICAgIHByaXZhdGUgcGxhdGZvcm1IdG1sb25QYWdlID0ge1xuICAgICAgICBcImFuZ3VsYXJcIjogXCI8bmctYXBwPjwvbmctYXBwPlwiLFxuICAgICAgICBcImpxdWVyeVwiOiBcIjxkaXYgaWQ9XFxcInN1cnZleUNvbnRhaW5lclxcXCI+PC9kaXY+XCIsXG4gICAgICAgIFwia25vY2tvdXRcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxuICAgICAgICBcInJlYWN0XCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48L2Rpdj5cIixcbiAgICAgICAgXCJ2dWVcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjxzdXJ2ZXkgOnN1cnZleT1cXFwic3VydmV5XFxcIj48L3N1cnZleT48L2Rpdj5cIlxuICAgIH07XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUh0bWxvbldpbmRvdyA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiPG5nLWFwcD48L25nLWFwcD5cIixcbiAgICAgICAgXCJqcXVlcnlcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxuICAgICAgICBcImtub2Nrb3V0XCI6IFwiXCIsXG4gICAgICAgIFwicmVhY3RcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxuICAgICAgICBcInZ1ZVwiOiBcIjxkaXYgaWQ9J3N1cnZleUNvbnRhaW5lcic+PHN1cnZleS13aW5kb3cgOnN1cnZleT0nc3VydmV5Jz48L3N1cnZleS13aW5kb3c+PC9kaXY+XCJcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29MaWJyYXJ5VmVyc2lvbiA9IGtvLm9ic2VydmFibGUoXCJqcXVlcnlcIik7XG4gICAgICAgIHRoaXMua29TaG93QXNXaW5kb3cgPSBrby5vYnNlcnZhYmxlKFwicGFnZVwiKTtcbiAgICAgICAgdGhpcy5rb1NjcmlwdFVzaW5nID0ga28ub2JzZXJ2YWJsZShcImJvb3RzdHJhcFwiKTtcbiAgICAgICAgdGhpcy5rb0hhc0lkcyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvTG9hZFN1cnZleSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMua29IZWFkVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29KYXZhVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29Cb2R5VGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG5cbiAgICAgICAgdGhpcy5rb1Zpc2libGVIdG1sID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5rb1Nob3dBc1dpbmRvdygpID09IFwicGFnZVwiIHx8IHNlbGYucGxhdGZvcm1IdG1sb25XaW5kb3dbc2VsZi5rb0xpYnJhcnlWZXJzaW9uKCldICE9IFwiXCI7IH0pO1xuICAgICAgICB0aGlzLmtvTGlicmFyeVZlcnNpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNldEhlYWRUZXh0KCk7IHNlbGYuc2V0SmF2YVRlc3QoKTsgc2VsZi5zZXRCb2R5VGV4dCgpOyB9KTtcbiAgICAgICAgdGhpcy5rb1Nob3dBc1dpbmRvdy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SmF2YVRlc3QoKTsgc2VsZi5zZXRCb2R5VGV4dCgpOyB9KTtcbiAgICAgICAgdGhpcy5rb1NjcmlwdFVzaW5nLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZXRIZWFkVGV4dCgpOyBzZWxmLnNldEphdmFUZXN0KCk7IH0pO1xuICAgICAgICB0aGlzLmtvTG9hZFN1cnZleS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SmF2YVRlc3QoKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID0gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGdldCBqc29uKCk6IGFueSB7IHJldHVybiB0aGlzLmpzb25WYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQganNvbih2YWx1ZTogYW55KSB7IHRoaXMuanNvblZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGhhc0FjZUVkaXRvcigpOiBib29sZWFuIHsgcmV0dXJuIHR5cGVvZiBhY2UgIT09IFwidW5kZWZpbmVkXCI7IH1cbiAgICBwdWJsaWMgc2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQWNlRWRpdG9yICYmIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID0gdGhpcy5jcmVhdGVFZGl0b3IoXCJzdXJ2ZXlFbWJlZGluZ0hlYWRcIik7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nQm9keSA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdCb2R5XCIpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0phdmEgPSB0aGlzLmNyZWF0ZUVkaXRvcihcInN1cnZleUVtYmVkaW5nSmF2YVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSGFzSWRzKHRoaXMuc3VydmV5SWQgJiYgdGhpcy5zdXJ2ZXlQb3N0SWQpO1xuICAgICAgICB0aGlzLnNldEJvZHlUZXh0KCk7XG4gICAgICAgIHRoaXMuc2V0SGVhZFRleHQoKTtcbiAgICAgICAgdGhpcy5zZXRKYXZhVGVzdCgpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldEJvZHlUZXh0KCkge1xuICAgICAgICB0aGlzLnNldFRleHRUb0VkaXRvcih0aGlzLnN1cnZleUVtYmVkaW5nQm9keSwgdGhpcy5rb0JvZHlUZXh0LCB0aGlzLnBsYXRmb3JtSHRtbG9uUGFnZVt0aGlzLmtvTGlicmFyeVZlcnNpb24oKV0pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldCBnZXRDRE5QYXRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnN1cnZleUNETlBhdGggKyB0aGlzLnN1cnZleUpTVmVyc2lvbiArIFwiL1wiOyB9XG4gICAgcHJpdmF0ZSBzZXRIZWFkVGV4dCgpIHtcbiAgICAgICAgdmFyIHN0ciA9IFwiPCEtLSBZb3VyIHBsYXRmb3JtIChcIiArIHRoaXMua29MaWJyYXJ5VmVyc2lvbigpICsgXCIpIHNjcmlwdHMuIC0tPlxcblwiO1xuICAgICAgICBpZiAodGhpcy5rb1NjcmlwdFVzaW5nKCkgIT0gXCJib290c3RyYXBcIikge1xuICAgICAgICAgICAgc3RyICs9IFwiXFxuPGxpbmsgaHJlZj1cXFwiXCIgKyB0aGlzLmdldENETlBhdGggKyAgXCJzdXJ2ZXkuY3NzXFxcIiB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiAvPlwiO1xuICAgICAgICB9XG4gICAgICAgIHN0ciArPSBcIlxcbjxzY3JpcHQgc3JjPVxcXCJcIiArIHRoaXMuZ2V0Q0ROUGF0aCArICAgXCJzdXJ2ZXkuXCIgKyB0aGlzLnBsYXRmb3JtU3VydmV5SlNQcmVmaXhbdGhpcy5rb0xpYnJhcnlWZXJzaW9uKCldICsgIFwiIC5taW4uanNcXFwiPjwvc2NyaXB0PlwiO1xuXG4gICAgICAgIHRoaXMuc2V0VGV4dFRvRWRpdG9yKHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkLCB0aGlzLmtvSGVhZFRleHQsIHN0cik7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0SmF2YVRlc3QoKSB7XG4gICAgICAgIHRoaXMuc2V0VGV4dFRvRWRpdG9yKHRoaXMuc3VydmV5RW1iZWRpbmdKYXZhLCB0aGlzLmtvSmF2YVRleHQsIHRoaXMuZ2V0SmF2YVRleHQoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlRWRpdG9yKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBBY2VBamF4LkVkaXRvciB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBhY2UuZWRpdChlbGVtZW50TmFtZSk7XG4gICAgICAgIGVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9tb25va2FpXCIpO1xuICAgICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvanNvblwiKTtcbiAgICAgICAgZWRpdG9yLnNldFNob3dQcmludE1hcmdpbihmYWxzZSk7XG4gICAgICAgIGVkaXRvci5yZW5kZXJlci5zZXRTaG93R3V0dGVyKGZhbHNlKTtcbiAgICAgICAgZWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xuICAgICAgICByZXR1cm4gZWRpdG9yO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEphdmFUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBpc09uUGFnZSA9IHRoaXMua29TaG93QXNXaW5kb3coKSA9PSBcInBhZ2VcIjtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXMuZ2V0U2F2ZUZ1bmMoKSArIFwiXFxuXFxuXCI7XG4gICAgICAgIHN0ciArPSBpc09uUGFnZSA/IHRoaXMucGxhdGZvcm1KU29uUGFnZVt0aGlzLmtvTGlicmFyeVZlcnNpb24oKV0gOiB0aGlzLnBsYXRmb3JtSlNvbldpbmRvd1t0aGlzLmtvTGlicmFyeVZlcnNpb24oKV07XG4gICAgICAgIHZhciBqc29uVGV4dCA9IFwidmFyIHN1cnZleUpTT04gPSBcIiArIHRoaXMuZ2V0SnNvblRleHQoKSArIFwiXFxuXFxuXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNldENzcygpICsgXCJcXG5cIiArIGpzb25UZXh0ICsgc3RyO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNldENzcygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5rb1NjcmlwdFVzaW5nKCkgIT0gXCJib290c3RyYXBcIikgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiBcIlN1cnZleS5TdXJ2ZXkuY3NzVHlwZSA9IFxcXCJib290c3RyYXBcXFwiO1xcblwiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNhdmVGdW5jKCkge1xuICAgICAgICByZXR1cm4gXCJmdW5jdGlvbiBzZW5kRGF0YVRvU2VydmVyKHN1cnZleSkge1xcblwiICsgdGhpcy5nZXRTYXZlRnVuY0NvZGUoKSArIFwiXFxufVwiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNhdmVGdW5jQ29kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMua29IYXNJZHMoKSkgcmV0dXJuIFwiICAgIHN1cnZleS5zZW5kUmVzdWx0KCdcIiArIHRoaXMuc3VydmV5UG9zdElkICsgXCInKTtcIjtcbiAgICAgICAgcmV0dXJuIFwiICAgIC8vc2VuZCBBamF4IHJlcXVlc3QgdG8geW91ciB3ZWIgc2VydmVyLlxcbiAgICBhbGVydChcXFwiVGhlIHJlc3VsdHMgYXJlOlxcXCIgKyBKU09OLnN0cmluZ2lmeShzLmRhdGEpKTtcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRKc29uVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5rb0hhc0lkcygpICYmIHRoaXMua29Mb2FkU3VydmV5KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcInsgc3VydmV5SWQ6ICdcIiArIHRoaXMuc3VydmV5SWQgKyBcIid9XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVWYWxpZEpTT04pIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmpzb24pO1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleUpTT041KCkuc3RyaW5naWZ5KHRoaXMuanNvbik7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0VGV4dFRvRWRpdG9yKGVkaXRvcjogQWNlQWpheC5FZGl0b3IsIGtvVGV4dDogYW55LCB0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGVkaXRvcikgZWRpdG9yLnNldFZhbHVlKHRleHQpO1xuICAgICAgICBpZiAoa29UZXh0KSBrb1RleHQodGV4dCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlFbWJlZGluZ1dpbmRvdy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXIsIE9ialR5cGV9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdEl0ZW0ge1xuICAgIHB1YmxpYyB2YWx1ZTogU3VydmV5LkJhc2U7XG4gICAgcHVibGljIHRleHQ6IGFueTtcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlciA9IDA7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RzIHtcbiAgICBwdWJsaWMgc3RhdGljIGludGVuZDogc3RyaW5nID0gXCIuXCI7XG4gICAgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMga29PYmplY3RzOiBhbnksIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnkpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZWJ1aWxkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRQYWdlKHBhZ2U6IFN1cnZleS5QYWdlTW9kZWwpIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50KHBhZ2UsIG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkRWxlbWVudChlbGVtZW50OiBhbnksIHBhcmVudDogYW55KSB7XG4gICAgICAgIHZhciBwYXJlbnRJbmRleCA9IHBhcmVudCAhPSBudWxsID8gdGhpcy5nZXRJdGVtSW5kZXgocGFyZW50KSA6IDA7XG4gICAgICAgIGlmIChwYXJlbnRJbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gcGFyZW50ICE9IG51bGwgPyBwYXJlbnQuZWxlbWVudHMgOiB0aGlzLnN1cnZleS5wYWdlcztcbiAgICAgICAgdmFyIGVsZW1lbnRJbmRleCA9IGVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgIHZhciBuZXdJbmRleCA9IGVsZW1lbnRJbmRleCArIDEgKyBwYXJlbnRJbmRleDtcbiAgICAgICAgaWYoZWxlbWVudEluZGV4ID4gMCkge1xuICAgICAgICAgICAgdmFyIHByZXZFbGVtZW50ID0gZWxlbWVudHNbZWxlbWVudEluZGV4IC0gMV07XG4gICAgICAgICAgICBuZXdJbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KHByZXZFbGVtZW50KSArIHRoaXMuZ2V0QWxsRWxlbWVudENvdW50KHByZXZFbGVtZW50KSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oZWxlbWVudCwgdGhpcy5rb09iamVjdHMoKVtwYXJlbnRJbmRleF0pO1xuICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSwgbmV3SW5kZXgpO1xuICAgICAgICBpZihlbGVtZW50LmVsZW1lbnRzKSB7XG4gICAgICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKG9ianMsIGVsZW1lbnQuZWxlbWVudHMsIGl0ZW0pO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpICsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtvT2JqZWN0cy5zcGxpY2UobmV3SW5kZXggKyAxICsgaSwgMCwgb2Jqc1tpXSk7ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKGl0ZW0pO1xuICAgIH1cbiAgICBwdWJsaWMgc2VsZWN0T2JqZWN0KG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIG9ianMgPSB0aGlzLmtvT2JqZWN0cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvYmpzW2ldLnZhbHVlID09IG9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZChvYmpzW2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlbW92ZU9iamVjdChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIGNvdW50VG9SZW1vdmUgPSAxICsgdGhpcy5nZXRBbGxFbGVtZW50Q291bnQob2JqKTtcbiAgICAgICAgdGhpcy5rb09iamVjdHMuc3BsaWNlKGluZGV4LCBjb3VudFRvUmVtb3ZlKTtcbiAgICB9XG4gICAgcHVibGljIG5hbWVDaGFuZ2VkKG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgob2JqKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvT2JqZWN0cygpW2luZGV4XS50ZXh0KHRoaXMuZ2V0VGV4dCh0aGlzLmtvT2JqZWN0cygpW2luZGV4XSkpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VsZWN0TmV4dFF1ZXN0aW9uKGlzVXA6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZFF1ZXN0aW9uKCk7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChxdWVzdGlvbik7XG4gICAgICAgIGlmIChpdGVtSW5kZXggPCAwKSByZXR1cm4gcXVlc3Rpb247XG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcbiAgICAgICAgdmFyIG5ld0l0ZW1JbmRleCA9IGl0ZW1JbmRleCArIChpc1VwID8gLTEgOiAxKTtcbiAgICAgICAgaWYgKG5ld0l0ZW1JbmRleCA8IG9ianMubGVuZ3RoICYmIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9ianNbbmV3SXRlbUluZGV4XS52YWx1ZSkgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgaXRlbUluZGV4ID0gbmV3SXRlbUluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SXRlbUluZGV4ID0gaXRlbUluZGV4O1xuICAgICAgICAgICAgd2hpbGUgKG5ld0l0ZW1JbmRleCA8IG9ianMubGVuZ3RoICYmIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9ianNbbmV3SXRlbUluZGV4XS52YWx1ZSkgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IG5ld0l0ZW1JbmRleDtcbiAgICAgICAgICAgICAgICBuZXdJdGVtSW5kZXggKz0gKGlzVXAgPyAxIDogLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChvYmpzW2l0ZW1JbmRleF0pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFsbEVsZW1lbnRDb3VudChlbGVtZW50OiBhbnkpIHtcbiAgICAgICAgaWYoIWVsZW1lbnQuZWxlbWVudHMpIHJldHVybiAwO1xuICAgICAgICB2YXIgcmVzID0gMDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuZWxlbWVudHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICByZXMgKz0gMSArIHRoaXMuZ2V0QWxsRWxlbWVudENvdW50KGVsZW1lbnQuZWxlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRRdWVzdGlvbigpOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvU2VsZWN0ZWQoKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtvU2VsZWN0ZWQoKS52YWx1ZTtcbiAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlF1ZXN0aW9uID8gPFN1cnZleS5RdWVzdGlvbkJhc2U+KG9iaikgOiBudWxsO1xuXG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbShpdGVtOiBTdXJ2ZXlPYmplY3RJdGVtLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMua29PYmplY3RzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmtvT2JqZWN0cy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJlYnVpbGQoKSB7XG4gICAgICAgIHZhciBvYmpzID0gW107XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmtvT2JqZWN0cyhvYmpzKTtcbiAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZChudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcm9vdCA9IHRoaXMuY3JlYXRlSXRlbSh0aGlzLnN1cnZleSwgbnVsbCk7XG4gICAgICAgIG9ianMucHVzaChyb290KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkucGFnZXNbaV07XG4gICAgICAgICAgICB2YXIgcGFnZUl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0ocGFnZSwgcm9vdCk7XG4gICAgICAgICAgICBvYmpzLnB1c2gocGFnZUl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKG9ianMsIHBhZ2UuZWxlbWVudHMsIHBhZ2VJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvT2JqZWN0cyhvYmpzKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRoaXMuc3VydmV5KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRzKG9ianM6IEFycmF5PGFueT4sIGVsZW1lbnRzOiBBcnJheTxTdXJ2ZXkuSUVsZW1lbnQ+LCBwYXJlbnRJdGVtOiBTdXJ2ZXlPYmplY3RJdGVtKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYoZWwuaXNQYW5lbCkge1xuICAgICAgICAgICAgICAgIHZhciBwYW5lbEl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oPFN1cnZleS5QYW5lbD5lbCwgcGFyZW50SXRlbSk7XG4gICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHBhbmVsSXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKG9ianMsICg8U3VydmV5LlBhbmVsPmVsKS5lbGVtZW50cywgcGFuZWxJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ianMucHVzaCh0aGlzLmNyZWF0ZUl0ZW0oPFN1cnZleS5RdWVzdGlvbkJhc2U+ZWwsIHBhcmVudEl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUl0ZW0odmFsdWU6IFN1cnZleS5CYXNlLCBwYXJlbnQ6IFN1cnZleU9iamVjdEl0ZW0pIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgU3VydmV5T2JqZWN0SXRlbSgpO1xuICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGl0ZW0ubGV2ZWwgPSBwYXJlbnQgIT0gbnVsbCA/IHBhcmVudC5sZXZlbCArIDEgOiAwO1xuICAgICAgICBpdGVtLnRleHQgPSBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0VGV4dChpdGVtKSk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEl0ZW1JbmRleCh2YWx1ZTogU3VydmV5LkJhc2UpOiBudW1iZXIge1xuICAgICAgICB2YXIgb2JqcyA9IHRoaXMua29PYmplY3RzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9ianNbaV0udmFsdWUgPT0gdmFsdWUpIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRUZXh0KGl0ZW06IFN1cnZleU9iamVjdEl0ZW0pOiBzdHJpbmcge1xuICAgICAgICBpZihpdGVtLmxldmVsID09IDApIHJldHVybiBcIlN1cnZleVwiO1xuICAgICAgICB2YXIgaW50ZW5kID0gU3VydmV5T2JqZWN0cy5pbnRlbmQ7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBpdGVtLmxldmVsOyBpICsrKSB7XG4gICAgICAgICAgICBpbnRlbmQgKz0gU3VydmV5T2JqZWN0cy5pbnRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludGVuZCArIFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKGl0ZW0udmFsdWUpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5T2JqZWN0cy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleUZvckRlc2lnbmVyIGV4dGVuZHMgU3VydmV5LlN1cnZleSB7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZEVsZW1lbnRWYWx1ZTogYW55O1xuICAgIGVkaXRRdWVzdGlvbkNsaWNrOiBhbnk7IGNvcHlRdWVzdGlvbkNsaWNrOiBhbnk7IGZhc3RDb3B5UXVlc3Rpb25DbGljazogYW55OyBkZWxldGVDdXJyZW50T2JqZWN0Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgIG9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkVkaXRRdWVzdGlvbjogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkNvcHlRdWVzdGlvbjogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkZhc3RDb3B5UXVlc3Rpb246IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25EZWxldGVDdXJyZW50T2JqZWN0OiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgY29uc3RydWN0b3IoanNvbk9iajogYW55ID0gbnVsbCwgcmVuZGVyZWRFbGVtZW50OiBhbnkgPSBudWxsLCBjc3M6IGFueSA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoanNvbk9iaiwgcmVuZGVyZWRFbGVtZW50LCBjc3MpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2V0RGVzaWduTW9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5vbkFmdGVyUmVuZGVyUGFnZS5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBvcHRpb25zLnBhZ2VbXCJvbkFmdGVyUmVuZGVyUGFnZVwiXShvcHRpb25zLmh0bWxFbGVtZW50KTsgfSk7XG4gICAgICAgIHRoaXMub25BZnRlclJlbmRlclF1ZXN0aW9uLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IG9wdGlvbnMucXVlc3Rpb25bXCJvbkFmdGVyUmVuZGVyUXVlc3Rpb25cIl0ob3B0aW9ucy5odG1sRWxlbWVudCk7IH0pO1xuICAgICAgICB0aGlzLm9uQWZ0ZXJSZW5kZXJQYW5lbC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBvcHRpb25zLnBhbmVsW1wib25BZnRlclJlbmRlclBhbmVsXCJdKG9wdGlvbnMuaHRtbEVsZW1lbnQpOyB9KTtcbiAgICAgICAgdGhpcy5lZGl0UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkVkaXRRdWVzdGlvbi5maXJlKHNlbGYsIG51bGwpOyB9O1xuICAgICAgICB0aGlzLmNvcHlRdWVzdGlvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uQ29weVF1ZXN0aW9uLmZpcmUoc2VsZiwgbnVsbCk7IH07XG4gICAgICAgIHRoaXMuZmFzdENvcHlRdWVzdGlvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uRmFzdENvcHlRdWVzdGlvbi5maXJlKHNlbGYsIG51bGwpOyB9O1xuICAgICAgICB0aGlzLmRlbGV0ZUN1cnJlbnRPYmplY3RDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkRlbGV0ZUN1cnJlbnRPYmplY3QuZmlyZShzZWxmLCBudWxsKTsgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRWxlbWVudCgpOiBhbnkge3JldHVybiB0aGlzLnNlbGVjdGVkRWxlbWVudFZhbHVlO31cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkRWxlbWVudCh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSB0aGlzLnNlbGVjdGVkRWxlbWVudFZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50VmFsdWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlW1wib25TZWxlY3RlZEVsZW1lbnRDaGFuZ2VkXCJdKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnRWYWx1ZVtcIm9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZFwiXSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25TZWxlY3RlZEVsZW1lbnRDaGFuZ2VkLmZpcmUodGhpcywgeyAnb2xkRWxlbWVudCc6IG9sZFZhbHVlLCAnbmV3RWxlbWVudCc6IHZhbHVlIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0RWRpdG9yTG9jU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyh2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYW5lbEJhc2VPbkNyZWF0aW5nKHNlbGY6IGFueSkge1xuICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlciA9IDA7XG4gICAgc2VsZi5lbXB0eUVsZW1lbnQgPSBudWxsO1xuICAgIHNlbGYua29Sb3dzLnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XG4gICAgICAgIGlmKHNlbGYuZW1wdHlFbGVtZW50KSB7XG4gICAgICAgICAgICBzZWxmLmVtcHR5RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi5rb1Jvd3MoKS5sZW5ndGggPiAwID8gXCJub25lXCIgOiBcIlwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRPbkNyZWF0aW5nKHNlbGY6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPSBudWxsO1xuICAgIHNlbGYuZHJhZ0Ryb3BIZWxwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZi5kcmFnRHJvcEhlbHBlclZhbHVlID0gc2VsZi5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZTtcbiAgICB9O1xuICAgIHNlbGYucmVuZGVyZWRFbGVtZW50ID0gbnVsbDtcbiAgICBzZWxmLmFkZG9uc0VsZW1lbnQgPSBudWxsO1xuICAgIHNlbGYua29Jc0RyYWdnaW5nID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgc2VsZi5rb0lzU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICBzZWxmLmtvSXNEcmFnZ2luZy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IFxuICAgICAgICBpZihzZWxmLnJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgc2VsZi5yZW5kZXJlZEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG5ld1ZhbHVlID8gMC40IDogMTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYua29Jc1NlbGVjdGVkLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgXG4gICAgICAgIGlmKHNlbGYucmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZihuZXdWYWx1ZSkgbmV3Q2xhc3MgKz0gXCIgc3ZkX3Ffc2VsZWN0ZWQgXCI7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcmVkRWxlbWVudC5jbGFzc05hbWUgPSBuZXdDbGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZihzZWxmLmFkZG9uc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbGYuYWRkb25zRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbmV3VmFsdWUgPyBcIlwiOiBcIm5vbmVcIjsgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRW1wdHlQYW5lbEVsZW1lbnQocm9vdDogSFRNTEVsZW1lbnQsIGRyYWdEcm9wSGVscGVyOiBhbnksIHNlbGY6IGFueSk6IEhUTUxFbGVtZW50IHtcbiAgICB2YXIgZURpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVEaXYuY2xhc3NOYW1lID0gXCJ3ZWxsXCI7XG4gICAgZURpdi5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSkgeyBcbiAgICAgICAgZHJhZ0Ryb3BIZWxwZXIuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZik7XG4gICAgfTtcbiAgICB2YXIgZVNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVTcGFuLnRleHRDb250ZW50ID0gc2VsZi5kYXRhLmdldEVkaXRvckxvY1N0cmluZygnc3VydmV5LmRyb3BRdWVzdGlvbicpO1xuICAgIGVEaXYuYXBwZW5kQ2hpbGQoZVNwYW4pO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZURpdik7XG4gICAgcmV0dXJuIGVEaXY7XG59XG5cbmNvbnN0IHF1ZXN0aW9uX2Rlc2lnbl9jbGFzczogc3RyaW5nID0gXCJzdmRfcXVlc3Rpb24gd2VsbCB3ZWxsLXNtIHN2ZF9xX2Rlc2lnbl9ib3JkZXJcIjtcbmNvbnN0IHBhbmVsX2Rlc2lnbl9jbGFzczogc3RyaW5nID0gXCJzdmRfcXVlc3Rpb24gd2VsbCB3ZWxsLXNtIHN2ZF9xX2Rlc2lnbl9ib3JkZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25EZXNpZ25JdGVtKG9uQ2xpY2s6IGFueSwgdGV4dDogc3RyaW5nKTogSFRNTExJRWxlbWVudCB7XG4gICAgdmFyIHJlcyA9IDxIVE1MTElFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBidG4ub25jbGljayA9IG9uQ2xpY2s7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiO1xuICAgIHJlcy5hcHBlbmRDaGlsZChidG4pO1xuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRBZGRvbnMoZGF0YTogYW55LCBpc1BhbmVsOiBib29sZWFuKTogSFRNTEVsZW1lbnQge1xuICAgIHZhciBtYWluOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc05hbWUgPSBcInN2ZF9xdWVzdGlvbl9tZW51IGJ0bi1ncm91cFwiO1xuICAgIG1haW5bXCJyb2xlXCJdID0gXCJncm91cFwiO1xuICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgIGJ0bi14c1wiO1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkgeyBkYXRhLmVkaXRRdWVzdGlvbkNsaWNrKCk7fTtcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7IC8vVE9ET1xuICAgIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5ICBidG4teHMgZHJvcGRvd24tdG9nZ2xlXCI7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwiZHJvcGRvd25cIik7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtaGFzcG9wdXBcIiwgXCJ0cnVlXCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsXCI7XG4gICAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB2YXIgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuY2xhc3NOYW1lID0gXCJkcm9wZG93bi1tZW51XCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY3JlYXRlUXVlc3Rpb25EZXNpZ25JdGVtKGRhdGEuY29weVF1ZXN0aW9uQ2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuYWRkVG9Ub29sYm94JykpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVRdWVzdGlvbkRlc2lnbkl0ZW0oZGF0YS5mYXN0Q29weVF1ZXN0aW9uQ2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuY29weScpKSk7XG4gICAgdmFyIGRlbGV0ZUxvY2FsZU5hbWUgPSBpc1BhbmVsID8gJ3N1cnZleS5kZWxldGVQYW5lbCcgOiAnc3VydmV5LmRlbGV0ZVF1ZXN0aW9uJztcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVRdWVzdGlvbkRlc2lnbkl0ZW0oZGF0YS5kZWxldGVDdXJyZW50T2JqZWN0Q2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKGRlbGV0ZUxvY2FsZU5hbWUpKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbi8vdmFyIGxhc3RFbGVtZW50T25DbGljazogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG5mdW5jdGlvbiBlbGVtZW50T25BZnRlclJlbmRlcmluZyhlbDogYW55LCBzZWxmOiBhbnksIGNsYXNzTmFtZTogc3RyaW5nLCBpc1BhbmVsOiBib29sZWFuLCBkaXNhYmxlOiBib29sZWFuKSB7XG4gICAgc2VsZi5yZW5kZXJlZEVsZW1lbnQgPSBlbDtcbiAgICB2YXIgbmV3Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgaWYoc2VsZi5rb0lzU2VsZWN0ZWQoKSkgbmV3Q2xhc3MgKz0gXCIgc3ZkX3Ffc2VsZWN0ZWRcIjtcbiAgICBcbiAgICBlbC5jbGFzc05hbWUgPSBuZXdDbGFzcztcbiAgICBlbC5zdHlsZS5vcGFjaXR5ID0gc2VsZi5rb0lzRHJhZ2dpbmcoKSA/IDAuNCA6IDE7XG4gICAgZWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBlbC5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSl7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZiwgdHJ1ZSk7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyb3AgPSBmdW5jdGlvbihlKXsgXG4gICAgICAgIGlmKCFlW1wibWFya0V2ZW50XCJdKSB7XG4gICAgICAgICAgICBlW1wibWFya0V2ZW50XCJdID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuZHJhZ0Ryb3BIZWxwZXIoKS5kb0Ryb3AoZSk7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uIChlKSB7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRyYWdEcm9wSGVscGVyKCkuc3RhcnREcmFnUXVlc3Rpb24oZSwgc2VsZik7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyYWdlbmQgPSBmdW5jdGlvbiAoZSkgeyBcbiAgICAgICAgc2VsZi5kcmFnRHJvcEhlbHBlcigpLmVuZCgpOyBcbiAgICB9O1xuICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRcIl0gPSBzZWxmOyBcbiAgICAgICAgfVxuICAgIH07XG4gICAgZWwub25rZXlkb3duID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLndpdGNoID09IDQ2KSBzZWxmLmRhdGEuZGVsZXRlQ3VycmVudE9iamVjdENsaWNrKCk7IFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZGlzYWJsZSkge1xuICAgICAgICB2YXIgY2hpbGRzID0gZWwuY2hpbGROb2RlcztcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkc1tpXS5zdHlsZSkgY2hpbGRzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxmLmFkZG9uc0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50QWRkb25zKHNlbGYuZGF0YSwgaXNQYW5lbCk7XG4gICAgc2VsZi5hZGRvbnNFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLmtvSXNTZWxlY3RlZCgpID8gXCJcIjogXCJub25lXCI7ICAgIFxuICAgIGVsLmFwcGVuZENoaWxkKHNlbGYuYWRkb25zRWxlbWVudCk7XG59XG5cblN1cnZleS5QYWdlLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFuZWxCYXNlT25DcmVhdGluZyh0aGlzKTtcbn07XG5cblN1cnZleS5QYWdlLnByb3RvdHlwZVtcIm9uQWZ0ZXJSZW5kZXJQYWdlXCJdID0gZnVuY3Rpb24oZWwpIHtcbiAgICBpZighdGhpcy5kYXRhLmlzRGVzaWduTW9kZSkgcmV0dXJuO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZHJhZ0Ryb3BIZWxwZXIgPSB0aGlzLmRhdGFbXCJkcmFnRHJvcEhlbHBlclwiXTtcbiAgICB0aGlzLmRyYWdFbnRlckNvdW50ZXIgPSAwO1xuICAgIGVsLm9uZHJhZ2VudGVyID0gZnVuY3Rpb24gKGUpIHsgXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlcisrOyBcbiAgICB9O1xuICAgIGVsLm9uZHJhZ2xlYXZlID0gZnVuY3Rpb24gKGUpIHsgXG4gICAgICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlci0tOyBcbiAgICAgICAgaWYgKHNlbGYuZHJhZ0VudGVyQ291bnRlciA9PT0gMCkgXG4gICAgICAgICAgICBkcmFnRHJvcEhlbHBlci5kb0xlYXZlUGFnZShlKTsgXG4gICAgfTtcbiAgICBlbC5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSl7IHJldHVybiBmYWxzZTsgfTtcbiAgICBlbC5vbmRyb3AgPSBmdW5jdGlvbihlKXsgZHJhZ0Ryb3BIZWxwZXIuZG9Ecm9wKGUpOyB9O1xuICAgIGlmKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5lbXB0eUVsZW1lbnQgPSBhZGRFbXB0eVBhbmVsRWxlbWVudChlbCwgZHJhZ0Ryb3BIZWxwZXIsIHNlbGYpO1xuICAgIH1cbn1cblxuU3VydmV5LlBhbmVsLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFuZWxCYXNlT25DcmVhdGluZyh0aGlzKTtcbiAgICBlbGVtZW50T25DcmVhdGluZyh0aGlzLCBwYW5lbF9kZXNpZ25fY2xhc3MpO1xufTtcblxuU3VydmV5LlBhbmVsLnByb3RvdHlwZVtcIm9uQWZ0ZXJSZW5kZXJQYW5lbFwiXSA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYoIXRoaXMuZGF0YS5pc0Rlc2lnbk1vZGUpIHJldHVybjtcbiAgICB2YXIgcm93cyA9IHRoaXMua29Sb3dzKCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5lbXB0eUVsZW1lbnQgPSBhZGRFbXB0eVBhbmVsRWxlbWVudChlbCwgc2VsZi5kcmFnRHJvcEhlbHBlcigpLCBzZWxmKTtcbiAgICB9XG4gICAgZWxlbWVudE9uQWZ0ZXJSZW5kZXJpbmcoZWwsIHRoaXMsIHBhbmVsX2Rlc2lnbl9jbGFzcywgdHJ1ZSwgdGhpcy5rb0lzRHJhZ2dpbmcoKSk7XG59XG5cblN1cnZleS5QYW5lbC5wcm90b3R5cGVbXCJvblNlbGVjdGVkRWxlbWVudENoYW5nZWRcIl0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCh0aGlzLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRWYWx1ZVwiXSA9PSB0aGlzKTtcbn07XG5cblN1cnZleS5RdWVzdGlvbkJhc2UucHJvdG90eXBlW1wib25DcmVhdGluZ1wiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50T25DcmVhdGluZyh0aGlzLCBxdWVzdGlvbl9kZXNpZ25fY2xhc3MpO1xufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvbkFmdGVyUmVuZGVyUXVlc3Rpb25cIl0gPSBmdW5jdGlvbihlbCkge1xuICAgIGlmKCF0aGlzLmRhdGEuaXNEZXNpZ25Nb2RlKSByZXR1cm47XG4gICAgZWxlbWVudE9uQWZ0ZXJSZW5kZXJpbmcoZWwsIHRoaXMsIHF1ZXN0aW9uX2Rlc2lnbl9jbGFzcywgZmFsc2UsIHRydWUpO1xufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvblNlbGVjdGVkRWxlbWVudENoYW5nZWRcIl0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCh0aGlzLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRWYWx1ZVwiXSA9PSB0aGlzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleWpzT2JqZWN0cy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVVuZG9SZWRvIHtcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxVbmRvUmVkb0l0ZW0+O1xuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHB1YmxpYyBrb0NhblVuZG86IGFueTsga29DYW5SZWRvOiBhbnk7XG4gICAgcHVibGljIG1heGltdW1Db3VudDogbnVtYmVyID0gMTA7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5rb0NhblVuZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMua29DYW5VbmRvKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8oZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q3VycmVudChzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IFVuZG9SZWRvSXRlbSgpO1xuICAgICAgICBpdGVtLnN1cnZleUpTT04gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3Qoc3VydmV5KTtcbiAgICAgICAgaXRlbS5zZWxlY3RlZE9iak5hbWUgPSBzZWxlY3RlZE9iak5hbWU7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnJlbW92ZU9sZERhdGEoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xuICAgIH1cbiAgICBwdWJsaWMgdW5kbygpOiBVbmRvUmVkb0l0ZW0ge1xuICAgICAgICBpZiAoIXRoaXMuY2FuVW5kbykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLmRvVW5kb1JlZG8oLTEpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVkbygpOiBVbmRvUmVkb0l0ZW0gIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblJlZG8pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5kb1VuZG9SZWRvKDEpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUNhblVuZG9SZWRvKCkge1xuICAgICAgICB0aGlzLmtvQ2FuVW5kbyh0aGlzLmNhblVuZG8pO1xuICAgICAgICB0aGlzLmtvQ2FuUmVkbyh0aGlzLmNhblJlZG8pO1xuICAgIH1cbiAgICBwcml2YXRlIGRvVW5kb1JlZG8oZEluZGV4OiBudW1iZXIpOiBVbmRvUmVkb0l0ZW0ge1xuICAgICAgICB0aGlzLmluZGV4ICs9IGRJbmRleDtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA+PSAwICYmIHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCA/IHRoaXMuaXRlbXNbdGhpcy5pbmRleF0gOiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhblVuZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID49IDEgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhblJlZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZW1vdmVPbGREYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggLSAxIDwgdGhpcy5tYXhpbXVtQ291bnQpIHJldHVybjtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoMCwgdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLm1heGltdW1Db3VudCAtIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuZG9SZWRvSXRlbSB7XG4gICAgc3VydmV5SlNPTjogYW55O1xuICAgIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91bmRvcmVkby50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleU9iamVjdEVkaXRvcn0gZnJvbSBcIi4vb2JqZWN0RWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVBhZ2VzRWRpdG9yfSBmcm9tIFwiLi9wYWdlc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlFbWJlZGluZ1dpbmRvd30gZnJvbSBcIi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0c30gZnJvbSBcIi4vc3VydmV5T2JqZWN0c1wiO1xuaW1wb3J0IHtTdXJ2ZXlWZXJic30gZnJvbSBcIi4vb2JqZWN0VmVyYnNcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93fSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5SlNPTkVkaXRvcn0gZnJvbSBcIi4vc3VydmV5SlNPTkVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlUZXh0V29ya2VyfSBmcm9tIFwiLi90ZXh0V29ya2VyXCJcbmltcG9ydCB7U3VydmV5VW5kb1JlZG8sIFVuZG9SZWRvSXRlbX0gZnJvbSBcIi4vdW5kb3JlZG9cIjtcbmltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCB7RHJhZ0Ryb3BIZWxwZXJ9IGZyb20gXCIuL2RyYWdkcm9waGVscGVyXCI7XG5pbXBvcnQge1F1ZXN0aW9uVG9vbGJveH0gZnJvbSBcIi4vcXVlc3Rpb25Ub29sYm94XCI7XG5pbXBvcnQge1N1cnZleUpTT041fSBmcm9tIFwiLi9qc29uNVwiO1xudmFyIHRlbXBsYXRlRWRpdG9ySHRtbCA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4vdGVtcGxhdGVzL2VudHJ5Lmh0bWxcIik7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlGb3JEZXNpZ25lcn0gZnJvbSBcIi4vc3VydmV5anNPYmplY3RzXCJcblxuZXhwb3J0IGNsYXNzIFN1cnZleUVkaXRvciB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0TmV3U3VydmV5VGV4dDogc3RyaW5nID0gXCJ7IHBhZ2VzOiBbIHsgbmFtZTogJ3BhZ2UxJ31dIH1cIjtcbiAgICBwcml2YXRlIHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlqczogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlqc0V4YW1wbGU6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBqc29uRWRpdG9yOiBTdXJ2ZXlKU09ORWRpdG9yO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RFZGl0b3I6IFN1cnZleU9iamVjdEVkaXRvcjtcbiAgICBwcml2YXRlIHF1ZXN0aW9uRWRpdG9yV2luZG93OiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvclNob3dXaW5kb3c7XG4gICAgcHJpdmF0ZSBwYWdlc0VkaXRvcjogU3VydmV5UGFnZXNFZGl0b3I7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZzogU3VydmV5RW1iZWRpbmdXaW5kb3c7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlPYmplY3RzOiBTdXJ2ZXlPYmplY3RzO1xuICAgIHByaXZhdGUgdG9vbGJveFZhbHVlOiBRdWVzdGlvblRvb2xib3g7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWZXJiczogU3VydmV5VmVyYnM7XG4gICAgcHJpdmF0ZSB1bmRvUmVkbzogU3VydmV5VW5kb1JlZG87XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5Rm9yRGVzaWduZXI7XG4gICAgcHJpdmF0ZSBzYXZlU3VydmV5RnVuY1ZhbHVlOiAobm86IG51bWJlciwgb25TYXZlQ2FsbGJhY2s6IChubzogbnVtYmVyLCBpc1N1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBhbnk7XG4gICAgcHJpdmF0ZSBzdGF0ZVZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgZHJhZ0Ryb3BIZWxwZXI6IERyYWdEcm9wSGVscGVyID0gbnVsbDtcbiAgICBwcml2YXRlIHNob3dKU09ORWRpdG9yVGFiVmFsdWU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzaG93VGVzdFN1cnZleVRhYlZhbHVlOiBib29sZWFuO1xuICAgIHByaXZhdGUgc2hvd0VtYmVkZWRTdXJ2ZXlUYWJWYWx1ZTogYm9vbGVhbjtcblxuICAgIHB1YmxpYyBzdXJ2ZXlJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgc3VydmV5UG9zdElkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBnZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjazogKGdlbmVyYXRlVmFsaWRKU09OOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgb25DYW5TaG93UHJvcGVydHk6IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uUXVlc3Rpb25BZGRlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25QYW5lbEFkZGVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbk1vZGlmaWVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gICAga29Jc1Nob3dEZXNpZ25lcjogYW55O1xuICAgIGtvVmlld1R5cGU6IGFueTtcbiAgICBrb0NhbkRlbGV0ZU9iamVjdDogYW55O1xuICAgIGtvT2JqZWN0czogYW55OyBrb1NlbGVjdGVkT2JqZWN0OiBhbnk7XG4gICAga29TaG93U2F2ZUJ1dHRvbjogYW55O1xuICAgIGtvR2VuZXJhdGVWYWxpZEpTT046IGFueTsga29TaG93T3B0aW9uczogYW55OyBrb1Rlc3RTdXJ2ZXlXaWR0aDogYW55OyBrb0Rlc2lnbmVySGVpZ2h0OiBhbnk7XG4gICAgc2VsZWN0RGVzaWduZXJDbGljazogYW55OyBzZWxlY3RFZGl0b3JDbGljazogYW55OyBzZWxlY3RUZXN0Q2xpY2s6IGFueTsgc2VsZWN0RW1iZWRDbGljazogYW55O1xuICAgIGdlbmVyYXRlVmFsaWRKU09OQ2xpY2s6IGFueTsgZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljazogYW55O1xuICAgIGRvVW5kb0NsaWNrOiBhbnk7IGRvUmVkb0NsaWNrOiBhbnk7XG4gICAgZGVsZXRlT2JqZWN0Q2xpY2s6IGFueTtcbiAgICBrb1N0YXRlOiBhbnk7XG4gICAgcnVuU3VydmV5Q2xpY2s6IGFueTsgZW1iZWRpbmdTdXJ2ZXlDbGljazogYW55O1xuICAgIHNhdmVCdXR0b25DbGljazogYW55O1xuICAgIGRyYWdnaW5nVG9vbGJveEl0ZW06IGFueTsgY2xpY2tUb29sYm94SXRlbTogYW55O1xuICAgIGRyYWdFbmQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCwgb3B0aW9uczogYW55ID0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMua29TaG93T3B0aW9ucyA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvRGVzaWduZXJIZWlnaHQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5rb0NhbkRlbGV0ZU9iamVjdCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmtvU3RhdGUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29TaG93U2F2ZUJ1dHRvbiA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvVGVzdFN1cnZleVdpZHRoID0ga28ub2JzZXJ2YWJsZShcIjEwMCVcIik7XG4gICAgICAgIHRoaXMuc2F2ZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRvU2F2ZSgpOyB9O1xuICAgICAgICB0aGlzLmtvT2JqZWN0cyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRPYmplY3QgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZE9iamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2VsZWN0ZWRPYmplY3RDaGFuZ2VkKG5ld1ZhbHVlICE9IG51bGwgPyBuZXdWYWx1ZS52YWx1ZSA6IG51bGwpOyB9KTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5vcHRpb25zKSBzZWxmLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTiA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgaWYgKHNlbGYuZ2VuZXJhdGVWYWxpZEpTT05DaGFuZ2VkQ2FsbGJhY2spIHNlbGYuZ2VuZXJhdGVWYWxpZEpTT05DaGFuZ2VkQ2FsbGJhY2sobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzID0gbmV3IFN1cnZleU9iamVjdHModGhpcy5rb09iamVjdHMsIHRoaXMua29TZWxlY3RlZE9iamVjdCk7XG4gICAgICAgIHRoaXMudW5kb1JlZG8gPSBuZXcgU3VydmV5VW5kb1JlZG8oKTtcblxuICAgICAgICB0aGlzLnN1cnZleVZlcmJzID0gbmV3IFN1cnZleVZlcmJzKGZ1bmN0aW9uICgpIHsgc2VsZi5zZXRNb2RpZmllZCgpOyB9KTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yID0gbmV3IFN1cnZleU9iamVjdEVkaXRvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSBmdW5jdGlvbiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5vbkNhblNob3dPYmplY3RQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChvcHRpb25zLnByb3BlcnR5LCBvcHRpb25zLm9iamVjdCwgb3B0aW9ucy5uZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uRWRpdG9yV2luZG93ID0gbmV3IFN1cnZleVByb3BlcnR5RWRpdG9yU2hvd1dpbmRvdygpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uRWRpdG9yV2luZG93Lm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSBmdW5jdGlvbiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5vbkNhblNob3dPYmplY3RQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yID0gbmV3IFN1cnZleVBhZ2VzRWRpdG9yKCgpID0+IHsgc2VsZi5hZGRQYWdlKCk7IH0sIChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4geyBzZWxmLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHBhZ2UpOyB9LFxuICAgICAgICAgICAgKGluZGV4RnJvbTogbnVtYmVyLCBpbmRleFRvOiBudW1iZXIpID0+IHsgc2VsZi5tb3ZlUGFnZShpbmRleEZyb20sIGluZGV4VG8pOyB9LCAocGFnZTogU3VydmV5LlBhZ2UpID0+IHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nID0gbmV3IFN1cnZleUVtYmVkaW5nV2luZG93KCk7XG4gICAgICAgIHRoaXMudG9vbGJveFZhbHVlID0gbmV3IFF1ZXN0aW9uVG9vbGJveCh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnF1ZXN0aW9uVHlwZXMgPyB0aGlzLm9wdGlvbnMucXVlc3Rpb25UeXBlcyA6IG51bGwpO1xuXG4gICAgICAgIHRoaXMua29WaWV3VHlwZSA9IGtvLm9ic2VydmFibGUoXCJkZXNpZ25lclwiKTtcbiAgICAgICAgdGhpcy5rb0lzU2hvd0Rlc2lnbmVyID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5rb1ZpZXdUeXBlKCkgPT0gXCJkZXNpZ25lclwiOyB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3REZXNpZ25lckNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dEZXNpZ25lcigpOyB9O1xuICAgICAgICB0aGlzLnNlbGVjdEVkaXRvckNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dKc29uRWRpdG9yKCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0VGVzdENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dUZXN0U3VydmV5KCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0RW1iZWRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93RW1iZWRFZGl0b3IoKTsgfTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVZhbGlkSlNPTkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvR2VuZXJhdGVWYWxpZEpTT04odHJ1ZSk7IH07XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0dlbmVyYXRlVmFsaWRKU09OKGZhbHNlKTsgfTtcbiAgICAgICAgdGhpcy5ydW5TdXJ2ZXlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93TGl2ZVN1cnZleSgpOyB9O1xuICAgICAgICB0aGlzLmVtYmVkaW5nU3VydmV5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd1N1cnZleUVtYmVkaW5nKCk7IH07XG4gICAgICAgIHRoaXMuZGVsZXRlT2JqZWN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZGVsZXRlQ3VycmVudE9iamVjdCgpOyB9O1xuICAgICAgICB0aGlzLmRyYWdnaW5nVG9vbGJveEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgZSkgeyBzZWxmLmRvRHJhZ2dpbmdUb29sYm94SXRlbShpdGVtLmpzb24sIGUpOyB9O1xuICAgICAgICB0aGlzLmNsaWNrVG9vbGJveEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmRvQ2xpY2tUb29sYm94SXRlbShpdGVtLmpzb24pOyB9O1xuICAgICAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoaXRlbSwgZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyLmVuZCgpOyB9O1xuXG4gICAgICAgIHRoaXMuZG9VbmRvQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9VbmRvUmVkbyhzZWxmLnVuZG9SZWRvLnVuZG8oKSk7IH07XG4gICAgICAgIHRoaXMuZG9SZWRvQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9VbmRvUmVkbyhzZWxmLnVuZG9SZWRvLnJlZG8oKSk7IH07XG5cbiAgICAgICAgdGhpcy5qc29uRWRpdG9yID0gbmV3IFN1cnZleUpTT05FZGl0b3IoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGV4dCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIocmVuZGVyZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zaG93SlNPTkVkaXRvclRhYlZhbHVlID0gb3B0aW9ucyAmJiB0eXBlb2YgKG9wdGlvbnMuc2hvd0pTT05FZGl0b3JUYWIpICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2hvd0pTT05FZGl0b3JUYWIgOiB0cnVlO1xuICAgICAgICB0aGlzLnNob3dUZXN0U3VydmV5VGFiVmFsdWUgPSBvcHRpb25zICYmIHR5cGVvZiAob3B0aW9ucy5zaG93VGVzdFN1cnZleVRhYikgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5zaG93VGVzdFN1cnZleVRhYiA6IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWJWYWx1ZSA9IG9wdGlvbnMgJiYgdHlwZW9mIChvcHRpb25zLnNob3dFbWJlZGVkU3VydmV5VGFiKSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnNob3dFbWJlZGVkU3VydmV5VGFiIDogZmFsc2U7XG4gICAgICAgIHRoaXMua29TaG93T3B0aW9ucyhvcHRpb25zICYmIHR5cGVvZiAob3B0aW9ucy5zaG93T3B0aW9ucykgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5zaG93T3B0aW9ucyA6IGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pO1xuICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuZGVzaWduZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua29EZXNpZ25lckhlaWdodChvcHRpb25zLmRlc2lnbmVySGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMub2JqZWN0c0ludGVuZCkge1xuICAgICAgICAgICAgU3VydmV5T2JqZWN0cy5pbnRlbmQgPSBvcHRpb25zLm9iamVjdHNJbnRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0Rlc2lnbmVySGVpZ2h0KClcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IpIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5Rm9yRGVzaWduZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHJlbmRlcihlbGVtZW50OiBhbnkgPSBudWxsLCBvcHRpb25zOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IHRoaXMucmVuZGVyZWRFbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZUVkaXRvckh0bWw7XG4gICAgICAgIHNlbGYuYXBwbHlCaW5kaW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkU3VydmV5KHN1cnZleUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBuZXcgU3VydmV5LmR4U3VydmV5U2VydmljZSgpLmxvYWRTdXJ2ZXkoc3VydmV5SWQsIGZ1bmN0aW9uIChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi50ZXh0ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMua29Jc1Nob3dEZXNpZ25lcigpKSByZXR1cm4gdGhpcy5nZXRTdXJ2ZXlUZXh0RnJvbURlc2lnbmVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmpzb25FZGl0b3IudGV4dDtcbiAgICB9XG4gICAgcHVibGljIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHRleHRXb3JrZXIgPSBuZXcgU3VydmV5VGV4dFdvcmtlcih2YWx1ZSk7XG4gICAgICAgIGlmICh0ZXh0V29ya2VyLmlzSnNvbkNvcnJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGV4dFdvcmtlci5zdXJ2ZXkpKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rlc2lnbmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuZG9SZWRvQ3VycmVudFN0YXRlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRUZXh0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZWRpdG9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdG9vbGJveCgpOiBRdWVzdGlvblRvb2xib3ggeyByZXR1cm4gdGhpcy50b29sYm94VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGN1c3RvbVRvb2xib3hRdWVzdGlvbk1heENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLnRvb2xib3guY29waWVkSXRlbU1heENvdW50OyB9XG4gICAgcHVibGljIHNldCBjdXN0b21Ub29sYm94UXVlc3Rpb25NYXhDb3VudCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMudG9vbGJveC5jb3BpZWRJdGVtTWF4Q291bnQgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc3RhdGVWYWx1ZTsgfVxuICAgIHByb3RlY3RlZCBzZXRTdGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmtvU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHNhdmVObzogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgZG9TYXZlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFwic2F2aW5nXCIpO1xuICAgICAgICBpZiAodGhpcy5zYXZlU3VydmV5RnVuYykge1xuICAgICAgICAgICAgdGhpcy5zYXZlTm8rKztcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN1cnZleUZ1bmModGhpcy5zYXZlTm8sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9TYXZlQ2FsbGJhY2sobm86IG51bWJlciwgaXNTdWNjZXNzOiBib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoXCJzYXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2F2ZU5vID09IG5vKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWNjZXNzKSBzZWxmLnNldFN0YXRlKFwic2F2ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgVE9ET1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldE1vZGlmaWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFwibW9kaWZpZWRcIik7XG4gICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoKTtcbiAgICAgICAgdGhpcy5vbk1vZGlmaWVkLmZpcmUodGhpcywgbnVsbCk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoY2xlYXJTdGF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjbGVhclN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVuZG9SZWRvLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbE9iaiA9IHRoaXMua29TZWxlY3RlZE9iamVjdCgpID8gdGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLnVuZG9SZWRvLnNldEN1cnJlbnQodGhpcy5zdXJ2ZXlWYWx1ZSwgc2VsT2JqID8gc2VsT2JqLm5hbWUgOiBudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzYXZlU3VydmV5RnVuYygpIHsgcmV0dXJuIHRoaXMuc2F2ZVN1cnZleUZ1bmNWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2F2ZVN1cnZleUZ1bmModmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnNhdmVTdXJ2ZXlGdW5jVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5rb1Nob3dTYXZlQnV0dG9uKHZhbHVlICE9IG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNob3dPcHRpb25zKCkgeyByZXR1cm4gdGhpcy5rb1Nob3dPcHRpb25zKCk7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dPcHRpb25zKHZhbHVlOiBib29sZWFuKSB7IHRoaXMua29TaG93T3B0aW9ucyh2YWx1ZSk7IH1cbiAgICBwdWJsaWMgZ2V0IHNob3dKU09ORWRpdG9yVGFiKCkgeyByZXR1cm4gdGhpcy5zaG93SlNPTkVkaXRvclRhYlZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzaG93SlNPTkVkaXRvclRhYih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLnNob3dKU09ORWRpdG9yVGFiVmFsdWUgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgc2hvd1Rlc3RTdXJ2ZXlUYWIoKSB7IHJldHVybiB0aGlzLnNob3dUZXN0U3VydmV5VGFiVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dUZXN0U3VydmV5VGFiKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuc2hvd1Rlc3RTdXJ2ZXlUYWJWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBzaG93RW1iZWRlZFN1cnZleVRhYigpIHsgcmV0dXJuIHRoaXMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWJWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd0VtYmVkZWRTdXJ2ZXlUYWIodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5zaG93RW1iZWRlZFN1cnZleVRhYlZhbHVlID0gdmFsdWU7IH1cblxuICAgIHByb3RlY3RlZCBvbkNhblNob3dPYmplY3RQcm9wZXJ0eShvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IG9iajogb2JqZWN0LCBwcm9wZXJ0eTogcHJvcGVydHksIGNhblNob3c6IHRydWUgfTtcbiAgICAgICAgdGhpcy5vbkNhblNob3dQcm9wZXJ0eS5maXJlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jYW5TaG93O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VGV4dFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLnRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGFkZFBhZ2UoKSB7XG4gICAgICAgIHZhciBuYW1lID0gU3VydmV5SGVscGVyLmdldE5ld1BhZ2VOYW1lKHRoaXMuc3VydmV5LnBhZ2VzKTtcbiAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXlWYWx1ZS5hZGROZXdQYWdlKG5hbWUpO1xuICAgICAgICB0aGlzLmFkZFBhZ2VUb1VJKHBhZ2UpO1xuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRMb2NTdHJpbmcoc3RyOiBzdHJpbmcpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoc3RyKTsgfVxuICAgIHByaXZhdGUgbW92ZVBhZ2UoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikge1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5wYWdlc1tpbmRleEZyb21dO1xuICAgICAgICB0aGlzLnN1cnZleS5wYWdlcy5zcGxpY2UoaW5kZXhGcm9tLCAxKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucGFnZXMuc3BsaWNlKGluZGV4VG8sIDAsIHBhZ2UpO1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHBhZ2UpXG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRQYWdlVG9VSShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5VmFsdWU7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5hZGRQYWdlKHBhZ2UpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvT25RdWVzdGlvbkFkZGVkKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwYXJlbnRQYW5lbDogYW55KSB7XG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmdldFBhZ2VCeUVsZW1lbnQocXVlc3Rpb24pO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBwYWdlOiBwYWdlIH07XG4gICAgICAgIHRoaXMub25RdWVzdGlvbkFkZGVkLmZpcmUodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5hZGRFbGVtZW50KHF1ZXN0aW9uLCBwYXJlbnRQYW5lbCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvT25FbGVtZW50UmVtb3ZlZChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMucmVtb3ZlT2JqZWN0KHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9PblBhbmVsQWRkZWQocGFuZWw6IFN1cnZleS5QYW5lbCwgcGFyZW50UGFuZWw6IGFueSkge1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5nZXRQYWdlQnlFbGVtZW50KHBhbmVsKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHBhbmVsOiBwYW5lbCwgcGFnZTogcGFnZSB9O1xuICAgICAgICB0aGlzLm9uUGFuZWxBZGRlZC5maXJlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuYWRkRWxlbWVudChwYW5lbCwgcGFyZW50UGFuZWwpO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvYmo6IGFueSwgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICB2YXIgaXNEZWZhdWx0ID0gcHJvcGVydHkuaXNEZWZhdWx0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBvYmpbcHJvcGVydHkubmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lm5hbWUgPT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5uYW1lQ2hhbmdlZChvYmopO1xuICAgICAgICAgICAgaWYgKFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5jaGFuZ2VOYW1lKDxTdXJ2ZXkuUGFnZT5vYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9VbmRvUmVkbyhpdGVtOiBVbmRvUmVkb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5pbml0U3VydmV5KGl0ZW0uc3VydmV5SlNPTik7XG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkT2JqTmFtZSkge1xuICAgICAgICAgICAgdmFyIHNlbE9iaiA9IHRoaXMuZmluZE9iakJ5TmFtZShpdGVtLnNlbGVjdGVkT2JqTmFtZSk7XG4gICAgICAgICAgICBpZiAoc2VsT2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnNlbGVjdE9iamVjdChzZWxPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy51bmRvUmVkby5rb0NhblVuZG8oKSA/IFwibW9kaWZpZWRcIiA6IFwic2F2ZWRcIik7XG4gICAgfVxuICAgIHByaXZhdGUgZmluZE9iakJ5TmFtZShuYW1lOiBzdHJpbmcpOiBTdXJ2ZXkuQmFzZSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHBhZ2UpIHJldHVybiBwYWdlO1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSA8U3VydmV5LlF1ZXN0aW9uQmFzZT50aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSByZXR1cm4gcXVlc3Rpb247XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIGNhblN3aXRjaFZpZXdUeXBlKG5ld1R5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAobmV3VHlwZSAmJiB0aGlzLmtvVmlld1R5cGUoKSA9PSBuZXdUeXBlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmtvVmlld1R5cGUoKSA9PSBcImRlc2lnbmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvci50ZXh0ID0gdGhpcy5nZXRTdXJ2ZXlUZXh0RnJvbURlc2lnbmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua29WaWV3VHlwZSgpICE9IFwiZWRpdG9yXCIpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMuanNvbkVkaXRvci5pc0pzb25Db3JyZWN0KSB7XG4gICAgICAgICAgICBhbGVydCh0aGlzLmdldExvY1N0cmluZyhcImVkLmNvcnJlY3RKU09OXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkobmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMuanNvbkVkaXRvci5zdXJ2ZXkpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93RGVzaWduZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShcImRlc2lnbmVyXCIpKSByZXR1cm47XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcImRlc2lnbmVyXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd0pzb25FZGl0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvVmlld1R5cGUoKSA9PSBcImVkaXRvclwiKSByZXR1cm47XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5zaG93KHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpKTtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZWRpdG9yXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd1Rlc3RTdXJ2ZXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShudWxsKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNob3dMaXZlU3VydmV5KCk7XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcInRlc3RcIik7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93RW1iZWRFZGl0b3IoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShcImVtYmVkXCIpKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2hvd1N1cnZleUVtYmVkaW5nKCk7XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcImVtYmVkXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFN1cnZleVRleHRGcm9tRGVzaWduZXIoKSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMuc3VydmV5KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAxKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlKU09ONSgpLnN0cmluZ2lmeShqc29uLCBudWxsLCAxKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdENoYW5nZWQob2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgICAgICB2YXIgY2FuRGVsZXRlT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2VsZWN0ZWRPYmplY3QgPSBvYmo7XG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMub2JqID0gb2JqO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UgPSA8U3VydmV5LlBhZ2U+b2JqO1xuICAgICAgICAgICAgY2FuRGVsZXRlT2JqZWN0ID0gdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoID4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlF1ZXN0aW9uIHx8IG9ialR5cGUgPT0gT2JqVHlwZS5QYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuc2VsZWN0ZWRFbGVtZW50ID0gb2JqO1xuICAgICAgICAgICAgY2FuRGVsZXRlT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGhpcy5zdXJ2ZXkuc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0NhbkRlbGV0ZU9iamVjdChjYW5EZWxldGVPYmplY3QpO1xuICAgIH1cbiAgICBwcml2YXRlIGFwcGx5QmluZGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRFbGVtZW50ID09IG51bGwpIHJldHVybjtcbiAgICAgICAga28uY2xlYW5Ob2RlKHRoaXMucmVuZGVyZWRFbGVtZW50KTtcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLCB0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIHRoaXMuc3VydmV5anMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzXCIpO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlqcykge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlqcy5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gNDYpIHNlbGYuZGVsZXRlUXVlc3Rpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDM4IHx8IGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdFF1ZXN0aW9uKGUua2V5Q29kZSA9PSAzOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleWpzRXhhbXBsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VydmV5anNFeGFtcGxlXCIpO1xuXG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5SlNPTjUoKS5wYXJzZShTdXJ2ZXlFZGl0b3IuZGVmYXVsdE5ld1N1cnZleVRleHQpKTtcbiAgICAgICAgdGhpcy5zZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZSh0cnVlKTtcblxuICAgICAgICB0aGlzLmpzb25FZGl0b3IuaW5pdCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRTdXJ2ZXkoanNvbjogYW55KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IG5ldyBTdXJ2ZXlGb3JEZXNpZ25lcigpO1xuICAgICAgICB0aGlzLmRyYWdEcm9wSGVscGVyID0gbmV3IERyYWdEcm9wSGVscGVyKDxTdXJ2ZXkuSVN1cnZleT50aGlzLnN1cnZleSwgZnVuY3Rpb24gKCkgeyBzZWxmLnNldE1vZGlmaWVkKCkgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJzZXRKc29uT2JqZWN0XCJdKGpzb24pOyAvL1RPRE9cbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUuaXNFbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcInNldEpzb25PYmplY3RcIl0obmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7IC8vVE9ET1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJkcmFnRHJvcEhlbHBlclwiXSA9IHRoaXMuZHJhZ0Ryb3BIZWxwZXI7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcih0aGlzLnN1cnZleWpzKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnNldFNlbGVjdGVkUGFnZSg8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xuICAgICAgICB0aGlzLnN1cnZleVZlcmJzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHNlbmRlcltcInNlbGVjdGVkRWxlbWVudFwiXSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uRWRpdFF1ZXN0aW9uLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuc2hvd1F1ZXN0aW9uRWRpdG9yKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25Db3B5UXVlc3Rpb24uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5hZGRDdXN0b21Ub29sYm94UXVlc3Rpb24oc2VsZi5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vbkZhc3RDb3B5UXVlc3Rpb24uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5mYXN0Q29weVF1ZXN0aW9uKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25EZWxldGVDdXJyZW50T2JqZWN0LmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZGVsZXRlQ3VycmVudE9iamVjdCgpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblByb2Nlc3NIdG1sLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IG9wdGlvbnMuaHRtbCA9IHNlbGYucHJvY2Vzc0h0bWwob3B0aW9ucy5odG1sKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25DdXJyZW50UGFnZUNoYW5nZWQuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5wYWdlc0VkaXRvci5zZXRTZWxlY3RlZFBhZ2UoPFN1cnZleS5QYWdlPnNlbmRlci5jdXJyZW50UGFnZSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUXVlc3Rpb25BZGRlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLmRvT25RdWVzdGlvbkFkZGVkKG9wdGlvbnMucXVlc3Rpb24sIG9wdGlvbnMucGFyZW50UGFuZWwpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblF1ZXN0aW9uUmVtb3ZlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLmRvT25FbGVtZW50UmVtb3ZlZChvcHRpb25zLnF1ZXN0aW9uKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25QYW5lbEFkZGVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PblBhbmVsQWRkZWQob3B0aW9ucy5wYW5lbCwgb3B0aW9ucy5wYXJlbnRQYW5lbCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUGFuZWxSZW1vdmVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PbkVsZW1lbnRSZW1vdmVkKG9wdGlvbnMucGFuZWwpOyB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWh0bWwpIHJldHVybiBodG1sO1xuICAgICAgICB2YXIgc2NyaXB0UmVnRXggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcbiAgICAgICAgd2hpbGUgKHNjcmlwdFJlZ0V4LnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2Uoc2NyaXB0UmVnRXgsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBwcml2YXRlIGRvRHJhZ2dpbmdUb29sYm94SXRlbShqc29uOiBhbnksIGUpIHtcbiAgICAgICAgdGhpcy5kcmFnRHJvcEhlbHBlci5zdGFydERyYWdUb29sYm94SXRlbShlLCB0aGlzLmdldE5ld05hbWUoanNvbltcInR5cGVcIl0pLCBqc29uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb0NsaWNrVG9vbGJveEl0ZW0oanNvbjogYW55KSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXROZXdOYW1lKGpzb25bXCJ0eXBlXCJdKTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoanNvbltcInR5cGVcIl0pO1xuICAgICAgICBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b09iamVjdChqc29uLCBxdWVzdGlvbik7XG4gICAgICAgIHF1ZXN0aW9uLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRvQ2xpY2tRdWVzdGlvbkNvcmUocXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5ld05hbWUodHlwZTogc3RyaW5nKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0eXBlID09IFwicGFuZWxcIiA/IHRoaXMuZ2V0TmV3UGFuZWxOYW1lKCkgOiB0aGlzLmdldE5ld1F1ZXN0aW9uTmFtZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5ld1F1ZXN0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld1F1ZXN0aW9uTmFtZSh0aGlzLnN1cnZleS5nZXRBbGxRdWVzdGlvbnMoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmV3UGFuZWxOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UGFuZWxOYW1lKHRoaXMuZ2V0QWxsUGFuZWxzKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFsbFBhbmVscygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBhbmVscyh0aGlzLnN1cnZleS5wYWdlc1tpXSwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGFkZFBhbmVscyhwYW5lbDogYW55LCByZXN1bHQ6IEFycmF5PGFueT4pIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBhbmVsLmVsZW1lbnRzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgaWYoIXBhbmVsLmVsZW1lbnRzW2ldLmlzUGFuZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFuZWwuZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgdGhpcy5hZGRQYW5lbHMocGFuZWwuZWxlbWVudHNbaV0sIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkb0NsaWNrUXVlc3Rpb25Db3JlKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2U7XG4gICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkuc2VsZWN0ZWRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0aGlzLnN1cnZleS5zZWxlY3RlZEVsZW1lbnQpICsgMTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlLmFkZFF1ZXN0aW9uKHF1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIuc2Nyb2xsVG9FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHF1ZXN0aW9uLmlkKSk7XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVRdWVzdGlvbigpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1cnJlbnRPYmplY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNlbGVjdFF1ZXN0aW9uKGlzVXA6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0TmV4dFF1ZXN0aW9uKGlzVXApXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZTtcbiAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlF1ZXN0aW9uID8gPFN1cnZleS5RdWVzdGlvbkJhc2U+KG9iaik6IG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgZGVsZXRlQ3VycmVudE9iamVjdCgpIHtcbiAgICAgICAgdGhpcy5kZWxldGVPYmplY3QodGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd1F1ZXN0aW9uRWRpdG9yKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVzdGlvbkVkaXRvcldpbmRvdy5zaG93KHF1ZXN0aW9uLCBmdW5jdGlvbiAocXVlc3Rpb24pIHsgc2VsZi5vblF1ZXN0aW9uRWRpdG9yQ2hhbmdlZChxdWVzdGlvbik7IH0pO1xuICAgIH1cbiAgICBwcml2YXRlIG9uUXVlc3Rpb25FZGl0b3JDaGFuZ2VkKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5uYW1lQ2hhbmdlZChxdWVzdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IuT2JqZWN0Q2hhbmdlZCgpO1xuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkQ3VzdG9tVG9vbGJveFF1ZXN0aW9uKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMudG9vbGJveC5hZGRDb3BpZWRJdGVtKHF1ZXN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFzdENvcHlRdWVzdGlvbihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChxdWVzdGlvbik7XG4gICAgICAgIGpzb24udHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgICAgdGhpcy5kb0NsaWNrVG9vbGJveEl0ZW0oIGpzb24gKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZU9iamVjdChvYmo6IGFueSkge1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMucmVtb3ZlT2JqZWN0KG9iaik7XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5yZW1vdmVQYWdlKG9iaik7XG4gICAgICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnJlbW92ZVBhZ2Uob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLnJlbW92ZUVsZW1lbnQob2JqKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dMaXZlU3VydmV5KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3VydmV5anNFeGFtcGxlKSByZXR1cm47XG4gICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRTdXJ2ZXlKU09OKCk7XG4gICAgICAgIGlmIChqc29uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvb2tpZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUganNvbi5jb29raWVOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuU3VydmV5KGpzb24pO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZVJlc3VsdHNcIik7XG4gICAgICAgICAgICB2YXIgc3VydmV5anNFeGFtcGxlcmVSdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZXJlUnVuXCIpO1xuICAgICAgICAgICAgaWYgKHN1cnZleWpzRXhhbXBsZVJlc3VsdHMpIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChzdXJ2ZXlqc0V4YW1wbGVyZVJ1bikgc3VydmV5anNFeGFtcGxlcmVSdW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgc3VydmV5Lm9uQ29tcGxldGUuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXkpID0+IHsgaWYgKHN1cnZleWpzRXhhbXBsZVJlc3VsdHMpIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMuaW5uZXJIVE1MID0gdGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5zdXJ2ZXlSZXN1bHRzXCIpICsgSlNPTi5zdHJpbmdpZnkoc3VydmV5LmRhdGEpOyBpZiAoc3VydmV5anNFeGFtcGxlcmVSdW4pIHN1cnZleWpzRXhhbXBsZXJlUnVuLnN0eWxlLmRpc3BsYXkgPSBcIlwiOyB9KTtcbiAgICAgICAgICAgIHN1cnZleS5yZW5kZXIodGhpcy5zdXJ2ZXlqc0V4YW1wbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlqc0V4YW1wbGUuaW5uZXJIVE1MID0gdGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5jb3JyZWN0SlNPTlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNob3dTdXJ2ZXlFbWJlZGluZygpIHtcbiAgICAgICAgdmFyIGpzb24gPSB0aGlzLmdldFN1cnZleUpTT04oKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5qc29uID0ganNvbjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zdXJ2ZXlJZCA9IHRoaXMuc3VydmV5SWQ7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuc3VydmV5UG9zdElkID0gdGhpcy5zdXJ2ZXlQb3N0SWQ7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuZ2VuZXJhdGVWYWxpZEpTT04gPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLnNob3coKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTdXJ2ZXlKU09OKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLmtvSXNTaG93RGVzaWduZXIoKSkgcmV0dXJuIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnN1cnZleSk7XG4gICAgICAgIGlmICh0aGlzLmpzb25FZGl0b3IuaXNKc29uQ29ycmVjdCkgcmV0dXJuIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLmpzb25FZGl0b3Iuc3VydmV5KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlQW5ub3RhdGlvbnModGV4dDogc3RyaW5nLCBlcnJvcnM6IGFueVtdKTogQWNlQWpheC5Bbm5vdGF0aW9uW10ge1xuICAgICAgICB2YXIgYW5ub3RhdGlvbnMgPSBuZXcgQXJyYXk8QWNlQWpheC5Bbm5vdGF0aW9uPigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzW2ldO1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb246IEFjZUFqYXguQW5ub3RhdGlvbiA9IHsgcm93OiBlcnJvci5wb3NpdGlvbi5zdGFydC5yb3csIGNvbHVtbjogZXJyb3IucG9zaXRpb24uc3RhcnQuY29sdW1uLCB0ZXh0OiBlcnJvci50ZXh0LCB0eXBlOiBcImVycm9yXCIgfTtcbiAgICAgICAgICAgIGFubm90YXRpb25zLnB1c2goYW5ub3RhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xuICAgIH1cbn1cblxuU3VydmV5LlN1cnZleS5jc3NUeXBlID0gXCJib290c3RyYXBcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yLnRzIiwiaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIlxuXG52YXIgZnJlbmNoVHJhbnNsYXRpb24gPSB7XG4gIC8vU3RyaW5ncyBpbiBFZGl0b3JcbiAgZWQ6IHtcbiAgICBhZGROZXdQYWdlOiAnQWpvdXRlciB1bmUgcGFnZScsXG4gICAgY29ycmVjdEpTT046ICdTVlAgY29ycmlnZXIgbGUganNvbicsXG4gICAgZGVsU2VsT2JqZWN0OiAnU3VwcHJpbWVyIGxcXCdvYmpldCBzw6lsZWN0aW9ubsOpJyxcbiAgICBkZXNpZ25lcjogJ0Rlc2lnbmVyIGRlIHF1ZXN0aW9ubmFpcmUnLFxuICAgIGVtYmVkU3VydmV5OiAnSW50w6lncmVyIGxlIHF1ZXN0aW9ubmFpcmUnLFxuICAgIGdlbmVyYXRlUmVhZGFibGVKU09OOiAnR8OpbsOpcmVyIHVuIEpTT04gbGlzaWJsZScsXG4gICAgZ2VuZXJhdGVWYWxpZEpTT046ICdHw6luw6lyZXIgdW4gSlNPTiB2YWxpZGUnLFxuICAgIGpzb25FZGl0b3I6ICdFZGl0ZXIgSlNPTicsXG4gICAgbmV3UGFnZU5hbWU6ICdwYWdlJyxcbiAgICBuZXdRdWVzdGlvbk5hbWU6ICdxdWVzdGlvbicsXG4gICAgb3B0aW9uczogJ09wdGlvbnMnLFxuICAgIHJlZG86ICdSw6l0YWJsaXInLFxuICAgIHNhdmVTdXJ2ZXk6ICdTYXV2ZWdhcmRlciBsZSBxdWVzdGlvbm5haXJlJyxcbiAgICBzdXJ2ZXlSZXN1bHRzOiAnUsOpc3VsdGF0IGR1IHF1ZXN0aW9ubmFpcmU6ICcsXG4gICAgdGVzdFN1cnZleTogJ1Rlc3RlciBsZSBxdWVzdGlvbm5haXJlJyxcbiAgICB0ZXN0U3VydmV5QWdhaW46ICdUZXN0ZXIgw6Agbm91dmVhdSBsZSBxdWVzdGlvbm5haXJlJyxcbiAgICB0ZXN0U3VydmV5V2lkdGg6ICdMYXJnZXVyIGR1IHF1ZXN0aW9ubmFpcmU6ICcsXG4gICAgdG9vbGJveDogJ0JvaXRlIMOgIG91dGlscycsXG4gICAgdW5kbzogJ0FubnVsZXInXG4gIH0sXG4gIC8vRW1iZWQgd2luZG93XG4gIGV3OiB7XG4gICAgYW5ndWxhcjogJ1V0aWxpc2VyIGxhIHZlcnNpb24gQW5ndWxhcicsXG4gICAgYm9vdHN0cmFwOiAnUG91ciBCb290c3RyYXAgZnJhbWV3b3JrJyxcbiAgICBqcXVlcnk6ICdVdGlsaXNlciBsYSB2ZXJzaW9uIGpRdWVyeScsXG4gICAga25vY2tvdXQ6ICdVdGlsaXNlciBsYSB2ZXJzaW9uIEtub2Nrb3V0JyxcbiAgICBsb2FkRnJvbVNlcnZlcjogJ0NoYXJnZXIgbGUgSlNPTiBkdSBxdWVzdGlvbm5haXJlIGRlcHVpcyB1biBzZXJ2ZXVyJyxcbiAgICByZWFjdDogJ1V0aWxpc2VyIGxhIHZlcnNpb24gUmVhY3QnLFxuICAgIHNob3dJbldpbmRvdzogJ0FmZmljaGVyIGxlIHF1ZXN0aW9ubmFpcmUgZGFucyB1bmUgZmVuw6p0cmUnLFxuICAgIHNob3dPblBhZ2U6ICdBZmZpY2hlciBsZSBxdWVzdGlvbm5haXJlIGRhbnMgdW5lIHBhZ2UnLFxuICAgIHN0YW5kYXJkOiAnUGFzIGRlIGJvb3RzdHJhcCcsXG4gICAgdGl0bGVIdG1sOiAnSFRNTCcsXG4gICAgdGl0bGVKYXZhU2NyaXB0OiAnSmF2YVNjcmlwdCcsXG4gICAgdGl0bGVTY3JpcHQ6ICdTY3JpcHRzIGV0IHN0eWxlcycsXG4gICAgdnVlOiAnVXRpbGlzZXIgbGEgdmVyc2lvbiBWdWUnXG4gIH0sXG4gIC8vT3BlcmF0b3JzXG4gIG9wOiB7XG4gICAgY29udGFpbnM6ICdjb250aWVudCcsXG4gICAgZW1wdHk6ICdlc3QgdmlkZScsXG4gICAgZXF1YWw6ICfDqWdhbCcsXG4gICAgZ3JlYXRlcjogJ3N1cMOpcmlldXInLFxuICAgIGdyZWF0ZXJvcmVxdWFsOiAnc3Vww6lyaWV1ciBvdSDDqWdhbCcsXG4gICAgbGVzczogJ3BsdXMgcGV0aXQnLFxuICAgIGxlc3NvcmVxdWFsOiAncGx1cyBwZXRpdCBvdSDDqWdhbCcsXG4gICAgbm90Y29udGFpbnM6ICduZSBjb250aWVudCBwYXMnLFxuICAgIG5vdGVtcHR5OiAnblxcJ2VzdCBwYXMgdmlkZScsXG4gICAgbm90ZXF1YWw6ICduXFwnZXN0IHBhcyDDqWdhbCdcbiAgfSxcbiAgLy9Qcm9wZXJ0aWVzXG4gIHA6IHtcbiAgICBhZGRSb3dUZXh0OidCb3V0b24gYWpvdXRlciB1bmUgbGlnbmUnLFxuICAgIGNlbGxUeXBlOiAnVHlwZSBkZSBjZWxsdWxlJyxcbiAgICBjaG9pY2VzOiAnQ2hvaXgnLFxuICAgIGNob2ljZXNCeVVybDogJ0Nob2l4IHBhciBBUEknLFxuICAgIGNob2ljZXNPcmRlcjogJ09yZHJlIGRlcyBjaG9peCcsXG4gICAgY2xlYXJJbnZpc2libGVWYWx1ZXM6ICdDYWNoZXIgbGVzIHZhbGV1ciBpbnZpc2libGVzJyxcbiAgICBjb2xDb3VudDogJ05vbWJyZSBkZSBjb2xvbm5lcycsXG4gICAgY29sczogJ05vbWJyZSBkZSBjb2xzJyxcbiAgICBjb2x1bW5Db2xDb3VudDogJ05vbWJyZSBkZSBjb2xvbm5lcycsXG4gICAgY29sdW1uTWluV2lkdGg6ICdMYXJnZXVyIG1pbmltYWxlIGRlcyBjb2xvbm5lcycsXG4gICAgY29sdW1uczogJ0NvbG9ubmVzJyxcbiAgICBjb21tZW50VGV4dDogJ0Rlc2NyaXB0aW9uIGNoYW1wIGNvbW1lbnRhaXJlJyxcbiAgICBjb21wbGV0ZVRleHQ6ICdUZXh0ZSBxdWVzdGlvbm5haXJlIGZpbmFsaXPDqScsXG4gICAgY29tcGxldGVkSHRtbDogJ0h0bWwgcXVlc3Rpb25uYWlyZSBmaW5hbGlzw6knLFxuICAgIGNvb2tpZU5hbWU6ICdOb20gZHUgY29va2llJyxcbiAgICBlZGl0OiAnRWRpdGVyJyxcbiAgICBmb2N1c0ZpcnN0UXVlc3Rpb25BdXRvbWF0aWM6ICdGb2N1cyBzdXIgbGEgcHJlbWnDqHJlIHF1ZXN0aW9uIGF1dG9tYXRpcXVlbWVudCcsXG4gICAgZ29OZXh0UGFnZUF1dG9tYXRpYzogJ0FsbGVyIMOgIGxhIHBhZ2Ugc3VpdmFudGUgYXV0b21hdGlxdWVtZW50JyxcbiAgICBoYXNDb21tZW50OiAnQ2hhbXBzIGNvbW1lbnRhaXJlID8nLFxuICAgIGhhc090aGVyOiAnQ2hvaXggYXV0cmUgPycsXG4gICAgaG9yaXpvbnRhbFNjcm9sbDogJ1Njcm9sbCBob3Jpem9udGFsJyxcbiAgICBpbWFnZUhlaWdodDogJ0hhdXRldXIgZGUgbCBcXCdpbWFnZScsXG4gICAgaW1hZ2VXaWR0aDogJ0xhcmdldXIgZGUgbFxcJ2ltYWdlJyxcbiAgICBpbmRlbnQ6ICdJbmRlbnRhdGlvbicsXG4gICAgaW5wdXRUeXBlOiAnVHlwZSBkZSBjaGFtcHMnLFxuICAgIGlzQWxsUm93UmVxdWlyZWQ6ICdUb3V0ZXMgbGVzIGxpZ25lcyBzb250LWVsbGUgb2JsaWdhdG9pcmVzID8nLFxuICAgIGlzUmVxdWlyZWQ6ICdSZXF1aXMgPycsXG4gICAgaXRlbVNpemU6ICdOb21icmUgbWF4aW11bSBkZSBjYXJhY3TDqHJlcycsXG4gICAgaXRlbXM6ICdJdGVtcycsXG4gICAgbG9jYWxlOiAnTGFuZ3VlJyxcbiAgICBtYXhSYXRlRGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBub3RlIG1heGltdW0nLFxuICAgIG1heFNpemU6ICdUYWlsbGUgbWF4aW11bScsXG4gICAgbWluUmF0ZURlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gbm90ZSBtaW5pbXVtJyxcbiAgICBtaW5Sb3dDb3VudDogJ05vbWJyZSBkZSBsaWduZSBtaW5pbWFsJyxcbiAgICBtb2RlOiAnTW9kZSBkXFwnYWZmaWNoYWdlJyxcbiAgICBuYW1lOiAnTm9tJyxcbiAgICBvcHRpb25zQ2FwdGlvbjogJ1RleHRlIHBhciBkw6lmYXV0JyxcbiAgICBvdGhlckVycm9yVGV4dDogJ1RleHRlIEVycmV1ciBjaGFtcHMgYXV0cmUnLFxuICAgIG90aGVyVGV4dDogeyBuYW1lOiAnVGV4dCBhdXRyZScsIHRpdGxlOiAnQ2hhbXAgY29tbWVudGFpcmUgb3UgY2hvaXggYXV0cmUnIH0sXG4gICAgcGFnZU5leHRUZXh0OiAnQm91dG9uIHBhZ2Ugc3VpdmFudGUnLFxuICAgIHBhZ2VQcmV2VGV4dDogJ0JvdXRvbiBwYWdlIHByw6ljw6lkZW50ZScsXG4gICAgcGFnZV90aXRsZTogeyBuYW1lOiAndGl0cmUnLCB0aXRsZTogJ1RpdHJlIGRlIGxhIHBhZ2UnIH0sXG4gICAgcGxhY2VIb2xkZXI6ICdQbGFjZUhvbGRlciAoaW5kaWNlIGRhbnMgbGUgY2hhbXBzKScsXG4gICAgcXVlc3Rpb25TdGFydEluZGV4OiAnSW5kZXggZGUgbnVtw6lyb3RhdGlvbiBkZXMgcXVlc3Rpb24nLFxuICAgIHF1ZXN0aW9uVGl0bGVMb2NhdGlvbjogJ0VtcGxhY2VtZW50IHRpdHJlIHF1ZXN0aW9uJyxcbiAgICBxdWVzdGlvblRpdGxlVGVtcGxhdGU6IHsgbmFtZTogJ1RlbXBsYXRlIGRcXCdhZmZpY2hhZ2UgZGVzIHF1ZXN0aW9uJywgdGl0bGU6ICdFeGVtcGxlOiB7bm99KSB7dGl0bGV9IHtyZXF1aXJlfTonIH0sXG4gICAgcmF0ZVZhbHVlczogJ0JhcsOobWUnLFxuICAgIHJlbW92ZVJvd1RleHQ6ICdCb3V0b24gc3VwcHJpbWVyIHVuZSBsaWduZScsXG4gICAgcmVxdWlyZWRUZXh0OiAnVGV4dGUgcG91ciBsZXMgY2hhbXBzIHJlcXVpcycsXG4gICAgcm93Q291bnQ6J05vbWJyZSBkZSBsaWduZXMnLFxuICAgIHJvd3M6J05vbWJyZSBkZSBsaWduZScsXG4gICAgc2VuZFJlc3VsdE9uUGFnZU5leHQ6ICcnLFxuICAgIHNob3dDb21wbGV0ZWRQYWdlOiAnVm9pciBsYSBwYWdlIGZvcm11bGFpcmUgY29tcGzDqXTDqSA/JyxcbiAgICBzaG93TmF2aWdhdGlvbkJ1dHRvbnM6ICdCb3V0b25zIGRlIG5hdmlnYXRpb24nLFxuICAgIHNob3dQYWdlTnVtYmVyczogJ051bcOpcm90YXRpb24gZGVzIHBhZ2VzJyxcbiAgICBzaG93UGFnZVRpdGxlczogJ1RpdHJlIGRlcyBwYWdlcycsXG4gICAgc2hvd1ByZXZpZXc6ICdWb2lyIGxhIHByw6l2aXN1YWxpc2F0aW9uJyxcbiAgICBzaG93UHJvZ3Jlc3NCYXI6ICdCYXJyZSBkZSBwcm9ncmVzc2lvbicsXG4gICAgc2hvd1F1ZXN0aW9uTnVtYmVyczogJ051bcOpcm90YXRpb24gZGVzIHF1ZXN0aW9ucycsXG4gICAgc2hvd1RpdGxlOiAnQWZmaWNoZXIgbGUgdGl0cmUnLFxuICAgIHNpemU6ICdOb21icmUgbWF4aW11bSBkZSBjYXJhY3TDqHJlcycsXG4gICAgc3RhcnRXaXRoTmV3TGluZTogJ0NvbW1lbmNlciBhdmVjIHVuZSBub3V2ZWxsZSBsaWduZScsXG4gICAgc3RvcmVEYXRhQXNUZXh0OiAnU3RvY2tlciBsZXMgZG9ubsOpZXMgY29tbWUgZHUgdGV4dCcsXG4gICAgc3RvcmVPdGhlcnNBc0NvbW1lbnQ6ICdTYXV2ZWdhcmRlciBjaG9peCBhdXRyZSBjb21tZSBjb21tZW50YWlyZScsXG4gICAgc3VydmV5SWQ6ICdJZCBkdSBxdWVzdGlvbm5haXJlJyxcbiAgICBzdXJ2ZXlQb3N0SWQ6ICdJZCBQT1NUIHF1ZXN0aW9ubmFpcmUnLFxuICAgIHN1cnZleV90aXRsZTogeyBuYW1lOiAndGl0cmUnLCB0aXRsZTogJ0lsIHNlcmEgYWZmaWNow6kgc3VyIGNoYXF1ZSBwYWdlLicgfSxcbiAgICB0aXRsZTogeyBuYW1lOiAnVGl0cmUnLCB0aXRsZTogJ0xhaXNzZXogdmlkZSwgc2kgbWVtZSB0ZXh0ZSBxdWUgbGUgXCJOb21cIicgfSxcbiAgICB0cmlnZ2VyczogJ0TDqWNsZW5jaGV1cnMnLFxuICAgIHZhbGlkYXRvcnM6ICdWYWxpZGF0ZXVycycsXG4gICAgdmlzaWJsZUlmOiAnVmlzaWJsZSBzaSAnLFxuICAgIHdpZHRoOiAnTGFyZ2V1cidcbiAgfSxcbiAgLy9Qcm9wZXJ0eSBFZGl0b3JzXG4gIHBlOiB7XG4gICAgYWRkTmV3OiAnQWpvdXRlciB1biBub3V2ZWF1JyxcbiAgICBhZGRSb3dUZXh0OiAnVGV4dGUgYm91dG9uIGFqb3V0ZXIgdW5lIGxpZ25lJyxcbiAgICBhcHBseTogJ0FwcGxpcXVlcicsXG4gICAgY2FuY2VsOiAnQW5udWxlcicsXG4gICAgY2VsbFR5cGU6ICdUeXBlIGRlIGNlbGx1bGUnLFxuICAgIGNob2ljZXNPcmRlcjogJ1PDqWxlY3Rpb25uZXIgbFxcJ29yZHJlIGRlcyBjaG9peCcsXG4gICAgY2xvc2U6ICdGZXJtZXInLFxuICAgIGNvbENvdW50OiAnTm9tYnJlIGRlIGNvbG9ubmVzJyxcbiAgICBjb2x1bW5FZGl0OiAnRWRpdGVyIGxhIGNvbG9ubmU6IHswfScsXG4gICAgY3JlYXRldHJpZ2dlcjogJ1ZldWlsbGV6IGNyw6llciB1biBkw6ljbGVuY2hldXInLFxuICAgIGRlbGV0ZTogJ1N1cHByaW1lcicsXG4gICAgZWRpdDogJ0VkaXRlcicsXG4gICAgZWRpdFByb3BlcnR5OiAnRWRpdGVyIGxhIHByb3ByacOpdMOpIFwiezB9XCInLFxuICAgIGVtcHR5OiAnPHZpZGU+JyxcbiAgICBlbnRlck5ld1ZhbHVlOiAnVmV1aWxsZXogc2Fpc2lyIGxhIHZhbGV1ci4nLFxuICAgIGV4cHJlc3Npb25IZWxwOiAnVmV1aWxsZXogZW50cmVyIHVuZSBleHByZXNzaW9uIGJvb2zDqWVubmUuIEVsbGUgZG9pdCByZXRvdXJuZXIgVnJhaSh0cnVlKSBwb3VyIGdhcmRlciBsYSBxdWVzdGlvbi9wYWdlIHZpc2libGUuIFBhciBleGVtcGxlOiB7cXVlc3Rpb24xfSA9IFwidmFsZXVyMVwiIG9yICh7cXVlc3Rpb24yfSA9IDMgYW5kIHtxdWVzdGlvbjN9IDwgNSknLFxuICAgIGZhc3RFbnRyeTogJ0Fqb3V0IHJhcGlkZScsXG4gICAgZm9ybUVudHJ5OiAnQWpvdXQgdmlhIGZvcm11bGFpcmUnLFxuICAgIGhhc090aGVyOiAnSGFzIG90aGVyIGl0ZW0nLFxuICAgIGltYWdlSGVpZ2h0OiAnSGF1dGV1ciBkZSBsXFwnaW1hZ2UnLFxuICAgIGltYWdlV2lkdGg6ICdMYXJnZXVyIGRlIGxcXCdpbWFnZScsXG4gICAgaW5wdXRUeXBlOiAnVHlwZSBkZSBjaGFtcCcsXG4gICAgaXNSZXF1aXJlZDogJ0VzdCByZXF1aXMgPycsXG4gICAgaXRlbXM6ICdbIEVsZW1lbnRzOiB7MH0gXScsXG4gICAgbWF4UmF0ZURlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gbm90ZSBtYXhpbXVtJyxcbiAgICBtYXhTaXplOiAnVGFpbGxlIG1heGltdW0gZHUgZmljaGllciBlbiBvY3RldHMnLFxuICAgIG1pblJhdGVEZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG5vdGUgbWluaW11bScsXG4gICAgbmFtZTogJ05vbScsXG4gICAgbm9xdWVzdGlvbnM6ICdJbCBuXFwneSBhIGF1Y3VuZSBxdWVzdGlvbiBkYW5zIGxlIHF1ZXN0aW9ubmFpcmUuJyxcbiAgICBvazogJ09LJyxcbiAgICBvcHRpb25zQ2FwdGlvbjogJ1RleHRlIHBhciBkw6lmYXV0JyxcbiAgICBwbGFjZUhvbGRlcjogJ1BsYWNlSG9sZGVyIChpbmRpY2UgZGFucyBsZSBjaGFtcHMpJyxcbiAgICBwcm9wZXJ0eUlzRW1wdHk6ICdWZXVpbGxleiBlbnRyZXIgdW5lIHZhbGV1ciBwb3VyIGxhIHByb3ByacOpdMOpJyxcbiAgICBxRWRpdG9yVGl0bGU6ICdFZGl0ZXIgbGEgcXVlc3Rpb246IHswfScsXG4gICAgcmVtb3ZlQWxsOiAnVG91dCBzdXBwcmltZXInLFxuICAgIHJlbW92ZVJvd1RleHQ6ICdUZXh0ZSBib3V0b24gc3VwcHJpbWVyIHVuZSBsaWduZScsXG4gICAgcmVxdWlyZWQ6ICdSZXF1aXMgPycsXG4gICAgcmVzZXQ6ICdSw6lpbml0aWFsaXNlcicsXG4gICAgcm93Q291bnQ6ICdOb21icmUgZGUgbGlnbmVzJyxcbiAgICByb3dzOiAnTm9tYnJlIGRlIGxpZ25lcycsXG4gICAgc2hvd1ByZXZpZXc6ICdMXFwnYXBlcsOndSBkXFwnaW1hZ2UgZXN0LWlsIGFmZmljaMOpID8nLFxuICAgIHN0YXJ0V2l0aE5ld0xpbmU6ICdDb21tZW5jZXIgYXZlYyB1bmUgbm91dmVsbGUgbGlnbmUgPycsXG4gICAgc3RvcmVEYXRhQXNUZXh0OiAnU3RvY2tlciBsZSBjb250ZW51IGR1IGZpY2hpZXIgZGFucyBsZSByw6lzdWx0YXQgSlNPTiBzb3VzIGZvcm1lIGRlIHRleHRlJyxcbiAgICB0YWJzOiB7XG4gICAgICBjaG9pY2VzOiAnQ2hvaXgnLFxuICAgICAgY2hvaWNlc0J5VXJsOiAnQ2hvaXggZGVwdWlzIGFwaSB3ZWInLFxuICAgICAgY29sdW1uczogJ0NvbG9ubmVzJyxcbiAgICAgIGZpbGVPcHRpb25zOiAnT3B0aW9ucycsXG4gICAgICBnZW5lcmFsOiAnR8OpbsOpcmFsJyxcbiAgICAgIGh0bWw6ICdFZGl0ZXVyIEh0bWwnLFxuICAgICAgbWF0cml4Q2hvaWNlczogJ0Nob2l4IHBhciBkZWZhdXQnLFxuICAgICAgbXVsdGlwbGVUZXh0SXRlbXM6ICdUZXh0IElucHV0cycsXG4gICAgICByYXRlVmFsdWVzOiAnQmFyw6htZScsXG4gICAgICByb3dzOiAnTGlnbmVzJyxcbiAgICAgIHZpc2libGVJZjogJ1Zpc2libGUgU2knXG4gICAgfSxcbiAgICB0ZXN0U2VydmljZTogJ1Rlc3RlciBsZSBzZXJ2aWNlJyxcbiAgICB0ZXh0OiAnVGV4dGUnLFxuICAgIHRpdGxlOiAnVGl0cmUnLFxuICAgIHRyaWdnZXJDb21wbGV0ZVRleHQ6ICdDb21wbGV0ZSB0aGUgc3VydmV5IGlmIHN1Y2NlZWQuJyxcbiAgICB0cmlnZ2VySXNWYXJpYWJsZTogJ05lIHBsYWNleiBwYXMgbGEgdmFyaWFibGUgZGFucyBsZSByw6lzdWx0YXQgZHUgcXVlc3Rpb25uYWlyZS4nLFxuICAgIHRyaWdnZXJNYWtlUGFnZXNWaXNpYmxlOiAnUmVuZHJlIGxlcyBwYWdlcyB2aXNpYmxlczonLFxuICAgIHRyaWdnZXJNYWtlUXVlc3Rpb25zVmlzaWJsZTogJ1JlbmRyZSBsZXMgcXVlc3Rpb25zIHZpc2libGVzOicsXG4gICAgdHJpZ2dlck5vdFNldDogJ0xlIGTDqWNsZW5jaGV1ciBuXFwnZXN0IHBhcyBkw6lmaW5pJyxcbiAgICB0cmlnZ2VyT246ICdPbiAnLFxuICAgIHRyaWdnZXJSdW5JZjogJ0V4w6ljdXN0ZXIgc2knLFxuICAgIHRyaWdnZXJTZXRUb05hbWU6ICdDaGFuZ2VyIGxhIHZhbGV1ciBkZTogJyxcbiAgICB0cmlnZ2VyU2V0VmFsdWU6ICfDoDogJyxcbiAgICB2YWx1ZTogJ1ZhbGV1cicsXG4gICAgdmVyYkNoYW5nZVBhZ2U6ICdDaGFuZ2VyIGRlIHBhZ2UgJyxcbiAgICB2ZXJiQ2hhbmdlVHlwZTogJ0NoYW5nZXIgbGUgdHlwZSAnLFxuICAgIHZpc2libGU6ICdFc3QgdmlzaWJsZSA/J1xuICB9LFxuICAvL3F1ZXN0aW9uVHlwZXNcbiAgcXQ6IHtcbiAgICBjaGVja2JveDogJ0Nhc2VzIMOgIGNvY2hlcicsXG4gICAgY29tbWVudDogJ0NvbW1lbnRhaXJlJyxcbiAgICBkcm9wZG93bjogJ0xpc3RlIGTDqXJvdWxhbnRlJyxcbiAgICBmaWxlOiAnRmljaGllcicsXG4gICAgaHRtbDogJ0h0bWwnLFxuICAgIG1hdHJpeDogJ01hdGljZSAoY2hvaXggdW5pcXVlKScsXG4gICAgbWF0cml4ZHJvcGRvd246ICdNYXRyaWNlIChjaG9peCBtdWx0aXBsZXMpJyxcbiAgICBtYXRyaXhkeW5hbWljOiAnTWF0cmljZSAoTGlnbmVzIGR5bmFtaXF1ZXMpJyxcbiAgICBtdWx0aXBsZXRleHQ6ICdjaGFtcCBtdWx0aWxpZ25lcycsXG4gICAgcmFkaW9ncm91cDogJ0JvdXRvbnMgcmFkaW8nLFxuICAgIHJhdGluZzogJ0V2YWx1YXRpb24nLFxuICAgIHRleHQ6ICdDaGFtcCBzaW1wbGUnXG4gIH0sXG4gIHN1cnZleToge1xuICAgIGFkZFRvVG9vbGJveDogJ0Fqb3V0ZXIgw6AgbGEgYm/DrnRlIMOgIG91dGlscycsXG4gICAgY29weTogJ0NvcGllcicsXG4gICAgZGVsZXRlUXVlc3Rpb246ICdTdXBwcmltZXIgbGEgcXVlc3Rpb24nLFxuICAgIGRyb3BRdWVzdGlvbjogJ0TDqXBvc2VyIHZvdHJlIHF1ZXN0aW9uIGljaS4nXG4gIH1cbn07XG5cbmVkaXRvckxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hUcmFuc2xhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBrb0FjdGl2ZVZpZXc6IGFueTtcbiAgICBrb0l0ZW1zVGV4dDogYW55O1xuICAgIGNoYW5nZVRvVGV4dFZpZXdDbGljazogYW55O1xuICAgIGNoYW5nZVRvRm9ybVZpZXdDbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29BY3RpdmVWaWV3ID0ga28ub2JzZXJ2YWJsZShcImZvcm1cIik7XG4gICAgICAgIHRoaXMua29JdGVtc1RleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlVmlldy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT0gXCJmb3JtXCIpIHNlbGYudXBkYXRlSXRlbXMoc2VsZi5rb0l0ZW1zVGV4dCgpKTtcbiAgICAgICAgICAgIGVsc2Ugc2VsZi5rb0l0ZW1zVGV4dChzZWxmLmdldEl0ZW1zVGV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hhbmdlVG9UZXh0Vmlld0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvQWN0aXZlVmlldyhcInRleHRcIik7IH07XG4gICAgICAgIHRoaXMuY2hhbmdlVG9Gb3JtVmlld0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvQWN0aXZlVmlldyhcImZvcm1cIik7IH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJpdGVtdmFsdWVzXCI7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtvSXRlbXMoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmtvSXRlbXMoKVtpXTtcbiAgICAgICAgICAgIGl0ZW0ua29IYXNFcnJvcih0aGlzLmlzVmFsdWVFbXB0eShpdGVtLmtvVmFsdWUoKSkpO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IGl0ZW0ua29IYXNFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IHJldHVybiB7IGtvVmFsdWU6IGtvLm9ic2VydmFibGUoKSwga29UZXh0OiBrby5vYnNlcnZhYmxlKCksIGtvSGFzRXJyb3I6IGtvLm9ic2VydmFibGUoZmFsc2UpIH07IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IGl0ZW07XG4gICAgICAgIHZhciBpdGVtVGV4dCA9IG51bGw7XG4gICAgICAgIGlmIChpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICBpdGVtVmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgaXRlbVRleHQgPSBpdGVtLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsga29WYWx1ZToga28ub2JzZXJ2YWJsZShpdGVtVmFsdWUpLCBrb1RleHQ6IGtvLm9ic2VydmFibGUoaXRlbVRleHQpLCBrb0hhc0Vycm9yOiBrby5vYnNlcnZhYmxlKGZhbHNlKSB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnM7XG4gICAgICAgIHZhciB0ZXh0ID0gZWRpdG9ySXRlbS5rb1RleHQoKTtcbiAgICAgICAgaWYgKCFhbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnMgJiYgZWRpdG9ySXRlbS5rb1RleHQoKSA9PSBlZGl0b3JJdGVtLmtvVmFsdWUoKSkge1xuICAgICAgICAgICAgdGV4dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGVkaXRvckl0ZW0ua29WYWx1ZSgpLCB0ZXh0OiB0ZXh0IH07XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICBpZiAodGhpcy5rb0FjdGl2ZVZpZXcoKSAhPSBcImZvcm1cIikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtcyh0aGlzLmtvSXRlbXNUZXh0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uQmVmb3JlQXBwbHkoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZUl0ZW1zKHRleHQ6IHN0cmluZykge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0cyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXh0c1tpXSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlSXRlbSA9IG5ldyBTdXJ2ZXkuSXRlbVZhbHVlKHRleHRzW2ldKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHsgdmFsdWU6IHZhbHVlSXRlbS52YWx1ZSwgdGV4dDogKHZhbHVlSXRlbS5oYXNUZXh0ID8gdmFsdWVJdGVtLnRleHQgOiBcIlwiKSB9O1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0l0ZW1zKHRoaXMuZ2V0SXRlbXNGcm9tVmFsdWUoaXRlbXMpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEl0ZW1zVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgdGV4dCA9IFtdO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFbXB0eShpdGVtLmtvVmFsdWUoKSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIGl0ZW1UZXh0ID0gaXRlbS5rb1ZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoaXRlbS5rb1RleHQoKSkgaXRlbVRleHQgKz0gU3VydmV5Lkl0ZW1WYWx1ZS5TZXBhcmF0b3IgKyBpdGVtLmtvVGV4dCgpO1xuICAgICAgICAgICAgdGV4dC5wdXNoKGl0ZW1UZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dC5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgaXNWYWx1ZUVtcHR5KHZhbDogYW55KSB7XG4gICAgICAgIHJldHVybiAhdmFsO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiaXRlbXZhbHVlc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvcn0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvclwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eURyb3Bkb3duQ29sdW1uc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIGtvRWRpdEl0ZW06IGFueTsga29Jc0xpc3Q6IGFueTtcbiAgICBvbkVkaXRJdGVtQ2xpY2s6IGFueTsgb25DYW5jZWxFZGl0SXRlbUNsaWNrOiBhbnk7XG4gICAgY29sdW1uRWRpdG9yOiBTdXJ2ZXlRdWVzdGlvbkVkaXRvcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvRWRpdEl0ZW0gPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgICAgICB0aGlzLmtvSXNMaXN0ID0ga28ub2JzZXJ2YWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5rb0VkaXRJdGVtLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgXG4gICAgICAgICAgICBpZihzZWxmLmtvRWRpdEl0ZW0oKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb2x1bW5FZGl0b3IgPSBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3Ioc2VsZi5rb0VkaXRJdGVtKCkuZWRpdENvbHVtbiwgbnVsbCwgXCJtYXRyaXhkcm9wZG93bmNvbHVtbkBcIiArIHNlbGYua29FZGl0SXRlbSgpLmtvQ2VsbFR5cGUoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHNlbGYuY29sdW1uRWRpdG9yKSBzZWxmLmNvbHVtbkVkaXRvci5hcHBseSgpO1xuICAgICAgICAgICAgICAgIHNlbGYuY29sdW1uRWRpdG9yID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYua29Jc0xpc3Qoc2VsZi5rb0VkaXRJdGVtKCkgPT0gbnVsbCk7IFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbkVkaXRJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmtvRWRpdEl0ZW0oaXRlbSk7IH07XG4gICAgICAgIHRoaXMub25DYW5jZWxFZGl0SXRlbUNsaWNrID0gZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgICAgIGlmKHNlbGYuY29sdW1uRWRpdG9yICYmIHNlbGYuY29sdW1uRWRpdG9yLmhhc0Vycm9yKCkpIHJldHVybjtcbiAgICAgICAgICAgIHNlbGYua29FZGl0SXRlbShudWxsKTsgXG4gICAgICAgIH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtYXRyaXhkcm9wZG93bmNvbHVtbnNcIjsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuY29sdW1uRWRpdG9yICE9IG51bGwgPyB0aGlzLmNvbHVtbkVkaXRvci5oYXNFcnJvcigpIDogZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5rb0l0ZW1zKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB0aGlzLmtvSXRlbXMoKVtpXS5oYXNFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICBpZih0aGlzLmNvbHVtbkVkaXRvcikgdGhpcy5jb2x1bW5FZGl0b3IuYXBwbHkoKTtcbiAgICAgICAgc3VwZXIub25CZWZvcmVBcHBseSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbShuZXcgU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uKFwiXCIsIHRoaXMub3B0aW9ucykpOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtKGl0ZW0sIHRoaXMub3B0aW9ucyk7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgY29sdW1JdGVtID0gPFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbT5lZGl0b3JJdGVtO1xuICAgICAgICBjb2x1bUl0ZW0uYXBwbHkoKTtcbiAgICAgICAgcmV0dXJuIGNvbHVtSXRlbS5jb2x1bW47XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtIHtcbiAgICBwdWJsaWMgZWRpdENvbHVtbjogU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uO1xuICAgIGtvTmFtZTogYW55OyBrb1RpdGxlOiBhbnk7IGtvQ2VsbFR5cGU6IGFueTsgIGtvSXNSZXF1aXJlZDogYW55O1xuICAgIGtvRWRpdG9yTmFtZTogYW55OyBrb0hhc0Vycm9yOiBhbnk7IGtvQ2FuRWRpdDogYW55OyBcbiAgICBwdWJsaWMgb25TaG93Q2hvaWNlc0NsaWNrOiBhbnk7XG4gICAgcHVibGljIGNlbGxUeXBlQ2hvaWNlczogQXJyYXk8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uOiBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4sIHB1YmxpYyBvcHRpb25zID0gbnVsbCkge1xuICAgICAgICB0aGlzLmVkaXRDb2x1bW4gPSBuZXcgU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uKGNvbHVtbi5uYW1lLCBjb2x1bW4udGl0bGUpO1xuICAgICAgICB0aGlzLmNvcHlDb2x1bW4odGhpcy5jb2x1bW4sIHRoaXMuZWRpdENvbHVtbik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNlbGxUeXBlQ2hvaWNlcyA9IHRoaXMuZ2V0UHJvcGVydHlDaG9pY2VzKFwiY2VsbFR5cGVcIik7XG4gICAgICAgIHRoaXMua29OYW1lID0ga28ub2JzZXJ2YWJsZShjb2x1bW4ubmFtZSk7XG4gICAgICAgIHRoaXMua29DZWxsVHlwZSA9IGtvLm9ic2VydmFibGUoY29sdW1uLmNlbGxUeXBlKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ub2JzZXJ2YWJsZShjb2x1bW4ubmFtZSA9PT0gY29sdW1uLnRpdGxlID8gXCJcIiA6IGNvbHVtbi50aXRsZSk7XG4gICAgICAgIHRoaXMua29Jc1JlcXVpcmVkID0ga28ub2JzZXJ2YWJsZSh0aGlzLmNvbHVtbi5pc1JlcXVpcmVkKTtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvQ2FuRWRpdCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYua29DZWxsVHlwZSgpICE9IFwiZGVmYXVsdFwiOyB9KTtcbiAgICAgICAgdGhpcy5rb0VkaXRvck5hbWUgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5jb2x1bW5FZGl0XCIpW1wiZm9ybWF0XCJdKHNlbGYua29OYW1lKCkpO30pO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMua29IYXNFcnJvcighdGhpcy5rb05hbWUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmtvSGFzRXJyb3IoKTtcbiAgICB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICB0aGlzLmNvcHlDb2x1bW4odGhpcy5lZGl0Q29sdW1uLCB0aGlzLmNvbHVtbik7XG4gICAgICAgIHRoaXMuY29sdW1uLm5hbWUgPSB0aGlzLmtvTmFtZSgpO1xuICAgICAgICB0aGlzLmNvbHVtbi50aXRsZSA9IHRoaXMua29UaXRsZSgpO1xuICAgICAgICB0aGlzLmNvbHVtbi5jZWxsVHlwZSA9IHRoaXMua29DZWxsVHlwZSgpO1xuICAgICAgICB0aGlzLmNvbHVtbi5pc1JlcXVpcmVkID0gdGhpcy5rb0lzUmVxdWlyZWQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb3B5Q29sdW1uKHNyYzogU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uLCBkZXN0OiBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4pIHtcbiAgICAgICAgZGVzdC5oYXNPdGhlciA9IHNyYy5oYXNPdGhlcjtcbiAgICAgICAgZGVzdC5jaG9pY2VzID0gc3JjLmNob2ljZXM7XG4gICAgICAgIGRlc3QuY29sQ291bnQgPSBzcmMuY29sQ291bnQ7XG4gICAgICAgIGRlc3Qub3B0aW9uc0NhcHRpb24gPSBzcmMub3B0aW9uc0NhcHRpb247XG4gICAgICAgIC8vVE9ETyBjaGFuZ2UgdG8gcHJvcGVydGllc1xuICAgICAgICBpZihzcmNbXCJjaG9pY2VzT3JkZXJcIl0pIGRlc3RbXCJjaG9pY2VzT3JkZXJcIl0gPSBzcmNbXCJjaG9pY2VzT3JkZXJcIl07XG4gICAgICAgIGlmKHNyY1tcImlucHV0VHlwZVwiXSkgZGVzdFtcImlucHV0VHlwZVwiXSA9IHNyY1tcImlucHV0VHlwZVwiXTtcbiAgICAgICAgaWYoc3JjW1wicGxhY2VIb2xkZXJcIl0pIGRlc3RbXCJwbGFjZUhvbGRlclwiXSA9IHNyY1tcInBsYWNlSG9sZGVyXCJdO1xuICAgICAgICBpZihzcmNbXCJjaG9pY2VzQnlVcmxcIl0pIGRlc3RbXCJjaG9pY2VzQnlVcmxcIl0uc2V0RGF0YShzcmNbXCJjaG9pY2VzQnlVcmxcIl0pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFByb3BlcnR5Q2hvaWNlcyhwcm9wZXR5TmFtZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyhcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0gcHJvcGV0eU5hbWUpIHJldHVybiBwcm9wZXJ0aWVzW2ldLmNob2ljZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwibWF0cml4ZHJvcGRvd25jb2x1bW5zXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5RHJvcGRvd25Db2x1bW5zRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcbiAgICBrb1VybDogYW55OyBrb1BhdGg6IGFueTsga29WYWx1ZU5hbWU6IGFueTsga29UaXRsZU5hbWU6IGFueTsgXG4gICAgcHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleTtcbiAgICBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29VcmwgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29QYXRoID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvVGl0bGVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVN1cnZleSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29Vcmwuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnF1ZXN0aW9uLmNob2ljZXNCeVVybC51cmwgPSBuZXdWYWx1ZTsgc2VsZi5ydW4oKTsgfSk7XG4gICAgICAgIHRoaXMua29QYXRoLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwucGF0aCA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnZhbHVlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1RpdGxlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnRpdGxlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInJlc3RmdWxsXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHJlc3RmdWxsVmFsdWUoKSB7IHJldHVybiA8U3VydmV5LkNob2ljZXNSZXN0ZnVsbD50aGlzLnZhbHVlOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVtcHR5XCIpO1xuICAgICAgICB2YXIgc3RyID0gdmFsdWUudXJsO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5yZXN0ZnVsbFZhbHVlO1xuICAgICAgICB0aGlzLmtvVXJsKHZhbCA/IHZhbC51cmwgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1BhdGgodmFsID8gdmFsLnBhdGggOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZSh2YWwgPyB2YWwudmFsdWVOYW1lIDogXCJcIik7XG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUodmFsID8gdmFsLnRpdGxlTmFtZSA6IFwiXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdmFyIHZhbCA9IG5ldyBTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsKCk7XG4gICAgICAgIHZhbC51cmwgPSB0aGlzLmtvVXJsKCk7XG4gICAgICAgIHZhbC5wYXRoID0gdGhpcy5rb1BhdGgoKTtcbiAgICAgICAgdmFsLnZhbHVlTmFtZSA9IHRoaXMua29WYWx1ZU5hbWUoKTtcbiAgICAgICAgdmFsLnRpdGxlTmFtZSA9IHRoaXMua29UaXRsZU5hbWUoKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodmFsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBydW4oKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnJ1bigpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVN1cnZleSgpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSBuZXcgU3VydmV5LlN1cnZleSgpO1xuICAgICAgICB0aGlzLnN1cnZleS5zaG93TmF2aWdhdGlvbkJ1dHRvbnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkuc2hvd1F1ZXN0aW9uTnVtYmVycyA9IFwib2ZmXCI7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuYWRkTmV3UGFnZShcInBhZ2UxXCIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duPnBhZ2UuYWRkTmV3UXVlc3Rpb24oXCJkcm9wZG93blwiLCBcInExXCIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLnRpdGxlID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRlc3RTZXJ2aWNlXCIpXG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlcyA9IFtdO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwicmVzdGZ1bGxcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlSZXN1bHRmdWxsRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvci50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5VmFsaWRhdG9yc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidGV4dGl0ZW1zXCI7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkge1xuICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2Jqcy5wdXNoKHsgbmFtZTogaXRlbXNbaV0ua29OYW1lKCkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVkaXRJdGVtID0geyBrb05hbWU6IGtvLm9ic2VydmFibGUoU3VydmV5SGVscGVyLmdldE5ld05hbWUob2JqcywgXCJ0ZXh0XCIpKSwga29UaXRsZToga28ub2JzZXJ2YWJsZSgpLCBrb0lzUmVxdWlyZWQ6IGtvLm9ic2VydmFibGUoZmFsc2UpIH07XG4gICAgICAgIHRoaXMuY3JlYXRlVmFsaWRhdG9yc0VkaXRvcihlZGl0SXRlbSwgW10pO1xuICAgICAgICByZXR1cm4gZWRpdEl0ZW07XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIgZWRpdEl0ZW0gPSB7IGtvTmFtZToga28ub2JzZXJ2YWJsZShpdGVtLm5hbWUpLCBrb1RpdGxlOiBrby5vYnNlcnZhYmxlKGl0ZW0udGl0bGUpLCBrb0lzUmVxdWlyZWQ6IGtvLm9ic2VydmFibGUoaXRlbS5pc1JlcXVpcmVkKSB9O1xuICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcnNFZGl0b3IoZWRpdEl0ZW0sIGl0ZW0udmFsaWRhdG9ycyk7XG4gICAgICAgIHJldHVybiBlZGl0SXRlbTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW1UZXh0ID0gbmV3IFN1cnZleS5NdWx0aXBsZVRleHRJdGVtKGVkaXRvckl0ZW0ua29OYW1lKCksIGVkaXRvckl0ZW0ua29UaXRsZSgpKTtcbiAgICAgICAgaXRlbVRleHQuaXNSZXF1aXJlZCA9IGVkaXRvckl0ZW0ua29Jc1JlcXVpcmVkKCk7XG4gICAgICAgIGl0ZW1UZXh0LnZhbGlkYXRvcnMgPSBlZGl0b3JJdGVtLnZhbGlkYXRvcnM7XG4gICAgICAgIHJldHVybiBpdGVtVGV4dDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVWYWxpZGF0b3JzRWRpdG9yKGl0ZW06IGFueSwgdmFsaWRhdG9yczogQXJyYXk8YW55Pikge1xuICAgICAgICBpdGVtLnZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLnNsaWNlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIG9uSXRlbUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3VmFsdWU6IGFueSkgeyBpdGVtLnZhbGlkYXRvcnMgPSBuZXdWYWx1ZTsgaXRlbS5rb1RleHQoc2VsZi5nZXRUZXh0KG5ld1ZhbHVlLmxlbmd0aCkpOyB9O1xuICAgICAgICB2YXIgcHJvcGVydHlFZGl0b3IgPSBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yKCk7XG4gICAgICAgIGl0ZW0uZWRpdG9yID0gcHJvcGVydHlFZGl0b3I7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLm9uQ2hhbmdlZCA9IChuZXdWYWx1ZTogYW55KSA9PiB7IG9uSXRlbUNoYW5nZWQobmV3VmFsdWUpOyB9O1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci5vYmplY3QgPSBpdGVtO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci50aXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZWRpdFByb3BlcnR5XCIpW1wiZm9ybWF0XCJdKFwiVmFsaWRhdG9yc1wiKSk7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLnZhbHVlID0gaXRlbS52YWxpZGF0b3JzO1xuICAgICAgICBpdGVtLmtvVGV4dCA9IGtvLm9ic2VydmFibGUodGhpcy5nZXRUZXh0KHZhbGlkYXRvcnMubGVuZ3RoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dChsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuaXRlbXNcIilbXCJmb3JtYXRcIl0obGVuZ3RoKTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInRleHRpdGVtc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VGV4dEl0ZW1zRWRpdG9yLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUcmlnZ2Vyc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIGtvUXVlc3Rpb25zOiBhbnk7IGtvUGFnZXM6IGFueTtcbiAgICBwdWJsaWMga29TZWxlY3RlZDogYW55O1xuICAgIHB1YmxpYyBhdmFpbGFibGVUcmlnZ2VyczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHByaXZhdGUgdHJpZ2dlckNsYXNzZXM6IEFycmF5PFN1cnZleS5Kc29uTWV0YWRhdGFDbGFzcz4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoc2VsZi5rb1NlbGVjdGVkKCkpOyB9O1xuICAgICAgICB0aGlzLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAodHJpZ2dlclR5cGUpIHsgc2VsZi5hZGRJdGVtKHRyaWdnZXJUeXBlKTsgfTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICAgICAgdGhpcy5rb1BhZ2VzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29RdWVzdGlvbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInN1cnZleXRyaWdnZXJcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlVHJpZ2dlcnMgPSB0aGlzLmdldEF2YWlsYWJsZVRyaWdnZXJzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0cmlnZ2Vyc1wiOyB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcyh0aGlzLmdldE5hbWVzKCg8U3VydmV5LlN1cnZleT50aGlzLm9iamVjdCkucGFnZXMpKTtcbiAgICAgICAgICAgIHRoaXMua29RdWVzdGlvbnModGhpcy5nZXROYW1lcygoPFN1cnZleS5TdXJ2ZXk+dGhpcy5vYmplY3QpLmdldEFsbFF1ZXN0aW9ucygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZWQoKTtcbiAgICAgICAgaWYgKHRoaXMua29TZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRoaXMua29JdGVtcygpLmxlbmd0aCA+IDAgPyB0aGlzLmtvSXRlbXMoKVswXSA6IG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRJdGVtKHRyaWdnZXJUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh0cmlnZ2VyVHlwZSk7XG4gICAgICAgIHZhciB0cmlnZ2VySXRlbSA9IHRoaXMuY3JlYXRlUHJvcGVydHlUcmlnZ2VyKHRyaWdnZXIpO1xuICAgICAgICB0aGlzLmtvSXRlbXMucHVzaCh0cmlnZ2VySXRlbSk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCh0cmlnZ2VySXRlbSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIganNvbk9iaiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpO1xuICAgICAgICB2YXIgdHJpZ2dlciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGl0ZW0uZ2V0VHlwZSgpKTtcbiAgICAgICAganNvbk9iai50b09iamVjdChpdGVtLCB0cmlnZ2VyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUHJvcGVydHlUcmlnZ2VyKDxTdXJ2ZXkuU3VydmV5VHJpZ2dlcj50cmlnZ2VyKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGVkaXRvclRyaWdnZXIgPSA8U3VydmV5UHJvcGVydHlUcmlnZ2VyPmVkaXRvckl0ZW07XG4gICAgICAgIHJldHVybiBlZGl0b3JUcmlnZ2VyLmNyZWF0ZVRyaWdnZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRBdmFpbGFibGVUcmlnZ2VycygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJpZ2dlckNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudHJpZ2dlckNsYXNzZXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXROYW1lcyhpdGVtczogQXJyYXk8YW55Pik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGlmIChpdGVtW1wibmFtZVwiXSkge1xuICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goaXRlbVtcIm5hbWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lcztcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXIpOiBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlckl0ZW0gPSBudWxsO1xuICAgICAgICBpZiAodHJpZ2dlci5nZXRUeXBlKCkgPT0gXCJ2aXNpYmxldHJpZ2dlclwiKSB7XG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVZpc2libGVUcmlnZ2VyKDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclZpc2libGU+dHJpZ2dlciwgdGhpcy5rb1BhZ2VzLCB0aGlzLmtvUXVlc3Rpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJpZ2dlci5nZXRUeXBlKCkgPT0gXCJzZXR2YWx1ZXRyaWdnZXJcIikge1xuICAgICAgICAgICAgdHJpZ2dlckl0ZW0gPSBuZXcgU3VydmV5UHJvcGVydHlTZXRWYWx1ZVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWU+dHJpZ2dlciwgdGhpcy5rb1F1ZXN0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0cmlnZ2VySXRlbSkge1xuICAgICAgICAgICAgdHJpZ2dlckl0ZW0gPSBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2VyKHRyaWdnZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmlnZ2VySXRlbTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICBwcml2YXRlIG9wZXJhdG9ycyA9IFtcImVtcHR5XCIsIFwibm90ZW1wdHlcIiwgXCJlcXVhbFwiLCBcIm5vdGVxdWFsXCIsIFwiY29udGFpbnNcIiwgXCJub3Rjb250YWluc1wiLCBcImdyZWF0ZXJcIiwgXCJsZXNzXCIsIFwiZ3JlYXRlcm9yZXF1YWxcIiwgXCJsZXNzb3JlcXVhbFwiXTtcbiAgICBwcml2YXRlIHRyaWdnZXJUeXBlOiBzdHJpbmc7XG4gICAgYXZhaWxhYmxlT3BlcmF0b3JzID0gW107XG4gICAga29OYW1lOiBhbnk7IGtvT3BlcmF0b3I6IGFueTsga29WYWx1ZTogYW55OyBrb1R5cGU6IGFueTtcbiAgICBrb1RleHQ6IGFueTsga29Jc1ZhbGlkOiBhbnk7IGtvUmVxdWlyZVZhbHVlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVPcGVyYXRvcnMoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyVHlwZSA9IHRyaWdnZXIuZ2V0VHlwZSgpO1xuICAgICAgICB0aGlzLmtvVHlwZSA9IGtvLm9ic2VydmFibGUodGhpcy50cmlnZ2VyVHlwZSk7XG4gICAgICAgIHRoaXMua29OYW1lID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLm5hbWUpO1xuICAgICAgICB0aGlzLmtvT3BlcmF0b3IgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIub3BlcmF0b3IpO1xuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIudmFsdWUpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29SZXF1aXJlVmFsdWUgPSBrby5jb21wdXRlZCgoKSA9PiB7IHJldHVybiBzZWxmLmtvT3BlcmF0b3IoKSAhPSBcImVtcHR5XCIgJiYgc2VsZi5rb09wZXJhdG9yKCkgIT0gXCJub3RlbXB0eVwiOyB9KTtcbiAgICAgICAgdGhpcy5rb0lzVmFsaWQgPSBrby5jb21wdXRlZCgoKSA9PiB7IGlmIChzZWxmLmtvTmFtZSgpICYmICghc2VsZi5rb1JlcXVpcmVWYWx1ZSgpIHx8IHNlbGYua29WYWx1ZSgpKSkgcmV0dXJuIHRydWU7IHJldHVybiBmYWxzZTsgfSk7XG4gICAgICAgIHRoaXMua29UZXh0ID0ga28uY29tcHV0ZWQoKCkgPT4geyBzZWxmLmtvTmFtZSgpOyBzZWxmLmtvT3BlcmF0b3IoKTsgc2VsZi5rb1ZhbHVlKCk7IHJldHVybiBzZWxmLmdldFRleHQoKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVUcmlnZ2VyKCk6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSA8U3VydmV5LlN1cnZleVRyaWdnZXI+U3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3ModGhpcy50cmlnZ2VyVHlwZSk7XG4gICAgICAgIHRyaWdnZXIubmFtZSA9IHRoaXMua29OYW1lKCk7XG4gICAgICAgIHRyaWdnZXIub3BlcmF0b3IgPSB0aGlzLmtvT3BlcmF0b3IoKTtcbiAgICAgICAgdHJpZ2dlci52YWx1ZSA9IHRoaXMua29WYWx1ZSgpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVPcGVyYXRvcnMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcGVyYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5vcGVyYXRvcnNbaV07XG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZU9wZXJhdG9ycy5wdXNoKHsgbmFtZTogbmFtZSwgdGV4dDogZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm9wLlwiICsgbmFtZSkgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5rb0lzVmFsaWQoKSkgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyTm90U2V0XCIpO1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJSdW5JZlwiKSArIFwiICdcIiArIHRoaXMua29OYW1lKCkgKyBcIicgXCIgKyB0aGlzLmdldE9wZXJhdG9yVGV4dCgpICsgdGhpcy5nZXRWYWx1ZVRleHQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRPcGVyYXRvclRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIG9wID0gdGhpcy5rb09wZXJhdG9yKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hdmFpbGFibGVPcGVyYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZU9wZXJhdG9yc1tpXS5uYW1lID09IG9wKSByZXR1cm4gdGhpcy5hdmFpbGFibGVPcGVyYXRvcnNbaV0udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3A7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmFsdWVUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5rb1JlcXVpcmVWYWx1ZSgpKSByZXR1cm4gXCJcIjtcbiAgICAgICAgcmV0dXJuIFwiIFwiICsgdGhpcy5rb1ZhbHVlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWaXNpYmxlVHJpZ2dlciBleHRlbmRzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAgcHVibGljIHBhZ2VzOiBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzO1xuICAgIHB1YmxpYyBxdWVzdGlvbnM6IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHM7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZSwga29QYWdlczogYW55LCBrb1F1ZXN0aW9uczogYW55KSB7XG4gICAgICAgIHN1cGVyKHRyaWdnZXIpO1xuICAgICAgICB0aGlzLnBhZ2VzID0gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHMoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJNYWtlUGFnZXNWaXNpYmxlXCIpLCBrb1BhZ2VzKCksIHRyaWdnZXIucGFnZXMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyTWFrZVF1ZXN0aW9uc1Zpc2libGVcIiksIGtvUXVlc3Rpb25zKCksIHRyaWdnZXIucXVlc3Rpb25zKTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVRyaWdnZXIoKTogU3VydmV5LlN1cnZleVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclZpc2libGU+c3VwZXIuY3JlYXRlVHJpZ2dlcigpO1xuICAgICAgICB0cmlnZ2VyLnBhZ2VzID0gdGhpcy5wYWdlcy5rb0Nob29zZW4oKTtcbiAgICAgICAgdHJpZ2dlci5xdWVzdGlvbnMgPSB0aGlzLnF1ZXN0aW9ucy5rb0Nob29zZW4oKTtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlTZXRWYWx1ZVRyaWdnZXIgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgIGtvUXVlc3Rpb25zOiBhbnk7IGtvc2V0VG9OYW1lOiBhbnk7IGtvc2V0VmFsdWU6IGFueTsga29pc1ZhcmlhYmxlOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWUsIGtvUXVlc3Rpb25zOiBhbnkpIHtcbiAgICAgICAgc3VwZXIodHJpZ2dlcik7XG4gICAgICAgIHRoaXMua29RdWVzdGlvbnMgPSBrb1F1ZXN0aW9ucztcbiAgICAgICAgdGhpcy5rb3NldFRvTmFtZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5zZXRUb05hbWUpO1xuICAgICAgICB0aGlzLmtvc2V0VmFsdWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIuc2V0VmFsdWUpO1xuICAgICAgICB0aGlzLmtvaXNWYXJpYWJsZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5pc1ZhcmlhYmxlKTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVRyaWdnZXIoKTogU3VydmV5LlN1cnZleVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclNldFZhbHVlPnN1cGVyLmNyZWF0ZVRyaWdnZXIoKTtcbiAgICAgICAgdHJpZ2dlci5zZXRUb05hbWUgPSB0aGlzLmtvc2V0VG9OYW1lKCk7XG4gICAgICAgIHRyaWdnZXIuc2V0VmFsdWUgPSB0aGlzLmtvc2V0VmFsdWUoKTtcbiAgICAgICAgdHJpZ2dlci5pc1ZhcmlhYmxlID0gdGhpcy5rb2lzVmFyaWFibGUoKTtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHMge1xuICAgIGtvT2JqZWN0czogYW55O1xuICAgIGtvQ2hvb3NlbjogYW55O1xuICAgIGtvU2VsZWN0ZWQ6IGFueTtcbiAgICBrb0Nob29zZW5TZWxlY3RlZDogYW55O1xuICAgIHB1YmxpYyBvbkRlbGV0ZUNsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uQWRkQ2xpY2s6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZywgYWxsT2JqZWN0czogQXJyYXk8c3RyaW5nPiwgY2hvb3Nlbk9iamVjdHM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5rb0Nob29zZW4gPSBrby5vYnNlcnZhYmxlQXJyYXkoY2hvb3Nlbk9iamVjdHMpO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFsbE9iamVjdHNbaV07XG4gICAgICAgICAgICBpZiAoY2hvb3Nlbk9iamVjdHMuaW5kZXhPZihpdGVtKSA8IDApIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29PYmplY3RzID0ga28ub2JzZXJ2YWJsZUFycmF5KGFycmF5KTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvQ2hvb3NlblNlbGVjdGVkID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kZWxldGVJdGVtKCk7IH07XG4gICAgICAgIHRoaXMub25BZGRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5hZGRJdGVtKCk7IH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVJdGVtKCkge1xuICAgICAgICB0aGlzLmNoYW5nZUl0ZW1zKHRoaXMua29DaG9vc2VuU2VsZWN0ZWQoKSwgdGhpcy5rb0Nob29zZW4sIHRoaXMua29PYmplY3RzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRJdGVtKCkge1xuICAgICAgICB0aGlzLmNoYW5nZUl0ZW1zKHRoaXMua29TZWxlY3RlZCgpLCB0aGlzLmtvT2JqZWN0cywgdGhpcy5rb0Nob29zZW4pO1xuICAgIH1cbiAgICBwcml2YXRlIGNoYW5nZUl0ZW1zKGl0ZW06IHN0cmluZywgcmVtb3ZlZEZyb206IGFueSwgYWRkVG86IGFueSkge1xuICAgICAgICByZW1vdmVkRnJvbS5yZW1vdmUoaXRlbSk7XG4gICAgICAgIGFkZFRvLnB1c2goaXRlbSk7XG4gICAgICAgIHJlbW92ZWRGcm9tLnNvcnQoKTtcbiAgICAgICAgYWRkVG8uc29ydCgpO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidHJpZ2dlcnNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2Vyc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VHJpZ2dlcnNFZGl0b3IudHMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImJvb3RzdHJhcFwiLFwiY29tbW9uanMyXCI6XCJib290c3RyYXBcIixcImNvbW1vbmpzXCI6XCJib290c3RyYXBcIixcImFtZFwiOlwiYm9vdHN0cmFwXCJ9XG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic3ZkX2NvbnRhaW5lclxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLWRlZmF1bHQgY29udGFpbmVyLWZsdWlkIG5hdiBuYXYtdGFicyBzdmRfbWVudVxcXCI+XFxuICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSAnZGVzaWduZXInfVxcXCI+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpzZWxlY3REZXNpZ25lckNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLmRlc2lnbmVyJylcXFwiPjwvYT48L2xpPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwidmlzaWJsZTogc2hvd0pTT05FZGl0b3JUYWIsIGNzczoge2FjdGl2ZToga29WaWV3VHlwZSgpID09ICdlZGl0b3InfVxcXCI+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpzZWxlY3RFZGl0b3JDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5qc29uRWRpdG9yJylcXFwiPjwvYT48L2xpPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwidmlzaWJsZTogc2hvd1Rlc3RTdXJ2ZXlUYWIsIGNzczoge2FjdGl2ZToga29WaWV3VHlwZSgpID09ICd0ZXN0J31cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0VGVzdENsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLnRlc3RTdXJ2ZXknKVxcXCI+PC9hPjwvbGk+XFxuICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBzaG93RW1iZWRlZFN1cnZleVRhYiwgY3NzOiB7YWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gJ2VtYmVkJ31cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0RW1iZWRDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5lbWJlZFN1cnZleScpXFxcIj48L2E+PC9saT5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwic3ZkX2FjdGlvbnNcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29Jc1Nob3dEZXNpZ25lclxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOnVuZG9SZWRvLmtvQ2FuVW5kbywgY2xpY2s6IGRvVW5kb0NsaWNrXFxcIj48c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQudW5kbycpXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJzdmRfYWN0aW9uc1xcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb0lzU2hvd0Rlc2lnbmVyXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6dW5kb1JlZG8ua29DYW5SZWRvLCBjbGljazogZG9SZWRvQ2xpY2tcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5yZWRvJylcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcInN2ZF9hY3Rpb25zXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IChrb0lzU2hvd0Rlc2lnbmVyKCkgJiYga29TaG93T3B0aW9ucygpKVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGlubGluZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLm9wdGlvbnMnKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBPcHRpb25zIFxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwiY3NzOiB7YWN0aXZlOiBrb0dlbmVyYXRlVmFsaWRKU09OfVxcXCI+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpnZW5lcmF0ZVZhbGlkSlNPTkNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLmdlbmVyYXRlVmFsaWRKU09OJylcXFwiPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwiY3NzOiB7YWN0aXZlOiAha29HZW5lcmF0ZVZhbGlkSlNPTigpfVxcXCI+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpnZW5lcmF0ZVJlYWRhYmxlSlNPTkNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLmdlbmVyYXRlUmVhZGFibGVKU09OJylcXFwiPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwic3ZkX2FjdGlvbnNcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29WaWV3VHlwZSgpID09ICd0ZXN0J1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGlubGluZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwic3VydmV5VGVzdFdpZHRoXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC50ZXN0U3VydmV5V2lkdGgnKSArICcgJyArICRyb290LmtvVGVzdFN1cnZleVdpZHRoKClcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInN1cnZleVRlc3RXaWR0aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazoga29UZXN0U3VydmV5V2lkdGguYmluZCgkZGF0YSwgJzEwMCUnKVxcXCI+MTAwJTwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGtvVGVzdFN1cnZleVdpZHRoLmJpbmQoJGRhdGEsICcxMjAwcHgnKVxcXCI+MTIwMHB4PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazoga29UZXN0U3VydmV5V2lkdGguYmluZCgkZGF0YSwgJzEwMDBweCcpXFxcIj4xMDAwcHg8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBrb1Rlc3RTdXJ2ZXlXaWR0aC5iaW5kKCRkYXRhLCAnODAwcHgnKVxcXCI+ODAwcHg8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBrb1Rlc3RTdXJ2ZXlXaWR0aC5iaW5kKCRkYXRhLCAnNjAwcHgnKVxcXCI+NjAwcHg8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBrb1Rlc3RTdXJ2ZXlXaWR0aC5iaW5kKCRkYXRhLCAnNDAwcHgnKVxcXCI+NDAwcHg8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcInN2ZF9hY3Rpb25zXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBzdmRfc2F2ZV9idG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHNhdmVCdXR0b25DbGljaywgdmlzaWJsZToga29TaG93U2F2ZUJ1dHRvblxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLnNhdmVTdXJ2ZXknKVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgPC9saT5cXG4gICAgPC91bD5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgc3ZkX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHN2ZF9zdXJ2ZXlfZGVzaWduZXJcXFwiICBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAnZGVzaWduZXInXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtc20tMSBjb2wteHMtMSBwYW5lbCBwYW5lbC1kZWZhdWx0IHN2ZF90b29sYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwLXZlcnRpY2FsXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtwYWRkaW5nLXJpZ2h0OjJweFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHRvb2xib3gua29JdGVtcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgc3R5bGU9XFxcInRleHQtYWxpZ246bGVmdDsgbWFyZ2luOjFweDttaW4taGVpZ2h0OjM3cHg7IHdpZHRoOjEwMCVcXFwiIGRyYWdnYWJsZT1cXFwidHJ1ZVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHJvb3QuY2xpY2tUb29sYm94SXRlbSwgZXZlbnQ6e2RyYWdzdGFydDogZnVuY3Rpb24oZWwsIGUpIHsgJHJvb3QuZHJhZ2dpbmdUb29sYm94SXRlbSgkZGF0YSwgZSk7IHJldHVybiB0cnVlO30sIGRyYWdlbmQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRyb290LmRyYWdFbmQoKTsgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwiY3NzOiBpY29uTmFtZSwgYXR0cjoge3RpdGxlOiB0aXRsZX1cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3ZkX3Rvb2xib3hfaXRlbV90ZXh0IGhpZGRlbi1zbSBoaWRkZW4teHNcXFwiIGRhdGEtYmluZD1cXFwidGV4dDp0aXRsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy03IGNvbC1tZC03IGNvbC1zbS04IGNvbC14cy0xMSBzdmRfZWRpdG9yc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN2ZF9wYWdlc19lZGl0b3JcXFwiIGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ3BhZ2VlZGl0b3InLCBkYXRhOiBwYWdlc0VkaXRvciB9XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3ZkX3F1ZXN0aW9uc19lZGl0b3JcXFwiIGlkPVxcXCJzY3JvbGxhYmxlRGl2XFxcIiBkYXRhLWJpbmQ9XFxcInN0eWxlOiB7aGVpZ2h0OiBrb0Rlc2lnbmVySGVpZ2h0fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0zIGhpZGRlbi14cyBwYW5lbCBwYW5lbC1kZWZhdWx0IHN2ZF9wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZyBpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXN0b20tc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczoga29PYmplY3RzLCBvcHRpb25zVGV4dDogJ3RleHQnLCB2YWx1ZToga29TZWxlY3RlZE9iamVjdFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOiBrb0NhbkRlbGV0ZU9iamVjdCwgY2xpY2s6IGRlbGV0ZUN1cnJlbnRPYmplY3QsIGF0dHI6IHsgdGl0bGU6ICRyb290LmdldExvY1N0cmluZygnZWQuZGVsU2VsT2JqZWN0Jyl9XFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3ZkX29iamVjdF9lZGl0b3JcXFwiIGRhdGEtYmluZD1cXFwic3R5bGU6IHtoZWlnaHQ6IGtvRGVzaWduZXJIZWlnaHR9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAnb2JqZWN0ZWRpdG9yJywgZGF0YTogc2VsZWN0ZWRPYmplY3RFZGl0b3IgfVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTpzdXJ2ZXlWZXJicy5rb0hhc1ZlcmJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAnb2JqZWN0dmVyYnMnLCBkYXRhOiBzdXJ2ZXlWZXJicyB9XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gJ2VkaXRvcidcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAnanNvbmVkaXRvcicsIGRhdGE6IGpzb25FZGl0b3IgfVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgaWQ9XFxcInN1cnZleWpzVGVzdFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gJ3Rlc3QnLCBzdHlsZToge3dpZHRoOiBrb1Rlc3RTdXJ2ZXlXaWR0aH1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInN1cnZleWpzRXhhbXBsZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNFeGFtcGxlUmVzdWx0c1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwic3VydmV5anNFeGFtcGxlcmVSdW5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0VGVzdENsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLnRlc3RTdXJ2ZXlBZ2FpbicpXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lXFxcIj5UZXN0IEFnYWluPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgaWQ9XFxcInN1cnZleWpzRW1iZWRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29WaWV3VHlwZSgpID09ICdlbWJlZCdcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAnc3VydmV5ZW1iZWRpbmcnLCBkYXRhOiBzdXJ2ZXlFbWJlZGluZyB9XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdxdWVzdGlvbmVkaXRvcicsIGRhdGE6IHF1ZXN0aW9uRWRpdG9yV2luZG93IH1cXFwiPjwvZGl2PlxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9pbmRleC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJqc29uZWRpdG9yXFxcIj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICFoYXNBY2VFZGl0b3JcXFwiPlxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJzdmRfanNvbl9lZGl0b3JfYXJlYVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0SW5wdXQ6a29UZXh0XFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0Vycm9ycyAtLT5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPHNwYW4+RXJyb3I6IDwvc3Bhbj48c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IHRleHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBpZD1cXFwic3VydmV5anNKU09ORWRpdG9yXFxcIiBjbGFzcz1cXFwic3ZkX2pzb25fZWRpdG9yXFxcIj48L2Rpdj5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvanNvbmVkaXRvci5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJvYmplY3RlZGl0b3JcXFwiPlxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHN2ZF90YWJsZS1ub3dyYXBcXFwiPlxcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cXFwiZm9yZWFjaDoga29Qcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5jaGFuZ2VBY3RpdmVQcm9wZXJ0eSgkZGF0YSksIGNzczogeydhY3RpdmUnOiAkcGFyZW50LmtvQWN0aXZlUHJvcGVydHkoKSA9PSAkZGF0YX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBkaXNwbGF5TmFtZSwgYXR0cjoge3RpdGxlOiB0aXRsZX1cXFwiIHdpZHRoPVxcXCI1MCVcXFwiPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cXFwiNTAlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDoga29UZXh0LCB2aXNpYmxlOiAkcGFyZW50LmtvQWN0aXZlUHJvcGVydHkoKSAhPSAkZGF0YSB8fCBkaXNhYmxlZCwgYXR0cjoge3RpdGxlOiBrb1RleHR9XFxcIiBzdHlsZT1cXFwidGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTogJHBhcmVudC5rb0FjdGl2ZVByb3BlcnR5KCkgPT0gJGRhdGEgJiYgIWRpc2FibGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci0nICsgZWRpdG9yVHlwZSwgZGF0YTogJGRhdGEgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3Rib2R5PlxcbiAgICA8L3RhYmxlPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9vYmplY3RlZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwib2JqZWN0dmVyYnNcXFwiPlxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGtvVmVyYnMgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OnRleHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IGtvSXRlbXMsIG9wdGlvbnNUZXh0OiAndGV4dCcsIG9wdGlvbnNWYWx1ZTondmFsdWUnLCB2YWx1ZToga29TZWxlY3RlZEl0ZW1cXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwhLS0gL2tvICAtLT5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvb2JqZWN0dmVyYnMuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicGFnZWVkaXRvclxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIiBkYXRhLWJpbmQ9XFxcInRhYnM6dHJ1ZVxcXCI+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvUGFnZXMgLS0+XFxuICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJjc3M6IHthY3RpdmU6IGtvU2VsZWN0ZWQoKX0sZXZlbnQ6e1xcbiAgICAgICAgICAga2V5ZG93bjpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQua2V5RG93bihlbCwgZSk7IH0sXFxuICAgICAgICAgICBkcmFnc3RhcnQ6ZnVuY3Rpb24oZWwsIGUpeyAkcGFyZW50LmRyYWdTdGFydChlbCk7IHJldHVybiB0cnVlOyB9LFxcbiAgICAgICAgICAgZHJhZ292ZXI6ZnVuY3Rpb24oZWwsIGUpeyAkcGFyZW50LmRyYWdPdmVyKGVsKTt9LFxcbiAgICAgICAgICAgZHJhZ2VuZDpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQuZHJhZ0VuZCgpO30sXFxuICAgICAgICAgICBkcm9wOmZ1bmN0aW9uKGVsLCBlKXsgJHBhcmVudC5kcmFnRHJvcChlbCk7fVxcbiAgICAgICAgIH1cXFwiPiBcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwic3ZkX3BhZ2VfbmF2XFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiRwYXJlbnQuc2VsZWN0UGFnZUNsaWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHN2ZF9hZGRfbmV3X3BhZ2VfYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOmFkZE5ld1BhZ2VDbGljaywgYXR0cjoge3RpdGxlOiAgJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5hZGROZXdQYWdlJyl9XFxcIiA+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPjwvbGk+XFxuICAgIDwvdWw+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3BhZ2VlZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItYm9vbGVhblxcXCI+XFxuICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb1ZhbHVlXFxcIiAvPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItYm9vbGVhbi5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1kcm9wZG93blxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbS1zZWxlY3RcXFwiPlxcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBrb1ZhbHVlLCBvcHRpb25zOiBjaG9pY2VzXFxcIiAgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiPjwvc2VsZWN0PlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWRyb3Bkb3duLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWV4cHJlc3Npb25cXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtZXhwcmVzc2lvblxcXCI+XFxuICAgIDxkaXY+XFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgcm93cz1cXFwiOFxcXCIgYXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6JHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5leHByZXNzaW9uSGVscCcpXFxcIiBzdHlsZT1cXFwid2hpdGUtc3BhY2U6bm9ybWFsXFxcIj48L3NwYW4+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZXhwcmVzc2lvbi5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1odG1sXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcblxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LWh0bWxcXFwiPlxcbiAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgcm93cz1cXFwiMTBcXFwiIGF1dG9mb2N1cz1cXFwiYXV0b2ZvY3VzXFxcIj48L3RleHRhcmVhPlxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItaHRtbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBjbGFzcz1cXFwiYnRuLXhzXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LWl0ZW12YWx1ZXNcXFwiPlxcbiAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOjNweFxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4teHNcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7J2J0biBidG4tcHJpbWFyeSc6a29BY3RpdmVWaWV3KCkgPT0gJ2Zvcm0nLCAnYnRuLWxpbmsnOmtvQWN0aXZlVmlldygpICE9ICdmb3JtJ30sIGNsaWNrOmNoYW5nZVRvRm9ybVZpZXdDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5mb3JtRW50cnknKVxcXCI+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4teHNcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7J2J0biBidG4tcHJpbWFyeSc6a29BY3RpdmVWaWV3KCkgIT0gJ2Zvcm0nLCAnYnRuLWxpbmsnOmtvQWN0aXZlVmlldygpID09ICdmb3JtJ30sIGNsaWNrOmNoYW5nZVRvVGV4dFZpZXdDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5mYXN0RW50cnknKVxcXCI+PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0FjdGl2ZVZpZXcoKSA9PSAnZm9ybSdcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdy15OiBhdXRvOyBvdmVyZmxvdy14OmhpZGRlbjsgbWF4LWhlaWdodDo0MDBweDttaW4taGVpZ2h0OjIwMHB4XFxcIj5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiID5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS52YWx1ZScpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50ZXh0JylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIiByb2xlPVxcXCJncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAkaW5kZXgoKSA+IDAsIGNsaWNrOiAkcGFyZW50Lm9uTW92ZVVwQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4teHNcXFwiIHN0eWxlPVxcXCJmbG9hdDpub25lXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICRpbmRleCgpIDwgJHBhcmVudC5rb0l0ZW1zKCkubGVuZ3RoIC0gMSwgY2xpY2s6ICRwYXJlbnQub25Nb3ZlRG93bkNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MjAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyIG5vLXBhZGRpbmdcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNFcnJvciwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5lbnRlck5ld1ZhbHVlJylcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1RleHRcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyMDBweFxcXCIgLz48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBidG4tdG9vbGJhclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvQWN0aXZlVmlldygpID09ICdmb3JtJ1xcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hZGROZXcnKVxcXCIgLz5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25DbGVhckNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5yZW1vdmVBbGwnKVxcXCIgLz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvQWN0aXZlVmlldygpICE9ICdmb3JtJ1xcXCI+XFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0SW5wdXQ6IGtvSXRlbXNUZXh0XFxcIiBzdHlsZT1cXFwib3ZlcmZsb3cteTogYXV0bzsgb3ZlcmZsb3cteDpoaWRkZW47IG1heC1oZWlnaHQ6NDAwcHg7IG1pbi1oZWlnaHQ6MjUwcHg7IHdpZHRoOjEwMCVcXFwiPjwvdGV4dGFyZWE+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItaXRlbXZhbHVlcy5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1tYXRyaXhkcm9wZG93bmNvbHVtbnNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtbWF0cml4ZHJvcGRvd25jb2x1bW5zXFxcIj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb0lzTGlzdFxcXCI+XFxuICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnJlcXVpcmVkJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuY2VsbFR5cGUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5uYW1lJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudGl0bGUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IGtvSXNSZXF1aXJlZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvQ2FuRWRpdCwgY2xpY2s6ICRwYXJlbnQub25FZGl0SXRlbUNsaWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IGNlbGxUeXBlQ2hvaWNlcywgdmFsdWU6IGtvQ2VsbFR5cGVcXFwiICBzdHlsZT1cXFwid2lkdGg6MTEwcHhcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb05hbWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlciBuby1wYWRkaW5nXFxcIiByb2xlPVxcXCJhbGVydFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvSGFzRXJyb3IsIHRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuZW50ZXJOZXdWYWx1ZScpXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVGl0bGVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMjBweFxcXCIgLz48L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQub25EZWxldGVDbGlja1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+PC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XFxcIjNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGJ0bi10b29sYmFyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hZGROZXcnKVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25DbGVhckNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5yZW1vdmVBbGwnKVxcXCJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90Ym9keT5cXG4gICAgPC90YWJsZT5cXG4gICAgIDwhLS0ga28gaWY6ICFrb0lzTGlzdCgpIC0tPlxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwicGFkZGluZzogNXB4XFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25DYW5jZWxFZGl0SXRlbUNsaWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IGtvRWRpdEl0ZW0oKS5rb0VkaXRvck5hbWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXFwicXVlc3Rpb25lZGl0b3ItY29udGVudFxcXCIsIGRhdGE6IGNvbHVtbkVkaXRvciB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbWF0cml4ZHJvcGRvd25jb2x1bW5zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLW1vZGFsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTohZWRpdG9yLmlzRWRpdGFibGVcXFwiPlxcbiAgICAgICAgPGEgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImF0dHI6IHsnZGF0YS10YXJnZXQnIDogbW9kYWxOYW1lVGFyZ2V0fVxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBrb1RleHRcXFwiPjwvc3Bhbj48L2E+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMnB4O1xcXCIgZGF0YS1iaW5kPVxcXCJhdHRyOiB7J2RhdGEtdGFyZ2V0JyA6IG1vZGFsTmFtZVRhcmdldH1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmVkaXRvci5pc0VkaXRhYmxlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTp0YWJsZVxcXCI+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6dGFibGUtY2VsbDsgd2lkdGg6MTAwJVxcXCIgLz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OnRhYmxlLWNlbGw7IHBhZGRpbmc6IDJweDtcXFwiICBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtYmluZD1cXFwiYXR0cjogeydkYXRhLXRhcmdldCcgOiBtb2RhbE5hbWVUYXJnZXR9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcImF0dHI6IHtpZCA6IG1vZGFsTmFtZX1cXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDplZGl0b3IudGl0bGVcXFwiPjwvaDQ+XFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHkgc3ZkX25vdG9wYm90dG9tcGFkZGluZ3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3Jjb250ZW50LScgKyBlZGl0b3JUeXBlLCBkYXRhOiBlZGl0b3IgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGVkaXRvci5vbkFwcGx5Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFwcGx5JylcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGVkaXRvci5vbkFwcGx5Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLm9rJylcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGVkaXRvci5vblJlc2V0Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmNhbmNlbCcpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbW9kYWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItbnVtYmVyXFxcIj5cXG4gICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIC8+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1udW1iZXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItcmVzdGZ1bGxcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtcmVzdGZ1bGxcXFwiPlxcbiAgICA8Zm9ybT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVybFxcXCI+VXJsOjwvbGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ1cmxcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29VcmxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhdGhcXFwiPlBhdGg6PC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhdGhcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29QYXRoXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWx1ZU5hbWVcXFwiPnZhbHVlTmFtZTo8L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidmFsdWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0aXRsZU5hbWVcXFwiPnRpdGxlTmFtZTo8L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidGl0bGVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVGl0bGVOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0aXRsZU5hbWVcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRlc3RTZXJ2aWNlJylcXFwiPjwvc3Bhbj48L2xhYmVsPlxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBxdWVzdGlvbi5rb1Zpc2libGVDaG9pY2VzLCBvcHRpb25zVGV4dDogJ3RleHQnLCBvcHRpb25zVmFsdWU6ICd2YWx1ZScsIG9wdGlvbnNDYXB0aW9uOiBxdWVzdGlvbi5vcHRpb25zQ2FwdGlvblxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9mb3JtPlxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItcmVzdGZ1bGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Itc3RyaW5nXFxcIj5cXG4gICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiAvPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3Itc3RyaW5nLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXRleHRcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdGV4dFxcXCI+XFxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiByb3dzPVxcXCIxMFxcXCIgYXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiPjwvdGV4dGFyZWE+XFxuPC9zY3JpcHQ+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10ZXh0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXRleHRpdGVtc1xcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC10ZXh0aXRlbXNcXFwiPlxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxuICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmlzUmVxdWlyZWQnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5uYW1lJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudGl0bGUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb0lzUmVxdWlyZWRcXFwiIC8+PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvTmFtZVxcXCIgc3R5bGU9XFxcIndpZHRoOjE4MHB4XFxcIiAvPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1RpdGxlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTgwcHhcXFwiIC8+PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCI0XFxcIj48aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hZGROZXcnKVxcXCIvPjwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10ZXh0aXRlbXMuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItdHJpZ2dlcnNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdHJpZ2dlcnNcXFwiPlxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbToxMHB4XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhdmFpbGFibGVUcmlnZ2VycyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkFkZENsaWNrKCRkYXRhKVxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogJ2tvVGV4dCcsIHZhbHVlOiBrb1NlbGVjdGVkXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvU2VsZWN0ZWQoKSA9PSBudWxsXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1F1ZXN0aW9ucygpLmxlbmd0aCA9PSAwLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLm5vcXVlc3Rpb25zJylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvUXVlc3Rpb25zKCkubGVuZ3RoID4gMCwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jcmVhdGV0cmlnZ2VyJylcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ3aXRoOiBrb1NlbGVjdGVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbToxMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgIGZvcm0taW5saW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlck9uJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6JHBhcmVudC5rb1F1ZXN0aW9ucywgdmFsdWU6IGtvTmFtZVxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczphdmFpbGFibGVPcGVyYXRvcnMsIG9wdGlvbnNWYWx1ZTogJ25hbWUnLCBvcHRpb25zVGV4dDogJ3RleHQnLCB2YWx1ZTprb09wZXJhdG9yXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvUmVxdWlyZVZhbHVlLCB2YWx1ZTprb1ZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09ICd2aXNpYmxldHJpZ2dlcicgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTYgY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcycsIGRhdGE6IHBhZ2VzIH0gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy02IGNvbC1zbS02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMnLCBkYXRhOiBxdWVzdGlvbnMgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8IS0tIGtvIGlmOiBrb1R5cGUoKSA9PSAnY29tcGxldGV0cmlnZ2VyJyAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbjogMTBweFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRyaWdnZXJDb21wbGV0ZVRleHQnKVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPCEtLSBrbyBpZjoga29UeXBlKCkgPT0gJ3NldHZhbHVldHJpZ2dlcicgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VyU2V0VG9OYW1lJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb3NldFRvTmFtZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VyU2V0VmFsdWUnKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvc2V0VmFsdWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb2lzVmFyaWFibGVcXFwiIC8+IDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VySXNWYXJpYWJsZScpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy04IGNvbC1zbS04XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgbm8tbWFyZ2lucyBuby1wYWRkaW5nXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MTBweFxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczprb0Nob29zZW4sIHZhbHVlOiBrb0Nob29zZW5TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCIgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOnRvcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29DaG9vc2VuU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1xcXCIgY2xhc3M9XFxcImJ0blxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6NXB4XFxcIj5cXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczprb09iamVjdHMsIHZhbHVlOiBrb1NlbGVjdGVkXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uQWRkQ2xpY2tcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXZhbGlkYXRvcnNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdmFsaWRhdG9yc1xcXCI+XFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGUgaW5wdXQtZ3JvdXAtYWRkb25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhdmFpbGFibGVWYWxpZGF0b3JzIC0tPlxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkFkZENsaWNrKCRkYXRhKVxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDwhLS0gL2tvICAtLT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogJ3RleHQnLCB2YWx1ZToga29TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkRlbGV0ZUNsaWNrXFxcIiBjbGFzcz1cXFwiYnRuXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAnb2JqZWN0ZWRpdG9yJywgZGF0YTogc2VsZWN0ZWRPYmplY3RFZGl0b3IgfVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci12YWxpZGF0b3JzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInF1ZXN0aW9uZWRpdG9yLWNvbnRlbnRcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCIgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBrb1RhYnNcXFwiPlxcbiAgICAgICAgPGxpIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHthY3RpdmU6ICRwYXJlbnQua29BY3RpdmVUYWIoKSA9PSAkZGF0YS5uYW1lfSwgY2xpY2s6ICRwYXJlbnQub25UYWJDbGlja1xcXCI+PGE+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhLnRpdGxlXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgIDwvdWw+ICAgICAgICAgICAgICAgXFxuICAgIDwhLS0ga28gZm9yZWFjaDoga29UYWJzIC0tPlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTokcGFyZW50LmtvQWN0aXZlVGFiKCkgPT0gJGRhdGEubmFtZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6NXB4XFxcIj5cXG4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJGRhdGEuaHRtbFRlbXBsYXRlLCBkYXRhOiAkZGF0YS50ZW1wbGF0ZU9iamVjdCB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tIC9rbyAgLS0+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvci1jb250ZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInF1ZXN0aW9uZWRpdG9yXFxcIj5cXG4gICAgPGRpdiBpZD1cXFwic3VydmV5cXVlc3Rpb25lZGl0b3J3aW5kb3dcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiZGF0YS1iaW5kPVxcXCJ3aXRoOmtvRWRpdG9yXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj4mdGltZXM7PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6a29UaXRsZVxcXCI+PC9oND5cXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keSBzdmRfbm90b3Bib3R0b21wYWRkaW5nc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcXCJxdWVzdGlvbmVkaXRvci1jb250ZW50XFxcIiwgZGF0YTogJGRhdGEgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQXBwbHlDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUuYXBwbHknKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25Pa0NsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5vaycpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvblJlc2V0Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmNhbmNlbCcpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbFxcXCI+XFxuICAgIDxkaXY+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHByb3BlcnRpZXMucm93cyAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogcHJvcGVydGllcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0hhc0Vycm9yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5FcnJvcjo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGRhdGEtYmluZD1cXFwidGV4dDprb0Vycm9yVGV4dFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSAhPSAnY2hlY2snIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLWJpbmQ9XFxcInRleHQ6dGl0bGVcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICd0ZXh0JyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZSwgZGlzYWJsZTogZGlzYWJsZWRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICd0ZXh0YXJlYScgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XFxcInRleHRcXFwiIHJvd3M9XFxcIjJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIGRpc2FibGU6IGRpc2FibGVkXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAnY2hlY2snIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb1ZhbHVlLCBkaXNhYmxlOiBkaXNhYmxlZFxcXCI+PGxhYmVsIGRhdGEtYmluZD1cXFwidGV4dDp0aXRsZVxcXCI+PC9sYWJlbD48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICdkcm9wZG93bicgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZSwgb3B0aW9uczogY2hvaWNlcywgZGlzYWJsZTogZGlzYWJsZWRcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJzdXJ2ZXllbWJlZGluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8c2VsZWN0IGRhdGEtYmluZD1cXFwidmFsdWU6a29MaWJyYXJ5VmVyc2lvblxcXCI+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYW5ndWxhclxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LmFuZ3VsYXInKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwianF1ZXJ5XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuanF1ZXJ5JylcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImtub2Nrb3V0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcua25vY2tvdXQnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicmVhY3RcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5yZWFjdCcpXFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ2dWVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy52dWUnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDxzZWxlY3QgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1NjcmlwdFVzaW5nXFxcIj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJib290c3RyYXBcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5ib290c3RyYXAnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwic3RhbmRhcmRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5zdGFuZGFyZCcpXFxcIj48L29wdGlvbj5cXG4gICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvU2hvd0FzV2luZG93XFxcIj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJwYWdlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuc2hvd09uUGFnZScpXFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ3aW5kb3dcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5zaG93SW5XaW5kb3cnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2hlY2tib3gtaW5saW5lXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNJZHNcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOmtvTG9hZFN1cnZleVxcXCIgLz5cXG4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcubG9hZEZyb21TZXJ2ZXInKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9sYWJlbD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy50aXRsZVNjcmlwdCcpXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmhhc0FjZUVkaXRvclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5RW1iZWRpbmdIZWFkXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjcwcHg7d2lkdGg6MTAwJVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWhhc0FjZUVkaXRvciwgdGV4dDoga29IZWFkVGV4dFxcXCIgc3R5bGU9XFxcImhlaWdodDo3MHB4O3dpZHRoOjEwMCVcXFwiPjwvdGV4dGFyZWE+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1Zpc2libGVIdG1sXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiICBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudGl0bGVIdG1sJylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6aGFzQWNlRWRpdG9yXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlFbWJlZGluZ0JvZHlcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MzBweDt3aWR0aDoxMDAlXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHRleHRhcmVhIGRhdGEtYmluZD1cXFwidmlzaWJsZTohaGFzQWNlRWRpdG9yLCB0ZXh0OiBrb0JvZHlUZXh0XFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjMwcHg7d2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiICBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudGl0bGVKYXZhU2NyaXB0JylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6aGFzQWNlRWRpdG9yXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlFbWJlZGluZ0phdmFcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MzAwcHg7d2lkdGg6MTAwJVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWhhc0FjZUVkaXRvciwgdGV4dDoga29KYXZhVGV4dFxcXCIgc3R5bGU9XFxcImhlaWdodDozMDBweDt3aWR0aDoxMDAlXFxcIj48L3RleHRhcmVhPlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvc3VydmV5ZW1iZWRpbmcuaHRtbFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiICsgcmVxdWlyZSgnLi9pbmRleC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9qc29uZWRpdG9yLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL29iamVjdGVkaXRvci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9vYmplY3R2ZXJicy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wYWdlZWRpdG9yLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3N1cnZleWVtYmVkaW5nLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3ItY29udGVudC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItYm9vbGVhbi5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZHJvcGRvd24uaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWh0bWwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWV4cHJlc3Npb24uaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWl0ZW12YWx1ZXMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1ucy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbW9kYWwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW51bWJlci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItcmVzdGZ1bGwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXN0cmluZy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dGl0ZW1zLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdmFsaWRhdG9ycy5odG1sJykgKyBcIlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSEuL34vdmFsLWxvYWRlciEuL3NyYy90ZW1wbGF0ZXMvZW50cnkuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVRleHRXb3JrZXJ9IGZyb20gXCIuL3RleHRXb3JrZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlKU09ORWRpdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVRleHRUaW1lb3V0OiBudW1iZXIgPSAxMDAwO1xuXG4gICAgcHJpdmF0ZSBpc1Byb2Nlc3NpbmdJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYWNlRWRpdG9yOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwcml2YXRlIHRleHRXb3JrZXI6IFN1cnZleVRleHRXb3JrZXI7XG4gICAga29UZXh0OiBhbnk7XG4gICAga29FcnJvcnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtvVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29FcnJvcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvVGV4dC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBzZWxmLm9uSnNvbkVkaXRvckNoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzQWNlRWRpdG9yKSByZXR1cm47XG4gICAgICAgIHRoaXMuYWNlRWRpdG9yID0gYWNlLmVkaXQoXCJzdXJ2ZXlqc0pTT05FZGl0b3JcIik7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy9UT0RPIGFkZCBldmVudCB0byBjaGFuZ2UgYWNlIHRoZW1lIGFuZCBtb2RlXG4gICAgICAgIC8vdGhpcy5hY2VFZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvbW9ub2thaVwiKTtcbiAgICAgICAgLy90aGlzLmFjZUVkaXRvci5zZXNzaW9uLnNldE1vZGUoXCJhY2UvbW9kZS9qc29uXCIpO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5zZXRTaG93UHJpbnRNYXJnaW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5nZXRTZXNzaW9uKCkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkpzb25FZGl0b3JDaGFuZ2VkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5nZXRTZXNzaW9uKCkuc2V0VXNlV29ya2VyKHRydWUpO1xuICAgICAgICBTdXJ2ZXlUZXh0V29ya2VyLm5ld0xpbmVDaGFyID0gdGhpcy5hY2VFZGl0b3Iuc2Vzc2lvbi5kb2MuZ2V0TmV3TGluZUNoYXJhY3RlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhhc0FjZUVkaXRvcigpOiBib29sZWFuIHsgcmV0dXJuIHR5cGVvZiBhY2UgIT09IFwidW5kZWZpbmVkXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjZUVkaXRvcikgcmV0dXJuIHRoaXMua29UZXh0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjZUVkaXRvci5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb1RleHQodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5hY2VFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuYWNlRWRpdG9yLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuYWNlRWRpdG9yLnJlbmRlcmVyLnVwZGF0ZUZ1bGwodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9jZXNzSnNvbih2YWx1ZSk7XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHkgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIHNob3codmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuYWNlRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmFjZUVkaXRvci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNKc29uQ29ycmVjdCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodGhpcy50ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFdvcmtlci5pc0pzb25Db3JyZWN0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMudGV4dFdvcmtlci5zdXJ2ZXk7IH1cbiAgICBwcml2YXRlIHRpbWVvdXRJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBvbkpzb25FZGl0b3JDaGFuZ2VkKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCA+IC0xKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXRJZCA9IC0xO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0pzb24oc2VsZi50ZXh0KTtcbiAgICAgICAgICAgIH0sIFN1cnZleUpTT05FZGl0b3IudXBkYXRlVGV4dFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcHJvY2Vzc0pzb24odGV4dDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodGV4dCk7XG4gICAgICAgIGlmICh0aGlzLmFjZUVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5hY2VFZGl0b3IuZ2V0U2Vzc2lvbigpLnNldEFubm90YXRpb25zKHRoaXMuY3JlYXRlQW5ub3RhdGlvbnModGV4dCwgdGhpcy50ZXh0V29ya2VyLmVycm9ycykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rb0Vycm9ycyh0aGlzLnRleHRXb3JrZXIuZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUFubm90YXRpb25zKHRleHQ6IHN0cmluZywgZXJyb3JzOiBhbnlbXSk6IEFjZUFqYXguQW5ub3RhdGlvbltdIHtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gbmV3IEFycmF5PEFjZUFqYXguQW5ub3RhdGlvbj4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9yc1tpXTtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uOiBBY2VBamF4LkFubm90YXRpb24gPSB7IHJvdzogZXJyb3IucG9zaXRpb24uc3RhcnQucm93LCBjb2x1bW46IGVycm9yLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbiwgdGV4dDogZXJyb3IudGV4dCwgdHlwZTogXCJlcnJvclwiIH07XG4gICAgICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleUpTT05FZGl0b3IudHMiLCIvLyBzdHlsZXNcbmltcG9ydCBcIi4uL21haW4uc2Nzc1wiO1xuXG5leHBvcnQgbGV0IFZlcnNpb246IHN0cmluZztcblZlcnNpb24gPSBgJHtwcm9jZXNzLmVudi5WRVJTSU9OfWA7XG5cbmltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5nbG9iYWxbXCJqUXVlcnlcIl0gPSBqUXVlcnk7XG5pbXBvcnQgXCJib290c3RyYXBcIjtcblxuZXhwb3J0IHtEcmFnRHJvcEhlbHBlcn0gZnJvbSBcIi4uL2RyYWdkcm9waGVscGVyXCI7XG5leHBvcnQge1xuICAgIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSwgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IsXG4gICAgU3VydmV5RHJvcGRvd25Qcm9wZXJ0eUVkaXRvciwgU3VydmV5Qm9vbGVhblByb3BlcnR5RWRpdG9yLCBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvclxufSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRleHRJdGVtc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eURyb3Bkb3duQ29sdW1uc0VkaXRvciwgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtfVxuICAgIGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5UmVzdWx0ZnVsbEVkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVJlc3RmdWxsRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5VHJpZ2dlcnNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleU9iamVjdHN9IGZyb20gXCIuLi9zdXJ2ZXlPYmplY3RzXCI7XG5cbmV4cG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5cbmV4cG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllcywgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eX0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzXCI7XG5leHBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckRlZmluaXRpb25cIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvciwgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJHZW5lcmFsLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYlByb3BlcnR5fSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yXCI7XG5cbmV4cG9ydCB7UXVlc3Rpb25Ub29sYm94fSBmcm9tIFwiLi4vcXVlc3Rpb25Ub29sYm94XCI7XG5leHBvcnQge1N1cnZleU9iamVjdFByb3BlcnR5fSBmcm9tIFwiLi4vb2JqZWN0UHJvcGVydHlcIjtcbmV4cG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVBhZ2VzRWRpdG9yfSBmcm9tIFwiLi4vcGFnZXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5VGV4dFdvcmtlcn0gZnJvbSBcIi4uL3RleHRXb3JrZXJcIjtcbmV4cG9ydCB7T2JqVHlwZSwgU3VydmV5SGVscGVyfSBmcm9tIFwiLi4vc3VydmV5SGVscGVyXCI7XG5leHBvcnQge1N1cnZleUVtYmVkaW5nV2luZG93fSBmcm9tIFwiLi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcbmV4cG9ydCB7U3VydmV5VmVyYnMsIFN1cnZleVZlcmJJdGVtLCBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0sIFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbX0gZnJvbSBcIi4uL29iamVjdFZlcmJzXCI7XG5leHBvcnQge1N1cnZleVVuZG9SZWRvLCBVbmRvUmVkb0l0ZW19IGZyb20gXCIuLi91bmRvcmVkb1wiO1xuZXhwb3J0IHtTdXJ2ZXlGb3JEZXNpZ25lcn0gZnJvbSBcIi4uL3N1cnZleWpzT2JqZWN0c1wiXG5leHBvcnQge1N1cnZleUVkaXRvcn0gZnJvbSBcIi4uL2VkaXRvclwiO1xuXG4vL2VkaXRvckxvY2FsaXphdGlvblxuaW1wb3J0ICcuLi9sb2NhbGl6YXRpb24vZnJlbmNoJztcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9