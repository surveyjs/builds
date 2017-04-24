(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("survey-knockout"), require("jquery"), require("bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyEditor", ["knockout", "survey-knockout", "jquery", "bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["SurveyEditor"] = factory(require("knockout"), require("survey-knockout"), require("jquery"), require("bootstrap"));
	else
		root["SurveyEditor"] = factory(root["ko"], root["Survey"], root["jQuery"], root["bootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_36__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
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
        itemEdit: "Edit item: {0}",
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
            multipleTextItems: "Text Inputs",
            validators: "Validators"
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
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "locale", {
        get: function () {
            if (this.onGetLocale)
                return this.onGetLocale();
            return "";
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__ = __webpack_require__(9);
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
/* 7 */
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
        if (property["getPropertyValue"])
            return property["getPropertyValue"](this.obj); //TODO make the only call
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
        var self = _this;
        _this.propertyEditorValue.onGetLocale = function () { return self.doOnGetLocale(); };
        _this.propertyEditorValue.value = _this.getValue(_this.property);
        return _this;
    }
    SurveyQuestionEditorTabProperty.prototype.doOnGetLocale = function () {
        if (this.obj && this.obj["getLocale"])
            return this.obj["getLocale"]();
        return "";
    };
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objectProperty__ = __webpack_require__(14);
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
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyNestedPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyNestedPropertyEditorItem; });



var SurveyNestedPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyNestedPropertyEditor, _super);
    function SurveyNestedPropertyEditor() {
        var _this = _super.call(this) || this;
        var self = _this;
        _this.koEditItem = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koIsList = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        _this.koEditItem.subscribe(function (newValue) {
            self.koIsList(self.koEditItem() == null);
        });
        _this.onEditItemClick = function (item) { self.koEditItem(item); };
        _this.onCancelEditItemClick = function () {
            var editItem = self.koEditItem();
            if (editItem.itemEditor && editItem.itemEditor.hasError())
                return;
            self.koEditItem(null);
        };
        return _this;
    }
    SurveyNestedPropertyEditor.prototype.hasError = function () {
        var result = false;
        for (var i = 0; i < this.koItems().length; i++) {
            result = result || this.koItems()[i].hasError();
        }
        return result;
    };
    SurveyNestedPropertyEditor.prototype.onBeforeApply = function () {
        _super.prototype.onBeforeApply.call(this);
        var internalItems = this.koItems();
        for (var i = 0; i < internalItems.length; i++) {
            internalItems[i].apply();
        }
    };
    return SurveyNestedPropertyEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyNestedPropertyEditorItem = (function () {
    function SurveyNestedPropertyEditorItem() {
    }
    Object.defineProperty(SurveyNestedPropertyEditorItem.prototype, "itemEditor", {
        get: function () {
            if (!this.itemEditorValue)
                this.itemEditorValue = this.createSurveyQuestionEditor();
            return this.itemEditorValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyNestedPropertyEditorItem.prototype.hasError = function () {
        if (this.itemEditorValue && this.itemEditorValue.hasError())
            return true;
        return false;
    };
    SurveyNestedPropertyEditorItem.prototype.createSurveyQuestionEditor = function () { return null; };
    SurveyNestedPropertyEditorItem.prototype.apply = function () {
        if (this.itemEditorValue)
            this.itemEditorValue.apply();
    };
    return SurveyNestedPropertyEditorItem;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json5__ = __webpack_require__(12);
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
/* 12 */
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
/* 13 */
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
        //console.log("dest: " + destination.name + ", isBottom:" + isBottom + ", isEdge:" + isEdge);
        isEdge = isEdge || !destination.isPanel;
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
            if (panel.parent && (isEdge || this.target.isPanel)) {
                parent = panel.parent;
            }
            return { panel: parent, row: null, rIndex: 0, elIndex: 0, element: panel };
        }
        var rows = panel["koRows"]();
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var elements = row["koElements"]();
            for (var j = 0; j < elements.length; j++) {
                if (elements[j].isPanel) {
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
        this.prevCoordinates = { x: -1, y: -1 };
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
        if (this.isSameCoordinates(event))
            return;
        this.checkScrollY(event);
        if (!element || !this.isSurveyDragging(event) || this.isSamePlace(event, element))
            return;
        var bottomInfo = this.isBottom(event, element);
        isEdge = element.isPanel ? isEdge && bottomInfo.isEdge : true;
        if (element.isPanel && !isEdge && element.elements.length > 0)
            return;
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
            if (this.onModifiedCallback)
                this.onModifiedCallback();
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
    DragDropHelper.prototype.isSameCoordinates = function (event) {
        var res = Math.abs(event.pageX - this.prevCoordinates.x) > 5 || Math.abs(event.pageY - this.prevCoordinates.y) > 5;
        if (res) {
            this.prevCoordinates.x = event.pageX;
            this.prevCoordinates.y = event.pageY;
        }
        return !res;
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
        this.prevCoordinates.x = -1;
        this.prevCoordinates.y = -1;
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
/* 14 */
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
        this.editor.onGetLocale = this.doOnGetLocale;
        this.editor.options = propertyEditorOptions;
        this.editorType = this.editor.editorType;
        this.modalName = "modelEditor" + this.editorType + this.name;
        this.modalNameTarget = "#" + this.modalName;
        this.koValue.subscribe(function (newValue) { self.onkoValueChanged(newValue); });
        this.koText = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.getValueText(self.koValue()); });
        this.koIsDefault = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.property.isDefaultValue(self.koValue()); });
    }
    SurveyObjectProperty.prototype.doOnGetLocale = function () {
        if (this.object && this.object["getLocale"])
            return this.object.getLocale();
        return "";
    };
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
        if (this.property["getPropertyValue"])
            return this.property["getPropertyValue"](this.object); //TODO make the only call
        if (this.property.hasToUseGetValue)
            return this.property.getValue(this.object);
        return this.object[this.name];
    };
    SurveyObjectProperty.prototype.getValueText = function (value) { return this.editor.getValueText(value); };
    return SurveyObjectProperty;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyHelper__ = __webpack_require__(5);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(5);
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
        properties: ["inputType", "placeHolder"],
        tabs: [{ name: "validators", index: 10 }]
    },
    "matrixdropdowncolumn@comment": {
        properties: ["placeHolder"],
        tabs: [{ name: "validators", index: 10 }]
    },
    "multipletextitem": {
        properties: ["inputType", "placeHolder"],
        tabs: [{ name: "validators", index: 10 }]
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
        if (this.property["getPropertyValue"])
            return this.property["getPropertyValue"](this.obj); //TODO make the only call
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json5__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEmbedingWindow; });



var SurveyEmbedingWindow = (function () {
    function SurveyEmbedingWindow() {
        this.surveyId = null;
        this.surveyPostId = null;
        this.generateValidJSON = false;
        this.surveyJSVersion = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["Version"];
        this.surveyCDNPath = "https://surveyjs.azureedge.net/";
        this.platformSurveyJSPrefix = {
            "angular": "angular",
            "jquery": "jquery",
            "knockout": "ko",
            "react": "react",
            "vue": "vue"
        };
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
        return new __WEBPACK_IMPORTED_MODULE_2__json5__["a" /* SurveyJSON5 */]().stringify(this.json);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(5);
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
            this.selectObject(null);
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
        this.selectObject(this.survey);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectEditor__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagesEditor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyEmbedingWindow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyObjects__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objectVerbs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionEditors_questionEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__textWorker__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__undoredo__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionToolbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__json5__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__surveyjsObjects__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEditor; });















var templateEditorHtml = __webpack_require__(64);


var SurveyEditor = (function () {
    function SurveyEditor(renderedElement, options) {
        if (renderedElement === void 0) { renderedElement = null; }
        if (options === void 0) { options = null; }
        var _this = this;
        this.stateValue = "";
        this.dragDropHelper = null;
        this.select2 = null;
        this.surveyId = null;
        this.surveyPostId = null;
        this.alwaySaveTextInPropertyEditors = false;
        this.onCanShowProperty = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onQuestionAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onPanelAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onModified = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.koAutoSave = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koShowState = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koState = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.toolbarItems = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.saveNo = 0;
        this.koShowOptions = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koGenerateValidJSON = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
        this.koDesignerHeight = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.setOptions(options);
        this.koCanDeleteObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        var self = this;
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
        this.toolbarItems.push({
            id: 'svd-undo',
            visible: this.koIsShowDesigner,
            enabled: this.undoRedo.koCanUndo,
            action: this.doUndoClick,
            title: this.getLocString('ed.undo')
        });
        this.toolbarItems.push({
            id: 'svd-redo',
            visible: this.koIsShowDesigner,
            enabled: this.undoRedo.koCanRedo,
            action: this.doRedoClick,
            title: this.getLocString('ed.redo')
        });
        this.toolbarItems.push({
            id: 'svd-options',
            visible: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.koIsShowDesigner() && _this.koShowOptions(); }),
            title: this.getLocString('ed.options'),
            template: 'svd-toolbar-options',
            items: __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]([
                { id: 'svd-valid-json', visible: true, css: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return (_this.koGenerateValidJSON() ? 'active' : ''); }), action: this.generateValidJSONClick, title: this.getLocString('ed.generateValidJSON') },
                { id: 'svd-readable-json', visible: true, css: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return (!_this.koGenerateValidJSON() ? 'active' : ''); }), action: this.generateReadableJSONClick, title: this.getLocString('ed.generateReadableJSON') }
            ])
        });
        this.toolbarItems.push({
            id: 'svd-test',
            visible: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.koViewType() === 'test'; }),
            title: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.getLocString('ed.testSurveyWidth') + ' ' + _this.koTestSurveyWidth(); }),
            template: 'svd-toolbar-options',
            items: __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]([
                { id: 'svd-100-json', visible: true, action: function () { return _this.koTestSurveyWidth('100%'); }, title: '100%' },
                { id: 'svd-1200px-json', visible: true, action: function () { return _this.koTestSurveyWidth('1200px'); }, title: '1200px' },
                { id: 'svd-1000px-json', visible: true, action: function () { return _this.koTestSurveyWidth('1000px'); }, title: '1000px' },
                { id: 'svd-800px-json', visible: true, action: function () { return _this.koTestSurveyWidth('800px'); }, title: '800px' },
                { id: 'svd-600px-json', visible: true, action: function () { return _this.koTestSurveyWidth('600px'); }, title: '600px' },
                { id: 'svd-400px-json', visible: true, action: function () { return _this.koTestSurveyWidth('400px'); }, title: '400px' },
            ])
        });
        this.toolbarItems.push({
            id: 'svd-save',
            visible: this.koShowSaveButton,
            action: this.saveButtonClick,
            innerCss: 'svd_save_btn',
            title: this.getLocString('ed.saveSurvey')
        });
        this.toolbarItems.push({
            id: 'svd-state',
            visible: this.koShowState,
            css: 'svd_state',
            innerCss: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return 'icon-' + _this.koState(); }),
            title: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.koState() && (_this.koState().charAt(0).toUpperCase() + _this.koState().slice(1)); }),
            template: 'svd-toolbar-state'
        });
    }
    Object.defineProperty(SurveyEditor.prototype, "isAutoSave", {
        get: function () { return this.koAutoSave(); },
        set: function (newVal) { this.koAutoSave(newVal); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showState", {
        get: function () { return this.koShowState(); },
        set: function (newVal) { this.koShowState(newVal); },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.setOptions = function (options) {
        if (!options)
            options = { generateValidJSON: true };
        this.options = options;
        this.showJSONEditorTabValue = typeof (options.showJSONEditorTab) !== 'undefined' ? options.showJSONEditorTab : true;
        this.showTestSurveyTabValue = typeof (options.showTestSurveyTab) !== 'undefined' ? options.showTestSurveyTab : true;
        this.showEmbededSurveyTabValue = typeof (options.showEmbededSurveyTab) !== 'undefined' ? options.showEmbededSurveyTab : false;
        this.koShowOptions(typeof (options.showOptions) !== 'undefined' ? options.showOptions : false);
        this.koGenerateValidJSON(this.options.generateValidJSON);
        this.isAutoSave = typeof (options.isAutoSave) !== 'undefined' ? options.isAutoSave : false;
        if (options.designerHeight) {
            this.koDesignerHeight(options.designerHeight);
        }
        if (options.objectsIntend) {
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
        this.isAutoSave && this.doSave();
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
            this.koShowSaveButton(value != null && !this.isAutoSave);
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
        if (obj === this.survey && property.name == "locale") {
            this.selectedObjectEditor.ObjectChanged();
        }
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
        //Select2 work-around
        if (this.select2) {
            var el = document.getElementById("select2-objectSelector-container"); //TODO
            if (el) {
                var item = this.surveyObjects.koSelected();
                if (item && item.text) {
                    el.innerText = item.text();
                }
            }
        }
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
        if (jQuery && jQuery()["select2"]) {
            this.select2 = jQuery("#objectSelector")["select2"]();
            jQuery("#objectSelector").width("100%");
        }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* unused harmony export SurveyDescription */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveysManager; });


var ServiceAPI = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ServiceAPI, _super);
    function ServiceAPI(baseUrl, accessKey) {
        var _this = _super.call(this) || this;
        _this.baseUrl = baseUrl;
        _this.accessKey = accessKey;
        return _this;
    }
    ServiceAPI.prototype.getActiveSurveys = function (onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + '/getActive?accessKey=' + this.accessKey);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            onLoad(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    ServiceAPI.prototype.createSurvey = function (name, onCreate) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + '/create?accessKey=' + this.accessKey + "&name=" + name);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            onCreate(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    ServiceAPI.prototype.saveSurvey = function (id, json, onSave) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.baseUrl + '/changeJson?accessKey=' + this.accessKey);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            !!onSave && onSave(xhr.status == 200, result, xhr.response);
        };
        xhr.send(JSON.stringify({ Id: id, Json: json, Text: json }));
    };
    ServiceAPI.prototype.updateSurveyName = function (id, name, onUpdate) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + '/changeName/' + id + '?accessKey=' + this.accessKey + "&name=" + name);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            !!onUpdate && onUpdate(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    return ServiceAPI;
}(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__["dxSurveyService"]));
var SurveyDescription = (function () {
    function SurveyDescription(name, createdAt, id, resultId, postId) {
        if (name === void 0) { name = ko.observable(""); }
        if (createdAt === void 0) { createdAt = new Date(Date.now()).toDateString(); }
        if (id === void 0) { id = ""; }
        if (resultId === void 0) { resultId = ""; }
        if (postId === void 0) { postId = ""; }
        this.name = name;
        this.createdAt = createdAt;
        this.id = id;
        this.resultId = resultId;
        this.postId = postId;
    }
    return SurveyDescription;
}());

var SurveysManager = (function () {
    function SurveysManager(baseUrl, accessKey, editor) {
        var _this = this;
        this.baseUrl = baseUrl;
        this.accessKey = accessKey;
        this.editor = editor;
        this.isEditMode = ko.observable(false);
        this.surveyId = ko.observable();
        this.surveys = ko.observableArray();
        this.currentSurvey = ko.observable();
        this.currentSurveyName = ko.observable("");
        this.nameEditorKeypress = function (model, event) {
            if (event.keyCode === 13) {
                _this.edit(model, event);
            }
            else if (event.keyCode === 27) {
                _this.isEditMode(false);
            }
        };
        var hash = window.location.hash;
        if (hash.indexOf("#") === 0) {
            this.surveyId(hash.slice(1));
        }
        this.api = new ServiceAPI(baseUrl + "/api/MySurveys", accessKey);
        editor.isAutoSave = true;
        editor.showState = true;
        editor.saveSurveyFunc = function (saveNo, callback) {
            if (!editor.surveyId && !_this.surveyId()) {
                _this.add(function (success) { return callback(saveNo, success); });
            }
            if (!!editor.surveyId || !!_this.surveyId()) {
                _this.api.saveSurvey(editor.surveyId || _this.surveyId(), editor.text, function (success) { return callback(saveNo, success); });
            }
        };
        this.surveys(this.getSurveys());
        if (!this.surveyId()) {
            this.currentSurvey(this.surveys()[0]);
        }
        else {
            var survey = this.surveys().filter(function (s) { return s.id === _this.surveyId(); })[0];
            if (!!survey) {
                this.currentSurvey(survey);
                this.surveyId(undefined);
            }
            else {
                editor.loadSurvey(this.surveyId());
            }
        }
        var onCurrentSurveyChanged = function (survey) {
            if (!!survey) {
                _this.surveyId(undefined);
                window.location.hash = "#" + survey.id;
                if (editor.surveyId === survey.id)
                    return;
                editor.loadSurvey(survey.id);
                editor.surveyId = survey.id;
                editor.surveyPostId = survey.postId;
            }
            else {
                if (!_this.surveyId()) {
                    editor.surveyId = "";
                    editor.surveyPostId = "";
                    window.location.hash = "";
                    editor.text = "";
                }
            }
        };
        this.currentSurvey.subscribe(onCurrentSurveyChanged);
        onCurrentSurveyChanged(this.currentSurvey());
        var currentSurveyCanBeAttached = ko.observable(false);
        ko.computed(function () {
            var survey = _this.currentSurvey();
            currentSurveyCanBeAttached(false);
            if (!!survey) {
                _this.api.updateSurveyName(survey.id, survey.name.peek(), function (success) {
                    currentSurveyCanBeAttached(success);
                });
            }
        });
        this.toolbarItem = {
            id: 'svd-attach-survey',
            template: 'attach-survey',
            visible: currentSurveyCanBeAttached,
            action: ko.computed(function () { return 'https://dxsurvey.com/Home/AttachSurvey/' + (_this.currentSurvey() && _this.currentSurvey().id); }),
            css: 'link-to-attach',
            innerCss: 'icon-cloud',
            title: 'Attach survey to your SurveyJS service account...'
        };
    }
    SurveysManager.prototype.getSurveys = function () {
        return JSON.parse(window.localStorage.getItem(SurveysManager.StorageKey) || "[]").map(function (item) {
            return new SurveyDescription(ko.observable(item.name), item.createdAt, item.id, item.resultId, item.postId);
        });
    };
    SurveysManager.prototype.setSurveys = function (surveys) {
        window.localStorage.setItem(SurveysManager.StorageKey, ko.toJSON(surveys));
    };
    SurveysManager.prototype.edit = function (model, event) {
        var survey = this.currentSurvey();
        if (!!survey) {
            if (this.isEditMode()) {
                survey.name(this.currentSurveyName());
                this.setSurveys(this.surveys());
                this.api.updateSurveyName(survey.id, survey.name());
                this.isEditMode(false);
            }
            else {
                this.currentSurveyName(survey.name());
                this.isEditMode(true);
                $(event.target).parents(".svd-manage").find("input").focus();
            }
        }
    };
    SurveysManager.prototype.add = function (onAdd) {
        var _this = this;
        this.api.createSurvey("NewSurvey", function (success, result, response) {
            var newSurveyDescription = new SurveyDescription(ko.observable(result.Name), result.CreatedAt, result.Id, result.ResultId, result.PostId);
            _this.surveys.push(newSurveyDescription);
            _this.setSurveys(_this.surveys());
            _this.editor.surveyId = result.Id;
            _this.editor.surveyPostId = result.PostId;
            _this.api.saveSurvey(result.Id, _this.editor.text);
            _this.currentSurvey(newSurveyDescription);
            onAdd && onAdd(success, result, response);
        });
    };
    SurveysManager.prototype.remove = function () {
        if (confirm("Do you really want to remove current survey?")) {
            this.surveys.remove(this.currentSurvey());
            this.setSurveys(this.surveys());
            this.currentSurvey(this.surveys()[0]);
        }
    };
    Object.defineProperty(SurveysManager.prototype, "cssEdit", {
        get: function () {
            return this.isEditMode() ? 'icon-saved' : 'icon-edit';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "cssAdd", {
        get: function () {
            return !this.surveyId() ? 'icon-new' : 'icon-fork';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "titleEdit", {
        get: function () {
            return this.isEditMode() ? 'Save survey name' : 'Edit survey name';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "titleAdd", {
        get: function () {
            return !this.surveyId() ? 'Add new survey' : 'Fork this survey';
        },
        enumerable: true,
        configurable: true
    });
    return SurveysManager;
}());

SurveysManager.StorageKey = "mySurveys";


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(6);
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
        var itemValue = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"](null);
        if (itemValue["setData"]) {
            itemValue["setData"](item);
        }
        else {
            if (item.value) {
                itemValue.value = item.value;
                if (item.text)
                    itemValue.text = item.text;
            }
            else {
                itemValue.value = item;
            }
        }
        var itemText = "";
        if (itemValue["locText"]) {
            itemText = itemValue["locText"]["getLocaleText"](this.locale);
        }
        if (!itemText && itemValue.hasText) {
            itemText = itemValue.text;
        }
        return { item: item, koValue: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](itemValue.value), koText: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](itemText), koHasError: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false) };
    };
    SurveyPropertyItemValuesEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var alwaySaveTextInPropertyEditors = this.options && this.options.alwaySaveTextInPropertyEditors;
        var text = editorItem.koText();
        if (!alwaySaveTextInPropertyEditors && editorItem.koText() == editorItem.koValue()) {
            text = null;
        }
        var itemValue = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"](null);
        //TODO use values directly
        if (editorItem.item && itemValue["setData"]) {
            itemValue["setData"](editorItem.item);
        }
        itemValue.value = editorItem.koValue();
        if (itemValue["locText"]) {
            itemValue["locText"]["setLocaleText"](this.locale, text);
        }
        else {
            if (text)
                itemValue.text = text;
        }
        return itemValue;
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionEditors_questionEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyDropdownColumnsEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyPropertyMatrixDropdownColumnsItem; });







var SurveyPropertyDropdownColumnsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyDropdownColumnsEditor, _super);
    function SurveyPropertyDropdownColumnsEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyPropertyDropdownColumnsEditor.prototype, "editorType", {
        get: function () { return "matrixdropdowncolumns"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyDropdownColumnsEditor.prototype.createNewEditorItem = function () {
        var newColumn = new __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["MatrixDropdownColumn"]("", this.options);
        //newColumn.colOwner = TODO set colOwner.
        return new SurveyPropertyMatrixDropdownColumnsItem(newColumn);
    };
    SurveyPropertyDropdownColumnsEditor.prototype.createEditorItem = function (item) { return new SurveyPropertyMatrixDropdownColumnsItem(item, this.options); };
    SurveyPropertyDropdownColumnsEditor.prototype.createItemFromEditorItem = function (editorItem) { return editorItem.column; };
    return SurveyPropertyDropdownColumnsEditor;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["a" /* SurveyNestedPropertyEditor */]));

var SurveyPropertyMatrixDropdownColumnsItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyMatrixDropdownColumnsItem, _super);
    function SurveyPropertyMatrixDropdownColumnsItem(column, options) {
        if (options === void 0) { options = null; }
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.options = options;
        _this.cellTypeChoices = _this.getPropertyChoices("cellType");
        _this.koName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.name);
        _this.koCellType = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.cellType);
        _this.koTitle = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.name === column.title ? "" : column.title);
        _this.koIsRequired = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.column.isRequired);
        _this.koHasError = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        var self = _this;
        _this.koCanEdit = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { return self.koCellType() != "default"; });
        _this.koEditorName = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.columnEdit")["format"](self.koName()); });
        return _this;
    }
    SurveyPropertyMatrixDropdownColumnsItem.prototype.createSurveyQuestionEditor = function () { return new __WEBPACK_IMPORTED_MODULE_3__questionEditors_questionEditor__["b" /* SurveyQuestionEditor */](this.column, null, "matrixdropdowncolumn@" + this.koCellType()); };
    SurveyPropertyMatrixDropdownColumnsItem.prototype.hasError = function () {
        if (_super.prototype.hasError.call(this))
            return true;
        this.koHasError(!this.koName());
        return this.koHasError();
    };
    SurveyPropertyMatrixDropdownColumnsItem.prototype.apply = function () {
        _super.prototype.apply.call(this);
        this.column.name = this.koName();
        this.column.title = this.koTitle();
        this.column.cellType = this.koCellType();
        this.column.isRequired = this.koIsRequired();
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
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["b" /* SurveyNestedPropertyEditorItem */]));

__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("matrixdropdowncolumns", function () { return new SurveyPropertyDropdownColumnsEditor(); });


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__ = __webpack_require__(9);
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionEditors_questionEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyTextItemsEditor; });
/* unused harmony export SurveyPropertyTextItemsItem */








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
        var newItem = new __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["MultipleTextItem"](this.getNewName());
        //newColumn.colOwner = TODO set colOwner.
        return new SurveyPropertyTextItemsItem(newItem);
    };
    SurveyPropertyTextItemsEditor.prototype.createEditorItem = function (item) { return new SurveyPropertyTextItemsItem(item); };
    SurveyPropertyTextItemsEditor.prototype.createItemFromEditorItem = function (editorItem) { return editorItem.item; };
    SurveyPropertyTextItemsEditor.prototype.getNewName = function () {
        var objs = [];
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            objs.push({ name: items[i].koName() });
        }
        return __WEBPACK_IMPORTED_MODULE_2__surveyHelper__["b" /* SurveyHelper */].getNewName(objs, "text");
    };
    return SurveyPropertyTextItemsEditor;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["a" /* SurveyNestedPropertyEditor */]));

var SurveyPropertyTextItemsItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextItemsItem, _super);
    function SurveyPropertyTextItemsItem(item) {
        var _this = _super.call(this) || this;
        _this.item = item;
        _this.koName = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](item.name);
        _this.koTitle = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](item.name === item.title ? "" : item.title);
        _this.koIsRequired = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](_this.item.isRequired);
        _this.koHasError = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](false);
        var self = _this;
        _this.koEditorName = __WEBPACK_IMPORTED_MODULE_7_knockout__["computed"](function () { return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("pe.itemEdit")["format"](self.koName()); });
        return _this;
    }
    SurveyPropertyTextItemsItem.prototype.createSurveyQuestionEditor = function () { return new __WEBPACK_IMPORTED_MODULE_4__questionEditors_questionEditor__["b" /* SurveyQuestionEditor */](this.item, null, "multipletextitem"); };
    SurveyPropertyTextItemsItem.prototype.hasError = function () {
        if (_super.prototype.hasError.call(this))
            return true;
        this.koHasError(!this.koName());
        return this.koHasError();
    };
    SurveyPropertyTextItemsItem.prototype.apply = function () {
        _super.prototype.apply.call(this);
        this.item.name = this.koName();
        this.item.title = this.koTitle();
        this.item.isRequired = this.koIsRequired();
    };
    return SurveyPropertyTextItemsItem;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["b" /* SurveyNestedPropertyEditorItem */]));

__WEBPACK_IMPORTED_MODULE_1__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("textitems", function () { return new SurveyPropertyTextItemsEditor(); });


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(6);
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectEditor__ = __webpack_require__(8);
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd_container\">\n    <ul class=\"navbar-default container-fluid nav nav-tabs svd_menu\">\n        <li data-bind=\"css: {active: koViewType() == 'designer'}\"><a href=\"#\" data-bind=\"click:selectDesignerClick, text: $root.getLocString('ed.designer')\"></a></li>\n        <li data-bind=\"visible: showJSONEditorTab, css: {active: koViewType() == 'editor'}\"><a href=\"#\" data-bind=\"click:selectEditorClick, text: $root.getLocString('ed.jsonEditor')\"></a></li>\n        <li data-bind=\"visible: showTestSurveyTab, css: {active: koViewType() == 'test'}\"><a href=\"#\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurvey')\"></a></li>\n        <li data-bind=\"visible: showEmbededSurveyTab, css: {active: koViewType() == 'embed'}\"><a href=\"#\" data-bind=\"click:selectEmbedClick, text: $root.getLocString('ed.embedSurvey')\"></a></li>\n\n        <!-- ko foreach: toolbarItems -->\n        <li class=\"svd_actions\" data-bind=\"css: $data.css, visible: visible, attr: { id: id }\">\n            <!-- ko template: { name: $data.template || 'svd-toolbar-button', data: $data.data || $data } -->\n            <!-- /ko -->\n        </li>\n        <!-- /ko -->\n    </ul>\n\n    <div class=\"panel svd_content\">\n        <div class=\"row svd_survey_designer\"  data-bind=\"visible: koViewType() == 'designer'\">\n            <div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-1 panel panel-default svd_toolbox\">\n                <div class=\"btn-group-vertical\" style=\"width:100%;padding-right:2px\">\n                    <!-- ko foreach: toolbox.koItems -->\n                    <div class=\"btn btn-default\" style=\"text-align:left; margin:1px;min-height:37px; width:100%\" draggable=\"true\" data-bind=\"click: $root.clickToolboxItem, event:{dragstart: function(el, e) { $root.draggingToolboxItem($data, e); return true;}, dragend: function(el, e) { $root.dragEnd(); }}\">\n                        <span data-bind=\"css: iconName, attr: {title: title}\"></span>\n                        <span class=\"svd_toolbox_item_text hidden-sm hidden-xs\" data-bind=\"text:title\"></span>\n                    </div>\n                    <!-- /ko  -->\n                </div>\n            </div>\n            <div class=\"col-lg-7 col-md-7 col-sm-8 col-xs-11 svd_editors\">\n                <div class=\"svd_pages_editor\" data-bind=\"template: { name: 'pageeditor', data: pagesEditor }\"></div>\n                <div class=\"svd_questions_editor\" id=\"scrollableDiv\" data-bind=\"style: {height: koDesignerHeight}\">\n                    <div id=\"surveyjs\"></div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs panel panel-default svd_properties\">\n                <div class=\"panel-heading input-group\">\n                    <div class=\"custom-select\">\n                        <select id=\"objectSelector\" class=\"form-control\" data-bind=\"options: koObjects, optionsText: 'text', value: koSelectedObject\"></select>\n                    </div>\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\" data-bind=\"enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString('ed.delSelObject')}\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                    </div>\n                </div>\n                <div class=\"svd_object_editor\" data-bind=\"style: {height: koDesignerHeight}\">\n                    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n                </div>\n                <div class=\"panel-footer\" data-bind=\"visible:surveyVerbs.koHasVerbs\">\n                    <div data-bind=\"template: { name: 'objectverbs', data: surveyVerbs }\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div data-bind=\"visible: koViewType() == 'editor'\">\n            <div data-bind=\"template: { name: 'jsoneditor', data: jsonEditor }\"></div>\n        </div>\n\n        <div id=\"surveyjsTest\" data-bind=\"visible: koViewType() == 'test', style: {width: koTestSurveyWidth}\">\n            <div id=\"surveyjsExample\"></div>\n            <div id=\"surveyjsExampleResults\"></div>\n            <button id=\"surveyjsExamplereRun\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurveyAgain')\" style=\"display:none\">Test Again</button>\n        </div>\n\n        <div id=\"surveyjsEmbed\" data-bind=\"visible: koViewType() == 'embed'\">\n            <div data-bind=\"template: { name: 'surveyembeding', data: surveyEmbeding }\"></div>\n        </div>\n    </div>\n    <div data-bind=\"template: { name: 'questioneditor', data: questionEditorWindow }\"></div>\n</div>";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"jsoneditor\">\n    <div data-bind=\"visible: !hasAceEditor\">\n        <textarea class=\"svd_json_editor_area\" data-bind=\"textInput:koText\"></textarea>\n        <!-- ko foreach: koErrors -->\n        <div>\n            <span>Error: </span><span data-bind=\"text: text\"></span>\n        </div>\n        <!-- /ko  -->\n    </div>\n    <div id=\"surveyjsJSONEditor\" class=\"svd_json_editor\"></div>\n</script>";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveys-manage\">\n    <div class=\"svd-manage\">\n        <div class=\"svd-manage-control\">\n            <select class=\"svd-manage-select\" data-bind=\"visible: !isEditMode(), options: surveys,\n                        optionsText: 'name',\n                        value: currentSurvey,\n                        optionsCaption: 'Choose survey to edit or start editing and survey will be saved automatically...'\"></select>\n            <input type=\"text\" class=\"svd-manage-name\" data-bind=\"visible: isEditMode, value: currentSurveyName, event: { keyup: nameEditorKeypress }\"/>\n        </div>\n        <div class=\"svd-manage-buttons\">\n            <span class=\"icon\" data-bind=\"visible: currentSurvey, click: edit, css: cssEdit, attr: { title: titleEdit }\"></span>\n            <span class=\"icon\" data-bind=\"visible: !isEditMode(), click: add, css: cssAdd, attr: { title: titleAdd }\"></span>\n            <span class=\"icon icon-delete\" title=\"Delete current survey\" data-bind=\"visible: !isEditMode() && !surveyId() && currentSurvey(), click:remove\"></span>\n        </div>\n    </div>\n</script>\n<script type=\"text/html\" id=\"attach-survey\">\n    <a target=\"_blank\" href=\"#\" data-bind=\"attr: { href: action, title: title }\"><span class=\"icon\" data-bind=\"css: innerCss\"></span><span data-bind=\"text: title\"></span></a>\n</script>\n";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objecteditor\">\n    <table class=\"table svd_table-nowrap\">\n        <tbody data-bind=\"foreach: koProperties\">\n            <tr data-bind=\"click: $parent.changeActiveProperty($data), css: {'active': $parent.koActiveProperty() == $data}\">\n                <td data-bind=\"text: displayName, attr: {title: title}\" width=\"50%\"></td>\n                <td width=\"50%\">\n                    <span data-bind=\"text: koText, visible: $parent.koActiveProperty() != $data || disabled, attr: {title: koText}\" style=\"text-overflow:ellipsis;white-space:nowrap;overflow:hidden\"></span>\n                    <div data-bind=\"visible: $parent.koActiveProperty() == $data && !disabled\">\n                        <!-- ko template: { name: 'propertyeditor-' + editorType, data: $data } -->\n                        <!-- /ko -->\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</script>";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objectverbs\">\n    <!-- ko foreach: koVerbs -->\n        <div class=\"row\">\n            <div class=\"input-group\">\n                <span  class=\"input-group-addon\" data-bind=\"text:text\"></span>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', optionsValue:'value', value: koSelectedItem\"></select>\n            </div>\n        </div>\n    <!-- /ko  -->\n</script>";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"pageeditor\">\n    <ul class=\"nav nav-tabs\" data-bind=\"tabs:true\">\n        <!-- ko foreach: koPages -->\n        <li data-bind=\"css: {active: koSelected()},event:{\n           keydown:function(el, e){ $parent.keyDown(el, e); },\n           dragstart:function(el, e){ $parent.dragStart(el); return true; },\n           dragover:function(el, e){ $parent.dragOver(el);},\n           dragend:function(el, e){ $parent.dragEnd();},\n           drop:function(el, e){ $parent.dragDrop(el);}\n         }\"> \n            <a class=\"svd_page_nav\" href=\"#\" data-bind=\"click:$parent.selectPageClick\">\n                <span data-bind=\"text: title\"></span>\n            </a>\n        </li>\n        <!-- /ko  -->\n        <li><button class=\"btn btn-default svd_add_new_page_btn\" data-bind=\"click:addNewPageClick, attr: {title:  $root.getLocString('ed.addNewPage')}\" ><span class=\"glyphicon glyphicon-plus\"></span></button></li>\n    </ul>\n</script>";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-boolean\">\n    <input class=\"form-control\" type=\"checkbox\" data-bind=\"checked: koValue\" />\n</script>";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-dropdown\">\n    <div class=\"custom-select\">\n        <select class=\"form-control\" data-bind=\"value: koValue, options: choices\"  style=\"width:100%\"></select>\n    </div>\n</script>";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-expression\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-expression\">\n    <div>\n        <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"8\" autofocus=\"autofocus\"></textarea>\n        <span data-bind=\"text:$root.getLocString('pe.expressionHelp')\" style=\"white-space:normal\"></span>\n    </div>\n</script>\n";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-html\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-html\">\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-itemvalues\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" class=\"btn-xs\" id=\"propertyeditorcontent-itemvalues\">\n    <div style=\"margin-bottom:3px\">\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() == 'form', 'btn-link':koActiveView() != 'form'}, click:changeToFormViewClick, text: $root.getLocString('pe.formEntry')\"></button>\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() != 'form', 'btn-link':koActiveView() == 'form'}, click:changeToTextViewClick, text: $root.getLocString('pe.fastEntry')\"></button>\n    </div>\n    <div data-bind=\"visible:koActiveView() == 'form'\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px;min-height:200px\">\n        <table class=\"table\" >\n            <thead>\n                <tr>\n                    <th></th>\n                    <th data-bind=\"text: $root.getLocString('pe.value')\"></th>\n                    <th data-bind=\"text: $root.getLocString('pe.text')\"></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- ko foreach: koItems -->\n                <tr>\n                    <td>\n                        <div class=\"btn-group\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-xs\" data-bind=\"visible: $index() > 0, click: $parent.onMoveUpClick\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span></button>\n                            <button type=\"button\" class=\"btn btn-xs\" style=\"float:none\" data-bind=\"visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick\"><span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span></button>\n                        </div>\n                    </td>\n                    <td>\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value:koValue\" style=\"width:200px\" />\n                        <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\n                    </td>\n                    <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koText\" style=\"width:200px\" /></td>\n                    <td><button type=\"button\" class=\"btn btn-xs\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n                </tr>\n                <!-- /ko -->\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row btn-toolbar\" data-bind=\"visible:koActiveView() == 'form'\">\n        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\" />\n        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n    </div>\n    <div data-bind=\"visible:koActiveView() != 'form'\">\n        <textarea class=\"form-control\" data-bind=\"textInput: koItemsText\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px; min-height:250px; width:100%\"></textarea>\n    </div>\n</script>\n";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-matrixdropdowncolumns\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-matrixdropdowncolumns\">\n    <table class=\"table\" data-bind=\"visible: koIsList\">\n        <thead>\n            <tr>\n                <th data-bind=\"text: $root.getLocString('pe.required')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.cellType')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: koItems -->\n            <tr>\n                <td>\n                    <input type=\"checkbox\" data-bind=\"checked: koIsRequired\" />\n                    <button type=\"button\" class=\"btn\" data-bind=\"visible: koCanEdit, click: $parent.onEditItemClick\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>\n                    </button>\n                </td>\n                <td>\n                    <select class=\"form-control\" data-bind=\"options: cellTypeChoices, value: koCellType\"  style=\"width:110px\"></select>\n                </td>\n                <td>\n                    <input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:100px\" />\n                    <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\n                </td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:120px\" /></td>\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n            <!-- /ko -->\n            <tr>\n                <td colspan=\"5\">\n                    <div class=\"row btn-toolbar\">\n                        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/>\n                        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n     <!-- ko if: !koIsList() -->\n        <!-- ko template: { name: \"propertyeditorcontent-nested\", data: $data } -->\n        <!-- /ko -->\n    <!-- /ko -->\n</script>\n";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-modal\">\n    <div class=\"input-group\" data-bind=\"visible:!editor.isEditable\">\n        <a data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\"><span data-bind=\"text: koText\"></span></a>\n        <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" data-toggle=\"modal\" style=\"padding: 2px;\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n    <div class=\"input-group\" data-bind=\"visible:editor.isEditable\" style=\"display:table\">\n        <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"display:table-cell; width:100%\" />\n        <div class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-default\" style=\"display:table-cell; padding: 2px;\"  data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n\n    <div data-bind=\"attr: {id : modalName}\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:editor.title\"></h4>\n                </div>  \n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: 'propertyeditorcontent-' + editorType, data: editor } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: editor.onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditorcontent-nested\">\n    <div style=\"padding: 5px\">\n        <button type=\"button\" class=\"btn\" data-bind=\"click: onCancelEditItemClick\">\n            <span class=\"glyphicon glyphicon-list-alt\"></span>\n        </button>\n        <span data-bind=\"text: koEditItem().koEditorName\"></span>\n    </div>\n    <!-- ko template: { name: \"questioneditor-content\", data: koEditItem().itemEditor } -->\n    <!-- /ko -->\n</script>";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-number\">\n    <input class=\"form-control\" type=\"number\" data-bind=\"value: koValue\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-restfull\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-restfull\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"url\">Url:</label>\n            <input id=\"url\" type=\"text\" data-bind=\"value:koUrl\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"path\">Path:</label>\n            <input id=\"path\" type=\"text\" data-bind=\"value:koPath\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"valueName\">valueName:</label>\n            <input id=\"valueName\" type=\"text\" data-bind=\"value:koValueName\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"titleName\">titleName:</label>\n            <input id=\"titleName\" type=\"text\" data-bind=\"value:koTitleName\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"titleName\"><span data-bind=\"text:$root.getLocString('pe.testService')\"></span></label>\n            <select class=\"form-control\" data-bind=\"options: question.koVisibleChoices, optionsText: 'text', optionsValue: 'value', optionsCaption: question.optionsCaption\"></select>\n        </div>\n    </form>\n</script>\n";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-string\">\n    <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-text\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-text\">\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-textitems\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-textitems\">\n<div class=\"panel\">\n    <table class=\"table\" data-bind=\"visible: koIsList\">\n        <thead>\n            <tr>\n                <th data-bind=\"text: $root.getLocString('pe.isRequired')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: koItems -->\n            <tr>\n                <td>\n                    <input type=\"checkbox\" data-bind=\"checked: koIsRequired\" />\n                    <button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onEditItemClick\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>\n                    </button>\n                </td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:180px\" /></td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:180px\" /></td>\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n            <!-- /ko -->\n            <tr>\n                <td colspan=\"4\">\n                    <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/>\n                    <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n                </td>\n            </tr>\n        </tbody>\n    </table>\n     <!-- ko if: !koIsList() -->\n        <!-- ko template: { name: \"propertyeditorcontent-nested\", data: $data } -->\n        <!-- /ko -->\n    <!-- /ko -->\n</div>\n</script>";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggers\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-triggers\">\n<div class=\"panel\">\n    <div class=\"row\" style=\"margin-bottom:10px\">\n        <div class=\"col-lg-12\">\n            <div class=\"input-group form-inline\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <!-- ko foreach: availableTriggers -->\n                        <li><a data-bind=\"click: $parent.onAddClick\"><span data-bind=\"text:$data\"></span></a></li>\n                        <!-- /ko  -->\n                    </ul>\n                </div>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'koText', value: koSelected\"></select>\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div data-bind=\"visible: koSelected() == null\">\n        <div data-bind=\"visible: koQuestions().length == 0, text: $root.getLocString('pe.noquestions')\"></div>\n        <div data-bind=\"visible: koQuestions().length > 0, text: $root.getLocString('pe.createtrigger')\"></div>\n    </div>\n    <div data-bind=\"visible: koSelected() != null\">\n        <div data-bind=\"with: koSelected\">\n            <div class=\"row\"  style=\"margin-bottom:10px\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group  form-inline\">\n                        <div class=\"form-group\">\n                            <span class=\"input-group\" data-bind=\"text: $root.getLocString('pe.triggerOn')\"></span>\n                        </div>\n                        <div class=\"form-group\">\n                            <select class=\"form-control\" data-bind=\"options:$parent.koQuestions, value: koName\"></select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" data-bind=\"options:availableOperators, optionsValue: 'name', optionsText: 'text', value:koOperator\"></select>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" data-bind=\"visible: koRequireValue, value:koValue\" />\n                    </div>\n                </div>\n            </div>\n            <!-- ko if: koType() == 'visibletrigger' -->\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6\">\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: pages } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"col-lg-6 col-sm-6\">\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: questions } -->\n                    <!-- /ko -->\n                </div>\n            </div>\n            <!-- /ko -->\n            <!-- ko if: koType() == 'completetrigger' -->\n            <div class=\"row\">\n               <div style=\"margin: 10px\" data-bind=\"text: $root.getLocString('pe.triggerCompleteText')\"></div>\n            </div>\n            <!-- /ko -->\n            <!-- ko if: koType() == 'setvaluetrigger' -->\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group form-inline\">\n                        <div>\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetToName')\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetToName\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group form-inline\">\n                        <div>\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetValue')\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetValue\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <input type=\"checkbox\" data-bind=\"checked: koisVariable\" /> <span data-bind=\"text: $root.getLocString('pe.triggerIsVariable')\"></span>\n                    </div>\n                </div>\n                <div class=\"col-lg-8 col-sm-8\">\n                </div>\n            </div>\n            <!-- /ko -->\n        </div>\n    </div>\n</div>\n</script>";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggersitems\">\n    <div class=\"panel no-margins no-padding\">\n        <div data-bind=\"text: title\" style=\"margin-bottom:10px\"></div>\n        <div class=\"input-group\">\n            <select class=\"form-control\" multiple=\"multiple\" data-bind=\"options:koChoosen, value: koChoosenSelected\"></select>\n            <span class=\"input-group-btn\" style=\"vertical-align:top\">\n                <button type=\"button\" data-bind=\"enable: koChoosenSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n            </span>\n        </div>\n        <div class=\"input-group\" style=\"margin-top:5px\">\n            <select class=\"form-control\" data-bind=\"options:koObjects, value: koSelected\"></select>\n            <span class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default\" data-bind=\"enable: koSelected() != null, click: onAddClick\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n            </span>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-validators\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-validators\">\n<div class=\"panel\">\n    <div class=\"row\" style=\"margin-bottom:10px\">\n        <div class=\"col-lg-12\">\n            <div class=\"input-group form-inline\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <!-- ko foreach: availableValidators -->\n                        <li><a href=\"#\" data-bind=\"click: $parent.onAddClick\"><span data-bind=\"text:$data\"></span></a></li>\n                        <!-- /ko  -->\n                    </ul>\n                </div>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', value: koSelected\"></select>\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n</div>\n</script>";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor-content\">\n    <ul class=\"nav nav-tabs\" data-bind=\"foreach: koTabs\">\n        <li role=\"presentation\" data-bind=\"css: {active: $parent.koActiveTab() == $data.name}, click: $parent.onTabClick\"><a><span data-bind=\"text:$data.title\"></span></a></li>\n    </ul>               \n    <!-- ko foreach: koTabs -->\n    <div data-bind=\"visible:$parent.koActiveTab() == $data.name\" style=\"margin-top:5px\">\n        <!-- ko template: { name: $data.htmlTemplate, data: $data.templateObject } -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko  -->\n</script>";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor\">\n    <div id=\"surveyquestioneditorwindow\" class=\"modal fade\" role=\"dialog\"data-bind=\"with:koEditor\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:koTitle\"></h4>\n                </div>  \n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: \"questioneditor-content\", data: $data } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default\" data-bind=\"click: onOkClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditortab-general\">\n    <div>\n        <!-- ko foreach: properties.rows -->\n        <div class=\"form-group\">\n            <!-- ko foreach: properties -->\n                    <div class=\"alert alert-danger\" role=\"alert\" data-bind=\"visible:koHasError\">\n                        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Error:</span>\n                        <span  data-bind=\"text:koErrorText\"></span>\n                    </div>            \n                    <!-- ko if: editType != 'check' -->\n                        <label data-bind=\"text:title\"></label>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'text' -->\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\" />\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'textarea' -->\n                        <textarea type=\"text\" rows=\"2\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\"></textarea>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'check' -->\n                        <span class=\"checkbox-inline\"><input type=\"checkbox\" data-bind=\"checked: koValue, disable: disabled\"><label data-bind=\"text:title\"></label></span>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'dropdown' -->\n                        <select class=\"form-control\"  data-bind=\"value: koValue, options: choices, disable: disabled\"></select>\n                    <!-- /ko -->\n            <!-- /ko  -->\n        </div>\n        <!-- /ko  -->\n    </div>\n</script>\n";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveyembeding\">\n    <div class=\"row\">\n        <select data-bind=\"value:koLibraryVersion\">\n            <option value=\"angular\" data-bind=\"text: $root.getLocString('ew.angular')\"></option>\n            <option value=\"jquery\" data-bind=\"text: $root.getLocString('ew.jquery')\"></option>\n            <option value=\"knockout\" data-bind=\"text: $root.getLocString('ew.knockout')\"></option>\n            <option value=\"react\" data-bind=\"text: $root.getLocString('ew.react')\"></option>\n            <option value=\"vue\" data-bind=\"text: $root.getLocString('ew.vue')\"></option>\n        </select>\n        <select data-bind=\"value:koScriptUsing\">\n            <option value=\"bootstrap\" data-bind=\"text: $root.getLocString('ew.bootstrap')\"></option>\n            <option value=\"standard\" data-bind=\"text: $root.getLocString('ew.standard')\"></option>\n        </select>\n        <select data-bind=\"value:koShowAsWindow\">\n            <option value=\"page\" data-bind=\"text: $root.getLocString('ew.showOnPage')\"></option>\n            <option value=\"window\" data-bind=\"text: $root.getLocString('ew.showInWindow')\"></option>\n        </select>\n        <label class=\"checkbox-inline\" data-bind=\"visible:koHasIds\">\n            <input type=\"checkbox\" data-bind=\"checked:koLoadSurvey\" />\n            <span data-bind=\"text: $root.getLocString('ew.loadFromServer')\"></span>\n        </label>\n    </div>\n    <div class=\"panel\">\n        <div class=\"panel-heading\" data-bind=\"text: $root.getLocString('ew.titleScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingHead\" style=\"height:70px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koHeadText\" style=\"height:70px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel\" data-bind=\"visible: koVisibleHtml\">\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleHtml')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingBody\" style=\"height:30px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koBodyText\" style=\"height:30px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel\">\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleJavaScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingJava\" style=\"height:300px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koJavaText\" style=\"height:300px;width:100%\"></textarea>\n    </div>\n</script>";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"svd-toolbar-button\">\n    <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable: $data.enabled || true, click: action, css: $data.innerCss\"><span data-bind=\"text: title\"></span></button>\n</script>\n<script type=\"text/html\" id=\"svd-toolbar-options\">\n    <div class=\"btn-group inline\">\n        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span data-bind=\"text: title\"></span>\n            <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n            <!-- ko foreach: items -->\n            <li data-bind=\"css: $data.css\"><a href=\"#\" data-bind=\"click: action, text: title\"></a></li>\n            <!-- /ko -->\n        </ul>\n    </div>\n</script>\n<script type=\"text/html\" id=\"svd-toolbar-state\">\n    <span class=\"icon\" data-bind=\"css: innerCss\"></span>\n    <span data-bind=\"text: title\"></span>\n</script>";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(37) + "\n" + __webpack_require__(38) + "\n" + __webpack_require__(40) + "\n" + __webpack_require__(41) + "\n" + __webpack_require__(42) + "\n" + __webpack_require__(62) + "\n" + __webpack_require__(60) + "\n" + __webpack_require__(59) + "\n" + __webpack_require__(61) + "\n" + __webpack_require__(43) + "\n" + __webpack_require__(44) + "\n" + __webpack_require__(46) + "\n" + __webpack_require__(45) + "\n" + __webpack_require__(47) + "\n" + __webpack_require__(50) + "\n" + __webpack_require__(48) + "\n" + __webpack_require__(49) + "\n" + __webpack_require__(51) + "\n" + __webpack_require__(52) + "\n" + __webpack_require__(53) + "\n" + __webpack_require__(54) + "\n" + __webpack_require__(55) + "\n" + __webpack_require__(56) + "\n" + __webpack_require__(57) + "\n" + __webpack_require__(58) + "\n\n" + __webpack_require__(39) + "\n" + __webpack_require__(63) + "";

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textWorker__ = __webpack_require__(11);
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dragdrophelper__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return __WEBPACK_IMPORTED_MODULE_3__dragdrophelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorBase", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyStringPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDropdownPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBooleanPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNumberPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyTextItemsEditor__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTextItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyTextItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyItemsEditor__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyItemValuesEditor__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemValuesEditor", function() { return __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyItemValuesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyNestedPropertyEditor__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNestedPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyNestedPropertyEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNestedPropertyEditorItem", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyNestedPropertyEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyMatrixDropdownColumnsEditor__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDropdownColumnsEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyMatrixDropdownColumnsEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyMatrixDropdownColumnsItem", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyMatrixDropdownColumnsEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyModalEditor__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyModalEditor", function() { return __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyModalEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyRestfullEditor__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyResultfullEditor", function() { return __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyRestfullEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__propertyEditors_propertyTriggersEditor__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTriggersEditor", function() { return __WEBPACK_IMPORTED_MODULE_12__propertyEditors_propertyTriggersEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__propertyEditors_propertyValidatorsEditor__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyValidatorsEditor", function() { return __WEBPACK_IMPORTED_MODULE_13__propertyEditors_propertyValidatorsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__surveyObjects__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjects", function() { return __WEBPACK_IMPORTED_MODULE_14__surveyObjects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__editorLocalization__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "editorLocalization", function() { return __WEBPACK_IMPORTED_MODULE_15__editorLocalization__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorGeneralProperties__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralProperties", function() { return __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorGeneralProperties__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralRow", function() { return __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorGeneralProperties__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralProperty", function() { return __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorGeneralProperties__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditorDefinition__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorDefinition", function() { return __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditorDefinition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorShowWindow", function() { return __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditor", function() { return __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTabGeneral", function() { return __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTabProperty", function() { return __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__questionToolbox__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionToolbox", function() { return __WEBPACK_IMPORTED_MODULE_19__questionToolbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__objectProperty__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectProperty", function() { return __WEBPACK_IMPORTED_MODULE_20__objectProperty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__objectEditor__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectEditor", function() { return __WEBPACK_IMPORTED_MODULE_21__objectEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pagesEditor__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPagesEditor", function() { return __WEBPACK_IMPORTED_MODULE_22__pagesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__textWorker__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTextWorker", function() { return __WEBPACK_IMPORTED_MODULE_23__textWorker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__surveyHelper__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjType", function() { return __WEBPACK_IMPORTED_MODULE_24__surveyHelper__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyHelper", function() { return __WEBPACK_IMPORTED_MODULE_24__surveyHelper__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__surveyEmbedingWindow__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEmbedingWindow", function() { return __WEBPACK_IMPORTED_MODULE_25__surveyEmbedingWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__objectVerbs__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbs", function() { return __WEBPACK_IMPORTED_MODULE_26__objectVerbs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbItem", function() { return __WEBPACK_IMPORTED_MODULE_26__objectVerbs__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbChangeTypeItem", function() { return __WEBPACK_IMPORTED_MODULE_26__objectVerbs__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbChangePageItem", function() { return __WEBPACK_IMPORTED_MODULE_26__objectVerbs__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__undoredo__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyUndoRedo", function() { return __WEBPACK_IMPORTED_MODULE_27__undoredo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoItem", function() { return __WEBPACK_IMPORTED_MODULE_27__undoredo__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__surveyjsObjects__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyForDesigner", function() { return __WEBPACK_IMPORTED_MODULE_28__surveyjsObjects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__editor__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEditor", function() { return __WEBPACK_IMPORTED_MODULE_29__editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__manage__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysManager", function() { return __WEBPACK_IMPORTED_MODULE_30__manage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__localization_french__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
// styles

var Version;
Version = "" + "0.12.11";

global["jQuery"] = __WEBPACK_IMPORTED_MODULE_1_jquery__;





























//editorLocalization


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(35)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZTUwODc2OTFlYzIzYWVkOGIwNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1rbm9ja291dFwiLFwiY29tbW9uanNcIjpcInN1cnZleS1rbm9ja291dFwiLFwiYW1kXCI6XCJzdXJ2ZXkta25vY2tvdXRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvckxvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TW9kYWxFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU5lc3RlZFByb3BlcnR5RWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0V29ya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9qc29uNS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhZ2Ryb3BoZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdFByb3BlcnR5LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RWZXJicy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckRlZmluaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvblRvb2xib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleUVtYmVkaW5nV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlPYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlqc09iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZG9yZWRvLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VGV4dEl0ZW1zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJib290c3RyYXBcIixcImNvbW1vbmpzMlwiOlwiYm9vdHN0cmFwXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwXCIsXCJhbWRcIjpcImJvb3RzdHJhcFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9qc29uZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9tYW5hZ2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL29iamVjdGVkaXRvci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvb2JqZWN0dmVyYnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3BhZ2VlZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1ib29sZWFuLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZHJvcGRvd24uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1leHByZXNzaW9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItaHRtbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWl0ZW12YWx1ZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1tYXRyaXhkcm9wZG93bmNvbHVtbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1tb2RhbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW5lc3RlZC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW51bWJlci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXJlc3RmdWxsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3Itc3RyaW5nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHRpdGVtcy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXZhbGlkYXRvcnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvci1jb250ZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvcnRhYi1nZW5lcmFsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9zdXJ2ZXllbWJlZGluZy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvdG9vbGJhci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZW50cnkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5SlNPTkVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7QUNBTyxJQUFJLGtCQUFrQixHQUFHO0lBQzVCLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsU0FBUyxFQUFFLFVBQVUsT0FBZSxFQUFFLE1BQXFCO1FBQXJCLHNDQUFxQjtRQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUN6RCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFDLEdBQUcsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssY0FBYyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0QsZUFBZSxFQUFFLFVBQVUsT0FBZSxFQUFFLEtBQW9CO1FBQXBCLG9DQUFvQjtRQUM1RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsVUFBVSxPQUFlLEVBQUUsS0FBb0I7UUFBcEIsb0NBQW9CO1FBQzdELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBVSxPQUFlLEVBQUUsS0FBb0I7UUFBcEIsb0NBQW9CO1FBQ3hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDO1lBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDYixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKLENBQUM7QUFFSyxJQUFJLGNBQWMsR0FBRztJQUN4QixrQkFBa0I7SUFDbEIsTUFBTSxFQUFFO1FBQ0osWUFBWSxFQUFFLDhCQUE4QjtRQUM1QyxJQUFJLEVBQUUsTUFBTTtRQUNaLFlBQVksRUFBRSxnQkFBZ0I7UUFDOUIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsY0FBYyxFQUFFLGlCQUFpQjtLQUNwQztJQUNELGVBQWU7SUFDZixFQUFFLEVBQUU7UUFDQSxRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLHdCQUF3QjtRQUNoQyxjQUFjLEVBQUUsMEJBQTBCO1FBQzFDLGFBQWEsRUFBRSx1QkFBdUI7UUFDdEMsWUFBWSxFQUFFLGVBQWU7UUFDN0IsS0FBSyxFQUFFLE9BQU87UUFDZCxVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsY0FBYztLQUN2QjtJQUNELG1CQUFtQjtJQUNuQixFQUFFLEVBQUU7UUFDQSxVQUFVLEVBQUUsY0FBYztRQUMxQixXQUFXLEVBQUUsTUFBTTtRQUNuQixlQUFlLEVBQUUsVUFBVTtRQUMzQixZQUFZLEVBQUUsT0FBTztRQUNyQixVQUFVLEVBQUUsYUFBYTtRQUN6QixlQUFlLEVBQUUsbUJBQW1CO1FBQ3BDLGVBQWUsRUFBRSxnQkFBZ0I7UUFDakMsV0FBVyxFQUFFLGNBQWM7UUFDM0IsVUFBVSxFQUFFLGFBQWE7UUFDekIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixVQUFVLEVBQUUsYUFBYTtRQUN6QixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLFNBQVM7UUFDbEIsaUJBQWlCLEVBQUUscUJBQXFCO1FBQ3hDLG9CQUFvQixFQUFFLHdCQUF3QjtRQUM5QyxPQUFPLEVBQUUsU0FBUztRQUNsQixZQUFZLEVBQUUsd0JBQXdCO1FBQ3RDLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsYUFBYSxFQUFFLGlCQUFpQjtLQUNuQztJQUNELGtCQUFrQjtJQUNsQixFQUFFLEVBQUU7UUFDQSxLQUFLLEVBQUUsT0FBTztRQUNkLEVBQUUsRUFBRSxJQUFJO1FBQ1IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLE9BQU87UUFDZCxLQUFLLEVBQUUsT0FBTztRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLFNBQVM7UUFDaEIsU0FBUyxFQUFFLFlBQVk7UUFDdkIsU0FBUyxFQUFFLFlBQVk7UUFDdkIsV0FBVyxFQUFFLGtCQUFrQjtRQUMvQixjQUFjLEVBQUUsMEtBQTBLO1FBRTFMLGVBQWUsRUFBRSxzQ0FBc0M7UUFDdkQsS0FBSyxFQUFFLE9BQU87UUFDZCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsUUFBUSxFQUFFLGdCQUFnQjtRQUUxQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsY0FBYztRQUN4QixZQUFZLEVBQUUsc0JBQXNCO1FBQ3BDLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFVBQVUsRUFBRSxjQUFjO1FBQzFCLGdCQUFnQixFQUFFLHlCQUF5QjtRQUMzQyxJQUFJLEVBQUUsV0FBVztRQUNqQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsZUFBZSxFQUFFLDJDQUEyQztRQUM1RCxPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFVBQVUsRUFBRSxxQkFBcUI7UUFDakMsYUFBYSxFQUFFLHdCQUF3QjtRQUN2QyxrQkFBa0IsRUFBRSwwQkFBMEI7UUFDOUMsa0JBQWtCLEVBQUUsMEJBQTBCO1FBQzlDLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGNBQWMsRUFBRSxpQkFBaUI7UUFFakMsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxJQUFJLEVBQUU7WUFDRixPQUFPLEVBQUUsU0FBUztZQUNsQixXQUFXLEVBQUUsU0FBUztZQUN0QixJQUFJLEVBQUUsYUFBYTtZQUNuQixPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFVBQVUsRUFBRSxhQUFhO1lBQ3pCLFlBQVksRUFBRSxrQkFBa0I7WUFDaEMsYUFBYSxFQUFFLGlCQUFpQjtZQUNoQyxpQkFBaUIsRUFBRSxhQUFhO1lBQ2hDLFVBQVUsRUFBRSxZQUFZO1NBQzNCO1FBRUQsWUFBWSxFQUFFLHFCQUFxQjtRQUNuQyxLQUFLLEVBQUUsZ0JBQWdCO1FBRXZCLGFBQWEsRUFBRSwwQkFBMEI7UUFDekMsV0FBVyxFQUFFLHlDQUF5QztRQUN0RCxhQUFhLEVBQUUseUJBQXlCO1FBQ3hDLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLHVCQUF1QixFQUFFLHFCQUFxQjtRQUM5QywyQkFBMkIsRUFBRSx5QkFBeUI7UUFDdEQsbUJBQW1CLEVBQUUsaUNBQWlDO1FBQ3RELGFBQWEsRUFBRSx3QkFBd0I7UUFDdkMsWUFBWSxFQUFFLFFBQVE7UUFDdEIsZ0JBQWdCLEVBQUUsbUJBQW1CO1FBQ3JDLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLGlCQUFpQixFQUFFLGlEQUFpRDtRQUNwRSxjQUFjLEVBQUUsY0FBYztRQUM5QixjQUFjLEVBQUUsY0FBYztLQUNqQztJQUNELFdBQVc7SUFDWCxFQUFFLEVBQUU7UUFDQSxLQUFLLEVBQUUsVUFBVTtRQUNqQixRQUFRLEVBQUUsY0FBYztRQUN4QixLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxjQUFjO1FBQzNCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osY0FBYyxFQUFFLG1CQUFtQjtRQUNuQyxXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDO0lBQ0QsY0FBYztJQUNkLEVBQUUsRUFBRTtRQUNBLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixTQUFTLEVBQUUseUJBQXlCO1FBQ3BDLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFVBQVUsRUFBRSx1QkFBdUI7UUFDbkMsWUFBWSxFQUFFLHlCQUF5QjtRQUN2QyxjQUFjLEVBQUUsOEJBQThCO1FBQzlDLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsU0FBUyxFQUFFLE1BQU07UUFDakIsZUFBZSxFQUFFLFlBQVk7S0FDaEM7SUFDRCxZQUFZO0lBQ1osQ0FBQyxFQUFFO1FBQ0MsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSw2Q0FBNkMsRUFBRTtRQUM5RSxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxpQ0FBaUMsRUFBRTtRQUN6RSxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7S0FDckQ7Q0FDSixDQUFDO0FBRUYsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQzs7Ozs7Ozs7OztBQ3ROM0MsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsTUFBTTtJQUNsRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFQSxtQkFBb0IsU0FBUyxFQUFFLFNBQVM7SUFDMUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDO1FBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMvQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekgsQ0FBQztBQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1pGO0lBa0JJO1FBSlEsV0FBTSxHQUFRLElBQUksQ0FBQztRQUNwQixZQUFPLEdBQVEsSUFBSSxDQUFDO0lBSTNCLENBQUM7SUFoQmEsdUNBQWMsR0FBNUIsVUFBNkIsSUFBWSxFQUFFLE9BQXVDO1FBQzlFLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNsRSxDQUFDO0lBQ2EscUNBQVksR0FBMUIsVUFBMkIsVUFBa0IsRUFBRSxJQUE0QjtRQUN2RSxJQUFJLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUFDLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RyxJQUFJLGNBQWMsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFRRCxzQkFBVyxnREFBVTthQUFyQixjQUFrQyxNQUFNLDJCQUEyQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDL0QsK0NBQVksR0FBbkIsVUFBb0IsS0FBVSxJQUFZLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pELHNCQUFXLDJDQUFLO2FBQWhCLGNBQTBCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMvQyxVQUFpQixLQUFVO1lBQ3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BTDhDO0lBTS9DLHNCQUFXLDRDQUFNO2FBQWpCO1lBQ0ksRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFDUywrQ0FBWSxHQUF0QixVQUF1QixLQUFVO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDTSwyQ0FBUSxHQUFmLFVBQWdCLEtBQWEsSUFBSSxDQUFDO0lBQzNCLDRDQUFTLEdBQWhCLFVBQWlCLEtBQVUsSUFBSSxDQUFDO0lBQ3RCLGlEQUFjLEdBQXhCO0lBQ0EsQ0FBQztJQUNTLG9EQUFpQixHQUEzQixVQUE0QixLQUFVLElBQVUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7SUFDcEUsK0JBQUM7QUFBRCxDQUFDOztBQXZDaUIsc0NBQWEsR0FBVyxRQUFRLENBQUM7QUFDaEMsNkNBQW9CLEdBQUcsRUFBRSxDQUFDO0FBdUM3QztJQUFnRCw2RkFBd0I7SUFDcEU7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFDRCxzQkFBVyxrREFBVTthQUFyQixjQUFrQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDeEQsaUNBQUM7QUFBRCxDQUFDLENBTCtDLHdCQUF3QixHQUt2RTs7QUFDRDtJQUFrRCwrRkFBd0I7SUFDdEU7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFDRCxzQkFBVyxvREFBVTthQUFyQixjQUFrQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDMUQsbUNBQUM7QUFBRCxDQUFDLENBTGlELHdCQUF3QixHQUt6RTs7QUFDRDtJQUFpRCw4RkFBd0I7SUFDckU7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFDRCxzQkFBVyxtREFBVTthQUFyQixjQUFrQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDekQsa0NBQUM7QUFBRCxDQUFDLENBTGdELHdCQUF3QixHQUt4RTs7QUFDRDtJQUFnRCw2RkFBd0I7SUFDcEU7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFDRCxzQkFBVyxrREFBVTthQUFyQixjQUFrQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDeEQsaUNBQUM7QUFBRCxDQUFDLENBTCtDLHdCQUF3QixHQUt2RTs7QUFFRCx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGNBQXdDLE1BQU0sQ0FBQyxJQUFJLDBCQUEwQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0SSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLGNBQXdDLE1BQU0sQ0FBQyxJQUFJLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxSSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLGNBQXdDLE1BQU0sQ0FBQyxJQUFJLDJCQUEyQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4SSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGNBQXdDLE1BQU0sQ0FBQyxJQUFJLDBCQUEwQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNyRTlFO0FBR3hELElBQVksT0FBa0Q7QUFBOUQsV0FBWSxPQUFPO0lBQUcsMkNBQU87SUFBRSx5Q0FBTTtJQUFFLHFDQUFJO0lBQUUsdUNBQUs7SUFBRSw2Q0FBUTtBQUFDLENBQUMsRUFBbEQsT0FBTyxLQUFQLE9BQU8sUUFBMkM7QUFDOUQ7SUFBQTtJQXNDQSxDQUFDO0lBckNpQiwyQkFBYyxHQUE1QixVQUE2QixJQUFnQjtRQUN6QyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsK0VBQWtCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ2EsK0JBQWtCLEdBQWhDLFVBQWlDLElBQWdCO1FBQzdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSwrRUFBa0IsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDYSw0QkFBZSxHQUE3QixVQUE4QixJQUFnQjtRQUMxQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsK0VBQWtCLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ2EsdUJBQVUsR0FBeEIsVUFBeUIsSUFBZ0IsRUFBRSxRQUFnQjtRQUN2RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFDNUMsR0FBRyxFQUFFLENBQUM7UUFDVixDQUFDO1FBQ0QsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNhLDBCQUFhLEdBQTNCLFVBQTRCLEdBQVE7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxRQUFRLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNyRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBQ2EsMEJBQWEsR0FBM0IsVUFBNEIsR0FBUTtRQUNoQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksT0FBTyxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFnQyxHQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3hDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQzhCO0FBQ2lDO0FBQ1A7QUFFekQ7SUFBK0MsNEZBQXlCO0lBUXBFO1FBQUEsWUFDSSxpQkFBTyxTQVNWO1FBUkcsS0FBSSxDQUFDLE9BQU8sR0FBRyx5REFBa0IsRUFBRSxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQ3BFLENBQUM7SUFDTSxnREFBWSxHQUFuQixVQUFvQixLQUFVO1FBQzFCLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsK0VBQWtCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDUyxxREFBaUIsR0FBM0IsVUFBNEIsS0FBVTtRQUNsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdkQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ1MsMkNBQU8sR0FBakI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDUywwQ0FBTSxHQUFoQixVQUFpQixJQUFTO1FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDdEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ1MsNENBQVEsR0FBbEIsVUFBbUIsSUFBUztRQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNqRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDUyxrREFBYyxHQUF4QjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRVMscURBQWlCLEdBQTNCLFVBQTRCLEtBQWlCO1FBQWpCLG9DQUFpQjtRQUN6QyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixFQUFFLEVBQUMsQ0FBQyxLQUFLLENBQUM7WUFBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDUyxpREFBYSxHQUF2QjtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDUyx1REFBbUIsR0FBN0IsY0FBdUMsTUFBTSx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7SUFDN0Usb0RBQWdCLEdBQTFCLFVBQTJCLElBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1Qyw0REFBd0IsR0FBbEMsVUFBbUMsVUFBZSxJQUFLLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBRSxDQUFDO0lBQ2hGLGdDQUFDO0FBQUQsQ0FBQyxDQXJFOEMsdUZBQXlCLEdBcUV2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekU4QjtBQUNFO0FBRThDO0FBQ3RCO0FBQ29HO0FBQ25GO0FBQ2hDO0FBRTFDO0lBSUk7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLG9EQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvREFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTSw2Q0FBSSxHQUFYLFVBQVksWUFBaUMsRUFBRSxTQUFpRDtRQUM1RixJQUFJLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNwRixNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsb0NBQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQVksb0NBQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDNUYsQ0FBQztJQUNMLHFDQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUVJLGtDQUFtQixHQUFnQixFQUFTLHlCQUF3RjtRQUFqSCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUErRDtRQUNoSSxJQUFJLENBQUMsVUFBVSxHQUFHLDJEQUFpQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDTSw4Q0FBVyxHQUFsQixVQUFtQixZQUFvQjtRQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztRQUNELEVBQUUsRUFBQyxRQUFRLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDOUQsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzdFLENBQUM7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUM7O0FBRUQ7SUFTSSw4QkFBbUIsR0FBZ0IsRUFBUyx5QkFBd0YsRUFBUyxTQUF3QjtRQUF4Qiw0Q0FBd0I7UUFBbEosUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFTLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBK0Q7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ2pLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBWSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztZQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsb0RBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyx5REFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLG9EQUFhLEVBQUUsQ0FBQztRQUMvQixFQUFFLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQywrRUFBa0IsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RixDQUFDO0lBQ0wsQ0FBQztJQUNNLHVDQUFRLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTSxvQ0FBSyxHQUFaO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUNNLG9DQUFLLEdBQVo7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFDTyx3Q0FBUyxHQUFqQjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksVUFBVSxHQUFHLElBQUksK0dBQXFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpR0FBOEIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ25LLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFDdkUsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNPLGdEQUFpQixHQUF6QixVQUEwQixJQUF3QztRQUM5RCxJQUFJLFFBQVEsR0FBRyxpR0FBOEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQUMsUUFBUSxDQUFDO1lBQ3hCLElBQUksU0FBUyxHQUFHLElBQUksK0JBQStCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4RSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDOztBQUVEO0lBRUkscUNBQW1CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7SUFDbkMsQ0FBQztJQUNELHNCQUFXLDZDQUFJO2FBQWYsY0FBNEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzVDLHNCQUFXLDhDQUFLO2FBQWhCO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM1QyxJQUFJLEdBQUcsR0FBRywrRUFBa0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLENBQUM7YUFDRCxVQUFpQixLQUFhLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FEM0Q7SUFFRCxzQkFBVyxxREFBWTthQUF2QixjQUFvQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzlFLHNCQUFXLHVEQUFjO2FBQXpCLGNBQW1DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMxQyw4Q0FBUSxHQUFmLGNBQTZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLDJDQUFLLEdBQVosY0FBaUIsQ0FBQztJQUNYLDJDQUFLLEdBQVosY0FBaUIsQ0FBQztJQUNSLDhDQUFRLEdBQWxCLFVBQW1CLFFBQW1DO1FBQ3pELEVBQUUsRUFBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7UUFDbEcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQUFDOztBQUVEO0lBQW9ELGlHQUEyQjtJQUMzRSx3Q0FBbUIsR0FBZ0IsRUFBUyxVQUF3RDtRQUF4RCw4Q0FBd0Q7UUFBcEcsWUFDSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtRQUhrQixTQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQThDO1FBRWhHLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxJQUFJLCtHQUFxQyxDQUFDLEdBQUcsRUFBRSxpR0FBOEIsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ2xLLENBQUM7SUFDRCxzQkFBVyxnREFBSTthQUFmLGNBQTRCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMvQyxzQkFBVyx3REFBWTthQUF2QixjQUFvQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRSxpREFBUSxHQUFmLGNBQTZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCw4Q0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ00sOENBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNMLHFDQUFDO0FBQUQsQ0FBQyxDQWRtRCwyQkFBMkIsR0FjOUU7O0FBRUQ7SUFBcUQsa0dBQTJCO0lBRTVFLHlDQUFtQixHQUFnQixFQUFTLFFBQW1DO1FBQS9FLFlBQ0ksa0JBQU0sR0FBRyxDQUFDLFNBS2I7UUFOa0IsU0FBRyxHQUFILEdBQUcsQ0FBYTtRQUFTLGNBQVEsR0FBUixRQUFRLENBQTJCO1FBRTNFLEtBQUksQ0FBQyxtQkFBbUIsR0FBOEIscUdBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RILElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQztRQUNoQixLQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxHQUFHLGNBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDbEYsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFDbEUsQ0FBQztJQUNPLHVEQUFhLEdBQXJCO1FBQ0ksRUFBRSxFQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDckUsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxzQkFBVyxpREFBSTthQUFmLGNBQTRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2pELGtEQUFRLEdBQWYsY0FBNkIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLHNCQUFXLHlEQUFZO2FBQXZCLGNBQW9DLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzNGLHNCQUFXLDJEQUFjO2FBQXpCLGNBQW1DLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDaEUsc0JBQVcsMkRBQWM7YUFBekIsY0FBeUQsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3BGLCtDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDTSwrQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztJQUNsRSxDQUFDO0lBQ0wsc0NBQUM7QUFBRCxDQUFDLENBekJvRCwyQkFBMkIsR0F5Qi9FOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0w4QjtBQUN1QjtBQUNFO0FBQ2Q7QUFFMUM7SUFTSSw0QkFBWSxxQkFBaUM7UUFBakMsb0VBQWlDO1FBUHRDLDBCQUFxQixHQUFRLElBQUksQ0FBQztRQUlsQywyQkFBc0IsR0FBeUUsSUFBSSxzREFBWSxFQUEwRCxDQUFDO1FBSTdLLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLHlEQUFrQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9EQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLG9EQUFhLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsc0JBQVcsOENBQWM7YUFBekIsY0FBbUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7YUFDckUsVUFBMEIsS0FBVTtZQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksS0FBSyxDQUFDO2dCQUFDLE1BQU0sQ0FBQztZQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xDLENBQUM7OztPQVBvRTtJQVE5RCx1Q0FBVSxHQUFqQixVQUFrQixxQkFBMEI7UUFDeEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO0lBQ3ZELENBQUM7SUFDTSw4Q0FBaUIsR0FBeEIsVUFBeUIsSUFBWTtRQUNqQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7Z0JBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00saURBQW9CLEdBQTNCLFVBQTRCLFFBQThCO1FBQ3RELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ00sMENBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ1MsNkNBQWdCLEdBQTFCO1FBQUEsaUJBNkJDO1FBNUJHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxVQUFVLEdBQUcsMkRBQWlCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekYsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksU0FBUyxHQUFHLFVBQUMsUUFBOEIsRUFBRSxRQUFhO1lBQzFELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDekgsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFDLFFBQVEsQ0FBQztZQUNuRCxJQUFJLGNBQWMsR0FBRyxJQUFJLDZFQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDcEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2RSxjQUFjLENBQUMsV0FBVyxHQUFHLCtFQUFrQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RSxJQUFJLEtBQUssR0FBRywrRUFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztZQUMvQyxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUM3QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNTLDRDQUFlLEdBQXpCLFVBQTBCLFFBQW1DO1FBQ3pELEVBQUUsRUFBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ1MsbURBQXNCLEdBQWhDO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckY4QjtBQUMrQjtBQUU5RDtJQUErQyw0RkFBd0I7SUFLbkU7UUFBQSxZQUNJLGlCQUFPLFNBS1Y7UUFKRyxLQUFJLENBQUMsS0FBSyxHQUFHLG9EQUFhLEVBQUUsQ0FBQztRQUM3QixJQUFJLElBQUksR0FBRyxLQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUN0RCxDQUFDO0lBQ00sNENBQVEsR0FBZixVQUFnQixLQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsNENBQVEsR0FBZixjQUE2QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsQyxpREFBYSxHQUF2QixjQUE0QixDQUFDO0lBQ3JCLHlDQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNNLDZDQUFTLEdBQWhCLFVBQWlCLEtBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckQsc0JBQVcsaURBQVU7YUFBckIsY0FBbUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzNDLHlDQUFLLEdBQVo7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLENBM0I4QyxxRkFBd0IsR0EyQnRFOztBQUVEO0lBQThDLDJGQUF5QjtJQUduRTtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQURHLEtBQUksQ0FBQyxPQUFPLEdBQUcsb0RBQWEsRUFBRSxDQUFDOztJQUNuQyxDQUFDO0lBQ0Qsc0JBQVcsZ0RBQVU7YUFBckIsY0FBa0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xELHNCQUFXLGdEQUFVO2FBQXJCLGNBQW1DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMxQywrQ0FBWSxHQUFuQixVQUFvQixLQUFVO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDaEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ1MsaURBQWMsR0FBeEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ1MsZ0RBQWEsR0FBdkI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQ0F2QjZDLHlCQUF5QixHQXVCdEU7O0FBRUQ7SUFBOEMsMkZBQXdCO0lBQ2xFO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBQ0Qsc0JBQVcsZ0RBQVU7YUFBckIsY0FBa0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3RELCtCQUFDO0FBQUQsQ0FBQyxDQUw2Qyx3QkFBd0IsR0FLckU7O0FBRUQ7SUFBb0QsaUdBQXdCO0lBQ3hFO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBQ0Qsc0JBQVcsc0RBQVU7YUFBckIsY0FBa0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzVELHFDQUFDO0FBQUQsQ0FBQyxDQUxtRCx3QkFBd0IsR0FLM0U7O0FBRUQscUZBQXdCLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUF3QyxNQUFNLENBQUMsSUFBSSx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEkscUZBQXdCLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUF3QyxNQUFNLENBQUMsSUFBSSx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEkscUZBQXdCLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxjQUF3QyxNQUFNLENBQUMsSUFBSSw4QkFBOEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pFL0c7QUFDaUM7QUFPaEU7SUFBZ0QsNkZBQXlCO0lBR3JFO1FBQUEsWUFDSSxpQkFBTyxTQWFWO1FBWkcsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxVQUFVLEdBQUcsb0RBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFHLG9EQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxRQUFRO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLEtBQUksQ0FBQyxxQkFBcUIsR0FBRztZQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDakMsRUFBRSxFQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7O0lBQ04sQ0FBQztJQUNNLDZDQUFRLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNTLGtEQUFhLEdBQXZCO1FBQ0ksaUJBQU0sYUFBYSxXQUFFLENBQUM7UUFDdEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLEVBQUUsQ0FBQztZQUM1QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFDTCxpQ0FBQztBQUFELENBQUMsQ0FoQytDLHVGQUF5QixHQWdDeEU7O0FBRUQ7SUFFSTtJQUNBLENBQUM7SUFDRCxzQkFBVyxzREFBVTthQUFyQjtZQUNJLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNuRixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNNLGlEQUFRLEdBQWY7UUFDSSxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4RSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDUyxtRUFBMEIsR0FBcEMsY0FBeUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsOENBQUssR0FBWjtRQUNJLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBQ0wscUNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMURtQztBQUNNO0FBRTFDO0lBQUE7SUFPQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDO0FBRUQ7SUFRSSwwQkFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxzQkFBVyxvQ0FBTTthQUFqQixjQUFxQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQy9ELHNCQUFXLDJDQUFhO2FBQXhCLGNBQXNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzlELGtDQUFPLEdBQWpCO1FBQ0ksSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJEQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksdURBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDMUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUYsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNPLDhDQUFtQixHQUEzQixVQUE0QixPQUFZO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDTyw4Q0FBbUIsR0FBM0I7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ08scURBQTBCLEdBQWxDLFVBQW1DLE9BQWM7UUFDN0MsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNuRCxJQUFJLFFBQVEsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLElBQUksRUFBRSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUIsUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNELElBQUksR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUNsQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO2dCQUNoQyxDQUFDO1lBQ0wsQ0FBQztZQUNELE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFDTyw4Q0FBbUIsR0FBM0IsVUFBNEIsYUFBa0IsRUFBRSxPQUFlLEVBQUUsRUFBVTtRQUN2RSxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEUsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLE9BQU8sT0FBTyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDYixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTyxxQ0FBVSxHQUFsQixVQUFtQixPQUFjO1FBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN0QyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBQyxRQUFRLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0MsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7O0FDaElEO0FBQUEsaURBQWlEO0FBQ2pELCtFQUErRTtBQUUvRTtJQTZCSSxxQkFBWSxTQUFxQjtRQUFyQix5Q0FBcUI7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNNLDJCQUFLLEdBQVosVUFBYSxNQUFXLEVBQUUsT0FBbUIsRUFBRSxTQUFxQixFQUFFLEtBQWtCO1FBQTlELHdDQUFtQjtRQUFFLHlDQUFxQjtRQUFFLGlDQUFpQixDQUFDO1FBQ3BGLElBQUksTUFBTSxDQUFDO1FBRVgsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQseUVBQXlFO1FBQ3pFLG9FQUFvRTtRQUNwRSw4RUFBOEU7UUFDOUUsNEVBQTRFO1FBQzVFLFVBQVU7UUFFVixNQUFNLENBQUMsT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLENBQUMsY0FBYyxNQUFNLEVBQUUsR0FBRztZQUM3RCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pELENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUNPLDJCQUFLLEdBQWIsVUFBYyxDQUFTO1FBQ25CLHNDQUFzQztRQUN0QyxJQUFJLEtBQUssR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFDTywwQkFBSSxHQUFaLFVBQWEsQ0FBYTtRQUFiLDRCQUFhO1FBQ3RCLDhFQUE4RTtRQUM5RSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxrRUFBa0U7UUFDbEUsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNPLDBCQUFJLEdBQVo7UUFDSSxzREFBc0Q7UUFDdEQsd0NBQXdDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNPLDZCQUFPLEdBQWY7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ08sZ0NBQVUsR0FBbEI7UUFDSSw0RUFBNEU7UUFDNUUsNEVBQTRFO1FBQzVFLGdEQUFnRDtRQUNoRCxnQ0FBZ0M7UUFDaEMsZ0dBQWdHO1FBQ2hHLDhEQUE4RDtRQUM5RCw4RUFBOEU7UUFDOUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUVsQixnREFBZ0Q7UUFDaEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQztZQUNwQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ2hDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCw0Q0FBNEM7UUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FDdEIsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHO1lBQ2xDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUM7WUFDbEMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQztZQUNsQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2xDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNPLDRCQUFNLEdBQWQ7UUFFSSx3QkFBd0I7UUFFeEIsSUFBSSxNQUFNLEVBQ04sSUFBSSxHQUFHLEVBQUUsRUFDVCxNQUFNLEdBQUcsRUFBRSxFQUNYLElBQUksR0FBRyxFQUFFLENBQUM7UUFFZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBRUQsMkRBQTJEO1FBQzNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDN0MsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDN0MsQ0FBQztRQUVELGtCQUFrQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBQ0Qsa0NBQWtDO1lBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssRUFBRTtnQkFDSCxPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQ3RDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNsQixNQUFNLElBQUksR0FBRyxDQUFDO29CQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7d0JBQ3JELE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUN0QixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDaEIsQ0FBQztvQkFDRCxPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7d0JBQ3RDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUU7Z0JBQ0gsT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUM5RyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQUNELEtBQUssQ0FBQztRQUNkLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFDTyw0QkFBTSxHQUFkO1FBRUksd0JBQXdCO1FBRXhCLElBQUksR0FBRyxFQUNILENBQUMsRUFDRCxNQUFNLEdBQUcsRUFBRSxFQUNYLEtBQUssRUFBTywrQkFBK0I7UUFDM0MsS0FBSyxDQUFDO1FBRVYsNEVBQTRFO1FBRTVFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDWixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs0QkFDeEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDakIsS0FBSyxDQUFDOzRCQUNWLENBQUM7NEJBQ0QsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO3dCQUM3QixDQUFDO3dCQUNELE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2hCLENBQUM7b0JBQ0wsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxNQUFNLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzNDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osS0FBSyxDQUFDO29CQUNWLENBQUM7Z0JBQ0wsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMxQix1Q0FBdUM7b0JBQ3ZDLDRDQUE0QztvQkFDNUMsaURBQWlEO29CQUNqRCwyQkFBMkI7b0JBQzNCLEtBQUssQ0FBQztnQkFDVixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN0QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTyxtQ0FBYSxHQUFyQjtRQUVJLDZFQUE2RTtRQUM3RSw0RUFBNEU7UUFDNUUsOEVBQThFO1FBRTlFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVELEdBQUcsQ0FBQztZQUNBLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLE1BQU0sQ0FBQztZQUNYLENBQUM7UUFDTCxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsRUFBRTtJQUN0QixDQUFDO0lBQ08sa0NBQVksR0FBcEI7UUFFSSw4RUFBOEU7UUFDOUUsaUVBQWlFO1FBQ2pFLDRFQUE0RTtRQUM1RSwwRUFBMEU7UUFFMUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsR0FBRyxDQUFDO1lBQ0EsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZixNQUFNLENBQUM7Z0JBQ1gsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNPLDZCQUFPLEdBQWY7UUFFSSx1RUFBdUU7UUFDdkUsNENBQTRDO1FBRTVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBQ08sMkJBQUssR0FBYjtRQUVJLGdDQUFnQztRQUNoQyxtRUFBbUU7UUFDbkUsNEVBQTRFO1FBQzVFLHVFQUF1RTtRQUV2RSxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ08sMEJBQUksR0FBWjtRQUVJLHdCQUF3QjtRQUV4QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTywyQkFBSyxHQUFiO1FBRUksd0JBQXdCO1FBRXhCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBRywwQkFBMEI7Z0JBQzlDLENBQUM7Z0JBQ0QsdURBQXVEO2dCQUN2RCx5Q0FBeUM7Z0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLHNEQUFzRDtnQkFDdEQsMkJBQTJCO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNPLDRCQUFNLEdBQWQ7UUFFSSx5QkFBeUI7UUFFekIsSUFBSSxHQUFHLEVBQ0gsS0FBSyxFQUNMLGVBQWUsR0FBRyxJQUFJLEVBQ3RCLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUM5RCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBRywyQkFBMkI7Z0JBQ2hELENBQUM7Z0JBRUQscURBQXFEO2dCQUNyRCx3QkFBd0I7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDckMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xGLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN2RCxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ3RELENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLHdEQUF3RDtnQkFDeEQseUJBQXlCO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDakQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDaEQsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN2RCxDQUFDO29CQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDaEQsQ0FBQztnQkFDTCxDQUFDO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTywyQkFBSyxHQUFiO1FBRUksMkVBQTJFO1FBQzNFLGFBQWE7UUFFYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hCLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlFLENBQUM7SUFDTCxDQUFDO0lBTU0sK0JBQVMsR0FBaEIsVUFBaUIsR0FBUSxFQUFFLFFBQW9CLEVBQUUsS0FBaUI7UUFBdkMsMENBQW9CO1FBQUUsb0NBQWlCO1FBQzlELEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtEQUFrRDtRQUNsRCx3Q0FBd0M7UUFDeEMsdUNBQXVDO1FBQ3ZDLElBQUksY0FBYyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsY0FBYyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTywrQkFBUyxHQUFqQixVQUFrQixLQUFVO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTyxpREFBMkIsR0FBbkMsVUFBb0MsTUFBVyxFQUFFLEdBQVEsRUFBRSxVQUFtQjtRQUMxRSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEIsNkRBQTZEO1FBQzdELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlELEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUVELHlHQUF5RztRQUN6RyxxR0FBcUc7UUFDckcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEUsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVPLGdDQUFVLEdBQWxCLFVBQW1CLElBQVM7UUFDeEIsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDO1lBQy9CLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDO1lBQzVCLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDO1lBQzVCLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBRU8saUNBQVcsR0FBbkIsVUFBb0IsSUFBUztRQUN6QixNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUM7WUFDL0IsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUM7WUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDO0lBQ3JDLENBQUM7SUFFTyw0QkFBTSxHQUFkLFVBQWUsR0FBUTtRQUNuQixFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUNELENBQUMsRUFBRSxDQUFDO1FBQ1IsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELFlBQVk7SUFDSiw2QkFBTyxHQUFmLFVBQWdCLEdBQVE7UUFDcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztRQUNwRSxDQUFDO0lBQ0wsQ0FBQztJQUVPLDRCQUFNLEdBQWQsVUFBZSxHQUFRO1FBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssZUFBZSxDQUFDO0lBQ25FLENBQUM7SUFFTywyQkFBSyxHQUFiLFVBQWMsR0FBUTtRQUNsQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUM7SUFDbEQsQ0FBQztJQUVPLHNDQUFnQixHQUF4QixVQUF5QixHQUFRO1FBQzdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sSUFBSSxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDTyxnQ0FBVSxHQUFsQixVQUFtQixHQUFXLEVBQUUsR0FBVyxFQUFFLFNBQTBCO1FBQTFCLDZDQUEwQjtRQUNuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELG9DQUFvQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLE1BQU0sR0FBRyxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDbEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQWdCTyxrQ0FBWSxHQUFwQixVQUFxQixHQUFXO1FBRTVCLDRFQUE0RTtRQUM1RSx1RUFBdUU7UUFDdkUsMkVBQTJFO1FBQzNFLGFBQWE7UUFDYixXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO1lBQ3pGLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVE7Z0JBQ3hCLENBQUM7Z0JBQ0wsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQy9CLENBQUM7SUFDRCxNQUFNO0lBRUUsdUNBQWlCLEdBQXpCLFVBQTBCLE1BQVcsRUFBRSxHQUFRLEVBQUUsVUFBbUI7UUFDaEUsSUFBSSxNQUFNLEVBQUUsR0FBRyxDQUFDO1FBRWhCLGtDQUFrQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV6RSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxnQkFBZ0I7WUFDaEIsb0RBQW9EO1lBQ3BELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QixLQUFLLFNBQVM7Z0JBQ1YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUUvQixLQUFLLFFBQVE7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRS9CLEtBQUssUUFBUTtnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUVsRCxLQUFLLFFBQVE7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBRTdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUN2QyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ2pELE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDaEUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUM3QyxNQUFNLElBQUksTUFBTSxDQUFDO3dCQUNyQixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLE1BQU0sSUFBSSxHQUFHLENBQUM7d0JBQ2xCLENBQUM7d0JBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDMUIsTUFBTSxJQUFJLEdBQUcsQ0FBQzt3QkFDbEIsQ0FBQzt3QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE1BQU0sSUFBSSxJQUFJLENBQUM7d0JBQ25CLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNwQixNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDaEYsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2IsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUMxRCxVQUFVLEdBQUcsS0FBSyxDQUFDOzRCQUNuQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ2pELE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDaEUsUUFBUSxHQUFHLElBQUksQ0FBQztnQ0FDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDakUsTUFBTSxJQUFJLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDOzRCQUN4RSxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNwQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNYLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDbEgsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNsQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQjtnQkFDSSw0Q0FBNEM7Z0JBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7O0FBdHVCaUIsd0JBQVksR0FBRyxLQUFLLENBQUM7QUFDcEIsbUJBQU8sR0FBRztJQUNyQixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsSUFBSSxFQUFFLElBQUk7SUFDVixHQUFHLEVBQUUsR0FBRztJQUNSLElBQUksRUFBRSxFQUFFO0lBQ1IsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtDQUNWLENBQUM7QUFDYSxjQUFFLEdBQUc7SUFDaEIsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osTUFBTTtJQUNOLFFBQVE7Q0FDWCxDQUFDO0FBb21CRixnREFBZ0Q7QUFDaEQsOEdBQThHO0FBQzlHLFFBQVE7QUFDTyxjQUFFLEdBQUcsMEdBQTBHLENBQUM7QUFDaEgscUJBQVMsR0FBRywwSEFBMEgsQ0FBQztBQUN2SSxnQkFBSSxHQUFHO0lBQ2xCLElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLEtBQUs7SUFDWCxHQUFHLEVBQUUsS0FBSztJQUNWLElBQUksRUFBRSxNQUFNO0NBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM29Cb0M7QUFFMUM7SUFDSSwrQkFBbUIsSUFBaUIsRUFBUyxNQUFXLEVBQVMsTUFBVztRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUFTLFdBQU0sR0FBTixNQUFNLENBQUs7SUFFNUUsQ0FBQztJQUNNLHNDQUFNLEdBQWIsVUFBYyxXQUFnQixFQUFFLFFBQWlCLEVBQUUsTUFBdUI7UUFBdkIsdUNBQXVCO1FBQ3RFLDZGQUE2RjtRQUM3RixNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxFQUFFLEVBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM1RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxFQUFFLEVBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLEVBQUUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsRUFBRSxFQUFDLENBQUMsUUFBUSxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSxzQ0FBTSxHQUFiO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsRUFBRSxFQUFDLENBQUMsUUFBUSxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsRUFBRSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsSUFBSSxLQUFLLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoRCxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLHFDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNPLDhDQUFjLEdBQXRCLFVBQXVCLElBQVM7UUFDNUIsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLEVBQUUsQ0FBQztZQUNuQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUNPLHVDQUFPLEdBQWYsVUFBZ0IsUUFBYTtRQUN6QixFQUFFLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekMsRUFBRSxFQUFDLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNsRyxFQUFFLEVBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3ZILENBQUM7UUFDRCxFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxFQUFFLEVBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ25FLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNPLGtEQUFrQixHQUExQixVQUEyQixJQUFTO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDTywwQ0FBVSxHQUFsQixVQUFtQixJQUFTLEVBQUUsUUFBaUIsRUFBRSxNQUFlO1FBQzVELEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUMzQixFQUFFLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxFQUFDLFFBQVEsQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxFQUFHLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRyxDQUFDO1lBQ3BCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixFQUFFLEVBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsTUFBTSxFQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUM5RSxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ08sdUNBQU8sR0FBZixVQUFnQixJQUFTO1FBQ3JCLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQztlQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ25DLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFDTyw0Q0FBWSxHQUFwQixVQUFxQixJQUFTO1FBQzFCLElBQUksR0FBRyxHQUFHLElBQUksNERBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQyxDQUFDO1FBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixFQUFFLEVBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ08sMkNBQVcsR0FBbkIsVUFBb0IsSUFBUztRQUN6QixFQUFFLEVBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxFQUFFLEVBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBQ08sNENBQVksR0FBcEIsVUFBcUIsQ0FBTSxFQUFFLENBQU07UUFDL0IsRUFBRSxFQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDeEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ25GLENBQUM7SUFDTyx3Q0FBUSxHQUFoQixVQUFpQixFQUFPLEVBQUUsTUFBdUI7UUFBdkIsdUNBQXVCO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTywrQ0FBZSxHQUF2QixVQUF3QixLQUE0QixFQUFFLEVBQU8sRUFBRSxNQUFlO1FBQzFFLEVBQUUsRUFBQyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixFQUFFLEVBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDMUIsQ0FBQztZQUNELE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQy9FLENBQUM7UUFDRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM3QixHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ25DLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLEVBQUUsQ0FBQztnQkFDdkMsRUFBRSxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3hELEVBQUUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNMLEVBQUUsRUFBQyxHQUFHLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzVCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUNmLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixDQUFDO3dCQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQztnQkFDTCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEVBQUUsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN6RyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTyxtREFBbUIsR0FBM0I7UUFDSSxJQUFJLE1BQU0sR0FBRywyREFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFJLElBQUksR0FBRyxJQUFJLDJEQUFpQixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLDJEQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUM7O0FBRUQ7SUFXSSx3QkFBbUIsSUFBb0IsRUFBRSxrQkFBNkIsRUFBRSxnQkFBK0I7UUFBL0IsMERBQStCO1FBQXBGLFNBQUksR0FBSixJQUFJLENBQWdCO1FBTC9CLHNCQUFpQixHQUFnQixJQUFJLENBQUM7UUFDdEMsYUFBUSxHQUEwQixJQUFJLENBQUM7UUFHdkMsT0FBRSxHQUFXLGNBQWMsQ0FBQyxPQUFPLEVBQUcsQ0FBQztRQThGdkMsaUJBQVksR0FBWSxJQUFJLENBQUM7UUE1RmpDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUM7SUFDekMsQ0FBQztJQUNELHNCQUFXLGtDQUFNO2FBQWpCLGNBQXFDLE1BQU0sQ0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2hFLDBDQUFpQixHQUF4QixVQUF5QixLQUFnQixFQUFFLE9BQVk7UUFDbkQsSUFBSSxJQUFJLEdBQUcsSUFBSSwyREFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFDTSw2Q0FBb0IsR0FBM0IsVUFBNEIsS0FBZ0IsRUFBRSxXQUFtQixFQUFFLFdBQWdCO1FBQy9FLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFHLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ00seUNBQWdCLEdBQXZCLFVBQXdCLEtBQWdCO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ00sdUNBQWMsR0FBckIsVUFBc0IsS0FBZ0IsRUFBRSxPQUFZLEVBQUUsTUFBdUI7UUFBdkIsdUNBQXVCO1FBQ3pFLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLEVBQUUsRUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUMxRixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUQsRUFBRSxFQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDTSw0QkFBRyxHQUFWO1FBQ0ksRUFBRSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDTSwrQkFBTSxHQUFiLFVBQWMsS0FBZ0I7UUFDMUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkIsRUFBRSxFQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNNLG9DQUFXLEdBQWxCLFVBQW1CLEtBQWdCO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNNLHdDQUFlLEdBQXRCLFVBQXVCLEVBQWU7UUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDM0MsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ08sNENBQW1CLEdBQTNCLFVBQTRCLFdBQW1CLEVBQUUsSUFBUztRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGFBQWEsR0FBRywyREFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksMkRBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELGFBQWEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ25DLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFDTyxpQ0FBUSxHQUFoQixVQUFpQixLQUFnQixFQUFFLFFBQWE7UUFDNUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxNQUFNLEdBQVcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFXLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUVELE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxVQUFVLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxjQUFjLENBQUMsVUFBVSxFQUFDLENBQUM7SUFDMUgsQ0FBQztJQUNPLDBDQUFpQixHQUF6QixVQUEwQixLQUFnQjtRQUN0QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ILEVBQUUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQUNPLG9DQUFXLEdBQW5CLFVBQW9CLEtBQWdCLEVBQUUsT0FBWTtRQUM5QyxJQUFJLElBQUksR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUlPLHFDQUFZLEdBQXBCLFVBQXFCLENBQVk7UUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsWUFBWSxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFDTyxrQ0FBUyxHQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxFQUFFLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNyQixVQUFVLENBQUMsY0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakYsQ0FBQztJQUNMLENBQUM7SUFDTyxpREFBd0IsR0FBaEMsVUFBaUMsQ0FBWTtRQUN6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN6QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsT0FBTSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3ZDLFNBQVMsSUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7SUFDbEksQ0FBQztJQUNPLGlDQUFRLEdBQWhCLFVBQWlCLEtBQWdCO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNuRSxDQUFDO0lBQ08sNkJBQUksR0FBWixVQUFhLE9BQW9CO1FBQzdCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVmLE9BQU8sT0FBTyxFQUFFLENBQUM7WUFDYixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sR0FBZ0IsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNoRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ08sb0NBQVcsR0FBbkIsVUFBb0IsS0FBZ0IsRUFBRSxXQUFtQixFQUFFLElBQUk7UUFDM0QsSUFBSSxHQUFHLEdBQUcsY0FBYyxDQUFDLFNBQVMsR0FBRyxlQUFlLEdBQUcsV0FBVyxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixDQUFjLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBQ08sZ0NBQU8sR0FBZixVQUFnQixLQUFnQixFQUFFLElBQVk7UUFDMUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzlDLENBQUM7UUFDRCxjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDTyxnQ0FBTyxHQUFmLFVBQWdCLEtBQWdCO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDUCxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBQ08sa0NBQVMsR0FBakI7UUFDSSx1QkFBdUI7UUFDdkIsY0FBYyxDQUFDLFFBQVEsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDOztBQWxNaUIseUJBQVUsR0FBVyxFQUFFLENBQUM7QUFDL0Isd0JBQVMsR0FBVyxXQUFXLENBQUM7QUFDaEMsdUJBQVEsR0FBUSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3hDLHdCQUFTLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUs1QyxzQkFBTyxHQUFZLENBQUMsQ0FBQztBQWdHYiwwQkFBVyxHQUFXLEVBQUUsQ0FBQztBQUN6QiwyQkFBWSxHQUFXLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25SZjtBQUMrQztBQUN0QjtBQUt4RDtJQWtCSSw4QkFBbUIsUUFBbUMsRUFBRSxpQkFBeUQsRUFBRSxxQkFBaUM7UUFBNUYsNERBQXlEO1FBQUUsb0VBQWlDO1FBQWpJLGFBQVEsR0FBUixRQUFRLENBQTJCO1FBd0M5Qyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUF2Q3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsb0RBQWEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLE1BQU07UUFDTixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksYUFBYSxHQUFHLFVBQVUsUUFBYSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxHQUFHLHFHQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsTUFBTSxHQUFHLGtEQUFXLENBQUMsY0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxXQUFXLEdBQUcsa0RBQVcsQ0FBQyxjQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFDTyw0Q0FBYSxHQUFyQjtRQUNJLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzRSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELHNCQUFXLHdDQUFNO2FBQWpCLGNBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNyRCxVQUFrQixLQUFVO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDOzs7T0FKb0Q7SUFLM0MsMENBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQywrRUFBa0IsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxpREFBa0IsR0FBMUIsVUFBMkIsUUFBYTtRQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ08sK0NBQWdCLEdBQXhCLFVBQXlCLFFBQWE7UUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLFFBQVEsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUNPLCtDQUFnQixHQUF4QixVQUF5QixRQUFhO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBQ1MsdUNBQVEsR0FBbEI7UUFDSCxFQUFFLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7UUFDL0csRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDUywyQ0FBWSxHQUF0QixVQUF1QixLQUFVLElBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRiwyQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGOEI7QUFDeUI7QUFDSDtBQUNYO0FBRTFDO0lBTUkscUJBQW1CLGtCQUE2QjtRQUE3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVc7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyx5REFBa0IsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0RBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLDJEQUFpQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0JBQVcsK0JBQU07YUFBakIsY0FBcUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQy9ELFVBQWtCLEtBQW9CO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO2dCQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FKOEQ7SUFLL0Qsc0JBQVcsNEJBQUc7YUFBZCxjQUF3QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO2FBQzlDLFVBQWUsS0FBVTtZQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztnQkFBQyxNQUFNLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQUw2QztJQU10QyxnQ0FBVSxHQUFsQjtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksT0FBTyxHQUFHLG1FQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksOERBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksUUFBUSxHQUF3QixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUM3RixDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUM3RixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7O0FBQ0Q7SUFHSSx3QkFBbUIsTUFBcUIsRUFBUyxRQUE2QixFQUFTLGtCQUE2QjtRQUFqRyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVc7UUFDaEgsSUFBSSxDQUFDLE9BQU8sR0FBRyx5REFBa0IsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsb0RBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCxzQkFBVyxnQ0FBSTthQUFmLGNBQTRCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM1QyxxQkFBQztBQUFELENBQUM7O0FBQ0Q7SUFBOEMsMkZBQWM7SUFDeEQsa0NBQW1CLE1BQXFCLEVBQVMsUUFBNkIsRUFBUyxrQkFBNkI7UUFBcEgsWUFDSSxrQkFBTSxNQUFNLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFNBVTlDO1FBWGtCLFlBQU0sR0FBTixNQUFNLENBQWU7UUFBUyxjQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUFTLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBVztRQUVoSCxJQUFJLE9BQU8sR0FBRywyREFBaUIsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsK0VBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hHLENBQUM7UUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDdEYsQ0FBQztJQUNELHNCQUFXLDBDQUFJO2FBQWYsY0FBNEIsTUFBTSxDQUFDLCtFQUFrQixDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDL0UsNkNBQVUsR0FBbEIsVUFBbUIsWUFBb0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksV0FBVyxHQUFHLGdFQUFzQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkcsSUFBSSxPQUFPLEdBQUcsSUFBSSwyREFBaUIsRUFBRSxDQUFDO1FBQ3RDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNELENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQ0ExQjZDLGNBQWMsR0EwQjNEOztBQUNEO0lBQThDLDJGQUFjO0lBRXhELGtDQUFtQixNQUFxQixFQUFTLFFBQTZCLEVBQVMsa0JBQTZCO1FBQXBILFlBQ0ksa0JBQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQVc5QztRQVprQixZQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVMsY0FBUSxHQUFSLFFBQVEsQ0FBcUI7UUFBUyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQVc7UUFFaEgsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsbUVBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQWdCLEtBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDdEYsQ0FBQztJQUNELHNCQUFXLDBDQUFJO2FBQWYsY0FBNEIsTUFBTSxDQUFDLCtFQUFrQixDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDL0UsNkNBQVUsR0FBbEIsVUFBbUIsT0FBb0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxDQXRCNkMsY0FBYyxHQXNCM0Q7Ozs7Ozs7Ozs7Ozs7QUN6RzhCO0FBQ2E7QUFPNUM7SUFZSSwyQkFBWSxvQkFBcUQsRUFBRSxvQkFBcUQsRUFDNUcsa0JBQWlELEVBQUUsb0JBQXFEO1FBRHhHLGtFQUFxRDtRQUFFLGtFQUFxRDtRQUM1Ryw4REFBaUQ7UUFBRSxrRUFBcUQ7UUFKcEgsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFLckIsSUFBSSxDQUFDLE9BQU8sR0FBRyx5REFBa0IsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsb0RBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBUyxRQUFRO1lBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxFQUFPLEVBQUUsQ0FBZ0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLEVBQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsRUFBTyxJQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLEVBQU8sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELHNCQUFXLHFDQUFNO2FBQWpCLGNBQXFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUMvRCxVQUFrQixLQUFvQjtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7OztPQUw4RDtJQU14RCwyQ0FBZSxHQUF0QixVQUF1QixJQUFpQjtRQUNwQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDTCxDQUFDO0lBQ00sMkNBQWUsR0FBdEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0lBQ00sc0NBQVUsR0FBakIsVUFBa0IsSUFBaUI7UUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBQ00sc0NBQVUsR0FBakIsVUFBa0IsSUFBaUI7UUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxtRUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDTCxDQUFDO0lBQ1MsMENBQWMsR0FBeEIsVUFBeUIsSUFBaUI7UUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFD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O1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDOztBQXhGaUIsa0NBQWlCLEdBQVcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTG5EO0FBQUEsU0FBUztBQUNhO0FBRWYsSUFBSSxPQUFlLENBQUM7QUFDM0IsT0FBTyxHQUFHLEtBQUcsU0FBcUIsQ0FBQztBQUVGO0FBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxvQ0FBTSxDQUFDO0FBQ1A7QUFFOEI7QUFJRjtBQUMwQztBQUNSO0FBQ1U7QUFDK0I7QUFFeEQ7QUFDZTtBQUNRO0FBQ0Y7QUFDSTtBQUM1QztBQUVVO0FBRXFIO0FBQ25GO0FBQzZFO0FBRXJIO0FBQ0k7QUFDSjtBQUNGO0FBQ0Y7QUFDTztBQUNPO0FBQ2tEO0FBQ3REO0FBQ0w7QUFDYjtBQUVFO0FBRXpDLG9CQUFvQjtBQUNZIiwiZmlsZSI6Ii4vcGFja2FnZS9zdXJ2ZXllZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSwgcmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImJvb3RzdHJhcFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUVkaXRvclwiLCBbXCJrbm9ja291dFwiLCBcInN1cnZleS1rbm9ja291dFwiLCBcImpxdWVyeVwiLCBcImJvb3RzdHJhcFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlFZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSwgcmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImJvb3RzdHJhcFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5RWRpdG9yXCJdID0gZmFjdG9yeShyb290W1wia29cIl0sIHJvb3RbXCJTdXJ2ZXlcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJib290c3RyYXBcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzZfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2U1MDg3NjkxZWMyM2FlZDhiMDUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImtvXCIsXCJjb21tb25qczJcIjpcImtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwia25vY2tvdXRcIixcImFtZFwiOlwia25vY2tvdXRcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwic3VydmV5LWtub2Nrb3V0XCIsXCJhbWRcIjpcInN1cnZleS1rbm9ja291dFwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIGVkaXRvckxvY2FsaXphdGlvbiA9IHtcbiAgICBjdXJyZW50TG9jYWxlOiBcIlwiLFxuICAgIGxvY2FsZXM6IHt9LFxuICAgIGdldFN0cmluZzogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmICghbG9jYWxlKSBsb2NhbGUgPSB0aGlzLmN1cnJlbnRMb2NhbGU7XG4gICAgICAgIHZhciBsb2MgPSBsb2NhbGUgPyB0aGlzLmxvY2FsZXNbbG9jYWxlXSA6IGRlZmF1bHRTdHJpbmdzO1xuICAgICAgICBpZiAoIWxvYykgbG9jID0gZGVmYXVsdFN0cmluZ3M7XG4gICAgICAgIHZhciBwYXRoID0gc3RyTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgb2JqID0gbG9jO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYyA9PT0gZGVmYXVsdFN0cmluZ3MpIHJldHVybiBwYXRoW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZyhzdHJOYW1lLCBcImVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eU5hbWU6IGZ1bmN0aW9uIChzdHJOYW1lOiBzdHJpbmcsIGxvY2FsOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmdldFByb3BlcnR5KHN0ck5hbWUsIGxvY2FsKTtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBvYmpbXCJuYW1lXCJdO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgZ2V0UHJvcGVydHlUaXRsZTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0UHJvcGVydHkoc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqW1widGl0bGVcIl0pIHJldHVybiBvYmpbXCJ0aXRsZVwiXTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0U3RyaW5nKFwicC5cIiArIHN0ck5hbWUsIGxvY2FsKTtcbiAgICAgICAgaWYgKG9iaiAhPT0gc3RyTmFtZSkgcmV0dXJuIG9iajtcbiAgICAgICAgdmFyIHBvcyA9IHN0ck5hbWUuaW5kZXhPZignXycpO1xuICAgICAgICBpZiAocG9zIDwgLTEpIHJldHVybiBvYmo7XG4gICAgICAgIHN0ck5hbWUgPSBzdHJOYW1lLnN1YnN0cihwb3MgKyAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKFwicC5cIiArIHN0ck5hbWUsIGxvY2FsKTtcbiAgICB9LFxuICAgIGdldExvY2FsZXM6IGZ1bmN0aW9uICgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICByZXMucHVzaChcIlwiKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbn07XG5cbmV4cG9ydCB2YXIgZGVmYXVsdFN0cmluZ3MgPSB7XG4gICAgLy9zdXJ2ZXkgdGVtcGxhdGVzXG4gICAgc3VydmV5OiB7XG4gICAgICAgIGRyb3BRdWVzdGlvbjogXCJQbGVhc2UgZHJvcCBhIHF1ZXN0aW9uIGhlcmUuXCIsXG4gICAgICAgIGNvcHk6IFwiQ29weVwiLFxuICAgICAgICBhZGRUb1Rvb2xib3g6IFwiQWRkIHRvIHRvb2xib3hcIixcbiAgICAgICAgZGVsZXRlUGFuZWw6IFwiRGVsZXRlIFBhbmVsXCIsXG4gICAgICAgIGRlbGV0ZVF1ZXN0aW9uOiBcIkRlbGV0ZSBRdWVzdGlvblwiXG4gICAgfSxcbiAgICAvL3F1ZXN0aW9uVHlwZXNcbiAgICBxdDoge1xuICAgICAgICBjaGVja2JveDogXCJDaGVja2JveFwiLFxuICAgICAgICBjb21tZW50OiBcIkNvbW1lbnRcIixcbiAgICAgICAgZHJvcGRvd246IFwiRHJvcGRvd25cIixcbiAgICAgICAgZmlsZTogXCJGaWxlXCIsXG4gICAgICAgIGh0bWw6IFwiSHRtbFwiLFxuICAgICAgICBtYXRyaXg6IFwiTWF0cml4IChzaW5nbGUgY2hvaWNlKVwiLFxuICAgICAgICBtYXRyaXhkcm9wZG93bjogXCJNYXRyaXggKG11bHRpcGxlIGNob2ljZSlcIixcbiAgICAgICAgbWF0cml4ZHluYW1pYzogXCJNYXRyaXggKGR5bmFtaWMgcm93cylcIixcbiAgICAgICAgbXVsdGlwbGV0ZXh0OiBcIk11bHRpcGxlIFRleHRcIixcbiAgICAgICAgcGFuZWw6IFwiUGFuZWxcIixcbiAgICAgICAgcmFkaW9ncm91cDogXCJSYWRpb2dyb3VwXCIsXG4gICAgICAgIHJhdGluZzogXCJSYXRpbmdcIixcbiAgICAgICAgdGV4dDogXCJTaW5nbGUgSW5wdXRcIlxuICAgIH0sXG4gICAgLy9TdHJpbmdzIGluIEVkaXRvclxuICAgIGVkOiB7XG4gICAgICAgIGFkZE5ld1BhZ2U6IFwiQWRkIE5ldyBQYWdlXCIsXG4gICAgICAgIG5ld1BhZ2VOYW1lOiBcInBhZ2VcIixcbiAgICAgICAgbmV3UXVlc3Rpb25OYW1lOiBcInF1ZXN0aW9uXCIsXG4gICAgICAgIG5ld1BhbmVsTmFtZTogXCJwYW5lbFwiLFxuICAgICAgICB0ZXN0U3VydmV5OiBcIlRlc3QgU3VydmV5XCIsXG4gICAgICAgIHRlc3RTdXJ2ZXlBZ2FpbjogXCJUZXN0IFN1cnZleSBBZ2FpblwiLFxuICAgICAgICB0ZXN0U3VydmV5V2lkdGg6IFwiU3VydmV5IHdpZHRoOiBcIixcbiAgICAgICAgZW1iZWRTdXJ2ZXk6IFwiRW1iZWQgU3VydmV5XCIsXG4gICAgICAgIHNhdmVTdXJ2ZXk6IFwiU2F2ZSBTdXJ2ZXlcIixcbiAgICAgICAgZGVzaWduZXI6IFwiU3VydmV5IERlc2lnbmVyXCIsXG4gICAgICAgIGpzb25FZGl0b3I6IFwiSlNPTiBFZGl0b3JcIixcbiAgICAgICAgdW5kbzogXCJVbmRvXCIsXG4gICAgICAgIHJlZG86IFwiUmVkb1wiLFxuICAgICAgICBvcHRpb25zOiBcIk9wdGlvbnNcIixcbiAgICAgICAgZ2VuZXJhdGVWYWxpZEpTT046IFwiR2VuZXJhdGUgVmFsaWQgSlNPTlwiLFxuICAgICAgICBnZW5lcmF0ZVJlYWRhYmxlSlNPTjogXCJHZW5lcmF0ZSBSZWFkYWJsZSBKU09OXCIsXG4gICAgICAgIHRvb2xib3g6IFwiVG9vbGJveFwiLFxuICAgICAgICBkZWxTZWxPYmplY3Q6IFwiRGVsZXRlIHNlbGVjdGVkIG9iamVjdFwiLFxuICAgICAgICBjb3JyZWN0SlNPTjogXCJQbGVhc2UgY29ycmVjdCBKU09OLlwiLFxuICAgICAgICBzdXJ2ZXlSZXN1bHRzOiBcIlN1cnZleSBSZXN1bHQ6IFwiXG4gICAgfSxcbiAgICAvL1Byb3BlcnR5IEVkaXRvcnNcbiAgICBwZToge1xuICAgICAgICBhcHBseTogXCJBcHBseVwiLFxuICAgICAgICBvazogXCJPS1wiLFxuICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXG4gICAgICAgIHJlc2V0OiBcIlJlc2V0XCIsXG4gICAgICAgIGNsb3NlOiBcIkNsb3NlXCIsXG4gICAgICAgIGRlbGV0ZTogXCJEZWxldGVcIixcbiAgICAgICAgYWRkTmV3OiBcIkFkZCBOZXdcIixcbiAgICAgICAgcmVtb3ZlQWxsOiBcIlJlbW92ZSBBbGxcIixcbiAgICAgICAgZWRpdDogXCJFZGl0XCIsXG4gICAgICAgIGVtcHR5OiBcIjxlbXB0eT5cIixcbiAgICAgICAgZmFzdEVudHJ5OiBcIkZhc3QgRW50cnlcIixcbiAgICAgICAgZm9ybUVudHJ5OiBcIkZvcm0gRW50cnlcIixcbiAgICAgICAgdGVzdFNlcnZpY2U6IFwiVGVzdCB0aGUgc2VydmljZVwiLFxuICAgICAgICBleHByZXNzaW9uSGVscDogXCJQbGVhc2UgZW50ZXIgYSBib29sZWFuIGV4cHJlc3Npb24uIEl0IHNob3VsZCByZXR1cm4gdHJ1ZSB0byBrZWVwIHRoZSBxdWVzdGlvbi9wYWdlIHZpc2libGUuIEZvciBleGFtcGxlOiB7cXVlc3Rpb24xfSA9ICd2YWx1ZTEnIG9yICh7cXVlc3Rpb24yfSA9IDMgYW5kIHtxdWVzdGlvbjN9IDwgNSlcIixcblxuICAgICAgICBwcm9wZXJ0eUlzRW1wdHk6IFwiUGxlYXNlIGVudGVyIHZhbHVlIGludG8gdGhlIHByb3BlcnR5XCIsXG4gICAgICAgIHZhbHVlOiBcIlZhbHVlXCIsXG4gICAgICAgIHRleHQ6IFwiVGV4dFwiLFxuICAgICAgICByZXF1aXJlZDogXCJSZXF1aXJlZD9cIixcbiAgICAgICAgY29sdW1uRWRpdDogXCJFZGl0IGNvbHVtbjogezB9XCIsXG4gICAgICAgIGl0ZW1FZGl0OiBcIkVkaXQgaXRlbTogezB9XCIsXG4gICAgICAgIFxuICAgICAgICBoYXNPdGhlcjogXCJIYXMgb3RoZXIgaXRlbVwiLFxuICAgICAgICBuYW1lOiBcIk5hbWVcIixcbiAgICAgICAgdGl0bGU6IFwiVGl0bGVcIixcbiAgICAgICAgY2VsbFR5cGU6IFwiQ2VsbCB0eXBlXCIsXG4gICAgICAgIGNvbENvdW50OiBcIkNvbHVtbiBjb3VudFwiLFxuICAgICAgICBjaG9pY2VzT3JkZXI6IFwiU2VsZWN0IGNob2ljZXMgb3JkZXJcIixcbiAgICAgICAgdmlzaWJsZTogXCJJcyB2aXNpYmxlP1wiLFxuICAgICAgICBpc1JlcXVpcmVkOiBcIklzIHJlcXVpcmVkP1wiLFxuICAgICAgICBzdGFydFdpdGhOZXdMaW5lOiBcIklzIHN0YXJ0IHdpdGggbmV3IGxpbmU/XCIsXG4gICAgICAgIHJvd3M6IFwiUm93IGNvdW50XCIsXG4gICAgICAgIHBsYWNlSG9sZGVyOiBcIklucHV0IHBsYWNlIGhvbGRlclwiLFxuICAgICAgICBzaG93UHJldmlldzogXCJJcyBpbWFnZSBwcmV2aWV3IHNob3duP1wiLFxuICAgICAgICBzdG9yZURhdGFBc1RleHQ6IFwiU3RvcmUgZmlsZSBjb250ZW50IGluIEpTT04gcmVzdWx0IGFzIHRleHRcIixcbiAgICAgICAgbWF4U2l6ZTogXCJNYXhpbXVtIGZpbGUgc2l6ZSBpbiBieXRlc1wiLFxuICAgICAgICBpbWFnZUhlaWdodDogXCJJbWFnZSBoZWlnaHRcIixcbiAgICAgICAgaW1hZ2VXaWR0aDogXCJJbWFnZSB3aWR0aFwiLFxuICAgICAgICByb3dDb3VudDogXCJSb3cgY291bnRcIiwgXG4gICAgICAgIGFkZFJvd1RleHQ6IFwiQWRkIHJvdyBidXR0b24gdGV4dFwiLCBcbiAgICAgICAgcmVtb3ZlUm93VGV4dDogXCJSZW1vdmUgcm93IGJ1dHRvbiB0ZXh0XCIsXG4gICAgICAgIG1pblJhdGVEZXNjcmlwdGlvbjogXCJNaW5pbXVtIHJhdGUgZGVzY3JpcHRpb25cIiwgXG4gICAgICAgIG1heFJhdGVEZXNjcmlwdGlvbjogXCJNYXhpbXVtIHJhdGUgZGVzY3JpcHRpb25cIixcbiAgICAgICAgaW5wdXRUeXBlOiBcIklucHV0IHR5cGVcIixcbiAgICAgICAgb3B0aW9uc0NhcHRpb246IFwiT3B0aW9ucyBjYXB0aW9uXCIsXG5cbiAgICAgICAgcUVkaXRvclRpdGxlOiBcIkVkaXQgcXVlc3Rpb246IHswfVwiLFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgICBnZW5lcmFsOiBcIkdlbmVyYWxcIixcbiAgICAgICAgICAgIGZpbGVPcHRpb25zOiBcIk9wdGlvbnNcIixcbiAgICAgICAgICAgIGh0bWw6IFwiSHRtbCBFZGl0b3JcIixcbiAgICAgICAgICAgIGNvbHVtbnM6IFwiQ29sdW1uc1wiLFxuICAgICAgICAgICAgcm93czogXCJSb3dzXCIsXG4gICAgICAgICAgICBjaG9pY2VzOiBcIkNob2ljZXNcIixcbiAgICAgICAgICAgIHZpc2libGVJZjogXCJWaXNpYmxlIElmXCIsXG4gICAgICAgICAgICByYXRlVmFsdWVzOiBcIlJhdGUgVmFsdWVzXCIsXG4gICAgICAgICAgICBjaG9pY2VzQnlVcmw6IFwiQ2hvaWNlcyBmcm9tIFdlYlwiLFxuICAgICAgICAgICAgbWF0cml4Q2hvaWNlczogXCJEZWZhdWx0IENob2ljZXNcIixcbiAgICAgICAgICAgIG11bHRpcGxlVGV4dEl0ZW1zOiBcIlRleHQgSW5wdXRzXCIsXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiBcIlZhbGlkYXRvcnNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGVkaXRQcm9wZXJ0eTogXCJFZGl0IHByb3BlcnR5ICd7MH0nXCIsXG4gICAgICAgIGl0ZW1zOiBcIlsgSXRlbXM6IHswfSBdXCIsXG5cbiAgICAgICAgZW50ZXJOZXdWYWx1ZTogXCJQbGVhc2UsIGVudGVyIHRoZSB2YWx1ZS5cIixcbiAgICAgICAgbm9xdWVzdGlvbnM6IFwiVGhlcmUgaXMgbm8gYW55IHF1ZXN0aW9uIGluIHRoZSBzdXJ2ZXkuXCIsXG4gICAgICAgIGNyZWF0ZXRyaWdnZXI6IFwiUGxlYXNlIGNyZWF0ZSBhIHRyaWdnZXJcIixcbiAgICAgICAgdHJpZ2dlck9uOiBcIk9uIFwiLFxuICAgICAgICB0cmlnZ2VyTWFrZVBhZ2VzVmlzaWJsZTogXCJNYWtlIHBhZ2VzIHZpc2libGU6XCIsXG4gICAgICAgIHRyaWdnZXJNYWtlUXVlc3Rpb25zVmlzaWJsZTogXCJNYWtlIHF1ZXN0aW9ucyB2aXNpYmxlOlwiLFxuICAgICAgICB0cmlnZ2VyQ29tcGxldGVUZXh0OiBcIkNvbXBsZXRlIHRoZSBzdXJ2ZXkgaWYgc3VjY2VlZC5cIixcbiAgICAgICAgdHJpZ2dlck5vdFNldDogXCJUaGUgdHJpZ2dlciBpcyBub3Qgc2V0XCIsXG4gICAgICAgIHRyaWdnZXJSdW5JZjogXCJSdW4gaWZcIixcbiAgICAgICAgdHJpZ2dlclNldFRvTmFtZTogXCJDaGFuZ2UgdmFsdWUgb2Y6IFwiLFxuICAgICAgICB0cmlnZ2VyU2V0VmFsdWU6IFwidG86IFwiLFxuICAgICAgICB0cmlnZ2VySXNWYXJpYWJsZTogXCJEbyBub3QgcHV0IHRoZSB2YXJpYWJsZSBpbnRvIHRoZSBzdXJ2ZXkgcmVzdWx0LlwiLFxuICAgICAgICB2ZXJiQ2hhbmdlVHlwZTogXCJDaGFuZ2UgdHlwZSBcIixcbiAgICAgICAgdmVyYkNoYW5nZVBhZ2U6IFwiQ2hhbmdlIHBhZ2UgXCJcbiAgICB9LFxuICAgIC8vT3BlcmF0b3JzXG4gICAgb3A6IHtcbiAgICAgICAgZW1wdHk6IFwiaXMgZW1wdHlcIixcbiAgICAgICAgbm90ZW1wdHk6IFwiaXMgbm90IGVtcHR5XCIsXG4gICAgICAgIGVxdWFsOiBcImVxdWFsc1wiLFxuICAgICAgICBub3RlcXVhbDogXCJub3QgZXF1YWxzXCIsXG4gICAgICAgIGNvbnRhaW5zOiBcImNvbnRhaW5zXCIsXG4gICAgICAgIG5vdGNvbnRhaW5zOiBcIm5vdCBjb250YWluc1wiLFxuICAgICAgICBncmVhdGVyOiBcImdyZWF0ZXJcIixcbiAgICAgICAgbGVzczogXCJsZXNzXCIsXG4gICAgICAgIGdyZWF0ZXJvcmVxdWFsOiBcImdyZWF0ZXIgb3IgZXF1YWxzXCIsXG4gICAgICAgIGxlc3NvcmVxdWFsOiBcIkxlc3Mgb3IgRXF1YWxzXCJcbiAgICB9LFxuICAgIC8vRW1iZWQgd2luZG93XG4gICAgZXc6IHtcbiAgICAgICAgYW5ndWxhcjogXCJVc2UgQW5ndWxhciB2ZXJzaW9uXCIsXG4gICAgICAgIGpxdWVyeTogXCJVc2UgalF1ZXJ5IHZlcnNpb25cIixcbiAgICAgICAga25vY2tvdXQ6IFwiVXNlIEtub2Nrb3V0IHZlcnNpb25cIixcbiAgICAgICAgcmVhY3Q6IFwiVXNlIFJlYWN0IHZlcnNpb25cIixcbiAgICAgICAgdnVlOiBcIlVzZSBWdWUgdmVyc2lvblwiLFxuICAgICAgICBib290c3RyYXA6IFwiRm9yIGJvb3RzdHJhcCBmcmFtZXdvcmtcIixcbiAgICAgICAgc3RhbmRhcmQ6IFwiTm8gYm9vdHN0cmFwXCIsXG4gICAgICAgIHNob3dPblBhZ2U6IFwiU2hvdyBzdXJ2ZXkgb24gYSBwYWdlXCIsXG4gICAgICAgIHNob3dJbldpbmRvdzogXCJTaG93IHN1cnZleSBpbiBhIHdpbmRvd1wiLFxuICAgICAgICBsb2FkRnJvbVNlcnZlcjogXCJMb2FkIFN1cnZleSBKU09OIGZyb20gc2VydmVyXCIsXG4gICAgICAgIHRpdGxlU2NyaXB0OiBcIlNjcmlwdHMgYW5kIHN0eWxlc1wiLFxuICAgICAgICB0aXRsZUh0bWw6IFwiSFRNTFwiLFxuICAgICAgICB0aXRsZUphdmFTY3JpcHQ6IFwiSmF2YVNjcmlwdFwiXG4gICAgfSxcbiAgICAvL1Byb3BlcnRpZXNcbiAgICBwOiB7XG4gICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICB0aXRsZTogeyBuYW1lOiBcInRpdGxlXCIsIHRpdGxlOiBcIkxlYXZlIGl0IGVtcHR5LCBpZiBpdCBpcyB0aGUgc2FtZSBhcyAnTmFtZSdcIiB9LFxuICAgICAgICBzdXJ2ZXlfdGl0bGU6IHsgbmFtZTogXCJ0aXRsZVwiLCB0aXRsZTogXCJJdCB3aWxsIGJlIHNob3duIG9uIGV2ZXJ5IHBhZ2UuXCIgfSxcbiAgICAgICAgcGFnZV90aXRsZTogeyBuYW1lOiBcInRpdGxlXCIsIHRpdGxlOiBcIlBhZ2UgdGl0bGVcIiB9XG4gICAgfVxufTtcblxuZWRpdG9yTG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGRlZmF1bHRTdHJpbmdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0b3JMb2NhbGl6YXRpb24udHMiLCJleHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0W1wiYXNzaWduXCJdIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyh0aGlzQ2xhc3MsIGJhc2VDbGFzcykge1xuICAgIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKSBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSB0aGlzQ2xhc3M7IH1cbiAgICB0aGlzQ2xhc3MucHJvdG90eXBlID0gYmFzZUNsYXNzID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpIDogKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMvaGVscGVycy50cyIsImV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEVkaXRvcjogc3RyaW5nID0gXCJzdHJpbmdcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBlZGl0b3JSZWdpc3RlcmVkTGlzdCA9IHt9O1xuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFZGl0b3IobmFtZTogc3RyaW5nLCBjcmVhdG9yOiAoKSA9PiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UpIHtcbiAgICAgICAgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmVkaXRvclJlZ2lzdGVyZWRMaXN0W25hbWVdID0gY3JlYXRvcjtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVFZGl0b3IoZWRpdG9yVHlwZTogc3RyaW5nLCBmdW5jOiAobmV3VmFsdWU6IGFueSkgPT4gYW55KTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICAgICAgdmFyIGNyZWF0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbZWRpdG9yVHlwZV07XG4gICAgICAgIGlmICghY3JlYXRvcikgY3JlYXRvciA9IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5lZGl0b3JSZWdpc3RlcmVkTGlzdFtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZGVmYXVsdEVkaXRvcl07XG4gICAgICAgIHZhciBwcm9wZXJ0eUVkaXRvciA9IGNyZWF0b3IoKTtcbiAgICAgICAgcHJvcGVydHlFZGl0b3Iub25DaGFuZ2VkID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5RWRpdG9yO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsdWVfOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBvcHRpb25zOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBvbkNoYW5nZWQ6IChuZXdWYWx1ZTogYW55KSA9PiBhbnk7XG4gICAgcHVibGljIG9uR2V0TG9jYWxlOiAoKSA9PiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyB0aHJvdyBcImVkaXRvclR5cGUgaXMgbm90IGRlZmluZWRcIjsgfVxuICAgIHB1YmxpYyBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7IHJldHVybiB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMudmFsdWVfOyB9XG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5nZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVDb3JlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZSgpIDogc3RyaW5nIHsgXG4gICAgICAgIGlmKHRoaXMub25HZXRMb2NhbGUpIHJldHVybiB0aGlzLm9uR2V0TG9jYWxlKCk7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0VmFsdWVDb3JlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWx1ZV8gPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldFRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgfVxuICAgIHB1YmxpYyBzZXRPYmplY3QodmFsdWU6IGFueSkgeyB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q29ycmVjdGVkVmFsdWUodmFsdWU6IGFueSk6IGFueSB7ICByZXR1cm4gdmFsdWU7ICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic3RyaW5nXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlEcm9wZG93blByb3BlcnR5RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImRyb3Bkb3duXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlCb29sZWFuUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiYm9vbGVhblwiOyB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwibnVtYmVyXCI7IH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwic3RyaW5nXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVN0cmluZ1Byb3BlcnR5RWRpdG9yKCk7IH0pO1xuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiZHJvcGRvd25cIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5RHJvcGRvd25Qcm9wZXJ0eUVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImJvb2xlYW5cIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5Qm9vbGVhblByb3BlcnR5RWRpdG9yKCk7IH0pO1xuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwibnVtYmVyXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleU51bWJlclByb3BlcnR5RWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwiaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGVudW0gT2JqVHlwZSB7IFVua25vd24sIFN1cnZleSwgUGFnZSwgUGFuZWwsIFF1ZXN0aW9uIH1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlIZWxwZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmV3UGFnZU5hbWUob2JqczogQXJyYXk8YW55Pikge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld05hbWUob2JqcywgZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImVkLm5ld1BhZ2VOYW1lXCIpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdRdWVzdGlvbk5hbWUob2JqczogQXJyYXk8YW55Pikge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld05hbWUob2JqcywgZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImVkLm5ld1F1ZXN0aW9uTmFtZVwiKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmV3UGFuZWxOYW1lKG9ianM6IEFycmF5PGFueT4pIHtcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXROZXdOYW1lKG9ianMsIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJlZC5uZXdQYW5lbE5hbWVcIikpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE5ld05hbWUob2JqczogQXJyYXk8YW55PiwgYmFzZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHZhciBoYXNoID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaFtvYmpzW2ldLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbnVtID0gMTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmICghaGFzaFtiYXNlTmFtZSArIG51bS50b1N0cmluZygpXSkgYnJlYWs7XG4gICAgICAgICAgICBudW0rKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFzZU5hbWUgKyBudW0udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmplY3RUeXBlKG9iajogYW55KTogT2JqVHlwZSB7XG4gICAgICAgIGlmICghb2JqIHx8ICFvYmpbXCJnZXRUeXBlXCJdKSByZXR1cm4gT2JqVHlwZS5Vbmtub3duO1xuICAgICAgICBpZiAob2JqLmdldFR5cGUoKSA9PSBcInBhZ2VcIikgcmV0dXJuIE9ialR5cGUuUGFnZTtcbiAgICAgICAgaWYgKG9iai5nZXRUeXBlKCkgPT0gXCJwYW5lbFwiKSByZXR1cm4gT2JqVHlwZS5QYW5lbDtcbiAgICAgICAgaWYgKG9iai5nZXRUeXBlKCkgPT0gXCJzdXJ2ZXlcIikgcmV0dXJuIE9ialR5cGUuU3VydmV5O1xuICAgICAgICBpZiAob2JqW1wibmFtZVwiXSkgcmV0dXJuIE9ialR5cGUuUXVlc3Rpb247XG4gICAgICAgIHJldHVybiBPYmpUeXBlLlVua25vd247XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0TmFtZShvYmo6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChvYmpbXCJuYW1lXCJdKSByZXR1cm4gb2JqW1wibmFtZVwiXTtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopO1xuICAgICAgICBpZiAob2JqVHlwZSAhPSBPYmpUeXBlLlBhZ2UpIHJldHVybiBcIlwiO1xuICAgICAgICB2YXIgZGF0YSA9IDxTdXJ2ZXkuU3VydmV5Pig8U3VydmV5LlBhZ2U+b2JqKS5kYXRhO1xuICAgICAgICB2YXIgaW5kZXggPSBkYXRhLnBhZ2VzLmluZGV4T2YoPFN1cnZleS5QYWdlPm9iaik7XG4gICAgICAgIHJldHVybiBcIltQYWdlIFwiICsgKGluZGV4ICsgMSkgKyBcIl1cIjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleUhlbHBlci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3Ige1xuICAgIHB1YmxpYyBrb0l0ZW1zOiBhbnk7XG4gICAgcHVibGljIG9uRGVsZXRlQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25Nb3ZlVXBDbGljazogYW55O1xuICAgIHB1YmxpYyBvbk1vdmVEb3duQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25BZGRDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkNsZWFyQ2xpY2s6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvSXRlbXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYub25EZWxldGVDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoaXRlbSk7IH07XG4gICAgICAgIHNlbGYub25DbGVhckNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZUFsbCgpOyB9O1xuICAgICAgICBzZWxmLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuQWRkSXRlbSgpOyB9O1xuICAgICAgICBzZWxmLm9uTW92ZVVwQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLm1vdmVVcChpdGVtKTsgfTtcbiAgICAgICAgc2VsZi5vbk1vdmVEb3duQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLm1vdmVEb3duKGl0ZW0pOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICB2YXIgbGVuID0gdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLml0ZW1zXCIpW1wiZm9ybWF0XCJdKGxlbik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtdO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBBZGRJdGVtKCkge1xuICAgICAgICB0aGlzLmtvSXRlbXMucHVzaCh0aGlzLmNyZWF0ZU5ld0VkaXRvckl0ZW0oKSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtb3ZlVXAoaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDEpIHJldHVybjtcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCAtIDFdO1xuICAgICAgICBhcnJbaW5kZXggLSAxXSA9IGl0ZW07XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgbW92ZURvd24oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gYXJyLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCArIDFdO1xuICAgICAgICBhcnJbaW5kZXggKyAxXSA9IGl0ZW07XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29JdGVtcyh0aGlzLmdldEl0ZW1zRnJvbVZhbHVlKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRJdGVtc0Zyb21WYWx1ZSh2YWx1ZTogYW55ID0gbnVsbCk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgaWYoIXZhbHVlKSB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVFZGl0b3JJdGVtKHZhbHVlW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHZhciBpbnRlcm5hbEl0ZW1zID0gdGhpcy5rb0l0ZW1zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW50ZXJuYWxJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShpbnRlcm5hbEl0ZW1zW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUoaXRlbXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkgeyB0aHJvdyBcIk92ZXJyaWRlICdjcmVhdGVOZXdFZGl0b3JJdGVtJyBtZXRob2RcIjsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkgeyByZXR1cm4gaXRlbTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7ICByZXR1cm4gZWRpdG9ySXRlbTsgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbXNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eSwgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzfSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzXCI7XG5pbXBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93IHtcbiAgICBrb1Zpc2libGU6IGFueTtcbiAgICBrb0VkaXRvcjogYW55O1xuICAgIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtvVmlzaWJsZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvRWRpdG9yID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICB9XG4gICAgcHVibGljIHNob3cocXVlc3Rpb25CYXNlOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBvbkNoYW5nZWQ6IChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkgPT4gYW55KSB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3IocXVlc3Rpb25CYXNlLCB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spO1xuICAgICAgICBlZGl0b3Iub25DaGFuZ2VkID0gb25DaGFuZ2VkO1xuXG4gICAgICAgIHRoaXMua29FZGl0b3IoZWRpdG9yKTtcbiAgICAgICAgdGhpcy5rb1Zpc2libGUodHJ1ZSk7XG4gICAgICAgIGpRdWVyeShcIiNzdXJ2ZXlxdWVzdGlvbmVkaXRvcndpbmRvd1wiKS5tb2RhbChcInNob3dcIik7XG4gICAgICAgIGVkaXRvci5vbkhpZGVXaW5kb3cgPSBmdW5jdGlvbigpIHtqUXVlcnkoXCIjc3VydmV5cXVlc3Rpb25lZGl0b3J3aW5kb3dcIikubW9kYWwoXCJoaWRlXCIpO307XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25Qcm9wZXJ0aWVzIHtcbiAgICBwcml2YXRlIHByb3BlcnRpZXM6IEFycmF5PFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHk+O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbikge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKHRoaXMub2JqLmdldFR5cGUoKSk7IFxuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5IHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNbaV0ubmFtZSA9PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwcm9wZXJ0eSAmJiBwcm9wZXJ0eVtcInZpc2libGVcIl0gPT09IGZhbHNlKSBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMub2JqLCBwcm9wZXJ0eSkpIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSBcbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yIHtcbiAgICBwcm90ZWN0ZWQgcHJvcGVydGllczogU3VydmV5UXVlc3Rpb25Qcm9wZXJ0aWVzO1xuICAgIHB1YmxpYyBvbkNoYW5nZWQ6IChvYmo6IFN1cnZleS5CYXNlKSA9PiBhbnk7XG4gICAgcHVibGljIG9uSGlkZVdpbmRvdzogKCk9PiBhbnk7XG4gICAgcHVibGljIG9uT2tDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkFwcGx5Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XG4gICAga29UYWJzOiBhbnk7IGtvQWN0aXZlVGFiOiBhbnk7IGtvVGl0bGU6IGFueTtcbiAgICBvblRhYkNsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuLCBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYoIXRoaXMuY2xhc3NOYW1lKSB0aGlzLmNsYXNzTmFtZSA9IHRoaXMub2JqLmdldFR5cGUoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IFN1cnZleVF1ZXN0aW9uUHJvcGVydGllcyhvYmosIG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spO1xuICAgICAgICBzZWxmLm9uQXBwbHlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5hcHBseSgpOyB9O1xuICAgICAgICBzZWxmLm9uT2tDbGljayA9IGZ1bmN0aW9uKCkge3NlbGYuYXBwbHkoKTsgaWYoIXNlbGYuaGFzRXJyb3IoKSAmJiBzZWxmLm9uSGlkZVdpbmRvdykgc2VsZi5vbkhpZGVXaW5kb3coKTsgfTtcbiAgICAgICAgc2VsZi5vblJlc2V0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYucmVzZXQoKTsgfTtcbiAgICAgICAgdGhpcy5vblRhYkNsaWNrID0gZnVuY3Rpb24gKHRhYikgeyBzZWxmLmtvQWN0aXZlVGFiKHRhYi5uYW1lKTsgfTtcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLmJ1aWxkVGFicygpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlVGFiID0ga28ub2JzZXJ2YWJsZSh0YWJzWzBdLm5hbWUpO1xuICAgICAgICB0aGlzLmtvVGFicyA9IGtvLm9ic2VydmFibGVBcnJheSh0YWJzKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICBpZih0aGlzLm9ialtcIm5hbWVcIl0pIHtcbiAgICAgICAgICAgIHRoaXMua29UaXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUucUVkaXRvclRpdGxlXCIpW1wiZm9ybWF0XCJdKHRoaXMub2JqW1wibmFtZVwiXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLmtvVGFicygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YWJzW2ldLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtvQWN0aXZlVGFiKHRhYnNbaV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5rb1RhYnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YWJzW2ldLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcigpKSByZXR1cm47XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5rb1RhYnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YWJzW2ldLmFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlZCh0aGlzLm9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBidWlsZFRhYnMoKTogQXJyYXk8U3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlPiB7XG4gICAgICAgIHZhciB0YWJzID0gW107XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXModGhpcy5vYmosIFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5nZXRQcm9wZXJ0aWVzKHRoaXMuY2xhc3NOYW1lKSwgdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKTtcbiAgICAgICAgdGFicy5wdXNoKG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkdlbmVyYWwodGhpcy5vYmosIHByb3BlcnRpZXMpKTtcbiAgICAgICAgdGhpcy5hZGRQcm9wZXJ0aWVzVGFicyh0YWJzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YWJzW2ldLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhYnM7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkUHJvcGVydGllc1RhYnModGFiczogQXJyYXk8U3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlPikge1xuICAgICAgICB2YXIgdGFiTmFtZXMgPSBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0VGFicyh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFiTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWJJdGVtID0gdGFiTmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXMuZ2V0UHJvcGVydHkodGFiSXRlbS5uYW1lKTtcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIGVkaXRvclRhYiA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYlByb3BlcnR5KHRoaXMub2JqLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICBpZiAodGFiSXRlbS50aXRsZSkgZWRpdG9yVGFiLnRpdGxlID0gdGFiSXRlbS50aXRsZTtcbiAgICAgICAgICAgIHRhYnMucHVzaChlZGl0b3JUYWIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlIHtcbiAgICBwcml2YXRlIHRpdGxlVmFsdWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwibmFtZVwiOyB9XG4gICAgcHVibGljIGdldCB0aXRsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGl0bGVWYWx1ZSkgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZTtcbiAgICAgICAgdmFyIHN0ciA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50YWJzLlwiICsgdGhpcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ciA6IHRoaXMubmFtZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBodG1sVGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicXVlc3Rpb25lZGl0b3J0YWItXCIgKyB0aGlzLm5hbWU7IH1cbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlT2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7IH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0VmFsdWUocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBhbnkge1xuXHRpZihwcm9wZXJ0eVtcImdldFByb3BlcnR5VmFsdWVcIl0pIHJldHVybiBwcm9wZXJ0eVtcImdldFByb3BlcnR5VmFsdWVcIl0odGhpcy5vYmopOyAvL1RPRE8gbWFrZSB0aGUgb25seSBjYWxsXG4gICAgICAgIGlmIChwcm9wZXJ0eS5oYXNUb1VzZUdldFZhbHVlKSByZXR1cm4gcHJvcGVydHkuZ2V0VmFsdWUodGhpcy5vYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5vYmpbcHJvcGVydHkubmFtZV07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJHZW5lcmFsIGV4dGVuZHMgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHVibGljIHByb3BlcnRpZXM6IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXMgPyBwcm9wZXJ0aWVzIDogbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMob2JqLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0UHJvcGVydGllcyhvYmouZ2V0VHlwZSgpKSwgbnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJnZW5lcmFsXCI7IH1cbiAgICBwdWJsaWMgZ2V0IGh0bWxUZW1wbGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJxdWVzdGlvbmVkaXRvcnRhYi1nZW5lcmFsXCI7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnByb3BlcnRpZXMuaGFzRXJyb3IoKTsgfSBcbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcy5yZXNldCgpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcy5hcHBseSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiUHJvcGVydHkgZXh0ZW5kcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkJhc2Uge1xuICAgIHByaXZhdGUgcHJvcGVydHlFZGl0b3JWYWx1ZTogU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHVibGljIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZSA9IDxTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yPlN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5jcmVhdGVFZGl0b3IodGhpcy5wcm9wZXJ0eS50eXBlLCBudWxsKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWUub25HZXRMb2NhbGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYuZG9PbkdldExvY2FsZSgpIH07XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZS52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUodGhpcy5wcm9wZXJ0eSk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9PbkdldExvY2FsZSgpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLm9iaiAmJiB0aGlzLm9ialtcImdldExvY2FsZVwiXSkgcmV0dXJuIHRoaXMub2JqW1wiZ2V0TG9jYWxlXCJdKCk7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucHJvcGVydHkubmFtZTsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucHJvcGVydHlFZGl0b3IuaGFzRXJyb3IoKTsgfVxuICAgIHB1YmxpYyBnZXQgaHRtbFRlbXBsYXRlKCk6IHN0cmluZyB7IHJldHVybiBcInByb3BlcnR5ZWRpdG9yY29udGVudC1cIiArIHRoaXMucHJvcGVydHkudHlwZTsgfVxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGVPYmplY3QoKTogYW55IHsgcmV0dXJuIHRoaXMucHJvcGVydHlFZGl0b3I7IH1cbiAgICBwdWJsaWMgZ2V0IHByb3BlcnR5RWRpdG9yKCk6IFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3IgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlOyB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWUudmFsdWUgPSB0aGlzLmdldFZhbHVlKHRoaXMucHJvcGVydHkpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3IuYXBwbHkoKTtcbiAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eS5uYW1lXSA9IHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZS52YWx1ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlPYmplY3RQcm9wZXJ0eX0gZnJvbSBcIi4vb2JqZWN0UHJvcGVydHlcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RFZGl0b3Ige1xuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RWYWx1ZTogYW55O1xuICAgIHB1YmxpYyBwcm9wZXJ0eUVkaXRvck9wdGlvbnM6IGFueSA9IG51bGw7XG4gICAgcHVibGljIGtvUHJvcGVydGllczogYW55O1xuICAgIHB1YmxpYyBrb0FjdGl2ZVByb3BlcnR5OiBhbnk7XG4gICAgcHVibGljIGtvSGFzT2JqZWN0OiBhbnk7XG4gICAgcHVibGljIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQ6IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlPYmplY3RFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlPYmplY3RFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s6IChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpID0+IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eUVkaXRvck9wdGlvbnM6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKHByb3BlcnR5RWRpdG9yT3B0aW9ucyk7XG4gICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb0hhc09iamVjdCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzZWxlY3RlZE9iamVjdCgpOiBhbnkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE9iamVjdFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzZWxlY3RlZE9iamVjdCh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWUgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5rb0hhc09iamVjdCh2YWx1ZSAhPSBudWxsKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKTtcbiAgICB9XG4gICAgcHVibGljIHNldE9wdGlvbnMocHJvcGVydHlFZGl0b3JPcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvck9wdGlvbnMgPSBwcm9wZXJ0eUVkaXRvck9wdGlvbnM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eUVkaXRvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmtvUHJvcGVydGllcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIHByb3BlcnRpZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBjaGFuZ2VBY3RpdmVQcm9wZXJ0eShwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgICB9XG4gICAgcHVibGljIE9iamVjdENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllc09iamVjdCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUHJvcGVydGllcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkT2JqZWN0IHx8ICF0aGlzLnNlbGVjdGVkT2JqZWN0LmdldFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzKFtdKTtcbiAgICAgICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eShudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXModGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKCkpO1xuICAgICAgICBwcm9wZXJ0aWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPT0gYi5uYW1lKSByZXR1cm4gMDtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG9iamVjdFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvcEV2ZW50ID0gKHByb3BlcnR5OiBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSwgbmV3VmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5vblByb3BlcnR5VmFsdWVDaGFuZ2VkLmZpcmUodGhpcywgeyBwcm9wZXJ0eTogcHJvcGVydHkucHJvcGVydHksIG9iamVjdDogcHJvcGVydHkub2JqZWN0LCBuZXdWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblNob3dQcm9wZXJ0eShwcm9wZXJ0aWVzW2ldKSkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgb2JqZWN0UHJvcGVydHkgPSBuZXcgU3VydmV5T2JqZWN0UHJvcGVydHkocHJvcGVydGllc1tpXSwgcHJvcEV2ZW50LCB0aGlzLnByb3BlcnR5RWRpdG9yT3B0aW9ucyk7XG4gICAgICAgICAgICB2YXIgbG9jTmFtZSA9IHRoaXMuc2VsZWN0ZWRPYmplY3QuZ2V0VHlwZSgpICsgJ18nICsgcHJvcGVydGllc1tpXS5uYW1lO1xuICAgICAgICAgICAgb2JqZWN0UHJvcGVydHkuZGlzcGxheU5hbWUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0UHJvcGVydHlOYW1lKGxvY05hbWUpO1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFByb3BlcnR5VGl0bGUobG9jTmFtZSk7XG4gICAgICAgICAgICBpZiAoIXRpdGxlKSB0aXRsZSA9IG9iamVjdFByb3BlcnR5LmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgb2JqZWN0UHJvcGVydHkudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIG9iamVjdFByb3BlcnRpZXMucHVzaChvYmplY3RQcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1Byb3BlcnRpZXMob2JqZWN0UHJvcGVydGllcyk7XG4gICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eSh0aGlzLmdldFByb3BlcnR5RWRpdG9yKFwibmFtZVwiKSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjYW5TaG93UHJvcGVydHkocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBib29sZWFuIHtcbiAgICAgICAgaWYocHJvcGVydHlbXCJ2aXNpYmxlXCJdID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKSByZXR1cm4gdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWRPYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9wZXJ0aWVzT2JqZWN0KCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHRoaXMua29Qcm9wZXJ0aWVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHJvcGVydGllc1tpXS5vYmplY3QgPSB0aGlzLnNlbGVjdGVkT2JqZWN0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmplY3RFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIHB1YmxpYyBvYmplY3Q6IGFueTtcbiAgICBwdWJsaWMgdGl0bGU6IGFueTtcbiAgICBwdWJsaWMgb25BcHBseUNsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uUmVzZXRDbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRpdGxlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYub25BcHBseUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmFwcGx5KCk7IH07XG4gICAgICAgIHNlbGYub25SZXNldENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnJlc2V0KCk7IH07XG4gICAgfVxuICAgIHB1YmxpYyBzZXRUaXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGUodmFsdWUpOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHsgfVxuICAgIHByaXZhdGUgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0T2JqZWN0KHZhbHVlOiBhbnkpIHsgdGhpcy5vYmplY3QgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaXNFZGl0YWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcigpKSByZXR1cm47XG4gICAgICAgIHRoaXMub25CZWZvcmVBcHBseSgpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VkKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7XG4gICAgcHVibGljIGtvVmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0XCI7IH1cbiAgICBwdWJsaWMgZ2V0IGlzRWRpdGFibGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodGhpcy5rb1ZhbHVlKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5SHRtbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5VGV4dEVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJodG1sXCI7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5RXhwcmVzc2lvbkVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5VGV4dEVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJleHByZXNzaW9uXCI7IH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidGV4dFwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRleHRFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJodG1sXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5SHRtbEVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImV4cHJlc3Npb25cIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlFeHByZXNzaW9uRWRpdG9yKCk7IH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3J9IGZyb20gXCIuLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3JcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5TmVzdGVkUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBrb0VkaXRJdGVtOiBhbnk7IGtvSXNMaXN0OiBhbnk7XG4gICAgb25FZGl0SXRlbUNsaWNrOiBhbnk7IG9uQ2FuY2VsRWRpdEl0ZW1DbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29FZGl0SXRlbSA9IGtvLm9ic2VydmFibGUobnVsbCk7XG4gICAgICAgIHRoaXMua29Jc0xpc3QgPSBrby5vYnNlcnZhYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmtvRWRpdEl0ZW0uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBcbiAgICAgICAgICAgIHNlbGYua29Jc0xpc3Qoc2VsZi5rb0VkaXRJdGVtKCkgPT0gbnVsbCk7IFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbkVkaXRJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmtvRWRpdEl0ZW0oaXRlbSk7IH07XG4gICAgICAgIHRoaXMub25DYW5jZWxFZGl0SXRlbUNsaWNrID0gZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgICAgIHZhciBlZGl0SXRlbSA9IHNlbGYua29FZGl0SXRlbSgpO1xuICAgICAgICAgICAgaWYoZWRpdEl0ZW0uaXRlbUVkaXRvciAmJiBlZGl0SXRlbS5pdGVtRWRpdG9yLmhhc0Vycm9yKCkpIHJldHVybjtcbiAgICAgICAgICAgIHNlbGYua29FZGl0SXRlbShudWxsKTsgXG4gICAgICAgIH07XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua29JdGVtcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5rb0l0ZW1zKClbaV0uaGFzRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgc3VwZXIub25CZWZvcmVBcHBseSgpO1xuICAgICAgICB2YXIgaW50ZXJuYWxJdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW50ZXJuYWxJdGVtcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGludGVybmFsSXRlbXNbaV0uYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleU5lc3RlZFByb3BlcnR5RWRpdG9ySXRlbSB7XG4gICAgcHJpdmF0ZSBpdGVtRWRpdG9yVmFsdWU6IFN1cnZleVF1ZXN0aW9uRWRpdG9yO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGl0ZW1FZGl0b3IoKTogU3VydmV5UXVlc3Rpb25FZGl0b3Ige1xuICAgICAgICBpZighdGhpcy5pdGVtRWRpdG9yVmFsdWUpIHRoaXMuaXRlbUVkaXRvclZhbHVlID0gdGhpcy5jcmVhdGVTdXJ2ZXlRdWVzdGlvbkVkaXRvcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtRWRpdG9yVmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5pdGVtRWRpdG9yVmFsdWUgJiYgdGhpcy5pdGVtRWRpdG9yVmFsdWUuaGFzRXJyb3IoKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1cnZleVF1ZXN0aW9uRWRpdG9yKCkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgaWYodGhpcy5pdGVtRWRpdG9yVmFsdWUpIHRoaXMuaXRlbUVkaXRvclZhbHVlLmFwcGx5KCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU5lc3RlZFByb3BlcnR5RWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlKU09ONX0gZnJvbSBcIi4vanNvbjVcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmNsYXNzIFRleHRQYXJzZXJQcm9wZXJ5IHtcbiAgICBpc0ZvdW5kOiBib29sZWFuO1xuICAgIHByb3BlcnRpZXNDb3VudDogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG4gICAgdmFsdWVTdGFydDogbnVtYmVyO1xuICAgIHZhbHVlRW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUZXh0V29ya2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIG5ld0xpbmVDaGFyOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yczogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIHByaXZhdGUganNvblZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlPYmplY3RzOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgaXNTdXJ2ZXlBc1BhZ2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy50ZXh0IHx8IHRoaXMudGV4dC50cmltKCkgPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJ7fVwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzSnNvbkNvcnJlY3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlICE9IG51bGw7IH1cbiAgICBwcm90ZWN0ZWQgcHJvY2VzcygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuanNvblZhbHVlID0gbmV3IFN1cnZleUpTT041KDEpLnBhcnNlKHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHsgcG9zOiB7IHN0YXJ0OiBlcnJvci5hdCwgZW5kOiAtMSB9LCB0ZXh0OiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmpzb25WYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnModGhpcy5qc29uVmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IG5ldyBTdXJ2ZXkuU3VydmV5KHRoaXMuanNvblZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlLmpzb25FcnJvcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMuc3VydmV5VmFsdWUuanNvbkVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7IHBvczogeyBzdGFydDogZXJyb3IuYXQsIGVuZDogLTEgfSwgdGV4dDogZXJyb3IuZ2V0RnVsbERlc2NyaXB0aW9uKCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cyA9IHRoaXMuY3JlYXRlU3VydmV5T2JqZWN0cygpO1xuICAgICAgICB0aGlzLnNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KHRoaXMuc3VydmV5T2JqZWN0cyk7XG4gICAgICAgIHRoaXMuc2V0RWRpdG9yUG9zaXRpb25CeUNoYXJ0QXQodGhpcy5lcnJvcnMpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUpzb25Qb3NpdGlvbnMoanNvbk9iajogYW55KSB7XG4gICAgICAgIGpzb25PYmpbXCJwb3NcIl1bXCJzZWxmXCJdID0ganNvbk9iajtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb25PYmopIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBqc29uT2JqW2tleV07XG4gICAgICAgICAgICBpZiAob2JqICYmIG9ialtcInBvc1wiXSkge1xuICAgICAgICAgICAgICAgIGpzb25PYmpbXCJwb3NcIl1ba2V5XSA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnMob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVN1cnZleU9iamVjdHMoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUgPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgdGhpcy5pc1N1cnZleUFzUGFnZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5VmFsdWUucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlc1tpXTtcbiAgICAgICAgICAgIGlmIChpID09IDAgJiYgIXBhZ2VbXCJwb3NcIl0pIHtcbiAgICAgICAgICAgICAgICBwYWdlW1wicG9zXCJdID0gdGhpcy5zdXJ2ZXlWYWx1ZVtcInBvc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VydmV5QXNQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UucXVlc3Rpb25zW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIHNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KG9iamVjdHM6IGFueVtdKSB7XG4gICAgICAgIGlmIChvYmplY3RzID09IG51bGwgfHwgb2JqZWN0cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB7IHJvdzogMCwgY29sdW1uOiAwIH07XG4gICAgICAgIHZhciBhdE9iamVjdHNBcnJheSA9IHRoaXMuZ2V0QXRBcnJheShvYmplY3RzKTtcbiAgICAgICAgdmFyIHN0YXJ0QXQ6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXRPYmplY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhdCA9IGF0T2JqZWN0c0FycmF5W2ldLmF0O1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc3Rpb25CeUNoYXJ0QXQocG9zaXRpb24sIHN0YXJ0QXQsIGF0KTtcbiAgICAgICAgICAgIHZhciBvYmogPSBhdE9iamVjdHNBcnJheVtpXS5vYmo7XG4gICAgICAgICAgICBpZiAoIW9iai5wb3NpdGlvbikgb2JqLnBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoYXQgPT0gb2JqLnBvcy5zdGFydCkge1xuICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi5zdGFydCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXQgPT0gb2JqLnBvcy5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBvc2l0aW9uLmVuZCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0QXQgPSBhdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFBvc3Rpb25CeUNoYXJ0QXQoc3RhcnRQb3NpdGlvbjogYW55LCBzdGFydEF0OiBudW1iZXIsIGF0OiBudW1iZXIpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0geyByb3c6IHN0YXJ0UG9zaXRpb24ucm93LCBjb2x1bW46IHN0YXJ0UG9zaXRpb24uY29sdW1uIH07XG4gICAgICAgIHZhciBjdXJDaGFyID0gc3RhcnRBdDtcbiAgICAgICAgd2hpbGUgKGN1ckNoYXIgPCBhdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5jaGFyQXQoY3VyQ2hhcikgPT0gU3VydmV5VGV4dFdvcmtlci5uZXdMaW5lQ2hhcikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5yb3crKztcbiAgICAgICAgICAgICAgICByZXN1bHQuY29sdW1uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbHVtbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VyQ2hhcisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXRBcnJheShvYmplY3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuICAgICAgICAgICAgdmFyIHBvcyA9IG9iai5wb3M7XG4gICAgICAgICAgICBpZiAoIXBvcykgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGF0OiBwb3Muc3RhcnQsIG9iajogb2JqIH0pO1xuICAgICAgICAgICAgaWYgKHBvcy5lbmQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBhdDogcG9zLmVuZCwgb2JqOiBvYmogfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5zb3J0KChlbDEsIGVsMikgPT4ge1xuICAgICAgICAgICAgaWYgKGVsMS5hdCA+IGVsMi5hdCkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoZWwxLmF0IDwgZWwyLmF0KSByZXR1cm4gLTE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0V29ya2VyLnRzIiwiLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIEpTT041LCBodHRwOi8vanNvbjUub3JnL1xuLy8gVGhlIG1vZGlmaWNhdGlvbiBmb3IgZ2V0dGluZyBvYmplY3QgYW5kIHByb3BlcnRpZXMgbG9jYXRpb24gJ2F0JyB3ZXJlIG1hZGVuLlxuXG5leHBvcnQgY2xhc3MgU3VydmV5SlNPTjUge1xuICAgIHB1YmxpYyBzdGF0aWMgcG9zaXRpb25OYW1lID0gXCJwb3NcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGVlID0ge1xuICAgICAgICBcIidcIjogXCInXCIsXG4gICAgICAgICdcIic6ICdcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFwnLFxuICAgICAgICAnLyc6ICcvJyxcbiAgICAgICAgJ1xcbic6ICcnLCAgICAgICAvLyBSZXBsYWNlIGVzY2FwZWQgbmV3bGluZXMgaW4gc3RyaW5ncyB3LyBlbXB0eSBzdHJpbmdcbiAgICAgICAgYjogJ1xcYicsXG4gICAgICAgIGY6ICdcXGYnLFxuICAgICAgICBuOiAnXFxuJyxcbiAgICAgICAgcjogJ1xccicsXG4gICAgICAgIHQ6ICdcXHQnXG4gICAgfTtcbiAgICBwcml2YXRlIHN0YXRpYyB3cyA9IFtcbiAgICAgICAgJyAnLFxuICAgICAgICAnXFx0JyxcbiAgICAgICAgJ1xccicsXG4gICAgICAgICdcXG4nLFxuICAgICAgICAnXFx2JyxcbiAgICAgICAgJ1xcZicsXG4gICAgICAgICdcXHhBMCcsXG4gICAgICAgICdcXHVGRUZGJ1xuICAgIF07XG4gICAgcHJpdmF0ZSBlbmRBdDogbnVtYmVyO1xuICAgIHByaXZhdGUgYXQ6IG51bWJlcjsgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBwcml2YXRlIGNoOiBhbnk7ICAgICAvLyBUaGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBhcnNlVHlwZTogbnVtYmVyOyAvLyAwIC0gc3RhZGFyZCwgMSAtIGdldCBpbmZvcm1hdGlvbiBhYm91dCBvYmplY3RzLCAyIC0gZ2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBwcm9wZXJ0aWVzXG4gICAgY29uc3RydWN0b3IocGFyc2VUeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyc2VUeXBlID0gcGFyc2VUeXBlO1xuICAgIH1cbiAgICBwdWJsaWMgcGFyc2Uoc291cmNlOiBhbnksIHJldml2ZXI6IGFueSA9IG51bGwsIHN0YXJ0RnJvbTogbnVtYmVyID0gMCwgZW5kQXQ6IG51bWJlciA9IC0xKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnRleHQgPSBTdHJpbmcoc291cmNlKTtcbiAgICAgICAgdGhpcy5hdCA9IHN0YXJ0RnJvbTtcbiAgICAgICAgdGhpcy5lbmRBdCA9IGVuZEF0O1xuICAgICAgICB0aGlzLmNoID0gJyAnO1xuICAgICAgICByZXN1bHQgPSB0aGlzLnZhbHVlKCk7XG4gICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJTeW50YXggZXJyb3JcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHJldml2ZXIgZnVuY3Rpb24sIHdlIHJlY3Vyc2l2ZWx5IHdhbGsgdGhlIG5ldyBzdHJ1Y3R1cmUsXG4gICAgICAgIC8vIHBhc3NpbmcgZWFjaCBuYW1lL3ZhbHVlIHBhaXIgdG8gdGhlIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlXG4gICAgICAgIC8vIHRyYW5zZm9ybWF0aW9uLCBzdGFydGluZyB3aXRoIGEgdGVtcG9yYXJ5IHJvb3Qgb2JqZWN0IHRoYXQgaG9sZHMgdGhlIHJlc3VsdFxuICAgICAgICAvLyBpbiBhbiBlbXB0eSBrZXkuIElmIHRoZXJlIGlzIG5vdCBhIHJldml2ZXIgZnVuY3Rpb24sIHdlIHNpbXBseSByZXR1cm4gdGhlXG4gICAgICAgIC8vIHJlc3VsdC5cblxuICAgICAgICByZXR1cm4gdHlwZW9mIHJldml2ZXIgPT09ICdmdW5jdGlvbicgPyAoZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuICAgICAgICAgICAgdmFyIGssIHYsIHZhbHVlID0gaG9sZGVyW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9ICh7ICcnOiByZXN1bHQgfSwgJycpKSA6IHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBlcnJvcihtOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gQ2FsbCBlcnJvciB3aGVuIHNvbWV0aGluZyBpcyB3cm9uZy5cbiAgICAgICAgdmFyIGVycm9yID0gbmV3IFN5bnRheEVycm9yKCk7XG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPSBtO1xuICAgICAgICBlcnJvcltcImF0XCJdID0gdGhpcy5hdDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHByaXZhdGUgbmV4dChjOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIC8vIElmIGEgYyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHZlcmlmeSB0aGF0IGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuICAgICAgICBpZiAoYyAmJiBjICE9PSB0aGlzLmNoKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiRXhwZWN0ZWQgJ1wiICsgYyArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHRoaXMuY2ggKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyLiBXaGVuIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMsXG4gICAgICAgIC8vIHJldHVybiB0aGUgZW1wdHkgc3RyaW5nLlxuICAgICAgICB0aGlzLmNoID0gdGhpcy5jaGFydEF0KCk7XG4gICAgICAgIHRoaXMuYXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2g7XG4gICAgfVxuICAgIHByaXZhdGUgcGVlaygpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyIHdpdGhvdXQgY29uc3VtaW5nIGl0IG9yXG4gICAgICAgIC8vIGFzc2lnbmluZyBpdCB0byB0aGUgdGhpcy5jaCB2YXJhaWJsZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcnRBdCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGNoYXJ0QXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZEF0ID4gLTEgJiYgdGhpcy5hdCA+PSB0aGlzLmVuZEF0KSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQuY2hhckF0KHRoaXMuYXQpO1xuICAgIH1cbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKSB7XG4gICAgICAgIC8vIFBhcnNlIGFuIGlkZW50aWZpZXIuIE5vcm1hbGx5LCByZXNlcnZlZCB3b3JkcyBhcmUgZGlzYWxsb3dlZCBoZXJlLCBidXQgd2VcbiAgICAgICAgLy8gb25seSB1c2UgdGhpcyBmb3IgdW5xdW90ZWQgb2JqZWN0IGtleXMsIHdoZXJlIHJlc2VydmVkIHdvcmRzIGFyZSBhbGxvd2VkLFxuICAgICAgICAvLyBzbyB3ZSBkb24ndCBjaGVjayBmb3IgdGhvc2UgaGVyZS4gUmVmZXJlbmNlczpcbiAgICAgICAgLy8gLSBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3g3LjZcbiAgICAgICAgLy8gLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9Db3JlX0phdmFTY3JpcHRfMS41X0d1aWRlL0NvcmVfTGFuZ3VhZ2VfRmVhdHVyZXMjVmFyaWFibGVzXG4gICAgICAgIC8vIC0gaHR0cDovL2RvY3N0b3JlLm1pay51YS9vcmVsbHkvd2VicHJvZy9qc2NyaXB0L2NoMDJfMDcuaHRtXG4gICAgICAgIC8vIFRPRE8gSWRlbnRpZmllcnMgY2FuIGhhdmUgVW5pY29kZSBcImxldHRlcnNcIiBpbiB0aGVtOyBhZGQgc3VwcG9ydCBmb3IgdGhvc2UuXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmNoO1xuXG4gICAgICAgIC8vIElkZW50aWZpZXJzIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgXyBvciAkLlxuICAgICAgICBpZiAoKHRoaXMuY2ggIT09ICdfJyAmJiB0aGlzLmNoICE9PSAnJCcpICYmXG4gICAgICAgICAgICAodGhpcy5jaCA8ICdhJyB8fCB0aGlzLmNoID4gJ3onKSAmJlxuICAgICAgICAgICAgKHRoaXMuY2ggPCAnQScgfHwgdGhpcy5jaCA+ICdaJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgaWRlbnRpZmllclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1YnNlcXVlbnQgY2hhcmFjdGVycyBjYW4gY29udGFpbiBkaWdpdHMuXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHQoKSAmJiAoXG4gICAgICAgIHRoaXMuY2ggPT09ICdfJyB8fCB0aGlzLmNoID09PSAnJCcgfHxcbiAgICAgICAgKHRoaXMuY2ggPj0gJ2EnICYmIHRoaXMuY2ggPD0gJ3onKSB8fFxuICAgICAgICAodGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnWicpIHx8XG4gICAgICAgICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JykpKSB7XG4gICAgICAgICAgICBrZXkgKz0gdGhpcy5jaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHByaXZhdGUgbnVtYmVyKCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgbnVtYmVyIHZhbHVlLlxuXG4gICAgICAgIHZhciBudW1iZXIsXG4gICAgICAgICAgICBzaWduID0gJycsXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGJhc2UgPSAxMDtcblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy0nIHx8IHRoaXMuY2ggPT09ICcrJykge1xuICAgICAgICAgICAgc2lnbiA9IHRoaXMuY2g7XG4gICAgICAgICAgICB0aGlzLm5leHQodGhpcy5jaCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBJbmZpbml0eSAoY291bGQgdHdlYWsgdG8gYWxsb3cgb3RoZXIgd29yZHMpOlxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ0knKSB7XG4gICAgICAgICAgICBudW1iZXIgPSB0aGlzLndvcmQoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJyB8fCBpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignVW5leHBlY3RlZCB3b3JkIGZvciBudW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoc2lnbiA9PT0gJy0nKSA/IC1udW1iZXIgOiBudW1iZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBOYU5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdOJykge1xuICAgICAgICAgICAgbnVtYmVyID0gdGhpcy53b3JkKCk7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdleHBlY3RlZCB3b3JkIHRvIGJlIE5hTicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWdub3JlIHNpZ24gYXMgLU5hTiBhbHNvIGlzIE5hTlxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnMCcpIHtcbiAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3gnIHx8IHRoaXMuY2ggPT09ICdYJykge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGJhc2UgPSAxNjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdPY3RhbCBsaXRlcmFsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGJhc2UpIHtcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gJy4nO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkgJiYgdGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnZScgfHwgdGhpcy5jaCA9PT0gJ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICctJyB8fCB0aGlzLmNoID09PSAnKycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScgfHwgdGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnRicgfHwgdGhpcy5jaCA+PSAnYScgJiYgdGhpcy5jaCA8PSAnZicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduID09PSAnLScpIHtcbiAgICAgICAgICAgIG51bWJlciA9IC1zdHJpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1iZXIgPSArc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmFkIG51bWJlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzdHJpbmcoKSB7XG5cbiAgICAgICAgLy8gUGFyc2UgYSBzdHJpbmcgdmFsdWUuXG5cbiAgICAgICAgdmFyIGhleCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGRlbGltLCAgICAgIC8vIGRvdWJsZSBxdW90ZSBvciBzaW5nbGUgcXVvdGVcbiAgICAgICAgICAgIHVmZmZmO1xuXG4gICAgICAgIC8vIFdoZW4gcGFyc2luZyBmb3Igc3RyaW5nIHZhbHVlcywgd2UgbXVzdCBsb29rIGZvciAnIG9yIFwiIGFuZCBcXCBjaGFyYWN0ZXJzLlxuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnXCInIHx8IHRoaXMuY2ggPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICBkZWxpbSA9IHRoaXMuY2g7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gZGVsaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVmZmZmID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXggPSBwYXJzZUludCh0aGlzLm5leHQoKSwgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNGaW5pdGUoaGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWZmZmYgPSB1ZmZmZiAqIDE2ICsgaGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodWZmZmYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICdcXHInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIFN1cnZleUpTT041LmVzY2FwZWVbdGhpcy5jaF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3VydmV5SlNPTjUuZXNjYXBlZVt0aGlzLmNoXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmVzY2FwZWQgbmV3bGluZXMgYXJlIGludmFsaWQ7IHNlZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FzZWVtay9qc29uNS9pc3N1ZXMvMjRcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyB0aGlzIGZlZWxzIHNwZWNpYWwtY2FzZWQ7IGFyZSB0aGVyZSBvdGhlclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnZhbGlkIHVuZXNjYXBlZCBjaGFycz9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgc3RyaW5nXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGlubGluZUNvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhbiBpbmxpbmUgY29tbWVudCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuIFRoZSBjdXJyZW50IGNoYXJhY3RlciBzaG91bGRcbiAgICAgICAgLy8gYmUgdGhlIHNlY29uZCAvIGNoYXJhY3RlciBpbiB0aGUgLy8gcGFpciB0aGF0IGJlZ2lucyB0aGlzIGlubGluZSBjb21tZW50LlxuICAgICAgICAvLyBUbyBmaW5pc2ggdGhlIGlubGluZSBjb21tZW50LCB3ZSBsb29rIGZvciBhIG5ld2xpbmUgb3IgdGhlIGVuZCBvZiB0aGUgdGV4dC5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGFuIGlubGluZSBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1xcbicgfHwgdGhpcy5jaCA9PT0gJ1xccicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuY2gpO1xuICAgIH1cbiAgICBwcml2YXRlIGJsb2NrQ29tbWVudCgpIHtcblxuICAgICAgICAvLyBTa2lwIGEgYmxvY2sgY29tbWVudCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuIFRoZSBjdXJyZW50IGNoYXJhY3RlciBzaG91bGQgYmVcbiAgICAgICAgLy8gdGhlICogY2hhcmFjdGVyIGluIHRoZSAvKiBwYWlyIHRoYXQgYmVnaW5zIHRoaXMgYmxvY2sgY29tbWVudC5cbiAgICAgICAgLy8gVG8gZmluaXNoIHRoZSBibG9jayBjb21tZW50LCB3ZSBsb29rIGZvciBhbiBlbmRpbmcgKi8gcGFpciBvZiBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyBidXQgd2UgYWxzbyB3YXRjaCBmb3IgdGhlIGVuZCBvZiB0ZXh0IGJlZm9yZSB0aGUgY29tbWVudCBpcyB0ZXJtaW5hdGVkLlxuXG4gICAgICAgIGlmICh0aGlzLmNoICE9PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJOb3QgYSBibG9jayBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcqJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodGhpcy5jaCk7XG5cbiAgICAgICAgdGhpcy5lcnJvcihcIlVudGVybWluYXRlZCBibG9jayBjb21tZW50XCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhIGNvbW1lbnQsIHdoZXRoZXIgaW5saW5lIG9yIGJsb2NrLWxldmVsLCBhc3N1bWluZyB0aGlzIGlzIG9uZS5cbiAgICAgICAgLy8gQ29tbWVudHMgYWx3YXlzIGJlZ2luIHdpdGggYSAvIGNoYXJhY3Rlci5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGEgY29tbWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmV4dCgnLycpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnLycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5saW5lQ29tbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICcqJykge1xuICAgICAgICAgICAgdGhpcy5ibG9ja0NvbW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJVbnJlY29nbml6ZWQgY29tbWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHdoaXRlKCkge1xuXG4gICAgICAgIC8vIFNraXAgd2hpdGVzcGFjZSBhbmQgY29tbWVudHMuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSdyZSBkZXRlY3RpbmcgY29tbWVudHMgYnkgb25seSBhIHNpbmdsZSAvIGNoYXJhY3Rlci5cbiAgICAgICAgLy8gVGhpcyB3b3JrcyBzaW5jZSByZWd1bGFyIGV4cHJlc3Npb25zIGFyZSBub3QgdmFsaWQgSlNPTig1KSwgYnV0IHRoaXMgd2lsbFxuICAgICAgICAvLyBicmVhayBpZiB0aGVyZSBhcmUgb3RoZXIgdmFsaWQgdmFsdWVzIHRoYXQgYmVnaW4gd2l0aCBhIC8gY2hhcmFjdGVyIVxuXG4gICAgICAgIHdoaWxlICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFN1cnZleUpTT041LndzLmluZGV4T2YodGhpcy5jaCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB3b3JkKCk6IGFueSB7XG5cbiAgICAgICAgLy8gdHJ1ZSwgZmFsc2UsIG9yIG51bGwuXG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2UnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnYScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgncycpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnSSc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdJJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdmJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiVW5leHBlY3RlZCAnXCIgKyB0aGlzLmNoICsgXCInXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGFycmF5KCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGFuIGFycmF5IHZhbHVlLlxuXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnWycpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgnWycpO1xuICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ10nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnXScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgYXJyYXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRVM1IGFsbG93cyBvbWl0dGluZyBlbGVtZW50cyBpbiBhcnJheXMsIGUuZy4gWyxdIGFuZFxuICAgICAgICAgICAgICAgIC8vIFssbnVsbF0uIFdlIGRvbid0IGFsbG93IHRoaXMgaW4gSlNPTjUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiTWlzc2luZyBhcnJheSBlbGVtZW50XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGhpcy52YWx1ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyB2YWx1ZSwgdGhpcyBuZWVkcyB0b1xuICAgICAgICAgICAgICAgIC8vIGJlIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoICE9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgYXJyYXlcIik7XG4gICAgfVxuICAgIHByaXZhdGUgb2JqZWN0KCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGFuIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSB0cnVlLFxuICAgICAgICAgICAgb2JqZWN0ID0ge307XG4gICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDApIHtcbiAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdID0geyBzdGFydDogdGhpcy5hdCAtIDEgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3snKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoJ3snKTtcbiAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV0uZW5kID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd9Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgb2JqZWN0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gS2V5cyBjYW4gYmUgdW5xdW90ZWQuIElmIHRoZXkgYXJlLCB0aGV5IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyB2YWxpZCBKUyBpZGVudGlmaWVycy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1wiJyB8fCB0aGlzLmNoID09PSBcIidcIikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnN0cmluZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0gPSB7IHN0YXJ0OiBzdGFydCwgdmFsdWVTdGFydDogdGhpcy5hdCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJzonKTtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHRoaXMudmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0udmFsdWVFbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyBwYWlyLCB0aGlzIG5lZWRzIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoICE9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXS5lbmQgPSB0aGlzLmF0IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ30nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLnZhbHVlRW5kLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLmVuZC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnLCcpO1xuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiQmFkIG9iamVjdFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB2YWx1ZSgpOiBhbnkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgSlNPTiB2YWx1ZS4gSXQgY291bGQgYmUgYW4gb2JqZWN0LCBhbiBhcnJheSwgYSBzdHJpbmcsIGEgbnVtYmVyLFxuICAgICAgICAvLyBvciBhIHdvcmQuXG5cbiAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdCgpO1xuICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkoKTtcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JyA/IHRoaXMubnVtYmVyKCkgOiB0aGlzLndvcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVwbGFjZXI6IGFueTtcbiAgICBwcml2YXRlIGluZGVudFN0cjogc3RyaW5nO1xuICAgIHByaXZhdGUgb2JqU3RhY2s7XG5cbiAgICBwdWJsaWMgc3RyaW5naWZ5KG9iajogYW55LCByZXBsYWNlcjogYW55ID0gbnVsbCwgc3BhY2U6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcGxhY2VyICYmICh0eXBlb2YgKHJlcGxhY2VyKSAhPT0gXCJmdW5jdGlvblwiICYmICF0aGlzLmlzQXJyYXkocmVwbGFjZXIpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXBsYWNlciBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgICAgIHRoaXMuaW5kZW50U3RyID0gdGhpcy5nZXRJbmRlbnQoc3BhY2UpO1xuICAgICAgICB0aGlzLm9ialN0YWNrID0gW107XG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZS4uLndoZW4gdW5kZWZpbmVkIGlzIHVzZWQgaW5zaWRlIG9mXG4gICAgICAgIC8vIGEgY29tcG91bmQgb2JqZWN0L2FycmF5LCByZXR1cm4gbnVsbC5cbiAgICAgICAgLy8gYnV0IHdoZW4gdG9wLWxldmVsLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIHZhciB0b3BMZXZlbEhvbGRlciA9IHsgXCJcIjogb2JqIH07XG4gICAgICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKHRvcExldmVsSG9sZGVyLCAnJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJpbmdpZnkodG9wTGV2ZWxIb2xkZXIsICcnLCB0cnVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbmRlbnQoc3BhY2U6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzcGFjZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGFjZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcGFjZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSBcIm51bWJlclwiICYmIHNwYWNlID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW5kZW50KFwiIFwiLCBzcGFjZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xuICAgICAgICB2YXIgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSB2YWx1ZSB3aXRoIGl0cyB0b0pTT04gdmFsdWUgZmlyc3QsIGlmIHBvc3NpYmxlXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50b0pTT04gJiYgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHVzZXItc3VwcGxpZWQgcmVwbGFjZXIgaWYgYSBmdW5jdGlvbiwgY2FsbCBpdC4gSWYgaXQncyBhbiBhcnJheSwgY2hlY2sgb2JqZWN0cycgc3RyaW5nIGtleXMgZm9yXG4gICAgICAgIC8vIHByZXNlbmNlIGluIHRoZSBhcnJheSAocmVtb3ZpbmcgdGhlIGtleS92YWx1ZSBwYWlyIGZyb20gdGhlIHJlc3VsdGluZyBKU09OIGlmIHRoZSBrZXkgaXMgbWlzc2luZykuXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucmVwbGFjZXIpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlcGxhY2VyKSB7XG4gICAgICAgICAgICBpZiAoaXNUb3BMZXZlbCB8fCB0aGlzLmlzQXJyYXkoaG9sZGVyKSB8fCB0aGlzLnJlcGxhY2VyLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1dvcmRDaGFyKGNoYXI6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknKSB8fFxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZFN0YXJ0KGNoYXI6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKSB8fFxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZChrZXk6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNXb3JkU3RhcnQoa2V5WzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMSwgbGVuZ3RoID0ga2V5Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dvcmRDaGFyKGtleVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIHBvbHlmaWxsc1xuICAgIHByaXZhdGUgaXNBcnJheShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNEYXRlKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNOYU4odmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmIHZhbCAhPT0gdmFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGb3JDaXJjdWxhcihvYmo6IGFueSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2JqU3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ialN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG1ha2VJbmRlbnQoc3RyOiBzdHJpbmcsIG51bTogbnVtYmVyLCBub05ld0xpbmU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXN0cikge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5kZW50YXRpb24gbm8gbW9yZSB0aGFuIDEwIGNoYXJzXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGVudCA9IG5vTmV3TGluZSA/IFwiXCIgOiBcIlxcblwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBpbmRlbnQgKz0gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGVudDtcbiAgICB9XG5cbiAgICAvLyBDb3BpZWQgZnJvbSBDcm9rZm9yZCdzIGltcGxlbWVudGF0aW9uIG9mIEpTT05cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2RvdWdsYXNjcm9ja2ZvcmQvSlNPTi1qcy9ibG9iL2UzOWRiNGI3ZTYyNDlmMDRhMTk1ZTdkZDA4NDBlNjEwY2M5ZTk0MWUvanNvbjIuanMjTDE5NVxuICAgIC8vIEJlZ2luXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3ggPSAvW1xcdTAwMDBcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nO1xuICAgIHByaXZhdGUgc3RhdGljIG1ldGEgPSB7IC8vIHRhYmxlIG9mIGNoYXJhY3RlciBzdWJzdGl0dXRpb25zXG4gICAgICAgICdcXGInOiAnXFxcXGInLFxuICAgICAgICAnXFx0JzogJ1xcXFx0JyxcbiAgICAgICAgJ1xcbic6ICdcXFxcbicsXG4gICAgICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICAgICAnXFxyJzogJ1xcXFxyJyxcbiAgICAgICAgJ1wiJzogJ1xcXFxcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFxcXFxcJ1xuICAgIH07XG4gICAgcHJpdmF0ZSBlc2NhcGVTdHJpbmcoc3RyOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXG4gICAgICAgIC8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuICAgICAgICAvLyBzZXF1ZW5jZXMuXG4gICAgICAgIFN1cnZleUpTT041LmVzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gU3VydmV5SlNPTjUuZXNjYXBhYmxlLnRlc3Qoc3RyKSA/ICdcIicgKyBzdHIucmVwbGFjZShTdXJ2ZXlKU09ONS5lc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IFN1cnZleUpTT041Lm1ldGFbYV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICBjIDpcbiAgICAgICAgICAgICdcXFxcdScgKyAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICB9KSArICdcIicgOiAnXCInICsgc3RyICsgJ1wiJztcbiAgICB9XG4gICAgLy8gRW5kXG5cbiAgICBwcml2YXRlIGludGVybmFsU3RyaW5naWZ5KGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xuICAgICAgICB2YXIgYnVmZmVyLCByZXM7XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgdmFsdWUsIGlmIG5lY2Vzc2FyeVxuICAgICAgICB2YXIgb2JqX3BhcnQgPSB0aGlzLmdldFJlcGxhY2VkVmFsdWVPclVuZGVmaW5lZChob2xkZXIsIGtleSwgaXNUb3BMZXZlbCk7XG5cbiAgICAgICAgaWYgKG9ial9wYXJ0ICYmICF0aGlzLmlzRGF0ZShvYmpfcGFydCkpIHtcbiAgICAgICAgICAgIC8vIHVuYm94IG9iamVjdHNcbiAgICAgICAgICAgIC8vIGRvbid0IHVuYm94IGRhdGVzLCBzaW5jZSB3aWxsIHR1cm4gaXQgaW50byBudW1iZXJcbiAgICAgICAgICAgIG9ial9wYXJ0ID0gb2JqX3BhcnQudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIG9ial9wYXJ0KSB7XG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpfcGFydC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKG9ial9wYXJ0KSB8fCAhaXNGaW5pdGUob2JqX3BhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ial9wYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lc2NhcGVTdHJpbmcob2JqX3BhcnQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FycmF5KG9ial9wYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yQ2lyY3VsYXIob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBcIltcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wdXNoKG9ial9wYXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ial9wYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzID09PSBudWxsIHx8IHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IG9ial9wYXJ0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZW50U3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgsIHRydWUpICsgXCJdXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvckNpcmN1bGFyKG9ial9wYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gXCJ7XCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub25FbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnB1c2gob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9ial9wYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBwcm9wLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb3BMZXZlbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25FbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wS2V5ID0gdGhpcy5pc1dvcmQocHJvcCkgPyBwcm9wIDogdGhpcy5lc2NhcGVTdHJpbmcocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBwcm9wS2V5ICsgXCI6XCIgKyAodGhpcy5pbmRlbnRTdHIgPyAnICcgOiAnJykgKyB2YWx1ZSArIFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9uRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zdWJzdHJpbmcoMCwgYnVmZmVyLmxlbmd0aCAtIDEpICsgdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCkgKyBcIn1cIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9ICd7fSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gZnVuY3Rpb25zIGFuZCB1bmRlZmluZWQgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc29uNS50cyIsImltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFRhcmdldEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYWdlOiBTdXJ2ZXkuUGFnZSwgcHVibGljIHRhcmdldDogYW55LCBwdWJsaWMgc291cmNlOiBhbnkpIHtcblxuICAgIH1cbiAgICBwdWJsaWMgbW92ZVRvKGRlc3RpbmF0aW9uOiBhbnksIGlzQm90dG9tOiBib29sZWFuLCBpc0VkZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGVzdDogXCIgKyBkZXN0aW5hdGlvbi5uYW1lICsgXCIsIGlzQm90dG9tOlwiICsgaXNCb3R0b20gKyBcIiwgaXNFZGdlOlwiICsgaXNFZGdlKTtcbiAgICAgICAgaXNFZGdlID0gaXNFZGdlIHx8ICFkZXN0aW5hdGlvbi5pc1BhbmVsO1xuICAgICAgICBpZihkZXN0aW5hdGlvbiA9PT0gdGhpcy50YXJnZXQpIHJldHVybiAhdGhpcy50YXJnZXQuaXNQYW5lbDtcbiAgICAgICAgdmFyIGRlc3RJbmZvID0gdGhpcy5maW5kSW5mbyhkZXN0aW5hdGlvbiwgaXNFZGdlKTtcbiAgICAgICAgaWYoIWRlc3RJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldEluZm8gPSB0aGlzLmZpbmRJbmZvKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvKGRlc3RJbmZvLCBpc0JvdHRvbSwgaXNFZGdlKTtcbiAgICAgICAgaWYodGhpcy5pc0luZm9FcXVhbHModGFyZ2V0SW5mbywgZGVzdEluZm8pKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbGVhckJ5SW5mbyh0YXJnZXRJbmZvKTtcbiAgICAgICAgZGVzdEluZm8gPSB0aGlzLmZpbmRJbmZvKGRlc3RpbmF0aW9uLCBpc0VkZ2UpO1xuICAgICAgICBpZighZGVzdEluZm8pIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvKGRlc3RJbmZvLCBpc0JvdHRvbSwgaXNFZGdlKTtcbiAgICAgICAgaWYoIXRoaXMuY2FuTW92ZShkZXN0SW5mbykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGRJbmZvKGRlc3RJbmZvKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBkb0Ryb3AoKSB7XG4gICAgICAgIHZhciBkZXN0SW5mbyA9IHRoaXMuZmluZEluZm8odGhpcy50YXJnZXQpO1xuICAgICAgICBpZighZGVzdEluZm8pIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5SW5mbyhkZXN0SW5mbyk7XG4gICAgICAgIGRlc3RJbmZvLnBhbmVsLmFkZEVsZW1lbnQodGhpcy5nZXROZXdUYXJnZXRFbGVtZW50KCksIGluZGV4KTsgXG4gICAgICAgIGlmKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICB2YXIgc3JjSW5mbyA9IHRoaXMuZmluZEluZm8odGhpcy5zb3VyY2UpO1xuICAgICAgICAgICAgdmFyIHBhbmVsID0gc3JjSW5mbyA/IHNyY0luZm8ucGFuZWwgOiB0aGlzLnBhZ2U7XG4gICAgICAgICAgICBwYW5lbC5yZW1vdmVFbGVtZW50KHRoaXMuc291cmNlKTsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmNsZWFyQnlJbmZvKHRoaXMuZmluZEluZm8odGhpcy50YXJnZXQpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbmRleEJ5SW5mbyhpbmZvOiBhbnkpIHtcbiAgICAgICAgaWYoIWluZm8pIHJldHVybiAwO1xuICAgICAgICB2YXIgcm93cyA9IGluZm8ucGFuZWwua29Sb3dzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbmZvLnJJbmRleDsgaSArKykge1xuICAgICAgICAgICAgaW5kZXggKz0gcm93c1tpXVtcImtvRWxlbWVudHNcIl0oKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4ICsgaW5mby5lbEluZGV4O1xuICAgIH1cbiAgICBwcml2YXRlIGNhbk1vdmUoZGVzdEluZm86IGFueSkgOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy50YXJnZXQuaXNQYW5lbCAmJiBkZXN0SW5mby5lbGVtZW50KSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldCA9PSBkZXN0SW5mby5lbGVtZW50IHx8IHRoaXMudGFyZ2V0LmNvbnRhaW5zRWxlbWVudChkZXN0SW5mby5lbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5zb3VyY2UgJiYgKHRoaXMuc291cmNlID09IGRlc3RJbmZvLmVsZW1lbnQgfHwgdGhpcy5zb3VyY2UuY29udGFpbnNFbGVtZW50KGRlc3RJbmZvLmVsZW1lbnQpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnNvdXJjZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBzcmNJbmZvID0gdGhpcy5maW5kSW5mbyh0aGlzLnNvdXJjZSk7XG4gICAgICAgIGlmKHNyY0luZm8gPT0gbnVsbCB8fCBzcmNJbmZvLnBhbmVsICE9IGRlc3RJbmZvLnBhbmVsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIHNyY0luZGV4ID0gdGhpcy5nZXRJbmRleEJ5SW5mbyhzcmNJbmZvKTtcbiAgICAgICAgdmFyIGRlc3RJbmRleCA9IHRoaXMuZ2V0SW5kZXhCeUluZm8oZGVzdEluZm8pO1xuICAgICAgICB2YXIgZGlmZiA9IGRlc3RJbmRleCAtIHNyY0luZGV4O1xuICAgICAgICByZXR1cm4gZGlmZiA8IDAgfHwgZGlmZiA+IDE7XG4gICAgfVxuICAgIHByaXZhdGUgaXNMYXN0RWxlbWVudEluUm93KGluZm86IGFueSkge1xuICAgICAgICByZXR1cm4gaW5mby5lbEluZGV4ID09IGluZm8ucGFuZWxbXCJrb1Jvd3NcIl0oKVtpbmZvLnJJbmRleF1bXCJrb0VsZW1lbnRzXCJdKCkubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVJbmZvKGluZm86IGFueSwgaXNCb3R0b206IGJvb2xlYW4sIGlzRWRnZTogYm9vbGVhbikge1xuICAgICAgICBpZihpbmZvLnJJbmRleCA8IDApIHJldHVybjsgXG4gICAgICAgIGlmKHRoaXMudGFyZ2V0LnN0YXJ0V2l0aE5ld0xpbmUpIHtcbiAgICAgICAgICAgIGlmKGlzQm90dG9tKSBpbmZvLnJJbmRleCArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKGlzQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgaW5mby5lbEluZGV4ICsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihpbmZvLmVsSW5kZXggPT0gMCAmJiBpbmZvLnJJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5ySW5kZXggLS07XG4gICAgICAgICAgICAgICAgICAgIGluZm8uZWxJbmRleCA9IGluZm8ucGFuZWxbXCJrb1Jvd3NcIl0oKVtpbmZvLnJJbmRleF1bXCJrb0VsZW1lbnRzXCJdKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGFkZEluZm8oaW5mbzogYW55KSB7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0LnN0YXJ0V2l0aE5ld0xpbmUgfHwgaW5mby5lbEluZGV4IDwgMSBcbiAgICAgICAgICAgIHx8IGluZm8uckluZGV4IDwgMCB8fCBpbmZvLnJJbmRleCA+PSBpbmZvLnBhbmVsLmtvUm93cygpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5BZGRJbmZvQXNSb3coaW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gaW5mby5wYW5lbC5rb1Jvd3MoKVtpbmZvLnJJbmRleF07XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSByb3dbXCJrb0VsZW1lbnRzXCJdKCk7XG4gICAgICAgICAgICBpZihpbmZvLmVsSW5kZXggPCBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5zcGxpY2UoaW5mby5lbEluZGV4LCAwLCB0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2godGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93W1wia29FbGVtZW50c1wiXShlbGVtZW50cyk7XG4gICAgICAgICAgICByb3cudXBkYXRlVmlzaWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgQWRkSW5mb0FzUm93KGluZm86IGFueSkge1xuICAgICAgICB2YXIgcm93ID0gbmV3IFN1cnZleS5RdWVzdGlvblJvdyhpbmZvLnBhbmVsKTtcbiAgICAgICAgaWYodGhpcy50YXJnZXQuaXNQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucGFyZW50ID0gaW5mby5wYW5lbDtcbiAgICAgICAgfVxuICAgICAgICByb3cuYWRkRWxlbWVudCh0aGlzLnRhcmdldCk7XG4gICAgICAgIHZhciByb3dzID0gaW5mby5wYW5lbC5rb1Jvd3MoKTtcbiAgICAgICAgaWYoaW5mby5ySW5kZXggPj0gMCAmJiBpbmZvLnJJbmRleCA8IGluZm8ucGFuZWwua29Sb3dzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICByb3dzLnNwbGljZShpbmZvLnJJbmRleCwgMCwgcm93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgIH1cbiAgICAgICBpbmZvLnBhbmVsLmtvUm93cyhyb3dzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhckJ5SW5mbyhpbmZvOiBhbnkpIHtcbiAgICAgICAgaWYoaW5mbyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciByb3dzID0gaW5mby5wYW5lbC5rb1Jvd3MoKTtcbiAgICAgICAgaWYoaW5mby5ySW5kZXggPCAwIHx8IGluZm8uckluZGV4ID49IHJvd3MubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHZhciByb3cgPSByb3dzW2luZm8uckluZGV4XTtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gcm93W1wia29FbGVtZW50c1wiXSgpOyBcbiAgICAgICAgaWYocm93W1wia29FbGVtZW50c1wiXSgpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnNwbGljZShpbmZvLmVsSW5kZXgsIDEpO1xuICAgICAgICAgICAgcm93W1wia29FbGVtZW50c1wiXShlbGVtZW50cyk7XG4gICAgICAgICAgICByb3cudXBkYXRlVmlzaWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm93cy5zcGxpY2UoaW5mby5ySW5kZXgsIDEpO1xuICAgICAgICAgICAgaW5mby5wYW5lbC5rb1Jvd3Mocm93cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpc0luZm9FcXVhbHMoYTogYW55LCBiOiBhbnkpIDogYm9vbGVhbiB7XG4gICAgICAgIGlmKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGEucGFuZWwgPT09IGIucGFuZWwgJiYgYS5ySW5kZXggPT09IGIuckluZGV4ICYmIGEuZWxJbmRleCA9PT0gYi5lbEluZGV4O1xuICAgIH1cbiAgICBwcml2YXRlIGZpbmRJbmZvKGVsOiBhbnksIGlzRWRnZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEluZm9JblBhbmVsKHRoaXMucGFnZSwgZWwsIGlzRWRnZSk7XG4gICAgfVxuICAgIHByaXZhdGUgZmluZEluZm9JblBhbmVsKHBhbmVsOiBTdXJ2ZXkuUGFuZWxNb2RlbEJhc2UsIGVsOiBhbnksIGlzRWRnZTogYm9vbGVhbik6IGFueSB7XG4gICAgICAgIGlmKGVsID09IHBhbmVsKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gcGFuZWw7XG4gICAgICAgICAgICBpZihwYW5lbC5wYXJlbnQgJiYgKGlzRWRnZSB8fCB0aGlzLnRhcmdldC5pc1BhbmVsKSkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhbmVsLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHBhbmVsOiBwYXJlbnQsIHJvdzogbnVsbCwgckluZGV4OiAwLCBlbEluZGV4OiAwLCBlbGVtZW50OiBwYW5lbCB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciByb3dzID0gcGFuZWxbXCJrb1Jvd3NcIl0oKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHJvd1tcImtvRWxlbWVudHNcIl0oKTtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBlbGVtZW50cy5sZW5ndGg7IGogKyspIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50c1tqXS5pc1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLmZpbmRJbmZvSW5QYW5lbChlbGVtZW50c1tqXSwgZWwsIGlzRWRnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVsZW1lbnQgPT0gZWxlbWVudHNbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuckluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZWxJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudHNbal0gPT0gZWwpIHJldHVybiB7IHBhbmVsOiBwYW5lbCwgcm93OiByb3csIHJJbmRleDogaSwgZWxJbmRleDogaiwgZWxlbWVudDogZWxlbWVudHNbal0gfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmV3VGFyZ2V0RWxlbWVudCgpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3ModGhpcy50YXJnZXQuZ2V0VHlwZSgpKTtcbiAgICAgICAgdmFyIGpzb24gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy50YXJnZXQpO1xuICAgICAgICBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b09iamVjdChqc29uLCByZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYWdEcm9wSGVscGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGVkZ2VIZWlnaHQ6IG51bWJlciA9IDIwO1xuICAgIHN0YXRpYyBkYXRhU3RhcnQ6IHN0cmluZyA9IFwic3VydmV5anMsXCI7XG4gICAgc3RhdGljIGRyYWdEYXRhOiBhbnkgPSB7dGV4dDogXCJcIiwganNvbjogbnVsbCB9O1xuICAgIHN0YXRpYyBwcmV2RXZlbnQgPSB7IGVsZW1lbnQ6IG51bGwsIHg6IC0xLCB5OiAtMSB9O1xuICAgIHByaXZhdGUgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnk7XG4gICAgcHJpdmF0ZSBzY3JvbGxhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgZGRUYXJnZXQ6IERyYWdEcm9wVGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBwcmV2Q29vcmRpbmF0ZXM6IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XG4gICAgc3RhdGljIGNvdW50ZXI6IG51bWJlciAgPSAxO1xuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IERyYWdEcm9wSGVscGVyLmNvdW50ZXIgKys7XG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IFN1cnZleS5JU3VydmV5LCBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSwgc2Nyb2xsYWJsZUVsTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjayA9IG9uTW9kaWZpZWRDYWxsYmFjaztcbiAgICAgICAgdGhpcy5zY3JvbGxhYmxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKChzY3JvbGxhYmxlRWxOYW1lID8gc2Nyb2xsYWJsZUVsTmFtZSA6IFwic2Nyb2xsYWJsZURpdlwiKSk7XG4gICAgICAgIHRoaXMucHJldkNvb3JkaW5hdGVzID0ge3g6IC0xLCB5OiAtMX1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiA8U3VydmV5LlN1cnZleT50aGlzLmRhdGE7IH1cbiAgICBwdWJsaWMgc3RhcnREcmFnUXVlc3Rpb24oZXZlbnQ6IERyYWdFdmVudCwgZWxlbWVudDogYW55KSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KGVsZW1lbnQpO1xuICAgICAgICBqc29uW1widHlwZVwiXSA9IGVsZW1lbnQuZ2V0VHlwZSgpO1xuICAgICAgICB0aGlzLnByZXBhcmVEYXRhKGV2ZW50LCBlbGVtZW50Lm5hbWUsIGpzb24pO1xuICAgICAgICB0aGlzLmRkVGFyZ2V0LnNvdXJjZSA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIHB1YmxpYyBzdGFydERyYWdUb29sYm94SXRlbShldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50TmFtZTogc3RyaW5nLCBlbGVtZW50SnNvbjogYW55KSB7XG4gICAgICAgIHRoaXMucHJlcGFyZURhdGEoZXZlbnQsICBlbGVtZW50TmFtZSwgZWxlbWVudEpzb24pO1xuICAgIH1cbiAgICBwdWJsaWMgaXNTdXJ2ZXlEcmFnZ2luZyhldmVudDogRHJhZ0V2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldERhdGEoZXZlbnQpLnRleHQ7XG4gICAgICAgIHJldHVybiBkYXRhICYmIGRhdGEuaW5kZXhPZihEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQpID09IDA7XG4gICAgfVxuICAgIHB1YmxpYyBkb0RyYWdEcm9wT3ZlcihldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50OiBhbnksIGlzRWRnZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIGlmKHRoaXMuaXNTYW1lQ29vcmRpbmF0ZXMoZXZlbnQpKSByZXR1cm47XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxZKGV2ZW50KTtcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICF0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpIHx8IHRoaXMuaXNTYW1lUGxhY2UoZXZlbnQsIGVsZW1lbnQpKSByZXR1cm47XG4gICAgICAgIHZhciBib3R0b21JbmZvID0gdGhpcy5pc0JvdHRvbShldmVudCwgZWxlbWVudCk7XG4gICAgICAgIGlzRWRnZSA9IGVsZW1lbnQuaXNQYW5lbCA/IGlzRWRnZSAmJiBib3R0b21JbmZvLmlzRWRnZSA6IHRydWU7XG4gICAgICAgIGlmKGVsZW1lbnQuaXNQYW5lbCAmJiAhaXNFZGdlICYmIGVsZW1lbnQuZWxlbWVudHMubGVuZ3RoID4gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmRkVGFyZ2V0Lm1vdmVUbyhlbGVtZW50LCBib3R0b21JbmZvLmlzQm90dG9tLCBpc0VkZ2UpO1xuICAgIH1cbiAgICBwdWJsaWMgZW5kKCkge1xuICAgICAgICBpZih0aGlzLmRkVGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRkVGFyZ2V0LmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZG9Ecm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTdXJ2ZXlEcmFnZ2luZyhldmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGRUYXJnZXQuZG9Ecm9wKCk7XG4gICAgICAgICAgICBpZih0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZG9MZWF2ZVBhZ2UoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICB0aGlzLmRkVGFyZ2V0LmNsZWFyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzY3JvbGxUb0VsZW1lbnQoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCB8fCAhZWwpIHJldHVybjtcbiAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVRhcmdldEVsZW1lbnQoZWxlbWVudE5hbWU6IHN0cmluZywganNvbjogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCFlbGVtZW50TmFtZSB8fCAhanNvbikgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGpzb25bXCJ0eXBlXCJdKTtcbiAgICAgICAgbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9PYmplY3QoanNvbiwgdGFyZ2V0RWxlbWVudCk7XG4gICAgICAgIHRhcmdldEVsZW1lbnQubmFtZSA9IGVsZW1lbnROYW1lO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnNldERhdGEodGhpcy5zdXJ2ZXkpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnJlbmRlcldpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIHRhcmdldEVsZW1lbnRbXCJrb0lzRHJhZ2dpbmdcIl0odHJ1ZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRFbGVtZW50O1xuICAgIH1cbiAgICBwcml2YXRlIGlzQm90dG9tKGV2ZW50OiBEcmFnRXZlbnQsIHN1cnZleUVsOiBhbnkpOiBhbnkge1xuICAgICAgICBldmVudCA9IHRoaXMuZ2V0RXZlbnQoZXZlbnQpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gPG51bWJlcj5ldmVudC5jdXJyZW50VGFyZ2V0W1wiY2xpZW50SGVpZ2h0XCJdO1xuICAgICAgICB2YXIgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgICAgIGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgnbGF5ZXJYJykpIHtcbiAgICAgICAgICAgIHkgPSBldmVudC5sYXllclkgLSA8bnVtYmVyPmV2ZW50LmN1cnJlbnRUYXJnZXRbXCJvZmZzZXRUb3BcIl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBpc0JvdHRvbTogeSA+IGhlaWdodCAvIDIsIGlzRWRnZTogeSA8PSBEcmFnRHJvcEhlbHBlci5lZGdlSGVpZ2h0IHx8IGhlaWdodCAtIHkgPD0gRHJhZ0Ryb3BIZWxwZXIuZWRnZUhlaWdodH07XG4gICAgfVxuICAgIHByaXZhdGUgaXNTYW1lQ29vcmRpbmF0ZXMoZXZlbnQ6IERyYWdFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcmVzID0gTWF0aC5hYnMoZXZlbnQucGFnZVggLSB0aGlzLnByZXZDb29yZGluYXRlcy54KSA+IDUgfHwgTWF0aC5hYnMoZXZlbnQucGFnZVkgLSB0aGlzLnByZXZDb29yZGluYXRlcy55KSA+IDU7XG4gICAgICAgIGlmKHJlcykge1xuICAgICAgICAgICAgdGhpcy5wcmV2Q29vcmRpbmF0ZXMueCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgdGhpcy5wcmV2Q29vcmRpbmF0ZXMueSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBwcml2YXRlIGlzU2FtZVBsYWNlKGV2ZW50OiBEcmFnRXZlbnQsIGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcHJldiA9IERyYWdEcm9wSGVscGVyLnByZXZFdmVudDtcbiAgICAgICAgaWYgKHByZXYuZWxlbWVudCAhPSBlbGVtZW50IHx8IE1hdGguYWJzKGV2ZW50LmNsaWVudFggLSBwcmV2LngpID4gNSB8fCBNYXRoLmFicyhldmVudC5jbGllbnRZIC0gcHJldi55KSA+IDUpIHtcbiAgICAgICAgICAgIHByZXYuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBwcmV2LnggPSBldmVudC5jbGllbnRYO1xuICAgICAgICAgICAgcHJldi55ID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1Njcm9sbFN0b3A6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgc3RhdGljIFNjcm9sbERlbGF5OiBudW1iZXIgPSAzMDtcbiAgICBwcml2YXRlIHN0YXRpYyBTY3JvbGxPZmZzZXQ6IG51bWJlciA9IDEwMDtcbiAgICBwcml2YXRlIGNoZWNrU2Nyb2xsWShlOiBEcmFnRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50KSByZXR1cm47XG4gICAgICAgIHZhciB5ID0gdGhpcy5nZXRTY3JvbGxhYmxlRWxlbWVudFBvc1koZSk7XG4gICAgICAgIGlmICh5IDwgMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IHRydWU7XG4gICAgICAgIHZhciBoZWlnaHQgPSA8bnVtYmVyPnRoaXMuc2Nyb2xsYWJsZUVsZW1lbnRbXCJjbGllbnRIZWlnaHRcIl07XG4gICAgICAgIGlmICh5IDwgRHJhZ0Ryb3BIZWxwZXIuU2Nyb2xsT2Zmc2V0ICYmIHkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZG9TY3JvbGxZKC0xKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0IC0geSA8IERyYWdEcm9wSGVscGVyLlNjcm9sbE9mZnNldCAmJiBoZWlnaHQgPj0geSkge1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZG9TY3JvbGxZKDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZG9TY3JvbGxZKHN0ZXA6IG51bWJlcikge1xuICAgICAgICB2YXIgZWwgPSB0aGlzLnNjcm9sbGFibGVFbGVtZW50O1xuICAgICAgICB2YXIgc2Nyb2xsWSA9IGVsLnNjcm9sbFRvcCArIHN0ZXA7XG4gICAgICAgIGlmIChzY3JvbGxZIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IHNjcm9sbFk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsU3RvcCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNlbGYuZG9TY3JvbGxZKHN0ZXApIH0sIERyYWdEcm9wSGVscGVyLlNjcm9sbERlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFNjcm9sbGFibGVFbGVtZW50UG9zWShlOiBEcmFnRXZlbnQpOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgfHwgIWUuY3VycmVudFRhcmdldCkgcmV0dXJuIC0xO1xuICAgICAgICB2YXIgZWwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHZhciBvZmZzZXRUb3AgPSAwO1xuICAgICAgICB3aGlsZShlbCAmJiBlbCAhPSB0aGlzLnNjcm9sbGFibGVFbGVtZW50KSB7XG4gICAgICAgICAgICBvZmZzZXRUb3AgKz0gPG51bWJlcj5lbFtcIm9mZnNldFRvcFwiXTtcbiAgICAgICAgICAgIGVsID0gZWxbXCJvZmZzZXRQYXJlbnRcIl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGUub2Zmc2V0WSArIDxudW1iZXI+ZS5jdXJyZW50VGFyZ2V0W1wib2Zmc2V0VG9wXCJdIC0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLnNjcm9sbGFibGVFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRFdmVudChldmVudDogRHJhZ0V2ZW50KTogRHJhZ0V2ZW50IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSA/IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSA6IGV2ZW50O1xuICAgIH1cbiAgICBwcml2YXRlIGdldFkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcblxuICAgICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRUb3ApO1xuICAgICAgICAgICAgZWxlbWVudCA9IDxIVE1MRWxlbWVudD5lbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIHByZXBhcmVEYXRhKGV2ZW50OiBEcmFnRXZlbnQsIGVsZW1lbnROYW1lOiBzdHJpbmcsIGpzb24pIHtcbiAgICAgICAgdmFyIHN0ciA9IERyYWdEcm9wSGVscGVyLmRhdGFTdGFydCArIFwicXVlc3Rpb25uYW1lOlwiICsgZWxlbWVudE5hbWU7XG4gICAgICAgIHRoaXMuc2V0RGF0YShldmVudCwgc3RyKTtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRhcmdldEVsZW1lbnQoZWxlbWVudE5hbWUsIGpzb24pO1xuICAgICAgICB0aGlzLmRkVGFyZ2V0ID0gbmV3IERyYWdEcm9wVGFyZ2V0RWxlbWVudCg8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldERhdGEoZXZlbnQ6IERyYWdFdmVudCwgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0pIHtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiVGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJjb3B5XCI7XG4gICAgICAgIH1cbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEgPSB7IHRleHQ6IHRleHQgfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXREYXRhKGV2ZW50OiBEcmFnRXZlbnQpOiBhbnkge1xuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiVGV4dFwiKTtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGV4dCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhO1xuICAgIH1cbiAgICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICAgICAgLy90aGlzLmRkVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEgPSB7dGV4dDogXCJcIiwganNvbjogbnVsbH07XG4gICAgICAgIHZhciBwcmV2ID0gRHJhZ0Ryb3BIZWxwZXIucHJldkV2ZW50O1xuICAgICAgICBwcmV2LmVsZW1lbnQgPSBudWxsO1xuICAgICAgICBwcmV2LnggPSAtMTtcbiAgICAgICAgcHJldi55ID0gLTE7XG4gICAgICAgIHRoaXMucHJldkNvb3JkaW5hdGVzLnggPSAtMTtcbiAgICAgICAgdGhpcy5wcmV2Q29vcmRpbmF0ZXMueSA9IC0xO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHJhZ2Ryb3BoZWxwZXIudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleU9uUHJvcGVydHlDaGFuZ2VkQ2FsbGJhY2sgPSAocHJvcGVydHk6IFN1cnZleU9iamVjdFByb3BlcnR5LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0UHJvcGVydHkge1xuICAgIHByaXZhdGUgb2JqZWN0VmFsdWU6IGFueTtcbiAgICBwcml2YXRlIGlzVmFsdWVVcGRhdGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIG9uUHJvcGVydHlDaGFuZ2VkOiBTdXJ2ZXlPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBrb1ZhbHVlOiBhbnk7XG4gICAgcHVibGljIGtvVGV4dDogYW55O1xuICAgIHB1YmxpYyBtb2RhbE5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbW9kYWxOYW1lVGFyZ2V0OiBzdHJpbmc7XG4gICAgcHVibGljIGtvSXNEZWZhdWx0OiBhbnk7XG4gICAgcHVibGljIGVkaXRvcjogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlO1xuICAgIHB1YmxpYyBlZGl0b3JUeXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGJhc2VFZGl0b3JUeXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGNob2ljZXM6IEFycmF5PGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9uUHJvcGVydHlDaGFuZ2VkOiBTdXJ2ZXlPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrID0gbnVsbCwgcHJvcGVydHlFZGl0b3JPcHRpb25zOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQgPSBvblByb3BlcnR5Q2hhbmdlZDtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wcm9wZXJ0eS5uYW1lO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gcHJvcGVydHlbXCJyZWFkT25seVwiXTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNob2ljZXMgPSBwcm9wZXJ0eS5jaG9pY2VzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHByb3BlcnR5LnR5cGU7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IFwiZHJvcGRvd25cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25JdGVtQ2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZTogYW55KSB7IHNlbGYub25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlKTsgfTtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuY3JlYXRlRWRpdG9yKHRoaXMuZWRpdG9yVHlwZSwgb25JdGVtQ2hhbmdlZCk7XG4gICAgICAgIHRoaXMuZWRpdG9yLm9uR2V0TG9jYWxlID0gdGhpcy5kb09uR2V0TG9jYWxlO1xuICAgICAgICB0aGlzLmVkaXRvci5vcHRpb25zID0gcHJvcGVydHlFZGl0b3JPcHRpb25zO1xuICAgICAgICB0aGlzLmVkaXRvclR5cGUgPSB0aGlzLmVkaXRvci5lZGl0b3JUeXBlO1xuICAgICAgICB0aGlzLm1vZGFsTmFtZSA9IFwibW9kZWxFZGl0b3JcIiArIHRoaXMuZWRpdG9yVHlwZSArIHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5tb2RhbE5hbWVUYXJnZXQgPSBcIiNcIiArIHRoaXMubW9kYWxOYW1lO1xuICAgICAgICB0aGlzLmtvVmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLm9ua29WYWx1ZUNoYW5nZWQobmV3VmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5rb1RleHQgPSBrby5jb21wdXRlZCgoKSA9PiB7IHJldHVybiBzZWxmLmdldFZhbHVlVGV4dChzZWxmLmtvVmFsdWUoKSk7IH0pO1xuICAgICAgICB0aGlzLmtvSXNEZWZhdWx0ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5wcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZShzZWxmLmtvVmFsdWUoKSk7IH0pO1xuICAgIH1cbiAgICBwcml2YXRlIGRvT25HZXRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYodGhpcy5vYmplY3QgJiYgdGhpcy5vYmplY3RbXCJnZXRMb2NhbGVcIl0pIHJldHVybiB0aGlzLm9iamVjdC5nZXRMb2NhbGUoKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgb2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLm9iamVjdFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBvYmplY3QodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm9iamVjdFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRPYmplY3QodGhpcy5vYmplY3QpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRUaXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZWRpdFByb3BlcnR5XCIpW1wiZm9ybWF0XCJdKHRoaXMucHJvcGVydHkubmFtZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckRhdGEodGhpcy5rb1ZhbHVlKCkpO1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIGlzQXBwbHlpbmdOZXdWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgb25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0FwcGx5aW5nTmV3VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIG9ua29WYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBcHBseWluZ05ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckRhdGEobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9iamVjdCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmdldFZhbHVlKCkgPT0gbmV3VmFsdWUpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQgIT0gbnVsbCAmJiAhdGhpcy5pc1ZhbHVlVXBkYXRpbmcpIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQodGhpcywgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUVkaXRvckRhdGEobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmVkaXRvci52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0VmFsdWUoKTogYW55IHtcblx0aWYodGhpcy5wcm9wZXJ0eVtcImdldFByb3BlcnR5VmFsdWVcIl0pIHJldHVybiB0aGlzLnByb3BlcnR5W1wiZ2V0UHJvcGVydHlWYWx1ZVwiXSh0aGlzLm9iamVjdCk7IC8vVE9ETyBtYWtlIHRoZSBvbmx5IGNhbGxcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkuaGFzVG9Vc2VHZXRWYWx1ZSkgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VmFsdWUodGhpcy5vYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5uYW1lXTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZWRpdG9yLmdldFZhbHVlVGV4dCh2YWx1ZSk7IH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJicyB7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBwcml2YXRlIG9ialZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBjaG9pY2VzQ2xhc3NlczogQXJyYXk8c3RyaW5nPjtcbiAgICBrb1ZlcmJzOiBhbnk7XG4gICAga29IYXNWZXJiczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICB0aGlzLmtvVmVyYnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0hhc1ZlcmJzID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInNlbGVjdGJhc2VcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY2hvaWNlc0NsYXNzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXNDbGFzc2VzLnB1c2goY2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHN1cnZleSh2YWx1ZTogU3VydmV5LlN1cnZleSkge1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9iaigpOiBhbnkgeyByZXR1cm4gdGhpcy5vYmpWYWx1ZSB9XG4gICAgcHVibGljIHNldCBvYmoodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5vYmpWYWx1ZSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9ialZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYnVpbGRWZXJicygpO1xuICAgIH1cbiAgICBwcml2YXRlIGJ1aWxkVmVyYnMoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKHRoaXMub2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkJhc2U+dGhpcy5vYmo7XG4gICAgICAgICAgICBpZiAodGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gobmV3IFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbSh0aGlzLnN1cnZleSwgcXVlc3Rpb24sIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VzQ2xhc3Nlcy5pbmRleE9mKHF1ZXN0aW9uLmdldFR5cGUoKSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gobmV3IFN1cnZleVZlcmJDaGFuZ2VUeXBlSXRlbSh0aGlzLnN1cnZleSwgcXVlc3Rpb24sIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1ZlcmJzKGFycmF5KTtcbiAgICAgICAgdGhpcy5rb0hhc1ZlcmJzKGFycmF5Lmxlbmd0aCA+IDApO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJiSXRlbSB7XG4gICAga29JdGVtczogYW55O1xuICAgIGtvU2VsZWN0ZWRJdGVtOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleSwgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0gPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gXCJcIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJDaGFuZ2VUeXBlSXRlbSBleHRlbmRzIFN1cnZleVZlcmJJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICBzdXBlcihzdXJ2ZXksIHF1ZXN0aW9uLCBvbk1vZGlmaWVkQ2FsbGJhY2spO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInNlbGVjdGJhc2VcIiwgdHJ1ZSk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goeyB2YWx1ZTogY2xhc3Nlc1tpXS5uYW1lLCB0ZXh0OiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicXQuXCIgKyBjbGFzc2VzW2ldLm5hbWUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnJheSk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0ocXVlc3Rpb24uZ2V0VHlwZSgpKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5jaGFuZ2VUeXBlKG5ld1ZhbHVlKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnZlcmJDaGFuZ2VUeXBlXCIpOyB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VUeXBlKHF1ZXN0aW9uVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChxdWVzdGlvblR5cGUgPT0gdGhpcy5xdWVzdGlvbi5nZXRUeXBlKCkpIHJldHVybjtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgdmFyIG5ld1F1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGUsIHRoaXMucXVlc3Rpb24ubmFtZSk7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciBqc29uID0ganNvbk9iai50b0pzb25PYmplY3QodGhpcy5xdWVzdGlvbik7XG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoanNvbiwgbmV3UXVlc3Rpb24pO1xuICAgICAgICBwYWdlLnJlbW92ZVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBwYWdlLmFkZFF1ZXN0aW9uKG5ld1F1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgIGlmICh0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2soKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYkNoYW5nZVBhZ2VJdGVtIGV4dGVuZHMgU3VydmV5VmVyYkl0ZW0ge1xuICAgIHByaXZhdGUgcHJldlBhZ2U6IFN1cnZleS5QYWdlO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSwgcHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgICAgIHN1cGVyKHN1cnZleSwgcXVlc3Rpb24sIG9uTW9kaWZpZWRDYWxsYmFjayk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LnBhZ2VzW2ldO1xuICAgICAgICAgICAgYXJyYXkucHVzaCh7IHZhbHVlOiBwYWdlLCB0ZXh0OiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyYXkpO1xuICAgICAgICB0aGlzLnByZXZQYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbSh0aGlzLnByZXZQYWdlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5jaGFuZ2VQYWdlKG5ld1ZhbHVlKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnZlcmJDaGFuZ2VQYWdlXCIpOyB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VQYWdlKG5ld1BhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIGlmIChuZXdQYWdlID09IG51bGwgfHwgbmV3UGFnZSA9PSB0aGlzLnByZXZQYWdlKSByZXR1cm47XG4gICAgICAgIHRoaXMucHJldlBhZ2UucmVtb3ZlUXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIG5ld1BhZ2UuYWRkUXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIGlmICh0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2soKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdFZlcmJzLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleUhlbHBlcn0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleUFkZE5ld1BhZ2VDYWxsYmFjayA9ICgpID0+IHZvaWQ7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4gdm9pZDtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5TW92ZVBhZ2VDYWxsYmFjayA9IChpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UGFnZXNFZGl0b3Ige1xuICAgIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIGtvUGFnZXM6IGFueTtcbiAgICBrb0lzVmFsaWQ6IGFueTtcbiAgICBzZWxlY3RQYWdlQ2xpY2s6IGFueTtcbiAgICBvbkFkZE5ld1BhZ2VDYWxsYmFjazogU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrO1xuICAgIG9uU2VsZWN0UGFnZUNhbGxiYWNrOiBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgb25EZWxldGVQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjaztcbiAgICBvbk1vdmVQYWdlQ2FsbGJhY2s6IFN1cnZleU1vdmVQYWdlQ2FsbGJhY2s7XG4gICAgZHJhZ2dpbmdQYWdlOiBhbnkgPSBudWxsO1xuICAgIGRyYWdTdGFydDogYW55OyBkcmFnT3ZlcjogYW55OyBkcmFnRW5kOiBhbnk7IGRyYWdEcm9wOiBhbnk7IGtleURvd246IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKG9uQWRkTmV3UGFnZUNhbGxiYWNrOiBTdXJ2ZXlBZGROZXdQYWdlQ2FsbGJhY2sgPSBudWxsLCBvblNlbGVjdFBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICAgICAgICBvbk1vdmVQYWdlQ2FsbGJhY2s6IFN1cnZleU1vdmVQYWdlQ2FsbGJhY2sgPSBudWxsLCBvbkRlbGV0ZVBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICB0aGlzLmtvUGFnZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0lzVmFsaWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjayA9IG9uQWRkTmV3UGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uU2VsZWN0UGFnZUNhbGxiYWNrID0gb25TZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrID0gb25Nb3ZlUGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrID0gb25EZWxldGVQYWdlQ2FsbGJhY2s7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxlY3RQYWdlQ2xpY2sgPSBmdW5jdGlvbihwYWdlSXRlbSkge1xuICAgICAgICAgICAgaWYgKHNlbGYub25TZWxlY3RQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uU2VsZWN0UGFnZUNhbGxiYWNrKHBhZ2VJdGVtLnBhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmtleURvd24gPSBmdW5jdGlvbiAoZWw6IGFueSwgZTogS2V5Ym9hcmRFdmVudCkgeyBzZWxmLm9uS2V5RG93bihlbCwgZSk7IH1cbiAgICAgICAgdGhpcy5kcmFnU3RhcnQgPSBmdW5jdGlvbiAoZWw6IGFueSkgeyBzZWxmLmRyYWdnaW5nUGFnZSA9IGVsOyB9O1xuICAgICAgICB0aGlzLmRyYWdPdmVyID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgIH07XG4gICAgICAgIHRoaXMuZHJhZ0VuZCA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kcmFnZ2luZ1BhZ2UgPSBudWxsOyB9O1xuICAgICAgICB0aGlzLmRyYWdEcm9wID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgc2VsZi5tb3ZlRHJhZ2dpbmdQYWdlVG8oZWwpOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHN1cnZleSh2YWx1ZTogU3VydmV5LlN1cnZleSkge1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMua29Jc1ZhbGlkKHRoaXMuc3VydmV5VmFsdWUgIT0gbnVsbCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZXMoKTtcbiAgICB9XG4gICAgcHVibGljIHNldFNlbGVjdGVkUGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB2YXIgcGFnZXMgPSB0aGlzLmtvUGFnZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFnZXNbaV0ua29TZWxlY3RlZChwYWdlc1tpXS5wYWdlID09IHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhZGROZXdQYWdlQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQWRkTmV3UGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uQWRkTmV3UGFnZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlbW92ZVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5UGFnZShwYWdlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBjaGFuZ2VOYW1lKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhZ2UocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXMoKVtpbmRleF0udGl0bGUoU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRJbmRleEJ5UGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSk6IG51bWJlciB7XG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMua29QYWdlcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFnZXNbaV0ucGFnZSA9PSBwYWdlKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbktleURvd24oZWw6IGFueSwgZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5rb1BhZ2VzKCkubGVuZ3RoIDw9IDEpIHJldHVybjtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XG4gICAgICAgIHZhciBwYWdlSW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhZ2VzW2ldLnBhZ2UgJiYgcGFnZXNbaV0ua29TZWxlY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgcGFnZUluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFnZUluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDQ2ICYmIHRoaXMub25EZWxldGVQYWdlQ2FsbGJhY2spIHRoaXMub25EZWxldGVQYWdlQ2FsbGJhY2soZWwucGFnZSk7XG4gICAgICAgIGlmICgoZS5rZXlDb2RlID09IDM3IHx8IGUua2V5Q29kZSA9PSAzOSkgJiYgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgcGFnZUluZGV4ICs9IChlLmtleUNvZGUgPT0gMzcgPyAtMSA6IDEpO1xuICAgICAgICAgICAgaWYgKHBhZ2VJbmRleCA8IDApIHBhZ2VJbmRleCA9IHBhZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAocGFnZUluZGV4ID49IHBhZ2VzLmxlbmd0aCkgcGFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBwYWdlID0gcGFnZXNbcGFnZUluZGV4XS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjayhwYWdlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRQYWdlKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVQYWdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKFtdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5VmFsdWUucGFnZXNbaV07XG4gICAgICAgICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZToga28ub2JzZXJ2YWJsZShTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSksIHBhZ2U6IHBhZ2UsIGtvU2VsZWN0ZWQ6IGtvLm9ic2VydmFibGUoZmFsc2UpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvUGFnZXMocGFnZXMpO1xuICAgIH1cbiAgICBwcml2YXRlIG1vdmVEcmFnZ2luZ1BhZ2VUbyh0b1BhZ2U6IGFueSkge1xuICAgICAgICBpZiAodG9QYWdlID09IG51bGwgfHwgdG9QYWdlID09IHRoaXMuZHJhZ2dpbmdQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUGFnZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdQYWdlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5rb1BhZ2VzKCkuaW5kZXhPZih0aGlzLmRyYWdnaW5nUGFnZSk7XG4gICAgICAgIHZhciBpbmRleFRvID0gdGhpcy5rb1BhZ2VzKCkuaW5kZXhPZih0b1BhZ2UpO1xuICAgICAgICBpZiAodGhpcy5vbk1vdmVQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrKGluZGV4LCBpbmRleFRvKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uIHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmluaXRpb246IGFueSA9IHtcbiAgICAgICAgXCJxdWVzdGlvbmJhc2VcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcIm5hbWVcIiwgXCJ0aXRsZVwiLCB7bmFtZTogXCJ2aXNpYmxlXCIsIGNhdGVnb3J5OiBcImNoZWNrc1wifSwge25hbWU6IFwiaXNSZXF1aXJlZFwiLCBjYXRlZ29yeTogXCJjaGVja3NcIn0sIHtuYW1lOiBcInN0YXJ0V2l0aE5ld0xpbmVcIiwgY2F0ZWdvcnk6IFwiY2hlY2tzXCJ9IF0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwidmlzaWJsZUlmXCIsIGluZGV4OiAxMDB9XVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1lbnRcIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wicm93c1wiLCBcInBsYWNlSG9sZGVyXCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsZVwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbe25hbWU6IFwic2hvd1ByZXZpZXdcIiwgY2F0ZWdvcnk6IFwiaW1hZ2VDaGVja3NcIn0sIHtuYW1lOiBcInN0b3JlRGF0YUFzVGV4dFwiLCBjYXRlZ29yeTogXCJpbWFnZUNoZWNrc1wifSwgXCJtYXhTaXplXCIsIFwiaW1hZ2VIZWlnaHRcIiwgXCJpbWFnZVdpZHRoXCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwiaHRtbFwiOiB7XG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiaHRtbFwiLCBpbmRleDogMTB9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duYmFzZVwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJjZWxsVHlwZVwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjb2x1bW5zXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcInJvd3NcIiwgaW5kZXg6IDExfSwge25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTJ9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGR5bmFtaWNcIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wicm93Q291bnRcIiwgXCJhZGRSb3dUZXh0XCIsIFwicmVtb3ZlUm93VGV4dFwiXVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeFwiOiB7XG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY29sdW1uc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJyb3dzXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibXVsdGlwbGV0ZXh0XCI6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImNvbENvdW50XCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcIml0ZW1zXCIsIGluZGV4OiAxMH1dXG4gICAgICAgIH0sXG4gICAgICAgIFwicmF0aW5nXCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJtaW5SYXRlRGVzY3JpcHRpb25cIiwgXCJtYXhSYXRlRGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwicmF0ZVZhbHVlc1wiLCBpbmRleDogMTB9XVxuICAgICAgICB9LFxuICAgICAgICBcInNlbGVjdGJhc2VcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImhhc090aGVyXCIsIFwiY2hvaWNlc09yZGVyXCIsIFwiY29sQ291bnRcIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJjaG9pY2VzQnlVcmxcIiwgaW5kZXg6IDExfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkcm9wZG93blwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJvcHRpb25zQ2FwdGlvblwiXVxuICAgICAgICB9LFxuICAgICAgICBcInRleHRcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImlucHV0VHlwZVwiLCBcInBsYWNlSG9sZGVyXCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AY2hlY2tib3hcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImhhc090aGVyXCIsIFwiY2hvaWNlc09yZGVyXCIsIFwiY29sQ291bnRcIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJjaG9pY2VzQnlVcmxcIiwgaW5kZXg6IDExfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtbkByYWRpb2dyb3VwXCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcImNvbENvdW50XCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AZHJvcGRvd25cIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImhhc090aGVyXCIsIFwiY2hvaWNlc09yZGVyXCIsIFwib3B0aW9uc0NhcHRpb25cIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJjaG9pY2VzQnlVcmxcIiwgaW5kZXg6IDExfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtbkB0ZXh0XCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJpbnB1dFR5cGVcIiwgXCJwbGFjZUhvbGRlclwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJ2YWxpZGF0b3JzXCIsIGluZGV4OiAxMH1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AY29tbWVudFwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wicGxhY2VIb2xkZXJcIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwidmFsaWRhdG9yc1wiLCBpbmRleDogMTB9XVxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxldGV4dGl0ZW1cIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaW5wdXRUeXBlXCIsIFwicGxhY2VIb2xkZXJcIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwidmFsaWRhdG9yc1wiLCBpbmRleDogMTB9XVxuICAgICAgICB9LFxuICAgICAgICBcInBhbmVsXCI6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcIm5hbWVcIiwgXCJ0aXRsZVwiLCB7bmFtZTogXCJ2aXNpYmxlXCIsIGNhdGVnb3J5OiBcImNoZWNrc1wifSBdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcInZpc2libGVJZlwiLCBpbmRleDogMTAwfV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldFByb3BlcnRpZXMoY2xhc3NOYW1lOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgdmFyIGFsbERlZmluaXRpb25zID0gU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldEFsbERlZmluaXRpb25zQnlDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICBmb3IodmFyIGkgPSBhbGxEZWZpbml0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGkgLS0pIHtcbiAgICAgICAgICAgIHZhciBkZWYgPSBhbGxEZWZpbml0aW9uc1tpXTtcbiAgICAgICAgICAgIGlmKGRlZi5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGRlZi5wcm9wZXJ0aWVzLmxlbmd0aDsgaiArKykge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2goZGVmLnByb3BlcnRpZXNbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRUYWJzKGNsYXNzTmFtZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciB0YWJzID0gW107XG4gICAgICAgIHZhciBhbGxEZWZpbml0aW9ucyA9IFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5nZXRBbGxEZWZpbml0aW9uc0J5Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgZm9yKHZhciBpID0gYWxsRGVmaW5pdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC0tKSB7XG4gICAgICAgICAgICB2YXIgZGVmID0gYWxsRGVmaW5pdGlvbnNbaV07XG4gICAgICAgICAgICBpZihkZWYudGFicykge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBkZWYudGFicy5sZW5ndGg7IGogKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGFicy5wdXNoKGRlZi50YWJzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGFicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmluZGV4IDwgYi5pbmRleCA/IC0xIDogKGEuaW5kZXggPiBiLmluZGV4ID8gMSA6IDApOyB9KTtcbiAgICAgICAgcmV0dXJuIHRhYnM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBbGxEZWZpbml0aW9uc0J5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpIDogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYoY2xhc3NOYW1lLmluZGV4T2YoJ0AnKSA+IC0xICYmIFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5kZWZpbml0aW9uW2NsYXNzTmFtZV0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5kZWZpbml0aW9uW2NsYXNzTmFtZV0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2YXIgbWV0YUNsYXNzID0gPFN1cnZleS5Kc29uTWV0YWRhdGFDbGFzcz5TdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YVtcImZpbmRDbGFzc1wiXShjbGFzc05hbWUpO1xuICAgICAgICAgICAgaWYgKCFtZXRhQ2xhc3MpIGJyZWFrO1xuICAgICAgICAgICAgaWYoU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmRlZmluaXRpb25bbWV0YUNsYXNzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmRlZmluaXRpb25bbWV0YUNsYXNzLm5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IG1ldGFDbGFzcy5wYXJlbnROYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cblxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydHkge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGVkaXRUeXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxhbnk+ID0gW107XG4gICAga29WYWx1ZTogYW55OyBrb0Vycm9yVGV4dDogYW55OyBrb0hhc0Vycm9yOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSwgcHVibGljIGlzUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wZXJ0eS5uYW1lO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gcHJvcGVydHlbXCJyZWFkT25seVwiXTtcbiAgICAgICAgdGhpcy5lZGl0VHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBpZihwcm9wZXJ0eS50eXBlID09IFwidGV4dFwiKSB0aGlzLmVkaXRUeXBlID0gXCJ0ZXh0YXJlYVwiO1xuICAgICAgICBpZihwcm9wZXJ0eS50eXBlID09IFwiYm9vbGVhblwiKSB0aGlzLmVkaXRUeXBlID0gXCJjaGVja1wiO1xuICAgICAgICBpZihwcm9wZXJ0eS5jaG9pY2VzKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXMgPSBwcm9wZXJ0eS5jaG9pY2VzO1xuICAgICAgICAgICAgdGhpcy5lZGl0VHlwZSA9IFwiZHJvcGRvd25cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29FcnJvclRleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmtvSGFzRXJyb3IgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5cIiArIHRoaXMubmFtZSk7XG4gICAgICAgIGlmKCF0aGlzLnRpdGxlKSB0aGlzLnRpdGxlID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGlzRXJyb3IgPSB0aGlzLmlzUmVxdWlyZWQgJiYgKHRoaXMua29WYWx1ZSgpICE9PSBmYWxzZSkgJiYgIXRoaXMua29WYWx1ZSgpO1xuICAgICAgICB0aGlzLmtvRXJyb3JUZXh0KGlzRXJyb3IgPyBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUucHJvcGVydHlJc0VtcHR5XCIpOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yKGlzRXJyb3IpO1xuICAgICAgICByZXR1cm4gaXNFcnJvcjtcbiAgICB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICB0aGlzLm9ialt0aGlzLm5hbWVdID0gdGhpcy5rb1ZhbHVlKCk7XG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmFsdWUoKTogYW55IHtcblx0aWYodGhpcy5wcm9wZXJ0eVtcImdldFByb3BlcnR5VmFsdWVcIl0pIHJldHVybiB0aGlzLnByb3BlcnR5W1wiZ2V0UHJvcGVydHlWYWx1ZVwiXSh0aGlzLm9iaik7IC8vVE9ETyBtYWtlIHRoZSBvbmx5IGNhbGxcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkuaGFzVG9Vc2VHZXRWYWx1ZSkgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VmFsdWUodGhpcy5vYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5vYmpbdGhpcy5uYW1lXTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFJvdyB7XG4gICAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmc7XG4gICAgcHVibGljIHByb3BlcnRpZXM6IEFycmF5PFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnR5PiA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSwgaXNQcm9wZXJ0eVJlcXVpcmVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5hZGRQcm9wZXJ0eShwcm9wZXJ0eSwgaXNQcm9wZXJ0eVJlcXVpcmVkKTtcbiAgICB9XG4gICAgcHVibGljIGFkZFByb3BlcnR5KHByb3BlcnR5OiBhbnksIGlzUHJvcGVydHlSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcy5wdXNoKG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eSh0aGlzLm9iaiwgcHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZCkpO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKSA6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaXNFcnJvciA9IGZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgaXNFcnJvciA9IHRoaXMucHJvcGVydGllc1tpXS5oYXNFcnJvcigpIHx8IGlzRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzRXJyb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllcyB7XG4gICAgcHJpdmF0ZSBwcm9wZXJ0aWVzOiBBcnJheTxTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5PjtcbiAgICBwcml2YXRlIG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s6IChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpID0+IGJvb2xlYW47XG4gICAgcHVibGljIHJvd3M6IEFycmF5PFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFJvdz4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHJvcGVydGllczogQXJyYXk8YW55Piwgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrID0gb25DYW5TaG93UHJvcGVydHlDYWxsYmFjaztcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyh0aGlzLm9iai5nZXRUeXBlKCkpOyBcbiAgICAgICAgdGhpcy5idWlsZFJvd3MocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgdGhpcy5hcHBseU9yUmVzZXQodHJ1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5hcHBseU9yUmVzZXQoZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKSA6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaXNFcnJvciA9IGZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgaXNFcnJvciA9IHRoaXMucm93c1tpXS5oYXNFcnJvcigpIHx8IGlzRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzRXJyb3I7XG4gICAgfVxuICAgIHByb3RlY3RlZCBhcHBseU9yUmVzZXQoaXNBcHBseTogYm9vbGVhbikge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHRoaXMucm93c1tpXS5wcm9wZXJ0aWVzLmxlbmd0aDsgaiArKykge1xuICAgICAgICAgICAgICAgIGlmKGlzQXBwbHkpIHRoaXMucm93c1tpXS5wcm9wZXJ0aWVzW2pdLmFwcGx5KCk7XG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLnJvd3NbaV0ucHJvcGVydGllc1tqXS5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBidWlsZFJvd3MocHJvcGVydGllcykge1xuICAgICAgICB2YXIgcmVxdWlyZWRQcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+ID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UmVxdWlyZWRQcm9wZXJ0aWVzKHRoaXMub2JqLmdldFR5cGUoKSk7XG4gICAgICAgIGlmKCFyZXF1aXJlZFByb3BlcnRpZXMpIHJlcXVpcmVkUHJvcGVydGllcyA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZ2V0TmFtZShwcm9wZXJ0aWVzW2ldKTtcbiAgICAgICAgICAgIHZhciBqc29uUHJvcGVydHkgPSB0aGlzLmdldFByb3BlcnR5KG5hbWUpO1xuICAgICAgICAgICAgaWYoIWpzb25Qcm9wZXJ0eSkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgaXNQcm9wZXJ0eVJlcXVpcmVkOiBib29sZWFuID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmluZGV4T2YobmFtZSkgPiAtMTtcbiAgICAgICAgICAgIHZhciByb3cgPSB0aGlzLmdldFJvd0J5Q2F0ZWdvcnkocHJvcGVydGllc1tpXS5jYXRlZ29yeSk7XG4gICAgICAgICAgICBpZihyb3cpIHJvdy5hZGRQcm9wZXJ0eShqc29uUHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3cgPSBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93KHRoaXMub2JqLCBqc29uUHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZCk7XG4gICAgICAgICAgICAgICAgaWYocHJvcGVydGllc1tpXS5jYXRlZ29yeSkgcm93LmNhdGVnb3J5ID0gcHJvcGVydGllc1tpXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvcGVydGllc1tpXS50aXRsZSkge1xuICAgICAgICAgICAgICAgIHJvdy5wcm9wZXJ0aWVzW3Jvdy5wcm9wZXJ0aWVzLmxlbmd0aCAtIDFdLnRpdGxlID0gcHJvcGVydGllc1tpXS50aXRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgfVxuICAgcHJpdmF0ZSBnZXROYW1lKHByb3A6IGFueSk6IHN0cmluZyB7XG4gICAgICAgaWYoIXByb3ApIHJldHVybiBudWxsO1xuICAgICAgICBpZih0eXBlb2YgcHJvcCA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHByb3A7XG4gICAgICAgIGlmKHByb3AubmFtZSkgcmV0dXJuIHByb3AubmFtZTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICB9XG4gICBwcml2YXRlIGdldFJvd0J5Q2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZykge1xuICAgICAgIGlmKCFjYXRlZ29yeSkgcmV0dXJuIG51bGw7XG4gICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgaWYodGhpcy5yb3dzW2ldLmNhdGVnb3J5ID09IGNhdGVnb3J5KSByZXR1cm4gdGhpcy5yb3dzW2ldO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gbnVsbDtcbiAgIH1cbiAgIHByaXZhdGUgZ2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5IHtcbiAgICAgICBpZighcHJvcGVydHlOYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNbaV0ubmFtZSA9PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL1RPRE8gY29kZSBkdXBsaWNhdGlvbi4gVGhpcyBjb2RlIGlzIGluIDMgcGxhY2VzIGFscmVhZHksIGRvIHJlZmFjdG9yaW5nLlxuICAgICAgICBpZihwcm9wZXJ0eSAmJiBwcm9wZXJ0eVtcInZpc2libGVcIl0gPT09IGZhbHNlKSBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMub2JqLCBwcm9wZXJ0eSkpIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllcy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUXVlc3Rpb25Ub29sYm94SXRlbSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGljb25OYW1lOiBzdHJpbmc7XG4gICAganNvbjogYW55O1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaXNDb3BpZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblRvb2xib3gge1xuICAgIHB1YmxpYyBvcmRlcmVkUXVlc3Rpb25zID0gW1widGV4dFwiLCBcImNoZWNrYm94XCIsIFwicmFkaW9ncm91cFwiLCBcImRyb3Bkb3duXCIsIFwiY29tbWVudFwiLCBcInJhdGluZ1wiLCBcImh0bWxcIl07XG4gICAgcHVibGljIGNvcGllZEl0ZW1NYXhDb3VudDogbnVtYmVyID0gMztcbiAgICBwcml2YXRlIGl0ZW1zVmFsdWU6IEFycmF5PElRdWVzdGlvblRvb2xib3hJdGVtPiA9IFtdO1xuXG4gICAga29JdGVtczogYW55O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHN1cHBvcnRlZFF1ZXN0aW9uczogQXJyYXk8c3RyaW5nPiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdEl0ZW1zKHN1cHBvcnRlZFF1ZXN0aW9ucyk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQganNvblRleHQoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zVmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGpzb25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlID0gKHZhbHVlKSA/IEpTT04ucGFyc2UodmFsdWUpIDogW107XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb3BpZWRKc29uVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5jb3BpZWRJdGVtcyk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY29waWVkSnNvblRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB2YXIgbmV3SXRlbXMgPSAodmFsdWUpID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBbXTtcbiAgICAgICAgdGhpcy5jbGVhckNvcGllZEl0ZW1zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0l0ZW1zW2ldLmlzQ29waWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShuZXdJdGVtc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBpdGVtcygpOiBBcnJheTxJUXVlc3Rpb25Ub29sYm94SXRlbT4geyByZXR1cm4gdGhpcy5pdGVtc1ZhbHVlOyB9XG4gICAgcHVibGljIGdldCBjb3BpZWRJdGVtcygpOiBBcnJheTxJUXVlc3Rpb25Ub29sYm94SXRlbT4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtc1ZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1ZhbHVlW2ldLmlzQ29waWVkKSByZXN1bHQucHVzaCh0aGlzLml0ZW1zVmFsdWVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRJdGVtcyhpdGVtczogQXJyYXk8SVF1ZXN0aW9uVG9vbGJveEl0ZW0+LCBjbGVhckFsbDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjbGVhckFsbCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkQ29waWVkSXRlbShxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgaXRlbSA9IHsgbmFtZTogcXVlc3Rpb24ubmFtZSwgdGl0bGU6IHF1ZXN0aW9uLm5hbWUsIGlzQ29waWVkOiB0cnVlLCBpY29uTmFtZTogXCJpY29uLWRlZmF1bHRcIiwganNvbjogdGhpcy5nZXRRdWVzdGlvbkpTT04ocXVlc3Rpb24pIH07XG4gICAgICAgIGlmICh0aGlzLnJlcGxhY2VJdGVtKGl0ZW0pKSByZXR1cm47XG4gICAgICAgIHZhciBjb3BpZWQgPSB0aGlzLmNvcGllZEl0ZW1zO1xuICAgICAgICBpZiAodGhpcy5jb3BpZWRJdGVtTWF4Q291bnQgPiAwICYmIGNvcGllZC5sZW5ndGggPT0gdGhpcy5jb3BpZWRJdGVtTWF4Q291bnQpIHRoaXMucmVtb3ZlSXRlbShjb3BpZWRbdGhpcy5jb3BpZWRJdGVtTWF4Q291bnQgLSAxXS5uYW1lKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0pO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBJUXVlc3Rpb25Ub29sYm94SXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zVmFsdWUucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVwbGFjZUl0ZW0oaXRlbTogSVF1ZXN0aW9uVG9vbGJveEl0ZW0pOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKGl0ZW0ubmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlW2luZGV4XSA9IGl0ZW07XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVJdGVtKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YobmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhckl0ZW1zKCkge1xuICAgICAgICB0aGlzLml0ZW1zVmFsdWUgPSBbXTtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXJDb3BpZWRJdGVtcygpIHtcbiAgICAgICAgdmFyIHJlbW92ZWRJdGVtcyA9IHRoaXMuY29waWVkSXRlbXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3ZlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0ocmVtb3ZlZEl0ZW1zW2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zKHRoaXMuaXRlbXNWYWx1ZSk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5kZXhPZihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zVmFsdWVbaV0ubmFtZSA9PSBuYW1lKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlRGVmYXVsdEl0ZW1zKHN1cHBvcnRlZFF1ZXN0aW9uczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvblR5cGVzKHN1cHBvcnRlZFF1ZXN0aW9ucyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IFN1cnZleS5FbGVtZW50RmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVFbGVtZW50KG5hbWUsIFwicTFcIik7XG4gICAgICAgICAgICBpZighcXVlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGpzb24gPSB0aGlzLmdldFF1ZXN0aW9uSlNPTihxdWVzdGlvbik7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHsgbmFtZTogbmFtZSwgaWNvbk5hbWU6ICdpY29uLScgKyBuYW1lLCB0aXRsZTogZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZygncXQuJyArIG5hbWUpLCBqc29uOiBqc29uLCBpc0NvcGllZDogZmFsc2UgfTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNWYWx1ZS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRRdWVzdGlvbkpTT04ocXVlc3Rpb246IGFueSk6IGFueSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHF1ZXN0aW9uKTtcbiAgICAgICAganNvbi50eXBlID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRRdWVzdGlvblR5cGVzKHN1cHBvcnRlZFF1ZXN0aW9uczogQXJyYXk8c3RyaW5nPik6IHN0cmluZ1tdIHtcbiAgICAgICAgdmFyIGFsbFR5cGVzID0gU3VydmV5LkVsZW1lbnRGYWN0b3J5Lkluc3RhbmNlLmdldEFsbFR5cGVzKCk7XG4gICAgICAgIGlmICghc3VwcG9ydGVkUXVlc3Rpb25zIHx8IHN1cHBvcnRlZFF1ZXN0aW9ucy5sZW5ndGggPT0gMCkgc3VwcG9ydGVkUXVlc3Rpb25zID0gYWxsVHlwZXM7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yZGVyZWRRdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5vcmRlcmVkUXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlZFF1ZXN0aW9ucy5pbmRleE9mKG5hbWUpID4gLTEgJiYgYWxsVHlwZXMuaW5kZXhPZihuYW1lKSA+IC0xKSBxdWVzdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1cHBvcnRlZFF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBzdXBwb3J0ZWRRdWVzdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAocXVlc3Rpb25zLmluZGV4T2Yoc3VwcG9ydGVkUXVlc3Rpb25zW2ldKSA8IDAgJiYgYWxsVHlwZXMuaW5kZXhPZihuYW1lKSA+IC0xKSBxdWVzdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlc3Rpb25zO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvblRvb2xib3gudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleUpTT041fSBmcm9tIFwiLi9qc29uNVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5RW1iZWRpbmdXaW5kb3cge1xuICAgIHByaXZhdGUganNvblZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZ0hlYWQ6IEFjZUFqYXguRWRpdG9yO1xuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdKYXZhOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nQm9keTogQWNlQWpheC5FZGl0b3I7XG4gICAga29IZWFkVGV4dDogYW55O1xuICAgIGtvQm9keVRleHQ6IGFueTtcbiAgICBrb0phdmFUZXh0OiBhbnk7XG4gICAgcHVibGljIHN1cnZleUlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdXJ2ZXlQb3N0SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGdlbmVyYXRlVmFsaWRKU09OOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHN1cnZleUpTVmVyc2lvbjogc3RyaW5nID0gU3VydmV5LlZlcnNpb247XG4gICAgcHVibGljIHN1cnZleUNETlBhdGg6IHN0cmluZyA9IFwiaHR0cHM6Ly9zdXJ2ZXlqcy5henVyZWVkZ2UubmV0L1wiO1xuICAgIGtvU2hvd0FzV2luZG93OiBhbnk7XG4gICAga29TY3JpcHRVc2luZzogYW55O1xuICAgIGtvSGFzSWRzOiBhbnk7XG4gICAga29Mb2FkU3VydmV5OiBhbnk7XG4gICAga29MaWJyYXJ5VmVyc2lvbjogYW55O1xuICAgIGtvVmlzaWJsZUh0bWw6IGFueTtcbiAgICBwcml2YXRlIHBsYXRmb3JtU3VydmV5SlNQcmVmaXggPSB7XG4gICAgICAgIFwiYW5ndWxhclwiOiBcImFuZ3VsYXJcIixcbiAgICAgICAgXCJqcXVlcnlcIjogXCJqcXVlcnlcIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcImtvXCIsXG4gICAgICAgIFwicmVhY3RcIjogXCJyZWFjdFwiLFxuICAgICAgICBcInZ1ZVwiOiBcInZ1ZVwiXG4gICAgfVxuICAgIHByaXZhdGUgcGxhdGZvcm1KU29uUGFnZSA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiQENvbXBvbmVudCh7XFxuICBzZWxlY3RvcjogJ25nLWFwcCcsXFxuICAgICAgICB0ZW1wbGF0ZTogXFxuICAgICAgICA8ZGl2IGlkPSdzdXJ2ZXlFbGVtZW50Jz48L2Rpdj5cXFwiLFxcbn0pXFxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XFxuICAgIG5nT25Jbml0KCkge1xcbiAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuICAgICAgICBzdXJ2ZXkub25Db21wbGV0ZS5hZGQoc2VuZERhdGFUb1NlcnZlcik7XFxuICAgICAgIFN1cnZleS5TdXJ2ZXlORy5yZW5kZXIoXFxcInN1cnZleUVsZW1lbnRcXFwiLCB7IG1vZGVsOiBzdXJ2ZXkgfSk7XFxuICAgIH1cXG59XCIsXG4gICAgICAgIFwianF1ZXJ5XCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuJChcXFwiI3N1cnZleUNvbnRhaW5lclxcXCIpLlN1cnZleSh7XFxuICAgIG1vZGVsOiBzdXJ2ZXksXFxuICAgIG9uQ29tcGxldGU6IHNlbmREYXRhVG9TZXJ2ZXJcXG59KTtcIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcInZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04sIFxcXCJzdXJ2ZXlDb250YWluZXJcXFwiKTtcXG5zdXJ2ZXkub25Db21wbGV0ZS5hZGQoc2VuZERhdGFUb1NlcnZlcik7XCIsXG4gICAgICAgIFwicmVhY3RcIjogXCJSZWFjdERPTS5yZW5kZXIoXFxuICAgIDxTdXJ2ZXkuU3VydmV5IGpzb249eyBzdXJ2ZXlKU09OIH0gb25Db21wbGV0ZT17IHNlbmREYXRhVG9TZXJ2ZXIgfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcInN1cnZleUNvbnRhaW5lclxcXCIpKTtcIixcbiAgICAgICAgXCJ2dWVcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG5uZXcgVnVlKHsgZWw6ICcjc3VydmV5Q29udGFpbmVyJywgZGF0YTogeyBzdXJ2ZXk6IHN1cnZleSB9IH0pO1wiXG4gICAgfTtcbiAgICBwcml2YXRlIHBsYXRmb3JtSlNvbldpbmRvdyA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiQENvbXBvbmVudCh7XFxuICBzZWxlY3RvcjogJ25nLWFwcCcsXFxuICAgICAgICB0ZW1wbGF0ZTogXFxuICAgICAgICA8ZGl2IGlkPSdzdXJ2ZXlFbGVtZW50Jz48L2Rpdj5cXFwiLFxcbn0pXFxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XFxuICAgIG5nT25Jbml0KCkge1xcbiAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuICAgICAgICBzdXJ2ZXkub25Db21wbGV0ZS5hZGQoc2VuZERhdGFUb1NlcnZlcik7XFxuICAgICAgIFN1cnZleS5TdXJ2ZXlXaW5kb3dORy5yZW5kZXIoXFxcInN1cnZleUVsZW1lbnRcXFwiLCB7IG1vZGVsOiBzdXJ2ZXkgfSk7XFxuICAgIH1cXG59XCIsXG4gICAgICAgIFwianF1ZXJ5XCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuJChcXFwiI3N1cnZleUNvbnRhaW5lclxcXCIpLlN1cnZleVdpbmRvdyh7XFxuICAgIG1vZGVsOiBzdXJ2ZXksXFxuICAgIG9uQ29tcGxldGU6IHNlbmREYXRhVG9TZXJ2ZXJcXG59KTtcIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcInZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04pO1xcbnN1cnZleVdpbmRvdy5zaG93KCk7XFxuc3VydmV5Lm9uQ29tcGxldGUuYWRkKHNlbmREYXRhVG9TZXJ2ZXIpO1wiLFxuICAgICAgICBcInJlYWN0XCI6IFwiUmVhY3RET00ucmVuZGVyKFxcbiAgICA8U3VydmV5LlN1cnZleVdpbmRvdyBqc29uPXsgc3VydmV5SlNPTiB9IG9uQ29tcGxldGU9eyBzZW5kRGF0YVRvU2VydmVyIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJzdXJ2ZXlDb250YWluZXJcXFwiKSk7XCIsXG4gICAgICAgIFwidnVlXCI6IFwiXCJcbiAgICB9O1xuICAgIHByaXZhdGUgcGxhdGZvcm1IdG1sb25QYWdlID0ge1xuICAgICAgICBcImFuZ3VsYXJcIjogXCI8bmctYXBwPjwvbmctYXBwPlwiLFxuICAgICAgICBcImpxdWVyeVwiOiBcIjxkaXYgaWQ9XFxcInN1cnZleUNvbnRhaW5lclxcXCI+PC9kaXY+XCIsXG4gICAgICAgIFwia25vY2tvdXRcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxuICAgICAgICBcInJlYWN0XCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48L2Rpdj5cIixcbiAgICAgICAgXCJ2dWVcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjxzdXJ2ZXkgOnN1cnZleT1cXFwic3VydmV5XFxcIj48L3N1cnZleT48L2Rpdj5cIlxuICAgIH07XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUh0bWxvbldpbmRvdyA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiPG5nLWFwcD48L25nLWFwcD5cIixcbiAgICAgICAgXCJqcXVlcnlcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxuICAgICAgICBcImtub2Nrb3V0XCI6IFwiXCIsXG4gICAgICAgIFwicmVhY3RcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxuICAgICAgICBcInZ1ZVwiOiBcIjxkaXYgaWQ9J3N1cnZleUNvbnRhaW5lcic+PHN1cnZleS13aW5kb3cgOnN1cnZleT0nc3VydmV5Jz48L3N1cnZleS13aW5kb3c+PC9kaXY+XCJcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29MaWJyYXJ5VmVyc2lvbiA9IGtvLm9ic2VydmFibGUoXCJqcXVlcnlcIik7XG4gICAgICAgIHRoaXMua29TaG93QXNXaW5kb3cgPSBrby5vYnNlcnZhYmxlKFwicGFnZVwiKTtcbiAgICAgICAgdGhpcy5rb1NjcmlwdFVzaW5nID0ga28ub2JzZXJ2YWJsZShcImJvb3RzdHJhcFwiKTtcbiAgICAgICAgdGhpcy5rb0hhc0lkcyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvTG9hZFN1cnZleSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMua29IZWFkVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29KYXZhVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29Cb2R5VGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG5cbiAgICAgICAgdGhpcy5rb1Zpc2libGVIdG1sID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5rb1Nob3dBc1dpbmRvdygpID09IFwicGFnZVwiIHx8IHNlbGYucGxhdGZvcm1IdG1sb25XaW5kb3dbc2VsZi5rb0xpYnJhcnlWZXJzaW9uKCldICE9IFwiXCI7IH0pO1xuICAgICAgICB0aGlzLmtvTGlicmFyeVZlcnNpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNldEhlYWRUZXh0KCk7IHNlbGYuc2V0SmF2YVRlc3QoKTsgc2VsZi5zZXRCb2R5VGV4dCgpOyB9KTtcbiAgICAgICAgdGhpcy5rb1Nob3dBc1dpbmRvdy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SmF2YVRlc3QoKTsgc2VsZi5zZXRCb2R5VGV4dCgpOyB9KTtcbiAgICAgICAgdGhpcy5rb1NjcmlwdFVzaW5nLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZXRIZWFkVGV4dCgpOyBzZWxmLnNldEphdmFUZXN0KCk7IH0pO1xuICAgICAgICB0aGlzLmtvTG9hZFN1cnZleS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SmF2YVRlc3QoKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID0gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGdldCBqc29uKCk6IGFueSB7IHJldHVybiB0aGlzLmpzb25WYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQganNvbih2YWx1ZTogYW55KSB7IHRoaXMuanNvblZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGhhc0FjZUVkaXRvcigpOiBib29sZWFuIHsgcmV0dXJuIHR5cGVvZiBhY2UgIT09IFwidW5kZWZpbmVkXCI7IH1cbiAgICBwdWJsaWMgc2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQWNlRWRpdG9yICYmIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID0gdGhpcy5jcmVhdGVFZGl0b3IoXCJzdXJ2ZXlFbWJlZGluZ0hlYWRcIik7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nQm9keSA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdCb2R5XCIpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0phdmEgPSB0aGlzLmNyZWF0ZUVkaXRvcihcInN1cnZleUVtYmVkaW5nSmF2YVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSGFzSWRzKHRoaXMuc3VydmV5SWQgJiYgdGhpcy5zdXJ2ZXlQb3N0SWQpO1xuICAgICAgICB0aGlzLnNldEJvZHlUZXh0KCk7XG4gICAgICAgIHRoaXMuc2V0SGVhZFRleHQoKTtcbiAgICAgICAgdGhpcy5zZXRKYXZhVGVzdCgpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldEJvZHlUZXh0KCkge1xuICAgICAgICB0aGlzLnNldFRleHRUb0VkaXRvcih0aGlzLnN1cnZleUVtYmVkaW5nQm9keSwgdGhpcy5rb0JvZHlUZXh0LCB0aGlzLnBsYXRmb3JtSHRtbG9uUGFnZVt0aGlzLmtvTGlicmFyeVZlcnNpb24oKV0pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldCBnZXRDRE5QYXRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnN1cnZleUNETlBhdGggKyB0aGlzLnN1cnZleUpTVmVyc2lvbiArIFwiL1wiOyB9XG4gICAgcHJpdmF0ZSBzZXRIZWFkVGV4dCgpIHtcbiAgICAgICAgdmFyIHN0ciA9IFwiPCEtLSBZb3VyIHBsYXRmb3JtIChcIiArIHRoaXMua29MaWJyYXJ5VmVyc2lvbigpICsgXCIpIHNjcmlwdHMuIC0tPlxcblwiO1xuICAgICAgICBpZiAodGhpcy5rb1NjcmlwdFVzaW5nKCkgIT0gXCJib290c3RyYXBcIikge1xuICAgICAgICAgICAgc3RyICs9IFwiXFxuPGxpbmsgaHJlZj1cXFwiXCIgKyB0aGlzLmdldENETlBhdGggKyAgXCJzdXJ2ZXkuY3NzXFxcIiB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiAvPlwiO1xuICAgICAgICB9XG4gICAgICAgIHN0ciArPSBcIlxcbjxzY3JpcHQgc3JjPVxcXCJcIiArIHRoaXMuZ2V0Q0ROUGF0aCArICAgXCJzdXJ2ZXkuXCIgKyB0aGlzLnBsYXRmb3JtU3VydmV5SlNQcmVmaXhbdGhpcy5rb0xpYnJhcnlWZXJzaW9uKCldICsgIFwiIC5taW4uanNcXFwiPjwvc2NyaXB0PlwiO1xuXG4gICAgICAgIHRoaXMuc2V0VGV4dFRvRWRpdG9yKHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkLCB0aGlzLmtvSGVhZFRleHQsIHN0cik7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0SmF2YVRlc3QoKSB7XG4gICAgICAgIHRoaXMuc2V0VGV4dFRvRWRpdG9yKHRoaXMuc3VydmV5RW1iZWRpbmdKYXZhLCB0aGlzLmtvSmF2YVRleHQsIHRoaXMuZ2V0SmF2YVRleHQoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlRWRpdG9yKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBBY2VBamF4LkVkaXRvciB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBhY2UuZWRpdChlbGVtZW50TmFtZSk7XG4gICAgICAgIGVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9tb25va2FpXCIpO1xuICAgICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvanNvblwiKTtcbiAgICAgICAgZWRpdG9yLnNldFNob3dQcmludE1hcmdpbihmYWxzZSk7XG4gICAgICAgIGVkaXRvci5yZW5kZXJlci5zZXRTaG93R3V0dGVyKGZhbHNlKTtcbiAgICAgICAgZWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xuICAgICAgICByZXR1cm4gZWRpdG9yO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEphdmFUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBpc09uUGFnZSA9IHRoaXMua29TaG93QXNXaW5kb3coKSA9PSBcInBhZ2VcIjtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXMuZ2V0U2F2ZUZ1bmMoKSArIFwiXFxuXFxuXCI7XG4gICAgICAgIHN0ciArPSBpc09uUGFnZSA/IHRoaXMucGxhdGZvcm1KU29uUGFnZVt0aGlzLmtvTGlicmFyeVZlcnNpb24oKV0gOiB0aGlzLnBsYXRmb3JtSlNvbldpbmRvd1t0aGlzLmtvTGlicmFyeVZlcnNpb24oKV07XG4gICAgICAgIHZhciBqc29uVGV4dCA9IFwidmFyIHN1cnZleUpTT04gPSBcIiArIHRoaXMuZ2V0SnNvblRleHQoKSArIFwiXFxuXFxuXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNldENzcygpICsgXCJcXG5cIiArIGpzb25UZXh0ICsgc3RyO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNldENzcygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5rb1NjcmlwdFVzaW5nKCkgIT0gXCJib290c3RyYXBcIikgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiBcIlN1cnZleS5TdXJ2ZXkuY3NzVHlwZSA9IFxcXCJib290c3RyYXBcXFwiO1xcblwiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNhdmVGdW5jKCkge1xuICAgICAgICByZXR1cm4gXCJmdW5jdGlvbiBzZW5kRGF0YVRvU2VydmVyKHN1cnZleSkge1xcblwiICsgdGhpcy5nZXRTYXZlRnVuY0NvZGUoKSArIFwiXFxufVwiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNhdmVGdW5jQ29kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMua29IYXNJZHMoKSkgcmV0dXJuIFwiICAgIHN1cnZleS5zZW5kUmVzdWx0KCdcIiArIHRoaXMuc3VydmV5UG9zdElkICsgXCInKTtcIjtcbiAgICAgICAgcmV0dXJuIFwiICAgIC8vc2VuZCBBamF4IHJlcXVlc3QgdG8geW91ciB3ZWIgc2VydmVyLlxcbiAgICBhbGVydChcXFwiVGhlIHJlc3VsdHMgYXJlOlxcXCIgKyBKU09OLnN0cmluZ2lmeShzLmRhdGEpKTtcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRKc29uVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5rb0hhc0lkcygpICYmIHRoaXMua29Mb2FkU3VydmV5KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcInsgc3VydmV5SWQ6ICdcIiArIHRoaXMuc3VydmV5SWQgKyBcIid9XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVWYWxpZEpTT04pIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmpzb24pO1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleUpTT041KCkuc3RyaW5naWZ5KHRoaXMuanNvbik7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0VGV4dFRvRWRpdG9yKGVkaXRvcjogQWNlQWpheC5FZGl0b3IsIGtvVGV4dDogYW55LCB0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGVkaXRvcikgZWRpdG9yLnNldFZhbHVlKHRleHQpO1xuICAgICAgICBpZiAoa29UZXh0KSBrb1RleHQodGV4dCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlFbWJlZGluZ1dpbmRvdy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXIsIE9ialR5cGV9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdEl0ZW0ge1xuICAgIHB1YmxpYyB2YWx1ZTogU3VydmV5LkJhc2U7XG4gICAgcHVibGljIHRleHQ6IGFueTtcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlciA9IDA7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RzIHtcbiAgICBwdWJsaWMgc3RhdGljIGludGVuZDogc3RyaW5nID0gXCIuXCI7XG4gICAgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMga29PYmplY3RzOiBhbnksIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnkpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZWJ1aWxkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRQYWdlKHBhZ2U6IFN1cnZleS5QYWdlTW9kZWwpIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50KHBhZ2UsIG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkRWxlbWVudChlbGVtZW50OiBhbnksIHBhcmVudDogYW55KSB7XG4gICAgICAgIHZhciBwYXJlbnRJbmRleCA9IHBhcmVudCAhPSBudWxsID8gdGhpcy5nZXRJdGVtSW5kZXgocGFyZW50KSA6IDA7XG4gICAgICAgIGlmIChwYXJlbnRJbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gcGFyZW50ICE9IG51bGwgPyBwYXJlbnQuZWxlbWVudHMgOiB0aGlzLnN1cnZleS5wYWdlcztcbiAgICAgICAgdmFyIGVsZW1lbnRJbmRleCA9IGVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgIHZhciBuZXdJbmRleCA9IGVsZW1lbnRJbmRleCArIDEgKyBwYXJlbnRJbmRleDtcbiAgICAgICAgaWYoZWxlbWVudEluZGV4ID4gMCkge1xuICAgICAgICAgICAgdmFyIHByZXZFbGVtZW50ID0gZWxlbWVudHNbZWxlbWVudEluZGV4IC0gMV07XG4gICAgICAgICAgICBuZXdJbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KHByZXZFbGVtZW50KSArIHRoaXMuZ2V0QWxsRWxlbWVudENvdW50KHByZXZFbGVtZW50KSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oZWxlbWVudCwgdGhpcy5rb09iamVjdHMoKVtwYXJlbnRJbmRleF0pO1xuICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSwgbmV3SW5kZXgpO1xuICAgICAgICBpZihlbGVtZW50LmVsZW1lbnRzKSB7XG4gICAgICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKG9ianMsIGVsZW1lbnQuZWxlbWVudHMsIGl0ZW0pO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpICsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtvT2JqZWN0cy5zcGxpY2UobmV3SW5kZXggKyAxICsgaSwgMCwgb2Jqc1tpXSk7ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKGl0ZW0pO1xuICAgIH1cbiAgICBwdWJsaWMgc2VsZWN0T2JqZWN0KG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIG9ianMgPSB0aGlzLmtvT2JqZWN0cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvYmpzW2ldLnZhbHVlID09IG9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZChvYmpzW2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlbW92ZU9iamVjdChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIGNvdW50VG9SZW1vdmUgPSAxICsgdGhpcy5nZXRBbGxFbGVtZW50Q291bnQob2JqKTtcbiAgICAgICAgdGhpcy5rb09iamVjdHMuc3BsaWNlKGluZGV4LCBjb3VudFRvUmVtb3ZlKTtcbiAgICB9XG4gICAgcHVibGljIG5hbWVDaGFuZ2VkKG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgob2JqKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvT2JqZWN0cygpW2luZGV4XS50ZXh0KHRoaXMuZ2V0VGV4dCh0aGlzLmtvT2JqZWN0cygpW2luZGV4XSkpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VsZWN0TmV4dFF1ZXN0aW9uKGlzVXA6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZFF1ZXN0aW9uKCk7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChxdWVzdGlvbik7XG4gICAgICAgIGlmIChpdGVtSW5kZXggPCAwKSByZXR1cm4gcXVlc3Rpb247XG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcbiAgICAgICAgdmFyIG5ld0l0ZW1JbmRleCA9IGl0ZW1JbmRleCArIChpc1VwID8gLTEgOiAxKTtcbiAgICAgICAgaWYgKG5ld0l0ZW1JbmRleCA8IG9ianMubGVuZ3RoICYmIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9ianNbbmV3SXRlbUluZGV4XS52YWx1ZSkgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgaXRlbUluZGV4ID0gbmV3SXRlbUluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SXRlbUluZGV4ID0gaXRlbUluZGV4O1xuICAgICAgICAgICAgd2hpbGUgKG5ld0l0ZW1JbmRleCA8IG9ianMubGVuZ3RoICYmIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9ianNbbmV3SXRlbUluZGV4XS52YWx1ZSkgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IG5ld0l0ZW1JbmRleDtcbiAgICAgICAgICAgICAgICBuZXdJdGVtSW5kZXggKz0gKGlzVXAgPyAxIDogLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChvYmpzW2l0ZW1JbmRleF0pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFsbEVsZW1lbnRDb3VudChlbGVtZW50OiBhbnkpIHtcbiAgICAgICAgaWYoIWVsZW1lbnQuZWxlbWVudHMpIHJldHVybiAwO1xuICAgICAgICB2YXIgcmVzID0gMDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuZWxlbWVudHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICByZXMgKz0gMSArIHRoaXMuZ2V0QWxsRWxlbWVudENvdW50KGVsZW1lbnQuZWxlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRRdWVzdGlvbigpOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvU2VsZWN0ZWQoKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtvU2VsZWN0ZWQoKS52YWx1ZTtcbiAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlF1ZXN0aW9uID8gPFN1cnZleS5RdWVzdGlvbkJhc2U+KG9iaikgOiBudWxsO1xuXG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbShpdGVtOiBTdXJ2ZXlPYmplY3RJdGVtLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMua29PYmplY3RzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmtvT2JqZWN0cy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJlYnVpbGQoKSB7XG4gICAgICAgIHZhciBvYmpzID0gW107XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmtvT2JqZWN0cyhvYmpzKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0T2JqZWN0KG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByb290ID0gdGhpcy5jcmVhdGVJdGVtKHRoaXMuc3VydmV5LCBudWxsKTtcbiAgICAgICAgb2Jqcy5wdXNoKHJvb3QpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5wYWdlc1tpXTtcbiAgICAgICAgICAgIHZhciBwYWdlSXRlbSA9IHRoaXMuY3JlYXRlSXRlbShwYWdlLCByb290KTtcbiAgICAgICAgICAgIG9ianMucHVzaChwYWdlSXRlbSk7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMob2JqcywgcGFnZS5lbGVtZW50cywgcGFnZUl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29PYmplY3RzKG9ianMpO1xuICAgICAgICB0aGlzLnNlbGVjdE9iamVjdCh0aGlzLnN1cnZleSlcbiAgICB9XG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRzKG9ianM6IEFycmF5PGFueT4sIGVsZW1lbnRzOiBBcnJheTxTdXJ2ZXkuSUVsZW1lbnQ+LCBwYXJlbnRJdGVtOiBTdXJ2ZXlPYmplY3RJdGVtKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYoZWwuaXNQYW5lbCkge1xuICAgICAgICAgICAgICAgIHZhciBwYW5lbEl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oPFN1cnZleS5QYW5lbD5lbCwgcGFyZW50SXRlbSk7XG4gICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHBhbmVsSXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKG9ianMsICg8U3VydmV5LlBhbmVsPmVsKS5lbGVtZW50cywgcGFuZWxJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ianMucHVzaCh0aGlzLmNyZWF0ZUl0ZW0oPFN1cnZleS5RdWVzdGlvbkJhc2U+ZWwsIHBhcmVudEl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUl0ZW0odmFsdWU6IFN1cnZleS5CYXNlLCBwYXJlbnQ6IFN1cnZleU9iamVjdEl0ZW0pIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgU3VydmV5T2JqZWN0SXRlbSgpO1xuICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGl0ZW0ubGV2ZWwgPSBwYXJlbnQgIT0gbnVsbCA/IHBhcmVudC5sZXZlbCArIDEgOiAwO1xuICAgICAgICBpdGVtLnRleHQgPSBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0VGV4dChpdGVtKSk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEl0ZW1JbmRleCh2YWx1ZTogU3VydmV5LkJhc2UpOiBudW1iZXIge1xuICAgICAgICB2YXIgb2JqcyA9IHRoaXMua29PYmplY3RzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9ianNbaV0udmFsdWUgPT0gdmFsdWUpIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRUZXh0KGl0ZW06IFN1cnZleU9iamVjdEl0ZW0pOiBzdHJpbmcge1xuICAgICAgICBpZihpdGVtLmxldmVsID09IDApIHJldHVybiBcIlN1cnZleVwiO1xuICAgICAgICB2YXIgaW50ZW5kID0gU3VydmV5T2JqZWN0cy5pbnRlbmQ7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBpdGVtLmxldmVsOyBpICsrKSB7XG4gICAgICAgICAgICBpbnRlbmQgKz0gU3VydmV5T2JqZWN0cy5pbnRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludGVuZCArIFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKGl0ZW0udmFsdWUpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5T2JqZWN0cy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleUZvckRlc2lnbmVyIGV4dGVuZHMgU3VydmV5LlN1cnZleSB7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZEVsZW1lbnRWYWx1ZTogYW55O1xuICAgIGVkaXRRdWVzdGlvbkNsaWNrOiBhbnk7IGNvcHlRdWVzdGlvbkNsaWNrOiBhbnk7IGZhc3RDb3B5UXVlc3Rpb25DbGljazogYW55OyBkZWxldGVDdXJyZW50T2JqZWN0Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgIG9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkVkaXRRdWVzdGlvbjogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkNvcHlRdWVzdGlvbjogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkZhc3RDb3B5UXVlc3Rpb246IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25EZWxldGVDdXJyZW50T2JqZWN0OiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgY29uc3RydWN0b3IoanNvbk9iajogYW55ID0gbnVsbCwgcmVuZGVyZWRFbGVtZW50OiBhbnkgPSBudWxsLCBjc3M6IGFueSA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoanNvbk9iaiwgcmVuZGVyZWRFbGVtZW50LCBjc3MpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2V0RGVzaWduTW9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5vbkFmdGVyUmVuZGVyUGFnZS5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBvcHRpb25zLnBhZ2VbXCJvbkFmdGVyUmVuZGVyUGFnZVwiXShvcHRpb25zLmh0bWxFbGVtZW50KTsgfSk7XG4gICAgICAgIHRoaXMub25BZnRlclJlbmRlclF1ZXN0aW9uLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IG9wdGlvbnMucXVlc3Rpb25bXCJvbkFmdGVyUmVuZGVyUXVlc3Rpb25cIl0ob3B0aW9ucy5odG1sRWxlbWVudCk7IH0pO1xuICAgICAgICB0aGlzLm9uQWZ0ZXJSZW5kZXJQYW5lbC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBvcHRpb25zLnBhbmVsW1wib25BZnRlclJlbmRlclBhbmVsXCJdKG9wdGlvbnMuaHRtbEVsZW1lbnQpOyB9KTtcbiAgICAgICAgdGhpcy5lZGl0UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkVkaXRRdWVzdGlvbi5maXJlKHNlbGYsIG51bGwpOyB9O1xuICAgICAgICB0aGlzLmNvcHlRdWVzdGlvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uQ29weVF1ZXN0aW9uLmZpcmUoc2VsZiwgbnVsbCk7IH07XG4gICAgICAgIHRoaXMuZmFzdENvcHlRdWVzdGlvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uRmFzdENvcHlRdWVzdGlvbi5maXJlKHNlbGYsIG51bGwpOyB9O1xuICAgICAgICB0aGlzLmRlbGV0ZUN1cnJlbnRPYmplY3RDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkRlbGV0ZUN1cnJlbnRPYmplY3QuZmlyZShzZWxmLCBudWxsKTsgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRWxlbWVudCgpOiBhbnkge3JldHVybiB0aGlzLnNlbGVjdGVkRWxlbWVudFZhbHVlO31cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkRWxlbWVudCh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSB0aGlzLnNlbGVjdGVkRWxlbWVudFZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50VmFsdWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlW1wib25TZWxlY3RlZEVsZW1lbnRDaGFuZ2VkXCJdKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnRWYWx1ZVtcIm9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZFwiXSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25TZWxlY3RlZEVsZW1lbnRDaGFuZ2VkLmZpcmUodGhpcywgeyAnb2xkRWxlbWVudCc6IG9sZFZhbHVlLCAnbmV3RWxlbWVudCc6IHZhbHVlIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0RWRpdG9yTG9jU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyh2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYW5lbEJhc2VPbkNyZWF0aW5nKHNlbGY6IGFueSkge1xuICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlciA9IDA7XG4gICAgc2VsZi5lbXB0eUVsZW1lbnQgPSBudWxsO1xuICAgIHNlbGYua29Sb3dzLnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XG4gICAgICAgIGlmKHNlbGYuZW1wdHlFbGVtZW50KSB7XG4gICAgICAgICAgICBzZWxmLmVtcHR5RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi5rb1Jvd3MoKS5sZW5ndGggPiAwID8gXCJub25lXCIgOiBcIlwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRPbkNyZWF0aW5nKHNlbGY6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPSBudWxsO1xuICAgIHNlbGYuZHJhZ0Ryb3BIZWxwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZi5kcmFnRHJvcEhlbHBlclZhbHVlID0gc2VsZi5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZTtcbiAgICB9O1xuICAgIHNlbGYucmVuZGVyZWRFbGVtZW50ID0gbnVsbDtcbiAgICBzZWxmLmFkZG9uc0VsZW1lbnQgPSBudWxsO1xuICAgIHNlbGYua29Jc0RyYWdnaW5nID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgc2VsZi5rb0lzU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICBzZWxmLmtvSXNEcmFnZ2luZy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IFxuICAgICAgICBpZihzZWxmLnJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgc2VsZi5yZW5kZXJlZEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG5ld1ZhbHVlID8gMC40IDogMTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYua29Jc1NlbGVjdGVkLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgXG4gICAgICAgIGlmKHNlbGYucmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZihuZXdWYWx1ZSkgbmV3Q2xhc3MgKz0gXCIgc3ZkX3Ffc2VsZWN0ZWQgXCI7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcmVkRWxlbWVudC5jbGFzc05hbWUgPSBuZXdDbGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZihzZWxmLmFkZG9uc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbGYuYWRkb25zRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbmV3VmFsdWUgPyBcIlwiOiBcIm5vbmVcIjsgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRW1wdHlQYW5lbEVsZW1lbnQocm9vdDogSFRNTEVsZW1lbnQsIGRyYWdEcm9wSGVscGVyOiBhbnksIHNlbGY6IGFueSk6IEhUTUxFbGVtZW50IHtcbiAgICB2YXIgZURpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVEaXYuY2xhc3NOYW1lID0gXCJ3ZWxsXCI7XG4gICAgZURpdi5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSkgeyBcbiAgICAgICAgZHJhZ0Ryb3BIZWxwZXIuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZik7XG4gICAgfTtcbiAgICB2YXIgZVNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVTcGFuLnRleHRDb250ZW50ID0gc2VsZi5kYXRhLmdldEVkaXRvckxvY1N0cmluZygnc3VydmV5LmRyb3BRdWVzdGlvbicpO1xuICAgIGVEaXYuYXBwZW5kQ2hpbGQoZVNwYW4pO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZURpdik7XG4gICAgcmV0dXJuIGVEaXY7XG59XG5cbmNvbnN0IHF1ZXN0aW9uX2Rlc2lnbl9jbGFzczogc3RyaW5nID0gXCJzdmRfcXVlc3Rpb24gd2VsbCB3ZWxsLXNtIHN2ZF9xX2Rlc2lnbl9ib3JkZXJcIjtcbmNvbnN0IHBhbmVsX2Rlc2lnbl9jbGFzczogc3RyaW5nID0gXCJzdmRfcXVlc3Rpb24gd2VsbCB3ZWxsLXNtIHN2ZF9xX2Rlc2lnbl9ib3JkZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25EZXNpZ25JdGVtKG9uQ2xpY2s6IGFueSwgdGV4dDogc3RyaW5nKTogSFRNTExJRWxlbWVudCB7XG4gICAgdmFyIHJlcyA9IDxIVE1MTElFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBidG4ub25jbGljayA9IG9uQ2xpY2s7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiO1xuICAgIHJlcy5hcHBlbmRDaGlsZChidG4pO1xuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRBZGRvbnMoZGF0YTogYW55LCBpc1BhbmVsOiBib29sZWFuKTogSFRNTEVsZW1lbnQge1xuICAgIHZhciBtYWluOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc05hbWUgPSBcInN2ZF9xdWVzdGlvbl9tZW51IGJ0bi1ncm91cFwiO1xuICAgIG1haW5bXCJyb2xlXCJdID0gXCJncm91cFwiO1xuICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgIGJ0bi14c1wiO1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkgeyBkYXRhLmVkaXRRdWVzdGlvbkNsaWNrKCk7fTtcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7IC8vVE9ET1xuICAgIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5ICBidG4teHMgZHJvcGRvd24tdG9nZ2xlXCI7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwiZHJvcGRvd25cIik7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtaGFzcG9wdXBcIiwgXCJ0cnVlXCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsXCI7XG4gICAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB2YXIgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuY2xhc3NOYW1lID0gXCJkcm9wZG93bi1tZW51XCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY3JlYXRlUXVlc3Rpb25EZXNpZ25JdGVtKGRhdGEuY29weVF1ZXN0aW9uQ2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuYWRkVG9Ub29sYm94JykpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVRdWVzdGlvbkRlc2lnbkl0ZW0oZGF0YS5mYXN0Q29weVF1ZXN0aW9uQ2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuY29weScpKSk7XG4gICAgdmFyIGRlbGV0ZUxvY2FsZU5hbWUgPSBpc1BhbmVsID8gJ3N1cnZleS5kZWxldGVQYW5lbCcgOiAnc3VydmV5LmRlbGV0ZVF1ZXN0aW9uJztcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVRdWVzdGlvbkRlc2lnbkl0ZW0oZGF0YS5kZWxldGVDdXJyZW50T2JqZWN0Q2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKGRlbGV0ZUxvY2FsZU5hbWUpKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbi8vdmFyIGxhc3RFbGVtZW50T25DbGljazogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG5mdW5jdGlvbiBlbGVtZW50T25BZnRlclJlbmRlcmluZyhlbDogYW55LCBzZWxmOiBhbnksIGNsYXNzTmFtZTogc3RyaW5nLCBpc1BhbmVsOiBib29sZWFuLCBkaXNhYmxlOiBib29sZWFuKSB7XG4gICAgc2VsZi5yZW5kZXJlZEVsZW1lbnQgPSBlbDtcbiAgICB2YXIgbmV3Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgaWYoc2VsZi5rb0lzU2VsZWN0ZWQoKSkgbmV3Q2xhc3MgKz0gXCIgc3ZkX3Ffc2VsZWN0ZWRcIjtcbiAgICBcbiAgICBlbC5jbGFzc05hbWUgPSBuZXdDbGFzcztcbiAgICBlbC5zdHlsZS5vcGFjaXR5ID0gc2VsZi5rb0lzRHJhZ2dpbmcoKSA/IDAuNCA6IDE7XG4gICAgZWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBlbC5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSl7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZiwgdHJ1ZSk7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyb3AgPSBmdW5jdGlvbihlKXsgXG4gICAgICAgIGlmKCFlW1wibWFya0V2ZW50XCJdKSB7XG4gICAgICAgICAgICBlW1wibWFya0V2ZW50XCJdID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuZHJhZ0Ryb3BIZWxwZXIoKS5kb0Ryb3AoZSk7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uIChlKSB7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRyYWdEcm9wSGVscGVyKCkuc3RhcnREcmFnUXVlc3Rpb24oZSwgc2VsZik7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyYWdlbmQgPSBmdW5jdGlvbiAoZSkgeyBcbiAgICAgICAgc2VsZi5kcmFnRHJvcEhlbHBlcigpLmVuZCgpOyBcbiAgICB9O1xuICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRcIl0gPSBzZWxmOyBcbiAgICAgICAgfVxuICAgIH07XG4gICAgZWwub25rZXlkb3duID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLndpdGNoID09IDQ2KSBzZWxmLmRhdGEuZGVsZXRlQ3VycmVudE9iamVjdENsaWNrKCk7IFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZGlzYWJsZSkge1xuICAgICAgICB2YXIgY2hpbGRzID0gZWwuY2hpbGROb2RlcztcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkc1tpXS5zdHlsZSkgY2hpbGRzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxmLmFkZG9uc0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50QWRkb25zKHNlbGYuZGF0YSwgaXNQYW5lbCk7XG4gICAgc2VsZi5hZGRvbnNFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLmtvSXNTZWxlY3RlZCgpID8gXCJcIjogXCJub25lXCI7ICAgIFxuICAgIGVsLmFwcGVuZENoaWxkKHNlbGYuYWRkb25zRWxlbWVudCk7XG59XG5cblN1cnZleS5QYWdlLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFuZWxCYXNlT25DcmVhdGluZyh0aGlzKTtcbn07XG5cblN1cnZleS5QYWdlLnByb3RvdHlwZVtcIm9uQWZ0ZXJSZW5kZXJQYWdlXCJdID0gZnVuY3Rpb24oZWwpIHtcbiAgICBpZighdGhpcy5kYXRhLmlzRGVzaWduTW9kZSkgcmV0dXJuO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZHJhZ0Ryb3BIZWxwZXIgPSB0aGlzLmRhdGFbXCJkcmFnRHJvcEhlbHBlclwiXTtcbiAgICB0aGlzLmRyYWdFbnRlckNvdW50ZXIgPSAwO1xuICAgIGVsLm9uZHJhZ2VudGVyID0gZnVuY3Rpb24gKGUpIHsgXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlcisrOyBcbiAgICB9O1xuICAgIGVsLm9uZHJhZ2xlYXZlID0gZnVuY3Rpb24gKGUpIHsgXG4gICAgICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlci0tOyBcbiAgICAgICAgaWYgKHNlbGYuZHJhZ0VudGVyQ291bnRlciA9PT0gMCkgXG4gICAgICAgICAgICBkcmFnRHJvcEhlbHBlci5kb0xlYXZlUGFnZShlKTsgXG4gICAgfTtcbiAgICBlbC5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSl7IHJldHVybiBmYWxzZTsgfTtcbiAgICBlbC5vbmRyb3AgPSBmdW5jdGlvbihlKXsgZHJhZ0Ryb3BIZWxwZXIuZG9Ecm9wKGUpOyB9O1xuICAgIGlmKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5lbXB0eUVsZW1lbnQgPSBhZGRFbXB0eVBhbmVsRWxlbWVudChlbCwgZHJhZ0Ryb3BIZWxwZXIsIHNlbGYpO1xuICAgIH1cbn1cblxuU3VydmV5LlBhbmVsLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFuZWxCYXNlT25DcmVhdGluZyh0aGlzKTtcbiAgICBlbGVtZW50T25DcmVhdGluZyh0aGlzLCBwYW5lbF9kZXNpZ25fY2xhc3MpO1xufTtcblxuU3VydmV5LlBhbmVsLnByb3RvdHlwZVtcIm9uQWZ0ZXJSZW5kZXJQYW5lbFwiXSA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYoIXRoaXMuZGF0YS5pc0Rlc2lnbk1vZGUpIHJldHVybjtcbiAgICB2YXIgcm93cyA9IHRoaXMua29Sb3dzKCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5lbXB0eUVsZW1lbnQgPSBhZGRFbXB0eVBhbmVsRWxlbWVudChlbCwgc2VsZi5kcmFnRHJvcEhlbHBlcigpLCBzZWxmKTtcbiAgICB9XG4gICAgZWxlbWVudE9uQWZ0ZXJSZW5kZXJpbmcoZWwsIHRoaXMsIHBhbmVsX2Rlc2lnbl9jbGFzcywgdHJ1ZSwgdGhpcy5rb0lzRHJhZ2dpbmcoKSk7XG59XG5cblN1cnZleS5QYW5lbC5wcm90b3R5cGVbXCJvblNlbGVjdGVkRWxlbWVudENoYW5nZWRcIl0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCh0aGlzLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRWYWx1ZVwiXSA9PSB0aGlzKTtcbn07XG5cblN1cnZleS5RdWVzdGlvbkJhc2UucHJvdG90eXBlW1wib25DcmVhdGluZ1wiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50T25DcmVhdGluZyh0aGlzLCBxdWVzdGlvbl9kZXNpZ25fY2xhc3MpO1xufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvbkFmdGVyUmVuZGVyUXVlc3Rpb25cIl0gPSBmdW5jdGlvbihlbCkge1xuICAgIGlmKCF0aGlzLmRhdGEuaXNEZXNpZ25Nb2RlKSByZXR1cm47XG4gICAgZWxlbWVudE9uQWZ0ZXJSZW5kZXJpbmcoZWwsIHRoaXMsIHF1ZXN0aW9uX2Rlc2lnbl9jbGFzcywgZmFsc2UsIHRydWUpO1xufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvblNlbGVjdGVkRWxlbWVudENoYW5nZWRcIl0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCh0aGlzLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRWYWx1ZVwiXSA9PSB0aGlzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleWpzT2JqZWN0cy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVVuZG9SZWRvIHtcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxVbmRvUmVkb0l0ZW0+O1xuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHB1YmxpYyBrb0NhblVuZG86IGFueTsga29DYW5SZWRvOiBhbnk7XG4gICAgcHVibGljIG1heGltdW1Db3VudDogbnVtYmVyID0gMTA7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5rb0NhblVuZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMua29DYW5VbmRvKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8oZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q3VycmVudChzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IFVuZG9SZWRvSXRlbSgpO1xuICAgICAgICBpdGVtLnN1cnZleUpTT04gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3Qoc3VydmV5KTtcbiAgICAgICAgaXRlbS5zZWxlY3RlZE9iak5hbWUgPSBzZWxlY3RlZE9iak5hbWU7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnJlbW92ZU9sZERhdGEoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xuICAgIH1cbiAgICBwdWJsaWMgdW5kbygpOiBVbmRvUmVkb0l0ZW0ge1xuICAgICAgICBpZiAoIXRoaXMuY2FuVW5kbykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLmRvVW5kb1JlZG8oLTEpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVkbygpOiBVbmRvUmVkb0l0ZW0gIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblJlZG8pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5kb1VuZG9SZWRvKDEpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUNhblVuZG9SZWRvKCkge1xuICAgICAgICB0aGlzLmtvQ2FuVW5kbyh0aGlzLmNhblVuZG8pO1xuICAgICAgICB0aGlzLmtvQ2FuUmVkbyh0aGlzLmNhblJlZG8pO1xuICAgIH1cbiAgICBwcml2YXRlIGRvVW5kb1JlZG8oZEluZGV4OiBudW1iZXIpOiBVbmRvUmVkb0l0ZW0ge1xuICAgICAgICB0aGlzLmluZGV4ICs9IGRJbmRleDtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA+PSAwICYmIHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCA/IHRoaXMuaXRlbXNbdGhpcy5pbmRleF0gOiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhblVuZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID49IDEgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhblJlZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZW1vdmVPbGREYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggLSAxIDwgdGhpcy5tYXhpbXVtQ291bnQpIHJldHVybjtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoMCwgdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLm1heGltdW1Db3VudCAtIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuZG9SZWRvSXRlbSB7XG4gICAgc3VydmV5SlNPTjogYW55O1xuICAgIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91bmRvcmVkby50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleU9iamVjdEVkaXRvcn0gZnJvbSBcIi4vb2JqZWN0RWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVBhZ2VzRWRpdG9yfSBmcm9tIFwiLi9wYWdlc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlFbWJlZGluZ1dpbmRvd30gZnJvbSBcIi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0c30gZnJvbSBcIi4vc3VydmV5T2JqZWN0c1wiO1xuaW1wb3J0IHtTdXJ2ZXlWZXJic30gZnJvbSBcIi4vb2JqZWN0VmVyYnNcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93fSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5SlNPTkVkaXRvcn0gZnJvbSBcIi4vc3VydmV5SlNPTkVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlUZXh0V29ya2VyfSBmcm9tIFwiLi90ZXh0V29ya2VyXCJcbmltcG9ydCB7U3VydmV5VW5kb1JlZG8sIFVuZG9SZWRvSXRlbX0gZnJvbSBcIi4vdW5kb3JlZG9cIjtcbmltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCB7RHJhZ0Ryb3BIZWxwZXJ9IGZyb20gXCIuL2RyYWdkcm9waGVscGVyXCI7XG5pbXBvcnQge1F1ZXN0aW9uVG9vbGJveH0gZnJvbSBcIi4vcXVlc3Rpb25Ub29sYm94XCI7XG5pbXBvcnQge1N1cnZleUpTT041fSBmcm9tIFwiLi9qc29uNVwiO1xudmFyIHRlbXBsYXRlRWRpdG9ySHRtbCA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4vdGVtcGxhdGVzL2VudHJ5Lmh0bWxcIik7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlGb3JEZXNpZ25lcn0gZnJvbSBcIi4vc3VydmV5anNPYmplY3RzXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVG9vbGJhckl0ZW0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdmlzaWJsZTogS25vY2tvdXRPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbjtcbiAgICB0aXRsZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz4gfCBzdHJpbmc7XG4gICAgZW5hYmxlZD86IEtub2Nrb3V0T2JzZXJ2YWJsZTxib29sZWFuPiB8IGJvb2xlYW47XG4gICAgYWN0aW9uPzogKCkgPT4gdm9pZDtcbiAgICBjc3M/OiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPiB8IHN0cmluZztcbiAgICBpbm5lckNzcz86IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+IHwgc3RyaW5nO1xuICAgIGRhdGE/OiBhbnk7XG4gICAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gICAgaXRlbXM/OiBLbm9ja291dE9ic2VydmFibGVBcnJheTxJVG9vbGJhckl0ZW0+O1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5RWRpdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHROZXdTdXJ2ZXlUZXh0OiBzdHJpbmcgPSBcInsgcGFnZXM6IFsgeyBuYW1lOiAncGFnZTEnfV0gfVwiO1xuICAgIHByaXZhdGUgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHN1cnZleWpzOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHN1cnZleWpzRXhhbXBsZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGpzb25FZGl0b3I6IFN1cnZleUpTT05FZGl0b3I7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdEVkaXRvcjogU3VydmV5T2JqZWN0RWRpdG9yO1xuICAgIHByaXZhdGUgcXVlc3Rpb25FZGl0b3JXaW5kb3c6IFN1cnZleVByb3BlcnR5RWRpdG9yU2hvd1dpbmRvdztcbiAgICBwcml2YXRlIHBhZ2VzRWRpdG9yOiBTdXJ2ZXlQYWdlc0VkaXRvcjtcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nOiBTdXJ2ZXlFbWJlZGluZ1dpbmRvdztcbiAgICBwcml2YXRlIHN1cnZleU9iamVjdHM6IFN1cnZleU9iamVjdHM7XG4gICAgcHJpdmF0ZSB0b29sYm94VmFsdWU6IFF1ZXN0aW9uVG9vbGJveDtcbiAgICBwcml2YXRlIHN1cnZleVZlcmJzOiBTdXJ2ZXlWZXJicztcbiAgICBwcml2YXRlIHVuZG9SZWRvOiBTdXJ2ZXlVbmRvUmVkbztcbiAgICBwcml2YXRlIHN1cnZleVZhbHVlOiBTdXJ2ZXlGb3JEZXNpZ25lcjtcbiAgICBwcml2YXRlIHNhdmVTdXJ2ZXlGdW5jVmFsdWU6IChubzogbnVtYmVyLCBvblNhdmVDYWxsYmFjazogKG5vOiBudW1iZXIsIGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIG9wdGlvbnM6IGFueTtcbiAgICBwcml2YXRlIHN0YXRlVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBkcmFnRHJvcEhlbHBlcjogRHJhZ0Ryb3BIZWxwZXIgPSBudWxsO1xuICAgIHByaXZhdGUgc2hvd0pTT05FZGl0b3JUYWJWYWx1ZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIHNob3dUZXN0U3VydmV5VGFiVmFsdWU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzaG93RW1iZWRlZFN1cnZleVRhYlZhbHVlOiBib29sZWFuO1xuICAgIHByaXZhdGUgc2VsZWN0MjogYW55ID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdXJ2ZXlJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgc3VydmV5UG9zdElkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBnZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjazogKGdlbmVyYXRlVmFsaWRKU09OOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgb25DYW5TaG93UHJvcGVydHk6IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uUXVlc3Rpb25BZGRlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25QYW5lbEFkZGVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbk1vZGlmaWVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIGtvQXV0b1NhdmUgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICBwdWJsaWMgZ2V0IGlzQXV0b1NhdmUoKSB7IHJldHVybiB0aGlzLmtvQXV0b1NhdmUoKTt9XG4gICAgcHVibGljIHNldCBpc0F1dG9TYXZlKG5ld1ZhbCkgeyB0aGlzLmtvQXV0b1NhdmUobmV3VmFsKTsgfVxuICAgIGtvU2hvd1N0YXRlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgcHVibGljIGdldCBzaG93U3RhdGUoKSB7IHJldHVybiB0aGlzLmtvU2hvd1N0YXRlKCk7fVxuICAgIHB1YmxpYyBzZXQgc2hvd1N0YXRlKG5ld1ZhbCkgeyB0aGlzLmtvU2hvd1N0YXRlKG5ld1ZhbCk7IH1cblxuICAgIGtvSXNTaG93RGVzaWduZXI6IGFueTtcbiAgICBrb1ZpZXdUeXBlOiBhbnk7XG4gICAga29DYW5EZWxldGVPYmplY3Q6IGFueTtcbiAgICBrb09iamVjdHM6IGFueTsga29TZWxlY3RlZE9iamVjdDogYW55O1xuICAgIGtvU2hvd1NhdmVCdXR0b246IGFueTtcbiAgICBrb0dlbmVyYXRlVmFsaWRKU09OOiBhbnk7IGtvU2hvd09wdGlvbnM6IGFueTsga29UZXN0U3VydmV5V2lkdGg6IGFueTsga29EZXNpZ25lckhlaWdodDogYW55O1xuICAgIHNlbGVjdERlc2lnbmVyQ2xpY2s6IGFueTsgc2VsZWN0RWRpdG9yQ2xpY2s6IGFueTsgc2VsZWN0VGVzdENsaWNrOiBhbnk7IHNlbGVjdEVtYmVkQ2xpY2s6IGFueTtcbiAgICBnZW5lcmF0ZVZhbGlkSlNPTkNsaWNrOiBhbnk7IGdlbmVyYXRlUmVhZGFibGVKU09OQ2xpY2s6IGFueTtcbiAgICBkb1VuZG9DbGljazogYW55OyBkb1JlZG9DbGljazogYW55O1xuICAgIGRlbGV0ZU9iamVjdENsaWNrOiBhbnk7XG4gICAga29TdGF0ZSA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgcnVuU3VydmV5Q2xpY2s6IGFueTsgZW1iZWRpbmdTdXJ2ZXlDbGljazogYW55O1xuICAgIHNhdmVCdXR0b25DbGljazogYW55O1xuICAgIGRyYWdnaW5nVG9vbGJveEl0ZW06IGFueTsgY2xpY2tUb29sYm94SXRlbTogYW55O1xuICAgIGRyYWdFbmQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCwgb3B0aW9uczogYW55ID0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMua29TaG93T3B0aW9ucyA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OID0ga28ub2JzZXJ2YWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5rb0Rlc2lnbmVySGVpZ2h0ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMua29DYW5EZWxldGVPYmplY3QgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5rb1Nob3dTYXZlQnV0dG9uID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29UZXN0U3VydmV5V2lkdGggPSBrby5vYnNlcnZhYmxlKFwiMTAwJVwiKTtcbiAgICAgICAgdGhpcy5zYXZlQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9TYXZlKCk7IH07XG4gICAgICAgIHRoaXMua29PYmplY3RzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZE9iamVjdCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkT2JqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZWxlY3RlZE9iamVjdENoYW5nZWQobmV3VmFsdWUgIT0gbnVsbCA/IG5ld1ZhbHVlLnZhbHVlIDogbnVsbCk7IH0pO1xuICAgICAgICB0aGlzLmtvR2VuZXJhdGVWYWxpZEpTT04uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMpIHNlbGYub3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAoc2VsZi5nZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjaykgc2VsZi5nZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjayhuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMgPSBuZXcgU3VydmV5T2JqZWN0cyh0aGlzLmtvT2JqZWN0cywgdGhpcy5rb1NlbGVjdGVkT2JqZWN0KTtcbiAgICAgICAgdGhpcy51bmRvUmVkbyA9IG5ldyBTdXJ2ZXlVbmRvUmVkbygpO1xuXG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMgPSBuZXcgU3VydmV5VmVyYnMoZnVuY3Rpb24gKCkgeyBzZWxmLnNldE1vZGlmaWVkKCk7IH0pO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IgPSBuZXcgU3VydmV5T2JqZWN0RWRpdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayA9IGZ1bmN0aW9uIChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm9uQ2FuU2hvd09iamVjdFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgc2VsZi5vblByb3BlcnR5VmFsdWVDaGFuZ2VkKG9wdGlvbnMucHJvcGVydHksIG9wdGlvbnMub2JqZWN0LCBvcHRpb25zLm5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25FZGl0b3JXaW5kb3cgPSBuZXcgU3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93KCk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25FZGl0b3JXaW5kb3cub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayA9IGZ1bmN0aW9uIChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm9uQ2FuU2hvd09iamVjdFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3IgPSBuZXcgU3VydmV5UGFnZXNFZGl0b3IoKCkgPT4geyBzZWxmLmFkZFBhZ2UoKTsgfSwgKHBhZ2U6IFN1cnZleS5QYWdlKSA9PiB7IHNlbGYuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QocGFnZSk7IH0sXG4gICAgICAgICAgICAoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikgPT4geyBzZWxmLm1vdmVQYWdlKGluZGV4RnJvbSwgaW5kZXhUbyk7IH0sIChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4geyBzZWxmLmRlbGV0ZUN1cnJlbnRPYmplY3QoKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcgPSBuZXcgU3VydmV5RW1iZWRpbmdXaW5kb3coKTtcbiAgICAgICAgdGhpcy50b29sYm94VmFsdWUgPSBuZXcgUXVlc3Rpb25Ub29sYm94KHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMucXVlc3Rpb25UeXBlcyA/IHRoaXMub3B0aW9ucy5xdWVzdGlvblR5cGVzIDogbnVsbCk7XG5cbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlID0ga28ub2JzZXJ2YWJsZShcImRlc2lnbmVyXCIpO1xuICAgICAgICB0aGlzLmtvSXNTaG93RGVzaWduZXIgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmtvVmlld1R5cGUoKSA9PSBcImRlc2lnbmVyXCI7IH0pO1xuICAgICAgICB0aGlzLnNlbGVjdERlc2lnbmVyQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0Rlc2lnbmVyKCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0RWRpdG9yQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0pzb25FZGl0b3IoKTsgfTtcbiAgICAgICAgdGhpcy5zZWxlY3RUZXN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd1Rlc3RTdXJ2ZXkoKTsgfTtcbiAgICAgICAgdGhpcy5zZWxlY3RFbWJlZENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dFbWJlZEVkaXRvcigpOyB9O1xuICAgICAgICB0aGlzLmdlbmVyYXRlVmFsaWRKU09OQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29HZW5lcmF0ZVZhbGlkSlNPTih0cnVlKTsgfTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVJlYWRhYmxlSlNPTkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvR2VuZXJhdGVWYWxpZEpTT04oZmFsc2UpOyB9O1xuICAgICAgICB0aGlzLnJ1blN1cnZleUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dMaXZlU3VydmV5KCk7IH07XG4gICAgICAgIHRoaXMuZW1iZWRpbmdTdXJ2ZXlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93U3VydmV5RW1iZWRpbmcoKTsgfTtcbiAgICAgICAgdGhpcy5kZWxldGVPYmplY3RDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH07XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdUb29sYm94SXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBlKSB7IHNlbGYuZG9EcmFnZ2luZ1Rvb2xib3hJdGVtKGl0ZW0uanNvbiwgZSk7IH07XG4gICAgICAgIHRoaXMuY2xpY2tUb29sYm94SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYuZG9DbGlja1Rvb2xib3hJdGVtKGl0ZW0uanNvbik7IH07XG4gICAgICAgIHRoaXMuZHJhZ0VuZCA9IGZ1bmN0aW9uIChpdGVtLCBlKSB7IHNlbGYuZHJhZ0Ryb3BIZWxwZXIuZW5kKCk7IH07XG5cbiAgICAgICAgdGhpcy5kb1VuZG9DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1VuZG9SZWRvKHNlbGYudW5kb1JlZG8udW5kbygpKTsgfTtcbiAgICAgICAgdGhpcy5kb1JlZG9DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1VuZG9SZWRvKHNlbGYudW5kb1JlZG8ucmVkbygpKTsgfTtcblxuICAgICAgICB0aGlzLmpzb25FZGl0b3IgPSBuZXcgU3VydmV5SlNPTkVkaXRvcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50ZXh0ID0gXCJcIjtcblxuICAgICAgICBpZiAocmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcihyZW5kZXJlZEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b29sYmFySXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogJ3N2ZC11bmRvJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRoaXMua29Jc1Nob3dEZXNpZ25lcixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMudW5kb1JlZG8ua29DYW5VbmRvLFxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmRvVW5kb0NsaWNrLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0TG9jU3RyaW5nKCdlZC51bmRvJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9vbGJhckl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdzdmQtcmVkbycsXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLmtvSXNTaG93RGVzaWduZXIsXG4gICAgICAgICAgICBlbmFibGVkOiB0aGlzLnVuZG9SZWRvLmtvQ2FuUmVkbyxcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy5kb1JlZG9DbGljayxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldExvY1N0cmluZygnZWQucmVkbycpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2xiYXJJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiAnc3ZkLW9wdGlvbnMnLFxuICAgICAgICAgICAgdmlzaWJsZToga28uY29tcHV0ZWQoKCkgPT4gdGhpcy5rb0lzU2hvd0Rlc2lnbmVyKCkgJiYgdGhpcy5rb1Nob3dPcHRpb25zKCkpLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0TG9jU3RyaW5nKCdlZC5vcHRpb25zJyksXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3N2ZC10b29sYmFyLW9wdGlvbnMnLFxuICAgICAgICAgICAgaXRlbXM6IGtvLm9ic2VydmFibGVBcnJheShbXG4gICAgICAgICAgICAgICAgeyBpZDogJ3N2ZC12YWxpZC1qc29uJywgdmlzaWJsZTogdHJ1ZSwgY3NzOiBrby5jb21wdXRlZCgoKSA9PiAodGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OKCkgPyAnYWN0aXZlJyA6ICcnKSksIGFjdGlvbjogdGhpcy5nZW5lcmF0ZVZhbGlkSlNPTkNsaWNrLCB0aXRsZTogdGhpcy5nZXRMb2NTdHJpbmcoJ2VkLmdlbmVyYXRlVmFsaWRKU09OJykgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnc3ZkLXJlYWRhYmxlLWpzb24nLCB2aXNpYmxlOiB0cnVlLCBjc3M6IGtvLmNvbXB1dGVkKCgpID0+ICghdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OKCkgPyAnYWN0aXZlJyA6ICcnKSksIGFjdGlvbjogdGhpcy5nZW5lcmF0ZVJlYWRhYmxlSlNPTkNsaWNrLCB0aXRsZTogdGhpcy5nZXRMb2NTdHJpbmcoJ2VkLmdlbmVyYXRlUmVhZGFibGVKU09OJykgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9vbGJhckl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdzdmQtdGVzdCcsXG4gICAgICAgICAgICB2aXNpYmxlOiBrby5jb21wdXRlZCgoKSA9PiB0aGlzLmtvVmlld1R5cGUoKSA9PT0gJ3Rlc3QnKSxcbiAgICAgICAgICAgIHRpdGxlOiBrby5jb21wdXRlZCgoKSA9PiB0aGlzLmdldExvY1N0cmluZygnZWQudGVzdFN1cnZleVdpZHRoJykgKyAnICcgKyB0aGlzLmtvVGVzdFN1cnZleVdpZHRoKCkpLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdzdmQtdG9vbGJhci1vcHRpb25zJyxcbiAgICAgICAgICAgIGl0ZW1zOiBrby5vYnNlcnZhYmxlQXJyYXkoW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdzdmQtMTAwLWpzb24nLCB2aXNpYmxlOiB0cnVlLCBhY3Rpb246ICgpID0+IHRoaXMua29UZXN0U3VydmV5V2lkdGgoJzEwMCUnKSwgdGl0bGU6ICcxMDAlJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdzdmQtMTIwMHB4LWpzb24nLCB2aXNpYmxlOiB0cnVlLCBhY3Rpb246ICgpID0+IHRoaXMua29UZXN0U3VydmV5V2lkdGgoJzEyMDBweCcpLCB0aXRsZTogJzEyMDBweCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnc3ZkLTEwMDBweC1qc29uJywgdmlzaWJsZTogdHJ1ZSwgYWN0aW9uOiAoKSA9PiB0aGlzLmtvVGVzdFN1cnZleVdpZHRoKCcxMDAwcHgnKSwgdGl0bGU6ICcxMDAwcHgnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ3N2ZC04MDBweC1qc29uJywgdmlzaWJsZTogdHJ1ZSwgYWN0aW9uOiAoKSA9PiB0aGlzLmtvVGVzdFN1cnZleVdpZHRoKCc4MDBweCcpLCB0aXRsZTogJzgwMHB4JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdzdmQtNjAwcHgtanNvbicsIHZpc2libGU6IHRydWUsIGFjdGlvbjogKCkgPT4gdGhpcy5rb1Rlc3RTdXJ2ZXlXaWR0aCgnNjAwcHgnKSwgdGl0bGU6ICc2MDBweCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnc3ZkLTQwMHB4LWpzb24nLCB2aXNpYmxlOiB0cnVlLCBhY3Rpb246ICgpID0+IHRoaXMua29UZXN0U3VydmV5V2lkdGgoJzQwMHB4JyksIHRpdGxlOiAnNDAwcHgnIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b29sYmFySXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogJ3N2ZC1zYXZlJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRoaXMua29TaG93U2F2ZUJ1dHRvbixcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy5zYXZlQnV0dG9uQ2xpY2ssXG4gICAgICAgICAgICBpbm5lckNzczogJ3N2ZF9zYXZlX2J0bicsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRMb2NTdHJpbmcoJ2VkLnNhdmVTdXJ2ZXknKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b29sYmFySXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogJ3N2ZC1zdGF0ZScsXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLmtvU2hvd1N0YXRlLFxuICAgICAgICAgICAgY3NzOiAnc3ZkX3N0YXRlJyxcbiAgICAgICAgICAgIGlubmVyQ3NzOiBrby5jb21wdXRlZCgoKSA9PiAnaWNvbi0nICsgdGhpcy5rb1N0YXRlKCkpLFxuICAgICAgICAgICAgdGl0bGU6IGtvLmNvbXB1dGVkKCgpID0+IHRoaXMua29TdGF0ZSgpICYmICh0aGlzLmtvU3RhdGUoKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMua29TdGF0ZSgpLnNsaWNlKDEpKSksXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3N2ZC10b29sYmFyLXN0YXRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldE9wdGlvbnMob3B0aW9uczogYW55KSB7XG4gICAgICAgIGlmKCFvcHRpb25zKSBvcHRpb25zID0geyBnZW5lcmF0ZVZhbGlkSlNPTjogdHJ1ZSB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnNob3dKU09ORWRpdG9yVGFiVmFsdWUgPSB0eXBlb2YgKG9wdGlvbnMuc2hvd0pTT05FZGl0b3JUYWIpICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2hvd0pTT05FZGl0b3JUYWIgOiB0cnVlO1xuICAgICAgICB0aGlzLnNob3dUZXN0U3VydmV5VGFiVmFsdWUgPSB0eXBlb2YgKG9wdGlvbnMuc2hvd1Rlc3RTdXJ2ZXlUYWIpICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2hvd1Rlc3RTdXJ2ZXlUYWIgOiB0cnVlO1xuICAgICAgICB0aGlzLnNob3dFbWJlZGVkU3VydmV5VGFiVmFsdWUgPSB0eXBlb2YgKG9wdGlvbnMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWIpICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWIgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5rb1Nob3dPcHRpb25zKHR5cGVvZiAob3B0aW9ucy5zaG93T3B0aW9ucykgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5zaG93T3B0aW9ucyA6IGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OKHRoaXMub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTik7XG4gICAgICAgIHRoaXMuaXNBdXRvU2F2ZSA9IHR5cGVvZiAob3B0aW9ucy5pc0F1dG9TYXZlKSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmlzQXV0b1NhdmUgOiBmYWxzZTtcbiAgICAgICAgaWYob3B0aW9ucy5kZXNpZ25lckhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5rb0Rlc2lnbmVySGVpZ2h0KG9wdGlvbnMuZGVzaWduZXJIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMub2JqZWN0c0ludGVuZCkge1xuICAgICAgICAgICAgU3VydmV5T2JqZWN0cy5pbnRlbmQgPSBvcHRpb25zLm9iamVjdHNJbnRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0Rlc2lnbmVySGVpZ2h0KClcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IpIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5Rm9yRGVzaWduZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHJlbmRlcihlbGVtZW50OiBhbnkgPSBudWxsLCBvcHRpb25zOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IHRoaXMucmVuZGVyZWRFbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZUVkaXRvckh0bWw7XG4gICAgICAgIHNlbGYuYXBwbHlCaW5kaW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkU3VydmV5KHN1cnZleUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBuZXcgU3VydmV5LmR4U3VydmV5U2VydmljZSgpLmxvYWRTdXJ2ZXkoc3VydmV5SWQsIGZ1bmN0aW9uIChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi50ZXh0ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMua29Jc1Nob3dEZXNpZ25lcigpKSByZXR1cm4gdGhpcy5nZXRTdXJ2ZXlUZXh0RnJvbURlc2lnbmVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmpzb25FZGl0b3IudGV4dDtcbiAgICB9XG4gICAgcHVibGljIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHRleHRXb3JrZXIgPSBuZXcgU3VydmV5VGV4dFdvcmtlcih2YWx1ZSk7XG4gICAgICAgIGlmICh0ZXh0V29ya2VyLmlzSnNvbkNvcnJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGV4dFdvcmtlci5zdXJ2ZXkpKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rlc2lnbmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuZG9SZWRvQ3VycmVudFN0YXRlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRUZXh0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZWRpdG9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdG9vbGJveCgpOiBRdWVzdGlvblRvb2xib3ggeyByZXR1cm4gdGhpcy50b29sYm94VmFsdWU7IH1cbiAgICBwdWJsaWMgdG9vbGJhckl0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5PElUb29sYmFySXRlbT4oKTtcbiAgICBwdWJsaWMgZ2V0IGN1c3RvbVRvb2xib3hRdWVzdGlvbk1heENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLnRvb2xib3guY29waWVkSXRlbU1heENvdW50OyB9XG4gICAgcHVibGljIHNldCBjdXN0b21Ub29sYm94UXVlc3Rpb25NYXhDb3VudCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMudG9vbGJveC5jb3BpZWRJdGVtTWF4Q291bnQgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc3RhdGVWYWx1ZTsgfVxuICAgIHByb3RlY3RlZCBzZXRTdGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmtvU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHNhdmVObzogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgZG9TYXZlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFwic2F2aW5nXCIpO1xuICAgICAgICBpZiAodGhpcy5zYXZlU3VydmV5RnVuYykge1xuICAgICAgICAgICAgdGhpcy5zYXZlTm8rKztcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN1cnZleUZ1bmModGhpcy5zYXZlTm8sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9TYXZlQ2FsbGJhY2sobm86IG51bWJlciwgaXNTdWNjZXNzOiBib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoXCJzYXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2F2ZU5vID09IG5vKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWNjZXNzKSBzZWxmLnNldFN0YXRlKFwic2F2ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgVE9ET1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldE1vZGlmaWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFwibW9kaWZpZWRcIik7XG4gICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoKTtcbiAgICAgICAgdGhpcy5vbk1vZGlmaWVkLmZpcmUodGhpcywgbnVsbCk7XG4gICAgICAgIHRoaXMuaXNBdXRvU2F2ZSAmJiB0aGlzLmRvU2F2ZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldFVuZG9SZWRvQ3VycmVudFN0YXRlKGNsZWFyU3RhdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoY2xlYXJTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51bmRvUmVkby5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxPYmogPSB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKSA/IHRoaXMua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy51bmRvUmVkby5zZXRDdXJyZW50KHRoaXMuc3VydmV5VmFsdWUsIHNlbE9iaiA/IHNlbE9iai5uYW1lIDogbnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2F2ZVN1cnZleUZ1bmMoKSB7IHJldHVybiB0aGlzLnNhdmVTdXJ2ZXlGdW5jVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNhdmVTdXJ2ZXlGdW5jKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zYXZlU3VydmV5RnVuY1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMua29TaG93U2F2ZUJ1dHRvbih2YWx1ZSAhPSBudWxsICYmICF0aGlzLmlzQXV0b1NhdmUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNob3dPcHRpb25zKCkgeyByZXR1cm4gdGhpcy5rb1Nob3dPcHRpb25zKCk7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dPcHRpb25zKHZhbHVlOiBib29sZWFuKSB7IHRoaXMua29TaG93T3B0aW9ucyh2YWx1ZSk7IH1cbiAgICBwdWJsaWMgZ2V0IHNob3dKU09ORWRpdG9yVGFiKCkgeyByZXR1cm4gdGhpcy5zaG93SlNPTkVkaXRvclRhYlZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzaG93SlNPTkVkaXRvclRhYih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLnNob3dKU09ORWRpdG9yVGFiVmFsdWUgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgc2hvd1Rlc3RTdXJ2ZXlUYWIoKSB7IHJldHVybiB0aGlzLnNob3dUZXN0U3VydmV5VGFiVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dUZXN0U3VydmV5VGFiKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuc2hvd1Rlc3RTdXJ2ZXlUYWJWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBzaG93RW1iZWRlZFN1cnZleVRhYigpIHsgcmV0dXJuIHRoaXMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWJWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd0VtYmVkZWRTdXJ2ZXlUYWIodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5zaG93RW1iZWRlZFN1cnZleVRhYlZhbHVlID0gdmFsdWU7IH1cblxuICAgIHByb3RlY3RlZCBvbkNhblNob3dPYmplY3RQcm9wZXJ0eShvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IG9iajogb2JqZWN0LCBwcm9wZXJ0eTogcHJvcGVydHksIGNhblNob3c6IHRydWUgfTtcbiAgICAgICAgdGhpcy5vbkNhblNob3dQcm9wZXJ0eS5maXJlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jYW5TaG93O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VGV4dFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLnRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGFkZFBhZ2UoKSB7XG4gICAgICAgIHZhciBuYW1lID0gU3VydmV5SGVscGVyLmdldE5ld1BhZ2VOYW1lKHRoaXMuc3VydmV5LnBhZ2VzKTtcbiAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXlWYWx1ZS5hZGROZXdQYWdlKG5hbWUpO1xuICAgICAgICB0aGlzLmFkZFBhZ2VUb1VJKHBhZ2UpO1xuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRMb2NTdHJpbmcoc3RyOiBzdHJpbmcpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoc3RyKTsgfVxuICAgIHByaXZhdGUgbW92ZVBhZ2UoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikge1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5wYWdlc1tpbmRleEZyb21dO1xuICAgICAgICB0aGlzLnN1cnZleS5wYWdlcy5zcGxpY2UoaW5kZXhGcm9tLCAxKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucGFnZXMuc3BsaWNlKGluZGV4VG8sIDAsIHBhZ2UpO1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHBhZ2UpXG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRQYWdlVG9VSShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5VmFsdWU7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5hZGRQYWdlKHBhZ2UpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvT25RdWVzdGlvbkFkZGVkKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwYXJlbnRQYW5lbDogYW55KSB7XG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmdldFBhZ2VCeUVsZW1lbnQocXVlc3Rpb24pO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBwYWdlOiBwYWdlIH07XG4gICAgICAgIHRoaXMub25RdWVzdGlvbkFkZGVkLmZpcmUodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5hZGRFbGVtZW50KHF1ZXN0aW9uLCBwYXJlbnRQYW5lbCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvT25FbGVtZW50UmVtb3ZlZChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMucmVtb3ZlT2JqZWN0KHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9PblBhbmVsQWRkZWQocGFuZWw6IFN1cnZleS5QYW5lbCwgcGFyZW50UGFuZWw6IGFueSkge1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5nZXRQYWdlQnlFbGVtZW50KHBhbmVsKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHBhbmVsOiBwYW5lbCwgcGFnZTogcGFnZSB9O1xuICAgICAgICB0aGlzLm9uUGFuZWxBZGRlZC5maXJlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuYWRkRWxlbWVudChwYW5lbCwgcGFyZW50UGFuZWwpO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvYmo6IGFueSwgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICB2YXIgaXNEZWZhdWx0ID0gcHJvcGVydHkuaXNEZWZhdWx0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBvYmpbcHJvcGVydHkubmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lm5hbWUgPT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5uYW1lQ2hhbmdlZChvYmopO1xuICAgICAgICAgICAgaWYgKFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5jaGFuZ2VOYW1lKDxTdXJ2ZXkuUGFnZT5vYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgaWYob2JqID09PSB0aGlzLnN1cnZleSAmJiBwcm9wZXJ0eS5uYW1lID09IFwibG9jYWxlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IuT2JqZWN0Q2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvVW5kb1JlZG8oaXRlbTogVW5kb1JlZG9JdGVtKSB7XG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShpdGVtLnN1cnZleUpTT04pO1xuICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZE9iak5hbWUpIHtcbiAgICAgICAgICAgIHZhciBzZWxPYmogPSB0aGlzLmZpbmRPYmpCeU5hbWUoaXRlbS5zZWxlY3RlZE9iak5hbWUpO1xuICAgICAgICAgICAgaWYgKHNlbE9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3Qoc2VsT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMudW5kb1JlZG8ua29DYW5VbmRvKCkgPyBcIm1vZGlmaWVkXCIgOiBcInNhdmVkXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGZpbmRPYmpCeU5hbWUobmFtZTogc3RyaW5nKTogU3VydmV5LkJhc2Uge1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeU5hbWUobmFtZSk7XG4gICAgICAgIGlmIChwYWdlKSByZXR1cm4gcGFnZTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkJhc2U+dGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUobmFtZSk7XG4gICAgICAgIGlmIChxdWVzdGlvbikgcmV0dXJuIHF1ZXN0aW9uO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjYW5Td2l0Y2hWaWV3VHlwZShuZXdUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG5ld1R5cGUgJiYgdGhpcy5rb1ZpZXdUeXBlKCkgPT0gbmV3VHlwZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5rb1ZpZXdUeXBlKCkgPT0gXCJkZXNpZ25lclwiKSB7XG4gICAgICAgICAgICB0aGlzLmpzb25FZGl0b3IudGV4dCA9IHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtvVmlld1R5cGUoKSAhPSBcImVkaXRvclwiKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmpzb25FZGl0b3IuaXNKc29uQ29ycmVjdCkge1xuICAgICAgICAgICAgYWxlcnQodGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5jb3JyZWN0SlNPTlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0U3VydmV5KG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLmpzb25FZGl0b3Iuc3VydmV5KSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd0Rlc2lnbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU3dpdGNoVmlld1R5cGUoXCJkZXNpZ25lclwiKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJkZXNpZ25lclwiKTtcbiAgICB9XG4gICAgcHVibGljIHNob3dKc29uRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5rb1ZpZXdUeXBlKCkgPT0gXCJlZGl0b3JcIikgcmV0dXJuO1xuICAgICAgICB0aGlzLmpzb25FZGl0b3Iuc2hvdyh0aGlzLmdldFN1cnZleVRleHRGcm9tRGVzaWduZXIoKSk7XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcImVkaXRvclwiKTtcbiAgICB9XG4gICAgcHVibGljIHNob3dUZXN0U3VydmV5KCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU3dpdGNoVmlld1R5cGUobnVsbCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5zaG93TGl2ZVN1cnZleSgpO1xuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJ0ZXN0XCIpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd0VtYmVkRWRpdG9yKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU3dpdGNoVmlld1R5cGUoXCJlbWJlZFwiKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNob3dTdXJ2ZXlFbWJlZGluZygpO1xuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlbWJlZFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTdXJ2ZXlUZXh0RnJvbURlc2lnbmVyKCkge1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnN1cnZleSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMSk7XG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5SlNPTjUoKS5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMSk7XG4gICAgfVxuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RDaGFuZ2VkKG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIGNhbkRlbGV0ZU9iamVjdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLnNlbGVjdGVkT2JqZWN0ID0gb2JqO1xuICAgICAgICB0aGlzLnN1cnZleVZlcmJzLm9iaiA9IG9iajtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopO1xuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlID0gPFN1cnZleS5QYWdlPm9iajtcbiAgICAgICAgICAgIGNhbkRlbGV0ZU9iamVjdCA9IHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aCA+IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5RdWVzdGlvbiB8fCBvYmpUeXBlID09IE9ialR5cGUuUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnNlbGVjdGVkRWxlbWVudCA9IG9iajtcbiAgICAgICAgICAgIGNhbkRlbGV0ZU9iamVjdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHRoaXMuc3VydmV5LnNlbGVjdGVkRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5zZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29DYW5EZWxldGVPYmplY3QoY2FuRGVsZXRlT2JqZWN0KTtcbiAgICAgICAgLy9TZWxlY3QyIHdvcmstYXJvdW5kXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0Mikge1xuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QyLW9iamVjdFNlbGVjdG9yLWNvbnRhaW5lclwiKTsgLy9UT0RPXG4gICAgICAgICAgICBpZihlbCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5zdXJ2ZXlPYmplY3RzLmtvU2VsZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICBpZihpdGVtICYmIGl0ZW0udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5pbm5lclRleHQgPSBpdGVtLnRleHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhcHBseUJpbmRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRWxlbWVudCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGtvLmNsZWFuTm9kZSh0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgdGhpcy5yZW5kZXJlZEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnN1cnZleWpzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5anMpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc3VydmV5anMub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDQ2KSBzZWxmLmRlbGV0ZVF1ZXN0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAzOCB8fCBlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RRdWVzdGlvbihlLmtleUNvZGUgPT0gMzgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXlqc0V4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZVwiKTtcblxuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkobmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7XG4gICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLmluaXQoKTtcbiAgICAgICAgaWYoalF1ZXJ5ICYmIGpRdWVyeSgpW1wic2VsZWN0MlwiXSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QyID0galF1ZXJ5KFwiI29iamVjdFNlbGVjdG9yXCIpW1wic2VsZWN0MlwiXSgpO1xuICAgICAgICAgICAgalF1ZXJ5KFwiI29iamVjdFNlbGVjdG9yXCIpLndpZHRoKFwiMTAwJVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGluaXRTdXJ2ZXkoanNvbjogYW55KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IG5ldyBTdXJ2ZXlGb3JEZXNpZ25lcigpO1xuICAgICAgICB0aGlzLmRyYWdEcm9wSGVscGVyID0gbmV3IERyYWdEcm9wSGVscGVyKDxTdXJ2ZXkuSVN1cnZleT50aGlzLnN1cnZleSwgZnVuY3Rpb24gKCkgeyBzZWxmLnNldE1vZGlmaWVkKCkgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJzZXRKc29uT2JqZWN0XCJdKGpzb24pOyAvL1RPRE9cbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUuaXNFbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcInNldEpzb25PYmplY3RcIl0obmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7IC8vVE9ET1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJkcmFnRHJvcEhlbHBlclwiXSA9IHRoaXMuZHJhZ0Ryb3BIZWxwZXI7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcih0aGlzLnN1cnZleWpzKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnNldFNlbGVjdGVkUGFnZSg8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xuICAgICAgICB0aGlzLnN1cnZleVZlcmJzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHNlbmRlcltcInNlbGVjdGVkRWxlbWVudFwiXSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uRWRpdFF1ZXN0aW9uLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuc2hvd1F1ZXN0aW9uRWRpdG9yKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25Db3B5UXVlc3Rpb24uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5hZGRDdXN0b21Ub29sYm94UXVlc3Rpb24oc2VsZi5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vbkZhc3RDb3B5UXVlc3Rpb24uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5mYXN0Q29weVF1ZXN0aW9uKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25EZWxldGVDdXJyZW50T2JqZWN0LmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZGVsZXRlQ3VycmVudE9iamVjdCgpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblByb2Nlc3NIdG1sLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IG9wdGlvbnMuaHRtbCA9IHNlbGYucHJvY2Vzc0h0bWwob3B0aW9ucy5odG1sKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25DdXJyZW50UGFnZUNoYW5nZWQuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5wYWdlc0VkaXRvci5zZXRTZWxlY3RlZFBhZ2UoPFN1cnZleS5QYWdlPnNlbmRlci5jdXJyZW50UGFnZSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUXVlc3Rpb25BZGRlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLmRvT25RdWVzdGlvbkFkZGVkKG9wdGlvbnMucXVlc3Rpb24sIG9wdGlvbnMucGFyZW50UGFuZWwpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblF1ZXN0aW9uUmVtb3ZlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLmRvT25FbGVtZW50UmVtb3ZlZChvcHRpb25zLnF1ZXN0aW9uKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25QYW5lbEFkZGVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PblBhbmVsQWRkZWQob3B0aW9ucy5wYW5lbCwgb3B0aW9ucy5wYXJlbnRQYW5lbCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUGFuZWxSZW1vdmVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PbkVsZW1lbnRSZW1vdmVkKG9wdGlvbnMucGFuZWwpOyB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWh0bWwpIHJldHVybiBodG1sO1xuICAgICAgICB2YXIgc2NyaXB0UmVnRXggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcbiAgICAgICAgd2hpbGUgKHNjcmlwdFJlZ0V4LnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2Uoc2NyaXB0UmVnRXgsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBwcml2YXRlIGRvRHJhZ2dpbmdUb29sYm94SXRlbShqc29uOiBhbnksIGUpIHtcbiAgICAgICAgdGhpcy5kcmFnRHJvcEhlbHBlci5zdGFydERyYWdUb29sYm94SXRlbShlLCB0aGlzLmdldE5ld05hbWUoanNvbltcInR5cGVcIl0pLCBqc29uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb0NsaWNrVG9vbGJveEl0ZW0oanNvbjogYW55KSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXROZXdOYW1lKGpzb25bXCJ0eXBlXCJdKTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoanNvbltcInR5cGVcIl0pO1xuICAgICAgICBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b09iamVjdChqc29uLCBxdWVzdGlvbik7XG4gICAgICAgIHF1ZXN0aW9uLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRvQ2xpY2tRdWVzdGlvbkNvcmUocXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5ld05hbWUodHlwZTogc3RyaW5nKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0eXBlID09IFwicGFuZWxcIiA/IHRoaXMuZ2V0TmV3UGFuZWxOYW1lKCkgOiB0aGlzLmdldE5ld1F1ZXN0aW9uTmFtZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5ld1F1ZXN0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld1F1ZXN0aW9uTmFtZSh0aGlzLnN1cnZleS5nZXRBbGxRdWVzdGlvbnMoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmV3UGFuZWxOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UGFuZWxOYW1lKHRoaXMuZ2V0QWxsUGFuZWxzKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFsbFBhbmVscygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBhbmVscyh0aGlzLnN1cnZleS5wYWdlc1tpXSwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGFkZFBhbmVscyhwYW5lbDogYW55LCByZXN1bHQ6IEFycmF5PGFueT4pIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBhbmVsLmVsZW1lbnRzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgaWYoIXBhbmVsLmVsZW1lbnRzW2ldLmlzUGFuZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFuZWwuZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgdGhpcy5hZGRQYW5lbHMocGFuZWwuZWxlbWVudHNbaV0sIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkb0NsaWNrUXVlc3Rpb25Db3JlKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2U7XG4gICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkuc2VsZWN0ZWRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0aGlzLnN1cnZleS5zZWxlY3RlZEVsZW1lbnQpICsgMTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlLmFkZFF1ZXN0aW9uKHF1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIuc2Nyb2xsVG9FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHF1ZXN0aW9uLmlkKSk7XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVRdWVzdGlvbigpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1cnJlbnRPYmplY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNlbGVjdFF1ZXN0aW9uKGlzVXA6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0TmV4dFF1ZXN0aW9uKGlzVXApXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZTtcbiAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlF1ZXN0aW9uID8gPFN1cnZleS5RdWVzdGlvbkJhc2U+KG9iaik6IG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgZGVsZXRlQ3VycmVudE9iamVjdCgpIHtcbiAgICAgICAgdGhpcy5kZWxldGVPYmplY3QodGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd1F1ZXN0aW9uRWRpdG9yKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVzdGlvbkVkaXRvcldpbmRvdy5zaG93KHF1ZXN0aW9uLCBmdW5jdGlvbiAocXVlc3Rpb24pIHsgc2VsZi5vblF1ZXN0aW9uRWRpdG9yQ2hhbmdlZChxdWVzdGlvbik7IH0pO1xuICAgIH1cbiAgICBwcml2YXRlIG9uUXVlc3Rpb25FZGl0b3JDaGFuZ2VkKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5uYW1lQ2hhbmdlZChxdWVzdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IuT2JqZWN0Q2hhbmdlZCgpO1xuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkQ3VzdG9tVG9vbGJveFF1ZXN0aW9uKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMudG9vbGJveC5hZGRDb3BpZWRJdGVtKHF1ZXN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFzdENvcHlRdWVzdGlvbihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChxdWVzdGlvbik7XG4gICAgICAgIGpzb24udHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgICAgdGhpcy5kb0NsaWNrVG9vbGJveEl0ZW0oIGpzb24gKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZU9iamVjdChvYmo6IGFueSkge1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMucmVtb3ZlT2JqZWN0KG9iaik7XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5yZW1vdmVQYWdlKG9iaik7XG4gICAgICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnJlbW92ZVBhZ2Uob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLnJlbW92ZUVsZW1lbnQob2JqKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dMaXZlU3VydmV5KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3VydmV5anNFeGFtcGxlKSByZXR1cm47XG4gICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRTdXJ2ZXlKU09OKCk7XG4gICAgICAgIGlmIChqc29uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvb2tpZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUganNvbi5jb29raWVOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuU3VydmV5KGpzb24pO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZVJlc3VsdHNcIik7XG4gICAgICAgICAgICB2YXIgc3VydmV5anNFeGFtcGxlcmVSdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZXJlUnVuXCIpO1xuICAgICAgICAgICAgaWYgKHN1cnZleWpzRXhhbXBsZVJlc3VsdHMpIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChzdXJ2ZXlqc0V4YW1wbGVyZVJ1bikgc3VydmV5anNFeGFtcGxlcmVSdW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgc3VydmV5Lm9uQ29tcGxldGUuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXkpID0+IHsgaWYgKHN1cnZleWpzRXhhbXBsZVJlc3VsdHMpIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMuaW5uZXJIVE1MID0gdGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5zdXJ2ZXlSZXN1bHRzXCIpICsgSlNPTi5zdHJpbmdpZnkoc3VydmV5LmRhdGEpOyBpZiAoc3VydmV5anNFeGFtcGxlcmVSdW4pIHN1cnZleWpzRXhhbXBsZXJlUnVuLnN0eWxlLmRpc3BsYXkgPSBcIlwiOyB9KTtcbiAgICAgICAgICAgIHN1cnZleS5yZW5kZXIodGhpcy5zdXJ2ZXlqc0V4YW1wbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlqc0V4YW1wbGUuaW5uZXJIVE1MID0gdGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5jb3JyZWN0SlNPTlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNob3dTdXJ2ZXlFbWJlZGluZygpIHtcbiAgICAgICAgdmFyIGpzb24gPSB0aGlzLmdldFN1cnZleUpTT04oKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5qc29uID0ganNvbjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zdXJ2ZXlJZCA9IHRoaXMuc3VydmV5SWQ7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuc3VydmV5UG9zdElkID0gdGhpcy5zdXJ2ZXlQb3N0SWQ7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuZ2VuZXJhdGVWYWxpZEpTT04gPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLnNob3coKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTdXJ2ZXlKU09OKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLmtvSXNTaG93RGVzaWduZXIoKSkgcmV0dXJuIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnN1cnZleSk7XG4gICAgICAgIGlmICh0aGlzLmpzb25FZGl0b3IuaXNKc29uQ29ycmVjdCkgcmV0dXJuIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLmpzb25FZGl0b3Iuc3VydmV5KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlQW5ub3RhdGlvbnModGV4dDogc3RyaW5nLCBlcnJvcnM6IGFueVtdKTogQWNlQWpheC5Bbm5vdGF0aW9uW10ge1xuICAgICAgICB2YXIgYW5ub3RhdGlvbnMgPSBuZXcgQXJyYXk8QWNlQWpheC5Bbm5vdGF0aW9uPigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzW2ldO1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb246IEFjZUFqYXguQW5ub3RhdGlvbiA9IHsgcm93OiBlcnJvci5wb3NpdGlvbi5zdGFydC5yb3csIGNvbHVtbjogZXJyb3IucG9zaXRpb24uc3RhcnQuY29sdW1uLCB0ZXh0OiBlcnJvci50ZXh0LCB0eXBlOiBcImVycm9yXCIgfTtcbiAgICAgICAgICAgIGFubm90YXRpb25zLnB1c2goYW5ub3RhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xuICAgIH1cbn1cblxuU3VydmV5LlN1cnZleS5jc3NUeXBlID0gXCJib290c3RyYXBcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yLnRzIiwiaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIlxuXG52YXIgZnJlbmNoVHJhbnNsYXRpb24gPSB7XG4gIC8vU3RyaW5ncyBpbiBFZGl0b3JcbiAgZWQ6IHtcbiAgICBhZGROZXdQYWdlOiAnQWpvdXRlciB1bmUgcGFnZScsXG4gICAgY29ycmVjdEpTT046ICdTVlAgY29ycmlnZXIgbGUganNvbicsXG4gICAgZGVsU2VsT2JqZWN0OiAnU3VwcHJpbWVyIGxcXCdvYmpldCBzw6lsZWN0aW9ubsOpJyxcbiAgICBkZXNpZ25lcjogJ0Rlc2lnbmVyIGRlIHF1ZXN0aW9ubmFpcmUnLFxuICAgIGVtYmVkU3VydmV5OiAnSW50w6lncmVyIGxlIHF1ZXN0aW9ubmFpcmUnLFxuICAgIGdlbmVyYXRlUmVhZGFibGVKU09OOiAnR8OpbsOpcmVyIHVuIEpTT04gbGlzaWJsZScsXG4gICAgZ2VuZXJhdGVWYWxpZEpTT046ICdHw6luw6lyZXIgdW4gSlNPTiB2YWxpZGUnLFxuICAgIGpzb25FZGl0b3I6ICdFZGl0ZXIgSlNPTicsXG4gICAgbmV3UGFnZU5hbWU6ICdwYWdlJyxcbiAgICBuZXdRdWVzdGlvbk5hbWU6ICdxdWVzdGlvbicsXG4gICAgb3B0aW9uczogJ09wdGlvbnMnLFxuICAgIHJlZG86ICdSw6l0YWJsaXInLFxuICAgIHNhdmVTdXJ2ZXk6ICdTYXV2ZWdhcmRlciBsZSBxdWVzdGlvbm5haXJlJyxcbiAgICBzdXJ2ZXlSZXN1bHRzOiAnUsOpc3VsdGF0IGR1IHF1ZXN0aW9ubmFpcmU6ICcsXG4gICAgdGVzdFN1cnZleTogJ1Rlc3RlciBsZSBxdWVzdGlvbm5haXJlJyxcbiAgICB0ZXN0U3VydmV5QWdhaW46ICdUZXN0ZXIgw6Agbm91dmVhdSBsZSBxdWVzdGlvbm5haXJlJyxcbiAgICB0ZXN0U3VydmV5V2lkdGg6ICdMYXJnZXVyIGR1IHF1ZXN0aW9ubmFpcmU6ICcsXG4gICAgdG9vbGJveDogJ0JvaXRlIMOgIG91dGlscycsXG4gICAgdW5kbzogJ0FubnVsZXInXG4gIH0sXG4gIC8vRW1iZWQgd2luZG93XG4gIGV3OiB7XG4gICAgYW5ndWxhcjogJ1V0aWxpc2VyIGxhIHZlcnNpb24gQW5ndWxhcicsXG4gICAgYm9vdHN0cmFwOiAnUG91ciBCb290c3RyYXAgZnJhbWV3b3JrJyxcbiAgICBqcXVlcnk6ICdVdGlsaXNlciBsYSB2ZXJzaW9uIGpRdWVyeScsXG4gICAga25vY2tvdXQ6ICdVdGlsaXNlciBsYSB2ZXJzaW9uIEtub2Nrb3V0JyxcbiAgICBsb2FkRnJvbVNlcnZlcjogJ0NoYXJnZXIgbGUgSlNPTiBkdSBxdWVzdGlvbm5haXJlIGRlcHVpcyB1biBzZXJ2ZXVyJyxcbiAgICByZWFjdDogJ1V0aWxpc2VyIGxhIHZlcnNpb24gUmVhY3QnLFxuICAgIHNob3dJbldpbmRvdzogJ0FmZmljaGVyIGxlIHF1ZXN0aW9ubmFpcmUgZGFucyB1bmUgZmVuw6p0cmUnLFxuICAgIHNob3dPblBhZ2U6ICdBZmZpY2hlciBsZSBxdWVzdGlvbm5haXJlIGRhbnMgdW5lIHBhZ2UnLFxuICAgIHN0YW5kYXJkOiAnUGFzIGRlIGJvb3RzdHJhcCcsXG4gICAgdGl0bGVIdG1sOiAnSFRNTCcsXG4gICAgdGl0bGVKYXZhU2NyaXB0OiAnSmF2YVNjcmlwdCcsXG4gICAgdGl0bGVTY3JpcHQ6ICdTY3JpcHRzIGV0IHN0eWxlcycsXG4gICAgdnVlOiAnVXRpbGlzZXIgbGEgdmVyc2lvbiBWdWUnXG4gIH0sXG4gIC8vT3BlcmF0b3JzXG4gIG9wOiB7XG4gICAgY29udGFpbnM6ICdjb250aWVudCcsXG4gICAgZW1wdHk6ICdlc3QgdmlkZScsXG4gICAgZXF1YWw6ICfDqWdhbCcsXG4gICAgZ3JlYXRlcjogJ3N1cMOpcmlldXInLFxuICAgIGdyZWF0ZXJvcmVxdWFsOiAnc3Vww6lyaWV1ciBvdSDDqWdhbCcsXG4gICAgbGVzczogJ3BsdXMgcGV0aXQnLFxuICAgIGxlc3NvcmVxdWFsOiAncGx1cyBwZXRpdCBvdSDDqWdhbCcsXG4gICAgbm90Y29udGFpbnM6ICduZSBjb250aWVudCBwYXMnLFxuICAgIG5vdGVtcHR5OiAnblxcJ2VzdCBwYXMgdmlkZScsXG4gICAgbm90ZXF1YWw6ICduXFwnZXN0IHBhcyDDqWdhbCdcbiAgfSxcbiAgLy9Qcm9wZXJ0aWVzXG4gIHA6IHtcbiAgICBhZGRSb3dUZXh0OidCb3V0b24gYWpvdXRlciB1bmUgbGlnbmUnLFxuICAgIGNlbGxUeXBlOiAnVHlwZSBkZSBjZWxsdWxlJyxcbiAgICBjaG9pY2VzOiAnQ2hvaXgnLFxuICAgIGNob2ljZXNCeVVybDogJ0Nob2l4IHBhciBBUEknLFxuICAgIGNob2ljZXNPcmRlcjogJ09yZHJlIGRlcyBjaG9peCcsXG4gICAgY2xlYXJJbnZpc2libGVWYWx1ZXM6ICdDYWNoZXIgbGVzIHZhbGV1ciBpbnZpc2libGVzJyxcbiAgICBjb2xDb3VudDogJ05vbWJyZSBkZSBjb2xvbm5lcycsXG4gICAgY29sczogJ05vbWJyZSBkZSBjb2xzJyxcbiAgICBjb2x1bW5Db2xDb3VudDogJ05vbWJyZSBkZSBjb2xvbm5lcycsXG4gICAgY29sdW1uTWluV2lkdGg6ICdMYXJnZXVyIG1pbmltYWxlIGRlcyBjb2xvbm5lcycsXG4gICAgY29sdW1uczogJ0NvbG9ubmVzJyxcbiAgICBjb21tZW50VGV4dDogJ0Rlc2NyaXB0aW9uIGNoYW1wIGNvbW1lbnRhaXJlJyxcbiAgICBjb21wbGV0ZVRleHQ6ICdUZXh0ZSBxdWVzdGlvbm5haXJlIGZpbmFsaXPDqScsXG4gICAgY29tcGxldGVkSHRtbDogJ0h0bWwgcXVlc3Rpb25uYWlyZSBmaW5hbGlzw6knLFxuICAgIGNvb2tpZU5hbWU6ICdOb20gZHUgY29va2llJyxcbiAgICBlZGl0OiAnRWRpdGVyJyxcbiAgICBmb2N1c0ZpcnN0UXVlc3Rpb25BdXRvbWF0aWM6ICdGb2N1cyBzdXIgbGEgcHJlbWnDqHJlIHF1ZXN0aW9uIGF1dG9tYXRpcXVlbWVudCcsXG4gICAgZ29OZXh0UGFnZUF1dG9tYXRpYzogJ0FsbGVyIMOgIGxhIHBhZ2Ugc3VpdmFudGUgYXV0b21hdGlxdWVtZW50JyxcbiAgICBoYXNDb21tZW50OiAnQ2hhbXBzIGNvbW1lbnRhaXJlID8nLFxuICAgIGhhc090aGVyOiAnQ2hvaXggYXV0cmUgPycsXG4gICAgaG9yaXpvbnRhbFNjcm9sbDogJ1Njcm9sbCBob3Jpem9udGFsJyxcbiAgICBpbWFnZUhlaWdodDogJ0hhdXRldXIgZGUgbCBcXCdpbWFnZScsXG4gICAgaW1hZ2VXaWR0aDogJ0xhcmdldXIgZGUgbFxcJ2ltYWdlJyxcbiAgICBpbmRlbnQ6ICdJbmRlbnRhdGlvbicsXG4gICAgaW5wdXRUeXBlOiAnVHlwZSBkZSBjaGFtcHMnLFxuICAgIGlzQWxsUm93UmVxdWlyZWQ6ICdUb3V0ZXMgbGVzIGxpZ25lcyBzb250LWVsbGUgb2JsaWdhdG9pcmVzID8nLFxuICAgIGlzUmVxdWlyZWQ6ICdSZXF1aXMgPycsXG4gICAgaXRlbVNpemU6ICdOb21icmUgbWF4aW11bSBkZSBjYXJhY3TDqHJlcycsXG4gICAgaXRlbXM6ICdJdGVtcycsXG4gICAgbG9jYWxlOiAnTGFuZ3VlJyxcbiAgICBtYXhSYXRlRGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBub3RlIG1heGltdW0nLFxuICAgIG1heFNpemU6ICdUYWlsbGUgbWF4aW11bScsXG4gICAgbWluUmF0ZURlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gbm90ZSBtaW5pbXVtJyxcbiAgICBtaW5Sb3dDb3VudDogJ05vbWJyZSBkZSBsaWduZSBtaW5pbWFsJyxcbiAgICBtb2RlOiAnTW9kZSBkXFwnYWZmaWNoYWdlJyxcbiAgICBuYW1lOiAnTm9tJyxcbiAgICBvcHRpb25zQ2FwdGlvbjogJ1RleHRlIHBhciBkw6lmYXV0JyxcbiAgICBvdGhlckVycm9yVGV4dDogJ1RleHRlIEVycmV1ciBjaGFtcHMgYXV0cmUnLFxuICAgIG90aGVyVGV4dDogeyBuYW1lOiAnVGV4dCBhdXRyZScsIHRpdGxlOiAnQ2hhbXAgY29tbWVudGFpcmUgb3UgY2hvaXggYXV0cmUnIH0sXG4gICAgcGFnZU5leHRUZXh0OiAnQm91dG9uIHBhZ2Ugc3VpdmFudGUnLFxuICAgIHBhZ2VQcmV2VGV4dDogJ0JvdXRvbiBwYWdlIHByw6ljw6lkZW50ZScsXG4gICAgcGFnZV90aXRsZTogeyBuYW1lOiAndGl0cmUnLCB0aXRsZTogJ1RpdHJlIGRlIGxhIHBhZ2UnIH0sXG4gICAgcGxhY2VIb2xkZXI6ICdQbGFjZUhvbGRlciAoaW5kaWNlIGRhbnMgbGUgY2hhbXBzKScsXG4gICAgcXVlc3Rpb25TdGFydEluZGV4OiAnSW5kZXggZGUgbnVtw6lyb3RhdGlvbiBkZXMgcXVlc3Rpb24nLFxuICAgIHF1ZXN0aW9uVGl0bGVMb2NhdGlvbjogJ0VtcGxhY2VtZW50IHRpdHJlIHF1ZXN0aW9uJyxcbiAgICBxdWVzdGlvblRpdGxlVGVtcGxhdGU6IHsgbmFtZTogJ1RlbXBsYXRlIGRcXCdhZmZpY2hhZ2UgZGVzIHF1ZXN0aW9uJywgdGl0bGU6ICdFeGVtcGxlOiB7bm99KSB7dGl0bGV9IHtyZXF1aXJlfTonIH0sXG4gICAgcmF0ZVZhbHVlczogJ0JhcsOobWUnLFxuICAgIHJlbW92ZVJvd1RleHQ6ICdCb3V0b24gc3VwcHJpbWVyIHVuZSBsaWduZScsXG4gICAgcmVxdWlyZWRUZXh0OiAnVGV4dGUgcG91ciBsZXMgY2hhbXBzIHJlcXVpcycsXG4gICAgcm93Q291bnQ6J05vbWJyZSBkZSBsaWduZXMnLFxuICAgIHJvd3M6J05vbWJyZSBkZSBsaWduZScsXG4gICAgc2VuZFJlc3VsdE9uUGFnZU5leHQ6ICcnLFxuICAgIHNob3dDb21wbGV0ZWRQYWdlOiAnVm9pciBsYSBwYWdlIGZvcm11bGFpcmUgY29tcGzDqXTDqSA/JyxcbiAgICBzaG93TmF2aWdhdGlvbkJ1dHRvbnM6ICdCb3V0b25zIGRlIG5hdmlnYXRpb24nLFxuICAgIHNob3dQYWdlTnVtYmVyczogJ051bcOpcm90YXRpb24gZGVzIHBhZ2VzJyxcbiAgICBzaG93UGFnZVRpdGxlczogJ1RpdHJlIGRlcyBwYWdlcycsXG4gICAgc2hvd1ByZXZpZXc6ICdWb2lyIGxhIHByw6l2aXN1YWxpc2F0aW9uJyxcbiAgICBzaG93UHJvZ3Jlc3NCYXI6ICdCYXJyZSBkZSBwcm9ncmVzc2lvbicsXG4gICAgc2hvd1F1ZXN0aW9uTnVtYmVyczogJ051bcOpcm90YXRpb24gZGVzIHF1ZXN0aW9ucycsXG4gICAgc2hvd1RpdGxlOiAnQWZmaWNoZXIgbGUgdGl0cmUnLFxuICAgIHNpemU6ICdOb21icmUgbWF4aW11bSBkZSBjYXJhY3TDqHJlcycsXG4gICAgc3RhcnRXaXRoTmV3TGluZTogJ0NvbW1lbmNlciBhdmVjIHVuZSBub3V2ZWxsZSBsaWduZScsXG4gICAgc3RvcmVEYXRhQXNUZXh0OiAnU3RvY2tlciBsZXMgZG9ubsOpZXMgY29tbWUgZHUgdGV4dCcsXG4gICAgc3RvcmVPdGhlcnNBc0NvbW1lbnQ6ICdTYXV2ZWdhcmRlciBjaG9peCBhdXRyZSBjb21tZSBjb21tZW50YWlyZScsXG4gICAgc3VydmV5SWQ6ICdJZCBkdSBxdWVzdGlvbm5haXJlJyxcbiAgICBzdXJ2ZXlQb3N0SWQ6ICdJZCBQT1NUIHF1ZXN0aW9ubmFpcmUnLFxuICAgIHN1cnZleV90aXRsZTogeyBuYW1lOiAndGl0cmUnLCB0aXRsZTogJ0lsIHNlcmEgYWZmaWNow6kgc3VyIGNoYXF1ZSBwYWdlLicgfSxcbiAgICB0aXRsZTogeyBuYW1lOiAnVGl0cmUnLCB0aXRsZTogJ0xhaXNzZXogdmlkZSwgc2kgbWVtZSB0ZXh0ZSBxdWUgbGUgXCJOb21cIicgfSxcbiAgICB0cmlnZ2VyczogJ0TDqWNsZW5jaGV1cnMnLFxuICAgIHZhbGlkYXRvcnM6ICdWYWxpZGF0ZXVycycsXG4gICAgdmlzaWJsZUlmOiAnVmlzaWJsZSBzaSAnLFxuICAgIHdpZHRoOiAnTGFyZ2V1cidcbiAgfSxcbiAgLy9Qcm9wZXJ0eSBFZGl0b3JzXG4gIHBlOiB7XG4gICAgYWRkTmV3OiAnQWpvdXRlciB1biBub3V2ZWF1JyxcbiAgICBhZGRSb3dUZXh0OiAnVGV4dGUgYm91dG9uIGFqb3V0ZXIgdW5lIGxpZ25lJyxcbiAgICBhcHBseTogJ0FwcGxpcXVlcicsXG4gICAgY2FuY2VsOiAnQW5udWxlcicsXG4gICAgY2VsbFR5cGU6ICdUeXBlIGRlIGNlbGx1bGUnLFxuICAgIGNob2ljZXNPcmRlcjogJ1PDqWxlY3Rpb25uZXIgbFxcJ29yZHJlIGRlcyBjaG9peCcsXG4gICAgY2xvc2U6ICdGZXJtZXInLFxuICAgIGNvbENvdW50OiAnTm9tYnJlIGRlIGNvbG9ubmVzJyxcbiAgICBjb2x1bW5FZGl0OiAnRWRpdGVyIGxhIGNvbG9ubmU6IHswfScsXG4gICAgY3JlYXRldHJpZ2dlcjogJ1ZldWlsbGV6IGNyw6llciB1biBkw6ljbGVuY2hldXInLFxuICAgIGRlbGV0ZTogJ1N1cHByaW1lcicsXG4gICAgZWRpdDogJ0VkaXRlcicsXG4gICAgZWRpdFByb3BlcnR5OiAnRWRpdGVyIGxhIHByb3ByacOpdMOpIFwiezB9XCInLFxuICAgIGVtcHR5OiAnPHZpZGU+JyxcbiAgICBlbnRlck5ld1ZhbHVlOiAnVmV1aWxsZXogc2Fpc2lyIGxhIHZhbGV1ci4nLFxuICAgIGV4cHJlc3Npb25IZWxwOiAnVmV1aWxsZXogZW50cmVyIHVuZSBleHByZXNzaW9uIGJvb2zDqWVubmUuIEVsbGUgZG9pdCByZXRvdXJuZXIgVnJhaSh0cnVlKSBwb3VyIGdhcmRlciBsYSBxdWVzdGlvbi9wYWdlIHZpc2libGUuIFBhciBleGVtcGxlOiB7cXVlc3Rpb24xfSA9IFwidmFsZXVyMVwiIG9yICh7cXVlc3Rpb24yfSA9IDMgYW5kIHtxdWVzdGlvbjN9IDwgNSknLFxuICAgIGZhc3RFbnRyeTogJ0Fqb3V0IHJhcGlkZScsXG4gICAgZm9ybUVudHJ5OiAnQWpvdXQgdmlhIGZvcm11bGFpcmUnLFxuICAgIGhhc090aGVyOiAnSGFzIG90aGVyIGl0ZW0nLFxuICAgIGltYWdlSGVpZ2h0OiAnSGF1dGV1ciBkZSBsXFwnaW1hZ2UnLFxuICAgIGltYWdlV2lkdGg6ICdMYXJnZXVyIGRlIGxcXCdpbWFnZScsXG4gICAgaW5wdXRUeXBlOiAnVHlwZSBkZSBjaGFtcCcsXG4gICAgaXNSZXF1aXJlZDogJ0VzdCByZXF1aXMgPycsXG4gICAgaXRlbXM6ICdbIEVsZW1lbnRzOiB7MH0gXScsXG4gICAgbWF4UmF0ZURlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gbm90ZSBtYXhpbXVtJyxcbiAgICBtYXhTaXplOiAnVGFpbGxlIG1heGltdW0gZHUgZmljaGllciBlbiBvY3RldHMnLFxuICAgIG1pblJhdGVEZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG5vdGUgbWluaW11bScsXG4gICAgbmFtZTogJ05vbScsXG4gICAgbm9xdWVzdGlvbnM6ICdJbCBuXFwneSBhIGF1Y3VuZSBxdWVzdGlvbiBkYW5zIGxlIHF1ZXN0aW9ubmFpcmUuJyxcbiAgICBvazogJ09LJyxcbiAgICBvcHRpb25zQ2FwdGlvbjogJ1RleHRlIHBhciBkw6lmYXV0JyxcbiAgICBwbGFjZUhvbGRlcjogJ1BsYWNlSG9sZGVyIChpbmRpY2UgZGFucyBsZSBjaGFtcHMpJyxcbiAgICBwcm9wZXJ0eUlzRW1wdHk6ICdWZXVpbGxleiBlbnRyZXIgdW5lIHZhbGV1ciBwb3VyIGxhIHByb3ByacOpdMOpJyxcbiAgICBxRWRpdG9yVGl0bGU6ICdFZGl0ZXIgbGEgcXVlc3Rpb246IHswfScsXG4gICAgcmVtb3ZlQWxsOiAnVG91dCBzdXBwcmltZXInLFxuICAgIHJlbW92ZVJvd1RleHQ6ICdUZXh0ZSBib3V0b24gc3VwcHJpbWVyIHVuZSBsaWduZScsXG4gICAgcmVxdWlyZWQ6ICdSZXF1aXMgPycsXG4gICAgcmVzZXQ6ICdSw6lpbml0aWFsaXNlcicsXG4gICAgcm93Q291bnQ6ICdOb21icmUgZGUgbGlnbmVzJyxcbiAgICByb3dzOiAnTm9tYnJlIGRlIGxpZ25lcycsXG4gICAgc2hvd1ByZXZpZXc6ICdMXFwnYXBlcsOndSBkXFwnaW1hZ2UgZXN0LWlsIGFmZmljaMOpID8nLFxuICAgIHN0YXJ0V2l0aE5ld0xpbmU6ICdDb21tZW5jZXIgYXZlYyB1bmUgbm91dmVsbGUgbGlnbmUgPycsXG4gICAgc3RvcmVEYXRhQXNUZXh0OiAnU3RvY2tlciBsZSBjb250ZW51IGR1IGZpY2hpZXIgZGFucyBsZSByw6lzdWx0YXQgSlNPTiBzb3VzIGZvcm1lIGRlIHRleHRlJyxcbiAgICB0YWJzOiB7XG4gICAgICBjaG9pY2VzOiAnQ2hvaXgnLFxuICAgICAgY2hvaWNlc0J5VXJsOiAnQ2hvaXggZGVwdWlzIGFwaSB3ZWInLFxuICAgICAgY29sdW1uczogJ0NvbG9ubmVzJyxcbiAgICAgIGZpbGVPcHRpb25zOiAnT3B0aW9ucycsXG4gICAgICBnZW5lcmFsOiAnR8OpbsOpcmFsJyxcbiAgICAgIGh0bWw6ICdFZGl0ZXVyIEh0bWwnLFxuICAgICAgbWF0cml4Q2hvaWNlczogJ0Nob2l4IHBhciBkZWZhdXQnLFxuICAgICAgbXVsdGlwbGVUZXh0SXRlbXM6ICdUZXh0IElucHV0cycsXG4gICAgICByYXRlVmFsdWVzOiAnQmFyw6htZScsXG4gICAgICByb3dzOiAnTGlnbmVzJyxcbiAgICAgIHZpc2libGVJZjogJ1Zpc2libGUgU2knXG4gICAgfSxcbiAgICB0ZXN0U2VydmljZTogJ1Rlc3RlciBsZSBzZXJ2aWNlJyxcbiAgICB0ZXh0OiAnVGV4dGUnLFxuICAgIHRpdGxlOiAnVGl0cmUnLFxuICAgIHRyaWdnZXJDb21wbGV0ZVRleHQ6ICdDb21wbGV0ZSB0aGUgc3VydmV5IGlmIHN1Y2NlZWQuJyxcbiAgICB0cmlnZ2VySXNWYXJpYWJsZTogJ05lIHBsYWNleiBwYXMgbGEgdmFyaWFibGUgZGFucyBsZSByw6lzdWx0YXQgZHUgcXVlc3Rpb25uYWlyZS4nLFxuICAgIHRyaWdnZXJNYWtlUGFnZXNWaXNpYmxlOiAnUmVuZHJlIGxlcyBwYWdlcyB2aXNpYmxlczonLFxuICAgIHRyaWdnZXJNYWtlUXVlc3Rpb25zVmlzaWJsZTogJ1JlbmRyZSBsZXMgcXVlc3Rpb25zIHZpc2libGVzOicsXG4gICAgdHJpZ2dlck5vdFNldDogJ0xlIGTDqWNsZW5jaGV1ciBuXFwnZXN0IHBhcyBkw6lmaW5pJyxcbiAgICB0cmlnZ2VyT246ICdPbiAnLFxuICAgIHRyaWdnZXJSdW5JZjogJ0V4w6ljdXN0ZXIgc2knLFxuICAgIHRyaWdnZXJTZXRUb05hbWU6ICdDaGFuZ2VyIGxhIHZhbGV1ciBkZTogJyxcbiAgICB0cmlnZ2VyU2V0VmFsdWU6ICfDoDogJyxcbiAgICB2YWx1ZTogJ1ZhbGV1cicsXG4gICAgdmVyYkNoYW5nZVBhZ2U6ICdDaGFuZ2VyIGRlIHBhZ2UgJyxcbiAgICB2ZXJiQ2hhbmdlVHlwZTogJ0NoYW5nZXIgbGUgdHlwZSAnLFxuICAgIHZpc2libGU6ICdFc3QgdmlzaWJsZSA/J1xuICB9LFxuICAvL3F1ZXN0aW9uVHlwZXNcbiAgcXQ6IHtcbiAgICBjaGVja2JveDogJ0Nhc2VzIMOgIGNvY2hlcicsXG4gICAgY29tbWVudDogJ0NvbW1lbnRhaXJlJyxcbiAgICBkcm9wZG93bjogJ0xpc3RlIGTDqXJvdWxhbnRlJyxcbiAgICBmaWxlOiAnRmljaGllcicsXG4gICAgaHRtbDogJ0h0bWwnLFxuICAgIG1hdHJpeDogJ01hdGljZSAoY2hvaXggdW5pcXVlKScsXG4gICAgbWF0cml4ZHJvcGRvd246ICdNYXRyaWNlIChjaG9peCBtdWx0aXBsZXMpJyxcbiAgICBtYXRyaXhkeW5hbWljOiAnTWF0cmljZSAoTGlnbmVzIGR5bmFtaXF1ZXMpJyxcbiAgICBtdWx0aXBsZXRleHQ6ICdjaGFtcCBtdWx0aWxpZ25lcycsXG4gICAgcmFkaW9ncm91cDogJ0JvdXRvbnMgcmFkaW8nLFxuICAgIHJhdGluZzogJ0V2YWx1YXRpb24nLFxuICAgIHRleHQ6ICdDaGFtcCBzaW1wbGUnXG4gIH0sXG4gIHN1cnZleToge1xuICAgIGFkZFRvVG9vbGJveDogJ0Fqb3V0ZXIgw6AgbGEgYm/DrnRlIMOgIG91dGlscycsXG4gICAgY29weTogJ0NvcGllcicsXG4gICAgZGVsZXRlUXVlc3Rpb246ICdTdXBwcmltZXIgbGEgcXVlc3Rpb24nLFxuICAgIGRyb3BRdWVzdGlvbjogJ0TDqXBvc2VyIHZvdHJlIHF1ZXN0aW9uIGljaS4nXG4gIH1cbn07XG5cbmVkaXRvckxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hUcmFuc2xhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwiaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcbmltcG9ydCB7IFN1cnZleUVkaXRvciB9IGZyb20gXCIuL2VkaXRvclwiO1xuXG5jbGFzcyBTZXJ2aWNlQVBJIGV4dGVuZHMgU3VydmV5LmR4U3VydmV5U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcsIHByaXZhdGUgYWNjZXNzS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWN0aXZlU3VydmV5cyhvbkxvYWQ6IChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB0aGlzLmJhc2VVcmwgKyAnL2dldEFjdGl2ZT9hY2Nlc3NLZXk9JyArIHRoaXMuYWNjZXNzS2V5KTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB4aHIucmVzcG9uc2UgPyBKU09OLnBhcnNlKHhoci5yZXNwb25zZSkgOiBudWxsO1xuICAgICAgICAgICAgb25Mb2FkKHhoci5zdGF0dXMgPT0gMjAwLCByZXN1bHQsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVTdXJ2ZXkobmFtZTogc3RyaW5nLCBvbkNyZWF0ZTogKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHRoaXMuYmFzZVVybCArICcvY3JlYXRlP2FjY2Vzc0tleT0nICsgdGhpcy5hY2Nlc3NLZXkgKyBcIiZuYW1lPVwiICsgbmFtZSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0geGhyLnJlc3BvbnNlID8gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpIDogbnVsbFxuICAgICAgICAgICAgb25DcmVhdGUoeGhyLnN0YXR1cyA9PSAyMDAsIHJlc3VsdCwgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgcHVibGljIHNhdmVTdXJ2ZXkoaWQ6IHN0cmluZywganNvbjogc3RyaW5nLCBvblNhdmU/OiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignUE9TVCcsIHRoaXMuYmFzZVVybCArICcvY2hhbmdlSnNvbj9hY2Nlc3NLZXk9JyArIHRoaXMuYWNjZXNzS2V5KTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0geGhyLnJlc3BvbnNlID8gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpIDogbnVsbDtcbiAgICAgICAgICAgICEhb25TYXZlICYmIG9uU2F2ZSh4aHIuc3RhdHVzID09IDIwMCwgcmVzdWx0LCB4aHIucmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeSh7IElkOiBpZCwgSnNvbjoganNvbiwgVGV4dDoganNvbiB9KSk7XG4gICAgfVxuICAgIHB1YmxpYyB1cGRhdGVTdXJ2ZXlOYW1lKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgb25VcGRhdGU/OiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgdGhpcy5iYXNlVXJsICsgJy9jaGFuZ2VOYW1lLycgKyBpZCArICc/YWNjZXNzS2V5PScgKyB0aGlzLmFjY2Vzc0tleSArIFwiJm5hbWU9XCIgKyBuYW1lKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB4aHIucmVzcG9uc2UgPyBKU09OLnBhcnNlKHhoci5yZXNwb25zZSkgOiBudWxsO1xuICAgICAgICAgICAgISFvblVwZGF0ZSAmJiBvblVwZGF0ZSh4aHIuc3RhdHVzID09IDIwMCwgcmVzdWx0LCB4aHIucmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdXJ2ZXlJbmZvIHtcbiAgICBuYW1lOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBpZDogc3RyaW5nO1xuICAgIHBvc3RJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5RGVzY3JpcHRpb24gaW1wbGVtZW50cyBJU3VydmV5SW5mbyB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWUgPSBrby5vYnNlcnZhYmxlKFwiXCIpLCBwdWJsaWMgY3JlYXRlZEF0ID0gbmV3IERhdGUoRGF0ZS5ub3coKSkudG9EYXRlU3RyaW5nKCksIHB1YmxpYyBpZCA9IFwiXCIsIHB1YmxpYyByZXN1bHRJZCA9IFwiXCIsIHB1YmxpYyBwb3N0SWQgPSBcIlwiKSB7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlzTWFuYWdlciB7XG4gICAgc3RhdGljIFN0b3JhZ2VLZXkgPSBcIm15U3VydmV5c1wiO1xuICAgIHByaXZhdGUgYXBpOiBTZXJ2aWNlQVBJO1xuXG4gICAgZ2V0U3VydmV5cygpOiBBcnJheTxTdXJ2ZXlEZXNjcmlwdGlvbj4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oU3VydmV5c01hbmFnZXIuU3RvcmFnZUtleSkgfHwgXCJbXVwiKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN1cnZleURlc2NyaXB0aW9uKGtvLm9ic2VydmFibGU8c3RyaW5nPihpdGVtLm5hbWUpLCBpdGVtLmNyZWF0ZWRBdCwgaXRlbS5pZCwgaXRlbS5yZXN1bHRJZCwgaXRlbS5wb3N0SWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdXJ2ZXlzKHN1cnZleXM6IEFycmF5PElTdXJ2ZXlJbmZvPikge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oU3VydmV5c01hbmFnZXIuU3RvcmFnZUtleSwga28udG9KU09OKHN1cnZleXMpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhc2VVcmw6IHN0cmluZywgcHJpdmF0ZSBhY2Nlc3NLZXk6IHN0cmluZywgcHJpdmF0ZSBlZGl0b3I6IFN1cnZleUVkaXRvcikge1xuICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICBpZihoYXNoLmluZGV4T2YoXCIjXCIpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUlkKGhhc2guc2xpY2UoMSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IFNlcnZpY2VBUEkoYmFzZVVybCArIFwiL2FwaS9NeVN1cnZleXNcIiwgYWNjZXNzS2V5KTtcblxuICAgICAgICBlZGl0b3IuaXNBdXRvU2F2ZSA9IHRydWU7XG4gICAgICAgIGVkaXRvci5zaG93U3RhdGUgPSB0cnVlO1xuICAgICAgICBlZGl0b3Iuc2F2ZVN1cnZleUZ1bmMgPSAoc2F2ZU5vLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgaWYoIWVkaXRvci5zdXJ2ZXlJZCAmJiAhdGhpcy5zdXJ2ZXlJZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoc3VjY2VzcyA9PiBjYWxsYmFjayhzYXZlTm8sIHN1Y2Nlc3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCEhZWRpdG9yLnN1cnZleUlkIHx8ICEhdGhpcy5zdXJ2ZXlJZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuc2F2ZVN1cnZleShlZGl0b3Iuc3VydmV5SWQgfHwgdGhpcy5zdXJ2ZXlJZCgpLCBlZGl0b3IudGV4dCwgc3VjY2VzcyA9PiBjYWxsYmFjayhzYXZlTm8sIHN1Y2Nlc3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN1cnZleXModGhpcy5nZXRTdXJ2ZXlzKCkpO1xuICAgICAgICBpZighdGhpcy5zdXJ2ZXlJZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdXJ2ZXkodGhpcy5zdXJ2ZXlzKClbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHN1cnZleSA9IHRoaXMuc3VydmV5cygpLmZpbHRlcihzID0+IHMuaWQgPT09IHRoaXMuc3VydmV5SWQoKSlbMF07XG4gICAgICAgICAgICBpZighIXN1cnZleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1cnZleShzdXJ2ZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VydmV5SWQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRvci5sb2FkU3VydmV5KHRoaXMuc3VydmV5SWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9uQ3VycmVudFN1cnZleUNoYW5nZWQgPSAoc3VydmV5OiBJU3VydmV5SW5mbykgPT4ge1xuICAgICAgICAgICAgaWYoISFzdXJ2ZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cnZleUlkKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIiNcIiArIHN1cnZleS5pZDtcbiAgICAgICAgICAgICAgICBpZihlZGl0b3Iuc3VydmV5SWQgPT09IHN1cnZleS5pZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGVkaXRvci5sb2FkU3VydmV5KHN1cnZleS5pZCk7XG4gICAgICAgICAgICAgICAgZWRpdG9yLnN1cnZleUlkID0gc3VydmV5LmlkO1xuICAgICAgICAgICAgICAgIGVkaXRvci5zdXJ2ZXlQb3N0SWQgPSBzdXJ2ZXkucG9zdElkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3VydmV5SWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc3VydmV5SWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc3VydmV5UG9zdElkID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3IudGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFN1cnZleS5zdWJzY3JpYmUob25DdXJyZW50U3VydmV5Q2hhbmdlZCk7XG4gICAgICAgIG9uQ3VycmVudFN1cnZleUNoYW5nZWQodGhpcy5jdXJyZW50U3VydmV5KCkpO1xuICAgICAgICBcbiAgICAgICAgdmFyIGN1cnJlbnRTdXJ2ZXlDYW5CZUF0dGFjaGVkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIGtvLmNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgICAgIHZhciBzdXJ2ZXkgPSB0aGlzLmN1cnJlbnRTdXJ2ZXkoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTdXJ2ZXlDYW5CZUF0dGFjaGVkKGZhbHNlKTtcbiAgICAgICAgICAgIGlmKCEhc3VydmV5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlU3VydmV5TmFtZShzdXJ2ZXkuaWQsIHN1cnZleS5uYW1lLnBlZWsoKSwgc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdXJ2ZXlDYW5CZUF0dGFjaGVkKHN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b29sYmFySXRlbSA9IHtcbiAgICAgICAgICAgIGlkOiAnc3ZkLWF0dGFjaC1zdXJ2ZXknLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdhdHRhY2gtc3VydmV5JyxcbiAgICAgICAgICAgIHZpc2libGU6IGN1cnJlbnRTdXJ2ZXlDYW5CZUF0dGFjaGVkLFxuICAgICAgICAgICAgYWN0aW9uOiBrby5jb21wdXRlZCgoKSA9PiAnaHR0cHM6Ly9keHN1cnZleS5jb20vSG9tZS9BdHRhY2hTdXJ2ZXkvJyArICh0aGlzLmN1cnJlbnRTdXJ2ZXkoKSAmJiB0aGlzLmN1cnJlbnRTdXJ2ZXkoKS5pZCkpLFxuICAgICAgICAgICAgY3NzOiAnbGluay10by1hdHRhY2gnLFxuICAgICAgICAgICAgaW5uZXJDc3M6ICdpY29uLWNsb3VkJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQXR0YWNoIHN1cnZleSB0byB5b3VyIFN1cnZleUpTIHNlcnZpY2UgYWNjb3VudC4uLidcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9vbGJhckl0ZW07XG5cbiAgICBpc0VkaXRNb2RlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgZWRpdChtb2RlbCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHN1cnZleSA9IHRoaXMuY3VycmVudFN1cnZleSgpO1xuICAgICAgICBpZighIXN1cnZleSkge1xuICAgICAgICAgICAgaWYodGhpcy5pc0VkaXRNb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBzdXJ2ZXkubmFtZSh0aGlzLmN1cnJlbnRTdXJ2ZXlOYW1lKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3VydmV5cyh0aGlzLnN1cnZleXMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlU3VydmV5TmFtZShzdXJ2ZXkuaWQsIHN1cnZleS5uYW1lKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdXJ2ZXlOYW1lKHN1cnZleS5uYW1lKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cyhcIi5zdmQtbWFuYWdlXCIpLmZpbmQoXCJpbnB1dFwiKS5mb2N1cygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQob25BZGQ/OiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5hcGkuY3JlYXRlU3VydmV5KFwiTmV3U3VydmV5XCIsIChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IGFueSwgcmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG5ld1N1cnZleURlc2NyaXB0aW9uID0gbmV3IFN1cnZleURlc2NyaXB0aW9uKGtvLm9ic2VydmFibGUocmVzdWx0Lk5hbWUpLCByZXN1bHQuQ3JlYXRlZEF0LCByZXN1bHQuSWQsIHJlc3VsdC5SZXN1bHRJZCwgcmVzdWx0LlBvc3RJZClcbiAgICAgICAgICAgIHRoaXMuc3VydmV5cy5wdXNoKG5ld1N1cnZleURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3VydmV5cyh0aGlzLnN1cnZleXMoKSk7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5zdXJ2ZXlJZCA9IHJlc3VsdC5JZDtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnN1cnZleVBvc3RJZCA9IHJlc3VsdC5Qb3N0SWQ7XG4gICAgICAgICAgICB0aGlzLmFwaS5zYXZlU3VydmV5KHJlc3VsdC5JZCwgdGhpcy5lZGl0b3IudGV4dCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdXJ2ZXkobmV3U3VydmV5RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgb25BZGQgJiYgb25BZGQoc3VjY2VzcywgcmVzdWx0LCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYoY29uZmlybShcIkRvIHlvdSByZWFsbHkgd2FudCB0byByZW1vdmUgY3VycmVudCBzdXJ2ZXk/XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleXMucmVtb3ZlKHRoaXMuY3VycmVudFN1cnZleSgpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3VydmV5cyh0aGlzLnN1cnZleXMoKSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdXJ2ZXkodGhpcy5zdXJ2ZXlzKClbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VydmV5SWQgPSBrby5vYnNlcnZhYmxlPHN0cmluZz4oKTtcbiAgICBzdXJ2ZXlzID0ga28ub2JzZXJ2YWJsZUFycmF5PElTdXJ2ZXlJbmZvPigpO1xuICAgIGN1cnJlbnRTdXJ2ZXkgPSBrby5vYnNlcnZhYmxlPElTdXJ2ZXlJbmZvPigpO1xuICAgIGN1cnJlbnRTdXJ2ZXlOYW1lID0ga28ub2JzZXJ2YWJsZTxzdHJpbmc+KFwiXCIpXG5cbiAgICBnZXQgY3NzRWRpdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRWRpdE1vZGUoKSA/ICdpY29uLXNhdmVkJyA6ICdpY29uLWVkaXQnO1xuICAgIH1cbiAgICBnZXQgY3NzQWRkICgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnN1cnZleUlkKCkgPyAnaWNvbi1uZXcnIDogJ2ljb24tZm9yayc7XG4gICAgfVxuICAgIGdldCB0aXRsZUVkaXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0VkaXRNb2RlKCkgPyAnU2F2ZSBzdXJ2ZXkgbmFtZScgOiAnRWRpdCBzdXJ2ZXkgbmFtZSc7XG4gICAgfVxuICAgIGdldCB0aXRsZUFkZCAoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5zdXJ2ZXlJZCgpID8gJ0FkZCBuZXcgc3VydmV5JyA6ICdGb3JrIHRoaXMgc3VydmV5JztcbiAgICB9XG4gICAgbmFtZUVkaXRvcktleXByZXNzID0gKG1vZGVsLCBldmVudCkgPT4ge1xuICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5lZGl0KG1vZGVsLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5pc0VkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFuYWdlLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBrb0FjdGl2ZVZpZXc6IGFueTtcbiAgICBrb0l0ZW1zVGV4dDogYW55O1xuICAgIGNoYW5nZVRvVGV4dFZpZXdDbGljazogYW55O1xuICAgIGNoYW5nZVRvRm9ybVZpZXdDbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29BY3RpdmVWaWV3ID0ga28ub2JzZXJ2YWJsZShcImZvcm1cIik7XG4gICAgICAgIHRoaXMua29JdGVtc1RleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlVmlldy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT0gXCJmb3JtXCIpIHNlbGYudXBkYXRlSXRlbXMoc2VsZi5rb0l0ZW1zVGV4dCgpKTtcbiAgICAgICAgICAgIGVsc2Ugc2VsZi5rb0l0ZW1zVGV4dChzZWxmLmdldEl0ZW1zVGV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hhbmdlVG9UZXh0Vmlld0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvQWN0aXZlVmlldyhcInRleHRcIik7IH07XG4gICAgICAgIHRoaXMuY2hhbmdlVG9Gb3JtVmlld0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvQWN0aXZlVmlldyhcImZvcm1cIik7IH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJpdGVtdmFsdWVzXCI7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtvSXRlbXMoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmtvSXRlbXMoKVtpXTtcbiAgICAgICAgICAgIGl0ZW0ua29IYXNFcnJvcih0aGlzLmlzVmFsdWVFbXB0eShpdGVtLmtvVmFsdWUoKSkpO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IGl0ZW0ua29IYXNFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IHJldHVybiB7IGtvVmFsdWU6IGtvLm9ic2VydmFibGUoKSwga29UZXh0OiBrby5vYnNlcnZhYmxlKCksIGtvSGFzRXJyb3I6IGtvLm9ic2VydmFibGUoZmFsc2UpIH07IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IG5ldyBTdXJ2ZXkuSXRlbVZhbHVlKG51bGwpO1xuICAgICAgICBpZiggaXRlbVZhbHVlW1wic2V0RGF0YVwiXSkge1xuICAgICAgICAgICAgaXRlbVZhbHVlW1wic2V0RGF0YVwiXShpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaXRlbVZhbHVlLnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZihpdGVtLnRleHQpIGl0ZW1WYWx1ZS50ZXh0ID0gaXRlbS50ZXh0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtVmFsdWUudmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmKGl0ZW1WYWx1ZVtcImxvY1RleHRcIl0pIHsgXG4gICAgICAgICAgICBpdGVtVGV4dCA9IGl0ZW1WYWx1ZVtcImxvY1RleHRcIl1bXCJnZXRMb2NhbGVUZXh0XCJdKHRoaXMubG9jYWxlKTsgXG4gICAgICAgIH1cbiAgICAgICAgaWYoIWl0ZW1UZXh0ICYmIGl0ZW1WYWx1ZS5oYXNUZXh0KSB7XG4gICAgICAgICAgICBpdGVtVGV4dCA9IGl0ZW1WYWx1ZS50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGl0ZW06IGl0ZW0sIGtvVmFsdWU6IGtvLm9ic2VydmFibGUoaXRlbVZhbHVlLnZhbHVlKSwga29UZXh0OiBrby5vYnNlcnZhYmxlKGl0ZW1UZXh0KSwga29IYXNFcnJvcjoga28ub2JzZXJ2YWJsZShmYWxzZSkgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycyA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzO1xuICAgICAgICB2YXIgdGV4dCA9IGVkaXRvckl0ZW0ua29UZXh0KCk7XG4gICAgICAgIGlmICghYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzICYmIGVkaXRvckl0ZW0ua29UZXh0KCkgPT0gZWRpdG9ySXRlbS5rb1ZhbHVlKCkpIHtcbiAgICAgICAgICAgIHRleHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBuZXcgU3VydmV5Lkl0ZW1WYWx1ZShudWxsKTtcbiAgICAgICAgLy9UT0RPIHVzZSB2YWx1ZXMgZGlyZWN0bHlcbiAgICAgICAgaWYoZWRpdG9ySXRlbS5pdGVtICYmIGl0ZW1WYWx1ZVtcInNldERhdGFcIl0pIHtcbiAgICAgICAgICAgIGl0ZW1WYWx1ZVtcInNldERhdGFcIl0oZWRpdG9ySXRlbS5pdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtVmFsdWUudmFsdWUgPSBlZGl0b3JJdGVtLmtvVmFsdWUoKTtcbiAgICAgICAgaWYoaXRlbVZhbHVlW1wibG9jVGV4dFwiXSkge1xuICAgICAgICAgICAgaXRlbVZhbHVlW1wibG9jVGV4dFwiXVtcInNldExvY2FsZVRleHRcIl0odGhpcy5sb2NhbGUsIHRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodGV4dCkgaXRlbVZhbHVlLnRleHQgPSB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtVmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICBpZiAodGhpcy5rb0FjdGl2ZVZpZXcoKSAhPSBcImZvcm1cIikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtcyh0aGlzLmtvSXRlbXNUZXh0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uQmVmb3JlQXBwbHkoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZUl0ZW1zKHRleHQ6IHN0cmluZykge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0cyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXh0c1tpXSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlSXRlbSA9IG5ldyBTdXJ2ZXkuSXRlbVZhbHVlKHRleHRzW2ldKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHsgdmFsdWU6IHZhbHVlSXRlbS52YWx1ZSwgdGV4dDogKHZhbHVlSXRlbS5oYXNUZXh0ID8gdmFsdWVJdGVtLnRleHQgOiBcIlwiKSB9O1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0l0ZW1zKHRoaXMuZ2V0SXRlbXNGcm9tVmFsdWUoaXRlbXMpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEl0ZW1zVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgdGV4dCA9IFtdO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFbXB0eShpdGVtLmtvVmFsdWUoKSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIGl0ZW1UZXh0ID0gaXRlbS5rb1ZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoaXRlbS5rb1RleHQoKSkgaXRlbVRleHQgKz0gU3VydmV5Lkl0ZW1WYWx1ZS5TZXBhcmF0b3IgKyBpdGVtLmtvVGV4dCgpO1xuICAgICAgICAgICAgdGV4dC5wdXNoKGl0ZW1UZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dC5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgaXNWYWx1ZUVtcHR5KHZhbDogYW55KSB7XG4gICAgICAgIHJldHVybiAhdmFsO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiaXRlbXZhbHVlc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvcn0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvclwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7U3VydmV5TmVzdGVkUHJvcGVydHlFZGl0b3IsIFN1cnZleU5lc3RlZFByb3BlcnR5RWRpdG9ySXRlbX0gZnJvbSBcIi4vcHJvcGVydHlOZXN0ZWRQcm9wZXJ0eUVkaXRvclwiXG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlEcm9wZG93bkNvbHVtbnNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtYXRyaXhkcm9wZG93bmNvbHVtbnNcIjsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IFxuICAgICAgICB2YXIgbmV3Q29sdW1uID0gbmV3IFN1cnZleS5NYXRyaXhEcm9wZG93bkNvbHVtbihcIlwiLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAvL25ld0NvbHVtbi5jb2xPd25lciA9IFRPRE8gc2V0IGNvbE93bmVyLlxuICAgICAgICByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbShuZXdDb2x1bW4pOyBcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtKGl0ZW0sIHRoaXMub3B0aW9ucyk7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkgeyAgcmV0dXJuIGVkaXRvckl0ZW0uY29sdW1uOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0gZXh0ZW5kcyBTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvckl0ZW0ge1xuICAgIGtvTmFtZTogYW55OyBrb1RpdGxlOiBhbnk7IGtvQ2VsbFR5cGU6IGFueTsgIGtvSXNSZXF1aXJlZDogYW55O1xuICAgIGtvRWRpdG9yTmFtZTogYW55OyBrb0hhc0Vycm9yOiBhbnk7IGtvQ2FuRWRpdDogYW55OyBcbiAgICBwdWJsaWMgb25TaG93Q2hvaWNlc0NsaWNrOiBhbnk7XG4gICAgcHVibGljIGNlbGxUeXBlQ2hvaWNlczogQXJyYXk8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uOiBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4sIHB1YmxpYyBvcHRpb25zID0gbnVsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNlbGxUeXBlQ2hvaWNlcyA9IHRoaXMuZ2V0UHJvcGVydHlDaG9pY2VzKFwiY2VsbFR5cGVcIik7XG4gICAgICAgIHRoaXMua29OYW1lID0ga28ub2JzZXJ2YWJsZShjb2x1bW4ubmFtZSk7XG4gICAgICAgIHRoaXMua29DZWxsVHlwZSA9IGtvLm9ic2VydmFibGUoY29sdW1uLmNlbGxUeXBlKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ub2JzZXJ2YWJsZShjb2x1bW4ubmFtZSA9PT0gY29sdW1uLnRpdGxlID8gXCJcIiA6IGNvbHVtbi50aXRsZSk7XG4gICAgICAgIHRoaXMua29Jc1JlcXVpcmVkID0ga28ub2JzZXJ2YWJsZSh0aGlzLmNvbHVtbi5pc1JlcXVpcmVkKTtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvQ2FuRWRpdCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYua29DZWxsVHlwZSgpICE9IFwiZGVmYXVsdFwiOyB9KTtcbiAgICAgICAgdGhpcy5rb0VkaXRvck5hbWUgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5jb2x1bW5FZGl0XCIpW1wiZm9ybWF0XCJdKHNlbGYua29OYW1lKCkpO30pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU3VydmV5UXVlc3Rpb25FZGl0b3IoKSB7IHJldHVybiBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3IodGhpcy5jb2x1bW4sIG51bGwsIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AXCIgKyB0aGlzLmtvQ2VsbFR5cGUoKSk7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHN1cGVyLmhhc0Vycm9yKCkpIHJldHVybiB0cnVlO1xuICAgICAgICB0aGlzLmtvSGFzRXJyb3IoIXRoaXMua29OYW1lKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5rb0hhc0Vycm9yKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgc3VwZXIuYXBwbHkoKTtcbiAgICAgICAgdGhpcy5jb2x1bW4ubmFtZSA9IHRoaXMua29OYW1lKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLnRpdGxlID0gdGhpcy5rb1RpdGxlKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmNlbGxUeXBlID0gdGhpcy5rb0NlbGxUeXBlKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmlzUmVxdWlyZWQgPSB0aGlzLmtvSXNSZXF1aXJlZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFByb3BlcnR5Q2hvaWNlcyhwcm9wZXR5TmFtZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyhcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0gcHJvcGV0eU5hbWUpIHJldHVybiBwcm9wZXJ0aWVzW2ldLmNob2ljZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwibWF0cml4ZHJvcGRvd25jb2x1bW5zXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5RHJvcGRvd25Db2x1bW5zRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcbiAgICBrb1VybDogYW55OyBrb1BhdGg6IGFueTsga29WYWx1ZU5hbWU6IGFueTsga29UaXRsZU5hbWU6IGFueTsgXG4gICAgcHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleTtcbiAgICBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29VcmwgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29QYXRoID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvVGl0bGVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVN1cnZleSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29Vcmwuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnF1ZXN0aW9uLmNob2ljZXNCeVVybC51cmwgPSBuZXdWYWx1ZTsgc2VsZi5ydW4oKTsgfSk7XG4gICAgICAgIHRoaXMua29QYXRoLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwucGF0aCA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnZhbHVlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1RpdGxlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnRpdGxlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInJlc3RmdWxsXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHJlc3RmdWxsVmFsdWUoKSB7IHJldHVybiA8U3VydmV5LkNob2ljZXNSZXN0ZnVsbD50aGlzLnZhbHVlOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVtcHR5XCIpO1xuICAgICAgICB2YXIgc3RyID0gdmFsdWUudXJsO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5yZXN0ZnVsbFZhbHVlO1xuICAgICAgICB0aGlzLmtvVXJsKHZhbCA/IHZhbC51cmwgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1BhdGgodmFsID8gdmFsLnBhdGggOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZSh2YWwgPyB2YWwudmFsdWVOYW1lIDogXCJcIik7XG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUodmFsID8gdmFsLnRpdGxlTmFtZSA6IFwiXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdmFyIHZhbCA9IG5ldyBTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsKCk7XG4gICAgICAgIHZhbC51cmwgPSB0aGlzLmtvVXJsKCk7XG4gICAgICAgIHZhbC5wYXRoID0gdGhpcy5rb1BhdGgoKTtcbiAgICAgICAgdmFsLnZhbHVlTmFtZSA9IHRoaXMua29WYWx1ZU5hbWUoKTtcbiAgICAgICAgdmFsLnRpdGxlTmFtZSA9IHRoaXMua29UaXRsZU5hbWUoKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodmFsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBydW4oKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnJ1bigpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVN1cnZleSgpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSBuZXcgU3VydmV5LlN1cnZleSgpO1xuICAgICAgICB0aGlzLnN1cnZleS5zaG93TmF2aWdhdGlvbkJ1dHRvbnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkuc2hvd1F1ZXN0aW9uTnVtYmVycyA9IFwib2ZmXCI7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuYWRkTmV3UGFnZShcInBhZ2UxXCIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duPnBhZ2UuYWRkTmV3UXVlc3Rpb24oXCJkcm9wZG93blwiLCBcInExXCIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLnRpdGxlID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRlc3RTZXJ2aWNlXCIpXG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlcyA9IFtdO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwicmVzdGZ1bGxcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlSZXN1bHRmdWxsRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvci50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yfSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleU5lc3RlZFByb3BlcnR5RWRpdG9yLCBTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvckl0ZW19IGZyb20gXCIuL3Byb3BlcnR5TmVzdGVkUHJvcGVydHlFZGl0b3JcIlxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0aXRlbXNcIjsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IFxuICAgICAgICB2YXIgbmV3SXRlbSA9IG5ldyBTdXJ2ZXkuTXVsdGlwbGVUZXh0SXRlbSh0aGlzLmdldE5ld05hbWUoKSk7XG4gICAgICAgIC8vbmV3Q29sdW1uLmNvbE93bmVyID0gVE9ETyBzZXQgY29sT3duZXIuXG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNJdGVtKG5ld0l0ZW0pOyBcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNJdGVtKGl0ZW0pOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHsgIHJldHVybiBlZGl0b3JJdGVtLml0ZW07IH1cblxuICAgIHByaXZhdGUgZ2V0TmV3TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2Jqcy5wdXNoKHsgbmFtZTogaXRlbXNbaV0ua29OYW1lKCkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXROZXdOYW1lKG9ianMsIFwidGV4dFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0l0ZW0gZXh0ZW5kcyBTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvckl0ZW0ge1xuICAgIGtvTmFtZTogYW55OyBrb1RpdGxlOiBhbnk7ICBrb0lzUmVxdWlyZWQ6IGFueTtcbiAgICBrb0VkaXRvck5hbWU6IGFueTsga29IYXNFcnJvcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtOiBTdXJ2ZXkuTXVsdGlwbGVUZXh0SXRlbSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvTmFtZSA9IGtvLm9ic2VydmFibGUoaXRlbS5uYW1lKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ub2JzZXJ2YWJsZShpdGVtLm5hbWUgPT09IGl0ZW0udGl0bGUgPyBcIlwiIDogaXRlbS50aXRsZSk7XG4gICAgICAgIHRoaXMua29Jc1JlcXVpcmVkID0ga28ub2JzZXJ2YWJsZSh0aGlzLml0ZW0uaXNSZXF1aXJlZCk7XG4gICAgICAgIHRoaXMua29IYXNFcnJvciA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb0VkaXRvck5hbWUgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5pdGVtRWRpdFwiKVtcImZvcm1hdFwiXShzZWxmLmtvTmFtZSgpKTt9KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1cnZleVF1ZXN0aW9uRWRpdG9yKCkgeyByZXR1cm4gbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yKHRoaXMuaXRlbSwgbnVsbCwgXCJtdWx0aXBsZXRleHRpdGVtXCIpOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZihzdXBlci5oYXNFcnJvcigpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yKCF0aGlzLmtvTmFtZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMua29IYXNFcnJvcigpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHN1cGVyLmFwcGx5KCk7XG4gICAgICAgIHRoaXMuaXRlbS5uYW1lID0gdGhpcy5rb05hbWUoKTtcbiAgICAgICAgdGhpcy5pdGVtLnRpdGxlID0gdGhpcy5rb1RpdGxlKCk7XG4gICAgICAgIHRoaXMuaXRlbS5pc1JlcXVpcmVkID0gdGhpcy5rb0lzUmVxdWlyZWQoKTtcbiAgICB9XG59XG5cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidGV4dGl0ZW1zXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VGV4dEl0ZW1zRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAga29RdWVzdGlvbnM6IGFueTsga29QYWdlczogYW55O1xuICAgIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIGF2YWlsYWJsZVRyaWdnZXJzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSB0cmlnZ2VyQ2xhc3NlczogQXJyYXk8U3VydmV5Lkpzb25NZXRhZGF0YUNsYXNzPiA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShzZWxmLmtvU2VsZWN0ZWQoKSk7IH07XG4gICAgICAgIHRoaXMub25BZGRDbGljayA9IGZ1bmN0aW9uICh0cmlnZ2VyVHlwZSkgeyBzZWxmLmFkZEl0ZW0odHJpZ2dlclR5cGUpOyB9O1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgICAgICB0aGlzLmtvUGFnZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLnRyaWdnZXJDbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic3VydmV5dHJpZ2dlclwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVUcmlnZ2VycyA9IHRoaXMuZ2V0QXZhaWxhYmxlVHJpZ2dlcnMoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInRyaWdnZXJzXCI7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKHRoaXMuZ2V0TmFtZXMoKDxTdXJ2ZXkuU3VydmV5PnRoaXMub2JqZWN0KS5wYWdlcykpO1xuICAgICAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyh0aGlzLmdldE5hbWVzKCg8U3VydmV5LlN1cnZleT50aGlzLm9iamVjdCkuZ2V0QWxsUXVlc3Rpb25zKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5vblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodGhpcy5rb0l0ZW1zKCkubGVuZ3RoID4gMCA/IHRoaXMua29JdGVtcygpWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEl0ZW0odHJpZ2dlclR5cGU6IHN0cmluZykge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHRyaWdnZXJUeXBlKTtcbiAgICAgICAgdmFyIHRyaWdnZXJJdGVtID0gdGhpcy5jcmVhdGVQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcik7XG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKHRyaWdnZXJJdGVtKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRyaWdnZXJJdGVtKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoaXRlbS5nZXRUeXBlKCkpO1xuICAgICAgICBqc29uT2JqLnRvT2JqZWN0KGl0ZW0sIHRyaWdnZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVQcm9wZXJ0eVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyPnRyaWdnZXIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgZWRpdG9yVHJpZ2dlciA9IDxTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXI+ZWRpdG9ySXRlbTtcbiAgICAgICAgcmV0dXJuIGVkaXRvclRyaWdnZXIuY3JlYXRlVHJpZ2dlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEF2YWlsYWJsZVRyaWdnZXJzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmlnZ2VyQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy50cmlnZ2VyQ2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5hbWVzKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciBuYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgbmFtZXMucHVzaChpdGVtW1wibmFtZVwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWVzO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVByb3BlcnR5VHJpZ2dlcih0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlcik6IFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VySXRlbSA9IG51bGw7XG4gICAgICAgIGlmICh0cmlnZ2VyLmdldFR5cGUoKSA9PSBcInZpc2libGV0cmlnZ2VyXCIpIHtcbiAgICAgICAgICAgIHRyaWdnZXJJdGVtID0gbmV3IFN1cnZleVByb3BlcnR5VmlzaWJsZVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZT50cmlnZ2VyLCB0aGlzLmtvUGFnZXMsIHRoaXMua29RdWVzdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyLmdldFR5cGUoKSA9PSBcInNldHZhbHVldHJpZ2dlclwiKSB7XG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVNldFZhbHVlVHJpZ2dlcig8U3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZT50cmlnZ2VyLCB0aGlzLmtvUXVlc3Rpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRyaWdnZXJJdGVtKSB7XG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyaWdnZXJJdGVtO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgIHByaXZhdGUgb3BlcmF0b3JzID0gW1wiZW1wdHlcIiwgXCJub3RlbXB0eVwiLCBcImVxdWFsXCIsIFwibm90ZXF1YWxcIiwgXCJjb250YWluc1wiLCBcIm5vdGNvbnRhaW5zXCIsIFwiZ3JlYXRlclwiLCBcImxlc3NcIiwgXCJncmVhdGVyb3JlcXVhbFwiLCBcImxlc3NvcmVxdWFsXCJdO1xuICAgIHByaXZhdGUgdHJpZ2dlclR5cGU6IHN0cmluZztcbiAgICBhdmFpbGFibGVPcGVyYXRvcnMgPSBbXTtcbiAgICBrb05hbWU6IGFueTsga29PcGVyYXRvcjogYW55OyBrb1ZhbHVlOiBhbnk7IGtvVHlwZTogYW55O1xuICAgIGtvVGV4dDogYW55OyBrb0lzVmFsaWQ6IGFueTsga29SZXF1aXJlVmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlcikge1xuICAgICAgICB0aGlzLmNyZWF0ZU9wZXJhdG9ycygpO1xuICAgICAgICB0aGlzLnRyaWdnZXJUeXBlID0gdHJpZ2dlci5nZXRUeXBlKCk7XG4gICAgICAgIHRoaXMua29UeXBlID0ga28ub2JzZXJ2YWJsZSh0aGlzLnRyaWdnZXJUeXBlKTtcbiAgICAgICAgdGhpcy5rb05hbWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIubmFtZSk7XG4gICAgICAgIHRoaXMua29PcGVyYXRvciA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5vcGVyYXRvcik7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci52YWx1ZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1JlcXVpcmVWYWx1ZSA9IGtvLmNvbXB1dGVkKCgpID0+IHsgcmV0dXJuIHNlbGYua29PcGVyYXRvcigpICE9IFwiZW1wdHlcIiAmJiBzZWxmLmtvT3BlcmF0b3IoKSAhPSBcIm5vdGVtcHR5XCI7IH0pO1xuICAgICAgICB0aGlzLmtvSXNWYWxpZCA9IGtvLmNvbXB1dGVkKCgpID0+IHsgaWYgKHNlbGYua29OYW1lKCkgJiYgKCFzZWxmLmtvUmVxdWlyZVZhbHVlKCkgfHwgc2VsZi5rb1ZhbHVlKCkpKSByZXR1cm4gdHJ1ZTsgcmV0dXJuIGZhbHNlOyB9KTtcbiAgICAgICAgdGhpcy5rb1RleHQgPSBrby5jb21wdXRlZCgoKSA9PiB7IHNlbGYua29OYW1lKCk7IHNlbGYua29PcGVyYXRvcigpOyBzZWxmLmtvVmFsdWUoKTsgcmV0dXJuIHNlbGYuZ2V0VGV4dCgpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVRyaWdnZXIoKTogU3VydmV5LlN1cnZleVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlcj5TdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh0aGlzLnRyaWdnZXJUeXBlKTtcbiAgICAgICAgdHJpZ2dlci5uYW1lID0gdGhpcy5rb05hbWUoKTtcbiAgICAgICAgdHJpZ2dlci5vcGVyYXRvciA9IHRoaXMua29PcGVyYXRvcigpO1xuICAgICAgICB0cmlnZ2VyLnZhbHVlID0gdGhpcy5rb1ZhbHVlKCk7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZU9wZXJhdG9ycygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZXJhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLm9wZXJhdG9yc1tpXTtcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzLnB1c2goeyBuYW1lOiBuYW1lLCB0ZXh0OiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3AuXCIgKyBuYW1lKSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvSXNWYWxpZCgpKSByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJOb3RTZXRcIik7XG4gICAgICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlclJ1bklmXCIpICsgXCIgJ1wiICsgdGhpcy5rb05hbWUoKSArIFwiJyBcIiArIHRoaXMuZ2V0T3BlcmF0b3JUZXh0KCkgKyB0aGlzLmdldFZhbHVlVGV4dCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE9wZXJhdG9yVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb3AgPSB0aGlzLmtvT3BlcmF0b3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF2YWlsYWJsZU9wZXJhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzW2ldLm5hbWUgPT0gb3ApIHJldHVybiB0aGlzLmF2YWlsYWJsZU9wZXJhdG9yc1tpXS50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZVRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvUmVxdWlyZVZhbHVlKCkpIHJldHVybiBcIlwiO1xuICAgICAgICByZXR1cm4gXCIgXCIgKyB0aGlzLmtvVmFsdWUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVZpc2libGVUcmlnZ2VyIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICBwdWJsaWMgcGFnZXM6IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHM7XG4gICAgcHVibGljIHF1ZXN0aW9uczogU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXJWaXNpYmxlLCBrb1BhZ2VzOiBhbnksIGtvUXVlc3Rpb25zOiBhbnkpIHtcbiAgICAgICAgc3VwZXIodHJpZ2dlcik7XG4gICAgICAgIHRoaXMucGFnZXMgPSBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cyhlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlck1ha2VQYWdlc1Zpc2libGVcIiksIGtvUGFnZXMoKSwgdHJpZ2dlci5wYWdlcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHMoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJNYWtlUXVlc3Rpb25zVmlzaWJsZVwiKSwga29RdWVzdGlvbnMoKSwgdHJpZ2dlci5xdWVzdGlvbnMpO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZT5zdXBlci5jcmVhdGVUcmlnZ2VyKCk7XG4gICAgICAgIHRyaWdnZXIucGFnZXMgPSB0aGlzLnBhZ2VzLmtvQ2hvb3NlbigpO1xuICAgICAgICB0cmlnZ2VyLnF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zLmtvQ2hvb3NlbigpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVNldFZhbHVlVHJpZ2dlciBleHRlbmRzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAga29RdWVzdGlvbnM6IGFueTsga29zZXRUb05hbWU6IGFueTsga29zZXRWYWx1ZTogYW55OyBrb2lzVmFyaWFibGU6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZSwga29RdWVzdGlvbnM6IGFueSkge1xuICAgICAgICBzdXBlcih0cmlnZ2VyKTtcbiAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyA9IGtvUXVlc3Rpb25zO1xuICAgICAgICB0aGlzLmtvc2V0VG9OYW1lID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLnNldFRvTmFtZSk7XG4gICAgICAgIHRoaXMua29zZXRWYWx1ZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5zZXRWYWx1ZSk7XG4gICAgICAgIHRoaXMua29pc1ZhcmlhYmxlID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLmlzVmFyaWFibGUpO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWU+c3VwZXIuY3JlYXRlVHJpZ2dlcigpO1xuICAgICAgICB0cmlnZ2VyLnNldFRvTmFtZSA9IHRoaXMua29zZXRUb05hbWUoKTtcbiAgICAgICAgdHJpZ2dlci5zZXRWYWx1ZSA9IHRoaXMua29zZXRWYWx1ZSgpO1xuICAgICAgICB0cmlnZ2VyLmlzVmFyaWFibGUgPSB0aGlzLmtvaXNWYXJpYWJsZSgpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cyB7XG4gICAga29PYmplY3RzOiBhbnk7XG4gICAga29DaG9vc2VuOiBhbnk7XG4gICAga29TZWxlY3RlZDogYW55O1xuICAgIGtvQ2hvb3NlblNlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIG9uRGVsZXRlQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25BZGRDbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBhbGxPYmplY3RzOiBBcnJheTxzdHJpbmc+LCBjaG9vc2VuT2JqZWN0czogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLmtvQ2hvb3NlbiA9IGtvLm9ic2VydmFibGVBcnJheShjaG9vc2VuT2JqZWN0cyk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYWxsT2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGlmIChjaG9vc2VuT2JqZWN0cy5pbmRleE9mKGl0ZW0pIDwgMCkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb09iamVjdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoYXJyYXkpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29DaG9vc2VuU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRlbGV0ZUl0ZW0oKTsgfTtcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmFkZEl0ZW0oKTsgfVxuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZUl0ZW0oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSXRlbXModGhpcy5rb0Nob29zZW5TZWxlY3RlZCgpLCB0aGlzLmtvQ2hvb3NlbiwgdGhpcy5rb09iamVjdHMpO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSXRlbXModGhpcy5rb1NlbGVjdGVkKCksIHRoaXMua29PYmplY3RzLCB0aGlzLmtvQ2hvb3Nlbik7XG4gICAgfVxuICAgIHByaXZhdGUgY2hhbmdlSXRlbXMoaXRlbTogc3RyaW5nLCByZW1vdmVkRnJvbTogYW55LCBhZGRUbzogYW55KSB7XG4gICAgICAgIHJlbW92ZWRGcm9tLnJlbW92ZShpdGVtKTtcbiAgICAgICAgYWRkVG8ucHVzaChpdGVtKTtcbiAgICAgICAgcmVtb3ZlZEZyb20uc29ydCgpO1xuICAgICAgICBhZGRUby5zb3J0KCk7XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0cmlnZ2Vyc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge1N1cnZleU9iamVjdEVkaXRvcn0gZnJvbSBcIi4uL29iamVjdEVkaXRvclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VmFsaWRhdG9yc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RFZGl0b3I6IFN1cnZleU9iamVjdEVkaXRvcjtcbiAgICBwdWJsaWMga29TZWxlY3RlZDogYW55O1xuICAgIHB1YmxpYyBhdmFpbGFibGVWYWxpZGF0b3JzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JDbGFzc2VzOiBBcnJheTxTdXJ2ZXkuSnNvbk1ldGFkYXRhQ2xhc3M+ID0gW107XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvciA9IG5ldyBTdXJ2ZXlPYmplY3RFZGl0b3IoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvci5vblByb3BlcnR5VmFsdWVDaGFuZ2VkLmFkZCgoc2VuZGVyLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBzZWxmLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQob3B0aW9ucy5wcm9wZXJ0eSwgb3B0aW9ucy5vYmplY3QsIG9wdGlvbnMubmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZWxlY3RlZE9iamVjdEVkaXRvci5zZWxlY3RlZE9iamVjdCA9IG5ld1ZhbHVlICE9IG51bGwgPyBuZXdWYWx1ZS52YWxpZGF0b3IgOiBudWxsOyB9KTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JDbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic3VydmV5dmFsaWRhdG9yXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZVZhbGlkYXRvcnMgPSB0aGlzLmdldEF2YWlsYWJsZVZhbGlkYXRvcnMoKTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvSXRlbXMucmVtb3ZlKHNlbGYua29TZWxlY3RlZCgpKTsgfTtcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKHZhbGlkYXRvclR5cGUpIHsgc2VsZi5hZGRJdGVtKHZhbGlkYXRvclR5cGUpOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidmFsaWRhdG9yc1wiOyB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBzdXBlci5vblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodGhpcy5rb0l0ZW1zKCkubGVuZ3RoID4gMCA/IHRoaXMua29JdGVtcygpWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciB2YWxpZGF0b3IgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhpdGVtLmdldFR5cGUoKSk7XG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoaXRlbSwgdmFsaWRhdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0odmFsaWRhdG9yKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSA8U3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtPmVkaXRvckl0ZW07XG4gICAgICAgIHJldHVybiBpdGVtLnZhbGlkYXRvcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRJdGVtKHZhbGlkYXRvclR5cGU6IHN0cmluZykge1xuICAgICAgICB2YXIgbmV3VmFsaWRhdG9yID0gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbShTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh2YWxpZGF0b3JUeXBlKSk7XG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKG5ld1ZhbGlkYXRvcik7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChuZXdWYWxpZGF0b3IpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEF2YWlsYWJsZVZhbGlkYXRvcnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbGlkYXRvckNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsaWRhdG9yQ2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9iajogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmtvU2VsZWN0ZWQoKSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCgpLnZhbGlkYXRvcltwcm9wZXJ0eS5uYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbSB7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsaWRhdG9yOiBTdXJ2ZXkuU3VydmV5VmFsaWRhdG9yKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHZhbGlkYXRvci5nZXRUeXBlKCk7XG4gICAgfVxufVxuXG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInZhbGlkYXRvcnNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yLnRzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJib290c3RyYXBcIixcImNvbW1vbmpzMlwiOlwiYm9vdHN0cmFwXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwXCIsXCJhbWRcIjpcImJvb3RzdHJhcFwifVxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInN2ZF9jb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1kZWZhdWx0IGNvbnRhaW5lci1mbHVpZCBuYXYgbmF2LXRhYnMgc3ZkX21lbnVcXFwiPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwiY3NzOiB7YWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gJ2Rlc2lnbmVyJ31cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0RGVzaWduZXJDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5kZXNpZ25lcicpXFxcIj48L2E+PC9saT5cXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNob3dKU09ORWRpdG9yVGFiLCBjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSAnZWRpdG9yJ31cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0RWRpdG9yQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuanNvbkVkaXRvcicpXFxcIj48L2E+PC9saT5cXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNob3dUZXN0U3VydmV5VGFiLCBjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSAndGVzdCd9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdFRlc3RDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC50ZXN0U3VydmV5JylcXFwiPjwvYT48L2xpPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwidmlzaWJsZTogc2hvd0VtYmVkZWRTdXJ2ZXlUYWIsIGNzczoge2FjdGl2ZToga29WaWV3VHlwZSgpID09ICdlbWJlZCd9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdEVtYmVkQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuZW1iZWRTdXJ2ZXknKVxcXCI+PC9hPjwvbGk+XFxuXFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHRvb2xiYXJJdGVtcyAtLT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwic3ZkX2FjdGlvbnNcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiAkZGF0YS5jc3MsIHZpc2libGU6IHZpc2libGUsIGF0dHI6IHsgaWQ6IGlkIH1cXFwiPlxcbiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJGRhdGEudGVtcGxhdGUgfHwgJ3N2ZC10b29sYmFyLWJ1dHRvbicsIGRhdGE6ICRkYXRhLmRhdGEgfHwgJGRhdGEgfSAtLT5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC91bD5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgc3ZkX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHN2ZF9zdXJ2ZXlfZGVzaWduZXJcXFwiICBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAnZGVzaWduZXInXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtc20tMSBjb2wteHMtMSBwYW5lbCBwYW5lbC1kZWZhdWx0IHN2ZF90b29sYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwLXZlcnRpY2FsXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtwYWRkaW5nLXJpZ2h0OjJweFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHRvb2xib3gua29JdGVtcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgc3R5bGU9XFxcInRleHQtYWxpZ246bGVmdDsgbWFyZ2luOjFweDttaW4taGVpZ2h0OjM3cHg7IHdpZHRoOjEwMCVcXFwiIGRyYWdnYWJsZT1cXFwidHJ1ZVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHJvb3QuY2xpY2tUb29sYm94SXRlbSwgZXZlbnQ6e2RyYWdzdGFydDogZnVuY3Rpb24oZWwsIGUpIHsgJHJvb3QuZHJhZ2dpbmdUb29sYm94SXRlbSgkZGF0YSwgZSk7IHJldHVybiB0cnVlO30sIGRyYWdlbmQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRyb290LmRyYWdFbmQoKTsgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwiY3NzOiBpY29uTmFtZSwgYXR0cjoge3RpdGxlOiB0aXRsZX1cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3ZkX3Rvb2xib3hfaXRlbV90ZXh0IGhpZGRlbi1zbSBoaWRkZW4teHNcXFwiIGRhdGEtYmluZD1cXFwidGV4dDp0aXRsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy03IGNvbC1tZC03IGNvbC1zbS04IGNvbC14cy0xMSBzdmRfZWRpdG9yc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN2ZF9wYWdlc19lZGl0b3JcXFwiIGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ3BhZ2VlZGl0b3InLCBkYXRhOiBwYWdlc0VkaXRvciB9XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3ZkX3F1ZXN0aW9uc19lZGl0b3JcXFwiIGlkPVxcXCJzY3JvbGxhYmxlRGl2XFxcIiBkYXRhLWJpbmQ9XFxcInN0eWxlOiB7aGVpZ2h0OiBrb0Rlc2lnbmVySGVpZ2h0fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0zIGhpZGRlbi14cyBwYW5lbCBwYW5lbC1kZWZhdWx0IHN2ZF9wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZyBpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXN0b20tc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJvYmplY3RTZWxlY3RvclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb09iamVjdHMsIG9wdGlvbnNUZXh0OiAndGV4dCcsIHZhbHVlOiBrb1NlbGVjdGVkT2JqZWN0XFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvQ2FuRGVsZXRlT2JqZWN0LCBjbGljazogZGVsZXRlQ3VycmVudE9iamVjdCwgYXR0cjogeyB0aXRsZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5kZWxTZWxPYmplY3QnKX1cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdmRfb2JqZWN0X2VkaXRvclxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZToge2hlaWdodDoga29EZXNpZ25lckhlaWdodH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdvYmplY3RlZGl0b3InLCBkYXRhOiBzZWxlY3RlZE9iamVjdEVkaXRvciB9XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOnN1cnZleVZlcmJzLmtvSGFzVmVyYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdvYmplY3R2ZXJicycsIGRhdGE6IHN1cnZleVZlcmJzIH1cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAnZWRpdG9yJ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdqc29uZWRpdG9yJywgZGF0YToganNvbkVkaXRvciB9XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNUZXN0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAndGVzdCcsIHN0eWxlOiB7d2lkdGg6IGtvVGVzdFN1cnZleVdpZHRofVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNFeGFtcGxlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzdXJ2ZXlqc0V4YW1wbGVyZVJ1blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpzZWxlY3RUZXN0Q2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQudGVzdFN1cnZleUFnYWluJylcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmVcXFwiPlRlc3QgQWdhaW48L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNFbWJlZFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gJ2VtYmVkJ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdzdXJ2ZXllbWJlZGluZycsIGRhdGE6IHN1cnZleUVtYmVkaW5nIH1cXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ3F1ZXN0aW9uZWRpdG9yJywgZGF0YTogcXVlc3Rpb25FZGl0b3JXaW5kb3cgfVxcXCI+PC9kaXY+XFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL2luZGV4Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcImpzb25lZGl0b3JcXFwiPlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTogIWhhc0FjZUVkaXRvclxcXCI+XFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcInN2ZF9qc29uX2VkaXRvcl9hcmVhXFxcIiBkYXRhLWJpbmQ9XFxcInRleHRJbnB1dDprb1RleHRcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvRXJyb3JzIC0tPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8c3Bhbj5FcnJvcjogPC9zcGFuPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGV4dFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc0pTT05FZGl0b3JcXFwiIGNsYXNzPVxcXCJzdmRfanNvbl9lZGl0b3JcXFwiPjwvZGl2Plxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9qc29uZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInN1cnZleXMtbWFuYWdlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic3ZkLW1hbmFnZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdmQtbWFuYWdlLWNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcInN2ZC1tYW5hZ2Utc2VsZWN0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICFpc0VkaXRNb2RlKCksIG9wdGlvbnM6IHN1cnZleXMsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1RleHQ6ICduYW1lJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVudFN1cnZleSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zQ2FwdGlvbjogJ0Nob29zZSBzdXJ2ZXkgdG8gZWRpdCBvciBzdGFydCBlZGl0aW5nIGFuZCBzdXJ2ZXkgd2lsbCBiZSBzYXZlZCBhdXRvbWF0aWNhbGx5Li4uJ1xcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzdmQtbWFuYWdlLW5hbWVcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogaXNFZGl0TW9kZSwgdmFsdWU6IGN1cnJlbnRTdXJ2ZXlOYW1lLCBldmVudDogeyBrZXl1cDogbmFtZUVkaXRvcktleXByZXNzIH1cXFwiLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3ZkLW1hbmFnZS1idXR0b25zXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBjdXJyZW50U3VydmV5LCBjbGljazogZWRpdCwgY3NzOiBjc3NFZGl0LCBhdHRyOiB7IHRpdGxlOiB0aXRsZUVkaXQgfVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICFpc0VkaXRNb2RlKCksIGNsaWNrOiBhZGQsIGNzczogY3NzQWRkLCBhdHRyOiB7IHRpdGxlOiB0aXRsZUFkZCB9XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaWNvbi1kZWxldGVcXFwiIHRpdGxlPVxcXCJEZWxldGUgY3VycmVudCBzdXJ2ZXlcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogIWlzRWRpdE1vZGUoKSAmJiAhc3VydmV5SWQoKSAmJiBjdXJyZW50U3VydmV5KCksIGNsaWNrOnJlbW92ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwiYXR0YWNoLXN1cnZleVxcXCI+XFxuICAgIDxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImF0dHI6IHsgaHJlZjogYWN0aW9uLCB0aXRsZTogdGl0bGUgfVxcXCI+PHNwYW4gY2xhc3M9XFxcImljb25cXFwiIGRhdGEtYmluZD1cXFwiY3NzOiBpbm5lckNzc1xcXCI+PC9zcGFuPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiPjwvc3Bhbj48L2E+XFxuPC9zY3JpcHQ+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL21hbmFnZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJvYmplY3RlZGl0b3JcXFwiPlxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHN2ZF90YWJsZS1ub3dyYXBcXFwiPlxcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cXFwiZm9yZWFjaDoga29Qcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5jaGFuZ2VBY3RpdmVQcm9wZXJ0eSgkZGF0YSksIGNzczogeydhY3RpdmUnOiAkcGFyZW50LmtvQWN0aXZlUHJvcGVydHkoKSA9PSAkZGF0YX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBkaXNwbGF5TmFtZSwgYXR0cjoge3RpdGxlOiB0aXRsZX1cXFwiIHdpZHRoPVxcXCI1MCVcXFwiPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cXFwiNTAlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDoga29UZXh0LCB2aXNpYmxlOiAkcGFyZW50LmtvQWN0aXZlUHJvcGVydHkoKSAhPSAkZGF0YSB8fCBkaXNhYmxlZCwgYXR0cjoge3RpdGxlOiBrb1RleHR9XFxcIiBzdHlsZT1cXFwidGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTogJHBhcmVudC5rb0FjdGl2ZVByb3BlcnR5KCkgPT0gJGRhdGEgJiYgIWRpc2FibGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci0nICsgZWRpdG9yVHlwZSwgZGF0YTogJGRhdGEgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3Rib2R5PlxcbiAgICA8L3RhYmxlPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9vYmplY3RlZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwib2JqZWN0dmVyYnNcXFwiPlxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGtvVmVyYnMgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OnRleHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IGtvSXRlbXMsIG9wdGlvbnNUZXh0OiAndGV4dCcsIG9wdGlvbnNWYWx1ZTondmFsdWUnLCB2YWx1ZToga29TZWxlY3RlZEl0ZW1cXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwhLS0gL2tvICAtLT5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvb2JqZWN0dmVyYnMuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicGFnZWVkaXRvclxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIiBkYXRhLWJpbmQ9XFxcInRhYnM6dHJ1ZVxcXCI+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvUGFnZXMgLS0+XFxuICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJjc3M6IHthY3RpdmU6IGtvU2VsZWN0ZWQoKX0sZXZlbnQ6e1xcbiAgICAgICAgICAga2V5ZG93bjpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQua2V5RG93bihlbCwgZSk7IH0sXFxuICAgICAgICAgICBkcmFnc3RhcnQ6ZnVuY3Rpb24oZWwsIGUpeyAkcGFyZW50LmRyYWdTdGFydChlbCk7IHJldHVybiB0cnVlOyB9LFxcbiAgICAgICAgICAgZHJhZ292ZXI6ZnVuY3Rpb24oZWwsIGUpeyAkcGFyZW50LmRyYWdPdmVyKGVsKTt9LFxcbiAgICAgICAgICAgZHJhZ2VuZDpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQuZHJhZ0VuZCgpO30sXFxuICAgICAgICAgICBkcm9wOmZ1bmN0aW9uKGVsLCBlKXsgJHBhcmVudC5kcmFnRHJvcChlbCk7fVxcbiAgICAgICAgIH1cXFwiPiBcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwic3ZkX3BhZ2VfbmF2XFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiRwYXJlbnQuc2VsZWN0UGFnZUNsaWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHN2ZF9hZGRfbmV3X3BhZ2VfYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOmFkZE5ld1BhZ2VDbGljaywgYXR0cjoge3RpdGxlOiAgJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5hZGROZXdQYWdlJyl9XFxcIiA+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPjwvbGk+XFxuICAgIDwvdWw+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3BhZ2VlZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItYm9vbGVhblxcXCI+XFxuICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb1ZhbHVlXFxcIiAvPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItYm9vbGVhbi5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1kcm9wZG93blxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbS1zZWxlY3RcXFwiPlxcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBrb1ZhbHVlLCBvcHRpb25zOiBjaG9pY2VzXFxcIiAgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiPjwvc2VsZWN0PlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWRyb3Bkb3duLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWV4cHJlc3Npb25cXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtZXhwcmVzc2lvblxcXCI+XFxuICAgIDxkaXY+XFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgcm93cz1cXFwiOFxcXCIgYXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6JHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5leHByZXNzaW9uSGVscCcpXFxcIiBzdHlsZT1cXFwid2hpdGUtc3BhY2U6bm9ybWFsXFxcIj48L3NwYW4+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZXhwcmVzc2lvbi5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1odG1sXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcblxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LWh0bWxcXFwiPlxcbiAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgcm93cz1cXFwiMTBcXFwiIGF1dG9mb2N1cz1cXFwiYXV0b2ZvY3VzXFxcIj48L3RleHRhcmVhPlxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItaHRtbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBjbGFzcz1cXFwiYnRuLXhzXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LWl0ZW12YWx1ZXNcXFwiPlxcbiAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOjNweFxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4teHNcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7J2J0biBidG4tcHJpbWFyeSc6a29BY3RpdmVWaWV3KCkgPT0gJ2Zvcm0nLCAnYnRuLWxpbmsnOmtvQWN0aXZlVmlldygpICE9ICdmb3JtJ30sIGNsaWNrOmNoYW5nZVRvRm9ybVZpZXdDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5mb3JtRW50cnknKVxcXCI+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4teHNcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7J2J0biBidG4tcHJpbWFyeSc6a29BY3RpdmVWaWV3KCkgIT0gJ2Zvcm0nLCAnYnRuLWxpbmsnOmtvQWN0aXZlVmlldygpID09ICdmb3JtJ30sIGNsaWNrOmNoYW5nZVRvVGV4dFZpZXdDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5mYXN0RW50cnknKVxcXCI+PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0FjdGl2ZVZpZXcoKSA9PSAnZm9ybSdcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdy15OiBhdXRvOyBvdmVyZmxvdy14OmhpZGRlbjsgbWF4LWhlaWdodDo0MDBweDttaW4taGVpZ2h0OjIwMHB4XFxcIj5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiID5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS52YWx1ZScpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50ZXh0JylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIiByb2xlPVxcXCJncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAkaW5kZXgoKSA+IDAsIGNsaWNrOiAkcGFyZW50Lm9uTW92ZVVwQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4teHNcXFwiIHN0eWxlPVxcXCJmbG9hdDpub25lXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICRpbmRleCgpIDwgJHBhcmVudC5rb0l0ZW1zKCkubGVuZ3RoIC0gMSwgY2xpY2s6ICRwYXJlbnQub25Nb3ZlRG93bkNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MjAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyIG5vLXBhZGRpbmdcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNFcnJvciwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5lbnRlck5ld1ZhbHVlJylcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1RleHRcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyMDBweFxcXCIgLz48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBidG4tdG9vbGJhclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvQWN0aXZlVmlldygpID09ICdmb3JtJ1xcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hZGROZXcnKVxcXCIgLz5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25DbGVhckNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5yZW1vdmVBbGwnKVxcXCIgLz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvQWN0aXZlVmlldygpICE9ICdmb3JtJ1xcXCI+XFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0SW5wdXQ6IGtvSXRlbXNUZXh0XFxcIiBzdHlsZT1cXFwib3ZlcmZsb3cteTogYXV0bzsgb3ZlcmZsb3cteDpoaWRkZW47IG1heC1oZWlnaHQ6NDAwcHg7IG1pbi1oZWlnaHQ6MjUwcHg7IHdpZHRoOjEwMCVcXFwiPjwvdGV4dGFyZWE+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItaXRlbXZhbHVlcy5odG1sXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1tYXRyaXhkcm9wZG93bmNvbHVtbnNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtbWF0cml4ZHJvcGRvd25jb2x1bW5zXFxcIj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb0lzTGlzdFxcXCI+XFxuICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnJlcXVpcmVkJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuY2VsbFR5cGUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5uYW1lJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudGl0bGUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IGtvSXNSZXF1aXJlZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvQ2FuRWRpdCwgY2xpY2s6ICRwYXJlbnQub25FZGl0SXRlbUNsaWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IGNlbGxUeXBlQ2hvaWNlcywgdmFsdWU6IGtvQ2VsbFR5cGVcXFwiICBzdHlsZT1cXFwid2lkdGg6MTEwcHhcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb05hbWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlciBuby1wYWRkaW5nXFxcIiByb2xlPVxcXCJhbGVydFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvSGFzRXJyb3IsIHRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuZW50ZXJOZXdWYWx1ZScpXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVGl0bGVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMjBweFxcXCIgLz48L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQub25EZWxldGVDbGlja1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+PC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XFxcIjVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGJ0bi10b29sYmFyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hZGROZXcnKVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25DbGVhckNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5yZW1vdmVBbGwnKVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3Rib2R5PlxcbiAgICA8L3RhYmxlPlxcbiAgICAgPCEtLSBrbyBpZjogIWtvSXNMaXN0KCkgLS0+XFxuICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtbmVzdGVkXFxcIiwgZGF0YTogJGRhdGEgfSAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1ucy5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1tb2RhbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWVkaXRvci5pc0VkaXRhYmxlXFxcIj5cXG4gICAgICAgIDxhIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgZGF0YS1iaW5kPVxcXCJhdHRyOiB7J2RhdGEtdGFyZ2V0JyA6IG1vZGFsTmFtZVRhcmdldH1cXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDoga29UZXh0XFxcIj48L3NwYW4+PC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDJweDtcXFwiIGRhdGEtYmluZD1cXFwiYXR0cjogeydkYXRhLXRhcmdldCcgOiBtb2RhbE5hbWVUYXJnZXR9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTplZGl0b3IuaXNFZGl0YWJsZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6dGFibGVcXFwiPlxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OnRhYmxlLWNlbGw7IHdpZHRoOjEwMCVcXFwiIC8+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBzdHlsZT1cXFwiZGlzcGxheTp0YWJsZS1jZWxsOyBwYWRkaW5nOiAycHg7XFxcIiAgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImF0dHI6IHsnZGF0YS10YXJnZXQnIDogbW9kYWxOYW1lVGFyZ2V0fVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJhdHRyOiB7aWQgOiBtb2RhbE5hbWV9XFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj4mdGltZXM7PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ZWRpdG9yLnRpdGxlXFxcIj48L2g0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5IHN2ZF9ub3RvcGJvdHRvbXBhZGRpbmdzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yY29udGVudC0nICsgZWRpdG9yVHlwZSwgZGF0YTogZWRpdG9yIH0gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBlZGl0b3Iub25BcHBseUNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hcHBseScpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBlZGl0b3Iub25BcHBseUNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5vaycpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBlZGl0b3Iub25SZXNldENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jYW5jZWwnKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1vZGFsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1uZXN0ZWRcXFwiPlxcbiAgICA8ZGl2IHN0eWxlPVxcXCJwYWRkaW5nOiA1cHhcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQ2FuY2VsRWRpdEl0ZW1DbGlja1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBrb0VkaXRJdGVtKCkua29FZGl0b3JOYW1lXFxcIj48L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcXCJxdWVzdGlvbmVkaXRvci1jb250ZW50XFxcIiwgZGF0YToga29FZGl0SXRlbSgpLml0ZW1FZGl0b3IgfSAtLT5cXG4gICAgPCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1uZXN0ZWQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItbnVtYmVyXFxcIj5cXG4gICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIC8+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1udW1iZXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItcmVzdGZ1bGxcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtcmVzdGZ1bGxcXFwiPlxcbiAgICA8Zm9ybT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVybFxcXCI+VXJsOjwvbGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ1cmxcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29VcmxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhdGhcXFwiPlBhdGg6PC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhdGhcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29QYXRoXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWx1ZU5hbWVcXFwiPnZhbHVlTmFtZTo8L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidmFsdWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0aXRsZU5hbWVcXFwiPnRpdGxlTmFtZTo8L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidGl0bGVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVGl0bGVOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0aXRsZU5hbWVcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRlc3RTZXJ2aWNlJylcXFwiPjwvc3Bhbj48L2xhYmVsPlxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBxdWVzdGlvbi5rb1Zpc2libGVDaG9pY2VzLCBvcHRpb25zVGV4dDogJ3RleHQnLCBvcHRpb25zVmFsdWU6ICd2YWx1ZScsIG9wdGlvbnNDYXB0aW9uOiBxdWVzdGlvbi5vcHRpb25zQ2FwdGlvblxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9mb3JtPlxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItcmVzdGZ1bGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Itc3RyaW5nXFxcIj5cXG4gICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiAvPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3Itc3RyaW5nLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXRleHRcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdGV4dFxcXCI+XFxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiByb3dzPVxcXCIxMFxcXCIgYXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiPjwvdGV4dGFyZWE+XFxuPC9zY3JpcHQ+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10ZXh0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXRleHRpdGVtc1xcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC10ZXh0aXRlbXNcXFwiPlxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb0lzTGlzdFxcXCI+XFxuICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmlzUmVxdWlyZWQnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5uYW1lJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudGl0bGUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IGtvSXNSZXF1aXJlZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uRWRpdEl0ZW1DbGlja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb05hbWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxODBweFxcXCIgLz48L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29UaXRsZVxcXCIgc3R5bGU9XFxcIndpZHRoOjE4MHB4XFxcIiAvPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hZGROZXcnKVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkNsZWFyQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnJlbW92ZUFsbCcpXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3Rib2R5PlxcbiAgICA8L3RhYmxlPlxcbiAgICAgPCEtLSBrbyBpZjogIWtvSXNMaXN0KCkgLS0+XFxuICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtbmVzdGVkXFxcIiwgZGF0YTogJGRhdGEgfSAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L2Rpdj5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHRpdGVtcy5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc1xcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC10cmlnZ2Vyc1xcXCI+XFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOjEwcHhcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBmb3JtLWlubGluZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGF2YWlsYWJsZVRyaWdnZXJzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uQWRkQ2xpY2tcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokZGF0YVxcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvICAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6ICdrb1RleHQnLCB2YWx1ZToga29TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uRGVsZXRlQ2xpY2tcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1NlbGVjdGVkKCkgPT0gbnVsbFxcXCI+XFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZToga29RdWVzdGlvbnMoKS5sZW5ndGggPT0gMCwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5ub3F1ZXN0aW9ucycpXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1F1ZXN0aW9ucygpLmxlbmd0aCA+IDAsIHRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuY3JlYXRldHJpZ2dlcicpXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbFxcXCI+XFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwid2l0aDoga29TZWxlY3RlZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MTBweFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwICBmb3JtLWlubGluZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRyaWdnZXJPbicpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiRwYXJlbnQua29RdWVzdGlvbnMsIHZhbHVlOiBrb05hbWVcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNCBjb2wtc20tNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6YXZhaWxhYmxlT3BlcmF0b3JzLCBvcHRpb25zVmFsdWU6ICduYW1lJywgb3B0aW9uc1RleHQ6ICd0ZXh0JywgdmFsdWU6a29PcGVyYXRvclxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1JlcXVpcmVWYWx1ZSwgdmFsdWU6a29WYWx1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8IS0tIGtvIGlmOiBrb1R5cGUoKSA9PSAndmlzaWJsZXRyaWdnZXInIC0tPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy02IGNvbC1zbS02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMnLCBkYXRhOiBwYWdlcyB9IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNiBjb2wtc20tNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zJywgZGF0YTogcXVlc3Rpb25zIH0gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPCEtLSBrbyBpZjoga29UeXBlKCkgPT0gJ2NvbXBsZXRldHJpZ2dlcicgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW46IDEwcHhcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VyQ29tcGxldGVUZXh0JylcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09ICdzZXR2YWx1ZXRyaWdnZXInIC0tPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGZvcm0taW5saW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlclNldFRvTmFtZScpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29zZXRUb05hbWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGZvcm0taW5saW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlclNldFZhbHVlJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb3NldFZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDoga29pc1ZhcmlhYmxlXFxcIiAvPiA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlcklzVmFyaWFibGUnKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctOCBjb2wtc20tOFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2Plxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnMuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtc1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIG5vLW1hcmdpbnMgbm8tcGFkZGluZ1xcXCI+XFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiIHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOjEwcHhcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbXVsdGlwbGU9XFxcIm11bHRpcGxlXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6a29DaG9vc2VuLCB2YWx1ZToga29DaG9vc2VuU2VsZWN0ZWRcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvQ2hvb3NlblNlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uRGVsZXRlQ2xpY2tcXFwiIGNsYXNzPVxcXCJidG5cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOjVweFxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6a29PYmplY3RzLCB2YWx1ZToga29TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkFkZENsaWNrXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcy5odG1sXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci12YWxpZGF0b3JzXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LXZhbGlkYXRvcnNcXFwiPlxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbToxMHB4XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhdmFpbGFibGVWYWxpZGF0b3JzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uQWRkQ2xpY2tcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokZGF0YVxcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvICAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6ICd0ZXh0JywgdmFsdWU6IGtvU2VsZWN0ZWRcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkRlbGV0ZUNsaWNrXFxcIiBjbGFzcz1cXFwiYnRuXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ29iamVjdGVkaXRvcicsIGRhdGE6IHNlbGVjdGVkT2JqZWN0RWRpdG9yIH1cXFwiPjwvZGl2PlxcbjwvZGl2Plxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdmFsaWRhdG9ycy5odG1sXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJxdWVzdGlvbmVkaXRvci1jb250ZW50XFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiIGRhdGEtYmluZD1cXFwiZm9yZWFjaDoga29UYWJzXFxcIj5cXG4gICAgICAgIDxsaSByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7YWN0aXZlOiAkcGFyZW50LmtvQWN0aXZlVGFiKCkgPT0gJGRhdGEubmFtZX0sIGNsaWNrOiAkcGFyZW50Lm9uVGFiQ2xpY2tcXFwiPjxhPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokZGF0YS50aXRsZVxcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICA8L3VsPiAgICAgICAgICAgICAgIFxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGtvVGFicyAtLT5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6JHBhcmVudC5rb0FjdGl2ZVRhYigpID09ICRkYXRhLm5hbWVcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOjVweFxcXCI+XFxuICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICRkYXRhLmh0bWxUZW1wbGF0ZSwgZGF0YTogJGRhdGEudGVtcGxhdGVPYmplY3QgfSAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSAva28gIC0tPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3ItY29udGVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJxdWVzdGlvbmVkaXRvclxcXCI+XFxuICAgIDxkaXYgaWQ9XFxcInN1cnZleXF1ZXN0aW9uZWRpdG9yd2luZG93XFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcImRhdGEtYmluZD1cXFwid2l0aDprb0VkaXRvclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmtvVGl0bGVcXFwiPjwvaDQ+XFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHkgc3ZkX25vdG9wYm90dG9tcGFkZGluZ3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXFwicXVlc3Rpb25lZGl0b3ItY29udGVudFxcXCIsIGRhdGE6ICRkYXRhIH0gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFwcGx5Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFwcGx5JylcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uT2tDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUub2snKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25SZXNldENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jYW5jZWwnKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInF1ZXN0aW9uZWRpdG9ydGFiLWdlbmVyYWxcXFwiPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBwcm9wZXJ0aWVzLnJvd3MgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHByb3BlcnRpZXMgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNFcnJvclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZXhjbGFtYXRpb24tc2lnblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+RXJyb3I6PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBkYXRhLWJpbmQ9XFxcInRleHQ6a29FcnJvclRleHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogZWRpdFR5cGUgIT0gJ2NoZWNrJyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1iaW5kPVxcXCJ0ZXh0OnRpdGxlXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAndGV4dCcgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIGRpc2FibGU6IGRpc2FibGVkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAndGV4dGFyZWEnIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVxcXCJ0ZXh0XFxcIiByb3dzPVxcXCIyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBrb1ZhbHVlLCBkaXNhYmxlOiBkaXNhYmxlZFxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogZWRpdFR5cGUgPT0gJ2NoZWNrJyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2hlY2tib3gtaW5saW5lXFxcIj48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDoga29WYWx1ZSwgZGlzYWJsZTogZGlzYWJsZWRcXFwiPjxsYWJlbCBkYXRhLWJpbmQ9XFxcInRleHQ6dGl0bGVcXFwiPjwvbGFiZWw+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAnZHJvcGRvd24nIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIG9wdGlvbnM6IGNob2ljZXMsIGRpc2FibGU6IGRpc2FibGVkXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgIDwhLS0gL2tvICAtLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9ydGFiLWdlbmVyYWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwic3VydmV5ZW1iZWRpbmdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvTGlicmFyeVZlcnNpb25cXFwiPlxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImFuZ3VsYXJcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5hbmd1bGFyJylcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImpxdWVyeVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LmpxdWVyeScpXFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJrbm9ja291dFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3Lmtub2Nrb3V0JylcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInJlYWN0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcucmVhY3QnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidnVlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudnVlJylcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICA8c2VsZWN0IGRhdGEtYmluZD1cXFwidmFsdWU6a29TY3JpcHRVc2luZ1xcXCI+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYm9vdHN0cmFwXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuYm9vdHN0cmFwJylcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInN0YW5kYXJkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuc3RhbmRhcmQnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDxzZWxlY3QgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1Nob3dBc1dpbmRvd1xcXCI+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicGFnZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LnNob3dPblBhZ2UnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwid2luZG93XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuc2hvd0luV2luZG93JylcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNoZWNrYm94LWlubGluZVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvSGFzSWRzXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDprb0xvYWRTdXJ2ZXlcXFwiIC8+XFxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LmxvYWRGcm9tU2VydmVyJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvbGFiZWw+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudGl0bGVTY3JpcHQnKVxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTpoYXNBY2VFZGl0b3JcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInN1cnZleUVtYmVkaW5nSGVhZFxcXCIgc3R5bGU9XFxcImhlaWdodDo3MHB4O3dpZHRoOjEwMCVcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8dGV4dGFyZWEgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiFoYXNBY2VFZGl0b3IsIHRleHQ6IGtvSGVhZFRleHRcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6NzBweDt3aWR0aDoxMDAlXFxcIj48L3RleHRhcmVhPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29WaXNpYmxlSHRtbFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIiAgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LnRpdGxlSHRtbCcpXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmhhc0FjZUVkaXRvclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5RW1iZWRpbmdCb2R5XFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjMwcHg7d2lkdGg6MTAwJVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWhhc0FjZUVkaXRvciwgdGV4dDoga29Cb2R5VGV4dFxcXCIgc3R5bGU9XFxcImhlaWdodDozMHB4O3dpZHRoOjEwMCVcXFwiPjwvdGV4dGFyZWE+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIiAgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LnRpdGxlSmF2YVNjcmlwdCcpXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmhhc0FjZUVkaXRvclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5RW1iZWRpbmdKYXZhXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjMwMHB4O3dpZHRoOjEwMCVcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8dGV4dGFyZWEgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiFoYXNBY2VFZGl0b3IsIHRleHQ6IGtvSmF2YVRleHRcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MzAwcHg7d2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3N1cnZleWVtYmVkaW5nLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInN2ZC10b29sYmFyLWJ1dHRvblxcXCI+XFxuICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZTogJGRhdGEuZW5hYmxlZCB8fCB0cnVlLCBjbGljazogYWN0aW9uLCBjc3M6ICRkYXRhLmlubmVyQ3NzXFxcIj48c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IHRpdGxlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJzdmQtdG9vbGJhci1vcHRpb25zXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGlubGluZVxcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG4gICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGl0ZW1zIC0tPlxcbiAgICAgICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcImNzczogJGRhdGEuY3NzXFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBhY3Rpb24sIHRleHQ6IHRpdGxlXFxcIj48L2E+PC9saT5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwic3ZkLXRvb2xiYXItc3RhdGVcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IGlubmVyQ3NzXFxcIj48L3NwYW4+XFxuICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiPjwvc3Bhbj5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvdG9vbGJhci5odG1sXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIgKyByZXF1aXJlKCcuL2luZGV4Lmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL2pzb25lZGl0b3IuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vb2JqZWN0ZWRpdG9yLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL29iamVjdHZlcmJzLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3BhZ2VlZGl0b3IuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vc3VydmV5ZW1iZWRpbmcuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvci1jb250ZW50Lmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvcnRhYi1nZW5lcmFsLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1ib29sZWFuLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1kcm9wZG93bi5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItaHRtbC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZXhwcmVzc2lvbi5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItaXRlbXZhbHVlcy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbmVzdGVkLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1tYXRyaXhkcm9wZG93bmNvbHVtbnMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1vZGFsLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1udW1iZXIuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXJlc3RmdWxsLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1zdHJpbmcuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHQuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHRpdGVtcy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXZhbGlkYXRvcnMuaHRtbCcpICsgXCJcXG5cXG5cIiArIHJlcXVpcmUoJy4vbWFuYWdlLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Rvb2xiYXIuaHRtbCcpICsgXCJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1sb2FkZXI/aW50ZXJwb2xhdGUhLi9+L3ZhbC1sb2FkZXIhLi9zcmMvdGVtcGxhdGVzL2VudHJ5Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlUZXh0V29ya2VyfSBmcm9tIFwiLi90ZXh0V29ya2VyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5SlNPTkVkaXRvciB7XG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVUZXh0VGltZW91dDogbnVtYmVyID0gMTAwMDtcblxuICAgIHByaXZhdGUgaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGFjZUVkaXRvcjogQWNlQWpheC5FZGl0b3I7XG4gICAgcHJpdmF0ZSB0ZXh0V29ya2VyOiBTdXJ2ZXlUZXh0V29ya2VyO1xuICAgIGtvVGV4dDogYW55O1xuICAgIGtvRXJyb3JzOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rb1RleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmtvRXJyb3JzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1RleHQuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZi5vbkpzb25FZGl0b3JDaGFuZ2VkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjZUVkaXRvcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmFjZUVkaXRvciA9IGFjZS5lZGl0KFwic3VydmV5anNKU09ORWRpdG9yXCIpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vVE9ETyBhZGQgZXZlbnQgdG8gY2hhbmdlIGFjZSB0aGVtZSBhbmQgbW9kZVxuICAgICAgICAvL3RoaXMuYWNlRWRpdG9yLnNldFRoZW1lKFwiYWNlL3RoZW1lL21vbm9rYWlcIik7XG4gICAgICAgIC8vdGhpcy5hY2VFZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvanNvblwiKTtcbiAgICAgICAgdGhpcy5hY2VFZGl0b3Iuc2V0U2hvd1ByaW50TWFyZ2luKGZhbHNlKTtcbiAgICAgICAgdGhpcy5hY2VFZGl0b3IuZ2V0U2Vzc2lvbigpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25Kc29uRWRpdG9yQ2hhbmdlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY2VFZGl0b3IuZ2V0U2Vzc2lvbigpLnNldFVzZVdvcmtlcih0cnVlKTtcbiAgICAgICAgU3VydmV5VGV4dFdvcmtlci5uZXdMaW5lQ2hhciA9IHRoaXMuYWNlRWRpdG9yLnNlc3Npb24uZG9jLmdldE5ld0xpbmVDaGFyYWN0ZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNBY2VFZGl0b3IoKTogYm9vbGVhbiB7IHJldHVybiB0eXBlb2YgYWNlICE9PSBcInVuZGVmaW5lZFwiOyB9XG4gICAgcHVibGljIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5oYXNBY2VFZGl0b3IpIHJldHVybiB0aGlzLmtvVGV4dCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hY2VFZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmdJbW1lZGlhdGVseSA9IHRydWU7XG4gICAgICAgIHRoaXMua29UZXh0KHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuYWNlRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmFjZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmFjZUVkaXRvci5yZW5kZXJlci51cGRhdGVGdWxsKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvY2Vzc0pzb24odmFsdWUpO1xuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmFjZUVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5hY2VFZGl0b3IuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzSnNvbkNvcnJlY3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGV4dFdvcmtlciA9IG5ldyBTdXJ2ZXlUZXh0V29ya2VyKHRoaXMudGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRXb3JrZXIuaXNKc29uQ29ycmVjdDtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnRleHRXb3JrZXIuc3VydmV5OyB9XG4gICAgcHJpdmF0ZSB0aW1lb3V0SWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgb25Kc29uRWRpdG9yQ2hhbmdlZCgpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0SWQgPiAtMSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmdJbW1lZGlhdGVseSkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0SWQgPSAtMTtcbiAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NKc29uKHNlbGYudGV4dCk7XG4gICAgICAgICAgICB9LCBTdXJ2ZXlKU09ORWRpdG9yLnVwZGF0ZVRleHRUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHByb2Nlc3NKc29uKHRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHRoaXMudGV4dFdvcmtlciA9IG5ldyBTdXJ2ZXlUZXh0V29ya2VyKHRleHQpO1xuICAgICAgICBpZiAodGhpcy5hY2VFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuYWNlRWRpdG9yLmdldFNlc3Npb24oKS5zZXRBbm5vdGF0aW9ucyh0aGlzLmNyZWF0ZUFubm90YXRpb25zKHRleHQsIHRoaXMudGV4dFdvcmtlci5lcnJvcnMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua29FcnJvcnModGhpcy50ZXh0V29ya2VyLmVycm9ycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVBbm5vdGF0aW9ucyh0ZXh0OiBzdHJpbmcsIGVycm9yczogYW55W10pOiBBY2VBamF4LkFubm90YXRpb25bXSB7XG4gICAgICAgIHZhciBhbm5vdGF0aW9ucyA9IG5ldyBBcnJheTxBY2VBamF4LkFubm90YXRpb24+KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnNbaV07XG4gICAgICAgICAgICB2YXIgYW5ub3RhdGlvbjogQWNlQWpheC5Bbm5vdGF0aW9uID0geyByb3c6IGVycm9yLnBvc2l0aW9uLnN0YXJ0LnJvdywgY29sdW1uOiBlcnJvci5wb3NpdGlvbi5zdGFydC5jb2x1bW4sIHRleHQ6IGVycm9yLnRleHQsIHR5cGU6IFwiZXJyb3JcIiB9O1xuICAgICAgICAgICAgYW5ub3RhdGlvbnMucHVzaChhbm5vdGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbnM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlKU09ORWRpdG9yLnRzIiwiLy8gc3R5bGVzXG5pbXBvcnQgXCIuLi9tYWluLnNjc3NcIjtcblxuZXhwb3J0IGxldCBWZXJzaW9uOiBzdHJpbmc7XG5WZXJzaW9uID0gYCR7cHJvY2Vzcy5lbnYuVkVSU0lPTn1gO1xuXG5pbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuZ2xvYmFsW1wialF1ZXJ5XCJdID0galF1ZXJ5O1xuaW1wb3J0IFwiYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCB7RHJhZ0Ryb3BIZWxwZXJ9IGZyb20gXCIuLi9kcmFnZHJvcGhlbHBlclwiO1xuZXhwb3J0IHtcbiAgICBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UsIFN1cnZleVN0cmluZ1Byb3BlcnR5RWRpdG9yLFxuICAgIFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IsIFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvciwgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3Jcbn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlUZXh0SXRlbXNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5TmVzdGVkUHJvcGVydHlFZGl0b3IsIFN1cnZleU5lc3RlZFByb3BlcnR5RWRpdG9ySXRlbX0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU5lc3RlZFByb3BlcnR5RWRpdG9yXCJcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlEcm9wZG93bkNvbHVtbnNFZGl0b3IsIFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbX1cbiAgICBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VHJpZ2dlcnNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlPYmplY3RzfSBmcm9tIFwiLi4vc3VydmV5T2JqZWN0c1wiO1xuXG5leHBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuXG5leHBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMsIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFJvdywgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydHl9IGZyb20gXCIuLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllc1wiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb259IGZyb20gXCIuLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yU2hvd1dpbmRvdywgU3VydmV5UXVlc3Rpb25FZGl0b3IsIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiR2VuZXJhbCwgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJQcm9wZXJ0eX0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvclwiO1xuXG5leHBvcnQge1F1ZXN0aW9uVG9vbGJveH0gZnJvbSBcIi4uL3F1ZXN0aW9uVG9vbGJveFwiO1xuZXhwb3J0IHtTdXJ2ZXlPYmplY3RQcm9wZXJ0eX0gZnJvbSBcIi4uL29iamVjdFByb3BlcnR5XCI7XG5leHBvcnQge1N1cnZleU9iamVjdEVkaXRvcn0gZnJvbSBcIi4uL29iamVjdEVkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQYWdlc0VkaXRvcn0gZnJvbSBcIi4uL3BhZ2VzRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVRleHRXb3JrZXJ9IGZyb20gXCIuLi90ZXh0V29ya2VyXCI7XG5leHBvcnQge09ialR5cGUsIFN1cnZleUhlbHBlcn0gZnJvbSBcIi4uL3N1cnZleUhlbHBlclwiO1xuZXhwb3J0IHtTdXJ2ZXlFbWJlZGluZ1dpbmRvd30gZnJvbSBcIi4uL3N1cnZleUVtYmVkaW5nV2luZG93XCI7XG5leHBvcnQge1N1cnZleVZlcmJzLCBTdXJ2ZXlWZXJiSXRlbSwgU3VydmV5VmVyYkNoYW5nZVR5cGVJdGVtLCBTdXJ2ZXlWZXJiQ2hhbmdlUGFnZUl0ZW19IGZyb20gXCIuLi9vYmplY3RWZXJic1wiO1xuZXhwb3J0IHtTdXJ2ZXlVbmRvUmVkbywgVW5kb1JlZG9JdGVtfSBmcm9tIFwiLi4vdW5kb3JlZG9cIjtcbmV4cG9ydCB7U3VydmV5Rm9yRGVzaWduZXJ9IGZyb20gXCIuLi9zdXJ2ZXlqc09iamVjdHNcIlxuZXhwb3J0IHtTdXJ2ZXlFZGl0b3J9IGZyb20gXCIuLi9lZGl0b3JcIjtcblxuZXhwb3J0IHtTdXJ2ZXlzTWFuYWdlcn0gZnJvbSBcIi4uL21hbmFnZVwiO1xuXG4vL2VkaXRvckxvY2FsaXphdGlvblxuaW1wb3J0ICcuLi9sb2NhbGl6YXRpb24vZnJlbmNoJztcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9