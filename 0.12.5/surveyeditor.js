(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("survey-knockout"), require("jquery"), require("bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyEditor", ["knockout", "survey-knockout", "jquery", "bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["SurveyEditor"] = factory(require("knockout"), require("survey-knockout"), require("jquery"), require("bootstrap"));
	else
		root["SurveyEditor"] = factory(root["ko"], root["Survey"], root["jQuery"], root["bootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_32__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
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
        radiogroup: "Radiogroup",
        rating: "Rating",
        text: "Single Input"
    },
    //Strings in Editor
    ed: {
        addNewPage: "Add New Page",
        newPageName: "page",
        newQuestionName: "question",
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
    ObjType[ObjType["Question"] = 3] = "Question";
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
        var name = property.name;
        if (name == 'questions' || name == 'pages')
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(23);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropHelper; });

var DragDropHelper = (function () {
    function DragDropHelper(data, onModifiedCallback, scrollableElName) {
        if (scrollableElName === void 0) { scrollableElName = null; }
        this.data = data;
        this.scrollableElement = null;
        this.sourceIndex = -1;
        this.isScrollStop = true;
        this.onModifiedCallback = onModifiedCallback;
        this.scrollableElement = document.getElementById((scrollableElName ? scrollableElName : "scrollableDiv"));
    }
    Object.defineProperty(DragDropHelper.prototype, "survey", {
        get: function () { return this.data; },
        enumerable: true,
        configurable: true
    });
    DragDropHelper.prototype.startDragNewQuestion = function (event, questionType, questionName) {
        this.prepareData(event, questionType, questionName);
    };
    DragDropHelper.prototype.startDragQuestion = function (event, questionName) {
        this.prepareData(event, null, questionName);
    };
    DragDropHelper.prototype.startDragToolboxItem = function (event, questionName, questionJson) {
        this.prepareData(event, null, questionName, questionJson);
    };
    DragDropHelper.prototype.isSurveyDragging = function (event) {
        if (!event)
            return false;
        var data = this.getData(event).text;
        return data && data.indexOf(DragDropHelper.dataStart) == 0;
    };
    DragDropHelper.prototype.doDragDropOver = function (event, question) {
        event = this.getEvent(event);
        this.checkScrollY(event);
        var targetQuestion = DragDropHelper.dragData.targetQuestion;
        if (!question || question == targetQuestion || !this.isSurveyDragging(event) || this.isSamePlace(event, question))
            return;
        var index = this.getQuestionIndex(event, question);
        if (this.sourceIndex > -1) {
            if (this.sourceIndex == index || this.sourceIndex + 1 == index)
                index = -1;
        }
        this.survey.currentPage["koDragging"](index);
    };
    DragDropHelper.prototype.end = function () {
        this.isScrollStop = true;
        this.setIsDraggingSource(this.survey["koDraggingSource"](), false);
        this.survey["koDraggingSource"](null);
        this.survey.currentPage["koDragging"](-1);
        this.sourceIndex = -1;
        this.clearData();
    };
    DragDropHelper.prototype.doDrop = function (event, question) {
        if (question === void 0) { question = null; }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.isSurveyDragging(event)) {
            var index = this.survey.currentPage["koDragging"]();
            var targetQuestion = DragDropHelper.dragData.targetQuestion;
            if (targetQuestion && index > -1) {
                var oldIndex = this.survey.currentPage.questions.indexOf(targetQuestion);
                if (oldIndex > -1 && oldIndex < index) {
                    index--;
                }
                this.moveQuestionTo(targetQuestion, index);
            }
        }
        this.end();
    };
    DragDropHelper.prototype.doLeavePage = function (event) {
        event = this.getEvent(event);
        if (!this.scrollableElement)
            return;
        if (event.clientX <= 0 || event.clientY <= 0 ||
            event.clientX >= this.scrollableElement.offsetWidth || event.clientY >= this.scrollableElement.offsetHeight) {
            this.survey.currentPage["koDragging"](-1);
        }
    };
    DragDropHelper.prototype.scrollToElement = function (el) {
        if (!this.scrollableElement || !el)
            return;
        el.scrollIntoView(false);
    };
    DragDropHelper.prototype.createTargetQuestion = function (questionType, questionName, json) {
        if (!questionName)
            return null;
        var targetQuestion = this.survey.getQuestionByName(questionName);
        this.sourceIndex = -1;
        if (targetQuestion) {
            this.sourceIndex = this.survey.currentPage.questions.indexOf(targetQuestion);
        }
        if (!targetQuestion) {
            if (json) {
                targetQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["QuestionFactory"].Instance.createQuestion(json["type"], name);
                new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toObject(json, targetQuestion);
                targetQuestion.name = questionName;
            }
            if (!targetQuestion && questionType) {
                targetQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["QuestionFactory"].Instance.createQuestion(questionType, questionName);
            }
            targetQuestion.setData(this.survey);
            targetQuestion.renderWidth = "100%";
        }
        this.setIsDraggingSource(targetQuestion, true);
        return targetQuestion;
    };
    DragDropHelper.prototype.setIsDraggingSource = function (question, val) {
        if (question && question["koIsDraggingSource"])
            question["koIsDraggingSource"](val);
    };
    DragDropHelper.prototype.getQuestionIndex = function (event, question) {
        var page = this.survey.currentPage;
        if (!question)
            return page.questions.length;
        var index = page.questions.indexOf(question);
        event = this.getEvent(event);
        var height = event.currentTarget["clientHeight"];
        var y = event.offsetY;
        if (event.hasOwnProperty('layerX')) {
            y = event.layerY - event.currentTarget["offsetTop"];
        }
        if (y > height / 2)
            index++;
        return index;
    };
    DragDropHelper.prototype.isSamePlace = function (event, question) {
        var prev = DragDropHelper.prevEvent;
        if (prev.question != question || Math.abs(event.clientX - prev.x) > 5 || Math.abs(event.clientY - prev.y) > 5) {
            prev.question = question;
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
        return e.offsetY + e.currentTarget["offsetTop"] - this.scrollableElement.offsetTop - this.scrollableElement.scrollTop;
    };
    DragDropHelper.prototype.getEvent = function (event) {
        return event["originalEvent"] ? event["originalEvent"] : event;
    };
    DragDropHelper.prototype.moveQuestionTo = function (targetQuestion, index) {
        if (targetQuestion == null)
            return;
        var page = this.survey.getPageByQuestion(targetQuestion);
        if (page == this.survey.currentPage && index == page.questions.indexOf(targetQuestion))
            return;
        if (page) {
            page.removeQuestion(targetQuestion);
        }
        this.survey.currentPage.addQuestion(targetQuestion, index);
        if (this.onModifiedCallback)
            this.onModifiedCallback();
    };
    DragDropHelper.prototype.getDataInfo = function (event) {
        var data = this.getData(event);
        if (!data)
            return null;
        var text = data.text.substr(DragDropHelper.dataStart.length);
        var array = text.split(',');
        var result = { json: null };
        for (var i = 0; i < array.length; i++) {
            var item = array[i].split(':');
            result[item[0]] = item[1];
        }
        result.json = data.json;
        return result;
    };
    DragDropHelper.prototype.getY = function (element) {
        var result = 0;
        while (element) {
            result += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return result;
    };
    DragDropHelper.prototype.prepareData = function (event, questionType, questionName, json) {
        if (json === void 0) { json = null; }
        var str = DragDropHelper.dataStart;
        if (questionType)
            str += "questiontype:" + questionType + ',';
        str += "questionname:" + questionName;
        this.setData(event, str, json);
        var targetQuestion = this.createTargetQuestion(questionType, questionName, json);
        DragDropHelper.dragData.targetQuestion = targetQuestion;
        this.survey["koDraggingSource"](targetQuestion);
    };
    DragDropHelper.prototype.setData = function (event, text, json) {
        if (json === void 0) { json = null; }
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            event.dataTransfer.setData("Text", text);
            event.dataTransfer.effectAllowed = "copy";
        }
        DragDropHelper.dragData = { text: text, json: json };
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
        DragDropHelper.dragData = { text: "", json: null, targetQuestion: null };
        var prev = DragDropHelper.prevEvent;
        prev.question = null;
        prev.x = -1;
        prev.y = -1;
    };
    return DragDropHelper;
}());

DragDropHelper.dataStart = "surveyjs,";
DragDropHelper.dragData = { text: "", json: null };
DragDropHelper.prevEvent = { question: null, x: -1, y: -1 };
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
    "multipleitems": {
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
            var question = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["QuestionFactory"].Instance.createQuestion(name, "q1");
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
        var allTypes = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["QuestionFactory"].Instance.getAllTypes();
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
        var pageItem = this.createPage(page);
        var index = this.survey.pages.indexOf(page);
        if (index > 0) {
            var prevPage = this.survey.pages[index - 1];
            index = this.getItemIndex(prevPage) + 1;
            index += prevPage.questions.length;
        }
        else {
            index = 1; //0 - Survey
        }
        this.addItem(pageItem, index);
        index++;
        for (var i = 0; i < page.questions.length; i++) {
            var item = this.createQuestion(page.questions[i]);
            this.addItem(item, index + i);
        }
        this.koSelected(pageItem);
    };
    SurveyObjects.prototype.addQuestion = function (page, question) {
        var index = this.getItemIndex(page);
        if (index < 0)
            return;
        var questionIndex = page.questions.indexOf(question) + 1;
        index += questionIndex;
        var item = this.createQuestion(question);
        this.addItem(item, index);
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
        var countToRemove = 1;
        if (__WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Page) {
            var page = obj;
            countToRemove += page.questions.length;
        }
        this.koObjects.splice(index, countToRemove);
    };
    SurveyObjects.prototype.nameChanged = function (obj) {
        var index = this.getItemIndex(obj);
        if (index < 0)
            return;
        this.koObjects()[index].text(this.getText(obj));
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
        objs.push(this.createItem(this.survey, "Survey"));
        for (var i = 0; i < this.survey.pages.length; i++) {
            var page = this.survey.pages[i];
            objs.push(this.createPage(page));
            for (var j = 0; j < page.questions.length; j++) {
                objs.push(this.createQuestion(page.questions[j]));
            }
        }
        this.koObjects(objs);
        this.koSelected(this.survey);
    };
    SurveyObjects.prototype.createPage = function (page) {
        return this.createItem(page, this.getText(page));
    };
    SurveyObjects.prototype.createQuestion = function (question) {
        return this.createItem(question, this.getText(question));
    };
    SurveyObjects.prototype.createItem = function (value, text) {
        var item = new SurveyObjectItem();
        item.value = value;
        item.text = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](text);
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
    SurveyObjects.prototype.getText = function (obj) {
        var intend = SurveyObjects.intend;
        if (__WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) != __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Page) {
            intend += SurveyObjects.intend;
        }
        return intend + __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(obj);
    };
    return SurveyObjects;
}());

SurveyObjects.intend = "...";


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__textWorker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__undoredo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__surveyHelper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionToolbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__json5__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEditor; });















var templateEditorHtml = __webpack_require__(59);
var templatePageHtml = __webpack_require__(57);
var templateQuestionHtml = __webpack_require__(58);

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
                    //else TODO
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
    SurveyEditor.prototype.doOnQuestionAdded = function (question) {
        var page = this.survey.getPageByQuestion(question);
        var options = { question: question, page: page };
        this.onQuestionAdded.fire(this, options);
        this.surveyObjects.addQuestion(page, question);
        this.survey.render();
    };
    SurveyEditor.prototype.doOnQuestionRemoved = function (question) {
        this.surveyObjects.removeObject(question);
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
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question) {
            this.survey["setselectedQuestion"](obj);
            canDeleteObject = true;
            this.survey.currentPage = this.survey.getPageByQuestion(this.survey["selectedQuestionValue"]);
        }
        else {
            this.survey["setselectedQuestion"](null);
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
        this.surveyValue = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"]();
        this.dragDropHelper = new __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__["a" /* DragDropHelper */](this.survey, function () { self.setModified(); });
        this.surveyValue["setJsonObject"](json); //TODO
        if (this.surveyValue.isEmpty) {
            this.surveyValue["setJsonObject"](new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().parse(SurveyEditor.defaultNewSurveyText)); //TODO
        }
        this.surveyValue["dragDropHelper"] = this.dragDropHelper;
        //TODO remove the line above and call the method directly.
        if (this.survey["setDesignMode"])
            this.survey["setDesignMode"](true);
        else
            this.survey.mode = "designer";
        this.survey.render(this.surveyjs);
        this.surveyObjects.survey = this.survey;
        this.pagesEditor.survey = this.survey;
        this.pagesEditor.setSelectedPage(this.survey.currentPage);
        this.surveyVerbs.survey = this.survey;
        this.surveyValue["onSelectedQuestionChanged"].add(function (sender, options) { self.surveyObjects.selectObject(sender["selectedQuestionValue"]); });
        this.surveyValue["onEditQuestion"].add(function (sender, options) { self.showQuestionEditor(self.koSelectedObject().value); });
        this.surveyValue["onCopyQuestion"].add(function (sender, options) { self.addCustomToolboxQuestion(self.koSelectedObject().value); });
        this.surveyValue["onFastCopyQuestion"].add(function (sender, options) { self.fastCopyQuestion(self.koSelectedObject().value); });
        this.surveyValue["onDeleteCurrentObject"].add(function (sender, options) { self.deleteCurrentObject(); });
        this.surveyValue.onProcessHtml.add(function (sender, options) { options.html = self.processHtml(options.html); });
        this.surveyValue.onCurrentPageChanged.add(function (sender, options) { self.pagesEditor.setSelectedPage(sender.currentPage); });
        this.surveyValue.onQuestionAdded.add(function (sender, options) { self.doOnQuestionAdded(options.question); });
        this.surveyValue.onQuestionRemoved.add(function (sender, options) { self.doOnQuestionRemoved(options.question); });
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
        this.dragDropHelper.startDragToolboxItem(e, this.getNewQuestionName(), json);
    };
    SurveyEditor.prototype.doClickToolboxItem = function (json) {
        var name = this.getNewQuestionName();
        var question = __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["QuestionFactory"].Instance.createQuestion(json["type"], name);
        new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toObject(json, question);
        question.name = name;
        this.doClickQuestionCore(question);
    };
    SurveyEditor.prototype.getNewQuestionName = function () {
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewQuestionName(this.survey.getAllQuestions());
    };
    SurveyEditor.prototype.doClickQuestionCore = function (question) {
        var page = this.survey.currentPage;
        var index = -1;
        if (this.survey["selectedQuestionValue"] != null) {
            index = page.questions.indexOf(this.survey["selectedQuestionValue"]) + 1;
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
            this.setModified();
        }
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question) {
            this.survey.currentPage.removeQuestion(obj);
            this.survey["setselectedQuestion"](null);
            this.surveyObjects.selectObject(this.survey.currentPage);
            this.setModified();
        }
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
new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["SurveyTemplateText"]().replaceText(templatePageHtml, "page");
new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["SurveyTemplateText"]().replaceText(templateQuestionHtml, "question");
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"].prototype["onCreating"] = function () {
    this.selectedQuestionValue = null;
    this.onSelectedQuestionChanged = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
    this.onEditQuestion = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
    this.onCopyQuestion = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
    this.onFastCopyQuestion = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
    this.onDeleteCurrentObject = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
    var self = this;
    this.editQuestionClick = function () { self.onEditQuestion.fire(self); };
    this.copyQuestionClick = function () { self.onCopyQuestion.fire(self); };
    this.fastCopyQuestionClick = function () { self.onFastCopyQuestion.fire(self); };
    this.deleteCurrentObjectClick = function () { self.onDeleteCurrentObject.fire(self); };
    this.koDraggingSource = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](null);
};
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"].prototype["setselectedQuestion"] = function (value) {
    if (value == this.selectedQuestionValue)
        return;
    var oldValue = this.selectedQuestionValue;
    this.selectedQuestionValue = value;
    if (oldValue != null) {
        oldValue["onSelectedQuestionChanged"]();
    }
    if (this.selectedQuestionValue != null) {
        this.selectedQuestionValue["onSelectedQuestionChanged"]();
    }
    this.onSelectedQuestionChanged.fire(this, { 'oldSelectedQuestion': oldValue, 'newSelectedQuestion': value });
};
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"].prototype["getEditorLocString"] = function (value) {
    return __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString(value);
};
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Page"].prototype["onCreating"] = function () {
    var self = this;
    this.dragEnterCounter = 0;
    this.koDragging = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](-1);
    this.koDraggingQuestion = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](null);
    this.koDraggingBottom = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
    this.koDragging.subscribe(function (newValue) {
        if (newValue < 0) {
            self.dragEnterCounter = 0;
            self.koDraggingQuestion(null);
            self.koDraggingBottom(false);
        }
        else {
            var question = newValue >= 0 && newValue < self.questions.length ? self.questions[newValue] : null;
            self.koDraggingQuestion(question);
            self.koDraggingBottom(newValue == self.questions.length);
        }
    });
    this.koDraggingQuestion.subscribe(function (newValue) { if (newValue)
        newValue.koIsDragging(true); });
    this.koDraggingQuestion.subscribe(function (oldValue) { if (oldValue)
        oldValue.koIsDragging(false); }, this, "beforeChange");
    this.dragEnter = function (e) { e.preventDefault(); self.dragEnterCounter++; self.doDragEnter(e); };
    this.dragLeave = function (e) { self.dragEnterCounter--; if (self.dragEnterCounter === 0)
        self.doDragLeave(e); };
    this.dragDrop = function (e) { self.doDrop(e); };
};
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Page"].prototype["doDrop"] = function (e) {
    var dragDropHelper = this.data["dragDropHelper"];
    if (dragDropHelper) {
        dragDropHelper.doDrop(e);
    }
};
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Page"].prototype["doDragEnter"] = function (e) {
    if (this.questions.length > 0 || this.koDragging() > 0)
        return;
    var dragDropHelper = this.data["dragDropHelper"];
    if (dragDropHelper && dragDropHelper.isSurveyDragging(e)) {
        this.koDragging(0);
    }
};
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Page"].prototype["doDragLeave"] = function (e) {
    var dragDropHelper = this.data["dragDropHelper"];
    if (dragDropHelper) {
        dragDropHelper.doLeavePage(e);
    }
};
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["QuestionBase"].prototype["onCreating"] = function () {
    var self = this;
    this.dragDropHelperValue = null;
    this.koIsDragging = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
    this.koIsDraggingSource = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
    this.dragDropHelper = function () {
        if (self.dragDropHelperValue == null) {
            self.dragDropHelperValue = self.data["dragDropHelper"];
        }
        return self.dragDropHelperValue;
    };
    this.dragOver = function (e) { self.dragDropHelper().doDragDropOver(e, self); };
    this.dragDrop = function (e) { self.dragDropHelper().doDrop(e, self); };
    this.dragStart = function (e) { self.dragDropHelper().startDragQuestion(e, self.name); };
    this.dragEnd = function (e) { self.dragDropHelper().end(); };
    this.koIsSelected = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
    this.koOnClick = function () {
        if (self.data == null)
            return;
        self.data["setselectedQuestion"](this);
    };
};
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["QuestionBase"].prototype["onSelectedQuestionChanged"] = function () {
    if (this.data == null)
        return;
    this.koIsSelected(this.data["selectedQuestionValue"] == this);
};


/***/ }),
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
        var editItem = { koName: ko.observable(__WEBPACK_IMPORTED_MODULE_3__surveyHelper__["b" /* SurveyHelper */].getNewName(objs, "text")), koTitle: ko.observable() };
        this.createValidatorsEditor(editItem, []);
        return editItem;
    };
    SurveyPropertyTextItemsEditor.prototype.createEditorItem = function (item) {
        var editItem = { koName: ko.observable(item.name), koTitle: ko.observable(item.title) };
        this.createValidatorsEditor(editItem, item.validators);
        return editItem;
    };
    SurveyPropertyTextItemsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var itemText = new __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["MultipleTextItem"](editorItem.koName(), editorItem.koTitle());
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
        item.koText = ko.observable(this.getText(validators.length));
    };
    SurveyPropertyTextItemsEditor.prototype.getText = function (length) {
        return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.items")["format"](length);
    };
    return SurveyPropertyTextItemsEditor;
}(__WEBPACK_IMPORTED_MODULE_1__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("textitems", function () { return new SurveyPropertyTextItemsEditor(); });


/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd_container\">\n    <ul class=\"navbar-default container-fluid nav nav-tabs svd_menu\">\n        <li data-bind=\"css: {active: koViewType() == 'designer'}\"><a href=\"#\" data-bind=\"click:selectDesignerClick, text: $root.getLocString('ed.designer')\"></a></li>\n        <li data-bind=\"visible: showJSONEditorTab, css: {active: koViewType() == 'editor'}\"><a href=\"#\" data-bind=\"click:selectEditorClick, text: $root.getLocString('ed.jsonEditor')\"></a></li>\n        <li data-bind=\"visible: showTestSurveyTab, css: {active: koViewType() == 'test'}\"><a href=\"#\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurvey')\"></a></li>\n        <li data-bind=\"visible: showEmbededSurveyTab, css: {active: koViewType() == 'embed'}\"><a href=\"#\" data-bind=\"click:selectEmbedClick, text: $root.getLocString('ed.embedSurvey')\"></a></li>\n\n        <li class=\"svd_actions\" data-bind=\"visible: koIsShowDesigner\">\n            <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable:undoRedo.koCanUndo, click: doUndoClick\"><span data-bind=\"text: $root.getLocString('ed.undo')\"></span></button>\n        </li>\n        <li class=\"svd_actions\" data-bind=\"visible: koIsShowDesigner\">\n            <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable:undoRedo.koCanRedo, click: doRedoClick\"><span data-bind=\"text: $root.getLocString('ed.redo')\"></span></button>\n        </li>\n        <li class=\"svd_actions\" data-bind=\"visible: (koIsShowDesigner() && koShowOptions())\">\n            <div class=\"btn-group inline\">\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-bind=\"text: $root.getLocString('ed.options')\">\n                    Options \n                    <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                    <li data-bind=\"css: {active: koGenerateValidJSON}\"><a href=\"#\" data-bind=\"click:generateValidJSONClick, text: $root.getLocString('ed.generateValidJSON')\"></a></li>\n                    <li data-bind=\"css: {active: !koGenerateValidJSON()}\"><a href=\"#\" data-bind=\"click:generateReadableJSONClick, text: $root.getLocString('ed.generateReadableJSON')\"></a></li>\n                </ul>\n            </div>\n        </li>\n        <li class=\"svd_actions\" data-bind=\"visible: koViewType() == 'test'\">\n            <div class=\"btn-group inline\">\n                <button type=\"button\" id=\"surveyTestWidth\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                    <span data-bind=\"text: $root.getLocString('ed.testSurveyWidth') + ' ' + $root.koTestSurveyWidth()\"></span>\n                    <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"surveyTestWidth\">\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '100%')\">100%</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '1200px')\">1200px</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '1000px')\">1000px</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '800px')\">800px</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '600px')\">600px</a></li>\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '400px')\">400px</a></li>\n                </ul>\n            </div>\n        </li>\n        <li class=\"svd_actions\">\n            <button type=\"button\" class=\"btn btn-primary svd_save_btn\" data-bind=\"click: saveButtonClick, visible: koShowSaveButton\"><span data-bind=\"text: $root.getLocString('ed.saveSurvey')\"></span></button>\n        </li>\n    </ul>\n\n    <div class=\"panel svd_content\">\n        <div class=\"row svd_survey_designer\"  data-bind=\"visible: koViewType() == 'designer'\">\n            <div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-1 panel panel-default svd_toolbox\">\n                <div class=\"btn-group-vertical\" style=\"width:100%;padding-right:2px\">\n                    <!-- ko foreach: toolbox.koItems -->\n                    <div class=\"btn btn-default\" style=\"text-align:left; margin:1px;min-height:37px; width:100%\" draggable=\"true\" data-bind=\"click: $root.clickToolboxItem, event:{dragstart: function(el, e) { $root.draggingToolboxItem($data, e); return true;}, dragend: function(el, e) { $root.dragEnd(); }}\">\n                        <span data-bind=\"css: iconName, attr: {title: title}\"></span>\n                        <span class=\"svd_toolbox_item_text hidden-sm hidden-xs\" data-bind=\"text:title\"></span>\n                    </div>\n                    <!-- /ko  -->\n                </div>\n            </div>\n            <div class=\"col-lg-7 col-md-7 col-sm-8 col-xs-11 svd_editors\">\n                <div class=\"svd_pages_editor\" data-bind=\"template: { name: 'pageeditor', data: pagesEditor }\"></div>\n                <div class=\"svd_questions_editor\" id=\"scrollableDiv\" data-bind=\"style: {height: koDesignerHeight}\">\n                    <div id=\"surveyjs\"></div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs panel panel-default svd_properties\">\n                <div class=\"panel-heading input-group\">\n                    <div class=\"custom-select\">\n                        <select class=\"form-control\" data-bind=\"options: koObjects, optionsText: 'text', value: koSelectedObject\"></select>\n                    </div>\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\" data-bind=\"enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString('ed.delSelObject')}\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                    </div>\n                </div>\n                <div class=\"svd_object_editor\" data-bind=\"style: {height: koDesignerHeight}\">\n                    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n                </div>\n                <div class=\"panel-footer\" data-bind=\"visible:surveyVerbs.koHasVerbs\">\n                    <div data-bind=\"template: { name: 'objectverbs', data: surveyVerbs }\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div data-bind=\"visible: koViewType() == 'editor'\">\n            <div data-bind=\"template: { name: 'jsoneditor', data: jsonEditor }\"></div>\n        </div>\n\n        <div id=\"surveyjsTest\" data-bind=\"visible: koViewType() == 'test', style: {width: koTestSurveyWidth}\">\n            <div id=\"surveyjsExample\"></div>\n            <div id=\"surveyjsExampleResults\"></div>\n            <button id=\"surveyjsExamplereRun\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurveyAgain')\" style=\"display:none\">Test Again</button>\n        </div>\n\n        <div id=\"surveyjsEmbed\" data-bind=\"visible: koViewType() == 'embed'\">\n            <div data-bind=\"template: { name: 'surveyembeding', data: surveyEmbeding }\"></div>\n        </div>\n    </div>\n    <div data-bind=\"template: { name: 'questioneditor', data: questionEditorWindow }\"></div>\n</div>";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"jsoneditor\">\n    <div data-bind=\"visible: !hasAceEditor\">\n        <textarea class=\"svd_json_editor_area\" data-bind=\"textInput:koText\"></textarea>\n        <!-- ko foreach: koErrors -->\n        <div>\n            <span>Error: </span><span data-bind=\"text: text\"></span>\n        </div>\n        <!-- /ko  -->\n    </div>\n    <div id=\"surveyjsJSONEditor\" class=\"svd_json_editor\"></div>\n</script>";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objecteditor\">\n    <table class=\"table svd_table-nowrap\">\n        <tbody data-bind=\"foreach: koProperties\">\n            <tr data-bind=\"click: $parent.changeActiveProperty($data), css: {'active': $parent.koActiveProperty() == $data}\">\n                <td data-bind=\"text: displayName, attr: {title: title}\" width=\"50%\"></td>\n                <td width=\"50%\">\n                    <span data-bind=\"text: koText, visible: $parent.koActiveProperty() != $data || disabled, attr: {title: koText}\" style=\"text-overflow:ellipsis;white-space:nowrap;overflow:hidden\"></span>\n                    <div data-bind=\"visible: $parent.koActiveProperty() == $data && !disabled\">\n                        <!-- ko template: { name: 'propertyeditor-' + editorType, data: $data } -->\n                        <!-- /ko -->\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</script>";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objectverbs\">\n    <!-- ko foreach: koVerbs -->\n        <div class=\"row\">\n            <div class=\"input-group\">\n                <span  class=\"input-group-addon\" data-bind=\"text:text\"></span>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', optionsValue:'value', value: koSelectedItem\"></select>\n            </div>\n        </div>\n    <!-- /ko  -->\n</script>";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"pageeditor\">\n    <ul class=\"nav nav-tabs\" data-bind=\"tabs:true\">\n        <!-- ko foreach: koPages -->\n        <li data-bind=\"css: {active: koSelected()},event:{\n           keydown:function(el, e){ $parent.keyDown(el, e); },\n           dragstart:function(el, e){ $parent.dragStart(el); return true; },\n           dragover:function(el, e){ $parent.dragOver(el);},\n           dragend:function(el, e){ $parent.dragEnd();},\n           drop:function(el, e){ $parent.dragDrop(el);}\n         }\"> \n            <a class=\"svd_page_nav\" href=\"#\" data-bind=\"click:$parent.selectPageClick\">\n                <span data-bind=\"text: title\"></span>\n            </a>\n        </li>\n        <!-- /ko  -->\n        <li><button class=\"btn btn-default svd_add_new_page_btn\" data-bind=\"click:addNewPageClick, attr: {title:  $root.getLocString('ed.addNewPage')}\" ><span class=\"glyphicon glyphicon-plus\"></span></button></li>\n    </ul>\n</script>";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-boolean\">\n    <input class=\"form-control\" type=\"checkbox\" data-bind=\"checked: koValue\" />\n</script>";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-dropdown\">\n    <div class=\"custom-select\">\n        <select class=\"form-control\" data-bind=\"value: koValue, options: choices\"  style=\"width:100%\"></select>\n    </div>\n</script>";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-expression\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-expression\">\n    <div>\n        <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"8\" autofocus=\"autofocus\"></textarea>\n        <span data-bind=\"text:$root.getLocString('pe.expressionHelp')\" style=\"white-space:normal\"></span>\n    </div>\n</script>\n";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-html\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-html\">\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-itemvalues\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" class=\"btn-xs\" id=\"propertyeditorcontent-itemvalues\">\n    <div style=\"margin-bottom:3px\">\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() == 'form', 'btn-link':koActiveView() != 'form'}, click:changeToFormViewClick, text: $root.getLocString('pe.formEntry')\"></button>\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() != 'form', 'btn-link':koActiveView() == 'form'}, click:changeToTextViewClick, text: $root.getLocString('pe.fastEntry')\"></button>\n    </div>\n    <div data-bind=\"visible:koActiveView() == 'form'\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px;min-height:200px\">\n        <table class=\"table\" >\n            <thead>\n                <tr>\n                    <th></th>\n                    <th data-bind=\"text: $root.getLocString('pe.value')\"></th>\n                    <th data-bind=\"text: $root.getLocString('pe.text')\"></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- ko foreach: koItems -->\n                <tr>\n                    <td>\n                        <div class=\"btn-group\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-xs\" data-bind=\"visible: $index() > 0, click: $parent.onMoveUpClick\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span></button>\n                            <button type=\"button\" class=\"btn btn-xs\" style=\"float:none\" data-bind=\"visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick\"><span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span></button>\n                        </div>\n                    </td>\n                    <td>\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value:koValue\" style=\"width:200px\" />\n                        <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\n                    </td>\n                    <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koText\" style=\"width:200px\" /></td>\n                    <td><button type=\"button\" class=\"btn btn-xs\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n                </tr>\n                <!-- /ko -->\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row btn-toolbar\" data-bind=\"visible:koActiveView() == 'form'\">\n        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\" />\n        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n    </div>\n    <div data-bind=\"visible:koActiveView() != 'form'\">\n        <textarea class=\"form-control\" data-bind=\"textInput: koItemsText\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px; min-height:250px; width:100%\"></textarea>\n    </div>\n</script>\n";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-matrixdropdowncolumns\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-matrixdropdowncolumns\">\n    <table class=\"table\" data-bind=\"visible: koIsList\">\n        <thead>\n            <tr>\n                <th data-bind=\"text: $root.getLocString('pe.required')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.cellType')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: koItems -->\n            <tr>\n                <td>\n                    <input type=\"checkbox\" data-bind=\"checked: koIsRequired\" />\n                    <button type=\"button\" class=\"btn\" data-bind=\"visible: koCanEdit, click: $parent.onEditItemClick\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>\n                    </button>\n                </td>\n                <td>\n                    <select class=\"form-control\" data-bind=\"options: cellTypeChoices, value: koCellType\"  style=\"width:110px\"></select>\n                </td>\n                <td>\n                    <input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:100px\" />\n                    <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\n                </td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:120px\" /></td>\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n            <!-- /ko -->\n            <tr>\n                <td colspan=\"3\">\n                    <div class=\"row btn-toolbar\">\n                        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/>\n                        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\"\" />\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n     <!-- ko if: !koIsList() -->\n        <div style=\"padding: 5px\">\n            <button type=\"button\" class=\"btn\" data-bind=\"click: onCancelEditItemClick\">\n                <span class=\"glyphicon glyphicon-list-alt\"></span>\n            </button>\n            <span data-bind=\"text: koEditItem().koEditorName\"></span>\n        </div>\n        <!-- ko template: { name: \"questioneditor-content\", data: columnEditor } -->\n        <!-- /ko -->\n    <!-- /ko -->\n</script>\n";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-modal\">\n    <div class=\"input-group\" data-bind=\"visible:!editor.isEditable\">\n        <a data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\"><span data-bind=\"text: koText\"></span></a>\n        <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" data-toggle=\"modal\" style=\"padding: 2px;\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n    <div class=\"input-group\" data-bind=\"visible:editor.isEditable\" style=\"display:table\">\n        <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"display:table-cell; width:100%\" />\n        <div class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-default\" style=\"display:table-cell; padding: 2px;\"  data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n\n    <div data-bind=\"attr: {id : modalName}\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:editor.title\"></h4>\n                </div>  \n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: 'propertyeditorcontent-' + editorType, data: editor } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: editor.onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-number\">\n    <input class=\"form-control\" type=\"number\" data-bind=\"value: koValue\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-restfull\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-restfull\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"url\">Url:</label>\n            <input id=\"url\" type=\"text\" data-bind=\"value:koUrl\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"path\">Path:</label>\n            <input id=\"path\" type=\"text\" data-bind=\"value:koPath\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"valueName\">valueName:</label>\n            <input id=\"valueName\" type=\"text\" data-bind=\"value:koValueName\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"titleName\">titleName:</label>\n            <input id=\"titleName\" type=\"text\" data-bind=\"value:koTitleName\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"titleName\"><span data-bind=\"text:$root.getLocString('pe.testService')\"></span></label>\n            <select class=\"form-control\" data-bind=\"options: question.koVisibleChoices, optionsText: 'text', optionsValue: 'value', optionsCaption: question.optionsCaption\"></select>\n        </div>\n    </form>\n</script>\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-string\">\n    <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-text\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-text\">\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-textitems\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-textitems\">\n<div class=\"panel\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: koItems -->\n            <tr>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:200px\" /></td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:200px\" /></td>\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n            <!-- /ko -->\n            <tr>\n                <td colspan=\"4\"><input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/></td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n</script>";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggers\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-triggers\">\n<div class=\"panel\">\n    <div class=\"row\" style=\"margin-bottom:10px\">\n        <div class=\"col-lg-12\">\n            <div class=\"input-group form-inline\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <!-- ko foreach: availableTriggers -->\n                        <li><a data-bind=\"click: $parent.onAddClick($data)\"><span data-bind=\"text:$data\"></span></a></li>\n                        <!-- /ko  -->\n                    </ul>\n                </div>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'koText', value: koSelected\"></select>\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div data-bind=\"visible: koSelected() == null\">\n        <div data-bind=\"visible: koQuestions().length == 0, text: $root.getLocString('pe.noquestions')\"></div>\n        <div data-bind=\"visible: koQuestions().length > 0, text: $root.getLocString('pe.createtrigger')\"></div>\n    </div>\n    <div data-bind=\"visible: koSelected() != null\">\n        <div data-bind=\"with: koSelected\">\n            <div class=\"row\"  style=\"margin-bottom:10px\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group  form-inline\">\n                        <div class=\"form-group\">\n                            <span class=\"input-group\" data-bind=\"text: $root.getLocString('pe.triggerOn')\"></span>\n                        </div>\n                        <div class=\"form-group\">\n                            <select class=\"form-control\" data-bind=\"options:$parent.koQuestions, value: koName\"></select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" data-bind=\"options:availableOperators, optionsValue: 'name', optionsText: 'text', value:koOperator\"></select>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" data-bind=\"visible: koRequireValue, value:koValue\" />\n                    </div>\n                </div>\n            </div>\n            <!-- ko if: koType() == 'visibletrigger' -->\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6\">\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: pages } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"col-lg-6 col-sm-6\">\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: questions } -->\n                    <!-- /ko -->\n                </div>\n            </div>\n            <!-- /ko -->\n            <!-- ko if: koType() == 'completetrigger' -->\n            <div class=\"row\">\n               <div style=\"margin: 10px\" data-bind=\"text: $root.getLocString('pe.triggerCompleteText')\"></div>\n            </div>\n            <!-- /ko -->\n            <!-- ko if: koType() == 'setvaluetrigger' -->\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group form-inline\">\n                        <div>\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetToName')\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetToName\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group form-inline\">\n                        <div>\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetValue')\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetValue\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <input type=\"checkbox\" data-bind=\"checked: koisVariable\" /> <span data-bind=\"text: $root.getLocString('pe.triggerIsVariable')\"></span>\n                    </div>\n                </div>\n                <div class=\"col-lg-8 col-sm-8\">\n                </div>\n            </div>\n            <!-- /ko -->\n        </div>\n    </div>\n</div>\n</script>";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggersitems\">\n    <div class=\"panel no-margins no-padding\">\n        <div data-bind=\"text: title\" style=\"margin-bottom:10px\"></div>\n        <div class=\"input-group\">\n            <select class=\"form-control\" multiple=\"multiple\" data-bind=\"options:koChoosen, value: koChoosenSelected\"></select>\n            <span class=\"input-group-btn\" style=\"vertical-align:top\">\n                <button type=\"button\" data-bind=\"enable: koChoosenSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n            </span>\n        </div>\n        <div class=\"input-group\" style=\"margin-top:5px\">\n            <select class=\"form-control\" data-bind=\"options:koObjects, value: koSelected\"></select>\n            <span class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default\" data-bind=\"enable: koSelected() != null, click: onAddClick\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n            </span>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-validators\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-validators\">\n<div class=\"panel\">\n    <div class=\"panel-heading\">\n        <div class=\"row input-group\">\n            <button type=\"button\" class=\"dropdown-toggle input-group-addon\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n            </button>\n            <ul class=\"dropdown-menu input-group\">\n                <!-- ko foreach: availableValidators -->\n                <li><a href=\"#\" data-bind=\"click: $parent.onAddClick($data)\"><span data-bind=\"text:$data\"></span></a></li>\n                <!-- /ko  -->\n            </ul>\n            <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', value: koSelected\"></select>\n            <span class=\"input-group-btn\">\n                <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n            </span>\n        </div>\n    </div>\n    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n</div>\n</script>";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor-content\">\n    <ul class=\"nav nav-tabs\" data-bind=\"foreach: koTabs\">\n        <li role=\"presentation\" data-bind=\"css: {active: $parent.koActiveTab() == $data.name}, click: $parent.onTabClick\"><a><span data-bind=\"text:$data.title\"></span></a></li>\n    </ul>               \n    <!-- ko foreach: koTabs -->\n    <div data-bind=\"visible:$parent.koActiveTab() == $data.name\" style=\"margin-top:5px\">\n        <!-- ko template: { name: $data.htmlTemplate, data: $data.templateObject } -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko  -->\n</script>";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor\">\n    <div id=\"surveyquestioneditorwindow\" class=\"modal fade\" role=\"dialog\"data-bind=\"with:koEditor\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:koTitle\"></h4>\n                </div>  \n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: \"questioneditor-content\", data: $data } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default\" data-bind=\"click: onOkClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditortab-general\">\n    <div>\n        <!-- ko foreach: properties.rows -->\n        <div class=\"form-group\">\n            <!-- ko foreach: properties -->\n                    <div class=\"alert alert-danger\" role=\"alert\" data-bind=\"visible:koHasError\">\n                        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Error:</span>\n                        <span  data-bind=\"text:koErrorText\"></span>\n                    </div>            \n                    <!-- ko if: editType != 'check' -->\n                        <label data-bind=\"text:title\"></label>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'text' -->\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\" />\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'textarea' -->\n                        <textarea type=\"text\" rows=\"2\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\"></textarea>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'check' -->\n                        <span class=\"checkbox-inline\"><input type=\"checkbox\" data-bind=\"checked: koValue, disable: disabled\"><label data-bind=\"text:title\"></label></span>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'dropdown' -->\n                        <select class=\"form-control\"  data-bind=\"value: koValue, options: choices, disable: disabled\"></select>\n                    <!-- /ko -->\n            <!-- /ko  -->\n        </div>\n        <!-- /ko  -->\n    </div>\n</script>\n";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveyembeding\">\n    <div class=\"row\">\n        <select data-bind=\"value:koLibraryVersion\">\n            <option value=\"angular\" data-bind=\"text: $root.getLocString('ew.angular')\"></option>\n            <option value=\"jquery\" data-bind=\"text: $root.getLocString('ew.jquery')\"></option>\n            <option value=\"knockout\" data-bind=\"text: $root.getLocString('ew.knockout')\"></option>\n            <option value=\"react\" data-bind=\"text: $root.getLocString('ew.react')\"></option>\n            <option value=\"vue\" data-bind=\"text: $root.getLocString('ew.vue')\"></option>\n        </select>\n        <select data-bind=\"value:koScriptUsing\">\n            <option value=\"bootstrap\" data-bind=\"text: $root.getLocString('ew.bootstrap')\"></option>\n            <option value=\"standard\" data-bind=\"text: $root.getLocString('ew.standard')\"></option>\n        </select>\n        <select data-bind=\"value:koShowAsWindow\">\n            <option value=\"page\" data-bind=\"text: $root.getLocString('ew.showOnPage')\"></option>\n            <option value=\"window\" data-bind=\"text: $root.getLocString('ew.showInWindow')\"></option>\n        </select>\n        <label class=\"checkbox-inline\" data-bind=\"visible:koHasIds\">\n            <input type=\"checkbox\" data-bind=\"checked:koLoadSurvey\" />\n            <span data-bind=\"text: $root.getLocString('ew.loadFromServer')\"></span>\n        </label>\n    </div>\n    <div class=\"panel\">\n        <div class=\"panel-heading\" data-bind=\"text: $root.getLocString('ew.titleScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingHead\" style=\"height:70px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koHeadText\" style=\"height:70px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel\" data-bind=\"visible: koVisibleHtml\">\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleHtml')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingBody\" style=\"height:30px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koBodyText\" style=\"height:30px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel\">\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleJavaScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingJava\" style=\"height:300px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koJavaText\" style=\"height:300px;width:100%\"></textarea>\n    </div>\n</script>";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"event:{\n           dragenter:function(el, e){ dragEnter(e);},\n           dragleave:function(el, e){ dragLeave(e);},\n           dragover:function(el, e){ return false;},\n           drop:function(el, e){ dragDrop(e);}}\n     \">\n    <h4 data-bind=\"visible: (title.length > 0) && data.showPageTitles, text: koNo() + processedTitle, css: $root.css.pageTitle\"></h4>\n    <!-- ko foreach: { data: rows, as: 'row'} -->\n    <div class=\"svd_question_container\" data-bind=\"visible: row.koVisible, css: $root.css.row\">\n        <!-- ko foreach: { data: row.questions, as: 'question' , afterRender: row.koAfterRender } -->\n            <div data-bind=\"visible: question.koIsDragging\">\n                <!-- ko template: { if: $root.koDraggingSource(), name: 'survey-question', data: $root.koDraggingSource(), as: 'question', templateOptions: { isDragging: true } } -->\n                <!-- /ko -->\n            </div>\n            <!-- ko template: { name: 'survey-question', data: question, templateOptions: { isDragging: false } } -->\n            <!-- /ko -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <div class=\"well\" data-bind=\"visible:$root.isDesignMode && questions.length == 0\">\n        <span data-bind=\"visible: !koDraggingBottom(), text:$root.getEditorLocString('survey.dropQuestion')\"></span>\n        <div data-bind=\"visible: koDraggingBottom\">\n            <!-- ko template: { if: $root.koDraggingSource(), name: 'survey-question', data: $root.koDraggingSource(), as: 'question', templateOptions: { isDragging: true } } -->\n            <!-- /ko -->\n        </div>\n    </div>\n    <div data-bind=\"visible: questions.length > 0 && koDraggingBottom()\">\n        <!-- ko template: { if: $root.koDraggingSource(), name: 'survey-question', data: $root.koDraggingSource(), as: 'question', templateOptions: { isDragging: true } } -->\n        <!-- /ko -->\n    </div>\n</div>";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd_question\" style=\"vertical-align:top\" data-bind=\"style: {display: question.koVisible()|| $root.isDesignMode ? 'inline-block': 'none', marginLeft: question.koMarginLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth },\n     attr : {id: id, draggable: $root.isDesignMode}, click: $root.isDesignMode ? koOnClick: null, \n         event:{\n           keydown: function(el, e) { if(e.witch == 46) $root.deleteCurrentObjectClick(); return true; },\n           dragstart:function(el, e){ dragStart(e); return true; },\n           dragover:function(el, e){ if(!question.isDragging) dragOver(e);},\n           dragend:function(el, e){ dragEnd(e);},\n           drop:function(el, e){ dragDrop(e);}\n         }, css:{svd_q_design_border: $root.isDesignMode, svd_q_selected : koIsSelected, 'well well-sm': $root.isDesignMode}\">\n    <div data-bind=\"css:{svd_q_design: $root.isDesignMode}, style:{opacity: question.koIsDraggingSource() ? 0.4 : 1}\">\n        <div class=\"alert alert-danger\" role=\"alert\" data-bind=\"visible: koErrors().length > 0, foreach: koErrors\">\n            <div>\n                <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                <span data-bind=\"text:$data.getText()\"></span>\n            </div>\n        </div>\n        <!-- ko if: question.hasTitle -->\n        <h5 data-bind=\"visible: $root.questionTitleLocation == 'top', text: question.koTitle(), css: $root.css.question.title\"></h5>\n        <!-- /ko -->\n        <!-- ko template: { name: 'survey-question-errors', data: question } -->\n        <!-- /ko -->\n        <!-- ko template: { name: question.koTemplateName(), data: question, afterRender: question.koQuestionAfterRender } -->\n        <!-- /ko -->\n        <div data-bind=\"visible: question.hasComment\">\n            <div data-bind=\"text:question.commentText\"></div>\n            <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': true } }\"></div>\n        </div>\n        <!-- ko if: question.hasTitle -->\n        <h5 data-bind=\"visible: $root.questionTitleLocation == 'bottom', text: question.koTitle(), css: $root.css.question.title\"></h5>\n        <!-- /ko -->\n    </div>\n\n    <div class=\"svd_question_menu\" data-bind=\"visible: koIsSelected\">\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" class=\"btn btn-primary  btn-xs\" data-bind=\"click: $root.editQuestionClick\"><span>Edit</span></button>\n            <button type=\"button\" class=\"btn btn-primary  btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"glyphicon glyphicon-option-horizontal\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li>\n                    <button class=\"btn btn-primary btn-xs\" data-bind=\"click: $root.copyQuestionClick, text:$root.getEditorLocString('survey.addToToolbox')\"></button>\n                </li>\n                <li>\n                    <button class=\"btn btn-primary btn-xs\" data-bind=\"click: $root.fastCopyQuestionClick, text:$root.getEditorLocString('survey.copy')\"></button>\n                </li>\n                <li>\n                    <button class=\"btn btn-primary btn-xs\" data-bind=\"click: $root.deleteCurrentObjectClick, text:$root.getEditorLocString('survey.deleteQuestion')\"></button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(33) + "\n" + __webpack_require__(34) + "\n" + __webpack_require__(35) + "\n" + __webpack_require__(36) + "\n" + __webpack_require__(37) + "\n" + __webpack_require__(56) + "\n" + __webpack_require__(54) + "\n" + __webpack_require__(53) + "\n" + __webpack_require__(55) + "\n" + __webpack_require__(38) + "\n" + __webpack_require__(39) + "\n" + __webpack_require__(41) + "\n" + __webpack_require__(40) + "\n" + __webpack_require__(42) + "\n" + __webpack_require__(43) + "\n" + __webpack_require__(44) + "\n" + __webpack_require__(45) + "\n" + __webpack_require__(46) + "\n" + __webpack_require__(47) + "\n" + __webpack_require__(48) + "\n" + __webpack_require__(49) + "\n" + __webpack_require__(50) + "\n" + __webpack_require__(51) + "\n" + __webpack_require__(52) + "";

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dragdrophelper__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return __WEBPACK_IMPORTED_MODULE_3__dragdrophelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorBase", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyStringPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDropdownPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBooleanPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNumberPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyTextItemsEditor__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTextItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyTextItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyItemsEditor__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyItemValuesEditor__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemValuesEditor", function() { return __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyItemValuesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyMatrixDropdownColumnsEditor__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDropdownColumnsEditor", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyMatrixDropdownColumnsEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyMatrixDropdownColumnsItem", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyMatrixDropdownColumnsEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyModalEditor__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyModalEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyModalEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyRestfullEditor__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyResultfullEditor", function() { return __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyRestfullEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyTriggersEditor__ = __webpack_require__(30);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__undoredo__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyUndoRedo", function() { return __WEBPACK_IMPORTED_MODULE_26__undoredo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoItem", function() { return __WEBPACK_IMPORTED_MODULE_26__undoredo__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__editor__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEditor", function() { return __WEBPACK_IMPORTED_MODULE_27__editor__["a"]; });
// styles


global["jQuery"] = __WEBPACK_IMPORTED_MODULE_1_jquery__;



























/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(31)))

/***/ }),
/* 61 */
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZGYzMmRlOWJkNTVmYTc5MTRhOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1rbm9ja291dFwiLFwiY29tbW9uanNcIjpcInN1cnZleS1rbm9ja291dFwiLFwiYW1kXCI6XCJzdXJ2ZXkta25vY2tvdXRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvckxvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlJdGVtc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5SGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHRXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzb241LnRzIiwid2VicGFjazovLy8uL3NyYy9kcmFnZHJvcGhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdFZlcmJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uVG9vbGJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5RW1iZWRpbmdXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleU9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZG9yZWRvLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5UmVzdGZ1bGxFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRleHRJdGVtc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VHJpZ2dlcnNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYm9vdHN0cmFwXCIsXCJjb21tb25qczJcIjpcImJvb3RzdHJhcFwiLFwiY29tbW9uanNcIjpcImJvb3RzdHJhcFwiLFwiYW1kXCI6XCJib290c3RyYXBcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvanNvbmVkaXRvci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvb2JqZWN0ZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9vYmplY3R2ZXJicy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcGFnZWVkaXRvci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWJvb2xlYW4uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1kcm9wZG93bi5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWV4cHJlc3Npb24uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1odG1sLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItaXRlbXZhbHVlcy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1ucy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1vZGFsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbnVtYmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItcmVzdGZ1bGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1zdHJpbmcuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10ZXh0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dGl0ZW1zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdmFsaWRhdG9ycy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLWNvbnRlbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9ydGFiLWdlbmVyYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3N1cnZleWVtYmVkaW5nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy5zdXJ2ZXkvdGVtcGxhdGVfcGFnZS5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMuc3VydmV5L3RlbXBsYXRlX3F1ZXN0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9lbnRyeS5odG1sIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlKU09ORWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7OztBQ0FPLElBQUksa0JBQWtCLEdBQUc7SUFDNUIsYUFBYSxFQUFFLEVBQUU7SUFDakIsT0FBTyxFQUFFLEVBQUU7SUFDWCxTQUFTLEVBQUUsVUFBVSxPQUFlLEVBQUUsTUFBcUI7UUFBckIsc0NBQXFCO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsY0FBYyxDQUFD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LGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyRyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztJQUNMLENBQUM7SUFDTyw0Q0FBaUIsR0FBekIsVUFBMEIsSUFBWSxFQUFFLE1BQWE7UUFDakQsSUFBSSxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQXNCLENBQUM7UUFDbEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksVUFBVSxHQUF1QixFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDN0ksV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDOztBQXhGaUIsa0NBQWlCLEdBQVcsSUFBSSxDQUFDIiwiZmlsZSI6Ii4vcGFja2FnZS9zdXJ2ZXllZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSwgcmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImJvb3RzdHJhcFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUVkaXRvclwiLCBbXCJrbm9ja291dFwiLCBcInN1cnZleS1rbm9ja291dFwiLCBcImpxdWVyeVwiLCBcImJvb3RzdHJhcFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlFZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSwgcmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImJvb3RzdHJhcFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5RWRpdG9yXCJdID0gZmFjdG9yeShyb290W1wia29cIl0sIHJvb3RbXCJTdXJ2ZXlcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJib290c3RyYXBcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWRmMzJkZTliZDU1ZmE3OTE0YTkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImtvXCIsXCJjb21tb25qczJcIjpcImtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwia25vY2tvdXRcIixcImFtZFwiOlwia25vY2tvdXRcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwic3VydmV5LWtub2Nrb3V0XCIsXCJhbWRcIjpcInN1cnZleS1rbm9ja291dFwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIGVkaXRvckxvY2FsaXphdGlvbiA9IHtcbiAgICBjdXJyZW50TG9jYWxlOiBcIlwiLFxuICAgIGxvY2FsZXM6IHt9LFxuICAgIGdldFN0cmluZzogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmICghbG9jYWxlKSBsb2NhbGUgPSB0aGlzLmN1cnJlbnRMb2NhbGU7XG4gICAgICAgIHZhciBsb2MgPSBsb2NhbGUgPyB0aGlzLmxvY2FsZXNbbG9jYWxlXSA6IGRlZmF1bHRTdHJpbmdzO1xuICAgICAgICBpZiAoIWxvYykgbG9jID0gZGVmYXVsdFN0cmluZ3M7XG4gICAgICAgIHZhciBwYXRoID0gc3RyTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgb2JqID0gbG9jO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYyA9PT0gZGVmYXVsdFN0cmluZ3MpIHJldHVybiBwYXRoW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZyhzdHJOYW1lLCBcImVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eU5hbWU6IGZ1bmN0aW9uIChzdHJOYW1lOiBzdHJpbmcsIGxvY2FsOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmdldFByb3BlcnR5KHN0ck5hbWUsIGxvY2FsKTtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBvYmpbXCJuYW1lXCJdO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgZ2V0UHJvcGVydHlUaXRsZTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0UHJvcGVydHkoc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqW1widGl0bGVcIl0pIHJldHVybiBvYmpbXCJ0aXRsZVwiXTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0U3RyaW5nKFwicC5cIiArIHN0ck5hbWUsIGxvY2FsKTtcbiAgICAgICAgaWYgKG9iaiAhPT0gc3RyTmFtZSkgcmV0dXJuIG9iajtcbiAgICAgICAgdmFyIHBvcyA9IHN0ck5hbWUuaW5kZXhPZignXycpO1xuICAgICAgICBpZiAocG9zIDwgLTEpIHJldHVybiBvYmo7XG4gICAgICAgIHN0ck5hbWUgPSBzdHJOYW1lLnN1YnN0cihwb3MgKyAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKFwicC5cIiArIHN0ck5hbWUsIGxvY2FsKTtcbiAgICB9LFxuICAgIGdldExvY2FsZXM6IGZ1bmN0aW9uICgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICByZXMucHVzaChcIlwiKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbn07XG5cbmV4cG9ydCB2YXIgZGVmYXVsdFN0cmluZ3MgPSB7XG4gICAgLy9zdXJ2ZXkgdGVtcGxhdGVzXG4gICAgc3VydmV5OiB7XG4gICAgICAgIGRyb3BRdWVzdGlvbjogXCJQbGVhc2UgZHJvcCBhIHF1ZXN0aW9uIGhlcmUuXCIsXG4gICAgICAgIGNvcHk6IFwiQ29weVwiLFxuICAgICAgICBhZGRUb1Rvb2xib3g6IFwiQWRkIHRvIHRvb2xib3hcIixcbiAgICAgICAgZGVsZXRlUXVlc3Rpb246IFwiRGVsZXRlIFF1ZXN0aW9uXCJcbiAgICB9LFxuICAgIC8vcXVlc3Rpb25UeXBlc1xuICAgIHF0OiB7XG4gICAgICAgIGNoZWNrYm94OiBcIkNoZWNrYm94XCIsXG4gICAgICAgIGNvbW1lbnQ6IFwiQ29tbWVudFwiLFxuICAgICAgICBkcm9wZG93bjogXCJEcm9wZG93blwiLFxuICAgICAgICBmaWxlOiBcIkZpbGVcIixcbiAgICAgICAgaHRtbDogXCJIdG1sXCIsXG4gICAgICAgIG1hdHJpeDogXCJNYXRyaXggKHNpbmdsZSBjaG9pY2UpXCIsXG4gICAgICAgIG1hdHJpeGRyb3Bkb3duOiBcIk1hdHJpeCAobXVsdGlwbGUgY2hvaWNlKVwiLFxuICAgICAgICBtYXRyaXhkeW5hbWljOiBcIk1hdHJpeCAoZHluYW1pYyByb3dzKVwiLFxuICAgICAgICBtdWx0aXBsZXRleHQ6IFwiTXVsdGlwbGUgVGV4dFwiLFxuICAgICAgICByYWRpb2dyb3VwOiBcIlJhZGlvZ3JvdXBcIixcbiAgICAgICAgcmF0aW5nOiBcIlJhdGluZ1wiLFxuICAgICAgICB0ZXh0OiBcIlNpbmdsZSBJbnB1dFwiXG4gICAgfSxcbiAgICAvL1N0cmluZ3MgaW4gRWRpdG9yXG4gICAgZWQ6IHtcbiAgICAgICAgYWRkTmV3UGFnZTogXCJBZGQgTmV3IFBhZ2VcIixcbiAgICAgICAgbmV3UGFnZU5hbWU6IFwicGFnZVwiLFxuICAgICAgICBuZXdRdWVzdGlvbk5hbWU6IFwicXVlc3Rpb25cIixcbiAgICAgICAgdGVzdFN1cnZleTogXCJUZXN0IFN1cnZleVwiLFxuICAgICAgICB0ZXN0U3VydmV5QWdhaW46IFwiVGVzdCBTdXJ2ZXkgQWdhaW5cIixcbiAgICAgICAgdGVzdFN1cnZleVdpZHRoOiBcIlN1cnZleSB3aWR0aDogXCIsXG4gICAgICAgIGVtYmVkU3VydmV5OiBcIkVtYmVkIFN1cnZleVwiLFxuICAgICAgICBzYXZlU3VydmV5OiBcIlNhdmUgU3VydmV5XCIsXG4gICAgICAgIGRlc2lnbmVyOiBcIlN1cnZleSBEZXNpZ25lclwiLFxuICAgICAgICBqc29uRWRpdG9yOiBcIkpTT04gRWRpdG9yXCIsXG4gICAgICAgIHVuZG86IFwiVW5kb1wiLFxuICAgICAgICByZWRvOiBcIlJlZG9cIixcbiAgICAgICAgb3B0aW9uczogXCJPcHRpb25zXCIsXG4gICAgICAgIGdlbmVyYXRlVmFsaWRKU09OOiBcIkdlbmVyYXRlIFZhbGlkIEpTT05cIixcbiAgICAgICAgZ2VuZXJhdGVSZWFkYWJsZUpTT046IFwiR2VuZXJhdGUgUmVhZGFibGUgSlNPTlwiLFxuICAgICAgICB0b29sYm94OiBcIlRvb2xib3hcIixcbiAgICAgICAgZGVsU2VsT2JqZWN0OiBcIkRlbGV0ZSBzZWxlY3RlZCBvYmplY3RcIixcbiAgICAgICAgY29ycmVjdEpTT046IFwiUGxlYXNlIGNvcnJlY3QgSlNPTi5cIixcbiAgICAgICAgc3VydmV5UmVzdWx0czogXCJTdXJ2ZXkgUmVzdWx0OiBcIlxuICAgIH0sXG4gICAgLy9Qcm9wZXJ0eSBFZGl0b3JzXG4gICAgcGU6IHtcbiAgICAgICAgYXBwbHk6IFwiQXBwbHlcIixcbiAgICAgICAgb2s6IFwiT0tcIixcbiAgICAgICAgY2FuY2VsOiBcIkNhbmNlbFwiLFxuICAgICAgICByZXNldDogXCJSZXNldFwiLFxuICAgICAgICBjbG9zZTogXCJDbG9zZVwiLFxuICAgICAgICBkZWxldGU6IFwiRGVsZXRlXCIsXG4gICAgICAgIGFkZE5ldzogXCJBZGQgTmV3XCIsXG4gICAgICAgIHJlbW92ZUFsbDogXCJSZW1vdmUgQWxsXCIsXG4gICAgICAgIGVkaXQ6IFwiRWRpdFwiLFxuICAgICAgICBlbXB0eTogXCI8ZW1wdHk+XCIsXG4gICAgICAgIGZhc3RFbnRyeTogXCJGYXN0IEVudHJ5XCIsXG4gICAgICAgIGZvcm1FbnRyeTogXCJGb3JtIEVudHJ5XCIsXG4gICAgICAgIHRlc3RTZXJ2aWNlOiBcIlRlc3QgdGhlIHNlcnZpY2VcIixcbiAgICAgICAgZXhwcmVzc2lvbkhlbHA6IFwiUGxlYXNlIGVudGVyIGEgYm9vbGVhbiBleHByZXNzaW9uLiBJdCBzaG91bGQgcmV0dXJuIHRydWUgdG8ga2VlcCB0aGUgcXVlc3Rpb24vcGFnZSB2aXNpYmxlLiBGb3IgZXhhbXBsZToge3F1ZXN0aW9uMX0gPSAndmFsdWUxJyBvciAoe3F1ZXN0aW9uMn0gPSAzIGFuZCB7cXVlc3Rpb24zfSA8IDUpXCIsXG5cbiAgICAgICAgcHJvcGVydHlJc0VtcHR5OiBcIlBsZWFzZSBlbnRlciB2YWx1ZSBpbnRvIHRoZSBwcm9wZXJ0eVwiLFxuICAgICAgICB2YWx1ZTogXCJWYWx1ZVwiLFxuICAgICAgICB0ZXh0OiBcIlRleHRcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiUmVxdWlyZWQ/XCIsXG4gICAgICAgIGNvbHVtbkVkaXQ6IFwiRWRpdCBjb2x1bW46IHswfVwiLFxuICAgICAgICBcbiAgICAgICAgaGFzT3RoZXI6IFwiSGFzIG90aGVyIGl0ZW1cIixcbiAgICAgICAgbmFtZTogXCJOYW1lXCIsXG4gICAgICAgIHRpdGxlOiBcIlRpdGxlXCIsXG4gICAgICAgIGNlbGxUeXBlOiBcIkNlbGwgdHlwZVwiLFxuICAgICAgICBjb2xDb3VudDogXCJDb2x1bW4gY291bnRcIixcbiAgICAgICAgY2hvaWNlc09yZGVyOiBcIlNlbGVjdCBjaG9pY2VzIG9yZGVyXCIsXG4gICAgICAgIHZpc2libGU6IFwiSXMgdmlzaWJsZT9cIixcbiAgICAgICAgaXNSZXF1aXJlZDogXCJJcyByZXF1aXJlZD9cIixcbiAgICAgICAgc3RhcnRXaXRoTmV3TGluZTogXCJJcyBzdGFydCB3aXRoIG5ldyBsaW5lP1wiLFxuICAgICAgICByb3dzOiBcIlJvdyBjb3VudFwiLFxuICAgICAgICBwbGFjZUhvbGRlcjogXCJJbnB1dCBwbGFjZSBob2xkZXJcIixcbiAgICAgICAgc2hvd1ByZXZpZXc6IFwiSXMgaW1hZ2UgcHJldmlldyBzaG93bj9cIixcbiAgICAgICAgc3RvcmVEYXRhQXNUZXh0OiBcIlN0b3JlIGZpbGUgY29udGVudCBpbiBKU09OIHJlc3VsdCBhcyB0ZXh0XCIsXG4gICAgICAgIG1heFNpemU6IFwiTWF4aW11bSBmaWxlIHNpemUgaW4gYnl0ZXNcIixcbiAgICAgICAgaW1hZ2VIZWlnaHQ6IFwiSW1hZ2UgaGVpZ2h0XCIsXG4gICAgICAgIGltYWdlV2lkdGg6IFwiSW1hZ2Ugd2lkdGhcIixcbiAgICAgICAgcm93Q291bnQ6IFwiUm93IGNvdW50XCIsIFxuICAgICAgICBhZGRSb3dUZXh0OiBcIkFkZCByb3cgYnV0dG9uIHRleHRcIiwgXG4gICAgICAgIHJlbW92ZVJvd1RleHQ6IFwiUmVtb3ZlIHJvdyBidXR0b24gdGV4dFwiLFxuICAgICAgICBtaW5SYXRlRGVzY3JpcHRpb246IFwiTWluaW11bSByYXRlIGRlc2NyaXB0aW9uXCIsIFxuICAgICAgICBtYXhSYXRlRGVzY3JpcHRpb246IFwiTWF4aW11bSByYXRlIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIGlucHV0VHlwZTogXCJJbnB1dCB0eXBlXCIsXG4gICAgICAgIG9wdGlvbnNDYXB0aW9uOiBcIk9wdGlvbnMgY2FwdGlvblwiLFxuXG4gICAgICAgIHFFZGl0b3JUaXRsZTogXCJFZGl0IHF1ZXN0aW9uOiB7MH1cIixcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgICAgZ2VuZXJhbDogXCJHZW5lcmFsXCIsXG4gICAgICAgICAgICBmaWxlT3B0aW9uczogXCJPcHRpb25zXCIsXG4gICAgICAgICAgICBodG1sOiBcIkh0bWwgRWRpdG9yXCIsXG4gICAgICAgICAgICBjb2x1bW5zOiBcIkNvbHVtbnNcIixcbiAgICAgICAgICAgIHJvd3M6IFwiUm93c1wiLFxuICAgICAgICAgICAgY2hvaWNlczogXCJDaG9pY2VzXCIsXG4gICAgICAgICAgICB2aXNpYmxlSWY6IFwiVmlzaWJsZSBJZlwiLFxuICAgICAgICAgICAgcmF0ZVZhbHVlczogXCJSYXRlIFZhbHVlc1wiLFxuICAgICAgICAgICAgY2hvaWNlc0J5VXJsOiBcIkNob2ljZXMgZnJvbSBXZWJcIixcbiAgICAgICAgICAgIG1hdHJpeENob2ljZXM6IFwiRGVmYXVsdCBDaG9pY2VzXCIsXG4gICAgICAgICAgICBtdWx0aXBsZVRleHRJdGVtczogXCJUZXh0IElucHV0c1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAgZWRpdFByb3BlcnR5OiBcIkVkaXQgcHJvcGVydHkgJ3swfSdcIixcbiAgICAgICAgaXRlbXM6IFwiWyBJdGVtczogezB9IF1cIixcblxuICAgICAgICBlbnRlck5ld1ZhbHVlOiBcIlBsZWFzZSwgZW50ZXIgdGhlIHZhbHVlLlwiLFxuICAgICAgICBub3F1ZXN0aW9uczogXCJUaGVyZSBpcyBubyBhbnkgcXVlc3Rpb24gaW4gdGhlIHN1cnZleS5cIixcbiAgICAgICAgY3JlYXRldHJpZ2dlcjogXCJQbGVhc2UgY3JlYXRlIGEgdHJpZ2dlclwiLFxuICAgICAgICB0cmlnZ2VyT246IFwiT24gXCIsXG4gICAgICAgIHRyaWdnZXJNYWtlUGFnZXNWaXNpYmxlOiBcIk1ha2UgcGFnZXMgdmlzaWJsZTpcIixcbiAgICAgICAgdHJpZ2dlck1ha2VRdWVzdGlvbnNWaXNpYmxlOiBcIk1ha2UgcXVlc3Rpb25zIHZpc2libGU6XCIsXG4gICAgICAgIHRyaWdnZXJDb21wbGV0ZVRleHQ6IFwiQ29tcGxldGUgdGhlIHN1cnZleSBpZiBzdWNjZWVkLlwiLFxuICAgICAgICB0cmlnZ2VyTm90U2V0OiBcIlRoZSB0cmlnZ2VyIGlzIG5vdCBzZXRcIixcbiAgICAgICAgdHJpZ2dlclJ1bklmOiBcIlJ1biBpZlwiLFxuICAgICAgICB0cmlnZ2VyU2V0VG9OYW1lOiBcIkNoYW5nZSB2YWx1ZSBvZjogXCIsXG4gICAgICAgIHRyaWdnZXJTZXRWYWx1ZTogXCJ0bzogXCIsXG4gICAgICAgIHRyaWdnZXJJc1ZhcmlhYmxlOiBcIkRvIG5vdCBwdXQgdGhlIHZhcmlhYmxlIGludG8gdGhlIHN1cnZleSByZXN1bHQuXCIsXG4gICAgICAgIHZlcmJDaGFuZ2VUeXBlOiBcIkNoYW5nZSB0eXBlIFwiLFxuICAgICAgICB2ZXJiQ2hhbmdlUGFnZTogXCJDaGFuZ2UgcGFnZSBcIlxuICAgIH0sXG4gICAgLy9PcGVyYXRvcnNcbiAgICBvcDoge1xuICAgICAgICBlbXB0eTogXCJpcyBlbXB0eVwiLFxuICAgICAgICBub3RlbXB0eTogXCJpcyBub3QgZW1wdHlcIixcbiAgICAgICAgZXF1YWw6IFwiZXF1YWxzXCIsXG4gICAgICAgIG5vdGVxdWFsOiBcIm5vdCBlcXVhbHNcIixcbiAgICAgICAgY29udGFpbnM6IFwiY29udGFpbnNcIixcbiAgICAgICAgbm90Y29udGFpbnM6IFwibm90IGNvbnRhaW5zXCIsXG4gICAgICAgIGdyZWF0ZXI6IFwiZ3JlYXRlclwiLFxuICAgICAgICBsZXNzOiBcImxlc3NcIixcbiAgICAgICAgZ3JlYXRlcm9yZXF1YWw6IFwiZ3JlYXRlciBvciBlcXVhbHNcIixcbiAgICAgICAgbGVzc29yZXF1YWw6IFwiTGVzcyBvciBFcXVhbHNcIlxuICAgIH0sXG4gICAgLy9FbWJlZCB3aW5kb3dcbiAgICBldzoge1xuICAgICAgICBhbmd1bGFyOiBcIlVzZSBBbmd1bGFyIHZlcnNpb25cIixcbiAgICAgICAganF1ZXJ5OiBcIlVzZSBqUXVlcnkgdmVyc2lvblwiLFxuICAgICAgICBrbm9ja291dDogXCJVc2UgS25vY2tvdXQgdmVyc2lvblwiLFxuICAgICAgICByZWFjdDogXCJVc2UgUmVhY3QgdmVyc2lvblwiLFxuICAgICAgICB2dWU6IFwiVXNlIFZ1ZSB2ZXJzaW9uXCIsXG4gICAgICAgIGJvb3RzdHJhcDogXCJGb3IgYm9vdHN0cmFwIGZyYW1ld29ya1wiLFxuICAgICAgICBzdGFuZGFyZDogXCJObyBib290c3RyYXBcIixcbiAgICAgICAgc2hvd09uUGFnZTogXCJTaG93IHN1cnZleSBvbiBhIHBhZ2VcIixcbiAgICAgICAgc2hvd0luV2luZG93OiBcIlNob3cgc3VydmV5IGluIGEgd2luZG93XCIsXG4gICAgICAgIGxvYWRGcm9tU2VydmVyOiBcIkxvYWQgU3VydmV5IEpTT04gZnJvbSBzZXJ2ZXJcIixcbiAgICAgICAgdGl0bGVTY3JpcHQ6IFwiU2NyaXB0cyBhbmQgc3R5bGVzXCIsXG4gICAgICAgIHRpdGxlSHRtbDogXCJIVE1MXCIsXG4gICAgICAgIHRpdGxlSmF2YVNjcmlwdDogXCJKYXZhU2NyaXB0XCJcbiAgICB9LFxuICAgIC8vUHJvcGVydGllc1xuICAgIHA6IHtcbiAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgIHRpdGxlOiB7IG5hbWU6IFwidGl0bGVcIiwgdGl0bGU6IFwiTGVhdmUgaXQgZW1wdHksIGlmIGl0IGlzIHRoZSBzYW1lIGFzICdOYW1lJ1wiIH0sXG4gICAgICAgIHN1cnZleV90aXRsZTogeyBuYW1lOiBcInRpdGxlXCIsIHRpdGxlOiBcIkl0IHdpbGwgYmUgc2hvd24gb24gZXZlcnkgcGFnZS5cIiB9LFxuICAgICAgICBwYWdlX3RpdGxlOiB7IG5hbWU6IFwidGl0bGVcIiwgdGl0bGU6IFwiUGFnZSB0aXRsZVwiIH1cbiAgICB9XG59O1xuXG5lZGl0b3JMb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZGVmYXVsdFN0cmluZ3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvckxvY2FsaXphdGlvbi50cyIsImV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3RbXCJhc3NpZ25cIl0gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzcywgYmFzZUNsYXNzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiYXNlQ2xhc3MpIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzczsgfVxuICAgIHRoaXNDbGFzcy5wcm90b3R5cGUgPSBiYXNlQ2xhc3MgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcykgOiAoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9oZWxwZXJzLnRzIiwiZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0RWRpdG9yOiBzdHJpbmcgPSBcInN0cmluZ1wiO1xuICAgIHByaXZhdGUgc3RhdGljIGVkaXRvclJlZ2lzdGVyZWRMaXN0ID0ge307XG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckVkaXRvcihuYW1lOiBzdHJpbmcsIGNyZWF0b3I6ICgpID0+IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSkge1xuICAgICAgICBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbbmFtZV0gPSBjcmVhdG9yO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVkaXRvcihlZGl0b3JUeXBlOiBzdHJpbmcsIGZ1bmM6IChuZXdWYWx1ZTogYW55KSA9PiBhbnkpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgICAgICB2YXIgY3JlYXRvciA9IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5lZGl0b3JSZWdpc3RlcmVkTGlzdFtlZGl0b3JUeXBlXTtcbiAgICAgICAgaWYgKCFjcmVhdG9yKSBjcmVhdG9yID0gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmVkaXRvclJlZ2lzdGVyZWRMaXN0W1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5kZWZhdWx0RWRpdG9yXTtcbiAgICAgICAgdmFyIHByb3BlcnR5RWRpdG9yID0gY3JlYXRvcigpO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci5vbkNoYW5nZWQgPSBmdW5jO1xuICAgICAgICByZXR1cm4gcHJvcGVydHlFZGl0b3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWx1ZV86IGFueSA9IG51bGw7XG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IG51bGw7XG4gICAgcHVibGljIG9uQ2hhbmdlZDogKG5ld1ZhbHVlOiBhbnkpID0+IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHRocm93IFwiZWRpdG9yVHlwZSBpcyBub3QgZGVmaW5lZFwiOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHsgcmV0dXJuIHZhbHVlOyB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy52YWx1ZV87IH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldENvcnJlY3RlZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodmFsdWUpO1xuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRWYWx1ZUNvcmUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlXyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VGl0bGUodmFsdWU6IHN0cmluZykgeyB9XG4gICAgcHVibGljIHNldE9iamVjdCh2YWx1ZTogYW55KSB7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHsgIHJldHVybiB2YWx1ZTsgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlTdHJpbmdQcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzdHJpbmdcIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZHJvcGRvd25cIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJib29sZWFuXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJudW1iZXJcIjsgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJzdHJpbmdcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJkcm9wZG93blwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlEcm9wZG93blByb3BlcnR5RWRpdG9yKCk7IH0pO1xuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiYm9vbGVhblwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlCb29sZWFuUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJudW1iZXJcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2UudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcbiAgICBwdWJsaWMga29JdGVtczogYW55O1xuICAgIHB1YmxpYyBvbkRlbGV0ZUNsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uTW92ZVVwQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25Nb3ZlRG93bkNsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uQWRkQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25DbGVhckNsaWNrOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmtvSXRlbXMucmVtb3ZlKGl0ZW0pOyB9O1xuICAgICAgICBzZWxmLm9uQ2xlYXJDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYua29JdGVtcy5yZW1vdmVBbGwoKTsgfTtcbiAgICAgICAgc2VsZi5vbkFkZENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLkFkZEl0ZW0oKTsgfTtcbiAgICAgICAgc2VsZi5vbk1vdmVVcENsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5tb3ZlVXAoaXRlbSk7IH07XG4gICAgICAgIHNlbGYub25Nb3ZlRG93bkNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5tb3ZlRG93bihpdGVtKTsgfTtcbiAgICB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGxlbiA9IHZhbHVlID8gdmFsdWUubGVuZ3RoIDogMDtcbiAgICAgICAgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5pdGVtc1wiKVtcImZvcm1hdFwiXShsZW4pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q29ycmVjdGVkVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgQWRkSXRlbSgpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zLnB1c2godGhpcy5jcmVhdGVOZXdFZGl0b3JJdGVtKCkpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgbW92ZVVwKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIgYXJyID0gdGhpcy5rb0l0ZW1zKCk7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPCAxKSByZXR1cm47XG4gICAgICAgIGFycltpbmRleF0gPSBhcnJbaW5kZXggLSAxXTtcbiAgICAgICAgYXJyW2luZGV4IC0gMV0gPSBpdGVtO1xuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG1vdmVEb3duKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIgYXJyID0gdGhpcy5rb0l0ZW1zKCk7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGFyci5sZW5ndGggLSAxKSByZXR1cm47XG4gICAgICAgIGFycltpbmRleF0gPSBhcnJbaW5kZXggKyAxXTtcbiAgICAgICAgYXJyW2luZGV4ICsgMV0gPSBpdGVtO1xuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvSXRlbXModGhpcy5nZXRJdGVtc0Zyb21WYWx1ZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNGcm9tVmFsdWUodmFsdWU6IGFueSA9IG51bGwpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIGlmKCF2YWx1ZSkgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlRWRpdG9ySXRlbSh2YWx1ZVtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB2YXIgaW50ZXJuYWxJdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludGVybmFsSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oaW50ZXJuYWxJdGVtc1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VmFsdWVDb3JlKGl0ZW1zKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgdGhyb3cgXCJPdmVycmlkZSAnY3JlYXRlTmV3RWRpdG9ySXRlbScgbWV0aG9kXCI7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkgeyAgcmV0dXJuIGVkaXRvckl0ZW07ICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yLnRzIiwiaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGVudW0gT2JqVHlwZSB7IFVua25vd24sIFN1cnZleSwgUGFnZSwgUXVlc3Rpb24gfVxuZXhwb3J0IGNsYXNzIFN1cnZleUhlbHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdQYWdlTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UGFnZU5hbWVcIikpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE5ld1F1ZXN0aW9uTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UXVlc3Rpb25OYW1lXCIpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdOYW1lKG9ianM6IEFycmF5PGFueT4sIGJhc2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgaGFzaCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hbb2Jqc1tpXS5uYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG51bSA9IDE7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoIWhhc2hbYmFzZU5hbWUgKyBudW0udG9TdHJpbmcoKV0pIGJyZWFrO1xuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2VOYW1lICsgbnVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0VHlwZShvYmo6IGFueSk6IE9ialR5cGUge1xuICAgICAgICBpZiAoIW9iaiB8fCAhb2JqW1wiZ2V0VHlwZVwiXSkgcmV0dXJuIE9ialR5cGUuVW5rbm93bjtcbiAgICAgICAgaWYgKG9iai5nZXRUeXBlKCkgPT0gXCJwYWdlXCIpIHJldHVybiBPYmpUeXBlLlBhZ2U7XG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09IFwic3VydmV5XCIpIHJldHVybiBPYmpUeXBlLlN1cnZleTtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBPYmpUeXBlLlF1ZXN0aW9uO1xuICAgICAgICByZXR1cm4gT2JqVHlwZS5Vbmtub3duO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE9iamVjdE5hbWUob2JqOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAob2JqW1wibmFtZVwiXSkgcmV0dXJuIG9ialtcIm5hbWVcIl07XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgIT0gT2JqVHlwZS5QYWdlKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIGRhdGEgPSA8U3VydmV5LlN1cnZleT4oPFN1cnZleS5QYWdlPm9iaikuZGF0YTtcbiAgICAgICAgdmFyIGluZGV4ID0gZGF0YS5wYWdlcy5pbmRleE9mKDxTdXJ2ZXkuUGFnZT5vYmopO1xuICAgICAgICByZXR1cm4gXCJbUGFnZSBcIiArIChpbmRleCArIDEpICsgXCJdXCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0UHJvcGVydHl9IGZyb20gXCIuL29iamVjdFByb3BlcnR5XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0RWRpdG9yIHtcbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0VmFsdWU6IGFueTtcbiAgICBwdWJsaWMgcHJvcGVydHlFZGl0b3JPcHRpb25zOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBrb1Byb3BlcnRpZXM6IGFueTtcbiAgICBwdWJsaWMga29BY3RpdmVQcm9wZXJ0eTogYW55O1xuICAgIHB1YmxpYyBrb0hhc09iamVjdDogYW55O1xuICAgIHB1YmxpYyBvblByb3BlcnR5VmFsdWVDaGFuZ2VkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5T2JqZWN0RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5T2JqZWN0RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJvcGVydHlFZGl0b3JPcHRpb25zOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhwcm9wZXJ0eUVkaXRvck9wdGlvbnMpO1xuICAgICAgICB0aGlzLmtvUHJvcGVydGllcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29IYXNPYmplY3QgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRPYmplY3QoKTogYW55IHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPYmplY3RWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWRPYmplY3QodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9iamVjdFZhbHVlID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMua29IYXNPYmplY3QodmFsdWUgIT0gbnVsbCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzT2JqZWN0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRPcHRpb25zKHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55KSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3JPcHRpb25zID0gcHJvcGVydHlFZGl0b3JPcHRpb25zO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHlFZGl0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5rb1Byb3BlcnRpZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllc1tpXS5uYW1lID09IG5hbWUpIHJldHVybiBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlQWN0aXZlUHJvcGVydHkocHJvcGVydHk6IFN1cnZleU9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgfVxuICAgIHB1YmxpYyBPYmplY3RDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZE9iamVjdCB8fCAhdGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLmtvUHJvcGVydGllcyhbXSk7XG4gICAgICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKHRoaXMuc2VsZWN0ZWRPYmplY3QuZ2V0VHlwZSgpKTtcbiAgICAgICAgcHJvcGVydGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID09IGIubmFtZSkgcmV0dXJuIDA7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvYmplY3RQcm9wZXJ0aWVzID0gW107XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHByb3BFdmVudCA9IChwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHksIG5ld1ZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZC5maXJlKHRoaXMsIHsgcHJvcGVydHk6IHByb3BlcnR5LnByb3BlcnR5LCBvYmplY3Q6IHByb3BlcnR5Lm9iamVjdCwgbmV3VmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5TaG93UHJvcGVydHkocHJvcGVydGllc1tpXSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIG9iamVjdFByb3BlcnR5ID0gbmV3IFN1cnZleU9iamVjdFByb3BlcnR5KHByb3BlcnRpZXNbaV0sIHByb3BFdmVudCwgdGhpcy5wcm9wZXJ0eUVkaXRvck9wdGlvbnMpO1xuICAgICAgICAgICAgdmFyIGxvY05hbWUgPSB0aGlzLnNlbGVjdGVkT2JqZWN0LmdldFR5cGUoKSArICdfJyArIHByb3BlcnRpZXNbaV0ubmFtZTtcbiAgICAgICAgICAgIG9iamVjdFByb3BlcnR5LmRpc3BsYXlOYW1lID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFByb3BlcnR5TmFtZShsb2NOYW1lKTtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRQcm9wZXJ0eVRpdGxlKGxvY05hbWUpO1xuICAgICAgICAgICAgaWYgKCF0aXRsZSkgdGl0bGUgPSBvYmplY3RQcm9wZXJ0eS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIG9iamVjdFByb3BlcnR5LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0aWVzLnB1c2gob2JqZWN0UHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzKG9iamVjdFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkodGhpcy5nZXRQcm9wZXJ0eUVkaXRvcihcIm5hbWVcIikpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY2FuU2hvd1Byb3BlcnR5KHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBuYW1lID0gcHJvcGVydHkubmFtZTtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3F1ZXN0aW9ucycgfHwgbmFtZSA9PSAncGFnZXMnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spIHJldHVybiB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sodGhpcy5zZWxlY3RlZE9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5rb1Byb3BlcnRpZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzW2ldLm9iamVjdCA9IHRoaXMuc2VsZWN0ZWRPYmplY3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdEVkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgcHVibGljIG9iamVjdDogYW55O1xuICAgIHB1YmxpYyB0aXRsZTogYW55O1xuICAgIHB1YmxpYyBvbkFwcGx5Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5vbkFwcGx5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYXBwbHkoKTsgfTtcbiAgICAgICAgc2VsZi5vblJlc2V0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYucmVzZXQoKTsgfTtcbiAgICB9XG4gICAgcHVibGljIHNldFRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy50aXRsZSh2YWx1ZSk7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkgeyB9XG4gICAgcHJpdmF0ZSByZXNldCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRPYmplY3QodmFsdWU6IGFueSkgeyB0aGlzLm9iamVjdCA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBpc0VkaXRhYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5vbkJlZm9yZUFwcGx5KCk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZWQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRleHRFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcbiAgICBwdWJsaWMga29WYWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInRleHRcIjsgfVxuICAgIHB1YmxpYyBnZXQgaXNFZGl0YWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHN0ciA9IHZhbHVlO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZSh0aGlzLmtvVmFsdWUoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlIdG1sRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImh0bWxcIjsgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlFeHByZXNzaW9uRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImV4cHJlc3Npb25cIjsgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0ZXh0XCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VGV4dEVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImh0bWxcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlIdG1sRWRpdG9yKCk7IH0pO1xuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiZXhwcmVzc2lvblwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eUV4cHJlc3Npb25FZGl0b3IoKTsgfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TW9kYWxFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eSwgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzfSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzXCI7XG5pbXBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93IHtcbiAgICBrb1Zpc2libGU6IGFueTtcbiAgICBrb0VkaXRvcjogYW55O1xuICAgIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtvVmlzaWJsZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvRWRpdG9yID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICB9XG4gICAgcHVibGljIHNob3cocXVlc3Rpb25CYXNlOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBvbkNoYW5nZWQ6IChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkgPT4gYW55KSB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3IocXVlc3Rpb25CYXNlLCB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spO1xuICAgICAgICBlZGl0b3Iub25DaGFuZ2VkID0gb25DaGFuZ2VkXG4gICAgICAgIHRoaXMua29FZGl0b3IoZWRpdG9yKTtcbiAgICAgICAgdGhpcy5rb1Zpc2libGUodHJ1ZSk7XG4gICAgICAgIGpRdWVyeShcIiNzdXJ2ZXlxdWVzdGlvbmVkaXRvcndpbmRvd1wiKS5tb2RhbChcInNob3dcIik7XG4gICAgICAgIGVkaXRvci5vbkhpZGVXaW5kb3cgPSBmdW5jdGlvbigpIHtqUXVlcnkoXCIjc3VydmV5cXVlc3Rpb25lZGl0b3J3aW5kb3dcIikubW9kYWwoXCJoaWRlXCIpO307XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25Qcm9wZXJ0aWVzIHtcbiAgICBwcml2YXRlIHByb3BlcnRpZXM6IEFycmF5PFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHk+O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbikge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKHRoaXMub2JqLmdldFR5cGUoKSk7IFxuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5IHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNbaV0ubmFtZSA9PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayh0aGlzLm9iaiwgcHJvcGVydHkpKSBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0gXG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvciB7XG4gICAgcHJvdGVjdGVkIHByb3BlcnRpZXM6IFN1cnZleVF1ZXN0aW9uUHJvcGVydGllcztcbiAgICBwdWJsaWMgb25DaGFuZ2VkOiAob2JqOiBTdXJ2ZXkuQmFzZSkgPT4gYW55O1xuICAgIHB1YmxpYyBvbkhpZGVXaW5kb3c6ICgpPT4gYW55O1xuICAgIHB1YmxpYyBvbk9rQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25BcHBseUNsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uUmVzZXRDbGljazogYW55O1xuICAgIGtvVGFiczogYW55OyBrb0FjdGl2ZVRhYjogYW55OyBrb1RpdGxlOiBhbnk7XG4gICAgb25UYWJDbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbiwgcHVibGljIGNsYXNzTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmKCF0aGlzLmNsYXNzTmFtZSkgdGhpcy5jbGFzc05hbWUgPSB0aGlzLm9iai5nZXRUeXBlKCk7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBTdXJ2ZXlRdWVzdGlvblByb3BlcnRpZXMob2JqLCBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKTtcbiAgICAgICAgc2VsZi5vbkFwcGx5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYXBwbHkoKTsgfTtcbiAgICAgICAgc2VsZi5vbk9rQ2xpY2sgPSBmdW5jdGlvbigpIHtzZWxmLmFwcGx5KCk7IGlmKCFzZWxmLmhhc0Vycm9yKCkgJiYgc2VsZi5vbkhpZGVXaW5kb3cpIHNlbGYub25IaWRlV2luZG93KCk7IH07XG4gICAgICAgIHNlbGYub25SZXNldENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnJlc2V0KCk7IH07XG4gICAgICAgIHRoaXMub25UYWJDbGljayA9IGZ1bmN0aW9uICh0YWIpIHsgc2VsZi5rb0FjdGl2ZVRhYih0YWIubmFtZSk7IH07XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5idWlsZFRhYnMoKTtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVRhYiA9IGtvLm9ic2VydmFibGUodGFic1swXS5uYW1lKTtcbiAgICAgICAgdGhpcy5rb1RhYnMgPSBrby5vYnNlcnZhYmxlQXJyYXkodGFicyk7XG4gICAgICAgIHRoaXMua29UaXRsZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgaWYodGhpcy5vYmpbXCJuYW1lXCJdKSB7XG4gICAgICAgICAgICB0aGlzLmtvVGl0bGUoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnFFZGl0b3JUaXRsZVwiKVtcImZvcm1hdFwiXSh0aGlzLm9ialtcIm5hbWVcIl0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5rb1RhYnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFic1tpXS5oYXNFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rb0FjdGl2ZVRhYih0YWJzW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB2YXIgdGFicyA9IHRoaXMua29UYWJzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFic1tpXS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IoKSkgcmV0dXJuO1xuICAgICAgICB2YXIgdGFicyA9IHRoaXMua29UYWJzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFic1tpXS5hcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZWQodGhpcy5vYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgYnVpbGRUYWJzKCk6IEFycmF5PFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZT4ge1xuICAgICAgICB2YXIgdGFicyA9IFtdO1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzKHRoaXMub2JqLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0UHJvcGVydGllcyh0aGlzLmNsYXNzTmFtZSksIHRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayk7XG4gICAgICAgIHRhYnMucHVzaChuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJHZW5lcmFsKHRoaXMub2JqLCBwcm9wZXJ0aWVzKSk7XG4gICAgICAgIHRoaXMuYWRkUHJvcGVydGllc1RhYnModGFicyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFic1tpXS5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrID0gdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJzO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZFByb3BlcnRpZXNUYWJzKHRhYnM6IEFycmF5PFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZT4pIHtcbiAgICAgICAgdmFyIHRhYk5hbWVzID0gU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldFRhYnModGhpcy5jbGFzc05hbWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYk5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFiSXRlbSA9IHRhYk5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmdldFByb3BlcnR5KHRhYkl0ZW0ubmFtZSk7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBlZGl0b3JUYWIgPSBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJQcm9wZXJ0eSh0aGlzLm9iaiwgcHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKHRhYkl0ZW0udGl0bGUpIGVkaXRvclRhYi50aXRsZSA9IHRhYkl0ZW0udGl0bGU7XG4gICAgICAgICAgICB0YWJzLnB1c2goZWRpdG9yVGFiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZSB7XG4gICAgcHJpdmF0ZSB0aXRsZVZhbHVlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIm5hbWVcIjsgfVxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpdGxlVmFsdWUpIHJldHVybiB0aGlzLnRpdGxlVmFsdWU7XG4gICAgICAgIHZhciBzdHIgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudGFicy5cIiArIHRoaXMubmFtZSk7XG4gICAgICAgIHJldHVybiBzdHIgPyBzdHIgOiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykgeyB0aGlzLnRpdGxlVmFsdWUgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaHRtbFRlbXBsYXRlKCk6IHN0cmluZyB7IHJldHVybiBcInF1ZXN0aW9uZWRpdG9ydGFiLVwiICsgdGhpcy5uYW1lOyB9XG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZU9iamVjdCgpOiBhbnkgeyByZXR1cm4gdGhpczsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIHJlc2V0KCkgeyB9XG4gICAgcHVibGljIGFwcGx5KCkgeyB9XG4gICAgcHJvdGVjdGVkIGdldFZhbHVlKHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KTogYW55IHtcbiAgICAgICAgaWYgKHByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiBwcm9wZXJ0eS5nZXRWYWx1ZSh0aGlzLm9iaik7XG4gICAgICAgIHJldHVybiB0aGlzLm9ialtwcm9wZXJ0eS5uYW1lXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkdlbmVyYWwgZXh0ZW5kcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgcHJvcGVydGllczogU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllcyA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcyA/IHByb3BlcnRpZXMgOiBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllcyhvYmosIFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5nZXRQcm9wZXJ0aWVzKG9iai5nZXRUeXBlKCkpLCBudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcImdlbmVyYWxcIjsgfVxuICAgIHB1YmxpYyBnZXQgaHRtbFRlbXBsYXRlKCk6IHN0cmluZyB7IHJldHVybiBcInF1ZXN0aW9uZWRpdG9ydGFiLWdlbmVyYWxcIjsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucHJvcGVydGllcy5oYXNFcnJvcigpOyB9IFxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLnJlc2V0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLmFwcGx5KCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJQcm9wZXJ0eSBleHRlbmRzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZSB7XG4gICAgcHJpdmF0ZSBwcm9wZXJ0eUVkaXRvclZhbHVlOiBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlID0gPFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3I+U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmNyZWF0ZUVkaXRvcih0aGlzLnByb3BlcnR5LnR5cGUsIG51bGwpO1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWUudmFsdWUgPSB0aGlzLmdldFZhbHVlKHRoaXMucHJvcGVydHkpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucHJvcGVydHkubmFtZTsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucHJvcGVydHlFZGl0b3IuaGFzRXJyb3IoKTsgfVxuICAgIHB1YmxpYyBnZXQgaHRtbFRlbXBsYXRlKCk6IHN0cmluZyB7IHJldHVybiBcInByb3BlcnR5ZWRpdG9yY29udGVudC1cIiArIHRoaXMucHJvcGVydHkudHlwZTsgfVxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGVPYmplY3QoKTogYW55IHsgcmV0dXJuIHRoaXMucHJvcGVydHlFZGl0b3I7IH1cbiAgICBwdWJsaWMgZ2V0IHByb3BlcnR5RWRpdG9yKCk6IFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3IgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlOyB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWUudmFsdWUgPSB0aGlzLmdldFZhbHVlKHRoaXMucHJvcGVydHkpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3IuYXBwbHkoKTtcbiAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eS5uYW1lXSA9IHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZS52YWx1ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvci50cyIsImltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5jbGFzcyBUZXh0UGFyc2VyUHJvcGVyeSB7XG4gICAgaXNGb3VuZDogYm9vbGVhbjtcbiAgICBwcm9wZXJ0aWVzQ291bnQ6IG51bWJlcjtcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xuICAgIHZhbHVlU3RhcnQ6IG51bWJlcjtcbiAgICB2YWx1ZUVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5VGV4dFdvcmtlciB7XG4gICAgcHVibGljIHN0YXRpYyBuZXdMaW5lQ2hhcjogc3RyaW5nO1xuICAgIHB1YmxpYyBlcnJvcnM6IEFycmF5PGFueT47XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBwcml2YXRlIGpzb25WYWx1ZTogYW55O1xuICAgIHByaXZhdGUgc3VydmV5T2JqZWN0czogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIGlzU3VydmV5QXNQYWdlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRleHQ6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudGV4dCB8fCB0aGlzLnRleHQudHJpbSgpID09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IFwie31cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLnByb2Nlc3MoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIGdldCBpc0pzb25Db3JyZWN0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZSAhPSBudWxsOyB9XG4gICAgcHJvdGVjdGVkIHByb2Nlc3MoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmpzb25WYWx1ZSA9IG5ldyBTdXJ2ZXlKU09ONSgxKS5wYXJzZSh0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7IHBvczogeyBzdGFydDogZXJyb3IuYXQsIGVuZDogLTEgfSwgdGV4dDogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5qc29uVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVKc29uUG9zaXRpb25zKHRoaXMuanNvblZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSBuZXcgU3VydmV5LlN1cnZleSh0aGlzLmpzb25WYWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5VmFsdWUuanNvbkVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLnN1cnZleVZhbHVlLmpzb25FcnJvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goeyBwb3M6IHsgc3RhcnQ6IGVycm9yLmF0LCBlbmQ6IC0xIH0sIHRleHQ6IGVycm9yLmdldEZ1bGxEZXNjcmlwdGlvbigpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMgPSB0aGlzLmNyZWF0ZVN1cnZleU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5zZXRFZGl0b3JQb3NpdGlvbkJ5Q2hhcnRBdCh0aGlzLnN1cnZleU9iamVjdHMpO1xuICAgICAgICB0aGlzLnNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KHRoaXMuZXJyb3JzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVKc29uUG9zaXRpb25zKGpzb25PYmo6IGFueSkge1xuICAgICAgICBqc29uT2JqW1wicG9zXCJdW1wic2VsZlwiXSA9IGpzb25PYmo7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uT2JqKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0ganNvbk9ialtrZXldO1xuICAgICAgICAgICAgaWYgKG9iaiAmJiBvYmpbXCJwb3NcIl0pIHtcbiAgICAgICAgICAgICAgICBqc29uT2JqW1wicG9zXCJdW2tleV0gPSBvYmpbXCJwb3NcIl07XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVKc29uUG9zaXRpb25zKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVTdXJ2ZXlPYmplY3RzKCk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIHRoaXMuaXNTdXJ2ZXlBc1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5VmFsdWUucGFnZXNbaV07XG4gICAgICAgICAgICBpZiAoaSA9PSAwICYmICFwYWdlW1wicG9zXCJdKSB7XG4gICAgICAgICAgICAgICAgcGFnZVtcInBvc1wiXSA9IHRoaXMuc3VydmV5VmFsdWVbXCJwb3NcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1cnZleUFzUGFnZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYWdlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFnZS5xdWVzdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYWdlLnF1ZXN0aW9uc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRFZGl0b3JQb3NpdGlvbkJ5Q2hhcnRBdChvYmplY3RzOiBhbnlbXSkge1xuICAgICAgICBpZiAob2JqZWN0cyA9PSBudWxsIHx8IG9iamVjdHMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0geyByb3c6IDAsIGNvbHVtbjogMCB9O1xuICAgICAgICB2YXIgYXRPYmplY3RzQXJyYXkgPSB0aGlzLmdldEF0QXJyYXkob2JqZWN0cyk7XG4gICAgICAgIHZhciBzdGFydEF0OiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0T2JqZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXQgPSBhdE9iamVjdHNBcnJheVtpXS5hdDtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3N0aW9uQnlDaGFydEF0KHBvc2l0aW9uLCBzdGFydEF0LCBhdCk7XG4gICAgICAgICAgICB2YXIgb2JqID0gYXRPYmplY3RzQXJyYXlbaV0ub2JqO1xuICAgICAgICAgICAgaWYgKCFvYmoucG9zaXRpb24pIG9iai5wb3NpdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGF0ID09IG9iai5wb3Muc3RhcnQpIHtcbiAgICAgICAgICAgICAgICBvYmoucG9zaXRpb24uc3RhcnQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0ID09IG9iai5wb3MuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi5lbmQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydEF0ID0gYXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRQb3N0aW9uQnlDaGFydEF0KHN0YXJ0UG9zaXRpb246IGFueSwgc3RhcnRBdDogbnVtYmVyLCBhdDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgcm93OiBzdGFydFBvc2l0aW9uLnJvdywgY29sdW1uOiBzdGFydFBvc2l0aW9uLmNvbHVtbiB9O1xuICAgICAgICB2YXIgY3VyQ2hhciA9IHN0YXJ0QXQ7XG4gICAgICAgIHdoaWxlIChjdXJDaGFyIDwgYXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQuY2hhckF0KGN1ckNoYXIpID09IFN1cnZleVRleHRXb3JrZXIubmV3TGluZUNoYXIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucm93Kys7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbHVtbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb2x1bW4rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1ckNoYXIrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEF0QXJyYXkob2JqZWN0czogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gb2JqZWN0c1tpXTtcbiAgICAgICAgICAgIHZhciBwb3MgPSBvYmoucG9zO1xuICAgICAgICAgICAgaWYgKCFwb3MpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBhdDogcG9zLnN0YXJ0LCBvYmo6IG9iaiB9KTtcbiAgICAgICAgICAgIGlmIChwb3MuZW5kID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgYXQ6IHBvcy5lbmQsIG9iajogb2JqIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQuc29ydCgoZWwxLCBlbDIpID0+IHtcbiAgICAgICAgICAgIGlmIChlbDEuYXQgPiBlbDIuYXQpIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKGVsMS5hdCA8IGVsMi5hdCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dFdvcmtlci50cyIsIi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBKU09ONSwgaHR0cDovL2pzb241Lm9yZy9cbi8vIFRoZSBtb2RpZmljYXRpb24gZm9yIGdldHRpbmcgb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGxvY2F0aW9uICdhdCcgd2VyZSBtYWRlbi5cblxuZXhwb3J0IGNsYXNzIFN1cnZleUpTT041IHtcbiAgICBwdWJsaWMgc3RhdGljIHBvc2l0aW9uTmFtZSA9IFwicG9zXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZXNjYXBlZSA9IHtcbiAgICAgICAgXCInXCI6IFwiJ1wiLFxuICAgICAgICAnXCInOiAnXCInLFxuICAgICAgICAnXFxcXCc6ICdcXFxcJyxcbiAgICAgICAgJy8nOiAnLycsXG4gICAgICAgICdcXG4nOiAnJywgICAgICAgLy8gUmVwbGFjZSBlc2NhcGVkIG5ld2xpbmVzIGluIHN0cmluZ3Mgdy8gZW1wdHkgc3RyaW5nXG4gICAgICAgIGI6ICdcXGInLFxuICAgICAgICBmOiAnXFxmJyxcbiAgICAgICAgbjogJ1xcbicsXG4gICAgICAgIHI6ICdcXHInLFxuICAgICAgICB0OiAnXFx0J1xuICAgIH07XG4gICAgcHJpdmF0ZSBzdGF0aWMgd3MgPSBbXG4gICAgICAgICcgJyxcbiAgICAgICAgJ1xcdCcsXG4gICAgICAgICdcXHInLFxuICAgICAgICAnXFxuJyxcbiAgICAgICAgJ1xcdicsXG4gICAgICAgICdcXGYnLFxuICAgICAgICAnXFx4QTAnLFxuICAgICAgICAnXFx1RkVGRidcbiAgICBdO1xuICAgIHByaXZhdGUgZW5kQXQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGF0OiBudW1iZXI7ICAgICAvLyBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgY2hhcmFjdGVyXG4gICAgcHJpdmF0ZSBjaDogYW55OyAgICAgLy8gVGhlIGN1cnJlbnQgY2hhcmFjdGVyXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXJzZVR5cGU6IG51bWJlcjsgLy8gMCAtIHN0YWRhcmQsIDEgLSBnZXQgaW5mb3JtYXRpb24gYWJvdXQgb2JqZWN0cywgMiAtIGdldCBpbmZvcm1hdGlvbiBhYm91dCBhbGwgcHJvcGVydGllc1xuICAgIGNvbnN0cnVjdG9yKHBhcnNlVHlwZTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLnBhcnNlVHlwZSA9IHBhcnNlVHlwZTtcbiAgICB9XG4gICAgcHVibGljIHBhcnNlKHNvdXJjZTogYW55LCByZXZpdmVyOiBhbnkgPSBudWxsLCBzdGFydEZyb206IG51bWJlciA9IDAsIGVuZEF0OiBudW1iZXIgPSAtMSk6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gU3RyaW5nKHNvdXJjZSk7XG4gICAgICAgIHRoaXMuYXQgPSBzdGFydEZyb207XG4gICAgICAgIHRoaXMuZW5kQXQgPSBlbmRBdDtcbiAgICAgICAgdGhpcy5jaCA9ICcgJztcbiAgICAgICAgcmVzdWx0ID0gdGhpcy52YWx1ZSgpO1xuICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgIGlmICh0aGlzLmNoKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiU3ludGF4IGVycm9yXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLFxuICAgICAgICAvLyBwYXNzaW5nIGVhY2ggbmFtZS92YWx1ZSBwYWlyIHRvIHRoZSByZXZpdmVyIGZ1bmN0aW9uIGZvciBwb3NzaWJsZVxuICAgICAgICAvLyB0cmFuc2Zvcm1hdGlvbiwgc3RhcnRpbmcgd2l0aCBhIHRlbXBvcmFyeSByb290IG9iamVjdCB0aGF0IGhvbGRzIHRoZSByZXN1bHRcbiAgICAgICAgLy8gaW4gYW4gZW1wdHkga2V5LiBJZiB0aGVyZSBpcyBub3QgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSBzaW1wbHkgcmV0dXJuIHRoZVxuICAgICAgICAvLyByZXN1bHQuXG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXZpdmVyID09PSAnZnVuY3Rpb24nID8gKGZ1bmN0aW9uIHdhbGsoaG9sZGVyLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBrLCB2LCB2YWx1ZSA9IGhvbGRlcltrZXldO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB3YWxrKHZhbHVlLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXZpdmVyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSAoeyAnJzogcmVzdWx0IH0sICcnKSkgOiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZXJyb3IobTogc3RyaW5nKSB7XG4gICAgICAgIC8vIENhbGwgZXJyb3Igd2hlbiBzb21ldGhpbmcgaXMgd3JvbmcuXG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBTeW50YXhFcnJvcigpO1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gbTtcbiAgICAgICAgZXJyb3JbXCJhdFwiXSA9IHRoaXMuYXQ7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBwcml2YXRlIG5leHQoYzogYW55ID0gbnVsbCkge1xuICAgICAgICAvLyBJZiBhIGMgcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB2ZXJpZnkgdGhhdCBpdCBtYXRjaGVzIHRoZSBjdXJyZW50IGNoYXJhY3Rlci5cbiAgICAgICAgaWYgKGMgJiYgYyAhPT0gdGhpcy5jaCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkV4cGVjdGVkICdcIiArIGMgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyB0aGlzLmNoICsgXCInXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgdGhpcy5uZXh0IGNoYXJhY3Rlci4gV2hlbiB0aGVyZSBhcmUgbm8gbW9yZSBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyByZXR1cm4gdGhlIGVtcHR5IHN0cmluZy5cbiAgICAgICAgdGhpcy5jaCA9IHRoaXMuY2hhcnRBdCgpO1xuICAgICAgICB0aGlzLmF0ICs9IDE7XG4gICAgICAgIHJldHVybiB0aGlzLmNoO1xuICAgIH1cbiAgICBwcml2YXRlIHBlZWsoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdGhpcy5uZXh0IGNoYXJhY3RlciB3aXRob3V0IGNvbnN1bWluZyBpdCBvclxuICAgICAgICAvLyBhc3NpZ25pbmcgaXQgdG8gdGhlIHRoaXMuY2ggdmFyYWlibGUuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0QXQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGFydEF0KCkge1xuICAgICAgICBpZiAodGhpcy5lbmRBdCA+IC0xICYmIHRoaXMuYXQgPj0gdGhpcy5lbmRBdCkgcmV0dXJuICcnO1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmF0KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCkge1xuICAgICAgICAvLyBQYXJzZSBhbiBpZGVudGlmaWVyLiBOb3JtYWxseSwgcmVzZXJ2ZWQgd29yZHMgYXJlIGRpc2FsbG93ZWQgaGVyZSwgYnV0IHdlXG4gICAgICAgIC8vIG9ubHkgdXNlIHRoaXMgZm9yIHVucXVvdGVkIG9iamVjdCBrZXlzLCB3aGVyZSByZXNlcnZlZCB3b3JkcyBhcmUgYWxsb3dlZCxcbiAgICAgICAgLy8gc28gd2UgZG9uJ3QgY2hlY2sgZm9yIHRob3NlIGhlcmUuIFJlZmVyZW5jZXM6XG4gICAgICAgIC8vIC0gaHR0cDovL2VzNS5naXRodWIuY29tLyN4Ny42XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vQ29yZV9KYXZhU2NyaXB0XzEuNV9HdWlkZS9Db3JlX0xhbmd1YWdlX0ZlYXR1cmVzI1ZhcmlhYmxlc1xuICAgICAgICAvLyAtIGh0dHA6Ly9kb2NzdG9yZS5taWsudWEvb3JlbGx5L3dlYnByb2cvanNjcmlwdC9jaDAyXzA3Lmh0bVxuICAgICAgICAvLyBUT0RPIElkZW50aWZpZXJzIGNhbiBoYXZlIFVuaWNvZGUgXCJsZXR0ZXJzXCIgaW4gdGhlbTsgYWRkIHN1cHBvcnQgZm9yIHRob3NlLlxuICAgICAgICB2YXIga2V5ID0gdGhpcy5jaDtcblxuICAgICAgICAvLyBJZGVudGlmaWVycyBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIF8gb3IgJC5cbiAgICAgICAgaWYgKCh0aGlzLmNoICE9PSAnXycgJiYgdGhpcy5jaCAhPT0gJyQnKSAmJlxuICAgICAgICAgICAgKHRoaXMuY2ggPCAnYScgfHwgdGhpcy5jaCA+ICd6JykgJiZcbiAgICAgICAgICAgICh0aGlzLmNoIDwgJ0EnIHx8IHRoaXMuY2ggPiAnWicpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmFkIGlkZW50aWZpZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdWJzZXF1ZW50IGNoYXJhY3RlcnMgY2FuIGNvbnRhaW4gZGlnaXRzLlxuICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkgJiYgKFxuICAgICAgICB0aGlzLmNoID09PSAnXycgfHwgdGhpcy5jaCA9PT0gJyQnIHx8XG4gICAgICAgICh0aGlzLmNoID49ICdhJyAmJiB0aGlzLmNoIDw9ICd6JykgfHxcbiAgICAgICAgKHRoaXMuY2ggPj0gJ0EnICYmIHRoaXMuY2ggPD0gJ1onKSB8fFxuICAgICAgICAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpKSkge1xuICAgICAgICAgICAga2V5ICs9IHRoaXMuY2g7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICBwcml2YXRlIG51bWJlcigpIHtcblxuICAgICAgICAvLyBQYXJzZSBhIG51bWJlciB2YWx1ZS5cblxuICAgICAgICB2YXIgbnVtYmVyLFxuICAgICAgICAgICAgc2lnbiA9ICcnLFxuICAgICAgICAgICAgc3RyaW5nID0gJycsXG4gICAgICAgICAgICBiYXNlID0gMTA7XG5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICctJyB8fCB0aGlzLmNoID09PSAnKycpIHtcbiAgICAgICAgICAgIHNpZ24gPSB0aGlzLmNoO1xuICAgICAgICAgICAgdGhpcy5uZXh0KHRoaXMuY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VwcG9ydCBmb3IgSW5maW5pdHkgKGNvdWxkIHR3ZWFrIHRvIGFsbG93IG90aGVyIHdvcmRzKTpcbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdJJykge1xuICAgICAgICAgICAgbnVtYmVyID0gdGhpcy53b3JkKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG51bWJlciAhPT0gJ251bWJlcicgfHwgaXNOYU4obnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1VuZXhwZWN0ZWQgd29yZCBmb3IgbnVtYmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHNpZ24gPT09ICctJykgPyAtbnVtYmVyIDogbnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VwcG9ydCBmb3IgTmFOXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnTicpIHtcbiAgICAgICAgICAgIG51bWJlciA9IHRoaXMud29yZCgpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignZXhwZWN0ZWQgd29yZCB0byBiZSBOYU4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlnbm9yZSBzaWduIGFzIC1OYU4gYWxzbyBpcyBOYU5cbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJzAnKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICd4JyB8fCB0aGlzLmNoID09PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBiYXNlID0gMTY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignT2N0YWwgbGl0ZXJhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChiYXNlKSB7XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5Jykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9ICcuJztcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMubmV4dCgpICYmIHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ2UnIHx8IHRoaXMuY2ggPT09ICdFJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLScgfHwgdGhpcy5jaCA9PT0gJysnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknIHx8IHRoaXMuY2ggPj0gJ0EnICYmIHRoaXMuY2ggPD0gJ0YnIHx8IHRoaXMuY2ggPj0gJ2EnICYmIHRoaXMuY2ggPD0gJ2YnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lnbiA9PT0gJy0nKSB7XG4gICAgICAgICAgICBudW1iZXIgPSAtc3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVtYmVyID0gK3N0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBudW1iZXJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc3RyaW5nKCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgc3RyaW5nIHZhbHVlLlxuXG4gICAgICAgIHZhciBoZXgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgc3RyaW5nID0gJycsXG4gICAgICAgICAgICBkZWxpbSwgICAgICAvLyBkb3VibGUgcXVvdGUgb3Igc2luZ2xlIHF1b3RlXG4gICAgICAgICAgICB1ZmZmZjtcblxuICAgICAgICAvLyBXaGVuIHBhcnNpbmcgZm9yIHN0cmluZyB2YWx1ZXMsIHdlIG11c3QgbG9vayBmb3IgJyBvciBcIiBhbmQgXFwgY2hhcmFjdGVycy5cblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1wiJyB8fCB0aGlzLmNoID09PSBcIidcIikge1xuICAgICAgICAgICAgZGVsaW0gPSB0aGlzLmNoO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09IGRlbGltKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1ZmZmZiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4ID0gcGFyc2VJbnQodGhpcy5uZXh0KCksIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmluaXRlKGhleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVmZmZmID0gdWZmZmYgKiAxNiArIGhleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVmZmZmKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBTdXJ2ZXlKU09ONS5lc2NhcGVlW3RoaXMuY2hdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN1cnZleUpTT041LmVzY2FwZWVbdGhpcy5jaF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5lc2NhcGVkIG5ld2xpbmVzIGFyZSBpbnZhbGlkOyBzZWU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2VlbWsvanNvbjUvaXNzdWVzLzI0XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gdGhpcyBmZWVscyBzcGVjaWFsLWNhc2VkOyBhcmUgdGhlcmUgb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YWxpZCB1bmVzY2FwZWQgY2hhcnM/XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiQmFkIHN0cmluZ1wiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbmxpbmVDb21tZW50KCkge1xuXG4gICAgICAgIC8vIFNraXAgYW4gaW5saW5lIGNvbW1lbnQsIGFzc3VtaW5nIHRoaXMgaXMgb25lLiBUaGUgY3VycmVudCBjaGFyYWN0ZXIgc2hvdWxkXG4gICAgICAgIC8vIGJlIHRoZSBzZWNvbmQgLyBjaGFyYWN0ZXIgaW4gdGhlIC8vIHBhaXIgdGhhdCBiZWdpbnMgdGhpcyBpbmxpbmUgY29tbWVudC5cbiAgICAgICAgLy8gVG8gZmluaXNoIHRoZSBpbmxpbmUgY29tbWVudCwgd2UgbG9vayBmb3IgYSBuZXdsaW5lIG9yIHRoZSBlbmQgb2YgdGhlIHRleHQuXG5cbiAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcvJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIk5vdCBhbiBpbmxpbmUgY29tbWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdcXG4nIHx8IHRoaXMuY2ggPT09ICdcXHInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0aGlzLmNoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBibG9ja0NvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhIGJsb2NrIGNvbW1lbnQsIGFzc3VtaW5nIHRoaXMgaXMgb25lLiBUaGUgY3VycmVudCBjaGFyYWN0ZXIgc2hvdWxkIGJlXG4gICAgICAgIC8vIHRoZSAqIGNoYXJhY3RlciBpbiB0aGUgLyogcGFpciB0aGF0IGJlZ2lucyB0aGlzIGJsb2NrIGNvbW1lbnQuXG4gICAgICAgIC8vIFRvIGZpbmlzaCB0aGUgYmxvY2sgY29tbWVudCwgd2UgbG9vayBmb3IgYW4gZW5kaW5nICovIHBhaXIgb2YgY2hhcmFjdGVycyxcbiAgICAgICAgLy8gYnV0IHdlIGFsc28gd2F0Y2ggZm9yIHRoZSBlbmQgb2YgdGV4dCBiZWZvcmUgdGhlIGNvbW1lbnQgaXMgdGVybWluYXRlZC5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJyonKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGEgYmxvY2sgY29tbWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPT09ICcqJykge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnKicpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuY2gpO1xuXG4gICAgICAgIHRoaXMuZXJyb3IoXCJVbnRlcm1pbmF0ZWQgYmxvY2sgY29tbWVudFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb21tZW50KCkge1xuXG4gICAgICAgIC8vIFNraXAgYSBjb21tZW50LCB3aGV0aGVyIGlubGluZSBvciBibG9jay1sZXZlbCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuXG4gICAgICAgIC8vIENvbW1lbnRzIGFsd2F5cyBiZWdpbiB3aXRoIGEgLyBjaGFyYWN0ZXIuXG5cbiAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcvJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIk5vdCBhIGNvbW1lbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5leHQoJy8nKTtcblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmlubGluZUNvbW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tDb21tZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiVW5yZWNvZ25pemVkIGNvbW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB3aGl0ZSgpIHtcblxuICAgICAgICAvLyBTa2lwIHdoaXRlc3BhY2UgYW5kIGNvbW1lbnRzLlxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UncmUgZGV0ZWN0aW5nIGNvbW1lbnRzIGJ5IG9ubHkgYSBzaW5nbGUgLyBjaGFyYWN0ZXIuXG4gICAgICAgIC8vIFRoaXMgd29ya3Mgc2luY2UgcmVndWxhciBleHByZXNzaW9ucyBhcmUgbm90IHZhbGlkIEpTT04oNSksIGJ1dCB0aGlzIHdpbGxcbiAgICAgICAgLy8gYnJlYWsgaWYgdGhlcmUgYXJlIG90aGVyIHZhbGlkIHZhbHVlcyB0aGF0IGJlZ2luIHdpdGggYSAvIGNoYXJhY3RlciFcblxuICAgICAgICB3aGlsZSAodGhpcy5jaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChTdXJ2ZXlKU09ONS53cy5pbmRleE9mKHRoaXMuY2gpID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgd29yZCgpOiBhbnkge1xuXG4gICAgICAgIC8vIHRydWUsIGZhbHNlLCBvciBudWxsLlxuXG4gICAgICAgIHN3aXRjaCAodGhpcy5jaCkge1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd1Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2YnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2EnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2wnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3MnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2UnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICduJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2wnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2wnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ0knOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnSScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnaScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnaScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgneScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnTicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnYScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnTicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcihcIlVuZXhwZWN0ZWQgJ1wiICsgdGhpcy5jaCArIFwiJ1wiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhcnJheSgpIHtcblxuICAgICAgICAvLyBQYXJzZSBhbiBhcnJheSB2YWx1ZS5cblxuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1snKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoJ1snKTtcbiAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5OyAgIC8vIFBvdGVudGlhbGx5IGVtcHR5IGFycmF5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEVTNSBhbGxvd3Mgb21pdHRpbmcgZWxlbWVudHMgaW4gYXJyYXlzLCBlLmcuIFssXSBhbmRcbiAgICAgICAgICAgICAgICAvLyBbLG51bGxdLiBXZSBkb24ndCBhbGxvdyB0aGlzIGluIEpTT041LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcIk1pc3NpbmcgYXJyYXkgZWxlbWVudFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHRoaXMudmFsdWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGNvbW1hIGFmdGVyIHRoaXMgdmFsdWUsIHRoaXMgbmVlZHMgdG9cbiAgICAgICAgICAgICAgICAvLyBiZSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCAhPT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnXScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnLCcpO1xuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiQmFkIGFycmF5XCIpO1xuICAgIH1cbiAgICBwcml2YXRlIG9iamVjdCgpIHtcblxuICAgICAgICAvLyBQYXJzZSBhbiBvYmplY3QgdmFsdWUuXG5cbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgaXNGaXJzdFByb3BlcnR5ID0gdHJ1ZSxcbiAgICAgICAgICAgIG9iamVjdCA9IHt9O1xuICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XG4gICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXSA9IHsgc3RhcnQ6IHRoaXMuYXQgLSAxIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICd7Jykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCd7Jyk7XG4gICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICBzdGFydCA9IHRoaXMuYXQgLSAxO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdLmVuZCA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnfScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0OyAgIC8vIFBvdGVudGlhbGx5IGVtcHR5IG9iamVjdFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEtleXMgY2FuIGJlIHVucXVvdGVkLiBJZiB0aGV5IGFyZSwgdGhleSBuZWVkIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gdmFsaWQgSlMgaWRlbnRpZmllcnMuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdcIicgfHwgdGhpcy5jaCA9PT0gXCInXCIpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldID0geyBzdGFydDogc3RhcnQsIHZhbHVlU3RhcnQ6IHRoaXMuYXQgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCc6Jyk7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSB0aGlzLnZhbHVlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMuYXQgLSAxO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLnZhbHVlRW5kID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0uZW5kID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGNvbW1hIGFmdGVyIHRoaXMgcGFpciwgdGhpcyBuZWVkcyB0byBiZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBlbmQgb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCAhPT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0udmFsdWVFbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0uZW5kLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV0uZW5kID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd9Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmlyc3RQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJywnKTtcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICAgICAgaXNGaXJzdFByb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBvYmplY3RcIik7XG4gICAgfVxuICAgIHByaXZhdGUgdmFsdWUoKTogYW55IHtcblxuICAgICAgICAvLyBQYXJzZSBhIEpTT04gdmFsdWUuIEl0IGNvdWxkIGJlIGFuIG9iamVjdCwgYW4gYXJyYXksIGEgc3RyaW5nLCBhIG51bWJlcixcbiAgICAgICAgLy8gb3IgYSB3b3JkLlxuXG4gICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3QoKTtcbiAgICAgICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycmF5KCk7XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZygpO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm51bWJlcigpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScgPyB0aGlzLm51bWJlcigpIDogdGhpcy53b3JkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlcGxhY2VyOiBhbnk7XG4gICAgcHJpdmF0ZSBpbmRlbnRTdHI6IHN0cmluZztcbiAgICBwcml2YXRlIG9ialN0YWNrO1xuXG4gICAgcHVibGljIHN0cmluZ2lmeShvYmo6IGFueSwgcmVwbGFjZXI6IGFueSA9IG51bGwsIHNwYWNlOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmIChyZXBsYWNlciAmJiAodHlwZW9mIChyZXBsYWNlcikgIT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpcy5pc0FycmF5KHJlcGxhY2VyKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVwbGFjZXIgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgICAgICB0aGlzLmluZGVudFN0ciA9IHRoaXMuZ2V0SW5kZW50KHNwYWNlKTtcbiAgICAgICAgdGhpcy5vYmpTdGFjayA9IFtdO1xuICAgICAgICAvLyBzcGVjaWFsIGNhc2UuLi53aGVuIHVuZGVmaW5lZCBpcyB1c2VkIGluc2lkZSBvZlxuICAgICAgICAvLyBhIGNvbXBvdW5kIG9iamVjdC9hcnJheSwgcmV0dXJuIG51bGwuXG4gICAgICAgIC8vIGJ1dCB3aGVuIHRvcC1sZXZlbCwgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB2YXIgdG9wTGV2ZWxIb2xkZXIgPSB7IFwiXCI6IG9iaiB9O1xuICAgICAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlcGxhY2VkVmFsdWVPclVuZGVmaW5lZCh0b3BMZXZlbEhvbGRlciwgJycsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RyaW5naWZ5KHRvcExldmVsSG9sZGVyLCAnJywgdHJ1ZSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SW5kZW50KHNwYWNlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoc3BhY2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3BhY2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZSA9PT0gXCJudW1iZXJcIiAmJiBzcGFjZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUluZGVudChcIiBcIiwgc3BhY2UsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFJlcGxhY2VkVmFsdWVPclVuZGVmaW5lZChob2xkZXI6IGFueSwga2V5OiBhbnksIGlzVG9wTGV2ZWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaG9sZGVyW2tleV07XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgdmFsdWUgd2l0aCBpdHMgdG9KU09OIHZhbHVlIGZpcnN0LCBpZiBwb3NzaWJsZVxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUudG9KU09OICYmIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0pTT04oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB1c2VyLXN1cHBsaWVkIHJlcGxhY2VyIGlmIGEgZnVuY3Rpb24sIGNhbGwgaXQuIElmIGl0J3MgYW4gYXJyYXksIGNoZWNrIG9iamVjdHMnIHN0cmluZyBrZXlzIGZvclxuICAgICAgICAvLyBwcmVzZW5jZSBpbiB0aGUgYXJyYXkgKHJlbW92aW5nIHRoZSBrZXkvdmFsdWUgcGFpciBmcm9tIHRoZSByZXN1bHRpbmcgSlNPTiBpZiB0aGUga2V5IGlzIG1pc3NpbmcpLlxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnJlcGxhY2VyKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlci5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXBsYWNlcikge1xuICAgICAgICAgICAgaWYgKGlzVG9wTGV2ZWwgfHwgdGhpcy5pc0FycmF5KGhvbGRlcikgfHwgdGhpcy5yZXBsYWNlci5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNXb3JkQ2hhcihjaGFyOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICd6JykgfHxcbiAgICAgICAgICAgIChjaGFyID49ICdBJyAmJiBjaGFyIDw9ICdaJykgfHxcbiAgICAgICAgICAgIChjaGFyID49ICcwJyAmJiBjaGFyIDw9ICc5JykgfHxcbiAgICAgICAgICAgIGNoYXIgPT09ICdfJyB8fCBjaGFyID09PSAnJCc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1dvcmRTdGFydChjaGFyOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICd6JykgfHxcbiAgICAgICAgICAgIChjaGFyID49ICdBJyAmJiBjaGFyIDw9ICdaJykgfHxcbiAgICAgICAgICAgIGNoYXIgPT09ICdfJyB8fCBjaGFyID09PSAnJCc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1dvcmQoa2V5OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzV29yZFN0YXJ0KGtleVswXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IDEsIGxlbmd0aCA9IGtleS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNXb3JkQ2hhcihrZXlbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBwb2x5ZmlsbHNcbiAgICBwcml2YXRlIGlzQXJyYXkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRGF0ZShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTmFOKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiB2YWwgIT09IHZhbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrRm9yQ2lyY3VsYXIob2JqOiBhbnkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9ialN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmpTdGFja1tpXSA9PT0gb2JqKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNvbnZlcnRpbmcgY2lyY3VsYXIgc3RydWN0dXJlIHRvIEpTT05cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBtYWtlSW5kZW50KHN0cjogc3RyaW5nLCBudW06IG51bWJlciwgbm9OZXdMaW5lOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGluZGVudGF0aW9uIG5vIG1vcmUgdGhhbiAxMCBjaGFyc1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRlbnQgPSBub05ld0xpbmUgPyBcIlwiIDogXCJcXG5cIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgaW5kZW50ICs9IHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRlbnQ7XG4gICAgfVxuXG4gICAgLy8gQ29waWVkIGZyb20gQ3Jva2ZvcmQncyBpbXBsZW1lbnRhdGlvbiBvZiBKU09OXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kb3VnbGFzY3JvY2tmb3JkL0pTT04tanMvYmxvYi9lMzlkYjRiN2U2MjQ5ZjA0YTE5NWU3ZGQwODQwZTYxMGNjOWU5NDFlL2pzb24yLmpzI0wxOTVcbiAgICAvLyBCZWdpblxuICAgIHByaXZhdGUgc3RhdGljIGN4ID0gL1tcXHUwMDAwXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZXNjYXBhYmxlID0gL1tcXFxcXFxcIlxceDAwLVxceDFmXFx4N2YtXFx4OWZcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcbiAgICBwcml2YXRlIHN0YXRpYyBtZXRhID0geyAvLyB0YWJsZSBvZiBjaGFyYWN0ZXIgc3Vic3RpdHV0aW9uc1xuICAgICAgICAnXFxiJzogJ1xcXFxiJyxcbiAgICAgICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICAgICAnXFxmJzogJ1xcXFxmJyxcbiAgICAgICAgJ1xccic6ICdcXFxccicsXG4gICAgICAgICdcIic6ICdcXFxcXCInLFxuICAgICAgICAnXFxcXCc6ICdcXFxcXFxcXCdcbiAgICB9O1xuICAgIHByaXZhdGUgZXNjYXBlU3RyaW5nKHN0cjogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gSWYgdGhlIHN0cmluZyBjb250YWlucyBubyBjb250cm9sIGNoYXJhY3RlcnMsIG5vIHF1b3RlIGNoYXJhY3RlcnMsIGFuZCBub1xuICAgICAgICAvLyBiYWNrc2xhc2ggY2hhcmFjdGVycywgdGhlbiB3ZSBjYW4gc2FmZWx5IHNsYXAgc29tZSBxdW90ZXMgYXJvdW5kIGl0LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgbXVzdCBhbHNvIHJlcGxhY2UgdGhlIG9mZmVuZGluZyBjaGFyYWN0ZXJzIHdpdGggc2FmZSBlc2NhcGVcbiAgICAgICAgLy8gc2VxdWVuY2VzLlxuICAgICAgICBTdXJ2ZXlKU09ONS5lc2NhcGFibGUubGFzdEluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIFN1cnZleUpTT041LmVzY2FwYWJsZS50ZXN0KHN0cikgPyAnXCInICsgc3RyLnJlcGxhY2UoU3VydmV5SlNPTjUuZXNjYXBhYmxlLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgdmFyIGMgPSBTdXJ2ZXlKU09ONS5tZXRhW2FdO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgYyA6XG4gICAgICAgICAgICAnXFxcXHUnICsgKCcwMDAwJyArIGEuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcbiAgICAgICAgfSkgKyAnXCInIDogJ1wiJyArIHN0ciArICdcIic7XG4gICAgfVxuICAgIC8vIEVuZFxuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbFN0cmluZ2lmeShob2xkZXI6IGFueSwga2V5OiBhbnksIGlzVG9wTGV2ZWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIGJ1ZmZlciwgcmVzO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIHZhbHVlLCBpZiBuZWNlc3NhcnlcbiAgICAgICAgdmFyIG9ial9wYXJ0ID0gdGhpcy5nZXRSZXBsYWNlZFZhbHVlT3JVbmRlZmluZWQoaG9sZGVyLCBrZXksIGlzVG9wTGV2ZWwpO1xuXG4gICAgICAgIGlmIChvYmpfcGFydCAmJiAhdGhpcy5pc0RhdGUob2JqX3BhcnQpKSB7XG4gICAgICAgICAgICAvLyB1bmJveCBvYmplY3RzXG4gICAgICAgICAgICAvLyBkb24ndCB1bmJveCBkYXRlcywgc2luY2Ugd2lsbCB0dXJuIGl0IGludG8gbnVtYmVyXG4gICAgICAgICAgICBvYmpfcGFydCA9IG9ial9wYXJ0LnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBvYmpfcGFydCkge1xuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqX3BhcnQudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgICAgIGlmIChpc05hTihvYmpfcGFydCkgfHwgIWlzRmluaXRlKG9ial9wYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpfcGFydC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXNjYXBlU3RyaW5nKG9ial9wYXJ0LnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgaWYgKG9ial9wYXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBcnJheShvYmpfcGFydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvckNpcmN1bGFyKG9ial9wYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gXCJbXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RhY2sucHVzaChvYmpfcGFydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpfcGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gdGhpcy5pbnRlcm5hbFN0cmluZ2lmeShvYmpfcGFydCwgaSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwibnVsbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBvYmpfcGFydC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGVudFN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIlxcblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoLCB0cnVlKSArIFwiXVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JDaXJjdWxhcihvYmpfcGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IFwie1wiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9uRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wdXNoKG9ial9wYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmpfcGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ial9wYXJ0Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5pbnRlcm5hbFN0cmluZ2lmeShvYmpfcGFydCwgcHJvcCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9wTGV2ZWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcEtleSA9IHRoaXMuaXNXb3JkKHByb3ApID8gcHJvcCA6IHRoaXMuZXNjYXBlU3RyaW5nKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gcHJvcEtleSArIFwiOlwiICsgKHRoaXMuaW5kZW50U3RyID8gJyAnIDogJycpICsgdmFsdWUgKyBcIixcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vbkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBidWZmZXIuc3Vic3RyaW5nKDAsIGJ1ZmZlci5sZW5ndGggLSAxKSArIHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgpICsgXCJ9XCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSAne30nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9ucyBhbmQgdW5kZWZpbmVkIHNob3VsZCBiZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanNvbjUudHMiLCJpbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BIZWxwZXIge1xuICAgIHN0YXRpYyBkYXRhU3RhcnQ6IHN0cmluZyA9IFwic3VydmV5anMsXCI7XG4gICAgc3RhdGljIGRyYWdEYXRhOiBhbnkgPSB7dGV4dDogXCJcIiwganNvbjogbnVsbCB9O1xuICAgIHN0YXRpYyBwcmV2RXZlbnQgPSB7IHF1ZXN0aW9uOiBudWxsLCB4OiAtMSwgeTogLTEgfTtcbiAgICBwcml2YXRlIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55O1xuICAgIHByaXZhdGUgc2Nyb2xsYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIHNvdXJjZUluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogU3VydmV5LklTdXJ2ZXksIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55LCBzY3JvbGxhYmxlRWxOYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMub25Nb2RpZmllZENhbGxiYWNrID0gb25Nb2RpZmllZENhbGxiYWNrO1xuICAgICAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKHNjcm9sbGFibGVFbE5hbWUgPyBzY3JvbGxhYmxlRWxOYW1lIDogXCJzY3JvbGxhYmxlRGl2XCIpKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiA8U3VydmV5LlN1cnZleT50aGlzLmRhdGE7IH1cbiAgICBwdWJsaWMgc3RhcnREcmFnTmV3UXVlc3Rpb24oZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb25UeXBlOiBzdHJpbmcsIHF1ZXN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZURhdGEoZXZlbnQsIHF1ZXN0aW9uVHlwZSwgcXVlc3Rpb25OYW1lKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXJ0RHJhZ1F1ZXN0aW9uKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZURhdGEoZXZlbnQsIG51bGwsIHF1ZXN0aW9uTmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGFydERyYWdUb29sYm94SXRlbShldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvbk5hbWU6IHN0cmluZywgcXVlc3Rpb25Kc29uOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlRGF0YShldmVudCwgbnVsbCwgcXVlc3Rpb25OYW1lLCBxdWVzdGlvbkpzb24pO1xuICAgIH1cbiAgICBwdWJsaWMgaXNTdXJ2ZXlEcmFnZ2luZyhldmVudDogRHJhZ0V2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldERhdGEoZXZlbnQpLnRleHQ7XG4gICAgICAgIHJldHVybiBkYXRhICYmIGRhdGEuaW5kZXhPZihEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQpID09IDA7XG4gICAgfVxuICAgIHB1YmxpYyBkb0RyYWdEcm9wT3ZlcihldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICBldmVudCA9IHRoaXMuZ2V0RXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsWShldmVudCk7XG4gICAgICAgIHZhciB0YXJnZXRRdWVzdGlvbiA9IERyYWdEcm9wSGVscGVyLmRyYWdEYXRhLnRhcmdldFF1ZXN0aW9uO1xuICAgICAgICBpZiAoIXF1ZXN0aW9uIHx8IHF1ZXN0aW9uID09IHRhcmdldFF1ZXN0aW9uIHx8ICF0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpIHx8IHRoaXMuaXNTYW1lUGxhY2UoZXZlbnQsIHF1ZXN0aW9uKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldFF1ZXN0aW9uSW5kZXgoZXZlbnQsIHF1ZXN0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlSW5kZXggPT0gaW5kZXggfHwgdGhpcy5zb3VyY2VJbmRleCArIDEgPT0gaW5kZXgpICBpbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlW1wia29EcmFnZ2luZ1wiXShpbmRleCk7XG4gICAgfVxuICAgIHB1YmxpYyBlbmQoKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRJc0RyYWdnaW5nU291cmNlKHRoaXMuc3VydmV5W1wia29EcmFnZ2luZ1NvdXJjZVwiXSgpLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3VydmV5W1wia29EcmFnZ2luZ1NvdXJjZVwiXShudWxsKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2VbXCJrb0RyYWdnaW5nXCJdKC0xKTtcbiAgICAgICAgdGhpcy5zb3VyY2VJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZG9Ecm9wKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlID0gbnVsbCkge1xuICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1N1cnZleURyYWdnaW5nKGV2ZW50KSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2VbXCJrb0RyYWdnaW5nXCJdKCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0UXVlc3Rpb24gPSBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YS50YXJnZXRRdWVzdGlvbjtcbiAgICAgICAgICAgIGlmICh0YXJnZXRRdWVzdGlvbiAmJiBpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9sZEluZGV4ID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGFyZ2V0UXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChvbGRJbmRleCA+IC0xICYmIG9sZEluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlUXVlc3Rpb25Ubyh0YXJnZXRRdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgfVxuICAgIHB1YmxpYyBkb0xlYXZlUGFnZShldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA8PSAwIHx8IGV2ZW50LmNsaWVudFkgPD0gMCB8fFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA+PSB0aGlzLnNjcm9sbGFibGVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IGV2ZW50LmNsaWVudFkgPj0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlW1wia29EcmFnZ2luZ1wiXSgtMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNjcm9sbFRvRWxlbWVudChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50IHx8ICFlbCkgcmV0dXJuO1xuICAgICAgICBlbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVGFyZ2V0UXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBzdHJpbmcsIHF1ZXN0aW9uTmFtZTogc3RyaW5nLCBqc29uOiBhbnkpOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgaWYgKCFxdWVzdGlvbk5hbWUpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgdGFyZ2V0UXVlc3Rpb24gPSA8U3VydmV5LlF1ZXN0aW9uQmFzZT50aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShxdWVzdGlvbk5hbWUpO1xuICAgICAgICB0aGlzLnNvdXJjZUluZGV4ID0gLTE7XG4gICAgICAgIGlmICh0YXJnZXRRdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VJbmRleCA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRhcmdldFF1ZXN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldFF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoanNvbikge1xuICAgICAgICAgICAgICAgIHRhcmdldFF1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihqc29uW1widHlwZVwiXSwgbmFtZSk7XG4gICAgICAgICAgICAgICAgbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9PYmplY3QoanNvbiwgdGFyZ2V0UXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIHRhcmdldFF1ZXN0aW9uLm5hbWUgPSBxdWVzdGlvbk5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldFF1ZXN0aW9uICYmIHF1ZXN0aW9uVHlwZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFF1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGUsIHF1ZXN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRRdWVzdGlvbi5zZXREYXRhKHRoaXMuc3VydmV5KTtcbiAgICAgICAgICAgIHRhcmdldFF1ZXN0aW9uLnJlbmRlcldpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJc0RyYWdnaW5nU291cmNlKHRhcmdldFF1ZXN0aW9uLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldFF1ZXN0aW9uO1xuICAgIH1cbiAgICBwcml2YXRlIHNldElzRHJhZ2dpbmdTb3VyY2UocXVlc3Rpb246IGFueSwgdmFsOiBhbnkpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uICYmIHF1ZXN0aW9uW1wia29Jc0RyYWdnaW5nU291cmNlXCJdKSBxdWVzdGlvbltcImtvSXNEcmFnZ2luZ1NvdXJjZVwiXSh2YWwpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFF1ZXN0aW9uSW5kZXgoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZTtcbiAgICAgICAgaWYgKCFxdWVzdGlvbikgcmV0dXJuIHBhZ2UucXVlc3Rpb25zLmxlbmd0aDtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbik7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIHZhciBoZWlnaHQgPSA8bnVtYmVyPmV2ZW50LmN1cnJlbnRUYXJnZXRbXCJjbGllbnRIZWlnaHRcIl07XG4gICAgICAgIHZhciB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICAgICAgaWYgKGV2ZW50Lmhhc093blByb3BlcnR5KCdsYXllclgnKSkge1xuICAgICAgICAgICAgeSA9IGV2ZW50LmxheWVyWSAtIDxudW1iZXI+ZXZlbnQuY3VycmVudFRhcmdldFtcIm9mZnNldFRvcFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSA+IGhlaWdodCAvIDIpIGluZGV4Kys7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1NhbWVQbGFjZShldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcHJldiA9IERyYWdEcm9wSGVscGVyLnByZXZFdmVudDtcbiAgICAgICAgaWYgKHByZXYucXVlc3Rpb24gIT0gcXVlc3Rpb24gfHwgTWF0aC5hYnMoZXZlbnQuY2xpZW50WCAtIHByZXYueCkgPiA1IHx8IE1hdGguYWJzKGV2ZW50LmNsaWVudFkgLSBwcmV2LnkpID4gNSkge1xuICAgICAgICAgICAgcHJldi5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgICAgICAgcHJldi54ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIHByZXYueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTY3JvbGxTdG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHN0YXRpYyBTY3JvbGxEZWxheTogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgU2Nyb2xsT2Zmc2V0OiBudW1iZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFkoZTogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkgcmV0dXJuO1xuICAgICAgICB2YXIgeSA9IHRoaXMuZ2V0U2Nyb2xsYWJsZUVsZW1lbnRQb3NZKGUpO1xuICAgICAgICBpZiAoeSA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gPG51bWJlcj50aGlzLnNjcm9sbGFibGVFbGVtZW50W1wiY2xpZW50SGVpZ2h0XCJdO1xuICAgICAgICBpZiAoeSA8IERyYWdEcm9wSGVscGVyLlNjcm9sbE9mZnNldCAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvU2Nyb2xsWSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCAtIHkgPCBEcmFnRHJvcEhlbHBlci5TY3JvbGxPZmZzZXQgJiYgaGVpZ2h0ID49IHkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvU2Nyb2xsWSgxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGRvU2Nyb2xsWShzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudDtcbiAgICAgICAgdmFyIHNjcm9sbFkgPSBlbC5zY3JvbGxUb3AgKyBzdGVwO1xuICAgICAgICBpZiAoc2Nyb2xsWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBzY3JvbGxZO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1Njcm9sbFN0b3ApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLmRvU2Nyb2xsWShzdGVwKSB9LCBEcmFnRHJvcEhlbHBlci5TY3JvbGxEZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTY3JvbGxhYmxlRWxlbWVudFBvc1koZTogRHJhZ0V2ZW50KTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50IHx8ICFlLmN1cnJlbnRUYXJnZXQpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIGUub2Zmc2V0WSArIDxudW1iZXI+ZS5jdXJyZW50VGFyZ2V0W1wib2Zmc2V0VG9wXCJdIC0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLnNjcm9sbGFibGVFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRFdmVudChldmVudDogRHJhZ0V2ZW50KTogRHJhZ0V2ZW50IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSA/IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSA6IGV2ZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZVF1ZXN0aW9uVG8odGFyZ2V0UXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldFF1ZXN0aW9uID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbih0YXJnZXRRdWVzdGlvbik7XG4gICAgICAgIGlmIChwYWdlID09IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlICYmIGluZGV4ID09IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGFyZ2V0UXVlc3Rpb24pKSByZXR1cm47XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgICBwYWdlLnJlbW92ZVF1ZXN0aW9uKHRhcmdldFF1ZXN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5hZGRRdWVzdGlvbih0YXJnZXRRdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RGF0YUluZm8oZXZlbnQ6IERyYWdFdmVudCk6IGFueSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXREYXRhKGV2ZW50KTtcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHRleHQgPSBkYXRhLnRleHQuc3Vic3RyKERyYWdEcm9wSGVscGVyLmRhdGFTdGFydC5sZW5ndGgpO1xuICAgICAgICB2YXIgYXJyYXkgPSB0ZXh0LnNwbGl0KCcsJyk7XG4gICAgICAgIHZhciByZXN1bHQgPSB7anNvbjogbnVsbH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYXJyYXlbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHJlc3VsdFtpdGVtWzBdXSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lmpzb24gPSBkYXRhLmpzb247XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0WShlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgICAgIHZhciByZXN1bHQgPSAwO1xuXG4gICAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50LmNsaWVudFRvcCk7XG4gICAgICAgICAgICBlbGVtZW50ID0gPEhUTUxFbGVtZW50PmVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgcHJlcGFyZURhdGEoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb25UeXBlOiBzdHJpbmcsIHF1ZXN0aW9uTmFtZTogc3RyaW5nLCBqc29uOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHZhciBzdHIgPSBEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQ7XG4gICAgICAgIGlmIChxdWVzdGlvblR5cGUpIHN0ciArPSBcInF1ZXN0aW9udHlwZTpcIiArIHF1ZXN0aW9uVHlwZSArICcsJztcbiAgICAgICAgc3RyICs9IFwicXVlc3Rpb25uYW1lOlwiICsgcXVlc3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnNldERhdGEoZXZlbnQsIHN0ciwganNvbik7XG4gICAgICAgIHZhciB0YXJnZXRRdWVzdGlvbiA9IHRoaXMuY3JlYXRlVGFyZ2V0UXVlc3Rpb24ocXVlc3Rpb25UeXBlLCBxdWVzdGlvbk5hbWUsIGpzb24pO1xuICAgICAgICBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YS50YXJnZXRRdWVzdGlvbiA9IHRhcmdldFF1ZXN0aW9uO1xuICAgICAgICB0aGlzLnN1cnZleVtcImtvRHJhZ2dpbmdTb3VyY2VcIl0odGFyZ2V0UXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcml2YXRlIHNldERhdGEoZXZlbnQ6IERyYWdFdmVudCwgdGV4dDogc3RyaW5nLCBqc29uOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmIChldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0pIHtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiVGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJjb3B5XCI7XG4gICAgICAgIH1cbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEgPSB7IHRleHQ6IHRleHQsIGpzb246IGpzb24gfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXREYXRhKGV2ZW50OiBEcmFnRXZlbnQpOiBhbnkge1xuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiVGV4dFwiKTtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGV4dCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhO1xuICAgIH1cbiAgICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEgPSB7dGV4dDogXCJcIiwganNvbjogbnVsbCwgdGFyZ2V0UXVlc3Rpb246IG51bGx9O1xuICAgICAgICB2YXIgcHJldiA9IERyYWdEcm9wSGVscGVyLnByZXZFdmVudDtcbiAgICAgICAgcHJldi5xdWVzdGlvbiA9IG51bGw7XG4gICAgICAgIHByZXYueCA9IC0xO1xuICAgICAgICBwcmV2LnkgPSAtMTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RyYWdkcm9waGVscGVyLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrID0gKHByb3BlcnR5OiBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSwgbmV3VmFsdWU6IGFueSkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdFByb3BlcnR5IHtcbiAgICBwcml2YXRlIG9iamVjdFZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBpc1ZhbHVlVXBkYXRpbmc6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBvblByb3BlcnR5Q2hhbmdlZDogU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjaztcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMga29WYWx1ZTogYW55O1xuICAgIHB1YmxpYyBrb1RleHQ6IGFueTtcbiAgICBwdWJsaWMgbW9kYWxOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGFsTmFtZVRhcmdldDogc3RyaW5nO1xuICAgIHB1YmxpYyBrb0lzRGVmYXVsdDogYW55O1xuICAgIHB1YmxpYyBlZGl0b3I6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZTtcbiAgICBwdWJsaWMgZWRpdG9yVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBiYXNlRWRpdG9yVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvblByb3BlcnR5Q2hhbmdlZDogU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjayA9IG51bGwsIHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkID0gb25Qcm9wZXJ0eUNoYW5nZWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucHJvcGVydHkubmFtZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHByb3BlcnR5W1wicmVhZE9ubHlcIl07XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5jaG9pY2VzID0gcHJvcGVydHkuY2hvaWNlcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmVkaXRvclR5cGUgPSBwcm9wZXJ0eS50eXBlO1xuICAgICAgICAvL1RPRE9cbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvclR5cGUgPSBcImRyb3Bkb3duXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9uSXRlbUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3VmFsdWU6IGFueSkgeyBzZWxmLm9uQXBwbHlFZGl0b3JWYWx1ZShuZXdWYWx1ZSk7IH07XG4gICAgICAgIHRoaXMuZWRpdG9yID0gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmNyZWF0ZUVkaXRvcih0aGlzLmVkaXRvclR5cGUsIG9uSXRlbUNoYW5nZWQpO1xuICAgICAgICB0aGlzLmVkaXRvci5vcHRpb25zID0gcHJvcGVydHlFZGl0b3JPcHRpb25zO1xuICAgICAgICB0aGlzLmVkaXRvclR5cGUgPSB0aGlzLmVkaXRvci5lZGl0b3JUeXBlO1xuICAgICAgICB0aGlzLm1vZGFsTmFtZSA9IFwibW9kZWxFZGl0b3JcIiArIHRoaXMuZWRpdG9yVHlwZSArIHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5tb2RhbE5hbWVUYXJnZXQgPSBcIiNcIiArIHRoaXMubW9kYWxOYW1lO1xuICAgICAgICB0aGlzLmtvVmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLm9ua29WYWx1ZUNoYW5nZWQobmV3VmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5rb1RleHQgPSBrby5jb21wdXRlZCgoKSA9PiB7IHJldHVybiBzZWxmLmdldFZhbHVlVGV4dChzZWxmLmtvVmFsdWUoKSk7IH0pO1xuICAgICAgICB0aGlzLmtvSXNEZWZhdWx0ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5wcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZShzZWxmLmtvVmFsdWUoKSk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9iamVjdCgpOiBhbnkgeyByZXR1cm4gdGhpcy5vYmplY3RWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgb2JqZWN0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vYmplY3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5pc1ZhbHVlVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0T2JqZWN0KHRoaXMub2JqZWN0KTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VGl0bGUoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVkaXRQcm9wZXJ0eVwiKVtcImZvcm1hdFwiXSh0aGlzLnByb3BlcnR5Lm5hbWUpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3JEYXRhKHRoaXMua29WYWx1ZSgpKTtcbiAgICAgICAgdGhpcy5pc1ZhbHVlVXBkYXRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc0FwcGx5aW5nTmV3VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9uQXBwbHlFZGl0b3JWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNBcHBseWluZ05ld1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5pc0FwcGx5aW5nTmV3VmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvbmtvVmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3JEYXRhKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vYmplY3QgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09IG5ld1ZhbHVlKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm9uUHJvcGVydHlDaGFuZ2VkICE9IG51bGwgJiYgIXRoaXMuaXNWYWx1ZVVwZGF0aW5nKSB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkKHRoaXMsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVFZGl0b3JEYXRhKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFZhbHVlKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiB0aGlzLnByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0W3RoaXMubmFtZV07XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7IHJldHVybiB0aGlzLmVkaXRvci5nZXRWYWx1ZVRleHQodmFsdWUpOyB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdFByb3BlcnR5LnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleUhlbHBlciwgT2JqVHlwZX0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYnMge1xuICAgIHByaXZhdGUgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG4gICAgcHJpdmF0ZSBvYmpWYWx1ZTogYW55O1xuICAgIHByaXZhdGUgY2hvaWNlc0NsYXNzZXM6IEFycmF5PHN0cmluZz47XG4gICAga29WZXJiczogYW55O1xuICAgIGtvSGFzVmVyYnM6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5rb1ZlcmJzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29IYXNWZXJicyA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzZWxlY3RiYXNlXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmNob2ljZXNDbGFzc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzQ2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBvYmooKTogYW55IHsgcmV0dXJuIHRoaXMub2JqVmFsdWUgfVxuICAgIHB1YmxpYyBzZXQgb2JqKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqVmFsdWUgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5vYmpWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmJ1aWxkVmVyYnMoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBidWlsZFZlcmJzKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZSh0aGlzLm9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPnRoaXMub2JqO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ldyBTdXJ2ZXlWZXJiQ2hhbmdlUGFnZUl0ZW0odGhpcy5zdXJ2ZXksIHF1ZXN0aW9uLCB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvaWNlc0NsYXNzZXMuaW5kZXhPZihxdWVzdGlvbi5nZXRUeXBlKCkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ldyBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0odGhpcy5zdXJ2ZXksIHF1ZXN0aW9uLCB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29WZXJicyhhcnJheSk7XG4gICAgICAgIHRoaXMua29IYXNWZXJicyhhcnJheS5sZW5ndGggPiAwKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYkl0ZW0ge1xuICAgIGtvSXRlbXM6IGFueTtcbiAgICBrb1NlbGVjdGVkSXRlbTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSwgcHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMua29JdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIFwiXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0gZXh0ZW5kcyBTdXJ2ZXlWZXJiSXRlbSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleSwgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgc3VwZXIoc3VydmV5LCBxdWVzdGlvbiwgb25Nb2RpZmllZENhbGxiYWNrKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzZWxlY3RiYXNlXCIsIHRydWUpO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHsgdmFsdWU6IGNsYXNzZXNbaV0ubmFtZSwgdGV4dDogZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInF0LlwiICsgY2xhc3Nlc1tpXS5uYW1lKSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyYXkpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtKHF1ZXN0aW9uLmdldFR5cGUoKSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuY2hhbmdlVHlwZShuZXdWYWx1ZSk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS52ZXJiQ2hhbmdlVHlwZVwiKTsgfVxuICAgIHByaXZhdGUgY2hhbmdlVHlwZShxdWVzdGlvblR5cGU6IHN0cmluZykge1xuICAgICAgICBpZiAocXVlc3Rpb25UeXBlID09IHRoaXMucXVlc3Rpb24uZ2V0VHlwZSgpKSByZXR1cm47XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIHZhciBpbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGhpcy5xdWVzdGlvbik7XG4gICAgICAgIHZhciBuZXdRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCB0aGlzLnF1ZXN0aW9uLm5hbWUpO1xuICAgICAgICB2YXIganNvbk9iaiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpO1xuICAgICAgICB2YXIganNvbiA9IGpzb25PYmoudG9Kc29uT2JqZWN0KHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBqc29uT2JqLnRvT2JqZWN0KGpzb24sIG5ld1F1ZXN0aW9uKTtcbiAgICAgICAgcGFnZS5yZW1vdmVRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgcGFnZS5hZGRRdWVzdGlvbihuZXdRdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbSBleHRlbmRzIFN1cnZleVZlcmJJdGVtIHtcbiAgICBwcml2YXRlIHByZXZQYWdlOiBTdXJ2ZXkuUGFnZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICBzdXBlcihzdXJ2ZXksIHF1ZXN0aW9uLCBvbk1vZGlmaWVkQ2FsbGJhY2spO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5wYWdlc1tpXTtcbiAgICAgICAgICAgIGFycmF5LnB1c2goeyB2YWx1ZTogcGFnZSwgdGV4dDogU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycmF5KTtcbiAgICAgICAgdGhpcy5wcmV2UGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0odGhpcy5wcmV2UGFnZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuY2hhbmdlUGFnZShuZXdWYWx1ZSk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS52ZXJiQ2hhbmdlUGFnZVwiKTsgfVxuICAgIHByaXZhdGUgY2hhbmdlUGFnZShuZXdQYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICBpZiAobmV3UGFnZSA9PSBudWxsIHx8IG5ld1BhZ2UgPT0gdGhpcy5wcmV2UGFnZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnByZXZQYWdlLnJlbW92ZVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBuZXdQYWdlLmFkZFF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmplY3RWZXJicy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlBZGROZXdQYWdlQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2sgPSAocGFnZTogU3VydmV5LlBhZ2UpID0+IHZvaWQ7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleU1vdmVQYWdlQ2FsbGJhY2sgPSAoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVBhZ2VzRWRpdG9yIHtcbiAgICBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBrb1BhZ2VzOiBhbnk7XG4gICAga29Jc1ZhbGlkOiBhbnk7XG4gICAgc2VsZWN0UGFnZUNsaWNrOiBhbnk7XG4gICAgb25BZGROZXdQYWdlQ2FsbGJhY2s6IFN1cnZleUFkZE5ld1BhZ2VDYWxsYmFjaztcbiAgICBvblNlbGVjdFBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrO1xuICAgIG9uRGVsZXRlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgb25Nb3ZlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlNb3ZlUGFnZUNhbGxiYWNrO1xuICAgIGRyYWdnaW5nUGFnZTogYW55ID0gbnVsbDtcbiAgICBkcmFnU3RhcnQ6IGFueTsgZHJhZ092ZXI6IGFueTsgZHJhZ0VuZDogYW55OyBkcmFnRHJvcDogYW55OyBrZXlEb3duOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihvbkFkZE5ld1BhZ2VDYWxsYmFjazogU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrID0gbnVsbCwgb25TZWxlY3RQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IG51bGwsXG4gICAgICAgICAgICAgICAgb25Nb3ZlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlNb3ZlUGFnZUNhbGxiYWNrID0gbnVsbCwgb25EZWxldGVQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5rb1BhZ2VzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29Jc1ZhbGlkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMub25BZGROZXdQYWdlQ2FsbGJhY2sgPSBvbkFkZE5ld1BhZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjayA9IG9uU2VsZWN0UGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjayA9IG9uTW92ZVBhZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5vbkRlbGV0ZVBhZ2VDYWxsYmFjayA9IG9uRGVsZXRlUGFnZUNhbGxiYWNrO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFnZUNsaWNrID0gZnVuY3Rpb24ocGFnZUl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uU2VsZWN0UGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vblNlbGVjdFBhZ2VDYWxsYmFjayhwYWdlSXRlbS5wYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5rZXlEb3duID0gZnVuY3Rpb24gKGVsOiBhbnksIGU6IEtleWJvYXJkRXZlbnQpIHsgc2VsZi5vbktleURvd24oZWwsIGUpOyB9XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgc2VsZi5kcmFnZ2luZ1BhZ2UgPSBlbDsgfTtcbiAgICAgICAgdGhpcy5kcmFnT3ZlciA9IGZ1bmN0aW9uIChlbDogYW55KSB7ICB9O1xuICAgICAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZHJhZ2dpbmdQYWdlID0gbnVsbDsgfTtcbiAgICAgICAgdGhpcy5kcmFnRHJvcCA9IGZ1bmN0aW9uIChlbDogYW55KSB7IHNlbGYubW92ZURyYWdnaW5nUGFnZVRvKGVsKTsgfTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmtvSXNWYWxpZCh0aGlzLnN1cnZleVZhbHVlICE9IG51bGwpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRTZWxlY3RlZFBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhZ2VzW2ldLmtvU2VsZWN0ZWQocGFnZXNbaV0ucGFnZSA9PSBwYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYWRkTmV3UGFnZUNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhZ2UocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlTmFtZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4QnlQYWdlKHBhZ2UpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKClbaW5kZXhdLnRpdGxlKFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKHBhZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SW5kZXhCeVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpOiBudW1iZXIge1xuICAgICAgICB2YXIgcGFnZXMgPSB0aGlzLmtvUGFnZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhZ2VzW2ldLnBhZ2UgPT0gcGFnZSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duKGVsOiBhbnksIGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMua29QYWdlcygpLmxlbmd0aCA8PSAxKSByZXR1cm47XG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMua29QYWdlcygpO1xuICAgICAgICB2YXIgcGFnZUluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYWdlc1tpXS5wYWdlICYmIHBhZ2VzW2ldLmtvU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHBhZ2VJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZ2VJbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA0NiAmJiB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrKSB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrKGVsLnBhZ2UpO1xuICAgICAgICBpZiAoKGUua2V5Q29kZSA9PSAzNyB8fCBlLmtleUNvZGUgPT0gMzkpICYmIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHBhZ2VJbmRleCArPSAoZS5rZXlDb2RlID09IDM3ID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGlmIChwYWdlSW5kZXggPCAwKSBwYWdlSW5kZXggPSBwYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKHBhZ2VJbmRleCA+PSBwYWdlcy5sZW5ndGgpIHBhZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VJbmRleF0ucGFnZTtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2socGFnZSk7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkUGFnZShwYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUGFnZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcyhbXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhZ2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzW2ldO1xuICAgICAgICAgICAgcGFnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGtvLm9ic2VydmFibGUoU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkpLCBwYWdlOiBwYWdlLCBrb1NlbGVjdGVkOiBrby5vYnNlcnZhYmxlKGZhbHNlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1BhZ2VzKHBhZ2VzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBtb3ZlRHJhZ2dpbmdQYWdlVG8odG9QYWdlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRvUGFnZSA9PSBudWxsIHx8IHRvUGFnZSA9PSB0aGlzLmRyYWdnaW5nUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BhZ2UgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nUGFnZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMua29QYWdlcygpLmluZGV4T2YodGhpcy5kcmFnZ2luZ1BhZ2UpO1xuICAgICAgICB2YXIgaW5kZXhUbyA9IHRoaXMua29QYWdlcygpLmluZGV4T2YodG9QYWdlKTtcbiAgICAgICAgaWYgKHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjayhpbmRleCwgaW5kZXhUbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzRWRpdG9yLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdEVkaXRvcjogU3VydmV5T2JqZWN0RWRpdG9yO1xuICAgIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIGF2YWlsYWJsZVZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIHZhbGlkYXRvckNsYXNzZXM6IEFycmF5PFN1cnZleS5Kc29uTWV0YWRhdGFDbGFzcz4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yID0gbmV3IFN1cnZleU9iamVjdEVkaXRvcigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChvcHRpb25zLnByb3BlcnR5LCBvcHRpb25zLm9iamVjdCwgb3B0aW9ucy5uZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNlbGVjdGVkT2JqZWN0RWRpdG9yLnNlbGVjdGVkT2JqZWN0ID0gbmV3VmFsdWUgIT0gbnVsbCA/IG5ld1ZhbHVlLnZhbGlkYXRvciA6IG51bGw7IH0pO1xuICAgICAgICB0aGlzLnZhbGlkYXRvckNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzdXJ2ZXl2YWxpZGF0b3JcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlVmFsaWRhdG9ycyA9IHRoaXMuZ2V0QXZhaWxhYmxlVmFsaWRhdG9ycygpO1xuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoc2VsZi5rb1NlbGVjdGVkKCkpOyB9O1xuICAgICAgICB0aGlzLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAodmFsaWRhdG9yVHlwZSkgeyBzZWxmLmFkZEl0ZW0odmFsaWRhdG9yVHlwZSk7IH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ2YWxpZGF0b3JzXCI7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgICAgIGlmICh0aGlzLmtvU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLmtvSXRlbXMoKS5sZW5ndGggPiAwID8gdGhpcy5rb0l0ZW1zKClbMF0gOiBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGpzb25PYmogPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKTtcbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGl0ZW0uZ2V0VHlwZSgpKTtcbiAgICAgICAganNvbk9iai50b09iamVjdChpdGVtLCB2YWxpZGF0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbSh2YWxpZGF0b3IpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgaXRlbSA9IDxTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0+ZWRpdG9ySXRlbTtcbiAgICAgICAgcmV0dXJuIGl0ZW0udmFsaWRhdG9yO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0odmFsaWRhdG9yVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBuZXdWYWxpZGF0b3IgPSBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtKFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHZhbGlkYXRvclR5cGUpKTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zLnB1c2gobmV3VmFsaWRhdG9yKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKG5ld1ZhbGlkYXRvcik7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXZhaWxhYmxlVmFsaWRhdG9ycygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsaWRhdG9yQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWxpZGF0b3JDbGFzc2VzW2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSwgb2JqOiBhbnksIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMua29TZWxlY3RlZCgpID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKCkudmFsaWRhdG9yW3Byb3BlcnR5Lm5hbWVdID0gbmV3VmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtIHtcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWxpZGF0b3I6IFN1cnZleS5TdXJ2ZXlWYWxpZGF0b3IpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdmFsaWRhdG9yLmdldFR5cGUoKTtcbiAgICB9XG59XG5cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidmFsaWRhdG9yc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uIHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmluaXRpb246IGFueSA9IHtcbiAgICAgICAgXCJxdWVzdGlvbmJhc2VcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcIm5hbWVcIiwgXCJ0aXRsZVwiLCB7bmFtZTogXCJ2aXNpYmxlXCIsIGNhdGVnb3J5OiBcImNoZWNrc1wifSwge25hbWU6IFwiaXNSZXF1aXJlZFwiLCBjYXRlZ29yeTogXCJjaGVja3NcIn0sIHtuYW1lOiBcInN0YXJ0V2l0aE5ld0xpbmVcIiwgY2F0ZWdvcnk6IFwiY2hlY2tzXCJ9IF0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwidmlzaWJsZUlmXCIsIGluZGV4OiAxMDB9XVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1lbnRcIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wicm93c1wiLCBcInBsYWNlSG9sZGVyXCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsZVwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbe25hbWU6IFwic2hvd1ByZXZpZXdcIiwgY2F0ZWdvcnk6IFwiaW1hZ2VDaGVja3NcIn0sIHtuYW1lOiBcInN0b3JlRGF0YUFzVGV4dFwiLCBjYXRlZ29yeTogXCJpbWFnZUNoZWNrc1wifSwgXCJtYXhTaXplXCIsIFwiaW1hZ2VIZWlnaHRcIiwgXCJpbWFnZVdpZHRoXCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwiaHRtbFwiOiB7XG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiaHRtbFwiLCBpbmRleDogMTB9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duYmFzZVwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJjZWxsVHlwZVwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjb2x1bW5zXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcInJvd3NcIiwgaW5kZXg6IDExfSwge25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTJ9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGR5bmFtaWNcIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wicm93Q291bnRcIiwgXCJhZGRSb3dUZXh0XCIsIFwicmVtb3ZlUm93VGV4dFwiXVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeFwiOiB7XG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY29sdW1uc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJyb3dzXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibXVsdGlwbGVpdGVtc1wiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJjb2xDb3VudFwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJpdGVtc1wiLCBpbmRleDogMTB9XVxuICAgICAgICB9LFxuICAgICAgICBcInJhdGluZ1wiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wibWluUmF0ZURlc2NyaXB0aW9uXCIsIFwibWF4UmF0ZURlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcInJhdGVWYWx1ZXNcIiwgaW5kZXg6IDEwfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWxlY3RiYXNlXCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcImNvbENvdW50XCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHJvcGRvd25cIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wib3B0aW9uc0NhcHRpb25cIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0ZXh0XCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJpbnB1dFR5cGVcIiwgXCJwbGFjZUhvbGRlclwiXVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQGNoZWNrYm94XCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcImNvbENvdW50XCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AcmFkaW9ncm91cFwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaGFzT3RoZXJcIiwgXCJjaG9pY2VzT3JkZXJcIiwgXCJjb2xDb3VudFwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjaG9pY2VzXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcImNob2ljZXNCeVVybFwiLCBpbmRleDogMTF9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQGRyb3Bkb3duXCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcIm9wdGlvbnNDYXB0aW9uXCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AdGV4dFwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaW5wdXRUeXBlXCIsIFwicGxhY2VIb2xkZXJcIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtbkBjb21tZW50XCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJwbGFjZUhvbGRlclwiXVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJvcGVydGllcyhjbGFzc05hbWU6IHN0cmluZyk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICAgICAgICB2YXIgYWxsRGVmaW5pdGlvbnMgPSBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0QWxsRGVmaW5pdGlvbnNCeUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgIGZvcih2YXIgaSA9IGFsbERlZmluaXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtLSkge1xuICAgICAgICAgICAgdmFyIGRlZiA9IGFsbERlZmluaXRpb25zW2ldO1xuICAgICAgICAgICAgaWYoZGVmLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgZGVmLnByb3BlcnRpZXMubGVuZ3RoOyBqICsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChkZWYucHJvcGVydGllc1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldFRhYnMoY2xhc3NOYW1lOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHRhYnMgPSBbXTtcbiAgICAgICAgdmFyIGFsbERlZmluaXRpb25zID0gU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldEFsbERlZmluaXRpb25zQnlDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICBmb3IodmFyIGkgPSBhbGxEZWZpbml0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGkgLS0pIHtcbiAgICAgICAgICAgIHZhciBkZWYgPSBhbGxEZWZpbml0aW9uc1tpXTtcbiAgICAgICAgICAgIGlmKGRlZi50YWJzKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGRlZi50YWJzLmxlbmd0aDsgaiArKykge1xuICAgICAgICAgICAgICAgICAgICB0YWJzLnB1c2goZGVmLnRhYnNbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0YWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaW5kZXggPCBiLmluZGV4ID8gLTEgOiAoYS5pbmRleCA+IGIuaW5kZXggPyAxIDogMCk7IH0pO1xuICAgICAgICByZXR1cm4gdGFicztcbiAgICB9XG4gICAgc3RhdGljIGdldEFsbERlZmluaXRpb25zQnlDbGFzcyhjbGFzc05hbWU6IHN0cmluZykgOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBpZihjbGFzc05hbWUuaW5kZXhPZignQCcpID4gLTEgJiYgU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmRlZmluaXRpb25bY2xhc3NOYW1lXSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmRlZmluaXRpb25bY2xhc3NOYW1lXSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZhciBtZXRhQ2xhc3MgPSA8U3VydmV5Lkpzb25NZXRhZGF0YUNsYXNzPlN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhW1wiZmluZENsYXNzXCJdKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAoIW1ldGFDbGFzcykgYnJlYWs7XG4gICAgICAgICAgICBpZihTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZGVmaW5pdGlvblttZXRhQ2xhc3MubmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZGVmaW5pdGlvblttZXRhQ2xhc3MubmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gbWV0YUNsYXNzLnBhcmVudE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eSB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMgZWRpdFR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIGNob2ljZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBrb1ZhbHVlOiBhbnk7IGtvRXJyb3JUZXh0OiBhbnk7IGtvSGFzRXJyb3I6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHVibGljIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBwdWJsaWMgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BlcnR5Lm5hbWU7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBwcm9wZXJ0eVtcInJlYWRPbmx5XCJdO1xuICAgICAgICB0aGlzLmVkaXRUeXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIGlmKHByb3BlcnR5LnR5cGUgPT0gXCJ0ZXh0XCIpIHRoaXMuZWRpdFR5cGUgPSBcInRleHRhcmVhXCI7XG4gICAgICAgIGlmKHByb3BlcnR5LnR5cGUgPT0gXCJib29sZWFuXCIpIHRoaXMuZWRpdFR5cGUgPSBcImNoZWNrXCI7XG4gICAgICAgIGlmKHByb3BlcnR5LmNob2ljZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcyA9IHByb3BlcnR5LmNob2ljZXM7XG4gICAgICAgICAgICB0aGlzLmVkaXRUeXBlID0gXCJkcm9wZG93blwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb0Vycm9yVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29IYXNFcnJvciA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnRpdGxlID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLlwiICsgdGhpcy5uYW1lKTtcbiAgICAgICAgaWYoIXRoaXMudGl0bGUpIHRoaXMudGl0bGUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaXNFcnJvciA9IHRoaXMuaXNSZXF1aXJlZCAmJiAodGhpcy5rb1ZhbHVlKCkgIT09IGZhbHNlKSAmJiAhdGhpcy5rb1ZhbHVlKCk7XG4gICAgICAgIHRoaXMua29FcnJvclRleHQoaXNFcnJvciA/IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5wcm9wZXJ0eUlzRW1wdHlcIik6IFwiXCIpO1xuICAgICAgICB0aGlzLmtvSGFzRXJyb3IoaXNFcnJvcik7XG4gICAgICAgIHJldHVybiBpc0Vycm9yO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMub2JqW3RoaXMubmFtZV0gPSB0aGlzLmtvVmFsdWUoKTtcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZSgpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eS5oYXNUb1VzZUdldFZhbHVlKSByZXR1cm4gdGhpcy5wcm9wZXJ0eS5nZXRWYWx1ZSh0aGlzLm9iaik7XG4gICAgICAgIHJldHVybiB0aGlzLm9ialt0aGlzLm5hbWVdO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93IHtcbiAgICBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZztcbiAgICBwdWJsaWMgcHJvcGVydGllczogQXJyYXk8U3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydHk+ID0gW107XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmFkZFByb3BlcnR5KHByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUHJvcGVydHkocHJvcGVydHk6IGFueSwgaXNQcm9wZXJ0eVJlcXVpcmVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLnB1c2gobmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnR5KHRoaXMub2JqLCBwcm9wZXJ0eSwgaXNQcm9wZXJ0eVJlcXVpcmVkKSk7XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpIDogYm9vbGVhbiB7XG4gICAgICAgIHZhciBpc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBpc0Vycm9yID0gdGhpcy5wcm9wZXJ0aWVzW2ldLmhhc0Vycm9yKCkgfHwgaXNFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNFcnJvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzIHtcbiAgICBwcml2YXRlIHByb3BlcnRpZXM6IEFycmF5PFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHk+O1xuICAgIHByaXZhdGUgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbjtcbiAgICBwdWJsaWMgcm93czogQXJyYXk8U3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93PiA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwcm9wZXJ0aWVzOiBBcnJheTxhbnk+LCBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuID0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKHRoaXMub2JqLmdldFR5cGUoKSk7IFxuICAgICAgICB0aGlzLmJ1aWxkUm93cyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICB0aGlzLmFwcGx5T3JSZXNldCh0cnVlKTtcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFwcGx5T3JSZXNldChmYWxzZSk7XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpIDogYm9vbGVhbiB7XG4gICAgICAgIHZhciBpc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3MubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBpc0Vycm9yID0gdGhpcy5yb3dzW2ldLmhhc0Vycm9yKCkgfHwgaXNFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNFcnJvcjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGFwcGx5T3JSZXNldChpc0FwcGx5OiBib29sZWFuKSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3MubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgdGhpcy5yb3dzW2ldLnByb3BlcnRpZXMubGVuZ3RoOyBqICsrKSB7XG4gICAgICAgICAgICAgICAgaWYoaXNBcHBseSkgdGhpcy5yb3dzW2ldLnByb3BlcnRpZXNbal0uYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMucm93c1tpXS5wcm9wZXJ0aWVzW2pdLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGJ1aWxkUm93cyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciByZXF1aXJlZFByb3BlcnRpZXM6IEFycmF5PHN0cmluZz4gPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRSZXF1aXJlZFByb3BlcnRpZXModGhpcy5vYmouZ2V0VHlwZSgpKTtcbiAgICAgICAgaWYoIXJlcXVpcmVkUHJvcGVydGllcykgcmVxdWlyZWRQcm9wZXJ0aWVzID0gW107XG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXROYW1lKHByb3BlcnRpZXNbaV0pO1xuICAgICAgICAgICAgdmFyIGpzb25Qcm9wZXJ0eSA9IHRoaXMuZ2V0UHJvcGVydHkobmFtZSk7XG4gICAgICAgICAgICBpZighanNvblByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBpc1Byb3BlcnR5UmVxdWlyZWQ6IGJvb2xlYW4gPSByZXF1aXJlZFByb3BlcnRpZXMuaW5kZXhPZihuYW1lKSA+IC0xO1xuICAgICAgICAgICAgdmFyIHJvdyA9IHRoaXMuZ2V0Um93QnlDYXRlZ29yeShwcm9wZXJ0aWVzW2ldLmNhdGVnb3J5KTtcbiAgICAgICAgICAgIGlmKHJvdykgcm93LmFkZFByb3BlcnR5KGpzb25Qcm9wZXJ0eSwgaXNQcm9wZXJ0eVJlcXVpcmVkKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdyA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3codGhpcy5vYmosIGpzb25Qcm9wZXJ0eSwgaXNQcm9wZXJ0eVJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZihwcm9wZXJ0aWVzW2ldLmNhdGVnb3J5KSByb3cuY2F0ZWdvcnkgPSBwcm9wZXJ0aWVzW2ldLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcm9wZXJ0aWVzW2ldLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgcm93LnByb3BlcnRpZXNbcm93LnByb3BlcnRpZXMubGVuZ3RoIC0gMV0udGl0bGUgPSBwcm9wZXJ0aWVzW2ldLnRpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICB9XG4gICBwcml2YXRlIGdldE5hbWUocHJvcDogYW55KTogc3RyaW5nIHtcbiAgICAgICBpZighcHJvcCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmKHR5cGVvZiBwcm9wID09PSBcInN0cmluZ1wiKSByZXR1cm4gcHJvcDtcbiAgICAgICAgaWYocHJvcC5uYW1lKSByZXR1cm4gcHJvcC5uYW1lO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgIH1cbiAgIHByaXZhdGUgZ2V0Um93QnlDYXRlZ29yeShjYXRlZ29yeTogc3RyaW5nKSB7XG4gICAgICAgaWYoIWNhdGVnb3J5KSByZXR1cm4gbnVsbDtcbiAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICBpZih0aGlzLnJvd3NbaV0uY2F0ZWdvcnkgPT0gY2F0ZWdvcnkpIHJldHVybiB0aGlzLnJvd3NbaV07XG4gICAgICAgfVxuICAgICAgIHJldHVybiBudWxsO1xuICAgfVxuICAgcHJpdmF0ZSBnZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkge1xuICAgICAgIGlmKCFwcm9wZXJ0eU5hbWUpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgcHJvcGVydHkgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllc1tpXS5uYW1lID09IHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMub2JqLCBwcm9wZXJ0eSkpIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllcy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUXVlc3Rpb25Ub29sYm94SXRlbSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGljb25OYW1lOiBzdHJpbmc7XG4gICAganNvbjogYW55O1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaXNDb3BpZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblRvb2xib3gge1xuICAgIHB1YmxpYyBvcmRlcmVkUXVlc3Rpb25zID0gW1widGV4dFwiLCBcImNoZWNrYm94XCIsIFwicmFkaW9ncm91cFwiLCBcImRyb3Bkb3duXCIsIFwiY29tbWVudFwiLCBcInJhdGluZ1wiLCBcImh0bWxcIl07XG4gICAgcHVibGljIGNvcGllZEl0ZW1NYXhDb3VudDogbnVtYmVyID0gMztcbiAgICBwcml2YXRlIGl0ZW1zVmFsdWU6IEFycmF5PElRdWVzdGlvblRvb2xib3hJdGVtPiA9IFtdO1xuXG4gICAga29JdGVtczogYW55O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHN1cHBvcnRlZFF1ZXN0aW9uczogQXJyYXk8c3RyaW5nPiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdEl0ZW1zKHN1cHBvcnRlZFF1ZXN0aW9ucyk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQganNvblRleHQoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zVmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGpzb25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlID0gKHZhbHVlKSA/IEpTT04ucGFyc2UodmFsdWUpIDogW107XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb3BpZWRKc29uVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5jb3BpZWRJdGVtcyk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY29waWVkSnNvblRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB2YXIgbmV3SXRlbXMgPSAodmFsdWUpID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBbXTtcbiAgICAgICAgdGhpcy5jbGVhckNvcGllZEl0ZW1zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0l0ZW1zW2ldLmlzQ29waWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShuZXdJdGVtc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBpdGVtcygpOiBBcnJheTxJUXVlc3Rpb25Ub29sYm94SXRlbT4geyByZXR1cm4gdGhpcy5pdGVtc1ZhbHVlOyB9XG4gICAgcHVibGljIGdldCBjb3BpZWRJdGVtcygpOiBBcnJheTxJUXVlc3Rpb25Ub29sYm94SXRlbT4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtc1ZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1ZhbHVlW2ldLmlzQ29waWVkKSByZXN1bHQucHVzaCh0aGlzLml0ZW1zVmFsdWVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRJdGVtcyhpdGVtczogQXJyYXk8SVF1ZXN0aW9uVG9vbGJveEl0ZW0+LCBjbGVhckFsbDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjbGVhckFsbCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkQ29waWVkSXRlbShxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgaXRlbSA9IHsgbmFtZTogcXVlc3Rpb24ubmFtZSwgdGl0bGU6IHF1ZXN0aW9uLm5hbWUsIGlzQ29waWVkOiB0cnVlLCBpY29uTmFtZTogXCJpY29uLWRlZmF1bHRcIiwganNvbjogdGhpcy5nZXRRdWVzdGlvbkpTT04ocXVlc3Rpb24pIH07XG4gICAgICAgIGlmICh0aGlzLnJlcGxhY2VJdGVtKGl0ZW0pKSByZXR1cm47XG4gICAgICAgIHZhciBjb3BpZWQgPSB0aGlzLmNvcGllZEl0ZW1zO1xuICAgICAgICBpZiAodGhpcy5jb3BpZWRJdGVtTWF4Q291bnQgPiAwICYmIGNvcGllZC5sZW5ndGggPT0gdGhpcy5jb3BpZWRJdGVtTWF4Q291bnQpIHRoaXMucmVtb3ZlSXRlbShjb3BpZWRbdGhpcy5jb3BpZWRJdGVtTWF4Q291bnQgLSAxXS5uYW1lKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0pO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBJUXVlc3Rpb25Ub29sYm94SXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zVmFsdWUucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVwbGFjZUl0ZW0oaXRlbTogSVF1ZXN0aW9uVG9vbGJveEl0ZW0pOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKGl0ZW0ubmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlW2luZGV4XSA9IGl0ZW07XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVJdGVtKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YobmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhckl0ZW1zKCkge1xuICAgICAgICB0aGlzLml0ZW1zVmFsdWUgPSBbXTtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXJDb3BpZWRJdGVtcygpIHtcbiAgICAgICAgdmFyIHJlbW92ZWRJdGVtcyA9IHRoaXMuY29waWVkSXRlbXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3ZlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0ocmVtb3ZlZEl0ZW1zW2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zKHRoaXMuaXRlbXNWYWx1ZSk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5kZXhPZihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zVmFsdWVbaV0ubmFtZSA9PSBuYW1lKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlRGVmYXVsdEl0ZW1zKHN1cHBvcnRlZFF1ZXN0aW9uczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvblR5cGVzKHN1cHBvcnRlZFF1ZXN0aW9ucyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24obmFtZSwgXCJxMVwiKTtcbiAgICAgICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRRdWVzdGlvbkpTT04ocXVlc3Rpb24pO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB7IG5hbWU6IG5hbWUsIGljb25OYW1lOiAnaWNvbi0nICsgbmFtZSwgdGl0bGU6IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoJ3F0LicgKyBuYW1lKSwganNvbjoganNvbiwgaXNDb3BpZWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB0aGlzLml0ZW1zVmFsdWUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UXVlc3Rpb25KU09OKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKTogYW55IHtcbiAgICAgICAgdmFyIGpzb24gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QocXVlc3Rpb24pO1xuICAgICAgICBqc29uLnR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFF1ZXN0aW9uVHlwZXMoc3VwcG9ydGVkUXVlc3Rpb25zOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nW10ge1xuICAgICAgICB2YXIgYWxsVHlwZXMgPSBTdXJ2ZXkuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmdldEFsbFR5cGVzKCk7XG4gICAgICAgIGlmICghc3VwcG9ydGVkUXVlc3Rpb25zIHx8IHN1cHBvcnRlZFF1ZXN0aW9ucy5sZW5ndGggPT0gMCkgc3VwcG9ydGVkUXVlc3Rpb25zID0gYWxsVHlwZXM7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yZGVyZWRRdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5vcmRlcmVkUXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlZFF1ZXN0aW9ucy5pbmRleE9mKG5hbWUpID4gLTEgJiYgYWxsVHlwZXMuaW5kZXhPZihuYW1lKSA+IC0xKSBxdWVzdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1cHBvcnRlZFF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBzdXBwb3J0ZWRRdWVzdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAocXVlc3Rpb25zLmluZGV4T2Yoc3VwcG9ydGVkUXVlc3Rpb25zW2ldKSA8IDAgJiYgYWxsVHlwZXMuaW5kZXhPZihuYW1lKSA+IC0xKSBxdWVzdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlc3Rpb25zO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvblRvb2xib3gudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlFbWJlZGluZ1dpbmRvdyB7XG4gICAgcHJpdmF0ZSBqc29uVmFsdWU6IGFueTtcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nSGVhZDogQWNlQWpheC5FZGl0b3I7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZ0phdmE6IEFjZUFqYXguRWRpdG9yO1xuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdCb2R5OiBBY2VBamF4LkVkaXRvcjtcbiAgICBrb0hlYWRUZXh0OiBhbnk7XG4gICAga29Cb2R5VGV4dDogYW55O1xuICAgIGtvSmF2YVRleHQ6IGFueTtcbiAgICBwdWJsaWMgc3VydmV5SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN1cnZleVBvc3RJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgZ2VuZXJhdGVWYWxpZEpTT046IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgc3VydmV5SlNWZXJzaW9uOiBzdHJpbmcgPSBcIjAuMTIuM1wiOyAvL1RPRE9cbiAgICBwdWJsaWMgc3VydmV5Q0ROUGF0aDogc3RyaW5nID0gXCJodHRwczovL3N1cnZleWpzLmF6dXJlZWRnZS5uZXQvXCI7XG4gICAga29TaG93QXNXaW5kb3c6IGFueTtcbiAgICBrb1NjcmlwdFVzaW5nOiBhbnk7XG4gICAga29IYXNJZHM6IGFueTtcbiAgICBrb0xvYWRTdXJ2ZXk6IGFueTtcbiAgICBrb0xpYnJhcnlWZXJzaW9uOiBhbnk7XG4gICAga29WaXNpYmxlSHRtbDogYW55O1xuICAgIHByaXZhdGUgcGxhdGZvcm1TdXJ2ZXlKU1ByZWZpeCA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiYW5ndWxhclwiLFxuICAgICAgICBcImpxdWVyeVwiOiBcImpxdWVyeVwiLFxuICAgICAgICBcImtub2Nrb3V0XCI6IFwia29cIixcbiAgICAgICAgXCJyZWFjdFwiOiBcInJlYWN0XCIsXG4gICAgICAgIFwidnVlXCI6IFwidnVlXCJcbiAgICB9XG4gICAgLypcbiAgICBwcml2YXRlIHBsYXRmb3JtSGVhZGVycyA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiXCIsXG4gICAgICAgIFwianF1ZXJ5XCI6IFwiPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS8zLjEuMS9qcXVlcnkubWluLmpzXFxcIj48L3NjcmlwdD5cIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcIjxzY3JpcHQgc3JjPVxcXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9rbm9ja291dC8zLjMuMC9rbm9ja291dC1taW4uanNcXFwiPjwvc2NyaXB0PlwiLFxuICAgICAgICBcInJlYWN0XCI6IFwiXCIsXG4gICAgICAgIFwidnVlXCI6IFwiPHNjcmlwdCBzcmM9J2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3Z1ZS8yLjEuMTAvdnVlLm1pbi5qcyc+PC9zY3JpcHQ+XCJcbiAgICB9OyovXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUpTb25QYWdlID0ge1xuICAgICAgICBcImFuZ3VsYXJcIjogXCJAQ29tcG9uZW50KHtcXG4gIHNlbGVjdG9yOiAnbmctYXBwJyxcXG4gICAgICAgIHRlbXBsYXRlOiBcXG4gICAgICAgIDxkaXYgaWQ9J3N1cnZleUVsZW1lbnQnPjwvZGl2PlxcXCIsXFxufSlcXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcXG4gICAgbmdPbkluaXQoKSB7XFxuICAgICAgICB2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG4gICAgICAgIHN1cnZleS5vbkNvbXBsZXRlLmFkZChzZW5kRGF0YVRvU2VydmVyKTtcXG4gICAgICAgU3VydmV5LlN1cnZleU5HLnJlbmRlcihcXFwic3VydmV5RWxlbWVudFxcXCIsIHsgbW9kZWw6IHN1cnZleSB9KTtcXG4gICAgfVxcbn1cIixcbiAgICAgICAgXCJqcXVlcnlcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG4kKFxcXCIjc3VydmV5Q29udGFpbmVyXFxcIikuU3VydmV5KHtcXG4gICAgbW9kZWw6IHN1cnZleSxcXG4gICAgb25Db21wbGV0ZTogc2VuZERhdGFUb1NlcnZlclxcbn0pO1wiLFxuICAgICAgICBcImtub2Nrb3V0XCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTiwgXFxcInN1cnZleUNvbnRhaW5lclxcXCIpO1xcbnN1cnZleS5vbkNvbXBsZXRlLmFkZChzZW5kRGF0YVRvU2VydmVyKTtcIixcbiAgICAgICAgXCJyZWFjdFwiOiBcIlJlYWN0RE9NLnJlbmRlcihcXG4gICAgPFN1cnZleS5TdXJ2ZXkganNvbj17IHN1cnZleUpTT04gfSBvbkNvbXBsZXRlPXsgc2VuZERhdGFUb1NlcnZlciB9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwic3VydmV5Q29udGFpbmVyXFxcIikpO1wiLFxuICAgICAgICBcInZ1ZVwiOiBcInZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04pO1xcbm5ldyBWdWUoeyBlbDogJyNzdXJ2ZXlDb250YWluZXInLCBkYXRhOiB7IHN1cnZleTogc3VydmV5IH0gfSk7XCJcbiAgICB9O1xuICAgIHByaXZhdGUgcGxhdGZvcm1KU29uV2luZG93ID0ge1xuICAgICAgICBcImFuZ3VsYXJcIjogXCJAQ29tcG9uZW50KHtcXG4gIHNlbGVjdG9yOiAnbmctYXBwJyxcXG4gICAgICAgIHRlbXBsYXRlOiBcXG4gICAgICAgIDxkaXYgaWQ9J3N1cnZleUVsZW1lbnQnPjwvZGl2PlxcXCIsXFxufSlcXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcXG4gICAgbmdPbkluaXQoKSB7XFxuICAgICAgICB2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG4gICAgICAgIHN1cnZleS5vbkNvbXBsZXRlLmFkZChzZW5kRGF0YVRvU2VydmVyKTtcXG4gICAgICAgU3VydmV5LlN1cnZleVdpbmRvd05HLnJlbmRlcihcXFwic3VydmV5RWxlbWVudFxcXCIsIHsgbW9kZWw6IHN1cnZleSB9KTtcXG4gICAgfVxcbn1cIixcbiAgICAgICAgXCJqcXVlcnlcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG4kKFxcXCIjc3VydmV5Q29udGFpbmVyXFxcIikuU3VydmV5V2luZG93KHtcXG4gICAgbW9kZWw6IHN1cnZleSxcXG4gICAgb25Db21wbGV0ZTogc2VuZERhdGFUb1NlcnZlclxcbn0pO1wiLFxuICAgICAgICBcImtub2Nrb3V0XCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuc3VydmV5V2luZG93LnNob3coKTtcXG5zdXJ2ZXkub25Db21wbGV0ZS5hZGQoc2VuZERhdGFUb1NlcnZlcik7XCIsXG4gICAgICAgIFwicmVhY3RcIjogXCJSZWFjdERPTS5yZW5kZXIoXFxuICAgIDxTdXJ2ZXkuU3VydmV5V2luZG93IGpzb249eyBzdXJ2ZXlKU09OIH0gb25Db21wbGV0ZT17IHNlbmREYXRhVG9TZXJ2ZXIgfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcInN1cnZleUNvbnRhaW5lclxcXCIpKTtcIixcbiAgICAgICAgXCJ2dWVcIjogXCJcIlxuICAgIH07XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUh0bWxvblBhZ2UgPSB7XG4gICAgICAgIFwiYW5ndWxhclwiOiBcIjxuZy1hcHA+PC9uZy1hcHA+XCIsXG4gICAgICAgIFwianF1ZXJ5XCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48L2Rpdj5cIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcIjxkaXYgaWQ9XFxcInN1cnZleUNvbnRhaW5lclxcXCI+PC9kaXY+XCIsXG4gICAgICAgIFwicmVhY3RcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxuICAgICAgICBcInZ1ZVwiOiBcIjxkaXYgaWQ9XFxcInN1cnZleUNvbnRhaW5lclxcXCI+PHN1cnZleSA6c3VydmV5PVxcXCJzdXJ2ZXlcXFwiPjwvc3VydmV5PjwvZGl2PlwiXG4gICAgfTtcbiAgICBwcml2YXRlIHBsYXRmb3JtSHRtbG9uV2luZG93ID0ge1xuICAgICAgICBcImFuZ3VsYXJcIjogXCI8bmctYXBwPjwvbmctYXBwPlwiLFxuICAgICAgICBcImpxdWVyeVwiOiBcIjxkaXYgaWQ9XFxcInN1cnZleUNvbnRhaW5lclxcXCI+PC9kaXY+XCIsXG4gICAgICAgIFwia25vY2tvdXRcIjogXCJcIixcbiAgICAgICAgXCJyZWFjdFwiOiBcIjxkaXYgaWQ9XFxcInN1cnZleUNvbnRhaW5lclxcXCI+PC9kaXY+XCIsXG4gICAgICAgIFwidnVlXCI6IFwiPGRpdiBpZD0nc3VydmV5Q29udGFpbmVyJz48c3VydmV5LXdpbmRvdyA6c3VydmV5PSdzdXJ2ZXknPjwvc3VydmV5LXdpbmRvdz48L2Rpdj5cIlxuICAgIH07XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb0xpYnJhcnlWZXJzaW9uID0ga28ub2JzZXJ2YWJsZShcImpxdWVyeVwiKTtcbiAgICAgICAgdGhpcy5rb1Nob3dBc1dpbmRvdyA9IGtvLm9ic2VydmFibGUoXCJwYWdlXCIpO1xuICAgICAgICB0aGlzLmtvU2NyaXB0VXNpbmcgPSBrby5vYnNlcnZhYmxlKFwiYm9vdHN0cmFwXCIpO1xuICAgICAgICB0aGlzLmtvSGFzSWRzID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29Mb2FkU3VydmV5ID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5rb0hlYWRUZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5rb0phdmFUZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5rb0JvZHlUZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcblxuICAgICAgICB0aGlzLmtvVmlzaWJsZUh0bWwgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmtvU2hvd0FzV2luZG93KCkgPT0gXCJwYWdlXCIgfHwgc2VsZi5wbGF0Zm9ybUh0bWxvbldpbmRvd1tzZWxmLmtvTGlicmFyeVZlcnNpb24oKV0gIT0gXCJcIjsgfSk7XG4gICAgICAgIHRoaXMua29MaWJyYXJ5VmVyc2lvbi5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SGVhZFRleHQoKTsgc2VsZi5zZXRKYXZhVGVzdCgpOyBzZWxmLnNldEJvZHlUZXh0KCk7IH0pO1xuICAgICAgICB0aGlzLmtvU2hvd0FzV2luZG93LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZXRKYXZhVGVzdCgpOyBzZWxmLnNldEJvZHlUZXh0KCk7IH0pO1xuICAgICAgICB0aGlzLmtvU2NyaXB0VXNpbmcuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNldEhlYWRUZXh0KCk7IHNlbGYuc2V0SmF2YVRlc3QoKTsgfSk7XG4gICAgICAgIHRoaXMua29Mb2FkU3VydmV5LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZXRKYXZhVGVzdCgpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQgPSBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGpzb24oKTogYW55IHsgcmV0dXJuIHRoaXMuanNvblZhbHVlOyB9XG4gICAgcHVibGljIHNldCBqc29uKHZhbHVlOiBhbnkpIHsgdGhpcy5qc29uVmFsdWUgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaGFzQWNlRWRpdG9yKCk6IGJvb2xlYW4geyByZXR1cm4gdHlwZW9mIGFjZSAhPT0gXCJ1bmRlZmluZWRcIjsgfVxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNBY2VFZGl0b3IgJiYgdGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQgPSB0aGlzLmNyZWF0ZUVkaXRvcihcInN1cnZleUVtYmVkaW5nSGVhZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdCb2R5ID0gdGhpcy5jcmVhdGVFZGl0b3IoXCJzdXJ2ZXlFbWJlZGluZ0JvZHlcIik7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSmF2YSA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdKYXZhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29IYXNJZHModGhpcy5zdXJ2ZXlJZCAmJiB0aGlzLnN1cnZleVBvc3RJZCk7XG4gICAgICAgIHRoaXMuc2V0Qm9keVRleHQoKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkVGV4dCgpO1xuICAgICAgICB0aGlzLnNldEphdmFUZXN0KCk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0Qm9keVRleHQoKSB7XG4gICAgICAgIHRoaXMuc2V0VGV4dFRvRWRpdG9yKHRoaXMuc3VydmV5RW1iZWRpbmdCb2R5LCB0aGlzLmtvQm9keVRleHQsIHRoaXMucGxhdGZvcm1IdG1sb25QYWdlW3RoaXMua29MaWJyYXJ5VmVyc2lvbigpXSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGdldENETlBhdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc3VydmV5Q0ROUGF0aCArIHRoaXMuc3VydmV5SlNWZXJzaW9uICsgXCIvXCI7IH1cbiAgICBwcml2YXRlIHNldEhlYWRUZXh0KCkge1xuICAgICAgICB2YXIgc3RyID0gXCI8IS0tIFlvdXIgcGxhdGZvcm0gKFwiICsgdGhpcy5rb0xpYnJhcnlWZXJzaW9uKCkgKyBcIikgc2NyaXB0cy4gLS0+XFxuXCI7XG4gICAgICAgIGlmICh0aGlzLmtvU2NyaXB0VXNpbmcoKSAhPSBcImJvb3RzdHJhcFwiKSB7XG4gICAgICAgICAgICBzdHIgKz0gXCJcXG48bGluayBocmVmPVxcXCJcIiArIHRoaXMuZ2V0Q0ROUGF0aCArICBcInN1cnZleS5jc3NcXFwiIHR5cGU9XFxcInRleHQvY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiIC8+XCI7XG4gICAgICAgIH1cbiAgICAgICAgc3RyICs9IFwiXFxuPHNjcmlwdCBzcmM9XFxcIlwiICsgdGhpcy5nZXRDRE5QYXRoICsgICBcInN1cnZleS5cIiArIHRoaXMucGxhdGZvcm1TdXJ2ZXlKU1ByZWZpeFt0aGlzLmtvTGlicmFyeVZlcnNpb24oKV0gKyAgXCIgLm1pbi5qc1xcXCI+PC9zY3JpcHQ+XCI7XG5cbiAgICAgICAgdGhpcy5zZXRUZXh0VG9FZGl0b3IodGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQsIHRoaXMua29IZWFkVGV4dCwgc3RyKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRKYXZhVGVzdCgpIHtcbiAgICAgICAgdGhpcy5zZXRUZXh0VG9FZGl0b3IodGhpcy5zdXJ2ZXlFbWJlZGluZ0phdmEsIHRoaXMua29KYXZhVGV4dCwgdGhpcy5nZXRKYXZhVGV4dCgpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVFZGl0b3IoZWxlbWVudE5hbWU6IHN0cmluZyk6IEFjZUFqYXguRWRpdG9yIHtcbiAgICAgICAgdmFyIGVkaXRvciA9IGFjZS5lZGl0KGVsZW1lbnROYW1lKTtcbiAgICAgICAgZWRpdG9yLnNldFRoZW1lKFwiYWNlL3RoZW1lL21vbm9rYWlcIik7XG4gICAgICAgIGVkaXRvci5zZXNzaW9uLnNldE1vZGUoXCJhY2UvbW9kZS9qc29uXCIpO1xuICAgICAgICBlZGl0b3Iuc2V0U2hvd1ByaW50TWFyZ2luKGZhbHNlKTtcbiAgICAgICAgZWRpdG9yLnJlbmRlcmVyLnNldFNob3dHdXR0ZXIoZmFsc2UpO1xuICAgICAgICBlZGl0b3Iuc2V0UmVhZE9ubHkodHJ1ZSk7XG4gICAgICAgIHJldHVybiBlZGl0b3I7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SmF2YVRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGlzT25QYWdlID0gdGhpcy5rb1Nob3dBc1dpbmRvdygpID09IFwicGFnZVwiO1xuICAgICAgICB2YXIgc3RyID0gdGhpcy5nZXRTYXZlRnVuYygpICsgXCJcXG5cXG5cIjtcbiAgICAgICAgc3RyICs9IGlzT25QYWdlID8gdGhpcy5wbGF0Zm9ybUpTb25QYWdlW3RoaXMua29MaWJyYXJ5VmVyc2lvbigpXSA6IHRoaXMucGxhdGZvcm1KU29uV2luZG93W3RoaXMua29MaWJyYXJ5VmVyc2lvbigpXTtcbiAgICAgICAgdmFyIGpzb25UZXh0ID0gXCJ2YXIgc3VydmV5SlNPTiA9IFwiICsgdGhpcy5nZXRKc29uVGV4dCgpICsgXCJcXG5cXG5cIjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2V0Q3NzKCkgKyBcIlxcblwiICsganNvblRleHQgKyBzdHI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2V0Q3NzKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmtvU2NyaXB0VXNpbmcoKSAhPSBcImJvb3RzdHJhcFwiKSByZXR1cm4gXCJcIjtcbiAgICAgICAgcmV0dXJuIFwiU3VydmV5LlN1cnZleS5jc3NUeXBlID0gXFxcImJvb3RzdHJhcFxcXCI7XFxuXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2F2ZUZ1bmMoKSB7XG4gICAgICAgIHJldHVybiBcImZ1bmN0aW9uIHNlbmREYXRhVG9TZXJ2ZXIoc3VydmV5KSB7XFxuXCIgKyB0aGlzLmdldFNhdmVGdW5jQ29kZSgpICsgXCJcXG59XCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2F2ZUZ1bmNDb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5rb0hhc0lkcygpKSByZXR1cm4gXCIgICAgc3VydmV5LnNlbmRSZXN1bHQoJ1wiICsgdGhpcy5zdXJ2ZXlQb3N0SWQgKyBcIicpO1wiO1xuICAgICAgICByZXR1cm4gXCIgICAgLy9zZW5kIEFqYXggcmVxdWVzdCB0byB5b3VyIHdlYiBzZXJ2ZXIuXFxuICAgIGFsZXJ0KFxcXCJUaGUgcmVzdWx0cyBhcmU6XFxcIiArIEpTT04uc3RyaW5naWZ5KHMuZGF0YSkpO1wiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEpzb25UZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmtvSGFzSWRzKCkgJiYgdGhpcy5rb0xvYWRTdXJ2ZXkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwieyBzdXJ2ZXlJZDogJ1wiICsgdGhpcy5zdXJ2ZXlJZCArIFwiJ31cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZVZhbGlkSlNPTikgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbik7XG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5SlNPTjUoKS5zdHJpbmdpZnkodGhpcy5qc29uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRUZXh0VG9FZGl0b3IoZWRpdG9yOiBBY2VBamF4LkVkaXRvciwga29UZXh0OiBhbnksIHRleHQ6IHN0cmluZykge1xuICAgICAgICBpZiAoZWRpdG9yKSBlZGl0b3Iuc2V0VmFsdWUodGV4dCk7XG4gICAgICAgIGlmIChrb1RleHQpIGtvVGV4dCh0ZXh0KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleUVtYmVkaW5nV2luZG93LnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleUhlbHBlciwgT2JqVHlwZX0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0SXRlbSB7XG4gICAgcHVibGljIHZhbHVlOiBTdXJ2ZXkuQmFzZTtcbiAgICBwdWJsaWMgdGV4dDogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0cyB7XG4gICAgcHVibGljIHN0YXRpYyBpbnRlbmQ6IHN0cmluZyA9IFwiLi4uXCI7XG4gICAgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMga29PYmplY3RzOiBhbnksIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnkpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZWJ1aWxkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBwYWdlSXRlbSA9IHRoaXMuY3JlYXRlUGFnZShwYWdlKTtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdXJ2ZXkucGFnZXMuaW5kZXhPZihwYWdlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gdGhpcy5zdXJ2ZXkucGFnZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgocHJldlBhZ2UpICsgMTtcbiAgICAgICAgICAgIGluZGV4ICs9IHByZXZQYWdlLnF1ZXN0aW9ucy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDE7IC8vMCAtIFN1cnZleVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkSXRlbShwYWdlSXRlbSwgaW5kZXgpO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY3JlYXRlUXVlc3Rpb24ocGFnZS5xdWVzdGlvbnNbaV0pO1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0sIGluZGV4ICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHBhZ2VJdGVtKTtcbiAgICB9XG4gICAgcHVibGljIGFkZFF1ZXN0aW9uKHBhZ2U6IFN1cnZleS5QYWdlLCBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChwYWdlKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICB2YXIgcXVlc3Rpb25JbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pICsgMTtcbiAgICAgICAgaW5kZXggKz0gcXVlc3Rpb25JbmRleDtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKGl0ZW0pO1xuICAgIH1cbiAgICBwdWJsaWMgc2VsZWN0T2JqZWN0KG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIG9ianMgPSB0aGlzLmtvT2JqZWN0cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvYmpzW2ldLnZhbHVlID09IG9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZChvYmpzW2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlbW92ZU9iamVjdChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIGNvdW50VG9SZW1vdmUgPSAxO1xuICAgICAgICBpZiAoU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgIHZhciBwYWdlOiBTdXJ2ZXkuUGFnZSA9IDxTdXJ2ZXkuUGFnZT5vYmo7XG4gICAgICAgICAgICBjb3VudFRvUmVtb3ZlICs9IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvT2JqZWN0cy5zcGxpY2UoaW5kZXgsIGNvdW50VG9SZW1vdmUpO1xuICAgIH1cbiAgICBwdWJsaWMgbmFtZUNoYW5nZWQob2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvYmopO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMua29PYmplY3RzKClbaW5kZXhdLnRleHQodGhpcy5nZXRUZXh0KG9iaikpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VsZWN0TmV4dFF1ZXN0aW9uKGlzVXA6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZFF1ZXN0aW9uKCk7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChxdWVzdGlvbik7XG4gICAgICAgIGlmIChpdGVtSW5kZXggPCAwKSByZXR1cm4gcXVlc3Rpb247XG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcbiAgICAgICAgdmFyIG5ld0l0ZW1JbmRleCA9IGl0ZW1JbmRleCArIChpc1VwID8gLTEgOiAxKTtcbiAgICAgICAgaWYgKG5ld0l0ZW1JbmRleCA8IG9ianMubGVuZ3RoICYmIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9ianNbbmV3SXRlbUluZGV4XS52YWx1ZSkgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgaXRlbUluZGV4ID0gbmV3SXRlbUluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SXRlbUluZGV4ID0gaXRlbUluZGV4O1xuICAgICAgICAgICAgd2hpbGUgKG5ld0l0ZW1JbmRleCA8IG9ianMubGVuZ3RoICYmIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9ianNbbmV3SXRlbUluZGV4XS52YWx1ZSkgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IG5ld0l0ZW1JbmRleDtcbiAgICAgICAgICAgICAgICBuZXdJdGVtSW5kZXggKz0gKGlzVXAgPyAxIDogLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChvYmpzW2l0ZW1JbmRleF0pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUXVlc3Rpb24oKTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIGlmICghdGhpcy5rb1NlbGVjdGVkKCkpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5rb1NlbGVjdGVkKCkudmFsdWU7XG4gICAgICAgIGlmICghb2JqKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5RdWVzdGlvbiA/IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPihvYmopIDogbnVsbDtcblxuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0oaXRlbTogU3VydmV5T2JqZWN0SXRlbSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLmtvT2JqZWN0cygpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua29PYmplY3RzLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSByZWJ1aWxkKCkge1xuICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMob2Jqcyk7XG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb2Jqcy5wdXNoKHRoaXMuY3JlYXRlSXRlbSh0aGlzLnN1cnZleSwgXCJTdXJ2ZXlcIikpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5wYWdlc1tpXTtcbiAgICAgICAgICAgIG9ianMucHVzaCh0aGlzLmNyZWF0ZVBhZ2UocGFnZSkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG9ianMucHVzaCh0aGlzLmNyZWF0ZVF1ZXN0aW9uKHBhZ2UucXVlc3Rpb25zW2pdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb09iamVjdHMob2Jqcyk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLnN1cnZleSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlUGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJdGVtKHBhZ2UsIHRoaXMuZ2V0VGV4dChwYWdlKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSXRlbShxdWVzdGlvbiwgdGhpcy5nZXRUZXh0KHF1ZXN0aW9uKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlSXRlbSh2YWx1ZTogU3VydmV5LkJhc2UsIHRleHQ6IHN0cmluZykge1xuICAgICAgICB2YXIgaXRlbSA9IG5ldyBTdXJ2ZXlPYmplY3RJdGVtKCk7XG4gICAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaXRlbS50ZXh0ID0ga28ub2JzZXJ2YWJsZSh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SXRlbUluZGV4KHZhbHVlOiBTdXJ2ZXkuQmFzZSk6IG51bWJlciB7XG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2Jqc1tpXS52YWx1ZSA9PSB2YWx1ZSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFRleHQob2JqOiBTdXJ2ZXkuQmFzZSk6IHN0cmluZyB7XG4gICAgICAgIHZhciBpbnRlbmQgPSBTdXJ2ZXlPYmplY3RzLmludGVuZDtcbiAgICAgICAgaWYgKFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgIT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICBpbnRlbmQgKz0gU3VydmV5T2JqZWN0cy5pbnRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludGVuZCArIFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKG9iaik7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlPYmplY3RzLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5VW5kb1JlZG8ge1xuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PFVuZG9SZWRvSXRlbT47XG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIGtvQ2FuVW5kbzogYW55OyBrb0NhblJlZG86IGFueTtcbiAgICBwdWJsaWMgbWF4aW11bUNvdW50OiBudW1iZXIgPSAxMDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmtvQ2FuVW5kbyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvQ2FuUmVkbyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5rb0NhblVuZG8oZmFsc2UpO1xuICAgICAgICB0aGlzLmtvQ2FuUmVkbyhmYWxzZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRDdXJyZW50KHN1cnZleTogU3VydmV5LlN1cnZleSwgc2VsZWN0ZWRPYmpOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVW5kb1JlZG9JdGVtKCk7XG4gICAgICAgIGl0ZW0uc3VydmV5SlNPTiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChzdXJ2ZXkpO1xuICAgICAgICBpdGVtLnNlbGVjdGVkT2JqTmFtZSA9IHNlbGVjdGVkT2JqTmFtZTtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMucmVtb3ZlT2xkRGF0YSgpO1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZUNhblVuZG9SZWRvKCk7XG4gICAgfVxuICAgIHB1YmxpYyB1bmRvKCk6IFVuZG9SZWRvSXRlbSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5VbmRvKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9VbmRvUmVkbygtMSk7XG4gICAgfVxuICAgIHB1YmxpYyByZWRvKCk6IFVuZG9SZWRvSXRlbSAge1xuICAgICAgICBpZiAoIXRoaXMuY2FuUmVkbykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLmRvVW5kb1JlZG8oMSk7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlQ2FuVW5kb1JlZG8oKSB7XG4gICAgICAgIHRoaXMua29DYW5VbmRvKHRoaXMuY2FuVW5kbyk7XG4gICAgICAgIHRoaXMua29DYW5SZWRvKHRoaXMuY2FuUmVkbyk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9VbmRvUmVkbyhkSW5kZXg6IG51bWJlcik6IFVuZG9SZWRvSXRlbSB7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gZEluZGV4O1xuICAgICAgICB0aGlzLnVwZGF0ZUNhblVuZG9SZWRvKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID49IDAgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoID8gdGhpcy5pdGVtc1t0aGlzLmluZGV4XSA6IG51bGw7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY2FuVW5kbygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPj0gMSAmJiB0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY2FuUmVkbygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoID4gMSAmJiB0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBwcml2YXRlIHJlbW92ZU9sZERhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCAtIDEgPCB0aGlzLm1heGltdW1Db3VudCkgcmV0dXJuO1xuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSgwLCB0aGlzLml0ZW1zLmxlbmd0aCAtIHRoaXMubWF4aW11bUNvdW50IC0gMSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5kb1JlZG9JdGVtIHtcbiAgICBzdXJ2ZXlKU09OOiBhbnk7XG4gICAgc2VsZWN0ZWRPYmpOYW1lOiBzdHJpbmc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VuZG9yZWRvLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIzX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi9vYmplY3RFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UGFnZXNFZGl0b3J9IGZyb20gXCIuL3BhZ2VzRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleUVtYmVkaW5nV2luZG93fSBmcm9tIFwiLi9zdXJ2ZXlFbWJlZGluZ1dpbmRvd1wiO1xuaW1wb3J0IHtTdXJ2ZXlPYmplY3RzfSBmcm9tIFwiLi9zdXJ2ZXlPYmplY3RzXCI7XG5pbXBvcnQge1N1cnZleVZlcmJzfSBmcm9tIFwiLi9vYmplY3RWZXJic1wiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvclNob3dXaW5kb3d9IGZyb20gXCIuL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlKU09ORWRpdG9yfSBmcm9tIFwiLi9zdXJ2ZXlKU09ORWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVRleHRXb3JrZXJ9IGZyb20gXCIuL3RleHRXb3JrZXJcIlxuaW1wb3J0IHtTdXJ2ZXlVbmRvUmVkbywgVW5kb1JlZG9JdGVtfSBmcm9tIFwiLi91bmRvcmVkb1wiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXIsIE9ialR5cGV9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0IHtEcmFnRHJvcEhlbHBlcn0gZnJvbSBcIi4vZHJhZ2Ryb3BoZWxwZXJcIjtcbmltcG9ydCB7UXVlc3Rpb25Ub29sYm94fSBmcm9tIFwiLi9xdWVzdGlvblRvb2xib3hcIjtcbmltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XG52YXIgdGVtcGxhdGVFZGl0b3JIdG1sID0gcmVxdWlyZShcImh0bWwtbG9hZGVyP2ludGVycG9sYXRlIXZhbC1sb2FkZXIhLi90ZW1wbGF0ZXMvZW50cnkuaHRtbFwiKTtcbnZhciB0ZW1wbGF0ZVBhZ2VIdG1sID0gcmVxdWlyZShcImh0bWwtbG9hZGVyP2ludGVycG9sYXRlIXZhbC1sb2FkZXIhLi90ZW1wbGF0ZXMuc3VydmV5L3RlbXBsYXRlX3BhZ2UuaHRtbFwiKTtcbnZhciB0ZW1wbGF0ZVF1ZXN0aW9uSHRtbCA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4vdGVtcGxhdGVzLnN1cnZleS90ZW1wbGF0ZV9xdWVzdGlvbi5odG1sXCIpO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleUVkaXRvciB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0TmV3U3VydmV5VGV4dDogc3RyaW5nID0gXCJ7IHBhZ2VzOiBbIHsgbmFtZTogJ3BhZ2UxJ31dIH1cIjtcbiAgICBwcml2YXRlIHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlqczogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlqc0V4YW1wbGU6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBqc29uRWRpdG9yOiBTdXJ2ZXlKU09ORWRpdG9yO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RFZGl0b3I6IFN1cnZleU9iamVjdEVkaXRvcjtcbiAgICBwcml2YXRlIHF1ZXN0aW9uRWRpdG9yV2luZG93OiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvclNob3dXaW5kb3c7XG4gICAgcHJpdmF0ZSBwYWdlc0VkaXRvcjogU3VydmV5UGFnZXNFZGl0b3I7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZzogU3VydmV5RW1iZWRpbmdXaW5kb3c7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlPYmplY3RzOiBTdXJ2ZXlPYmplY3RzO1xuICAgIHByaXZhdGUgdG9vbGJveFZhbHVlOiBRdWVzdGlvblRvb2xib3g7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWZXJiczogU3VydmV5VmVyYnM7XG4gICAgcHJpdmF0ZSB1bmRvUmVkbzogU3VydmV5VW5kb1JlZG87XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBwcml2YXRlIHNhdmVTdXJ2ZXlGdW5jVmFsdWU6IChubzogbnVtYmVyLCBvblNhdmVDYWxsYmFjazogKG5vOiBudW1iZXIsIGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIG9wdGlvbnM6IGFueTtcbiAgICBwcml2YXRlIHN0YXRlVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBkcmFnRHJvcEhlbHBlcjogRHJhZ0Ryb3BIZWxwZXIgPSBudWxsO1xuICAgIHByaXZhdGUgc2hvd0pTT05FZGl0b3JUYWJWYWx1ZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIHNob3dUZXN0U3VydmV5VGFiVmFsdWU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzaG93RW1iZWRlZFN1cnZleVRhYlZhbHVlOiBib29sZWFuO1xuXG4gICAgcHVibGljIHN1cnZleUlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdXJ2ZXlQb3N0SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGdlbmVyYXRlVmFsaWRKU09OQ2hhbmdlZENhbGxiYWNrOiAoZ2VuZXJhdGVWYWxpZEpTT046IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgcHVibGljIGFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9yczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eTogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25RdWVzdGlvbkFkZGVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbk1vZGlmaWVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gICAga29Jc1Nob3dEZXNpZ25lcjogYW55O1xuICAgIGtvVmlld1R5cGU6IGFueTtcbiAgICBrb0NhbkRlbGV0ZU9iamVjdDogYW55O1xuICAgIGtvT2JqZWN0czogYW55OyBrb1NlbGVjdGVkT2JqZWN0OiBhbnk7XG4gICAga29TaG93U2F2ZUJ1dHRvbjogYW55O1xuICAgIGtvR2VuZXJhdGVWYWxpZEpTT046IGFueTsga29TaG93T3B0aW9uczogYW55OyBrb1Rlc3RTdXJ2ZXlXaWR0aDogYW55OyBrb0Rlc2lnbmVySGVpZ2h0OiBhbnk7XG4gICAgc2VsZWN0RGVzaWduZXJDbGljazogYW55OyBzZWxlY3RFZGl0b3JDbGljazogYW55OyBzZWxlY3RUZXN0Q2xpY2s6IGFueTsgc2VsZWN0RW1iZWRDbGljazogYW55O1xuICAgIGdlbmVyYXRlVmFsaWRKU09OQ2xpY2s6IGFueTsgZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljazogYW55O1xuICAgIGRvVW5kb0NsaWNrOiBhbnk7IGRvUmVkb0NsaWNrOiBhbnk7XG4gICAgZGVsZXRlT2JqZWN0Q2xpY2s6IGFueTtcbiAgICBrb1N0YXRlOiBhbnk7XG4gICAgcnVuU3VydmV5Q2xpY2s6IGFueTsgZW1iZWRpbmdTdXJ2ZXlDbGljazogYW55O1xuICAgIHNhdmVCdXR0b25DbGljazogYW55O1xuICAgIGRyYWdnaW5nVG9vbGJveEl0ZW06IGFueTsgY2xpY2tUb29sYm94SXRlbTogYW55O1xuICAgIGRyYWdFbmQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCwgb3B0aW9uczogYW55ID0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMua29TaG93T3B0aW9ucyA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvRGVzaWduZXJIZWlnaHQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5rb0NhbkRlbGV0ZU9iamVjdCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmtvU3RhdGUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29TaG93U2F2ZUJ1dHRvbiA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvVGVzdFN1cnZleVdpZHRoID0ga28ub2JzZXJ2YWJsZShcIjEwMCVcIik7XG4gICAgICAgIHRoaXMuc2F2ZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRvU2F2ZSgpOyB9O1xuICAgICAgICB0aGlzLmtvT2JqZWN0cyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRPYmplY3QgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZE9iamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2VsZWN0ZWRPYmplY3RDaGFuZ2VkKG5ld1ZhbHVlICE9IG51bGwgPyBuZXdWYWx1ZS52YWx1ZSA6IG51bGwpOyB9KTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5vcHRpb25zKSBzZWxmLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTiA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgaWYgKHNlbGYuZ2VuZXJhdGVWYWxpZEpTT05DaGFuZ2VkQ2FsbGJhY2spIHNlbGYuZ2VuZXJhdGVWYWxpZEpTT05DaGFuZ2VkQ2FsbGJhY2sobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzID0gbmV3IFN1cnZleU9iamVjdHModGhpcy5rb09iamVjdHMsIHRoaXMua29TZWxlY3RlZE9iamVjdCk7XG4gICAgICAgIHRoaXMudW5kb1JlZG8gPSBuZXcgU3VydmV5VW5kb1JlZG8oKTtcblxuICAgICAgICB0aGlzLnN1cnZleVZlcmJzID0gbmV3IFN1cnZleVZlcmJzKGZ1bmN0aW9uICgpIHsgc2VsZi5zZXRNb2RpZmllZCgpOyB9KTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yID0gbmV3IFN1cnZleU9iamVjdEVkaXRvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSBmdW5jdGlvbiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5vbkNhblNob3dPYmplY3RQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChvcHRpb25zLnByb3BlcnR5LCBvcHRpb25zLm9iamVjdCwgb3B0aW9ucy5uZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uRWRpdG9yV2luZG93ID0gbmV3IFN1cnZleVByb3BlcnR5RWRpdG9yU2hvd1dpbmRvdygpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uRWRpdG9yV2luZG93Lm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSBmdW5jdGlvbiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5vbkNhblNob3dPYmplY3RQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yID0gbmV3IFN1cnZleVBhZ2VzRWRpdG9yKCgpID0+IHsgc2VsZi5hZGRQYWdlKCk7IH0sIChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4geyBzZWxmLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHBhZ2UpOyB9LFxuICAgICAgICAgICAgKGluZGV4RnJvbTogbnVtYmVyLCBpbmRleFRvOiBudW1iZXIpID0+IHsgc2VsZi5tb3ZlUGFnZShpbmRleEZyb20sIGluZGV4VG8pOyB9LCAocGFnZTogU3VydmV5LlBhZ2UpID0+IHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nID0gbmV3IFN1cnZleUVtYmVkaW5nV2luZG93KCk7XG4gICAgICAgIHRoaXMudG9vbGJveFZhbHVlID0gbmV3IFF1ZXN0aW9uVG9vbGJveCh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnF1ZXN0aW9uVHlwZXMgPyB0aGlzLm9wdGlvbnMucXVlc3Rpb25UeXBlcyA6IG51bGwpO1xuXG4gICAgICAgIHRoaXMua29WaWV3VHlwZSA9IGtvLm9ic2VydmFibGUoXCJkZXNpZ25lclwiKTtcbiAgICAgICAgdGhpcy5rb0lzU2hvd0Rlc2lnbmVyID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5rb1ZpZXdUeXBlKCkgPT0gXCJkZXNpZ25lclwiOyB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3REZXNpZ25lckNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dEZXNpZ25lcigpOyB9O1xuICAgICAgICB0aGlzLnNlbGVjdEVkaXRvckNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dKc29uRWRpdG9yKCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0VGVzdENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dUZXN0U3VydmV5KCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0RW1iZWRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93RW1iZWRFZGl0b3IoKTsgfTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVZhbGlkSlNPTkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvR2VuZXJhdGVWYWxpZEpTT04odHJ1ZSk7IH07XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0dlbmVyYXRlVmFsaWRKU09OKGZhbHNlKTsgfTtcbiAgICAgICAgdGhpcy5ydW5TdXJ2ZXlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93TGl2ZVN1cnZleSgpOyB9O1xuICAgICAgICB0aGlzLmVtYmVkaW5nU3VydmV5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd1N1cnZleUVtYmVkaW5nKCk7IH07XG4gICAgICAgIHRoaXMuZGVsZXRlT2JqZWN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZGVsZXRlQ3VycmVudE9iamVjdCgpOyB9O1xuICAgICAgICB0aGlzLmRyYWdnaW5nVG9vbGJveEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgZSkgeyBzZWxmLmRvRHJhZ2dpbmdUb29sYm94SXRlbShpdGVtLmpzb24sIGUpOyB9O1xuICAgICAgICB0aGlzLmNsaWNrVG9vbGJveEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmRvQ2xpY2tUb29sYm94SXRlbShpdGVtLmpzb24pOyB9O1xuICAgICAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoaXRlbSwgZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyLmVuZCgpOyB9O1xuXG4gICAgICAgIHRoaXMuZG9VbmRvQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9VbmRvUmVkbyhzZWxmLnVuZG9SZWRvLnVuZG8oKSk7IH07XG4gICAgICAgIHRoaXMuZG9SZWRvQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9VbmRvUmVkbyhzZWxmLnVuZG9SZWRvLnJlZG8oKSk7IH07XG5cbiAgICAgICAgdGhpcy5qc29uRWRpdG9yID0gbmV3IFN1cnZleUpTT05FZGl0b3IoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGV4dCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIocmVuZGVyZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zaG93SlNPTkVkaXRvclRhYlZhbHVlID0gb3B0aW9ucyAmJiB0eXBlb2YgKG9wdGlvbnMuc2hvd0pTT05FZGl0b3JUYWIpICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2hvd0pTT05FZGl0b3JUYWIgOiB0cnVlO1xuICAgICAgICB0aGlzLnNob3dUZXN0U3VydmV5VGFiVmFsdWUgPSBvcHRpb25zICYmIHR5cGVvZiAob3B0aW9ucy5zaG93VGVzdFN1cnZleVRhYikgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5zaG93VGVzdFN1cnZleVRhYiA6IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWJWYWx1ZSA9IG9wdGlvbnMgJiYgdHlwZW9mIChvcHRpb25zLnNob3dFbWJlZGVkU3VydmV5VGFiKSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnNob3dFbWJlZGVkU3VydmV5VGFiIDogZmFsc2U7XG4gICAgICAgIHRoaXMua29TaG93T3B0aW9ucyhvcHRpb25zICYmIHR5cGVvZiAob3B0aW9ucy5zaG93T3B0aW9ucykgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5zaG93T3B0aW9ucyA6IGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pO1xuICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuZGVzaWduZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua29EZXNpZ25lckhlaWdodChvcHRpb25zLmRlc2lnbmVySGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMub2JqZWN0c0ludGVuZCkge1xuICAgICAgICAgICAgU3VydmV5T2JqZWN0cy5pbnRlbmQgPSBvcHRpb25zLm9iamVjdHNJbnRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0Rlc2lnbmVySGVpZ2h0KClcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IpIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1cnZleVZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgcmVuZGVyKGVsZW1lbnQ6IGFueSA9IG51bGwsIG9wdGlvbnM6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudCA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gdGhpcy5yZW5kZXJlZEVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRlbXBsYXRlRWRpdG9ySHRtbDtcbiAgICAgICAgc2VsZi5hcHBseUJpbmRpbmcoKTtcbiAgICB9XG4gICAgcHVibGljIGxvYWRTdXJ2ZXkoc3VydmV5SWQ6IHN0cmluZykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIG5ldyBTdXJ2ZXkuZHhTdXJ2ZXlTZXJ2aWNlKCkubG9hZFN1cnZleShzdXJ2ZXlJZCwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoc3VjY2VzcyAmJiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRleHQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0ZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5rb0lzU2hvd0Rlc2lnbmVyKCkpIHJldHVybiB0aGlzLmdldFN1cnZleVRleHRGcm9tRGVzaWduZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbkVkaXRvci50ZXh0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB2YXIgdGV4dFdvcmtlciA9IG5ldyBTdXJ2ZXlUZXh0V29ya2VyKHZhbHVlKTtcbiAgICAgICAgaWYgKHRleHRXb3JrZXIuaXNKc29uQ29ycmVjdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0U3VydmV5KG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0ZXh0V29ya2VyLnN1cnZleSkpO1xuICAgICAgICAgICAgdGhpcy5zaG93RGVzaWduZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFRleHRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlZGl0b3JcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCB0b29sYm94KCk6IFF1ZXN0aW9uVG9vbGJveCB7IHJldHVybiB0aGlzLnRvb2xib3hWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgY3VzdG9tVG9vbGJveFF1ZXN0aW9uTWF4Q291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudG9vbGJveC5jb3BpZWRJdGVtTWF4Q291bnQ7IH1cbiAgICBwdWJsaWMgc2V0IGN1c3RvbVRvb2xib3hRdWVzdGlvbk1heENvdW50KHZhbHVlOiBudW1iZXIpIHsgdGhpcy50b29sYm94LmNvcGllZEl0ZW1NYXhDb3VudCA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zdGF0ZVZhbHVlOyB9XG4gICAgcHJvdGVjdGVkIHNldFN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMua29TdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgc2F2ZU5vOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBkb1NhdmUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXCJzYXZpbmdcIik7XG4gICAgICAgIGlmICh0aGlzLnNhdmVTdXJ2ZXlGdW5jKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVObysrO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zYXZlU3VydmV5RnVuYyh0aGlzLnNhdmVObyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb1NhdmVDYWxsYmFjayhubzogbnVtYmVyLCBpc1N1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZShcInNhdmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zYXZlTm8gPT0gbm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHNlbGYuc2V0U3RhdGUoXCJzYXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxzZSBUT0RPXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0TW9kaWZpZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXCJtb2RpZmllZFwiKTtcbiAgICAgICAgdGhpcy5zZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZSgpO1xuICAgICAgICB0aGlzLm9uTW9kaWZpZWQuZmlyZSh0aGlzLCBudWxsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZShjbGVhclN0YXRlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNsZWFyU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudW5kb1JlZG8uY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsT2JqID0gdGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkgPyB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMudW5kb1JlZG8uc2V0Q3VycmVudCh0aGlzLnN1cnZleVZhbHVlLCBzZWxPYmogPyBzZWxPYmoubmFtZSA6IG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNhdmVTdXJ2ZXlGdW5jKCkgeyByZXR1cm4gdGhpcy5zYXZlU3VydmV5RnVuY1ZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzYXZlU3VydmV5RnVuYyh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2F2ZVN1cnZleUZ1bmNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmtvU2hvd1NhdmVCdXR0b24odmFsdWUgIT0gbnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2hvd09wdGlvbnMoKSB7IHJldHVybiB0aGlzLmtvU2hvd09wdGlvbnMoKTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd09wdGlvbnModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5rb1Nob3dPcHRpb25zKHZhbHVlKTsgfVxuICAgIHB1YmxpYyBnZXQgc2hvd0pTT05FZGl0b3JUYWIoKSB7IHJldHVybiB0aGlzLnNob3dKU09ORWRpdG9yVGFiVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dKU09ORWRpdG9yVGFiKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuc2hvd0pTT05FZGl0b3JUYWJWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBzaG93VGVzdFN1cnZleVRhYigpIHsgcmV0dXJuIHRoaXMuc2hvd1Rlc3RTdXJ2ZXlUYWJWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd1Rlc3RTdXJ2ZXlUYWIodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5zaG93VGVzdFN1cnZleVRhYlZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHNob3dFbWJlZGVkU3VydmV5VGFiKCkgeyByZXR1cm4gdGhpcy5zaG93RW1iZWRlZFN1cnZleVRhYlZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzaG93RW1iZWRlZFN1cnZleVRhYih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLnNob3dFbWJlZGVkU3VydmV5VGFiVmFsdWUgPSB2YWx1ZTsgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2FuU2hvd09iamVjdFByb3BlcnR5KG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgb2JqOiBvYmplY3QsIHByb3BlcnR5OiBwcm9wZXJ0eSwgY2FuU2hvdzogdHJ1ZSB9O1xuICAgICAgICB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5LmZpcmUodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNhblNob3c7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUZXh0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmpzb25FZGl0b3IudGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUGFnZSgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UGFnZU5hbWUodGhpcy5zdXJ2ZXkucGFnZXMpO1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleVZhbHVlLmFkZE5ld1BhZ2UobmFtZSk7XG4gICAgICAgIHRoaXMuYWRkUGFnZVRvVUkocGFnZSk7XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGdldExvY1N0cmluZyhzdHI6IHN0cmluZykgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhzdHIpOyB9XG4gICAgcHJpdmF0ZSBtb3ZlUGFnZShpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSB7XG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LnBhZ2VzW2luZGV4RnJvbV07XG4gICAgICAgIHRoaXMuc3VydmV5LnBhZ2VzLnNwbGljZShpbmRleEZyb20sIDEpO1xuICAgICAgICB0aGlzLnN1cnZleS5wYWdlcy5zcGxpY2UoaW5kZXhUbywgMCwgcGFnZSk7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc3VydmV5ID0gdGhpcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QocGFnZSlcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZFBhZ2VUb1VJKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc3VydmV5ID0gdGhpcy5zdXJ2ZXlWYWx1ZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLmFkZFBhZ2UocGFnZSk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9PblF1ZXN0aW9uQWRkZWQocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24ocXVlc3Rpb24pO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBwYWdlOiBwYWdlIH07XG4gICAgICAgIHRoaXMub25RdWVzdGlvbkFkZGVkLmZpcmUodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5hZGRRdWVzdGlvbihwYWdlLCBxdWVzdGlvbik7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvT25RdWVzdGlvblJlbW92ZWQocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnJlbW92ZU9iamVjdChxdWVzdGlvbik7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9iajogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHZhciBpc0RlZmF1bHQgPSBwcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIG9ialtwcm9wZXJ0eS5uYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAocHJvcGVydHkubmFtZSA9PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLm5hbWVDaGFuZ2VkKG9iaik7XG4gICAgICAgICAgICBpZiAoU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLmNoYW5nZU5hbWUoPFN1cnZleS5QYWdlPm9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb1VuZG9SZWRvKGl0ZW06IFVuZG9SZWRvSXRlbSkge1xuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkoaXRlbS5zdXJ2ZXlKU09OKTtcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWRPYmpOYW1lKSB7XG4gICAgICAgICAgICB2YXIgc2VsT2JqID0gdGhpcy5maW5kT2JqQnlOYW1lKGl0ZW0uc2VsZWN0ZWRPYmpOYW1lKTtcbiAgICAgICAgICAgIGlmIChzZWxPYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHNlbE9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnVuZG9SZWRvLmtvQ2FuVW5kbygpID8gXCJtb2RpZmllZFwiIDogXCJzYXZlZFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBmaW5kT2JqQnlOYW1lKG5hbWU6IHN0cmluZyk6IFN1cnZleS5CYXNlIHtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAocGFnZSkgcmV0dXJuIHBhZ2U7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPnRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHJldHVybiBxdWVzdGlvbjtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgY2FuU3dpdGNoVmlld1R5cGUobmV3VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChuZXdUeXBlICYmIHRoaXMua29WaWV3VHlwZSgpID09IG5ld1R5cGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMua29WaWV3VHlwZSgpID09IFwiZGVzaWduZXJcIikge1xuICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yLnRleHQgPSB0aGlzLmdldFN1cnZleVRleHRGcm9tRGVzaWduZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rb1ZpZXdUeXBlKCkgIT0gXCJlZGl0b3JcIikgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghdGhpcy5qc29uRWRpdG9yLmlzSnNvbkNvcnJlY3QpIHtcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuZ2V0TG9jU3RyaW5nKFwiZWQuY29ycmVjdEpTT05cIikpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy5qc29uRWRpdG9yLnN1cnZleSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIHNob3dEZXNpZ25lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXRjaFZpZXdUeXBlKFwiZGVzaWduZXJcIikpIHJldHVybjtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZGVzaWduZXJcIik7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93SnNvbkVkaXRvcigpIHtcbiAgICAgICAgaWYgKHRoaXMua29WaWV3VHlwZSgpID09IFwiZWRpdG9yXCIpIHJldHVybjtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLnNob3codGhpcy5nZXRTdXJ2ZXlUZXh0RnJvbURlc2lnbmVyKCkpO1xuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlZGl0b3JcIik7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93VGVzdFN1cnZleSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXRjaFZpZXdUeXBlKG51bGwpKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2hvd0xpdmVTdXJ2ZXkoKTtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwidGVzdFwiKTtcbiAgICB9XG4gICAgcHVibGljIHNob3dFbWJlZEVkaXRvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXRjaFZpZXdUeXBlKFwiZW1iZWRcIikpIHJldHVybjtcbiAgICAgICAgdGhpcy5zaG93U3VydmV5RW1iZWRpbmcoKTtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZW1iZWRcIik7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpIHtcbiAgICAgICAgdmFyIGpzb24gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy5zdXJ2ZXkpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTikgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDEpO1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleUpTT041KCkuc3RyaW5naWZ5KGpzb24sIG51bGwsIDEpO1xuICAgIH1cbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0Q2hhbmdlZChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBjYW5EZWxldGVPYmplY3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvci5zZWxlY3RlZE9iamVjdCA9IG9iajtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWZXJicy5vYmogPSBvYmo7XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZSA9IDxTdXJ2ZXkuUGFnZT5vYmo7XG4gICAgICAgICAgICBjYW5EZWxldGVPYmplY3QgPSB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGggPiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5W1wic2V0c2VsZWN0ZWRRdWVzdGlvblwiXShvYmopO1xuICAgICAgICAgICAgY2FuRGVsZXRlT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGhpcy5zdXJ2ZXlbXCJzZWxlY3RlZFF1ZXN0aW9uVmFsdWVcIl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlbXCJzZXRzZWxlY3RlZFF1ZXN0aW9uXCJdKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29DYW5EZWxldGVPYmplY3QoY2FuRGVsZXRlT2JqZWN0KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhcHBseUJpbmRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRWxlbWVudCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGtvLmNsZWFuTm9kZSh0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgdGhpcy5yZW5kZXJlZEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnN1cnZleWpzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5anMpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc3VydmV5anMub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDQ2KSBzZWxmLmRlbGV0ZVF1ZXN0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAzOCB8fCBlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RRdWVzdGlvbihlLmtleUNvZGUgPT0gMzgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXlqc0V4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZVwiKTtcblxuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkobmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7XG4gICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLmluaXQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0U3VydmV5KGpzb246IGFueSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSBuZXcgU3VydmV5LlN1cnZleSgpO1xuICAgICAgICB0aGlzLmRyYWdEcm9wSGVscGVyID0gbmV3IERyYWdEcm9wSGVscGVyKDxTdXJ2ZXkuSVN1cnZleT50aGlzLnN1cnZleSwgZnVuY3Rpb24gKCkgeyBzZWxmLnNldE1vZGlmaWVkKCkgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJzZXRKc29uT2JqZWN0XCJdKGpzb24pOyAvL1RPRE9cbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUuaXNFbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcInNldEpzb25PYmplY3RcIl0obmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7IC8vVE9ET1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJkcmFnRHJvcEhlbHBlclwiXSA9IHRoaXMuZHJhZ0Ryb3BIZWxwZXI7XG4gICAgICAgIC8vVE9ETyByZW1vdmUgdGhlIGxpbmUgYWJvdmUgYW5kIGNhbGwgdGhlIG1ldGhvZCBkaXJlY3RseS5cbiAgICAgICAgaWYgKHRoaXMuc3VydmV5W1wic2V0RGVzaWduTW9kZVwiXSkgdGhpcy5zdXJ2ZXlbXCJzZXREZXNpZ25Nb2RlXCJdKHRydWUpO1xuICAgICAgICBlbHNlIHRoaXMuc3VydmV5Lm1vZGUgPSBcImRlc2lnbmVyXCI7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcih0aGlzLnN1cnZleWpzKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnNldFNlbGVjdGVkUGFnZSg8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xuICAgICAgICB0aGlzLnN1cnZleVZlcmJzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wib25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZFwiXS5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHNlbmRlcltcInNlbGVjdGVkUXVlc3Rpb25WYWx1ZVwiXSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wib25FZGl0UXVlc3Rpb25cIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5zaG93UXVlc3Rpb25FZGl0b3Ioc2VsZi5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcIm9uQ29weVF1ZXN0aW9uXCJdLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuYWRkQ3VzdG9tVG9vbGJveFF1ZXN0aW9uKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJvbkZhc3RDb3B5UXVlc3Rpb25cIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5mYXN0Q29weVF1ZXN0aW9uKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJvbkRlbGV0ZUN1cnJlbnRPYmplY3RcIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUHJvY2Vzc0h0bWwuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgb3B0aW9ucy5odG1sID0gc2VsZi5wcm9jZXNzSHRtbChvcHRpb25zLmh0bWwpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vbkN1cnJlbnRQYWdlQ2hhbmdlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLnBhZ2VzRWRpdG9yLnNldFNlbGVjdGVkUGFnZSg8U3VydmV5LlBhZ2U+c2VuZGVyLmN1cnJlbnRQYWdlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25RdWVzdGlvbkFkZGVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PblF1ZXN0aW9uQWRkZWQob3B0aW9ucy5xdWVzdGlvbik7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUXVlc3Rpb25SZW1vdmVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PblF1ZXN0aW9uUmVtb3ZlZChvcHRpb25zLnF1ZXN0aW9uKTsgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgcHJvY2Vzc0h0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFodG1sKSByZXR1cm4gaHRtbDtcbiAgICAgICAgdmFyIHNjcmlwdFJlZ0V4ID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XG4gICAgICAgIHdoaWxlIChzY3JpcHRSZWdFeC50ZXN0KGh0bWwpKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKHNjcmlwdFJlZ0V4LCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb0RyYWdnaW5nVG9vbGJveEl0ZW0oanNvbjogYW55LCBlKSB7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIuc3RhcnREcmFnVG9vbGJveEl0ZW0oZSwgdGhpcy5nZXROZXdRdWVzdGlvbk5hbWUoKSwganNvbik7XG4gICAgfVxuICAgIHByaXZhdGUgZG9DbGlja1Rvb2xib3hJdGVtKGpzb246IGFueSkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZ2V0TmV3UXVlc3Rpb25OYW1lKCk7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24oanNvbltcInR5cGVcIl0sIG5hbWUpO1xuICAgICAgICBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b09iamVjdChqc29uLCBxdWVzdGlvbik7XG4gICAgICAgIHF1ZXN0aW9uLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRvQ2xpY2tRdWVzdGlvbkNvcmUocXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5ld1F1ZXN0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld1F1ZXN0aW9uTmFtZSh0aGlzLnN1cnZleS5nZXRBbGxRdWVzdGlvbnMoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9DbGlja1F1ZXN0aW9uQ29yZShxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlO1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5W1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0aGlzLnN1cnZleVtcInNlbGVjdGVkUXVlc3Rpb25WYWx1ZVwiXSkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2UuYWRkUXVlc3Rpb24ocXVlc3Rpb24sIGluZGV4KTtcbiAgICAgICAgdGhpcy5kcmFnRHJvcEhlbHBlci5zY3JvbGxUb0VsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocXVlc3Rpb24uaWQpKTtcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZVF1ZXN0aW9uKCkge1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFNlbGVjdGVkT2JqQXNRdWVzdGlvbigpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VycmVudE9iamVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc2VsZWN0UXVlc3Rpb24oaXNVcDogYm9vbGVhbikge1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFNlbGVjdGVkT2JqQXNRdWVzdGlvbigpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3ROZXh0UXVlc3Rpb24oaXNVcClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkT2JqQXNRdWVzdGlvbigpOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlO1xuICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopID09IE9ialR5cGUuUXVlc3Rpb24gPyA8U3VydmV5LlF1ZXN0aW9uQmFzZT4ob2JqKTogbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVDdXJyZW50T2JqZWN0KCkge1xuICAgICAgICB0aGlzLmRlbGV0ZU9iamVjdCh0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93UXVlc3Rpb25FZGl0b3IocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uRWRpdG9yV2luZG93LnNob3cocXVlc3Rpb24sIGZ1bmN0aW9uIChxdWVzdGlvbikgeyBzZWxmLm9uUXVlc3Rpb25FZGl0b3JDaGFuZ2VkKHF1ZXN0aW9uKTsgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgb25RdWVzdGlvbkVkaXRvckNoYW5nZWQocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLm5hbWVDaGFuZ2VkKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvci5PYmplY3RDaGFuZ2VkKCk7XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRDdXN0b21Ub29sYm94UXVlc3Rpb24ocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdGhpcy50b29sYm94LmFkZENvcGllZEl0ZW0ocXVlc3Rpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYXN0Q29weVF1ZXN0aW9uKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHF1ZXN0aW9uKTtcbiAgICAgICAganNvbi50eXBlID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xuICAgICAgICB0aGlzLmRvQ2xpY2tUb29sYm94SXRlbSgganNvbiApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlT2JqZWN0KG9iajogYW55KSB7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5yZW1vdmVPYmplY3Qob2JqKTtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopO1xuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnJlbW92ZVBhZ2Uob2JqKTtcbiAgICAgICAgICAgIHRoaXMucGFnZXNFZGl0b3IucmVtb3ZlUGFnZShvYmopO1xuICAgICAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLnJlbW92ZVF1ZXN0aW9uKG9iaik7XG4gICAgICAgICAgICB0aGlzLnN1cnZleVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0obnVsbCk7XG4gICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93TGl2ZVN1cnZleSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1cnZleWpzRXhhbXBsZSkgcmV0dXJuO1xuICAgICAgICB2YXIganNvbiA9IHRoaXMuZ2V0U3VydmV5SlNPTigpO1xuICAgICAgICBpZiAoanNvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoanNvbi5jb29raWVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGpzb24uY29va2llTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5LlN1cnZleShqc29uKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzXCIpO1xuICAgICAgICAgICAgdmFyIHN1cnZleWpzRXhhbXBsZXJlUnVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc0V4YW1wbGVyZVJ1blwiKTtcbiAgICAgICAgICAgIGlmIChzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzKSBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoc3VydmV5anNFeGFtcGxlcmVSdW4pIHN1cnZleWpzRXhhbXBsZXJlUnVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHN1cnZleS5vbkNvbXBsZXRlLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5KSA9PiB7IGlmIChzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzKSBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzLmlubmVySFRNTCA9IHRoaXMuZ2V0TG9jU3RyaW5nKFwiZWQuc3VydmV5UmVzdWx0c1wiKSArIEpTT04uc3RyaW5naWZ5KHN1cnZleS5kYXRhKTsgaWYgKHN1cnZleWpzRXhhbXBsZXJlUnVuKSBzdXJ2ZXlqc0V4YW1wbGVyZVJ1bi5zdHlsZS5kaXNwbGF5ID0gXCJcIjsgfSk7XG4gICAgICAgICAgICBzdXJ2ZXkucmVuZGVyKHRoaXMuc3VydmV5anNFeGFtcGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5anNFeGFtcGxlLmlubmVySFRNTCA9IHRoaXMuZ2V0TG9jU3RyaW5nKFwiZWQuY29ycmVjdEpTT05cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93U3VydmV5RW1iZWRpbmcoKSB7XG4gICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRTdXJ2ZXlKU09OKCk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuanNvbiA9IGpzb247XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuc3VydmV5SWQgPSB0aGlzLnN1cnZleUlkO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLnN1cnZleVBvc3RJZCA9IHRoaXMuc3VydmV5UG9zdElkO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLmdlbmVyYXRlVmFsaWRKU09OID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zaG93KCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U3VydmV5SlNPTigpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5rb0lzU2hvd0Rlc2lnbmVyKCkpIHJldHVybiBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy5zdXJ2ZXkpO1xuICAgICAgICBpZiAodGhpcy5qc29uRWRpdG9yLmlzSnNvbkNvcnJlY3QpIHJldHVybiBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy5qc29uRWRpdG9yLnN1cnZleSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUFubm90YXRpb25zKHRleHQ6IHN0cmluZywgZXJyb3JzOiBhbnlbXSk6IEFjZUFqYXguQW5ub3RhdGlvbltdIHtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gbmV3IEFycmF5PEFjZUFqYXguQW5ub3RhdGlvbj4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9yc1tpXTtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uOiBBY2VBamF4LkFubm90YXRpb24gPSB7IHJvdzogZXJyb3IucG9zaXRpb24uc3RhcnQucm93LCBjb2x1bW46IGVycm9yLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbiwgdGV4dDogZXJyb3IudGV4dCwgdHlwZTogXCJlcnJvclwiIH07XG4gICAgICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG59XG5cblN1cnZleS5TdXJ2ZXkuY3NzVHlwZSA9IFwiYm9vdHN0cmFwXCI7XG5uZXcgU3VydmV5LlN1cnZleVRlbXBsYXRlVGV4dCgpLnJlcGxhY2VUZXh0KHRlbXBsYXRlUGFnZUh0bWwsIFwicGFnZVwiKTtcbm5ldyBTdXJ2ZXkuU3VydmV5VGVtcGxhdGVUZXh0KCkucmVwbGFjZVRleHQodGVtcGxhdGVRdWVzdGlvbkh0bWwsIFwicXVlc3Rpb25cIik7XG5cblN1cnZleS5TdXJ2ZXkucHJvdG90eXBlW1wib25DcmVhdGluZ1wiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5vblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHRoaXMub25FZGl0UXVlc3Rpb24gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgdGhpcy5vbkNvcHlRdWVzdGlvbiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICB0aGlzLm9uRmFzdENvcHlRdWVzdGlvbiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICB0aGlzLm9uRGVsZXRlQ3VycmVudE9iamVjdCA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5lZGl0UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkVkaXRRdWVzdGlvbi5maXJlKHNlbGYpOyB9O1xuICAgIHRoaXMuY29weVF1ZXN0aW9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Db3B5UXVlc3Rpb24uZmlyZShzZWxmKTsgfTtcbiAgICB0aGlzLmZhc3RDb3B5UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkZhc3RDb3B5UXVlc3Rpb24uZmlyZShzZWxmKTsgfTtcbiAgICB0aGlzLmRlbGV0ZUN1cnJlbnRPYmplY3RDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkRlbGV0ZUN1cnJlbnRPYmplY3QuZmlyZShzZWxmKTsgfVxuICAgIHRoaXMua29EcmFnZ2luZ1NvdXJjZSA9IGtvLm9ic2VydmFibGUobnVsbCk7XG59O1xuU3VydmV5LlN1cnZleS5wcm90b3R5cGVbXCJzZXRzZWxlY3RlZFF1ZXN0aW9uXCJdID0gZnVuY3Rpb24odmFsdWU6IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICBpZiAodmFsdWUgPT0gdGhpcy5zZWxlY3RlZFF1ZXN0aW9uVmFsdWUpIHJldHVybjtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZSA9IHZhbHVlO1xuICAgIGlmIChvbGRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIG9sZFZhbHVlW1wib25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZFwiXSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZFF1ZXN0aW9uVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZVtcIm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWRcIl0oKTtcbiAgICB9XG4gICAgdGhpcy5vblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkLmZpcmUodGhpcywgeyAnb2xkU2VsZWN0ZWRRdWVzdGlvbic6IG9sZFZhbHVlLCAnbmV3U2VsZWN0ZWRRdWVzdGlvbic6IHZhbHVlIH0pO1xufTtcblN1cnZleS5TdXJ2ZXkucHJvdG90eXBlW1wiZ2V0RWRpdG9yTG9jU3RyaW5nXCJdID0gZnVuY3Rpb24gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKHZhbHVlKTtcbn07XG5cblN1cnZleS5QYWdlLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZHJhZ0VudGVyQ291bnRlciA9IDA7XG4gICAgdGhpcy5rb0RyYWdnaW5nID0ga28ub2JzZXJ2YWJsZSgtMSk7XG4gICAgdGhpcy5rb0RyYWdnaW5nUXVlc3Rpb24gPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgIHRoaXMua29EcmFnZ2luZ0JvdHRvbSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIHRoaXMua29EcmFnZ2luZy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlciA9IDA7XG4gICAgICAgICAgICBzZWxmLmtvRHJhZ2dpbmdRdWVzdGlvbihudWxsKTtcbiAgICAgICAgICAgIHNlbGYua29EcmFnZ2luZ0JvdHRvbShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBuZXdWYWx1ZSA+PSAwICYmIG5ld1ZhbHVlIDwgc2VsZi5xdWVzdGlvbnMubGVuZ3RoID8gc2VsZi5xdWVzdGlvbnNbbmV3VmFsdWVdIDogbnVsbDtcbiAgICAgICAgICAgIHNlbGYua29EcmFnZ2luZ1F1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgICAgICAgICAgIHNlbGYua29EcmFnZ2luZ0JvdHRvbShuZXdWYWx1ZSA9PSBzZWxmLnF1ZXN0aW9ucy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5rb0RyYWdnaW5nUXVlc3Rpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBpZiAobmV3VmFsdWUpIG5ld1ZhbHVlLmtvSXNEcmFnZ2luZyh0cnVlKTsgfSk7XG4gICAgdGhpcy5rb0RyYWdnaW5nUXVlc3Rpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChvbGRWYWx1ZSkgeyBpZiAob2xkVmFsdWUpIG9sZFZhbHVlLmtvSXNEcmFnZ2luZyhmYWxzZSk7IH0sIHRoaXMsIFwiYmVmb3JlQ2hhbmdlXCIpO1xuICAgIHRoaXMuZHJhZ0VudGVyID0gZnVuY3Rpb24gKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBzZWxmLmRyYWdFbnRlckNvdW50ZXIrKzsgc2VsZi5kb0RyYWdFbnRlcihlKTsgfTtcbiAgICB0aGlzLmRyYWdMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7IHNlbGYuZHJhZ0VudGVyQ291bnRlci0tOyBpZiAoc2VsZi5kcmFnRW50ZXJDb3VudGVyID09PSAwKSBzZWxmLmRvRHJhZ0xlYXZlKGUpOyB9O1xuICAgIHRoaXMuZHJhZ0Ryb3AgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRvRHJvcChlKTsgfTtcbn07XG5TdXJ2ZXkuUGFnZS5wcm90b3R5cGVbXCJkb0Ryb3BcIl0gPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkcmFnRHJvcEhlbHBlciA9IHRoaXMuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xuICAgIGlmIChkcmFnRHJvcEhlbHBlcikge1xuICAgICAgICBkcmFnRHJvcEhlbHBlci5kb0Ryb3AoZSk7XG4gICAgfVxufTtcblN1cnZleS5QYWdlLnByb3RvdHlwZVtcImRvRHJhZ0VudGVyXCJdID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLnF1ZXN0aW9ucy5sZW5ndGggPiAwIHx8IHRoaXMua29EcmFnZ2luZygpID4gMCkgcmV0dXJuO1xuICAgIHZhciBkcmFnRHJvcEhlbHBlciA9IHRoaXMuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xuICAgIGlmIChkcmFnRHJvcEhlbHBlciAmJiBkcmFnRHJvcEhlbHBlci5pc1N1cnZleURyYWdnaW5nKGUpKSB7XG4gICAgICAgIHRoaXMua29EcmFnZ2luZygwKTtcbiAgICB9XG59O1xuU3VydmV5LlBhZ2UucHJvdG90eXBlW1wiZG9EcmFnTGVhdmVcIl0gPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkcmFnRHJvcEhlbHBlciA9IHRoaXMuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xuICAgIGlmIChkcmFnRHJvcEhlbHBlcikge1xuICAgICAgICBkcmFnRHJvcEhlbHBlci5kb0xlYXZlUGFnZShlKTtcbiAgICB9XG59O1xuXG5TdXJ2ZXkuUXVlc3Rpb25CYXNlLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXJWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5rb0lzRHJhZ2dpbmcgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB0aGlzLmtvSXNEcmFnZ2luZ1NvdXJjZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZi5kcmFnRHJvcEhlbHBlclZhbHVlID0gc2VsZi5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuZHJhZ092ZXIgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZik7IH07XG4gICAgdGhpcy5kcmFnRHJvcCA9IGZ1bmN0aW9uIChlKSB7IHNlbGYuZHJhZ0Ryb3BIZWxwZXIoKS5kb0Ryb3AoZSwgc2VsZik7IH07XG4gICAgdGhpcy5kcmFnU3RhcnQgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuc3RhcnREcmFnUXVlc3Rpb24oZSwgc2VsZi5uYW1lKTsgfTtcbiAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZW5kKCk7IH07XG4gICAgdGhpcy5rb0lzU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB0aGlzLmtvT25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNlbGYuZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHNlbGYuZGF0YVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0odGhpcyk7XG4gICAgfVxufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkXCJdID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5rb0lzU2VsZWN0ZWQodGhpcy5kYXRhW1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdID09IHRoaXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIGtvQWN0aXZlVmlldzogYW55O1xuICAgIGtvSXRlbXNUZXh0OiBhbnk7XG4gICAgY2hhbmdlVG9UZXh0Vmlld0NsaWNrOiBhbnk7XG4gICAgY2hhbmdlVG9Gb3JtVmlld0NsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVZpZXcgPSBrby5vYnNlcnZhYmxlKFwiZm9ybVwiKTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29BY3RpdmVWaWV3LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcImZvcm1cIikgc2VsZi51cGRhdGVJdGVtcyhzZWxmLmtvSXRlbXNUZXh0KCkpO1xuICAgICAgICAgICAgZWxzZSBzZWxmLmtvSXRlbXNUZXh0KHNlbGYuZ2V0SXRlbXNUZXh0KCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUb1RleHRWaWV3Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29BY3RpdmVWaWV3KFwidGV4dFwiKTsgfTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUb0Zvcm1WaWV3Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29BY3RpdmVWaWV3KFwiZm9ybVwiKTsgfTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIml0ZW12YWx1ZXNcIjsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua29JdGVtcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMua29JdGVtcygpW2ldO1xuICAgICAgICAgICAgaXRlbS5rb0hhc0Vycm9yKHRoaXMuaXNWYWx1ZUVtcHR5KGl0ZW0ua29WYWx1ZSgpKSk7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgaXRlbS5rb0hhc0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgcmV0dXJuIHsga29WYWx1ZToga28ub2JzZXJ2YWJsZSgpLCBrb1RleHQ6IGtvLm9ic2VydmFibGUoKSwga29IYXNFcnJvcjoga28ub2JzZXJ2YWJsZShmYWxzZSkgfTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbTtcbiAgICAgICAgdmFyIGl0ZW1UZXh0ID0gbnVsbDtcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgIGl0ZW1WYWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICBpdGVtVGV4dCA9IGl0ZW0udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBrb1ZhbHVlOiBrby5vYnNlcnZhYmxlKGl0ZW1WYWx1ZSksIGtvVGV4dDoga28ub2JzZXJ2YWJsZShpdGVtVGV4dCksIGtvSGFzRXJyb3I6IGtvLm9ic2VydmFibGUoZmFsc2UpIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnMgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycztcbiAgICAgICAgdmFyIHRleHQgPSBlZGl0b3JJdGVtLmtvVGV4dCgpO1xuICAgICAgICBpZiAoIWFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycyAmJiBlZGl0b3JJdGVtLmtvVGV4dCgpID09IGVkaXRvckl0ZW0ua29WYWx1ZSgpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWx1ZTogZWRpdG9ySXRlbS5rb1ZhbHVlKCksIHRleHQ6IHRleHQgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvQWN0aXZlVmlldygpICE9IFwiZm9ybVwiKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKHRoaXMua29JdGVtc1RleHQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25CZWZvcmVBcHBseSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSXRlbXModGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgdmFyIHRleHRzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRleHRzW2ldKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVJdGVtID0gbmV3IFN1cnZleS5JdGVtVmFsdWUodGV4dHNbaV0pO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0geyB2YWx1ZTogdmFsdWVJdGVtLnZhbHVlLCB0ZXh0OiAodmFsdWVJdGVtLmhhc1RleHQgPyB2YWx1ZUl0ZW0udGV4dCA6IFwiXCIpIH07XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSXRlbXModGhpcy5nZXRJdGVtc0Zyb21WYWx1ZShpdGVtcykpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHZhciB0ZXh0ID0gW107XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5KGl0ZW0ua29WYWx1ZSgpKSkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgaXRlbVRleHQgPSBpdGVtLmtvVmFsdWUoKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmtvVGV4dCgpKSBpdGVtVGV4dCArPSBTdXJ2ZXkuSXRlbVZhbHVlLlNlcGFyYXRvciArIGl0ZW0ua29UZXh0KCk7XG4gICAgICAgICAgICB0ZXh0LnB1c2goaXRlbVRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0LmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBpc1ZhbHVlRW1wdHkodmFsOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuICF2YWw7XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJpdGVtdmFsdWVzXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yfSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5RHJvcGRvd25Db2x1bW5zRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAga29FZGl0SXRlbTogYW55OyBrb0lzTGlzdDogYW55O1xuICAgIG9uRWRpdEl0ZW1DbGljazogYW55OyBvbkNhbmNlbEVkaXRJdGVtQ2xpY2s6IGFueTtcbiAgICBjb2x1bW5FZGl0b3I6IFN1cnZleVF1ZXN0aW9uRWRpdG9yO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29FZGl0SXRlbSA9IGtvLm9ic2VydmFibGUobnVsbCk7XG4gICAgICAgIHRoaXMua29Jc0xpc3QgPSBrby5vYnNlcnZhYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmtvRWRpdEl0ZW0uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBcbiAgICAgICAgICAgIGlmKHNlbGYua29FZGl0SXRlbSgpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbHVtbkVkaXRvciA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvcihzZWxmLmtvRWRpdEl0ZW0oKS5lZGl0Q29sdW1uLCBudWxsLCBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQFwiICsgc2VsZi5rb0VkaXRJdGVtKCkua29DZWxsVHlwZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoc2VsZi5jb2x1bW5FZGl0b3IpIHNlbGYuY29sdW1uRWRpdG9yLmFwcGx5KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jb2x1bW5FZGl0b3IgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5rb0lzTGlzdChzZWxmLmtvRWRpdEl0ZW0oKSA9PSBudWxsKTsgXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uRWRpdEl0ZW1DbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYua29FZGl0SXRlbShpdGVtKTsgfTtcbiAgICAgICAgdGhpcy5vbkNhbmNlbEVkaXRJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IFxuICAgICAgICAgICAgaWYoc2VsZi5jb2x1bW5FZGl0b3IgJiYgc2VsZi5jb2x1bW5FZGl0b3IuaGFzRXJyb3IoKSkgcmV0dXJuO1xuICAgICAgICAgICAgc2VsZi5rb0VkaXRJdGVtKG51bGwpOyBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIm1hdHJpeGRyb3Bkb3duY29sdW1uc1wiOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5jb2x1bW5FZGl0b3IgIT0gbnVsbCA/IHRoaXMuY29sdW1uRWRpdG9yLmhhc0Vycm9yKCkgOiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtvSXRlbXMoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMua29JdGVtcygpW2ldLmhhc0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XG4gICAgICAgIGlmKHRoaXMuY29sdW1uRWRpdG9yKSB0aGlzLmNvbHVtbkVkaXRvci5hcHBseSgpO1xuICAgICAgICBzdXBlci5vbkJlZm9yZUFwcGx5KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtKG5ldyBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4oXCJcIiwgdGhpcy5vcHRpb25zKSk7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0oaXRlbSwgdGhpcy5vcHRpb25zKTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBjb2x1bUl0ZW0gPSA8U3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtPmVkaXRvckl0ZW07XG4gICAgICAgIGNvbHVtSXRlbS5hcHBseSgpO1xuICAgICAgICByZXR1cm4gY29sdW1JdGVtLmNvbHVtbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0ge1xuICAgIHB1YmxpYyBlZGl0Q29sdW1uOiBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW47XG4gICAga29OYW1lOiBhbnk7IGtvVGl0bGU6IGFueTsga29DZWxsVHlwZTogYW55OyAga29Jc1JlcXVpcmVkOiBhbnk7XG4gICAga29FZGl0b3JOYW1lOiBhbnk7IGtvSGFzRXJyb3I6IGFueTsga29DYW5FZGl0OiBhbnk7IFxuICAgIHB1YmxpYyBvblNob3dDaG9pY2VzQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgY2VsbFR5cGVDaG9pY2VzOiBBcnJheTxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2x1bW46IFN1cnZleS5NYXRyaXhEcm9wZG93bkNvbHVtbiwgcHVibGljIG9wdGlvbnMgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZWRpdENvbHVtbiA9IG5ldyBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4oY29sdW1uLm5hbWUsIGNvbHVtbi50aXRsZSk7XG4gICAgICAgIHRoaXMuY29weUNvbHVtbih0aGlzLmNvbHVtbiwgdGhpcy5lZGl0Q29sdW1uKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2VsbFR5cGVDaG9pY2VzID0gdGhpcy5nZXRQcm9wZXJ0eUNob2ljZXMoXCJjZWxsVHlwZVwiKTtcbiAgICAgICAgdGhpcy5rb05hbWUgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgdGhpcy5rb0NlbGxUeXBlID0ga28ub2JzZXJ2YWJsZShjb2x1bW4uY2VsbFR5cGUpO1xuICAgICAgICB0aGlzLmtvVGl0bGUgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5uYW1lID09PSBjb2x1bW4udGl0bGUgPyBcIlwiIDogY29sdW1uLnRpdGxlKTtcbiAgICAgICAgdGhpcy5rb0lzUmVxdWlyZWQgPSBrby5vYnNlcnZhYmxlKHRoaXMuY29sdW1uLmlzUmVxdWlyZWQpO1xuICAgICAgICB0aGlzLmtvSGFzRXJyb3IgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29DYW5FZGl0ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5rb0NlbGxUeXBlKCkgIT0gXCJkZWZhdWx0XCI7IH0pO1xuICAgICAgICB0aGlzLmtvRWRpdG9yTmFtZSA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uKCkgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmNvbHVtbkVkaXRcIilbXCJmb3JtYXRcIl0oc2VsZi5rb05hbWUoKSk7fSk7XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yKCF0aGlzLmtvTmFtZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMua29IYXNFcnJvcigpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuY29weUNvbHVtbih0aGlzLmVkaXRDb2x1bW4sIHRoaXMuY29sdW1uKTtcbiAgICAgICAgdGhpcy5jb2x1bW4ubmFtZSA9IHRoaXMua29OYW1lKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLnRpdGxlID0gdGhpcy5rb1RpdGxlKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmNlbGxUeXBlID0gdGhpcy5rb0NlbGxUeXBlKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmlzUmVxdWlyZWQgPSB0aGlzLmtvSXNSZXF1aXJlZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGNvcHlDb2x1bW4oc3JjOiBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4sIGRlc3Q6IFN1cnZleS5NYXRyaXhEcm9wZG93bkNvbHVtbikge1xuICAgICAgICBkZXN0Lmhhc090aGVyID0gc3JjLmhhc090aGVyO1xuICAgICAgICBkZXN0LmNob2ljZXMgPSBzcmMuY2hvaWNlcztcbiAgICAgICAgZGVzdC5jb2xDb3VudCA9IHNyYy5jb2xDb3VudDtcbiAgICAgICAgZGVzdC5vcHRpb25zQ2FwdGlvbiA9IHNyYy5vcHRpb25zQ2FwdGlvbjtcbiAgICAgICAgLy9UT0RPIGNoYW5nZSB0byBwcm9wZXJ0aWVzXG4gICAgICAgIGlmKHNyY1tcImNob2ljZXNPcmRlclwiXSkgZGVzdFtcImNob2ljZXNPcmRlclwiXSA9IHNyY1tcImNob2ljZXNPcmRlclwiXTtcbiAgICAgICAgaWYoc3JjW1wiaW5wdXRUeXBlXCJdKSBkZXN0W1wiaW5wdXRUeXBlXCJdID0gc3JjW1wiaW5wdXRUeXBlXCJdO1xuICAgICAgICBpZihzcmNbXCJwbGFjZUhvbGRlclwiXSkgZGVzdFtcInBsYWNlSG9sZGVyXCJdID0gc3JjW1wicGxhY2VIb2xkZXJcIl07XG4gICAgICAgIGlmKHNyY1tcImNob2ljZXNCeVVybFwiXSkgZGVzdFtcImNob2ljZXNCeVVybFwiXS5zZXREYXRhKHNyY1tcImNob2ljZXNCeVVybFwiXSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UHJvcGVydHlDaG9pY2VzKHByb3BldHlOYW1lOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNbaV0ubmFtZSA9PSBwcm9wZXR5TmFtZSkgcmV0dXJuIHByb3BlcnRpZXNbaV0uY2hvaWNlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJtYXRyaXhkcm9wZG93bmNvbHVtbnNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlEcm9wZG93bkNvbHVtbnNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5UmVzdWx0ZnVsbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3Ige1xuICAgIGtvVXJsOiBhbnk7IGtvUGF0aDogYW55OyBrb1ZhbHVlTmFtZTogYW55OyBrb1RpdGxlTmFtZTogYW55OyBcbiAgICBwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5O1xuICAgIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uRHJvcGRvd247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rb1VybCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb1BhdGggPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29WYWx1ZU5hbWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU3VydmV5KCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1VybC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnVybCA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1BhdGguc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnF1ZXN0aW9uLmNob2ljZXNCeVVybC5wYXRoID0gbmV3VmFsdWU7IHNlbGYucnVuKCk7IH0pO1xuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwudmFsdWVOYW1lID0gbmV3VmFsdWU7IHNlbGYucnVuKCk7IH0pO1xuICAgICAgICB0aGlzLmtvVGl0bGVOYW1lLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwudGl0bGVOYW1lID0gbmV3VmFsdWU7IHNlbGYucnVuKCk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicmVzdGZ1bGxcIjsgfVxuICAgIHB1YmxpYyBnZXQgcmVzdGZ1bGxWYWx1ZSgpIHsgcmV0dXJuIDxTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsPnRoaXMudmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS51cmwpIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZW1wdHlcIik7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZS51cmw7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnJlc3RmdWxsVmFsdWU7XG4gICAgICAgIHRoaXMua29VcmwodmFsID8gdmFsLnVybCA6IFwiXCIpO1xuICAgICAgICB0aGlzLmtvUGF0aCh2YWwgPyB2YWwucGF0aCA6IFwiXCIpO1xuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lKHZhbCA/IHZhbC52YWx1ZU5hbWUgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlTmFtZSh2YWwgPyB2YWwudGl0bGVOYW1lIDogXCJcIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICB2YXIgdmFsID0gbmV3IFN1cnZleS5DaG9pY2VzUmVzdGZ1bGwoKTtcbiAgICAgICAgdmFsLnVybCA9IHRoaXMua29VcmwoKTtcbiAgICAgICAgdmFsLnBhdGggPSB0aGlzLmtvUGF0aCgpO1xuICAgICAgICB2YWwudmFsdWVOYW1lID0gdGhpcy5rb1ZhbHVlTmFtZSgpO1xuICAgICAgICB2YWwudGl0bGVOYW1lID0gdGhpcy5rb1RpdGxlTmFtZSgpO1xuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZSh2YWwpO1xuICAgIH1cbiAgICBwcml2YXRlIHJ1bigpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5jaG9pY2VzQnlVcmwucnVuKCk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlU3VydmV5KCkge1xuICAgICAgICB0aGlzLnN1cnZleSA9IG5ldyBTdXJ2ZXkuU3VydmV5KCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnNob3dOYXZpZ2F0aW9uQnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1cnZleS5zaG93UXVlc3Rpb25OdW1iZXJzID0gXCJvZmZcIjtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5hZGROZXdQYWdlKFwicGFnZTFcIik7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSA8U3VydmV5LlF1ZXN0aW9uRHJvcGRvd24+cGFnZS5hZGROZXdRdWVzdGlvbihcImRyb3Bkb3duXCIsIFwicTFcIik7XG4gICAgICAgIHRoaXMucXVlc3Rpb24udGl0bGUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudGVzdFNlcnZpY2VcIilcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5jaG9pY2VzID0gW107XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJyZXN0ZnVsbFwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVJlc3RmdWxsRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge1N1cnZleUhlbHBlcn0gZnJvbSBcIi4uL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3JcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidGV4dGl0ZW1zXCI7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkge1xuICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2Jqcy5wdXNoKHsgbmFtZTogaXRlbXNbaV0ua29OYW1lKCkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVkaXRJdGVtID0geyBrb05hbWU6IGtvLm9ic2VydmFibGUoU3VydmV5SGVscGVyLmdldE5ld05hbWUob2JqcywgXCJ0ZXh0XCIpKSwga29UaXRsZToga28ub2JzZXJ2YWJsZSgpIH07XG4gICAgICAgIHRoaXMuY3JlYXRlVmFsaWRhdG9yc0VkaXRvcihlZGl0SXRlbSwgW10pO1xuICAgICAgICByZXR1cm4gZWRpdEl0ZW07XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIgZWRpdEl0ZW0gPSB7IGtvTmFtZToga28ub2JzZXJ2YWJsZShpdGVtLm5hbWUpLCBrb1RpdGxlOiBrby5vYnNlcnZhYmxlKGl0ZW0udGl0bGUpIH07XG4gICAgICAgIHRoaXMuY3JlYXRlVmFsaWRhdG9yc0VkaXRvcihlZGl0SXRlbSwgaXRlbS52YWxpZGF0b3JzKTtcbiAgICAgICAgcmV0dXJuIGVkaXRJdGVtO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgaXRlbVRleHQgPSBuZXcgU3VydmV5Lk11bHRpcGxlVGV4dEl0ZW0oZWRpdG9ySXRlbS5rb05hbWUoKSwgZWRpdG9ySXRlbS5rb1RpdGxlKCkpO1xuICAgICAgICBpdGVtVGV4dC52YWxpZGF0b3JzID0gZWRpdG9ySXRlbS52YWxpZGF0b3JzO1xuICAgICAgICByZXR1cm4gaXRlbVRleHQ7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVmFsaWRhdG9yc0VkaXRvcihpdGVtOiBhbnksIHZhbGlkYXRvcnM6IEFycmF5PGFueT4pIHtcbiAgICAgICAgaXRlbS52YWxpZGF0b3JzID0gdmFsaWRhdG9ycy5zbGljZSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBvbkl0ZW1DaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1ZhbHVlOiBhbnkpIHsgaXRlbS52YWxpZGF0b3JzID0gbmV3VmFsdWU7IGl0ZW0ua29UZXh0KHNlbGYuZ2V0VGV4dChuZXdWYWx1ZS5sZW5ndGgpKTsgfTtcbiAgICAgICAgdmFyIHByb3BlcnR5RWRpdG9yID0gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9yc0VkaXRvcigpO1xuICAgICAgICBpdGVtLmVkaXRvciA9IHByb3BlcnR5RWRpdG9yO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci5vbkNoYW5nZWQgPSAobmV3VmFsdWU6IGFueSkgPT4geyBvbkl0ZW1DaGFuZ2VkKG5ld1ZhbHVlKTsgfTtcbiAgICAgICAgcHJvcGVydHlFZGl0b3Iub2JqZWN0ID0gaXRlbTtcbiAgICAgICAgcHJvcGVydHlFZGl0b3IudGl0bGUoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVkaXRQcm9wZXJ0eVwiKVtcImZvcm1hdFwiXShcIlZhbGlkYXRvcnNcIikpO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci52YWx1ZSA9IGl0ZW0udmFsaWRhdG9ycztcbiAgICAgICAgaXRlbS5rb1RleHQgPSBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0VGV4dCh2YWxpZGF0b3JzLmxlbmd0aCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFRleHQobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLml0ZW1zXCIpW1wiZm9ybWF0XCJdKGxlbmd0aCk7XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0ZXh0aXRlbXNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRleHRJdGVtc0VkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlcnNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBrb1F1ZXN0aW9uczogYW55OyBrb1BhZ2VzOiBhbnk7XG4gICAgcHVibGljIGtvU2VsZWN0ZWQ6IGFueTtcbiAgICBwdWJsaWMgYXZhaWxhYmxlVHJpZ2dlcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIHRyaWdnZXJDbGFzc2VzOiBBcnJheTxTdXJ2ZXkuSnNvbk1ldGFkYXRhQ2xhc3M+ID0gW107XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvSXRlbXMucmVtb3ZlKHNlbGYua29TZWxlY3RlZCgpKTsgfTtcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKHRyaWdnZXJUeXBlKSB7IHNlbGYuYWRkSXRlbSh0cmlnZ2VyVHlwZSk7IH07XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCA9IGtvLm9ic2VydmFibGUobnVsbCk7XG4gICAgICAgIHRoaXMua29QYWdlcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvUXVlc3Rpb25zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMudHJpZ2dlckNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzdXJ2ZXl0cmlnZ2VyXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZVRyaWdnZXJzID0gdGhpcy5nZXRBdmFpbGFibGVUcmlnZ2VycygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidHJpZ2dlcnNcIjsgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXModGhpcy5nZXROYW1lcygoPFN1cnZleS5TdXJ2ZXk+dGhpcy5vYmplY3QpLnBhZ2VzKSk7XG4gICAgICAgICAgICB0aGlzLmtvUXVlc3Rpb25zKHRoaXMuZ2V0TmFtZXMoKDxTdXJ2ZXkuU3VydmV5PnRoaXMub2JqZWN0KS5nZXRBbGxRdWVzdGlvbnMoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgICAgIGlmICh0aGlzLmtvU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLmtvSXRlbXMoKS5sZW5ndGggPiAwID8gdGhpcy5rb0l0ZW1zKClbMF0gOiBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkSXRlbSh0cmlnZ2VyVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3ModHJpZ2dlclR5cGUpO1xuICAgICAgICB2YXIgdHJpZ2dlckl0ZW0gPSB0aGlzLmNyZWF0ZVByb3BlcnR5VHJpZ2dlcih0cmlnZ2VyKTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zLnB1c2godHJpZ2dlckl0ZW0pO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodHJpZ2dlckl0ZW0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGpzb25PYmogPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKTtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhpdGVtLmdldFR5cGUoKSk7XG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoaXRlbSwgdHJpZ2dlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVByb3BlcnR5VHJpZ2dlcig8U3VydmV5LlN1cnZleVRyaWdnZXI+dHJpZ2dlcik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBlZGl0b3JUcmlnZ2VyID0gPFN1cnZleVByb3BlcnR5VHJpZ2dlcj5lZGl0b3JJdGVtO1xuICAgICAgICByZXR1cm4gZWRpdG9yVHJpZ2dlci5jcmVhdGVUcmlnZ2VyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXZhaWxhYmxlVHJpZ2dlcnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyaWdnZXJDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnRyaWdnZXJDbGFzc2VzW2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmFtZXMoaXRlbXM6IEFycmF5PGFueT4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIG5hbWVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICBpZiAoaXRlbVtcIm5hbWVcIl0pIHtcbiAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGl0ZW1bXCJuYW1lXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZXM7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlUHJvcGVydHlUcmlnZ2VyKHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyKTogU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICAgICAgdmFyIHRyaWdnZXJJdGVtID0gbnVsbDtcbiAgICAgICAgaWYgKHRyaWdnZXIuZ2V0VHlwZSgpID09IFwidmlzaWJsZXRyaWdnZXJcIikge1xuICAgICAgICAgICAgdHJpZ2dlckl0ZW0gPSBuZXcgU3VydmV5UHJvcGVydHlWaXNpYmxlVHJpZ2dlcig8U3VydmV5LlN1cnZleVRyaWdnZXJWaXNpYmxlPnRyaWdnZXIsIHRoaXMua29QYWdlcywgdGhpcy5rb1F1ZXN0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyaWdnZXIuZ2V0VHlwZSgpID09IFwic2V0dmFsdWV0cmlnZ2VyXCIpIHtcbiAgICAgICAgICAgIHRyaWdnZXJJdGVtID0gbmV3IFN1cnZleVByb3BlcnR5U2V0VmFsdWVUcmlnZ2VyKDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclNldFZhbHVlPnRyaWdnZXIsIHRoaXMua29RdWVzdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdHJpZ2dlckl0ZW0pIHtcbiAgICAgICAgICAgIHRyaWdnZXJJdGVtID0gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlcih0cmlnZ2VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJpZ2dlckl0ZW07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAgcHJpdmF0ZSBvcGVyYXRvcnMgPSBbXCJlbXB0eVwiLCBcIm5vdGVtcHR5XCIsIFwiZXF1YWxcIiwgXCJub3RlcXVhbFwiLCBcImNvbnRhaW5zXCIsIFwibm90Y29udGFpbnNcIiwgXCJncmVhdGVyXCIsIFwibGVzc1wiLCBcImdyZWF0ZXJvcmVxdWFsXCIsIFwibGVzc29yZXF1YWxcIl07XG4gICAgcHJpdmF0ZSB0cmlnZ2VyVHlwZTogc3RyaW5nO1xuICAgIGF2YWlsYWJsZU9wZXJhdG9ycyA9IFtdO1xuICAgIGtvTmFtZTogYW55OyBrb09wZXJhdG9yOiBhbnk7IGtvVmFsdWU6IGFueTsga29UeXBlOiBhbnk7XG4gICAga29UZXh0OiBhbnk7IGtvSXNWYWxpZDogYW55OyBrb1JlcXVpcmVWYWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlT3BlcmF0b3JzKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlclR5cGUgPSB0cmlnZ2VyLmdldFR5cGUoKTtcbiAgICAgICAgdGhpcy5rb1R5cGUgPSBrby5vYnNlcnZhYmxlKHRoaXMudHJpZ2dlclR5cGUpO1xuICAgICAgICB0aGlzLmtvTmFtZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5uYW1lKTtcbiAgICAgICAgdGhpcy5rb09wZXJhdG9yID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLm9wZXJhdG9yKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLnZhbHVlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvUmVxdWlyZVZhbHVlID0ga28uY29tcHV0ZWQoKCkgPT4geyByZXR1cm4gc2VsZi5rb09wZXJhdG9yKCkgIT0gXCJlbXB0eVwiICYmIHNlbGYua29PcGVyYXRvcigpICE9IFwibm90ZW1wdHlcIjsgfSk7XG4gICAgICAgIHRoaXMua29Jc1ZhbGlkID0ga28uY29tcHV0ZWQoKCkgPT4geyBpZiAoc2VsZi5rb05hbWUoKSAmJiAoIXNlbGYua29SZXF1aXJlVmFsdWUoKSB8fCBzZWxmLmtvVmFsdWUoKSkpIHJldHVybiB0cnVlOyByZXR1cm4gZmFsc2U7IH0pO1xuICAgICAgICB0aGlzLmtvVGV4dCA9IGtvLmNvbXB1dGVkKCgpID0+IHsgc2VsZi5rb05hbWUoKTsgc2VsZi5rb09wZXJhdG9yKCk7IHNlbGYua29WYWx1ZSgpOyByZXR1cm4gc2VsZi5nZXRUZXh0KCk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyPlN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHRoaXMudHJpZ2dlclR5cGUpO1xuICAgICAgICB0cmlnZ2VyLm5hbWUgPSB0aGlzLmtvTmFtZSgpO1xuICAgICAgICB0cmlnZ2VyLm9wZXJhdG9yID0gdGhpcy5rb09wZXJhdG9yKCk7XG4gICAgICAgIHRyaWdnZXIudmFsdWUgPSB0aGlzLmtvVmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlT3BlcmF0b3JzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3BlcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMub3BlcmF0b3JzW2ldO1xuICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVPcGVyYXRvcnMucHVzaCh7IG5hbWU6IG5hbWUsIHRleHQ6IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvcC5cIiArIG5hbWUpIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMua29Jc1ZhbGlkKCkpIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlck5vdFNldFwiKTtcbiAgICAgICAgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyUnVuSWZcIikgKyBcIiAnXCIgKyB0aGlzLmtvTmFtZSgpICsgXCInIFwiICsgdGhpcy5nZXRPcGVyYXRvclRleHQoKSArIHRoaXMuZ2V0VmFsdWVUZXh0KCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0T3BlcmF0b3JUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBvcCA9IHRoaXMua29PcGVyYXRvcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVPcGVyYXRvcnNbaV0ubmFtZSA9PSBvcCkgcmV0dXJuIHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzW2ldLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFZhbHVlVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMua29SZXF1aXJlVmFsdWUoKSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiBcIiBcIiArIHRoaXMua29WYWx1ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VmlzaWJsZVRyaWdnZXIgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgIHB1YmxpYyBwYWdlczogU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cztcbiAgICBwdWJsaWMgcXVlc3Rpb25zOiBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlclZpc2libGUsIGtvUGFnZXM6IGFueSwga29RdWVzdGlvbnM6IGFueSkge1xuICAgICAgICBzdXBlcih0cmlnZ2VyKTtcbiAgICAgICAgdGhpcy5wYWdlcyA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyTWFrZVBhZ2VzVmlzaWJsZVwiKSwga29QYWdlcygpLCB0cmlnZ2VyLnBhZ2VzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cyhlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlck1ha2VRdWVzdGlvbnNWaXNpYmxlXCIpLCBrb1F1ZXN0aW9ucygpLCB0cmlnZ2VyLnF1ZXN0aW9ucyk7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVUcmlnZ2VyKCk6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSA8U3VydmV5LlN1cnZleVRyaWdnZXJWaXNpYmxlPnN1cGVyLmNyZWF0ZVRyaWdnZXIoKTtcbiAgICAgICAgdHJpZ2dlci5wYWdlcyA9IHRoaXMucGFnZXMua29DaG9vc2VuKCk7XG4gICAgICAgIHRyaWdnZXIucXVlc3Rpb25zID0gdGhpcy5xdWVzdGlvbnMua29DaG9vc2VuKCk7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5U2V0VmFsdWVUcmlnZ2VyIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICBrb1F1ZXN0aW9uczogYW55OyBrb3NldFRvTmFtZTogYW55OyBrb3NldFZhbHVlOiBhbnk7IGtvaXNWYXJpYWJsZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlclNldFZhbHVlLCBrb1F1ZXN0aW9uczogYW55KSB7XG4gICAgICAgIHN1cGVyKHRyaWdnZXIpO1xuICAgICAgICB0aGlzLmtvUXVlc3Rpb25zID0ga29RdWVzdGlvbnM7XG4gICAgICAgIHRoaXMua29zZXRUb05hbWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIuc2V0VG9OYW1lKTtcbiAgICAgICAgdGhpcy5rb3NldFZhbHVlID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLnNldFZhbHVlKTtcbiAgICAgICAgdGhpcy5rb2lzVmFyaWFibGUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIuaXNWYXJpYWJsZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVUcmlnZ2VyKCk6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSA8U3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZT5zdXBlci5jcmVhdGVUcmlnZ2VyKCk7XG4gICAgICAgIHRyaWdnZXIuc2V0VG9OYW1lID0gdGhpcy5rb3NldFRvTmFtZSgpO1xuICAgICAgICB0cmlnZ2VyLnNldFZhbHVlID0gdGhpcy5rb3NldFZhbHVlKCk7XG4gICAgICAgIHRyaWdnZXIuaXNWYXJpYWJsZSA9IHRoaXMua29pc1ZhcmlhYmxlKCk7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzIHtcbiAgICBrb09iamVjdHM6IGFueTtcbiAgICBrb0Nob29zZW46IGFueTtcbiAgICBrb1NlbGVjdGVkOiBhbnk7XG4gICAga29DaG9vc2VuU2VsZWN0ZWQ6IGFueTtcbiAgICBwdWJsaWMgb25EZWxldGVDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkFkZENsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcsIGFsbE9iamVjdHM6IEFycmF5PHN0cmluZz4sIGNob29zZW5PYmplY3RzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMua29DaG9vc2VuID0ga28ub2JzZXJ2YWJsZUFycmF5KGNob29zZW5PYmplY3RzKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsT2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbGxPYmplY3RzW2ldO1xuICAgICAgICAgICAgaWYgKGNob29zZW5PYmplY3RzLmluZGV4T2YoaXRlbSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvT2JqZWN0cyA9IGtvLm9ic2VydmFibGVBcnJheShhcnJheSk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb0Nob29zZW5TZWxlY3RlZCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZGVsZXRlSXRlbSgpOyB9O1xuICAgICAgICB0aGlzLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYWRkSXRlbSgpOyB9XG4gICAgfVxuICAgIHByaXZhdGUgZGVsZXRlSXRlbSgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJdGVtcyh0aGlzLmtvQ2hvb3NlblNlbGVjdGVkKCksIHRoaXMua29DaG9vc2VuLCB0aGlzLmtvT2JqZWN0cyk7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbSgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJdGVtcyh0aGlzLmtvU2VsZWN0ZWQoKSwgdGhpcy5rb09iamVjdHMsIHRoaXMua29DaG9vc2VuKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VJdGVtcyhpdGVtOiBzdHJpbmcsIHJlbW92ZWRGcm9tOiBhbnksIGFkZFRvOiBhbnkpIHtcbiAgICAgICAgcmVtb3ZlZEZyb20ucmVtb3ZlKGl0ZW0pO1xuICAgICAgICBhZGRUby5wdXNoKGl0ZW0pO1xuICAgICAgICByZW1vdmVkRnJvbS5zb3J0KCk7XG4gICAgICAgIGFkZFRvLnNvcnQoKTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInRyaWdnZXJzXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlcnNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRyaWdnZXJzRWRpdG9yLnRzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJib290c3RyYXBcIixcImNvbW1vbmpzMlwiOlwiYm9vdHN0cmFwXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwXCIsXCJhbWRcIjpcImJvb3RzdHJhcFwifVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInN2ZF9jb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1kZWZhdWx0IGNvbnRhaW5lci1mbHVpZCBuYXYgbmF2LXRhYnMgc3ZkX21lbnVcXFwiPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwiY3NzOiB7YWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gJ2Rlc2lnbmVyJ31cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0RGVzaWduZXJDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5kZXNpZ25lcicpXFxcIj48L2E+PC9saT5cXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNob3dKU09ORWRpdG9yVGFiLCBjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSAnZWRpdG9yJ31cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0RWRpdG9yQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuanNvbkVkaXRvcicpXFxcIj48L2E+PC9saT5cXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNob3dUZXN0U3VydmV5VGFiLCBjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSAndGVzdCd9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdFRlc3RDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC50ZXN0U3VydmV5JylcXFwiPjwvYT48L2xpPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwidmlzaWJsZTogc2hvd0VtYmVkZWRTdXJ2ZXlUYWIsIGNzczoge2FjdGl2ZToga29WaWV3VHlwZSgpID09ICdlbWJlZCd9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdEVtYmVkQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuZW1iZWRTdXJ2ZXknKVxcXCI+PC9hPjwvbGk+XFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInN2ZF9hY3Rpb25zXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvSXNTaG93RGVzaWduZXJcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZTp1bmRvUmVkby5rb0NhblVuZG8sIGNsaWNrOiBkb1VuZG9DbGlja1xcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLnVuZG8nKVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwic3ZkX2FjdGlvbnNcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29Jc1Nob3dEZXNpZ25lclxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOnVuZG9SZWRvLmtvQ2FuUmVkbywgY2xpY2s6IGRvUmVkb0NsaWNrXFxcIj48c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQucmVkbycpXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJzdmRfYWN0aW9uc1xcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAoa29Jc1Nob3dEZXNpZ25lcigpICYmIGtvU2hvd09wdGlvbnMoKSlcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBpbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5vcHRpb25zJylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgT3B0aW9ucyBcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcImNzczoge2FjdGl2ZToga29HZW5lcmF0ZVZhbGlkSlNPTn1cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6Z2VuZXJhdGVWYWxpZEpTT05DbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5nZW5lcmF0ZVZhbGlkSlNPTicpXFxcIj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcImNzczoge2FjdGl2ZTogIWtvR2VuZXJhdGVWYWxpZEpTT04oKX1cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6Z2VuZXJhdGVSZWFkYWJsZUpTT05DbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5nZW5lcmF0ZVJlYWRhYmxlSlNPTicpXFxcIj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcInN2ZF9hY3Rpb25zXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAndGVzdCdcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBpbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInN1cnZleVRlc3RXaWR0aFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQudGVzdFN1cnZleVdpZHRoJykgKyAnICcgKyAkcm9vdC5rb1Rlc3RTdXJ2ZXlXaWR0aCgpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzdXJ2ZXlUZXN0V2lkdGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGtvVGVzdFN1cnZleVdpZHRoLmJpbmQoJGRhdGEsICcxMDAlJylcXFwiPjEwMCU8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBrb1Rlc3RTdXJ2ZXlXaWR0aC5iaW5kKCRkYXRhLCAnMTIwMHB4JylcXFwiPjEyMDBweDwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGtvVGVzdFN1cnZleVdpZHRoLmJpbmQoJGRhdGEsICcxMDAwcHgnKVxcXCI+MTAwMHB4PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazoga29UZXN0U3VydmV5V2lkdGguYmluZCgkZGF0YSwgJzgwMHB4JylcXFwiPjgwMHB4PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazoga29UZXN0U3VydmV5V2lkdGguYmluZCgkZGF0YSwgJzYwMHB4JylcXFwiPjYwMHB4PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazoga29UZXN0U3VydmV5V2lkdGguYmluZCgkZGF0YSwgJzQwMHB4JylcXFwiPjQwMHB4PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJzdmRfYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgc3ZkX3NhdmVfYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBzYXZlQnV0dG9uQ2xpY2ssIHZpc2libGU6IGtvU2hvd1NhdmVCdXR0b25cXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5zYXZlU3VydmV5JylcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHN2ZF9jb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBzdmRfc3VydmV5X2Rlc2lnbmVyXFxcIiAgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gJ2Rlc2lnbmVyJ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTIgY29sLW1kLTIgY29sLXNtLTEgY29sLXhzLTEgcGFuZWwgcGFuZWwtZGVmYXVsdCBzdmRfdG9vbGJveFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cC12ZXJ0aWNhbFxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCU7cGFkZGluZy1yaWdodDoycHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiB0b29sYm94LmtvSXRlbXMgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmxlZnQ7IG1hcmdpbjoxcHg7bWluLWhlaWdodDozN3B4OyB3aWR0aDoxMDAlXFxcIiBkcmFnZ2FibGU9XFxcInRydWVcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRyb290LmNsaWNrVG9vbGJveEl0ZW0sIGV2ZW50OntkcmFnc3RhcnQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRyb290LmRyYWdnaW5nVG9vbGJveEl0ZW0oJGRhdGEsIGUpOyByZXR1cm4gdHJ1ZTt9LCBkcmFnZW5kOiBmdW5jdGlvbihlbCwgZSkgeyAkcm9vdC5kcmFnRW5kKCk7IH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcImNzczogaWNvbk5hbWUsIGF0dHI6IHt0aXRsZTogdGl0bGV9XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN2ZF90b29sYm94X2l0ZW1fdGV4dCBoaWRkZW4tc20gaGlkZGVuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6dGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNyBjb2wtbWQtNyBjb2wtc20tOCBjb2wteHMtMTEgc3ZkX2VkaXRvcnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdmRfcGFnZXNfZWRpdG9yXFxcIiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdwYWdlZWRpdG9yJywgZGF0YTogcGFnZXNFZGl0b3IgfVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN2ZF9xdWVzdGlvbnNfZWRpdG9yXFxcIiBpZD1cXFwic2Nyb2xsYWJsZURpdlxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZToge2hlaWdodDoga29EZXNpZ25lckhlaWdodH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMyBoaWRkZW4teHMgcGFuZWwgcGFuZWwtZGVmYXVsdCBzdmRfcHJvcGVydGllc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmcgaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3VzdG9tLXNlbGVjdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IGtvT2JqZWN0cywgb3B0aW9uc1RleHQ6ICd0ZXh0JywgdmFsdWU6IGtvU2VsZWN0ZWRPYmplY3RcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29DYW5EZWxldGVPYmplY3QsIGNsaWNrOiBkZWxldGVDdXJyZW50T2JqZWN0LCBhdHRyOiB7IHRpdGxlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLmRlbFNlbE9iamVjdCcpfVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN2ZF9vYmplY3RfZWRpdG9yXFxcIiBkYXRhLWJpbmQ9XFxcInN0eWxlOiB7aGVpZ2h0OiBrb0Rlc2lnbmVySGVpZ2h0fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ29iamVjdGVkaXRvcicsIGRhdGE6IHNlbGVjdGVkT2JqZWN0RWRpdG9yIH1cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6c3VydmV5VmVyYnMua29IYXNWZXJic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ29iamVjdHZlcmJzJywgZGF0YTogc3VydmV5VmVyYnMgfVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZToga29WaWV3VHlwZSgpID09ICdlZGl0b3InXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ2pzb25lZGl0b3InLCBkYXRhOiBqc29uRWRpdG9yIH1cXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc1Rlc3RcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29WaWV3VHlwZSgpID09ICd0ZXN0Jywgc3R5bGU6IHt3aWR0aDoga29UZXN0U3VydmV5V2lkdGh9XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc0V4YW1wbGVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInN1cnZleWpzRXhhbXBsZVJlc3VsdHNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInN1cnZleWpzRXhhbXBsZXJlUnVuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdFRlc3RDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC50ZXN0U3VydmV5QWdhaW4nKVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZVxcXCI+VGVzdCBBZ2FpbjwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc0VtYmVkXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAnZW1iZWQnXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ3N1cnZleWVtYmVkaW5nJywgZGF0YTogc3VydmV5RW1iZWRpbmcgfVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAncXVlc3Rpb25lZGl0b3InLCBkYXRhOiBxdWVzdGlvbkVkaXRvcldpbmRvdyB9XFxcIj48L2Rpdj5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvaW5kZXguaHRtbFxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwianNvbmVkaXRvclxcXCI+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAhaGFzQWNlRWRpdG9yXFxcIj5cXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwic3ZkX2pzb25fZWRpdG9yX2FyZWFcXFwiIGRhdGEtYmluZD1cXFwidGV4dElucHV0OmtvVGV4dFxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29FcnJvcnMgLS0+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxzcGFuPkVycm9yOiA8L3NwYW4+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0ZXh0XFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0gL2tvICAtLT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgaWQ9XFxcInN1cnZleWpzSlNPTkVkaXRvclxcXCIgY2xhc3M9XFxcInN2ZF9qc29uX2VkaXRvclxcXCI+PC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL2pzb25lZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwib2JqZWN0ZWRpdG9yXFxcIj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSBzdmRfdGFibGUtbm93cmFwXFxcIj5cXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XFxcImZvcmVhY2g6IGtvUHJvcGVydGllc1xcXCI+XFxuICAgICAgICAgICAgPHRyIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuY2hhbmdlQWN0aXZlUHJvcGVydHkoJGRhdGEpLCBjc3M6IHsnYWN0aXZlJzogJHBhcmVudC5rb0FjdGl2ZVByb3BlcnR5KCkgPT0gJGRhdGF9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cXFwidGV4dDogZGlzcGxheU5hbWUsIGF0dHI6IHt0aXRsZTogdGl0bGV9XFxcIiB3aWR0aD1cXFwiNTAlXFxcIj48L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjUwJVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IGtvVGV4dCwgdmlzaWJsZTogJHBhcmVudC5rb0FjdGl2ZVByb3BlcnR5KCkgIT0gJGRhdGEgfHwgZGlzYWJsZWQsIGF0dHI6IHt0aXRsZToga29UZXh0fVxcXCIgc3R5bGU9XFxcInRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlblxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpID09ICRkYXRhICYmICFkaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItJyArIGVkaXRvclR5cGUsIGRhdGE6ICRkYXRhIH0gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90Ym9keT5cXG4gICAgPC90YWJsZT5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvb2JqZWN0ZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcIm9iamVjdHZlcmJzXFxcIj5cXG4gICAgPCEtLSBrbyBmb3JlYWNoOiBrb1ZlcmJzIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiIGRhdGEtYmluZD1cXFwidGV4dDp0ZXh0XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogJ3RleHQnLCBvcHRpb25zVmFsdWU6J3ZhbHVlJywgdmFsdWU6IGtvU2VsZWN0ZWRJdGVtXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8IS0tIC9rbyAgLS0+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL29iamVjdHZlcmJzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInBhZ2VlZGl0b3JcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCIgZGF0YS1iaW5kPVxcXCJ0YWJzOnRydWVcXFwiPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb1BhZ2VzIC0tPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwiY3NzOiB7YWN0aXZlOiBrb1NlbGVjdGVkKCl9LGV2ZW50OntcXG4gICAgICAgICAgIGtleWRvd246ZnVuY3Rpb24oZWwsIGUpeyAkcGFyZW50LmtleURvd24oZWwsIGUpOyB9LFxcbiAgICAgICAgICAgZHJhZ3N0YXJ0OmZ1bmN0aW9uKGVsLCBlKXsgJHBhcmVudC5kcmFnU3RhcnQoZWwpOyByZXR1cm4gdHJ1ZTsgfSxcXG4gICAgICAgICAgIGRyYWdvdmVyOmZ1bmN0aW9uKGVsLCBlKXsgJHBhcmVudC5kcmFnT3ZlcihlbCk7fSxcXG4gICAgICAgICAgIGRyYWdlbmQ6ZnVuY3Rpb24oZWwsIGUpeyAkcGFyZW50LmRyYWdFbmQoKTt9LFxcbiAgICAgICAgICAgZHJvcDpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQuZHJhZ0Ryb3AoZWwpO31cXG4gICAgICAgICB9XFxcIj4gXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInN2ZF9wYWdlX25hdlxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazokcGFyZW50LnNlbGVjdFBhZ2VDbGlja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBzdmRfYWRkX25ld19wYWdlX2J0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazphZGROZXdQYWdlQ2xpY2ssIGF0dHI6IHt0aXRsZTogICRyb290LmdldExvY1N0cmluZygnZWQuYWRkTmV3UGFnZScpfVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj48L2xpPlxcbiAgICA8L3VsPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wYWdlZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWJvb2xlYW5cXFwiPlxcbiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDoga29WYWx1ZVxcXCIgLz5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWJvb2xlYW4uaHRtbFxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItZHJvcGRvd25cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjdXN0b20tc2VsZWN0XFxcIj5cXG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZSwgb3B0aW9uczogY2hvaWNlc1xcXCIgIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIj48L3NlbGVjdD5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1kcm9wZG93bi5odG1sXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1leHByZXNzaW9uXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcblxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LWV4cHJlc3Npb25cXFwiPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIHJvd3M9XFxcIjhcXFwiIGF1dG9mb2N1cz1cXFwiYXV0b2ZvY3VzXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRyb290LmdldExvY1N0cmluZygncGUuZXhwcmVzc2lvbkhlbHAnKVxcXCIgc3R5bGU9XFxcIndoaXRlLXNwYWNlOm5vcm1hbFxcXCI+PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWV4cHJlc3Npb24uaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItaHRtbFxcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1odG1sXFxcIj5cXG4gICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIHJvd3M9XFxcIjEwXFxcIiBhdXRvZm9jdXM9XFxcImF1dG9mb2N1c1xcXCI+PC90ZXh0YXJlYT5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWh0bWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItaXRlbXZhbHVlc1xcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgY2xhc3M9XFxcImJ0bi14c1xcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1pdGVtdmFsdWVzXFxcIj5cXG4gICAgPGRpdiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbTozcHhcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcImNzczogeydidG4gYnRuLXByaW1hcnknOmtvQWN0aXZlVmlldygpID09ICdmb3JtJywgJ2J0bi1saW5rJzprb0FjdGl2ZVZpZXcoKSAhPSAnZm9ybSd9LCBjbGljazpjaGFuZ2VUb0Zvcm1WaWV3Q2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuZm9ybUVudHJ5JylcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcImNzczogeydidG4gYnRuLXByaW1hcnknOmtvQWN0aXZlVmlldygpICE9ICdmb3JtJywgJ2J0bi1saW5rJzprb0FjdGl2ZVZpZXcoKSA9PSAnZm9ybSd9LCBjbGljazpjaGFuZ2VUb1RleHRWaWV3Q2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuZmFzdEVudHJ5JylcXFwiPjwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29BY3RpdmVWaWV3KCkgPT0gJ2Zvcm0nXFxcIiBzdHlsZT1cXFwib3ZlcmZsb3cteTogYXV0bzsgb3ZlcmZsb3cteDpoaWRkZW47IG1heC1oZWlnaHQ6NDAwcHg7bWluLWhlaWdodDoyMDBweFxcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiA+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudmFsdWUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudGV4dCcpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29JdGVtcyAtLT5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCIgcm9sZT1cXFwiZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4teHNcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogJGluZGV4KCkgPiAwLCBjbGljazogJHBhcmVudC5vbk1vdmVVcENsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy11cFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXhzXFxcIiBzdHlsZT1cXFwiZmxvYXQ6bm9uZVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAkaW5kZXgoKSA8ICRwYXJlbnQua29JdGVtcygpLmxlbmd0aCAtIDEsIGNsaWNrOiAkcGFyZW50Lm9uTW92ZURvd25DbGlja1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93blxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjIwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlciBuby1wYWRkaW5nXFxcIiByb2xlPVxcXCJhbGVydFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvSGFzRXJyb3IsIHRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuZW50ZXJOZXdWYWx1ZScpXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29UZXh0XFxcIiBzdHlsZT1cXFwid2lkdGg6MjAwcHhcXFwiIC8+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4teHNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQub25EZWxldGVDbGlja1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYnRuLXRvb2xiYXJcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0FjdGl2ZVZpZXcoKSA9PSAnZm9ybSdcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25BZGRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUuYWRkTmV3JylcXFwiIC8+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQ2xlYXJDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUucmVtb3ZlQWxsJylcXFwiIC8+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0FjdGl2ZVZpZXcoKSAhPSAnZm9ybSdcXFwiPlxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidGV4dElucHV0OiBrb0l0ZW1zVGV4dFxcXCIgc3R5bGU9XFxcIm92ZXJmbG93LXk6IGF1dG87IG92ZXJmbG93LXg6aGlkZGVuOyBtYXgtaGVpZ2h0OjQwMHB4OyBtaW4taGVpZ2h0OjI1MHB4OyB3aWR0aDoxMDAlXFxcIj48L3RleHRhcmVhPlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWl0ZW12YWx1ZXMuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItbWF0cml4ZHJvcGRvd25jb2x1bW5zXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LW1hdHJpeGRyb3Bkb3duY29sdW1uc1xcXCI+XFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29Jc0xpc3RcXFwiPlxcbiAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5yZXF1aXJlZCcpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmNlbGxUeXBlJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUubmFtZScpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRpdGxlJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29JdGVtcyAtLT5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb0lzUmVxdWlyZWRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb0NhbkVkaXQsIGNsaWNrOiAkcGFyZW50Lm9uRWRpdEl0ZW1DbGlja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBjZWxsVHlwZUNob2ljZXMsIHZhbHVlOiBrb0NlbGxUeXBlXFxcIiAgc3R5bGU9XFxcIndpZHRoOjExMHB4XFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29OYW1lXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXIgbm8tcGFkZGluZ1xcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0hhc0Vycm9yLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmVudGVyTmV3VmFsdWUnKVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1RpdGxlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTIwcHhcXFwiIC8+PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCIzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBidG4tdG9vbGJhclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25BZGRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUuYWRkTmV3JylcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQ2xlYXJDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUucmVtb3ZlQWxsJylcXFwiXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuICAgICA8IS0tIGtvIGlmOiAha29Jc0xpc3QoKSAtLT5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcInBhZGRpbmc6IDVweFxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQ2FuY2VsRWRpdEl0ZW1DbGlja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBrb0VkaXRJdGVtKCkua29FZGl0b3JOYW1lXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFxcInF1ZXN0aW9uZWRpdG9yLWNvbnRlbnRcXFwiLCBkYXRhOiBjb2x1bW5FZGl0b3IgfSAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1ucy5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1tb2RhbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWVkaXRvci5pc0VkaXRhYmxlXFxcIj5cXG4gICAgICAgIDxhIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgZGF0YS1iaW5kPVxcXCJhdHRyOiB7J2RhdGEtdGFyZ2V0JyA6IG1vZGFsTmFtZVRhcmdldH1cXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDoga29UZXh0XFxcIj48L3NwYW4+PC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDJweDtcXFwiIGRhdGEtYmluZD1cXFwiYXR0cjogeydkYXRhLXRhcmdldCcgOiBtb2RhbE5hbWVUYXJnZXR9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTplZGl0b3IuaXNFZGl0YWJsZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6dGFibGVcXFwiPlxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OnRhYmxlLWNlbGw7IHdpZHRoOjEwMCVcXFwiIC8+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBzdHlsZT1cXFwiZGlzcGxheTp0YWJsZS1jZWxsOyBwYWRkaW5nOiAycHg7XFxcIiAgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImF0dHI6IHsnZGF0YS10YXJnZXQnIDogbW9kYWxOYW1lVGFyZ2V0fVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJhdHRyOiB7aWQgOiBtb2RhbE5hbWV9XFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj4mdGltZXM7PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ZWRpdG9yLnRpdGxlXFxcIj48L2g0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5IHN2ZF9ub3RvcGJvdHRvbXBhZGRpbmdzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yY29udGVudC0nICsgZWRpdG9yVHlwZSwgZGF0YTogZWRpdG9yIH0gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBlZGl0b3Iub25BcHBseUNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hcHBseScpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBlZGl0b3Iub25BcHBseUNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5vaycpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBlZGl0b3Iub25SZXNldENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jYW5jZWwnKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1vZGFsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLW51bWJlclxcXCI+XFxuICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiAvPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbnVtYmVyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXJlc3RmdWxsXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcblxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LXJlc3RmdWxsXFxcIj5cXG4gICAgPGZvcm0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1cmxcXFwiPlVybDo8L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidXJsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVXJsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXRoXFxcIj5QYXRoOjwvbGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXRoXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvUGF0aFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidmFsdWVOYW1lXFxcIj52YWx1ZU5hbWU6PC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInZhbHVlTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1ZhbHVlTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidGl0bGVOYW1lXFxcIj50aXRsZU5hbWU6PC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInRpdGxlTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1RpdGxlTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidGl0bGVOYW1lXFxcIj48c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6JHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50ZXN0U2VydmljZScpXFxcIj48L3NwYW4+PC9sYWJlbD5cXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczogcXVlc3Rpb24ua29WaXNpYmxlQ2hvaWNlcywgb3B0aW9uc1RleHQ6ICd0ZXh0Jywgb3B0aW9uc1ZhbHVlOiAndmFsdWUnLCBvcHRpb25zQ2FwdGlvbjogcXVlc3Rpb24ub3B0aW9uc0NhcHRpb25cXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZm9ybT5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXJlc3RmdWxsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXN0cmluZ1xcXCI+XFxuICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBrb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgLz5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXN0cmluZy5odG1sXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci10ZXh0XFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcblxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LXRleHRcXFwiPlxcbiAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgcm93cz1cXFwiMTBcXFwiIGF1dG9mb2N1cz1cXFwiYXV0b2ZvY3VzXFxcIj48L3RleHRhcmVhPlxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci10ZXh0aXRlbXNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdGV4dGl0ZW1zXFxcIj5cXG48ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcbiAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5uYW1lJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudGl0bGUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvTmFtZVxcXCIgc3R5bGU9XFxcIndpZHRoOjIwMHB4XFxcIiAvPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1RpdGxlXFxcIiBzdHlsZT1cXFwid2lkdGg6MjAwcHhcXFwiIC8+PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCI0XFxcIj48aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5hZGROZXcnKVxcXCIvPjwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10ZXh0aXRlbXMuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItdHJpZ2dlcnNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdHJpZ2dlcnNcXFwiPlxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbToxMHB4XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhdmFpbGFibGVUcmlnZ2VycyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkFkZENsaWNrKCRkYXRhKVxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogJ2tvVGV4dCcsIHZhbHVlOiBrb1NlbGVjdGVkXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvU2VsZWN0ZWQoKSA9PSBudWxsXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1F1ZXN0aW9ucygpLmxlbmd0aCA9PSAwLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLm5vcXVlc3Rpb25zJylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvUXVlc3Rpb25zKCkubGVuZ3RoID4gMCwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jcmVhdGV0cmlnZ2VyJylcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ3aXRoOiBrb1NlbGVjdGVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbToxMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgIGZvcm0taW5saW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlck9uJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6JHBhcmVudC5rb1F1ZXN0aW9ucywgdmFsdWU6IGtvTmFtZVxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczphdmFpbGFibGVPcGVyYXRvcnMsIG9wdGlvbnNWYWx1ZTogJ25hbWUnLCBvcHRpb25zVGV4dDogJ3RleHQnLCB2YWx1ZTprb09wZXJhdG9yXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvUmVxdWlyZVZhbHVlLCB2YWx1ZTprb1ZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09ICd2aXNpYmxldHJpZ2dlcicgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTYgY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcycsIGRhdGE6IHBhZ2VzIH0gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy02IGNvbC1zbS02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMnLCBkYXRhOiBxdWVzdGlvbnMgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8IS0tIGtvIGlmOiBrb1R5cGUoKSA9PSAnY29tcGxldGV0cmlnZ2VyJyAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbjogMTBweFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRyaWdnZXJDb21wbGV0ZVRleHQnKVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPCEtLSBrbyBpZjoga29UeXBlKCkgPT0gJ3NldHZhbHVldHJpZ2dlcicgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VyU2V0VG9OYW1lJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb3NldFRvTmFtZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VyU2V0VmFsdWUnKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvc2V0VmFsdWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb2lzVmFyaWFibGVcXFwiIC8+IDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VySXNWYXJpYWJsZScpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy04IGNvbC1zbS04XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgbm8tbWFyZ2lucyBuby1wYWRkaW5nXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MTBweFxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczprb0Nob29zZW4sIHZhbHVlOiBrb0Nob29zZW5TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCIgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOnRvcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29DaG9vc2VuU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1xcXCIgY2xhc3M9XFxcImJ0blxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6NXB4XFxcIj5cXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczprb09iamVjdHMsIHZhbHVlOiBrb1NlbGVjdGVkXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uQWRkQ2xpY2tcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXZhbGlkYXRvcnNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdmFsaWRhdG9yc1xcXCI+XFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGUgaW5wdXQtZ3JvdXAtYWRkb25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhdmFpbGFibGVWYWxpZGF0b3JzIC0tPlxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkFkZENsaWNrKCRkYXRhKVxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDwhLS0gL2tvICAtLT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogJ3RleHQnLCB2YWx1ZToga29TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkRlbGV0ZUNsaWNrXFxcIiBjbGFzcz1cXFwiYnRuXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAnb2JqZWN0ZWRpdG9yJywgZGF0YTogc2VsZWN0ZWRPYmplY3RFZGl0b3IgfVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci12YWxpZGF0b3JzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInF1ZXN0aW9uZWRpdG9yLWNvbnRlbnRcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCIgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBrb1RhYnNcXFwiPlxcbiAgICAgICAgPGxpIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHthY3RpdmU6ICRwYXJlbnQua29BY3RpdmVUYWIoKSA9PSAkZGF0YS5uYW1lfSwgY2xpY2s6ICRwYXJlbnQub25UYWJDbGlja1xcXCI+PGE+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhLnRpdGxlXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgIDwvdWw+ICAgICAgICAgICAgICAgXFxuICAgIDwhLS0ga28gZm9yZWFjaDoga29UYWJzIC0tPlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTokcGFyZW50LmtvQWN0aXZlVGFiKCkgPT0gJGRhdGEubmFtZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6NXB4XFxcIj5cXG4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJGRhdGEuaHRtbFRlbXBsYXRlLCBkYXRhOiAkZGF0YS50ZW1wbGF0ZU9iamVjdCB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tIC9rbyAgLS0+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvci1jb250ZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInF1ZXN0aW9uZWRpdG9yXFxcIj5cXG4gICAgPGRpdiBpZD1cXFwic3VydmV5cXVlc3Rpb25lZGl0b3J3aW5kb3dcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiZGF0YS1iaW5kPVxcXCJ3aXRoOmtvRWRpdG9yXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj4mdGltZXM7PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6a29UaXRsZVxcXCI+PC9oND5cXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keSBzdmRfbm90b3Bib3R0b21wYWRkaW5nc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcXCJxdWVzdGlvbmVkaXRvci1jb250ZW50XFxcIiwgZGF0YTogJGRhdGEgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQXBwbHlDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUuYXBwbHknKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25Pa0NsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5vaycpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvblJlc2V0Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmNhbmNlbCcpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbFxcXCI+XFxuICAgIDxkaXY+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHByb3BlcnRpZXMucm93cyAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogcHJvcGVydGllcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0hhc0Vycm9yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5FcnJvcjo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGRhdGEtYmluZD1cXFwidGV4dDprb0Vycm9yVGV4dFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSAhPSAnY2hlY2snIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLWJpbmQ9XFxcInRleHQ6dGl0bGVcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICd0ZXh0JyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZSwgZGlzYWJsZTogZGlzYWJsZWRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICd0ZXh0YXJlYScgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XFxcInRleHRcXFwiIHJvd3M9XFxcIjJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIGRpc2FibGU6IGRpc2FibGVkXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAnY2hlY2snIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb1ZhbHVlLCBkaXNhYmxlOiBkaXNhYmxlZFxcXCI+PGxhYmVsIGRhdGEtYmluZD1cXFwidGV4dDp0aXRsZVxcXCI+PC9sYWJlbD48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICdkcm9wZG93bicgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZSwgb3B0aW9uczogY2hvaWNlcywgZGlzYWJsZTogZGlzYWJsZWRcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJzdXJ2ZXllbWJlZGluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8c2VsZWN0IGRhdGEtYmluZD1cXFwidmFsdWU6a29MaWJyYXJ5VmVyc2lvblxcXCI+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYW5ndWxhclxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LmFuZ3VsYXInKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwianF1ZXJ5XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuanF1ZXJ5JylcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImtub2Nrb3V0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcua25vY2tvdXQnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicmVhY3RcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5yZWFjdCcpXFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ2dWVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy52dWUnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDxzZWxlY3QgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1NjcmlwdFVzaW5nXFxcIj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJib290c3RyYXBcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5ib290c3RyYXAnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwic3RhbmRhcmRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5zdGFuZGFyZCcpXFxcIj48L29wdGlvbj5cXG4gICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvU2hvd0FzV2luZG93XFxcIj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJwYWdlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuc2hvd09uUGFnZScpXFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ3aW5kb3dcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5zaG93SW5XaW5kb3cnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2hlY2tib3gtaW5saW5lXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNJZHNcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOmtvTG9hZFN1cnZleVxcXCIgLz5cXG4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcubG9hZEZyb21TZXJ2ZXInKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9sYWJlbD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy50aXRsZVNjcmlwdCcpXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmhhc0FjZUVkaXRvclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5RW1iZWRpbmdIZWFkXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjcwcHg7d2lkdGg6MTAwJVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWhhc0FjZUVkaXRvciwgdGV4dDoga29IZWFkVGV4dFxcXCIgc3R5bGU9XFxcImhlaWdodDo3MHB4O3dpZHRoOjEwMCVcXFwiPjwvdGV4dGFyZWE+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1Zpc2libGVIdG1sXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiICBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudGl0bGVIdG1sJylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6aGFzQWNlRWRpdG9yXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlFbWJlZGluZ0JvZHlcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MzBweDt3aWR0aDoxMDAlXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHRleHRhcmVhIGRhdGEtYmluZD1cXFwidmlzaWJsZTohaGFzQWNlRWRpdG9yLCB0ZXh0OiBrb0JvZHlUZXh0XFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjMwcHg7d2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiICBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudGl0bGVKYXZhU2NyaXB0JylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6aGFzQWNlRWRpdG9yXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlFbWJlZGluZ0phdmFcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MzAwcHg7d2lkdGg6MTAwJVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWhhc0FjZUVkaXRvciwgdGV4dDoga29KYXZhVGV4dFxcXCIgc3R5bGU9XFxcImhlaWdodDozMDBweDt3aWR0aDoxMDAlXFxcIj48L3RleHRhcmVhPlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvc3VydmV5ZW1iZWRpbmcuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgZGF0YS1iaW5kPVxcXCJldmVudDp7XFxuICAgICAgICAgICBkcmFnZW50ZXI6ZnVuY3Rpb24oZWwsIGUpeyBkcmFnRW50ZXIoZSk7fSxcXG4gICAgICAgICAgIGRyYWdsZWF2ZTpmdW5jdGlvbihlbCwgZSl7IGRyYWdMZWF2ZShlKTt9LFxcbiAgICAgICAgICAgZHJhZ292ZXI6ZnVuY3Rpb24oZWwsIGUpeyByZXR1cm4gZmFsc2U7fSxcXG4gICAgICAgICAgIGRyb3A6ZnVuY3Rpb24oZWwsIGUpeyBkcmFnRHJvcChlKTt9fVxcbiAgICAgXFxcIj5cXG4gICAgPGg0IGRhdGEtYmluZD1cXFwidmlzaWJsZTogKHRpdGxlLmxlbmd0aCA+IDApICYmIGRhdGEuc2hvd1BhZ2VUaXRsZXMsIHRleHQ6IGtvTm8oKSArIHByb2Nlc3NlZFRpdGxlLCBjc3M6ICRyb290LmNzcy5wYWdlVGl0bGVcXFwiPjwvaDQ+XFxuICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3dzLCBhczogJ3Jvdyd9IC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdmRfcXVlc3Rpb25fY29udGFpbmVyXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHJvdy5rb1Zpc2libGUsIGNzczogJHJvb3QuY3NzLnJvd1xcXCI+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcm93LnF1ZXN0aW9ucywgYXM6ICdxdWVzdGlvbicgLCBhZnRlclJlbmRlcjogcm93LmtvQWZ0ZXJSZW5kZXIgfSAtLT5cXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTogcXVlc3Rpb24ua29Jc0RyYWdnaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBpZjogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBuYW1lOiAnc3VydmV5LXF1ZXN0aW9uJywgZGF0YTogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBhczogJ3F1ZXN0aW9uJywgdGVtcGxhdGVPcHRpb25zOiB7IGlzRHJhZ2dpbmc6IHRydWUgfSB9IC0tPlxcbiAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdzdXJ2ZXktcXVlc3Rpb24nLCBkYXRhOiBxdWVzdGlvbiwgdGVtcGxhdGVPcHRpb25zOiB7IGlzRHJhZ2dpbmc6IGZhbHNlIH0gfSAtLT5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcIndlbGxcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTokcm9vdC5pc0Rlc2lnbk1vZGUgJiYgcXVlc3Rpb25zLmxlbmd0aCA9PSAwXFxcIj5cXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidmlzaWJsZTogIWtvRHJhZ2dpbmdCb3R0b20oKSwgdGV4dDokcm9vdC5nZXRFZGl0b3JMb2NTdHJpbmcoJ3N1cnZleS5kcm9wUXVlc3Rpb24nKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvRHJhZ2dpbmdCb3R0b21cXFwiPlxcbiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgaWY6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgbmFtZTogJ3N1cnZleS1xdWVzdGlvbicsIGRhdGE6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgYXM6ICdxdWVzdGlvbicsIHRlbXBsYXRlT3B0aW9uczogeyBpc0RyYWdnaW5nOiB0cnVlIH0gfSAtLT5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHF1ZXN0aW9ucy5sZW5ndGggPiAwICYmIGtvRHJhZ2dpbmdCb3R0b20oKVxcXCI+XFxuICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IGlmOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIG5hbWU6ICdzdXJ2ZXktcXVlc3Rpb24nLCBkYXRhOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIGFzOiAncXVlc3Rpb24nLCB0ZW1wbGF0ZU9wdGlvbnM6IHsgaXNEcmFnZ2luZzogdHJ1ZSB9IH0gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtbG9hZGVyP2ludGVycG9sYXRlIS4vfi92YWwtbG9hZGVyIS4vc3JjL3RlbXBsYXRlcy5zdXJ2ZXkvdGVtcGxhdGVfcGFnZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic3ZkX3F1ZXN0aW9uXFxcIiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246dG9wXFxcIiBkYXRhLWJpbmQ9XFxcInN0eWxlOiB7ZGlzcGxheTogcXVlc3Rpb24ua29WaXNpYmxlKCl8fCAkcm9vdC5pc0Rlc2lnbk1vZGUgPyAnaW5saW5lLWJsb2NrJzogJ25vbmUnLCBtYXJnaW5MZWZ0OiBxdWVzdGlvbi5rb01hcmdpbkxlZnQsIHBhZGRpbmdSaWdodDogcXVlc3Rpb24ua29QYWRkaW5nUmlnaHQsIHdpZHRoOiBxdWVzdGlvbi5rb1JlbmRlcldpZHRoIH0sXFxuICAgICBhdHRyIDoge2lkOiBpZCwgZHJhZ2dhYmxlOiAkcm9vdC5pc0Rlc2lnbk1vZGV9LCBjbGljazogJHJvb3QuaXNEZXNpZ25Nb2RlID8ga29PbkNsaWNrOiBudWxsLCBcXG4gICAgICAgICBldmVudDp7XFxuICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbihlbCwgZSkgeyBpZihlLndpdGNoID09IDQ2KSAkcm9vdC5kZWxldGVDdXJyZW50T2JqZWN0Q2xpY2soKTsgcmV0dXJuIHRydWU7IH0sXFxuICAgICAgICAgICBkcmFnc3RhcnQ6ZnVuY3Rpb24oZWwsIGUpeyBkcmFnU3RhcnQoZSk7IHJldHVybiB0cnVlOyB9LFxcbiAgICAgICAgICAgZHJhZ292ZXI6ZnVuY3Rpb24oZWwsIGUpeyBpZighcXVlc3Rpb24uaXNEcmFnZ2luZykgZHJhZ092ZXIoZSk7fSxcXG4gICAgICAgICAgIGRyYWdlbmQ6ZnVuY3Rpb24oZWwsIGUpeyBkcmFnRW5kKGUpO30sXFxuICAgICAgICAgICBkcm9wOmZ1bmN0aW9uKGVsLCBlKXsgZHJhZ0Ryb3AoZSk7fVxcbiAgICAgICAgIH0sIGNzczp7c3ZkX3FfZGVzaWduX2JvcmRlcjogJHJvb3QuaXNEZXNpZ25Nb2RlLCBzdmRfcV9zZWxlY3RlZCA6IGtvSXNTZWxlY3RlZCwgJ3dlbGwgd2VsbC1zbSc6ICRyb290LmlzRGVzaWduTW9kZX1cXFwiPlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwiY3NzOntzdmRfcV9kZXNpZ246ICRyb290LmlzRGVzaWduTW9kZX0sIHN0eWxlOntvcGFjaXR5OiBxdWVzdGlvbi5rb0lzRHJhZ2dpbmdTb3VyY2UoKSA/IDAuNCA6IDF9XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29FcnJvcnMoKS5sZW5ndGggPiAwLCBmb3JlYWNoOiBrb0Vycm9yc1xcXCI+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZXhjbGFtYXRpb24tc2lnblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhLmdldFRleHQoKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIGtvIGlmOiBxdWVzdGlvbi5oYXNUaXRsZSAtLT5cXG4gICAgICAgIDxoNSBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICRyb290LnF1ZXN0aW9uVGl0bGVMb2NhdGlvbiA9PSAndG9wJywgdGV4dDogcXVlc3Rpb24ua29UaXRsZSgpLCBjc3M6ICRyb290LmNzcy5xdWVzdGlvbi50aXRsZVxcXCI+PC9oNT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAnc3VydmV5LXF1ZXN0aW9uLWVycm9ycycsIGRhdGE6IHF1ZXN0aW9uIH0gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogcXVlc3Rpb24ua29UZW1wbGF0ZU5hbWUoKSwgZGF0YTogcXVlc3Rpb24sIGFmdGVyUmVuZGVyOiBxdWVzdGlvbi5rb1F1ZXN0aW9uQWZ0ZXJSZW5kZXIgfSAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHF1ZXN0aW9uLmhhc0NvbW1lbnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZXh0OnF1ZXN0aW9uLmNvbW1lbnRUZXh0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ3N1cnZleS1jb21tZW50JywgZGF0YTogeydxdWVzdGlvbic6IHF1ZXN0aW9uLCAndmlzaWJsZSc6IHRydWUgfSB9XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLSBrbyBpZjogcXVlc3Rpb24uaGFzVGl0bGUgLS0+XFxuICAgICAgICA8aDUgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAkcm9vdC5xdWVzdGlvblRpdGxlTG9jYXRpb24gPT0gJ2JvdHRvbScsIHRleHQ6IHF1ZXN0aW9uLmtvVGl0bGUoKSwgY3NzOiAkcm9vdC5jc3MucXVlc3Rpb24udGl0bGVcXFwiPjwvaDU+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInN2ZF9xdWVzdGlvbl9tZW51XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvSXNTZWxlY3RlZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiIHJvbGU9XFxcImdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSAgYnRuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcm9vdC5lZGl0UXVlc3Rpb25DbGlja1xcXCI+PHNwYW4+RWRpdDwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSAgYnRuLXhzIGRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHJvb3QuY29weVF1ZXN0aW9uQ2xpY2ssIHRleHQ6JHJvb3QuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuYWRkVG9Ub29sYm94JylcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcm9vdC5mYXN0Q29weVF1ZXN0aW9uQ2xpY2ssIHRleHQ6JHJvb3QuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuY29weScpXFxcIj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHJvb3QuZGVsZXRlQ3VycmVudE9iamVjdENsaWNrLCB0ZXh0OiRyb290LmdldEVkaXRvckxvY1N0cmluZygnc3VydmV5LmRlbGV0ZVF1ZXN0aW9uJylcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtbG9hZGVyP2ludGVycG9sYXRlIS4vfi92YWwtbG9hZGVyIS4vc3JjL3RlbXBsYXRlcy5zdXJ2ZXkvdGVtcGxhdGVfcXVlc3Rpb24uaHRtbFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiICsgcmVxdWlyZSgnLi9pbmRleC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9qc29uZWRpdG9yLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL29iamVjdGVkaXRvci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9vYmplY3R2ZXJicy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wYWdlZWRpdG9yLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3N1cnZleWVtYmVkaW5nLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3ItY29udGVudC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItYm9vbGVhbi5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZHJvcGRvd24uaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWh0bWwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWV4cHJlc3Npb24uaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWl0ZW12YWx1ZXMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1ucy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbW9kYWwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW51bWJlci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItcmVzdGZ1bGwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXN0cmluZy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dGl0ZW1zLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdmFsaWRhdG9ycy5odG1sJykgKyBcIlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSEuL34vdmFsLWxvYWRlciEuL3NyYy90ZW1wbGF0ZXMvZW50cnkuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGVzXG5pbXBvcnQgXCIuLi9tYWluLnNjc3NcIjtcblxuaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmdsb2JhbFtcImpRdWVyeVwiXSA9IGpRdWVyeTtcbmltcG9ydCBcImJvb3RzdHJhcFwiO1xuXG5leHBvcnQge0RyYWdEcm9wSGVscGVyfSBmcm9tIFwiLi4vZHJhZ2Ryb3BoZWxwZXJcIjtcbmV4cG9ydCB7XG4gICAgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLCBTdXJ2ZXlTdHJpbmdQcm9wZXJ0eUVkaXRvcixcbiAgICBTdXJ2ZXlEcm9wZG93blByb3BlcnR5RWRpdG9yLCBTdXJ2ZXlCb29sZWFuUHJvcGVydHlFZGl0b3IsIFN1cnZleU51bWJlclByb3BlcnR5RWRpdG9yXG59IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5VGV4dEl0ZW1zRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VGV4dEl0ZW1zRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5RHJvcGRvd25Db2x1bW5zRWRpdG9yLCBTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW19XG4gICAgZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TW9kYWxFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlSZXN1bHRmdWxsRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5UmVzdGZ1bGxFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlUcmlnZ2Vyc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRyaWdnZXJzRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5VmFsaWRhdG9yc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5T2JqZWN0c30gZnJvbSBcIi4uL3N1cnZleU9iamVjdHNcIjtcblxuZXhwb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcblxuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3csIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnR5fSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXNcIjtcbmV4cG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvblwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvclNob3dXaW5kb3csIFN1cnZleVF1ZXN0aW9uRWRpdG9yLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkdlbmVyYWwsIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiUHJvcGVydHl9IGZyb20gXCIuLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JcIjtcblxuZXhwb3J0IHtRdWVzdGlvblRvb2xib3h9IGZyb20gXCIuLi9xdWVzdGlvblRvb2xib3hcIjtcbmV4cG9ydCB7U3VydmV5T2JqZWN0UHJvcGVydHl9IGZyb20gXCIuLi9vYmplY3RQcm9wZXJ0eVwiO1xuZXhwb3J0IHtTdXJ2ZXlPYmplY3RFZGl0b3J9IGZyb20gXCIuLi9vYmplY3RFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UGFnZXNFZGl0b3J9IGZyb20gXCIuLi9wYWdlc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlUZXh0V29ya2VyfSBmcm9tIFwiLi4vdGV4dFdvcmtlclwiO1xuZXhwb3J0IHtPYmpUeXBlLCBTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuLi9zdXJ2ZXlIZWxwZXJcIjtcbmV4cG9ydCB7U3VydmV5RW1iZWRpbmdXaW5kb3d9IGZyb20gXCIuLi9zdXJ2ZXlFbWJlZGluZ1dpbmRvd1wiO1xuZXhwb3J0IHtTdXJ2ZXlWZXJicywgU3VydmV5VmVyYkl0ZW0sIFN1cnZleVZlcmJDaGFuZ2VUeXBlSXRlbSwgU3VydmV5VmVyYkNoYW5nZVBhZ2VJdGVtfSBmcm9tIFwiLi4vb2JqZWN0VmVyYnNcIjtcbmV4cG9ydCB7U3VydmV5VW5kb1JlZG8sIFVuZG9SZWRvSXRlbX0gZnJvbSBcIi4uL3VuZG9yZWRvXCI7XG5leHBvcnQge1N1cnZleUVkaXRvcn0gZnJvbSBcIi4uL2VkaXRvclwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVRleHRXb3JrZXJ9IGZyb20gXCIuL3RleHRXb3JrZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlKU09ORWRpdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVRleHRUaW1lb3V0OiBudW1iZXIgPSAxMDAwO1xuXG4gICAgcHJpdmF0ZSBpc1Byb2Nlc3NpbmdJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYWNlRWRpdG9yOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwcml2YXRlIHRleHRXb3JrZXI6IFN1cnZleVRleHRXb3JrZXI7XG4gICAga29UZXh0OiBhbnk7XG4gICAga29FcnJvcnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtvVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29FcnJvcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvVGV4dC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBzZWxmLm9uSnNvbkVkaXRvckNoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzQWNlRWRpdG9yKSByZXR1cm47XG4gICAgICAgIHRoaXMuYWNlRWRpdG9yID0gYWNlLmVkaXQoXCJzdXJ2ZXlqc0pTT05FZGl0b3JcIik7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy9UT0RPIGFkZCBldmVudCB0byBjaGFuZ2UgYWNlIHRoZW1lIGFuZCBtb2RlXG4gICAgICAgIC8vdGhpcy5hY2VFZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvbW9ub2thaVwiKTtcbiAgICAgICAgLy90aGlzLmFjZUVkaXRvci5zZXNzaW9uLnNldE1vZGUoXCJhY2UvbW9kZS9qc29uXCIpO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5zZXRTaG93UHJpbnRNYXJnaW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5nZXRTZXNzaW9uKCkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkpzb25FZGl0b3JDaGFuZ2VkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5nZXRTZXNzaW9uKCkuc2V0VXNlV29ya2VyKHRydWUpO1xuICAgICAgICBTdXJ2ZXlUZXh0V29ya2VyLm5ld0xpbmVDaGFyID0gdGhpcy5hY2VFZGl0b3Iuc2Vzc2lvbi5kb2MuZ2V0TmV3TGluZUNoYXJhY3RlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhhc0FjZUVkaXRvcigpOiBib29sZWFuIHsgcmV0dXJuIHR5cGVvZiBhY2UgIT09IFwidW5kZWZpbmVkXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjZUVkaXRvcikgcmV0dXJuIHRoaXMua29UZXh0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjZUVkaXRvci5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb1RleHQodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5hY2VFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuYWNlRWRpdG9yLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuYWNlRWRpdG9yLnJlbmRlcmVyLnVwZGF0ZUZ1bGwodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9jZXNzSnNvbih2YWx1ZSk7XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHkgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIHNob3codmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuYWNlRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmFjZUVkaXRvci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNKc29uQ29ycmVjdCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodGhpcy50ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFdvcmtlci5pc0pzb25Db3JyZWN0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMudGV4dFdvcmtlci5zdXJ2ZXk7IH1cbiAgICBwcml2YXRlIHRpbWVvdXRJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBvbkpzb25FZGl0b3JDaGFuZ2VkKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCA+IC0xKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXRJZCA9IC0xO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0pzb24oc2VsZi50ZXh0KTtcbiAgICAgICAgICAgIH0sIFN1cnZleUpTT05FZGl0b3IudXBkYXRlVGV4dFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcHJvY2Vzc0pzb24odGV4dDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodGV4dCk7XG4gICAgICAgIGlmICh0aGlzLmFjZUVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5hY2VFZGl0b3IuZ2V0U2Vzc2lvbigpLnNldEFubm90YXRpb25zKHRoaXMuY3JlYXRlQW5ub3RhdGlvbnModGV4dCwgdGhpcy50ZXh0V29ya2VyLmVycm9ycykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rb0Vycm9ycyh0aGlzLnRleHRXb3JrZXIuZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUFubm90YXRpb25zKHRleHQ6IHN0cmluZywgZXJyb3JzOiBhbnlbXSk6IEFjZUFqYXguQW5ub3RhdGlvbltdIHtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gbmV3IEFycmF5PEFjZUFqYXguQW5ub3RhdGlvbj4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9yc1tpXTtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uOiBBY2VBamF4LkFubm90YXRpb24gPSB7IHJvdzogZXJyb3IucG9zaXRpb24uc3RhcnQucm93LCBjb2x1bW46IGVycm9yLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbiwgdGV4dDogZXJyb3IudGV4dCwgdHlwZTogXCJlcnJvclwiIH07XG4gICAgICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleUpTT05FZGl0b3IudHMiXSwic291cmNlUm9vdCI6IiJ9